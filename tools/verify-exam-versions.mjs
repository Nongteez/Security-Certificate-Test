import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as loader from '../js/core/question-loader.js';
import * as appState from '../js/core/state.js';
import * as storage from '../js/core/storage.js';
import * as engine from '../js/core/quiz-engine.js';
import certifications from '../data/certifications.js';

const cc = certifications[0];
const config = await loader.loadExamConfig('isc2', 'cc', '2026');
const bank = await loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: '2026', domainIds: [1, 2, 3, 4, 5] });
const flat = Object.values(bank).flat();

test('invalid and upcoming configs never fall back to the current bank', async () => {
  assert.equal(await loader.loadExamConfig('isc2', 'cc', 'missing'), null);
  assert.equal(await loader.loadExamConfig('isc2', 'cc', 'next-bank'), null);
  assert.deepEqual(await loader.loadDomainQuestions({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainId: 1 }), []);
});

test('registry resolves explicit availability, validates references and accepts extra entries', async () => {
  const registry = await import('../data/exam-versions.js');
  assert.equal(registry.resolveExamVersion('isc2-cc', '2026').questionCount, 583);
  assert.equal(registry.resolveExamVersion('isc2-cc', 'next-bank'), null);
  assert.equal(registry.resolveExamVersion('wrong-cert', '2026'), null);
  const entries = registry.getExamVersions('isc2-cc');
  assert.equal(entries.length, 3);
  assert.equal(entries[1].status, 'coming-soon');
  assert.equal(entries[1].questionCount, undefined);
  const extra = { ...entries[0], id: 'test-bank' };
  assert.equal(registry.resolveExamVersion('isc2-cc', 'test-bank', [extra]).id, 'test-bank');
  assert.equal(registry.resolveExamVersion('isc2-cc', 'test-bank', [{ ...extra, examConfigReference: null }]), null);
});

test('current bank has unchanged questions and counts; repeated domains are loaded once', async () => {
  assert.deepEqual(Object.values(bank).map(q => q.length), [142, 65, 93, 156, 127]);
  assert.equal(flat.length, 583);
  assert.equal(new Set(flat.map(q => q.id)).size, 583);
  assert.equal(config.domains.length, 5);
  const repeated = await loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: '2026', domainIds: [1, 1] });
  assert.equal(repeated[1], bank[1]);
  await assert.rejects(loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: 'next-bank', domainIds: [1] }));
  await assert.rejects(loader.loadQuestionsForDomains({ vendorId: 'isc2', certId: 'cc', version: '2026', domainIds: [999] }));
});

test('opening a registered certification requires explicit version selection', async () => {
  appState.selectCertification(cc);
  assert.equal(appState.state.screen, 'exam-versions');
  assert.equal(appState.state.selectedExamVersion, null);
  assert.equal(appState.selectExamVersion('next-bank', config), false);
  assert.equal(appState.selectExamVersion('2026', config), true);
  assert.equal(appState.state.screen, 'cert-start');
  assert.equal(appState.state.selectedExamVersion, '2026');
  assert.deepEqual([...appState.state.setup.practice.selectedDomains], [1, 2, 3, 4, 5]);
});

test('new sessions, results and retries keep original version even after navigation changes', () => {
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  engine.recordAnswer({ questionIndex: 0, selectedIndex: flat[0].correct_idx });
  engine.recordAnswer({ questionIndex: 1, selectedIndex: (flat[1].correct_idx + 1) % 4 });
  appState.state.selectedExamVersion = 'next-bank';
  const snapshot = storage.buildSessionSnapshot(appState.state);
  assert.equal(snapshot.versionId, '2026');
  assert.equal(snapshot.version, '2026');
  assert.equal(snapshot.correct, 1);
  assert.equal(snapshot.wrong, 1);
  engine.finishQuizSession();
  assert.equal(appState.state.quiz.versionId, '2026');
  engine.retryQuizSession();
  assert.equal(storage.loadActiveQuizSession().versionId, '2026');
  engine.recordAnswer({ questionIndex: 0, selectedIndex: (flat[0].correct_idx + 1) % 4 });
  engine.retryWrongAnswersSession();
  assert.equal(storage.loadActiveQuizSession().versionId, '2026');
});

