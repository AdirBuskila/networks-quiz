import ipaddress
from scipy.optimize import linprog
# Q5 circuit switched: x1:A->C (AB,BC) x2:B->D (BC,CD) x3:C->A (CD,DA) x4:D->B (DA,AB)
c=[-1,-1,-1,-1]
A=[[1,0,0,1],[1,1,0,0],[0,1,1,0],[0,0,1,1]]; b=[14,11,15,17]
r=linprog(c,A_ub=A,b_ub=b,integrality=[1]*4); print('Q5 max',-r.fun,r.x)
# Q6
R=200;n=4;Rs=80;Rc=70
th=min(Rs,R/n,Rc); print('Q6 thr',th,'util',th/Rs)
# Q7
L=4000; links=[(1000e6,2e3),(100e6,1000e3),(10e6,2e3)]
print('Q7 s',sum(L/r+d/3e8 for r,d in links))
# Q8 CRC
def crc(D,G,r):
    d=int(D,2)<<r; g=int(G,2)
    for i in range(d.bit_length()-1,r-1,-1):
        if d>>i&1: d^=g<<(i-r)
    return format(d,'0%db'%r)
print('Q8',crc('10011100','1001',3))
# Q10,15
print('Q10',ipaddress.ip_network('223.1.2.0/24').num_addresses)
dst=ipaddress.ip_address('25.36.67.5')
for k,v in {'A':'25.36.64.0/16','B':'25.36.128.0/20','C':'25.36.64.0/20','D':'20.0.0.0/8'}.items():
    n=ipaddress.ip_network(v,strict=False); print('Q15',k,n,dst in n)
# Q2 cumulative ack
recv=set(); 
def ack(s): 
    nxt=101
    while any(a<=nxt<=a+99 for a in s): nxt+=100
    return nxt
seq=[(101,),(201,),(401,),(501,),(601,)]
got=set(); out=[]
for s in [101,201,401,501,601,301]:
    got.add(s); out.append(ack(got))
print('Q2 acks after each:',out)
