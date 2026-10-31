# -*- coding: utf-8 -*-
"""L07 · ARP, מסגרות Ethernet וסוויץ' — video script (build: tools/video/vid.py L07).

Source: courses/link/C07.js (lesson + goal: how ARP maps IP to MAC, which MAC is in the frame on each link, how a
switch learns and forwards).
Exam anchor: 23A-A-Q14 (a first HTTP request to a server in the same LAN whose IP is known: which protocols run?
ARP and HTTP). Not in any guided quiz. Its twin 23A-B-Q14 is not used either.
Avoided on purpose: the "what is ARP for" items 25A-B-Q12 / 25A-C-Q9 / 25A-C-Q15 (content twins of C07-Q1), 26A-A-Q14
(gateway MAC, in the C08 boss), the C07-Q3 addresses (10.0.5.20/24 -> 10.0.7.9) and the C07-Q5/Q6 switch case (A->B
then B->A on an empty table): the switch here learns from an ARP exchange between other hosts on other ports.
The gateway decision is ipaddress's subnet test; every forwarding decision and table comes from the checker's
switch() through w_link.switch_fig(), asserted below.
"""
import ipaddress
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_link as w

# ---------------------------------------------------------------- data (verified)
NET = ipaddress.ip_network("172.16.4.0/24")
ME, GW = ipaddress.ip_address("172.16.4.10"), ipaddress.ip_address("172.16.4.1")
IN_DST, OUT_DST = ipaddress.ip_address("172.16.4.77"), ipaddress.ip_address("172.16.9.3")
assert ME in NET and GW in NET and IN_DST in NET and OUT_DST not in NET


def arp_target(dst):
    return dst if dst in NET else GW


assert arp_target(IN_DST) == IN_DST and arp_target(OUT_DST) == GW
assert int("FF" * 6, 16) == 2 ** 48 - 1                       # broadcast MAC: all 48 bits are 1

HOSTS = {1: "A", 2: "B", 3: "C", 4: "D"}
FRAMES = [("C", "FF", 3), ("D", "C", 4), ("C", "D", 3), ("A", "C", 1)]
SW, OUTS, TABLES = w.switch_fig("sw", HOSTS, FRAMES)
assert OUTS == [[1, 2, 4], [3], [4], [3]]
assert TABLES == [{"C": 3}, {"C": 3, "D": 4}, {"C": 3, "D": 4}, {"C": 3, "D": 4, "A": 1}]
assert "B" not in TABLES[-1]                                   # B never sent anything: still unknown
FT = w.fwd_table("ft", ["C", "D", "A"], TABLES[-1])

Q = BANK["23A-A-Q14"]
assert Q["correctId"] == "a" and [o["id"] for o in Q["options"]] == ["a", "b", "c", "d", "e"]
OPTS = [(o["id"], o["value"]) for o in Q["options"]]
NEEDED = {"DHCP": False, "DNS": False, "ARP": True, "HTTP": True}  # IP configured, server IP known, MAC unknown
assert [k for k, v in NEEDED.items() if v] == ["ARP", "HTTP"]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נחבר בין כתובות IP לכתובות MAC: הפרוטוקול ARP."),
    P("נראה למי שואלים כשהיעד מחוץ לרשת, ואיך סוויץ' לומד לבד לאן לשלוח כל מסגרת."),
    P("ובסוף נפתור שאלה ממבחן: אילו פרוטוקולים באמת רצים.", hold=0.4),
], stage="<div class=\"kicker\">L07 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>ARP, מסגרות Ethernet וסוויץ'</h1>"
         "<p>להסביר איך ARP ממפה IP ל-MAC, איזו כתובת MAC נמצאת במסגרת בכל קישור, ואיך סוויץ' לומד ומעביר.</p>",
   layout="title")

