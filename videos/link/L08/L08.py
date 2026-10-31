# -*- coding: utf-8 -*-
"""L08 · בוס: שאלות מבחן אמיתיות — video script (build: tools/video/vid.py L08).

Source: courses/link/C08.js (the boss level). A boss video is a walkthrough of exam questions that the boss quiz does
NOT use (its six ids 25A-A-Q3, 25A-B-Q8, 22S-A-Q10, 22S-A-Q11, 26A-A-Q14, 26A-A-Q10 are refused by the gate):
  22S-A-Q18  what is true about ARP (local only, has a cache, works over Ethernet)
  23A-A-Q11  can DHCP fully replace ARP? (no: DHCP never gives the MAC of the next hop)
  22S-A-Q17  Stop and Wait, the receiver's CRC check fails: timeout, resend with the SAME sequence number
Avoided on purpose: the "what is ARP for" items 25A-B-Q12 / 25A-C-Q9 / 25A-C-Q15 (content twins of C07-Q1), the
DHCP/ARP twins SAMP-1-Q12 / SAMP-2-Q12 / 23A-B-Q13 of 23A-A-Q11 (one copy is enough), 26A-A-Q4 (ARP instead of DHCP,
the same fact reversed) and 25A-C-Q8 (twin of C01-Q4). L07 already solved 23A-A-Q14, L06 22S-A-Q6.
The Stop-and-Wait run is w_link.stop_and_wait() (asserted: the resent frame carries the same sequence number, and no
NAK is ever sent); the ARP-table and DHCP facts are shown as what a frame needs vs what each protocol returns.
"""
import ipaddress
from vid import P, Scene, Video, show, hide, BANK
import stage as st
import w_link as w

# ---------------------------------------------------------------- data (verified)
Q1, Q2, Q3 = BANK["22S-A-Q18"], BANK["23A-A-Q11"], BANK["22S-A-Q17"]
assert (Q1["correctId"], Q2["correctId"], Q3["correctId"]) == ("a", "b", "b")
O1 = [(o["id"], o["value"]) for o in Q1["options"]]
O2 = [(o["id"], o["value"]) for o in Q2["options"]]
O3 = [(o["id"], o["value"]) for o in Q3["options"]]
assert [i for i, _ in O2] == ["a", "b", "c", "d", "e"] and [i for i, _ in O3] == ["a", "b", "c", "d"]

# what a DHCP lease gives vs what an Ethernet frame to the gateway needs
DHCP_GIVES = {"IP", "mask", "gateway IP", "DNS IP"}
FRAME_NEEDS = {"dst MAC"}
assert not (FRAME_NEEDS & DHCP_GIVES)                        # nothing in the lease is a MAC address
NET = ipaddress.ip_network("192.168.7.0/24")
assert ipaddress.ip_address("192.168.7.1") in NET           # even the gateway is reached by MAC on the LAN

RUN = w.stop_and_wait({0})
assert RUN == [("data", 0, False), ("timeout", 0, None), ("data", 0, True), ("ack", 0, True),
               ("data", 1, True), ("ack", 1, True)]
assert RUN[2][1] == RUN[0][1]                                # the resent frame keeps sequence number 0
assert all(k != "nak" for k, _, _ in RUN)                    # the receiver never asks for a resend
MSGS = []
for k, s, ok in RUN[:4]:
    if k == "data":
        MSGS.append(dict(dir="R", label=f"frame {s}", cls="data" if ok is False else "retx",
                         note="CRC ✗: נזרקת" if ok is False else "תקינה ✓", bad=ok is False))
    elif k == "timeout":
        MSGS.append(dict(timer="timeout"))
    else:
        MSGS.append(dict(dir="L", label=f"ACK {s}", cls="ack"))
MSGS[0]["cls"] = "data"
LAD = w.ladder("sw", ("שולח", "מקבל"), MSGS)


def receiver(seqs):
    """Stop-and-Wait receiver: deliver a frame only if it carries the expected bit; ACK whatever arrived intact"""
    expect, delivered, acks = 0, [], []
    for s_ in seqs:
        if s_ == expect:
            delivered.append(s_)
            expect ^= 1
        acks.append(s_)
    return delivered, acks


# the ACK of frame 0 is lost: the sender resends frame 0; with the same number the receiver spots the duplicate
assert receiver([0, 0, 1]) == ([0, 1], [0, 0, 1])
# had the sender used a new number for the resend, the duplicate would be delivered as new data
assert receiver([0, 1]) == ([0, 1], [0, 1]) and len(receiver([0, 1])[0]) == 2
# frame 0 was discarded (bad CRC) and resent as 1: the receiver, still expecting 0, drops it -> data lost
assert receiver([1]) == ([], [1])

# ---------------------------------------------------------------- scenes
title = Scene("title", "", [
    P("זה סרטון הבוס של שכבת הקו: נפתור שלוש שאלות אמיתיות ממבחנים."),
    P("שתיים על ARP, ואחת על מה קורה כשבדיקת ה-CRC נכשלת."),
    P("בכל שאלה נבחר תשובה, ונפסול כל אחת מהאחרות עם סיבה.", hold=0.4),
], stage='<div class="kicker">L08 · שכבת הקו: CRC, זוגיות ו-ARP</div><h1>בוס: שאלות מבחן אמיתיות</h1>'
         '<p>ARP, DHCP מול ARP, ושגיאת CRC ב-Stop and Wait</p>',
   layout="title")


