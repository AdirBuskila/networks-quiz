# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-A.json -- networks, 2025 semester A, moed A (27.02.2025).
Run: PYTHONUTF8=1 py tools/gen/gen_25A-A.py

Source: the printed exam (6 pages, 15 MCQ, 4 options each, 6.67 pts). The sitting has NO printed key and no
solution file, so every question was solved independently (answerSource "solved", official:false).
Calculations are recomputed in tools/verify/25A-A/check.py (Q2 delay, Q3 2D parity, Q5 Dijkstra table, Q6 longest prefix).
Page 2 is a formula sheet (not a question). Figures: Q2 topology, Q5 graph and table.
Q5: the table header prints 'Shortest distance from X' while its first row is node v (distance 0) and the stem says
'from V'; the table is read as distances from v (node x is at distance 5, so a source x is impossible)."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-A.json"
IDS = "abcdef"
EVID = "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations)."


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def Q(num, topic, question, options, correct, explanation, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "solved", "official": False,
         "confidence": "high", "explanation": explanation, "note": EVID}
    q.update(kw)
    return q


questions = []

questions.append(Q(
    1, "http", "מה הפונקציה העיקרית של Cookies ב-HTTP?",
    opts("אחסון העדפות המשתמש עבור האתר.", "מעקב אחר סשן (session) המשתמש בין בקשות.",
         "הצפנת הנתונים במהלך ההעברה.", "האצת מהירות הבקשות ב-HTTP."),
    "b",
    r"""HTTP הוא חסר מצב, ו-Cookie נוצר כדי שהשרת יזהה שבקשות עוקבות מגיעות מאותו משתמש (סשן).
א: אחסון העדפות הוא שימוש משני, לא הפונקציה העיקרית. ג: הצפנה היא תפקיד TLS. ד: Cookies אינם מאיצים בקשות.""",
    confidence="med"))

questions.append(Q(
    2, "delays",
    "בהינתן רשת עם שלושה קווים עם מהירות רוחב פס שונה (ראה תמונה), גודל החבילה 8000 bit ומהירות ההפצה $3\\cdot 10^{8}$ m/s, וללא השהיות (delay) אחרות בתחנות קצה או בנתבים, מהו זמן השהייה (delay) כולל של הרשת? יש לבחור את התשובה הקרובה ביותר.",
    opts("4 מילישניות", "4 שניות", "10 שניות", "10 מילישניות"), "a",
    r"""שלושה קישורים ברצף (Store-and-forward): $d=\frac{L}{R}+\frac{\text{length}}{3\cdot10^{8}}$ לכל קישור.
קישור 1: $\frac{8000}{10^{7}}=0.8\,ms$ ו-$\frac{2000}{3\cdot10^{8}}\approx 6.7\,\mu s$. קישור 2: $0.8\,ms$ ו-$\frac{10^{6}}{3\cdot10^{8}}\approx 3.33\,ms$. קישור 3: $\frac{8000}{10^{9}}=8\,\mu s$ ו-$6.7\,\mu s$.
סך הכול $\approx 4.95\,ms$, והתשובה הקרובה ביותר היא 4 מילישניות. שניות (4 או 10) רחוקות בשלושה סדרי גודל, ו-10 ms רחוק פי חמישה.""",
    image="images/exams/25A-A-Q2.png",
    note=EVID + " Propagation speed printed as '3*108' (superscript); 3*10^8 m/s used. Total 4.95 ms, 'closest answer' is 4 ms."))

questions.append(Q(
    3, "link_layer",
    "בצד המקבל קיבלנו בלוק של הנתונים כאשר העמודה והשורה האחרונות נועדות לבדיקת הנכונות בשיטת two-dimensional parity\n"
    "```\n10010100 11001010 1\n10001000 00000000 1\n11011011 11101001 1\n10010000 11101001 1\n00011100 01101010 1\n01011011 10100000 1\n```\n"
    "מהי השורה והעמודה שבהם הביטים התהפכו",
    opts("שורה 2, עמודה 4", "שורה 1, עמודה 3", "שורה 3, עמודה 5", "שורה 4, עמודה 2"), "a",
    r"""בודקים זוגיות (Even parity) לכל שורה (17 הביטים, האחרון הוא ביט הבדיקה) ולכל עמודה (השורה האחרונה היא שורת הבדיקה).
רק שורה 2 מכילה מספר אי-זוגי של אחדות (3), ורק עמודה 4 (הספירה משמאל, כפי שהביטים מודפסים) מכילה מספר אי-זוגי של אחדות.
החיתוך הוא שורה 2, עמודה 4: הביט שהתהפך.""",
    note=EVID + " Rows read as printed left to right, columns counted from the left, even parity (the only reading with exactly one bad row and one bad column)."))

