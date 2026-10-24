# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-B.json -- networks, 2025 semester A, moed B.
Run: PYTHONUTF8=1 py tools/gen/gen_25A-B.py

Source: the printed exam (7 pages; page 7 is the formula sheet; 15 MCQ, 4 options each). The sitting has NO printed
key and no solution file, so every question was solved independently (answerSource "solved", official:false).
Calculations are recomputed in tools/verify/25A-B/check.py (Q2 ACK numbers, Q5 circuits, Q6 utilization, Q7 delay,
Q8 CRC, Q10 subnet size, Q15 longest prefix).
Figures: Q1 DNS diagram, Q2 TCP time diagram, Q5 circuit network, Q6 shared link, Q7 three-link path."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-B.json"
IDS = "abcdef"
EVID = "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations)."


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
    1, "dns_dhcp",
    "ביום ראשון בבוקר דני מגיע ראשון לעבודה לפני כולם, מדליק את המחשב שלו ופונה פעם ראשונה במחשבו לגלוש לאתר של www.amazon.com. דני הוא הראשון במקום העבודה שלו, באותו בוקר, שפונה לגלוש באינטרנט ואין פעילויות גלישה אחרות אפילו לא מצד שרתי עדכונים אוטומטיים.\n"
    "המחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com.\n"
    "המחשב של דני ששמו pcdany ומסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.\n"
    "מה מתאר הציור?",
    opts("שאילתת DNS רקורסיבית (recursive query)", "שאילתת DNS איטרטיבית (iterative query)",
         "שאילתת ARP", "תהליך קבלת כתובת IP דרך DHCP"),
    "a",
    r"""בציור הלקוח שואל את שרת ה-DNS המקומי (1), המקומי פונה ל-root (2), ה-root פונה בעצמו ל-TLD (3), ה-TLD ל-authoritative (4), והתשובה חוזרת באותו מסלול `(5, 6, 7, 8)`: כל שרת מטפל בשאילתה "בשם" השואל, וזו שאילתה רקורסיבית.
בשאילתה איטרטיבית ה-Resolver המקומי היה פונה בעצמו לכל שרת ומקבל הפניה. ARP ו-DHCP אינם קשורים לציור.""",
    image="images/exams/25A-B-Q1.png"))

questions.append(Q(
    2, "tcp",
    "לפניכם רצף של הודעות TCP שנשלחות מהשולח לנמען. הנמען מחזיר הודעות ACK.\nמה יהיו המספרים בהודעות ACK עבור A, B, C, D, E?",
    opts("A=301, B=301, C=301, D=301, E= 701", "A=301, B=401, C=601, D=701, E=401",
         "A=301, B=301, C=401, D=701, E=601", "A=301, B=401, C=501, D=601, E=701"),
    "a",
    r"""ACK מצטבר מציין את הבית הבא שהנמען מצפה לו. אחרי $101\text{-}300$ הנמען מצפה ל-301, ולכן $A=301$.
הקטע $301\text{-}400$ אבד, ולכן קטעים $401\text{-}500$, $501\text{-}600$, $601\text{-}700$ שמגיעים שלא בסדר מקבלים שוב את אותו ACK: $B=C=D=301$ (הם נשמרים במאגר אך אינם מקדמים את הרצף).
כשהקטע $301\text{-}400$ נשלח מחדש, הרצף מתמלא עד 700 ולכן $E=701$.""",
    image="images/exams/25A-B-Q2.png",
    note=EVID + " One ACK per two in-order segments is the figure's pattern (A acknowledges 101-300)."))

