"""Checks every CIDR / longest-prefix / fragmentation / NAT number used in the ip_cidr and
nat_ipv6_icmp briefs.  ASCII only.  Run: py -I cidr.py"""
import ipaddress, math

def net(s):
    return ipaddress.ip_network(s, strict=False)

# ---- block of an address (23A-A Q16 / 23A-B Q16)
n = net("200.107.16.17/18")
assert str(n.network_address) == "200.107.0.0"
assert str(n.broadcast_address) == "200.107.63.255"
assert n.num_addresses == 2 ** 14
assert str(n.netmask) == "255.255.192.0"

# 25A-B Q10: 223.1.2/24 -> 256 addresses
assert net("223.1.2.0/24").num_addresses == 256

# worked example: 192.168.10.77/26
n = net("192.168.10.77/26")
assert str(n.network_address) == "192.168.10.64"
assert str(n.broadcast_address) == "192.168.10.127"
assert n.num_addresses == 64 and n.num_addresses - 2 == 62
assert str(n.netmask) == "255.255.255.192"
# 77 = 01001101 ; /26 keeps the top 2 bits of the last byte -> 01000000 = 64
assert 77 & 0b11000000 == 64

# host bits needed for 50 hosts: smallest h with 2^h-2 >= 50 -> 6 -> /26
h = next(h for h in range(1, 32) if 2 ** h - 2 >= 50)
assert h == 6 and 32 - h == 26
# /24 split into four equal subnets -> /26, base addresses
subs = [str(s) for s in net("10.1.2.0/24").subnets(new_prefix=26)]
assert subs == ["10.1.2.0/26", "10.1.2.64/26", "10.1.2.128/26", "10.1.2.192/26"]
# block size in the interesting byte: /18 -> 64, /20 -> 16, /22 -> 4, /26 -> 64 in last byte
assert 256 // 2 ** (18 - 16) == 64 and 256 // 2 ** (20 - 16) == 16 and 256 // 2 ** (22 - 16) == 4 and 256 // 2 ** (26 - 24) == 64

# ---- longest prefix match
def lpm(dest, table):
    d = ipaddress.ip_address(dest)
    best = None
    for name, p in table:
        nn = net(p)
        if d in nn and (best is None or nn.prefixlen > best[1].prefixlen):
            best = (name, nn)
    return best[0], [nm for nm, p in table if d in net(p)]

T1 = [("A", "25.36.64.0/16"), ("B", "25.36.128.0/20"), ("C", "25.36.64.0/20"), ("D", "20.0.0.0/8")]
assert lpm("25.36.67.5", T1) == ("C", ["A", "C"])
T2 = T1 + [("E", "25.30.0.0/12")]
w, matches = lpm("25.36.67.5", T2)
assert w == "C" and "E" not in matches
assert str(net("25.30.0.0/12")) == "25.16.0.0/12"
assert net("25.30.0.0/12")[-1] == ipaddress.ip_address("25.31.255.255")
# 25A-A Q6
T3 = [("A", "12.100.50.0/20"), ("B", "12.100.64.0/20"), ("C", "12.0.0.0/8"), ("D", "12.100.0.0/16")]
w, matches = lpm("12.100.60.37", T3)
assert w == "A" and matches == ["A", "C", "D"]
assert str(net("12.100.50.0/20")) == "12.100.48.0/20"
# 26A-A Q9
T4 = [("A", "25.36.0.0/16"), ("B", "25.36.128.0/20"), ("C", "25.36.64.0/20"), ("D", "20.0.0.0/8")]
assert lpm("25.36.67.5", T4)[0] == "C"
# the 20 high bits of 25.36.67.5 and of 25.36.64.0 are equal (the brief shows this)
assert format(67, "08b") == "01000011" and format(64, "08b") == "01000000"
assert format(67, "08b")[:4] == format(64, "08b")[:4]
assert format(67, "08b")[:4] != format(128, "08b")[:4]
# worked example in the brief
T5 = [("P", "10.0.0.0/8"), ("Q", "10.20.0.0/16"), ("R", "10.20.30.0/24"), ("S", "0.0.0.0/0")]
assert lpm("10.20.30.99", T5)[0] == "R"
assert lpm("10.20.99.1", T5)[0] == "Q"
assert lpm("10.99.1.1", T5)[0] == "P"
assert lpm("11.1.1.1", T5)[0] == "S"

