# -*- coding: utf-8 -*-
"""T05 · Slow Start ו-Congestion Avoidance — video script (build: tools/video/vid.py T05).

Source: courses/tcp/C05.js (lesson + goal: cwnd per round (RTT) for a given ssthresh; Slow Start doubles but stops
at ssthresh; from cwnd >= ssthresh +1 per round; which phase a round is in).
Exam part: an original question "בסגנון מבחן" (bank={}): the free bank items of this level are twins of quiz or
boss questions (25A-C-Q4 = C05-Q5 "purpose of Slow Start"; SAMP-2-Q14 = the boss SAMP-1-Q14; 26A-A-Q6 is in the
boss), so none of them is used.
Avoided on purpose: the C05 quiz numbers (ssthresh 16 round 8, ssthresh 12 round 7, no threshold rounds 5 and 10,
cwnd 20 over 16) and the lesson's series (ssthresh 16 and 12). Here: ssthresh 20 (cap at a non-power of two),
ssthresh 8 (cwnd reaches it exactly), and the exam with ssthresh 10, round 9.
Every series comes from the checker's cwnd_series() (w_tcp.cwnd_trace re-runs the rule and asserts agreement).
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- numbers (verified)
C1, K1, _ = w.cwnd_trace(20, 9)
assert C1 == [1, 2, 4, 8, 16, 20, 21, 22, 23]
assert K1[5] == "ss" and K1[6] == "ca"                 # 16 -> 20 is the capped Slow-Start step, then +1
C2, K2, _ = w.cwnd_trace(8, 7)
assert C2 == [1, 2, 4, 8, 9, 10, 11] and K2[3] == "ss" and K2[4] == "ca"
C0, _, _ = w.cwnd_trace(10**9, 7)
assert C0 == [2 ** (r - 1) for r in range(1, 8)] and C0[6] == 64     # no threshold: round r is 2^(r-1)

# exam-style: ssthresh = 10, cwnd = 1 in round 1, no loss. cwnd in round 9?
C3, K3, _ = w.cwnd_trace(10, 9)
assert C3 == [1, 2, 4, 8, 10, 11, 12, 13, 14]
ANS = C3[8]
NOCAP = [1, 2, 4, 8, 16, 17, 18, 19, 20]              # doubling 8 -> 16 past the threshold, then +1
NOTH, _, _ = w.cwnd_trace(10**9, 9)
VAL = {"a": ANS, "b": NOCAP[8], "c": NOTH[8], "d": C3[7]}
assert VAL == {"a": 14, "b": 20, "c": 256, "d": 13}
assert [k for k, v in VAL.items() if v == ANS] == ["a"]
OPTS = [(k, str(v)) for k, v in VAL.items()]

CH1 = w.cwnd_chart("c1", C1, K1, w=980, h=520, ymax=25, ths=[("a", 1, 9, 20)], bands=[("ss", 1, 6)])
CH2 = w.cwnd_chart("c2", C2, K2, w=980, h=420, ymax=15, ths=[("a", 1, 7, 8)])
CH3 = w.cwnd_chart("c3", C3, K3, w=980, h=460, ymax=15, ths=[("a", 1, 9, 10)])

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נעקוב אחרי חלון העומס, $cwnd$, סבב אחרי סבב.", say="בסרטון הזה נעקוב אחרי חלון העומס, סבב אחרי סבב."),
    P("נכיר את שני השלבים, Slow Start ו-Congestion Avoidance, ואת הסף שמפריד ביניהם."),
    P("ובסוף נפתור שאלה בסגנון מבחן: מה החלון בסבב התשיעי.", hold=0.4),
], stage='<div class="kicker">T05 · TCP: ACK, חלון ובקרת עומס</div><h1>Slow Start ו-Congestion Avoidance</h1>'
         '<p>לחשב את cwnd בכל סבב (RTT) כש-ssthresh נתון, ולדעת באיזה שלב נמצאים.</p>', layout="title")

idea = Scene("idea", "שני שלבים", [
    P("$cwnd$ הוא מספר הסגמנטים שמותר להחזיק באוויר. מודדים אותו ביחידות של סגמנט אחד.",
      say="חלון העומס הוא מספר הסגמנטים שמותר להחזיק באוויר. מודדים אותו ביחידות של סגמנט אחד."),
    P("ובודקים אותו פעם בסבב: בכל RTT שולחים חלון שלם, ומחכים לאישורים.", do=show("i-0"),
      say="ובודקים אותו פעם בסבב: בכל אַר טִי טִי שולחים חלון שלם, ומחכים לאישורים."),
    P("השלב הראשון הוא **Slow Start**. מתחילים מ-$cwnd=1$, והחלון **מוכפל** בכל סבב.", do=show("i-1"),
      say="השלב הראשון הוא סְלוֹאוּ סְטַארְט. מתחילים מחלון של אחד, והחלון מוכפל בכל סבב."),
    P("אחת, שתיים, ארבע, שמונה, שש עשרה. זה גידול מעריכי, מהיר מאוד.", do=show("i-2")),
    P("השלב השני הוא **Congestion Avoidance**. בו החלון גדל רק **באחד** בכל סבב: גידול ליניארי.", do=show("i-3"),
      say="השלב השני הוא קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס. בו החלון גדל רק באחד בכל סבב: גידול ליניארי."),
    P("ומה קובע מתי עוברים? הסף $ssthresh$. מתחתיו מכפילים, וממנו והלאה מוסיפים אחד.", do=show("i-c1"),
      say="ומה קובע מתי עוברים? הסף, אֶס אֶס טְרֶשׁ. מתחתיו מכפילים, וממנו והלאה מוסיפים אחד."),
    P("שימו לב לשם: Slow Start הוא דווקא השלב **המהיר**. האיטי הוא ההוספה של אחד.", do=show("i-c2"), hold=0.3,
      say="שימו לב לשם: סְלוֹאוּ סְטַארְט הוא דווקא השלב המהיר. האיטי הוא ההוספה של אחד."),
    P("האיטי בשם מתייחס רק לנקודת ההתחלה: חלון של סגמנט אחד בלבד."),
], stage=w.stack(w.row("i-0", "סבב = " + w.ltr("RTT") + " אחד"),
                 w.table("i-1", ["שלב", "מתי", "בכל סבב"], [
                     ["Slow Start", "$cwnd \\lt ssthresh$", "כפול 2"],
                     ["Congestion Avoidance", "$cwnd \\ge ssthresh$", "ועוד 1"]], ids=["i-2", "i-3"]), gap=40),
   panel=st.card("i-c1", "rule", "🔑 הסף $ssthresh$ מפריד בין השלבים")
         + st.card("i-c2", "trap", "⚠️ Slow Start = הגידול <b>המהיר</b>"))

ss = Scene("cap", "עוצרים על הסף", [
    P("נריץ דוגמה: $ssthresh=20$, ו-$cwnd=1$ בסבב הראשון.", do=show("c1", "c1-th-a"),
      say="נריץ דוגמה: אֶס אֶס טְרֶשׁ עשרים, וחלון של אחד בסבב הראשון."),
    P("סבבים אחת עד חמש: אחת, שתיים, ארבע, שמונה, שש עשרה. כל אלה מתחת לסף, אז מכפילים.", do=show(*w.reveal("c1", 1, 5))),
    P("עכשיו ההכפלה הייתה נותנת שלושים ושתיים, וזה עובר את הסף.", do=show("s-c1")),
    P("לכן עוצרים **בדיוק על הסף**: בסבב השישי החלון הוא עשרים.", do=show(*w.reveal("c1", 6, 6), "c1-band-ss", "s-c2")),
    P("מכאן החלון כבר שווה לסף, אז עוברים ל-Congestion Avoidance: עשרים ואחת, עשרים ושתיים, עשרים ושלוש.",
      do=show(*w.reveal("c1", 7, 9), "s-c3"),
      say="מכאן החלון כבר שווה לסף, אז עוברים לקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס: עשרים ואחת, עשרים ושתיים, עשרים ושלוש."),
    P("רואים את זה בגרף: עד הסף העקומה מטפסת חד, ואחריו היא קו ישר שעולה לאט.", hold=0.3),
], stage=CH1,
   panel=st.card("s-c1", "ex", "$16 \\cdot 2 = 32 \\gt 20$")
         + st.card("s-c2", "rule", "🔑 ההכפלה נעצרת <b>על</b> $ssthresh$")
         + st.card("s-c3", "ex", "$20, 21, 22, 23$: ועוד 1 בכל סבב"))

edge = Scene("edge", "בדיוק על הסף", [
    P("ומה אם ההכפלה נוחתת בדיוק על הסף? נניח $ssthresh=8$.", do=show("c2", "c2-th-a"),
      say="ומה אם ההכפלה נוחתת בדיוק על הסף? נניח אֶס אֶס טְרֶשׁ שמונה."),
    P("אחת, שתיים, ארבע, שמונה. בסבב הרביעי החלון שווה לסף.", do=show(*w.reveal("c2", 1, 4))),
    P("והתנאי ל-Congestion Avoidance הוא גדול **או שווה**. אז מהסבב הבא מוסיפים אחד: תשע, עשר, אחת עשרה.",
      do=show(*w.reveal("c2", 5, 7), "e-c1"),
      say="והתנאי לקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס הוא גדול או שווה. אז מהסבב הבא מוסיפים אחד: תשע, עשר, אחת עשרה."),
    P("ובלי סף בכלל? אז ממשיכים להכפיל. בסבב $r$ החלון הוא שתיים בחזקת, בסוגריים, $r$ פחות אחת.", do=show("e-1"),
      say="ובלי סף בכלל? אז ממשיכים להכפיל. בסבב אָר, החלון הוא שתיים בחזקת, בסוגריים, אָר פחות אחת."),
    P("למשל בסבב השביעי: שתיים בחזקת שש, שישים וארבע. החזקה קטנה באחד, כי הסבב הראשון מתחיל באחד.", do=show("e-2", "e-c2"),
      hold=0.3),
], stage=w.stack(CH2, w.big("e-1", r"cwnd_r = 2^{\,r-1}", cls="sm"), w.big("e-2", r"cwnd_7 = 2^{6} = 64", cls="xs"), gap=14),
   panel=st.card("e-c1", "rule", "🔑 $cwnd \\ge ssthresh$: כבר ועוד 1")
         + st.card("e-c2", "trap", "⚠️ סבב 1 הוא $2^0 = 1$: החזקה היא $r-1$"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: $ssthresh=10$, ו-$cwnd=1$ בסבב הראשון. אין אובדן. מהו $cwnd$ בסבב התשיעי?",
      say="שאלה בסגנון מבחן: אֶס אֶס טְרֶשׁ עשר, וחלון של אחד בסבב הראשון. אין אובדן. מהו חלון העומס בסבב התשיעי?"),
    P("מכפילים: אחת, שתיים, ארבע, שמונה.", do=show("c3", "c3-th-a", *w.reveal("c3", 1, 4))),
    P("ההכפלה הבאה, שש עשרה, עוברת את עשר. אז בסבב החמישי עוצרים על עשר.", do=show(*w.reveal("c3", 5, 5))),
    P("ומשם ועוד אחד: אחת עשרה, שתים עשרה, שלוש עשרה, ובסבב התשיעי ארבע עשרה.",
      do=show(*w.reveal("c3", 6, 9), "q-ok-a")),
    P("עשרים מתקבל אם מכפילים משמונה לשש עשרה, ומתעלמים מהסף.", do=show("q-x-b", "q-n-b")),
    P("מאתיים חמישים ושש מתקבל אם מכפילים כל הזמן, בלי שום סף.", do=show("q-x-c", "q-n-c")),
    P("ושלוש עשרה הוא הערך של הסבב **השמיני**: טעות בספירה. בסבב הראשון החלון הוא אחת.",
      do=show("q-x-d", "q-n-d"), hold=0.5),
], stage=CH3,
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>$ssthresh=10$, ו-$cwnd=1$ בסבב 1, בלי אובדן. '
         'מהו $cwnd$ בסבב 9?</div>'
         + st.options("q", OPTS, notes={"b": "בלי עצירה בסף", "c": "בלי סף", "d": "סבב 8"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: Slow Start מתחיל מאחת ומכפיל בכל סבב, כל עוד החלון מתחת לסף.", do=show("r-1"),
      say="לסיכום: סְלוֹאוּ סְטַארְט מתחיל מאחת ומכפיל בכל סבב, כל עוד החלון מתחת לסף."),
    P("ההכפלה לא עוברת את הסף: היא נעצרת עליו.", do=show("r-2")),
    P("מהסף והלאה, Congestion Avoidance: ועוד אחד בכל סבב.", do=show("r-3"),
      say="מהסף והלאה, קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס: ועוד אחד בכל סבב."),
    P("וסופרים סבבים מאחת: בסבב הראשון החלון הוא אחת. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6),
], stage=w.stack(w.big("r-0", r"1,\ 2,\ 4,\ 8,\ 10,\ 11,\ 12,\ \dots", hidden=False, cls="sm")),
   panel=st.card("r-1", "rule", "🔑 $cwnd \\lt ssthresh$: כפול 2")
         + st.card("r-2", "rule", "🔑 עוצרים <b>על</b> הסף")
         + st.card("r-3", "rule", "🔑 $cwnd \\ge ssthresh$: ועוד 1")
         + st.card("r-4", "trap", "⚠️ סבב 1: $cwnd = 1$"))

VIDEO = Video("T05", "tcp", "Slow Start ו-Congestion Avoidance", [title, idea, ss, edge, exam, recap], bank={})
