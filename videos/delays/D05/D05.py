# -*- coding: utf-8 -*-
"""D05 · עוצמת תעבורה והתור — video script (build: tools/video/vid.py D05).

Source: courses/delays/C05.js (lesson + goal: traffic intensity La/R and what it says about the queue).
Exam part: an original question "בסגנון מבחן" (bank={}). The free ρ question of the bank, 24A-B-Q2 ("what lowers
the load"), was not used: its options overlap (limiting connections also lowers the load; TCP's congestion control
does throttle senders), so a clean elimination of every wrong option is not possible. 24A-A-Q1 and 24A-B-Q1 are quiz
items (C07, C05), so their data (500,000/h, 5000 bit, 1 Gbps; 300,000/h, 1500 Bytes, 20 Mbps) are avoided too.
Avoided on purpose: the C05 quiz numbers (6,000 per minute at 1 Mbps, 720,000 per hour on 100 Mbps, ρ = 2 with
10,000 bit at 5 Mbps, the list 0.02/0.1/0.5/0.95) and 25A-C-Q5 is not solved (the buffer scene shows the physics of
ρ > 1, computed below, not that question).
All values are exact fractions asserted below; the buffer is w_delays.buffer_frames.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_delays as w

# ---------------------------------------------------------------- example: 18,000 per minute, 500 Bytes, 8 Mbps
a1 = F(18000, 60)
L1 = 500 * 8
R1 = 8 * w.M
rho1 = w.rho(a1, L1, R1)
assert a1 == 300 and L1 == 4000 and a1 * L1 == F(12, 10) * w.M and rho1 == F(15, 100)

# rho > 1: 10 Mbps arrive at an 8 Mbps link, buffer of 1 MB = 8 Mbit
IN, OUT, BUF = 10 * w.M, 8 * w.M, 8 * w.M
assert w.rho(1, IN, OUT) == F(5, 4)
BUFSVG, BST = w.buffer_frames("bf", IN, OUT, BUF, [0, 2, 4, 6])
assert BST == [(0, 0), (4 * w.M, 0), (8 * w.M, 0), (8 * w.M, 4 * w.M)]   # full at 4 s; after that 2 Mbit/s dropped

# exam-style: 2,400,000 per hour, 1,000 Bytes, 16 Mbps, 800 km (a distractor)
QA, QB, QR = 2400000, 1000, 16 * w.M
qa = F(QA, 3600)
qrho = w.rho(qa, QB * 8, QR)
assert qrho == F(1, 3)
V = {"a": w.rho(qa, QB, QR), "b": qrho, "c": w.rho(F(QA, 60), QB * 8, QR), "d": w.rho(QA, QB * 8, QR)}
assert V["a"] == F(1, 24) and round(float(V["a"]), 2) == 0.04          # no ×8
assert V["c"] == 20 and V["d"] == 1200                                   # ÷60 only; no ÷3600
assert round(float(qrho), 2) == 0.33
OPTS = [("a", "$\\rho \\approx 0.04$: כמעט אין עומס"),
        ("b", "$\\rho \\approx 0.33$: עומס נמוך עד בינוני, התור קצר"),
        ("c", "$\\rho = 20$: התור גדל ללא גבול"),
        ("d", "$\\rho = 1200$: התור גדל ללא גבול")]
GAUGE = w.rho_gauge("g", [("e", rho1, "0.15"), ("x", F(5, 4), "1.25"), ("q", qrho, "0.33")])

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נחשב עוצמת תעבורה: מספר אחד שמספר מה קורה בתור של הנתב."),
    P("נראה מה קורה כשהיא קטנה, כשהיא מתקרבת לאחת, וכשהיא עוברת אותה."),
    P("ובסוף נפתור שאלה בסגנון מבחן, עם שתי המרות ונתון מיותר.", hold=0.4),
], stage='<div class="kicker">D05 · חישובי השהיה ועומס</div><h1>עוצמת תעבורה והתור</h1>'
         '<p>לחשב את עוצמת התעבורה $La/R$, ולהסיק ממנה מה קורה בתור.</p>', layout="title")

idea = Scene("idea", "מה מגיע מול מה יוצא", [
    P("לתור של נתב מגיעות חבילות בקצב $a$, חבילות לשנייה. כל חבילה היא $L$ ביטים.",
      do=show("i-1"), say="לתור של נתב מגיעות חבילות בקצב אֵיי, חבילות לשנייה. כל חבילה היא אֶל ביטים."),
    P("לכן בכל שנייה נכנסים לתור $a$ כפול $L$ ביטים.", do=show("i-2"),
      say="לכן בכל שנייה נכנסים לתור אֵיי כפול אֶל ביטים."),
    P("והקישור מוציא $R$ ביטים בשנייה. זה הקצב שבו התור מתרוקן.", do=show("i-3"),
      say="והקישור מוציא אָר ביטים בשנייה. זה הקצב שבו התור מתרוקן."),
    P("עוצמת התעבורה היא היחס ביניהם: מה שמגיע, חלקי מה שהקישור מסוגל להוציא.", do=show("i-4", "i-c1")),
    P("דוגמה: 18,000 חבילות בדקה, כל אחת 500 בתים, בקישור של 8 Mbps.", do=show("i-5"),
      say="דוגמה: שמונה עשר אלף חבילות בדקה, כל אחת חמש מאות בתים, בקישור של שמונה מגה ביט לשנייה."),
    P("לשנייה: שלוש מאות חבילות. ולביטים: ארבעת אלפים ביט לחבילה.", do=show("i-6")),
    P("מגיעים מיליון ומאתיים אלף ביט בשנייה, מתוך שמונה מיליון אפשריים. העוצמה 0.15.", do=show("i-7"),
      say="מגיעים מיליון ומאתיים אלף ביט בשנייה, מתוך שמונה מיליון אפשריים. העוצמה אפס נקודה חמש עשרה."),
    P("כלומר הקישור עסוק בערך חמישה עשר אחוז מהזמן, והתור כמעט תמיד ריק.", hold=0.3),
], stage=w.stack(w.big("i-1", r"a\ \text{packets/s},\ \ L\ \text{bit}", cls="xs"),
                 w.big("i-2", r"\text{in: } a \cdot L\ \text{bit/s}", cls="xs"),
                 w.big("i-3", r"\text{out: } R\ \text{bit/s}", cls="xs"),
                 w.big("i-4", r"\rho = \frac{a \cdot L}{R}", cls="sm"),
                 w.big("i-5", r"a = \frac{18000}{60} = 300,\ \ L = 500 \cdot 8 = 4000", cls="xs"),
                 w.big("i-6", r"a \cdot L = 1.2 \cdot 10^{6}\ \text{bit/s}", cls="xs"),
                 w.big("i-7", r"\rho = \frac{1.2 \cdot 10^{6}}{8 \cdot 10^{6}} = 0.15", cls="xs"), gap=14),
   panel=st.card("i-c1", "rule", "🔑 $\\rho$ = מה שמגיע חלקי מה שאפשר להוציא"))

zones = Scene("zones", "מה המספר אומר", [
    P("עכשיו נקרא את המספר. נשים את העוצמה על ציר."),
    P("עוצמה קטנה, כמו 0.15: הקישור פנוי רוב הזמן, ותור כמעט לא נוצר.", do=show("g-z0", "g-m-e"),
      say="עוצמה קטנה, כמו אפס נקודה חמש עשרה: הקישור פנוי רוב הזמן, ותור כמעט לא נוצר."),
    P("ככל שהעוצמה מתקרבת לאחת, חבילות מגיעות לעיתים קרובות כשהקישור עוד עסוק.", do=show("g-z1")),
    P("ואז התור מתארך, והשהיית התור עולה בחדות. וזה קורה עוד **לפני** שמגיעים לאחת.", do=show("z-c1")),
    P("ומעל אחת: בכל שנייה נכנס יותר ממה שיוצא.", do=show("g-z2", "g-m-x"), hold=0.3),
    P("למשל, עשרה מגה ביט לשנייה מגיעים לקישור של שמונה. העוצמה אחת ועשרים וחמש מאיות.", do=show("bf")),
    P("כל שנייה התור גדל בשני מגה ביט. אחרי שתי שניות יש בו ארבעה.", do=show("bf-f1")),
    P("ואם בתור יש מקום לשמונה מגה ביט, הוא מתמלא אחרי ארבע שניות.", do=hide("bf-f1") + show("bf-f2")),
    P("מאותו רגע, כל ביט עודף שמגיע נזרק: התור סופי, והקישור לא יכול לשדר מהר יותר מ-$R$.",
      do=hide("bf-f2") + show("bf-f3", "z-c2"), say="מאותו רגע, כל ביט עודף שמגיע נזרק: התור סופי, והקישור לא יכול לשדר מהר יותר מאָר."),
], stage=w.stack(GAUGE, f'<div id="bf" class="h">{BUFSVG}</div>', gap=10),
   panel=st.card("z-c1", "rule", "🔑 $\\rho$ מתקרב ל-1: השהיית התור עולה בחדות")
         + st.card("z-c2", "trap", "⚠️ $\\rho > 1$: התור גדל עד שהוא מלא, ואז חבילות נזרקות"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: לנתב מגיעות 2,400,000 חבילות בשעה, כל אחת 1,000 Bytes.",
      say="שאלה בסגנון מבחן: לנתב מגיעות שני מיליון וארבע מאות אלף חבילות בשעה, כל אחת אלף בַּייטִים."),
    P("הקישור 16 Mbps, והקו באורך 800 ק\"מ. מה עוצמת התעבורה, ומה היא אומרת?",
      say="הקישור שישה עשר מגה ביט לשנייה, והקו באורך שמונה מאות קילומטר. מה עוצמת התעבורה, ומה היא אומרת?"),
    P("קודם כול: האורך של הקו לא נמצא בנוסחה. זה נתון מיותר.", do=show("x-0")),
    P("קצב לשנייה: שני מיליון וארבע מאות אלף חלקי 3600. בערך 667 חבילות.", do=show("x-1"),
      say="קצב לשנייה: שני מיליון וארבע מאות אלף, חלקי שלושת אלפים ושש מאות. בערך שש מאות שישים ושבע חבילות."),
    P("גודל: אלף בתים הם שמונת אלפים ביט.", do=show("x-2")),
    P("ומציבים: העוצמה יוצאת שליש בדיוק, בערך 0.33. עומס נמוך עד בינוני, והתור קצר.", do=show("x-3", "q-ok-b", "g2-m-q"),
      say="ומציבים: העוצמה יוצאת שליש בדיוק, בערך אפס נקודה שלושים ושלוש. עומס נמוך עד בינוני, והתור קצר."),
    P("0.04 מתקבל בלי הכפלה בשמונה: עבדו בבתים.", do=show("q-x-a", "q-n-a"),
      say="אפס נקודה אפס ארבע מתקבל בלי הכפלה בשמונה: עבדו בבתים."),
    P("20 מתקבל כשמחלקים רק ב-60: זה קצב לדקה, לא לשנייה.", do=show("q-x-c", "q-n-c"),
      say="עשרים מתקבל כשמחלקים רק בשישים: זה קצב לדקה, לא לשנייה."),
    P("ו-1200 מתקבל בלי לחלק בכלל. עוצמה כזו הייתה אומרת שהתור קורס, אבל היא פשוט שגיאת המרה.",
      do=show("q-x-d", "q-n-d"), hold=0.5,
      say="ואלף ומאתיים מתקבל בלי לחלק בכלל. עוצמה כזו הייתה אומרת שהתור קורס, אבל היא פשוט שגיאת המרה."),
], stage=w.stack(w.big("x-0", r"800\ \text{km}:\ \text{not used}", cls="xs"),
                 w.big("x-1", r"a = \frac{2400000}{3600} \approx 666.7\ \text{packets/s}", cls="xs"),
                 w.big("x-2", r"L = 1000 \cdot 8 = 8000\ \text{bit}", cls="xs"),
                 w.big("x-3", r"\rho = \frac{666.7 \cdot 8000}{16 \cdot 10^{6}} = \frac{1}{3} \approx 0.33", cls="xs"),
                 w.rho_gauge("g2", [("q", qrho, "0.33")], w=900, h=200, zones_hidden=False), gap=16),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>מגיעות 2,400,000 חבילות בשעה, כל אחת 1,000 Bytes. '
         'הקישור 16 Mbps, אורך הקו 800 ק"מ. מה עוצמת התעבורה?</div>'
         + st.options("q", OPTS, notes={"a": "בלי " + w.ltr("×8"), "c": "רק " + w.ltr("÷60"), "d": "בלי " + w.ltr("÷3600")}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: עוצמת התעבורה היא $a$ כפול $L$, חלקי $R$. מה שמגיע, חלקי מה שאפשר להוציא.", do=show("s-1"),
      say="לסיכום: עוצמת התעבורה היא אֵיי כפול אֶל, חלקי אָר. מה שמגיע, חלקי מה שאפשר להוציא."),
    P("$a$ בחבילות לשנייה, $L$ בביטים, $R$ בביטים לשנייה. המרחק לא נכנס.", do=show("s-2"),
      say="אֵיי בחבילות לשנייה, אֶל בביטים, אָר בביטים לשנייה. המרחק לא נכנס."),
    P("קרוב לאפס: תור כמעט ריק. מתקרב לאחת: השהיית התור קופצת.", do=show("s-3")),
    P("ומעל אחת: התור גדל עד שהוא מלא, וחבילות נזרקות. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6),
], stage=w.stack(w.big("s-f", r"\rho = \frac{a \cdot L}{R}", hidden=False)),
   panel=st.card("s-1", "rule", "🔑 $\\rho = aL/R$")
         + st.card("s-2", "trap", "⚠️ לשעה ÷3600, Bytes ×8, בלי מרחק")
         + st.card("s-3", "ex", "$\\rho \\to 1$: השהיית התור קופצת")
         + st.card("s-4", "trap", "⚠️ $\\rho > 1$: התור מתמלא, חבילות נזרקות"))

VIDEO = Video("D05", "delays", "עוצמת תעבורה והתור", [title, idea, zones, exam, recap], bank={})
