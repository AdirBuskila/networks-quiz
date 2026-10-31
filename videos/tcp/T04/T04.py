# -*- coding: utf-8 -*-
"""T04 · בקרת זרימה: חלון המקבל rwnd — video script (build: tools/video/vid.py T04).

Source: courses/tcp/C04.js (lesson + goal: flow control (rwnd, protects the receiver) vs congestion control (cwnd,
protects the network); the sender may have min(cwnd, rwnd) unacknowledged; rate ~ cwnd * MSS * 8 / RTT).
Exam anchor: 25A-C-Q16 (how the window size affects TCP performance), key a; no guided quiz uses it.
Avoided on purpose: the C04 quiz numbers (rwnd 8 / cwnd 20, rwnd 30 / cwnd 12, 20 x 1460 B / 100 ms) and the lesson's
examples (the same); 23A-B-Q19 and 23A-B-Q20 (UDP flow control, the role of congestion control) are content twins of
the quiz questions C04-Q5 / C04-Q6, and 23A-A-Q20 is in the C08 boss, so none of them is shown.
Every window and rate is asserted below with exact fractions.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- numbers (verified)
E1 = dict(cwnd=9, rwnd=14)
E2 = dict(cwnd=32, rwnd=5)
assert min(E1.values()) == 9 and min(E2.values()) == 5
BUF, USED = 24, 18
RWND = BUF - USED
assert RWND == 6
READ = 10
assert BUF - (USED - READ) == 16                      # the application read 10: rwnd grows to 16
CW, MSS, RTT = 10, 1500, F(40, 1000)
R1 = w.rate_bps(CW, MSS, RTT)
assert R1 == 3 * 10**6                                # 3 Mbps
assert w.rate_bps(2 * CW, MSS, RTT) == 2 * R1         # double window, double rate
EFF = min(CW, RWND)
R2 = w.rate_bps(EFF, MSS, RTT)
assert EFF == 6 and R2 == F(18, 10) * 10**6           # limited by the receiver: 1.8 Mbps
assert w.fmt(R1 / 10**6) == "3" and w.fmt(R2 / 10**6) == "1.8"

B1 = w.bars("b1", [("cwnd", "cwnd", E1["cwnd"]), ("rwnd", "rwnd", E1["rwnd"])], w=900, vmax=32)
B2 = w.bars("b2", [("cwnd", "cwnd", E2["cwnd"]), ("rwnd", "rwnd", E2["rwnd"])], w=900, vmax=32)
BUFSVG = w.cells("bf", BUF, USED)

# exam 25A-C-Q16
Q = BANK["25A-C-Q16"]
assert Q["correctId"] == "a"
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נכיר את בקרת הזרימה של TCP, ואת החלון של המקבל."),
    P("נבדיל בינה לבין בקרת עומס, נחשב כמה השולח רשאי לשלוח, ונעריך את הקצב."),
    P("ובסוף נפתור שאלה ממבחן על גודל החלון.", hold=0.4),
], stage='<div class="kicker">T04 · TCP: ACK, חלון ובקרת עומס</div><h1>בקרת זרימה: חלון המקבל rwnd</h1>'
         '<p>להבדיל בין בקרת זרימה לבקרת עומס, ולחשב כמה השולח רשאי לשלוח.</p>', layout="title")

idea = Scene("idea", "שני מנגנונים", [
    P("שני מנגנונים שונים מגבילים את השולח ב-TCP, ולכל אחד חלון משלו.", do=show("t")),
    P("הראשון הוא **בקרת זרימה**. היא מגינה על **המקבל**, שלא יוצף בנתונים.", do=show("t-0"),
      say="הראשון הוא בקרת זרימה. היא מגינה על המקבל, שלא יוצף בנתונים."),
    P("החלון שלה הוא $rwnd$: כמה מקום פנוי יש במאגר של המקבל. המקבל מפרסם אותו בכל ACK.", do=show("i-c1"),
      say="החלון שלה הוא חלון המקבל: כמה מקום פנוי יש במאגר של המקבל. המקבל מפרסם אותו בכל אַק."),
    P("השני הוא **בקרת עומס**. היא מגינה על **הרשת**: על הנתבים שבדרך.", do=show("t-1"),
      say="השני הוא בקרת עומס. היא מגינה על הרשת: על הנתבים שבדרך."),
    P("החלון שלה הוא $cwnd$, והשולח קובע אותו בעצמו, לפי האובדן שהוא רואה.", do=show("i-c2"),
      say="החלון שלה הוא חלון העומס, והשולח קובע אותו בעצמו, לפי האובדן שהוא רואה."),
    P("המלכודת: בקרת זרימה **לא** נועדה להגן על נתבים. זה התפקיד של בקרת העומס.", do=show("i-c3"), hold=0.3),
], stage=w.table("t", ["מנגנון", "מגן על", "חלון"], [
    ["בקרת זרימה", "המקבל", "$rwnd$"], ["בקרת עומס", "הרשת (נתבים)", "$cwnd$"]], ids=["t-0", "t-1"]),
   panel=st.card("i-c1", "ex", "$rwnd$: המקום הפנוי במאגר המקבל")
         + st.card("i-c2", "ex", "$cwnd$: השולח קובע לפי אובדן")
         + st.card("i-c3", "trap", "⚠️ בקרת זרימה לא מגינה על נתבים"))

mins = Scene("min", "הקטן מבין השניים", [
    P("אז כמה מותר לשלוח? השולח רשאי להחזיק **באוויר**, כלומר מה שנשלח ועוד לא אושר, את המינימום של השניים.",
      do=show("m-c1"),
      say="אז כמה מותר לשלוח? השולח רשאי להחזיק באוויר, כלומר מה שנשלח ועוד לא אושר, את המינימום של השניים."),
    P("דוגמה: $cwnd=9$ סגמנטים, ו-$rwnd=14$.", do=show("b1", "b1-b-cwnd", "b1-b-rwnd"),
      say="דוגמה: חלון העומס תשעה סגמנטים, וחלון המקבל ארבעה עשר."),
    P("המקבל יכול לקלוט ארבעה עשר, אבל הרשת מרשה רק תשעה. אז שולחים תשעה.", do=show("b1-hi-cwnd", "m-1")),
    P("ועכשיו הפוך: $cwnd=32$, אבל $rwnd=5$.", do=show("b2", "b2-b-cwnd", "b2-b-rwnd"),
      say="ועכשיו הפוך: חלון העומס שלושים ושניים, אבל חלון המקבל חמישה."),
    P("הרשת הייתה מרשה הרבה, אבל למקבל יש מקום רק לחמישה. אז שולחים חמישה.", do=show("b2-hi-rwnd", "m-2")),
    P("לא מחברים את החלונות, ולא לוקחים את הגדול. תמיד **הקטן** מבין השניים.", do=show("m-c2"), hold=0.3),
], stage=w.stack(B1, w.row("m-1", w.ltr("min(9, 14) = 9"), cls="ltr"),
                 B2, w.row("m-2", w.ltr("min(32, 5) = 5"), cls="ltr"), gap=8),
   panel=st.card("m-c1", "rule", "🔑 באוויר לכל היותר: $\\min(cwnd, rwnd)$")
         + st.card("m-c2", "trap", "⚠️ לא סכום ולא הגדול: הקטן"))

buf = Scene("buffer", "מאיפה בא rwnd", [
    P("ומאיפה מגיע $rwnd$? מהמאגר של המקבל.", do=show("bf"),
      say="ומאיפה מגיע חלון המקבל? מהמאגר של המקבל."),
    P("נניח שבמאגר יש מקום לעשרים וארבעה סגמנטים, ושמונה עשר מהם עוד מחכים שהאפליקציה תקרא אותם.", do=show("u-1")),
    P("נשאר מקום לשישה בלבד. לכן המקבל מפרסם $rwnd=6$.", do=show("bf-free", "u-2"),
      say="נשאר מקום לשישה בלבד. לכן המקבל מפרסם חלון מקבל שווה שש."),
    P("אם השולח היה שולח יותר, הסגמנטים העודפים לא היו נכנסים, והיו נזרקים.", do=show("u-c1")),
    P("ועכשיו האפליקציה קוראת עשרה סגמנטים מהמאגר. נשארים שמונה, והמקום הפנוי גדל לשישה עשר.", do=show("u-3")),
    P("כלומר $rwnd$ משתנה כל הזמן, לפי הקצב שבו האפליקציה מרוקנת את המאגר.", do=show("u-c2"), hold=0.3,
      say="כלומר חלון המקבל משתנה כל הזמן, לפי הקצב שבו האפליקציה מרוקנת את המאגר."),
], stage=w.stack(BUFSVG, w.row("u-1", "תפוס: 18 מתוך 24"),
                 w.row("u-2", w.ltr("rwnd = 24 − 18 = 6"), cls="ltr"),
                 w.row("u-3", w.ltr("read 10 → rwnd = 24 − 8 = 16"), cls="ltr"), gap=24),
   panel=st.card("u-c1", "ex", "שולחים יותר מ-$rwnd$: אין מקום, הנתונים נזרקים")
         + st.card("u-c2", "rule", "🔑 $rwnd$ = המקום הפנוי, ומשתנה כל הזמן"))

rate = Scene("rate", "קצב משוער", [
    P("בכל סבב, כלומר בכל RTT, השולח מוציא חלון שלם ומחכה לאישורים.",
      say="בכל סבב, כלומר בכל אַר טִי טִי, השולח מוציא חלון שלם ומחכה לאישורים."),
    P("לכן הקצב המשוער הוא החלון כפול גודל הסגמנט, חלקי ה-RTT.", do=show("r-1"),
      say="לכן הקצב המשוער הוא החלון כפול גודל הסגמנט, חלקי האַר טִי טִי."),
    P("דוגמה: $cwnd=10$, סגמנט של 1500 בתים, ו-RTT של 40 מילישניות.", do=show("r-2"),
      say="דוגמה: חלון העומס עשרה, סגמנט של אלף וחמש מאות בתים, ואַר טִי טִי של ארבעים מילישניות."),
    P("עשרה כפול 1500 כפול שמונה, כדי לעבור לביטים, הם 120,000 ביט.", do=show("r-3"),
      say="עשרה כפול אלף וחמש מאות כפול שמונה, כדי לעבור לביטים, הם מאה ועשרים אלף ביט."),
    P("חלקי 0.04 שנייה: שלושה מיליון ביט בשנייה, כלומר 3 Mbps.", do=show("r-4"),
      say="חלקי אפס נקודה אפס ארבע שנייה: שלושה מיליון ביט בשנייה, כלומר שלושה מגה ביט לשנייה."),
    P("חלון כפול נותן קצב כפול: באותו RTT יוצאים פי שניים נתונים.", do=show("r-c1"),
      say="חלון כפול נותן קצב כפול: באותו אַר טִי טִי יוצאים פי שניים נתונים."),
    P("אבל אם המקבל מפרסם $rwnd=6$, החלון בפועל הוא שישה, והקצב יורד ל-1.8 Mbps.", do=show("r-5", "r-c2"),
      say="אבל אם המקבל מפרסם חלון מקבל שווה שש, החלון בפועל הוא שישה, והקצב יורד לאחת נקודה שמונה מגה ביט לשנייה."),
], stage=w.stack(w.big("r-1", r"\frac{W \cdot MSS \cdot 8}{RTT}", cls="sm"),
                 w.big("r-2", r"W = 10, \;\; MSS = 1500\,\text{B}, \;\; RTT = 0.04\,\text{s}", cls="xs"),
                 w.big("r-3", r"10 \cdot 1500 \cdot 8 = 120000\ \text{bit}", cls="xs"),
                 w.big("r-4", r"\frac{120000}{0.04} = 3 \cdot 10^{6}\ \text{bit/s}", cls="xs"),
                 w.big("r-5", r"W = \min(10, 6) = 6 \;\Rightarrow\; 1.8\ \text{Mbps}", cls="xs"), gap=22),
   panel=st.card("r-c1", "rule", "🔑 חלון גדול יותר: יותר נתונים לפני אישור, קצב גבוה יותר")
         + st.card("r-c2", "trap", "⚠️ בנוסחה שמים את החלון <b>בפועל</b>: $\\min(cwnd, rwnd)$"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: כיצד גודל החלון משפיע על ביצועי העברת הנתונים ב-TCP?"),
    P("החלון הוא בדיוק מה שראינו: כמה נתונים מותר לשלוח לפני שמגיע אישור מהנמען.", do=show("q-ok-a")),
    P("ולכן הוא קובע את הקצב: חלון כפול, נתונים כפולים בכל RTT.",
      say="ולכן הוא קובע את הקצב: חלון כפול, נתונים כפולים בכל אַר טִי טִי."),
    P("מספר הנתבים בדרך נקבע בניתוב, בשכבת הרשת. לחלון של TCP אין שום קשר אליו.", do=show("q-x-b", "q-n-b")),
    P("הצפנה היא לא תפקיד של החלון, וגם לא של TCP עצמו. החלון רק סופר כמה מותר לשלוח.", do=show("q-x-c", "q-n-c")),
    P("והחלון שייך לחיבור **אחד**. הוא לא מגביל כמה חיבורים אפשר לפתוח לרשת.", do=show("q-x-d", "q-n-d"),
      hold=0.5),
], stage=w.stack(w.big("x-0", r"\text{rate} \approx \frac{W \cdot MSS \cdot 8}{RTT}", hidden=False, cls="sm"),
                 st.card("x-1", "rule", "🔑 $W$ = כמה מותר לשלוח <b>לפני</b> אישור"), gap=40),
   panel=f'<div class="qstem"><span class="qid">{Q["id"]}</span>{Q["question"]}</div>'
         + st.options("q", OPTS, notes={"b": "ניתוב", "c": "לא הצפנה", "d": "חיבור אחד"}))
exam.phrases[1].do += show("x-1")

recap = Scene("recap", "סיכום", [
    P("לסיכום: בקרת זרימה מגינה על המקבל, עם $rwnd$: המקום הפנוי במאגר שלו.", do=show("s-1"),
      say="לסיכום: בקרת זרימה מגינה על המקבל, עם חלון המקבל: המקום הפנוי במאגר שלו."),
    P("בקרת עומס מגינה על הרשת, עם $cwnd$ שהשולח קובע.", do=show("s-2"),
      say="בקרת עומס מגינה על הרשת, עם חלון העומס שהשולח קובע."),
    P("שולחים לכל היותר את הקטן מבין השניים.", do=show("s-3")),
    P("והקצב הוא בערך החלון כפול גודל הסגמנט כפול שמונה, חלקי ה-RTT. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6,
      say="והקצב הוא בערך החלון כפול גודל הסגמנט כפול שמונה, חלקי האַר טִי טִי. נתראה ברמה הבאה."),
], stage=w.stack(w.big("s-0", r"\min(cwnd, rwnd)", hidden=False)),
   panel=st.card("s-1", "rule", "🔑 $rwnd$: מגן על המקבל")
         + st.card("s-2", "rule", "🔑 $cwnd$: מגן על הרשת")
         + st.card("s-3", "rule", "🔑 באוויר: $\\min(cwnd, rwnd)$")
         + st.card("s-4", "ex", "קצב $\\approx W \\cdot MSS \\cdot 8 / RTT$"))

VIDEO = Video("T04", "tcp", "בקרת זרימה: חלון המקבל rwnd", [title, idea, mins, buf, rate, exam, recap],
              bank={"25A-C-Q16": "a"})