def qbox(pfx, qid, stem, opts, notes):
    return (f'<div class="lk-q"><div class="qstem"><span class="qid">{qid}</span>{stem}</div>'
            + st.options(pfx, opts, notes=notes) + "</div>")


K1 = "qa"
q1 = Scene("q1", "שאלה 1: ARP", [
    P("שאלה ראשונה: מה נכון לגבי ARP?"),
    P("נזכור מה ARP עושה: יודעים כתובת IP של מחשב **ברשת המקומית**, ומבקשים את כתובת ה-MAC שלו.", do=show("a-1")),
    P("זה בדיוק הניסוח על המרת IP ידועה ל-MAC ברשת מקומית, והוא משייך את ARP לשכבת הקו. זו התשובה.", do=show(f"{K1}-ok-a")),
    P("הניסוח על רשתות **מרוחקות** נופל: בקשת ARP יוצאת ב-broadcast, והיא לא עוברת נתב.",
      do=show(f"{K1}-x-b", f"{K1}-n-b", "a-2")),
    P("הניסוח שטוען שאין מטמון נופל. יש: טבלת ARP, שבה שומרים כל תשובה.", do=show(f"{K1}-x-c", f"{K1}-n-c", "a-3")),
    P("וגם ההמשך שלו הפוך. אף אחד לא בודק תשובות ARP, ולכן דווקא **קל** לזייף אותן.", do=show("a-4")),
    P("והניסוח על החלפת Ethernet: ARP לא מחליף אותו. הבקשות והתשובות שלו נשלחות בתוך מסגרות Ethernet.",
      do=show(f"{K1}-x-d", f"{K1}-n-d", "a-5"), hold=0.4),
], stage=qbox(K1, "22S-A-Q18", Q1["question"], O1, {"b": "רק מקומי", "c": "יש מטמון", "d": "רץ מעל Ethernet"}),
   panel=st.card("a-1", "rule", "🔑 ARP: IP ידוע ← MAC, ברשת המקומית")
         + st.card("a-2", "ex", "בקשה ב-" + w.ltr("broadcast") + ": לא עוברת נתב")
         + st.card("a-3", "ex", "טבלת ARP = מטמון")
         + st.card("a-4", "trap", "⚠️ בלי אימות: קל לזייף")
         + st.card("a-5", "ex", "ARP נשלח בתוך מסגרות " + w.ltr("Ethernet")))

K2 = "qb"
q2 = Scene("q2", "שאלה 2: DHCP מול ARP", [
    P("שאלה שנייה: אם כבר משתמשים ב-DHCP, אפשר לוותר לגמרי על ARP?"),
    P("נבדוק מה DHCP נותן: כתובת IP למחשב, מסכת רשת, כתובת ה-Gateway, ושרת DNS.", do=show("d-1")),
    P("כל אלה כתובות IP ומסכה. **אין** שם אף כתובת MAC.", do=show("d-2")),
    P("ומה צריך כדי לשלוח מסגרת Ethernet? כתובת MAC של היעד, או של ה-Gateway. את זה נותן רק ARP.",
      do=show("d-3"),
      say="ומה צריך כדי לשלוח מסגרת אִיתֶ'רְנֶט? כתובת מַאק של היעד, או של הגֵייטְוֵויי. את זה נותן רק ארפּ."),
    P("גם כשכתובת ה-Gateway ידועה מ-DHCP, למשל ‎192.168.7.1‎, את ה-MAC שלו מקבלים רק מ-ARP.",
      say="גם כשכתובת הגֵייטְוֵויי ידועה מדִי אֵייץ' סִי פִּי, את המַאק שלו מקבלים רק מארפּ."),
    P("לכן אי אפשר לוותר על ARP. זו התשובה.", do=show(f"{K2}-ok-b")),
    P("״כן, אפשר לוותר״ נופלת, מאותה סיבה בדיוק.", do=show(f"{K2}-x-a", f"{K2}-n-a")),
    P("״רק עבור לקוחות DHCP״ נופלת: גם הם צריכים MAC של ה-Gateway כדי לשלוח מסגרת אחת.",
      do=show(f"{K2}-x-c", f"{K2}-n-c"),
      say="רק עבור לקוחות דִי אֵייץ' סִי פִּי, נופלת: גם הם צריכים מַאק של הגֵייטְוֵויי כדי לשלוח מסגרת אחת."),
    P("״תלוי בהגדרות״ נופלת: זו לא הגדרה, אלו שני תפקידים שונים. ו״אף תשובה״ נופלת, כי יש נכונה.",
      do=show(f"{K2}-x-d", f"{K2}-n-d", f"{K2}-x-e", f"{K2}-n-e"), hold=0.4),
], stage=qbox(K2, "23A-A-Q11", Q2["question"], O2,
              {"a": "אין MAC", "c": "גם לקוחות", "d": "תפקידים שונים", "e": "יש נכונה"}),
   panel=w.table("d-1", ["DHCP נותן", "ARP נותן"], [["IP למחשב, מסכה", "—"], ["IP של Gateway ו-DNS", "—"],
                                                   ['<span class="lk-bad">אין MAC</span>', '<span class="lk-ok">MAC לפי IP</span>']],
                 ids=[None, None, "d-2"])
         + st.card("d-3", "rule", "🔑 מסגרת צריכה MAC יעד: רק ARP נותן אותו"))

