# -*- coding: utf-8 -*-
"""Recomputation of every calculation question of 26A-A (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/26A-A/check.py
"""
import ipaddress
import heapq

ok = True


def check(name, got, want):
    global ok
    status = "OK" if got == want else "MISMATCH"
    if got != want:
        ok = False
    print(f"{name}: got={got} want={want} {status}")


# Q6 - congestion window read off the figure (cwnd per RTT, points 1..40, read at 4x zoom).
cwnd = {}
for t, v in [(1, 1), (2, 2), (3, 4), (4, 8)]:
    cwnd[t] = v
for t in range(5, 25):
    cwnd[t] = t + 4          # 9 at t=5 ... 28 at t=24
cwnd.update({25: 1, 26: 2, 27: 4, 28: 8, 29: 16, 30: 17})
cwnd.update({31: 1, 32: 2, 33: 4, 34: 8, 35: 16})
for t in range(36, 41):
    cwnd[t] = t - 19         # 17 at t=36 ... 21 at t=40
# Congestion avoidance starts at the last point of a doubling run, after which growth is +1 per RTT.
ca = []
for t in range(2, 40):
    if cwnd[t] - cwnd[t - 1] > 1 and cwnd[t + 1] - cwnd[t] == 1:
        ca.append(t)
# the slow-start run ends at t=4, 29, 35 (each followed by +1 growth)
check("Q6 CA entry points", ca, [4, 29, 35])

# Q7 - fragmentation: 2000 B datagram incl. 20 B header, MTU 500 -> payload 480 per fragment (multiple of 8).
mtu, hdr, total = 500, 20, 2000
data = total - hdr
per = (mtu - hdr) // 8 * 8
frags = -(-data // per)
check("Q7 number of fragments", frags, 5)
check("Q7 offset of fragment 4 (8-byte units)", 3 * per // 8, 180)
# alternative reading: 2000 B of data only
data2 = 2000
check("Q7 alt reading fragments", -(-data2 // per), 5)
check("Q7 alt reading offset of fragment 4", 3 * per // 8, 180)

# Q9 - longest prefix match for 25.36.67.5
table = {"A": "25.36.0.0/16", "B": "25.36.128.0/20", "C": "25.36.64.0/20", "D": "20.0.0.0/8"}
dst = ipaddress.ip_address("25.36.67.5")
best = max((ipaddress.ip_network(p).prefixlen, k) for k, p in table.items()
           if dst in ipaddress.ip_network(p))
check("Q9 LPM route", best[1], "C")
check("Q9 matching routes", sorted(k for k, p in table.items() if dst in ipaddress.ip_network(p)), ["A", "C"])

# Q11 - end-to-end delay, store-and-forward, 12000-bit packet, propagation 3e8 m/s, no queuing/processing
L = 12000
links = [(1000e6, 2e3), (10e6, 5000e3), (100e6, 3e3)]
tot = sum(L / r + d / 3e8 for r, d in links)
print("Q11 total delay ms = %.4f" % (tot * 1e3))
check("Q11 rounded ms", round(tot * 1e3), 18)
for opt in (18, 36, 100, 1):
    print("  option %d ms: diff %.3f" % (opt, abs(tot * 1e3 - opt)))


# Q13 - Dijkstra relaxation
def relax(dv, dw, w):
    return min(dw, dv + w)


check("Q13 D(W) after V", relax(5, 10, 3), 8)

# Q1 / Q15 / others are conceptual (see explanations in the generator).
print("ALL OK" if ok else "SOME MISMATCH")
