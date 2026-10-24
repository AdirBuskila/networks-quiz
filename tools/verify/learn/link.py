"""Checks CRC, parity, 2D parity, Hamming distance, Internet checksum, CSMA/CD and frame-size numbers used in
the link_layer and udp_checksum briefs.  ASCII only.  Run: py -I link.py"""

def crc_remainder(data_bits, gen_bits):
    r = len(gen_bits) - 1
    work = [int(c) for c in data_bits] + [0] * r
    g = [int(c) for c in gen_bits]
    for i in range(len(data_bits)):
        if work[i]:
            for j in range(len(g)):
                work[i + j] ^= g[j]
    return "".join(str(b) for b in work[-r:])

def crc_check(frame_bits, gen_bits):
    g = [int(c) for c in gen_bits]
    work = [int(c) for c in frame_bits]
    for i in range(len(work) - len(g) + 1):
        if work[i]:
            for j in range(len(g)):
                work[i + j] ^= g[j]
    return not any(work)

# 25A-B Q8: r=3, G=1001, D=10011100 -> R=101
assert crc_remainder("10011100", "1001") == "101"
assert crc_check("10011100" + "101", "1001")
# the wrong options in that question are not even r bits
assert len("101") == 3 and len("1101") == 4 and len("01") == 2
# lecture example: D=101110, G=1001 -> R=011
assert crc_remainder("101110", "1001") == "011"
# worked example in the brief: D=1101011011, G=10011 (r=4) -> R=1110
assert crc_remainder("1101011011", "10011") == "1110"
assert crc_check("1101011011" + "1110", "10011")
# a single flipped bit is detected
fr = "1101011011" + "1110"
bad = fr[:5] + ("1" if fr[5] == "0" else "0") + fr[6:]
assert not crc_check(bad, "10011")
# the generator has r+1 bits, the remainder r bits
assert len("10011") - 1 == 4

# ---- 2D even parity (25A-A Q3)
rows = ["10010100 11001010 1", "10001000 00000000 1", "11011011 11101001 1",
        "10010000 11101001 1", "00011100 01101010 1", "01011011 10100000 1"]
M = [[int(c) for c in r.replace(" ", "")] for r in rows]
bad_rows = [i + 1 for i, r in enumerate(M) if sum(r) % 2]
bad_cols = [j + 1 for j in range(len(M[0])) if sum(r[j] for r in M) % 2]
assert bad_rows == [2] and bad_cols == [4], (bad_rows, bad_cols)
assert sum(M[1]) == 3
# worked example in the brief: 3x4 data block, build parity row/col and flip one bit
data = [[1, 0, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0]]
prow = [sum(r) % 2 for r in data]
pcol = [sum(r[j] for r in data) % 2 for j in range(4)]
corner = sum(prow) % 2
assert prow == [1, 0, 0] and pcol == [0, 0, 0, 1] and corner == 1 and corner == sum(pcol) % 2
blk = [r + [prow[i]] for i, r in enumerate(data)] + [pcol + [corner]]
blk[1][2] ^= 1   # flip row 2, column 3
br = [i + 1 for i, r in enumerate(blk) if sum(r) % 2]
bc = [j + 1 for j in range(5) if sum(r[j] for r in blk) % 2]
assert br == [2] and bc == [3]

# ---- single parity + Hamming distance (22S-A Q10, Q11)
s1, s2 = "1001100", "1001101"
assert sum(a != b for a, b in zip(s1, s2)) == 1
assert "1001110".count("1") == 4  # flipping the second-last bit gives a word that is not in the code
assert s1 != "1001110" and s2 != "1001110"
a, b = "1011101", "1001101"
assert a.count("1") == 5 and b.count("1") == 4
pa, pb = a.count("1") % 2, b.count("1") % 2
assert (pa, pb) == (1, 0)
wa, wb = a + str(pa), b + str(pb)
assert sum(x != y for x, y in zip(wa, wb)) == 2
# parity detects any odd number of flips, misses even
w = "10110010"
def par_ok(word):
    return word.count("1") % 2 == 0
w_even = w + str(w.count("1") % 2)
assert par_ok(w_even)
def flip(word, idxs):
    l = list(word)
    for i in idxs:
        l[i] = "1" if l[i] == "0" else "0"
    return "".join(l)
assert not par_ok(flip(w_even, [2]))
assert par_ok(flip(w_even, [2, 5]))
assert not par_ok(flip(w_even, [1, 2, 6]))
# minimum distance d detects d-1 errors, corrects floor((d-1)/2)
for d, det, cor in [(1, 0, 0), (2, 1, 0), (3, 2, 1), (4, 3, 1), (5, 4, 2)]:
    assert d - 1 == det and (d - 1) // 2 == cor

# ---- Internet checksum (slides example, and the brief example)
def csum16(words):
    s = 0
    for w in words:
        s += w
        s = (s & 0xFFFF) + (s >> 16)
    return (~s) & 0xFFFF

w1, w2 = 0b1110011001100110, 0b1101010101010101
s = w1 + w2
assert s > 0xFFFF
s = (s & 0xFFFF) + (s >> 16)
assert format(csum16([w1, w2]), "016b") == "0100010001000011", format(csum16([w1, w2]), "016b")
# receiver: sum of data and checksum is all ones
assert (((w1 + w2) & 0xFFFF) + ((w1 + w2) >> 16) + csum16([w1, w2])) & 0xFFFF == 0xFFFF
# weakness: swapping bits so that the sum is unchanged -> same checksum
# two different pairs of words with the same sum give the same checksum
a1, a2 = 0x0105, 0x0206
b1, b2 = 0x0104, 0x0207
assert a1 + a2 == b1 + b2 and csum16([a1, a2]) == csum16([b1, b2])
# worked example for the brief: three 16-bit words
words = [0x4500, 0x0073, 0x0000]
c = csum16(words)
assert c == 0xBA8C, hex(c)
# receiver check
tot = 0
for wd in words + [c]:
    tot += wd
    tot = (tot & 0xFFFF) + (tot >> 16)
assert tot == 0xFFFF
# a carry that wraps around
assert csum16([0xFFFF, 0x0001]) == 0xFFFE

# ---- CSMA/CD binary backoff
for m, mx in [(1, 1), (2, 3), (3, 7), (10, 1023)]:
    assert 2 ** m - 1 == mx
assert abs(512 / 10e6 - 51.2e-6) < 1e-12   # 512 bit times at 10 Mbps
assert abs(512 / 100e6 - 5.12e-6) < 1e-12

# ---- Ethernet frame: preamble 8, dest 6, src 6, type 2, data 46..1500, CRC 4 ; min frame (without preamble) 64
assert 6 + 6 + 2 + 46 + 4 == 64
assert 6 + 6 + 2 + 1500 + 4 == 1518
assert 48 // 8 == 6

# ---- encapsulation sizes used in the intro brief
assert 1000 + 20 + 20 == 1040
assert 1040 + 14 + 4 == 1058
assert 20 + 8 + 100 == 128

print("link.py OK")
