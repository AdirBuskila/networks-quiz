# -*- coding: utf-8 -*-
"""A03 · זמן טעינת דף עם זמן שידור — video script (build: tools/video/vid.py A03).

Source: courses/app/C03.js (lesson + goal: total load time with the transmission time t = 8 * bytes / rate of every
object; non-persistent 2RTT+t per object, persistent RTT then RTT+t per object, pipelining RTT, RTT+t0, then one
RTT for all images plus their transmission times; 1 KB = 1000 bytes).
Exam part: an original question "בסגנון מבחן" (bank={}): persistent without pipelining, RTT 120 ms, 50 Mbps, a 25 KB
page and 4 images of 125 KB. The only bank item of this shape, 22S-A-Q5, is in the C09 boss.
Avoided on purpose: the C03 quiz and lesson numbers (RTT 200 ms, 100 Mbps, 50 KB + 250 KB with 3 or 5 images; RTT
100 ms with 5 images) and the C03-Q4 symbolic form as a question. Worked example: RTT 80 ms, 40 Mbps, 20 KB + 2 x 100 KB.
Every time comes from w_app.tx_ms() / segments(), checked against the course checker's t_np / t_p / t_pipe.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_app as w

# ---------------------------------------------------------------- worked example
RTT, RATE, B0, B1, N = 80, 40, 20_000, 100_000, 2
T0, T1 = w.tx_ms(B0, RATE), w.tx_ms(B1, RATE)
assert (T0, T1) == (4, 20)
S = {m: w.segments(m, RTT, T0, T1, N) for m in ("np", "p", "pipe")}
TOT = {m: w.total(s) for m, s in S.items()}
assert TOT == {"np": 524, "p": 364, "pipe": 284}
assert TOT["np"] - TOT["p"] == N * RTT == 160               # one RTT saved per object after the first
BARS = w.timebars("b", [("np", "Non-persistent", S["np"]), ("p", "Persistent", S["p"]),
                        ("pipe", "Persistent + pipelining", S["pipe"])], gap=36)
# segment layout: np = (conn, req, tx) x 3; p = conn, (req, tx) x 3; pipe = conn, req, tx0, req, tx1, tx2
assert [k for k, _ in S["p"]] == ["conn", "req", "tx", "req", "tx", "req", "tx"]
assert [k for k, _ in S["pipe"]] == ["conn", "req", "tx", "req", "tx", "tx"]

# ---------------------------------------------------------------- exam-style
QR, QRATE, QB0, QB1, QN = 120, 50, 25_000, 125_000, 4
Q0, Q1 = w.tx_ms(QB0, QRATE), w.tx_ms(QB1, QRATE)
assert (Q0, Q1) == (4, 20)
QS = w.segments("p", QR, Q0, Q1, QN)
ANS = w.total(QS)
assert ANS == QR + (QR + Q0) + QN * (QR + Q1) == 804
WRONG = {
    "b": w.total(w.segments("np", QR, Q0, Q1, QN)),           # non-persistent: 2RTT per object
    "c": w.total(w.segments("pipe", QR, Q0, Q1, QN)),         # pipelining
    "d": ANS - QR,                                             # forgot the connection RTT
    "e": w.total(w.segments("p", QR, Q0 / 8, Q1 / 8, QN)),    # forgot x8 (bytes taken as bits)
}
assert WRONG == {"b": 1284, "c": 444, "d": 684, "e": F(1461, 2)}
OPTV = {"a": ANS, **WRONG}
assert len(set(OPTV.values())) == 5 and [k for k, v in OPTV.items() if v == ANS] == ["a"]
OPTS = [(k, w.ltr(f"{w.fmt(v)} ms")) for k, v in OPTV.items()]
QBAR = w.timebars("q", [("p", "Persistent", QS)], gap=10)

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הקודם ספרנו רק סבבי RTT. עכשיו נוסיף את זמן השידור של כל אובייקט."),
    P("נחשב זמן טעינה מלא בשלוש הדרכים, ונראה איפה מתחבאת המלכודת של ביט מול בית."),
    P("ובסוף נפתור שאלה בסגנון מבחן.", hold=0.4),
], stage='<div class="kicker">A03 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>זמן טעינת דף עם זמן שידור</h1>'
         '<p>לחשב זמן טעינה כולל של דף ב-non-persistent, ב-persistent וב-pipelining, כשמוסיפים את זמן השידור של כל אובייקט.</p>',
   layout="title")

tx = Scene("tx", "זמן שידור", [
    P("זמן השידור הוא הזמן שלוקח לדחוף את כל הביטים של האובייקט לקו: הגודל חלקי הקצב.", do=show("t-f")),
    P("הגודל נתון בבתים, והקצב בביטים לשנייה. אז קודם מכפילים בשמונה.", do=show("t-c1")),
    P("ובשאלות האלה קילובייט הוא אלף בתים.", do=show("t-c2")),
    P("הדוגמה שלנו: קו של 40 Mbps. הדף עצמו 20 KB.", do=show("t-1"),
      say="הדוגמה שלנו: קו של ארבעים מֶגָה בִּיט לשנייה. הדף עצמו עשרים קִילוֹבַּייט."),
    P("עשרים אלף בתים הם מאה ושישים אלף ביט. חלקי ארבעים מיליון, זה ארבע מילישניות.", do=show("t-2")),
    P("ויש בדף שתי תמונות של 100 KB. כל אחת: עשרים מילישניות.", do=show("t-3"),
      say="ויש בדף שתי תמונות של מאה קִילוֹבַּייט. כל אחת: עשרים מילישניות."),
    P("ה-RTT הוא 80 מילישניות. עכשיו אפשר לבנות את ציר הזמן.", do=show("t-4"),
      say="האַר טִי טִי הוא שמונים מילישניות. עכשיו אפשר לבנות את ציר הזמן."),
], stage=w.stack(w.big("t-f", r"t = \frac{8 \cdot \text{bytes}}{\text{rate}}"),
                 w.big("t-1", r"\text{rate} = 40\ \text{Mbps}", cls="xs"),
                 w.big("t-2", r"t_0 = \frac{20000 \cdot 8}{40 \cdot 10^{6}} = 4\ \text{ms}", cls="sm"),
                 w.big("t-3", r"t_1 = \frac{100000 \cdot 8}{40 \cdot 10^{6}} = 20\ \text{ms}", cls="sm"),
                 w.big("t-4", r"\text{RTT} = 80\ \text{ms}", cls="xs"), gap=20),
   panel=st.card("t-c1", "trap", "⚠️ בתים כפול 8 = ביטים")
         + st.card("t-c2", "ex", "$1\\ \\text{KB} = 1000$ בתים"))

modes = Scene("modes", "שלוש הדרכים", [
    P("Non-persistent: לכל אובייקט, חיבור, בקשה, ואז השידור שלו.", do=show("b-np-t", *w.seg_ids("b", "np", S["np"], 0, 3))),
    P("הדף: שני RTT ועוד ארבע. כל תמונה: שני RTT ועוד עשרים. סך הכול 524 מילישניות.",
      do=show(*w.seg_ids("b", "np", S["np"], 3), "b-np-tot"),
      say="הדף: פעמיים אַר טִי טִי ועוד ארבע. כל תמונה: פעמיים אַר טִי טִי ועוד עשרים. סך הכול חמש מאות עשרים וארבע מילישניות."),
    P("Persistent: RTT אחד לפתיחת החיבור, ואז לכל אובייקט RTT ועוד השידור שלו.", do=show("b-p-t", *w.seg_ids("b", "p", S["p"])),
      say="פֶּרְסִיסְטֶנְט: אַר טִי טִי אחד לפתיחת החיבור, ואז לכל אובייקט אַר טִי טִי ועוד השידור שלו."),
    P("80, ועוד 84, ועוד פעמיים 100. סך הכול 364.", do=show("b-p-tot", "m-f2"),
      say="שמונים, ועוד שמונים וארבע, ועוד פעמיים מאה. סך הכול שלוש מאות שישים וארבע."),
    P("ו-pipelining: חיבור, והדף. ואז סבב אחד לכל הבקשות, והתמונות משודרות אחת אחרי השנייה.",
      do=show("b-pipe-t", *w.seg_ids("b", "pipe", S["pipe"]))),
    P("80 ועוד 84, ועוד 80, ועוד פעמיים 20. סך הכול 284.", do=show("b-pipe-tot", "m-f3"),
      say="שמונים ועוד שמונים וארבע, ועוד שמונים, ועוד פעמיים עשרים. סך הכול מאתיים שמונים וארבע."),
    P("ושימו לב: זמני השידור זהים בכל הדרכים. רק מספר הסבבים משתנה.", do=show("m-c1")),
    P("לכן בין non-persistent ל-persistent ההפרש הוא RTT אחד לכל תמונה: 160 מילישניות.", do=show("m-c2"), hold=0.3,
      say="לכן בין נוֹן פֶּרְסִיסְטֶנְט לפֶּרְסִיסְטֶנְט ההפרש הוא אַר טִי טִי אחד לכל תמונה: מאה ושישים מילישניות."),
], stage=w.stack(BARS,
                 w.big("m-f2", r"80 + (80 + 4) + 2 (80 + 20) = 364", cls="xs"),
                 w.big("m-f3", r"80 + (80 + 4) + 80 + 2 \cdot 20 = 284", cls="xs"), gap=12),
   panel='<div class="card plain"><span class="ap-c-conn">■</span> חיבור &nbsp; <span class="ap-c-req">■</span> בקשה '
         '&nbsp; <span class="ap-c-tx">■</span> שידור</div>'
         + st.card("m-c1", "rule", "🔑 זמני השידור זהים; משתנים רק הסבבים")
         + st.card("m-c2", "ex", "$524 - 364 = 2 \\cdot 80 = 160$"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: RTT של 120 מילישניות, וקו של 50 Mbps.",
      say="שאלה בסגנון מבחן: אַר טִי טִי של מאה ועשרים מילישניות, וקו של חמישים מֶגָה בִּיט לשנייה."),
    P("דף של 25 KB, ובו ארבע תמונות של 125 KB. HTTP persistent בלי pipelining. מה זמן הטעינה?",
      say="דף של עשרים וחמישה קִילוֹבַּייט, ובו ארבע תמונות של מאה עשרים וחמישה קִילוֹבַּייט. "
          "אֵייץ' טִי טִי פִּי פֶּרְסִיסְטֶנְט בלי פַּייפְּלַיינִינְג. מה זמן הטעינה?"),
    P("שידור הדף: מאתיים אלף ביט חלקי חמישים מיליון, ארבע מילישניות.", do=show("x-1")),
    P("כל תמונה: מיליון ביט חלקי חמישים מיליון, עשרים מילישניות.", do=show("x-2")),
    P("ועכשיו הנוסחה: RTT לחיבור, RTT ועוד ארבע לדף, וארבע פעמים RTT ועוד עשרים.", do=show("q-p-t", *w.seg_ids("q", "p", QS), "x-3"),
      say="ועכשיו הנוסחה: אַר טִי טִי לחיבור, אַר טִי טִי ועוד ארבע לדף, וארבע פעמים, אַר טִי טִי ועוד עשרים בסוגריים."),
    P("120 ועוד 124 ועוד 560: בדיוק 804 מילישניות.", do=show("q-p-tot", "x-4", "q-ok-a"),
      say="מאה ועשרים, ועוד מאה עשרים וארבע, ועוד חמש מאות ושישים: בדיוק שמונה מאות וארבע מילישניות."),
    P("1284 מחשב חיבור חדש לכל אובייקט. זה non-persistent, לא מה שנשאל.", do=show("q-x-b", "q-n-b"),
      say="אלף מאתיים שמונים וארבע מחשב חיבור חדש לכל אובייקט. זה נוֹן פֶּרְסִיסְטֶנְט, לא מה שנשאל."),
    P("444 מניח pipelining: סבב אחד לכל התמונות. אבל נאמר במפורש שאין pipelining.", do=show("q-x-c", "q-n-c"),
      say="ארבע מאות ארבעים וארבע מניח פַּייפְּלַיינִינְג: סבב אחד לכל התמונות. אבל נאמר במפורש שאין פַּייפְּלַיינִינְג."),
    P("684 שכח את הסבב של פתיחת החיבור.", do=show("q-x-d", "q-n-d"),
      say="שש מאות שמונים וארבע שכח את הסבב של פתיחת החיבור."),
    P("ו-730.5 חילק בתים בקצב שנמדד בביטים, בלי להכפיל בשמונה. יצאו זמני שידור קטנים פי שמונה.", do=show("q-x-e", "q-n-e"), hold=0.5,
      say="ושבע מאות שלושים נקודה חמש חילק בתים בקצב שנמדד בביטים, בלי להכפיל בשמונה. יצאו זמני שידור קטנים פי שמונה."),
], stage=w.stack(QBAR,
                 w.big("x-1", r"t_0 = \frac{25000 \cdot 8}{50 \cdot 10^{6}} = 4\ \text{ms}", cls="xs"),
                 w.big("x-2", r"t_1 = \frac{125000 \cdot 8}{50 \cdot 10^{6}} = 20\ \text{ms}", cls="xs"),
                 w.big("x-3", r"120 + (120 + 4) + 4 (120 + 20)", cls="xs"),
                 w.big("x-4", r"= 804\ \text{ms}", cls="xs"), gap=12),
   panel='<div class="qstem ap-qsm"><span class="qid">בסגנון מבחן</span>$\\text{RTT} = 120\\ \\text{ms}$, קו של '
         + w.ltr("50 Mbps") + '. דף של ' + w.ltr("25 KB") + ' ובו 4 תמונות של ' + w.ltr("125 KB") + ', '
         + w.ltr("persistent") + ' בלי ' + w.ltr("pipelining") + '. מה זמן הטעינה?</div>'
         + '<div class="ap-osm">' + st.options("q", OPTS, notes={"b": "חיבור לכל אובייקט", "c": w.ltr("pipelining"),
                                                                "d": "בלי חיבור", "e": "בלי ×8"}) + '</div>')

recap = Scene("recap", "סיכום", [
    P("לסיכום: זמן שידור הוא שמונה כפול הגודל בבתים, חלקי הקצב.", do=show("r-1")),
    P("Non-persistent: שני RTT ועוד השידור, לכל אובייקט.", do=show("r-2"),
      say="נוֹן פֶּרְסִיסְטֶנְט: פעמיים אַר טִי טִי ועוד השידור, לכל אובייקט."),
    P("Persistent: RTT לחיבור, ואז RTT ועוד השידור לכל אובייקט, כולל הדף.", do=show("r-3"),
      say="פֶּרְסִיסְטֶנְט: אַר טִי טִי לחיבור, ואז אַר טִי טִי ועוד השידור לכל אובייקט, כולל הדף."),
    P("ו-pipelining: חיבור, דף, סבב אחד לכל הבקשות, ועוד כל זמני השידור. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.big("r-f", r"t = \frac{8 \cdot \text{bytes}}{\text{rate}}", hidden=False)),
   panel=st.card("r-1", "trap", "⚠️ בתים × 8")
         + st.card("r-2", "ex", w.ltr("NP") + ": $\\sum (2\\,\\text{RTT} + t)$")
         + st.card("r-3", "ex", w.ltr("P") + ": $\\text{RTT} + \\sum (\\text{RTT} + t)$")
         + st.card("r-4", "ex", w.ltr("Pipe") + ": $\\text{RTT} + (\\text{RTT} + t_0) + \\text{RTT} + \\sum t_1$"))

VIDEO = Video("A03", "app", "זמן טעינת דף עם זמן שידור", [title, tx, modes, exam, recap], bank={})
