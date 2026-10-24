/**
 * Structured presentation renderers (Task 59R).
 *
 * A structured slide keeps its teaching content in one validated `visual` object instead of
 * generic `blocks`. Presentation components render it as a designed 16:9 composition; reading
 * mode, renderer failure and thumbnails use the semantic blocks derived here, so there is a
 * single source of academic text. This module is pure data (no DOM) so the public loader,
 * Node tools and tests validate exactly what the browser renders.
 *
 * Text budgets are layout capacity limits measured against the 16:9 canvas in EN+TH mode.
 * They exist to stop overflow at authoring time instead of hiding it with tiny type.
 * If content does not fit a budget, simplify it or split the slide — do not raise the limit
 * without re-checking the layout in all three language modes.
 */
export const TONES = Object.freeze(['blue', 'green', 'amber', 'violet', 'red', 'slate']);
const tones = new Set(TONES);
const slug = v => typeof v === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v) && v.length < 60;
const str = v => typeof v === 'string' && v.trim().length > 0;
const obj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const list = v => (Array.isArray(v) ? v : []);
const symbol = v => typeof v === 'string' && /^[\p{L}\p{N}]{1,3}$/u.test(v);

/** [English, Thai] maximum characters (UTF-16 code units; Thai budgets allow for combining marks). */
export const BUDGETS = Object.freeze({
  term: [32, 40], question: [48, 60], summary: [90, 110], takeaway: [120, 150],
  lead: [110, 140], caseTitle: [60, 80], note: [70, 90], stageLabel: [28, 40], event: [110, 130], impact: [110, 130],
  scenario: [320, 400], prompt: [120, 150], verdict: [28, 40], reason: [140, 160]
});

function report() { return { structure: [], content: [] }; }
function pairCheck(r, value, path, budget, { optional = false } = {}) {
  if (value === undefined && optional) return;
  if (!obj(value)) { r.structure.push(`${path} must be an {en, th} pair`); return; }
  const [enMax, thMax] = BUDGETS[budget];
  for (const [lang, max] of [['en', enMax], ['th', thMax]]) {
    if (!str(value[lang])) r.content.push(`${path}.${lang} is missing`);
    else if (value[lang].length > max) r.content.push(`${path}.${lang} exceeds its ${max}-character presentation budget (${value[lang].length})`);
  }
}
function itemsCheck(r, items, path, min, max) {
  if (!Array.isArray(items) || items.length < min || items.length > max) { r.structure.push(`${path} needs ${min}–${max} items`); return []; }
  const keys = new Set();
  return items.filter((item, index) => {
    if (!obj(item)) { r.structure.push(`${path}[${index}] must be an object`); return false; }
    if (!slug(item.key) || keys.has(item.key)) r.structure.push(`${path}[${index}].key must be a unique slug`);
    if (!tones.has(item.tone)) r.structure.push(`${path}[${index}].tone must be one of ${TONES.join(', ')}`);
    keys.add(item.key); return true;
  });
}

function validatePillars(v, r) {
  for (const [i, p] of itemsCheck(r, v.pillars, 'visual.pillars', 2, 4).entries()) {
    if (!symbol(p.symbol)) r.structure.push(`visual.pillars[${i}].symbol must be 1–3 letters/digits`);
    pairCheck(r, p.term, `visual.pillars[${i}].term`, 'term');
    pairCheck(r, p.question, `visual.pillars[${i}].question`, 'question');
    pairCheck(r, p.summary, `visual.pillars[${i}].summary`, 'summary');
  }
  pairCheck(r, v.takeaway, 'visual.takeaway', 'takeaway', { optional: true });
}
function pillarsBlocks(v) {
  const blocks = [{ kind: 'list', items: list(v.pillars).map(p => ({
    en: `${p.term?.en} — ${p.question?.en} ${p.summary?.en}`,
    th: `${p.term?.en} (${p.term?.th}) — ${p.question?.th} ${p.summary?.th}`
  })) }];
  if (v.takeaway) blocks.push({ kind: 'text', text: v.takeaway });
  return blocks;
}

