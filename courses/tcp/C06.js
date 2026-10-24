/* TCP course, level 6 - loss events: timeout versus triple duplicate ACK, Tahoe versus Reno */
COURSE_LEVEL("tcp", {
  id: "C06", order: 6, icon: "⚡", title: "אירועי אובדן: Timeout מול 3 ACK כפולים",
  goal: "לחשב את ssthresh ואת cwnd אחרי timeout או אחרי שלושה ACK כפולים, ב-Tahoe וב-Reno.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>TCP מזהה עומס רק לפי <b>אובדן</b>: או <b>timeout</b>, או <b>שלושה ACK כפולים</b>. מצב שבו ACK מגיע מהר, או שהקו פנוי, אינו אות עומס ולא מקטינים בגללו חלון.</p>
    <p>כשמתגלה אובדן והחלון היה $W$, תמיד קודם כל מקבלים $ssthresh=\lfloor W/2\rfloor$. ההבדל הוא במה קורה ל-$cwnd$:</p>
    <table><thead><tr><th>אירוע</th><th>Tahoe</th><th>Reno</th></tr></thead>
    <tbody>
    <tr><td><b>Timeout</b></td><td>$cwnd=1$, חוזרים ל-Slow Start</td><td>$cwnd=1$, חוזרים ל-Slow Start</td></tr>
    <tr><td><b>3 ACK כפולים</b></td><td>$cwnd=1$, Slow Start</td><td>$cwnd=ssthresh$, ממשיכים ישר ב-Congestion Avoidance</td></tr>
    </tbody></table>
    <div class="lesson-rule">🔑 שלושה ACK כפולים הם אות <b>קל</b>: קטעים עדיין מגיעים. לכן Reno רק מקטין לחצי וממשיך. Timeout הוא אות <b>חמור</b>: לא הגיע דבר, ולכן מתחילים מ-1.</div>
    <div class="lesson-ex">$W=24$. אחרי timeout: $ssthresh=12$, $cwnd=1$. אחרי 3 ACK כפולים ב-Reno: $ssthresh=12$, $cwnd=12$. ב-Tahoe: $ssthresh=12$, $cwnd=1$.</div>
    <p>מעקב מלא: $ssthresh=8$, ובסבבים 1 עד 8 החלון הוא $1,2,4,8,9,10,11,12$. בסבב 8 קורה timeout. אז $ssthresh=6$ ובסבבים 9 עד 13: $1,2,4,6,7$ (Slow Start עד 6, ואז ליניארי). אילו זה היה 3 ACK כפולים ב-Reno, סבבים 9 עד 12 היו $6,7,8,9$.</p>
    <p>בבחינה מקובל לפשט: מתעלמים מהתוספת של 3 סגמנטים ש-Reno מוסיף בזמן ההתאוששות.</p>
    <div class="lesson-trap">⚠️ <b>קריסת חלון</b> (window collapse) היא ירידה חדה ל-1, וקורית כשיש הרבה שגיאות או עומס גבוה. ברשת ריקה החלון דווקא רק גדל.</div>` },
  questions: [
    { id: "C06-Q1", question: "$cwnd=24$ ומתרחש timeout. מה הערכים אחרי האירוע?",
      options: [{ id: "a", value: "ssthresh = 12, cwnd = 12" }, { id: "b", value: "ssthresh = 24, cwnd = 1" }, { id: "c", value: "ssthresh = 12, cwnd = 1" }, { id: "d", value: "ssthresh = 1, cwnd = 12" }],
      correctId: "c",
      explanation: "אחרי timeout: $ssthresh=24/2=12$ ו-$cwnd=1$, וחוזרים ל-Slow Start. התשובה cwnd=12 שייכת ל-Reno אחרי 3 ACK כפולים.",
      recap: "timeout: ssthresh=W/2, cwnd=1" },
    { id: "C06-Q2", question: "$cwnd=24$ ומתקבלים שלושה ACK כפולים ב-Reno. מה הערכים אחרי האירוע?",
      options: [{ id: "a", value: "ssthresh = 12, cwnd = 12" }, { id: "b", value: "ssthresh = 12, cwnd = 1" }, { id: "c", value: "ssthresh = 24, cwnd = 12" }, { id: "d", value: "ssthresh = 6, cwnd = 6" }],
      correctId: "a",
      explanation: "ב-Reno שלושה ACK כפולים מקטינים לחצי: $ssthresh=12$ ו-$cwnd=12$, וממשיכים ב-Congestion Avoidance. cwnd=1 היה נכון ב-Tahoe או אחרי timeout.",
      recap: "Reno + 3 dup: cwnd=ssthresh=W/2" },
    { id: "C06-Q3", question: "$cwnd=24$ ומתקבלים שלושה ACK כפולים ב-Tahoe. מה הערכים אחרי האירוע?",
      options: [{ id: "a", value: "ssthresh = 12, cwnd = 12" }, { id: "b", value: "ssthresh = 24, cwnd = 1" }, { id: "c", value: "ssthresh = 12, cwnd = 25" }, { id: "d", value: "ssthresh = 12, cwnd = 1" }],
      correctId: "d",
      explanation: "Tahoe מתייחס לשלושה ACK כפולים כמו ל-timeout: $ssthresh=12$ ו-$cwnd=1$. ההבדל מ-Reno הוא רק ב-cwnd.",
      recap: "Tahoe: כל אובדן מחזיר ל-1" },
    { id: "C06-Q4", question: "$ssthresh=8$ ו-$cwnd=1$ בסבב 1. בסבב 8 ($cwnd=12$) מתרחש timeout. מהו $cwnd$ בסבב 13?",
      options: [{ id: "a", value: "7" }, { id: "b", value: "8" }, { id: "c", value: "13" }, { id: "d", value: "6" }],
      correctId: "a",
      explanation: "אחרי timeout $ssthresh=6$ ו-$cwnd=1$ בסבב 9. הערכים: סבב 9: 1, סבב 10: 2, סבב 11: 4, סבב 12: 6 (עוצרים על ssthresh), סבב 13: 7.",
      recap: "אחרי timeout: 1, 2, 4, עד ssthresh, ואז +1" },
    { id: "C06-Q5", question: "אותו חיבור ($ssthresh=8$, בסבב 8 החלון 12), אבל בסבב 8 מתקבלים שלושה ACK כפולים ב-Reno. מהו $cwnd$ בסבב 12?",
      options: [{ id: "a", value: "12" }, { id: "b", value: "6" }, { id: "c", value: "9" }, { id: "d", value: "7" }],
      correctId: "c",
      explanation: "$ssthresh=6$ ו-$cwnd=6$ בסבב 9, ואז Congestion Avoidance: סבב 10: 7, סבב 11: 8, סבב 12: 9.",
      recap: "Reno + 3 dup: ממשיכים ליניארית מ-W/2" },
    { id: "C06-Q6", question: "באילו תנאים TCP מקטין את חלון העומס?",
      options: [{ id: "a", value: "כשמגיע ACK מהר מהצפוי" }, { id: "b", value: "כשהקו פנוי לחלוטין" }, { id: "c", value: "כשיש אובדן: timeout או שלושה ACK כפולים" }, { id: "d", value: "כשהחבילות נשלחות מהר" }],
      correctId: "c",
      explanation: "אות העומס היחיד הוא אובדן. ACK מהיר וקו פנוי הם סימנים שהכול תקין, ושליחה מהירה היא בדיוק מה ש-TCP מנסה לעשות.",
      recap: "מקטינים חלון רק על אובדן" },
  ],
});
