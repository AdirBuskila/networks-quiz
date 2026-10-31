# -*- coding: utf-8 -*-
"""D03 · השהיית התפשטות d/s — video script (build: tools/video/vid.py D03).

Source: courses/delays/C03.js (lesson + goal: the travel time of a bit along the line, d/s, and deciding whether
transmission or propagation dominates).
Exam part: an original question "בסגנון מבחן" (bank={}): the free delays questions (24A-A-Q2, 25A-C-Q3) anchor D06
and D04; none is about one link's d/s.
Avoided on purpose: the C03 quiz numbers (1000 km, 2 km at 3·10^8, 1500 Bytes on 1 Gbps over 100 km, on 10 Mbps over
100 m, the 10 Mbps -> 1 Gbps upgrade) and the lesson's 1000 km example.
The moving pulse is w_delays.link_frames and the space-time diagram w_delays.spacetime; all values asserted below.
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_delays as w

S = 2 * 10**8
# ---------------------------------------------------------------- numbers (verified)
L1, R1, D1 = 2000, 100 * w.M, 3000 * w.K
P1 = w.prop(D1, S)
assert P1 == F(15, 1000) and w.ms(P1) == 15                          # 3,000 km: 15 ms
assert w.us(w.trans(L1, R1)) == 20                                   # the pulse leaves in 20 µs
TIMES = [F(5, 1000), F(10, 1000), P1 + w.trans(L1, R1)]
LINK, STATS = w.link_frames("lk", L1, R1, D1, S, TIMES)
assert STATS[0] == (2000, 2000, 0) and STATS[1] == (2000, 2000, 0) and STATS[2] == (2000, 0, 2000)
assert w.ms(TIMES[2]) == F(1502, 100)                                # last bit arrives at 15.02 ms
assert w.us(w.prop(3000, S)) == 15 and P1 / w.prop(3000, S) == 1000   # km left as m: 1000 times too small
assert w.us(w.prop(600, S)) == 3                                     # 600 m in a building: 3 µs

# who dominates (1,000 Bytes = 8,000 bit)
LB = 1000 * 8
A_tr, A_pr = w.trans(LB, 10 * w.G), w.prop(4000 * w.K, S)            # 10 Gbps, 4,000 km
B_tr, B_pr = w.trans(LB, 1 * w.M), w.prop(50, S)                     # 1 Mbps, 50 m
assert w.us(A_tr) == F(8, 10) and w.ms(A_pr) == 20 and A_pr / A_tr == 25000
assert w.ms(B_tr) == 8 and w.us(B_pr) == F(25, 100) and B_tr / B_pr == 32000

# exam-style: 1,250 Bytes, 100 Mbps, 20 km, s = 2·10^8
QL, QR, QD = 1250 * 8, 100 * w.M, 20 * w.K
Q_tr, Q_pr = w.trans(QL, QR), w.prop(QD, S)
assert w.us(Q_tr) == 100 and w.us(Q_pr) == 100 and Q_tr == Q_pr
assert Q_pr / w.trans(1250, QR) == 8                                 # no ×8: propagation looks 8 times bigger
assert Q_tr / w.prop(20, S) == 1000                                  # 20 m instead of 20 km: transmission 1000 times bigger
assert w.prop(QD, S) == Q_pr and w.trans(QL, w.G) == Q_tr / 10           # 1 Gbps cuts only d_trans (10x); d/s has no R: still 100 µs
ST, TOT = w.spacetime("st", ["A", "B"], QL, [(QR, QD)], S, unit="us", w=760, h=470)
assert w.us(TOT) == 200
OPTS = [("a", "ההתפשטות גדולה פי 8 מהשידור"),
        ("b", "שדרוג הקישור ל-1 Gbps יקטין גם את ההתפשטות פי 10"),
        ("c", "השידור וההתפשטות שוות: 100 מיקרושניות כל אחת"),
        ("d", "השידור גדול פי 1000 מההתפשטות")]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נחשב השהיית התפשטות: כמה זמן לוקח לביט לעבור את הקו."),
    P("ונלמד להכריע מי גדולה יותר: השהיית השידור, או השהיית ההתפשטות."),
    P("ובסוף נפתור שאלה בסגנון מבחן, עם תוצאה מפתיעה.", hold=0.4),
], stage='<div class="kicker">D03 · חישובי השהיה ועומס</div><h1>השהיית התפשטות d/s</h1>'
         '<p>לחשב את זמן המסע של ביט לאורך הקו, ולהכריע אם שידור או התפשטות הם הגורם הדומיננטי.</p>',
   layout="title")

idea = Scene("idea", "המסע של הביט", [
    P("ברמה הקודמת הנתב **הוציא** את הביטים לקו. עכשיו נשאל: כמה זמן כל ביט נוסע בקו?"),
    P("האות נע בכבל במהירות קבועה, $s$. בשאלות היא לרוב שתיים כפול עשר בחזקת שמונה מטר לשנייה.",
      do=show("c-1"), say="האות נע בכבל במהירות קבועה, אֶס. בשאלות היא לרוב שתיים כפול עשר בחזקת שמונה מטר לשנייה."),
    P("נשלח חבילה קטנה על קו של 3,000 ק\"מ. היא יוצאת מהנתב תוך עשרים מיקרושניות בלבד.",
      say="נשלח חבילה קטנה על קו של שלושת אלפים קילומטר. היא יוצאת מהנתב תוך עשרים מיקרושניות בלבד."),
    P("אחרי חמש מילישניות היא עברה רק שליש מהדרך.", do=show("lk-f0")),
    P("אחרי עשר מילישניות: שני שליש.", do=hide("lk-f0") + show("lk-f1")),
    P("והביט האחרון מגיע אחרי חמש עשרה מילישניות ועוד קצת. רוב הזמן החבילה פשוט נוסעת.",
      do=hide("lk-f1") + show("lk-f2"), hold=0.3),
    P("זו השהיית ההתפשטות: המרחק $d$, חלקי המהירות $s$.", do=show("f-1"),
      say="זו השהיית ההתפשטות: המרחק דִּי, חלקי המהירות אֶס."),
    P("ובמספרים: שלוש כפול עשר בחזקת שש מטר, חלקי שתיים כפול עשר בחזקת שמונה, הם 15 מילישניות.",
      do=show("f-2", "c-2"), say="ובמספרים: שלוש כפול עשר בחזקת שש מטר, חלקי שתיים כפול עשר בחזקת שמונה, הם חמש עשרה מילישניות."),
], stage=w.stack(LINK, w.big("f-1", r"d_{prop} = \frac{d}{s}"),
                 w.big("f-2", r"\frac{3 \cdot 10^{6}\ \text{m}}{2 \cdot 10^{8}\ \text{m/s}} = 0.015\ \text{s} = 15\ \text{ms}", cls="sm"),
                 gap=20),
   panel=st.card("c-1", "ex", "$s = 2 \\cdot 10^{8}$ מטר לשנייה (כבל)")
         + st.card("c-2", "rule", "🔑 $d_{prop} = d/s$: רק מרחק ומהירות"))

units = Scene("units", "מטרים, לא ק\"מ", [
    P("והמלכודת כאן היא ק\"מ מול מטר. $s$ נתונה במטרים לשנייה, ולכן גם $d$ חייב להיות במטרים.",
      do=show("u-1"), say="והמלכודת כאן היא קילומטר מול מטר. אֶס נתונה במטרים לשנייה, ולכן גם דִּי חייב להיות במטרים."),
    P("מי שמציב 3000 במקום שלושה מיליון, מקבל 15 **מיקרו**שניות. קטן פי אלף.", do=show("u-2", "u-c1"),
      say="מי שמציב שלושת אלפים במקום שלושה מיליון, מקבל חמש עשרה מיקרושניות. קטן פי אלף."),
    P("ובאמת יש קווים קצרים: כבל של 600 מטר בתוך בניין נותן רק 3 מיקרושניות.", do=show("u-3"),
      say="ובאמת יש קווים קצרים: כבל של שש מאות מטר בתוך בניין נותן רק שלוש מיקרושניות."),
    P("ושימו לב מה **אין** בנוסחה: לא גודל החבילה, ולא קצב הקישור.", do=show("u-c2")),
    P("חבילה גדולה או קטנה, קישור איטי או מהיר: כל ביט נוסע באותה מהירות.", hold=0.3),
], stage=w.stack(w.big("u-1", r"3000\ \text{km} = 3 \cdot 10^{6}\ \text{m}", cls="sm"),
                 w.big("u-2", r"\frac{3000}{2 \cdot 10^{8}} = 15\ \mu\text{s}\ \ \times", cls="sm"),
                 w.big("u-3", r"\frac{600}{2 \cdot 10^{8}} = 3\ \mu\text{s}", cls="sm"), gap=36),
   panel=st.card("u-c1", "trap", "⚠️ ק\"מ כפול 1000 לפני החילוק")
         + st.card("u-c2", "rule", "🔑 $d_{prop}$ לא תלויה ב-$L$ וב-$R$"))

who = Scene("who", "מי דומיננטית", [
    P("עכשיו השאלה הנפוצה: מי גדולה יותר, השהיית השידור או השהיית ההתפשטות? מחשבים את שתיהן ומשווים."),
    P("מקרה ראשון: 1,000 בתים בקישור של 10 Gbps, לאורך 4,000 ק\"מ.", do=show("w-r1"),
      say="מקרה ראשון: אלף בתים בקישור של עשרה גִּיגָה בִּיט לשנייה, לאורך ארבעת אלפים קילומטר."),
    P("שידור: שמונת אלפים ביט חלקי עשר בחזקת עשר, 0.8 מיקרושניות. התפשטות: 20 מילישניות.", do=show("w-a1", "w-a2"),
      say="שידור: שמונת אלפים ביט חלקי עשר בחזקת עשר, אפס נקודה שמונה מיקרושניות. התפשטות: עשרים מילישניות."),
    P("ההתפשטות גדולה פי עשרים וחמישה אלף. קו ארוך וקישור מהיר: ההתפשטות שולטת.", do=show("w-v1")),
    P("ולכן כאן קישור מהיר עוד יותר כמעט לא יעזור. העשרים מילישניות הן מרחק, לא קצב.", hold=0.3),
    P("מקרה שני: אותה חבילה בקישור של 1 Mbps, על כבל של 50 מטר.", do=show("w-r2"),
      say="מקרה שני: אותה חבילה בקישור של מגה ביט אחד לשנייה, על כבל של חמישים מטר."),
    P("שידור: 8 מילישניות. התפשטות: רבע מיקרושנייה.", do=show("w-b1", "w-b2"),
      say="שידור: שמונה מילישניות. התפשטות: רבע מיקרושנייה."),
    P("קו קצר וקישור איטי: השידור שולט.", do=show("w-v2", "w-c1")),
    P("ובצומת יש עוד שתי השהיות: עיבוד ותור. כשהשאלה אומרת שאין השהיות אחרות, נשארים רק שידור והתפשטות.",
      do=show("w-n")),
], stage='<div class="dl-grid" style="grid-template-columns:auto auto auto auto">'
         '<div class="hd"></div><div class="hd">שידור</div><div class="hd">התפשטות</div><div class="hd"></div>'
         '<div id="w-r1" class="h c">10 Gbps · 4000 km</div><div id="w-a1" class="h c dl-tr">0.8 µs</div>'
         '<div id="w-a2" class="h c dl-pr">20 ms</div><div id="w-v1" class="h c dl-pr">התפשטות גוברת</div>'
         '<div id="w-r2" class="h c">1 Mbps · 50 m</div><div id="w-b1" class="h c dl-tr">8 ms</div>'
         '<div id="w-b2" class="h c dl-pr">0.25 µs</div><div id="w-v2" class="h c dl-tr">שידור גובר</div></div>'
         + w.big("w-n", r"d_{nodal} = d_{proc} + d_{queue} + d_{trans} + d_{prop}", cls="xs"),
   panel=st.card("w-c1", "rule", "🔑 מחשבים את שתיהן, ומשווים. קו ארוך: התפשטות. קישור איטי: שידור"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: חבילה של 1,250 Bytes, קישור של 100 Mbps, קו של 20 ק\"מ.",
      say="שאלה בסגנון מבחן: חבילה של אלף מאתיים וחמישים בַּייטִים, קישור של מאה מגה ביט לשנייה, קו של עשרים קילומטר."),
    P("המהירות שתיים כפול עשר בחזקת שמונה. איזו טענה נכונה?"),
    P("שידור: עשרת אלפים ביט, חלקי עשר בחזקת שמונה. מאה מיקרושניות.", do=show("x-1")),
    P("התפשטות: עשרים אלף מטר, חלקי שתיים כפול עשר בחזקת שמונה. גם מאה מיקרושניות!", do=show("x-2")),
    P("הן שוות. בתרשים רואים את המשמעות: הביט הראשון מגיע בדיוק כשהביט האחרון יוצא.",
      do=show("st-k0", "st-tr0", "st-pr0", "q-ok-c")),
    P("ויחד, אחרי מאתיים מיקרושניות, כל החבילה אצל היעד.", do=show("st-end")),
    P("מי שלא כפל בשמונה, קיבל שידור של שתים עשרה וחצי מיקרושניות, ולכן ראה התפשטות גדולה פי 8.",
      do=show("q-x-a", "q-n-a"), say="מי שלא כפל בשמונה, קיבל שידור של שתים עשרה וחצי מיקרושניות, ולכן ראה התפשטות גדולה פי שמונה."),
    P("מי שהציב עשרים מטר במקום עשרים ק\"מ, קיבל התפשטות קטנה פי אלף.", do=show("q-x-d", "q-n-d"),
      say="מי שהציב עשרים מטר במקום עשרים קילומטר, קיבל התפשטות קטנה פי אלף."),
    P("ושדרוג הקישור מקצר רק את השידור. בנוסחת ההתפשטות אין קצב, אז היא נשארת מאה מיקרושניות.",
      do=show("q-x-b", "q-n-b"), hold=0.5),
], stage=w.stack(w.big("x-1", r"d_{trans} = \frac{10^{4}}{10^{8}} = 100\ \mu\text{s}", cls="xs"),
                 w.big("x-2", r"d_{prop} = \frac{2 \cdot 10^{4}}{2 \cdot 10^{8}} = 100\ \mu\text{s}", cls="xs"),
                 ST, gap=10),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>חבילה של 1,250 Bytes, קישור של 100 Mbps, קו של '
         '20 ק"מ, ‏$s = 2 \\cdot 10^{8}$. איזו טענה נכונה?</div>'
         + st.options("q", OPTS, notes={"a": "בלי " + w.ltr("×8"), "b": "אין $R$ ב-$d/s$", "d": "מטר במקום ק\"מ"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: השהיית ההתפשטות היא $d$ חלקי $s$, הזמן שביט נוסע לאורך הקו.", do=show("s-1"),
      say="לסיכום: השהיית ההתפשטות היא דִּי חלקי אֶס, הזמן שביט נוסע לאורך הקו."),
    P("המרחק במטרים: קילומטר הוא אלף מטר.", do=show("s-2")),
    P("היא לא תלויה בגודל החבילה ולא בקצב הקישור.", do=show("s-3")),
    P("וכדי להכריע מי דומיננטית, מחשבים את שתי ההשהיות ומשווים. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6),
], stage=w.stack(w.big("s-f", r"d_{prop} = \frac{d}{s}", hidden=False)),
   panel=st.card("s-1", "rule", "🔑 התפשטות = זמן המסע של ביט")
         + st.card("s-2", "trap", "⚠️ ק\"מ × 1000 = מטר")
         + st.card("s-3", "rule", "🔑 בלי $L$ ובלי $R$")
         + st.card("s-4", "ex", "שידור מול התפשטות: מחשבים את שתיהן"))

VIDEO = Video("D03", "delays", "השהיית התפשטות d/s", [title, idea, units, who, exam, recap], bank={})