questions.append(Q(
    3, "udp_checksum", "מה ההבדל בין כותרת (header) ה-TCP לכותרת ה-UDP?",
    opts("כותרת ה-TCP גדולה יותר, כוללת שדות לאמינות ולשליטה בזרימה.",
         "כותרת ה-TCP קטנה יותר מכותרת ה-UDP.",
         "כותרת ה-UDP גדולה יותר כי היא כוללת פרטי הקמת חיבור ו-checksum.",
         "שתי הכותרות באותו הגודל."),
    "a",
    r"""כותרת TCP היא לפחות 20 בתים (מספרי Seq ו-ACK, חלון, דגלים), וכותרת UDP היא 8 בתים בלבד (פורטים, אורך, checksum). TCP צריך את השדות הנוספים לאמינות ולבקרת זרימה."""))

questions.append(Q(
    4, "http", "מדוע HTTP נחשב לפרוטוקול ללא מצב (Stateless)?",
    opts("כל בקשה היא עצמאית, והשרת אינו שומר מידע על סשן (Session).",
         "הוא יכול לטפל רק בבקשה אחת בכל פעם.",
         "הוא אינו תומך בהצפנה או בהעברת נתונים מאובטחת.",
         "הוא עובד רק עם דפי אינטרנט סטטיים."),
    "a",
    r"""חוסר מצב פירושו שהשרת אינו זוכר בקשות קודמות: כל בקשה מכילה את כל מה שנדרש לטפל בה (לכן יש Cookies). זה אינו קשור למספר הבקשות בו-זמנית, להצפנה (HTTPS) או לסוג התוכן."""))

questions.append(Q(
    5, "physical_misc",
    "נתון התרשים הבא של רשת מבוססת circuit-switched.\nנניח שכל חיבור דורש 2 קפיצות רצופות, והשיחות מחוברות בכיוון השעון.\nבהתחשב במגבלות אלו, מהו **המספר המרבי של חיבורים** שיכולים להיות פעילים בו-זמנית ברשת?",
    opts("28", "57", "17", "22"), "a",
    r"""חיבור תופס קו אחד מכל אחד משני קישורים סמוכים. נסמן $x_1$ (קישורים AB ו-BC), $x_2$ (BC ו-CD), $x_3$ (CD ו-DA), $x_4$ (DA ו-AB) ונקבל: $x_1+x_4\le 14$, $x_1+x_2\le 11$, $x_2+x_3\le 15$, $x_3+x_4\le 17$.
חיבור ארבעת האילוצים: $2\sum x_i\le 57$, כלומר $\sum x_i\le 28$. ואפשר להשיג 28 (בדיקה ממצה בסקריפט). 57 הוא סכום כל הקווים (כל חיבור תופס שניים), 17 ו-22 נמוכים מהמקסימום.""",
    image="images/exams/25A-B-Q5.png",
    note=EVID + " Interpretation: each connection uses 2 consecutive links in the clockwise direction; the exhaustive search confirms 28 is attainable."))

questions.append(Q(
    6, "delays",
    "התרשים הבא מתאר רשת המחברת 4 שרתים ו-4 מחשבים דרך לינק משותף, כאשר אין עדיפות לאף אחד מהרכיבים ברשת על הלינק המשותף (קצב השידור של כל לינק מצוין בתרשים כ-R), מהו ה-link utilizations (ניצולת השידור) של השרתים?",
    opts("0.63", "0.71", "1", "0.25"), "a",
    r"""הלינק המשותף ($200\,Mbps$) מתחלק שווה בין 4 חיבורים: $50\,Mbps$ לכל אחד. קצב כל חיבור הוא $\min(R_s,\,R_c,\,R/4)=\min(80,70,50)=50\,Mbps$.
ניצולת הלינק של שרת: $\frac{50}{80}=0.625\approx 0.63$. (0.71 הוא ניצולת צד הלקוח $50/70$.)""",
    image="images/exams/25A-B-Q6.png",
    note=EVID + " Server link utilization 50/80 = 0.625 shown as 0.63; the client side would be 0.71."))

