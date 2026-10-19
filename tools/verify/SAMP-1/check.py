# -*- coding: utf-8 -*-
"""Recompute the calculation questions of SAMP-1 (networks, 2024 sample exam).
Run: PYTHONUTF8=1 py tools/verify/SAMP-1/check.py"""
import ipaddress

# Q1
rho = (500_000 / 3600.0) * 5000 / 1e9
print("Q1 rho =", rho)
assert round(rho, 4) == 0.0007
# Q2
a = 0.8 * 10e9 / 5000
print("Q2 a =", a)
assert a == 1_600_000

# Q11 longest prefix match for 25.36.67.5 (strict=False: the table prints A as 25.36.64.0/16)
dst = ipaddress.ip_address("25.36.67.5")
table = {"A": "25.36.64.0/16", "B": "25.36.128.0/20", "C": "25.36.64.0/20", "D": "20.0.0.0/8"}
hits = {k: ipaddress.ip_network(v, strict=False) for k, v in table.items()}
hits = {k: n for k, n in hits.items() if dst in n}
best = max(hits, key=lambda k: hits[k].prefixlen)
print("Q11 matches", sorted(hits), "best", best)
assert best == "C"

# Q13 fragmentation: 2000 B of data, MTU 420, header 20, offset in 8-byte units
payload, mtu, hdr = 2000, 420, 20
per = (mtu - hdr) // 8 * 8
frags, off = [], 0
while off < payload:
    n = min(per, payload - off)
    frags.append((off // 8, n))
    off += n
print("Q13 fragments (offset, data):", frags)
assert len(frags) == 5 and frags[4][0] == 200

# Q14 slow start vs congestion avoidance from the plotted points (rounds 1..26)
cw = [1, 2, 4, 8, 16, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 21, 22, 23, 24, 25, 26, 1, 2, 4, 8]
ss = []
for r in range(1, len(cw)):
    if cw[r] == 2 * cw[r - 1] or (cw[r] == 2 and cw[r - 1] == 1):
        ss.append(r)  # round r doubled relative to round r-1 (index r = round r+1)
print("rounds that doubled (round numbers of the later point):", [r + 1 for r in ss])
assert [r + 1 for r in ss] == [2, 3, 4, 5, 6, 24, 25, 26]
print("SAMP-1 checks OK")
