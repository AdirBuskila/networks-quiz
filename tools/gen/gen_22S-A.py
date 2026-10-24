# -*- coding: utf-8 -*-
"""Generator for tools/raw/22S-A.json -- networks, 2022 summer semester, moed A (3.10.2022).
Run: PYTHONUTF8=1 py tools/gen/gen_22S-A.py

Source: the 24-page questions+answers PDF: pages 1-12 are the clean exam (18 questions, 4 options each, answer
sheet on p.12), pages 13-24 repeat it with the official key as a yellow highlight on the correct option.
Keys: 16 questions carry the yellow highlight (answerSource "highlighted-pdf", official:true). Q10 and Q11 carry
NO highlight in the key copy, so they were solved independently and ship as "solved" (official:false).
Calculations are recomputed in tools/verify/22S-A/check.py (Q3 fragment offset, Q5 load time, Q8 fragmentation,
Q10 Hamming distance, Q11 parity codewords); all agree with the highlighted keys.
Q8 prints four candidate packet tables followed by an indirection list (A-D = option letters); here the four
tables are the options themselves. Q11 options ב and ד print the same table (accepted ids b and d).
Figures: Q8 topology + NAT table, Q14 handshake diagram (cropped from the clean copy, not the highlighted one)."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22S-A.json"
IDS = "abcdef"
SRC = "highlighted-pdf"


def opts(*vals):
    return [{"id": IDS[i], "type": "text", "value": v} for i, v in enumerate(vals)]


def Q(num, topic, question, options, correct, explanation, **kw):
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": SRC, "official": True,
         "confidence": "high", "explanation": explanation}
    q.update(kw)
    return q


def solved(num, topic, question, options, correct, explanation, **kw):
    kw.setdefault("note", "No highlight in the key copy for this question; solved independently.")
    return Q(num, topic, question, options, correct, explanation,
             answerSource="solved", official=False, **kw)


def pkt(src_ip, dst_ip, sport, dport, size, off, frag):
    return f"`SRC IP {src_ip} | DST IP {dst_ip} | SRC PORT {sport} | DST PORT {dport} | SIZE {size} | OFFSET {off} | FRAG {frag}`"


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "ip_cidr", "אלו מבין הבאים יכול לבצע re-assembly ל-IP Packets?",
    opts("רק NAT", "רק תחנת היעד ו-NAT", "רק תחנת היעד", "רק Switch"), "b",
    r"""הרכבה מחדש של פרגמנטים מתבצעת בתחנת היעד. גם NAT יכול לבצע אותה: מספרי הפורטים (שבהם הוא משתמש לתרגום) נמצאים רק בפרגמנט הראשון, ולכן NAT שמתרגם כתובות ופורטים נדרש לעיתים להרכיב את החבילה כדי לתרגם נכון.
Switch פועל בשכבת הקו ואינו רואה את שכבת ה-IP, ולכן אינו מרכיב חבילות. "רק NAT" ו-"רק תחנת היעד" חסרות כל אחת את הצד השני.
הערה: בספר הלימוד ההרכבה מחדש מתבצעת בתחנת היעד בלבד, ולכן ג היא תשובה מתבקשת. המפתח הרשמי של הבחינה הוא ב, משום שהשאלה שואלת מי **יכול** להרכיב: NAT שמתרגם פורטים צריך את כותרת התעבורה, שנמצאת רק בפרגמנט הראשון, ולכן לעיתים הוא מרכיב את החבילה בעצמו.""",
    note="Official highlighted key b kept; refuter's c (textbook default) answered in a visible הערה (arbiter 2026-10-24)."))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "nat_ipv6_icmp", "אלו מבין הבאים בא לפתור את מצוקת הכתובות?",
    opts("Router", "NAT", "Switch", "DNS"), "b",
    r"""מצוקת כתובות ה-IPv4: NAT מאפשר להרבה תחנות ברשת פרטית להשתמש בכתובת ציבורית אחת (באמצעות תרגום פורטים).
