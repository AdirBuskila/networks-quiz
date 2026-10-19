# -*- coding: utf-8 -*-
"""Recomputation of the calculation questions of 23A-A (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/23A-A/check.py
The student ticks on the scan are NOT used; every value below is derived from the printed question.
"""
import ipaddress
import math

ok = True


def check(name, got, want):
    global ok
    status = "OK" if got == want else "MISMATCH"
    if got != want:
        ok = False
    print(f"{name}: got={got} want={want} {status}")


# Q1 - 2000 B packet, 20 B header, 5 fragments, MTU not printed. Find every per-fragment payload size k (multiple of 8)
# that yields exactly 5 fragments, for both readings (2000 incl. header / 2000 of payload), and the 5th fragment's offset.
offs = set()
for payload in (2000 - 20, 2000):
    for k in range(8, payload, 8):
        if math.ceil(payload / k) == 5:
            offs.add(4 * k // 8)
options = {"a": 1600, "b": 200, "c": 400, "d": 480, "e": 405}
feasible = sorted(l for l, v in options.items() if v in offs)
check("Q1 option consistent with 5 fragments", feasible, ["b"])

# Q8 - longest prefix match for 25.36.67.5
dst = ipaddress.ip_address("25.36.67.5")
table = {"A": "25.36.64.0/16", "B": "25.36.128.0/20", "C": "25.36.64.0/20", "D": "20.0.0.0/8"}
match = {}
for k, c in table.items():
    net = ipaddress.ip_network(c, strict=False)
    if dst in net:
        match[k] = net.prefixlen
best = max(match, key=match.get)
check("Q8 matching routes", sorted(match), ["A", "C"])
check("Q8 longest prefix", best, "C")

# Q16 - 200.107.16.17/18 block
net = ipaddress.ip_network("200.107.16.17/18", strict=False)
check("Q16 first", str(net.network_address), "200.107.0.0")
check("Q16 last", str(net.broadcast_address), "200.107.63.255")

print("ALL OK" if ok else "FAILURES")
