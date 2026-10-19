# -*- coding: utf-8 -*-
"""Recomputation of the calculation question of 25A-C (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/25A-C/check.py

Q3 is HELD: the yellow key says 10 ms; the page prints the packet size as 5000 BITS (the Claude-made
transcription said bytes), and the recomputation gives 15.65 ms (nearest option 15ms). Either reading
(bits: 15.65 ms, bytes: 20.2 ms) disagrees with 10 ms. This script asserts the disagreement on purpose.
"""
import math

rates = [100e6, 50e6, 10e6]
prop = 3 * (1000e3 / 2e8)
for label, L in (("bits (as printed)", 5000), ("bytes (md transcription)", 5000 * 8)):
    trans = sum(L / r for r in rates)
    total = trans + prop
    print(f"Q3 [{label}] transmission {trans * 1e3:.3f} ms, propagation {prop * 1e3:.3f} ms, total {total * 1e3:.3f} ms")

L = 5000
total_ms = (sum(L / r for r in rates) + prop) * 1e3
opts = {"a": 5, "b": 10, "c": 15, "d": 20}
closest = min(opts, key=lambda k: abs(opts[k] - total_ms))
print("Q3 closest option:", closest, opts[closest], "ms ; official key: b (10 ms)")
# propagation alone is 15 ms, so 10 ms is impossible under any reading
assert prop * 1e3 > 10
assert closest == "c"
print("Q3 DISAGREES with the official key -> hold")

print("Q1 ceil(100/6) =", math.ceil(100 / 6), "(matches the key's 17; the 6-connection convention is not printed in the question)")
