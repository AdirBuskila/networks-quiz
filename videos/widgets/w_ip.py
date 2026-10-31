# -*- coding: utf-8 -*-
"""Widgets for the "ip" course videos (I01-I07): IPv4 arithmetic (ipaddress module) and figures computed from it.

Every figure is drawn from the numbers it shows: a 32-bit strip from the address and the prefix length, a byte
with its place values from the byte, a number line of the boundary byte from the block size, a forwarding table
whose ranges and verdicts come from ipaddress, a fragment bar from (D, MTU). Class names start with ip- (all
widget css files load into every video of the app).
"""
import html as _html
import ipaddress as ia

esc = lambda s: _html.escape(str(s), quote=True)


# ---------------------------------------------------------------- arithmetic (asserted against ipaddress)
def net(cidr):
    return ia.ip_network(cidr, strict=False)


def bits32(addr):
    return format(int(ia.IPv4Address(addr)), "032b")


def mask(p):
    m = str(ia.ip_network(f"0.0.0.0/{p}").netmask)
    b = "1" * p + "0" * (32 - p)
    assert m == ".".join(str(int(b[i:i + 8], 2)) for i in range(0, 32, 8))
    return m


def block(cidr):
    """(network address, broadcast address) as strings; cross-checked with the byte recipe of the course"""
    n = net(cidr)
    addr, p = cidr.split("/")
    p = int(p)
    by = [int(x) for x in addr.split(".")]
    if p % 8:
        k = p // 8
        size = 2 ** (8 - p % 8)
        lo = by[k] // size * size
        first = by[:k] + [lo] + [0] * (3 - k)
        last = by[:k] + [lo + size - 1] + [255] * (3 - k)
    else:
        k = p // 8
        first = by[:k] + [0] * (4 - k)
        last = by[:k] + [255] * (4 - k)
    first, last = ".".join(map(str, first)), ".".join(map(str, last))
    assert (first, last) == (str(n.network_address), str(n.broadcast_address)), (cidr, first, last)
    return first, last


def boundary(p):
    """(byte index 0..3, block size in that byte) for a prefix that ends inside a byte"""
    assert p % 8, "prefix ends at a byte edge: no boundary byte"
    return p // 8, 2 ** (8 - p % 8)


def addresses(p):
    return 2 ** (32 - p)


def hosts(p):
    return 2 ** (32 - p) - 2


def min_host_bits(n):
    """smallest h with 2^h - 2 >= n"""
    h = 2
    while 2 ** h - 2 < n:
        h += 1
    return h


def lpm(dest, rows):
    """rows [(name, cidr)] -> (winner name or None, {name: matches})"""
    d = ia.ip_address(dest)
    m = {nm: d in net(c) for nm, c in rows}
    hits = [(net(c).prefixlen, nm) for nm, c in rows if m[nm]]
    if not hits:
        return None, m
    best = max(hits)
    assert [h for h in hits if h[0] == best[0]] == [best], "two matching entries of the same length"
    return best[1], m