Router מנתב, Switch מעביר מסגרות לפי MAC ו-DNS מתרגם שמות לכתובות - אף אחד מהם אינו חוסך כתובות."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "ip_cidr",
    "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes. מה נכון לגבי חבילה מספר 5 (מתוך 5)?",
    opts("Offset=1600", "Offset=200", "Offset=400", "Offset=480"), "b",
    r"""2000 הבתים הם נתונים, והם נחתכים ל-5 פרגמנטים, כלומר כל פרגמנט נושא $F$ בתים (כפולה של 8) עם $400\le F<500$ כדי שיהיו בדיוק 5. הפרגמנט החמישי מתחיל אחרי $4F$ בתים, והשדה Offset נמדד בבלוקים של 8: $\text{Offset}=4F/8=F/2\in[200,250)$.
מבין האפשרויות רק 200 נמצא בטווח ($F=400$, כלומר MTU של 420). 1600 הוא ההיסט בבתים (לא בבלוקים), ו-400 ו-480 מתאימים לפרגמנטים גדולים מדי.""",
    note="Official highlighted key; the MTU is not printed, the offset range pins F=400 (verified in tools/verify/22S-A/check.py)."))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "dns_dhcp", "איזו תשובה מתארת בצורה המדויקת ביותר את פרוטוקול DHCP?",
    opts("פרוטוקול הפועל בשכבת הקו (Data-Link Layer) כיוון שמטרתו היא לאפשר לתחנה לקבל כתובת IP מקומית",
         "פרוטוקול הפועל בשכבת התעבורה שפועל על-גבי פרוטוקול TCP כיוון שכתובות ה-IP ייחודיות וידועות.",
         "מאפשר להתחבר לרשת באופן ידני (כלומר הלקוח יבחר כתובת IP מקומית ללא תלות בשרת ה-DHCP)",
         "פרוטוקול בשכבת האפליקציה שפועל מעל פרוטוקול UDP בשכבת התעבורה"), "d",
    r"""DHCP הוא פרוטוקול של שכבת האפליקציה (לקוח-שרת) שרץ מעל UDP (פורטים 67 ו-68), כי ללקוח עדיין אין כתובת IP ולכן הוא משדר.
א: אינו פרוטוקול של שכבת הקו. ב: אינו רץ מעל TCP. ג: DHCP דווקא מקצה את הכתובת ואינו ידני."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "http",
    "מעוניינים להציג בדפדפן את דף הבית של אתר ״שושי-נט״ בכתובת www.shoshinet.com. נניח כי גודל הדף הוא 100KByte ובתוכו הפניה ל-5 תמונות, כל אחת מהתמונות בגודל 300KByte. כמו כן, ידוע כי הדף המבוקש והתמונות מאוחסנים באותו מחשב. ה-RTT בין המחשב שלך לשרת הוא 500msec ומהירות הקו היא 100Mbps. ניתן להזניח את זמן שידור הודעת ה-GET.\n"
    "כמה זמן יידרש לטעינת הדף כולל התמונות ב-host בחיבור מסוג HTTP Persistent (ללא pipelining)?",
    opts("`T = 1sec + 100KB/100Mb + 5*(500msec + 300KB/100Mb)`",
         "`T = 500msec + 100KB /100Mb + 5*(1sec + 300KB /100Mb)`",
         "`T = 1sec + 100KB /100Mb + 500msec + 5*(300KB /100Mb)`",
         "`T = 1msec + 100KB /100Mb + 5*(1sec + 250KB/100Mb)`"), "a",
    r"""חיבור persistent: ההקמה של חיבור ה-TCP עולה RTT אחד, ואחריה בקשת ה-GET של הדף עולה עוד RTT (יחד $2\cdot 500\,ms=1\,sec$), ואז משדרים את הדף. כל אחת מ-5 התמונות (ללא pipelining, בזו אחר זו על אותו חיבור) עולה RTT אחד של בקשה ועוד זמן שידור התמונה.
