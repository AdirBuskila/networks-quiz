# -*- coding: utf-8 -*-
"""Generator for tools/raw/26A-A.json -- networks, 2026 semester A, moed A (18.02.2026).
Run: PYTHONUTF8=1 py tools/gen/gen_26A-A.py

Source: the typed question/solution document of sitting 26A-A (15 MCQ, 4 options each). The document marks no
answer; in it the first listed option of every question is the correct one (checked below), and the file is the
lecturer's solution copy. The student-ticked scan of the same sitting was NOT used as a key.
Every key was re-derived independently; calculations are recomputed in tools/verify/26A-A/check.py
(Q6 cwnd figure, Q7 fragmentation, Q9 longest prefix, Q11 delay, Q13 Dijkstra) and all 15 agree.
Because no key is explicitly marked, items ship as answerSource "solved" (official:false), with the
first-option evidence recorded in `note`.
Figures: Q6 cwnd graph and Q11 topology are the images embedded in the source document."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "26A-A.json"
IDS = "abcdef"
EVID = "Source document lists the correct option first (convention); independently solved - agrees."


def opts(*vals):
    out = []
    for i, v in enumerate(vals):
        if isinstance(v, tuple):
            out.append({"id": IDS[i], "type": v[0], "value": v[1]})
        else:
            out.append({"id": IDS[i], "type": "text", "value": v})
    return out


def Q(num, topic, question, options, correct, explanation, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "solved", "official": False,
         "confidence": "high", "explanation": explanation, "note": EVID}
    q.update(kw)
    return q


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "dns_dhcp",
    "לקוח מבצע שאילתת DNS עבור `www.shop.example.com`. ה-Resolver מקבל מה-Authoritative של `example.com` את הרשומות הבאות:\n"
    "`www.shop.example.com → A 192.0.2.10`\n"
    "`shop.example.com → NS ns1.shop.example.com`\n"
    "`ns1.shop.example.com → A 203.0.113.53`\n"
    "TTL של ה-NS: 86400\n"
    "TTL של ה-A של ה-nameserver: 300\n"
    "איזו מהאפשרויות הבאות היא הכי נכונה לגבי התנהגות ה-Resolver?",
    opts("ה-Resolver רשאי לשמור את ה-A של ה-nameserver במטמון, רק עד TTL שלו עצמו (300)",
         "ה-Resolver חייב לשמור את ה-A של ה-nameserver במטמון לפי TTL של ה-NS - (86400)",
         "ה-Resolver חייב להתעלם מה-A של ה-nameserver ולבצע שאילתה חדשה בכל פעם",
         "ה-Resolver אסור לו לשמור את ה-A של ה-nameserver במטמון בכלל"),
    "a",
    r"""לכל רשומה ב-DNS יש TTL משלה, והמטמון מכבד את ה-TTL של כל רשומה בנפרד.
א: נכון - ה-A של ה-nameserver נשמרת במטמון לכל היותר 300 שניות, ואחר כך פגה (גם אם ה-NS עדיין תקפה).
ב: שגוי - ה-TTL של ה-NS חל על רשומת ה-NS בלבד ואינו מאריך את חיי ה-A, וגם "חייב" אינו נכון: המטמון רשאי, לא חייב.
ג: שגוי - אין חובה להתעלם מהרשומה; שמירה במטמון היא בדיוק מטרת ה-TTL.
ד: שגוי - אין איסור על שמירה במטמון."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "http", "מהי הדרך להקטין זמן טעינת דף בפרוטוקול HTTP?",
    opts("כל התשובות נכונות", "שימוש בזיכרון local cache", "שימוש בשרתי web cache", "שימוש ב-CDN"),
    "a",
    r"""כל שלושת המנגנונים מקצרים את זמן הטעינה: מטמון מקומי בדפדפן (אין פנייה לרשת כלל), שרת Web cache / proxy (עונה במקום השרת המקורי, קרוב ללקוח) ו-CDN (תוכן משוכפל בשרתים קרובים ללקוח, RTT קטן יותר).
לכן "כל התשובות נכונות"."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "intro_layers", "מהו תפקיד של שכבת התעבורה?",
    opts("לספק שירותי תקשורת בין תהליכים הרצים בתחנות קצה שונות",
         "לספק חיבור אמין בשני תהליכים הרצים בתחנות קצה שונות",
         "לספק שירותי ניתוב לשכבת היישום",
         "אף תשובה לא נכונה"),
    "a",
    r"""שכבת התעבורה מספקת תקשורת לוגית בין תהליכים (דרך מספרי פורטים) בתחנות קצה שונות.
