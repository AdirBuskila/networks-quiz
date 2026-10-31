# -*- coding: utf-8 -*-
"""A07 · מטמון ו-TTL ב-DNS — video script (build: tools/video/vid.py A07).

Source: courses/app/C07.js (lesson + goal: TTL in seconds is the longest a record may stay cached; it counts from the
moment the record was stored and a hit does not refresh it; an access is a real lookup when nothing is cached or the
age is at least TTL; low TTL -> more lookups and load, high TTL -> a change of address reaches users late).
Exam part: an original question "בסגנון מבחן" (bank={}): TTL = 40 s, accesses at 0, 20, 50, 70, 100, 130, 150 s, a
full lookup of 3 x 15 ms (not the 3 x 20 of C07-Q3). The free bank TTL items are twins of C07 quiz items (24A-B-Q9 ~ C07-Q5, 26A-A-Q1 ~ C07-Q4).
Avoided on purpose: the C07 quiz/lesson numbers (TTL 60 at 0/30/70/100, TTL 45 every 10 s, TTL 60 at 0/25/80, NS 86400
with A 300, 86400 for a move). Worked example: TTL 120 s at 0, 50, 100, 140, 200, 270.
Every verdict comes from w_app.ttl_sim(), whose count is the course checker's real_lookups(); the "refresh on every
hit" error is the checker's sliding_lookups().
"""
from vid import P, Scene, Video, show, hide
import stage as st
import w_app as w

# ---------------------------------------------------------------- worked example
TTL1, TS1 = 120, [0, 50, 100, 140, 200, 270]
L1, SIM1 = w.ttl_line("a", TTL1, TS1, 400, tick=50)
assert [k for _, k, _ in SIM1] == ["real", "hit", "hit", "real", "hit", "real"]
assert w.real_lookups(TTL1, TS1) == 3 and w.sliding_lookups(TTL1, TS1) == 1
assert 100 - 0 < TTL1 and 140 - 0 >= TTL1 and 200 - 140 < TTL1 and 270 - 140 >= TTL1

# ---------------------------------------------------------------- exam-style
TTL, TS, T = 40, [0, 20, 50, 70, 100, 130, 150], 15
L2, SIM2 = w.ttl_line("q", TTL, TS, 200, tick=10)
REAL = w.real_lookups(TTL, TS)
assert REAL == 4 and [k for _, k, _ in SIM2] == ["real", "hit", "real", "hit", "real", "hit", "real"]
FULL = 3 * T                                              # Root, TLD, Authoritative in sequence
ANS = REAL * FULL
assert ANS == 180
WRONG = {"b": w.sliding_lookups(TTL, TS) * FULL,          # a hit refreshes the TTL -> one lookup
         "c": len(TS) * FULL,                             # no cache at all
         "d": REAL * T}                                   # one query per lookup instead of three
assert WRONG == {"b": 45, "c": 315, "d": 60}
OPTV = {"a": ANS, **WRONG}
assert len(set(OPTV.values())) == 4 and [k for k, v in OPTV.items() if v == ANS] == ["a"]
OPTS = [(k, w.ltr(f"{v} ms")) for k, v in OPTV.items()]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נדבר על המטמון של DNS, ועל השדה שקובע כמה זמן מותר לשמור בו: TTL."),
    P("נעקוב אחרי סדרת פניות על ציר זמן, ונספור כמה מהן הן חיפושים אמיתיים."),
    P("ובסוף נפתור שאלה בסגנון מבחן.", hold=0.4),
], stage='<div class="kicker">A07 · DNS ו-HTTP: מטמון, חיבורים ו-TTL</div><h1>מטמון ו-TTL ב-DNS</h1>'
         '<p>להסביר מה TTL קובע, ולחשב כמה חיפושים אמיתיים מתבצעים כשרשומה נשמרת במטמון עד שה-TTL פג.</p>', layout="title")

