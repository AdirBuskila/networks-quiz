/* TCP course, level 5 - slow start, congestion avoidance and ssthresh */
COURSE_LEVEL("tcp", {
  id: "C05", order: 5, icon: "📈", title: "Slow Start ו-Congestion Avoidance",
  goal: "לחשב את cwnd בכל סבב (RTT) כש-ssthresh נתון, ולדעת באיזה שלב נמצאים.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>בקרת העומס מגבילה את השולח ל-$cwnd$, מספר הסגמנטים שמותר להחזיק באוויר. מודדים אותו ביחידות של $MSS$ (סגמנט אחד), ובודקים אותו אחת לסבב (<b>RTT</b>): בכל סבב שולחים חלון שלם ומחכים לאישורים.</p>
    <p>יש שני שלבים, והסף ביניהם הוא <b>$ssthresh$</b> (slow-start threshold):</p>
    <table><thead><tr><th>שלב</th><th>מתי</th><th>מה קורה לכל סבב</th></tr></thead>
    <tbody>
    <tr><td><b>Slow Start</b></td><td>$cwnd \lt ssthresh$. התחלה: $cwnd=1$</td><td>החלון <b>מוכפל</b>: $1,2,4,8,16,\dots$ (גידול מעריכי)</td></tr>
    <tr><td><b>Congestion Avoidance</b></td><td>$cwnd\ge ssthresh$</td><td>החלון גדל ב-<b>1</b> בלבד (גידול ליניארי)</td></tr>
    </tbody></table>
    <div class="lesson-rule">🔑 ב-Slow Start מכפילים, אבל לא עוברים את $ssthresh$: אם ההכפלה הייתה עוברת אותו, עוצרים בדיוק עליו וממשיכים ליניארית.</div>
    <div class="lesson-ex">$ssthresh=16$: הערכים בסבבים 1 עד 8 הם $1,2,4,8,16,17,18,19$. עם $ssthresh=12$: $1,2,4,8,12,13,14$ (במקום 16 עוצרים ב-12).</div>
    <p>למה מתחילים לאט? כדי לא להציף את הרשת בבת אחת, ובכל זאת להגיע מהר (מעריכית) לקצב שהרשת נושאת. זה "מנגנון Slow Start".</p>
    <div class="lesson-trap">⚠️ השם "Slow" מטעה: זה גידול מהיר (מעריכי). האיטי הוא Congestion Avoidance (+1 בכל סבב).</div>` },
  questions: [
    { id: "C05-Q1", question: "החיבור מתחיל עם $cwnd=1$ בסבב 1 ו-$ssthresh$ גדול מאוד. מהו $cwnd$ בסבב 5?",
      options: [{ id: "a", value: "5" }, { id: "b", value: "8" }, { id: "c", value: "16" }, { id: "d", value: "32" }],
      correctId: "c",
      explanation: "ב-Slow Start מכפילים בכל סבב: 1, 2, 4, 8, 16. בסבב 5 הערך הוא 16. התשובה 5 היא גידול ליניארי, ו-32 שייך לסבב 6.",
      recap: "Slow Start: 1, 2, 4, 8, 16, 32" },
    { id: "C05-Q2", question: "$ssthresh=16$ ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 8?",
      options: [{ id: "a", value: "19" }, { id: "b", value: "128" }, { id: "c", value: "16" }, { id: "d", value: "20" }],
      correctId: "a",
      explanation: "הערכים הם 1, 2, 4, 8, 16 (סבבים 1 עד 5), ואז Congestion Avoidance: 17, 18, 19 בסבבים 6, 7, 8. התשובה 128 ממשיכה להכפיל, ו-16 הוא ערך סבב 5.",
      recap: "אחרי ssthresh מוסיפים 1 לסבב" },
    { id: "C05-Q3", question: "$ssthresh=12$ ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 7?",
      options: [{ id: "a", value: "14" }, { id: "b", value: "64" }, { id: "c", value: "13" }, { id: "d", value: "16" }],
      correctId: "a",
      explanation: "1, 2, 4, 8 ואז ההכפלה הייתה נותנת 16 שעובר את 12, לכן עוצרים ב-12 (סבב 5). אחר כך 13 בסבב 6 ו-14 בסבב 7.",
      recap: "ההכפלה נעצרת על ssthresh" },
    { id: "C05-Q4", question: "$ssthresh=16$ ו-$cwnd=20$ בסבב הנוכחי, בלי אובדן. באיזה שלב TCP נמצא, ומה יהיה $cwnd$ בסבב הבא?",
      options: [{ id: "a", value: "Slow Start, חלון 40" }, { id: "b", value: "Congestion Avoidance, חלון 21" }, { id: "c", value: "Slow Start, חלון 21" }, { id: "d", value: "Congestion Avoidance, חלון 40" }],
      correctId: "b",
      explanation: "כש-$cwnd\\ge ssthresh$ (20 מול 16) נמצאים ב-Congestion Avoidance, וגדלים ב-1: 21. הכפלה ל-40 הייתה נכונה רק ב-Slow Start.",
      recap: "cwnd ≥ ssthresh: מוסיפים 1" },
    { id: "C05-Q5", question: "מהי מטרת מנגנון ה-Slow Start?",
      options: [{ id: "a", value: "להשאיר את החלון קבוע בכל החיבור" }, { id: "b", value: "להגדיל את החלון בהדרגה, כדי לא להציף את הרשת בבת אחת, אך עדיין להגיע מהר לקצב סביר" }, { id: "c", value: "להבטיח שאף חבילה לא תאבד" }, { id: "d", value: "להקטין את החלון ל-1 בכל סבב" }],
      correctId: "b",
      explanation: "מתחילים קטן ומכפילים, כך שמגיעים מהר לקצב הרשת בלי קפיצה מיידית לקצב המרבי. הוא לא מבטיח היעדר אובדן והחלון לא קבוע.",
      recap: "Slow Start: התחלה זהירה, גידול מעריכי" },
    { id: "C05-Q6", question: "$ssthresh$ גדול מאוד, ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 10?",
      options: [{ id: "a", value: "10" }, { id: "b", value: "100" }, { id: "c", value: "1024" }, { id: "d", value: "512" }],
      correctId: "d",
      explanation: "בסבב $n$ הערך הוא $2^{n-1}$, ולכן בסבב 10 הערך הוא $2^9=512$. התשובה 1024 היא $2^{10}$, כלומר סבב 11.",
      recap: "בסבב n ב-Slow Start: 2 בחזקת n-1" },
  ],
});