$$T=1\,sec+\frac{100KB}{100Mb}+5\left(500\,msec+\frac{300KB}{100Mb}\right)\approx 3.63\,sec$$
ב: נותן RTT כפול לכל תמונה (כמו חיבור שאינו persistent). ג: מחשב את ה-RTT של התמונות פעם אחת בלבד (כמו pipelining). ד: ערכים שאינם מתאימים לנתונים."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "udp_checksum", "בחר את הנוסח המדויק ביותר:",
    opts("מנגנון Checksum משמש לגילוי שגיאות (האם מידע השתבש). מנגנון זה אינו בטוח לגמרי שכן אם יש שגיאה בהודעה וגם יש שגיאה מפצה בשדה ה-checksum, אזי הצד המקבל כלל לא יבחין בשגיאה.",
         "מנגנון Checksum משמש לבדיקת תקינות/שלמות ההודעה שנשלחה והוא בטוח לחלוטין. בפרוטוקול UDP, אם הערך שמופיע בשדה ה-checksum שווה לערך שחישב הצד המקבל, הרי שההודעה תקינה באופן וודאי.",
         "מנגנון ה-checksum בודק האם ההודעה שהתקבלה זהה להודעה שנשלחה. בגלל מבנה UDP Datagram, אין אפשרות שה-header ישתבש אלא רק המידע שהוא עוטף.",
         "מנגנון ה-checksum משמש לתיקון שגיאות ולכן אם ה-checksum שחושב לא שווה לערך ה-checksum שנשלח בהודעה מעל פרוטוקול UDP, הרי שהחבילה תתוקן ותעלה לשכבת האפליקציה."), "a",
    r"""Checksum מזהה שגיאות בלבד ואינו מתקן אותן, והוא אינו מושלם: שינויים שמבטלים זה את זה (למשל שגיאה בהודעה ושגיאה מפצה בשדה ה-checksum) לא יתגלו.
ב: "בטוח לחלוטין" ו-"ודאי" שגויים - התאמה אינה הוכחה לתקינות. ג: גם ה-header יכול להשתבש. ד: ה-checksum אינו מתקן; חבילה פגומה נזרקת."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "dns_dhcp", "קבלת כתובת IP באופן דינאמי משרת DHCP בעת הצטרפות לרשת מתבצע בסדר הבא:",
    opts("`DHCP Request->DHCP Offer->DHCP ACK`",
         "`DHCP Request->DHCP ACK->DHCP Discover->DHCP Offer`",
         "`DHCP Discover-> DHCP Request-> DHCP ACK`",
         "`DHCP Discover->DHCP Offer->DHCP Request->DHCP ACK`"), "d",
    r"""הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.
א, ב, ג משמיטות את שלב ה-Offer או הופכות את הסדר."""))

# ---------------------------------------------------------------- 8
q8_stem = ("שכבת התעבורה במחשב A (10.0.0.1) שולחת חבילה בגודל 2000Bytes למחשב C (20.0.3.1) אשר משמש כשרת web.\n"
           "נקבע MTU בקווים ברשת ל-1500 bytes, פרט לקו המחבר בין R2 ל-R3 אשר בו נקבע MTU = 500Bytes. R1 משמש גם כשרת NAT. ניתן להניח כי גודל ה-header הוא 20 בתים. נתונים כתובת ה-IP של תחנות הקצה והנתבים וכן הרשומה הרלוונטית בטבלת ה-NAT.\n"
           "מהי החלוקה לחבילות אשר מתארת בצורה המדויקת ביותר את המידע שיוצא מ-A אל R1?")
questions.append(Q(
    8, "nat_ipv6_icmp", q8_stem,
    opts(pkt("10.0.0.1", "20.0.3.1", 123, 80, 1500, 0, 1) + "\n" + pkt("10.0.0.1", "20.0.3.1", 123, 80, 540, 185, 0),
         pkt("20.0.0.1", "20.0.3.1", 130, 80, 1500, 0, 1) + "\n" + pkt("20.0.0.1", "20.0.3.1", 130, 80, 540, 185, 0),
         pkt("20.0.1.1", "20.0.3.1", 123, 80, 2000, 0, 0),
         pkt("10.0.0.1", "20.0.3.1", 123, 80, 1500, 0, 1) + "\n" + pkt("20.0.0.1", "20.0.3.1", 130, 80, 540, 185, 0)),
    "a",
    r"""השאלה היא על המידע היוצא מ-A אל R1, כלומר לפני ה-NAT: כתובת המקור עדיין הפרטית `10.0.0.1` ופורט המקור 123 (התרגום ל-`20.0.0.1:130` נעשה רק ב-R1).
