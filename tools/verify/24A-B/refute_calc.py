import json
from fractions import Fraction as F
raw=json.load(open('tools/raw/24A-B.json',encoding='utf-8'))
key={q['num']:q['correctId'] for q in raw['questions']}
opts={q['num']:{o['id']:o['value'] for o in q['options']} for q in raw['questions']}
L=1500*8;R=20*10**6
rho=F(300000,3600)*L/R; print('Q1 rho',float(rho)); assert float(rho)==0.05 and '0.05' in opts[1][key[1]]
a=F(8,10)*R/L; print('Q6 a/s',float(a),'a/min',float(a*60)); assert round(float(a))==1333
assert '1,333 ' in opts[6][key[6]] and 'שנייה' in opts[6][key[6]]
# Q2 overlap: under fixed packet rate, rho=aL/R falls when R rises or L falls
base=F(300000,3600)*L/R
print('Q2 rho base',float(base),'R x2',float(F(300000,3600)*L/(2*R)),'L/2 (rate fixed)',float(F(300000,3600)*(L/2)/R),'L/2 (bit load fixed)',float(F(300000,3600)*L/R))
print('Q2: options a,c,d can each lower rho under some reading -> overlap')
# Q5: different IPs -> 2 servers -> minimum 2 persistent connections
assert key[5]=='d' and opts[5]['d']=='2'
print('OK 24A-B')
