# independent recomputation, 26A-A (refuter)
import ipaddress, math
# Q7 fragmentation: MTU 500, hdr 20 -> 480 payload/frag (multiple of 8)
pay=480
for total in (2000, 1980):  # packet incl header or payload 2000... payload=total-20 if incl hdr
    p = total-20 if total==2000 else total
    n=math.ceil(p/pay); print('Q7 payload',p,'frags',n,'frag4 offset(8B units)=',3*pay//8)
print('Q7 payload 2000 ->',math.ceil(2000/pay),'frags; offset',3*pay//8)
# Q9 LPM
dst=ipaddress.ip_address('25.36.67.5')
rt={'A':'25.36.0.0/16','B':'25.36.128.0/20','C':'25.36.64.0/20','D':'20.0.0.0/8'}
m=[(ipaddress.ip_network(v).prefixlen,k) for k,v in rt.items() if dst in ipaddress.ip_network(v)]
print('Q9',max(m))
# Q11 delay, store and forward
L=12000; links=[(1000e6,2e3),(10e6,5000e3),(100e6,3e3)]
t=sum(L/r+d/3e8 for r,d in links); print('Q11 ms',t*1e3)
# Q13
print('Q13',min(10,5+3))
# Q6: cwnd read off the graph (t=1..40); CA entry = first point where growth switches from doubling to +1
cw={}
seq=[1,2,4,8]+list(range(9,29))      # t=1..24
cw.update({i+1:v for i,v in enumerate(seq)})
cw.update({25:1,26:2,27:4,28:8,29:16,30:17,31:1,32:2,33:4,34:8,35:16})
cw.update({t:16+(t-35) for t in range(36,41)})
ca=[t for t in range(2,40) if cw[t]>=2*cw[t-1] and cw[t+1]==cw[t]+1 and cw[t]>1]
print('Q6 CA entry points',ca,'(ssthresh Reno would be 14 after t=24; graph shows 16: graph is schematic)')