הקו של A מוגבל ל-1500: 2000 בתים נתונים מתחלקים לפרגמנט ראשון של 1480 בתים נתונים + 20 header = 1500 (Offset 0, FRAG 1) ופרגמנט שני של 520 בתים נתונים + 20 = 540 (Offset $1480/8=185$, FRAG 0).
ב: כבר אחרי NAT. ג: ללא פרגמנטציה למרות MTU של 1500. ד: מערבב כתובת לפני NAT ואחריו. (ה-MTU של 500 בין R2 ל-R3 משפיע רק בהמשך הדרך.)""",
    image="images/exams/22S-A-Q8.png",
    note="Official highlighted key: option A. The source prints the four packet tables and then a letter list; here the tables are the options. D is the fourth printed table (first packet un-NATed, second NATed)."))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "sockets_email",
    "סיון מעוניינת להציג בדפדפן את דף הבית של ״שושי-נט״ בכתובת: http://www.shoshinet.com\n"
    "ניתן להניח כי:\n"
    "- הכתובת עבור שרת האינטרנט נרשמה במערכת ה-DNS העולמית ועודנה פעילה.\n"
    "- תשובה על DNS A Query מלקוח עבור הכתובת http://www.shoshinet.com תכיל את כתובת ה-IP הבאה: 212.235.27.38\n"
    "- הכתובת היא של Web Server במצב online, כלומר יכול להאזין לבקשות מלקוחות ולטפל בהן, אך מאז שהשרת עלה טרם נשלחה אליו בקשה.\n"
    "- סיון מעולם לא ביקרה באתר ״שושי-נט״ או באתר אשר מפנה אל אתר ״שושי-נט״/משאבים ששמורים ב-domain של ״שושי-נט״.\n"
    "- ידוע כי באופן עקרוני, בקשת HTTP GET בודדת, ללא פרמטרים נוספים לאתר ״שושי-נט״, תענה ב-Response שב-Body שלו מסמך HTML אחד, הכולל טקסט בלבד, ללא לינקים/הפניות למשאבים כלשהם.\n"
    "- ידוע כי סיון ביצעה בקשת HTTP GET אחת ובסופו של התהליך, דף הבית של שושי-נט הוצג באופן תקין בדפדפן של סיון.\n"
    "כמה Sockets נוצרו בסה״כ הן בצד השרת והן בצד הלקוח מאז שהשרת עלה ועד שדף האתר הוצג בהצלחה בדפדפן של סיון?",
    opts("3", "4", "2", "5"), "b",
    r"""בצד השרת: socket האזנה (welcome) שנוצר כשהשרת עלה, וסוקט חיבור אחד שנוצר כשהתקבל החיבור של סיון - 2.
בצד הלקוח: סוקט UDP עבור שאילתת ה-DNS וסוקט TCP עבור חיבור ה-HTTP - 2 (הדף כולל HTML אחד בלבד, ללא תמונות, ולכן אין חיבורים נוספים).
סך הכול 4.
3 מתקבל אם שוכחים את סוקט ה-DNS (או את סוקט ההאזנה), ו-5 מניח חיבור נוסף שלא נדרש.""",
    confidence="med",
    note="Official highlighted key: 4 (server welcome + connection socket, client DNS UDP + HTTP TCP socket)."))

# ---------------------------------------------------------------- 10
questions.append(solved(
    10, "link_layer",
    "בטבלה מופיעות 2 מחרוזות שמייצגות מידע בעל-משמעות.\n"
    "`ID 1: 1 0 0 1 1 0 0`\n`ID 2: 1 0 0 1 1 0 1`\n"
    "לפי Hamming Code ו-Hamming Distance:",
    opts("אם בשידור המידע יתהפך הביט האחרון באחת מהמחרוזות, נדע לזהות שארעה שגיאה",
         "אם בשידור המידע יתהפך הביט האחד לפני אחרון, באחת מהמחרוזות, לא נדע לזהות שארעה שגיאה",
         "אם בהעברת המידע יתהפך ביט במיקום כלשהו באחת המחרוזות, נדע לזהות שארעה שגיאה",
         "אף אחת מהתשובות האחרות נכונה"), "d",
    r"""שתי המחרוזות נבדלות בביט אחד בלבד (המרחק של Hamming הוא 1). היפוך הביט האחרון באחת מהן מייצר בדיוק את המחרוזת השנייה, שהיא מילה חוקית - לכן השגיאה לא תזוהה (א שגויה, וממילא ג שגויה).
