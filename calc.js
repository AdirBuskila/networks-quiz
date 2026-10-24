"use strict";
/* Built-in calculators (window.Calc) -- networks extra, app-local (not part of the factory template).
   Four calculators, dependency-free, Hebrew UI, LTR-isolated numbers / IPs / bit strings:
     ip     subnet  (address/prefix -> network, broadcast, host range, counts, binary view)
            lpm     (longest prefix match over a pasted forwarding table)
     delay  delay   (L/R, d/s, store-and-forward over N links, P packets back to back)
            intensity (La/R, and the arrival rate that gives a target rho)
     crc    crc     (CRC long division step by step; receiver check)
            parity  (2D even/odd parity: error location, or the check bits for a data block)
     tcp    tcp     (cwnd per RTT round: slow start, congestion avoidance, ssthresh, 3 dup ACKs vs timeout,
                     Reno / Tahoe; step chart + table)
   Every formula is mirrored by tools/verify/calc/ref.py (the same formulas as the keys' check scripts);
   tools/test_calc.js compares the two on seeded random cases and on real exam questions.

   A calculator spec (tools/RAW_SCHEMA.md, "Calculators"): { "kind": "<one of KINDS>", ...prefill values }
   API: Calc.subnet / lpm / delay / intensity / crc / crcCheck / parity2d / tcp   pure computations
        Calc.forQuestion(q) -> spec | null   (the "נסו במחשבון" button: topic -> calculator, prefilled from the text)
        Calc.check(spec) -> [problem strings];  Calc.figure(spec) -> host HTML
        Calc.page(el, spec)   the full calculator page (four tabs);  Calc.mount(el, spec) one embedded calculator
        Calc.hydrate(rootEl)  mounts every .calc-fig[data-calc] and every learn ```calc fence (pre > code.language-calc)
   Loadable in Node (module.exports) for tools/test_calc.js. */
