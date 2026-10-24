# -*- coding: utf-8 -*-
"""Machine check for the guided course "app" (DNS and HTTP: cache, connections, TTL).

Run:  py -I tools/verify/needhelp/app/check.py        (exit code 1 on any failed assertion)

Every computed answer in courses/app/C01..C09.js is recomputed here from a small model and compared with the
stored correct option, and the stored distractors are compared with the error models they were written for
(so each distractor fails for a known, observable reason).  Models:
  RTT counts      non-persistent 2(N+1), persistent (no pipelining) 1+(N+1), pipelining 1+1+1
  time            t = 8*bytes/rate (1 KB = 1000 bytes); same three models plus transmission times
  rounds          ceil(n/6) per host, hosts in parallel -> max over hosts
  cache           utilisation (1-h)*u, average delay h*hit + (1-h)*miss
  DNS             3T uncached, 2T with the TLD server known, 8 messages iterative (1 + 2*3 + 1)
  TTL             event simulation: a lookup is a real one when no record is cached or age >= TTL (no refresh on hit)
All output is ASCII.
"""
import json
import math
import re
import subprocess
import sys
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[4]
FAILS = []
OK = [0]


def check(cond, msg):
    if cond:
        OK[0] += 1
    else:
        FAILS.append(msg)


# ---------------------------------------------------------------- load the level files through the app's loader
raw = subprocess.run(["node", str(ROOT / "tools" / "course_load.js")], capture_output=True, text=True, encoding="utf8", cwd=str(ROOT)).stdout
loaded = json.loads(raw)
check(not loaded["errors"], "loader errors: %s" % loaded["errors"])
Q = {}
LEVEL = {}
for item in loaded["levels"]:
    if item["courseId"] != "app":
        continue
    lv = item["level"]
    LEVEL[lv["id"]] = lv
    for q in lv["questions"]:
        if "id" in q:
            Q[q["id"]] = q


def opts(qid):
    q = Q[qid]
    return {o["id"]: o["value"] for o in q["options"]}


def correct(qid):
    q = Q[qid]
    return opts(qid)[q["correctId"]]


def expect_set(qid, right, wrong):
    """The correct option must equal `right`; the other options must equal `wrong` (as a set)."""
    q = Q[qid]
    o = opts(qid)
    check(len(set(o.values())) == len(o), "%s: duplicate option texts" % qid)
    check(correct(qid) == right, "%s: stored correct %r != computed %r" % (qid, correct(qid), right))
    others = {v for k, v in o.items() if k != q["correctId"]}
    check(others == set(wrong), "%s: distractors %r != error models %r" % (qid, sorted(others), sorted(wrong)))
    check(right not in wrong, "%s: computed answer also listed as a distractor" % qid)


# ---------------------------------------------------------------- models
def rtt_np(n_obj):
    return 2 * n_obj


def rtt_p(n_obj):
    return 1 + n_obj


def rtt_pipe():
    return 3


def tx(nbytes, mbps):  # seconds
    return nbytes * 8 / (mbps * 1e6)


def t_np(rtt, t0, t1, n):
    return (2 * rtt + t0) + n * (2 * rtt + t1)


def t_p(rtt, t0, t1, n):
    return rtt + (rtt + t0) + n * (rtt + t1)


def t_pipe(rtt, t0, t1, n):
    return rtt + (rtt + t0) + rtt + n * t1


def ms(x):
    v = round(x * 1000, 6)
    assert abs(v - round(v)) < 1e-6, v
    return "%d ms" % round(v)


# ================================================================ C02: RTT counts
n = 4 + 1
expect_set("app-C02-Q1", "%d RTT" % rtt_np(n), ["%d RTT" % rtt_p(n), "%d RTT" % n, "%d RTT" % rtt_pipe()])
n = 6 + 1
expect_set("app-C02-Q2", "%d RTT" % rtt_p(n), ["%d RTT" % rtt_np(n), "%d RTT" % n, "%d RTT" % rtt_pipe()])
n = 9 + 1
expect_set("app-C02-Q3", "%d RTT" % rtt_pipe(), ["%d RTT" % (rtt_pipe() - 1), "%d RTT" % rtt_p(n), "%d RTT" % rtt_np(n)])
# lesson table at N = 3: 2(N+1)=8, 1+(N+1)=5, 3 (lesson example)
check((rtt_np(4), rtt_p(4), rtt_pipe()) == (8, 5, 3), "C02 lesson example")
check("$2\\cdot4=8$" in LEVEL["C02"]["lesson"]["html"] and "$1+4=5$" in LEVEL["C02"]["lesson"]["html"], "C02 lesson example text")
# Q5: RTT = 50 ms, base + 9 images, persistent, no pipelining
r = 0.050
expect_set("app-C02-Q5", ms(rtt_p(10) * r), [ms(rtt_np(10) * r), ms(10 * r), ms(rtt_pipe() * r)])

