# Learn coverage: concept, brief section, example question ids

Brief files are in `docs/briefs/`. Every one of the 166 bank questions appears in at least one row (checked by script).

| Concept | Brief section | Question ids |
|---|---|---|
| Five layers, role of each layer | 01 five layers | 22S-A-Q13, 24A-B-Q10, 25A-C-Q14, 26A-A-Q3 |
| Application picks TCP or UDP service | 01 principles | 23A-B-Q6 |
| Port numbers belong to transport protocols | 01 principles | 25A-C-Q13 |
| Traffic intensity, hour to second conversion | 02 recipe A | SAMP-1-Q1, SAMP-2-Q1, 24A-A-Q1, 24A-B-Q1 |
| Maximum arrival rate for a given rho | 02 recipe B | SAMP-1-Q2, SAMP-2-Q2, 24A-A-Q2, 24A-B-Q6 |
| Store-and-forward end-to-end delay | 02 recipe C | 25A-A-Q2, 25A-B-Q7, 25A-C-Q3, 26A-A-Q11 |
| Shared link throughput and utilization | 02 recipe D | 25A-B-Q6 |
| Bandwidth vs throughput, queue overflow, processing delay, lowering load | 02 definitions, traps | 25A-C-Q12, 25A-C-Q5, 25A-C-Q6, 24A-B-Q2 |
| HTTP/2 vs HTTP/1.1, HOL blocking | 03 HTTP/2, HTTP/3, QUIC | SAMP-1-Q3, SAMP-2-Q3, 24A-A-Q3, 24A-B-Q3 |
| QUIC and HTTP/3, latency to remote users | 03 HTTP/2, HTTP/3, QUIC | SAMP-1-Q5, SAMP-2-Q5, 24A-A-Q5, 24A-B-Q8 |
| Counting TCP connections | 03 connections and RTT | SAMP-1-Q6, SAMP-2-Q6, 24A-A-Q6, 24A-B-Q5, 25A-C-Q1, 25A-A-Q14, 23A-A-Q12 |
| Page load time, persistent vs non-persistent | 03 example | 22S-A-Q5 |
| Cookies, first and third party, stateless | 03 cookies, messages | SAMP-1-Q7, SAMP-2-Q7, 24A-A-Q7, 25A-A-Q1, 25A-B-Q4 |
| Conditional GET, 304, empty body, max-age, caches | 03 cache | SAMP-1-Q10, SAMP-2-Q10, 24A-A-Q10, 22S-A-Q15, 25A-A-Q11, 26A-A-Q2 |
| Methods and status codes (POST, PUT) | 03 messages | 23A-A-Q4, 24A-B-Q4 |
| CDN problems solved, smart DNS | 03 CDN | SAMP-1-Q8, SAMP-2-Q8, 24A-A-Q8, 23A-A-Q6, 23A-B-Q8, 23A-A-Q19, 23A-B-Q18 |
| P2P advantages | 03 P2P and DASH | 23A-A-Q5, 23A-B-Q7 |
| DASH manifest | 03 P2P and DASH | 25A-B-Q9 |
| DHCP messages, order, ports, data given | 04 DHCP | SAMP-1-Q4, SAMP-2-Q4, SAMP-1-Q9, SAMP-2-Q9, 22S-A-Q4, 22S-A-Q7, 22S-A-Q12, 22S-A-Q16, 23A-A-Q2, 23A-A-Q15, 23A-B-Q3, 23A-B-Q15, 24A-A-Q4, 24A-A-Q9, 24A-B-Q7, 25A-B-Q14, 26A-A-Q5, 26A-A-Q8 |
| DHCP cannot replace ARP and the reverse | 04 DHCP | SAMP-1-Q12, SAMP-2-Q12, 23A-A-Q11, 23A-B-Q13, 26A-A-Q4 |
| ARP function | 04 ARP | 22S-A-Q18, 25A-B-Q12, 25A-C-Q9, 25A-C-Q15 |
| DNS resolution path, recursive vs iterative | 04 DNS | 23A-A-Q9, 23A-B-Q11, 25A-B-Q1, 25A-A-Q13 |
| DNS TTL, per-record caching, lookup time | 04 DNS | 24A-B-Q9, 26A-A-Q1, 25A-C-Q2 |
| Which protocols run in a scenario | 04 recipe | 23A-A-Q13, 23A-A-Q14, 23A-B-Q14 |
| Socket counting | 05 recipe | 22S-A-Q9, 23A-A-Q7, 23A-B-Q9 |
| Socket API call order | 05 sockets | 25A-B-Q13 |
| Email path, SMTP and access protocols | 05 email | 25A-A-Q12 |
| UDP vs TCP uses and header sizes | 06 UDP | 25A-A-Q10, 25A-B-Q3 |
| Checksum properties | 06 checksum | 22S-A-Q6 |
| Stop-and-Wait on error | 07 Stop-and-Wait | 22S-A-Q17 |
| Seq/ACK numbers, cumulative ACK | 08 segment, ACK trace | 25A-B-Q2 |
| Three-way handshake | 08 handshake | 22S-A-Q14, 25A-A-Q15 |
| Reading cwnd graphs | 08 recipe | SAMP-1-Q14, SAMP-2-Q14, 26A-A-Q6 |
| Slow Start, window reduction, collapse, window size | 08 congestion control | 25A-C-Q4, 25A-C-Q7, 25A-C-Q10, 25A-C-Q16 |
| Flow vs congestion control | 08 flow, congestion | 23A-A-Q20, 23A-B-Q19, 23A-B-Q20 |
| Reliable transport functions | 08 reliable functions | 23A-A-Q17, 23A-B-Q17 |
| RTT estimation, TCP vs UDP | 08 timeout, reliable functions | 23A-A-Q3, 23A-B-Q4, 23A-A-Q10, 23A-B-Q12 |
| Longest Prefix Match | 09 LPM | SAMP-1-Q11, SAMP-2-Q11, 23A-A-Q8, 23A-B-Q10, 25A-A-Q6, 25A-B-Q15, 26A-A-Q9 |
| Block bounds, address count | 09 block recipe | 23A-A-Q16, 23A-B-Q16, 25A-B-Q10 |
| Fragmentation offsets and payload | 09 fragmentation | SAMP-1-Q13, SAMP-2-Q13, 22S-A-Q3, 23A-A-Q1, 23A-B-Q1, 23A-B-Q2, 26A-A-Q7 |
| Who fragments and who reassembles | 09 fragmentation | 23A-B-Q5, 22S-A-Q1 |
| NAT purpose, drawbacks, before and after translation | 10 NAT | 22S-A-Q2, 22S-A-Q8, 25A-A-Q4, 25A-A-Q9 |
| ICMP, DF with MTU | 10 ICMP | 25A-C-Q11, 26A-A-Q15 |
| Dijkstra relaxation and table reading | 11 Dijkstra | 25A-A-Q5, 26A-A-Q13 |
| Good path definition, BGP policy | 11 definitions, BGP | 25A-B-Q11, 26A-A-Q12 |
| 2D parity | 12 parity | 25A-A-Q3 |
| Hamming distance and parity bit | 12 Hamming | 22S-A-Q10, 22S-A-Q11 |
| CRC | 12 CRC | 25A-B-Q8 |
| Link-layer duties, switch vs router | 12 services, switch | 25A-C-Q8, 26A-A-Q10 |
| Destination MAC at the gateway | 12 MAC, ARP, Ethernet | 26A-A-Q14 |
| Point-to-point vs broadcast | 13 links | 25A-A-Q7 |
| Private networks of content providers | 13 ISP | 25A-A-Q8 |
| Circuit switching capacity on a ring | 13 recipe | 25A-B-Q5 |

## Gaps

- No concept used by a question is missing from a brief.
- Not closed: 25A-C-Q1 states no number of parallel connections for HTTP/1.1; the brief teaches the 6-connection convention and the elimination route.
- Not closed: 26A-A-Q6 and SAMP-1-Q14 use schematic cwnd graphs; the brief teaches slope-change reading, not exact Reno `ssthresh`.
- Thin topics: reliable_transfer (one direct question, Stop-and-Wait), routing (four questions), physical_misc (three questions); written from the lecture material at a lighter depth.