test('legacy resolution is read-only and invalid resume never deletes saved data or changes state', () => {
  const values = new Map();
  globalThis.localStorage = { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: k => values.delete(k) };
  const session = { schemaVersion: 1, certId: 'cc', mode: 'practice', questionIds: [flat[0].id], questionCount: 1, currentIndex: 0, answers: [null], correct: 0, wrong: 0 };
  const raw = JSON.stringify(session);
  values.set(storage.ACTIVE_SESSION_KEY, raw);
  assert.equal(storage.resolveSessionVersion(storage.loadActiveQuizSession()).id, '2026');
  assert.equal(values.get(storage.ACTIVE_SESSION_KEY), raw);
  assert.equal(engine.resumeQuizSession({ storedSession: session, questionsByDomain: bank, certifications }).success, true);
  const quiz = appState.state.quiz;
  for (const invalid of [{ ...session, version: 'next-bank' }, { ...session, versionId: 'missing' }, { ...session, version: '2026', versionId: 'next-bank' }, { ...session, questionIds: [999999] }]) {
    const saved = JSON.stringify(invalid);
    values.set(storage.ACTIVE_SESSION_KEY, saved);
    assert.equal(engine.resumeQuizSession({ storedSession: invalid, questionsByDomain: bank, certifications }).success, false);
    assert.equal(appState.state.quiz, quiz);
    assert.equal(values.get(storage.ACTIVE_SESSION_KEY), saved);
  }
  values.set(storage.ACTIVE_SESSION_KEY, '{broken');
  assert.equal(storage.loadActiveQuizSession(), null);
  assert.equal(values.get(storage.ACTIVE_SESSION_KEY), '{broken');
  delete globalThis.localStorage;
});

test('a copied or unproven question bank cannot resume a version just because IDs match', () => {
  const session = { schemaVersion: 1, vendorId: 'isc2', certId: 'cc', version: '2026', mode: 'practice', questionIds: [flat[0].id], currentIndex: 0, answers: [null] };
  assert.equal(engine.resumeQuizSession({ storedSession: session, questionsByDomain: { 1: [{ ...flat[0], question: 'Different bank' }] }, certifications }).success, false);
});

test('all original bank/config/source files and pre-existing user changes retain SHA256', () => {
  const baseline = JSON.parse(fs.readFileSync(new URL('../docs/verification/exam-version-integrity-before.json', import.meta.url), 'utf8').replace(/^\uFEFF/, ''));
  for (const [path, hash] of Object.entries(baseline.files)) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(new URL('../' + path, import.meta.url))).digest('hex').toUpperCase(), hash, path);
  }
});

// DOM doubles exercise our rendering and event handlers in Node, with no browser engine.
function element(attributes = {}) {
  return { disabled: false, textContent: '', style: {}, handlers: {},
    getAttribute: key => attributes[key],
    addEventListener(type, fn) { this.handlers[type] = fn; } };
}
function container(selectors = {}, groups = {}) {
  return { innerHTML: '', querySelector: key => selectors[key] || null, querySelectorAll: key => groups[key] || [] };
}

test('selection screen shows disabled future bank and invokes only explicit available selection', async () => {
  const { renderExamVersionsScreen } = await import('../js/ui/screen-versions.js');
  const select = element({ 'data-version-id': '2026' });
  const back = element();
  const root = container({ '#btn-versions-back': back }, { '.btn-select-version': [select] });
  let chosen = null;
  let wentBack = false;
  renderExamVersionsScreen(root, cc, id => { chosen = id; }, () => { wentBack = true; });
  assert.match(root.innerHTML, /ISC2 CC — Pre-2026 Exam Outline/);
  assert.match(root.innerHTML, /583 Questions/);
  assert.match(root.innerHTML, /<button[^>]*disabled[^>]*>\s*Coming Soon/s);
  assert.match(root.innerHTML, /cert-grid/);
  select.handlers.click();
  assert.equal(chosen, '2026');
  back.handlers.click();
  assert.equal(wentBack, true);
});

test('resume loads original bank domains even when saved practice domains exclude exam questions', async () => {
  const session = { schemaVersion: 1, certId: 'cc', mode: 'exam', questionIds: [bank[5][0].id], questionCount: 1, selectedDomains: [1], currentIndex: 0, answers: [null], expiresAt: Date.now() + 60000 };
  const resumedBank = await loader.loadQuestionsForSession(session);
  assert.equal(engine.resumeQuizSession({ storedSession: session, questionsByDomain: resumedBank, certifications }).success, true);
  assert.equal(appState.state.quiz.questions[0].id, bank[5][0].id);
});

test('setup hides other-version resume and results identify the original bank without changing score', async () => {
  const { renderCertStartScreen } = await import('../js/ui/screen-start.js');
  const { renderResultsScreen } = await import('../js/ui/screen-results.js');
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  appState.state.setup.practice.selectedDomains = new Set([1, 2, 3, 4, 5]);
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  const current = storage.loadActiveQuizSession();
  storage.saveActiveQuizSession({ ...current, version: 'next-bank', versionId: 'next-bank' });
  const root = container();
  renderCertStartScreen(root, cc, '2026', () => {}, config, () => {});
  assert.doesNotMatch(root.innerHTML, /id="resume-session-banner"/);
  engine.recordAnswer({ questionIndex: 0, selectedIndex: flat[0].correct_idx });
  engine.finishQuizSession();
  renderResultsScreen(root, () => {});
  assert.match(root.innerHTML, /2026 Exam Outline/);
  assert.match(root.innerHTML, /1 out of 2 correctly \(50%\)/);
});

