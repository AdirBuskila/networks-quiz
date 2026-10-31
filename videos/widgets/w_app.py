# -*- coding: utf-8 -*-
"""Widgets for the "app" course videos (A01-A09: HTTP, caching, DNS, CDN): the course's models as small simulators,
and SVG figures drawn from what the simulators return.

Models (the course checker's, tools/verify/needhelp/app/check.py, parsed with ast so its module code does not run):
  RTT counts   non-persistent 2(N+1), persistent without pipelining 1+(N+1), pipelining 1+1+1
  time         t = 8*bytes/rate (1 KB = 1000 bytes); non-persistent 2RTT+t per object; persistent RTT, then RTT+t
               per object; pipelining RTT, RTT+t0, then one RTT for all images + the sum of their t
  rounds       ceil(n/6) per host, hosts in parallel -> max over hosts
  DNS          3T uncached, 2T with the TLD server known; 8 messages (iterative and recursive)
  TTL          a lookup is real when nothing is cached or age >= TTL; a hit does not refresh the age
Everything here is exact (fractions.Fraction) and re-asserted against the checker's functions.

Figures (hidden pieces carry ids that the timeline shows):
  ladder()    client/server message diagram, time down; arrows {pfx}-m{i}, brackets {pfx}-b-<key>
  timebars()  one horizontal bar per mode, segments in time order: {pfx}-<row>-s{i}, total {pfx}-<row>-tot
  dns()       client, resolver, root, TLD, authoritative; numbered arrows {pfx}-a{n}; node rings {pfx}-hn-<key>
  ttl_line()  accesses on a time axis (real lookup / hit) {pfx}-t{i}, validity bands {pfx}-v{k}
  rounds()    objects of each host in rounds of 6 (a column per round): {pfx}-<host>-r{k}
  hol()       three streams, one lost packet; waiting packets over TCP {pfx}-w2, over QUIC {pfx}-w3
  msgbox()    an HTTP message, line by line (LTR, Consolas): {pfx}-l{i}
Class names start with ap- (all widget css files load into every video of the app).
"""
import ast
import math
import pathlib
from fractions import Fraction as F
from html import escape as esc

# ---------------------------------------------------------------- the course checker's models
_CHECK = pathlib.Path(__file__).resolve().parents[2] / "tools" / "verify" / "needhelp" / "app" / "check.py"
_tree = ast.parse(_CHECK.read_text(encoding="utf-8"))
_WANT = ("rtt_np", "rtt_p", "rtt_pipe", "tx", "t_np", "t_p", "t_pipe", "real_lookups", "sliding_lookups",
         "messages_iterative", "messages_recursive")
_ns = {}
exec(compile(ast.Module([n for n in _tree.body if isinstance(n, ast.FunctionDef) and n.name in _WANT], []),
             str(_CHECK), "exec"), _ns)
assert all(k in _ns for k in _WANT), [k for k in _WANT if k not in _ns]
rtt_np, rtt_p, rtt_pipe = _ns["rtt_np"], _ns["rtt_p"], _ns["rtt_pipe"]
_tx, t_np, t_p, t_pipe = _ns["tx"], _ns["t_np"], _ns["t_p"], _ns["t_pipe"]
real_lookups, sliding_lookups = _ns["real_lookups"], _ns["sliding_lookups"]
messages_iterative, messages_recursive = _ns["messages_iterative"], _ns["messages_recursive"]

# the checker's own lesson examples, re-asserted so a change there is noticed
assert (rtt_np(4), rtt_p(4), rtt_pipe()) == (8, 5, 3)
assert real_lookups(60, [0, 25, 80]) == 2

SERVERS = ["root", "tld", "auth"]
assert messages_iterative(SERVERS) == 8 and messages_recursive(SERVERS) == 8


# ---------------------------------------------------------------- exact arithmetic
def tx_ms(nbytes, mbps):
    """transmission time in ms, exact: 8 * bytes / rate (1 KB = 1000 bytes); cross-checked with the checker's tx"""
    t = F(nbytes * 8 * 1000, mbps * 10**6)
    assert abs(float(t) - _tx(nbytes, float(mbps)) * 1000) < 1e-9
    return t


