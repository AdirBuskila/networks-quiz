# -*- coding: utf-8 -*-
"""T08 · אתגר המבחן: TCP — boss walkthrough (build: tools/video/vid.py T08).

Source: courses/tcp/C08.js (boss: real exam questions; first decide which tool of levels 1-7 fits).
Exam anchors (three bank questions that no guided quiz or boss uses, and no other T video of this course solves):
  23A-A-Q3   is RTT estimated in both TCP and UDP?                      key c (only TCP)
  23A-A-Q17  what must a reliable transport add over the network layer?  multi-select b, c, d (correctId b)
  25A-B-Q13  order of the socket API calls in a TCP connection           key a
Not used on purpose: the six C08 boss questions (22S-A-Q14, 25A-B-Q2, SAMP-1-Q14, 26A-A-Q6, 25A-C-Q7, 23A-A-Q20) and
their twins (SAMP-2-Q14, 23A-B-Q4 = twin of 23A-A-Q3 is not shown either), 23A-B-Q17 (twin-like of 23A-A-Q17 with
another key set), and the anchors of T03/T04/T06 (23A-A-Q10, 25A-C-Q16, 25A-C-Q10).
The ACK and handshake facts recalled here are the ones computed in T01-T03 (w_tcp.handshake / acks), re-asserted below.
"""
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_tcp as w

# ---------------------------------------------------------------- facts reused (verified)
assert w.handshake(100, 900) == [("C", "SYN", 100, None), ("S", "SYN+ACK", 900, 101), ("C", "ACK", 101, 901)]
OOO = w.acks([(2001, 2500), (3001, 3500), (2501, 3000)], 2001)   # out of order: buffered, then the gap fills
assert OOO == [2501, 2501, 3501]
DUP = w.acks([(1, 100), (101, 200), (101, 200)])          # a duplicate copy changes nothing: same ACK
assert DUP == [101, 201, 201]

# exam 1: 23A-A-Q3
Q1 = BANK["23A-A-Q3"]
assert Q1["correctId"] == "c" and "רק ב TCP" in [o["value"] for o in Q1["options"] if o["id"] == "c"][0]
O1 = [(o["id"], o["value"]) for o in Q1["options"]]

# exam 2: 23A-A-Q17 (multi-select)
Q2 = BANK["23A-A-Q17"]
assert Q2.get("multi") and sorted(Q2["answerIds"]) == ["b", "c", "d"] and Q2["correctId"] == "b"
O2 = [(o["id"], o["value"]) for o in Q2["options"]]

# exam 3: 25A-B-Q13 (the client part is the same in every option, so the options show the server part)
Q3 = BANK["25A-B-Q13"]
assert Q3["correctId"] == "a"
CLIENT = "לקוח: `socket → connect`"
assert all(o["value"].split("\n")[1] == CLIENT for o in Q3["options"])
O3 = [(o["id"], w.ltr(o["value"].split("\n")[0].split("`")[1])) for o in Q3["options"]]
assert O3[0][1].endswith("socket → bind → listen → accept</span>")

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("זה אתגר המבחן של TCP. נפתור יחד שלוש שאלות אמיתיות ממבחנים."),
    P("בכל שאלה נשאל קודם: איזה כלי מהרמות הקודמות מתאים כאן?"),
    P("ורק אז נפתור, ונפסול כל תשובה שגויה עם סיבה.", hold=0.4),
], stage='<div class="kicker">T08 · TCP: ACK, חלון ובקרת עומס</div><h1>אתגר המבחן: TCP</h1>'
         '<p>שלוש שאלות אמיתיות: הערכת RTT, מה מוסיף פרוטוקול אמין, וסדר הקריאות של סוקט TCP.</p>', layout="title")

