# independent refuter checks for SAMP-2 / SAMP-1 / 24A-A (shared calc items); run: py -I refute_calc.py <CODE>
import json,sys,ipaddress,math
from fractions import Fraction as F
code=sys.argv[1] if len(sys.argv)>1 else 'SAMP-2'
raw=json.load(open(f'tools/raw/{code}.json',encoding='utf-8'))
key={q['num']:q['correctId'] for q in raw['questions']}
opts={q['num']:{o['id']:o['value'] for o in q['options']} for q in raw['questions']}
# Q1: rho = (500000/3600)*5000/1e9
rho=F(500000,3600)*5000/10**9; print('Q1 rho',float(rho)); assert round(float(rho),4)==0.0007
# Q2: a = 0.8*10e9/5000
a=F(8,10)*10**10/5000; print('Q2 a',a); assert a==1600000
assert '1,600,000' in opts[2][key[2]]
# Q11 longest prefix
dst=ipaddress.ip_address('25.36.67.5')
rt={'A':'25.36.64.0/16','B':'25.36.128.0/20','C':'25.36.64.0/20','D':'20.0.0.0/8'}
m=[(ipaddress.ip_network(v,strict=False).prefixlen,k) for k,v in rt.items() if dst in ipaddress.ip_network(v,strict=False)]
print('Q11',sorted(m)); assert max(m)[1]=='C'
if 11 in key: assert opts[11][key[11]]=='C'
# Q13 fragmentation brute force
def frags(total,mtu,hdr=20,datalen_includes_hdr=True):
    data=total-hdr if datalen_includes_hdr else total
    per=(mtu-hdr)//8*8; out=[];off=0
    while off<data: n=min(per,data-off); out.append(off//8); off+=n
    return out
for inc in (True,False):
    f=frags(2000,420,20,inc); print('Q13',inc,f); assert len(f)==5 and f[4]==200
assert opts[13][key[13]]=='200'
# Q14 slow start from cwnd list read off the graph
cw={1:1,2:2,3:4,4:8,5:16,6:32}; 
cwnd=[1,2,4,8,16,32]+list(range(33,43))+list(range(21,27))+[1,2,4,8]
assert len(cwnd)==26
ss=[i+1 for i in range(1,26) if cwnd[i]==2*cwnd[i-1]]
ss_rounds=sorted(set(ss)|{i-1 for i in ss}) if False else None
runs=[];cur=[]
for i in range(26):
    if i==0 or cwnd[i]==2*cwnd[i-1] or cwnd[i]==1: cur.append(i+1)
    else:
        if cur: runs.append((cur[0],cur[-1])); cur=[]
if cur: runs.append((cur[0],cur[-1]))
print('Q14 slow-start runs',runs); assert runs==[(1,6),(23,26)]
assert opts[14][key[14]]=='[1,6] , [23, 26]'
print('OK',code)