questions.append(Q(
    4, "nat_ipv6_icmp", "איזה מבין הבאים מהווה חסרון פוטנציאלי של NAT?",
    opts("הוא עלול לגרום לבעיות ביישומים שדורשים נראות של כתובת IP מקצה לקצה.",
         "הוא מגדיל את מספר כתובות ה-IP הציבוריות הנדרשות.",
         "הוא מבטל את הצורך בחומת אש ברשת.",
         "הוא מונע גישה לאינטרנט מהתקנים ברשת הפרטית."),
    "a",
    r"""NAT משנה כתובות ופורטים בכותרת, ולכן יישומים שתלויים בכתובת האמיתית של הקצה (שרתים פנימיים, חלק מפרוטוקולי VoIP ו-P2P) נפגעים.
ב: ההפך, NAT חוסך כתובות ציבוריות. ג: NAT אינו מחליף חומת אש. ד: NAT דווקא מאפשר גישה."""))

questions.append(Q(
    5, "routing", "בהינתן גרף רשת וטבלת המרחקים מקודקוד V:\nמהם המשקלים של קשת X ו-קשת Y?",
    opts("X=4, Y=1", "X – אי אפשר לקבוע, Y=1", "X=6, Y=2", "X = 1, Y – אי אפשר לקבוע"), "a",
    r"""הטבלה היא פלט של Dijkstra מ-$v$: $D(u)=4$ דרך $v$; $D(w)=5$ עם קודם $u$, כלומר $4+Y=5$ ולכן $Y=1$; $D(y)=9$ עם קודם $w$, כלומר $5+X=9$ ולכן $X=4$.
בדיקה: מ-$x$ ל-$y$ $5+5=10>9$ ומ-$z$ $6+4=10>9$, ולכן $w$ הוא אכן הקודם של $y$. שני המשקלים נקבעים באופן יחיד.""",
    image="images/exams/25A-A-Q5.png",
    note=EVID + " Table header prints 'from X' but the first row is v (distance 0) and the stem says V; read as distances from v."))

questions.append(Q(
    6, "ip_cidr", "לאיזה מסלול תנותב החבילה עם כתובת היעד 12.100.60.37 לפי טבלת הניתוב הבאה?\n"
    "`A: 12.100.50.0/20`\n`B: 12.100.64.0/20`\n`C: 12.0.0.0/8`\n`D: 12.100.0.0/16`",
    opts("A", "B", "C", "D"), "a",
    r"""Longest Prefix Match. A: $12.100.50.0/20$ מכסה $12.100.48.0-12.100.63.255$ - כוללת את 60. B: $12.100.64.0/20$ מכסה $64-79$ - לא. C ו-D מכילות את הכתובת אבל המסכות קצרות יותר ($/8$ ו-$/16$).
לכן A, C, D מתאימות, והארוכה ביותר היא A ($/20$)."""))

questions.append(Q(
    7, "physical_misc", "מהו ההבדל העיקרי בין חיבור מסוג point-to-point link לבין חיבור מסוג broadcast link?",
    opts("ב-broadcast link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. point-to-point link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד.",
         "ב-point-to-point link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. broadcast link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד.",
         "ב-point-to-point link התווך אינו משותף לכל יחידות הקצה ומשתמשים ב-broadcast link כדי לחבר בין שתי נקודות קצה על ידי כך שמכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע.",
         "אף אחת מהתשובות אינה נכונה"),
    "a",
    r"""Broadcast link: תווך משותף, כל התחנות שומעות, והיעד מזהה את הכתובת שלו. Point-to-point: קו ייעודי בין שתי נקודות בלבד.
ב: ההגדרות הפוכות. ג: מבלבל בין שני הסוגים. ד: שגויה כי א נכונה."""))

