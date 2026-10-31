# -*- coding: utf-8 -*-
"""Widgets for the "tcp" course videos (T01-T08): the course's TCP rules as small simulators, and SVG figures drawn
from what the simulators return.

Simulators: acks(), seg_range() and cwnd_series() are taken verbatim from the course checker
(tools/verify/needhelp/tcp/check.py, parsed with ast so its asserts do not run on import). The rules are the course's:
  handshake  SYN seq=x;  SYN+ACK seq=y ack=x+1;  ACK seq=x+1 ack=y+1;  data starts at x+1
  ACK        cumulative: the next byte the receiver is missing
  cwnd       Slow Start doubles but stops at ssthresh; at cwnd >= ssthresh +1 per round (RTT);
             loss of a window W: ssthresh = floor(W/2); timeout -> cwnd 1 (Slow Start); 3 dup ACKs: Reno cwnd =
             ssthresh (Congestion Avoidance, the +3 of fast recovery ignored as in the course), Tahoe cwnd 1
  sending    at most min(cwnd, rwnd) unacknowledged; rate ~ cwnd * MSS * 8 / RTT

Figures (all hidden pieces carry ids the timeline shows):
  ladder()      two hosts, time down, one arrow per message: {pfx}-m{i}; brackets {pfx}-b-<key>
  cwnd_chart()  cwnd per round: {pfx}-r{n} (segment into round n + its point + value), ssthresh lines
                {pfx}-th-<key>, shaded intervals {pfx}-band-<key>, event tags {pfx}-ev-<key>
  bars()        horizontal bars for cwnd / rwnd: {pfx}-b-<key>, highlight {pfx}-hi-<key>
  cells()       a receive buffer as cells: used ones shown, free ones {pfx}-free highlighted
Class names start with tc- (all widget css files load into every video of the app).
"""
import ast
import pathlib
from fractions import Fraction as F
from html import escape as esc

# ---------------------------------------------------------------- the course checker's simulators
_CHECK = pathlib.Path(__file__).resolve().parents[2] / "tools" / "verify" / "needhelp" / "tcp" / "check.py"
_tree = ast.parse(_CHECK.read_text(encoding="utf-8"))
_ns = {}
exec(compile(ast.Module([n for n in _tree.body if isinstance(n, ast.FunctionDef)
                         and n.name in ("acks", "seg_range", "cwnd_series")], []), str(_CHECK), "exec"), _ns)
acks, seg_range, cwnd_series = _ns["acks"], _ns["seg_range"], _ns["cwnd_series"]

# the checker's own C07 series and its C05 examples, re-asserted here so a change there is noticed
assert cwnd_series(16, 19, {9: "3dup", 13: "timeout"}, "reno")[0] == [1, 2, 4, 8, 16, 17, 18, 19, 20, 10, 11, 12, 13,
                                                                      1, 2, 4, 6, 7, 8]
assert cwnd_series(12, 7, {})[0] == [1, 2, 4, 8, 12, 13, 14]


def handshake(x, y):
    """the three messages: (sender, flags, seq, ack or None)"""
    return [("C", "SYN", x, None), ("S", "SYN+ACK", y, x + 1), ("C", "ACK", x + 1, y + 1)]


def seg_end(seq, length):
    """last byte of a segment and the ACK on it"""
    return seq + length - 1, seq + length


def cwnd_trace(ssthresh, rounds, events=None, flavor="reno"):
    """cwnd per round, the phase that produced it ('start'|'ss'|'ca'), and ssthresh in force at every round.
    The cwnd values are the checker's; ssthresh per round is replayed with the same rule (floor(W/2) on a loss)."""
    events = events or {}
    cw, kind, _ = cwnd_series(ssthresh, rounds, events, flavor)
    ss, out = ssthresh, []
    for r in range(1, rounds + 1):
        out.append(ss)
        if events.get(r):
            ss = cw[r - 1] // 2
    # own replay of the rule, so the figure never shows a series the checker would not produce
    c, s2 = 1, ssthresh
    for r in range(1, rounds + 1):
        assert c == cw[r - 1], (r, c, cw)
        e = events.get(r)
        if e == "timeout" or (e == "3dup" and flavor == "tahoe"):
            s2, c = c // 2, 1
        elif e == "3dup":
            s2 = c // 2
            c = s2
        else:
            c = min(2 * c, s2) if c < s2 else c + 1
    return cw, kind, out


def ss_intervals(kind):
    """rounds (1-based) where Slow Start is in force, as closed intervals: the starting round, the rounds reached by
    doubling, and the round reached by the capped step (the course's reading: [1,5] and [14,17] in C07)"""
    rs = [r + 1 for r, k in enumerate(kind) if k in ("ss", "start")]
    out = []
    for r in rs:
        if out and r == out[-1][1] + 1:
            out[-1][1] = r
        else:
            out.append([r, r])
    return [tuple(i) for i in out]