questions.append(Q(
    7, "delays",
    "בתרשים הבא מתוארת רשת מקצה לקצה, גודל החבילה ברשת זו הוא 4000 ביטים, מהירות ההתפשטות בקו (propogation speed) הוא $3\\times10^{8}$ מטר לשנייה. שאר הנתונים מתוארים בתרשים. מהו העיכוב (delay) הכולל?",
    opts("0.0038 שניות", "0.0003 שניות", "3 שניות", "3.9 שניות"), "a",
    r"""לכל קישור $d=\frac{L}{R}+\frac{\text{length}}{3\cdot10^{8}}$ והעיכובים מצטברים (Store-and-forward).
הולכה: $\frac{4000}{10^{9}}+\frac{4000}{10^{8}}+\frac{4000}{10^{7}}=4+40+400=444\,\mu s$. התפשטות: $\frac{2000}{3\cdot10^{8}}+\frac{10^{6}}{3\cdot10^{8}}+\frac{2000}{3\cdot10^{8}}\approx 3347\,\mu s$.
סך הכול $\approx 3.79\,ms\approx 0.0038\,s$.""",
    image="images/exams/25A-B-Q7.png",
    note=EVID + " Propagation speed printed as '3x10^8'; total 3.79 ms."))

questions.append(Q(
    8, "link_layer", "נתון אלגוריתם לבדיקת יתירות מחזורית (CRC), כאשר r=3, G=1001 D=10011100, מהו R ?",
    opts("101", "1101", "01", "10001101"), "a",
    r"""מוסיפים $r=3$ אפסים ל-$D$: $10011100000$ ומחלקים ב-$G=1001$ בחילוק XOR. השארית היא $101$ (שלושה ביטים).
$1101$ ו-$10001101$ ארוכים מ-$r$ ביטים, ו-$01$ אינו שלושה ביטים.""",
    note=EVID + " Remainder recomputed by script."))

questions.append(Q(
    9, "http", "מהי מטרתו של קובץ Manifest בהקשר של סטרימינג של מולטימדיה?",
    opts("לאפשר ללקוח לדעת היכן ניתן לאחזר קטעי וידאו שונים, המקודדים בקצבי נתונים שונים",
         "לאפשר לשרת OTT (Over-the-top) לדעת איזה איזה וידאו הלקוח רוצה לצפות בו",
         "לאפשר שירות וידאו לרשום (log) את הווידאו ואת השרת ממנו הלקוח מבצע סטרימינג",
         "לאפשר ללקוח להקצאת רוחב פס לאורך הנתיב מהשרת ללקוח, כך שיוכל לצפות בווידאו בסטרימינג ללא פגמים"),
    "a",
    r"""ב-DASH השרת מפרסם קובץ Manifest המפרט את קטעי הווידאו ואת הגרסאות שלהם (קצבי bit שונים) ואת כתובותיהם, והלקוח בוחר קטע לפי רוחב הפס הנוכחי.
ב: השרת אינו צריך את ה-Manifest כדי לדעת מה הלקוח רוצה. ג: רישום (log) אינו מטרתו. ד: ה-Manifest אינו מקצה רוחב פס.""",
    note=EVID + " Option b printed with a doubled word ('איזה איזה'); transcribed as printed."))

questions.append(Q(
    10, "ip_cidr", "מהו המספר המרבי של כתובות אפשריות ברשת 223.1.2/24?",
    opts("256", "$2^{32}$", "128", "516"), "a",
    r"""מסכה $/24$ משאירה $32-24=8$ ביטי מארח: $2^{8}=256$ כתובות (מהן 254 ניתנות לשימוש, כי כתובת הרשת וכתובת ה-broadcast שמורות, אך השאלה שואלת על מספר הכתובות האפשריות). $2^{32}$ הוא כל מרחב ה-IPv4.""",
    note=EVID + " 'Addresses possible in the network' read as 2^8 = 256 (254 usable hosts is not an option)."))