questions.append(Q(
    8, "physical_misc", "מדוע חברה כמו גוגל מתחזקת רשת מקבילה לרשת של ספקי ISP?",
    opts("לחברה שהיא מקור להרבה מאד מידע יותר זול לבנות רשת נפרדת לשימושה. כך היא תשתמש פחות בקווים של ISPs אחרים, עליהם היא צריכה לשלם, ותחסוך עלויות.",
         "כדי להגדיל את התלות בספקי אינטרנט חיצוניים ולשפר את מהירות החיבור לרשת.",
         "הקמת רשת פרטית יקרה יותר, אך משפרת את האבטחה של המידע של גוגל.",
         "כדי למנוע לחלוטין את הצורך בחיבור לרשת האינטרנט הציבורית דבר התורם להשפעתה של גוגל על מרחב האינטרנט"),
    "a",
    r"""חברת תוכן ענקית מעבירה כמויות מידע עצומות, ולכן משתלם לה להקים רשת משלה ולהקטין את התשלום ל-ISPs (וגם לקרב תוכן למשתמשים).
ב: המטרה היא להקטין תלות, לא להגדיל. ג: הנימוק העיקרי הוא עלות, והטענה שהרשת הפרטית יקרה יותר אינה מסבירה את המהלך. ד: גוגל עדיין מתחברת לאינטרנט הציבורי."""))

questions.append(Q(
    9, "nat_ipv6_icmp", "מהו הייעוד העיקרי של NAT ברשת?",
    opts("לחסוך בכתובות IP ציבוריות באמצעות תרגום כתובות IP פרטיות לכתובות ציבוריות.",
         "לספק הצפנה לנתונים העוברים באינטרנט.",
         "לחסום גישה לא מורשית לרשת.",
         "לשייך כתובות IP סטטיות להתקנים ברשת."),
    "a",
    r"""NAT מאפשר להתקנים רבים עם כתובות פרטיות לחלוק כתובת ציבורית אחת, וכך חוסך כתובות IPv4. הצפנה ואבטחה אינן ייעודו, ושיוך כתובות סטטיות אינו תפקיד של NAT."""))

questions.append(Q(
    10, "udp_checksum", "לאיזה מבין היישומים הבאים UDP משמש לעיתים קרובות?",
    opts("סטרימינג וידאו חי (Live Video Streaming)", "העברת קבצים (File Transfer)",
         "גלישה באינטרנט (Web Browsing)", "דואר אלקטרוני (Email)"),
    "a",
    r"""סטרימינג חי רגיש לעיכוב ויכול לסבול אובדן קל, ולכן UDP מתאים. העברת קבצים, גלישה (HTTP) ודואר (SMTP) דורשים אמינות ולכן משתמשים ב-TCP."""))

questions.append(Q(
    11, "http", "מהי המשמעות של הכותרת Cache-Control: max-age=3600 (header) בהודעת HTTP?",
    opts("ניתן לאחסן את התגובה במטמון למשך שעה לפני שתוקפה יפוג.",
         "התגובה תאופס מידית מהמטמון.",
         "התגובה תישמר במטמון ללא הגבלת זמן.",
         "התגובה תישמר למשך 3600 אלפיות שנייה (מילישניות)."),
    "a",
    r"""$max\text{-}age$ נמדד בשניות: $3600\,s=1$ שעה. ב ו-ג מנוגדות להגדרה, ו-ד טועה ביחידות (3600 ms הוא 3.6 שניות)."""))