arp = Scene("arp", "ARP", [
    P("כדי לשלוח מסגרת ברשת המקומית, צריך את כתובת ה-MAC של היעד. אבל בדרך כלל יודעים רק את ה-IP שלו.",
      do=show("a-1")),
    P("ARP פותר את זה: ״למי יש את כתובת ה-IP הזו? שלח לי את ה-MAC שלך״.", do=show("a-2")),
    P("השואל עוד לא יודע למי לשלוח, ולכן הבקשה יוצאת ב-broadcast: לכולם ברשת.", do=show("a-3")),
    P("כתובת היעד במסגרת היא שש פעמים FF. כלומר כל 48 הביטים הם אחת.", do=show("a-4"),
      say="כתובת היעד במסגרת היא שש פעמים אֶף אֶף. כלומר כל ארבעים ושמונה הביטים הם אחת."),
    P("כולם מקבלים את הבקשה, אבל רק בעל הכתובת עונה. והוא עונה ב-unicast, ישירות לשואל.", do=show("a-5")),
    P("את התשובה שומרים בטבלת ARP, כדי לא לשאול שוב בכל מסגרת.", do=show("a-6"), hold=0.3),
], stage=w.stack(w.row("a-1", "ידוע: IP של היעד &nbsp;·&nbsp; חסר: MAC של היעד"),
                 w.row("a-2", "״למי יש את ה-IP הזה?״"),
                 w.row("a-4", "יעד: " + w.mono("FF:FF:FF:FF:FF:FF")),
                 w.row("a-5", "תשובה: " + w.ltr("unicast") + ", עם ה-MAC"), gap=40),
   panel=st.card("a-3", "rule", "🔑 בקשה: " + w.ltr("broadcast"))
         + st.card("a-6", "ex", "טבלת ARP: מטמון של תשובות"))

gw = Scene("gw", "יעד מחוץ לרשת", [
    P("ARP עובד רק **בתוך** הרשת המקומית. אז מה עושים כשהיעד מחוץ לה?"),
    P("המחשב שלנו נמצא ברשת ‎172.16.4.0/24‎, וה-Default Gateway שלו הוא ‎172.16.4.1‎.", do=show("g-0"),
      say="המחשב שלנו נמצא ברשת מאה שבעים ושתיים, שש עשרה, ארבע, אפס, סלאש עשרים וארבע. והדִיפוֹלְט גֵייטְוֵויי שלו מסתיים באחת."),
    P("יעד ‎172.16.4.77‎ נמצא באותה רשת: שלושת הבייטים הראשונים זהים. לכן שואלים ב-ARP **עליו**.", do=show("g-1"),
      say="יעד שמסתיים בשבעים ושבע נמצא באותה רשת: שלושת הבייטים הראשונים זהים. לכן שואלים בארפּ עליו."),
    P("יעד ‎172.16.9.3‎ נמצא ברשת אחרת. לכן המסגרת יוצאת אל ה-Gateway, ושואלים על ה-MAC **שלו**.",
      do=show("g-2"),
      say="יעד מאה שבעים ושתיים, שש עשרה, תשע, שלוש, נמצא ברשת אחרת. לכן המסגרת יוצאת אל הגֵייטְוֵויי, ושואלים על המַאק שלו."),
    P("ב-IP של החבילה עדיין כתוב היעד הרחוק. רק ה-MAC במסגרת הוא של ה-Gateway.", do=show("g-3")),
    P("זה אותו כלל מהסרטון הראשון: ה-MAC שייך לצעד הבא בקישור הנוכחי.", do=show("g-4"), hold=0.3),
], stage=w.stack(w.row("g-0", "אנחנו: " + w.mono("172.16.4.10/24") + " &nbsp;·&nbsp; Gateway: " + w.mono("172.16.4.1")),
                 w.table("g-tab", ["יעד", "באותה רשת?", "ARP על"], [
                     [w.mono(str(IN_DST)), '<span class="lk-ok">כן</span>', w.mono(str(arp_target(IN_DST)))],
                     [w.mono(str(OUT_DST)), '<span class="lk-bad">לא</span>', w.mono(str(arp_target(OUT_DST)))]],
                         hidden=False, ids=["g-1", "g-2"]), gap=40),
   panel=st.card("g-3", "ex", "IP יעד: הרחוק · MAC יעד: ה-Gateway")
         + st.card("g-4", "rule", "🔑 מחוץ לרשת: ARP על ה-Gateway"))

