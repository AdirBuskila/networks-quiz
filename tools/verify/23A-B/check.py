# -*- coding: utf-8 -*-
"""Recomputation of the calculation questions of 23A-B (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/23A-B/check.py
The student ticks and handwriting on the scan are NOT used; every value is derived from the printed question.
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


MTU, HDR = 532, 20
per = (MTU - HDR) // 8 * 8          # payload per fragment, multiple of 8

# Q2 - which original payload size gives exactly 5 fragments (packet printed as 2580 B incl. 20 B header)?
cands = {"a": 2580, "b": 2048, "c": 2568, "d": 2560}
five = sorted(l for l, p in cands.items() if math.ceil(p / per) == 5)
check("Q2 payload giving 5 fragments", five, ["d"])
check("Q2 payload = 2580 - 20", 2580 - HDR, 2560)

# Q1 - offset (8-byte units) of fragment 5
payload = 2580 - HDR
check("Q1 fragments", math.ceil(payload / per), 5)
check("Q1 offset of fragment 5", 4 * per // 8, 256)

# Q10 - longest prefix match for 25.36.67.5
dst = ipaddress.ip_address("25.36.67.5")
table = {"A": "25.36.64.0/16", "B": "25.36.128.0/20", "C": "25.36.64.0/20",
         "D": "20.0.0.0/8", "E": "25.30.0.0/12"}
match = {}
for k, c in table.items():
    net = ipaddress.ip_network(c, strict=False)
    if dst in net:
        match[k] = net.prefixlen
check("Q10 matching routes", sorted(match), ["A", "C"])
check("Q10 longest prefix", max(match, key=match.get), "C")

# Q16 - 200.107.16.17/18 block
net = ipaddress.ip_network("200.107.16.17/18", strict=False)
check("Q16 first", str(net.network_address), "200.107.0.0")
check("Q16 last", str(net.broadcast_address), "200.107.63.255")

print("ALL OK" if ok else "FAILURES")
