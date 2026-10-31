# -*- coding: utf-8 -*-
"""Delays-course pronunciations (merged into lexicon.py for every video of the app): rate/size/time units written
in Latin letters in the subtitles, and the course's formula symbols."""

WORDS = {
    "Gbps": "גִּיגָה בִּיט לשנייה",
    "Mbps": "מֶגָה בִּיט לשנייה",
    "Kbps": "קִילוֹ בִּיט לשנייה",
    "bps": "בִּיט לשנייה",
    "Bytes": "בַּייטִים",
    "Byte": "בַּייט",
    " ms": " מילישניות",
    "µs": "מיקרושניות",
    "store-and-forward": "סְטוֹר אֶנְד פוֹרְוַורְד",
    "Store-and-forward": "סְטוֹר אֶנְד פוֹרְוַורְד",
}

TEX_TOKENS = {
    r"\rho": "רוֹ",
    r"d_{trans}": "השהיית השידור",
    r"d_{prop}": "השהיית ההתפשטות",
    r"d_{queue}": "השהיית התור",
    r"d_{proc}": "השהיית העיבוד",
    r"d_{nodal}": "ההשהיה בצומת",
    r"\frac{L}{R}": "אֶל חלקי אָר",
    r"\frac{d}{s}": "דִּי חלקי אֶס",
    r"\frac{a\cdot L}{R}": "אֵיי כפול אֶל, חלקי אָר",
    r"\frac{\rho\cdot R}{L}": "רוֹ כפול אָר, חלקי אֶל",
    r"\approx": "בערך",
    "L": "אֶל",
    "d": "דִּי",
    "s": "אֶס",
}
