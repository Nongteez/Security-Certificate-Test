import { state, updateSetup } from '../core/state.js';
import { canStudyAnswers, studyAnswers } from '../core/study-answers.js';
import { escapeHtml, renderStudyExplanation2026Content } from './components/explanation-2026.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';

// The same content fallback used in quiz questions and choices.
function bilingual(en, th, lang, isQuestion = false) {
  const enClass = isQuestion ? ' question-en' : '';
  const thClass = isQuestion ? ' question-th' : '';
  if (lang === 'en') return `<span class="study-language${enClass}" lang="en">${escapeHtml(en)}</span>`;
  if (lang === 'th') return `<span class="study-language${thClass}" lang="${th ? 'th' : 'en'}">${escapeHtml(th || en)}</span>`;
  return `<span class="study-language${enClass}" lang="en">${escapeHtml(en)}</span><span class="study-language study-th${thClass}" lang="${th ? 'th' : 'en'}">${escapeHtml(th || en)}</span>`;
}

export function renderStudyAnswersScreen(container, rerender, focusId) {
  if (!canStudyAnswers(state.selectedCertification, state.selectedExamVersion) || !studyAnswers.questions.length) {
    state.screen = 'cert-start';
    rerender();
    return;
  }
  const lang = state.setup.language || 'en';
  const { questions, index, domains } = studyAnswers;
  const q = questions[index];
  const domain = domains.find(d => d.id === q.dom);
  const objective = q.objective || q.objective_id;
  container.innerHTML = `
    <main class="quiz-container study-answers">
      <header class="quiz-header">
        <button type="button" class="btn btn-secondary" id="study-back">← Back to Quiz Configuration</button>
        <div class="quiz-header-right">
          <div class="lang-toggle" role="group" aria-label="Language selection">
            ${['en', 'th', 'both'].map(code => `<button type="button" class="lang-btn ${lang === code ? 'active' : ''}" id="study-lang-${code}" data-lang="${code}" aria-pressed="${lang === code}">${code === 'both' ? 'EN+TH' : code.toUpperCase()}</button>`).join('')}
          </div>
          ${renderThemeToggle('study-theme-toggle')}
        </div>
      </header>
      <div><h1>Study Answers</h1><p class="study-outline">ISC2 CC 2026 — Exam Outline</p></div>
      <nav class="study-navigation" aria-label="Study question navigation">
        <button type="button" class="btn btn-secondary" id="study-previous" ${index === 0 ? 'disabled' : ''}>← Previous Question</button>
        <span role="status" aria-live="polite">Question ${index + 1} of ${questions.length}</span>
        <button type="button" class="btn btn-secondary" id="study-next" ${index === questions.length - 1 ? 'disabled' : ''}>Next Question →</button>
      </nav>
      <article class="question-card" aria-labelledby="study-question">
        <div class="study-metadata">Domain ${escapeHtml(q.dom)}${domain ? ` · ${bilingual(domain.name.en, domain.name.th, lang)}` : ''}${objective ? ` · Objective ${escapeHtml(typeof objective === 'object' ? objective.id : objective)}` : ''}</div>
        <h2 class="question-text" id="study-question" tabindex="-1">${bilingual(q.question, q.question_th, lang, true)}</h2>
        <ol class="options-list study-options" aria-label="Answer choices">
          ${q.options.map((option, i) => `<li class="option-item ${i === q.correct_idx ? 'correct' : ''}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <div class="option-content">${bilingual(option, q.options_th?.[i], lang)}</div>
          </li>`).join('')}
        </ol>
      </article>
      <section class="explanation-box" aria-labelledby="study-explanation-title">
        <h2 class="explanation-header" id="study-explanation-title">Explanation</h2>
        ${renderStudyExplanation2026Content(q, lang)}
      </section>
    </main>`;
  attachThemeToggle(container, 'study-theme-toggle');
  container.querySelector('#study-back').addEventListener('click', () => window.history.back());
  container.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
    updateSetup({ language: button.dataset.lang });
    renderStudyAnswersScreen(container, rerender, button.id);
  }));
  const navigate = delta => {
    studyAnswers.index = Math.min(questions.length - 1, Math.max(0, index + delta));
    renderStudyAnswersScreen(container, rerender, 'study-question');
    container.querySelector('#study-question').scrollIntoView({ block: 'nearest' });
  };
  container.querySelector('#study-previous').addEventListener('click', () => navigate(-1));
  container.querySelector('#study-next').addEventListener('click', () => navigate(1));
  if (focusId) container.querySelector(`#${focusId}`)?.focus({ preventScroll: true });
}
