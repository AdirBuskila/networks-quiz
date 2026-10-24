# ASK_ADIR - networks

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

Summary: 9 open items below; none blocks the build. The top two (26A-A and SAMP-2 key conventions) only decide the official label.

<!-- Entry format:
### <exam code> Q<number> - <short title>
- Path: <absolute file path>
- Page: <page number>
- Question: <what is unclear or missing>
- Needed: <what Adir must provide or decide>
- Status: hold
-->

### 26A-A all - key is implicit (first option)
- Path: sitting 26A-A typed question/solution document, pp.1-3
- Page: 1-3
- Question: the document marks no answer; the first listed option of every question is correct (all 15 re-derived, 5 calculations recomputed by script). Shipped as solved / official:false.
- Needed: confirm the first-option convention is the lecturer's key, then it can be flipped to official.
- Status: open

### SAMP-2 all - the sample prints one option in bold per question
- Path: sitting SAMP-2 pp.1-6
- Page: 1-6
- Question: GATE1 says the 2024 sample has no key, but one option of every question is bold (and Q1/Q2 print the worked formula). All 14 independent answers agree with the bold option (Q3 HTTP/2 and Q6 connection count are judgement calls). Shipped as solved / official:false.
- Needed: confirm the bold is the sample's key, then flip to official.
- Status: open

### 25A-A Q5 - table header says "from X"
- Path: sitting 25A-A p.4 Q5
- Page: 4
- Question: the table header prints "Shortest distance from X" while the first row is v (distance 0) and the stem says "from V". Read as distances from v; X=4, Y=1 is the only consistent pair.
- Needed: none unless the header was intentional.
- Status: open

### 23A-B Q21 and Q22 - numbers struck through on the scan
- Path: sitting 23A-B pp.6-7
- Page: 6-7
- Question: the booklet prints 22 questions but the answer sheet has 20 rows; the second "12" (HTTP persistent) and second "13" (large organisation) have struck numbers and no row, so they look voided. Held as Q21/Q22 (solved answers a and c recorded).
- Needed: confirm they were voided, or release them.
- Status: hold

### 23A-B Q20 - congestion-control purpose: which options make the full set
- Path: sitting 23A-B p.9 Q20 (answer sheet p.11)
- Page: 9
- Question: multi-select ("mark every correct option, full credit needs the complete set"). Shipped as multi {a,b} (med): a (routers overloaded by re-transmits) and b (switches overloaded by "fast-transmits"); d (under-use of routers because of long timeouts) judged not a congestion-control purpose but doubtful. The graded scan shows that a-only lost the points, but cannot tell {a,b} from {a,b,d}.
- Needed: the intended set ({a,b} or {a,b,d}).
- Status: open (shipped as {a,b})

### 23A-A Q18 - "unreliable transport need not implement" - ambiguous stem
- Path: sitting 23A-A p.9 Q18 (twin question Q17 on p.8; answer sheet p.11)
- Page: 9
- Question: "which functions need NOT be implemented by an unreliable transport beyond what the network layer provides". Literal reading: {a,b,c,d} (host-to-host is already the network layer's job). Contrast reading: {b,c,d} (a is outside the question). The graded scan accepted {b,c,d}. Option c is printed "משלוח פאקטות כפולות" (in Q17: "הגנה בפני משלוח..."). Dropped from the bank.
- Needed: the intended set, or confirm it stays out.
- Status: hold

### 25A-C Q4 - Slow Start: option d also accepted
- Path: sitting 25A-C p.1 Q4
- Page: 1
- Question: official highlight is a ("prevent flooding by relatively fast window growth"). Option d ("prevent an immediate jump to the maximum rate") is also a correct description of slow start, so the item ships with acceptedIds [a, d] and a visible הערה; the official key is unchanged.
- Needed: none, unless you want d marked wrong (then remove acceptedIds and the הערה).
- Status: open

### 22S-A Q1 - reassembly at NAT (official key kept, הערה added)
- Path: sitting 22S-A p.13 Q1
- Page: 13
- Question: official highlight b ("destination and NAT"); textbook default is c ("destination only"). Key kept (the question asks who *can* reassemble; port-translating NATs do); a visible הערה explains why c is the textbook answer and b the exam's.
- Needed: none unless you want c accepted too.
- Status: open

### 23A-A Q4 - grader let "POST must return 200" through
- Path: sitting 23A-A answer sheet p.11, row 4
- Page: 11
- Question: the student's a ("HTTP requires 200 for a successful POST") is not red-marked (score 90 = Q3, Q7 only). Bank key b ("not required") is technically correct (201/202/204 are valid) and stays.
- Needed: none; FYI in case the course teaches a as the answer.
- Status: open

## Resolved

### 25A-C Q3 - three-link delay, key disagrees with recomputation
- Resolution (arbiter 2026-10-24): key 10ms provably wrong for the printed data (propagation alone 15 ms; total 15.65 ms). Shipped under the typo ruling: key c (15ms), solved/official:false, explanation prefixed "הפתרון הרשמי עם תיקון". 10ms matches only 5000 bytes + 1000 km total path, neither printed.

### 23A-A / 23A-B multi-select questions
- Resolution (2026-10-24): the engine now supports multi-select (8a214eb). Shipped with the solved sets: 23A-A Q5 {c,d}, Q6 {a,b,c}, Q17 {b,c,d}; 23A-B Q5 {a,c}, Q7 {c,d,e}, Q8 {a,b,c,e}, Q17 {a,b,c,d}, Q20 {a,b} (see its own entry). 23A-A Q18 is dropped (own entry). 23A-B Q21/Q22 stay voided and held.

