# -*- coding: utf-8 -*-
"""D04 · Store-and-forward על כמה קישורים — video script (build: tools/video/vid.py D04).

Source: courses/delays/C04.js (lesson + goal: the total delay of one packet over a chain of links with different
rates and lengths). Exam anchor: 25A-C-Q3 (three serial links 100/50/10 Mbps, 5000 bit, 1000 km each, s = 2·10^8;
total 15.65 ms, nearest option 15 ms), which no guided quiz uses. Its bank note: the sitting's yellow key was 10 ms,
which contradicts the printed data (propagation alone is 15 ms); the bank key is c = 15 ms, and so is this video.
Avoided on purpose: the C04 quiz numbers (10,000 bit x2 links, 2 routers at 8 Mbps, 4,000 bit on 100+10 Mbps,
12,000 bit over 300/600 km — also the lesson's example and calculator —, 1000 Bytes x2 at 8 Mbps, 6,000 bit over three
500 km links) and the C07 boss chains (25A-A-Q2, 25A-B-Q7, 26A-A-Q11).
Every delay comes from w_delays.chain / spacetime with exact fractions, asserted below.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_delays as w

S = 2 * 10**8
# ---------------------------------------------------------------- example: A -> R -> B
L1 = 2500 * 8
LINKS1 = [(20 * w.M, 400 * w.K), (5 * w.M, 100 * w.K)]
PARTS1, TOT1 = w.chain(L1, LINKS1, S)
assert L1 == 20000
assert [(w.ms(a), w.ms(b)) for a, b in PARTS1] == [(1, 2), (4, F(1, 2))]
assert w.ms(TOT1) == F(15, 2)                                            # 7.5 ms
assert w.ms(PARTS1[0][0] + PARTS1[0][1]) == 3                            # the last bit reaches R at 3 ms
ST1, _ = w.spacetime("a", ["A", "R", "B"], L1, LINKS1, S, unit="ms", w=900, h=560)

# routers vs links: 3 routers = 4 links, 5,000 bit at 25 Mbps each, propagation negligible
LR, RR = 5000, 25 * w.M
assert w.ms(w.trans(LR, RR)) == F(2, 10) and w.ms(4 * w.trans(LR, RR)) == F(8, 10) and w.ms(3 * w.trans(LR, RR)) == F(6, 10)

# ---------------------------------------------------------------- exam 25A-C-Q3
Q = BANK["25A-C-Q3"]
assert Q["correctId"] == "c" and Q["options"][2]["value"] == "15ms"
QL = 5000
QLINKS = [(100 * w.M, 1000 * w.K), (50 * w.M, 1000 * w.K), (10 * w.M, 1000 * w.K)]
QPARTS, QTOT = w.chain(QL, QLINKS, S)
assert [w.ms(a) for a, _ in QPARTS] == [F(5, 100), F(1, 10), F(1, 2)]   # 0.05 + 0.1 + 0.5
assert [w.ms(b) for _, b in QPARTS] == [5, 5, 5]
assert w.ms(sum(a for a, _ in QPARTS)) == F(65, 100) and w.ms(QTOT) == F(1565, 100)
VALS = {o["id"]: F(o["value"].replace("ms", "")) for o in Q["options"]}
assert VALS == {"a": 5, "b": 10, "c": 15, "d": 20}
near = min(VALS, key=lambda k: abs(VALS[k] - w.ms(QTOT)))
assert near == "c" and abs(VALS["c"] - w.ms(QTOT)) == F(65, 100) and abs(VALS["d"] - w.ms(QTOT)) == F(435, 100)
assert VALS["b"] < 15 and VALS["a"] == w.ms(QPARTS[0][1])              # 10 < propagation alone; 5 = one link's propagation
OPTS = [(o["id"], w.ltr(o["value"].replace("ms", " ms"))) for o in Q["options"]]
STQ, _ = w.spacetime("q3", ["A", "R₁", "R₂", "B"], QL, QLINKS, S, unit="ms", w=960, h=430)

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נעביר חבילה אחת דרך שרשרת של נתבים, ונחשב כמה זמן לוקח לה להגיע."),
    P("נראה למה כל קישור משלם גם שידור וגם התפשטות, ואיך לא לטעות בספירת הקישורים."),
    P("ובסוף נפתור שאלה אמיתית ממבחן, עם מלכודת של \"הקרוב ביותר\".", hold=0.4),
], stage='<div class="kicker">D04 · חישובי השהיה ועומס</div><h1>Store-and-forward על כמה קישורים</h1>'
         '<p>לחשב את ההשהיה הכוללת של חבילה אחת שעוברת שרשרת קישורים עם קצבים ואורכים שונים.</p>',
   layout="title")

idea = Scene("idea", "קודם קולטים, אחר כך שולחים", [
    P("נתב store-and-forward קולט את החבילה **כולה**, ורק אז מתחיל לשלוח אותה הלאה."),
    P("נראה את זה בתרשים זמן: כל קו אנכי הוא צומת, והזמן זורם כלפי מטה.", do=show("a-k0")),
    P("חבילה של 20,000 ביט. בקישור הראשון, 20 Mbps: השידור לוקח מילישנייה אחת.", do=show("a-tr0"),
      say="חבילה של עשרים אלף ביט. בקישור הראשון, עשרים מגה ביט לשנייה: השידור לוקח מילישנייה אחת."),
    P("הקו באורך 400 ק\"מ, ולכן כל ביט נוסע עוד שתי מילישניות.", do=show("a-pr0"),
      say="הקו באורך ארבע מאות קילומטר, ולכן כל ביט נוסע עוד שתי מילישניות."),
    P("הביט האחרון מגיע לנתב אחרי שלוש מילישניות. רק עכשיו הנתב מתחיל לשדר.", do=show("c-1")),
    P("הקישור השני איטי, 5 Mbps: ארבע מילישניות של שידור.", do=show("a-k1", "a-tr1"),
      say="הקישור השני איטי, חמישה מגה ביט לשנייה: ארבע מילישניות של שידור."),
    P("והקו קצר, 100 ק\"מ: חצי מילישנייה של התפשטות.", do=show("a-pr1"),
      say="והקו קצר, מאה קילומטר: חצי מילישנייה של התפשטות."),
    P("החבילה כולה אצל היעד אחרי שבע וחצי מילישניות.", do=show("a-end", "c-2"), hold=0.3),
], stage=ST1,
   panel=st.card("c-1", "rule", "🔑 הנתב מתחיל לשדר רק אחרי שהביט <b>האחרון</b> הגיע")
         + st.card("c-2", "ex", "<span class=\"dl-tr\">שידור</span> 1 + 4, ‏<span class=\"dl-pr\">התפשטות</span> 2 + 0.5"))

formula = Scene("formula", "הנוסחה והמתכון", [
    P("ולכן כל קישור משלם את שתי ההשהיות שלו במלואן, וההשהיות פשוט מצטברות.", do=show("f-1")),
    P("המתכון: לכל קישור רושמים את הקצב ואת האורך.", do=show("f-t")),
    P("מחשבים לכל קישור שידור והתפשטות, באותה יחידה. נוח לעבוד במילישניות.", do=show("f-r1", "f-r2")),
    P("וסוכמים הכול: חמש מילישניות של שידור, ועוד שתיים וחצי של התפשטות. שבע וחצי.", do=show("f-s")),
    P("ושימו לב: הקישור האיטי תרם את רוב השידור, והקישור הארוך את רוב ההתפשטות. לכן לא מדלגים על אף אחד.",
      do=show("f-c1"), hold=0.3),
], stage=w.stack(w.big("f-1", r"d = \sum_{i=1}^{n} \left( \frac{L}{R_i} + \frac{d_i}{s} \right)", cls="sm"),
                 '<div id="f-t" class="dl-grid h" style="grid-template-columns:auto auto auto">'
                 '<div class="hd">link</div><div class="hd dl-tr">L/R</div><div class="hd dl-pr">d/s</div>'
                 '<div id="f-r1" class="h c" style="display:contents"><div class="c">20 Mbps · 400 km</div>'
                 '<div class="c dl-tr">1 ms</div><div class="c dl-pr">2 ms</div></div>'
                 '<div id="f-r2" class="h c" style="display:contents"><div class="c">5 Mbps · 100 km</div>'
                 '<div class="c dl-tr">4 ms</div><div class="c dl-pr">0.5 ms</div></div></div>',
                 w.big("f-s", r"(1 + 4) + (2 + 0.5) = 7.5\ \text{ms}", cls="sm"), gap=34),
   panel=st.card("f-c1", "rule", "🔑 שידור <b>וגם</b> התפשטות, בכל קישור"))

links = Scene("links", "קישורים, לא נתבים", [
    P("ועכשיו המלכודת הכי נפוצה: לספור נתבים במקום קישורים."),
    P("בין המקור ליעד יש שלושה נתבים. כמה קישורים יש בדרך?", do=show("l-1")),
    P("ארבעה. מהמקור לנתב הראשון, שני קישורים בין הנתבים, ומהנתב האחרון ליעד.", do=show("l-2", "l-c1")),
    P("אם כל קישור הוא 25 Mbps והחבילה 5,000 ביט, כל שידור לוקח שתי עשיריות מילישנייה.", do=show("l-3"),
      say="אם כל קישור הוא עשרים וחמישה מגה ביט לשנייה, והחבילה חמשת אלפים ביט, כל שידור לוקח שתי עשיריות מילישנייה."),
    P("ארבעה קישורים: שמונה עשיריות. מי שספר שלושה נתבים, קיבל שש עשיריות.", do=show("l-4", "l-c2"), hold=0.3),
], stage=w.stack('<div id="l-1" class="dl-row ltr h" style="font-size:44px">A ── R₁ ── R₂ ── R₃ ── B</div>',
                 '<div id="l-2" class="dl-row ltr h" style="font-size:34px;color:#38bdf8">&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</div>',
                 w.big("l-3", r"\frac{5000}{25 \cdot 10^{6}} = 0.2\ \text{ms}", cls="sm"),
                 w.big("l-4", r"4 \cdot 0.2 = 0.8\ \text{ms}", cls="sm"), gap=30),
   panel=st.card("l-c1", "rule", "🔑 $k$ נתבים בדרך = $k+1$ קישורים")
         + st.card("l-c2", "trap", "⚠️ סופרים קישורים, לא נתבים"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: שלושה קישורים טוריים, בקצבים 100, 50 ו-10 Mbps. החבילה 5,000 ביט.",
      say="שאלה ממבחן: שלושה קישורים טוריים, בקצבים מאה, חמישים ועשרה מגה ביט לשנייה. החבילה חמשת אלפים ביט."),
    P("כל קישור באורך 1000 ק\"מ, והמהירות שתיים כפול עשר בחזקת שמונה. מה ההשהיה הכוללת?",
      say="כל קישור באורך אלף קילומטר, והמהירות שתיים כפול עשר בחזקת שמונה. מה ההשהיה הכוללת?"),
    P("שידור, קישור אחרי קישור: חמש מאיות, עשירית, וחצי מילישנייה. יחד, 0.65 מילישניות.",
      do=show("q3-k0", "q3-k1", "q3-k2", "x-1"),
      say="שידור, קישור אחרי קישור: חמש מאיות, עשירית, וחצי מילישנייה. יחד, אפס נקודה שישים וחמש מילישניות."),
    P("התפשטות: מיליון מטר חלקי שתיים כפול עשר בחזקת שמונה, חמש מילישניות לכל קישור. יחד, חמש עשרה.",
      do=show("q3-pr0", "q3-pr1", "q3-pr2", "x-2")),
    P("סך הכול: 15.65 מילישניות. בתרשים רואים שההתפשטות כמעט כל הזמן, והשידור רק פסים דקים.",
      do=show("q3-end", "x-3"), say="סך הכול: חמש עשרה נקודה שישים וחמש מילישניות. בתרשים רואים שההתפשטות היא כמעט כל הזמן, והשידור רק פסים דקים."),
    P("אין תשובה כזו בדיוק, אז בוחרים את הקרובה ביותר: 15 מילישניות. ההפרש רק 0.65.",
      do=show("q-ok-c"), say="אין תשובה כזו בדיוק, אז בוחרים את הקרובה ביותר: חמש עשרה מילישניות. ההפרש רק אפס נקודה שישים וחמש."),
    P("20 מילישניות רחוקה יותר: הפרש של יותר מארבע מילישניות.", do=show("q-x-d", "q-n-d"),
      say="עשרים מילישניות רחוקה יותר: הפרש של יותר מארבע מילישניות."),
    P("5 מילישניות היא ההתפשטות של קישור אחד בלבד. שכחו שיש שלושה.", do=show("q-x-a", "q-n-a"),
      say="חמש מילישניות היא ההתפשטות של קישור אחד בלבד. שכחו שיש שלושה."),
    P("ו-10 מילישניות בלתי אפשרית: ההתפשטות לבדה כבר 15. בדף הפתרון המקורי סומנה דווקא 10, אבל היא סותרת את הנתונים.",
      do=show("q-x-b", "q-n-b"), hold=0.5,
      say="ועשר מילישניות בלתי אפשרית: ההתפשטות לבדה כבר חמש עשרה. בדף הפתרון המקורי סומנה דווקא עשר, אבל היא סותרת את הנתונים."),
], stage=w.stack(STQ,
                 '<div class="dl-inl" style="font-size:32px">'
                 + w.big("x-1", r"0.65", cls="xs") + w.big("x-2", r"+\ 15", cls="xs")
                 + w.big("x-3", r"= 15.65\ \text{ms}", cls="xs") + "</div>", gap=8),
   panel=f'<div class="qstem"><span class="qid">{Q["id"]}</span>שלושה קישורים טוריים: 100, 50 ו-10 Mbps. '
         'חבילה 5000 ביט, כל קישור 1000 ק"מ, ‏$s = 2 \\cdot 10^{8}$. מה ההשהיה הכוללת?</div>'
         + st.options("q", OPTS, notes={"a": "קישור אחד", "b": "פחות מההתפשטות", "d": "רחוק יותר"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: store-and-forward אומר שכל נתב קולט את כל החבילה לפני שהוא שולח.", do=show("s-1"),
      say="לסיכום: סְטוֹר אֶנְד פוֹרְוַורְד אומר שכל נתב קולט את כל החבילה לפני שהוא שולח."),
    P("לכן כל קישור משלם שידור והתפשטות, וסוכמים את כולם.", do=show("s-2")),
    P("סופרים קישורים: שלושה נתבים בדרך הם ארבעה קישורים.", do=show("s-3")),
    P("ואם התשובה המדויקת לא מופיעה, בוחרים את הקרובה ביותר. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6),
], stage=w.stack(w.big("s-f", r"d = \sum_{i} \left( \frac{L}{R_i} + \frac{d_i}{s} \right)", hidden=False)),
   panel=st.card("s-1", "rule", "🔑 קולטים הכול, אז שולחים")
         + st.card("s-2", "rule", "🔑 שידור + התפשטות בכל קישור")
         + st.card("s-3", "trap", "⚠️ $k$ נתבים = $k+1$ קישורים")
         + st.card("s-4", "ex", "אין ערך מדויק? בוחרים את הקרוב ביותר"))

VIDEO = Video("D04", "delays", "Store-and-forward על כמה קישורים", [title, idea, formula, links, exam, recap],
              bank={"25A-C-Q3": "c"})