K3 = "qc"
q3 = Scene("q3", "שאלה 3: CRC נכשל", [
    P("שאלה שלישית: Stop and Wait. מסגרת הגיעה למקבל, הוא חישב CRC ומצא שגיאה. מה יקרה?",
      do=show("sw-m0")),
    P("המקבל זורק את המסגרת, ולא שולח כלום: לא ACK ולא בקשה לשידור חוזר.", do=show("t-1"),
      say="המקבל זורק את המסגרת, ולא שולח כלום: לא אַק ולא בקשה לשידור חוזר."),
    P("השולח מחכה לאישור שלא מגיע. הטיימר שלו פג, וזה ה-timeout.", do=show("sw-m1")),
    P("והוא שולח שוב את **אותה** מסגרת, עם **אותו** מספר סידורי: אפס.", do=show("sw-m2", "t-2")),
    P("הפעם היא מגיעה תקינה, והמקבל מאשר. רק אחרי האישור המספר הסידורי מתקדם.", do=show("sw-m3")),
    P("ולמה זה חשוב? נניח שדווקא ה-ACK הלך לאיבוד. השולח שולח שוב את מסגרת אפס.",
      say="ולמה זה חשוב? נניח שדווקא האַק הלך לאיבוד. השולח שולח שוב את מסגרת אפס."),
    P("המקבל כבר מחכה למסגרת מספר אחת, רואה שוב מספר אפס, ומבין שזו מסגרת **כפולה**. הוא זורק אותה, ומאשר שוב."),
    P("זו התשובה: timeout, ושידור חוזר עם אותו מספר סידורי.", do=show(f"{K3}-ok-b")),
    P("עם מספר חדש, המקבל, שעדיין מחכה לאפס, יזרוק אותה ככפולה. ואם דווקא ה-ACK אבד, יקבל כפולה כמידע חדש.",
      do=show(f"{K3}-x-a", f"{K3}-n-a"),
      say="עם מספר חדש, המקבל, שעדיין מחכה לאפס, יזרוק אותה ככפולה. ואם דווקא האַק אבד, יקבל כפולה כמידע חדש."),
    P("״המקבל יבקש שידור חוזר״ נופלת: ב-Stop and Wait הבסיסי המקבל שותק, והטיימר עושה את העבודה.",
      do=show(f"{K3}-x-c", f"{K3}-n-c")),
    P("ו״אף אחת״ נופלת, כי מצאנו נכונה.", do=show(f"{K3}-x-d", f"{K3}-n-d"), hold=0.4),
], stage=w.stack(LAD, st.card("t-1", "ex", "שגיאת CRC: זורקים בשקט"),
                 st.card("t-2", "rule", "🔑 שידור חוזר: אותו מספר סידורי"), gap=8),
   panel=qbox(K3, "22S-A-Q17", Q3["question"], O3, {"a": "ייראה כחדש", "c": "המקבל שותק", "d": "יש נכונה"}))

recap = Scene("recap", "סיכום", [
    P("לסיכום הבוס: ARP עובד רק ברשת המקומית, שומר תשובות במטמון, ורץ בתוך מסגרות Ethernet.", do=show("r-1")),
    P("DHCP נותן כתובות IP, אבל לא MAC. לכן ARP תמיד נדרש.", do=show("r-2")),
    P("ומסגרת עם שגיאת CRC נזרקת בשקט. ב-Stop and Wait השולח משדר אותה שוב, עם אותו מספר סידורי.",
      do=show("r-3")),
    P("זהו, סיימתם את שכבת הקו. בהצלחה במבחן!", do=show("r-4"), hold=0.8),
], stage=w.stack(LAD.replace('id="sw', 'id="sr').replace("#sw-", "#sr-").replace(' class="h"', "")),
   panel=st.card("r-1", "rule", "🔑 ARP: מקומי, מטמון, בתוך " + w.ltr("Ethernet"))
         + st.card("r-2", "rule", "🔑 DHCP לא נותן MAC: צריך ARP")
         + st.card("r-3", "rule", "🔑 CRC נכשל: נזרקת, " + w.ltr("timeout") + ", אותו מספר")
         + st.card("r-4", "ex", "🏆 סיימתם את שכבת הקו"))

VIDEO = Video("L08", "link", "בוס: שאלות מבחן אמיתיות", [title, q1, q2, q3, recap],
              bank={"22S-A-Q18": "a", "23A-A-Q11": "b", "22S-A-Q17": "b"})
