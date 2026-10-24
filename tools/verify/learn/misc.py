"""Checks the circuit-switching / multiplexing numbers used in the physical_misc brief.  ASCII only.
Run: py -I misc.py"""
import itertools, math

# ---- 25A-B Q5: ring A-B-C-D with 14 / 11 / 15 / 17 circuits; each connection uses 2 consecutive links clockwise
caps = {"AB": 14, "BC": 11, "CD": 15, "DA": 17}
best = 0
for x1 in range(0, 15):          # AB+BC
    for x2 in range(0, 12):      # BC+CD
        for x3 in range(0, 16):  # CD+DA
            for x4 in range(0, 18):  # DA+AB
                if x1 + x4 <= caps["AB"] and x1 + x2 <= caps["BC"] and x2 + x3 <= caps["CD"] and x3 + x4 <= caps["DA"]:
                    best = max(best, x1 + x2 + x3 + x4)
assert best == 28, best
# upper bound by adding the four constraints: 2*sum <= 14+11+15+17 = 57 -> sum <= 28
assert 14 + 11 + 15 + 17 == 57 and 57 // 2 == 28
# the sum of all circuits (57) is the wrong "everything" answer: each connection takes two
# a small ring for the brief: capacities 5, 4, 6, 7 -> bound floor(22/2)=11
caps2 = (5, 4, 6, 7)
best2 = 0
for x1 in range(0, 6):
    for x2 in range(0, 5):
        for x3 in range(0, 7):
            for x4 in range(0, 8):
                if x1 + x4 <= caps2[0] and x1 + x2 <= caps2[1] and x2 + x3 <= caps2[2] and x3 + x4 <= caps2[3]:
                    best2 = max(best2, x1 + x2 + x3 + x4)
assert sum(caps2) == 22 and best2 == 11, best2

# ---- circuit vs packet switching (lecture example): 1 Mbps link, user 100 kbps when active, active 10% of the time
link, rate, p = 1_000_000, 100_000, 0.1
assert link // rate == 10                       # circuit switching supports 10 users
N = 35
prob = sum(math.comb(N, k) * p ** k * (1 - p) ** (N - k) for k in range(11, N + 1))
assert abs(prob - 0.0004) < 0.0002, prob       # P(more than 10 active) is about 0.0004
# with 10 users the chance that 11 are active is zero obviously; with 35 users the expected active = 3.5
assert abs(N * p - 3.5) < 1e-12

# ---- TDM/FDM (lecture example): 1.536 Mbps link, 24 slots -> 64 kbps each ; file 640,000 bit
assert 1_536_000 / 24 == 64_000
t = 640_000 / 64_000
assert t == 10.0
assert t + 0.5 == 10.5     # plus 500 ms circuit establishment

# ---- store-and-forward packet switching: N links, packet L, rate R: N*L/R (no propagation)
L, R = 12000, 10e6
assert abs(3 * L / R - 3.6e-3) < 1e-12
# message of 3 packets over 2 links, pipelined: (N + P - 1) * L/R  with N=2 links, P=3 packets
assert (2 + 3 - 1) * L / R == 4 * 1.2e-3

# ---- propagation speed in cable approx 2e8 m/s: 1000 km -> 5 ms
assert abs(1e6 / 2e8 - 5e-3) < 1e-12

print("misc.py OK")
