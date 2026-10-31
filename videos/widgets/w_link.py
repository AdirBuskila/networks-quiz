# -*- coding: utf-8 -*-
"""Widgets for the "link" course videos (L01-L08): the course's link-layer rules as small simulators, and HTML/SVG
figures drawn from what the simulators return.

Simulators taken verbatim from the course checker (tools/verify/needhelp/link/check.py, parsed with ast so its
checks do not run on import): crc, rem, xor, ones, failing, hd, switch. On top of them:
  crc_steps()     the long division row by row (re-asserted against the checker's crc/rem)
  parity_bit()    even / odd parity bit
  hops()          the four addresses of the frame on every link of a path
  csum16()        16-bit ones'-complement Internet checksum (UDP)
Figures (hidden pieces carry ids the timeline shows):
  bits()          a row of bit cells: {pfx}-hi{i} highlight, {pfx}-bad{i} red highlight, {pfx}-cnt count badge
  division()      CRC long division: {pfx}-g{k} the aligned G of step k, {pfx}-x{k} the row after the XOR,
                  {pfx}-rem the remainder ring, {pfx}-pad the appended zeros' tag
  grid2d()        2D parity table: {pfx}-rc{i} / {pfx}-cc{j} count badges (red when odd), {pfx}-ring-{i}-{j}
                  cell ring, {pfx}-fix-{i}-{j} the corrected bit
  dist_table()    pairwise Hamming distances: {pfx}-p{i}-{j} cell, {pfx}-min{i}-{j} min highlight
  switch_fig()    a 4-port switch with hosts: {pfx}-in{k} / {pfx}-out{k} arrows of frame k, {pfx}-drop{k}
  fwd_table()     the forwarding table: {pfx}-t-<host> rows
  path_fig()      hosts and routers in a chain: {pfx}-f{k} the frame header on link k
Class names start with lk- (all widget css files load into every video of the app).
"""
import ast
import re
import itertools
import pathlib
from html import escape as esc

# ---------------------------------------------------------------- the course checker's simulators
_CHECK = pathlib.Path(__file__).resolve().parents[2] / "tools" / "verify" / "needhelp" / "link" / "check.py"
_tree = ast.parse(_CHECK.read_text(encoding="utf-8"))
_ns = {}
exec(compile(ast.Module([n for n in _tree.body if isinstance(n, ast.FunctionDef)
                         and n.name in ("crc", "rem", "xor", "ones", "failing", "hd", "switch")], []),
             str(_CHECK), "exec"), _ns)
crc, rem, xor, ones, failing, hd, switch = (_ns[k] for k in ("crc", "rem", "xor", "ones", "failing", "hd", "switch"))

# the checker's own lesson examples, re-asserted so a change there is noticed
assert crc("1101", "1011") == "001" and rem("1101001", "1011") == "000"
assert switch([("A", "B", 1), ("B", "A", 2)]) == ([[2, 3, 4], [1]], {"A": 1, "B": 2})


# ---------------------------------------------------------------- own helpers (asserted against the checker)
def crc_steps(bits, G, append=True):
    """long division mod 2. bits = D (append=True: r zeros are added) or a received frame (append=False).
    Returns (dividend, steps, remainder); steps = [(pos, row_after_xor)] for every leading 1 inside the data part."""
    r = len(G) - 1
    cur = bits + ("0" * r if append else "")
    dividend = cur
    stop = len(bits) if append else len(bits) - r
    steps = []
    for i in range(stop):
        if cur[i] == "1":
            al = "0" * i + G + "0" * (len(cur) - i - len(G))
            cur = xor(cur, al)
            steps.append((i, cur))
    R = cur[-r:]
    assert set(cur[:-r]) <= {"0"}
    assert R == (crc(bits, G) if append else rem(bits, G))
    return dividend, steps, R


def parity_bit(data, kind="even"):
    b = ones(data) % 2 if kind == "even" else 1 - ones(data) % 2
    w = data + str(b)
    assert ones(w) % 2 == (0 if kind == "even" else 1)
    return str(b)


def flip(s, positions):
    """positions are 1-based"""
    return "".join(("1" if c == "0" else "0") if i + 1 in positions else c for i, c in enumerate(s))


