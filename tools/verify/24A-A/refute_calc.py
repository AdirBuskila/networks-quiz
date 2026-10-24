import json
from fractions import Fraction as F
raw=json.load(open('tools/raw/24A-A.json',encoding='utf-8'))
key={q['num']:q['correctId'] for q in raw['questions']}
opts={q['num']:{o['id']:o['value'] for o in q['options']} for q in raw['questions']}
rho=F(500000,3600)*5000/10**9; assert round(float(rho),4)==0.0007; assert '0.0007' in opts[1][key[1]]
a=F(8,10)*10**10/5000; assert a==1600000 and '1,600,000' in opts[2][key[2]]
# Q4: DORA order; b and d texts identical after whitespace normalisation, both wrong
n=lambda s:''.join(s.split()).replace('`','')
assert n(opts[4]['b'])==n(opts[4]['d']); print('Q4 b==d text:',n(opts[4]['b']))
assert n(opts[4][key[4]])=='Discover->Offer->Request->Acknowledge' and key[4]=='c'
assert key[4] not in ('b','d'); assert not raw['questions'][3].get('acceptedIds')
print('OK 24A-A')
