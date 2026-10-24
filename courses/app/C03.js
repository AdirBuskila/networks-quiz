/* DNS and HTTP course · level 3 - page load time with transmission time */
COURSE_LEVEL("app", {
  id: "C03", order: 3, icon: "⏱️", title: "זמן טעינת דף עם זמן שידור",
  goal: "לחשב זמן טעינה כולל של דף ב-non-persistent, ב-persistent וב-pipelining, כשמוסיפים את זמן השידור של כל אובייקט.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>עכשיו מוסיפים לסבבי ה-RTT גם את <b>זמן השידור</b> של כל אובייקט: $t=\dfrac{\text{size}}{\text{rate}}$, כאשר גודל בבתים כפול $8$ נותן ביטים. בשאלות האלה $1\,KB=1000$ בתים.</p>
<ul>
<li><b>Non-persistent:</b> כל אובייקט עולה $2\,RTT+t$. סכום על כל האובייקטים כולל הבסיס.</li>
<li><b>Persistent בלי pipelining:</b> $RTT$ אחד לפתיחת החיבור, ואז לכל אובייקט $RTT+t$ (כולל הבסיס).</li>
<li><b>Persistent עם pipelining:</b> $RTT$ לחיבור, $RTT+t_0$ לדף, ואז $RTT$ אחד לכל התמונות ועוד סכום זמני השידור שלהן.</li>
</ul>
<div class="lesson-ex"><b>דוגמה:</b> $RTT=200\,ms$, קו של $100\,Mbps$, דף של $50\,KB$ ושלוש תמונות של $250\,KB$.<br>
$t_0=\dfrac{50000\cdot8}{10^{8}}=4\,ms$ ו-$t_1=\dfrac{250000\cdot8}{10^{8}}=20\,ms$.<br>
Non-persistent: $2\cdot200+4+3(2\cdot200+20)=1664\,ms$.<br>
Persistent בלי pipelining: $200+(200+4)+3(200+20)=1064\,ms$.<br>
עם pipelining: $200+(200+4)+200+3\cdot20=664\,ms$.</div>
<div class="lesson-rule">🔑 <b>ההבדל בין non-persistent ל-persistent</b> הוא בדיוק $RTT$ אחד לכל אובייקט שאינו הראשון, כלומר $N\cdot RTT$ לדף עם $N$ תמונות (בדוגמה: $3\cdot200=600\,ms$). זמני השידור זהים בשני המצבים.</div>
<div class="lesson-trap">⚠️ <b>שימו לב לבית מול ביט.</b> $250\,KB$ הם $2{,}000{,}000$ ביט. מי ששוכח להכפיל ב-$8$ יטעה פי שמונה בזמן השידור.</div>
` },
  questions: [
    { id: "app-C03-Q1", question: "$RTT=200\\ ms$, קו של $100\\ Mbps$. דף של $50\\ KB$ ובו שלוש תמונות של $250\\ KB$, הכול על אותו שרת. HTTP **non-persistent**. מה זמן הטעינה הכולל?",
      options: [
        { id: "a", value: "1064 ms" }, { id: "b", value: "1664 ms" }, { id: "c", value: "864 ms" }, { id: "d", value: "664 ms" },
      ],
      correctId: "b",
      explanation: "זמני השידור: $4$ ms לדף ו-$20$ ms לכל תמונה. כל אובייקט עולה $2\\cdot200$ ms: $400+4+3(400+20)=1664$ ms. הערך 1064 הוא persistent, הערך 864 משלם רק RTT אחד לכל אובייקט, והערך 664 הוא pipelining.",
      recap: "non-persistent: סכום של 2RTT + t לכל אובייקט" },
    { id: "app-C03-Q2", question: "$RTT=200\\ ms$, קו של $100\\ Mbps$. דף של $50\\ KB$ ובו חמש תמונות של $250\\ KB$, הכול על אותו שרת. HTTP **persistent בלי pipelining**. מה זמן הטעינה הכולל?",
      options: [
        { id: "a", value: "2504 ms" }, { id: "b", value: "704 ms" }, { id: "c", value: "1504 ms" }, { id: "d", value: "1304 ms" },
      ],
      correctId: "c",
      explanation: "פתיחת חיבור $200$, הדף $200+4$, ולכל אחת מ-5 התמונות $200+20$: $200+204+5\\cdot220=1504$ ms. הערך 2504 הוא non-persistent, הערך 1304 שוכח את פתיחת החיבור, והערך 704 הוא pipelining.",
      recap: "persistent: RTT לחיבור + (RTT + t) לכל אובייקט" },
    { id: "app-C03-Q3", question: "אותו דף כמו בשאלה הראשונה ($RTT=200\\ ms$, $100\\ Mbps$, דף של $50\\ KB$ ושלוש תמונות של $250\\ KB$), אבל עכשיו HTTP **persistent עם pipelining**. מה זמן הטעינה הכולל?",
      options: [
        { id: "a", value: "1664 ms" }, { id: "b", value: "1064 ms" }, { id: "c", value: "464 ms" }, { id: "d", value: "664 ms" },
      ],
      correctId: "d",
      explanation: "חיבור $200$, הדף $200+4$, ואז סבב אחד לכל התמונות ($200$) ועוד שידורן ברצף ($3\\cdot20=60$): $200+204+200+60=664$ ms. הערך 464 שוכח את פתיחת החיבור, והערכים 1064 ו-1664 הם persistent רגיל ו-non-persistent.",
      recap: "pipelining: RTT אחד לכל התמונות + סכום זמני השידור" },
    { id: "app-C03-Q4", question: "דף של זמן שידור $t_0$ ובו $N$ תמונות, שלכל אחת זמן שידור $t_1$. HTTP **persistent בלי pipelining**. איזה ביטוי נותן את זמן הטעינה?",
      options: [
        { id: "a", value: "$RTT+(RTT+t_0)+N\\,(RTT+t_1)$" },
        { id: "b", value: "$2RTT+t_0+N\\,(2RTT+t_1)$" },
        { id: "c", value: "$RTT+(RTT+t_0)+RTT+N\\,t_1$" },
        { id: "d", value: "$(RTT+t_0)+N\\,(RTT+t_1)$" },
      ],
      correctId: "a",
      explanation: "פתיחת חיבור ($RTT$), הדף ($RTT+t_0$), ולכל תמונה ($RTT+t_1$). הביטוי עם $2RTT$ לכל אובייקט הוא non-persistent, הביטוי עם $RTT$ אחד לכל התמונות הוא pipelining, והביטוי בלי ה-$RTT$ הראשון שוכח את פתיחת החיבור.",
      recap: "persistent: RTT + (RTT+t0) + N(RTT+t1)" },
    { id: "app-C03-Q5", question: "$RTT=100\\ ms$. דף עם 5 תמונות. בכמה זמן קצרה טעינת הדף ב-**persistent** (בלי pipelining) לעומת **non-persistent**, כשזמני השידור זהים בשני המצבים?",
      options: [
        { id: "a", value: "600 ms" }, { id: "b", value: "100 ms" }, { id: "c", value: "1000 ms" }, { id: "d", value: "500 ms" },
      ],
      correctId: "d",
      explanation: "ב-non-persistent משלמים $2RTT$ לכל אחד מ-$N+1$ האובייקטים, וב-persistent $1+(N+1)$ סבבים. ההפרש הוא $N\\cdot RTT=5\\cdot100=500$ ms (זמני השידור מתבטלים). הערך 100 הוא RTT בודד, והערך 1000 הוא $2N\\cdot RTT$, כלומר ספירה כפולה. הערך 600 סופר גם את אובייקט הבסיס, אבל הבסיס עולה $2RTT$ בשני המצבים.",
      recap: "persistent חוסך N·RTT לעומת non-persistent" },
  ],
});
