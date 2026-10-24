# דף עזר: נוסחאות ועובדות לכל הקורס

> 🔑 **דף אחד לפני המבחן.** נוסחאות, כללי חישוב והעובדות שמבחנים שואלים עליהן שוב ושוב. פירוט וטעויות נפוצות בפרקי הנושאים.

## יחידות

- בית $=8$ ביט. $1\,Mbps=10^{6}$ ביט לשנייה, ‏$1\,Gbps=10^{9}$
- שעה $=3600$ שניות. מילישנייה $=10^{-3}$ שנייה, מיקרושנייה $=10^{-6}$
- מהירות התפשטות נתונה בשאלה ($2\cdot10^{8}$ או $3\cdot10^{8}$ מ'/ש'), ו-1000 ק"מ ב-$2\cdot10^{8}$ הם $5\,ms$

## השהיות ועומס ([[delays]])

| גודל | נוסחה |
|---|---|
| שידור | $d_{trans}=L/R$ |
| התפשטות | $d_{prop}=d/s$ |
| קישורים סדרתיים (store-and-forward) | $\sum_i\left(\dfrac{L}{R_i}+\dfrac{d_i}{s}\right)$ |
| עוצמת תעבורה | $\rho=\dfrac{a\cdot L}{R}$ ($a$ חבילות לשנייה) |
| קצב מרבי ל-$\rho$ נתון | $a=\dfrac{\rho R}{L}$ |
| קישור משותף ל-$k$ חיבורים | $\min(R_s,R_c,R/k)$ |

$\rho\ll1$ תור ריק, $\rho\to1$ תור גדל, תור מלא זורק חבילות.

## HTTP ו-DNS ([[http]], [[dns_dhcp]])

- Non-persistent: $2RTT+$ שידור לאובייקט. Persistent: $RTT$ לפתיחה, ואז $RTT+$ שידור לאובייקט. Pipelining: בערך $RTT$ אחד לכולם.
- חיבורים ב-HTTP/1.1: אחד לכל **שרת (שם מארח)**. HTTP/2: אחד לשרת. HTTP/3: QUIC מעל UDP, ללא HOL.
- GET מותנה: `If-Modified-Since`, תשובה `304` ללא גוף. `max-age=3600` היא שעה.
- DNS: Root, TLD, Authoritative. ללא מטמון $3\times$ זמן שאילתה. TTL נפרד לכל רשומה.
- DHCP: Discover, Offer, Request, ACK, מעל UDP (67 ו-68). נותן IP, מסכה, Gateway, DNS מקומי.
- ARP: IP ל-MAC ברשת מקומית. אי אפשר לוותר עליו גם עם DHCP.
- DNS ו-DHCP רצים על UDP. HTTP ו-SMTP רצים על TCP.

## תעבורה ([[udp_checksum]], [[reliable_transfer]], [[tcp]])

- כותרת UDP 8 בתים. כותרת TCP לפחות 20.
- Checksum: סכום משלים ל-1 עם wraparound, והופכים. מזהה, לא מתקן, לא מושלם.
- Stop-and-Wait: $U=\dfrac{L/R}{RTT+L/R}$ ; עם חלון $N$: פי $N$
- GBN: ACK מצטבר, חלון $\le2^{k}-1$ ; SR: ACK לכל חבילה, חלון $\le2^{k-1}$
- TCP: Seq הוא מספר הבית הראשון, ACK הוא הבית הבא. SYN צורך מספר: $ack=x+1$
- $EstimatedRTT=(1-\alpha)\,EstimatedRTT+\alpha\,SampleRTT$ ; ‏$\alpha=0.125$ ; ‏$Timeout=EstimatedRTT+4\,DevRTT$
- Slow Start: מכפילים כל RTT. Congestion Avoidance: $+1$ כל RTT. Timeout: ‏$ssthresh=cwnd/2$ ; ‏$cwnd=1$ ; שלושה ACK כפולים: ‏$cwnd=ssthresh$ (Reno).
- בקרת זרימה: מגינה על המקבל (rwnd). בקרת עומס: מגינה על הרשת. ל-UDP אין אף אחת מהן.
- קצב TCP: $\dfrac{cwnd}{RTT}$ ; החלון הפעיל: $\min(cwnd,rwnd)$

## רשת ([[ip_cidr]], [[nat_ipv6_icmp]], [[routing]])

- בלוק `/p`: $2^{32-p}$ כתובות, ‏$2^{32-p}-2$ לתחנות. גודל הבלוק בבית הגבול: $2^{8-(p\bmod8)}$
- Longest Prefix Match: בין התואמות בוחרים את ה-$p$ הגדול ביותר.
- פרגמנטציה: נתונים לפרגמנט $k=\lfloor(MTU-20)/8\rfloor\cdot8$ ; ‏$offset_j=(j-1)k/8$ ; מספר פרגמנטים $\lceil D/k\rceil$ ; רק היעד מרכיב.
- NAT: מחליף (IP, פורט) ומחזיק טבלה. חוסך כתובות. IPv6: 128 ביט, כותרת 40 בתים, בלי checksum ובלי פרגמנטציה בנתב.
- ICMP: הודעות שגיאה ובקרה (Echo, Destination Unreachable, TTL expired). DF וגדול מה-MTU: נזרקת ונשלחת Destination Unreachable.
- Dijkstra: $D(v)=\min\{D(v),D(w)+c(w,v)\}$ ; Distance Vector: $D_x(y)=\min_v\{c(x,v)+D_v(y)\}$ ; BGP: מדיניות לפני אורך AS-PATH.

## קו ופיזית ([[link_layer]], [[physical_misc]])

- CRC: מוסיפים $r$ אפסים, חילוק XOR ב-$G$ (בן $r+1$ ביטים), השארית $r$ ביטים. המסגרת $D\,2^{r}\oplus R$ מתחלקת ב-$G$
- זוגיות: מזהה מספר אי-זוגי של שגיאות. דו-ממדית: שורה ועמודה אי-זוגיות הן הביט שהתהפך, ואפשר לתקן.
- מרחק Hamming $d$: מזהים $d-1$ שגיאות, מתקנים $\lfloor(d-1)/2\rfloor$
- מסגרת Ethernet: יעד 6, מקור 6, סוג 2, נתונים 46 עד 1500, ‏CRC 4. MAC הוא 48 ביט.
- IP היעד לא משתנה לאורך הדרך. ה-MAC משתנה בכל קישור: לרשת אחרת ה-MAC הוא של ה-Gateway.
- Switch: מעביר frames לפי MAC, לומד לבד, flooding לכתובת לא ידועה. Router: datagrams לפי IP.
- CSMA/CD: אחרי התנגשות $m$ ממתינים $K\cdot512$ זמני ביט עם $K\in\{0,\ldots,2^{m}-1\}$
- Circuit switching: משאב שמור לשיחה (FDM או TDM). Packet switching: שיתוף סטטיסטי. חיבור שתופס שני קישורים: מחברים את האילוצים וחוצים ב-2.

## באיזו שכבה? ([[intro_layers]])

אפליקציה: HTTP, DNS, DHCP, SMTP, QUIC. תעבורה: TCP, UDP (פורטים). רשת: IP, ICMP, NAT, ניתוב. קו: Ethernet, ARP, סוויץ'. פיזית: אותות על תווך.
