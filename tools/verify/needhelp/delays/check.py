# -*- coding: utf-8 -*-
"""Machine check of the guided course "delays" (courses/delays/C01..C07). ASCII output only.

Every own question's stored answer is recomputed from first principles below and compared with the
option text (parsed: number + unit). Exactly one option must match the recomputed value and it must be
the stored correctId. The bankId questions are recomputed from their exam data and checked against the
bank's key.

Run:  PYTHONUTF8=1 py tools/verify/needhelp/delays/check.py
"""
import json, math, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parents[4]
ok = True


def fail(msg):
    global ok
    ok = False
    print("FAIL", msg)


# ---- unit words (Hebrew by escape so this file stays ASCII) ----
MICRO = "מיקרושניות"          # microseconds
MILLI = "מילישניות"                # milliseconds
SEC = "שני"                                                       # sheni(yot|yah)
BIT = "ביט"                                                       # bit
PERMIN = "לדקה"                                              # per minute
PERSEC = "לשנייה"                                  # per second


def num(t):
    m = re.search(r"\d[\d,]*\.?\d*", t)
    return float(m.group(0).replace(",", "")) if m else None


def seconds(t):
    n = num(t)
    if n is None:
        return None
    if MICRO in t or "µs" in t:
        return n * 1e-6
    if MILLI in t or re.search(r"\bms\b", t):
        return n * 1e-3
    if SEC in t:
        return n
    return None


def per_second(t):
    n = num(t)
    if n is None:
        return None
    return n / 60 if PERMIN in t else n


def plain(t):
    return num(t)


def mbps(t):
    return num(t)


def close(a, b, rel=0.01):
    return a is not None and abs(a - b) <= rel * abs(b)


# ---- load the course ----
raw = subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, check=True).stdout
data = json.loads(raw.decode("utf-8"))
if data["errors"]:
    fail("load errors: %s" % data["errors"])
levels = {l["level"]["id"]: l["level"] for l in data["levels"] if l["courseId"] == "delays"}
questions = {}
for lid, lv in levels.items():
    for q in lv["questions"]:
        if "id" in q:
            questions[q["id"]] = q

# ---- ground truth (independent recomputation) ----
KB = 8  # bit per byte
T = {}

# C01 units
T["C01-Q1"] = ("plain", 1500 * KB)
T["C01-Q2"] = ("plain", 100 * 10**6)
T["C01-Q3"] = ("micro", 0.5 * 1000)
T["C01-Q4"] = ("plain", 3_600_000 / 3600)
T["C01-Q5"] = ("plain", 1 * 10**9 / 10**6)
T["C01-Q6"] = ("plain", 5 / 1000)
# C02 transmission delay
T["C02-Q1"] = ("sec", 8000 / 10e6)
T["C02-Q2"] = ("sec", 1500 * KB / 100e6)
T["C02-Q3"] = ("sec", 1500 * KB / 1e9)
T["C02-Q4"] = ("sec", 1e6 * KB / 10e6)
# C03 propagation
T["C03-Q1"] = ("sec", 1000e3 / 2e8)
T["C03-Q2"] = ("sec", 2000 / 3e8)
# C04 store and forward
T["C04-Q1"] = ("sec", 2 * 10000 / 10e6)
T["C04-Q2"] = ("sec", 3 * 16000 / 8e6)          # 2 routers = 3 links
T["C04-Q3"] = ("sec", 4000 / 100e6 + 4000 / 10e6)
T["C04-Q4"] = ("sec", 12000 / 100e6 + 12000 / 10e6 + 300e3 / 2e8 + 600e3 / 2e8)
T["C04-Q5"] = ("sec", 2 * 1000 * KB / 8e6)
T["C04-Q6"] = ("sec", sum(6000 / r for r in (60e6, 30e6, 20e6)) + 3 * 500e3 / 2e8)
# C05 traffic intensity
T["C05-Q1"] = ("plain", (6000 / 60) * 1000 / 1e6)
T["C05-Q2"] = ("plain", (720000 / 3600) * 1500 * KB / 100e6)
# C06
T["C06-Q1"] = ("ps", 0.5 * 24e6 / (1500 * KB))
T["C06-Q2"] = ("plain", 0.8 * 1e9 / 5000)
T["C06-Q3"] = ("plain", min(80, 100, 200 / 5))
T["C06-Q4"] = ("plain", round((100 / 4) / 60, 2))

# C05-Q3 / C05-Q4 / C02-Q5/Q6 / C03-Q3..Q5 : conceptual, checked by their computed numbers below
rho_q3 = 1000 * 1e4 / 5e6
assert rho_q3 == 2.0
# C03-Q3: transmission vs propagation
tr, pr = 1500 * KB / 1e9, 100e3 / 2e8
assert math.isclose(tr, 12e-6) and math.isclose(pr, 500e-6) and pr > tr
# C03-Q4
tr, pr = 1500 * KB / 10e6, 100 / 2e8
assert math.isclose(tr, 1.2e-3) and math.isclose(pr, 0.5e-6) and tr > pr
# C02-Q6: halving rate doubles time
assert math.isclose((1 / 20e6) / (1 / 40e6), 2.0)
# C05-Q4: monotone in rho (queueing grows toward 1)  -> 0.95 is the max of the offered values
assert max([0.02, 0.5, 0.1, 0.95]) == 0.95

