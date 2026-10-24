/* TCP course, level 1 - the three-way handshake */
COURSE_LEVEL("tcp", {
  id: "C01", order: 1, icon: "🤝", title: "לחיצת יד תלת-שלבית",
  goal: "לדעת איזו הודעה פותחת חיבור TCP ולחשב את ערכי seq ו-ack בשלוש ההודעות.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`
    <p>לפני ששולחים נתונים, TCP מקים <b>חיבור</b> בין שני הצדדים. ההקמה נקראת <b>לחיצת יד תלת-שלבית</b> (3-way handshake) והיא כוללת בדיוק שלוש הודעות.</p>
    <p>בכל הודעה יש <b>דגלים</b> (<code>SYN</code>, <code>ACK</code>, <code>FIN</code>, <code>RST</code>) ושני מספרים: <b>seq</b> (מספר סידורי של ההודעה) ו-<b>ack</b> (מספר הבית שהשולח מצפה לקבל הלאה). הלקוח בוחר מספר התחלתי $x$, והשרת בוחר מספר התחלתי משלו $y$.</p>
    <table><thead><tr><th>#</th><th>מי שולח</th><th>דגלים</th><th>seq</th><th>ack</th></tr></thead>
    <tbody>
    <tr><td>1</td><td>לקוח</td><td><code>SYN</code></td><td>$x$</td><td>אין</td></tr>
    <tr><td>2</td><td>שרת</td><td><code>SYN+ACK</code></td><td>$y$</td><td>$x+1$</td></tr>
    <tr><td>3</td><td>לקוח</td><td><code>ACK</code></td><td>$x+1$</td><td>$y+1$</td></tr>
    </tbody></table>
    <div class="lesson-rule">🔑 ההודעה הראשונה בחיבור היא תמיד <code>SYN</code>. <code>FIN</code> סוגר חיבור, ו-<code>RST</code> מאפס אותו.</div>
    <div class="lesson-rule">🔑 הדגל <code>SYN</code> <b>צורך מספר סידורי אחד</b>, ולכן האישור עליו הוא $x+1$ ולא $x$. כך גם ה-<code>SYN</code> של השרת: האישור עליו הוא $y+1$.</div>
    <div class="lesson-ex">דוגמה: הלקוח שולח <code>SYN</code> עם $seq=1000$. השרת בוחר $y=5000$ ועונה $seq=5000$, $ack=1001$. הלקוח מסיים עם $seq=1001$, $ack=5001$.</div>
    <div class="lesson-trap">⚠️ טעות נפוצה: לכתוב $ack=x$. האישור הוא על הבית <b>הבא</b> שמצפים לו, ו-<code>SYN</code> נחשב לבית אחד.</div>` },
  questions: [
    { id: "C01-Q1", question: "מהי ההודעה הראשונה שנשלחת בהקמת חיבור TCP?",
      options: [{ id: "a", value: "ACK" }, { id: "b", value: "FIN" }, { id: "c", value: "SYN" }, { id: "d", value: "RST" }],
      correctId: "c",
      explanation: "החיבור נפתח ב-SYN של הלקוח. ACK מופיע רק כאישור למשהו שכבר נשלח, FIN סוגר חיבור קיים ו-RST מאפס אותו.",
      recap: "הודעה ראשונה בחיבור: SYN" },
    { id: "C01-Q2", question: "הלקוח שולח SYN עם $seq=1000$. מהו ערך ה-ack בהודעת ה-SYN+ACK של השרת?",
      options: [{ id: "a", value: "1000" }, { id: "b", value: "999" }, { id: "c", value: "1002" }, { id: "d", value: "1001" }],
      correctId: "d",
      explanation: "ה-SYN צורך מספר אחד, לכן השרת מצפה לבית 1001. התשובה 1000 שוכחת שה-SYN צורך מספר, 999 הפוכה, ו-1002 מוסיפה יותר מדי.",
      recap: "ack של SYN+ACK הוא x+1" },
    { id: "C01-Q3", question: "הלקוח שלח SYN עם $seq=1000$, והשרת ענה SYN+ACK עם $seq=5000$. מהם seq ו-ack בהודעה השלישית של הלקוח?",
      options: [{ id: "a", value: "seq = 1001, ack = 5001" }, { id: "b", value: "seq = 1000, ack = 5000" }, { id: "c", value: "seq = 5001, ack = 1001" }, { id: "d", value: "seq = 1001, ack = 5000" }],
      correctId: "a",
      explanation: "ה-seq של הלקוח מתקדם ב-1 בגלל ה-SYN שלו (1001), וה-ack מאשר את ה-SYN של השרת (5000+1=5001). באפשרות \"seq = 5001, ack = 1001\" הצדדים מוחלפים, ובאפשרות \"seq = 1001, ack = 5000\" ה-ack לא התקדם.",
      recap: "הודעה 3: seq=x+1 ו-ack=y+1" },
    { id: "C01-Q4", question: "איזה דגלים מופיעים בהודעה השנייה של לחיצת היד (מהשרת ללקוח)?",
      options: [{ id: "a", value: "SYN בלבד" }, { id: "b", value: "SYN ו-ACK יחד" }, { id: "c", value: "ACK בלבד" }, { id: "d", value: "FIN ו-ACK" }],
      correctId: "b",
      explanation: "השרת גם מאשר את ה-SYN של הלקוח (ACK) וגם פותח את הכיוון שלו עם SYN משלו, לכן שני הדגלים באותה הודעה.",
      recap: "הודעה 2: SYN+ACK" },
    { id: "C01-Q5", question: "בלחיצת יד הלקוח שולח SYN עם $seq=200$ והשרת בוחר $X=7000$. מה הערכים של ack בהודעה 2, seq בהודעה 3 ו-ack בהודעה 3, לפי הסדר?",
      options: [{ id: "a", value: "201, 200, 7000" }, { id: "b", value: "200, 201, 7001" }, { id: "c", value: "201, 201, 7001" }, { id: "d", value: "201, 201, 7000" }],
      correctId: "c",
      explanation: "הודעה 2: ack = 200+1 = 201. הודעה 3: seq = 201 (ה-SYN הראשון נספר) ו-ack = 7000+1 = 7001. בכל שאר האפשרויות לפחות מספר אחד לא הוגדל באחד.",
      recap: "כל SYN מקדם את המספר שלו ב-1" },
    { id: "C01-Q6", question: "מה תפקיד הדגל FIN?",
      options: [{ id: "a", value: "לסגור חיבור בצורה מסודרת" }, { id: "b", value: "לפתוח חיבור חדש" }, { id: "c", value: "לאשר קבלת נתונים" }, { id: "d", value: "לבקש מהצד השני לשלוח מהר יותר" }],
      correctId: "a",
      explanation: "FIN מסמן שהצד השולח סיים לשלוח, וכך סוגרים חיבור. פתיחה היא SYN, ואישור הוא ACK.",
      recap: "FIN סוגר, SYN פותח, RST מאפס" },
  ],
});