idea = Scene("idea", "מה זה TTL", [
    P("כל שרת DNS שלמד מיפוי שומר אותו במטמון, כדי לא לחזור על כל החיפוש בפעם הבאה."),
    P("בלי מטמון, כל פנייה לאתר הייתה עולה חיפוש מלא: Root, אחריו TLD, ואחריו Authoritative."),
    P("עם מטמון, הפנייה נענית מיד מה-Resolver, בלי אף שאילתה לשרתים שמעליו."),
    P("אבל אי אפשר לשמור לנצח: הכתובת של אתר יכולה להשתנות. אז כמה זמן מותר לשמור?"),
    P("לכל רשומה יש שדה TTL, Time To Live. הוא נמדד ב**שניות**.", do=show("i-1"),
      say="לכל רשומה יש שדה טִי טִי אֶל, טַיים טוּ לִיב. הוא נמדד בשניות."),
    P("וה-TTL הוא **תקרה**: מותר לשמור את הרשומה עד שהוא פג. לא חובה לשמור עד אז.", do=show("i-c1")),
    P("והוא נספר מהרגע שהרשומה נשמרה. פגיעה במטמון **לא** מאריכה אותו.", do=show("i-c2")),
    P("עכשיו נראה מה זה אומר כשהפניות מגיעות לאורך זמן.", hold=0.3),
], stage=w.stack(w.big("i-1", r"\text{TTL}\ [\text{s}]"), gap=40),
   panel=st.card("i-c1", "rule", "🔑 TTL = הזמן <b>המרבי</b> במטמון, בשניות")
         + st.card("i-c2", "trap", "⚠️ פגיעה לא מאריכה את התוקף"))

run = Scene("run", "על ציר הזמן", [
    P("נעקוב אחרי רשומה עם TTL של 120 שניות. הפניות מגיעות בזמנים שעל הציר.", do=show("a"),
      say="נעקוב אחרי רשומה עם טִי טִי אֶל של מאה ועשרים שניות. הפניות מגיעות בזמנים שעל הציר."),
    P("בזמן אפס אין כלום במטמון: חיפוש אמיתי. הרשומה נשמרת, ותקפה עד 120.", do=show("a-t0", "a-v0"),
      say="בזמן אפס אין כלום במטמון: חיפוש אמיתי. הרשומה נשמרת, ותקפה עד מאה ועשרים."),
    P("ב-50 וב-100 הרשומה עדיין בתוקף: שתי פגיעות.", do=show("a-t1", "a-t2"),
      say="בחמישים ובמאה הרשומה עדיין בתוקף: שתי פגיעות."),
    P("ב-140 עברו כבר 140 שניות מאז שנשמרה. היא פגה: חיפוש אמיתי, ושמירה חדשה עד 260.", do=show("a-t3", "a-v1"),
      say="במאה וארבעים עברו כבר מאה וארבעים שניות מאז שנשמרה. היא פגה: חיפוש אמיתי, ושמירה חדשה עד מאתיים ושישים."),
    P("ב-200: פגיעה.", do=show("a-t4"), say="במאתיים: פגיעה."),
    P("וב-270 הרשומה השנייה פגה: חיפוש אמיתי שלישי.", do=show("a-t5", "a-v2", "a-c1"),
      say="ובמאתיים ושבעים הרשומה השנייה פגה: חיפוש אמיתי שלישי."),
    P("ומי שחושב שכל פגיעה מאריכה את התוקף, יספור רק חיפוש אחד: כל פנייה קרובה מספיק לקודמת.", do=show("a-c2")),
    P("אבל זו בדיוק הטעות. סופרים את הגיל מרגע **השמירה**, לא מהפנייה האחרונה.", hold=0.3),
], stage=w.stack(L1, '<div class="card plain" style="font-size:28px">'
                 '<span style="color:#fbbf24">●</span> חיפוש אמיתי &nbsp; <span style="color:#2dd4bf">○</span> פגיעה</div>',
                 gap=30),
   panel=st.card("a-c1", "ex", "3 חיפושים אמיתיים מתוך 6 פניות")
         + st.card("a-c2", "trap", "⚠️ פגיעה לא מאריכה: לא 1, אלא 3"))

rule = Scene("rule", "המתכון", [
    P("המתכון: עוברים על הפניות לפי הזמן.", do=show("u-1")),
    P("פנייה היא חיפוש אמיתי אם אין רשומה במטמון, או אם עברו **לפחות** TTL שניות מאז שהיא נשמרה.", do=show("u-2")),
    P("בכל חיפוש אמיתי, הרשומה נשמרת מחדש, והשעון מתחיל מאפס.", do=show("u-3")),
    P("כל פנייה אחרת היא פגיעה, ואינה משנה כלום.", do=show("u-4")),
    P("ובסוף: מספר החיפושים האמיתיים, כפול הזמן של חיפוש מלא.", do=show("u-5"), hold=0.3),
], stage=w.stack(w.row("u-1", "1. עוברים על הפניות לפי הזמן"),
                 w.row("u-2", "2. אין רשומה, או גיל ≥ TTL ⟵ <b>חיפוש אמיתי</b>"),
                 w.row("u-3", "3. חיפוש אמיתי ⟵ שומרים מחדש, הגיל מתאפס"),
                 w.row("u-4", "4. אחרת ⟵ פגיעה, בלי שינוי"),
                 w.row("u-5", "זמן כולל = מספר החיפושים × זמן חיפוש מלא"), gap=34),
   panel=st.card("u-c1", "rule", "🔑 הגיל נספר מרגע <b>השמירה</b>"))
