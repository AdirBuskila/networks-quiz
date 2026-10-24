# -*- coding: utf-8 -*-
"""Python reference for the built-in calculators (calc.js), networks app extra.

Run:  py tools/verify/calc/ref.py            -> writes tools/verify/calc/vectors.json and prints a summary
      py tools/verify/calc/ref.py --stdout   -> prints the vectors JSON instead (tools/test_calc.js uses this)

The formulas are the ones the key check scripts use (tools/verify/*/check.py and refute_calc.py):
  subnet / LPM   ipaddress.ip_network(cidr, strict=False), longest prefixlen among the matching entries
  delay          sum over links of L/R_i + d_i/s, store-and-forward; P packets back to back add (P-1)*L/min(R)
  intensity      La/R with a in packets per second (per hour / 3600, per minute / 60); a_max = rho*R/L
  CRC            D shifted left by r = len(G)-1, XOR G under every leading 1 (the 25A-B check.py loop)
  2D parity      row and column sums mod 2 over the received block (the 25A-A check.py rule)
  TCP cwnd       per RTT round: slow start doubles (optionally capped at ssthresh), congestion avoidance +1,
                 a loss sets ssthresh = max(floor(cwnd/2), 1); timeout (and Tahoe on 3 dup ACKs) -> cwnd 1,
                 Reno on 3 dup ACKs -> cwnd = ssthresh (+3 when plus3)
Every random case is seeded, so the vectors are reproducible. Output is ASCII only.
"""
import ipaddress
import json
import math
import pathlib
import random
import sys

HERE = pathlib.Path(__file__).resolve().parent
SIZE = {"bit": 1, "byte": 8, "Kbit": 1e3, "KB": 8e3, "Mbit": 1e6, "MB": 8e6}
RATE = {"bps": 1, "Kbps": 1e3, "Mbps": 1e6, "Gbps": 1e9}
DIST = {"m": 1, "km": 1e3}
PER = {"s": 1, "min": 60, "hour": 3600}


# ------------------------------------------------------------------ IP
def pad_cidr(s):
    """'223.1.2/24' -> '223.1.2.0/24' (the textbook's short form)."""
    a, _, p = s.partition("/")
    parts = a.split(".")
    parts += ["0"] * (4 - len(parts))
    return ".".join(parts) + ("/" + p if p else "/32")


def subnet(cidr):
    net = ipaddress.ip_network(pad_cidr(cidr), strict=False)
    addr = ipaddress.ip_address(pad_cidr(cidr).split("/")[0])
    p = net.prefixlen
    total = net.num_addresses
    if p <= 30:
        first, last, usable = net.network_address + 1, net.broadcast_address - 1, total - 2
    else:   # /31 point-to-point and /32 host routes: every address is usable
        first, last, usable = net.network_address, net.broadcast_address, total
    return {"addr": str(addr), "prefix": p, "mask": str(net.netmask), "network": str(net.network_address),
            "broadcast": str(net.broadcast_address), "first": str(first), "last": str(last),
            "total": total, "usable": usable, "hostBitsSet": addr != net.network_address}


def lpm(table, dst):
    """table: list of 'LABEL: a.b.c.d/p' lines (the exam layout); returns the matching entries and the longest."""
    d = ipaddress.ip_address(dst)
    entries, best, best_len = [], None, -1
    for line in table:
        label, _, cidr = line.partition(":")
        net = ipaddress.ip_network(pad_cidr(cidr.strip()), strict=False)
        hit = d in net
        entries.append({"label": label.strip(), "network": str(net.network_address), "prefix": net.prefixlen, "match": hit})
        if hit and net.prefixlen > best_len:
            best, best_len = label.strip(), net.prefixlen
    return {"entries": entries, "best": best}


# ------------------------------------------------------------------ delay
def delay(c):
    L = c["L"] * SIZE[c["Lunit"]]
    links = []
    for k in c["links"]:
        for _ in range(int(k.get("n", 1))):
            R = k["R"] * RATE[k["Runit"]]
            dm = k["d"] * DIST[k["dunit"]]
            links.append({"trans": L / R, "prop": dm / c["s"], "R": R})
    trans = sum(x["trans"] for x in links)
    prop = sum(x["prop"] for x in links)
    P = int(c.get("packets", 1))
    extra = (P - 1) * L / min(x["R"] for x in links)
    return {"Lbits": L, "nLinks": len(links), "trans": trans, "prop": prop, "pipeline": extra,
            "total": trans + prop + extra, "links": [{"trans": x["trans"], "prop": x["prop"]} for x in links]}


