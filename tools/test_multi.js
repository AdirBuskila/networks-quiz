// Multi-select MCQ tests:  node tools/test_multi.js
//  1. grade.js unit tests (exact set / subset / superset / shuffled order / duplicates / empty)
//  2. headless UI (jsdom) with a SYNTHETIC multi item injected into the bank (the shipped bank may have none):
//     practice (exact, subset, superset), shuffle-by-id mapping, stats count one question, exam mode
//     (selection survives back/next, graded as a set on submit).
const fs = require("fs"), path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");
const G = require("../grade.js");
const ROOT = path.join(__dirname, "..");

let fail = 0, n = 0;
function assert(c, m) { n++; if (!c) { fail++; console.log("FAIL  " + m); } }

// ---------- 1. grading function ----------
const A = ["a", "c"];
assert(G.gradeMulti(["a", "c"], A), "exact set is correct");
assert(G.gradeMulti(["c", "a"], A), "shuffled order is correct");
assert(G.gradeMulti(["c", "a", "c"], A), "duplicate ids are ignored");
assert(!G.gradeMulti(["a"], A), "subset is wrong");
assert(!G.gradeMulti(["a", "c", "b"], A), "superset is wrong");
assert(!G.gradeMulti(["a", "b"], A), "same size, one wrong is wrong");
assert(!G.gradeMulti([], A), "empty is wrong");
assert(!G.gradeMulti(["a", "c"], []), "empty answer key never matches");
const st = G.optionStates(["a", "b", "c", "d"], ["a", "b"], A);
assert(st.a === "correct" && st.b === "wrong" && st.c === "missed" && st.d === "none", "optionStates correct/wrong/missed/none");
const mq = { multi: true, answerIds: A, correctId: "a" };
assert(G.gradeAnswer(mq, ["c", "a"]) && !G.gradeAnswer(mq, "a") && !G.gradeAnswer(mq, null), "gradeAnswer(multi) takes id arrays only");
const sq = { correctId: "b", acceptedIds: ["b", "d"] };
assert(G.gradeAnswer(sq, "d") && !G.gradeAnswer(sq, "a") && !G.gradeAnswer(sq, ["b"]), "gradeAnswer(single) unchanged");
// shuffle invariance: grading is by id, so any display order gives the same verdict
for (let t = 0; t < 200; t++) {
  const ids = ["a", "b", "c", "d"].sort(() => Math.random() - 0.5);
  const picked = ids.filter(id => A.includes(id));
  assert(G.gradeMulti(picked, A), "any display order of the right ids is correct");
}

// ---------- 2. headless UI ----------
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, "course.config.json"), "utf8"));
const topic = CFG.topics[0][0];
const opt = (id, v) => ({ id, type: "text", value: v, html: v });
const base = { examCode: "TEST", examLabel: "TEST exam", year: 2099, source: "exam", topic, topicLabel: "t", official: true, confidence: "high", explanation: "", explanationHtml: "" };
const MULTI = Object.assign({}, base, { id: "TEST-Q1", num: 1, question: "pick all", questionHtml: "pick all", multi: true, answerIds: ["a", "c"], correctId: "a", dedupKey: "m1",
  options: [opt("a", "alpha"), opt("b", "bravo"), opt("c", "charlie"), opt("d", "delta")] });
const SINGLE = Object.assign({}, base, { id: "TEST-Q2", num: 2, question: "pick one", questionHtml: "pick one", correctId: "b", dedupKey: "s1",
  options: [opt("a", "x1"), opt("b", "x2"), opt("c", "x3")] });

