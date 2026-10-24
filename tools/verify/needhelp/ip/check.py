# -*- coding: utf-8 -*-
"""Machine check for the guided course "ip" (courses/ip/C01..C07).

Every stored answer is recomputed independently (ipaddress module + integer arithmetic) and compared with the
option the level file marks correct. Bank questions used by the boss are recomputed from their own stems.
Run:  PYTHONUTF8=1 py tools/verify/needhelp/ip/check.py      (exit 1 on any failure)
"""
import ipaddress as ia, json, math, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
NODE = ("const {load}=require('./tools/course_load.js');const r=load(process.cwd());"
        "process.stdout.write(JSON.stringify(r.levels.filter(e=>e.courseId==='ip').map(e=>e.level)));")
out = subprocess.run(["node", "-e", NODE], cwd=ROOT, capture_output=True, check=True).stdout.decode("utf8")
LEVELS = {l["id"]: l for l in json.loads(out)}
_b = json.load(open(ROOT / "questions.json", encoding="utf8"))
BANK = {q["id"]: q for q in (_b["questions"] if isinstance(_b, dict) else _b)}

fails, n = [], 0


def net(s):
    return ia.ip_network(s, strict=False)


def ip(s):
    return str(net(s).network_address)


def bcast(s):
    return str(net(s).broadcast_address)


def mask(p):
    return str(ia.ip_network("0.0.0.0/%d" % p).netmask)