test('router adds selection and back navigation and safely blocks an invalid configuration', async () => {
  const { renderApp } = await import('../js/ui/renderer.js');
  const error = element();
  const root = container({ '#version-error': error });
  globalThis.document = { getElementById: () => root };
  appState.selectCertification(cc);
  await renderApp();
  assert.match(root.innerHTML, /Select Exam Version/i);
  appState.state.screen = 'cert-start';
  appState.state.selectedExamVersion = 'next-bank';
  await renderApp();
  assert.doesNotMatch(root.innerHTML, /id="btn-start-quiz"/);
  assert.match(error.textContent, /unavailable|could not|cannot/i);
  delete globalThis.document;
});

test('unreadable stored data still requires the existing start-new confirmation', async () => {
  const { renderCertStartScreen } = await import('../js/ui/screen-start.js');
  const values = new Map([[storage.ACTIVE_SESSION_KEY, '{broken']]);
  globalThis.localStorage = { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v), removeItem: k => values.delete(k) };
  globalThis.document = { body: { style: {} } };
  const start = element();
  const modal = element();
  const root = container({ '#btn-start-quiz': start, '#confirm-start-new-modal': modal });
  appState.state.setup.studyMode = 'practice';
  renderCertStartScreen(root, cc, '2026', () => {}, config, () => {});
  start.handlers.click();
  assert.equal(modal.style.display, 'flex');
  assert.equal(values.get(storage.ACTIVE_SESSION_KEY), '{broken');
  delete globalThis.localStorage;
  delete globalThis.document;
});

test('failed question loading preserves a confirmed previous session and reports an error', async () => {
  const registry = (await import('../data/exam-versions.js')).default;
  const { renderCertStartScreen } = await import('../js/ui/screen-start.js');
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  const saved = JSON.stringify(storage.loadActiveQuizSession());
  const oldReference = registry[0].questionBankReference;
  const proceed = element();
  const error = element();
  const root = container({ '#btn-confirm-start-proceed': proceed, '#setup-error': error });
  globalThis.document = { body: { style: {} } };
  renderCertStartScreen(root, cc, '2026', () => {}, config, () => {});
  registry[0].questionBankReference = './certs/nonexistent/questions/';
  try {
    await proceed.handlers.click();
    assert.equal(JSON.stringify(storage.loadActiveQuizSession()), saved);
    assert.equal(error.hidden, false);
  } finally {
    registry[0].questionBankReference = oldReference;
    delete globalThis.document;
  }
});

test('navigating away while start is loading does not create or overwrite a session', async () => {
  const { renderCertStartScreen } = await import('../js/ui/screen-start.js');
  storage.clearActiveQuizSession();
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  appState.state.screen = 'cert-start';
  appState.state.setup.studyMode = 'practice';
  const start = element();
  const root = container({ '#btn-start-quiz': start });
  globalThis.document = { body: { style: {} } };
  renderCertStartScreen(root, cc, '2026', () => {}, config, () => {});
  const pending = start.handlers.click();
  appState.resetToHome();
  await pending;
  assert.equal(appState.state.screen, 'home');
  assert.equal(storage.loadActiveQuizSession(), null);
  delete globalThis.document;
});

test('navigating away during home resume leaves the saved session and new navigation intact', async () => {
  const { renderHomeScreen } = await import('../js/ui/screen-home.js');
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  const saved = JSON.stringify(storage.loadActiveQuizSession());
  appState.resetToHome();
  const resume = element();
  const root = container({ '#btn-home-resume': resume });
  renderHomeScreen(root, certifications, () => {}, () => {});
  const pending = resume.handlers.click();
  appState.selectCertification(cc);
  await pending;
  assert.equal(appState.state.screen, 'exam-versions');
  assert.equal(JSON.stringify(storage.loadActiveQuizSession()), saved);
});

test('discard during pending resume cannot resurrect the discarded session', async () => {
  const { renderCertStartScreen } = await import('../js/ui/screen-start.js');
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  appState.state.screen = 'cert-start';
  const resume = element();
  const discard = element();
  const root = container({ '#btn-resume-quiz-banner': resume, '#btn-discard-session': discard });
  renderCertStartScreen(root, cc, '2026', () => {}, config, () => {});
  const pending = resume.handlers.click();
  discard.handlers.click();
  await pending;
  assert.equal(storage.loadActiveQuizSession(), null);
  assert.equal(appState.state.screen, 'cert-start');
});

test('explicit null version metadata is rejected rather than silently mapped to the legacy bank', () => {
  const saved = { schemaVersion: 1, certId: 'cc', mode: 'practice', questionIds: [1], currentIndex: 0, answers: [null] };
  assert.equal(storage.resolveSessionVersion({ ...saved, version: null }), null);
  assert.equal(storage.resolveSessionVersion({ ...saved, versionId: null }), null);
});

test('new quiz returns to the original result bank even if navigation changed selected version', () => {
  appState.state.selectedCertification = cc;
  appState.state.selectedExamVersion = '2026';
  engine.startQuizSession({ mode: 'practice', questions: flat.slice(0, 2) });
  engine.finishQuizSession();
  appState.state.selectedExamVersion = 'next-bank';
  engine.returnToQuizSetup();
  assert.equal(appState.state.selectedExamVersion, '2026');
  assert.equal(appState.state.screen, 'cert-start');
});