ב: אמינות היא שירות של TCP בלבד, לא של שכבת התעבורה בכלל (UDP אינו אמין), ולכן ההגדרה צרה מדי.
ג: ניתוב הוא תפקיד שכבת הרשת.
ד: שגוי, כי א נכונה."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "dns_dhcp", "האם ניתן להשתמש בפרוטוקול ARP במקום DHCP?",
    opts("לא ניתן להשתמש ב-ARP במקום DHCP",
         "כן, ניתן להשתמש ב-ARP במקום DHCP להגדרת כתובות רשת לתחנות קצה",
         "כן, אפשר להשתמש ב-broadcast של ARP כדי לשלוח הגדרות רשת לתחנות קצה",
         "אף תשובה לא נכונה"),
    "a",
    r"""ARP מתרגם כתובת IP ידועה לכתובת MAC ברשת המקומית; הוא אינו מקצה כתובות ואינו מעביר הגדרות (מסכה, Gateway, DNS).
DHCP הוא הפרוטוקול שמקצה כתובת IP והגדרות רשת. לכן אי אפשר להחליף את DHCP ב-ARP; ב ו-ג שגויות, ו-ד שגויה כי א נכונה."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "dns_dhcp", "קבלת כתובת IP באופן דינמי משרת DHCP בעת הצטרפות לרשת מתבצעת בסדר הבא:",
    opts("`DHCP Discover -> DHCP Offer -> DHCP Request -> DHCP ACK`",
         "`DHCP Request -> DHCP Offer -> DHCP ACK`",
         "`DHCP Request -> DHCP ACK -> DHCP Discover -> DHCP Offer`",
         "`DHCP Discover -> DHCP Request -> DHCP ACK`"),
    "a",
    r"""הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.
ב, ג: מתחילות ב-Request או משלבות הודעות בסדר הפוך; ד: חסר שלב ה-Offer."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "tcp",
    "הגרף מייצג התפתחות תהליך בקרת עומסים של TCP לאורך הזמן. באילו נקודות זמן הפרוטוקול נכנס ל-Congestion Avoidance?",
    opts("4, 29, 35", "24, 30", "1, 25, 31", "אף תשובה לא נכונה"), "a",
    r"""ב-Slow Start החלון מוכפל בכל RTT, ובתחילת Congestion Avoidance הוא גדל ב-1 בכל RTT (עד ה-ssthresh).
בגרף: נקודות 1-4 הן $1,2,4,8$ ואחריהן $9,10,\ldots$ (קו ישר) - כניסה ל-CA ב-4. אחרי ההפסד ב-24 (החלון חוזר ל-1): $1,2,4,8,16$ ואז $17$ - כניסה ב-29. אחרי ההפסד ב-30: $1,2,4,8,16$ ואז $17,18,\ldots$ - כניסה ב-35.
24 ו-30 הן נקודות ההפסד (שיא ואז צניחה), ו-1, 25, 31 הן תחילת Slow Start - לא CA.""",
    image="images/exams/26A-A-Q6.png"))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "ip_cidr",
    "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי $MTU=500\\,\\text{B}$, גודל ה-header הוא $20\\,\\text{B}$. מה נכון לגבי חבילה מספר 4 מתוך 5?",
    opts("Offset=180", "Offset=200", "Offset=400", "Offset=1600"), "a",
    r"""בכל פרגמנט נשאר מקום ל-$500-20=480$ בתים של נתונים (כפולה של 8, כנדרש).
הפרגמנט הרביעי מתחיל אחרי 3 פרגמנטים מלאים: $3\cdot 480=1440$ בתים, ושדה ה-Offset נמדד ביחידות של 8 בתים: $1440/8=180$.
(בסך הכול 5 פרגמנטים: 4 מלאים של 480 בתים ופרגמנט אחרון קטן.) 200 היה מתקבל אילו הנתונים בפרגמנט היו 500 בתים (ללא header), ו-400 ו-1600 אינם ה-Offset של הפרגמנט הרביעי."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "dns_dhcp", "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
    opts("IP, Subnet, Local DNS, Default Gateway IP",
         "IP, Router IP, Subnet, Root DNS",
         "IP, Router IP, Root DNS, Default Gateway",
         "IP, Default Gateway MAC address, Subnet, Local DNS"),
    "a",
    r"""שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.
