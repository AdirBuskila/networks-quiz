# -*- coding: utf-8 -*-
"""L04 · מרחק Hamming — video script (build: tools/video/vid.py L04).

Source: courses/link/C04.js (lesson + goal: Hamming distance between words and inside a code, how many errors a code
detects and corrects, decoding a received word to the nearest codeword).
Exam part: an original question "בסגנון מבחן" (bank={}): a d=4 code and a received word at distance 2 from three
codewords. The bank's Hamming items 22S-A-Q10 / 22S-A-Q11 are in the C08 boss.
Avoided on purpose: the lesson's / quiz's code {00000, 01011, 10101, 11110} with 01001, the pair 10110/11100, the
parity pair 1001100/1001101 (C04-Q5 and the boss), and the bare "d=3 / d=5 -> detect, correct" questions (C04-Q3,
C04-Q6): the rule is taught on a d=6 code (detect 5, correct 2) and checked by brute force here.
Every distance, minimum and decoding comes from the checker's hd() and is asserted below.
"""
import itertools
from vid import P, Scene, Video, show, hide
import stage as st
import w_link as w

# ---------------------------------------------------------------- numbers (verified)
U, V = "1011010", "1110011"
DIFF = [i for i in range(7) if U[i] != V[i]]
assert DIFF == [1, 3, 6] and w.hd(U, V) == 3

C = ["000000000", "111111000", "000111111", "111000111"]
PAIRS = {(a, b): w.hd(a, b) for a, b in itertools.combinations(C, 2)}
assert list(PAIRS.values()) == [6, 6, 6, 6, 6, 6]
D = w.min_distance(C)
assert D == 6 and (D - 1, (D - 1) // 2) == (5, 2)
DT, _, _ = w.dist_table("dt", C)

RX = w.flip("111111000", {2, 8})
DR = [w.hd(RX, c) for c in C]
assert RX == "101111010" and DR == [6, 2, 4, 6] and C[DR.index(min(DR))] == "111111000" and DR.count(2) == 1
# brute force: every 1 or 2 flips decode back (unique nearest), every 1..5 flips is detected
for c in C:
    for k in (1, 2):
        for pos in itertools.combinations(range(1, 10), k):
            x = w.flip(c, set(pos))
            ds = sorted(w.hd(x, y) for y in C)
            assert min(C, key=lambda y: w.hd(x, y)) == c and ds[0] == k and ds[1] > k
    for k in range(1, 6):
        for pos in itertools.combinations(range(1, 10), k):
            assert w.flip(c, set(pos)) not in C
# four flips: detected (not a codeword) but "corrected" to the wrong word
BAD = w.flip("000000000", {1, 2, 3, 4})
assert BAD == "111100000" and BAD not in C and [w.hd(BAD, y) for y in C] == [4, 2, 8, 4]

# parity raises distance 1 to 2: all 2-bit words + even parity
P2 = [a + w.parity_bit(a, "even") for a in ("00", "01", "10", "11")]
assert P2 == ["000", "011", "101", "110"]
assert w.min_distance(["00", "01", "10", "11"]) == 1 and w.min_distance(P2) == 2

# exam-style
X = ["000000", "001111", "110011", "111100"]
DX = w.min_distance(X)
assert DX == 4 and all(v == 4 for v in (w.hd(a, b) for a, b in itertools.combinations(X, 2)))
assert (DX - 1, (DX - 1) // 2) == (3, 1)
RXX = "000011"
DRX = [w.hd(RXX, c) for c in X]
assert RXX not in X and DRX == [2, 2, 2, 6] and DRX.count(min(DRX)) == 3
OPTS_V = {"a": "מזהה שגיאה, אבל אין מילת קוד אחת שהיא הקרובה ביותר",
          "b": "מפענח ל-" + w.mono("000000") + ", המילה הראשונה במרחק 2",
          "c": "לא מזהה שגיאה",
          "d": "מתקן את שתי השגיאות, כי $d=4$"}
OPTS = list(OPTS_V.items())

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נמדוד כמה מילים רחוקות זו מזו: מרחק Hamming."),
    P("נראה איך המרחק המינימלי של קוד קובע כמה שגיאות הוא מזהה, וכמה הוא מתקן."),
    P("ובסוף נפתור שאלה בסגנון מבחן, שבה התיקון נתקע.", hold=0.4),
], stage='<div class="kicker">L04 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>מרחק Hamming</h1>'
         '<p>לחשב מרחק Hamming בין מילים ובתוך קוד, לקבוע כמה שגיאות הקוד מזהה ומתקן, ולפענח מילה שהתקבלה.</p>',
   layout="title")

