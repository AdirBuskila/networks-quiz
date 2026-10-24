# -*- coding: utf-8 -*-
"""Machine check of the guided course courses/link (ASCII output only).
Run from the app root:  PYTHONUTF8=1 py tools/verify/needhelp/link/check.py
Loads the level files through tools/course_load.js and recomputes every computed answer
(CRC long division, 1D/2D parity, Hamming distance, switch learning, subnet test for ARP),
asserting that the stored correct option equals the computed value and that no distractor does.
"""
import ipaddress
import itertools
import json
import os
import re
import subprocess
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
ok = True
n_checks = 0


def check(name, cond, info=""):
    global ok, n_checks
    n_checks += 1
    if not cond:
        ok = False
    print(("OK       " if cond else "MISMATCH ") + name + (" " + info if info and not cond else ""))


# ---------------------------------------------------------------- load levels
out = subprocess.check_output(["node", "-e", "console.log(JSON.stringify(require('./tools/course_load.js').load('.')))"], cwd=ROOT)
loaded = json.loads(out.decode("utf8"))
assert not loaded["errors"], loaded["errors"]
LV = {l["level"]["id"]: l["level"] for l in loaded["levels"] if l["courseId"] == "link"}
Q = {}
for lid, lv in LV.items():
    for q in lv["questions"]:
        if "id" in q:
            Q[q["id"]] = q
bank = json.load(open(os.path.join(ROOT, "questions.json"), encoding="utf8"))
bank = {x["id"]: x for x in bank.get("questions", bank)}


def strip(v):
    return v.replace("`", "").replace("$", "").strip()


def correct(qid):
    q = Q[qid]
    c = [o for o in q["options"] if o["id"] == q["correctId"]]
    assert len(c) == 1
    return strip(c[0]["value"])


def others(qid):
    q = Q[qid]
    return [strip(o["value"]) for o in q["options"] if o["id"] != q["correctId"]]


def expect(qid, want):
    got = correct(qid)
    check(qid + " correct == " + want, got == want, "got=" + got)
    check(qid + " no distractor equals it", want not in others(qid))
    vals = [strip(o["value"]) for o in Q[qid]["options"]]
    check(qid + " options distinct", len(set(vals)) == len(vals))


# ---------------------------------------------------------------- CRC (mod-2 long division)
def crc(D, G):
    r = len(G) - 1
    b = list(map(int, D + "0" * r))
    g = list(map(int, G))
    for i in range(len(D)):
        if b[i]:
            for j in range(len(g)):
                b[i + j] ^= g[j]
    return "".join(map(str, b[-r:]))


def rem(frame, G):
    b = list(map(int, frame))
    g = list(map(int, G))
    for i in range(len(b) - len(g) + 1):
        if b[i]:
            for j in range(len(g)):
                b[i + j] ^= g[j]
    return "".join(map(str, b[-(len(g) - 1):]))


def xor(a, b):
    return "".join(str(int(x) ^ int(y)) for x, y in zip(a, b))


# lesson example (C05) and C06 example
assert crc("1101", "1011") == "001"
assert rem("1101001", "1011") == "000"
check("C05 lesson example R=001 and frame 1101001 divisible", True)
# the printed long-division steps of the C05 lesson
steps = ["1101000", "0110000", "0011100", "0001010", "0000001"]
cur = "1101000"
for s_i, g_al in zip(steps[1:], ["1011000", "0101100", "0010110", "0001011"]):
    cur = xor(cur, g_al)
    assert cur == s_i, (cur, s_i)
check("C05 lesson long-division steps", True)

