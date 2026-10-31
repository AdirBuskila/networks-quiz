# -*- coding: utf-8 -*-
"""I05 · Longest Prefix Match — video script (build: tools/video/vid.py I05).

Source: courses/ip/C05.js (lesson + goal: choose the forwarding-table entry by the longest matching prefix).
Exam part: an original question "בסגנון מבחן" (bank={}). Every longest-prefix question of the bank is the C07 boss
item 23A-B-Q10 / 25A-A-Q6 or a content twin of 23A-B-Q10 (SAMP-1-Q11, SAMP-2-Q11, 23A-A-Q8, 25A-B-Q15, 26A-A-Q9: the
same 25.36.67.5 table), so none is solved here. The trap of those questions (host bits written in an entry are
not checked) is taught on a table of my own.
Avoided on purpose: the C05 quiz tables (10.x, 11.1.1.1, 172.16.37.9, 192.168.4.200, 25.36.64.0/16) and the lesson's
12.100.64.0/20. Worked table: 87.20.0.0/16, 87.20.96.0/19, 87.20.112.0/21, 0.0.0.0/0 with three destinations;
exam: 141.70.37.100 against four entries; the entry written with host bits (141.70.37.200/26) does NOT match, unlike
boss 25A-A-Q6. Every match and every winner is computed by w_ip.lpm (ipaddress).
"""
import ipaddress as ia
from vid import P, Scene, Video, show, hide
import stage as st
import w_ip as w

# ---------------------------------------------------------------- numbers (verified)
T1 = [("A", "87.20.0.0/16"), ("B", "87.20.96.0/19"), ("C", "87.20.112.0/21"), ("D", "0.0.0.0/0")]
D1, D2, D3 = "87.20.115.9", "87.20.120.1", "88.1.1.1"
F1, W1, M1 = w.ftable("f1", D1, T1)
F2, W2, M2 = w.ftable("f2", D2, T1)
F3, W3, M3 = w.ftable("f3", D3, T1)
assert (W1, M1) == ("C", {"A": True, "B": True, "C": True, "D": True})
assert (W2, M2) == ("B", {"A": True, "B": True, "C": False, "D": True})
assert (W3, M3) == ("D", {"A": False, "B": False, "C": False, "D": True})
assert w.block("87.20.96.0/19") == ("87.20.96.0", "87.20.127.255")
assert w.block("87.20.112.0/21") == ("87.20.112.0", "87.20.119.255")
# the bit picture: C = 87.20.112.0/21, its first 21 bits against the two destinations
bc, b1, b2 = w.bits32("87.20.112.0"), w.bits32(D1), w.bits32(D2)
assert bc[:21] == b1[:21] and bc[:21] != b2[:21]
assert [i for i in range(21) if bc[i] != b2[i]] == [20]               # only the 21st bit differs
assert format(112, "08b") == "01110000" and format(115, "08b") == "01110011" and format(120, "08b") == "01111000"

# exam-style: 141.70.37.100
TX = [("A", "141.70.0.0/16"), ("B", "141.70.32.0/21"), ("C", "141.70.37.200/26"), ("D", "141.70.36.0/23")]
DX = "141.70.37.100"
FX, WX, MX = w.ftable("fx", DX, TX)
assert (WX, MX) == ("D", {"A": True, "B": True, "C": False, "D": True})
assert w.block("141.70.32.0/21") == ("141.70.32.0", "141.70.39.255")
assert w.block("141.70.37.200/26") == ("141.70.37.192", "141.70.37.255")   # written .200 (not aligned): covers 192-255
assert ia.ip_network("141.70.37.200/26", strict=False).network_address != ia.ip_address("141.70.37.200")
assert ia.ip_address(DX) not in ia.ip_network("141.70.37.200/26", strict=False)
assert w.block("141.70.36.0/23") == ("141.70.36.0", "141.70.37.255")
OPTS = [("a", w.ltr("A")), ("b", w.ltr("B")), ("c", w.ltr("C")), ("d", w.ltr("D")), ("e", "החבילה תושלך")]
CORRECT = {"A": "a", "B": "b", "C": "c", "D": "d"}[WX]
assert CORRECT == "d"


def lit(pfx, m, win=None):
    """reveal ranges and verdicts of every row; light the winner"""
    ids = [x for nm in m for x in (f"{pfx}-rg-{nm}", f"{pfx}-v-{nm}")]
    return show(*ids, *([f"{pfx}-hi-{win}"] if win else []))


