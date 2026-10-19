# -*- coding: utf-8 -*-
"""Recompute the calculation questions of 24A-A (networks, 2024 semester A, moed A).
Run: PYTHONUTF8=1 py tools/verify/24A-A/check.py"""

# Q1: 1 Gbps, packet 5,000 bits, arrival 500,000 packets per HOUR. rho = a*L/R
a = 500_000 / 3600.0
rho = a * 5000 / 1e9
print("Q1 rho =", rho)
assert round(rho, 4) == 0.0007

# Q2: 10 Gbps, 5,000 bits, rho = 0.8  ->  a = rho*R/L
a_max = 0.8 * 10e9 / 5000
print("Q2 a_max =", a_max)
assert a_max == 1_600_000

# Q6: browser pools HTTP/1.1 persistent connections per host name: mywebsite.com carries
# index.html and imageA.jpg one after another (no pipelining); mymirrorwebsite.com needs its own.
origins = {"mywebsite.com", "mymirrorwebsite.com"}
print("Q6 TCP connections =", len(origins))
assert len(origins) == 2
print("24A-A checks OK")
