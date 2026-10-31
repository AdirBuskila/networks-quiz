# -*- coding: utf-8 -*-
"""L01 · מסגרות וכתובות MAC — video script (build: tools/video/vid.py L01).

Source: courses/link/C01.js (lesson + goal: frame vs datagram, MAC vs IP, what the link layer does and does not do).
Exam part: an original question "בסגנון מבחן" (bank={}): the frame on the MIDDLE link of a path with two routers.
The one free link-layer bank item, 25A-C-Q8 ("which is not a link-layer task in Ethernet"), is a content twin of the
C01 quiz question C01-Q4, and 26A-A-Q14 (destination MAC = gateway) is in the C08 boss, so neither is used.
Avoided on purpose: the lesson's one-router example A-R-B (C01-Q3 / C07-Q4 ask about it): the path here has two
routers, and the worked part shows only its first and last links; the exam part asks about the middle one.
The MAC example is not the lesson's 1A:2B:3C:4D:5E:6F. Every header comes from w_link.hops() and is asserted below.
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_link as w

# ---------------------------------------------------------------- data (verified)
MAC_EX = "3C:5A:B4:07:9E:21"
GROUPS = MAC_EX.split(":")
assert len(GROUPS) == 6 and all(len(g) == 2 for g in GROUPS)
HEX_DIGITS = sum(len(g) for g in GROUPS)
assert HEX_DIGITS == 12 and len(GROUPS) * 8 == 48 == HEX_DIGITS * 4
assert int(MAC_EX.replace(":", ""), 16) < 2 ** 48

PATH = [("A", ["A"]), ("R", ["R1", "R2"]), ("S", ["S1", "S2"]), ("B", ["B"])]
HDR = w.hops(PATH, "A", "B")
assert HDR == [("A", "R1", "A", "B"), ("R2", "S1", "A", "B"), ("S2", "B", "A", "B")]
assert all(h[2:] == ("A", "B") for h in HDR)                       # IP unchanged end to end
assert len({h[:2] for h in HDR}) == 3                              # a different MAC pair on every link
FIG = w.path_fig("pf", PATH, HDR)

# exam-style: the frame on the link R-S
MID = HDR[1]
OPTS_V = {"a": ("R2", "S1", "A", "B"), "b": ("A", "B", "A", "B"), "c": ("R2", "S1", "R", "S"), "d": ("A", "S1", "A", "B")}
CORRECT = [k for k, v in OPTS_V.items() if v == MID]
assert CORRECT == ["a"]


def tx(n):
    return f"{n[0]}_{n[1]}" if len(n) == 2 else n


OPTS = [(k, w.ltr(f"MAC ${tx(a)} \\to {tx(b)}$ &nbsp;·&nbsp; IP ${c} \\to {d}$")) for k, (a, b, c, d) in OPTS_V.items()]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נכיר את שכבת הקו: מה היא מעבירה, ובאילו כתובות היא משתמשת."),
    P("נבדיל בין מסגרת לחבילה, ובין כתובת MAC לכתובת IP."),
    P("ובסוף נפתור שאלה בסגנון מבחן על מסלול עם שני נתבים.", hold=0.4),
], stage='<div class="kicker">L01 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>מסגרות וכתובות MAC</h1>'
         '<p>להבדיל בין מסגרת לחבילה, בין כתובת MAC לכתובת IP, ולדעת מה שכבת הקו עושה ומה היא לא עושה.</p>',
   layout="title")

FRAME = ('<div class="lk-row" style="display:flex;gap:0;direction:ltr;font-size:32px">'
         '<span id="i-h" class="card ex h" style="border-radius:14px 0 0 14px">כותרת MAC</span>'
         '<span id="i-d" class="card rule h" style="border-radius:0;min-width:300px">חבילה (datagram)</span>'
         '<span id="i-t" class="card ex h" style="border-radius:0 14px 14px 0">CRC</span></div>')
idea = Scene("idea", "קישור אחד", [
    P("שכבת הקו אחראית על קטע אחד בלבד בדרך: **קישור** בין שני צמתים סמוכים.", do=show("i-1")),
    P("למשל בין מחשב לסוויץ', בין סוויץ' לנתב, או בין שני נתבים.", do=show("i-2")),
    P("היחידה שהיא מעבירה נקראת **מסגרת**, ובאנגלית frame.", do=show("i-3")),
    P("בתוך המסגרת יושבת החבילה של שכבת הרשת, ה-datagram.", do=show("i-d")),
    P("ושכבת הקו עוטפת אותה: כותרת עם כתובות MAC מלפנים, ושדה בדיקה מאחור.", do=show("i-h", "i-t")),
    P("כל שכבה ושם היחידה שלה: מסגרת בקו, חבילה ברשת, וסגמנט בתעבורה.", do=show("i-4"), hold=0.3),
], stage=w.stack(w.row("i-1", "<b>צומת</b> &nbsp;⟷&nbsp; <b>צומת סמוך</b>: קישור אחד"),
                 w.row("i-2", "מחשב ⟷ סוויץ' &nbsp;·&nbsp; סוויץ' ⟷ נתב &nbsp;·&nbsp; נתב ⟷ נתב"),
                 w.row("i-3", "מסגרת = " + w.ltr("frame")),
                 FRAME, gap=40),
   panel=st.card("i-4", "rule", "🔑 קו: " + w.ltr("frame") + "<br>רשת: " + w.ltr("datagram")
                 + "<br>תעבורה: " + w.ltr("segment")))

serv = Scene("serv", "מה היא עושה", [
    P("מה שכבת הקו נותנת? שלושה שירותים עיקריים."),
    P("הראשון: יצירת מסגרות, עם התחלה וסוף ברורים, ועם כתובות MAC של המקור והיעד.", do=show("s-1")),
    P("השני: גישה לערוץ משותף. ב-Ethernet הקלאסי זה כולל זיהוי התנגשויות.", do=show("s-2")),
    P("השלישי: זיהוי שגיאות, בעזרת ביט זוגיות או CRC. נלמד את שניהם בהמשך.", do=show("s-3")),
    P("אבל שימו לב: Ethernet רק **מזהה** שגיאה. מסגרת פגומה פשוט נזרקת.", do=show("s-4")),
    P("אין אישור קבלה ואין שידור חוזר. אם צריך אמינות, שכבה גבוהה יותר כמו TCP דואגת לה.",
      say="אין אישור קבלה ואין שידור חוזר. אם צריך אמינות, שכבה גבוהה יותר, כמו טִי סִי פִּי, דואגת לה."),
    P("ומה שכבת הקו **לא** עושה? היא לא מחלקת כתובות IP: זה התפקיד של DHCP.", do=show("s-5")),
    P("והיא לא מנתבת בין רשתות. ניתוב הוא עבודה של שכבת הרשת.", do=show("s-6"), hold=0.3),
], stage=w.stack(w.row("s-1", "✓ יצירת מסגרות וכתובות MAC"),
                 w.row("s-2", "✓ גישה לערוץ משותף, זיהוי התנגשויות"),
                 w.row("s-3", "✓ זיהוי שגיאות: זוגיות, CRC"),
                 w.row("s-5", '<span class="lk-bad">✗</span> הקצאת כתובות IP'),
                 w.row("s-6", '<span class="lk-bad">✗</span> ניתוב בין רשתות'), gap=30),
   panel=st.card("s-4", "trap", "⚠️ " + w.ltr("Ethernet") + " מזהה ולא משדר מחדש: מסגרת פגומה נזרקת"))

mac = Scene("mac", "כתובת MAC", [
    P("עכשיו לכתובת MAC. זו הכתובת של כרטיס הרשת עצמו.", do=show("m-1")),
    P("הנה דוגמה. היא כתובה כשש קבוצות, ובכל קבוצה שתי ספרות הקסדצימליות.", do=show("m-2")),
    P("כל קבוצה היא בייט אחד, כלומר שמונה ביטים. שישה בייטים כפול שמונה זה 48 ביט.", do=show("m-3")),
    P("ואפשר לספור גם אחרת: 12 ספרות, וכל ספרה הקסדצימלית היא ארבעה ביטים. שוב 48.", do=show("m-4")),
    P("כתובת MAC קבועה בכרטיס. היא לא תלויה ברשת שאליה מחברים אותו.", do=show("m-5")),
    P("כתובת IP, לעומתה, היא 32 ביט, והיא נקבעת לפי הרשת שבה המחשב נמצא.", do=show("m-6")),
    P("והחשוב ביותר: כתובת MAC רלוונטית לקישור אחד בלבד, ואילו IP מזהה את המקור והיעד מקצה לקצה.", do=show("m-7"),
      hold=0.4),
], stage=w.stack(w.row("m-1", "כתובת MAC = הכתובת של כרטיס הרשת"),
                 w.big("m-2", r"\texttt{" + MAC_EX + "}"),
                 w.big("m-3", r"6 \times 8 = 48", cls="sm"),
                 w.big("m-4", r"12 \times 4 = 48", cls="sm"),
                 w.table("m-tab", ["", "MAC", "IP"], [["אורך", "48 ביט", "32 ביט"], ["נקבעת לפי", "הכרטיס", "הרשת"],
                                                       ["טווח", "קישור אחד", "מקצה לקצה"]],
                         hidden=False, ids=["m-5", "m-6", "m-7"]), gap=26),
   panel=st.card("m-r1", "rule", "🔑 MAC: 48 ביט = 6 בייטים = 12 ספרות הקסדצימליות")
         + st.card("m-r2", "rule", "🔑 IPv4: 32 ביט"))
mac.phrases[2].do += show("m-r1")
mac.phrases[5].do += show("m-r2")

path = Scene("path", "לאורך הדרך", [
    P("נראה מה קורה לכתובות בדרך. מחשב $A$ שולח חבילה למחשב $B$, דרך שני נתבים: $R$ ו-$S$.", do=show("pf"),
      say="נראה מה קורה לכתובות בדרך. מחשב אֵיי שולח חבילה למחשב בִּי, דרך שני נתבים: אָר, ואֶס."),
    P("לכל נתב יש שני ממשקים, אחד בכל רשת, ולכל ממשק כתובת MAC משלו.", do=show("p-1")),
    P("הקישור הראשון: מ-$A$ אל הנתב $R$. כתובת MAC של המקור היא של $A$, והיעד הוא הממשק $R_1$.",
      do=show("pf-f0"),
      say="הקישור הראשון: מאֵיי אל הנתב אָר. כתובת המַאק של המקור היא של אֵיי, והיעד הוא הממשק אָר אחת."),
    P("ובשכבת הרשת, כתובת IP של המקור היא $A$, והיעד הוא $B$. לא $R$!", do=show("p-2"),
      say="ובשכבת הרשת, כתובת האַיי פִּי של המקור היא אֵיי, והיעד הוא בִּי. לא אָר!"),
    P("הנתב פותח את המסגרת, מוציא את החבילה, ובונה מסגרת **חדשה** לקישור הבא.", do=show("p-3")),
    P("נדלג לרגע לקישור האחרון: מהנתב $S$ אל $B$. עכשיו ה-MAC הם $S_2$ ו-$B$.", do=show("pf-f2"),
      say="נדלג לרגע לקישור האחרון: מהנתב אֶס אל בִּי. עכשיו המַאק הם אֶס שתיים, ובִּי."),
    P("וכתובות ה-IP? עדיין $A$ ו-$B$, בדיוק כמו בקישור הראשון.",
      say="וכתובות האַיי פִּי? עדיין אֵיי ובִּי, בדיוק כמו בקישור הראשון."),
    P("זה הכלל: IP נשאר מקצה לקצה, ו-MAC מתחלף בכל קישור.", do=show("p-4")),
    P("ולכן כתובת MAC לא יכולה לזהות מחשב רחוק: היא לא שורדת את הנתב הראשון.", do=show("p-5"), hold=0.4),
], stage=FIG,
   panel=st.card("p-1", "plain", "לכל ממשק של נתב: MAC משלו")
         + st.card("p-2", "ex", "IP: תמיד המקור והיעד <b>הסופיים</b>")
         + st.card("p-3", "ex", "בכל נתב: מסגרת חדשה")
         + st.card("p-4", "rule", "🔑 IP נשאר, MAC מתחלף בכל קישור")
         + st.card("p-5", "trap", "⚠️ MAC לא מזהה מחשב מרחוק"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: אותו מסלול. אילו כתובות נמצאות במסגרת שעוברת בקישור **האמצעי**, בין $R$ ל-$S$?",
      say="שאלה בסגנון מבחן: אותו מסלול. אילו כתובות נמצאות במסגרת שעוברת בקישור האמצעי, בין אָר לאֶס?"),
    P("מתחילים מ-IP. החבילה נוצרה אצל $A$, ומיועדת ל-$B$. אף נתב לא משנה את זה.", do=show("x-1"),
      say="מתחילים מאַיי פִּי. החבילה נוצרה אצל אֵיי, ומיועדת לבִּי. אף נתב לא משנה את זה."),
    P("עכשיו MAC. בקישור הזה יש רק שני צמתים: הממשק $R_2$ של הנתב הראשון, והממשק $S_1$ של השני.",
      do=show("pe-f1"),
      say="עכשיו מַאק. בקישור הזה יש רק שני צמתים: הממשק אָר שתיים של הנתב הראשון, והממשק אֶס אחת של השני."),
    P("$R_2$ שולח, ולכן הוא המקור. $S_1$ מקבל, ולכן הוא היעד.", do=show("x-2", "q-ok-a"),
      say="אָר שתיים שולח, ולכן הוא המקור. אֶס אחת מקבל, ולכן הוא היעד."),
    P("נפסול את השאר. MAC של $A$ ושל $B$: אלה כתובות של קישורים אחרים, הן לא נמצאות כאן.",
      do=show("q-x-b", "q-n-b"),
      say="נפסול את השאר. מַאק של אֵיי ושל בִּי: אלה כתובות של קישורים אחרים, הן לא נמצאות כאן."),
    P("IP של הנתבים: זו המלכודת. הנתבים מעבירים את החבילה, אבל הם לא המקור והיעד שלה.",
      do=show("q-x-c", "q-n-c")),
    P("ו-MAC של $A$ ליד $S_1$: ערבוב. כתובת המקור מוחלפת בכל קישור, בדיוק כמו כתובת היעד.",
      do=show("q-x-d", "q-n-d"),
      say="ומַאק של אֵיי ליד אֶס אחת: ערבוב. כתובת המקור מוחלפת בכל קישור, בדיוק כמו כתובת היעד."),
    P("המפתח: ה-MAC הם של שני הקצוות של הקישור הנוכחי, וה-IP הם של שני הקצוות של כל הדרך.", hold=0.5),
], stage=w.stack(w.path_fig("pe", PATH, HDR, shown=(0, 2)),
                 w.row("x-1", "בכל הקישורים: " + w.ltr("IP $A \\to B$")),
                 w.row("x-2", "בקישור האמצעי: " + w.ltr("MAC $R_2 \\to S_1$")), gap=6),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>$A$ שולח ל-$B$ דרך הנתבים $R$ ו-$S$. '
         'מה הכתובות במסגרת בקישור שבין $R$ ל-$S$?</div>'
         + st.options("q", OPTS, notes={"b": "קישור אחר", "c": "IP לא משתנה", "d": "ערבוב"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: שכבת הקו מעבירה **מסגרות** על קישור אחד, בין שני צמתים סמוכים.", do=show("r-1")),
    P("היא יוצרת מסגרות, מנהלת גישה לערוץ, ומזהה שגיאות. היא לא מחלקת כתובות IP.", do=show("r-2")),
    P("כתובת MAC היא 48 ביט, שישה בייטים, והיא של הכרטיס.", do=show("r-3")),
    P("ובדרך: IP נשאר מקצה לקצה, ו-MAC מתחלף בכל קישור. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.row("r-5", "בכל הדרך: " + w.ltr("IP $A \\to B$"), hidden=False),
                 w.row("r-6", "בכל קישור: זוג " + w.ltr("MAC") + " חדש", hidden=False), gap=30),
   panel=st.card("r-1", "rule", "🔑 שכבת הקו: " + w.ltr("frame") + " על קישור אחד")
         + st.card("r-2", "ex", "מסגרות, גישה לערוץ, זיהוי שגיאות. לא IP")
         + st.card("r-3", "rule", "🔑 MAC = 48 ביט = 6 בייטים")
         + st.card("r-4", "trap", "⚠️ IP נשאר, MAC מתחלף"))

VIDEO = Video("L01", "link", "מסגרות וכתובות MAC", [title, idea, serv, mac, path, exam, recap], bank={})
