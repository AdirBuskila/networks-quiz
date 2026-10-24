"""Machine check for the guided course courses/tcp (C01..C08).
Recomputes every numeric answer (handshake numbers, ACK traces, effective window, throughput, cwnd per RTT for
Tahoe/Reno) with a small simulator, then asserts the stored correct option of each question matches.
Conceptual questions are pinned by correctId. ASCII only.  Run from the app root:  py -I tools/verify/needhelp/tcp/check.py
"""
import json, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
raw = subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, check=True).stdout
data = json.loads(raw.decode("utf-8"))
assert not data["errors"], data["errors"]
Q = {}
LEVELS = {}
for it in data["levels"]:
    if it["courseId"] != "tcp":
        continue
    LEVELS[it["level"]["id"]] = it["level"]
    for q in it["level"]["questions"]:
        if "id" in q:
            Q[q["id"]] = q
assert sorted(LEVELS) == ["C%02d" % i for i in range(1, 9)], sorted(LEVELS)


def correct_text(qid):
    q = Q[qid]
    return [o["value"] for o in q["options"] if o["id"] == q["correctId"]][0].strip()


# ---------- simulators ----------
def acks(segments, start=1):
    """segments (first, last) in arrival order -> ACK after each arrival (cumulative)"""
    got, exp, out = set(), start, []
    for a, b in segments:
        got.update(range(a, b + 1))
        while exp in got:
            exp += 1
        out.append(exp)
    return out


def seg_range(i, size=100):  # i is 1-based
    return ((i - 1) * size + 1, i * size)


def cwnd_series(ssthresh, rounds, events, flavor="reno"):
    """cwnd per round. events: {round: 'timeout'|'3dup'} means the loss is detected after that round's window.
    Slow start doubles but is capped at ssthresh; at/above ssthresh +1 per round. ssthresh = floor(W/2) on loss."""
    c, ss = 1, ssthresh
    cw, kind = [], []  # kind[i]: how the window of round i+1 was reached ('ss'|'ca'|'start')
    k = "start"
    for r in range(1, rounds + 1):
        cw.append(c)
        kind.append(k)
        ev = events.get(r)
        if ev == "timeout" or (ev == "3dup" and flavor == "tahoe"):
            ss = c // 2
            c, k = 1, "start"
        elif ev == "3dup":
            ss = c // 2
            c, k = ss, "ca"
        elif c < ss:
            c, k = min(2 * c, ss), "ss"
        else:
            c, k = c + 1, "ca"
    return cw, kind, ss


def expect(qid, value):
    got = correct_text(qid)
    assert got == str(value), (qid, got, str(value))


# ---------- C01 handshake ----------
x = 1000
assert x + 1 == 1001
expect("C01-Q2", x + 1)
x, y = 1000, 5000
expect("C01-Q3", "seq = %d, ack = %d" % (x + 1, y + 1))
x, y = 200, 7000
expect("C01-Q5", "%d, %d, %d" % (x + 1, x + 1, y + 1))

# ---------- C02 seq / ack ----------
expect("C02-Q1", 1000 + 500)
expect("C02-Q2", 400 + 1)
expect("C02-Q3", acks([(301, 400), (401, 500), (501, 600)], 301)[-1])
expect("C02-Q6", (4999 + 1) + 300)
assert 300 - 101 + 1 == 200

# ---------- C03 loss and dup ACKs ----------
arrive = [seg_range(i) for i in (1, 2, 4, 5)]
expect("C03-Q1", ", ".join(map(str, acks(arrive))))
arrive6 = [seg_range(i) for i in (1, 3, 4, 5, 6)]
a6 = acks(arrive6)
assert a6 == [101] * 5
dups = len(a6) - 1  # ACKs repeating the first value, not counting the first
expect("C03-Q2", dups)
assert dups >= 3  # triple dup ACK reached -> fast retransmit
a6b = acks(arrive6 + [seg_range(2)])
expect("C03-Q3", a6b[-1])
expect("C03-Q6", ", ".join(map(str, acks([(1, 100), (201, 300), (101, 200)]))))
# last segment lost: no later arrival, so no dup ACKs are generated
a5 = acks([seg_range(i) for i in (1, 2, 3, 4)])
assert a5 == [101, 201, 301, 401] and len(set(a5)) == len(a5)

