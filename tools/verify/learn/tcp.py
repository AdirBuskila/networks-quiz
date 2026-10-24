"""Checks TCP / HTTP timing / reliable-transfer numbers used in the tcp, reliable_transfer, http, dns_dhcp and
sockets_email briefs.  ASCII only.  Run: py -I tcp.py"""
import math

def close(a, b, tol=1e-9):
    assert abs(a - b) <= tol * max(1, abs(b)), (a, b)

# ---- cumulative ACK trace (25A-B Q2): bytes 101-300 arrive, 301-400 lost, 401-700 arrive, 301-400 retransmitted
def acks(segments, start):
    """segments: list of (first_byte, last_byte) in arrival order; returns ACK sent after each arrival"""
    got = set()
    expected = start
    out = []
    for a, b in segments:
        got.update(range(a, b + 1))
        while expected in got:
            expected += 1
        out.append(expected)
    return out

res = acks([(101, 300), (401, 500), (501, 600), (601, 700), (301, 400)], 101)
assert res == [301, 301, 301, 301, 701], res
# triple duplicate ACK: three more ACKs of 301 after the first 301
assert res[1:4] == [301, 301, 301]

# ---- 3-way handshake (22S-A Q14): A sends SYN seq=500
x = 12345
syn = {"seq": 500}
synack = {"seq": x, "ack": syn["seq"] + 1}
ack3 = {"seq": syn["seq"] + 1, "ack": synack["seq"] + 1}
assert synack["ack"] == 501 and ack3["seq"] == 501 and ack3["ack"] == x + 1

# ---- data transfer numbers: seq=42, 8 bytes -> next ACK 50
assert 42 + 8 == 50

# ---- RTT estimation (alpha=0.125)
est = 0.875 * 100 + 0.125 * 140
close(est, 105.0)
est2 = 0.875 * est + 0.125 * 90
close(est2, 0.875 * 105 + 0.125 * 90)
assert round(est2, 4) == 103.1250
# timeout interval = Estimated + 4*Dev
close(105 + 4 * 10, 145)