sw = Scene("sw", "סוויץ' לומד", [
    P("עכשיו הסוויץ'. הוא מעביר מסגרות לפי MAC, ובונה לבד טבלת העברה. היא מתחילה ריקה.", do=show("ft")),
    P("הכלל: על כל מסגרת שמגיעה, רושמים: ״כתובת המקור נמצאת בממשק שממנו היא הגיעה״.", do=show("w-1")),
    P("$C$ שולח בקשת ARP, ב-broadcast, מממשק 3. נרשם: $C$ בממשק 3.", do=show("sw-in0", "ft-t-C"),
      say="סִי שולח בקשת ארפּ, בבְּרוֹדְקַאסְט, מממשק שלוש. נרשם: סִי בממשק שלוש."),
    P("broadcast הולך לכולם, חוץ מהממשק שממנו הגיע: ממשקים 1, 2 ו-4. זה flooding.", do=show("sw-out0")),
    P("$D$ עונה ל-$C$ מממשק 4. נרשם $D$ בממשק 4, ו-$C$ כבר בטבלה: המסגרת יוצאת **רק** בממשק 3.",
      do=hide("sw-in0", "sw-out0") + show("sw-in1", "sw-out1", "ft-t-D"),
      say="דִּי עונה לסִי מממשק ארבע. נרשם דִּי בממשק ארבע, וסִי כבר בטבלה: המסגרת יוצאת רק בממשק שלוש."),
    P("עכשיו $C$ שולח נתונים ל-$D$. שניהם בטבלה, והמסגרת יוצאת רק בממשק 4.",
      do=hide("sw-in1", "sw-out1") + show("sw-in2", "sw-out2"),
      say="עכשיו סִי שולח נתונים לדִּי. שניהם בטבלה, והמסגרת יוצאת רק בממשק ארבע."),
    P("ו-$A$ שולח ל-$C$ מממשק 1: נרשם $A$, והמסגרת יוצאת רק לממשק 3.",
      do=hide("sw-in2", "sw-out2") + show("sw-in3", "sw-out3", "ft-t-A"),
      say="ואֵיי שולח לסִי מממשק אחת: נרשם אֵיי, והמסגרת יוצאת רק לממשק שלוש."),
    P("ו-$B$? הוא עוד לא שלח כלום, ולכן הוא לא בטבלה. מסגרת אליו תצא ב-flooding.", do=show("w-2"),
      say="ובִּי? הוא עוד לא שלח כלום, ולכן הוא לא בטבלה. מסגרת אליו תצא בפְלַאדִינְג."),
    P("שימו לב: הסוויץ' לומד רק מכתובות **המקור**. כתובת היעד לא מלמדת אותו כלום.", do=show("w-3"), hold=0.3),
], stage=SW,
   panel=FT + st.card("w-1", "rule", "🔑 לומדים: מקור ← ממשק הכניסה")
         + st.card("w-2", "ex", "יעד לא ידוע או " + w.ltr("broadcast") + ": לכולם חוץ מממשק הכניסה")
         + st.card("w-3", "trap", "⚠️ לומדים רק מהמקור"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: לקוח רוצה דף מאתר, בשרת שנמצא **באותה רשת מקומית**, ובכתובת IP **ידועה**."),
    P("למחשב כבר הוגדרה כתובת IP, וכתובת ה-MAC של השרת **אינה ידועה**. אילו פרוטוקולים יופעלו?"),
    P("עוברים על מה שחסר. כתובת IP למחשב? יש כבר. לכן אין צורך ב-DHCP.", do=show("k-1")),
    P("כתובת IP של השרת? ידועה. אין שם לתרגם, ולכן אין צורך ב-DNS.", do=show("k-2")),
    P("כתובת MAC של השרת? חסרה. והשרת באותה רשת, אז שואלים עליו ישירות ב-ARP.", do=show("k-3")),
    P("ואחרי שיש MAC, שולחים את בקשת ה-HTTP. ARP ו-HTTP: זו התשובה.", do=show("k-4", "q-ok-a")),
    P("HTTP רץ כמובן מעל TCP, אבל השאלה היא מה נדרש **מעבר** לבקשה עצמה.",
      say="אֵייץ' טִי טִי פִּי רץ כמובן מעל טִי סִי פִּי, אבל השאלה היא מה נדרש מעבר לבקשה עצמה."),
    P("שתי התשובות עם DHCP נופלות: למחשב כבר יש כתובת.", do=show("q-x-b", "q-n-b", "q-x-d", "q-n-d")),
    P("התשובה עם DNS נופלת: אין שם שצריך לתרגם, הכתובת ידועה.", do=show("q-x-c", "q-n-c")),
    P("ו״אף אחת״ נופלת, כי מצאנו תשובה נכונה.", do=show("q-x-e", "q-n-e")),
    P("המפתח: בכל שאלה כזו בודקים מה **חסר**, ומפעילים רק את הפרוטוקול שממלא את החסר.", hold=0.5),
], stage='<div class="lk-q"><div class="qstem"><span class="qid">23A-A-Q14</span>לקוח HTTP רוצה דף בשרת מקומי '
         '<b>באותו LAN</b>, בכתובת IP <b>ידועה</b> באותו Subnet. למחשב כבר הוגדרה כתובת IP, וזו בקשה ראשונה. '
         'כתובת ה-MAC של השרת <b>אינה ידועה</b>. אילו פרוטוקולים נדרשים?</div>'
         + st.options("q", OPTS, notes={"b": "אין צורך ב-DHCP", "c": "אין צורך ב-DNS", "d": "אין צורך ב-DHCP",
                                        "e": "יש נכונה"}) + "</div>",
   panel=w.table("k-tab", ["חסר?", "פרוטוקול"], [
       ['<span class="lk-ok">יש</span> IP למחשב', '<span class="lk-bad">✗</span> ' + w.ltr("DHCP")],
       ['<span class="lk-ok">ידוע</span> IP של השרת', '<span class="lk-bad">✗</span> ' + w.ltr("DNS")],
       ['<span class="lk-bad">חסר</span> MAC של השרת', '<span class="lk-ok">✓</span> ' + w.ltr("ARP")],
       ["הבקשה עצמה", '<span class="lk-ok">✓</span> ' + w.ltr("HTTP")]], hidden=False,
       ids=["k-1", "k-2", "k-3", "k-4"]))

