# -*- coding: utf-8 -*-
"""T03 · אובדן קטעים ו-ACK כפול — video script (build: tools/video/vid.py T03).

Source: courses/tcp/C03.js (lesson + goal: the ACK sequence when a segment is lost, duplicate ACKs, fast retransmit
after three duplicates, and a timeout when no later segment arrives).
Exam anchor: 23A-A-Q10 (one segment only: TCP vs UDP differ when it is lost), key b; no guided quiz uses it.
Its twin 23A-B-Q12 is not used either. 25A-B-Q2 (an ACK sequence) is in the C08 boss and is not shown.
Avoided on purpose: the C03 quiz scenarios (100-byte segments with the 3rd of five lost, the 2nd of six lost and its
retransmission, the order 1-100 / 201-300 / 101-200, the last of five lost) and the lesson's example (201-300 lost).
Here: 200-byte segments from byte 1, the 3rd of eight lost (five duplicates: not the boss 25A-B-Q2 shape of exactly
three, nor the C03-Q2 count of four), and the 3rd of three lost.
Every ACK comes from the checker's acks() (w_tcp.acks).
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- numbers (verified)
SEG = [w.seg_range(i, 200) for i in range(1, 9)]
assert SEG[2] == (401, 600)
ARR = [SEG[i] for i in (0, 1, 3, 4, 5, 6, 7)]            # the 3rd of eight segments is lost: five arrive after it
A6 = w.acks(ARR)
assert A6 == [201, 401, 401, 401, 401, 401, 401]
DUPS = len(A6) - A6.index(401) - 1
assert DUPS == 5                                         # five duplicates; fast retransmit fires at the 3rd
A6R = w.acks(ARR + [SEG[2]])
assert A6R[-1] == 1601                                   # the gap is filled: jump past everything buffered

# timeout case: three segments, the last one lost; no later segment, so no duplicate ACK
T3 = w.acks([SEG[0], SEG[1]])
assert T3 == [201, 401] and len(set(T3)) == len(T3)
T3R = w.acks([SEG[0], SEG[1], SEG[2]])
assert T3R[-1] == 601

ROWS = [("1-200", "201", ""), ("201-400", "401", ""), ("401-600", "—", "אבד ✗"),
        ("601-800", "401", "כפול 1"), ("801-1000", "401", "כפול 2"), ("1001-1200", "401", "כפול 3"),
        ("1201-1400", "401", "כפול 4"), ("1401-1600", "401", "כפול 5")]
assert [r[1] for r in ROWS if r[1] != "—"] == [str(a) for a in A6]
TAB = w.table("t", ["קטע", "ack", ""], [[w.ltr(a), w.ltr(b), c] for a, b, c in ROWS], hidden=False,
              ids=[f"t-{i}" for i in range(8)])

LAD, YS = w.ladder("to", ("שולח", "מקבל"), [
    dict(dir="R", label="1-200", cls="data"),
    dict(dir="L", label=f"ack={T3[0]}", cls="ack"),
    dict(dir="R", label="201-400", cls="data"),
    dict(dir="L", label=f"ack={T3[1]}", cls="ack"),
    dict(dir="R", label="401-600", cls="data", lost=True),
    dict(dir="R", label="401-600", cls="retx", gap=150, note=""),
    dict(dir="L", label=f"ack={T3R[-1]}", cls="ack"),
], step=66, slope=44, top=80, brackets=[("tm", "L", 4, 5, "timeout")])

# exam 23A-A-Q10
Q = BANK["23A-A-Q10"]
assert Q["correctId"] == "b" and "אובדן" in [o["value"] for o in Q["options"] if o["id"] == "b"][0]
OPTS = [(o["id"], o["value"]) for o in Q["options"]]

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("בסרטון הזה נראה מה קורה כשקטע TCP הולך לאיבוד בדרך."),
    P("נחשב את רצף ה-ACK, נבין מהו ACK כפול, ומתי השולח מחכה ל-timeout."),
    P("ובסוף נפתור שאלה ממבחן: האם יש הבדל בין TCP ל-UDP כשיש רק קטע אחד.", hold=0.4),
], stage='<div class="kicker">T03 · TCP: ACK, חלון ובקרת עומס</div><h1>אובדן קטעים ו-ACK כפול</h1>'
         '<p>לחשב את רצף ה-ACK כשקטע אובד, ולזהות מתי נשלח ACK כפול ומתי נדרש timeout.</p>', layout="title")

dup = Scene("dup", "ACK כפול", [
    P("נזכיר: ה-$ack$ הוא הבית הבא שהמקבל מצפה לו. כלומר, הבית הבא **החסר** ברצף.",
      say="נזכיר: האַק הוא הבית הבא שהמקבל מצפה לו. כלומר, הבית הבא החסר ברצף."),
    P("השולח שולח שמונה קטעים של 200 בתים, מהבית הראשון. הקטע השלישי, 401 עד 600, אובד.",
      say="השולח שולח שמונה קטעים של מאתיים בתים, מהבית הראשון. הקטע השלישי, ארבע מאות ואחת עד שש מאות, אובד."),
    P("הקטע הראשון מגיע: $ack=201$.", do=show("t-0"), say="הקטע הראשון מגיע: אַק שווה מאתיים ואחת."),
    P("השני מגיע: $ack=401$.", do=show("t-1"), say="השני מגיע: אַק שווה ארבע מאות ואחת."),
    P("השלישי לא מגיע. המקבל לא יודע את זה עדיין, ולא שולח כלום.", do=show("t-2")),
    P("עכשיו מגיע הרביעי, 601 עד 800. המקבל שומר אותו בצד, אבל ברצף עדיין חסר 401.", do=show("t-3"),
      say="עכשיו מגיע הרביעי, שש מאות ואחת עד שמונה מאות. המקבל שומר אותו בצד, אבל ברצף עדיין חסר ארבע מאות ואחת."),
    P("לכן הוא שולח שוב $ack=401$. זה **ACK כפול**.", do=show("d-c1"),
      say="לכן הוא שולח שוב אַק שווה ארבע מאות ואחת. זה אַק כפול."),
    P("החמישי והשישי מגיעים, ושוב: 401, ו-401.", do=show("t-4", "t-5"),
      say="החמישי והשישי מגיעים, ושוב: ארבע מאות ואחת, וארבע מאות ואחת."),
    P("זה כבר הכפול השלישי. שלושה ACK כפולים מפעילים **Fast retransmit**: השולח שולח מיד את 401 עד 600.",
      do=show("d-c3"),
      say="זה כבר הכפול השלישי. שלושה אַק כפולים מפעילים פַאסְט רִיטְרַנְסְמִיט: השולח שולח מיד את ארבע מאות ואחת עד שש מאות."),
    P("בינתיים מגיעים גם השביעי והשמיני, שכבר היו בדרך. ושוב 401, ו-401.", do=show("t-6", "t-7"),
      say="בינתיים מגיעים גם השביעי והשמיני, שכבר היו בדרך. ושוב ארבע מאות ואחת, וארבע מאות ואחת."),
    P("כמה ACK כפולים יש בסך הכול? סופרים רק את החזרות, בלי ה-401 הראשון: חמישה.", do=show("d-c2"),
      say="כמה אַק כפולים יש בסך הכול? סופרים רק את החזרות, בלי הארבע מאות ואחת הראשון: חמישה."),
    P("כשהקטע מגיע, הרצף מתמלא, והמקבל קופץ ישר אל אחרי כל מה ששמר: $ack=1601$.", do=show("d-c4"), hold=0.4,
      say="כשהקטע מגיע, הרצף מתמלא, והמקבל קופץ ישר אל אחרי כל מה ששמר: אַק שווה אלף שש מאות ואחת."),
], stage=TAB,
   panel=st.card("d-c1", "ex", "ACK כפול: אותו $ack$ שוב, כי הרצף לא התקדם")
         + st.card("d-c2", "trap", "⚠️ סופרים את החזרות בלבד: 5")
         + st.card("d-c3", "rule", "🔑 3 ACK כפולים: שליחה חוזרת מיד")
         + st.card("d-c4", "ex", "החסר הגיע: $ack=1601$"))

tmo = Scene("timeout", "כשאין ACK כפול", [
    P("ומה אם הקטע **האחרון** הולך לאיבוד? הפעם יש רק שלושה קטעים, והשלישי אובד.", do=show("to")),
    P("הראשון והשני מגיעים, ועליהם $ack=201$ ו-$ack=401$.", do=show("to-m0", "to-m1", "to-m2", "to-m3"),
      say="הראשון והשני מגיעים, ועליהם אַק שווה מאתיים ואחת, ואַק שווה ארבע מאות ואחת."),
    P("השלישי אובד, ואחריו אין שום קטע.", do=show("to-m4")),
    P("בלי קטעים מאוחרים, המקבל לא שולח שום ACK כפול. השולח פשוט לא שומע כלום.", do=show("o-c1")),
    P("אז הוא מחכה לטיימר. כשהזמן תם בלי אישור, זה **timeout**, ורק אז הוא שולח שוב.",
      do=show("to-b-tm", "to-m5", "o-c2"),
      say="אז הוא מחכה לטיימר. כשהזמן תם בלי אישור, זה טַיים אָאוּט, ורק אז הוא שולח שוב."),
    P("הקטע מגיע, והמקבל עונה $ack=601$.", do=show("to-m6"), say="הקטע מגיע, והמקבל עונה אַק שווה שש מאות ואחת."),
    P("את משך הטיימר TCP קובע לפי הערכה של זמן ההלוך ושוב, ה-RTT.", do=show("o-c3")),
    P("שימו לב להבדל: שלושה ACK כפולים אומרים שקטעים אחרים עדיין עוברים. אות קל.", do=show("o-c4")),
    P("ו-timeout אומר שלא הגיע **כלום**. זה אות חמור יותר. נחזור לזה ברמות של בקרת עומס.", hold=0.4,
      say="וטַיים אָאוּט אומר שלא הגיע כלום. זה אות חמור יותר. נחזור לזה ברמות של בקרת עומס."),
], stage=LAD,
   panel=st.card("o-c1", "ex", "אין קטעים אחרי החסר: אין ACK כפול")
         + st.card("o-c2", "rule", "🔑 אז שליחה חוזרת רק אחרי " + w.ltr("timeout"))
         + st.card("o-c3", "ex", "הטיימר נקבע לפי הערכת ה-" + w.ltr("RTT"))
         + st.card("o-c4", "trap", "⚠️ 3 כפולים: אות קל. " + w.ltr("timeout") + ": אות חמור"))

exam = Scene("exam", "שאלה ממבחן", [
    P("שאלה ממבחן: אם האפליקציה שולחת סגמנט **אחד** בלבד, האם יש הבדל בין TCP ל-UDP?"),
    P("בדיוק המקרה שראינו: קטע אחד הוא גם הקטע האחרון. אם הוא אובד, אין אחריו כלום.", do=show("x-1")),
    P("ב-TCP אין ACK כפול, אבל יש טיימר. אחרי timeout הקטע נשלח שוב ומגיע בסוף.", do=show("x-2"),
      say="בטִי סִי פִּי אין אַק כפול, אבל יש טיימר. אחרי טַיים אָאוּט הקטע נשלח שוב, ומגיע בסוף."),
    P("ב-UDP אין אישורים ואין שליחה חוזרת. הקטע פשוט אבד, והאפליקציה לא תקבל אותו.", do=show("x-3")),
    P("לכן יש הבדל, והוא בדיוק במקרה של אובדן.", do=show("q-ok-b"), hold=0.3),
    P("״נכון, אין הבדל״ נופל: ראינו הבדל ממשי.", do=show("q-x-a", "q-n-a"),
      say="התשובה נכון, אין הבדל, נופלת: ראינו הבדל ממשי."),
    P("גודל החלון לא משנה כאן כלום. עם קטע אחד, ההבדל הוא באמינות, לא בחלון.", do=show("q-x-c", "q-n-c")),
    P("ובקרת זרימה גם היא לא העיקר. התשובה הזו טוענת ״אין הבדל״ חוץ ממנה, והאובדן הוא הבדל אחר.",
      do=show("q-x-d", "q-n-d"),
      say="ובקרת זרימה גם היא לא העיקר. התשובה הזו טוענת שאין הבדל חוץ ממנה, והאובדן הוא הבדל אחר."),
    P("ו״אף תשובה״ נופלת, כי מצאנו תשובה נכונה.", do=show("q-x-e", "q-n-e"), hold=0.5,
      say="והאפשרות אף תשובה נופלת, כי מצאנו תשובה נכונה."),
], stage=w.stack(w.row("x-1", "סגמנט אחד = גם הסגמנט <b>האחרון</b>"),
                 st.card("x-2", "rule", w.ltr("TCP") + ": " + w.ltr("timeout") + " ← שליחה חוזרת ← מגיע ✓"),
                 st.card("x-3", "trap", w.ltr("UDP") + ": אין אישור ואין שליחה חוזרת ← אבד ✗"), gap=30),
   panel=f'<div class="qstem"><span class="qid">{Q["id"]}</span>שולחים סגמנט <b>אחד בלבד</b>: אין הבדל בין TCP <span class="nobr">ל-UDP?</span></div>'
         + '<div class="tc-osm">' + st.options("q", OPTS, notes={"a": "יש הבדל", "c": "לא החלון", "d": "לא העיקר",
                                                                  "e": "יש נכונה"}) + '</div>')

recap = Scene("recap", "סיכום", [
    P("לסיכום: ה-ACK הוא תמיד על הבית הבא החסר.", do=show("r-1")),
    P("קטע שהגיע אחרי חור מייצר ACK כפול. סופרים רק את החזרות.", do=show("r-2")),
    P("שלושה ACK כפולים: Fast retransmit, מיד.", do=show("r-3"),
      say="שלושה אַק כפולים: פַאסְט רִיטְרַנְסְמִיט, מיד."),
    P("ואם אין קטעים אחרי החסר, רק timeout יגרום לשליחה חוזרת. נתראה ברמה הבאה.", do=show("r-4"), hold=0.6,
      say="ואם אין קטעים אחרי החסר, רק טַיים אָאוּט יגרום לשליחה חוזרת. נתראה ברמה הבאה."),
], stage=w.stack(w.big("r-0", r"201,\ 401,\ 401,\ \dots,\ 401 \;\to\; 1601", hidden=False, cls="sm")),
   panel=st.card("r-1", "rule", "🔑 $ack$ = הבית הבא <b>החסר</b>")
         + st.card("r-2", "rule", "🔑 ACK כפול: סופרים חזרות בלבד")
         + st.card("r-3", "rule", "🔑 3 כפולים: " + w.ltr("Fast retransmit"))
         + st.card("r-4", "trap", "⚠️ הקטע האחרון אבד: רק " + w.ltr("timeout")))

VIDEO = Video("T03", "tcp", "אובדן קטעים ו-ACK כפול", [title, dup, tmo, exam, recap], bank={"23A-A-Q10": "b"})