questions.append(Q(
    12, "sockets_email", "מהו התהליך בו נשלחת הודעת דואר אלקטרוני מ-User Agent של השולח ל-User Agent של הנמען?",
    opts("ה-User Agent של השולח שולח את ההודעה לשרת הדואר שלו, אשר מקים חיבור TCP עם שרת הדואר של הנמען לפי פרוטוקול SMTP, ומעביר את ההודעה לתיבת הדואר של הנמען. הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו.",
         "ההודעה נשלחת ישירות מ-User Agent של השולח ל-User Agent של הנמען ללא שימוש בשרתים מתווכים, הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו.",
         "הודעת הדואר נשמרת במחשב השולח עד שהנמען מחפש באופן יזום את ההודעה, ואז היא מועברת אליו באמצעות פרוטוקול HTTP.",
         "הודעת הדואר נשלחת תחילה לשרת אינטרנט גלובלי mail server אשר מנתב אותה לכתובת הנמען באמצעות פרוטוקול HTTP לשרת ואז ל-SMTP עד ל-User Agent."),
    "a",
    r"""התהליך התקני: User Agent של השולח, שרת הדואר של השולח, שרת הדואר של הנמען (בין השרתים SMTP מעל TCP) ותיבת הנמען, ושם הנמען קורא. ב: אין שליחה ישירה בין User Agents. ג: ההודעה נדחפת, לא נמשכת, ואין זה HTTP בין השרתים. ד: אין שרת גלובלי כזה."""))

questions.append(Q(
    13, "dns_dhcp", "כיצד מתבצע תהליך חיפוש כתובת ה-IP של www.cnn.com כאשר אין מידע במטמון (cache) של שרתי ה-DNS?",
    opts("הלקוח יוצר קשר עם שרת ה-DNS המקומי, אשר פונה ל-root DNS, שמפנה אותו ל-TLD DNS, שמפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח.",
         "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם אין לו את המידע, הוא שולח את הבקשה לכל שרתי ה-DNS ברשת עד שהוא מקבל תשובה.",
         "הלקוח מבצע חיפוש ב-local cache של מערכת ההפעלה, ואם אינו מוצא את הכתובת, הוא שולח בקשה ישירות לשרת ה-root DNS שיחזיר לו את הכתובת הנכונה.",
         "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם המידע אינו זמין, מפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח."),
    "a",
    r"""ללא מטמון, ה-Resolver המקומי עובר על ההיררכיה: root, ואז TLD (`.com`), ואז ה-authoritative של cnn.com, והתשובה חוזרת ללקוח.
ב: אין שליחה לכל השרתים. ג: ה-root אינו מחזיר כתובת סופית, רק הפניה. ד: מדלגת על root ו-TLD."""))

questions.append(Q(
    14, "http", "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
    opts("HTTP 1.0 פותח חיבור TCP חדש עבור כל משאב בדף, מה שמוביל להקמת חיבורים מרובים לכל עמוד.",
         "HTTP 1.0 אינו מאפשר חיבורים מאובטחים, ולכן יש צורך בפרוטוקול נוסף כמו TLS.",
         "HTTP 1.0 מאפשר רק חיבור אחד לכל אתר, ולכן לא ניתן להוריד משאבים מרובים במקביל.",
         "HTTP 1.0 שולח את כל המשאבים של הדף בחבילה אחת, מה שעלול לגרום לעומס על הרשת ולהאטת טעינת הדף."),
    "a",
    r"""ב-HTTP 1.0 החיבור אינו מתמשך (non-persistent): כל אובייקט דורש חיבור TCP חדש (לחיצת יד ושלב Slow Start מחדש), ובדף עם הרבה אובייקטים זה גורם לעיכוב.
ב: גם HTTP 1.1 צריך TLS להצפנה, ולכן זו אינה בעיה ייחודית. ג: אפשר לפתוח חיבורים במקביל. ד: המשאבים נשלחים בנפרד."""))

questions.append(Q(
    15, "tcp", "מהי ההודעה הראשונה שנשלחת בתהליך יצירת חיבור בפרוטוקול TCP?",
    opts("SYN", "ACK", "FIN", "RST"), "a",
    r"""לחיצת היד התלת-שלבית: SYN, אחריה SYN-ACK ואז ACK. FIN סוגר חיבור ו-RST מאפס אותו."""))

exam = {
    "examCode": "25A-A",
    "examLabel": "2025 סמסטר א מועד א",
    "year": 2025,
    "examDate": "27.02.2025",
    "sourceFile": "sitting 25A-A (printed exam, 6 pages)",
    "keyFile": "no key in the source; independent solution, calculations in tools/verify/25A-A/check.py",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
