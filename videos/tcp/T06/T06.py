# -*- coding: utf-8 -*-
"""T06 · אירועי אובדן: Timeout מול 3 ACK כפולים — video script (build: tools/video/vid.py T06).

Source: courses/tcp/C06.js (lesson + goal: on a loss of a window W, ssthresh = floor(W/2); timeout -> cwnd 1 and Slow
Start; 3 duplicate ACKs: Reno cwnd = ssthresh and Congestion Avoidance, Tahoe cwnd 1; the +3 of Reno's fast
recovery is ignored, as in the course; window collapse).
Exam anchor: 25A-C-Q10 (when does TCP window collapse happen), key c; no guided quiz uses it.
Avoided on purpose: 25A-C-Q7 (when cwnd is reduced) is in the C08 boss and C06-Q6 is its twin; the C06 quiz numbers
(W = 24; ssthresh 8 with the loss at round 8, cwnd 12) and the lesson's examples (the same).
Here: W = 30 and W = 17 for the table, and ssthresh 6 with the loss after round 9 (cwnd 11) for the traces.
Every series comes from the checker's cwnd_series() (w_tcp.cwnd_trace re-runs the rule and asserts agreement).
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- numbers (verified)
W1 = 30
TAB = {"timeout": (W1 // 2, 1), "reno": (W1 // 2, W1 // 2), "tahoe": (W1 // 2, 1)}
assert TAB == {"timeout": (15, 1), "reno": (15, 15), "tahoe": (15, 1)}
# the same through the simulator: a window of 30 reached in CA, then each event
for ev, fl, want in (("timeout", "reno", 1), ("3dup", "reno", 15), ("3dup", "tahoe", 1)):
    cw, _, ssr = w.cwnd_trace(2, 31, {30: ev}, fl)
    assert cw[29] == 30 and cw[30] == want and ssr[30] == 15, (ev, fl, cw[29:], ssr[30])
assert 17 // 2 == 8

N = 15
CT, KT, ST = w.cwnd_trace(6, N, {9: "timeout"})
assert CT == [1, 2, 4, 6, 7, 8, 9, 10, 11, 1, 2, 4, 5, 6, 7] and ST[9] == 5
CR, KR, SR = w.cwnd_trace(6, N, {9: "3dup"}, "reno")
assert CR == [1, 2, 4, 6, 7, 8, 9, 10, 11, 5, 6, 7, 8, 9, 10] and SR[9] == 5
CTa, _, _ = w.cwnd_trace(6, N, {9: "3dup"}, "tahoe")
assert CTa == CT                                         # Tahoe treats 3 duplicates like a timeout
assert CT[12] == 5 and KT[12] == "ss" and KT[13] == "ca"   # after the timeout: 4 -> 5 is capped, then +1

CHT = w.cwnd_chart("ct", CT, KT, w=980, h=470, ymax=15, ths=[("a", 1, 9, 6, "above"), ("b", 10, 15, 5, "none")],
                   evs=[("t", 9, "timeout")])
CHR = w.cwnd_chart("cr", CR, KR, w=980, h=470, ymax=15, ths=[("a", 1, 9, 6, "above"), ("b", 10, 15, 5)],
                   evs=[("d", 9, "3 dup ACK")])

# exam 25A-C-Q10
Q = BANK["25A-C-Q10"]
assert Q["correctId"] == "c" and "Window Collapse" in Q["question"]
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נראה מה TCP עושה לחלון כשהוא מגלה אובדן."),
    P("נשווה timeout לשלושה ACK כפולים, ב-Tahoe וב-Reno, ונעקוב אחרי החלון סבב אחרי סבב.",
      say="נשווה טַיים אָאוּט לשלושה אַק כפולים, בטָאהוֹ וברִינוֹ, ונעקוב אחרי החלון סבב אחרי סבב."),
    P("ובסוף נפתור שאלה ממבחן על קריסת חלון.", hold=0.4),
], stage='<div class="kicker">T06 · TCP: ACK, חלון ובקרת עומס</div><h1>אירועי אובדן: Timeout מול 3 ACK כפולים</h1>'
         '<p>לחשב את ssthresh ואת cwnd אחרי timeout או אחרי שלושה ACK כפולים, ב-Tahoe וב-Reno.</p>', layout="title")

rule = Scene("rule", "שני אירועים", [
    P("TCP מגלה אובדן באחת משתי דרכים: timeout, או שלושה ACK כפולים.",
      say="טִי סִי פִּי מגלה אובדן באחת משתי דרכים: טַיים אָאוּט, או שלושה אַק כפולים."),
    P("בשני המקרים, הצעד הראשון זהה: הסף יורד לחצי מהחלון שהיה, מעוגל למטה.", do=show("u-1"),
      say="בשני המקרים, הצעד הראשון זהה: הסף יורד לחצי מהחלון שהיה, מעוגל למטה."),
    P("נניח שהחלון היה שלושים. אז $ssthresh$ החדש הוא חמש עשרה.", do=show("t"),
      say="נניח שהחלון היה שלושים. אז הסף החדש הוא חמש עשרה."),
    P("אחרי timeout החלון צונח לאחת, וחוזרים ל-Slow Start. כך גם ב-Tahoe וגם ב-Reno.", do=show("t-0"),
      say="אחרי טַיים אָאוּט החלון צונח לאחת, וחוזרים לסְלוֹאוּ סְטַארְט. כך גם בטָאהוֹ וגם ברִינוֹ."),
    P("אחרי שלושה ACK כפולים ב-Reno, החלון יורד רק עד הסף, לחמש עשרה, וממשיך ב-Congestion Avoidance.",
      do=show("t-1"),
      say="אחרי שלושה אַק כפולים ברִינוֹ, החלון יורד רק עד הסף, לחמש עשרה, וממשיך בקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס."),
    P("ו-Tahoe, הגרסה הישנה, לא מבחין בין האירועים: גם על שלושה ACK כפולים הוא חוזר לאחת.", do=show("t-2"),
      say="וטָאהוֹ, הגרסה הישנה, לא מבחין בין האירועים: גם על שלושה אַק כפולים הוא חוזר לאחת."),
    P("למה ההבדל? שלושה ACK כפולים אומרים שקטעים עדיין מגיעים: אות **קל**.", do=show("u-c2"),
      say="למה ההבדל? שלושה אַק כפולים אומרים שקטעים עדיין מגיעים: אות קל."),
    P("timeout אומר שלא הגיע כלום: אות **חמור**, ולכן מתחילים מחדש, מחלון של אחד.",
      say="טַיים אָאוּט אומר שלא הגיע כלום: אות חמור, ולכן מתחילים מחדש, מחלון של אחד."),
    P("ושימו לב לעיגול: אם החלון היה שבע עשרה, הסף החדש הוא שמונה, לא שמונה וחצי.", do=show("u-c3"), hold=0.3),
], stage=w.stack(w.big("u-1", r"ssthresh = \lfloor W/2 \rfloor", cls="sm"),
                 w.table("t", ["אירוע", "ssthresh", "cwnd"], [
                     [w.ltr("timeout"), "15", "1"],
                     [w.ltr("3 dup ACK, Reno"), "15", "15"],
                     [w.ltr("3 dup ACK, Tahoe"), "15", "1"]], ids=["t-0", "t-1", "t-2"]),
                 w.row("u-0", "$W = 30$", hidden=False), gap=34),
   panel=st.card("u-c2", "ex", "3 כפולים: אות קל. " + w.ltr("timeout") + ": אות חמור")
         + st.card("u-c3", "trap", "⚠️ מעגלים למטה: $W=17$ נותן $8$"))

tmo = Scene("trace-t", "מעקב: timeout", [
    P("עכשיו מעקב מלא. $ssthresh=6$, וחלון של אחת בסבב הראשון.", do=show("ct", "ct-th-a"),
      say="עכשיו מעקב מלא. אֶס אֶס טְרֶשׁ שש, וחלון של אחת בסבב הראשון."),
    P("אחת, שתיים, ארבע. ההכפלה הבאה עוברת את שש, אז עוצרים על שש.", do=show(*w.reveal("ct", 1, 4))),
    P("ומשם ועוד אחד, עד אחת עשרה בסבב התשיעי.", do=show(*w.reveal("ct", 5, 9))),
    P("ובסבב התשיעי מתרחש timeout. הסף החדש: חצי מאחת עשרה, מעוגל למטה. חמש.", do=show("ct-ev-t", "ct-th-b", "k-1"),
      say="ובסבב התשיעי מתרחש טַיים אָאוּט. הסף החדש: חצי מאחת עשרה, מעוגל למטה. חמש."),
    P("והחלון צונח לאחת. שוב Slow Start: אחת, שתיים, ארבע.", do=show(*w.reveal("ct", 10, 12)),
      say="והחלון צונח לאחת. שוב סְלוֹאוּ סְטַארְט: אחת, שתיים, ארבע."),
    P("ההכפלה הבאה הייתה שמונה, אבל הסף עכשיו חמש. אז עוצרים על חמש.", do=show(*w.reveal("ct", 13, 13), "k-2")),
    P("ומשם ליניארי: שש, שבע.", do=show(*w.reveal("ct", 14, 15)), hold=0.3),
], stage=CHT,
   panel=st.card("k-1", "rule", "🔑 $\\lfloor 11/2 \\rfloor = 5$, ו-$cwnd = 1$")
         + st.card("k-2", "trap", "⚠️ ההכפלה נעצרת על הסף <b>החדש</b>: 5"))

reno = Scene("trace-r", "מעקב: Reno", [
    P("אותו חיבור, אבל בסבב התשיעי מגיעים שלושה ACK כפולים, ב-Reno.",
      do=show("cr", "cr-th-a", *w.reveal("cr", 1, 9)),
      say="אותו חיבור, אבל בסבב התשיעי מגיעים שלושה אַק כפולים, ברִינוֹ."),
    P("הסף יורד בדיוק כמו קודם, לחמש.", do=show("cr-ev-d", "cr-th-b")),
    P("אבל החלון יורד רק אל הסף, לחמש, ולא לאחת.", do=show(*w.reveal("cr", 10, 10), "n-1")),
    P("ומשם ממשיכים ישר ב-Congestion Avoidance: שש, שבע, שמונה, תשע, עשר.", do=show(*w.reveal("cr", 11, 15)),
      say="ומשם ממשיכים ישר בקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס: שש, שבע, שמונה, תשע, עשר."),
    P("השוו את הסבב החמישה עשר: עשר ב-Reno, מול שבע אחרי timeout.", do=show("n-2"),
      say="השוו את הסבב החמישה עשר: עשר ברִינוֹ, מול שבע אחרי טַיים אָאוּט."),
    P("וב-Tahoe? שלושה ACK כפולים מתנהגים כמו timeout, והסדרה זהה לגרף הקודם.", do=show("n-3"),
      say="ובטָאהוֹ? שלושה אַק כפולים מתנהגים כמו טַיים אָאוּט, והסדרה זהה לגרף הקודם."),
    P("עוד הערה: ב-Reno האמיתי יש תוספת זמנית של שלושה סגמנטים. בקורס מתעלמים ממנה.", do=show("n-4"), hold=0.3,
      say="עוד הערה: ברִינוֹ האמיתי יש תוספת זמנית של שלושה סגמנטים. בקורס מתעלמים ממנה."),
], stage=CHR,
   panel=st.card("n-1", "rule", "🔑 " + w.ltr("Reno") + ", 3 כפולים: $cwnd = ssthresh = 5$")
         + st.card("n-2", "ex", "סבב 15: " + w.ltr("Reno") + " 10, " + w.ltr("timeout") + " 7")
         + st.card("n-3", "ex", w.ltr("Tahoe") + ": 3 כפולים = " + w.ltr("timeout"))
         + st.card("n-4", "trap", "⚠️ את ה-+3 של " + w.ltr("Reno") + " לא סופרים"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: באיזה מצב תתרחש **קריסת חלון** TCP?", say="שאלה ממבחן: באיזה מצב תתרחש קריסת חלון טִי סִי פִּי?"),
    P("קריסת חלון היא צניחה חדה לאחת. היא קורית כשיש אובדן חמור: שגיאות מרובות או עומס גבוה.", do=show("x-1", "q-ok-c")),
    P("אלה מביאים ל-timeout, וב-Tahoe גם שלושה ACK כפולים מפילים את החלון לאחת.", do=show("x-0"),
      say="אלה מביאים לטַיים אָאוּט, ובטָאהוֹ גם שלושה אַק כפולים מפילים את החלון לאחת."),
    P("רוחב פס נמוך לבדו מגביל את הקצב, אבל לא מפיל את החלון לאחת בבת אחת.", do=show("q-x-a", "q-n-a")),
    P("ברשת ריקה אין אובדן בכלל. החלון שם רק גדל, וזה ההפך מקריסה.", do=show("q-x-b", "q-n-b")),
    P("ופרוטוקול גיבוי של נתב אינו אות ש-TCP רואה, ולכן הוא לא משפיע על החלון.", do=show("q-x-d", "q-n-d"),
      hold=0.5, say="ופרוטוקול גיבוי של נתב אינו אות שטִי סִי פִּי רואה, ולכן הוא לא משפיע על החלון."),
], stage=w.stack(st.card("x-1", "rule", "🔑 קריסת חלון: צניחה חדה ל-1, באובדן חמור"),
                 st.card("x-0", "ex", w.ltr("timeout") + " (וב-" + w.ltr("Tahoe") + " גם 3 כפולים) ← $cwnd = 1$"), gap=30),
   panel=f'<div class="qstem"><span class="qid">{Q["id"]}</span>באיזה מצב תתרחש קריסת חלון '
         + w.ltr("TCP (Window Collapse)") + '?</div>'
         + st.options("q", OPTS, notes={"a": "מגביל, לא מפיל", "b": "רק גדל", "d": "לא קשור"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: בכל אובדן, הסף יורד לחצי מהחלון, מעוגל למטה.", do=show("r-1")),
    P("timeout: החלון לאחת, ו-Slow Start עד הסף החדש.", do=show("r-2"),
      say="טַיים אָאוּט: החלון לאחת, וסְלוֹאוּ סְטַארְט עד הסף החדש."),
    P("שלושה ACK כפולים ב-Reno: החלון שווה לסף, וממשיכים ליניארית.", do=show("r-3"),
      say="שלושה אַק כפולים ברִינוֹ: החלון שווה לסף, וממשיכים ליניארית."),
    P("וב-Tahoe, כל אובדן מחזיר לאחת. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6,
      say="ובטָאהוֹ, כל אובדן מחזיר לאחת. נתראה ברמה הבאה."),
], stage=w.stack(w.big("r-0", r"ssthresh = \lfloor W/2 \rfloor", hidden=False)),
   panel=st.card("r-1", "rule", "🔑 $ssthresh = \\lfloor W/2 \\rfloor$")
         + st.card("r-2", "rule", "🔑 " + w.ltr("timeout") + ": $cwnd = 1$")
         + st.card("r-3", "rule", "🔑 " + w.ltr("Reno") + ", 3 כפולים: $cwnd = ssthresh$")
         + st.card("r-4", "trap", "⚠️ " + w.ltr("Tahoe") + ": תמיד $cwnd = 1$"))

VIDEO = Video("T06", "tcp", "אירועי אובדן: Timeout מול 3 ACK כפולים", [title, rule, tmo, reno, exam, recap],
              bank={"25A-C-Q10": "c"})
