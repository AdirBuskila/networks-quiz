# -*- coding: utf-8 -*-
"""L06 · CRC: בדיקת מסגרת ויכולות הזיהוי — video script (build: tools/video/vid.py L06).

Source: courses/link/C06.js (lesson + goal: build the sent frame, check a received frame, and know which errors CRC
detects and which it misses).
Exam anchor: 22S-A-Q6 (UDP checksum: detection only, and not perfect: an error plus a compensating error in the
checksum field passes). It is not in any guided quiz, and its lesson is the same as C06's trap: "remainder 0 /
matching checksum" means "no error detected", not "no error".
Avoided on purpose: the C06 quiz data (G=10011 with 11010110111110, G=110101 with 1010001101, G=1001 error words,
G=101 with 1011) and the lesson's G=1011 / D=1101. Here G=1101, D=101011.
Every remainder comes from w_link (crc_steps / rem, asserted against the checker), the burst claim is brute-forced
over every burst of the 9-bit frame, and the checksum example is a real 16-bit ones'-complement sum (csum16).
"""
import itertools
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_link as w

# ---------------------------------------------------------------- numbers (verified)
G, D = "1101", "101011"
R = w.crc(D, G)
F = D + R
assert (R, F) == ("110", "101011110")
RV, RSTEPS, RR = w.division("rv", F, G, append=False)
assert RR == "000" and [p for p, _ in RSTEPS] == [0, 1, 3, 4]  # two XORs, skip one leading zero, two more

BADF = w.flip(F, {3})
assert BADF == "100011110" and w.rem(BADF, G) == "110"

E1, E2 = "011010000", "001101000"               # G shifted by 4 and by 3
assert int(E1, 2) == int(G, 2) << 4 and int(E2, 2) == int(G, 2) << 3
E = w.xor(E1, E2)                                # a multiple of G that is not a plain shift of it
assert E == "010111000" and w.ones(E) == 4 and E.strip("0") != G
RECV = w.xor(F, E)
assert RECV == "111100110" and w.rem(RECV, G) == "000" and RECV != F       # missed
# single-bit errors and every burst of length <= r are detected; a burst of length r+1 can be missed
n, r = len(F), len(G) - 1
for i in range(n):
    assert not w.undetected("0" * i + "1" + "0" * (n - i - 1), G)
for L in range(1, r + 1):
    for start in range(n - L + 1):
        for mid in itertools.product("01", repeat=max(0, L - 2)):
            body = "1" + "".join(mid) + "1" if L >= 2 else "1"
            Ew = "0" * start + body + "0" * (n - start - L)
            assert not w.undetected(Ew, G), Ew
assert G[-1] == "1"                                                        # shifting never makes a word divisible
for B in ("1", "11", "101", "111"):                                        # every burst body shorter than G
    for sh in range(6):
        assert not w.undetected("0" * (9 - len(B) - sh) + B + "0" * sh, G)
assert w.undetected(E, G) and len(E.strip("0")) == 5                        # the missed one is a burst of length 5

# the checksum analogue: a compensating error in the checksum field
W1, W2 = 0x4500, 0x1C46
CS = w.csum16([W1, W2])
assert CS == 0x9EB9 and w.csum_ok([W1, W2], CS)
assert not w.csum_ok([W1 ^ 1, W2], CS)                                     # one error: caught
assert (W1 & 1, CS & 1) == (0, 1) and w.csum_ok([W1 ^ 1, W2], CS ^ 1)      # plus the compensating error: passes

Q = BANK["22S-A-Q6"]
assert Q["correctId"] == "a"
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הקודם חישבנו שארית CRC. עכשיו נראה מה עושים איתה."),
    P("נבנה את המסגרת, נבדוק אותה אצל המקבל, ונבין אילו שגיאות CRC תופס ואילו חומקות."),
    P("ובסוף שאלה ממבחן, על אותו רעיון בדיוק אצל ה-checksum.", hold=0.4),
], stage='<div class="kicker">L06 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>CRC: בדיקת מסגרת ויכולות הזיהוי</h1>'
         '<p>לבנות את המסגרת הנשלחת, לבדוק מסגרת שהתקבלה, ולדעת אילו שגיאות CRC מזהה ואילו לא.</p>', layout="title")

