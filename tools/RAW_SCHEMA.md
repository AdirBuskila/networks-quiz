# Raw exam JSON — `tools/raw/<CODE>.json` (THE source of truth)

```jsonc
{
  "examCode": "26B-B",                 // YY[A|B|S]-[A|B|C] or SAMP-N
  "examLabel": "2026 סמסטר ב מועד ב",
  "year": 2026,
  "examDate": "8.7.2026",
  "sourceFile": "מבחנים/2026/…pdf",    // relative to the course folder
  "keyFile": "…",                      // where the answers came from
  "contexts": {                        // optional shared blocks; ids are local, build namespaces them <CODE>-<id>
    "tm1": { "kind": "image", "title": "…", "image": "images/exams/26B-B-tm1.png", "caption": "…" },
    "defs": { "kind": "text", "title": "…", "text": "rich text" }
  },
  "questions": [
    {
      "num": 1,
      "topic": "demo_a",   // a key from course.config.json "topics" (closed list)
      "question": "rich text",
      "contextId": "tm1",              // optional
      "image": "images/exams/26B-B-Q5.png", // optional per-question figure
      "options": [
        { "id": "a", "type": "text",  "value": "rich text" },   // ids a,b,c,d,e = printed א,ב,ג,ד,ה
        { "id": "b", "type": "math",  "value": "TeX without $" }, // whole option is one formula
        { "id": "c", "type": "image", "value": "images/exams/26B-B-Q7c.png" }
      ],
      "correctId": "c",
      "acceptedIds": ["c", "a"],       // only when >1 accepted (correctId first)
      "lockOrder": true,               // optional; build also auto-detects "א ו-ב" style refs
      "answerSource": "solution-pdf",  // solution-pdf | highlighted-pdf | corrected-key | letter-table | explanation-inferred | solved (derived + independently verified; official:false)
      "official": true,
      "confidence": "high",            // high | med | low
      "hold": "reason (optional)",     // held: unreadable/ambiguous/no trustworthy key; see "Held questions"
      "explanation": "rich text (Hebrew, from the key's proof box; may be empty)"
    }
  ]
}
```

## Multi-select questions ("סמנו את כל התשובות הנכונות")
A question that asks for **every** correct option carries `"multi": true` and `"answerIds"` (two or more option
ids) **instead of** `correctId` / `acceptedIds`:

```jsonc
{ "num": 5, "topic": "...", "question": "...", "options": [ {"id":"a",...}, {"id":"b",...}, {"id":"c",...}, {"id":"d",...} ],
  "multi": true, "answerIds": ["a", "c"],
  "answerSource": "solved", "official": false, "confidence": "high", "explanation": "..." }
```
- `validate.py` requires: `answerIds` is a list of >=2 distinct ids that all exist among the options, fewer than the
  number of options, and the item has no `correctId` or `acceptedIds`. `answerIds` without `"multi": true` is an error.
- Build copies `multi` / `answerIds` through to questions.json/js and derives `correctId = answerIds[0]` (so generic
  tooling still finds the field; the app never grades by it).
- The app shows checkboxes + a "בדיקה" button (practice) and grades correct only when the chosen set equals `answerIds`
  exactly; in exam mode the selection is stored per option id and graded on submit. Order of `answerIds` is irrelevant.
- Count it as one question everywhere. Grading lives in `grade.js` (`CCGrade.gradeMulti`).

## Held questions (`hold`)
A question you cannot transcribe or key honestly (unreadable text, no trustworthy key) gets `"hold": "<reason>"`
instead of an invented answer, plus an entry in `docs/ASK_ADIR.md`. A held question needs only `num`; `topic`,
`question`, `options`, `correctId`, `answerSource`, `official` and `confidence` may be missing (whatever text exists is
still checked for structure, math and `redact.txt`). `build_questions.py` leaves held questions out of the bank and
lists them (id + reason) in `build_report.md`.

## Rich text
- Inline math `$…$`, display math `$$…$$` — **TeX for KaTeX**, rendered to MathML at build time.
  **No Hebrew inside `$…$`** (split: `השפה $L$ ניתנת להכרעה`).
