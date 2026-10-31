# -*- coding: utf-8 -*-
"""A05 · מטמון ו-GET מותנה — video script (build: tools/video/vid.py A05).

Source: courses/app/C05.js (lesson + goal: a web cache answers instead of the origin; conditional GET with
If-Modified-Since -> 304 without a body, which still costs one RTT; max-age in seconds; utilisation (1-h)*u and
average delay h*d_hit + (1-h)*d_miss).
Exam part: an original question "בסגנון מבחן" (bank={}): average response time with h = 0.3, 4 ms / 204 ms. The free
bank cache items are twins of C05 quiz items or boss items (24A-A-Q10 and 25A-A-Q11 are in the C09 boss, SAMP-*-Q10
are their twins); 26A-A-Q2 is solved in the A09 boss video.
Avoided on purpose: the C05 quiz and lesson numbers (1 MB / 80 Mbps / RTT 100; max-age 3600 and 7200; u 0.9 h 0.4;
h 0.6 with 10/210; h 0.5 with 20/220 and u 0.8). Worked examples: 2 MB / 50 Mbps / RTT 60; max-age=900; u 0.75 h 0.6.
Not stated as rules on purpose (they answer C05-Q4, C05-Q1/C05-Q3 and the boss items 24A-A-Q10, 22S-A-Q15,
25A-A-Q11): when a conditional GET pays off, "304 has no body", "max-age is in seconds, not ms".
"""
from fractions import Fraction as F
from vid import P, Scene, Video, show, hide
import stage as st
import w_app as w

# ---------------------------------------------------------------- conditional GET
RTT, RATE, SIZE = 60, 50, 2_000_000
TOBJ = w.tx_ms(SIZE, RATE)
assert TOBJ == 320                                        # 16,000,000 bit / 50 Mbps
FULL, COND = RTT + TOBJ, RTT                              # connection already open
assert (FULL, COND) == (380, 60) and FULL - COND == TOBJ  # the 304 saves exactly the body's transmission
MSGS = [("R", "GET /map.png  If-Modified-Since: Mon", "req"), ("L", "304 Not Modified", "resp")]
LAD, _ = w.ladder("cg", ("לקוח", "שרת"), [dict(dir=d, label=l, cls=c) for d, l, c in MSGS], slope=110, lab_w=14.2,
                  brackets=[("r", 0, 2, "RTT")])
MAXAGE = 900
assert MAXAGE // 60 == 15 and MAXAGE % 60 == 0            # 900 seconds = 15 minutes

# ---------------------------------------------------------------- utilisation
U, H = F(3, 4), F(6, 10)
assert w.new_util(H, U) == F(3, 10)                       # 0.3: only the misses (40%) still cross the link
assert H * U == F(9, 20)                                  # the trap: 0.45

# ---------------------------------------------------------------- exam-style: average delay
QH, DH, DM = F(3, 10), 4, 204
AVG = w.avg_delay(QH, DH, DM)
assert AVG == 144
WRONG = {"b": (1 - QH) * DH + QH * DM, "c": F(DH + DM, 2), "d": F(DM)}
assert WRONG == {"b": 64, "c": 104, "d": 204}
OPTV = {"a": AVG, **WRONG}
assert len(set(OPTV.values())) == 4 and [k for k, v in OPTV.items() if v == AVG] == ["a"]
OPTS = [(k, w.ltr(f"{w.fmt(v)} ms")) for k, v in OPTV.items()]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נדבר על מטמון: עותק קרוב של אובייקט, שחוסך זמן ותעבורה."),
    P("נראה מה עושה GET מותנה, מה המשמעות של max-age, ואיך מחשבים ניצולת וזמן ממוצע."),
    P("ובסוף נפתור שאלה בסגנון מבחן.", hold=0.4),
], stage='<div class="kicker">A05 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>מטמון ו-GET מותנה</h1>'
         '<p>להבין מתי מטמון חוסך זמן ותעבורה, מה עושה GET מותנה, ומה אומר max-age, ולחשב זמן ממוצע וניצולת קו.</p>',
   layout="title")

