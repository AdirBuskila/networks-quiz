# -*- coding: utf-8 -*-
"""Generator for tools/raw/SAMP-2.json -- networks, the 2024 sample exam (14 MCQ: 1-10 plus 4 'additional questions').
Run: PYTHONUTF8=1 py tools/gen/gen_SAMP-2.py

Source: the sample exam PDF (6 pages, questions 1-10, then 'additional questions' 11-14). The task rules treat the
sitting as having no official key, so every question was solved independently (answerSource "solved", official:false).
NOTE for the orchestrator: the sample prints one option of every question in BOLD, and Q1/Q2 even print the worked
formula under the question. The bold option agrees with my independent answer on all 14 questions (Q6 and Q3 are
the two judgement calls, marked med). If the bold is accepted as the sample's key, flip answerSource to
highlighted-pdf / official:true. The printed worked formulas are not copied into the question text.
Calculations are recomputed in tools/verify/SAMP-2/check.py (Q1, Q2, Q11, Q13, Q14). Figure: Q14 cwnd graph."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "SAMP-2.json"
IDS = "abcdef"
EVID = "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py."


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def Q(num, topic, question, options, correct, explanation, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "solved", "official": False,
         "confidence": "high", "explanation": explanation, "note": EVID}
    q.update(kw)
    return q


questions = []

PARAMS = ("- רוחב פס (bandwidth): @BW@\n- גודל חבילה (packet size): 5,000 ביטים\n"
          "- מרחק התפשטות (propagation distance): 1000 קילומטרים\n"
          "- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n"
          "- ניתן להניח שאין עיכובים אחרים במערכת")

questions.append(Q(
    1, "delays",
    "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n" + PARAMS.replace("@BW@", "1 Gbps") +
    "\nידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
    opts("עוצמת תעבורה = 0.0007, אין פוטנציאל לעומס", "עוצמת תעבורה = 0.007, אין פוטנציאל לעומס",
         "עוצמת תעבורה = 0.7, יש פוטנציאל לעומס", "עוצמת תעבורה = 7, יש פוטנציאל לעומס גבוה מאוד"),
    "a",
    r"""$\rho=\frac{a\cdot L}{R}$ עם $a=\frac{500000}{3600}\approx 138.9$ חבילות בשנייה: $\rho=\frac{138.9\cdot5000}{10^{9}}\approx 0.0007$.
$\rho\ll1$, ולכן התור כמעט ריק ואין פוטנציאל לעומס (עומס מתחיל כש-$\rho$ מתקרב ל-1). 0.007 ו-0.7 מתקבלים מטעות של סדרי גודל או משכחת ההמרה לשעה."""))

questions.append(Q(
    2, "delays",
    "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n" + PARAMS.replace("@BW@", "10 Gbps") +
    "\nמהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך ש-Traffic Intensity יהיה שווה ל-0.8?",
    opts("1,600,000 חבילות לשנייה", "8,000 חבילות לשנייה", "16,000,000 חבילות לשנייה", "32,000,000 חבילות לשנייה"),
    "a",
    r"""$\rho=\frac{a\cdot L}{R}\Rightarrow a=\frac{\rho R}{L}=\frac{0.8\cdot10\cdot10^{9}}{5000}=1{,}600{,}000$ חבילות בשנייה.
הנתונים על המרחק והמהירות אינם נחוצים (הם נתוני התפשטות, לא נכנסים לנוסחה)."""))

questions.append(Q(
    3, "http", "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
    opts("HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP מה שמאפשר העברת נתונים מהירה יותר",
         "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל הרכיבים",
         "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על גבי חיבור TCP יחיד,\nמה שמקטין את זמן ההשהיה הכולל בעיית HOL שקיימת ב TCP",
         "אף תשובה לא נכונה"),
    "d",
    r"""HTTP/2 מבצע ריבוב (multiplexing) של בקשות על חיבור TCP יחיד, וכך פותר את בעיית ה-HOL ברמת HTTP של HTTP/1.1. אבל HOL ברמת TCP (איבוד מנה חוסם את כל הזרם) נשאר, ופתרונו הוא QUIC/HTTP/3.
א: HTTP/2 פועל מעל TCP. ב: הצפנה אינה חובה בתקן והשיפור אינו באבטחה. ג: טוענת שהשיפור הוא ב-HOL שקיים ב-TCP, וזה שגוי. לכן ד.""",
    confidence="med",
    note=EVID + " Option c is printed without a verb before 'בעיית HOL' (transcribed as printed); it attributes the TCP HOL problem to HTTP/2's improvement, which is false."))

questions.append(Q(
    4, "dns_dhcp", "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
    opts("Offer->Discover->Request->Acknowledge", "Discover->Offer->Acknowledge->Request",
         "Discover->Offer->Request->Acknowledge", "Request->Discover->Offer->Acknowledge"),
    "c",
    r"""הסדר התקני (DORA): Discover, Offer, Request, Acknowledge. בשאר האפשרויות הסדר שגוי (Offer לפני Discover, Request לפני Acknowledge, או Request לפני Discover)."""))

questions.append(Q(
    5, "http", "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום TCP?",
    opts("כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל",
         "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת ההשהיה שידור כוללת. כמו כן, לפתור את בעיית HOL שקיימת ב HTTP/2.0",
         "כדי לבטל את צורך בכתובות IP",
         "כדי לספק שיטת שידור אותות אמינה יותר"),
    "b",
    r"""QUIC רץ מעל UDP, משלב את לחיצת היד והצפנה (פחות RTT להקמה), ומריבוב זרמים בלי חסימה הדדית ברמת התעבורה, ולכן פותר את בעיית ה-HOL שנשארה ב-HTTP/2 מעל TCP.
