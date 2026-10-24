"""Checks every delay / traffic-intensity / throughput number used in docs/briefs/02-delays.md
and the delay lines of 14-cheat-sheet.md.  ASCII output only.  Run: py -I delays.py"""
import math

def close(a, b, tol=1e-9):
    assert abs(a - b) <= tol * max(1, abs(b)), (a, b)

# ---- traffic intensity rho = a*L/R
# 24A-A Q1 (and SAMP-1/2 Q1): R=1 Gbps, L=5000 bit, 500000 packets/hour
rho = (500000 / 3600) * 5000 / 1e9
assert round(rho, 4) == 0.0007, rho
# 24A-B Q1: R=20 Mbps, L=1500 B = 12000 bit, 300000 packets/hour
rho = (300000 / 3600) * 12000 / 20e6
close(rho, 0.05, 1e-6)
# forgetting hour->second conversion gives 3600 times more
assert round(500000 * 5000 / 1e9, 2) == 2.5

# ---- max arrival rate for rho target
# SAMP-1 Q2 / 24A-A Q2: R=10 Gbps, L=5000, rho=0.8
close(0.8 * 10e9 / 5000, 1_600_000)
# 24A-B Q6: R=20 Mbps, L=12000 bit, rho=0.8
assert round(0.8 * 20e6 / 12000) == 1333
assert round(1.0 * 20e6 / 12000) == 1667  # the wrong "rho=1" value
# per minute figure used in the brief
assert round(0.8 * 20e6 / 12000 * 60) == 80000

# ---- shared link / throughput (25A-B Q6)
Rs, Rc, R = 80, 70, 200
share = R / 4
thr = min(Rs, Rc, share)
assert thr == 50
assert round(thr / Rs, 3) == 0.625 and round(thr / Rc, 3) == 0.714

# ---- end-to-end store-and-forward, one packet, N links: sum(L/Ri + di/s)
def e2e(L, links, s):
    """links = [(R bit/s, length m)] ; returns seconds"""
    return sum(L / R + d / s for R, d in links)

# 25A-A Q2: L=8000, s=3e8
t = e2e(8000, [(10e6, 2e3), (10e6, 1e6), (1000e6, 2e3)], 3e8)
assert abs(t - 4.95e-3) < 0.01e-3, t
# 25A-B Q7: L=4000, rates 1G,100M,10M ; lengths 2 km, 1000 km, 2 km
t = e2e(4000, [(1e9, 2e3), (1e8, 1e6), (1e7, 2e3)], 3e8)
assert abs(t - 3.79e-3) < 0.01e-3, t
assert round(sum(4000 / r for r in (1e9, 1e8, 1e7)) * 1e6) == 444
# 26A-A Q11: L=12000 bit, rates 1G,10M,100M ; lengths 2 km, 5000 km, 3 km
t = e2e(12000, [(1e9, 2e3), (1e7, 5e6), (1e8, 3e3)], 3e8)
assert abs(t - 18.02e-3) < 0.01e-3, t
# 25A-C Q3: L=5000, rates 100M,50M,10M ; each 1000 km ; s=2e8
t = e2e(5000, [(100e6, 1e6), (50e6, 1e6), (10e6, 1e6)], 2e8)
assert abs(t - 15.65e-3) < 0.01e-3, t

# ---- worked example in the delays brief
# L=12000 bit, link 1: 100 Mbps 300 km ; link 2: 10 Mbps 600 km ; s=2e8
L = 12000
d_tx1, d_pr1 = L / 100e6, 300e3 / 2e8
d_tx2, d_pr2 = L / 10e6, 600e3 / 2e8
close(d_tx1, 0.12e-3); close(d_pr1, 1.5e-3); close(d_tx2, 1.2e-3); close(d_pr2, 3e-3)
tot = d_tx1 + d_pr1 + d_tx2 + d_pr2
assert abs(tot - 5.82e-3) < 1e-9
# rho on the 10 Mbps link at 500 packets/s
close(500 * L / 10e6, 0.6)
# if the 12000-bit packet is sent as 10 packets of 1200 bit in a pipeline, the total transmission time
# of the slow link is the same, but the first-bit arrival is earlier: only the claim "sum" is used in the brief.

# ---- caching example from the slides (access link utilization with hit rate 0.4)
close(0.6 * 1.50 / 1.54, 0.5844, 1e-3)

# ---- bandwidth vs throughput: 1 Gbps link, 100 Mbps bottleneck
assert min(1000, 100, 1000) == 100

# ---- transmission time with units: 100 KB over 100 Mbps (22S-A Q5 style, KB = 8000 bit here)
close(100e3 * 8 / 100e6, 0.008)
close(300e3 * 8 / 100e6, 0.024)

# ---- units: 1 Byte = 8 bit
assert 1500 * 8 == 12000

print("delays.py OK")