היפוך הביט שלפני האחרון מייצר מחרוזת שאינה אחת משתי המילים החוקיות (`1001110` או `1001111`), ולכן השגיאה כן תזוהה (ב שגויה).
לכן אף אחת מהתשובות האחרות אינה נכונה: ד.""",
    note="No highlight in the key copy for this question; solved independently (tools/verify/22S-A/check.py)."))

# ---------------------------------------------------------------- 11
q11_rows = lambda a, b: "\n".join([f"`ID 1: Binary Data 1011101 | Parity Bit {a[0]} | Binary Data {a[1]}`",
                                   f"`ID 2: Binary Data 1001101 | Parity Bit {b[0]} | Binary Data {b[1]}`"])
questions.append(solved(
    11, "link_layer",
    "בטבלה מופיעות שתי מחרוזות שמייצגות מידע בעל-משמעות.\n"
    "`ID 1: 1 0 1 1 1 0 1`\n`ID 2: 1 0 0 1 1 0 1`\n"
    "על-פי Hamming Code, שימוש ב-1's complement באופן הבא יאפשר זיהוי של שגיאה בודדת בין המחרוזות:",
    [{"id": "a", "type": "text", "value": q11_rows((0, "10111010"), (0, "10011010"))},
     {"id": "b", "type": "text", "value": q11_rows((1, "101110101"), (0, "100110100"))},
     {"id": "c", "type": "text", "value": q11_rows((1, "101110101"), (1, "100110101"))},
     {"id": "d", "type": "text", "value": q11_rows((1, "101110101"), (0, "100110100"))}],
    "b",
    r"""שתי המחרוזות נבדלות בביט אחד, ולכן שגיאה בודדת עלולה להפוך אחת לשנייה. הוספת ביט זוגיות (even parity) מגדילה את המרחק בין המילים החוקיות ל-2, וכך כל שגיאה בודדת מזוהה.
במחרוזת 1 יש חמישה אחדות, ולכן ביט הזוגיות הוא 1; במחרוזת 2 יש ארבעה אחדות ולכן ביט הזוגיות הוא 0. רק הטבלה שבה ביטי הזוגיות הם (1, 0) והנתונים המוארכים מתאימים להם נכונה.
א: ביטי הזוגיות (0, 0) שגויים ומרחק המילים נשאר 1. ג: ביט הזוגיות של מחרוזת 2 שגוי (1 במקום 0).
בשאלון האפשרויות ב ו-ד מודפסות בטבלה זהה, ולכן שתיהן מתקבלות.""",
    acceptedIds=["b", "d"],
    note="No highlight in the key copy for this question; solved independently. Options b and d print the same table, so both are accepted (acceptedIds). Parity checked in tools/verify/22S-A/check.py."))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "dns_dhcp", "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
    opts("IP, Router IP, Subnet, Root DNS",
         "IP, Router IP, DNS Root, Default Gateway IP",
         "IP, subnet, local DNS, Default Gateway IP",
         "IP, Default Gateway MAC address, Subnet, Local DNS"), "c",
    r"""שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.
א, ב: שרת DNS "Root" אינו מה ש-DHCP נותן. ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "intro_layers", "מה תפקידה של שכבת התעבורה?",
    opts("להבטיח אמינות בין תחנות רחוקות", "לנתב את התעבורה ברשת", "להעביר מידע בין מחשבים קרובים", "להגדיר את המסלולים בניתוב ההודעות"), "a",
    r"""שכבת התעבורה מספקת תקשורת בין תהליכים בתחנות הקצה (ב-TCP גם אמינות), מקצה לקצה.
ב ו-ד: ניתוב והגדרת מסלולים הם תפקיד שכבת הרשת. ג: העברה בין מחשבים קרובים היא עניין של שכבת הקו."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "tcp",
    "לפניכם תהליך TCP 3-Way Handshake בין תחנות A ל-B:\n"
    "X מייצג מספר רנדומלי שהוגרל. בהנחה שהתהליך הושלם בהצלחה ולא בוצעה שליחה מחדש של SYN של אחד הצדדים, מה הערכים של המשתנים var1, var2, var3?",
    opts("`var1 =501, var2 = 501, var3 = X+1`",
         "`var1 = 500, var2 = X+1, var3 = X`",
         "`var1 = X, var2 = 502, var3 = X+1`",
         "`var1= 501, var2 =X, var3=X+1`"), "a",
    r"""A שולח SYN עם $seq=500$ (ה-SYN צורך מספר סידורי אחד). B עונה ב-SYN+ACK עם $seq=X$ ו-$ack=500+1=501$ - לכן $var1=501$.