def solid(svg, pfx):
    for c in ("pre", "host", "bor"):
        svg = svg.replace(f'class="ip-{c} h"', f'class="ip-{c}"')
    return svg.replace(f'id="{pfx}-cut" class="h"', f'id="{pfx}-cut"')


# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("נתב מקבל חבילה, וצריך להחליט לאן לשלוח אותה. בשביל זה יש לו טבלת ניתוב."),
    P("אבל לפעמים כמה שורות בטבלה מתאימות לאותה כתובת. מי מנצחת?"),
    P("בסרטון הזה נלמד את הכלל, ונפתור שאלה בסגנון מבחן.", hold=0.4),
], stage='<div class="kicker">I05 · כתובות, CIDR ו-Longest Prefix</div><h1>Longest Prefix Match</h1>'
         '<p>לבחור את הכניסה הנכונה בטבלת ניתוב לפי הקידומת הארוכה ביותר שמתאימה לכתובת היעד.</p>', layout="title")

table1 = Scene("table", "טבלת ניתוב", [
    P("זו טבלת ניתוב. כל כניסה היא קידומת, וכל קידומת מכסה בלוק של כתובות.", do=show("t-f")),
    P("ליד כל כניסה נכתוב את הטווח שהיא מכסה, בדיוק כמו בגבולות בלוק.", do=show(*[f"f1-rg-{n}" for n, _ in T1])),
    P("שימו לב: הבלוקים מוכלים זה בזה. סלאש 21 נמצא בתוך סלאש 19, שנמצא בתוך סלאש 16.",
      say="שימו לב: הבלוקים מוכלים זה בזה. סלאש עשרים ואחת נמצא בתוך סלאש תשע עשרה, שנמצא בתוך סלאש שש עשרה."),
    P("והשורה האחרונה, סלאש אפס, היא ברירת המחדל: אפס ביטים לבדוק, ולכן היא מתאימה לכל כתובת.",
      say="והשורה האחרונה, סלאש אפס, היא ברירת המחדל: אפס ביטים לבדוק, ולכן היא מתאימה לכל כתובת."),
    P("מגיעה חבילה ליעד שעל המסך. בבית השלישי כתוב 115.", do=show("t-d"),
      say="מגיעה חבילה ליעד שעל המסך. בבית השלישי כתוב מאה וחמש עשרה."),
    P("115 נמצא בכל אחד מהטווחים, ולכן **כל ארבע** הכניסות מתאימות.", do=show(*[f"f1-v-{n}" for n, _ in T1]),
      say="מאה וחמש עשרה נמצא בכל אחד מהטווחים, ולכן כל ארבע הכניסות מתאימות."),
    P("הכלל: בוחרים את הכניסה עם הקידומת **הארוכה ביותר**. כאן סלאש 21.", do=show("f1-hi-C", "t-c1"),
      say="הכלל: בוחרים את הכניסה עם הקידומת הארוכה ביותר. כאן סלאש עשרים ואחת."),
    P("למה? קידומת ארוכה יותר מתארת קבוצה קטנה יותר של כתובות. היא המידע **הספציפי** ביותר.", do=show("t-c2"), hold=0.3),
], stage=w.stack(f'<div id="t-f" class="h">{F1}</div>', w.row("t-d", "יעד: " + w.mono(D1), cls="sm"), gap=30),
   panel=st.card("t-c1", "rule", "🔑 מבין הכניסות שמתאימות: ה-p הגדול ביותר")
         + st.card("t-c2", "ex", "קידומת ארוכה = בלוק קטן = מידע ספציפי"))