send = Scene("send", "השולח והמקבל", [
    P("המחולל הוא $1101$, והנתונים $101011$. בחילוק, כמו שלמדנו, השארית יוצאת $110$.", do=show("f-d"),
      say="המחולל הוא אחת אחת אפס אחת, והנתונים אחת אפס אחת אפס אחת אחת. בחילוק, כמו שלמדנו, השארית יוצאת אחת אחת אפס."),
    P("השולח שולח את הנתונים, ומיד אחריהם את השארית. בלי האפסים שהוספנו לחישוב.", do=show("f-f", "s-1")),
    P("למה דווקא השארית? כי עכשיו המסגרת כולה מתחלקת במחולל **בלי שארית**.", do=show("s-2")),
    P("המקבל מחלק את **כל** המסגרת שהגיעה, כולל השארית, ולא מוסיף אפסים.", do=show("rv", "s-3")),
    P("שני XOR, דילוג על אפס מוביל אחד, ועוד שני XOR.",
      do=show(*[f"rv-{t}{k}" for k in range(len(RSTEPS)) for t in ("g", "x")]),
      say="שני אֶקְס אוֹר, דילוג על אפס מוביל אחד, ועוד שני אֶקְס אוֹר."),
    P("השארית היא אפס, אפס, אפס. אין שגיאה שזוהתה, והמסגרת מתקבלת.", do=show("rv-rem", "s-4")),
], stage=w.stack(w.row("f-d", "$D=101011$ &nbsp; $G=1101$ &nbsp; $R=110$", cls="ltr"),
                 w.row("f-f", "נשלח: " + w.mono(D) + " " + '<b class="lk-ok lk-mono">' + R + "</b>"),
                 RV, gap=18),
   panel=st.card("s-1", "ex", "נשלח: $D$ ואחריו $R$")
         + st.card("s-2", "rule", "🔑 המסגרת מתחלקת ב-$G$")
         + st.card("s-3", "rule", "🔑 המקבל מחלק את <b>כל</b> המסגרת")
         + st.card("s-4", "ex", "שארית 000: לא זוהתה שגיאה"))

err = Scene("err", "כשביט מתהפך", [
    P("עכשיו נניח שבדרך התהפך הביט השלישי.", do=show("e1", "e1-bad2")),
    P("המקבל מחלק שוב ב-$G$, והפעם השארית היא $110$. לא אפס: **זוהתה שגיאה**, והמסגרת נזרקת.",
      do=show("e1-cnt", "e-1"),
      say="המקבל מחלק שוב בגִ'י, והפעם השארית היא אחת אחת אפס. לא אפס: זוהתה שגיאה, והמסגרת נזרקת."),
    P("ו-CRC לא אומר **איזה** ביט התהפך. הוא מזהה בלבד, ולא מתקן.", do=show("e-t")),
    P("כדי להבין מה חומק, נכתוב את השגיאה כמילה: אחת בכל מקום שהתהפך.", do=show("e2")),
    P("המקבל מקבל את המסגרת, XOR מילת השגיאה. והמסגרת המקורית מתחלקת ב-$G$.",
      say="המקבל מקבל את המסגרת, אֶקְס אוֹר מילת השגיאה. והמסגרת המקורית מתחלקת בגִ'י."),
    P("לכן השארית תלויה **רק** במילת השגיאה. השגיאה חומקת בדיוק כשהיא עצמה מתחלקת ב-$G$.", do=show("e-3"),
      say="לכן השארית תלויה רק במילת השגיאה. השגיאה חומקת בדיוק כשהיא עצמה מתחלקת בגִ'י."),
    P("כאן מילת השגיאה היא XOR של שני עותקים מוזזים של $G$, ולכן היא מתחלקת בו. ארבעה ביטים התהפכו, והשארית אפס.",
      do=show("e3", "e3-cnt", "e-4"),
      say="כאן מילת השגיאה היא אֶקְס אוֹר של שני עותקים מוזזים של גִ'י, ולכן היא מתחלקת בו. ארבעה ביטים התהפכו, והשארית אפס."),
    P("המקבל בטוח שהכל תקין, והשגיאה **חמקה**.", hold=0.3),
], stage=w.stack(w.bits("e0", F, hidden=False, label="נשלח", split=6, size="sm"),
                 w.bits("e1", BADF, label="ביט 3", split=6, size="sm", count="שארית 110 ✗"),
                 w.bits("e2", E, label="שגיאה", split=6, size="sm"),
                 w.bits("e3", RECV, label="התקבל", split=6, size="sm", count="שארית 000 ✓?"), gap=30),
   panel=st.card("e-1", "ex", "שארית ≠ 0: שגיאה, נזרקת")
         + st.card("e-t", "trap", "⚠️ CRC מזהה, לא מתקן")
         + st.card("e-3", "rule", "🔑 חומקת ⟺ מילת השגיאה מתחלקת ב-$G$")
         + st.card("e-4", "trap", "⚠️ שארית 0 = לא <b>זוהתה</b> שגיאה"))
