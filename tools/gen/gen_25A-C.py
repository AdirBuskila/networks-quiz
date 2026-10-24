# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-C.json -- networks, 2025 semester A, moed C.
Run: PYTHONUTF8=1 py tools/gen/gen_25A-C.py

Source: the exam page with the answers highlighted in yellow (3 pages, 16 printed questions).
The page numbers two questions "5" (the queue-overflow question and the TCP window-size question);
the second one is stored as num 16 so the numbers stay unique.
The highlighted key is used as given (answerSource highlighted-pdf), with these exceptions:
  Q3 - key says 10ms, but the printed data gives 15.65 ms (tools/verify/25A-C/check.py): typo ruling, key c (15ms),
       solved / official:false (arbiter 2026-10-24).
  Q4 - official key a kept, d also accepted (acceptedIds [a, d], arbiter 2026-10-24).
The page carries no explanations; the explanations below are written for this app (EXPL)."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-C.json"
IDS = "abcdef"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def Q(num, topic, question, options, correct, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "highlighted-pdf", "official": True,
         "confidence": "high", "explanation": ""}
    q.update(kw)
    return q


questions = []

questions.append(Q(
    1, "http",
    "נתון אתר אינטרנט עם 100 משאבים שונים (תמונות, סקריפטים וכו'). כל משאב בגודל KB 100. חשב את מספר חיבורי ה-TCP הדרושים ב-HTTP 1.1 וב-HTTP/2 להורדת כל המשאבים.",
    opts("17 חיבורים ב-HTTP 1.1, וחיבור אחד ב-HTTP/2",
         "50 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2",
         "10 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2",
         "5 חיבורים ב-HTTP 1.1 ו-5 חיבורים ב-HTTP/2"),
    "a", confidence="med",
    note="Official yellow key; 17 = ceil(100/6) request rounds under the 6-parallel-connection convention (not printed) - explained in a הערה; HTTP/2 half decides the item. Arbiter 2026-10-24."))

questions.append(Q(
    2, "dns_dhcp",
    "בהינתן שרת DNS עם זמן תגובה ממוצע של 30 מילי-שניות לכל פנייה, כמה זמן יידרש בממוצע לשלוף רשומה שאינה בזיכרון המטמון?",
    opts("90ms", "30ms", "60ms", "120ms"), "a", confidence="med",
    note="Official yellow key (90ms); the question does not say how many servers are queried (root, TLD, authoritative is the implied three)."))

questions.append(Q(
    3, "delays",
    "במערכת רשת הכוללת שלושה קישורים טוריים עם רוחבי פס של 100 Mbps, 50 Mbps ו-10 Mbps, וגודל חבילה של 5000 ביטים, חשב את זמן ההשהייה הכולל אם מהירות ההפצה היא $2\\cdot 10^{8}$ m/s ואורך כל קישור הוא 1000 ק\"מ.",
    opts("5ms", "10ms", "15ms", "20ms"), "c",
    answerSource="solved", official=False,
    note="Official yellow key b (10ms) contradicts the printed data (15.65 ms); typo ruling, key = nearest option c. Arbiter 2026-10-24."))

questions.append(Q(
    4, "tcp", "מהי מטרת מנגנון ה-Slow Start בפרוטוקול TCP?",
    opts("למנוע הצפה של הרשת על ידי שמירה על קצב גידול מהיר יחסית בגודל החלון",
         "לשמור על גודל חלון קבוע בתהליך שליחת החבילות כדי למנוע עומס",
         "להבטיח שחבילות יגיעו ליעד ללא אובדן כלל תוך שמירה על קצב שליחה קבוע",
         "למנוע קפיצה מיידית למהירות העברת הנתונים המרבית"),
    "a", acceptedIds=["a", "d"],
    note="Official key a; d also accepted (correct description of slow start) - arbiter 2026-10-24, ASK_ADIR open."))

questions.append(Q(
    5, "delays", "מה קורה כאשר תור בנתב מתמלא עקב עומס יתר?",
    opts("חבילות חדשות נזרקות (packet loss)",
         "הנתב מפסיק לעבוד לחלוטין",
         "הנתב מתחיל להעביר חבילות לאיטיות רבה",
         "הנתב מפעיל באופן אוטומטי חיבור גיבוי"),
    "a"))

questions.append(Q(
    6, "delays",
    "במערכת תקשורת, אם עיכוב העיבוד (Processing Delay) גבוה משמעותית מהעיכוב ההולכה (Transmission Delay), מה מהבאים הוא הסבר סביר לכך?",
    opts("רוחב הפס של הקו נמוך מאוד",
         "הנתב עמוס או בעל יכולת עיבוד נמוכה",
         "המרחק הפיזי בין התחנות גדול מאוד",
         "נעשה שימוש בפרוטוקול UDP במקום TCP"),
    "b"))

