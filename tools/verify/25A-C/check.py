# -*- coding: utf-8 -*-
"""Recomputation of the calculation questions of 25A-C (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/25A-C/check.py

Q3: the yellow key says 10 ms, but the printed data (5000 BITS, 1000 km per link, 2e8 m/s) gives 15.65 ms.
Arbiter 2026-10-24: typo ruling, key = nearest option c (15ms), solved / official:false.
The script asserts the disagreement with 10 ms and the figures quoted in the explanation.
"""
import math

rates = [100e6, 50e6, 10e6]
prop = 3 * (1000e3 / 2e8)
for label, L, d_total in (("5000 bit, 1000 km per link (printed)", 5000, 3000e3),
                          ("5000 bit, 1000 km total", 5000, 1000e3),
                          ("5000 byte, 1000 km per link", 40000, 3000e3),
                          ("5000 byte, 1000 km total", 40000, 1000e3)):
    trans = sum(L / r for r in rates)
    total = trans + d_total / 2e8
    print(f"Q3 [{label}] total {total * 1e3:.3f} ms")

L = 5000
trans_ms = sum(L / r for r in rates) * 1e3
total_ms = trans_ms + prop * 1e3
opts = {"a": 5, "b": 10, "c": 15, "d": 20}
closest = min(opts, key=lambda k: abs(opts[k] - total_ms))
print("Q3 closest option:", closest, opts[closest], "ms")
assert round(prop * 1e3, 6) == 15.0          # explanation: 5 ms per link, 15 ms in total
assert round(trans_ms, 6) == 0.65            # explanation: 0.05 + 0.1 + 0.5
assert round(total_ms, 6) == 15.65
assert prop * 1e3 > 10                       # propagation alone already rules out 10 ms
assert closest == "c"

# Q1: 17 = ceil(100/6) request rounds under the (unprinted) 6-parallel-connection convention
assert math.ceil(100 / 6) == 17
print("Q1 ceil(100/6) =", math.ceil(100 / 6))
# Q2: three queries (root, TLD, authoritative) of 30 ms each = 90 ms; 120 ms only if a fourth hop is counted
assert 3 * 30 == 90 and 4 * 30 == 120
print("ALL OK")
