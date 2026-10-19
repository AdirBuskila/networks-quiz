# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-C.json -- networks, 2025 semester A, moed C.
Run: PYTHONUTF8=1 py tools/gen/gen_25A-C.py

Source: the exam page with the answers highlighted in yellow (3 pages, 16 printed questions).
The page numbers two questions "5" (the queue-overflow question and the TCP window-size question);
the second one is stored as num 16 so the numbers stay unique.
The highlighted key is used as given (answerSource highlighted-pdf), with these exceptions:
  Q3 - HELD: key says 10ms, recomputation gives 15.65 ms (tools/verify/25A-C/check.py) -> ASK_ADIR.
The page carries no explanations, so explanation is empty for the keyed questions."""
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
    note="Official yellow key. 17 = ceil(100/6) assumes 6 parallel connections per host, a convention the question does not print; only this option has a single HTTP/2 connection."))

questions.append(Q(
    2, "dns_dhcp",
    "בהינתן שרת DNS עם זמן תגובה ממוצע של 30 מילי-שניות לכל פנייה, כמה זמן יידרש בממוצע לשלוף רשומה שאינה בזיכרון המטמון?",
    opts("90ms", "30ms", "60ms", "120ms"), "a", confidence="med",
    note="Official yellow key (90ms); the question does not say how many servers are queried (root, TLD, authoritative is the implied three)."))

questions.append({
    "num": 3, "topic": "delays",
    "question": "במערכת רשת הכוללת שלושה קישורים טוריים עם רוחבי פס של 100 Mbps, 50 Mbps ו-10 Mbps, וגודל חבילה של 5000 ביטים, חשב את זמן ההשהייה הכולל אם מהירות ההפצה היא $2\\cdot 10^{8}$ m/s ואורך כל קישור הוא 1000 ק\"מ.",
    "options": opts("5ms", "10ms", "15ms", "20ms"),
    "hold": "official key (10ms) disagrees with recomputation: 5000 bit over 100/50/10 Mbps = 0.65 ms, propagation 3 x 5 ms = 15 ms, total 15.65 ms (nearest option 15ms); propagation alone already exceeds 10 ms",
})

questions.append(Q(
    4, "tcp", "מהי מטרת מנגנון ה-Slow Start בפרוטוקול TCP?",
    opts("למנוע הצפה של הרשת על ידי שמירה על קצב גידול מהיר יחסית בגודל החלון",
         "לשמור על גודל חלון קבוע בתהליך שליחת החבילות כדי למנוע עומס",
         "להבטיח שחבילות יגיעו ליעד ללא אובדן כלל תוך שמירה על קצב שליחה קבוע",
         "למנוע קפיצה מיידית למהירות העברת הנתונים המרבית"),
    "a"))

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

exam = {
    "examCode": "25A-C",
    "examLabel": "2025 סמסטר א מועד ג",
    "year": 2025,
    "examDate": "2025",
    "sourceFile": "sitting 25A-C (exam page with yellow-highlighted answers)",
    "keyFile": "sitting 25A-C yellow highlights; Q3 recomputed in tools/verify/25A-C/check.py and held",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