cache = Scene("cache", "מה זה מטמון", [
    P("מטמון, או web cache, שומר עותקים של אובייקטים שכבר הורדו. הוא יכול להיות בדפדפן, או שרת proxy בארגון.",
      do=show("c-1")),
    P("כשמבקשים אובייקט, הבקשה מגיעה קודם למטמון.", do=show("c-2")),
    P("אם העותק שם, זו **פגיעה**: התשובה חוזרת מקרוב, ומהר.", do=show("c-3")),
    P("ואם לא, זה **פספוס**: המטמון פונה לשרת המקור, דרך קו הגישה של הארגון.", do=show("c-4")),
    P("כך מרוויחים פעמיים: זמן תגובה קצר יותר, ופחות עומס על קו הגישה.", do=show("c-c1"), hold=0.3),
], stage=w.stack(w.row("c-1", "דפדפן &nbsp;⟵⟶&nbsp; <b>מטמון</b> &nbsp;⟵⟶&nbsp; קו גישה &nbsp;⟵⟶&nbsp; שרת המקור"),
                 w.row("c-2", "1. הבקשה מגיעה למטמון"),
                 w.row("c-3", "<span class=\"ap-ok\">פגיעה</span>: עונים מהעותק"),
                 w.row("c-4", "<span class=\"ap-bad\">פספוס</span>: פונים לשרת המקור"), gap=40),
   panel=st.card("c-c1", "rule", "🔑 מטמון: פחות זמן, פחות עומס על הקו"))

cond = Scene("cond", "GET מותנה", [
    P("אבל העותק במטמון אולי כבר לא עדכני. איך בודקים בלי להוריד שוב את כל האובייקט?"),
    P("כשקיבלנו את האובייקט, הגיעה איתו כותרת Last-Modified: מתי הוא שונה לאחרונה.", do=show("g-c1")),
    P("עכשיו שולחים GET מותנה: GET רגיל, עם הכותרת If-Modified-Since והתאריך הזה.", do=show("cg", "cg-m0")),
    P("אם האובייקט לא השתנה, השרת עונה 304 Not Modified, ומשתמשים בעותק שלנו.", do=show("cg-m1"),
      say="אם האובייקט לא השתנה, השרת עונה שלוש מאות וארבע, נוֹט מוֹדִיפַייד, ומשתמשים בעותק שלנו."),
    P("ואם הוא השתנה, השרת עונה 200, עם האובייקט החדש בגוף.", do=show("g-c2"),
      say="ואם הוא השתנה, השרת עונה מאתיים, עם האובייקט החדש בגוף."),
    P("כמה זה חוסך? תמונה של 2 MB בקו של 50 Mbps. השידור שלה: 320 מילישניות.", do=show("g-1"),
      say="כמה זה חוסך? תמונה של שני מֶגָה בַּייט, בקו של חמישים מֶגָה בִּיט לשנייה. השידור שלה: שלוש מאות ועשרים מילישניות."),
    P("ה-RTT 60. GET רגיל בחיבור פתוח: 60 ועוד 320, כלומר 380.", do=show("g-2"),
      say="האַר טִי טִי שישים. גֶט רגיל בחיבור פתוח: שישים ועוד שלוש מאות ועשרים, כלומר שלוש מאות ושמונים."),
    P("ו-304: רק 60, סבב אחד. שימו לב, גם הוא עולה RTT.", do=show("cg-b-r", "g-3", "g-c3"), hold=0.3,
      say="ושלוש מאות וארבע: רק שישים, סבב אחד. שימו לב, גם הוא עולה אַר טִי טִי."),
], stage=w.stack(LAD,
                 w.big("g-1", r"t = \frac{2 \cdot 10^{6} \cdot 8}{50 \cdot 10^{6}} = 320\ \text{ms}", cls="xs"),
                 w.big("g-2", r"\text{GET}: 60 + 320 = 380\ \text{ms}", cls="xs"),
                 w.big("g-3", r"\text{304}: 60\ \text{ms}", cls="xs"), gap=10),
   panel=st.card("g-c1", "ex", w.ltr("Last-Modified") + " ← " + w.ltr("If-Modified-Since"))
         + st.card("g-c2", "plain", "השתנה: " + w.ltr("200") + " עם הגוף החדש")
         + st.card("g-c3", "rule", "🔑 " + w.ltr("304") + ": סבב " + w.ltr("RTT") + " אחד"))

