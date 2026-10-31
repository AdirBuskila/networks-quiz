# -*- coding: utf-8 -*-
"""A06 · DNS: היררכיה, איטרטיבית ורקורסיבית — video script (build: tools/video/vid.py A06).

Source: courses/app/C06.js (lesson + goal: name -> IP over UDP port 53; root, TLD, authoritative, local resolver;
iterative (referrals, the resolver asks each server) vs recursive (each server asks the next); 3T uncached, 2T with
the TLD server cached; 8 messages).
Exam anchor: 23A-A-Q13 (which TRANSPORT protocols run when the HTTP server's IP is unknown; key c = UDP for DNS, TCP
for HTTP), which no guided quiz uses.
Avoided on purpose: 25A-A-Q13 (twin of C06-Q1), the recursive-figure items 23A-A-Q9 / 23A-B-Q11 / 25A-B-Q1 (C06-Q4 is
written from them), 25A-C-Q2 (boss), and the C06 quiz/lesson numbers (T = 25 ms with the TLD cached, T = 30 ms). The
iterative message count (C06-Q2) is not said, and the two walk-throughs follow the numbered arrows instead of the
C06-Q3 / C06-Q4 stems. Worked timing: T = 40 ms.
The arrows of both figures come from w_app.dns_flow(), whose message counts are the course checker's.
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_app as w

IT, FIT = w.dns("it", "iter")
RC, FRC = w.dns("rc", "rec")
assert len(FIT) == len(FRC) == 8
# iterative: every query to a server is sent by the resolver, and every server answers the resolver
assert all(a == "res" for a, b, k in FIT[1:-1] if k == "q") and all(b == "res" for a, b, k in FIT[1:-1] if k != "q")
assert [k for _, _, k in FIT] == ["q", "q", "ref", "q", "ref", "q", "ans", "ans"]
assert FIT[6] == ("auth", "res", "ans")                      # only the authoritative server returns the address
# recursive: the resolver sends ONE query, the root asks the TLD itself, the answer comes back along the chain
assert [a for a, _, k in FRC if k == "q"] == ["client", "res", "root", "tld"]
assert [b for _, b, k in FRC if k == "ans"] == ["tld", "root", "res", "client"]

T = 40
UNCACHED, TLD_KNOWN = 3 * T, 2 * T                           # the course's model: queries in sequence
assert (UNCACHED, TLD_KNOWN) == (120, 80)

Q = BANK["23A-A-Q13"]
assert Q["correctId"] == "c" and [o["id"] for o in Q["options"]] == ["a", "b", "c", "d"]
OPT = {o["id"]: o["value"] for o in Q["options"]}
assert OPT["c"].startswith("UDP בשביל DNS") and OPT["b"].startswith("TCP בשביל DNS") and OPT["a"] == "DNS ו-HTTP"
LAYER = {"DNS": "application", "HTTP": "application", "UDP": "transport", "TCP": "transport"}
assert LAYER["DNS"] == LAYER["HTTP"] == "application"         # option a names no transport protocol
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נעקוב אחרי שאילתת DNS: איך שם של אתר הופך לכתובת IP."),
    P("נכיר את ההיררכיה של השרתים, נבדיל בין שאילתה איטרטיבית לרקורסיבית, ונחשב זמן חיפוש."),
    P("ובסוף נפתור שאלה ממבחן.", hold=0.4),
], stage='<div class="kicker">A06 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>DNS: היררכיה, איטרטיבית ורקורסיבית</h1>'
         '<p>לתאר את מסלול חיפוש הכתובת, להבדיל בין שאילתה איטרטיבית לרקורסיבית, ולחשב זמן חיפוש.</p>', layout="title")

hier = Scene("hier", "ההיררכיה", [
    P("DNS מתרגם שם, כמו www.shop.com, לכתובת IP. בלי הכתובת, אי אפשר לפתוח חיבור לשרת.", do=show("h-1"),
      say="דִי אֶן אֶס מתרגם שם, כמו דַבְּלְיוּ דַבְּלְיוּ דַבְּלְיוּ שׁוֹפּ דוֹט קוֹם, לכתובת אַיי פִּי. בלי הכתובת, אי אפשר לפתוח חיבור לשרת."),
    P("שאילתת DNS רגילה רצה מעל UDP, בפורט 53: הודעה אחת הלוך, ותשובה אחת חזור.", do=show("h-c1"),
      say="שאילתת דִי אֶן אֶס רגילה רצה מעל יוּ דִי פִּי, בפורט חמישים ושלוש: הודעה אחת הלוך, ותשובה אחת חזור."),
    P("אין שרת אחד שיודע הכול. יש היררכיה.", do=show("h-t")),
    P("שרת ה-Root יודע לאילו שרתי TLD לפנות, לפי הסיומת.", do=show("h-r0")),
    P("שרת ה-TLD, למשל של .com, יודע מי השרת האחראי על הדומיין.", do=show("h-r1"),
      say="שרת הטִי אֶל דִי, למשל של דוֹט קוֹם, יודע מי השרת האחראי על הדומיין."),
    P("ושרת ה-Authoritative הוא שיודע את הכתובת עצמה.", do=show("h-r2")),
    P("והלקוח לא פונה אליהם ישירות: הוא שואל את ה-Resolver המקומי, וזה מחפש בשבילו.", do=show("h-r3")),
    P("ואיך שרת אחד מפנה לשרת הבא? ברשומת NS, שאומרת מי השרת של דומיין. ורשומת A היא שם וכתובת.", do=show("h-c2"),
      say="ואיך שרת אחד מפנה לשרת הבא? ברשומת אֶן אֶס, שאומרת מי השרת של דומיין. ורשומת אֵיי היא שם וכתובת."),
], stage=w.stack(w.row("h-1", w.ltr("www.shop.com") + " &nbsp;⟶&nbsp; " + w.ltr("93.184.216.34")),
                 w.table("h-t", ["שרת", "מה הוא יודע"], [
                     [w.ltr("Root"), "לאילו שרתי " + w.ltr("TLD") + " לפנות"],
                     [w.ltr("TLD (.com)"), "מי ה-" + w.ltr("Authoritative") + " של הדומיין"],
                     [w.ltr("Authoritative"), "את כתובת ה-" + w.ltr("IP") + " עצמה"],
                     [w.ltr("Resolver"), "מחפש בשם הלקוח"]], ids=["h-r0", "h-r1", "h-r2", "h-r3"]), gap=40),
   panel=st.card("h-c1", "rule", "🔑 " + w.ltr("DNS") + " רץ מעל " + w.ltr("UDP") + ", פורט 53")
         + st.card("h-c2", "ex", w.ltr("NS") + ": מי השרת של הדומיין · " + w.ltr("A") + ": שם ← כתובת"))

it = Scene("iter", "איטרטיבית", [
    P("נניח שאין שום דבר במטמון, ונעקוב אחרי החיצים לפי המספרים. חץ ראשון: הלקוח שואל את ה-Resolver.", do=show("it", "it-a1")),
    P("חץ שני: ה-Resolver שואל את ה-Root. וחץ שלישי, הצהוב, חוזר אליו עם כתובת של שרת TLD.", do=show("it-a2", "it-a3", "i-c1")),
    P("חיצים ארבע וחמש: אותו דבר מול ה-TLD. שוב שאלה מה-Resolver, ושוב תשובה עם השרת הבא.", do=show("it-a4", "it-a5")),
    P("חיצים שש ושבע: ה-Resolver שואל את ה-Authoritative, ורק ממנו חוזרת הכתובת עצמה.", do=show("it-a6", "it-a7")),
    P("וחץ שמונה: ה-Resolver מחזיר את הכתובת ללקוח.", do=show("it-a8")),
    P("שימו לב מאיפה יוצאים כל החיצים הכחולים שהולכים לשרתים: כולם מה-Resolver. השרתים רק עונים לו, והוא ממשיך בעצמו.",
      do=show("i-c2")),
    P("זו הדרך **האיטרטיבית**: השואל הוא שמתקדם משרת לשרת.", hold=0.3),
], stage=IT,
   panel=st.card("i-c1", "plain", "<span class=\"ap-c-tx\">■</span> הפניה &nbsp; <span class=\"ap-c-req\">■</span> שאילתה &nbsp; <span class=\"ap-ok\">■</span> תשובה")
         + st.card("i-c2", "rule", "🔑 איטרטיבית: כל השאילתות יוצאות מאותו שואל"))

rc = Scene("rec", "רקורסיבית", [
    P("ועכשיו אותם חמישה שרתים, בדרך השנייה. שוב נעקוב לפי המספרים.", do=show("rc", "rc-a1")),
    P("הפעם החיצים הכחולים יוצרים שרשרת: כל שרת מעביר את השאלה רמה אחת למטה, לשרת הבא.",
      do=show("rc-a2", "rc-a3", "rc-a4")),
    P("וחיצי התשובה עולים באותו מסלול בדיוק, עד שהכתובת מגיעה ללקוח.", do=show("rc-a5", "rc-a6", "rc-a7", "rc-a8")),
    P("זו הדרך **הרקורסיבית**: מי שנשאל לוקח על עצמו את ההמשך, ופונה בעצמו לשרת הבא.", do=show("r-c1")),
    P("כדי להבחין בין השתיים, שואלים שאלה אחת: מי שולח את השאילתה הבאה? השואל עצמו, או השרת שנשאל?", do=show("r-c2")),
    P("ובדרך כלל, השאילתה מהלקוח ל-Resolver המקומי היא רקורסיבית: הלקוח מחכה לתשובה סופית.", hold=0.3),
], stage=RC,
   panel=st.card("r-c1", "rule", "🔑 רקורסיבית: השרת שנשאל פונה בעצמו לשרת הבא")
         + st.card("r-c2", "trap", "⚠️ מי שולח את השאילתה הבאה? זה המבחן"))

time = Scene("time", "זמן חיפוש", [
    P("וזמן החיפוש. נניח שכל שאילתה לשרת, הלוך וחזור, לוקחת 40 מילישניות.", do=show("t-1"),
      say="וזמן החיפוש. נניח שכל שאילתה לשרת, הלוך וחזור, לוקחת ארבעים מילישניות."),
    P("כשאין כלום במטמון, ה-Resolver שולח שלוש שאילתות, אחת אחרי השנייה: Root, TLD, ו-Authoritative.", do=show("t-2")),
    P("כל אחת מחכה לתשובה של הקודמת, אז הזמנים מצטברים: 120 מילישניות.", do=show("t-3"),
      say="כל אחת מחכה לתשובה של הקודמת, אז הזמנים מצטברים: מאה ועשרים מילישניות."),
    P("ואם ה-Resolver כבר מכיר את שרת ה-TLD מהמטמון? מדלגים על ה-Root. נשארות שתי שאילתות: 80.", do=show("t-4"),
      say="ואם הרִיזוֹלְבֶר כבר מכיר את שרת הטִי אֶל דִי מהמטמון? מדלגים על הרוּט. נשארות שתי שאילתות: שמונים."),
    P("זה בדיוק מה שהמטמון חוסך. ועל כמה זמן מותר לשמור בו, נדבר ברמה הבאה.", do=show("t-c1"), hold=0.3),
], stage=w.stack(w.big("t-1", r"T = 40\ \text{ms}", cls="sm"),
                 w.row("t-2", w.ltr("Root → TLD → Authoritative")),
                 w.big("t-3", r"3T = 120\ \text{ms}", cls="sm"),
                 w.big("t-4", r"2T = 80\ \text{ms}", cls="sm"), gap=36),
   panel=st.card("t-c1", "rule", "🔑 בלי מטמון $3T$; עם שרת ה-" + w.ltr("TLD") + " ידוע $2T$"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: לקוח HTTP רוצה דף משרת מקומי. כתובת ה-IP של השרת **לא ידועה**."),
    P("אילו פרוטוקולים של שכבת **התעבורה** יופעלו?"),
    P("כתובת לא ידועה, אז קודם שאילתת DNS. והיא רצה מעל UDP.", do=show("x-1")),
    P("אחר כך HTTP, שרץ מעל חיבור TCP.", do=show("x-2", "q-ok-c")),
    P("התשובה DNS ו-HTTP נופלת: אלה פרוטוקולים של שכבת האפליקציה, לא של התעבורה.", do=show("q-x-a", "q-n-a")),
    P("TCP בשביל DNS שגוי: שאילתה רגילה היא הודעה אחת וחזרה, ולא צריך בשבילה חיבור.", do=show("q-x-b", "q-n-b")),
    P("והאפשרות שאף תשובה לא נכונה נופלת, כי מצאנו נכונה.", do=show("q-x-d", "q-n-d")),
    P("המלכודת: לענות על השכבה הלא נכונה. קראו טוב איזו שכבה שואלים.", hold=0.5),
], stage=w.stack(w.table("x-t", ["שלב", "אפליקציה", "תעבורה"], [
    ["1. מציאת הכתובת", w.ltr("DNS"), w.ltr("UDP")], ["2. הבאת הדף", w.ltr("HTTP"), w.ltr("TCP")]], ids=["x-1", "x-2"],
    hidden=False)),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q["id"]}</span>לקוח ' + w.ltr("HTTP")
         + ' רוצה דף משרת מקומי, וכתובת ה-' + w.ltr("IP") + ' של השרת אינה ידועה. אילו פרוטוקולים של שכבת ה-'
         + w.ltr("transport") + ' נדרשים?</div>'
         + st.options("q", OPTS, notes={"a": "אפליקציה", "b": w.ltr("DNS → UDP"), "d": "יש נכונה"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: DNS מתרגם שם לכתובת, מעל UDP.", do=show("s-1")),
    P("Root מפנה ל-TLD, ה-TLD מפנה ל-Authoritative, ורק הוא מחזיר את הכתובת.", do=show("s-2")),
    P("איטרטיבית: הפניות, וה-Resolver ממשיך לבד. רקורסיבית: השרת פונה בעצמו לשרת הבא.", do=show("s-3")),
    P("וזמן: שלוש שאילתות בלי מטמון, שתיים כשה-TLD ידוע. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6),
], stage=w.stack(w.row("s-f", w.ltr("Resolver → Root → TLD → Authoritative"), hidden=False)),
   panel=st.card("s-1", "rule", "🔑 " + w.ltr("DNS") + " מעל " + w.ltr("UDP"))
         + st.card("s-2", "ex", "רק ה-" + w.ltr("Authoritative") + " מחזיר כתובת")
         + st.card("s-3", "rule", "🔑 איטרטיבית = הפניה; רקורסיבית = השרת ממשיך")
         + st.card("s-4", "ex", "$3T$ / $2T$"))

VIDEO = Video("A06", "app", "DNS: היררכיה, איטרטיבית ורקורסיבית", [title, hier, it, rc, time, exam, recap],
              bank={"23A-A-Q13": "c"})