questions.append(Q(
    7, "tcp",
    "באילו תנאים יבחר פרוטוקול TCP להקטין את גודל חלון השליחה (Congestion Window)?",
    opts("כאשר מתקבלת הודעת ACK תוך זמן קצר מהצפוי או מתקבלת הודעת איבוד מנות",
         "כאשר לא מתקבלת תגובה תוך Timeout",
         "כאשר הקו פנוי לחלוטין ואין עומסים",
         "כאשר מנות נשלחות בסדר לא נכון"),
    "b"))

questions.append(Q(
    8, "link_layer", "ברשת Ethernet, מה מהבאים אינו מתבצע כחלק מתפקידי שכבת הקו?",
    opts("זיהוי התנגשות מנות וטיפול בה (Collision Detection)",
         "חלוקת כתובות IP ייחודיות למכשירים ברשת",
         "קביעת מסגרות (Framing) של המידע בחבילות בעלות התחלה וסיום ברורים",
         "זיהוי שגיאות באמצעות סיכום בדיקה (Checksum)"),
    "b"))

questions.append(Q(
    9, "dns_dhcp", "מה תפקידו העיקרי של פרוטוקול ARP?",
    opts("להצפין חבילות מידע",
         "לתרגם כתובת IP לכתובת MAC",
         "לנהל חיבורים מוצפנים",
         "להקצות כתובות IP חדשות"),
    "b"))

questions.append(Q(
    10, "tcp", "באיזה מצב תתרחש קריסת חלון TCP (TCP Window Collapse)?",
    opts("כאשר אין מספיק רוחב פס",
         "כאשר הרשת ריקה ממנות",
         "כאשר מתקבלות שגיאות מרובות או עומס גבוה",
         "כאשר הנתב מפעיל פרוטוקול גיבוי"),
    "c"))

questions.append(Q(
    11, "nat_ipv6_icmp", "באיזה פרוטוקול משתמשים בעיקר לשליחת הודעות שגיאה ברשת IP?",
    opts("TCP", "UDP", "ICMP", "HTTP"), "c"))

questions.append(Q(
    12, "delays", "מה ההבדל העיקרי בין המושגים Bandwidth ו-Throughput בתקשורת נתונים?",
    opts("Bandwidth מודד את זמני העיכוב, בעוד Throughput מודד את מספר החיבורים",
         "Bandwidth הוא הקיבולת התיאורטית המרבית של ערוץ, בעוד Throughput הוא קצב ההעברה בפועל",
         "Bandwidth מתייחס לדיוק הנתונים, בעוד Throughput מתייחס לאמינות החיבור",
         "אין הבדל – אלו שני שמות לאותו המושג"),
    "b"))

questions.append(Q(
    13, "intro_layers", "איזה פרוטוקול משתמש במספרי יציאה (Port Numbers) כדי לנתב מידע?",
    opts("IP", "TCP", "ICMP", "ARP"), "b"))

questions.append(Q(
    14, "intro_layers", "מהו תפקידה המרכזי של שכבת התעבורה (Transport Layer) במודל OSI, בעת תקשורת בין שני מחשבים ברשת?",
    opts("לקבוע את המסלול שהחבילה תעבור בין התחנות ברשת, תוך התחשבות בנתבים ובטופולוגיה",
         "לספק שירותים של תקשורת קצה-לקצה, ניהול חיבורים, בקרת שגיאות ושליחת נתונים בצורה אמינה",
         "להצפין את המידע כדי להבטיח אבטחת מידע במהלך ההעברה",
         "לחלק רשת גדולה לתת-רשתות קטנות יותר באמצעות כתובות ותתי-מסכות"),
    "b"))

questions.append(Q(
    15, "dns_dhcp", "איזה פרוטוקול משמש להתאמת כתובת IP לכתובת MAC?",
    opts("DNS", "HTTP", "ARP", "FTP"), "c"))

questions.append(Q(
    16, "tcp", "כיצד גודל החלון משפיע על ביצועי העברת הנתונים ב-TCP?",
    opts("קובע כמה נתונים ניתן לשלוח לפני קבלת אישור מהנמען",
         "מגדיר את מספר הנתבים שניתן לעבור דרכם",
         "משמש להצפנת המידע המועבר",
         "מגביל את מספר החיבורים לרשת"),
    "a",
    note="Printed a second time as question number 5 (the page numbers two questions 5); stored as num 16."))