function boot() {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => errors.push("jsdomError: " + (e.message || e)));
  vc.on("error", (...a) => errors.push("console.error: " + a.join(" ")));
  const dom = new JSDOM(fs.readFileSync(path.join(ROOT, "index.html"), "utf8"), { pretendToBeVisual: true, runScripts: "outside-only", url: "http://localhost/index.html", virtualConsole: vc });
  const w = dom.window;
  w.scrollTo = () => {}; w.confirm = () => true; w.HTMLElement.prototype.scrollIntoView = () => {};
  w.matchMedia = w.matchMedia || (q => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }));
  w.addEventListener("error", e => errors.push("window.onerror: " + e.message));
  const scripts = [...w.document.querySelectorAll("script[src]")].map(s => s.getAttribute("src")).filter(s => !/^(https?:)?\/\//.test(s)).map(s => s.split("?")[0]);
  for (const f of scripts) {
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    w.eval(fs.readFileSync(path.join(ROOT, f), "utf8"));
    if (f === "questions.js") { w.CC_QUIZ.questions = [JSON.parse(JSON.stringify(MULTI)), JSON.parse(JSON.stringify(SINGLE))]; w.CC_QUIZ.contexts = {}; }
  }
  return { w, doc: w.document, errors };
}
const mk = ({ w, doc }) => ({
  $: s => doc.querySelector(s), $$: s => [...doc.querySelectorAll(s)],
  setMode(m) { const r = doc.querySelector(`input[name=mode][value="${m}"]`); r.checked = true; r.dispatchEvent(new w.Event("change", { bubbles: true })); },
  hidden: el => el.classList.contains("hidden"),
});

// practice: walk until the multi item is on screen, then apply a scenario
function practiceScenario(pickIds, expectOk) {
  const B = boot(), U = mk(B), { $, $$ } = U;
  B.w.localStorage.clear();
  $("#startBtn").click();
  for (let i = 0; i < 3 && $("#questionText").dataset.qid !== "TEST-Q1"; i++) {
    const o = $$("#optionsList .opt")[0]; o.click(); $("#nextBtn").click();
  }
  const tag = `practice ${pickIds.join("")}`;
  assert($("#questionText").dataset.qid === "TEST-Q1", `${tag}: multi item shown`);
  assert($$("#optionsList input[type=checkbox]").length === 4 && $$("#optionsList input[type=radio]").length === 0, `${tag}: 4 checkboxes, no radios`);
  assert($(".multi-hint") && $(".multi-hint").textContent === "ייתכנו כמה תשובות נכונות — סמנו את כולן", `${tag}: hint text`);
  assert($("#multiCheck") && $("#multiCheck").textContent === "בדיקה" && $("#multiCheck").disabled, `${tag}: check button starts disabled`);
  // each label's id must match its text (mapping by id, not position)
  const text = { a: "alpha", b: "bravo", c: "charlie", d: "delta" };
  assert($$("#optionsList .opt-multi").every(l => l.querySelector(".txt").textContent.trim() === text[l.dataset.oid]), `${tag}: label text matches option id after shuffle`);
  const stats = () => { const k = Object.keys(B.w.localStorage).find(k => /progress/.test(k)); return k ? JSON.parse(B.w.localStorage.getItem(k)).stats : { answered: 0, correct: 0 }; };
  const before = stats();
  pickIds.forEach(id => $$("#optionsList .opt-multi").find(l => l.dataset.oid === id).querySelector("input").click());
  assert(!$("#multiCheck").disabled, `${tag}: check enabled after a pick`);
  $("#multiCheck").click();
  assert(!$("#feedback").classList.contains("hidden"), `${tag}: feedback shown`);
  assert(/✓/.test($("#feedback .verdict").textContent) === expectOk, `${tag}: verdict ${expectOk ? "correct" : "wrong"}`);
  const cls = id => $$("#optionsList .opt-multi").find(l => l.dataset.oid === id).classList;
  ["a", "b", "c", "d"].forEach(id => {
    const right = ["a", "c"].includes(id), mine = pickIds.includes(id);
    assert(cls(id).contains("correct") === (right && mine), `${tag}: ${id} correct-mark`);
    assert(cls(id).contains("missed") === (right && !mine), `${tag}: ${id} missed-mark`);
    assert(cls(id).contains("wrong") === (!right && mine), `${tag}: ${id} wrong-mark`);
  });
  assert($$("#optionsList input").every(i => i.disabled), `${tag}: locked after check`);
  const prog = JSON.parse(B.w.localStorage.getItem(Object.keys(B.w.localStorage).find(k => /progress/.test(k))));
  assert(prog.stats.answered === before.answered + 1 && prog.stats.correct === before.correct + (expectOk ? 1 : 0), `${tag}: stats count one question (${prog.stats.answered}/${prog.stats.correct})`);
  assert(prog.perQ["TEST-Q1"] && prog.perQ["TEST-Q1"].correct === expectOk, `${tag}: perQ recorded for mistakes review`);
  // back navigation replays it as answered, same marks
  $("#nextBtn").click(); $("#prevBtn").click();
  assert(cls("a").contains("correct") === (pickIds.includes("a")) && $$("#optionsList input").every(i => i.disabled), `${tag}: back replays answered state`);
  assert(B.errors.length === 0, `${tag}: no JS errors ${B.errors.join("|")}`);
}
for (let i = 0; i < 6; i++) {            // repeat: the option order is random each time
  practiceScenario(["c", "a"], true);
  practiceScenario(["a"], false);        // subset
  practiceScenario(["a", "c", "d"], false);  // superset
  practiceScenario(["b", "d"], false);   // disjoint
}