ב, ג: שרת DNS "Root" אינו מה שה-DHCP נותן (נותנים Resolver מקומי); ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "ip_cidr",
    "לאיזה מסלול תנותב החבילה אם כתובת היעד $25.36.67.5$ לפי טבלת הניתוב הבאה?\n"
    "`A: 25.36.0.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
    opts("C", "A", "D", "B"), "a",
    r"""Longest Prefix Match: נבדוק אילו כניסות מתאימות לכתובת $25.36.67.5$.
A: $25.36.0.0/16$ - מתאימה (שני הבתים הראשונים זהים). B: $25.36.128.0/20$ מכסה $25.36.128.0-25.36.143.255$ - לא כוללת 67. C: $25.36.64.0/20$ מכסה $25.36.64.0-25.36.79.255$ - כוללת את 67, והמסכה ארוכה יותר ($/20>/16$). D: $20.0.0.0/8$ - לא מתאימה.
כלומר A ו-C מתאימות, והארוכה ביותר היא C."""))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "link_layer", "איזו מהטענות הבאות מתארת נכונה את ההבדל בין Ethernet Switch לבין IP Router?",
    opts("סוויץ' מעביר מסגרות (frame) וראוטר מעביר חבילות (datagrams)",
         "נתב מהיר יותר מסוויץ' כי הוא משתמש בכתובות לוגיות",
         "נתבים מסוגלים לבדוק שגיאות על נתוני החבילה (datagram)",
         "לסוויץ' יש טבלת ניתוב כתובות (switch table)"),
    "a",
    r"""סוויץ' פועל בשכבת הקו ומעביר מסגרות לפי כתובות MAC; נתב פועל בשכבת הרשת ומעביר datagrams לפי כתובות IP.
ב: אין קשר בין "כתובות לוגיות" למהירות, ובדרך כלל סוויץ' מהיר יותר. ג: גם סוויץ' בודק שגיאות במסגרת (FCS) - ואין זה ההבדל בין השניים.
ד: ל-switch יש "switch table" - אך זו טבלת העברה (למידה) ולא טבלת ניתוב, ולכן הניסוח שגוי ואינו ההבדל העיקרי."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "delays",
    "מהו זמן ההשהיה הכולל ברשת, אם ההשהיות בתוך הנתבים זניחות? מהירות ההתפשטות: $3\\cdot10^{8}$ m/s. גודל החבילה: 12000 ביט.",
    opts("18 מילישניות", "36 מילישניות", "100 מילישניות", "1 מילישניות"), "a",
    r"""לפי האיור, שלושה קישורים ברצף (Store-and-forward), ובכל קישור: $d=\frac{L}{R}+\frac{\text{length}}{3\cdot 10^{8}}$.
