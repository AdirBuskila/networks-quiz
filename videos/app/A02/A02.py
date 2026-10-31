# -*- coding: utf-8 -*-
"""A02 · חיבורים וספירת RTT — video script (build: tools/video/vid.py A02).

Source: courses/app/C02.js (lesson + goal: count RTT rounds for a page with N images, non-persistent 2(N+1),
persistent without pipelining N+2, pipelining 3; transmission neglected).
Exam part: an original question "בסגנון מבחן" (bank={}): how much faster pipelining is than non-persistent for a page
with 8 images at RTT = 30 ms. No free bank item counts RTT rounds: 22S-A-Q5 is in the C09 boss, and the free
"HTTP 1.0 problem" / "two pages on one persistent connection" items (25A-A-Q14, 23A-A-Q12) are twins of C02-Q4/Q6.
Avoided on purpose: the C02 quiz numbers (4, 6 and 9 images; RTT 50 ms with 9 images) and the lesson's example
(3 images); the worked example uses 2 images, the exam part 8 images and asks for a difference.
Every count and time comes from w_app.segments() / rtt_count(), which are checked against the course checker.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_app as w

# ---------------------------------------------------------------- one object, non-persistent (two RTTs)
ONE = [("R", "SYN", "syn"), ("L", "SYN+ACK", "syn"), ("R", "ACK + GET /index.html", "req"), ("L", "200 OK + HTML", "resp")]
LAD, ST = w.ladder("o", ("לקוח", "שרת"), [dict(dir=d, label=l, cls=c) for d, l, c in ONE], slope=92,
                   brackets=[("1", 0, 2, "RTT 1"), ("2", 2, 4, "RTT 2")])
assert ST == [0, 1, 2, 3]                               # each message leaves when the previous one arrives
assert w.rtt_count("np", 0) == 2                        # one object, non-persistent: two RTTs

# ---------------------------------------------------------------- the three modes for a page with 2 images
N1 = 2
C1 = {m: w.rtt_count(m, N1) for m in ("np", "p", "pipe")}
assert C1 == {"np": 6, "p": 4, "pipe": 3}
assert C1["np"] == 2 * (N1 + 1) and C1["p"] == N1 + 2
S1 = {m: w.segments(m, 1, 0, 0, N1) for m in C1}
ROWS1 = [("np", "Non-persistent", S1["np"]), ("p", "Persistent", S1["p"]), ("pipe", "Persistent + pipelining", S1["pipe"])]
BARS1 = w.timebars("b", ROWS1, unit="RTT", gap=40)
# segment indices: np = (conn, req, tx) x 3 objects; p = conn + (req, tx) x 3; pipe = conn, req, tx0, req, tx1, tx2
assert [k for k, _ in S1["np"]][:3] == ["conn", "req", "tx"] and [k for k, _ in S1["pipe"]][:4] == ["conn", "req", "tx", "req"]

# ---------------------------------------------------------------- exam-style: 8 images, RTT 30 ms
N, RTT = 8, 30
SQ = {m: w.segments(m, RTT, 0, 0, N) for m in ("np", "p", "pipe")}
T = {m: w.total(s) for m, s in SQ.items()}
assert (T["np"], T["p"], T["pipe"]) == (540, 300, 90)
assert w.rtt_count("np", N) == 18 and w.rtt_count("pipe", N) == 3
DIFF = T["np"] - T["pipe"]
assert DIFF == 450
WRONG = {
    "b": 2 * N * RTT - T["pipe"],                     # forgot the base page: 16 RTT for non-persistent
    "c": T["np"] - T["p"],                            # compared with persistent without pipelining
    "d": T["np"] - 2 * RTT,                           # pipelining without the connection RTT
}
assert WRONG == {"b": 390, "c": 240, "d": 480}
OPTV = {"a": DIFF, **WRONG}
assert len(set(OPTV.values())) == 4 and [k for k, v in OPTV.items() if v == DIFF] == ["a"]
OPTS = [(k, w.ltr(f"{v} ms")) for k, v in OPTV.items()]
BARSQ = w.timebars("q", [("np", "Non-persistent", SQ["np"]), ("pipe", "Persistent + pipelining", SQ["pipe"])],
                   gap=30, seg_text=False)

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נספור כמה סבבי RTT דרושים כדי לטעון דף עם תמונות."),
    P("נשווה שלוש דרכים: חיבור חדש לכל אובייקט, חיבור קבוע, וחיבור קבוע עם pipelining."),
    P("ובסוף נפתור שאלה בסגנון מבחן.", hold=0.4),
], stage='<div class="kicker">A02 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>חיבורים וספירת RTT</h1>'
         '<p>לספור כמה סבבי RTT דרושים לטעינת דף עם N אובייקטים ב-non-persistent, ב-persistent וב-pipelining.</p>',
   layout="title")

rtt = Scene("rtt", "אובייקט אחד, שני סבבים", [
    P("RTT הוא זמן הלוך ושוב: מהרגע שהלקוח שולח משהו, עד שהתשובה חוזרת אליו.", do=show("o-c1")),
    P("ברמה הזו מזניחים את זמן השידור, וסופרים רק סבבים כאלה."),
    P("נביא אובייקט אחד מהשרת. HTTP רץ מעל TCP, אז קודם צריך לפתוח חיבור.", do=show("o")),
    P("הלקוח שולח SYN, והשרת עונה SYN+ACK. זה הסבב הראשון.", do=show("o-m0", "o-m1", "o-b-1")),
    P("עכשיו הלקוח שולח את בקשת ה-GET, יחד עם האישור האחרון של לחיצת היד.", do=show("o-m2")),
    P("והשרת מחזיר את הקובץ. זה הסבב השני.", do=show("o-m3", "o-b-2")),
    P("אז אובייקט אחד בחיבור חדש עולה **שני** סבבים: אחד לחיבור, ואחד לבקשה ולתשובה.", do=show("o-c2"), hold=0.3),
], stage=LAD,
   panel=st.card("o-c1", "plain", "RTT: הלוך ושוב בין הלקוח לשרת")
         + st.card("o-c2", "rule", "🔑 חיבור חדש + אובייקט = <b>2</b> RTT"))

modes = Scene("modes", "שלוש דרכים", [
    P("עכשיו דף: קובץ HTML, ובו הפניה לשתי תמונות. כמה אובייקטים יש כאן?"),
    P("שלושה: הדף עצמו, ועוד שתי התמונות. אל תשכחו את אובייקט הבסיס.", do=show("m-c1")),
    P("Non-persistent, כמו ב-HTTP 1.0: חיבור חדש לכל אובייקט.", do=show("b-np-t", *w.seg_ids("b", "np", S1["np"], 0, 3))),
    P("כל אובייקט עולה שני סבבים, אז שלושה אובייקטים הם שישה סבבים.",
      do=show(*w.seg_ids("b", "np", S1["np"], 3), "b-np-tot")),
    P("Persistent, כמו ב-HTTP/1.1: פותחים חיבור פעם אחת, והוא נשאר פתוח.", do=show("b-p-t", "b-p-s0")),
    P("ואז כל אובייקט עולה סבב אחד, בזה אחר זה. אחד ועוד שלושה: ארבעה סבבים.",
      do=show(*w.seg_ids("b", "p", S1["p"], 1), "b-p-tot")),
    P("ועם pipelining: החיבור, ואז הדף. רק אחרי שהדף הגיע יודעים אילו תמונות לבקש.",
      do=show("b-pipe-t", *w.seg_ids("b", "pipe", S1["pipe"], 0, 3))),
    P("ואת כל הבקשות לתמונות שולחים ברצף, בלי לחכות. לכולן יחד, סבב אחד. סך הכול שלושה.",
      do=show(*w.seg_ids("b", "pipe", S1["pipe"], 3), "b-pipe-tot")),
    P("והנוסחאות לדף עם $N$ תמונות: פעמיים $N+1$, אחר כך $N+2$, ושלוש קבוע.", do=show("m-f"),
      say="והנוסחאות לדף עם אֶן תמונות: פעמיים, אֶן ועוד אחת בסוגריים. אחר כך אֶן ועוד שתיים, ושלוש קבוע."),
    P("שימו לב שעם pipelining מספר הסבבים לא תלוי במספר התמונות.", do=show("m-c2"), hold=0.3),
], stage=w.stack(BARS1, w.table("m-f", ["מצב", "סבבי RTT"], [
    [w.ltr("Non-persistent"), "$2(N+1)$"], [w.ltr("Persistent"), "$1+(N+1)$"], [w.ltr("Pipelining"), "$1+1+1=3$"]],
    cls="sm"), gap=18),
   panel=st.card("m-c1", "rule", "🔑 $N$ תמונות = $N+1$ אובייקטים")
         + '<div class="card plain">' + '<span class="ap-c-conn">■</span> חיבור &nbsp; <span class="ap-c-req">■</span> בקשה</div>'
         + st.card("m-c2", "ex", "עם " + w.ltr("pipelining") + ": תמיד 3, לכל $N$"))

traps = Scene("traps", "איפה טועים", [
    P("שתי טעויות חוזרות בשאלות כאלה.", do=show("t-1")),
    P("הראשונה: לספור רק את התמונות ולשכוח את הדף עצמו. הוא אובייקט, והוא תמיד מגיע ראשון."),
    P("השנייה: לשכוח את פתיחת החיבור. גם ב-persistent משלמים עליה סבב אחד, פעם אחת.", do=show("t-2")),
    P("ולכן בספירה, רושמים קודם כמה חיבורים נפתחים, ורק אחר כך כמה בקשות עוברות על כל אחד.", do=show("t-3"), hold=0.3),
], stage=w.stack(w.row("t-1", "⚠️ לשכוח את קובץ ה-" + w.ltr("HTML")),
                 w.row("t-2", "⚠️ לשכוח את סבב פתיחת החיבור"),
                 w.row("t-3", "✍️ קודם חיבורים, אחר כך בקשות"), gap=46),
   panel=st.card("t-c1", "ex", w.ltr("Persistent") + ": חיבור <b>אחד</b>, הרבה אובייקטים"))
traps.phrases[2].do += show("t-c1")

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: דף HTML עם 8 תמונות מאותו שרת. ה-RTT הוא 30 מילישניות.",
      say="שאלה בסגנון מבחן: דף אֵייץ' טִי אֶם אֶל עם שמונה תמונות מאותו שרת. האַר טִי טִי הוא שלושים מילישניות."),
    P("מזניחים זמן שידור. בכמה מילישניות pipelining מהיר יותר מ-non-persistent?"),
    P("קודם האובייקטים: שמונה תמונות ועוד הדף, תשעה.", do=show("x-1")),
    P("Non-persistent: פעמיים תשעה, 18 סבבים. כפול 30, זה 540 מילישניות.", do=show("x-2", "q-np-t", *w.seg_ids("q", "np", SQ["np"]), "q-np-tot"),
      say="נוֹן פֶּרְסִיסְטֶנְט: פעמיים תשעה, שמונה עשר סבבים. כפול שלושים, זה חמש מאות וארבעים מילישניות."),
    P("Pipelining: שלושה סבבים, 90 מילישניות.", do=show("x-3", "q-pipe-t", *w.seg_ids("q", "pipe", SQ["pipe"]), "q-pipe-tot"),
      say="פַּייפְּלַיינִינְג: שלושה סבבים, תשעים מילישניות."),
    P("ההפרש: 540 פחות 90, כלומר 450 מילישניות.", do=show("x-4", "q-ok-a"),
      say="ההפרש: חמש מאות וארבעים פחות תשעים, כלומר ארבע מאות וחמישים מילישניות."),
    P("390 יוצא למי ששכח את הדף: שש עשרה סבבים במקום שמונה עשר.", do=show("q-x-b", "q-n-b"),
      say="שלוש מאות ותשעים יוצא למי ששכח את הדף: שישה עשר סבבים במקום שמונה עשר."),
    P("240 הוא ההפרש מ-persistent **בלי** pipelining, עשרה סבבים. זה לא מה שנשאל.", do=show("q-x-c", "q-n-c"),
      say="מאתיים וארבעים הוא ההפרש מפֶּרְסִיסְטֶנְט בלי פַּייפְּלַיינִינְג, עשרה סבבים. זה לא מה שנשאל."),
    P("ו-480 שוכח שגם pipelining צריך קודם לפתוח חיבור.", do=show("q-x-d", "q-n-d"), hold=0.5,
      say="וארבע מאות ושמונים שוכח שגם פַּייפְּלַיינִינְג צריך קודם לפתוח חיבור."),
], stage=w.stack(BARSQ,
                 w.big("x-1", r"N + 1 = 9", cls="xs"),
                 w.big("x-2", r"2 \cdot 9 \cdot 30 = 540\ \text{ms}", cls="xs"),
                 w.big("x-3", r"3 \cdot 30 = 90\ \text{ms}", cls="xs"),
                 w.big("x-4", r"540 - 90 = 450\ \text{ms}", cls="xs"), gap=10),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>דף ' + w.ltr("HTML")
         + ' ו-8 תמונות מאותו שרת, $\\text{RTT} = 30\\ \\text{ms}$, מזניחים שידור. בכמה ' + w.ltr("pipelining")
         + ' מהיר יותר מ-' + w.ltr("non-persistent") + '?</div>'
         + st.options("q", OPTS, notes={"b": "בלי הדף", "c": "השוואה אחרת", "d": "בלי חיבור"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: דף עם $N$ תמונות הוא $N+1$ אובייקטים.", do=show("r-1"),
      say="לסיכום: דף עם אֶן תמונות הוא אֶן ועוד אחת אובייקטים."),
    P("Non-persistent: שני סבבים לכל אובייקט. Persistent: סבב לחיבור, ועוד סבב לכל אובייקט.", do=show("r-2")),
    P("ו-pipelining: חיבור, דף, וסבב אחד לכל התמונות. שלושה.", do=show("r-3")),
    P("ואל תשכחו את הדף ואת פתיחת החיבור. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.table("r-t", ["מצב", "סבבי RTT"], [
    [w.ltr("Non-persistent"), "$2(N+1)$"], [w.ltr("Persistent"), "$N+2$"], [w.ltr("Pipelining"), "$3$"]], hidden=False)),
   panel=st.card("r-1", "rule", "🔑 $N+1$ אובייקטים")
         + st.card("r-2", "ex", "2 לכל אובייקט / 1 + 1 לכל אובייקט")
         + st.card("r-3", "ex", w.ltr("pipelining") + ": 3")
         + st.card("r-4", "trap", "⚠️ הדף + פתיחת החיבור"))

VIDEO = Video("A02", "app", "חיבורים וספירת RTT", [title, rtt, modes, traps, exam, recap], bank={})
