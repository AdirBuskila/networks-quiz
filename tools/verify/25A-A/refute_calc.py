import ipaddress, itertools
# Q2
L=8000; links=[(10e6,2e3),(10e6,1000e3),(1000e6,2e3)]
t=sum(L/r+d/3e8 for r,d in links)*1e3; print('Q2 ms',t,'closest 4 vs 10:',abs(t-4),abs(t-10))
# Q3 2D parity
rows="""10010100 11001010 1
10001000 00000000 1
11011011 11101001 1
10010000 11101001 1
00011100 01101010 1
01011011 10100000 1""".split('\n')
g=[[int(c) for c in r.replace(' ','')] for r in rows]
for par in (0,1):
    badr=[i+1 for i,r in enumerate(g) if sum(r)%2!=par]
    badc=[j+1 for j in range(len(g[0])) if sum(r[j] for r in g)%2!=par]
    print('Q3 parity',par,'bad rows',badr,'bad cols',badc)
# last row/col are check bits: data rows 1-5, parity row 6
# Q5 Dijkstra: unknown X (w-y), Y (u-w)
import heapq
def dij(X,Y):
    E={('v','u'):4,('v','w'):7,('v','x'):5,('u','x'):1,('u','w'):Y,('w','x'):9,('w','y'):X,('w','z'):1,('x','y'):5,('z','y'):4}
    adj={}
    for (a,b),w in E.items(): adj.setdefault(a,[]).append((b,w)); adj.setdefault(b,[]).append((a,w))
    D={'v':0}; pq=[(0,'v')]; prev={}
    while pq:
        d,n=heapq.heappop(pq)
        if d>D[n]: continue
        for m,w in adj[n]:
            if d+w<D.get(m,1e9): D[m]=d+w; prev[m]=n; heapq.heappush(pq,(d+w,m))
    return D,prev
want={'v':0,'u':4,'w':5,'x':5,'z':6,'y':9}
wp={'u':'v','w':'u','x':'v','z':'w','y':'w'}
sol=[(X,Y) for X in range(1,15) for Y in range(1,15) if dij(X,Y)[0]==want and dij(X,Y)[1]==wp]
print('Q5 consistent (X,Y):',sol)
sol2=[(X,Y) for X in range(1,15) for Y in range(1,15) if dij(X,Y)[0]==want]
print('Q5 dist only:',sol2)
# Q6
dst=ipaddress.ip_address('12.100.60.37')
for k,v in {'A':'12.100.50.0/20','B':'12.100.64.0/20','C':'12.0.0.0/8','D':'12.100.0.0/16'}.items():
    n=ipaddress.ip_network(v,strict=False); print('Q6',k,n,dst in n)