err.phrases[3].do += show(*[f"e2-bad{i}" for i, c in enumerate(E) if c == "1"])

cap = Scene("cap", "מה CRC תופס", [
    P("אז מה CRC תופס בוודאות? כל שגיאה בביט **בודד**. בדקנו את כל תשעת המקומות.", do=show("c-1")),
    P("ויותר מזה: כל שגיאת burst באורך עד $r$ ביטים. כאן $r$ שווה שלוש.", do=show("c-2"),
      say="ויותר מזה: כל שגיאת בֶּרְסְט באורך עד אָר ביטים. כאן אָר שווה שלוש."),
    P("burst הוא רצף שמתחיל באחת ונגמר באחת. בלי האפסים שסביבו, הוא קצר מ-$G$, ולכן לא מתחלק בו.",
      do=show("c-3"),
      say="בֶּרְסְט הוא רצף שמתחיל באחת ונגמר באחת. בלי האפסים שסביבו, הוא קצר מגִ'י, ולכן לא מתחלק בו."),
    P("והאפסים לא משנים את זה: הביט האחרון של $G$ הוא אחת, ולכן הזזה לא הופכת מילה למתחלקת ב-$G$.",
      say="והאפסים לא משנים את זה: הביט האחרון של גִ'י הוא אחת, ולכן הזזה לא הופכת מילה למתחלקת בגִ'י."),
    P("וה-burst שחמק לנו? אורכו חמש, יותר מ-$r$. ארוך מ-$r$ כבר יכול לחמוק.", do=show("c-4"),
      say="והבֶּרְסְט שחמק לנו? אורכו חמש, יותר מאָר. ארוך מאָר כבר יכול לחמוק."),
    P("והשורה התחתונה: שארית אפס פירושה ״לא זוהתה שגיאה״, ולא ״ודאי שאין שגיאה״.", do=show("c-5"), hold=0.4),
], stage=w.stack(w.table("c-tab", ["שגיאה", "CRC"], [
    ["ביט בודד", '<span class="lk-ok">תמיד מזוהה</span>'],
    ["burst עד $r=3$", '<span class="lk-ok">תמיד מזוהה</span>'],
    ["מילת שגיאה שמתחלקת ב-$G$", '<span class="lk-bad">חומקת</span>']], hidden=False, ids=["c-1", "c-2", "c-4"]),
    gap=20),
   panel=st.card("c-3", "ex", "burst: רצף מאחת עד אחת")
         + st.card("c-5", "trap", "⚠️ שארית 0 ≠ ודאי תקין"))

ck_rows = [["מקורי", w.mono("4500"), w.mono("9EB9"), '<span class="lk-ok">תקין</span>'],
           ["שגיאה אחת", w.mono("4501"), w.mono("9EB9"), '<span class="lk-ok">זוהתה</span>'],
           ["ועוד שגיאה מפצה", w.mono("4501"), w.mono("9EB8"), '<span class="lk-bad">חמקה</span>']]