# ================================================================ C03: times
rtt, rate = 0.200, 100.0
t0, t1 = tx(50_000, rate), tx(250_000, rate)
check(round(t0, 9) == 0.004 and round(t1, 9) == 0.020, "C03 transmission times")
n = 3
expect_set("app-C03-Q1", ms(t_np(rtt, t0, t1, n)), [ms(t_p(rtt, t0, t1, n)), ms(t_pipe(rtt, t0, t1, n)),
                                                      ms((n + 1) * rtt + t0 + n * t1)])  # error: 1 RTT per object (no connection RTT)
html = LEVEL["C03"]["lesson"]["html"]
for v in (ms(t_np(rtt, t0, t1, 3)), ms(t_p(rtt, t0, t1, 3)), ms(t_pipe(rtt, t0, t1, 3))):
    check(v.replace(" ms", "\\,ms") in html, "C03 lesson example value %s" % v)
n = 5
expect_set("app-C03-Q2", ms(t_p(rtt, t0, t1, n)), [ms(t_np(rtt, t0, t1, n)), ms(t_p(rtt, t0, t1, n) - rtt),
                                                      ms(t_pipe(rtt, t0, t1, n))])
n = 3
expect_set("app-C03-Q3", ms(t_pipe(rtt, t0, t1, n)), [ms(t_np(rtt, t0, t1, n)), ms(t_p(rtt, t0, t1, n)),
                                                        ms(t_pipe(rtt, t0, t1, n) - rtt)])
# Q4: symbolic, evaluate numerically with random values; only the persistent expression equals t_p
import random
random.seed(7)
ok = True
for _ in range(50):
    R, a, b, N = random.uniform(.01, .5), random.uniform(0, .05), random.uniform(0, .05), random.randint(2, 9)
    exprs = {
        "a": R + (R + a) + N * (R + b),
        "b": 2 * R + a + N * (2 * R + b),
        "c": R + (R + a) + R + N * b,
        "d": (R + a) + N * (R + b),
    }
    ok = ok and abs(exprs["a"] - t_p(R, a, b, N)) < 1e-12
    ok = ok and all(abs(exprs[k] - t_p(R, a, b, N)) > 1e-9 for k in "bcd")
    ok = ok and abs(exprs["b"] - t_np(R, a, b, N)) < 1e-12 and abs(exprs["c"] - t_pipe(R, a, b, N)) < 1e-12
check(ok, "C03-Q4 symbolic expressions")
q4 = Q["app-C03-Q4"]
check(q4["correctId"] == "a" and opts("app-C03-Q4")["a"].startswith("$RTT+(RTT+t_0)+N\\,(RTT+t_1)$"), "C03-Q4 stored key")
# Q5: difference NP - P is N*RTT, independent of transmission times
R5, N5 = 0.100, 5
diff = t_np(R5, 0.007, 0.013, N5) - t_p(R5, 0.007, 0.013, N5)
check(abs(diff - N5 * R5) < 1e-12, "C03-Q5 difference")
expect_set("app-C03-Q5", ms(N5 * R5), [ms((N5 + 1) * R5), ms(R5), ms(2 * N5 * R5)])

# ================================================================ C04: connections and rounds
def conns_by_name(objs):
    return len({h for h in objs})


