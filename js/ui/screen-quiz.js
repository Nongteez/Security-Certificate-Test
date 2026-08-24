/**
 * Quiz screen UI.
 * Renders active question, options, feedback, language switching, and navigation controls.
 */

import { state, updateSetup } from '../core/state.js';
import { recordAnswer, nextQuestion, previousQuestion, exitQuizSession } from '../core/quiz-engine.js';
import { toggleTheme, getStoredTheme } from '../core/theme.js';
import { t } from '../core/i18n.js';

const DOMAIN_MAP = {
  1: { en: "Security Principles", th: "หลักการความปลอดภัย" },
  2: { en: "BC / DR / Incident Response", th: "BC/DR/IR" },
  3: { en: "Access Controls Concepts", th: "แนวคิดการควบคุมการเข้าถึง" },
  4: { en: "Network Security", th: "ความปลอดภัยเครือข่าย" },
  5: { en: "Security Operations", th: "ปฏิบัติการความปลอดภัย" }
};

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

/**
 * Renders the active quiz screen.
 * @param {HTMLElement} container - Root mount container
 * @param {Function} onRerender - Callback to re-render the app/screen
 */
export function renderQuizScreen(container, onRerender) {
  const quiz = state.quiz;
  if (!quiz || !quiz.active || !quiz.questions || quiz.questions.length === 0) {
    console.warn('No active quiz found in state. Exiting to start screen.');
    exitQuizSession();
    if (onRerender) onRerender();
    return;
  }

  const lang = state.setup.language || 'en';
  const currentTheme = getStoredTheme();
  const isDark = currentTheme === 'dark';
  const isExam = quiz.mode === 'exam';

  const currentIndex = quiz.currentIndex;
  const totalQuestions = quiz.questions.length;
  const currentQ = quiz.questions[currentIndex];
  const currentAnswer = quiz.answers[currentIndex];
  const isAnswered = currentAnswer !== null;

  const domainInfo = DOMAIN_MAP[currentQ.dom] || { en: `Domain ${currentQ.dom}`, th: `โดเมน ${currentQ.dom}` };
  const domainLabel = lang === 'th' ? domainInfo.th : (lang === 'both' ? `${domainInfo.en} · ${domainInfo.th}` : domainInfo.en);

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Render question text according to language
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

  // Render options according to language and mode
  const optionsHtml = currentQ.options.map((optEn, idx) => {
    const optTh = currentQ.options_th && currentQ.options_th[idx] ? currentQ.options_th[idx] : optEn;
    const letter = OPTION_LETTERS[idx] || String.fromCharCode(65 + idx);

    let stateClass = '';
    let disabledAttr = '';

    if (isAnswered) {
      if (!isExam) {
        // Practice Mode: show correct / wrong reveal
        disabledAttr = 'disabled';
        if (idx === currentAnswer.correct) {
          stateClass = 'correct';
        } else if (idx === currentAnswer.selected && !currentAnswer.isCorrect) {
          stateClass = 'wrong';
        }
      } else {
        // Exam Mode: neutral selection highlight only, no reveal
        if (idx === currentAnswer.selected) {
          stateClass = 'selected';
        }
      }
    }

    let optionTextHtml = '';
    if (lang === 'en') {
      optionTextHtml = `<div class="option-text-en">${escapeHtml(optEn)}</div>`;
    } else if (lang === 'th') {
      optionTextHtml = `<div class="option-text-th">${escapeHtml(optTh)}</div>`;
    } else {
      // Both
      optionTextHtml = `
        <div class="option-text-en">${escapeHtml(optEn)}</div>
        <div class="option-text-th">${escapeHtml(optTh)}</div>
      `;
    }

    return `
      <button 
        type="button" 
        class="option-item ${stateClass}" 
        data-option-idx="${idx}"
        ${disabledAttr}
      >
        <span class="option-letter">${letter}</span>
        <div class="option-content">
          ${optionTextHtml}
        </div>
      </button>
    `;
  }).join('');

  // Explanation Box (Practice Mode only, after answering)
  let explanationHtml = '';
  if (!isExam && isAnswered) {
    let expContentHtml = '';
    if (lang === 'en') {
      expContentHtml = `<div class="explanation-en">${escapeHtml(currentQ.explanation)}</div>`;
    } else if (lang === 'th') {
      expContentHtml = `<div class="explanation-th">${escapeHtml(currentQ.explanation_th || currentQ.explanation)}</div>`;
    } else {
      expContentHtml = `
        <div class="explanation-en"><span class="lang-badge">EN</span>${escapeHtml(currentQ.explanation)}</div>
        <div class="explanation-th"><span class="lang-badge">TH</span>${escapeHtml(currentQ.explanation_th || currentQ.explanation)}</div>
      `;
    }

    explanationHtml = `
      <div class="explanation-box" id="quiz-explanation-box">
        <div class="explanation-header">
          <span>💡 ${t('explanation', lang)}</span>
        </div>
        ${expContentHtml}
      </div>
    `;
  }

  // Next / Finish button state
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const nextButtonText = isLastQuestion ? t('finishQuiz', lang) : t('nextQuestion', lang);
  const nextButtonDisabled = (!isExam && !isAnswered) ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '';

  container.innerHTML = `
    <div class="quiz-container">
      <!-- Top Navigation & Controls Header -->
      <div class="quiz-header">
        <div class="quiz-header-left">
          <button type="button" class="btn btn-secondary" id="btn-quiz-exit" style="padding: 8px 14px; font-size: 13px;">
            ← ${t('exitQuiz', lang)}
          </button>
          <div class="quiz-cert-badge">
            <span>ISC2 CC</span>
            <span class="quiz-mode-pill ${isExam ? 'exam' : 'practice'}">${isExam ? t('examTitle', lang) : t('practiceTitle', lang)}</span>
          </div>
        </div>

        <div class="quiz-header-right">
          <!-- Timer or No Time Limit Pill -->
          <div class="quiz-timer-badge ${isExam ? 'exam-timer' : ''}">
            ${isExam ? '⏱ 120:00' : `⏱ ${t('noTimeLimit', lang)}`}
          </div>

          <!-- Language Selector -->
          <div class="lang-toggle">
            <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button type="button" class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
            <button type="button" class="lang-btn ${lang === 'both' ? 'active' : ''}" data-lang="both">EN+TH</button>
          </div>

          <!-- Theme Toggle -->
          <button type="button" class="theme-toggle-btn" id="quiz-theme-toggle" title="Toggle Theme">
            ${isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      <!-- Question Meta & Progress Bar -->
      <div class="quiz-meta-bar">
        <div class="quiz-progress-text">
          <span>${t('questionProgress', lang)} ${currentIndex + 1} / ${totalQuestions}</span>
        </div>
        <div class="quiz-domain-tag">
          <span>🏷️ D${currentQ.dom}: ${escapeHtml(domainLabel)}</span>
        </div>
        ${!isExam ? `
          <div class="quiz-score-counters">
            <span class="score-counter-correct">✓ ${quiz.correct} ${t('correctLabel', lang)}</span>
            <span class="score-counter-wrong">✗ ${quiz.wrong} ${t('wrongLabel', lang)}</span>
          </div>
        ` : ''}
      </div>

      <!-- Progress Track -->
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <!-- Main Question Card -->
      <div class="question-card">
        <div class="question-text-block">
          ${questionHtml}
        </div>

        <!-- Options List -->
        <div class="options-list">
          ${optionsHtml}
        </div>

        <!-- Explanation (Practice Mode) -->
        ${explanationHtml}
      </div>

      <!-- Bottom Action Bar -->
      <div class="quiz-actions-bar">
        <div class="quiz-actions-left">
          <button 
            type="button" 
            class="btn btn-secondary" 
            id="btn-quiz-prev" 
            ${currentIndex === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}
          >
            ${t('prevQuestion', lang)}
          </button>
        </div>

        <div class="quiz-actions-right">
          <button 
            type="button" 
            class="btn btn-primary" 
            id="btn-quiz-next" 
            ${nextButtonDisabled}
          >
            ${nextButtonText}
          </button>
        </div>
      </div>
    </div>
  `;

  // --- Attach Event Listeners ---

  // 1. Exit Button
  const exitBtn = container.querySelector('#btn-quiz-exit');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      exitQuizSession();
      if (onRerender) onRerender();
    });
  }

  // 2. Language Switcher
  const langBtns = container.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        updateSetup({ language: selectedLang });
        renderQuizScreen(container, onRerender);
      }
    });
  });

  // 3. Theme Switcher
  const themeBtn = container.querySelector('#quiz-theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      toggleTheme();
      renderQuizScreen(container, onRerender);
    });
  }

  // 4. Option Clicks
  const optionButtons = container.querySelectorAll('.option-item:not(:disabled)');
  optionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const optIdx = parseInt(btn.getAttribute('data-option-idx'), 10);
      recordAnswer({ questionIndex: currentIndex, selectedIndex: optIdx });
      renderQuizScreen(container, onRerender);
    });
  });

  // 5. Previous Button
  const prevBtn = container.querySelector('#btn-quiz-prev');
  if (prevBtn && currentIndex > 0) {
    prevBtn.addEventListener('click', () => {
      previousQuestion();
      renderQuizScreen(container, onRerender);
    });
  }

  // 6. Next / Finish Button
  const nextBtn = container.querySelector('#btn-quiz-next');
  if (nextBtn && (!nextButtonDisabled || isExam)) {
    nextBtn.addEventListener('click', () => {
      if (isLastQuestion) {
        // Safe exit / complete placeholder for Phase 4
        exitQuizSession();
        if (onRerender) onRerender();
      } else {
        nextQuestion();
        renderQuizScreen(container, onRerender);
      }
    });
  }
}

/**
 * Helper to escape HTML characters in text strings.
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
