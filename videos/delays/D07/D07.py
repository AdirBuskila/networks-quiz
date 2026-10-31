# -*- coding: utf-8 -*-
"""D07 · בוס: שאלות מבחן — video script (build: tools/video/vid.py D07). Boss level: three exam-style walkthroughs.

Source: courses/delays/C07.js (boss; its quiz is 24A-A-Q1, 24A-B-Q6, 25A-A-Q2, 25A-B-Q7, 25A-B-Q6, 26A-A-Q11, none
solved here). The free delays questions of the bank are already solved in D04 (25A-C-Q3) and D06 (24A-A-Q2 and its
sample twins); 24A-B-Q2 has overlapping options (see D05). So the three parts are original questions "בסגנון מבחן"
(bank={}), each mixing two skills of the course:
  1. a chain with 4 routers (5 links): store-and-forward, links vs routers, transmission counted on every link
  2. a per-minute arrival rate: ρ now, the maximum for ρ = 0.9, and the allowed increase (per minute)
  3. three connections on a shared link where the bottleneck is the client link, not the shared one: utilization
Not twins of the boss quiz: different numbers from 25A-A-Q2 / 25A-B-Q7 / 26A-A-Q11 (chains with figures),
24A-B-Q6 (20 Mbps, 1500 Bytes, ρ 0.8) and 25A-B-Q6 (4 servers, 200/80/70, bottleneck the shared link).
Every value and every distractor is asserted below with exact fractions.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_delays as w

# ---------------------------------------------------------------- part 1: 4 routers, 40 Mbps, 300 km, 1,000 Bytes, s = 3·10^8
S3 = 3 * 10**8
L1, R1, D1, NR = 1000 * 8, 40 * w.M, 300 * w.K, 4
NL = NR + 1
parts, tot = w.chain(L1, [(R1, D1)] * NL, S3)
assert NL == 5 and w.ms(w.trans(L1, R1)) == F(2, 10) and w.ms(w.prop(D1, S3)) == 1
assert w.ms(tot) == 6
P1 = {"a": w.ms(w.chain(L1, [(R1, D1)] * NR, S3)[1]),          # 4 links (routers counted)
      "b": w.ms(tot),
      "c": w.ms(w.trans(L1, R1) + w.prop(D1, S3)),             # one link
      "d": w.ms(w.trans(L1, R1) + NL * w.prop(D1, S3))}        # transmission paid once
assert P1 == {"a": F(48, 10), "b": 6, "c": F(12, 10), "d": F(52, 10)}
OPT1 = [(k, w.ltr(f"{w.fmt(v)} ms")) for k, v in P1.items()]
ST1, _ = w.spacetime("c1", ["A", "R₁", "R₂", "R₃", "R₄", "B"], L1, [(R1, D1)] * NL, S3, unit="ms", w=960, h=400)

# ---------------------------------------------------------------- part 2: 100 Mbps, 1,000 Bytes, 450,000 per minute
R2, L2, NOW = 100 * w.M, 1000 * 8, 450000
a_now = F(NOW, 60)
assert a_now == 7500 and w.rho(a_now, L2, R2) == F(6, 10)
a_max = F(9, 10) * R2 / L2
assert a_max == 11250 and a_max * 60 == 675000
inc = a_max * 60 - NOW
assert inc == 225000
P2 = {"a": a_max * 60, "b": inc, "c": a_max - a_now, "d": F(9, 10) * R2 / 1000 * 60 - NOW}
assert P2 == {"a": 675000, "b": 225000, "c": 3750, "d": 4950000}
OPT2 = [(k, f"{w.fmt(v)} חבילות לדקה") for k, v in P2.items()]

# ---------------------------------------------------------------- part 3: 3 connections, shared 120, servers 50, clients 30
SH, K, SV, CL = 120, 3, 50, 30
PATH, BN = w.rate_path("pt", [("s", "server", SV), ("m", "shared ÷ 3", F(SH, K)), ("c", "client", CL)])
thr = min(F(SV), F(SH, K), F(CL))
assert F(SH, K) == 40 and thr == 30 and BN == "c"
P3 = {"a": F(SH, K) / SV, "b": thr / SV, "c": thr / CL, "d": K * thr / SH}
assert P3 == {"a": F(4, 5), "b": F(3, 5), "c": 1, "d": F(3, 4)}
OPT3 = [(k, w.fmt(v)) for k, v in P3.items()]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("זה הבוס של הקורס: שלוש שאלות בסגנון מבחן, וכל אחת משלבת שני דברים שלמדנו."),
    P("שרשרת נתבים, קצב הגעה לדקה, וקישור משותף עם ניצולת."),
    P("לפני כל שאלה נעצור ונשאל: מה מבקשים, ובאילו יחידות?", hold=0.4),
], stage='<div class="kicker">D07 · חישובי השהיה ועומס</div><h1>בוס: שאלות מבחן</h1>'
         '<p>לפתור שאלות השהיה ועומס בסגנון המבחנים: המרות יחידות, קצב הגעה מרבי, שרשרת קישורים וניצולת.</p>',
   layout="title")

plan = Scene("plan", "ארבע שאלות לפני שמחשבים", [
    P("ארבע שאלות שכדאי לשאול לפני כל חישוב."),
    P("אחת: האם הכול בביטים ובשניות? בתים כפול שמונה, ולשעה חלקי 3600.", do=show("p-1"),
      say="אחת: האם הכול בביטים ובשניות? בתים כפול שמונה, ולשעה חלקי שלושת אלפים ושש מאות."),
    P("שתיים: מה בדיוק מבקשים? עוצמה, קצב מרבי, השהיה כוללת, או ניצולת.", do=show("p-2")),
    P("שלוש: אילו נתונים מיותרים? מרחק בשאלת עוצמה, למשל.", do=show("p-3")),
    P("וארבע: בשרשרת, כמה קישורים יש באמת? ובסוף בוחרים את הערך הקרוב ביותר.", do=show("p-4"), hold=0.3),
], stage=w.stack(w.big("p-f1", r"\rho = \frac{a \cdot L}{R} \qquad a = \frac{\rho \cdot R}{L}", cls="sm", hidden=False),
                 w.big("p-f2", r"d = \sum_{i} \left( \frac{L}{R_i} + \frac{d_i}{s} \right)", cls="sm", hidden=False), gap=40),
   panel=st.card("p-1", "rule", "🔑 ביטים ושניות: Bytes ×8, לשעה ÷3600")
         + st.card("p-2", "ex", "מה מבקשים? $\\rho$, $a$ מרבי, $d$, ניצולת")
         + st.card("p-3", "trap", "⚠️ נתונים מיותרים")
         + st.card("p-4", "trap", "⚠️ $k$ נתבים = $k+1$ קישורים"))

q1 = Scene("q1", "שאלה 1: שרשרת", [
    P("שאלה ראשונה: בין המקור ליעד יש ארבעה נתבים. כל הקישורים 40 Mbps, וכל אחד באורך 300 ק\"מ.",
      say="שאלה ראשונה: בין המקור ליעד יש ארבעה נתבים. כל הקישורים ארבעים מגה ביט לשנייה, וכל אחד באורך שלוש מאות קילומטר."),
    P("החבילה 1,000 Bytes, והמהירות שלוש כפול עשר בחזקת שמונה. מה ההשהיה הכוללת?",
      say="החבילה אלף בַּייטִים, והמהירות שלוש כפול עשר בחזקת שמונה. מה ההשהיה הכוללת?"),
    P("קודם סופרים: ארבעה נתבים מחברים חמישה קישורים.", do=show("y-1")),
    P("בכל קישור: שמונת אלפים ביט חלקי ארבעים מיליון, שתי עשיריות מילישנייה של שידור.", do=show("y-2")),
    P("ושלוש מאות אלף מטר, חלקי שלוש כפול עשר בחזקת שמונה: מילישנייה של התפשטות.", do=show("y-3")),
    P("כל קישור משלם את שתיהן. חמישה קישורים, כפול אחת ושתי עשיריות: שש מילישניות.",
      do=show("c1-k0", "c1-k1", "c1-k2", "c1-k3", "c1-k4", "c1-end", "y-4", "a-ok-b")),
    P("ארבע ושמונה עשיריות: ספרו ארבעה קישורים, כלומר ספרו נתבים.", do=show("a-x-a", "a-n-a")),
    P("אחת ושתי עשיריות: זה קישור אחד בלבד.", do=show("a-x-c", "a-n-c")),
    P("וחמש ושתי עשיריות: שילמו שידור פעם אחת בלבד. אבל כל נתב קולט את החבילה כולה, ומשדר אותה מחדש.",
      do=show("a-x-d", "a-n-d"), hold=0.4),
], stage=w.stack(ST1,
                 '<div class="dl-inl" style="font-size:30px">'
                 + w.big("y-1", r"5\ \text{links}", cls="xs") + w.big("y-2", r"\cdot\ (0.2", cls="xs")
                 + w.big("y-3", r"+\ 1)", cls="xs") + w.big("y-4", r"= 6\ \text{ms}", cls="xs") + "</div>", gap=6),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>4 נתבים בין המקור ליעד. כל קישור 40 Mbps ו-300 ק"מ, '
         'חבילה 1,000 Bytes, ‏$s = 3 \\cdot 10^{8}$. מה ההשהיה הכוללת?</div>'
         + st.options("a", OPT1, notes={"a": "4 קישורים", "c": "קישור אחד", "d": "שידור פעם אחת"}))

q2 = Scene("q2", "שאלה 2: קצב לדקה", [
    P("שאלה שנייה: קישור של 100 Mbps, חבילות של 1,000 Bytes, וכרגע מגיעות 450,000 חבילות בדקה.",
      say="שאלה שנייה: קישור של מאה מגה ביט לשנייה, חבילות של אלף בַּייטִים, וכרגע מגיעות ארבע מאות וחמישים אלף חבילות בדקה."),
    P("בכמה חבילות לדקה אפשר להגדיל את קצב ההגעה, עד שעוצמת התעבורה תהיה 0.9?",
      say="בכמה חבילות לדקה אפשר להגדיל את קצב ההגעה, עד שעוצמת התעבורה תהיה אפס נקודה תשע?"),
    P("מה מבקשים? לא את הקצב המרבי, אלא את **ההפרש** בינו לבין הקצב הנוכחי. ובדקות.", do=show("z-0")),
    P("הקצב הנוכחי לשנייה: שבעת אלפים וחמש מאות. העוצמה עכשיו 0.6.", do=show("z-1"),
      say="הקצב הנוכחי לשנייה: שבעת אלפים וחמש מאות. העוצמה עכשיו אפס נקודה שש."),
    P("הקצב המרבי: 0.9 כפול מאה מיליון, חלקי שמונת אלפים ביט. אחד עשר אלף מאתיים וחמישים בשנייה.", do=show("z-2"),
      say="הקצב המרבי: אפס נקודה תשע כפול מאה מיליון, חלקי שמונת אלפים ביט. אחד עשר אלף מאתיים וחמישים בשנייה."),
    P("בדקה: שש מאות שבעים וחמישה אלף. פחות הקצב הנוכחי: מאתיים עשרים וחמישה אלף.", do=show("z-3", "b-ok-b")),
    P("שש מאות שבעים וחמישה אלף הוא הקצב המרבי עצמו, לא התוספת.", do=show("b-x-a", "b-n-a")),
    P("שלושת אלפים שבע מאות וחמישים זו התוספת לשנייה. התשובה התבקשה לדקה.", do=show("b-x-c", "b-n-c")),
    P("וכמעט חמישה מיליון מתקבל בלי הכפלה בשמונה. זה גם יותר מכל מה שהקישור יכול להעביר.",
      do=show("b-x-d", "b-n-d"), hold=0.4),
], stage=w.stack(w.big("z-0", r"\Delta = a_{max} - a_{now}\ \ \text{(per min)}", cls="xs"),
                 w.big("z-1", r"a_{now} = \frac{450000}{60} = 7500,\ \ \rho = \frac{7500 \cdot 8000}{10^{8}} = 0.6", cls="xs"),
                 w.big("z-2", r"a_{max} = \frac{0.9 \cdot 10^{8}}{8000} = 11250\ \text{/s}", cls="xs"),
                 w.big("z-3", r"11250 \cdot 60 - 450000 = 225000\ \text{/min}", cls="xs"), gap=30),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>100 Mbps, חבילות של 1,000 Bytes, וכרגע 450,000 '
         'חבילות לדקה. בכמה חבילות לדקה אפשר להגדיל את הקצב עד ש-$\\rho = 0.9$?</div>'
         + st.options("b", OPT2, notes={"a": "המרבי, לא התוספת", "c": "לשנייה", "d": "בלי " + w.ltr("×8")}))

q3 = Scene("q3", "שאלה 3: ניצולת", [
    P("שאלה שלישית: שלושה שרתים שולחים לשלושה לקוחות, דרך קישור משותף של 120 Mbps שמתחלק שווה.",
      say="שאלה שלישית: שלושה שרתים שולחים לשלושה לקוחות, דרך קישור משותף של מאה ועשרים מגה ביט לשנייה, שמתחלק שווה."),
    P("לכל שרת קישור של 50 Mbps, ולכל לקוח קישור של 30. מה הניצולת של קישורי השרתים?",
      say="לכל שרת קישור של חמישים מגה ביט לשנייה, ולכל לקוח קישור של שלושים. מה הניצולת של קישורי השרתים?"),
    P("הקישור המשותף נותן לכל חיבור ארבעים. אבל הוא לא הצר ביותר בדרך!", do=show("pt-p-m")),
    P("קישור הלקוח הוא רק שלושים. לכן התפוקה של כל חיבור היא שלושים, וזה צוואר הבקבוק.",
      do=hide("pt-p-m") + show("pt-p-c", "pt-bn", "v-1")),
    P("ניצולת קישור השרת: שלושים מתוך חמישים, כלומר 0.6.", do=show("v-2", "c-ok-b"),
      say="ניצולת קישור השרת: שלושים מתוך חמישים, כלומר אפס נקודה שש."),
    P("0.8 מקבל מי שהניח שהקישור המשותף הוא צוואר הבקבוק, בלי לבדוק את המינימום.", do=show("c-x-a", "c-n-a"),
      say="אפס נקודה שמונה מקבל מי שהניח שהקישור המשותף הוא צוואר הבקבוק, בלי לבדוק את המינימום."),
    P("אחת היא הניצולת של קישור **הלקוח**: הוא מנוצל עד הסוף. אבל שאלו על השרתים.", do=show("c-x-c", "c-n-c")),
    P("ו-0.75 היא ניצולת הקישור המשותף: תשעים מתוך מאה ועשרים. נכון, אבל לא מה ששאלו.", do=show("c-x-d", "c-n-d"),
      hold=0.4, say="ואפס נקודה שבעים וחמש היא ניצולת הקישור המשותף: תשעים מתוך מאה ועשרים. נכון, אבל לא מה ששאלו."),
], stage=w.stack(PATH,
                 w.big("v-1", r"\min(50,\ 40,\ 30) = 30\ \text{Mbps}", cls="xs"),
                 w.big("v-2", r"U_{server} = \frac{30}{50} = 0.6", cls="xs"), gap=20),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>3 שרתים ו-3 לקוחות, קישור משותף של 120 Mbps '
         '(חלוקה שווה). שרת: 50 Mbps, לקוח: 30 Mbps. מה ניצולת קישורי השרתים?</div>'
         + st.options("c", OPT3, notes={"a": "בלי מינימום", "c": "צד הלקוח", "d": "הקישור המשותף"}))

recap = Scene("recap", "סיכום הקורס", [
    P("סיכום הקורס כולו: קודם יחידות. ביטים, ביטים לשנייה, מטרים ושניות.", do=show("s-1")),
    P("השהיה של חבילה: שידור והתפשטות, בכל קישור, וסופרים קישורים ולא נתבים.", do=show("s-2")),
    P("עומס: עוצמת התעבורה, ומהיפוך הנוסחה מקבלים קצב הגעה מרבי. ובודקים את יחידת התשובה.", do=show("s-3")),
    P("ותפוקה היא המינימום לאורך הדרך. בהצלחה במבחן!", do=show("s-4"), hold=0.6),
], stage=w.stack(w.big("s-f1", r"d_{trans} = \frac{L}{R} \qquad d_{prop} = \frac{d}{s}", cls="sm", hidden=False),
                 w.big("s-f2", r"\rho = \frac{a \cdot L}{R}", cls="sm", hidden=False), gap=40),
   panel=st.card("s-1", "rule", "🔑 קודם יחידות")
         + st.card("s-2", "rule", "🔑 שידור + התפשטות בכל קישור")
         + st.card("s-3", "rule", "🔑 $\\rho = aL/R$, ו-$a = \\rho R/L$")
         + st.card("s-4", "ex", "תפוקה = מינימום, ניצולת = בפועל / קצב"))

VIDEO = Video("D07", "delays", "בוס: שאלות מבחן", [title, plan, q1, q2, q3, recap], bank={})