# ---- fragmentation
def frags(total_data, mtu, hdr=20):
    per = (mtu - hdr) // 8 * 8
    out, off = [], 0
    while off < total_data:
        n = min(per, total_data - off)
        mf = 1 if off + n < total_data else 0
        out.append({"data": n, "size": n + hdr, "offset": off // 8, "mf": mf})
        off += n
    return out

# SAMP-1 Q13 / SAMP-2 Q13: size 2000 (incl. 20 header -> 1980 data), MTU 420 -> 400 per fragment
f = frags(1980, 420)
assert len(f) == 5 and f[4]["offset"] == 200 and [x["offset"] for x in f] == [0, 50, 100, 150, 200]
f = frags(2000, 420)   # reading 2000 as data gives the same count and offset
assert len(f) == 5 and f[4]["offset"] == 200
# 22S-A Q3 / 23A-A Q1: MTU not given; offset of fragment 5 in {k/2} -> k=400 -> 200
for data in (1980, 2000):
    assert len(frags(data, 420)) == 5
assert 4 * 400 / 8 == 200
# k=480 -> 4 full frags carry 1920 -> need only ceil(1980/480)=5 -> offset 4*480/8 = 240 (not an option) ; k in [400,495]
cnt = {k: math.ceil(1980 / k) for k in range(400, 496, 8)}
assert all(v == 5 for v in cnt.values()), cnt
# 23A-B Q1/Q2: size 2580, MTU 532 -> data 2560, 512 per fragment
f = frags(2560, 532)
assert len(f) == 5 and f[4]["offset"] == 256 and f[4]["data"] == 512 and all(x["mf"] for x in f[:4]) and f[4]["mf"] == 0
assert frags(2580, 532).__len__() == 6 and frags(2048, 532).__len__() == 4
# 26A-A Q7: size 2000 (data 1980), MTU 500 -> 480 per fragment, fragment 4 offset 180
f = frags(1980, 500)
assert len(f) == 5 and f[3]["offset"] == 180 and f[4]["data"] == 60
f = frags(2000, 500)
assert len(f) == 5 and f[3]["offset"] == 180
# 22S-A Q8: 2000 bytes of data, MTU 1500 -> 1480 + 520 ; sizes 1500 and 540 ; offsets 0 and 185
f = frags(2000, 1500)
assert [(x["size"], x["offset"], x["mf"]) for x in f] == [(1500, 0, 1), (540, 185, 0)]
# slide example: 4000-byte datagram (3980 data), MTU 1500 -> offsets 0,185,370 ; last length 1040
f = frags(3980, 1500)
assert [x["offset"] for x in f] == [0, 185, 370] and f[2]["size"] == 1040
# worked example in the brief: 3000 data bytes, MTU 1000 -> 980 per fragment (multiple of 8 -> 976)
f = frags(3000, 1000)
assert [x["data"] for x in f] == [976, 976, 976, 72]
assert [x["offset"] for x in f] == [0, 122, 244, 366]
assert [x["mf"] for x in f] == [1, 1, 1, 0]
assert [x["size"] for x in f] == [996, 996, 996, 92]
# reassembly check: last offset*8 + last data = total
assert f[3]["offset"] * 8 + f[3]["data"] == 3000

# ---- NAT: the 20.0.0.1 : 130 mapping used in 22S-A Q8 is just a table lookup; model it
table = {("20.0.0.1", 130): ("10.0.0.1", 123)}
assert table[("20.0.0.1", 130)] == ("10.0.0.1", 123)

# ---- address-space sizes
assert 2 ** 32 == 4294967296
assert 2 ** 128 // 2 ** 32 == 2 ** 96
assert 40 == 20 + 20  # TCP+IP header bytes (minimum)

print("cidr.py OK")
