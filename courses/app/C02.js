/* DNS and HTTP course · level 2 - non-persistent vs persistent vs pipelining: counting RTTs */
COURSE_LEVEL("app", {
  id: "C02", order: 2, icon: "🔁", title: "חיבורים וספירת RTT",
  goal: "לספור כמה סבבי RTT דרושים לטעינת דף עם N אובייקטים ב-non-persistent, ב-persistent וב-pipelining.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p><b>RTT</b> הוא זמן הלוך-חזור בין הלקוח לשרת. בשלב הזה מזניחים את זמן השידור ורק סופרים סבבי RTT. דף כולל <b>אובייקט בסיס</b> (קובץ ה-HTML) ו-$N$ אובייקטים שהוא מפנה אליהם (תמונות וכדומה), כולם על אותו שרת.</p>
<ul>
<li><b>Non-persistent (HTTP 1.0):</b> חיבור TCP חדש לכל אובייקט. כל אובייקט עולה $2$ סבבי RTT: אחד לפתיחת החיבור ואחד לבקשה ולתשובה.</li>
<li><b>Persistent (HTTP/1.1) בלי pipelining:</b> החיבור נשאר פתוח. פותחים אותו פעם אחת ($1$ RTT), ואז כל אובייקט עולה $1$ RTT, בזה אחר זה.</li>
<li><b>Persistent עם pipelining:</b> אחרי שהדף הגיע, שולחים את כל הבקשות לתמונות ברצף, ולכולן יחד עולה בערך $1$ RTT.</li>
</ul>
<table><thead><tr><th>מצב</th><th>סה"כ RTT לדף עם $N$ תמונות</th></tr></thead><tbody>
<tr><td>Non-persistent</td><td>$2(N+1)$</td></tr>
<tr><td>Persistent בלי pipelining</td><td>$1+(N+1)=N+2$</td></tr>
<tr><td>Persistent עם pipelining</td><td>$1+1+1=3$</td></tr>
</tbody></table>
<div class="lesson-ex"><b>דוגמה:</b> דף עם 3 תמונות הוא 4 אובייקטים. Non-persistent: $2\cdot4=8$ RTT. Persistent בלי pipelining: $1+4=5$ RTT. עם pipelining: חיבור, דף, וסבב אחד לכל התמונות: $3$ RTT.</div>
<div class="lesson-rule">🔑 <b>הבעיה ב-HTTP 1.0:</b> חיבור חדש לכל אובייקט, ולכן בכל אובייקט משלמים עוד RTT על לחיצת היד של TCP (ובנוסף כל חיבור מתחיל Slow Start מחדש).</div>
<div class="lesson-trap">⚠️ <b>אל תשכחו את אובייקט הבסיס ואת פתיחת החיבור.</b> דף עם $N$ תמונות הוא $N+1$ אובייקטים. ושימו לב: חיבור persistent אחד יכול לשרת כמה דפים שונים מאותו שרת.</div>
` },
  questions: [
    { id: "app-C02-Q1", question: "דף כולל קובץ HTML ו-4 תמונות, הכול מאותו שרת. HTTP **non-persistent**, מזניחים זמן שידור. כמה סבבי RTT דרושים לטעינת הדף?",
      options: [
        { id: "a", value: "10 RTT" }, { id: "b", value: "6 RTT" }, { id: "c", value: "5 RTT" }, { id: "d", value: "3 RTT" },
      ],
      correctId: "a",
      explanation: "יש 5 אובייקטים (HTML ועוד 4 תמונות), ולכל אחד חיבור חדש: $2$ RTT, כלומר $2\\cdot5=10$. הערך 6 הוא persistent בלי pipelining, הערך 5 שוכח את ה-RTT של פתיחת החיבור, והערך 3 הוא pipelining.",
      recap: "non-persistent: 2 RTT לכל אובייקט" },
    { id: "app-C02-Q2", question: "דף כולל קובץ HTML ו-6 תמונות, הכול מאותו שרת. HTTP/1.1 **persistent בלי pipelining**, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      options: [
        { id: "a", value: "14 RTT" }, { id: "b", value: "7 RTT" }, { id: "c", value: "3 RTT" }, { id: "d", value: "8 RTT" },
      ],
      correctId: "d",
      explanation: "RTT אחד לפתיחת החיבור, ואז RTT אחד לכל אחד מ-7 האובייקטים: $1+7=8$. הערך 14 הוא non-persistent, הערך 7 שוכח את פתיחת החיבור, והערך 3 הוא pipelining.",
      recap: "persistent בלי pipelining: 1 + (N+1)" },
    { id: "app-C02-Q3", question: "דף כולל קובץ HTML ו-9 תמונות, הכול מאותו שרת. HTTP/1.1 **persistent עם pipelining**, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      options: [
        { id: "a", value: "20 RTT" }, { id: "b", value: "11 RTT" }, { id: "c", value: "3 RTT" }, { id: "d", value: "2 RTT" },
      ],
      correctId: "c",
      explanation: "RTT אחד לפתיחת החיבור, RTT אחד לבקשת הדף, ו-RTT אחד נוסף לכל 9 התמונות יחד, כי הבקשות נשלחות ברצף: סה\"כ 3. הערך 2 שוכח את פתיחת החיבור, הערך 11 הוא persistent בלי pipelining, והערך 20 הוא non-persistent.",
      recap: "pipelining: חיבור + דף + סבב אחד לכל התמונות = 3 RTT" },
    { id: "app-C02-Q4", question: "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
      options: [
        { id: "a", value: "הוא פותח חיבור TCP חדש לכל משאב, ולכן משלם RTT נוסף ו-Slow Start חדש בכל אובייקט" },
        { id: "b", value: "הוא מחייב לשלוח את כל התמונות לפני קובץ ה-HTML" },
        { id: "c", value: "הוא אינו תומך ב-TCP" },
        { id: "d", value: "הוא מגביל כל דף לאובייקט אחד בלבד" },
      ],
      correctId: "a",
      explanation: "ב-HTTP 1.0 כל אובייקט מקבל חיבור חדש, ולכן כל אחד עולה 2 RTT במקום 1 וחוזר על Slow Start. הוא כן רץ על TCP, ולא קיימת בו מגבלה של אובייקט אחד בדף.",
      recap: "HTTP 1.0 = חיבור חדש לכל אובייקט" },
    { id: "app-C02-Q5", question: "ה-RTT לשרת הוא 50 ms. דף כולל קובץ HTML ו-9 תמונות מאותו שרת, ב-HTTP/1.1 **persistent בלי pipelining**. מזניחים זמן שידור. מה זמן הטעינה?",
      options: [
        { id: "a", value: "1000 ms" }, { id: "b", value: "550 ms" }, { id: "c", value: "500 ms" }, { id: "d", value: "150 ms" },
      ],
      correctId: "b",
      explanation: "יש 10 אובייקטים: $(1+10)\\cdot50=550$ ms. הערך 1000 ms הוא non-persistent ($2\\cdot10\\cdot50$), הערך 500 ms שוכח את פתיחת החיבור, והערך 150 ms הוא pipelining ($3\\cdot50$).",
      recap: "זמן = מספר RTT כפול ה-RTT" },
    { id: "app-C02-Q6", question: "האם אפשר לבקש שני דפים שונים מאותו שרת מעל אותו חיבור persistent?",
      options: [
        { id: "a", value: "כן, חיבור persistent נשאר פתוח ומשרת כמה בקשות" },
        { id: "b", value: "לא, כל דף דורש חיבור משלו" },
        { id: "c", value: "רק אם שני הדפים קטנים" },
        { id: "d", value: "רק אם משתמשים בעוגיות" },
      ],
      correctId: "a",
      explanation: "הרעיון של persistent הוא שהחיבור נשאר פתוח ומשרת בקשות עוקבות לאותו שרת, בין אם לדף אחד ובין אם לכמה דפים. גודל הדף ועוגיות לא משפיעים.",
      recap: "persistent: חיבור אחד, הרבה בקשות לאותו שרת" },
  ],
});