exam = Scene("exam", "שאלה ממבחן", [
    P("ועכשיו שאלה ממבחן, על ה-checksum של UDP: איזה ניסוח הוא המדויק ביותר?", do=show("q-stem"),
      say="ועכשיו שאלה ממבחן, על הצ'קְסָאם של יוּ דִי פִּי: איזה ניסוח הוא המדויק ביותר?"),
    P("checksum עובד אחרת מ-CRC, הוא סכום של מילים. אבל העיקרון אותו עיקרון: הוא **מזהה**, ולא מתקן."),
    P("ולכן הניסוח שמדבר על **תיקון** החבילה נפסל מיד. חבילה פגומה נזרקת.", do=show("q-x-d", "q-n-d")),
    P("עכשיו: האם התאמה מוכיחה שההודעה תקינה? נבדוק בדוגמה אמיתית של שתי מילים ו-checksum.", do=show("ck")),
    P("ביט אחד בהודעה התהפך מאפס לאחת. הסכום השתנה, והמקבל **מזהה**.", do=show("ck-1")),
    P("אבל אם גם בשדה ה-checksum התהפך ביט מפצה, מאחת לאפס, הסכום חוזר בדיוק לערכו.", do=show("ck-2")),
    P("שתי שגיאות, והמקבל רואה התאמה מושלמת. לכן ״בטוח לחלוטין״ ו״תקינה באופן ודאי״ שגויים.",
      do=show("q-x-b", "q-n-b")),
    P("והטענה שה-header לא יכול להשתבש: גם הוא ביטים שעוברים בקו, וגם הוא יכול להתהפך.",
      do=show("q-x-c", "q-n-c"), say="והטענה שההֶדֶר לא יכול להשתבש: גם הוא ביטים שעוברים בקו, וגם הוא יכול להתהפך."),
    P("נשאר הניסוח שמדבר על גילוי שגיאות שאינו בטוח לגמרי, בגלל שגיאה מפצה. זו התשובה.",
      do=show("q-ok-a")),
    P("ובדיוק כמו ב-CRC: התאמה פירושה ״לא זוהתה שגיאה״, ולא ״אין שגיאה״.", hold=0.5),
], stage='<div class="lk-q"><div id="q-stem" class="qstem"><span class="qid">22S-A-Q6</span>בחר את הנוסח המדויק ביותר:</div>'
         + st.options("q", OPTS, notes={"b": "לא בטוח", "c": "גם header", "d": "לא מתקן"}) + "</div>",
   panel=w.table("ck", ["", "מילה", "checksum", "המקבל"], ck_rows, ids=[None, "ck-1", "ck-2"])
         + st.card("ck-r", "rule", "🔑 התאמה = לא <b>זוהתה</b> שגיאה"))
exam.phrases[-1].do += show("ck-r")

recap = Scene("recap", "סיכום", [
    P("לסיכום: השולח שולח את הנתונים ואחריהם השארית, והמסגרת מתחלקת במחולל.", do=show("r-1")),
    P("המקבל מחלק את כל המסגרת. שארית אפס: מקבלים. אחרת: זורקים.", do=show("r-2")),
    P("CRC תופס כל ביט בודד, וכל burst באורך עד $r$. חומקת רק שגיאה שמתחלקת ב-$G$.", do=show("r-3"),
      say="סִי אָר סִי תופס כל ביט בודד, וכל בֶּרְסְט באורך עד אָר. חומקת רק שגיאה שמתחלקת בגִ'י."),
    P("והוא מזהה ולא מתקן. שארית אפס: לא זוהתה שגיאה, וזה הכל. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.row("r-0", w.mono(D) + " " + '<b class="lk-ok lk-mono">' + R + "</b> &nbsp;÷&nbsp; "
                       + w.mono(G) + " &nbsp;=&nbsp; שארית " + w.mono("000"), hidden=False)),
   panel=st.card("r-1", "rule", "🔑 נשלח: $D$ ואחריו $R$")
         + st.card("r-2", "ex", "המקבל: שארית 0 מקבלים, אחרת זורקים")
         + st.card("r-3", "rule", "🔑 ביט בודד ו-burst עד $r$: תמיד מזוהים")
         + st.card("r-4", "trap", "⚠️ מזהה, לא מתקן. 0 ≠ ודאי תקין"))

VIDEO = Video("L06", "link", "CRC: בדיקת מסגרת ויכולות הזיהוי", [title, send, err, cap, exam, recap],
              bank={"22S-A-Q6": "a"})
