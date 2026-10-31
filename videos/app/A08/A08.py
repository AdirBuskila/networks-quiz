# -*- coding: utf-8 -*-
"""A08 · CDN, HTTP/2 ו-HTTP/3 — video script (build: tools/video/vid.py A08).

Source: courses/app/C08.js (lesson + goal: a CDN replicates content near the users and fixes load and distance, and
users reach the nearest server through DNS that answers by location; HTTP/2 multiplexes streams on ONE TCP
connection, so a lost packet still blocks every stream (HOL); HTTP/3 runs over QUIC over UDP, merges the transport
and crypto handshakes and orders each stream separately).
Exam anchor: 24A-B-Q3 (main difference between HTTP/2 and HTTP/3; key c = TCP vs UDP), which no guided quiz uses.
Avoided on purpose: the C08 quiz items and their bank twins (23A-A-Q19 / 23A-B-Q18 smart DNS, 24A-A-Q3 / SAMP HTTP/2
improvement, 24A-A-Q5 / SAMP QUIC, 24A-A-Q8 / SAMP CDN for distant users, 23A-A-Q6 CDN problems); 24A-B-Q8 is solved
in the A09 boss video. Worked numbers (own): origin RTT 200 ms vs edge RTT 20 ms for a page with 4 images; handshakes
at RTT 100 ms; three streams with packet A2 lost.
Not said on purpose: which problems a CDN solves / does not (C08-Q1), the two-cities scenario (C08-Q2), "for distant
users a CDN matters most" (C08-Q5).
Times come from w_app.segments() (the checker's persistent model); the blocked packets from w_app.hol_sim().
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_app as w

# ---------------------------------------------------------------- CDN: distance is RTT
N = 4
FAR, NEAR = w.segments("p", 200, 0, 0, N), w.segments("p", 20, 0, 0, N)
assert w.rtt_count("p", N) == 6 and (w.total(FAR), w.total(NEAR)) == (1200, 120)
BARS = w.timebars("cd", [("far", "שרת המקור, RTT 200", FAR), ("near", "שרת CDN קרוב, RTT 20", NEAR)], gap=40, seg_text=True)

# ---------------------------------------------------------------- HOL
HOL, (ORDER, WAIT_TCP, WAIT_QUIC) = w.hol("hl")
assert {s for s, _ in WAIT_TCP} == {"A", "B", "C"} and WAIT_QUIC == [("A", 3)]
assert len(WAIT_TCP) == 5

# ---------------------------------------------------------------- handshakes before the first response (RTT 100 ms)
R = 100
HS = {"tcp_tls": [("conn", R), ("tls", R), ("req", R)], "quic": [("quic", R), ("req", R)]}
assert w.total(HS["tcp_tls"]) == 300 and w.total(HS["quic"]) == 200        # TCP 1 RTT + TLS 1.3 1 RTT vs QUIC 1 RTT
HSB = w.timebars("hs", [("t", "TCP + TLS", HS["tcp_tls"]), ("q", "QUIC", HS["quic"])], gap=30)

# ---------------------------------------------------------------- exam 24A-B-Q3
Q = BANK["24A-B-Q3"]
assert Q["correctId"] == "c" and [o["id"] for o in Q["options"]] == ["a", "b", "c", "d"]
OPT = {o["id"]: o["value"] for o in Q["options"]}
assert "TCP" in OPT["c"] and "UDP" in OPT["c"] and "Server Push" in OPT["b"] and "multiplexing" in OPT["d"]
TRANSPORT = {"HTTP/1.1": "TCP", "HTTP/2": "TCP", "HTTP/3": "QUIC/UDP"}
assert TRANSPORT["HTTP/2"] == "TCP" and TRANSPORT["HTTP/3"].endswith("UDP")
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נראה שלוש דרכים להאיץ את הרשת: CDN, HTTP/2 ו-HTTP/3."),
    P("לכל אחת נבין מה היא פותרת, ובעיקר מה היא **לא** פותרת."),
    P("ובסוף נפתור שאלה ממבחן.", hold=0.4),
], stage='<div class="kicker">A08 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>CDN, HTTP/2 ו-HTTP/3</h1>'
         '<p>לדעת מה CDN פותר ואיך מגיעים לשרת הקרוב, ומה משפרים HTTP/2 ו-HTTP/3 ומה לא.</p>', layout="title")

cdn = Scene("cdn", "CDN", [
    P("CDN היא רשת להפצת תוכן: היא משכפלת את התוכן של האתר לשרתים רבים, ומציבה אותם קרוב למשתמשים.", do=show("c-c1")),
    P("כמה שווה הקרבה? דף עם ארבע תמונות, ב-persistent: שישה סבבי RTT.", do=show("cd-far-t", "cd-near-t")),
    P("מול שרת המקור, עם RTT של 200 מילישניות: 1200 מילישניות.", do=show(*w.seg_ids("cd", "far", FAR), "cd-far-tot"),
      say="מול שרת המקור, עם אַר טִי טִי של מאתיים מילישניות: אלף ומאתיים מילישניות."),
    P("מול שרת CDN באותה עיר, עם RTT של 20: רק 120. אותו מספר סבבים, כל סבב קצר פי עשרה.",
      do=show(*w.seg_ids("cd", "near", NEAR), "cd-near-tot"),
      say="מול שרת סִי דִי אֶן באותה עיר, עם אַר טִי טִי של עשרים: רק מאה ועשרים. אותו מספר סבבים, כל סבב קצר פי עשרה."),
    P("ואיך הדפדפן מוצא את השרת הקרוב, אם הוא פונה תמיד לאותו שם? דרך התשובה של DNS.", do=show("c-q")),
    P("שרת ה-DNS של המפעיל בוחר איזו כתובת להחזיר לפי המיקום של השואל. וזה נעשה עם TTL קצר, כדי שהבחירה תתעדכן.",
      do=show("c-c2"), hold=0.3),
], stage=w.stack(BARS, w.row("c-q", "אותו שם ⟵ " + w.ltr("DNS") + " ⟵ כתובת של שרת קרוב"), gap=40),
   panel=st.card("c-c1", "rule", "🔑 " + w.ltr("CDN") + ": תוכן משוכפל, קרוב למשתמש")
         + st.card("c-c2", "ex", w.ltr("DNS") + " בוחר כתובת לפי מיקום השואל"))

h2 = Scene("h2", "HTTP/2 וחסימת HOL", [
    P("HTTP/2 פותר בעיה אחרת: ניצול החיבור. כל הבקשות עוברות על חיבור TCP **אחד**, בזרמים נפרדים.", do=show("h-c1")),
    P("זה multiplexing. כאן שלושה זרמים, A, B ו-C, והחבילות שלהם יוצאות לסירוגין.", do=show("hl"),
      say="זה מוּלְטִיפְּלֶקְסִינְג. כאן שלושה זרמים, אֵיי, בִּי וסִי, והחבילות שלהם יוצאות לסירוגין."),
    P("עכשיו חבילה אחת אובדת: החבילה השנייה של זרם A.", do=show("hl-lost"),
      say="עכשיו חבילה אחת אובדת: החבילה השנייה של זרם אֵיי."),
    P("אבל TCP מוסר את הנתונים בסדר, כרצף אחד. הוא לא יודע שיש בתוכו זרמים.", do=show("h-c2")),
    P("לכן כל חבילה שנשלחה אחרי החבילה האבודה מחכה, גם של B ושל C, עד שהיא תשודר שוב.", do=show("hl-w2"),
      say="לכן כל חבילה שנשלחה אחרי החבילה האבודה מחכה, גם של בִּי ושל סִי, עד שהיא תשודר שוב."),
    P("זו חסימת head-of-line. HTTP/2 נשען על TCP, ולכן היא נשארת בו.", do=show("h-c3"), hold=0.3),
], stage=w.stack(HOL, gap=10),
   panel=st.card("h-c1", "rule", "🔑 " + w.ltr("HTTP/2") + ": " + w.ltr("multiplexing") + " על חיבור " + w.ltr("TCP") + " אחד")
         + st.card("h-c2", "ex", w.ltr("TCP") + " = רצף אחד, בסדר")
         + st.card("h-c3", "trap", "⚠️ " + w.ltr("HTTP/2") + " לא פותר " + w.ltr("HOL")))

h3 = Scene("h3", "HTTP/3 ו-QUIC", [
    P("HTTP/3 מחליף את שכבת התעבורה: הוא רץ מעל QUIC, ו-QUIC רץ מעל UDP.", do=show("q-c1")),
    P("QUIC מנהל כל זרם בנפרד. אותה חבילה אבודה עוצרת עכשיו רק את זרם A.", do=hide("hl-w2") + show("hl-w3"),
      say="קְוִויק מנהל כל זרם בנפרד. אותה חבילה אבודה עוצרת עכשיו רק את זרם אֵיי."),
    P("זרמים B ו-C ממשיכים להימסר כרגיל.", say="זרמים בִּי וסִי ממשיכים להימסר כרגיל."),
    P("ועוד חיסכון: לחיצת היד. מעל TCP, קודם פותחים חיבור, ואחר כך מקימים הצפנה. בהצפנה מודרנית, כל אחד סבב.",
      do=show("hs-t-t", *w.seg_ids("hs", "t", HS["tcp_tls"]), "hs-t-tot")),
    P("עם RTT של 100, התשובה הראשונה מגיעה אחרי 300 מילישניות.",
      say="עם אַר טִי טִי של מאה, התשובה הראשונה מגיעה אחרי שלוש מאות מילישניות."),
    P("QUIC מאחד את שתי לחיצות היד לסבב אחד. אז רק 200.",
      do=show("hs-q-t", *w.seg_ids("hs", "q", HS["quic"]), "hs-q-tot", "q-c2"),
      say="קְוִויק מאחד את שתי לחיצות היד לסבב אחד. אז רק מאתיים."),
    P("ושימו לב: ב-HTTP/3 ההצפנה מובנית ב-QUIC. ו-HTTP/2, לפי התקן, לא מחייב הצפנה.", do=show("q-c3"), hold=0.3),
], stage=w.stack(HOL, HSB, gap=26).replace('id="hl"', 'id="hl3"').replace('id="hl-', 'id="hl3-'),
   panel=st.card("q-c1", "rule", "🔑 " + w.ltr("HTTP/3") + " = " + w.ltr("QUIC") + " מעל " + w.ltr("UDP"))
         + st.card("q-c2", "ex", "לחיצת יד אחת: תעבורה + הצפנה")
         + st.card("q-c3", "ex", "הצפנה מובנית ב-" + w.ltr("HTTP/3")))
# the HOL figure appears again in this scene with its own ids (hl3-*): the packet is lost, QUIC blocks one stream
h3.phrases[0].do += show("hl3-lost")
h3.phrases[1].do = show("hl3-w3")

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: מהו ההבדל העיקרי בין HTTP/2 ל-HTTP/3?"),
    P("ההבדל היסודי הוא שכבת התעבורה: HTTP/2 מעל TCP, ו-HTTP/3 מעל QUIC, שרץ מעל UDP.", do=show("x-t", "q-ok-c")),
    P("הטענה ש-HTTP/2 דורש הצפנה ו-HTTP/3 לא, הפוכה: ב-HTTP/3 ההצפנה מובנית, והוא תמיד מוצפן.", do=show("q-x-a", "q-n-a")),
    P("Server Push הוגדר גם ב-HTTP/3. כך שגם זה לא ההבדל.", do=show("q-x-b", "q-n-b"),
      say="סֶרְבֶר פּוּשׁ הוגדר גם באֵייץ' טִי טִי פִּי שלוש. כך שגם זה לא ההבדל."),
    P("וגם HTTP/3 עושה multiplexing, על זרמי QUIC. ההבדל הוא שאצלו הזרמים לא חוסמים זה את זה.",
      do=show("q-x-d", "q-n-d"), hold=0.5),
], stage=w.stack(w.table("x-t", ["", w.ltr("HTTP/1.1"), w.ltr("HTTP/2"), w.ltr("HTTP/3")], [
    ["תעבורה", w.ltr("TCP"), w.ltr("TCP"), w.ltr("QUIC / UDP")],
    ["ריבוי בקשות", "חיבורים מקבילים", w.ltr("multiplexing"), "זרמי " + w.ltr("QUIC")],
    [w.ltr("HOL") + " של " + w.ltr("TCP"), "יש", "נשאר", "נפתר"]], cls="sm")),
   panel=f'<div class="qstem ap-qsm"><span class="qid">{Q["id"]}</span>מהו ההבדל העיקרי בין גרסה '
         + w.ltr("HTTP/2") + ' ו-' + w.ltr("HTTP/3") + '?</div>'
         + '<div class="ap-osm">' + st.options("q", OPTS, notes={"a": "הפוך", "b": "בשתיהן", "d": "בשתיהן"}) + '</div>')

recap = Scene("recap", "סיכום", [
    P("לסיכום: CDN מקרבת את התוכן למשתמש, ומקצרת כל RTT. ואת השרת הקרוב בוחרת תשובת ה-DNS.", do=show("r-1")),
    P("HTTP/2: הרבה זרמים על חיבור TCP אחד. אבל חבילה שאבדה עדיין עוצרת את כולם.", do=show("r-2")),
    P("HTTP/3: QUIC מעל UDP. כל זרם בנפרד, ולחיצת יד אחת לתעבורה ולהצפנה. נתראה ברמה הבאה.", do=show("r-3"), hold=0.6),
], stage=w.stack(w.row("r-f", w.ltr("HTTP/2 → TCP") + " &nbsp;·&nbsp; " + w.ltr("HTTP/3 → QUIC → UDP"), hidden=False)),
   panel=st.card("r-1", "rule", "🔑 " + w.ltr("CDN") + ": תוכן קרוב, " + w.ltr("RTT") + " קצר")
         + st.card("r-2", "trap", "⚠️ " + w.ltr("HTTP/2") + ": " + w.ltr("HOL") + " נשאר")
         + st.card("r-3", "rule", "🔑 " + w.ltr("HTTP/3") + ": זרמים נפרדים, פחות " + w.ltr("RTT")))

VIDEO = Video("A08", "app", "CDN, HTTP/2 ו-HTTP/3", [title, cdn, h2, h3, exam, recap], bank={"24A-B-Q3": "c"})
