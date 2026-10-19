# -*- coding: utf-8 -*-
"""Generator for tools/raw/24A-A.json -- networks, 2024 semester A, moed A (1.4.2024).
Run: PYTHONUTF8=1 py tools/gen/gen_24A-A.py

Source: the typed 10-question American exam (4 options each). The file carries no answer table and no worked
solutions; the correct option of every question is set in bold in the printed text. Per GATE1 a bold mark is NOT
treated as an official key: every question was solved independently (calculations recomputed in
tools/verify/24A-A/check.py) and the bold option agrees with the solved answer in all 10 questions.
Items ship as answerSource "solved" (official:false) with the agreement recorded in `note`.
Printed oddities kept character-exact: Q1/Q2 give the packet size as 5,000 bits (the text says ביטים) and the
Q1 arrival rate is per HOUR; options ב and ד of Q4 print the same text."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24A-A.json"
IDS = "abcdef"
EVID = "No answer table in the source; solved independently - agrees with the option printed in bold."


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def Q(num, topic, question, options, correct, explanation, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "solved", "official": False,
         "confidence": "high", "explanation": explanation, "note": EVID}
    q.update(kw)
    return q


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "delays",
    "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n"
    "- רוחב פס (bandwidth): 1 Gbps\n"
    "- גודל חבילה (packet size): 5,000 ביטים\n"
    "- מרחק התפשטות (propagation distance): 1000 קילומטרים\n"
    "- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n"
    "- ניתן להניח שאין עיכובים אחרים במערכת\n"
    "ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
    opts("עוצמת תעבורה = 0.0007, אין פוטנציאל עומס.",
         "עוצמת תעבורה = 0.07, אין פוטנציאל עומס.",
         "עוצמת תעבורה = 0.7, יש פוטנציאל קל לעומס.",
         "עוצמת תעבורה = 7, יש פוטנציאל עומס גבוה מאוד."),
    "a",
    r"""שיעור ההגעה הוא לשעה, ולכן קודם ממירים לשנייה: $a=\frac{500000}{3600}\approx 138.9$ חבילות לשנייה.
$$\rho=\frac{a\cdot L}{R}=\frac{138.9\cdot 5000}{10^{9}}\approx 0.0007$$
עוצמה קטנה בהרבה מ-1 - התור ריק כמעט תמיד ואין פוטנציאל לעומס.
ב, ג, ד מתקבלות אם שוכחים להמיר שעה לשנייה (או מחשבים בסדר גודל שגוי)."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "delays",
    "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n"
    "- רוחב פס (bandwidth): 10 Gbps\n"
    "- גודל חבילה (packet size): 5,000 ביטים\n"
    "- מרחק התפשטות (propagation distance): 1000 קילומטרים\n"
    "- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n"
    "- ניתן להניח שאין עיכובים אחרים במערכת\n"
    "מהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך שה Traffic Intensity יהיה שווה ל-0.8?",
    opts("1,600,000 חבילות לשנייה", "8,000,000 חבילות לשנייה", "16,000,000 חבילות לשנייה", "32,000,000 חבילות לשנייה"),
    "a",
    r"""מ-$\rho=\frac{a\cdot L}{R}$ מקבלים $a=\frac{\rho\cdot R}{L}=\frac{0.8\cdot 10\cdot10^{9}}{5000}=1{,}600{,}000$ חבילות לשנייה.
השאר הן כפולות של 5 או 10 מהערך הנכון (טעות בחזקת 10 או בגורם 0.8)."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "http", "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
    opts("HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP, מה שמאפשר העברת נתונים מהירה יותר.",
         "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל החיבורים.",
         "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על-גבי חיבור TCP יחיד, מה שמקטין את זמן ההשהיה (latency) הכולל בעיית חסימת ה-head-of-line שקיימת ב-TCP",
         "אף אחת מהתשובות מעלה"),
    "d",
    r"""HTTP/2 אכן שולח הרבה בקשות במקביל (multiplexing) על חיבור TCP יחיד, אבל הוא עדיין רץ מעל TCP, ולכן בעיית ה-head-of-line blocking של TCP נשארת: איבוד חבילה אחת עוצר את כל הזרמים. את הבעיה הזו פותר רק HTTP/3 (מעל QUIC).
