/* DNS and HTTP course · level 6 - DNS hierarchy, iterative vs recursive, lookup time */
COURSE_LEVEL("app", {
  id: "C06", order: 6, icon: "🌳", title: "DNS: היררכיה, איטרטיבית ורקורסיבית",
  goal: "לתאר את מסלול חיפוש הכתובת, להבדיל בין שאילתה איטרטיבית לרקורסיבית, ולחשב זמן חיפוש.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p><b>DNS</b> מתרגם <b>שם</b> (כמו <code>www.cnn.com</code>) ל<b>כתובת IP</b>. שאילתת DNS רגילה רצה מעל <b>UDP</b> (פורט 53). המבנה היררכי:</p>
<ul>
<li><b>Root</b>: יודע לאילו שרתי TLD לפנות.</li>
<li><b>TLD</b> (למשל <code>.com</code>): יודע מי שרת ה-authoritative של הדומיין.</li>
<li><b>Authoritative</b>: יודע את כתובת ה-IP עצמה.</li>
<li><b>Resolver מקומי</b> (שרת DNS מקומי): הלקוח פונה אליו, והוא מבצע את החיפוש בשמו.</li>
</ul>
<table><thead><tr><th>רשומה</th><th>משמעות</th></tr></thead><tbody>
<tr><td>A</td><td>שם מארח אל כתובת IP</td></tr>
<tr><td>NS</td><td>דומיין אל שרת authoritative שלו</td></tr>
<tr><td>CNAME</td><td>כינוי אל השם הקנוני</td></tr>
<tr><td>MX</td><td>שרת הדואר של הדומיין</td></tr>
</tbody></table>
<h3>המסלול כשאין מטמון</h3>
<p>הלקוח שואל את ה-Resolver המקומי, וה-Resolver פונה ל-Root, אחר כך ל-TLD, ואחר כך ל-Authoritative. ה-Root וה-TLD לא מחזירים כתובת סופית אלא <b>הפניה</b> לשרת הבא. רק ה-Authoritative מחזיר את ה-IP.</p>
<h3>איטרטיבית מול רקורסיבית</h3>
<ul>
<li><b>איטרטיבית:</b> השרת אומר "אני לא יודע, פנה לשרת הזה", והשואל פונה הלאה בעצמו. ה-Resolver המקומי הוא זה ששולח את כל השאילתות, וחוזרות אליו הפניות.</li>
<li><b>רקורסיבית:</b> השרת שנשאל מבצע את העבודה <b>בשם</b> השואל, פונה בעצמו לשרת הבא, והתשובה הסופית חוזרת בשרשרת.</li>
</ul>
<div class="lesson-rule">🔑 <b>איך מזהים:</b> אם השרת שנשאל מחזיר "פנה לשרת אחר", השאילתה איטרטיבית. אם הוא פונה בעצמו לשרת הבא וממתין לתשובה, היא רקורסיבית. בדרך כלל השאילתה מהלקוח ל-Resolver המקומי היא רקורסיבית.</div>
<h3>זמן חיפוש</h3>
<p>אם כל שאילתה לשרת נמשכת $T$ והרשומה לא במטמון, ה-Resolver מבצע שלוש שאילתות עוקבות (Root, TLD, Authoritative): $3T$. אם ה-Resolver כבר מכיר את שרת ה-TLD במטמון, נשארות שתי שאילתות: $2T$.</p>
<div class="lesson-ex"><b>דוגמה:</b> $T=30\,ms$ ואין מטמון: $3\cdot30=90\,ms$. עם שרת ה-TLD ידוע: $60\,ms$.</div>
<div class="lesson-ex"><b>ספירת הודעות באיטרטיבית:</b> לקוח אל Resolver (1), Resolver ו-Root: שאילתה ותשובה (2), Resolver ו-TLD (2), Resolver ו-Authoritative (2), Resolver אל הלקוח (1): סה"כ $1+6+1=8$.</div>
<div class="lesson-trap">⚠️ <b>ה-Root אינו מחזיר כתובת סופית.</b> ו-ARP ו-DHCP אינם קשורים לציור כזה. "איטרטיבית פרסיסטנטית" אינה קיימת.</div>
` },
  questions: [
    { id: "app-C06-Q1", question: "כיצד מתבצע חיפוש כתובת ה-IP של `www.cnn.com` כשאין מידע במטמון של שרתי ה-DNS?",
      options: [
        { id: "a", value: "ה-Resolver פונה ל-Authoritative, משם ל-TLD, ומשם ל-Root, שמחזיר את הכתובת" },
        { id: "b", value: "ה-Resolver פונה ל-Root, שמפנה ל-TLD, שמפנה ל-Authoritative, שמחזיר את הכתובת" },
        { id: "c", value: "הלקוח שולח ARP ל-Resolver, והוא מחזיר את הכתובת" },
        { id: "d", value: "ה-Root מחזיר מיד את כתובת ה-IP של `www.cnn.com`" },
      ],
      correctId: "b",
      explanation: "המסלול הוא מלמעלה למטה: Root מפנה ל-TLD של `.com`, ה-TLD מפנה ל-Authoritative של `cnn.com`, והוא מחזיר את ה-IP. הסדר ההפוך שגוי, ARP מתרגם IP ל-MAC ברשת מקומית ולא שמות, וה-Root לא מחזיר כתובת סופית אלא הפניה.",
      recap: "Root, אחריו TLD, אחריו Authoritative" },
    { id: "app-C06-Q2", question: "הניחו ש-Resolver מקומי שולח שאילתה לכל אחד מ-Root, TLD ו-Authoritative **באיטרטיבית** (כל שרת מחזיר הפניה או את התשובה), והלקוח שואל את ה-Resolver. סופרים כל שאילתה וכל תשובה, כולל השאילתה מהלקוח והתשובה אליו. כמה הודעות בסך הכול?",
      options: [
        { id: "a", value: "8" }, { id: "b", value: "6" }, { id: "c", value: "4" }, { id: "d", value: "10" },
      ],
      correctId: "a",
      explanation: "הלקוח שואל את ה-Resolver (1), שלושה שרתים כל אחד שאילתה ותשובה ($3\\cdot2=6$), והתשובה חוזרת ללקוח (1): $1+6+1=8$. הערך 6 סופר רק את המהלך בין ה-Resolver לשרתים, הערך 4 סופר רק שאילתות (או רק תשובות), והערך 10 מוסיף הודעות שלא קיימות.",
      recap: "איטרטיבית: 1 + 2·3 + 1 = 8 הודעות" },
    { id: "app-C06-Q3", question: "ה-Resolver המקומי שלח שאילתה ל-Root וקיבל תשובה: \"אני לא יודע את הכתובת, פנה לשרת ה-TLD הזה\". אחר כך ה-Resolver עצמו פנה לשרת ה-TLD. איזו שאילתה זו מול ה-Root?",
      options: [
        { id: "a", value: "רקורסיבית" },
        { id: "b", value: "שאילתת ARP" },
        { id: "c", value: "איטרטיבית" },
        { id: "d", value: "שאילתת DHCP" },
      ],
      correctId: "c",
      explanation: "ה-Root החזיר הפניה והשואל פנה הלאה בעצמו: זו שאילתה איטרטיבית. בשאילתה רקורסיבית ה-Root עצמו היה פונה ל-TLD ומחזיר רק את התשובה הסופית. ARP ו-DHCP אינם פרוטוקולי חיפוש שמות.",
      recap: "הפניה בחזרה לשואל = איטרטיבית" },
    { id: "app-C06-Q4", question: "הלקוח שואל את ה-Resolver המקומי, וה-Resolver שולח שאילתה אחת ל-Root וממתין. ה-Root פונה בעצמו ל-TLD, ה-TLD פונה ל-Authoritative, והתשובה הסופית חוזרת בשרשרת עד ה-Resolver. איך מתאר זאת הציור?",
      options: [
        { id: "a", value: "שאילתה איטרטיבית" },
        { id: "b", value: "שאילתה רקורסיבית" },
        { id: "c", value: "שאילתה איטרטיבית פרסיסטנטית" },
        { id: "d", value: "תהליך ARP" },
      ],
      correctId: "b",
      explanation: "כל שרת מבצע את העבודה בשם השואל ופונה בעצמו לשרת הבא, והתשובה הסופית חוזרת בשרשרת: זו שאילתה רקורסיבית. \"איטרטיבית פרסיסטנטית\" אינה קיימת, ו-ARP אינו קשור.",
      recap: "השרת פונה בעצמו לשרת הבא = רקורסיבית" },
    { id: "app-C06-Q5", question: "שרת DNS מגיב תוך $25\\ ms$ לכל שאילתה. ה-Resolver לא מכיר כתובת של האתר, אבל במטמון שלו כבר יש את שרת ה-TLD של `.com`. כמה זמן לוקח לו למצוא את הכתובת (שאילתות ל-TLD ול-Authoritative בלבד)?",
      options: [
        { id: "a", value: "75 ms" }, { id: "b", value: "25 ms" }, { id: "c", value: "50 ms" }, { id: "d", value: "100 ms" },
      ],
      correctId: "c",
      explanation: "נשארו שתי שאילתות עוקבות (TLD ו-Authoritative): $2\\cdot25=50$ ms. הערך 75 הוא שלוש שאילתות ללא מטמון, הערך 25 הוא שאילתה אחת, והערך 100 הוא ארבע שאילתות.",
      recap: "זמן חיפוש = מספר השאילתות העוקבות × T" },
    { id: "app-C06-Q6", question: "איזו רשומת DNS מגדירה שם נוסף (כינוי) שמפנה לשם הקנוני של מארח?",
      options: [
        { id: "a", value: "A" }, { id: "b", value: "MX" }, { id: "c", value: "NS" }, { id: "d", value: "CNAME" },
      ],
      correctId: "d",
      explanation: "CNAME ממפה כינוי לשם הקנוני. רשומת A ממפה שם לכתובת IP, NS מפנה דומיין לשרת ה-authoritative שלו, ו-MX מציינת את שרת הדואר.",
      recap: "CNAME = כינוי, A = שם ל-IP, NS = שרת authoritative" },
  ],
});
