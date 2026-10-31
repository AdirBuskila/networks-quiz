# -*- coding: utf-8 -*-
"""A01 · HTTP: בקשה, תגובה ועוגיות — video script (build: tools/video/vid.py A01).

Source: courses/app/C01.js (lesson + goal: HTTP is a request/response application protocol over TCP; methods and
status codes; the body is optional; stateless, and how a cookie keeps a session).
Exam anchor: 23A-A-Q4 ("HTTP does not require status 200 for a successful POST"; key b), which no guided quiz uses
and which has no twin among the quiz items.
Avoided on purpose: the C01 quiz items (stateless definition, the Set-Cookie mechanism as a question, third-party
cookies, "which response has no body", PUT) are not asked; their bank twins (25A-B-Q4, 24A-A-Q7, 25A-A-Q1,
24A-B-Q4) and the boss item 22S-A-Q15 (body of a 304) are not used. The lesson's shop example (id=1234) is replaced
by a library site with sid=81. Not stated as rules on purpose: "the body is not mandatory" (boss 22S-A-Q15), the PUT
definition (C01-Q5), what statelessness is NOT about (C01-Q1 distractors).
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_app as w

# ---------------------------------------------------------------- facts the script relies on (asserted)
METHODS = {"GET": "מבקש אובייקט", "POST": "שולח נתונים לשרת", "HEAD": "כמו GET, בלי גוף בתשובה"}
SUCCESS = {200: "OK", 201: "Created", 204: "No Content"}            # the 2xx family: all mean success
assert all(200 <= c < 300 for c in SUCCESS)

REQ = ["GET /books/list.html HTTP/1.1", "Host: www.lib.co.il", "Accept: text/html", ""]
BODY_LEN = 4200
RESP = ["HTTP/1.1 200 OK", "Content-Type: text/html", f"Content-Length: {BODY_LEN}", "", "<html> ... </html>"]
assert REQ[0].split()[0] in METHODS and RESP[0].split()[1] == "200"

SID = 81
COOK = [("R", "POST /login", "req"), ("L", f"200 OK  Set-Cookie: sid={SID}", "resp"),
        ("R", f"GET /cart  Cookie: sid={SID}", "req"), ("L", "200 OK  (sid 81)", "resp")]
LAD, _ = w.ladder("ck", ("דפדפן", "שרת"), [dict(dir=d, label=l, cls=c) for d, l, c in COOK], slope=112, lab_w=14.5)
assert COOK[1][1].endswith(f"sid={SID}") and COOK[2][1].endswith(f"sid={SID}")   # the same id comes back

# exam 23A-A-Q4
Q = BANK["23A-A-Q4"]
assert Q["correctId"] == "b" and [o["id"] for o in Q["options"]] == ["a", "b", "c", "d"]
assert "אינו מחייב" in Q["options"][1]["value"] and "מחייב להחזיר" in Q["options"][0]["value"]
assert "שכבת התעבורה" in Q["options"][2]["value"]
POST_OK = [201, 204]                       # successful POST answers other than 200, both in the 2xx family
assert all(c in SUCCESS and c != 200 for c in POST_OK)
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נכיר את HTTP: איך נראות בקשה ותגובה."),
    P("נראה אילו שיטות וקודי סטטוס יש, ומה אומרת הספרה הראשונה של הקוד."),
    P("נבין למה HTTP חסר מצב, ואיך עוגייה עוזרת לאתר לזכור אותנו. ובסוף, שאלה ממבחן.", hold=0.4),
], stage='<div class="kicker">A01 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>HTTP: בקשה, תגובה ועוגיות</h1>'
         '<p>להסביר מה זה פרוטוקול חסר מצב, למה צריך עוגיות, ומה מחזירה תגובה בלי גוף.</p>', layout="title")

msg = Scene("msg", "בקשה ותגובה", [
    P("HTTP הוא פרוטוקול של שכבת **האפליקציה**. הלקוח שולח בקשה, והשרת מחזיר תגובה.", do=show("m-c1")),
    P("והוא רץ מעל TCP: קודם נפתח חיבור, ורק אז עוברות עליו ההודעות.", do=show("m-c2")),
    P("זו בקשה. השורה הראשונה היא שורת הבקשה: שיטה, נתיב, וגרסה.", do=show("rq", "rq-l0")),
    P("השיטה כאן היא GET, הנתיב הוא הקובץ שמבקשים, והגרסה היא HTTP/1.1."),
    P("אחריה באות כותרות: שם ואחריו ערך. למשל השרת שאליו פונים, וסוג התוכן שהדפדפן מקבל.", do=show("rq-l1", "rq-l2")),
    P("שורה ריקה מסיימת את הכותרות. לבקשת GET אין גוף.", do=show("rq-l3")),
    P("והתגובה: שורת סטטוס עם הגרסה, קוד, ומילה שמסבירה אותו. כאן 200 OK.", do=show("rs", "rs-l0"),
      say="והתגובה: שורת סטטוס עם הגרסה, קוד, ומילה שמסבירה אותו. כאן מאתיים אוֹקֵיי."),
    P("אחר כך כותרות: סוג התוכן ואורכו בבתים.", do=show("rs-l1", "rs-l2")),
    P("ואחרי השורה הריקה, הגוף: הקובץ עצמו.", do=show("rs-l3", "rs-l4"), hold=0.3),
], stage=w.stack(w.msgbox("rq", "בקשה (לקוח ← שרת)", REQ), w.msgbox("rs", "תגובה (שרת ← לקוח)", RESP), gap=26),
   panel=st.card("m-c1", "rule", "🔑 HTTP: שכבת <b>האפליקציה</b>, בקשה ותגובה")
         + st.card("m-c2", "ex", "רץ מעל " + w.ltr("TCP") + " (ב-" + w.ltr("HTTP/3") + " מעל " + w.ltr("QUIC") + ")"))

codes = Scene("codes", "שיטות וקודים", [
    P("שלוש שיטות שכדאי להכיר.", do=show("c-m")),
    P("GET מבקש אובייקט. POST שולח נתונים לשרת, למשל טופס.", do=show("c-m0", "c-m1")),
    P("HEAD הוא כמו GET, אבל התשובה חוזרת בלי גוף: רק שורת הסטטוס והכותרות.", do=show("c-m2")),
    P("ועכשיו קודי הסטטוס. הספרה הראשונה אומרת מה קרה.", do=show("c-s")),
    P("קוד שמתחיל ב-2 אומר הצלחה. ולא רק 200.", do=show("c-s0"),
      say="קוד שמתחיל בשתיים אומר הצלחה. ולא רק מאתיים."),
    P("201 Created: נוצר משאב חדש. ו-204 No Content: הצליח, ואין מה להחזיר.", do=show("c-s1", "c-s2"),
      say="מאתיים ואחת, קְרִיאֵייטֶד: נוצר משאב חדש. ומאתיים וארבע, נוֹ קוֹנְטֶנְט: הצליח, ואין מה להחזיר."),
    P("קוד שמתחיל ב-3 אומר הפניה, למשל 301: הדף עבר לכתובת חדשה. ו-4 היא שגיאה של הלקוח, כמו 404.", do=show("c-s3", "c-s4"),
      say="קוד שמתחיל בשלוש אומר הפניה, למשל שלוש מאות ואחת: הדף עבר לכתובת חדשה. וארבע היא שגיאה של הלקוח, כמו ארבע מאות וארבע."),
], stage=w.stack(
    w.table("c-m", ["שיטה", "תפקיד"], [[w.ltr(k), v] for k, v in METHODS.items()], ids=["c-m0", "c-m1", "c-m2"]),
    w.table("c-s", ["קוד", "משמעות"], [
        [w.ltr("2xx"), "הצלחה"], [w.ltr("201 Created"), "נוצר משאב חדש"], [w.ltr("204 No Content"), "הצליח, אין מה להחזיר"],
        [w.ltr("3xx · 301"), "הפניה: עבר לכתובת חדשה"], [w.ltr("4xx · 404"), "שגיאת לקוח: לא נמצא"]],
        ids=["c-s0", "c-s1", "c-s2", "c-s3", "c-s4"], cls="sm"), gap=24),
   panel=st.card("c-r2", "ex", "כל " + w.ltr("2xx") + " הוא הצלחה, לא רק " + w.ltr("200")))
codes.phrases[5].do += show("c-r2")

state = Scene("state", "חסר מצב ועוגיות", [
    P("HTTP הוא **חסר מצב**: השרת לא זוכר שום דבר מבקשות קודמות.", do=show("s-c1")),
    P("כל בקשה צריכה להכיל בעצמה את כל מה שצריך כדי לטפל בה."),
    P("אז איך אתר יודע שאתם אותו משתמש מהלחיצה הקודמת? בעזרת **עוגייה**."),
    P("נכנסים לאתר של ספרייה. הדפדפן שולח את פרטי הכניסה בבקשת POST.", do=show("ck", "ck-m0")),
    P("השרת עונה, ומוסיף כותרת Set-Cookie עם מזהה: 81. את המזהה הזה הוא שומר גם אצלו.", do=show("ck-m1"),
      say="השרת עונה, ומוסיף כותרת סֶט קוּקִי עם מזהה: שמונים ואחת. את המזהה הזה הוא שומר גם אצלו."),
    P("בכל בקשה הבאה לאותו אתר, הדפדפן שולח את המזהה בכותרת Cookie.", do=show("ck-m2", "s-c2")),
    P("השרת מחפש את 81 אצלו, ויודע אילו ספרים שמרתם.", do=show("ck-m3"),
      say="השרת מחפש את שמונים ואחת אצלו, ויודע אילו ספרים שמרתם."),
    P("שימו לב: הפרוטוקול עצמו נשאר חסר מצב. המצב שמור בעוגייה ובשרת.", do=show("s-c3"), hold=0.3),
], stage=LAD,
   panel=st.card("s-c1", "rule", "🔑 חסר מצב: השרת לא זוכר בקשות קודמות")
         + st.card("s-c2", "ex", w.ltr("Set-Cookie") + " מהשרת, ואז " + w.ltr("Cookie") + " בכל בקשה")
         + st.card("s-c3", "rule", "🔑 המצב נשמר בעוגייה ובשרת, לא בפרוטוקול"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: בחרו את ההיגד המדויק ביותר. יש כאן שתי טענות על POST, ואחת על השכבה של HTTP."),
    P("נתחיל ב-POST. בקשה כזו יוצרת לפעמים משאב חדש, למשל הזמנה."),
    P("תשובה מצוינת אז היא 201 Created. ואם אין מה להחזיר, 204 No Content.", do=show("x-1"),
      say="תשובה מצוינת אז היא מאתיים ואחת, קְרִיאֵייטֶד. ואם אין מה להחזיר, מאתיים וארבע, נוֹ קוֹנְטֶנְט."),
    P("שתיהן בקבוצת ה-2: הצלחה. אז אין שום חובה להחזיר דווקא 200.", do=show("q-ok-b"),
      say="שתיהן בקבוצה של השתיים: הצלחה. אז אין שום חובה להחזיר דווקא מאתיים."),
    P("ולכן הטענה ההפוכה, שחובה להחזיר 200, נופלת.", do=show("q-x-a", "q-n-a"),
      say="ולכן הטענה ההפוכה, שחובה להחזיר מאתיים, נופלת."),
    P("הטענה ש-HTTP בשכבת התעבורה שגויה: הוא פרוטוקול אפליקציה, שרץ **מעל** TCP שבשכבת התעבורה.",
      do=show("x-2", "q-x-c", "q-n-c")),
    P("והאפשרות האחרונה נופלת, כי מצאנו טענה נכונה.", do=show("q-x-d", "q-n-d")),
    P("המלכודת: 200 הוא הקוד המוכר, אבל כל קוד שמתחיל ב-2 הוא הצלחה.", hold=0.5,
      say="המלכודת: מאתיים הוא הקוד המוכר, אבל כל קוד שמתחיל בשתיים הוא הצלחה."),
], stage=w.stack(
    w.msgbox("x-1", "תשובות אפשריות ל-" + w.ltr("POST") + " שהצליח", ["HTTP/1.1 200 OK", "HTTP/1.1 201 Created",
                                                                   "HTTP/1.1 204 No Content"], shown=(0, 1, 2)),
    w.table("x-2", ["שכבה", "פרוטוקול"], [["אפליקציה", w.ltr("HTTP")], ["תעבורה", w.ltr("TCP")]]), gap=40),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q["id"]}</span>בחרו את ההיגד המדויק ביותר:</div>'
         + f'<div class="ap-osm">{st.options("q", OPTS, notes={"a": "גם 201", "c": "אפליקציה", "d": "יש נכונה"})}</div>')

recap = Scene("recap", "סיכום", [
    P("לסיכום: HTTP הוא פרוטוקול אפליקציה של בקשה ותגובה, מעל TCP.", do=show("r-1")),
    P("בקשה: שיטה, נתיב וגרסה, ואז כותרות. תגובה: קוד סטטוס, כותרות, ולפעמים גוף.", do=show("r-2")),
    P("כל קוד שמתחיל ב-2 הוא הצלחה, לא רק 200.", do=show("r-3"),
      say="כל קוד שמתחיל בשתיים הוא הצלחה, לא רק מאתיים."),
    P("והשרת חסר מצב: עוגייה עם מזהה היא מה שמחבר בין הבקשות. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.msgbox("r-m", "בקשה", REQ[:2], hidden=False, shown=(0, 1)),
                 w.msgbox("r-n", "תגובה", RESP[:1], hidden=False, shown=(0,)), gap=26),
   panel=st.card("r-1", "rule", "🔑 שכבת האפליקציה, מעל " + w.ltr("TCP"))
         + st.card("r-2", "ex", "שורת בקשה / שורת סטטוס, כותרות, גוף")
         + st.card("r-3", "rule", "🔑 " + w.ltr("2xx") + " = הצלחה")
         + st.card("r-4", "rule", "🔑 חסר מצב; עוגייה = מזהה סשן"))

VIDEO = Video("A01", "app", "HTTP: בקשה, תגובה ועוגיות", [title, msg, codes, state, exam, recap],
              bank={"23A-A-Q4": "b"})
