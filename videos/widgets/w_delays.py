# -*- coding: utf-8 -*-
"""Widgets for the "delays" course videos (D01-D07): exact arithmetic helpers and SVG figures computed in Python.

Every figure is drawn from the numbers it shows: a space-time diagram from (L, R_i, d_i, s), a link with bits in
flight from the same physics (bit k leaves at k/R and moves at s), a buffer that fills at aL - R, a rate path whose
bottleneck is the minimum. All arithmetic is exact (fractions.Fraction); fmt() refuses to print a rounded number
unless the caller allows it.

Class names start with dl- (all widget css files load into every video of the app).
"""
from fractions import Fraction as F

BIT_PER_BYTE = 8
K, M, G = 10**3, 10**6, 10**9          # the course: rates and sizes use powers of 1000


# ---------------------------------------------------------------- exact numbers
def fmt(x, digits=None):
    """exact decimal of a Fraction ('0.65', '15.65', '1,600,000'); digits=n rounds to n decimals (caller's choice)"""
    x = F(x)
    if digits is None:
        d = x.denominator
        for p in (2, 5):
            while d % p == 0:
                d //= p
        assert d == 1, f"{x} has no finite decimal: pass digits="
        s = str(x.numerator * 10**30 // x.denominator)
        neg = s.startswith("-")
        s = s.lstrip("-").rjust(31, "0")
        ip, fp = s[:-30], s[-30:].rstrip("0")
    else:
        q = round(x * 10**digits)
        neg = q < 0
        s = str(abs(q)).rjust(digits + 1, "0")
        ip, fp = (s[:-digits], s[-digits:]) if digits else (s, "")
    ip = f"{int(ip):,}"
    return ("-" if neg else "") + ip + (("." + fp) if fp else "")


def ms(t):
    return F(t) * 1000


def us(t):
    return F(t) * 10**6


def trans(L, R):
    """transmission delay L/R (bits, bits/s) in seconds"""
    return F(L) / F(R)


def prop(d, s):
    """propagation delay d/s (meters, m/s) in seconds"""
    return F(d) / F(s)


def chain(L, links, s):
    """store-and-forward over links [(R, d)]: (per-link [(trans, prop)], total) in seconds"""
    parts = [(trans(L, R), prop(d, s)) for R, d in links]
    return parts, sum(a + b for a, b in parts)


def rho(a, L, R):
    return F(a) * F(L) / F(R)


# ---------------------------------------------------------------- small html helpers
def ltr(s):
    """a number with a Latin unit inside Hebrew text: kept in LTR order ('2.5 Mbps', '×8')"""
    return f'<span class="dl-ltr">{s}</span>'


def inline(*parts):
    """pieces shown side by side on one line (each a hidden big formula, e.g. a fraction and then '= 150')"""
    return f'<div class="dl-inl">{"".join(parts)}</div>'


def big(id_, tex, hidden=True, cls=""):
    return f'<div id="{id_}" class="dl-big {cls}{" h" if hidden else ""}">${tex}$</div>'


def row(id_, html_, hidden=True, cls=""):
    return f'<div id="{id_}" class="dl-row {cls}{" h" if hidden else ""}">{html_}</div>'


def stack(*parts, gap=22):
    return f'<div class="dl-stack" style="gap:{gap}px">{"".join(parts)}</div>'


def badges(items):
    """[(id, big text, small caption)] -> a row of unit badges (hidden)"""
    return ('<div class="dl-badges">' + "".join(
        f'<div id="{i}" class="dl-badge h"><b>{t}</b><span>{c}</span></div>' for i, t, c in items) + "</div>")


# ---------------------------------------------------------------- space-time diagram (store-and-forward)
TR_COL, PR_COL = "#38bdf8", "#fbbf24"


def spacetime(pfx, names, L, links, s, unit="ms", w=1000, h=600, label_min=26, tick=None):
    """space-time diagram of one packet over a chain of links: a column per node, time grows downward.
    Link i is a parallelogram: first bit leaves node i at t_i, last bit leaves at t_i + L/R_i, they arrive at node
    i+1 one propagation delay later; node i+1 starts forwarding when the last bit has arrived (store-and-forward).
    Ids (hidden): {pfx}-k{i} link i, {pfx}-tr{i} its transmission bracket, {pfx}-pr{i} its propagation bracket,
    {pfx}-end the arrival line with the total. Returns (svg, total seconds)."""
    parts, total = chain(L, links, s)
    scale_u = {"ms": 1000, "us": 10**6, "s": 1}[unit]
    uname = {"ms": "ms", "us": "µs", "s": "s"}[unit]
    top, bot, left, right = 64, 40, 150, 140
    tlabel = lambda x: f"{fmt(x * scale_u, None if (x * scale_u * 100).denominator == 1 else 2)} {uname}"
    n = len(names)
    xs = [left + (w - left - right) * i / (n - 1) for i in range(n)]
    ky = (h - top - bot) / float(total)
    Y = lambda t: top + float(t) * ky
    o = [f'<svg class="dl-st" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for x, nm in zip(xs, names):
        o.append(f'<line x1="{x:.0f}" y1="{top - 10}" x2="{x:.0f}" y2="{h - 18}" class="dl-node"/>'
                 f'<text x="{x:.0f}" y="{top - 22}" class="dl-nname">{nm}</text>')
    o.append(f'<text x="22" y="{top + 24}" class="dl-axis">t ↓</text>')
    t = F(0)
    for i, ((tr, pr), x0, x1) in enumerate(zip(parts, xs, xs[1:])):
        pts = [(x0, Y(t)), (x0, Y(t + tr)), (x1, Y(t + tr + pr)), (x1, Y(t + pr))]
        thin = (Y(t + tr) - Y(t)) < 3
        poly = " ".join(f"{a:.1f},{b:.1f}" for a, b in pts)
        o.append(f'<g id="{pfx}-k{i}" class="h"><polygon points="{poly}" class="dl-pk{" thin" if thin else ""}"/>'
                 f'<line x1="{x0:.1f}" y1="{Y(t):.1f}" x2="{x1:.1f}" y2="{Y(t + pr):.1f}" class="dl-bit first"/>'
                 f'<line x1="{x0:.1f}" y1="{Y(t + tr):.1f}" x2="{x1:.1f}" y2="{Y(t + tr + pr):.1f}" class="dl-bit last"/></g>')
        # transmission bracket on the sending node (left of it), propagation bracket on the receiving node
        ya, yb = Y(t), Y(t + tr)
        o.append(f'<g id="{pfx}-tr{i}" class="h"><line x1="{x0 - 14:.0f}" y1="{ya:.1f}" x2="{x0 - 14:.0f}" y2="{max(yb, ya + 2):.1f}" class="dl-br tr"/>'
                 f'<text x="{x0 - 22:.0f}" y="{(ya + yb) / 2 + 10:.0f}" class="dl-blab tr" text-anchor="end">'
                 f'{tlabel(tr)}</text></g>')
        ya2, yb2 = Y(t), Y(t + pr)
        o.append(f'<g id="{pfx}-pr{i}" class="h"><line x1="{x1 + 14:.0f}" y1="{ya2:.1f}" x2="{x1 + 14:.0f}" y2="{max(yb2, ya2 + 2):.1f}" class="dl-br pr"/>'
                 f'<text x="{x1 + 22:.0f}" y="{(ya2 + yb2) / 2 + 10:.0f}" class="dl-blab pr" text-anchor="start">'
                 f'{tlabel(pr)}</text></g>')
        t += tr + pr
    assert t == total
    o.append(f'<g id="{pfx}-end" class="h"><line x1="{xs[0] - 30:.0f}" y1="{Y(total):.1f}" x2="{xs[-1] + 20:.0f}" '
             f'y2="{Y(total):.1f}" class="dl-endl"/><text x="{xs[0] - 34:.0f}" y="{Y(total) + 10:.0f}" '
             f'class="dl-endt" text-anchor="end">{tlabel(total)}</text></g>')
    o.append("</svg>")
    return "".join(o), total


# ---------------------------------------------------------------- one link, bits in flight
def link_frames(pfx, L, R, d, s, times, w=980, h=250, unit="ms", names=("A", "B")):
    """snapshots of one packet on one link at the given times (seconds). Bit k leaves at k/R and moves at s, so at
    time t the bits still at the sender are L - R t, the bits on the wire span from the last bit sent to the first
    bit's position (capped at d), and the bits that reached B are R (t - d/s). Each snapshot is a hidden group
    {pfx}-f{j} (show one, hide the previous). Returns (html, [(sent, on_wire, arrived) per time])."""
    L, R, d, s = F(L), F(R), F(d), F(s)
    x0, x1 = 170, w - 170
    yw = 150
    scale_u = {"ms": 1000, "us": 10**6, "s": 1}[unit]
    uname = {"ms": "ms", "us": "µs", "s": "s"}[unit]
    o = [f'<svg class="dl-link" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         f'<rect x="30" y="{yw - 60}" width="120" height="120" rx="16" class="dl-host"/>'
         f'<text x="90" y="{yw + 14}" class="dl-hname">{names[0]}</text>'
         f'<rect x="{w - 150}" y="{yw - 60}" width="120" height="120" rx="16" class="dl-host"/>'
         f'<text x="{w - 90}" y="{yw + 14}" class="dl-hname">{names[1]}</text>'
         f'<line x1="{x0}" y1="{yw}" x2="{x1}" y2="{yw}" class="dl-wire"/>']
    stats = []
    for j, t in enumerate(times):
        t = F(t)
        sent = min(L, R * t)                          # bits pushed onto the wire so far
        arrived = max(F(0), min(L, R * (t - d / s)))  # bits that finished the trip
        front = min(d, s * t)                         # position of the first bit (m)
        back = F(0) if sent < L else min(d, s * (t - L / R))   # trailing edge: at A while A is still sending
        on_wire = sent - arrived
        stats.append((sent, on_wire, arrived))
        X = lambda m: x0 + (x1 - x0) * float(m / d)
        g = [f'<g id="{pfx}-f{j}" class="h">']
        if on_wire > 0:
            g.append(f'<rect x="{X(back):.1f}" y="{yw - 22}" width="{max(10.0, X(front) - X(back)):.1f}" height="44" rx="6" class="dl-bits"/>')
        left = L - sent
        if left > 0:      # still at the sender: a bar inside A, proportional to what is left
            g.append(f'<rect x="44" y="{yw + 40 - 80 * float(left / L):.1f}" width="92" height="{80 * float(left / L):.1f}" rx="4" class="dl-bits"/>')
        if arrived > 0:
            g.append(f'<rect x="{w - 136}" y="{yw + 40 - 80 * float(arrived / L):.1f}" width="92" height="{80 * float(arrived / L):.1f}" rx="4" class="dl-bits got"/>')
        tv = t * scale_u
        g.append(f'<text x="{w / 2:.0f}" y="44" class="dl-clock">t = {fmt(tv, None if (tv * 100).denominator == 1 else 2)} {uname}</text>')
        g.append("</g>")
        o += g
    o.append("</svg>")
    return "".join(o), stats


# ---------------------------------------------------------------- buffer that fills when aL > R
def buffer_frames(pfx, inflow, R, B, times, w=980, h=260):
    """a router buffer of B bits fed at `inflow` bits/s and drained at R bits/s, at the given times (s).
    Fill = min(B, (inflow - R) t); once full, the excess (inflow - R) bits/s is dropped. Hidden groups {pfx}-f{j}.
    Returns (svg, [(fill, dropped bits so far)])."""
    inflow, R, B = F(inflow), F(R), F(B)
    assert inflow > R
    x0, x1, y0, hh = 200, w - 200, 90, 100
    o = [f'<svg class="dl-buf" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         f'<rect x="{x0}" y="{y0}" width="{x1 - x0}" height="{hh}" rx="12" class="dl-bufbox"/>',
         f'<line x1="40" y1="{y0 + hh / 2}" x2="{x0 - 8}" y2="{y0 + hh / 2}" class="dl-arrow" marker-end="url(#{pfx}-ah)"/>',
         f'<line x1="{x1 + 8}" y1="{y0 + hh / 2}" x2="{w - 40}" y2="{y0 + hh / 2}" class="dl-arrow" marker-end="url(#{pfx}-ah)"/>',
         f'<defs><marker id="{pfx}-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'
         f'<path d="M0,0 L10,5 L0,10 z" fill="#c9cdf0"/></marker></defs>']
    stats = []
    for j, t in enumerate(times):
        t = F(t)
        grow = (inflow - R) * t
        fill = min(B, grow)
        dropped = max(F(0), grow - B)
        stats.append((fill, dropped))
        wf = (x1 - x0) * float(fill / B)
        # the queue drains from the right (the link side): fill grows leftward from the exit
        g = [f'<g id="{pfx}-f{j}" class="h">',
             f'<rect x="{x1 - wf:.1f}" y="{y0 + 6}" width="{wf:.1f}" height="{hh - 12}" rx="8" class="dl-fill{" full" if fill == B else ""}"/>',
             f'<text x="{w / 2:.0f}" y="{y0 - 26}" class="dl-clock">t = {fmt(t)} s</text>']
        if dropped > 0:
            g.append(f'<text x="{x0 - 100:.0f}" y="{y0 + hh + 60}" class="dl-drop">✗ ✗ ✗</text>')
        g.append("</g>")
        o += g
    o.append("</svg>")
    return "".join(o), stats


# ---------------------------------------------------------------- traffic-intensity gauge
def rho_gauge(pfx, marks, w=980, h=230, top=1.5, zones_hidden=True):
    """the ρ axis from 0 to `top` with the course's zones (low, rising toward 1, above 1) and markers.
    marks: [(key, rho value, label)] -> hidden groups {pfx}-m-<key>. Zone groups {pfx}-z0..z2 (hidden)."""
    x0, x1, y = 60, w - 60, 120
    X = lambda v: x0 + (x1 - x0) * float(v) / top
    o = [f'<svg class="dl-gauge" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    zones = [(0, 0.5, "z-low"), (0.5, 1, "z-mid"), (1, top, "z-high")]
    for i, (a, b, c) in enumerate(zones):
        o.append(f'<rect id="{pfx}-z{i}" x="{X(a):.0f}" y="{y - 22}" width="{X(b) - X(a):.0f}" height="44" class="dl-zone {c}{' h' if zones_hidden else ''}"/>')
    o.append(f'<line x1="{x0}" y1="{y}" x2="{x1}" y2="{y}" class="dl-axisl"/>')
    for v in (0, 0.5, 1, 1.5):
        if v <= top:
            o.append(f'<line x1="{X(v):.0f}" y1="{y - 30}" x2="{X(v):.0f}" y2="{y + 30}" class="dl-tick{" one" if v == 1 else ""}"/>'
                     f'<text x="{X(v):.0f}" y="{y + 66}" class="dl-tickt">{v:g}</text>')
    for key, v, lab in marks:
        xv = X(min(float(v), top))
        o.append(f'<g id="{pfx}-m-{key}" class="h"><path d="M{xv - 16:.0f},{y - 64} L{xv + 16:.0f},{y - 64} L{xv:.0f},{y - 30} z" class="dl-mark"/>'
                 f'<text x="{xv:.0f}" y="{y - 76}" class="dl-markt">{lab}</text></g>')
    o.append("</svg>")
    return "".join(o)


# ---------------------------------------------------------------- a path of links with rates (bottleneck)
def rate_path(pfx, segs, w=1000, h=300, hmax=150):
    """segments [(key, label, rate Mbps)] drawn as pipes whose height is proportional to the rate; ids
    {pfx}-p-<key> pipe highlight (hidden), {pfx}-bn the bottleneck marker under the narrowest pipe (hidden).
    Returns (svg, key of the minimum)."""
    n = len(segs)
    top = max(F(r) for _, _, r in segs)
    gap = 14
    pw = (w - 40 - gap * (n - 1)) / n
    yc = h / 2 - 10
    o = [f'<svg class="dl-path" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    mins = min(F(r) for _, _, r in segs)
    bn = [k for k, _, r in segs if F(r) == mins]
    for i, (key, lab, r) in enumerate(segs):
        x = 20 + i * (pw + gap)
        ph = hmax * float(F(r) / top)
        o.append(f'<rect x="{x:.0f}" y="{yc - ph / 2:.0f}" width="{pw:.0f}" height="{ph:.0f}" rx="10" class="dl-pipe"/>'
                 f'<rect id="{pfx}-p-{key}" x="{x - 4:.0f}" y="{yc - ph / 2 - 4:.0f}" width="{pw + 8:.0f}" height="{ph + 8:.0f}" rx="12" class="dl-pipehi h"/>'
                 f'<text x="{x + pw / 2:.0f}" y="{yc + hmax / 2 + 44:.0f}" class="dl-pipet">{fmt(F(r))}</text>'
                 f'<text x="{x + pw / 2:.0f}" y="{yc - hmax / 2 - 18:.0f}" class="dl-pipel">{lab}</text>')
    k = bn[0]
    i = [s[0] for s in segs].index(k)
    x = 20 + i * (pw + gap)
    o.append(f'<text id="{pfx}-bn" x="{x + pw / 2:.0f}" y="{yc + hmax / 2 + 84:.0f}" class="dl-bn h">▲ min</text>')
    o.append("</svg>")
    return "".join(o), k