- `**bold**`, `` `code` `` (LTR), `\n` = line break. Literal `$` → `\$`.
- **Fenced code block** (multi-line code: C, MIPS, C++): a line that is exactly three backticks (optionally followed by a short language tag: `c`, `cpp`, `asm`) opens it and a line that is exactly three backticks closes it. The content is literal: HTML-escaped only, no `$` math, no `**`, no backtick parsing, indentation and blank lines preserved. It renders as an LTR, left-aligned `<pre class="code-block">` that scrolls sideways by itself. An unclosed fence fails `validate.py` and the build, naming the item id. Never write multi-line code as one `` `backtick span` `` per line.
- **Inline figure** (a plot or sketch inside a solution, explanation or brief): a line consisting only of `![alt text](images/exams/<file>.png)`. It renders as `<figure class="rt-fig"><img ...><figcaption>alt text</figcaption></figure>` (responsive, click to zoom). The file must exist under `images/exams/` (crop it with `tools/crop.py`); a missing file fails `validate.py`, the build and `course_lint.js`, naming the item id. The alt text is shown as the caption and goes through the `redact.txt` check. Any other use of `![` is an error.
- Roman-numeral claims (I / II) stay as plain text lines.

## Notation
Per-course TeX macro conventions (the exact symbols the exams print) belong in the course's own
extraction notes; keep them character-exact -- an overline or a subscript can flip an answer.

## Topics (closed list)
Defined once in `course.config.json` -> `"topics": [["key","label"], ...]`. `build_questions.py`,
`validate.py`, `smoke.js`, `verify_dom.js`, `build_learn.py` and `app.js` (via `meta.topics`) all
read it; there is nothing to keep in sync by hand.

## Derived at build (do NOT put in raw)
`id` (`<CODE>-Q<num>`), `examCode`, `examLabel`, `year`, `source` (exam|sample), `topicLabel`,
`dedupKey`, auto-`lockOrder`, namespaced `contextId`, and the `*Html` fields
(`questionHtml`, option `html`, `explanationHtml`, context `textHtml`) with MathML.


## Anonymization (`tools/redact.txt`)
Student solutions ship with **no author names**. Optional file `tools/redact.txt`: one name per line, `#` starts a
comment, blank lines ignored. List FULL names only: matching is a case-insensitive whole-word match (a name is not
matched inside a longer word, so a prefixed form such as ל+name needs its own line). `tools/validate.py` fails on any
listed name found (Unicode-NFC, Hebrew-safe) in **any** shipped text field -- exam fields (`examLabel`, `sourceFile`, `solutionFile` ...),
contexts, questions, options, solutions/explanations, rubric, pitfalls, steps. The message starts with the item id and
names the field (`DEMO-A-Q3: redact.txt entry #2 found in solution ...`); it does not echo the name. `tools/course_lint.js`
applies the same list to every string of every course level. The triager fills the file from folder/file names that look
like person names; keep it out of git (it is a list of the very names being hidden). The solution label in the UI is
"פתרון סטודנט"; the transcriber strips names, initials, student ids and handles from the text and from figure crops.

## Guided courses ("צריך עזרה?")
Per hard topic area (2-5 per app, chosen at the triage gate) a ladder of 6-10 levels, small to exam-sized. Each level
runs **lesson -> quiz -> summary**; levels are all open (soft unlock), a level is passed at **PASS = 80%** (constant in
`course-ui.js`; `course_lint.js` checks it), the first unpassed level is highlighted, progress lives in
`localStorage` under `<storePrefix>_course_<id>_v1` (every access in try/catch, in-memory fallback), separate from the
bank stats. The last level is the **boss** (`boss: true`): built from real exam questions and offering a jump to bank
practice on the course topic.

**Config** (`course.config.json`): `"needHelp": [{"id","titleHe","icon","topic","entryLabelHe","introHe?"}]`
(0-8 entries; `id` = the folder `courses/<id>/`, `[A-Za-z0-9_-]+`; `topic` from the closed topics list). An empty list
hides the header entry and the start-screen cards.

**Files**: `courses/<id>/<LEVEL>.js` (source, hand-written -- like `tools/raw`, they are the source of truth) ->
`tools/build_courses.py` (run at the end of `build_questions.py`) -> `courses.js` (`window.COURSES`, built, gitignored)
-> `course-ui.js` (screens). Deep links: `?course=<id>`, `?course=<id>&level=<LEVEL>`, `...&play=1`.

