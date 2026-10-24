// Tests for calc.js, the built-in calculators (networks extra):  node tools/test_calc.js
//
// 1. Parity with the Python reference: tools/verify/calc/ref.py (the same formulas as the keys' check scripts)
//    produces seeded random vectors plus real exam cases; every calc.js output must equal ref.py's (numbers to
//    1e-9 relative). Python: $PYTHON, else py, python3, python. Without Python the committed vectors.json is used.
// 2. Real exam questions, end to end: Calc.forQuestion(bank question) -> the prefilled calculator -> the key's number
//    (25A-C Q3 = 15.65 ms, 25A-B Q8 CRC = 101, 25A-B Q10 /24 = 256 addresses, LPM, 2D parity, traffic intensity).
// 3. Parsers and fixtures (number forms, masks, binary-prefix tables, polynomials, TCP events, Kurose fig 3.53).
// 4. Calc.check on specs, and on every ```calc fence in docs/briefs and every data-calc in courses/ (read only).
// 5. DOM: every calculator renders in jsdom without undefined / NaN, reacts to input, and a learn fence is mounted.
// Prints ASCII only.
"use strict";
const fs = require("fs"), path = require("path"), { spawnSync } = require("child_process");
const ROOT = path.join(__dirname, "..");
const Calc = require(path.join(ROOT, "calc.js"));

