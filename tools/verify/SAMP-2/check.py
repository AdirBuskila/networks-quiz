# -*- coding: utf-8 -*-
"""Recomputation of every calculation question of SAMP-2 (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/SAMP-2/check.py
"""
import ipaddress

ok = True


def check(name, got, want):
    global ok
    status = "OK" if got == want else "MISMATCH"
    if got != want:
        ok = False
    print(f"{name}: got={got} want={want} {status}")


# Q1 - traffic intensity: a = 500000 packets/hour, L = 5000 bit, R = 1 Gbps
rho = (500000 / 3600) * 5000 / 1e9
print("Q1 rho =", rho)
check("Q1 rho rounded", round(rho, 4), 0.0007)

# Q2 - rho = 0.8, R = 10 Gbps, L = 5000 bit
a = 0.8 * 10e9 / 5000
check("Q2 packets per second", int(round(a)), 1600000)

# Q11 - longest prefix match for 25.36.67.5
tbl = {"a": "25.36.64.0/16", "b": "25.36.128.0/20", "c": "25.36.64.0/20", "d": "20.0.0.0/8"}
dst = ipaddress.ip_address("25.36.67.5")
m = {k: ipaddress.ip_network(v, strict=False) for k, v in tbl.items()}
hits = [k for k, n in m.items() if dst in n]
best = max(hits, key=lambda k: m[k].prefixlen)
print("Q11 matching entries:", hits, "; binary dst", format(int(dst), "032b"))
check("Q11 longest prefix", best, "c")

# Q13 - fragmentation, datagram 2000 B (header included), MTU 420 B, header 20 B -> 400 B of data per fragment
payload = 2000 - 20
per = (420 - 20) // 8 * 8
frags = []
off = 0
while off < payload:
    frags.append(off // 8)
    off += per
check("Q13 offsets", frags, [0, 50, 100, 150, 200])
# if 2000 B were payload only, the 5th offset is the same
frags2 = list(range(0, 2000, per))
check("Q13 5th offset if 2000 B were payload", frags2[4] // 8, 200)

# Q14 - slow start rounds read off the plotted cwnd values (rounds 1..26), points as in the figure
cwnd = {1: 1, 2: 2, 3: 4, 4: 8, 5: 16, 6: 32}
for r in range(7, 17):
    cwnd[r] = 32 + (r - 6)          # 33 .. 42
for r in range(17, 23):
    cwnd[r] = 21 + (r - 17)         # 21 .. 26
cwnd.update({23: 1, 24: 2, 25: 4, 26: 8})
slow = [r for r in range(2, 27) if cwnd[r] == 2 * cwnd[r - 1] or cwnd[r - 1] == cwnd[r] / 2]
# a round is in slow start when cwnd doubled w.r.t. the previous round (or just reset to 1 after a loss)
runs = []
for r in range(1, 27):
    in_ss = (r == 1) or (cwnd[r] == 2 * cwnd[r - 1]) or (cwnd[r] == 1)
    if in_ss:
        runs.append(r)
print("Q14 slow-start rounds:", runs)
check("Q14 slow start intervals", (runs[0], max(r for r in runs if r <= 6), min(r for r in runs if r >= 23), runs[-1]), (1, 6, 23, 26))

print("ALL OK" if ok else "SOME MISMATCH")