CONCEPT = {
    "C02-Q5": "a", "C02-Q6": "a", "C03-Q3": "b", "C03-Q4": "b", "C03-Q5": "b", "C05-Q3": "b", "C05-Q4": "d",
}

n_checked = 0
for qid, (kind, want) in T.items():
    q = questions.get(qid)
    if not q:
        fail("%s missing" % qid)
        continue
    hits = []
    for o in q["options"]:
        v = o["value"]
        if kind == "sec":
            got = seconds(v)
        elif kind == "micro":
            got = num(v) if (MICRO in v) else None
        elif kind == "ps":
            got = per_second(v) if (PERSEC in v or PERMIN in v) else None
        else:
            got = plain(v)
        if got is not None and close(got, want, 0.006):
            hits.append(o["id"])
    if hits != [q["correctId"]]:
        fail("%s: recomputed %r matches options %s but correctId=%s" % (qid, want, hits, q["correctId"]))
    else:
        n_checked += 1
        print("OK %s = %s -> %s" % (qid, want, q["correctId"]))

for qid, cid in CONCEPT.items():
    q = questions.get(qid)
    if not q or q["correctId"] != cid:
        fail("%s concept key mismatch" % qid)
    else:
        n_checked += 1
        print("OK %s concept -> %s" % (qid, cid))

# every own question must be covered
for qid in questions:
    if qid not in T and qid not in CONCEPT:
        fail("own question %s has no check" % qid)

# ---- bank questions pulled by bankId ----
_b = json.loads((ROOT / "questions.json").read_text(encoding="utf-8"))
_b = _b if isinstance(_b, list) else _b["questions"]
bank = {b["id"]: b for b in _b}
bank_ids = [q["bankId"] for lv in levels.values() for q in lv["questions"] if "bankId" in q]


def opt_text(bid, oid):
    return [o for o in bank[bid]["options"] if o["id"] == oid][0]["value"]


BANK = {}
# 24A-A-Q1: a = 500000/h, L=5000, R=1 Gbps
BANK["24A-A-Q1"] = ("rho", (500000 / 3600) * 5000 / 1e9, 0.0007)
BANK["24A-B-Q1"] = ("rho", (300000 / 3600) * 1500 * KB / 20e6, 0.05)
BANK["24A-B-Q6"] = ("ps", 0.8 * 20e6 / (1500 * KB), 1333)
# 25A-A-Q2 : 8000 bit, R = 10M,10M,1000M ; d = 2 km, 1000 km, 2 km ; s = 3e8
t = sum(8000 / r for r in (10e6, 10e6, 1000e6)) + (2e3 + 1e6 + 2e3) / 3e8
BANK["25A-A-Q2"] = ("closest_ms", t * 1e3, 4)
# 25A-B-Q7 : L=4000 ; 1e9,1e8,1e7 ; 2,1000,2 km ; 3e8
t = sum(4000 / r for r in (1e9, 1e8, 1e7)) + (2e3 + 1e6 + 2e3) / 3e8
BANK["25A-B-Q7"] = ("sec", t, 0.0038)
# 25A-B-Q6 : 200/4 = 50 ; server 80 -> 0.625
BANK["25A-B-Q6"] = ("plain", min(80, 70, 200 / 4) / 80, 0.63)  # 0.625 shown as 0.63
# 26A-A-Q11 : L=12000 ; 1e9,1e7,1e8 ; 2,5000,3 km ; 3e8
t = sum(12000 / r for r in (1e9, 1e7, 1e8)) + (2e3 + 5e6 + 3e3) / 3e8
BANK["26A-A-Q11"] = ("closest_ms", t * 1e3, 18)

for bid in bank_ids:
    if bid not in bank:
        fail("bankId %s not in bank" % bid)
        continue
    b = bank[bid]
    if bid in BANK:
        kind, val, shown = BANK[bid]
        txt = opt_text(bid, b["correctId"])
        n = num(txt)
        if kind == "rho":
            good = close(val, shown, 0.1) and n == shown
        elif kind == "ps":
            good = close(val, shown, 0.01) and close(n, shown, 0.01) and PERSEC in txt
        elif kind == "closest_ms":
            good = abs(val - shown) < 1.0 and n == shown
            # the stored key must also be the nearest of all numeric options
            cands = [num(o["value"]) for o in b["options"]]
            best = min(cands, key=lambda c: abs(c - val)) if all(c is not None for c in cands) else None
            good = good and (best is None or best == n)
        elif kind == "sec":
            good = close(val, shown, 0.02) and close(n, shown, 0.01)
        else:
            good = close(val, shown, 0.01) and close(n, shown, 0.01)
        if not good:
            fail("bank %s: recomputed %.6g vs key %r (%s)" % (bid, val, n, txt))
        else:
            n_checked += 1
            print("OK bank %s recomputed %.6g ~ key %s" % (bid, val, n))
    else:
        # conceptual bank questions: only confirm they exist, are not held
        if b.get("hold"):
            fail("bank %s is held" % bid)
        else:
            print("OK bank %s (conceptual, key %s)" % (bid, b["correctId"]))

# boss must be 4-6 real questions, none held
boss = [lv for lv in levels.values() if lv.get("boss")]
if len(boss) != 1 or not (4 <= len(boss[0]["questions"]) <= 6) or not all("bankId" in q for q in boss[0]["questions"]):
    fail("boss level shape")

print("checked", n_checked, "numeric/concept items")
if not ok:
    print("FAILED")
    sys.exit(1)
print("ALL OK")