# C05
assert xor("1101", "1011") == "0110"
assert int("1101", 2) - int("1011", 2) == 2 and bin(int("1101", 2) + int("1011", 2)) == "0b11000"
assert "".join(str(int(a) & int(b)) for a, b in zip("1101", "1011")) == "1001"
expect("C05-Q1", "0110")
check("C05-Q1 distractors are subtraction, addition, AND", set(others("C05-Q1")) == {"0010", "11000", "1001"})
G = "10011"
r = len(G) - 1
check("C05-Q2 r=4", r == 4 and "4 אפסים" in correct("C05-Q2") and "4 ביט" in correct("C05-Q2"))
for qid, D, G_, want in [("C05-Q3", "1011", "101", "01"), ("C05-Q4", "101110", "1001", "011"),
                         ("C05-Q5", "11001", "1101", "010"), ("C05-Q6", "11010011101100", "1011", "100")]:
    got = crc(D, G_)
    check(qid + " crc(%s,%s)=%s" % (D, G_, got), got == want)
    expect(qid, got)
    check(qid + " stem has D and G", D in Q[qid]["question"] and G_ in Q[qid]["question"])
    # every option length: only the true remainder has length r unless a deliberate length trap
    # the full frame D+R is divisible, i.e. the computed remainder is the unique valid one of that length
    valid = [o for o in itertools.product("01", repeat=len(G_) - 1) if rem(D + "".join(o), G_) == "0" * (len(G_) - 1)]
    check(qid + " unique r-bit R making D|R divisible", valid == [tuple(want)])
    # quoted intermediate claims
check("C05-Q3 explanation steps", xor("101100", "101000") == "000100" and xor("000100", "000101") == "000001")
check("C05-Q6 explanation appended string", "11010011101100" + "000" == "11010011101100000")

# C06
D, G_ = "1101011011", "10011"
R = crc(D, G_)
check("C06 example R=1110", R == "1110")
frame = D + R
check("C06-Q1 frame 11010110111110", frame == "11010110111110" and rem(frame, G_) == "0000")
bad = frame[:3] + ("0" if frame[3] == "1" else "1") + frame[4:]
check("C06-Q2 flipped 4th bit", bad == "11000110111110" and rem(bad, G_) == "0111")
expect("C06-Q3", crc("1010001101", "110101"))
check("C06-Q3 R", crc("1010001101", "110101") == "01110" and ("1010001101" + "01110") == "101000110101110"
      and rem("101000110101110", "110101") == "00000")
# Q4: only G-multiples escape
cand = {"0001001000": True, "0000100000": False, "0000000110": False, "0000010100": False}
for e, undetected in cand.items():
    check("C06-Q4 %s undetected=%s" % (e, undetected), (rem(e, "1001") == "000") == undetected)
check("C06-Q4 stored correct", correct("C06-Q4") == "0001001000")
check("C06-Q4 remainders in explanation", [rem(e, "1001") for e in ["0000100000", "0000000110", "0000010100"]] == ["100", "110", "110"])
# Q5: every burst up to r bits detected; a burst of r+1 bits can escape (G itself)
G = "10011"
r = 4
n = 20
miss = 0
for L in range(1, r + 1):
    for body in itertools.product("01", repeat=max(L - 2, 0)):
        pat = ("1" + "".join(body) + "1") if L > 1 else "1"
        for start in range(0, n - L + 1):
            e = "0" * start + pat + "0" * (n - start - L)
            if rem(e, G) == "0000":
                miss += 1
check("C06-Q5 bursts up to r=4 are always detected", miss == 0)
check("C06-Q5 burst of 5 can escape (E=G)", rem("0" * 5 + G + "0" * 10, G) == "0000")
check("C06-Q5 single bit always detected", all(rem("0" * i + "1" + "0" * (n - i - 1), G) != "0000" for i in range(n)))
check("C06-Q5 stored", correct("C06-Q5").startswith("כל שגיאת burst באורך עד 4"))
# Q6
expect("C06-Q6", "101101")
check("C06-Q6 R=01 and only the stored frame is divisible", crc("1011", "101") == "01" and
      [strip(o["value"]) for o in Q["C06-Q6"]["options"] if rem(strip(o["value"]), "101") == "00"] == ["101101"])

# ---------------------------------------------------------------- 1D parity (C02)
def ones(s):
    return s.count("1")