// mistakes-only review shows the failed multi item
{
  const B = boot(), U = mk(B), { $, $$ } = U;
  B.w.localStorage.clear();
  B.w.localStorage.setItem("x", "1");
  $("#startBtn").click();
  for (let i = 0; i < 3 && $("#questionText").dataset.qid !== "TEST-Q1"; i++) { $$("#optionsList .opt")[0].click(); $("#nextBtn").click(); }
  $$("#optionsList .opt-multi")[0].querySelector("input").click();
  if ($$("#optionsList .opt-multi")[0].dataset.oid !== "a") { /* whatever it is, one pick is never the full set */ }
  $("#multiCheck").click();
  $("#quitBtn").click();
  $("#mistakesOnly").checked = true; $("#mistakesOnly").dispatchEvent(new B.w.Event("change"));
  assert(/נבחרו 1 שאלות/.test($("#poolInfo").textContent), "mistakes-only pool contains the failed multi item: " + $("#poolInfo").textContent);
  $("#startBtn").click();
  assert($("#questionText").dataset.qid === "TEST-Q1" && $$("#optionsList input[type=checkbox]").length === 4, "mistakes review renders the multi item with checkboxes");
}

// exam simulation
function examScenario(pickIds, expectOk) {
  const B = boot(), U = mk(B), { $, $$ } = U;
  B.w.localStorage.clear();
  U.setMode("exam");
  $("#examPick").value = "TEST"; $("#examPick").dispatchEvent(new B.w.Event("change"));
  $("#startBtn").click();
  const tag = `exam ${pickIds.join("")}`;
  assert($("#questionText").dataset.qid === "TEST-Q1", `${tag}: first question is the multi item`);
  assert(!$("#multiCheck") && $(".multi-hint"), `${tag}: hint but no check button in exam`);
  pickIds.forEach(id => $$("#optionsList .opt-multi").find(l => l.dataset.oid === id).querySelector("input").click());
  assert(/נענו 1\/2/.test($("#streakBox").textContent), `${tag}: counts as one answered`);
  const order = $$("#optionsList .opt-multi").map(l => l.dataset.oid).join();
  $("#nextBtn").click();
  $$("#optionsList .opt").find(b => b.dataset.oid === "b").click();   // single question: correct is b
  $("#prevBtn").click();
  assert($$("#optionsList .opt-multi").map(l => l.dataset.oid).join() === order, `${tag}: shuffle stable on back`);
  assert($$("#optionsList .opt-cb").filter(i => i.checked).map(i => i.value).sort().join() === pickIds.slice().sort().join(), `${tag}: selection restored on back`);
  $("#nextBtn").click();
  $("#submitExamBtn").click();
  assert(!$("#screen-results").classList.contains("hidden"), `${tag}: results shown`);
  const rev = $$("#resultsReview .rev");
  assert(rev.length === 2 && rev[0].classList.contains("ok") === expectOk && rev[1].classList.contains("ok"), `${tag}: review verdicts (multi ${expectOk})`);
  assert($("#resultsSummary").textContent.includes(`${expectOk ? 2 : 1} / 2`), `${tag}: score counts multi as one question: ${$("#resultsSummary").textContent.replace(/\s+/g, " ")}`);
  assert(B.errors.length === 0, `${tag}: no JS errors ${B.errors.join("|")}`);
}
for (let i = 0; i < 4; i++) { examScenario(["a", "c"], true); examScenario(["a"], false); examScenario(["a", "b", "c"], false); }

console.log(`${n} checks, ${fail} failed`);
console.log(fail ? "MULTI TEST FAILED" : "MULTI TEST PASSED");
process.exit(fail ? 1 : 0);