def hops(path, ip_src, ip_dst):
    """path = [(name, [ifaces])…] from source to destination; a router has two interfaces (in, out).
    Returns one (mac_src, mac_dst, ip_src, ip_dst) per link: the MACs are the two adjacent interfaces."""
    out = []
    for (_, a), (_, b) in zip(path, path[1:]):
        out.append((a[-1], b[0], ip_src, ip_dst))
    return out


def csum16(words):
    """Internet checksum: ones'-complement of the ones'-complement sum of 16-bit words"""
    s = 0
    for w in words:
        s += w
        s = (s & 0xFFFF) + (s >> 16)
    return (~s) & 0xFFFF


def csum_ok(words, cs):
    """receiver: sum of the words and the checksum field must be all ones"""
    s = 0
    for w in list(words) + [cs]:
        s += w
        s = (s & 0xFFFF) + (s >> 16)
    return s == 0xFFFF


def min_distance(code):
    return min(hd(a, b) for a, b in itertools.combinations(code, 2))


def undetected(E, G):
    """an error word E (1 = flipped bit) is missed by CRC exactly when E is divisible by G"""
    return set(rem(E, G)) == {"0"} if len(E) >= len(G) else set(E) == {"0"}


# ---------------------------------------------------------------- small html helpers
def ltr(s):
    return f'<span class="lk-ltr">{s}</span>'


def mono(s):
    return f'<span class="lk-mono">{esc(s)}</span>'


def big(id_, tex, hidden=True, cls=""):
    return f'<div id="{id_}" class="lk-big {cls}{" h" if hidden else ""}">${tex}$</div>'


def row(id_, html_, hidden=True, cls=""):
    return f'<div id="{id_}" class="lk-row {cls}{" h" if hidden else ""}">{html_}</div>'


def stack(*parts, gap=22):
    return f'<div class="lk-stack" style="gap:{gap}px">{"".join(parts)}</div>'


def table(id_, head, rows, hidden=True, ids=None, cls=""):
    """a small RTL table; rows of html cells; ids: optional id per row (hidden rows)"""
    th = "".join(f"<th>{h}</th>" for h in head)
    trs = []
    for i, r in enumerate(rows):
        rid = f' id="{ids[i]}" class="h"' if ids and ids[i] else ""
        trs.append(f"<tr{rid}>" + "".join(f"<td>{c}</td>" for c in r) + "</tr>")
    return (f'<table id="{id_}" class="lk-tab {cls}{" h" if hidden else ""}"><thead><tr>{th}</tr></thead>'
            f'<tbody>{"".join(trs)}</tbody></table>')


# ---------------------------------------------------------------- bit rows
def bits(pfx, s, hidden=True, label="", split=None, count=None, size="", marks=()):
    """a word as cells (LTR). split: index after which a gap is drawn (data | parity bit).
    count: text of a badge after the row ({pfx}-cnt). marks: 1-based positions that get a small number above."""
    cells = []
    for i, c in enumerate(s):
        gap = " lk-gap" if split is not None and i == split else ""
        mk = f'<em class="lk-pos">{i + 1}</em>' if i + 1 in marks else ""
        cells.append(f'<span class="lk-c{gap}"><i id="{pfx}-hi{i}" class="lk-hi h"></i>'
                     f'<i id="{pfx}-bad{i}" class="lk-badhi h"></i>{mk}<b>{c}</b></span>')
    lab = f'<span class="lk-lab">{label}</span>' if label else ""
    cnt = (f'<span id="{pfx}-cnt" class="lk-cnt h">{count}</span>' if count is not None
           else ('<span class="lk-cnt"></span>' if label else ""))
    return f'<div id="{pfx}" class="lk-bits {size}{" h" if hidden else ""}">{lab}{"".join(cells)}{cnt}</div>'