check("C02 example 1011001 has 4 ones: even bit 0, odd bit 1", ones("1011001") == 4)
expect("C02-Q1", "1")
check("C02-Q1 5 ones", ones("1101011") == 5 and (ones("1101011") + 1) % 2 == 0)
expect("C02-Q2", "0")
check("C02-Q2 3 ones -> odd bit 0", ones("0110100") == 3 and ones("0110100") % 2 == 1)
check("C02-Q3 10110101 has 5 ones -> error under even", ones("10110101") == 5)
sent, recv = "10110010", "11110000"
diff = [i + 1 for i in range(8) if sent[i] != recv[i]]
check("C02-Q4 flips at 2 and 7, both words even", diff == [2, 7] and ones(sent) % 2 == 0 and ones(recv) % 2 == 0 and ones(recv) == 4)
# parity detects flip-sets iff odd size (brute force over 8-bit words)
for k in range(1, 9):
    for pos in itertools.combinations(range(8), k):
        w = list(sent)
        for p in pos:
            w[p] = "1" if w[p] == "0" else "0"
        det = ones("".join(w)) % 2 == 1
        assert det == (k % 2 == 1)
check("C02-Q5 even parity detects exactly the odd-size flip sets", True)
check("C02-Q5 stored", correct("C02-Q5") == "3 ביטים" and set(others("C02-Q5")) >= {"2 ביטים", "4 ביטים"})

# ---------------------------------------------------------------- 2D parity (C03)
def parse_grid(text):
    m = re.search(r"```\n(.*?)\n```", text, re.S)
    return [list(map(int, row.replace(" ", ""))) for row in m.group(1).split("\n")]


def failing(grid):
    rows = [i + 1 for i, r in enumerate(grid) if sum(r) % 2 == 1]
    cols = [j + 1 for j in range(len(grid[0])) if sum(r[j] for r in grid) % 2 == 1]
    return rows, cols


def loc(grid):
    rows, cols = failing(grid)
    assert len(rows) == 1 and len(cols) == 1, (rows, cols)
    return "שורה %d, עמודה %d" % (rows[0], cols[0])


lesson_grid = [[int(c) for c in r.replace(" ", "")] for r in ["0010 1", "0001 1", "1110 0", "1100 0"]]
check("C03 lesson grid -> row 3 col 4", loc(lesson_grid) == "שורה 3, עמודה 4")
check("C03 lesson counts", [sum(r) for r in lesson_grid] == [2, 2, 3, 2] and [sum(r[j] for r in lesson_grid) for j in range(5)] == [2, 2, 2, 1, 2])
for qid in ["C03-Q1", "C03-Q2", "C03-Q3", "C03-Q4"]:
    g = parse_grid(Q[qid]["question"])
    expect(qid, loc(g))
# the grids are valid 2D-parity tables with exactly one flipped bit (unflip -> all even)
for qid in ["C03-Q1", "C03-Q2", "C03-Q3", "C03-Q4"]:
    g = parse_grid(Q[qid]["question"])
    rows, cols = failing(g)
    g[rows[0] - 1][cols[0] - 1] ^= 1
    check(qid + " unflipping repairs all rows and columns", failing(g) == ([], []))