questions.append(Q(
    11, "routing", "בהגדרת פרוטוקול ניתוב, כיצד מוגדר נתיב טוב?",
    opts("אלגוריתמי ניתוב עובדים לרוב עם משקלי קישור מופשטים, שיכולים לייצג מטריקות שונות",
         "נתיב עם רוחב פס גבוה.", "נתיב עם מספר מינימלי של קפיצות (hops).", "נתיב עם זמן השהיה (delay) נמוך."),
    "a",
    r""""נתיב טוב" הוא נתיב בעל עלות מינימלית, והעלות היא משקל מופשט שנקבע לפי מדיניות: יכולה לייצג רוחב פס, מספר קפיצות, השהיה או כל מטריקה אחרת.
ב, ג, ד: כל אחת מהן היא מטריקה אפשרית אחת בלבד, ולא ההגדרה הכללית.""",
    confidence="med"))

questions.append(Q(
    12, "dns_dhcp", "איזו מהאפשרויות הבאות מתארת בצורה הטובה ביותר את הפונקציה העיקרית של פרוטוקול ARP ?",
    opts("הוא מתרגם כתובות IP לכתובות MAC.", "הוא ממיר שמות דומיין לכתובות IP.",
         "הוא מקצה כתובות IP למכשירים ברשת.", "הוא מצפין חבילות נתונים להעברה מאובטחת."),
    "a",
    r"""ARP מוצא את כתובת ה-MAC של כתובת IP ברשת המקומית. המרת שמות היא DNS, הקצאת כתובות היא DHCP, והצפנה אינה תפקיד של ARP."""))

questions.append(Q(
    13, "sockets_email", "בחיבור TCP טיפוסי, איזו מהסדרות הבאות מייצגות את הסדר הנכון של קריאות API לסוקטים עבור השרת והלקוח?",
    opts("שרת: `socket → bind → listen → accept`\nלקוח: `socket → connect`",
         "שרת: `socket → listen → bind → accept`\nלקוח: `socket → connect`",
         "שרת: `socket → bind → accept → listen`\nלקוח: `socket → connect`",
         "שרת: `socket → accept → bind → listen`\nלקוח: `socket → connect`"),
    "a",
    r"""השרת יוצר סוקט, קושר אותו לפורט (bind), מאזין (listen) ואז מקבל חיבורים (accept). הלקוח יוצר סוקט ופונה (connect). בשאר האפשרויות סדר הקריאות מתהפך (listen לפני bind, או accept לפני listen)."""))

questions.append(Q(
    14, "dns_dhcp", "מהם הנתונים שמספק שרת ה DHCP לתחנה שפונה אליו?",
    opts("IP, Subnet, Local DNS, Default Gateway IP", "IP, Router IP, Subnet, Root DNS",
         "IP, Router IP, Root DNS, Default Gateway", "IP, Default Gateway MAC address, Subnet, Local DNS"),
    "a",
    r"""DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway ושרת DNS מקומי. כתובת MAC של ה-Gateway מתקבלת מ-ARP, ושרת Root DNS אינו חלק מהמידע שהלקוח מקבל."""))

questions.append(Q(
    15, "ip_cidr", "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה\n"
    "`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
    opts("C", "A", "D", "B"), "a",
    r"""Longest Prefix Match. A: $25.36.64.0/16$ - הבתים הראשונים הם $25.36$ ולכן מתאימה (ביטי המארח אינם נבדקים). B: $25.36.128.0/20$ מכסה $128\text{-}143$ - לא. C: $25.36.64.0/20$ מכסה $64\text{-}79$ - כוללת 67. D - לא.
A ו-C מתאימות, והמסכה הארוכה יותר היא C ($/20>/16$)."""))

exam = {
    "examCode": "25A-B",
    "examLabel": "2025 סמסטר א מועד ב",
    "year": 2025,
    "examDate": "2025",
    "sourceFile": "sitting 25A-B (printed exam, 7 pages)",
    "keyFile": "no key in the source; independent solution, calculations in tools/verify/25A-B/check.py",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