dist = Scene("dist", "המרחק", [
    P("מרחק Hamming בין שתי מילים באותו אורך: מספר המקומות שבהם הן **שונות**.", do=show("d-1")),
    P("נשווה את שתי המילים האלה, מקום אחר מקום.", do=show("u", "v")),
    P("במקום השני: אפס מול אחת. שונה.", do=show("u-hi1", "v-hi1")),
    P("במקום הרביעי: אחת מול אפס. שונה.", do=show("u-hi3", "v-hi3")),
    P("ובמקום האחרון: אפס מול אחת. בשאר המקומות הן זהות.", do=show("u-hi6", "v-hi6")),
    P("שלושה מקומות שונים, ולכן המרחק הוא שלוש.", do=show("d-2")),
    P("ובמילים אחרות: זה מספר הביטים שצריך להפוך, כדי להגיע ממילה אחת לשנייה.", do=show("d-3"), hold=0.3),
], stage=w.stack(w.bits("u", U, marks=range(1, 8)), w.bits("v", V), w.big("d-2", r"d = 3"), gap=34),
   panel=st.card("d-1", "rule", "🔑 מרחק = מספר המקומות השונים")
         + st.card("d-3", "ex", "= מספר ההיפוכים ממילה למילה"))

code = Scene("code", "המרחק של קוד", [
    P("קוד הוא קבוצה של מילים **חוקיות**. השולח שולח רק אותן."),
    P("הנה קוד עם ארבע מילים באורך תשע.", do=show("dt")),
    P("מחשבים את המרחק בין כל זוג: שש השוואות.", do=show("dt-p0-1", "dt-p0-2", "dt-p0-3")),
    P("כל שש ההשוואות יוצאות שש.", do=show("dt-p1-2", "dt-p1-3", "dt-p2-3")),
    P("המרחק של הקוד הוא **המינימום**: $d=6$.",
      do=show("dt-min0-1", "dt-min0-2", "dt-min0-3", "dt-min1-2", "dt-min1-3", "dt-min2-3", "c-1"),
      say="המרחק של הקוד הוא המינימום: דִּי שווה שש."),
    P("המינימום קובע, כי השגיאה המסוכנת היא זו שמגיעה למילה החוקית **הקרובה** ביותר.", hold=0.3),
], stage=DT, panel=st.card("c-1", "rule", "🔑 $d$ = המינימום על כל הזוגות"))

