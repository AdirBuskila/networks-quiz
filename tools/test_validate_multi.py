"""Accept/reject tests for multi-select raw items.  PYTHONUTF8=1 py tools/test_validate_multi.py"""
import copy, json, sys, tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import validate

CFG = json.loads((Path(__file__).resolve().parent.parent / "course.config.json").read_text(encoding="utf-8"))
TOPIC = CFG["topics"][0][0]


def item(**kw):
    q = {"num": 1, "topic": TOPIC, "question": "pick all that apply",
         "options": [{"id": i, "type": "text", "value": "opt " + i} for i in "abcd"],
         "multi": True, "answerIds": ["a", "c"], "answerSource": "solved", "official": False,
         "confidence": "high", "explanation": ""}
    q.update(kw)
    for k in [k for k, v in kw.items() if v is None]:
        q.pop(k)
    return q


def problems(q):
    data = {"examCode": "TEST-A", "examLabel": "t", "year": 2099, "examDate": "1.1.2099", "sourceFile": "x",
            "keyFile": "x", "questions": [q]}
    with tempfile.TemporaryDirectory() as d:
        p = Path(d) / "TEST-A.json"
        p.write_text(json.dumps(data), encoding="utf-8")
        return validate.check_file(p)[0]


fails = 0


def check(name, q, want_ok, needle=None):
    global fails
    pr = problems(q)
    ok = (not pr) if want_ok else (bool(pr) and (needle is None or any(needle in x for x in pr)))
    if not ok:
        fails += 1
        print("FAIL", name, [x.encode("ascii", "backslashreplace").decode() for x in pr])
    else:
        print("ok  ", name)


check("valid multi", item(), True)
check("valid multi, 3 answers", item(answerIds=["b", "c", "d"]), True)
check("valid multi, order irrelevant", item(answerIds=["c", "a"]), True)
check("reject: one answerId", item(answerIds=["a"]), False, ">=2")
check("reject: answerIds missing", item(answerIds=None), False, ">=2")
check("reject: unknown id", item(answerIds=["a", "z"]), False, "unknown option id")
check("reject: duplicate ids", item(answerIds=["a", "a"]), False, "duplicate answerIds")
check("reject: every option correct", item(answerIds=["a", "b", "c", "d"]), False, "every option")
check("reject: correctId alongside", item(correctId="a"), False, "must not carry correctId")
check("reject: acceptedIds alongside", item(acceptedIds=["a", "c"]), False, "must not carry acceptedIds")
check("reject: answerIds not a list", item(answerIds="ac"), False, ">=2")
check("reject: answerIds without multi", item(multi=None, correctId="a"), False, "answerIds only with")
check("reject: multi not a bool", item(multi="yes"), False)
check("single item still valid", item(multi=None, answerIds=None, correctId="b"), True)
check("single item still needs correctId", item(multi=None, answerIds=None), False, "missing correctId")
check("single acceptedIds still valid", item(multi=None, answerIds=None, correctId="a", acceptedIds=["a", "b"]), True)
check("held multi without answers is fine", {"num": 1, "hold": "unsolved", "multi": True}, True)
print("FAILED" if fails else "VALIDATE MULTI TEST PASSED")
sys.exit(1 if fails else 0)
