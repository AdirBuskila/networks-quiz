/* TCP course, level 8 - boss: real exam questions */
COURSE_LEVEL("tcp", {
  id: "C08", order: 8, icon: "🏆", title: "אתגר המבחן: TCP",
  goal: "לפתור שאלות TCP אמיתיות מהמבחנים: לחיצת יד, רצף ACK, גרפי cwnd ובקרת זרימה.",
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>שאלות אמיתיות ממבחנים. חמש מהן משתמשות בכלים שלמדת בשלבים הקודמים, ובכל אחת צריך לזהות קודם איזה כלי מתאים.</p>
    <table><thead><tr><th>אם השאלה על...</th><th>הכלי</th></tr></thead>
    <tbody>
    <tr><td>לחיצת יד, ערכי seq ו-ack</td><td>ה-SYN צורך מספר: $x+1$ ו-$y+1$ (שלב 1)</td></tr>
    <tr><td>רצף ACK עם קטע שאבד</td><td>ACK על הבית החסר, ואז קפיצה לסוף הרצף (שלבים 2 ו-3)</td></tr>
    <tr><td>גרף cwnd</td><td>הכפלה היא Slow Start, שינוי שיפוע הוא כניסה ל-CA (שלב 7)</td></tr>
    <tr><td>מתי מקטינים חלון</td><td>רק על אובדן (שלב 6)</td></tr>
    <tr><td>בקרת זרימה</td><td>מגינה על המקבל, לא על נתבים (שלב 4)</td></tr>
    </tbody></table>
    <div class="lesson-rule">🔑 בגרף סכמטי קוראים את השיפוע, לא מחשבים $ssthresh$ מדויק.</div>` },
  questions: [
    { bankId: "22S-A-Q14", recap: "ack=x+1 בהודעה 2, ובהודעה 3 seq=x+1 ו-ack=y+1" },
    { bankId: "25A-B-Q2", recap: "קטע חסר: ACK כפול על הבית החסר, ואז קפיצה לסוף" },
    { bankId: "SAMP-1-Q14", recap: "Slow Start: מההתחלה ואחרי כל צניחה ל-1" },
    { bankId: "26A-A-Q6", recap: "כניסה ל-CA היא נקודת שינוי השיפוע" },
    { bankId: "25A-C-Q7", recap: "מקטינים חלון רק על אובדן (timeout)" },
    { bankId: "23A-A-Q20", recap: "בקרת זרימה מגינה על המקבל" },
  ],
});