rules = Scene("rules", "זיהוי ותיקון", [
    P("מה $d=6$ נותן לנו? כדי להפוך מילה חוקית אחת לאחרת, צריך לפחות שישה היפוכים.", do=show("r-1"),
      say="מה דִּי שווה שש נותן לנו? כדי להפוך מילה חוקית אחת לאחרת, צריך לפחות שישה היפוכים."),
    P("לכן עד חמישה היפוכים לא יגיעו אף פעם למילה חוקית. המקבל יראה מילה לא חוקית, **ויזהה**.", do=show("r-2")),
    P("זיהוי: עד $d-1$ שגיאות. כאן, עד חמש.", do=show("r-3")),
    P("ותיקון? מפענחים למילת הקוד **הקרובה ביותר**. התקבלה המילה הזו.", do=show("rx", "rt")),
    P("המרחקים שלה: שש, שתיים, ארבע ושש. הקרובה ביותר נמצאת במרחק שתיים, ומפענחים אליה.",
      do=show("rt-1", "rt-hi")),
    P("וזה עובד לכל היפוך של ביט אחד או שניים: המקורית הכי קרובה, וכל האחרות רחוקות יותר.", do=show("r-4")),
    P("תיקון: עד $d-1$ חלקי שתיים, מעוגל למטה. כאן, שתי שגיאות.", do=show("r-5"),
      say="תיקון: עד דִּי פחות אחת, חלקי שתיים, מעוגל למטה. כאן, שתי שגיאות."),
    P("והמלכודת: אם התהפכו **ארבעה** ביטים, למשל ארבעת הראשונים של מילת האפסים, הפענוח טועה.", do=show("r-t")),
    P("המקבל מזהה שגיאה, אבל ״מתקן״ למילה חוקית אחרת, הקרובה יותר. ככה זיהוי ותיקון שונים.", hold=0.4),
], stage=w.stack(w.row("r-1", "ממילה חוקית לאחרת: 6 היפוכים לפחות"),
                 w.row("r-2", "1 עד 5 היפוכים: מילה <b>לא חוקית</b>"),
                 w.bits("rx", RX, label="התקבלה", size="sm"),
                 w.table("rt", ["מילת קוד", "מרחק"],
                         [[w.mono(c), f'<b>{d}</b>' + ('<b id="rt-1" class="lk-ok h"> ✓ הקרובה</b>' if d == min(DR) else '')]
                          for c, d in zip(C, DR)]),
                 w.row("rt-hi", "מפענחים ל-" + w.mono("111111000")), gap=16),
   panel=st.card("r-3", "rule", "🔑 זיהוי: עד $d-1$")
         + st.card("r-5", "rule", "🔑 תיקון: עד $\\lfloor (d-1)/2 \\rfloor$")
         + st.card("r-4", "ex", "1 או 2 היפוכים: המקורית היא הקרובה ביותר")
         + st.card("r-t", "trap", "⚠️ ארבעה היפוכים: " + w.mono("000000000") + " הופכת ל-" + w.mono("111100000")
                   + ", שמפוענחת ל-" + w.mono("111111000")))