**Level file** -- plain data, one `COURSE_LEVEL` call per file (the file name is the level id):
```js
COURSE_LEVEL("DEMO", {
  id: "C01", order: 1, icon: "...", title: "short", goal: "one sentence: what you can do after this level",
  boss: false,                      // true only on the last level
  source: "ai-verified",            // ai-draft | ai-verified -- labels the authored content like steps are labelled
  lesson: { html: String.raw`<p>...</p>`, figs: [{ src: "images/...", alt: "", caption: "" }] },   // figs optional
  questions: [
    { id: "C01-Q1", question: "rich text", options: [{ id: "a", value: "..." }, { id: "b", value: "..." }],
      correctId: "b", explanation: "why right AND why each distractor is wrong", recap: "one-line rule" },
    { bankId: "24B-A-Q7", recap: "..." },          // a real exam question, rendered from the bank verbatim
    // (the open template also accepts { id, step: {...} } -- not this one)
  ],
});
```
- **Math**: pre-rendered at build time with the SAME KaTeX -> MathML path as the bank (`render_math.js`, `dir="ltr"` on
  every `<math>`), so lessons ship no math JS. In `lesson.html` write `$...$` / `$$...$$` TeX; in `question`, `option
  value`, `explanation`, `recap` use the bank's rich text (`$..$`, `` `code` ``, `**bold**`, `\n`). No Hebrew inside a
  math span (build fails). Literal dollar: `&#36;` in lesson html, `\$` in rich text.
- **Write lessons with the JS tag `String.raw`** (a template literal prefixed by `String.raw`): in a normal JS string `\frac`, `\times` and `\neq` turn into a form feed, a tab and a newline. `course_lint.js` reports such control characters.
- Lesson html: `<p> <h3> <ul>/<li> <table> <b> <code> <pre>` plus the boxes `<div class="lesson-rule">🔑 ...</div>`,
  `lesson-trap` (⚠️), `lesson-ex` (worked example), `lesson-formula`. Bidi: at runtime every Latin/number run inside
  Hebrew text is isolated LTR (ported from machine-learning-quiz c034e8f); MathML is left alone. Two formulas joined only
  by a comma form one run -- separate them with a Hebrew word.
- **Teach before you ask**: every concept a level's questions rely on is taught in that level's lesson or an earlier one.
  Original questions have no letter references ("תשובות א ו-ג") -- options are shuffled.
- Question ids are unique per course. A `bankId` question keeps the bank's own `lockOrder` and explanation. Never cite an exam id inside a question stem (the explanation may).
- `explanation` is required (it is what the student reads after a miss); `recap` is shown in the summary list for missed
  questions. `source: "ai-draft"` is a lint warning (an error with `--strict`); a course ships `ai-verified` only after
  the refuter passed it (`course_dump.js`).

**Tools** (all ASCII on stdout):
- `node tools/course_lint.js [--strict] [courseId]` -- level ids/orders unique, at most one boss and it is last, boss
  has `bankId` questions, every `bankId` exists in the built bank (`questions.json`), `correctId`/`acceptedIds` among the
  options, explanations present, no Hebrew in math, no redacted name, no eaten TeX backslash, PASS sane. Exits 1 on
  errors; every message starts with `[<course>/<level>]`.
- `node tools/course_dump.js <courseId>` -> `tools/raw/_blind_course_<id>.json`: the questions with **no answers** (no
  `correctId`, explanation, recap or lesson) for the blind refuter. `--claims` writes the key
  (`_claims_course_<id>.json`); `--compare` checks the refuter's `_verify_course_<id>.json`
  (`{"answers": {"<question id>": {"answer": ...}}}`) against it and exits 1 on any disagreement.
- `py tools/build_courses.py` -- rebuild only `courses.js`.

## Calculators (networks extra; `calc.js`)
Four built-in calculators, app-local: **subnet/CIDR** (`subnet`, and `lpm` = longest prefix match over a pasted
forwarding table), **delay** (`delay` = L/R + d/s over N store-and-forward links, P packets back to back; `intensity` =
La/R and the arrival rate for a target rho), **CRC / 2D parity** (`crc` = long division step by step, sender or receiver;
`parity` = even/odd 2D parity, error location or the check bits) and the **TCP cwnd timeline** (`tcp` = slow start,
congestion avoidance, ssthresh, 3 dup ACKs vs timeout, Reno / Tahoe, a step chart per RTT round).