# ---- congestion window by round (slow start doubling, then +1 per RTT; cap at ssthresh)
def cwnd_trace(rounds, ssthresh, loss_at=None, loss_kind="timeout"):
    c = 1
    out = []
    for t in range(1, rounds + 1):
        out.append((t, c, ssthresh))
        if loss_at is not None and t == loss_at:
            ssthresh = max(c // 2, 2)
            c = 1 if loss_kind == "timeout" else ssthresh
        elif c < ssthresh:
            c = min(2 * c, ssthresh)
        else:
            c += 1
    return out

tr = cwnd_trace(14, 16)
assert [c for _, c, _ in tr] == [1, 2, 4, 8, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
# timeout when cwnd reaches 20 (round 9): ssthresh=10, cwnd=1, then 1,2,4,8,10,11,12
tr = cwnd_trace(16, 16, loss_at=9, loss_kind="timeout")
assert [c for _, c, _ in tr][:9] == [1, 2, 4, 8, 16, 17, 18, 19, 20]
assert [c for _, c, _ in tr][9:] == [1, 2, 4, 8, 10, 11, 12], [c for _, c, _ in tr][9:]
assert tr[9][2] == 10
# triple duplicate ACK at the same point (Reno): cwnd = ssthresh = 10, then +1 per RTT
tr = cwnd_trace(14, 16, loss_at=9, loss_kind="dup3")
assert [c for _, c, _ in tr][9:] == [10, 11, 12, 13, 14], [c for _, c, _ in tr][9:]
# slow start doubling from 1: 1,2,4,8,16,32 reaches 32 in round 6
assert [2 ** k for k in range(6)] == [1, 2, 4, 8, 16, 32]
# 26A-A Q13 (Dijkstra relaxation) lives in routing.py

# ---- TCP rate ~ cwnd * MSS / RTT
rate = 20 * 1460 * 8 / 0.1
close(rate, 2_336_000)

# ---- header sizes
assert 20 > 8

# ---- non-persistent / persistent HTTP response time (22S-A Q5): page 100 KB, 5 images of 300 KB, RTT=500 ms, 100 Mbps
RTT = 0.5
tp = 100e3 * 8 / 100e6
ti = 300e3 * 8 / 100e6
close(tp, 0.008); close(ti, 0.024)
T_persist = 2 * RTT + tp + 5 * (RTT + ti)
close(T_persist, 3.628)
T_nonpersist = (2 * RTT + tp) + 5 * (2 * RTT + ti)
close(T_nonpersist, 6.128)
T_persist_pipe = 2 * RTT + tp + RTT + 5 * ti
close(T_persist_pipe, 1.628)
# non-persistent with 5 parallel connections for the images
T_par = (2 * RTT + tp) + (2 * RTT + 5 * ti)  # images share the link
close(T_par, 1.008 + 1.12)
# answer expression in the key: T = 1sec + 100KB/100Mb + 5*(500ms + 300KB/100Mb)
close(1 + tp + 5 * (0.5 + ti), T_persist)

# ---- DNS cost without cache (25A-C Q2): 3 queries x 30 ms
assert 3 * 30 == 90 and 4 * 30 == 120
# resolver cache with hit rate 0.8, hit 1 ms, miss 90 ms
close(0.8 * 1 + 0.2 * 90, 18.8)

# ---- file distribution (client-server vs P2P), F/u = 1 h, us = 10u, N = 10 (units of u = 1, F = 1 hour*u)
F = 1.0; u = 1.0; us = 10 * u; N = 10; dmin = 10 * u
Dcs = max(N * F / us, F / dmin)
Dp2p = max(F / us, F / dmin, N * F / (us + N * u))
close(Dcs, 1.0); close(Dp2p, 0.5)
# and for N = 100: C/S grows linearly, P2P stays below
Dcs = max(100 * F / us, F / dmin); Dp2p = max(F / us, F / dmin, 100 * F / (us + 100 * u))
close(Dcs, 10.0); close(Dp2p, 100 / 110)

# ---- stop-and-wait utilization (slides: 1 Gbps, 15 ms one-way propagation, 8000 bit packet)
L, R, prop = 8000, 1e9, 15e-3
dt = L / R
close(dt, 8e-6)
RTTsw = 2 * prop
U = dt / (RTTsw + dt)
assert abs(U - 0.00027) < 1e-5, U
U3 = 3 * dt / (RTTsw + dt)
assert abs(U3 - 0.0008) < 1e-5
# window to fill the pipe: N >= (RTT + L/R)/(L/R)
Nfill = math.ceil((RTTsw + dt) / dt)
assert Nfill == 3751, Nfill

# ---- window limits with k-bit sequence numbers
k = 2
assert 2 ** k - 1 == 3      # Go-Back-N max window
assert 2 ** (k - 1) == 2    # Selective Repeat max window
k = 3
assert 2 ** k - 1 == 7 and 2 ** (k - 1) == 4

# ---- Go-Back-N versus Selective Repeat: window 4, packets 0..7, first transmission of packet 3 is lost
def simulate(proto, nseg=8, window=4, lost=3):
    sent = []
    base = 0
    nxt = 0
    acked = set()
    recv_expect = 0          # GBN receiver
    recv_buf = set()         # SR receiver
    lost_pending = True
    inflight = []
    # round-based model: each round the sender fills the window, the receiver handles arrivals in order,
    # ACKs return before the next round; when nothing new can be sent the timer for 'base' fires.
    for _ in range(50):
        if base >= nseg:
            break
        while nxt < min(base + window, nseg):
            sent.append(nxt)
            inflight.append(nxt)
            nxt += 1
        # deliver
        arrivals = []
        for p in inflight:
            if p == lost and lost_pending:
                lost_pending = False
                continue
            arrivals.append(p)
        inflight = []
        if proto == "gbn":
            for p in arrivals:
                if p == recv_expect:
                    recv_expect += 1
            base = recv_expect
        else:
            for p in arrivals:
                recv_buf.add(p)
                acked.add(p)
            while base in acked:
                base += 1
        # timeout for the oldest unacked packet
        if base < nseg and nxt >= min(base + window, nseg):
            if proto == "gbn":
                resend = list(range(base, nxt))
            else:
                resend = [p for p in range(base, nxt) if p not in acked]
            for p in resend:
                sent.append(p)
                inflight.append(p)
    return sent

g = simulate("gbn")
s = simulate("sr")
assert len(g) == 12, g
assert len(s) == 9, s
assert g.count(3) == 2 and g.count(4) == 2 and g.count(6) == 2 and g.count(7) == 1
assert s.count(3) == 2 and s.count(4) == 1

# ---- sockets: server listening socket + one connection socket per client; client DNS (UDP) + TCP
assert 2 + 2 == 4          # 22S-A Q9: server 2, client 2
assert 1 + 1 == 2          # 23A-A Q7: client side: DNS + one persistent TCP

# ---- HTTP/1.1 vs HTTP/2 connection counts, 25A-C Q1 convention: 6 parallel connections
assert math.ceil(100 / 6) == 17

# ---- max-age
assert 3600 / 3600 == 1.0 and 3600 / 1000 == 3.6

print("tcp.py OK")