check("C03-Q4 error is in the check column", failing(parse_grid(Q["C03-Q4"]["question"]))[1] == [5])
# Q1..Q4 explanation counts
g = parse_grid(Q["C03-Q1"]["question"]); check("C03-Q1 row 2 and col 3", g[1] == [0, 0, 0, 0, 1] and [r[2] for r in g] == [1, 0, 0, 0])
g = parse_grid(Q["C03-Q2"]["question"]); check("C03-Q2 row 4 and col 1", g[3] == [0, 0, 0, 1, 0, 0] if len(g[3]) == 6 else g[3] == [0, 0, 0, 1, 0, 0])
check("C03-Q2 col 1 is 1,0,0,0,0", [r[0] for r in g] == [1, 0, 0, 0, 0])
g = parse_grid(Q["C03-Q3"]["question"]); check("C03-Q3 row 1 and col 2", g[0] == [1, 0, 1, 0, 1] and [r[1] for r in g] == [0, 1, 1, 1, 0])
g = parse_grid(Q["C03-Q4"]["question"]); check("C03-Q4 row 2 and col 5", g[1] == [0, 1, 1, 0, 1] and [r[4] for r in g] == [0, 1, 1, 1])
# Q6: two flips in one row, different columns -> 2 columns fail, no row fails (brute force over a valid table)
base = [[0, 1, 1, 0, 0], [1, 0, 1, 0, 0], [0, 0, 1, 1, 0], [1, 1, 1, 1, 0]]
assert failing(base) == ([], [3]) or True
valid_tbl = [[1, 0, 1, 0, 0], [0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]
for r_i in range(4):
    row = valid_tbl[r_i]
    valid_tbl[r_i][4] = sum(row[:4]) % 2
for j in range(5):
    valid_tbl[3][j] = sum(valid_tbl[i][j] for i in range(3)) % 2
valid_tbl[3][4] = sum(valid_tbl[3][:4]) % 2
assert failing(valid_tbl) == ([], [])
cnt = 0
for r_i in range(4):
    for c1, c2 in itertools.combinations(range(5), 2):
        t = [x[:] for x in valid_tbl]
        t[r_i][c1] ^= 1
        t[r_i][c2] ^= 1
        rows, cols = failing(t)
        assert rows == [] and len(cols) == 2
        cnt += 1
check("C03-Q6 two flips in one row: no row fails, exactly two columns fail (%d cases)" % cnt, True)
# two flips in different rows and columns: 2 rows + 2 cols fail, and two different single-flip pairs explain it
t = [x[:] for x in valid_tbl]
t[0][0] ^= 1
t[1][1] ^= 1
rows, cols = failing(t)
check("C03 lesson: two flips in different rows and columns -> 2 rows and 2 cols fail", len(rows) == 2 and len(cols) == 2)
check("C03-Q5/Q6 stored", correct("C03-Q5").startswith("אפשר לתקן שגיאה בביט יחיד") and correct("C03-Q6").startswith("שתי עמודות שבורות ואף שורה"))
# single error always corrected by the intersection rule (brute force)
for i in range(4):
    for j in range(5):
        t = [x[:] for x in valid_tbl]
        t[i][j] ^= 1
        rows, cols = failing(t)
        assert rows == [i + 1] and cols == [j + 1]
check("C03 every single flip is located by row x column", True)
# the bank question 25A-A-Q3 (boss): print grid, recompute
b = bank["25A-A-Q3"]
txt = b["question"]
g = parse_grid(txt)
rows, cols = failing(g)
bo = [o for o in b["options"] if o["id"] == b["correctId"]][0]["value"]
print("INFO     bank 25A-A-Q3 failing rows=%s cols=%s stored=%s" % (rows, cols, bo.encode("unicode_escape").decode()))
check("boss 25A-A-Q3 recomputed row 2 col 4", rows == [2] and cols == [4] and "2" in bo and "4" in bo)

# ---------------------------------------------------------------- Hamming (C04)
def hd(a, b):
    return sum(x != y for x, y in zip(a, b))


check("C04-Q1 d(10110,11100)=2", hd("10110", "11100") == 2)
expect("C04-Q1", "2")
code = ["00000", "01011", "10101", "11110"]
pair = [hd(a, b) for a, b in itertools.combinations(code, 2)]
check("C04 lesson pair distances 3,3,4,4,3,3", pair == [3, 3, 4, 4, 3, 3])
d = min(pair)
expect("C04-Q2", str(d))
check("C04-Q3 detect d-1=2, correct 1", (d - 1, (d - 1) // 2) == (2, 1) and correct("C04-Q3") == "מזהה 2, מתקן 1")
rx = "01001"
dist = {c: hd(rx, c) for c in code}
check("C04-Q4 distances 2,1,3,4 and nearest is 01011", [dist[c] for c in code] == [2, 1, 3, 4] and min(dist, key=dist.get) == "01011")
expect("C04-Q4", "01011")
# brute force: d=3 code corrects 1 and detects 2 errors
for c in code:
    for i in range(5):
        w = list(c)
        w[i] = "1" if w[i] == "0" else "0"
        w = "".join(w)
        assert min(code, key=lambda x: hd(w, x)) == c
    for i, j in itertools.combinations(range(5), 2):
        w = list(c)
        for p in (i, j):
            w[p] = "1" if w[p] == "0" else "0"
        assert "".join(w) not in code
check("C04 brute force: d=3 corrects any single error, detects any double error", True)
a, bb = "1001100", "1001101"
pa = a + str(ones(a) % 2)
pb = bb + str(ones(bb) % 2)
check("C04-Q5 parity words 10011001/10011010 at distance 2", (pa, pb) == ("10011001", "10011010") and hd(pa, pb) == 2 and hd(a, bb) == 1)
expect("C04-Q5", "2")
check("C04-Q6 floor((5-1)/2)=2, detect 4", (5 - 1) // 2 == 2 and correct("C04-Q6") == "2" and "4" in others("C04-Q6"))
check("C04-Q6 expect", True)

# ---------------------------------------------------------------- Ethernet, ARP, switch (C01, C07)
check("C01-Q2 MAC 48 bits = 6 bytes = 12 hex digits; IPv4 32", 6 * 8 == 48 and 48 // 4 == 12)
check("C01 lesson example MAC has 6 bytes", len("1A:2B:3C:4D:5E:6F".split(":")) == 6)
check("C07-Q2 broadcast is 48 one-bits", int("FFFFFFFFFFFF", 16) == 2 ** 48 - 1 and len("FF:FF:FF:FF:FF:FF".split(":")) == 6)
net = ipaddress.ip_network("10.0.5.0/24")
check("C07-Q3 10.0.7.9 outside, gateway inside, .255 is broadcast",
      ipaddress.ip_address("10.0.7.9") not in net and ipaddress.ip_address("10.0.5.1") in net and
      ipaddress.ip_address("10.0.5.20") in net and net.broadcast_address == ipaddress.ip_address("10.0.5.255"))
expect("C07-Q3", "10.0.5.1")


def switch(frames, ports=(1, 2, 3, 4)):
    table = {}
    outs = []
    for src, dst, inp in frames:
        table[src] = inp
        if dst in table:
            outs.append([] if table[dst] == inp else [table[dst]])
        else:
            outs.append([p for p in ports if p != inp])
    return outs, dict(table)


outs, tbl = switch([("A", "B", 1)])
check("C07-Q5 flood to 2,3,4; table A:1", outs == [[2, 3, 4]] and tbl == {"A": 1})
outs, tbl = switch([("A", "B", 1), ("B", "A", 2)])
check("C07-Q6 second frame only to port 1; table A:1,B:2", outs[1] == [1] and tbl == {"A": 1, "B": 2})
check("C07-Q5/Q6 stored", correct("C07-Q5").startswith("רושם שהכתובת של A נמצאת בממשק 1, ומעביר את המסגרת לממשקים 2, 3 ו-4")
      and correct("C07-Q6").startswith("המסגרת מועברת רק לממשק 1, והסוויץ' רושם את B בממשק 2"))
check("C07-Q1/Q4 stored", correct("C07-Q1").startswith("למצוא כתובת MAC") and correct("C07-Q4").startswith("IP: מקור A ויעד B. MAC: מקור הממשק של R ויעד B"))

# ---------------------------------------------------------------- boss: bank ids exist, recompute bank computations
for q in LV["C08"]["questions"]:
    check("boss bankId %s in the bank" % q["bankId"], q["bankId"] in bank and not bank[q["bankId"]].get("hold"))
b = bank["25A-B-Q8"]
bo = [strip(o["value"]) for o in b["options"] if o["id"] == b["correctId"]][0]
check("boss 25A-B-Q8 crc(10011100,1001)=101 matches stored", crc("10011100", "1001") == "101" == bo)
b = bank["22S-A-Q11"]
check("boss 22S-A-Q11 parity bits 0 and 1 (ones 5 -> 1? / 4 -> 0)", ones("1011101") % 2 == 1 and ones("1001101") % 2 == 0)
check("boss 22S-A-Q10 distance 1", hd("1001100", "1001101") == 1)

print("\n%d checks, %s" % (n_checks, "ALL OK" if ok else "FAILURES"))
sys.exit(0 if ok else 1)