קישור 1: $\frac{12000}{10^{9}}=12\,\mu s$, התפשטות $\frac{2000}{3\cdot10^{8}}\approx 6.7\,\mu s$.
קישור 2: $\frac{12000}{10^{7}}=1.2\,ms$, התפשטות $\frac{5\cdot10^{6}}{3\cdot10^{8}}\approx 16.67\,ms$.
קישור 3: $\frac{12000}{10^{8}}=0.12\,ms$, התפשטות $\frac{3000}{3\cdot10^{8}}=10\,\mu s$.
סך הכול $\approx 18.02\,ms\approx 18\,ms$. האפשרויות 36, 100 ו-1 רחוקות מהערך שחושב.""",
    image="images/exams/26A-A-Q11.png",
    note=EVID + " Propagation speed printed as '3*108' (superscript lost in the text layer); 3*10^8 m/s reproduces the 18 ms option."))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "routing", "מהו השיקול המרכזי שמנחה את BGP בבחירת נתיב?",
    opts("מדיניות", "רוחב פס מקסימלי", "מינימום השהיה", "חיסכון בחשמל"), "a",
    r"""BGP הוא פרוטוקול ניתוב בין מערכות אוטונומיות (AS), והבחירה בנתיב נקבעת בעיקר לפי מדיניות (Policy) של ה-AS: יחסים עסקיים בין ספקים ולקוחות, ערכי local-pref ועוד, ורק אחר כך אורך ה-AS-path.
BGP אינו מנסה למקסם רוחב פס, להקטין השהיה או לחסוך בחשמל."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "routing",
    "בגרף רשת המשתמש באלגוריתם דייקסטרה (Dijkstra), נתונים המרחקים הבאים מצומת $U$: $D(V)=5$, $D(W)=10$. קיימת קשת ישירה בין $V$ ל-$W$ שמשקלה 3. מה יהיה המרחק המעודכן לצומת $W$ לאחר בחינת הצומת $V$?",
    opts("8", "13", "10", "3"), "a",
    r"""הצעד של דייקסטרה: $D(W)=\min\{D(W),\,D(V)+c(V,W)\}=\min\{10,\,5+3\}=8$.
13 מתקבל מחיבור שגוי של 10 ו-3; 10 הוא הערך הישן; 3 הוא משקל הקשת בלבד."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "link_layer",
    "מחשב א (`192.168.1.5`) מעוניין לשלוח חבילה למחשב ב (`8.8.8.8`) הנמצא ברשת חיצונית. ה-Default Gateway הוא `192.168.1.1`. איזה מזהה יופיע בשדה 'כתובת יעד' של מסגרת ה-Ethernet (L2 Frame) שתצא ממחשב א?",
    opts("ה-MAC של ה-Default Gateway", "ה-IP של מחשב ה-Default Gateway", "ה-MAC של מחשב א", "ה-MAC של מחשב ב"), "a",
    r"""יעד ה-IP (`8.8.8.8`) מחוץ לרשת המקומית, לכן המחשב שולח את החבילה אל ה-Default Gateway: כתובת ה-IP בחבילה נשארת `8.8.8.8`, אבל כתובת היעד במסגרת ה-Ethernet היא ה-MAC של ה-Gateway (מתקבלת מ-ARP).
ב: כתובת IP לא מופיעה בכותרת Ethernet; ג: זו כתובת המקור; ד: ה-MAC של מחשב ב אינו ידוע ואינו נגיש בתוך הרשת המקומית."""))

# ---------------------------------------------------------------- 15
questions.append(Q(
    15, "nat_ipv6_icmp",
    "איזה פרוטוקול ואיזו הודעה מופעלים כאשר נתב (Router) מקבל חבילת IP שגודלה עולה על ה-MTU של ממשק היציאה, ושדה ה-Flags שלה מכיל את הערך DF (Don't Fragment)?",
    opts("ICMP: Destination Unreachable", "IP: Fragmentation denied", "TCP: timeout", "שום פרוטוקול לא יפעל"), "a",
    r"""כשיש DF והחבילה גדולה מה-MTU, הנתב אינו מפצל אותה: הוא זורק אותה ושולח למקור הודעת ICMP מסוג Destination Unreachable (קוד "Fragmentation needed and DF set").
ב: אין הודעה כזו ב-IP; ג: timeout של TCP הוא תוצאה אפשרית אצל המקור, לא הודעה שהנתב מפעיל; ד: שגוי, כי ICMP פועל."""))

exam = {
    "examCode": "26A-A",
    "examLabel": "2026 סמסטר א מועד א",
    "year": 2026,
    "examDate": "18.02.2026",
    "sourceFile": "sitting 26A-A (typed question and solution document)",
    "keyFile": "sitting 26A-A typed solution document (first listed option) + independent recomputation, tools/verify/26A-A/check.py",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
