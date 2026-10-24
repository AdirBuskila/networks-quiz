import math
RTT=200;t0=50000*8/1e8*1000;t1=250000*8/1e8*1000
print(2*RTT+t0+3*(2*RTT+t1), RTT+RTT+t0+5*(RTT+t1), RTT+RTT+t0+RTT+3*t1)
print(math.ceil(40/6),math.ceil(20/6),math.ceil(60/6),0.6*0.9,0.6*10+0.4*210)
def real(ts,ttl):
    n=0;exp=-1
    for t in ts:
        if t>=exp: n+=1;exp=t+ttl
    return n
print(real([0,30,70,100],60),real(range(0,100,10),45))