recap = Scene("recap", "סיכום", [
    P("לסיכום: ARP מוצא כתובת MAC לפי כתובת IP, בתוך הרשת המקומית בלבד.", do=show("r-1")),
    P("הבקשה יוצאת ב-broadcast לכולם, והתשובה חוזרת ב-unicast.", do=show("r-2")),
    P("יעד מחוץ לרשת: שואלים על ה-MAC של ה-Gateway.", do=show("r-3")),
    P("וסוויץ' לומד מכתובת המקור, שולח לממשק אחד כשהיעד ידוע, ומציף כשלא. נתראה ברמה הבאה.", do=show("r-4"),
      hold=0.6),
], stage=w.stack(w.fwd_table("fr", ["C", "D", "A"], TABLES[-1], hidden=False).replace(' class="h"', "")),
   panel=st.card("r-1", "rule", "🔑 ARP: IP ← MAC, רק ברשת המקומית")
         + st.card("r-2", "ex", "בקשה " + w.ltr("broadcast") + ", תשובה " + w.ltr("unicast"))
         + st.card("r-3", "rule", "🔑 מחוץ לרשת: ה-MAC של ה-Gateway")
         + st.card("r-4", "trap", "⚠️ סוויץ' לומד רק מהמקור"))

VIDEO = Video("L07", "link", "ARP, מסגרות Ethernet וסוויץ'", [title, arp, gw, sw, exam, recap],
              bank={"23A-A-Q14": "a"})
