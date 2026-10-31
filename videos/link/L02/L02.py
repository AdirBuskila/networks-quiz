# -*- coding: utf-8 -*-
"""L02 · ביט זוגיות — video script (build: tools/video/vid.py L02).

Source: courses/link/C02.js (lesson + goal: compute an even / odd parity bit, check a received word, and know which
errors one parity bit detects).
Exam part: an original question "בסגנון מבחן" (bank={}): under odd parity, which received word is flagged. The bank's
parity items 22S-A-Q10 / 22S-A-Q11 are in the C08 boss; no other bank question is about one-dimensional parity.
Avoided on purpose: the C02 quiz words (1101011, 0110100, 10110101, 10110010 -> 11110000) and the lesson's 1011001;
the question shape "even parity, is this word in error" (C02-Q3) is not asked: the exam part is odd parity over four
words. Every count, parity bit and verdict comes from w_link (ones, parity_bit) and is asserted below; the claim
"detects exactly the odd numbers of flips" is brute-forced over every flip set of the example word.
"""
import itertools
from vid import P, Scene, Video, show, hide
import stage as st
import w_link as w

# ---------------------------------------------------------------- numbers (verified)
D = "1100010"
assert w.ones(D) == 3
PE, PO = w.parity_bit(D, "even"), w.parity_bit(D, "odd")
assert (PE, PO) == ("1", "0")
WE, WO = D + PE, D + PO
assert (WE, WO) == ("11000101", "11000100") and w.ones(WE) == 4 and w.ones(WO) == 3

# errors on the even word
E1 = w.flip(WE, {4})                     # one flip
E2 = w.flip(WE, {2, 6})                  # two flips
E3 = w.flip(WE, {1, 4, 7})               # three flips
assert (E1, E2, E3) == ("11010101", "10000001", "01010111")
assert [w.ones(x) for x in (E1, E2, E3)] == [5, 2, 5]
for k in range(1, 9):                    # detected <=> odd number of flips, for every flip set
    for pos in itertools.combinations(range(1, 9), k):
        assert (w.ones(w.flip(WE, set(pos))) % 2 == 1) == (k % 2 == 1)

# exam-style: odd parity, which received word is flagged
OPTS_W = {"a": "10110100", "b": "01100111", "c": "11100000", "d": "00000001"}
FLAG = [k for k, x in OPTS_W.items() if w.ones(x) % 2 == 0]           # odd parity: an even count is an error
assert FLAG == ["a"]
assert {k: w.ones(x) for k, x in OPTS_W.items()} == {"a": 4, "b": 5, "c": 3, "d": 1}
assert w.ones(OPTS_W["b"][:-1]) == 4                                  # the trap: its data part alone is even
assert w.ones(OPTS_W["a"][:-1]) == 4 and OPTS_W["a"][-1] == "0"
OPTS = [(k, w.mono(x)) for k, x in OPTS_W.items()]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נלמד את הדרך הפשוטה ביותר לזהות שגיאה: ביט זוגיות."),
    P("נחשב אותו בשתי השיטות, even ו-odd, ונבדוק מילה שהתקבלה."),
    P("ונבין בדיוק אילו שגיאות הוא תופס, ואילו חומקות ממנו.", hold=0.4),
], stage='<div class="kicker">L02 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>ביט זוגיות</h1>'
         '<p>לחשב ביט זוגיות (even ו-odd), לבדוק מילה שהתקבלה, ולדעת אילו שגיאות זוגיות מזהה ואילו לא.</p>',
   layout="title")

idea = Scene("idea", "הרעיון", [
    P("ביטים יכולים להתהפך בדרך: אפס הופך לאחת, או אחת לאפס.", do=show("i-1")),
    P("כדי לגלות את זה, מוסיפים לנתונים **ביט אחד** נוסף: ביט הזוגיות.", do=show("i-2")),
    P("השולח והמקבל מסכימים מראש: מספר האחדות במילה כולה יהיה זוגי, או אי-זוגי.", do=show("i-3")),
    P("בשיטת even, מספר האחדות במילה, כולל הביט הנוסף, הוא **זוגי**.", do=show("i-4")),
    P("ובשיטת odd, מספר האחדות הוא **אי-זוגי**.", do=show("i-5")),
    P("ביט הזוגיות הוא פשוט מה שחסר כדי להגיע לזוגיות שסוכמה.", hold=0.3),
], stage=w.stack(w.row("i-1", "$0 \\leftrightarrow 1$ : ביט שהתהפך"),
                 w.row("i-2", "נתונים + <b>ביט זוגיות</b>"),
                 w.row("i-3", "מסכימים מראש על הזוגיות של <b>מספר האחדות</b>"), gap=40),
   panel=st.card("i-4", "rule", "🔑 " + w.ltr("even") + ": מספר אחדות <b>זוגי</b>")
         + st.card("i-5", "rule", "🔑 " + w.ltr("odd") + ": מספר אחדות <b>אי-זוגי</b>"))

