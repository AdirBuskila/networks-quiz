# -*- coding: utf-8 -*-
"""A04 · כמה חיבורי TCP? — video script (build: tools/video/vid.py A04).

Source: courses/app/C04.js (lesson + goal: HTTP/1.1 persistent = one connection per host NAME (even with the same IP);
HTTP/2 = one connection per server; up to 6 parallel connections per server -> ceil(n/6) rounds, servers in parallel
-> the maximum, not the sum).
Exam anchor: 23A-A-Q7 (how many sockets Yael's computer opens for a new site with 5 images on the same host, HTTP 1.1;
key c = 2: one UDP socket for DNS, one TCP connection for the page and the images), which no guided quiz uses.
Its bank note: a browser that opens parallel connections would give the "7" option, but the question intends the
persistent reading; the lesson's rule (no parallel connections mentioned -> one connection per name) says the same.
Avoided on purpose: 24A-A-Q6 / 24A-B-Q5 (two names, same/different IP: C04-Q2 is written from them), 25A-C-Q1 (boss),
22S-A-Q9 (used in the A09 boss video), and the C04 quiz/lesson numbers (a/b/c.com 3+2+1, 80, 40, 14+20, 60, 13, 5+20,
100). Worked examples: 9 objects on four names (2+3+2+2); 27 images; 13 and 33 images on two servers (the
suggested pair; 13 is also the lesson's one-server count, here it is one of two servers). The same-IP case (C04-Q2) and
the ceil(N/6) exam convention (C04-Q6, C04-Q3, boss 25A-C-Q1) are not shown.
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_app as w

# ---------------------------------------------------------------- connections by host name
OBJS = [("index.html", "www.shop.co.il"), ("logo.png", "www.shop.co.il"),
        ("b.jpg", "static.shop.co.il"), ("c.jpg", "static.shop.co.il"), ("d.jpg", "static.shop.co.il"),
        ("e.jpg", "pics.net"), ("f.jpg", "pics.net"), ("g.gif", "ads.net"), ("h.gif", "ads.net")]
NAMES = sorted({h for _, h in OBJS})
assert len(OBJS) == 9 and len(NAMES) == 4                       # 4 connections, one per name
PER_NAME = {h: sum(1 for _, x in OBJS if x == h) for h in NAMES}
assert PER_NAME == {"www.shop.co.il": 2, "static.shop.co.il": 3, "pics.net": 2, "ads.net": 2}

# ---------------------------------------------------------------- rounds of 6
R1, RM1, MX1 = w.rounds("r1", [("s", "www.pics.com", 27)], cell=40)
assert RM1 == {"s": 5} and MX1 == 5
R2, RM2, MX2 = w.rounds("r2", [("a", "A", 13), ("b", "B", 33)], cell=40)
assert RM2 == {"a": 3, "b": 6} and MX2 == 6
assert sum(RM2.values()) == 9 and -(-(13 + 33) // 6) == 8           # the two wrong answers: the sum, and pooling

# ---------------------------------------------------------------- exam 23A-A-Q7
Q = BANK["23A-A-Q7"]
assert Q["correctId"] == "c" and [o["id"] for o in Q["options"]] == ["a", "b", "c", "d", "e"]
OPT = {o["id"]: o["value"] for o in Q["options"]}
assert OPT["c"].startswith("2") and OPT["a"].startswith("7") and OPT["b"].startswith("1") and OPT["d"].startswith("6")
IMGS = 5
SOCK = {"dns (UDP)": 1, "http (TCP, persistent, one host)": 1}       # the site is new -> DNS; one host -> one connection
assert sum(SOCK.values()) == 2
assert "DNS" in OPT["a"] and OPT["a"].startswith(f"{1 + 1 + IMGS}:")  # 7 = DNS + page + a connection per image
assert "DNS" not in OPT["d"] and OPT["d"].startswith(f"{1 + IMGS}:")  # 6 = per image, and no DNS socket
assert "DNS" not in OPT["b"] and OPT["b"].startswith("1:")            # 1 = no DNS socket
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נספור חיבורי TCP: כמה חיבורים פותח הדפדפן כדי לטעון דף."),
    P("נראה למה סופרים לפי שם השרת, מה משנה HTTP/2, ואיך מחשבים סבבים כשיש עד שישה חיבורים מקבילים."),
    P("ובסוף נפתור שאלה ממבחן.", hold=0.4),
], stage='<div class="kicker">A04 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>כמה חיבורי TCP?</h1>'
         '<p>לספור חיבורי TCP לפי שמות שרתים, ולחשב כמה סבבי בקשות נדרשים כשהדפדפן פותח עד 6 חיבורים מקבילים לשרת.</p>',
   layout="title")

names = Scene("names", "לפי שם השרת", [
    P("נטען דף של חנות. תשעה אובייקטים, מארבעה שמות שרת שונים.", do=show("n-t")),
    P("HTTP/1.1, persistent, בלי pipelining: חיבור אחד לכל **שם** שרת, וכל האובייקטים של השם עוברים עליו."),
    P("הדף והלוגו מגיעים מהשם הראשי של החנות. חיבור ראשון.", do=show("n-0")),
    P("שלוש תמונות מ-static.shop.co.il. זה שם אחר, אף שהוא דומה, ולכן חיבור שני.", do=show("n-1"),
      say="שלוש תמונות מסְטָטִיק שׁוֹפּ. זה שם אחר, אף שהוא דומה, ולכן חיבור שני."),
    P("שתי תמונות מאתר תמונות חיצוני, ושתי פרסומות משרת פרסום. עוד שני חיבורים.", do=show("n-2", "n-3")),
    P("תשעה אובייקטים, ארבעה שמות: ארבעה חיבורים. מספר האובייקטים לא קובע, רק מספר השמות.", do=show("n-c1"), hold=0.3),
], stage=w.table("n-t", ["שם השרת", "אובייקטים", "חיבור"], [
    [w.ltr("www.shop.co.il"), w.ltr("index.html, logo.png"), "1"],
    [w.ltr("static.shop.co.il"), w.ltr("b.jpg, c.jpg, d.jpg"), "2"],
    [w.ltr("pics.net"), w.ltr("e.jpg, f.jpg"), "3"],
    [w.ltr("ads.net"), w.ltr("g.gif, h.gif"), "4"]], ids=["n-0", "n-1", "n-2", "n-3"]),
   panel=st.card("n-c1", "rule", "🔑 " + w.ltr("HTTP/1.1") + ": חיבור persistent לכל <b>שם</b>"))

h2 = Scene("h2", "HTTP/2", [
    P("ב-HTTP/2 התמונה פשוטה יותר: חיבור TCP **אחד** לשרת.", do=show("h-1")),
    P("כל הבקשות והתגובות עוברות עליו יחד, בזרמים נפרדים. זה נקרא multiplexing.", do=show("h-2", "h-c1"), hold=0.3),
], stage=w.stack(w.row("h-1", w.ltr("HTTP/2") + ": חיבור " + w.ltr("TCP") + " אחד לשרת"),
                 w.row("h-2", "עליו: " + w.ltr("multiplexing") + " של כל הבקשות"),
                 gap=40),
   panel=st.card("h-c1", "rule", "🔑 " + w.ltr("HTTP/2") + " = חיבור אחד לשרת"))

par = Scene("par", "שישה חיבורים מקבילים", [
    P("עכשיו מהירות. בלי pipelining, כל חיבור מטפל בבקשה אחת בכל פעם."),
    P("לכן דפדפן פותח עד שישה חיבורים מקבילים לכל שרת. בכל סבב, שש בקשות במקביל, וכל סבב עולה RTT אחד.",
      say="לכן דפדפן פותח עד שישה חיבורים מקבילים לכל שרת. בכל סבב, שש בקשות במקביל, וכל סבב עולה אַר טִי טִי אחד."),
    P("הדף כבר הגיע, ונשארו 27 תמונות בשרת אחד. סבב ראשון: שש תמונות.", do=show("r1", "r1-s-r1"),
      say="הדף כבר הגיע, ונשארו עשרים ושבע תמונות בשרת אחד. סבב ראשון: שש תמונות."),
    P("שני, שלישי, רביעי: עוד שש בכל סבב. זה עשרים וארבע.", do=show(*w.round_ids("r1", "s", 2, 4))),
    P("ושלוש התמונות שנשארו צריכות סבב חמישי. 27 חלקי שש, מעוגל למעלה: חמישה.", do=show("r1-s-r5", "p-1"),
      say="ושלוש התמונות שנשארו צריכות סבב חמישי. עשרים ושבע חלקי שש, מעוגל למעלה: חמישה."),
    P("ועכשיו שני שרתים: 13 תמונות בשרת אחד, ו-33 בשני.", do=hide("p-a") + show("p-b"),
      say="ועכשיו שני שרתים: שלוש עשרה תמונות בשרת אחד, ושלושים ושלוש בשני."),
    P("המגבלה היא **לכל שרת**, ושני השרתים עובדים במקביל.", do=show("p-c1")),
    P("לשרת הראשון שלושה סבבים, ולשני שישה. והם רצים באותו זמן.", do=show(*w.round_ids("r2", "a", 1, 3), *w.round_ids("r2", "b", 1, 6))),
    P("אז הכול מוכן אחרי שישה סבבים: המקסימום, ולא הסכום.", do=show("p-2")),
    P("תשעה זה הסכום, ושמונה יוצא אם מחברים את כל התמונות לשרת אחד. שתיהן טעויות.", do=show("p-c2"), hold=0.3),
], stage='<div class="swap" style="--swap-h:600px">'
         f'<div id="p-a"><div id="r1" class="h">{R1}</div>'
         + w.big("p-1", r"\left\lceil \frac{27}{6} \right\rceil = 5", cls="xs") + '</div>'
         f'<div id="p-b" class="h"><div id="r2">{R2}</div>'
         + w.big("p-2", r"\max\left(\left\lceil \frac{13}{6} \right\rceil, \left\lceil \frac{33}{6} \right\rceil\right) = \max(3, 6) = 6", cls="xs")
         + '</div></div>',
   panel=st.card("p-c1", "rule", "🔑 עד 6 חיבורים <b>לכל שרת</b>; שרתים במקביל")
         + st.card("p-c2", "trap", "⚠️ לא הסכום $3+6=9$, ולא $\\lceil 46/6 \\rceil = 8$"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: יעל נכנסת לאתר שלא ביקרה בו קודם. בדף טקסט וחמש תמונות, כולן על אותו שרת."),
    P("הדפדפן והשרת תומכים ב-HTTP 1.1. כמה סוקטים ייפתחו במחשב של יעל?"),
    P("סוקט הוא נקודת הקצה שהאפליקציה פותחת כדי לתקשר. כל חיבור TCP הוא סוקט, וגם שאילתת DNS צריכה סוקט משלה.", do=show("x-c1")),
    P("האתר חדש, אז הכתובת שלו לא ידועה: קודם שאילתת DNS. היא רצה מעל UDP. סוקט אחד.", do=show("x-t", "x-1")),
    P("אחר כך HTTP 1.1, כלומר persistent. כל האובייקטים על שם אחד, אז חיבור TCP אחד מביא את הדף וכל התמונות.", do=show("x-2")),
    P("סך הכול שני סוקטים.", do=show("x-3", "q-ok-c")),
    P("שבע סופרת סוקט לכל תמונה. אבל השאלה לא מזכירה חיבורים מקבילים, אז זה חיבור persistent אחד לשם אחד.",
      do=show("q-x-a", "q-n-a")),
    P("שש עושה את אותה טעות, וגם שוכחת את שאילתת ה-DNS.", do=show("q-x-d", "q-n-d")),
    P("אחד שוכח את שאילתת ה-DNS: בלי כתובת, אי אפשר לפתוח חיבור לשרת.", do=show("q-x-b", "q-n-b")),
    P("והאפשרות שאף תשובה לא נכונה נופלת, כי התשובה שתיים נכונה.", do=show("q-x-e", "q-n-e"), hold=0.5),
], stage=w.stack(w.table("x-t", ["מה", "פרוטוקול", "סוקטים"], [
    ["שאילתת " + w.ltr("DNS"), w.ltr("UDP"), "1"], ["דף + 5 תמונות, שם אחד", w.ltr("TCP, persistent"), "1"],
    ["<b>סך הכול</b>", "", "<b>2</b>"]], ids=["x-1", "x-2", "x-3"]), gap=10),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q["id"]}</span>אתר חדש ליעל; דף עם 5 תמונות, כולן על אותו שרת; '
         + w.ltr("HTTP 1.1") + '. כמה ' + w.ltr("sockets") + ' ייפתחו במחשב שלה?</div>'
         + '<div class="ap-osm">' + st.options("q", OPTS, notes={"a": "לכל תמונה", "b": "בלי " + w.ltr("DNS"),
                                                                "d": "לכל תמונה", "e": "יש נכונה"}) + '</div>'
         + st.card("x-c1", "plain", "סוקט = נקודת קצה של תקשורת"))

recap = Scene("recap", "סיכום", [
    P("לסיכום: ב-HTTP/1.1 persistent סופרים חיבור אחד לכל שם שרת.", do=show("r-1")),
    P("ב-HTTP/2: חיבור אחד לשרת, עם multiplexing.", do=show("r-2")),
    P("עם שישה חיבורים מקבילים: $n$ חלקי שש, מעוגל למעלה, ובין שרתים לוקחים את המקסימום.", do=show("r-3"),
      say="עם שישה חיבורים מקבילים: אֶן חלקי שש, מעוגל למעלה, ובין שרתים לוקחים את המקסימום."),
    P("ואתר חדש? אל תשכחו את שאילתת ה-DNS. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.big("r-f", r"\text{rounds} = \max_{\text{server}} \left\lceil \frac{n}{6} \right\rceil", hidden=False)),
   panel=st.card("r-1", "rule", "🔑 חיבור לכל <b>שם</b>")
         + st.card("r-2", "rule", "🔑 " + w.ltr("HTTP/2") + ": חיבור אחד")
         + st.card("r-3", "ex", "$\\lceil n/6 \\rceil$, מקסימום על השרתים")
         + st.card("r-4", "trap", "⚠️ אתר חדש = גם " + w.ltr("DNS")))

VIDEO = Video("A04", "app", "כמה חיבורי TCP?", [title, names, h2, par, exam, recap], bank={"23A-A-Q7": "c"})
