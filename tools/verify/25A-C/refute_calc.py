import math
# Q3 printed 5000 bits
L=5000
tx=sum(L/r for r in (100e6,50e6,10e6)); prop=3*1000e3/2e8
print('Q3 tx ms',tx*1e3,'prop ms',prop*1e3,'total ms',(tx+prop)*1e3)
print('Q3 alt: total length 1000km only ->',(tx+1000e3/2e8)*1e3)
for bits in (5000*8,50000):
    t=sum(bits/r for r in (100e6,50e6,10e6))+prop; print('bits',bits,'ms',t*1e3)
# Q1 rounds
print('Q1 ceil(100/6)=',math.ceil(100/6))
# Q2
print('Q2 root+TLD+auth =',3*30,' +client->local =',4*30)