maxage = Scene("maxage", "max-age", [
    P("ויש דרך לא לשאול בכלל: הכותרת Cache-Control עם max-age.", do=show("a-1")),
    P("max-age=900 אומר שהתגובה תקפה במטמון 900 שניות, בלי לפנות לשרת.", do=show("a-2"),
      say="מַקְס אֵייג' שווה תשע מאות אומר שהתגובה תקפה במטמון תשע מאות שניות, בלי לפנות לשרת."),
    P("תשע מאות חלקי שישים: רבע שעה. כל אותו זמן, המטמון עונה לבד.", do=show("a-3"), hold=0.3),
], stage=w.stack(w.row("a-1", "Cache-Control: max-age=900", cls="ltr"),
                 w.big("a-2", r"900\ \text{s}"),
                 w.big("a-3", r"\frac{900}{60} = 15\ \text{min}", cls="sm"), gap=40),
   panel="")

calc = Scene("calc", "חישובים עם מטמון", [
    P("עכשיו חישובים. שיעור הפגיעה, $h$, הוא החלק מהבקשות שנענות מהמטמון.", do=show("k-1"),
      say="עכשיו חישובים. שיעור הפגיעה, אֵייץ', הוא החלק מהבקשות שנענות מהמטמון."),
    P("רק הפספוסים עוברים בקו הגישה. ולכן הניצולת החדשה היא $1-h$ כפול הניצולת הישנה.", do=show("k-2"),
      say="רק הפספוסים עוברים בקו הגישה. ולכן הניצולת החדשה היא אחת פחות אֵייץ', כפול הניצולת הישנה."),
    P("דוגמה: הקו מנוצל ב-0.75, ומוסיפים מטמון עם שיעור פגיעה של 0.6.", do=show("k-3"),
      say="דוגמה: הקו מנוצל בשבעים וחמישה אחוז, ומוסיפים מטמון עם שיעור פגיעה של שישים אחוז."),
    P("נשארים ארבעים אחוז מהבקשות. 0.4 כפול 0.75: הניצולת יורדת ל-0.3.", do=show("k-4"),
      say="נשארים ארבעים אחוז מהבקשות. אפס נקודה ארבע כפול אפס נקודה שבעים וחמש: הניצולת יורדת לאפס נקודה שלוש."),
    P("המלכודת: להכפיל ב-$h$ עצמו, ולקבל 0.45. אבל $h$ הוא דווקא החלק שלא עובר בקו.", do=show("k-c1"),
      say="המלכודת: להכפיל באֵייץ' עצמו, ולקבל אפס נקודה ארבעים וחמש. אבל אֵייץ' הוא דווקא החלק שלא עובר בקו."),
    P("וזמן התגובה הממוצע: ממוצע משוקלל. $h$ כפול זמן הפגיעה, ועוד $1-h$ כפול זמן הפספוס.", do=show("k-5"),
      say="וזמן התגובה הממוצע: ממוצע משוקלל. אֵייץ' כפול זמן הפגיעה, ועוד אחת פחות אֵייץ', כפול זמן הפספוס."),
], stage=w.stack(w.big("k-1", r"h = \text{hit rate}", cls="sm"),
                 w.big("k-2", r"u_{new} = (1 - h) \cdot u_{old}", cls="sm"),
                 w.big("k-3", r"u_{old} = 0.75,\ \ \ h = 0.6", cls="xs"),
                 w.big("k-4", r"u_{new} = 0.4 \cdot 0.75 = 0.3", cls="xs"),
                 w.big("k-5", r"\bar{d} = h \cdot d_{hit} + (1 - h) \cdot d_{miss}", cls="sm"), gap=24),
   panel=st.card("k-c1", "trap", "⚠️ לא $h \\cdot u$, אלא $(1-h) \\cdot u$"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: שיעור הפגיעה במטמון הוא 0.3.", say="שאלה בסגנון מבחן: שיעור הפגיעה במטמון הוא אפס נקודה שלוש."),
    P("תשובה מהמטמון לוקחת 4 מילישניות, ופספוס לוקח בסך הכול 204. מה זמן התגובה הממוצע?",
      say="תשובה מהמטמון לוקחת ארבע מילישניות, ופספוס לוקח בסך הכול מאתיים וארבע. מה זמן התגובה הממוצע?"),
    P("פגיעות: 0.3 כפול 4, כלומר 1.2.", do=show("x-1"),
      say="פגיעות: אפס נקודה שלוש כפול ארבע, כלומר אחת נקודה שתיים."),
    P("פספוסים: 0.7 כפול 204, כלומר 142.8.", do=show("x-2"),
      say="פספוסים: אפס נקודה שבע כפול מאתיים וארבע, כלומר מאה ארבעים ושתיים נקודה שמונה."),
    P("ביחד: 144 מילישניות.", do=show("x-3", "q-ok-a"), say="ביחד: מאה ארבעים וארבע מילישניות."),
    P("64 מתקבל כשמחליפים את המשקלים: נותנים את 0.3 לפספוס. אבל רוב הבקשות כאן הן פספוסים.", do=show("q-x-b", "q-n-b"),
      say="שישים וארבע מתקבל כשמחליפים את המשקלים: נותנים את אפס נקודה שלוש לפספוס. אבל רוב הבקשות כאן הן פספוסים."),
    P("104 הוא ממוצע פשוט של שני הזמנים, כאילו חצי מהבקשות פוגעות.", do=show("q-x-c", "q-n-c"),
      say="מאה וארבע הוא ממוצע פשוט של שני הזמנים, כאילו חצי מהבקשות פוגעות."),
    P("ו-204 מתעלם מהמטמון לגמרי.", do=show("q-x-d", "q-n-d"), hold=0.5,
      say="ומאתיים וארבע מתעלם מהמטמון לגמרי."),
], stage=w.stack(w.big("x-0", r"\bar{d} = h \cdot d_{hit} + (1 - h) \cdot d_{miss}", hidden=False, cls="sm"),
                 w.big("x-1", r"0.3 \cdot 4 = 1.2", cls="xs"),
                 w.big("x-2", r"0.7 \cdot 204 = 142.8", cls="xs"),
                 w.big("x-3", r"1.2 + 142.8 = 144\ \text{ms}", cls="xs"), gap=30),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>שיעור פגיעה $0.3$. תשובה מהמטמון: '
         + w.ltr("4 ms") + '; פספוס: ' + w.ltr("204 ms") + '. מה זמן התגובה הממוצע?</div>'
         + st.options("q", OPTS, notes={"b": "משקלים הפוכים", "c": "ממוצע פשוט", "d": "בלי מטמון"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: מטמון עונה במקום שרת המקור, וחוסך זמן ועומס על הקו.", do=show("r-1")),
    P("GET מותנה: אם האובייקט לא השתנה, חוזר 304 ומשתמשים בעותק. נחסך השידור, אבל לא ה-RTT.", do=show("r-2"),
      say="גֶט מותנה: אם האובייקט לא השתנה, חוזר שלוש מאות וארבע ומשתמשים בעותק. נחסך השידור, אבל לא האַר טִי טִי."),
    P("ו-max-age אומר כמה זמן המטמון עונה בלי לשאול.", do=show("r-3")),
    P("והחישובים: ניצולת כפול $1-h$, וזמן ממוצע משוקלל. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6,
      say="והחישובים: ניצולת כפול אחת פחות אֵייץ', וזמן ממוצע משוקלל. נתראה ברמה הבאה."),
], stage=w.stack(w.big("r-f1", r"u_{new} = (1 - h) \cdot u_{old}", hidden=False, cls="sm"),
                 w.big("r-f2", r"\bar{d} = h \cdot d_{hit} + (1 - h) \cdot d_{miss}", hidden=False, cls="sm"), gap=40),
   panel=st.card("r-1", "rule", "🔑 מטמון: פחות זמן, פחות עומס")
         + st.card("r-2", "rule", "🔑 " + w.ltr("304") + ": עדיין " + w.ltr("RTT"))
         + st.card("r-3", "ex", w.ltr("max-age=900") + ": רבע שעה")
         + st.card("r-4", "ex", "$(1-h)$ על הפספוסים"))

VIDEO = Video("A05", "app", "מטמון ו-GET מותנה", [title, cache, cond, maxage, calc, exam, recap], bank={})
