# -*- coding: utf-8 -*-
"""L03 · זוגיות דו-ממדית: איתור הביט — video script (build: tools/video/vid.py L03).

Source: courses/link/C03.js (lesson + goal: find the flipped bit in a 2D even-parity table by row x column, and say
when it can be corrected and when only detected).
Exam part: an original question "בסגנון מבחן" (bank={}): the flipped bit sits in the CHECK ROW. The only bank 2D-parity
item, 25A-A-Q3, is in the C08 boss.
Avoided on purpose: the lesson's table and the four quiz tables of C03 (incl. C03-Q4, a flip in the check column) and
C03-Q6's case (two flips in one row): the two-error scene here has flips in different rows and columns.
All tables come from w_link.build2d (a valid even table, asserted) and w_link.flip2d; every broken row/column is the
checker's failing(), asserted below.
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_link as w

# ---------------------------------------------------------------- tables (verified)
G0 = w.build2d(["1011", "0110", "1100", "0101"])
assert G0[-1] == [0, 1, 0, 0, 1] and [r[-1] for r in G0] == [1, 0, 0, 0, 1]
G1 = w.flip2d(G0, [(2, 3)])
assert w.failing(G1) == ([2], [3]) and G1[1] == [0, 1, 0, 0, 0]
assert [sum(r) for r in G1] == [4, 1, 2, 2, 2] and sum(r[2] for r in G1) == 1
assert w.failing(w.flip2d(G1, [(2, 3)])) == ([], [])                # flipping it back repairs every row and column
FIG1, _ = w.grid2d("g1", G1, hidden=False)

G2 = w.flip2d(G0, [(1, 1), (3, 4)])
ALT = w.flip2d(G0, [(1, 4), (3, 1)])
assert w.failing(G2) == w.failing(ALT) == ([1, 3], [1, 4])          # two different error pairs, same picture
FIG2, _ = w.grid2d("g2", G2, hidden=False)

# exam-style: one flip, in the check row
X0 = w.build2d(["1001", "0111", "1010", "0011"])
X1 = w.flip2d(X0, [(5, 2)])
RX, CX = w.failing(X1)
assert (RX, CX) == ([5], [2])
assert all(sum(X1[i]) % 2 == 0 for i in range(4))                   # every data row looks fine: the trap
assert sum(r[4] for r in X1) % 2 == 0                               # column 5 is fine: not the corner
assert sum(X1[4]) == 3 and [r[1] for r in X1] == [0, 1, 0, 0, 0]  # check row: 3 ones; column 2: one 1
FIGX, _ = w.grid2d("gx", X1, hidden=False)
OPTS_V = {"a": "שורה 5, עמודה 2", "b": "אין שגיאה: כל שורות הנתונים תקינות",
          "c": "שורה 5, עמודה 5", "d": "יש שגיאה, אבל אי אפשר לדעת איפה"}
assert OPTS_V["a"] == f"שורה {RX[0]}, עמודה {CX[0]}"
OPTS = list(OPTS_V.items())

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נשדרג את ביט הזוגיות: נסדר את הביטים בטבלה, ונוסיף זוגיות בשני כיוונים."),
    P("ככה אפשר לא רק לגלות שגיאה, אלא גם למצוא בדיוק איזה ביט התהפך."),
    P("ובסוף נפתור שאלה בסגנון מבחן, עם שגיאה במקום מפתיע.", hold=0.4),
], stage='<div class="kicker">L03 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>זוגיות דו-ממדית: איתור הביט</h1>'
         '<p>למצוא בטבלת זוגיות דו-ממדית איזה ביט התהפך (שורה ועמודה), ולהסביר מתי אפשר לתקן ומתי רק לזהות.</p>',
   layout="title")

BASE, _ = w.grid2d("g0", G0, hidden=False)
build = Scene("build", "בניית הטבלה", [
    P("מסדרים את הנתונים בטבלה: כאן ארבע שורות של ארבעה ביטים."),
    P("לכל שורה מוסיפים ביט זוגיות בסוף, כך שבכל שורה יהיה מספר זוגי של אחדות.", do=show("b-1")),
    P("ולכל עמודה מוסיפים ביט זוגיות בתחתית: זו שורת הבדיקה.", do=show("b-2")),
    P("הביט בפינה מכסה את שורת הבדיקה עצמה. גם בה מספר האחדות זוגי.", do=show("b-3")),
    P("בטבלה תקינה, **כל** שורה וכל עמודה מכילות מספר זוגי של אחדות.",
      do=show(*[f"g0-rc{i}" for i in range(1, 6)], *[f"g0-cc{j}" for j in range(1, 6)], "b-4")),
    P("הספירה כוללת תמיד את ביטי הבדיקה. הם חלק מהטבלה כמו כל ביט אחר.", hold=0.3),
], stage=BASE,
   panel=st.card("b-1", "ex", "עמודה אחרונה: זוגיות של כל <b>שורה</b>")
         + st.card("b-2", "ex", "שורה אחרונה: זוגיות של כל <b>עמודה</b>")
         + st.card("b-3", "plain", "הפינה: זוגיות של שורת הבדיקה")
         + st.card("b-4", "rule", "🔑 תקינה: הכל זוגי, כולל ביטי הבדיקה"))

locate = Scene("locate", "איתור הביט", [
    P("עכשיו המקבל קיבל את הטבלה הזו. ביט אחד התהפך בדרך. איזה?"),
    P("שלב ראשון: סופרים אחדות בכל שורה, כולל עמודת הבדיקה.", do=show(*[f"g1-rc{i}" for i in range(1, 6)])),
    P("בשורה השנייה יש אחדה אחת בלבד. אחת זה אי-זוגי: השורה השנייה **שבורה**.", do=show("l-1")),
    P("שלב שני: סופרים אחדות בכל עמודה, כולל שורת הבדיקה.", do=show(*[f"g1-cc{j}" for j in range(1, 6)])),
    P("בעמודה השלישית יש אחדה אחת. גם היא שבורה. כל השאר זוגיות.", do=show("l-2")),
    P("שלב שלישי: החיתוך. שורה שתיים, עמודה שלוש. זה הביט שהתהפך.", do=show("g1-ring-2-3", "l-3")),
    P("למה דווקא הוא? כי רק ביט בחיתוך שובר את השורה הזו **וגם** את העמודה הזו.", do=show("l-4")),
    P("והתיקון פשוט: הופכים אותו בחזרה. הוא אפס, אז מחזירים אותו לאחת, וכל השורות והעמודות שוב זוגיות.",
      do=show("g1-fix-2-3"), hold=0.4),
], stage=FIG1,
   panel=st.card("l-1", "ex", "שורה 2: אחדה אחת ← שבורה")
         + st.card("l-2", "ex", "עמודה 3: אחדה אחת ← שבורה")
         + st.card("l-3", "rule", "🔑 החיתוך: שורה 2, עמודה 3")
         + st.card("l-4", "plain", "רק החיתוך שובר את שתיהן"))

two = Scene("two", "שתי שגיאות", [
    P("ומה אם התהפכו **שני** ביטים, בשורות שונות ובעמודות שונות?"),
    P("עכשיו נשברות שתי שורות, הראשונה והשלישית.", do=show(*[f"g2-rc{i}" for i in range(1, 6)])),
    P("ושתי עמודות, הראשונה והרביעית.", do=show(*[f"g2-cc{j}" for j in range(1, 6)])),
    P("יש ארבעה חיתוכים אפשריים. ושני זוגות שונים של שגיאות נותנים בדיוק את אותה תמונה.",
      do=show("g2-ring-1-1", "g2-ring-3-4", "g2-ring-1-4", "g2-ring-3-1", "t-1")),
    P("אז המקבל **יודע** שיש שגיאה, אבל לא יודע אילו ביטים להפוך. הוא מזהה, ולא מתקן.", do=show("t-2")),
    P("זה הכלל: שגיאה בביט יחיד מזהים ומתקנים. משתי שגיאות והלאה, לכל היותר מזהים.", do=show("t-3"),
      hold=0.4),
], stage=FIG2,
   panel=st.card("t-1", "ex", "ביטים 1,1 ו-3,4 <b>או</b> 1,4 ו-3,1: אותה תמונה")
         + st.card("t-2", "trap", "⚠️ מזהה, אבל לא יודע מה לתקן")
         + st.card("t-3", "rule", "🔑 שגיאה יחידה: מזהה <b>ומתקן</b>"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: טבלת even parity דו-ממדית. ביט אחד התהפך. איפה?"),
    P("סופרים את השורות. בארבע שורות הנתונים יש מספר זוגי של אחדות.",
      do=show(*[f"gx-rc{i}" for i in range(1, 5)])),
    P("וכאן המלכודת: מי שעוצר כאן חושב שאין שגיאה. אבל עוד לא ספרנו את שורת הבדיקה!", do=show("x-t")),
    P("בשורת הבדיקה יש שלוש אחדות. שלוש אי-זוגי: היא השורה השבורה.", do=show("gx-rc5")),
    P("עכשיו העמודות. רק בעמודה השנייה יש מספר אי-זוגי: אחדה אחת.",
      do=show(*[f"gx-cc{j}" for j in range(1, 6)])),
    P("החיתוך: שורה חמש, עמודה שתיים. ביט הבדיקה של העמודה השנייה הוא זה שהתהפך.",
      do=show("gx-ring-5-2", "q-ok-a")),
    P("״אין שגיאה״ נופלת: שורת הבדיקה ועמודה שתיים שבורות, אז יש שגיאה.", do=show("q-x-b", "q-n-b")),
    P("הפינה נופלת: בעמודה החמישית יש מספר זוגי של אחדות, אז היא לא שבורה.", do=show("q-x-c", "q-n-c")),
    P("ו״אי אפשר לדעת איפה״ נופלת: שורה אחת ועמודה אחת שבורות, ולכן החיתוך יחיד.",
      do=show("q-x-d", "q-n-d")),
    P("גם ביט בדיקה יכול להתהפך, ומאתרים אותו בדיוק באותה שיטה.", hold=0.5),
], stage=w.stack(FIGX, st.card("x-t", "trap", "⚠️ גם את שורת הבדיקה סופרים"), gap=20),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>' + w.ltr("even parity")
         + ' דו-ממדי, ביט אחד התהפך. היכן השגיאה?</div>'
         + st.options("q", OPTS, notes={"b": "שורה 5 שבורה", "c": "עמודה 5 זוגית", "d": "חיתוך יחיד"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: סופרים אחדות בכל שורה ובכל עמודה, כולל ביטי הבדיקה.", do=show("r-1")),
    P("שורה אי-זוגית ועמודה אי-זוגית: החיתוך שלהן הוא הביט שהתהפך, ומתקנים אותו.", do=show("r-2")),
    P("גם ביט בדיקה יכול להיות החיתוך.", do=show("r-3")),
    P("ושתי שגיאות: מזהים, אבל לא תמיד יודעים מה לתקן. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.grid2d("gr", G1, hidden=False)[0]),
   panel=st.card("r-1", "rule", "🔑 סופרים גם את ביטי הבדיקה")
         + st.card("r-2", "rule", "🔑 שורה × עמודה = הביט")
         + st.card("r-3", "ex", "החיתוך יכול להיות בשורת או בעמודת הבדיקה")
         + st.card("r-4", "trap", "⚠️ שתי שגיאות: מזהים, לא מתקנים"))
recap.phrases[1].do += show("gr-ring-2-3")

VIDEO = Video("L03", "link", "זוגיות דו-ממדית: איתור הביט", [title, build, locate, two, exam, recap], bank={})