function validateIncidentFlow(v, r) {
  pairCheck(r, v.lead, 'visual.lead', 'lead');
  pairCheck(r, v.caseTitle, 'visual.caseTitle', 'caseTitle');
  pairCheck(r, v.note, 'visual.note', 'note', { optional: true });
  pairCheck(r, v.takeaway, 'visual.takeaway', 'takeaway');
  for (const [i, s] of itemsCheck(r, v.stages, 'visual.stages', 2, 5).entries()) {
    if (!symbol(s.symbol)) r.structure.push(`visual.stages[${i}].symbol must be 1–3 letters/digits`);
    pairCheck(r, s.label, `visual.stages[${i}].label`, 'stageLabel');
    pairCheck(r, s.event, `visual.stages[${i}].event`, 'event');
    pairCheck(r, s.pillar, `visual.stages[${i}].pillar`, 'term');
    pairCheck(r, s.impact, `visual.stages[${i}].impact`, 'impact');
  }
}
function incidentBlocks(v) {
  const blocks = [];
  if (v.lead) blocks.push({ kind: 'text', text: v.lead });
  if (v.caseTitle) blocks.push({ kind: 'text', text: v.caseTitle });
  blocks.push({ kind: 'list', items: list(v.stages).map((s, i) => ({
    en: `${i + 1}. ${s.label?.en}: ${s.event?.en} Impact on ${s.pillar?.en}: ${s.impact?.en}`,
    th: `${i + 1}. ${s.label?.th}: ${s.event?.th} ผลกระทบต่อ ${s.pillar?.en} (${s.pillar?.th}): ${s.impact?.th}`
  })) });
  if (v.note) blocks.push({ kind: 'text', text: v.note });
  if (v.takeaway) blocks.push({ kind: 'text', text: v.takeaway });
  return blocks;
}

function validateScenario(v, r) {
  pairCheck(r, v.scenario, 'visual.scenario', 'scenario');
  pairCheck(r, v.prompt, 'visual.prompt', 'prompt');
  const options = itemsCheck(r, v.options, 'visual.options', 2, 4);
  for (const [i, o] of options.entries()) {
    if (!symbol(o.symbol)) r.structure.push(`visual.options[${i}].symbol must be 1–3 letters/digits`);
    if (typeof o.correct !== 'boolean') r.structure.push(`visual.options[${i}].correct must be true or false`);
    pairCheck(r, o.label, `visual.options[${i}].label`, 'term');
    pairCheck(r, o.verdict, `visual.options[${i}].verdict`, 'verdict');
    pairCheck(r, o.reason, `visual.options[${i}].reason`, 'reason');
  }
  if (options.length && options.filter(o => o.correct === true).length !== 1) r.structure.push('visual.options needs exactly one correct option');
}
function scenarioBlocks(v) {
  const options = list(v.options);
  return [
    { kind: 'text', text: v.scenario }, { kind: 'text', text: v.prompt },
    { kind: 'reveal', label: { en: 'Show analysis', th: 'ดูการวิเคราะห์' }, text: {
      en: options.map(o => `${o.correct ? '✓' : '•'} ${o.label?.en} — ${o.verdict?.en}: ${o.reason?.en}`).join('\n'),
      th: options.map(o => `${o.correct ? '✓' : '•'} ${o.label?.en} (${o.label?.th}) — ${o.verdict?.th}: ${o.reason?.th}`).join('\n')
    } }
  ];
}

export const STRUCTURED_RENDERERS = Object.freeze({
  pillars: { validate: validatePillars, toBlocks: pillarsBlocks },
  'incident-flow': { validate: validateIncidentFlow, toBlocks: incidentBlocks },
  'scenario-decision': { validate: validateScenario, toBlocks: scenarioBlocks }
});
export function isStructuredRenderer(id) { return typeof id === 'string' && Object.hasOwn(STRUCTURED_RENDERERS, id); }
/** Structure problems are always errors; content problems (missing language, over budget) block publication. */
export function validateVisual(slide) {
  const r = report();
  if (!isStructuredRenderer(slide?.rendererId)) { r.structure.push('Not a structured renderer'); return r; }
  if (!obj(slide.visual)) { r.structure.push('Structured slide requires a visual object'); return r; }
  STRUCTURED_RENDERERS[slide.rendererId].validate(slide.visual, r);
  return r;
}
/** Semantic content used by reading mode, renderer failure and generic thumbnails. */
export function semanticBlocks(slide) {
  if (Array.isArray(slide?.blocks) && slide.blocks.length) return slide.blocks;
  if (isStructuredRenderer(slide?.rendererId) && obj(slide.visual)) {
    try { return STRUCTURED_RENDERERS[slide.rendererId].toBlocks(slide.visual); } catch { return []; }
  }
  return [];
}