# ---------------------------------------------------------------- CRC long division
def division(pfx, bits_, G, append=True, hidden=True):
    """the long division as rows of cells. Row 0: the dividend (appended zeros in accent, tag {pfx}-pad).
    Step k: G aligned under the leading 1 ({pfx}-g{k}) and the row after the XOR ({pfx}-x{k}); zeros left of the
    working position are dimmed. Final: ring on the last r cells ({pfx}-rem). Returns (html, steps, R)."""
    dividend, steps, R = crc_steps(bits_, G, append)
    n, r = len(dividend), len(G) - 1
    nd = len(bits_) if append else n

    def cells(s, lo, hi, cls_fn):
        out = []
        for i in range(n):
            if lo <= i < hi:
                out.append(f'<span class="lk-d {cls_fn(i)}">{s[i - lo] if len(s) < n else s[i]}</span>')
            else:
                out.append('<span class="lk-d"></span>')
        return "".join(out)

    rows = [f'<div class="lk-drow">{cells(dividend, 0, n, lambda i: "lk-pad" if i >= nd else "")}'
            f'<span id="{pfx}-pad" class="lk-dtag h">+{r} אפסים</span></div>']
    for k, (pos, after) in enumerate(steps):
        rows.append(f'<div id="{pfx}-g{k}" class="lk-drow lk-grow h">'
                    f'{cells(G, pos, pos + len(G), lambda i: "lk-gb")}<span class="lk-dtag">⊕</span></div>')
        nxt = steps[k + 1][0] if k + 1 < len(steps) else n - r
        last = k == len(steps) - 1
        lo = pos
        rows.append(f'<div id="{pfx}-x{k}" class="lk-drow lk-xrow h">'
                    + cells(after, lo, n, lambda i, nxt=nxt, last=last: (
                        "lk-rem" if last and i >= n - r else ("lk-dim" if i < nxt else "")))
                    + "</div>")
    ring = (f'<i id="{pfx}-rem" class="lk-remring h" style="--k:{r};--n:{n}"></i>')
    html_ = (f'<div id="{pfx}" class="lk-div{" h" if hidden else ""}" style="--n:{n}">{"".join(rows)}{ring}</div>')
    return html_, steps, R


# ---------------------------------------------------------------- 2D parity
def grid2d(pfx, grid, hidden=True):
    """grid: rows of ints, last column = row parity, last row = column parity. Counts include the check bits."""
    rows, cols = failing(grid)
    nr, nc = len(grid), len(grid[0])
    out = [f'<table id="{pfx}" class="lk-grid{" h" if hidden else ""}" dir="ltr"><tbody>']
    for i, r in enumerate(grid):
        tds = []
        for j, v in enumerate(r):
            cls = (" lk-chk" if j == nc - 1 or i == nr - 1 else "") + (" lk-sepc" if j == nc - 1 else "")
            tds.append(f'<td class="{cls.strip()}"><i id="{pfx}-ring-{i + 1}-{j + 1}" class="lk-ring h"></i>'
                       f'<b>{v}</b><span id="{pfx}-fix-{i + 1}-{j + 1}" class="lk-fix h">{1 - v}</span></td>')
        s = sum(r)
        tds.append(f'<td class="lk-cntc"><span id="{pfx}-rc{i + 1}" class="lk-badge {"odd" if s % 2 else "even"} h">{s}</span></td>')
        out.append(f'<tr class="{"lk-sepr" if i == nr - 1 else ""}">{"".join(tds)}</tr>')
    tds = []
    for j in range(nc):
        s = sum(r[j] for r in grid)
        tds.append(f'<td class="lk-cntc"><span id="{pfx}-cc{j + 1}" class="lk-badge {"odd" if s % 2 else "even"} h">{s}</span></td>')
    out.append(f'<tr>{"".join(tds)}<td class="lk-cntc"></td></tr>')
    out.append("</tbody></table>")
    return "".join(out), (rows, cols)


