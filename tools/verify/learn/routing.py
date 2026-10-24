"""Checks the Dijkstra / Distance-Vector numbers used in the routing brief.  ASCII only.  Run: py -I routing.py"""
import heapq

INF = float("inf")
# the classic 6-node example graph
EDGES = {("u", "v"): 2, ("u", "x"): 1, ("u", "w"): 5, ("v", "x"): 2, ("v", "w"): 3,
         ("x", "w"): 3, ("x", "y"): 1, ("w", "y"): 1, ("w", "z"): 5, ("y", "z"): 2}
G = {}
for (a, b), c in EDGES.items():
    G.setdefault(a, {})[b] = c
    G.setdefault(b, {})[a] = c

def dijkstra_steps(src):
    """returns the list of (step, N', {node: (D, pred)}) following the lecture table"""
    D = {n: (INF, None) for n in G}
    D[src] = (0, None)
    done = []
    steps = []
    # initialisation: neighbours of src
    for n, c in G[src].items():
        D[n] = (c, src)
    done.append(src)
    steps.append((list(done), dict(D)))
    while len(done) < len(G):
        cand = min((n for n in G if n not in done), key=lambda n: (D[n][0], n))
        done.append(cand)
        for n, c in G[cand].items():
            if n not in done and D[cand][0] + c < D[n][0]:
                D[n] = (D[cand][0] + c, cand)
        steps.append((list(done), dict(D)))
    return steps

steps = dijkstra_steps("u")
final = steps[-1][1]
assert {n: final[n][0] for n in G} == {"u": 0, "v": 2, "x": 1, "w": 3, "y": 2, "z": 4}
assert final["w"][1] == "y" and final["y"][1] == "x" and final["z"][1] == "y" and final["v"][1] == "u"
# order in which nodes are fixed: u, x, then v and y (tie, v first alphabetically in this script), then w, z
assert steps[1][0][:2] == ["u", "x"]
# after step 1 (u and x fixed): D(v)=2 (via u), D(w)=4 (via x), D(y)=2 (via x), D(z)=inf
s1 = steps[1][1]
assert s1["v"][0] == 2 and s1["w"][0] == 4 and s1["y"][0] == 2 and s1["z"][0] == INF
# after y is fixed: D(w) improves to 3 and D(z) = 4
s3 = [D for done, D in steps if len(done) == 4][0]
assert s3["w"] == (3, "y") and s3["z"] == (4, "y")
# direct re-computation with a heap
def heap_dijkstra(src):
    dist = {src: 0}
    pq = [(0, src)]
    while pq:
        d, n = heapq.heappop(pq)
        if d > dist.get(n, INF):
            continue
        for m, c in G[n].items():
            if d + c < dist.get(m, INF):
                dist[m] = d + c
                heapq.heappush(pq, (d + c, m))
    return dist
assert heap_dijkstra("u") == {"u": 0, "x": 1, "v": 2, "y": 2, "w": 3, "z": 4}

# ---- relaxation step (26A-A Q13): D(W)=min(10, D(V)+c(V,W)) = min(10, 5+3)
assert min(10, 5 + 3) == 8

# ---- 25A-A Q5: table from V: D(u)=4, D(w)=5 (pred u), D(y)=9 (pred w) -> Y = 1, X = 4
Du, Dw, Dy = 4, 5, 9
Y = Dw - Du
X = Dy - Dw
assert (X, Y) == (4, 1)
# the alternatives through x and z were longer (10 > 9)
assert 5 + 5 > 9 and 6 + 4 > 9

# ---- Distance Vector at x (Bellman-Ford): Dx(y) = min over neighbours v of c(x,v) + Dv(y)
def dv_all(dist_tables, node):
    """one DV update of node using the neighbour tables"""
    new = {}
    for dest in G:
        if dest == node:
            new[dest] = 0
            continue
        new[dest] = min(G[node][v] + dist_tables[v][dest] for v in G[node])
    return new

# start: every node knows only its direct neighbours
tab = {n: {m: (0 if m == n else G[n].get(m, INF)) for m in G} for n in G}
for _ in range(10):
    new = {n: dv_all(tab, n) for n in G}
    if new == tab:
        break
    tab = new
for n in G:
    assert tab[n] == {k: heap_dijkstra(n)[k] for k in G}
assert tab["x"] == {"u": 1, "v": 2, "w": 2, "x": 0, "y": 1, "z": 3}
# one step at x from the neighbours' *initial* vectors: u,v,w,y tables
init = {n: {m: (0 if m == n else G[n].get(m, INF)) for m in G} for n in G}
step1 = dv_all(init, "x")
assert step1 == {"u": 1, "v": 2, "w": 2, "x": 0, "y": 1, "z": 3}, step1
# Dx(z) options: via w 3+5=8, via y 1+2=3, via u 1+inf, via v 2+inf
assert 3 + 5 == 8 and 1 + 2 == 3

# ---- count of messages: LS needs the whole topology, DV only neighbours - qualitative, nothing to verify

print("routing.py OK")