q1 = Scene("rtt", "שאלה 1: הערכת RTT", [
    P("שאלה ראשונה: ״הערכת RTT מתבצעת, עבור תפקוד הפרוטוקול, גם ב-TCP וגם ב-UDP״. נכון או לא?",
      say="שאלה ראשונה: הערכת אַר טִי טִי מתבצעת, עבור תפקוד הפרוטוקול, גם בטִי סִי פִּי וגם ביוּ דִי פִּי. נכון או לא?"),
    P("הכלי: רמה שלוש. שם ראינו טיימר, ש-TCP שולח אחריו שוב קטע שלא אושר.", do=show("a-1"),
      say="הכלי: רמה שלוש. שם ראינו טיימר, שטִי סִי פִּי שולח אחריו שוב קטע שלא אושר."),
    P("כמה זמן לחכות? אם הטיימר קצר מדי, שולחים שוב סתם. אם הוא ארוך מדי, מאבדים זמן אחרי כל אובדן."),
    P("לכן TCP מודד כל הזמן כמה זמן לוקח לאישור לחזור, ומחזיק ממוצע: זו הערכת ה-RTT.", do=show("a-2"),
      say="לכן טִי סִי פִּי מודד כל הזמן כמה זמן לוקח לאישור לחזור, ומחזיק ממוצע: זו הערכת האַר טִי טִי."),
    P("ל-UDP אין אישורים ואין שליחה חוזרת. אין לו מה למדוד, ואין לו טיימר לכוון.", do=show("a-3"),
      say="ליוּ דִי פִּי אין אישורים ואין שליחה חוזרת. אין לו מה למדוד, ואין לו טיימר לכוון."),
    P("אז ההיגד לא נכון: ההערכה מתבצעת רק ב-TCP.", do=show("r1-ok-c"),
      say="אז ההיגד לא נכון: ההערכה מתבצעת רק בטִי סִי פִּי."),
    P("IP ו-ICMP לא מעריכים RTT כחלק מהתפקוד שלהם. כלי כמו פינג רק מודד ומציג.", do=show("r1-x-a", "r1-n-a"),
      say="אַיי פִּי ואַיי סִי אֶם פִּי לא מעריכים אַר טִי טִי כחלק מהתפקוד שלהם. כלי כמו פינג רק מודד ומציג."),
    P("״רק ב-UDP״ הוא בדיוק ההפך מהנכון.", do=show("r1-x-b", "r1-n-b"),
      say="רק ביוּ דִי פִּי, הוא בדיוק ההפך מהנכון."),
    P("״לא ניתן לדעת״ נופל: זה נובע ישירות מהמנגנונים. ו״אף אחת״ נופלת, כי מצאנו תשובה נכונה.",
      do=show("r1-x-d", "r1-n-d", "r1-x-e", "r1-n-e"), hold=0.5,
      say="לא ניתן לדעת, נופל: זה נובע ישירות מהמנגנונים. ואף אחת, נופלת, כי מצאנו תשובה נכונה."),
], stage=w.stack(st.card("a-1", "ex", "רמה 3: " + w.ltr("timeout") + " ← שליחה חוזרת"),
                 st.card("a-2", "rule", "🔑 " + w.ltr("TCP") + ": מודד זמן עד ה-" + w.ltr("ACK") + " ← מכוון את הטיימר"),
                 st.card("a-3", "trap", w.ltr("UDP") + ": אין " + w.ltr("ACK") + ", אין טיימר ← אין הערכה"), gap=30),
   panel=f'<div class="qstem"><span class="qid">{Q1["id"]}</span>״הערכת RTT מתבצעת, עבור תפקוד הפרוטוקול, '
         'גם ב-TCP וגם ב-UDP.״</div>'
         + '<div class="tc-osm">' + st.options("r1", O1, notes={"a": "לא ב-IP", "b": "הפוך", "d": "אפשר לדעת",
                                                                "e": "יש נכונה"}) + '</div>')