def intensity(c):
    L = c["L"] * SIZE[c["Lunit"]]
    R = c["R"] * RATE[c["Runit"]]
    a = c["a"] / PER[c["aunit"]]
    out = {"Lbits": L, "Rbps": R, "aPerSec": a, "rho": a * L / R}
    if c.get("rho") is not None:
        amax = c["rho"] * R / L
        out["aMax"] = {"s": amax, "min": amax * 60, "hour": amax * 3600}
    return out


# ------------------------------------------------------------------ CRC / parity
def crc(D, G):
    r = len(G) - 1
    x = int(D, 2) << r
    g = int(G, 2)
    n = len(D) + r
    steps = []
    for i in range(n - 1, r - 1, -1):          # same loop as 25A-B/refute_calc.py
        if x >> i & 1:
            before = format(x, "0%db" % n)
            x ^= g << (i - r)
            steps.append({"pos": n - 1 - i, "before": before, "after": format(x, "0%db" % n)})
    rem = format(x, "0%db" % r) if r else ""
    return {"r": r, "remainder": rem, "codeword": D + rem, "steps": steps}


def crc_check(W, G):
    r = len(G) - 1
    x, g, n = int(W, 2), int(G, 2), len(W)
    for i in range(n - 1, r - 1, -1):
        if x >> i & 1:
            x ^= g << (i - r)
    rem = format(x, "0%db" % r)
    return {"remainder": rem, "ok": x == 0}


def parity2d(rows, parity, has_check):
    g = [[int(ch) for ch in row.replace(" ", "")] for row in rows]
    want = 0 if parity == "even" else 1
    if has_check:
        bad_r = [i + 1 for i, row in enumerate(g) if sum(row) % 2 != want]
        bad_c = [j + 1 for j in range(len(g[0])) if sum(row[j] for row in g) % 2 != want]
        status = "ok" if not bad_r and not bad_c else ("single" if len(bad_r) == 1 and len(bad_c) == 1 else "multi")
        return {"badRows": bad_r, "badCols": bad_c, "status": status,
                "location": [bad_r[0], bad_c[0]] if status == "single" else None}
    bit = lambda s: (s % 2) ^ want
    row_bits = [bit(sum(row)) for row in g]
    full = [row + [b] for row, b in zip(g, row_bits)]
    col_bits = [bit(sum(row[j] for row in full)) for j in range(len(full[0]))]
    return {"rowBits": row_bits, "colBits": col_bits}


