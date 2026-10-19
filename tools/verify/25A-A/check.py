# -*- coding: utf-8 -*-
"""Recomputation of every calculation question of 25A-A (ASCII output only).
Run: PYTHONUTF8=1 py tools/verify/25A-A/check.py
"""
import ipaddress

ok = True


def check(name, got, want):
    global ok
    status = "OK" if got == want else "MISMATCH"
    if got != want:
        ok = False
    print(f"{name}: got={got} want={want} {status}")


# Q2 - three store-and-forward links, 8000 bit, 3*10^8 m/s (figure: 10 Mbps/2 km, 10 Mbps/1000 km, 1000 Mbps/2 km)
L = 8000
links = [(10e6, 2e3), (10e6, 1000e3), (1000e6, 2e3)]
total = sum(L / r + d / 3e8 for r, d in links)
print("Q2 total delay [ms] =", round(total * 1e3, 4))
opts = {"a": 4e-3, "b": 4.0, "c": 10.0, "d": 10e-3}
closest = min(opts, key=lambda k: abs(opts[k] - total))
check("Q2 closest option", closest, "a")

# Q3 - two-dimensional parity, 6 rows x 17 columns as printed (last column / last row are the check bits), even parity
rows = ["10010100 11001010 1", "10001000 00000000 1", "11011011 11101001 1",
        "10010000 11101001 1", "00011100 01101010 1", "01011011 10100000 1"]
g = [[int(c) for c in r.replace(" ", "")] for r in rows]
bad_r = [i + 1 for i, r in enumerate(g) if sum(r) % 2]
bad_c = [j + 1 for j in range(17) if sum(r[j] for r in g) % 2]
check("Q3 flipped bit (row, col) even parity", (bad_r, bad_c), ([2], [4]))
odd_r = [i + 1 for i, r in enumerate(g) if sum(r) % 2 == 0]
print("Q3 odd-parity reading gives", len(odd_r), "bad rows (not a single flip) -> even parity is the scheme")

# Q5 - distances from v: u=4(v), w=5(u), x=5(v), z=6(w), y=9(w); edges v-u 4, u-x 1, u-w Y, v-w 7, v-x 5, x-w 9, w-y X, w-z 1, x-y 5, y-z 4
sols = []
for X in range(1, 15):
    for Y in range(1, 15):
        E = {("v", "u"): 4, ("u", "x"): 1, ("u", "w"): Y, ("v", "w"): 7, ("v", "x"): 5, ("x", "w"): 9,
             ("w", "y"): X, ("w", "z"): 1, ("x", "y"): 5, ("y", "z"): 4}
        adj = {}
        for (a, b), w in E.items():
            adj.setdefault(a, {})[b] = w
            adj.setdefault(b, {})[a] = w
        import heapq
        dist = {"v": 0}
        prev = {}
        pq = [(0, "v")]
        while pq:
            d, n = heapq.heappop(pq)
            if d > dist.get(n, 1e9):
                continue
            for m, w in adj[n].items():
                nd = d + w
                if nd < dist.get(m, 1e9):
                    dist[m] = nd
                    prev[m] = n
                    heapq.heappush(pq, (nd, m))
        want = {"v": 0, "u": 4, "w": 5, "x": 5, "z": 6, "y": 9}
        # previous nodes must be consistent: some shortest path with the printed predecessor exists
        ok_prev = all(dist[prev_n] + adj[prev_n][n] == dist[n]
                      for n, prev_n in {"u": "v", "w": "u", "x": "v", "z": "w", "y": "w"}.items())
        if dist == want and ok_prev:
            sols.append((X, Y))
check("Q5 (X, Y) consistent with the table", sols, [(4, 1)])

# Q6 - longest prefix match for 12.100.60.37
tbl = {"A": "12.100.50.0/20", "B": "12.100.64.0/20", "C": "12.0.0.0/8", "D": "12.100.0.0/16"}
dst = ipaddress.ip_address("12.100.60.37")
m = {k: ipaddress.ip_network(v, strict=False) for k, v in tbl.items()}
hits = [k for k, n in m.items() if dst in n]
best = max(hits, key=lambda k: m[k].prefixlen)
print("Q6 matching entries:", hits, "A network =", m["A"])
check("Q6 longest prefix", best, "A")

print("ALL OK" if ok else "SOME MISMATCH")