# ---------------------------------------------------------------- Hamming distances
def dist_table(pfx, code, hidden=True):
    """upper triangle of pairwise distances; ids {pfx}-p{i}-{j} (hidden cell value), {pfx}-min{i}-{j} highlight"""
    n = len(code)
    d = {(i, j): hd(code[i], code[j]) for i, j in itertools.combinations(range(n), 2)}
    m = min(d.values())
    head = "<th></th>" + "".join(f"<th>{mono(c)}</th>" for c in code[1:])
    trs = []
    for i in range(n - 1):
        tds = [f"<th>{mono(code[i])}</th>"]
        for j in range(1, n):
            if j <= i:
                tds.append("<td></td>")
            else:
                hi = f'<i id="{pfx}-min{i}-{j}" class="lk-hi h"></i>' if d[(i, j)] == m else ""
                tds.append(f'<td>{hi}<b id="{pfx}-p{i}-{j}" class="h">{d[(i, j)]}</b></td>')
        trs.append("<tr>" + "".join(tds) + "</tr>")
    return (f'<table id="{pfx}" class="lk-dist{" h" if hidden else ""}" dir="ltr"><thead><tr>{head}</tr></thead>'
            f'<tbody>{"".join(trs)}</tbody></table>'), d, m


# ---------------------------------------------------------------- switch
PORT_XY = {1: (170, 110), 2: (830, 110), 3: (170, 470), 4: (830, 470)}
SW = (380, 220, 240, 140)          # switch box x, y, w, h


def _port_anchor(p):
    x, y, w, h = SW
    return {1: (x + 30, y), 2: (x + w - 30, y), 3: (x + 30, y + h), 4: (x + w - 30, y + h)}[p]


def switch_fig(pfx, hosts, frames, w=1000, h=580):
    """hosts: {port: name}. frames: [(src, dst, in_port)] (dst may be 'FF' for broadcast). The forwarding decision
    of every frame comes from the checker's switch(); broadcast is a destination never learned.
    Returns (svg, outs, tables) with tables = the table after each frame."""
    outs, tables = [], []
    for k in range(len(frames)):
        o, t = switch([(s, d, p) for s, d, p in frames[:k + 1]])
        outs.append(o[-1])
        tables.append(t)
    x, y, bw, bh = SW
    g = [f'<svg class="lk-sw" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">',
         '<defs>' + "".join(f'<marker id="{pfx}-ah{c}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" '
                            f'markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{col}"/></marker>'
                            for c, col in (("i", "#2dd4bf"), ("o", "#38bdf8"))) + '</defs>']
    for p, (hx, hy) in PORT_XY.items():
        ax, ay = _port_anchor(p)
        g.append(f'<line x1="{ax}" y1="{ay}" x2="{hx}" y2="{hy}" class="lk-link"/>')
    g.append(f'<rect x="{x}" y="{y}" width="{bw}" height="{bh}" rx="18" class="lk-swbox"/>'
             f'<text x="{x + bw / 2}" y="{y + bh / 2 + 12}" class="lk-swt">switch</text>')
    for p in PORT_XY:
        ax, ay = _port_anchor(p)
        dy = 34 if ay == y else -16
        g.append(f'<circle cx="{ax}" cy="{ay}" r="9" class="lk-port"/>'
                 f'<text x="{ax}" y="{ay + dy}" class="lk-pn">{p}</text>')
    for p, (hx, hy) in PORT_XY.items():
        g.append(f'<rect x="{hx - 58}" y="{hy - 42}" width="116" height="84" rx="14" class="lk-host"/>'
                 f'<text x="{hx}" y="{hy + 14}" class="lk-hn">{esc(hosts.get(p, ""))}</text>')

    def arrow(p, inward, cls, mk):
        """on the link itself: from just outside the host box to just before the port (or back)"""
        ax, ay = _port_anchor(p)
        hx, hy = PORT_XY[p]
        pt = lambda t: (hx + t * (ax - hx), hy + t * (ay - hy))
        (x1, y1), (x2, y2) = (pt(0.30), pt(0.90)) if inward else (pt(0.90), pt(0.30))
        return (f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" class="{cls}" '
                f'marker-end="url(#{pfx}-ah{mk})"/>')

    for k, ((s, d, p), o) in enumerate(zip(frames, outs)):
        g.append(f'<g id="{pfx}-in{k}" class="h">{arrow(p, True, "lk-ain", "i")}</g>')
        g.append(f'<g id="{pfx}-out{k}" class="h">{"".join(arrow(q, False, "lk-aout", "o") for q in o)}</g>')
        if not o:
            ax, ay = _port_anchor(p)
            g.append(f'<text id="{pfx}-drop{k}" x="{ax + 40}" y="{ay}" class="lk-drop h">✗</text>')
    g.append("</svg>")
    return "".join(g), outs, tables


