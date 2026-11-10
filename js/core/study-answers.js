import { loadQuestionsForDomains, questionsMatchVersion } from './question-loader.js';
import { createPracticeSession } from './quiz-engine.js';
import { resolveExamVersion } from '../../data/exam-versions.js';

/** Strictly limited to the updated CC outline; the legacy ID is '2026'. */
export function canStudyAnswers(cert, version) {
  return cert?.id === 'isc2-cc' && cert.vendorId === 'isc2' && cert.certId === 'cc' &&
    version === 'next-bank' && !!resolveExamVersion(cert.id, version);
}

/** Selection only. Never starts, clears, persists or scores a quiz. */
export async function createStudySelection(cert, version, preferences) {
  if (!canStudyAnswers(cert, version)) throw new Error('Study Answers is available only for ISC2 CC 2026.');
  const selectedDomainIds = Array.from(preferences.selectedDomains || []);
  if (!selectedDomainIds.length) throw new Error('Select at least one domain.');
  const questionsByDomain = await loadQuestionsForDomains({
    vendorId: cert.vendorId, certId: cert.certId, version, domainIds: selectedDomainIds
  });
  const questions = createPracticeSession({ questionsByDomain, selectedDomainIds,
    order: preferences.order, questionCount: preferences.questionCount });
  if (!questions.length) throw new Error('No questions are available for this selection.');
  return questions;
}

// Temporary UI state, deliberately separate from quiz attempts and browser storage.
export const studyAnswers = { questions: [], index: 0, domains: [], token: 0 };

export function openStudyAnswers(questions, domains, state) {
  if (!canStudyAnswers(state.selectedCertification, state.selectedExamVersion) ||
    !questionsMatchVersion(questions, 'isc2-cc', 'next-bank')) return false;
  studyAnswers.questions = questions;
  studyAnswers.domains = domains;
  studyAnswers.index = 0;
  studyAnswers.token++;
  window.history.replaceState({ studyAnswers: 'config' }, '', '#isc2-cc-next-bank-config');
  window.history.pushState({ studyAnswers: 'view', token: studyAnswers.token }, '', '#isc2-cc-next-bank-study');
  state.screen = 'study-answers';
  return true;
}

/** Narrow routing extension: ordinary app routes retain their existing behavior. */
export function setupStudyHistory(state, cert, rerender) {
  const isStudyHash = () => /^#isc2-cc-next-bank-(study|config)$/.test(window.location.hash);
  if (isStudyHash()) {
    state.selectedCertification = cert;
    state.selectedExamVersion = 'next-bank';
    state.screen = 'cert-start';
    window.history.replaceState({ studyAnswers: 'config' }, '', '#isc2-cc-next-bank-config');
  }
  window.addEventListener('popstate', event => {
    // Other screens have their own navigation lifecycle (notably active exams).
    if (!['cert-start', 'study-answers'].includes(state.screen)) return;
    if (!event.state?.studyAnswers && state.screen !== 'study-answers' && !isStudyHash()) return;
    if (!isStudyHash()) {
      if (state.screen === 'study-answers') { state.screen = 'cert-start'; rerender(); }
      return;
    }
    state.selectedCertification = cert;
    state.selectedExamVersion = 'next-bank';
    state.screen = event.state?.studyAnswers === 'view' &&
      event.state.token === studyAnswers.token && studyAnswers.questions.length ? 'study-answers' : 'cert-start';
    rerender();
  });
}