def segments(mode, rtt, t0, t1, n):
    """the page load as time-ordered pieces [(kind, duration)] for mode 'np' | 'p' | 'pipe'; kinds: 'conn' (opening a
    TCP connection), 'req' (request + response round trip), 'tx' (transmission of one object). Base page t0 and n
    images of t1. The total is asserted equal to the checker's t_np / t_p / t_pipe."""
    if mode == "np":
        segs = []
        for t in [t0] + [t1] * n:
            segs += [("conn", rtt), ("req", rtt), ("tx", t)]
        ref = t_np(rtt, t0, t1, n)
    elif mode == "p":
        segs = [("conn", rtt)]
        for t in [t0] + [t1] * n:
            segs += [("req", rtt), ("tx", t)]
        ref = t_p(rtt, t0, t1, n)
    elif mode == "pipe":
        segs = [("conn", rtt), ("req", rtt), ("tx", t0), ("req", rtt)] + [("tx", t1)] * n
        ref = t_pipe(rtt, t0, t1, n)
    else:
        raise ValueError(mode)
    assert sum(d for _, d in segs) == ref, (mode, segs, ref)
    return segs


def rtt_count(mode, n):
    """RTT rounds for a page with n images when transmission is neglected; the checker's counts take the number of
    objects (n + 1)"""
    c = sum(1 for k, _ in segments(mode, 1, 0, 0, n) if k != "tx")
    assert c == {"np": rtt_np, "p": rtt_p, "pipe": lambda _n: rtt_pipe()}[mode](n + 1)
    return c


def total(segs):
    return sum(d for _, d in segs)