A שולח ACK: ה-seq שלו הוא המספר הבא שלו, 501 ($var2=501$), וה-ack הוא $X+1$ ($var3=X+1$).
ב, ג, ד מחליפות בין מספר ה-seq ל-ack או שוכחות את ה-1 של ה-SYN.""",
    image="images/exams/22S-A-Q14.png"))

# ---------------------------------------------------------------- 15
questions.append(Q(
    15, "http",
    "עומר הסביר לאדם שב-HTTP Response, גוף ההודעה (Body) תמיד נכלל ב-Response וגם אינו יכול להיות ריק. בחרו את הנוסח המדויק ביותר מבין האפשרויות הבאות:",
    opts("עומר צודק",
         "עומר טועה רק במקרה ומדובר בתשובה על בקשת HTTP GET למסמך שכבר נמצא ב-cache הדפדפן. במידה והשרת מצא שהמסמך עדיין valid, המסמך לא יישלח ב-Response Body",
         "עומר טועה כיוון שכללי הפרוטוקול לא מאפשרים לשלוח Response ללא חלק הגוף (Body)",
         "אף אחת מהתשובות האחרות נכונה"), "b",
    r"""גוף ההודעה אינו חובה. בבקשה מותנית (`If-Modified-Since`) על מסמך שנמצא ב-cache, אם הוא עדיין תקף השרת עונה `304 Not Modified` ללא גוף.
א: עומר טועה. ג: הפרוטוקול כן מאפשר תשובות ללא גוף (304, וגם 204 ועוד). ד: ב נכונה.
הערה: המילה "רק" בתשובה ב אינה מדויקת עד הסוף: גם תשובה לבקשת HEAD וגם תשובה 204 No Content נשלחות ללא גוף. ב עדיין הטובה ביותר מבין האפשרויות, כי היא היחידה שמפריכה את הטענה "תמיד נכלל גוף" באמצעות מקרה אמיתי ומוכר של תשובה ריקה (304 על מסמך שכבר ב-cache)."""))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "dns_dhcp", "כמה שלבים יש בתהליך מול שרת ה-DHCP?",
    opts("2", "3", "4", "אין תשובה אחרת נכונה"), "c",
    r"""ארבעה שלבים (DORA): Discover, Offer, Request, ACK."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "reliable_transfer",
    "בפרוטוקול ARQ בשיטת Stop and Wait הצד השולח העביר frame אשר הגיע לצד המקבל. הצד המקבל חישב את ה-CRC וגילה שגיאה. מה ייקרה כעת?",
    opts("מתישהו יהיה timeout והצד השולח יבצע retransmission עם מספר סידורי שונה מהחבילה שלא הגיעה תקינה.",
         "מתישהו יהיה timeout והצד השולח יבצע retransmission עם אותו מספר סידורי של החבילה שלא הגיעה תקינה.",
         "הצד המקבל יבקש מהשולח לשלוח מחדש את החבילה",
         "אף אחת מהתשובות האחרות נכונה"), "b",
    r"""ב-Stop and Wait המקבל שמגלה שגיאה זורק את המסגרת ואינו שולח ACK. השולח ממתין, ה-timer פג, והוא שולח שוב את אותה מסגרת עם אותו מספר סידורי (מספר סידורי חדש יתקבל רק אחרי ACK).
א: מספר סידורי שונה יגרום למקבל לחשוב שזו מסגרת חדשה. ג: המקבל אינו מבקש שידור חוזר ב-Stop and Wait הבסיסי."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "dns_dhcp", "מה נכון לגבי פרוטוקול ARP (Address Resolution Protocol)?",
    opts("פרוטוקול שמאפשר המרה של כתובת IP (לוגית) אשר ידועה לי ברשת מקומית לכתובת MAC (פיזית). פרוטוקול זה שייך לשכבת הקו.",
         "פרוטוקול בשכבת הרשת ומטרתו לבצע המרה בין כתובות MAC לכתובות IP בין שני מחשבים ברשתות מרוחקות.",
         "פרוטוקול זה לא שומר מטמון ולכן קשה לזייף בקשות/תשובות ARP.",
         "פרוטוקול בשכבת הקו שמחליף את פרוטוקול ה-Ethernet המוכר."), "a",
    r"""ARP מתרגם כתובת IP ידועה ברשת המקומית לכתובת MAC, ושייך לשכבת הקו.
ב: פועל רק ברשת מקומית ולא בין רשתות מרוחקות. ג: ל-ARP יש מטמון (ARP table) ואפשר לזייף אותו. ד: ARP אינו מחליף את Ethernet אלא משמש אותו."""))

exam = {
    "examCode": "22S-A",
    "examLabel": "2022 סמסטר קיץ מועד א",
    "year": 2022,
    "examDate": "3.10.2022",
    "sourceFile": "sitting 22S-A (questions + answers PDF, 24 pages, 18 questions)",
    "keyFile": "sitting 22S-A questions+answers PDF, yellow-highlighted correct options (Q10 and Q11 unhighlighted: solved); calculations in tools/verify/22S-A/check.py",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
