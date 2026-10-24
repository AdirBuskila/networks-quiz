/* TCP course, level 4 - flow control (rwnd) versus congestion control, effective window */
COURSE_LEVEL("tcp", {
  id: "C04", order: 4, icon: "🚰", title: "בקרת זרימה: חלון המקבל rwnd",
  goal: "להבדיל בין בקרת זרימה לבקרת עומס, ולחשב כמה השולח רשאי לשלוח.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>ל-TCP שני מנגנונים נפרדים שמגבילים את השולח, ולכל אחד יש חלון משלו:</p>
    <table><thead><tr><th>מנגנון</th><th>מגן על</th><th>חלון</th></tr></thead>
    <tbody>
    <tr><td><b>בקרת זרימה</b> (flow control)</td><td>המקבל, שלא יוצף</td><td>$rwnd$: המקום הפנוי במאגר המקבל, והמקבל מפרסם אותו</td></tr>
    <tr><td><b>בקרת עומס</b> (congestion control)</td><td>הרשת: נתבים ומתגים</td><td>$cwnd$: השולח קובע לפי אובדן שהוא רואה</td></tr>
    </tbody></table>
    <div class="lesson-rule">🔑 השולח רשאי להחזיק באוויר (שלח ועדיין לא קיבל אישור) לכל היותר $\min(cwnd,\,rwnd)$.</div>
    <div class="lesson-ex">אם $rwnd=8$ סגמנטים ו-$cwnd=20$, אפשר לשלוח 8. אם $rwnd=30$ ו-$cwnd=12$, אפשר לשלוח 12. תמיד הקטן מבין השניים.</div>
    <p><b>גודל החלון</b> קובע כמה נתונים אפשר לשלוח לפני שמגיע אישור. חלון גדול מנצל את הקו טוב יותר. הקצב המשוער הוא $\dfrac{cwnd\cdot MSS}{RTT}$, כאשר $MSS$ הוא גודל סגמנט בבתים. כדי לקבל ביטים כופלים ב-8.</p>
    <div class="lesson-ex">$cwnd=20$ סגמנטים, $MSS=1460$ בתים, $RTT=100\,ms$: $\dfrac{20\cdot1460\cdot8}{0.1}=2{,}336{,}000$ ביטים בשנייה, כלומר $2.336\,Mbps$.</div>
    <div class="lesson-trap">⚠️ בקרת זרימה לא נועדה להגן על נתבים. את זה עושה בקרת עומס. ול-UDP אין שום אחד מהשניים: הוא שולח בלי להתחשב במקבל.</div>` },
  questions: [
    { id: "C04-Q1", question: "את מי מגנה בקרת הזרימה (flow control) של TCP?",
      options: [{ id: "a", value: "את הנתבים בדרך" }, { id: "b", value: "את המקבל מפני הצפה" }, { id: "c", value: "את המתגים ברשת" }, { id: "d", value: "את השולח מפני אובדן" }],
      correctId: "b",
      explanation: "המקבל מפרסם rwnd שאומר כמה מקום פנוי יש לו, והשולח לא עובר אותו. נתבים ומתגים מוגנים על ידי בקרת עומס.",
      recap: "בקרת זרימה = הגנה על המקבל" },
    { id: "C04-Q2", question: "$rwnd=8$ סגמנטים ו-$cwnd=20$ סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      options: [{ id: "a", value: "20" }, { id: "b", value: "28" }, { id: "c", value: "12" }, { id: "d", value: "8" }],
      correctId: "d",
      explanation: "הגבלה היא $\\min(20,8)=8$. המקבל לא יכול לקלוט יותר מ-8, גם אם הרשת מאפשרת 20.",
      recap: "חלון אפקטיבי = min(cwnd, rwnd)" },
    { id: "C04-Q3", question: "$rwnd=30$ סגמנטים ו-$cwnd=12$ סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      options: [{ id: "a", value: "12" }, { id: "b", value: "30" }, { id: "c", value: "42" }, { id: "d", value: "18" }],
      correctId: "a",
      explanation: "$\\min(12,30)=12$. הפעם הרשת היא ההגבלה, והמקבל פנוי. הסכום 42 והפרש 18 אינם משמעותיים.",
      recap: "תמיד לוקחים את הקטן" },
    { id: "C04-Q4", question: "$cwnd=20$ סגמנטים, כל סגמנט 1460 בתים, ו-$RTT=100\\,ms$. מהו הקצב המשוער $\\dfrac{cwnd\\cdot MSS}{RTT}$ ?",
      options: [{ id: "a", value: "292 Kbps" }, { id: "b", value: "29.2 Mbps" }, { id: "c", value: "2.336 Mbps" }, { id: "d", value: "233.6 Kbps" }],
      correctId: "c",
      explanation: "$20\\cdot1460\\cdot8=233{,}600$ ביטים בחלון, וחלקי $0.1$ שנייה נותן $2{,}336{,}000$ ביטים בשנייה. התשובה 233.6 Kbps שוכחת לחלק ב-RTT (מחלקים ב-0.1 ולא מכפילים).",
      recap: "קצב = cwnd כפול MSS בביטים, חלקי RTT" },
    { id: "C04-Q5", question: "האם ל-UDP יש בקרת זרימה?",
      options: [{ id: "a", value: "כן, בדיוק כמו ב-TCP" }, { id: "b", value: "כן, אבל רק בקרת עומס" }, { id: "c", value: "לא, הוא שולח בלי לבדוק את המקבל" }, { id: "d", value: "כן, אם הסגמנט גדול מ-MTU" }],
      correctId: "c",
      explanation: "UDP הוא פרוטוקול פשוט: אין אישורים, אין חלון ואין בקרת זרימה או עומס.",
      recap: "ל-UDP אין בקרת זרימה" },
    { id: "C04-Q6", question: "מה מגינה עליו בקרת העומס (congestion control)?",
      options: [{ id: "a", value: "על מאגר המקבל בלבד" }, { id: "b", value: "על הרשת, כלומר נתבים ומתגים" }, { id: "c", value: "על הפורט של התהליך" }, { id: "d", value: "על כתובת ה-IP" }],
      correctId: "b",
      explanation: "בקרת עומס מונעת העמסה על נתבים ומתגים ברשת. המקבל מוגן על ידי בקרת זרימה, ופורטים וכתובות אינם קשורים לכך.",
      recap: "בקרת עומס = הגנה על הרשת" },
  ],
});