- **Where they show:** a calculator page (`#screen-calc`), reached from the start-screen card, the toolbar button and
  `?calc=<kind>`. Every bank question whose topic is `delays`, `ip_cidr`, `link_layer` or `tcp` shows **"נסו במחשבון"**
  after it is answered, in practice mode and in the guided courses (an own course question takes the course's `topic`).
  The button opens the matching calculator prefilled from the question text (`Calc.forQuestion`: CIDR / routing table +
  destination, `G=`/`D=` or a parity block, L / rates / distance / speed / arrival rate). Nothing is added to the raw JSON.
- **A calculator spec** is `{"kind": "<kind>", ...prefill}`; every key is optional (a missing one takes the default):

  | kind | keys |
  |---|---|
  | `subnet` | `cidr` (`"200.107.16.17/18"`, `"223.1.2/24"`, `"10.0.0.1 255.255.0.0"`) |
  | `lpm` | `table` (one entry per line, or a list: `"A: 25.36.64.0/16"`, `"11001000 00010111 00010 → 0"`, `"default → 3"`), `addr` |
  | `delay` | `L`, `Lunit` (bit/byte/Kbit/KB/Mbit/MB), `s` (m/s; `"2e8"`), `packets`, `links: [{R, Runit (bps/Kbps/Mbps/Gbps), d, dunit (m/km), n}]` |
  | `intensity` | `a`, `aunit` (s/min/hour), `L`, `Lunit`, `R`, `Runit`, `rho` (target, optional) |
  | `crc` | `mode` (send/recv), `D`, `G` (bits or a polynomial `"x^3+1"`), `W` (received word) |
  | `parity` | `rows` (lines of bits, spaces ignored), `parity` (even/odd), `hasCheck` (true: received block incl. check row+column) |
  | `tcp` | `rounds`, `init`, `ssthresh`, `variant` (reno/tahoe), `events` (`"8:3dup, 14:timeout"`), `cap` (slow start stops at ssthresh, default true), `plus3` (Reno cwnd = ssthresh+3) |

  plus `caption` (a line shown above an embedded calculator). K = 1000 and 1 byte = 8 bits; loss sets ssthresh =
  max(floor(cwnd/2), 1).
- **Embedding (guided courses and learn briefs)**, the same pattern as the graph visualizer: in a lesson's `html` write
  `<div class="calc-fig" data-calc='{"kind": "delay", "L": 1500, "Lunit": "byte"}'></div>` (or `data-calc="tcp"`); in a
  brief (`docs/briefs/*.md`) a fenced block with the language `calc` and the spec as its body:

  ```calc
  {"kind": "crc", "D": "10011100", "G": "1001", "caption": "25A-B Q8"}
  ```

  calc.js mounts both at run time (a MutationObserver: `.calc-fig[data-calc]` and the fence's `pre > code.language-calc`),
  so no build step changes; the embedded calculator is live and has a "למחשבון המלא" button.
- **Checks:** `node tools/test_calc.js` runs `py tools/verify/calc/ref.py` (a Python reference using the same formulas as
  the keys' `tools/verify/*/check.py` / `refute_calc.py`: `ipaddress`, sum of L/R + d/s, the CRC XOR loop, row/column
  sums, the cwnd rules) and compares every calc.js output on 269 seeded cases, including the real exam cases 25A-C Q3
  (15.65 ms), 25A-B Q7, 25A-A Q2, 25A-B Q8 (CRC 101), 25A-B Q10 (/24 = 256), 23A-A Q16, 25A-B Q15 / 25A-A Q6 (LPM),
  25A-A Q3 (2D parity), SAMP-2 Q1/Q2 and 24A-B Q6 (La/R). It also runs `forQuestion` on every calculator-topic bank
  question, and runs `Calc.check` on every `calc` fence in `docs/briefs` and every `data-calc` in `courses/` (a bad spec
  fails the test). `py tools/verify/calc/ref.py` rewrites `tools/verify/calc/vectors.json` (the fallback when no Python).
