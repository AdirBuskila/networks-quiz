# -*- coding: utf-8 -*-
"""T07 · קריאת גרף cwnd — video script (build: tools/video/vid.py T07).

Source: courses/tcp/C07.js (lesson + goal: read a cwnd series or graph: doubling = Slow Start (from round 1 and after
every drop to 1), +1 = Congestion Avoidance, the entry into CA is the slope change (the last doubling point), a drop
to half = 3 duplicate ACKs (Reno), a drop to 1 = timeout).
Exam part: an original graph "בסגנון מבחן" (bank={}): the graph questions of the bank are in the C08 boss
(SAMP-1-Q14, 26A-A-Q6) or a twin of one (SAMP-2-Q14 = SAMP-1-Q14).
Avoided on purpose: the C07 quiz/lesson series (ssthresh 16, 3dup at 9, timeout at 13: 1,2,4,8,16,17,…), its
answers ([1,5] and [14,17]; 5 and 17), and the boss graphs' answers (SAMP-1-Q14 [1,6],[23,26]; 26A-A-Q6 4,29,35).
Here: ssthresh 40, 3 duplicate ACKs after round 8 (cwnd 41), timeout after round 14 (cwnd 25), 21 rounds:
Slow Start [1,7] and [15,19], CA entries 7 and 19.
The series is the checker's cwnd_series(); the Slow-Start intervals and the CA entries are computed by
w_tcp.ss_intervals / ca_entries (the checker's C07 reading) and asserted.
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- numbers (verified)
N = 21
CW, KD, SS = w.cwnd_trace(40, N, {8: "3dup", 14: "timeout"}, "reno")
assert CW == [1, 2, 4, 8, 16, 32, 40, 41, 20, 21, 22, 23, 24, 25, 1, 2, 4, 8, 12, 13, 14]
assert SS[8] == 20 and SS[14] == 12                      # floor(41/2), floor(25/2)
INTS = w.ss_intervals(KD)
ENTRIES = w.ca_entries(CW, KD)
assert INTS == [(1, 7), (15, 19)] and ENTRIES == [7, 19]
assert CW[8] == CW[7] // 2                               # 41 -> 20: a halving (3 duplicate ACKs)
assert CW[14] == 1                                       # 25 -> 1: a timeout
# no interval / entry shared with the C07 quiz ([1,5], [14,17]; 5, 17), SAMP-1-Q14 ([1,6], [23,26]) or 26A-A-Q6 (4, 29, 35)
assert not set(INTS) & {(1, 5), (14, 17), (1, 6), (23, 26)} and not set(ENTRIES) & {5, 17, 4, 29, 35}
# the checker's own reading of its C07 series gives its own answers (same functions, other data)
c7, k7, _ = w.cwnd_trace(16, 19, {9: "3dup", 13: "timeout"})
assert w.ss_intervals(k7) == [(1, 5), (14, 17)] and w.ca_entries(c7, k7) == [5, 17]

# exam-style: at which rounds does the protocol enter Congestion Avoidance?
VAL = {"a": [7, 19], "b": [8, 14], "c": [7, 9, 19], "d": [1, 15]}
assert VAL["b"] == [r for r in range(1, N) if CW[r] < CW[r - 1]]          # the peaks before a drop
assert VAL["c"] == sorted(ENTRIES + [9])                                 # + the round after the halving
assert VAL["d"] == [a for a, _ in INTS]                                   # where Slow Start starts
assert [k for k, v in VAL.items() if v == ENTRIES] == ["a"]
OPTS = [(k, w.ltr(", ".join(map(str, v)))) for k, v in VAL.items()]

CH = w.cwnd_chart("g", CW, KD, w=1000, h=540, ymax=45,
                  ths=[("a", 1, 8, 40, "above-left"), ("b", 9, 14, 20), ("c", 15, 21, 12, "none")],
                  bands=[("s1", 1, 7), ("s2", 15, 19)],
                  evs=[("d", 8, "÷2"), ("t", 14, "→ 1")])
CHX = w.cwnd_chart("x", CW, KD, w=1000, h=540, ymax=45, values=True)

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נלמד לקרוא גרף של חלון העומס."),
    P("נזהה איפה Slow Start, איפה Congestion Avoidance, ואיזה אובדן גרם לכל צניחה.",
      say="נזהה איפה סְלוֹאוּ סְטַארְט, איפה קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס, ואיזה אובדן גרם לכל צניחה."),
    P("ובסוף נפתור שאלה בסגנון מבחן, על גרף שלם.", hold=0.4),
], stage='<div class="kicker">T07 · TCP: ACK, חלון ובקרת עומס</div><h1>קריאת גרף cwnd</h1>'
         '<p>לקרוא סדרת cwnd או גרף: איפה Slow Start, איפה Congestion Avoidance, ואיזה אובדן קרה.</p>', layout="title")

rules = Scene("rules", "ארבעה כללים", [
    P("בגרף, הציר האופקי הוא הסבב, כלומר ה-RTT, והאנכי הוא גודל החלון. כל סבב הוא נקודה אחת.",
      say="בגרף, הציר האופקי הוא הסבב, כלומר האַר טִי טִי, והאנכי הוא גודל החלון. כל סבב הוא נקודה אחת."),
    P("כלל ראשון: קטע שבו הערך **מוכפל** בכל סבב הוא Slow Start. הוא מתחיל בסבב הראשון, ואחרי כל צניחה לאחת.",
      do=show("q-1"),
      say="כלל ראשון: קטע שבו הערך מוכפל בכל סבב הוא סְלוֹאוּ סְטַארְט. הוא מתחיל בסבב הראשון, ואחרי כל צניחה לאחת."),
    P("כלל שני: קו ישר שעולה באחד בכל סבב הוא Congestion Avoidance.", do=show("q-2"),
      say="כלל שני: קו ישר שעולה באחד בכל סבב הוא קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס."),
    P("ונקודת הכניסה אליו היא נקודת **שינוי השיפוע**: הנקודה האחרונה של ההכפלה.", do=show("q-3")),
    P("כלל שלישי: צניחה **לחצי** היא שלושה ACK כפולים, ב-Reno. אחריה ממשיכים ליניארית.", do=show("q-4"),
      say="כלל שלישי: צניחה לחצי היא שלושה אַק כפולים, ברִינוֹ. אחריה ממשיכים ליניארית."),
    P("וכלל רביעי: צניחה **לאחת** היא timeout, ואחריה שוב Slow Start.", do=show("q-5"), hold=0.3,
      say="וכלל רביעי: צניחה לאחת היא טַיים אָאוּט, ואחריה שוב סְלוֹאוּ סְטַארְט."),
], stage=w.table("q", ["בגרף", "המשמעות"], [
    ["הכפלה", w.ltr("Slow Start")], ["עלייה ב-1", w.ltr("Congestion Avoidance")],
    ["שינוי שיפוע", "כניסה ל-" + w.ltr("CA")], ["צניחה לחצי", w.ltr("3 dup ACK (Reno)")],
    ["צניחה ל-1", w.ltr("timeout")]], hidden=False, ids=["q-1", "q-2", "q-3", "q-4", "q-5"]),
   panel=st.card("q-c1", "rule", "🔑 קוראים <b>שיפוע</b> וסוג צניחה, לא שיאים").replace(" h\"", "\""))

read = Scene("read", "קוראים גרף", [
    P("הנה גרף של עשרים ואחד סבבים. נקרא אותו משמאל לימין.", do=show("x")),
    P("סבבים אחת עד שבע: אחת, שתיים, ארבע, שמונה, שש עשרה, שלושים ושתיים, ואז ארבעים.",
      do=show(*w.reveal("x", 1, 7))),
    P("עד שלושים ושתיים זו הכפלה. הקפיצה לארבעים קטנה מהכפלה: ההכפלה נעצרה על הסף.", do=show("r-c1")),
    P("בסבב שמונה: ארבעים ואחת. ועוד אחד, כלומר Congestion Avoidance.",
      do=show(*w.reveal("x", 8, 8)),
      say="בסבב שמונה: ארבעים ואחת. ועוד אחד, כלומר קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס."),
    P("אחרי סבב שמונה, מארבעים ואחת לעשרים. זה חצי, מעוגל למטה: שלושה ACK כפולים.",
      do=show(*w.reveal("x", 9, 9), "r-c2"),
      say="אחרי סבב שמונה, מארבעים ואחת לעשרים. זה חצי, מעוגל למטה: שלושה אַק כפולים."),
    P("ומשם ממשיכים ליניארית: עשרים ואחת, ועד עשרים וחמש בסבב ארבע עשרה.", do=show(*w.reveal("x", 10, 14))),
    P("אחרי סבב ארבע עשרה, מעשרים וחמש לאחת: timeout. הסף החדש הוא שתים עשרה.",
      do=show(*w.reveal("x", 15, 15), "r-c3"),
      say="אחרי סבב ארבע עשרה, מעשרים וחמש לאחת: טַיים אָאוּט. הסף החדש הוא שתים עשרה."),
    P("ושוב הכפלה: אחת, שתיים, ארבע, שמונה. ההכפלה הבאה עוברת את שתים עשרה, אז עוצרים עליו.",
      do=show(*w.reveal("x", 16, 19))),
    P("ומשם שלוש עשרה וארבע עשרה.", do=show(*w.reveal("x", 20, 21)), hold=0.3),
], stage=CHX,
   panel=st.card("r-c1", "ex", r"$32 \to 40$: פחות מהכפלה, נעצר על הסף")
         + st.card("r-c2", "rule", r"🔑 $41 \to 20$: חצי ← 3 " + w.ltr("dup ACK"))
         + st.card("r-c3", "rule", r"🔑 $25 \to 1$: " + w.ltr("timeout") + ", ו-$ssthresh = 12$"))

ints = Scene("intervals", "קטעי Slow Start", [
    P("שאלה נפוצה: באילו קטעי סבבים פועל Slow Start?", do=show("g", *w.reveal("g", 1, 21)),
      say="שאלה נפוצה: באילו קטעי סבבים פועל סְלוֹאוּ סְטַארְט?"),
    P("הקטע הראשון מתחיל בסבב אחת, ונמשך עד שההכפלה נגמרת, בסבב שבע.", do=show("g-band-s1", "g-th-a", "i-1")),
    P("אחרי שלושה ACK כפולים **אין** Slow Start: החלון ממשיך ליניארית.", do=show("g-ev-d", "g-th-b", "i-2"),
      say="אחרי שלושה אַק כפולים אין סְלוֹאוּ סְטַארְט: החלון ממשיך ליניארית."),
    P("הקטע השני מתחיל אחרי ה-timeout, בסבב חמש עשרה, ונגמר בסבב תשע עשרה, על הסף שתים עשרה.",
      do=show("g-ev-t", "g-band-s2", "g-th-c", "i-3"),
      say="הקטע השני מתחיל אחרי הטַיים אָאוּט, בסבב חמש עשרה, ונגמר בסבב תשע עשרה, על הסף שתים עשרה."),
    P("אז התשובה: מאחת עד שבע, ומחמש עשרה עד תשע עשרה.", do=show("i-4")),
    P("ושימו לב: גם סבב שבע וגם סבב תשע עשרה נכללים. אלה הנקודות שבהן ההכפלה נעצרת על הסף."),
    P("ועוד הערה: הגרפים במבחן סכמטיים. לא מחשבים מהם סף מדויק, אלא קוראים את השיפוע ואת סוג הצניחה.",
      do=show("i-5"), hold=0.3),
], stage=CH,
   panel=st.card("i-1", "ex", "סבב 1 עד סבב 7: הכפלה")
         + st.card("i-2", "trap", "⚠️ אחרי צניחה לחצי: אין " + w.ltr("Slow Start"))
         + st.card("i-3", "ex", "סבב 15 עד סבב 19: הכפלה עד הסף 12")
         + st.card("i-4", "rule", "🔑 " + w.ltr("[1, 7]") + " ו-" + w.ltr("[15, 19]"))
         + st.card("i-5", "trap", "⚠️ גרף סכמטי: קוראים שיפוע, לא מחשבים סף"))

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן, על אותו גרף: באילו סבבים הפרוטוקול נכנס ל-Congestion Avoidance?",
      do=show("g2"),
      say="שאלה בסגנון מבחן, על אותו גרף: באילו סבבים הפרוטוקול נכנס לקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס?"),
    P("מחפשים איפה **ההכפלה נגמרת**, ומתחיל קו של ועוד אחד.", do=show("g2-band-s1", "g2-band-s2")),
    P("ההכפלה הראשונה נגמרת בסבב שבע, והשנייה בסבב תשע עשרה. אז שבע ותשע עשרה.", do=show("q-ok-a")),
    P("שמונה וארבע עשרה הן נקודות השיא, רגע לפני הצניחות. שם יש אובדן, לא כניסה ל-Congestion Avoidance.",
      do=show("q-x-b", "q-n-b"),
      say="שמונה וארבע עשרה הן נקודות השיא, רגע לפני הצניחות. שם יש אובדן, לא כניסה לקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס."),
    P("התשובה עם סבב תשע היא המלכודת: אחרי הצניחה לחצי החלון כבר עולה באחד, ואין לפניו הכפלה.",
      do=show("q-x-c", "q-n-c")),
    P("זה המשך של אותו שלב, ולא שינוי שיפוע מהכפלה.", hold=0.2),
    P("ואחת וחמש עשרה הן ההתחלות של Slow Start, לא הסופים שלו.", do=show("q-x-d", "q-n-d"), hold=0.5,
      say="ואחת וחמש עשרה הן ההתחלות של סְלוֹאוּ סְטַארְט, לא הסופים שלו."),
], stage=w.cwnd_chart("g2", CW, KD, w=1000, h=540, ymax=45, bands=[("s1", 1, 7), ("s2", 15, 19)], shown=True),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>בגרף שמשמאל, באילו סבבים נכנס הפרוטוקול '
         'ל-' + w.ltr("Congestion Avoidance") + '?</div>'
         + st.options("q", OPTS, notes={"b": "שיאים", "c": "אחרי חצי", "d": "התחלות"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: הכפלה היא Slow Start, ועלייה באחד היא Congestion Avoidance.", do=show("s-1"),
      say="לסיכום: הכפלה היא סְלוֹאוּ סְטַארְט, ועלייה באחד היא קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס."),
    P("הכניסה ל-Congestion Avoidance היא הנקודה האחרונה של ההכפלה.", do=show("s-2"),
      say="הכניסה לקוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס היא הנקודה האחרונה של ההכפלה."),
    P("צניחה לחצי: שלושה ACK כפולים, וממשיכים ליניארית.", do=show("s-3"),
      say="צניחה לחצי: שלושה אַק כפולים, וממשיכים ליניארית."),
    P("וצניחה לאחת: timeout, ו-Slow Start מחדש. נתראה ברמה הבאה.", do=show("s-4"), hold=0.6,
      say="וצניחה לאחת: טַיים אָאוּט, וסְלוֹאוּ סְטַארְט מחדש. נתראה ברמה הבאה."),
], stage=w.stack(w.big("s-0", r"\times 2 \;\;|\;\; +1 \;\;|\;\; \div 2 \;\;|\;\; \to 1", hidden=False, cls="sm")),
   panel=st.card("s-1", "rule", "🔑 $\\times 2$: " + w.ltr("Slow Start") + ", $+1$: " + w.ltr("CA"))
         + st.card("s-2", "rule", "🔑 כניסה ל-" + w.ltr("CA") + ": סוף ההכפלה")
         + st.card("s-3", "rule", "🔑 $\\div 2$: 3 " + w.ltr("dup ACK"))
         + st.card("s-4", "rule", "🔑 $\\to 1$: " + w.ltr("timeout")))

VIDEO = Video("T07", "tcp", "קריאת גרף cwnd", [title, rules, read, ints, exam, recap], bank={})