א: HTTP/2 רץ מעל TCP, לא UDP. ב: ההצפנה נדרשת בפועל בדפדפנים, אך אינה חובה בתקן, וזה אינו שיפור בניצול משאבים. ג: הסעיף נכשל בחלקו האחרון - HTTP/2 אינו פותר את חסימת ה-head-of-line של TCP.
לכן "אף אחת מהתשובות מעלה"."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "dns_dhcp", "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
    opts("`Offer->Discover->Request->Acknowledge`",
         "`Discover->Offer-> Acknowledge->Request`",
         "`Discover->Offer-> Request -> Acknowledge`",
         "`Discover->Offer-> Acknowledge->Request`"),
    "c",
    r"""הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-Acknowledge.
א מתחילה ב-Offer לפני ה-Discover; ב ו-ד (הנוסח זהה בשתיהן בשאלון) שמות את ה-Acknowledge לפני ה-Request.""",
    note=EVID + " Options ב and ד print identical text in the source."))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "http", "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום ב-TCP?",
    opts("כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל.",
         "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת השהיית השידור הכוללת. כמו כן, לפתור את בעיית חסימת ה-head-of-line שקיימת ב-HTTP/2.",
         "כדי לבטל את הצורך בכתובות IP.",
         "כדי לספק שיטת שידור אותות אמינה יותר."),
    "b",
    r"""QUIC רץ מעל UDP, משלב את לחיצת היד של ההצפנה עם הקמת החיבור (פחות RTT) ומנהל כל זרם בנפרד, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים - פתרון לחסימת ה-head-of-line שנשארה ב-HTTP/2 מעל TCP.
א: ההצפנה היא תוצאה נלווית, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: אמינות אותות היא עניין של השכבה הפיזית."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "http",
    "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: `http://mywebsite.com/index.html`.\n"
    "בדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:\n"
    "`http://mywebsite.com/imageA.jpg`\n"
    "`http://mymirrorwebsite.com/imageB.jpg`\n"
    "לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n"
    "- `mywebsite.com: 203.0.113.10`\n"
    "- `mymirrorwebsite.com: 203.0.113.10`\n"
    "בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
    opts("1", "2", "3", "לא ניתן לדעת"),
    "b",
    r"""ב-HTTP/1.1 persistent חיבור אחד משרת כמה אובייקטים ברצף (ללא pipelining - בקשה אחת בכל פעם) מאותו שרת. הדפדפן מנהל את החיבורים לפי שם המארח (origin): `mywebsite.com` משרת גם את `index.html` וגם את `imageA.jpg` בחיבור אחד, ו-`mymirrorwebsite.com` דורש חיבור נפרד עבור `imageB.jpg` - בסך הכול 2.
העובדה ששני השמות נפתרו לאותה כתובת IP אינה גורמת לדפדפן לאחד את החיבורים. 3 היה נכון בלי שימוש חוזר בחיבור (persistent).""",
    confidence="med",
    note=EVID + " Browsers pool HTTP/1.1 connections per host name, not per IP; the shared IP is the distractor."))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "http", "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
    opts("לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע",
         "לאפשר מעקב בין אתרים ומיקוד פרסומות",
         "לשפר את האבטחה בהתחברות (session) משתמשים",
         "לנהל את ה- sessions של המשתמש באתר הנוכחי"),
    "b",
    r"""עוגיית צד שלישי נקבעת על ידי דומיין שאינו האתר שהמשתמש מבקר בו (למשל שרת פרסומות שמוטמע בדף), ולכן אותה עוגייה מזהה את אותו משתמש בכמה אתרים - מה שמאפשר מעקב בין אתרים ומיקוד פרסומות.
א, ג, ד מתארות עוגיות צד ראשון (העדפות, ניהול session)."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "http",
    "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גיאוגרפיים שונים?",
    opts("העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/2.0",
         "שימוש ב-Content Delivery Network (CDN) לאחסון ב-cache של נכסי אתר סטטיים (תמונות, CSS, JavaScript) קרוב יותר למשתמשי הקצה.",
         "אופטימיזציה של שרת האינטרנט לטיפול במספר גדול יותר של sockets בו-זמנית",
         "העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/3.0"),
    "b",
    r"""כשהמשתמשים מפוזרים גיאוגרפית, רוב זמן הטעינה הוא RTT והשהיית התפשטות למרחקים גדולים. CDN משכפל את הנכסים הסטטיים לשרתים קרובים למשתמש, ומקטין את המרחק - ההשפעה הגדולה ביותר.
HTTP/2 ו-HTTP/3 משפרים ניצול חיבור אך לא מקצרים את המרחק הפיזי; הגדלת מספר ה-sockets משפרת קיבולת שרת, לא השהיית רשת."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "dns_dhcp", "בחרו את התשובה עם הנוסח המדויק ביותר:",
    opts("פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה המאפשר הקצאה דינאמית של כתובות IP פנימיות",
         "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה של Client-Server המאפשר הקצאה סטאטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת ה-DNS המקומי",
         "DHCP הוא פרוטוקול שמשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של Client-Server",
         "אף אחת מהתשובות מעלה"),
    "d",
    r"""כל אחת משלוש הטענות שגויה: א - DHCP הוא פרוטוקול של שכבת האפליקציה (לא התעבורה). ב - הוא מקצה כתובות באופן דינמי (לא סטטי). ג - הוא משתמש ב-UDP (פורטים 67 ו-68), לא ב-TCP.
לכן "אף אחת מהתשובות מעלה"."""))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "http",
    "מפתחת אתרים מעוניינת לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
    opts("תמיד עדיף להשתמש ב-GET מותנה (Conditional GET).",
         "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם - הבקשה תישלח עם header של If-Modified-Since.",
         "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן.",
         "אין הבדל משמעותי בין האפשרויות"),
    "b",
    r"""כשהשרת מחזיר Last-Modified, הלקוח שולח `If-Modified-Since` עם התאריך שקיבל; אם המשאב לא השתנה, השרת עונה `304 Not Modified` בלי גוף - חוסך הורדה של תמונה כבדה.
א: "תמיד" שגוי - עבור תוכן שמשתנה בכל פעם בקשה מותנית רק מוסיפה תקורה. ג: PUT מעלה/מחליף משאב בשרת, ואינו בודק שינוי. ד: יש הבדל ברור ביעילות."""))

exam = {
    "examCode": "24A-A",
    "examLabel": "2024 סמסטר א מועד א",
    "year": 2024,
    "examDate": "1.4.2024",
    "sourceFile": "sitting 24A-A (typed exam, 6 pages, 10 questions)",
    "keyFile": "no answer table: solved independently, agrees with the bold option in the printed text; calculations in tools/verify/24A-A/check.py",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