par = Scene("par", "ביט זוגיות כקוד", [
    P("עכשיו נבין למה ביט זוגיות עוזר. ניקח את כל המילים באורך שתיים: המרחק המינימלי שלהן הוא אחת.",
      do=show("p-1")),
    P("במרחק אחת, היפוך של ביט אחד מוביל ישר למילה חוקית אחרת, ואף אחד לא מגלה.", do=show("p-t")),
    P("נוסיף לכל מילה ביט even parity. שתי מילים שנבדלו בביט אחד מקבלות ביטי זוגיות **שונים**.", do=show("p-2")),
    P("ולכן עכשיו הן נבדלות בשני ביטים: המרחק המינימלי עלה לשתיים.", do=show("p-3")),
    P("ובמרחק שתיים כל שגיאה בודדת מזוהה, בדיוק כמו שראינו בכלל של $d-1$.", do=show("p-4"), hold=0.3),
], stage=w.stack(w.row("p-1", "$" + ", ".join(["00", "01", "10", "11"]) + "$: &nbsp;$d=1$", cls="ltr"),
                 w.row("p-2", "$" + ", ".join(P2) + "$", cls="ltr"),
                 w.row("p-3", "$d=2$", cls="ltr"), gap=40),
   panel=st.card("p-t", "trap", "⚠️ $d=1$: שגיאה אחת לא מזוהה")
         + st.card("p-4", "rule", "🔑 ביט זוגיות: מרחק 1 ← מרחק 2"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: הקוד מכיל ארבע מילים, והתקבלה המילה הזו. מה המקבל עושה?"),
    P("קודם המרחק של הקוד: כל שישת הזוגות במרחק ארבע. אז $d=4$.", do=show("x-1"),
      say="קודם המרחק של הקוד: כל שישת הזוגות במרחק ארבע. אז דִּי שווה ארבע."),
    P("זיהוי עד שלוש שגיאות, ותיקון: ארבע פחות אחת זה שלוש, חלקי שתיים, מעוגל למטה: אחת.", do=show("x-2")),
    P("עכשיו המרחקים של המילה שהתקבלה: שתיים, שתיים, שתיים ושש.", do=show("xt")),
    P("היא לא מילת קוד, ולכן **מזהים** שגיאה. אבל שלוש מילים קרובות לה באותה מידה.", do=show("q-ok-a", "x-3")),
    P("אין מילה קרובה ביותר אחת, ולכן אי אפשר לתקן. זו התשובה.", hold=0.2),
    P("לבחור את הראשונה מבין השלוש זה ניחוש, לא פענוח.", do=show("q-x-b", "q-n-b")),
    P("״לא מזהה״ שגויה: המילה לא נמצאת בקוד, ולכן השגיאה מזוהה.", do=show("q-x-c", "q-n-c")),
    P("ו״מתקן שתיים״ שגויה: עם $d=4$ מתקנים רק אחת. שתי שגיאות יכולות להגיע לאמצע.",
      do=show("q-x-d", "q-n-d"),
      say="ומתקן שתיים שגויה: עם דִּי שווה ארבע מתקנים רק אחת. שתי שגיאות יכולות להגיע לאמצע."),
    P("המפתח: תיקון דורש מילה קרובה **יחידה**. זיהוי דורש רק שהמילה לא תהיה חוקית.", hold=0.5),
], stage=w.stack(w.row("x-0", "קוד: " + w.mono(", ".join(X)), hidden=False),
                 w.bits("xr", RXX, hidden=False, label="התקבלה", size="sm"),
                 w.row("x-1", "$d = 4$", cls="ltr"),
                 w.row("x-2", "זיהוי: 3 &nbsp;·&nbsp; תיקון: $\\lfloor 3/2 \\rfloor = 1$"),
                 w.table("xt", ["מילת קוד", "מרחק"], [[w.mono(c), str(d)] for c, d in zip(X, DRX)]),
                 w.row("x-3", "שלוש מילים במרחק 2: אין הכרעה", cls="lk-bad"), gap=14),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>בקוד שמשמאל התקבלה המילה '
         + w.mono(RXX) + '. מה המקבל עושה?</div>'
         + st.options("q", OPTS, notes={"b": "ניחוש", "c": "לא בקוד", "d": "מתקן רק 1"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: מרחק Hamming הוא מספר המקומות השונים בין שתי מילים.", do=show("s-1")),
    P("המרחק של קוד הוא המינימום על כל הזוגות.", do=show("s-2")),
    P("מזהים עד $d-1$ שגיאות, ומתקנים עד $d-1$ חלקי שתיים, מעוגל למטה.", do=show("s-3"),
      say="מזהים עד דִּי פחות אחת שגיאות, ומתקנים עד דִּי פחות אחת, חלקי שתיים, מעוגל למטה."),
    P("ותיקון הולך למילה הקרובה ביותר, רק כשהיא יחידה. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6),
], stage=w.stack(w.big("s-0", r"\text{detect} \le d-1 \qquad \text{correct} \le \lfloor (d-1)/2 \rfloor", hidden=False, cls="xs")),
   panel=st.card("s-1", "rule", "🔑 מרחק = מקומות שונים")
         + st.card("s-2", "rule", "🔑 $d$ של קוד = המינימום")
         + st.card("s-3", "ex", "זיהוי $d-1$, תיקון $\\lfloor (d-1)/2 \\rfloor$")
         + st.card("s-4", "trap", "⚠️ תיקון רק למילה קרובה יחידה"))

VIDEO = Video("L04", "link", "מרחק Hamming", [title, dist, code, rules, par, exam, recap], bank={})