def fwd_table(pfx, order, port_of, hidden=True):
    """rows appear one by one: {pfx}-t-<host>"""
    rows = "".join(f'<tr id="{pfx}-t-{hname}" class="h"><td>{ltr(hname)}</td><td>{port_of[hname]}</td></tr>'
                   for hname in order)
    return (f'<table id="{pfx}" class="lk-tab lk-fwd{" h" if hidden else ""}"><thead><tr><th>כתובת MAC</th>'
            f'<th>ממשק</th></tr></thead><tbody>{rows}</tbody></table>')


# ---------------------------------------------------------------- path of hosts and routers
def _sub(name):
    """'R1' -> R with a subscript 1 (SVG tspan)"""
    m = re.fullmatch(r"([A-Za-z])(\d)", name)
    return f'{m.group(1)}<tspan baseline-shift="sub" font-size="0.7em">{m.group(2)}</tspan>' if m else esc(name)


def path_fig(pfx, path, headers, w=1040, h=520, shown=()):
    """path = [(name, [ifaces])…]; headers = hops() output. Nodes in a row; under link k the frame header
    {pfx}-f{k} (MAC src → dst, IP src → dst). Router interfaces are written next to the node."""
    n = len(path)
    xs = [90 + i * (w - 180) / (n - 1) for i in range(n)]
    yN = 110
    g = [f'<svg class="lk-path" id="{pfx}" viewBox="0 0 {w} {h}" width="{w}" height="{h}" direction="ltr">']
    for i in range(n - 1):
        g.append(f'<line x1="{xs[i] + 56}" y1="{yN}" x2="{xs[i + 1] - 56}" y2="{yN}" class="lk-link"/>')
    for i, (name, ifs) in enumerate(path):
        router = len(ifs) == 2
        if router:
            g.append(f'<circle cx="{xs[i]}" cy="{yN}" r="54" class="lk-router"/>')
            g.append(f'<text x="{xs[i] - 62}" y="{yN - 64}" class="lk-if" text-anchor="middle">{_sub(ifs[0])}</text>'
                     f'<text x="{xs[i] + 62}" y="{yN - 64}" class="lk-if" text-anchor="middle">{_sub(ifs[1])}</text>')
        else:
            g.append(f'<rect x="{xs[i] - 54}" y="{yN - 44}" width="108" height="88" rx="14" class="lk-host"/>')
        g.append(f'<text x="{xs[i]}" y="{yN + 13}" class="lk-hn">{esc(name)}</text>')
    for k, (ms, md, is_, id_) in enumerate(headers):
        cx = (xs[k] + xs[k + 1]) / 2
        bw, bh, top = 270, 210, yN + 110
        hcls = "" if k in shown else ' class="h"'
        g.append(f'<g id="{pfx}-f{k}"{hcls}><rect x="{cx - bw / 2}" y="{top}" width="{bw}" height="{bh}" rx="14" '
                 f'class="lk-frame"/>'
                 f'<text x="{cx}" y="{top + 40}" class="lk-fh">MAC</text>'
                 f'<text x="{cx}" y="{top + 82}" class="lk-fv mac">{_sub(ms)} → {_sub(md)}</text>'
                 f'<text x="{cx}" y="{top + 134}" class="lk-fh">IP</text>'
                 f'<text x="{cx}" y="{top + 176}" class="lk-fv ip">{esc(is_)} → {esc(id_)}</text></g>')
    g.append("</svg>")
    return "".join(g)


def build2d(data_rows):
    """even 2D parity: data rows (strings) -> full grid of ints with the check column and the check row"""
    g = [[int(c) for c in r] + [sum(int(c) for c in r) % 2] for r in data_rows]
    g.append([sum(r[j] for r in g) % 2 for j in range(len(g[0]))])
    assert failing(g) == ([], [])
    return g


def flip2d(grid, cells):
    """cells: 1-based (row, col)"""
    g = [r[:] for r in grid]
    for i, j in cells:
        g[i - 1][j - 1] ^= 1
    return g


