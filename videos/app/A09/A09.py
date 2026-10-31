# -*- coding: utf-8 -*-
"""A09 · בוס: שאלות מבחן אמיתיות — video script (build: tools/video/vid.py A09).

Boss walkthrough (courses/app/C09.js is boss: true): three real exam questions that no guided quiz or boss uses.
  22S-A-Q9   how many sockets, server and client, from the server's start until Sivan's page shows (official key b = 4)
  24A-B-Q8   what cuts response time most for far-away players of an online game (key a = QUIC). "A CDN would matter most" (C08-Q5) is not said.
  26A-A-Q2   how to shorten page load time in HTTP (key a = all of them: local cache, web cache, CDN)
Avoided on purpose: the six C09 boss items (22S-A-Q5, 25A-C-Q1, 25A-C-Q2, 22S-A-Q15, 24A-A-Q10, 25A-A-Q11), every C01-C08
quiz item and its bank twins, 23A-A-Q7 (solved in A04), 25A-B-Q13 (socket API order, solved in the tcp course T08).
The handshake timing for 24A-B-Q8 (RTT 180 ms) comes from w_app.segments-style pieces and is asserted below.
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_app as w

# ---------------------------------------------------------------- 22S-A-Q9
Q1 = BANK["22S-A-Q9"]
assert Q1["correctId"] == "b" and Q1.get("official") is True
V1 = {o["id"]: int(o["value"]) for o in Q1["options"]}
assert V1 == {"a": 3, "b": 4, "c": 2, "d": 5}
SOCK = [("server", "welcome (listen)", "TCP"), ("server", "connection with Sivan", "TCP"),
        ("client", "DNS query", "UDP"), ("client", "HTTP connection", "TCP")]
assert len(SOCK) == V1["b"] == 4
assert sum(1 for s in SOCK if s[0] == "client") == V1["c"]         # the client side only: 2
assert len(SOCK) - 1 == V1["a"]                                     # one forgotten (DNS or the welcome socket): 3
OPTS1 = [(o["id"], w.ltr(o["value"])) for o in Q1["options"]]

# ---------------------------------------------------------------- 24A-B-Q8
Q2 = BANK["24A-B-Q8"]
assert Q2["correctId"] == "a" and "QUIC" in Q2["options"][0]["value"] and "Persistent" in Q2["options"][2]["value"]
assert Q2["options"][1]["id"] == "b" and "מוצפן" in Q2["options"][1]["value"]   # b = give up encryption
R = 180
HS = {"t": [("conn", R), ("tls", R), ("req", R)], "q": [("quic", R), ("req", R)]}
assert w.total(HS["t"]) == 540 and w.total(HS["q"]) == 360 and w.total(HS["t"]) - w.total(HS["q"]) == R
BARS2 = w.timebars("b2", [("t", "TCP + TLS", HS["t"]), ("q", "QUIC", HS["q"])], gap=30)
OPTS2 = [(o["id"], o["value"]) for o in Q2["options"]]

# ---------------------------------------------------------------- 26A-A-Q2
Q3 = BANK["26A-A-Q2"]
assert Q3["correctId"] == "a" and Q3["options"][0]["value"] == "כל התשובות נכונות"
OPTS3 = [(o["id"], o["value"]) for o in Q3["options"]]
# each mechanism shortens a hit to a closer source than the origin: local copy (no network), proxy, CDN edge
HIT_SOURCE = {"b": "browser", "c": "proxy in the organisation", "d": "CDN server near the user"}
assert set(HIT_SOURCE) == {"b", "c", "d"}
O3 = {o["id"]: o["value"] for o in Q3["options"]}
assert "local cache" in O3["b"] and "web cache" in O3["c"] and "CDN" in O3["d"]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("זה הסרטון של שלב הבוס: שלוש שאלות מבחן אמיתיות, אחת אחרי השנייה."),
    P("נספור סוקטים, נבחר פרוטוקול למשתמשים רחוקים, ונבדוק דרכים לקצר זמן טעינה."),
    P("בכל שאלה נמצא את התשובה, ונפסול כל אחת מהאחרות עם סיבה.", hold=0.4),
], stage='<div class="kicker">A09 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>בוס: שאלות מבחן אמיתיות</h1>'
         '<p>לפתור שאלות מבחן אמיתיות על זמני טעינה, ספירת חיבורים, מטמון ו-DNS.</p>', layout="title")

q1 = Scene("q1", "שאלה 1: סוקטים", [
    P("שאלה ראשונה. סיון רוצה להציג את דף הבית של אתר שמעולם לא ביקרה בו."),
    P("השרת עלה, ועוד לא קיבל אף בקשה. הדף הוא מסמך HTML אחד, בלי תמונות ובלי הפניות."),
    P("כמה סוקטים נוצרו בסך הכול, בצד השרת **וגם** בצד הלקוח, מאז שהשרת עלה ועד שהדף הוצג?"),
    P("נתחיל בשרת. כשהוא עולה, הוא פותח סוקט האזנה, שמחכה לחיבורים חדשים.", do=show("s-t", "s-0")),
    P("כשסיון מתחברת, השרת מקבל את החיבור, ונוצר בשבילה סוקט חיבור נפרד. שניים בצד השרת.", do=show("s-1")),
    P("ובצד של סיון: היא לא מכירה את הכתובת, אז קודם שאילתת DNS. זה סוקט UDP.", do=show("s-2")),
    P("ואז חיבור TCP לשרת, להבאת הדף. סוקט רביעי.", do=show("s-3")),
    P("הדף בלי תמונות, אז אין צורך בחיבור נוסף. סך הכול ארבעה.", do=show("s-4", "a-ok-b")),
    P("שלוש מתקבל כששוכחים סוקט אחד: את שאילתת ה-DNS, או את סוקט ההאזנה של השרת.", do=show("a-x-a", "a-n-a")),
    P("שתיים סופר רק צד אחד. וחמש מניח חיבור נוסף שהדף הזה לא צריך.", do=show("a-x-c", "a-n-c", "a-x-d", "a-n-d"),
      hold=0.4),
], stage=w.table("s-t", ["צד", "סוקט", "פרוטוקול"], [
    ["שרת", "האזנה, מרגע שעלה", w.ltr("TCP")], ["שרת", "חיבור עם סיון", w.ltr("TCP")],
    ["לקוח", "שאילתת " + w.ltr("DNS"), w.ltr("UDP")], ["לקוח", "חיבור " + w.ltr("HTTP"), w.ltr("TCP")],
    ["", "<b>סך הכול</b>", "<b>4</b>"]], ids=["s-0", "s-1", "s-2", "s-3", "s-4"]),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q1["id"]}</span>אתר חדש לסיון; דף ' + w.ltr("HTML")
         + ' אחד בלי הפניות; השרת עלה ולא קיבל בקשות. כמה ' + w.ltr("Sockets")
         + ' נוצרו בסה״כ, בשרת ובלקוח?</div>'
         + st.options("a", OPTS1, notes={"a": "שכח אחד", "c": "צד אחד", "d": "חיבור מיותר"}))

q2 = Scene("q2", "שאלה 2: משתמשים רחוקים", [
    P("שאלה שנייה. משחק רשת עם משתמשים בכל העולם, ועיכובים גבוהים במיוחד אצל משתמשים רחוקים."),
    P("איזה שינוי ישפיע הכי הרבה על זמני התגובה?"),
    P("כשהמשתמש רחוק, כל RTT יקר. אז מחפשים את מה שחוסך סבבים שלמים.", say="כשהמשתמש רחוק, כל אַר טִי טִי יקר. אז מחפשים את מה שחוסך סבבים שלמים."),
    P("מעל TCP, עם RTT של 180: חיבור, הצפנה, ובקשה. 540 מילישניות עד התשובה הראשונה.",
      do=show("b2-t-t", *w.seg_ids("b2", "t", HS["t"]), "b2-t-tot"),
      say="מעל טִי סִי פִּי, עם אַר טִי טִי של מאה ושמונים: חיבור, הצפנה, ובקשה. חמש מאות וארבעים מילישניות עד התשובה הראשונה."),
    P("QUIC מאחד את החיבור וההצפנה לסבב אחד: 360. וגם אין בו חסימת head-of-line.",
      do=show("b2-q-t", *w.seg_ids("b2", "q", HS["q"]), "b2-q-tot", "b-ok-a"),
      say="קְוִויק מאחד את החיבור וההצפנה לסבב אחד: שלוש מאות ושישים. וגם אין בו חסימת הֶד אוֹף לַיין."),
    P("ויתור על ההצפנה חוסך אמנם סבב, אבל פוגע באבטחה. ו-QUIC חוסך את אותו סבב בלי לוותר עליה.",
      do=show("b-x-b", "b-n-b")),
    P("חיבורים persistent הם כבר ברירת המחדל ב-HTTP/1.1, והם לא מקצרים את המרחק.", do=show("b-x-c", "b-n-c")),
    P("והאפשרות שאף אחת לא נכונה נופלת, כי QUIC עוזר.", do=show("b-x-d", "b-n-d")),
    P("המלכודת: לבחור שינוי שנשמע מהיר, בלי לבדוק כמה סבבים הוא באמת חוסך, ומה הוא עולה.",
      do=show("b-c1"), hold=0.4),
], stage=w.stack(BARS2, st.card("b-c1", "trap", "⚠️ סופרים כמה סבבים כל שינוי חוסך"), gap=40),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q2["id"]}</span>משחק רשת עם משתמשים בכל העולם; עיכובים גבוהים '
         'אצל רחוקים. איזה שינוי ישפיע הכי הרבה על זמני התגובה?</div>'
         + '<div class="ap-osm">' + st.options("b", OPTS2, notes={"b": "פוגע באבטחה", "c": "כבר קיים",
                                                                 "d": "יש נכונה"}) + '</div>')

q3 = Scene("q3", "שאלה 3: לקצר טעינה", [
    P("שאלה שלישית, קצרה: מהי הדרך להקטין זמן טעינת דף ב-HTTP?"),
    P("נבדוק כל אפשרות בנפרד. מטמון מקומי בדפדפן: אם העותק שם, אין פנייה לרשת בכלל.", do=show("c-1", "c-n-b")),
    P("שרת web cache, למשל proxy בארגון: עונה מקרוב, במקום שרת המקור.", do=show("c-2", "c-n-c")),
    P("ו-CDN: שרתים קרובים למשתמש, ולכן RTT קצר יותר.", do=show("c-3", "c-n-d")),
    P("כל אחת מהן לבדה מקצרת את הזמן. אז התשובה היא שכל התשובות נכונות.", do=show("c-ok-a")),
    P("המלכודת: לבחור אחת מהן ולהפסיק לקרוא. כשכמה אפשרויות נכונות, מחפשים את זו שמאגדת אותן.", hold=0.4),
], stage=w.stack(w.row("c-1", "מטמון מקומי ⟵ בלי רשת בכלל"),
                 w.row("c-2", w.ltr("web cache") + " ⟵ עונה מקרוב"),
                 w.row("c-3", w.ltr("CDN") + " ⟵ שרת קרוב, RTT קצר"), gap=46),
   panel=f'<div class="qstem"><span class="qid">{Q3["id"]}</span>מהי הדרך להקטין זמן טעינת דף בפרוטוקול '
         + w.ltr("HTTP") + '?</div>' + st.options("c", OPTS3, notes={k: "נכון, אבל לא לבד" for k in "bcd"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: בספירת סוקטים זוכרים את שני הצדדים: סוקט ההאזנה של השרת, ושאילתת ה-DNS של הלקוח.", do=show("r-1")),
    P("למשתמשים רחוקים כל סבב יקר, ו-QUIC מאחד את לחיצות היד לסבב אחד.", do=show("r-2")),
    P("ומטמון בכל רמה, דפדפן, proxy או CDN, מקצר את זמן הטעינה. בהצלחה בבוס!", do=show("r-3"), hold=0.6),
], stage=w.stack(w.row("r-f", "2 בשרת + 2 בלקוח = 4", hidden=False)),
   panel=st.card("r-1", "rule", "🔑 סוקטים: האזנה + חיבור, " + w.ltr("DNS") + " + " + w.ltr("HTTP"))
         + st.card("r-2", "rule", "🔑 רחוקים: פחות סבבים, " + w.ltr("QUIC"))
         + st.card("r-3", "ex", "מטמון בכל רמה מקצר"))

VIDEO = Video("A09", "app", "בוס: שאלות מבחן אמיתיות", [title, q1, q2, q3, recap],
              bank={"22S-A-Q9": "b", "24A-B-Q8": "a", "26A-A-Q2": "a"})
