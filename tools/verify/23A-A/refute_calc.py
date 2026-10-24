import ipaddress, math
# Q1: 2000B packet, 20 hdr, 5 fragments
pay=1980; res=[]
for s in range(8,2000,8):
    n=math.ceil(pay/s)
    if n==5: res.append(s//8*4)
print('Q1 offsets of frag5 (units of 8B) for payload sizes giving 5 frags:',sorted(set(res)))
# Q8
d=ipaddress.ip_address('25.36.67.5')
rt={'A':'25.36.64.0/16','B':'25.36.128.0/20','C':'25.36.64.0/20','D':'20.0.0.0/8'}
m=[(ipaddress.ip_network(v,strict=False).prefixlen,k) for k,v in rt.items() if d in ipaddress.ip_network(v,strict=False)]
print('Q8 matches',m,'winner',max(m))
# Q16
n=ipaddress.ip_network('200.107.16.17/18',strict=False);print('Q16',n[0],n[-1])