# ------------------------------------------------------------------ TCP
def tcp(c):
    cw, ss = c["init"], c["ssthresh"]
    ev = {int(k): v for k, v in c.get("events", {}).items()}
    out = []
    for r in range(1, c["rounds"] + 1):
        e = ev.get(r)
        out.append({"r": r, "cwnd": cw, "ssthresh": ss, "phase": "ss" if cw < ss else "ca", "event": e})
        if e in ("timeout", "3dup"):
            ss = max(cw // 2, 1)
            if e == "timeout" or c["variant"] == "tahoe":
                cw = 1
            else:
                cw = ss + (3 if c.get("plus3") else 0)
        elif cw < ss:
            cw = min(2 * cw, ss) if c.get("cap", True) else 2 * cw
        else:
            cw += 1
    return out


# ------------------------------------------------------------------ cases
def cases():
    rnd = random.Random(20261024)
    C = []
    add = lambda kind, inp, src="random": C.append({"kind": kind, "src": src, "input": inp})

    # real exam questions (the keys' own numbers)
    add("delay", {"L": 5000, "Lunit": "bit", "s": 2e8, "packets": 1,
                  "links": [{"R": 100, "Runit": "Mbps", "d": 1000, "dunit": "km"}, {"R": 50, "Runit": "Mbps", "d": 1000, "dunit": "km"},
                            {"R": 10, "Runit": "Mbps", "d": 1000, "dunit": "km"}]}, "25A-C-Q3")
    add("delay", {"L": 4000, "Lunit": "bit", "s": 3e8, "packets": 1,
                  "links": [{"R": 1000, "Runit": "Mbps", "d": 2, "dunit": "km"}, {"R": 100, "Runit": "Mbps", "d": 1000, "dunit": "km"},
                            {"R": 10, "Runit": "Mbps", "d": 2, "dunit": "km"}]}, "25A-B-Q7")
    add("delay", {"L": 8000, "Lunit": "bit", "s": 3e8, "packets": 1,
                  "links": [{"R": 10, "Runit": "Mbps", "d": 2, "dunit": "km"}, {"R": 10, "Runit": "Mbps", "d": 1000, "dunit": "km"},
                            {"R": 1000, "Runit": "Mbps", "d": 2, "dunit": "km"}]}, "25A-A-Q2")
    add("intensity", {"a": 500000, "aunit": "hour", "L": 5000, "Lunit": "bit", "R": 1, "Runit": "Gbps"}, "SAMP-2-Q1")
    add("intensity", {"a": 0, "aunit": "s", "L": 5000, "Lunit": "bit", "R": 10, "Runit": "Gbps", "rho": 0.8}, "SAMP-2-Q2")
    add("intensity", {"a": 300000, "aunit": "hour", "L": 1500, "Lunit": "byte", "R": 20, "Runit": "Mbps", "rho": 0.8}, "24A-B-Q6")
    add("crc", {"D": "10011100", "G": "1001"}, "25A-B-Q8")
    add("subnet", {"cidr": "223.1.2/24"}, "25A-B-Q10")
    add("subnet", {"cidr": "200.107.16.17/18"}, "23A-A-Q16")
    add("lpm", {"table": ["A: 25.36.64.0/16", "B: 25.36.128.0/20", "C: 25.36.64.0/20", "D: 20.0.0.0/8"], "addr": "25.36.67.5"}, "25A-B-Q15")
    add("lpm", {"table": ["A: 12.100.50.0/20", "B: 12.100.64.0/20", "C: 12.0.0.0/8", "D: 12.100.0.0/16"], "addr": "12.100.60.37"}, "25A-A-Q6")
    add("parity", {"rows": ["10010100 11001010 1", "10001000 00000000 1", "11011011 11101001 1",
                            "10010000 11101001 1", "00011100 01101010 1", "01011011 10100000 1"],
                   "parity": "even", "hasCheck": True}, "25A-A-Q3")
    # Kurose fig 3.53 (ssthresh 8, triple duplicate ACK in round 8, Reno with the +3 and Tahoe)
    add("tcp", {"rounds": 15, "init": 1, "ssthresh": 8, "variant": "reno", "events": {"8": "3dup"}, "cap": True, "plus3": True}, "Kurose-3.53-Reno")
    add("tcp", {"rounds": 15, "init": 1, "ssthresh": 8, "variant": "tahoe", "events": {"8": "3dup"}, "cap": True, "plus3": True}, "Kurose-3.53-Tahoe")

    # random cases
    for _ in range(60):
        p = rnd.randint(0, 32)
        add("subnet", {"cidr": ".".join(str(rnd.randint(0, 255)) for _ in range(4)) + "/" + str(p)})
    for _ in range(30):
        base = [rnd.randint(1, 223), rnd.randint(0, 255), rnd.randint(0, 255), rnd.randint(0, 255)]
        dst = ".".join(map(str, base))
        tbl = []
        for k in range(rnd.randint(2, 6)):
            q = base[:]
            if rnd.random() < 0.4:
                q[rnd.randint(1, 3)] = rnd.randint(0, 255)
            tbl.append(f"{chr(65 + k)}: {'.'.join(map(str, q))}/{rnd.choice([0, 8, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32])}")
        add("lpm", {"table": tbl, "addr": dst})
    units = list(SIZE)
    for _ in range(30):
        links = [{"R": rnd.choice([1, 2, 5, 10, 20, 50, 100, 155, 1000]), "Runit": rnd.choice(list(RATE)),
                  "d": rnd.choice([0, 1, 2, 10, 500, 1000, 3000]), "dunit": rnd.choice(list(DIST)), "n": rnd.randint(1, 3)}
                 for _ in range(rnd.randint(1, 4))]
        add("delay", {"L": rnd.choice([40, 500, 1000, 1500, 4000, 5000, 8000, 12000]), "Lunit": rnd.choice(units),
                      "s": rnd.choice([2e8, 2.5e8, 3e8]), "packets": rnd.randint(1, 5), "links": links})
    for _ in range(20):
        c = {"a": rnd.choice([10, 100, 1200, 300000, 500000, 2e6]), "aunit": rnd.choice(list(PER)),
             "L": rnd.choice([500, 1500, 5000, 12000]), "Lunit": rnd.choice(units),
             "R": rnd.choice([1, 10, 20, 100]), "Runit": rnd.choice(list(RATE))}
        if rnd.random() < 0.5:
            c["rho"] = rnd.choice([0.5, 0.8, 0.9, 1])
        add("intensity", c)
    for _ in range(40):
        g = "1" + "".join(rnd.choice("01") for _ in range(rnd.randint(1, 6)))
        if rnd.random() < 0.7:
            g = g[:-1] + "1"
        add("crc", {"D": "".join(rnd.choice("01") for _ in range(rnd.randint(1, 20))), "G": g})
    for _ in range(20):
        g = "1" + "".join(rnd.choice("01") for _ in range(rnd.randint(1, 5)))
        add("crc_check", {"W": "".join(rnd.choice("01") for _ in range(len(g) + rnd.randint(0, 14))), "G": g})
    for _ in range(25):
        nr, nc = rnd.randint(1, 7), rnd.randint(1, 9)
        rows = ["".join(rnd.choice("01") for _ in range(nc)) for _ in range(nr)]
        add("parity", {"rows": rows, "parity": rnd.choice(["even", "odd"]), "hasCheck": rnd.random() < 0.5})
    for _ in range(30):
        ev = {}
        for r in rnd.sample(range(2, 30), rnd.randint(0, 4)):
            ev[str(r)] = rnd.choice(["3dup", "timeout"])
        add("tcp", {"rounds": rnd.randint(5, 30), "init": rnd.choice([1, 1, 2]), "ssthresh": rnd.choice([4, 8, 10, 16, 32, 64]),
                    "variant": rnd.choice(["reno", "tahoe"]), "events": ev, "cap": rnd.random() < 0.5, "plus3": rnd.random() < 0.5})
    return C


def run(c):
    k, i = c["kind"], c["input"]
    if k == "subnet": return subnet(i["cidr"])
    if k == "lpm": return lpm(i["table"], i["addr"])
    if k == "delay": return delay(i)
    if k == "intensity": return intensity(i)
    if k == "crc": return crc(i["D"], i["G"])
    if k == "crc_check": return crc_check(i["W"], i["G"])
    if k == "parity": return parity2d(i["rows"], i["parity"], i["hasCheck"])
    if k == "tcp": return tcp(i)
    raise ValueError(k)


def self_check(C):
    """The exam cases must reproduce the keys' numbers before any vector is written."""
    by = {c["src"]: c["output"] for c in C if c["src"] != "random"}
    assert round(by["25A-C-Q3"]["total"] * 1e3, 6) == 15.65
    assert round(by["25A-B-Q7"]["total"], 4) == 0.0038
    assert by["25A-A-Q2"]["total"] < 5e-3
    assert round(by["SAMP-2-Q1"]["rho"], 4) == 0.0007
    assert int(round(by["SAMP-2-Q2"]["aMax"]["s"])) == 1600000
    assert int(by["24A-B-Q6"]["aMax"]["s"]) == 1333
    assert by["25A-B-Q8"]["remainder"] == "101"
    assert by["25A-B-Q10"]["total"] == 256
    assert (by["23A-A-Q16"]["network"], by["23A-A-Q16"]["broadcast"]) == ("200.107.0.0", "200.107.63.255")
    assert by["25A-B-Q15"]["best"] == "C" and by["25A-A-Q6"]["best"] == "A"
    assert by["25A-A-Q3"]["location"] == [2, 4]
    assert [x["cwnd"] for x in by["Kurose-3.53-Reno"]][:12] == [1, 2, 4, 8, 9, 10, 11, 12, 9, 10, 11, 12]
    assert [x["cwnd"] for x in by["Kurose-3.53-Tahoe"]][:12] == [1, 2, 4, 8, 9, 10, 11, 12, 1, 2, 4, 6]
    # CRC: the codeword divides evenly
    for c in C:
        if c["kind"] == "crc":
            assert crc_check(c["output"]["codeword"], c["input"]["G"])["ok"]


def main():
    C = cases()
    for c in C:
        c["output"] = run(c)
    self_check(C)
    payload = json.dumps({"generated": "tools/verify/calc/ref.py", "cases": C}, ensure_ascii=True, indent=None)
    if "--stdout" in sys.argv:
        sys.stdout.write(payload)
        return
    (HERE / "vectors.json").write_text(payload + "\n", encoding="utf-8")
    kinds = {}
    for c in C:
        kinds[c["kind"]] = kinds.get(c["kind"], 0) + 1
    print("cases:", len(C), kinds)
    print("exam cases:", ", ".join(c["src"] for c in C if c["src"] != "random"))
    print("wrote vectors.json; ALL OK")


if __name__ == "__main__":
    main()
