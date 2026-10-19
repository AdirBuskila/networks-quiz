# -*- coding: utf-8 -*-
"""Recompute the calculation questions of 24A-B (networks, 2024 semester A, moed B).
Run: PYTHONUTF8=1 py tools/verify/24A-B/check.py"""

# Q1: 20 Mbps, packet 1,500 Bytes = 12,000 bits, arrival 300,000 packets per hour
a = 300_000 / 3600.0
rho = a * 12000 / 20e6
print("Q1 rho =", rho)
assert round(rho, 3) == 0.05

# Q6: same link, rho = 0.8 -> a = rho*R/L packets per second
a_max = 0.8 * 20e6 / 12000
print("Q6 a_max per second =", a_max, " per minute =", a_max * 60)
assert round(a_max) == 1333
# the per-minute options are 1,333,333 and 1,666,666 : neither equals 60*1333.33 = 80,000
assert round(a_max * 60) == 80000

# Q5: IPs differ (203.1.113.10 vs 203.0.113.10) and host names differ -> two connections
print("Q5 connections = 2 (index.html + imageA share one persistent connection, imageB another)")
print("24A-B checks OK")