def frag(S, mtu, is_total=True):
    """-> list of (data, size, offset, mf)"""
    D = S - 20 if is_total else S
    k = (mtu - 20) // 8 * 8
    res, off, left = [], 0, D
    while left > 0:
        d = min(k, left)
        left -= d
        res.append((d, d + 20, off // 8, 0 if left == 0 else 1))
        off += d
    return res


def lpm(dest, table):
    d = ia.ip_address(dest)
    best = None
    for name, cidr in table:
        nw = net(cidr)
        if d in nw and (best is None or nw.prefixlen > best[1]):
            best = (name, nw.prefixlen)
    return best[0] if best else None


def hosts(h):
    return 2 ** h - 2


def min_prefix(n):
    h = 1
    while hosts(h) < n:
        h += 1
    return 32 - h


def valid(s):
    try:
        ia.IPv4Address(s)
        return True
    except ValueError:
        return False


def bits(b):
    return format(b, "08b")


def clean(v):
    return v.replace("`", "").strip()


def correct(qid):
    for l in LEVELS.values():
        for q in l["questions"]:
            if q.get("id") == qid:
                return clean(next(o["value"] for o in q["options"] if o["id"] == q["correctId"])), q
    raise KeyError(qid)


def expect(qid, want):
    global n
    n += 1
    got, q = correct(qid)
    if got != str(want):
        fails.append("%s: stored %r, computed %r" % (qid, got, want))
    # exactly one option equals the computed value (no duplicate-correct distractor)
    same = [o["id"] for o in q["options"] if clean(o["value"]) == str(want)]
    if len(same) != 1:
        fails.append("%s: computed value matches options %s" % (qid, same))
    if len({clean(o["value"]) for o in q["options"]}) != len(q["options"]):
        fails.append("%s: duplicate option values" % qid)


# ---------------- C01 ----------------
expect("C01-Q1", bits(200))
expect("C01-Q2", int("01001101", 2))
expect("C01-Q3", int("11111000", 2))
bad = [o["value"] for o in correct("C01-Q4")[1]["options"] if not valid(clean(o["value"]))]
expect("C01-Q4", clean(bad[0]) if len(bad) == 1 else "AMBIGUOUS %s" % bad)
b = ".".join(str(int(x, 2)) for x in "00001010.00000000.00000000.00000001".split("."))
expect("C01-Q5", b)
expect("C01-Q6", bits(168))
# distractor claims in the explanations
assert int("10011000", 2) == 152 and int("11000100", 2) == 196 and int("11100000", 2) == 224
assert int("10110010", 2) == 178 and int("01001101"[::-1], 2) == 178 and int("10001101", 2) == 141
assert int("10100100", 2) == 164 and int("10010100", 2) == 148 and int("11101000", 2) == 232
assert int("00000101", 2) == 5 and int("00010100", 2) == 20
for byte, v in [("10000000", 128), ("11000000", 192), ("11100000", 224), ("11110000", 240), ("11111000", 248),
                ("11111100", 252), ("11111110", 254), ("11111111", 255)]:
    assert int(byte, 2) == v, byte
assert 128 + 64 + 8 == 200 and 128 + 32 + 8 == 168 and 64 + 8 + 4 + 1 == 77

# ---------------- C02 ----------------
expect("C02-Q1", mask(26))
expect("C02-Q2", mask(20))
expect("C02-Q3", "/%d" % ia.IPv4Network("0.0.0.0/255.255.255.248").prefixlen)
expect("C02-Q4", net("10.0.0.0/27").num_addresses)
expect("C02-Q5", net("10.0.0.0/28").num_addresses - 2)
expect("C02-Q6", 2 ** (8 - 22 % 8))
assert mask(25) == "255.255.255.128" and mask(27) == "255.255.255.224" and mask(18) == "255.255.192.0"
assert mask(21) == "255.255.248.0" and mask(12) == "255.240.0.0" and mask(28) == "255.255.255.240"
assert net("10.0.0.0/22").num_addresses == 1024 and net("10.0.0.0/24").num_addresses == 256
assert net("10.0.0.0/24").num_addresses - 2 == 254

# ---------------- C03 ----------------
expect("C03-Q1", ip("192.168.10.77/26"))
expect("C03-Q2", bcast("192.168.10.77/26"))
expect("C03-Q3", ip("10.5.200.9/20"))
expect("C03-Q4", ip("130.50.77.9/16"))
expect("C03-Q5", bcast("172.16.45.100/21"))
q6 = correct("C03-Q6")[1]
ins = [clean(o["value"]) for o in q6["options"] if ia.ip_address(clean(o["value"])) in net("192.168.1.128/26")]
expect("C03-Q6", ins[0] if len(ins) == 1 else "AMBIGUOUS %s" % ins)
assert ip("200.107.16.17/18") == "200.107.0.0" and bcast("200.107.16.17/18") == "200.107.63.255"
assert str(net("192.168.1.128/26").broadcast_address) == "192.168.1.191"
assert ia.ip_address("192.168.1.127") not in net("192.168.1.128/26") and ia.ip_address("192.168.1.192") not in net("192.168.1.128/26")
assert bcast("172.16.45.100/21") != "172.16.45.255" and ip("10.5.200.9/20") != "10.5.208.0"
assert ip("130.50.77.9/8") == "130.0.0.0" and ip("130.50.77.9/24") == "130.50.77.0"
assert ip("192.168.10.77/24") == "192.168.10.0" and bcast("192.168.10.77/24") == "192.168.10.255"
assert bcast("172.16.45.100/21") == "172.16.47.255"

# ---------------- C04 ----------------
expect("C04-Q1", "/%d" % min_prefix(30))
expect("C04-Q2", "/%d" % min_prefix(100))
subs = list(net("192.168.5.0/24").subnets(new_prefix=26))
expect("C04-Q3", "/%d" % subs[0].prefixlen)
assert len(subs) == 4
expect("C04-Q4", subs[2].network_address)
eight = list(net("192.168.5.0/24").subnets(prefixlen_diff=3))
assert len(eight) == 8
expect("C04-Q5", eight[0].num_addresses - 2)
expect("C04-Q6", len(list(net("10.0.0.0/16").subnets(new_prefix=20))))
assert hosts(5) == 30 and hosts(4) == 14 and hosts(6) == 62 and hosts(7) == 126 and min_prefix(31) == 26
assert min_prefix(50) == 26 and hosts(5) < 50 <= hosts(6)
assert [str(s) for s in subs] == ["192.168.5.0/26", "192.168.5.64/26", "192.168.5.128/26", "192.168.5.192/26"]
assert net("10.0.0.0/16").num_addresses == 65536 and net("10.0.0.0/20").num_addresses == 4096
assert eight[0].prefixlen == 27 and net("10.0.0.0/22").num_addresses == 1024

# ---------------- C05 ----------------
T1 = [("A", "10.0.0.0/8"), ("B", "10.1.0.0/16"), ("C", "10.1.2.0/24"), ("D", "192.168.0.0/16")]
expect("C05-Q1", lpm("10.1.2.77", T1))
expect("C05-Q2", lpm("10.1.9.5", T1))
expect("C05-Q3", lpm("11.1.1.1", [("A", "10.0.0.0/8"), ("B", "10.1.0.0/16"), ("C", "0.0.0.0/0")]))
T4 = [("A", "172.16.32.0/20"), ("B", "172.16.48.0/20"), ("C", "172.16.0.0/16"), ("D", "172.0.0.0/8")]
expect("C05-Q4", lpm("172.16.37.9", T4))
T5 = [("A", "192.168.0.0/22"), ("B", "192.168.4.0/23"), ("C", "192.168.4.128/25"), ("D", "192.168.0.0/16")]
expect("C05-Q5", lpm("192.168.4.200", T5))
# Q6: the /16 entry with host bits matches 25.36.200.1 (answer a: yes)
assert ia.ip_address("25.36.200.1") in net("25.36.64.0/16")
assert correct("C05-Q6")[0].startswith("כן, כי רק 16")
# explanation claims of Q2..Q5
assert ia.ip_address("10.1.9.5") not in net("10.1.2.0/24")
assert ia.ip_address("172.16.37.9") in net("172.16.32.0/20") and ia.ip_address("172.16.37.9") not in net("172.16.48.0/20")
assert (net("172.16.32.0/20").network_address, net("172.16.32.0/20").broadcast_address) == (ia.ip_address("172.16.32.0"), ia.ip_address("172.16.47.255"))
assert ia.ip_address("192.168.4.200") not in net("192.168.0.0/22") and ia.ip_address("192.168.4.200") in net("192.168.4.0/23")
assert str(net("192.168.4.0/23").broadcast_address) == "192.168.5.255" and str(net("192.168.0.0/22").broadcast_address) == "192.168.3.255"
assert net("192.168.4.128/25").broadcast_address == ia.ip_address("192.168.4.255")
assert lpm("10.1.2.77", [("A", "10.0.0.0/8"), ("B", "10.1.0.0/16"), ("C", "10.1.2.0/24")]) == "C"
assert ia.ip_address("10.1.2.77") not in net("10.1.3.0/24")
assert str(net("12.100.64.0/20").network_address) == "12.100.64.0" and str(net("12.100.64.0/20").broadcast_address) == "12.100.79.255"

# ---------------- C06 ----------------
f = frag(4000, 1500)
expect("C06-Q1", len(f))
expect("C06-Q2", f[2][2])
assert [x[0] for x in f] == [1480, 1480, 1020] and f[1][2] == 185 and 2 * 1480 == 2960 and 2 * 1500 // 8 == 375
assert math.floor(3980 / 1500) == 2
expect("C06-Q3", (1000 - 20) // 8 * 8)
assert 976 == 122 * 8
g = frag(3000, 1000, is_total=False)
expect("C06-Q4", g[-1][1])
assert [x[2] for x in g] == [0, 122, 244, 366] and [x[0] for x in g] == [976, 976, 976, 72] and [x[1] for x in g] == [996, 996, 996, 92]
assert 366 * 8 + 72 == 3000
h = frag(2000, 700)
expect("C06-Q5", h[1][2])
assert (700 - 20) // 8 * 8 == 680 and 680 // 8 == 85 and 700 // 8 == 87
mf = ", ".join(str(x[3]) for x in f)
expect("C06-Q6", mf)
assert mf == "1, 1, 0"
# lesson claim: 2000 bytes, MTU 420 -> 5th offset 200 (1600 bytes)
assert frag(2000, 420)[4][2] == 200 and 4 * 400 == 1600

# ---------------- C07 (boss, bank questions): recompute each from its own stem ----------------
def bank_correct(qid):
    q = BANK[qid]
    return clean(next(o["value"] for o in q["options"] if o["id"] == q["correctId"]))


def bank_expect(qid, want):
    global n
    n += 1
    got = bank_correct(qid)
    if want not in got and got != want:
        fails.append("%s: bank key %r vs computed %r" % (qid, got, want))
    q = BANK[qid]
    if q.get("hold"):
        fails.append("%s: held" % qid)


bank_expect("23A-A-Q16", "200.107.0.0")
assert "200.107.63.255" in bank_correct("23A-A-Q16")
bank_expect("25A-B-Q10", str(net("223.1.2.0/24").num_addresses))
T_exam = [("A", "25.36.64.0/16"), ("B", "25.36.128.0/20"), ("C", "25.36.64.0/20"), ("D", "20.0.0.0/8"), ("E", "25.30.0.0/12")]
# 23A-B-Q10: options a..e = A..E; correct option text is the letter
bank_expect("23A-B-Q10", lpm("25.36.67.5", T_exam))
bank_expect("25A-A-Q6", lpm("12.100.60.37", [("A", "12.100.50.0/20"), ("B", "12.100.64.0/20"), ("C", "12.0.0.0/8"), ("D", "12.100.0.0/16")]))
bank_expect("26A-A-Q7", "Offset=%d" % frag(2000, 500)[3][2])
assert len(frag(2000, 500)) == 5
bank_expect("23A-B-Q2", "%d" % (2580 - 20))
assert "2560" in bank_correct("23A-B-Q2")
assert len(frag(2580, 532)) == 5 and frag(2580, 532)[4][2] == 256
for qid in ["23A-A-Q16", "25A-B-Q10", "23A-B-Q10", "25A-A-Q6", "26A-A-Q7", "23A-B-Q2"]:
    assert not BANK[qid].get("hold"), qid
c07 = [q.get("bankId") for q in LEVELS["C07"]["questions"]]
assert c07 == ["23A-A-Q16", "25A-B-Q10", "23A-B-Q10", "25A-A-Q6", "26A-A-Q7", "23A-B-Q2"], c07

if fails:
    print("FAIL (%d of %d checks)" % (len(fails), n))
    for x in fails:
        print("  " + x.encode("ascii", "replace").decode())
    sys.exit(1)
print("OK: %d answers asserted for course ip" % n)
