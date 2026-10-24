/* DNS and HTTP course · level 9 - boss: real exam questions */
COURSE_LEVEL("app", {
  id: "C09", order: 9, icon: "🏆", title: "בוס: שאלות מבחן אמיתיות",
  goal: "לפתור שאלות מבחן אמיתיות על זמני טעינה, ספירת חיבורים, מטמון ו-DNS.",
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`
<p>כל מה שלמדתם בשמונה השלבים הקודמים מופיע כאן, בשאלות מבחן אמיתיות. נוסחאות לתזכורת:</p>
<ul>
<li><b>Non-persistent:</b> $2RTT+t$ לכל אובייקט.</li>
<li><b>Persistent בלי pipelining:</b> $RTT$ לחיבור, ואז $RTT+t$ לכל אובייקט, כולל הבסיס.</li>
<li><b>Persistent עם pipelining:</b> $RTT$ לחיבור, $RTT+t_0$ לדף, $RTT$ אחד לכל התמונות ועוד סכום זמני השידור שלהן.</li>
<li><b>חיבורי HTTP/1.1:</b> חיבור persistent אחד לכל <b>שם</b> שרת, ובמוסכמת המבחן עם 6 מקבילים: $\lceil N/6\rceil$. ב-HTTP/2: חיבור אחד לשרת.</li>
<li><b>GET מותנה:</b> 304 בלי גוף, עדיין RTT. ‏<code>max-age</code> בשניות.</li>
<li><b>DNS בלי מטמון:</b> $3T$ (Root, TLD, Authoritative).</li>
</ul>
<div class="lesson-rule">🔑 בשאלה עם ביטויי זמן, כתבו קודם את הרכיבים: כמה RTT לפתיחה, כמה לכל אובייקט, ומה זמן השידור של הדף ושל כל תמונה (בייט כפול 8, חלקי הקצב).</div>
` },
  questions: [
    { bankId: "22S-A-Q5", recap: "persistent בלי pipelining: RTT לחיבור, ואז RTT + זמן שידור לכל אובייקט כולל הדף" },
    { bankId: "25A-C-Q1", recap: "HTTP/1.1: ⌈N/6⌉ חיבורים; HTTP/2: חיבור אחד" },
    { bankId: "25A-C-Q2", recap: "אין במטמון: שלוש שאילתות עוקבות, 3 × 30 = 90 ms" },
    { bankId: "22S-A-Q15", recap: "גוף ההודעה אינו חובה: 304 חוזר בלי גוף" },
    { bankId: "24A-A-Q10", recap: "GET מותנה משתלם לאובייקט גדול שמשתנה לעיתים" },
    { bankId: "25A-A-Q11", recap: "max-age=3600: תקף במטמון 3600 שניות, כלומר שעה" },
  ],
});