# ---------- C04 flow control ----------
expect("C04-Q2", min(20, 8))
expect("C04-Q3", min(12, 30))
bits_per_s = 20 * 1460 * 8 / 0.1
assert abs(bits_per_s - 2_336_000) < 1e-6
expect("C04-Q4", "%.3f Mbps" % (bits_per_s / 1e6))

# ---------- C05 slow start / CA ----------
cw, _, _ = cwnd_series(10**9, 10, {})
expect("C05-Q1", cw[4])
expect("C05-Q6", cw[9])
assert cw[:6] == [1, 2, 4, 8, 16, 32]
cw, _, _ = cwnd_series(16, 8, {})
assert cw == [1, 2, 4, 8, 16, 17, 18, 19]
expect("C05-Q2", cw[7])
cw, _, _ = cwnd_series(12, 7, {})
assert cw == [1, 2, 4, 8, 12, 13, 14]
expect("C05-Q3", cw[6])
assert correct_text("C05-Q4").startswith("Congestion Avoidance") and correct_text("C05-Q4").endswith("21")
assert 20 >= 16 and 20 + 1 == 21

# ---------- C06 loss events ----------
W = 24
assert (W // 2, 1) == (12, 1)
expect("C06-Q1", "ssthresh = %d, cwnd = %d" % (W // 2, 1))
expect("C06-Q2", "ssthresh = %d, cwnd = %d" % (W // 2, W // 2))
expect("C06-Q3", "ssthresh = %d, cwnd = %d" % (W // 2, 1))
cw, _, ss = cwnd_series(8, 13, {8: "timeout"})
assert cw[:8] == [1, 2, 4, 8, 9, 10, 11, 12] and ss == 6
assert cw[8:13] == [1, 2, 4, 6, 7]
expect("C06-Q4", cw[12])
cw, _, ss = cwnd_series(8, 12, {8: "3dup"}, "reno")
assert cw[8:12] == [6, 7, 8, 9] and ss == 6
expect("C06-Q5", cw[11])
cwt, _, _ = cwnd_series(8, 9, {8: "3dup"}, "tahoe")
assert cwt[8] == 1

# ---------- C07 graph series ----------
cw, kind, _ = cwnd_series(16, 19, {9: "3dup", 13: "timeout"}, "reno")
SERIES = [1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8]
assert cw == SERIES, cw
for qid in ("C07-Q1", "C07-Q2", "C07-Q3", "C07-Q4", "C07-Q5", "C07-Q6"):
    stem = Q[qid]["question"]
    if qid in ("C07-Q1",):
        assert ", ".join(map(str, SERIES)) in stem
# slow-start rounds: round 1, and every round reached by a doubling/capped step or by a restart sequence
ss_rounds = [r + 1 for r in range(19) if kind[r] in ("ss", "start")]
intervals, cur = [], [ss_rounds[0], ss_rounds[0]]
for r in ss_rounds[1:]:
    if r == cur[1] + 1:
        cur[1] = r
    else:
        intervals.append(tuple(cur)); cur = [r, r]
intervals.append(tuple(cur))
assert intervals == [(1, 5), (14, 17)], intervals
expect("C07-Q1", "[1, 5] ו-[14, 17]")
# ssthresh after the timeout at round 13 (cwnd 13)
_, _, ssx = cwnd_series(16, 14, {9: "3dup", 13: "timeout"}, "reno")
assert ssx == 6
expect("C07-Q3", 6)
# CA entry (slope change SS -> CA): last SS round before a CA step
entries = [r for r in range(1, 19) if kind[r] == "ca" and cw[r] == cw[r - 1] + 1 and kind[r - 1] in ("ss", "start")]
assert [e for e in entries] == [5, 17], entries  # 0-based index r is round r+1, point of slope change = round r
expect("C07-Q4", "5 ו-17")
expect("C07-Q5", cw[17])
cwt, _, _ = cwnd_series(16, 10, {9: "3dup"}, "tahoe")
assert cwt[9] == 1
expect("C07-Q6", cwt[9])
assert cw[9] == 10  # reno round 10 (the question's baseline)
assert correct_text("C07-Q2") and Q["C07-Q2"]["correctId"] == "b"  # 20 -> 10 = halving = 3 dup ACKs

# ---------- conceptual questions pinned by correctId ----------
PINNED = {
    "C01-Q1": "c", "C01-Q4": "b", "C01-Q6": "a",
    "C02-Q4": "b", "C02-Q5": "c",
    "C03-Q4": "a", "C03-Q5": "b",
    "C04-Q1": "b", "C04-Q5": "c", "C04-Q6": "b",
    "C05-Q5": "b", "C06-Q6": "c", "C07-Q2": "b",
}
for qid, cid in PINNED.items():
    assert Q[qid]["correctId"] == cid, (qid, Q[qid]["correctId"], cid)

# ---------- every authored question is covered, boss has bank ids only ----------
COVERED = set(PINNED) | {
    "C01-Q2", "C01-Q3", "C01-Q5", "C02-Q1", "C02-Q2", "C02-Q3", "C02-Q6", "C03-Q1", "C03-Q2", "C03-Q3", "C03-Q6",
    "C04-Q2", "C04-Q3", "C04-Q4", "C05-Q1", "C05-Q2", "C05-Q3", "C05-Q4", "C05-Q6", "C06-Q1", "C06-Q2", "C06-Q3",
    "C06-Q4", "C06-Q5", "C07-Q1", "C07-Q3", "C07-Q4", "C07-Q5", "C07-Q6",
}
assert set(Q) == COVERED, sorted(set(Q) ^ COVERED)
# C02-Q2 is trivial: last byte 400 -> expect 401
boss = LEVELS["C08"]
assert boss["boss"] and [q["bankId"] for q in boss["questions"]] == [
    "22S-A-Q14", "25A-B-Q2", "SAMP-1-Q14", "26A-A-Q6", "25A-C-Q7", "23A-A-Q20"]
# the bank keys of the boss questions agree with the simulator
bank = json.loads((ROOT / "questions.json").read_text(encoding="utf-8"))
bank = bank if isinstance(bank, list) else bank["questions"]
B = {q["id"]: q for q in bank}
assert B["25A-B-Q2"]["correctId"] == "a" and [o for o in B["25A-B-Q2"]["options"] if o["id"] == "a"][0]["value"].replace(" ", "") == "A=301,B=301,C=301,D=301,E=701"
assert acks([(101, 300), (401, 500), (501, 600), (601, 700), (301, 400)], 101) == [301, 301, 301, 301, 701]
assert B["SAMP-1-Q14"]["correctId"] == "c"  # slow start [1,6],[23,26] on the exam graph (rounds 1-6 doubling, 23-26 restart)
assert B["26A-A-Q6"]["correctId"] == "a"
assert B["22S-A-Q14"]["correctId"] == "a"
print("tcp course check OK:", len(Q), "authored questions,", len(boss["questions"]), "boss bank questions")

# ---------- cross-check against the app's own calculator (calc.js) used in the C07 embed ----------
_js = ('const C=require(%s);const r=C.tcp({rounds:19,init:1,ssthresh:16,variant:"reno",events:"9:3dup, 13:timeout"});'
       'console.log(JSON.stringify(r.rounds.map(x=>x.cwnd)))') % json.dumps(str(ROOT / "calc.js"))
_calc = json.loads(subprocess.run(["node", "-e", _js], capture_output=True, check=True).stdout.decode())
assert _calc == SERIES, (_calc, SERIES)
assert '"ssthresh": 16' in LEVELS["C07"]["lesson"]["html"] and "9:3dup, 13:timeout" in LEVELS["C07"]["lesson"]["html"]
print("calc.js agrees with the C07 series")
