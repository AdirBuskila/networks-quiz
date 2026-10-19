# -*- coding: utf-8 -*-
"""Recomputation of every calculation question of 25A-B (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/25A-B/check.py
"""
import ipaddress
from itertools import product

ok = True


def check(name, got, want):
    global ok
    status = "OK" if got == want else "MISMATCH"
    if got != want:
        ok = False
    print(f"{name}: got={got} want={want} {status}")


# Q2 - cumulative ACK (next expected byte), receiver acks every second in-order segment, then a dup ack per later segment.
# Figure: 101-200, 201-300 -> Ack A; 301-400 lost; 401-500 -> B; 501-600 -> C; 601-700 -> D; resent 301-400 -> E.
segs = [(101, 200), (201, 300), (301, 400), (401, 500), (501, 600), (601, 700), (301, 400)]
lost_first = {2}  # index of the first transmission of 301-400
received = set()
acks = []
expected = 101
for i, (a, b) in enumerate(segs):
    if i in lost_first:
        continue
    received.add((a, b))
    while any(s == expected for s, _ in received):
        e = [x for x in received if x[0] == expected][0][1]
        expected = e + 1
    if i in (1, 3, 4, 5, 6):  # the figure shows an ACK after segments 2, 4, 5, 6 and the resent one
        acks.append(expected)
check("Q2 ACKs A..E", acks, [301, 301, 301, 301, 701])

# Q5 - circuit switching: each connection uses 2 consecutive links clockwise A-B, B-C, C-D, D-A
cap = {"AB": 14, "BC": 11, "CD": 15, "DA": 17}
best = 0
for x1 in range(0, 15):          # uses AB,BC
    for x2 in range(0, 12):      # uses BC,CD
        for x3 in range(0, 16):  # uses CD,DA
            for x4 in range(0, 18):  # uses DA,AB
                if x1 + x4 <= cap["AB"] and x1 + x2 <= cap["BC"] and x2 + x3 <= cap["CD"] and x3 + x4 <= cap["DA"]:
                    best = max(best, x1 + x2 + x3 + x4)
check("Q5 max simultaneous connections", best, 28)
print("Q5 LP bound floor((14+11+15+17)/2) =", (14 + 11 + 15 + 17) // 2)

# Q6 - throughput per connection min(Rs, Rc, R/4), server link utilization = throughput / Rs
thr = min(80, 70, 200 / 4)
print("Q6 server utilization =", thr / 80, "(0.625, shown as 0.63)")
check("Q6 server utilization nearest option", min([0.63, 0.71, 1, 0.25], key=lambda v: abs(v - thr / 80)), 0.63)
print("Q6 client utilization would be", round(thr / 70, 2), "(distractor 0.71)")

# Q7 - 4000 bit, 3*10^8 m/s; links 1000 Mbps/2 km, 100 Mbps/1000 km, 10 Mbps/2 km
L = 4000
links = [(1000e6, 2e3), (100e6, 1000e3), (10e6, 2e3)]
tot = sum(L / r + d / 3e8 for r, d in links)
print("Q7 total delay [s] =", round(tot, 6))
check("Q7 rounded to 4 decimals", round(tot, 4), 0.0038)

# Q8 - CRC: D=10011100, G=1001, r=3
D, G, r = 0b10011100, 0b1001, 3
x = D << r
while x.bit_length() >= G.bit_length():
    x ^= G << (x.bit_length() - G.bit_length())
check("Q8 CRC remainder", format(x, "03b"), "101")

# Q10 - addresses of 223.1.2/24
check("Q10 addresses in /24", ipaddress.ip_network("223.1.2.0/24").num_addresses, 256)

# Q15 - longest prefix match for 25.36.67.5 (entry A has host bits set: 25.36.64.0/16 = 25.36.0.0/16)
tbl = {"A": "25.36.64.0/16", "B": "25.36.128.0/20", "C": "25.36.64.0/20", "D": "20.0.0.0/8"}
dst = ipaddress.ip_address("25.36.67.5")
m = {k: ipaddress.ip_network(v, strict=False) for k, v in tbl.items()}
hits = [k for k, n in m.items() if dst in n]
best = max(hits, key=lambda k: m[k].prefixlen)
print("Q15 matching entries:", hits)
check("Q15 longest prefix", best, "C")

print("ALL OK" if ok else "SOME MISMATCH")