q2 = Scene("reliable", "שאלה 2: פרוטוקול אמין", [
    P("שאלה שנייה, ובה מסמנים את **כל** הנכון: מה חייב פרוטוקול תעבורה אמין להוסיף, מעבר למה ששכבת הרשת כבר נותנת?"),
    P("שכבת הרשת, IP, מעבירה חבילות ממחשב למחשב. אבל בלי הבטחות: הן יכולות לאבוד, להגיע בסדר אחר, או פעמיים.",
      do=show("b-0"),
      say="שכבת הרשת, אַיי פִּי, מעבירה חבילות ממחשב למחשב. אבל בלי הבטחות: הן יכולות לאבוד, להגיע בסדר אחר, או פעמיים."),
    P("התאוששות מאובדן: חובה. זה כל מה שראינו ברמה שלוש: אישורים, טיימר ושליחה חוזרת.", do=show("b-3", "r2-ok-d")),
    P("סדר נכון: חובה. המספרים הסידוריים מאפשרים למקבל לשמור קטע שהגיע מוקדם, ולמסור את הכול לפי הסדר.",
      do=show("b-1", "r2-ok-b")),
    P("למשל: קטעים של 500 בתים מ-2001 שהגיעו בסדר ראשון, שלישי, שני, נותנים 2501, 2501, ואז 3501.",
      say="למשל: קטעים של חמש מאות בתים מאלפיים ואחת, שהגיעו בסדר ראשון, שלישי, שני, נותנים אלפיים חמש מאות ואחת, שוב אלפיים חמש מאות ואחת, ואז שלושת אלפים חמש מאות ואחת.",
      do=show("b-1x")),
    P("הגנה מכפילויות: גם חובה. עותק שני של קטע שכבר התקבל מזוהה לפי המספר הסידורי, ונזרק.", do=show("b-2", "r2-ok-c")),
    P("ומה עם קישוריות ממחשב למחשב? את זה IP **כבר** נותן. זה לא משהו שצריך להוסיף מעליו.",
      do=show("r2-x-a", "r2-n-a"),
      say="ומה עם קישוריות ממחשב למחשב? את זה אַיי פִּי כבר נותן. זה לא משהו שצריך להוסיף מעליו."),
    P("ו״אף תשובה״ נופלת, כי שלוש תשובות נכונות. כאן מסמנים שלוש.", do=show("r2-x-e", "r2-n-e"), hold=0.5,
      say="ואף תשובה, נופלת, כי שלוש תשובות נכונות. כאן מסמנים שלוש."),
], stage=w.stack(w.row("b-0", w.ltr("IP") + ": <b>best effort</b>, בלי הבטחות"),
                 st.card("b-3", "rule", "אובדן ← " + w.ltr("ACK") + " + טיימר + שליחה חוזרת"),
                 st.card("b-1", "rule", "סדר ← מספרים סידוריים + שמירה אצל המקבל"),
                 w.row("b-1x", w.ltr("2001-2500, 3001-3500, 2501-3000 → 2501, 2501, 3501"), cls="ltr"),
                 st.card("b-2", "rule", "כפילות ← אותו $seq$ פעמיים: זורקים"), gap=18),
   panel=f'<div class="qstem"><span class="qid">{Q2["id"]}</span>מה חייב פרוטוקול תעבורה אמין לממש מעבר '
         'לשכבת הרשת? (סמנו את כל הנכון)</div>'
         + st.options("r2", O2, notes={"a": "כבר ב-IP", "e": "יש נכונות"}))

