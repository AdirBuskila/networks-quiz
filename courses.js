window.COURSES = {
 "app": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🍪",
    "title": "HTTP: בקשה, תגובה ועוגיות",
    "goal": "להסביר מה זה פרוטוקול חסר מצב, למה צריך עוגיות, ומה מחזירה תגובה בלי גוף.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>HTTP</b> הוא פרוטוקול <b>אפליקציה</b> של בקשה ותגובה. הלקוח (הדפדפן) שולח <b>בקשה</b>: שורת בקשה (שיטה, נתיב, גרסה), כותרות, ולפעמים גוף. השרת מחזיר <b>תגובה</b>: שורת סטטוס, כותרות, ולפעמים גוף. הוא רץ מעל TCP (ב-HTTP/3 מעל QUIC).</p>\n<table><thead><tr><th>שיטה</th><th>תפקיד</th></tr></thead><tbody>\n<tr><td>GET</td><td>מבקש אובייקט</td></tr>\n<tr><td>POST</td><td>שולח נתונים לשרת (למשל טופס)</td></tr>\n<tr><td>HEAD</td><td>כמו GET, אבל התשובה חוזרת בלי גוף</td></tr>\n<tr><td>PUT</td><td>יוצר משאב בכתובת הנתונה, או מחליף אותו אם הוא כבר קיים</td></tr>\n</tbody></table>\n<table><thead><tr><th>קוד</th><th>משמעות</th></tr></thead><tbody>\n<tr><td>200</td><td>הצליח, האובייקט בגוף</td></tr>\n<tr><td>301</td><td>הועבר לצמיתות, הכתובת החדשה בכותרת Location</td></tr>\n<tr><td>304</td><td>לא השתנה, <b>בלי גוף</b></td></tr>\n<tr><td>404</td><td>לא נמצא</td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <b>הגוף אינו חובה.</b> תגובת 304, תגובת 204 ותשובה לבקשת HEAD חוזרות בלי גוף.</div>\n<h3>חוסר מצב ועוגיות</h3>\n<p>HTTP הוא <b>stateless</b> (חסר מצב): השרת לא זוכר בקשות קודמות. כל בקשה צריכה להכיל את כל מה שנחוץ לטיפול בה. כדי שאתר יזהה אותך בין בקשות (עגלת קניות, התחברות) משתמשים ב<b>עוגייה</b>:</p>\n<ul>\n<li>השרת מחזיר בתגובה את הכותרת <code>Set-Cookie</code> עם מזהה.</li>\n<li>הדפדפן שומר אותו ושולח אותו בכל בקשה הבאה לאותו שרת.</li>\n<li>השרת מחפש את המזהה ב-DB שלו ומשחזר את המצב.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> אחרי כניסה לחנות, השרת שולח <code>Set-Cookie: id=1234</code>. בכל לחיצה הבאה הדפדפן שולח <code>Cookie: id=1234</code>, והשרת יודע שזה אותו משתמש עם אותה עגלה. הפרוטוקול עצמו נשאר חסר מצב, והמצב נשמר בעוגייה ובשרת.</div>\n<p>העוגייה אינה מצפינה, אינה מאיצה בקשות ואינה קוד שרץ. תפקידה העיקרי: <b>זיהוי ומעקב אחר סשן</b>. שמירת העדפות היא שימוש משני.</p>\n<p><b>עוגיית צד שלישי</b> נקבעת על ידי דומיין שאינו האתר שנכנסת אליו (למשל רשת פרסום המוטמעת בדף). אותה עוגייה מזהה אותך בהרבה אתרים, ולכן מטרתה היא <b>מעקב בין אתרים וטירגוט פרסומות</b>.</p>\n<div class=\"lesson-trap\">⚠️ <b>חוסר מצב אינו קשור להצפנה</b>, לסוג התוכן או למספר הבקשות במקביל. הוא אומר רק שהשרת לא שומר זיכרון של בקשות קודמות.</div>\n"
    },
    "questions": [
     {
      "id": "app-C01-Q1",
      "question": "מדוע HTTP נחשב לפרוטוקול חסר מצב (stateless)?",
      "options": [
       {
        "id": "a",
        "value": "כי הוא אינו מצפין את המידע שעובר בו",
        "type": "text",
        "html": "כי הוא אינו מצפין את המידע שעובר בו"
       },
       {
        "id": "b",
        "value": "כי השרת אינו זוכר בקשות קודמות, וכל בקשה עומדת בפני עצמה",
        "type": "text",
        "html": "כי השרת אינו זוכר בקשות קודמות, וכל בקשה עומדת בפני עצמה"
       },
       {
        "id": "c",
        "value": "כי הוא תומך רק בבקשה אחת בכל חיבור",
        "type": "text",
        "html": "כי הוא תומך רק בבקשה אחת בכל חיבור"
       },
       {
        "id": "d",
        "value": "כי הוא מעביר רק קבצי טקסט ולא תמונות",
        "type": "text",
        "html": "כי הוא מעביר רק קבצי טקסט ולא תמונות"
       }
      ],
      "correctId": "b",
      "explanation": "חוסר מצב אומר שהשרת לא שומר זיכרון של בקשות קודמות. כל בקשה מכילה את כל מה שנדרש לטיפול בה, ולכן נוצרו עוגיות. זה אינו קשור להצפנה, לסוג התוכן או למספר הבקשות בחיבור (חיבור persistent יכול לשאת הרבה בקשות והפרוטוקול נשאר חסר מצב).",
      "recap": "stateless = השרת לא זוכר בקשות קודמות; המצב נשמר בעוגייה",
      "questionHtml": "מדוע HTTP נחשב לפרוטוקול חסר מצב (stateless)?",
      "explanationHtml": "חוסר מצב אומר שהשרת לא שומר זיכרון של בקשות קודמות. כל בקשה מכילה את כל מה שנדרש לטיפול בה, ולכן נוצרו עוגיות. זה אינו קשור להצפנה, לסוג התוכן או למספר הבקשות בחיבור (חיבור persistent יכול לשאת הרבה בקשות והפרוטוקול נשאר חסר מצב).",
      "recapHtml": "stateless = השרת לא זוכר בקשות קודמות; המצב נשמר בעוגייה"
     },
     {
      "id": "app-C01-Q2",
      "question": "אתר מסוים צריך לזכור שאותו משתמש הוא שהוסיף מוצר לעגלה שתי לחיצות קודם. איך עושים זאת בפועל מעל HTTP?",
      "options": [
       {
        "id": "a",
        "value": "השרת מחזיר מזהה בכותרת `Set-Cookie`, והדפדפן שולח אותו בכל בקשה הבאה",
        "type": "text",
        "html": "השרת מחזיר מזהה בכותרת <code class=\"tok\" dir=\"ltr\">Set-Cookie</code>, והדפדפן שולח אותו בכל בקשה הבאה"
       },
       {
        "id": "b",
        "value": "הדפדפן מצפין כל בקשה, והשרת מזהה אותה לפי ההצפנה",
        "type": "text",
        "html": "הדפדפן מצפין כל בקשה, והשרת מזהה אותה לפי ההצפנה"
       },
       {
        "id": "c",
        "value": "הפרוטוקול כבר זוכר את הבקשות הקודמות של כל לקוח",
        "type": "text",
        "html": "הפרוטוקול כבר זוכר את הבקשות הקודמות של כל לקוח"
       },
       {
        "id": "d",
        "value": "השרת שולח קוד לדפדפן שמאיץ את הבקשות הבאות",
        "type": "text",
        "html": "השרת שולח קוד לדפדפן שמאיץ את הבקשות הבאות"
       }
      ],
      "correctId": "a",
      "explanation": "העוגייה היא מזהה שהשרת קובע (`Set-Cookie`) והדפדפן מחזיר בכל בקשה לאותו שרת. השרת מחפש את המזהה ב-DB שלו. הצפנה לא מזהה משתמשים, והפרוטוקול עצמו אינו זוכר דבר. עוגיות אינן מאיצות בקשות ואינן קוד.",
      "recap": "עוגייה: Set-Cookie מהשרת, Cookie מהדפדפן בכל בקשה הבאה",
      "questionHtml": "אתר מסוים צריך לזכור שאותו משתמש הוא שהוסיף מוצר לעגלה שתי לחיצות קודם. איך עושים זאת בפועל מעל HTTP?",
      "explanationHtml": "העוגייה היא מזהה שהשרת קובע (<code class=\"tok\" dir=\"ltr\">Set-Cookie</code>) והדפדפן מחזיר בכל בקשה לאותו שרת. השרת מחפש את המזהה ב-DB שלו. הצפנה לא מזהה משתמשים, והפרוטוקול עצמו אינו זוכר דבר. עוגיות אינן מאיצות בקשות ואינן קוד.",
      "recapHtml": "עוגייה: Set-Cookie מהשרת, Cookie מהדפדפן בכל בקשה הבאה"
     },
     {
      "id": "app-C01-Q3",
      "question": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
      "options": [
       {
        "id": "a",
        "value": "לשמור על הסשן של המשתמש באתר שבו הוא גולש",
        "type": "text",
        "html": "לשמור על הסשן של המשתמש באתר שבו הוא גולש"
       },
       {
        "id": "b",
        "value": "להצפין את התקשורת בין הדפדפן לשרת",
        "type": "text",
        "html": "להצפין את התקשורת בין הדפדפן לשרת"
       },
       {
        "id": "c",
        "value": "מעקב אחר המשתמש בין אתרים שונים וטירגוט פרסומות",
        "type": "text",
        "html": "מעקב אחר המשתמש בין אתרים שונים וטירגוט פרסומות"
       },
       {
        "id": "d",
        "value": "לקצר את זמן הטעינה של הדף",
        "type": "text",
        "html": "לקצר את זמן הטעינה של הדף"
       }
      ],
      "correctId": "c",
      "explanation": "עוגייה של צד שלישי נקבעת על ידי דומיין אחר, למשל רשת פרסום שמוטמעת בכמה אתרים, ולכן אותו מזהה נראה בכולם: מעקב בין אתרים וטירגוט. שמירת סשן באתר עצמו היא עוגיית צד ראשון. עוגיות אינן מצפינות ואינן מקצרות את זמן הטעינה.",
      "recap": "צד שלישי = מעקב בין אתרים; צד ראשון = סשן באתר",
      "questionHtml": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
      "explanationHtml": "עוגייה של צד שלישי נקבעת על ידי דומיין אחר, למשל רשת פרסום שמוטמעת בכמה אתרים, ולכן אותו מזהה נראה בכולם: מעקב בין אתרים וטירגוט. שמירת סשן באתר עצמו היא עוגיית צד ראשון. עוגיות אינן מצפינות ואינן מקצרות את זמן הטעינה.",
      "recapHtml": "צד שלישי = מעקב בין אתרים; צד ראשון = סשן באתר"
     },
     {
      "id": "app-C01-Q4",
      "question": "איזו מהתגובות הבאות חוזרת **בלי גוף** (Body)?",
      "options": [
       {
        "id": "a",
        "value": "תגובת 200 לבקשת GET רגילה",
        "type": "text",
        "html": "תגובת 200 לבקשת GET רגילה"
       },
       {
        "id": "b",
        "value": "תגובת 404 שמציגה דף שגיאה",
        "type": "text",
        "html": "תגובת 404 שמציגה דף שגיאה"
       },
       {
        "id": "c",
        "value": "תגובת 200 לבקשת POST של טופס שמחזירה דף אישור",
        "type": "text",
        "html": "תגובת 200 לבקשת POST של טופס שמחזירה דף אישור"
       },
       {
        "id": "d",
        "value": "תגובת 304 לבקשת GET מותנה",
        "type": "text",
        "html": "תגובת 304 לבקשת GET מותנה"
       }
      ],
      "correctId": "d",
      "explanation": "תגובת 304 Not Modified אומרת \"האובייקט במטמון שלך עדיין תקף\", ולכן אין בה גוף. תגובת 200 נושאת את האובייקט בגוף, ולדף שגיאה של 404 יש בדרך כלל גוף. גם תשובה לבקשת HEAD וקוד 204 חוזרים בלי גוף.",
      "recap": "בלי גוף: 304, 204, ותשובה ל-HEAD",
      "questionHtml": "איזו מהתגובות הבאות חוזרת <strong>בלי גוף</strong> (Body)?",
      "explanationHtml": "תגובת 304 Not Modified אומרת \"האובייקט במטמון שלך עדיין תקף\", ולכן אין בה גוף. תגובת 200 נושאת את האובייקט בגוף, ולדף שגיאה של 404 יש בדרך כלל גוף. גם תשובה לבקשת HEAD וקוד 204 חוזרים בלי גוף.",
      "recapHtml": "בלי גוף: 304, 204, ותשובה ל-HEAD"
     },
     {
      "id": "app-C01-Q5",
      "question": "יש לך משאב שכתובתו ידועה, ואתה רוצה ליצור אותו או להחליף את תוכנו אם הוא כבר קיים. איזו שיטת HTTP מתאימה בדיוק לכך?",
      "options": [
       {
        "id": "a",
        "value": "HEAD",
        "type": "text",
        "html": "HEAD"
       },
       {
        "id": "b",
        "value": "GET",
        "type": "text",
        "html": "GET"
       },
       {
        "id": "c",
        "value": "PUT",
        "type": "text",
        "html": "PUT"
       },
       {
        "id": "d",
        "value": "אף אחת מהן",
        "type": "text",
        "html": "אף אחת מהן"
       }
      ],
      "correctId": "c",
      "explanation": "PUT יוצר משאב בכתובת הנתונה או מחליף אותו אם הוא קיים. GET רק קורא אובייקט, ו-HEAD כמו GET בלי הגוף: שניהם לא משנים דבר בשרת.",
      "recap": "PUT = יצירה או החלפה בכתובת ידועה",
      "questionHtml": "יש לך משאב שכתובתו ידועה, ואתה רוצה ליצור אותו או להחליף את תוכנו אם הוא כבר קיים. איזו שיטת HTTP מתאימה בדיוק לכך?",
      "explanationHtml": "PUT יוצר משאב בכתובת הנתונה או מחליף אותו אם הוא קיים. GET רק קורא אובייקט, ו-HEAD כמו GET בלי הגוף: שניהם לא משנים דבר בשרת.",
      "recapHtml": "PUT = יצירה או החלפה בכתובת ידועה"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔁",
    "title": "חיבורים וספירת RTT",
    "goal": "לספור כמה סבבי RTT דרושים לטעינת דף עם N אובייקטים ב-non-persistent, ב-persistent וב-pipelining.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>RTT</b> הוא זמן הלוך-חזור בין הלקוח לשרת. בשלב הזה מזניחים את זמן השידור ורק סופרים סבבי RTT. דף כולל <b>אובייקט בסיס</b> (קובץ ה-HTML) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> אובייקטים שהוא מפנה אליהם (תמונות וכדומה), כולם על אותו שרת.</p>\n<ul>\n<li><b>Non-persistent (HTTP 1.0):</b> חיבור TCP חדש לכל אובייקט. כל אובייקט עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> סבבי RTT: אחד לפתיחת החיבור ואחד לבקשה ולתשובה.</li>\n<li><b>Persistent (HTTP/1.1) בלי pipelining:</b> החיבור נשאר פתוח. פותחים אותו פעם אחת (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> RTT), ואז כל אובייקט עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> RTT, בזה אחר זה.</li>\n<li><b>Persistent עם pipelining:</b> אחרי שהדף הגיע, שולחים את כל הבקשות לתמונות ברצף, ולכולן יחד עולה בערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> RTT.</li>\n</ul>\n<table><thead><tr><th>מצב</th><th>סה\"כ RTT לדף עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> תמונות</th></tr></thead><tbody>\n<tr><td>Non-persistent</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(N+1)</annotation></semantics></math></span></td></tr>\n<tr><td>Persistent בלי pipelining</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>N</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1+(N+1)=N+2</annotation></semantics></math></span></td></tr>\n<tr><td>Persistent עם pipelining</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1+1+1=3</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-ex\"><b>דוגמה:</b> דף עם 3 תמונות הוא 4 אובייקטים. Non-persistent: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot4=8</annotation></semantics></math></span> RTT. Persistent בלי pipelining: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">1+4=5</annotation></semantics></math></span> RTT. עם pipelining: חיבור, דף, וסבב אחד לכל התמונות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> RTT.</div>\n<div class=\"lesson-rule\">🔑 <b>הבעיה ב-HTTP 1.0:</b> חיבור חדש לכל אובייקט, ולכן בכל אובייקט משלמים עוד RTT על לחיצת היד של TCP (ובנוסף כל חיבור מתחיל Slow Start מחדש).</div>\n<div class=\"lesson-trap\">⚠️ <b>אל תשכחו את אובייקט הבסיס ואת פתיחת החיבור.</b> דף עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> תמונות הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">N+1</annotation></semantics></math></span> אובייקטים. ושימו לב: חיבור persistent אחד יכול לשרת כמה דפים שונים מאותו שרת.</div>\n"
    },
    "questions": [
     {
      "id": "app-C02-Q1",
      "question": "דף כולל קובץ HTML ו-4 תמונות, הכול מאותו שרת. HTTP **non-persistent**, מזניחים זמן שידור. כמה סבבי RTT דרושים לטעינת הדף?",
      "options": [
       {
        "id": "a",
        "value": "10 RTT",
        "type": "text",
        "html": "10 RTT"
       },
       {
        "id": "b",
        "value": "6 RTT",
        "type": "text",
        "html": "6 RTT"
       },
       {
        "id": "c",
        "value": "5 RTT",
        "type": "text",
        "html": "5 RTT"
       },
       {
        "id": "d",
        "value": "3 RTT",
        "type": "text",
        "html": "3 RTT"
       }
      ],
      "correctId": "a",
      "explanation": "יש 5 אובייקטים (HTML ועוד 4 תמונות), ולכל אחד חיבור חדש: $2$ RTT, כלומר $2\\cdot5=10$. הערך 6 הוא persistent בלי pipelining, הערך 5 שוכח את ה-RTT של פתיחת החיבור, והערך 3 הוא pipelining.",
      "recap": "non-persistent: 2 RTT לכל אובייקט",
      "questionHtml": "דף כולל קובץ HTML ו-4 תמונות, הכול מאותו שרת. HTTP <strong>non-persistent</strong>, מזניחים זמן שידור. כמה סבבי RTT דרושים לטעינת הדף?",
      "explanationHtml": "יש 5 אובייקטים (HTML ועוד 4 תמונות), ולכל אחד חיבור חדש: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> RTT, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot5=10</annotation></semantics></math></span>. הערך 6 הוא persistent בלי pipelining, הערך 5 שוכח את ה-RTT של פתיחת החיבור, והערך 3 הוא pipelining.",
      "recapHtml": "non-persistent: 2 RTT לכל אובייקט"
     },
     {
      "id": "app-C02-Q2",
      "question": "דף כולל קובץ HTML ו-6 תמונות, הכול מאותו שרת. HTTP/1.1 **persistent בלי pipelining**, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      "options": [
       {
        "id": "a",
        "value": "14 RTT",
        "type": "text",
        "html": "14 RTT"
       },
       {
        "id": "b",
        "value": "7 RTT",
        "type": "text",
        "html": "7 RTT"
       },
       {
        "id": "c",
        "value": "3 RTT",
        "type": "text",
        "html": "3 RTT"
       },
       {
        "id": "d",
        "value": "8 RTT",
        "type": "text",
        "html": "8 RTT"
       }
      ],
      "correctId": "d",
      "explanation": "RTT אחד לפתיחת החיבור, ואז RTT אחד לכל אחד מ-7 האובייקטים: $1+7=8$. הערך 14 הוא non-persistent, הערך 7 שוכח את פתיחת החיבור, והערך 3 הוא pipelining.",
      "recap": "persistent בלי pipelining: 1 + (N+1)",
      "questionHtml": "דף כולל קובץ HTML ו-6 תמונות, הכול מאותו שרת. HTTP/1.1 <strong>persistent בלי pipelining</strong>, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      "explanationHtml": "RTT אחד לפתיחת החיבור, ואז RTT אחד לכל אחד מ-7 האובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>7</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1+7=8</annotation></semantics></math></span>. הערך 14 הוא non-persistent, הערך 7 שוכח את פתיחת החיבור, והערך 3 הוא pipelining.",
      "recapHtml": "persistent בלי pipelining: 1 + (N+1)"
     },
     {
      "id": "app-C02-Q3",
      "question": "דף כולל קובץ HTML ו-9 תמונות, הכול מאותו שרת. HTTP/1.1 **persistent עם pipelining**, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      "options": [
       {
        "id": "a",
        "value": "20 RTT",
        "type": "text",
        "html": "20 RTT"
       },
       {
        "id": "b",
        "value": "11 RTT",
        "type": "text",
        "html": "11 RTT"
       },
       {
        "id": "c",
        "value": "3 RTT",
        "type": "text",
        "html": "3 RTT"
       },
       {
        "id": "d",
        "value": "2 RTT",
        "type": "text",
        "html": "2 RTT"
       }
      ],
      "correctId": "c",
      "explanation": "RTT אחד לפתיחת החיבור, RTT אחד לבקשת הדף, ו-RTT אחד נוסף לכל 9 התמונות יחד, כי הבקשות נשלחות ברצף: סה\"כ 3. הערך 2 שוכח את פתיחת החיבור, הערך 11 הוא persistent בלי pipelining, והערך 20 הוא non-persistent.",
      "recap": "pipelining: חיבור + דף + סבב אחד לכל התמונות = 3 RTT",
      "questionHtml": "דף כולל קובץ HTML ו-9 תמונות, הכול מאותו שרת. HTTP/1.1 <strong>persistent עם pipelining</strong>, מזניחים זמן שידור. כמה סבבי RTT דרושים?",
      "explanationHtml": "RTT אחד לפתיחת החיבור, RTT אחד לבקשת הדף, ו-RTT אחד נוסף לכל 9 התמונות יחד, כי הבקשות נשלחות ברצף: סה\"כ 3. הערך 2 שוכח את פתיחת החיבור, הערך 11 הוא persistent בלי pipelining, והערך 20 הוא non-persistent.",
      "recapHtml": "pipelining: חיבור + דף + סבב אחד לכל התמונות = 3 RTT"
     },
     {
      "id": "app-C02-Q4",
      "question": "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
      "options": [
       {
        "id": "a",
        "value": "הוא פותח חיבור TCP חדש לכל משאב, ולכן משלם RTT נוסף ו-Slow Start חדש בכל אובייקט",
        "type": "text",
        "html": "הוא פותח חיבור TCP חדש לכל משאב, ולכן משלם RTT נוסף ו-Slow Start חדש בכל אובייקט"
       },
       {
        "id": "b",
        "value": "הוא מחייב לשלוח את כל התמונות לפני קובץ ה-HTML",
        "type": "text",
        "html": "הוא מחייב לשלוח את כל התמונות לפני קובץ ה-HTML"
       },
       {
        "id": "c",
        "value": "הוא אינו תומך ב-TCP",
        "type": "text",
        "html": "הוא אינו תומך ב-TCP"
       },
       {
        "id": "d",
        "value": "הוא מגביל כל דף לאובייקט אחד בלבד",
        "type": "text",
        "html": "הוא מגביל כל דף לאובייקט אחד בלבד"
       }
      ],
      "correctId": "a",
      "explanation": "ב-HTTP 1.0 כל אובייקט מקבל חיבור חדש, ולכן כל אחד עולה 2 RTT במקום 1 וחוזר על Slow Start. הוא כן רץ על TCP, ולא קיימת בו מגבלה של אובייקט אחד בדף.",
      "recap": "HTTP 1.0 = חיבור חדש לכל אובייקט",
      "questionHtml": "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
      "explanationHtml": "ב-HTTP 1.0 כל אובייקט מקבל חיבור חדש, ולכן כל אחד עולה 2 RTT במקום 1 וחוזר על Slow Start. הוא כן רץ על TCP, ולא קיימת בו מגבלה של אובייקט אחד בדף.",
      "recapHtml": "HTTP 1.0 = חיבור חדש לכל אובייקט"
     },
     {
      "id": "app-C02-Q5",
      "question": "ה-RTT לשרת הוא 50 ms. דף כולל קובץ HTML ו-9 תמונות מאותו שרת, ב-HTTP/1.1 **persistent בלי pipelining**. מזניחים זמן שידור. מה זמן הטעינה?",
      "options": [
       {
        "id": "a",
        "value": "1000 ms",
        "type": "text",
        "html": "1000 ms"
       },
       {
        "id": "b",
        "value": "550 ms",
        "type": "text",
        "html": "550 ms"
       },
       {
        "id": "c",
        "value": "500 ms",
        "type": "text",
        "html": "500 ms"
       },
       {
        "id": "d",
        "value": "150 ms",
        "type": "text",
        "html": "150 ms"
       }
      ],
      "correctId": "b",
      "explanation": "יש 10 אובייקטים: $(1+10)\\cdot50=550$ ms. הערך 1000 ms הוא non-persistent ($2\\cdot10\\cdot50$), הערך 500 ms שוכח את פתיחת החיבור, והערך 150 ms הוא pipelining ($3\\cdot50$).",
      "recap": "זמן = מספר RTT כפול ה-RTT",
      "questionHtml": "ה-RTT לשרת הוא 50 ms. דף כולל קובץ HTML ו-9 תמונות מאותו שרת, ב-HTTP/1.1 <strong>persistent בלי pipelining</strong>. מזניחים זמן שידור. מה זמן הטעינה?",
      "explanationHtml": "יש 10 אובייקטים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>10</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><mn>50</mn><mo>=</mo><mn>550</mn></mrow><annotation encoding=\"application/x-tex\">(1+10)\\cdot50=550</annotation></semantics></math></span> ms. הערך 1000 ms הוא non-persistent (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>10</mn><mo>⋅</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot10\\cdot50</annotation></semantics></math></span>), הערך 500 ms שוכח את פתיחת החיבור, והערך 150 ms הוא pipelining (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot50</annotation></semantics></math></span>).",
      "recapHtml": "זמן = מספר RTT כפול ה-RTT"
     },
     {
      "id": "app-C02-Q6",
      "question": "האם אפשר לבקש שני דפים שונים מאותו שרת מעל אותו חיבור persistent?",
      "options": [
       {
        "id": "a",
        "value": "כן, חיבור persistent נשאר פתוח ומשרת כמה בקשות",
        "type": "text",
        "html": "כן, חיבור persistent נשאר פתוח ומשרת כמה בקשות"
       },
       {
        "id": "b",
        "value": "לא, כל דף דורש חיבור משלו",
        "type": "text",
        "html": "לא, כל דף דורש חיבור משלו"
       },
       {
        "id": "c",
        "value": "רק אם שני הדפים קטנים",
        "type": "text",
        "html": "רק אם שני הדפים קטנים"
       },
       {
        "id": "d",
        "value": "רק אם משתמשים בעוגיות",
        "type": "text",
        "html": "רק אם משתמשים בעוגיות"
       }
      ],
      "correctId": "a",
      "explanation": "הרעיון של persistent הוא שהחיבור נשאר פתוח ומשרת בקשות עוקבות לאותו שרת, בין אם לדף אחד ובין אם לכמה דפים. גודל הדף ועוגיות לא משפיעים.",
      "recap": "persistent: חיבור אחד, הרבה בקשות לאותו שרת",
      "questionHtml": "האם אפשר לבקש שני דפים שונים מאותו שרת מעל אותו חיבור persistent?",
      "explanationHtml": "הרעיון של persistent הוא שהחיבור נשאר פתוח ומשרת בקשות עוקבות לאותו שרת, בין אם לדף אחד ובין אם לכמה דפים. גודל הדף ועוגיות לא משפיעים.",
      "recapHtml": "persistent: חיבור אחד, הרבה בקשות לאותו שרת"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "⏱️",
    "title": "זמן טעינת דף עם זמן שידור",
    "goal": "לחשב זמן טעינה כולל של דף ב-non-persistent, ב-persistent וב-pipelining, כשמוסיפים את זמן השידור של כל אובייקט.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>עכשיו מוסיפים לסבבי ה-RTT גם את <b>זמן השידור</b> של כל אובייקט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mtext>size</mtext><mtext>rate</mtext></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">t=\\dfrac{\\text{size}}{\\text{rate}}</annotation></semantics></math></span>, כאשר גודל בבתים כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> נותן ביטים. בשאלות האלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mtext> </mtext><mi>K</mi><mi>B</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">1\\,KB=1000</annotation></semantics></math></span> בתים.</p>\n<ul>\n<li><b>Non-persistent:</b> כל אובייקט עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mtext> </mtext><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mi>t</mi></mrow><annotation encoding=\"application/x-tex\">2\\,RTT+t</annotation></semantics></math></span>. סכום על כל האובייקטים כולל הבסיס.</li>\n<li><b>Persistent בלי pipelining:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> אחד לפתיחת החיבור, ואז לכל אובייקט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mi>t</mi></mrow><annotation encoding=\"application/x-tex\">RTT+t</annotation></semantics></math></span> (כולל הבסיס).</li>\n<li><b>Persistent עם pipelining:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> לחיבור, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">RTT+t_0</annotation></semantics></math></span> לדף, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> אחד לכל התמונות ועוד סכום זמני השידור שלהן.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>200</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=200\\,ms</annotation></semantics></math></span>, קו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100\\,Mbps</annotation></semantics></math></span>, דף של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">50\\,KB</annotation></semantics></math></span> ושלוש תמונות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>250</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">250\\,KB</annotation></semantics></math></span>.<br>\n<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mn>50000</mn><mo>⋅</mo><mn>8</mn></mrow><msup><mn>10</mn><mn>8</mn></msup></mfrac></mstyle><mo>=</mo><mn>4</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">t_0=\\dfrac{50000\\cdot8}{10^{8}}=4\\,ms</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mn>250000</mn><mo>⋅</mo><mn>8</mn></mrow><msup><mn>10</mn><mn>8</mn></msup></mfrac></mstyle><mo>=</mo><mn>20</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">t_1=\\dfrac{250000\\cdot8}{10^{8}}=20\\,ms</annotation></semantics></math></span>.<br>\nNon-persistent: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>200</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mn>2</mn><mo>⋅</mo><mn>200</mn><mo>+</mo><mn>20</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1664</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">2\\cdot200+4+3(2\\cdot200+20)=1664\\,ms</annotation></semantics></math></span>.<br>\nPersistent בלי pipelining: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mn>200</mn><mo>+</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mn>200</mn><mo>+</mo><mn>20</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1064</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">200+(200+4)+3(200+20)=1064\\,ms</annotation></semantics></math></span>.<br>\nעם pipelining: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mn>200</mn><mo>+</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>200</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>664</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">200+(200+4)+200+3\\cdot20=664\\,ms</annotation></semantics></math></span>.</div>\n<div class=\"lesson-rule\">🔑 <b>ההבדל בין non-persistent ל-persistent</b> הוא בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> אחד לכל אובייקט שאינו הראשון, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>⋅</mo><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">N\\cdot RTT</annotation></semantics></math></span> לדף עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> תמונות (בדוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>600</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">3\\cdot200=600\\,ms</annotation></semantics></math></span>). זמני השידור זהים בשני המצבים.</div>\n<div class=\"lesson-trap\">⚠️ <b>שימו לב לבית מול ביט.</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>250</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">250\\,KB</annotation></semantics></math></span> הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2,000,000</mn></mrow><annotation encoding=\"application/x-tex\">2{,}000{,}000</annotation></semantics></math></span> ביט. מי ששוכח להכפיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> יטעה פי שמונה בזמן השידור.</div>\n"
    },
    "questions": [
     {
      "id": "app-C03-Q1",
      "question": "$RTT=200\\ ms$, קו של $100\\ Mbps$. דף של $50\\ KB$ ובו שלוש תמונות של $250\\ KB$, הכול על אותו שרת. HTTP **non-persistent**. מה זמן הטעינה הכולל?",
      "options": [
       {
        "id": "a",
        "value": "1064 ms",
        "type": "text",
        "html": "1064 ms"
       },
       {
        "id": "b",
        "value": "1664 ms",
        "type": "text",
        "html": "1664 ms"
       },
       {
        "id": "c",
        "value": "864 ms",
        "type": "text",
        "html": "864 ms"
       },
       {
        "id": "d",
        "value": "664 ms",
        "type": "text",
        "html": "664 ms"
       }
      ],
      "correctId": "b",
      "explanation": "זמני השידור: $4$ ms לדף ו-$20$ ms לכל תמונה. כל אובייקט עולה $2\\cdot200$ ms: $400+4+3(400+20)=1664$ ms. הערך 1064 הוא persistent, הערך 864 משלם רק RTT אחד לכל אובייקט, והערך 664 הוא pipelining.",
      "recap": "non-persistent: סכום של 2RTT + t לכל אובייקט",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>200</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=200\\ ms</annotation></semantics></math></span>, קו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100\\ Mbps</annotation></semantics></math></span>. דף של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">50\\ KB</annotation></semantics></math></span> ובו שלוש תמונות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>250</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">250\\ KB</annotation></semantics></math></span>, הכול על אותו שרת. HTTP <strong>non-persistent</strong>. מה זמן הטעינה הכולל?",
      "explanationHtml": "זמני השידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> ms לדף ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">20</annotation></semantics></math></span> ms לכל תמונה. כל אובייקט עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot200</annotation></semantics></math></span> ms: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>400</mn><mo>+</mo><mn>4</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">(</mo><mn>400</mn><mo>+</mo><mn>20</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1664</mn></mrow><annotation encoding=\"application/x-tex\">400+4+3(400+20)=1664</annotation></semantics></math></span> ms. הערך 1064 הוא persistent, הערך 864 משלם רק RTT אחד לכל אובייקט, והערך 664 הוא pipelining.",
      "recapHtml": "non-persistent: סכום של 2RTT + t לכל אובייקט"
     },
     {
      "id": "app-C03-Q2",
      "question": "$RTT=200\\ ms$, קו של $100\\ Mbps$. דף של $50\\ KB$ ובו חמש תמונות של $250\\ KB$, הכול על אותו שרת. HTTP **persistent בלי pipelining**. מה זמן הטעינה הכולל?",
      "options": [
       {
        "id": "a",
        "value": "2504 ms",
        "type": "text",
        "html": "2504 ms"
       },
       {
        "id": "b",
        "value": "704 ms",
        "type": "text",
        "html": "704 ms"
       },
       {
        "id": "c",
        "value": "1504 ms",
        "type": "text",
        "html": "1504 ms"
       },
       {
        "id": "d",
        "value": "1304 ms",
        "type": "text",
        "html": "1304 ms"
       }
      ],
      "correctId": "c",
      "explanation": "פתיחת חיבור $200$, הדף $200+4$, ולכל אחת מ-5 התמונות $200+20$: $200+204+5\\cdot220=1504$ ms. הערך 2504 הוא non-persistent, הערך 1304 שוכח את פתיחת החיבור, והערך 704 הוא pipelining.",
      "recap": "persistent: RTT לחיבור + (RTT + t) לכל אובייקט",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>200</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=200\\ ms</annotation></semantics></math></span>, קו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100\\ Mbps</annotation></semantics></math></span>. דף של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">50\\ KB</annotation></semantics></math></span> ובו חמש תמונות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>250</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">250\\ KB</annotation></semantics></math></span>, הכול על אותו שרת. HTTP <strong>persistent בלי pipelining</strong>. מה זמן הטעינה הכולל?",
      "explanationHtml": "פתיחת חיבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">200</annotation></semantics></math></span>, הדף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">200+4</annotation></semantics></math></span>, ולכל אחת מ-5 התמונות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">200+20</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mn>204</mn><mo>+</mo><mn>5</mn><mo>⋅</mo><mn>220</mn><mo>=</mo><mn>1504</mn></mrow><annotation encoding=\"application/x-tex\">200+204+5\\cdot220=1504</annotation></semantics></math></span> ms. הערך 2504 הוא non-persistent, הערך 1304 שוכח את פתיחת החיבור, והערך 704 הוא pipelining.",
      "recapHtml": "persistent: RTT לחיבור + (RTT + t) לכל אובייקט"
     },
     {
      "id": "app-C03-Q3",
      "question": "אותו דף כמו בשאלה הראשונה ($RTT=200\\ ms$, $100\\ Mbps$, דף של $50\\ KB$ ושלוש תמונות של $250\\ KB$), אבל עכשיו HTTP **persistent עם pipelining**. מה זמן הטעינה הכולל?",
      "options": [
       {
        "id": "a",
        "value": "1664 ms",
        "type": "text",
        "html": "1664 ms"
       },
       {
        "id": "b",
        "value": "1064 ms",
        "type": "text",
        "html": "1064 ms"
       },
       {
        "id": "c",
        "value": "464 ms",
        "type": "text",
        "html": "464 ms"
       },
       {
        "id": "d",
        "value": "664 ms",
        "type": "text",
        "html": "664 ms"
       }
      ],
      "correctId": "d",
      "explanation": "חיבור $200$, הדף $200+4$, ואז סבב אחד לכל התמונות ($200$) ועוד שידורן ברצף ($3\\cdot20=60$): $200+204+200+60=664$ ms. הערך 464 שוכח את פתיחת החיבור, והערכים 1064 ו-1664 הם persistent רגיל ו-non-persistent.",
      "recap": "pipelining: RTT אחד לכל התמונות + סכום זמני השידור",
      "questionHtml": "אותו דף כמו בשאלה הראשונה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>200</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=200\\ ms</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100\\ Mbps</annotation></semantics></math></span>, דף של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">50\\ KB</annotation></semantics></math></span> ושלוש תמונות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>250</mn><mtext> </mtext><mi>K</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">250\\ KB</annotation></semantics></math></span>), אבל עכשיו HTTP <strong>persistent עם pipelining</strong>. מה זמן הטעינה הכולל?",
      "explanationHtml": "חיבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">200</annotation></semantics></math></span>, הדף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">200+4</annotation></semantics></math></span>, ואז סבב אחד לכל התמונות (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">200</annotation></semantics></math></span>) ועוד שידורן ברצף (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot20=60</annotation></semantics></math></span>): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>+</mo><mn>204</mn><mo>+</mo><mn>200</mn><mo>+</mo><mn>60</mn><mo>=</mo><mn>664</mn></mrow><annotation encoding=\"application/x-tex\">200+204+200+60=664</annotation></semantics></math></span> ms. הערך 464 שוכח את פתיחת החיבור, והערכים 1064 ו-1664 הם persistent רגיל ו-non-persistent.",
      "recapHtml": "pipelining: RTT אחד לכל התמונות + סכום זמני השידור"
     },
     {
      "id": "app-C03-Q4",
      "question": "דף של זמן שידור $t_0$ ובו $N$ תמונות, שלכל אחת זמן שידור $t_1$. HTTP **persistent בלי pipelining**. איזה ביטוי נותן את זמן הטעינה?",
      "options": [
       {
        "id": "a",
        "value": "$RTT+(RTT+t_0)+N\\,(RTT+t_1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">)</mo><mo>+</mo><mi>N</mi><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">RTT+(RTT+t_0)+N\\,(RTT+t_1)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2RTT+t_0+N\\,(2RTT+t_1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><mi>N</mi><mtext> </mtext><mo stretchy=\"false\">(</mo><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2RTT+t_0+N\\,(2RTT+t_1)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$RTT+(RTT+t_0)+RTT+N\\,t_1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">)</mo><mo>+</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mi>N</mi><mtext> </mtext><msub><mi>t</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">RTT+(RTT+t_0)+RTT+N\\,t_1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$(RTT+t_0)+N\\,(RTT+t_1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\">)</mo><mo>+</mo><mi>N</mi><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(RTT+t_0)+N\\,(RTT+t_1)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "פתיחת חיבור ($RTT$), הדף ($RTT+t_0$), ולכל תמונה ($RTT+t_1$). הביטוי עם $2RTT$ לכל אובייקט הוא non-persistent, הביטוי עם $RTT$ אחד לכל התמונות הוא pipelining, והביטוי בלי ה-$RTT$ הראשון שוכח את פתיחת החיבור.",
      "recap": "persistent: RTT + (RTT+t0) + N(RTT+t1)",
      "questionHtml": "דף של זמן שידור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>t</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">t_0</annotation></semantics></math></span> ובו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> תמונות, שלכל אחת זמן שידור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>t</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">t_1</annotation></semantics></math></span>. HTTP <strong>persistent בלי pipelining</strong>. איזה ביטוי נותן את זמן הטעינה?",
      "explanationHtml": "פתיחת חיבור (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span>), הדף (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">RTT+t_0</annotation></semantics></math></span>), ולכל תמונה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">RTT+t_1</annotation></semantics></math></span>). הביטוי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">2RTT</annotation></semantics></math></span> לכל אובייקט הוא non-persistent, הביטוי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> אחד לכל התמונות הוא pipelining, והביטוי בלי ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> הראשון שוכח את פתיחת החיבור.",
      "recapHtml": "persistent: RTT + (RTT+t0) + N(RTT+t1)"
     },
     {
      "id": "app-C03-Q5",
      "question": "$RTT=100\\ ms$. דף עם 5 תמונות. בכמה זמן קצרה טעינת הדף ב-**persistent** (בלי pipelining) לעומת **non-persistent**, כשזמני השידור זהים בשני המצבים?",
      "options": [
       {
        "id": "a",
        "value": "600 ms",
        "type": "text",
        "html": "600 ms"
       },
       {
        "id": "b",
        "value": "100 ms",
        "type": "text",
        "html": "100 ms"
       },
       {
        "id": "c",
        "value": "1000 ms",
        "type": "text",
        "html": "1000 ms"
       },
       {
        "id": "d",
        "value": "500 ms",
        "type": "text",
        "html": "500 ms"
       }
      ],
      "correctId": "d",
      "explanation": "ב-non-persistent משלמים $2RTT$ לכל אחד מ-$N+1$ האובייקטים, וב-persistent $1+(N+1)$ סבבים. ההפרש הוא $N\\cdot RTT=5\\cdot100=500$ ms (זמני השידור מתבטלים). הערך 100 הוא RTT בודד, והערך 1000 הוא $2N\\cdot RTT$, כלומר ספירה כפולה. הערך 600 סופר גם את אובייקט הבסיס, אבל הבסיס עולה $2RTT$ בשני המצבים.",
      "recap": "persistent חוסך N·RTT לעומת non-persistent",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=100\\ ms</annotation></semantics></math></span>. דף עם 5 תמונות. בכמה זמן קצרה טעינת הדף ב-<strong>persistent</strong> (בלי pipelining) לעומת <strong>non-persistent</strong>, כשזמני השידור זהים בשני המצבים?",
      "explanationHtml": "ב-non-persistent משלמים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">2RTT</annotation></semantics></math></span> לכל אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">N+1</annotation></semantics></math></span> האובייקטים, וב-persistent <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">1+(N+1)</annotation></semantics></math></span> סבבים. ההפרש הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi><mo>⋅</mo><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>5</mn><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">N\\cdot RTT=5\\cdot100=500</annotation></semantics></math></span> ms (זמני השידור מתבטלים). הערך 100 הוא RTT בודד, והערך 1000 הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>N</mi><mo>⋅</mo><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">2N\\cdot RTT</annotation></semantics></math></span>, כלומר ספירה כפולה. הערך 600 סופר גם את אובייקט הבסיס, אבל הבסיס עולה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">2RTT</annotation></semantics></math></span> בשני המצבים.",
      "recapHtml": "persistent חוסך N·RTT לעומת non-persistent"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔌",
    "title": "כמה חיבורי TCP?",
    "goal": "לספור חיבורי TCP לפי שמות שרתים, ולחשב כמה סבבי בקשות נדרשים כשהדפדפן פותח עד 6 חיבורים מקבילים לשרת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>שלושה כללים לספירה:</p>\n<ol>\n<li><b>HTTP/1.1 persistent, חיבור אחד לכל שם שרת.</b> מחלקים את האובייקטים לפי <b>שם המארח</b> שבכתובת (<code>www.shop.com</code> ו-<code>img.shop.com</code> הם שני שמות). לכל שם חיבור persistent אחד. כשהשאלה אומרת \"persistent וללא pipelining\" ולא מזכירה חיבורים מקבילים, זה הכלל.</li>\n<li><b>שמות שונים הם שרתים שונים גם עם אותה כתובת IP.</b> שני שמות שנפתרו לאותה כתובת נספרים כשני חיבורים ב-HTTP/1.1. (איחוד לפי IP שייך ל-HTTP/2.)</li>\n<li><b>HTTP/2:</b> חיבור TCP אחד לשרת, ועליו multiplexing של כל הבקשות. 100 משאבים משרת אחד הם חיבור אחד.</li>\n</ol>\n<h3>6 חיבורים מקבילים</h3>\n<p>ב-HTTP/1.1 בלי pipelining כל חיבור מטפל בבקשה אחת בכל פעם. כדי להאיץ, דפדפן פותח עד <b>6 חיבורים מקבילים לכל שרת</b>. אם יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> אובייקטים באותו שרת (והדף כבר הגיע), הם נטענים בסבבים, וכל סבב עולה RTT אחד (כשמזניחים שידור):</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mtext>rounds</mtext><mo>=</mo><mrow><mo fence=\"true\">⌈</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>n</mi><mn>6</mn></mfrac></mstyle><mo fence=\"true\">⌉</mo></mrow></mrow><annotation encoding=\"application/x-tex\">\\text{rounds}=\\left\\lceil \\dfrac{n}{6}\\right\\rceil</annotation></semantics></math></span></div>\n<p>שרתים שונים עובדים <b>במקביל</b>, ולכן מספר הסבבים הוא המקסימום על השרתים, לא הסכום: המגבלה היא <b>לכל שרת</b>.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> 13 תמונות בשרת אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>13</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil13/6\\rceil=3</annotation></semantics></math></span> סבבים. 5 תמונות בשרת א' ו-20 בשרת ב': <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>max</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mo stretchy=\"false\">⌈</mo><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo separator=\"true\">,</mo><mo stretchy=\"false\">⌈</mo><mn>20</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo stretchy=\"false\">)</mo><mo>=</mo><mi>max</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">\\max(\\lceil5/6\\rceil,\\lceil20/6\\rceil)=\\max(1,4)=4</annotation></semantics></math></span> סבבים. זה לא הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">1+4=5</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>25</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil25/6\\rceil=5</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ <b>מוסכמת מבחן.</b> בשאלה \"כמה חיבורי TCP דרושים להורדת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>N</mi></mrow><annotation encoding=\"application/x-tex\">N</annotation></semantics></math></span> משאבים ב-HTTP/1.1 וב-HTTP/2\" המפתח מחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>N</mi><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil N/6\\rceil</annotation></semantics></math></span> ל-HTTP/1.1 (למשל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil100/6\\rceil=17</annotation></semantics></math></span>) וחיבור אחד ל-HTTP/2. אם לא בטוחים, פוסלים כל תשובה שבה HTTP/2 מקבל יותר מחיבור אחד לשרת.</div>\n"
    },
    "questions": [
     {
      "id": "app-C04-Q1",
      "question": "הדפדפן טוען `http://www.a.com/index.html`. בדף קובץ HTML (מ-a.com), שלוש תמונות מ-a.com, שתי תמונות מ-b.com ותמונה אחת מ-c.com. HTTP/1.1 persistent וללא pipelining, חיבור אחד לכל שם שרת. כמה חיבורי TCP נדרשים?",
      "options": [
       {
        "id": "a",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "d",
      "explanation": "יש שלושה שמות שרת שונים (a.com, b.com, c.com), ולכל אחד חיבור persistent אחד שמשרת את כל האובייקטים שלו ברצף: 3. הערך 7 הוא חיבור לכל אובייקט (HTTP 1.0), הערך 6 סופר רק את התמונות, והערך 1 מתעלם מכך שהאובייקטים בשרתים שונים.",
      "recap": "persistent: חיבור אחד לכל שם שרת",
      "questionHtml": "הדפדפן טוען <code class=\"tok\" dir=\"ltr\">http://www.a.com/index.html</code>. בדף קובץ HTML (מ-a.com), שלוש תמונות מ-a.com, שתי תמונות מ-b.com ותמונה אחת מ-c.com. HTTP/1.1 persistent וללא pipelining, חיבור אחד לכל שם שרת. כמה חיבורי TCP נדרשים?",
      "explanationHtml": "יש שלושה שמות שרת שונים (a.com, b.com, c.com), ולכל אחד חיבור persistent אחד שמשרת את כל האובייקטים שלו ברצף: 3. הערך 7 הוא חיבור לכל אובייקט (HTTP 1.0), הערך 6 סופר רק את התמונות, והערך 1 מתעלם מכך שהאובייקטים בשרתים שונים.",
      "recapHtml": "persistent: חיבור אחד לכל שם שרת"
     },
     {
      "id": "app-C04-Q2",
      "question": "הדף `http://www.shop.com/index.html` כולל תמונה מ-`www.shop.com`, תמונה מ-`img.shop.com` ותמונה נוספת מ-`www.shop.com`. DNS מחזיר לשני השמות את אותה כתובת IP. HTTP/1.1 persistent וללא pipelining, חיבור אחד לכל שם שרת. כמה חיבורי TCP נדרשים?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "d",
        "value": "4",
        "type": "text",
        "html": "4"
       }
      ],
      "correctId": "b",
      "explanation": "הספירה היא לפי שם המארח: `www.shop.com` ו-`img.shop.com` הם שני שמות, ולכן שני חיבורים, גם אם כתובת ה-IP זהה. הערך 1 מאחד לפי IP (כך עושה HTTP/2, לא HTTP/1.1), והערכים 3 ו-4 סופרים אובייקטים.",
      "recap": "שמות שונים = חיבורים שונים, גם עם אותו IP",
      "questionHtml": "הדף <code class=\"tok\" dir=\"ltr\">http://www.shop.com/index.html</code> כולל תמונה מ-<code class=\"tok\" dir=\"ltr\">www.shop.com</code>, תמונה מ-<code class=\"tok\" dir=\"ltr\">img.shop.com</code> ותמונה נוספת מ-<code class=\"tok\" dir=\"ltr\">www.shop.com</code>. DNS מחזיר לשני השמות את אותה כתובת IP. HTTP/1.1 persistent וללא pipelining, חיבור אחד לכל שם שרת. כמה חיבורי TCP נדרשים?",
      "explanationHtml": "הספירה היא לפי שם המארח: <code class=\"tok\" dir=\"ltr\">www.shop.com</code> ו-<code class=\"tok\" dir=\"ltr\">img.shop.com</code> הם שני שמות, ולכן שני חיבורים, גם אם כתובת ה-IP זהה. הערך 1 מאחד לפי IP (כך עושה HTTP/2, לא HTTP/1.1), והערכים 3 ו-4 סופרים אובייקטים.",
      "recapHtml": "שמות שונים = חיבורים שונים, גם עם אותו IP"
     },
     {
      "id": "app-C04-Q3",
      "question": "אתר עם 80 משאבים משרת אחד. כמה חיבורי TCP ישמש הדפדפן מול השרת הזה ב-**HTTP/2**?",
      "options": [
       {
        "id": "a",
        "value": "80",
        "type": "text",
        "html": "80"
       },
       {
        "id": "b",
        "value": "14",
        "type": "text",
        "html": "14"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "6",
        "type": "text",
        "html": "6"
       }
      ],
      "correctId": "c",
      "explanation": "HTTP/2 פותח חיבור TCP אחד לשרת ומריץ עליו את כל הבקשות במקביל (multiplexing). הערך 14 הוא $\\lceil80/6\\rceil$ של HTTP/1.1, הערך 6 הוא מספר החיבורים המקבילים של הדפדפן ב-HTTP/1.1, והערך 80 הוא חיבור לכל משאב.",
      "recap": "HTTP/2: חיבור אחד לשרת",
      "questionHtml": "אתר עם 80 משאבים משרת אחד. כמה חיבורי TCP ישמש הדפדפן מול השרת הזה ב-<strong>HTTP/2</strong>?",
      "explanationHtml": "HTTP/2 פותח חיבור TCP אחד לשרת ומריץ עליו את כל הבקשות במקביל (multiplexing). הערך 14 הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>80</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil80/6\\rceil</annotation></semantics></math></span> של HTTP/1.1, הערך 6 הוא מספר החיבורים המקבילים של הדפדפן ב-HTTP/1.1, והערך 80 הוא חיבור לכל משאב.",
      "recapHtml": "HTTP/2: חיבור אחד לשרת"
     },
     {
      "id": "app-C04-Q4",
      "question": "הדפדפן פותח עד 6 חיבורים מקבילים לשרת. הדף כבר הגיע, ונשארו 40 תמונות באותו שרת (persistent וללא pipelining). מזניחים זמן שידור. כמה סבבי RTT דרושים לטעינת התמונות?",
      "options": [
       {
        "id": "a",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "b",
        "value": "40",
        "type": "text",
        "html": "40"
       },
       {
        "id": "c",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "d",
        "value": "8",
        "type": "text",
        "html": "8"
       }
      ],
      "correctId": "c",
      "explanation": "בכל סבב נטענות עד 6 תמונות במקביל: $\\lceil40/6\\rceil=7$ סבבים (שישה סבבים מלאים ועוד סבב של 4 תמונות). הערך 6 מעגל כלפי מטה ומשאיר תמונות, והערך 40 הוא בלי מקביליות. הערך 8 מוסיף סבב שאין לו סיבה.",
      "recap": "סבבים = ⌈n/6⌉",
      "questionHtml": "הדפדפן פותח עד 6 חיבורים מקבילים לשרת. הדף כבר הגיע, ונשארו 40 תמונות באותו שרת (persistent וללא pipelining). מזניחים זמן שידור. כמה סבבי RTT דרושים לטעינת התמונות?",
      "explanationHtml": "בכל סבב נטענות עד 6 תמונות במקביל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>40</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil40/6\\rceil=7</annotation></semantics></math></span> סבבים (שישה סבבים מלאים ועוד סבב של 4 תמונות). הערך 6 מעגל כלפי מטה ומשאיר תמונות, והערך 40 הוא בלי מקביליות. הערך 8 מוסיף סבב שאין לו סיבה.",
      "recapHtml": "סבבים = ⌈n/6⌉"
     },
     {
      "id": "app-C04-Q5",
      "question": "הדפדפן פותח עד 6 חיבורים מקבילים **לכל שרת**. הדף כבר הגיע, ונשארו 14 תמונות בשרת א' ו-20 תמונות בשרת ב', ושני השרתים נטענים במקביל (persistent וללא pipelining, מזניחים זמן שידור). כמה סבבי RTT דרושים?",
      "options": [
       {
        "id": "a",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "34",
        "type": "text",
        "html": "34"
       },
       {
        "id": "d",
        "value": "4",
        "type": "text",
        "html": "4"
       }
      ],
      "correctId": "d",
      "explanation": "המגבלה היא לכל שרת: שרת א' צריך $\\lceil14/6\\rceil=3$ סבבים ושרת ב' $\\lceil20/6\\rceil=4$, והם רצים במקביל, ולכן המקסימום: 4. הערך 7 הוא הסכום (כאילו השרתים נטענים בזה אחר זה). הערך 6 הוא $\\lceil34/6\\rceil$, כאילו 6 החיבורים משותפים לשני השרתים. הערך 34 הוא בלי מקביליות.",
      "recap": "שרתים במקביל: מקסימום של ⌈n/6⌉ על השרתים",
      "questionHtml": "הדפדפן פותח עד 6 חיבורים מקבילים <strong>לכל שרת</strong>. הדף כבר הגיע, ונשארו 14 תמונות בשרת א' ו-20 תמונות בשרת ב', ושני השרתים נטענים במקביל (persistent וללא pipelining, מזניחים זמן שידור). כמה סבבי RTT דרושים?",
      "explanationHtml": "המגבלה היא לכל שרת: שרת א' צריך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>14</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil14/6\\rceil=3</annotation></semantics></math></span> סבבים ושרת ב' <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>20</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil20/6\\rceil=4</annotation></semantics></math></span>, והם רצים במקביל, ולכן המקסימום: 4. הערך 7 הוא הסכום (כאילו השרתים נטענים בזה אחר זה). הערך 6 הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>34</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil34/6\\rceil</annotation></semantics></math></span>, כאילו 6 החיבורים משותפים לשני השרתים. הערך 34 הוא בלי מקביליות.",
      "recapHtml": "שרתים במקביל: מקסימום של ⌈n/6⌉ על השרתים"
     },
     {
      "id": "app-C04-Q6",
      "question": "לפי המוסכמה של שאלות מבחן (דפדפן ב-HTTP/1.1 מחשב $\\lceil N/6\\rceil$ חיבורים, ו-HTTP/2 פותח חיבור אחד לשרת): אתר עם 60 משאבים משרת אחד. כמה חיבורי TCP דרושים בכל אחת מהגרסאות?",
      "options": [
       {
        "id": "a",
        "value": "10 חיבורים ב-HTTP/1.1, וחיבור אחד ב-HTTP/2",
        "type": "text",
        "html": "10 חיבורים ב-HTTP/1.1, וחיבור אחד ב-HTTP/2"
       },
       {
        "id": "b",
        "value": "10 חיבורים ב-HTTP/1.1, ו-10 חיבורים ב-HTTP/2",
        "type": "text",
        "html": "10 חיבורים ב-HTTP/1.1, ו-10 חיבורים ב-HTTP/2"
       },
       {
        "id": "c",
        "value": "60 חיבורים ב-HTTP/1.1, וחיבור אחד ב-HTTP/2",
        "type": "text",
        "html": "60 חיבורים ב-HTTP/1.1, וחיבור אחד ב-HTTP/2"
       },
       {
        "id": "d",
        "value": "6 חיבורים ב-HTTP/1.1, ו-6 חיבורים ב-HTTP/2",
        "type": "text",
        "html": "6 חיבורים ב-HTTP/1.1, ו-6 חיבורים ב-HTTP/2"
       }
      ],
      "correctId": "a",
      "explanation": "$\\lceil60/6\\rceil=10$ ב-HTTP/1.1, וב-HTTP/2 תמיד חיבור אחד לשרת. כל תשובה שבה HTTP/2 מקבל יותר מחיבור אחד שגויה. הערך 60 הוא חיבור לכל משאב, ו-6 הוא רק מגבלת המקביליות.",
      "recap": "HTTP/1.1: ⌈N/6⌉, HTTP/2: חיבור אחד",
      "questionHtml": "לפי המוסכמה של שאלות מבחן (דפדפן ב-HTTP/1.1 מחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>N</mi><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil N/6\\rceil</annotation></semantics></math></span> חיבורים, ו-HTTP/2 פותח חיבור אחד לשרת): אתר עם 60 משאבים משרת אחד. כמה חיבורי TCP דרושים בכל אחת מהגרסאות?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>60</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil60/6\\rceil=10</annotation></semantics></math></span> ב-HTTP/1.1, וב-HTTP/2 תמיד חיבור אחד לשרת. כל תשובה שבה HTTP/2 מקבל יותר מחיבור אחד שגויה. הערך 60 הוא חיבור לכל משאב, ו-6 הוא רק מגבלת המקביליות.",
      "recapHtml": "HTTP/1.1: ⌈N/6⌉, HTTP/2: חיבור אחד"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🗄️",
    "title": "מטמון ו-GET מותנה",
    "goal": "להבין מתי מטמון חוסך זמן ותעבורה, מה עושה GET מותנה, ומה אומר max-age, ולחשב זמן ממוצע וניצולת קו.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>Web cache</b> (מטמון בדפדפן או שרת proxy) שומר עותקים של אובייקטים ועונה במקום שרת המקור. כך מקטינים את זמן התגובה ואת העומס על קו הגישה.</p>\n<h3>GET מותנה</h3>\n<p>העותק במטמון אולי כבר לא עדכני. הלקוח שולח <code>If-Modified-Since: &lt;תאריך&gt;</code> (התאריך שקיבל קודם בכותרת <code>Last-Modified</code>):</p>\n<ul>\n<li>האובייקט לא השתנה: השרת עונה <b>304 Not Modified בלי גוף</b>, והלקוח משתמש בעותק שלו.</li>\n<li>האובייקט השתנה: <b>200</b> עם האובייקט החדש בגוף.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 <b>304 אינו חינם.</b> הוא חוסך את שידור הגוף, אבל עדיין עולה סבב RTT אחד. GET מותנה משתלם כשהאובייקט גדול ומשתנה לעיתים רחוקות. הוא לא משתלם \"תמיד\": לתוכן שמשתנה בכל בקשה זו תקורה בלבד. ו-PUT הוא לא דרך לבדוק שינוי.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> אובייקט של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mtext> </mtext><mi>M</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">1\\,MB</annotation></semantics></math></span> בקו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>80</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">80\\,Mbps</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=100\\,ms</annotation></semantics></math></span>. זמן השידור הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><mrow><mn>80</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></mfrac></mstyle><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\dfrac{8\\cdot10^{6}}{80\\cdot10^{6}}=100\\,ms</annotation></semantics></math></span>. GET רגיל (בחיבור פתוח): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>+</mo><mn>100</mn><mo>=</mo><mn>200</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100+100=200\\,ms</annotation></semantics></math></span>. GET מותנה שהאובייקט לא השתנה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">100\\,ms</annotation></semantics></math></span> בלבד.</div>\n<h3>max-age</h3>\n<p><code>Cache-Control: max-age=3600</code> אומר שהתגובה תקפה במטמון <b>3600 שניות, כלומר שעה</b>, בלי לשאול שוב את השרת. הערך הוא תמיד <b>בשניות</b>, לא באלפיות שנייה.</p>\n<h3>חישובים עם מטמון</h3>\n<p>אם שיעור הפגיעה (hit rate) הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span>, רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">1-h</annotation></semantics></math></span> מהבקשות עוברות בקו הגישה לשרת המקור:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mtext>utilization</mtext><mrow><mi>n</mi><mi>e</mi><mi>w</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><mi>h</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><msub><mtext>utilization</mtext><mrow><mi>o</mi><mi>l</mi><mi>d</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">\\text{utilization}_{new}=(1-h)\\cdot\\text{utilization}_{old}</annotation></semantics></math></span></div>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mtext>avg delay</mtext><mo>=</mo><mi>h</mi><mo>⋅</mo><msub><mi>d</mi><mrow><mi>h</mi><mi>i</mi><mi>t</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><mi>h</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><msub><mi>d</mi><mrow><mi>m</mi><mi>i</mi><mi>s</mi><mi>s</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">\\text{avg delay}=h\\cdot d_{hit}+(1-h)\\cdot d_{miss}</annotation></semantics></math></span></div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">h=0.5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>h</mi><mi>i</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>20</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">d_{hit}=20\\,ms</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>m</mi><mi>i</mi><mi>s</mi><mi>s</mi></mrow></msub><mo>=</mo><mn>220</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">d_{miss}=220\\,ms</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.5</mn><mo>⋅</mo><mn>20</mn><mo>+</mo><mn>0.5</mn><mo>⋅</mo><mn>220</mn><mo>=</mo><mn>120</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">0.5\\cdot20+0.5\\cdot220=120\\,ms</annotation></semantics></math></span>. ניצולת הקו הייתה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.8</mn></mrow><annotation encoding=\"application/x-tex\">0.8</annotation></semantics></math></span>, ועכשיו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.5</mn><mo>⋅</mo><mn>0.8</mn><mo>=</mo><mn>0.4</mn></mrow><annotation encoding=\"application/x-tex\">0.5\\cdot0.8=0.4</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ <b>מכפילים את ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>m</mi><mi>i</mi><mi>s</mi><mi>s</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">d_{miss}</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">1-h</annotation></semantics></math></span>, לא ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span>.</b> ושימו לב: פגיעה במטמון לא מורידה את ניצולת הקו פי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> אלא משאירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">1-h</annotation></semantics></math></span> ממנה.</div>\n"
    },
    "questions": [
     {
      "id": "app-C05-Q1",
      "question": "הלקוח מחזיק עותק של תמונה עם `Last-Modified` מאתמול. הוא שולח GET מותנה, והתמונה לא השתנה. מה השרת עונה?",
      "options": [
       {
        "id": "a",
        "value": "304 Not Modified בלי גוף",
        "type": "text",
        "html": "304 Not Modified בלי גוף"
       },
       {
        "id": "b",
        "value": "200 OK עם התמונה כולה בגוף",
        "type": "text",
        "html": "200 OK עם התמונה כולה בגוף"
       },
       {
        "id": "c",
        "value": "404 Not Found",
        "type": "text",
        "html": "404 Not Found"
       },
       {
        "id": "d",
        "value": "301 Moved Permanently",
        "type": "text",
        "html": "301 Moved Permanently"
       }
      ],
      "correctId": "a",
      "explanation": "כשהאובייקט לא השתנה מאז התאריך שב-`If-Modified-Since`, השרת עונה 304 בלי גוף והלקוח משתמש בעותק שלו. תגובת 200 עם הגוף הייתה חוזרת רק אם התמונה הייתה משתנה. 404 ו-301 אינם קשורים.",
      "recap": "לא השתנה: 304 בלי גוף",
      "questionHtml": "הלקוח מחזיק עותק של תמונה עם <code class=\"tok\" dir=\"ltr\">Last-Modified</code> מאתמול. הוא שולח GET מותנה, והתמונה לא השתנה. מה השרת עונה?",
      "explanationHtml": "כשהאובייקט לא השתנה מאז התאריך שב-<code class=\"tok\" dir=\"ltr\">If-Modified-Since</code>, השרת עונה 304 בלי גוף והלקוח משתמש בעותק שלו. תגובת 200 עם הגוף הייתה חוזרת רק אם התמונה הייתה משתנה. 404 ו-301 אינם קשורים.",
      "recapHtml": "לא השתנה: 304 בלי גוף"
     },
     {
      "id": "app-C05-Q2",
      "question": "$RTT=100\\ ms$, אובייקט של $1\\ MB$ בקו של $80\\ Mbps$, החיבור כבר פתוח. כמה זמן עולה GET **מותנה** כשהאובייקט לא השתנה?",
      "options": [
       {
        "id": "a",
        "value": "300 ms",
        "type": "text",
        "html": "300 ms"
       },
       {
        "id": "b",
        "value": "0 ms",
        "type": "text",
        "html": "0 ms"
       },
       {
        "id": "c",
        "value": "100 ms",
        "type": "text",
        "html": "100 ms"
       },
       {
        "id": "d",
        "value": "200 ms",
        "type": "text",
        "html": "200 ms"
       }
      ],
      "correctId": "c",
      "explanation": "תגובת 304 היא בלי גוף, ולכן אין זמן שידור, אבל הבקשה עדיין עולה סבב RTT: 100 ms. הערך 200 ms הוא GET רגיל ($100$ ms RTT ועוד $100$ ms שידור). הערך 0 שוכח שגם 304 עולה סבב. הערך 300 ms סופר פתיחת חיבור שכבר פתוח.",
      "recap": "304 חוסך שידור, לא RTT",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=100\\ ms</annotation></semantics></math></span>, אובייקט של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mtext> </mtext><mi>M</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">1\\ MB</annotation></semantics></math></span> בקו של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>80</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">80\\ Mbps</annotation></semantics></math></span>, החיבור כבר פתוח. כמה זמן עולה GET <strong>מותנה</strong> כשהאובייקט לא השתנה?",
      "explanationHtml": "תגובת 304 היא בלי גוף, ולכן אין זמן שידור, אבל הבקשה עדיין עולה סבב RTT: 100 ms. הערך 200 ms הוא GET רגיל (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">100</annotation></semantics></math></span> ms RTT ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">100</annotation></semantics></math></span> ms שידור). הערך 0 שוכח שגם 304 עולה סבב. הערך 300 ms סופר פתיחת חיבור שכבר פתוח.",
      "recapHtml": "304 חוסך שידור, לא RTT"
     },
     {
      "id": "app-C05-Q3",
      "question": "מה המשמעות של הכותרת `Cache-Control: max-age=7200` בתגובת HTTP?",
      "options": [
       {
        "id": "a",
        "value": "אפשר להשתמש בתגובה מהמטמון למשך שעתיים",
        "type": "text",
        "html": "אפשר להשתמש בתגובה מהמטמון למשך שעתיים"
       },
       {
        "id": "b",
        "value": "אפשר להשתמש בתגובה מהמטמון למשך 7200 אלפיות שנייה",
        "type": "text",
        "html": "אפשר להשתמש בתגובה מהמטמון למשך 7200 אלפיות שנייה"
       },
       {
        "id": "c",
        "value": "אסור לשמור את התגובה במטמון",
        "type": "text",
        "html": "אסור לשמור את התגובה במטמון"
       },
       {
        "id": "d",
        "value": "התגובה נשמרת במטמון ללא הגבלת זמן",
        "type": "text",
        "html": "התגובה נשמרת במטמון ללא הגבלת זמן"
       }
      ],
      "correctId": "a",
      "explanation": "ערך max-age נמדד בשניות: $7200$ שניות הן שעתיים. אלפיות שנייה זו טעות ביחידה, ו-max-age אינו \"בלי הגבלה\" ואינו איסור שמירה.",
      "recap": "max-age הוא בשניות",
      "questionHtml": "מה המשמעות של הכותרת <code class=\"tok\" dir=\"ltr\">Cache-Control: max-age=7200</code> בתגובת HTTP?",
      "explanationHtml": "ערך max-age נמדד בשניות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7200</mn></mrow><annotation encoding=\"application/x-tex\">7200</annotation></semantics></math></span> שניות הן שעתיים. אלפיות שנייה זו טעות ביחידה, ו-max-age אינו \"בלי הגבלה\" ואינו איסור שמירה.",
      "recapHtml": "max-age הוא בשניות"
     },
     {
      "id": "app-C05-Q4",
      "question": "אתר מציג תמונות גדולות באיכות גבוהה, והתמונות משתנות מדי פעם. השרת תומך ב-`Last-Modified`. מתי כדאי להשתמש ב-GET מותנה?",
      "options": [
       {
        "id": "a",
        "value": "תמיד, בכל בקשה לכל אובייקט, גם לתוכן שמשתנה בכל בקשה",
        "type": "text",
        "html": "תמיד, בכל בקשה לכל אובייקט, גם לתוכן שמשתנה בכל בקשה"
       },
       {
        "id": "b",
        "value": "כאשר התמונה עשויה להשתנות אבל לא בכל בקשה, ואין צורך להוריד את הגוף המלא בכל פעם",
        "type": "text",
        "html": "כאשר התמונה עשויה להשתנות אבל לא בכל בקשה, ואין צורך להוריד את הגוף המלא בכל פעם"
       },
       {
        "id": "c",
        "value": "כאשר רוצים לדעת אם המשאב השתנה, באמצעות PUT",
        "type": "text",
        "html": "כאשר רוצים לדעת אם המשאב השתנה, באמצעות PUT"
       },
       {
        "id": "d",
        "value": "אף פעם, כי הוא עולה RTT",
        "type": "text",
        "html": "אף פעם, כי הוא עולה RTT"
       }
      ],
      "correctId": "b",
      "explanation": "ב-GET מותנה נחסך שידור גוף גדול כשהאובייקט לא השתנה, וזה משתלם בדיוק לאובייקט גדול שמשתנה לעיתים. \"תמיד\" שגוי: לתוכן שמשתנה בכל בקשה זו תקורה בלבד. PUT הוא כתיבת משאב ולא בדיקת שינוי. והטענה שהוא עולה RTT נכונה, אבל RTT עולה פחות משידור גוף גדול.",
      "recap": "GET מותנה: אובייקט גדול שמשתנה לעיתים",
      "questionHtml": "אתר מציג תמונות גדולות באיכות גבוהה, והתמונות משתנות מדי פעם. השרת תומך ב-<code class=\"tok\" dir=\"ltr\">Last-Modified</code>. מתי כדאי להשתמש ב-GET מותנה?",
      "explanationHtml": "ב-GET מותנה נחסך שידור גוף גדול כשהאובייקט לא השתנה, וזה משתלם בדיוק לאובייקט גדול שמשתנה לעיתים. \"תמיד\" שגוי: לתוכן שמשתנה בכל בקשה זו תקורה בלבד. PUT הוא כתיבת משאב ולא בדיקת שינוי. והטענה שהוא עולה RTT נכונה, אבל RTT עולה פחות משידור גוף גדול.",
      "recapHtml": "GET מותנה: אובייקט גדול שמשתנה לעיתים"
     },
     {
      "id": "app-C05-Q5",
      "question": "קו הגישה של ארגון מנוצל ב-$0.9$. מוסיפים web cache עם שיעור פגיעה (hit rate) של $0.4$. מה הניצולת החדשה של קו הגישה?",
      "options": [
       {
        "id": "a",
        "value": "0.9",
        "type": "text",
        "html": "0.9"
       },
       {
        "id": "b",
        "value": "0.36",
        "type": "text",
        "html": "0.36"
       },
       {
        "id": "c",
        "value": "0.5",
        "type": "text",
        "html": "0.5"
       },
       {
        "id": "d",
        "value": "0.54",
        "type": "text",
        "html": "0.54"
       }
      ],
      "correctId": "d",
      "explanation": "רק הבקשות שפספסו את המטמון ($1-0.4=0.6$) עוברות בקו הגישה: $0.6\\cdot0.9=0.54$. הערך 0.36 מכפיל בשיעור הפגיעה במקום בשיעור הפספוס, הערך 0.5 הוא חיסור לא נכון ($0.9-0.4$), והערך 0.9 מתעלם מהמטמון.",
      "recap": "ניצולת חדשה = (1 − hit rate) × ניצולת ישנה",
      "questionHtml": "קו הגישה של ארגון מנוצל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.9</mn></mrow><annotation encoding=\"application/x-tex\">0.9</annotation></semantics></math></span>. מוסיפים web cache עם שיעור פגיעה (hit rate) של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.4</mn></mrow><annotation encoding=\"application/x-tex\">0.4</annotation></semantics></math></span>. מה הניצולת החדשה של קו הגישה?",
      "explanationHtml": "רק הבקשות שפספסו את המטמון (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><mn>0.4</mn><mo>=</mo><mn>0.6</mn></mrow><annotation encoding=\"application/x-tex\">1-0.4=0.6</annotation></semantics></math></span>) עוברות בקו הגישה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.6</mn><mo>⋅</mo><mn>0.9</mn><mo>=</mo><mn>0.54</mn></mrow><annotation encoding=\"application/x-tex\">0.6\\cdot0.9=0.54</annotation></semantics></math></span>. הערך 0.36 מכפיל בשיעור הפגיעה במקום בשיעור הפספוס, הערך 0.5 הוא חיסור לא נכון (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.9</mn><mo>−</mo><mn>0.4</mn></mrow><annotation encoding=\"application/x-tex\">0.9-0.4</annotation></semantics></math></span>), והערך 0.9 מתעלם מהמטמון.",
      "recapHtml": "ניצולת חדשה = (1 − hit rate) × ניצולת ישנה"
     },
     {
      "id": "app-C05-Q6",
      "question": "שיעור הפגיעה במטמון הוא $0.6$. תשובה מהמטמון לוקחת $10\\ ms$, ופספוס (פנייה לשרת המקור) לוקח בסך הכול $210\\ ms$. מה זמן התגובה הממוצע?",
      "options": [
       {
        "id": "a",
        "value": "130 ms",
        "type": "text",
        "html": "130 ms"
       },
       {
        "id": "b",
        "value": "110 ms",
        "type": "text",
        "html": "110 ms"
       },
       {
        "id": "c",
        "value": "210 ms",
        "type": "text",
        "html": "210 ms"
       },
       {
        "id": "d",
        "value": "90 ms",
        "type": "text",
        "html": "90 ms"
       }
      ],
      "correctId": "d",
      "explanation": "$0.6\\cdot10+0.4\\cdot210=6+84=90$ ms. הערך 130 מחליף בטעות את ההסתברויות ($0.4\\cdot10+0.6\\cdot210$), הערך 110 הוא ממוצע פשוט של שני הזמנים בלי משקל, והערך 210 מתעלם מהמטמון.",
      "recap": "ממוצע משוקלל: h·פגיעה + (1−h)·פספוס",
      "questionHtml": "שיעור הפגיעה במטמון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.6</mn></mrow><annotation encoding=\"application/x-tex\">0.6</annotation></semantics></math></span>. תשובה מהמטמון לוקחת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">10\\ ms</annotation></semantics></math></span>, ופספוס (פנייה לשרת המקור) לוקח בסך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>210</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">210\\ ms</annotation></semantics></math></span>. מה זמן התגובה הממוצע?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.6</mn><mo>⋅</mo><mn>10</mn><mo>+</mo><mn>0.4</mn><mo>⋅</mo><mn>210</mn><mo>=</mo><mn>6</mn><mo>+</mo><mn>84</mn><mo>=</mo><mn>90</mn></mrow><annotation encoding=\"application/x-tex\">0.6\\cdot10+0.4\\cdot210=6+84=90</annotation></semantics></math></span> ms. הערך 130 מחליף בטעות את ההסתברויות (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.4</mn><mo>⋅</mo><mn>10</mn><mo>+</mo><mn>0.6</mn><mo>⋅</mo><mn>210</mn></mrow><annotation encoding=\"application/x-tex\">0.4\\cdot10+0.6\\cdot210</annotation></semantics></math></span>), הערך 110 הוא ממוצע פשוט של שני הזמנים בלי משקל, והערך 210 מתעלם מהמטמון.",
      "recapHtml": "ממוצע משוקלל: h·פגיעה + (1−h)·פספוס"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🌳",
    "title": "DNS: היררכיה, איטרטיבית ורקורסיבית",
    "goal": "לתאר את מסלול חיפוש הכתובת, להבדיל בין שאילתה איטרטיבית לרקורסיבית, ולחשב זמן חיפוש.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>DNS</b> מתרגם <b>שם</b> (כמו <code>www.cnn.com</code>) ל<b>כתובת IP</b>. שאילתת DNS רגילה רצה מעל <b>UDP</b> (פורט 53). המבנה היררכי:</p>\n<ul>\n<li><b>Root</b>: יודע לאילו שרתי TLD לפנות.</li>\n<li><b>TLD</b> (למשל <code>.com</code>): יודע מי שרת ה-authoritative של הדומיין.</li>\n<li><b>Authoritative</b>: יודע את כתובת ה-IP עצמה.</li>\n<li><b>Resolver מקומי</b> (שרת DNS מקומי): הלקוח פונה אליו, והוא מבצע את החיפוש בשמו.</li>\n</ul>\n<table><thead><tr><th>רשומה</th><th>משמעות</th></tr></thead><tbody>\n<tr><td>A</td><td>שם מארח אל כתובת IP</td></tr>\n<tr><td>NS</td><td>דומיין אל שרת authoritative שלו</td></tr>\n<tr><td>CNAME</td><td>כינוי אל השם הקנוני</td></tr>\n<tr><td>MX</td><td>שרת הדואר של הדומיין</td></tr>\n</tbody></table>\n<h3>המסלול כשאין מטמון</h3>\n<p>הלקוח שואל את ה-Resolver המקומי, וה-Resolver פונה ל-Root, אחר כך ל-TLD, ואחר כך ל-Authoritative. ה-Root וה-TLD לא מחזירים כתובת סופית אלא <b>הפניה</b> לשרת הבא. רק ה-Authoritative מחזיר את ה-IP.</p>\n<h3>איטרטיבית מול רקורסיבית</h3>\n<ul>\n<li><b>איטרטיבית:</b> השרת אומר \"אני לא יודע, פנה לשרת הזה\", והשואל פונה הלאה בעצמו. ה-Resolver המקומי הוא זה ששולח את כל השאילתות, וחוזרות אליו הפניות.</li>\n<li><b>רקורסיבית:</b> השרת שנשאל מבצע את העבודה <b>בשם</b> השואל, פונה בעצמו לשרת הבא, והתשובה הסופית חוזרת בשרשרת.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 <b>איך מזהים:</b> אם השרת שנשאל מחזיר \"פנה לשרת אחר\", השאילתה איטרטיבית. אם הוא פונה בעצמו לשרת הבא וממתין לתשובה, היא רקורסיבית. בדרך כלל השאילתה מהלקוח ל-Resolver המקומי היא רקורסיבית.</div>\n<h3>זמן חיפוש</h3>\n<p>אם כל שאילתה לשרת נמשכת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">T</annotation></semantics></math></span> והרשומה לא במטמון, ה-Resolver מבצע שלוש שאילתות עוקבות (Root, TLD, Authoritative): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">3T</annotation></semantics></math></span>. אם ה-Resolver כבר מכיר את שרת ה-TLD במטמון, נשארות שתי שאילתות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">2T</annotation></semantics></math></span>.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mo>=</mo><mn>30</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">T=30\\,ms</annotation></semantics></math></span> ואין מטמון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>30</mn><mo>=</mo><mn>90</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">3\\cdot30=90\\,ms</annotation></semantics></math></span>. עם שרת ה-TLD ידוע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>60</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">60\\,ms</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>ספירת הודעות באיטרטיבית:</b> לקוח אל Resolver (1), Resolver ו-Root: שאילתה ותשובה (2), Resolver ו-TLD (2), Resolver ו-Authoritative (2), Resolver אל הלקוח (1): סה\"כ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1+6+1=8</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ <b>ה-Root אינו מחזיר כתובת סופית.</b> ו-ARP ו-DHCP אינם קשורים לציור כזה. \"איטרטיבית פרסיסטנטית\" אינה קיימת.</div>\n"
    },
    "questions": [
     {
      "id": "app-C06-Q1",
      "question": "כיצד מתבצע חיפוש כתובת ה-IP של `www.cnn.com` כשאין מידע במטמון של שרתי ה-DNS?",
      "options": [
       {
        "id": "a",
        "value": "ה-Resolver פונה ל-Authoritative, משם ל-TLD, ומשם ל-Root, שמחזיר את הכתובת",
        "type": "text",
        "html": "ה-Resolver פונה ל-Authoritative, משם ל-TLD, ומשם ל-Root, שמחזיר את הכתובת"
       },
       {
        "id": "b",
        "value": "ה-Resolver פונה ל-Root, שמפנה ל-TLD, שמפנה ל-Authoritative, שמחזיר את הכתובת",
        "type": "text",
        "html": "ה-Resolver פונה ל-Root, שמפנה ל-TLD, שמפנה ל-Authoritative, שמחזיר את הכתובת"
       },
       {
        "id": "c",
        "value": "הלקוח שולח ARP ל-Resolver, והוא מחזיר את הכתובת",
        "type": "text",
        "html": "הלקוח שולח ARP ל-Resolver, והוא מחזיר את הכתובת"
       },
       {
        "id": "d",
        "value": "ה-Root מחזיר מיד את כתובת ה-IP של `www.cnn.com`",
        "type": "text",
        "html": "ה-Root מחזיר מיד את כתובת ה-IP של <code class=\"tok\" dir=\"ltr\">www.cnn.com</code>"
       }
      ],
      "correctId": "b",
      "explanation": "המסלול הוא מלמעלה למטה: Root מפנה ל-TLD של `.com`, ה-TLD מפנה ל-Authoritative של `cnn.com`, והוא מחזיר את ה-IP. הסדר ההפוך שגוי, ARP מתרגם IP ל-MAC ברשת מקומית ולא שמות, וה-Root לא מחזיר כתובת סופית אלא הפניה.",
      "recap": "Root, אחריו TLD, אחריו Authoritative",
      "questionHtml": "כיצד מתבצע חיפוש כתובת ה-IP של <code class=\"tok\" dir=\"ltr\">www.cnn.com</code> כשאין מידע במטמון של שרתי ה-DNS?",
      "explanationHtml": "המסלול הוא מלמעלה למטה: Root מפנה ל-TLD של <code class=\"tok\" dir=\"ltr\">.com</code>, ה-TLD מפנה ל-Authoritative של <code class=\"tok\" dir=\"ltr\">cnn.com</code>, והוא מחזיר את ה-IP. הסדר ההפוך שגוי, ARP מתרגם IP ל-MAC ברשת מקומית ולא שמות, וה-Root לא מחזיר כתובת סופית אלא הפניה.",
      "recapHtml": "Root, אחריו TLD, אחריו Authoritative"
     },
     {
      "id": "app-C06-Q2",
      "question": "הניחו ש-Resolver מקומי שולח שאילתה לכל אחד מ-Root, TLD ו-Authoritative **באיטרטיבית** (כל שרת מחזיר הפניה או את התשובה), והלקוח שואל את ה-Resolver. סופרים כל שאילתה וכל תשובה, כולל השאילתה מהלקוח והתשובה אליו. כמה הודעות בסך הכול?",
      "options": [
       {
        "id": "a",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "d",
        "value": "10",
        "type": "text",
        "html": "10"
       }
      ],
      "correctId": "a",
      "explanation": "הלקוח שואל את ה-Resolver (1), שלושה שרתים כל אחד שאילתה ותשובה ($3\\cdot2=6$), והתשובה חוזרת ללקוח (1): $1+6+1=8$. הערך 6 סופר רק את המהלך בין ה-Resolver לשרתים, הערך 4 סופר רק שאילתות (או רק תשובות), והערך 10 מוסיף הודעות שלא קיימות.",
      "recap": "איטרטיבית: 1 + 2·3 + 1 = 8 הודעות",
      "questionHtml": "הניחו ש-Resolver מקומי שולח שאילתה לכל אחד מ-Root, TLD ו-Authoritative <strong>באיטרטיבית</strong> (כל שרת מחזיר הפניה או את התשובה), והלקוח שואל את ה-Resolver. סופרים כל שאילתה וכל תשובה, כולל השאילתה מהלקוח והתשובה אליו. כמה הודעות בסך הכול?",
      "explanationHtml": "הלקוח שואל את ה-Resolver (1), שלושה שרתים כל אחד שאילתה ותשובה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot2=6</annotation></semantics></math></span>), והתשובה חוזרת ללקוח (1): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>6</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1+6+1=8</annotation></semantics></math></span>. הערך 6 סופר רק את המהלך בין ה-Resolver לשרתים, הערך 4 סופר רק שאילתות (או רק תשובות), והערך 10 מוסיף הודעות שלא קיימות.",
      "recapHtml": "איטרטיבית: 1 + 2·3 + 1 = 8 הודעות"
     },
     {
      "id": "app-C06-Q3",
      "question": "ה-Resolver המקומי שלח שאילתה ל-Root וקיבל תשובה: \"אני לא יודע את הכתובת, פנה לשרת ה-TLD הזה\". אחר כך ה-Resolver עצמו פנה לשרת ה-TLD. איזו שאילתה זו מול ה-Root?",
      "options": [
       {
        "id": "a",
        "value": "רקורסיבית",
        "type": "text",
        "html": "רקורסיבית"
       },
       {
        "id": "b",
        "value": "שאילתת ARP",
        "type": "text",
        "html": "שאילתת ARP"
       },
       {
        "id": "c",
        "value": "איטרטיבית",
        "type": "text",
        "html": "איטרטיבית"
       },
       {
        "id": "d",
        "value": "שאילתת DHCP",
        "type": "text",
        "html": "שאילתת DHCP"
       }
      ],
      "correctId": "c",
      "explanation": "ה-Root החזיר הפניה והשואל פנה הלאה בעצמו: זו שאילתה איטרטיבית. בשאילתה רקורסיבית ה-Root עצמו היה פונה ל-TLD ומחזיר רק את התשובה הסופית. ARP ו-DHCP אינם פרוטוקולי חיפוש שמות.",
      "recap": "הפניה בחזרה לשואל = איטרטיבית",
      "questionHtml": "ה-Resolver המקומי שלח שאילתה ל-Root וקיבל תשובה: \"אני לא יודע את הכתובת, פנה לשרת ה-TLD הזה\". אחר כך ה-Resolver עצמו פנה לשרת ה-TLD. איזו שאילתה זו מול ה-Root?",
      "explanationHtml": "ה-Root החזיר הפניה והשואל פנה הלאה בעצמו: זו שאילתה איטרטיבית. בשאילתה רקורסיבית ה-Root עצמו היה פונה ל-TLD ומחזיר רק את התשובה הסופית. ARP ו-DHCP אינם פרוטוקולי חיפוש שמות.",
      "recapHtml": "הפניה בחזרה לשואל = איטרטיבית"
     },
     {
      "id": "app-C06-Q4",
      "question": "הלקוח שואל את ה-Resolver המקומי, וה-Resolver שולח שאילתה אחת ל-Root וממתין. ה-Root פונה בעצמו ל-TLD, ה-TLD פונה ל-Authoritative, והתשובה הסופית חוזרת בשרשרת עד ה-Resolver. איך מתאר זאת הציור?",
      "options": [
       {
        "id": "a",
        "value": "שאילתה איטרטיבית",
        "type": "text",
        "html": "שאילתה איטרטיבית"
       },
       {
        "id": "b",
        "value": "שאילתה רקורסיבית",
        "type": "text",
        "html": "שאילתה רקורסיבית"
       },
       {
        "id": "c",
        "value": "שאילתה איטרטיבית פרסיסטנטית",
        "type": "text",
        "html": "שאילתה איטרטיבית פרסיסטנטית"
       },
       {
        "id": "d",
        "value": "תהליך ARP",
        "type": "text",
        "html": "תהליך ARP"
       }
      ],
      "correctId": "b",
      "explanation": "כל שרת מבצע את העבודה בשם השואל ופונה בעצמו לשרת הבא, והתשובה הסופית חוזרת בשרשרת: זו שאילתה רקורסיבית. \"איטרטיבית פרסיסטנטית\" אינה קיימת, ו-ARP אינו קשור.",
      "recap": "השרת פונה בעצמו לשרת הבא = רקורסיבית",
      "questionHtml": "הלקוח שואל את ה-Resolver המקומי, וה-Resolver שולח שאילתה אחת ל-Root וממתין. ה-Root פונה בעצמו ל-TLD, ה-TLD פונה ל-Authoritative, והתשובה הסופית חוזרת בשרשרת עד ה-Resolver. איך מתאר זאת הציור?",
      "explanationHtml": "כל שרת מבצע את העבודה בשם השואל ופונה בעצמו לשרת הבא, והתשובה הסופית חוזרת בשרשרת: זו שאילתה רקורסיבית. \"איטרטיבית פרסיסטנטית\" אינה קיימת, ו-ARP אינו קשור.",
      "recapHtml": "השרת פונה בעצמו לשרת הבא = רקורסיבית"
     },
     {
      "id": "app-C06-Q5",
      "question": "שרת DNS מגיב תוך $25\\ ms$ לכל שאילתה. ה-Resolver לא מכיר כתובת של האתר, אבל במטמון שלו כבר יש את שרת ה-TLD של `.com`. כמה זמן לוקח לו למצוא את הכתובת (שאילתות ל-TLD ול-Authoritative בלבד)?",
      "options": [
       {
        "id": "a",
        "value": "75 ms",
        "type": "text",
        "html": "75 ms"
       },
       {
        "id": "b",
        "value": "25 ms",
        "type": "text",
        "html": "25 ms"
       },
       {
        "id": "c",
        "value": "50 ms",
        "type": "text",
        "html": "50 ms"
       },
       {
        "id": "d",
        "value": "100 ms",
        "type": "text",
        "html": "100 ms"
       }
      ],
      "correctId": "c",
      "explanation": "נשארו שתי שאילתות עוקבות (TLD ו-Authoritative): $2\\cdot25=50$ ms. הערך 75 הוא שלוש שאילתות ללא מטמון, הערך 25 הוא שאילתה אחת, והערך 100 הוא ארבע שאילתות.",
      "recap": "זמן חיפוש = מספר השאילתות העוקבות × T",
      "questionHtml": "שרת DNS מגיב תוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">25\\ ms</annotation></semantics></math></span> לכל שאילתה. ה-Resolver לא מכיר כתובת של האתר, אבל במטמון שלו כבר יש את שרת ה-TLD של <code class=\"tok\" dir=\"ltr\">.com</code>. כמה זמן לוקח לו למצוא את הכתובת (שאילתות ל-TLD ול-Authoritative בלבד)?",
      "explanationHtml": "נשארו שתי שאילתות עוקבות (TLD ו-Authoritative): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>25</mn><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot25=50</annotation></semantics></math></span> ms. הערך 75 הוא שלוש שאילתות ללא מטמון, הערך 25 הוא שאילתה אחת, והערך 100 הוא ארבע שאילתות.",
      "recapHtml": "זמן חיפוש = מספר השאילתות העוקבות × T"
     },
     {
      "id": "app-C06-Q6",
      "question": "איזו רשומת DNS מגדירה שם נוסף (כינוי) שמפנה לשם הקנוני של מארח?",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "MX",
        "type": "text",
        "html": "MX"
       },
       {
        "id": "c",
        "value": "NS",
        "type": "text",
        "html": "NS"
       },
       {
        "id": "d",
        "value": "CNAME",
        "type": "text",
        "html": "CNAME"
       }
      ],
      "correctId": "d",
      "explanation": "CNAME ממפה כינוי לשם הקנוני. רשומת A ממפה שם לכתובת IP, NS מפנה דומיין לשרת ה-authoritative שלו, ו-MX מציינת את שרת הדואר.",
      "recap": "CNAME = כינוי, A = שם ל-IP, NS = שרת authoritative",
      "questionHtml": "איזו רשומת DNS מגדירה שם נוסף (כינוי) שמפנה לשם הקנוני של מארח?",
      "explanationHtml": "CNAME ממפה כינוי לשם הקנוני. רשומת A ממפה שם לכתובת IP, NS מפנה דומיין לשרת ה-authoritative שלו, ו-MX מציינת את שרת הדואר.",
      "recapHtml": "CNAME = כינוי, A = שם ל-IP, NS = שרת authoritative"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "⏳",
    "title": "מטמון ו-TTL ב-DNS",
    "goal": "להסביר מה TTL קובע, ולחשב כמה חיפושים אמיתיים מתבצעים כשרשומה נשמרת במטמון עד שה-TTL פג.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כל שרת DNS שלמד מיפוי <b>שומר אותו במטמון</b> כדי לא לחזור על החיפוש. לכל רשומה יש שדה <b>TTL</b> (Time To Live), הנמדד ב<b>שניות</b>: הזמן המרבי שמותר לשמור את הרשומה.</p>\n<ul>\n<li>אחרי שה-TTL פג, הרשומה נמחקת וחיפוש הבא חייב לפנות שוב לשרתים.</li>\n<li>המטמון <b>רשאי</b> לשמור עד ה-TTL, לא חייב. TTL הוא תקרה.</li>\n<li>ה-TTL <b>סופר מרגע שהרשומה נשמרה</b> ואינו מתחדש בפגיעות במטמון.</li>\n<li><b>לכל רשומה TTL משלה.</b> רשומת A של שרת ה-nameserver נשמרת עד ה-TTL של עצמה, גם אם רשומת ה-NS שלו תקפה הרבה יותר זמן. ה-TTL של ה-NS אינו מאריך את ה-A.</li>\n</ul>\n<h3>מה קורה כש-TTL נמוך או גבוה</h3>\n<ul>\n<li><b>TTL נמוך מדי:</b> הרשומות פוקעות מהר, שאילתות DNS חוזרות לפני הגישה לאתר, ולכן <b>זמן הטעינה עולה</b> ועומס שרתי ה-DNS גדל.</li>\n<li><b>TTL גבוה:</b> שינוי כתובת של האתר לא יגיע מיד לכל המשתמשים. מי שיש לו עדיין את הרשומה הישנה במטמון ימשיך לפנות לכתובת הישנה עד שה-TTL שלה יפוג.</li>\n</ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> רשומה עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>60</mn><mtext> </mtext><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">TTL=60\\,s</annotation></semantics></math></span> והמשתמש פונה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>25</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>80</mn></mrow><annotation encoding=\"application/x-tex\">t=0,\\ 25,\\ 80</annotation></semantics></math></span> שניות. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">t=0</annotation></semantics></math></span> אין מטמון: חיפוש אמיתי, והרשומה בתוקף עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">t=60</annotation></semantics></math></span>. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">t=25</annotation></semantics></math></span> יש פגיעה. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>80</mn></mrow><annotation encoding=\"application/x-tex\">t=80</annotation></semantics></math></span> הרשומה פגה: חיפוש אמיתי חדש, בתוקף עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>140</mn></mrow><annotation encoding=\"application/x-tex\">t=140</annotation></semantics></math></span>. סה\"כ שני חיפושים.</div>\n<div class=\"lesson-rule\">🔑 <b>כך מחשבים:</b> עוברים על הפניות לפי הזמן. פנייה היא חיפוש אמיתי אם אין רשומה, או אם עברו לפחות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">TTL</annotation></semantics></math></span> שניות מאז שהיא נשמרה. אחרת היא פגיעה.</div>\n<div class=\"lesson-trap\">⚠️ <b>פגיעה לא מאריכה את התוקף.</b> אל תחשבו שה-TTL מתחיל מחדש בכל גישה. והיחידה היא שניות.</div>\n"
    },
    "questions": [
     {
      "id": "app-C07-Q1",
      "question": "מה קובע ה-TTL של רשומת DNS?",
      "options": [
       {
        "id": "a",
        "value": "כמה שניות לכל היותר מותר לשמור את הרשומה במטמון",
        "type": "text",
        "html": "כמה שניות לכל היותר מותר לשמור את הרשומה במטמון"
       },
       {
        "id": "b",
        "value": "כמה שרתים מותר לעבור בדרך אל הרשומה",
        "type": "text",
        "html": "כמה שרתים מותר לעבור בדרך אל הרשומה"
       },
       {
        "id": "c",
        "value": "כמה אלפיות שנייה לוקחת תשובה",
        "type": "text",
        "html": "כמה אלפיות שנייה לוקחת תשובה"
       },
       {
        "id": "d",
        "value": "כמה פעמים מותר לשאול על הרשומה",
        "type": "text",
        "html": "כמה פעמים מותר לשאול על הרשומה"
       }
      ],
      "correctId": "a",
      "explanation": "TTL הוא זמן החיים של הרשומה במטמון, בשניות, והוא תקרה. הוא אינו ספירת שרתים או פניות, ואינו מדד לזמן תגובה.",
      "recap": "TTL = תקרת זמן שמירה במטמון, בשניות",
      "questionHtml": "מה קובע ה-TTL של רשומת DNS?",
      "explanationHtml": "TTL הוא זמן החיים של הרשומה במטמון, בשניות, והוא תקרה. הוא אינו ספירת שרתים או פניות, ואינו מדד לזמן תגובה.",
      "recapHtml": "TTL = תקרת זמן שמירה במטמון, בשניות"
     },
     {
      "id": "app-C07-Q2",
      "question": "רשומת A של אתר נשמרת ב-Resolver עם $TTL=60\\ s$. משתמשים פונים לאתר בזמנים $t=0,\\ 30,\\ 70,\\ 100$ (שניות). כמה מהפניות הן חיפושים אמיתיים (כאלה שלא נענו מהמטמון)?",
      "options": [
       {
        "id": "a",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "c",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "c",
      "explanation": "ב-$t=0$ חיפוש אמיתי (בתוקף עד 60). ב-$t=30$ פגיעה. ב-$t=70$ הרשומה פגה, ולכן חיפוש אמיתי שני (בתוקף עד 130). ב-$t=100$ פגיעה. סה\"כ 2. הערך 4 הוא בלי מטמון בכלל, והערך 1 מניח בטעות שכל פגיעה מאריכה את התוקף.",
      "recap": "TTL סופר מרגע השמירה, פגיעה לא מאריכה",
      "questionHtml": "רשומת A של אתר נשמרת ב-Resolver עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>60</mn><mtext> </mtext><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">TTL=60\\ s</annotation></semantics></math></span>. משתמשים פונים לאתר בזמנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>30</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>70</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">t=0,\\ 30,\\ 70,\\ 100</annotation></semantics></math></span> (שניות). כמה מהפניות הן חיפושים אמיתיים (כאלה שלא נענו מהמטמון)?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">t=0</annotation></semantics></math></span> חיפוש אמיתי (בתוקף עד 60). ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">t=30</annotation></semantics></math></span> פגיעה. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>70</mn></mrow><annotation encoding=\"application/x-tex\">t=70</annotation></semantics></math></span> הרשומה פגה, ולכן חיפוש אמיתי שני (בתוקף עד 130). ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">t=100</annotation></semantics></math></span> פגיעה. סה\"כ 2. הערך 4 הוא בלי מטמון בכלל, והערך 1 מניח בטעות שכל פגיעה מאריכה את התוקף.",
      "recapHtml": "TTL סופר מרגע השמירה, פגיעה לא מאריכה"
     },
     {
      "id": "app-C07-Q3",
      "question": "הזמן של חיפוש אמיתי מלא (Root, TLD, Authoritative) הוא $3\\cdot20=60\\ ms$. הרשומה נשמרת עם $TTL=45\\ s$, ורק רשומת ה-A של האתר נשמרת במטמון. משתמשים פונים לאתר כל 10 שניות במשך 100 שניות: $t=0,\\ 10,\\ \\ldots,\\ 90$. מה סך זמן החיפוש בכל 10 הפניות?",
      "options": [
       {
        "id": "a",
        "value": "60 ms",
        "type": "text",
        "html": "60 ms"
       },
       {
        "id": "b",
        "value": "180 ms",
        "type": "text",
        "html": "180 ms"
       },
       {
        "id": "c",
        "value": "600 ms",
        "type": "text",
        "html": "600 ms"
       },
       {
        "id": "d",
        "value": "120 ms",
        "type": "text",
        "html": "120 ms"
       }
      ],
      "correctId": "d",
      "explanation": "חיפוש אמיתי ב-$t=0$ (בתוקף עד 45), ושוב ב-$t=50$ כשהרשומה פגה (בתוקף עד 95). שאר ההפניות פגיעות. שני חיפושים: $2\\cdot60=120$ ms. הערך 60 הוא חיפוש יחיד, הערך 600 הוא בלי מטמון בכלל ($10\\cdot60$), והערך 180 מניח בטעות שלושה חיפושים.",
      "recap": "סופרים חיפושים אמיתיים × זמן חיפוש מלא",
      "questionHtml": "הזמן של חיפוש אמיתי מלא (Root, TLD, Authoritative) הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>20</mn><mo>=</mo><mn>60</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">3\\cdot20=60\\ ms</annotation></semantics></math></span>. הרשומה נשמרת עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>45</mn><mtext> </mtext><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">TTL=45\\ s</annotation></semantics></math></span>, ורק רשומת ה-A של האתר נשמרת במטמון. משתמשים פונים לאתר כל 10 שניות במשך 100 שניות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>10</mn><mo separator=\"true\">,</mo><mtext> </mtext><mo>…</mo><mo separator=\"true\">,</mo><mtext> </mtext><mn>90</mn></mrow><annotation encoding=\"application/x-tex\">t=0,\\ 10,\\ \\ldots,\\ 90</annotation></semantics></math></span>. מה סך זמן החיפוש בכל 10 הפניות?",
      "explanationHtml": "חיפוש אמיתי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">t=0</annotation></semantics></math></span> (בתוקף עד 45), ושוב ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>t</mi><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">t=50</annotation></semantics></math></span> כשהרשומה פגה (בתוקף עד 95). שאר ההפניות פגיעות. שני חיפושים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>60</mn><mo>=</mo><mn>120</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot60=120</annotation></semantics></math></span> ms. הערך 60 הוא חיפוש יחיד, הערך 600 הוא בלי מטמון בכלל (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn><mo>⋅</mo><mn>60</mn></mrow><annotation encoding=\"application/x-tex\">10\\cdot60</annotation></semantics></math></span>), והערך 180 מניח בטעות שלושה חיפושים.",
      "recapHtml": "סופרים חיפושים אמיתיים × זמן חיפוש מלא"
     },
     {
      "id": "app-C07-Q4",
      "question": "ה-Resolver מקבל מה-Authoritative: רשומת NS לדומיין עם $TTL=86400$, ורשומת A של שרת ה-nameserver שלו עם $TTL=300$. מה נכון לגבי רשומת ה-A של ה-nameserver?",
      "options": [
       {
        "id": "a",
        "value": "ה-Resolver רשאי לשמור אותה במטמון עד ה-TTL שלה עצמה, 300 שניות",
        "type": "text",
        "html": "ה-Resolver רשאי לשמור אותה במטמון עד ה-TTL שלה עצמה, 300 שניות"
       },
       {
        "id": "b",
        "value": "ה-Resolver חייב לשמור אותה 86400 שניות, כמו רשומת ה-NS",
        "type": "text",
        "html": "ה-Resolver חייב לשמור אותה 86400 שניות, כמו רשומת ה-NS"
       },
       {
        "id": "c",
        "value": "ה-Resolver אסור לו לשמור אותה במטמון בכלל",
        "type": "text",
        "html": "ה-Resolver אסור לו לשמור אותה במטמון בכלל"
       },
       {
        "id": "d",
        "value": "ה-Resolver חייב לשאול מחדש בכל פעם",
        "type": "text",
        "html": "ה-Resolver חייב לשאול מחדש בכל פעם"
       }
      ],
      "correctId": "a",
      "explanation": "לכל רשומה TTL משלה, וה-A נשמרת עד 300 שניות. ה-TTL הארוך של ה-NS אינו מאריך אותה. שמירה במטמון מותרת (אפילו רצויה), ולכן אין איסור או חובה לשאול בכל פעם.",
      "recap": "לכל רשומה TTL משלה, ו-TTL הוא תקרה",
      "questionHtml": "ה-Resolver מקבל מה-Authoritative: רשומת NS לדומיין עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>86400</mn></mrow><annotation encoding=\"application/x-tex\">TTL=86400</annotation></semantics></math></span>, ורשומת A של שרת ה-nameserver שלו עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>300</mn></mrow><annotation encoding=\"application/x-tex\">TTL=300</annotation></semantics></math></span>. מה נכון לגבי רשומת ה-A של ה-nameserver?",
      "explanationHtml": "לכל רשומה TTL משלה, וה-A נשמרת עד 300 שניות. ה-TTL הארוך של ה-NS אינו מאריך אותה. שמירה במטמון מותרת (אפילו רצויה), ולכן אין איסור או חובה לשאול בכל פעם.",
      "recapHtml": "לכל רשומה TTL משלה, ו-TTL הוא תקרה"
     },
     {
      "id": "app-C07-Q5",
      "question": "מה יקרה אם ערכי ה-TTL ברשומות ה-DNS שבמטמון של הדפדפנים יהיו נמוכים מאוד (למשל שניות ספורות)?",
      "options": [
       {
        "id": "a",
        "value": "העומס על שרתי ה-DNS יקטן משמעותית",
        "type": "text",
        "html": "העומס על שרתי ה-DNS יקטן משמעותית"
       },
       {
        "id": "b",
        "value": "שאילתות DNS יחזרו בתדירות גבוהה, והעומס על שרתי ה-DNS וזמן הטעינה של הדפים יעלו",
        "type": "text",
        "html": "שאילתות DNS יחזרו בתדירות גבוהה, והעומס על שרתי ה-DNS וזמן הטעינה של הדפים יעלו"
       },
       {
        "id": "c",
        "value": "האבטחה והפרטיות של המשתמשים ישתפרו משמעותית",
        "type": "text",
        "html": "האבטחה והפרטיות של המשתמשים ישתפרו משמעותית"
       },
       {
        "id": "d",
        "value": "לא ישתנה דבר, כי המטמון בדפדפן תמיד שומר שעה",
        "type": "text",
        "html": "לא ישתנה דבר, כי המטמון בדפדפן תמיד שומר שעה"
       }
      ],
      "correctId": "b",
      "explanation": "TTL נמוך גורם לרשומות לפוג מהר, ולכן יותר חיפושים אמיתיים לפני כל גישה לאתר: העומס על שרתי ה-DNS וזמן הטעינה עולים, לא יורדים. אין קשר לאבטחה או לפרטיות, והמטמון מכבד את ה-TTL ולא שומר שעה קבועה.",
      "recap": "TTL נמוך = יותר שאילתות, טעינה איטית יותר",
      "questionHtml": "מה יקרה אם ערכי ה-TTL ברשומות ה-DNS שבמטמון של הדפדפנים יהיו נמוכים מאוד (למשל שניות ספורות)?",
      "explanationHtml": "TTL נמוך גורם לרשומות לפוג מהר, ולכן יותר חיפושים אמיתיים לפני כל גישה לאתר: העומס על שרתי ה-DNS וזמן הטעינה עולים, לא יורדים. אין קשר לאבטחה או לפרטיות, והמטמון מכבד את ה-TTL ולא שומר שעה קבועה.",
      "recapHtml": "TTL נמוך = יותר שאילתות, טעינה איטית יותר"
     },
     {
      "id": "app-C07-Q6",
      "question": "לאתר יש רשומת A עם $TTL=86400$ שניות (יממה). בעל האתר מעביר אותו לכתובת IP חדשה ומעדכן את הרשומה ב-Authoritative. מה יקרה למשתמשים?",
      "options": [
       {
        "id": "a",
        "value": "כולם יגיעו מיד לכתובת החדשה",
        "type": "text",
        "html": "כולם יגיעו מיד לכתובת החדשה"
       },
       {
        "id": "b",
        "value": "אף אחד לא יגיע לכתובת החדשה לפני שבוע",
        "type": "text",
        "html": "אף אחד לא יגיע לכתובת החדשה לפני שבוע"
       },
       {
        "id": "c",
        "value": "משתמשים שהרשומה הישנה במטמון שלהם ימשיכו לגשת לכתובת הישנה עד שה-TTL שלה יפוג",
        "type": "text",
        "html": "משתמשים שהרשומה הישנה במטמון שלהם ימשיכו לגשת לכתובת הישנה עד שה-TTL שלה יפוג"
       },
       {
        "id": "d",
        "value": "ה-Authoritative ימחק את הרשומה הישנה מכל המטמונים",
        "type": "text",
        "html": "ה-Authoritative ימחק את הרשומה הישנה מכל המטמונים"
       }
      ],
      "correctId": "c",
      "explanation": "המטמונים שמרו את הרשומה הישנה ורשאים להשתמש בה עד שה-TTL פג, לכל היותר יממה. לכן הם עדיין מפנים לכתובת הישנה. הכתובת החדשה לא מגיעה מיד לכולם, אבל גם לא רק אחרי שבוע, והשרת אינו יכול למחוק רשומות ממטמונים של אחרים.",
      "recap": "TTL גבוה = עדכון כתובת מתפשט לאט",
      "questionHtml": "לאתר יש רשומת A עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>T</mi><mi>T</mi><mi>L</mi><mo>=</mo><mn>86400</mn></mrow><annotation encoding=\"application/x-tex\">TTL=86400</annotation></semantics></math></span> שניות (יממה). בעל האתר מעביר אותו לכתובת IP חדשה ומעדכן את הרשומה ב-Authoritative. מה יקרה למשתמשים?",
      "explanationHtml": "המטמונים שמרו את הרשומה הישנה ורשאים להשתמש בה עד שה-TTL פג, לכל היותר יממה. לכן הם עדיין מפנים לכתובת הישנה. הכתובת החדשה לא מגיעה מיד לכולם, אבל גם לא רק אחרי שבוע, והשרת אינו יכול למחוק רשומות ממטמונים של אחרים.",
      "recapHtml": "TTL גבוה = עדכון כתובת מתפשט לאט"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🌍",
    "title": "CDN, HTTP/2 ו-HTTP/3",
    "goal": "לדעת מה CDN פותר ואיך מגיעים לשרת הקרוב, ומה משפרים HTTP/2 ו-HTTP/3 ומה לא.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<h3>CDN</h3>\n<p><b>CDN</b> משכפל תוכן לשרתים רבים, קרובים ללקוחות ברחבי העולם. הוא פותר:</p>\n<ul>\n<li><b>סקלביליות</b> ועומס על שרת יחיד, וגם תלות בביצועי שרת אחד וברוחב הפס של קו אחד.</li>\n<li><b>מרחק:</b> שרת קרוב מקצר את ה-RTT ואת זמן ההתפשטות.</li>\n</ul>\n<p>הוא <b>אינו</b> פותר מחסור בכתובות IPv4.</p>\n<p><b>איך שני לקוחות בעולם פונים לאותו שם ומגיעים לשרתי CDN שונים?</b> שרת ה-DNS של המפעיל מחזיר <b>כתובת IP שונה לפי מיקום השואל</b> (DNS \"חכם\"). לא עוגיות, לא persistent ולא \"הפניה רנדומית\". (רשומות כאלה נשמרות לרוב עם TTL קצר, כדי שהכתובת תתעדכן.)</p>\n<div class=\"lesson-rule\">🔑 למשתמשים מפוזרים גיאוגרפית, ההשפעה הגדולה ביותר על זמן הטעינה היא <b>CDN</b>. HTTP/2 ו-HTTP/3 משפרים ניצול חיבור, לא מרחק פיזי.</div>\n<h3>HTTP/2, HTTP/3 ו-QUIC</h3>\n<table><thead><tr><th></th><th>HTTP/1.1</th><th>HTTP/2</th><th>HTTP/3</th></tr></thead><tbody>\n<tr><td>תעבורה</td><td>TCP</td><td>TCP</td><td>QUIC מעל UDP</td></tr>\n<tr><td>ריבוי בקשות</td><td>חיבורים מקבילים</td><td>multiplexing על חיבור אחד</td><td>זרמי QUIC נפרדים</td></tr>\n<tr><td>HOL של TCP</td><td>יש</td><td>נשאר</td><td>נפתר</td></tr>\n</tbody></table>\n<ul>\n<li><b>Multiplexing (HTTP/2):</b> הרבה בקשות ותגובות בזרמים על חיבור TCP אחד.</li>\n<li><b>HOL (head-of-line blocking):</b> חבילה אחת שאבדה ב-TCP עוצרת את כל הזרמים שעל החיבור. HTTP/2 נשען על TCP ולכן <b>לא פותר</b> את זה.</li>\n<li><b>QUIC</b> רץ מעל UDP, מאחד את לחיצת היד של התעבורה ושל ההצפנה (פחות RTT), ומנהל כל זרם בנפרד, כך שאיבוד בזרם אחד לא עוצר את האחרים.</li>\n</ul>\n<div class=\"lesson-trap\">⚠️ HTTP/2 לא רץ על UDP ואינו מחייב הצפנה בתקן. ההצפנה המובנית ושינוי התעבורה (UDP) שייכים ל-HTTP/3.</div>\n"
    },
    "questions": [
     {
      "id": "app-C08-Q1",
      "question": "איזו מהבעיות הבאות CDN נועד לפתור?",
      "options": [
       {
        "id": "a",
        "value": "מחסור בכתובות IPv4",
        "type": "text",
        "html": "מחסור בכתובות IPv4"
       },
       {
        "id": "b",
        "value": "עומס על שרת יחיד ומרחק גדול בין המשתמשים לשרת",
        "type": "text",
        "html": "עומס על שרת יחיד ומרחק גדול בין המשתמשים לשרת"
       },
       {
        "id": "c",
        "value": "איבוד חבילות בחיבור TCP בודד",
        "type": "text",
        "html": "איבוד חבילות בחיבור TCP בודד"
       },
       {
        "id": "d",
        "value": "הצפנת התקשורת בין הדפדפן לשרת",
        "type": "text",
        "html": "הצפנת התקשורת בין הדפדפן לשרת"
       }
      ],
      "correctId": "b",
      "explanation": "CDN משכפל תוכן לשרתים קרובים, ולכן מפחית את העומס על שרת יחיד ומקצר את המרחק וה-RTT. הוא אינו פותר מחסור בכתובות IPv4, אינו מטפל באיבוד חבילות ב-TCP, ואינו תפקיד של הצפנה.",
      "recap": "CDN: סקלביליות וקרבה, לא כתובות IP",
      "questionHtml": "איזו מהבעיות הבאות CDN נועד לפתור?",
      "explanationHtml": "CDN משכפל תוכן לשרתים קרובים, ולכן מפחית את העומס על שרת יחיד ומקצר את המרחק וה-RTT. הוא אינו פותר מחסור בכתובות IPv4, אינו מטפל באיבוד חבילות ב-TCP, ואינו תפקיד של הצפנה.",
      "recapHtml": "CDN: סקלביליות וקרבה, לא כתובות IP"
     },
     {
      "id": "app-C08-Q2",
      "question": "שני לקוחות, אחד בלוס אנג'לס ואחד בתל אביב, פונים לאותו שם דומיין של אתר ומקבלים תוכן משרתי CDN שונים. איך זה קורה?",
      "options": [
       {
        "id": "a",
        "value": "שרת ה-DNS מחזיר כתובת IP שונה לפי מיקום השואל",
        "type": "text",
        "html": "שרת ה-DNS מחזיר כתובת IP שונה לפי מיקום השואל"
       },
       {
        "id": "b",
        "value": "הדפדפן בוחר שרת באקראי מתוך רשימה ב-HTTP",
        "type": "text",
        "html": "הדפדפן בוחר שרת באקראי מתוך רשימה ב-HTTP"
       },
       {
        "id": "c",
        "value": "העוגייה של כל משתמש קובעת לאיזה שרת הוא יגיע",
        "type": "text",
        "html": "העוגייה של כל משתמש קובעת לאיזה שרת הוא יגיע"
       },
       {
        "id": "d",
        "value": "החיבור ה-persistent עובר אוטומטית לשרת הקרוב",
        "type": "text",
        "html": "החיבור ה-persistent עובר אוטומטית לשרת הקרוב"
       }
      ],
      "correctId": "a",
      "explanation": "DNS \"חכם\" של מפעיל ה-CDN עונה לפי מיקום השואל, ולכן אותו שם נפתר לכתובות שונות. אין \"הפניה אקראית\" ב-HTTP לצורך זה, עוגיות לא קובעות את השרת, ו-persistent לא מעביר חיבור בין שרתים.",
      "recap": "CDN מנתב דרך DNS שמחזיר IP לפי מיקום",
      "questionHtml": "שני לקוחות, אחד בלוס אנג'לס ואחד בתל אביב, פונים לאותו שם דומיין של אתר ומקבלים תוכן משרתי CDN שונים. איך זה קורה?",
      "explanationHtml": "DNS \"חכם\" של מפעיל ה-CDN עונה לפי מיקום השואל, ולכן אותו שם נפתר לכתובות שונות. אין \"הפניה אקראית\" ב-HTTP לצורך זה, עוגיות לא קובעות את השרת, ו-persistent לא מעביר חיבור בין שרתים.",
      "recapHtml": "CDN מנתב דרך DNS שמחזיר IP לפי מיקום"
     },
     {
      "id": "app-C08-Q3",
      "question": "איזה שיפור משמעותי מציע HTTP/2 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
      "options": [
       {
        "id": "a",
        "value": "הוא עובר מ-TCP ל-UDP",
        "type": "text",
        "html": "הוא עובר מ-TCP ל-UDP"
       },
       {
        "id": "b",
        "value": "הוא מבטל את בעיית ה-head-of-line blocking של TCP",
        "type": "text",
        "html": "הוא מבטל את בעיית ה-head-of-line blocking של TCP"
       },
       {
        "id": "c",
        "value": "ריבוי בקשות ותגובות בזרמים על חיבור TCP אחד (multiplexing)",
        "type": "text",
        "html": "ריבוי בקשות ותגובות בזרמים על חיבור TCP אחד (multiplexing)"
       },
       {
        "id": "d",
        "value": "הוא מחייב הצפנה בכל חיבור לפי התקן",
        "type": "text",
        "html": "הוא מחייב הצפנה בכל חיבור לפי התקן"
       }
      ],
      "correctId": "c",
      "explanation": "HTTP/2 מריץ הרבה בקשות במקביל על חיבור אחד באמצעות multiplexing. הוא עדיין רץ על TCP, ולכן HOL של TCP נשאר (HTTP/3 פתר אותו). העברה ל-UDP היא שינוי של HTTP/3, והצפנה אינה חובה בתקן של HTTP/2.",
      "recap": "HTTP/2 = multiplexing על חיבור TCP אחד",
      "questionHtml": "איזה שיפור משמעותי מציע HTTP/2 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
      "explanationHtml": "HTTP/2 מריץ הרבה בקשות במקביל על חיבור אחד באמצעות multiplexing. הוא עדיין רץ על TCP, ולכן HOL של TCP נשאר (HTTP/3 פתר אותו). העברה ל-UDP היא שינוי של HTTP/3, והצפנה אינה חובה בתקן של HTTP/2.",
      "recapHtml": "HTTP/2 = multiplexing על חיבור TCP אחד"
     },
     {
      "id": "app-C08-Q4",
      "question": "מדוע HTTP/3 משתמש ב-QUIC במקום ב-TCP?",
      "options": [
       {
        "id": "a",
        "value": "כי QUIC מאחד את לחיצת היד ומנהל זרמים נפרדים, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים",
        "type": "text",
        "html": "כי QUIC מאחד את לחיצת היד ומנהל זרמים נפרדים, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים"
       },
       {
        "id": "b",
        "value": "כי QUIC מבטל את הצורך בהצפנה",
        "type": "text",
        "html": "כי QUIC מבטל את הצורך בהצפנה"
       },
       {
        "id": "c",
        "value": "כי QUIC רץ ישירות מעל IP בלי UDP",
        "type": "text",
        "html": "כי QUIC רץ ישירות מעל IP בלי UDP"
       },
       {
        "id": "d",
        "value": "כי QUIC מריץ רק בקשה אחת בכל חיבור",
        "type": "text",
        "html": "כי QUIC מריץ רק בקשה אחת בכל חיבור"
       }
      ],
      "correctId": "a",
      "explanation": "QUIC (מעל UDP) מקצר את הקמת החיבור כי הוא מאחד את לחיצת היד של התעבורה וההצפנה, ומנהל כל זרם בנפרד, ולכן אין HOL בין זרמים. הוא כולל הצפנה מובנית, רץ מעל UDP, ותומך בהרבה זרמים.",
      "recap": "QUIC: פחות RTT ובלי HOL בין זרמים",
      "questionHtml": "מדוע HTTP/3 משתמש ב-QUIC במקום ב-TCP?",
      "explanationHtml": "QUIC (מעל UDP) מקצר את הקמת החיבור כי הוא מאחד את לחיצת היד של התעבורה וההצפנה, ומנהל כל זרם בנפרד, ולכן אין HOL בין זרמים. הוא כולל הצפנה מובנית, רץ מעל UDP, ותומך בהרבה זרמים.",
      "recapHtml": "QUIC: פחות RTT ובלי HOL בין זרמים"
     },
     {
      "id": "app-C08-Q5",
      "question": "אתר עם משתמשים בכל העולם סובל מזמני טעינה ארוכים אצל משתמשים רחוקים מהשרת. איזה שינוי ישפר את הזמנים הכי הרבה?",
      "options": [
       {
        "id": "a",
        "value": "מעבר מ-HTTP/1.1 ל-HTTP/2 בלבד",
        "type": "text",
        "html": "מעבר מ-HTTP/1.1 ל-HTTP/2 בלבד"
       },
       {
        "id": "b",
        "value": "פריסת CDN עם שרתים קרובים למשתמשים",
        "type": "text",
        "html": "פריסת CDN עם שרתים קרובים למשתמשים"
       },
       {
        "id": "c",
        "value": "הגדלת מספר העוגיות",
        "type": "text",
        "html": "הגדלת מספר העוגיות"
       },
       {
        "id": "d",
        "value": "שימוש ב-HTTP non-persistent",
        "type": "text",
        "html": "שימוש ב-HTTP non-persistent"
       }
      ],
      "correctId": "b",
      "explanation": "הבעיה היא מרחק (RTT והתפשטות), ו-CDN מקרב את התוכן למשתמש. HTTP/2 משפר ניצול חיבור אך לא מרחק פיזי. עוגיות אינן קשורות, ו-non-persistent מוסיף RTT.",
      "recap": "מרחק גדול = CDN",
      "questionHtml": "אתר עם משתמשים בכל העולם סובל מזמני טעינה ארוכים אצל משתמשים רחוקים מהשרת. איזה שינוי ישפר את הזמנים הכי הרבה?",
      "explanationHtml": "הבעיה היא מרחק (RTT והתפשטות), ו-CDN מקרב את התוכן למשתמש. HTTP/2 משפר ניצול חיבור אך לא מרחק פיזי. עוגיות אינן קשורות, ו-non-persistent מוסיף RTT.",
      "recapHtml": "מרחק גדול = CDN"
     },
     {
      "id": "app-C08-Q6",
      "question": "מה נכון לגבי איבוד חבילה בודדת בחיבור שמשרת הרבה זרמים במקביל?",
      "options": [
       {
        "id": "a",
        "value": "ב-HTTP/2 הוא עוצר את כל הזרמים שעל החיבור (HOL), וב-HTTP/3 הוא עוצר רק את הזרם שנפגע",
        "type": "text",
        "html": "ב-HTTP/2 הוא עוצר את כל הזרמים שעל החיבור (HOL), וב-HTTP/3 הוא עוצר רק את הזרם שנפגע"
       },
       {
        "id": "b",
        "value": "ב-HTTP/2 הוא עוצר רק את הזרם שנפגע, וב-HTTP/3 את כל הזרמים",
        "type": "text",
        "html": "ב-HTTP/2 הוא עוצר רק את הזרם שנפגע, וב-HTTP/3 את כל הזרמים"
       },
       {
        "id": "c",
        "value": "הוא אינו משפיע על אף זרם בשום גרסה",
        "type": "text",
        "html": "הוא אינו משפיע על אף זרם בשום גרסה"
       },
       {
        "id": "d",
        "value": "הוא עוצר את כל הזרמים בשתי הגרסאות",
        "type": "text",
        "html": "הוא עוצר את כל הזרמים בשתי הגרסאות"
       }
      ],
      "correctId": "a",
      "explanation": "HTTP/2 נשען על TCP, שמעביר את הנתונים לפי סדר, ולכן חבילה שאבדה עוצרת את כל הזרמים. ב-HTTP/3 כל זרם של QUIC נפרד, ולכן רק הזרם הפגוע ממתין.",
      "recap": "HOL: נשאר ב-HTTP/2, נפתר ב-HTTP/3",
      "questionHtml": "מה נכון לגבי איבוד חבילה בודדת בחיבור שמשרת הרבה זרמים במקביל?",
      "explanationHtml": "HTTP/2 נשען על TCP, שמעביר את הנתונים לפי סדר, ולכן חבילה שאבדה עוצרת את כל הזרמים. ב-HTTP/3 כל זרם של QUIC נפרד, ולכן רק הזרם הפגוע ממתין.",
      "recapHtml": "HOL: נשאר ב-HTTP/2, נפתר ב-HTTP/3"
     }
    ]
   },
   {
    "id": "C09",
    "order": 9,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות מבחן אמיתיות על זמני טעינה, ספירת חיבורים, מטמון ו-DNS.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>כל מה שלמדתם בשמונה השלבים הקודמים מופיע כאן, בשאלות מבחן אמיתיות. נוסחאות לתזכורת:</p>\n<ul>\n<li><b>Non-persistent:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mi>t</mi></mrow><annotation encoding=\"application/x-tex\">2RTT+t</annotation></semantics></math></span> לכל אובייקט.</li>\n<li><b>Persistent בלי pipelining:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> לחיבור, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><mi>t</mi></mrow><annotation encoding=\"application/x-tex\">RTT+t</annotation></semantics></math></span> לכל אובייקט, כולל הבסיס.</li>\n<li><b>Persistent עם pipelining:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> לחיבור, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>+</mo><msub><mi>t</mi><mn>0</mn></msub></mrow><annotation encoding=\"application/x-tex\">RTT+t_0</annotation></semantics></math></span> לדף, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">RTT</annotation></semantics></math></span> אחד לכל התמונות ועוד סכום זמני השידור שלהן.</li>\n<li><b>חיבורי HTTP/1.1:</b> חיבור persistent אחד לכל <b>שם</b> שרת, ובמוסכמת המבחן עם 6 מקבילים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>N</mi><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil N/6\\rceil</annotation></semantics></math></span>. ב-HTTP/2: חיבור אחד לשרת.</li>\n<li><b>GET מותנה:</b> 304 בלי גוף, עדיין RTT. ‏<code>max-age</code> בשניות.</li>\n<li><b>DNS בלי מטמון:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>T</mi></mrow><annotation encoding=\"application/x-tex\">3T</annotation></semantics></math></span> (Root, TLD, Authoritative).</li>\n</ul>\n<div class=\"lesson-rule\">🔑 בשאלה עם ביטויי זמן, כתבו קודם את הרכיבים: כמה RTT לפתיחה, כמה לכל אובייקט, ומה זמן השידור של הדף ושל כל תמונה (בייט כפול 8, חלקי הקצב).</div>\n"
    },
    "questions": [
     {
      "bankId": "22S-A-Q5",
      "recap": "persistent בלי pipelining: RTT לחיבור, ואז RTT + זמן שידור לכל אובייקט כולל הדף",
      "recapHtml": "persistent בלי pipelining: RTT לחיבור, ואז RTT + זמן שידור לכל אובייקט כולל הדף"
     },
     {
      "bankId": "25A-C-Q1",
      "recap": "HTTP/1.1: ⌈N/6⌉ חיבורים; HTTP/2: חיבור אחד",
      "recapHtml": "HTTP/1.1: ⌈N/6⌉ חיבורים; HTTP/2: חיבור אחד"
     },
     {
      "bankId": "25A-C-Q2",
      "recap": "אין במטמון: שלוש שאילתות עוקבות, 3 × 30 = 90 ms",
      "recapHtml": "אין במטמון: שלוש שאילתות עוקבות, 3 × 30 = 90 ms"
     },
     {
      "bankId": "22S-A-Q15",
      "recap": "גוף ההודעה אינו חובה: 304 חוזר בלי גוף",
      "recapHtml": "גוף ההודעה אינו חובה: 304 חוזר בלי גוף"
     },
     {
      "bankId": "24A-A-Q10",
      "recap": "GET מותנה משתלם לאובייקט גדול שמשתנה לעיתים",
      "recapHtml": "GET מותנה משתלם לאובייקט גדול שמשתנה לעיתים"
     },
     {
      "bankId": "25A-A-Q11",
      "recap": "max-age=3600: תקף במטמון 3600 שניות, כלומר שעה",
      "recapHtml": "max-age=3600: תקף במטמון 3600 שניות, כלומר שעה"
     }
    ]
   }
  ]
 },
 "delays": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "📏",
    "title": "יחידות: ביט, בית ושנייה",
    "goal": "להמיר בביטחון בין ביט לבית, בין Mbps ל-bps, בין מילישניות לשניות ובין קצב לשעה לקצב לשנייה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>רוב הטעויות בשאלות השהיה אינן שגיאות בנוסחה אלא <b>שגיאות ביחידות</b>. לפני כל חישוב מביאים את כל הנתונים לאותן יחידות בסיס: <b>ביט</b>, <b>ביט לשנייה</b>, <b>מטר</b> ו<b>שנייה</b>.</p>\n<table>\n<thead><tr><th>מה</th><th>המרה</th></tr></thead>\n<tbody>\n<tr><td>בית (Byte)</td><td>1 Byte = <b>8</b> ביט</td></tr>\n<tr><td>קצב (Rate)</td><td>1 Kbps = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{3}</annotation></semantics></math></span> bps, ‏1 Mbps = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{6}</annotation></semantics></math></span> bps, ‏1 Gbps = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>9</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{9}</annotation></semantics></math></span> bps (בקצבים תמיד חזקות של 1000)</td></tr>\n<tr><td>זמן</td><td>1 ms = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">10^{-3}</annotation></semantics></math></span> שנייה, ‏1 µs = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">10^{-6}</annotation></semantics></math></span> שנייה</td></tr>\n<tr><td>קצב הגעה</td><td>שעה = 3600 שניות, דקה = 60 שניות</td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <b>האות קובעת:</b> <b>b</b> קטנה היא ביט (Mbps, Gbps), ו-<b>B</b> גדולה היא בית (MB, ‏1500 Bytes). שאלות המבחן כותבות גם \"5,000 ביטים\" וגם \"1,500 Bytes\" באותו נושא.</div>\n<div class=\"lesson-ex\">דוגמה: חבילה של 1500 Bytes היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1500</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">1500\\cdot 8 = 12000</annotation></semantics></math></span> ביט. קצב הגעה של 300,000 חבילות לשעה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>300000</mn><mi mathvariant=\"normal\">/</mi><mn>3600</mn><mo>≈</mo><mn>83.3</mn></mrow><annotation encoding=\"application/x-tex\">300000/3600 \\approx 83.3</annotation></semantics></math></span> חבילות לשנייה.</div>\n<div class=\"lesson-trap\">⚠️ <b>הכיוון.</b> לעבור מיחידה גדולה לקטנה מכפילים (שעה לשניות, בית לביטים), ולעבור מקטנה לגדולה מחלקים. תשובה בסדר גודל לא הגיוני (פי 3600 או פי 8) היא סימן לשכחת המרה.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "חבילה בגודל 1500 Bytes. מה גודלה בביטים?",
      "options": [
       {
        "id": "a",
        "value": "12,000 ביט",
        "type": "text",
        "html": "12,000 ביט"
       },
       {
        "id": "b",
        "value": "1,500 ביט",
        "type": "text",
        "html": "1,500 ביט"
       },
       {
        "id": "c",
        "value": "187.5 ביט",
        "type": "text",
        "html": "187.5 ביט"
       },
       {
        "id": "d",
        "value": "1,500,000 ביט",
        "type": "text",
        "html": "1,500,000 ביט"
       }
      ],
      "correctId": "a",
      "explanation": "בית אחד הוא 8 ביט, ולכן $1500\\cdot 8 = 12000$ ביט. 1,500 הוא המספר בלי להמיר, ו-187.5 מתקבל מי שחילק ב-8 במקום להכפיל.",
      "recap": "ביטים = בתים כפול 8",
      "questionHtml": "חבילה בגודל 1500 Bytes. מה גודלה בביטים?",
      "explanationHtml": "בית אחד הוא 8 ביט, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1500</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">1500\\cdot 8 = 12000</annotation></semantics></math></span> ביט. 1,500 הוא המספר בלי להמיר, ו-187.5 מתקבל מי שחילק ב-8 במקום להכפיל.",
      "recapHtml": "ביטים = בתים כפול 8"
     },
     {
      "id": "C01-Q2",
      "question": "קישור בקצב 100 Mbps. מה הקצב ב-bps?",
      "options": [
       {
        "id": "a",
        "value": "100,000 bps",
        "type": "text",
        "html": "100,000 bps"
       },
       {
        "id": "b",
        "value": "12,500,000 bps",
        "type": "text",
        "html": "12,500,000 bps"
       },
       {
        "id": "c",
        "value": "800,000,000 bps",
        "type": "text",
        "html": "800,000,000 bps"
       },
       {
        "id": "d",
        "value": "100,000,000 bps",
        "type": "text",
        "html": "100,000,000 bps"
       }
      ],
      "correctId": "d",
      "explanation": "מגה הוא מיליון: $100\\cdot 10^{6} = 10^{8}$ ביט לשנייה. 12,500,000 הוא הקצב בבתים לשנייה (חילוק ב-8), ו-800,000,000 הוא הכפלה ב-8 בטעות. Mbps כבר מדבר בביטים.",
      "recap": "מגה = $10^{6}$, ו-Mbps הוא ביטים",
      "questionHtml": "קישור בקצב 100 Mbps. מה הקצב ב-bps?",
      "explanationHtml": "מגה הוא מיליון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo>=</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">100\\cdot 10^{6} = 10^{8}</annotation></semantics></math></span> ביט לשנייה. 12,500,000 הוא הקצב בבתים לשנייה (חילוק ב-8), ו-800,000,000 הוא הכפלה ב-8 בטעות. Mbps כבר מדבר בביטים.",
      "recapHtml": "מגה = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{6}</annotation></semantics></math></span>, ו-Mbps הוא ביטים"
     },
     {
      "id": "C01-Q3",
      "question": "השהיה של 0.5 מילישניות. כמה מיקרושניות זה?",
      "options": [
       {
        "id": "a",
        "value": "500 מיקרושניות",
        "type": "text",
        "html": "500 מיקרושניות"
       },
       {
        "id": "b",
        "value": "0.5 מיקרושניות",
        "type": "text",
        "html": "0.5 מיקרושניות"
       },
       {
        "id": "c",
        "value": "5,000 מיקרושניות",
        "type": "text",
        "html": "5,000 מיקרושניות"
       },
       {
        "id": "d",
        "value": "50 מיקרושניות",
        "type": "text",
        "html": "50 מיקרושניות"
       }
      ],
      "correctId": "a",
      "explanation": "מילישנייה אחת היא 1000 מיקרושניות, ולכן $0.5\\cdot 1000 = 500$. 5,000 מקבלים מי שהזיז את הנקודה העשרונית לכיוון הלא נכון.",
      "recap": "1 ms = 1000 µs",
      "questionHtml": "השהיה של 0.5 מילישניות. כמה מיקרושניות זה?",
      "explanationHtml": "מילישנייה אחת היא 1000 מיקרושניות, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.5</mn><mo>⋅</mo><mn>1000</mn><mo>=</mo><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">0.5\\cdot 1000 = 500</annotation></semantics></math></span>. 5,000 מקבלים מי שהזיז את הנקודה העשרונית לכיוון הלא נכון.",
      "recapHtml": "1 ms = 1000 µs"
     },
     {
      "id": "C01-Q4",
      "question": "קצב ההגעה הוא 3,600,000 חבילות לשעה. כמה חבילות מגיעות בשנייה?",
      "options": [
       {
        "id": "a",
        "value": "60,000",
        "type": "text",
        "html": "60,000"
       },
       {
        "id": "b",
        "value": "3,600,000",
        "type": "text",
        "html": "3,600,000"
       },
       {
        "id": "c",
        "value": "1,000",
        "type": "text",
        "html": "1,000"
       },
       {
        "id": "d",
        "value": "216,000,000",
        "type": "text",
        "html": "216,000,000"
       }
      ],
      "correctId": "c",
      "explanation": "שעה היא 3600 שניות: $3600000/3600 = 1000$ חבילות לשנייה. 60,000 הוא הקצב **לדקה** (חילקנו רק ב-60), ו-216,000,000 מתקבל מהכפלה במקום חילוק.",
      "recap": "לשעה לשנייה: מחלקים ב-3600",
      "questionHtml": "קצב ההגעה הוא 3,600,000 חבילות לשעה. כמה חבילות מגיעות בשנייה?",
      "explanationHtml": "שעה היא 3600 שניות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3600000</mn><mi mathvariant=\"normal\">/</mi><mn>3600</mn><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">3600000/3600 = 1000</annotation></semantics></math></span> חבילות לשנייה. 60,000 הוא הקצב <strong>לדקה</strong> (חילקנו רק ב-60), ו-216,000,000 מתקבל מהכפלה במקום חילוק.",
      "recapHtml": "לשעה לשנייה: מחלקים ב-3600"
     },
     {
      "id": "C01-Q5",
      "question": "מה נכון לגבי 1 Gbps?",
      "options": [
       {
        "id": "a",
        "value": "100 Mbps",
        "type": "text",
        "html": "100 Mbps"
       },
       {
        "id": "b",
        "value": "1024 Mbps",
        "type": "text",
        "html": "1024 Mbps"
       },
       {
        "id": "c",
        "value": "10,000 Mbps",
        "type": "text",
        "html": "10,000 Mbps"
       },
       {
        "id": "d",
        "value": "1000 Mbps",
        "type": "text",
        "html": "1000 Mbps"
       }
      ],
      "correctId": "d",
      "explanation": "גיגה הוא $10^{9}$ ומגה הוא $10^{6}$, ולכן 1 Gbps = 1000 Mbps. את 1024 משתמשים בגודל זיכרון, לא בקצבי רשת.",
      "recap": "בקצבים: 1 Gbps = 1000 Mbps",
      "questionHtml": "מה נכון לגבי 1 Gbps?",
      "explanationHtml": "גיגה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>9</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{9}</annotation></semantics></math></span> ומגה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{6}</annotation></semantics></math></span>, ולכן 1 Gbps = 1000 Mbps. את 1024 משתמשים בגודל זיכרון, לא בקצבי רשת.",
      "recapHtml": "בקצבים: 1 Gbps = 1000 Mbps"
     },
     {
      "id": "C01-Q6",
      "question": "5 מילישניות הן כמה שניות?",
      "options": [
       {
        "id": "a",
        "value": "0.05 שניות",
        "type": "text",
        "html": "0.05 שניות"
       },
       {
        "id": "b",
        "value": "5,000 שניות",
        "type": "text",
        "html": "5,000 שניות"
       },
       {
        "id": "c",
        "value": "0.005 שניות",
        "type": "text",
        "html": "0.005 שניות"
       },
       {
        "id": "d",
        "value": "0.0005 שניות",
        "type": "text",
        "html": "0.0005 שניות"
       }
      ],
      "correctId": "c",
      "explanation": "מילי הוא אלפית: $5/1000 = 0.005$ שניות. 0.05 הוא 50 ms.",
      "recap": "ms = אלפית שנייה",
      "questionHtml": "5 מילישניות הן כמה שניות?",
      "explanationHtml": "מילי הוא אלפית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi mathvariant=\"normal\">/</mi><mn>1000</mn><mo>=</mo><mn>0.005</mn></mrow><annotation encoding=\"application/x-tex\">5/1000 = 0.005</annotation></semantics></math></span> שניות. 0.05 הוא 50 ms.",
      "recapHtml": "ms = אלפית שנייה"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "📤",
    "title": "השהיית שידור L/R",
    "goal": "לחשב כמה זמן לוקח להוציא חבילה (או קובץ) אל הקו, לפי גודלה וקצב הקישור.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>השהיית שידור</b> (transmission delay) היא הזמן שלוקח להדוף את כל ביטי החבילה אל הקו. הקו מקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> ביטים בכל שנייה, וחבילה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> ביטים, ולכן:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>t</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>s</mi></mrow></msub><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>L</mi><mi>R</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">d_{trans}=\\dfrac{L}{R}</annotation></semantics></math></span></div>\n<ul>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> בביטים, ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> בביט לשנייה, והתוצאה בשניות.</li>\n<li>היא תלויה <b>רק</b> בגודל החבילה ובקצב. המרחק אינו משפיע עליה.</li>\n<li>קצב כפול, חבילה חצי: שידור חצי. חבילה גדולה פי 10: שידור גדול פי 10.</li>\n</ul>\n<div class=\"lesson-ex\">חבילה של 1500 Bytes על קישור של 100 Mbps: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">L=12000</annotation></semantics></math></span> ביט, ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">R=10^{8}</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>t</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>s</mi></mrow></msub><mo>=</mo><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>8</mn></msup><mo>=</mo><mn>1.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">d_{trans}=12000/10^{8}=1.2\\cdot10^{-4}</annotation></semantics></math></span> שנייה, כלומר <b>0.12 ms</b>.</div>\n<div class=\"lesson-trap\">⚠️ <b>בית מול ביט.</b> אם הגודל נתון ב-Bytes, כפלו ב-8 לפני החילוק. 1500/(100 Mbps) מחזיר זמן קטן פי 8 מהנכון.</div>\n<div class=\"lesson-rule\">🔑 <b>קובץ הוא בסך הכול חבילה גדולה:</b> אותה נוסחה, רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> גדול. קובץ של 1 MB (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">10^{6}</annotation></semantics></math></span> בתים = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">8\\cdot10^{6}</annotation></semantics></math></span> ביט) על 10 Mbps לוקח 0.8 שנייה.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "חבילה של 8,000 ביט נשלחת בקישור של 10 Mbps. מה השהיית השידור?",
      "options": [
       {
        "id": "a",
        "value": "0.8 ms",
        "type": "text",
        "html": "0.8 ms"
       },
       {
        "id": "b",
        "value": "8 ms",
        "type": "text",
        "html": "8 ms"
       },
       {
        "id": "c",
        "value": "0.08 ms",
        "type": "text",
        "html": "0.08 ms"
       },
       {
        "id": "d",
        "value": "80 ms",
        "type": "text",
        "html": "80 ms"
       }
      ],
      "correctId": "a",
      "explanation": "$8000/10^{7}=8\\cdot10^{-4}$ שנייה, כלומר **0.8 ms**. 8 ms ו-0.08 ms הן טעויות של חזקות 10 בהמרה מ-Mbps.",
      "recap": "$L/R$ עם $R$ ב-bps",
      "questionHtml": "חבילה של 8,000 ביט נשלחת בקישור של 10 Mbps. מה השהיית השידור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>7</mn></msup><mo>=</mo><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">8000/10^{7}=8\\cdot10^{-4}</annotation></semantics></math></span> שנייה, כלומר <strong>0.8 ms</strong>. 8 ms ו-0.08 ms הן טעויות של חזקות 10 בהמרה מ-Mbps.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">L/R</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> ב-bps"
     },
     {
      "id": "C02-Q2",
      "question": "חבילה של 1500 Bytes נשלחת בקישור של 100 Mbps. מה השהיית השידור?",
      "options": [
       {
        "id": "a",
        "value": "0.015 ms",
        "type": "text",
        "html": "0.015 ms"
       },
       {
        "id": "b",
        "value": "0.12 ms",
        "type": "text",
        "html": "0.12 ms"
       },
       {
        "id": "c",
        "value": "1.2 ms",
        "type": "text",
        "html": "1.2 ms"
       },
       {
        "id": "d",
        "value": "15 ms",
        "type": "text",
        "html": "15 ms"
       }
      ],
      "correctId": "b",
      "explanation": "$L=1500\\cdot8=12000$ ביט. $12000/10^{8}=1.2\\cdot10^{-4}$ שנייה = **0.12 ms**. 0.015 ms מתקבל מי ששכח להמיר Bytes לביטים ($1500/10^{8}$).",
      "recap": "קודם Bytes לביטים (כפול 8)",
      "questionHtml": "חבילה של 1500 Bytes נשלחת בקישור של 100 Mbps. מה השהיית השידור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>1500</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">L=1500\\cdot8=12000</annotation></semantics></math></span> ביט. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>8</mn></msup><mo>=</mo><mn>1.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">12000/10^{8}=1.2\\cdot10^{-4}</annotation></semantics></math></span> שנייה = <strong>0.12 ms</strong>. 0.015 ms מתקבל מי ששכח להמיר Bytes לביטים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1500</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">1500/10^{8}</annotation></semantics></math></span>).",
      "recapHtml": "קודם Bytes לביטים (כפול 8)"
     },
     {
      "id": "C02-Q3",
      "question": "חבילה של 1500 Bytes נשלחת בקישור של 1 Gbps. מה השהיית השידור?",
      "options": [
       {
        "id": "a",
        "value": "12 מיקרושניות",
        "type": "text",
        "html": "12 מיקרושניות"
       },
       {
        "id": "b",
        "value": "1.5 מיקרושניות",
        "type": "text",
        "html": "1.5 מיקרושניות"
       },
       {
        "id": "c",
        "value": "120 מיקרושניות",
        "type": "text",
        "html": "120 מיקרושניות"
       },
       {
        "id": "d",
        "value": "12 מילישניות",
        "type": "text",
        "html": "12 מילישניות"
       }
      ],
      "correctId": "a",
      "explanation": "$12000/10^{9}=1.2\\cdot10^{-5}$ שנייה = **12 מיקרושניות**. 1.5 מיקרושניות הוא הערך בלי המרה ל-ביטים, ו-12 מילישניות רחוק פי 1000.",
      "recap": "1500 Bytes על 1 Gbps = 12 מיקרושניות",
      "questionHtml": "חבילה של 1500 Bytes נשלחת בקישור של 1 Gbps. מה השהיית השידור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>9</mn></msup><mo>=</mo><mn>1.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>5</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">12000/10^{9}=1.2\\cdot10^{-5}</annotation></semantics></math></span> שנייה = <strong>12 מיקרושניות</strong>. 1.5 מיקרושניות הוא הערך בלי המרה ל-ביטים, ו-12 מילישניות רחוק פי 1000.",
      "recapHtml": "1500 Bytes על 1 Gbps = 12 מיקרושניות"
     },
     {
      "id": "C02-Q4",
      "question": "קובץ של 1 MB (מיליון בתים) נשלח כחבילה אחת בקישור של 10 Mbps. כמה זמן נמשך השידור?",
      "options": [
       {
        "id": "a",
        "value": "0.1 שנייה",
        "type": "text",
        "html": "0.1 שנייה"
       },
       {
        "id": "b",
        "value": "8 שניות",
        "type": "text",
        "html": "8 שניות"
       },
       {
        "id": "c",
        "value": "0.8 שנייה",
        "type": "text",
        "html": "0.8 שנייה"
       },
       {
        "id": "d",
        "value": "0.08 שנייה",
        "type": "text",
        "html": "0.08 שנייה"
       }
      ],
      "correctId": "c",
      "explanation": "$L=10^{6}\\cdot8=8\\cdot10^{6}$ ביט. $8\\cdot10^{6}/10^{7}=$ **0.8 שנייה**. 0.1 שנייה מתקבלת בלי הכפלה ב-8.",
      "recap": "קובץ = חבילה גדולה, אותה נוסחה",
      "questionHtml": "קובץ של 1 MB (מיליון בתים) נשלח כחבילה אחת בקישור של 10 Mbps. כמה זמן נמשך השידור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><msup><mn>10</mn><mn>6</mn></msup><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">L=10^{6}\\cdot8=8\\cdot10^{6}</annotation></semantics></math></span> ביט. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>7</mn></msup><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">8\\cdot10^{6}/10^{7}=</annotation></semantics></math></span> <strong>0.8 שנייה</strong>. 0.1 שנייה מתקבלת בלי הכפלה ב-8.",
      "recapHtml": "קובץ = חבילה גדולה, אותה נוסחה"
     },
     {
      "id": "C02-Q5",
      "question": "איזה מהגורמים הבאים **אינו** משפיע על השהיית השידור של חבילה?",
      "options": [
       {
        "id": "a",
        "value": "אורך הקו בק\"מ",
        "type": "text",
        "html": "אורך הקו בק\"מ"
       },
       {
        "id": "b",
        "value": "גודל החבילה",
        "type": "text",
        "html": "גודל החבילה"
       },
       {
        "id": "c",
        "value": "קצב הקישור",
        "type": "text",
        "html": "קצב הקישור"
       },
       {
        "id": "d",
        "value": "מספר הביטים בכותרת החבילה",
        "type": "text",
        "html": "מספר הביטים בכותרת החבילה"
       }
      ],
      "correctId": "a",
      "explanation": "$d_{trans}=L/R$, והמרחק אינו בנוסחה. אורך הקו שייך להשהיית ההתפשטות. הכותרת היא חלק מ-$L$.",
      "recap": "שידור: רק $L$ ו-$R$",
      "questionHtml": "איזה מהגורמים הבאים <strong>אינו</strong> משפיע על השהיית השידור של חבילה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>t</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>s</mi></mrow></msub><mo>=</mo><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">d_{trans}=L/R</annotation></semantics></math></span>, והמרחק אינו בנוסחה. אורך הקו שייך להשהיית ההתפשטות. הכותרת היא חלק מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span>.",
      "recapHtml": "שידור: רק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q6",
      "question": "אותה חבילה נשלחת פעם בקישור של 20 Mbps ופעם בקישור של 40 Mbps. מה היחס בין השהיות השידור?",
      "options": [
       {
        "id": "a",
        "value": "בקישור האיטי השידור ארוך פי 2",
        "type": "text",
        "html": "בקישור האיטי השידור ארוך פי 2"
       },
       {
        "id": "b",
        "value": "בקישור האיטי השידור קצר פי 2",
        "type": "text",
        "html": "בקישור האיטי השידור קצר פי 2"
       },
       {
        "id": "c",
        "value": "השהיות השידור שוות",
        "type": "text",
        "html": "השהיות השידור שוות"
       },
       {
        "id": "d",
        "value": "בקישור האיטי השידור ארוך פי 4",
        "type": "text",
        "html": "בקישור האיטי השידור ארוך פי 4"
       }
      ],
      "correctId": "a",
      "explanation": "$L/R$ הפוך ל-$R$: חצי מהקצב נותן כפול מהזמן. השהיות לא שוות, כי הקצב משתנה.",
      "recap": "קצב כפול = שידור חצי",
      "questionHtml": "אותה חבילה נשלחת פעם בקישור של 20 Mbps ופעם בקישור של 40 Mbps. מה היחס בין השהיות השידור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">L/R</annotation></semantics></math></span> הפוך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span>: חצי מהקצב נותן כפול מהזמן. השהיות לא שוות, כי הקצב משתנה.",
      "recapHtml": "קצב כפול = שידור חצי"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🛰️",
    "title": "השהיית התפשטות d/s",
    "goal": "לחשב את זמן המסע של ביט לאורך הקו ולהכריע אם שידור או התפשטות הם הגורם הדומיננטי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>השהיית התפשטות</b> (propagation delay) היא הזמן שלוקח לביט לעבור את אורך הקו. הוא תלוי רק במרחק ובמהירות האות בחומר:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>p</mi></mrow></msub><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>d</mi><mi>s</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">d_{prop}=\\dfrac{d}{s}</annotation></semantics></math></span></div>\n<ul>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> במטרים (ק\"מ כפול 1000), ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">s</annotation></semantics></math></span> במטר לשנייה. בשאלות לרוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span> (כבל) או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">3\\cdot10^{8}</annotation></semantics></math></span>.</li>\n<li>היא <b>אינה תלויה</b> בגודל החבילה או בקצב הקישור.</li>\n</ul>\n<div class=\"lesson-ex\">קו של 1000 ק\"מ, ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>p</mi></mrow></msub><mo>=</mo><msup><mn>10</mn><mn>6</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0.005</mn></mrow><annotation encoding=\"application/x-tex\">d_{prop}=10^{6}/(2\\cdot10^{8})=0.005</annotation></semantics></math></span> שנייה = <b>5 ms</b>.</div>\n<div class=\"lesson-rule\">🔑 <b>שידור מול התפשטות:</b> שידור הוא \"כמה זמן לפתוח את הברז\", והתפשטות הוא \"כמה זמן המים נוסעים בצינור\". קישור ארוך ומהיר: ההתפשטות גדולה מהשידור. קישור קצר ואיטי: השידור גדול מההתפשטות. מחשבים את שניהם ובודקים מי גדול יותר.</div>\n<div class=\"lesson-trap\">⚠️ <b>הגדלת רוחב פס לא מקצרת התפשטות.</b> כשהשהיה נובעת ממרחק, שדרוג הקישור ל-Gbps כמעט לא משנה. כך גם <b>ק\"מ מול מטר</b>: בדקו ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> במטרים לפני החילוק.</div>\n<p>השהיה בצומת (nodal) מורכבת מארבעה חלקים: עיבוד, תור, שידור והתפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mrow><mi>n</mi><mi>o</mi><mi>d</mi><mi>a</mi><mi>l</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>c</mi></mrow></msub><mo>+</mo><msub><mi>d</mi><mrow><mi>q</mi><mi>u</mi><mi>e</mi><mi>u</mi><mi>e</mi></mrow></msub><mo>+</mo><msub><mi>d</mi><mrow><mi>t</mi><mi>r</mi><mi>a</mi><mi>n</mi><mi>s</mi></mrow></msub><mo>+</mo><msub><mi>d</mi><mrow><mi>p</mi><mi>r</mi><mi>o</mi><mi>p</mi></mrow></msub></mrow><annotation encoding=\"application/x-tex\">d_{nodal}=d_{proc}+d_{queue}+d_{trans}+d_{prop}</annotation></semantics></math></span>. כשהשאלה אומרת \"אין עיכובים אחרים\" נשארים רק שידור והתפשטות.</p>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "קו באורך 1000 ק\"מ, ומהירות ההתפשטות $2\\cdot10^{8}$ מטר לשנייה. מה השהיית ההתפשטות?",
      "options": [
       {
        "id": "a",
        "value": "50 ms",
        "type": "text",
        "html": "50 ms"
       },
       {
        "id": "b",
        "value": "5 ms",
        "type": "text",
        "html": "5 ms"
       },
       {
        "id": "c",
        "value": "0.5 ms",
        "type": "text",
        "html": "0.5 ms"
       },
       {
        "id": "d",
        "value": "5 מיקרושניות",
        "type": "text",
        "html": "5 מיקרושניות"
       }
      ],
      "correctId": "b",
      "explanation": "$d=10^{6}$ מטר. $10^{6}/(2\\cdot10^{8})=0.005$ שנייה = **5 ms**. 5 מיקרושניות מתקבל מי שהציב 1000 מטר במקום ק\"מ.",
      "recap": "ק\"מ למטר: כפול 1000",
      "questionHtml": "קו באורך 1000 ק\"מ, ומהירות ההתפשטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot10^{8}</annotation></semantics></math></span> מטר לשנייה. מה השהיית ההתפשטות?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">d=10^{6}</annotation></semantics></math></span> מטר. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>6</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0.005</mn></mrow><annotation encoding=\"application/x-tex\">10^{6}/(2\\cdot10^{8})=0.005</annotation></semantics></math></span> שנייה = <strong>5 ms</strong>. 5 מיקרושניות מתקבל מי שהציב 1000 מטר במקום ק\"מ.",
      "recapHtml": "ק\"מ למטר: כפול 1000"
     },
     {
      "id": "C03-Q2",
      "question": "קו באורך 2 ק\"מ ומהירות ההתפשטות $3\\cdot10^{8}$ מטר לשנייה. מה השהיית ההתפשטות?",
      "options": [
       {
        "id": "a",
        "value": "6.67 מיקרושניות",
        "type": "text",
        "html": "6.67 מיקרושניות"
       },
       {
        "id": "b",
        "value": "6.67 מילישניות",
        "type": "text",
        "html": "6.67 מילישניות"
       },
       {
        "id": "c",
        "value": "0.67 מיקרושניות",
        "type": "text",
        "html": "0.67 מיקרושניות"
       },
       {
        "id": "d",
        "value": "66.7 מיקרושניות",
        "type": "text",
        "html": "66.7 מיקרושניות"
       }
      ],
      "correctId": "a",
      "explanation": "$2000/(3\\cdot10^{8})=6.67\\cdot10^{-6}$ שנייה = **6.67 מיקרושניות**. קו קצר מאוד נותן התפשטות זניחה.",
      "recap": "קו קצר, התפשטות זעירה",
      "questionHtml": "קו באורך 2 ק\"מ ומהירות ההתפשטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">3\\cdot10^{8}</annotation></semantics></math></span> מטר לשנייה. מה השהיית ההתפשטות?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2000</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>6.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mo>−</mo><mn>6</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2000/(3\\cdot10^{8})=6.67\\cdot10^{-6}</annotation></semantics></math></span> שנייה = <strong>6.67 מיקרושניות</strong>. קו קצר מאוד נותן התפשטות זניחה.",
      "recapHtml": "קו קצר, התפשטות זעירה"
     },
     {
      "id": "C03-Q3",
      "question": "חבילה של 1500 Bytes בקישור של 1 Gbps ובקו באורך 100 ק\"מ ($s=2\\cdot10^{8}$). איזו השהיה גדולה יותר?",
      "options": [
       {
        "id": "a",
        "value": "שידור (12 מיקרושניות)",
        "type": "text",
        "html": "שידור (12 מיקרושניות)"
       },
       {
        "id": "b",
        "value": "התפשטות (500 מיקרושניות)",
        "type": "text",
        "html": "התפשטות (500 מיקרושניות)"
       },
       {
        "id": "c",
        "value": "שתיהן שוות",
        "type": "text",
        "html": "שתיהן שוות"
       },
       {
        "id": "d",
        "value": "שידור (120 מיקרושניות)",
        "type": "text",
        "html": "שידור (120 מיקרושניות)"
       }
      ],
      "correctId": "b",
      "explanation": "שידור: $12000/10^{9}=12$ מיקרושניות. התפשטות: $10^{5}/(2\\cdot10^{8})=500$ מיקרושניות. **ההתפשטות גדולה פי 40 בערך.**",
      "recap": "קישור מהיר וארוך: התפשטות דומיננטית",
      "questionHtml": "חבילה של 1500 Bytes בקישור של 1 Gbps ובקו באורך 100 ק\"מ (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span>). איזו השהיה גדולה יותר?",
      "explanationHtml": "שידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>9</mn></msup><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">12000/10^{9}=12</annotation></semantics></math></span> מיקרושניות. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>5</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">10^{5}/(2\\cdot10^{8})=500</annotation></semantics></math></span> מיקרושניות. <strong>ההתפשטות גדולה פי 40 בערך.</strong>",
      "recapHtml": "קישור מהיר וארוך: התפשטות דומיננטית"
     },
     {
      "id": "C03-Q4",
      "question": "חבילה של 1500 Bytes בקישור של 10 Mbps ובקו באורך 100 מטר ($s=2\\cdot10^{8}$). איזו השהיה גדולה יותר?",
      "options": [
       {
        "id": "a",
        "value": "התפשטות, כי יש קו",
        "type": "text",
        "html": "התפשטות, כי יש קו"
       },
       {
        "id": "b",
        "value": "שידור (1.2 ms) מול התפשטות (0.5 מיקרושניות)",
        "type": "text",
        "html": "שידור (1.2 ms) מול התפשטות (0.5 מיקרושניות)"
       },
       {
        "id": "c",
        "value": "שתיהן שוות",
        "type": "text",
        "html": "שתיהן שוות"
       },
       {
        "id": "d",
        "value": "אי אפשר לדעת בלי השהיית התור",
        "type": "text",
        "html": "אי אפשר לדעת בלי השהיית התור"
       }
      ],
      "correctId": "b",
      "explanation": "שידור: $12000/10^{7}=1.2$ ms. התפשטות: $100/(2\\cdot10^{8})=0.5$ מיקרושניות. **השידור גדול פי אלפים.** קו קצר ואיטי: משקל השידור.",
      "recap": "קישור איטי וקצר: שידור דומיננטי",
      "questionHtml": "חבילה של 1500 Bytes בקישור של 10 Mbps ובקו באורך 100 מטר (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span>). איזו השהיה גדולה יותר?",
      "explanationHtml": "שידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>7</mn></msup><mo>=</mo><mn>1.2</mn></mrow><annotation encoding=\"application/x-tex\">12000/10^{7}=1.2</annotation></semantics></math></span> ms. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">100/(2\\cdot10^{8})=0.5</annotation></semantics></math></span> מיקרושניות. <strong>השידור גדול פי אלפים.</strong> קו קצר ואיטי: משקל השידור.",
      "recapHtml": "קישור איטי וקצר: שידור דומיננטי"
     },
     {
      "id": "C03-Q5",
      "question": "מעדכנים קישור מ-10 Mbps ל-1 Gbps באותו כבל. איזו השהיה **לא** תשתנה בגלל השדרוג?",
      "options": [
       {
        "id": "a",
        "value": "השהיית השידור",
        "type": "text",
        "html": "השהיית השידור"
       },
       {
        "id": "b",
        "value": "השהיית ההתפשטות",
        "type": "text",
        "html": "השהיית ההתפשטות"
       },
       {
        "id": "c",
        "value": "שתיהן ישתנו",
        "type": "text",
        "html": "שתיהן ישתנו"
       },
       {
        "id": "d",
        "value": "אף אחת מהן",
        "type": "text",
        "html": "אף אחת מהן"
       }
      ],
      "correctId": "b",
      "explanation": "הקצב $R$ נמצא בנוסחת השידור בלבד. ההתפשטות תלויה במרחק ובמהירות האות בכבל, והם נשארו. לכן שדרוג רוחב פס לא עוזר כשההשהיה נובעת ממרחק.",
      "recap": "התפשטות לא תלויה ב-$R$",
      "questionHtml": "מעדכנים קישור מ-10 Mbps ל-1 Gbps באותו כבל. איזו השהיה <strong>לא</strong> תשתנה בגלל השדרוג?",
      "explanationHtml": "הקצב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> נמצא בנוסחת השידור בלבד. ההתפשטות תלויה במרחק ובמהירות האות בכבל, והם נשארו. לכן שדרוג רוחב פס לא עוזר כשההשהיה נובעת ממרחק.",
      "recapHtml": "התפשטות לא תלויה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔗",
    "title": "Store-and-forward על כמה קישורים",
    "goal": "לחשב את ההשהיה הכוללת של חבילה אחת שעוברת שרשרת קישורים עם קצבים ואורכים שונים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>בנתב <b>store-and-forward</b> החבילה נקלטת <b>כולה</b> לפני שמתחילים להעביר אותה הלאה. לכן כל קישור בדרך משלם את ההשהיה שלו במלואה, וההשהיות מצטברות. כשאין עיבוד ותור:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo fence=\"true\">(</mo><mfrac><mi>L</mi><msub><mi>R</mi><mi>i</mi></msub></mfrac><mo>+</mo><mfrac><msub><mi>d</mi><mi>i</mi></msub><mi>s</mi></mfrac><mo fence=\"true\">)</mo></mrow></mstyle></mrow><annotation encoding=\"application/x-tex\">d=\\displaystyle\\sum_{i=1}^{n}\\left(\\frac{L}{R_i}+\\frac{d_i}{s}\\right)</annotation></semantics></math></span></div>\n<h3>מתכון</h3>\n<ol>\n<li>רושמים לכל קישור את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>R</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">R_i</annotation></semantics></math></span> ואת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">d_i</annotation></semantics></math></span> (מהאיור או מהטקסט).</li>\n<li>מחשבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi mathvariant=\"normal\">/</mi><msub><mi>R</mi><mi>i</mi></msub></mrow><annotation encoding=\"application/x-tex\">L/R_i</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>d</mi><mi>i</mi></msub><mi mathvariant=\"normal\">/</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">d_i/s</annotation></semantics></math></span> לכל קישור, <b>ביחידה אחת</b> (נוח: מילישניות).</li>\n<li>מסכמים הכול. אם בוחרים \"הקרוב ביותר\", בוחרים את הערך הקרוב ולא בהכרח ערך זהה.</li>\n</ol>\n<div class=\"lesson-ex\">חבילה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">L=12000</annotation></semantics></math></span> ביט. קישור 1: 100 Mbps, ‏300 ק\"מ. קישור 2: 10 Mbps, ‏600 ק\"מ. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span>.<br>\nשידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.12</mn><mo>+</mo><mn>1.2</mn><mo>=</mo><mn>1.32</mn></mrow><annotation encoding=\"application/x-tex\">0.12+1.2=1.32</annotation></semantics></math></span> ms. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>4.5</mn></mrow><annotation encoding=\"application/x-tex\">1.5+3=4.5</annotation></semantics></math></span> ms. סך הכול <b>5.82 ms</b>.</div>\n<p>אפשר לבדוק את הדוגמה במחשבון (ולשנות את הנתונים ולראות איך ההשהיה משתנה):</p>\n<div class=\"calc-fig\" data-calc='{\"kind\": \"delay\", \"L\": 12000, \"Lunit\": \"bit\", \"s\": \"2e8\", \"links\": [{\"R\": 100, \"Runit\": \"Mbps\", \"d\": 300, \"dunit\": \"km\"}, {\"R\": 10, \"Runit\": \"Mbps\", \"d\": 600, \"dunit\": \"km\"}], \"caption\": \"הדוגמה מהשיעור\"}'></div>\n<div class=\"lesson-trap\">⚠️ <b>קישורים ונתבים.</b> שני נתבים בדרך מחברים בין <b>שלושה</b> קישורים (מקור לנתב, נתב לנתב, נתב ליעד). סופרים קישורים, לא נתבים.</div>\n<div class=\"lesson-trap\">⚠️ <b>סדר גודל.</b> שידור בקישור איטי וההתפשטות בקישור ארוך יכולים להיות בסדרי גודל שונים. אחרי הסיכום בדקו איזה חלק דומיננטי: התפשטות של קו של 1000 ק\"מ גדולה בהרבה משידור ב-Gbps.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "חבילה של 10,000 ביט עוברת שני קישורים עוקבים, כל אחד 10 Mbps, והתפשטות זניחה. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "1 ms",
        "type": "text",
        "html": "1 ms"
       },
       {
        "id": "b",
        "value": "0.5 ms",
        "type": "text",
        "html": "0.5 ms"
       },
       {
        "id": "c",
        "value": "2 ms",
        "type": "text",
        "html": "2 ms"
       },
       {
        "id": "d",
        "value": "20 ms",
        "type": "text",
        "html": "20 ms"
       }
      ],
      "correctId": "c",
      "explanation": "בכל קישור $10^{4}/10^{7}=1$ ms. בשני קישורים store-and-forward מצטברות: **2 ms**. 1 ms הוא קישור אחד בלבד.",
      "recap": "כל קישור משלם שידור מלא",
      "questionHtml": "חבילה של 10,000 ביט עוברת שני קישורים עוקבים, כל אחד 10 Mbps, והתפשטות זניחה. מה ההשהיה הכוללת?",
      "explanationHtml": "בכל קישור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>10</mn><mn>4</mn></msup><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>7</mn></msup><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">10^{4}/10^{7}=1</annotation></semantics></math></span> ms. בשני קישורים store-and-forward מצטברות: <strong>2 ms</strong>. 1 ms הוא קישור אחד בלבד.",
      "recapHtml": "כל קישור משלם שידור מלא"
     },
     {
      "id": "C04-Q2",
      "question": "בין המקור ליעד יש 2 נתבים, וכל הקישורים 8 Mbps. החבילה 16,000 ביט, התפשטות ועיבוד זניחים. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "4 ms",
        "type": "text",
        "html": "4 ms"
       },
       {
        "id": "b",
        "value": "6 ms",
        "type": "text",
        "html": "6 ms"
       },
       {
        "id": "c",
        "value": "2 ms",
        "type": "text",
        "html": "2 ms"
       },
       {
        "id": "d",
        "value": "8 ms",
        "type": "text",
        "html": "8 ms"
       }
      ],
      "correctId": "b",
      "explanation": "שני נתבים מחברים **3 קישורים**. בכל קישור $16000/(8\\cdot10^{6})=2$ ms, וסך הכול **6 ms**. 4 ms מתקבל מי שספר נתבים במקום קישורים.",
      "recap": "N נתבים = N+1 קישורים",
      "questionHtml": "בין המקור ליעד יש 2 נתבים, וכל הקישורים 8 Mbps. החבילה 16,000 ביט, התפשטות ועיבוד זניחים. מה ההשהיה הכוללת?",
      "explanationHtml": "שני נתבים מחברים <strong>3 קישורים</strong>. בכל קישור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16000</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">16000/(8\\cdot10^{6})=2</annotation></semantics></math></span> ms, וסך הכול <strong>6 ms</strong>. 4 ms מתקבל מי שספר נתבים במקום קישורים.",
      "recapHtml": "N נתבים = N+1 קישורים"
     },
     {
      "id": "C04-Q3",
      "question": "חבילה של 4,000 ביט עוברת קישור של 100 Mbps ואחריו קישור של 10 Mbps, התפשטות זניחה. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "440 מיקרושניות",
        "type": "text",
        "html": "440 מיקרושניות"
       },
       {
        "id": "b",
        "value": "400 מיקרושניות",
        "type": "text",
        "html": "400 מיקרושניות"
       },
       {
        "id": "c",
        "value": "40 מיקרושניות",
        "type": "text",
        "html": "40 מיקרושניות"
       },
       {
        "id": "d",
        "value": "4.4 מילישניות",
        "type": "text",
        "html": "4.4 מילישניות"
       }
      ],
      "correctId": "a",
      "explanation": "$4000/10^{8}=40$ מיקרושניות ועוד $4000/10^{7}=400$ מיקרושניות, יחד **440 מיקרושניות**. 400 מתקבל מי שהתעלם מהקישור המהיר.",
      "recap": "מסכמים את כל הקישורים, גם המהירים",
      "questionHtml": "חבילה של 4,000 ביט עוברת קישור של 100 Mbps ואחריו קישור של 10 Mbps, התפשטות זניחה. מה ההשהיה הכוללת?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>8</mn></msup><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">4000/10^{8}=40</annotation></semantics></math></span> מיקרושניות ועוד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>7</mn></msup><mo>=</mo><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">4000/10^{7}=400</annotation></semantics></math></span> מיקרושניות, יחד <strong>440 מיקרושניות</strong>. 400 מתקבל מי שהתעלם מהקישור המהיר.",
      "recapHtml": "מסכמים את כל הקישורים, גם המהירים"
     },
     {
      "id": "C04-Q4",
      "question": "חבילה של 12,000 ביט. קישור 1: 100 Mbps באורך 300 ק\"מ. קישור 2: 10 Mbps באורך 600 ק\"מ. $s=2\\cdot10^{8}$ מטר לשנייה. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "1.32 ms",
        "type": "text",
        "html": "1.32 ms"
       },
       {
        "id": "b",
        "value": "4.5 ms",
        "type": "text",
        "html": "4.5 ms"
       },
       {
        "id": "c",
        "value": "5.82 ms",
        "type": "text",
        "html": "5.82 ms"
       },
       {
        "id": "d",
        "value": "58.2 ms",
        "type": "text",
        "html": "58.2 ms"
       }
      ],
      "correctId": "c",
      "explanation": "שידור: $0.12+1.2=1.32$ ms. התפשטות: $1.5+3=4.5$ ms. סך הכול **5.82 ms**. 1.32 הוא רק השידור ו-4.5 רק ההתפשטות.",
      "recap": "סכום השידורים ועוד סכום ההתפשטויות",
      "questionHtml": "חבילה של 12,000 ביט. קישור 1: 100 Mbps באורך 300 ק\"מ. קישור 2: 10 Mbps באורך 600 ק\"מ. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span> מטר לשנייה. מה ההשהיה הכוללת?",
      "explanationHtml": "שידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.12</mn><mo>+</mo><mn>1.2</mn><mo>=</mo><mn>1.32</mn></mrow><annotation encoding=\"application/x-tex\">0.12+1.2=1.32</annotation></semantics></math></span> ms. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn><mo>+</mo><mn>3</mn><mo>=</mo><mn>4.5</mn></mrow><annotation encoding=\"application/x-tex\">1.5+3=4.5</annotation></semantics></math></span> ms. סך הכול <strong>5.82 ms</strong>. 1.32 הוא רק השידור ו-4.5 רק ההתפשטות.",
      "recapHtml": "סכום השידורים ועוד סכום ההתפשטויות"
     },
     {
      "id": "C04-Q5",
      "question": "חבילה בגודל 1000 Bytes עוברת שני קישורים של 8 Mbps, בלי התפשטות. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "0.25 ms",
        "type": "text",
        "html": "0.25 ms"
       },
       {
        "id": "b",
        "value": "2 ms",
        "type": "text",
        "html": "2 ms"
       },
       {
        "id": "c",
        "value": "1 ms",
        "type": "text",
        "html": "1 ms"
       },
       {
        "id": "d",
        "value": "16 ms",
        "type": "text",
        "html": "16 ms"
       }
      ],
      "correctId": "b",
      "explanation": "$L=8000$ ביט. בכל קישור $8000/(8\\cdot10^{6})=1$ ms, ובשניים **2 ms**. 0.25 ms מתקבל מי ששכח את ההמרה ל-ביטים ($1000/(8\\cdot10^{6})$ פעמיים).",
      "recap": "Bytes לביטים לפני החילוק",
      "questionHtml": "חבילה בגודל 1000 Bytes עוברת שני קישורים של 8 Mbps, בלי התפשטות. מה ההשהיה הכוללת?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>8000</mn></mrow><annotation encoding=\"application/x-tex\">L=8000</annotation></semantics></math></span> ביט. בכל קישור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8000</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">8000/(8\\cdot10^{6})=1</annotation></semantics></math></span> ms, ובשניים <strong>2 ms</strong>. 0.25 ms מתקבל מי ששכח את ההמרה ל-ביטים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1000</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>8</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">1000/(8\\cdot10^{6})</annotation></semantics></math></span> פעמיים).",
      "recapHtml": "Bytes לביטים לפני החילוק"
     },
     {
      "id": "C04-Q6",
      "question": "חבילה של 6,000 ביט עוברת שלושה קישורים באורך 500 ק\"מ כל אחד, בקצבים 60, 30 ו-20 Mbps. $s=2\\cdot10^{8}$. מה ההשהיה הכוללת?",
      "options": [
       {
        "id": "a",
        "value": "0.6 ms",
        "type": "text",
        "html": "0.6 ms"
       },
       {
        "id": "b",
        "value": "7.5 ms",
        "type": "text",
        "html": "7.5 ms"
       },
       {
        "id": "c",
        "value": "81 ms",
        "type": "text",
        "html": "81 ms"
       },
       {
        "id": "d",
        "value": "8.1 ms",
        "type": "text",
        "html": "8.1 ms"
       }
      ],
      "correctId": "d",
      "explanation": "שידור: $0.1+0.2+0.3=0.6$ ms. התפשטות: $3\\cdot2.5=7.5$ ms. סך הכול **8.1 ms**. ההתפשטות דומיננטית, אבל 7.5 לבדה אינו ערך מדויק.",
      "recap": "לא שוכחים אף אחד משני הרכיבים",
      "questionHtml": "חבילה של 6,000 ביט עוברת שלושה קישורים באורך 500 ק\"מ כל אחד, בקצבים 60, 30 ו-20 Mbps. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">s=2\\cdot10^{8}</annotation></semantics></math></span>. מה ההשהיה הכוללת?",
      "explanationHtml": "שידור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn><mo>+</mo><mn>0.2</mn><mo>+</mo><mn>0.3</mn><mo>=</mo><mn>0.6</mn></mrow><annotation encoding=\"application/x-tex\">0.1+0.2+0.3=0.6</annotation></semantics></math></span> ms. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>2.5</mn><mo>=</mo><mn>7.5</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot2.5=7.5</annotation></semantics></math></span> ms. סך הכול <strong>8.1 ms</strong>. ההתפשטות דומיננטית, אבל 7.5 לבדה אינו ערך מדויק.",
      "recapHtml": "לא שוכחים אף אחד משני הרכיבים"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🚦",
    "title": "עוצמת תעבורה והתור",
    "goal": "לחשב את עוצמת התעבורה $La/R$ ולהסיק ממנה מה קורה בתור.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לחשב את עוצמת התעבורה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi>a</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">La/R</annotation></semantics></math></span> ולהסיק ממנה מה קורה בתור.",
    "lesson": {
     "html": "\n<p>חבילות מגיעות לתור של נתב בקצב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> (חבילות לשנייה), כל אחת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> ביט, והקישור מוציא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> ביט לשנייה. <b>עוצמת התעבורה</b> (traffic intensity) משווה בין מה שמגיע למה שהקישור מסוגל לשרת:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\rho=\\dfrac{a\\cdot L}{R}</annotation></semantics></math></span></div>\n<table>\n<thead><tr><th><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span></th><th>מה קורה בתור</th></tr></thead>\n<tbody>\n<tr><td>קרוב ל-0 (למשל 0.001)</td><td>התור כמעט תמיד ריק, אין פוטנציאל לעומס</td></tr>\n<tr><td>בינוני (עד 0.5)</td><td>תור קצר, השהיית תור קטנה</td></tr>\n<tr><td>מתקרב ל-1 (למשל 0.95)</td><td>התור גדל והשהיית התור עולה מאוד</td></tr>\n<tr><td>מעל 1</td><td>מגיע יותר ממה שמוציאים: התור גדל בלי גבול</td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <b>תור הוא בגודל סופי.</b> כשהוא מלא, חבילה חדשה <b>נזרקת</b> (packet loss, tail drop). הנתב לא מפסיק לעבוד ולא \"מאט\". והשהיית התור עולה כבר כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span> מתקרב ל-1, עוד לפני שהוא עובר אותו.</div>\n<h3>מתכון</h3>\n<ol>\n<li>גודל החבילה לביטים (בית = 8 ביט) והקצב לביט לשנייה.</li>\n<li><b>קצב ההגעה לחבילות לשנייה</b>: שעה = 3600 שניות, דקה = 60.</li>\n<li>מציבים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">aL/R</annotation></semantics></math></span> ובודקים סדר גודל.</li>\n</ol>\n<div class=\"lesson-ex\">1,500 Bytes ‏(12000 ביט), ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">R=20</annotation></semantics></math></span> Mbps, ‏300,000 חבילות לשעה. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>300000</mn><mi mathvariant=\"normal\">/</mi><mn>3600</mn><mo>=</mo><mn>83.3</mn></mrow><annotation encoding=\"application/x-tex\">a=300000/3600=83.3</annotation></semantics></math></span> לשנייה. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>83.3</mn><mo>⋅</mo><mn>12000</mn><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>20</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0.05</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=83.3\\cdot12000/(20\\cdot10^{6})=0.05</annotation></semantics></math></span>: עומס נמוך.</div>\n<div class=\"lesson-trap\">⚠️ מי ששכח להמיר \"לשעה\" ל\"לשנייה\" מקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span> גדול פי 3600 וטועה בסדר גודל. המרחק ומהירות ההתפשטות אינם בנוסחה.</div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "מגיעות 6,000 חבילות בדקה, כל אחת 1,000 ביט, והקישור 1 Mbps. מה עוצמת התעבורה?",
      "options": [
       {
        "id": "a",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "b",
        "value": "0.1",
        "type": "text",
        "html": "0.1"
       },
       {
        "id": "c",
        "value": "0.0017",
        "type": "text",
        "html": "0.0017"
       },
       {
        "id": "d",
        "value": "100",
        "type": "text",
        "html": "100"
       }
      ],
      "correctId": "b",
      "explanation": "$a=6000/60=100$ חבילות לשנייה. $\\rho=100\\cdot1000/10^{6}=$ **0.1**. הערך 6 מתקבל בלי חלוקה ל-60 ($6000\\cdot1000/10^{6}$).",
      "recap": "קצב הגעה תמיד לשנייה",
      "questionHtml": "מגיעות 6,000 חבילות בדקה, כל אחת 1,000 ביט, והקישור 1 Mbps. מה עוצמת התעבורה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>6000</mn><mi mathvariant=\"normal\">/</mi><mn>60</mn><mo>=</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">a=6000/60=100</annotation></semantics></math></span> חבילות לשנייה. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>100</mn><mo>⋅</mo><mn>1000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>6</mn></msup><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">\\rho=100\\cdot1000/10^{6}=</annotation></semantics></math></span> <strong>0.1</strong>. הערך 6 מתקבל בלי חלוקה ל-60 (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6000</mn><mo>⋅</mo><mn>1000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">6000\\cdot1000/10^{6}</annotation></semantics></math></span>).",
      "recapHtml": "קצב הגעה תמיד לשנייה"
     },
     {
      "id": "C05-Q2",
      "question": "מגיעות 720,000 חבילות לשעה, כל אחת 1,500 Bytes, והקישור 100 Mbps. מה עוצמת התעבורה?",
      "options": [
       {
        "id": "a",
        "value": "86.4",
        "type": "text",
        "html": "86.4"
       },
       {
        "id": "b",
        "value": "0.003",
        "type": "text",
        "html": "0.003"
       },
       {
        "id": "c",
        "value": "0.024",
        "type": "text",
        "html": "0.024"
       },
       {
        "id": "d",
        "value": "0.19",
        "type": "text",
        "html": "0.19"
       }
      ],
      "correctId": "c",
      "explanation": "$a=720000/3600=200$ לשנייה, ו-$L=12000$ ביט. $\\rho=200\\cdot12000/10^{8}=$ **0.024**. 0.003 מתקבל מי ששכח להכפיל ב-8. 86.4 מתקבל מי שלא המיר שעה לשנייה.",
      "recap": "שתי המרות: שעה לשנייה, Bytes לביטים",
      "questionHtml": "מגיעות 720,000 חבילות לשעה, כל אחת 1,500 Bytes, והקישור 100 Mbps. מה עוצמת התעבורה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>720000</mn><mi mathvariant=\"normal\">/</mi><mn>3600</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">a=720000/3600=200</annotation></semantics></math></span> לשנייה, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">L=12000</annotation></semantics></math></span> ביט. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>200</mn><mo>⋅</mo><mn>12000</mn><mi mathvariant=\"normal\">/</mi><msup><mn>10</mn><mn>8</mn></msup><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">\\rho=200\\cdot12000/10^{8}=</annotation></semantics></math></span> <strong>0.024</strong>. 0.003 מתקבל מי ששכח להכפיל ב-8. 86.4 מתקבל מי שלא המיר שעה לשנייה.",
      "recapHtml": "שתי המרות: שעה לשנייה, Bytes לביטים"
     },
     {
      "id": "C05-Q3",
      "question": "מגיעות 1,000 חבילות לשנייה, כל אחת 10,000 ביט, והקישור 5 Mbps. מה נכון?",
      "options": [
       {
        "id": "a",
        "value": "$\\rho=0.5$ והתור כמעט ריק",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.5</annotation></semantics></math></span> והתור כמעט ריק"
       },
       {
        "id": "b",
        "value": "$\\rho=2$ והתור גדל ללא גבול, ובסוף יש אובדן חבילות",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=2</annotation></semantics></math></span> והתור גדל ללא גבול, ובסוף יש אובדן חבילות"
       },
       {
        "id": "c",
        "value": "$\\rho=0.002$ ואין עומס",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.002</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.002</annotation></semantics></math></span> ואין עומס"
       },
       {
        "id": "d",
        "value": "$\\rho=2$ והקישור פשוט מאט את השידור",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=2</annotation></semantics></math></span> והקישור פשוט מאט את השידור"
       }
      ],
      "correctId": "b",
      "explanation": "$\\rho=1000\\cdot10^{4}/(5\\cdot10^{6})=2>1$. מגיע פי 2 ממה שהקישור מוציא, התור גדל, וכשהוא מלא חבילות נזרקות. הקישור לא יכול לשדר מהר יותר מ-$R$.",
      "recap": "$\\rho>1$: תור גדל ואובדן חבילות",
      "questionHtml": "מגיעות 1,000 חבילות לשנייה, כל אחת 10,000 ביט, והקישור 5 Mbps. מה נכון?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>1000</mn><mo>⋅</mo><msup><mn>10</mn><mn>4</mn></msup><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>5</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mo stretchy=\"false\">)</mo><mo>=</mo><mn>2</mn><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=1000\\cdot10^{4}/(5\\cdot10^{6})=2&gt;1</annotation></semantics></math></span>. מגיע פי 2 ממה שהקישור מוציא, התור גדל, וכשהוא מלא חבילות נזרקות. הקישור לא יכול לשדר מהר יותר מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span>.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho&gt;1</annotation></semantics></math></span>: תור גדל ואובדן חבילות"
     },
     {
      "id": "C05-Q4",
      "question": "באיזו מהעוצמות הבאות השהיית התור הצפויה הגדולה ביותר?",
      "options": [
       {
        "id": "a",
        "value": "$\\rho=0.02$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.02</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.02</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$\\rho=0.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.5</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$\\rho=0.1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$\\rho=0.95$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.95</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.95</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "ככל ש-$\\rho$ מתקרב ל-1, התור והשהייתו גדלים בחדות. ב-0.02 התור כמעט ריק.",
      "recap": "$\\rho\\to1$: השהיית התור קופצת",
      "questionHtml": "באיזו מהעוצמות הבאות השהיית התור הצפויה הגדולה ביותר?",
      "explanationHtml": "ככל ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span> מתקרב ל-1, התור והשהייתו גדלים בחדות. ב-0.02 התור כמעט ריק.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>→</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho\\to1</annotation></semantics></math></span>: השהיית התור קופצת"
     },
     {
      "bankId": "25A-C-Q5",
      "recap": "תור מלא: חבילה חדשה נזרקת (packet loss), הנתב ממשיך לעבוד",
      "recapHtml": "תור מלא: חבילה חדשה נזרקת (packet loss), הנתב ממשיך לעבוד"
     },
     {
      "bankId": "24A-B-Q1",
      "recap": "Bytes לביטים, לשעה לשנייה, ואז $aL/R$",
      "recapHtml": "Bytes לביטים, לשעה לשנייה, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">aL/R</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🎯",
    "title": "קצב הגעה מרבי, תפוקה וניצולת",
    "goal": "להפוך את נוסחת העוצמה כדי למצוא קצב הגעה, ולחשב תפוקה וניצולת בקישור משותף.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<h3>קצב הגעה מרבי</h3>\n<p>שאלה נפוצה: \"מה קצב ההגעה המרבי כך שעוצמת התעבורה תהיה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span>?\" פשוט מבודדים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span>:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>ρ</mi><mo>⋅</mo><mi>R</mi></mrow><mi>L</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">a=\\dfrac{\\rho\\cdot R}{L}</annotation></semantics></math></span></div>\n<p>התוצאה בחבילות <b>לשנייה</b>. אם התשובות ב\"לדקה\" או \"לשעה\", כופלים ב-60 או ב-3600 בסוף. קצב ההגעה הנוכחי, המרחק ומהירות ההתפשטות הם <b>מסיחים</b> ולא נכנסים לחישוב.</p>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">R=20</annotation></semantics></math></span> Mbps, ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>1500</mn></mrow><annotation encoding=\"application/x-tex\">L=1500</annotation></semantics></math></span> Bytes ‏(12000 ביט), ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.8</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.8</annotation></semantics></math></span>: ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>0.8</mn><mo>⋅</mo><mn>20</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mi mathvariant=\"normal\">/</mi><mn>12000</mn><mo>≈</mo><mn>1333</mn></mrow><annotation encoding=\"application/x-tex\">a=0.8\\cdot20\\cdot10^{6}/12000\\approx1333</annotation></semantics></math></span> חבילות לשנייה (כ-80,000 לדקה).</div>\n<h3>תפוקה וניצולת</h3>\n<ul>\n<li><b>Bandwidth</b> הוא הקיבולת התיאורטית המרבית של הערוץ. <b>Throughput</b> הוא הקצב שמתקבל בפועל, ולרוב קטן יותר (עומס, שגיאות, שליחות חוזרות, תקורה).</li>\n<li>בנתיב, התפוקה היא ה-<b>מינימום</b> של הקצבים בדרך (צוואר הבקבוק).</li>\n<li>קישור משותף בקצב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> שמתחלק שווה בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> חיבורים נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">R/k</annotation></semantics></math></span> לכל אחד.</li>\n<li><b>ניצולת</b> (utilization) של קישור: הקצב בפועל חלקי קצב הקישור.</li>\n</ul>\n<div class=\"lesson-ex\">חמישה חיבורים חולקים קישור של 200 Mbps; השרת 80 Mbps והלקוח 100 Mbps. הקישור המשותף נותן 40 לכל חיבור, ולכן התפוקה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>80</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>40</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">\\min(80,100,40)=40</annotation></semantics></math></span> Mbps. ניצולת בצד השרת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>40</mn><mi mathvariant=\"normal\">/</mi><mn>80</mn><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">40/80=0.5</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ ניצולת של צד מסוים מחלקים בקצב <b>של אותו צד</b>: שרת ולקוח שונים בקצביהם נותנים ניצולות שונות.</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "קישור 24 Mbps, חבילות של 1,500 Bytes. מה קצב ההגעה המרבי כך ש-$\\rho=0.5$?",
      "options": [
       {
        "id": "a",
        "value": "2,000 חבילות לשנייה",
        "type": "text",
        "html": "2,000 חבילות לשנייה"
       },
       {
        "id": "b",
        "value": "1,000 חבילות לדקה",
        "type": "text",
        "html": "1,000 חבילות לדקה"
       },
       {
        "id": "c",
        "value": "8,000 חבילות לשנייה",
        "type": "text",
        "html": "8,000 חבילות לשנייה"
       },
       {
        "id": "d",
        "value": "1,000 חבילות לשנייה",
        "type": "text",
        "html": "1,000 חבילות לשנייה"
       }
      ],
      "correctId": "d",
      "explanation": "$L=12000$. $a=0.5\\cdot24\\cdot10^{6}/12000=$ **1,000 לשנייה**. 2,000 הוא תוצאה של $\\rho=1$, ו-8,000 מתקבל מי ששכח להמיר Bytes לביטים.",
      "recap": "$a=\\rho R/L$",
      "questionHtml": "קישור 24 Mbps, חבילות של 1,500 Bytes. מה קצב ההגעה המרבי כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.5</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">L=12000</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>0.5</mn><mo>⋅</mo><mn>24</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mi mathvariant=\"normal\">/</mi><mn>12000</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">a=0.5\\cdot24\\cdot10^{6}/12000=</annotation></semantics></math></span> <strong>1,000 לשנייה</strong>. 2,000 הוא תוצאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=1</annotation></semantics></math></span>, ו-8,000 מתקבל מי ששכח להמיר Bytes לביטים.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mi>ρ</mi><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">a=\\rho R/L</annotation></semantics></math></span>"
     },
     {
      "id": "C06-Q2",
      "question": "קישור 1 Gbps, חבילות של 5,000 ביט, מרחק 1000 ק\"מ. מה קצב ההגעה המרבי (בחבילות לשנייה) כך ש-$\\rho=0.8$?",
      "options": [
       {
        "id": "a",
        "value": "200,000",
        "type": "text",
        "html": "200,000"
       },
       {
        "id": "b",
        "value": "160,000",
        "type": "text",
        "html": "160,000"
       },
       {
        "id": "c",
        "value": "1,600,000",
        "type": "text",
        "html": "1,600,000"
       },
       {
        "id": "d",
        "value": "16,000",
        "type": "text",
        "html": "16,000"
       }
      ],
      "correctId": "b",
      "explanation": "$a=0.8\\cdot10^{9}/5000=$ **160,000**. המרחק מיותר. 200,000 הוא עבור $\\rho=1$.",
      "recap": "המרחק לא נכנס",
      "questionHtml": "קישור 1 Gbps, חבילות של 5,000 ביט, מרחק 1000 ק\"מ. מה קצב ההגעה המרבי (בחבילות לשנייה) כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>0.8</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=0.8</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mn>0.8</mn><mo>⋅</mo><msup><mn>10</mn><mn>9</mn></msup><mi mathvariant=\"normal\">/</mi><mn>5000</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">a=0.8\\cdot10^{9}/5000=</annotation></semantics></math></span> <strong>160,000</strong>. המרחק מיותר. 200,000 הוא עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=1</annotation></semantics></math></span>.",
      "recapHtml": "המרחק לא נכנס"
     },
     {
      "id": "C06-Q3",
      "question": "שרת 80 Mbps, לקוח 100 Mbps, ובדרך קישור משותף של 200 Mbps שחולקים בו 5 חיבורים שווים. מה התפוקה של חיבור?",
      "options": [
       {
        "id": "a",
        "value": "80 Mbps",
        "type": "text",
        "html": "80 Mbps"
       },
       {
        "id": "b",
        "value": "40 Mbps",
        "type": "text",
        "html": "40 Mbps"
       },
       {
        "id": "c",
        "value": "100 Mbps",
        "type": "text",
        "html": "100 Mbps"
       },
       {
        "id": "d",
        "value": "200 Mbps",
        "type": "text",
        "html": "200 Mbps"
       }
      ],
      "correctId": "b",
      "explanation": "$200/5=40$. התפוקה היא המינימום $\\min(80,100,40)=$ **40 Mbps**. צוואר הבקבוק הוא הקישור המשותף.",
      "recap": "תפוקה = מינימום הקצבים",
      "questionHtml": "שרת 80 Mbps, לקוח 100 Mbps, ובדרך קישור משותף של 200 Mbps שחולקים בו 5 חיבורים שווים. מה התפוקה של חיבור?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mi mathvariant=\"normal\">/</mi><mn>5</mn><mo>=</mo><mn>40</mn></mrow><annotation encoding=\"application/x-tex\">200/5=40</annotation></semantics></math></span>. התפוקה היא המינימום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>80</mn><mo separator=\"true\">,</mo><mn>100</mn><mo separator=\"true\">,</mo><mn>40</mn><mo stretchy=\"false\">)</mo><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">\\min(80,100,40)=</annotation></semantics></math></span> <strong>40 Mbps</strong>. צוואר הבקבוק הוא הקישור המשותף.",
      "recapHtml": "תפוקה = מינימום הקצבים"
     },
     {
      "id": "C06-Q4",
      "question": "4 חיבורים חולקים קישור של 100 Mbps; קישור השרת 60 Mbps וקישור הלקוח 50 Mbps. מה ניצולת קישור השרת?",
      "options": [
       {
        "id": "a",
        "value": "0.42",
        "type": "text",
        "html": "0.42"
       },
       {
        "id": "b",
        "value": "0.25",
        "type": "text",
        "html": "0.25"
       },
       {
        "id": "c",
        "value": "0.50",
        "type": "text",
        "html": "0.50"
       },
       {
        "id": "d",
        "value": "1.00",
        "type": "text",
        "html": "1.00"
       }
      ],
      "correctId": "a",
      "explanation": "כל חיבור מקבל $100/4=25$ Mbps (וזה קטן מ-60 ומ-50). ניצולת השרת: $25/60\\approx$ **0.42**. ‏0.50 היא ניצולת הלקוח ($25/50$).",
      "recap": "ניצולת = בפועל חלקי הקצב של אותו צד",
      "questionHtml": "4 חיבורים חולקים קישור של 100 Mbps; קישור השרת 60 Mbps וקישור הלקוח 50 Mbps. מה ניצולת קישור השרת?",
      "explanationHtml": "כל חיבור מקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo>=</mo><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">100/4=25</annotation></semantics></math></span> Mbps (וזה קטן מ-60 ומ-50). ניצולת השרת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mi mathvariant=\"normal\">/</mi><mn>60</mn><mo>≈</mo></mrow><annotation encoding=\"application/x-tex\">25/60\\approx</annotation></semantics></math></span> <strong>0.42</strong>. ‏0.50 היא ניצולת הלקוח (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn><mi mathvariant=\"normal\">/</mi><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">25/50</annotation></semantics></math></span>).",
      "recapHtml": "ניצולת = בפועל חלקי הקצב של אותו צד"
     },
     {
      "bankId": "25A-C-Q12",
      "recap": "Bandwidth: קיבולת תיאורטית. Throughput: קצב בפועל",
      "recapHtml": "Bandwidth: קיבולת תיאורטית. Throughput: קצב בפועל"
     },
     {
      "bankId": "25A-C-Q6",
      "recap": "עיבוד גבוה מהשידור: הנתב עמוס או חלש",
      "recapHtml": "עיבוד גבוה מהשידור: הנתב עמוס או חלש"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות השהיה ועומס אמיתיות מהמבחנים: המרות יחידות, קצב הגעה מרבי, שרשרת קישורים וניצולת.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>שש שאלות אמיתיות. לפני כל אחת, שאלו:</p>\n<ol>\n<li>האם הכול ב<b>ביטים</b> וב<b>שניות</b>? (Bytes ‏×8, לשעה ‏÷3600.)</li>\n<li>מה מבקשים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span>, קצב הגעה מרבי, השהיה כוללת או ניצולת?</li>\n<li>אילו נתונים <b>מיותרים</b>? (מרחק בשאלת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span>, קצב הנוכחי בשאלת קצב מרבי.)</li>\n<li>בשרשרת קישורים: שידור בכל קישור ועוד התפשטות בכל קישור, ואז \"הקרוב ביותר\".</li>\n</ol>\n<div class=\"lesson-rule\">🔑 <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>a</mi><mi>L</mi></mrow><mi>R</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\rho=\\dfrac{aL}{R}</annotation></semantics></math></span> ‏·‏ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>ρ</mi><mi>R</mi></mrow><mi>L</mi></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">a=\\dfrac{\\rho R}{L}</annotation></semantics></math></span> ‏·‏ <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mo>∑</mo><mrow><mo fence=\"true\">(</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mi>L</mi><msub><mi>R</mi><mi>i</mi></msub></mfrac></mstyle><mo>+</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><msub><mi>d</mi><mi>i</mi></msub><mi>s</mi></mfrac></mstyle><mo fence=\"true\">)</mo></mrow></mrow><annotation encoding=\"application/x-tex\">d=\\sum\\left(\\dfrac{L}{R_i}+\\dfrac{d_i}{s}\\right)</annotation></semantics></math></span> ‏·‏ תפוקה = מינימום, ניצולת = בפועל חלקי הקצב של הצד.</div>\n"
    },
    "questions": [
     {
      "bankId": "24A-A-Q1",
      "recap": "לשעה לשנייה (÷3600) ואז $aL/R$: 0.0007",
      "recapHtml": "לשעה לשנייה (÷3600) ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">aL/R</annotation></semantics></math></span>: 0.0007"
     },
     {
      "bankId": "24A-B-Q6",
      "recap": "$a=\\rho R/L$ בחבילות לשנייה, ובדקו את יחידת התשובה",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mi>ρ</mi><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">a=\\rho R/L</annotation></semantics></math></span> בחבילות לשנייה, ובדקו את יחידת התשובה"
     },
     {
      "bankId": "25A-A-Q2",
      "recap": "שידור ועוד התפשטות על שלושת הקישורים, ואז הערך הקרוב ביותר",
      "recapHtml": "שידור ועוד התפשטות על שלושת הקישורים, ואז הערך הקרוב ביותר"
     },
     {
      "bankId": "25A-B-Q7",
      "recap": "סכום שידור והתפשטות בשרשרת: כ-3.8 ms",
      "recapHtml": "סכום שידור והתפשטות בשרשרת: כ-3.8 ms"
     },
     {
      "bankId": "25A-B-Q6",
      "recap": "קישור משותף: $R/k$, ניצולת = בפועל חלקי קצב הצד",
      "recapHtml": "קישור משותף: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi mathvariant=\"normal\">/</mi><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">R/k</annotation></semantics></math></span>, ניצולת = בפועל חלקי קצב הצד"
     },
     {
      "bankId": "26A-A-Q11",
      "recap": "ההתפשטות של הקו הארוך דומיננטית: כ-18 ms",
      "recapHtml": "ההתפשטות של הקו הארוך דומיננטית: כ-18 ms"
     }
    ]
   }
  ]
 },
 "ip": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔢",
    "title": "ביטים, בתים וכתובת עשרונית",
    "goal": "להמיר בית בין בינארי לעשרוני ולזהות כתובת IPv4 חוקית.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כתובת IPv4 היא מספר של <b>32 ביט</b>. כדי שיהיה קל לקרוא, מחלקים אותה לארבעה <b>בתים</b> של 8 ביט כל אחד וכותבים כל בית כמספר עשרוני, עם נקודות ביניהן: <code>192.168.10.77</code>.</p>\n<p>בית הוא 8 ביטים, ולכן ערכו בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> (<code>00000000</code>) ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">255</annotation></semantics></math></span> (<code>11111111</code>). כל ביט שווה לחזקת 2, מהימין לשמאל:</p>\n<table>\n<thead><tr><th>ביט</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>\n<tbody><tr><td>ערך</td><td><code>128</code></td><td><code>64</code></td><td><code>32</code></td><td><code>16</code></td><td><code>8</code></td><td><code>4</code></td><td><code>2</code></td><td><code>1</code></td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 <b>מתכון, עשרוני לבינארי:</b> עוברים על הערכים מ-128 ומטה. אם הערך נכנס בשארית, כותבים <code>1</code> ומחסרים אותו, אחרת כותבים <code>0</code>. <b>בינארי לעשרוני:</b> מחברים את הערכים של הביטים שדלוקים.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">200</annotation></semantics></math></span>. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>−</mo><mn>128</mn><mo>=</mo><mn>72</mn></mrow><annotation encoding=\"application/x-tex\">200-128=72</annotation></semantics></math></span> (ביט 1 דולק). ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">64</annotation></semantics></math></span> נכנס, השארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">32</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> לא נכנסים. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> נכנס, השארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>. התוצאה <code>11001000</code>. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn><mo>+</mo><mn>64</mn><mo>+</mo><mn>8</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">128+64+8=200</annotation></semantics></math></span>.</div>\n<p><b>בתים שכדאי להכיר בעל פה</b> (הם יחזרו בשיעור הבא כבתים של מסכה): <code>10000000</code> הוא 128, <code>11000000</code> הוא 192, <code>11100000</code> הוא 224, <code>11110000</code> הוא 240, <code>11111000</code> הוא 248, <code>11111100</code> הוא 252, <code>11111110</code> הוא 254 ו-<code>11111111</code> הוא 255.</p>\n<div class=\"lesson-trap\">⚠️ <b>בית לא עובר 255.</b> כתובת כמו <code>172.16.300.1</code> אינה כתובת IPv4 חוקית, כי 300 לא נכנס ב-8 ביטים.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מהי הצורה הבינארית (8 ביט) של המספר 200?",
      "options": [
       {
        "id": "a",
        "value": "`11001000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11001000</code>"
       },
       {
        "id": "b",
        "value": "`10011000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10011000</code>"
       },
       {
        "id": "c",
        "value": "`11000100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11000100</code>"
       },
       {
        "id": "d",
        "value": "`11100000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11100000</code>"
       }
      ],
      "correctId": "a",
      "recap": "מחסרים 128, 64, 32 ... לפי מה שנכנס",
      "explanation": "‏200 = 128 + 64 + 8, ולכן הביטים של 128, 64 ו-8 דולקים: `11001000`. הערך `10011000` הוא 152, הערך `11000100` הוא 196, והערך `11100000` הוא 224.",
      "questionHtml": "מהי הצורה הבינארית (8 ביט) של המספר 200?",
      "explanationHtml": "‏200 = 128 + 64 + 8, ולכן הביטים של 128, 64 ו-8 דולקים: <code class=\"tok\" dir=\"ltr\">11001000</code>. הערך <code class=\"tok\" dir=\"ltr\">10011000</code> הוא 152, הערך <code class=\"tok\" dir=\"ltr\">11000100</code> הוא 196, והערך <code class=\"tok\" dir=\"ltr\">11100000</code> הוא 224.",
      "recapHtml": "מחסרים 128, 64, 32 ... לפי מה שנכנס"
     },
     {
      "id": "C01-Q2",
      "question": "מהו הערך העשרוני של הבית `01001101`?",
      "options": [
       {
        "id": "a",
        "value": "77",
        "type": "text",
        "html": "77"
       },
       {
        "id": "b",
        "value": "178",
        "type": "text",
        "html": "178"
       },
       {
        "id": "c",
        "value": "141",
        "type": "text",
        "html": "141"
       },
       {
        "id": "d",
        "value": "89",
        "type": "text",
        "html": "89"
       }
      ],
      "correctId": "a",
      "recap": "מחברים את הערכים של הביטים הדולקים",
      "explanation": "הביטים הדולקים הם 64, 8, 4 ו-1: 64 + 8 + 4 + 1 = **77**. הערך 178 מתקבל אם קוראים את הבית הפוך (`10110010`), והערך 141 הוא `10001101`.",
      "questionHtml": "מהו הערך העשרוני של הבית <code class=\"tok\" dir=\"ltr\">01001101</code>?",
      "explanationHtml": "הביטים הדולקים הם 64, 8, 4 ו-1: 64 + 8 + 4 + 1 = <strong>77</strong>. הערך 178 מתקבל אם קוראים את הבית הפוך (<code class=\"tok\" dir=\"ltr\">10110010</code>), והערך 141 הוא <code class=\"tok\" dir=\"ltr\">10001101</code>.",
      "recapHtml": "מחברים את הערכים של הביטים הדולקים"
     },
     {
      "id": "C01-Q3",
      "question": "מהו הערך העשרוני של הבית `11111000`?",
      "options": [
       {
        "id": "a",
        "value": "252",
        "type": "text",
        "html": "252"
       },
       {
        "id": "b",
        "value": "240",
        "type": "text",
        "html": "240"
       },
       {
        "id": "c",
        "value": "248",
        "type": "text",
        "html": "248"
       },
       {
        "id": "d",
        "value": "224",
        "type": "text",
        "html": "224"
       }
      ],
      "correctId": "c",
      "recap": "חמישה ביטים דולקים בראש הבית הם 248",
      "explanation": "128 + 64 + 32 + 16 + 8 = **248**. הערך 252 הוא שישה ביטים דולקים, 240 הוא ארבעה, ו-224 הוא שלושה.",
      "questionHtml": "מהו הערך העשרוני של הבית <code class=\"tok\" dir=\"ltr\">11111000</code>?",
      "explanationHtml": "128 + 64 + 32 + 16 + 8 = <strong>248</strong>. הערך 252 הוא שישה ביטים דולקים, 240 הוא ארבעה, ו-224 הוא שלושה.",
      "recapHtml": "חמישה ביטים דולקים בראש הבית הם 248"
     },
     {
      "id": "C01-Q4",
      "question": "איזו מהכתובות הבאות אינה כתובת IPv4 חוקית?",
      "options": [
       {
        "id": "a",
        "value": "`10.0.0.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.0.255</code>"
       },
       {
        "id": "b",
        "value": "`1.1.1.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1.1.1.1</code>"
       },
       {
        "id": "c",
        "value": "`192.168.0.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.0.0</code>"
       },
       {
        "id": "d",
        "value": "`172.16.300.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">172.16.300.1</code>"
       }
      ],
      "correctId": "d",
      "recap": "כל בית בין 0 ל-255",
      "explanation": "הבית 300 גדול מ-255 ולא נכנס ב-8 ביטים, ולכן `172.16.300.1` אינה חוקית. כל שאר הכתובות מורכבות מבתים בין 0 ל-255.",
      "questionHtml": "איזו מהכתובות הבאות אינה כתובת IPv4 חוקית?",
      "explanationHtml": "הבית 300 גדול מ-255 ולא נכנס ב-8 ביטים, ולכן <code class=\"tok\" dir=\"ltr\">172.16.300.1</code> אינה חוקית. כל שאר הכתובות מורכבות מבתים בין 0 ל-255.",
      "recapHtml": "כל בית בין 0 ל-255"
     },
     {
      "id": "C01-Q5",
      "question": "מהי הצורה העשרונית של הכתובת `00001010.00000000.00000000.00000001`?",
      "options": [
       {
        "id": "a",
        "value": "`10.0.0.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.0.1</code>"
       },
       {
        "id": "b",
        "value": "`5.0.0.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">5.0.0.1</code>"
       },
       {
        "id": "c",
        "value": "`10.0.0.2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.0.2</code>"
       },
       {
        "id": "d",
        "value": "`20.0.0.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">20.0.0.1</code>"
       }
      ],
      "correctId": "a",
      "recap": "ממירים כל בית בנפרד",
      "explanation": "הבית הראשון `00001010` הוא 8 + 2 = 10. שלושת הבתים האחרים הם 0, 0 ו-1. התוצאה `10.0.0.1`. הערך 5 היה יוצא מ-`00000101`, והערך 20 מ-`00010100`.",
      "questionHtml": "מהי הצורה העשרונית של הכתובת <code class=\"tok\" dir=\"ltr\">00001010.00000000.00000000.00000001</code>?",
      "explanationHtml": "הבית הראשון <code class=\"tok\" dir=\"ltr\">00001010</code> הוא 8 + 2 = 10. שלושת הבתים האחרים הם 0, 0 ו-1. התוצאה <code class=\"tok\" dir=\"ltr\">10.0.0.1</code>. הערך 5 היה יוצא מ-<code class=\"tok\" dir=\"ltr\">00000101</code>, והערך 20 מ-<code class=\"tok\" dir=\"ltr\">00010100</code>.",
      "recapHtml": "ממירים כל בית בנפרד"
     },
     {
      "id": "C01-Q6",
      "question": "מהי הצורה הבינארית (8 ביט) של המספר 168?",
      "options": [
       {
        "id": "a",
        "value": "`10100100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10100100</code>"
       },
       {
        "id": "b",
        "value": "`10101000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10101000</code>"
       },
       {
        "id": "c",
        "value": "`10010100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10010100</code>"
       },
       {
        "id": "d",
        "value": "`11101000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11101000</code>"
       }
      ],
      "correctId": "b",
      "recap": "168 = 128 + 32 + 8",
      "explanation": "‏168 = 128 + 32 + 8, ולכן `10101000`. הערך `10100100` הוא 164, הערך `10010100` הוא 148, והערך `11101000` הוא 232.",
      "questionHtml": "מהי הצורה הבינארית (8 ביט) של המספר 168?",
      "explanationHtml": "‏168 = 128 + 32 + 8, ולכן <code class=\"tok\" dir=\"ltr\">10101000</code>. הערך <code class=\"tok\" dir=\"ltr\">10100100</code> הוא 164, הערך <code class=\"tok\" dir=\"ltr\">10010100</code> הוא 148, והערך <code class=\"tok\" dir=\"ltr\">11101000</code> הוא 232.",
      "recapHtml": "168 = 128 + 32 + 8"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🎭",
    "title": "קידומת, מסכה וגודל בלוק",
    "goal": "מאורך קידומת /p לקבל את המסכה, את מספר הכתובות ואת מספר התחנות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>כתובת מחולקת לשני חלקים: <b>קידומת</b> (prefix) שמזהה את הרשת, ו-<b>ביטי מארח</b> (host) שמזהים תחנה בתוך הרשת. הכתיב <code>/p</code> אומר ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> הביטים הראשונים הם הקידומת, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">32-p</annotation></semantics></math></span> הביטים האחרונים הם המארח.</p>\n<div class=\"lesson-rule\">🔑 <b>מסכה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> ביטים <code>1</code> ואחריהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">32-p</annotation></semantics></math></span> ביטים <code>0</code>. ‏<code>/24</code> הוא <code>255.255.255.0</code>, ו-<code>/16</code> הוא <code>255.255.0.0</code>. כשהקידומת נגמרת באמצע בית, הבית הזה הוא אחד מהערכים 128, 192, 224, 240, 248, 252, 254 (לפי כמה ביטים דולקים בו).</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ‏<code>/20</code>. שני בתים מלאים (16 ביט) ועוד 4 ביטים דולקים בבית השלישי: <code>11110000</code> הוא 240. המסכה <code>255.255.240.0</code>.</div>\n<div class=\"lesson-formula\">מספר כתובות בבלוק: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{32-p}</annotation></semantics></math></span> &nbsp;&nbsp; תחנות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow></msup><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^{32-p}-2</annotation></semantics></math></span></div>\n<p>שתי כתובות בכל בלוק שמורות: הראשונה היא <b>כתובת הרשת</b> (כל ביטי המארח 0) והאחרונה היא <b>broadcast</b> (כל ביטי המארח 1). לכן <code>/24</code> כולל 256 כתובות, ו-254 מהן לתחנות.</p>\n<p><b>גודל הבלוק בבית הגבול.</b> הבית שבו הקידומת נגמרת הוא בית הגבול, וגודל הבלוק בו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mo stretchy=\"false\">(</mo><mi>p</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>8</mn><mo stretchy=\"false\">)</mo></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{8-(p \\bmod 8)}</annotation></semantics></math></span>. עבור <code>/22</code>: הבית השלישי, וגודל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mn>6</mn></mrow></msup><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">2^{8-6}=4</annotation></semantics></math></span>. הבלוקים בבית הזה מתחילים ב-0, 4, 8, 12 וכן הלאה.</p>\n<div class=\"lesson-trap\">⚠️ <b>מספר כתובות מול מספר תחנות.</b> שאלה שמבקשת \"מספר מרבי של כתובות ברשת\" מצפה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{32-p}</annotation></semantics></math></span> (למשל 256 עבור <code>/24</code>), ושאלה על תחנות מורידה שתיים.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "מהי המסכה של הקידומת `/26`?",
      "options": [
       {
        "id": "a",
        "value": "`255.255.255.128`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.255.128</code>"
       },
       {
        "id": "b",
        "value": "`255.255.255.192`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.255.192</code>"
       },
       {
        "id": "c",
        "value": "`255.255.255.224`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.255.224</code>"
       },
       {
        "id": "d",
        "value": "`255.255.192.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.192.0</code>"
       }
      ],
      "correctId": "b",
      "recap": "ביטים דולקים בבית הגבול: 26 − 24 = 2, כלומר 192",
      "explanation": "שלושה בתים מלאים הם 24 ביטים, ו-2 ביטים נוספים בבית הרביעי: `11000000` = 192. המסכה `255.255.255.192`. הערך 128 הוא `/25`, הערך 224 הוא `/27`, והמסכה `255.255.192.0` היא `/18`.",
      "questionHtml": "מהי המסכה של הקידומת <code class=\"tok\" dir=\"ltr\">/26</code>?",
      "explanationHtml": "שלושה בתים מלאים הם 24 ביטים, ו-2 ביטים נוספים בבית הרביעי: <code class=\"tok\" dir=\"ltr\">11000000</code> = 192. המסכה <code class=\"tok\" dir=\"ltr\">255.255.255.192</code>. הערך 128 הוא <code class=\"tok\" dir=\"ltr\">/25</code>, הערך 224 הוא <code class=\"tok\" dir=\"ltr\">/27</code>, והמסכה <code class=\"tok\" dir=\"ltr\">255.255.192.0</code> היא <code class=\"tok\" dir=\"ltr\">/18</code>.",
      "recapHtml": "ביטים דולקים בבית הגבול: 26 − 24 = 2, כלומר 192"
     },
     {
      "id": "C02-Q2",
      "question": "מהי המסכה של הקידומת `/20`?",
      "options": [
       {
        "id": "a",
        "value": "`255.255.240.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.240.0</code>"
       },
       {
        "id": "b",
        "value": "`255.255.248.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.248.0</code>"
       },
       {
        "id": "c",
        "value": "`255.240.0.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.240.0.0</code>"
       },
       {
        "id": "d",
        "value": "`255.255.255.240`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">255.255.255.240</code>"
       }
      ],
      "correctId": "a",
      "recap": "20 = 16 + 4: ארבעה ביטים דולקים בבית השלישי",
      "explanation": "שני בתים מלאים (16 ביט) ועוד 4 ביטים בבית השלישי: `11110000` = 240. המסכה `255.255.240.0`. המסכה `255.255.248.0` היא `/21`, המסכה `255.240.0.0` היא `/12`, והמסכה `255.255.255.240` היא `/28`.",
      "questionHtml": "מהי המסכה של הקידומת <code class=\"tok\" dir=\"ltr\">/20</code>?",
      "explanationHtml": "שני בתים מלאים (16 ביט) ועוד 4 ביטים בבית השלישי: <code class=\"tok\" dir=\"ltr\">11110000</code> = 240. המסכה <code class=\"tok\" dir=\"ltr\">255.255.240.0</code>. המסכה <code class=\"tok\" dir=\"ltr\">255.255.248.0</code> היא <code class=\"tok\" dir=\"ltr\">/21</code>, המסכה <code class=\"tok\" dir=\"ltr\">255.240.0.0</code> היא <code class=\"tok\" dir=\"ltr\">/12</code>, והמסכה <code class=\"tok\" dir=\"ltr\">255.255.255.240</code> היא <code class=\"tok\" dir=\"ltr\">/28</code>.",
      "recapHtml": "20 = 16 + 4: ארבעה ביטים דולקים בבית השלישי"
     },
     {
      "id": "C02-Q3",
      "question": "מהו אורך הקידומת של המסכה `255.255.255.248`?",
      "options": [
       {
        "id": "a",
        "value": "`/27`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/27</code>"
       },
       {
        "id": "b",
        "value": "`/28`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/28</code>"
       },
       {
        "id": "c",
        "value": "`/30`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/30</code>"
       },
       {
        "id": "d",
        "value": "`/29`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/29</code>"
       }
      ],
      "correctId": "d",
      "recap": "סופרים ביטים דולקים: 24 + (248 = חמישה ביטים)",
      "explanation": "שלושה בתים של 255 הם 24 ביט. הבית האחרון 248 = `11111000`, כלומר 5 ביטים דולקים. סך הכול 24 + 5 = **29**.",
      "questionHtml": "מהו אורך הקידומת של המסכה <code class=\"tok\" dir=\"ltr\">255.255.255.248</code>?",
      "explanationHtml": "שלושה בתים של 255 הם 24 ביט. הבית האחרון 248 = <code class=\"tok\" dir=\"ltr\">11111000</code>, כלומר 5 ביטים דולקים. סך הכול 24 + 5 = <strong>29</strong>.",
      "recapHtml": "סופרים ביטים דולקים: 24 + (248 = חמישה ביטים)"
     },
     {
      "id": "C02-Q4",
      "question": "כמה כתובות (כולל כתובת הרשת וה-broadcast) יש בבלוק `/27`?",
      "options": [
       {
        "id": "a",
        "value": "32",
        "type": "text",
        "html": "32"
       },
       {
        "id": "b",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "c",
        "value": "27",
        "type": "text",
        "html": "27"
       },
       {
        "id": "d",
        "value": "64",
        "type": "text",
        "html": "64"
       }
      ],
      "correctId": "a",
      "recap": "2 בחזקת (32 − p)",
      "explanation": "נשארים 32 − 27 = 5 ביטי מארח, ו-2 בחזקת 5 = **32** כתובות. הערך 30 הוא מספר התחנות (בלי כתובת הרשת וה-broadcast), והערך 64 הוא בלוק `/26`.",
      "questionHtml": "כמה כתובות (כולל כתובת הרשת וה-broadcast) יש בבלוק <code class=\"tok\" dir=\"ltr\">/27</code>?",
      "explanationHtml": "נשארים 32 − 27 = 5 ביטי מארח, ו-2 בחזקת 5 = <strong>32</strong> כתובות. הערך 30 הוא מספר התחנות (בלי כתובת הרשת וה-broadcast), והערך 64 הוא בלוק <code class=\"tok\" dir=\"ltr\">/26</code>.",
      "recapHtml": "2 בחזקת (32 − p)"
     },
     {
      "id": "C02-Q5",
      "question": "כמה תחנות אפשר לחבר לרשת `/28`?",
      "options": [
       {
        "id": "a",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "b",
        "value": "15",
        "type": "text",
        "html": "15"
       },
       {
        "id": "c",
        "value": "14",
        "type": "text",
        "html": "14"
       },
       {
        "id": "d",
        "value": "28",
        "type": "text",
        "html": "28"
       }
      ],
      "correctId": "c",
      "recap": "תחנות = 2 בחזקת (32 − p) פחות 2",
      "explanation": "ארבעה ביטי מארח נותנים 2 בחזקת 4 = 16 כתובות. מורידים את כתובת הרשת ואת ה-broadcast: 16 − 2 = **14**. הערך 16 הוא כל הכתובות בבלוק.",
      "questionHtml": "כמה תחנות אפשר לחבר לרשת <code class=\"tok\" dir=\"ltr\">/28</code>?",
      "explanationHtml": "ארבעה ביטי מארח נותנים 2 בחזקת 4 = 16 כתובות. מורידים את כתובת הרשת ואת ה-broadcast: 16 − 2 = <strong>14</strong>. הערך 16 הוא כל הכתובות בבלוק.",
      "recapHtml": "תחנות = 2 בחזקת (32 − p) פחות 2"
     },
     {
      "id": "C02-Q6",
      "question": "מהו גודל הבלוק בבית השלישי של קידומת `/22`?",
      "options": [
       {
        "id": "a",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "d",
        "value": "1024",
        "type": "text",
        "html": "1024"
       }
      ],
      "correctId": "a",
      "recap": "גודל הבלוק בבית הגבול = 2 בחזקת (8 − (p mod 8))",
      "explanation": "הקידומת נגמרת בבית השלישי אחרי 6 ביטים משלו (22 = 16 + 6), ונשארים 2 ביטים: 2 בחזקת 2 = **4**. הבלוקים בבית זה הם 0 עד 3, 4 עד 7 וכן הלאה. הערך 1024 הוא מספר הכתובות הכולל בבלוק `/22`, לא הגודל בבית.",
      "questionHtml": "מהו גודל הבלוק בבית השלישי של קידומת <code class=\"tok\" dir=\"ltr\">/22</code>?",
      "explanationHtml": "הקידומת נגמרת בבית השלישי אחרי 6 ביטים משלו (22 = 16 + 6), ונשארים 2 ביטים: 2 בחזקת 2 = <strong>4</strong>. הבלוקים בבית זה הם 0 עד 3, 4 עד 7 וכן הלאה. הערך 1024 הוא מספר הכתובות הכולל בבלוק <code class=\"tok\" dir=\"ltr\">/22</code>, לא הגודל בבית.",
      "recapHtml": "גודל הבלוק בבית הגבול = 2 בחזקת (8 − (p mod 8))"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "📍",
    "title": "כתובת רשת, broadcast וטווח",
    "goal": "לכתובת/p נתונה, למצוא את כתובת הרשת, את כתובת ה-broadcast ולהכריע אם כתובת אחרת שייכת לבלוק.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>נתונה כתובת עם קידומת, למשל <code>200.107.16.17/18</code>. היא שייכת לבלוק אחד ויחיד, ואפשר למצוא את גבולותיו בשלושה צעדים.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון: גבולות הבלוק של כתובת/p</b>\n<ol>\n<li><b>בית הגבול:</b> הבית שבו הקידומת נגמרת באמצע (בית מספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mi>p</mi><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo stretchy=\"false\">⌋</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor p/8\\rfloor+1</annotation></semantics></math></span>). הבתים שלפניו נשארים כמו שהם.</li>\n<li><b>גודל הבלוק</b> בבית הגבול: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mo stretchy=\"false\">(</mo><mi>p</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>8</mn><mo stretchy=\"false\">)</mo></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{8-(p \\bmod 8)}</annotation></semantics></math></span>.</li>\n<li><b>מעגלים את הערך בבית הגבול כלפי מטה</b> לכפולה של גודל הבלוק. זו תחילת הבלוק. כתובת הרשת: אפסים בבתים שאחרי בית הגבול. ה-broadcast: תחילת הבלוק + גודל − 1 בבית הגבול, ו-<code>255</code> בבתים שאחריו.</li>\n</ol></div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>200.107.16.17/18</code>. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>18</mn><mo>=</mo><mn>16</mn><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">18 = 16 + 2</annotation></semantics></math></span>, ולכן בית הגבול הוא השלישי, וגודל הבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">2^{8-2}=64</annotation></semantics></math></span>. הבלוקים בבית השלישי: 0 עד 63, 64 עד 127 וכו'. הערך 16 נופל בבלוק 0 עד 63. כתובת הרשת <code>200.107.0.0</code>, וה-broadcast <code>200.107.63.255</code>.</div>\n<p>אפשר לבדוק את הדוגמה במחשבון, ולשנות את הכתובת והקידומת כדי להתאמן:</p>\n<div class=\"calc-fig\" data-calc='{\"kind\": \"subnet\", \"cidr\": \"200.107.16.17/18\"}'></div>\n<p><b>כשהקידומת נגמרת בדיוק בסוף בית</b> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> כפולה של 8, למשל <code>/16</code>), אין בית גבול: כל הבתים שבקידומת נשארים, וכל השאר מתאפס (רשת) או הופך ל-255 (broadcast).</p>\n<p><b>האם כתובת שייכת לבלוק?</b> בודקים שהיא בין כתובת הרשת ל-broadcast. בבלוק <code>/26</code> שמתחיל ב-<code>192.168.1.128</code> הכתובות הן <code>192.168.1.128</code> עד <code>192.168.1.191</code>.</p>\n<div class=\"lesson-trap\">⚠️ <b>הכתובת הנתונה אינה בהכרח כתובת הרשת.</b> ב-<code>200.107.16.17/18</code> הבית 16 אינו גבול של בלוק בגודל 64, ולכן <code>200.107.16.0</code> אינה כתובת הרשת.</div>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "מהי כתובת הרשת של `192.168.10.77/26`?",
      "options": [
       {
        "id": "a",
        "value": "`192.168.10.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.0</code>"
       },
       {
        "id": "b",
        "value": "`192.168.10.64`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.64</code>"
       },
       {
        "id": "c",
        "value": "`192.168.10.77`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.77</code>"
       },
       {
        "id": "d",
        "value": "`192.168.10.76`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.76</code>"
       }
      ],
      "correctId": "b",
      "recap": "גודל בלוק 64: 77 מעוגל כלפי מטה לכפולה של 64",
      "explanation": "הקידומת `/26` נגמרת בבית הרביעי וגודל הבלוק 64. הבלוקים: 0 עד 63, 64 עד 127 וכו'. הערך 77 בבלוק 64 עד 127, ולכן כתובת הרשת `192.168.10.64`. הכתובת `192.168.10.0` היא תחילת בלוק `/24`, לא `/26`.",
      "questionHtml": "מהי כתובת הרשת של <code class=\"tok\" dir=\"ltr\">192.168.10.77/26</code>?",
      "explanationHtml": "הקידומת <code class=\"tok\" dir=\"ltr\">/26</code> נגמרת בבית הרביעי וגודל הבלוק 64. הבלוקים: 0 עד 63, 64 עד 127 וכו'. הערך 77 בבלוק 64 עד 127, ולכן כתובת הרשת <code class=\"tok\" dir=\"ltr\">192.168.10.64</code>. הכתובת <code class=\"tok\" dir=\"ltr\">192.168.10.0</code> היא תחילת בלוק <code class=\"tok\" dir=\"ltr\">/24</code>, לא <code class=\"tok\" dir=\"ltr\">/26</code>.",
      "recapHtml": "גודל בלוק 64: 77 מעוגל כלפי מטה לכפולה של 64"
     },
     {
      "id": "C03-Q2",
      "question": "מהי כתובת ה-broadcast של `192.168.10.77/26`?",
      "options": [
       {
        "id": "a",
        "value": "`192.168.10.127`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.127</code>"
       },
       {
        "id": "b",
        "value": "`192.168.10.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.255</code>"
       },
       {
        "id": "c",
        "value": "`192.168.10.128`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.128</code>"
       },
       {
        "id": "d",
        "value": "`192.168.10.63`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.10.63</code>"
       }
      ],
      "correctId": "a",
      "recap": "תחילת הבלוק + גודל − 1",
      "explanation": "הבלוק מתחיל ב-64 וגודלו 64, ולכן נגמר ב-64 + 64 − 1 = **127**. הערך 255 הוא ה-broadcast של `/24` שלם, הערך 128 כבר שייך לבלוק הבא, והערך 63 הוא סוף הבלוק שלפניו.",
      "questionHtml": "מהי כתובת ה-broadcast של <code class=\"tok\" dir=\"ltr\">192.168.10.77/26</code>?",
      "explanationHtml": "הבלוק מתחיל ב-64 וגודלו 64, ולכן נגמר ב-64 + 64 − 1 = <strong>127</strong>. הערך 255 הוא ה-broadcast של <code class=\"tok\" dir=\"ltr\">/24</code> שלם, הערך 128 כבר שייך לבלוק הבא, והערך 63 הוא סוף הבלוק שלפניו.",
      "recapHtml": "תחילת הבלוק + גודל − 1"
     },
     {
      "id": "C03-Q3",
      "question": "מהי כתובת הרשת של `10.5.200.9/20`?",
      "options": [
       {
        "id": "a",
        "value": "`10.5.200.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.5.200.0</code>"
       },
       {
        "id": "b",
        "value": "`10.5.0.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.5.0.0</code>"
       },
       {
        "id": "c",
        "value": "`10.5.192.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.5.192.0</code>"
       },
       {
        "id": "d",
        "value": "`10.5.208.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.5.208.0</code>"
       }
      ],
      "correctId": "c",
      "recap": "בית שלישי, גודל בלוק 16; 200 מעוגל למטה ל-192",
      "explanation": "‏$20 = 16 + 4$, בית הגבול הוא השלישי וגודל הבלוק $2^{4}=16$. הכפולות של 16: ..., 176, 192, 208. הערך 200 בין 192 ל-207, ולכן הרשת `10.5.192.0` (והבית הרביעי מתאפס). הכתובת `10.5.208.0` היא הבלוק הבא.",
      "questionHtml": "מהי כתובת הרשת של <code class=\"tok\" dir=\"ltr\">10.5.200.9/20</code>?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mo>=</mo><mn>16</mn><mo>+</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">20 = 16 + 4</annotation></semantics></math></span>, בית הגבול הוא השלישי וגודל הבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">2^{4}=16</annotation></semantics></math></span>. הכפולות של 16: ..., 176, 192, 208. הערך 200 בין 192 ל-207, ולכן הרשת <code class=\"tok\" dir=\"ltr\">10.5.192.0</code> (והבית הרביעי מתאפס). הכתובת <code class=\"tok\" dir=\"ltr\">10.5.208.0</code> היא הבלוק הבא.",
      "recapHtml": "בית שלישי, גודל בלוק 16; 200 מעוגל למטה ל-192"
     },
     {
      "id": "C03-Q4",
      "question": "מהי כתובת הרשת של `130.50.77.9/16`?",
      "options": [
       {
        "id": "a",
        "value": "`130.50.77.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">130.50.77.0</code>"
       },
       {
        "id": "b",
        "value": "`130.0.0.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">130.0.0.0</code>"
       },
       {
        "id": "c",
        "value": "`130.50.64.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">130.50.64.0</code>"
       },
       {
        "id": "d",
        "value": "`130.50.0.0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">130.50.0.0</code>"
       }
      ],
      "correctId": "d",
      "recap": "p כפולה של 8: משאירים את הבתים של הקידומת ומאפסים את השאר",
      "explanation": "`/16` הוא שני בתים מלאים. אין בית גבול: `130.50` נשאר, ושני הבתים האחרונים מתאפסים: `130.50.0.0`. התשובה `130.0.0.0` נכונה ל-`/8`, ו-`130.50.77.0` נכונה ל-`/24`.",
      "questionHtml": "מהי כתובת הרשת של <code class=\"tok\" dir=\"ltr\">130.50.77.9/16</code>?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">/16</code> הוא שני בתים מלאים. אין בית גבול: <code class=\"tok\" dir=\"ltr\">130.50</code> נשאר, ושני הבתים האחרונים מתאפסים: <code class=\"tok\" dir=\"ltr\">130.50.0.0</code>. התשובה <code class=\"tok\" dir=\"ltr\">130.0.0.0</code> נכונה ל-<code class=\"tok\" dir=\"ltr\">/8</code>, ו-<code class=\"tok\" dir=\"ltr\">130.50.77.0</code> נכונה ל-<code class=\"tok\" dir=\"ltr\">/24</code>.",
      "recapHtml": "p כפולה של 8: משאירים את הבתים של הקידומת ומאפסים את השאר"
     },
     {
      "id": "C03-Q5",
      "question": "מהי הכתובת האחרונה (broadcast) בבלוק של `172.16.45.100/21`?",
      "options": [
       {
        "id": "a",
        "value": "`172.16.47.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">172.16.47.255</code>"
       },
       {
        "id": "b",
        "value": "`172.16.45.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">172.16.45.255</code>"
       },
       {
        "id": "c",
        "value": "`172.16.53.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">172.16.53.255</code>"
       },
       {
        "id": "d",
        "value": "`172.16.40.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">172.16.40.255</code>"
       }
      ],
      "correctId": "a",
      "recap": "גודל בלוק 8 בבית השלישי; 255 בבית הרביעי",
      "explanation": "‏$21 = 16 + 5$, בית הגבול השלישי, גודל הבלוק $2^{3}=8$. הערך 45 נופל בבלוק 40 עד 47. הכתובת האחרונה היא `172.16.47.255` (בבית השלישי 47 ובבית הרביעי 255). הכתובת `172.16.45.255` מתקבלת כשמשאירים את 45 בלי עיגול לגבול הבלוק.",
      "questionHtml": "מהי הכתובת האחרונה (broadcast) בבלוק של <code class=\"tok\" dir=\"ltr\">172.16.45.100/21</code>?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>21</mn><mo>=</mo><mn>16</mn><mo>+</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">21 = 16 + 5</annotation></semantics></math></span>, בית הגבול השלישי, גודל הבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2^{3}=8</annotation></semantics></math></span>. הערך 45 נופל בבלוק 40 עד 47. הכתובת האחרונה היא <code class=\"tok\" dir=\"ltr\">172.16.47.255</code> (בבית השלישי 47 ובבית הרביעי 255). הכתובת <code class=\"tok\" dir=\"ltr\">172.16.45.255</code> מתקבלת כשמשאירים את 45 בלי עיגול לגבול הבלוק.",
      "recapHtml": "גודל בלוק 8 בבית השלישי; 255 בבית הרביעי"
     },
     {
      "id": "C03-Q6",
      "question": "איזו מהכתובות שייכת לרשת `192.168.1.128/26`?",
      "options": [
       {
        "id": "a",
        "value": "`192.168.1.127`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.1.127</code>"
       },
       {
        "id": "b",
        "value": "`192.168.1.192`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.1.192</code>"
       },
       {
        "id": "c",
        "value": "`192.168.1.150`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.1.150</code>"
       },
       {
        "id": "d",
        "value": "`192.168.1.64`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.1.64</code>"
       }
      ],
      "correctId": "c",
      "recap": "הבלוק 128 עד 191 בבית הרביעי",
      "explanation": "בלוק `/26` מתחיל ב-128 וגודלו 64, ולכן הוא מכסה את `192.168.1.128` עד `192.168.1.191`. הכתובת `.150` בפנים. הכתובת `.127` היא סוף הבלוק שלפניו, והכתובת `.192` תחילת הבלוק שאחריו.",
      "questionHtml": "איזו מהכתובות שייכת לרשת <code class=\"tok\" dir=\"ltr\">192.168.1.128/26</code>?",
      "explanationHtml": "בלוק <code class=\"tok\" dir=\"ltr\">/26</code> מתחיל ב-128 וגודלו 64, ולכן הוא מכסה את <code class=\"tok\" dir=\"ltr\">192.168.1.128</code> עד <code class=\"tok\" dir=\"ltr\">192.168.1.191</code>. הכתובת <code class=\"tok\" dir=\"ltr\">.150</code> בפנים. הכתובת <code class=\"tok\" dir=\"ltr\">.127</code> היא סוף הבלוק שלפניו, והכתובת <code class=\"tok\" dir=\"ltr\">.192</code> תחילת הבלוק שאחריו.",
      "recapHtml": "הבלוק 128 עד 191 בבית הרביעי"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "✂️",
    "title": "חלוקה לתת-רשתות",
    "goal": "לחלק בלוק לתת-רשתות שוות, ולבחור את הקידומת הקצרה ביותר שמספיקה למספר תחנות נתון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>חלוקה לתת-רשתות (subnetting)</b> פירושה \"לשאול\" ביטים מחלק המארח ולהפוך אותם לחלק מהקידומת. כל ביט שנשאל מכפיל את מספר תת-הרשתות ומחצה את גודל כל אחת.</p>\n<div class=\"lesson-rule\">🔑 <b>חלוקה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^k</annotation></semantics></math></span> תת-רשתות שוות:</b> הקידומת החדשה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi><mo>+</mo><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">p+k</annotation></semantics></math></span>. גודל כל תת-רשת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>32</mn><mo>−</mo><mo stretchy=\"false\">(</mo><mi>p</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\">)</mo></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{32-(p+k)}</annotation></semantics></math></span>. הן עוקבות זו לזו, והראשונה מתחילה בתחילת הבלוק המקורי.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> חולקים את <code>192.168.5.0/24</code> לארבע תת-רשתות. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>=</mo><msup><mn>2</mn><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">4 = 2^2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">k=2</annotation></semantics></math></span> והקידומת החדשה <code>/26</code>. גודל כל אחת 64: <code>192.168.5.0/26</code>, ‏<code>192.168.5.64/26</code>, ‏<code>192.168.5.128/26</code>, ‏<code>192.168.5.192/26</code>.</div>\n<div class=\"lesson-rule\">🔑 <b>כמה תחנות צריך? הקידומת הקצרה ביותר:</b> מחפשים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">h</annotation></semantics></math></span> הקטן ביותר כך ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>h</mi></msup><mo>−</mo><mn>2</mn><mo>≥</mo><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2^{h}-2 \\ge n</annotation></semantics></math></span>, והקידומת היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mo stretchy=\"false\">(</mo><mn>32</mn><mo>−</mo><mi>h</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">/(32-h)</annotation></semantics></math></span>.</div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> ל-50 תחנות. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">h=5</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>5</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">2^5-2=30</annotation></semantics></math></span>, מעט מדי. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>h</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">h=6</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>62</mn><mo>≥</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">62 \\ge 50</annotation></semantics></math></span>. הקידומת <code>/26</code>.</div>\n<p><b>כמה בלוקים קטנים נכנסים בגדול?</b> אם הקידומת הקטנה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> והארוכה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">b</annotation></semantics></math></span>, נכנסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>b</mi><mo>−</mo><mi>a</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{b-a}</annotation></semantics></math></span> בלוקים. בתוך <code>/16</code> נכנסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>20</mn><mo>−</mo><mn>16</mn></mrow></msup><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">2^{20-16}=16</annotation></semantics></math></span> בלוקים של <code>/20</code>.</p>\n<div class=\"lesson-trap\">⚠️ <b>שתי הכתובות השמורות.</b> בלוק של 32 כתובות (<code>/27</code>) נותן רק 30 תחנות. מי שדורש בדיוק 30 תחנות מקבל <code>/27</code>, ומי שדורש 31 צריך <code>/26</code>.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "בחברה 30 תחנות שצריכות כתובת באותה רשת. מהי הקידומת הארוכה ביותר שעדיין מספיקה?",
      "options": [
       {
        "id": "a",
        "value": "`/26`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/26</code>"
       },
       {
        "id": "b",
        "value": "`/28`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/28</code>"
       },
       {
        "id": "c",
        "value": "`/27`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/27</code>"
       },
       {
        "id": "d",
        "value": "`/25`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/25</code>"
       }
      ],
      "correctId": "c",
      "recap": "2 בחזקת h פחות 2 גדול או שווה למספר התחנות",
      "explanation": "עם 5 ביטי מארח יש 32 כתובות, מהן 30 לתחנות. בדיוק מספיק, ולכן `/27` (27 = 32 − 5). הקידומת `/28` נותנת רק 14 תחנות. `/26` ו-`/25` מספיקות אבל בזבזניות.",
      "questionHtml": "בחברה 30 תחנות שצריכות כתובת באותה רשת. מהי הקידומת הארוכה ביותר שעדיין מספיקה?",
      "explanationHtml": "עם 5 ביטי מארח יש 32 כתובות, מהן 30 לתחנות. בדיוק מספיק, ולכן <code class=\"tok\" dir=\"ltr\">/27</code> (27 = 32 − 5). הקידומת <code class=\"tok\" dir=\"ltr\">/28</code> נותנת רק 14 תחנות. <code class=\"tok\" dir=\"ltr\">/26</code> ו-<code class=\"tok\" dir=\"ltr\">/25</code> מספיקות אבל בזבזניות.",
      "recapHtml": "2 בחזקת h פחות 2 גדול או שווה למספר התחנות"
     },
     {
      "id": "C04-Q2",
      "question": "נדרשות 100 תחנות ברשת אחת. מהי הקידומת הארוכה ביותר שמספיקה?",
      "options": [
       {
        "id": "a",
        "value": "`/26`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/26</code>"
       },
       {
        "id": "b",
        "value": "`/24`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/24</code>"
       },
       {
        "id": "c",
        "value": "`/27`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/27</code>"
       },
       {
        "id": "d",
        "value": "`/25`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/25</code>"
       }
      ],
      "correctId": "d",
      "recap": "100 תחנות: 7 ביטי מארח (126 תחנות)",
      "explanation": "‏$2^{6}-2=62$ לא מספיק, ו-$2^{7}-2=126 \\ge 100$. שבעה ביטי מארח הם קידומת 32 − 7 = **25**. הקידומת `/26` נותנת 62 בלבד, והקידומת `/24` מספיקה אבל בזבזנית.",
      "questionHtml": "נדרשות 100 תחנות ברשת אחת. מהי הקידומת הארוכה ביותר שמספיקה?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>6</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>62</mn></mrow><annotation encoding=\"application/x-tex\">2^{6}-2=62</annotation></semantics></math></span> לא מספיק, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>7</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>126</mn><mo>≥</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">2^{7}-2=126 \\ge 100</annotation></semantics></math></span>. שבעה ביטי מארח הם קידומת 32 − 7 = <strong>25</strong>. הקידומת <code class=\"tok\" dir=\"ltr\">/26</code> נותנת 62 בלבד, והקידומת <code class=\"tok\" dir=\"ltr\">/24</code> מספיקה אבל בזבזנית.",
      "recapHtml": "100 תחנות: 7 ביטי מארח (126 תחנות)"
     },
     {
      "id": "C04-Q3",
      "question": "מחלקים את `192.168.5.0/24` לארבע תת-רשתות שוות. מהי הקידומת של כל אחת?",
      "options": [
       {
        "id": "a",
        "value": "`/25`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/25</code>"
       },
       {
        "id": "b",
        "value": "`/27`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/27</code>"
       },
       {
        "id": "c",
        "value": "`/28`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/28</code>"
       },
       {
        "id": "d",
        "value": "`/26`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">/26</code>"
       }
      ],
      "correctId": "d",
      "recap": "4 תת-רשתות = 2 ביטים שנשאלים",
      "explanation": "‏4 = 2 בחזקת 2, ולכן שני ביטים נשאלים: 24 + 2 = **26**. הקידומת `/25` נותנת שתי תת-רשתות, `/27` נותנת שמונה.",
      "questionHtml": "מחלקים את <code class=\"tok\" dir=\"ltr\">192.168.5.0/24</code> לארבע תת-רשתות שוות. מהי הקידומת של כל אחת?",
      "explanationHtml": "‏4 = 2 בחזקת 2, ולכן שני ביטים נשאלים: 24 + 2 = <strong>26</strong>. הקידומת <code class=\"tok\" dir=\"ltr\">/25</code> נותנת שתי תת-רשתות, <code class=\"tok\" dir=\"ltr\">/27</code> נותנת שמונה.",
      "recapHtml": "4 תת-רשתות = 2 ביטים שנשאלים"
     },
     {
      "id": "C04-Q4",
      "question": "מחלקים את `192.168.5.0/24` לארבע תת-רשתות שוות. מהי כתובת הרשת של השלישית (לפי הסדר מהכתובת הנמוכה)?",
      "options": [
       {
        "id": "a",
        "value": "`192.168.5.128`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.5.128</code>"
       },
       {
        "id": "b",
        "value": "`192.168.5.96`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.5.96</code>"
       },
       {
        "id": "c",
        "value": "`192.168.5.64`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.5.64</code>"
       },
       {
        "id": "d",
        "value": "`192.168.5.192`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">192.168.5.192</code>"
       }
      ],
      "correctId": "a",
      "recap": "תת-רשתות /26: 0, 64, 128, 192",
      "explanation": "כל תת-רשת בגודל 64, והן מתחילות ב-0, 64, 128 ו-192. השלישית מתחילה ב-**128**. הערך 64 הוא השנייה והערך 192 הרביעית. הערך 96 אינו גבול של בלוק בגודל 64.",
      "questionHtml": "מחלקים את <code class=\"tok\" dir=\"ltr\">192.168.5.0/24</code> לארבע תת-רשתות שוות. מהי כתובת הרשת של השלישית (לפי הסדר מהכתובת הנמוכה)?",
      "explanationHtml": "כל תת-רשת בגודל 64, והן מתחילות ב-0, 64, 128 ו-192. השלישית מתחילה ב-<strong>128</strong>. הערך 64 הוא השנייה והערך 192 הרביעית. הערך 96 אינו גבול של בלוק בגודל 64.",
      "recapHtml": "תת-רשתות /26: 0, 64, 128, 192"
     },
     {
      "id": "C04-Q5",
      "question": "מחלקים `/24` לשמונה תת-רשתות שוות. כמה תחנות אפשר לחבר בכל תת-רשת?",
      "options": [
       {
        "id": "a",
        "value": "32",
        "type": "text",
        "html": "32"
       },
       {
        "id": "b",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "c",
        "value": "62",
        "type": "text",
        "html": "62"
       },
       {
        "id": "d",
        "value": "16",
        "type": "text",
        "html": "16"
       }
      ],
      "correctId": "b",
      "recap": "8 תת-רשתות = 3 ביטים; /27 = 32 כתובות פחות 2",
      "explanation": "‏8 = 2 בחזקת 3, ולכן הקידומת `/27` וגודל כל בלוק 32 כתובות. מהן 32 − 2 = **30** לתחנות. הערך 32 הוא מספר הכתובות, ולא מספר התחנות.",
      "questionHtml": "מחלקים <code class=\"tok\" dir=\"ltr\">/24</code> לשמונה תת-רשתות שוות. כמה תחנות אפשר לחבר בכל תת-רשת?",
      "explanationHtml": "‏8 = 2 בחזקת 3, ולכן הקידומת <code class=\"tok\" dir=\"ltr\">/27</code> וגודל כל בלוק 32 כתובות. מהן 32 − 2 = <strong>30</strong> לתחנות. הערך 32 הוא מספר הכתובות, ולא מספר התחנות.",
      "recapHtml": "8 תת-רשתות = 3 ביטים; /27 = 32 כתובות פחות 2"
     },
     {
      "id": "C04-Q6",
      "question": "כמה בלוקים של `/20` נכנסים בתוך בלוק `/16`?",
      "options": [
       {
        "id": "a",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "20",
        "type": "text",
        "html": "20"
       },
       {
        "id": "d",
        "value": "256",
        "type": "text",
        "html": "256"
       }
      ],
      "correctId": "a",
      "recap": "2 בחזקת (הפרש הקידומות)",
      "explanation": "ההפרש בין הקידומות הוא 20 − 16 = 4 ביטים, ולכן 2 בחזקת 4 = **16** בלוקים. אפשר גם לספור: `/16` מכיל 65,536 כתובות ו-`/20` מכיל 4,096 ולכן 65,536 / 4,096 = 16.",
      "questionHtml": "כמה בלוקים של <code class=\"tok\" dir=\"ltr\">/20</code> נכנסים בתוך בלוק <code class=\"tok\" dir=\"ltr\">/16</code>?",
      "explanationHtml": "ההפרש בין הקידומות הוא 20 − 16 = 4 ביטים, ולכן 2 בחזקת 4 = <strong>16</strong> בלוקים. אפשר גם לספור: <code class=\"tok\" dir=\"ltr\">/16</code> מכיל 65,536 כתובות ו-<code class=\"tok\" dir=\"ltr\">/20</code> מכיל 4,096 ולכן 65,536 / 4,096 = 16.",
      "recapHtml": "2 בחזקת (הפרש הקידומות)"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🧭",
    "title": "Longest Prefix Match",
    "goal": "לבחור את הכניסה הנכונה בטבלת ניתוב לפי הקידומת הארוכה ביותר שמתאימה לכתובת היעד.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>טבלת ניתוב (forwarding table) היא רשימת כניסות, וכל כניסה היא קידומת ויציאה (או מסלול). כתובת יעד יכולה להתאים לכמה כניסות בבת אחת, כי בלוק גדול מכיל בלוקים קטנים. הנתב בוחר את הכניסה עם <b>הקידומת הארוכה ביותר</b> (הערך הגדול ביותר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span>) מבין אלה שמתאימות.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון:</b>\n<ol>\n<li>לכל כניסה מחשבים את הטווח שהיא מכסה (כמו בגבולות בלוק), או משווים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> הביטים הראשונים בלבד.</li>\n<li>משאירים רק כניסות שהיעד נמצא בטווח שלהן.</li>\n<li>מבין אלה בוחרים את זו עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> הגדול ביותר. אם אין התאמה כלל ויש כניסת ברירת מחדל <code>0.0.0.0/0</code>, היא נבחרת.</li>\n</ol></div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> יעד <code>10.1.2.77</code>. הכניסות: <code>10.0.0.0/8</code>, ‏<code>10.1.0.0/16</code>, ‏<code>10.1.2.0/24</code>. שלושתן מתאימות (כל אחת מכילה את היעד). הארוכה ביותר היא <code>/24</code>, ולכן היא נבחרת.</div>\n<p><b>כניסה שלא מתאימה:</b> <code>10.1.3.0/24</code> לא מכסה את <code>10.1.2.77</code> כי בבית השלישי 3 שונה מ-2.</p>\n<div class=\"lesson-trap\">⚠️ <b>ביטי מארח בכניסה לא נבדקים.</b> הכניסה <code>25.36.64.0/16</code> כוללת \"64\" בבית השלישי, אבל המסכה היא 16 ביט, ולכן רק <code>25.36</code> נבדק. כל כתובת שמתחילה ב-<code>25.36</code> מתאימה לה.</div>\n<div class=\"lesson-trap\">⚠️ <b>Longest prefix אינו \"הכי קטנה\".</b> מסכה <code>/20</code> גוברת על <code>/16</code>: היא ספציפית יותר.</div>\n<p><b>כשהקידומת נגמרת באמצע בית:</b> חשבו את הטווח בבית הגבול (גודל בלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mo stretchy=\"false\">(</mo><mi>p</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>8</mn><mo stretchy=\"false\">)</mo></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{8-(p \\bmod 8)}</annotation></semantics></math></span>). בכניסה <code>/20</code> בבית השלישי גודל הבלוק 16, ולכן <code>12.100.64.0/20</code> מכסה את הערכים 64 עד 79 בבית השלישי.</p>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "יעד `10.1.2.77`. לאיזו כניסה תנותב החבילה?\n`A: 10.0.0.0/8`\n`B: 10.1.0.0/16`\n`C: 10.1.2.0/24`\n`D: 192.168.0.0/16`",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "B",
        "type": "text",
        "html": "B"
       },
       {
        "id": "c",
        "value": "C",
        "type": "text",
        "html": "C"
       },
       {
        "id": "d",
        "value": "D",
        "type": "text",
        "html": "D"
       }
      ],
      "correctId": "c",
      "recap": "מתאימות A, B, C; הארוכה היא /24",
      "explanation": "הכניסות A, B ו-C כולן מכילות את היעד (הקידומות `10`, `10.1` ו-`10.1.2`). הכניסה D לא מתאימה כי היא מתחילה ב-192. מבין שלוש המתאימות, `/24` הארוכה ביותר, ולכן **C**.",
      "questionHtml": "יעד <code class=\"tok\" dir=\"ltr\">10.1.2.77</code>. לאיזו כניסה תנותב החבילה?<br><code class=\"tok\" dir=\"ltr\">A: 10.0.0.0/8</code><br><code class=\"tok\" dir=\"ltr\">B: 10.1.0.0/16</code><br><code class=\"tok\" dir=\"ltr\">C: 10.1.2.0/24</code><br><code class=\"tok\" dir=\"ltr\">D: 192.168.0.0/16</code>",
      "explanationHtml": "הכניסות A, B ו-C כולן מכילות את היעד (הקידומות <code class=\"tok\" dir=\"ltr\">10</code>, <code class=\"tok\" dir=\"ltr\">10.1</code> ו-<code class=\"tok\" dir=\"ltr\">10.1.2</code>). הכניסה D לא מתאימה כי היא מתחילה ב-192. מבין שלוש המתאימות, <code class=\"tok\" dir=\"ltr\">/24</code> הארוכה ביותר, ולכן <strong>C</strong>.",
      "recapHtml": "מתאימות A, B, C; הארוכה היא /24"
     },
     {
      "id": "C05-Q2",
      "question": "יעד `10.1.9.5`. לאיזו כניסה תנותב החבילה?\n`A: 10.0.0.0/8`\n`B: 10.1.0.0/16`\n`C: 10.1.2.0/24`\n`D: 192.168.0.0/16`",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "B",
        "type": "text",
        "html": "B"
       },
       {
        "id": "c",
        "value": "C",
        "type": "text",
        "html": "C"
       },
       {
        "id": "d",
        "value": "D",
        "type": "text",
        "html": "D"
       }
      ],
      "correctId": "b",
      "recap": "כניסה /24 דורשת התאמה של שלושה בתים",
      "explanation": "הכניסה C דורשת בית שלישי 2, אבל ביעד הוא 9, ולכן אינה מתאימה. נשארות A (`/8`) ו-B (`/16`), והארוכה היא **B**.",
      "questionHtml": "יעד <code class=\"tok\" dir=\"ltr\">10.1.9.5</code>. לאיזו כניסה תנותב החבילה?<br><code class=\"tok\" dir=\"ltr\">A: 10.0.0.0/8</code><br><code class=\"tok\" dir=\"ltr\">B: 10.1.0.0/16</code><br><code class=\"tok\" dir=\"ltr\">C: 10.1.2.0/24</code><br><code class=\"tok\" dir=\"ltr\">D: 192.168.0.0/16</code>",
      "explanationHtml": "הכניסה C דורשת בית שלישי 2, אבל ביעד הוא 9, ולכן אינה מתאימה. נשארות A (<code class=\"tok\" dir=\"ltr\">/8</code>) ו-B (<code class=\"tok\" dir=\"ltr\">/16</code>), והארוכה היא <strong>B</strong>.",
      "recapHtml": "כניסה /24 דורשת התאמה של שלושה בתים"
     },
     {
      "id": "C05-Q3",
      "question": "יעד `11.1.1.1`. לאיזו כניסה תנותב החבילה?\n`A: 10.0.0.0/8`\n`B: 10.1.0.0/16`\n`C: 0.0.0.0/0`",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "B",
        "type": "text",
        "html": "B"
       },
       {
        "id": "c",
        "value": "C",
        "type": "text",
        "html": "C"
       },
       {
        "id": "d",
        "value": "החבילה תושלך",
        "type": "text",
        "html": "החבילה תושלך"
       }
      ],
      "correctId": "c",
      "recap": "ברירת המחדל /0 מתאימה לכל כתובת",
      "explanation": "הכניסות A ו-B דורשות בית ראשון 10, והיעד מתחיל ב-11. נשארת ברירת המחדל `0.0.0.0/0`, שמתאימה לכל כתובת (אפס ביטים לבדיקה), ולכן **C**. החבילה לא תושלך כי יש כניסה מתאימה.",
      "questionHtml": "יעד <code class=\"tok\" dir=\"ltr\">11.1.1.1</code>. לאיזו כניסה תנותב החבילה?<br><code class=\"tok\" dir=\"ltr\">A: 10.0.0.0/8</code><br><code class=\"tok\" dir=\"ltr\">B: 10.1.0.0/16</code><br><code class=\"tok\" dir=\"ltr\">C: 0.0.0.0/0</code>",
      "explanationHtml": "הכניסות A ו-B דורשות בית ראשון 10, והיעד מתחיל ב-11. נשארת ברירת המחדל <code class=\"tok\" dir=\"ltr\">0.0.0.0/0</code>, שמתאימה לכל כתובת (אפס ביטים לבדיקה), ולכן <strong>C</strong>. החבילה לא תושלך כי יש כניסה מתאימה.",
      "recapHtml": "ברירת המחדל /0 מתאימה לכל כתובת"
     },
     {
      "id": "C05-Q4",
      "question": "יעד `172.16.37.9`. לאיזו כניסה תנותב החבילה?\n`A: 172.16.32.0/20`\n`B: 172.16.48.0/20`\n`C: 172.16.0.0/16`\n`D: 172.0.0.0/8`",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "B",
        "type": "text",
        "html": "B"
       },
       {
        "id": "c",
        "value": "C",
        "type": "text",
        "html": "C"
       },
       {
        "id": "d",
        "value": "D",
        "type": "text",
        "html": "D"
       }
      ],
      "correctId": "a",
      "recap": "/20: בית שלישי בגדלי בלוק של 16",
      "explanation": "בכניסות `/20` גודל הבלוק בבית השלישי הוא 16. הכניסה A מכסה 32 עד 47 וכוללת את 37. הכניסה B מכסה 48 עד 63 ואינה מתאימה. הכניסות C ו-D מתאימות גם הן אבל קצרות יותר. הארוכה היא **A**.",
      "questionHtml": "יעד <code class=\"tok\" dir=\"ltr\">172.16.37.9</code>. לאיזו כניסה תנותב החבילה?<br><code class=\"tok\" dir=\"ltr\">A: 172.16.32.0/20</code><br><code class=\"tok\" dir=\"ltr\">B: 172.16.48.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 172.16.0.0/16</code><br><code class=\"tok\" dir=\"ltr\">D: 172.0.0.0/8</code>",
      "explanationHtml": "בכניסות <code class=\"tok\" dir=\"ltr\">/20</code> גודל הבלוק בבית השלישי הוא 16. הכניסה A מכסה 32 עד 47 וכוללת את 37. הכניסה B מכסה 48 עד 63 ואינה מתאימה. הכניסות C ו-D מתאימות גם הן אבל קצרות יותר. הארוכה היא <strong>A</strong>.",
      "recapHtml": "/20: בית שלישי בגדלי בלוק של 16"
     },
     {
      "id": "C05-Q5",
      "question": "יעד `192.168.4.200`. לאיזו כניסה תנותב החבילה?\n`A: 192.168.0.0/22`\n`B: 192.168.4.0/23`\n`C: 192.168.4.128/25`\n`D: 192.168.0.0/16`",
      "options": [
       {
        "id": "a",
        "value": "A",
        "type": "text",
        "html": "A"
       },
       {
        "id": "b",
        "value": "B",
        "type": "text",
        "html": "B"
       },
       {
        "id": "c",
        "value": "C",
        "type": "text",
        "html": "C"
       },
       {
        "id": "d",
        "value": "D",
        "type": "text",
        "html": "D"
       }
      ],
      "correctId": "c",
      "recap": "מחשבים טווח לכל כניסה; הכי ארוכה שמכילה את היעד",
      "explanation": "הכניסה A (`/22`, גודל 4 בבית השלישי) מכסה 0 עד 3 ואינה כוללת את 4. הכניסה B (`/23`, גודל 2) מכסה 4 עד 5 ומתאימה. הכניסה C (`/25`) מכסה 128 עד 255 בבית הרביעי ומתאימה. הכניסה D מתאימה. הארוכה ביותר היא `/25`, כלומר **C**.",
      "questionHtml": "יעד <code class=\"tok\" dir=\"ltr\">192.168.4.200</code>. לאיזו כניסה תנותב החבילה?<br><code class=\"tok\" dir=\"ltr\">A: 192.168.0.0/22</code><br><code class=\"tok\" dir=\"ltr\">B: 192.168.4.0/23</code><br><code class=\"tok\" dir=\"ltr\">C: 192.168.4.128/25</code><br><code class=\"tok\" dir=\"ltr\">D: 192.168.0.0/16</code>",
      "explanationHtml": "הכניסה A (<code class=\"tok\" dir=\"ltr\">/22</code>, גודל 4 בבית השלישי) מכסה 0 עד 3 ואינה כוללת את 4. הכניסה B (<code class=\"tok\" dir=\"ltr\">/23</code>, גודל 2) מכסה 4 עד 5 ומתאימה. הכניסה C (<code class=\"tok\" dir=\"ltr\">/25</code>) מכסה 128 עד 255 בבית הרביעי ומתאימה. הכניסה D מתאימה. הארוכה ביותר היא <code class=\"tok\" dir=\"ltr\">/25</code>, כלומר <strong>C</strong>.",
      "recapHtml": "מחשבים טווח לכל כניסה; הכי ארוכה שמכילה את היעד"
     },
     {
      "id": "C05-Q6",
      "question": "בטבלה הכניסה `25.36.64.0/16`. האם היא מתאימה ליעד `25.36.200.1`?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי רק 16 הביטים הראשונים נבדקים",
        "type": "text",
        "html": "כן, כי רק 16 הביטים הראשונים נבדקים"
       },
       {
        "id": "b",
        "value": "לא, כי הבית השלישי 200 שונה מ-64",
        "type": "text",
        "html": "לא, כי הבית השלישי 200 שונה מ-64"
       },
       {
        "id": "c",
        "value": "לא, כי כתובת רשת חייבת להסתיים ב-0",
        "type": "text",
        "html": "לא, כי כתובת רשת חייבת להסתיים ב-0"
       },
       {
        "id": "d",
        "value": "כן, אבל רק אם אין כניסה אחרת",
        "type": "text",
        "html": "כן, אבל רק אם אין כניסה אחרת"
       }
      ],
      "correctId": "a",
      "recap": "ביטי המארח של הכניסה לא נבדקים",
      "explanation": "המסכה `/16` בודקת רק את `25.36`, והיעד מתחיל בדיוק כך. הבית השלישי הוא חלק מביטי המארח ולכן לא נבדק (האפס שלא בגבול לא משנה). אם יש כניסות ארוכות יותר שמתאימות הן עדיפות, אבל ההתאמה עצמה קיימת.",
      "questionHtml": "בטבלה הכניסה <code class=\"tok\" dir=\"ltr\">25.36.64.0/16</code>. האם היא מתאימה ליעד <code class=\"tok\" dir=\"ltr\">25.36.200.1</code>?",
      "explanationHtml": "המסכה <code class=\"tok\" dir=\"ltr\">/16</code> בודקת רק את <code class=\"tok\" dir=\"ltr\">25.36</code>, והיעד מתחיל בדיוק כך. הבית השלישי הוא חלק מביטי המארח ולכן לא נבדק (האפס שלא בגבול לא משנה). אם יש כניסות ארוכות יותר שמתאימות הן עדיפות, אבל ההתאמה עצמה קיימת.",
      "recapHtml": "ביטי המארח של הכניסה לא נבדקים"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🧩",
    "title": "פרגמנטציה ו-Offset",
    "goal": "לחשב כמה פרגמנטים נוצרים, מה גודל כל אחד ומה ערך ה-Offset שלו.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>לכל קישור יש <b>MTU</b>: הגודל המרבי של חבילת IP שאפשר לשלוח בו (כותרת ונתונים יחד). חבילה גדולה יותר <b>מפוצלת</b> לפרגמנטים. כל פרגמנט הוא חבילת IP שלמה, עם כותרת של 20 בתים (כשאין options).</p>\n<div class=\"lesson-rule\">🔑 <b>שלבי החישוב</b>\n<ol>\n<li><b>נתונים בחבילה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mi>S</mi><mo>−</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">D = S - 20</annotation></semantics></math></span>, כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> הוא גודל החבילה כולל הכותרת. (\"שכבת התעבורה שולחת 2000 בתים\" הם כבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span>.)</li>\n<li><b>נתונים בפרגמנט (חוץ מהאחרון):</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mrow><mo fence=\"true\">⌊</mo><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>−</mo><mn>20</mn></mrow><mn>8</mn></mfrac></mstyle><mo fence=\"true\">⌋</mo></mrow><mo>⋅</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">k=\\left\\lfloor \\dfrac{MTU-20}{8}\\right\\rfloor \\cdot 8</annotation></semantics></math></span>. ה-Offset נמדד ביחידות של 8 בתים, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> חייב להיות כפולה של 8.</li>\n<li><b>מספר פרגמנטים:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mi>D</mi><mi mathvariant=\"normal\">/</mi><mi>k</mi><mo stretchy=\"false\">⌉</mo></mrow><annotation encoding=\"application/x-tex\">\\lceil D/k \\rceil</annotation></semantics></math></span>. האחרון נושא את השארית.</li>\n<li><b>Offset של הפרגמנט ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">j</annotation></semantics></math></span>:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mo stretchy=\"false\">(</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>k</mi></mrow><mn>8</mn></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\dfrac{(j-1)\\cdot k}{8}</annotation></semantics></math></span> (הראשון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">j=1</annotation></semantics></math></span> והוא 0).</li>\n<li><b>MF</b> (more fragments): <code>1</code> בכל הפרגמנטים חוץ מהאחרון, ו-<code>0</code> באחרון.</li>\n</ol></div>\n<div class=\"lesson-ex\"><b>דוגמה:</b> נתונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>3000</mn></mrow><annotation encoding=\"application/x-tex\">D=3000</annotation></semantics></math></span> בבתים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">MTU=1000</annotation></semantics></math></span>. ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\">⌊</mo><mn>980</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo stretchy=\"false\">⌋</mo><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>976</mn></mrow><annotation encoding=\"application/x-tex\">k=\\lfloor 980/8\\rfloor\\cdot 8=976</annotation></semantics></math></span>. מספר הפרגמנטים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>3000</mn><mi mathvariant=\"normal\">/</mi><mn>976</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil 3000/976\\rceil=4</annotation></semantics></math></span>. הנתונים: 976, 976, 976, 72. הגדלים (עם כותרת): 996, 996, 996, 92. ה-Offsets: 0, 122, 244, 366. בדיקה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>366</mn><mo>⋅</mo><mn>8</mn><mo>+</mo><mn>72</mn><mo>=</mo><mn>3000</mn></mrow><annotation encoding=\"application/x-tex\">366\\cdot 8+72=3000</annotation></semantics></math></span>.</div>\n<p><b>מי מפרגמנט ומי מרכיב?</b> פרגמנטציה נעשית בתחנה השולחת ובנתבים (כשהקישור הבא קטן יותר). <b>הרכבה מחדש (reassembly) נעשית רק בתחנת היעד</b>, לא בנתב ולא במתג.</p>\n<div class=\"lesson-trap\">⚠️ <b>ה-Offset הוא לא בתים.</b> הפרגמנט החמישי בחבילה של 2000 בתים עם MTU של 420 מתחיל אחרי 1600 בתים, אבל השדה מכיל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1600</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">1600/8=200</annotation></semantics></math></span>.</div>\n<div class=\"lesson-trap\">⚠️ <b>שוכחים את הכותרת.</b> ב-MTU של 1000 נשארים 980 לנתונים, ואחרי עיגול כלפי מטה לכפולה של 8, בדיוק 976.</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "חבילת IP בגודל 4000 בתים (כולל כותרת של 20 בתים) עוברת בקישור עם $MTU=1500$. לכמה פרגמנטים היא תתפצל?",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "d",
        "value": "5",
        "type": "text",
        "html": "5"
       }
      ],
      "correctId": "a",
      "recap": "D = S − 20; k = ((MTU − 20) / 8) מעוגל מטה × 8",
      "explanation": "הנתונים: 4000 − 20 = 3980. בפרגמנט נכנסים 1480 (כפולה של 8). ‏3980 / 1480 ≈ 2.69, ולכן **3** פרגמנטים (1480, 1480, 1020). מי שמעגל כלפי מטה, או מחלק 4000 ב-1500 ומעגל כלפי מטה, מקבל 2 ומפספס את הפרגמנט האחרון.",
      "questionHtml": "חבילת IP בגודל 4000 בתים (כולל כותרת של 20 בתים) עוברת בקישור עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>1500</mn></mrow><annotation encoding=\"application/x-tex\">MTU=1500</annotation></semantics></math></span>. לכמה פרגמנטים היא תתפצל?",
      "explanationHtml": "הנתונים: 4000 − 20 = 3980. בפרגמנט נכנסים 1480 (כפולה של 8). ‏3980 / 1480 ≈ 2.69, ולכן <strong>3</strong> פרגמנטים (1480, 1480, 1020). מי שמעגל כלפי מטה, או מחלק 4000 ב-1500 ומעגל כלפי מטה, מקבל 2 ומפספס את הפרגמנט האחרון.",
      "recapHtml": "D = S − 20; k = ((MTU − 20) / 8) מעוגל מטה × 8"
     },
     {
      "id": "C06-Q2",
      "question": "באותה חבילה (4000 בתים, $MTU=1500$), מה ערך שדה ה-Offset בפרגמנט השלישי?",
      "options": [
       {
        "id": "a",
        "value": "370",
        "type": "text",
        "html": "370"
       },
       {
        "id": "b",
        "value": "185",
        "type": "text",
        "html": "185"
       },
       {
        "id": "c",
        "value": "2960",
        "type": "text",
        "html": "2960"
       },
       {
        "id": "d",
        "value": "375",
        "type": "text",
        "html": "375"
       }
      ],
      "correctId": "a",
      "recap": "Offset = (j − 1) · k / 8",
      "explanation": "‏$k=1480$. הפרגמנט השלישי מתחיל אחרי $2\\cdot1480=2960$ בתים, ו-$2960/8=$ **370**. הערך 185 הוא ה-Offset של הפרגמנט השני, הערך 2960 הוא ההיסט בבתים, והערך 375 נובע מהתעלמות מהכותרת ($2\\cdot1500/8$).",
      "questionHtml": "באותה חבילה (4000 בתים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>1500</mn></mrow><annotation encoding=\"application/x-tex\">MTU=1500</annotation></semantics></math></span>), מה ערך שדה ה-Offset בפרגמנט השלישי?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>1480</mn></mrow><annotation encoding=\"application/x-tex\">k=1480</annotation></semantics></math></span>. הפרגמנט השלישי מתחיל אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>1480</mn><mo>=</mo><mn>2960</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot1480=2960</annotation></semantics></math></span> בתים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2960</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">2960/8=</annotation></semantics></math></span> <strong>370</strong>. הערך 185 הוא ה-Offset של הפרגמנט השני, הערך 2960 הוא ההיסט בבתים, והערך 375 נובע מהתעלמות מהכותרת (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>1500</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">2\\cdot1500/8</annotation></semantics></math></span>).",
      "recapHtml": "Offset = (j − 1) · k / 8"
     },
     {
      "id": "C06-Q3",
      "question": "קישור עם $MTU=1000$ ובלי options. מהו המספר המרבי של בתי נתונים בפרגמנט שאינו האחרון?",
      "options": [
       {
        "id": "a",
        "value": "976",
        "type": "text",
        "html": "976"
       },
       {
        "id": "b",
        "value": "980",
        "type": "text",
        "html": "980"
       },
       {
        "id": "c",
        "value": "1000",
        "type": "text",
        "html": "1000"
       },
       {
        "id": "d",
        "value": "968",
        "type": "text",
        "html": "968"
       }
      ],
      "correctId": "a",
      "recap": "מעגלים (MTU − 20) כלפי מטה לכפולה של 8",
      "explanation": "אחרי הכותרת נשארים 980 בתים. ה-Offset נמדד ביחידות של 8, ולכן הנתונים חייבים להיות כפולה של 8: הכפולה הגדולה ביותר עד 980 היא **976** (‏$122\\cdot8$). הערך 980 אינו כפולה של 8, והערך 1000 שוכח את הכותרת.",
      "questionHtml": "קישור עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">MTU=1000</annotation></semantics></math></span> ובלי options. מהו המספר המרבי של בתי נתונים בפרגמנט שאינו האחרון?",
      "explanationHtml": "אחרי הכותרת נשארים 980 בתים. ה-Offset נמדד ביחידות של 8, ולכן הנתונים חייבים להיות כפולה של 8: הכפולה הגדולה ביותר עד 980 היא <strong>976</strong> (‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>122</mn><mo>⋅</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">122\\cdot8</annotation></semantics></math></span>). הערך 980 אינו כפולה של 8, והערך 1000 שוכח את הכותרת.",
      "recapHtml": "מעגלים (MTU − 20) כלפי מטה לכפולה של 8"
     },
     {
      "id": "C06-Q4",
      "question": "מפצלים 3000 בתי נתונים בקישור עם $MTU=1000$. מהו הגודל (כולל כותרת) של הפרגמנט האחרון?",
      "options": [
       {
        "id": "a",
        "value": "72",
        "type": "text",
        "html": "72"
       },
       {
        "id": "b",
        "value": "92",
        "type": "text",
        "html": "92"
       },
       {
        "id": "c",
        "value": "996",
        "type": "text",
        "html": "996"
       },
       {
        "id": "d",
        "value": "1000",
        "type": "text",
        "html": "1000"
       }
      ],
      "correctId": "b",
      "recap": "האחרון נושא את השארית; מוסיפים כותרת 20",
      "explanation": "‏$k=976$, ושלושה פרגמנטים ראשונים נושאים $3\\cdot976=2928$. השארית $3000-2928=72$. עם כותרת 72 + 20 = **92**. הערך 72 הוא הנתונים בלבד, והערך 996 הוא גודל פרגמנט מלא.",
      "questionHtml": "מפצלים 3000 בתי נתונים בקישור עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">MTU=1000</annotation></semantics></math></span>. מהו הגודל (כולל כותרת) של הפרגמנט האחרון?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>976</mn></mrow><annotation encoding=\"application/x-tex\">k=976</annotation></semantics></math></span>, ושלושה פרגמנטים ראשונים נושאים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>976</mn><mo>=</mo><mn>2928</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot976=2928</annotation></semantics></math></span>. השארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3000</mn><mo>−</mo><mn>2928</mn><mo>=</mo><mn>72</mn></mrow><annotation encoding=\"application/x-tex\">3000-2928=72</annotation></semantics></math></span>. עם כותרת 72 + 20 = <strong>92</strong>. הערך 72 הוא הנתונים בלבד, והערך 996 הוא גודל פרגמנט מלא.",
      "recapHtml": "האחרון נושא את השארית; מוסיפים כותרת 20"
     },
     {
      "id": "C06-Q5",
      "question": "חבילה בגודל 2000 בתים (כולל כותרת) עוברת בקישור עם $MTU=700$ ללא options. מה ערך ה-Offset בפרגמנט השני?",
      "options": [
       {
        "id": "a",
        "value": "680",
        "type": "text",
        "html": "680"
       },
       {
        "id": "b",
        "value": "87",
        "type": "text",
        "html": "87"
       },
       {
        "id": "c",
        "value": "85",
        "type": "text",
        "html": "85"
       },
       {
        "id": "d",
        "value": "170",
        "type": "text",
        "html": "170"
       }
      ],
      "correctId": "c",
      "recap": "k = 680; Offset של השני = k / 8",
      "explanation": "‏$D=2000-20=1980$ ו-$k=\\lfloor680/8\\rfloor\\cdot8=680$ (כבר כפולה של 8). הפרגמנט השני מתחיל אחרי 680 בתים, ו-$680/8=$ **85**. הערך 680 הוא ההיסט בבתים, והערך 87 נובע מחילוק של 700 ב-8.",
      "questionHtml": "חבילה בגודל 2000 בתים (כולל כותרת) עוברת בקישור עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>700</mn></mrow><annotation encoding=\"application/x-tex\">MTU=700</annotation></semantics></math></span> ללא options. מה ערך ה-Offset בפרגמנט השני?",
      "explanationHtml": "‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>2000</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>1980</mn></mrow><annotation encoding=\"application/x-tex\">D=2000-20=1980</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\">⌊</mo><mn>680</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo stretchy=\"false\">⌋</mo><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>680</mn></mrow><annotation encoding=\"application/x-tex\">k=\\lfloor680/8\\rfloor\\cdot8=680</annotation></semantics></math></span> (כבר כפולה של 8). הפרגמנט השני מתחיל אחרי 680 בתים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>680</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">680/8=</annotation></semantics></math></span> <strong>85</strong>. הערך 680 הוא ההיסט בבתים, והערך 87 נובע מחילוק של 700 ב-8.",
      "recapHtml": "k = 680; Offset של השני = k / 8"
     },
     {
      "id": "C06-Q6",
      "question": "חבילה התפצלה לשלושה פרגמנטים. מהם ערכי MF (לפי הסדר מהראשון לאחרון)?",
      "options": [
       {
        "id": "a",
        "value": "`1, 1, 0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1, 1, 0</code>"
       },
       {
        "id": "b",
        "value": "`0, 0, 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0, 0, 1</code>"
       },
       {
        "id": "c",
        "value": "`1, 1, 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1, 1, 1</code>"
       },
       {
        "id": "d",
        "value": "`0, 1, 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0, 1, 1</code>"
       }
      ],
      "correctId": "a",
      "recap": "MF = 1 בכולם חוץ מהאחרון",
      "explanation": "הדגל MF אומר 'יש עוד פרגמנטים אחריי'. בשני הראשונים יש עוד, ולכן 1. באחרון אין, ולכן 0: `1, 1, 0`. הסדר ההפוך `0, 0, 1` הוא טעות נפוצה.",
      "questionHtml": "חבילה התפצלה לשלושה פרגמנטים. מהם ערכי MF (לפי הסדר מהראשון לאחרון)?",
      "explanationHtml": "הדגל MF אומר 'יש עוד פרגמנטים אחריי'. בשני הראשונים יש עוד, ולכן 1. באחרון אין, ולכן 0: <code class=\"tok\" dir=\"ltr\">1, 1, 0</code>. הסדר ההפוך <code class=\"tok\" dir=\"ltr\">0, 0, 1</code> הוא טעות נפוצה.",
      "recapHtml": "MF = 1 בכולם חוץ מהאחרון"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות IP אמיתיות מהמבחנים: גבולות בלוק, מספר כתובות, Longest Prefix ופרגמנטציה.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>שש שאלות אמיתיות. לפני שמתחילים, הנה הסיכום של כל המתכונים:</p>\n<div class=\"lesson-rule\">🔑\n<ul>\n<li><b>גבולות בלוק:</b> בית הגבול, גודל בלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>8</mn><mo>−</mo><mo stretchy=\"false\">(</mo><mi>p</mi><mtext> </mtext><mo lspace=\"0.22em\" rspace=\"0.22em\"><mrow><mi mathvariant=\"normal\">m</mi><mi mathvariant=\"normal\">o</mi><mi mathvariant=\"normal\">d</mi></mrow></mo><mtext> </mtext><mn>8</mn><mo stretchy=\"false\">)</mo></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{8-(p \\bmod 8)}</annotation></semantics></math></span>, עיגול למטה; broadcast = סוף הבלוק.</li>\n<li><b>מספר כתובות:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>32</mn><mo>−</mo><mi>p</mi></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{32-p}</annotation></semantics></math></span> (תחנות: פחות 2).</li>\n<li><b>Longest prefix:</b> אוספים כניסות שמתאימות ובוחרים את ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>p</mi></mrow><annotation encoding=\"application/x-tex\">p</annotation></semantics></math></span> הגדול ביותר.</li>\n<li><b>פרגמנטציה:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mi>S</mi><mo>−</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">D=S-20</annotation></semantics></math></span>, ‏<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mi>M</mi><mi>T</mi><mi>U</mi><mo>−</mo><mn>20</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo stretchy=\"false\">⌋</mo><mo>⋅</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">k=\\lfloor (MTU-20)/8\\rfloor\\cdot8</annotation></semantics></math></span>, ‏Offset של פרגמנט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>j</mi></mrow><annotation encoding=\"application/x-tex\">j</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi>k</mi><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">(j-1)k/8</annotation></semantics></math></span>.</li>\n</ul></div>\n<div class=\"lesson-trap\">⚠️ במבחן, \"חבילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> בתים\" כוללת את הכותרת. בדקו מה בדיוק נשאל: Offset, מספר פרגמנטים או גודל המטען המקורי.</div>\n"
    },
    "questions": [
     {
      "bankId": "23A-A-Q16",
      "recap": "קודם מוצאים את הבלוק: /18 בבית השלישי, גודל 64, והערך 16 נופל ב-0 עד 63",
      "recapHtml": "קודם מוצאים את הבלוק: /18 בבית השלישי, גודל 64, והערך 16 נופל ב-0 עד 63"
     },
     {
      "bankId": "25A-B-Q10",
      "recap": "מספר כתובות ברשת /24 הוא 2 בחזקת 8 = 256",
      "recapHtml": "מספר כתובות ברשת /24 הוא 2 בחזקת 8 = 256"
     },
     {
      "bankId": "23A-B-Q10",
      "recap": "E לא מתאימה (16 עד 31 בבית השני); C הארוכה מבין המתאימות",
      "recapHtml": "E לא מתאימה (16 עד 31 בבית השני); C הארוכה מבין המתאימות"
     },
     {
      "bankId": "25A-A-Q6",
      "recap": "/20 בבית שלישי מכסה 48 עד 63; הוא הארוך מבין המתאימים",
      "recapHtml": "/20 בבית שלישי מכסה 48 עד 63; הוא הארוך מבין המתאימים"
     },
     {
      "bankId": "26A-A-Q7",
      "recap": "k = 480; הפרגמנט הרביעי: 3 · 480 / 8 = 180",
      "recapHtml": "k = 480; הפרגמנט הרביעי: 3 · 480 / 8 = 180"
     },
     {
      "bankId": "23A-B-Q2",
      "recap": "שוכחים 20 בתים של כותרת: מטען = 2580 − 20 = 2560",
      "recapHtml": "שוכחים 20 בתים של כותרת: מטען = 2580 − 20 = 2560"
     }
    ]
   }
  ]
 },
 "link": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔗",
    "title": "מסגרות וכתובות MAC",
    "goal": "להבדיל בין מסגרת (frame) לחבילה, בין כתובת MAC לכתובת IP, ולדעת מה שכבת הקו עושה ומה היא לא עושה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>שכבת הקו מעבירה נתונים על <b>קישור אחד</b> בלבד: בין שני צמתים <b>סמוכים</b> (תחנה וסוויץ', סוויץ' ונתב, שני נתבים). היחידה שהיא מעבירה נקראת <b>מסגרת (frame)</b>. המסגרת עוטפת את החבילה (datagram) של שכבת הרשת בכותרת ובסיומת משלה.</p>\n<div class=\"lesson-rule\">🔑 <b>מה שכבת הקו נותנת:</b>\n<ul>\n<li><b>Framing</b>: מסגרת עם התחלה וסוף ברורים, וכתובות MAC של מקור ושל יעד.</li>\n<li><b>גישה לערוץ משותף</b> (למשל CSMA/CD ב-Ethernet, כולל זיהוי התנגשות).</li>\n<li><b>זיהוי שגיאות</b> (CRC, זוגיות). המקבל מגלה שהמסגרת פגומה, אבל Ethernet לא שולח ACK ולא משדר מחדש.</li>\n</ul>\nמה שהיא <b>לא</b> עושה: הקצאת כתובות IP (זה DHCP ושכבת הרשת) וניתוב בין רשתות.</div>\n<p><b>כתובת MAC</b> היא כתובת של כרטיס הרשת: <b>48 ביט</b>, כלומר <b>6 בתים</b>, שנכתבים כ-12 ספרות הקסדצימליות, למשל <code>1A:2B:3C:4D:5E:6F</code>. היא נקבעת בכרטיס ונשארת קבועה. <b>כתובת IP</b> תלויה ברשת שאליה התחנה מחוברת.</p>\n<table><thead><tr><th></th><th>כתובת MAC</th><th>כתובת IP (IPv4)</th></tr></thead>\n<tbody>\n<tr><td>אורך</td><td>48 ביט</td><td>32 ביט</td></tr>\n<tr><td>טווח שימוש</td><td>קישור אחד בלבד</td><td>מקצה לקצה</td></tr>\n<tr><td>משתנה בדרך?</td><td>כן, בכל קישור</td><td>לא (פרט ל-NAT)</td></tr>\n</tbody></table>\n<div class=\"lesson-ex\">דוגמה: חבילה עוברת מתחנה A דרך נתב R לתחנה B. בקישור A–R המסגרת נושאת MAC של A ושל R. בקישור R–B היא נושאת MAC של R ושל B. כתובות ה-IP של A ושל B נשארות אותו דבר לכל אורך הדרך.</div>\n<div class=\"lesson-trap\">⚠️ כתובות MAC מחליפות \"ידיים\" בכל קישור, ולכן הן לא יכולות לזהות תחנה מרחוק. ואל תבלבלו בין יחידות: <b>frame</b> בשכבת הקו, <b>datagram</b> בשכבת הרשת.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "איזו יחידת מידע מעבירה שכבת הקו?",
      "options": [
       {
        "id": "a",
        "value": "מסגרת (frame)",
        "type": "text",
        "html": "מסגרת (frame)"
       },
       {
        "id": "b",
        "value": "חבילה (datagram)",
        "type": "text",
        "html": "חבילה (datagram)"
       },
       {
        "id": "c",
        "value": "סגמנט (segment)",
        "type": "text",
        "html": "סגמנט (segment)"
       },
       {
        "id": "d",
        "value": "הודעת אפליקציה (message)",
        "type": "text",
        "html": "הודעת אפליקציה (message)"
       }
      ],
      "correctId": "a",
      "explanation": "שכבת הקו מעבירה מסגרות. חבילה (datagram) היא היחידה של שכבת הרשת, סגמנט היא של שכבת התעבורה, והודעה היא של שכבת האפליקציה.",
      "recap": "קו: frame. רשת: datagram. תעבורה: segment.",
      "questionHtml": "איזו יחידת מידע מעבירה שכבת הקו?",
      "explanationHtml": "שכבת הקו מעבירה מסגרות. חבילה (datagram) היא היחידה של שכבת הרשת, סגמנט היא של שכבת התעבורה, והודעה היא של שכבת האפליקציה.",
      "recapHtml": "קו: frame. רשת: datagram. תעבורה: segment."
     },
     {
      "id": "C01-Q2",
      "question": "מה האורך של כתובת MAC?",
      "options": [
       {
        "id": "a",
        "value": "48 ביט (6 בתים)",
        "type": "text",
        "html": "48 ביט (6 בתים)"
       },
       {
        "id": "b",
        "value": "32 ביט (4 בתים)",
        "type": "text",
        "html": "32 ביט (4 בתים)"
       },
       {
        "id": "c",
        "value": "128 ביט (16 בתים)",
        "type": "text",
        "html": "128 ביט (16 בתים)"
       },
       {
        "id": "d",
        "value": "64 ביט (8 בתים)",
        "type": "text",
        "html": "64 ביט (8 בתים)"
       }
      ],
      "correctId": "a",
      "explanation": "כתובת MAC היא 48 ביט, כלומר 6 בתים, או 12 ספרות הקסדצימליות. 32 ביט הוא אורך כתובת IPv4, ו-128 ביט הוא אורך כתובת IPv6.",
      "recap": "MAC = 48 ביט. IPv4 = 32 ביט.",
      "questionHtml": "מה האורך של כתובת MAC?",
      "explanationHtml": "כתובת MAC היא 48 ביט, כלומר 6 בתים, או 12 ספרות הקסדצימליות. 32 ביט הוא אורך כתובת IPv4, ו-128 ביט הוא אורך כתובת IPv6.",
      "recapHtml": "MAC = 48 ביט. IPv4 = 32 ביט."
     },
     {
      "id": "C01-Q3",
      "question": "תחנה A שולחת חבילה לתחנה B דרך נתב אחד באמצע. מה נכון לגבי כתובות ה-IP וה-MAC לאורך הדרך?",
      "options": [
       {
        "id": "a",
        "value": "כתובות ה-IP של המקור והיעד נשארות, וכתובות ה-MAC משתנות בכל קישור",
        "type": "text",
        "html": "כתובות ה-IP של המקור והיעד נשארות, וכתובות ה-MAC משתנות בכל קישור"
       },
       {
        "id": "b",
        "value": "כתובות ה-MAC נשארות, וכתובות ה-IP משתנות בכל קישור",
        "type": "text",
        "html": "כתובות ה-MAC נשארות, וכתובות ה-IP משתנות בכל קישור"
       },
       {
        "id": "c",
        "value": "גם ה-IP וגם ה-MAC נשארות ללא שינוי",
        "type": "text",
        "html": "גם ה-IP וגם ה-MAC נשארות ללא שינוי"
       },
       {
        "id": "d",
        "value": "גם ה-IP וגם ה-MAC משתנות בכל קישור",
        "type": "text",
        "html": "גם ה-IP וגם ה-MAC משתנות בכל קישור"
       }
      ],
      "correctId": "a",
      "explanation": "ה-IP מזהה את שתי התחנות מקצה לקצה ולכן נשאר. ה-MAC תקף לקישור אחד בלבד, ולכן בכל קישור יש כתובות MAC אחרות של שני הצמתים הסמוכים. התשובה ההפוכה היא הטעות הנפוצה.",
      "recap": "IP נשאר מקצה לקצה, MAC מוחלף בכל קישור.",
      "questionHtml": "תחנה A שולחת חבילה לתחנה B דרך נתב אחד באמצע. מה נכון לגבי כתובות ה-IP וה-MAC לאורך הדרך?",
      "explanationHtml": "ה-IP מזהה את שתי התחנות מקצה לקצה ולכן נשאר. ה-MAC תקף לקישור אחד בלבד, ולכן בכל קישור יש כתובות MAC אחרות של שני הצמתים הסמוכים. התשובה ההפוכה היא הטעות הנפוצה.",
      "recapHtml": "IP נשאר מקצה לקצה, MAC מוחלף בכל קישור."
     },
     {
      "id": "C01-Q4",
      "question": "איזה שירות אינו שייך לשכבת הקו?",
      "options": [
       {
        "id": "a",
        "value": "הקצאת כתובות IP לתחנות",
        "type": "text",
        "html": "הקצאת כתובות IP לתחנות"
       },
       {
        "id": "b",
        "value": "זיהוי שגיאות במסגרת",
        "type": "text",
        "html": "זיהוי שגיאות במסגרת"
       },
       {
        "id": "c",
        "value": "זיהוי התנגשויות בערוץ משותף",
        "type": "text",
        "html": "זיהוי התנגשויות בערוץ משותף"
       },
       {
        "id": "d",
        "value": "יצירת מסגרות עם כתובות MAC",
        "type": "text",
        "html": "יצירת מסגרות עם כתובות MAC"
       }
      ],
      "correctId": "a",
      "explanation": "הקצאת IP היא עבודה של DHCP ושל שכבת הרשת. זיהוי שגיאות, זיהוי התנגשויות ויצירת מסגרות עם כתובות MAC הם שירותים של שכבת הקו.",
      "recap": "שכבת הקו לא מקצה כתובות IP.",
      "questionHtml": "איזה שירות אינו שייך לשכבת הקו?",
      "explanationHtml": "הקצאת IP היא עבודה של DHCP ושל שכבת הרשת. זיהוי שגיאות, זיהוי התנגשויות ויצירת מסגרות עם כתובות MAC הם שירותים של שכבת הקו.",
      "recapHtml": "שכבת הקו לא מקצה כתובות IP."
     },
     {
      "id": "C01-Q5",
      "question": "מקבל Ethernet קיבל מסגרת, בדק את ה-CRC ומצא שגיאה. מה קורה בדרך כלל?",
      "options": [
       {
        "id": "a",
        "value": "המסגרת נזרקת, ו-Ethernet עצמו לא מבקש שידור חוזר",
        "type": "text",
        "html": "המסגרת נזרקת, ו-Ethernet עצמו לא מבקש שידור חוזר"
       },
       {
        "id": "b",
        "value": "המקבל שולח ACK שלילי, והשולח משדר מחדש",
        "type": "text",
        "html": "המקבל שולח ACK שלילי, והשולח משדר מחדש"
       },
       {
        "id": "c",
        "value": "המקבל מתקן את השגיאה בעזרת ה-CRC",
        "type": "text",
        "html": "המקבל מתקן את השגיאה בעזרת ה-CRC"
       },
       {
        "id": "d",
        "value": "המסגרת עוברת הלאה, והשגיאה מתוקנת בשכבת הרשת",
        "type": "text",
        "html": "המסגרת עוברת הלאה, והשגיאה מתוקנת בשכבת הרשת"
       }
      ],
      "correctId": "a",
      "explanation": "Ethernet הוא ללא חיבור וללא אמינות: מסגרת פגומה נזרקת, ושחזור אובדן נעשה רק אם שכבה גבוהה, כמו TCP, דואגת לכך. CRC מזהה שגיאה אך אינו מתקן אותה.",
      "recap": "CRC מזהה בלבד. Ethernet לא משדר מחדש.",
      "questionHtml": "מקבל Ethernet קיבל מסגרת, בדק את ה-CRC ומצא שגיאה. מה קורה בדרך כלל?",
      "explanationHtml": "Ethernet הוא ללא חיבור וללא אמינות: מסגרת פגומה נזרקת, ושחזור אובדן נעשה רק אם שכבה גבוהה, כמו TCP, דואגת לכך. CRC מזהה שגיאה אך אינו מתקן אותה.",
      "recapHtml": "CRC מזהה בלבד. Ethernet לא משדר מחדש."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "☯️",
    "title": "ביט זוגיות",
    "goal": "לחשב ביט זוגיות (even ו-odd), לבדוק מילה שהתקבלה, ולדעת אילו שגיאות זוגיות מזהה ואילו לא.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>הדרך הפשוטה ביותר לזהות שגיאה: מוסיפים למילת הנתונים <b>ביט אחד</b>, ביט הזוגיות, כך שמספר האחדות במילה כולה יקבל זוגיות שסוכם מראש.</p>\n<div class=\"lesson-rule\">🔑 <b>שתי שיטות:</b>\n<ul>\n<li><b>Even parity</b>: ביט הזוגיות נקבע כך שמספר האחדות במילה (כולל הביט עצמו) <b>זוגי</b>.</li>\n<li><b>Odd parity</b>: ביט הזוגיות נקבע כך שמספר האחדות <b>אי-זוגי</b>.</li>\n</ul>\n<b>המקבל</b> סופר אחדות במילה שהתקבלה. אם הזוגיות לא כפי שסוכם, יש שגיאה.</div>\n<div class=\"lesson-ex\">נתונים <code>1011001</code>: יש בהם 4 אחדות.<br>\nEven parity: 4 כבר זוגי, לכן ביט הזוגיות הוא <code>0</code> והמילה היא <code>10110010</code>.<br>\nOdd parity: צריך מספר אי-זוגי, לכן ביט הזוגיות הוא <code>1</code> והמילה היא <code>10110011</code>.</div>\n<p>מה זוגיות מזהה? כל היפוך של ביט משנה את הזוגיות של מספר האחדות. היפוך אחד משנה אותה, שני היפוכים מחזירים אותה, שלושה משנים שוב וכן הלאה.</p>\n<div class=\"lesson-rule\">🔑 זוגיות מזהה כל מספר <b>אי-זוגי</b> של ביטים שהתהפכו (1, 3, 5, ...), ו<b>אינה מזהה</b> מספר זוגי (2, 4, ...). היא גם לא יודעת <b>איזה</b> ביט התהפך, ולכן אי אפשר לתקן בעזרתה.</div>\n<div class=\"lesson-trap\">⚠️ הביט הנוסף נספר גם הוא. כדי לבדוק מילה שהתקבלה סופרים את <b>כל</b> האחדות, כולל ביט הזוגיות.</div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "נתונים `1101011`. מהו ביט הזוגיות כשמשתמשים ב-even parity?",
      "options": [
       {
        "id": "a",
        "value": "`1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
       },
       {
        "id": "b",
        "value": "`0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
       },
       {
        "id": "c",
        "value": "`11`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11</code>"
       },
       {
        "id": "d",
        "value": "אי אפשר לדעת בלי מחולל",
        "type": "text",
        "html": "אי אפשר לדעת בלי מחולל"
       }
      ],
      "correctId": "a",
      "explanation": "ב-`1101011` יש 5 אחדות, מספר אי-זוגי. כדי לקבל מספר זוגי צריך להוסיף אחדה, ולכן ביט הזוגיות הוא `1`. `0` היה משאיר 5 אחדות.",
      "recap": "even: משלימים את מספר האחדות לזוגי.",
      "questionHtml": "נתונים <code class=\"tok\" dir=\"ltr\">1101011</code>. מהו ביט הזוגיות כשמשתמשים ב-even parity?",
      "explanationHtml": "ב-<code class=\"tok\" dir=\"ltr\">1101011</code> יש 5 אחדות, מספר אי-זוגי. כדי לקבל מספר זוגי צריך להוסיף אחדה, ולכן ביט הזוגיות הוא <code class=\"tok\" dir=\"ltr\">1</code>. <code class=\"tok\" dir=\"ltr\">0</code> היה משאיר 5 אחדות.",
      "recapHtml": "even: משלימים את מספר האחדות לזוגי."
     },
     {
      "id": "C02-Q2",
      "question": "נתונים `0110100`. מהו ביט הזוגיות כשמשתמשים ב-odd parity?",
      "options": [
       {
        "id": "a",
        "value": "`0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0</code>"
       },
       {
        "id": "b",
        "value": "`1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1</code>"
       },
       {
        "id": "c",
        "value": "`10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10</code>"
       },
       {
        "id": "d",
        "value": "אי אפשר לדעת בלי המילה המלאה",
        "type": "text",
        "html": "אי אפשר לדעת בלי המילה המלאה"
       }
      ],
      "correctId": "a",
      "explanation": "ב-`0110100` יש 3 אחדות, והוא כבר מספר אי-זוגי. ב-odd parity אין צורך להוסיף אחדה, ולכן הביט הוא `0`.",
      "recap": "odd: משלימים את מספר האחדות לאי-זוגי.",
      "questionHtml": "נתונים <code class=\"tok\" dir=\"ltr\">0110100</code>. מהו ביט הזוגיות כשמשתמשים ב-odd parity?",
      "explanationHtml": "ב-<code class=\"tok\" dir=\"ltr\">0110100</code> יש 3 אחדות, והוא כבר מספר אי-זוגי. ב-odd parity אין צורך להוסיף אחדה, ולכן הביט הוא <code class=\"tok\" dir=\"ltr\">0</code>.",
      "recapHtml": "odd: משלימים את מספר האחדות לאי-זוגי."
     },
     {
      "id": "C02-Q3",
      "question": "המשדר והמקבל מסכימים על even parity (הביט האחרון הוא ביט הזוגיות). התקבלה המילה `10110101`. מה המקבל מסיק?",
      "options": [
       {
        "id": "a",
        "value": "זוהתה שגיאה, כי יש 5 אחדות",
        "type": "text",
        "html": "זוהתה שגיאה, כי יש 5 אחדות"
       },
       {
        "id": "b",
        "value": "אין שגיאה, כי יש 5 אחדות",
        "type": "text",
        "html": "אין שגיאה, כי יש 5 אחדות"
       },
       {
        "id": "c",
        "value": "זוהתה שגיאה, כי יש 3 אפסים",
        "type": "text",
        "html": "זוהתה שגיאה, כי יש 3 אפסים"
       },
       {
        "id": "d",
        "value": "אין שגיאה, כי המילה באורך זוגי",
        "type": "text",
        "html": "אין שגיאה, כי המילה באורך זוגי"
       }
      ],
      "correctId": "a",
      "explanation": "ב-`10110101` יש 5 אחדות (מספר אי-זוגי), והמוסכם הוא זוגי. לכן יש שגיאה. אורך המילה ומספר האפסים לא רלוונטיים לבדיקה.",
      "recap": "even: מספר אחדות אי-זוגי = שגיאה.",
      "questionHtml": "המשדר והמקבל מסכימים על even parity (הביט האחרון הוא ביט הזוגיות). התקבלה המילה <code class=\"tok\" dir=\"ltr\">10110101</code>. מה המקבל מסיק?",
      "explanationHtml": "ב-<code class=\"tok\" dir=\"ltr\">10110101</code> יש 5 אחדות (מספר אי-זוגי), והמוסכם הוא זוגי. לכן יש שגיאה. אורך המילה ומספר האפסים לא רלוונטיים לבדיקה.",
      "recapHtml": "even: מספר אחדות אי-זוגי = שגיאה."
     },
     {
      "id": "C02-Q4",
      "question": "נשלחה המילה `10110010` (even parity, חוקית). בדרך התהפכו הביט השני והביט השביעי, והתקבלה `11110000`. מה קורה?",
      "options": [
       {
        "id": "a",
        "value": "המקבל לא מזהה שגיאה, כי נשארו 4 אחדות",
        "type": "text",
        "html": "המקבל לא מזהה שגיאה, כי נשארו 4 אחדות"
       },
       {
        "id": "b",
        "value": "המקבל מזהה שגיאה, כי המילה השתנתה",
        "type": "text",
        "html": "המקבל מזהה שגיאה, כי המילה השתנתה"
       },
       {
        "id": "c",
        "value": "המקבל מזהה את מקום השגיאה ומתקן אותה",
        "type": "text",
        "html": "המקבל מזהה את מקום השגיאה ומתקן אותה"
       },
       {
        "id": "d",
        "value": "המקבל מזהה שגיאה, כי המילה מכילה יותר אפסים",
        "type": "text",
        "html": "המקבל מזהה שגיאה, כי המילה מכילה יותר אפסים"
       }
      ],
      "correctId": "a",
      "explanation": "במילה שהתקבלה יש 4 אחדות, מספר זוגי, כמו בבדיקה של מילה תקינה. שני היפוכים מבטלים זה את זה מבחינת הזוגיות, ולכן השגיאה לא מזוהה. המקבל לא משווה למילה המקורית, הוא רק סופר.",
      "recap": "שני ביטים שהתהפכו: זוגיות לא מזהה.",
      "questionHtml": "נשלחה המילה <code class=\"tok\" dir=\"ltr\">10110010</code> (even parity, חוקית). בדרך התהפכו הביט השני והביט השביעי, והתקבלה <code class=\"tok\" dir=\"ltr\">11110000</code>. מה קורה?",
      "explanationHtml": "במילה שהתקבלה יש 4 אחדות, מספר זוגי, כמו בבדיקה של מילה תקינה. שני היפוכים מבטלים זה את זה מבחינת הזוגיות, ולכן השגיאה לא מזוהה. המקבל לא משווה למילה המקורית, הוא רק סופר.",
      "recapHtml": "שני ביטים שהתהפכו: זוגיות לא מזהה."
     },
     {
      "id": "C02-Q5",
      "question": "ביט זוגיות יחיד מזהה תמיד שגיאה שבה התהפכו בדיוק...",
      "options": [
       {
        "id": "a",
        "value": "3 ביטים",
        "type": "text",
        "html": "3 ביטים"
       },
       {
        "id": "b",
        "value": "2 ביטים",
        "type": "text",
        "html": "2 ביטים"
       },
       {
        "id": "c",
        "value": "4 ביטים",
        "type": "text",
        "html": "4 ביטים"
       },
       {
        "id": "d",
        "value": "אפס ביטים או שניים",
        "type": "text",
        "html": "אפס ביטים או שניים"
       }
      ],
      "correctId": "a",
      "explanation": "מספר אי-זוגי של היפוכים משנה את הזוגיות, ולכן 3 ביטים מזוהים תמיד. 2 ו-4 הם מספרים זוגיים ולכן עלולים לחמוק. האפשרות האחרונה מתארת מקרים שבהם שום דבר לא מזוהה.",
      "recap": "זוגיות מזהה מספר אי-זוגי של היפוכים.",
      "questionHtml": "ביט זוגיות יחיד מזהה תמיד שגיאה שבה התהפכו בדיוק...",
      "explanationHtml": "מספר אי-זוגי של היפוכים משנה את הזוגיות, ולכן 3 ביטים מזוהים תמיד. 2 ו-4 הם מספרים זוגיים ולכן עלולים לחמוק. האפשרות האחרונה מתארת מקרים שבהם שום דבר לא מזוהה.",
      "recapHtml": "זוגיות מזהה מספר אי-זוגי של היפוכים."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🔲",
    "title": "זוגיות דו-ממדית: איתור הביט",
    "goal": "למצוא בטבלת זוגיות דו-ממדית איזה ביט התהפך (שורה ועמודה), ולהסביר מתי אפשר לתקן ומתי רק לזהות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>בזוגיות דו-ממדית מסדרים את הביטים בטבלה ומוסיפים ביט זוגיות <b>לכל שורה</b> (עמודה נוספת מימין) ו<b>לכל עמודה</b> (שורה נוספת למטה). הביט שבפינה מכסה את שורת הבדיקה.</p>\n<div class=\"lesson-rule\">🔑 <b>מתכון לאיתור שגיאה (even parity):</b>\n<ol>\n<li>סופרים אחדות בכל שורה, <b>כולל עמודת הבדיקה</b>. שורה עם מספר אי-זוגי של אחדות נשברה.</li>\n<li>סופרים אחדות בכל עמודה, <b>כולל שורת הבדיקה</b>. עמודה עם מספר אי-זוגי נשברה.</li>\n<li>החיתוך של השורה השבורה והעמודה השבורה הוא הביט שהתהפך. סופרים מ-1, משמאל לימין ומלמעלה למטה, כפי שהטבלה מודפסת.</li>\n</ol></div>\n<div class=\"lesson-ex\">נתונה הטבלה (הביט האחרון בכל שורה הוא ביט הזוגיות שלה, והשורה האחרונה היא שורת הבדיקה):\n<pre>0010 1\n0001 1\n1110 0\n1100 0</pre>\nשורות 1, 2 ו-4 מכילות 2 אחדות כל אחת, אבל שורה 3 מכילה 3 אחדות: היא השבורה. בעמודות 1, 2, 3 ו-5 יש 2 אחדות, ובעמודה 4 יש אחדה אחת: היא השבורה. הביט שהתהפך הוא <b>שורה 3, עמודה 4</b>, ומחזירים אותו ל-0 כדי לתקן.</div>\n<p>מה יוצא כשיש יותר משגיאה אחת?</p>\n<ul>\n<li>שגיאה <b>יחידה</b>: שורה אחת ועמודה אחת נשברות, ולכן <b>מזהים ומתקנים</b>.</li>\n<li>שני ביטים באותה שורה: שתי עמודות נשברות ואף שורה לא. <b>מזהים</b>, אבל אי אפשר לדעת באיזו שורה היו הביטים, ולכן לא מתקנים.</li>\n<li>שני ביטים בשורות ועמודות שונות: שתי שורות ושתי עמודות נשברות, וארבעה חיתוכים אפשריים. מזהים, ולא מתקנים.</li>\n</ul>\n<div class=\"lesson-trap\">⚠️ שגיאה בביט הזוגיות עצמו (בעמודת הבדיקה או בשורת הבדיקה) נראית אותו דבר: שורה אחת ועמודה אחת נשברות, והחיתוך נמצא בעמודה או בשורה האחרונה. סופרים אותן כמו כל עמודה ושורה.</div>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "בטבלה הבאה נעשה even parity דו-ממדי (הביט האחרון בכל שורה הוא ביט הזוגיות שלה, והשורה האחרונה היא שורת הבדיקה). ביט אחד התהפך. איזה?\n```\n1010 0\n0000 1\n0001 1\n1001 0\n```",
      "options": [
       {
        "id": "a",
        "value": "שורה 2, עמודה 3",
        "type": "text",
        "html": "שורה 2, עמודה 3"
       },
       {
        "id": "b",
        "value": "שורה 3, עמודה 4",
        "type": "text",
        "html": "שורה 3, עמודה 4"
       },
       {
        "id": "c",
        "value": "שורה 1, עמודה 2",
        "type": "text",
        "html": "שורה 1, עמודה 2"
       },
       {
        "id": "d",
        "value": "שורה 2, עמודה 1",
        "type": "text",
        "html": "שורה 2, עמודה 1"
       }
      ],
      "correctId": "a",
      "explanation": "רק בשורה 2 (`00001`) יש מספר אי-זוגי של אחדות (אחת). בעמודות, רק בעמודה 3 (`1,0,0,0`) יש אחדה אחת. החיתוך: שורה 2, עמודה 3. בשורה 3 יש שתי אחדות ולכן היא תקינה.",
      "recap": "שורה אי-זוגית וגם עמודה אי-זוגית: החיתוך הוא הביט.",
      "questionHtml": "בטבלה הבאה נעשה even parity דו-ממדי (הביט האחרון בכל שורה הוא ביט הזוגיות שלה, והשורה האחרונה היא שורת הבדיקה). ביט אחד התהפך. איזה?<pre class=\"code-block\" dir=\"ltr\"><code>1010 0\n0000 1\n0001 1\n1001 0</code></pre>",
      "explanationHtml": "רק בשורה 2 (<code class=\"tok\" dir=\"ltr\">00001</code>) יש מספר אי-זוגי של אחדות (אחת). בעמודות, רק בעמודה 3 (<code class=\"tok\" dir=\"ltr\">1,0,0,0</code>) יש אחדה אחת. החיתוך: שורה 2, עמודה 3. בשורה 3 יש שתי אחדות ולכן היא תקינה.",
      "recapHtml": "שורה אי-זוגית וגם עמודה אי-זוגית: החיתוך הוא הביט."
     },
     {
      "id": "C03-Q2",
      "question": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?\n```\n10001 0\n00001 1\n00001 1\n00010 0\n00011 0\n```",
      "options": [
       {
        "id": "a",
        "value": "שורה 4, עמודה 1",
        "type": "text",
        "html": "שורה 4, עמודה 1"
       },
       {
        "id": "b",
        "value": "שורה 4, עמודה 4",
        "type": "text",
        "html": "שורה 4, עמודה 4"
       },
       {
        "id": "c",
        "value": "שורה 1, עמודה 1",
        "type": "text",
        "html": "שורה 1, עמודה 1"
       },
       {
        "id": "d",
        "value": "שורה 5, עמודה 4",
        "type": "text",
        "html": "שורה 5, עמודה 4"
       }
      ],
      "correctId": "a",
      "explanation": "בשורה 4 (`000100`) יש אחדה אחת, ובשאר השורות 2 אחדות, ולכן שורה 4 שבורה. בעמודה 1 (`1,0,0,0,0`) יש אחדה אחת, ובכל שאר העמודות מספר זוגי. החיתוך הוא שורה 4, עמודה 1. אחדה בעמודה 4 של שורה 4 היא נתונים תקינים.",
      "recap": "סופרים גם את שורת הבדיקה ואת עמודת הבדיקה.",
      "questionHtml": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?<pre class=\"code-block\" dir=\"ltr\"><code>10001 0\n00001 1\n00001 1\n00010 0\n00011 0</code></pre>",
      "explanationHtml": "בשורה 4 (<code class=\"tok\" dir=\"ltr\">000100</code>) יש אחדה אחת, ובשאר השורות 2 אחדות, ולכן שורה 4 שבורה. בעמודה 1 (<code class=\"tok\" dir=\"ltr\">1,0,0,0,0</code>) יש אחדה אחת, ובכל שאר העמודות מספר זוגי. החיתוך הוא שורה 4, עמודה 1. אחדה בעמודה 4 של שורה 4 היא נתונים תקינים.",
      "recapHtml": "סופרים גם את שורת הבדיקה ואת עמודת הבדיקה."
     },
     {
      "id": "C03-Q3",
      "question": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?\n```\n1010 1\n0100 1\n1100 0\n0110 0\n0000 0\n```",
      "options": [
       {
        "id": "a",
        "value": "שורה 1, עמודה 2",
        "type": "text",
        "html": "שורה 1, עמודה 2"
       },
       {
        "id": "b",
        "value": "שורה 2, עמודה 2",
        "type": "text",
        "html": "שורה 2, עמודה 2"
       },
       {
        "id": "c",
        "value": "שורה 1, עמודה 5",
        "type": "text",
        "html": "שורה 1, עמודה 5"
       },
       {
        "id": "d",
        "value": "שורה 5, עמודה 2",
        "type": "text",
        "html": "שורה 5, עמודה 2"
       }
      ],
      "correctId": "a",
      "explanation": "בשורה 1 (`10101`) יש 3 אחדות, ובשאר השורות מספר זוגי. בעמודה 2 (`0,1,1,1,0`) יש 3 אחדות, ובשאר העמודות מספר זוגי. החיתוך: שורה 1, עמודה 2.",
      "recap": "סופרים אחדות בכל שורה ובכל עמודה, וחותכים.",
      "questionHtml": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?<pre class=\"code-block\" dir=\"ltr\"><code>1010 1\n0100 1\n1100 0\n0110 0\n0000 0</code></pre>",
      "explanationHtml": "בשורה 1 (<code class=\"tok\" dir=\"ltr\">10101</code>) יש 3 אחדות, ובשאר השורות מספר זוגי. בעמודה 2 (<code class=\"tok\" dir=\"ltr\">0,1,1,1,0</code>) יש 3 אחדות, ובשאר העמודות מספר זוגי. החיתוך: שורה 1, עמודה 2.",
      "recapHtml": "סופרים אחדות בכל שורה ובכל עמודה, וחותכים."
     },
     {
      "id": "C03-Q4",
      "question": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?\n```\n0101 0\n0110 1\n0111 1\n0100 1\n```",
      "options": [
       {
        "id": "a",
        "value": "שורה 2, עמודה 5",
        "type": "text",
        "html": "שורה 2, עמודה 5"
       },
       {
        "id": "b",
        "value": "שורה 2, עמודה 3",
        "type": "text",
        "html": "שורה 2, עמודה 3"
       },
       {
        "id": "c",
        "value": "שורה 4, עמודה 5",
        "type": "text",
        "html": "שורה 4, עמודה 5"
       },
       {
        "id": "d",
        "value": "שורה 2, עמודה 4",
        "type": "text",
        "html": "שורה 2, עמודה 4"
       }
      ],
      "correctId": "a",
      "explanation": "בשורה 2 (`01101`) יש 3 אחדות, ובשאר השורות מספר זוגי. בעמודה 5 (`0,1,1,1`) יש 3 אחדות, ובשאר העמודות מספר זוגי. הביט שהתהפך הוא ביט הזוגיות של שורה 2, בעמודת הבדיקה.",
      "recap": "גם ביט זוגיות יכול להתהפך, והוא נמצא בעמודת או בשורת הבדיקה.",
      "questionHtml": "בטבלה הבאה (even parity דו-ממדי, ביט אחד התהפך) איפה השגיאה?<pre class=\"code-block\" dir=\"ltr\"><code>0101 0\n0110 1\n0111 1\n0100 1</code></pre>",
      "explanationHtml": "בשורה 2 (<code class=\"tok\" dir=\"ltr\">01101</code>) יש 3 אחדות, ובשאר השורות מספר זוגי. בעמודה 5 (<code class=\"tok\" dir=\"ltr\">0,1,1,1</code>) יש 3 אחדות, ובשאר העמודות מספר זוגי. הביט שהתהפך הוא ביט הזוגיות של שורה 2, בעמודת הבדיקה.",
      "recapHtml": "גם ביט זוגיות יכול להתהפך, והוא נמצא בעמודת או בשורת הבדיקה."
     },
     {
      "id": "C03-Q5",
      "question": "מה היתרון של זוגיות דו-ממדית על פני ביט זוגיות יחיד?",
      "options": [
       {
        "id": "a",
        "value": "אפשר לתקן שגיאה בביט יחיד בלי שידור חוזר",
        "type": "text",
        "html": "אפשר לתקן שגיאה בביט יחיד בלי שידור חוזר"
       },
       {
        "id": "b",
        "value": "אפשר לתקן כל שתי שגיאות",
        "type": "text",
        "html": "אפשר לתקן כל שתי שגיאות"
       },
       {
        "id": "c",
        "value": "לא נדרשים ביטי בדיקה נוספים",
        "type": "text",
        "html": "לא נדרשים ביטי בדיקה נוספים"
       },
       {
        "id": "d",
        "value": "אפשר לזהות רק שגיאות בשורת הבדיקה",
        "type": "text",
        "html": "אפשר לזהות רק שגיאות בשורת הבדיקה"
       }
      ],
      "correctId": "a",
      "explanation": "שגיאה בביט יחיד מסמנת שורה אחת ועמודה אחת, ולכן יודעים בדיוק איזה ביט להפוך. שתי שגיאות אפשר לזהות, לא תמיד לתקן. ביטי בדיקה נוספים כן נדרשים (שורה ועמודה שלמות).",
      "recap": "2D: שגיאה יחידה מזוהה ומתוקנת.",
      "questionHtml": "מה היתרון של זוגיות דו-ממדית על פני ביט זוגיות יחיד?",
      "explanationHtml": "שגיאה בביט יחיד מסמנת שורה אחת ועמודה אחת, ולכן יודעים בדיוק איזה ביט להפוך. שתי שגיאות אפשר לזהות, לא תמיד לתקן. ביטי בדיקה נוספים כן נדרשים (שורה ועמודה שלמות).",
      "recapHtml": "2D: שגיאה יחידה מזוהה ומתוקנת."
     },
     {
      "id": "C03-Q6",
      "question": "בטבלה בזוגיות דו-ממדית (even) התהפכו שני ביטים נתונים הנמצאים באותה שורה. מה יראה המקבל?",
      "options": [
       {
        "id": "a",
        "value": "שתי עמודות שבורות ואף שורה שבורה, ולכן יודע שיש שגיאה אך לא היכן",
        "type": "text",
        "html": "שתי עמודות שבורות ואף שורה שבורה, ולכן יודע שיש שגיאה אך לא היכן"
       },
       {
        "id": "b",
        "value": "שורה אחת שבורה ושתי עמודות שבורות",
        "type": "text",
        "html": "שורה אחת שבורה ושתי עמודות שבורות"
       },
       {
        "id": "c",
        "value": "אף שורה ואף עמודה אינן שבורות, ולכן לא תזוהה שגיאה",
        "type": "text",
        "html": "אף שורה ואף עמודה אינן שבורות, ולכן לא תזוהה שגיאה"
       },
       {
        "id": "d",
        "value": "שתי שורות שבורות ועמודה אחת שבורה",
        "type": "text",
        "html": "שתי שורות שבורות ועמודה אחת שבורה"
       }
      ],
      "correctId": "a",
      "explanation": "כל ביט שהתהפך משנה את הזוגיות של העמודה שלו, ושני הביטים בעמודות שונות, ולכן שתי עמודות נשברות. בשורה שבה התהפכו שני ביטים הזוגיות חוזרת למצבה, ולכן אף שורה לא נשברת. השגיאה מזוהה, אך אי אפשר לדעת באיזו שורה היא נמצאת.",
      "recap": "שתי שגיאות באותה שורה: שתי עמודות שבורות, אין שורה.",
      "questionHtml": "בטבלה בזוגיות דו-ממדית (even) התהפכו שני ביטים נתונים הנמצאים באותה שורה. מה יראה המקבל?",
      "explanationHtml": "כל ביט שהתהפך משנה את הזוגיות של העמודה שלו, ושני הביטים בעמודות שונות, ולכן שתי עמודות נשברות. בשורה שבה התהפכו שני ביטים הזוגיות חוזרת למצבה, ולכן אף שורה לא נשברת. השגיאה מזוהה, אך אי אפשר לדעת באיזו שורה היא נמצאת.",
      "recapHtml": "שתי שגיאות באותה שורה: שתי עמודות שבורות, אין שורה."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "📏",
    "title": "מרחק Hamming",
    "goal": "לחשב מרחק Hamming בין מילים ובתוך קוד, לקבוע כמה שגיאות הקוד מזהה ומתקן, ולפענח מילה שהתקבלה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>מרחק Hamming</b> בין שתי מילים באותו אורך הוא מספר המקומות שבהם הן נבדלות. סופרים את מקומות ההבדל, בדומה ל-XOR ואז סופרים אחדות.</p>\n<div class=\"lesson-ex\">המילים <code>10110</code> ו-<code>11100</code> נבדלות במקום השני ובמקום הרביעי, ולכן המרחק ביניהן הוא 2.</div>\n<p>בקוד (קבוצת \"מילים חוקיות\") מה שחשוב הוא <b>המרחק המינימלי</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> בין שני זוגות שונים של מילות הקוד.</p>\n<div class=\"lesson-rule\">🔑 בקוד עם מרחק מינימלי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span>:\n<ul>\n<li>מזהים כל שגיאה של עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">d-1</annotation></semantics></math></span> ביטים (אי אפשר להגיע ממילה חוקית למילה חוקית אחרת בפחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">d</annotation></semantics></math></span> היפוכים).</li>\n<li>מתקנים עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mi>d</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor (d-1)/2 \\rfloor</annotation></semantics></math></span> שגיאות: מפענחים למילת הקוד <b>הקרובה ביותר</b> למילה שהתקבלה.</li>\n</ul></div>\n<div class=\"lesson-ex\">הקוד <code>00000</code>, <code>01011</code>, <code>10101</code>, <code>11110</code>: המרחקים בין הזוגות הם 3, 3, 4, 4, 3, 3, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">d=3</annotation></semantics></math></span>. מזהים שתי שגיאות ומתקנים אחת. אם התקבלה <code>01001</code>, מרחקיה מארבע המילים הם 2, 1, 3, 4, ולכן מפענחים ל-<code>01011</code>.</div>\n<p><b>ביט זוגיות מעלה מרחק.</b> שתי מילים שנבדלות בביט אחד (מרחק 1) מקבלות ביט זוגיות שונה, ולכן אחרי ההוספה הן נבדלות בשני ביטים (מרחק 2). מרחק 2 מספיק לזהות שגיאה בודדת.</p>\n<div class=\"lesson-trap\">⚠️ במרחק 1 היפוך ביט אחד מוביל ישר למילה חוקית אחרת, ולכן השגיאה אינה מזוהה כלל. ואל תבלבלו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">d-1</annotation></semantics></math></span> זה <b>זיהוי</b>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mi>d</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">\\lfloor (d-1)/2 \\rfloor</annotation></semantics></math></span> זה <b>תיקון</b>.</div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "מהו מרחק Hamming בין `10110` ל-`11100`?",
      "options": [
       {
        "id": "a",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "c",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "d",
        "value": "5",
        "type": "text",
        "html": "5"
       }
      ],
      "correctId": "a",
      "explanation": "המילים נבדלות במקום השני (`0` מול `1`) ובמקום הרביעי (`1` מול `0`), ולכן המרחק 2. הערך 5 הוא האורך, לא המרחק.",
      "recap": "מרחק Hamming = מספר מקומות ההבדל.",
      "questionHtml": "מהו מרחק Hamming בין <code class=\"tok\" dir=\"ltr\">10110</code> ל-<code class=\"tok\" dir=\"ltr\">11100</code>?",
      "explanationHtml": "המילים נבדלות במקום השני (<code class=\"tok\" dir=\"ltr\">0</code> מול <code class=\"tok\" dir=\"ltr\">1</code>) ובמקום הרביעי (<code class=\"tok\" dir=\"ltr\">1</code> מול <code class=\"tok\" dir=\"ltr\">0</code>), ולכן המרחק 2. הערך 5 הוא האורך, לא המרחק.",
      "recapHtml": "מרחק Hamming = מספר מקומות ההבדל."
     },
     {
      "id": "C04-Q2",
      "question": "קוד מכיל את ארבע המילים `00000`, ‏`01011`, ‏`10101` ו-`11110`. מהו המרחק המינימלי של הקוד?",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "d",
        "value": "5",
        "type": "text",
        "html": "5"
       }
      ],
      "correctId": "a",
      "explanation": "המרחקים בין הזוגות: `00000`–`01011` הוא 3, ‏`00000`–`10101` הוא 3, ‏`00000`–`11110` הוא 4, ‏`01011`–`10101` הוא 4, ‏`01011`–`11110` הוא 3, ‏`10101`–`11110` הוא 3. המינימום הוא 3.",
      "recap": "d = המינימום על כל זוגות המילים.",
      "questionHtml": "קוד מכיל את ארבע המילים <code class=\"tok\" dir=\"ltr\">00000</code>, ‏<code class=\"tok\" dir=\"ltr\">01011</code>, ‏<code class=\"tok\" dir=\"ltr\">10101</code> ו-<code class=\"tok\" dir=\"ltr\">11110</code>. מהו המרחק המינימלי של הקוד?",
      "explanationHtml": "המרחקים בין הזוגות: <code class=\"tok\" dir=\"ltr\">00000</code>–<code class=\"tok\" dir=\"ltr\">01011</code> הוא 3, ‏<code class=\"tok\" dir=\"ltr\">00000</code>–<code class=\"tok\" dir=\"ltr\">10101</code> הוא 3, ‏<code class=\"tok\" dir=\"ltr\">00000</code>–<code class=\"tok\" dir=\"ltr\">11110</code> הוא 4, ‏<code class=\"tok\" dir=\"ltr\">01011</code>–<code class=\"tok\" dir=\"ltr\">10101</code> הוא 4, ‏<code class=\"tok\" dir=\"ltr\">01011</code>–<code class=\"tok\" dir=\"ltr\">11110</code> הוא 3, ‏<code class=\"tok\" dir=\"ltr\">10101</code>–<code class=\"tok\" dir=\"ltr\">11110</code> הוא 3. המינימום הוא 3.",
      "recapHtml": "d = המינימום על כל זוגות המילים."
     },
     {
      "id": "C04-Q3",
      "question": "לקוד יש מרחק מינימלי 3. כמה שגיאות הוא מזהה תמיד, וכמה הוא מתקן?",
      "options": [
       {
        "id": "a",
        "value": "מזהה 2, מתקן 1",
        "type": "text",
        "html": "מזהה 2, מתקן 1"
       },
       {
        "id": "b",
        "value": "מזהה 3, מתקן 1",
        "type": "text",
        "html": "מזהה 3, מתקן 1"
       },
       {
        "id": "c",
        "value": "מזהה 1, מתקן 2",
        "type": "text",
        "html": "מזהה 1, מתקן 2"
       },
       {
        "id": "d",
        "value": "מזהה 2, מתקן 2",
        "type": "text",
        "html": "מזהה 2, מתקן 2"
       }
      ],
      "correctId": "a",
      "explanation": "זיהוי: $d-1=2$. תיקון: $\\lfloor (3-1)/2 \\rfloor = 1$. שלוש שגיאות יכולות להפוך מילה חוקית לאחרת, ולכן אי אפשר לזהות 3 תמיד.",
      "recap": "זיהוי d−1, תיקון ⌊(d−1)/2⌋.",
      "questionHtml": "לקוד יש מרחק מינימלי 3. כמה שגיאות הוא מזהה תמיד, וכמה הוא מתקן?",
      "explanationHtml": "זיהוי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">d-1=2</annotation></semantics></math></span>. תיקון: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mn>3</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor (3-1)/2 \\rfloor = 1</annotation></semantics></math></span>. שלוש שגיאות יכולות להפוך מילה חוקית לאחרת, ולכן אי אפשר לזהות 3 תמיד.",
      "recapHtml": "זיהוי d−1, תיקון ⌊(d−1)/2⌋."
     },
     {
      "id": "C04-Q4",
      "question": "בקוד `00000`, ‏`01011`, ‏`10101`, ‏`11110` התקבלה המילה `01001`. לאיזו מילת קוד היא תפוענח (הקרובה ביותר)?",
      "options": [
       {
        "id": "a",
        "value": "`01011`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01011</code>"
       },
       {
        "id": "b",
        "value": "`00000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">00000</code>"
       },
       {
        "id": "c",
        "value": "`10101`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10101</code>"
       },
       {
        "id": "d",
        "value": "`11110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11110</code>"
       }
      ],
      "correctId": "a",
      "explanation": "המרחקים של `01001` מארבע מילות הקוד הם: מ-`00000` שניים, מ-`01011` אחד, מ-`10101` שלושה, מ-`11110` ארבעה. המילה הקרובה ביותר היא `01011`.",
      "recap": "מפענחים למילת הקוד הקרובה ביותר.",
      "questionHtml": "בקוד <code class=\"tok\" dir=\"ltr\">00000</code>, ‏<code class=\"tok\" dir=\"ltr\">01011</code>, ‏<code class=\"tok\" dir=\"ltr\">10101</code>, ‏<code class=\"tok\" dir=\"ltr\">11110</code> התקבלה המילה <code class=\"tok\" dir=\"ltr\">01001</code>. לאיזו מילת קוד היא תפוענח (הקרובה ביותר)?",
      "explanationHtml": "המרחקים של <code class=\"tok\" dir=\"ltr\">01001</code> מארבע מילות הקוד הם: מ-<code class=\"tok\" dir=\"ltr\">00000</code> שניים, מ-<code class=\"tok\" dir=\"ltr\">01011</code> אחד, מ-<code class=\"tok\" dir=\"ltr\">10101</code> שלושה, מ-<code class=\"tok\" dir=\"ltr\">11110</code> ארבעה. המילה הקרובה ביותר היא <code class=\"tok\" dir=\"ltr\">01011</code>.",
      "recapHtml": "מפענחים למילת הקוד הקרובה ביותר."
     },
     {
      "id": "C04-Q5",
      "question": "לשתי מילים `1001100` ו-`1001101` (מרחק Hamming 1) מוסיפים בסוף ביט even parity לכל אחת. מהו המרחק ביניהן אחרי ההוספה?",
      "options": [
       {
        "id": "a",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "c",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "a",
      "explanation": "ב-`1001100` יש 3 אחדות, ולכן ביט הזוגיות `1` ונוצרת `10011001`. ב-`1001101` יש 4 אחדות, ולכן הביט `0` ונוצרת `10011010`. המילים נבדלות בשני המקומות האחרונים: מרחק 2, ולכן כל שגיאה בודדת מזוהה.",
      "recap": "ביט זוגיות מעלה מרחק 1 למרחק 2.",
      "questionHtml": "לשתי מילים <code class=\"tok\" dir=\"ltr\">1001100</code> ו-<code class=\"tok\" dir=\"ltr\">1001101</code> (מרחק Hamming 1) מוסיפים בסוף ביט even parity לכל אחת. מהו המרחק ביניהן אחרי ההוספה?",
      "explanationHtml": "ב-<code class=\"tok\" dir=\"ltr\">1001100</code> יש 3 אחדות, ולכן ביט הזוגיות <code class=\"tok\" dir=\"ltr\">1</code> ונוצרת <code class=\"tok\" dir=\"ltr\">10011001</code>. ב-<code class=\"tok\" dir=\"ltr\">1001101</code> יש 4 אחדות, ולכן הביט <code class=\"tok\" dir=\"ltr\">0</code> ונוצרת <code class=\"tok\" dir=\"ltr\">10011010</code>. המילים נבדלות בשני המקומות האחרונים: מרחק 2, ולכן כל שגיאה בודדת מזוהה.",
      "recapHtml": "ביט זוגיות מעלה מרחק 1 למרחק 2."
     },
     {
      "id": "C04-Q6",
      "question": "קוד עם מרחק מינימלי 5. מהו המספר המרבי של שגיאות שהוא יכול לתקן?",
      "options": [
       {
        "id": "a",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "d",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "a",
      "explanation": "$\\lfloor (5-1)/2 \\rfloor = 2$. הערך 4 הוא מספר השגיאות שאפשר לזהות ($d-1$), לא לתקן.",
      "recap": "תיקון = ⌊(d−1)/2⌋, זיהוי = d−1.",
      "questionHtml": "קוד עם מרחק מינימלי 5. מהו המספר המרבי של שגיאות שהוא יכול לתקן?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌊</mo><mo stretchy=\"false\">(</mo><mn>5</mn><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\lfloor (5-1)/2 \\rfloor = 2</annotation></semantics></math></span>. הערך 4 הוא מספר השגיאות שאפשר לזהות (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">d-1</annotation></semantics></math></span>), לא לתקן.",
      "recapHtml": "תיקון = ⌊(d−1)/2⌋, זיהוי = d−1."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🧮",
    "title": "CRC: חישוב השארית",
    "goal": "לחשב שארית CRC בחילוק ארוך מודולו 2 (XOR), עם אורך השארית הנכון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>ב-CRC השולח והמקבל מסכימים מראש על <b>מחולל (generator)</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">r+1</annotation></semantics></math></span> ביטים. השולח מצרף לנתונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> שארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> בת <b><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים</b>, כך שהמסגרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⟨</mo><mi>D</mi><mo separator=\"true\">,</mo><mi>R</mi><mo stretchy=\"false\">⟩</mo></mrow><annotation encoding=\"application/x-tex\">\\langle D,R\\rangle</annotation></semantics></math></span> מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> בלי שארית. החילוק הוא <b>מודולו 2</b>: חיבור וחיסור הם שניהם XOR, בלי נשאים.</p>\n<table><thead><tr><th>XOR</th><th>תוצאה</th></tr></thead>\n<tbody><tr><td><code>0 ⊕ 0</code></td><td><code>0</code></td></tr>\n<tr><td><code>0 ⊕ 1</code></td><td><code>1</code></td></tr>\n<tr><td><code>1 ⊕ 0</code></td><td><code>1</code></td></tr>\n<tr><td><code>1 ⊕ 1</code></td><td><code>0</code></td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 <b>מתכון לחישוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span>:</b>\n<ul>\n<li>מוסיפים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> אפסים בסופו.</li>\n<li>כל עוד נשאר ביט מוביל 1 (בתוך אורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span>): עושים XOR עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> מיושר אליו. אם הביט המוביל הוא 0, פשוט עוברים לביט הבא.</li>\n<li>השארית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> הביטים האחרונים שנותרו, <b>כולל אפסים מובילים</b>.</li>\n</ul></div>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>1101</mn></mrow><annotation encoding=\"application/x-tex\">D=1101</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1011</mn></mrow><annotation encoding=\"application/x-tex\">G=1011</annotation></semantics></math></span>, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">r=3</annotation></semantics></math></span>. מוסיפים 3 אפסים ומקבלים <code>1101000</code>.\n<pre>1101000\n1011\n-------\n0110000\n 1011\n-------\n0011100\n  1011\n-------\n0001010\n   1011\n-------\n0000001</pre>\nהשארית היא <code>001</code>, שלושה ביטים (עם שני אפסים מובילים). המסגרת שנשלחת היא <code>1101001</code>.</div>\n<div class=\"calc-fig\" data-calc='{\"kind\": \"crc\", \"mode\": \"send\", \"D\": \"1101\", \"G\": \"1011\", \"caption\": \"המחשבון מציג את אותו חילוק צעד אחר צעד. אפשר להחליף נתונים ומחולל ולבדוק את עצמכם.\"}'></div>\n<div class=\"lesson-trap\">⚠️ השארית חייבת להיות באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> בדיוק. כתיבת <code>1</code> במקום <code>001</code> היא טעות. ואל תשכחו להוסיף את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> האפסים לפני החילוק.</div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "מהי התוצאה של `1101` XOR `1011` (חיבור או חיסור מודולו 2)?",
      "options": [
       {
        "id": "a",
        "value": "`0110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0110</code>"
       },
       {
        "id": "b",
        "value": "`0010`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0010</code>"
       },
       {
        "id": "c",
        "value": "`11000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11000</code>"
       },
       {
        "id": "d",
        "value": "`1001`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1001</code>"
       }
      ],
      "correctId": "a",
      "explanation": "XOR ביט אחר ביט: `1⊕1=0`, ‏`1⊕0=1`, ‏`0⊕1=1`, ‏`1⊕1=0`, ולכן `0110`. `0010` הוא חיסור רגיל (13−11), ‏`11000` הוא חיבור רגיל (13+11), ו-`1001` הוא AND.",
      "recap": "ב-CRC חיבור וחיסור הם XOR בלי נשא.",
      "questionHtml": "מהי התוצאה של <code class=\"tok\" dir=\"ltr\">1101</code> XOR <code class=\"tok\" dir=\"ltr\">1011</code> (חיבור או חיסור מודולו 2)?",
      "explanationHtml": "XOR ביט אחר ביט: <code class=\"tok\" dir=\"ltr\">1⊕1=0</code>, ‏<code class=\"tok\" dir=\"ltr\">1⊕0=1</code>, ‏<code class=\"tok\" dir=\"ltr\">0⊕1=1</code>, ‏<code class=\"tok\" dir=\"ltr\">1⊕1=0</code>, ולכן <code class=\"tok\" dir=\"ltr\">0110</code>. <code class=\"tok\" dir=\"ltr\">0010</code> הוא חיסור רגיל (13−11), ‏<code class=\"tok\" dir=\"ltr\">11000</code> הוא חיבור רגיל (13+11), ו-<code class=\"tok\" dir=\"ltr\">1001</code> הוא AND.",
      "recapHtml": "ב-CRC חיבור וחיסור הם XOR בלי נשא."
     },
     {
      "id": "C05-Q2",
      "question": "במחולל `10011` משתמשים ב-CRC. כמה אפסים מוסיפים לנתונים לפני החילוק, ומה אורך השארית?",
      "options": [
       {
        "id": "a",
        "value": "מוסיפים 4 אפסים, והשארית באורך 4 ביט",
        "type": "text",
        "html": "מוסיפים 4 אפסים, והשארית באורך 4 ביט"
       },
       {
        "id": "b",
        "value": "מוסיפים 5 אפסים, והשארית באורך 5 ביט",
        "type": "text",
        "html": "מוסיפים 5 אפסים, והשארית באורך 5 ביט"
       },
       {
        "id": "c",
        "value": "מוסיפים 4 אפסים, והשארית באורך 5 ביט",
        "type": "text",
        "html": "מוסיפים 4 אפסים, והשארית באורך 5 ביט"
       },
       {
        "id": "d",
        "value": "מוסיפים 3 אפסים, והשארית באורך 4 ביט",
        "type": "text",
        "html": "מוסיפים 3 אפסים, והשארית באורך 4 ביט"
       }
      ],
      "correctId": "a",
      "explanation": "המחולל בן 5 ביטים, ולכן $r=5-1=4$. מוסיפים $r=4$ אפסים והשארית היא $r=4$ ביטים.",
      "recap": "r = אורך G פחות 1; מוסיפים r אפסים, השארית באורך r.",
      "questionHtml": "במחולל <code class=\"tok\" dir=\"ltr\">10011</code> משתמשים ב-CRC. כמה אפסים מוסיפים לנתונים לפני החילוק, ומה אורך השארית?",
      "explanationHtml": "המחולל בן 5 ביטים, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>5</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">r=5-1=4</annotation></semantics></math></span>. מוסיפים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">r=4</annotation></semantics></math></span> אפסים והשארית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">r=4</annotation></semantics></math></span> ביטים.",
      "recapHtml": "r = אורך G פחות 1; מוסיפים r אפסים, השארית באורך r."
     },
     {
      "id": "C05-Q3",
      "question": "חשבו שארית CRC עבור $D=1011$ ו-$G=101$.",
      "options": [
       {
        "id": "a",
        "value": "`01`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01</code>"
       },
       {
        "id": "b",
        "value": "`10`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10</code>"
       },
       {
        "id": "c",
        "value": "`11`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11</code>"
       },
       {
        "id": "d",
        "value": "`101`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$r=2$, ולכן מחלקים `101100` ב-`101`: ‏`101100` XOR `101000` נותן `000100`, ואז XOR עם `000101` נותן `000001`. השארית היא `01`, שני ביטים. `101` ארוכה מ-$r$.",
      "recap": "אורך השארית = r, כולל אפסים מובילים.",
      "questionHtml": "חשבו שארית CRC עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>1011</mn></mrow><annotation encoding=\"application/x-tex\">D=1011</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>101</mn></mrow><annotation encoding=\"application/x-tex\">G=101</annotation></semantics></math></span>.",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">r=2</annotation></semantics></math></span>, ולכן מחלקים <code class=\"tok\" dir=\"ltr\">101100</code> ב-<code class=\"tok\" dir=\"ltr\">101</code>: ‏<code class=\"tok\" dir=\"ltr\">101100</code> XOR <code class=\"tok\" dir=\"ltr\">101000</code> נותן <code class=\"tok\" dir=\"ltr\">000100</code>, ואז XOR עם <code class=\"tok\" dir=\"ltr\">000101</code> נותן <code class=\"tok\" dir=\"ltr\">000001</code>. השארית היא <code class=\"tok\" dir=\"ltr\">01</code>, שני ביטים. <code class=\"tok\" dir=\"ltr\">101</code> ארוכה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span>.",
      "recapHtml": "אורך השארית = r, כולל אפסים מובילים."
     },
     {
      "id": "C05-Q4",
      "question": "חשבו שארית CRC עבור $D=101110$ ו-$G=1001$.",
      "options": [
       {
        "id": "a",
        "value": "`011`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">011</code>"
       },
       {
        "id": "b",
        "value": "`110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">110</code>"
       },
       {
        "id": "c",
        "value": "`101`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101</code>"
       },
       {
        "id": "d",
        "value": "`001`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">001</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$r=3$, מחלקים `101110000` ב-`1001`. אחרי כל שלבי ה-XOR נשארות `011` בשלושת הביטים האחרונים. הערך `001` הוא תוצאה של טעות בחישוב.",
      "recap": "מוסיפים r אפסים, מחלקים ב-XOR, לוקחים r ביטים אחרונים.",
      "questionHtml": "חשבו שארית CRC עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>101110</mn></mrow><annotation encoding=\"application/x-tex\">D=101110</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1001</mn></mrow><annotation encoding=\"application/x-tex\">G=1001</annotation></semantics></math></span>.",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">r=3</annotation></semantics></math></span>, מחלקים <code class=\"tok\" dir=\"ltr\">101110000</code> ב-<code class=\"tok\" dir=\"ltr\">1001</code>. אחרי כל שלבי ה-XOR נשארות <code class=\"tok\" dir=\"ltr\">011</code> בשלושת הביטים האחרונים. הערך <code class=\"tok\" dir=\"ltr\">001</code> הוא תוצאה של טעות בחישוב.",
      "recapHtml": "מוסיפים r אפסים, מחלקים ב-XOR, לוקחים r ביטים אחרונים."
     },
     {
      "id": "C05-Q5",
      "question": "חשבו שארית CRC עבור $D=11001$ ו-$G=1101$.",
      "options": [
       {
        "id": "a",
        "value": "`010`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">010</code>"
       },
       {
        "id": "b",
        "value": "`101`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101</code>"
       },
       {
        "id": "c",
        "value": "`011`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">011</code>"
       },
       {
        "id": "d",
        "value": "`110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">110</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$r=3$, מחלקים `11001000` ב-`1101`. השארית היא `010`. הערכים `101`, ‏`011` ו-`110` הם תוצאות של טעויות בחילוק או בהיסט של $G$.",
      "recap": "שארית באורך r בדיוק.",
      "questionHtml": "חשבו שארית CRC עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>11001</mn></mrow><annotation encoding=\"application/x-tex\">D=11001</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1101</mn></mrow><annotation encoding=\"application/x-tex\">G=1101</annotation></semantics></math></span>.",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">r=3</annotation></semantics></math></span>, מחלקים <code class=\"tok\" dir=\"ltr\">11001000</code> ב-<code class=\"tok\" dir=\"ltr\">1101</code>. השארית היא <code class=\"tok\" dir=\"ltr\">010</code>. הערכים <code class=\"tok\" dir=\"ltr\">101</code>, ‏<code class=\"tok\" dir=\"ltr\">011</code> ו-<code class=\"tok\" dir=\"ltr\">110</code> הם תוצאות של טעויות בחילוק או בהיסט של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>.",
      "recapHtml": "שארית באורך r בדיוק."
     },
     {
      "id": "C05-Q6",
      "question": "חשבו שארית CRC עבור $D=11010011101100$ ו-$G=1011$.",
      "options": [
       {
        "id": "a",
        "value": "`100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">100</code>"
       },
       {
        "id": "b",
        "value": "`110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">110</code>"
       },
       {
        "id": "c",
        "value": "`011`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">011</code>"
       },
       {
        "id": "d",
        "value": "`1100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">1100</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$r=3$. מחלקים `11010011101100000` ב-`1011` בחילוק XOR ארוך, ונשארות `100`. `1100` ארוכה מ-$r$ ביטים.",
      "recap": "אותו מתכון גם לנתונים ארוכים: XOR בכל פעם שהביט המוביל הוא 1.",
      "questionHtml": "חשבו שארית CRC עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>11010011101100</mn></mrow><annotation encoding=\"application/x-tex\">D=11010011101100</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1011</mn></mrow><annotation encoding=\"application/x-tex\">G=1011</annotation></semantics></math></span>.",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">r=3</annotation></semantics></math></span>. מחלקים <code class=\"tok\" dir=\"ltr\">11010011101100000</code> ב-<code class=\"tok\" dir=\"ltr\">1011</code> בחילוק XOR ארוך, ונשארות <code class=\"tok\" dir=\"ltr\">100</code>. <code class=\"tok\" dir=\"ltr\">1100</code> ארוכה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים.",
      "recapHtml": "אותו מתכון גם לנתונים ארוכים: XOR בכל פעם שהביט המוביל הוא 1."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "📬",
    "title": "CRC: בדיקת מסגרת ויכולות הזיהוי",
    "goal": "לבנות את המסגרת הנשלחת, לבדוק מסגרת שהתקבלה, ולדעת אילו שגיאות CRC מזהה ואילו לא.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>הסיבה שמוסיפים שארית <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> היא שהמסגרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⟨</mo><mi>D</mi><mo separator=\"true\">,</mo><mi>R</mi><mo stretchy=\"false\">⟩</mo></mrow><annotation encoding=\"application/x-tex\">\\langle D,R\\rangle</annotation></semantics></math></span> מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> בלי שארית. מכאן שני תפקידים:</p>\n<div class=\"lesson-rule\">🔑 <b>השולח:</b> שולח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> ולידו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> (את ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> ואת ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> מחברים, בלי האפסים שהוספנו לחישוב).<br>\n<b>המקבל:</b> מחלק את כל המסגרת שהתקבלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>. שארית <code>0</code> (אפסים בלבד): אין שגיאה שזוהתה. שארית שונה מאפס: <b>שגיאה</b>, והמסגרת נזרקת.</div>\n<div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1011</mn></mrow><annotation encoding=\"application/x-tex\">G=1011</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo>=</mo><mn>1101</mn></mrow><annotation encoding=\"application/x-tex\">D=1101</annotation></semantics></math></span> נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mo>=</mo><mn>001</mn></mrow><annotation encoding=\"application/x-tex\">R=001</annotation></semantics></math></span> ולכן נשלחת <code>1101001</code>. אם המקבל מקבל <code>1101001</code>, הוא מחלק ב-<code>1011</code> ומקבל שארית <code>000</code>: תקין. אם התהפך ביט אחד, השארית לא תהיה אפס.</div>\n<p>על מה CRC מגן? כל שגיאה היא מילת שגיאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> (אחדות במקומות שהתהפכו), והמקבל מקבל את המסגרת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">\\oplus E</annotation></semantics></math></span>. כיוון שהמסגרת המקורית מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>, השגיאה <b>לא</b> תזוהה בדיוק כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> עצמה מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>.</p>\n<ul>\n<li>עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> בן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">r+1</annotation></semantics></math></span> ביטים: כל שגיאת <b>burst</b> באורך עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים (רצף שמתחיל ונגמר באחדה) מזוהה תמיד.</li>\n<li>שגיאה ש\"נראית כמו מכפלה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>\", למשל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">E=G</annotation></semantics></math></span> מוזז, היא בדיוק מה שחומק.</li>\n<li>בנוסף ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> נבחרים כך שגם שגיאות של ביט בודד ושל מספר אי-זוגי של ביטים יזוהו.</li>\n</ul>\n<div class=\"lesson-trap\">⚠️ CRC <b>מזהה</b> ואינו מתקן. וגם שארית אפס פירושה \"לא זוהתה שגיאה\", ולא \"ודאי שאין שגיאה\".</div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "המחולל הוא `10011`. התקבלה המסגרת `11010110111110` (14 ביט, נתונים ושארית ביחד). אחרי חילוק ב-`10011` השארית היא `0000`. מה המקבל עושה?",
      "options": [
       {
        "id": "a",
        "value": "מקבל את המסגרת: לא זוהתה שגיאה",
        "type": "text",
        "html": "מקבל את המסגרת: לא זוהתה שגיאה"
       },
       {
        "id": "b",
        "value": "זורק את המסגרת, כי זוהתה שגיאה",
        "type": "text",
        "html": "זורק את המסגרת, כי זוהתה שגיאה"
       },
       {
        "id": "c",
        "value": "מתקן את הביט האחרון",
        "type": "text",
        "html": "מתקן את הביט האחרון"
       },
       {
        "id": "d",
        "value": "מבקש מהשולח לשלוח את `G` מחדש",
        "type": "text",
        "html": "מבקש מהשולח לשלוח את <code class=\"tok\" dir=\"ltr\">G</code> מחדש"
       }
      ],
      "correctId": "a",
      "explanation": "שארית אפס פירושה שהמסגרת מתחלקת ב-$G$, כפי שמסגרת תקינה אמורה להיות. לכן לא זוהתה שגיאה. שארית שונה מאפס הייתה גורמת לזריקה, ו-CRC בכל מקרה לא מתקן.",
      "recap": "שארית 0 אצל המקבל = לא זוהתה שגיאה.",
      "questionHtml": "המחולל הוא <code class=\"tok\" dir=\"ltr\">10011</code>. התקבלה המסגרת <code class=\"tok\" dir=\"ltr\">11010110111110</code> (14 ביט, נתונים ושארית ביחד). אחרי חילוק ב-<code class=\"tok\" dir=\"ltr\">10011</code> השארית היא <code class=\"tok\" dir=\"ltr\">0000</code>. מה המקבל עושה?",
      "explanationHtml": "שארית אפס פירושה שהמסגרת מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>, כפי שמסגרת תקינה אמורה להיות. לכן לא זוהתה שגיאה. שארית שונה מאפס הייתה גורמת לזריקה, ו-CRC בכל מקרה לא מתקן.",
      "recapHtml": "שארית 0 אצל המקבל = לא זוהתה שגיאה."
     },
     {
      "id": "C06-Q2",
      "question": "המחולל הוא `10011`. נשלחה המסגרת `11010110111110`, ובדרך התהפך הביט הרביעי, ולכן התקבלה `11000110111110`. מה המקבל מוצא?",
      "options": [
       {
        "id": "a",
        "value": "שארית `0111` שונה מאפס: זוהתה שגיאה",
        "type": "text",
        "html": "שארית <code class=\"tok\" dir=\"ltr\">0111</code> שונה מאפס: זוהתה שגיאה"
       },
       {
        "id": "b",
        "value": "שארית `0000`: אין שגיאה",
        "type": "text",
        "html": "שארית <code class=\"tok\" dir=\"ltr\">0000</code>: אין שגיאה"
       },
       {
        "id": "c",
        "value": "שארית `0111`, ולכן הוא מתקן את הביט הרביעי",
        "type": "text",
        "html": "שארית <code class=\"tok\" dir=\"ltr\">0111</code>, ולכן הוא מתקן את הביט הרביעי"
       },
       {
        "id": "d",
        "value": "שארית `1000`: אין שגיאה",
        "type": "text",
        "html": "שארית <code class=\"tok\" dir=\"ltr\">1000</code>: אין שגיאה"
       }
      ],
      "correctId": "a",
      "explanation": "חילוק `11000110111110` ב-`10011` נותן שארית `0111`, שונה מאפס, ולכן זוהתה שגיאה והמסגרת נזרקת. CRC לא מציין איזה ביט התהפך ולכן לא מתקן.",
      "recap": "שארית שונה מאפס = שגיאה.",
      "questionHtml": "המחולל הוא <code class=\"tok\" dir=\"ltr\">10011</code>. נשלחה המסגרת <code class=\"tok\" dir=\"ltr\">11010110111110</code>, ובדרך התהפך הביט הרביעי, ולכן התקבלה <code class=\"tok\" dir=\"ltr\">11000110111110</code>. מה המקבל מוצא?",
      "explanationHtml": "חילוק <code class=\"tok\" dir=\"ltr\">11000110111110</code> ב-<code class=\"tok\" dir=\"ltr\">10011</code> נותן שארית <code class=\"tok\" dir=\"ltr\">0111</code>, שונה מאפס, ולכן זוהתה שגיאה והמסגרת נזרקת. CRC לא מציין איזה ביט התהפך ולכן לא מתקן.",
      "recapHtml": "שארית שונה מאפס = שגיאה."
     },
     {
      "id": "C06-Q3",
      "question": "מחולל `110101` (כלומר $r=5$) ונתונים `1010001101`. מהי השארית שמצרפים למסגרת?",
      "options": [
       {
        "id": "a",
        "value": "`01110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01110</code>"
       },
       {
        "id": "b",
        "value": "`10110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10110</code>"
       },
       {
        "id": "c",
        "value": "`11100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">11100</code>"
       },
       {
        "id": "d",
        "value": "`01111`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01111</code>"
       }
      ],
      "correctId": "a",
      "explanation": "מוסיפים 5 אפסים ומחלקים ב-`110101` בחילוק XOR. השארית היא `01110`, חמישה ביטים. המסגרת הנשלחת: `101000110101110`.",
      "recap": "המסגרת = D ואחריו R.",
      "questionHtml": "מחולל <code class=\"tok\" dir=\"ltr\">110101</code> (כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">r=5</annotation></semantics></math></span>) ונתונים <code class=\"tok\" dir=\"ltr\">1010001101</code>. מהי השארית שמצרפים למסגרת?",
      "explanationHtml": "מוסיפים 5 אפסים ומחלקים ב-<code class=\"tok\" dir=\"ltr\">110101</code> בחילוק XOR. השארית היא <code class=\"tok\" dir=\"ltr\">01110</code>, חמישה ביטים. המסגרת הנשלחת: <code class=\"tok\" dir=\"ltr\">101000110101110</code>.",
      "recapHtml": "המסגרת = D ואחריו R."
     },
     {
      "id": "C06-Q4",
      "question": "המחולל הוא `1001`, והמסגרת שנשלחה באורך 10 ביט. איזו מילת שגיאה (אחדה = ביט שהתהפך) גורמת לשגיאה שה-CRC **לא** מזהה?",
      "options": [
       {
        "id": "a",
        "value": "`0001001000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0001001000</code>"
       },
       {
        "id": "b",
        "value": "`0000100000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0000100000</code>"
       },
       {
        "id": "c",
        "value": "`0000000110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0000000110</code>"
       },
       {
        "id": "d",
        "value": "`0000010100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0000010100</code>"
       }
      ],
      "correctId": "a",
      "explanation": "שגיאה לא מזוהה בדיוק כשמילת השגיאה מתחלקת ב-$G$. `0001001000` היא `1001` מוזז, ולכן שארית 0 ולא תזוהה. שאר המילים נותנות שארית שונה מאפס (`100`, ‏`110` ו-`110`), ולכן מזוהות.",
      "recap": "שגיאה שהיא כפולה של G חומקת.",
      "questionHtml": "המחולל הוא <code class=\"tok\" dir=\"ltr\">1001</code>, והמסגרת שנשלחה באורך 10 ביט. איזו מילת שגיאה (אחדה = ביט שהתהפך) גורמת לשגיאה שה-CRC <strong>לא</strong> מזהה?",
      "explanationHtml": "שגיאה לא מזוהה בדיוק כשמילת השגיאה מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>. <code class=\"tok\" dir=\"ltr\">0001001000</code> היא <code class=\"tok\" dir=\"ltr\">1001</code> מוזז, ולכן שארית 0 ולא תזוהה. שאר המילים נותנות שארית שונה מאפס (<code class=\"tok\" dir=\"ltr\">100</code>, ‏<code class=\"tok\" dir=\"ltr\">110</code> ו-<code class=\"tok\" dir=\"ltr\">110</code>), ולכן מזוהות.",
      "recapHtml": "שגיאה שהיא כפולה של G חומקת."
     },
     {
      "id": "C06-Q5",
      "question": "המחולל הוא `10011` ($r=4$). איזו טענה על זיהוי שגיאות נכונה?",
      "options": [
       {
        "id": "a",
        "value": "כל שגיאת burst באורך עד 4 ביטים מזוהה",
        "type": "text",
        "html": "כל שגיאת burst באורך עד 4 ביטים מזוהה"
       },
       {
        "id": "b",
        "value": "כל שגיאת burst באורך 5 ביטים מזוהה",
        "type": "text",
        "html": "כל שגיאת burst באורך 5 ביטים מזוהה"
       },
       {
        "id": "c",
        "value": "ה-CRC מתקן שגיאת burst באורך עד 4 ביטים",
        "type": "text",
        "html": "ה-CRC מתקן שגיאת burst באורך עד 4 ביטים"
       },
       {
        "id": "d",
        "value": "ה-CRC לא מזהה שגיאה בביט בודד",
        "type": "text",
        "html": "ה-CRC לא מזהה שגיאה בביט בודד"
       }
      ],
      "correctId": "a",
      "explanation": "שגיאת burst באורך עד $r$ היא פולינום ממעלה קטנה מ-$r$ ולכן אינה מתחלקת ב-$G$, ומזוהה. ‏burst באורך 5 עלול להיות בדיוק `10011`, וחומק. CRC לא מתקן, וביט בודד מזוהה.",
      "recap": "burst עד r ביטים מזוהה תמיד.",
      "questionHtml": "המחולל הוא <code class=\"tok\" dir=\"ltr\">10011</code> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">r=4</annotation></semantics></math></span>). איזו טענה על זיהוי שגיאות נכונה?",
      "explanationHtml": "שגיאת burst באורך עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> היא פולינום ממעלה קטנה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ולכן אינה מתחלקת ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span>, ומזוהה. ‏burst באורך 5 עלול להיות בדיוק <code class=\"tok\" dir=\"ltr\">10011</code>, וחומק. CRC לא מתקן, וביט בודד מזוהה.",
      "recapHtml": "burst עד r ביטים מזוהה תמיד."
     },
     {
      "id": "C06-Q6",
      "question": "מחולל `101` ונתונים `1011` (השארית היא `01`). איזו מסגרת נשלחת?",
      "options": [
       {
        "id": "a",
        "value": "`101101`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101101</code>"
       },
       {
        "id": "b",
        "value": "`101110`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101110</code>"
       },
       {
        "id": "c",
        "value": "`101111`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101111</code>"
       },
       {
        "id": "d",
        "value": "`101011`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">101011</code>"
       }
      ],
      "correctId": "a",
      "explanation": "מצרפים את השארית `01` לנתונים `1011` ומקבלים `101101`. בדיקה: `101101` מתחלקת ב-`101` בלי שארית. כל אחת מהמסגרות האחרות נותנת שארית שונה מאפס.",
      "recap": "נשלח D ואחריו R, והמסגרת מתחלקת ב-G.",
      "questionHtml": "מחולל <code class=\"tok\" dir=\"ltr\">101</code> ונתונים <code class=\"tok\" dir=\"ltr\">1011</code> (השארית היא <code class=\"tok\" dir=\"ltr\">01</code>). איזו מסגרת נשלחת?",
      "explanationHtml": "מצרפים את השארית <code class=\"tok\" dir=\"ltr\">01</code> לנתונים <code class=\"tok\" dir=\"ltr\">1011</code> ומקבלים <code class=\"tok\" dir=\"ltr\">101101</code>. בדיקה: <code class=\"tok\" dir=\"ltr\">101101</code> מתחלקת ב-<code class=\"tok\" dir=\"ltr\">101</code> בלי שארית. כל אחת מהמסגרות האחרות נותנת שארית שונה מאפס.",
      "recapHtml": "נשלח D ואחריו R, והמסגרת מתחלקת ב-G."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🔀",
    "title": "ARP, מסגרות Ethernet וסוויץ'",
    "goal": "להסביר איך ARP ממפה IP ל-MAC, איזו כתובת MAC נמצאת במסגרת בכל קישור, ואיך סוויץ' לומד ומעביר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>ARP</b> (Address Resolution Protocol) משיב על השאלה: \"ידועה לי כתובת IP של תחנה <b>באותה רשת מקומית</b>, מהי כתובת ה-MAC שלה?\". כל תחנה שומרת <b>טבלת ARP</b> של תשובות שכבר למדה.</p>\n<div class=\"lesson-rule\">🔑 <b>איך זה עובד:</b>\n<ul>\n<li>בקשת ARP נשלחת ב-<b>broadcast</b>: כתובת MAC יעד <code>FF:FF:FF:FF:FF:FF</code> (כל 48 הביטים אחדות), והשאלה \"של מי כתובת ה-IP הזו?\".</li>\n<li>התחנה שהכתובת שלה נשאלת עונה ב-<b>unicast</b> ישירות לשואלת, עם כתובת ה-MAC שלה.</li>\n<li>ARP עובד <b>בתוך רשת אחת בלבד</b>. כדי לשלוח ליעד מחוץ לרשת, התחנה שואלת על ה-MAC של ה-<b>Default Gateway</b>, ולא של היעד.</li>\n</ul></div>\n<div class=\"lesson-ex\"><b>מה כתוב במסגרת?</b> תחנה A שולחת לתחנה B דרך נתב R. בקישור A–R: IP מקור A, ‏IP יעד B, ‏MAC מקור A, ‏MAC יעד R (הממשק של R ברשת של A). בקישור R–B: אותם IP, אבל MAC מקור הוא הממשק של R ברשת של B, ו-MAC יעד הוא B. ה-IP לא משתנה, ה-MAC משתנה בכל קישור.</div>\n<p><b>סוויץ' (switch)</b> עובד בשכבת הקו ומעביר מסגרות לפי MAC. הוא <b>לומד לבד</b> טבלת העברה:</p>\n<div class=\"lesson-rule\">🔑 <b>אלגוריתם הסוויץ':</b> בכל מסגרת שמגיעה, רושמים בטבלה \"כתובת המקור נמצאת בממשק שממנו הגיעה\". אחר כך:\n<ul>\n<li>היעד בטבלה: מעבירים <b>רק</b> לממשק שלו (ואם הוא אותו ממשק שממנו הגיעה, זורקים).</li>\n<li>היעד לא בטבלה (או broadcast): <b>flooding</b>, כלומר לכל הממשקים חוץ מזה שממנו הגיעה.</li>\n</ul></div>\n<div class=\"lesson-trap\">⚠️ לסוויץ' אין כתובות IP בעבודה הרגילה, ולנתב יש טבלת ניתוב (לפי IP). סוויץ' מעביר <b>מסגרות</b>, נתב מעביר <b>חבילות</b>.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "מה המטרה של פרוטוקול ARP?",
      "options": [
       {
        "id": "a",
        "value": "למצוא כתובת MAC של תחנה ברשת המקומית, לפי כתובת ה-IP שלה",
        "type": "text",
        "html": "למצוא כתובת MAC של תחנה ברשת המקומית, לפי כתובת ה-IP שלה"
       },
       {
        "id": "b",
        "value": "למצוא כתובת IP לפי שם של אתר",
        "type": "text",
        "html": "למצוא כתובת IP לפי שם של אתר"
       },
       {
        "id": "c",
        "value": "להקצות כתובת IP לתחנה חדשה",
        "type": "text",
        "html": "להקצות כתובת IP לתחנה חדשה"
       },
       {
        "id": "d",
        "value": "למצוא את הנתיב הקצר ביותר ליעד מרוחק",
        "type": "text",
        "html": "למצוא את הנתיב הקצר ביותר ליעד מרוחק"
       }
      ],
      "correctId": "a",
      "explanation": "ARP ממפה IP ל-MAC בתוך הרשת המקומית. המרה משם לכתובת IP היא DNS, הקצאת כתובת היא DHCP, ובחירת נתיב היא ניתוב.",
      "recap": "ARP: IP ← MAC באותה רשת.",
      "questionHtml": "מה המטרה של פרוטוקול ARP?",
      "explanationHtml": "ARP ממפה IP ל-MAC בתוך הרשת המקומית. המרה משם לכתובת IP היא DNS, הקצאת כתובת היא DHCP, ובחירת נתיב היא ניתוב.",
      "recapHtml": "ARP: IP ← MAC באותה רשת."
     },
     {
      "id": "C07-Q2",
      "question": "מהי כתובת ה-MAC של היעד בבקשת ARP?",
      "options": [
       {
        "id": "a",
        "value": "`FF:FF:FF:FF:FF:FF` (broadcast)",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">FF:FF:FF:FF:FF:FF</code> (broadcast)"
       },
       {
        "id": "b",
        "value": "ה-MAC של התחנה שאת כתובתה מחפשים",
        "type": "text",
        "html": "ה-MAC של התחנה שאת כתובתה מחפשים"
       },
       {
        "id": "c",
        "value": "ה-MAC של ה-Default Gateway",
        "type": "text",
        "html": "ה-MAC של ה-Default Gateway"
       },
       {
        "id": "d",
        "value": "`00:00:00:00:00:00`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">00:00:00:00:00:00</code>"
       }
      ],
      "correctId": "a",
      "explanation": "המשדר עדיין לא יודע את ה-MAC של היעד, ולכן שולח בקשה ב-broadcast. רק התשובה חוזרת ב-unicast.",
      "recap": "בקשת ARP ב-broadcast, תשובה ב-unicast.",
      "questionHtml": "מהי כתובת ה-MAC של היעד בבקשת ARP?",
      "explanationHtml": "המשדר עדיין לא יודע את ה-MAC של היעד, ולכן שולח בקשה ב-broadcast. רק התשובה חוזרת ב-unicast.",
      "recapHtml": "בקשת ARP ב-broadcast, תשובה ב-unicast."
     },
     {
      "id": "C07-Q3",
      "question": "תחנה `10.0.5.20` ברשת `10.0.5.0/24` רוצה לשלוח חבילה ל-`10.0.7.9`. ה-Default Gateway הוא `10.0.5.1`. עבור איזו כתובת IP התחנה תשלח בקשת ARP?",
      "options": [
       {
        "id": "a",
        "value": "`10.0.5.1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.5.1</code>"
       },
       {
        "id": "b",
        "value": "`10.0.7.9`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.7.9</code>"
       },
       {
        "id": "c",
        "value": "`10.0.5.255`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.5.255</code>"
       },
       {
        "id": "d",
        "value": "`10.0.5.20`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10.0.5.20</code>"
       }
      ],
      "correctId": "a",
      "explanation": "היעד `10.0.7.9` אינו ברשת `10.0.5.0/24`, ולכן הצעד הבא הוא ה-Gateway, והתחנה שואלת על ה-MAC של `10.0.5.1`. ל-ARP יש משמעות רק בתוך הרשת המקומית, ו-`10.0.5.255` היא כתובת broadcast.",
      "recap": "יעד מחוץ לרשת: ARP לגבי ה-Gateway.",
      "questionHtml": "תחנה <code class=\"tok\" dir=\"ltr\">10.0.5.20</code> ברשת <code class=\"tok\" dir=\"ltr\">10.0.5.0/24</code> רוצה לשלוח חבילה ל-<code class=\"tok\" dir=\"ltr\">10.0.7.9</code>. ה-Default Gateway הוא <code class=\"tok\" dir=\"ltr\">10.0.5.1</code>. עבור איזו כתובת IP התחנה תשלח בקשת ARP?",
      "explanationHtml": "היעד <code class=\"tok\" dir=\"ltr\">10.0.7.9</code> אינו ברשת <code class=\"tok\" dir=\"ltr\">10.0.5.0/24</code>, ולכן הצעד הבא הוא ה-Gateway, והתחנה שואלת על ה-MAC של <code class=\"tok\" dir=\"ltr\">10.0.5.1</code>. ל-ARP יש משמעות רק בתוך הרשת המקומית, ו-<code class=\"tok\" dir=\"ltr\">10.0.5.255</code> היא כתובת broadcast.",
      "recapHtml": "יעד מחוץ לרשת: ARP לגבי ה-Gateway."
     },
     {
      "id": "C07-Q4",
      "question": "תחנה A שולחת חבילה לתחנה B דרך נתב R (A ו-B ברשתות שונות). מה כתובות המקור והיעד במסגרת בקישור שבין R ל-B?",
      "options": [
       {
        "id": "a",
        "value": "IP: מקור A ויעד B. MAC: מקור הממשק של R ויעד B",
        "type": "text",
        "html": "IP: מקור A ויעד B. MAC: מקור הממשק של R ויעד B"
       },
       {
        "id": "b",
        "value": "IP: מקור R ויעד B. MAC: מקור הממשק של R ויעד B",
        "type": "text",
        "html": "IP: מקור R ויעד B. MAC: מקור הממשק של R ויעד B"
       },
       {
        "id": "c",
        "value": "IP: מקור A ויעד B. MAC: מקור A ויעד B",
        "type": "text",
        "html": "IP: מקור A ויעד B. MAC: מקור A ויעד B"
       },
       {
        "id": "d",
        "value": "IP: מקור A ויעד R. MAC: מקור A ויעד R",
        "type": "text",
        "html": "IP: מקור A ויעד R. MAC: מקור A ויעד R"
       }
      ],
      "correctId": "a",
      "explanation": "כתובות ה-IP לא משתנות לאורך הדרך. כתובות ה-MAC הן של שני הצמתים הסמוכים בקישור: הממשק של R ברשת של B, ו-B. ‏MAC של A כבר לא נמצא בקישור הזה.",
      "recap": "IP נשאר, MAC של הקישור משתנה.",
      "questionHtml": "תחנה A שולחת חבילה לתחנה B דרך נתב R (A ו-B ברשתות שונות). מה כתובות המקור והיעד במסגרת בקישור שבין R ל-B?",
      "explanationHtml": "כתובות ה-IP לא משתנות לאורך הדרך. כתובות ה-MAC הן של שני הצמתים הסמוכים בקישור: הממשק של R ברשת של B, ו-B. ‏MAC של A כבר לא נמצא בקישור הזה.",
      "recapHtml": "IP נשאר, MAC של הקישור משתנה."
     },
     {
      "id": "C07-Q5",
      "question": "לסוויץ' ארבעה ממשקים (1 עד 4) וטבלת ההעברה שלו ריקה. מגיעה מהממשק 1 מסגרת מ-A ל-B. מה הסוויץ' עושה?",
      "options": [
       {
        "id": "a",
        "value": "רושם שהכתובת של A נמצאת בממשק 1, ומעביר את המסגרת לממשקים 2, 3 ו-4",
        "type": "text",
        "html": "רושם שהכתובת של A נמצאת בממשק 1, ומעביר את המסגרת לממשקים 2, 3 ו-4"
       },
       {
        "id": "b",
        "value": "רושם שהכתובת של B נמצאת בממשק 1, ומעביר לממשקים 2, 3 ו-4",
        "type": "text",
        "html": "רושם שהכתובת של B נמצאת בממשק 1, ומעביר לממשקים 2, 3 ו-4"
       },
       {
        "id": "c",
        "value": "זורק את המסגרת, כי היעד לא בטבלה",
        "type": "text",
        "html": "זורק את המסגרת, כי היעד לא בטבלה"
       },
       {
        "id": "d",
        "value": "רושם שהכתובת של A בממשק 1, ומעביר לממשקים 1, 2, 3 ו-4",
        "type": "text",
        "html": "רושם שהכתובת של A בממשק 1, ומעביר לממשקים 1, 2, 3 ו-4"
       }
      ],
      "correctId": "a",
      "explanation": "הסוויץ' לומד את כתובת המקור (A) ואת הממשק שממנו הגיעה. היעד B לא בטבלה, ולכן flooding לכל הממשקים חוץ מזה שממנו הגיעה, כלומר 2, 3 ו-4. אין שליחה חזרה לממשק 1.",
      "recap": "לומדים את המקור; יעד לא ידוע: flooding בלי ממשק הכניסה.",
      "questionHtml": "לסוויץ' ארבעה ממשקים (1 עד 4) וטבלת ההעברה שלו ריקה. מגיעה מהממשק 1 מסגרת מ-A ל-B. מה הסוויץ' עושה?",
      "explanationHtml": "הסוויץ' לומד את כתובת המקור (A) ואת הממשק שממנו הגיעה. היעד B לא בטבלה, ולכן flooding לכל הממשקים חוץ מזה שממנו הגיעה, כלומר 2, 3 ו-4. אין שליחה חזרה לממשק 1.",
      "recapHtml": "לומדים את המקור; יעד לא ידוע: flooding בלי ממשק הכניסה."
     },
     {
      "id": "C07-Q6",
      "question": "המשך לשאלה הקודמת: טבלת הסוויץ' מכילה כעת רק את A בממשק 1. עכשיו מגיעה מהממשק 2 מסגרת מ-B ל-A. מה קורה?",
      "options": [
       {
        "id": "a",
        "value": "המסגרת מועברת רק לממשק 1, והסוויץ' רושם את B בממשק 2",
        "type": "text",
        "html": "המסגרת מועברת רק לממשק 1, והסוויץ' רושם את B בממשק 2"
       },
       {
        "id": "b",
        "value": "המסגרת מועברת לממשקים 1, 3 ו-4, והסוויץ' רושם את B בממשק 2",
        "type": "text",
        "html": "המסגרת מועברת לממשקים 1, 3 ו-4, והסוויץ' רושם את B בממשק 2"
       },
       {
        "id": "c",
        "value": "המסגרת מועברת רק לממשק 2",
        "type": "text",
        "html": "המסגרת מועברת רק לממשק 2"
       },
       {
        "id": "d",
        "value": "המסגרת מועברת רק לממשק 1, ו-B לא נרשם בטבלה",
        "type": "text",
        "html": "המסגרת מועברת רק לממשק 1, ו-B לא נרשם בטבלה"
       }
      ],
      "correctId": "a",
      "explanation": "A נמצא בטבלה בממשק 1, ולכן אין flooding: המסגרת יוצאת רק מממשק 1. הסוויץ' גם לומד את כתובת המקור B בממשק 2.",
      "recap": "יעד ידוע: רק הממשק שלו; המקור תמיד נלמד.",
      "questionHtml": "המשך לשאלה הקודמת: טבלת הסוויץ' מכילה כעת רק את A בממשק 1. עכשיו מגיעה מהממשק 2 מסגרת מ-B ל-A. מה קורה?",
      "explanationHtml": "A נמצא בטבלה בממשק 1, ולכן אין flooding: המסגרת יוצאת רק מממשק 1. הסוויץ' גם לומד את כתובת המקור B בממשק 2.",
      "recapHtml": "יעד ידוע: רק הממשק שלו; המקור תמיד נלמד."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות מבחן על זוגיות דו-ממדית, CRC, מרחק Hamming, כתובות במסגרת והבדל בין סוויץ' לנתב.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>שש שאלות אמיתיות מהמבחנים. לפני שמתחילים, הנה התמצית של מה שלמדתם:</p>\n<div class=\"lesson-rule\">🔑\n<ul>\n<li><b>זוגיות דו-ממדית:</b> שורה אי-זוגית וגם עמודה אי-זוגית (כולל שורת ועמודת הבדיקה): החיתוך הוא הביט שהתהפך.</li>\n<li><b>CRC:</b> מוסיפים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> אפסים, מחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi></mrow><annotation encoding=\"application/x-tex\">G</annotation></semantics></math></span> בחילוק XOR, והשארית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים (עם אפסים מובילים).</li>\n<li><b>Hamming:</b> מרחק 1 בין שתי מילים חוקיות פירושו ששגיאה בביט אחד עלולה לא להתגלות. ביט זוגיות מעלה את המרחק ל-2.</li>\n<li><b>כתובות:</b> ה-IP נשאר מקצה לקצה; כתובת ה-MAC של היעד במסגרת היא של הצעד הבא (ה-Gateway כשהיעד מחוץ לרשת).</li>\n<li><b>סוויץ' מול נתב:</b> סוויץ' מעביר מסגרות לפי MAC וטבלת העברה נלמדת; נתב מעביר חבילות לפי IP.</li>\n</ul></div>\n<div class=\"lesson-trap\">⚠️ במבחן סופרים בזהירות: מסמנים שורות ועמודות, וכותבים את השארית ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים לפני שבוחרים תשובה.</div>\n"
    },
    "questions": [
     {
      "bankId": "25A-A-Q3",
      "recap": "שורה אי-זוגית וגם עמודה אי-זוגית: החיתוך שלהן הוא הביט שהתהפך.",
      "recapHtml": "שורה אי-זוגית וגם עמודה אי-זוגית: החיתוך שלהן הוא הביט שהתהפך."
     },
     {
      "bankId": "25A-B-Q8",
      "recap": "מוסיפים r אפסים, מחלקים ב-XOR, והשארית באורך r.",
      "recapHtml": "מוסיפים r אפסים, מחלקים ב-XOR, והשארית באורך r."
     },
     {
      "bankId": "22S-A-Q10",
      "recap": "מרחק 1 בין מילים חוקיות: היפוך ביט אחד עלול ליצור מילה חוקית אחרת.",
      "recapHtml": "מרחק 1 בין מילים חוקיות: היפוך ביט אחד עלול ליצור מילה חוקית אחרת."
     },
     {
      "bankId": "22S-A-Q11",
      "recap": "ביט זוגיות מעלה את מרחק Hamming ל-2.",
      "recapHtml": "ביט זוגיות מעלה את מרחק Hamming ל-2."
     },
     {
      "bankId": "26A-A-Q14",
      "recap": "יעד מחוץ לרשת: ה-IP נשאר, וה-MAC של היעד במסגרת הוא של ה-Gateway.",
      "recapHtml": "יעד מחוץ לרשת: ה-IP נשאר, וה-MAC של היעד במסגרת הוא של ה-Gateway."
     },
     {
      "bankId": "26A-A-Q10",
      "recap": "סוויץ' מעביר frames, נתב מעביר datagrams.",
      "recapHtml": "סוויץ' מעביר frames, נתב מעביר datagrams."
     }
    ]
   }
  ]
 },
 "tcp": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🤝",
    "title": "לחיצת יד תלת-שלבית",
    "goal": "לדעת איזו הודעה פותחת חיבור TCP ולחשב את ערכי seq ו-ack בשלוש ההודעות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>לפני ששולחים נתונים, TCP מקים <b>חיבור</b> בין שני הצדדים. ההקמה נקראת <b>לחיצת יד תלת-שלבית</b> (3-way handshake) והיא כוללת בדיוק שלוש הודעות.</p>\n    <p>בכל הודעה יש <b>דגלים</b> (<code>SYN</code>, <code>ACK</code>, <code>FIN</code>, <code>RST</code>) ושני מספרים: <b>seq</b> (מספר סידורי של ההודעה) ו-<b>ack</b> (מספר הבית שהשולח מצפה לקבל הלאה). הלקוח בוחר מספר התחלתי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>, והשרת בוחר מספר התחלתי משלו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span>.</p>\n    <table><thead><tr><th>#</th><th>מי שולח</th><th>דגלים</th><th>seq</th><th>ack</th></tr></thead>\n    <tbody>\n    <tr><td>1</td><td>לקוח</td><td><code>SYN</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span></td><td>אין</td></tr>\n    <tr><td>2</td><td>שרת</td><td><code>SYN+ACK</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x+1</annotation></semantics></math></span></td></tr>\n    <tr><td>3</td><td>לקוח</td><td><code>ACK</code></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x+1</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">y+1</annotation></semantics></math></span></td></tr>\n    </tbody></table>\n    <div class=\"lesson-rule\">🔑 ההודעה הראשונה בחיבור היא תמיד <code>SYN</code>. <code>FIN</code> סוגר חיבור, ו-<code>RST</code> מאפס אותו.</div>\n    <div class=\"lesson-rule\">🔑 הדגל <code>SYN</code> <b>צורך מספר סידורי אחד</b>, ולכן האישור עליו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x+1</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>. כך גם ה-<code>SYN</code> של השרת: האישור עליו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">y+1</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-ex\">דוגמה: הלקוח שולח <code>SYN</code> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">seq=1000</annotation></semantics></math></span>. השרת בוחר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>=</mo><mn>5000</mn></mrow><annotation encoding=\"application/x-tex\">y=5000</annotation></semantics></math></span> ועונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>5000</mn></mrow><annotation encoding=\"application/x-tex\">seq=5000</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>1001</mn></mrow><annotation encoding=\"application/x-tex\">ack=1001</annotation></semantics></math></span>. הלקוח מסיים עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1001</mn></mrow><annotation encoding=\"application/x-tex\">seq=1001</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>5001</mn></mrow><annotation encoding=\"application/x-tex\">ack=5001</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-trap\">⚠️ טעות נפוצה: לכתוב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">ack=x</annotation></semantics></math></span>. האישור הוא על הבית <b>הבא</b> שמצפים לו, ו-<code>SYN</code> נחשב לבית אחד.</div>"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מהי ההודעה הראשונה שנשלחת בהקמת חיבור TCP?",
      "options": [
       {
        "id": "a",
        "value": "ACK",
        "type": "text",
        "html": "ACK"
       },
       {
        "id": "b",
        "value": "FIN",
        "type": "text",
        "html": "FIN"
       },
       {
        "id": "c",
        "value": "SYN",
        "type": "text",
        "html": "SYN"
       },
       {
        "id": "d",
        "value": "RST",
        "type": "text",
        "html": "RST"
       }
      ],
      "correctId": "c",
      "explanation": "החיבור נפתח ב-SYN של הלקוח. ACK מופיע רק כאישור למשהו שכבר נשלח, FIN סוגר חיבור קיים ו-RST מאפס אותו.",
      "recap": "הודעה ראשונה בחיבור: SYN",
      "questionHtml": "מהי ההודעה הראשונה שנשלחת בהקמת חיבור TCP?",
      "explanationHtml": "החיבור נפתח ב-SYN של הלקוח. ACK מופיע רק כאישור למשהו שכבר נשלח, FIN סוגר חיבור קיים ו-RST מאפס אותו.",
      "recapHtml": "הודעה ראשונה בחיבור: SYN"
     },
     {
      "id": "C01-Q2",
      "question": "הלקוח שולח SYN עם $seq=1000$. מהו ערך ה-ack בהודעת ה-SYN+ACK של השרת?",
      "options": [
       {
        "id": "a",
        "value": "1000",
        "type": "text",
        "html": "1000"
       },
       {
        "id": "b",
        "value": "999",
        "type": "text",
        "html": "999"
       },
       {
        "id": "c",
        "value": "1002",
        "type": "text",
        "html": "1002"
       },
       {
        "id": "d",
        "value": "1001",
        "type": "text",
        "html": "1001"
       }
      ],
      "correctId": "d",
      "explanation": "ה-SYN צורך מספר אחד, לכן השרת מצפה לבית 1001. התשובה 1000 שוכחת שה-SYN צורך מספר, 999 הפוכה, ו-1002 מוסיפה יותר מדי.",
      "recap": "ack של SYN+ACK הוא x+1",
      "questionHtml": "הלקוח שולח SYN עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">seq=1000</annotation></semantics></math></span>. מהו ערך ה-ack בהודעת ה-SYN+ACK של השרת?",
      "explanationHtml": "ה-SYN צורך מספר אחד, לכן השרת מצפה לבית 1001. התשובה 1000 שוכחת שה-SYN צורך מספר, 999 הפוכה, ו-1002 מוסיפה יותר מדי.",
      "recapHtml": "ack של SYN+ACK הוא x+1"
     },
     {
      "id": "C01-Q3",
      "question": "הלקוח שלח SYN עם $seq=1000$, והשרת ענה SYN+ACK עם $seq=5000$. מהם seq ו-ack בהודעה השלישית של הלקוח?",
      "options": [
       {
        "id": "a",
        "value": "seq = 1001, ack = 5001",
        "type": "text",
        "html": "seq = 1001, ack = 5001"
       },
       {
        "id": "b",
        "value": "seq = 1000, ack = 5000",
        "type": "text",
        "html": "seq = 1000, ack = 5000"
       },
       {
        "id": "c",
        "value": "seq = 5001, ack = 1001",
        "type": "text",
        "html": "seq = 5001, ack = 1001"
       },
       {
        "id": "d",
        "value": "seq = 1001, ack = 5000",
        "type": "text",
        "html": "seq = 1001, ack = 5000"
       }
      ],
      "correctId": "a",
      "explanation": "ה-seq של הלקוח מתקדם ב-1 בגלל ה-SYN שלו (1001), וה-ack מאשר את ה-SYN של השרת (5000+1=5001). באפשרות ג' הצדדים מוחלפים, ובאפשרות ד' ה-ack לא התקדם.",
      "recap": "הודעה 3: seq=x+1 ו-ack=y+1",
      "questionHtml": "הלקוח שלח SYN עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">seq=1000</annotation></semantics></math></span>, והשרת ענה SYN+ACK עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>5000</mn></mrow><annotation encoding=\"application/x-tex\">seq=5000</annotation></semantics></math></span>. מהם seq ו-ack בהודעה השלישית של הלקוח?",
      "explanationHtml": "ה-seq של הלקוח מתקדם ב-1 בגלל ה-SYN שלו (1001), וה-ack מאשר את ה-SYN של השרת (5000+1=5001). באפשרות ג' הצדדים מוחלפים, ובאפשרות ד' ה-ack לא התקדם.",
      "recapHtml": "הודעה 3: seq=x+1 ו-ack=y+1"
     },
     {
      "id": "C01-Q4",
      "question": "איזה דגלים מופיעים בהודעה השנייה של לחיצת היד (מהשרת ללקוח)?",
      "options": [
       {
        "id": "a",
        "value": "SYN בלבד",
        "type": "text",
        "html": "SYN בלבד"
       },
       {
        "id": "b",
        "value": "SYN ו-ACK יחד",
        "type": "text",
        "html": "SYN ו-ACK יחד"
       },
       {
        "id": "c",
        "value": "ACK בלבד",
        "type": "text",
        "html": "ACK בלבד"
       },
       {
        "id": "d",
        "value": "FIN ו-ACK",
        "type": "text",
        "html": "FIN ו-ACK"
       }
      ],
      "correctId": "b",
      "explanation": "השרת גם מאשר את ה-SYN של הלקוח (ACK) וגם פותח את הכיוון שלו עם SYN משלו, לכן שני הדגלים באותה הודעה.",
      "recap": "הודעה 2: SYN+ACK",
      "questionHtml": "איזה דגלים מופיעים בהודעה השנייה של לחיצת היד (מהשרת ללקוח)?",
      "explanationHtml": "השרת גם מאשר את ה-SYN של הלקוח (ACK) וגם פותח את הכיוון שלו עם SYN משלו, לכן שני הדגלים באותה הודעה.",
      "recapHtml": "הודעה 2: SYN+ACK"
     },
     {
      "id": "C01-Q5",
      "question": "בלחיצת יד הלקוח שולח SYN עם $seq=200$ והשרת בוחר $X=7000$. מה הערכים של ack בהודעה 2, seq בהודעה 3 ו-ack בהודעה 3, לפי הסדר?",
      "options": [
       {
        "id": "a",
        "value": "201, 200, 7000",
        "type": "text",
        "html": "201, 200, 7000"
       },
       {
        "id": "b",
        "value": "200, 201, 7001",
        "type": "text",
        "html": "200, 201, 7001"
       },
       {
        "id": "c",
        "value": "201, 201, 7001",
        "type": "text",
        "html": "201, 201, 7001"
       },
       {
        "id": "d",
        "value": "201, 201, 7000",
        "type": "text",
        "html": "201, 201, 7000"
       }
      ],
      "correctId": "c",
      "explanation": "הודעה 2: ack = 200+1 = 201. הודעה 3: seq = 201 (ה-SYN הראשון נספר) ו-ack = 7000+1 = 7001. בכל שאר האפשרויות לפחות מספר אחד לא הוגדל באחד.",
      "recap": "כל SYN מקדם את המספר שלו ב-1",
      "questionHtml": "בלחיצת יד הלקוח שולח SYN עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">seq=200</annotation></semantics></math></span> והשרת בוחר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>=</mo><mn>7000</mn></mrow><annotation encoding=\"application/x-tex\">X=7000</annotation></semantics></math></span>. מה הערכים של ack בהודעה 2, seq בהודעה 3 ו-ack בהודעה 3, לפי הסדר?",
      "explanationHtml": "הודעה 2: ack = 200+1 = 201. הודעה 3: seq = 201 (ה-SYN הראשון נספר) ו-ack = 7000+1 = 7001. בכל שאר האפשרויות לפחות מספר אחד לא הוגדל באחד.",
      "recapHtml": "כל SYN מקדם את המספר שלו ב-1"
     },
     {
      "id": "C01-Q6",
      "question": "מה תפקיד הדגל FIN?",
      "options": [
       {
        "id": "a",
        "value": "לסגור חיבור בצורה מסודרת",
        "type": "text",
        "html": "לסגור חיבור בצורה מסודרת"
       },
       {
        "id": "b",
        "value": "לפתוח חיבור חדש",
        "type": "text",
        "html": "לפתוח חיבור חדש"
       },
       {
        "id": "c",
        "value": "לאשר קבלת נתונים",
        "type": "text",
        "html": "לאשר קבלת נתונים"
       },
       {
        "id": "d",
        "value": "לבקש מהצד השני לשלוח מהר יותר",
        "type": "text",
        "html": "לבקש מהצד השני לשלוח מהר יותר"
       }
      ],
      "correctId": "a",
      "explanation": "FIN מסמן שהצד השולח סיים לשלוח, וכך סוגרים חיבור. פתיחה היא SYN, ואישור הוא ACK.",
      "recap": "FIN סוגר, SYN פותח, RST מאפס",
      "questionHtml": "מה תפקיד הדגל FIN?",
      "explanationHtml": "FIN מסמן שהצד השולח סיים לשלוח, וכך סוגרים חיבור. פתיחה היא SYN, ואישור הוא ACK.",
      "recapHtml": "FIN סוגר, SYN פותח, RST מאפס"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔢",
    "title": "מספרי seq ו-ACK בזרם נתונים",
    "goal": "לחשב את ה-ACK הבא לפי seq ואורך הקטע, ולהבין ש-ACK מצטבר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>TCP סופר <b>בתים</b>, לא קטעים. כל בית בזרם מקבל מספר. בכל קטע (segment) יש שני מספרים:</p>\n    <ul>\n    <li><b>seq</b>: מספר הבית <b>הראשון</b> של הנתונים בקטע.</li>\n    <li><b>ack</b>: מספר הבית <b>הבא שהמקבל מצפה לו</b>.</li>\n    </ul>\n    <div class=\"lesson-rule\">🔑 קטע שמתחיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi></mrow><annotation encoding=\"application/x-tex\">seq</annotation></semantics></math></span> ונושא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">L</annotation></semantics></math></span> בתים מכסה את הבתים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo separator=\"true\">,</mo><mo>…</mo><mo separator=\"true\">,</mo><mi>s</mi><mi>e</mi><mi>q</mi><mo>+</mo><mi>L</mi><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">seq,\\dots,seq+L-1</annotation></semantics></math></span>. ה-ACK עליו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>+</mo><mi>L</mi></mrow><annotation encoding=\"application/x-tex\">seq+L</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-ex\">קטע עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">seq=1000</annotation></semantics></math></span> ו-500 בתים של נתונים מכסה את 1000 עד 1499. המקבל עונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>1500</mn></mrow><annotation encoding=\"application/x-tex\">ack=1500</annotation></semantics></math></span>. אם הקטע הבא מתחיל ב-1500, הוא גם שולח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1500</mn></mrow><annotation encoding=\"application/x-tex\">seq=1500</annotation></semantics></math></span>.</div>\n    <p>אורך של טווח כותבים כך: הבתים 101 עד 300 הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>300</mn><mo>−</mo><mn>101</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">300-101+1=200</annotation></semantics></math></span> בתים, והמקבל עונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>301</mn></mrow><annotation encoding=\"application/x-tex\">ack=301</annotation></semantics></math></span>.</p>\n    <p>ה-ACK הוא <b>מצטבר</b> (cumulative): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>701</mn></mrow><annotation encoding=\"application/x-tex\">ack=701</annotation></semantics></math></span> אומר שכל הבתים עד 700 התקבלו, גם אם ה-ACK על קטע מוקדם יותר אבד בדרך.</p>\n    <div class=\"lesson-trap\">⚠️ אחרי לחיצת היד, הבית הראשון של הנתונים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x+1</annotation></semantics></math></span> (כי ה-SYN צרך את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span>). לכן אם הלקוח התחיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>4999</mn></mrow><annotation encoding=\"application/x-tex\">x=4999</annotation></semantics></math></span>, הנתונים מתחילים ב-5000.</div>"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "קטע TCP נושא 500 בתים ומתחיל ב-$seq=1000$. מהו ה-ack שהמקבל שולח?",
      "options": [
       {
        "id": "a",
        "value": "1001",
        "type": "text",
        "html": "1001"
       },
       {
        "id": "b",
        "value": "1499",
        "type": "text",
        "html": "1499"
       },
       {
        "id": "c",
        "value": "1500",
        "type": "text",
        "html": "1500"
       },
       {
        "id": "d",
        "value": "1501",
        "type": "text",
        "html": "1501"
       }
      ],
      "correctId": "c",
      "explanation": "הקטע מכסה 1000 עד 1499, והבית הבא הוא 1500. התשובה 1499 היא הבית האחרון ולא הבא, ו-1001 נכון רק לקטע של בית אחד.",
      "recap": "ack = seq + אורך",
      "questionHtml": "קטע TCP נושא 500 בתים ומתחיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>1000</mn></mrow><annotation encoding=\"application/x-tex\">seq=1000</annotation></semantics></math></span>. מהו ה-ack שהמקבל שולח?",
      "explanationHtml": "הקטע מכסה 1000 עד 1499, והבית הבא הוא 1500. התשובה 1499 היא הבית האחרון ולא הבא, ו-1001 נכון רק לקטע של בית אחד.",
      "recapHtml": "ack = seq + אורך"
     },
     {
      "id": "C02-Q2",
      "question": "המקבל קיבל ברציפות את הבתים 1 עד 400. מהו ה-ack שהוא שולח?",
      "options": [
       {
        "id": "a",
        "value": "400",
        "type": "text",
        "html": "400"
       },
       {
        "id": "b",
        "value": "401",
        "type": "text",
        "html": "401"
       },
       {
        "id": "c",
        "value": "399",
        "type": "text",
        "html": "399"
       },
       {
        "id": "d",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "b",
      "explanation": "ה-ack הוא הבית הבא שמצפים לו: 400+1=401. הערך 400 הוא הבית האחרון שהתקבל, לא הבא.",
      "recap": "ack = הבית האחרון שהתקבל + 1",
      "questionHtml": "המקבל קיבל ברציפות את הבתים 1 עד 400. מהו ה-ack שהוא שולח?",
      "explanationHtml": "ה-ack הוא הבית הבא שמצפים לו: 400+1=401. הערך 400 הוא הבית האחרון שהתקבל, לא הבא.",
      "recapHtml": "ack = הבית האחרון שהתקבל + 1"
     },
     {
      "id": "C02-Q3",
      "question": "שלושה קטעים של 100 בתים כל אחד נשלחים ברצף: $seq=301$, $seq=401$, $seq=501$. כולם מגיעים בסדר. מהו ה-ack אחרי הקטע השלישי?",
      "options": [
       {
        "id": "a",
        "value": "600",
        "type": "text",
        "html": "600"
       },
       {
        "id": "b",
        "value": "501",
        "type": "text",
        "html": "501"
       },
       {
        "id": "c",
        "value": "700",
        "type": "text",
        "html": "700"
       },
       {
        "id": "d",
        "value": "601",
        "type": "text",
        "html": "601"
       }
      ],
      "correctId": "d",
      "explanation": "הקטע האחרון מכסה 501 עד 600, ולכן הבית הבא הוא 601. הערך 600 שוכח את ה-1, ו-501 הוא ה-ack אחרי הקטע השני.",
      "recap": "ack על קטע אחרון = seq שלו + אורכו",
      "questionHtml": "שלושה קטעים של 100 בתים כל אחד נשלחים ברצף: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>301</mn></mrow><annotation encoding=\"application/x-tex\">seq=301</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>401</mn></mrow><annotation encoding=\"application/x-tex\">seq=401</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>501</mn></mrow><annotation encoding=\"application/x-tex\">seq=501</annotation></semantics></math></span>. כולם מגיעים בסדר. מהו ה-ack אחרי הקטע השלישי?",
      "explanationHtml": "הקטע האחרון מכסה 501 עד 600, ולכן הבית הבא הוא 601. הערך 600 שוכח את ה-1, ו-501 הוא ה-ack אחרי הקטע השני.",
      "recapHtml": "ack על קטע אחרון = seq שלו + אורכו"
     },
     {
      "id": "C02-Q4",
      "question": "המקבל שולח $ack=701$. מה זה אומר?",
      "options": [
       {
        "id": "a",
        "value": "רק בית 701 התקבל",
        "type": "text",
        "html": "רק בית 701 התקבל"
       },
       {
        "id": "b",
        "value": "כל הבתים עד 700 התקבלו, והוא מצפה ל-701",
        "type": "text",
        "html": "כל הבתים עד 700 התקבלו, והוא מצפה ל-701"
       },
       {
        "id": "c",
        "value": "בית 701 אבד",
        "type": "text",
        "html": "בית 701 אבד"
       },
       {
        "id": "d",
        "value": "התקבלו 701 קטעים",
        "type": "text",
        "html": "התקבלו 701 קטעים"
       }
      ],
      "correctId": "b",
      "explanation": "ACK מצטבר: כל מה שלפני 701 התקבל, ו-701 הוא הבית הבא. TCP סופר בתים ולא קטעים, ולכן 701 אינו מספר קטעים.",
      "recap": "ack=n אומר שהבתים עד n-1 התקבלו",
      "questionHtml": "המקבל שולח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>701</mn></mrow><annotation encoding=\"application/x-tex\">ack=701</annotation></semantics></math></span>. מה זה אומר?",
      "explanationHtml": "ACK מצטבר: כל מה שלפני 701 התקבל, ו-701 הוא הבית הבא. TCP סופר בתים ולא קטעים, ולכן 701 אינו מספר קטעים.",
      "recapHtml": "ack=n אומר שהבתים עד n-1 התקבלו"
     },
     {
      "id": "C02-Q5",
      "question": "מה סופר מספר ה-seq ב-TCP?",
      "options": [
       {
        "id": "a",
        "value": "קטעים",
        "type": "text",
        "html": "קטעים"
       },
       {
        "id": "b",
        "value": "חבילות IP",
        "type": "text",
        "html": "חבילות IP"
       },
       {
        "id": "c",
        "value": "בתים",
        "type": "text",
        "html": "בתים"
       },
       {
        "id": "d",
        "value": "הודעות ACK",
        "type": "text",
        "html": "הודעות ACK"
       }
      ],
      "correctId": "c",
      "explanation": "המספור הוא לפי בתים של הזרם: seq הוא מספר הבית הראשון בקטע.",
      "recap": "seq סופר בתים",
      "questionHtml": "מה סופר מספר ה-seq ב-TCP?",
      "explanationHtml": "המספור הוא לפי בתים של הזרם: seq הוא מספר הבית הראשון בקטע.",
      "recapHtml": "seq סופר בתים"
     },
     {
      "id": "C02-Q6",
      "question": "הלקוח פתח חיבור עם $x=4999$. הוא שולח 300 בתים של נתונים מיד אחרי לחיצת היד. מהו ה-ack של השרת עליהם?",
      "options": [
       {
        "id": "a",
        "value": "5299",
        "type": "text",
        "html": "5299"
       },
       {
        "id": "b",
        "value": "5300",
        "type": "text",
        "html": "5300"
       },
       {
        "id": "c",
        "value": "5000",
        "type": "text",
        "html": "5000"
       },
       {
        "id": "d",
        "value": "5301",
        "type": "text",
        "html": "5301"
       }
      ],
      "correctId": "b",
      "explanation": "הנתונים מתחילים ב-$x+1=5000$ ומכסים 5000 עד 5299, לכן הבית הבא הוא 5300. אם מתחילים ב-4999 מקבלים 5299, והתשובה 5301 סופרת בית מיותר.",
      "recap": "אחרי SYN הנתונים מתחילים ב-x+1",
      "questionHtml": "הלקוח פתח חיבור עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>=</mo><mn>4999</mn></mrow><annotation encoding=\"application/x-tex\">x=4999</annotation></semantics></math></span>. הוא שולח 300 בתים של נתונים מיד אחרי לחיצת היד. מהו ה-ack של השרת עליהם?",
      "explanationHtml": "הנתונים מתחילים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>5000</mn></mrow><annotation encoding=\"application/x-tex\">x+1=5000</annotation></semantics></math></span> ומכסים 5000 עד 5299, לכן הבית הבא הוא 5300. אם מתחילים ב-4999 מקבלים 5299, והתשובה 5301 סופרת בית מיותר.",
      "recapHtml": "אחרי SYN הנתונים מתחילים ב-x+1"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "📉",
    "title": "אובדן קטעים וקבלת ACK כפול",
    "goal": "לחשב את רצף ה-ACK כשקטע אובד, ולזהות מתי נשלח ACK כפול ומתי נדרש timeout.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>ה-ACK הוא תמיד על הבית <b>הבא החסר</b> ברצף. אם קטע אובד והקטעים שאחריו מגיעים, המקבל שומר אותם אצלו, אבל הרצף לא התקדם, ולכן הוא שולח שוב את <b>אותו</b> ACK. זה נקרא <b>ACK כפול</b> (duplicate ACK).</p>\n    <div class=\"lesson-ex\">כל קטע הוא 100 בתים, והבתים מתחילים ב-1. הקטעים: 1-100, 101-200, 201-300, 301-400. הקטע 201-300 אובד.\n    <br>אחרי 1-100: ack=101. אחרי 101-200: ack=201. אחרי 301-400 (מחוץ לסדר): ack=<b>201</b> שוב.</div>\n    <p>כשהקטע החסר מגיע סוף סוף (נשלח שוב), הרצף מתמלא והמקבל קופץ ישר למספר הבא אחרי כל מה ששמר.</p>\n    <div class=\"lesson-rule\">🔑 <b>Fast retransmit:</b> שלושה ACK כפולים (כלומר שלושה קטעים שהגיעו אחרי החסר) הם סימן שהקטע אבד, והשולח שולח אותו מיד בלי לחכות.</div>\n    <p>אם אין קטעים אחרי החסר (למשל הקטע האחרון אבד), לא נוצרים ACK כפולים. אז השולח מחכה לטיימר, ומתרחש <b>timeout</b> (תם הזמן בלי ACK) ורק אז הוא שולח שוב. זה אות חמור יותר משלושה ACK כפולים, כי לא הגיע שום דבר.</p>\n    <div class=\"lesson-trap\">⚠️ ACK כפול הוא לא ACK שמתקדם. ספרו נכון: \"כמה ACK כפולים\" הוא מספר ה-ACK שחוזרים על הערך הראשון, לא כולל אותו.</div>"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "הקטעים נשלחים בגודל 100 בתים ומתחילים ב-1: 1-100, 101-200, 201-300, 301-400, 401-500. הקטע 201-300 אובד, והשאר מגיעים. מהם ה-ACK של ארבעת הקטעים שהגיעו, לפי סדר ההגעה?",
      "options": [
       {
        "id": "a",
        "value": "101, 201, 301, 401",
        "type": "text",
        "html": "101, 201, 301, 401"
       },
       {
        "id": "b",
        "value": "101, 201, 201, 201",
        "type": "text",
        "html": "101, 201, 201, 201"
       },
       {
        "id": "c",
        "value": "101, 201, 401, 501",
        "type": "text",
        "html": "101, 201, 401, 501"
       },
       {
        "id": "d",
        "value": "101, 201, 201, 501",
        "type": "text",
        "html": "101, 201, 201, 501"
       }
      ],
      "correctId": "b",
      "explanation": "אחרי 1-100 ה-ack הוא 101, ואחרי 101-200 הוא 201. אחר כך מגיעים 301-400 ו-401-500 אבל 201 חסר, ולכן שני ה-ACK האחרונים הם 201 שוב. כל התשובות האחרות מתקדמות על אף שיש חור ברצף.",
      "recap": "חור ברצף = ACK על הבית החסר",
      "questionHtml": "הקטעים נשלחים בגודל 100 בתים ומתחילים ב-1: 1-100, 101-200, 201-300, 301-400, 401-500. הקטע 201-300 אובד, והשאר מגיעים. מהם ה-ACK של ארבעת הקטעים שהגיעו, לפי סדר ההגעה?",
      "explanationHtml": "אחרי 1-100 ה-ack הוא 101, ואחרי 101-200 הוא 201. אחר כך מגיעים 301-400 ו-401-500 אבל 201 חסר, ולכן שני ה-ACK האחרונים הם 201 שוב. כל התשובות האחרות מתקדמות על אף שיש חור ברצף.",
      "recapHtml": "חור ברצף = ACK על הבית החסר"
     },
     {
      "id": "C03-Q2",
      "question": "שישה קטעים של 100 בתים מתחילים ב-1. הקטע השני (101-200) אובד, ושאר החמישה מגיעים בסדר. כמה ACK כפולים מקבל השולח (לא כולל ה-ACK הראשון, 101)?",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "4",
        "type": "text",
        "html": "4"
       }
      ],
      "correctId": "d",
      "explanation": "מגיעים הקטעים 1, 3, 4, 5 ו-6. ה-ACK של הקטע הראשון הוא 101 (לא כפול), ואחריו ארבעה קטעים (3, 4, 5, 6) מחזירים 101 שוב. כלומר 4 כפולים, והשלישי כבר מפעיל fast retransmit.",
      "recap": "כל קטע אחרי החסר מוסיף ACK כפול אחד",
      "questionHtml": "שישה קטעים של 100 בתים מתחילים ב-1. הקטע השני (101-200) אובד, ושאר החמישה מגיעים בסדר. כמה ACK כפולים מקבל השולח (לא כולל ה-ACK הראשון, 101)?",
      "explanationHtml": "מגיעים הקטעים 1, 3, 4, 5 ו-6. ה-ACK של הקטע הראשון הוא 101 (לא כפול), ואחריו ארבעה קטעים (3, 4, 5, 6) מחזירים 101 שוב. כלומר 4 כפולים, והשלישי כבר מפעיל fast retransmit.",
      "recapHtml": "כל קטע אחרי החסר מוסיף ACK כפול אחד"
     },
     {
      "id": "C03-Q3",
      "question": "באותו תרחיש (שישה קטעים של 100 בתים שמתחילים ב-1, השני אובד), הקטע 101-200 נשלח שוב ומגיע. מהו ה-ack שהמקבל שולח עכשיו?",
      "options": [
       {
        "id": "a",
        "value": "201",
        "type": "text",
        "html": "201"
       },
       {
        "id": "b",
        "value": "601",
        "type": "text",
        "html": "601"
       },
       {
        "id": "c",
        "value": "101",
        "type": "text",
        "html": "101"
       },
       {
        "id": "d",
        "value": "701",
        "type": "text",
        "html": "701"
       }
      ],
      "correctId": "b",
      "explanation": "אחרי שהחור מתמלא הרצף מגיע עד הבית 600 (שישה קטעים, 600 בתים), והבית הבא הוא 601. 201 היה נכון רק אילו המקבל לא שמר את הקטעים המאוחרים.",
      "recap": "אחרי מילוי החור ה-ack קופץ לסוף הרצף",
      "questionHtml": "באותו תרחיש (שישה קטעים של 100 בתים שמתחילים ב-1, השני אובד), הקטע 101-200 נשלח שוב ומגיע. מהו ה-ack שהמקבל שולח עכשיו?",
      "explanationHtml": "אחרי שהחור מתמלא הרצף מגיע עד הבית 600 (שישה קטעים, 600 בתים), והבית הבא הוא 601. 201 היה נכון רק אילו המקבל לא שמר את הקטעים המאוחרים.",
      "recapHtml": "אחרי מילוי החור ה-ack קופץ לסוף הרצף"
     },
     {
      "id": "C03-Q4",
      "question": "מה מעיד קבלת שלושה ACK כפולים?",
      "options": [
       {
        "id": "a",
        "value": "שהקטע החסר אבד, אבל קטעים מאוחרים יותר עדיין מגיעים",
        "type": "text",
        "html": "שהקטע החסר אבד, אבל קטעים מאוחרים יותר עדיין מגיעים"
       },
       {
        "id": "b",
        "value": "שהרשת מנותקת לגמרי",
        "type": "text",
        "html": "שהרשת מנותקת לגמרי"
       },
       {
        "id": "c",
        "value": "שהמקבל מלא ואין לו מקום",
        "type": "text",
        "html": "שהמקבל מלא ואין לו מקום"
       },
       {
        "id": "d",
        "value": "שהחיבור נסגר",
        "type": "text",
        "html": "שהחיבור נסגר"
       }
      ],
      "correctId": "a",
      "explanation": "כל ACK כפול נוצר מקטע שהגיע אחרי החור, ולכן הרשת עדיין מעבירה חבילות, ורק קטע אחד אבד. רשת מנותקת הייתה גורמת ל-timeout. מקום במאגר המקבל הוא עניין של בקרת זרימה.",
      "recap": "3 ACK כפולים: קטע אחד אבד, שאר הרשת פעילה",
      "questionHtml": "מה מעיד קבלת שלושה ACK כפולים?",
      "explanationHtml": "כל ACK כפול נוצר מקטע שהגיע אחרי החור, ולכן הרשת עדיין מעבירה חבילות, ורק קטע אחד אבד. רשת מנותקת הייתה גורמת ל-timeout. מקום במאגר המקבל הוא עניין של בקרת זרימה.",
      "recapHtml": "3 ACK כפולים: קטע אחד אבד, שאר הרשת פעילה"
     },
     {
      "id": "C03-Q5",
      "question": "השולח שולח חמישה קטעים, והקטע האחרון אבד. אחריו אין קטעים נוספים. מה יגרום לשליחה חוזרת שלו?",
      "options": [
       {
        "id": "a",
        "value": "שלושה ACK כפולים",
        "type": "text",
        "html": "שלושה ACK כפולים"
       },
       {
        "id": "b",
        "value": "timeout",
        "type": "text",
        "html": "timeout"
       },
       {
        "id": "c",
        "value": "הודעת FIN",
        "type": "text",
        "html": "הודעת FIN"
       },
       {
        "id": "d",
        "value": "ACK מתקדם מהמקבל",
        "type": "text",
        "html": "ACK מתקדם מהמקבל"
       }
      ],
      "correctId": "b",
      "explanation": "אין קטעים אחרי החסר, ולכן אין ACK כפולים. רק הטיימר יכול לזהות את האובדן.",
      "recap": "אין קטעים אחרי החסר: רק timeout",
      "questionHtml": "השולח שולח חמישה קטעים, והקטע האחרון אבד. אחריו אין קטעים נוספים. מה יגרום לשליחה חוזרת שלו?",
      "explanationHtml": "אין קטעים אחרי החסר, ולכן אין ACK כפולים. רק הטיימר יכול לזהות את האובדן.",
      "recapHtml": "אין קטעים אחרי החסר: רק timeout"
     },
     {
      "id": "C03-Q6",
      "question": "הקטעים הם 1-100, 101-200 ו-201-300. הם מגיעים בסדר הזה: 1-100, אחר כך 201-300, ואחר כך 101-200. מהם שלושת ה-ACK לפי סדר ההגעה?",
      "options": [
       {
        "id": "a",
        "value": "101, 101, 301",
        "type": "text",
        "html": "101, 101, 301"
       },
       {
        "id": "b",
        "value": "101, 301, 301",
        "type": "text",
        "html": "101, 301, 301"
       },
       {
        "id": "c",
        "value": "101, 201, 301",
        "type": "text",
        "html": "101, 201, 301"
       },
       {
        "id": "d",
        "value": "101, 101, 201",
        "type": "text",
        "html": "101, 101, 201"
       }
      ],
      "correctId": "a",
      "explanation": "אחרי 1-100 ה-ack הוא 101. הקטע 201-300 מגיע לפני 101-200, אז ה-ack נשאר 101 (ACK כפול). כשמגיע 101-200 הרצף מתמלא עד 300, ו-ack הוא 301.",
      "recap": "קטע מחוץ לסדר לא מקדם את ה-ack",
      "questionHtml": "הקטעים הם 1-100, 101-200 ו-201-300. הם מגיעים בסדר הזה: 1-100, אחר כך 201-300, ואחר כך 101-200. מהם שלושת ה-ACK לפי סדר ההגעה?",
      "explanationHtml": "אחרי 1-100 ה-ack הוא 101. הקטע 201-300 מגיע לפני 101-200, אז ה-ack נשאר 101 (ACK כפול). כשמגיע 101-200 הרצף מתמלא עד 300, ו-ack הוא 301.",
      "recapHtml": "קטע מחוץ לסדר לא מקדם את ה-ack"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🚰",
    "title": "בקרת זרימה: חלון המקבל rwnd",
    "goal": "להבדיל בין בקרת זרימה לבקרת עומס, ולחשב כמה השולח רשאי לשלוח.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>ל-TCP שני מנגנונים נפרדים שמגבילים את השולח, ולכל אחד יש חלון משלו:</p>\n    <table><thead><tr><th>מנגנון</th><th>מגן על</th><th>חלון</th></tr></thead>\n    <tbody>\n    <tr><td><b>בקרת זרימה</b> (flow control)</td><td>המקבל, שלא יוצף</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">rwnd</annotation></semantics></math></span>: המקום הפנוי במאגר המקבל, והמקבל מפרסם אותו</td></tr>\n    <tr><td><b>בקרת עומס</b> (congestion control)</td><td>הרשת: נתבים ומתגים</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span>: השולח קובע לפי אובדן שהוא רואה</td></tr>\n    </tbody></table>\n    <div class=\"lesson-rule\">🔑 השולח רשאי להחזיק באוויר (שלח ועדיין לא קיבל אישור) לכל היותר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo separator=\"true\">,</mo><mtext> </mtext><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\min(cwnd,\\,rwnd)</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-ex\">אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">rwnd=8</annotation></semantics></math></span> סגמנטים ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=20</annotation></semantics></math></span>, אפשר לשלוח 8. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">rwnd=30</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=12</annotation></semantics></math></span>, אפשר לשלוח 12. תמיד הקטן מבין השניים.</div>\n    <p><b>גודל החלון</b> קובע כמה נתונים אפשר לשלוח לפני שמגיע אישור. חלון גדול מנצל את הקו טוב יותר. הקצב המשוער הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>⋅</mo><mi>M</mi><mi>S</mi><mi>S</mi></mrow><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\dfrac{cwnd\\cdot MSS}{RTT}</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>S</mi><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">MSS</annotation></semantics></math></span> הוא גודל סגמנט בבתים. כדי לקבל ביטים כופלים ב-8.</p>\n    <div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=20</annotation></semantics></math></span> סגמנטים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>S</mi><mi>S</mi><mo>=</mo><mn>1460</mn></mrow><annotation encoding=\"application/x-tex\">MSS=1460</annotation></semantics></math></span> בתים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=100\\,ms</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mn>20</mn><mo>⋅</mo><mn>1460</mn><mo>⋅</mo><mn>8</mn></mrow><mn>0.1</mn></mfrac></mstyle><mo>=</mo><mn>2,336,000</mn></mrow><annotation encoding=\"application/x-tex\">\\dfrac{20\\cdot1460\\cdot8}{0.1}=2{,}336{,}000</annotation></semantics></math></span> ביטים בשנייה, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2.336</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">2.336\\,Mbps</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-trap\">⚠️ בקרת זרימה לא נועדה להגן על נתבים. את זה עושה בקרת עומס. ול-UDP אין שום אחד מהשניים: הוא שולח בלי להתחשב במקבל.</div>"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "את מי מגנה בקרת הזרימה (flow control) של TCP?",
      "options": [
       {
        "id": "a",
        "value": "את הנתבים בדרך",
        "type": "text",
        "html": "את הנתבים בדרך"
       },
       {
        "id": "b",
        "value": "את המקבל מפני הצפה",
        "type": "text",
        "html": "את המקבל מפני הצפה"
       },
       {
        "id": "c",
        "value": "את המתגים ברשת",
        "type": "text",
        "html": "את המתגים ברשת"
       },
       {
        "id": "d",
        "value": "את השולח מפני אובדן",
        "type": "text",
        "html": "את השולח מפני אובדן"
       }
      ],
      "correctId": "b",
      "explanation": "המקבל מפרסם rwnd שאומר כמה מקום פנוי יש לו, והשולח לא עובר אותו. נתבים ומתגים מוגנים על ידי בקרת עומס.",
      "recap": "בקרת זרימה = הגנה על המקבל",
      "questionHtml": "את מי מגנה בקרת הזרימה (flow control) של TCP?",
      "explanationHtml": "המקבל מפרסם rwnd שאומר כמה מקום פנוי יש לו, והשולח לא עובר אותו. נתבים ומתגים מוגנים על ידי בקרת עומס.",
      "recapHtml": "בקרת זרימה = הגנה על המקבל"
     },
     {
      "id": "C04-Q2",
      "question": "$rwnd=8$ סגמנטים ו-$cwnd=20$ סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      "options": [
       {
        "id": "a",
        "value": "20",
        "type": "text",
        "html": "20"
       },
       {
        "id": "b",
        "value": "28",
        "type": "text",
        "html": "28"
       },
       {
        "id": "c",
        "value": "12",
        "type": "text",
        "html": "12"
       },
       {
        "id": "d",
        "value": "8",
        "type": "text",
        "html": "8"
       }
      ],
      "correctId": "d",
      "explanation": "הגבלה היא $\\min(20,8)=8$. המקבל לא יכול לקלוט יותר מ-8, גם אם הרשת מאפשרת 20.",
      "recap": "חלון אפקטיבי = min(cwnd, rwnd)",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">rwnd=8</annotation></semantics></math></span> סגמנטים ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=20</annotation></semantics></math></span> סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      "explanationHtml": "הגבלה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>20</mn><mo separator=\"true\">,</mo><mn>8</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">\\min(20,8)=8</annotation></semantics></math></span>. המקבל לא יכול לקלוט יותר מ-8, גם אם הרשת מאפשרת 20.",
      "recapHtml": "חלון אפקטיבי = min(cwnd, rwnd)"
     },
     {
      "id": "C04-Q3",
      "question": "$rwnd=30$ סגמנטים ו-$cwnd=12$ סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      "options": [
       {
        "id": "a",
        "value": "12",
        "type": "text",
        "html": "12"
       },
       {
        "id": "b",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "c",
        "value": "42",
        "type": "text",
        "html": "42"
       },
       {
        "id": "d",
        "value": "18",
        "type": "text",
        "html": "18"
       }
      ],
      "correctId": "a",
      "explanation": "$\\min(12,30)=12$. הפעם הרשת היא ההגבלה, והמקבל פנוי. הסכום 42 והפרש 18 אינם משמעותיים.",
      "recap": "תמיד לוקחים את הקטן",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>30</mn></mrow><annotation encoding=\"application/x-tex\">rwnd=30</annotation></semantics></math></span> סגמנטים ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=12</annotation></semantics></math></span> סגמנטים. כמה סגמנטים השולח רשאי להחזיק באוויר?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>30</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">\\min(12,30)=12</annotation></semantics></math></span>. הפעם הרשת היא ההגבלה, והמקבל פנוי. הסכום 42 והפרש 18 אינם משמעותיים.",
      "recapHtml": "תמיד לוקחים את הקטן"
     },
     {
      "id": "C04-Q4",
      "question": "$cwnd=20$ סגמנטים, כל סגמנט 1460 בתים, ו-$RTT=100\\,ms$. מהו הקצב המשוער $\\dfrac{cwnd\\cdot MSS}{RTT}$ ?",
      "options": [
       {
        "id": "a",
        "value": "292 Kbps",
        "type": "text",
        "html": "292 Kbps"
       },
       {
        "id": "b",
        "value": "29.2 Mbps",
        "type": "text",
        "html": "29.2 Mbps"
       },
       {
        "id": "c",
        "value": "2.336 Mbps",
        "type": "text",
        "html": "2.336 Mbps"
       },
       {
        "id": "d",
        "value": "233.6 Kbps",
        "type": "text",
        "html": "233.6 Kbps"
       }
      ],
      "correctId": "c",
      "explanation": "$20\\cdot1460\\cdot8=233{,}600$ ביטים בחלון, וחלקי $0.1$ שנייה נותן $2{,}336{,}000$ ביטים בשנייה. התשובה 233.6 Kbps שוכחת לחלק ב-RTT (מחלקים ב-0.1 ולא מכפילים).",
      "recap": "קצב = cwnd כפול MSS בביטים, חלקי RTT",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=20</annotation></semantics></math></span> סגמנטים, כל סגמנט 1460 בתים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi><mi>T</mi><mi>T</mi><mo>=</mo><mn>100</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">RTT=100\\,ms</annotation></semantics></math></span>. מהו הקצב המשוער <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mstyle scriptlevel=\"0\" displaystyle=\"true\"><mfrac><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>⋅</mo><mi>M</mi><mi>S</mi><mi>S</mi></mrow><mrow><mi>R</mi><mi>T</mi><mi>T</mi></mrow></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\dfrac{cwnd\\cdot MSS}{RTT}</annotation></semantics></math></span> ?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mo>⋅</mo><mn>1460</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>233,600</mn></mrow><annotation encoding=\"application/x-tex\">20\\cdot1460\\cdot8=233{,}600</annotation></semantics></math></span> ביטים בחלון, וחלקי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn></mrow><annotation encoding=\"application/x-tex\">0.1</annotation></semantics></math></span> שנייה נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2,336,000</mn></mrow><annotation encoding=\"application/x-tex\">2{,}336{,}000</annotation></semantics></math></span> ביטים בשנייה. התשובה 233.6 Kbps שוכחת לחלק ב-RTT (מחלקים ב-0.1 ולא מכפילים).",
      "recapHtml": "קצב = cwnd כפול MSS בביטים, חלקי RTT"
     },
     {
      "id": "C04-Q5",
      "question": "האם ל-UDP יש בקרת זרימה?",
      "options": [
       {
        "id": "a",
        "value": "כן, בדיוק כמו ב-TCP",
        "type": "text",
        "html": "כן, בדיוק כמו ב-TCP"
       },
       {
        "id": "b",
        "value": "כן, אבל רק בקרת עומס",
        "type": "text",
        "html": "כן, אבל רק בקרת עומס"
       },
       {
        "id": "c",
        "value": "לא, הוא שולח בלי לבדוק את המקבל",
        "type": "text",
        "html": "לא, הוא שולח בלי לבדוק את המקבל"
       },
       {
        "id": "d",
        "value": "כן, אם הסגמנט גדול מ-MTU",
        "type": "text",
        "html": "כן, אם הסגמנט גדול מ-MTU"
       }
      ],
      "correctId": "c",
      "explanation": "UDP הוא פרוטוקול פשוט: אין אישורים, אין חלון ואין בקרת זרימה או עומס.",
      "recap": "ל-UDP אין בקרת זרימה",
      "questionHtml": "האם ל-UDP יש בקרת זרימה?",
      "explanationHtml": "UDP הוא פרוטוקול פשוט: אין אישורים, אין חלון ואין בקרת זרימה או עומס.",
      "recapHtml": "ל-UDP אין בקרת זרימה"
     },
     {
      "id": "C04-Q6",
      "question": "מה מגינה עליו בקרת העומס (congestion control)?",
      "options": [
       {
        "id": "a",
        "value": "על מאגר המקבל בלבד",
        "type": "text",
        "html": "על מאגר המקבל בלבד"
       },
       {
        "id": "b",
        "value": "על הרשת, כלומר נתבים ומתגים",
        "type": "text",
        "html": "על הרשת, כלומר נתבים ומתגים"
       },
       {
        "id": "c",
        "value": "על הפורט של התהליך",
        "type": "text",
        "html": "על הפורט של התהליך"
       },
       {
        "id": "d",
        "value": "על כתובת ה-IP",
        "type": "text",
        "html": "על כתובת ה-IP"
       }
      ],
      "correctId": "b",
      "explanation": "בקרת עומס מונעת העמסה על נתבים ומתגים ברשת. המקבל מוגן על ידי בקרת זרימה, ופורטים וכתובות אינם קשורים לכך.",
      "recap": "בקרת עומס = הגנה על הרשת",
      "questionHtml": "מה מגינה עליו בקרת העומס (congestion control)?",
      "explanationHtml": "בקרת עומס מונעת העמסה על נתבים ומתגים ברשת. המקבל מוגן על ידי בקרת זרימה, ופורטים וכתובות אינם קשורים לכך.",
      "recapHtml": "בקרת עומס = הגנה על הרשת"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "📈",
    "title": "Slow Start ו-Congestion Avoidance",
    "goal": "לחשב את cwnd בכל סבב (RTT) כש-ssthresh נתון, ולדעת באיזה שלב נמצאים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>בקרת העומס מגבילה את השולח ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span>, מספר הסגמנטים שמותר להחזיק באוויר. מודדים אותו ביחידות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>S</mi><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">MSS</annotation></semantics></math></span> (סגמנט אחד), ובודקים אותו אחת לסבב (<b>RTT</b>): בכל סבב שולחים חלון שלם ומחכים לאישורים.</p>\n    <p>יש שני שלבים, והסף ביניהם הוא <b><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span></b> (slow-start threshold):</p>\n    <table><thead><tr><th>שלב</th><th>מתי</th><th>מה קורה לכל סבב</th></tr></thead>\n    <tbody>\n    <tr><td><b>Slow Start</b></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>&lt;</mo><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">cwnd \\lt ssthresh</annotation></semantics></math></span>. התחלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span></td><td>החלון <b>מוכפל</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16,\\dots</annotation></semantics></math></span> (גידול מעריכי)</td></tr>\n    <tr><td><b>Congestion Avoidance</b></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>≥</mo><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">cwnd\\ge ssthresh</annotation></semantics></math></span></td><td>החלון גדל ב-<b>1</b> בלבד (גידול ליניארי)</td></tr>\n    </tbody></table>\n    <div class=\"lesson-rule\">🔑 ב-Slow Start מכפילים, אבל לא עוברים את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span>: אם ההכפלה הייתה עוברת אותו, עוצרים בדיוק עליו וממשיכים ליניארית.</div>\n    <div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=16</annotation></semantics></math></span>: הערכים בסבבים 1 עד 8 הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>17</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mn>19</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16,17,18,19</annotation></semantics></math></span>. עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>12</mn><mo separator=\"true\">,</mo><mn>13</mn><mo separator=\"true\">,</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,12,13,14</annotation></semantics></math></span> (במקום 16 עוצרים ב-12).</div>\n    <p>למה מתחילים לאט? כדי לא להציף את הרשת בבת אחת, ובכל זאת להגיע מהר (מעריכית) לקצב שהרשת נושאת. זה \"מנגנון Slow Start\".</p>\n    <div class=\"lesson-trap\">⚠️ השם \"Slow\" מטעה: זה גידול מהיר (מעריכי). האיטי הוא Congestion Avoidance (+1 בכל סבב).</div>"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "החיבור מתחיל עם $cwnd=1$ בסבב 1 ו-$ssthresh$ גדול מאוד. מהו $cwnd$ בסבב 5?",
      "options": [
       {
        "id": "a",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "b",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "c",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "d",
        "value": "32",
        "type": "text",
        "html": "32"
       }
      ],
      "correctId": "c",
      "explanation": "ב-Slow Start מכפילים בכל סבב: 1, 2, 4, 8, 16. בסבב 5 הערך הוא 16. התשובה 5 היא גידול ליניארי, ו-32 שייך לסבב 6.",
      "recap": "Slow Start: 1, 2, 4, 8, 16, 32",
      "questionHtml": "החיבור מתחיל עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 1 ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span> גדול מאוד. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 5?",
      "explanationHtml": "ב-Slow Start מכפילים בכל סבב: 1, 2, 4, 8, 16. בסבב 5 הערך הוא 16. התשובה 5 היא גידול ליניארי, ו-32 שייך לסבב 6.",
      "recapHtml": "Slow Start: 1, 2, 4, 8, 16, 32"
     },
     {
      "id": "C05-Q2",
      "question": "$ssthresh=16$ ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 8?",
      "options": [
       {
        "id": "a",
        "value": "19",
        "type": "text",
        "html": "19"
       },
       {
        "id": "b",
        "value": "128",
        "type": "text",
        "html": "128"
       },
       {
        "id": "c",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "d",
        "value": "20",
        "type": "text",
        "html": "20"
       }
      ],
      "correctId": "a",
      "explanation": "הערכים הם 1, 2, 4, 8, 16 (סבבים 1 עד 5), ואז Congestion Avoidance: 17, 18, 19 בסבבים 6, 7, 8. התשובה 128 ממשיכה להכפיל, ו-16 הוא ערך סבב 5.",
      "recap": "אחרי ssthresh מוסיפים 1 לסבב",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=16</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 1. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 8?",
      "explanationHtml": "הערכים הם 1, 2, 4, 8, 16 (סבבים 1 עד 5), ואז Congestion Avoidance: 17, 18, 19 בסבבים 6, 7, 8. התשובה 128 ממשיכה להכפיל, ו-16 הוא ערך סבב 5.",
      "recapHtml": "אחרי ssthresh מוסיפים 1 לסבב"
     },
     {
      "id": "C05-Q3",
      "question": "$ssthresh=12$ ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 7?",
      "options": [
       {
        "id": "a",
        "value": "14",
        "type": "text",
        "html": "14"
       },
       {
        "id": "b",
        "value": "64",
        "type": "text",
        "html": "64"
       },
       {
        "id": "c",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "d",
        "value": "16",
        "type": "text",
        "html": "16"
       }
      ],
      "correctId": "a",
      "explanation": "1, 2, 4, 8 ואז ההכפלה הייתה נותנת 16 שעובר את 12, לכן עוצרים ב-12 (סבב 5). אחר כך 13 בסבב 6 ו-14 בסבב 7.",
      "recap": "ההכפלה נעצרת על ssthresh",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 1. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 7?",
      "explanationHtml": "1, 2, 4, 8 ואז ההכפלה הייתה נותנת 16 שעובר את 12, לכן עוצרים ב-12 (סבב 5). אחר כך 13 בסבב 6 ו-14 בסבב 7.",
      "recapHtml": "ההכפלה נעצרת על ssthresh"
     },
     {
      "id": "C05-Q4",
      "question": "$ssthresh=16$ ו-$cwnd=20$ בסבב הנוכחי, בלי אובדן. באיזה שלב TCP נמצא, ומה יהיה $cwnd$ בסבב הבא?",
      "options": [
       {
        "id": "a",
        "value": "Slow Start, חלון 40",
        "type": "text",
        "html": "Slow Start, חלון 40"
       },
       {
        "id": "b",
        "value": "Congestion Avoidance, חלון 21",
        "type": "text",
        "html": "Congestion Avoidance, חלון 21"
       },
       {
        "id": "c",
        "value": "Slow Start, חלון 21",
        "type": "text",
        "html": "Slow Start, חלון 21"
       },
       {
        "id": "d",
        "value": "Congestion Avoidance, חלון 40",
        "type": "text",
        "html": "Congestion Avoidance, חלון 40"
       }
      ],
      "correctId": "b",
      "explanation": "כש-$cwnd\\ge ssthresh$ (20 מול 16) נמצאים ב-Congestion Avoidance, וגדלים ב-1: 21. הכפלה ל-40 הייתה נכונה רק ב-Slow Start.",
      "recap": "cwnd ≥ ssthresh: מוסיפים 1",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=16</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=20</annotation></semantics></math></span> בסבב הנוכחי, בלי אובדן. באיזה שלב TCP נמצא, ומה יהיה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב הבא?",
      "explanationHtml": "כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>≥</mo><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">cwnd\\ge ssthresh</annotation></semantics></math></span> (20 מול 16) נמצאים ב-Congestion Avoidance, וגדלים ב-1: 21. הכפלה ל-40 הייתה נכונה רק ב-Slow Start.",
      "recapHtml": "cwnd ≥ ssthresh: מוסיפים 1"
     },
     {
      "id": "C05-Q5",
      "question": "מהי מטרת מנגנון ה-Slow Start?",
      "options": [
       {
        "id": "a",
        "value": "להשאיר את החלון קבוע בכל החיבור",
        "type": "text",
        "html": "להשאיר את החלון קבוע בכל החיבור"
       },
       {
        "id": "b",
        "value": "להגדיל את החלון בהדרגה, כדי לא להציף את הרשת בבת אחת, אך עדיין להגיע מהר לקצב סביר",
        "type": "text",
        "html": "להגדיל את החלון בהדרגה, כדי לא להציף את הרשת בבת אחת, אך עדיין להגיע מהר לקצב סביר"
       },
       {
        "id": "c",
        "value": "להבטיח שאף חבילה לא תאבד",
        "type": "text",
        "html": "להבטיח שאף חבילה לא תאבד"
       },
       {
        "id": "d",
        "value": "להקטין את החלון ל-1 בכל סבב",
        "type": "text",
        "html": "להקטין את החלון ל-1 בכל סבב"
       }
      ],
      "correctId": "b",
      "explanation": "מתחילים קטן ומכפילים, כך שמגיעים מהר לקצב הרשת בלי קפיצה מיידית לקצב המרבי. הוא לא מבטיח היעדר אובדן והחלון לא קבוע.",
      "recap": "Slow Start: התחלה זהירה, גידול מעריכי",
      "questionHtml": "מהי מטרת מנגנון ה-Slow Start?",
      "explanationHtml": "מתחילים קטן ומכפילים, כך שמגיעים מהר לקצב הרשת בלי קפיצה מיידית לקצב המרבי. הוא לא מבטיח היעדר אובדן והחלון לא קבוע.",
      "recapHtml": "Slow Start: התחלה זהירה, גידול מעריכי"
     },
     {
      "id": "C05-Q6",
      "question": "$ssthresh$ גדול מאוד, ו-$cwnd=1$ בסבב 1. מהו $cwnd$ בסבב 10?",
      "options": [
       {
        "id": "a",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "b",
        "value": "100",
        "type": "text",
        "html": "100"
       },
       {
        "id": "c",
        "value": "1024",
        "type": "text",
        "html": "1024"
       },
       {
        "id": "d",
        "value": "512",
        "type": "text",
        "html": "512"
       }
      ],
      "correctId": "d",
      "explanation": "בסבב $n$ הערך הוא $2^{n-1}$, ולכן בסבב 10 הערך הוא $2^9=512$. התשובה 1024 היא $2^{10}$, כלומר סבב 11.",
      "recap": "בסבב n ב-Slow Start: 2 בחזקת n-1",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span> גדול מאוד, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 1. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 10?",
      "explanationHtml": "בסבב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> הערך הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{n-1}</annotation></semantics></math></span>, ולכן בסבב 10 הערך הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>9</mn></msup><mo>=</mo><mn>512</mn></mrow><annotation encoding=\"application/x-tex\">2^9=512</annotation></semantics></math></span>. התשובה 1024 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>10</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{10}</annotation></semantics></math></span>, כלומר סבב 11.",
      "recapHtml": "בסבב n ב-Slow Start: 2 בחזקת n-1"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "⚡",
    "title": "אירועי אובדן: Timeout מול 3 ACK כפולים",
    "goal": "לחשב את ssthresh ואת cwnd אחרי timeout או אחרי שלושה ACK כפולים, ב-Tahoe וב-Reno.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>TCP מזהה עומס רק לפי <b>אובדן</b>: או <b>timeout</b>, או <b>שלושה ACK כפולים</b>. מצב שבו ACK מגיע מהר, או שהקו פנוי, אינו אות עומס ולא מקטינים בגללו חלון.</p>\n    <p>כשמתגלה אובדן והחלון היה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>W</mi></mrow><annotation encoding=\"application/x-tex\">W</annotation></semantics></math></span>, תמיד קודם כל מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mo stretchy=\"false\">⌊</mo><mi>W</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo></mrow><annotation encoding=\"application/x-tex\">ssthresh=\\lfloor W/2\\rfloor</annotation></semantics></math></span>. ההבדל הוא במה קורה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span>:</p>\n    <table><thead><tr><th>אירוע</th><th>Tahoe</th><th>Reno</th></tr></thead>\n    <tbody>\n    <tr><td><b>Timeout</b></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>, חוזרים ל-Slow Start</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>, חוזרים ל-Slow Start</td></tr>\n    <tr><td><b>3 ACK כפולים</b></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>, Slow Start</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">cwnd=ssthresh</annotation></semantics></math></span>, ממשיכים ישר ב-Congestion Avoidance</td></tr>\n    </tbody></table>\n    <div class=\"lesson-rule\">🔑 שלושה ACK כפולים הם אות <b>קל</b>: קטעים עדיין מגיעים. לכן Reno רק מקטין לחצי וממשיך. Timeout הוא אות <b>חמור</b>: לא הגיע דבר, ולכן מתחילים מ-1.</div>\n    <div class=\"lesson-ex\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>W</mi><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">W=24</annotation></semantics></math></span>. אחרי timeout: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>. אחרי 3 ACK כפולים ב-Reno: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=12</annotation></semantics></math></span>. ב-Tahoe: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>.</div>\n    <p>מעקב מלא: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=8</annotation></semantics></math></span>, ובסבבים 1 עד 8 החלון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn><mo separator=\"true\">,</mo><mn>10</mn><mo separator=\"true\">,</mo><mn>11</mn><mo separator=\"true\">,</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,9,10,11,12</annotation></semantics></math></span>. בסבב 8 קורה timeout. אז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=6</annotation></semantics></math></span> ובסבבים 9 עד 13: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,6,7</annotation></semantics></math></span> (Slow Start עד 6, ואז ליניארי). אילו זה היה 3 ACK כפולים ב-Reno, סבבים 9 עד 12 היו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">6,7,8,9</annotation></semantics></math></span>.</p>\n    <p>בבחינה מקובל לפשט: מתעלמים מהתוספת של 3 סגמנטים ש-Reno מוסיף בזמן ההתאוששות.</p>\n    <div class=\"lesson-trap\">⚠️ <b>קריסת חלון</b> (window collapse) היא ירידה חדה ל-1, וקורית כשיש הרבה שגיאות או עומס גבוה. ברשת ריקה החלון דווקא רק גדל.</div>"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "$cwnd=24$ ומתרחש timeout. מה הערכים אחרי האירוע?",
      "options": [
       {
        "id": "a",
        "value": "ssthresh = 12, cwnd = 12",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 12"
       },
       {
        "id": "b",
        "value": "ssthresh = 24, cwnd = 1",
        "type": "text",
        "html": "ssthresh = 24, cwnd = 1"
       },
       {
        "id": "c",
        "value": "ssthresh = 12, cwnd = 1",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 1"
       },
       {
        "id": "d",
        "value": "ssthresh = 1, cwnd = 12",
        "type": "text",
        "html": "ssthresh = 1, cwnd = 12"
       }
      ],
      "correctId": "c",
      "explanation": "אחרי timeout: $ssthresh=24/2=12$ ו-$cwnd=1$, וחוזרים ל-Slow Start. התשובה cwnd=12 שייכת ל-Reno אחרי 3 ACK כפולים.",
      "recap": "timeout: ssthresh=W/2, cwnd=1",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=24</annotation></semantics></math></span> ומתרחש timeout. מה הערכים אחרי האירוע?",
      "explanationHtml": "אחרי timeout: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>24</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=24/2=12</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>, וחוזרים ל-Slow Start. התשובה cwnd=12 שייכת ל-Reno אחרי 3 ACK כפולים.",
      "recapHtml": "timeout: ssthresh=W/2, cwnd=1"
     },
     {
      "id": "C06-Q2",
      "question": "$cwnd=24$ ומתקבלים שלושה ACK כפולים ב-Reno. מה הערכים אחרי האירוע?",
      "options": [
       {
        "id": "a",
        "value": "ssthresh = 12, cwnd = 12",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 12"
       },
       {
        "id": "b",
        "value": "ssthresh = 12, cwnd = 1",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 1"
       },
       {
        "id": "c",
        "value": "ssthresh = 24, cwnd = 12",
        "type": "text",
        "html": "ssthresh = 24, cwnd = 12"
       },
       {
        "id": "d",
        "value": "ssthresh = 6, cwnd = 6",
        "type": "text",
        "html": "ssthresh = 6, cwnd = 6"
       }
      ],
      "correctId": "a",
      "explanation": "ב-Reno שלושה ACK כפולים מקטינים לחצי: $ssthresh=12$ ו-$cwnd=12$, וממשיכים ב-Congestion Avoidance. cwnd=1 היה נכון ב-Tahoe או אחרי timeout.",
      "recap": "Reno + 3 dup: cwnd=ssthresh=W/2",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=24</annotation></semantics></math></span> ומתקבלים שלושה ACK כפולים ב-Reno. מה הערכים אחרי האירוע?",
      "explanationHtml": "ב-Reno שלושה ACK כפולים מקטינים לחצי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=12</annotation></semantics></math></span>, וממשיכים ב-Congestion Avoidance. cwnd=1 היה נכון ב-Tahoe או אחרי timeout.",
      "recapHtml": "Reno + 3 dup: cwnd=ssthresh=W/2"
     },
     {
      "id": "C06-Q3",
      "question": "$cwnd=24$ ומתקבלים שלושה ACK כפולים ב-Tahoe. מה הערכים אחרי האירוע?",
      "options": [
       {
        "id": "a",
        "value": "ssthresh = 12, cwnd = 12",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 12"
       },
       {
        "id": "b",
        "value": "ssthresh = 24, cwnd = 1",
        "type": "text",
        "html": "ssthresh = 24, cwnd = 1"
       },
       {
        "id": "c",
        "value": "ssthresh = 12, cwnd = 25",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 25"
       },
       {
        "id": "d",
        "value": "ssthresh = 12, cwnd = 1",
        "type": "text",
        "html": "ssthresh = 12, cwnd = 1"
       }
      ],
      "correctId": "d",
      "explanation": "Tahoe מתייחס לשלושה ACK כפולים כמו ל-timeout: $ssthresh=12$ ו-$cwnd=1$. ההבדל מ-Reno הוא רק ב-cwnd.",
      "recap": "Tahoe: כל אובדן מחזיר ל-1",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=24</annotation></semantics></math></span> ומתקבלים שלושה ACK כפולים ב-Tahoe. מה הערכים אחרי האירוע?",
      "explanationHtml": "Tahoe מתייחס לשלושה ACK כפולים כמו ל-timeout: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=12</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span>. ההבדל מ-Reno הוא רק ב-cwnd.",
      "recapHtml": "Tahoe: כל אובדן מחזיר ל-1"
     },
     {
      "id": "C06-Q4",
      "question": "$ssthresh=8$ ו-$cwnd=1$ בסבב 1. בסבב 8 ($cwnd=12$) מתרחש timeout. מהו $cwnd$ בסבב 13?",
      "options": [
       {
        "id": "a",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "b",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "c",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "d",
        "value": "6",
        "type": "text",
        "html": "6"
       }
      ],
      "correctId": "a",
      "explanation": "אחרי timeout $ssthresh=6$ ו-$cwnd=1$ בסבב 9. הערכים: סבב 9: 1, סבב 10: 2, סבב 11: 4, סבב 12: 6 (עוצרים על ssthresh), סבב 13: 7.",
      "recap": "אחרי timeout: 1, 2, 4, עד ssthresh, ואז +1",
      "questionHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=8</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 1. בסבב 8 (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=12</annotation></semantics></math></span>) מתרחש timeout. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 13?",
      "explanationHtml": "אחרי timeout <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 9. הערכים: סבב 9: 1, סבב 10: 2, סבב 11: 4, סבב 12: 6 (עוצרים על ssthresh), סבב 13: 7.",
      "recapHtml": "אחרי timeout: 1, 2, 4, עד ssthresh, ואז +1"
     },
     {
      "id": "C06-Q5",
      "question": "אותו חיבור ($ssthresh=8$, בסבב 8 החלון 12), אבל בסבב 8 מתקבלים שלושה ACK כפולים ב-Reno. מהו $cwnd$ בסבב 12?",
      "options": [
       {
        "id": "a",
        "value": "12",
        "type": "text",
        "html": "12"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "9",
        "type": "text",
        "html": "9"
       },
       {
        "id": "d",
        "value": "7",
        "type": "text",
        "html": "7"
       }
      ],
      "correctId": "c",
      "explanation": "$ssthresh=6$ ו-$cwnd=6$ בסבב 9, ואז Congestion Avoidance: סבב 10: 7, סבב 11: 8, סבב 12: 9.",
      "recap": "Reno + 3 dup: ממשיכים ליניארית מ-W/2",
      "questionHtml": "אותו חיבור (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=8</annotation></semantics></math></span>, בסבב 8 החלון 12), אבל בסבב 8 מתקבלים שלושה ACK כפולים ב-Reno. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 12?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=6</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=6</annotation></semantics></math></span> בסבב 9, ואז Congestion Avoidance: סבב 10: 7, סבב 11: 8, סבב 12: 9.",
      "recapHtml": "Reno + 3 dup: ממשיכים ליניארית מ-W/2"
     },
     {
      "id": "C06-Q6",
      "question": "באילו תנאים TCP מקטין את חלון העומס?",
      "options": [
       {
        "id": "a",
        "value": "כשמגיע ACK מהר מהצפוי",
        "type": "text",
        "html": "כשמגיע ACK מהר מהצפוי"
       },
       {
        "id": "b",
        "value": "כשהקו פנוי לחלוטין",
        "type": "text",
        "html": "כשהקו פנוי לחלוטין"
       },
       {
        "id": "c",
        "value": "כשיש אובדן: timeout או שלושה ACK כפולים",
        "type": "text",
        "html": "כשיש אובדן: timeout או שלושה ACK כפולים"
       },
       {
        "id": "d",
        "value": "כשהחבילות נשלחות מהר",
        "type": "text",
        "html": "כשהחבילות נשלחות מהר"
       }
      ],
      "correctId": "c",
      "explanation": "אות העומס היחיד הוא אובדן. ACK מהיר וקו פנוי הם סימנים שהכול תקין, ושליחה מהירה היא בדיוק מה ש-TCP מנסה לעשות.",
      "recap": "מקטינים חלון רק על אובדן",
      "questionHtml": "באילו תנאים TCP מקטין את חלון העומס?",
      "explanationHtml": "אות העומס היחיד הוא אובדן. ACK מהיר וקו פנוי הם סימנים שהכול תקין, ושליחה מהירה היא בדיוק מה ש-TCP מנסה לעשות.",
      "recapHtml": "מקטינים חלון רק על אובדן"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "📊",
    "title": "קריאת גרף cwnd",
    "goal": "לקרוא סדרת cwnd או גרף: איפה Slow Start, איפה Congestion Avoidance, ואיזה אובדן קרה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>בגרף cwnd ציר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> הוא הסבב (RTT) וציר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> הוא גודל החלון. כל סבב הוא נקודה אחת. קוראים אותו בעזרת ארבעה כללים:</p>\n    <ol>\n    <li><b>Slow Start</b> הוא קטע שבו הערך <b>מוכפל</b> בכל סבב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16</annotation></semantics></math></span>. הוא מתחיל בסבב 1 ואחרי כל timeout.</li>\n    <li><b>Congestion Avoidance</b> הוא קטע ישר עולה, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">+1</annotation></semantics></math></span> בכל סבב. נקודת הכניסה אליו היא נקודת <b>שינוי השיפוע</b>: הנקודה האחרונה של ההכפלה.</li>\n    <li>צניחה <b>לחצי</b> היא שלושה ACK כפולים (Reno), והחלון ממשיך ליניארית מהערך החדש.</li>\n    <li>צניחה <b>ל-1</b> היא timeout, ושוב Slow Start.</li>\n    </ol>\n    <p>דוגמה: הנה סדרת cwnd לסבבים 1 עד 19.</p>\n    <table><thead><tr><th>סבבים</th><th>ערכי cwnd</th><th>מה קורה</th></tr></thead>\n    <tbody>\n    <tr><td>1 עד 5</td><td>1, 2, 4, 8, 16</td><td>Slow Start</td></tr>\n    <tr><td>5 עד 9</td><td>16, 17, 18, 19, 20</td><td>Congestion Avoidance (שינוי שיפוע בסבב 5)</td></tr>\n    <tr><td>10 עד 13</td><td>10, 11, 12, 13</td><td>ירידה מ-20 ל-10: 3 ACK כפולים, ממשיכים ליניארית</td></tr>\n    <tr><td>14 עד 17</td><td>1, 2, 4, 6</td><td>ירידה מ-13 ל-1: timeout, Slow Start עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=6</annotation></semantics></math></span></td></tr>\n    <tr><td>17 עד 19</td><td>6, 7, 8</td><td>Congestion Avoidance (שינוי שיפוע בסבב 17)</td></tr>\n    </tbody></table>\n    <div class=\"calc-fig\" data-calc='{\"kind\": \"tcp\", \"rounds\": 19, \"init\": 1, \"ssthresh\": 16, \"variant\": \"reno\", \"events\": \"9:3dup, 13:timeout\", \"caption\": \"אותה סדרה במחשבון: אפשר לשנות את האירועים ואת Tahoe או Reno\"}'></div>\n    <div class=\"lesson-rule\">🔑 בשאלות \"באילו סבבים פועל Slow Start\" כוללים את הסבב הראשון ואת הסבב שאחרי כל צניחה ל-1, עד הנקודה שבה מסתיימת ההכפלה. כאן: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[1,5]</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>14</mn><mo separator=\"true\">,</mo><mn>17</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[14,17]</annotation></semantics></math></span>.</div>\n    <div class=\"lesson-trap\">⚠️ הגרפים בבחינה סכמטיים: אין לחשב <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span> מדויק של Reno. קוראים את שינוי השיפוע, ובשאלה על \"כניסה ל-Congestion Avoidance\" מחפשים היכן ההכפלה נגמרת, לא היכן יש שיא או צניחה.</div>"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "ערכי $cwnd$ בסבבים 1 עד 19 הם: 1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8. באילו קטעי סבבים פועל Slow Start?",
      "options": [
       {
        "id": "a",
        "value": "[1, 5] ו-[14, 17]",
        "type": "text",
        "html": "[1, 5] ו-[14, 17]"
       },
       {
        "id": "b",
        "value": "[1, 9] בלבד",
        "type": "text",
        "html": "[1, 9] בלבד"
       },
       {
        "id": "c",
        "value": "[5, 9] ו-[10, 13]",
        "type": "text",
        "html": "[5, 9] ו-[10, 13]"
       },
       {
        "id": "d",
        "value": "[1, 5], [10, 13] ו-[14, 17]",
        "type": "text",
        "html": "[1, 5], [10, 13] ו-[14, 17]"
       }
      ],
      "correctId": "a",
      "explanation": "Slow Start הוא הכפלה: בסבבים 1 עד 5 (1, 2, 4, 8, 16), ואחרי ה-timeout בסבבים 14 עד 17 (1, 2, 4, 6). הקטעים 5 עד 9 ו-10 עד 13 הם עלייה ב-1, כלומר Congestion Avoidance.",
      "recap": "Slow Start: מההתחלה ואחרי כל צניחה ל-1",
      "questionHtml": "ערכי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבבים 1 עד 19 הם: 1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8. באילו קטעי סבבים פועל Slow Start?",
      "explanationHtml": "Slow Start הוא הכפלה: בסבבים 1 עד 5 (1, 2, 4, 8, 16), ואחרי ה-timeout בסבבים 14 עד 17 (1, 2, 4, 6). הקטעים 5 עד 9 ו-10 עד 13 הם עלייה ב-1, כלומר Congestion Avoidance.",
      "recapHtml": "Slow Start: מההתחלה ואחרי כל צניחה ל-1"
     },
     {
      "id": "C07-Q2",
      "question": "באותה סדרה (1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8), בין סבב 9 לסבב 10 החלון יורד מ-20 ל-10. איזה אירוע זה?",
      "options": [
       {
        "id": "a",
        "value": "timeout",
        "type": "text",
        "html": "timeout"
       },
       {
        "id": "b",
        "value": "שלושה ACK כפולים",
        "type": "text",
        "html": "שלושה ACK כפולים"
       },
       {
        "id": "c",
        "value": "סיום Slow Start",
        "type": "text",
        "html": "סיום Slow Start"
       },
       {
        "id": "d",
        "value": "הגדלה של rwnd",
        "type": "text",
        "html": "הגדלה של rwnd"
       }
      ],
      "correctId": "b",
      "explanation": "ירידה לחצי (20 ל-10) ומשם המשך ליניארי היא שלושה ACK כפולים ב-Reno. timeout היה מוריד ל-1.",
      "recap": "ירידה לחצי: 3 ACK כפולים",
      "questionHtml": "באותה סדרה (1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13, 1, 2, 4, 6, 7, 8), בין סבב 9 לסבב 10 החלון יורד מ-20 ל-10. איזה אירוע זה?",
      "explanationHtml": "ירידה לחצי (20 ל-10) ומשם המשך ליניארי היא שלושה ACK כפולים ב-Reno. timeout היה מוריד ל-1.",
      "recapHtml": "ירידה לחצי: 3 ACK כפולים"
     },
     {
      "id": "C07-Q3",
      "question": "באותה סדרה, בסבב 13 החלון הוא 13 ובסבב 14 הוא 1. מהו $ssthresh$ שנקבע בעקבות האירוע?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "c",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "d",
        "value": "7",
        "type": "text",
        "html": "7"
       }
      ],
      "correctId": "c",
      "explanation": "ירידה ל-1 היא timeout, ו-$ssthresh=\\lfloor13/2\\rfloor=6$. זה מתאשר בסדרה: ההכפלה 1, 2, 4 נעצרת על 6 ואז 7, 8.",
      "recap": "ssthresh = חצי מהחלון בזמן האובדן",
      "questionHtml": "באותה סדרה, בסבב 13 החלון הוא 13 ובסבב 14 הוא 1. מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span> שנקבע בעקבות האירוע?",
      "explanationHtml": "ירידה ל-1 היא timeout, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mo stretchy=\"false\">⌊</mo><mn>13</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo stretchy=\"false\">⌋</mo><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=\\lfloor13/2\\rfloor=6</annotation></semantics></math></span>. זה מתאשר בסדרה: ההכפלה 1, 2, 4 נעצרת על 6 ואז 7, 8.",
      "recapHtml": "ssthresh = חצי מהחלון בזמן האובדן"
     },
     {
      "id": "C07-Q4",
      "question": "באותה סדרה, באילו סבבים נכנסים ל-Congestion Avoidance מתוך Slow Start (שינוי שיפוע מהכפלה לעלייה ב-1)?",
      "options": [
       {
        "id": "a",
        "value": "1 ו-14",
        "type": "text",
        "html": "1 ו-14"
       },
       {
        "id": "b",
        "value": "5 ו-17",
        "type": "text",
        "html": "5 ו-17"
       },
       {
        "id": "c",
        "value": "9 ו-13",
        "type": "text",
        "html": "9 ו-13"
       },
       {
        "id": "d",
        "value": "5, 10 ו-13",
        "type": "text",
        "html": "5, 10 ו-13"
       }
      ],
      "correctId": "b",
      "explanation": "שינוי השיפוע קורה בסבב 5 (16 ואז 17) ובסבב 17 (6 ואז 7). הסבבים 1 ו-14 הם תחילת Slow Start, והסבבים 9 ו-13 הם שיאים לפני אובדן. סבב 10 הוא המשך Congestion Avoidance, לא כניסה אליו מ-Slow Start.",
      "recap": "כניסה ל-CA: נקודת שינוי השיפוע",
      "questionHtml": "באותה סדרה, באילו סבבים נכנסים ל-Congestion Avoidance מתוך Slow Start (שינוי שיפוע מהכפלה לעלייה ב-1)?",
      "explanationHtml": "שינוי השיפוע קורה בסבב 5 (16 ואז 17) ובסבב 17 (6 ואז 7). הסבבים 1 ו-14 הם תחילת Slow Start, והסבבים 9 ו-13 הם שיאים לפני אובדן. סבב 10 הוא המשך Congestion Avoidance, לא כניסה אליו מ-Slow Start.",
      "recapHtml": "כניסה ל-CA: נקודת שינוי השיפוע"
     },
     {
      "id": "C07-Q5",
      "question": "באותה סדרה, מהו $cwnd$ בסבב 18?",
      "options": [
       {
        "id": "a",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "b",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "c",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "d",
        "value": "14",
        "type": "text",
        "html": "14"
       }
      ],
      "correctId": "a",
      "explanation": "בסבב 17 החלון 6, ואז Congestion Avoidance מוסיף 1: סבב 18 הוא 7 וסבב 19 הוא 8.",
      "recap": "אחרי כניסה ל-CA: +1 לסבב",
      "questionHtml": "באותה סדרה, מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 18?",
      "explanationHtml": "בסבב 17 החלון 6, ואז Congestion Avoidance מוסיף 1: סבב 18 הוא 7 וסבב 19 הוא 8.",
      "recapHtml": "אחרי כניסה ל-CA: +1 לסבב"
     },
     {
      "id": "C07-Q6",
      "question": "באותה סדרה, אילו האירוע בין סבב 9 לסבב 10 היה שלושה ACK כפולים ב-Tahoe (במקום ב-Reno), מהו $cwnd$ בסבב 10?",
      "options": [
       {
        "id": "a",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "c",
        "value": "20",
        "type": "text",
        "html": "20"
       },
       {
        "id": "d",
        "value": "11",
        "type": "text",
        "html": "11"
       }
      ],
      "correctId": "b",
      "explanation": "Tahoe מחזיר ל-1 גם על שלושה ACK כפולים, ולכן $cwnd=1$ בסבב 10 ו-$ssthresh=10$. ב-Reno הערך היה 10.",
      "recap": "Tahoe תמיד ל-1",
      "questionHtml": "באותה סדרה, אילו האירוע בין סבב 9 לסבב 10 היה שלושה ACK כפולים ב-Tahoe (במקום ב-Reno), מהו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi></mrow><annotation encoding=\"application/x-tex\">cwnd</annotation></semantics></math></span> בסבב 10?",
      "explanationHtml": "Tahoe מחזיר ל-1 גם על שלושה ACK כפולים, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>c</mi><mi>w</mi><mi>n</mi><mi>d</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">cwnd=1</annotation></semantics></math></span> בסבב 10 ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">ssthresh=10</annotation></semantics></math></span>. ב-Reno הערך היה 10.",
      "recapHtml": "Tahoe תמיד ל-1"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "אתגר המבחן: TCP",
    "goal": "לפתור שאלות TCP אמיתיות מהמבחנים: לחיצת יד, רצף ACK, גרפי cwnd ובקרת זרימה.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n    <p>שאלות אמיתיות ממבחנים. חמש מהן משתמשות בכלים שלמדת בשלבים הקודמים, ובכל אחת צריך לזהות קודם איזה כלי מתאים.</p>\n    <table><thead><tr><th>אם השאלה על...</th><th>הכלי</th></tr></thead>\n    <tbody>\n    <tr><td>לחיצת יד, ערכי seq ו-ack</td><td>ה-SYN צורך מספר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">x+1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">y+1</annotation></semantics></math></span> (שלב 1)</td></tr>\n    <tr><td>רצף ACK עם קטע שאבד</td><td>ACK על הבית החסר, ואז קפיצה לסוף הרצף (שלבים 2 ו-3)</td></tr>\n    <tr><td>גרף cwnd</td><td>הכפלה היא Slow Start, שינוי שיפוע הוא כניסה ל-CA (שלב 7)</td></tr>\n    <tr><td>מתי מקטינים חלון</td><td>רק על אובדן (שלב 6)</td></tr>\n    <tr><td>בקרת זרימה</td><td>מגינה על המקבל, לא על נתבים (שלב 4)</td></tr>\n    </tbody></table>\n    <div class=\"lesson-rule\">🔑 בגרף סכמטי קוראים את השיפוע, לא מחשבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>s</mi><mi>t</mi><mi>h</mi><mi>r</mi><mi>e</mi><mi>s</mi><mi>h</mi></mrow><annotation encoding=\"application/x-tex\">ssthresh</annotation></semantics></math></span> מדויק.</div>"
    },
    "questions": [
     {
      "bankId": "22S-A-Q14",
      "recap": "ack=x+1 בהודעה 2, ובהודעה 3 seq=x+1 ו-ack=y+1",
      "recapHtml": "ack=x+1 בהודעה 2, ובהודעה 3 seq=x+1 ו-ack=y+1"
     },
     {
      "bankId": "25A-B-Q2",
      "recap": "קטע חסר: ACK כפול על הבית החסר, ואז קפיצה לסוף",
      "recapHtml": "קטע חסר: ACK כפול על הבית החסר, ואז קפיצה לסוף"
     },
     {
      "bankId": "SAMP-1-Q14",
      "recap": "Slow Start: מההתחלה ואחרי כל צניחה ל-1",
      "recapHtml": "Slow Start: מההתחלה ואחרי כל צניחה ל-1"
     },
     {
      "bankId": "26A-A-Q6",
      "recap": "כניסה ל-CA היא נקודת שינוי השיפוע",
      "recapHtml": "כניסה ל-CA היא נקודת שינוי השיפוע"
     },
     {
      "bankId": "25A-C-Q7",
      "recap": "מקטינים חלון רק על אובדן (timeout)",
      "recapHtml": "מקטינים חלון רק על אובדן (timeout)"
     },
     {
      "bankId": "23A-A-Q20",
      "recap": "בקרת זרימה מגינה על המקבל",
      "recapHtml": "בקרת זרימה מגינה על המקבל"
     }
    ]
   }
  ]
 }
};