calc = Scene("calc", "חישוב הביט", [
    P("נחשב. הנתונים הם $1100010$.", do=show("d0")),
    P("סופרים אחדות: אחת, שתיים, שלוש. יש שלוש אחדות.", do=show("d0-hi0", "d0-hi1", "d0-hi5", "d0-cnt")),
    P("בשיטת even צריך מספר זוגי. שלוש הוא אי-זוגי, ולכן מוסיפים אחדה: ביט הזוגיות הוא אחת.", do=show("de", "c-1")),
    P("עכשיו יש ארבע אחדות במילה כולה. ארבע זוגי, בדיוק כמו שסוכם.", do=show("de-cnt")),
    P("בשיטת odd צריך מספר אי-זוגי. שלוש כבר אי-זוגי, ולכן ביט הזוגיות הוא אפס.", do=show("do", "do-cnt", "c-2")),
    P("שימו לב: אותם נתונים, ושני ביטי זוגיות הפוכים. תמיד בודקים איזו שיטה סוכמה.", do=show("c-3"), hold=0.4),
], stage=w.stack(w.bits("d0", D, label="נתונים", count="3 אחדות"),
                 w.bits("de", WE, label="even", split=7, count="4: זוגי ✓"),
                 w.bits("do", WO, label="odd", split=7, count="3: אי-זוגי ✓"), gap=46),
   panel=st.card("c-1", "ex", w.ltr("even") + ": 3 אחדות ← ביט 1")
         + st.card("c-2", "ex", w.ltr("odd") + ": 3 אחדות ← ביט 0")
         + st.card("c-3", "trap", "⚠️ קודם בודקים איזו שיטה סוכמה"))

check = Scene("check", "בדיקה אצל המקבל", [
    P("עכשיו הצד של המקבל. הוא לא יודע מה נשלח. הוא רק סופר אחדות במה שהגיע.", do=show("c-r")),
    P("והוא סופר את **כל** האחדות, כולל ביט הזוגיות עצמו.", do=show("c-r2")),
    P("נניח שנשלחה המילה בשיטת even, והביט הרביעי התהפך.", do=show("e1", "e1-bad3")),
    P("יש עכשיו חמש אחדות. חמש אי-זוגי, וזה לא מה שסוכם: **זוהתה שגיאה**.", do=show("e1-cnt")),
    P("ומה אם שני ביטים התהפכו? כאן התהפכו הביט השני והביט השישי.", do=show("e2", "e2-bad1", "e2-bad5")),
    P("נשארו שתי אחדות. שתיים זוגי, והמקבל חושב שהכל תקין. **השגיאה חמקה**.", do=show("e2-cnt")),
    P("ושלושה ביטים? עכשיו יש חמש אחדות, אי-זוגי, ולכן שוב **מזהים**.", do=show("e3", "e3-bad0", "e3-bad3", "e3-bad6", "e3-cnt")),
], stage=w.stack(w.bits("ok", WE, hidden=False, label="נשלח", split=7, size="sm"),
                 w.bits("e1", E1, label="1 היפוך", split=7, count="5 ✗ זוהה", size="sm"),
                 w.bits("e2", E2, label="2 היפוכים", split=7, count="2 ✓ חמק", size="sm"),
                 w.bits("e3", E3, label="3 היפוכים", split=7, count="5 ✗ זוהה", size="sm"), gap=40),
   panel=st.card("c-r", "plain", "המקבל רק <b>סופר</b> אחדות")
         + st.card("c-r2", "trap", "⚠️ סופרים גם את ביט הזוגיות"))

