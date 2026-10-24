def cwnd(n,ss,start=1):
    c=start;out=[c]
    for _ in range(n-1):
        c=min(c*2,ss) if c<ss else c+1
        out.append(c)
    return out
print(cwnd(8,16)[-1],cwnd(7,12)[-1],cwnd(5,10**9)[-1],cwnd(10,10**9)[-1])
print(20*1460*8/0.1/1e6)
# timeout at round 8 (w=12): ssthresh 6, restart 1 at round 9
print(cwnd(5,6)[-1], 'reno', 6+3)
