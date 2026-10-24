/* TCP course, level 7 - reading a cwnd graph (values listed as a series, since exam graphs are schematic) */
COURSE_LEVEL("tcp", {
  id: "C07", order: 7, icon: "📊", title: "קריאת גרף cwnd",
  goal: "לקרוא סדרת cwnd או גרף: איפה Slow Start, איפה Congestion Avoidance, ואיזה אובדן קרה.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>בגרף cwnd ציר $x$ הוא הסבב (RTT) וציר $y$ הוא גודל החלון. כל סבב הוא נקודה אחת. קוראים אותו בעזרת ארבעה כללים:</p>
    <ol>
    <li><b>Slow Start</b> הוא קטע שבו הערך <b>מוכפל</b> בכל סבב: $1,2,4,8,16$. הוא מתחיל בסבב 1 ואחרי כל timeout.</li>
    <li><b>Congestion Avoidance</b> הוא קטע ישר עולה, $+1$ בכל סבב. נקודת הכניסה אליו היא נקודת <b>שינוי השיפוע</b>: הנקודה האחרונה של ההכפלה.</li>
    <li>צניחה <b>לחצי</b> היא שלושה ACK כפולים (Reno), והחלון ממשיך ליניארית מהערך החדש.</li>
    <li>צניחה <b>ל-1</b> היא timeout, ושוב Slow Start.</li>
    </ol>
    <p>דוגמה: הנה סדרת cwnd לסבבים 1 עד 19.</p>
    <table><thead><tr><th>סבבים</th><th>ערכי cwnd</th><th>מה קורה</th></tr></thead>
    <tbody>
    <tr><td>1 עד 5</td><td>1, 2, 4, 8, 16</td><td>Slow Start</td></tr>
    <tr><td>5 עד 9</td><td>16, 17, 18, 19, 20</td><td>Congestion Avoidance (שינוי שיפוע בסבב 5)</td></tr>
    <tr><td>10 עד 13</td><td>10, 11, 12, 13</td><td>ירידה מ-20 ל-10: 3 ACK כפולים, ממשיכים ליניארית</td></tr>
    <tr><td>14 עד 17</td><td>1, 2, 4, 6</td><td>ירידה מ-13 ל-1: timeout, Slow Start עד $ssthresh=6$</td></tr>
    <tr><td>17 עד 19</td><td>6, 7, 8</td><td>Congestion Avoidance (שינוי שיפוע בסבב 17)</td></tr>
    </tbody></table>
    <div class="calc-fig" data-calc='{"kind": "tcp", "rounds": 19, "init": 1, "ssthresh": 16, "variant": "reno", "events": "9:3dup, 13:timeout", "caption": "אותה סדרה במחשבון: אפשר לשנות את האירועים ואת Tahoe או Reno"}'></div>
    <div class="lesson-rule">🔑 בשאלות "באילו סבבים פועל Slow Start" כוללים את הסבב הראשון ואת הסבב שאחרי כל צניחה ל-1, עד הנקודה שבה מסתיימת ההכפלה. כאן: $[1,5]$ ו-$[14,17]$.</div>
    <div class="lesson-trap">⚠️ הגרפים בבחינה סכמטיים: אין לחשב $ssthresh$ מדויק של Reno. קוראים את שינוי השיפוע, ובשאלה על "כניסה ל-Congestion Avoidance" מחפשים היכן ההכפלה נגמרת, לא היכן יש שיא או צניחה.</div>` },
  questions: [
    { id: "C07-Q1", question: "ערכי $cwnd$ בסבבים 1 עד 19 הם: 1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8. באילו קטעי סבבים פועל Slow Start?",
      options: [{ id: "a", value: "[1, 5] ו-[14, 17]" }, { id: "b", value: "[1, 9] בלבד" }, { id: "c", value: "[5, 9] ו-[10, 13]" }, { id: "d", value: "[1, 5], [10, 13] ו-[14, 17]" }],
      correctId: "a",
      explanation: "Slow Start הוא הכפלה: בסבבים 1 עד 5 (1, 2, 4, 8, 16), ואחרי ה-timeout בסבבים 14 עד 17 (1, 2, 4, 6). הקטעים 5 עד 9 ו-10 עד 13 הם עלייה ב-1, כלומר Congestion Avoidance.",
      recap: "Slow Start: מההתחלה ואחרי כל צניחה ל-1" },
    { id: "C07-Q2", question: "באותה סדרה (1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8), בין סבב 9 לסבב 10 החלון יורד מ-20 ל-10. איזה אירוע זה?",
      options: [{ id: "a", value: "timeout" }, { id: "b", value: "שלושה ACK כפולים" }, { id: "c", value: "סיום Slow Start" }, { id: "d", value: "הגדלה של rwnd" }],
      correctId: "b",
      explanation: "ירידה לחצי (20 ל-10) ומשם המשך ליניארי היא שלושה ACK כפולים ב-Reno. timeout היה מוריד ל-1.",
      recap: "ירידה לחצי: 3 ACK כפולים" },
    { id: "C07-Q3", question: "באותה סדרה, בסבב 13 החלון הוא 13 ובסבב 14 הוא 1. מהו $ssthresh$ שנקבע בעקבות האירוע?",
      options: [{ id: "a", value: "1" }, { id: "b", value: "13" }, { id: "c", value: "6" }, { id: "d", value: "7" }],
      correctId: "c",
      explanation: "ירידה ל-1 היא timeout, ו-$ssthresh=\\lfloor13/2\\rfloor=6$. זה מתאשר בסדרה: ההכפלה 1, 2, 4 נעצרת על 6 ואז 7, 8.",
      recap: "ssthresh = חצי מהחלון בזמן האובדן" },
    { id: "C07-Q4", question: "באותה סדרה, באילו סבבים נכנסים ל-Congestion Avoidance מתוך Slow Start (שינוי שיפוע מהכפלה לעלייה ב-1)?",
      options: [{ id: "a", value: "1 ו-14" }, { id: "b", value: "5 ו-17" }, { id: "c", value: "9 ו-13" }, { id: "d", value: "5, 10 ו-13" }],
      correctId: "b",
      explanation: "שינוי השיפוע קורה בסבב 5 (16 ואז 17) ובסבב 17 (6 ואז 7). הסבבים 1 ו-14 הם תחילת Slow Start, והסבבים 9 ו-13 הם שיאים לפני אובדן. סבב 10 הוא המשך Congestion Avoidance, לא כניסה אליו מ-Slow Start.",
      recap: "כניסה ל-CA: נקודת שינוי השיפוע" },
    { id: "C07-Q5", question: "באותה סדרה, מהו $cwnd$ בסבב 18?",
      options: [{ id: "a", value: "7" }, { id: "b", value: "8" }, { id: "c", value: "6" }, { id: "d", value: "14" }],
      correctId: "a",
      explanation: "בסבב 17 החלון 6, ואז Congestion Avoidance מוסיף 1: סבב 18 הוא 7 וסבב 19 הוא 8.",
      recap: "אחרי כניסה ל-CA: +1 לסבב" },
    { id: "C07-Q6", question: "באותה סדרה, אילו האירוע בין סבב 9 לסבב 10 היה שלושה ACK כפולים ב-Tahoe (במקום ב-Reno), מהו $cwnd$ בסבב 10?",
      options: [{ id: "a", value: "10" }, { id: "b", value: "1" }, { id: "c", value: "20" }, { id: "d", value: "11" }],
      correctId: "b",
      explanation: "Tahoe מחזיר ל-1 גם על שלושה ACK כפולים, ולכן $cwnd=1$ בסבב 10 ו-$ssthresh=10$. ב-Reno הערך היה 10.",
      recap: "Tahoe תמיד ל-1" },
  ],
});