(function (root) {
  /* ================================ units ================================ */
  const SIZE = { bit: 1, byte: 8, Kbit: 1e3, KB: 8e3, Mbit: 1e6, MB: 8e6 };
  const SIZE_SYM = { bit: "bit", byte: "B", Kbit: "Kb", KB: "KB", Mbit: "Mb", MB: "MB" };
  const SIZE_HE = { bit: "ביט (bit)", byte: "בייט (B)", Kbit: "קילוביט (Kb)", KB: "קילובייט (KB)", Mbit: "מגה-ביט (Mb)", MB: "מגה-בייט (MB)" };
  const RATE = { bps: 1, Kbps: 1e3, Mbps: 1e6, Gbps: 1e9 };
  const RATE_HE = { bps: "bps", Kbps: "Kbps", Mbps: "Mbps", Gbps: "Gbps" };
  const DIST = { m: 1, km: 1e3 };
  const DIST_HE = { km: "ק\"מ (km)", m: "מטר (m)" };
  const PER = { s: 1, min: 60, hour: 3600 };
  const PER_HE = { s: "חבילות לשנייה", min: "חבילות לדקה", hour: "חבילות לשעה" };

  const KINDS = ["subnet", "lpm", "delay", "intensity", "crc", "parity", "tcp"];
  const TABS = [
    { id: "ip", icon: "🌐", label: "רשתות משנה", modes: [["subnet", "כתובת ותחילית"], ["lpm", "Longest Prefix Match"]] },
    { id: "delay", icon: "⏱️", label: "השהיות", modes: [["delay", "השהיה מקצה לקצה"], ["intensity", "עוצמת תעבורה"]] },
    { id: "crc", icon: "🧮", label: "CRC וזוגיות", modes: [["crc", "CRC"], ["parity", "זוגיות דו-ממדית"]] },
    { id: "tcp", icon: "📈", label: "חלון TCP", modes: [["tcp", "cwnd לפי סבב"]] },
  ];
  const KIND_TAB = { subnet: "ip", lpm: "ip", delay: "delay", intensity: "delay", crc: "crc", parity: "crc", tcp: "tcp" };
  const TOPIC_KIND = { delays: "delay", ip_cidr: "subnet", link_layer: "crc", tcp: "tcp" };
  const TITLE = { subnet: "רשת משנה (CIDR)", lpm: "Longest Prefix Match", delay: "השהיה מקצה לקצה", intensity: "עוצמת תעבורה",
    crc: "CRC", parity: "זוגיות דו-ממדית", tcp: "חלון העומס של TCP" };

  /* ================================ numbers ================================ */
  /* "5,000" "2e8" "2*10^8" "2×10^8" "2·10^8" "10^-3" -> number; anything else NaN */
  function parseNum(v) {
    if (typeof v === "number") return v;
    const s = String(v == null ? "" : v).trim().replace(/[,\s]/g, "").replace(/[−–]/g, "-");
    if (!s) return NaN;
    const m = s.match(/^([+-]?(?:\d+\.?\d*|\.\d+))?[*×x·]?10\^\{?([+-]?\d+)\}?$/i);
    if (m) return (m[1] === undefined ? 1 : parseFloat(m[1])) * Math.pow(10, +m[2]);
    if (/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(s)) return parseFloat(s);
    return NaN;
  }
  const group = n => { const s = String(Math.abs(n)); const [i, f] = s.split("."); return (n < 0 ? "-" : "") + i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (f ? "." + f : ""); };
  /* number -> display HTML (6 significant digits; powers of ten as <sup>, never a caret) */
  function fmt(x) {
    if (typeof x !== "number" || !isFinite(x)) return "—";
    if (Number.isInteger(x) && Math.abs(x) < 1e15) return group(x);
    const a = Math.abs(x);
    if (a !== 0 && (a < 1e-6 || a >= 1e15)) return sci(x);
    return group(Number(x.toPrecision(6)));
  }
  function sci(x) {
    if (!x) return "0";
    const e = Math.floor(Math.log10(Math.abs(x))), m = Number((x / Math.pow(10, e)).toPrecision(4));
    return (m === 1 ? "" : m + "·") + `10<sup>${e}</sup>`;
  }
  /* a big round number (2e8) reads better as 2·10^8 */
  const fmtBig = x => (Math.abs(x) >= 1e6 && Number((x / Math.pow(10, Math.floor(Math.log10(Math.abs(x))))).toPrecision(3)) * Math.pow(10, Math.floor(Math.log10(Math.abs(x)))) === x) ? sci(x) : fmt(x);
  function fmtTime(sec) {
    if (typeof sec !== "number" || !isFinite(sec)) return "—";
    if (sec === 0) return "0 s";
    const U = [[1, "s"], [1e-3, "ms"], [1e-6, "µs"], [1e-9, "ns"]];
    const u = U.find(([f]) => Math.abs(sec) >= f * 0.9999999) || U[U.length - 1];
    return `${fmt(sec / u[0])} ${u[1]}`;
  }
  function fmtRate(bps) { const u = bps >= 1e9 ? ["Gbps", 1e9] : bps >= 1e6 ? ["Mbps", 1e6] : bps >= 1e3 ? ["Kbps", 1e3] : ["bps", 1]; return `${fmt(bps / u[1])} ${u[0]}`; }

  /* ================================ IP ================================ */
  function parseIp(s) {
    const p = String(s == null ? "" : s).trim().split(".");
    if (p.length < 1 || p.length > 4 || !p.every(x => /^\d{1,3}$/.test(x) && +x <= 255)) return null;
    while (p.length < 4) p.push("0");                          // "223.1.2" = 223.1.2.0 (the textbook's short form)
    return ((+p[0] << 24) >>> 0) + (+p[1] << 16) + (+p[2] << 8) + (+p[3]);
  }
  const ipStr = n => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
  const maskOf = p => p === 0 ? 0 : ((0xFFFFFFFF << (32 - p)) >>> 0);
  const bits32 = n => (n >>> 0).toString(2).padStart(32, "0");
  function prefixOfMask(m) { const b = bits32(m); return /^1*0*$/.test(b) ? b.indexOf("0") < 0 ? 32 : b.indexOf("0") : -1; }
  /* "a.b.c.d/p" | "a.b.c/p" | "a.b.c.d mask" | "a.b.c.d/mask" | "a.b.c.d" (= /32) -> {addr, prefix} | {error} */
  function parseCidr(s) {
    const t = String(s == null ? "" : s).trim();
    if (!t) return { error: "הקלידו כתובת, למשל 200.107.16.17/18" };
    const m = t.match(/^(\d{1,3}(?:\.\d{1,3}){0,3})\s*(?:(?:\/\s*|\s+)(\d{1,2}|\d{1,3}(?:\.\d{1,3}){3}))?$/);
    if (!m) return { error: "הכתובת לא בפורמט a.b.c.d/p" };
    const addr = parseIp(m[1]);
    if (addr === null) return { error: "כל אחד מארבעת החלקים של הכתובת הוא מספר בין 0 ל-255" };
    let prefix = 32;
    if (m[2] !== undefined) {
      if (m[2].includes(".")) { const mk = parseIp(m[2]); prefix = mk === null ? -1 : prefixOfMask(mk); if (prefix < 0) return { error: "המסכה אינה רצף של אחדות ואחריו אפסים" }; }
      else { prefix = +m[2]; if (prefix > 32) return { error: "אורך התחילית הוא בין 0 ל-32" }; }
    } else if (m[1].split(".").length < 4) return { error: "חסר אורך תחילית, למשל /24" };
    return { addr, prefix };
  }
  function subnet(cidr) {
    const c = typeof cidr === "object" && cidr ? cidr : parseCidr(cidr);
    if (c.error) return { error: c.error };
    const p = c.prefix, mask = maskOf(p), net = (c.addr & mask) >>> 0, bc = (net | (~mask >>> 0)) >>> 0;
    const total = Math.pow(2, 32 - p), small = p > 30;
    return { addr: ipStr(c.addr), prefix: p, mask: ipStr(mask), network: ipStr(net), broadcast: ipStr(bc),
      first: ipStr(small ? net : net + 1), last: ipStr(small ? bc : bc - 1), total, usable: small ? total : total - 2,
      hostBitsSet: c.addr !== net, _addr: c.addr, _mask: mask, _net: net, _bc: bc };
  }
  /* one forwarding-table line -> {label, net, prefix, given} | {error} | null (blank / comment)
     "A: 25.36.64.0/16", "25.36.64.0/16 A", "11001000 00010111 00010 → 0", "default → 3", "otherwise: 2" */
  const DEFAULT_RE = /^(default|otherwise|else|אחרת|ברירת[\s-]?מחדל|\*)$/i;
  const CIDR_RE = /(\d{1,3}(?:\.\d{1,3}){0,3})\s*\/\s*(\d{1,2})/;
  function prefixOf(part) {
    const s = part.trim();
    if (DEFAULT_RE.test(s)) return { net: 0, prefix: 0, given: "default" };
    let m = s.match(new RegExp("^" + CIDR_RE.source + "$"));
    if (m) { const a = parseIp(m[1]), p = +m[2]; if (a === null || p > 32) return null; return { net: (a & maskOf(p)) >>> 0, prefix: p, given: `${m[1]}/${p}`, hostBits: (a & maskOf(p)) >>> 0 !== a }; }
    if (/^[01][01 ]*\*?$/.test(s)) { const b = s.replace(/[\s*]/g, ""); if (b.length > 32) return null; return { net: parseInt(b.padEnd(32, "0"), 2) >>> 0, prefix: b.length, given: b, binary: true }; }
    return null;
  }
  function parseTableLine(line, i) {
    const s = String(line).trim();
    if (!s || s[0] === "#") return null;
    const parts = s.split(/\s*(?:→|->|=>|\||\t|:)\s*/).filter(x => x.trim());
    let pref = null, label = "";
    if (parts.length > 1) {
      const cand = parts.map(prefixOf);
      let k = -1;
      cand.forEach((c, j) => { if (c && (k < 0 || (cand[k].binary && c.binary && c.prefix > cand[k].prefix) || (cand[k].binary && !c.binary))) k = j; });
      if (k >= 0) { pref = cand[k]; label = parts.filter((_, j) => j !== k).join(" "); }
    } else {
      pref = prefixOf(s);
      if (!pref) { const m = s.match(CIDR_RE); if (m) { pref = prefixOf(m[0].replace(/\s+/g, "")); label = (s.slice(0, m.index) + " " + s.slice(m.index + m[0].length)).trim(); } }
      if (!pref) { const w = s.split(/\s+/); if (w.length > 1 && DEFAULT_RE.test(w[0])) { pref = prefixOf(w[0]); label = w.slice(1).join(" "); } }
    }
    if (!pref) return { error: `שורה ${i + 1}: לא מצאתי תחילית (a.b.c.d/p, ביטים או default)` };
    return Object.assign({ label: label.trim() || `#${i + 1}` }, pref);
  }
  function lpm(table, addr) {
    const lines = Array.isArray(table) ? table : String(table == null ? "" : table).split(/\r?\n/);
    const entries = [], errors = [];
    lines.forEach((l, i) => { const e = parseTableLine(l, i); if (!e) return; if (e.error) errors.push(e.error); else entries.push(e); });
    const d = parseIp(addr);
    if (d === null || String(addr).trim().split(".").length !== 4) return { error: "כתובת היעד לא בפורמט a.b.c.d", errors };
    if (!entries.length) return { error: "הטבלה ריקה", errors };
    let best = null, bestLen = -1, bestIndex = -1;
    const out = entries.map((e, i) => {
      const match = ((d & maskOf(e.prefix)) >>> 0) === e.net;
      if (match && e.prefix > bestLen) { best = e.label; bestLen = e.prefix; bestIndex = i; }
      return { label: e.label, network: ipStr(e.net), prefix: e.prefix, match, given: e.given, hostBits: !!e.hostBits, binary: !!e.binary, _net: e.net };
    });
    return { entries: out, best, bestIndex, errors, _dst: d, addr: ipStr(d) };
  }

  /* ================================ delay ================================ */
  function delay(c) {
    const L0 = parseNum(c.L), s = parseNum(c.s), P = parseNum(c.packets == null || c.packets === "" ? 1 : c.packets);
    if (!(L0 > 0) || !SIZE[c.Lunit]) return { error: "גודל החבילה L חייב להיות מספר חיובי" };
    if (!(s > 0)) return { error: "מהירות ההתפשטות s חייבת להיות מספר חיובי" };
    if (!(P >= 1) || !Number.isInteger(P)) return { error: "מספר החבילות הוא מספר שלם, 1 לפחות" };
    const L = L0 * SIZE[c.Lunit], links = [], rows = [];
    for (const [i, k] of (c.links || []).entries()) {
      const R = parseNum(k.R) * (RATE[k.Runit] || NaN), dm = parseNum(k.d) * (DIST[k.dunit] || NaN);
      const n = parseNum(k.n == null || k.n === "" ? 1 : k.n);
      if (!(R > 0)) return { error: `קישור ${i + 1}: הקצב R חייב להיות מספר חיובי` };
      if (!(dm >= 0)) return { error: `קישור ${i + 1}: האורך d חייב להיות מספר (0 ומעלה)` };
      if (!(n >= 1) || !Number.isInteger(n) || n > 50) return { error: `קישור ${i + 1}: מספר הקישורים הזהים הוא שלם בין 1 ל-50` };
      rows.push({ R, d: dm, n, trans: L / R, prop: dm / s });
      for (let j = 0; j < n; j++) links.push({ trans: L / R, prop: dm / s, R });
    }
    if (!links.length) return { error: "צריך לפחות קישור אחד" };
    let trans = 0, prop = 0;
    for (const x of links) trans += x.trans;      // the same summation order as ref.py
    for (const x of links) prop += x.prop;
    const Rmin = Math.min(...links.map(x => x.R)), extra = (P - 1) * L / Rmin;
    return { Lbits: L, nLinks: links.length, trans, prop, pipeline: extra, total: trans + prop + extra,
      links: links.map(x => ({ trans: x.trans, prop: x.prop })), rows, Rmin, P, s };
  }
  function intensity(c) {
    const L0 = parseNum(c.L), R0 = parseNum(c.R), a0 = parseNum(c.a);
    if (!(L0 > 0) || !SIZE[c.Lunit]) return { error: "גודל החבילה L חייב להיות מספר חיובי" };
    if (!(R0 > 0) || !RATE[c.Runit]) return { error: "קצב הקישור R חייב להיות מספר חיובי" };
    const L = L0 * SIZE[c.Lunit], R = R0 * RATE[c.Runit];
    const hasA = c.a !== "" && c.a != null;
    if (hasA && !(a0 >= 0)) return { error: "קצב ההגעה a חייב להיות מספר (0 ומעלה)" };
    const a = hasA ? a0 / PER[c.aunit] : NaN;
    const out = { Lbits: L, Rbps: R, aPerSec: hasA ? a : null, rho: hasA ? a * L / R : null };
    const hasRho = c.rho !== "" && c.rho != null;
    if (hasRho) {
      const rho = parseNum(c.rho);
      if (!(rho > 0)) return { error: "העוצמה הרצויה ρ חייבת להיות מספר חיובי" };
      const amax = rho * R / L;
      out.aMax = { s: amax, min: amax * 60, hour: amax * 3600 };
      out.rhoTarget = rho;
    }
    if (!hasA && !hasRho) return { error: "הקלידו את קצב ההגעה a, או עוצמה רצויה ρ" };
    return out;
  }

  /* ================================ CRC / parity ================================ */
  function polyBits(g) {   // "1001" or "x^3+1" / "x3+x+1" -> bit string | null
    const s = String(g == null ? "" : g).replace(/\s+/g, "");
    if (/^[01]+$/.test(s)) return s.replace(/^0+(?=.)/, "");
    if (!/^[x0-9^+]+$/i.test(s) || !/x/i.test(s)) return null;
    const pw = new Set();
    for (const t of s.toLowerCase().split("+")) {
      if (t === "1") pw.add(0); else if (t === "x") pw.add(1);
      else { const m = t.match(/^x\^?(\d+)$/); if (!m) return null; pw.add(+m[1]); }
    }
    const hi = Math.max(...pw); if (hi > 64) return null;
    let b = ""; for (let i = hi; i >= 0; i--) b += pw.has(i) ? "1" : "0";
    return b;
  }
  const bitsOf = s => String(s == null ? "" : s).replace(/\s+/g, "");
  function divide(bits, G) {
    const r = G.length - 1, a = bits.split("").map(Number), steps = [];
    for (let i = 0; i + r < a.length; i++) {
      if (!a[i]) continue;
      const before = a.join("");
      for (let j = 0; j <= r; j++) a[i + j] ^= +G[j];
      steps.push({ pos: i, before, after: a.join("") });
    }
    const all = a.join("");
    return { steps, rem: r ? all.slice(-r).padStart(r, "0") : "", all };
  }
  function crc(D, G) {
    const d = bitsOf(D), g = polyBits(G);
    if (!/^[01]+$/.test(d)) return { error: "הנתונים D הם רצף של 0 ו-1" };
    if (!g || g.length < 2 || g[0] !== "1") return { error: "המחולל G הוא רצף ביטים שמתחיל ב-1 (לפחות 2 ביטים), או פולינום" };
    const r = g.length - 1, dv = divide(d + "0".repeat(r), g);
    return { r, remainder: dv.rem, codeword: d + dv.rem, steps: dv.steps, G: g, D: d, dividend: d + "0".repeat(r) };
  }
  function crcCheck(W, G) {
    const w = bitsOf(W), g = polyBits(G);
    if (!/^[01]+$/.test(w)) return { error: "המילה שהתקבלה היא רצף של 0 ו-1" };
    if (!g || g.length < 2 || g[0] !== "1") return { error: "המחולל G הוא רצף ביטים שמתחיל ב-1 (לפחות 2 ביטים), או פולינום" };
    const r = g.length - 1, dv = divide(w, g);
    return { remainder: dv.rem, ok: !/1/.test(dv.all), steps: dv.steps, r, G: g, W: w };
  }
  function parity2d(rows, parity, hasCheck) {
    const R = (Array.isArray(rows) ? rows : String(rows == null ? "" : rows).split(/\r?\n/)).map(bitsOf).filter(Boolean);
    if (!R.length) return { error: "הקלידו את הבלוק: שורה של ביטים בכל שורה" };
    if (!R.every(r => /^[01]+$/.test(r))) return { error: "בבלוק מותרים רק 0, 1 ורווחים" };
    if (!R.every(r => r.length === R[0].length)) return { error: "כל השורות צריכות להיות באותו אורך" };
    const g = R.map(r => r.split("").map(Number)), want = parity === "odd" ? 1 : 0, nc = g[0].length;
    const sum = a => a.reduce((x, y) => x + y, 0), col = (G, j) => G.map(r => r[j]);
    if (hasCheck) {
      const badRows = [], badCols = [];
      g.forEach((r, i) => { if (sum(r) % 2 !== want) badRows.push(i + 1); });
      for (let j = 0; j < nc; j++) if (sum(col(g, j)) % 2 !== want) badCols.push(j + 1);
      const status = !badRows.length && !badCols.length ? "ok" : badRows.length === 1 && badCols.length === 1 ? "single" : "multi";
      return { badRows, badCols, status, location: status === "single" ? [badRows[0], badCols[0]] : null, grid: g, hasCheck: true };
    }
    const bit = s => (s % 2) ^ want;
    const rowBits = g.map(r => bit(sum(r)));
    const full = g.map((r, i) => r.concat([rowBits[i]]));
    const colBits = [];
    for (let j = 0; j < nc + 1; j++) colBits.push(bit(sum(col(full, j))));
    return { rowBits, colBits, grid: full.concat([colBits]), hasCheck: false };
  }

  /* ================================ TCP ================================ */
  /* "8:3dup, 14:timeout" | {"8":"3dup"} -> {8:"3dup", 14:"timeout"} | {error} */
  function parseEvents(ev) {
    if (ev && typeof ev === "object") { const o = {}; for (const [k, v] of Object.entries(ev)) o[+k] = v; return o; }
    const o = {};
    for (const tok of String(ev == null ? "" : ev).split(/[,;\s]+/).filter(Boolean)) {
      const m = tok.match(/^(\d+)[:=](3dup|3|dup|td|tdack|triple|timeout|to|t)$/i);
      if (!m) return { error: `לא הבנתי את "${tok}": כתבו סבב:סוג, למשל 8:3dup או 14:timeout` };
      o[+m[1]] = /^(timeout|to|t)$/i.test(m[2]) ? "timeout" : "3dup";
    }
    return o;
  }
  const eventsStr = o => Object.keys(o).map(Number).sort((a, b) => a - b).map(k => `${k}:${o[k]}`).join(", ");
  function tcp(c) {
    const N = parseNum(c.rounds), init = parseNum(c.init), ss0 = parseNum(c.ssthresh);
    if (!Number.isInteger(N) || N < 1 || N > 100) return { error: "מספר הסבבים הוא שלם בין 1 ל-100" };
    if (!Number.isInteger(init) || init < 1 || init > 1000) return { error: "cwnd ההתחלתי הוא שלם חיובי" };
    if (!Number.isInteger(ss0) || ss0 < 1 || ss0 > 10000) return { error: "ssthresh ההתחלתי הוא שלם חיובי" };
    const ev = parseEvents(c.events);
    if (ev.error) return { error: ev.error };
    const cap = c.cap !== false, plus3 = !!c.plus3, tahoe = c.variant === "tahoe";
    let cw = init, ss = ss0;
    const rounds = [];
    for (let r = 1; r <= N; r++) {
      const e = ev[r] || null;
      rounds.push({ r, cwnd: cw, ssthresh: ss, phase: cw < ss ? "ss" : "ca", event: e });
      if (e) { ss = Math.max(Math.floor(cw / 2), 1); cw = (e === "timeout" || tahoe) ? 1 : ss + (plus3 ? 3 : 0); }
      else if (cw < ss) cw = cap ? Math.min(2 * cw, ss) : 2 * cw;
      else cw += 1;
    }
    return { rounds, ignored: Object.keys(ev).map(Number).filter(r => r > N) };
  }

  /* ================================ question -> spec ================================ */
  const numIn = s => String(s).replace(/,/g, "");
  function forQuestion(q) {
    if (!q) return null;
    const kind = TOPIC_KIND[q.topic];
    if (!kind) return null;
    const t = String(q.question || String(q.questionHtml || "").replace(/<[^>]+>/g, " ") || "");
    if (kind === "subnet") {
      const ents = [...t.matchAll(/(?:^|[\s`(])([A-Za-z][A-Za-z0-9]?)\s*:\s*(\d{1,3}(?:\.\d{1,3}){1,3}\s*\/\s*\d{1,2})/g)];
      const dst = t.match(/יעד\s*\$?\s*(\d{1,3}(?:\.\d{1,3}){3})/);
      if (ents.length >= 2 && dst) return { kind: "lpm", table: ents.map(m => `${m[1]}: ${m[2].replace(/\s+/g, "")}`).join("\n"), addr: dst[1] };
      const c = t.match(/(\d{1,3}(?:\.\d{1,3}){1,3})\s*\/\s*(\d{1,2})(?!\d)/);
      return c ? { kind: "subnet", cidr: `${c[1]}/${c[2]}` } : { kind: "subnet" };
    }
    if (kind === "crc") {
      if (/parity|זוגיות|hamming/i.test(t)) {
        let rows = (t.match(/```([\s\S]*?)```/) || [, ""])[1].split(/\n/).map(x => x.trim()).filter(x => /^[01][01 ]*$/.test(x) && x.replace(/\s/g, "").length >= 2);
        if (!rows.length) rows = [...t.matchAll(/ID\s*\d+\s*:\s*([01](?:\s*[01])+)/g)].map(m => m[1].replace(/\s+/g, ""));
        if (rows.length) return { kind: "parity", rows: rows.join("\n"), parity: /odd|אי[- ]?זוגי/i.test(t) ? "odd" : "even", hasCheck: /האחרונ|המקבל|קיבלנו|נועדות/.test(t) };
        return { kind: "parity" };
      }
      const G = t.match(/\bG\s*=\s*([01]{2,})/), D = t.match(/\bD\s*=\s*([01]+)/);
      return G && D ? { kind: "crc", mode: "send", D: D[1], G: G[1] } : { kind: "crc" };
    }
    if (kind === "delay") {
      const out = {};
      const L = t.match(/(\d[\d,]*(?:\.\d+)?)\s*(ביטים|ביט|bits?|bytes?|בתים|בייטים|בייט)/i);
      if (L) { out.L = numIn(L[1]); out.Lunit = /^(ביט|bit)/i.test(L[2]) ? "bit" : "byte"; }
      const R = [...t.matchAll(/(\d+(?:\.\d+)?)\s*([KMG])bps/gi)].map(m => ({ R: m[1], Runit: m[2].toUpperCase() + "bps" }));
      const s = t.match(/(\d+(?:\.\d+)?)\s*\\(?:times|cdot)\s*10\^\{?(\d+)\}?/);
      if (s) out.s = String(parseFloat(s[1]) * Math.pow(10, +s[2]));
      if (/traffic intensity|עוצמת תעבורה|arrival rate|שיעור ההגעה/i.test(t)) {
        const a = t.match(/(\d[\d,]*)\s*חבילות\s*ל(שעה|דקה|שנייה)/);
        const rho = t.match(/(?:traffic intensity|עוצמת תעבורה)[^?]{0,30}?(\d*\.\d+)/i);
        const o = { kind: "intensity", a: a ? numIn(a[1]) : "", aunit: a ? { "שעה": "hour", "דקה": "min", "שנייה": "s" }[a[2]] : "s", rho: rho ? rho[1] : "" };
        if (out.L) { o.L = out.L; o.Lunit = out.Lunit; }
        if (R[0]) { o.R = R[0].R; o.Runit = R[0].Runit; }
        return o;
      }
      const d = t.match(/(\d[\d,]*(?:\.\d+)?)\s*(קילומטרים|ק"מ|ק״מ|km)/i);
      if (R.length) out.links = R.map(x => ({ R: x.R, Runit: x.Runit, d: d ? numIn(d[1]) : "0", dunit: "km", n: "1" }));
      return Object.assign({ kind: "delay" }, out);
    }
    return { kind: "tcp" };
  }

  /* ================================ spec checks ================================ */
  const SPEC_KEYS = {
    subnet: ["cidr"], lpm: ["table", "addr"], delay: ["L", "Lunit", "s", "packets", "links"],
    intensity: ["a", "aunit", "L", "Lunit", "R", "Runit", "rho"], crc: ["mode", "D", "G", "W"],
    parity: ["rows", "parity", "hasCheck"], tcp: ["rounds", "init", "ssthresh", "variant", "events", "cap", "plus3"] };
  const LINK_KEYS = ["R", "Runit", "d", "dunit", "n"];
  function parseSpec(v) {
    if (v && typeof v === "object") return v;
    const s = String(v == null ? "" : v).trim();
    if (KINDS.includes(s)) return { kind: s };
    return JSON.parse(s);   // throws on bad JSON
  }
  function check(spec) {
    const P = [];
    let sp;
    try { sp = parseSpec(spec); } catch (e) { return ["calc spec is not valid JSON or a kind name"]; }
    if (!sp || typeof sp !== "object" || Array.isArray(sp)) return ["calc spec must be an object"];
    if (!KINDS.includes(sp.kind)) return [`unknown calc kind "${sp.kind}" (one of ${KINDS.join(", ")})`];
    for (const k of Object.keys(sp)) if (k !== "kind" && k !== "caption" && !SPEC_KEYS[sp.kind].includes(k)) P.push(`${sp.kind}: unknown key "${k}"`);
    const unit = (k, U) => { if (sp[k] !== undefined && !U[sp[k]]) P.push(`${sp.kind}: ${k} must be one of ${Object.keys(U).join("/")}`); };
    unit("Lunit", SIZE); unit("Runit", RATE); unit("aunit", PER);
    if (sp.links !== undefined) {
      if (!Array.isArray(sp.links) || !sp.links.length) P.push("delay: links must be a non-empty list");
      else sp.links.forEach((l, i) => {
        for (const k of Object.keys(l || {})) if (!LINK_KEYS.includes(k)) P.push(`delay: links[${i}] unknown key "${k}"`);
        if (l.Runit !== undefined && !RATE[l.Runit]) P.push(`delay: links[${i}].Runit must be one of ${Object.keys(RATE).join("/")}`);
        if (l.dunit !== undefined && !DIST[l.dunit]) P.push(`delay: links[${i}].dunit must be m/km`);
      });
    }
    if (sp.mode !== undefined && !["send", "recv"].includes(sp.mode)) P.push("crc: mode must be send or recv");
    if (sp.parity !== undefined && !["even", "odd"].includes(sp.parity)) P.push("parity: parity must be even or odd");
    if (sp.variant !== undefined && !["reno", "tahoe"].includes(sp.variant)) P.push("tcp: variant must be reno or tahoe");
    for (const k of ["hasCheck", "cap", "plus3"]) if (sp[k] !== undefined && typeof sp[k] !== "boolean") P.push(`${sp.kind}: ${k} must be true or false`);
    if (P.length) return P;
    // the calculator must produce a result for the values it is given
    const st = state(sp.kind, sp), r = compute(sp.kind, st);
    if (r && r.error) P.push(`${sp.kind}: ${r.error.replace(/[^\x20-\x7e]+/g, "?")}`);
    return P;
  }

  /* ================================ state ================================ */
  const DEFAULTS = {
    subnet: { cidr: "200.107.16.17/18" },
    lpm: { table: "A: 25.36.64.0/16\nB: 25.36.128.0/20\nC: 25.36.64.0/20\nD: 20.0.0.0/8", addr: "25.36.67.5" },
    delay: { L: "5000", Lunit: "bit", s: "2e8", packets: "1",
      links: [{ R: "100", Runit: "Mbps", d: "1000", dunit: "km", n: "1" }, { R: "50", Runit: "Mbps", d: "1000", dunit: "km", n: "1" },
              { R: "10", Runit: "Mbps", d: "1000", dunit: "km", n: "1" }] },
    intensity: { a: "500000", aunit: "hour", L: "5000", Lunit: "bit", R: "1", Runit: "Gbps", rho: "" },
    crc: { mode: "send", D: "10011100", G: "1001", W: "10011100101" },
    parity: { rows: "10010100 11001010 1\n10001000 00000000 1\n11011011 11101001 1\n10010000 11101001 1\n00011100 01101010 1\n01011011 10100000 1",
      parity: "even", hasCheck: true },
    tcp: { rounds: "20", init: "1", ssthresh: "8", variant: "reno", events: "8:3dup, 14:timeout", cap: true, plus3: false },
  };
  const str = v => v == null ? "" : String(v);
  function state(kind, values) {
    const st = JSON.parse(JSON.stringify(DEFAULTS[kind]));
    const v = values || {};
    for (const k of SPEC_KEYS[kind]) {
      if (v[k] === undefined) continue;
      if (k === "links") st.links = v.links.map(l => Object.assign({ R: "", Runit: "Mbps", d: "0", dunit: "km", n: "1" }, ...Object.keys(l).map(x => ({ [x]: str(l[x]) }))));
      else if (typeof DEFAULTS[kind][k] === "boolean") st[k] = !!v[k];
      else if (k === "table" || k === "rows") st[k] = Array.isArray(v[k]) ? v[k].join("\n") : str(v[k]);
      else if (k === "events") st[k] = typeof v[k] === "object" ? eventsStr(parseEvents(v[k])) : str(v[k]);
      else st[k] = str(v[k]);
    }
    if (kind === "crc" && v.W === undefined && v.D !== undefined && v.mode !== "recv") { const r = crc(st.D, st.G); if (!r.error) st.W = r.codeword; }
    return st;
  }
  function compute(kind, st) {
    switch (kind) {
      case "subnet": return subnet(st.cidr);
      case "lpm": return lpm(st.table, st.addr);
      case "delay": return delay(st);
      case "intensity": return intensity(st);
      case "crc": return st.mode === "recv" ? crcCheck(st.W, st.G) : crc(st.D, st.G);
      case "parity": return parity2d(st.rows, st.parity, st.hasCheck);
      case "tcp": return tcp(st);
    }
    return { error: "unknown kind" };
  }

  /* ================================ UI helpers ================================ */
  const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const ltr = (h, cls) => `<bdi dir="ltr" class="calc-ltr${cls ? " " + cls : ""}">${h}</bdi>`;   // h is HTML
  const ip = s => ltr(esc(s), "calc-ip");
  const errBox = m => `<div class="calc-err" role="alert">${esc(m)}</div>`;
  function inp(k, v, o) {
    o = o || {};
    return `<input class="calc-in${o.cls ? " " + o.cls : ""}" data-k="${k}" type="text" dir="ltr" inputmode="${o.mode || "decimal"}" autocomplete="off" spellcheck="false" value="${esc(str(v))}"${o.ph ? ` placeholder="${esc(o.ph)}"` : ""} aria-label="${esc(o.label || k)}">`;
  }
  const sel = (k, v, opts, label) => `<select class="calc-sel" data-k="${k}" aria-label="${esc(label)}">` +
    Object.entries(opts).map(([val, t]) => `<option value="${val}"${val === v ? " selected" : ""}>${esc(t)}</option>`).join("") + `</select>`;
  const field = (label, ctl, hint, cls) => `<label class="calc-field${cls ? " " + cls : ""}"><span class="calc-lbl">${label}</span><span class="calc-ctl">${ctl}</span>${hint ? `<span class="calc-hint">${hint}</span>` : ""}</label>`;
  const seg = (k, v, opts, label) => `<div class="calc-seg" role="group" aria-label="${esc(label)}">` +
    opts.map(([val, t]) => `<button type="button" class="calc-seg-b${String(val) === String(v) ? " on" : ""}" data-act="set" data-k="${k}" data-v="${val}" aria-pressed="${String(val) === String(v)}">${t}</button>`).join("") + `</div>`;
  const chk = (k, v, label) => `<label class="calc-chk"><input type="checkbox" data-k="${k}"${v ? " checked" : ""}> <span>${label}</span></label>`;
  const row = (k, v) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`;
  const kv = rows => `<table class="calc-kv">${rows.map(([k, v]) => row(k, v)).join("")}</table>`;
  const big = (label, v) => `<div class="calc-big"><span class="calc-big-l">${label}</span><span class="calc-big-v">${v}</span></div>`;
  const note = h => `<p class="calc-note">${h}</p>`;
  const code = s => `<code dir="ltr">${esc(s)}</code>`;

  function binLine(n, p, cls) {   // 32 bits as 4 octets, prefix bits marked, a cut before the first host bit
    const b = bits32(n);
    let h = "";
    for (let i = 0; i < 32; i++) {
      if (i && i % 8 === 0) h += `<span class="calc-dot">.</span>`;
      h += `<span class="${i < p ? "n" : "h"}${i === p && p > 0 ? " cut" : ""}">${b[i]}</span>`;
    }
    return `<div class="calc-bin${cls ? " " + cls : ""}" dir="ltr">${h}</div>`;
  }

  /* ================================ panels ================================ */
  const PANELS = {};

  PANELS.subnet = {
    form: st => field("כתובת IP ותחילית", inp("cidr", st.cidr, { mode: "text", ph: "200.107.16.17/18", label: "כתובת ותחילית" }),
      `אפשר גם מסכה: ${code("200.107.16.17 255.255.192.0")} או קיצור ${code("223.1.2/24")}`),
    out(st) {
      const r = subnet(st.cidr);
      if (r.error) return errBox(r.error);
      const h = 32 - r.prefix;
      return big("כתובת הרשת", ip(`${r.network}/${r.prefix}`)) +
        kv([["broadcast", ip(r.broadcast)],
            ["טווח המארחים", `${ip(r.first)} עד ${ip(r.last)}`],
            ["מסכת הרשת", ip(r.mask)],
            ["ביטים", `${ltr(r.prefix)} ביטים לתחילית, ${ltr(h)} ביטים למארח`],
            ["כתובות בבלוק", ltr(`2<sup>${h}</sup> = ${group(r.total)}`)],
            ["כתובות למארחים", ltr(group(r.usable)) + (r.prefix <= 30 ? " (בלי כתובת הרשת וה-broadcast)" : " (בקישור נקודה-לנקודה או מארח בודד כל הכתובות שמישות)")]]) +
        `<div class="calc-sub">בבינארי (התחילית מודגשת)</div>` +
        `<div class="calc-binbox"><div class="calc-bin-l">הכתובת</div>${binLine(r._addr, r.prefix)}` +
        `<div class="calc-bin-l">המסכה</div>${binLine(r._mask, r.prefix)}` +
        `<div class="calc-bin-l">כתובת הרשת: מאפסים את ביטי המארח</div>${binLine(r._net, r.prefix)}` +
        `<div class="calc-bin-l">broadcast: ממלאים את ביטי המארח ב-1</div>${binLine(r._bc, r.prefix)}</div>` +
        (r.hostBitsSet ? note(`הכתובת ${ip(r.addr)} היא כתובת בתוך הבלוק ולא כתובת הרשת עצמה. אחרי איפוס ${ltr(h)} ביטי המארח מקבלים ${ip(r.network)}.`) : "");
    },
  };

  PANELS.lpm = {
    form: st => field("טבלת העברה, כניסה בכל שורה", `<textarea class="calc-in calc-ta" data-k="table" dir="ltr" rows="5" spellcheck="false" aria-label="טבלת העברה">${esc(st.table)}</textarea>`,
        `למשל ${code("A: 25.36.64.0/16")}, תחילית בביטים ${code("11001000 00010111 00010 → 0")} או ${code("default → 3")}`) +
      field("כתובת היעד", inp("addr", st.addr, { mode: "text", ph: "25.36.67.5", label: "כתובת היעד" })),
    out(st) {
      const r = lpm(st.table, st.addr);
      if (r.error) return errBox(r.error) + (r.errors || []).map(errBox).join("");
      const best = r.entries[r.bestIndex];
      const hits = r.entries.filter(e => e.match);
      let h = (r.errors.length ? r.errors.map(errBox).join("") : "") +
        (best ? big("החבילה יוצאת לפי כניסה", ltr(esc(best.label))) +
          note(`מבין הכניסות שמתאימות (${hits.map(e => ltr(esc(e.label))).join(", ")}) נבחרת התחילית הארוכה ביותר: ${ltr("/" + best.prefix)}.`) :
          big("אין התאמה", "—") + note("אף כניסה לא מתאימה ואין כניסת default, ולכן הנתב זורק את החבילה."));
      h += `<div class="calc-scroll"><table class="calc-tbl"><thead><tr><th>כניסה</th><th>תחילית</th><th>מתאימה?</th></tr></thead><tbody>` +
        r.entries.map((e, i) => `<tr class="${i === r.bestIndex ? "best" : e.match ? "hit" : "miss"}"><td>${ltr(esc(e.label))}</td><td>${ip(`${e.network}/${e.prefix}`)}</td><td>${e.match ? "✓ כן" : "✗ לא"}</td></tr>`).join("") +
        `</tbody></table></div>`;
      // bit-by-bit comparison: each entry's prefix bits under the destination's bits
      const db = bits32(r._dst);
      const line = (lab, bitsStr, p) => {
        let s = "", miss = false;
        for (let i = 0; i < 32; i++) {
          if (i && i % 8 === 0) s += `<span class="calc-dot">.</span>`;
          if (i >= p) { s += `<span class="h">·</span>`; continue; }
          const ok = bitsStr[i] === db[i]; if (!ok) miss = true;
          s += `<span class="${ok ? (miss ? "n" : "n ok") : "bad"}">${bitsStr[i]}</span>`;
        }
        return `<div class="calc-bin calc-bin-k" dir="ltr"><span class="calc-k">${esc(lab).slice(0, 4).padEnd(4, " ")}</span>${s}</div>`;
      };
      h += `<div class="calc-sub">השוואה ביט אחר ביט מול היעד</div><div class="calc-binbox">` +
        `<div class="calc-bin calc-bin-k" dir="ltr"><span class="calc-k">dst </span>${db.match(/.{8}/g).join(`<span class="calc-dot">.</span>`)}</div>` +
        r.entries.map(e => line(e.label, bits32(e._net), e.prefix)).join("") + `</div>`;
      const fixed = r.entries.filter(e => e.hostBits);
      if (fixed.length) h += note(`בכניסה ${fixed.map(e => ltr(esc(e.label))).join(", ")} הכתובת שבטבלה כוללת ביטי מארח. קובעת רק התחילית: ${fixed.map(e => `${ip(e.given)} היא הבלוק ${ip(`${e.network}/${e.prefix}`)}`).join(", ")}.`);
      return h;
    },
  };

  PANELS.delay = {
    form: st => `<div class="calc-row">` +
        field("גודל החבילה L", inp("L", st.L, { label: "L" }) + sel("Lunit", st.Lunit, SIZE_HE, "יחידת L")) +
        field("מהירות ההתפשטות s", inp("s", st.s, { label: "s" }) + `<span class="calc-unit" dir="ltr">m/s</span>`, `${code("2e8")} = ${code("2*10^8")}`) +
      `</div><div class="calc-sub">הקישורים בדרך (store-and-forward)</div>` +
      st.links.map((k, i) => `<div class="calc-link"><div class="calc-link-h"><span>קישור ${ltr(i + 1)}</span>` +
          (st.links.length > 1 ? `<button type="button" class="calc-x" data-act="rm-link" data-i="${i}" aria-label="הסרת קישור ${i + 1}">✕</button>` : "") + `</div><div class="calc-row">` +
          field("קצב R", inp(`links.${i}.R`, k.R, { label: "R" }) + sel(`links.${i}.Runit`, k.Runit, RATE_HE, "יחידת R")) +
          field("אורך d", inp(`links.${i}.d`, k.d, { label: "d" }) + sel(`links.${i}.dunit`, k.dunit, DIST_HE, "יחידת d")) +
          field("כמה כאלה", inp(`links.${i}.n`, k.n, { cls: "calc-in-s", mode: "numeric", label: "מספר קישורים זהים" }), "", "calc-f-s") +
        `</div></div>`).join("") +
      `<button type="button" class="btn ghost calc-add" data-act="add-link">+ קישור</button>` +
      `<div class="calc-row">${field("מספר חבילות P ברצף", inp("packets", st.packets, { cls: "calc-in-s", mode: "numeric", label: "P" }), "", "calc-f-s")}</div>`,
    act(a, b, st) {
      if (a === "add-link") { const l = st.links[st.links.length - 1]; st.links.push(Object.assign({}, l)); return "form"; }
      if (a === "rm-link") { st.links.splice(+b.dataset.i, 1); return "form"; }
    },
    out(st) {
      const r = delay(st);
      if (r.error) return errBox(r.error);
      const Ls = `${fmt(parseNum(st.L))} ${SIZE_SYM[st.Lunit]}`;
      let h = big("השהיה כוללת", ltr(fmtTime(r.total))) +
        kv([["סכום זמני השידור", ltr(`Σ L/R<sub>i</sub> = ${fmtTime(r.trans)}`)],
            ["סכום זמני ההתפשטות", ltr(`Σ d<sub>i</sub>/s = ${fmtTime(r.prop)}`)]].concat(
            r.P > 1 ? [["עוד חבילות ברצף", ltr(`(P−1)·L/R<sub>min</sub> = ${fmtTime(r.pipeline)}`)]] : [],
            [["בשניות", ltr(`${fmt(r.total)} s`)]]));
      if (st.Lunit !== "bit") h += note(`יחידות: ${ltr(`L = ${Ls} = ${fmt(r.Lbits)} bit`)}. הקצב R הוא בביטים לשנייה, ולכן ממירים קודם לביטים.`);
      h += `<div class="calc-sub">לפי קישור</div><div class="calc-steps">` + r.rows.map((x, i) =>
        `<div class="calc-step"><span class="calc-step-h">קישור ${ltr(i + 1)}${x.n > 1 ? ` (${ltr("×" + x.n)})` : ""}</span>` +
        `<span>שידור: ${ltr(`L/R = ${fmt(r.Lbits)} bit / ${fmtRate(x.R)} = ${fmtTime(x.trans)}`)}</span>` +
        `<span>התפשטות: ${ltr(`d/s = ${x.d && x.d < 1000 ? fmt(x.d) + " m" : fmt(x.d / 1000) + " km"} /${fmtBig(r.s)} m/s = ${fmtTime(x.prop)}`)}</span></div>`).join("") + `</div>` +
        note(`ב-store-and-forward כל נתב מקבל את החבילה כולה לפני שהוא משדר אותה הלאה, ולכן זמן השידור נספר מחדש בכל אחד מ-${ltr(r.nLinks)} הקישורים. בלי השהיות עיבוד ותור, כמו בשאלות המבחן.`) +
        (r.P > 1 ? note(`${ltr(r.P)} חבילות ברצף: הראשונה מגיעה אחרי הסכום, וכל חבילה נוספת מגיעה אחרי זמן השידור בקישור האיטי ביותר, ${ltr(`L/R<sub>min</sub> = ${fmtTime(r.Lbits / r.Rmin)}`)}.`) : "");
      return h;
    },
  };

  PANELS.intensity = {
    form: st => `<div class="calc-row">` +
      field("קצב ההגעה a", inp("a", st.a, { label: "a" }) + sel("aunit", st.aunit, PER_HE, "יחידת a")) +
      field("גודל החבילה L", inp("L", st.L, { label: "L" }) + sel("Lunit", st.Lunit, SIZE_HE, "יחידת L")) +
      field("קצב הקישור R", inp("R", st.R, { label: "R" }) + sel("Runit", st.Runit, RATE_HE, "יחידת R")) +
      field("עוצמה רצויה ρ (לא חובה)", inp("rho", st.rho, { cls: "calc-in-s", label: "rho", ph: "0.8" }), "ממלאים כדי לקבל את קצב ההגעה המרבי", "calc-f-s") + `</div>`,
    out(st) {
      const r = intensity(st);
      if (r.error) return errBox(r.error);
      let h = "";
      if (r.rho !== null) {
        const v = r.rho;
        h += big("עוצמת התעבורה", ltr(`La/R = ${fmt(v)}`));
        if (st.aunit !== "s") h += note(`קודם ממירים את קצב ההגעה לחבילות לשנייה: ${ltr(`${fmt(parseNum(st.a))} / ${PER[st.aunit] === 60 ? "60" : "3,600"} = ${fmt(r.aPerSec)}`)} חבילות לשנייה.`);
        h += note(`${ltr(`ρ = ${fmt(r.Lbits)} bit × ${fmt(r.aPerSec)} /s / ${fmtRate(r.Rbps)}`)}`);
        h += `<div class="calc-verdict ${v > 1 ? "bad" : v >= 0.8 ? "warn" : "ok"}">` +
          (v > 1 ? "גדול מ-1: הביטים מגיעים מהר יותר ממה שהקישור משדר, התור גדל בלי גבול וההשהיה שואפת לאינסוף." :
           v >= 0.8 ? "קרוב ל-1: התור מתארך מהר וההשהיה בתור גדולה מאוד, יש פוטנציאל לעומס." :
           "רחוק מ-1: התור קצר בדרך כלל וההשהיה בתור קטנה, אין פוטנציאל מיידי לעומס.") + `</div>`;
      }
      if (r.aMax) {
        h += `<div class="calc-sub">קצב ההגעה המרבי לעוצמה ${ltr(`ρ = ${fmt(r.rhoTarget)}`)}</div>` +
          note(ltr(`a = ρ·R/L = ${fmt(r.rhoTarget)} × ${fmtRate(r.Rbps)} / ${fmt(r.Lbits)} bit`)) +
          kv([["לשנייה", ltr(fmt(r.aMax.s))], ["לדקה", ltr(fmt(r.aMax.min))], ["לשעה", ltr(fmt(r.aMax.hour))]]);
      }
      if (st.Lunit !== "bit") h += note(`יחידות: ${ltr(`L = ${fmt(parseNum(st.L))} ${SIZE_SYM[st.Lunit]} = ${fmt(r.Lbits)} bit`)}.`);
      return h;
    },
  };

  function divHtml(r, k, recv) {   // the long division up to step k (all steps when k is null)
    const n = r.steps.length, upto = k == null ? n : Math.min(k, n), w = (recv ? r.W : r.dividend).length, rr = r.r;
    const first = recv ? r.W : r.dividend;
    const bitsH = (s, o) => {   // o: {padFrom, dimTo, remFrom}
      let h = "";
      for (let i = 0; i < s.length; i++) {
        const c = [];
        if (o.dimTo != null && i < o.dimTo) c.push("z");
        if (o.padFrom != null && i >= o.padFrom) c.push("pad");
        if (o.remFrom != null && i >= o.remFrom) c.push("rem");
        h += c.length ? `<span class="${c.join(" ")}">${s[i]}</span>` : s[i];
      }
      return h;
    };
    const lines = [`<div class="calc-dl"><span class="calc-g"> </span>${bitsH(first, { padFrom: recv ? null : w - rr, remFrom: upto === n && !n ? w - rr : null })}</div>`];
    for (let i = 0; i < upto; i++) {
      const s = r.steps[i], last = i === n - 1;
      const lead = s.after.indexOf("1");
      lines.push(`<div class="calc-dl g"><span class="calc-g">⊕</span>${" ".repeat(s.pos)}<span class="gb">${r.G}</span>${" ".repeat(w - s.pos - r.G.length)}</div>`);
      lines.push(`<div class="calc-dl rule"><span class="calc-g"> </span>${" ".repeat(s.pos)}${"─".repeat(r.G.length)}${" ".repeat(w - s.pos - r.G.length)}</div>`);
      lines.push(`<div class="calc-dl"><span class="calc-g"> </span>${bitsH(s.after, { dimTo: last ? w - rr : (lead < 0 ? w : lead), remFrom: last ? w - rr : null })}</div>`);
    }
    return `<div class="calc-scroll"><div class="calc-div" dir="ltr">${lines.join("")}</div></div>`;
  }
  PANELS.crc = {
    form: st => seg("mode", st.mode, [["send", "חישוב R בצד השולח"], ["recv", "בדיקה בצד המקבל"]], "מצב") +
      `<div class="calc-row">` + (st.mode === "recv"
        ? field("המילה שהתקבלה", inp("W", st.W, { mode: "numeric", label: "המילה שהתקבלה" }))
        : field("הנתונים D", inp("D", st.D, { mode: "numeric", label: "D" }))) +
      field("המחולל G", inp("G", st.G, { mode: "text", label: "G" }), `ביטים, או פולינום כמו ${code("x^3+1")}`) + `</div>`,
    act(a, b, st) {
      if (a === "set") { st._step = null; return; }
      const n = (compute("crc", st).steps || []).length, k = st._step == null ? n : st._step;
      if (a === "step-first") st._step = 0;
      else if (a === "step-prev") st._step = Math.max(0, k - 1);
      else if (a === "step-next") st._step = Math.min(n, k + 1);
      else if (a === "step-all") st._step = null;
    },
    out(st) {
      const recv = st.mode === "recv", r = compute("crc", st);
      if (r.error) return errBox(r.error);
      const n = r.steps.length, k = st._step == null ? n : Math.min(st._step, n), done = k === n;
      let h = done ? (recv
          ? big("השארית", ltr(r.remainder, "calc-bits")) + `<div class="calc-verdict ${r.ok ? "ok" : "bad"}">${r.ok ? "השארית אפס: לא זוהתה שגיאה." : "השארית שונה מאפס: זוהתה שגיאה במסגרת."}</div>`
          : big("השארית R", ltr(r.remainder, "calc-bits")) + note(`שולחים את D ואחריו R: ${ltr(`${esc(r.D)}<span class="rem">${r.remainder}</span>`, "calc-bits")}`))
        : big("צעד", ltr(`${k} / ${n}`));
      h += note(recv ? `${ltr(`r = ${r.r}`)} (אורך G פחות 1). מחלקים את המילה שהתקבלה ב-G בחילוק בינארי בלי נשא (XOR).`
                     : `${ltr(`r = ${r.r}`)} (אורך G פחות 1). מוסיפים ${ltr(r.r)} אפסים מימין ל-D, ומחלקים ב-G בחילוק בינארי בלי נשא (XOR) מתחת לכל 1 מוביל.`);
      h += `<div class="calc-stepper"><button type="button" class="btn ghost" data-act="step-first" ${k === 0 ? "disabled" : ""}>מההתחלה</button>` +
        `<button type="button" class="btn ghost" data-act="step-prev" ${k === 0 ? "disabled" : ""}>⟶ הקודם</button>` +
        `<span class="calc-stepn">צעד ${ltr(`${k} / ${n}`)}</span>` +
        `<button type="button" class="btn ghost" data-act="step-next" ${done ? "disabled" : ""}>הבא ⟵</button>` +
        `<button type="button" class="btn ghost" data-act="step-all" ${done ? "disabled" : ""}>הכל</button></div>`;
      h += divHtml(r, k, recv);
      return h;
    },
  };

  PANELS.parity = {
    form: st => field("הבלוק, שורה של ביטים בכל שורה", `<textarea class="calc-in calc-ta" data-k="rows" dir="ltr" rows="6" spellcheck="false" aria-label="הבלוק">${esc(st.rows)}</textarea>`, "רווחים בתוך שורה לא נספרים") +
      seg("parity", st.parity, [["even", "זוגיות זוגית (even)"], ["odd", "אי-זוגית (odd)"]], "סוג הזוגיות") +
      seg("hasCheck", st.hasCheck, [[true, "בלוק שהתקבל, כולל ביטי בדיקה"], [false, "נתונים בלבד: חשבו את ביטי הבדיקה"]], "תוכן הבלוק"),
    act(a, b, st) { if (a === "set" && b.dataset.k === "hasCheck") st.hasCheck = b.dataset.v === "true"; },
    out(st) {
      const r = parity2d(st.rows, st.parity, st.hasCheck);
      if (r.error) return errBox(r.error);
      const G = r.grid, nr = G.length, nc = G[0].length;
      const bR = new Set(r.badRows || []), bC = new Set(r.badCols || []);
      let t = `<thead><tr><th></th>${G[0].map((_, j) => `<th>${j + 1}</th>`).join("")}${r.hasCheck ? `<th class="st"></th>` : ""}</tr></thead><tbody>`;
      G.forEach((rw, i) => {
        t += `<tr class="${bR.has(i + 1) ? "badr" : ""}"><th>${i + 1}</th>` + rw.map((b, j) => {
          const c = [];
          if (i === nr - 1 || j === nc - 1) c.push("pc");
          if (bC.has(j + 1)) c.push("badc");
          if (bR.has(i + 1) && bC.has(j + 1)) c.push("hit");
          return `<td${c.length ? ` class="${c.join(" ")}"` : ""}>${b}</td>`;
        }).join("") + (r.hasCheck ? `<td class="st">${bR.has(i + 1) ? "✗" : "✓"}</td>` : "") + `</tr>`;
      });
      if (r.hasCheck) t += `<tr class="st"><th></th>${G[0].map((_, j) => `<td>${bC.has(j + 1) ? "✗" : "✓"}</td>`).join("")}<td></td></tr>`;
      t += `</tbody>`;
      const pname = st.parity === "odd" ? "אי-זוגי" : "זוגי";
      let h = "";
      if (r.hasCheck) {
        const list = a => a.map(x => ltr(x)).join(", ");
        h += r.status === "ok" ? big("תוצאה", "לא זוהתה שגיאה") + `<div class="calc-verdict ok">בכל שורה ובכל עמודה מספר האחדות ${pname}.</div>`
          : r.status === "single" ? big("הביט שהתהפך", `שורה ${ltr(r.location[0])}, עמודה ${ltr(r.location[1])}`) +
              `<div class="calc-verdict warn">רק שורה ${ltr(r.location[0])} ועמודה ${ltr(r.location[1])} שגויות, ולכן הביט בהצטלבות שלהן התהפך. אפשר לתקן אותו.</div>`
          : big("תוצאה", "זוהתה שגיאה") + `<div class="calc-verdict bad">שורות שגויות: ${list(r.badRows) || "אין"}. עמודות שגויות: ${list(r.badCols) || "אין"}. התהפך יותר מביט אחד: אפשר לזהות שגיאה, אבל לא לדעת איזה ביט לתקן.</div>`;
      } else {
        h += big("ביטי הבדיקה", `${ltr(r.rowBits.join(" "), "calc-bits")} לשורות`) +
          note(`שורת הבדיקה (כולל ביט הפינה): ${ltr(r.colBits.join(" "), "calc-bits")}. כל ביט בדיקה משלים את מספר האחדות בשורה או בעמודה שלו למספר ${pname}.`);
      }
      h += `<div class="calc-scroll"><table class="calc-grid" dir="ltr">${t}</table></div>` +
        note("השורות ממוספרות מלמעלה והעמודות משמאל לימין, כמו בבלוק המודפס. העמודה והשורה האחרונות הן ביטי הבדיקה.");
      return h;
    },
  };

  function tcpChart(r, st) {
    const R = r.rounds, N = R.length, W = 340, H = 210, ml = 30, mr = 8, mt = 16, mb = 24;
    const maxV = Math.max(4, ...R.map(x => x.cwnd), ...R.map(x => x.ssthresh).filter(v => v <= 2 * Math.max(...R.map(x => x.cwnd)) + 4));
    const stepY = [1, 2, 4, 5, 10, 20, 25, 50, 100, 200, 500, 1000].find(s => maxV / s <= 5) || 2000;
    const top = Math.ceil(maxV * 1.08 / stepY) * stepY;
    const cw = (W - ml - mr) / N, y = v => mt + (H - mt - mb) * (1 - Math.min(v, top) / top), xs = i => ml + i * cw;
    let g = "";
    for (let v = 0; v <= top; v += stepY) g += `<line class="gl" x1="${ml}" x2="${W - mr}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}"/><text class="ax" x="${ml - 4}" y="${(y(v) + 3.5).toFixed(1)}" text-anchor="end">${v}</text>`;
    const xstep = Math.ceil(N / 10);
    R.forEach((x, i) => { if ((i + 1) % xstep === 0 || i === 0) g += `<text class="ax" x="${(xs(i) + cw / 2).toFixed(1)}" y="${H - 8}" text-anchor="middle">${x.r}</text>`; });
    const path = key => R.map((x, i) => `${i ? "V" : "M" + xs(0).toFixed(1) + " "}${y(x[key]).toFixed(1)} H${xs(i + 1).toFixed(1)}`).join(" ");
    g += `<path class="ssl" d="${path("ssthresh")}"/><path class="cwl" d="${path("cwnd")}"/>`;
    R.forEach((x, i) => {
      const cx = (xs(i) + cw / 2).toFixed(1), cy = y(x.cwnd).toFixed(1);
      g += `<circle class="pt ${x.phase}${x.event ? " ev" : ""}" cx="${cx}" cy="${cy}" r="${Math.min(3.4, cw / 3).toFixed(1)}"/>`;
      if (x.event) g += `<text class="evt ${x.event === "timeout" ? "to" : "td"}" x="${cx}" y="${(+cy - 6).toFixed(1)}" text-anchor="middle">${x.event === "timeout" ? "TO" : "TD"}</text>`;
      g += `<rect class="hit" data-act="ev" data-r="${x.r}" x="${xs(i).toFixed(1)}" y="${mt}" width="${cw.toFixed(1)}" height="${H - mt - mb}"><title>round ${x.r}: cwnd ${x.cwnd}</title></rect>`;
    });
    return `<svg class="calc-chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="גרף cwnd לפי סבב" dir="ltr">${g}</svg>`;
  }
  PANELS.tcp = {
    form: st => `<div class="calc-row">` +
        field("מספר סבבי RTT", inp("rounds", st.rounds, { cls: "calc-in-s", mode: "numeric", label: "סבבים" }), "", "calc-f-s") +
        field("cwnd התחלתי", inp("init", st.init, { cls: "calc-in-s", mode: "numeric", label: "cwnd" }), "ב-MSS", "calc-f-s") +
        field("ssthresh התחלתי", inp("ssthresh", st.ssthresh, { cls: "calc-in-s", mode: "numeric", label: "ssthresh" }), "ב-MSS", "calc-f-s") + `</div>` +
      seg("variant", st.variant, [["reno", "TCP Reno"], ["tahoe", "TCP Tahoe"]], "גרסה") +
      field("אירועי אובדן", inp("events", st.events, { mode: "text", ph: "8:3dup, 14:timeout", label: "אירועים" }),
        `סבב:סוג, ${code("3dup")} הוא שלושה ACK כפולים ו-${code("timeout")} פסק זמן. אפשר גם ללחוץ על סבב בגרף.`) +
      chk("cap", st.cap, "ב-slow start ההכפלה נעצרת ב-ssthresh") +
      chk("plus3", st.plus3, `ב-Reno, אחרי שלושה ACK כפולים ${ltr("cwnd = ssthresh + 3")} (כמו בספר של Kurose)`),
    act(a, b, st) {
      if (a === "ev") {
        const ev = parseEvents(st.events); if (ev.error) return;
        const r = +b.dataset.r, cur = ev[r];
        if (!cur) ev[r] = "3dup"; else if (cur === "3dup") ev[r] = "timeout"; else delete ev[r];
        st.events = eventsStr(ev); return "form";
      }
    },
    out(st) {
      const r = tcp(st);
      if (r.error) return errBox(r.error);
      const tahoe = st.variant === "tahoe";
      const evs = r.rounds.filter(x => x.event);
      let h = tcpChart(r, st) +
        `<div class="calc-legend"><span><i class="lg cw"></i>cwnd</span><span><i class="lg ss"></i>ssthresh</span>` +
        `<span><i class="lg pss"></i>slow start</span><span><i class="lg pca"></i>congestion avoidance</span>` +
        `<span><b class="td">TD</b> שלושה ACK כפולים</span><span><b class="to">TO</b> timeout</span></div>`;
      h += `<ul class="calc-rules">` +
        `<li>slow start: כש-${ltr("cwnd < ssthresh")} החלון מוכפל בכל סבב${st.cap ? ", ולא עובר את ssthresh" : ""}.</li>` +
        `<li>congestion avoidance: כש-${ltr("cwnd ≥ ssthresh")} החלון גדל ב-1 בכל סבב.</li>` +
        `<li>שלושה ACK כפולים: ${ltr("ssthresh = ⌊cwnd/2⌋")}, ואז ${tahoe ? ltr("cwnd = 1") + " (Tahoe חוזר ל-slow start)" : ltr(st.plus3 ? "cwnd = ssthresh + 3" : "cwnd = ssthresh") + " (Reno ממשיך ב-congestion avoidance)"}.</li>` +
        `<li>timeout: ${ltr("ssthresh = ⌊cwnd/2⌋")}, ואז ${ltr("cwnd = 1")} וחוזרים ל-slow start.</li></ul>`;
      if (evs.length) h += note(evs.map(x => `סבב ${ltr(x.r)}: ${x.event === "timeout" ? "timeout" : "שלושה ACK כפולים"} כש-${ltr(`cwnd = ${x.cwnd}`)}, ולכן ssthresh החדש הוא ${ltr(Math.max(Math.floor(x.cwnd / 2), 1))}`).join(". ") + ".");
      if (r.ignored.length) h += note(`אירועים אחרי הסבב האחרון לא נספרים: ${r.ignored.map(x => ltr(x)).join(", ")}.`);
      h += `<div class="calc-scroll"><table class="calc-tbl calc-tcp-t"><thead><tr><th>סבב</th><th>cwnd</th><th>ssthresh</th><th>שלב</th><th>אירוע</th></tr></thead><tbody>` +
        r.rounds.map(x => `<tr class="${x.event ? "ev" : ""}"><td>${x.r}</td><td>${x.cwnd}</td><td>${x.ssthresh}</td><td>${ltr(x.phase === "ss" ? "slow start" : "cong. avoid.")}</td><td>${x.event ? ltr(x.event === "timeout" ? "timeout" : "3 dup ACK") : ""}</td></tr>`).join("") +
        `</tbody></table></div>`;
      return h;
    },
  };

  /* ================================ mounting ================================ */
  function readForm(panel, st) {
    panel.querySelectorAll("[data-k]").forEach(el => {
      if (el.tagName === "BUTTON") return;
      const path = el.dataset.k.split("."), v = el.type === "checkbox" ? el.checked : el.value;
      let o = st;
      for (let i = 0; i < path.length - 1; i++) o = o[path[i]];
      o[path[path.length - 1]] = v;
    });
  }
  function mountPanel(host, kind, st, head) {
    const P = PANELS[kind];
    host.innerHTML = `<div class="calc-panel" data-kind="${kind}">${head || ""}<div class="calc-form">${P.form(st)}</div><div class="calc-out" aria-live="polite"></div></div>`;
    const panel = host.querySelector(".calc-panel");
    const out = panel.querySelector(".calc-out"), form = panel.querySelector(".calc-form");
    const render = () => { let h; try { h = P.out(st); } catch (e) { h = errBox("שגיאה בחישוב: " + e.message); } out.innerHTML = h; };
    const update = e => { if (!e.target.matches || !e.target.matches("[data-k]")) return; readForm(panel, st); st._step = null; render(); };
    panel.addEventListener("input", update);
    panel.addEventListener("change", update);
    panel.addEventListener("click", e => {
      const b = e.target.closest && e.target.closest("[data-act]");
      if (!b || !panel.contains(b)) return;
      readForm(panel, st);
      if (b.dataset.act === "set") { const k = b.dataset.k, v = b.dataset.v; st[k] = v === "true" ? true : v === "false" ? false : v; }
      const res = P.act ? P.act(b.dataset.act, b, st) : null;
      if (b.dataset.act === "set" || res === "form") form.innerHTML = P.form(st);
      render();
    });
    panel.addEventListener("keydown", e => e.stopPropagation());   // the app's arrow / number keys must not fire while typing
    render();
    panel._calc = { kind, st };
    return panel;
  }
  /* the full page: four calculators, each with its modes; values typed in one mode survive a tab switch */
  function page(host, spec) {
    let sp = {};
    try { sp = spec ? parseSpec(spec) : {}; } catch (e) { sp = {}; }
    const mem = host._calcMem = host._calcMem || {};
    const want = KINDS.includes(sp.kind) ? sp.kind : (host._calcKind || "subnet");
    if (KINDS.includes(sp.kind)) mem[want] = state(want, sp);
    host.innerHTML = `<div class="calc-page"><div class="calc-tabs" role="tablist" aria-label="מחשבונים">` +
      TABS.map(t => `<button type="button" role="tab" class="calc-tab" data-tab="${t.id}"><span class="ico" aria-hidden="true">${t.icon}</span><span>${t.label}</span></button>`).join("") +
      `</div><div class="calc-modes"></div><div class="calc-body"></div></div>`;
    const tabs = host.querySelector(".calc-tabs"), modes = host.querySelector(".calc-modes"), body = host.querySelector(".calc-body");
    host._tabMode = host._tabMode || {};
    function open(kind) {
      host._calcKind = kind;
      const tab = TABS.find(t => t.id === KIND_TAB[kind]);
      host._tabMode[tab.id] = kind;
      tabs.querySelectorAll(".calc-tab").forEach(b => { const on = b.dataset.tab === tab.id; b.classList.toggle("on", on); b.setAttribute("aria-selected", on); });
      modes.innerHTML = tab.modes.length > 1 ? `<div class="calc-seg" role="group" aria-label="מצב">` + tab.modes.map(([k, l]) =>
        `<button type="button" class="calc-seg-b${k === kind ? " on" : ""}" data-mode="${k}" aria-pressed="${k === kind}">${l}</button>`).join("") + `</div>` : "";
      mem[kind] = mem[kind] || state(kind, {});
      mountPanel(body, kind, mem[kind]);
      host.dataset.kind = kind;
    }
    tabs.onclick = e => { const b = e.target.closest(".calc-tab"); if (!b) return; const t = TABS.find(x => x.id === b.dataset.tab); open(host._tabMode[t.id] || t.modes[0][0]); };
    modes.onclick = e => { const b = e.target.closest("[data-mode]"); if (b) open(b.dataset.mode); };
    open(want);
    return host;
  }
  /* one embedded calculator (guided-course lessons, learn briefs) */
  function mount(el, spec) {
    let sp;
    try { sp = parseSpec(spec); } catch (e) { el.setAttribute("data-cm", "1"); el.innerHTML = `<div class="calc-err">לא ניתן לקרוא את המחשבון</div>`; return el; }
    if (!sp || !KINDS.includes(sp.kind)) { el.setAttribute("data-cm", "1"); el.innerHTML = `<div class="calc-err">סוג מחשבון לא מוכר</div>`; return el; }
    el.setAttribute("data-cm", "1");
    el.classList.add("calc-fig");
    const full = typeof window !== "undefined" && window.CC_APP && window.CC_APP.openCalc;
    const head = `<div class="calc-emb-h"><span class="calc-emb-t">🧮 מחשבון: ${TITLE[sp.kind]}</span>` +
      (full ? `<button type="button" class="btn ghost calc-emb-open">למחשבון המלא ⟵</button>` : "") + `</div>` +
      (sp.caption ? `<p class="calc-note">${esc(sp.caption)}</p>` : "");
    const panel = mountPanel(el, sp.kind, state(sp.kind, sp), head);
    const ob = panel.querySelector(".calc-emb-open");
    if (ob) ob.onclick = () => { const st = panel._calc.st, s = { kind: sp.kind }; for (const k of SPEC_KEYS[sp.kind]) s[k] = st[k]; window.CC_APP.openCalc(s); };
    return el;
  }
  const escAttr = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  function figure(spec) {
    const sp = typeof spec === "string" && KINDS.includes(spec) ? { kind: spec } : spec;
    return `<div class="calc-fig" data-calc="${escAttr(JSON.stringify(sp))}"></div>`;
  }
  function hydrate(el) {
    if (!el || !el.querySelectorAll) return 0;
    let n = 0;
    // learn briefs: a ```calc fence arrives as <pre><code class="language-calc">{...}</code></pre>
    const fences = [...el.querySelectorAll("pre > code.language-calc")];
    if (el.matches && el.matches("pre") && el.querySelector(":scope > code.language-calc")) fences.unshift(el.querySelector(":scope > code.language-calc"));
    for (const c of fences) {
      const pre = c.parentElement, d = pre.ownerDocument.createElement("div");
      d.className = "calc-fig"; d.setAttribute("data-calc", c.textContent.trim());
      pre.replaceWith(d); mount(d, d.getAttribute("data-calc")); n++;
    }
    const hosts = [...el.querySelectorAll(".calc-fig[data-calc]:not([data-cm])")];
    if (el.matches && el.matches(".calc-fig[data-calc]:not([data-cm])")) hosts.unshift(el);
    for (const h of hosts) { mount(h, h.getAttribute("data-calc")); n++; }
    return n;
  }
  if (typeof document !== "undefined" && typeof MutationObserver !== "undefined") {
    const start = () => {
      hydrate(document.body);
      new MutationObserver(ms => { for (const m of ms) for (const nd of m.addedNodes) if (nd.nodeType === 1) hydrate(nd); })
        .observe(document.body, { childList: true, subtree: true });
    };
    if (document.body) start(); else document.addEventListener("DOMContentLoaded", start);
  }

  const Calc = { subnet, lpm, delay, intensity, crc, crcCheck, parity2d, tcp, parseNum, parseCidr, parseEvents, polyBits,
    forQuestion, check, page, mount, figure, hydrate, state, compute, KINDS, TOPIC_KIND, TITLE, _: { fmt, fmtTime, parseTableLine } };
  root.Calc = Calc;
  if (typeof module !== "undefined" && module.exports) module.exports = Calc;
})(typeof window !== "undefined" ? window : globalThis);