# Q1: base+3 imgs on a.com, 2 on b.com, 1 on c.com -> 3 names; error models: per object (7), images only (6), one (1)
objs = ["a"] + ["a"] * 3 + ["b"] * 2 + ["c"]
expect_set("app-C04-Q1", str(conns_by_name(objs)), [str(len(objs)), str(len(objs) - 1), "1"])
# Q2: www, img, www (+ base on www), same IP -> 2 names; errors: 1 (merge by IP), 3 images, 4 objects
objs = ["www", "www", "img", "www"]
expect_set("app-C04-Q2", str(conns_by_name(objs)), ["1", str(len(objs) - 1), str(len(objs))])
# Q3: HTTP/2, 80 resources one host
expect_set("app-C04-Q3", "1", [str(80), str(math.ceil(80 / 6)), "6"])
# Q4: 40 images, 6 parallel
expect_set("app-C04-Q4", str(math.ceil(40 / 6)), [str(40 // 6), "40", str(math.ceil(40 / 6) + 1)])
# Q5: 14 on A, 20 on B in parallel hosts
rounds = {h: math.ceil(c / 6) for h, c in {"A": 14, "B": 20}.items()}
expect_set("app-C04-Q5", str(max(rounds.values())), [str(sum(rounds.values())), str(math.ceil(34 / 6)), "34"])
check((max(rounds.values()), sum(rounds.values()), math.ceil(34 / 6)) == (4, 7, 6), "C04-Q5 values")
# lesson example: 5 and 20 -> max 4, sum 5, pooled ceil(25/6)=5
check((max(math.ceil(5 / 6), math.ceil(20 / 6)), math.ceil(5 / 6) + math.ceil(20 / 6), math.ceil(25 / 6)) == (4, 5, 5), "C04 lesson example")
check(math.ceil(100 / 6) == 17, "C04 lesson exam convention 17")
# Q6: convention ceil(N/6) vs 1; the correct option is parsed by its numbers (text is Hebrew)
def nums(s):
    s = s.replace("וחיבור אחד", "1 ")
    return tuple(int(x) for x in re.findall(r"(?<![\d./])\d+(?![\d.])", s))
o6 = opts("app-C04-Q6")
q6 = Q["app-C04-Q6"]
want = (math.ceil(60 / 6), 1)
check(nums(o6[q6["correctId"]]) == want, "C04-Q6 stored key %r != %r" % (nums(o6[q6["correctId"]]), want))
others6 = sorted(nums(v) for k, v in o6.items() if k != q6["correctId"])
check(others6 == sorted([(60, 1), (10, 10), (6, 6)]), "C04-Q6 distractors %r" % others6)
# every option except the key gives HTTP/2 a number != 1 or HTTP/1.1 a wrong number
check(all(v != want for v in others6), "C04-Q6 distractor equals key")

# ================================================================ C05: cache
# Q2: 1 MB, 80 Mbps, RTT 100 ms: t = 100 ms; full GET = 200 ms; 304 = 100 ms
rtt5 = 0.100
tobj = tx(1_000_000, 80.0)
check(abs(tobj - 0.100) < 1e-12, "C05 object tx time")
expect_set("app-C05-Q2", ms(rtt5), [ms(rtt5 + tobj), "0 ms", ms(2 * rtt5 + tobj)])
check("\\dfrac{8\\cdot10^{6}}{80\\cdot10^{6}}=100" in LEVEL["C05"]["lesson"]["html"], "C05 lesson tx text")
# Q5
u, h = 0.9, 0.4
fmt = lambda x: ("%.2f" % x).rstrip("0").rstrip(".") if abs(x - round(x, 1)) > 1e-12 else "%.1f" % x
expect_set("app-C05-Q5", fmt((1 - h) * u), [fmt(h * u), fmt(u - h), fmt(u)])
check((fmt((1 - h) * u), fmt(h * u), fmt(u - h)) == ("0.54", "0.36", "0.5"), "C05-Q5 formatting")
# Q6
h6, hit, miss = 0.6, 10, 210
avg = h6 * hit + (1 - h6) * miss
expect_set("app-C05-Q6", "%d ms" % round(avg), ["%d ms" % round((1 - h6) * hit + h6 * miss), "%d ms" % round((hit + miss) / 2), "%d ms" % miss])
check(round(avg) == 90, "C05-Q6 value")
# lesson example: h=0.5, 20/220 -> 120 ms; util 0.8 -> 0.4
check(0.5 * 20 + 0.5 * 220 == 120 and abs(0.5 * 0.8 - 0.4) < 1e-12, "C05 lesson example")
# max-age: 3600 s = 1 hour, 7200 s = 2 hours
check(3600 // 3600 == 1 and 7200 // 3600 == 2, "C05 max-age units")

# ================================================================ C06: DNS
# Q2: messages, iterative: client->resolver, 3 x (query+response), resolver->client
def messages_iterative(servers):
    msgs = [("client", "resolver")]
    for s in servers:
        msgs += [("resolver", s), (s, "resolver")]
    msgs.append(("resolver", "client"))
    return len(msgs)


def messages_recursive(servers):
    # client->resolver, resolver->s1, s1->s2, ..., last answer back along the chain, resolver->client
    chain = ["resolver"] + servers
    msgs = [("client", "resolver")]
    msgs += [(chain[i], chain[i + 1]) for i in range(len(chain) - 1)]
    msgs += [(chain[i + 1], chain[i]) for i in reversed(range(len(chain) - 1))]
    msgs.append(("resolver", "client"))
    return len(msgs)


SRV = ["root", "tld", "auth"]
check(messages_iterative(SRV) == 8 and messages_recursive(SRV) == 8, "C06 message counts")
expect_set("app-C06-Q2", "8", [str(2 * len(SRV)), str(len(SRV) + 1), "10"])
# Q5: T=25 ms, TLD server cached -> 2 lookups
T = 25
expect_set("app-C06-Q5", "%d ms" % (2 * T), ["%d ms" % (3 * T), "%d ms" % T, "%d ms" % (4 * T)])
check(3 * 30 == 90 and 2 * 30 == 60, "C06 lesson example")

# ================================================================ C07: TTL simulation
def real_lookups(ttl, times):
    stored = None
    n_real = 0
    for t in times:
        if stored is None or t - stored >= ttl:
            n_real += 1
            stored = t  # saved now; a hit does not refresh the age
    return n_real


expect_set("app-C07-Q2", str(real_lookups(60, [0, 30, 70, 100])), ["4", "1", "3"])
check(real_lookups(60, [0, 30, 70, 100]) == 2, "C07-Q2 value")


def sliding_lookups(ttl, times):  # error model: every hit refreshes the TTL
    last = None
    n_real = 0
    for t in times:
        if last is None or t - last >= ttl:
            n_real += 1
        last = t
    return n_real


check(sliding_lookups(60, [0, 30, 70, 100]) == 1, "C07-Q2 error model (sliding refresh) gives 1")
times = list(range(0, 100, 10))
T3 = 3 * 20
nreal = real_lookups(45, times)
expect_set("app-C07-Q3", "%d ms" % (nreal * T3), ["%d ms" % T3, "%d ms" % (3 * T3), "%d ms" % (len(times) * T3)])
check(nreal == 2, "C07-Q3 value")
check(real_lookups(60, [0, 25, 80]) == 2, "C07 lesson example")
# no boundary cases in the stored questions (age exactly == TTL would be ambiguous)
for ttl, ts in ((60, [0, 30, 70, 100]), (45, times)):
    last = None
    for t in ts:
        if last is not None:
            check(t - last != ttl, "boundary case ttl=%s t=%s" % (ttl, t))
        if last is None or t - last >= ttl:
            last = t

# ================================================================ structure and sources
for lid, lv in sorted(LEVEL.items()):
    check(lv["source"] == "ai-verified", "%s source" % lid)
    for q in lv["questions"]:
        if "id" in q:
            ids = [o["id"] for o in q["options"]]
            check(q["correctId"] in ids and len(ids) == len(set(ids)), "%s ids" % q["id"])
            check(len(q["options"]) in (4, 5) or q["id"] in (), "%s option count %d" % (q["id"], len(q["options"])))
            # never cite an option by position
            blob = q["explanation"] + q["question"] + " ".join(o["value"] for o in q["options"])
            check(not re.search(r"(תשובה|אפשרות|סעיף)\s+[א-ד]\b|\boption\s+[a-d]\b", blob), "%s cites an option by position" % q["id"])
# boss
boss = LEVEL["C09"]
check(boss.get("boss") is True and all("bankId" in q for q in boss["questions"]), "C09 boss shape")
bank = json.load(open(ROOT / "questions.json", encoding="utf8"))
byid = {x["id"]: x for x in bank["questions"]}
OFFICIAL = {"22S-A-Q5", "25A-C-Q1", "25A-C-Q2", "22S-A-Q15"}
for q in boss["questions"]:
    b = byid.get(q["bankId"])
    check(b is not None and not b.get("hold"), "boss %s missing or held" % q["bankId"])
    if b:
        check(b.get("official") or b.get("confidence") == "high", "boss %s not official/high" % q["bankId"])
        check(not b.get("multi"), "boss %s is multi-select" % q["bankId"])
# bank answers the boss relies on (cross-check against the models above)
def bank_correct(qid):
    b = byid[qid]
    return next(o["value"] for o in b["options"] if o["id"] == b["correctId"])
# 22S-A-Q5: persistent without pipelining: 1 s + 100KB/100Mb + 5 * (500 ms + 300KB/100Mb)
check(abs((0.5 + (0.5 + tx(100_000, 100)) + 5 * (0.5 + tx(300_000, 100))) - (1 + 0.008 + 5 * (0.5 + 0.024))) < 1e-12, "22S-A-Q5 expression value")
check("1sec + 100KB/100Mb + 5*(500msec + 300KB/100Mb)" in bank_correct("22S-A-Q5"), "22S-A-Q5 key text")
check("17" in bank_correct("25A-C-Q1") and math.ceil(100 / 6) == 17, "25A-C-Q1 key")
check(bank_correct("25A-C-Q2").startswith("90") and 3 * 30 == 90, "25A-C-Q2 key")

print("checks passed: %d, failed: %d" % (OK[0], len(FAILS)))
for f in FAILS:
    print("FAIL " + f.encode("ascii", "backslashreplace").decode("ascii"))
sys.exit(1 if FAILS else 0)
