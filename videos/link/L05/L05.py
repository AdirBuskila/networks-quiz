# -*- coding: utf-8 -*-
"""L05 · CRC: חישוב השארית — video script (build: tools/video/vid.py L05).

Source: courses/link/C05.js (lesson + goal: compute a CRC remainder by mod-2 long division (XOR), with the right
remainder length).
Exam part: an original question "בסגנון מבחן" (bank={}): R for D=111001, G=1011. The bank's CRC computation 25A-B-Q8
(D=10011100, G=1001) is in the C08 boss; no other bank question computes a CRC.
Avoided on purpose: the lesson's D=1101/G=1011, the quiz pairs (1011/101, 101110/1001, 11001/1101,
11010011101100/1011), C05-Q1's XOR 1101^1011, the C06 pairs (1010001101/110101, 1011/101) and the boss pair.
Every row of the long division comes from w_link.crc_steps(), which asserts its result against the checker's crc()/rem();
the distractors' values (no zeros appended, r+1 bits, r+1 zeros) are computed and asserted below.
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_link as w

# ---------------------------------------------------------------- numbers (verified)
XA, XB = "1001", "0101"
assert w.xor(XA, XB) == "1100" and int(XA, 2) + int(XB, 2) == 14 and int(XA, 2) - int(XB, 2) == 4

D, G = "101101", "1101"
R_LEN = len(G) - 1
assert R_LEN == 3
DIV, STEPS, R = w.division("dv", D, G)
assert [p for p, _ in STEPS] == [0, 1, 4]
assert [x for _, x in STEPS] == ["011001000", "000011000", "000000010"]
assert R == "010" and w.crc(D, G) == "010"
FRAME = D + R
assert FRAME == "101101010" and w.rem(FRAME, G) == "000"

# exam-style
XD, XG = "111001", "1011"
XDIV, XSTEPS, XR = w.division("xd", XD, XG)
assert XR == "101" and [p for p, _ in XSTEPS] == [0, 1, 4, 5]
TRAP_NOZ = w.rem(XD, XG)                         # forgot to append the zeros
TRAP_R1 = "0" + XR                               # written with r+1 bits
TRAP_4Z = w.rem(XD + "0000", XG)                 # appended r+1 zeros
assert (TRAP_NOZ, TRAP_R1, TRAP_4Z) == ("011", "0101", "001")
OPTS_V = {"a": XR, "b": TRAP_NOZ, "c": TRAP_R1, "d": TRAP_4Z}
assert len(set(OPTS_V.values())) == 4 and [k for k, v in OPTS_V.items() if v == w.crc(XD, XG)] == ["a"]
OPTS = [(k, w.mono(v)) for k, v in OPTS_V.items()]
NX = len(XSTEPS)

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נחשב CRC: השארית שהשולח מצרף לנתונים."),
    P("נלמד חילוק ארוך מיוחד, שבו חיסור הוא XOR, ונקפיד על האורך הנכון של השארית."),
    P("ובסוף נפתור שאלה בסגנון מבחן, עם שלוש מלכודות.", hold=0.4),
], stage='<div class="kicker">L05 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>CRC: חישוב השארית</h1>'
         '<p>לחשב שארית CRC בחילוק ארוך מודולו 2 (XOR), עם אורך השארית הנכון.</p>', layout="title")

XT = w.table("x-tab", ["XOR", "תוצאה"], [[w.mono(f"{a} ⊕ {b}"), w.mono(str(a ^ b))] for a in (0, 1) for b in (0, 1)],
             hidden=False)
xor = Scene("xor", "חשבון בלי נשא", [
    P("ב-CRC עושים חשבון **מודולו שתיים**: אין נשא, ואין לקיחה מהספרה הבאה."),
    P("חיבור וחיסור הם אותה פעולה: XOR. ביטים שווים נותנים אפס, ביטים שונים נותנים אחת.", do=show("x-1")),
    P("למשל, $1001$ XOR $0101$. ביט אחר ביט: אחת, אחת, אפס, אפס.", do=show("x-2"),
      say="למשל, אחת אפס אפס אחת, אֶקְס אוֹר אפס אחת אפס אחת. ביט אחר ביט: אחת, אחת, אפס, אפס."),
    P("שימו לב: זה לא חיבור רגיל, שהיה נותן ארבע עשרה, ולא חיסור רגיל, שהיה נותן ארבע.", do=show("x-t")),
], stage=w.stack(XT, w.row("x-2", w.mono("1001 ⊕ 0101 = 1100"), cls="ltr"), gap=36),
   panel=st.card("x-1", "rule", "🔑 שווים: 0 · שונים: 1")
         + st.card("x-t", "trap", "⚠️ בלי נשא: לא 9+5 ולא 9−5"))

setup = Scene("setup", "ההכנה", [
    P("השולח והמקבל מסכימים מראש על **מחולל**, שנקרא $G$. כאן $G$ הוא $1101$.", do=show("s-1"),
      say="השולח והמקבל מסכימים מראש על מחולל, שנקרא גִ'י. כאן גִ'י הוא אחת אחת אפס אחת."),
    P("ל-$G$ יש ארבעה ביטים. נסמן ב-$r$ את האורך שלו פחות אחת: $r$ שווה שלוש.", do=show("s-2"),
      say="לגִ'י יש ארבעה ביטים. נסמן באָר את האורך שלו פחות אחת: אָר שווה שלוש."),
    P("השארית תהיה בדיוק $r$ ביטים, כלומר שלושה.", do=show("s-3"),
      say="השארית תהיה בדיוק אָר ביטים, כלומר שלושה."),
    P("הנתונים הם $101101$. לפני החילוק מוסיפים להם $r$ אפסים בסוף.", do=show("dv"),
      say="הנתונים הם אחת אפס אחת אחת אפס אחת. לפני החילוק מוסיפים להם אָר אפסים בסוף."),
    P("שלושת האפסים האלה שומרים מקום לשארית, שתבוא במקומם.", do=show("dv-pad"), hold=0.3),
], stage=DIV,
   panel=st.card("s-1", "ex", "$G = 1101$")
         + st.card("s-2", "rule", "🔑 $r$ = אורך $G$ פחות 1 = 3")
         + st.card("s-3", "rule", "🔑 השארית: בדיוק $r$ ביטים"))

div = Scene("div", "החילוק", [
    P("מתחילים משמאל. הביט המוביל הוא אחת, אז מיישרים את $G$ מתחתיו.", do=show("dv-g0", "v-1"),
      say="מתחילים משמאל. הביט המוביל הוא אחת, אז מיישרים את גִ'י מתחתיו."),
    P("ועושים XOR. בעמודות של $G$ הביטים משתנים, וכל השאר יורדים כמו שהם.", do=show("dv-x0"),
      say="ועושים אֶקְס אוֹר. בעמודות של גִ'י הביטים משתנים, וכל השאר יורדים כמו שהם."),
    P("הביט הראשון הפך לאפס, וזה תמיד כך: בשביל זה יישרנו. הביט המוביל עכשיו הוא השני, והוא אחת.",
      do=show("dv-g1")),
    P("שוב XOR עם $G$, מיושר מתחתיו.", do=show("dv-x1"), say="שוב אֶקְס אוֹר עם גִ'י, מיושר מתחתיו."),
    P("עכשיו שני הביטים הבאים הם אפס. כשהביט המוביל אפס, **לא** עושים XOR, פשוט מתקדמים.", do=show("v-2")),
    P("הביט המוביל הבא שהוא אחת נמצא במקום החמישי. מיישרים את $G$ שם, ועושים XOR.",
      do=show("dv-g2", "dv-x2"),
      say="הביט המוביל הבא שהוא אחת נמצא במקום החמישי. מיישרים את גִ'י שם, ועושים אֶקְס אוֹר."),
    P("עברנו את כל ביטי הנתונים, ועוצרים. שלושת הביטים האחרונים הם השארית: אפס, אחת, אפס.",
      do=show("dv-rem", "v-3")),
    P("ושימו לב לאפס שבהתחלה. השארית היא $010$, שלושה ביטים, ולא $10$.", do=show("v-t"),
      say="ושימו לב לאפס שבהתחלה. השארית היא אפס אחת אפס, שלושה ביטים, ולא אחת אפס."),
    P("השולח מצרף את השארית לנתונים, במקום האפסים, ושולח את המסגרת הזו.", do=show("v-4"), hold=0.4),
], stage=DIV.replace('class="lk-div h"', 'class="lk-div"').replace('id="dv-pad" class="lk-dtag h"', 'id="dv-pad" class="lk-dtag"'),
   panel=st.card("v-1", "rule", "🔑 מוביל 1: מיישרים $G$ ועושים XOR")
         + st.card("v-2", "ex", "מוביל 0: מתקדמים בלי XOR")
         + st.card("v-3", "rule", "🔑 $R = 010$")
         + st.card("v-t", "trap", "⚠️ $r$ ביטים, כולל האפס המוביל")
         + st.card("v-4", "ex", "נשלח: " + w.mono(D) + w.mono(" ") + '<b class="lk-ok lk-mono">' + R + "</b>"))
# the division figure is the same element as in "setup": give this scene its own copy with its own ids
div.stage = div.stage.replace('id="dv', 'id="dw')
for p in div.phrases:
    p.do = [(k, e.replace("dv-", "dw-")) for k, e in p.do]

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: $D=111001$ ו-$G=1011$. מהי השארית $R$?",
      say="שאלה בסגנון מבחן: דִּי שווה אחת אחת אחת אפס אפס אחת, וגִ'י שווה אחת אפס אחת אחת. מהי השארית אָר?"),
    P("ל-$G$ ארבעה ביטים, ולכן $r$ שווה שלוש: מוסיפים שלושה אפסים.", do=show("xd", "xd-pad"),
      say="לגִ'י ארבעה ביטים, ולכן אָר שווה שלוש: מוסיפים שלושה אפסים."),
    P("שני ה-XOR הראשונים: בביט הראשון ובביט השני.", do=show("xd-g0", "xd-x0", "xd-g1", "xd-x1"),
      say="שני האֶקְס אוֹר הראשונים: בביט הראשון ובביט השני."),
    P("אחר כך שני אפסים מובילים, שמדלגים עליהם, ועוד שני XOR, במקום החמישי והשישי.",
      do=show(*[f"xd-{t}{k}" for k in range(2, NX) for t in ("g", "x")]),
      say="אחר כך שני אפסים מובילים, שמדלגים עליהם, ועוד שני אֶקְס אוֹר, במקום החמישי והשישי."),
    P("נשארים שלושה ביטים: אחת, אפס, אחת. זו התשובה.", do=show("xd-rem", "q-ok-a")),
    P("מי ששכח להוסיף את האפסים, חילק את הנתונים לבד, וקיבל אפס, אחת, אחת. זו המלכודת הראשונה.",
      do=show("q-x-b", "q-n-b")),
    P("התשובה בת ארבעת הביטים ארוכה מדי: השארית היא תמיד בדיוק $r$ ביטים.", do=show("q-x-c", "q-n-c"),
      say="התשובה בת ארבעת הביטים ארוכה מדי: השארית היא תמיד בדיוק אָר ביטים."),
    P("והאחרונה מתקבלת כשמוסיפים ארבעה אפסים, כאורך $G$, במקום שלושה.", do=show("q-x-d", "q-n-d"),
      say="והאחרונה מתקבלת כשמוסיפים ארבעה אפסים, כאורך גִ'י, במקום שלושה."),
    P("המפתח: $r$ אפסים בהתחלה, ו-$r$ ביטים בסוף. $r$ הוא תמיד האורך של $G$ פחות אחת.", hold=0.5,
      say="המפתח: אָר אפסים בהתחלה, ואָר ביטים בסוף. אָר הוא תמיד האורך של גִ'י פחות אחת."),
], stage=XDIV,
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>חשבו את שארית ה-CRC עבור $D=111001$ ו-$G=1011$.</div>'
         + st.options("q", OPTS, notes={"b": "בלי אפסים", "c": "ארוכה מדי", "d": "4 אפסים"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: $r$ הוא האורך של המחולל פחות אחת.", do=show("r-1"),
      say="לסיכום: אָר הוא האורך של המחולל פחות אחת."),
    P("מוסיפים $r$ אפסים, ובכל פעם שהביט המוביל הוא אחת, עושים XOR עם $G$ מיושר אליו.", do=show("r-2"),
      say="מוסיפים אָר אפסים, ובכל פעם שהביט המוביל הוא אחת, עושים אֶקְס אוֹר עם גִ'י מיושר אליו."),
    P("השארית היא $r$ הביטים האחרונים, כולל אפסים מובילים.", do=show("r-3"),
      say="השארית היא אָר הביטים האחרונים, כולל אפסים מובילים."),
    P("והמסגרת שנשלחת היא הנתונים, ואחריהם השארית. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.row("r-0", w.mono(D) + " + " + '<b class="lk-ok">' + R + "</b>", hidden=False, cls="ltr")),
   panel=st.card("r-1", "rule", "🔑 $r$ = אורך $G$ פחות 1")
         + st.card("r-2", "ex", "מוביל 1: XOR עם $G$ · מוביל 0: מתקדמים")
         + st.card("r-3", "rule", "🔑 $R$: בדיוק $r$ ביטים")
         + st.card("r-4", "ex", "נשלח: $D$ ואחריו $R$"))

VIDEO = Video("L05", "link", "CRC: חישוב השארית", [title, xor, setup, div, exam, recap], bank={})