def ca_entries(cw, kind):
    """rounds where the slope changes from doubling to +1 (the last Slow-Start point before a +1 step)"""
    return [r for r in range(1, len(cw)) if kind[r] == "ca" and cw[r] == cw[r - 1] + 1
            and kind[r - 1] in ("ss", "start")]


def rate_bps(cwnd, mss_bytes, rtt_s):
    return F(cwnd) * mss_bytes * 8 / F(rtt_s)


def fmt(x):
    """exact decimal of a Fraction with thousands separators; refuses a repeating decimal"""
    x = F(x)
    d = x.denominator
    for p in (2, 5):
        while d % p == 0:
            d //= p
    assert d == 1, f"{x} has no finite decimal"
    s = str(abs(x.numerator) * 10**12 // x.denominator).rjust(13, "0")
    ip, fp = s[:-12], s[-12:].rstrip("0")
    return ("-" if x < 0 else "") + f"{int(ip):,}" + (("." + fp) if fp else "")


# ---------------------------------------------------------------- small html helpers
def ltr(s):
    return f'<span class="tc-ltr">{s}</span>'


def big(id_, tex, hidden=True, cls=""):
    return f'<div id="{id_}" class="tc-big {cls}{" h" if hidden else ""}">${tex}$</div>'


def row(id_, html_, hidden=True, cls=""):
    return f'<div id="{id_}" class="tc-row {cls}{" h" if hidden else ""}">{html_}</div>'


def stack(*parts, gap=22):
    return f'<div class="tc-stack" style="gap:{gap}px">{"".join(parts)}</div>'


def table(id_, head, rows, hidden=True, ids=None):
    """a small RTL table; rows of html cells; ids: optional id per row (hidden rows)"""
    th = "".join(f"<th>{h}</th>" for h in head)
    trs = []
    for i, r in enumerate(rows):
        rid = f' id="{ids[i]}" class="h"' if ids else ""
        trs.append(f"<tr{rid}>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>")
    return (f'<table id="{id_}" class="tc-tab{" h" if hidden else ""}"><thead><tr>{th}</tr></thead>'
            f'<tbody>{"".join(trs)}</tbody></table>')


# ---------------------------------------------------------------- sender/receiver arrow diagram
ARROW = {"data": "#2dd4bf", "ack": "#38bdf8", "syn": "#c084fc", "retx": "#fbbf24"}


def ladder(pfx, names, msgs, w=1000, step=78, slope=56, top=92, brackets=(), name_ids=False):
    """names = (left host, right host). msgs: [dict(dir='R'|'L', label=str, cls='data'|'ack'|'syn'|'retx',
    lost=bool, note=str, gap=extra px before it)]. Arrow i starts at y_i on the sender line and reaches the other
    line slope px lower (or stops at 58% with ✗ when lost). The label sits on the arrow's middle, LTR, Consolas.
    note: a short text next to the arrival end, outside the two lines. brackets: [(key, side 'L'|'R', i_from, y_to
    as msg index or float y, label)] vertical bracket on a host line (a timer). Returns (svg, ys)."""
    xl, xr = 230, w - 230
    ys, y = [], top
    for m in msgs:
        y += m.get("gap", 0)
        ys.append(y)
        y += step
    h = y + slope - step + 40
    o = [f'<svg class="tc-lad" id="{pfx}" viewBox="0 0 {w} {h:.0f}" width="{w}" height="{h:.0f}" direction="ltr">',
         '<defs>' + "".join(f'<marker id="{pfx}-ah-{c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" '
                            f'markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{col}"/></marker>'
                            for c, col in ARROW.items()) + '</defs>']
    for x, nm in ((xl, names[0]), (xr, names[1])):
        o.append(f'<text x="{x}" y="40" class="tc-host">{esc(nm)}</text>'
                 f'<line x1="{x}" y1="60" x2="{x}" y2="{h - 10:.0f}" class="tc-life"/>')
    for i, (m, y0) in enumerate(zip(msgs, ys)):
        x0, x1 = (xl, xr) if m["dir"] == "R" else (xr, xl)
        y1 = y0 + slope
        cls = m.get("cls", "data")
        g = [f'<g id="{pfx}-m{i}" class="h tc-{cls}">']
        if m.get("lost"):
            k = 0.58
            xe, ye = x0 + (x1 - x0) * k, y0 + slope * k
            g.append(f'<line x1="{x0}" y1="{y0}" x2="{xe:.1f}" y2="{ye:.1f}" class="tc-arr lost"/>'
                     f'<text x="{xe:.1f}" y="{ye + 14:.1f}" class="tc-x">✗</text>')
            mx, my = x0 + (x1 - x0) * 0.3, y0 + slope * 0.3
        else:
            g.append(f'<line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y1}" class="tc-arr" marker-end="url(#{pfx}-ah-{cls})"/>')
            mx, my = (x0 + x1) / 2, (y0 + y1) / 2
        lab = m["label"]
        tw = 16.6 * len(lab) + 22
        g.append(f'<rect x="{mx - tw / 2:.1f}" y="{my - 44:.1f}" width="{tw:.1f}" height="38" rx="9" class="tc-lbg"/>'
                 f'<text x="{mx:.1f}" y="{my - 15:.1f}" class="tc-lab">{esc(lab)}</text>')
        if m.get("note"):
            if m.get("lost"):
                nx, anchor = (x1 + 22, "start") if x1 > x0 else (x1 - 22, "end")
                ny = y1
            else:
                nx, anchor = (x1 + 22, "start") if x1 > x0 else (x1 - 22, "end")
                ny = y1
            g.append(f'<text x="{nx:.1f}" y="{ny + 9:.1f}" text-anchor="{anchor}" class="tc-note">{esc(m["note"])}</text>')
        g.append("</g>")
        o += g
    for key, side, i0, yto, lab in brackets:
        x = (xl if side == "L" else xr) + (-26 if side == "L" else 26)
        ya = ys[i0]
        yb = ys[yto] if isinstance(yto, int) else yto
        anchor = "end" if side == "L" else "start"
        tx = x + (-14 if side == "L" else 14)
        o.append(f'<g id="{pfx}-b-{key}" class="h"><line x1="{x}" y1="{ya}" x2="{x}" y2="{yb:.0f}" class="tc-brk"/>'
                 f'<text x="{tx}" y="{(ya + yb) / 2 + 10:.0f}" text-anchor="{anchor}" class="tc-brkt">{esc(lab)}</text></g>')
    o.append("</svg>")
    return "".join(o), ys


# ---------------------------------------------------------------- cwnd per round
def cwnd_chart(pfx, cw, kind, w=1000, h=560, ymax=None, values=True, ths=(), bands=(), evs=(), every=1, shown=False):
    """cwnd (y) per round (x, from 1). Round n is a hidden group {pfx}-r{n}: the segment from round n-1 and the
    point (teal = Slow Start / start, sky = Congestion Avoidance) with its value above it.
    ths: [(key, r_from, r_to, value[, 'below'|'above'])] dashed ssthresh line + label (hidden {pfx}-th-<key>).
    bands: [(key, r_from, r_to)] shaded column range (hidden {pfx}-band-<key>).
    evs: [(key, r, text)] a tag between round r and r+1, above the higher point (hidden {pfx}-ev-<key>).
    shown=True: every round visible from the start (a given exam graph)."""
    n = len(cw)
    ymax = ymax or (max(cw) + 4 + (5 - (max(cw) + 4) % 5) % 5)
    L, R, T, B = 86, 24, 56, 74
    X = lambda r: L + (w - L - R) * (r - 0.5) / n
    Y = lambda v: T + (h - T - B) * (1 - v / ymax)
    o = [f'<svg class="tc-ch" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for key, a, b in bands:
        x0, x1 = X(a) - (w - L - R) / n / 2, X(b) + (w - L - R) / n / 2
        o.append(f'<rect id="{pfx}-band-{key}" x="{x0:.1f}" y="{T}" width="{x1 - x0:.1f}" height="{h - T - B}" class="tc-band h"/>')
    step = 5 if ymax <= 40 else 10
    for v in range(0, ymax + 1, step):
        o.append(f'<line x1="{L}" y1="{Y(v):.1f}" x2="{w - R}" y2="{Y(v):.1f}" class="tc-grid"/>'
                 f'<text x="{L - 14}" y="{Y(v) + 9:.1f}" class="tc-yt">{v}</text>')
    o.append(f'<line x1="{L}" y1="{Y(0):.1f}" x2="{w - R}" y2="{Y(0):.1f}" class="tc-axis"/>'
             f'<line x1="{L}" y1="{T}" x2="{L}" y2="{Y(0):.1f}" class="tc-axis"/>')
    for r in range(1, n + 1):
        if r % every == 0 or r == 1:
            o.append(f'<text x="{X(r):.1f}" y="{h - B + 36}" class="tc-xt">{r}</text>')
    o.append(f'<text x="{w - R}" y="{h - 4}" class="tc-axl" text-anchor="end">RTT</text>'
             f'<text x="{L + 12}" y="{T - 24}" class="tc-axl" text-anchor="start">cwnd</text>')
    for th in ths:
        key, a, b, v = th[:4]
        pos = th[4] if len(th) > 4 else "below"          # under (default) or over the line; "-left": at its start; "none": no label
        ty = Y(v) + 30 if pos.startswith("below") else Y(v) - 10
        tx, anc = (X(a) - 14, "start") if pos.endswith("-left") else (X(b) + 4, "end")
        o.append(f'<g id="{pfx}-th-{key}" class="h"><line x1="{X(a) - 18:.1f}" y1="{Y(v):.1f}" x2="{X(b) + 18:.1f}" '
                 f'y2="{Y(v):.1f}" class="tc-th"/>' + ("" if pos == "none" else
                 f'<text x="{tx:.1f}" y="{ty:.1f}" class="tc-tht" text-anchor="{anc}">ssthresh = {v}</text>') + '</g>')
    for r in range(1, n + 1):
        v = cw[r - 1]
        c = "ca" if kind[r - 1] == "ca" else "ss"
        g = [f'<g id="{pfx}-r{r}"{"" if shown else ' class="h"'}>']
        if r > 1:
            g.append(f'<line x1="{X(r - 1):.1f}" y1="{Y(cw[r - 2]):.1f}" x2="{X(r):.1f}" y2="{Y(v):.1f}" class="tc-seg"/>')
        g.append(f'<circle cx="{X(r):.1f}" cy="{Y(v):.1f}" r="9" class="tc-pt {c}"/>')
        if values:
            g.append(f'<text x="{X(r):.1f}" y="{Y(v) - 18:.1f}" class="tc-val {c}">{v}</text>')
        g.append("</g>")
        o += g
    for key, r, text in evs:
        top_v = max(cw[r - 1], cw[r] if r < n else 0)
        tx = (X(r) + X(r + 1)) / 2
        o.append(f'<g id="{pfx}-ev-{key}" class="h"><text x="{tx:.1f}" y="{Y(top_v) - 52:.1f}" class="tc-ev">{esc(text)}</text></g>')
    o.append("</svg>")
    return "".join(o)


def reveal(pfx, a, b):
    """ids of rounds a..b of a cwnd_chart"""
    return [f"{pfx}-r{r}" for r in range(a, b + 1)]


# ---------------------------------------------------------------- cwnd vs rwnd bars
def bars(pfx, items, w=900, unit=40, vmax=None):
    """items: [(key, label, value)] horizontal bars (LTR, from the left); hidden ids {pfx}-b-<key>, highlight
    {pfx}-hi-<key> (a glow ring around the bar)."""
    vmax = vmax or max(v for _, _, v in items)
    L, bw = 150, w - 150 - 90
    h = 30 + len(items) * 96
    o = [f'<svg class="tc-bars" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for i, (key, lab, v) in enumerate(items):
        y = 30 + i * 96
        ln = bw * v / vmax
        o.append(f'<g id="{pfx}-b-{key}" class="h"><text x="{L - 18}" y="{y + 40}" class="tc-bl" text-anchor="end">{esc(lab)}</text>'
                 f'<rect x="{L}" y="{y + 6}" width="{ln:.1f}" height="50" rx="10" class="tc-bar {key}"/>'
                 f'<text x="{L + ln + 14:.1f}" y="{y + 42}" class="tc-bv">{v}</text></g>'
                 f'<rect id="{pfx}-hi-{key}" x="{L - 6}" y="{y}" width="{ln + 12:.1f}" height="62" rx="14" class="tc-barhi h"/>')
    o.append("</svg>")
    return "".join(o)


def cells(pfx, total, used, per_row=12, size=58):
    """a receive buffer of `total` cells, the first `used` taken (data waiting for the application). Ids:
    {pfx} the whole box, {pfx}-free the highlight over the free cells."""
    rows = (total + per_row - 1) // per_row
    w, h = per_row * (size + 8) + 8, rows * (size + 8) + 8
    o = [f'<svg class="tc-buf" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for i in range(total):
        x, y = 8 + (i % per_row) * (size + 8), 8 + (i // per_row) * (size + 8)
        o.append(f'<rect x="{x}" y="{y}" width="{size}" height="{size}" rx="8" class="tc-cell{" used" if i < used else ""}"/>')
    o.append(f'<g id="{pfx}-free" class="h">')
    for i in range(used, total):
        x, y = 8 + (i % per_row) * (size + 8), 8 + (i // per_row) * (size + 8)
        o.append(f'<rect x="{x}" y="{y}" width="{size}" height="{size}" rx="8" class="tc-cellhi"/>')
    o.append("</g></svg>")
    return "".join(o)