rule.phrases[1].do += show("u-c1")

exam = Scene("exam", "שאלה בסגנון מבחן", [
    P("שאלה בסגנון מבחן: ה-TTL של רשומה הוא 40 שניות.",
      say="שאלה בסגנון מבחן: הטִי טִי אֶל של רשומה הוא ארבעים שניות."),
    P("חיפוש מלא, Root, TLD ו-Authoritative, לוקח שלוש פעמים 15 מילישניות. מה סך זמן החיפוש בכל הפניות?",
      say="חיפוש מלא, רוּט, טִי אֶל דִי ואוֹתוֹרִיטֶטִיב, לוקח שלוש פעמים חמש עשרה מילישניות. מה סך זמן החיפוש בכל הפניות?"),
    P("אפס: חיפוש, תקף עד 40. 20: פגיעה.", do=show("q", "q-t0", "q-v0", "q-t1"),
      say="אפס: חיפוש, תקף עד ארבעים. עשרים: פגיעה."),
    P("50: פג, חיפוש, תקף עד 90. 70: פגיעה.", do=show("q-t2", "q-v1", "q-t3"),
      say="חמישים: פג, חיפוש, תקף עד תשעים. שבעים: פגיעה."),
    P("100: חיפוש, עד 140. 130: פגיעה. 150: חיפוש.", do=show("q-t4", "q-v2", "q-t5", "q-t6", "q-v3"),
      say="מאה: חיפוש, עד מאה וארבעים. מאה ושלושים: פגיעה. מאה וחמישים: חיפוש."),
    P("ארבעה חיפושים אמיתיים, כל אחד 45 מילישניות: 180.", do=show("x-1", "q-ok-a"),
      say="ארבעה חיפושים אמיתיים, כל אחד ארבעים וחמש מילישניות: מאה ושמונים."),
    P("45 הוא מה שיוצא אם כל פגיעה מאריכה את התוקף: כל פנייה קרובה לקודמת, ונשאר חיפוש אחד.", do=show("q-x-b", "q-n-b"),
      say="ארבעים וחמש הוא מה שיוצא אם כל פגיעה מאריכה את התוקף: כל פנייה קרובה לקודמת, ונשאר חיפוש אחד."),
    P("315 מתעלם מהמטמון: שבעה חיפושים מלאים.", do=show("q-x-c", "q-n-c"),
      say="שלוש מאות וחמש עשרה מתעלם מהמטמון: שבעה חיפושים מלאים."),
    P("ו-60 סופר שאילתה אחת לכל חיפוש, ושוכח שחיפוש מלא הוא שלוש שאילתות.", do=show("q-x-d", "q-n-d"), hold=0.5,
      say="ושישים סופר שאילתה אחת לכל חיפוש, ושוכח שחיפוש מלא הוא שלוש שאילתות."),
], stage=w.stack(f'<div id="q-wrap">{L2}</div>',
                 w.big("x-1", r"4 \cdot 3 \cdot 15 = 180\ \text{ms}", cls="sm"), gap=40),
   panel='<div class="qstem"><span class="qid">בסגנון מבחן</span>$\\text{TTL} = 40\\ \\text{s}$. פניות בזמנים '
         + w.ltr("0, 20, 50, 70, 100, 130, 150") + '. חיפוש מלא: $3 \\cdot 15\\ \\text{ms}$. מה סך זמן החיפוש?</div>'
         + st.options("q", OPTS, notes={"b": "פגיעה מאריכה", "c": "בלי מטמון", "d": "שאילתה אחת"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום: TTL הוא הזמן המרבי, בשניות, שמותר לשמור רשומה במטמון.", do=show("r-1")),
    P("הוא נספר מרגע השמירה, ופגיעה לא מאריכה אותו.", do=show("r-2")),
    P("חיפוש אמיתי: אין רשומה, או שהגיל הגיע ל-TTL. נתראה ברמה הבאה.", do=show("r-3"), hold=0.6),
], stage=w.stack(w.row("r-f", "גיל ≥ TTL ⟵ חיפוש אמיתי", hidden=False)),
   panel=st.card("r-1", "rule", "🔑 TTL: מקסימום, בשניות")
         + st.card("r-2", "trap", "⚠️ פגיעה לא מאריכה")
         + st.card("r-3", "ex", "אין רשומה / גיל ≥ TTL"))

VIDEO = Video("A07", "app", "מטמון ו-TTL ב-DNS", [title, idea, run, rule, exam, recap], bank={})