def rounds_needed(counts, per=6):
    """{host: objects} -> ({host: ceil(n/per)}, max over hosts)"""
    r = {h: -(-c // per) for h, c in counts.items()}
    assert all(r[h] == math.ceil(c / per) for h, c in counts.items())
    return r, max(r.values())


def ttl_sim(ttl, times):
    """[(t, 'real'|'hit', stored_at)] and the validity intervals [(stored, stored + ttl)]; refuses an access at an
    age of exactly TTL (the course leaves that boundary out). The count of real lookups is the checker's."""
    out, iv, stored = [], [], None
    for t in times:
        assert stored is None or t - stored != ttl, f"boundary access at t={t}"
        if stored is None or t - stored >= ttl:
            stored = t
            iv.append((t, t + ttl))
            out.append((t, "real", t))
        else:
            out.append((t, "hit", stored))
    assert sum(1 for _, k, _ in out if k == "real") == real_lookups(ttl, times)
    return out, iv


def avg_delay(h, d_hit, d_miss):
    return F(h) * d_hit + (1 - F(h)) * d_miss


def new_util(h, u):
    return (1 - F(h)) * F(u)


def fmt(x):
    """exact decimal of a Fraction; refuses a repeating decimal"""
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
    return f'<span class="ap-ltr">{s}</span>'


def big(id_, tex, hidden=True, cls=""):
    return f'<div id="{id_}" class="ap-big {cls}{" h" if hidden else ""}">${tex}$</div>'


def row(id_, html_, hidden=True, cls=""):
    return f'<div id="{id_}" class="ap-row {cls}{" h" if hidden else ""}">{html_}</div>'


def stack(*parts, gap=22):
    return f'<div class="ap-stack" style="gap:{gap}px">{"".join(parts)}</div>'


def table(id_, head, rows, hidden=True, ids=None, cls=""):
    """a small RTL table; rows of html cells; ids: optional id per row (those rows start hidden)"""
    th = "".join(f"<th>{h}</th>" for h in head)
    trs = []
    for i, r in enumerate(rows):
        rid = f' id="{ids[i]}" class="h"' if ids and ids[i] else ""
        trs.append(f"<tr{rid}>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>")
    return (f'<table id="{id_}" class="ap-tab {cls}{" h" if hidden else ""}"><thead><tr>{th}</tr></thead>'
            f'<tbody>{"".join(trs)}</tbody></table>')


def msgbox(pfx, title, lines, hidden=True, shown=()):
    """an HTTP message: a small title, then the lines (LTR, Consolas); line i is {pfx}-l{i}, hidden unless in shown"""
    ls = "".join(f'<div id="{pfx}-l{i}" class="ap-ml{"" if i in shown else " h"}">{esc(s) if s else "&nbsp;"}</div>'
                 for i, s in enumerate(lines))
    return (f'<div id="{pfx}" class="ap-msg{" h" if hidden else ""}"><div class="ap-mt">{title}</div>'
            f'<div class="ap-mb">{ls}</div></div>')


# ---------------------------------------------------------------- client/server message diagram
ARROW = {"syn": "#c084fc", "req": "#38bdf8", "resp": "#2dd4bf", "dns": "#fbbf24", "lost": "#fb7185"}


def ladder(pfx, names, msgs, w=1000, slope=70, top=92, brackets=(), lab_w=15.5):
    """names = (left host, right host). msgs: [dict(dir='R'|'L', label=str, cls=key of ARROW, at=None)]: message i
    starts at time `at` (one unit = one one-way trip = `slope` px); by default when the previous message arrives (if
    the direction changes) or 0.4 units after the previous one (same direction, back to back). The label sits on the
    arrow (LTR, Consolas). brackets: [(key, t_from, t_to, label)] a bracket on the left host's line, times in units
    (one RTT = 2 units). Returns (svg, starts)."""
    xl, xr = 230, w - 230
    starts = []
    for i, m in enumerate(msgs):
        if m.get("at") is not None:
            t = m["at"]
        elif i == 0:
            t = 0
        elif m["dir"] != msgs[i - 1]["dir"]:
            t = starts[-1] + 1
        else:
            t = starts[-1] + 0.4
        starts.append(t)
    tmax = max(s + 1 for s in starts)
    h = top + tmax * slope + 34
    o = [f'<svg class="ap-lad" id="{pfx}" viewBox="0 0 {w} {h:.0f}" width="{w}" height="{h:.0f}" direction="ltr">',
         '<defs>' + "".join(f'<marker id="{pfx}-ah-{c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" '
                            f'markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{col}"/></marker>'
                            for c, col in ARROW.items()) + '</defs>']
    for x, nm in ((xl, names[0]), (xr, names[1])):
        o.append(f'<text x="{x}" y="42" class="ap-host">{esc(nm)}</text>'
                 f'<line x1="{x}" y1="62" x2="{x}" y2="{h - 8:.0f}" class="ap-life"/>')
    for i, (m, t) in enumerate(zip(msgs, starts)):
        x0, x1 = (xl, xr) if m["dir"] == "R" else (xr, xl)
        y0 = top + t * slope
        y1 = y0 + slope
        cls = m.get("cls", "req")
        g = [f'<g id="{pfx}-m{i}" class="h ap-{cls}">',
             f'<line x1="{x0}" y1="{y0:.1f}" x2="{x1}" y2="{y1:.1f}" class="ap-arr" marker-end="url(#{pfx}-ah-{cls})"/>']
        lab = m["label"]
        if lab:
            mx, my = (x0 + x1) / 2, (y0 + y1) / 2
            tw = lab_w * len(lab) + 22
            g.append(f'<rect x="{mx - tw / 2:.1f}" y="{my - 21:.1f}" width="{tw:.1f}" height="36" rx="9" class="ap-lbg"/>'
                     f'<text x="{mx:.1f}" y="{my + 7:.1f}" class="ap-lab">{esc(lab)}</text>')
        g.append("</g>")
        o += g
    for key, ta, tb, lab in brackets:
        x = xl - 26
        ya, yb = top + ta * slope, top + tb * slope
        o.append(f'<g id="{pfx}-b-{key}" class="h"><line x1="{x}" y1="{ya + 3:.0f}" x2="{x}" y2="{yb - 3:.0f}" class="ap-brk"/>'
                 f'<line x1="{x}" y1="{ya + 3:.0f}" x2="{x + 14}" y2="{ya + 3:.0f}" class="ap-brk"/>'
                 f'<line x1="{x}" y1="{yb - 3:.0f}" x2="{x + 14}" y2="{yb - 3:.0f}" class="ap-brk"/>'
                 f'<text x="{x - 14}" y="{(ya + yb) / 2 + 10:.0f}" text-anchor="end" class="ap-brkt">{esc(lab)}</text></g>')
    o.append("</svg>")
    return "".join(o), starts


# ---------------------------------------------------------------- page-load bars
SEG_LABEL = {"conn": "TCP", "req": "RTT", "tx": "t", "tls": "TLS", "quic": "QUIC"}


def timebars(pfx, rows, w=1000, scale=None, bar_h=50, gap=46, label_w=0, seg_text=True, unit="ms", show_total=True):
    """rows: [(key, title, segs)] with segs from segments(). Each bar starts at the left; widths are proportional to
    time (scale px per time unit, default: the longest bar fills the width). Ids: {pfx}-<key>-s{i} (segment i),
    {pfx}-<key>-tot (the total at the bar's end), {pfx}-<key>-t (the title). Zero-length segments are skipped (their
    ids still exist, empty), so an RTT-only count can use t = 0."""
    longest = max(total(s) for _, _, s in rows)
    tot_w = 150 if show_total else 0
    scale = scale or F(w - label_w - tot_w - 10) / longest
    h = len(rows) * (bar_h + gap + 34) + 6
    o = [f'<svg class="ap-bars" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for r, (key, title, segs) in enumerate(rows):
        y = r * (bar_h + gap + 34) + 34
        o.append(f'<text id="{pfx}-{key}-t" x="{label_w}" y="{y - 10}" class="ap-btitle">{esc(title)}</text>')
        x = F(label_w)
        for i, (kind, d) in enumerate(segs):
            sw = d * scale
            g = [f'<g id="{pfx}-{key}-s{i}" class="h">']
            if d > 0:
                g.append(f'<rect x="{float(x) + 1:.1f}" y="{y}" width="{max(float(sw) - 2, 2):.1f}" height="{bar_h}" rx="7" '
                         f'class="ap-seg {kind}"/>')
                lab = SEG_LABEL[kind]
                if seg_text and float(sw) >= 13 * len(lab) + 12:
                    g.append(f'<text x="{float(x + sw / 2):.1f}" y="{y + bar_h / 2 + 9:.1f}" class="ap-segt">{lab}</text>')
            g.append("</g>")
            o += g
            x += sw
        if show_total:
            o.append(f'<text id="{pfx}-{key}-tot" x="{float(x) + 14:.1f}" y="{y + bar_h / 2 + 11:.1f}" class="ap-btot h">'
                     f'{fmt(total(segs))}{(" " + unit) if unit else ""}</text>')
    o.append("</svg>")
    return "".join(o)


def seg_ids(pfx, key, segs, a=0, b=None):
    """ids of segments a..b-1 of a bar (default: all)"""
    return [f"{pfx}-{key}-s{i}" for i in range(a, len(segs) if b is None else b)]


# ---------------------------------------------------------------- DNS hierarchy
NODES = {"client": (120, 330, "לקוח"), "res": (430, 330, "Resolver"), "root": (840, 82, "Root"),
         "tld": (840, 330, "TLD .com"), "auth": (840, 578, "Authoritative")}
BOX = (100, 38)          # half width, half height for the left nodes; the right ones are wider
BOXR = (128, 38)


def dns_flow(mode, servers=("root", "tld", "auth")):
    """the messages of one uncached lookup, in order: [(from, to, kind)]; kind 'q' query, 'ref' referral, 'ans'
    answer. 'iter': the resolver asks each server in turn; 'rec': each server asks the next one. The counts are the
    checker's message models."""
    s = list(servers)
    if mode == "iter":
        f = [("client", "res", "q")]
        for i, x in enumerate(s):
            f += [("res", x, "q"), (x, "res", "ans" if i == len(s) - 1 else "ref")]
        f.append(("res", "client", "ans"))
        assert len(f) == messages_iterative(s)
    elif mode == "rec":
        chain = ["res"] + s
        f = [("client", "res", "q")] + [(chain[i], chain[i + 1], "q") for i in range(len(s))]
        f += [(chain[i + 1], chain[i], "ans") for i in reversed(range(len(s)))]
        f.append(("res", "client", "ans"))
        assert len(f) == messages_recursive(s)
    else:
        raise ValueError(mode)
    return f


def _edge(a, b, off):
    (xa, ya, _), (xb, yb, _) = NODES[a], NODES[b]
    dx, dy = xb - xa, yb - ya
    d = math.hypot(dx, dy)
    ux, uy = dx / d, dy / d
    nx, ny = -uy, ux
    ha = BOXR if a in ("root", "tld", "auth") else BOX
    hb = BOXR if b in ("root", "tld", "auth") else BOX

    def cut(hw, hh):
        return min(hw / abs(ux) if ux else 1e9, hh / abs(uy) if uy else 1e9) + 8
    sx, sy = xa + ux * cut(*ha) + nx * off, ya + uy * cut(*ha) + ny * off
    ex, ey = xb - ux * cut(*hb) + nx * off, yb - uy * cut(*hb) + ny * off
    return sx, sy, ex, ey, nx, ny


def dns(pfx, mode, w=1000, h=660, hidden_nodes=()):
    """the five boxes and the numbered messages of dns_flow(mode). Ids: {pfx}-a{n} (n from 1), {pfx}-n-<key> node,
    {pfx}-hn-<key> a ring around a node."""
    flow = dns_flow(mode)
    o = [f'<svg class="ap-dns" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         '<defs>' + "".join(f'<marker id="{pfx}-ah-{c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5.5" '
                            f'markerHeight="5.5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{col}"/></marker>'
                            for c, col in (("q", "#38bdf8"), ("ref", "#fbbf24"), ("ans", "#2dd4bf"))) + '</defs>']
    for k, (x, y, name) in NODES.items():
        hw, hh = BOXR if k in ("root", "tld", "auth") else BOX
        hcls = ' class="h"' if k in hidden_nodes else ""
        o.append(f'<g id="{pfx}-n-{k}"{hcls}>'
                 f'<rect x="{x - hw}" y="{y - hh}" width="{2 * hw}" height="{2 * hh}" rx="14" class="ap-node {k}"/>'
                 f'<text x="{x}" y="{y + 10}" class="ap-nname">{esc(name)}</text></g>'
                 f'<rect id="{pfx}-hn-{k}" x="{x - hw - 9}" y="{y - hh - 9}" width="{2 * hw + 18}" height="{2 * hh + 18}" '
                 f'rx="20" class="ap-nhi h"/>')
    for n, (a, b, kind) in enumerate(flow, 1):
        both = len({(p, q) for p, q, _ in flow if {p, q} == {a, b}}) > 1
        off = 15 if both else 0          # the normal flips with the direction, so the two arrows part
        sx, sy, ex, ey, nx, ny = _edge(a, b, off)
        mx, my = (sx + ex) / 2, (sy + ey) / 2
        bx, by = mx + nx * 30, my + ny * 30
        o.append(f'<g id="{pfx}-a{n}" class="h"><line x1="{sx:.1f}" y1="{sy:.1f}" x2="{ex:.1f}" y2="{ey:.1f}" '
                 f'class="ap-darr {kind}" marker-end="url(#{pfx}-ah-{kind})"/>'
                 f'<circle cx="{bx:.1f}" cy="{by:.1f}" r="21" class="ap-num {kind}"/>'
                 f'<text x="{bx:.1f}" y="{by + 9:.1f}" class="ap-numt">{n}</text></g>')
    o.append("</svg>")
    return "".join(o), flow


def arrows(pfx, a, b):
    """ids of arrows a..b (1-based, inclusive)"""
    return [f"{pfx}-a{n}" for n in range(a, b + 1)]


# ---------------------------------------------------------------- TTL on a time axis
def ttl_line(pfx, ttl, times, tmax, w=1000, h=290, tick=None):
    """accesses on a time axis: a real lookup (amber dot) or a cache hit (teal ring), each with its time; the
    validity band of every stored record (from its real lookup, TTL seconds; a hit does not extend it). Ids:
    {pfx}-t{i} access i, {pfx}-v{k} band of real lookup k. Returns (svg, sim)."""
    sim, iv = ttl_sim(ttl, times)
    L, R = 50, w - 40
    X = lambda t: L + (R - L) * t / tmax
    yb, ya = 92, 196
    o = [f'<svg class="ap-ttl" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         f'<line x1="{L}" y1="{ya}" x2="{R}" y2="{ya}" class="ap-axis"/>',
         f'<text x="{R}" y="{h - 8}" class="ap-axl" text-anchor="end">t (s)</text>']
    tick = tick or (10 if tmax <= 120 else 50)
    for t in range(0, tmax + 1, tick):
        o.append(f'<line x1="{X(t):.1f}" y1="{ya - 8}" x2="{X(t):.1f}" y2="{ya + 8}" class="ap-axis"/>')
    for k, (a, b) in enumerate(iv):
        xa, xb = X(a), X(min(b, tmax))
        lab = f'<text x="{(xa + xb) / 2:.1f}" y="{yb + 1}" class="ap-bandt">TTL {ttl}</text>' if xb - xa >= 120 else ""
        exp = (f'<line x1="{X(b):.1f}" y1="{yb - 42}" x2="{X(b):.1f}" y2="{ya}" class="ap-exp"/>'
               f'<text x="{X(b):.1f}" y="{yb - 50}" class="ap-expt">{b}</text>') if b <= tmax else ""
        o.append(f'<g id="{pfx}-v{k}" class="h"><rect x="{xa:.1f}" y="{yb - 30}" width="{xb - xa:.1f}" height="44" rx="8" '
                 f'class="ap-band"/>{lab}{exp}</g>')
    for i, (t, kind, _) in enumerate(sim):
        x = X(t)
        dot = (f'<circle cx="{x:.1f}" cy="{ya}" r="17" class="ap-real"/>' if kind == "real"
               else f'<circle cx="{x:.1f}" cy="{ya}" r="15" class="ap-hit"/>')
        o.append(f'<g id="{pfx}-t{i}" class="h">{dot}<text x="{x:.1f}" y="{ya + 54}" class="ap-tt {kind}">{t}</text></g>')
    o.append("</svg>")
    return "".join(o), sim


# ---------------------------------------------------------------- rounds of 6 parallel connections
def rounds(pfx, hosts, per=6, cell=46, w=None):
    """hosts: [(key, name, n_objects)]. Each host is a block; its objects fill columns of `per` cells, one column per
    round (round k = objects k*per+1 .. (k+1)*per). Ids: {pfx}-<key>-r{k} (column k, from 1), {pfx}-<key>-cap (the
    host's round count). Returns (svg, {key: rounds}, max)."""
    rmap, mx = rounds_needed({k: n for k, _, n in hosts}, per)
    gapc, gapb = 12, 90
    widths = [rmap[k] * (cell + gapc) - gapc for k, _, _ in hosts]
    W = w or (sum(widths) + gapb * (len(hosts) - 1) + 40)
    H = 70 + per * (cell + 8) + 70
    o = [f'<svg class="ap-rnd" id="{pfx}" viewBox="0 0 {W} {H}" width="{W}" height="{H}" direction="ltr">']
    x0 = (W - (sum(widths) + gapb * (len(hosts) - 1))) / 2
    for (key, name, n), bw in zip(hosts, widths):
        o.append(f'<text x="{x0 + bw / 2:.1f}" y="40" class="ap-host">{esc(name)}</text>')
        for k in range(rmap[key]):
            cx = x0 + k * (cell + gapc)
            g = [f'<g id="{pfx}-{key}-r{k + 1}" class="h">']
            for j in range(per):
                idx = k * per + j
                if idx >= n:
                    break
                g.append(f'<rect x="{cx:.1f}" y="{62 + j * (cell + 8)}" width="{cell}" height="{cell}" rx="8" '
                         f'class="ap-obj r{k % 2}"/>')
            g.append(f'<text x="{cx + cell / 2:.1f}" y="{62 + per * (cell + 8) + 36}" class="ap-rlab">{k + 1}</text></g>')
            o += g
        x0 += bw + gapb
    o.append("</svg>")
    return "".join(o), rmap, mx


def round_ids(pfx, key, a, b):
    return [f"{pfx}-{key}-r{k}" for k in range(a, b + 1)]


# ---------------------------------------------------------------- head-of-line blocking
def hol_sim(streams=("A", "B", "C"), per=3, lost=("A", 2)):
    """packets sent round-robin: A1 B1 C1 A2 B2 C2 ...; packet `lost` is lost. Until it is retransmitted:
    over TCP (HTTP/2) the byte stream is one ordered sequence, so every packet sent after the lost one waits;
    over QUIC (HTTP/3) order is kept per stream, so only the later packets of the same stream wait.
    Returns (order, waiting_tcp, waiting_quic) as lists of (stream, i)."""
    order = [(s, i) for i in range(1, per + 1) for s in streams]
    li = order.index(lost)
    w_tcp = [p for p in order[li + 1:]]
    w_quic = [p for p in order[li + 1:] if p[0] == lost[0]]
    return order, w_tcp, w_quic


def hol(pfx, w=1000, cell=(150, 64)):
    """three stream rows, packets by send order; ids {pfx}-lost (the ✗ on the lost packet), {pfx}-w2 (packets that
    wait over TCP), {pfx}-w3 (packets that wait over QUIC). Returns (svg, sim)."""
    order, w_tcp, w_quic = hol_sim()
    streams = sorted({s for s, _ in order})
    cw, ch = cell
    L = 110
    step = (w - L - 20) / len(order)
    H = 40 + len(streams) * (ch + 26) + 40
    pos = {}
    o = [f'<svg class="ap-hol" id="{pfx}" viewBox="0 0 {w} {H}" width="{w}" height="{H}" direction="ltr">']
    for r, s in enumerate(streams):
        y = 30 + r * (ch + 26)
        o.append(f'<text x="{L - 24}" y="{y + ch / 2 + 11}" class="ap-sname" text-anchor="end">{s}</text>'
                 f'<line x1="{L - 10}" y1="{y + ch / 2}" x2="{w - 10}" y2="{y + ch / 2}" class="ap-lane"/>')
    for k, (s, i) in enumerate(order):
        r = streams.index(s)
        x, y = L + k * step + 4, 30 + r * (ch + 26)
        pos[(s, i)] = (x, y)
        o.append(f'<rect x="{x:.1f}" y="{y}" width="{step - 8:.1f}" height="{ch}" rx="9" class="ap-pkt s{r}"/>'
                 f'<text x="{x + (step - 8) / 2:.1f}" y="{y + ch / 2 + 10}" class="ap-pktt">{s}{i}</text>')
    lx, ly = pos[("A", 2)]
    o.append(f'<g id="{pfx}-lost" class="h"><rect x="{lx:.1f}" y="{ly}" width="{step - 8:.1f}" height="{ch}" rx="9" '
             f'class="ap-pktlost"/><text x="{lx + (step - 8) / 2:.1f}" y="{ly + ch / 2 + 16}" class="ap-x">✗</text></g>')
    for key, ws in (("w2", w_tcp), ("w3", w_quic)):
        g = [f'<g id="{pfx}-{key}" class="h">']
        for p in ws:
            x, y = pos[p]
            g.append(f'<rect x="{x - 3:.1f}" y="{y - 3}" width="{step - 2:.1f}" height="{ch + 6}" rx="11" class="ap-wait"/>')
        g.append("</g>")
        o += g
    o.append("</svg>")
    return "".join(o), (order, w_tcp, w_quic)
