# -*- coding: utf-8 -*-
"""TCP-course pronunciations (merged into lexicon.py for every video of the app): protocol names, flags and the
window variables. Entries are whole technical tokens, specific enough not to hit other courses' text."""

WORDS = {
    "SYN+ACK": "סִין אַק",
    "TCP": "טִי סִי פִּי",
    "UDP": "יוּ דִי פִּי",
    "SYN": "סִין",
    "ACK": "אַק",
    "FIN": "פִין",
    "RST": "רִיסֶט",
    "RTT": "אַר טִי טִי",
    "MSS": "אֶם אֶס אֶס",
    "Slow Start": "סְלוֹאוּ סְטַארְט",
    "Congestion Avoidance": "קוֹנְגֶ'סְצְ'ן אַבוֹיְדֶנְס",
    "Fast retransmit": "פַאסְט רִיטְרַנְסְמִיט",
    "Timeout": "טַיים אָאוּט",
    "timeout": "טַיים אָאוּט",
    "Tahoe": "טָאהוֹ",
    "Reno": "רִינוֹ",
    "cwnd": "חלון העומס",
    "rwnd": "חלון המקבל",
    "ssthresh": "אֶס אֶס טְרֶשׁ",
    "Window Collapse": "ווינדוֹאוּ קוֹלַפְּס",
}

TEX_TOKENS = {
    "seq": "סִיק",
    "ack": "אַק",
    "cwnd": "חלון העומס",
    "rwnd": "חלון המקבל",
    "ssthresh": "אֶס אֶס טְרֶשׁ",
    "MSS": "אֶם אֶס אֶס",
    "RTT": "אַר טִי טִי",
    r"\min": "המינימום של",
}