def frag(D, mtu, hdr=20):
    """D data bytes over a link with this MTU -> [(data, total size, offset field, MF)], checked two ways"""
    k = (mtu - hdr) // 8 * 8
    out, pos = [], 0
    while pos < D:
        d = min(k, D - pos)
        out.append((d, d + hdr, pos // 8, 1 if pos + d < D else 0))
        pos += d
    n = -(-D // k)
    assert len(out) == n and all(o[2] == j * k // 8 for j, o in enumerate(out))
    assert sum(o[0] for o in out) == D and out[-1][2] * 8 + out[-1][0] == D
    return out


def to_bin_steps(v):
    """decimal -> binary by the course recipe: [(place, bit, remainder after)]"""
    assert 0 <= v <= 255
    r, steps = v, []
    for pl in (128, 64, 32, 16, 8, 4, 2, 1):
        b = 1 if pl <= r else 0
        r -= b * pl
        steps.append((pl, b, r))
    assert "".join(str(s[1]) for s in steps) == format(v, "08b") and r == 0
    return steps


# ---------------------------------------------------------------- small html helpers
def ltr(s):
    return f'<span class="ip-ltr">{s}</span>'


def mono(s):
    return f'<span class="ip-mono">{esc(s)}</span>'


def row(id_, html_, hidden=True, cls=""):
    return f'<div id="{id_}" class="ip-row {cls}{" h" if hidden else ""}">{html_}</div>'


def big(id_, tex, hidden=True, cls=""):
    return f'<div id="{id_}" class="ip-big {cls}{" h" if hidden else ""}">${tex}$</div>'


def stack(*parts, gap=22):
    return f'<div class="ip-stack" style="gap:{gap}px">{"".join(parts)}</div>'


def table(id_, head, rows, hidden=True, ids=None, cls=""):
    """a small RTL table; rows of html cells; ids: optional id per row (hidden rows)"""
    th = "".join(f"<th>{h}</th>" for h in head)
    trs = []
    for i, r in enumerate(rows):
        rid = f' id="{ids[i]}" class="h"' if ids else ""
        trs.append(f"<tr{rid}>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>")
    return (f'<table id="{id_}" class="ip-tab {cls}{" h" if hidden else ""}"><thead><tr>{th}</tr></thead>'
            f'<tbody>{"".join(trs)}</tbody></table>')


# ---------------------------------------------------------------- 32-bit strip
CW, G, X0 = 27, 20, 10


def _x(i):
    return X0 + i * CW + (i // 8) * G


def strip(pfx, addr, p=None, dec=True, dec_hidden=False, borrow=None, caption=None, hidden=False):
    """the 32 bits of addr in four byte groups, decimal byte above each group.
    Ids (hidden): {pfx}-pre-<k> prefix tint over byte k, {pfx}-host-<k> host tint, {pfx}-bor-<k> borrowed bits
    (p..borrow-1) tint, {pfx}-cut the prefix cut with '/p', {pfx}-bb frame of the boundary byte, {pfx}-dec-<k> the
    decimal label (hidden only if dec_hidden), {pfx}-cap the caption on the left."""
    b = bits32(addr)
    by = addr.split(".")
    w = _x(31) + CW + X0
    h = 150
    yc, hc = 50, 48
    o = [f'<svg class="ip-strip{" h" if hidden else ""}" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" '
         f'direction="ltr">']
    if p is not None:
        p2 = borrow or p
        for k in range(4):
            lo, hi = 8 * k, 8 * k + 8
            for name, a, z in (("pre", 0, p), ("bor", p, p2), ("host", p2, 32)):
                s, e = max(lo, a), min(hi, z)
                if s < e:
                    o.append(f'<rect id="{pfx}-{name}-{k}" x="{_x(s) - 1}" y="{yc - 3}" width="{_x(e - 1) + CW - _x(s) + 2}" '
                             f'height="{hc + 6}" rx="7" class="ip-{name} h"/>')
    for i, c in enumerate(b):
        o.append(f'<rect x="{_x(i)}" y="{yc}" width="{CW - 2}" height="{hc}" rx="4" class="ip-cell"/>'
                 f'<text x="{_x(i) + (CW - 2) / 2:.1f}" y="{yc + 33}" class="ip-bit">{c}</text>')
    if dec:
        for k in range(4):
            cx = (_x(8 * k) + _x(8 * k + 7) + CW) / 2
            hid = " h" if dec_hidden else ""
            o.append(f'<text id="{pfx}-dec-{k}" x="{cx:.1f}" y="34" class="ip-dec{hid}">{esc(by[k])}</text>')
    for k in range(3):
        cx = _x(8 * k + 7) + CW + G / 2 - 1
        o.append(f'<text x="{cx:.1f}" y="{yc + 38}" class="ip-dot">.</text>')
    if p is not None:
        if p % 8:
            cx = _x(p) - 1
        elif 0 < p < 32:
            cx = _x(p - 1) + CW + G / 2 - 1
        else:
            cx = _x(0) - 4 if p == 0 else _x(31) + CW + 2
        o.append(f'<g id="{pfx}-cut" class="h"><line x1="{cx:.1f}" y1="{yc - 12}" x2="{cx:.1f}" y2="{yc + hc + 14}" '
                 f'class="ip-cutl"/><text x="{cx:.1f}" y="{yc + hc + 46}" class="ip-cutt">/{p}</text></g>')
        if p % 8:
            k = p // 8
            o.append(f'<rect id="{pfx}-bb" x="{_x(8 * k) - 6}" y="{yc - 9}" width="{8 * CW + 10}" height="{hc + 18}" '
                     f'rx="10" class="ip-bb h"/>')
    if caption:
        o.append(f'<text id="{pfx}-cap" x="{w - 4}" y="{h - 6}" class="ip-cap">{esc(caption)}</text>')
    o.append("</svg>")
    return "".join(o)


def strip_ids(pfx, p, kind="pre", borrow=None):
    """the ids of the tints of one kind for a strip(pfx, ..., p, borrow=...)"""
    p2 = borrow or p
    a, z = {"pre": (0, p), "bor": (p, p2), "host": (p2, 32)}[kind]
    return [f"{pfx}-{kind}-{k}" for k in range(4) if max(8 * k, a) < min(8 * k + 8, z)]


# ---------------------------------------------------------------- one byte with its place values
def byte8(pfx, v, hidden_bits=True):
    """8 cells under 128 .. 1. Ids: {pfx}-b-<i> the bit digit (hidden), {pfx}-on-<i> a lit cell for a 1 bit,
    {pfx}-pl-<i> the place value label (always visible)."""
    bs = format(v, "08b")
    cw, gap, x0 = 100, 10, 6
    w = x0 * 2 + 8 * cw + 7 * gap
    h = 150
    o = [f'<svg class="ip-byte" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for i, c in enumerate(bs):
        x = x0 + i * (cw + gap)
        o.append(f'<text id="{pfx}-pl-{i}" x="{x + cw / 2}" y="34" class="ip-pl">{128 >> i}</text>'
                 f'<rect x="{x}" y="52" width="{cw}" height="88" rx="12" class="ip-bcell"/>')
        if c == "1":
            o.append(f'<rect id="{pfx}-on-{i}" x="{x}" y="52" width="{cw}" height="88" rx="12" class="ip-bon h"/>')
        o.append(f'<text id="{pfx}-b-{i}" x="{x + cw / 2}" y="115" class="ip-bdig{" h" if hidden_bits else ""}">{c}</text>')
    o.append("</svg>")
    return "".join(o)


# ---------------------------------------------------------------- the boundary byte as a number line
def bline(pfx, lo, hi, size, value=None, w=940, every=1, rng=True, hidden=False):
    """values lo..hi of one byte, a tick at every block start (multiple of size). Ids (hidden): {pfx}-b-<s> the block
    that starts at s, {pfx}-r-<s> its range label 's–e' above it, {pfx}-mk the marker at value with its label."""
    assert lo % size == 0 and hi % size == 0 and lo < hi
    L, R = 34, 34
    X = lambda v: L + (w - L - R) * (v - lo) / (hi - lo)
    h = 215
    ya = 104
    o = [f'<svg class="ip-line{" h" if hidden else ""}" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for s in range(lo, hi, size):
        x0, x1 = X(s), X(s + size)
        o.append(f'<rect id="{pfx}-b-{s}" x="{x0 + 2:.1f}" y="{ya - 36}" width="{x1 - x0 - 4:.1f}" height="36" rx="6" '
                 f'class="ip-blk h"/>')
        if rng:
            o.append(f'<text id="{pfx}-r-{s}" x="{(x0 + x1) / 2:.1f}" y="{ya - 48}" class="ip-rng h">{s}–{s + size - 1}</text>')
    o.append(f'<line x1="{X(lo):.1f}" y1="{ya}" x2="{X(hi):.1f}" y2="{ya}" class="ip-axis"/>')
    for j, s in enumerate(range(lo, hi + 1, size)):
        o.append(f'<line x1="{X(s):.1f}" y1="{ya - 12}" x2="{X(s):.1f}" y2="{ya + 12}" class="ip-tick"/>')
        if j % every == 0:
            o.append(f'<text x="{X(s):.1f}" y="{ya + 44}" class="ip-tl">{s}</text>')
    if value is not None:
        assert lo <= value < hi
        x = X(value)
        o.append(f'<g id="{pfx}-mk" class="h"><line x1="{x:.1f}" y1="{ya - 30}" x2="{x:.1f}" y2="{ya + 4}" class="ip-mkl"/>'
                 f'<path d="M{x:.1f},{ya + 54} l-12,22 l24,0 z" class="ip-mk"/>'
                 f'<text x="{x:.1f}" y="{ya + 108}" class="ip-mkt">{value}</text></g>')
    o.append("</svg>")
    return "".join(o)


# ---------------------------------------------------------------- forwarding table
def ftable(pfx, dest, rows, hidden=False, cols=(70, 330, 440, 70)):
    """rows [(name, cidr)]. Ids: {pfx}-row-<name> the row, {pfx}-hi-<name> its highlight (hidden), {pfx}-rg-<name>
    the range 'first – last' (hidden), {pfx}-v-<name> ✓/✗ (hidden). Returns (html, winner, {name: matches})."""
    win, m = lpm(dest, rows)
    gt = " ".join(f"{c}px" for c in cols)
    o = [f'<div class="ip-ft{" h" if hidden else ""}" id="{pfx}" style="grid-template-columns:{gt}">',
         f'<div class="ip-fh" style="grid-template-columns:{gt}"><span>כניסה</span><span>קידומת</span>'
         f'<span>טווח</span><span></span></div>']
    for nm, c in rows:
        f, l = block(c)
        mark = '<b class="ip-ok">✓</b>' if m[nm] else '<b class="ip-bad">✗</b>'
        o.append(f'<div class="ip-fr" id="{pfx}-row-{nm}" style="grid-template-columns:{gt}">'
                 f'<i id="{pfx}-hi-{nm}" class="ip-fhi h"></i>'
                 f'<span class="ip-fn">{esc(nm)}</span><span class="ip-mono">{esc(c)}</span>'
                 f'<span id="{pfx}-rg-{nm}" class="ip-mono ip-frg h">{esc(f)} – {esc(l)}</span>'
                 f'<span id="{pfx}-v-{nm}" class="ip-fv h">{mark}</span></div>')
    o.append("</div>")
    return "".join(o), win, m


# ---------------------------------------------------------------- fragments
FCOL = ["#2dd4bf", "#38bdf8", "#c084fc", "#fbbf24", "#34d399", "#fb7185"]


def fbar(pfx, D, mtu, w=940, hdr=20, hidden=False):
    """the D data bytes as a bar cut into fragments. Ids (hidden): {pfx}-f-<j> fragment j (rect + data bytes),
    {pfx}-p-<j> its first byte position above, {pfx}-o-<j> 'Offset' value below, {pfx}-mf-<j> its MF flag.
    Returns (svg, frag list)."""
    fr = frag(D, mtu, hdr)
    L, R = 20, 120
    X = lambda v: L + (w - L - R) * v / D
    h = 250
    yb, hb = 70, 70
    o = [f'<svg class="ip-fb{" h" if hidden else ""}" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         f'<rect x="{L}" y="{yb}" width="{w - L - R}" height="{hb}" rx="8" class="ip-fbase"/>',
         f'<text x="{w - R + 8}" y="{yb + 46}" class="ip-fend">{D}</text>']
    pos = 0
    for j, (d, size, off, mf) in enumerate(fr):
        x0, x1 = X(pos), X(pos + d)
        col = FCOL[j % len(FCOL)]
        cx = (x0 + x1) / 2
        lab_y = yb + 46 if x1 - x0 > 86 else yb - 14
        o.append(f'<g id="{pfx}-f-{j}" class="h"><rect x="{x0 + 2:.1f}" y="{yb}" width="{x1 - x0 - 4:.1f}" height="{hb}" '
                 f'rx="8" fill="{col}" fill-opacity=".42" stroke="{col}" stroke-width="3"/>'
                 f'<text x="{cx:.1f}" y="{lab_y}" class="ip-fd">{d}</text></g>')
        o.append(f'<text id="{pfx}-p-{j}" x="{x0 + 4:.1f}" y="{yb - 14 if x1 - x0 > 86 else yb - 50}" class="ip-fp h">{pos}</text>')
        o.append(f'<text id="{pfx}-o-{j}" x="{cx:.1f}" y="{yb + hb + 44}" class="ip-fo h">{off}</text>')
        o.append(f'<text id="{pfx}-mf-{j}" x="{cx:.1f}" y="{yb + hb + 86}" class="ip-fmf h">{mf}</text>')
        pos += d
    o.append(f'<text x="{w - R + 8}" y="{yb + hb + 44}" class="ip-flab">Offset</text>'
             f'<text x="{w - R + 8}" y="{yb + hb + 86}" class="ip-flab">MF</text>')
    o.append("</svg>")
    return "".join(o), fr