bits = Scene("bits", "התאמה בביטים", [
    P("מה בדיוק אומר שכניסה מתאימה? משווים רק את p הביטים הראשונים.",
      say="מה בדיוק אומר שכניסה מתאימה? משווים רק את פִּי הביטים הראשונים."),
    P("למעלה הכניסה עם סלאש 21. מתחתיה היעד הקודם: 21 הביטים הראשונים זהים. מתאים.", do=show("b-c", "b-1", "b-ok"),
      say="למעלה הכניסה עם סלאש עשרים ואחת. מתחתיה היעד הקודם: עשרים ואחד הביטים הראשונים זהים. מתאים."),
    P("ולמטה יעד חדש, עם 120 בבית השלישי. הביט ה-21 שונה, ולכן הכניסה הזו **לא** מתאימה.", do=show("b-2", "b-no"),
      say="ולמטה יעד חדש, עם מאה ועשרים בבית השלישי. הביט העשרים ואחד שונה, ולכן הכניסה הזו לא מתאימה."),
    P("מה שאחרי הקו לא נבדק בכלל. אלה ביטי מארח, וכל ערך שלהם מתאים.", do=show("b-r"), hold=0.3),
], stage=w.stack(f'<div id="b-c" class="h">{solid(w.strip("sc", "87.20.112.0", 21), "sc")}</div>',
                 f'<div id="b-1" class="h">{solid(w.strip("s1", D1, 21), "s1")}</div>',
                 f'<div id="b-2" class="h">{solid(w.strip("s2", D2, 21), "s2")}</div>', gap=0),
   panel=st.card("b-k", "plain", "כניסה: " + w.mono("87.20.112.0/21"))
         + st.card("b-ok", "plain", '<b class="ip-ok">✓</b> ' + w.mono(D1))
         + st.card("b-no", "plain", '<b class="ip-bad">✗</b> ' + w.mono(D2))
         + st.card("b-r", "rule", "🔑 משווים רק את p הביטים הראשונים"))
bits.phrases[1].do += show("b-k")

miss = Scene("miss", "עוד שני יעדים", [
    P("נשלח את היעד החדש דרך הטבלה.", do=show("m-f2", "m-d2")),
    P("120 לא בטווח 112 עד 119, ולכן הכניסה של סלאש 21 נופלת. שלוש האחרות מתאימות.", do=lit("f2", M2),
      say="מאה ועשרים לא בטווח מאה ושתים עשרה עד מאה ותשע עשרה, ולכן הכניסה של סלאש עשרים ואחת נופלת. שלוש האחרות מתאימות."),
    P("הארוכה מבין המתאימות: סלאש 19.", do=show("f2-hi-B"), hold=0.3,
      say="הארוכה מבין המתאימות: סלאש תשע עשרה."),
    P("ועוד יעד, שמתחיל ב-88. הוא לא נמצא באף אחד משלושת הבלוקים.", do=hide("m-l2") + show("m-l3", "m-d3"),
      say="ועוד יעד, שמתחיל בשמונים ושמונה. הוא לא נמצא באף אחד משלושת הבלוקים."),
    P("נשארה רק ברירת המחדל, סלאש אפס. החבילה יוצאת דרכה, ולא נזרקת.", do=lit("f3", M3, "D"), hold=0.3),
    P("החבילה הייתה נזרקת רק אם אין שום התאמה, וגם אין ברירת מחדל.", do=show("m-c1")),
], stage=('<div class="swap" style="--swap-h:430px">'
          f'<div id="m-l2"><div id="m-f2" class="h">{F2}</div>{w.row("m-d2", "יעד: " + w.mono(D2), cls="sm")}</div>'
          f'<div id="m-l3" class="h">{F3}{w.row("m-d3", "יעד: " + w.mono(D3), cls="sm")}</div></div>'),
   panel=st.card("m-c1", "rule", "🔑 אין אף התאמה? ברירת המחדל " + w.mono("0.0.0.0/0") + " מתאימה תמיד"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: לאיזו כניסה תנותב חבילה ליעד שעל המסך?", do=show("x-f")),
    P("נחשב את הטווח של כל כניסה. הכניסה הראשונה, סלאש 16, מכסה את כל מה שמתחיל ב-141.70. מתאימה.",
      do=show("fx-rg-A", "fx-v-A"),
      say="נחשב את הטווח של כל כניסה. הכניסה הראשונה, סלאש שש עשרה, מכסה את כל מה שמתחיל במאה ארבעים ואחת נקודה שבעים. מתאימה."),
    P("הכניסה השנייה, סלאש 21: בבית השלישי בלוק בגודל שמונה, 32 עד 39. ו-37 בפנים. מתאימה.", do=show("fx-rg-B", "fx-v-B"),
      say="הכניסה השנייה, סלאש עשרים ואחת: בבית השלישי בלוק בגודל שמונה, שלושים ושתיים עד שלושים ותשע. ושלושים ושבע בפנים. מתאימה."),
    P("בכניסה השלישית כתוב 37 ואחריו 200, וזה נראה כמו התאמה מושלמת. אבל זו המלכודת.", do=show("x-t"),
      say="בכניסה השלישית כתוב שלושים ושבע ואחריו מאתיים, וזה נראה כמו התאמה מושלמת. אבל זו המלכודת."),
    P("סלאש 26 בודק שני ביטים מהבית האחרון: בלוקים של 64, ו-200 נופל בבלוק 192 עד 255. היעד הוא 100. לא מתאימה.",
      do=show("fx-rg-C", "fx-v-C"),
      say="סלאש עשרים ושש בודק שני ביטים מהבית האחרון: בלוקים של שישים וארבע, ומאתיים נופל בבלוק מאה תשעים ושתיים עד מאתיים חמישים וחמש. היעד הוא מאה. לא מתאימה."),
    P("והכניסה עם סלאש 23 מכסה 36 ו-37 בבית השלישי. מתאימה.", do=show("fx-rg-D", "fx-v-D"),
      say="והכניסה עם סלאש עשרים ושלוש מכסה שלושים ושש ושלושים ושבע בבית השלישי. מתאימה."),
    P("שלוש מתאימות: 16, 21 ו-23. הארוכה היא סלאש 23, הכניסה D.", do=show("fx-hi-D", "q-ok-d"),
      say="שלוש מתאימות: שש עשרה, עשרים ואחת ועשרים ושלוש. הארוכה היא סלאש עשרים ושלוש, הכניסה דִּי."),
    P("A ו-B מתאימות, אבל קצרות יותר. C הכי ארוכה, אבל לא מתאימה, ולכן לא משתתפת בכלל.",
      do=show("q-x-a", "q-n-a", "q-x-b", "q-n-b", "q-x-c", "q-n-c"),
      say="אֵיי ובִּי מתאימות, אבל קצרות יותר. סִי הכי ארוכה, אבל לא מתאימה, ולכן לא משתתפת בכלל."),
    P("והחבילה לא תושלך: יש כניסות שמתאימות.", do=show("q-x-e"), hold=0.5),
], stage=w.stack(f'<div id="x-f" class="h">{FX}</div>', w.row("x-d", "יעד: " + w.mono(DX), hidden=False, cls="sm"),
                 st.card("x-t", "trap", "⚠️ ביטי המארח של הכניסה לא נבדקים:<br>" + w.mono("141.70.37.200/26 = 141.70.37.192/26")),
                 gap=24),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>לאיזו כניסה תנותב חבילה עם כתובת היעד '
         '<span class="ip-mono">141.70.37.100</span>?</div>'
         + '<div class="ip-osm">' + st.options("q", OPTS, notes={"a": "קצרה יותר", "b": "קצרה יותר", "c": w.ltr("37.192–255")})
         + "</div>")

