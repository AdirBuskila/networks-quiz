/* Pure grading helpers for multi-select MCQ items ("mark every correct answer").
   Answers are always option ids, never display positions, so the runtime option shuffle is irrelevant.
   Loaded before app.js in the browser (window.CCGrade) and by node tests (module.exports). */
(function (root) {
  function isMulti(q) { return !!(q && q.multi === true && Array.isArray(q.answerIds)); }
  function uniq(a) { return Array.from(new Set(a || [])); }
  /* correct only when the chosen set equals answerIds exactly (order and duplicates ignored) */
  function gradeMulti(chosen, answerIds) {
    const c = uniq(chosen), a = uniq(answerIds);
    return a.length > 0 && c.length === a.length && c.every(id => a.includes(id));
  }
  /* per-option verdict after checking: correct (right and chosen), missed (right, not chosen),
     wrong (chosen, not right), none (neither) */
  function optionStates(optionIds, chosen, answerIds) {
    const c = new Set(chosen || []), a = new Set(answerIds || []), out = {};
    for (const id of optionIds) out[id] = a.has(id) ? (c.has(id) ? "correct" : "missed") : (c.has(id) ? "wrong" : "none");
    return out;
  }
  /* one entry point for every mode: chosen is an option id (single) or an array of ids (multi) */
  function gradeAnswer(q, chosen, singleAccepted) {
    if (isMulti(q)) return gradeMulti(Array.isArray(chosen) ? chosen : [], q.answerIds);
    const acc = singleAccepted || ((Array.isArray(q.acceptedIds) && q.acceptedIds.length) ? q.acceptedIds : [q.correctId]);
    return chosen != null && !Array.isArray(chosen) && acc.includes(chosen);
  }
  const api = { isMulti, gradeMulti, optionStates, gradeAnswer };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.CCGrade = api;
})(typeof window !== "undefined" ? window : globalThis);