א: הצפנה היא תוצר לוואי, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: "שידור אותות" שייך לשכבה הפיזית."""))

questions.append(Q(
    6, "http",
    "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: http://mywebsite.com/index.html.\nבדפדפן התקבל מסמך HTML עם הפניה לשתי תמונות בכתובות הבאות:\n"
    "`http://mywebsite.com/imageA.jpg`\n`http://mymirrorwebsite.com/imageB.jpg`\n"
    "לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n`mywebsite.com: 203.0.113.10`\n`mymirrorwebsite.com: 203.0.113.10`\n"
    "בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
    opts("1", "2", "3", "לא ניתן לדעת"), "b",
    r"""ב-HTTP/1.1 חיבור מתמשך משויך לשרת לפי שם המארח (origin): index.html ו-imageA.jpg מ-`mywebsite.com` עוברים על חיבור אחד (persistent), ו-imageB.jpg מ-`mymirrorwebsite.com` דורש חיבור שני, למרות שכתובת ה-IP זהה (איחוד חיבורים לפי IP משותף קיים רק ב-HTTP/2).
לכן 2 חיבורים. 3 היה נדרש ב-HTTP/1.0 ללא חיבור מתמשך, ו-1 מניח איחוד שאינו נהוג ב-HTTP/1.1.""",
    confidence="med",
    note=EVID + " Judgement call: connections are per host name in HTTP/1.1 (the identical IP is the trap); matches the sample's bold option."))

questions.append(Q(
    7, "http", "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
    opts("לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע",
         "לאפשר מעקב בין אתרים ומקוד פרסומות",
         "לשפר את אבטחה בהתחברות (session) משתמשים",
         "לנהל את ה-sessions של המשתמש באתר נוכחי"),
    "b",
    r"""Cookie של צד שלישי נקבע על ידי דומיין שאינו האתר המבוקר (למשל רשת פרסום), ולכן מאפשר לזהות את אותו משתמש בין אתרים שונים ולכוון פרסומות. העדפות וסשנים באתר הנוכחי הם תפקיד של cookies של צד ראשון.""",
    note=EVID + " Option b printed with the typo 'ומקוד' (probably 'ומיקוד'); transcribed as printed."))

questions.append(Q(
    8, "http",
    "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גאוגרפיים שונים?",
    opts("העברת צד השרת האתר לשימוש בפרוטוקול HTTP/2.0",
         "שימוש ב CDN לאחסון של משאבים סטטיים של האתר קרוב יותר למשתמש קצה",
         "אופטימיזציה של שרת אינטרנט לטיפול במספר גדול יותר של סוקטים בו-זמנית",
         "העברת צד השרת לשימוש בפרוטוקול HTTP/3.0"),
    "b",
    r"""משתמשים מאזורים שונים סובלים מ-RTT גדול. CDN מקרב את המשאבים הסטטיים אליהם, ובכך מקצר משמעותית את זמן הטעינה. HTTP/2 ו-HTTP/3 משפרים את ניצול הקישור אך אינם מקצרים את המרחק הגאוגרפי, ואופטימיזציית סוקטים משפרת קיבולת השרת ולא את זמן ההגעה."""))

questions.append(Q(
    9, "dns_dhcp", "בחרו את התשובה עם הנוסח המדויק ביותר:",
    opts("פרוטוקול DHCP הוא פרוטוקול בשכבת תעבורה המאפשר הקצאה דינמית של כתובות IP פנימיות",
         "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה שרת-לקוח המאפשר הקצאה סטטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת DNS מקומי",
         "פרוטוקול DHCP הוא במשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של שרת-לקוח",
         "אף תשובה אינה נכונה"),
    "d",
    r"""DHCP הוא פרוטוקול של שכבת היישום (לא תעבורה), פועל בדרך כלל מעל UDP (פורטים 67 ו-68) ומקצה כתובות באופן דינמי.
