/**
 * Results and Wrong Answers Review Screen UI — SEC CERT TEST
 * Displays score percentage indicator, pass/fail status, stat cards,
 * and the 4 required actions: New Quiz, Retry, Review Wrong Answers, Retry Wrong Answers.
 */

import { state, updateSetup } from '../core/state.js';
import { resolveExamVersion } from '../../data/exam-versions.js';
import { t } from '../core/i18n.js';
import {
  returnToQuizSetup,
  retryQuizSession,
  retryWrongAnswersSession,
  getWrongQuestions
} from '../core/quiz-engine.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';
import { renderExplanation2026Content } from './components/explanation-2026.js';

const DOMAIN_MAP = {
  1: { en: 'Security Principles', th: 'หลักการความมั่นคงปลอดภัย' },
  2: { en: 'Business Continuity, Disaster Recovery & Incident Response', th: 'การดำเนินธุรกิจอย่างต่อเนื่อง และการตอบสนองต่อเหตุการณ์' },
  3: { en: 'Access Controls Concepts', th: 'แนวคิดการควบคุมการเข้าถึง' },
  4: { en: 'Network Security', th: 'ความมั่นคงปลอดภัยของระบบเครือข่าย' },
  5: { en: 'Security Operations', th: 'การปฏิบัติการด้านความมั่นคงปลอดภัย' }
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Review pagination index (preserved during session review navigation)
let activeReviewIndex = 0;

/**
 * Escapes HTML characters for safe rendering.
 * @param {string} str 
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Renders the primary Quiz Results Screen into container.
 * @param {HTMLElement} container - DOM root (#app)
 * @param {Function} onRerender - Render trigger callback
 */
export function renderResultsScreen(container, onRerender) {
  const lang = state.setup.language || 'en';
  const quiz = state.quiz;
  const version = resolveExamVersion(quiz.certification?.id || state.selectedCertification?.id, quiz.versionId || state.selectedExamVersion);
  const isExam = quiz.mode === 'exam';

  const totalQuestions = quiz.questions?.length || 0;
  const answeredCount = quiz.answers?.filter((a) => a !== null).length || 0;
  const unansweredCount = totalQuestions - answeredCount;
  const correctCount = quiz.correct || 0;
  
  const wrongItems = getWrongQuestions();
  const wrongCount = wrongItems.length;

  const pct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const passed = isExam ? (pct >= 70 && unansweredCount === 0) : (pct >= 70);

  // SVG Circle Progress calculations (r = 78, circumference = 2 * PI * 78 = 490.09)
  const circ = 490.09;
  const dashOffset = Math.round(circ * (1 - pct / 100));
  const scoreColor = passed ? 'var(--green)' : 'var(--red)';
  const passFailLabel = passed ? t('passStatus', lang) : t('failStatus', lang);

  // Title determination
  let resultTitle = '';
  if (isExam) {
    if (quiz.timedOut && !passed) {
      resultTitle = t('examTimedOutResultTitle', lang);
    } else if (passed) {
      resultTitle = t('examPassedTitle', lang);
    } else {
      resultTitle = t('examFailedTitle', lang);
    }
  } else {
    resultTitle = passed ? t('practiceGreatJobTitle', lang) : t('practiceCompletedTitle', lang);
  }

  // Summary Subtitle (UI label always English)
  const resultSummary = `You answered ${correctCount} out of ${totalQuestions} correctly (${pct}%)${unansweredCount > 0 ? ` (${unansweredCount} unanswered)` : ''}.`;

  container.innerHTML = `
    <div class="results-container">
      <!-- Top Navigation & Controls Header -->
      <div class="quiz-header">
        <div class="quiz-header-left">
          <button type="button" class="btn btn-secondary btn-quiz-exit" id="btn-results-exit">
            ← ${t('exitQuiz', lang)}
          </button>
          <div class="quiz-cert-badge">
            <span>ISC2 CC</span>
            ${version ? `<span class="meta-badge meta-badge-outline">${escapeHtml(version.badge || version.title)}</span>` : ''}
            <span class="quiz-mode-pill ${isExam ? 'exam' : 'practice'}">${isExam ? t('examTitle', lang) : t('practiceTitle', lang)}</span>
          </div>
        </div>

        <div class="quiz-header-right">
          <!-- Language Selector -->
          <div class="lang-toggle">
            <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button type="button" class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
            <button type="button" class="lang-btn ${lang === 'both' ? 'active' : ''}" data-lang="both">EN+TH</button>
          </div>

          <!-- Theme Toggle -->
          ${renderThemeToggle('results-theme-toggle')}
        </div>
      </div>

      <!-- Results Main Presentation Card -->
      <div class="results-content-card">
        <!-- Score Circle -->
        <div class="results-circle-wrap">
          <div class="results-circle">
            <svg width="180" height="180" viewBox="0 0 180 180" aria-label="Score: ${pct}% ${passFailLabel}">
              <circle cx="90" cy="90" r="78" stroke="var(--line)" stroke-width="8" fill="none"/>
              <circle 
                cx="90" 
                cy="90" 
                r="78" 
                stroke="${scoreColor}" 
                stroke-width="8" 
                fill="none"
                stroke-dasharray="${circ}" 
                stroke-dashoffset="${dashOffset}" 
                stroke-linecap="round"
                class="results-svg-fill"
              />
            </svg>
            <div class="pct-text">
              <span class="pct-number" style="color: ${scoreColor};">${pct}%</span>
              <span class="pct-label" style="color: ${scoreColor};">${passFailLabel}</span>
            </div>
          </div>
        </div>

        <!-- Result Title -->
        <h2 class="results-title">${resultTitle}</h2>

        <!-- Result Summary -->
        <p class="results-subtitle">${resultSummary}</p>

        <!-- 3 Stat Cards: [ Correct ] [ Incorrect ] [ Score ] -->
        <div class="stat-grid">
          <div class="stat-card green">
            <div class="val">${correctCount}</div>
            <div class="lbl">${t('correctLabel', lang)}</div>
          </div>
          <div class="stat-card red">
            <div class="val">${wrongCount}</div>
            <div class="lbl">${t('incorrectLabel', lang)}</div>
          </div>
          <div class="stat-card gold">
            <div class="val">${pct}%</div>
            <div class="lbl">${t('scoreLabel', lang)}</div>
          </div>
        </div>

        <!-- Required 4 Action Buttons -->
        <div class="results-actions">
          <!-- 1. New Quiz -->
          <button type="button" class="btn btn-secondary results-btn" id="btn-results-new">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            <span>${t('newQuizBtn', lang)}</span>
          </button>

          <!-- 2. Retry -->
          <button type="button" class="btn btn-primary results-btn" id="btn-results-retry">
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="23 4 23 10 17 10"></polyline>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            <span>${t('retryBtn', lang)}</span>
          </button>

          <!-- 3. Review Wrong Answers -->
          <button 
            type="button" 
            class="btn btn-secondary results-btn ${wrongCount === 0 ? 'disabled' : ''}" 
            id="btn-results-review"
            ${wrongCount === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}
            title="${wrongCount === 0 ? t('noWrongAnswersDesc', lang) : ''}"
          >
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>${t('reviewWrongBtn', lang)}${wrongCount > 0 ? ` (${wrongCount})` : ''}</span>
          </button>

          <!-- 4. Retry Wrong Answers -->
          <button 
            type="button" 
            class="btn btn-secondary results-btn btn-retry-wrong ${wrongCount === 0 ? 'disabled' : ''}" 
            id="btn-results-retry-wrong"
            ${wrongCount === 0 ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : ''}
            title="${wrongCount === 0 ? t('noWrongAnswersDesc', lang) : ''}"
          >
            <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="1 4 1 10 7 10"></polyline>
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
            </svg>
            <span>${t('retryWrongBtn', lang)}${wrongCount > 0 ? ` (${wrongCount})` : ''}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach Theme Toggle
  attachThemeToggle(container, 'results-theme-toggle');

  // Attach Language Switcher
  const langBtns = container.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== lang) {
        updateSetup({ language: selectedLang });
        if (onRerender) onRerender();
      }
    });
  });

  // Action 1: Exit Quiz / New Quiz (both return to Setup Screen)
  const exitBtn = container.querySelector('#btn-results-exit');
  const newQuizBtn = container.querySelector('#btn-results-new');
  const handleNewQuiz = () => {
    returnToQuizSetup();
    if (onRerender) onRerender();
  };

  if (exitBtn) exitBtn.addEventListener('click', handleNewQuiz);
  if (newQuizBtn) newQuizBtn.addEventListener('click', handleNewQuiz);

  // Action 2: Retry (Restart completed quiz from beginning with same selection)
  const retryBtn = container.querySelector('#btn-results-retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      retryQuizSession();
      if (onRerender) onRerender();
    });
  }

  // Action 3: Review Wrong Answers
  const reviewBtn = container.querySelector('#btn-results-review');
  if (reviewBtn && wrongCount > 0) {
    reviewBtn.addEventListener('click', () => {
      activeReviewIndex = 0;
      state.screen = 'review-wrong';
      if (onRerender) onRerender();
    });
  }

  // Action 4: Retry Wrong Answers
  const retryWrongBtn = container.querySelector('#btn-results-retry-wrong');
  if (retryWrongBtn && wrongCount > 0) {
    retryWrongBtn.addEventListener('click', () => {
      retryWrongAnswersSession();
      if (onRerender) onRerender();
    });
  }
}

/**
 * Renders the Review Wrong Answers screen into container.
 * Displays only questions answered incorrectly in the completed session.
 * @param {HTMLElement} container - DOM root (#app)
 * @param {Function} onRerender - Render trigger callback
 */
export function renderReviewWrongScreen(container, onRerender) {
  const lang = state.setup.language || 'en';
  const wrongItems = getWrongQuestions();

  // Safety fallback if no wrong answers
  if (wrongItems.length === 0) {
    state.screen = 'results';
    if (onRerender) onRerender();
    return;
  }

  // Clamp review index within valid bounds
  if (activeReviewIndex < 0) activeReviewIndex = 0;
  if (activeReviewIndex >= wrongItems.length) activeReviewIndex = wrongItems.length - 1;

  const currentItem = wrongItems[activeReviewIndex];
  const currentQ = currentItem.question;
  const currentAnswer = currentItem.answer;
  const totalWrong = wrongItems.length;

  const domainInfo = DOMAIN_MAP[currentQ.dom] || { en: `Domain ${currentQ.dom}` };
  const domainLabel = domainInfo.en;
  const progressPercent = Math.round(((activeReviewIndex + 1) / totalWrong) * 100);

  // Render question text
  let questionHtml = '';
  if (lang === 'en') {
    questionHtml = `<div class="question-en">${escapeHtml(currentQ.question)}</div>`;
  } else if (lang === 'th') {
    questionHtml = `<div class="question-th">${escapeHtml(currentQ.question_th || currentQ.question)}</div>`;
  } else {
    // Both
    questionHtml = `
      <div class="question-en"><span class="lang-badge">EN</span>${escapeHtml(currentQ.question)}</div>
      <div class="question-th"><span class="lang-badge">TH</span>${escapeHtml(currentQ.question_th || currentQ.question)}</div>
    `;
  }

  // Render options with clear indicators for User's Answer vs Correct Answer
  const optionsHtml = currentQ.options.map((optEn, idx) => {
    const optTh = currentQ.options_th && currentQ.options_th[idx] ? currentQ.options_th[idx] : optEn;
    const letter = OPTION_LETTERS[idx] || String.fromCharCode(65 + idx);

    const isUserChoice = currentAnswer && currentAnswer.selected === idx;
    const isCorrectChoice = idx === currentQ.correct_idx;

    let stateClass = '';
    let choiceBadgeHtml = '';

    if (isCorrectChoice) {
      stateClass = 'correct';
      choiceBadgeHtml = `<span class="review-choice-badge correct">✓ ${t('correctAnswerLabel', lang)}</span>`;
    } else if (isUserChoice) {
      stateClass = 'wrong';
      choiceBadgeHtml = `<span class="review-choice-badge wrong">✕ ${t('yourAnswerLabel', lang)}</span>`;
    } else {
      stateClass = 'disabled';
    }

    let optionTextHtml = '';
    if (lang === 'en') {
      optionTextHtml = `<div class="option-text-en">${escapeHtml(optEn)}</div>`;
    } else if (lang === 'th') {
      optionTextHtml = `<div class="option-text-th">${escapeHtml(optTh)}</div>`;
    } else {
      optionTextHtml = `
        <div class="option-text-en">${escapeHtml(optEn)}</div>
        <div class="option-text-th">${escapeHtml(optTh)}</div>
      `;
    }

    return `
      <div class="option-item ${stateClass} review-option-item">
        <span class="option-letter">${letter}</span>
        <div class="option-content">
          ${optionTextHtml}
          ${choiceBadgeHtml ? `<div class="review-badge-wrap">${choiceBadgeHtml}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Explanation content
  let expContentHtml = '';
  const versionId = state.quiz?.versionId || state.selectedExamVersion;
  if (versionId === 'next-bank') {
    expContentHtml = renderExplanation2026Content(currentQ, lang);
  } else {
    if (lang === 'en') {
      expContentHtml = `<div class="explanation-en">${escapeHtml(currentQ.explanation)}</div>`;
    } else if (lang === 'th') {
      expContentHtml = `<div class="explanation-th">${escapeHtml(currentQ.explanation_th || currentQ.explanation)}</div>`;
    } else {
      expContentHtml = `
        <div class="explanation-en"><span class="lang-badge">EN</span>${escapeHtml(currentQ.explanation)}</div>
        <div class="explanation-divider" aria-hidden="true"></div>
        <div class="explanation-th"><span class="lang-badge">TH</span>${escapeHtml(currentQ.explanation_th || currentQ.explanation)}</div>
      `;
    }
  }

  const isLastItem = activeReviewIndex === totalWrong - 1;

  container.innerHTML = `
    <div class="quiz-container review-screen-container">
      <!-- Top Navigation & Controls Header -->
      <div class="quiz-header">
        <div class="quiz-header-left">
          <button type="button" class="btn btn-secondary btn-quiz-exit" id="btn-review-back-top">
            ${t('backToResults', lang)}
          </button>
          <div class="quiz-cert-badge">
            <span>ISC2 CC</span>
            <span class="quiz-mode-pill review-pill"><span class="review-title-full">${t('reviewWrongTitle', lang)}</span><span class="review-title-short">Review</span></span>
          </div>
        </div>

        <div class="quiz-header-right">
          <!-- Language Selector -->
          <div class="lang-toggle">
            <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button type="button" class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
            <button type="button" class="lang-btn ${lang === 'both' ? 'active' : ''}" data-lang="both">EN+TH</button>
          </div>

          <!-- Theme Toggle -->
          ${renderThemeToggle('review-theme-toggle')}
        </div>
      </div>

      <!-- Review Meta Bar -->
      <div class="quiz-meta-bar">
        <div class="quiz-meta-left">
          <span class="domain-pill">Domain ${currentQ.dom} · ${escapeHtml(domainLabel)}</span>
          <div class="quiz-question-counter quiz-progress-text">
            <span>${t('reviewItemCounter', lang)} ${activeReviewIndex + 1} / ${totalWrong}</span>
          </div>
        </div>
        <div class="quiz-meta-actions">
          <div class="review-status-tag">
            <span style="color: var(--red); font-weight: 700;">✕ ${t('wrongLabel', lang)}</span>
          </div>
        </div>
      </div>

      <!-- Red Progress Track for Review -->
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%; background: var(--red);"></div>
      </div>

      <!-- Question Card with Options and Full Explanation -->
      <div class="question-card">
        <div class="question-text-block">
          ${questionHtml}
        </div>

        <!-- Options with Correct and Wrong highlights -->
        <div class="options-list">
          ${optionsHtml}
        </div>

        <!-- Explanation Box -->
        <div class="explanation-box" style="margin-top: 20px;">
          <div class="explanation-header">
            <span>💡 ${t('explanation', lang)}</span>
          </div>
          ${expContentHtml}
        </div>
      </div>

      <!-- Bottom Action Bar -->
      <div class="quiz-actions-bar">
        <div class="quiz-actions-left">
          <button 
            type="button" 
            class="btn btn-secondary" 
            id="btn-review-prev" 
            ${activeReviewIndex === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}
          >
            ${t('prevQuestion', lang)}
          </button>
        </div>

        <div class="quiz-actions-right">
          <button 
            type="button" 
            class="btn ${isLastItem ? 'btn-secondary' : 'btn-primary'}" 
            id="btn-review-next"
          >
            ${isLastItem ? t('backToResults', lang) : t('nextQuestion', lang)}
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach Theme Toggle
  attachThemeToggle(container, 'review-theme-toggle');

  // Attach Language Switcher
  const langBtns = container.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang && selectedLang !== lang) {
        updateSetup({ language: selectedLang });
        if (onRerender) onRerender();
      }
    });
  });

  // Top Back to Results Button
  const backTopBtn = container.querySelector('#btn-review-back-top');
  if (backTopBtn) {
    backTopBtn.addEventListener('click', () => {
      state.screen = 'results';
      if (onRerender) onRerender();
    });
  }

  // Previous Wrong Question Button
  const prevBtn = container.querySelector('#btn-review-prev');
  if (prevBtn && activeReviewIndex > 0) {
    prevBtn.addEventListener('click', () => {
      activeReviewIndex--;
      if (onRerender) onRerender();
    });
  }

  // Next Question / Back to Results Button
  const nextBtn = container.querySelector('#btn-review-next');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (isLastItem) {
        state.screen = 'results';
      } else {
        activeReviewIndex++;
      }
      if (onRerender) onRerender();
    });
  }
}

