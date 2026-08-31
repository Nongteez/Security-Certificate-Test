/**
 * Quiz screen UI.
 * Renders active question, options, feedback, language switching,
 * real-time HH:MM:SS exam countdown timer, Finish confirmation modal,
 * and Exit confirmation modal.
 */

import { state, updateSetup } from '../core/state.js';
import {
  recordAnswer,
  nextQuestion,
  previousQuestion,
  exitQuizSession,
  finishQuizSession,
  formatTimeHHMMSS,
  startExamCountdown,
  stopExamCountdown,
  isExamCountdownRunning,
  persistCurrentQuizSession
} from '../core/quiz-engine.js';
import { t } from '../core/i18n.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';

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
  const isExam = quiz.mode === 'exam';

  const currentIndex = quiz.currentIndex;
  const totalQuestions = quiz.questions.length;
  const currentQ = quiz.questions[currentIndex];
  const currentAnswer = quiz.answers[currentIndex];
  const isAnswered = currentAnswer !== null;

  const domainInfo = DOMAIN_MAP[currentQ.dom] || { en: `Domain ${currentQ.dom}` };
  const domainLabel = domainInfo.en;

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  // Statistics for finish modal
  const answeredCount = quiz.answers.filter(a => a !== null).length;
  const unansweredCount = totalQuestions - answeredCount;

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
        <div class="explanation-divider" aria-hidden="true"></div>
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

  // Next button state
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const nextButtonText = isLastQuestion ? (isExam ? t('finishExam', lang) : t('finishPractice', lang)) : t('nextQuestion', lang);
  const nextButtonDisabled = (!isExam && !isAnswered) ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '';
  const finishButtonLabel = isExam ? t('finishExam', lang) : t('finishPractice', lang);

  const initialTimeFormatted = isExam 
    ? formatTimeHHMMSS(quiz.timeRemainingSeconds ?? 7200) 
    : t('noTimeLimit', lang);

  container.innerHTML = `
    <div class="quiz-container">
      <!-- Top Navigation & Controls Header -->
      <div class="quiz-header">
        <div class="quiz-header-left">
          <button type="button" class="btn btn-secondary btn-quiz-exit" id="btn-quiz-exit">
            ← ${t('exitQuiz', lang)}
          </button>
          <div class="quiz-cert-badge">
            <span>ISC2 CC</span>
            <span class="quiz-mode-pill ${isExam ? 'exam' : 'practice'}">${isExam ? t('examTitle', lang) : t('practiceTitle', lang)}</span>
          </div>
        </div>

        <div class="quiz-header-right">
          <!-- Timer or No Time Limit Pill -->
          <div class="quiz-timer-badge ${isExam ? 'exam-timer' : ''}" id="quiz-timer-container">
            <span id="quiz-timer-display">⏱ ${initialTimeFormatted}</span>
          </div>

          <!-- Language Selector -->
          <div class="lang-toggle">
            <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button type="button" class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th">TH</button>
            <button type="button" class="lang-btn ${lang === 'both' ? 'active' : ''}" data-lang="both">EN+TH</button>
          </div>

          <!-- Theme Toggle (consistent with Home and Setup screens) -->
          ${renderThemeToggle('quiz-theme-toggle')}
        </div>
      </div>

      <!-- Question Meta & Progress Bar -->
      <div class="quiz-meta-bar">
        <div class="quiz-meta-left">
          <span class="domain-pill">Domain ${currentQ.dom} · ${escapeHtml(domainLabel)}</span>
          <div class="quiz-question-counter quiz-progress-text">
            <span>${t('questionProgress', lang)} ${currentIndex + 1} / ${totalQuestions}</span>
          </div>
        </div>
        <div class="quiz-meta-actions">
          ${!isExam ? `
            <div class="quiz-score-segment" aria-label="Score status">
              <div class="score-segment-item score-segment-correct">
                <span class="score-icon">✓</span>
                <span class="score-val">${quiz.correct}</span>
                <span class="score-label">${t('correctLabel', lang)}</span>
              </div>
              <div class="score-segment-divider" aria-hidden="true"></div>
              <div class="score-segment-item score-segment-wrong">
                <span class="score-icon">✕</span>
                <span class="score-val">${quiz.wrong}</span>
                <span class="score-label">${t('wrongLabel', lang)}</span>
              </div>
            </div>
          ` : ''}
          <button type="button" class="btn btn-finish-quiz ${isExam ? 'exam' : 'practice'}" id="btn-quiz-finish">
            ${finishButtonLabel}
          </button>
        </div>
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

    <!-- Exit Confirmation Modal Dialog -->
    <div class="setup-modal-backdrop" id="exit-confirmation-modal" style="display: none;">
      <div class="setup-modal-content">
        <div class="modal-header-icon">⚠️</div>
        <h3 class="modal-title">${t('exitConfirmTitle', lang)}</h3>
        <p class="modal-desc">${t('exitConfirmDesc', lang)}</p>
        <div class="modal-btn-row">
          <button type="button" class="btn btn-secondary" id="btn-exit-cancel">
            ${t('continueQuiz', lang)}
          </button>
          <button type="button" class="btn btn-primary" id="btn-exit-confirm" style="background: var(--red); border-color: var(--red);">
            ${t('exitConfirmBtn', lang)}
          </button>
        </div>
      </div>
    </div>

    <!-- Finish Confirmation Modal Dialog -->
    <div class="setup-modal-backdrop" id="finish-confirmation-modal" style="display: none;">
      <div class="setup-modal-content">
        <div class="modal-header-icon">${unansweredCount === 0 ? '🎉' : '⚠️'}</div>
        <h3 class="modal-title">${t('finishConfirmTitle', lang)}</h3>
        <p class="modal-desc">${unansweredCount === 0 ? t('finishConfirmAllAnswered', lang) : t('finishConfirmUnansweredWarn', lang)}</p>
        
        <div class="modal-summary-box">
          <div class="summary-item">
            <strong>${t('answeredLabel', lang)}:</strong>
            <span style="color: var(--green);">${answeredCount} / ${totalQuestions}</span>
          </div>
          ${unansweredCount > 0 ? `
            <div class="summary-item">
              <strong>${t('unansweredLabel', lang)}:</strong>
              <span style="color: var(--red); font-weight: 700;">${unansweredCount}</span>
            </div>
          ` : ''}
        </div>

        <div class="modal-btn-row">
          <button type="button" class="btn btn-secondary" id="btn-finish-cancel">
            ${t('continueQuiz', lang)}
          </button>
          <button type="button" class="btn btn-primary" id="btn-finish-confirm">
            ${t('submitFinish', lang)}
          </button>
        </div>
      </div>
    </div>

    <!-- Exam Timeout Modal Dialog -->
    <div class="setup-modal-backdrop" id="timeout-modal" style="display: none;">
      <div class="setup-modal-content">
        <div class="modal-header-icon">⏰</div>
        <h3 class="modal-title">${t('examTimedOutTitle', lang)}</h3>
        <p class="modal-desc">${t('examTimedOutDesc', lang)}</p>
        <div class="modal-btn-row">
          <button type="button" class="btn btn-primary" id="btn-timeout-ok" style="width: 100%;">
            ${t('closeBtn', lang)}
          </button>
        </div>
      </div>
    </div>
  `;

  // --- Exam Countdown Timer ---
  if (isExam && !quiz.finished) {
    if (!isExamCountdownRunning()) {
      startExamCountdown(
        (remainingSeconds) => {
          const displayEl = document.getElementById('quiz-timer-display');
          const containerEl = document.getElementById('quiz-timer-container');
          if (displayEl) {
            displayEl.textContent = `⏱ ${formatTimeHHMMSS(remainingSeconds)}`;
          }
          if (containerEl) {
            if (remainingSeconds <= 300) {
              containerEl.classList.add('low-time');
            } else {
              containerEl.classList.remove('low-time');
            }
          }
        },
        () => {
          // Timer reached 00:00:00 -> auto finish
          const timeoutModal = document.getElementById('timeout-modal');
          if (timeoutModal) {
            timeoutModal.style.display = 'flex';
          } else {
            finishQuizSession(true);
            if (onRerender) onRerender();
          }
        }
      );
    }
  } else if (!isExam) {
    stopExamCountdown();
  }

  // --- Attach Event Listeners ---

  // Helper functions for modal scroll locking
  const openModal = (modal) => {
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = (modal) => {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  // 1. Exit Button -> Open Exit Confirmation Modal
  const exitBtn = container.querySelector('#btn-quiz-exit');
  const exitModal = container.querySelector('#exit-confirmation-modal');
  const exitCancelBtn = container.querySelector('#btn-exit-cancel');
  const exitConfirmBtn = container.querySelector('#btn-exit-confirm');

  if (exitBtn && exitModal) {
    exitBtn.addEventListener('click', () => openModal(exitModal));
  }

  if (exitCancelBtn && exitModal) {
    exitCancelBtn.addEventListener('click', () => closeModal(exitModal));
  }

  if (exitConfirmBtn && exitModal) {
    exitConfirmBtn.addEventListener('click', () => {
      closeModal(exitModal);
      exitQuizSession();
      if (onRerender) onRerender();
    });
  }

  // 2. Finish Button -> Open Finish Confirmation Modal
  const finishBtn = container.querySelector('#btn-quiz-finish');
  const finishModal = container.querySelector('#finish-confirmation-modal');
  const finishCancelBtn = container.querySelector('#btn-finish-cancel');
  const finishConfirmBtn = container.querySelector('#btn-finish-confirm');

  const openFinishModal = () => {
    openModal(finishModal);
  };

  if (finishBtn) {
    finishBtn.addEventListener('click', openFinishModal);
  }

  if (finishCancelBtn && finishModal) {
    finishCancelBtn.addEventListener('click', () => closeModal(finishModal));
  }

  if (finishConfirmBtn && finishModal) {
    finishConfirmBtn.addEventListener('click', () => {
      closeModal(finishModal);
      finishQuizSession(false);
      if (onRerender) onRerender();
    });
  }

  // 3. Timeout Modal OK Button
  const timeoutModal = container.querySelector('#timeout-modal');
  const timeoutOkBtn = container.querySelector('#btn-timeout-ok');
  if (timeoutOkBtn && timeoutModal) {
    timeoutOkBtn.addEventListener('click', () => {
      closeModal(timeoutModal);
      finishQuizSession(true);
      if (onRerender) onRerender();
    });
  }

  // 4. Language Switcher
  const langBtns = container.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        updateSetup({ language: selectedLang });
        persistCurrentQuizSession();
        renderQuizScreen(container, onRerender);
      }
    });
  });

  // 5. Theme Switcher (toggles without resetting quiz progress)
  attachThemeToggle(container, 'quiz-theme-toggle');

  // 6. Option Clicks
  const optionButtons = container.querySelectorAll('.option-item:not(:disabled)');
  optionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const optIdx = parseInt(btn.getAttribute('data-option-idx'), 10);
      recordAnswer({ questionIndex: currentIndex, selectedIndex: optIdx });
      renderQuizScreen(container, onRerender);
    });
  });

  // 7. Previous Button
  const prevBtn = container.querySelector('#btn-quiz-prev');
  if (prevBtn && currentIndex > 0) {
    prevBtn.addEventListener('click', () => {
      previousQuestion();
      renderQuizScreen(container, onRerender);
    });
  }

  // 8. Next / Finish Button
  const nextBtn = container.querySelector('#btn-quiz-next');
  if (nextBtn && (!nextButtonDisabled || isExam)) {
    nextBtn.addEventListener('click', () => {
      if (isLastQuestion) {
        openFinishModal();
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
