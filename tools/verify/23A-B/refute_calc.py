import ipaddress, math
# Q1/Q2
tot=2580;h=20;mtu=532
pay=tot-h;mx=(mtu-h)//8*8
n=math.ceil(pay/mx);print('Q2 payload',pay,'max frag payload',mx,'frags',n,'Q1 offset frag5',(n-1)*mx//8)
# Q10 (E = 25.30.0.0/12 as printed)
d=ipaddress.ip_address('25.36.67.5')
rt={'A':'25.36.64.0/16','B':'25.36.128.0/20','C':'25.36.64.0/20','D':'20.0.0.0/8','E':'25.30.0.0/12'}
m=[(ipaddress.ip_network(v,strict=False).prefixlen,k) for k,v in rt.items() if d in ipaddress.ip_network(v,strict=False)]
print('Q10 matches',sorted(m),'longest',max(m))
n=ipaddress.ip_network('200.107.16.17/18',strict=False);print('Q16',n[0],n[-1])