let fail = 0, ok = 0;
function assert(c, msg) { if (c) ok++; else { fail++; console.log("FAIL  " + msg); } }
const asc = s => String(s).replace(/[^\x20-\x7e]/g, c => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"));

/* ---------------- 1. ref.py vectors ---------------- */
function vectors() {
  const ref = path.join(__dirname, "verify", "calc", "ref.py");
  for (const py of [process.env.PYTHON, "py", "python3", "python"].filter(Boolean)) {
    const r = spawnSync(py, [ref, "--stdout"], { encoding: "utf8", maxBuffer: 64 << 20 });
    if (r.status === 0 && r.stdout) return { src: py + " ref.py", data: JSON.parse(r.stdout) };
    if (r.status && r.stderr) { console.log("ref.py failed:\n" + asc(r.stderr)); process.exit(1); }
  }
  console.log("WARN  no Python found: using the committed tools/verify/calc/vectors.json");
  return { src: "vectors.json", data: JSON.parse(fs.readFileSync(path.join(__dirname, "verify", "calc", "vectors.json"), "utf8")) };
}
// deep subset compare: every key ref.py returns must match (calc.js may return more)
function same(want, got, p) {
  if (typeof want === "number") {
    if (typeof got !== "number") return `${p}: ${got} is not a number (want ${want})`;
    return Math.abs(want - got) <= 1e-9 * Math.max(1, Math.abs(want)) ? "" : `${p}: ${got} != ${want}`;
  }
  if (want === null || typeof want !== "object") return want === got ? "" : `${p}: ${JSON.stringify(got)} != ${JSON.stringify(want)}`;
  if (Array.isArray(want)) {
    if (!Array.isArray(got) || got.length !== want.length) return `${p}: length ${got && got.length} != ${want.length}`;
    for (let i = 0; i < want.length; i++) { const d = same(want[i], got[i], `${p}[${i}]`); if (d) return d; }
    return "";
  }
  if (!got || typeof got !== "object") return `${p}: missing object`;
  for (const k of Object.keys(want)) { const d = same(want[k], got[k], `${p}.${k}`); if (d) return d; }
  return "";
}
function runJs(c) {
  const i = c.input;
  switch (c.kind) {
    case "subnet": return Calc.subnet(i.cidr);
    case "lpm": return Calc.lpm(i.table, i.addr);
    case "delay": return Calc.delay(i);
    case "intensity": return Calc.intensity(i);
    case "crc": return Calc.crc(i.D, i.G);
    case "crc_check": return Calc.crcCheck(i.W, i.G);
    case "parity": return Calc.parity2d(i.rows, i.parity, i.hasCheck);
    case "tcp": return Calc.tcp(i).rounds;
  }
}
const V = vectors();
{
  const per = {};
  for (const c of V.data.cases) {
    const got = runJs(c), d = got && got.error ? `calc.js error: ${got.error}` : same(c.output, got, c.kind);
    per[c.kind] = per[c.kind] || [0, 0]; per[c.kind][0]++;
    if (d) { per[c.kind][1]++; assert(false, `${c.kind} [${c.src}] ${asc(JSON.stringify(c.input)).slice(0, 160)} -> ${asc(d)}`); } else ok++;
  }
  console.log(`1. ref.py parity (${V.src}): ` + Object.entries(per).map(([k, [n, f]]) => `${k} ${n - f}/${n}`).join(", "));
  // the committed vectors must stay what ref.py produces
  const file = path.join(__dirname, "verify", "calc", "vectors.json");
  if (V.src !== "vectors.json" && fs.existsSync(file)) {
    const disk = JSON.parse(fs.readFileSync(file, "utf8"));
    assert(JSON.stringify(disk.cases) === JSON.stringify(V.data.cases), "vectors.json is stale: run py tools/verify/calc/ref.py");
  }
}

/* ---------------- 2. real exam questions, end to end ---------------- */
{
  const bank = JSON.parse(fs.readFileSync(path.join(ROOT, "questions.json"), "utf8")).questions;
  const Q = id => bank.find(q => q.id === id);
  const run = id => { const q = Q(id); if (!q) return { error: "not in bank: " + id }; const s = Calc.forQuestion(q); return { spec: s, r: Calc.compute(s.kind, Calc.state(s.kind, s)) }; };
  let x = run("25A-C-Q3");
  assert(x.spec && x.spec.kind === "delay" && Math.abs(x.r.total * 1e3 - 15.65) < 1e-9, `25A-C-Q3 prefilled delay = 15.65 ms (got ${x.r && x.r.total})`);
  assert(Calc._.fmtTime(x.r.total) === "15.65 ms", `25A-C-Q3 shown as "15.65 ms" (got ${asc(Calc._.fmtTime(x.r.total))})`);
  assert(Math.abs(x.r.trans * 1e3 - 0.65) < 1e-12 && Math.abs(x.r.prop * 1e3 - 15) < 1e-12, "25A-C-Q3 0.65 ms transmission + 15 ms propagation");
  x = run("25A-B-Q8");
  assert(x.spec.kind === "crc" && x.r.remainder === "101" && x.r.codeword === "10011100101", `25A-B-Q8 CRC R = 101 (got ${x.r.remainder})`);
  x = run("25A-B-Q10");
  assert(x.spec.kind === "subnet" && x.r.total === 256 && x.r.network === "223.1.2.0" && x.r.usable === 254, `25A-B-Q10 223.1.2/24 = 256 addresses (got ${x.r.total})`);
  x = run("25A-B-Q15");
  assert(x.spec.kind === "lpm" && x.r.best === "C" && x.r.entries.filter(e => e.match).map(e => e.label).join("") === "AC", `25A-B-Q15 LPM -> C (got ${x.r.best})`);
  x = run("25A-A-Q6");
  assert(x.r.best === "A", `25A-A-Q6 LPM -> A (got ${x.r.best})`);
  x = run("23A-A-Q16");
  assert(x.r.network === "200.107.0.0" && x.r.broadcast === "200.107.63.255", `23A-A-Q16 /18 block 200.107.0.0 - 200.107.63.255 (got ${x.r.network} ${x.r.broadcast})`);
  x = run("25A-A-Q3");
  assert(x.spec.kind === "parity" && x.spec.hasCheck === true && JSON.stringify(x.r.location) === "[2,4]", `25A-A-Q3 2D parity flip at row 2, col 4 (got ${JSON.stringify(x.r.location)})`);
  x = run("SAMP-2-Q1");
  assert(x.spec.kind === "intensity" && Math.round(x.r.rho * 1e4) / 1e4 === 0.0007, `SAMP-2-Q1 La/R = 0.0007 (got ${x.r.rho})`);
  x = run("SAMP-2-Q2");
  assert(x.spec.kind === "intensity" && Math.round(x.r.aMax.s) === 1600000, `SAMP-2-Q2 a_max = 1,600,000 /s (got ${x.r.aMax && x.r.aMax.s})`);
  x = run("24A-B-Q6");
  assert(Math.floor(x.r.aMax.s) === 1333 && Math.round(x.r.rho * 1e3) / 1e3 === 0.05, `24A-B-Q6 rho 0.05 and a_max 1,333 /s (got ${x.r.rho} ${x.r.aMax && x.r.aMax.s})`);
  x = run("25A-B-Q7");
  assert(x.spec.kind === "delay" && x.spec.L === "4000" && x.spec.s === "300000000", "25A-B-Q7 prefills L = 4000 bit and s = 3e8 (links are in the figure)");
  x = run("24A-B-Q1");
  assert(x.spec.kind === "intensity" && x.spec.Lunit === "byte" && Math.round(x.r.rho * 1e3) / 1e3 === 0.05, "24A-B-Q1 1,500 Bytes is read as bytes: rho = 0.05 (the key)");
  // every question of a calculator topic gets a button whose calculator computes without error
  const topics = new Set(Object.keys(Calc.TOPIC_KIND)); let n = 0;
  for (const q of bank.filter(q => topics.has(q.topic))) {
    n++;
    const s = Calc.forQuestion(q), p = Calc.check(s);
    assert(s && !p.length, `${q.id}: forQuestion spec checks clean (${asc(p.join("; "))})`);
  }
  assert(Calc.forQuestion({ topic: "http", question: "x" }) === null, "a question outside the four topics gets no calculator");
  console.log(`2. exam questions: ${n} calculator-topic questions, prefilled specs check clean`);
}

/* ---------------- 3. parsers and fixtures ---------------- */
{
  const N = Calc.parseNum;
  assert(N("2e8") === 2e8 && N("2*10^8") === 2e8 && N("2×10^8") === 2e8 && N("2·10^{8}") === 2e8 && N("10^-3") === 1e-3 && N("5,000") === 5000 && N(" 1.5 ") === 1.5, "number forms");
  assert(isNaN(N("")) && isNaN(N("abc")) && isNaN(N("2^8")), "bad numbers are NaN");
  const c = Calc.parseCidr("200.107.16.17 255.255.192.0");
  assert(c.prefix === 18, "address + dotted mask -> /18");
  assert(Calc.parseCidr("1.2.3.4 255.0.255.0").error, "a non-contiguous mask is rejected");
  assert(Calc.parseCidr("300.1.1.1/8").error && Calc.parseCidr("1.2.3.4/33").error && Calc.parseCidr("1.2.3").error, "bad addresses are rejected");
  const s31 = Calc.subnet("10.0.0.0/31"), s32 = Calc.subnet("10.0.0.7/32");
  assert(s31.usable === 2 && s32.usable === 1 && s32.first === "10.0.0.7", "/31 and /32: every address usable");
  // Kurose-style table with binary prefixes and a default
  const T = "11001000 00010111 00010 → 0\n11001000 00010111 00011000 → 1\n11001000 00010111 00011 → 2\notherwise → 3";
  const want = { "200.23.22.161": "0", "200.23.24.170": "1", "200.23.25.3": "2", "200.23.40.1": "3" };
  for (const [a, w] of Object.entries(want)) assert(Calc.lpm(T, a).best === w, `binary-prefix table: ${a} -> ${w} (got ${Calc.lpm(T, a).best})`);
  assert(Calc.lpm("25.36.64.0/16 A\nB | 25.36.64.0/20\n20.0.0.0/8", "25.36.67.5").best === "B", "table layouts: 'CIDR label', 'label | CIDR', no label");
  assert(Calc.lpm("A: 25.36.0.0/16", "25.36.1.1").best === "A" && Calc.lpm("A: 25.36.0.0/16", "26.0.0.1").best === null, "no match without a default -> null");
  assert(Calc.lpm("A: 25.30.00.0/12", "25.31.1.1").best === "A", "leading-zero octets (23A-B Q10 prints 25.30.00.0/12)");
  assert(Calc.polyBits("x^3+1") === "1001" && Calc.polyBits("x^3+x+1") === "1011" && Calc.polyBits("x4+x+1") === "10011" && Calc.polyBits("0101") === "101", "generator polynomials");
  assert(Calc.crc("101", "x^3+1").remainder === Calc.crc("101", "1001").remainder, "polynomial and bit generator agree");
  const ck = Calc.crcCheck("10011100101", "1001"), bad = Calc.crcCheck("10011101101", "1001");
  assert(ck.ok && ck.remainder === "000" && !bad.ok, "receiver check: the 25A-B codeword passes, a flipped bit fails");
  const ev = Calc.parseEvents("8:3dup, 14:timeout;20=td 22:TO");
  assert(JSON.stringify(ev) === JSON.stringify({ 8: "3dup", 14: "timeout", 20: "3dup", 22: "timeout" }), "TCP event syntax");
  assert(Calc.parseEvents("8:loss").error, "an unknown event is an error");
  const ku = Calc.tcp({ rounds: 15, init: 1, ssthresh: 8, variant: "reno", events: "8:3dup", cap: true, plus3: true }).rounds.map(x => x.cwnd);
  assert(ku.slice(0, 12).join(",") === "1,2,4,8,9,10,11,12,9,10,11,12", "Kurose fig 3.53 Reno: " + ku.join(","));
  const kt = Calc.tcp({ rounds: 15, init: 1, ssthresh: 8, variant: "tahoe", events: "8:3dup", cap: true }).rounds.map(x => x.cwnd);
  assert(kt.slice(0, 12).join(",") === "1,2,4,8,9,10,11,12,1,2,4,6", "Kurose fig 3.53 Tahoe: " + kt.join(","));
  const nc = Calc.tcp({ rounds: 6, init: 1, ssthresh: 10, variant: "reno", events: "", cap: false }).rounds.map(x => x.cwnd + x.phase);
  assert(nc.join(",") === "1ss,2ss,4ss,8ss,16ca,17ca", "uncapped slow start overshoots ssthresh then +1: " + nc.join(","));
  const p = Calc.parity2d(["1011", "0110"], "even", false);
  assert(p.rowBits.join("") === "10" && p.colBits.join("") === "11011", "2D parity check bits for a data block");
  const p2 = Calc.parity2d(["10111", "01100", "11011"], "even", true);
  assert(p2.status === "ok", "a valid even block has no error");
  const p3 = Calc.parity2d(["10110", "01100", "11011"], "even", true);
  assert(p3.status === "single" && JSON.stringify(p3.location) === "[1,5]", "a flipped check bit is located too");
  const p4 = Calc.parity2d(["00111", "00100", "11011"], "even", true);
  assert(p4.status === "multi", "two flips: detected, not correctable");
  assert(Calc.delay({ L: 1500, Lunit: "byte", s: 2e8, links: [{ R: 20, Runit: "Mbps", d: 500, dunit: "km", n: 1 }] }).trans === 12000 / 20e6, "bytes are converted to bits (x8)");
  const pp = Calc.delay({ L: 1000, Lunit: "bit", s: 2e8, packets: 3, links: [{ R: 1, Runit: "Mbps", d: 0, dunit: "km", n: 2 }] });
  assert(Math.abs(pp.total - 4e-3) < 1e-15, "3 packets over 2 store-and-forward links: (N+P-1) L/R = 4 ms");
  console.log("3. parsers and fixtures done");
}

/* ---------------- 4. spec checks + embedded calculators in briefs / courses ---------------- */
{
  assert(!Calc.check({ kind: "delay", L: 5000, Lunit: "bit", links: [{ R: 100, Runit: "Mbps", d: 1000, dunit: "km" }] }).length, "a delay spec checks clean");
  assert(!Calc.check("tcp").length && !Calc.check('{"kind":"crc","D":"1101","G":"1011"}').length, "a kind name and a JSON string are specs");
  assert(Calc.check({ kind: "nope" }).some(p => /unknown calc kind/.test(p)), "unknown kind rejected");
  assert(Calc.check({ kind: "subnet", cidr: "1.2.3.4/8", foo: 1 }).some(p => /unknown key "foo"/.test(p)), "unknown key rejected");
  assert(Calc.check({ kind: "delay", Lunit: "bytes" }).some(p => /Lunit/.test(p)), "bad unit rejected");
  assert(Calc.check({ kind: "subnet", cidr: "1.2.3.4/40" }).length, "a spec whose calculator errors is rejected");
  assert(Calc.check("{bad json").length, "bad JSON rejected");
  const found = [];
  const walk = (dir, ext) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name), ext) : ext.test(d.name) ? [path.join(dir, d.name)] : []) : [];
  for (const f of walk(path.join(ROOT, "docs", "briefs"), /\.md$/)) {
    const t = fs.readFileSync(f, "utf8");
    for (const m of t.matchAll(/^```calc[ \t]*\r?\n([\s\S]*?)^```/gm)) found.push([path.relative(ROOT, f), m[1].trim()]);
  }
  for (const f of walk(path.join(ROOT, "courses"), /\.(js|json|html)$/)) {
    const t = fs.readFileSync(f, "utf8");
    for (const m of t.matchAll(/data-calc=(\\?['"])(.*?)\1/g)) found.push([path.relative(ROOT, f), m[2].replace(/\\"/g, '"').replace(/&quot;/g, '"')]);
  }
  for (const [f, s] of found) { const p = Calc.check(s); assert(!p.length, `${asc(f)}: calc spec ${asc(s).slice(0, 80)} -> ${asc(p.join("; "))}`); }
  console.log(`4. spec checks done; embedded calculators found in briefs/courses: ${found.length}`);
}

/* ---------------- 5. DOM ---------------- */
{
  let JSDOM;
  try { ({ JSDOM } = require(path.join(__dirname, "node_modules", "jsdom"))); } catch (e) { console.log("WARN  jsdom not installed: DOM checks skipped"); }
  if (JSDOM) {
    const dom = new JSDOM(`<!doctype html><html lang="he" dir="rtl"><body><div id="h"></div></body></html>`, { runScripts: "outside-only" });
    const w = dom.window;
    w.eval(fs.readFileSync(path.join(ROOT, "calc.js"), "utf8"));
    const C = w.Calc, h = w.document.getElementById("h");
    const bad = el => /undefined|NaN|\[object/.test(el.textContent);
    for (const k of C.KINDS) {
      C.page(h, { kind: k });
      const out = h.querySelector(".calc-out");
      assert(out && out.textContent.trim().length > 20 && !bad(h) && !h.querySelector(".calc-err"), `page ${k}: renders a result without errors`);
      assert(h.querySelector(".calc-tab.on") && h.dataset.kind === k, `page ${k}: its tab is active`);
    }
    C.page(h, { kind: "delay" });
    const L = h.querySelector('[data-k="L"]'); L.value = "40000"; L.dispatchEvent(new w.Event("input", { bubbles: true }));
    assert(/20\.2 ms/.test(h.querySelector(".calc-big-v").textContent), "typing L = 40000 bit updates the total (" + asc(h.querySelector(".calc-big-v").textContent) + ")");
    h.querySelector('[data-act="add-link"]').click();
    assert(h.querySelectorAll(".calc-link").length === 4, "+ link adds a row");
    h.querySelector('[data-mode="intensity"]').click();
    assert(h.dataset.kind === "intensity" && /La\/R/.test(h.textContent), "mode switch to traffic intensity");
    h.querySelector('[data-mode="delay"]').click();
    assert(h.querySelectorAll(".calc-link").length === 4, "values survive a mode switch");
    C.page(h, { kind: "crc" });
    const n = h.querySelectorAll(".calc-div .calc-dl.g").length;
    h.querySelector('[data-act="step-first"]').click();
    assert(h.querySelectorAll(".calc-div .calc-dl.g").length === 0, "CRC stepper: back to the start");
    h.querySelector('[data-act="step-next"]').click();
    assert(h.querySelectorAll(".calc-div .calc-dl.g").length === 1 && n > 1, "CRC stepper: one step at a time");
    C.page(h, { kind: "tcp", events: "" });
    h.querySelector('rect[data-r="5"]').dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
    assert(h.querySelector('[data-k="events"]').value === "5:3dup", "clicking round 5 in the chart adds a 3dup event");
    // embedding: a learn ```calc fence and a lesson data-calc div are mounted by the MutationObserver
    const d = w.document.createElement("div");
    d.innerHTML = `<pre><code class="language-calc">{"kind":"crc","D":"1101011011","G":"10011"}</code></pre>` + C.figure({ kind: "subnet", cidr: "10.1.2.3/20" });
    w.document.body.appendChild(d);
    return new Promise(r => setTimeout(r, 0)).then(() => {
      assert(!d.querySelector("pre") && d.querySelectorAll(".calc-fig[data-cm] .calc-panel").length === 2, "a ```calc fence and a data-calc host are mounted");
      assert(/1110/.test(d.querySelector('.calc-panel[data-kind="crc"] .calc-big-v').textContent), "the embedded CRC computes R = 1110");
      assert(/10\.1\.0\.0\/20/.test(d.textContent), "the embedded subnet shows 10.1.0.0/20");
      done();
    });
  }
  done();
}
function done() {
  if (done.ran) return; done.ran = true;
  console.log(`${ok} checks, ${fail} failed`);
  console.log(fail ? "CALC TEST FAILED" : "CALC TEST PASSED");
  process.exit(fail ? 1 : 0);
}