EXPL = {
    1: r"""ב-HTTP/2 כל הבקשות לאותו שרת עוברות במקביל (multiplexing) על חיבור TCP אחד בלבד, ולכן רק תשובה א אפשרית: בכל שאר התשובות יש יותר מחיבור אחד ב-HTTP/2.
ב-HTTP 1.1 כל חיבור מטפל בבקשה אחת בכל פעם, ולכן הדפדפן פותח כמה חיבורים מקבילים לשרת - בדרך כלל עד 6. כך 100 המשאבים מתחלקים ל-$\lceil 100/6 \rceil = 17$ סבבים של בקשות.
הערה: השאלה אינה מציינת את מספר החיבורים המקבילים. המספר 17 מבוסס על המוסכמה של 6 חיבורים מקבילים, ובפועל הוא מספר סבבי הבקשות: עם חיבורים מתמשכים (persistent) נפתחים 6 חיבורים, שכל אחד מהם משמש לכ-17 בקשות.""",
    2: r"""כשהרשומה אינה במטמון, השרת פונה בשאילתות עוקבות: שרת ה-Root, אחריו שרת ה-TLD ולבסוף השרת האוטוריטטיבי. כל שאילתה נמשכת 30ms, ולכן $3\cdot 30=90\,\text{ms}$.
הנחה: סופרים רק את שלוש השאילתות האלה. אם סופרים גם את הפנייה הראשונה של הלקוח אל ה-Resolver המקומי מתקבלים $4\cdot 30=120\,\text{ms}$ (אפשרות ד), אבל הפתרון הצפוי בשאלה הוא 90ms.
30ms ו-60ms מניחים שאילתה אחת או שתיים בלבד, שאינן מספיקות כדי להגיע לשרת האוטוריטטיבי.""",
    3: r"""הפתרון הרשמי עם תיקון: בדף מסומנת התשובה 10ms, אך לפי הנתונים המודפסים זמן ההשהייה הוא כ-15.65ms, והתשובה הקרובה ביותר היא 15ms.
השהיית התפשטות: כל קישור באורך $1000\,\text{km}$, ולכן $\frac{10^{6}\,\text{m}}{2\cdot 10^{8}\,\text{m/s}}=5\,\text{ms}$ לקישור, ובשלושה קישורים $15\,\text{ms}$.
השהיית שידור (Store-and-Forward, בכל קישור מחדש): $\frac{5000}{10^{8}}+\frac{5000}{5\cdot 10^{7}}+\frac{5000}{10^{7}}=0.05+0.1+0.5=0.65\,\text{ms}$.
סך הכול $15+0.65=15.65\,\text{ms}\approx 15\,\text{ms}$. כבר השהיית ההתפשטות לבדה (15ms) גדולה מ-10ms, ולכן 10ms אינו אפשרי לפי נתוני השאלה.""",
    4: r"""Slow Start מתחיל בחלון עומס קטן (cwnd = 1 MSS) ומכפיל אותו בכל RTT. כך TCP לא שולח מיד חלון מלא שעלול להציף את הרשת, ועדיין מגיע במהירות (גידול מעריכי) לקצב שהרשת מסוגלת לשאת, עד ssthresh או עד איבוד חבילה.
ב שגויה: החלון אינו קבוע. ג שגויה: Slow Start אינו מבטיח מסירה ללא אובדן.
הערה: המפתח הרשמי הוא א. גם ד מתארת נכון את Slow Start (התחלה בחלון קטן במקום קפיצה מיידית לקצב המרבי), ולכן גם היא מתקבלת כנכונה.""",
    5: r"""לתור בנתב יש גודל סופי. כשהוא מתמלא, חבילה חדשה שמגיעה אין לה מקום והנתב זורק אותה (packet loss, בדרך כלל tail drop). האובדן הוא אות העומס ש-TCP מגיב אליו.
ב: הנתב ממשיך לעבוד. ג: הנתב אינו מאט את ההעברה, הוא פשוט זורק חבילות שלא נכנסות. ד: אין "חיבור גיבוי" אוטומטי כתגובה למילוי תור.""",
    6: r"""השהיית עיבוד (processing) היא הזמן שהנתב משקיע בבדיקת הכותרת, בחירת הנתיב וניהול התור. אם היא גבוהה בהרבה מהשהיית השידור, ההסבר הסביר הוא שהנתב עמוס או חלש ולכן מעבד לאט.
א: רוחב פס נמוך מגדיל דווקא את השהיית השידור $L/R$ ולא את העיבוד. ג: מרחק גדול מגדיל את השהיית ההתפשטות. ד: בחירת UDP או TCP אינה משנה את זמן העיבוד בנתב.""",
    7: r"""TCP מקטין את חלון העומס כשהוא מזהה עומס, והסימן הברור לכך הוא היעדר תגובה: כשלא מתקבל ACK תוך Timeout, החבילה כנראה אבדה בגלל עומס, ו-TCP מקטין את החלון (בדרך כלל חזרה ל-1 MSS) ומקטין את ssthresh.
א: ACK שמגיע מהר מהצפוי מעיד שאין עומס, ולכן החלון דווקא גדל. ג: כשהקו פנוי החלון גדל ולא קטן. ד: הגעה בסדר שגוי אינה סימן לעומס בפני עצמה (TCP מסדר מחדש אצל המקבל).""",
    8: r"""שכבת הקו אחראית על העברת מסגרות בין שני צמתים סמוכים: מסגור (Framing), זיהוי שגיאות (CRC/Checksum) וטיפול בגישה לערוץ, כולל זיהוי התנגשויות ב-Ethernet.
הקצאת כתובות IP היא עניין של שכבת הרשת (ושל DHCP בשכבת האפליקציה), ולכן ב היא מה שאינו מתבצע בשכבת הקו.""",
    9: r"""ARP (Address Resolution Protocol) מתרגם כתובת IP ידועה לכתובת MAC באותה רשת מקומית: התחנה משדרת בקשה לכולם, והבעלים של ה-IP עונה עם כתובת ה-MAC שלו.
א ו-ג עוסקות בהצפנה, ד היא תפקיד של DHCP.""",
    10: r"""קריסת חלון (window collapse) קורית כשיש עומס גבוה או שגיאות רבות: חבילות אובדות, מתרחש Timeout, וחלון העומס יורד בבת אחת (בדרך כלל ל-1 MSS) ואז מתחילים שוב מ-Slow Start.
א: רוחב פס נמוך מגביל את הקצב אך אינו גורם לקריסה מיידית. ב: ברשת ריקה החלון גדל. ד: פרוטוקול גיבוי של הנתב אינו קשור.""",
    11: r"""ICMP (Internet Control Message Protocol) משמש לשליחת הודעות שגיאה ובקרה ברשת IP, למשל Destination Unreachable ו-Time Exceeded.
TCP ו-UDP הם פרוטוקולי תעבורה שנושאים נתוני אפליקציה, ו-HTTP הוא פרוטוקול אפליקציה.""",
    12: r"""Bandwidth הוא הקיבולת התיאורטית המרבית של הערוץ (למשל 100 Mbps), ו-Throughput הוא הקצב שמושג בפועל, והוא בדרך כלל קטן יותר בגלל עומס, שגיאות, שליחות חוזרות ותקורה.
א ו-ג מחליפים בין מושגים שאינם קשורים (עיכוב, אמינות), ו-ד שגויה כי יש הבדל.""",
    13: r"""מספרי פורטים (Port Numbers) הם חלק מכותרת פרוטוקול התעבורה (TCP, וגם UDP), והם קובעים לאיזה תהליך אפליקציה לספק את הנתונים. מבין האפשרויות רק TCP הוא פרוטוקול תעבורה.
IP מנתב לפי כתובות IP, ICMP נושא הודעות בקרה, ו-ARP מתרגם IP ל-MAC - אף אחד מהם אינו משתמש בפורטים.""",
    14: r"""שכבת התעבורה מספקת תקשורת קצה-לקצה בין תהליכים: ניהול חיבורים, בקרת שגיאות ובקרת זרימה ועומס, ובפרוטוקול TCP גם שליחה אמינה.
א: קביעת מסלול וניתוב היא תפקיד שכבת הרשת. ג: הצפנה אינה תפקידה המרכזי של שכבת התעבורה. ד: חלוקה לתת-רשתות באמצעות כתובות ומסכות היא עניין של שכבת הרשת.""",
    15: r"""ARP מתאים כתובת IP לכתובת MAC ברשת המקומית.
DNS מתרגם שמות לכתובות IP, HTTP מעביר דפי אינטרנט ו-FTP מעביר קבצים - אף אחד מהם אינו קשור לכתובות MAC.""",
    16: r"""חלון TCP קובע כמה נתונים השולח רשאי לשלוח לפני שהוא חייב להמתין לאישור (ACK) מהנמען. חלון גדול יותר מאפשר לשלוח יותר נתונים ברצף, מנצל טוב יותר את הקו ומשפר את התפוקה, בכפוף ל-rwnd ול-cwnd.
ב: מספר הנתבים בדרך אינו קשור לחלון. ג: החלון אינו משמש להצפנה. ד: החלון אינו מגביל את מספר החיבורים לרשת.""",
}
for _q in questions:
    if _q.get("num") in EXPL and not _q.get("hold"):
        _q["explanation"] = EXPL[_q["num"]]

exam = {
    "examCode": "25A-C",
    "examLabel": "2025 סמסטר א מועד ג",
    "year": 2025,
    "examDate": "2025",
    "sourceFile": "sitting 25A-C (exam page with yellow-highlighted answers)",
    "keyFile": "sitting 25A-C yellow highlights; Q3 recomputed in tools/verify/25A-C/check.py (typo ruling, key c)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
