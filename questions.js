window.CC_QUIZ = {
 "meta": {
  "generated": "tools/build_questions.py",
  "exams": [
   {
    "examCode": "SAMP-1",
    "examLabel": "2024 מבחן לדוגמה",
    "year": 2024,
    "source": "sample",
    "examDate": ""
   },
   {
    "examCode": "SAMP-2",
    "examLabel": "מבחן לדוגמה 2024",
    "year": 2024,
    "source": "sample",
    "examDate": "2024"
   },
   {
    "examCode": "22S-A",
    "examLabel": "2022 סמסטר קיץ מועד א",
    "year": 2022,
    "source": "exam",
    "examDate": "3.10.2022"
   },
   {
    "examCode": "23A-A",
    "examLabel": "2023 סמסטר א מועד א",
    "year": 2023,
    "source": "exam",
    "examDate": "01.02.2023"
   },
   {
    "examCode": "23A-B",
    "examLabel": "2023 סמסטר א מועד ב",
    "year": 2023,
    "source": "exam",
    "examDate": "15.03.2023"
   },
   {
    "examCode": "24A-A",
    "examLabel": "2024 סמסטר א מועד א",
    "year": 2024,
    "source": "exam",
    "examDate": "1.4.2024"
   },
   {
    "examCode": "24A-B",
    "examLabel": "2024 סמסטר א מועד ב",
    "year": 2024,
    "source": "exam",
    "examDate": "1.5.2024"
   },
   {
    "examCode": "25A-A",
    "examLabel": "2025 סמסטר א מועד א",
    "year": 2025,
    "source": "exam",
    "examDate": "27.02.2025"
   },
   {
    "examCode": "25A-B",
    "examLabel": "2025 סמסטר א מועד ב",
    "year": 2025,
    "source": "exam",
    "examDate": "2025"
   },
   {
    "examCode": "25A-C",
    "examLabel": "2025 סמסטר א מועד ג",
    "year": 2025,
    "source": "exam",
    "examDate": "2025"
   },
   {
    "examCode": "26A-A",
    "examLabel": "2026 סמסטר א מועד א",
    "year": 2026,
    "source": "exam",
    "examDate": "18.02.2026"
   }
  ],
  "topics": [
   {
    "key": "intro_layers",
    "label": "מבוא ומודל חמש השכבות"
   },
   {
    "key": "delays",
    "label": "השהיות, תפוקה ועוצמת תעבורה"
   },
   {
    "key": "http",
    "label": "HTTP, עוגיות, מטמון ו-CDN"
   },
   {
    "key": "dns_dhcp",
    "label": "DNS, DHCP ו-ARP"
   },
   {
    "key": "sockets_email",
    "label": "Sockets ודואר: SMTP, POP ו-IMAP"
   },
   {
    "key": "udp_checksum",
    "label": "UDP ו-checksum"
   },
   {
    "key": "reliable_transfer",
    "label": "העברה אמינה: Go-Back-N ו-Selective Repeat"
   },
   {
    "key": "tcp",
    "label": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס"
   },
   {
    "key": "ip_cidr",
    "label": "IP, CIDR, רשתות משנה ו-Longest Prefix"
   },
   {
    "key": "nat_ipv6_icmp",
    "label": "NAT, IPv6 ו-ICMP"
   },
   {
    "key": "routing",
    "label": "ניתוב: Dijkstra, Distance Vector ו-BGP"
   },
   {
    "key": "link_layer",
    "label": "שכבת הקו: CRC, זוגיות ו-Ethernet"
   },
   {
    "key": "physical_misc",
    "label": "שכבה פיזית ומיתוג"
   }
  ],
  "title": "רשתות תקשורת מחשבים",
  "accent": "#67e8f9",
  "accent2": "#7c3aed",
  "storePrefix": "networks",
  "needHelp": [
   {
    "id": "delays",
    "titleHe": "חישובי השהיה ועומס",
    "icon": "⏱️",
    "topic": "delays",
    "entryLabelHe": "צריך עזרה בחישובי השהיה?"
   },
   {
    "id": "tcp",
    "titleHe": "TCP: ACK, חלון ובקרת עומס",
    "icon": "📈",
    "topic": "tcp",
    "entryLabelHe": "צריך עזרה ב-TCP?"
   },
   {
    "id": "ip",
    "titleHe": "כתובות, CIDR ו-Longest Prefix",
    "icon": "🌐",
    "topic": "ip_cidr",
    "entryLabelHe": "צריך עזרה בכתובות IP?"
   },
   {
    "id": "link",
    "titleHe": "שכבת הקו: CRC, זוגיות ו-ARP",
    "icon": "🔗",
    "topic": "link_layer",
    "entryLabelHe": "צריך עזרה בשכבת הקו?"
   },
   {
    "id": "app",
    "titleHe": "DNS ו-HTTP: מטמון, חיבורים ו-TTL",
    "icon": "🗂️",
    "topic": "http",
    "entryLabelHe": "צריך עזרה ב-DNS וב-HTTP?"
   }
  ],
  "counts": {
   "total": 166,
   "unique": 159,
   "contexts": 0,
   "math": 203
  }
 },
 "contexts": {},
 "questions": [
  {
   "num": 1,
   "topic": "delays",
   "question": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 1 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עוצמת תעבורה = 0.0007, אין פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.0007, אין פוטנציאל לעומס"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עוצמת תעבורה = 0.007, אין פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.007, אין פוטנציאל לעומס"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עוצמת תעבורה = 0.7, יש פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.7, יש פוטנציאל לעומס"
    },
    {
     "id": "d",
     "type": "text",
     "value": "עוצמת תעבורה = 7, יש פוטנציאל לעומס גבוה מאוד",
     "html": "עוצמת תעבורה = 7, יש פוטנציאל לעומס גבוה מאוד"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שיעור ההגעה הוא לשעה - ממירים לשנייה: $a=\\frac{500000}{3600}$.\n$$\\rho=\\frac{a\\cdot L}{R}=\\frac{(500000/3600)\\cdot 5000}{10^{9}}\\approx 0.0007$$\nהעוצמה קטנה בהרבה מ-1, ולכן אין פוטנציאל לעומס. 0.007 ו-0.7 הן טעויות בסדר גודל.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q1",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 1 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "explanationHtml": "שיעור ההגעה הוא לשעה - ממירים לשנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mn>500000</mn><mn>3600</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">a=\\frac{500000}{3600}</annotation></semantics></math></span>.<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\">(</mo><mn>500000</mn><mi mathvariant=\"normal\">/</mi><mn>3600</mn><mo stretchy=\"false\">)</mo><mo>⋅</mo><mn>5000</mn></mrow><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>≈</mo><mn>0.0007</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}=\\frac{(500000/3600)\\cdot 5000}{10^{9}}\\approx 0.0007</annotation></semantics></math></span><br>העוצמה קטנה בהרבה מ-1, ולכן אין פוטנציאל לעומס. 0.007 ו-0.7 הן טעויות בסדר גודל.",
   "dedupKey": "cb78992a28f73c8f"
  },
  {
   "num": 2,
   "topic": "delays",
   "question": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 10 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nמהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך שה Traffic Intensity יהיה שווה ל-0.8?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1,600,000 חבילות לשנייה",
     "html": "1,600,000 חבילות לשנייה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "8,000 חבילות לשנייה",
     "html": "8,000 חבילות לשנייה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "16,000,000 חבילות לשנייה",
     "html": "16,000,000 חבילות לשנייה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "32,000,000 חבילות לשנייה",
     "html": "32,000,000 חבילות לשנייה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "$a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 10\\cdot10^{9}}{5000}=1{,}600{,}000$ חבילות לשנייה. שאר האפשרויות הן טעויות בחזקת 10 או בגורם 0.8.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q2",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 10 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>מהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך שה Traffic Intensity יהיה שווה ל-0.8?",
   "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mo>⋅</mo><mi>R</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>0.8</mn><mo>⋅</mo><mn>10</mn><mo>⋅</mo><msup><mn>10</mn><mn>9</mn></msup></mrow><mn>5000</mn></mfrac><mo>=</mo><mn>1,600,000</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 10\\cdot10^{9}}{5000}=1{,}600{,}000</annotation></semantics></math></span> חבילות לשנייה. שאר האפשרויות הן טעויות בחזקת 10 או בגורם 0.8.",
   "dedupKey": "eaa3e83e8a0e453d"
  },
  {
   "num": 3,
   "topic": "http",
   "question": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP מה שמאפשר העברת נתונים מהירה יותר",
     "html": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP מה שמאפשר העברת נתונים מהירה יותר"
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל הרכיבים",
     "html": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל הרכיבים"
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על גבי חיבור TCP יחיד, מה שמקטין את זמן ההשהיה הכולל בעיית HOL שקיימת ב TCP",
     "html": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על גבי חיבור TCP יחיד, מה שמקטין את זמן ההשהיה הכולל בעיית HOL שקיימת ב TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "HTTP/2 מבצע multiplexing על חיבור TCP יחיד, אך הוא רץ מעל TCP ולכן בעיית ה-head-of-line blocking של TCP (איבוד חבילה עוצר את כל הזרמים) נשארת; רק HTTP/3 מעל QUIC פותר אותה. לכן ג שגויה בחלקה.\nא: HTTP/2 רץ מעל TCP, לא UDP. ב: ההצפנה אינה חובה בתקן ואינה שיפור בניצול משאבים. לכן \"אף תשובה לא נכונה\".",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q3",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "explanationHtml": "HTTP/2 מבצע multiplexing על חיבור TCP יחיד, אך הוא רץ מעל TCP ולכן בעיית ה-head-of-line blocking של TCP (איבוד חבילה עוצר את כל הזרמים) נשארת; רק HTTP/3 מעל QUIC פותר אותה. לכן ג שגויה בחלקה.<br>א: HTTP/2 רץ מעל TCP, לא UDP. ב: ההצפנה אינה חובה בתקן ואינה שיפור בניצול משאבים. לכן \"אף תשובה לא נכונה\".",
   "dedupKey": "413d35eee7f02dd7"
  },
  {
   "num": 4,
   "topic": "dns_dhcp",
   "question": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`Offer->Discover->Request->Acknowledge`",
     "html": "<code class=\"tok\" dir=\"ltr\">Offer-&gt;Discover-&gt;Request-&gt;Acknowledge</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`Discover->Offer->Acknowledge->Request`",
     "html": "<code class=\"tok\" dir=\"ltr\">Discover-&gt;Offer-&gt;Acknowledge-&gt;Request</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`Discover->Offer->Request->Acknowledge`",
     "html": "<code class=\"tok\" dir=\"ltr\">Discover-&gt;Offer-&gt;Request-&gt;Acknowledge</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`Request->Discover->Offer->Acknowledge`",
     "html": "<code class=\"tok\" dir=\"ltr\">Request-&gt;Discover-&gt;Offer-&gt;Acknowledge</code>"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הסדר התקני (DORA): Discover, Offer, Request, Acknowledge. שאר האפשרויות מחליפות את הסדר.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q4",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "explanationHtml": "הסדר התקני (DORA): Discover, Offer, Request, Acknowledge. שאר האפשרויות מחליפות את הסדר.",
   "dedupKey": "0629f066af39d80e"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "מדוע פרוטוקול HTTP/3 משתמש ב QUIC במקום TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל",
     "html": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת השהיית שידור כוללת. כמו כן, לפתור את בעיית HOL שקיימת ב HTTP/2.0",
     "html": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת השהיית שידור כוללת. כמו כן, לפתור את בעיית HOL שקיימת ב HTTP/2.0"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כדי לבטל את צורך בכתובות IP",
     "html": "כדי לבטל את צורך בכתובות IP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כדי לספק שיטת שידור אותות אמינה יותר",
     "html": "כדי לספק שיטת שידור אותות אמינה יותר"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "QUIC רץ מעל UDP, משלב הצפנה עם הקמת החיבור (פחות RTT) ומנהל זרמים בנפרד, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים - פתרון ל-HOL שנשאר ב-HTTP/2.\nא: ההצפנה היא תוצאה נלווית. ג: QUIC עדיין משתמש בכתובות IP. ד: אמינות אותות היא עניין של השכבה הפיזית.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q5",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מדוע פרוטוקול HTTP/3 משתמש ב QUIC במקום TCP?",
   "explanationHtml": "QUIC רץ מעל UDP, משלב הצפנה עם הקמת החיבור (פחות RTT) ומנהל זרמים בנפרד, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים - פתרון ל-HOL שנשאר ב-HTTP/2.<br>א: ההצפנה היא תוצאה נלווית. ג: QUIC עדיין משתמש בכתובות IP. ד: אמינות אותות היא עניין של השכבה הפיזית.",
   "dedupKey": "d1acf7c95a2f83a8"
  },
  {
   "num": 6,
   "topic": "http",
   "question": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: `http://mywebsite.com/index.html`.\nבדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:\n`http://mywebsite.com/imageA.jpg`\n`http://mymirrorwebsite.com/imageB.jpg`\nלאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n- `mywebsite.com: 203.0.113.10`\n- `mymirrorwebsite.com: 203.0.113.10`\nבהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1",
     "html": "1"
    },
    {
     "id": "b",
     "type": "text",
     "value": "2",
     "html": "2"
    },
    {
     "id": "c",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת",
     "html": "לא ניתן לדעת"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "חיבור persistent אחד משרת כמה אובייקטים ברצף (ללא pipelining) מאותו מארח. הדפדפן מנהל חיבורים לפי שם המארח: `mywebsite.com` מספק את `index.html` ואת `imageA.jpg` בחיבור אחד, ו-`mymirrorwebsite.com` דורש חיבור נפרד עבור `imageB.jpg` - בסך הכול 2, גם אם שני השמות נפתרו לאותה כתובת IP.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold. Browsers pool HTTP/1.1 connections per host name, not per IP; the shared IP is the distractor.",
   "id": "SAMP-1-Q6",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: <code class=\"tok\" dir=\"ltr\">http://mywebsite.com/index.html</code>.<br>בדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:<br><code class=\"tok\" dir=\"ltr\">http://mywebsite.com/imageA.jpg</code><br><code class=\"tok\" dir=\"ltr\">http://mymirrorwebsite.com/imageB.jpg</code><br>לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:<br>- <code class=\"tok\" dir=\"ltr\">mywebsite.com: 203.0.113.10</code><br>- <code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com: 203.0.113.10</code><br>בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "explanationHtml": "חיבור persistent אחד משרת כמה אובייקטים ברצף (ללא pipelining) מאותו מארח. הדפדפן מנהל חיבורים לפי שם המארח: <code class=\"tok\" dir=\"ltr\">mywebsite.com</code> מספק את <code class=\"tok\" dir=\"ltr\">index.html</code> ואת <code class=\"tok\" dir=\"ltr\">imageA.jpg</code> בחיבור אחד, ו-<code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com</code> דורש חיבור נפרד עבור <code class=\"tok\" dir=\"ltr\">imageB.jpg</code> - בסך הכול 2, גם אם שני השמות נפתרו לאותה כתובת IP.",
   "dedupKey": "9d46f8587a255ae1"
  },
  {
   "num": 7,
   "topic": "http",
   "question": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע",
     "html": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לאפשר מעקב בין אתרים ומקוד פרסומות",
     "html": "לאפשר מעקב בין אתרים ומקוד פרסומות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לשפר את אבטחה בהתחברות (session) משתמשים",
     "html": "לשפר את אבטחה בהתחברות (session) משתמשים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לנהל את ה- sessions של המשתמש באתר נוכחי",
     "html": "לנהל את ה- sessions של המשתמש באתר נוכחי"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "עוגיית צד שלישי נקבעת על ידי דומיין שאינו האתר שהמשתמש מבקר בו (למשל שרת פרסומות מוטמע), ולכן אותה עוגייה מזהה את המשתמש בכמה אתרים ומאפשרת מעקב בין אתרים ומיקוד פרסומות. א, ג, ד מתארות עוגיות צד ראשון.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q7",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "explanationHtml": "עוגיית צד שלישי נקבעת על ידי דומיין שאינו האתר שהמשתמש מבקר בו (למשל שרת פרסומות מוטמע), ולכן אותה עוגייה מזהה את המשתמש בכמה אתרים ומאפשרת מעקב בין אתרים ומיקוד פרסומות. א, ג, ד מתארות עוגיות צד ראשון.",
   "dedupKey": "1c17964ef93cbfbc"
  },
  {
   "num": 8,
   "topic": "http",
   "question": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גיאוגרפיים שונים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "העברת צד השרת של האתר לשימוש בפרוטוקול HTTP/2.0",
     "html": "העברת צד השרת של האתר לשימוש בפרוטוקול HTTP/2.0"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שימוש ב CDN לאחסון של משאבים סטטיים של האתר קרוב יותר למשתמש קצה",
     "html": "שימוש ב CDN לאחסון של משאבים סטטיים של האתר קרוב יותר למשתמש קצה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אופטימיזציה של שרת אינטרנט לטיפול במספר גדול יותר של סוקטים בו-זמנית",
     "html": "אופטימיזציה של שרת אינטרנט לטיפול במספר גדול יותר של סוקטים בו-זמנית"
    },
    {
     "id": "d",
     "type": "text",
     "value": "העברת צד השרת לשמוש בפרוטוקול HTTP/3.0",
     "html": "העברת צד השרת לשמוש בפרוטוקול HTTP/3.0"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשהמשתמשים מפוזרים גיאוגרפית, רוב זמן הטעינה הוא RTT והתפשטות למרחקים. CDN משכפל את המשאבים הסטטיים לשרתים קרובים למשתמש ומקטין את המרחק - ההשפעה הגדולה ביותר. HTTP/2, HTTP/3 והגדלת מספר ה-sockets אינם מקצרים את המרחק הפיזי.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q8",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גיאוגרפיים שונים?",
   "explanationHtml": "כשהמשתמשים מפוזרים גיאוגרפית, רוב זמן הטעינה הוא RTT והתפשטות למרחקים. CDN משכפל את המשאבים הסטטיים לשרתים קרובים למשתמש ומקטין את המרחק - ההשפעה הגדולה ביותר. HTTP/2, HTTP/3 והגדלת מספר ה-sockets אינם מקצרים את המרחק הפיזי.",
   "dedupKey": "e054baaaba1b16b9"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת תעבורה המאפשר הקצאה דינמית של כתובות IP פנימיות",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת תעבורה המאפשר הקצאה דינמית של כתובות IP פנימיות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה שרת-לקוח המאפשר הקצאה סטאטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת DNS מקומי",
     "html": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה שרת-לקוח המאפשר הקצאה סטאטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת DNS מקומי"
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול DHCP הוא במשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של שרת-לקוח",
     "html": "פרוטוקול DHCP הוא במשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של שרת-לקוח"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה אינה נכונה",
     "html": "אף תשובה אינה נכונה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כל אחת מהטענות שגויה: א - DHCP הוא פרוטוקול של שכבת האפליקציה. ב - ההקצאה דינמית, לא סטטית. ג - הוא משתמש ב-UDP, לא ב-TCP. לכן \"אף תשובה אינה נכונה\".",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q9",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "explanationHtml": "כל אחת מהטענות שגויה: א - DHCP הוא פרוטוקול של שכבת האפליקציה. ב - ההקצאה דינמית, לא סטטית. ג - הוא משתמש ב-UDP, לא ב-TCP. לכן \"אף תשובה אינה נכונה\".",
   "dedupKey": "0f162215eb6979a7"
  },
  {
   "num": 10,
   "topic": "http",
   "question": "מפתחת אתרים מעוניינת לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "תמיד עדיף להשתמש ב GET מותנה ( Conditional get )",
     "html": "תמיד עדיף להשתמש ב GET מותנה ( Conditional get )"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם – הבקשה תשלך עם header: if-Modified-Since",
     "html": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם – הבקשה תשלך עם header: if-Modified-Since"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן",
     "html": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אין הבדל משמעותי בין אפשרויות",
     "html": "אין הבדל משמעותי בין אפשרויות"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשהשרת מחזיר Last-Modified, הלקוח שולח `If-Modified-Since`; אם המשאב לא השתנה, השרת עונה `304 Not Modified` בלי גוף ונחסכת הורדת התמונה.\nא: \"תמיד\" שגוי - לתוכן שמשתנה בכל בקשה זו רק תקורה. ג: PUT מעלה משאב ואינו בודק שינוי. ד: יש הבדל ברור.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q10",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מפתחת אתרים מעוניינת לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "explanationHtml": "כשהשרת מחזיר Last-Modified, הלקוח שולח <code class=\"tok\" dir=\"ltr\">If-Modified-Since</code>; אם המשאב לא השתנה, השרת עונה <code class=\"tok\" dir=\"ltr\">304 Not Modified</code> בלי גוף ונחסכת הורדת התמונה.<br>א: \"תמיד\" שגוי - לתוכן שמשתנה בכל בקשה זו רק תקורה. ג: PUT מעלה משאב ואינו בודק שינוי. ד: יש הבדל ברור.",
   "dedupKey": "f40751b56648499a"
  },
  {
   "num": 11,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה\n`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "b",
     "type": "text",
     "value": "B",
     "html": "B"
    },
    {
     "id": "c",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "d",
     "type": "text",
     "value": "D",
     "html": "D"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match. הכתובת $25.36.67.5$ בבינארי: `00011001.00100100.01000011.00000101`.\nA: הקידומת של 16 ביט (`25.36`) מתאימה. B: `25.36.128.0/20` מכסה 128-143 ברובע השלישי - לא כולל 67. C: `25.36.64.0/20` מכסה 64-79 - כולל 67, והקידומת ארוכה יותר ($/20>/16$). D: `20.0.0.0/8` לא מתאימה.\nA ו-C מתאימות והארוכה ביותר היא C.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold. Route A is printed as 25.36.64.0/16 (the host bits are non-zero); only the /16 prefix matters.",
   "id": "SAMP-1-Q11",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה<br><code class=\"tok\" dir=\"ltr\">A: 25.36.64.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code>",
   "explanationHtml": "Longest Prefix Match. הכתובת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span> בבינארי: <code class=\"tok\" dir=\"ltr\">00011001.00100100.01000011.00000101</code>.<br>A: הקידומת של 16 ביט (<code class=\"tok\" dir=\"ltr\">25.36</code>) מתאימה. B: <code class=\"tok\" dir=\"ltr\">25.36.128.0/20</code> מכסה 128-143 ברובע השלישי - לא כולל 67. C: <code class=\"tok\" dir=\"ltr\">25.36.64.0/20</code> מכסה 64-79 - כולל 67, והקידומת ארוכה יותר (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn><mo>&gt;</mo><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/20&gt;/16</annotation></semantics></math></span>). D: <code class=\"tok\" dir=\"ltr\">20.0.0.0/8</code> לא מתאימה.<br>A ו-C מתאימות והארוכה ביותר היא C.",
   "dedupKey": "85d490a5904ccd45"
  },
  {
   "num": 12,
   "topic": "dns_dhcp",
   "question": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כן, אפשר לוותר על ARP",
     "html": "כן, אפשר לוותר על ARP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון: אי אפשר לוותר על ARP",
     "html": "לא נכון: אי אפשר לוותר על ARP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כן אפשר לוותר על ARP ברשת גדולה – רק עבור לקוחות שמקבלים מידע משרת הDHCP אבל לא עבור תחנות קצה עם IP סטטי",
     "html": "כן אפשר לוותר על ARP ברשת גדולה – רק עבור לקוחות שמקבלים מידע משרת הDHCP אבל לא עבור תחנות קצה עם IP סטטי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "התשובה לא חד משמעית – תלויה בהגדרות מערכת",
     "html": "התשובה לא חד משמעית – תלויה בהגדרות מערכת"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP מקצה כתובת IP, מסכה, Gateway ו-DNS - אך לא מספק את כתובת ה-MAC של היעד. כדי לשלוח מסגרת Ethernet צריך את ה-MAC של היעד (או של ה-Gateway), וזה תפקידו של ARP. לכן אי אפשר לוותר עליו, גם בתחנות שקיבלו כתובת מ-DHCP.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "id": "SAMP-1-Q12",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP?",
   "explanationHtml": "DHCP מקצה כתובת IP, מסכה, Gateway ו-DNS - אך לא מספק את כתובת ה-MAC של היעד. כדי לשלוח מסגרת Ethernet צריך את ה-MAC של היעד (או של ה-Gateway), וזה תפקידו של ARP. לכן אי אפשר לוותר עליו, גם בתחנות שקיבלו כתובת מ-DHCP.",
   "dedupKey": "28ced47fe4492e94"
  },
  {
   "num": 13,
   "topic": "ip_cidr",
   "question": "חבילת IP (datagram) בגודל 2000B עברה פרגמנטציה (fragmentation). נתון כי MTU של הרשת - 420B וגודל ה-header הוא 20B ואין שימוש בהרחבות. מה נכון לגבי הערך הרשום בשדה ה-offset בחבילה מספר 5?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1600",
     "html": "1600"
    },
    {
     "id": "b",
     "type": "text",
     "value": "200",
     "html": "200"
    },
    {
     "id": "c",
     "type": "text",
     "value": "400",
     "html": "400"
    },
    {
     "id": "d",
     "type": "text",
     "value": "480",
     "html": "480"
    },
    {
     "id": "e",
     "type": "text",
     "value": "405",
     "html": "405"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בכל פרגמנט נשארים $420-20=400$ בתים לנתונים (כפולה של 8). 2000 בתים נתונים נחתכים ל-5 פרגמנטים של 400. הפרגמנט החמישי מתחיל אחרי $4\\cdot400=1600$ בתים, והשדה offset נמדד בבלוקים של 8 בתים: $1600/8=200$ (הערכים בפרגמנטים: 0, 50, 100, 150, 200).\n1600 הוא ההיסט בבתים ולא בבלוקים.",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold. The printed worked line lists offsets 0, 50, 100, 150, 200.",
   "id": "SAMP-1-Q13",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילת IP (datagram) בגודל 2000B עברה פרגמנטציה (fragmentation). נתון כי MTU של הרשת - 420B וגודל ה-header הוא 20B ואין שימוש בהרחבות. מה נכון לגבי הערך הרשום בשדה ה-offset בחבילה מספר 5?",
   "explanationHtml": "בכל פרגמנט נשארים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>420</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">420-20=400</annotation></semantics></math></span> בתים לנתונים (כפולה של 8). 2000 בתים נתונים נחתכים ל-5 פרגמנטים של 400. הפרגמנט החמישי מתחיל אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>400</mn><mo>=</mo><mn>1600</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot400=1600</annotation></semantics></math></span> בתים, והשדה offset נמדד בבלוקים של 8 בתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1600</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">1600/8=200</annotation></semantics></math></span> (הערכים בפרגמנטים: 0, 50, 100, 150, 200).<br>1600 הוא ההיסט בבתים ולא בבלוקים.",
   "dedupKey": "fe066a10da56bf7f"
  },
  {
   "num": 14,
   "topic": "tcp",
   "question": "בהינתן גרף התנהגות של פרוטוקול TCP, תהליך slow-start עובד בפרקים:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "[1, 6]",
     "html": "[1, 6]"
    },
    {
     "id": "b",
     "type": "text",
     "value": "[6, 16]",
     "html": "[6, 16]"
    },
    {
     "id": "c",
     "type": "text",
     "value": "[1,6] , [23, 26]",
     "html": "[1,6] , [23, 26]"
    },
    {
     "id": "d",
     "type": "text",
     "value": "[6, 16], [17, 22]",
     "html": "[6, 16], [17, 22]"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-Slow Start החלון מוכפל בכל סבב. בסבבים 1-6: $1,2,4,8,16,32$ - slow start עד שהחלון מגיע ל-ssthresh=32. בסבבים 6-16 החלון גדל ב-1 בכל סבב (Congestion Avoidance), ואחרי ההפסד בסבב 16 הוא יורד ל-21 וממשיך לגדול ב-1 בסבבים 17-22 (שוב Congestion Avoidance). בסבב 22 מתרחש timeout והחלון יורד ל-1, ובסבבים 23-26 הוא שוב מוכפל: $1,2,4,8$.\nלכן slow start פועל ב-[1,6] ו-[23,26].",
   "note": "Sample exam, no separate answer table; solved independently - agrees with the option printed in bold.",
   "image": "images/exams/SAMP-1-Q14.png",
   "id": "SAMP-1-Q14",
   "examCode": "SAMP-1",
   "examLabel": "2024 מבחן לדוגמה",
   "year": 2024,
   "source": "sample",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "בהינתן גרף התנהגות של פרוטוקול TCP, תהליך slow-start עובד בפרקים:",
   "explanationHtml": "ב-Slow Start החלון מוכפל בכל סבב. בסבבים 1-6: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16,32</annotation></semantics></math></span> - slow start עד שהחלון מגיע ל-ssthresh=32. בסבבים 6-16 החלון גדל ב-1 בכל סבב (Congestion Avoidance), ואחרי ההפסד בסבב 16 הוא יורד ל-21 וממשיך לגדול ב-1 בסבבים 17-22 (שוב Congestion Avoidance). בסבב 22 מתרחש timeout והחלון יורד ל-1, ובסבבים 23-26 הוא שוב מוכפל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8</annotation></semantics></math></span>.<br>לכן slow start פועל ב-[1,6] ו-[23,26].",
   "dedupKey": "a8024840c028991f"
  },
  {
   "num": 1,
   "topic": "delays",
   "question": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 1 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עוצמת תעבורה = 0.0007, אין פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.0007, אין פוטנציאל לעומס"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עוצמת תעבורה = 0.007, אין פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.007, אין פוטנציאל לעומס"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עוצמת תעבורה = 0.7, יש פוטנציאל לעומס",
     "html": "עוצמת תעבורה = 0.7, יש פוטנציאל לעומס"
    },
    {
     "id": "d",
     "type": "text",
     "value": "עוצמת תעבורה = 7, יש פוטנציאל לעומס גבוה מאוד",
     "html": "עוצמת תעבורה = 7, יש פוטנציאל לעומס גבוה מאוד"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "$\\rho=\\frac{a\\cdot L}{R}$ עם $a=\\frac{500000}{3600}\\approx 138.9$ חבילות בשנייה: $\\rho=\\frac{138.9\\cdot5000}{10^{9}}\\approx 0.0007$.\n$\\rho\\ll1$, ולכן התור כמעט ריק ואין פוטנציאל לעומס (עומס מתחיל כש-$\\rho$ מתקרב ל-1). 0.007 ו-0.7 מתקבלים מטעות של סדרי גודל או משכחת ההמרה לשעה.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q1",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 1 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mn>500000</mn><mn>3600</mn></mfrac><mo>≈</mo><mn>138.9</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{500000}{3600}\\approx 138.9</annotation></semantics></math></span> חבילות בשנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mn>138.9</mn><mo>⋅</mo><mn>5000</mn></mrow><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>≈</mo><mn>0.0007</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{138.9\\cdot5000}{10^{9}}\\approx 0.0007</annotation></semantics></math></span>.<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>≪</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho\\ll1</annotation></semantics></math></span>, ולכן התור כמעט ריק ואין פוטנציאל לעומס (עומס מתחיל כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span> מתקרב ל-1). 0.007 ו-0.7 מתקבלים מטעות של סדרי גודל או משכחת ההמרה לשעה.",
   "dedupKey": "cb78992a28f73c8f"
  },
  {
   "num": 2,
   "topic": "delays",
   "question": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 10 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nמהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך ש-Traffic Intensity יהיה שווה ל-0.8?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1,600,000 חבילות לשנייה",
     "html": "1,600,000 חבילות לשנייה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "8,000 חבילות לשנייה",
     "html": "8,000 חבילות לשנייה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "16,000,000 חבילות לשנייה",
     "html": "16,000,000 חבילות לשנייה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "32,000,000 חבילות לשנייה",
     "html": "32,000,000 חבילות לשנייה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "$\\rho=\\frac{a\\cdot L}{R}\\Rightarrow a=\\frac{\\rho R}{L}=\\frac{0.8\\cdot10\\cdot10^{9}}{5000}=1{,}600{,}000$ חבילות בשנייה.\nהנתונים על המרחק והמהירות אינם נחוצים (הם נתוני התפשטות, לא נכנסים לנוסחה).",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q2",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 10 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>מהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך ש-Traffic Intensity יהיה שווה ל-0.8?",
   "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac><mo>⇒</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>R</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>0.8</mn><mo>⋅</mo><mn>10</mn><mo>⋅</mo><msup><mn>10</mn><mn>9</mn></msup></mrow><mn>5000</mn></mfrac><mo>=</mo><mn>1,600,000</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}\\Rightarrow a=\\frac{\\rho R}{L}=\\frac{0.8\\cdot10\\cdot10^{9}}{5000}=1{,}600{,}000</annotation></semantics></math></span> חבילות בשנייה.<br>הנתונים על המרחק והמהירות אינם נחוצים (הם נתוני התפשטות, לא נכנסים לנוסחה).",
   "dedupKey": "b107cebb79f01d52"
  },
  {
   "num": 3,
   "topic": "http",
   "question": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP מה שמאפשר העברת נתונים מהירה יותר",
     "html": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP מה שמאפשר העברת נתונים מהירה יותר"
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל הרכיבים",
     "html": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל הרכיבים"
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על גבי חיבור TCP יחיד,\nמה שמקטין את זמן ההשהיה הכולל בעיית HOL שקיימת ב TCP",
     "html": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על גבי חיבור TCP יחיד,<br>מה שמקטין את זמן ההשהיה הכולל בעיית HOL שקיימת ב TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "HTTP/2 מבצע ריבוב (multiplexing) של בקשות על חיבור TCP יחיד, וכך פותר את בעיית ה-HOL ברמת HTTP של HTTP/1.1. אבל HOL ברמת TCP (איבוד מנה חוסם את כל הזרם) נשאר, ופתרונו הוא QUIC/HTTP/3.\nא: HTTP/2 פועל מעל TCP. ב: הצפנה אינה חובה בתקן והשיפור אינו באבטחה. ג: טוענת שהשיפור הוא ב-HOL שקיים ב-TCP, וזה שגוי. לכן ד.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Option c is printed without a verb before 'בעיית HOL' (transcribed as printed); it attributes the TCP HOL problem to HTTP/2's improvement, which is false.",
   "id": "SAMP-2-Q3",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "explanationHtml": "HTTP/2 מבצע ריבוב (multiplexing) של בקשות על חיבור TCP יחיד, וכך פותר את בעיית ה-HOL ברמת HTTP של HTTP/1.1. אבל HOL ברמת TCP (איבוד מנה חוסם את כל הזרם) נשאר, ופתרונו הוא QUIC/HTTP/3.<br>א: HTTP/2 פועל מעל TCP. ב: הצפנה אינה חובה בתקן והשיפור אינו באבטחה. ג: טוענת שהשיפור הוא ב-HOL שקיים ב-TCP, וזה שגוי. לכן ד.",
   "dedupKey": "413d35eee7f02dd7"
  },
  {
   "num": 4,
   "topic": "dns_dhcp",
   "question": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Offer->Discover->Request->Acknowledge",
     "html": "Offer-&gt;Discover-&gt;Request-&gt;Acknowledge"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Discover->Offer->Acknowledge->Request",
     "html": "Discover-&gt;Offer-&gt;Acknowledge-&gt;Request"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Discover->Offer->Request->Acknowledge",
     "html": "Discover-&gt;Offer-&gt;Request-&gt;Acknowledge"
    },
    {
     "id": "d",
     "type": "text",
     "value": "Request->Discover->Offer->Acknowledge",
     "html": "Request-&gt;Discover-&gt;Offer-&gt;Acknowledge"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הסדר התקני (DORA): Discover, Offer, Request, Acknowledge. בשאר האפשרויות הסדר שגוי (Offer לפני Discover, Request לפני Acknowledge, או Request לפני Discover).",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q4",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "explanationHtml": "הסדר התקני (DORA): Discover, Offer, Request, Acknowledge. בשאר האפשרויות הסדר שגוי (Offer לפני Discover, Request לפני Acknowledge, או Request לפני Discover).",
   "dedupKey": "81478e2bc3117db7"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל",
     "html": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת ההשהיה שידור כוללת. כמו כן, לפתור את בעיית HOL שקיימת ב HTTP/2.0",
     "html": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת ההשהיה שידור כוללת. כמו כן, לפתור את בעיית HOL שקיימת ב HTTP/2.0"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כדי לבטל את צורך בכתובות IP",
     "html": "כדי לבטל את צורך בכתובות IP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כדי לספק שיטת שידור אותות אמינה יותר",
     "html": "כדי לספק שיטת שידור אותות אמינה יותר"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "QUIC רץ מעל UDP, משלב את לחיצת היד והצפנה (פחות RTT להקמה), ומריבוב זרמים בלי חסימה הדדית ברמת התעבורה, ולכן פותר את בעיית ה-HOL שנשארה ב-HTTP/2 מעל TCP.\nא: הצפנה היא תוצר לוואי, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: \"שידור אותות\" שייך לשכבה הפיזית.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q5",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום TCP?",
   "explanationHtml": "QUIC רץ מעל UDP, משלב את לחיצת היד והצפנה (פחות RTT להקמה), ומריבוב זרמים בלי חסימה הדדית ברמת התעבורה, ולכן פותר את בעיית ה-HOL שנשארה ב-HTTP/2 מעל TCP.<br>א: הצפנה היא תוצר לוואי, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: \"שידור אותות\" שייך לשכבה הפיזית.",
   "dedupKey": "86b02131760445c5"
  },
  {
   "num": 6,
   "topic": "http",
   "question": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: http://mywebsite.com/index.html.\nבדפדפן התקבל מסמך HTML עם הפניה לשתי תמונות בכתובות הבאות:\n`http://mywebsite.com/imageA.jpg`\n`http://mymirrorwebsite.com/imageB.jpg`\nלאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n`mywebsite.com: 203.0.113.10`\n`mymirrorwebsite.com: 203.0.113.10`\nבהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1",
     "html": "1"
    },
    {
     "id": "b",
     "type": "text",
     "value": "2",
     "html": "2"
    },
    {
     "id": "c",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת",
     "html": "לא ניתן לדעת"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "ב-HTTP/1.1 חיבור מתמשך משויך לשרת לפי שם המארח (origin): index.html ו-imageA.jpg מ-`mywebsite.com` עוברים על חיבור אחד (persistent), ו-imageB.jpg מ-`mymirrorwebsite.com` דורש חיבור שני, למרות שכתובת ה-IP זהה (איחוד חיבורים לפי IP משותף קיים רק ב-HTTP/2).\nלכן 2 חיבורים. 3 היה נדרש ב-HTTP/1.0 ללא חיבור מתמשך, ו-1 מניח איחוד שאינו נהוג ב-HTTP/1.1.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Judgement call: connections are per host name in HTTP/1.1 (the identical IP is the trap); matches the sample's bold option.",
   "id": "SAMP-2-Q6",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: http://mywebsite.com/index.html.<br>בדפדפן התקבל מסמך HTML עם הפניה לשתי תמונות בכתובות הבאות:<br><code class=\"tok\" dir=\"ltr\">http://mywebsite.com/imageA.jpg</code><br><code class=\"tok\" dir=\"ltr\">http://mymirrorwebsite.com/imageB.jpg</code><br>לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:<br><code class=\"tok\" dir=\"ltr\">mywebsite.com: 203.0.113.10</code><br><code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com: 203.0.113.10</code><br>בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "explanationHtml": "ב-HTTP/1.1 חיבור מתמשך משויך לשרת לפי שם המארח (origin): index.html ו-imageA.jpg מ-<code class=\"tok\" dir=\"ltr\">mywebsite.com</code> עוברים על חיבור אחד (persistent), ו-imageB.jpg מ-<code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com</code> דורש חיבור שני, למרות שכתובת ה-IP זהה (איחוד חיבורים לפי IP משותף קיים רק ב-HTTP/2).<br>לכן 2 חיבורים. 3 היה נדרש ב-HTTP/1.0 ללא חיבור מתמשך, ו-1 מניח איחוד שאינו נהוג ב-HTTP/1.1.",
   "dedupKey": "3e343c20a669786a"
  },
  {
   "num": 7,
   "topic": "http",
   "question": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע",
     "html": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לאפשר מעקב בין אתרים ומקוד פרסומות",
     "html": "לאפשר מעקב בין אתרים ומקוד פרסומות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לשפר את אבטחה בהתחברות (session) משתמשים",
     "html": "לשפר את אבטחה בהתחברות (session) משתמשים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לנהל את ה-sessions של המשתמש באתר נוכחי",
     "html": "לנהל את ה-sessions של המשתמש באתר נוכחי"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Cookie של צד שלישי נקבע על ידי דומיין שאינו האתר המבוקר (למשל רשת פרסום), ולכן מאפשר לזהות את אותו משתמש בין אתרים שונים ולכוון פרסומות. העדפות וסשנים באתר הנוכחי הם תפקיד של cookies של צד ראשון.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Option b printed with the typo 'ומקוד' (probably 'ומיקוד'); transcribed as printed.",
   "id": "SAMP-2-Q7",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "explanationHtml": "Cookie של צד שלישי נקבע על ידי דומיין שאינו האתר המבוקר (למשל רשת פרסום), ולכן מאפשר לזהות את אותו משתמש בין אתרים שונים ולכוון פרסומות. העדפות וסשנים באתר הנוכחי הם תפקיד של cookies של צד ראשון.",
   "dedupKey": "08593eb0323dbc7c"
  },
  {
   "num": 8,
   "topic": "http",
   "question": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גאוגרפיים שונים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "העברת צד השרת האתר לשימוש בפרוטוקול HTTP/2.0",
     "html": "העברת צד השרת האתר לשימוש בפרוטוקול HTTP/2.0"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שימוש ב CDN לאחסון של משאבים סטטיים של האתר קרוב יותר למשתמש קצה",
     "html": "שימוש ב CDN לאחסון של משאבים סטטיים של האתר קרוב יותר למשתמש קצה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אופטימיזציה של שרת אינטרנט לטיפול במספר גדול יותר של סוקטים בו-זמנית",
     "html": "אופטימיזציה של שרת אינטרנט לטיפול במספר גדול יותר של סוקטים בו-זמנית"
    },
    {
     "id": "d",
     "type": "text",
     "value": "העברת צד השרת לשימוש בפרוטוקול HTTP/3.0",
     "html": "העברת צד השרת לשימוש בפרוטוקול HTTP/3.0"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "משתמשים מאזורים שונים סובלים מ-RTT גדול. CDN מקרב את המשאבים הסטטיים אליהם, ובכך מקצר משמעותית את זמן הטעינה. HTTP/2 ו-HTTP/3 משפרים את ניצול הקישור אך אינם מקצרים את המרחק הגאוגרפי, ואופטימיזציית סוקטים משפרת קיבולת השרת ולא את זמן ההגעה.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q8",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גאוגרפיים שונים?",
   "explanationHtml": "משתמשים מאזורים שונים סובלים מ-RTT גדול. CDN מקרב את המשאבים הסטטיים אליהם, ובכך מקצר משמעותית את זמן הטעינה. HTTP/2 ו-HTTP/3 משפרים את ניצול הקישור אך אינם מקצרים את המרחק הגאוגרפי, ואופטימיזציית סוקטים משפרת קיבולת השרת ולא את זמן ההגעה.",
   "dedupKey": "ed40ae5291c0d255"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת תעבורה המאפשר הקצאה דינמית של כתובות IP פנימיות",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת תעבורה המאפשר הקצאה דינמית של כתובות IP פנימיות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה שרת-לקוח המאפשר הקצאה סטטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת DNS מקומי",
     "html": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה שרת-לקוח המאפשר הקצאה סטטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת DNS מקומי"
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול DHCP הוא במשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של שרת-לקוח",
     "html": "פרוטוקול DHCP הוא במשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של שרת-לקוח"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה אינה נכונה",
     "html": "אף תשובה אינה נכונה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP הוא פרוטוקול של שכבת היישום (לא תעבורה), פועל בדרך כלל מעל UDP (פורטים 67 ו-68) ומקצה כתובות באופן דינמי.\nא: מציבה אותו בשכבת התעבורה. ב: מתארת הקצאה סטטית, אבל DHCP דינמי. ג: טוענת שהוא משתמש ב-TCP בדרך כלל, וזה שגוי (UDP). לכן ד.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Option c printed as 'הוא במשתמש בדרך כלל' (garbled); transcribed as printed.",
   "id": "SAMP-2-Q9",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "explanationHtml": "DHCP הוא פרוטוקול של שכבת היישום (לא תעבורה), פועל בדרך כלל מעל UDP (פורטים 67 ו-68) ומקצה כתובות באופן דינמי.<br>א: מציבה אותו בשכבת התעבורה. ב: מתארת הקצאה סטטית, אבל DHCP דינמי. ג: טוענת שהוא משתמש ב-TCP בדרך כלל, וזה שגוי (UDP). לכן ד.",
   "dedupKey": "c0a8290bbfeb8323"
  },
  {
   "num": 10,
   "topic": "http",
   "question": "מפתח אתרים מעוניין לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "תמיד עדיף להשתמש ב GET מותנה (Conditional get)",
     "html": "תמיד עדיף להשתמש ב GET מותנה (Conditional get)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם – הבקשה תשלח עם header: if-Modified-Since",
     "html": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם – הבקשה תשלח עם header: if-Modified-Since"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן",
     "html": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אין הבדל משמעותי בין אפשרויות",
     "html": "אין הבדל משמעותי בין אפשרויות"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "GET מותנה עם `If-Modified-Since` מאפשר לשרת להשיב `304 Not Modified` (ללא גוף) כשהתמונה לא השתנתה, וכך חוסך העברה. הוא מועיל בעיקר כשהתוכן עלול להשתנות.\nא: \"תמיד\" מוחלט מדי (לתוכן שאינו משתנה או ללא מטמון אין תועלת). ג: PUT מעלה תוכן לשרת ואינו בודק שינוי. ד: יש הבדל ברור.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "id": "SAMP-2-Q10",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מפתח אתרים מעוניין לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "explanationHtml": "GET מותנה עם <code class=\"tok\" dir=\"ltr\">If-Modified-Since</code> מאפשר לשרת להשיב <code class=\"tok\" dir=\"ltr\">304 Not Modified</code> (ללא גוף) כשהתמונה לא השתנתה, וכך חוסך העברה. הוא מועיל בעיקר כשהתוכן עלול להשתנות.<br>א: \"תמיד\" מוחלט מדי (לתוכן שאינו משתנה או ללא מטמון אין תועלת). ג: PUT מעלה תוכן לשרת ואינו בודק שינוי. ד: יש הבדל ברור.",
   "dedupKey": "3d2810dc7390f3b8"
  },
  {
   "num": 11,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה\n`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "b",
     "type": "text",
     "value": "B",
     "html": "B"
    },
    {
     "id": "c",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "d",
     "type": "text",
     "value": "D",
     "html": "D"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match. הכתובת $25.36.67.5$ בבינארי: $00011001.00100100.01000011.00000101$. A: $/16$ מתאימה ($25.36$). B: $/20$ מכסה $128\\text{-}143$ - לא. C: $/20$ מכסה $64\\text{-}79$ - כוללת 67. D - לא.\nA ו-C מתאימות, והארוכה היא C.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Printed in the 'additional questions' part; options are Latin a-d in the source.",
   "id": "SAMP-2-Q11",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה<br><code class=\"tok\" dir=\"ltr\">A: 25.36.64.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code>",
   "explanationHtml": "Longest Prefix Match. הכתובת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span> בבינארי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>00011001.00100100.01000011.00000101</mn></mrow><annotation encoding=\"application/x-tex\">00011001.00100100.01000011.00000101</annotation></semantics></math></span>. A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/16</annotation></semantics></math></span> מתאימה (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36</mn></mrow><annotation encoding=\"application/x-tex\">25.36</annotation></semantics></math></span>). B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn><mtext>-</mtext><mn>143</mn></mrow><annotation encoding=\"application/x-tex\">128\\text{-}143</annotation></semantics></math></span> - לא. C: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mtext>-</mtext><mn>79</mn></mrow><annotation encoding=\"application/x-tex\">64\\text{-}79</annotation></semantics></math></span> - כוללת 67. D - לא.<br>A ו-C מתאימות, והארוכה היא C.",
   "dedupKey": "85d490a5904ccd45"
  },
  {
   "num": 12,
   "topic": "dns_dhcp",
   "question": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כן, אפשר לוותר על ARP",
     "html": "כן, אפשר לוותר על ARP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון: אי אפשר לוותר על ARP",
     "html": "לא נכון: אי אפשר לוותר על ARP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כן אפשר לוותר על ARP ברשת גדולה – רק עבור לקוחות שמקבלים מידע משרת ה-DHCP אבל לא עבור תחנות קצה עם IP סטטי",
     "html": "כן אפשר לוותר על ARP ברשת גדולה – רק עבור לקוחות שמקבלים מידע משרת ה-DHCP אבל לא עבור תחנות קצה עם IP סטטי"
    },
    {
     "id": "d",
     "type": "text",
     "value": "התשובה לא חד משמעית – תלויה בהגדרות מערכת",
     "html": "התשובה לא חד משמעית – תלויה בהגדרות מערכת"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP מקצה כתובת IP והגדרות, אבל אינו מתרגם כתובות IP לכתובות MAC. כדי לבנות מסגרת Ethernet ללקוח או ל-Gateway עדיין צריך ARP. לכן אי אפשר לוותר עליו, גם כשכל התחנות משתמשות ב-DHCP.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. Question text read as 'can DHCP be used as a full substitute for ARP when DHCP is already used' (the printed stem is partly ambiguous).",
   "id": "SAMP-2-Q12",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "explanationHtml": "DHCP מקצה כתובת IP והגדרות, אבל אינו מתרגם כתובות IP לכתובות MAC. כדי לבנות מסגרת Ethernet ללקוח או ל-Gateway עדיין צריך ARP. לכן אי אפשר לוותר עליו, גם כשכל התחנות משתמשות ב-DHCP.",
   "dedupKey": "aefd29aabf2b2bb9"
  },
  {
   "num": 13,
   "topic": "ip_cidr",
   "question": "חבילת IP (datagram) בגודל 2000B עברה פרגמנטציה (fragmentation). נתון כי MTU של הרשת – 420B וגודל ה-header הוא 20B ואין שימוש בהרחבות. מה נכון לגבי הערך הרשום בשדה ה-offset בחבילה מספר 5?\nאופסט – בבלוקים של 8B\nחבילה ראשונה – אופסט = 0, חבילה שניה – 50, שלישית – 100, רביעית – 150, חמישית - 200",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1600",
     "html": "1600"
    },
    {
     "id": "b",
     "type": "text",
     "value": "200",
     "html": "200"
    },
    {
     "id": "c",
     "type": "text",
     "value": "400",
     "html": "400"
    },
    {
     "id": "d",
     "type": "text",
     "value": "480",
     "html": "480"
    },
    {
     "id": "e",
     "type": "text",
     "value": "405",
     "html": "405"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בכל פרגמנט נשארים $420-20=400$ בתים של נתונים (כפולה של 8). הפרגמנט החמישי מתחיל אחרי 4 פרגמנטים מלאים: $4\\cdot400=1600$ בתים, והשדה נמדד ביחידות של 8 בתים: $1600/8=200$.\n1600 הוא ה-offset בבתים, ולא ביחידות של 8.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py. The printed example line 'first 0, second 50, ... fifth 200' is part of the question stem and shows the offsets in 8 B units.",
   "id": "SAMP-2-Q13",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילת IP (datagram) בגודל 2000B עברה פרגמנטציה (fragmentation). נתון כי MTU של הרשת – 420B וגודל ה-header הוא 20B ואין שימוש בהרחבות. מה נכון לגבי הערך הרשום בשדה ה-offset בחבילה מספר 5?<br>אופסט – בבלוקים של 8B<br>חבילה ראשונה – אופסט = 0, חבילה שניה – 50, שלישית – 100, רביעית – 150, חמישית - 200",
   "explanationHtml": "בכל פרגמנט נשארים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>420</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">420-20=400</annotation></semantics></math></span> בתים של נתונים (כפולה של 8). הפרגמנט החמישי מתחיל אחרי 4 פרגמנטים מלאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>400</mn><mo>=</mo><mn>1600</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot400=1600</annotation></semantics></math></span> בתים, והשדה נמדד ביחידות של 8 בתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1600</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">1600/8=200</annotation></semantics></math></span>.<br>1600 הוא ה-offset בבתים, ולא ביחידות של 8.",
   "dedupKey": "c831c9c75467f67f"
  },
  {
   "num": 14,
   "topic": "tcp",
   "question": "בהינתן גרף התנהגות של פרוטוקול TCP\nתהליך slow-start עובד בפרקים:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "[1, 6]",
     "html": "[1, 6]"
    },
    {
     "id": "b",
     "type": "text",
     "value": "[6, 16]",
     "html": "[6, 16]"
    },
    {
     "id": "c",
     "type": "text",
     "value": "[1,6] , [23, 26]",
     "html": "[1,6] , [23, 26]"
    },
    {
     "id": "d",
     "type": "text",
     "value": "[6, 16], [17, 22]",
     "html": "[6, 16], [17, 22]"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-Slow Start החלון מוכפל בכל סבב: $1,2,4,8,16,32$ בסבבים $1\\text{-}6$, ואחר כך מתחיל Congestion Avoidance (גידול ב-1 לסבב, עד סבב 16). אחרי ההפסד בסבב 16 החלון יורד ל-21 וגדל ב-1 (סבבים $17\\text{-}22$, התאוששות/CA), ואחרי ההפסד השני החלון חוזר ל-1 ושוב מוכפל: $1,2,4,8$ בסבבים $23\\text{-}26$.\nלכן Slow Start ב-$[1,6]$ וב-$[23,26]$.",
   "note": "No official key; solved independently (the sample's bold option agrees). Calculations: tools/verify/SAMP-2/check.py.",
   "image": "images/exams/SAMP-2-Q14.png",
   "id": "SAMP-2-Q14",
   "examCode": "SAMP-2",
   "examLabel": "מבחן לדוגמה 2024",
   "year": 2024,
   "source": "sample",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "בהינתן גרף התנהגות של פרוטוקול TCP<br>תהליך slow-start עובד בפרקים:",
   "explanationHtml": "ב-Slow Start החלון מוכפל בכל סבב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn><mo separator=\"true\">,</mo><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16,32</annotation></semantics></math></span> בסבבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mtext>-</mtext><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">1\\text{-}6</annotation></semantics></math></span>, ואחר כך מתחיל Congestion Avoidance (גידול ב-1 לסבב, עד סבב 16). אחרי ההפסד בסבב 16 החלון יורד ל-21 וגדל ב-1 (סבבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn><mtext>-</mtext><mn>22</mn></mrow><annotation encoding=\"application/x-tex\">17\\text{-}22</annotation></semantics></math></span>, התאוששות/CA), ואחרי ההפסד השני החלון חוזר ל-1 ושוב מוכפל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8</annotation></semantics></math></span> בסבבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>23</mn><mtext>-</mtext><mn>26</mn></mrow><annotation encoding=\"application/x-tex\">23\\text{-}26</annotation></semantics></math></span>.<br>לכן Slow Start ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[1,6]</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>23</mn><mo separator=\"true\">,</mo><mn>26</mn><mo stretchy=\"false\">]</mo></mrow><annotation encoding=\"application/x-tex\">[23,26]</annotation></semantics></math></span>.",
   "dedupKey": "b8a9248f06a83bde"
  },
  {
   "num": 1,
   "topic": "ip_cidr",
   "question": "אלו מבין הבאים יכול לבצע re-assembly ל-IP Packets?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "רק NAT",
     "html": "רק NAT"
    },
    {
     "id": "b",
     "type": "text",
     "value": "רק תחנת היעד ו-NAT",
     "html": "רק תחנת היעד ו-NAT"
    },
    {
     "id": "c",
     "type": "text",
     "value": "רק תחנת היעד",
     "html": "רק תחנת היעד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "רק Switch",
     "html": "רק Switch"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הרכבה מחדש של פרגמנטים מתבצעת בתחנת היעד. גם NAT יכול לבצע אותה: מספרי הפורטים (שבהם הוא משתמש לתרגום) נמצאים רק בפרגמנט הראשון, ולכן NAT שמתרגם כתובות ופורטים נדרש לעיתים להרכיב את החבילה כדי לתרגם נכון.\nSwitch פועל בשכבת הקו ואינו רואה את שכבת ה-IP, ולכן אינו מרכיב חבילות. \"רק NAT\" ו-\"רק תחנת היעד\" חסרות כל אחת את הצד השני.\nהערה: בספר הלימוד ההרכבה מחדש מתבצעת בתחנת היעד בלבד, ולכן ג היא תשובה מתבקשת. המפתח הרשמי של הבחינה הוא ב, משום שהשאלה שואלת מי **יכול** להרכיב: NAT שמתרגם פורטים צריך את כותרת התעבורה, שנמצאת רק בפרגמנט הראשון, ולכן לעיתים הוא מרכיב את החבילה בעצמו.",
   "note": "Official highlighted key b kept; refuter's c (textbook default) answered in a visible הערה (arbiter 2026-10-24).",
   "id": "22S-A-Q1",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "אלו מבין הבאים יכול לבצע re-assembly ל-IP Packets?",
   "explanationHtml": "הרכבה מחדש של פרגמנטים מתבצעת בתחנת היעד. גם NAT יכול לבצע אותה: מספרי הפורטים (שבהם הוא משתמש לתרגום) נמצאים רק בפרגמנט הראשון, ולכן NAT שמתרגם כתובות ופורטים נדרש לעיתים להרכיב את החבילה כדי לתרגם נכון.<br>Switch פועל בשכבת הקו ואינו רואה את שכבת ה-IP, ולכן אינו מרכיב חבילות. \"רק NAT\" ו-\"רק תחנת היעד\" חסרות כל אחת את הצד השני.<br>הערה: בספר הלימוד ההרכבה מחדש מתבצעת בתחנת היעד בלבד, ולכן ג היא תשובה מתבקשת. המפתח הרשמי של הבחינה הוא ב, משום שהשאלה שואלת מי <strong>יכול</strong> להרכיב: NAT שמתרגם פורטים צריך את כותרת התעבורה, שנמצאת רק בפרגמנט הראשון, ולכן לעיתים הוא מרכיב את החבילה בעצמו.",
   "dedupKey": "d76c02eee7314eb6"
  },
  {
   "num": 2,
   "topic": "nat_ipv6_icmp",
   "question": "אלו מבין הבאים בא לפתור את מצוקת הכתובות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Router",
     "html": "Router"
    },
    {
     "id": "b",
     "type": "text",
     "value": "NAT",
     "html": "NAT"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Switch",
     "html": "Switch"
    },
    {
     "id": "d",
     "type": "text",
     "value": "DNS",
     "html": "DNS"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "מצוקת כתובות ה-IPv4: NAT מאפשר להרבה תחנות ברשת פרטית להשתמש בכתובת ציבורית אחת (באמצעות תרגום פורטים).\nRouter מנתב, Switch מעביר מסגרות לפי MAC ו-DNS מתרגם שמות לכתובות - אף אחד מהם אינו חוסך כתובות.",
   "id": "22S-A-Q2",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "אלו מבין הבאים בא לפתור את מצוקת הכתובות?",
   "explanationHtml": "מצוקת כתובות ה-IPv4: NAT מאפשר להרבה תחנות ברשת פרטית להשתמש בכתובת ציבורית אחת (באמצעות תרגום פורטים).<br>Router מנתב, Switch מעביר מסגרות לפי MAC ו-DNS מתרגם שמות לכתובות - אף אחד מהם אינו חוסך כתובות.",
   "dedupKey": "028fa8a1eac66ab1"
  },
  {
   "num": 3,
   "topic": "ip_cidr",
   "question": "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes. מה נכון לגבי חבילה מספר 5 (מתוך 5)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Offset=1600",
     "html": "Offset=1600"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Offset=200",
     "html": "Offset=200"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Offset=400",
     "html": "Offset=400"
    },
    {
     "id": "d",
     "type": "text",
     "value": "Offset=480",
     "html": "Offset=480"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "2000 הבתים הם נתונים, והם נחתכים ל-5 פרגמנטים, כלומר כל פרגמנט נושא $F$ בתים (כפולה של 8) עם $400\\le F<500$ כדי שיהיו בדיוק 5. הפרגמנט החמישי מתחיל אחרי $4F$ בתים, והשדה Offset נמדד בבלוקים של 8: $\\text{Offset}=4F/8=F/2\\in[200,250)$.\nמבין האפשרויות רק 200 נמצא בטווח ($F=400$, כלומר MTU של 420). 1600 הוא ההיסט בבתים (לא בבלוקים), ו-400 ו-480 מתאימים לפרגמנטים גדולים מדי.",
   "note": "Official highlighted key; the MTU is not printed, the offset range pins F=400 (verified in tools/verify/22S-A/check.py).",
   "id": "22S-A-Q3",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes. מה נכון לגבי חבילה מספר 5 (מתוך 5)?",
   "explanationHtml": "2000 הבתים הם נתונים, והם נחתכים ל-5 פרגמנטים, כלומר כל פרגמנט נושא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> בתים (כפולה של 8) עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>400</mn><mo>≤</mo><mi>F</mi><mo>&lt;</mo><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">400\\le F&lt;500</annotation></semantics></math></span> כדי שיהיו בדיוק 5. הפרגמנט החמישי מתחיל אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">4F</annotation></semantics></math></span> בתים, והשדה Offset נמדד בבלוקים של 8: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mtext>Offset</mtext><mo>=</mo><mn>4</mn><mi>F</mi><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mi>F</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>∈</mo><mo stretchy=\"false\">[</mo><mn>200</mn><mo separator=\"true\">,</mo><mn>250</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\text{Offset}=4F/8=F/2\\in[200,250)</annotation></semantics></math></span>.<br>מבין האפשרויות רק 200 נמצא בטווח (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">F=400</annotation></semantics></math></span>, כלומר MTU של 420). 1600 הוא ההיסט בבתים (לא בבלוקים), ו-400 ו-480 מתאימים לפרגמנטים גדולים מדי.",
   "dedupKey": "64c70ba8f32ae6dc"
  },
  {
   "num": 4,
   "topic": "dns_dhcp",
   "question": "איזו תשובה מתארת בצורה המדויקת ביותר את פרוטוקול DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול הפועל בשכבת הקו (Data-Link Layer) כיוון שמטרתו היא לאפשר לתחנה לקבל כתובת IP מקומית",
     "html": "פרוטוקול הפועל בשכבת הקו (Data-Link Layer) כיוון שמטרתו היא לאפשר לתחנה לקבל כתובת IP מקומית"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול הפועל בשכבת התעבורה שפועל על-גבי פרוטוקול TCP כיוון שכתובות ה-IP ייחודיות וידועות.",
     "html": "פרוטוקול הפועל בשכבת התעבורה שפועל על-גבי פרוטוקול TCP כיוון שכתובות ה-IP ייחודיות וידועות."
    },
    {
     "id": "c",
     "type": "text",
     "value": "מאפשר להתחבר לרשת באופן ידני (כלומר הלקוח יבחר כתובת IP מקומית ללא תלות בשרת ה-DHCP)",
     "html": "מאפשר להתחבר לרשת באופן ידני (כלומר הלקוח יבחר כתובת IP מקומית ללא תלות בשרת ה-DHCP)"
    },
    {
     "id": "d",
     "type": "text",
     "value": "פרוטוקול בשכבת האפליקציה שפועל מעל פרוטוקול UDP בשכבת התעבורה",
     "html": "פרוטוקול בשכבת האפליקציה שפועל מעל פרוטוקול UDP בשכבת התעבורה"
    }
   ],
   "correctId": "d",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "DHCP הוא פרוטוקול של שכבת האפליקציה (לקוח-שרת) שרץ מעל UDP (פורטים 67 ו-68), כי ללקוח עדיין אין כתובת IP ולכן הוא משדר.\nא: אינו פרוטוקול של שכבת הקו. ב: אינו רץ מעל TCP. ג: DHCP דווקא מקצה את הכתובת ואינו ידני.",
   "id": "22S-A-Q4",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "איזו תשובה מתארת בצורה המדויקת ביותר את פרוטוקול DHCP?",
   "explanationHtml": "DHCP הוא פרוטוקול של שכבת האפליקציה (לקוח-שרת) שרץ מעל UDP (פורטים 67 ו-68), כי ללקוח עדיין אין כתובת IP ולכן הוא משדר.<br>א: אינו פרוטוקול של שכבת הקו. ב: אינו רץ מעל TCP. ג: DHCP דווקא מקצה את הכתובת ואינו ידני.",
   "dedupKey": "e1e5aaf18672084e"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "מעוניינים להציג בדפדפן את דף הבית של אתר ״שושי-נט״ בכתובת www.shoshinet.com. נניח כי גודל הדף הוא 100KByte ובתוכו הפניה ל-5 תמונות, כל אחת מהתמונות בגודל 300KByte. כמו כן, ידוע כי הדף המבוקש והתמונות מאוחסנים באותו מחשב. ה-RTT בין המחשב שלך לשרת הוא 500msec ומהירות הקו היא 100Mbps. ניתן להזניח את זמן שידור הודעת ה-GET.\nכמה זמן יידרש לטעינת הדף כולל התמונות ב-host בחיבור מסוג HTTP Persistent (ללא pipelining)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`T = 1sec + 100KB/100Mb + 5*(500msec + 300KB/100Mb)`",
     "html": "<code class=\"tok\" dir=\"ltr\">T = 1sec + 100KB/100Mb + 5*(500msec + 300KB/100Mb)</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`T = 500msec + 100KB /100Mb + 5*(1sec + 300KB /100Mb)`",
     "html": "<code class=\"tok\" dir=\"ltr\">T = 500msec + 100KB /100Mb + 5*(1sec + 300KB /100Mb)</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`T = 1sec + 100KB /100Mb + 500msec + 5*(300KB /100Mb)`",
     "html": "<code class=\"tok\" dir=\"ltr\">T = 1sec + 100KB /100Mb + 500msec + 5*(300KB /100Mb)</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`T = 1msec + 100KB /100Mb + 5*(1sec + 250KB/100Mb)`",
     "html": "<code class=\"tok\" dir=\"ltr\">T = 1msec + 100KB /100Mb + 5*(1sec + 250KB/100Mb)</code>"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "חיבור persistent: ההקמה של חיבור ה-TCP עולה RTT אחד, ואחריה בקשת ה-GET של הדף עולה עוד RTT (יחד $2\\cdot 500\\,ms=1\\,sec$), ואז משדרים את הדף. כל אחת מ-5 התמונות (ללא pipelining, בזו אחר זו על אותו חיבור) עולה RTT אחד של בקשה ועוד זמן שידור התמונה.\n$$T=1\\,sec+\\frac{100KB}{100Mb}+5\\left(500\\,msec+\\frac{300KB}{100Mb}\\right)\\approx 3.63\\,sec$$\nב: נותן RTT כפול לכל תמונה (כמו חיבור שאינו persistent). ג: מחשב את ה-RTT של התמונות פעם אחת בלבד (כמו pipelining). ד: ערכים שאינם מתאימים לנתונים.",
   "id": "22S-A-Q5",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מעוניינים להציג בדפדפן את דף הבית של אתר ״שושי-נט״ בכתובת www.shoshinet.com. נניח כי גודל הדף הוא 100KByte ובתוכו הפניה ל-5 תמונות, כל אחת מהתמונות בגודל 300KByte. כמו כן, ידוע כי הדף המבוקש והתמונות מאוחסנים באותו מחשב. ה-RTT בין המחשב שלך לשרת הוא 500msec ומהירות הקו היא 100Mbps. ניתן להזניח את זמן שידור הודעת ה-GET.<br>כמה זמן יידרש לטעינת הדף כולל התמונות ב-host בחיבור מסוג HTTP Persistent (ללא pipelining)?",
   "explanationHtml": "חיבור persistent: ההקמה של חיבור ה-TCP עולה RTT אחד, ואחריה בקשת ה-GET של הדף עולה עוד RTT (יחד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>500</mn><mtext> </mtext><mi>m</mi><mi>s</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi>s</mi><mi>e</mi><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">2\\cdot 500\\,ms=1\\,sec</annotation></semantics></math></span>), ואז משדרים את הדף. כל אחת מ-5 התמונות (ללא pipelining, בזו אחר זו על אותו חיבור) עולה RTT אחד של בקשה ועוד זמן שידור התמונה.<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>T</mi><mo>=</mo><mn>1</mn><mtext> </mtext><mi>s</mi><mi>e</mi><mi>c</mi><mo>+</mo><mfrac><mrow><mn>100</mn><mi>K</mi><mi>B</mi></mrow><mrow><mn>100</mn><mi>M</mi><mi>b</mi></mrow></mfrac><mo>+</mo><mn>5</mn><mrow><mo fence=\"true\">(</mo><mn>500</mn><mtext> </mtext><mi>m</mi><mi>s</mi><mi>e</mi><mi>c</mi><mo>+</mo><mfrac><mrow><mn>300</mn><mi>K</mi><mi>B</mi></mrow><mrow><mn>100</mn><mi>M</mi><mi>b</mi></mrow></mfrac><mo fence=\"true\">)</mo></mrow><mo>≈</mo><mn>3.63</mn><mtext> </mtext><mi>s</mi><mi>e</mi><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">T=1\\,sec+\\frac{100KB}{100Mb}+5\\left(500\\,msec+\\frac{300KB}{100Mb}\\right)\\approx 3.63\\,sec</annotation></semantics></math></span><br>ב: נותן RTT כפול לכל תמונה (כמו חיבור שאינו persistent). ג: מחשב את ה-RTT של התמונות פעם אחת בלבד (כמו pipelining). ד: ערכים שאינם מתאימים לנתונים.",
   "dedupKey": "daed2449bb318e63"
  },
  {
   "num": 6,
   "topic": "udp_checksum",
   "question": "בחר את הנוסח המדויק ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "מנגנון Checksum משמש לגילוי שגיאות (האם מידע השתבש). מנגנון זה אינו בטוח לגמרי שכן אם יש שגיאה בהודעה וגם יש שגיאה מפצה בשדה ה-checksum, אזי הצד המקבל כלל לא יבחין בשגיאה.",
     "html": "מנגנון Checksum משמש לגילוי שגיאות (האם מידע השתבש). מנגנון זה אינו בטוח לגמרי שכן אם יש שגיאה בהודעה וגם יש שגיאה מפצה בשדה ה-checksum, אזי הצד המקבל כלל לא יבחין בשגיאה."
    },
    {
     "id": "b",
     "type": "text",
     "value": "מנגנון Checksum משמש לבדיקת תקינות/שלמות ההודעה שנשלחה והוא בטוח לחלוטין. בפרוטוקול UDP, אם הערך שמופיע בשדה ה-checksum שווה לערך שחישב הצד המקבל, הרי שההודעה תקינה באופן וודאי.",
     "html": "מנגנון Checksum משמש לבדיקת תקינות/שלמות ההודעה שנשלחה והוא בטוח לחלוטין. בפרוטוקול UDP, אם הערך שמופיע בשדה ה-checksum שווה לערך שחישב הצד המקבל, הרי שההודעה תקינה באופן וודאי."
    },
    {
     "id": "c",
     "type": "text",
     "value": "מנגנון ה-checksum בודק האם ההודעה שהתקבלה זהה להודעה שנשלחה. בגלל מבנה UDP Datagram, אין אפשרות שה-header ישתבש אלא רק המידע שהוא עוטף.",
     "html": "מנגנון ה-checksum בודק האם ההודעה שהתקבלה זהה להודעה שנשלחה. בגלל מבנה UDP Datagram, אין אפשרות שה-header ישתבש אלא רק המידע שהוא עוטף."
    },
    {
     "id": "d",
     "type": "text",
     "value": "מנגנון ה-checksum משמש לתיקון שגיאות ולכן אם ה-checksum שחושב לא שווה לערך ה-checksum שנשלח בהודעה מעל פרוטוקול UDP, הרי שהחבילה תתוקן ותעלה לשכבת האפליקציה.",
     "html": "מנגנון ה-checksum משמש לתיקון שגיאות ולכן אם ה-checksum שחושב לא שווה לערך ה-checksum שנשלח בהודעה מעל פרוטוקול UDP, הרי שהחבילה תתוקן ותעלה לשכבת האפליקציה."
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "Checksum מזהה שגיאות בלבד ואינו מתקן אותן, והוא אינו מושלם: שינויים שמבטלים זה את זה (למשל שגיאה בהודעה ושגיאה מפצה בשדה ה-checksum) לא יתגלו.\nב: \"בטוח לחלוטין\" ו-\"ודאי\" שגויים - התאמה אינה הוכחה לתקינות. ג: גם ה-header יכול להשתבש. ד: ה-checksum אינו מתקן; חבילה פגומה נזרקת.",
   "id": "22S-A-Q6",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "UDP ו-checksum",
   "questionHtml": "בחר את הנוסח המדויק ביותר:",
   "explanationHtml": "Checksum מזהה שגיאות בלבד ואינו מתקן אותן, והוא אינו מושלם: שינויים שמבטלים זה את זה (למשל שגיאה בהודעה ושגיאה מפצה בשדה ה-checksum) לא יתגלו.<br>ב: \"בטוח לחלוטין\" ו-\"ודאי\" שגויים - התאמה אינה הוכחה לתקינות. ג: גם ה-header יכול להשתבש. ד: ה-checksum אינו מתקן; חבילה פגומה נזרקת.",
   "dedupKey": "46476d8297665281"
  },
  {
   "num": 7,
   "topic": "dns_dhcp",
   "question": "קבלת כתובת IP באופן דינאמי משרת DHCP בעת הצטרפות לרשת מתבצע בסדר הבא:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`DHCP Request->DHCP Offer->DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Request-&gt;DHCP Offer-&gt;DHCP ACK</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`DHCP Request->DHCP ACK->DHCP Discover->DHCP Offer`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Request-&gt;DHCP ACK-&gt;DHCP Discover-&gt;DHCP Offer</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`DHCP Discover-> DHCP Request-> DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Discover-&gt; DHCP Request-&gt; DHCP ACK</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`DHCP Discover->DHCP Offer->DHCP Request->DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Discover-&gt;DHCP Offer-&gt;DHCP Request-&gt;DHCP ACK</code>"
    }
   ],
   "correctId": "d",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.\nא, ב, ג משמיטות את שלב ה-Offer או הופכות את הסדר.",
   "id": "22S-A-Q7",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "קבלת כתובת IP באופן דינאמי משרת DHCP בעת הצטרפות לרשת מתבצע בסדר הבא:",
   "explanationHtml": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.<br>א, ב, ג משמיטות את שלב ה-Offer או הופכות את הסדר.",
   "dedupKey": "47611b4091c9b1ca"
  },
  {
   "num": 8,
   "topic": "nat_ipv6_icmp",
   "question": "שכבת התעבורה במחשב A (10.0.0.1) שולחת חבילה בגודל 2000Bytes למחשב C (20.0.3.1) אשר משמש כשרת web.\nנקבע MTU בקווים ברשת ל-1500 bytes, פרט לקו המחבר בין R2 ל-R3 אשר בו נקבע MTU = 500Bytes. R1 משמש גם כשרת NAT. ניתן להניח כי גודל ה-header הוא 20 בתים. נתונים כתובת ה-IP של תחנות הקצה והנתבים וכן הרשומה הרלוונטית בטבלת ה-NAT.\nמהי החלוקה לחבילות אשר מתארת בצורה המדויקת ביותר את המידע שיוצא מ-A אל R1?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1`\n`SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0`",
     "html": "<code class=\"tok\" dir=\"ltr\">SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1</code><br><code class=\"tok\" dir=\"ltr\">SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1`\n`SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0`",
     "html": "<code class=\"tok\" dir=\"ltr\">SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1</code><br><code class=\"tok\" dir=\"ltr\">SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`SRC IP 20.0.1.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 2000 | OFFSET 0 | FRAG 0`",
     "html": "<code class=\"tok\" dir=\"ltr\">SRC IP 20.0.1.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 2000 | OFFSET 0 | FRAG 0</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1`\n`SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0`",
     "html": "<code class=\"tok\" dir=\"ltr\">SRC IP 10.0.0.1 | DST IP 20.0.3.1 | SRC PORT 123 | DST PORT 80 | SIZE 1500 | OFFSET 0 | FRAG 1</code><br><code class=\"tok\" dir=\"ltr\">SRC IP 20.0.0.1 | DST IP 20.0.3.1 | SRC PORT 130 | DST PORT 80 | SIZE 540 | OFFSET 185 | FRAG 0</code>"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "השאלה היא על המידע היוצא מ-A אל R1, כלומר לפני ה-NAT: כתובת המקור עדיין הפרטית `10.0.0.1` ופורט המקור 123 (התרגום ל-`20.0.0.1:130` נעשה רק ב-R1).\nהקו של A מוגבל ל-1500: 2000 בתים נתונים מתחלקים לפרגמנט ראשון של 1480 בתים נתונים + 20 header = 1500 (Offset 0, FRAG 1) ופרגמנט שני של 520 בתים נתונים + 20 = 540 (Offset $1480/8=185$, FRAG 0).\nב: כבר אחרי NAT. ג: ללא פרגמנטציה למרות MTU של 1500. ד: מערבב כתובת לפני NAT ואחריו. (ה-MTU של 500 בין R2 ל-R3 משפיע רק בהמשך הדרך.)",
   "image": "images/exams/22S-A-Q8.png",
   "note": "Official highlighted key: option A. The source prints the four packet tables and then a letter list; here the tables are the options. D is the fourth printed table (first packet un-NATed, second NATed).",
   "id": "22S-A-Q8",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "שכבת התעבורה במחשב A (10.0.0.1) שולחת חבילה בגודל 2000Bytes למחשב C (20.0.3.1) אשר משמש כשרת web.<br>נקבע MTU בקווים ברשת ל-1500 bytes, פרט לקו המחבר בין R2 ל-R3 אשר בו נקבע MTU = 500Bytes. R1 משמש גם כשרת NAT. ניתן להניח כי גודל ה-header הוא 20 בתים. נתונים כתובת ה-IP של תחנות הקצה והנתבים וכן הרשומה הרלוונטית בטבלת ה-NAT.<br>מהי החלוקה לחבילות אשר מתארת בצורה המדויקת ביותר את המידע שיוצא מ-A אל R1?",
   "explanationHtml": "השאלה היא על המידע היוצא מ-A אל R1, כלומר לפני ה-NAT: כתובת המקור עדיין הפרטית <code class=\"tok\" dir=\"ltr\">10.0.0.1</code> ופורט המקור 123 (התרגום ל-<code class=\"tok\" dir=\"ltr\">20.0.0.1:130</code> נעשה רק ב-R1).<br>הקו של A מוגבל ל-1500: 2000 בתים נתונים מתחלקים לפרגמנט ראשון של 1480 בתים נתונים + 20 header = 1500 (Offset 0, FRAG 1) ופרגמנט שני של 520 בתים נתונים + 20 = 540 (Offset <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1480</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>185</mn></mrow><annotation encoding=\"application/x-tex\">1480/8=185</annotation></semantics></math></span>, FRAG 0).<br>ב: כבר אחרי NAT. ג: ללא פרגמנטציה למרות MTU של 1500. ד: מערבב כתובת לפני NAT ואחריו. (ה-MTU של 500 בין R2 ל-R3 משפיע רק בהמשך הדרך.)",
   "dedupKey": "88fd8103c11e27cc"
  },
  {
   "num": 9,
   "topic": "sockets_email",
   "question": "סיון מעוניינת להציג בדפדפן את דף הבית של ״שושי-נט״ בכתובת: http://www.shoshinet.com\nניתן להניח כי:\n- הכתובת עבור שרת האינטרנט נרשמה במערכת ה-DNS העולמית ועודנה פעילה.\n- תשובה על DNS A Query מלקוח עבור הכתובת http://www.shoshinet.com תכיל את כתובת ה-IP הבאה: 212.235.27.38\n- הכתובת היא של Web Server במצב online, כלומר יכול להאזין לבקשות מלקוחות ולטפל בהן, אך מאז שהשרת עלה טרם נשלחה אליו בקשה.\n- סיון מעולם לא ביקרה באתר ״שושי-נט״ או באתר אשר מפנה אל אתר ״שושי-נט״/משאבים ששמורים ב-domain של ״שושי-נט״.\n- ידוע כי באופן עקרוני, בקשת HTTP GET בודדת, ללא פרמטרים נוספים לאתר ״שושי-נט״, תענה ב-Response שב-Body שלו מסמך HTML אחד, הכולל טקסט בלבד, ללא לינקים/הפניות למשאבים כלשהם.\n- ידוע כי סיון ביצעה בקשת HTTP GET אחת ובסופו של התהליך, דף הבית של שושי-נט הוצג באופן תקין בדפדפן של סיון.\nכמה Sockets נוצרו בסה״כ הן בצד השרת והן בצד הלקוח מאז שהשרת עלה ועד שדף האתר הוצג בהצלחה בדפדפן של סיון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "b",
     "type": "text",
     "value": "4",
     "html": "4"
    },
    {
     "id": "c",
     "type": "text",
     "value": "2",
     "html": "2"
    },
    {
     "id": "d",
     "type": "text",
     "value": "5",
     "html": "5"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "med",
   "explanation": "בצד השרת: socket האזנה (welcome) שנוצר כשהשרת עלה, וסוקט חיבור אחד שנוצר כשהתקבל החיבור של סיון - 2.\nבצד הלקוח: סוקט UDP עבור שאילתת ה-DNS וסוקט TCP עבור חיבור ה-HTTP - 2 (הדף כולל HTML אחד בלבד, ללא תמונות, ולכן אין חיבורים נוספים).\nסך הכול 4.\n3 מתקבל אם שוכחים את סוקט ה-DNS (או את סוקט ההאזנה), ו-5 מניח חיבור נוסף שלא נדרש.",
   "note": "Official highlighted key: 4 (server welcome + connection socket, client DNS UDP + HTTP TCP socket).",
   "id": "22S-A-Q9",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "Sockets ודואר: SMTP, POP ו-IMAP",
   "questionHtml": "סיון מעוניינת להציג בדפדפן את דף הבית של ״שושי-נט״ בכתובת: http://www.shoshinet.com<br>ניתן להניח כי:<br>- הכתובת עבור שרת האינטרנט נרשמה במערכת ה-DNS העולמית ועודנה פעילה.<br>- תשובה על DNS A Query מלקוח עבור הכתובת http://www.shoshinet.com תכיל את כתובת ה-IP הבאה: 212.235.27.38<br>- הכתובת היא של Web Server במצב online, כלומר יכול להאזין לבקשות מלקוחות ולטפל בהן, אך מאז שהשרת עלה טרם נשלחה אליו בקשה.<br>- סיון מעולם לא ביקרה באתר ״שושי-נט״ או באתר אשר מפנה אל אתר ״שושי-נט״/משאבים ששמורים ב-domain של ״שושי-נט״.<br>- ידוע כי באופן עקרוני, בקשת HTTP GET בודדת, ללא פרמטרים נוספים לאתר ״שושי-נט״, תענה ב-Response שב-Body שלו מסמך HTML אחד, הכולל טקסט בלבד, ללא לינקים/הפניות למשאבים כלשהם.<br>- ידוע כי סיון ביצעה בקשת HTTP GET אחת ובסופו של התהליך, דף הבית של שושי-נט הוצג באופן תקין בדפדפן של סיון.<br>כמה Sockets נוצרו בסה״כ הן בצד השרת והן בצד הלקוח מאז שהשרת עלה ועד שדף האתר הוצג בהצלחה בדפדפן של סיון?",
   "explanationHtml": "בצד השרת: socket האזנה (welcome) שנוצר כשהשרת עלה, וסוקט חיבור אחד שנוצר כשהתקבל החיבור של סיון - 2.<br>בצד הלקוח: סוקט UDP עבור שאילתת ה-DNS וסוקט TCP עבור חיבור ה-HTTP - 2 (הדף כולל HTML אחד בלבד, ללא תמונות, ולכן אין חיבורים נוספים).<br>סך הכול 4.<br>3 מתקבל אם שוכחים את סוקט ה-DNS (או את סוקט ההאזנה), ו-5 מניח חיבור נוסף שלא נדרש.",
   "dedupKey": "473127e7e6e6870a"
  },
  {
   "num": 10,
   "topic": "link_layer",
   "question": "בטבלה מופיעות 2 מחרוזות שמייצגות מידע בעל-משמעות.\n`ID 1: 1 0 0 1 1 0 0`\n`ID 2: 1 0 0 1 1 0 1`\nלפי Hamming Code ו-Hamming Distance:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אם בשידור המידע יתהפך הביט האחרון באחת מהמחרוזות, נדע לזהות שארעה שגיאה",
     "html": "אם בשידור המידע יתהפך הביט האחרון באחת מהמחרוזות, נדע לזהות שארעה שגיאה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "אם בשידור המידע יתהפך הביט האחד לפני אחרון, באחת מהמחרוזות, לא נדע לזהות שארעה שגיאה",
     "html": "אם בשידור המידע יתהפך הביט האחד לפני אחרון, באחת מהמחרוזות, לא נדע לזהות שארעה שגיאה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "אם בהעברת המידע יתהפך ביט במיקום כלשהו באחת המחרוזות, נדע לזהות שארעה שגיאה",
     "html": "אם בהעברת המידע יתהפך ביט במיקום כלשהו באחת המחרוזות, נדע לזהות שארעה שגיאה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות האחרות נכונה",
     "html": "אף אחת מהתשובות האחרות נכונה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שתי המחרוזות נבדלות בביט אחד בלבד (המרחק של Hamming הוא 1). היפוך הביט האחרון באחת מהן מייצר בדיוק את המחרוזת השנייה, שהיא מילה חוקית - לכן השגיאה לא תזוהה (א שגויה, וממילא ג שגויה).\nהיפוך הביט שלפני האחרון מייצר מחרוזת שאינה אחת משתי המילים החוקיות (`1001110` או `1001111`), ולכן השגיאה כן תזוהה (ב שגויה).\nלכן אף אחת מהתשובות האחרות אינה נכונה: ד.",
   "note": "No highlight in the key copy for this question; solved independently (tools/verify/22S-A/check.py).",
   "id": "22S-A-Q10",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "בטבלה מופיעות 2 מחרוזות שמייצגות מידע בעל-משמעות.<br><code class=\"tok\" dir=\"ltr\">ID 1: 1 0 0 1 1 0 0</code><br><code class=\"tok\" dir=\"ltr\">ID 2: 1 0 0 1 1 0 1</code><br>לפי Hamming Code ו-Hamming Distance:",
   "explanationHtml": "שתי המחרוזות נבדלות בביט אחד בלבד (המרחק של Hamming הוא 1). היפוך הביט האחרון באחת מהן מייצר בדיוק את המחרוזת השנייה, שהיא מילה חוקית - לכן השגיאה לא תזוהה (א שגויה, וממילא ג שגויה).<br>היפוך הביט שלפני האחרון מייצר מחרוזת שאינה אחת משתי המילים החוקיות (<code class=\"tok\" dir=\"ltr\">1001110</code> או <code class=\"tok\" dir=\"ltr\">1001111</code>), ולכן השגיאה כן תזוהה (ב שגויה).<br>לכן אף אחת מהתשובות האחרות אינה נכונה: ד.",
   "dedupKey": "246e339a6fbe617c"
  },
  {
   "num": 11,
   "topic": "link_layer",
   "question": "בטבלה מופיעות שתי מחרוזות שמייצגות מידע בעל-משמעות.\n`ID 1: 1 0 1 1 1 0 1`\n`ID 2: 1 0 0 1 1 0 1`\nעל-פי Hamming Code, שימוש ב-1's complement באופן הבא יאפשר זיהוי של שגיאה בודדת בין המחרוזות:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`ID 1: Binary Data 1011101 | Parity Bit 0 | Binary Data 10111010`\n`ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 10011010`",
     "html": "<code class=\"tok\" dir=\"ltr\">ID 1: Binary Data 1011101 | Parity Bit 0 | Binary Data 10111010</code><br><code class=\"tok\" dir=\"ltr\">ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 10011010</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101`\n`ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 100110100`",
     "html": "<code class=\"tok\" dir=\"ltr\">ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101</code><br><code class=\"tok\" dir=\"ltr\">ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 100110100</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101`\n`ID 2: Binary Data 1001101 | Parity Bit 1 | Binary Data 100110101`",
     "html": "<code class=\"tok\" dir=\"ltr\">ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101</code><br><code class=\"tok\" dir=\"ltr\">ID 2: Binary Data 1001101 | Parity Bit 1 | Binary Data 100110101</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101`\n`ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 100110100`",
     "html": "<code class=\"tok\" dir=\"ltr\">ID 1: Binary Data 1011101 | Parity Bit 1 | Binary Data 101110101</code><br><code class=\"tok\" dir=\"ltr\">ID 2: Binary Data 1001101 | Parity Bit 0 | Binary Data 100110100</code>"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שתי המחרוזות נבדלות בביט אחד, ולכן שגיאה בודדת עלולה להפוך אחת לשנייה. הוספת ביט זוגיות (even parity) מגדילה את המרחק בין המילים החוקיות ל-2, וכך כל שגיאה בודדת מזוהה.\nבמחרוזת 1 יש חמישה אחדות, ולכן ביט הזוגיות הוא 1; במחרוזת 2 יש ארבעה אחדות ולכן ביט הזוגיות הוא 0. רק הטבלה שבה ביטי הזוגיות הם (1, 0) והנתונים המוארכים מתאימים להם נכונה.\nא: ביטי הזוגיות (0, 0) שגויים ומרחק המילים נשאר 1. ג: ביט הזוגיות של מחרוזת 2 שגוי (1 במקום 0).\nבשאלון האפשרויות ב ו-ד מודפסות בטבלה זהה, ולכן שתיהן מתקבלות.",
   "acceptedIds": [
    "b",
    "d"
   ],
   "note": "No highlight in the key copy for this question; solved independently. Options b and d print the same table, so both are accepted (acceptedIds). Parity checked in tools/verify/22S-A/check.py.",
   "id": "22S-A-Q11",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "בטבלה מופיעות שתי מחרוזות שמייצגות מידע בעל-משמעות.<br><code class=\"tok\" dir=\"ltr\">ID 1: 1 0 1 1 1 0 1</code><br><code class=\"tok\" dir=\"ltr\">ID 2: 1 0 0 1 1 0 1</code><br>על-פי Hamming Code, שימוש ב-1's complement באופן הבא יאפשר זיהוי של שגיאה בודדת בין המחרוזות:",
   "explanationHtml": "שתי המחרוזות נבדלות בביט אחד, ולכן שגיאה בודדת עלולה להפוך אחת לשנייה. הוספת ביט זוגיות (even parity) מגדילה את המרחק בין המילים החוקיות ל-2, וכך כל שגיאה בודדת מזוהה.<br>במחרוזת 1 יש חמישה אחדות, ולכן ביט הזוגיות הוא 1; במחרוזת 2 יש ארבעה אחדות ולכן ביט הזוגיות הוא 0. רק הטבלה שבה ביטי הזוגיות הם (1, 0) והנתונים המוארכים מתאימים להם נכונה.<br>א: ביטי הזוגיות (0, 0) שגויים ומרחק המילים נשאר 1. ג: ביט הזוגיות של מחרוזת 2 שגוי (1 במקום 0).<br>בשאלון האפשרויות ב ו-ד מודפסות בטבלה זהה, ולכן שתיהן מתקבלות.",
   "dedupKey": "375f083a57c54ff2"
  },
  {
   "num": 12,
   "topic": "dns_dhcp",
   "question": "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP, Router IP, Subnet, Root DNS",
     "html": "IP, Router IP, Subnet, Root DNS"
    },
    {
     "id": "b",
     "type": "text",
     "value": "IP, Router IP, DNS Root, Default Gateway IP",
     "html": "IP, Router IP, DNS Root, Default Gateway IP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "IP, subnet, local DNS, Default Gateway IP",
     "html": "IP, subnet, local DNS, Default Gateway IP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "IP, Default Gateway MAC address, Subnet, Local DNS",
     "html": "IP, Default Gateway MAC address, Subnet, Local DNS"
    }
   ],
   "correctId": "c",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.\nא, ב: שרת DNS \"Root\" אינו מה ש-DHCP נותן. ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP.",
   "id": "22S-A-Q12",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
   "explanationHtml": "שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.<br>א, ב: שרת DNS \"Root\" אינו מה ש-DHCP נותן. ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP.",
   "dedupKey": "fdce3960d7308ee0"
  },
  {
   "num": 13,
   "topic": "intro_layers",
   "question": "מה תפקידה של שכבת התעבורה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "להבטיח אמינות בין תחנות רחוקות",
     "html": "להבטיח אמינות בין תחנות רחוקות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לנתב את התעבורה ברשת",
     "html": "לנתב את התעבורה ברשת"
    },
    {
     "id": "c",
     "type": "text",
     "value": "להעביר מידע בין מחשבים קרובים",
     "html": "להעביר מידע בין מחשבים קרובים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "להגדיר את המסלולים בניתוב ההודעות",
     "html": "להגדיר את המסלולים בניתוב ההודעות"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "שכבת התעבורה מספקת תקשורת בין תהליכים בתחנות הקצה (ב-TCP גם אמינות), מקצה לקצה.\nב ו-ד: ניתוב והגדרת מסלולים הם תפקיד שכבת הרשת. ג: העברה בין מחשבים קרובים היא עניין של שכבת הקו.",
   "id": "22S-A-Q13",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "מה תפקידה של שכבת התעבורה?",
   "explanationHtml": "שכבת התעבורה מספקת תקשורת בין תהליכים בתחנות הקצה (ב-TCP גם אמינות), מקצה לקצה.<br>ב ו-ד: ניתוב והגדרת מסלולים הם תפקיד שכבת הרשת. ג: העברה בין מחשבים קרובים היא עניין של שכבת הקו.",
   "dedupKey": "a8bd5ac21e7d413b"
  },
  {
   "num": 14,
   "topic": "tcp",
   "question": "לפניכם תהליך TCP 3-Way Handshake בין תחנות A ל-B:\nX מייצג מספר רנדומלי שהוגרל. בהנחה שהתהליך הושלם בהצלחה ולא בוצעה שליחה מחדש של SYN של אחד הצדדים, מה הערכים של המשתנים var1, var2, var3?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`var1 =501, var2 = 501, var3 = X+1`",
     "html": "<code class=\"tok\" dir=\"ltr\">var1 =501, var2 = 501, var3 = X+1</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`var1 = 500, var2 = X+1, var3 = X`",
     "html": "<code class=\"tok\" dir=\"ltr\">var1 = 500, var2 = X+1, var3 = X</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`var1 = X, var2 = 502, var3 = X+1`",
     "html": "<code class=\"tok\" dir=\"ltr\">var1 = X, var2 = 502, var3 = X+1</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`var1= 501, var2 =X, var3=X+1`",
     "html": "<code class=\"tok\" dir=\"ltr\">var1= 501, var2 =X, var3=X+1</code>"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "A שולח SYN עם $seq=500$ (ה-SYN צורך מספר סידורי אחד). B עונה ב-SYN+ACK עם $seq=X$ ו-$ack=500+1=501$ - לכן $var1=501$.\nA שולח ACK: ה-seq שלו הוא המספר הבא שלו, 501 ($var2=501$), וה-ack הוא $X+1$ ($var3=X+1$).\nב, ג, ד מחליפות בין מספר ה-seq ל-ack או שוכחות את ה-1 של ה-SYN.",
   "image": "images/exams/22S-A-Q14.png",
   "id": "22S-A-Q14",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "לפניכם תהליך TCP 3-Way Handshake בין תחנות A ל-B:<br>X מייצג מספר רנדומלי שהוגרל. בהנחה שהתהליך הושלם בהצלחה ולא בוצעה שליחה מחדש של SYN של אחד הצדדים, מה הערכים של המשתנים var1, var2, var3?",
   "explanationHtml": "A שולח SYN עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">seq=500</annotation></semantics></math></span> (ה-SYN צורך מספר סידורי אחד). B עונה ב-SYN+ACK עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>s</mi><mi>e</mi><mi>q</mi><mo>=</mo><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">seq=X</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mi>c</mi><mi>k</mi><mo>=</mo><mn>500</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>501</mn></mrow><annotation encoding=\"application/x-tex\">ack=500+1=501</annotation></semantics></math></span> - לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi><mi>a</mi><mi>r</mi><mn>1</mn><mo>=</mo><mn>501</mn></mrow><annotation encoding=\"application/x-tex\">var1=501</annotation></semantics></math></span>.<br>A שולח ACK: ה-seq שלו הוא המספר הבא שלו, 501 (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi><mi>a</mi><mi>r</mi><mn>2</mn><mo>=</mo><mn>501</mn></mrow><annotation encoding=\"application/x-tex\">var2=501</annotation></semantics></math></span>), וה-ack הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">X+1</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi><mi>a</mi><mi>r</mi><mn>3</mn><mo>=</mo><mi>X</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">var3=X+1</annotation></semantics></math></span>).<br>ב, ג, ד מחליפות בין מספר ה-seq ל-ack או שוכחות את ה-1 של ה-SYN.",
   "dedupKey": "874ebf15d928a67b"
  },
  {
   "num": 15,
   "topic": "http",
   "question": "עומר הסביר לאדם שב-HTTP Response, גוף ההודעה (Body) תמיד נכלל ב-Response וגם אינו יכול להיות ריק. בחרו את הנוסח המדויק ביותר מבין האפשרויות הבאות:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עומר צודק",
     "html": "עומר צודק"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עומר טועה רק במקרה ומדובר בתשובה על בקשת HTTP GET למסמך שכבר נמצא ב-cache הדפדפן. במידה והשרת מצא שהמסמך עדיין valid, המסמך לא יישלח ב-Response Body",
     "html": "עומר טועה רק במקרה ומדובר בתשובה על בקשת HTTP GET למסמך שכבר נמצא ב-cache הדפדפן. במידה והשרת מצא שהמסמך עדיין valid, המסמך לא יישלח ב-Response Body"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עומר טועה כיוון שכללי הפרוטוקול לא מאפשרים לשלוח Response ללא חלק הגוף (Body)",
     "html": "עומר טועה כיוון שכללי הפרוטוקול לא מאפשרים לשלוח Response ללא חלק הגוף (Body)"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות האחרות נכונה",
     "html": "אף אחת מהתשובות האחרות נכונה"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "גוף ההודעה אינו חובה. בבקשה מותנית (`If-Modified-Since`) על מסמך שנמצא ב-cache, אם הוא עדיין תקף השרת עונה `304 Not Modified` ללא גוף.\nא: עומר טועה. ג: הפרוטוקול כן מאפשר תשובות ללא גוף (304, וגם 204 ועוד). ד: ב נכונה.\nהערה: המילה \"רק\" בתשובה ב אינה מדויקת עד הסוף: גם תשובה לבקשת HEAD וגם תשובה 204 No Content נשלחות ללא גוף. ב עדיין הטובה ביותר מבין האפשרויות, כי היא היחידה שמפריכה את הטענה \"תמיד נכלל גוף\" באמצעות מקרה אמיתי ומוכר של תשובה ריקה (304 על מסמך שכבר ב-cache).",
   "id": "22S-A-Q15",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "עומר הסביר לאדם שב-HTTP Response, גוף ההודעה (Body) תמיד נכלל ב-Response וגם אינו יכול להיות ריק. בחרו את הנוסח המדויק ביותר מבין האפשרויות הבאות:",
   "explanationHtml": "גוף ההודעה אינו חובה. בבקשה מותנית (<code class=\"tok\" dir=\"ltr\">If-Modified-Since</code>) על מסמך שנמצא ב-cache, אם הוא עדיין תקף השרת עונה <code class=\"tok\" dir=\"ltr\">304 Not Modified</code> ללא גוף.<br>א: עומר טועה. ג: הפרוטוקול כן מאפשר תשובות ללא גוף (304, וגם 204 ועוד). ד: ב נכונה.<br>הערה: המילה \"רק\" בתשובה ב אינה מדויקת עד הסוף: גם תשובה לבקשת HEAD וגם תשובה 204 No Content נשלחות ללא גוף. ב עדיין הטובה ביותר מבין האפשרויות, כי היא היחידה שמפריכה את הטענה \"תמיד נכלל גוף\" באמצעות מקרה אמיתי ומוכר של תשובה ריקה (304 על מסמך שכבר ב-cache).",
   "dedupKey": "29e3fbb88aac2c68"
  },
  {
   "num": 16,
   "topic": "dns_dhcp",
   "question": "כמה שלבים יש בתהליך מול שרת ה-DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "2",
     "html": "2"
    },
    {
     "id": "b",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "c",
     "type": "text",
     "value": "4",
     "html": "4"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אין תשובה אחרת נכונה",
     "html": "אין תשובה אחרת נכונה"
    }
   ],
   "correctId": "c",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ארבעה שלבים (DORA): Discover, Offer, Request, ACK.",
   "id": "22S-A-Q16",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "כמה שלבים יש בתהליך מול שרת ה-DHCP?",
   "explanationHtml": "ארבעה שלבים (DORA): Discover, Offer, Request, ACK.",
   "dedupKey": "1df7ec34758a2bbe"
  },
  {
   "num": 17,
   "topic": "reliable_transfer",
   "question": "בפרוטוקול ARQ בשיטת Stop and Wait הצד השולח העביר frame אשר הגיע לצד המקבל. הצד המקבל חישב את ה-CRC וגילה שגיאה. מה ייקרה כעת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "מתישהו יהיה timeout והצד השולח יבצע retransmission עם מספר סידורי שונה מהחבילה שלא הגיעה תקינה.",
     "html": "מתישהו יהיה timeout והצד השולח יבצע retransmission עם מספר סידורי שונה מהחבילה שלא הגיעה תקינה."
    },
    {
     "id": "b",
     "type": "text",
     "value": "מתישהו יהיה timeout והצד השולח יבצע retransmission עם אותו מספר סידורי של החבילה שלא הגיעה תקינה.",
     "html": "מתישהו יהיה timeout והצד השולח יבצע retransmission עם אותו מספר סידורי של החבילה שלא הגיעה תקינה."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הצד המקבל יבקש מהשולח לשלוח מחדש את החבילה",
     "html": "הצד המקבל יבקש מהשולח לשלוח מחדש את החבילה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות האחרות נכונה",
     "html": "אף אחת מהתשובות האחרות נכונה"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ב-Stop and Wait המקבל שמגלה שגיאה זורק את המסגרת ואינו שולח ACK. השולח ממתין, ה-timer פג, והוא שולח שוב את אותה מסגרת עם אותו מספר סידורי (מספר סידורי חדש יתקבל רק אחרי ACK).\nא: מספר סידורי שונה יגרום למקבל לחשוב שזו מסגרת חדשה. ג: המקבל אינו מבקש שידור חוזר ב-Stop and Wait הבסיסי.",
   "id": "22S-A-Q17",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "העברה אמינה: Go-Back-N ו-Selective Repeat",
   "questionHtml": "בפרוטוקול ARQ בשיטת Stop and Wait הצד השולח העביר frame אשר הגיע לצד המקבל. הצד המקבל חישב את ה-CRC וגילה שגיאה. מה ייקרה כעת?",
   "explanationHtml": "ב-Stop and Wait המקבל שמגלה שגיאה זורק את המסגרת ואינו שולח ACK. השולח ממתין, ה-timer פג, והוא שולח שוב את אותה מסגרת עם אותו מספר סידורי (מספר סידורי חדש יתקבל רק אחרי ACK).<br>א: מספר סידורי שונה יגרום למקבל לחשוב שזו מסגרת חדשה. ג: המקבל אינו מבקש שידור חוזר ב-Stop and Wait הבסיסי.",
   "dedupKey": "ec3f9c6d5431c569"
  },
  {
   "num": 18,
   "topic": "dns_dhcp",
   "question": "מה נכון לגבי פרוטוקול ARP (Address Resolution Protocol)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול שמאפשר המרה של כתובת IP (לוגית) אשר ידועה לי ברשת מקומית לכתובת MAC (פיזית). פרוטוקול זה שייך לשכבת הקו.",
     "html": "פרוטוקול שמאפשר המרה של כתובת IP (לוגית) אשר ידועה לי ברשת מקומית לכתובת MAC (פיזית). פרוטוקול זה שייך לשכבת הקו."
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול בשכבת הרשת ומטרתו לבצע המרה בין כתובות MAC לכתובות IP בין שני מחשבים ברשתות מרוחקות.",
     "html": "פרוטוקול בשכבת הרשת ומטרתו לבצע המרה בין כתובות MAC לכתובות IP בין שני מחשבים ברשתות מרוחקות."
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול זה לא שומר מטמון ולכן קשה לזייף בקשות/תשובות ARP.",
     "html": "פרוטוקול זה לא שומר מטמון ולכן קשה לזייף בקשות/תשובות ARP."
    },
    {
     "id": "d",
     "type": "text",
     "value": "פרוטוקול בשכבת הקו שמחליף את פרוטוקול ה-Ethernet המוכר.",
     "html": "פרוטוקול בשכבת הקו שמחליף את פרוטוקול ה-Ethernet המוכר."
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ARP מתרגם כתובת IP ידועה ברשת המקומית לכתובת MAC, ושייך לשכבת הקו.\nב: פועל רק ברשת מקומית ולא בין רשתות מרוחקות. ג: ל-ARP יש מטמון (ARP table) ואפשר לזייף אותו. ד: ARP אינו מחליף את Ethernet אלא משמש אותו.",
   "id": "22S-A-Q18",
   "examCode": "22S-A",
   "examLabel": "2022 סמסטר קיץ מועד א",
   "year": 2022,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מה נכון לגבי פרוטוקול ARP (Address Resolution Protocol)?",
   "explanationHtml": "ARP מתרגם כתובת IP ידועה ברשת המקומית לכתובת MAC, ושייך לשכבת הקו.<br>ב: פועל רק ברשת מקומית ולא בין רשתות מרוחקות. ג: ל-ARP יש מטמון (ARP table) ואפשר לזייף אותו. ד: ARP אינו מחליף את Ethernet אלא משמש אותו.",
   "dedupKey": "4f07d95b8a8e6be4"
  },
  {
   "num": 1,
   "topic": "ip_cidr",
   "question": "חבילת IP (פאקט IP) בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes ואין שימוש בהרחבת header.\nמה נכון לגבי הערך הרשום בשדה Offset בחבילה מספר 5 (מתוך 5)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Offset=1600",
     "html": "Offset=1600"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Offset=200",
     "html": "Offset=200"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Offset= 400",
     "html": "Offset= 400"
    },
    {
     "id": "d",
     "type": "text",
     "value": "Offset= 480",
     "html": "Offset= 480"
    },
    {
     "id": "e",
     "type": "text",
     "value": "Offset= 405",
     "html": "Offset= 405"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ה-MTU לא נתון, לכן מחפשים איזה Offset אפשרי כך שהחבילה מתפצלת בדיוק ל-5 פרגמנטים.\nבכל פרגמנט (חוץ מהאחרון) הנתונים הם כפולה של 8 בתים, נסמן $k$. חמישה פרגמנטים פירושו $4k < D \\le 5k$, כאשר $D$ הוא סך הנתונים ($1980$ או $2000$).\nה-Offset של הפרגמנט החמישי הוא $4k/8=k/2$ ביחידות של 8 בתים. עבור $k=400$ מקבלים $4\\cdot400=1600<1980\\le 2000$ ולכן 5 פרגמנטים בדיוק, וה-Offset הוא $200$.\nהאפשרויות 400 ו-480 ו-1600 דורשות $k$ של 800 ומעלה, ואז כל הנתונים נכנסים בפחות מ-5 פרגמנטים. 405 אינו מתקבל מ-$k/2$ עבור $k$ כפולה של 8. (1600 הוא ההיסט בבתים ולא ביחידות של 8.)",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q1",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילת IP (פאקט IP) בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes ואין שימוש בהרחבת header.<br>מה נכון לגבי הערך הרשום בשדה Offset בחבילה מספר 5 (מתוך 5)?",
   "explanationHtml": "ה-MTU לא נתון, לכן מחפשים איזה Offset אפשרי כך שהחבילה מתפצלת בדיוק ל-5 פרגמנטים.<br>בכל פרגמנט (חוץ מהאחרון) הנתונים הם כפולה של 8 בתים, נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span>. חמישה פרגמנטים פירושו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>k</mi><mo>&lt;</mo><mi>D</mi><mo>≤</mo><mn>5</mn><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">4k &lt; D \\le 5k</annotation></semantics></math></span>, כאשר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> הוא סך הנתונים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1980</mn></mrow><annotation encoding=\"application/x-tex\">1980</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">2000</annotation></semantics></math></span>).<br>ה-Offset של הפרגמנט החמישי הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mi>k</mi><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mi>k</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">4k/8=k/2</annotation></semantics></math></span> ביחידות של 8 בתים. עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mo>=</mo><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">k=400</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>400</mn><mo>=</mo><mn>1600</mn><mo>&lt;</mo><mn>1980</mn><mo>≤</mo><mn>2000</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot400=1600&lt;1980\\le 2000</annotation></semantics></math></span> ולכן 5 פרגמנטים בדיוק, וה-Offset הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn></mrow><annotation encoding=\"application/x-tex\">200</annotation></semantics></math></span>.<br>האפשרויות 400 ו-480 ו-1600 דורשות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> של 800 ומעלה, ואז כל הנתונים נכנסים בפחות מ-5 פרגמנטים. 405 אינו מתקבל מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi><mi mathvariant=\"normal\">/</mi><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">k/2</annotation></semantics></math></span> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>k</mi></mrow><annotation encoding=\"application/x-tex\">k</annotation></semantics></math></span> כפולה של 8. (1600 הוא ההיסט בבתים ולא ביחידות של 8.)",
   "dedupKey": "a304df11074d48b9"
  },
  {
   "num": 2,
   "topic": "dns_dhcp",
   "question": "קבע מה מבין ההיגדים הבאים נכון",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול TCP בשכבת התעבורה",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול TCP בשכבת התעבורה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול UDP בשכבת התעבורה",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול UDP בשכבת התעבורה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה ומשמש להעברת מדיע אמינה.",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה ומשמש להעברת מדיע אמינה."
    },
    {
     "id": "d",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן דינאמי.",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן דינאמי."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP הוא פרוטוקול של שכבת האפליקציה (לקוח-שרת) שרץ מעל UDP (פורטים 67 ו-68), כי הלקוח עדיין אין לו כתובת IP ושולח הודעות Broadcast.\nא: שגוי - DHCP לא משתמש ב-TCP. ג: שגוי - זה לא פרוטוקול תעבורה ואינו מבטיח אמינות. ד: שגוי - DHCP אינו בשכבת הרשת, הוא בשכבת האפליקציה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q2",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "קבע מה מבין ההיגדים הבאים נכון",
   "explanationHtml": "DHCP הוא פרוטוקול של שכבת האפליקציה (לקוח-שרת) שרץ מעל UDP (פורטים 67 ו-68), כי הלקוח עדיין אין לו כתובת IP ושולח הודעות Broadcast.<br>א: שגוי - DHCP לא משתמש ב-TCP. ג: שגוי - זה לא פרוטוקול תעבורה ואינו מבטיח אמינות. ד: שגוי - DHCP אינו בשכבת הרשת, הוא בשכבת האפליקציה.",
   "dedupKey": "94b8c0bc1c2f74ec"
  },
  {
   "num": 3,
   "topic": "tcp",
   "question": "קבע עבור ההיגד מטה את התיאור המדויק ביותר עבורו: האם נכון / לא נכון / לא ניתן לדעת.\nהערכת RTT מתבצעת, עבור תפקוד הפרוטוקול, גם בפרוטוקול TCP וגם בפרוטוקול UDP.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא נכון: הערכה מתבצעת רק ב IP וב ICMP",
     "html": "לא נכון: הערכה מתבצעת רק ב IP וב ICMP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון: רק ב UDP",
     "html": "לא נכון: רק ב UDP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא נכון : רק ב TCP",
     "html": "לא נכון : רק ב TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת.",
     "html": "לא ניתן לדעת."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף אחד מהתשובות האחרות אינה נכונה.",
     "html": "אף אחד מהתשובות האחרות אינה נכונה."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "TCP מעריך את ה-RTT (ממוצע נע ושונות) כדי לקבוע את ה-Timeout של שליחה חוזרת. ל-UDP אין שליחה חוזרת, אין אישורים ולכן הוא אינו מעריך RTT.\nלכן ההיגד \"גם ב-TCP וגם ב-UDP\" שגוי, והתיאור המדויק הוא \"לא נכון: רק ב-TCP\".\nא: IP ו-ICMP אינם מעריכים RTT לצורך תפקוד הפרוטוקול. ב: הפוך מהנכון. ד: אפשר לדעת. ה: שגוי כי ג נכונה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). This is the replacement question 3 from the amendment sheet; the original booklet question 3 (where reassembly happens) is voided and not included.",
   "id": "23A-A-Q3",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "קבע עבור ההיגד מטה את התיאור המדויק ביותר עבורו: האם נכון / לא נכון / לא ניתן לדעת.<br>הערכת RTT מתבצעת, עבור תפקוד הפרוטוקול, גם בפרוטוקול TCP וגם בפרוטוקול UDP.",
   "explanationHtml": "TCP מעריך את ה-RTT (ממוצע נע ושונות) כדי לקבוע את ה-Timeout של שליחה חוזרת. ל-UDP אין שליחה חוזרת, אין אישורים ולכן הוא אינו מעריך RTT.<br>לכן ההיגד \"גם ב-TCP וגם ב-UDP\" שגוי, והתיאור המדויק הוא \"לא נכון: רק ב-TCP\".<br>א: IP ו-ICMP אינם מעריכים RTT לצורך תפקוד הפרוטוקול. ב: הפוך מהנכון. ד: אפשר לדעת. ה: שגוי כי ג נכונה.",
   "dedupKey": "691db3214f3de2ae"
  },
  {
   "num": 4,
   "topic": "http",
   "question": "בחרו את ההיגד המדויק ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול HTTP מחייב להחזיר סטטוס 200 במקרה של בקשת POST מוצלחת.",
     "html": "פרוטוקול HTTP מחייב להחזיר סטטוס 200 במקרה של בקשת POST מוצלחת."
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול HTTP אינו מחייב להחזיר סטטוס 200 במקרה של בקשת POST מוצלחת.",
     "html": "פרוטוקול HTTP אינו מחייב להחזיר סטטוס 200 במקרה של בקשת POST מוצלחת."
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול HTTP הוא פרוטוקול בשכבת התעבורה להעברת דפי אינטרנט ואובייקטים נוספים.",
     "html": "פרוטוקול HTTP הוא פרוטוקול בשכבת התעבורה להעברת דפי אינטרנט ואובייקטים נוספים."
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחד מהתשובות האחרות אינה נכונה .",
     "html": "אף אחד מהתשובות האחרות אינה נכונה ."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-HTTP בקשת POST שהצליחה יכולה להחזיר 200 OK, אבל גם 201 Created, 202 Accepted או 204 No Content, ולכן אין חובה להחזיר 200.\nג: HTTP הוא פרוטוקול של שכבת האפליקציה, לא התעבורה. ד: שגוי כי ב נכונה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Student tick differs (a); a successful POST may legitimately return 200, 201, 202 or 204.",
   "id": "23A-A-Q4",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "בחרו את ההיגד המדויק ביותר:",
   "explanationHtml": "ב-HTTP בקשת POST שהצליחה יכולה להחזיר 200 OK, אבל גם 201 Created, 202 Accepted או 204 No Content, ולכן אין חובה להחזיר 200.<br>ג: HTTP הוא פרוטוקול של שכבת האפליקציה, לא התעבורה. ד: שגוי כי ב נכונה.",
   "dedupKey": "389f17aaa21cd185"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "מה מהכתוב מטה **אינו חלק** מהיתרונות של רשת עמית לעמית (Peer To Peer P2P) בהשוואה לשימוש במודל של שרת לקוח:\nסמנו את כל התשובות הרלוונטיות.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סקלביליות : הוספת לקוחות גם מוסיפה נותני שרות.",
     "html": "סקלביליות : הוספת לקוחות גם מוסיפה נותני שרות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "באותם קצבי רשת בין מחשבים : יכולת ההעברה וההפצה הן יותר מהירות ברשת P2P בהשוואה למודל שרת-לקוח.",
     "html": "באותם קצבי רשת בין מחשבים : יכולת ההעברה וההפצה הן יותר מהירות ברשת P2P בהשוואה למודל שרת-לקוח."
    },
    {
     "id": "c",
     "type": "text",
     "value": "קלות ניהול.",
     "html": "קלות ניהול."
    },
    {
     "id": "d",
     "type": "text",
     "value": "Fast Start",
     "html": "Fast Start"
    }
   ],
   "multi": true,
   "answerIds": [
    "c",
    "d"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "השאלה מבקשת את מה שאינו יתרון של P2P לעומת לקוח-שרת, ולכן מסמנים את שתי התשובות שאינן יתרון (ג ו-ד).\nג - \"קלות ניהול\": אינה יתרון. אין שרת מרכזי ששולט, והניהול והאבטחה מבוזרים וקשים יותר. לסמן.\nד - \"Fast Start\": אינה יתרון מוכר של P2P. בתחילת ההורדה יש לעמית מעט נתונים וכמעט אין מי שיספק אותם, והקצב עולה רק אחרי שהצטברו חלקים. לסמן.\nא - סקלביליות: יתרון של P2P, כי כל עמית חדש מוסיף ביקוש וגם יכולת שירות. לא לסמן.\nב - מהירות הפצה: יתרון של P2P, כי כל העמיתים משתתפים בהעברה ולא רק שרת בודד. לא לסמן.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "c",
   "id": "23A-A-Q5",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מה מהכתוב מטה <strong>אינו חלק</strong> מהיתרונות של רשת עמית לעמית (Peer To Peer P2P) בהשוואה לשימוש במודל של שרת לקוח:<br>סמנו את כל התשובות הרלוונטיות.",
   "explanationHtml": "השאלה מבקשת את מה שאינו יתרון של P2P לעומת לקוח-שרת, ולכן מסמנים את שתי התשובות שאינן יתרון (ג ו-ד).<br>ג - \"קלות ניהול\": אינה יתרון. אין שרת מרכזי ששולט, והניהול והאבטחה מבוזרים וקשים יותר. לסמן.<br>ד - \"Fast Start\": אינה יתרון מוכר של P2P. בתחילת ההורדה יש לעמית מעט נתונים וכמעט אין מי שיספק אותם, והקצב עולה רק אחרי שהצטברו חלקים. לסמן.<br>א - סקלביליות: יתרון של P2P, כי כל עמית חדש מוסיף ביקוש וגם יכולת שירות. לא לסמן.<br>ב - מהירות הפצה: יתרון של P2P, כי כל העמיתים משתתפים בהעברה ולא רק שרת בודד. לא לסמן.",
   "dedupKey": "6b14a072ffbc61a9"
  },
  {
   "num": 6,
   "topic": "http",
   "question": "איזה מהבעיות מטה, בא פתרון רשת מסוג CDN לפתור :\nסמנו את כל התשובות הנכונות.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סקלביליות : יכולת תמיכה בכמות גדולה של לקוחות.",
     "html": "סקלביליות : יכולת תמיכה בכמות גדולה של לקוחות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "חסם הגידול ביכולת התמיכה של שרת בודד.",
     "html": "חסם הגידול ביכולת התמיכה של שרת בודד."
    },
    {
     "id": "c",
     "type": "text",
     "value": "חסם הגידול ברוחב הפס של קו תקשורת בודד.",
     "html": "חסם הגידול ברוחב הפס של קו תקשורת בודד."
    },
    {
     "id": "d",
     "type": "text",
     "value": "בעיית המחסור בכתובות רשת מסוג IPV4",
     "html": "בעיית המחסור בכתובות רשת מסוג IPV4"
    }
   ],
   "multi": true,
   "answerIds": [
    "a",
    "b",
    "c"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "CDN מפזר עותקי תוכן בשרתים רבים הקרובים ללקוחות, ולכן הוא פותר בעיות של עומס ושל מרחק.\nא - סקלביליות: נכון, הלקוחות מתחלקים בין שרתים רבים ולכן אפשר לשרת הרבה יותר לקוחות.\nב - חסם היכולת של שרת בודד: נכון, כבר אין שרת יחיד שמטפל בכולם.\nג - חסם רוחב הפס של קו בודד: נכון, התנועה מתפזרת על פני קווים רבים ואינה עוברת כולה בקו אחד.\nד - מחסור בכתובות IPv4: לא נכון. זו בעיה של שכבת הרשת, שנפתרת ב-NAT וב-IPv6, ו-CDN אינו עוסק בה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "a",
   "id": "23A-A-Q6",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איזה מהבעיות מטה, בא פתרון רשת מסוג CDN לפתור :<br>סמנו את כל התשובות הנכונות.",
   "explanationHtml": "CDN מפזר עותקי תוכן בשרתים רבים הקרובים ללקוחות, ולכן הוא פותר בעיות של עומס ושל מרחק.<br>א - סקלביליות: נכון, הלקוחות מתחלקים בין שרתים רבים ולכן אפשר לשרת הרבה יותר לקוחות.<br>ב - חסם היכולת של שרת בודד: נכון, כבר אין שרת יחיד שמטפל בכולם.<br>ג - חסם רוחב הפס של קו בודד: נכון, התנועה מתפזרת על פני קווים רבים ואינה עוברת כולה בקו אחד.<br>ד - מחסור בכתובות IPv4: לא נכון. זו בעיה של שכבת הרשת, שנפתרת ב-NAT וב-IPv6, ו-CDN אינו עוסק בה.",
   "dedupKey": "1b47e5f1dc6f25cb"
  },
  {
   "num": 7,
   "topic": "sockets_email",
   "question": "יעל מבקשת להגיע לאתר http://www.newplace.com שלא גלשה בו קודם. ידוע כי:\n- הדף הראשי של האתר מכיל מלל ו5 תמונות ולא כולל הפניות לאתרים נוספים.\n- דפדפן ושרת תומכים ב HTTP1.1\n- כל התמונות נמצאות על השרת www.newplace.com\n- שרת האתר נמצא במצב האזנה.\nכמה sockets ייפתחו במחשב של יעל?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "7: 1 לבקשת DNS, 1 לדף HTML ועד 5 לתמונות",
     "html": "7: 1 לבקשת DNS, 1 לדף HTML ועד 5 לתמונות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "1: עבור דף HTML ותמונות",
     "html": "1: עבור דף HTML ותמונות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "2: 1 לבקשת DNS ו-1 עבור דף HTML ותמונות",
     "html": "2: 1 לבקשת DNS ו-1 עבור דף HTML ותמונות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "6: 1 עבור דף HTML ו 5 עבור תמונות",
     "html": "6: 1 עבור דף HTML ו 5 עבור תמונות"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "האתר חדש עבור יעל, לכן קודם נדרשת שאילתת DNS לתרגום השם לכתובת IP: זה socket אחד (UDP).\nאחר כך נפתח חיבור TCP לשרת. ב-HTTP/1.1 החיבור הוא persistent כברירת מחדל, והדף והתמונות (כולן על אותו שרת) עוברים על אותו חיבור, ולכן socket אחד בלבד ל-HTML ולתמונות.\nסך הכול 2 sockets. 7 ו-6 דורשים חיבור נפרד לכל תמונה (HTTP/1.0 או חיבורים מקבילים), ו-1 מתעלם משאילתת ה-DNS.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Assumes the persistent-connection reading of HTTP/1.1 and a UDP socket for DNS; a browser that opens parallel connections would give option a, but the question intends persistence.",
   "id": "23A-A-Q7",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "Sockets ודואר: SMTP, POP ו-IMAP",
   "questionHtml": "יעל מבקשת להגיע לאתר http://www.newplace.com שלא גלשה בו קודם. ידוע כי:<br>- הדף הראשי של האתר מכיל מלל ו5 תמונות ולא כולל הפניות לאתרים נוספים.<br>- דפדפן ושרת תומכים ב HTTP1.1<br>- כל התמונות נמצאות על השרת www.newplace.com<br>- שרת האתר נמצא במצב האזנה.<br>כמה sockets ייפתחו במחשב של יעל?",
   "explanationHtml": "האתר חדש עבור יעל, לכן קודם נדרשת שאילתת DNS לתרגום השם לכתובת IP: זה socket אחד (UDP).<br>אחר כך נפתח חיבור TCP לשרת. ב-HTTP/1.1 החיבור הוא persistent כברירת מחדל, והדף והתמונות (כולן על אותו שרת) עוברים על אותו חיבור, ולכן socket אחד בלבד ל-HTML ולתמונות.<br>סך הכול 2 sockets. 7 ו-6 דורשים חיבור נפרד לכל תמונה (HTTP/1.0 או חיבורים מקבילים), ו-1 מתעלם משאילתת ה-DNS.",
   "dedupKey": "2f307adf6bf4d4cb"
  },
  {
   "num": 8,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה:\n`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "b",
     "type": "text",
     "value": "B",
     "html": "B"
    },
    {
     "id": "c",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "d",
     "type": "text",
     "value": "D",
     "html": "D"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match: נבדוק אילו כניסות מתאימות לכתובת $25.36.67.5$.\nA: $25.36.64.0/16$ - מתאימה (שני הבתים הראשונים $25.36$ זהים). B: $25.36.128.0/20$ מכסה $25.36.128.0-25.36.143.255$ - לא כוללת 67. C: $25.36.64.0/20$ מכסה $25.36.64.0-25.36.79.255$ - כוללת, והמסכה ארוכה יותר ($/20>/16$). D: $20.0.0.0/8$ - לא מתאימה.\nA ו-C מתאימות, והארוכה ביותר היא C.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q8",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה:<br><code class=\"tok\" dir=\"ltr\">A: 25.36.64.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code>",
   "explanationHtml": "Longest Prefix Match: נבדוק אילו כניסות מתאימות לכתובת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span>.<br>A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/16</annotation></semantics></math></span> - מתאימה (שני הבתים הראשונים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36</mn></mrow><annotation encoding=\"application/x-tex\">25.36</annotation></semantics></math></span> זהים). B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mo>−</mo><mn>25.36.143.255</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0-25.36.143.255</annotation></semantics></math></span> - לא כוללת 67. C: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mo>−</mo><mn>25.36.79.255</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0-25.36.79.255</annotation></semantics></math></span> - כוללת, והמסכה ארוכה יותר (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn><mo>&gt;</mo><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/20&gt;/16</annotation></semantics></math></span>). D: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20.0.0.0</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">20.0.0.0/8</annotation></semantics></math></span> - לא מתאימה.<br>A ו-C מתאימות, והארוכה ביותר היא C.",
   "dedupKey": "2408716f6c6d0ea5"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "בנוגע לציור מטה: דני פונה פעם ראשונה ובראשון במחשבו במקום העבודה שלו, לגלוש לאתר של www.amazon.com. המחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com. המחשב של דני מסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.\nלמה מתאימה סדרת הפעולות המתוארת בשרטוט לעיל:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שאילתת ARP",
     "html": "שאילתת ARP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שאילתת DNS איטרטיבית.",
     "html": "שאילתת DNS איטרטיבית."
    },
    {
     "id": "c",
     "type": "text",
     "value": "שאילתת DNS רקורסיבית.",
     "html": "שאילתת DNS רקורסיבית."
    },
    {
     "id": "d",
     "type": "text",
     "value": "שאילתת DNS איטרטיבית פרסיסטנטית.",
     "html": "שאילתת DNS איטרטיבית פרסיסטנטית."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה .",
     "html": "אף תשובה לא נכונה ."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בשרטוט שרת ה-DNS המקומי שולח שאילתה אחת (2) ל-root וממתין לתשובה סופית (7). ה-root עצמו פונה ל-TLD (3, 6) וה-TLD פונה ל-authoritative (4, 5), והתשובה חוזרת בשרשרת. כלומר כל שרת מבצע את העבודה \"בשם\" השואל - זו שאילתה רקורסיבית.\nבשאילתה איטרטיבית ה-root היה מחזיר למקומי הפניה לשרת ה-TLD והמקומי היה פונה אליו בעצמו. ARP אינו קשור (הוא מתרגם IP ל-MAC ברשת מקומית), ו\"איטרטיבית פרסיסטנטית\" אינו מושג קיים.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Amended wording used (amendment sheet: 'the computer of Dani is helped by a local DNS server'). Figure redrawn cleanly from the printed one (tools/verify/23A-A/draw_dns.py).",
   "image": "images/exams/23A-A-Q9.png",
   "id": "23A-A-Q9",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בנוגע לציור מטה: דני פונה פעם ראשונה ובראשון במחשבו במקום העבודה שלו, לגלוש לאתר של www.amazon.com. המחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com. המחשב של דני מסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.<br>למה מתאימה סדרת הפעולות המתוארת בשרטוט לעיל:",
   "explanationHtml": "בשרטוט שרת ה-DNS המקומי שולח שאילתה אחת (2) ל-root וממתין לתשובה סופית (7). ה-root עצמו פונה ל-TLD (3, 6) וה-TLD פונה ל-authoritative (4, 5), והתשובה חוזרת בשרשרת. כלומר כל שרת מבצע את העבודה \"בשם\" השואל - זו שאילתה רקורסיבית.<br>בשאילתה איטרטיבית ה-root היה מחזיר למקומי הפניה לשרת ה-TLD והמקומי היה פונה אליו בעצמו. ARP אינו קשור (הוא מתרגם IP ל-MAC ברשת מקומית), ו\"איטרטיבית פרסיסטנטית\" אינו מושג קיים.",
   "dedupKey": "55bbf95ab65e8afb"
  },
  {
   "num": 10,
   "topic": "tcp",
   "question": "חוו את דעתכם בנוגע לנכונות הטענה הבאה :\nמבחינת האפליקציה אם צריך לשלוח סגמנט אחד בלבד של נתונים, הרי שאין הבדל בין האופן שבו TCP ו-UDP מתנהגים.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "נכון אין הבדל.",
     "html": "נכון אין הבדל."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון : יש הבדל במקרה אי הגעה או אובדן בדרך.",
     "html": "לא נכון : יש הבדל במקרה אי הגעה או אובדן בדרך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "נכון בתלות ב \"גודל חלון\". עבור חלון קטן מ 7 אכן אין הבדל.",
     "html": "נכון בתלות ב \"גודל חלון\". עבור חלון קטן מ 7 אכן אין הבדל."
    },
    {
     "id": "d",
     "type": "text",
     "value": "נכון פרט לשימוש בבקרת זרימה למניעת הצפת המקבל.",
     "html": "נכון פרט לשימוש בבקרת זרימה למניעת הצפת המקבל."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "גם כשיש סגמנט אחד, TCP מבטיח אמינות: אישור (ACK), Timeout ושליחה חוזרת, ולפני כן לחיצת יד. UDP שולח את ההודעה פעם אחת ולא בודק אם היא הגיעה.\nלכן אם הסגמנט הולך לאיבוד, ב-TCP האפליקציה עדיין תקבל אותו (אחרי שליחה חוזרת) וב-UDP לא - ההיגד \"אין הבדל\" שגוי.\nג ו-ד נכונות רק בניסוח \"אין הבדל\" ולכן שגויות (גודל חלון ובקרת זרימה אינם הנקודה, ההבדל הוא האמינות).",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q10",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "חוו את דעתכם בנוגע לנכונות הטענה הבאה :<br>מבחינת האפליקציה אם צריך לשלוח סגמנט אחד בלבד של נתונים, הרי שאין הבדל בין האופן שבו TCP ו-UDP מתנהגים.",
   "explanationHtml": "גם כשיש סגמנט אחד, TCP מבטיח אמינות: אישור (ACK), Timeout ושליחה חוזרת, ולפני כן לחיצת יד. UDP שולח את ההודעה פעם אחת ולא בודק אם היא הגיעה.<br>לכן אם הסגמנט הולך לאיבוד, ב-TCP האפליקציה עדיין תקבל אותו (אחרי שליחה חוזרת) וב-UDP לא - ההיגד \"אין הבדל\" שגוי.<br>ג ו-ד נכונות רק בניסוח \"אין הבדל\" ולכן שגויות (גודל חלון ובקרת זרימה אינם הנקודה, ההבדל הוא האמינות).",
   "dedupKey": "9c79ff02246d51ed"
  },
  {
   "num": 11,
   "topic": "dns_dhcp",
   "question": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כן, אפשר לוותר על ARP.",
     "html": "כן, אפשר לוותר על ARP."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון : אי אפשר לוותר על ARP.",
     "html": "לא נכון : אי אפשר לוותר על ARP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "כן אפשר לוותר על ARP ברשת גדולה :רק עבור הקלינטים שמקבלים מידע משרת ה DHCP , אבל לא עבור שרתים להם יש כתובות IP קבועות והם לא נעזרים ב DHCP .",
     "html": "כן אפשר לוותר על ARP ברשת גדולה :רק עבור הקלינטים שמקבלים מידע משרת ה DHCP , אבל לא עבור שרתים להם יש כתובות IP קבועות והם לא נעזרים ב DHCP ."
    },
    {
     "id": "d",
     "type": "text",
     "value": "התשובה לא חד משמעית: כי התשובה תלויה בהגדרות המערכת.",
     "html": "התשובה לא חד משמעית: כי התשובה תלויה בהגדרות המערכת."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP מקצה ללקוח כתובת IP, מסכה, Gateway ו-DNS, אך אינו נותן כתובות MAC. כדי לשלוח מסגרת Ethernet בתוך הרשת (למשל אל ה-Gateway) צריך את ה-MAC של היעד, ואותו מקבלים רק מ-ARP.\nלכן אי אפשר לוותר על ARP, גם אם כל התחנות מקבלות את הכתובת שלהן מ-DHCP. ג שגויה (גם הלקוחות צריכים ARP), ד שגויה (אין תלות בהגדרות).",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q11",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "explanationHtml": "DHCP מקצה ללקוח כתובת IP, מסכה, Gateway ו-DNS, אך אינו נותן כתובות MAC. כדי לשלוח מסגרת Ethernet בתוך הרשת (למשל אל ה-Gateway) צריך את ה-MAC של היעד, ואותו מקבלים רק מ-ARP.<br>לכן אי אפשר לוותר על ARP, גם אם כל התחנות מקבלות את הכתובת שלהן מ-DHCP. ג שגויה (גם הלקוחות צריכים ARP), ד שגויה (אין תלות בהגדרות).",
   "dedupKey": "8173ef8ff4f1f282"
  },
  {
   "num": 12,
   "topic": "http",
   "question": "בפרוטוקול HTTP בגרסת HTTP שתומכת בפרסיסטנטיות: האם ניתן לבקש שני דפים שונים (למשל: https://ims.gov.il/he/Forecast ו- https://ims.gov.il/he/coasts) מעל אותו persistent connection.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כן.",
     "html": "כן."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון : אי אפשר.",
     "html": "לא נכון : אי אפשר."
    },
    {
     "id": "c",
     "type": "text",
     "value": "תלוי בגודל הדף: בדפים קטנים כן, בדפים גדולים לא.",
     "html": "תלוי בגודל הדף: בדפים קטנים כן, בדפים גדולים לא."
    },
    {
     "id": "d",
     "type": "text",
     "value": "תלוי בגודל הדף: בדפים קטנים לא , בדפים גדולים (ללא תמונות) כן.",
     "html": "תלוי בגודל הדף: בדפים קטנים לא , בדפים גדולים (ללא תמונות) כן."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "חיבור persistent (HTTP/1.1) נשאר פתוח אחרי תגובה ומאפשר לשלוח עליו בקשות נוספות לאותו שרת. שני ה-URL הם באותו שרת (`ims.gov.il`), ולכן אפשר לבקש את שני הדפים על אותו חיבור.\nגודל הדף אינו משנה (ב, ג ו-ד שגויות).",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Corrected wording used (amendment sheet adds 'in the HTTP version that supports persistence').",
   "id": "23A-A-Q12",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "בפרוטוקול HTTP בגרסת HTTP שתומכת בפרסיסטנטיות: האם ניתן לבקש שני דפים שונים (למשל: https://ims.gov.il/he/Forecast ו- https://ims.gov.il/he/coasts) מעל אותו persistent connection.",
   "explanationHtml": "חיבור persistent (HTTP/1.1) נשאר פתוח אחרי תגובה ומאפשר לשלוח עליו בקשות נוספות לאותו שרת. שני ה-URL הם באותו שרת (<code class=\"tok\" dir=\"ltr\">ims.gov.il</code>), ולכן אפשר לבקש את שני הדפים על אותו חיבור.<br>גודל הדף אינו משנה (ב, ג ו-ד שגויות).",
   "dedupKey": "08007c0d418a1fdd"
  },
  {
   "num": 13,
   "topic": "dns_dhcp",
   "question": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט שנמצא ב-URL מסוים במחשב מקומי באותו LAN וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).\nבתחילת התהליך כתובת ה-IP של שרת ה-HTTP **אינה ידועה**.\nאלו פרוטוקולים של שכבת ה-transport נדרשים להיות מופעלים בתסריט זה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "DNS ו-HTTP",
     "html": "DNS ו-HTTP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "TCP בשביל DNS; TCP בשביל HTTP",
     "html": "TCP בשביל DNS; TCP בשביל HTTP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "UDP בשביל DNS; TCP בשביל HTTP",
     "html": "UDP בשביל DNS; TCP בשביל HTTP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף לא אחת מהתשובות לעיל",
     "html": "אף לא אחת מהתשובות לעיל"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כתובת ה-IP של השרת אינה ידועה, לכן המחשב מבצע שאילתת DNS, והיא עוברת על UDP. אחר כך נפתח חיבור TCP לשרת ה-HTTP.\nא: DNS ו-HTTP הם פרוטוקולי אפליקציה, והשאלה מבקשת פרוטוקולי תעבורה. ב: DNS לא משתמש ב-TCP בשאילתה רגילה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q13",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט שנמצא ב-URL מסוים במחשב מקומי באותו LAN וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).<br>בתחילת התהליך כתובת ה-IP של שרת ה-HTTP <strong>אינה ידועה</strong>.<br>אלו פרוטוקולים של שכבת ה-transport נדרשים להיות מופעלים בתסריט זה?",
   "explanationHtml": "כתובת ה-IP של השרת אינה ידועה, לכן המחשב מבצע שאילתת DNS, והיא עוברת על UDP. אחר כך נפתח חיבור TCP לשרת ה-HTTP.<br>א: DNS ו-HTTP הם פרוטוקולי אפליקציה, והשאלה מבקשת פרוטוקולי תעבורה. ב: DNS לא משתמש ב-TCP בשאילתה רגילה.",
   "dedupKey": "252d2bf2168b4fc8"
  },
  {
   "num": 14,
   "topic": "dns_dhcp",
   "question": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט הנמצא ב-URL מסוים **בשרת מקומי באותו LAN** בכתובת IP **ידועה** באותו Subnet כמו המחשב המבקש. וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).\nבתחילת התהליך כתובת ה-MAC של שרת ה-HTTP **אינה ידועה**.\nאלו פרוטוקולים נדרשים להיות מופעלים בתסריט זה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ARP ו-HTTP",
     "html": "ARP ו-HTTP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "DHCP ו ARP ואז DNS ואז HTTP",
     "html": "DHCP ו ARP ואז DNS ואז HTTP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "TCP בשביל DNS; TCP בשביל HTTP",
     "html": "TCP בשביל DNS; TCP בשביל HTTP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "DHCP ו ARP ואז HTTP",
     "html": "DHCP ו ARP ואז HTTP"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף לא אחת מהתשובות לעיל",
     "html": "אף לא אחת מהתשובות לעיל"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כתובת ה-IP של השרת ידועה ולכן אין צורך ב-DNS; למחשב כבר הוגדרה כתובת IP ולכן אין צורך ב-DHCP.\nחסרה רק כתובת ה-MAC של השרת באותה רשת מקומית, ולכן נדרש ARP, ואחריו HTTP (מעל TCP).\nב ו-ד כוללות DHCP שלא נדרש, ג כוללת DNS שלא נדרש.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q14",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט הנמצא ב-URL מסוים <strong>בשרת מקומי באותו LAN</strong> בכתובת IP <strong>ידועה</strong> באותו Subnet כמו המחשב המבקש. וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).<br>בתחילת התהליך כתובת ה-MAC של שרת ה-HTTP <strong>אינה ידועה</strong>.<br>אלו פרוטוקולים נדרשים להיות מופעלים בתסריט זה?",
   "explanationHtml": "כתובת ה-IP של השרת ידועה ולכן אין צורך ב-DNS; למחשב כבר הוגדרה כתובת IP ולכן אין צורך ב-DHCP.<br>חסרה רק כתובת ה-MAC של השרת באותה רשת מקומית, ולכן נדרש ARP, ואחריו HTTP (מעל TCP).<br>ב ו-ד כוללות DHCP שלא נדרש, ג כוללת DNS שלא נדרש.",
   "dedupKey": "0ebad652a47a171a"
  },
  {
   "num": 15,
   "topic": "dns_dhcp",
   "question": "באיזה פרוטוקול משתמש DHCP בשכבת ה-transport?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP",
     "html": "IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ARP",
     "html": "ARP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "TCP",
     "html": "TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "UDP",
     "html": "UDP"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף לא אחת מהתשובות לעיל",
     "html": "אף לא אחת מהתשובות לעיל"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP משתמש ב-UDP (שרת בפורט 67, לקוח בפורט 68), כי ללקוח עדיין אין כתובת IP והוא שולח Broadcast.\nIP ו-ARP אינם פרוטוקולי תעבורה, ו-TCP דורש כתובות IP מוגדרות לחיבור.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q15",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "באיזה פרוטוקול משתמש DHCP בשכבת ה-transport?",
   "explanationHtml": "DHCP משתמש ב-UDP (שרת בפורט 67, לקוח בפורט 68), כי ללקוח עדיין אין כתובת IP והוא שולח Broadcast.<br>IP ו-ARP אינם פרוטוקולי תעבורה, ו-TCP דורש כתובות IP מוגדרות לחיבור.",
   "dedupKey": "3795fe8a87d81996"
  },
  {
   "num": 16,
   "topic": "ip_cidr",
   "question": "נתונה כתובת 200.107.16.17/18. כתובת זו שייכת לבלוק כתובות.\nמהי הכתובת הראשונה והאחרונה בבלוק?\nרמז: קודם מצאו מהו הבלוק אליו שייכת הכתובת.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "200.107.16.17 זוהי כתובת ראשונה ואחרונה בבלוק",
     "html": "200.107.16.17 זוהי כתובת ראשונה ואחרונה בבלוק"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.0.0 . אחרונה בבלוק: 200.107.63.255",
     "html": "כתובת ראשונה בבלוק: 200.107.0.0 . אחרונה בבלוק: 200.107.63.255"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.16.0 . אחרונה בבלוק: 200.107.79.255",
     "html": "כתובת ראשונה בבלוק: 200.107.16.0 . אחרונה בבלוק: 200.107.79.255"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.16.17 . אחרונה בבלוק: 200.107.80.16",
     "html": "כתובת ראשונה בבלוק: 200.107.16.17 . אחרונה בבלוק: 200.107.80.16"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "המסכה $/18$ היא $255.255.192.0$, כלומר בבית השלישי הבלוקים הם בקפיצות של $64$: $0\\text{-}63$, $64\\text{-}127$, $\\ldots$\nהערך $16$ נמצא בבלוק $0\\text{-}63$, לכן הכתובת הראשונה $200.107.0.0$ והאחרונה $200.107.63.255$ (ביטי ה-host הם 14 ביטים).\nג, ד: מתחילות מ-16, שאינו גבול של בלוק /18. א: הכתובת אינה לבדה בבלוק (יש $2^{14}$ כתובות).",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-A-Q16",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "נתונה כתובת 200.107.16.17/18. כתובת זו שייכת לבלוק כתובות.<br>מהי הכתובת הראשונה והאחרונה בבלוק?<br>רמז: קודם מצאו מהו הבלוק אליו שייכת הכתובת.",
   "explanationHtml": "המסכה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">/18</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>255.255.192.0</mn></mrow><annotation encoding=\"application/x-tex\">255.255.192.0</annotation></semantics></math></span>, כלומר בבית השלישי הבלוקים הם בקפיצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">64</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mtext>-</mtext><mn>63</mn></mrow><annotation encoding=\"application/x-tex\">0\\text{-}63</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mtext>-</mtext><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">64\\text{-}127</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">\\ldots</annotation></semantics></math></span><br>הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> נמצא בבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mtext>-</mtext><mn>63</mn></mrow><annotation encoding=\"application/x-tex\">0\\text{-}63</annotation></semantics></math></span>, לכן הכתובת הראשונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200.107.0.0</mn></mrow><annotation encoding=\"application/x-tex\">200.107.0.0</annotation></semantics></math></span> והאחרונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200.107.63.255</mn></mrow><annotation encoding=\"application/x-tex\">200.107.63.255</annotation></semantics></math></span> (ביטי ה-host הם 14 ביטים).<br>ג, ד: מתחילות מ-16, שאינו גבול של בלוק /18. א: הכתובת אינה לבדה בבלוק (יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>14</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{14}</annotation></semantics></math></span> כתובות).",
   "dedupKey": "0c1e9b6f58ae660d"
  },
  {
   "num": 17,
   "topic": "tcp",
   "question": "אילו מהפונקציות הבאות חייבות להיות מיושמות על ידי פרוטוקול תעבורה אמין מעבר לפונקציות שממומשות כבר בפרוטוקול רשת? (יש לסמן כל הנכון)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קישוריות מ HOST ל HOST",
     "html": "קישוריות מ HOST ל HOST"
    },
    {
     "id": "b",
     "type": "text",
     "value": "משלוח פאקטות בסדר הנכון",
     "html": "משלוח פאקטות בסדר הנכון"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הגנה בפני משלוח פאקטות כפולות",
     "html": "הגנה בפני משלוח פאקטות כפולות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "התאוששות מאיבודי פאקטות",
     "html": "התאוששות מאיבודי פאקטות"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה.",
     "html": "אף תשובה."
    }
   ],
   "multi": true,
   "answerIds": [
    "b",
    "c",
    "d"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שכבת הרשת (IP) היא best-effort: חבילות יכולות להגיע בסדר שונה, בכפילויות או לא להגיע. פרוטוקול תעבורה אמין חייב להוסיף מעליה:\nב - משלוח בסדר הנכון: חובה, באמצעות מספרי סדר ומיון אצל המקבל.\nג - הגנה בפני כפילויות: חובה, מספרי הסדר מאפשרים לזהות ולזרוק עותק כפול.\nד - התאוששות מאיבודים: חובה, באמצעות אישורים (ACK), Timeout ושליחה חוזרת.\nא - קישוריות מ-Host ל-Host: אינה נדרשת \"מעבר\" לשכבת הרשת, כי זו כבר פונקציה של IP. לא לסמן.\nה - \"אף תשובה\": שגויה, כי ב, ג ו-ד נכונות.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "b",
   "id": "23A-A-Q17",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "אילו מהפונקציות הבאות חייבות להיות מיושמות על ידי פרוטוקול תעבורה אמין מעבר לפונקציות שממומשות כבר בפרוטוקול רשת? (יש לסמן כל הנכון)",
   "explanationHtml": "שכבת הרשת (IP) היא best-effort: חבילות יכולות להגיע בסדר שונה, בכפילויות או לא להגיע. פרוטוקול תעבורה אמין חייב להוסיף מעליה:<br>ב - משלוח בסדר הנכון: חובה, באמצעות מספרי סדר ומיון אצל המקבל.<br>ג - הגנה בפני כפילויות: חובה, מספרי הסדר מאפשרים לזהות ולזרוק עותק כפול.<br>ד - התאוששות מאיבודים: חובה, באמצעות אישורים (ACK), Timeout ושליחה חוזרת.<br>א - קישוריות מ-Host ל-Host: אינה נדרשת \"מעבר\" לשכבת הרשת, כי זו כבר פונקציה של IP. לא לסמן.<br>ה - \"אף תשובה\": שגויה, כי ב, ג ו-ד נכונות.",
   "dedupKey": "adfe2d961bdf0512"
  },
  {
   "num": 19,
   "topic": "http",
   "question": "איך מגיעים לשרתים שונים של CDN כאשר פונים לאותו שרת WEB עם אותו שם Domain :",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בעזרת DNS חכם.",
     "html": "בעזרת DNS חכם."
    },
    {
     "id": "b",
     "type": "text",
     "value": "בעזרת תכונת הפניה הרנדומית ב HTTP.",
     "html": "בעזרת תכונת הפניה הרנדומית ב HTTP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "אפשרי רק בעזרת קוקיס עוגיות.",
     "html": "אפשרי רק בעזרת קוקיס עוגיות."
    },
    {
     "id": "d",
     "type": "text",
     "value": "בעזרת פרסיסטנטיות ב HTTP1.1 .",
     "html": "בעזרת פרסיסטנטיות ב HTTP1.1 ."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה.",
     "html": "אף תשובה."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "ב-CDN שרת ה-DNS של המפעיל משיב כתובת IP שונה לפי המיקום של השואל (ה-Resolver שלו), ולכן לקוחות שונים שפונים לאותו שם מגיעים לשרתי CDN שונים הקרובים אליהם. זה \"DNS חכם\".\nב: אין מנגנון \"הפניה רנדומית\" ב-HTTP שמכוון לפי מיקום; ג: עוגיות אינן הדרך; ד: persistence שומר חיבור פתוח ואינו בוחר שרת.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). The cover page allows several correct answers; only option a is a mechanism a CDN uses.",
   "id": "23A-A-Q19",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איך מגיעים לשרתים שונים של CDN כאשר פונים לאותו שרת WEB עם אותו שם Domain :",
   "explanationHtml": "ב-CDN שרת ה-DNS של המפעיל משיב כתובת IP שונה לפי המיקום של השואל (ה-Resolver שלו), ולכן לקוחות שונים שפונים לאותו שם מגיעים לשרתי CDN שונים הקרובים אליהם. זה \"DNS חכם\".<br>ב: אין מנגנון \"הפניה רנדומית\" ב-HTTP שמכוון לפי מיקום; ג: עוגיות אינן הדרך; ד: persistence שומר חיבור פתוח ואינו בוחר שרת.",
   "dedupKey": "41858c4d21c5b9bc"
  },
  {
   "num": 20,
   "topic": "tcp",
   "question": "מהו התפקיד של מנגנון בקרת זרימה (Flow Control) ב-TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "להגן מפני העמסת נתבים ROUTERS עי ריבוי re-transmits .",
     "html": "להגן מפני העמסת נתבים ROUTERS עי ריבוי re-transmits ."
    },
    {
     "id": "b",
     "type": "text",
     "value": "להגן מפני העמסת מתגים SWITCHES עי ריבוי re-transmits .",
     "html": "להגן מפני העמסת מתגים SWITCHES עי ריבוי re-transmits ."
    },
    {
     "id": "c",
     "type": "text",
     "value": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי או איטית מיידי .",
     "html": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי או איטית מיידי ."
    },
    {
     "id": "d",
     "type": "text",
     "value": "להגן מפני העמסת נתבים ROUTERS מ TimeOuts ארוכים מידי.",
     "html": "להגן מפני העמסת נתבים ROUTERS מ TimeOuts ארוכים מידי."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה .",
     "html": "אף תשובה לא נכונה ."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בקרת זרימה ב-TCP מגינה על המקבל: המקבל מפרסם חלון קבלה (rwnd) והשולח לא שולח יותר ממה שהמקבל יכול לקלוט.\nהעמסה על נתבים ומתגים היא עניין של בקרת עומס (Congestion Control), ולא של בקרת זרימה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Corrected wording used (amendment sheet: 'flow-control mechanism'). Option c is printed with 'או איטית מיידי' (sic).",
   "id": "23A-A-Q20",
   "examCode": "23A-A",
   "examLabel": "2023 סמסטר א מועד א",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "מהו התפקיד של מנגנון בקרת זרימה (Flow Control) ב-TCP?",
   "explanationHtml": "בקרת זרימה ב-TCP מגינה על המקבל: המקבל מפרסם חלון קבלה (rwnd) והשולח לא שולח יותר ממה שהמקבל יכול לקלוט.<br>העמסה על נתבים ומתגים היא עניין של בקרת עומס (Congestion Control), ולא של בקרת זרימה.",
   "dedupKey": "ecb416bae7e5c34e"
  },
  {
   "num": 1,
   "topic": "ip_cidr",
   "question": "חבילת IP (פאקט IP) בגודל 2580 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes ואין שימוש בהרחבת header (options).\nנתון שבלינק ה MTU הוא 532 BYTES. על החבילה לעבור בלינק בודד זה בלבד.\nמה נכון לגבי הערך הרשום בשדה Offset בחבילה מספר 5 (מתוך 5)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Offset=1600",
     "html": "Offset=1600"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Offset=2048",
     "html": "Offset=2048"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Offset= 2064",
     "html": "Offset= 2064"
    },
    {
     "id": "d",
     "type": "text",
     "value": "Offset= 258",
     "html": "Offset= 258"
    },
    {
     "id": "e",
     "type": "text",
     "value": "Offset= 256",
     "html": "Offset= 256"
    }
   ],
   "correctId": "e",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "החבילה המקורית היא $2580$ בתים, מתוכם $20$ header, כלומר $2560$ בתים של נתונים.\nה-MTU הוא $532$, ולכן בכל פרגמנט יש מקום ל-$532-20=512$ בתים נתונים (כפולה של 8). $2560/512=5$ פרגמנטים בדיוק.\nהפרגמנט החמישי מתחיל אחרי $4\\cdot512=2048$ בתים, וה-Offset נמדד ביחידות של 8 בתים: $2048/8=256$.\n2048 הוא ההיסט בבתים (לא ביחידות של 8), 258 ו-2064 אינם תוצאה של החישוב, ו-1600 אינו קשור.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q1",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילת IP (פאקט IP) בגודל 2580 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes ואין שימוש בהרחבת header (options).<br>נתון שבלינק ה MTU הוא 532 BYTES. על החבילה לעבור בלינק בודד זה בלבד.<br>מה נכון לגבי הערך הרשום בשדה Offset בחבילה מספר 5 (מתוך 5)?",
   "explanationHtml": "החבילה המקורית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2580</mn></mrow><annotation encoding=\"application/x-tex\">2580</annotation></semantics></math></span> בתים, מתוכם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">20</annotation></semantics></math></span> header, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2560</mn></mrow><annotation encoding=\"application/x-tex\">2560</annotation></semantics></math></span> בתים של נתונים.<br>ה-MTU הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>532</mn></mrow><annotation encoding=\"application/x-tex\">532</annotation></semantics></math></span>, ולכן בכל פרגמנט יש מקום ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>532</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>512</mn></mrow><annotation encoding=\"application/x-tex\">532-20=512</annotation></semantics></math></span> בתים נתונים (כפולה של 8). <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2560</mn><mi mathvariant=\"normal\">/</mi><mn>512</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">2560/512=5</annotation></semantics></math></span> פרגמנטים בדיוק.<br>הפרגמנט החמישי מתחיל אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>512</mn><mo>=</mo><mn>2048</mn></mrow><annotation encoding=\"application/x-tex\">4\\cdot512=2048</annotation></semantics></math></span> בתים, וה-Offset נמדד ביחידות של 8 בתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2048</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>256</mn></mrow><annotation encoding=\"application/x-tex\">2048/8=256</annotation></semantics></math></span>.<br>2048 הוא ההיסט בבתים (לא ביחידות של 8), 258 ו-2064 אינם תוצאה של החישוב, ו-1600 אינו קשור.",
   "dedupKey": "8d7861bd8a6411dc"
  },
  {
   "num": 2,
   "topic": "ip_cidr",
   "question": "חבילת IP (פאקט IP) בגודל 2580 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes. אין שימוש בהרחבות של options.\nנתון שבלינק ה MTU הוא 532 BYTES. על החבילה לעבור בלינק בודד זה בלבד.\nמה נכון לגבי גודל המטען בחבילה המקורית **לפני** הפרגמנטציה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "גודל המטען הוא 2580",
     "html": "גודל המטען הוא 2580"
    },
    {
     "id": "b",
     "type": "text",
     "value": "גודל המטען הוא 2048",
     "html": "גודל המטען הוא 2048"
    },
    {
     "id": "c",
     "type": "text",
     "value": "גודל המטען הוא 2568",
     "html": "גודל המטען הוא 2568"
    },
    {
     "id": "d",
     "type": "text",
     "value": "גודל המטען הוא 2560",
     "html": "גודל המטען הוא 2560"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "גודל החבילה 2580 כולל את ה-header של 20 בתים, לכן המטען הוא $2580-20=2560$.\nבדיקה: בכל פרגמנט $532-20=512$ בתים נתונים, ו-$2560/512=5$ פרגמנטים כנדרש. מטען של 2580 או 2568 היה נותן 6 פרגמנטים, ומטען של 2048 היה נותן 4.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q2",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילת IP (פאקט IP) בגודל 2580 Bytes עברה fragmentation ל-5 חבילות. נתון כי גודל ה-header הוא 20 Bytes. אין שימוש בהרחבות של options.<br>נתון שבלינק ה MTU הוא 532 BYTES. על החבילה לעבור בלינק בודד זה בלבד.<br>מה נכון לגבי גודל המטען בחבילה המקורית <strong>לפני</strong> הפרגמנטציה?",
   "explanationHtml": "גודל החבילה 2580 כולל את ה-header של 20 בתים, לכן המטען הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2580</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>2560</mn></mrow><annotation encoding=\"application/x-tex\">2580-20=2560</annotation></semantics></math></span>.<br>בדיקה: בכל פרגמנט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>532</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>512</mn></mrow><annotation encoding=\"application/x-tex\">532-20=512</annotation></semantics></math></span> בתים נתונים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2560</mn><mi mathvariant=\"normal\">/</mi><mn>512</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">2560/512=5</annotation></semantics></math></span> פרגמנטים כנדרש. מטען של 2580 או 2568 היה נותן 6 פרגמנטים, ומטען של 2048 היה נותן 4.",
   "dedupKey": "6b9a9fb8ddd48ffa"
  },
  {
   "num": 3,
   "topic": "dns_dhcp",
   "question": "קבעו מה מבין ההיגדים הבאים נכון",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול TCP בשכבת התעבורה",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול TCP בשכבת התעבורה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול UDP בשכבת התעבורה",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת האפליקציה בארכיטקטורה של client-server ועובד מעל פרוטוקול UDP בשכבת התעבורה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה ומשמש להעברת מידע אמינה.",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה ומשמש להעברת מידע אמינה."
    },
    {
     "id": "d",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן דינאמי.",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן דינאמי."
    },
    {
     "id": "e",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן סטאטי.",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת הרשת ומספק ללקוחות כתובות IP באופן סטאטי."
    },
    {
     "id": "f",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP הוא פרוטוקול לקוח-שרת של שכבת האפליקציה שרץ מעל UDP (פורטים 67 ו-68).\nא: DHCP אינו משתמש ב-TCP. ג: אינו פרוטוקול תעבורה ואינו אמין. ד, ה: אינו בשכבת הרשת (וגם הכתובות דינמיות, לא סטאטיות).",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q3",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "קבעו מה מבין ההיגדים הבאים נכון",
   "explanationHtml": "DHCP הוא פרוטוקול לקוח-שרת של שכבת האפליקציה שרץ מעל UDP (פורטים 67 ו-68).<br>א: DHCP אינו משתמש ב-TCP. ג: אינו פרוטוקול תעבורה ואינו אמין. ד, ה: אינו בשכבת הרשת (וגם הכתובות דינמיות, לא סטאטיות).",
   "dedupKey": "eaddc5252bedb986"
  },
  {
   "num": 4,
   "topic": "tcp",
   "question": "קבעו עבור ההיגד מטה את התיאור המדויק ביותר עבורו:\n\"הערכת RTT (Round Trip Time) מתבצעת, עבור תפקוד הפרוטוקול, גם בפרוטוקול TCP וגם בפרוטוקול UDP.\"",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא נכון : הערכת RTT מתבצעת רק ב IP",
     "html": "לא נכון : הערכת RTT מתבצעת רק ב IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון: רק ב UDP",
     "html": "לא נכון: רק ב UDP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לא נכון : רק ב TCP",
     "html": "לא נכון : רק ב TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת כי תלוי בעומס ברשת.",
     "html": "לא ניתן לדעת כי תלוי בעומס ברשת."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף אחד מהתשובות האחרות אינה נכונה .",
     "html": "אף אחד מהתשובות האחרות אינה נכונה ."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "TCP מעריך RTT כדי לקבוע את ה-Timeout של שליחה חוזרת. ב-UDP אין אישורים ואין שליחה חוזרת, ולכן אין הערכת RTT.\nההיגד \"גם ב-TCP וגם ב-UDP\" שגוי, והתיאור המדויק הוא \"לא נכון: רק ב-TCP\". ד: אפשר לדעת, זה לא תלוי בעומס.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q4",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "קבעו עבור ההיגד מטה את התיאור המדויק ביותר עבורו:<br>\"הערכת RTT (Round Trip Time) מתבצעת, עבור תפקוד הפרוטוקול, גם בפרוטוקול TCP וגם בפרוטוקול UDP.\"",
   "explanationHtml": "TCP מעריך RTT כדי לקבוע את ה-Timeout של שליחה חוזרת. ב-UDP אין אישורים ואין שליחה חוזרת, ולכן אין הערכת RTT.<br>ההיגד \"גם ב-TCP וגם ב-UDP\" שגוי, והתיאור המדויק הוא \"לא נכון: רק ב-TCP\". ד: אפשר לדעת, זה לא תלוי בעומס.",
   "dedupKey": "372feb9c0d1f3688"
  },
  {
   "num": 5,
   "topic": "ip_cidr",
   "question": "בחרו את כל הנכון:\nהיכן מתבצעת פרגמנטציית IP **בשכבת הרשת** (סמנו את כל הנכון)\n(בשאלה זו לא להתייחס לפרגמנטציה בשכבות אחרות )",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HOST שולח",
     "html": "HOST שולח"
    },
    {
     "id": "b",
     "type": "text",
     "value": "HOST מקבל",
     "html": "HOST מקבל"
    },
    {
     "id": "c",
     "type": "text",
     "value": "נתב",
     "html": "נתב"
    },
    {
     "id": "d",
     "type": "text",
     "value": "מחשב לקוח מקבל +נתב",
     "html": "מחשב לקוח מקבל +נתב"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף אחד מהתשובות האחרות אינה נכונה .",
     "html": "אף אחד מהתשובות האחרות אינה נכונה ."
    },
    {
     "id": "f",
     "type": "text",
     "value": "בשרתי DNS בשאילתה המתקבלת, בתנאי שעובדים ב UDP (יבוצע בצד השרת המקבל).",
     "html": "בשרתי DNS בשאילתה המתקבלת, בתנאי שעובדים ב UDP (יבוצע בצד השרת המקבל)."
    }
   ],
   "multi": true,
   "answerIds": [
    "a",
    "c"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "פרגמנטציה ב-IP מתבצעת כשחבילה גדולה מה-MTU של הקישור שבו היא עומדת לעבור.\nא - HOST שולח: נכון, המחשב השולח מפרגמנט חבילה שגדולה מה-MTU של הקישור היוצא שלו.\nג - נתב: נכון, נתב שמעביר חבילה לקישור עם MTU קטן יותר מפרגמנט אותה (אלא אם הוגדר DF).\nב - HOST מקבל: שגוי, המקבל מבצע רק הרכבה מחדש (reassembly) ולא פרגמנטציה.\nד - מחשב לקוח מקבל ונתב: שגוי, כי היא כוללת את המקבל.\nה - \"אף אחת\": שגויה, כי א ו-ג נכונות.\nו - שרת DNS בצד המקבל: שגוי, הצד המקבל מרכיב ואינו מפרגמנט, גם כשעובדים מעל UDP.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "a",
   "id": "23A-B-Q5",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "בחרו את כל הנכון:<br>היכן מתבצעת פרגמנטציית IP <strong>בשכבת הרשת</strong> (סמנו את כל הנכון)<br>(בשאלה זו לא להתייחס לפרגמנטציה בשכבות אחרות )",
   "explanationHtml": "פרגמנטציה ב-IP מתבצעת כשחבילה גדולה מה-MTU של הקישור שבו היא עומדת לעבור.<br>א - HOST שולח: נכון, המחשב השולח מפרגמנט חבילה שגדולה מה-MTU של הקישור היוצא שלו.<br>ג - נתב: נכון, נתב שמעביר חבילה לקישור עם MTU קטן יותר מפרגמנט אותה (אלא אם הוגדר DF).<br>ב - HOST מקבל: שגוי, המקבל מבצע רק הרכבה מחדש (reassembly) ולא פרגמנטציה.<br>ד - מחשב לקוח מקבל ונתב: שגוי, כי היא כוללת את המקבל.<br>ה - \"אף אחת\": שגויה, כי א ו-ג נכונות.<br>ו - שרת DNS בצד המקבל: שגוי, הצד המקבל מרכיב ואינו מפרגמנט, גם כשעובדים מעל UDP.",
   "dedupKey": "fe4251215cd9c88b"
  },
  {
   "num": 6,
   "topic": "intro_layers",
   "question": "בחרו את ההיגד המדויק ביותר: במודל 5 השכבות אותו למדנו :",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "משתמשים עיקריים של שכבת האפליקציה הם לקוחות ולכן שימוש בממשק משתמש גרפי (GUI) או מימשק משתמש טקסטואלי הם חובה בשכבה זו.",
     "html": "משתמשים עיקריים של שכבת האפליקציה הם לקוחות ולכן שימוש בממשק משתמש גרפי (GUI) או מימשק משתמש טקסטואלי הם חובה בשכבה זו."
    },
    {
     "id": "b",
     "type": "text",
     "value": "שכבת האפליקציה בוחרת בשירות שכבת תעבורה המתאים לצרכיה – datagram או stream",
     "html": "שכבת האפליקציה בוחרת בשירות שכבת תעבורה המתאים לצרכיה – datagram או stream"
    },
    {
     "id": "c",
     "type": "text",
     "value": "שכבת התעבורה מחליטה איזה שירות (datagram או stream) מתאים יותר לשכבת האפליקציה.",
     "html": "שכבת התעבורה מחליטה איזה שירות (datagram או stream) מתאים יותר לשכבת האפליקציה."
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף היגד לא נכון.",
     "html": "אף היגד לא נכון."
    },
    {
     "id": "e",
     "type": "text",
     "value": "שכבת הרשת מחליטה איזה שירות (datagram או stream) מתאים יותר לשכבת האפליקציה.",
     "html": "שכבת הרשת מחליטה איזה שירות (datagram או stream) מתאים יותר לשכבת האפליקציה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "האפליקציה היא שיודעת מה היא צריכה, ולכן היא בוחרת את השירות של שכבת התעבורה: UDP (datagram) או TCP (stream).\nא: ממשק משתמש אינו חובה (יש אפליקציות רקע, שרתים ועוד). ג, ה: השכבות התחתונות אינן מחליטות עבור האפליקציה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q6",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "בחרו את ההיגד המדויק ביותר: במודל 5 השכבות אותו למדנו :",
   "explanationHtml": "האפליקציה היא שיודעת מה היא צריכה, ולכן היא בוחרת את השירות של שכבת התעבורה: UDP (datagram) או TCP (stream).<br>א: ממשק משתמש אינו חובה (יש אפליקציות רקע, שרתים ועוד). ג, ה: השכבות התחתונות אינן מחליטות עבור האפליקציה.",
   "dedupKey": "91855465d408082b"
  },
  {
   "num": 7,
   "topic": "http",
   "question": "מה מהכתוב מטה **אינו חלק** מהיתרונות של רשת עמית לעמית (Peer To Peer P2P) בהשוואה לשימוש במודל של שרת לקוח :\nסמנו את כל התשובות הרלוונטיות.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סקלביליות : הוספת לקוחות גם מוסיפה נותני שרות.",
     "html": "סקלביליות : הוספת לקוחות גם מוסיפה נותני שרות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "באותם קצבי רשת בין מחשבים : יכולת ההעברה וההפצה הן יותר מהירות ברשת P2P בהשוואה למודל שרת-לקוח.",
     "html": "באותם קצבי רשת בין מחשבים : יכולת ההעברה וההפצה הן יותר מהירות ברשת P2P בהשוואה למודל שרת-לקוח."
    },
    {
     "id": "c",
     "type": "text",
     "value": "קלות ניהול.",
     "html": "קלות ניהול."
    },
    {
     "id": "d",
     "type": "text",
     "value": "תלות בשרת מרכזי.",
     "html": "תלות בשרת מרכזי."
    },
    {
     "id": "e",
     "type": "text",
     "value": "בהנחת הוגנות: הוספת לקוחות לא מוסיפה נותני שרות.",
     "html": "בהנחת הוגנות: הוספת לקוחות לא מוסיפה נותני שרות."
    }
   ],
   "multi": true,
   "answerIds": [
    "c",
    "d",
    "e"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "השאלה מבקשת את מה שאינו יתרון של P2P, ולכן מסמנים את ג, ד ו-ה.\nג - קלות ניהול: אינה יתרון, כי אין שרת מרכזי ששולט והניהול מבוזר וקשה יותר. לסמן.\nד - תלות בשרת מרכזי: אינה יתרון של P2P. זו תכונה של מודל לקוח-שרת (וחיסרון שלו), וב-P2P ההפך הוא הנכון. לסמן.\nה - \"הוספת לקוחות לא מוסיפה נותני שירות\": הפוכה למציאות ב-P2P, שבו כל עמית מוסיף גם יכולת שירות. לכן אינה יתרון. לסמן.\nא - סקלביליות: יתרון של P2P (כל עמית חדש מוסיף גם ביקוש וגם שירות). לא לסמן.\nב - מהירות הפצה: יתרון של P2P (כל העמיתים משתתפים בהעברה). לא לסמן.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "c",
   "id": "23A-B-Q7",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מה מהכתוב מטה <strong>אינו חלק</strong> מהיתרונות של רשת עמית לעמית (Peer To Peer P2P) בהשוואה לשימוש במודל של שרת לקוח :<br>סמנו את כל התשובות הרלוונטיות.",
   "explanationHtml": "השאלה מבקשת את מה שאינו יתרון של P2P, ולכן מסמנים את ג, ד ו-ה.<br>ג - קלות ניהול: אינה יתרון, כי אין שרת מרכזי ששולט והניהול מבוזר וקשה יותר. לסמן.<br>ד - תלות בשרת מרכזי: אינה יתרון של P2P. זו תכונה של מודל לקוח-שרת (וחיסרון שלו), וב-P2P ההפך הוא הנכון. לסמן.<br>ה - \"הוספת לקוחות לא מוסיפה נותני שירות\": הפוכה למציאות ב-P2P, שבו כל עמית מוסיף גם יכולת שירות. לכן אינה יתרון. לסמן.<br>א - סקלביליות: יתרון של P2P (כל עמית חדש מוסיף גם ביקוש וגם שירות). לא לסמן.<br>ב - מהירות הפצה: יתרון של P2P (כל העמיתים משתתפים בהעברה). לא לסמן.",
   "dedupKey": "b4712382709f30a1"
  },
  {
   "num": 8,
   "topic": "http",
   "question": "איזה מהבעיות מטה, בא פתרון רשת מסוג CDN לפתור :\nסמנו את כל התשובות הנכונות.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סקלביליות : יכולת תמיכה בכמות גדולה של לקוחות.",
     "html": "סקלביליות : יכולת תמיכה בכמות גדולה של לקוחות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "חסם הגידול ביכולת התמיכה של שרת בודד.",
     "html": "חסם הגידול ביכולת התמיכה של שרת בודד."
    },
    {
     "id": "c",
     "type": "text",
     "value": "חסם הגידול ברוחב הפס של קו תקשורת בודד.",
     "html": "חסם הגידול ברוחב הפס של קו תקשורת בודד."
    },
    {
     "id": "d",
     "type": "text",
     "value": "בעיית המחסור בכתובות רשת מסוג IPV6",
     "html": "בעיית המחסור בכתובות רשת מסוג IPV6"
    },
    {
     "id": "e",
     "type": "text",
     "value": "תלות במיגבלות ביצועים של שרת בודד.",
     "html": "תלות במיגבלות ביצועים של שרת בודד."
    },
    {
     "id": "f",
     "type": "text",
     "value": "בעיית המחסור בכתובות רשת מסוג IPV4",
     "html": "בעיית המחסור בכתובות רשת מסוג IPV4"
    }
   ],
   "multi": true,
   "answerIds": [
    "a",
    "b",
    "c",
    "e"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "CDN מפזר עותקי תוכן בשרתים רבים הקרובים ללקוחות, ולכן הוא פותר בעיות של עומס ושל מרחק.\nא - סקלביליות: נכון, הלקוחות מתחלקים בין שרתים רבים.\nב - חסם היכולת של שרת בודד: נכון, כבר אין שרת יחיד שמטפל בכולם.\nג - חסם רוחב הפס של קו בודד: נכון, התנועה מתפזרת על פני קווים רבים.\nה - תלות במגבלות הביצועים של שרת בודד: נכון, זו אותה בעיה של ב מנוסחת אחרת.\nד, ו - מחסור בכתובות IPv6 או IPv4: לא נכון. זו בעיה של שכבת הרשת (נפתרת ב-NAT וב-IPv6), ו-CDN אינו עוסק בה.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "a",
   "id": "23A-B-Q8",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איזה מהבעיות מטה, בא פתרון רשת מסוג CDN לפתור :<br>סמנו את כל התשובות הנכונות.",
   "explanationHtml": "CDN מפזר עותקי תוכן בשרתים רבים הקרובים ללקוחות, ולכן הוא פותר בעיות של עומס ושל מרחק.<br>א - סקלביליות: נכון, הלקוחות מתחלקים בין שרתים רבים.<br>ב - חסם היכולת של שרת בודד: נכון, כבר אין שרת יחיד שמטפל בכולם.<br>ג - חסם רוחב הפס של קו בודד: נכון, התנועה מתפזרת על פני קווים רבים.<br>ה - תלות במגבלות הביצועים של שרת בודד: נכון, זו אותה בעיה של ב מנוסחת אחרת.<br>ד, ו - מחסור בכתובות IPv6 או IPv4: לא נכון. זו בעיה של שכבת הרשת (נפתרת ב-NAT וב-IPv6), ו-CDN אינו עוסק בה.",
   "dedupKey": "a634a64cb6c13b52"
  },
  {
   "num": 9,
   "topic": "sockets_email",
   "question": "יעל מבקשת להגיע לאתר http://www.newplace.com שלא גלשה בו קודם. ידוע כי:\n- הדף הראשי של האתר מכיל מלל ו 6 תמונות ולא כולל הפניות לאתרים נוספים.\n- דפדפן ושרת תומכים ב HTTP 1.1\n- כל התמונות נמצאות על השרת www.newplace.com\n- שרת האתר נמצא במצב האזנה.\nכמה sockets ייפתחו במחשב של יעל?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "8: 1 לבקשת DNS, 1 לדף HTML ועד 6 לתמונות",
     "html": "8: 1 לבקשת DNS, 1 לדף HTML ועד 6 לתמונות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "1: עבור דף HTML ותמונות",
     "html": "1: עבור דף HTML ותמונות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "2: 1 לבקשת DNS ו-1 עבור דף HTML ותמונות",
     "html": "2: 1 לבקשת DNS ו-1 עבור דף HTML ותמונות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "7: 1 עבור דף HTML ו 6 עבור תמונות",
     "html": "7: 1 עבור דף HTML ו 6 עבור תמונות"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "האתר חדש עבור יעל, לכן קודם נדרשת שאילתת DNS: socket אחד (UDP).\nאחר כך נפתח חיבור TCP לשרת, וב-HTTP/1.1 הוא persistent: הדף ו-6 התמונות (כולן על אותו שרת) עוברים על אותו חיבור. סך הכול 2 sockets.\n8 ו-7 דורשים חיבור לכל תמונה, ו-1 מתעלם משאילתת ה-DNS.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Assumes the persistent-connection reading of HTTP/1.1 and a UDP socket for DNS.",
   "id": "23A-B-Q9",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "Sockets ודואר: SMTP, POP ו-IMAP",
   "questionHtml": "יעל מבקשת להגיע לאתר http://www.newplace.com שלא גלשה בו קודם. ידוע כי:<br>- הדף הראשי של האתר מכיל מלל ו 6 תמונות ולא כולל הפניות לאתרים נוספים.<br>- דפדפן ושרת תומכים ב HTTP 1.1<br>- כל התמונות נמצאות על השרת www.newplace.com<br>- שרת האתר נמצא במצב האזנה.<br>כמה sockets ייפתחו במחשב של יעל?",
   "explanationHtml": "האתר חדש עבור יעל, לכן קודם נדרשת שאילתת DNS: socket אחד (UDP).<br>אחר כך נפתח חיבור TCP לשרת, וב-HTTP/1.1 הוא persistent: הדף ו-6 התמונות (כולן על אותו שרת) עוברים על אותו חיבור. סך הכול 2 sockets.<br>8 ו-7 דורשים חיבור לכל תמונה, ו-1 מתעלם משאילתת ה-DNS.",
   "dedupKey": "f1a0df4ca278918e"
  },
  {
   "num": 10,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה עם כתובת יעד 25.36.67.5 לפי טבלת הניתוב הבאה: (סמנו את כל הנכון)\n`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`\n`E: 25.30.00.0/12`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "b",
     "type": "text",
     "value": "B",
     "html": "B"
    },
    {
     "id": "c",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "d",
     "type": "text",
     "value": "D",
     "html": "D"
    },
    {
     "id": "e",
     "type": "text",
     "value": "E",
     "html": "E"
    },
    {
     "id": "f",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match עבור $25.36.67.5$:\nA: $/16$ מתאימה. B: $25.36.128.0/20$ מכסה $128\\text{-}143$ בבית השלישי - לא כוללת 67. C: $25.36.64.0/20$ מכסה $64\\text{-}79$ - מתאימה. D: $20.0.0.0/8$ - לא מתאימה.\nE: $25.30.0.0/12$ - 12 הביטים הראשונים הם $25$ ו-$0001$ (מ-$30=00011110$), אך $36=00100100$ מתחיל ב-$0010$, ולכן לא מתאימה.\nA ו-C מתאימות והארוכה ביותר היא C ($/20$), ולכן החבילה תנותב ל-C.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q10",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה עם כתובת יעד 25.36.67.5 לפי טבלת הניתוב הבאה: (סמנו את כל הנכון)<br><code class=\"tok\" dir=\"ltr\">A: 25.36.64.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code><br><code class=\"tok\" dir=\"ltr\">E: 25.30.00.0/12</code>",
   "explanationHtml": "Longest Prefix Match עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span>:<br>A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/16</annotation></semantics></math></span> מתאימה. B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn><mtext>-</mtext><mn>143</mn></mrow><annotation encoding=\"application/x-tex\">128\\text{-}143</annotation></semantics></math></span> בבית השלישי - לא כוללת 67. C: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mtext>-</mtext><mn>79</mn></mrow><annotation encoding=\"application/x-tex\">64\\text{-}79</annotation></semantics></math></span> - מתאימה. D: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20.0.0.0</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">20.0.0.0/8</annotation></semantics></math></span> - לא מתאימה.<br>E: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.30.0.0</mn><mi mathvariant=\"normal\">/</mi><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">25.30.0.0/12</annotation></semantics></math></span> - 12 הביטים הראשונים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0001</mn></mrow><annotation encoding=\"application/x-tex\">0001</annotation></semantics></math></span> (מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>30</mn><mo>=</mo><mn>00011110</mn></mrow><annotation encoding=\"application/x-tex\">30=00011110</annotation></semantics></math></span>), אך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>36</mn><mo>=</mo><mn>00100100</mn></mrow><annotation encoding=\"application/x-tex\">36=00100100</annotation></semantics></math></span> מתחיל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0010</mn></mrow><annotation encoding=\"application/x-tex\">0010</annotation></semantics></math></span>, ולכן לא מתאימה.<br>A ו-C מתאימות והארוכה ביותר היא C (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">/20</annotation></semantics></math></span>), ולכן החבילה תנותב ל-C.",
   "dedupKey": "92255d39814fb8be"
  },
  {
   "num": 11,
   "topic": "dns_dhcp",
   "question": "בנוגע לציור מטה: ביום ראשון בבוקר דני מגיע ראשון לעבודה לפני כולם. דני מדליק את המחשב שלו ופונה פעם ראשונה במחשבו לגלוש לאתר של www.amazon.com. דני הוא הראשון במקום העבודה שלו, באותו בוקר, שפונה לגלוש באינטרנט ואין פעילויות גלישה אחרות אפילו לא מצד שרתי עידכונים אוטומטיים.\nהמחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com. המחשב של דני ששמו pcdany ומסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.\nלמה מתאימה סדרת הפעולות המתוארת בשרטוט לעיל:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שאילתת ARP",
     "html": "שאילתת ARP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שאילתת DNS איטרטיבית.",
     "html": "שאילתת DNS איטרטיבית."
    },
    {
     "id": "c",
     "type": "text",
     "value": "שאילתת DNS רקורסיבית.",
     "html": "שאילתת DNS רקורסיבית."
    },
    {
     "id": "d",
     "type": "text",
     "value": "שאילתת DNS איטרטיבית פרסיסטנטית.",
     "html": "שאילתת DNS איטרטיבית פרסיסטנטית."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה .",
     "html": "אף תשובה לא נכונה ."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בשרטוט שרת ה-DNS המקומי שולח שאילתה אחת (2) ל-root וממתין לתשובה סופית (7). ה-root עצמו פונה ל-TLD (3, 6) וה-TLD ל-authoritative (4, 5), והתשובה חוזרת בשרשרת. כל שרת עושה את העבודה בשם השואל - שאילתה רקורסיבית.\nבשאילתה איטרטיבית ה-root היה מחזיר הפניה והמקומי היה פונה בעצמו. ARP אינו קשור, ו\"איטרטיבית פרסיסטנטית\" אינו מושג קיים.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Figure redrawn cleanly from the printed one (tools/verify/23A-A/draw_dns.py).",
   "image": "images/exams/23A-B-Q11.png",
   "id": "23A-B-Q11",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בנוגע לציור מטה: ביום ראשון בבוקר דני מגיע ראשון לעבודה לפני כולם. דני מדליק את המחשב שלו ופונה פעם ראשונה במחשבו לגלוש לאתר של www.amazon.com. דני הוא הראשון במקום העבודה שלו, באותו בוקר, שפונה לגלוש באינטרנט ואין פעילויות גלישה אחרות אפילו לא מצד שרתי עידכונים אוטומטיים.<br>המחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com. המחשב של דני ששמו pcdany ומסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.<br>למה מתאימה סדרת הפעולות המתוארת בשרטוט לעיל:",
   "explanationHtml": "בשרטוט שרת ה-DNS המקומי שולח שאילתה אחת (2) ל-root וממתין לתשובה סופית (7). ה-root עצמו פונה ל-TLD (3, 6) וה-TLD ל-authoritative (4, 5), והתשובה חוזרת בשרשרת. כל שרת עושה את העבודה בשם השואל - שאילתה רקורסיבית.<br>בשאילתה איטרטיבית ה-root היה מחזיר הפניה והמקומי היה פונה בעצמו. ARP אינו קשור, ו\"איטרטיבית פרסיסטנטית\" אינו מושג קיים.",
   "dedupKey": "078fe44c8e6b0da0"
  },
  {
   "num": 12,
   "topic": "tcp",
   "question": "חוו את דעתכם בנוגע לנכונות הטענה הבאה :\nמבחינת האפליקציה אם צריך לשלוח סגמנט **אחד בלבד** של נתונים, הרי שאין הבדל בין האופן שבו TCP ו-UDP מתנהגים.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "נכון: אין הבדל.",
     "html": "נכון: אין הבדל."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון : יש הבדל במקרה אי הגעה או אובדן בדרך.",
     "html": "לא נכון : יש הבדל במקרה אי הגעה או אובדן בדרך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "נכון בתלות ב \"גודל חלון\". עבור חלון קטן מ 8 אכן אין הבדל.",
     "html": "נכון בתלות ב \"גודל חלון\". עבור חלון קטן מ 8 אכן אין הבדל."
    },
    {
     "id": "d",
     "type": "text",
     "value": "נכון, אין הבדל. פרט לשימוש בבקרת זרימה למניעת הצפת המקבל ואז כן יש הבדל.",
     "html": "נכון, אין הבדל. פרט לשימוש בבקרת זרימה למניעת הצפת המקבל ואז כן יש הבדל."
    },
    {
     "id": "e",
     "type": "text",
     "value": "נכון, אין הבדל. פרט לתלות בגודל ה MTU (מתחת ל 2580 MTU תהיה שבירה)",
     "html": "נכון, אין הבדל. פרט לתלות בגודל ה MTU (מתחת ל 2580 MTU תהיה שבירה)"
    },
    {
     "id": "f",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "גם עם סגמנט אחד TCP מבטיח אמינות (ACK, Timeout ושליחה חוזרת), ו-UDP שולח פעם אחת בלי לבדוק אם הגיע. אם הסגמנט אובד, ב-TCP האפליקציה עדיין תקבל אותו וב-UDP לא.\nההיגד \"אין הבדל\" שגוי, ולכן ב נכונה; א, ג, ד ו-ה כולן מתחילות מ\"נכון, אין הבדל\".",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q12",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "חוו את דעתכם בנוגע לנכונות הטענה הבאה :<br>מבחינת האפליקציה אם צריך לשלוח סגמנט <strong>אחד בלבד</strong> של נתונים, הרי שאין הבדל בין האופן שבו TCP ו-UDP מתנהגים.",
   "explanationHtml": "גם עם סגמנט אחד TCP מבטיח אמינות (ACK, Timeout ושליחה חוזרת), ו-UDP שולח פעם אחת בלי לבדוק אם הגיע. אם הסגמנט אובד, ב-TCP האפליקציה עדיין תקבל אותו וב-UDP לא.<br>ההיגד \"אין הבדל\" שגוי, ולכן ב נכונה; א, ג, ד ו-ה כולן מתחילות מ\"נכון, אין הבדל\".",
   "dedupKey": "51ab4ce05f673a8a"
  },
  {
   "num": 13,
   "topic": "dns_dhcp",
   "question": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כן, אפשר לוותר על ARP.",
     "html": "כן, אפשר לוותר על ARP."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לא נכון : אי אפשר לוותר על ARP.",
     "html": "לא נכון : אי אפשר לוותר על ARP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "כן אפשר לוותר על ARP ברשת גדולה שיש ב שרת DNS מקומי.",
     "html": "כן אפשר לוותר על ARP ברשת גדולה שיש ב שרת DNS מקומי."
    },
    {
     "id": "d",
     "type": "text",
     "value": "התשובה לא חד משמעית: כי התשובה תלויה בהגדרות המערכת.",
     "html": "התשובה לא חד משמעית: כי התשובה תלויה בהגדרות המערכת."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP נותן כתובת IP, מסכה, Gateway ו-DNS, אך לא כתובות MAC. כדי לשלוח מסגרת ברשת המקומית צריך את ה-MAC של היעד, ואותו מקבלים רק מ-ARP.\nלכן אי אפשר לוותר על ARP. ג: שרת DNS מקומי לא נותן כתובות MAC; ד: אין תלות בהגדרות.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q13",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "האם ניתן להשתמש בפרוטוקול DHCP כתחליף מלא לשימוש בפרוטוקול ARP במצב בו כבר נעזרים בפרוטוקול DHCP ?",
   "explanationHtml": "DHCP נותן כתובת IP, מסכה, Gateway ו-DNS, אך לא כתובות MAC. כדי לשלוח מסגרת ברשת המקומית צריך את ה-MAC של היעד, ואותו מקבלים רק מ-ARP.<br>לכן אי אפשר לוותר על ARP. ג: שרת DNS מקומי לא נותן כתובות MAC; ד: אין תלות בהגדרות.",
   "dedupKey": "fb9f24903d4ecca6"
  },
  {
   "num": 14,
   "topic": "dns_dhcp",
   "question": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט הנמצא ב-URL **מסוים בשרת מקומי באותו LAN** בכתובת IP **ידועה** באותו Subnet כמו המחשב המבקש. וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).\nבתחילת התהליך כתובת ה-MAC של שרת ה-HTTP **אינה ידועה**.\nאלו פרוטוקולים נדרשים להיות מופעלים בתסריט זה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ARP ו-HTTP",
     "html": "ARP ו-HTTP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "DHCP ו ARP ואז DNS ואז HTTP",
     "html": "DHCP ו ARP ואז DNS ואז HTTP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "TCP בשביל DNS; TCP בשביל HTTP",
     "html": "TCP בשביל DNS; TCP בשביל HTTP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "DHCP ו ARP ואז HTTP",
     "html": "DHCP ו ARP ואז HTTP"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף לא אחת מהתשובות לעיל",
     "html": "אף לא אחת מהתשובות לעיל"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כתובת ה-IP של השרת ידועה, ולכן אין צורך ב-DNS; למחשב כבר הוגדרה כתובת IP ולכן אין צורך ב-DHCP.\nחסר רק ה-MAC של השרת באותה רשת מקומית, ולכן נדרש ARP ואחריו HTTP (מעל TCP). ב ו-ד כוללות DHCP, ג כוללת DNS.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q14",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "הניחו שלקוח HTTP מעוניין לקבל דף אינטרנט הנמצא ב-URL <strong>מסוים בשרת מקומי באותו LAN</strong> בכתובת IP <strong>ידועה</strong> באותו Subnet כמו המחשב המבקש. וזוהי בקשה ראשונה לקבלת דף זה במחשב זה (כי המחשב חדש אבל קונפגה לו כבר כתובת IP).<br>בתחילת התהליך כתובת ה-MAC של שרת ה-HTTP <strong>אינה ידועה</strong>.<br>אלו פרוטוקולים נדרשים להיות מופעלים בתסריט זה?",
   "explanationHtml": "כתובת ה-IP של השרת ידועה, ולכן אין צורך ב-DNS; למחשב כבר הוגדרה כתובת IP ולכן אין צורך ב-DHCP.<br>חסר רק ה-MAC של השרת באותה רשת מקומית, ולכן נדרש ARP ואחריו HTTP (מעל TCP). ב ו-ד כוללות DHCP, ג כוללת DNS.",
   "dedupKey": "2237861b70d6649f"
  },
  {
   "num": 15,
   "topic": "dns_dhcp",
   "question": "באיזה פרוטוקול משתמש DHCP בשכבת ה-transport?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP",
     "html": "IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ARP",
     "html": "ARP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "TCP",
     "html": "TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "UDP",
     "html": "UDP"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף לא אחת מהתשובות לעיל",
     "html": "אף לא אחת מהתשובות לעיל"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP משתמש ב-UDP (שרת בפורט 67, לקוח בפורט 68), כי ללקוח עדיין אין כתובת IP והוא שולח Broadcast.\nIP ו-ARP אינם פרוטוקולי תעבורה, ו-TCP דורש כתובת IP מוגדרת.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q15",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "באיזה פרוטוקול משתמש DHCP בשכבת ה-transport?",
   "explanationHtml": "DHCP משתמש ב-UDP (שרת בפורט 67, לקוח בפורט 68), כי ללקוח עדיין אין כתובת IP והוא שולח Broadcast.<br>IP ו-ARP אינם פרוטוקולי תעבורה, ו-TCP דורש כתובת IP מוגדרת.",
   "dedupKey": "3795fe8a87d81996"
  },
  {
   "num": 16,
   "topic": "ip_cidr",
   "question": "נתונה כתובת 200.107.16.17/18. כתובת זו שייכת לבלוק כתובות.\nמהי הכתובת הראשונה והאחרונה בבלוק?\nרמז: קודם מצאו מהו הבלוק אליו שייכת הכתובת.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "200.107.16.17 זוהי כתובת ראשונה ואחרונה בבלוק",
     "html": "200.107.16.17 זוהי כתובת ראשונה ואחרונה בבלוק"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.0.0 . אחרונה בבלוק: 200.107.63.255",
     "html": "כתובת ראשונה בבלוק: 200.107.0.0 . אחרונה בבלוק: 200.107.63.255"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.16.0 . אחרונה בבלוק: 200.107.79.255",
     "html": "כתובת ראשונה בבלוק: 200.107.16.0 . אחרונה בבלוק: 200.107.79.255"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כתובת ראשונה בבלוק: 200.107.16.17 . אחרונה בבלוק: 200.107.80.16",
     "html": "כתובת ראשונה בבלוק: 200.107.16.17 . אחרונה בבלוק: 200.107.80.16"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "המסכה $/18$ היא $255.255.192.0$, ובבית השלישי הבלוקים הם בקפיצות של $64$: $0\\text{-}63$, $64\\text{-}127$, $\\ldots$\nהערך $16$ נמצא בבלוק $0\\text{-}63$, לכן הכתובת הראשונה $200.107.0.0$ והאחרונה $200.107.63.255$.\nג, ד: מתחילות מ-16, שאינו גבול של בלוק /18.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q16",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "נתונה כתובת 200.107.16.17/18. כתובת זו שייכת לבלוק כתובות.<br>מהי הכתובת הראשונה והאחרונה בבלוק?<br>רמז: קודם מצאו מהו הבלוק אליו שייכת הכתובת.",
   "explanationHtml": "המסכה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>18</mn></mrow><annotation encoding=\"application/x-tex\">/18</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>255.255.192.0</mn></mrow><annotation encoding=\"application/x-tex\">255.255.192.0</annotation></semantics></math></span>, ובבית השלישי הבלוקים הם בקפיצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">64</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mtext>-</mtext><mn>63</mn></mrow><annotation encoding=\"application/x-tex\">0\\text{-}63</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mtext>-</mtext><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">64\\text{-}127</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">\\ldots</annotation></semantics></math></span><br>הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span> נמצא בבלוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mtext>-</mtext><mn>63</mn></mrow><annotation encoding=\"application/x-tex\">0\\text{-}63</annotation></semantics></math></span>, לכן הכתובת הראשונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200.107.0.0</mn></mrow><annotation encoding=\"application/x-tex\">200.107.0.0</annotation></semantics></math></span> והאחרונה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200.107.63.255</mn></mrow><annotation encoding=\"application/x-tex\">200.107.63.255</annotation></semantics></math></span>.<br>ג, ד: מתחילות מ-16, שאינו גבול של בלוק /18.",
   "dedupKey": "0c1e9b6f58ae660d"
  },
  {
   "num": 17,
   "topic": "tcp",
   "question": "אילו מהפונקציות הבאות חייבות להיות מיושמות על ידי פרוטוקול תעבורה אמין TCP ? (יש לסמן כל הנכון)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קישוריות מ PROCESS ל PROCESS",
     "html": "קישוריות מ PROCESS ל PROCESS"
    },
    {
     "id": "b",
     "type": "text",
     "value": "קבלת פאקטות בסדר הנכון",
     "html": "קבלת פאקטות בסדר הנכון"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הגנה בפני משלוח פאקטות כפולות",
     "html": "הגנה בפני משלוח פאקטות כפולות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "התאוששות מאיבודי פאקטות",
     "html": "התאוששות מאיבודי פאקטות"
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה.",
     "html": "אף תשובה."
    }
   ],
   "multi": true,
   "answerIds": [
    "a",
    "b",
    "c",
    "d"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "TCP חייב לספק מעל שכבת הרשת (best-effort) את כל הפונקציות האלה:\nא - קישוריות בין תהליכים: חובה. שכבת הרשת מגיעה עד התחנה, ו-TCP מוסיף פורטים כדי להגיע לתהליך הנכון.\nב - קבלת חבילות בסדר הנכון: חובה, באמצעות מספרי סדר ומיון אצל המקבל.\nג - הגנה בפני כפילויות: חובה, מספרי הסדר מאפשרים לזהות עותק כפול ולזרוק אותו.\nד - התאוששות מאיבודים: חובה, באמצעות אישורים (ACK), Timeout ושליחה חוזרת.\nה - \"אף תשובה\": שגויה, כי א עד ד נכונות.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select: solved set, refuted.",
   "correctId": "a",
   "id": "23A-B-Q17",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "אילו מהפונקציות הבאות חייבות להיות מיושמות על ידי פרוטוקול תעבורה אמין TCP ? (יש לסמן כל הנכון)",
   "explanationHtml": "TCP חייב לספק מעל שכבת הרשת (best-effort) את כל הפונקציות האלה:<br>א - קישוריות בין תהליכים: חובה. שכבת הרשת מגיעה עד התחנה, ו-TCP מוסיף פורטים כדי להגיע לתהליך הנכון.<br>ב - קבלת חבילות בסדר הנכון: חובה, באמצעות מספרי סדר ומיון אצל המקבל.<br>ג - הגנה בפני כפילויות: חובה, מספרי הסדר מאפשרים לזהות עותק כפול ולזרוק אותו.<br>ד - התאוששות מאיבודים: חובה, באמצעות אישורים (ACK), Timeout ושליחה חוזרת.<br>ה - \"אף תשובה\": שגויה, כי א עד ד נכונות.",
   "dedupKey": "544315ac3ab3aa3a"
  },
  {
   "num": 18,
   "topic": "http",
   "question": "איך שני לקוחות עם דפדפנים שונים , בלוס אנגלס ובתל אביב, שפונים לשרת WEB עם אותו שם DOMAIN , מגיעים לשרתים שונים של CDN כדי לקבל את אותו תוכן כלומר מגיעים לשרתים פיזים שנמצאים במקומות שונים:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בעזרת DNS חכם.",
     "html": "בעזרת DNS חכם."
    },
    {
     "id": "b",
     "type": "text",
     "value": "בעזרת תכונת הפניה הרנדומית ב HTTP.",
     "html": "בעזרת תכונת הפניה הרנדומית ב HTTP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "אפשרי רק בעזרת קוקיס עוגיות.",
     "html": "אפשרי רק בעזרת קוקיס עוגיות."
    },
    {
     "id": "d",
     "type": "text",
     "value": "בעזרת פרסיסטנטיות ב HTTP1.1.",
     "html": "בעזרת פרסיסטנטיות ב HTTP1.1."
    },
    {
     "id": "e",
     "type": "text",
     "value": "בעזרת חישובי IP GEOLOCATION בעזרת JavaScript בדפדפן.",
     "html": "בעזרת חישובי IP GEOLOCATION בעזרת JavaScript בדפדפן."
    },
    {
     "id": "f",
     "type": "text",
     "value": "אף תשובה.",
     "html": "אף תשובה."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "ב-CDN שרת ה-DNS של המפעיל משיב כתובת IP שונה לפי מיקום השואל, ולכן לקוחות במקומות שונים מגיעים לשרתים פיזיים שונים. זה \"DNS חכם\".\nב: אין \"הפניה רנדומית\" ב-HTTP שמכוונת לפי מיקום; ג: עוגיות אינן הדרך; ד: persistence שומר חיבור ואינו בוחר שרת; ה: החישוב אינו נעשה בדפדפן.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). The cover page allows several correct answers; only option a is the mechanism a CDN uses.",
   "id": "23A-B-Q18",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איך שני לקוחות עם דפדפנים שונים , בלוס אנגלס ובתל אביב, שפונים לשרת WEB עם אותו שם DOMAIN , מגיעים לשרתים שונים של CDN כדי לקבל את אותו תוכן כלומר מגיעים לשרתים פיזים שנמצאים במקומות שונים:",
   "explanationHtml": "ב-CDN שרת ה-DNS של המפעיל משיב כתובת IP שונה לפי מיקום השואל, ולכן לקוחות במקומות שונים מגיעים לשרתים פיזיים שונים. זה \"DNS חכם\".<br>ב: אין \"הפניה רנדומית\" ב-HTTP שמכוונת לפי מיקום; ג: עוגיות אינן הדרך; ד: persistence שומר חיבור ואינו בוחר שרת; ה: החישוב אינו נעשה בדפדפן.",
   "dedupKey": "bbd0f3601cda472c"
  },
  {
   "num": 19,
   "topic": "tcp",
   "question": "מהו התפקיד של מנגנון בקרת זרימה (Flow Control) בתוך UDP ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "להגן מפני העמסת נתבים ROUTERS עי ריבוי re-transmits .",
     "html": "להגן מפני העמסת נתבים ROUTERS עי ריבוי re-transmits ."
    },
    {
     "id": "b",
     "type": "text",
     "value": "להגן מפני העמסת מתגים SWITCHES עי ריבוי re-transmits .",
     "html": "להגן מפני העמסת מתגים SWITCHES עי ריבוי re-transmits ."
    },
    {
     "id": "c",
     "type": "text",
     "value": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי אבל גם להימנע משליחה איטית מידי .",
     "html": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי אבל גם להימנע משליחה איטית מידי ."
    },
    {
     "id": "d",
     "type": "text",
     "value": "להגן מפני העמסת נתבים ROUTERS בשל TimeOuts ארוכים מידי.",
     "html": "להגן מפני העמסת נתבים ROUTERS בשל TimeOuts ארוכים מידי."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה כי אין Flow Control ב UDP.",
     "html": "אף תשובה לא נכונה כי אין Flow Control ב UDP."
    }
   ],
   "correctId": "e",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ל-UDP אין בקרת זרימה: הוא שולח ללא חלון קבלה, ללא אישורים וללא שליחות חוזרות. בקרת זרימה היא תכונה של TCP.\nלכן \"אין Flow Control ב-UDP\" (ה) הוא ההיגד הנכון; א-ד מתארים תפקידים שאינם קיימים ב-UDP.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key).",
   "id": "23A-B-Q19",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "מהו התפקיד של מנגנון בקרת זרימה (Flow Control) בתוך UDP ?",
   "explanationHtml": "ל-UDP אין בקרת זרימה: הוא שולח ללא חלון קבלה, ללא אישורים וללא שליחות חוזרות. בקרת זרימה היא תכונה של TCP.<br>לכן \"אין Flow Control ב-UDP\" (ה) הוא ההיגד הנכון; א-ד מתארים תפקידים שאינם קיימים ב-UDP.",
   "dedupKey": "ef28c17b1803b6d4"
  },
  {
   "num": 20,
   "topic": "tcp",
   "question": "מהו התפקיד של מנגנון בקרת עומס Congestion Control ב TCP ?\n(תזכורת, סמנו את כל הנכון בשאלה זו וגם בכל השאלות האחרות !)",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "להגן מפני העמסת נתבים ROUTERS בשל ריבוי re-transmits .",
     "html": "להגן מפני העמסת נתבים ROUTERS בשל ריבוי re-transmits ."
    },
    {
     "id": "b",
     "type": "text",
     "value": "להגן מפני העמסת מתגים SWITCHES עי ריבוי fast-transmits .",
     "html": "להגן מפני העמסת מתגים SWITCHES עי ריבוי fast-transmits ."
    },
    {
     "id": "c",
     "type": "text",
     "value": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי אבל גם להימנע משליחה איטית מידי .",
     "html": "להגן מפני הצפת הצד המקבל בשל שליחה מהירה מידי אבל גם להימנע משליחה איטית מידי ."
    },
    {
     "id": "d",
     "type": "text",
     "value": "להגן מפני תת-ניצול נתבים בשל TimeOuts ארוכים מידי.",
     "html": "להגן מפני תת-ניצול נתבים בשל TimeOuts ארוכים מידי."
    },
    {
     "id": "e",
     "type": "text",
     "value": "אף תשובה לא נכונה.",
     "html": "אף תשובה לא נכונה."
    }
   ],
   "multi": true,
   "answerIds": [
    "a",
    "b"
   ],
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "בקרת עומס ב-TCP מגינה על הרשת, לא על המקבל: כשמתגלה עומס (איבוד חבילות, Timeout או שלושה ACK כפולים) השולח מקטין את חלון העומס (cwnd), כדי שרכיבי הרשת - נתבים ומתגים - לא יוצפו בחבילות חדשות ובשליחות חוזרות.\nא ו-ב נכונות: ההגנה היא על נתבים (א) ועל מתגים (ב) מפני עומס יתר שנגרם משליחות חוזרות.\nג מתארת בקרת זרימה (חלון הקבלה rwnd של המקבל), לא בקרת עומס.\nד עוסקת באורך ה-Timeout, שנקבע בהערכת RTT, ואינו המטרה של בקרת עומס.\nה שגויה, כי א ו-ב נכונות.",
   "note": "Scan with student ticks: ticks not used as a key; solved independently from the printed question (student copy, no official key). Multi-select (the stem carries the reminder to mark every correct option). Arbiter 2026-10-24: set {a,b}; option d judged not a purpose of congestion control but doubtful - ASK_ADIR open.",
   "correctId": "a",
   "id": "23A-B-Q20",
   "examCode": "23A-B",
   "examLabel": "2023 סמסטר א מועד ב",
   "year": 2023,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "מהו התפקיד של מנגנון בקרת עומס Congestion Control ב TCP ?<br>(תזכורת, סמנו את כל הנכון בשאלה זו וגם בכל השאלות האחרות !)",
   "explanationHtml": "בקרת עומס ב-TCP מגינה על הרשת, לא על המקבל: כשמתגלה עומס (איבוד חבילות, Timeout או שלושה ACK כפולים) השולח מקטין את חלון העומס (cwnd), כדי שרכיבי הרשת - נתבים ומתגים - לא יוצפו בחבילות חדשות ובשליחות חוזרות.<br>א ו-ב נכונות: ההגנה היא על נתבים (א) ועל מתגים (ב) מפני עומס יתר שנגרם משליחות חוזרות.<br>ג מתארת בקרת זרימה (חלון הקבלה rwnd של המקבל), לא בקרת עומס.<br>ד עוסקת באורך ה-Timeout, שנקבע בהערכת RTT, ואינו המטרה של בקרת עומס.<br>ה שגויה, כי א ו-ב נכונות.",
   "dedupKey": "a45a2db2f8894e0a"
  },
  {
   "num": 1,
   "topic": "delays",
   "question": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 1 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עוצמת תעבורה = 0.0007, אין פוטנציאל עומס.",
     "html": "עוצמת תעבורה = 0.0007, אין פוטנציאל עומס."
    },
    {
     "id": "b",
     "type": "text",
     "value": "עוצמת תעבורה = 0.07, אין פוטנציאל עומס.",
     "html": "עוצמת תעבורה = 0.07, אין פוטנציאל עומס."
    },
    {
     "id": "c",
     "type": "text",
     "value": "עוצמת תעבורה = 0.7, יש פוטנציאל קל לעומס.",
     "html": "עוצמת תעבורה = 0.7, יש פוטנציאל קל לעומס."
    },
    {
     "id": "d",
     "type": "text",
     "value": "עוצמת תעבורה = 7, יש פוטנציאל עומס גבוה מאוד.",
     "html": "עוצמת תעבורה = 7, יש פוטנציאל עומס גבוה מאוד."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שיעור ההגעה הוא לשעה, ולכן קודם ממירים לשנייה: $a=\\frac{500000}{3600}\\approx 138.9$ חבילות לשנייה.\n$$\\rho=\\frac{a\\cdot L}{R}=\\frac{138.9\\cdot 5000}{10^{9}}\\approx 0.0007$$\nעוצמה קטנה בהרבה מ-1 - התור ריק כמעט תמיד ואין פוטנציאל לעומס.\nב, ג, ד מתקבלות אם שוכחים להמיר שעה לשנייה (או מחשבים בסדר גודל שגוי).",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q1",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 1 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 500,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? האם תוצאה זו מצביעה על פוטנציאל לעומס (congestion) בקישור?",
   "explanationHtml": "שיעור ההגעה הוא לשעה, ולכן קודם ממירים לשנייה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mn>500000</mn><mn>3600</mn></mfrac><mo>≈</mo><mn>138.9</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{500000}{3600}\\approx 138.9</annotation></semantics></math></span> חבילות לשנייה.<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mrow><mn>138.9</mn><mo>⋅</mo><mn>5000</mn></mrow><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>≈</mo><mn>0.0007</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}=\\frac{138.9\\cdot 5000}{10^{9}}\\approx 0.0007</annotation></semantics></math></span><br>עוצמה קטנה בהרבה מ-1 - התור ריק כמעט תמיד ואין פוטנציאל לעומס.<br>ב, ג, ד מתקבלות אם שוכחים להמיר שעה לשנייה (או מחשבים בסדר גודל שגוי).",
   "dedupKey": "e9d8b02f6eeba734"
  },
  {
   "num": 2,
   "topic": "delays",
   "question": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 10 Gbps\n- גודל חבילה (packet size): 5,000 ביטים\n- מרחק התפשטות (propagation distance): 1000 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nמהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך שה Traffic Intensity יהיה שווה ל-0.8?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1,600,000 חבילות לשנייה",
     "html": "1,600,000 חבילות לשנייה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "8,000,000 חבילות לשנייה",
     "html": "8,000,000 חבילות לשנייה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "16,000,000 חבילות לשנייה",
     "html": "16,000,000 חבילות לשנייה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "32,000,000 חבילות לשנייה",
     "html": "32,000,000 חבילות לשנייה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "מ-$\\rho=\\frac{a\\cdot L}{R}$ מקבלים $a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 10\\cdot10^{9}}{5000}=1{,}600{,}000$ חבילות לשנייה.\nהשאר הן כפולות של 5 או 10 מהערך הנכון (טעות בחזקת 10 או בגורם 0.8).",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q2",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "במערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 10 Gbps<br>- גודל חבילה (packet size): 5,000 ביטים<br>- מרחק התפשטות (propagation distance): 1000 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>מהי כמות החבילות המקסימלית (בחבילות לשנייה) שניתן להשיג בקישור זה כך שה Traffic Intensity יהיה שווה ל-0.8?",
   "explanationHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mo>⋅</mo><mi>R</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>0.8</mn><mo>⋅</mo><mn>10</mn><mo>⋅</mo><msup><mn>10</mn><mn>9</mn></msup></mrow><mn>5000</mn></mfrac><mo>=</mo><mn>1,600,000</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 10\\cdot10^{9}}{5000}=1{,}600{,}000</annotation></semantics></math></span> חבילות לשנייה.<br>השאר הן כפולות של 5 או 10 מהערך הנכון (טעות בחזקת 10 או בגורם 0.8).",
   "dedupKey": "d4edb1df862e905d"
  },
  {
   "num": 3,
   "topic": "http",
   "question": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP, מה שמאפשר העברת נתונים מהירה יותר.",
     "html": "HTTP/2.0 פועל אך ורק מעל פרוטוקול UDP, מה שמאפשר העברת נתונים מהירה יותר."
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל החיבורים.",
     "html": "HTTP/2.0 מחייב הצפנה, ובכך משפר משמעותית את האבטחה של כל החיבורים."
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על-גבי חיבור TCP יחיד, מה שמקטין את זמן ההשהיה (latency) הכולל בעיית חסימת ה-head-of-line שקיימת ב-TCP",
     "html": "HTTP/2.0 מאפשר לשרת וללקוח להעביר מספר בקשות ותגובות על-גבי חיבור TCP יחיד, מה שמקטין את זמן ההשהיה (latency) הכולל בעיית חסימת ה-head-of-line שקיימת ב-TCP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות מעלה",
     "html": "אף אחת מהתשובות מעלה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "HTTP/2 אכן שולח הרבה בקשות במקביל (multiplexing) על חיבור TCP יחיד, אבל הוא עדיין רץ מעל TCP, ולכן בעיית ה-head-of-line blocking של TCP נשארת: איבוד חבילה אחת עוצר את כל הזרמים. את הבעיה הזו פותר רק HTTP/3 (מעל QUIC).\nא: HTTP/2 רץ מעל TCP, לא UDP. ב: ההצפנה נדרשת בפועל בדפדפנים, אך אינה חובה בתקן, וזה אינו שיפור בניצול משאבים. ג: הסעיף נכשל בחלקו האחרון - HTTP/2 אינו פותר את חסימת ה-head-of-line של TCP.\nלכן \"אף אחת מהתשובות מעלה\".",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q3",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "איזה שיפור משמעותי מציע HTTP/2.0 לעומת HTTP/1.1 מבחינת ניצול משאבי הרשת?",
   "explanationHtml": "HTTP/2 אכן שולח הרבה בקשות במקביל (multiplexing) על חיבור TCP יחיד, אבל הוא עדיין רץ מעל TCP, ולכן בעיית ה-head-of-line blocking של TCP נשארת: איבוד חבילה אחת עוצר את כל הזרמים. את הבעיה הזו פותר רק HTTP/3 (מעל QUIC).<br>א: HTTP/2 רץ מעל TCP, לא UDP. ב: ההצפנה נדרשת בפועל בדפדפנים, אך אינה חובה בתקן, וזה אינו שיפור בניצול משאבים. ג: הסעיף נכשל בחלקו האחרון - HTTP/2 אינו פותר את חסימת ה-head-of-line של TCP.<br>לכן \"אף אחת מהתשובות מעלה\".",
   "dedupKey": "0da343042e2792c9"
  },
  {
   "num": 4,
   "topic": "dns_dhcp",
   "question": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`Offer->Discover->Request->Acknowledge`",
     "html": "<code class=\"tok\" dir=\"ltr\">Offer-&gt;Discover-&gt;Request-&gt;Acknowledge</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`Discover->Offer-> Acknowledge->Request`",
     "html": "<code class=\"tok\" dir=\"ltr\">Discover-&gt;Offer-&gt; Acknowledge-&gt;Request</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`Discover->Offer-> Request -> Acknowledge`",
     "html": "<code class=\"tok\" dir=\"ltr\">Discover-&gt;Offer-&gt; Request -&gt; Acknowledge</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`Discover->Offer-> Acknowledge->Request`",
     "html": "<code class=\"tok\" dir=\"ltr\">Discover-&gt;Offer-&gt; Acknowledge-&gt;Request</code>"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-Acknowledge.\nא מתחילה ב-Offer לפני ה-Discover; ב ו-ד (הנוסח זהה בשתיהן בשאלון) שמות את ה-Acknowledge לפני ה-Request.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold. Options ב and ד print identical text in the source.",
   "id": "24A-A-Q4",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהו סדר ההודעות המלא (במידה ולא מדובר בבקשת חידוש) בפרוטוקול DHCP?",
   "explanationHtml": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-Acknowledge.<br>א מתחילה ב-Offer לפני ה-Discover; ב ו-ד (הנוסח זהה בשתיהן בשאלון) שמות את ה-Acknowledge לפני ה-Request.",
   "dedupKey": "4bcf254308d74e00"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום ב-TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל.",
     "html": "כדי לאכוף שיטות הצפנה חזקות יותר כברירת מחדל."
    },
    {
     "id": "b",
     "type": "text",
     "value": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת השהיית השידור הכוללת. כמו כן, לפתור את בעיית חסימת ה-head-of-line שקיימת ב-HTTP/2.",
     "html": "כדי להפחית את זמן ההשהיה להקמת הקשרים ואת השהיית השידור הכוללת. כמו כן, לפתור את בעיית חסימת ה-head-of-line שקיימת ב-HTTP/2."
    },
    {
     "id": "c",
     "type": "text",
     "value": "כדי לבטל את הצורך בכתובות IP.",
     "html": "כדי לבטל את הצורך בכתובות IP."
    },
    {
     "id": "d",
     "type": "text",
     "value": "כדי לספק שיטת שידור אותות אמינה יותר.",
     "html": "כדי לספק שיטת שידור אותות אמינה יותר."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "QUIC רץ מעל UDP, משלב את לחיצת היד של ההצפנה עם הקמת החיבור (פחות RTT) ומנהל כל זרם בנפרד, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים - פתרון לחסימת ה-head-of-line שנשארה ב-HTTP/2 מעל TCP.\nא: ההצפנה היא תוצאה נלווית, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: אמינות אותות היא עניין של השכבה הפיזית.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q5",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מדוע פרוטוקול HTTP/3 משתמש ב-QUIC במקום ב-TCP?",
   "explanationHtml": "QUIC רץ מעל UDP, משלב את לחיצת היד של ההצפנה עם הקמת החיבור (פחות RTT) ומנהל כל זרם בנפרד, כך שאיבוד חבילה בזרם אחד לא חוסם את האחרים - פתרון לחסימת ה-head-of-line שנשארה ב-HTTP/2 מעל TCP.<br>א: ההצפנה היא תוצאה נלווית, לא הסיבה העיקרית. ג: QUIC עדיין משתמש בכתובות IP. ד: אמינות אותות היא עניין של השכבה הפיזית.",
   "dedupKey": "3b6704dc8f05b375"
  },
  {
   "num": 6,
   "topic": "http",
   "question": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: `http://mywebsite.com/index.html`.\nבדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:\n`http://mywebsite.com/imageA.jpg`\n`http://mymirrorwebsite.com/imageB.jpg`\nלאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n- `mywebsite.com: 203.0.113.10`\n- `mymirrorwebsite.com: 203.0.113.10`\nבהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1",
     "html": "1"
    },
    {
     "id": "b",
     "type": "text",
     "value": "2",
     "html": "2"
    },
    {
     "id": "c",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לא ניתן לדעת",
     "html": "לא ניתן לדעת"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "ב-HTTP/1.1 persistent חיבור אחד משרת כמה אובייקטים ברצף (ללא pipelining - בקשה אחת בכל פעם) מאותו שרת. הדפדפן מנהל את החיבורים לפי שם המארח (origin): `mywebsite.com` משרת גם את `index.html` וגם את `imageA.jpg` בחיבור אחד, ו-`mymirrorwebsite.com` דורש חיבור נפרד עבור `imageB.jpg` - בסך הכול 2.\nהעובדה ששני השמות נפתרו לאותה כתובת IP אינה גורמת לדפדפן לאחד את החיבורים. 3 היה נכון בלי שימוש חוזר בחיבור (persistent).",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold. Browsers pool HTTP/1.1 connections per host name, not per IP; the shared IP is the distractor.",
   "id": "24A-A-Q6",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: <code class=\"tok\" dir=\"ltr\">http://mywebsite.com/index.html</code>.<br>בדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:<br><code class=\"tok\" dir=\"ltr\">http://mywebsite.com/imageA.jpg</code><br><code class=\"tok\" dir=\"ltr\">http://mymirrorwebsite.com/imageB.jpg</code><br>לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:<br>- <code class=\"tok\" dir=\"ltr\">mywebsite.com: 203.0.113.10</code><br>- <code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com: 203.0.113.10</code><br>בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent וללא pipelining), כמה חיבורי TCP נדרשים כדי לטעון את הדף כולל שתי התמונות?",
   "explanationHtml": "ב-HTTP/1.1 persistent חיבור אחד משרת כמה אובייקטים ברצף (ללא pipelining - בקשה אחת בכל פעם) מאותו שרת. הדפדפן מנהל את החיבורים לפי שם המארח (origin): <code class=\"tok\" dir=\"ltr\">mywebsite.com</code> משרת גם את <code class=\"tok\" dir=\"ltr\">index.html</code> וגם את <code class=\"tok\" dir=\"ltr\">imageA.jpg</code> בחיבור אחד, ו-<code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com</code> דורש חיבור נפרד עבור <code class=\"tok\" dir=\"ltr\">imageB.jpg</code> - בסך הכול 2.<br>העובדה ששני השמות נפתרו לאותה כתובת IP אינה גורמת לדפדפן לאחד את החיבורים. 3 היה נכון בלי שימוש חוזר בחיבור (persistent).",
   "dedupKey": "9d46f8587a255ae1"
  },
  {
   "num": 7,
   "topic": "http",
   "question": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע",
     "html": "לאחסן את העדפות המשתמש באתר בו הוא מבקר כרגע"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לאפשר מעקב בין אתרים ומיקוד פרסומות",
     "html": "לאפשר מעקב בין אתרים ומיקוד פרסומות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לשפר את האבטחה בהתחברות (session) משתמשים",
     "html": "לשפר את האבטחה בהתחברות (session) משתמשים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לנהל את ה- sessions של המשתמש באתר הנוכחי",
     "html": "לנהל את ה- sessions של המשתמש באתר הנוכחי"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "עוגיית צד שלישי נקבעת על ידי דומיין שאינו האתר שהמשתמש מבקר בו (למשל שרת פרסומות שמוטמע בדף), ולכן אותה עוגייה מזהה את אותו משתמש בכמה אתרים - מה שמאפשר מעקב בין אתרים ומיקוד פרסומות.\nא, ג, ד מתארות עוגיות צד ראשון (העדפות, ניהול session).",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q7",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי המטרה העיקרית של עוגיות צד שלישי (third-party cookies)?",
   "explanationHtml": "עוגיית צד שלישי נקבעת על ידי דומיין שאינו האתר שהמשתמש מבקר בו (למשל שרת פרסומות שמוטמע בדף), ולכן אותה עוגייה מזהה את אותו משתמש בכמה אתרים - מה שמאפשר מעקב בין אתרים ומיקוד פרסומות.<br>א, ג, ד מתארות עוגיות צד ראשון (העדפות, ניהול session).",
   "dedupKey": "bbbf8ff150a6c2f7"
  },
  {
   "num": 8,
   "topic": "http",
   "question": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גיאוגרפיים שונים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/2.0",
     "html": "העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/2.0"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שימוש ב-Content Delivery Network (CDN) לאחסון ב-cache של נכסי אתר סטטיים (תמונות, CSS, JavaScript) קרוב יותר למשתמשי הקצה.",
     "html": "שימוש ב-Content Delivery Network (CDN) לאחסון ב-cache של נכסי אתר סטטיים (תמונות, CSS, JavaScript) קרוב יותר למשתמשי הקצה."
    },
    {
     "id": "c",
     "type": "text",
     "value": "אופטימיזציה של שרת האינטרנט לטיפול במספר גדול יותר של sockets בו-זמנית",
     "html": "אופטימיזציה של שרת האינטרנט לטיפול במספר גדול יותר של sockets בו-זמנית"
    },
    {
     "id": "d",
     "type": "text",
     "value": "העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/3.0",
     "html": "העברת צד-השרת של האתר לשימוש בפרוטוקול HTTP/3.0"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשהמשתמשים מפוזרים גיאוגרפית, רוב זמן הטעינה הוא RTT והשהיית התפשטות למרחקים גדולים. CDN משכפל את הנכסים הסטטיים לשרתים קרובים למשתמש, ומקטין את המרחק - ההשפעה הגדולה ביותר.\nHTTP/2 ו-HTTP/3 משפרים ניצול חיבור אך לא מקצרים את המרחק הפיזי; הגדלת מספר ה-sockets משפרת קיבולת שרת, לא השהיית רשת.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q8",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "הנך מתכנן להעלות אתר אינטרנט ואתה צופה שתהיה תעבורת משתמשים גבוהה. איזה אספקט יהיה בעל ההשפעה הגדולה ביותר על הפחתת זמני טעינת הדף עבור משתמשים מאזורים גיאוגרפיים שונים?",
   "explanationHtml": "כשהמשתמשים מפוזרים גיאוגרפית, רוב זמן הטעינה הוא RTT והשהיית התפשטות למרחקים גדולים. CDN משכפל את הנכסים הסטטיים לשרתים קרובים למשתמש, ומקטין את המרחק - ההשפעה הגדולה ביותר.<br>HTTP/2 ו-HTTP/3 משפרים ניצול חיבור אך לא מקצרים את המרחק הפיזי; הגדלת מספר ה-sockets משפרת קיבולת שרת, לא השהיית רשת.",
   "dedupKey": "6e0df1f52ea7e5b5"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה המאפשר הקצאה דינאמית של כתובות IP פנימיות",
     "html": "פרוטוקול DHCP הוא פרוטוקול בשכבת התעבורה המאפשר הקצאה דינאמית של כתובות IP פנימיות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה של Client-Server המאפשר הקצאה סטאטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת ה-DNS המקומי",
     "html": "פרוטוקול DHCP הוא פרוטוקול בארכיטקטורה של Client-Server המאפשר הקצאה סטאטית של כתובות IP ומספק מידע חיוני נוסף למשתמשים כגון שרת ה-DNS המקומי"
    },
    {
     "id": "c",
     "type": "text",
     "value": "DHCP הוא פרוטוקול שמשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של Client-Server",
     "html": "DHCP הוא פרוטוקול שמשתמש בדרך כלל ב-TCP בשכבת התעבורה כיוון שעובד בארכיטקטורה של Client-Server"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות מעלה",
     "html": "אף אחת מהתשובות מעלה"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כל אחת משלוש הטענות שגויה: א - DHCP הוא פרוטוקול של שכבת האפליקציה (לא התעבורה). ב - הוא מקצה כתובות באופן דינמי (לא סטטי). ג - הוא משתמש ב-UDP (פורטים 67 ו-68), לא ב-TCP.\nלכן \"אף אחת מהתשובות מעלה\".",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q9",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בחרו את התשובה עם הנוסח המדויק ביותר:",
   "explanationHtml": "כל אחת משלוש הטענות שגויה: א - DHCP הוא פרוטוקול של שכבת האפליקציה (לא התעבורה). ב - הוא מקצה כתובות באופן דינמי (לא סטטי). ג - הוא משתמש ב-UDP (פורטים 67 ו-68), לא ב-TCP.<br>לכן \"אף אחת מהתשובות מעלה\".",
   "dedupKey": "374b638b7b928091"
  },
  {
   "num": 10,
   "topic": "http",
   "question": "מפתחת אתרים מעוניינת לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "תמיד עדיף להשתמש ב-GET מותנה (Conditional GET).",
     "html": "תמיד עדיף להשתמש ב-GET מותנה (Conditional GET)."
    },
    {
     "id": "b",
     "type": "text",
     "value": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם - הבקשה תישלח עם header של If-Modified-Since.",
     "html": "עדיף להשתמש ב-GET מותנה כאשר התוכן של התמונה עשוי להשתנות לעיתים קרובות, אך אין צורך למשוך את התוכן המלא בכל פעם - הבקשה תישלח עם header של If-Modified-Since."
    },
    {
     "id": "c",
     "type": "text",
     "value": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן.",
     "html": "עדיף להשתמש בבקשת PUT רק כאשר צריך אישור שהמשאב השתנה ללא צורך בהורדת התוכן."
    },
    {
     "id": "d",
     "type": "text",
     "value": "אין הבדל משמעותי בין האפשרויות",
     "html": "אין הבדל משמעותי בין האפשרויות"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשהשרת מחזיר Last-Modified, הלקוח שולח `If-Modified-Since` עם התאריך שקיבל; אם המשאב לא השתנה, השרת עונה `304 Not Modified` בלי גוף - חוסך הורדה של תמונה כבדה.\nא: \"תמיד\" שגוי - עבור תוכן שמשתנה בכל פעם בקשה מותנית רק מוסיפה תקורה. ג: PUT מעלה/מחליף משאב בשרת, ואינו בודק שינוי. ד: יש הבדל ברור ביעילות.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-A-Q10",
   "examCode": "24A-A",
   "examLabel": "2024 סמסטר א מועד א",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מפתחת אתרים מעוניינת לייעל פעילות של אתר אינטרנט המציג תמונות באיכות גבוהה. כדי להפחית העברת נתונים מיותרת, היא מעוניינת לאפשר שליחה של בקשות מותנות. השרת תומך ב-Header של Last-Modified בלבד. איזו מבין האפשרויות הבאות היא היעילה ביותר:",
   "explanationHtml": "כשהשרת מחזיר Last-Modified, הלקוח שולח <code class=\"tok\" dir=\"ltr\">If-Modified-Since</code> עם התאריך שקיבל; אם המשאב לא השתנה, השרת עונה <code class=\"tok\" dir=\"ltr\">304 Not Modified</code> בלי גוף - חוסך הורדה של תמונה כבדה.<br>א: \"תמיד\" שגוי - עבור תוכן שמשתנה בכל פעם בקשה מותנית רק מוסיפה תקורה. ג: PUT מעלה/מחליף משאב בשרת, ואינו בודק שינוי. ד: יש הבדל ברור ביעילות.",
   "dedupKey": "4b43dfbdeb3b81ad"
  },
  {
   "num": 1,
   "topic": "delays",
   "question": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 20 Mbps\n- גודל חבילה (packet size): 1,500 Bytes\n- מרחק התפשטות (propagation distance): 500 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ניתן להניח שאין עיכובים אחרים במערכת\nידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 300,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? מה ניתן לומר על העומס במערכת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "עוצמת תעבורה = 0.005, העומס נמוך אך יש פוטנציאל לעומס בטווח הרחוק",
     "html": "עוצמת תעבורה = 0.005, העומס נמוך אך יש פוטנציאל לעומס בטווח הרחוק"
    },
    {
     "id": "b",
     "type": "text",
     "value": "עוצמת תעבורה = 5, המערכת לא באיזון (congested)",
     "html": "עוצמת תעבורה = 5, המערכת לא באיזון (congested)"
    },
    {
     "id": "c",
     "type": "text",
     "value": "עוצמת תעבורה = 0.05, העומס כעת נמוך והפוטנציאל לעומס מיידי נמוך",
     "html": "עוצמת תעבורה = 0.05, העומס כעת נמוך והפוטנציאל לעומס מיידי נמוך"
    },
    {
     "id": "d",
     "type": "text",
     "value": "עוצמת תעבורה = 0.005, העומס נמוך יחסית והפוטנציאל לעומס מיידי נמוך",
     "html": "עוצמת תעבורה = 0.005, העומס נמוך יחסית והפוטנציאל לעומס מיידי נמוך"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ממירים: חבילה של $1500\\cdot 8=12000$ ביט, ושיעור ההגעה $a=\\frac{300000}{3600}\\approx 83.3$ חבילות לשנייה.\n$$\\rho=\\frac{a\\cdot L}{R}=\\frac{83.3\\cdot 12000}{20\\cdot10^{6}}=0.05$$\nהעוצמה נמוכה בהרבה מ-1, ולכן העומס נמוך ואין פוטנציאל לעומס מיידי.\nא ו-ד: 0.005 הוא פי 10 קטן מדי (טעות בהמרת Bytes או שעה); ב: 5 היה אומר שהתור גדל ללא גבול.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q1",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 20 Mbps<br>- גודל חבילה (packet size): 1,500 Bytes<br>- מרחק התפשטות (propagation distance): 500 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 300,000 חבילות לשעה. מהו ה-Traffic Intensity במערכת? מה ניתן לומר על העומס במערכת?",
   "explanationHtml": "ממירים: חבילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1500</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>12000</mn></mrow><annotation encoding=\"application/x-tex\">1500\\cdot 8=12000</annotation></semantics></math></span> ביט, ושיעור ההגעה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mn>300000</mn><mn>3600</mn></mfrac><mo>≈</mo><mn>83.3</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{300000}{3600}\\approx 83.3</annotation></semantics></math></span> חבילות לשנייה.<br><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac><mo>=</mo><mfrac><mrow><mn>83.3</mn><mo>⋅</mo><mn>12000</mn></mrow><mrow><mn>20</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></mfrac><mo>=</mo><mn>0.05</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}=\\frac{83.3\\cdot 12000}{20\\cdot10^{6}}=0.05</annotation></semantics></math></span><br>העוצמה נמוכה בהרבה מ-1, ולכן העומס נמוך ואין פוטנציאל לעומס מיידי.<br>א ו-ד: 0.005 הוא פי 10 קטן מדי (טעות בהמרת Bytes או שעה); ב: 5 היה אומר שהתור גדל ללא גבול.",
   "dedupKey": "8215c209048fd98a"
  },
  {
   "num": 2,
   "topic": "delays",
   "question": "מבין האפשרויות הבאות, איזו אפשרות תאפשר הורדה של עומס על רשת תקשורת מחשבים:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הגבלת מספר החיבורים הפתוחים בו-זמנית לשרת",
     "html": "הגבלת מספר החיבורים הפתוחים בו-זמנית לשרת"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שימוש ב-TCP בשכבת התעבורה לכל פרוטוקול בשכבת האפליקציה שמאפשר זאת",
     "html": "שימוש ב-TCP בשכבת התעבורה לכל פרוטוקול בשכבת האפליקציה שמאפשר זאת"
    },
    {
     "id": "c",
     "type": "text",
     "value": "העלאת קצב העברת הנתונים ברשת",
     "html": "העלאת קצב העברת הנתונים ברשת"
    },
    {
     "id": "d",
     "type": "text",
     "value": "הקטנה של גודל החבילות המועברות ברשת",
     "html": "הקטנה של גודל החבילות המועברות ברשת"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "עומס מוגדר דרך $\\rho=\\frac{a\\cdot L}{R}$: הוא קטן כש-$R$ (קצב העברת הנתונים) גדל. העלאת הקצב היא הדרך היחידה בין האפשרויות שמורידה את העומס בלי לפגוע בשירות.\nא: הגבלת חיבורים משנה את מי שמקבל שירות אך לא את הקיבולת של הרשת. ב: TCP מוסיף תקורה (ACK, שידורים חוזרים) ולא מפחית עומס. ד: חבילות קטנות יותר בכמות נתונים זהה הן יותר חבילות ויותר כותרות - $a$ גדל, ולכן הנתון הכולל לא ירד.\nהערה: האפשרויות חופפות חלקית. גם הגבלת מספר החיבורים (א) מורידה עומס, אבל רק משום שהיא מצמצמת את השירות עצמו (פחות לקוחות מקבלים מענה). העלאת קצב ההעברה (ג) היא היחידה שמורידה את $\\rho$ בלי לוותר על תעבורה, ולכן היא התשובה הטובה ביותר, וזו גם האפשרות המודגשת בטופס.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold. Conceptual question with some overlap (option ד lowers L but raises the packet count); the bold option is the only one that cleanly lowers rho = a*L/R.",
   "id": "24A-B-Q2",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מבין האפשרויות הבאות, איזו אפשרות תאפשר הורדה של עומס על רשת תקשורת מחשבים:",
   "explanationHtml": "עומס מוגדר דרך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}</annotation></semantics></math></span>: הוא קטן כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">R</annotation></semantics></math></span> (קצב העברת הנתונים) גדל. העלאת הקצב היא הדרך היחידה בין האפשרויות שמורידה את העומס בלי לפגוע בשירות.<br>א: הגבלת חיבורים משנה את מי שמקבל שירות אך לא את הקיבולת של הרשת. ב: TCP מוסיף תקורה (ACK, שידורים חוזרים) ולא מפחית עומס. ד: חבילות קטנות יותר בכמות נתונים זהה הן יותר חבילות ויותר כותרות - <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">a</annotation></semantics></math></span> גדל, ולכן הנתון הכולל לא ירד.<br>הערה: האפשרויות חופפות חלקית. גם הגבלת מספר החיבורים (א) מורידה עומס, אבל רק משום שהיא מצמצמת את השירות עצמו (פחות לקוחות מקבלים מענה). העלאת קצב ההעברה (ג) היא היחידה שמורידה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi></mrow><annotation encoding=\"application/x-tex\">\\rho</annotation></semantics></math></span> בלי לוותר על תעבורה, ולכן היא התשובה הטובה ביותר, וזו גם האפשרות המודגשת בטופס.",
   "dedupKey": "6e7916d0bc8df04f"
  },
  {
   "num": 3,
   "topic": "http",
   "question": "מהו ההבדל העיקרי בין גרסה HTTP/2 ו-HTTP/3?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HTTP/2 דורש שימוש בהצפנה בעוד ש-HTTP/3 אינו דורש זאת.",
     "html": "HTTP/2 דורש שימוש בהצפנה בעוד ש-HTTP/3 אינו דורש זאת."
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP/2 תומך ביכולת Server Push בעוד ש-HTTP/3 אינו תומך בכך.",
     "html": "HTTP/2 תומך ביכולת Server Push בעוד ש-HTTP/3 אינו תומך בכך."
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP/2 פועל מעל פרוטוקול TCP בעוד ש-HTTP/3 פועל מעל פרוטוקול UDP.",
     "html": "HTTP/2 פועל מעל פרוטוקול TCP בעוד ש-HTTP/3 פועל מעל פרוטוקול UDP."
    },
    {
     "id": "d",
     "type": "text",
     "value": "HTTP/2 מעביר נתונים ב-multiplexing על גבי חיבור TCP יחיד בעוד ש-HTTP/3 לא.",
     "html": "HTTP/2 מעביר נתונים ב-multiplexing על גבי חיבור TCP יחיד בעוד ש-HTTP/3 לא."
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ההבדל היסודי: HTTP/2 רץ מעל TCP, ו-HTTP/3 רץ מעל QUIC שמבוסס על UDP.\nא: ב-HTTP/3 ההצפנה (TLS 1.3) מובנית ב-QUIC, כך שהוא דווקא תמיד מוצפן. ב: Server Push הוגדר גם ב-HTTP/3. ד: גם HTTP/3 מבצע multiplexing - על זרמי QUIC.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q3",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהו ההבדל העיקרי בין גרסה HTTP/2 ו-HTTP/3?",
   "explanationHtml": "ההבדל היסודי: HTTP/2 רץ מעל TCP, ו-HTTP/3 רץ מעל QUIC שמבוסס על UDP.<br>א: ב-HTTP/3 ההצפנה (TLS 1.3) מובנית ב-QUIC, כך שהוא דווקא תמיד מוצפן. ב: Server Push הוגדר גם ב-HTTP/3. ד: גם HTTP/3 מבצע multiplexing - על זרמי QUIC.",
   "dedupKey": "98474b3c8688407f"
  },
  {
   "num": 4,
   "topic": "http",
   "question": "השרת האינטרנטי שלכם מריץ אפליקציית רשת שמטרתה לנהל הזמנות של לקוחות. כחלק מהפונקציונליות שלה, האפליקציה מאפשרת למשתמשים ליצור הזמנה חדשה בכתובת: `mywebserver.com/create` ולעדכן הזמנה קיימת בנתיב: `mywebserver.com/update/orderNum` כאשר orderNum יוחלף במס׳ ההזמנה הקיים.\nאיזה מהמשפטים הבאים נכון לבקשת HTTP PUT אשר יכולה להישלח לשרת? ידוע שהמערכת תומכת במתודה.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "בקשת HTTP PUT תמיד תחזיר שגיאה אם ההזמנה הספציפית לא קיימת.",
     "html": "בקשת HTTP PUT תמיד תחזיר שגיאה אם ההזמנה הספציפית לא קיימת."
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP PUT יכולה ליצור הזמנה חדשה אם ההזמנה הספציפית לא קיימת.",
     "html": "HTTP PUT יכולה ליצור הזמנה חדשה אם ההזמנה הספציפית לא קיימת."
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP PUT חייבת לקרוא לנתיב הרלוונטי שתומך ב- HTTP POST במידה וההזמנה לא קיימת.",
     "html": "HTTP PUT חייבת לקרוא לנתיב הרלוונטי שתומך ב- HTTP POST במידה וההזמנה לא קיימת."
    },
    {
     "id": "d",
     "type": "text",
     "value": "HTTP PUT אינה מתאימה לעדכון הזמנות ואין לעשות בה שימוש בהקשר זה.",
     "html": "HTTP PUT אינה מתאימה לעדכון הזמנות ואין לעשות בה שימוש בהקשר זה."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "לפי ההגדרה של HTTP, PUT יוצר משאב בכתובת הנתונה או מחליף אותו אם הוא כבר קיים (idempotent). לכן אם ההזמנה אינה קיימת, PUT יכול ליצור אותה.\nא: אין חובה להחזיר שגיאה. ג: PUT אינו חייב לקרוא ל-POST. ד: PUT מתאים בדיוק להחלפה/עדכון של משאב ידוע.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q4",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "השרת האינטרנטי שלכם מריץ אפליקציית רשת שמטרתה לנהל הזמנות של לקוחות. כחלק מהפונקציונליות שלה, האפליקציה מאפשרת למשתמשים ליצור הזמנה חדשה בכתובת: <code class=\"tok\" dir=\"ltr\">mywebserver.com/create</code> ולעדכן הזמנה קיימת בנתיב: <code class=\"tok\" dir=\"ltr\">mywebserver.com/update/orderNum</code> כאשר orderNum יוחלף במס׳ ההזמנה הקיים.<br>איזה מהמשפטים הבאים נכון לבקשת HTTP PUT אשר יכולה להישלח לשרת? ידוע שהמערכת תומכת במתודה.",
   "explanationHtml": "לפי ההגדרה של HTTP, PUT יוצר משאב בכתובת הנתונה או מחליף אותו אם הוא כבר קיים (idempotent). לכן אם ההזמנה אינה קיימת, PUT יכול ליצור אותה.<br>א: אין חובה להחזיר שגיאה. ג: PUT אינו חייב לקרוא ל-POST. ד: PUT מתאים בדיוק להחלפה/עדכון של משאב ידוע.",
   "dedupKey": "37df323be489d11a"
  },
  {
   "num": 5,
   "topic": "http",
   "question": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: `http://mywebsite.com/index.html`.\nבדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:\n`http://mywebsite.com/imageA.jpg`\n`http://mymirrorwebsite.com/imageB.jpg`\nלאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:\n- `mywebsite.com: 203.1.113.10`\n- `mymirrorwebsite.com: 203.0.113.10`\nבהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent ללא pipelining), כמה חיבורי TCP נדרשים בצד הלקוח כדי לטעון את הדף כולל שתי התמונות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן לדעת",
     "html": "לא ניתן לדעת"
    },
    {
     "id": "b",
     "type": "text",
     "value": "4",
     "html": "4"
    },
    {
     "id": "c",
     "type": "text",
     "value": "3",
     "html": "3"
    },
    {
     "id": "d",
     "type": "text",
     "value": "2",
     "html": "2"
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שני שמות מארח ושתי כתובות IP שונות (203.1.113.10 לעומת 203.0.113.10), ולכן שני שרתים נפרדים. חיבור persistent אחד לכל שרת משרת את כל האובייקטים ממנו ברצף: `index.html` ו-`imageA.jpg` על החיבור הראשון, `imageB.jpg` על השני - בסך הכול 2.\n3 או 4 היו נכונים רק בלי שימוש חוזר בחיבור (חיבור לכל אובייקט).",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q5",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "שושי הכניסה בשורת הכתובת בדפדפן את ה-URL הבא: <code class=\"tok\" dir=\"ltr\">http://mywebsite.com/index.html</code>.<br>בדפדפן התקבל מסמך HTML עם הפניות לשתי תמונות בכתובות הבאות:<br><code class=\"tok\" dir=\"ltr\">http://mywebsite.com/imageA.jpg</code><br><code class=\"tok\" dir=\"ltr\">http://mymirrorwebsite.com/imageB.jpg</code><br>לאחר ביצוע DNS Lookup, התקבלו כתובות ה-IP הבאות:<br>- <code class=\"tok\" dir=\"ltr\">mywebsite.com: 203.1.113.10</code><br>- <code class=\"tok\" dir=\"ltr\">mymirrorwebsite.com: 203.0.113.10</code><br>בהנחה שהדפדפן והשרתים תומכים בפרוטוקול HTTP/1.1 (persistent ללא pipelining), כמה חיבורי TCP נדרשים בצד הלקוח כדי לטעון את הדף כולל שתי התמונות?",
   "explanationHtml": "שני שמות מארח ושתי כתובות IP שונות (203.1.113.10 לעומת 203.0.113.10), ולכן שני שרתים נפרדים. חיבור persistent אחד לכל שרת משרת את כל האובייקטים ממנו ברצף: <code class=\"tok\" dir=\"ltr\">index.html</code> ו-<code class=\"tok\" dir=\"ltr\">imageA.jpg</code> על החיבור הראשון, <code class=\"tok\" dir=\"ltr\">imageB.jpg</code> על השני - בסך הכול 2.<br>3 או 4 היו נכונים רק בלי שימוש חוזר בחיבור (חיבור לכל אובייקט).",
   "dedupKey": "4dd57a1bf5349530"
  },
  {
   "num": 6,
   "topic": "delays",
   "question": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:\n- רוחב פס (bandwidth): 20 Mbps\n- גודל חבילה (packet size): 1,500 Byte\n- מרחק התפשטות (propagation distance): 500 קילומטרים\n- מהירות התפשטות (propagation speed): $2\\times10^{8}$ מטר לשנייה\n- ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 300,000 חבילות לשעה\n- ניתן להניח שאין עיכובים אחרים במערכת\nמהי כמות החבילות המקסימלית שתיאורטית שניתן להעביר בקישור זה יוכל כדי לשמור על Traffic Intensity של ל-0.8? המספרים בתשובה מעוגלים:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "1,333,333 חבילות לדקה",
     "html": "1,333,333 חבילות לדקה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "1,333 חבילות לשנייה",
     "html": "1,333 חבילות לשנייה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "1,666 חבילות לשנייה",
     "html": "1,666 חבילות לשנייה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "1,666,666 חבילות לדקה",
     "html": "1,666,666 חבילות לדקה"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "מ-$\\rho=\\frac{a\\cdot L}{R}$ מקבלים $a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 20\\cdot10^{6}}{12000}\\approx 1333$ חבילות לשנייה (שיעור ההגעה הנוכחי אינו משפיע על התשובה).\nבדקה זה כ-80,000 חבילות, ולכן שתי האפשרויות \"לדקה\" רחוקות מהערך. 1,666 מתקבל אם מחשבים עם $\\rho=1$ ו-1,500 ביט.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q6",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מערכת תקשורת מוגדרת עם הפרמטרים הבאים:<br>- רוחב פס (bandwidth): 20 Mbps<br>- גודל חבילה (packet size): 1,500 Byte<br>- מרחק התפשטות (propagation distance): 500 קילומטרים<br>- מהירות התפשטות (propagation speed): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\times10^{8}</annotation></semantics></math></span> מטר לשנייה<br>- ידוע ששיעור ההגעה (arrival rate) הנוכחי הוא 300,000 חבילות לשעה<br>- ניתן להניח שאין עיכובים אחרים במערכת<br>מהי כמות החבילות המקסימלית שתיאורטית שניתן להעביר בקישור זה יוכל כדי לשמור על Traffic Intensity של ל-0.8? המספרים בתשובה מעוגלים:",
   "explanationHtml": "מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>⋅</mo><mi>L</mi></mrow><mi>R</mi></mfrac></mrow><annotation encoding=\"application/x-tex\">\\rho=\\frac{a\\cdot L}{R}</annotation></semantics></math></span> מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mo>⋅</mo><mi>R</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mrow><mn>0.8</mn><mo>⋅</mo><mn>20</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><mn>12000</mn></mfrac><mo>≈</mo><mn>1333</mn></mrow><annotation encoding=\"application/x-tex\">a=\\frac{\\rho\\cdot R}{L}=\\frac{0.8\\cdot 20\\cdot10^{6}}{12000}\\approx 1333</annotation></semantics></math></span> חבילות לשנייה (שיעור ההגעה הנוכחי אינו משפיע על התשובה).<br>בדקה זה כ-80,000 חבילות, ולכן שתי האפשרויות \"לדקה\" רחוקות מהערך. 1,666 מתקבל אם מחשבים עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\rho=1</annotation></semantics></math></span> ו-1,500 ביט.",
   "dedupKey": "427f4b991b491f4a"
  },
  {
   "num": 7,
   "topic": "dns_dhcp",
   "question": "כאשר הקצאת הכתובות ברשת נעשית באופן דינאמי, מתי ישלח לקוח הודעת 'DHCP Discover'?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כאשר כתובת ה-IP שלו פגה והלקוח מעוניין בחידושה.",
     "html": "כאשר כתובת ה-IP שלו פגה והלקוח מעוניין בחידושה."
    },
    {
     "id": "b",
     "type": "text",
     "value": "כאשר הלקוח מתחבר לרשת בפעם הראשונה או לאחר אתחול המכשיר",
     "html": "כאשר הלקוח מתחבר לרשת בפעם הראשונה או לאחר אתחול המכשיר"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כאשר הלקוח מעוניין לגלות מכשירים אחרים שמחוברים לרשת המקומית",
     "html": "כאשר הלקוח מעוניין לגלות מכשירים אחרים שמחוברים לרשת המקומית"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כאשר הלקוח מעוניין לקבל את כתובת שרת ה-DNS המקומי ואת ה-Default Gateway",
     "html": "כאשר הלקוח מעוניין לקבל את כתובת שרת ה-DNS המקומי ואת ה-Default Gateway"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Discover הוא השלב הראשון בקבלת כתובת: לקוח ללא כתובת (חיבור ראשון, או אחרי אתחול) משדר אותו כדי למצוא שרתי DHCP.\nא: חידוש של כתובת קיימת נעשה בבקשת Request ישירה לשרת. ג: DHCP אינו פרוטוקול גילוי מכשירים. ד: DNS ו-Gateway מגיעים בהודעת Offer/ACK, לא כסיבה לשליחת Discover.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q7",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "כאשר הקצאת הכתובות ברשת נעשית באופן דינאמי, מתי ישלח לקוח הודעת 'DHCP Discover'?",
   "explanationHtml": "Discover הוא השלב הראשון בקבלת כתובת: לקוח ללא כתובת (חיבור ראשון, או אחרי אתחול) משדר אותו כדי למצוא שרתי DHCP.<br>א: חידוש של כתובת קיימת נעשה בבקשת Request ישירה לשרת. ג: DHCP אינו פרוטוקול גילוי מכשירים. ד: DNS ו-Gateway מגיעים בהודעת Offer/ACK, לא כסיבה לשליחת Discover.",
   "dedupKey": "8f2bcbee3154b2e7"
  },
  {
   "num": 8,
   "topic": "http",
   "question": "כמנהלי המוצר של משחק רשת פופולארי, עם משתמשים רבים ברחבי העולם, נוכחתם כי חווית המשתמשים אינה מספקת - ישנם עיכובים גבוהים במיוחד עבור משתמשים במיקומים גיאוגרפיים מרוחקים. איזה שינוי צפוי לספק את ההשפעה המשמעותית ביותר על זמני התגובה של האפליקציה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שימוש בפרוטוקול QUIC הן בשרת והן באפליקציית הלקוח.",
     "html": "שימוש בפרוטוקול QUIC הן בשרת והן באפליקציית הלקוח."
    },
    {
     "id": "b",
     "type": "text",
     "value": "ויתור על החיבור המוצפן בין השרת ללקוח",
     "html": "ויתור על החיבור המוצפן בין השרת ללקוח"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הפעלת HTTP Persistent Connections בצד השרת ובדפדפני המשתמשים.",
     "html": "הפעלת HTTP Persistent Connections בצד השרת ובדפדפני המשתמשים."
    },
    {
     "id": "d",
     "type": "text",
     "value": "תשובות א׳-ג׳ אינן נכונות",
     "html": "תשובות א׳-ג׳ אינן נכונות"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשהמרחק גדול, כל RTT יקר. QUIC מקצר את הקמת החיבור (לחיצת יד משולבת של הובלה והצפנה ב-RTT אחד או אפילו 0-RTT בחיבור חוזר) ומונע חסימת head-of-line, ולכן הוא מקטין את זמן התגובה בצורה הניכרת ביותר.\nדוגמה (RTT של 150ms בין משתמש רחוק לשרת): TCP יחד עם TLS 1.3 דורשים 2 סבבים לפני שליחת הנתונים הראשונים, כלומר $2\\cdot150=300\\,\\text{ms}$; QUIC מאחד את שניהם בסבב אחד, $150\\,\\text{ms}$, ובחיבור חוזר (0-RTT) אפילו $0\\,\\text{ms}$ של הקמה. החיסכון גדל ככל שה-RTT גדול, וזה בדיוק המצב של משתמשים רחוקים.\nב: ויתור על הצפנה חוסך אמנם סבב אחד של לחיצת יד TLS, אך פוגע באבטחה ואינו חוסך את הקמת ה-TCP; QUIC חוסך סבב דומה בלי לוותר על ההצפנה, ובנוסף מאפשר 0-RTT ונמנע מחסימת head-of-line של TCP. ג: חיבורים persistent הם ממילא ברירת המחדל ב-HTTP/1.1, והם חוסכים רק הקמה חוזרת של חיבור קיים, ולא את העיכוב הגיאוגרפי.\nהערה: הפתרון המקובל לעיכוב גיאוגרפי הוא קירוב השרתים למשתמשים (CDN או שרתי קצה), והוא אינו מופיע בין האפשרויות; לכן ד (\"אינן נכונות\") אינה תשובה טובה, ו-א היא האפשרות היחידה שמקצרת את זמן התגובה למשתמשים רחוקים.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q8",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "lockOrder": true,
   "questionHtml": "כמנהלי המוצר של משחק רשת פופולארי, עם משתמשים רבים ברחבי העולם, נוכחתם כי חווית המשתמשים אינה מספקת - ישנם עיכובים גבוהים במיוחד עבור משתמשים במיקומים גיאוגרפיים מרוחקים. איזה שינוי צפוי לספק את ההשפעה המשמעותית ביותר על זמני התגובה של האפליקציה?",
   "explanationHtml": "כשהמרחק גדול, כל RTT יקר. QUIC מקצר את הקמת החיבור (לחיצת יד משולבת של הובלה והצפנה ב-RTT אחד או אפילו 0-RTT בחיבור חוזר) ומונע חסימת head-of-line, ולכן הוא מקטין את זמן התגובה בצורה הניכרת ביותר.<br>דוגמה (RTT של 150ms בין משתמש רחוק לשרת): TCP יחד עם TLS 1.3 דורשים 2 סבבים לפני שליחת הנתונים הראשונים, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mn>150</mn><mo>=</mo><mn>300</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">2\\cdot150=300\\,\\text{ms}</annotation></semantics></math></span>; QUIC מאחד את שניהם בסבב אחד, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>150</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">150\\,\\text{ms}</annotation></semantics></math></span>, ובחיבור חוזר (0-RTT) אפילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">0\\,\\text{ms}</annotation></semantics></math></span> של הקמה. החיסכון גדל ככל שה-RTT גדול, וזה בדיוק המצב של משתמשים רחוקים.<br>ב: ויתור על הצפנה חוסך אמנם סבב אחד של לחיצת יד TLS, אך פוגע באבטחה ואינו חוסך את הקמת ה-TCP; QUIC חוסך סבב דומה בלי לוותר על ההצפנה, ובנוסף מאפשר 0-RTT ונמנע מחסימת head-of-line של TCP. ג: חיבורים persistent הם ממילא ברירת המחדל ב-HTTP/1.1, והם חוסכים רק הקמה חוזרת של חיבור קיים, ולא את העיכוב הגיאוגרפי.<br>הערה: הפתרון המקובל לעיכוב גיאוגרפי הוא קירוב השרתים למשתמשים (CDN או שרתי קצה), והוא אינו מופיע בין האפשרויות; לכן ד (\"אינן נכונות\") אינה תשובה טובה, ו-א היא האפשרות היחידה שמקצרת את זמן התגובה למשתמשים רחוקים.",
   "dedupKey": "4a2b5735dc22275a"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "מה יקרה אם ערכי ה-TTL ברשומות ה-DNS במטמון (cache) של דפדפנים יהיה נמוך מדי?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "העומס על שרתי ה-DNS יופחת משמעותית",
     "html": "העומס על שרתי ה-DNS יופחת משמעותית"
    },
    {
     "id": "b",
     "type": "text",
     "value": "זמן הטעינה של דפי אינטרנט יעלה משמעותית",
     "html": "זמן הטעינה של דפי אינטרנט יעלה משמעותית"
    },
    {
     "id": "c",
     "type": "text",
     "value": "האבטחה והפרטיות של המשתמשים תשתפר משמעותית",
     "html": "האבטחה והפרטיות של המשתמשים תשתפר משמעותית"
    },
    {
     "id": "d",
     "type": "text",
     "value": "תשובות א׳-ג׳ אינן נכונות",
     "html": "תשובות א׳-ג׳ אינן נכונות"
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "TTL נמוך גורם לרשומות לפוג מהר, כך שהדפדפן צריך לבצע שאילתות DNS חוזרות לפני כל גישה לאתר - כל שאילתה מוסיפה השהיה, וזמן הטעינה עולה.\nא: ההפך - העומס על שרתי ה-DNS גדל. ג: אין קשר ישיר לאבטחה. ד: שגויה כי ב נכונה.\nהערה: המילה \"משמעותית\" מוגזמת מעט. כשהרשומה נמצאת במטמון של ה-Resolver המקומי, התוספת היא כ-RTT אחד אל השרת המקומי (כמה מילישניות), ורק כשגם שם היא פגה נדרשת שרשרת שאילתות מלאה. ב היא עדיין התוצאה הנכונה היחידה בכיוון הנכון: TTL נמוך מוסיף שאילתת DNS לפני הגישה לאתר ולכן מאריך את הטעינה, בעוד שא ו-ג הפוכות או לא קשורות.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q9",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "lockOrder": true,
   "questionHtml": "מה יקרה אם ערכי ה-TTL ברשומות ה-DNS במטמון (cache) של דפדפנים יהיה נמוך מדי?",
   "explanationHtml": "TTL נמוך גורם לרשומות לפוג מהר, כך שהדפדפן צריך לבצע שאילתות DNS חוזרות לפני כל גישה לאתר - כל שאילתה מוסיפה השהיה, וזמן הטעינה עולה.<br>א: ההפך - העומס על שרתי ה-DNS גדל. ג: אין קשר ישיר לאבטחה. ד: שגויה כי ב נכונה.<br>הערה: המילה \"משמעותית\" מוגזמת מעט. כשהרשומה נמצאת במטמון של ה-Resolver המקומי, התוספת היא כ-RTT אחד אל השרת המקומי (כמה מילישניות), ורק כשגם שם היא פגה נדרשת שרשרת שאילתות מלאה. ב היא עדיין התוצאה הנכונה היחידה בכיוון הנכון: TTL נמוך מוסיף שאילתת DNS לפני הגישה לאתר ולכן מאריך את הטעינה, בעוד שא ו-ג הפוכות או לא קשורות.",
   "dedupKey": "89463a5261bf587b"
  },
  {
   "num": 10,
   "topic": "intro_layers",
   "question": "מהו ההבדל המשמעותי בין שכבת הרשת (Network Layer) לשכבת התעבורה (Transport Layer) במודל ה-OSI:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שכבת הרשת לניתוב הודעות ללא שגיאות בין שתי תחנות סמוכות בעוד ששכבת התעבורה אחראית על אמינות העברת הנתונים.",
     "html": "שכבת הרשת לניתוב הודעות ללא שגיאות בין שתי תחנות סמוכות בעוד ששכבת התעבורה אחראית על אמינות העברת הנתונים."
    },
    {
     "id": "b",
     "type": "text",
     "value": "שכבת הרשת אחראית לניתוב החבילות אל היעד הנכון בסדר הנכון, בעוד ששכבת התעבורה אחראית להעביר את המידע בין כל שני נתבים סמוכים.",
     "html": "שכבת הרשת אחראית לניתוב החבילות אל היעד הנכון בסדר הנכון, בעוד ששכבת התעבורה אחראית להעביר את המידע בין כל שני נתבים סמוכים."
    },
    {
     "id": "c",
     "type": "text",
     "value": "שכבת הרשת פועלת רק בין שני מחשבים המחוברים זה לזה ישירות, בעוד ששכבת התובלה מאפשרת תקשורת בין תהליכים (Processes) במחשבים שונים.",
     "html": "שכבת הרשת פועלת רק בין שני מחשבים המחוברים זה לזה ישירות, בעוד ששכבת התובלה מאפשרת תקשורת בין תהליכים (Processes) במחשבים שונים."
    },
    {
     "id": "d",
     "type": "text",
     "value": "שכבת התובלה יוצרת חיבור בין תהליכים בעוד ששכבת הרשת אחראית לניתוב הודעות ללא שגיאות בין תחנות מרוחקות.",
     "html": "שכבת התובלה יוצרת חיבור בין תהליכים בעוד ששכבת הרשת אחראית לניתוב הודעות ללא שגיאות בין תחנות מרוחקות."
    }
   ],
   "correctId": "d",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שכבת התעבורה מספקת תקשורת בין תהליכים (פורטים) בתחנות הקצה, ושכבת הרשת מנתבת הודעות בין תחנות מרוחקות על פני רשתות.\nא: ניתוב אינו \"בין שתי תחנות סמוכות\" - זו שכבת הקו. ב: הגדרת שכבת התעבורה שגויה - היא מקצה לקצה, לא בין נתבים סמוכים. ג: שכבת הרשת פועלת בין מחשבים מרוחקים, לא רק מחוברים ישירות.",
   "note": "No answer table in the source; solved independently - agrees with the option printed in bold.",
   "id": "24A-B-Q10",
   "examCode": "24A-B",
   "examLabel": "2024 סמסטר א מועד ב",
   "year": 2024,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "מהו ההבדל המשמעותי בין שכבת הרשת (Network Layer) לשכבת התעבורה (Transport Layer) במודל ה-OSI:",
   "explanationHtml": "שכבת התעבורה מספקת תקשורת בין תהליכים (פורטים) בתחנות הקצה, ושכבת הרשת מנתבת הודעות בין תחנות מרוחקות על פני רשתות.<br>א: ניתוב אינו \"בין שתי תחנות סמוכות\" - זו שכבת הקו. ב: הגדרת שכבת התעבורה שגויה - היא מקצה לקצה, לא בין נתבים סמוכים. ג: שכבת הרשת פועלת בין מחשבים מרוחקים, לא רק מחוברים ישירות.",
   "dedupKey": "58f49c42bf8b2dcd"
  },
  {
   "num": 1,
   "topic": "http",
   "question": "מה הפונקציה העיקרית של Cookies ב-HTTP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אחסון העדפות המשתמש עבור האתר.",
     "html": "אחסון העדפות המשתמש עבור האתר."
    },
    {
     "id": "b",
     "type": "text",
     "value": "מעקב אחר סשן (session) המשתמש בין בקשות.",
     "html": "מעקב אחר סשן (session) המשתמש בין בקשות."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הצפנת הנתונים במהלך ההעברה.",
     "html": "הצפנת הנתונים במהלך ההעברה."
    },
    {
     "id": "d",
     "type": "text",
     "value": "האצת מהירות הבקשות ב-HTTP.",
     "html": "האצת מהירות הבקשות ב-HTTP."
    }
   ],
   "correctId": "b",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "HTTP הוא חסר מצב, ו-Cookie נוצר כדי שהשרת יזהה שבקשות עוקבות מגיעות מאותו משתמש (סשן).\nא: אחסון העדפות הוא שימוש משני, לא הפונקציה העיקרית. ג: הצפנה היא תפקיד TLS. ד: Cookies אינם מאיצים בקשות.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q1",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מה הפונקציה העיקרית של Cookies ב-HTTP?",
   "explanationHtml": "HTTP הוא חסר מצב, ו-Cookie נוצר כדי שהשרת יזהה שבקשות עוקבות מגיעות מאותו משתמש (סשן).<br>א: אחסון העדפות הוא שימוש משני, לא הפונקציה העיקרית. ג: הצפנה היא תפקיד TLS. ד: Cookies אינם מאיצים בקשות.",
   "dedupKey": "34effb1da5fa0be7"
  },
  {
   "num": 2,
   "topic": "delays",
   "question": "בהינתן רשת עם שלושה קווים עם מהירות רוחב פס שונה (ראה תמונה), גודל החבילה 8000 bit ומהירות ההפצה $3\\cdot 10^{8}$ m/s, וללא השהיות (delay) אחרות בתחנות קצה או בנתבים, מהו זמן השהייה (delay) כולל של הרשת? יש לבחור את התשובה הקרובה ביותר.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "4 מילישניות",
     "html": "4 מילישניות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "4 שניות",
     "html": "4 שניות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "10 שניות",
     "html": "10 שניות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "10 מילישניות",
     "html": "10 מילישניות"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שלושה קישורים ברצף (Store-and-forward): $d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot10^{8}}$ לכל קישור.\nקישור 1: $\\frac{8000}{10^{7}}=0.8\\,ms$ ו-$\\frac{2000}{3\\cdot10^{8}}\\approx 6.7\\,\\mu s$. קישור 2: $0.8\\,ms$ ו-$\\frac{10^{6}}{3\\cdot10^{8}}\\approx 3.33\\,ms$. קישור 3: $\\frac{8000}{10^{9}}=8\\,\\mu s$ ו-$6.7\\,\\mu s$.\nסך הכול $\\approx 4.95\\,ms$, והתשובה הקרובה ביותר היא 4 מילישניות. שניות (4 או 10) רחוקות בשלושה סדרי גודל, ו-10 ms רחוק פי חמישה.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations). Propagation speed printed as '3*108' (superscript); 3*10^8 m/s used. Total 4.95 ms, 'closest answer' is 4 ms.",
   "image": "images/exams/25A-A-Q2.png",
   "id": "25A-A-Q2",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "בהינתן רשת עם שלושה קווים עם מהירות רוחב פס שונה (ראה תמונה), גודל החבילה 8000 bit ומהירות ההפצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">3\\cdot 10^{8}</annotation></semantics></math></span> m/s, וללא השהיות (delay) אחרות בתחנות קצה או בנתבים, מהו זמן השהייה (delay) כולל של הרשת? יש לבחור את התשובה הקרובה ביותר.",
   "explanationHtml": "שלושה קישורים ברצף (Store-and-forward): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mfrac><mi>L</mi><mi>R</mi></mfrac><mo>+</mo><mfrac><mtext>length</mtext><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot10^{8}}</annotation></semantics></math></span> לכל קישור.<br>קישור 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>8000</mn><msup><mn>10</mn><mn>7</mn></msup></mfrac><mo>=</mo><mn>0.8</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{8000}{10^{7}}=0.8\\,ms</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>2000</mn><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>6.7</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{2000}{3\\cdot10^{8}}\\approx 6.7\\,\\mu s</annotation></semantics></math></span>. קישור 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.8</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">0.8\\,ms</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><msup><mn>10</mn><mn>6</mn></msup><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>3.33</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{10^{6}}{3\\cdot10^{8}}\\approx 3.33\\,ms</annotation></semantics></math></span>. קישור 3: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>8000</mn><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>=</mo><mn>8</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{8000}{10^{9}}=8\\,\\mu s</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.7</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">6.7\\,\\mu s</annotation></semantics></math></span>.<br>סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>≈</mo><mn>4.95</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\approx 4.95\\,ms</annotation></semantics></math></span>, והתשובה הקרובה ביותר היא 4 מילישניות. שניות (4 או 10) רחוקות בשלושה סדרי גודל, ו-10 ms רחוק פי חמישה.",
   "dedupKey": "893c99d96e4adebb"
  },
  {
   "num": 3,
   "topic": "link_layer",
   "question": "בצד המקבל קיבלנו בלוק של הנתונים כאשר העמודה והשורה האחרונות נועדות לבדיקת הנכונות בשיטת two-dimensional parity\n```\n10010100 11001010 1\n10001000 00000000 1\n11011011 11101001 1\n10010000 11101001 1\n00011100 01101010 1\n01011011 10100000 1\n```\nמהי השורה והעמודה שבהם הביטים התהפכו",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שורה 2, עמודה 4",
     "html": "שורה 2, עמודה 4"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שורה 1, עמודה 3",
     "html": "שורה 1, עמודה 3"
    },
    {
     "id": "c",
     "type": "text",
     "value": "שורה 3, עמודה 5",
     "html": "שורה 3, עמודה 5"
    },
    {
     "id": "d",
     "type": "text",
     "value": "שורה 4, עמודה 2",
     "html": "שורה 4, עמודה 2"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בודקים זוגיות (Even parity) לכל שורה (17 הביטים, האחרון הוא ביט הבדיקה) ולכל עמודה (השורה האחרונה היא שורת הבדיקה).\nרק שורה 2 מכילה מספר אי-זוגי של אחדות (3), ורק עמודה 4 (הספירה משמאל, כפי שהביטים מודפסים) מכילה מספר אי-זוגי של אחדות.\nהחיתוך הוא שורה 2, עמודה 4: הביט שהתהפך.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations). Rows read as printed left to right, columns counted from the left, even parity (the only reading with exactly one bad row and one bad column).",
   "id": "25A-A-Q3",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "בצד המקבל קיבלנו בלוק של הנתונים כאשר העמודה והשורה האחרונות נועדות לבדיקת הנכונות בשיטת two-dimensional parity<pre class=\"code-block\" dir=\"ltr\"><code>10010100 11001010 1\n10001000 00000000 1\n11011011 11101001 1\n10010000 11101001 1\n00011100 01101010 1\n01011011 10100000 1</code></pre>מהי השורה והעמודה שבהם הביטים התהפכו",
   "explanationHtml": "בודקים זוגיות (Even parity) לכל שורה (17 הביטים, האחרון הוא ביט הבדיקה) ולכל עמודה (השורה האחרונה היא שורת הבדיקה).<br>רק שורה 2 מכילה מספר אי-זוגי של אחדות (3), ורק עמודה 4 (הספירה משמאל, כפי שהביטים מודפסים) מכילה מספר אי-זוגי של אחדות.<br>החיתוך הוא שורה 2, עמודה 4: הביט שהתהפך.",
   "dedupKey": "e4d8e5dc9ceec8f1"
  },
  {
   "num": 4,
   "topic": "nat_ipv6_icmp",
   "question": "איזה מבין הבאים מהווה חסרון פוטנציאלי של NAT?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הוא עלול לגרום לבעיות ביישומים שדורשים נראות של כתובת IP מקצה לקצה.",
     "html": "הוא עלול לגרום לבעיות ביישומים שדורשים נראות של כתובת IP מקצה לקצה."
    },
    {
     "id": "b",
     "type": "text",
     "value": "הוא מגדיל את מספר כתובות ה-IP הציבוריות הנדרשות.",
     "html": "הוא מגדיל את מספר כתובות ה-IP הציבוריות הנדרשות."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הוא מבטל את הצורך בחומת אש ברשת.",
     "html": "הוא מבטל את הצורך בחומת אש ברשת."
    },
    {
     "id": "d",
     "type": "text",
     "value": "הוא מונע גישה לאינטרנט מהתקנים ברשת הפרטית.",
     "html": "הוא מונע גישה לאינטרנט מהתקנים ברשת הפרטית."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "NAT משנה כתובות ופורטים בכותרת, ולכן יישומים שתלויים בכתובת האמיתית של הקצה (שרתים פנימיים, חלק מפרוטוקולי VoIP ו-P2P) נפגעים.\nב: ההפך, NAT חוסך כתובות ציבוריות. ג: NAT אינו מחליף חומת אש. ד: NAT דווקא מאפשר גישה.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q4",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "איזה מבין הבאים מהווה חסרון פוטנציאלי של NAT?",
   "explanationHtml": "NAT משנה כתובות ופורטים בכותרת, ולכן יישומים שתלויים בכתובת האמיתית של הקצה (שרתים פנימיים, חלק מפרוטוקולי VoIP ו-P2P) נפגעים.<br>ב: ההפך, NAT חוסך כתובות ציבוריות. ג: NAT אינו מחליף חומת אש. ד: NAT דווקא מאפשר גישה.",
   "dedupKey": "e034752b617e7a70"
  },
  {
   "num": 5,
   "topic": "routing",
   "question": "בהינתן גרף רשת וטבלת המרחקים מקודקוד V:\nמהם המשקלים של קשת X ו-קשת Y?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "X=4, Y=1",
     "html": "X=4, Y=1"
    },
    {
     "id": "b",
     "type": "text",
     "value": "X – אי אפשר לקבוע, Y=1",
     "html": "X – אי אפשר לקבוע, Y=1"
    },
    {
     "id": "c",
     "type": "text",
     "value": "X=6, Y=2",
     "html": "X=6, Y=2"
    },
    {
     "id": "d",
     "type": "text",
     "value": "X = 1, Y – אי אפשר לקבוע",
     "html": "X = 1, Y – אי אפשר לקבוע"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הטבלה היא פלט של Dijkstra מ-$v$: $D(u)=4$ דרך $v$; $D(w)=5$ עם קודם $u$, כלומר $4+Y=5$ ולכן $Y=1$; $D(y)=9$ עם קודם $w$, כלומר $5+X=9$ ולכן $X=4$.\nבדיקה: מ-$x$ ל-$y$ $5+5=10>9$ ומ-$z$ $6+4=10>9$, ולכן $w$ הוא אכן הקודם של $y$. שני המשקלים נקבעים באופן יחיד.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations). Table header prints 'from X' but the first row is v (distance 0) and the stem says V; read as distances from v.",
   "image": "images/exams/25A-A-Q5.png",
   "id": "25A-A-Q5",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ניתוב: Dijkstra, Distance Vector ו-BGP",
   "questionHtml": "בהינתן גרף רשת וטבלת המרחקים מקודקוד V:<br>מהם המשקלים של קשת X ו-קשת Y?",
   "explanationHtml": "הטבלה היא פלט של Dijkstra מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>u</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">D(u)=4</annotation></semantics></math></span> דרך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>v</mi></mrow><annotation encoding=\"application/x-tex\">v</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>w</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">D(w)=5</annotation></semantics></math></span> עם קודם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>u</mi></mrow><annotation encoding=\"application/x-tex\">u</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mi>Y</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">4+Y=5</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>Y</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">Y=1</annotation></semantics></math></span>; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>y</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">D(y)=9</annotation></semantics></math></span> עם קודם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>w</mi></mrow><annotation encoding=\"application/x-tex\">w</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mi>X</mi><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">5+X=9</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">X=4</annotation></semantics></math></span>.<br>בדיקה: מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi></mrow><annotation encoding=\"application/x-tex\">x</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>10</mn><mo>&gt;</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">5+5=10&gt;9</annotation></semantics></math></span> ומ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>z</mi></mrow><annotation encoding=\"application/x-tex\">z</annotation></semantics></math></span> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn><mo>+</mo><mn>4</mn><mo>=</mo><mn>10</mn><mo>&gt;</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">6+4=10&gt;9</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>w</mi></mrow><annotation encoding=\"application/x-tex\">w</annotation></semantics></math></span> הוא אכן הקודם של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>y</mi></mrow><annotation encoding=\"application/x-tex\">y</annotation></semantics></math></span>. שני המשקלים נקבעים באופן יחיד.",
   "dedupKey": "ae3941a2106875b1"
  },
  {
   "num": 6,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה עם כתובת היעד 12.100.60.37 לפי טבלת הניתוב הבאה?\n`A: 12.100.50.0/20`\n`B: 12.100.64.0/20`\n`C: 12.0.0.0/8`\n`D: 12.100.0.0/16`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "b",
     "type": "text",
     "value": "B",
     "html": "B"
    },
    {
     "id": "c",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "d",
     "type": "text",
     "value": "D",
     "html": "D"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match. A: $12.100.50.0/20$ מכסה $12.100.48.0-12.100.63.255$ - כוללת את 60. B: $12.100.64.0/20$ מכסה $64-79$ - לא. C ו-D מכילות את הכתובת אבל המסכות קצרות יותר ($/8$ ו-$/16$).\nלכן A, C, D מתאימות, והארוכה ביותר היא A ($/20$).",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q6",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה עם כתובת היעד 12.100.60.37 לפי טבלת הניתוב הבאה?<br><code class=\"tok\" dir=\"ltr\">A: 12.100.50.0/20</code><br><code class=\"tok\" dir=\"ltr\">B: 12.100.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 12.0.0.0/8</code><br><code class=\"tok\" dir=\"ltr\">D: 12.100.0.0/16</code>",
   "explanationHtml": "Longest Prefix Match. A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.100.50.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">12.100.50.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.100.48.0</mn><mo>−</mo><mn>12.100.63.255</mn></mrow><annotation encoding=\"application/x-tex\">12.100.48.0-12.100.63.255</annotation></semantics></math></span> - כוללת את 60. B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.100.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">12.100.64.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mo>−</mo><mn>79</mn></mrow><annotation encoding=\"application/x-tex\">64-79</annotation></semantics></math></span> - לא. C ו-D מכילות את הכתובת אבל המסכות קצרות יותר (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">/8</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/16</annotation></semantics></math></span>).<br>לכן A, C, D מתאימות, והארוכה ביותר היא A (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">/20</annotation></semantics></math></span>).",
   "dedupKey": "a7c7ba2e9302ba8c"
  },
  {
   "num": 7,
   "topic": "physical_misc",
   "question": "מהו ההבדל העיקרי בין חיבור מסוג point-to-point link לבין חיבור מסוג broadcast link?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ב-broadcast link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. point-to-point link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד.",
     "html": "ב-broadcast link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. point-to-point link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד."
    },
    {
     "id": "b",
     "type": "text",
     "value": "ב-point-to-point link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. broadcast link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד.",
     "html": "ב-point-to-point link התווך משותף לכל יחידות הקצה. לכן מידע שנשלח מאחת המכונות מגיע לכל מכונות האחרות ברשת. מכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע. broadcast link מחבר בין שתי נקודות קצה והמידע נשלח בין שתי נקודות אלה בלבד."
    },
    {
     "id": "c",
     "type": "text",
     "value": "ב-point-to-point link התווך אינו משותף לכל יחידות הקצה ומשתמשים ב-broadcast link כדי לחבר בין שתי נקודות קצה על ידי כך שמכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע.",
     "html": "ב-point-to-point link התווך אינו משותף לכל יחידות הקצה ומשתמשים ב-broadcast link כדי לחבר בין שתי נקודות קצה על ידי כך שמכונה, שהמידע מיועד לה, מזהה זאת באמצעות מזהה ומקבלת את המידע."
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף אחת מהתשובות אינה נכונה",
     "html": "אף אחת מהתשובות אינה נכונה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Broadcast link: תווך משותף, כל התחנות שומעות, והיעד מזהה את הכתובת שלו. Point-to-point: קו ייעודי בין שתי נקודות בלבד.\nב: ההגדרות הפוכות. ג: מבלבל בין שני הסוגים. ד: שגויה כי א נכונה.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q7",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבה פיזית ומיתוג",
   "questionHtml": "מהו ההבדל העיקרי בין חיבור מסוג point-to-point link לבין חיבור מסוג broadcast link?",
   "explanationHtml": "Broadcast link: תווך משותף, כל התחנות שומעות, והיעד מזהה את הכתובת שלו. Point-to-point: קו ייעודי בין שתי נקודות בלבד.<br>ב: ההגדרות הפוכות. ג: מבלבל בין שני הסוגים. ד: שגויה כי א נכונה.",
   "dedupKey": "b6739586768d64af"
  },
  {
   "num": 8,
   "topic": "physical_misc",
   "question": "מדוע חברה כמו גוגל מתחזקת רשת מקבילה לרשת של ספקי ISP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לחברה שהיא מקור להרבה מאד מידע יותר זול לבנות רשת נפרדת לשימושה. כך היא תשתמש פחות בקווים של ISPs אחרים, עליהם היא צריכה לשלם, ותחסוך עלויות.",
     "html": "לחברה שהיא מקור להרבה מאד מידע יותר זול לבנות רשת נפרדת לשימושה. כך היא תשתמש פחות בקווים של ISPs אחרים, עליהם היא צריכה לשלם, ותחסוך עלויות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "כדי להגדיל את התלות בספקי אינטרנט חיצוניים ולשפר את מהירות החיבור לרשת.",
     "html": "כדי להגדיל את התלות בספקי אינטרנט חיצוניים ולשפר את מהירות החיבור לרשת."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הקמת רשת פרטית יקרה יותר, אך משפרת את האבטחה של המידע של גוגל.",
     "html": "הקמת רשת פרטית יקרה יותר, אך משפרת את האבטחה של המידע של גוגל."
    },
    {
     "id": "d",
     "type": "text",
     "value": "כדי למנוע לחלוטין את הצורך בחיבור לרשת האינטרנט הציבורית דבר התורם להשפעתה של גוגל על מרחב האינטרנט",
     "html": "כדי למנוע לחלוטין את הצורך בחיבור לרשת האינטרנט הציבורית דבר התורם להשפעתה של גוגל על מרחב האינטרנט"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "חברת תוכן ענקית מעבירה כמויות מידע עצומות, ולכן משתלם לה להקים רשת משלה ולהקטין את התשלום ל-ISPs (וגם לקרב תוכן למשתמשים).\nב: המטרה היא להקטין תלות, לא להגדיל. ג: הנימוק העיקרי הוא עלות, והטענה שהרשת הפרטית יקרה יותר אינה מסבירה את המהלך. ד: גוגל עדיין מתחברת לאינטרנט הציבורי.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q8",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבה פיזית ומיתוג",
   "questionHtml": "מדוע חברה כמו גוגל מתחזקת רשת מקבילה לרשת של ספקי ISP?",
   "explanationHtml": "חברת תוכן ענקית מעבירה כמויות מידע עצומות, ולכן משתלם לה להקים רשת משלה ולהקטין את התשלום ל-ISPs (וגם לקרב תוכן למשתמשים).<br>ב: המטרה היא להקטין תלות, לא להגדיל. ג: הנימוק העיקרי הוא עלות, והטענה שהרשת הפרטית יקרה יותר אינה מסבירה את המהלך. ד: גוגל עדיין מתחברת לאינטרנט הציבורי.",
   "dedupKey": "05bc3374257128bb"
  },
  {
   "num": 9,
   "topic": "nat_ipv6_icmp",
   "question": "מהו הייעוד העיקרי של NAT ברשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לחסוך בכתובות IP ציבוריות באמצעות תרגום כתובות IP פרטיות לכתובות ציבוריות.",
     "html": "לחסוך בכתובות IP ציבוריות באמצעות תרגום כתובות IP פרטיות לכתובות ציבוריות."
    },
    {
     "id": "b",
     "type": "text",
     "value": "לספק הצפנה לנתונים העוברים באינטרנט.",
     "html": "לספק הצפנה לנתונים העוברים באינטרנט."
    },
    {
     "id": "c",
     "type": "text",
     "value": "לחסום גישה לא מורשית לרשת.",
     "html": "לחסום גישה לא מורשית לרשת."
    },
    {
     "id": "d",
     "type": "text",
     "value": "לשייך כתובות IP סטטיות להתקנים ברשת.",
     "html": "לשייך כתובות IP סטטיות להתקנים ברשת."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "NAT מאפשר להתקנים רבים עם כתובות פרטיות לחלוק כתובת ציבורית אחת, וכך חוסך כתובות IPv4. הצפנה ואבטחה אינן ייעודו, ושיוך כתובות סטטיות אינו תפקיד של NAT.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q9",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "מהו הייעוד העיקרי של NAT ברשת?",
   "explanationHtml": "NAT מאפשר להתקנים רבים עם כתובות פרטיות לחלוק כתובת ציבורית אחת, וכך חוסך כתובות IPv4. הצפנה ואבטחה אינן ייעודו, ושיוך כתובות סטטיות אינו תפקיד של NAT.",
   "dedupKey": "cef8cc4be3c9a46f"
  },
  {
   "num": 10,
   "topic": "udp_checksum",
   "question": "לאיזה מבין היישומים הבאים UDP משמש לעיתים קרובות?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סטרימינג וידאו חי (Live Video Streaming)",
     "html": "סטרימינג וידאו חי (Live Video Streaming)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "העברת קבצים (File Transfer)",
     "html": "העברת קבצים (File Transfer)"
    },
    {
     "id": "c",
     "type": "text",
     "value": "גלישה באינטרנט (Web Browsing)",
     "html": "גלישה באינטרנט (Web Browsing)"
    },
    {
     "id": "d",
     "type": "text",
     "value": "דואר אלקטרוני (Email)",
     "html": "דואר אלקטרוני (Email)"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "סטרימינג חי רגיש לעיכוב ויכול לסבול אובדן קל, ולכן UDP מתאים. העברת קבצים, גלישה (HTTP) ודואר (SMTP) דורשים אמינות ולכן משתמשים ב-TCP.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q10",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "UDP ו-checksum",
   "questionHtml": "לאיזה מבין היישומים הבאים UDP משמש לעיתים קרובות?",
   "explanationHtml": "סטרימינג חי רגיש לעיכוב ויכול לסבול אובדן קל, ולכן UDP מתאים. העברת קבצים, גלישה (HTTP) ודואר (SMTP) דורשים אמינות ולכן משתמשים ב-TCP.",
   "dedupKey": "db338e77a1ac82c7"
  },
  {
   "num": 11,
   "topic": "http",
   "question": "מהי המשמעות של הכותרת Cache-Control: max-age=3600 (header) בהודעת HTTP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ניתן לאחסן את התגובה במטמון למשך שעה לפני שתוקפה יפוג.",
     "html": "ניתן לאחסן את התגובה במטמון למשך שעה לפני שתוקפה יפוג."
    },
    {
     "id": "b",
     "type": "text",
     "value": "התגובה תאופס מידית מהמטמון.",
     "html": "התגובה תאופס מידית מהמטמון."
    },
    {
     "id": "c",
     "type": "text",
     "value": "התגובה תישמר במטמון ללא הגבלת זמן.",
     "html": "התגובה תישמר במטמון ללא הגבלת זמן."
    },
    {
     "id": "d",
     "type": "text",
     "value": "התגובה תישמר למשך 3600 אלפיות שנייה (מילישניות).",
     "html": "התגובה תישמר למשך 3600 אלפיות שנייה (מילישניות)."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "$max\\text{-}age$ נמדד בשניות: $3600\\,s=1$ שעה. ב ו-ג מנוגדות להגדרה, ו-ד טועה ביחידות (3600 ms הוא 3.6 שניות).",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q11",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי המשמעות של הכותרת Cache-Control: max-age=3600 (header) בהודעת HTTP?",
   "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>m</mi><mi>a</mi><mi>x</mi><mtext>-</mtext><mi>a</mi><mi>g</mi><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">max\\text{-}age</annotation></semantics></math></span> נמדד בשניות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3600</mn><mtext> </mtext><mi>s</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">3600\\,s=1</annotation></semantics></math></span> שעה. ב ו-ג מנוגדות להגדרה, ו-ד טועה ביחידות (3600 ms הוא 3.6 שניות).",
   "dedupKey": "e0a8b3e31a791e6e"
  },
  {
   "num": 12,
   "topic": "sockets_email",
   "question": "מהו התהליך בו נשלחת הודעת דואר אלקטרוני מ-User Agent של השולח ל-User Agent של הנמען?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ה-User Agent של השולח שולח את ההודעה לשרת הדואר שלו, אשר מקים חיבור TCP עם שרת הדואר של הנמען לפי פרוטוקול SMTP, ומעביר את ההודעה לתיבת הדואר של הנמען. הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו.",
     "html": "ה-User Agent של השולח שולח את ההודעה לשרת הדואר שלו, אשר מקים חיבור TCP עם שרת הדואר של הנמען לפי פרוטוקול SMTP, ומעביר את ההודעה לתיבת הדואר של הנמען. הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו."
    },
    {
     "id": "b",
     "type": "text",
     "value": "ההודעה נשלחת ישירות מ-User Agent של השולח ל-User Agent של הנמען ללא שימוש בשרתים מתווכים, הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו.",
     "html": "ההודעה נשלחת ישירות מ-User Agent של השולח ל-User Agent של הנמען ללא שימוש בשרתים מתווכים, הנמען יכול לקרוא את ההודעה כשהוא מפעיל את ה-User Agent שלו."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הודעת הדואר נשמרת במחשב השולח עד שהנמען מחפש באופן יזום את ההודעה, ואז היא מועברת אליו באמצעות פרוטוקול HTTP.",
     "html": "הודעת הדואר נשמרת במחשב השולח עד שהנמען מחפש באופן יזום את ההודעה, ואז היא מועברת אליו באמצעות פרוטוקול HTTP."
    },
    {
     "id": "d",
     "type": "text",
     "value": "הודעת הדואר נשלחת תחילה לשרת אינטרנט גלובלי mail server אשר מנתב אותה לכתובת הנמען באמצעות פרוטוקול HTTP לשרת ואז ל-SMTP עד ל-User Agent.",
     "html": "הודעת הדואר נשלחת תחילה לשרת אינטרנט גלובלי mail server אשר מנתב אותה לכתובת הנמען באמצעות פרוטוקול HTTP לשרת ואז ל-SMTP עד ל-User Agent."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "התהליך התקני: User Agent של השולח, שרת הדואר של השולח, שרת הדואר של הנמען (בין השרתים SMTP מעל TCP) ותיבת הנמען, ושם הנמען קורא. ב: אין שליחה ישירה בין User Agents. ג: ההודעה נדחפת, לא נמשכת, ואין זה HTTP בין השרתים. ד: אין שרת גלובלי כזה.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q12",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "Sockets ודואר: SMTP, POP ו-IMAP",
   "questionHtml": "מהו התהליך בו נשלחת הודעת דואר אלקטרוני מ-User Agent של השולח ל-User Agent של הנמען?",
   "explanationHtml": "התהליך התקני: User Agent של השולח, שרת הדואר של השולח, שרת הדואר של הנמען (בין השרתים SMTP מעל TCP) ותיבת הנמען, ושם הנמען קורא. ב: אין שליחה ישירה בין User Agents. ג: ההודעה נדחפת, לא נמשכת, ואין זה HTTP בין השרתים. ד: אין שרת גלובלי כזה.",
   "dedupKey": "f79892017459d6d4"
  },
  {
   "num": 13,
   "topic": "dns_dhcp",
   "question": "כיצד מתבצע תהליך חיפוש כתובת ה-IP של www.cnn.com כאשר אין מידע במטמון (cache) של שרתי ה-DNS?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הלקוח יוצר קשר עם שרת ה-DNS המקומי, אשר פונה ל-root DNS, שמפנה אותו ל-TLD DNS, שמפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח.",
     "html": "הלקוח יוצר קשר עם שרת ה-DNS המקומי, אשר פונה ל-root DNS, שמפנה אותו ל-TLD DNS, שמפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח."
    },
    {
     "id": "b",
     "type": "text",
     "value": "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם אין לו את המידע, הוא שולח את הבקשה לכל שרתי ה-DNS ברשת עד שהוא מקבל תשובה.",
     "html": "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם אין לו את המידע, הוא שולח את הבקשה לכל שרתי ה-DNS ברשת עד שהוא מקבל תשובה."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הלקוח מבצע חיפוש ב-local cache של מערכת ההפעלה, ואם אינו מוצא את הכתובת, הוא שולח בקשה ישירות לשרת ה-root DNS שיחזיר לו את הכתובת הנכונה.",
     "html": "הלקוח מבצע חיפוש ב-local cache של מערכת ההפעלה, ואם אינו מוצא את הכתובת, הוא שולח בקשה ישירות לשרת ה-root DNS שיחזיר לו את הכתובת הנכונה."
    },
    {
     "id": "d",
     "type": "text",
     "value": "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם המידע אינו זמין, מפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח.",
     "html": "הלקוח שולח בקשת DNS לשרת ה-DNS המקומי, ואם המידע אינו זמין, מפנה אותו ל-authoritative DNS, אשר מחזיר את כתובת ה-IP של www.cnn.com במורד המסלול חזרה ללקוח."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ללא מטמון, ה-Resolver המקומי עובר על ההיררכיה: root, ואז TLD (`.com`), ואז ה-authoritative של cnn.com, והתשובה חוזרת ללקוח.\nב: אין שליחה לכל השרתים. ג: ה-root אינו מחזיר כתובת סופית, רק הפניה. ד: מדלגת על root ו-TLD.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q13",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "כיצד מתבצע תהליך חיפוש כתובת ה-IP של www.cnn.com כאשר אין מידע במטמון (cache) של שרתי ה-DNS?",
   "explanationHtml": "ללא מטמון, ה-Resolver המקומי עובר על ההיררכיה: root, ואז TLD (<code class=\"tok\" dir=\"ltr\">.com</code>), ואז ה-authoritative של cnn.com, והתשובה חוזרת ללקוח.<br>ב: אין שליחה לכל השרתים. ג: ה-root אינו מחזיר כתובת סופית, רק הפניה. ד: מדלגת על root ו-TLD.",
   "dedupKey": "dd9bee36cbd53bd5"
  },
  {
   "num": 14,
   "topic": "http",
   "question": "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "HTTP 1.0 פותח חיבור TCP חדש עבור כל משאב בדף, מה שמוביל להקמת חיבורים מרובים לכל עמוד.",
     "html": "HTTP 1.0 פותח חיבור TCP חדש עבור כל משאב בדף, מה שמוביל להקמת חיבורים מרובים לכל עמוד."
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP 1.0 אינו מאפשר חיבורים מאובטחים, ולכן יש צורך בפרוטוקול נוסף כמו TLS.",
     "html": "HTTP 1.0 אינו מאפשר חיבורים מאובטחים, ולכן יש צורך בפרוטוקול נוסף כמו TLS."
    },
    {
     "id": "c",
     "type": "text",
     "value": "HTTP 1.0 מאפשר רק חיבור אחד לכל אתר, ולכן לא ניתן להוריד משאבים מרובים במקביל.",
     "html": "HTTP 1.0 מאפשר רק חיבור אחד לכל אתר, ולכן לא ניתן להוריד משאבים מרובים במקביל."
    },
    {
     "id": "d",
     "type": "text",
     "value": "HTTP 1.0 שולח את כל המשאבים של הדף בחבילה אחת, מה שעלול לגרום לעומס על הרשת ולהאטת טעינת הדף.",
     "html": "HTTP 1.0 שולח את כל המשאבים של הדף בחבילה אחת, מה שעלול לגרום לעומס על הרשת ולהאטת טעינת הדף."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-HTTP 1.0 החיבור אינו מתמשך (non-persistent): כל אובייקט דורש חיבור TCP חדש (לחיצת יד ושלב Slow Start מחדש), ובדף עם הרבה אובייקטים זה גורם לעיכוב.\nב: גם HTTP 1.1 צריך TLS להצפנה, ולכן זו אינה בעיה ייחודית. ג: אפשר לפתוח חיבורים במקביל. ד: המשאבים נשלחים בנפרד.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q14",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מדוע קיימת בעיה בפרוטוקול HTTP 1.0 בכל הנוגע לטעינת דפי אינטרנט?",
   "explanationHtml": "ב-HTTP 1.0 החיבור אינו מתמשך (non-persistent): כל אובייקט דורש חיבור TCP חדש (לחיצת יד ושלב Slow Start מחדש), ובדף עם הרבה אובייקטים זה גורם לעיכוב.<br>ב: גם HTTP 1.1 צריך TLS להצפנה, ולכן זו אינה בעיה ייחודית. ג: אפשר לפתוח חיבורים במקביל. ד: המשאבים נשלחים בנפרד.",
   "dedupKey": "f202115b890d9c59"
  },
  {
   "num": 15,
   "topic": "tcp",
   "question": "מהי ההודעה הראשונה שנשלחת בתהליך יצירת חיבור בפרוטוקול TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "SYN",
     "html": "SYN"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ACK",
     "html": "ACK"
    },
    {
     "id": "c",
     "type": "text",
     "value": "FIN",
     "html": "FIN"
    },
    {
     "id": "d",
     "type": "text",
     "value": "RST",
     "html": "RST"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "לחיצת היד התלת-שלבית: SYN, אחריה SYN-ACK ואז ACK. FIN סוגר חיבור ו-RST מאפס אותו.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-A/check.py for calculations).",
   "id": "25A-A-Q15",
   "examCode": "25A-A",
   "examLabel": "2025 סמסטר א מועד א",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "מהי ההודעה הראשונה שנשלחת בתהליך יצירת חיבור בפרוטוקול TCP?",
   "explanationHtml": "לחיצת היד התלת-שלבית: SYN, אחריה SYN-ACK ואז ACK. FIN סוגר חיבור ו-RST מאפס אותו.",
   "dedupKey": "c00b06da456e72ab"
  },
  {
   "num": 1,
   "topic": "dns_dhcp",
   "question": "ביום ראשון בבוקר דני מגיע ראשון לעבודה לפני כולם, מדליק את המחשב שלו ופונה פעם ראשונה במחשבו לגלוש לאתר של www.amazon.com. דני הוא הראשון במקום העבודה שלו, באותו בוקר, שפונה לגלוש באינטרנט ואין פעילויות גלישה אחרות אפילו לא מצד שרתי עדכונים אוטומטיים.\nהמחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com.\nהמחשב של דני ששמו pcdany ומסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.\nמה מתאר הציור?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שאילתת DNS רקורסיבית (recursive query)",
     "html": "שאילתת DNS רקורסיבית (recursive query)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שאילתת DNS איטרטיבית (iterative query)",
     "html": "שאילתת DNS איטרטיבית (iterative query)"
    },
    {
     "id": "c",
     "type": "text",
     "value": "שאילתת ARP",
     "html": "שאילתת ARP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "תהליך קבלת כתובת IP דרך DHCP",
     "html": "תהליך קבלת כתובת IP דרך DHCP"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בציור הלקוח שואל את שרת ה-DNS המקומי (1), המקומי פונה ל-root (2), ה-root פונה בעצמו ל-TLD (3), ה-TLD ל-authoritative (4), והתשובה חוזרת באותו מסלול (5, 6, 7, 8): כל שרת מטפל בשאילתה \"בשם\" השואל, וזו שאילתה רקורסיבית.\nבשאילתה איטרטיבית ה-Resolver המקומי היה פונה בעצמו לכל שרת ומקבל הפניה. ARP ו-DHCP אינם קשורים לציור.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "image": "images/exams/25A-B-Q1.png",
   "id": "25A-B-Q1",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "ביום ראשון בבוקר דני מגיע ראשון לעבודה לפני כולם, מדליק את המחשב שלו ופונה פעם ראשונה במחשבו לגלוש לאתר של www.amazon.com. דני הוא הראשון במקום העבודה שלו, באותו בוקר, שפונה לגלוש באינטרנט ואין פעילויות גלישה אחרות אפילו לא מצד שרתי עדכונים אוטומטיים.<br>המחשב של דני נעזר בשרת DNS מקומי בתוך הרשת של mywork.com.<br>המחשב של דני ששמו pcdany ומסומן בתור \"requesting host\" בפינה השמאלית התחתונה של הציור.<br>מה מתאר הציור?",
   "explanationHtml": "בציור הלקוח שואל את שרת ה-DNS המקומי (1), המקומי פונה ל-root (2), ה-root פונה בעצמו ל-TLD (3), ה-TLD ל-authoritative (4), והתשובה חוזרת באותו מסלול (5, 6, 7, 8): כל שרת מטפל בשאילתה \"בשם\" השואל, וזו שאילתה רקורסיבית.<br>בשאילתה איטרטיבית ה-Resolver המקומי היה פונה בעצמו לכל שרת ומקבל הפניה. ARP ו-DHCP אינם קשורים לציור.",
   "dedupKey": "591ad4ce89bef1d3"
  },
  {
   "num": 2,
   "topic": "tcp",
   "question": "לפניכם רצף של הודעות TCP שנשלחות מהשולח לנמען. הנמען מחזיר הודעות ACK.\nמה יהיו המספרים בהודעות ACK עבור A, B, C, D, E?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "A=301, B=301, C=301, D=301, E= 701",
     "html": "A=301, B=301, C=301, D=301, E= 701"
    },
    {
     "id": "b",
     "type": "text",
     "value": "A=301, B=401, C=601, D=701, E=401",
     "html": "A=301, B=401, C=601, D=701, E=401"
    },
    {
     "id": "c",
     "type": "text",
     "value": "A=301, B=301, C=401, D=701, E=601",
     "html": "A=301, B=301, C=401, D=701, E=601"
    },
    {
     "id": "d",
     "type": "text",
     "value": "A=301, B=401, C=501, D=601, E=701",
     "html": "A=301, B=401, C=501, D=601, E=701"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ACK מצטבר מציין את הבית הבא שהנמען מצפה לו. אחרי $101\\text{-}300$ הנמען מצפה ל-301, ולכן $A=301$.\nהקטע $301\\text{-}400$ אבד, ולכן קטעים $401\\text{-}500$, $501\\text{-}600$, $601\\text{-}700$ שמגיעים שלא בסדר מקבלים שוב את אותו ACK: $B=C=D=301$ (הם נשמרים במאגר אך אינם מקדמים את הרצף).\nכשהקטע $301\\text{-}400$ נשלח מחדש, הרצף מתמלא עד 700 ולכן $E=701$.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). One ACK per two in-order segments is the figure's pattern (A acknowledges 101-300).",
   "image": "images/exams/25A-B-Q2.png",
   "id": "25A-B-Q2",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "לפניכם רצף של הודעות TCP שנשלחות מהשולח לנמען. הנמען מחזיר הודעות ACK.<br>מה יהיו המספרים בהודעות ACK עבור A, B, C, D, E?",
   "explanationHtml": "ACK מצטבר מציין את הבית הבא שהנמען מצפה לו. אחרי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>101</mn><mtext>-</mtext><mn>300</mn></mrow><annotation encoding=\"application/x-tex\">101\\text{-}300</annotation></semantics></math></span> הנמען מצפה ל-301, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>301</mn></mrow><annotation encoding=\"application/x-tex\">A=301</annotation></semantics></math></span>.<br>הקטע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>301</mn><mtext>-</mtext><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">301\\text{-}400</annotation></semantics></math></span> אבד, ולכן קטעים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>401</mn><mtext>-</mtext><mn>500</mn></mrow><annotation encoding=\"application/x-tex\">401\\text{-}500</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>501</mn><mtext>-</mtext><mn>600</mn></mrow><annotation encoding=\"application/x-tex\">501\\text{-}600</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>601</mn><mtext>-</mtext><mn>700</mn></mrow><annotation encoding=\"application/x-tex\">601\\text{-}700</annotation></semantics></math></span> שמגיעים שלא בסדר מקבלים שוב את אותו ACK: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mi>C</mi><mo>=</mo><mi>D</mi><mo>=</mo><mn>301</mn></mrow><annotation encoding=\"application/x-tex\">B=C=D=301</annotation></semantics></math></span> (הם נשמרים במאגר אך אינם מקדמים את הרצף).<br>כשהקטע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>301</mn><mtext>-</mtext><mn>400</mn></mrow><annotation encoding=\"application/x-tex\">301\\text{-}400</annotation></semantics></math></span> נשלח מחדש, הרצף מתמלא עד 700 ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>701</mn></mrow><annotation encoding=\"application/x-tex\">E=701</annotation></semantics></math></span>.",
   "dedupKey": "9677d34e24237b08"
  },
  {
   "num": 3,
   "topic": "udp_checksum",
   "question": "מה ההבדל בין כותרת (header) ה-TCP לכותרת ה-UDP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כותרת ה-TCP גדולה יותר, כוללת שדות לאמינות ולשליטה בזרימה.",
     "html": "כותרת ה-TCP גדולה יותר, כוללת שדות לאמינות ולשליטה בזרימה."
    },
    {
     "id": "b",
     "type": "text",
     "value": "כותרת ה-TCP קטנה יותר מכותרת ה-UDP.",
     "html": "כותרת ה-TCP קטנה יותר מכותרת ה-UDP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "כותרת ה-UDP גדולה יותר כי היא כוללת פרטי הקמת חיבור ו-checksum.",
     "html": "כותרת ה-UDP גדולה יותר כי היא כוללת פרטי הקמת חיבור ו-checksum."
    },
    {
     "id": "d",
     "type": "text",
     "value": "שתי הכותרות באותו הגודל.",
     "html": "שתי הכותרות באותו הגודל."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כותרת TCP היא לפחות 20 בתים (מספרי Seq ו-ACK, חלון, דגלים), וכותרת UDP היא 8 בתים בלבד (פורטים, אורך, checksum). TCP צריך את השדות הנוספים לאמינות ולבקרת זרימה.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q3",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "UDP ו-checksum",
   "questionHtml": "מה ההבדל בין כותרת (header) ה-TCP לכותרת ה-UDP?",
   "explanationHtml": "כותרת TCP היא לפחות 20 בתים (מספרי Seq ו-ACK, חלון, דגלים), וכותרת UDP היא 8 בתים בלבד (פורטים, אורך, checksum). TCP צריך את השדות הנוספים לאמינות ולבקרת זרימה.",
   "dedupKey": "1736eb8d1fd59248"
  },
  {
   "num": 4,
   "topic": "http",
   "question": "מדוע HTTP נחשב לפרוטוקול ללא מצב (Stateless)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כל בקשה היא עצמאית, והשרת אינו שומר מידע על סשן (Session).",
     "html": "כל בקשה היא עצמאית, והשרת אינו שומר מידע על סשן (Session)."
    },
    {
     "id": "b",
     "type": "text",
     "value": "הוא יכול לטפל רק בבקשה אחת בכל פעם.",
     "html": "הוא יכול לטפל רק בבקשה אחת בכל פעם."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הוא אינו תומך בהצפנה או בהעברת נתונים מאובטחת.",
     "html": "הוא אינו תומך בהצפנה או בהעברת נתונים מאובטחת."
    },
    {
     "id": "d",
     "type": "text",
     "value": "הוא עובד רק עם דפי אינטרנט סטטיים.",
     "html": "הוא עובד רק עם דפי אינטרנט סטטיים."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "חוסר מצב פירושו שהשרת אינו זוכר בקשות קודמות: כל בקשה מכילה את כל מה שנדרש לטפל בה (לכן יש Cookies). זה אינו קשור למספר הבקשות בו-זמנית, להצפנה (HTTPS) או לסוג התוכן.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q4",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מדוע HTTP נחשב לפרוטוקול ללא מצב (Stateless)?",
   "explanationHtml": "חוסר מצב פירושו שהשרת אינו זוכר בקשות קודמות: כל בקשה מכילה את כל מה שנדרש לטפל בה (לכן יש Cookies). זה אינו קשור למספר הבקשות בו-זמנית, להצפנה (HTTPS) או לסוג התוכן.",
   "dedupKey": "ffc91be439bfe30a"
  },
  {
   "num": 5,
   "topic": "physical_misc",
   "question": "נתון התרשים הבא של רשת מבוססת circuit-switched.\nנניח שכל חיבור דורש 2 קפיצות רצופות, והשיחות מחוברות בכיוון השעון.\nבהתחשב במגבלות אלו, מהו **המספר המרבי של חיבורים** שיכולים להיות פעילים בו-זמנית ברשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "28",
     "html": "28"
    },
    {
     "id": "b",
     "type": "text",
     "value": "57",
     "html": "57"
    },
    {
     "id": "c",
     "type": "text",
     "value": "17",
     "html": "17"
    },
    {
     "id": "d",
     "type": "text",
     "value": "22",
     "html": "22"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "חיבור תופס קו אחד מכל אחד משני קישורים סמוכים. נסמן $x_1$ (קישורים AB ו-BC), $x_2$ (BC ו-CD), $x_3$ (CD ו-DA), $x_4$ (DA ו-AB) ונקבל: $x_1+x_4\\le 14$, $x_1+x_2\\le 11$, $x_2+x_3\\le 15$, $x_3+x_4\\le 17$.\nחיבור ארבעת האילוצים: $2\\sum x_i\\le 57$, כלומר $\\sum x_i\\le 28$. ואפשר להשיג 28 (בדיקה ממצה בסקריפט). 57 הוא סכום כל הקווים (כל חיבור תופס שניים), 17 ו-22 נמוכים מהמקסימום.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). Interpretation: each connection uses 2 consecutive links in the clockwise direction; the exhaustive search confirms 28 is attainable.",
   "image": "images/exams/25A-B-Q5.png",
   "id": "25A-B-Q5",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבה פיזית ומיתוג",
   "questionHtml": "נתון התרשים הבא של רשת מבוססת circuit-switched.<br>נניח שכל חיבור דורש 2 קפיצות רצופות, והשיחות מחוברות בכיוון השעון.<br>בהתחשב במגבלות אלו, מהו <strong>המספר המרבי של חיבורים</strong> שיכולים להיות פעילים בו-זמנית ברשת?",
   "explanationHtml": "חיבור תופס קו אחד מכל אחד משני קישורים סמוכים. נסמן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_1</annotation></semantics></math></span> (קישורים AB ו-BC), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_2</annotation></semantics></math></span> (BC ו-CD), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>3</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_3</annotation></semantics></math></span> (CD ו-DA), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>4</mn></msub></mrow><annotation encoding=\"application/x-tex\">x_4</annotation></semantics></math></span> (DA ו-AB) ונקבל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>≤</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">x_1+x_4\\le 14</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>≤</mo><mn>11</mn></mrow><annotation encoding=\"application/x-tex\">x_1+x_2\\le 11</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo>≤</mo><mn>15</mn></mrow><annotation encoding=\"application/x-tex\">x_2+x_3\\le 15</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub><mo>≤</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">x_3+x_4\\le 17</annotation></semantics></math></span>.<br>חיבור ארבעת האילוצים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub><mo>≤</mo><mn>57</mn></mrow><annotation encoding=\"application/x-tex\">2\\sum x_i\\le 57</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>∑</mo><msub><mi>x</mi><mi>i</mi></msub><mo>≤</mo><mn>28</mn></mrow><annotation encoding=\"application/x-tex\">\\sum x_i\\le 28</annotation></semantics></math></span>. ואפשר להשיג 28 (בדיקה ממצה בסקריפט). 57 הוא סכום כל הקווים (כל חיבור תופס שניים), 17 ו-22 נמוכים מהמקסימום.",
   "dedupKey": "75f304fa6f86c9fd"
  },
  {
   "num": 6,
   "topic": "delays",
   "question": "התרשים הבא מתאר רשת המחברת 4 שרתים ו-4 מחשבים דרך לינק משותף, כאשר אין עדיפות לאף אחד מהרכיבים ברשת על הלינק המשותף (קצב השידור של כל לינק מצוין בתרשים כ-R), מהו ה-link utilizations (ניצולת השידור) של השרתים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "0.63",
     "html": "0.63"
    },
    {
     "id": "b",
     "type": "text",
     "value": "0.71",
     "html": "0.71"
    },
    {
     "id": "c",
     "type": "text",
     "value": "1",
     "html": "1"
    },
    {
     "id": "d",
     "type": "text",
     "value": "0.25",
     "html": "0.25"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הלינק המשותף ($200\\,Mbps$) מתחלק שווה בין 4 חיבורים: $50\\,Mbps$ לכל אחד. קצב כל חיבור הוא $\\min(R_s,\\,R_c,\\,R/4)=\\min(80,70,50)=50\\,Mbps$.\nניצולת הלינק של שרת: $\\frac{50}{80}=0.625\\approx 0.63$. (0.71 הוא ניצולת צד הלקוח $50/70$.)",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). Server link utilization 50/80 = 0.625 shown as 0.63; the client side would be 0.71.",
   "image": "images/exams/25A-B-Q6.png",
   "id": "25A-B-Q6",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "התרשים הבא מתאר רשת המחברת 4 שרתים ו-4 מחשבים דרך לינק משותף, כאשר אין עדיפות לאף אחד מהרכיבים ברשת על הלינק המשותף (קצב השידור של כל לינק מצוין בתרשים כ-R), מהו ה-link utilizations (ניצולת השידור) של השרתים?",
   "explanationHtml": "הלינק המשותף (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">200\\,Mbps</annotation></semantics></math></span>) מתחלק שווה בין 4 חיבורים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">50\\,Mbps</annotation></semantics></math></span> לכל אחד. קצב כל חיבור הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><msub><mi>R</mi><mi>s</mi></msub><mo separator=\"true\">,</mo><mtext> </mtext><msub><mi>R</mi><mi>c</mi></msub><mo separator=\"true\">,</mo><mtext> </mtext><mi>R</mi><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">(</mo><mn>80</mn><mo separator=\"true\">,</mo><mn>70</mn><mo separator=\"true\">,</mo><mn>50</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>50</mn><mtext> </mtext><mi>M</mi><mi>b</mi><mi>p</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\min(R_s,\\,R_c,\\,R/4)=\\min(80,70,50)=50\\,Mbps</annotation></semantics></math></span>.<br>ניצולת הלינק של שרת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>50</mn><mn>80</mn></mfrac><mo>=</mo><mn>0.625</mn><mo>≈</mo><mn>0.63</mn></mrow><annotation encoding=\"application/x-tex\">\\frac{50}{80}=0.625\\approx 0.63</annotation></semantics></math></span>. (0.71 הוא ניצולת צד הלקוח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>50</mn><mi mathvariant=\"normal\">/</mi><mn>70</mn></mrow><annotation encoding=\"application/x-tex\">50/70</annotation></semantics></math></span>.)",
   "dedupKey": "cada24dc0b095151"
  },
  {
   "num": 7,
   "topic": "delays",
   "question": "בתרשים הבא מתוארת רשת מקצה לקצה, גודל החבילה ברשת זו הוא 4000 ביטים, מהירות ההתפשטות בקו (propogation speed) הוא $3\\times10^{8}$ מטר לשנייה. שאר הנתונים מתוארים בתרשים. מהו העיכוב (delay) הכולל?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "0.0038 שניות",
     "html": "0.0038 שניות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "0.0003 שניות",
     "html": "0.0003 שניות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "3 שניות",
     "html": "3 שניות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "3.9 שניות",
     "html": "3.9 שניות"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "לכל קישור $d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot10^{8}}$ והעיכובים מצטברים (Store-and-forward).\nהולכה: $\\frac{4000}{10^{9}}+\\frac{4000}{10^{8}}+\\frac{4000}{10^{7}}=4+40+400=444\\,\\mu s$. התפשטות: $\\frac{2000}{3\\cdot10^{8}}+\\frac{10^{6}}{3\\cdot10^{8}}+\\frac{2000}{3\\cdot10^{8}}\\approx 3347\\,\\mu s$.\nסך הכול $\\approx 3.79\\,ms\\approx 0.0038\\,s$.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). Propagation speed printed as '3x10^8'; total 3.79 ms.",
   "image": "images/exams/25A-B-Q7.png",
   "id": "25A-B-Q7",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "בתרשים הבא מתוארת רשת מקצה לקצה, גודל החבילה ברשת זו הוא 4000 ביטים, מהירות ההתפשטות בקו (propogation speed) הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">3\\times10^{8}</annotation></semantics></math></span> מטר לשנייה. שאר הנתונים מתוארים בתרשים. מהו העיכוב (delay) הכולל?",
   "explanationHtml": "לכל קישור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mfrac><mi>L</mi><mi>R</mi></mfrac><mo>+</mo><mfrac><mtext>length</mtext><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot10^{8}}</annotation></semantics></math></span> והעיכובים מצטברים (Store-and-forward).<br>הולכה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>4000</mn><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>+</mo><mfrac><mn>4000</mn><msup><mn>10</mn><mn>8</mn></msup></mfrac><mo>+</mo><mfrac><mn>4000</mn><msup><mn>10</mn><mn>7</mn></msup></mfrac><mo>=</mo><mn>4</mn><mo>+</mo><mn>40</mn><mo>+</mo><mn>400</mn><mo>=</mo><mn>444</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{4000}{10^{9}}+\\frac{4000}{10^{8}}+\\frac{4000}{10^{7}}=4+40+400=444\\,\\mu s</annotation></semantics></math></span>. התפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>2000</mn><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mn>10</mn><mn>6</mn></msup><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>2000</mn><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>3347</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{2000}{3\\cdot10^{8}}+\\frac{10^{6}}{3\\cdot10^{8}}+\\frac{2000}{3\\cdot10^{8}}\\approx 3347\\,\\mu s</annotation></semantics></math></span>.<br>סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>≈</mo><mn>3.79</mn><mtext> </mtext><mi>m</mi><mi>s</mi><mo>≈</mo><mn>0.0038</mn><mtext> </mtext><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\approx 3.79\\,ms\\approx 0.0038\\,s</annotation></semantics></math></span>.",
   "dedupKey": "2e03a07d2189f3c6"
  },
  {
   "num": 8,
   "topic": "link_layer",
   "question": "נתון אלגוריתם לבדיקת יתירות מחזורית (CRC), כאשר r=3, G=1001 D=10011100, מהו R ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "101",
     "html": "101"
    },
    {
     "id": "b",
     "type": "text",
     "value": "1101",
     "html": "1101"
    },
    {
     "id": "c",
     "type": "text",
     "value": "01",
     "html": "01"
    },
    {
     "id": "d",
     "type": "text",
     "value": "10001101",
     "html": "10001101"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "מוסיפים $r=3$ אפסים ל-$D$: $10011100000$ ומחלקים ב-$G=1001$ בחילוק XOR. השארית היא $101$ (שלושה ביטים).\n$1101$ ו-$10001101$ ארוכים מ-$r$ ביטים, ו-$01$ אינו שלושה ביטים.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). Remainder recomputed by script.",
   "id": "25A-B-Q8",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "נתון אלגוריתם לבדיקת יתירות מחזורית (CRC), כאשר r=3, G=1001 D=10011100, מהו R ?",
   "explanationHtml": "מוסיפים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">r=3</annotation></semantics></math></span> אפסים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10011100000</mn></mrow><annotation encoding=\"application/x-tex\">10011100000</annotation></semantics></math></span> ומחלקים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>G</mi><mo>=</mo><mn>1001</mn></mrow><annotation encoding=\"application/x-tex\">G=1001</annotation></semantics></math></span> בחילוק XOR. השארית היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>101</mn></mrow><annotation encoding=\"application/x-tex\">101</annotation></semantics></math></span> (שלושה ביטים).<br><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1101</mn></mrow><annotation encoding=\"application/x-tex\">1101</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10001101</mn></mrow><annotation encoding=\"application/x-tex\">10001101</annotation></semantics></math></span> ארוכים מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>r</mi></mrow><annotation encoding=\"application/x-tex\">r</annotation></semantics></math></span> ביטים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>01</mn></mrow><annotation encoding=\"application/x-tex\">01</annotation></semantics></math></span> אינו שלושה ביטים.",
   "dedupKey": "4545003be4faf843"
  },
  {
   "num": 9,
   "topic": "http",
   "question": "מהי מטרתו של קובץ Manifest בהקשר של סטרימינג של מולטימדיה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לאפשר ללקוח לדעת היכן ניתן לאחזר קטעי וידאו שונים, המקודדים בקצבי נתונים שונים",
     "html": "לאפשר ללקוח לדעת היכן ניתן לאחזר קטעי וידאו שונים, המקודדים בקצבי נתונים שונים"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לאפשר לשרת OTT (Over-the-top) לדעת איזה איזה וידאו הלקוח רוצה לצפות בו",
     "html": "לאפשר לשרת OTT (Over-the-top) לדעת איזה איזה וידאו הלקוח רוצה לצפות בו"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לאפשר שירות וידאו לרשום (log) את הווידאו ואת השרת ממנו הלקוח מבצע סטרימינג",
     "html": "לאפשר שירות וידאו לרשום (log) את הווידאו ואת השרת ממנו הלקוח מבצע סטרימינג"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לאפשר ללקוח להקצאת רוחב פס לאורך הנתיב מהשרת ללקוח, כך שיוכל לצפות בווידאו בסטרימינג ללא פגמים",
     "html": "לאפשר ללקוח להקצאת רוחב פס לאורך הנתיב מהשרת ללקוח, כך שיוכל לצפות בווידאו בסטרימינג ללא פגמים"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-DASH השרת מפרסם קובץ Manifest המפרט את קטעי הווידאו ואת הגרסאות שלהם (קצבי bit שונים) ואת כתובותיהם, והלקוח בוחר קטע לפי רוחב הפס הנוכחי.\nב: השרת אינו צריך את ה-Manifest כדי לדעת מה הלקוח רוצה. ג: רישום (log) אינו מטרתו. ד: ה-Manifest אינו מקצה רוחב פס.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). Option b printed with a doubled word ('איזה איזה'); transcribed as printed.",
   "id": "25A-B-Q9",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי מטרתו של קובץ Manifest בהקשר של סטרימינג של מולטימדיה?",
   "explanationHtml": "ב-DASH השרת מפרסם קובץ Manifest המפרט את קטעי הווידאו ואת הגרסאות שלהם (קצבי bit שונים) ואת כתובותיהם, והלקוח בוחר קטע לפי רוחב הפס הנוכחי.<br>ב: השרת אינו צריך את ה-Manifest כדי לדעת מה הלקוח רוצה. ג: רישום (log) אינו מטרתו. ד: ה-Manifest אינו מקצה רוחב פס.",
   "dedupKey": "b54ae03b2f767b8b"
  },
  {
   "num": 10,
   "topic": "ip_cidr",
   "question": "מהו המספר המרבי של כתובות אפשריות ברשת 223.1.2/24?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "256",
     "html": "256"
    },
    {
     "id": "b",
     "type": "text",
     "value": "$2^{32}$",
     "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{32}</annotation></semantics></math></span>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "128",
     "html": "128"
    },
    {
     "id": "d",
     "type": "text",
     "value": "516",
     "html": "516"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "מסכה $/24$ משאירה $32-24=8$ ביטי מארח: $2^{8}=256$ כתובות (מהן 254 ניתנות לשימוש, כי כתובת הרשת וכתובת ה-broadcast שמורות, אך השאלה שואלת על מספר הכתובות האפשריות). $2^{32}$ הוא כל מרחב ה-IPv4.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations). 'Addresses possible in the network' read as 2^8 = 256 (254 usable hosts is not an option).",
   "id": "25A-B-Q10",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "מהו המספר המרבי של כתובות אפשריות ברשת 223.1.2/24?",
   "explanationHtml": "מסכה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">/24</annotation></semantics></math></span> משאירה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">32-24=8</annotation></semantics></math></span> ביטי מארח: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>8</mn></msup><mo>=</mo><mn>256</mn></mrow><annotation encoding=\"application/x-tex\">2^{8}=256</annotation></semantics></math></span> כתובות (מהן 254 ניתנות לשימוש, כי כתובת הרשת וכתובת ה-broadcast שמורות, אך השאלה שואלת על מספר הכתובות האפשריות). <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{32}</annotation></semantics></math></span> הוא כל מרחב ה-IPv4.",
   "dedupKey": "45cf033c85033434"
  },
  {
   "num": 11,
   "topic": "routing",
   "question": "בהגדרת פרוטוקול ניתוב, כיצד מוגדר נתיב טוב?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "אלגוריתמי ניתוב עובדים לרוב עם משקלי קישור מופשטים, שיכולים לייצג מטריקות שונות",
     "html": "אלגוריתמי ניתוב עובדים לרוב עם משקלי קישור מופשטים, שיכולים לייצג מטריקות שונות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "נתיב עם רוחב פס גבוה.",
     "html": "נתיב עם רוחב פס גבוה."
    },
    {
     "id": "c",
     "type": "text",
     "value": "נתיב עם מספר מינימלי של קפיצות (hops).",
     "html": "נתיב עם מספר מינימלי של קפיצות (hops)."
    },
    {
     "id": "d",
     "type": "text",
     "value": "נתיב עם זמן השהיה (delay) נמוך.",
     "html": "נתיב עם זמן השהיה (delay) נמוך."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "med",
   "explanation": "\"נתיב טוב\" הוא נתיב בעל עלות מינימלית, והעלות היא משקל מופשט שנקבע לפי מדיניות: יכולה לייצג רוחב פס, מספר קפיצות, השהיה או כל מטריקה אחרת.\nב, ג, ד: כל אחת מהן היא מטריקה אפשרית אחת בלבד, ולא ההגדרה הכללית.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q11",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "ניתוב: Dijkstra, Distance Vector ו-BGP",
   "questionHtml": "בהגדרת פרוטוקול ניתוב, כיצד מוגדר נתיב טוב?",
   "explanationHtml": "\"נתיב טוב\" הוא נתיב בעל עלות מינימלית, והעלות היא משקל מופשט שנקבע לפי מדיניות: יכולה לייצג רוחב פס, מספר קפיצות, השהיה או כל מטריקה אחרת.<br>ב, ג, ד: כל אחת מהן היא מטריקה אפשרית אחת בלבד, ולא ההגדרה הכללית.",
   "dedupKey": "22bd086fd73d7112"
  },
  {
   "num": 12,
   "topic": "dns_dhcp",
   "question": "איזו מהאפשרויות הבאות מתארת בצורה הטובה ביותר את הפונקציה העיקרית של פרוטוקול ARP ?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "הוא מתרגם כתובות IP לכתובות MAC.",
     "html": "הוא מתרגם כתובות IP לכתובות MAC."
    },
    {
     "id": "b",
     "type": "text",
     "value": "הוא ממיר שמות דומיין לכתובות IP.",
     "html": "הוא ממיר שמות דומיין לכתובות IP."
    },
    {
     "id": "c",
     "type": "text",
     "value": "הוא מקצה כתובות IP למכשירים ברשת.",
     "html": "הוא מקצה כתובות IP למכשירים ברשת."
    },
    {
     "id": "d",
     "type": "text",
     "value": "הוא מצפין חבילות נתונים להעברה מאובטחת.",
     "html": "הוא מצפין חבילות נתונים להעברה מאובטחת."
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ARP מוצא את כתובת ה-MAC של כתובת IP ברשת המקומית. המרת שמות היא DNS, הקצאת כתובות היא DHCP, והצפנה אינה תפקיד של ARP.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q12",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "איזו מהאפשרויות הבאות מתארת בצורה הטובה ביותר את הפונקציה העיקרית של פרוטוקול ARP ?",
   "explanationHtml": "ARP מוצא את כתובת ה-MAC של כתובת IP ברשת המקומית. המרת שמות היא DNS, הקצאת כתובות היא DHCP, והצפנה אינה תפקיד של ARP.",
   "dedupKey": "3ce0c7ce1275ed27"
  },
  {
   "num": 13,
   "topic": "sockets_email",
   "question": "בחיבור TCP טיפוסי, איזו מהסדרות הבאות מייצגות את הסדר הנכון של קריאות API לסוקטים עבור השרת והלקוח?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "שרת: `socket → bind → listen → accept`\nלקוח: `socket → connect`",
     "html": "שרת: <code class=\"tok\" dir=\"ltr\">socket → bind → listen → accept</code><br>לקוח: <code class=\"tok\" dir=\"ltr\">socket → connect</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שרת: `socket → listen → bind → accept`\nלקוח: `socket → connect`",
     "html": "שרת: <code class=\"tok\" dir=\"ltr\">socket → listen → bind → accept</code><br>לקוח: <code class=\"tok\" dir=\"ltr\">socket → connect</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "שרת: `socket → bind → accept → listen`\nלקוח: `socket → connect`",
     "html": "שרת: <code class=\"tok\" dir=\"ltr\">socket → bind → accept → listen</code><br>לקוח: <code class=\"tok\" dir=\"ltr\">socket → connect</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "שרת: `socket → accept → bind → listen`\nלקוח: `socket → connect`",
     "html": "שרת: <code class=\"tok\" dir=\"ltr\">socket → accept → bind → listen</code><br>לקוח: <code class=\"tok\" dir=\"ltr\">socket → connect</code>"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "השרת יוצר סוקט, קושר אותו לפורט (bind), מאזין (listen) ואז מקבל חיבורים (accept). הלקוח יוצר סוקט ופונה (connect). בשאר האפשרויות סדר הקריאות מתהפך (listen לפני bind, או accept לפני listen).",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q13",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "Sockets ודואר: SMTP, POP ו-IMAP",
   "questionHtml": "בחיבור TCP טיפוסי, איזו מהסדרות הבאות מייצגות את הסדר הנכון של קריאות API לסוקטים עבור השרת והלקוח?",
   "explanationHtml": "השרת יוצר סוקט, קושר אותו לפורט (bind), מאזין (listen) ואז מקבל חיבורים (accept). הלקוח יוצר סוקט ופונה (connect). בשאר האפשרויות סדר הקריאות מתהפך (listen לפני bind, או accept לפני listen).",
   "dedupKey": "217ee60e1b0cce41"
  },
  {
   "num": 14,
   "topic": "dns_dhcp",
   "question": "מהם הנתונים שמספק שרת ה DHCP לתחנה שפונה אליו?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP, Subnet, Local DNS, Default Gateway IP",
     "html": "IP, Subnet, Local DNS, Default Gateway IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "IP, Router IP, Subnet, Root DNS",
     "html": "IP, Router IP, Subnet, Root DNS"
    },
    {
     "id": "c",
     "type": "text",
     "value": "IP, Router IP, Root DNS, Default Gateway",
     "html": "IP, Router IP, Root DNS, Default Gateway"
    },
    {
     "id": "d",
     "type": "text",
     "value": "IP, Default Gateway MAC address, Subnet, Local DNS",
     "html": "IP, Default Gateway MAC address, Subnet, Local DNS"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway ושרת DNS מקומי. כתובת MAC של ה-Gateway מתקבלת מ-ARP, ושרת Root DNS אינו חלק מהמידע שהלקוח מקבל.",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q14",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהם הנתונים שמספק שרת ה DHCP לתחנה שפונה אליו?",
   "explanationHtml": "DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway ושרת DNS מקומי. כתובת MAC של ה-Gateway מתקבלת מ-ARP, ושרת Root DNS אינו חלק מהמידע שהלקוח מקבל.",
   "dedupKey": "f5167195e3b68254"
  },
  {
   "num": 15,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה\n`A: 25.36.64.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "b",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "c",
     "type": "text",
     "value": "D",
     "html": "D"
    },
    {
     "id": "d",
     "type": "text",
     "value": "B",
     "html": "B"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match. A: $25.36.64.0/16$ - הבתים הראשונים הם $25.36$ ולכן מתאימה (ביטי המארח אינם נבדקים). B: $25.36.128.0/20$ מכסה $128\\text{-}143$ - לא. C: $25.36.64.0/20$ מכסה $64\\text{-}79$ - כוללת 67. D - לא.\nA ו-C מתאימות, והמסכה הארוכה יותר היא C ($/20>/16$).",
   "note": "No key printed in the source; solved independently (see tools/verify/25A-B/check.py for calculations).",
   "id": "25A-B-Q15",
   "examCode": "25A-B",
   "examLabel": "2025 סמסטר א מועד ב",
   "year": 2025,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה אם כתובת היעד 25.36.67.5 לפי טבלת הניתוב הבאה<br><code class=\"tok\" dir=\"ltr\">A: 25.36.64.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code>",
   "explanationHtml": "Longest Prefix Match. A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/16</annotation></semantics></math></span> - הבתים הראשונים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36</mn></mrow><annotation encoding=\"application/x-tex\">25.36</annotation></semantics></math></span> ולכן מתאימה (ביטי המארח אינם נבדקים). B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn><mtext>-</mtext><mn>143</mn></mrow><annotation encoding=\"application/x-tex\">128\\text{-}143</annotation></semantics></math></span> - לא. C: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn><mtext>-</mtext><mn>79</mn></mrow><annotation encoding=\"application/x-tex\">64\\text{-}79</annotation></semantics></math></span> - כוללת 67. D - לא.<br>A ו-C מתאימות, והמסכה הארוכה יותר היא C (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn><mo>&gt;</mo><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/20&gt;/16</annotation></semantics></math></span>).",
   "dedupKey": "85d490a5904ccd45"
  },
  {
   "num": 1,
   "topic": "http",
   "question": "נתון אתר אינטרנט עם 100 משאבים שונים (תמונות, סקריפטים וכו'). כל משאב בגודל KB 100. חשב את מספר חיבורי ה-TCP הדרושים ב-HTTP 1.1 וב-HTTP/2 להורדת כל המשאבים.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "17 חיבורים ב-HTTP 1.1, וחיבור אחד ב-HTTP/2",
     "html": "17 חיבורים ב-HTTP 1.1, וחיבור אחד ב-HTTP/2"
    },
    {
     "id": "b",
     "type": "text",
     "value": "50 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2",
     "html": "50 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2"
    },
    {
     "id": "c",
     "type": "text",
     "value": "10 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2",
     "html": "10 חיבורים ב-HTTP 1.1 ו-10 חיבורים ב-HTTP/2"
    },
    {
     "id": "d",
     "type": "text",
     "value": "5 חיבורים ב-HTTP 1.1 ו-5 חיבורים ב-HTTP/2",
     "html": "5 חיבורים ב-HTTP 1.1 ו-5 חיבורים ב-HTTP/2"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "med",
   "explanation": "ב-HTTP/2 כל הבקשות לאותו שרת עוברות במקביל (multiplexing) על חיבור TCP אחד בלבד, ולכן רק תשובה א אפשרית: בכל שאר התשובות יש יותר מחיבור אחד ב-HTTP/2.\nב-HTTP 1.1 כל חיבור מטפל בבקשה אחת בכל פעם, ולכן הדפדפן פותח כמה חיבורים מקבילים לשרת - בדרך כלל עד 6. כך 100 המשאבים מתחלקים ל-$\\lceil 100/6 \\rceil = 17$ סבבים של בקשות.\nהערה: השאלה אינה מציינת את מספר החיבורים המקבילים. המספר 17 מבוסס על המוסכמה של 6 חיבורים מקבילים, ובפועל הוא מספר סבבי הבקשות: עם חיבורים מתמשכים (persistent) נפתחים 6 חיבורים, שכל אחד מהם משמש לכ-17 בקשות.",
   "note": "Official yellow key; 17 = ceil(100/6) request rounds under the 6-parallel-connection convention (not printed) - explained in a הערה; HTTP/2 half decides the item. Arbiter 2026-10-24.",
   "id": "25A-C-Q1",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "נתון אתר אינטרנט עם 100 משאבים שונים (תמונות, סקריפטים וכו'). כל משאב בגודל KB 100. חשב את מספר חיבורי ה-TCP הדרושים ב-HTTP 1.1 וב-HTTP/2 להורדת כל המשאבים.",
   "explanationHtml": "ב-HTTP/2 כל הבקשות לאותו שרת עוברות במקביל (multiplexing) על חיבור TCP אחד בלבד, ולכן רק תשובה א אפשרית: בכל שאר התשובות יש יותר מחיבור אחד ב-HTTP/2.<br>ב-HTTP 1.1 כל חיבור מטפל בבקשה אחת בכל פעם, ולכן הדפדפן פותח כמה חיבורים מקבילים לשרת - בדרך כלל עד 6. כך 100 המשאבים מתחלקים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">⌈</mo><mn>100</mn><mi mathvariant=\"normal\">/</mi><mn>6</mn><mo stretchy=\"false\">⌉</mo><mo>=</mo><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">\\lceil 100/6 \\rceil = 17</annotation></semantics></math></span> סבבים של בקשות.<br>הערה: השאלה אינה מציינת את מספר החיבורים המקבילים. המספר 17 מבוסס על המוסכמה של 6 חיבורים מקבילים, ובפועל הוא מספר סבבי הבקשות: עם חיבורים מתמשכים (persistent) נפתחים 6 חיבורים, שכל אחד מהם משמש לכ-17 בקשות.",
   "dedupKey": "0728f88513398e2c"
  },
  {
   "num": 2,
   "topic": "dns_dhcp",
   "question": "בהינתן שרת DNS עם זמן תגובה ממוצע של 30 מילי-שניות לכל פנייה, כמה זמן יידרש בממוצע לשלוף רשומה שאינה בזיכרון המטמון?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "90ms",
     "html": "90ms"
    },
    {
     "id": "b",
     "type": "text",
     "value": "30ms",
     "html": "30ms"
    },
    {
     "id": "c",
     "type": "text",
     "value": "60ms",
     "html": "60ms"
    },
    {
     "id": "d",
     "type": "text",
     "value": "120ms",
     "html": "120ms"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "med",
   "explanation": "כשהרשומה אינה במטמון, השרת פונה בשאילתות עוקבות: שרת ה-Root, אחריו שרת ה-TLD ולבסוף השרת האוטוריטטיבי. כל שאילתה נמשכת 30ms, ולכן $3\\cdot 30=90\\,\\text{ms}$.\nהנחה: סופרים רק את שלוש השאילתות האלה. אם סופרים גם את הפנייה הראשונה של הלקוח אל ה-Resolver המקומי מתקבלים $4\\cdot 30=120\\,\\text{ms}$ (אפשרות ד), אבל הפתרון הצפוי בשאלה הוא 90ms.\n30ms ו-60ms מניחים שאילתה אחת או שתיים בלבד, שאינן מספיקות כדי להגיע לשרת האוטוריטטיבי.",
   "note": "Official yellow key (90ms); the question does not say how many servers are queried (root, TLD, authoritative is the implied three).",
   "id": "25A-C-Q2",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "בהינתן שרת DNS עם זמן תגובה ממוצע של 30 מילי-שניות לכל פנייה, כמה זמן יידרש בממוצע לשלוף רשומה שאינה בזיכרון המטמון?",
   "explanationHtml": "כשהרשומה אינה במטמון, השרת פונה בשאילתות עוקבות: שרת ה-Root, אחריו שרת ה-TLD ולבסוף השרת האוטוריטטיבי. כל שאילתה נמשכת 30ms, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>30</mn><mo>=</mo><mn>90</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">3\\cdot 30=90\\,\\text{ms}</annotation></semantics></math></span>.<br>הנחה: סופרים רק את שלוש השאילתות האלה. אם סופרים גם את הפנייה הראשונה של הלקוח אל ה-Resolver המקומי מתקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>⋅</mo><mn>30</mn><mo>=</mo><mn>120</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">4\\cdot 30=120\\,\\text{ms}</annotation></semantics></math></span> (אפשרות ד), אבל הפתרון הצפוי בשאלה הוא 90ms.<br>30ms ו-60ms מניחים שאילתה אחת או שתיים בלבד, שאינן מספיקות כדי להגיע לשרת האוטוריטטיבי.",
   "dedupKey": "37475b55c259943d"
  },
  {
   "num": 3,
   "topic": "delays",
   "question": "במערכת רשת הכוללת שלושה קישורים טוריים עם רוחבי פס של 100 Mbps, 50 Mbps ו-10 Mbps, וגודל חבילה של 5000 ביטים, חשב את זמן ההשהייה הכולל אם מהירות ההפצה היא $2\\cdot 10^{8}$ m/s ואורך כל קישור הוא 1000 ק\"מ.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "5ms",
     "html": "5ms"
    },
    {
     "id": "b",
     "type": "text",
     "value": "10ms",
     "html": "10ms"
    },
    {
     "id": "c",
     "type": "text",
     "value": "15ms",
     "html": "15ms"
    },
    {
     "id": "d",
     "type": "text",
     "value": "20ms",
     "html": "20ms"
    }
   ],
   "correctId": "c",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הפתרון הרשמי עם תיקון: בדף מסומנת התשובה 10ms, אך לפי הנתונים המודפסים זמן ההשהייה הוא כ-15.65ms, והתשובה הקרובה ביותר היא 15ms.\nהשהיית התפשטות: כל קישור באורך $1000\\,\\text{km}$, ולכן $\\frac{10^{6}\\,\\text{m}}{2\\cdot 10^{8}\\,\\text{m/s}}=5\\,\\text{ms}$ לקישור, ובשלושה קישורים $15\\,\\text{ms}$.\nהשהיית שידור (Store-and-Forward, בכל קישור מחדש): $\\frac{5000}{10^{8}}+\\frac{5000}{5\\cdot 10^{7}}+\\frac{5000}{10^{7}}=0.05+0.1+0.5=0.65\\,\\text{ms}$.\nסך הכול $15+0.65=15.65\\,\\text{ms}\\approx 15\\,\\text{ms}$. כבר השהיית ההתפשטות לבדה (15ms) גדולה מ-10ms, ולכן 10ms אינו אפשרי לפי נתוני השאלה.",
   "note": "Official yellow key b (10ms) contradicts the printed data (15.65 ms); typo ruling, key = nearest option c. Arbiter 2026-10-24.",
   "id": "25A-C-Q3",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "במערכת רשת הכוללת שלושה קישורים טוריים עם רוחבי פס של 100 Mbps, 50 Mbps ו-10 Mbps, וגודל חבילה של 5000 ביטים, חשב את זמן ההשהייה הכולל אם מהירות ההפצה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot 10^{8}</annotation></semantics></math></span> m/s ואורך כל קישור הוא 1000 ק\"מ.",
   "explanationHtml": "הפתרון הרשמי עם תיקון: בדף מסומנת התשובה 10ms, אך לפי הנתונים המודפסים זמן ההשהייה הוא כ-15.65ms, והתשובה הקרובה ביותר היא 15ms.<br>השהיית התפשטות: כל קישור באורך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1000</mn><mtext> </mtext><mtext>km</mtext></mrow><annotation encoding=\"application/x-tex\">1000\\,\\text{km}</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><msup><mn>10</mn><mn>6</mn></msup><mtext> </mtext><mtext>m</mtext></mrow><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mtext> </mtext><mtext>m/s</mtext></mrow></mfrac><mo>=</mo><mn>5</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">\\frac{10^{6}\\,\\text{m}}{2\\cdot 10^{8}\\,\\text{m/s}}=5\\,\\text{ms}</annotation></semantics></math></span> לקישור, ובשלושה קישורים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">15\\,\\text{ms}</annotation></semantics></math></span>.<br>השהיית שידור (Store-and-Forward, בכל קישור מחדש): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>5000</mn><msup><mn>10</mn><mn>8</mn></msup></mfrac><mo>+</mo><mfrac><mn>5000</mn><mrow><mn>5</mn><mo>⋅</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>5000</mn><msup><mn>10</mn><mn>7</mn></msup></mfrac><mo>=</mo><mn>0.05</mn><mo>+</mo><mn>0.1</mn><mo>+</mo><mn>0.5</mn><mo>=</mo><mn>0.65</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">\\frac{5000}{10^{8}}+\\frac{5000}{5\\cdot 10^{7}}+\\frac{5000}{10^{7}}=0.05+0.1+0.5=0.65\\,\\text{ms}</annotation></semantics></math></span>.<br>סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>15</mn><mo>+</mo><mn>0.65</mn><mo>=</mo><mn>15.65</mn><mtext> </mtext><mtext>ms</mtext><mo>≈</mo><mn>15</mn><mtext> </mtext><mtext>ms</mtext></mrow><annotation encoding=\"application/x-tex\">15+0.65=15.65\\,\\text{ms}\\approx 15\\,\\text{ms}</annotation></semantics></math></span>. כבר השהיית ההתפשטות לבדה (15ms) גדולה מ-10ms, ולכן 10ms אינו אפשרי לפי נתוני השאלה.",
   "dedupKey": "1f5d93366ba16aca"
  },
  {
   "num": 4,
   "topic": "tcp",
   "question": "מהי מטרת מנגנון ה-Slow Start בפרוטוקול TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "למנוע הצפה של הרשת על ידי שמירה על קצב גידול מהיר יחסית בגודל החלון",
     "html": "למנוע הצפה של הרשת על ידי שמירה על קצב גידול מהיר יחסית בגודל החלון"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לשמור על גודל חלון קבוע בתהליך שליחת החבילות כדי למנוע עומס",
     "html": "לשמור על גודל חלון קבוע בתהליך שליחת החבילות כדי למנוע עומס"
    },
    {
     "id": "c",
     "type": "text",
     "value": "להבטיח שחבילות יגיעו ליעד ללא אובדן כלל תוך שמירה על קצב שליחה קבוע",
     "html": "להבטיח שחבילות יגיעו ליעד ללא אובדן כלל תוך שמירה על קצב שליחה קבוע"
    },
    {
     "id": "d",
     "type": "text",
     "value": "למנוע קפיצה מיידית למהירות העברת הנתונים המרבית",
     "html": "למנוע קפיצה מיידית למהירות העברת הנתונים המרבית"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "Slow Start מתחיל בחלון עומס קטן (cwnd = 1 MSS) ומכפיל אותו בכל RTT. כך TCP לא שולח מיד חלון מלא שעלול להציף את הרשת, ועדיין מגיע במהירות (גידול מעריכי) לקצב שהרשת מסוגלת לשאת, עד ssthresh או עד איבוד חבילה.\nב שגויה: החלון אינו קבוע. ג שגויה: Slow Start אינו מבטיח מסירה ללא אובדן.\nהערה: המפתח הרשמי הוא א. גם ד מתארת נכון את Slow Start (התחלה בחלון קטן במקום קפיצה מיידית לקצב המרבי), ולכן גם היא מתקבלת כנכונה.",
   "acceptedIds": [
    "a",
    "d"
   ],
   "note": "Official key a; d also accepted (correct description of slow start) - arbiter 2026-10-24, ASK_ADIR open.",
   "id": "25A-C-Q4",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "מהי מטרת מנגנון ה-Slow Start בפרוטוקול TCP?",
   "explanationHtml": "Slow Start מתחיל בחלון עומס קטן (cwnd = 1 MSS) ומכפיל אותו בכל RTT. כך TCP לא שולח מיד חלון מלא שעלול להציף את הרשת, ועדיין מגיע במהירות (גידול מעריכי) לקצב שהרשת מסוגלת לשאת, עד ssthresh או עד איבוד חבילה.<br>ב שגויה: החלון אינו קבוע. ג שגויה: Slow Start אינו מבטיח מסירה ללא אובדן.<br>הערה: המפתח הרשמי הוא א. גם ד מתארת נכון את Slow Start (התחלה בחלון קטן במקום קפיצה מיידית לקצב המרבי), ולכן גם היא מתקבלת כנכונה.",
   "dedupKey": "eaeb7a5c237efb86"
  },
  {
   "num": 5,
   "topic": "delays",
   "question": "מה קורה כאשר תור בנתב מתמלא עקב עומס יתר?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "חבילות חדשות נזרקות (packet loss)",
     "html": "חבילות חדשות נזרקות (packet loss)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "הנתב מפסיק לעבוד לחלוטין",
     "html": "הנתב מפסיק לעבוד לחלוטין"
    },
    {
     "id": "c",
     "type": "text",
     "value": "הנתב מתחיל להעביר חבילות לאיטיות רבה",
     "html": "הנתב מתחיל להעביר חבילות לאיטיות רבה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "הנתב מפעיל באופן אוטומטי חיבור גיבוי",
     "html": "הנתב מפעיל באופן אוטומטי חיבור גיבוי"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "לתור בנתב יש גודל סופי. כשהוא מתמלא, חבילה חדשה שמגיעה אין לה מקום והנתב זורק אותה (packet loss, בדרך כלל tail drop). האובדן הוא אות העומס ש-TCP מגיב אליו.\nב: הנתב ממשיך לעבוד. ג: הנתב אינו מאט את ההעברה, הוא פשוט זורק חבילות שלא נכנסות. ד: אין \"חיבור גיבוי\" אוטומטי כתגובה למילוי תור.",
   "id": "25A-C-Q5",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מה קורה כאשר תור בנתב מתמלא עקב עומס יתר?",
   "explanationHtml": "לתור בנתב יש גודל סופי. כשהוא מתמלא, חבילה חדשה שמגיעה אין לה מקום והנתב זורק אותה (packet loss, בדרך כלל tail drop). האובדן הוא אות העומס ש-TCP מגיב אליו.<br>ב: הנתב ממשיך לעבוד. ג: הנתב אינו מאט את ההעברה, הוא פשוט זורק חבילות שלא נכנסות. ד: אין \"חיבור גיבוי\" אוטומטי כתגובה למילוי תור.",
   "dedupKey": "05b63563a6b2c9d1"
  },
  {
   "num": 6,
   "topic": "delays",
   "question": "במערכת תקשורת, אם עיכוב העיבוד (Processing Delay) גבוה משמעותית מהעיכוב ההולכה (Transmission Delay), מה מהבאים הוא הסבר סביר לכך?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "רוחב הפס של הקו נמוך מאוד",
     "html": "רוחב הפס של הקו נמוך מאוד"
    },
    {
     "id": "b",
     "type": "text",
     "value": "הנתב עמוס או בעל יכולת עיבוד נמוכה",
     "html": "הנתב עמוס או בעל יכולת עיבוד נמוכה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "המרחק הפיזי בין התחנות גדול מאוד",
     "html": "המרחק הפיזי בין התחנות גדול מאוד"
    },
    {
     "id": "d",
     "type": "text",
     "value": "נעשה שימוש בפרוטוקול UDP במקום TCP",
     "html": "נעשה שימוש בפרוטוקול UDP במקום TCP"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "השהיית עיבוד (processing) היא הזמן שהנתב משקיע בבדיקת הכותרת, בחירת הנתיב וניהול התור. אם היא גבוהה בהרבה מהשהיית השידור, ההסבר הסביר הוא שהנתב עמוס או חלש ולכן מעבד לאט.\nא: רוחב פס נמוך מגדיל דווקא את השהיית השידור $L/R$ ולא את העיבוד. ג: מרחק גדול מגדיל את השהיית ההתפשטות. ד: בחירת UDP או TCP אינה משנה את זמן העיבוד בנתב.",
   "id": "25A-C-Q6",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "במערכת תקשורת, אם עיכוב העיבוד (Processing Delay) גבוה משמעותית מהעיכוב ההולכה (Transmission Delay), מה מהבאים הוא הסבר סביר לכך?",
   "explanationHtml": "השהיית עיבוד (processing) היא הזמן שהנתב משקיע בבדיקת הכותרת, בחירת הנתיב וניהול התור. אם היא גבוהה בהרבה מהשהיית השידור, ההסבר הסביר הוא שהנתב עמוס או חלש ולכן מעבד לאט.<br>א: רוחב פס נמוך מגדיל דווקא את השהיית השידור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>L</mi><mi mathvariant=\"normal\">/</mi><mi>R</mi></mrow><annotation encoding=\"application/x-tex\">L/R</annotation></semantics></math></span> ולא את העיבוד. ג: מרחק גדול מגדיל את השהיית ההתפשטות. ד: בחירת UDP או TCP אינה משנה את זמן העיבוד בנתב.",
   "dedupKey": "5bdb5f2f07115749"
  },
  {
   "num": 7,
   "topic": "tcp",
   "question": "באילו תנאים יבחר פרוטוקול TCP להקטין את גודל חלון השליחה (Congestion Window)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כאשר מתקבלת הודעת ACK תוך זמן קצר מהצפוי או מתקבלת הודעת איבוד מנות",
     "html": "כאשר מתקבלת הודעת ACK תוך זמן קצר מהצפוי או מתקבלת הודעת איבוד מנות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כאשר לא מתקבלת תגובה תוך Timeout",
     "html": "כאשר לא מתקבלת תגובה תוך Timeout"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כאשר הקו פנוי לחלוטין ואין עומסים",
     "html": "כאשר הקו פנוי לחלוטין ואין עומסים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כאשר מנות נשלחות בסדר לא נכון",
     "html": "כאשר מנות נשלחות בסדר לא נכון"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "TCP מקטין את חלון העומס כשהוא מזהה עומס, והסימן הברור לכך הוא היעדר תגובה: כשלא מתקבל ACK תוך Timeout, החבילה כנראה אבדה בגלל עומס, ו-TCP מקטין את החלון (בדרך כלל חזרה ל-1 MSS) ומקטין את ssthresh.\nא: ACK שמגיע מהר מהצפוי מעיד שאין עומס, ולכן החלון דווקא גדל. ג: כשהקו פנוי החלון גדל ולא קטן. ד: הגעה בסדר שגוי אינה סימן לעומס בפני עצמה (TCP מסדר מחדש אצל המקבל).",
   "id": "25A-C-Q7",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "באילו תנאים יבחר פרוטוקול TCP להקטין את גודל חלון השליחה (Congestion Window)?",
   "explanationHtml": "TCP מקטין את חלון העומס כשהוא מזהה עומס, והסימן הברור לכך הוא היעדר תגובה: כשלא מתקבל ACK תוך Timeout, החבילה כנראה אבדה בגלל עומס, ו-TCP מקטין את החלון (בדרך כלל חזרה ל-1 MSS) ומקטין את ssthresh.<br>א: ACK שמגיע מהר מהצפוי מעיד שאין עומס, ולכן החלון דווקא גדל. ג: כשהקו פנוי החלון גדל ולא קטן. ד: הגעה בסדר שגוי אינה סימן לעומס בפני עצמה (TCP מסדר מחדש אצל המקבל).",
   "dedupKey": "5b9ce1a0856661c1"
  },
  {
   "num": 8,
   "topic": "link_layer",
   "question": "ברשת Ethernet, מה מהבאים אינו מתבצע כחלק מתפקידי שכבת הקו?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "זיהוי התנגשות מנות וטיפול בה (Collision Detection)",
     "html": "זיהוי התנגשות מנות וטיפול בה (Collision Detection)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "חלוקת כתובות IP ייחודיות למכשירים ברשת",
     "html": "חלוקת כתובות IP ייחודיות למכשירים ברשת"
    },
    {
     "id": "c",
     "type": "text",
     "value": "קביעת מסגרות (Framing) של המידע בחבילות בעלות התחלה וסיום ברורים",
     "html": "קביעת מסגרות (Framing) של המידע בחבילות בעלות התחלה וסיום ברורים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "זיהוי שגיאות באמצעות סיכום בדיקה (Checksum)",
     "html": "זיהוי שגיאות באמצעות סיכום בדיקה (Checksum)"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "שכבת הקו אחראית על העברת מסגרות בין שני צמתים סמוכים: מסגור (Framing), זיהוי שגיאות (CRC/Checksum) וטיפול בגישה לערוץ, כולל זיהוי התנגשויות ב-Ethernet.\nהקצאת כתובות IP היא עניין של שכבת הרשת (ושל DHCP בשכבת האפליקציה), ולכן ב היא מה שאינו מתבצע בשכבת הקו.",
   "id": "25A-C-Q8",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "ברשת Ethernet, מה מהבאים אינו מתבצע כחלק מתפקידי שכבת הקו?",
   "explanationHtml": "שכבת הקו אחראית על העברת מסגרות בין שני צמתים סמוכים: מסגור (Framing), זיהוי שגיאות (CRC/Checksum) וטיפול בגישה לערוץ, כולל זיהוי התנגשויות ב-Ethernet.<br>הקצאת כתובות IP היא עניין של שכבת הרשת (ושל DHCP בשכבת האפליקציה), ולכן ב היא מה שאינו מתבצע בשכבת הקו.",
   "dedupKey": "3d28fb2ec4861c5c"
  },
  {
   "num": 9,
   "topic": "dns_dhcp",
   "question": "מה תפקידו העיקרי של פרוטוקול ARP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "להצפין חבילות מידע",
     "html": "להצפין חבילות מידע"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לתרגם כתובת IP לכתובת MAC",
     "html": "לתרגם כתובת IP לכתובת MAC"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לנהל חיבורים מוצפנים",
     "html": "לנהל חיבורים מוצפנים"
    },
    {
     "id": "d",
     "type": "text",
     "value": "להקצות כתובות IP חדשות",
     "html": "להקצות כתובות IP חדשות"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ARP (Address Resolution Protocol) מתרגם כתובת IP ידועה לכתובת MAC באותה רשת מקומית: התחנה משדרת בקשה לכולם, והבעלים של ה-IP עונה עם כתובת ה-MAC שלו.\nא ו-ג עוסקות בהצפנה, ד היא תפקיד של DHCP.",
   "id": "25A-C-Q9",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מה תפקידו העיקרי של פרוטוקול ARP?",
   "explanationHtml": "ARP (Address Resolution Protocol) מתרגם כתובת IP ידועה לכתובת MAC באותה רשת מקומית: התחנה משדרת בקשה לכולם, והבעלים של ה-IP עונה עם כתובת ה-MAC שלו.<br>א ו-ג עוסקות בהצפנה, ד היא תפקיד של DHCP.",
   "dedupKey": "6dd0a568321f9cd3"
  },
  {
   "num": 10,
   "topic": "tcp",
   "question": "באיזה מצב תתרחש קריסת חלון TCP (TCP Window Collapse)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כאשר אין מספיק רוחב פס",
     "html": "כאשר אין מספיק רוחב פס"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כאשר הרשת ריקה ממנות",
     "html": "כאשר הרשת ריקה ממנות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כאשר מתקבלות שגיאות מרובות או עומס גבוה",
     "html": "כאשר מתקבלות שגיאות מרובות או עומס גבוה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "כאשר הנתב מפעיל פרוטוקול גיבוי",
     "html": "כאשר הנתב מפעיל פרוטוקול גיבוי"
    }
   ],
   "correctId": "c",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "קריסת חלון (window collapse) קורית כשיש עומס גבוה או שגיאות רבות: חבילות אובדות, מתרחש Timeout, וחלון העומס יורד בבת אחת (בדרך כלל ל-1 MSS) ואז מתחילים שוב מ-Slow Start.\nא: רוחב פס נמוך מגביל את הקצב אך אינו גורם לקריסה מיידית. ב: ברשת ריקה החלון גדל. ד: פרוטוקול גיבוי של הנתב אינו קשור.",
   "id": "25A-C-Q10",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "באיזה מצב תתרחש קריסת חלון TCP (TCP Window Collapse)?",
   "explanationHtml": "קריסת חלון (window collapse) קורית כשיש עומס גבוה או שגיאות רבות: חבילות אובדות, מתרחש Timeout, וחלון העומס יורד בבת אחת (בדרך כלל ל-1 MSS) ואז מתחילים שוב מ-Slow Start.<br>א: רוחב פס נמוך מגביל את הקצב אך אינו גורם לקריסה מיידית. ב: ברשת ריקה החלון גדל. ד: פרוטוקול גיבוי של הנתב אינו קשור.",
   "dedupKey": "dbd173a556c9043a"
  },
  {
   "num": 11,
   "topic": "nat_ipv6_icmp",
   "question": "באיזה פרוטוקול משתמשים בעיקר לשליחת הודעות שגיאה ברשת IP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "TCP",
     "html": "TCP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "UDP",
     "html": "UDP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ICMP",
     "html": "ICMP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "HTTP",
     "html": "HTTP"
    }
   ],
   "correctId": "c",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ICMP (Internet Control Message Protocol) משמש לשליחת הודעות שגיאה ובקרה ברשת IP, למשל Destination Unreachable ו-Time Exceeded.\nTCP ו-UDP הם פרוטוקולי תעבורה שנושאים נתוני אפליקציה, ו-HTTP הוא פרוטוקול אפליקציה.",
   "id": "25A-C-Q11",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "באיזה פרוטוקול משתמשים בעיקר לשליחת הודעות שגיאה ברשת IP?",
   "explanationHtml": "ICMP (Internet Control Message Protocol) משמש לשליחת הודעות שגיאה ובקרה ברשת IP, למשל Destination Unreachable ו-Time Exceeded.<br>TCP ו-UDP הם פרוטוקולי תעבורה שנושאים נתוני אפליקציה, ו-HTTP הוא פרוטוקול אפליקציה.",
   "dedupKey": "146c59f3a7590023"
  },
  {
   "num": 12,
   "topic": "delays",
   "question": "מה ההבדל העיקרי בין המושגים Bandwidth ו-Throughput בתקשורת נתונים?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Bandwidth מודד את זמני העיכוב, בעוד Throughput מודד את מספר החיבורים",
     "html": "Bandwidth מודד את זמני העיכוב, בעוד Throughput מודד את מספר החיבורים"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Bandwidth הוא הקיבולת התיאורטית המרבית של ערוץ, בעוד Throughput הוא קצב ההעברה בפועל",
     "html": "Bandwidth הוא הקיבולת התיאורטית המרבית של ערוץ, בעוד Throughput הוא קצב ההעברה בפועל"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Bandwidth מתייחס לדיוק הנתונים, בעוד Throughput מתייחס לאמינות החיבור",
     "html": "Bandwidth מתייחס לדיוק הנתונים, בעוד Throughput מתייחס לאמינות החיבור"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אין הבדל – אלו שני שמות לאותו המושג",
     "html": "אין הבדל – אלו שני שמות לאותו המושג"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "Bandwidth הוא הקיבולת התיאורטית המרבית של הערוץ (למשל 100 Mbps), ו-Throughput הוא הקצב שמושג בפועל, והוא בדרך כלל קטן יותר בגלל עומס, שגיאות, שליחות חוזרות ותקורה.\nא ו-ג מחליפים בין מושגים שאינם קשורים (עיכוב, אמינות), ו-ד שגויה כי יש הבדל.",
   "id": "25A-C-Q12",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מה ההבדל העיקרי בין המושגים Bandwidth ו-Throughput בתקשורת נתונים?",
   "explanationHtml": "Bandwidth הוא הקיבולת התיאורטית המרבית של הערוץ (למשל 100 Mbps), ו-Throughput הוא הקצב שמושג בפועל, והוא בדרך כלל קטן יותר בגלל עומס, שגיאות, שליחות חוזרות ותקורה.<br>א ו-ג מחליפים בין מושגים שאינם קשורים (עיכוב, אמינות), ו-ד שגויה כי יש הבדל.",
   "dedupKey": "28b2afd4e1e5f7ab"
  },
  {
   "num": 13,
   "topic": "intro_layers",
   "question": "איזה פרוטוקול משתמש במספרי יציאה (Port Numbers) כדי לנתב מידע?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP",
     "html": "IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "TCP",
     "html": "TCP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ICMP",
     "html": "ICMP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ARP",
     "html": "ARP"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "מספרי פורטים (Port Numbers) הם חלק מכותרת פרוטוקול התעבורה (TCP, וגם UDP), והם קובעים לאיזה תהליך אפליקציה לספק את הנתונים. מבין האפשרויות רק TCP הוא פרוטוקול תעבורה.\nIP מנתב לפי כתובות IP, ICMP נושא הודעות בקרה, ו-ARP מתרגם IP ל-MAC - אף אחד מהם אינו משתמש בפורטים.",
   "id": "25A-C-Q13",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "איזה פרוטוקול משתמש במספרי יציאה (Port Numbers) כדי לנתב מידע?",
   "explanationHtml": "מספרי פורטים (Port Numbers) הם חלק מכותרת פרוטוקול התעבורה (TCP, וגם UDP), והם קובעים לאיזה תהליך אפליקציה לספק את הנתונים. מבין האפשרויות רק TCP הוא פרוטוקול תעבורה.<br>IP מנתב לפי כתובות IP, ICMP נושא הודעות בקרה, ו-ARP מתרגם IP ל-MAC - אף אחד מהם אינו משתמש בפורטים.",
   "dedupKey": "a6a034a17f7148bf"
  },
  {
   "num": 14,
   "topic": "intro_layers",
   "question": "מהו תפקידה המרכזי של שכבת התעבורה (Transport Layer) במודל OSI, בעת תקשורת בין שני מחשבים ברשת?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לקבוע את המסלול שהחבילה תעבור בין התחנות ברשת, תוך התחשבות בנתבים ובטופולוגיה",
     "html": "לקבוע את המסלול שהחבילה תעבור בין התחנות ברשת, תוך התחשבות בנתבים ובטופולוגיה"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לספק שירותים של תקשורת קצה-לקצה, ניהול חיבורים, בקרת שגיאות ושליחת נתונים בצורה אמינה",
     "html": "לספק שירותים של תקשורת קצה-לקצה, ניהול חיבורים, בקרת שגיאות ושליחת נתונים בצורה אמינה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "להצפין את המידע כדי להבטיח אבטחת מידע במהלך ההעברה",
     "html": "להצפין את המידע כדי להבטיח אבטחת מידע במהלך ההעברה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לחלק רשת גדולה לתת-רשתות קטנות יותר באמצעות כתובות ותתי-מסכות",
     "html": "לחלק רשת גדולה לתת-רשתות קטנות יותר באמצעות כתובות ותתי-מסכות"
    }
   ],
   "correctId": "b",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "שכבת התעבורה מספקת תקשורת קצה-לקצה בין תהליכים: ניהול חיבורים, בקרת שגיאות ובקרת זרימה ועומס, ובפרוטוקול TCP גם שליחה אמינה.\nא: קביעת מסלול וניתוב היא תפקיד שכבת הרשת. ג: הצפנה אינה תפקידה המרכזי של שכבת התעבורה. ד: חלוקה לתת-רשתות באמצעות כתובות ומסכות היא עניין של שכבת הרשת.",
   "id": "25A-C-Q14",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "מהו תפקידה המרכזי של שכבת התעבורה (Transport Layer) במודל OSI, בעת תקשורת בין שני מחשבים ברשת?",
   "explanationHtml": "שכבת התעבורה מספקת תקשורת קצה-לקצה בין תהליכים: ניהול חיבורים, בקרת שגיאות ובקרת זרימה ועומס, ובפרוטוקול TCP גם שליחה אמינה.<br>א: קביעת מסלול וניתוב היא תפקיד שכבת הרשת. ג: הצפנה אינה תפקידה המרכזי של שכבת התעבורה. ד: חלוקה לתת-רשתות באמצעות כתובות ומסכות היא עניין של שכבת הרשת.",
   "dedupKey": "a7448d880b9482ad"
  },
  {
   "num": 15,
   "topic": "dns_dhcp",
   "question": "איזה פרוטוקול משמש להתאמת כתובת IP לכתובת MAC?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "DNS",
     "html": "DNS"
    },
    {
     "id": "b",
     "type": "text",
     "value": "HTTP",
     "html": "HTTP"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ARP",
     "html": "ARP"
    },
    {
     "id": "d",
     "type": "text",
     "value": "FTP",
     "html": "FTP"
    }
   ],
   "correctId": "c",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "ARP מתאים כתובת IP לכתובת MAC ברשת המקומית.\nDNS מתרגם שמות לכתובות IP, HTTP מעביר דפי אינטרנט ו-FTP מעביר קבצים - אף אחד מהם אינו קשור לכתובות MAC.",
   "id": "25A-C-Q15",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "איזה פרוטוקול משמש להתאמת כתובת IP לכתובת MAC?",
   "explanationHtml": "ARP מתאים כתובת IP לכתובת MAC ברשת המקומית.<br>DNS מתרגם שמות לכתובות IP, HTTP מעביר דפי אינטרנט ו-FTP מעביר קבצים - אף אחד מהם אינו קשור לכתובות MAC.",
   "dedupKey": "2591e4e3b0b49cfd"
  },
  {
   "num": 16,
   "topic": "tcp",
   "question": "כיצד גודל החלון משפיע על ביצועי העברת הנתונים ב-TCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "קובע כמה נתונים ניתן לשלוח לפני קבלת אישור מהנמען",
     "html": "קובע כמה נתונים ניתן לשלוח לפני קבלת אישור מהנמען"
    },
    {
     "id": "b",
     "type": "text",
     "value": "מגדיר את מספר הנתבים שניתן לעבור דרכם",
     "html": "מגדיר את מספר הנתבים שניתן לעבור דרכם"
    },
    {
     "id": "c",
     "type": "text",
     "value": "משמש להצפנת המידע המועבר",
     "html": "משמש להצפנת המידע המועבר"
    },
    {
     "id": "d",
     "type": "text",
     "value": "מגביל את מספר החיבורים לרשת",
     "html": "מגביל את מספר החיבורים לרשת"
    }
   ],
   "correctId": "a",
   "answerSource": "highlighted-pdf",
   "official": true,
   "confidence": "high",
   "explanation": "חלון TCP קובע כמה נתונים השולח רשאי לשלוח לפני שהוא חייב להמתין לאישור (ACK) מהנמען. חלון גדול יותר מאפשר לשלוח יותר נתונים ברצף, מנצל טוב יותר את הקו ומשפר את התפוקה, בכפוף ל-rwnd ול-cwnd.\nב: מספר הנתבים בדרך אינו קשור לחלון. ג: החלון אינו משמש להצפנה. ד: החלון אינו מגביל את מספר החיבורים לרשת.",
   "note": "Printed a second time as question number 5 (the page numbers two questions 5); stored as num 16.",
   "id": "25A-C-Q16",
   "examCode": "25A-C",
   "examLabel": "2025 סמסטר א מועד ג",
   "year": 2025,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "כיצד גודל החלון משפיע על ביצועי העברת הנתונים ב-TCP?",
   "explanationHtml": "חלון TCP קובע כמה נתונים השולח רשאי לשלוח לפני שהוא חייב להמתין לאישור (ACK) מהנמען. חלון גדול יותר מאפשר לשלוח יותר נתונים ברצף, מנצל טוב יותר את הקו ומשפר את התפוקה, בכפוף ל-rwnd ול-cwnd.<br>ב: מספר הנתבים בדרך אינו קשור לחלון. ג: החלון אינו משמש להצפנה. ד: החלון אינו מגביל את מספר החיבורים לרשת.",
   "dedupKey": "432df047752ec5df"
  },
  {
   "num": 1,
   "topic": "dns_dhcp",
   "question": "לקוח מבצע שאילתת DNS עבור `www.shop.example.com`. ה-Resolver מקבל מה-Authoritative של `example.com` את הרשומות הבאות:\n`www.shop.example.com → A 192.0.2.10`\n`shop.example.com → NS ns1.shop.example.com`\n`ns1.shop.example.com → A 203.0.113.53`\nTTL של ה-NS: 86400\nTTL של ה-A של ה-nameserver: 300\nאיזו מהאפשרויות הבאות היא הכי נכונה לגבי התנהגות ה-Resolver?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ה-Resolver רשאי לשמור את ה-A של ה-nameserver במטמון, רק עד TTL שלו עצמו (300)",
     "html": "ה-Resolver רשאי לשמור את ה-A של ה-nameserver במטמון, רק עד TTL שלו עצמו (300)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ה-Resolver חייב לשמור את ה-A של ה-nameserver במטמון לפי TTL של ה-NS - (86400)",
     "html": "ה-Resolver חייב לשמור את ה-A של ה-nameserver במטמון לפי TTL של ה-NS - (86400)"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ה-Resolver חייב להתעלם מה-A של ה-nameserver ולבצע שאילתה חדשה בכל פעם",
     "html": "ה-Resolver חייב להתעלם מה-A של ה-nameserver ולבצע שאילתה חדשה בכל פעם"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ה-Resolver אסור לו לשמור את ה-A של ה-nameserver במטמון בכלל",
     "html": "ה-Resolver אסור לו לשמור את ה-A של ה-nameserver במטמון בכלל"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "לכל רשומה ב-DNS יש TTL משלה, והמטמון מכבד את ה-TTL של כל רשומה בנפרד.\nא: נכון - ה-A של ה-nameserver נשמרת במטמון לכל היותר 300 שניות, ואחר כך פגה (גם אם ה-NS עדיין תקפה).\nב: שגוי - ה-TTL של ה-NS חל על רשומת ה-NS בלבד ואינו מאריך את חיי ה-A, וגם \"חייב\" אינו נכון: המטמון רשאי, לא חייב.\nג: שגוי - אין חובה להתעלם מהרשומה; שמירה במטמון היא בדיוק מטרת ה-TTL.\nד: שגוי - אין איסור על שמירה במטמון.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q1",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "לקוח מבצע שאילתת DNS עבור <code class=\"tok\" dir=\"ltr\">www.shop.example.com</code>. ה-Resolver מקבל מה-Authoritative של <code class=\"tok\" dir=\"ltr\">example.com</code> את הרשומות הבאות:<br><code class=\"tok\" dir=\"ltr\">www.shop.example.com → A 192.0.2.10</code><br><code class=\"tok\" dir=\"ltr\">shop.example.com → NS ns1.shop.example.com</code><br><code class=\"tok\" dir=\"ltr\">ns1.shop.example.com → A 203.0.113.53</code><br>TTL של ה-NS: 86400<br>TTL של ה-A של ה-nameserver: 300<br>איזו מהאפשרויות הבאות היא הכי נכונה לגבי התנהגות ה-Resolver?",
   "explanationHtml": "לכל רשומה ב-DNS יש TTL משלה, והמטמון מכבד את ה-TTL של כל רשומה בנפרד.<br>א: נכון - ה-A של ה-nameserver נשמרת במטמון לכל היותר 300 שניות, ואחר כך פגה (גם אם ה-NS עדיין תקפה).<br>ב: שגוי - ה-TTL של ה-NS חל על רשומת ה-NS בלבד ואינו מאריך את חיי ה-A, וגם \"חייב\" אינו נכון: המטמון רשאי, לא חייב.<br>ג: שגוי - אין חובה להתעלם מהרשומה; שמירה במטמון היא בדיוק מטרת ה-TTL.<br>ד: שגוי - אין איסור על שמירה במטמון.",
   "dedupKey": "2d98d2b2ee9bb22e"
  },
  {
   "num": 2,
   "topic": "http",
   "question": "מהי הדרך להקטין זמן טעינת דף בפרוטוקול HTTP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "כל התשובות נכונות",
     "html": "כל התשובות נכונות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "שימוש בזיכרון local cache",
     "html": "שימוש בזיכרון local cache"
    },
    {
     "id": "c",
     "type": "text",
     "value": "שימוש בשרתי web cache",
     "html": "שימוש בשרתי web cache"
    },
    {
     "id": "d",
     "type": "text",
     "value": "שימוש ב-CDN",
     "html": "שימוש ב-CDN"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כל שלושת המנגנונים מקצרים את זמן הטעינה: מטמון מקומי בדפדפן (אין פנייה לרשת כלל), שרת Web cache / proxy (עונה במקום השרת המקורי, קרוב ללקוח) ו-CDN (תוכן משוכפל בשרתים קרובים ללקוח, RTT קטן יותר).\nלכן \"כל התשובות נכונות\".",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q2",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "HTTP, עוגיות, מטמון ו-CDN",
   "questionHtml": "מהי הדרך להקטין זמן טעינת דף בפרוטוקול HTTP?",
   "explanationHtml": "כל שלושת המנגנונים מקצרים את זמן הטעינה: מטמון מקומי בדפדפן (אין פנייה לרשת כלל), שרת Web cache / proxy (עונה במקום השרת המקורי, קרוב ללקוח) ו-CDN (תוכן משוכפל בשרתים קרובים ללקוח, RTT קטן יותר).<br>לכן \"כל התשובות נכונות\".",
   "dedupKey": "b4188563e8d6c817"
  },
  {
   "num": 3,
   "topic": "intro_layers",
   "question": "מהו תפקיד של שכבת התעבורה?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לספק שירותי תקשורת בין תהליכים הרצים בתחנות קצה שונות",
     "html": "לספק שירותי תקשורת בין תהליכים הרצים בתחנות קצה שונות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "לספק חיבור אמין בשני תהליכים הרצים בתחנות קצה שונות",
     "html": "לספק חיבור אמין בשני תהליכים הרצים בתחנות קצה שונות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "לספק שירותי ניתוב לשכבת היישום",
     "html": "לספק שירותי ניתוב לשכבת היישום"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שכבת התעבורה מספקת תקשורת לוגית בין תהליכים (דרך מספרי פורטים) בתחנות קצה שונות.\nב: אמינות היא שירות של TCP בלבד, לא של שכבת התעבורה בכלל (UDP אינו אמין), ולכן ההגדרה צרה מדי.\nג: ניתוב הוא תפקיד שכבת הרשת.\nד: שגוי, כי א נכונה.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q3",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "מבוא ומודל חמש השכבות",
   "questionHtml": "מהו תפקיד של שכבת התעבורה?",
   "explanationHtml": "שכבת התעבורה מספקת תקשורת לוגית בין תהליכים (דרך מספרי פורטים) בתחנות קצה שונות.<br>ב: אמינות היא שירות של TCP בלבד, לא של שכבת התעבורה בכלל (UDP אינו אמין), ולכן ההגדרה צרה מדי.<br>ג: ניתוב הוא תפקיד שכבת הרשת.<br>ד: שגוי, כי א נכונה.",
   "dedupKey": "e08a239a8a07bfc7"
  },
  {
   "num": 4,
   "topic": "dns_dhcp",
   "question": "האם ניתן להשתמש בפרוטוקול ARP במקום DHCP?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "לא ניתן להשתמש ב-ARP במקום DHCP",
     "html": "לא ניתן להשתמש ב-ARP במקום DHCP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "כן, ניתן להשתמש ב-ARP במקום DHCP להגדרת כתובות רשת לתחנות קצה",
     "html": "כן, ניתן להשתמש ב-ARP במקום DHCP להגדרת כתובות רשת לתחנות קצה"
    },
    {
     "id": "c",
     "type": "text",
     "value": "כן, אפשר להשתמש ב-broadcast של ARP כדי לשלוח הגדרות רשת לתחנות קצה",
     "html": "כן, אפשר להשתמש ב-broadcast של ARP כדי לשלוח הגדרות רשת לתחנות קצה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ARP מתרגם כתובת IP ידועה לכתובת MAC ברשת המקומית; הוא אינו מקצה כתובות ואינו מעביר הגדרות (מסכה, Gateway, DNS).\nDHCP הוא הפרוטוקול שמקצה כתובת IP והגדרות רשת. לכן אי אפשר להחליף את DHCP ב-ARP; ב ו-ג שגויות, ו-ד שגויה כי א נכונה.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q4",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "האם ניתן להשתמש בפרוטוקול ARP במקום DHCP?",
   "explanationHtml": "ARP מתרגם כתובת IP ידועה לכתובת MAC ברשת המקומית; הוא אינו מקצה כתובות ואינו מעביר הגדרות (מסכה, Gateway, DNS).<br>DHCP הוא הפרוטוקול שמקצה כתובת IP והגדרות רשת. לכן אי אפשר להחליף את DHCP ב-ARP; ב ו-ג שגויות, ו-ד שגויה כי א נכונה.",
   "dedupKey": "7b829e8415a59101"
  },
  {
   "num": 5,
   "topic": "dns_dhcp",
   "question": "קבלת כתובת IP באופן דינמי משרת DHCP בעת הצטרפות לרשת מתבצעת בסדר הבא:",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "`DHCP Discover -> DHCP Offer -> DHCP Request -> DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Discover -&gt; DHCP Offer -&gt; DHCP Request -&gt; DHCP ACK</code>"
    },
    {
     "id": "b",
     "type": "text",
     "value": "`DHCP Request -> DHCP Offer -> DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Request -&gt; DHCP Offer -&gt; DHCP ACK</code>"
    },
    {
     "id": "c",
     "type": "text",
     "value": "`DHCP Request -> DHCP ACK -> DHCP Discover -> DHCP Offer`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Request -&gt; DHCP ACK -&gt; DHCP Discover -&gt; DHCP Offer</code>"
    },
    {
     "id": "d",
     "type": "text",
     "value": "`DHCP Discover -> DHCP Request -> DHCP ACK`",
     "html": "<code class=\"tok\" dir=\"ltr\">DHCP Discover -&gt; DHCP Request -&gt; DHCP ACK</code>"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.\nב, ג: מתחילות ב-Request או משלבות הודעות בסדר הפוך; ד: חסר שלב ה-Offer.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q5",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "קבלת כתובת IP באופן דינמי משרת DHCP בעת הצטרפות לרשת מתבצעת בסדר הבא:",
   "explanationHtml": "הסדר התקני (DORA): הלקוח משדר Discover, השרת עונה Offer, הלקוח מבקש Request את ההצעה והשרת מאשר ב-ACK.<br>ב, ג: מתחילות ב-Request או משלבות הודעות בסדר הפוך; ד: חסר שלב ה-Offer.",
   "dedupKey": "77d665f07edc9618"
  },
  {
   "num": 6,
   "topic": "tcp",
   "question": "הגרף מייצג התפתחות תהליך בקרת עומסים של TCP לאורך הזמן. באילו נקודות זמן הפרוטוקול נכנס ל-Congestion Avoidance?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "4, 29, 35",
     "html": "4, 29, 35"
    },
    {
     "id": "b",
     "type": "text",
     "value": "24, 30",
     "html": "24, 30"
    },
    {
     "id": "c",
     "type": "text",
     "value": "1, 25, 31",
     "html": "1, 25, 31"
    },
    {
     "id": "d",
     "type": "text",
     "value": "אף תשובה לא נכונה",
     "html": "אף תשובה לא נכונה"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "ב-Slow Start החלון מוכפל בכל RTT, ובכניסה ל-Congestion Avoidance הוא עובר לגדול ב-1 בלבד בכל RTT. לכן נקודת הכניסה היא הנקודה שבה השיפוע משתנה מהכפלה לעלייה קבועה.\nבגרף: נקודות 1-4 הן $1,2,4,8$ ואחריהן $9,10,\\ldots$ (קו ישר) - כניסה ל-CA ב-4. אחרי ההפסד ב-24 (החלון חוזר ל-1): $1,2,4,8,16$ ואז $17$ - כניסה ב-29. אחרי ההפסד ב-30: $1,2,4,8,16$ ואז $17,18,\\ldots$ - כניסה ב-35.\n24 ו-30 הן נקודות ההפסד (שיא ואז צניחה), ו-1, 25, 31 הן תחילת Slow Start - לא CA.\nהערה: הגרף סכמטי ואינו עוקב במדויק אחרי ssthresh של TCP Reno. לפי Reno, אחרי ההפסד בזמן 24 (חלון 28) ה-ssthresh הוא $28/2=14$ והמעבר ל-CA היה כבר ב-14, ואחרי ההפסד בזמן 30 (חלון 17) ה-ssthresh היה כ-8; בגרף החלון ממשיך להכפיל עד 16 בשני המקרים. לכן קוראים את נקודות הכניסה לפי שינוי השיפוע בגרף (4, 29, 35), כפי שהשאלה מתכוונת.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "image": "images/exams/26A-A-Q6.png",
   "id": "26A-A-Q6",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "TCP: לחיצת יד, ACK, בקרת זרימה ועומס",
   "questionHtml": "הגרף מייצג התפתחות תהליך בקרת עומסים של TCP לאורך הזמן. באילו נקודות זמן הפרוטוקול נכנס ל-Congestion Avoidance?",
   "explanationHtml": "ב-Slow Start החלון מוכפל בכל RTT, ובכניסה ל-Congestion Avoidance הוא עובר לגדול ב-1 בלבד בכל RTT. לכן נקודת הכניסה היא הנקודה שבה השיפוע משתנה מהכפלה לעלייה קבועה.<br>בגרף: נקודות 1-4 הן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8</annotation></semantics></math></span> ואחריהן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>9</mn><mo separator=\"true\">,</mo><mn>10</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">9,10,\\ldots</annotation></semantics></math></span> (קו ישר) - כניסה ל-CA ב-4. אחרי ההפסד ב-24 (החלון חוזר ל-1): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16</annotation></semantics></math></span> ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn></mrow><annotation encoding=\"application/x-tex\">17</annotation></semantics></math></span> - כניסה ב-29. אחרי ההפסד ב-30: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>8</mn><mo separator=\"true\">,</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">1,2,4,8,16</annotation></semantics></math></span> ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>17</mn><mo separator=\"true\">,</mo><mn>18</mn><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">17,18,\\ldots</annotation></semantics></math></span> - כניסה ב-35.<br>24 ו-30 הן נקודות ההפסד (שיא ואז צניחה), ו-1, 25, 31 הן תחילת Slow Start - לא CA.<br>הערה: הגרף סכמטי ואינו עוקב במדויק אחרי ssthresh של TCP Reno. לפי Reno, אחרי ההפסד בזמן 24 (חלון 28) ה-ssthresh הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>28</mn><mi mathvariant=\"normal\">/</mi><mn>2</mn><mo>=</mo><mn>14</mn></mrow><annotation encoding=\"application/x-tex\">28/2=14</annotation></semantics></math></span> והמעבר ל-CA היה כבר ב-14, ואחרי ההפסד בזמן 30 (חלון 17) ה-ssthresh היה כ-8; בגרף החלון ממשיך להכפיל עד 16 בשני המקרים. לכן קוראים את נקודות הכניסה לפי שינוי השיפוע בגרף (4, 29, 35), כפי שהשאלה מתכוונת.",
   "dedupKey": "732481dcdc07c60e"
  },
  {
   "num": 7,
   "topic": "ip_cidr",
   "question": "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי $MTU=500\\,\\text{B}$, גודל ה-header הוא $20\\,\\text{B}$. מה נכון לגבי חבילה מספר 4 מתוך 5?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "Offset=180",
     "html": "Offset=180"
    },
    {
     "id": "b",
     "type": "text",
     "value": "Offset=200",
     "html": "Offset=200"
    },
    {
     "id": "c",
     "type": "text",
     "value": "Offset=400",
     "html": "Offset=400"
    },
    {
     "id": "d",
     "type": "text",
     "value": "Offset=1600",
     "html": "Offset=1600"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "בכל פרגמנט נשאר מקום ל-$500-20=480$ בתים של נתונים (כפולה של 8, כנדרש).\nהפרגמנט הרביעי מתחיל אחרי 3 פרגמנטים מלאים: $3\\cdot 480=1440$ בתים, ושדה ה-Offset נמדד ביחידות של 8 בתים: $1440/8=180$.\n(בסך הכול 5 פרגמנטים: 4 מלאים של 480 בתים ופרגמנט אחרון קטן.)\nשאר הערכים אינם אפשריים: Offset=200 פירושו $200\\cdot 8=1600$ בתים לפני הפרגמנט הרביעי, כלומר כ-533 בתים לפרגמנט - יותר ממה שה-MTU מאפשר; Offset=400 ו-Offset=1600 הם $3200$ ו-$12800$ בתים, מעבר לגודל החבילה כולה.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q7",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "חבילה בגודל 2000 Bytes עברה fragmentation ל-5 חבילות. נתון כי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>M</mi><mi>T</mi><mi>U</mi><mo>=</mo><mn>500</mn><mtext> </mtext><mtext>B</mtext></mrow><annotation encoding=\"application/x-tex\">MTU=500\\,\\text{B}</annotation></semantics></math></span>, גודל ה-header הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20</mn><mtext> </mtext><mtext>B</mtext></mrow><annotation encoding=\"application/x-tex\">20\\,\\text{B}</annotation></semantics></math></span>. מה נכון לגבי חבילה מספר 4 מתוך 5?",
   "explanationHtml": "בכל פרגמנט נשאר מקום ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>500</mn><mo>−</mo><mn>20</mn><mo>=</mo><mn>480</mn></mrow><annotation encoding=\"application/x-tex\">500-20=480</annotation></semantics></math></span> בתים של נתונים (כפולה של 8, כנדרש).<br>הפרגמנט הרביעי מתחיל אחרי 3 פרגמנטים מלאים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><mn>480</mn><mo>=</mo><mn>1440</mn></mrow><annotation encoding=\"application/x-tex\">3\\cdot 480=1440</annotation></semantics></math></span> בתים, ושדה ה-Offset נמדד ביחידות של 8 בתים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1440</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>180</mn></mrow><annotation encoding=\"application/x-tex\">1440/8=180</annotation></semantics></math></span>.<br>(בסך הכול 5 פרגמנטים: 4 מלאים של 480 בתים ופרגמנט אחרון קטן.)<br>שאר הערכים אינם אפשריים: Offset=200 פירושו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>200</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>1600</mn></mrow><annotation encoding=\"application/x-tex\">200\\cdot 8=1600</annotation></semantics></math></span> בתים לפני הפרגמנט הרביעי, כלומר כ-533 בתים לפרגמנט - יותר ממה שה-MTU מאפשר; Offset=400 ו-Offset=1600 הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3200</mn></mrow><annotation encoding=\"application/x-tex\">3200</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12800</mn></mrow><annotation encoding=\"application/x-tex\">12800</annotation></semantics></math></span> בתים, מעבר לגודל החבילה כולה.",
   "dedupKey": "3b61ae78fb91bf07"
  },
  {
   "num": 8,
   "topic": "dns_dhcp",
   "question": "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "IP, Subnet, Local DNS, Default Gateway IP",
     "html": "IP, Subnet, Local DNS, Default Gateway IP"
    },
    {
     "id": "b",
     "type": "text",
     "value": "IP, Router IP, Subnet, Root DNS",
     "html": "IP, Router IP, Subnet, Root DNS"
    },
    {
     "id": "c",
     "type": "text",
     "value": "IP, Router IP, Root DNS, Default Gateway",
     "html": "IP, Router IP, Root DNS, Default Gateway"
    },
    {
     "id": "d",
     "type": "text",
     "value": "IP, Default Gateway MAC address, Subnet, Local DNS",
     "html": "IP, Default Gateway MAC address, Subnet, Local DNS"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.\nב, ג: שרת DNS \"Root\" אינו מה שה-DHCP נותן (נותנים Resolver מקומי); ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q8",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "DNS, DHCP ו-ARP",
   "questionHtml": "מהם הנתונים שמספק שרת ה-DHCP לתחנה שפונה אליו?",
   "explanationHtml": "שרת DHCP מספק כתובת IP, מסכת רשת (Subnet), כתובת ה-IP של ה-Default Gateway וכתובת שרת ה-DNS המקומי.<br>ב, ג: שרת DNS \"Root\" אינו מה שה-DHCP נותן (נותנים Resolver מקומי); ד: כתובת MAC של ה-Gateway מתקבלת מ-ARP, לא מ-DHCP.",
   "dedupKey": "fc205b344b4d1ced"
  },
  {
   "num": 9,
   "topic": "ip_cidr",
   "question": "לאיזה מסלול תנותב החבילה אם כתובת היעד $25.36.67.5$ לפי טבלת הניתוב הבאה?\n`A: 25.36.0.0/16`\n`B: 25.36.128.0/20`\n`C: 25.36.64.0/20`\n`D: 20.0.0.0/8`",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "C",
     "html": "C"
    },
    {
     "id": "b",
     "type": "text",
     "value": "A",
     "html": "A"
    },
    {
     "id": "c",
     "type": "text",
     "value": "D",
     "html": "D"
    },
    {
     "id": "d",
     "type": "text",
     "value": "B",
     "html": "B"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "Longest Prefix Match: נבדוק אילו כניסות מתאימות לכתובת $25.36.67.5$.\nA: $25.36.0.0/16$ - מתאימה (שני הבתים הראשונים זהים). B: $25.36.128.0/20$ מכסה $25.36.128.0-25.36.143.255$ - לא כוללת 67. C: $25.36.64.0/20$ מכסה $25.36.64.0-25.36.79.255$ - כוללת את 67, והמסכה ארוכה יותר ($/20>/16$). D: $20.0.0.0/8$ - לא מתאימה.\nכלומר A ו-C מתאימות, והארוכה ביותר היא C.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q9",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "IP, CIDR, רשתות משנה ו-Longest Prefix",
   "questionHtml": "לאיזה מסלול תנותב החבילה אם כתובת היעד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span> לפי טבלת הניתוב הבאה?<br><code class=\"tok\" dir=\"ltr\">A: 25.36.0.0/16</code><br><code class=\"tok\" dir=\"ltr\">B: 25.36.128.0/20</code><br><code class=\"tok\" dir=\"ltr\">C: 25.36.64.0/20</code><br><code class=\"tok\" dir=\"ltr\">D: 20.0.0.0/8</code>",
   "explanationHtml": "Longest Prefix Match: נבדוק אילו כניסות מתאימות לכתובת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.67.5</mn></mrow><annotation encoding=\"application/x-tex\">25.36.67.5</annotation></semantics></math></span>.<br>A: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.0.0</mn><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">25.36.0.0/16</annotation></semantics></math></span> - מתאימה (שני הבתים הראשונים זהים). B: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.128.0</mn><mo>−</mo><mn>25.36.143.255</mn></mrow><annotation encoding=\"application/x-tex\">25.36.128.0-25.36.143.255</annotation></semantics></math></span> - לא כוללת 67. C: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mi mathvariant=\"normal\">/</mi><mn>20</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0/20</annotation></semantics></math></span> מכסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25.36.64.0</mn><mo>−</mo><mn>25.36.79.255</mn></mrow><annotation encoding=\"application/x-tex\">25.36.64.0-25.36.79.255</annotation></semantics></math></span> - כוללת את 67, והמסכה ארוכה יותר (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">/</mi><mn>20</mn><mo>&gt;</mo><mi mathvariant=\"normal\">/</mi><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">/20&gt;/16</annotation></semantics></math></span>). D: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>20.0.0.0</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">20.0.0.0/8</annotation></semantics></math></span> - לא מתאימה.<br>כלומר A ו-C מתאימות, והארוכה ביותר היא C.",
   "dedupKey": "63959b0f76bf8652"
  },
  {
   "num": 10,
   "topic": "link_layer",
   "question": "איזו מהטענות הבאות מתארת נכונה את ההבדל בין Ethernet Switch לבין IP Router?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "סוויץ' מעביר מסגרות (frame) וראוטר מעביר חבילות (datagrams)",
     "html": "סוויץ' מעביר מסגרות (frame) וראוטר מעביר חבילות (datagrams)"
    },
    {
     "id": "b",
     "type": "text",
     "value": "נתב מהיר יותר מסוויץ' כי הוא משתמש בכתובות לוגיות",
     "html": "נתב מהיר יותר מסוויץ' כי הוא משתמש בכתובות לוגיות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "נתבים מסוגלים לבדוק שגיאות על נתוני החבילה (datagram)",
     "html": "נתבים מסוגלים לבדוק שגיאות על נתוני החבילה (datagram)"
    },
    {
     "id": "d",
     "type": "text",
     "value": "לסוויץ' יש טבלת ניתוב כתובות (switch table)",
     "html": "לסוויץ' יש טבלת ניתוב כתובות (switch table)"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "סוויץ' פועל בשכבת הקו ומעביר מסגרות לפי כתובות MAC; נתב פועל בשכבת הרשת ומעביר datagrams לפי כתובות IP.\nב: אין קשר בין \"כתובות לוגיות\" למהירות, ובדרך כלל סוויץ' מהיר יותר. ג: גם סוויץ' בודק שגיאות במסגרת (FCS) - ואין זה ההבדל בין השניים.\nד: ל-switch יש \"switch table\" - אך זו טבלת העברה (למידה) ולא טבלת ניתוב, ולכן הניסוח שגוי ואינו ההבדל העיקרי.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q10",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "איזו מהטענות הבאות מתארת נכונה את ההבדל בין Ethernet Switch לבין IP Router?",
   "explanationHtml": "סוויץ' פועל בשכבת הקו ומעביר מסגרות לפי כתובות MAC; נתב פועל בשכבת הרשת ומעביר datagrams לפי כתובות IP.<br>ב: אין קשר בין \"כתובות לוגיות\" למהירות, ובדרך כלל סוויץ' מהיר יותר. ג: גם סוויץ' בודק שגיאות במסגרת (FCS) - ואין זה ההבדל בין השניים.<br>ד: ל-switch יש \"switch table\" - אך זו טבלת העברה (למידה) ולא טבלת ניתוב, ולכן הניסוח שגוי ואינו ההבדל העיקרי.",
   "dedupKey": "39c07b0adc2d260d"
  },
  {
   "num": 11,
   "topic": "delays",
   "question": "מהו זמן ההשהיה הכולל ברשת, אם ההשהיות בתוך הנתבים זניחות? מהירות ההתפשטות: $3\\cdot10^{8}$ m/s. גודל החבילה: 12000 ביט.",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "18 מילישניות",
     "html": "18 מילישניות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "36 מילישניות",
     "html": "36 מילישניות"
    },
    {
     "id": "c",
     "type": "text",
     "value": "100 מילישניות",
     "html": "100 מילישניות"
    },
    {
     "id": "d",
     "type": "text",
     "value": "1 מילישניות",
     "html": "1 מילישניות"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "לפי האיור, שלושה קישורים ברצף (Store-and-forward), ובכל קישור: $d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot 10^{8}}$.\nקישור 1: $\\frac{12000}{10^{9}}=12\\,\\mu s$, התפשטות $\\frac{2000}{3\\cdot10^{8}}\\approx 6.7\\,\\mu s$.\nקישור 2: $\\frac{12000}{10^{7}}=1.2\\,ms$, התפשטות $\\frac{5\\cdot10^{6}}{3\\cdot10^{8}}\\approx 16.67\\,ms$.\nקישור 3: $\\frac{12000}{10^{8}}=0.12\\,ms$, התפשטות $\\frac{3000}{3\\cdot10^{8}}=10\\,\\mu s$.\nסך הכול $\\approx 18.02\\,ms\\approx 18\\,ms$. האפשרויות 36, 100 ו-1 רחוקות מהערך שחושב.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees. Propagation speed printed as '3*108' (superscript lost in the text layer); 3*10^8 m/s reproduces the 18 ms option.",
   "image": "images/exams/26A-A-Q11.png",
   "id": "26A-A-Q11",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "השהיות, תפוקה ועוצמת תעבורה",
   "questionHtml": "מהו זמן ההשהיה הכולל ברשת, אם ההשהיות בתוך הנתבים זניחות? מהירות ההתפשטות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><annotation encoding=\"application/x-tex\">3\\cdot10^{8}</annotation></semantics></math></span> m/s. גודל החבילה: 12000 ביט.",
   "explanationHtml": "לפי האיור, שלושה קישורים ברצף (Store-and-forward), ובכל קישור: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>d</mi><mo>=</mo><mfrac><mi>L</mi><mi>R</mi></mfrac><mo>+</mo><mfrac><mtext>length</mtext><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac></mrow><annotation encoding=\"application/x-tex\">d=\\frac{L}{R}+\\frac{\\text{length}}{3\\cdot 10^{8}}</annotation></semantics></math></span>.<br>קישור 1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>12000</mn><msup><mn>10</mn><mn>9</mn></msup></mfrac><mo>=</mo><mn>12</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{12000}{10^{9}}=12\\,\\mu s</annotation></semantics></math></span>, התפשטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>2000</mn><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>6.7</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{2000}{3\\cdot10^{8}}\\approx 6.7\\,\\mu s</annotation></semantics></math></span>.<br>קישור 2: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>12000</mn><msup><mn>10</mn><mn>7</mn></msup></mfrac><mo>=</mo><mn>1.2</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{12000}{10^{7}}=1.2\\,ms</annotation></semantics></math></span>, התפשטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mrow><mn>5</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup></mrow><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>16.67</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{5\\cdot10^{6}}{3\\cdot10^{8}}\\approx 16.67\\,ms</annotation></semantics></math></span>.<br>קישור 3: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>12000</mn><msup><mn>10</mn><mn>8</mn></msup></mfrac><mo>=</mo><mn>0.12</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{12000}{10^{8}}=0.12\\,ms</annotation></semantics></math></span>, התפשטות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>3000</mn><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>=</mo><mn>10</mn><mtext> </mtext><mi>μ</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\frac{3000}{3\\cdot10^{8}}=10\\,\\mu s</annotation></semantics></math></span>.<br>סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>≈</mo><mn>18.02</mn><mtext> </mtext><mi>m</mi><mi>s</mi><mo>≈</mo><mn>18</mn><mtext> </mtext><mi>m</mi><mi>s</mi></mrow><annotation encoding=\"application/x-tex\">\\approx 18.02\\,ms\\approx 18\\,ms</annotation></semantics></math></span>. האפשרויות 36, 100 ו-1 רחוקות מהערך שחושב.",
   "dedupKey": "8044afbc4fac0084"
  },
  {
   "num": 12,
   "topic": "routing",
   "question": "מהו השיקול המרכזי שמנחה את BGP בבחירת נתיב?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "מדיניות",
     "html": "מדיניות"
    },
    {
     "id": "b",
     "type": "text",
     "value": "רוחב פס מקסימלי",
     "html": "רוחב פס מקסימלי"
    },
    {
     "id": "c",
     "type": "text",
     "value": "מינימום השהיה",
     "html": "מינימום השהיה"
    },
    {
     "id": "d",
     "type": "text",
     "value": "חיסכון בחשמל",
     "html": "חיסכון בחשמל"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "BGP הוא פרוטוקול ניתוב בין מערכות אוטונומיות (AS), והבחירה בנתיב נקבעת בעיקר לפי מדיניות (Policy) של ה-AS: יחסים עסקיים בין ספקים ולקוחות, ערכי local-pref ועוד, ורק אחר כך אורך ה-AS-path.\nBGP אינו מנסה למקסם רוחב פס, להקטין השהיה או לחסוך בחשמל.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q12",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "ניתוב: Dijkstra, Distance Vector ו-BGP",
   "questionHtml": "מהו השיקול המרכזי שמנחה את BGP בבחירת נתיב?",
   "explanationHtml": "BGP הוא פרוטוקול ניתוב בין מערכות אוטונומיות (AS), והבחירה בנתיב נקבעת בעיקר לפי מדיניות (Policy) של ה-AS: יחסים עסקיים בין ספקים ולקוחות, ערכי local-pref ועוד, ורק אחר כך אורך ה-AS-path.<br>BGP אינו מנסה למקסם רוחב פס, להקטין השהיה או לחסוך בחשמל.",
   "dedupKey": "bcaf7522d339bb35"
  },
  {
   "num": 13,
   "topic": "routing",
   "question": "בגרף רשת המשתמש באלגוריתם דייקסטרה (Dijkstra), נתונים המרחקים הבאים מצומת $U$: $D(V)=5$, $D(W)=10$. קיימת קשת ישירה בין $V$ ל-$W$ שמשקלה 3. מה יהיה המרחק המעודכן לצומת $W$ לאחר בחינת הצומת $V$?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "8",
     "html": "8"
    },
    {
     "id": "b",
     "type": "text",
     "value": "13",
     "html": "13"
    },
    {
     "id": "c",
     "type": "text",
     "value": "10",
     "html": "10"
    },
    {
     "id": "d",
     "type": "text",
     "value": "3",
     "html": "3"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "הצעד של דייקסטרה: $D(W)=\\min\\{D(W),\\,D(V)+c(V,W)\\}=\\min\\{10,\\,5+3\\}=8$.\n13 מתקבל מחיבור שגוי של 10 ו-3; 10 הוא הערך הישן; 3 הוא משקל הקשת בלבד.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q13",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "ניתוב: Dijkstra, Distance Vector ו-BGP",
   "questionHtml": "בגרף רשת המשתמש באלגוריתם דייקסטרה (Dijkstra), נתונים המרחקים הבאים מצומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>U</mi></mrow><annotation encoding=\"application/x-tex\">U</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>V</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">D(V)=5</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>W</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">D(W)=10</annotation></semantics></math></span>. קיימת קשת ישירה בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi></mrow><annotation encoding=\"application/x-tex\">V</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>W</mi></mrow><annotation encoding=\"application/x-tex\">W</annotation></semantics></math></span> שמשקלה 3. מה יהיה המרחק המעודכן לצומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>W</mi></mrow><annotation encoding=\"application/x-tex\">W</annotation></semantics></math></span> לאחר בחינת הצומת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>V</mi></mrow><annotation encoding=\"application/x-tex\">V</annotation></semantics></math></span>?",
   "explanationHtml": "הצעד של דייקסטרה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi><mo stretchy=\"false\">(</mo><mi>W</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">{</mo><mi>D</mi><mo stretchy=\"false\">(</mo><mi>W</mi><mo stretchy=\"false\">)</mo><mo separator=\"true\">,</mo><mtext> </mtext><mi>D</mi><mo stretchy=\"false\">(</mo><mi>V</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>c</mi><mo stretchy=\"false\">(</mo><mi>V</mi><mo separator=\"true\">,</mo><mi>W</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">}</mo><mo>=</mo><mi>min</mi><mo>⁡</mo><mo stretchy=\"false\">{</mo><mn>10</mn><mo separator=\"true\">,</mo><mtext> </mtext><mn>5</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\">}</mo><mo>=</mo><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">D(W)=\\min\\{D(W),\\,D(V)+c(V,W)\\}=\\min\\{10,\\,5+3\\}=8</annotation></semantics></math></span>.<br>13 מתקבל מחיבור שגוי של 10 ו-3; 10 הוא הערך הישן; 3 הוא משקל הקשת בלבד.",
   "dedupKey": "5dcf4c02df593642"
  },
  {
   "num": 14,
   "topic": "link_layer",
   "question": "מחשב א (`192.168.1.5`) מעוניין לשלוח חבילה למחשב ב (`8.8.8.8`) הנמצא ברשת חיצונית. ה-Default Gateway הוא `192.168.1.1`. איזה מזהה יופיע בשדה 'כתובת יעד' של מסגרת ה-Ethernet (L2 Frame) שתצא ממחשב א?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ה-MAC של ה-Default Gateway",
     "html": "ה-MAC של ה-Default Gateway"
    },
    {
     "id": "b",
     "type": "text",
     "value": "ה-IP של מחשב ה-Default Gateway",
     "html": "ה-IP של מחשב ה-Default Gateway"
    },
    {
     "id": "c",
     "type": "text",
     "value": "ה-MAC של מחשב א",
     "html": "ה-MAC של מחשב א"
    },
    {
     "id": "d",
     "type": "text",
     "value": "ה-MAC של מחשב ב",
     "html": "ה-MAC של מחשב ב"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "יעד ה-IP (`8.8.8.8`) מחוץ לרשת המקומית, לכן המחשב שולח את החבילה אל ה-Default Gateway: כתובת ה-IP בחבילה נשארת `8.8.8.8`, אבל כתובת היעד במסגרת ה-Ethernet היא ה-MAC של ה-Gateway (מתקבלת מ-ARP).\nב: כתובת IP לא מופיעה בכותרת Ethernet; ג: זו כתובת המקור; ד: ה-MAC של מחשב ב אינו ידוע ואינו נגיש בתוך הרשת המקומית.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q14",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "שכבת הקו: CRC, זוגיות ו-Ethernet",
   "questionHtml": "מחשב א (<code class=\"tok\" dir=\"ltr\">192.168.1.5</code>) מעוניין לשלוח חבילה למחשב ב (<code class=\"tok\" dir=\"ltr\">8.8.8.8</code>) הנמצא ברשת חיצונית. ה-Default Gateway הוא <code class=\"tok\" dir=\"ltr\">192.168.1.1</code>. איזה מזהה יופיע בשדה 'כתובת יעד' של מסגרת ה-Ethernet (L2 Frame) שתצא ממחשב א?",
   "explanationHtml": "יעד ה-IP (<code class=\"tok\" dir=\"ltr\">8.8.8.8</code>) מחוץ לרשת המקומית, לכן המחשב שולח את החבילה אל ה-Default Gateway: כתובת ה-IP בחבילה נשארת <code class=\"tok\" dir=\"ltr\">8.8.8.8</code>, אבל כתובת היעד במסגרת ה-Ethernet היא ה-MAC של ה-Gateway (מתקבלת מ-ARP).<br>ב: כתובת IP לא מופיעה בכותרת Ethernet; ג: זו כתובת המקור; ד: ה-MAC של מחשב ב אינו ידוע ואינו נגיש בתוך הרשת המקומית.",
   "dedupKey": "cbedd5a7abf3da1a"
  },
  {
   "num": 15,
   "topic": "nat_ipv6_icmp",
   "question": "איזה פרוטוקול ואיזו הודעה מופעלים כאשר נתב (Router) מקבל חבילת IP שגודלה עולה על ה-MTU של ממשק היציאה, ושדה ה-Flags שלה מכיל את הערך DF (Don't Fragment)?",
   "options": [
    {
     "id": "a",
     "type": "text",
     "value": "ICMP: Destination Unreachable",
     "html": "ICMP: Destination Unreachable"
    },
    {
     "id": "b",
     "type": "text",
     "value": "IP: Fragmentation denied",
     "html": "IP: Fragmentation denied"
    },
    {
     "id": "c",
     "type": "text",
     "value": "TCP: timeout",
     "html": "TCP: timeout"
    },
    {
     "id": "d",
     "type": "text",
     "value": "שום פרוטוקול לא יפעל",
     "html": "שום פרוטוקול לא יפעל"
    }
   ],
   "correctId": "a",
   "answerSource": "solved",
   "official": false,
   "confidence": "high",
   "explanation": "כשיש DF והחבילה גדולה מה-MTU, הנתב אינו מפצל אותה: הוא זורק אותה ושולח למקור הודעת ICMP מסוג Destination Unreachable (קוד \"Fragmentation needed and DF set\").\nב: אין הודעה כזו ב-IP; ג: timeout של TCP הוא תוצאה אפשרית אצל המקור, לא הודעה שהנתב מפעיל; ד: שגוי, כי ICMP פועל.",
   "note": "Source document lists the correct option first (convention); independently solved - agrees.",
   "id": "26A-A-Q15",
   "examCode": "26A-A",
   "examLabel": "2026 סמסטר א מועד א",
   "year": 2026,
   "source": "exam",
   "topicLabel": "NAT, IPv6 ו-ICMP",
   "questionHtml": "איזה פרוטוקול ואיזו הודעה מופעלים כאשר נתב (Router) מקבל חבילת IP שגודלה עולה על ה-MTU של ממשק היציאה, ושדה ה-Flags שלה מכיל את הערך DF (Don't Fragment)?",
   "explanationHtml": "כשיש DF והחבילה גדולה מה-MTU, הנתב אינו מפצל אותה: הוא זורק אותה ושולח למקור הודעת ICMP מסוג Destination Unreachable (קוד \"Fragmentation needed and DF set\").<br>ב: אין הודעה כזו ב-IP; ג: timeout של TCP הוא תוצאה אפשרית אצל המקור, לא הודעה שהנתב מפעיל; ד: שגוי, כי ICMP פועל.",
   "dedupKey": "ef1ed7c2a6b33449"
  }
 ]
};
