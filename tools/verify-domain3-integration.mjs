/** Node-only checks. --staging validates drafts before integration; --duplicates prints overlap candidates.
 * Automated structure/similarity checks do not establish academic correctness or human approval.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { drafts, stagedQuestions, acceptedQuestions, reviewStatus } from '../content/isc2-cc-2026/questions/domain-3-draft.mjs';
import * as loader from '../js/core/question-loader.js';
import * as engine from '../js/core/quiz-engine.js';
import * as appState from '../js/core/state.js';
import * as storage from '../js/core/storage.js';
import { renderExplanation2026Content, escapeHtml } from '../js/ui/components/explanation-2026.js';
import { renderCertStartScreen } from '../js/ui/screen-start.js';
import { getExamVersions } from '../data/exam-versions.js';
import certifications from '../data/certifications.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const stagingOnly = process.argv.includes('--staging');
const letters = ['A', 'B', 'C', 'D'];
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const knowledgeText = read('ISC2 Update 2026/Domain 3/domain-3-knowledge-map.md');
const sourceRefs = new Set([...knowledgeText.matchAll(/^\[(R\d+)\]:/gm)].map(m => m[1]));
const knowledge = new Map([...knowledgeText.matchAll(/^### KNOW-D3-(\d+) - ([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)]
  .map(m => [Number(m[1]), /\*\*Academic status:\*\* (ACCEPTED|CORRECTED)\./.test(m[2])]));
const prodKeys = ['id', 'dom', 'question', 'options', 'correct_idx', 'explanation', 'short_explanation_en', 'question_th', 'options_th', 'explanation_th', 'explanation_detail'].sort();
const normalize = s => s.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const filled = s => typeof s === 'string' && s.trim().length > 0 && !/[\uFFFD]/u.test(s);
const thai = s => filled(s) && /[\u0e00-\u0e7f]/u.test(s);

function validateQuestion(q, draft) {
  assert.deepEqual(Object.keys(q).sort(), prodKeys, `Q${q.id}: production schema`);
  assert.ok(Number.isInteger(q.id) && q.dom === 3);
  assert.ok(Number.isInteger(q.correct_idx) && q.correct_idx >= 0 && q.correct_idx < 4);
  assert.equal(q.options.length, 4);
  assert.equal(q.options_th.length, 4);
  assert.equal(new Set(q.options.map(normalize)).size, 4, `Q${q.id}: duplicate EN option`);
  assert.equal(new Set(q.options_th.map(normalize)).size, 4, `Q${q.id}: duplicate TH option`);
  assert.ok([q.question, q.explanation, q.short_explanation_en, ...q.options].every(filled));
  assert.ok([q.question_th, q.explanation_th, ...q.options_th].every(thai));
  assert.ok(q.question.length > 40 && q.question_th.length > 40);
  assert.ok(q.explanation.startsWith(`Option ${letters[q.correct_idx]} is correct.`));
  assert.ok(q.explanation_th.startsWith(`ข้อ ${letters[q.correct_idx]} ถูกต้อง:`));
  const detail = q.explanation_detail;
  assert.ok(filled(detail.correct.en) && thai(detail.correct.th));
  assert.equal(detail.correct.en, draft.choices[draft.correct][2]);
  assert.equal(detail.correct.th, draft.choices[draft.correct][3]);
  assert.deepEqual(detail.incorrect.map(x => x.letter).sort(), letters.filter((_, i) => i !== q.correct_idx));
  for (const wrong of detail.incorrect) {
    const index = letters.indexOf(wrong.letter);
    assert.ok(filled(wrong.text_en) && thai(wrong.text_th));
    assert.equal(wrong.text_en, draft.choices[index][2]);
    assert.equal(wrong.text_th, draft.choices[index][3]);
    assert.ok(q.explanation.includes(`Option ${wrong.letter} is incorrect: ${wrong.text_en}`));
    assert.ok(q.explanation_th.includes(`ข้อ ${wrong.letter} ไม่ถูกต้อง: ${wrong.text_th}`));
  }
  if (/\bFIRST\b/.test(q.question)) assert.match(q.question_th, /อันดับแรก/);
  if (/\bBEST\b/.test(q.question)) assert.match(q.question_th, /ที่สุด/);
  if (/\bMOST\b/.test(q.question)) assert.match(q.question_th, /ที่สุด/);
  assert.ok(['3.1', '3.2'].includes(draft.objective));
  assert.ok(draft.knowledge.length && draft.knowledge.every(id => knowledge.get(id) === true), `Q${q.id}: usable knowledge`);
  assert.ok(draft.sources.length && draft.sources.every(id => sourceRefs.has(id)), `Q${q.id}: source references`);
  assert.ok(filled(draft.concept) && filled(draft.decision));
  for (const language of ['en', 'th', 'both']) {
    const html = renderExplanation2026Content(q, language);
    assert.ok(html.includes(`Correct Answer: Option ${letters[q.correct_idx]}`));
    assert.ok(html.includes('exp-correct-section') && html.includes('exp-incorrect-section'));
    if (language !== 'th') assert.ok(html.includes(escapeHtml(detail.correct.en)));
    if (language !== 'en') assert.ok(html.includes(escapeHtml(detail.correct.th)));
    for (const incorrect of detail.incorrect) {
      if (language !== 'th') assert.ok(html.includes(escapeHtml(incorrect.text_en)));
      if (language !== 'en') assert.ok(html.includes(escapeHtml(incorrect.text_th)));
    }
  }
}

const legacy = await loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: '2026', domainIds: [1, 2, 3, 4, 5] });
const existing = [];
for (const domain of [1, 2, 4, 5]) existing.push(...(await import(new URL(`../data/certs/isc2/cc/versions/next-bank/questions/domain-${domain}.js`, import.meta.url))).default);
assert.ok(stagedQuestions.length > 0, 'Domain 3 must contain reviewed questions before integration can pass');
assert.equal(knowledge.size, 25);
assert.equal(new Set(drafts.map(d => d.id)).size, drafts.length);
const eligible = drafts.filter(d => d.status !== 'REJECTED');
stagedQuestions.forEach((q, i) => validateQuestion(q, eligible[i]));
assert.equal(Math.min(...stagedQuestions.map(q => q.id)), 647, 'Verified starting allocation');
for (let i = 1; i < stagedQuestions.length; i++) assert.equal(stagedQuestions[i].id, stagedQuestions[i - 1].id + 1);
const all = [...Object.values(legacy).flat(), ...existing, ...stagedQuestions];
assert.equal(new Set(all.map(q => q.id)).size, all.length, 'IDs unique across protected and new banks');
for (const q of stagedQuestions) {
  const other = all.filter(x => x !== q);
  assert.ok(!other.some(x => normalize(x.question) === normalize(q.question)), `Q${q.id}: exact EN duplicate`);
  assert.ok(!other.some(x => normalize(x.question_th) === normalize(q.question_th)), `Q${q.id}: exact TH duplicate`);
}
const requiredBullets = {
  '3.1': ['roles', 'provision', 'review', 'deprovision', 'frameworks'],
  '3.2': ['least-privilege', 'separation-of-duties', 'models']
};
for (const [objective, bullets] of Object.entries(requiredBullets)) for (const bullet of bullets) {
  assert.ok(eligible.some(d => d.objective === objective && d.bullet === bullet), `${objective}: ${bullet}`);
}
assert.ok(eligible.some(d => d.bullet === 'tools'));
assert.ok(eligible.some(d => d.bullet === 'ai-authentication'));
assert.ok(eligible.some(d => d.knowledge.includes(14)));
assert.ok(eligible.filter(d => d.bullet === 'models').every(d => d.objective === '3.2'));

// Negative checks establish that the schema/key guard rejects meaningful corruptions.
const sample = structuredClone(stagedQuestions[0]);
sample.explanation_detail.incorrect[0].letter = letters[sample.correct_idx];
assert.throws(() => validateQuestion(sample, eligible[0]));
const mistranslated = structuredClone(stagedQuestions[0]);
mistranslated.options_th[0] = '';
assert.throws(() => validateQuestion(mistranslated, eligible[0]));
console.log(`PASS staging: ${drafts.length} drafted, ${stagedQuestions.length} eligible, ${drafts.length - stagedQuestions.length} rejected; schema, keys, bilingual fields, source links and eight outline bullets.`);
console.log('PASS structured explanation rendering in EN, TH and both; invalid key mapping and missing Thai text rejected.');

// Lexical TF-IDF cosine ranks candidates for manual semantic review; it does not certify semantic uniqueness.
if (process.argv.includes('--duplicates')) {
  const stop = new Set('a an the and or to of in on for with from by is are was were be been as at that this these those which what who how should most best first its their they it has have had can may must will would does do not only each all'.split(' '));
  const tokens = q => normalize(`${q.question} ${q.options[q.correct_idx]}`).split(' ').filter(w => w.length > 2 && !stop.has(w));
  const docs = [...existing, ...stagedQuestions, ...Object.values(legacy).flat()];
  const frequency = new Map();
  docs.forEach(q => new Set(tokens(q)).forEach(t => frequency.set(t, (frequency.get(t) || 0) + 1)));
  const vector = q => {
    const counts = new Map();
    tokens(q).forEach(t => counts.set(t, (counts.get(t) || 0) + 1));
    const pairs = [...counts].map(([t, count]) => [t, (1 + Math.log(count)) * (1 + Math.log(docs.length / frequency.get(t)))]);
    const length = Math.hypot(...pairs.map(([, n]) => n));
    return new Map(pairs.map(([t, n]) => [t, n / length]));
  };
  const vectors = new Map(docs.map(q => [q, vector(q)]));
  const cosine = (a, b) => [...vectors.get(a)].reduce((n, [t, v]) => n + v * (vectors.get(b).get(t) || 0), 0);
  const pairs = (targets, within = false) => stagedQuestions.flatMap(a => targets.filter(b => within ? b.id > a.id : true).map(b => ({ a: a.id, b: b.id, score: Number(cosine(a, b).toFixed(3)) }))).sort((a, b) => b.score - a.score);
  console.log(JSON.stringify({ candidateMethod: 'TF-IDF cosine; human/AI item review required', nextBank: pairs(existing).slice(0, 12), withinDomain3: pairs(stagedQuestions, true).slice(0, 12), legacySupplement: pairs(Object.values(legacy).flat()).slice(0, 8) }, null, 2));
}

function files(relative) {
  const full = path.join(root, relative);
  return fs.statSync(full).isDirectory() ? fs.readdirSync(full).flatMap(name => files(`${relative}/${name}`)) : [relative];
}
function digest(roots) {
  const hash = crypto.createHash('sha256');
  const paths = roots.flatMap(files).sort();
  for (const relative of paths) hash.update(`${relative}\0${crypto.createHash('sha256').update(fs.readFileSync(path.join(root, relative))).digest('hex')}\n`);
  return hash.digest('hex');
}
const protectedGroups = [
  { name: 'legacy bank and original HTML', roots: ['data/certs/isc2/cc/versions/2026', 'original', 'isc2_cc_BothThai-eng_583quiz.html'], sha: 'c091df6cf2273024a6640f63b11626cf34d5ab2a954e2de8553a6e38c0f754f0' },
  { name: 'Domain 1/2 question modules', roots: ['data/certs/isc2/cc/versions/next-bank/questions/domain-1.js', 'data/certs/isc2/cc/versions/next-bank/questions/domain-2.js'], sha: '21e87a36d07644d1ae601fe486be2296ecf2f619913d02f0250ae566213d8cb3' },
  { name: 'all existing vocabulary', roots: ['content/isc2-cc-2026/vocabulary'], sha: '55c177e4d493488cd18215a0adb77b6f854730fa2d16d95e0dd97cc75b0157aa' },
  { name: 'runtime, UI, CSS and assets', roots: ['js', 'css', 'assets', 'index.html'], sha: 'eba4d4b39454cbaf5da2af3a445fda4417040d42e943d0f468539eef1c59fb4d' }
];
for (const group of protectedGroups) assert.equal(digest(group.roots), group.sha, `Changed protected group: ${group.name}`);
assert.deepEqual(Object.values(legacy).map(q => q.length), [142, 65, 93, 156, 127]);
console.log('PASS byte preservation: legacy 583, Domains 1/2, vocabulary and all runtime/UI code.');
if (stagingOnly) {
  console.log('STAGING checks complete. This mode does not assert production integration or academic approval.');
  process.exit(0);
}

assert.equal(reviewStatus, 'ACCEPTED', 'Draft review gate must be accepted');
assert.deepEqual(acceptedQuestions, stagedQuestions, 'No unresolved draft may pass the integration gate');
const config = await loader.loadExamConfig('isc2', 'cc', 'next-bank');
assert.ok(config, 'Loader must resolve consistent config/registry counts');
const bank = await loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainIds: [1, 2, 3, 4, 5] });
assert.ok(bank[3].length > 0, 'Domain 3 must be enabled and loadable');
assert.deepEqual(bank[3], acceptedQuestions, 'Production content must match accepted staging only');
assert.equal(bank[1].length, 24);
assert.equal(bank[2].length, 39);
assert.equal(bank[4].length, 0);
assert.equal(bank[5].length, 0);
const flat = Object.values(bank).flat();
assert.equal(new Set(flat.map(q => q.id)).size, flat.length);
assert.equal(config.totalQuestions, flat.length);
assert.equal(config.defaultQuestionCount, flat.length);
assert.equal(getExamVersions('isc2-cc').find(v => v.id === 'next-bank').questionCount, flat.length);
for (const domain of config.domains) {
  assert.equal(domain.questionCount, bank[domain.id].length);
  assert.equal(domain.questionThCount, bank[domain.id].length);
  assert.equal(domain.available, bank[domain.id].length > 0);
}
assert.deepEqual(config.supportedLanguages, ['en', 'th', 'both']);
assert.equal(config.passingPercentage, 70);
assert.equal(config.secondsPerQuestion, 90);
assert.deepEqual(config.domains.map(d => d.weightPercentage), [24, 17.3, 20, 21.3, 17.3]);
const before = JSON.stringify(bank);
for (const order of ['all', 'random']) {
  const practice = engine.createPracticeSession({ questionsByDomain: bank, selectedDomainIds: [3], order, questionCount: bank[3].length + 10 });
  assert.equal(practice.length, bank[3].length);
  assert.ok(practice.every(q => q.dom === 3));
  assert.equal(new Set(practice.map(q => q.id)).size, practice.length);
}
const combined = engine.createPracticeSession({ questionsByDomain: bank, selectedDomainIds: [1, 2, 3], order: 'all', questionCount: flat.length });
assert.equal(combined.length, flat.length);
const allocations = engine.calculateDomainAllocations(config.domains, 125);
const exam = engine.createExamSession({ questionsByDomain: bank, examConfig: config, totalQuestions: 125 });
assert.equal(exam.filter(q => q.dom === 3).length, Math.min(allocations[3], bank[3].length));
assert.equal(exam.length, config.domains.reduce((n, d) => n + Math.min(allocations[d.id], bank[d.id].length), 0));
assert.equal(JSON.stringify(bank), before, 'Selection must not mutate source data');

const cert = certifications.find(c => c.id === 'isc2-cc');
appState.selectCertification(cert);
assert.equal(appState.selectExamVersion('next-bank', config), true);
assert.ok(appState.state.setup.practice.selectedDomains.has(3));
for (const language of ['en', 'th', 'both']) {
  appState.state.setup.language = language;
  appState.state.setup.studyMode = 'practice';
  appState.state.setup.practice.selectedDomains = new Set([3]);
  const element = () => ({ addEventListener() {}, querySelector: () => element(), querySelectorAll: () => [], setAttribute() {}, classList: { add() {}, remove() {} } });
  const container = { innerHTML: '', querySelector: () => element(), querySelectorAll: () => [] };
  renderCertStartScreen(container, cert, 'next-bank', () => {}, config, () => {});
  const row = container.innerHTML.match(/<div\s+class="domain-row[^>]*data-domain-id="3"[^>]*>/)?.[0];
  assert.ok(row && row.includes('role="checkbox"') && !row.includes('aria-disabled="true"'), 'Domain 3 is selectable');
}
engine.startQuizSession({ mode: 'practice', questions: bank[3].slice(0, 2) });
engine.recordAnswer({ questionIndex: 0, selectedIndex: bank[3][0].correct_idx });
engine.recordAnswer({ questionIndex: 1, selectedIndex: (bank[3][1].correct_idx + 1) % 4 });
const snapshot = storage.buildSessionSnapshot(appState.state);
assert.equal(snapshot.versionId, 'next-bank');
assert.equal(snapshot.correct, 1);
assert.equal(snapshot.wrong, 1);
const restored = await loader.loadQuestionsForSession(snapshot);
assert.equal(restored[3].length, bank[3].length);
console.log(`PASS production: Q${bank[3][0].id}-Q${bank[3].at(-1).id}, D1 ${bank[1].length} / D2 ${bank[2].length} / D3 ${bank[3].length}, total ${flat.length}.`);
console.log(`PASS selection/scoring/resume: EN/TH/both, D3-only and mixed practice; current exam engine yields ${exam.length}/125 from incomplete available pools.`);
console.log('NOTE: Existing setup keeps the full 125-item exam disabled while totalQuestions < 125. No quiz allocation or UI behavior changed.');