א: מציבה אותו בשכבת התעבורה. ב: מתארת הקצאה סטטית, אבל DHCP דינמי. ג: טוענת שהוא משתמש ב-TCP בדרך כלל, וזה שגוי (UDP). לכן ד.""",
    note=EVID + " Option c printed as 'הוא במשתמש בדרך כלל' (garbled); transcribed as printed."))

questions.append(Q(
    10, "http",
    "מפתח אתרים מעוניין לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
    opts("תמיד עדיף להשתמש ב GET מותנה (Conditional get)",
         "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם – הבקשה תשלח עם header: if-Modified-Since",
         "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן",
         "אין הבדל משמעותי בין אפשרויות"),
    "b",
    r"""GET מותנה עם `If-Modified-Since` מאפשר לשרת להשיב `304 Not Modified` (ללא גוף) כשהתמונה לא השתנתה, וכך חוסך העברה. הוא מועיל בעיקר כשהתוכן עלול להשתנות.
א: "תמיד" מוחלט מדי (לתוכן שאינו משתנה או ללא מטמון אין תועלת). ג: PUT מעלה תוכן לשרת ואינו בודק שינוי. ד: יש הבדל ברור.""",
    confidence="med"))

questions.append(Q(
    11, "ip_cidr",
    "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה\n"
    "`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
    opts("A", "B", "C", "D"), "c",
    r"""Longest Prefix Match. הכתובת $25.36.67.5$ בבינארי: $00011001.00100100.01000011.00000101$. A: $/16$ מתאימה ($25.36$). B: $/20$ מכסה $128\text{-}143$ - לא. C: $/20$ מכסה $64\text{-}79$ - כוללת 67. D - לא.
A ו-C מתאימות, והארוכה היא C.""",
    note=EVID + " Printed in the 'additional questions' part; options are Latin a-d in the source."))

questions.append(Q(
    12, "dns_dhcp",
    "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
    opts("כן, אפשר לוותר על ARP", "לא נכון: אי אפשר לוותר על ARP",
         "כן אפשר לוותר על ARP ברשת גדולה – רק עבור לקוחות שמקבלים מידע משרת ה-DHCP אבל לא עבור תחנות קצה עם IP סטטי",
         "התשובה לא חד משמעית – תלויה בהגדרות מערכת"),
    "b",
    r"""DHCP מקצה כתובת IP והגדרות, אבל אינו מתרגם כתובות IP לכתובות MAC. כדי לבנות מסגרת Ethernet ללקוח או ל-Gateway עדיין צריך ARP. לכן אי אפשר לוותר עליו, גם כשכל התחנות משתמשות ב-DHCP.""",
    note=EVID + " Question text read as 'can DHCP be used as a full substitute for ARP when DHCP is already used' (the printed stem is partly ambiguous)."))

questions.append(Q(
    13, "ip_cidr",
    "חבילת IP (datagram) בגודל 2000B עברה פרגמנטציה (fragmentation). נתון כי MTU של הרשת – 420B וגודל ה-header הוא 20B ואין שימוש בהרחבות. מה נכון לגבי הערך הרשום בשדה ה-offset בחבילה מספר 5?\nאופסט – בבלוקים של 8B\nחבילה ראשונה – אופסט = 0, חבילה שניה – 50, שלישית – 100, רביעית – 150, חמישית - 200",
    opts("1600", "200", "400", "480", "405"), "b",
    r"""בכל פרגמנט נשארים $420-20=400$ בתים של נתונים (כפולה של 8). הפרגמנט החמישי מתחיל אחרי 4 פרגמנטים מלאים: $4\cdot400=1600$ בתים, והשדה נמדד ביחידות של 8 בתים: $1600/8=200$.
1600 הוא ה-offset בבתים, ולא ביחידות של 8.""",
    note=EVID + " The printed example line 'first 0, second 50, ... fifth 200' is part of the question stem and shows the offsets in 8 B units."))

questions.append(Q(
    14, "tcp", "בהינתן גרף התנהגות של פרוטוקול TCP\nתהליך slow-start עובד בפרקים:",
    opts("[1, 6]", "[6, 16]", "[1,6] , [23, 26]", "[6, 16], [17, 22]"), "c",
    r"""ב-Slow Start החלון מוכפל בכל סבב: $1,2,4,8,16,32$ בסבבים $1\text{-}6$, ואחר כך מתחיל Congestion Avoidance (גידול ב-1 לסבב, עד סבב 16). אחרי ההפסד בסבב 16 החלון יורד ל-21 וגדל ב-1 (סבבים $17\text{-}22$, התאוששות/CA), ואחרי ההפסד השני החלון חוזר ל-1 ושוב מוכפל: $1,2,4,8$ בסבבים $23\text{-}26$.
לכן Slow Start ב-$[1,6]$ וב-$[23,26]$.""",
    image="images/exams/SAMP-2-Q14.png"))

exam = {
    "examCode": "SAMP-2",
    "examLabel": "מבחן לדוגמה 2024",
    "year": 2024,
    "examDate": "2024",
    "sourceFile": "sitting SAMP-2 (2024 sample exam PDF, 6 pages)",
    "keyFile": "no official key; independent solution, calculations in tools/verify/SAMP-2/check.py (the sample's bold options agree)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