why = Scene("why", "למה זה עובד", [
    P("למה זה מתנהג כך? כל היפוך משנה את מספר האחדות **באחת**: עוד אחדה, או אחדה אחת פחות.", do=show("y-1")),
    P("ולכן כל היפוך הופך את הזוגיות: זוגי הופך לאי-זוגי, ואי-זוגי לזוגי.", do=show("y-2")),
    P("שני היפוכים מבטלים זה את זה, וגם ארבעה, וגם כל מספר זוגי.", do=show("y-3")),
    P("לכן ביט זוגיות מזהה בדיוק את המקרים שבהם התהפך מספר **אי-זוגי** של ביטים.", do=show("y-r1")),
    P("ועוד חיסרון: גם כשהוא מזהה, הוא לא יודע **איזה** ביט התהפך. אז אי אפשר לתקן.", do=show("y-r2"),
      hold=0.4),
], stage=w.stack(w.row("y-1", "כל היפוך: מספר האחדות $\\pm 1$"),
                 w.row("y-2", "כל היפוך: זוגי ⟷ אי-זוגי"),
                 w.table("y-3", ["היפוכים", "1", "2", "3", "4", "5"],
                         [["המקבל", '<span class="lk-ok">זוהה</span>', '<span class="lk-bad">חמק</span>',
                           '<span class="lk-ok">זוהה</span>', '<span class="lk-bad">חמק</span>',
                           '<span class="lk-ok">זוהה</span>']]), gap=40),
   panel=st.card("y-r1", "rule", "🔑 מזהה מספר <b>אי-זוגי</b> של היפוכים, לא זוגי")
         + st.card("y-r2", "trap", "⚠️ לא יודע איזה ביט: מזהה, לא מתקן"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: השולח והמקבל משתמשים ב-odd parity, והביט האחרון הוא ביט הזוגיות."),
    P("התקבלו ארבע מילים. איזו מהן המקבל יסמן כשגויה?"),
    P("בשיטת odd, מילה תקינה מכילה מספר **אי-זוגי** של אחדות. סופרים בכל מילה את כל האחדות.", do=show("x-r")),
    P("במילה הראשונה יש ארבע אחדות. ארבע זוגי, ולכן **שגיאה**. זו התשובה.", do=show("q-ok-a", "q-n-a", "xa", "xa-cnt")),
    P("במילה השנייה יש חמש אחדות, אי-זוגי, ולכן היא עוברת את הבדיקה.", do=show("q-x-b", "q-n-b", "xb", "xb-cnt")),
    P("וזו המלכודת: מי שסופר רק את שבעת ביטי הנתונים, מקבל בה ארבע, וחושב שזו השגיאה.", do=show("x-t")),
    P("במילה השלישית שלוש אחדות, וברביעית אחדה אחת. שתיהן אי-זוגיות, ולכן עוברות.",
      do=show("q-x-c", "q-n-c", "q-x-d", "q-n-d")),
    P("ושימו לב לניסוח: ״עוברת״ זה לא ״ודאי תקינה״. שני היפוכים היו חומקים גם כאן.", do=show("x-t2"), hold=0.5),
], stage=w.stack(w.bits("xa", OPTS_W["a"], label="ראשונה", split=7, count="4: זוגי ✗", size="sm"),
                 w.bits("xb", OPTS_W["b"], label="שנייה", split=7, count="5: אי-זוגי ✓", size="sm"),
                 st.card("x-r", "rule", "🔑 " + w.ltr("odd") + ": תקינה = מספר אחדות אי-זוגי, <b>כולל</b> הביט האחרון"),
                 st.card("x-t", "trap", "⚠️ לא סופרים רק את ביטי הנתונים"),
                 st.card("x-t2", "trap", "⚠️ עוברת ≠ ודאי תקינה"), gap=30),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>' + w.ltr("odd parity")
         + ', הביט האחרון הוא ביט הזוגיות. איזו מילה תסומן כשגויה?</div>'
         + st.options("q", OPTS, notes={"a": "4 אחדות", "b": "5 אחדות", "c": "3 אחדות", "d": "אחדה אחת"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: ביט הזוגיות משלים את מספר האחדות לזוגיות שסוכמה מראש.", do=show("r-1")),
    P("ב-even למספר זוגי, וב-odd למספר אי-זוגי.", do=show("r-2")),
    P("המקבל סופר את כל האחדות, כולל ביט הזוגיות.", do=show("r-3")),
    P("והוא מזהה רק מספר אי-זוגי של היפוכים, ולא יודע איפה הם. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.bits("rr", WE, hidden=False, split=7, label="even")),
   panel=st.card("r-1", "rule", "🔑 משלימים את מספר האחדות")
         + st.card("r-2", "ex", w.ltr("even") + ": זוגי · " + w.ltr("odd") + ": אי-זוגי")
         + st.card("r-3", "rule", "🔑 סופרים גם את ביט הזוגיות")
         + st.card("r-4", "trap", "⚠️ מזהה 1, 3, 5... היפוכים. לא מתקן"))

VIDEO = Video("L02", "link", "ביט זוגיות", [title, idea, calc, check, why, exam, recap], bank={})
