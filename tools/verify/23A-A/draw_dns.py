# -*- coding: utf-8 -*-
"""Redraws the recursive-DNS figure of the 23A-A / 23A-B DNS question as a clean image (no scan crop).
Run: PYTHONUTF8=1 py tools/verify/23A-A/draw_dns.py
Writes images/exams/23A-A-Q9.png and images/exams/23A-B-Q11.png (identical drawing).
"""
import pathlib
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch

ROOT = pathlib.Path(__file__).resolve().parents[3]
OUT = ROOT / "images" / "exams"

W, H = 2.6, 0.9
NODES = {
    "root": (5.0, 7.0, "root DNS server", ""),
    "local": (2.0, 4.0, "local DNS server", "mywork.com"),
    "tld": (8.0, 4.0, "TLD DNS server", ""),
    "auth": (8.0, 1.0, "authoritative DNS server", "amazon.com"),
    "host": (2.0, 1.0, "requesting host", "pcdany.mywork.com"),
}


def edge(a, b, off):
    """Point on the rectangle border of node a towards node b, shifted sideways by `off` (perpendicular)."""
    x1, y1 = NODES[a][:2]
    x2, y2 = NODES[b][:2]
    vx, vy = x2 - x1, y2 - y1
    n = (vx ** 2 + vy ** 2) ** 0.5
    ux, uy = vx / n, vy / n
    px, py = -uy, ux
    return ux, uy, px * off, py * off


def arrow(ax, a, b, off, label, label_off):
    x1, y1 = NODES[a][:2]
    x2, y2 = NODES[b][:2]
    ux, uy, ox, oy = edge(a, b, off)
    # start/end: leave the boxes (about 0.75 from the centre along the direction, more for horizontal-ish)
    gap = 0.85
    sx, sy = x1 + ux * gap + ox, y1 + uy * gap + oy
    ex, ey = x2 - ux * gap + ox, y2 - uy * gap + oy
    ax.annotate("", xy=(ex, ey), xytext=(sx, sy), arrowprops=dict(arrowstyle="-|>", lw=1.8, color="#0f172a"))
    mx, my = (sx + ex) / 2, (sy + ey) / 2
    px, py = -uy, ux
    ax.text(mx + px * label_off, my + py * label_off, label, ha="center", va="center", fontsize=12,
            fontweight="bold", color="#b91c1c")


def draw(path):
    fig, ax = plt.subplots(figsize=(7.5, 6.4), dpi=160)
    ax.set_xlim(0, 10)
    ax.set_ylim(-0.3, 8.0)
    ax.axis("off")
    for key, (x, y, title, sub) in NODES.items():
        ax.add_patch(FancyBboxPatch((x - W / 2, y - H / 2), W, H, boxstyle="round,pad=0.03",
                                    fc="#e8eef7", ec="#334155", lw=1.4))
        ax.text(x, y, title, ha="center", va="center", fontsize=8.4)
        if sub:
            ax.text(x, y - H / 2 - 0.3, sub, ha="center", va="center", fontsize=9, color="#475569")
    # (from, to, perpendicular offset, label, label offset)
    arrow(ax, "host", "local", -0.22, "1", -0.45)
    arrow(ax, "local", "host", -0.22, "8", -0.45)
    arrow(ax, "local", "root", -0.22, "2", -0.45)
    arrow(ax, "root", "local", -0.22, "7", -0.45)
    arrow(ax, "root", "tld", -0.22, "3", -0.45)
    arrow(ax, "tld", "root", -0.22, "6", -0.45)
    arrow(ax, "tld", "auth", -0.22, "4", -0.45)
    arrow(ax, "auth", "tld", -0.22, "5", -0.45)
    fig.savefig(path, bbox_inches="tight", facecolor="white")
    plt.close(fig)


OUT.mkdir(parents=True, exist_ok=True)
for name in ("23A-A-Q9.png", "23A-B-Q11.png"):
    draw(OUT / name)
    print("wrote", name)
