import ipaddress, math
# Q3
pay=1980
print('Q3 offsets',sorted({s//8*4 for s in range(8,2000,8) if math.ceil(pay/s)==5}))
# Q5 persistent no pipelining: 1 RTT handshake + 1 RTT page + 5*(RTT) + transmits
rtt=0.5;bw=100e6
tp=100e3*8/bw;ti=300e3*8/bw
print('Q5 total',2*rtt+tp+5*(rtt+ti),'form a:',1+tp+5*(0.5+ti))
# Q8 fragmentation 2000B, MTU1500
pay=1980;mx=(1500-20)//8*8
print('Q8 frag1 size',mx+20,'frag2 size',pay-mx+20,'offset2',mx//8)
# Q10 hamming
a='1001100';b='1001101'
valid={a,b}
for name,w in(('ID1',a),('ID2',b)):
    for i in range(7):
        f=w[:i]+('1' if w[i]=='0' else '0')+w[i+1:]
        print('Q10',name,'flip',i,f,'undetected' if f in valid else 'detected')
# Q11 even parity
for w in('1011101','1001101'):print('Q11',w,'ones',w.count('1'),'even parity bit',w.count('1')%2)
d=lambda x,y:sum(i!=j for i,j in zip(x,y))
print('Q11 dist ID1+p1 vs ID2+p0',d('1011101'+'1','1001101'+'0'))
# Q14
print('Q14 syn seq 500 -> ack 501; ACK seq 501 ack X+1')