recap = Scene("recap", "סיכום", [
    P("לסיכום: לכל כניסה מחשבים את הטווח שלה, או משווים רק את p הביטים הראשונים.", do=show("r-1"),
      say="לסיכום: לכל כניסה מחשבים את הטווח שלה, או משווים רק את פִּי הביטים הראשונים."),
    P("מבין הכניסות שמתאימות, בוחרים את הקידומת הארוכה ביותר.", do=show("r-2")),
    P("ביטים שכתובים אחרי הקידומת לא נבדקים. ובלי שום התאמה, הולכים לברירת המחדל.", do=show("r-3")),
    P("כניסה ארוכה שלא מתאימה לא משתתפת בכלל. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(F1.replace('id="f1-', 'id="f9-').replace('id="f1"', 'id="f9"')
                 .replace('ip-frg h"', 'ip-frg"').replace('class="ip-fv h"', 'class="ip-fv"')
                 .replace('id="f9-hi-C" class="ip-fhi h"', 'id="f9-hi-C" class="ip-fhi"'), gap=20),
   panel=st.card("r-1", "rule", "🔑 טווח לכל כניסה, או p ביטים ראשונים")
         + st.card("r-2", "rule", "🔑 מבין המתאימות: p הגדול ביותר")
         + st.card("r-3", "rule", "🔑 אין התאמה? " + w.mono("0.0.0.0/0"))
         + st.card("r-4", "trap", "⚠️ כניסה שלא מתאימה לא משתתפת, גם אם היא ארוכה"))

VIDEO = Video("I05", "ip", "Longest Prefix Match", [title, table1, bits, miss, exam, recap], bank={})