q3 = Scene("sockets", "שאלה 3: סוקט TCP", [
    P("שאלה שלישית: מה הסדר הנכון של קריאות הסוקט בחיבור TCP? אצל הלקוח הסדר זהה בכל התשובות, אז מתמקדים בשרת.",
      say="שאלה שלישית: מה הסדר הנכון של קריאות הסוקט בחיבור טִי סִי פִּי? אצל הלקוח הסדר זהה בכל התשובות, אז מתמקדים בשרת."),
    P("הכלי: רמה אחת, לחיצת היד. כשהלקוח קורא ל-connect, הוא שולח SYN.", do=show("c-1"),
      say="הכלי: רמה אחת, לחיצת היד. כשהלקוח קורא לקוֹנֶקְט, הוא שולח סִין."),
    P("כדי שה-SYN יגיע למקום, השרת צריך פורט קבוע. לכן אחרי socket הוא קורא ל-bind, שקושר אותו לפורט.", do=show("c-2"),
      say="כדי שהסִין יגיע למקום, השרת צריך פורט קבוע. לכן אחרי סוֹקֶט הוא קורא לבַּיינְד, שקושר אותו לפורט."),
    P("אחר כך listen: מעכשיו הוא מקבל בקשות חיבור.", do=show("c-3"),
      say="אחר כך לִיסֶן: מעכשיו הוא מקבל בקשות חיבור."),
    P("ולבסוף accept: הוא מחזיר חיבור, אחרי שלחיצת היד עם הלקוח הושלמה.", do=show("c-4", "r3-ok-a"),
      say="ולבסוף אַקְסֶפְּט: הוא מחזיר חיבור, אחרי שלחיצת היד עם הלקוח הושלמה."),
    P("listen לפני bind: מאזינים לפני שיש פורט ידוע, ואף לקוח לא יודע לאן לפנות.", do=show("r3-x-b", "r3-n-b"),
      say="לִיסֶן לפני בַּיינְד: מאזינים לפני שיש פורט ידוע, ואף לקוח לא יודע לאן לפנות."),
    P("accept לפני listen: אין עדיין בקשות חיבור שאפשר לקבל, כי הסוקט לא מאזין.", do=show("r3-x-c", "r3-n-c"),
      say="אַקְסֶפְּט לפני לִיסֶן: אין עדיין בקשות חיבור שאפשר לקבל, כי הסוקט לא מאזין."),
    P("ו-accept מיד אחרי socket שובר את שני הכללים יחד.", do=show("r3-x-d", "r3-n-d"), hold=0.5,
      say="ואַקְסֶפְּט מיד אחרי סוֹקֶט שובר את שני הכללים יחד."),
], stage=w.stack(w.row("c-1", w.ltr("connect() → SYN"), cls="ltr"),
                 w.row("c-2", w.ltr("bind: port"), cls="ltr"),
                 w.row("c-3", w.ltr("listen: SYN ✓"), cls="ltr"),
                 w.row("c-4", w.ltr("accept: SYN, SYN+ACK, ACK → conn"), cls="ltr"), gap=34),
   panel=f'<div class="qstem"><span class="qid">{Q3["id"]}</span>סדר קריאות הסוקט בחיבור TCP. אצל הלקוח בכל '
         'התשובות: ' + w.ltr("socket → connect") + '. מה הסדר בשרת?</div>'
         + st.options("r3", O3, notes={"b": "בלי פורט", "c": "לא מאזין", "d": "שניהם"}))

recap = Scene("recap", "סיכום", [
    P("סיכום האתגר: TCP מעריך RTT כדי לכוון את הטיימר. ל-UDP אין טיימר ואין הערכה.", do=show("s-1"),
      say="סיכום האתגר: טִי סִי פִּי מעריך אַר טִי טִי כדי לכוון את הטיימר. ליוּ דִי פִּי אין טיימר ואין הערכה."),
    P("פרוטוקול אמין מוסיף מעל IP: התאוששות מאובדן, סדר נכון, והגנה מכפילויות.", do=show("s-2"),
      say="פרוטוקול אמין מוסיף מעל אַיי פִּי: התאוששות מאובדן, סדר נכון, והגנה מכפילויות."),
    P("והשרת: socket, bind, listen, accept, כי connect של הלקוח שולח SYN לפורט שכבר מאזין.", do=show("s-3"),
      say="והשרת: סוֹקֶט, בַּיינְד, לִיסֶן, אַקְסֶפְּט, כי הקוֹנֶקְט של הלקוח שולח סִין לפורט שכבר מאזין."),
    P("ובכל שאלה: קודם מזהים את הכלי, ורק אחר כך פותרים. בהצלחה במבחן!", do=show("s-4"), hold=0.6),
], stage=w.stack(w.row("s-0", "קודם הכלי, אחר כך הפתרון", hidden=False)),
   panel=st.card("s-1", "rule", "🔑 הערכת " + w.ltr("RTT") + ": רק " + w.ltr("TCP"))
         + st.card("s-2", "rule", "🔑 אמינות: אובדן, סדר, כפילויות")
         + st.card("s-3", "rule", "🔑 " + w.ltr("socket → bind → listen → accept"))
         + st.card("s-4", "ex", "מזהים כלי, ואז פותרים"))

VIDEO = Video("T08", "tcp", "אתגר המבחן: TCP", [title, q1, q2, q3, recap],
              bank={"23A-A-Q3": "c", "23A-A-Q17": "b", "25A-B-Q13": "a"})