# ---------------------------------------------------------------- Stop and Wait over a link with CRC
def stop_and_wait(corrupt):
    """frames 0, 1, … one at a time; corrupt = set of transmission indexes whose CRC fails at the receiver.
    The receiver discards a bad frame silently (no ACK, no NAK); the sender's timer expires and it resends the SAME
    frame with the SAME sequence number; the 1-bit sequence number advances only after an ACK.
    Returns the transmissions [(kind, seq, ok)] for two frames of data."""
    out, seq, tx, delivered = [], 0, 0, 0
    while delivered < 2:
        bad = tx in corrupt
        out.append(("data", seq, not bad))
        tx += 1
        if bad:
            out.append(("timeout", seq, None))
            continue
        out.append(("ack", seq, True))
        seq ^= 1
        delivered += 1
    return out


def ladder(pfx, names, msgs, w=900, step=96, slope=60, top=86):
    """two hosts, time going down. msgs: [dict(dir='R'|'L', label=str, cls='data'|'ack'|'retx', bad=bool,
    note=str)] or dict(timer=label) = a bracket on the sender's line from the previous message to the next one.
    Ids: {pfx}-m{i} each message (timers too)."""
    xl, xr = 200, w - 200
    col = {"data": "#2dd4bf", "ack": "#38bdf8", "retx": "#fbbf24"}
    ys, y = [], top
    for m in msgs:
        ys.append(y)
        y += step if "timer" not in m else step * 0.55
    h = y + slope - step + 50
    o = [f'<svg class="lk-lad" id="{pfx}" viewBox="0 0 {w} {h:.0f}" width="{w}" height="{h:.0f}" direction="ltr">',
         '<defs>' + "".join(f'<marker id="{pfx}-ah-{c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" '
                            f'markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="{v}"/></marker>'
                            for c, v in col.items()) + '</defs>']
    for x, nm in ((xl, names[0]), (xr, names[1])):
        o.append(f'<text x="{x}" y="40" class="lk-lh">{esc(nm)}</text>'
                 f'<line x1="{x}" y1="58" x2="{x}" y2="{h - 8:.0f}" class="lk-life"/>')
    for i, (m, y0) in enumerate(zip(msgs, ys)):
        if "timer" in m:
            ya, yb = ys[i - 1], ys[i + 1] if i + 1 < len(ys) else y0 + step
            o.append(f'<g id="{pfx}-m{i}" class="h"><line x1="{xl - 26}" y1="{ya}" x2="{xl - 26}" y2="{yb:.0f}" '
                     f'class="lk-brk"/><text x="{xl - 40}" y="{(ya + yb) / 2 + 10:.0f}" text-anchor="end" '
                     f'class="lk-brkt">{esc(m["timer"])}</text></g>')
            continue
        x0, x1 = (xl, xr) if m["dir"] == "R" else (xr, xl)
        y1 = y0 + slope
        c = m.get("cls", "data")
        o.append(f'<g id="{pfx}-m{i}" class="h"><line x1="{x0}" y1="{y0}" x2="{x1}" y2="{y1}" class="lk-arr" '
                 f'stroke="{col[c]}" marker-end="url(#{pfx}-ah-{c})"/>')
        mx, my = (x0 + x1) / 2, (y0 + y1) / 2
        lab = m["label"]
        tw = 17 * len(lab) + 24
        o.append(f'<rect x="{mx - tw / 2:.1f}" y="{my - 44:.1f}" width="{tw:.1f}" height="38" rx="9" class="lk-lbg"/>'
                 f'<text x="{mx:.1f}" y="{my - 15:.1f}" class="lk-lab2">{esc(lab)}</text>')
        if m.get("note"):
            nx, anchor = (x1 + 20, "start") if x1 > x0 else (x1 - 20, "end")
            cls = "lk-note bad" if m.get("bad") else "lk-note"
            o.append(f'<text x="{nx}" y="{y1 + 9}" text-anchor="{anchor}" class="{cls}">{esc(m["note"])}</text>')
        o.append("</g>")
    o.append("</svg>")
    return "".join(o)
