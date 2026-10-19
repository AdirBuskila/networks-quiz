# -*- coding: utf-8 -*-
"""Recompute the calculation questions of 22S-A (networks, 2022 summer, moed A).
Run: PYTHONUTF8=1 py tools/verify/22S-A/check.py"""

def frags(payload, mtu, hdr=20):
    per = (mtu - hdr) // 8 * 8
    out, off = [], 0
    while off < payload:
        n = min(per, payload - off)
        out.append((off // 8, n + hdr, 1 if off + n < payload else 0))
        off += n
    return out

# Q3: 2000 B of data in 5 fragments, header 20. Which MTU gives 5 fragments, and what is fragment 5's offset?
cands = {}
for mtu in range(60, 2021):
    f = frags(2000, mtu)
    if len(f) == 5:
        cands[mtu] = f[4][0]
offs = sorted(set(cands.values()))
print("Q3 possible fragment-5 offsets:", offs[:3], "...", offs[-3:], "; for MTU 420:", cands[420])
assert 200 in offs and 1600 not in offs and 400 not in offs and 480 not in offs

# Q5: persistent HTTP, no pipelining. 100 KB page, 5 x 300 KB images, RTT 0.5 s, 100 Mbps
rtt, rate = 0.5, 100e6
t_page, t_img = 100e3 * 8 / rate, 300e3 * 8 / rate
T = 2 * rtt + t_page + 5 * (rtt + t_img)   # handshake RTT + GET RTT, then one RTT per image
optA = 1 + t_page + 5 * (0.5 + t_img)
optB = 0.5 + t_page + 5 * (1 + t_img)
optC = 1 + t_page + 0.5 + 5 * t_img
optD = 0.001 + t_page + 5 * (1 + 250e3 * 8 / rate)
print("Q5 model T =", T, "options", optA, optB, optC, optD)
assert abs(T - optA) < 1e-9 and all(abs(T - x) > 1e-3 for x in (optB, optC, optD))

# Q8: A -> R1 over a 1500-byte MTU, 2000 B of data (the 540 / 1480 pair only fits data = 2000)
f = frags(2000, 1500)
print("Q8 fragments (offset, size, MF):", f)
assert f == [(0, 1500, 1), (185, 540, 0)]

# Q10: Hamming distance between the two strings
a, b = "1001100", "1001101"
d = sum(x != y for x, y in zip(a, b))
print("Q10 hamming distance =", d)
assert d == 1
# flipping the last bit of one string yields the other one (undetectable)
assert a[:-1] + ("1" if a[-1] == "0" else "0") == b
# flipping the second-to-last bit of a string never yields the other string (detectable)
for s, t in ((a, b), (b, a)):
    flipped = s[:-2] + ("1" if s[-2] == "0" else "0") + s[-1]
    assert flipped not in (a, b)

# Q11: even parity bit appended
def even(s):
    return str(s.count("1") % 2)
s1, s2 = "1011101", "1001101"
print("Q11 even parity:", even(s1), even(s2), "-> codewords", s1 + even(s1), s2 + even(s2))
assert (even(s1), even(s2)) == ("1", "0")
d2 = sum(x != y for x, y in zip(s1 + even(s1), s2 + even(s2)))
assert d2 == 2

# Q14 handshake
X = "X"
print("Q14 var1 = 501, var2 = 501, var3 = X+1")
print("22S-A checks OK")
