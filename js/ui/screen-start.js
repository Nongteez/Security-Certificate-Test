/**
 * Certification Start / Quiz Setup Screen.
 * Compact, task-focused setup UI supporting language selection (EN/TH/Both),
 * Practice Mode vs Exam Mode, dynamic pool calculations, domain locking in Exam,
 * and mobile-optimized responsive UX.
 */

import { state, updateSetup, updatePracticeSetup } from '../core/state.js';
import { t } from '../core/i18n.js';
import { loadQuestionsForDomains } from '../core/question-loader.js';
import { createPracticeSession, createExamSession, startQuizSession } from '../core/quiz-engine.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';

/**
 * Renders the Certification Start / Setup screen into the given container.
 * @param {HTMLElement} container - The DOM container (#app)
 * @param {Object} cert - The selected certification object from certifications.js
 * @param {string} version - The active exam version (e.g. "2026")
 * @param {Function} onBackToHome - Callback invoked when "Back to Certifications" is clicked
 * @param {Object} examConfig - The exam version configuration from exam.config.js
 * @param {Function} [onStartQuiz] - Callback invoked when a quiz session is started
 */
export function renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz) {
  const lang = state.setup.language || 'en';
  const studyMode = state.setup.studyMode || 'practice';
  const isExam = studyMode === 'exam';
  
  const vendorName = cert?.vendor || 'ISC2';
  const certName = cert?.name || 'Certified in Cybersecurity';
  const shortName = cert?.shortName || 'CC';
  const examVersion = version || cert?.defaultVersion || examConfig?.version || '2026';
  const certLogo = cert?.logo || './assets/logos/CC-ISC2.png';
  const domains = examConfig?.domains || [];
  const totalQuestions = examConfig?.totalQuestions || 583;

  // Domain selection based on mode
  const practiceSelectedDomains = state.setup.practice.selectedDomains || new Set([1, 2, 3, 4, 5]);
  const activeDomainSet = isExam 
    ? new Set(domains.map((d) => d.id))
    : practiceSelectedDomains;

  // Calculate pool size for practice mode
  let practicePoolSize = 0;
  domains.forEach((d) => {
    if (practiceSelectedDomains.has(d.id)) {
      practicePoolSize += d.questionCount || 0;
    }
  });

  const practiceOrder = state.setup.practice.order || 'all';
  const practiceQuestionCount = Math.min(
    Math.max(1, state.setup.practice.questionCount ?? practicePoolSize),
    practicePoolSize || 1
  );

  const isStartDisabled = !isExam && practicePoolSize === 0;

  // Build domain rows HTML
  const domainRowsHtml = domains.map((d) => {
    const isChecked = activeDomainSet.has(d.id);
    let domainDisplayName = d.name.en;
    let domainShortName = d.shortName?.en || d.name.en;

    if (lang === 'both') {
      domainDisplayName = `${d.name.en} / ${d.name.th || d.name.en}`;
      domainShortName = `${d.shortName?.en || d.name.en} / ${d.shortName?.th || d.name.th || d.name.en}`;
    } else if (lang === 'th') {
      domainDisplayName = d.name.th || d.name.en;
      domainShortName = d.shortName?.th || d.name.th || d.name.en;
    }

    return `
      <div 
        class="domain-row ${isChecked ? 'checked' : ''} ${isExam ? 'locked' : ''}" 
        data-domain-id="${d.id}" 
        role="${isExam ? 'presentation' : 'checkbox'}" 
        aria-checked="${isChecked}" 
        ${isExam ? 'aria-disabled="true"' : 'tabindex="0"'}
      >
        <input 
          type="checkbox" 
          class="domain-checkbox" 
          id="dom-check-${d.id}" 
          ${isChecked ? 'checked' : ''} 
          ${isExam ? 'disabled' : ''} 
          tabindex="-1" 
          aria-hidden="true"
        >
        <div class="dnum">${d.id}</div>
        <div class="dname-wrap">
          <span class="dname dname-full">${domainDisplayName}</span>
          <span class="dname dname-short">${domainShortName}</span>
        </div>
        <div class="dcount-badge">${d.questionCount || 0}</div>
      </div>
    `;
  }).join('');

  // Order section HTML depending on mode
  const orderSectionHtml = isExam
    ? `
      <div class="form-group order-group">
        <div class="section-label">${t('orderLabel', lang)}</div>
        <div class="order-locked-box">
          <svg class="locked-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="4" y1="20" x2="21" y2="3"></line>
            <polyline points="21 16 21 21 16 21"></polyline>
            <line x1="15" y1="15" x2="21" y2="21"></line>
            <line x1="4" y1="4" x2="9" y2="9"></line>
          </svg>
          <span>${t('examOrderLocked', lang)}</span>
        </div>
      </div>
    `
    : `
      <div class="form-group order-group">
        <div class="section-label">${t('orderLabel', lang)}</div>
        <div class="mode-cards">
          <div class="mode-card ${practiceOrder === 'all' ? 'selected' : ''}" id="order-card-sequential" data-order="all" role="button" tabindex="0">
            <div class="mode-card-header">
              <h3>${t('sequentialTitle', lang)}</h3>
            </div>
            <span class="mode-card-desc">${t('sequentialDesc', lang)}</span>
          </div>

          <div class="mode-card ${practiceOrder === 'random' ? 'selected' : ''}" id="order-card-random" data-order="random" role="button" tabindex="0">
            <div class="mode-card-header">
              <h3>${t('randomTitle', lang)}</h3>
            </div>
            <span class="mode-card-desc">${t('randomDesc', lang)}</span>
          </div>
        </div>
      </div>
    `;

  // Domains header actions HTML depending on mode
  const domainsHeaderActionsHtml = isExam
    ? `<span class="domains-locked-badge">${t('examAllDomainsLocked', lang)}</span>`
    : `
      <div class="domain-actions">
        <button type="button" class="btn-text-action" id="btn-select-all">${t('selectAll', lang)}</button>
        <span class="action-separator">·</span>
        <button type="button" class="btn-text-action" id="btn-clear-all">${t('clearAll', lang)}</button>
      </div>
    `;

  // Question Count vs Exam Settings section HTML
  const questionSettingsSectionHtml = isExam
    ? `
      <div class="form-group exam-settings-group">
        <div class="section-label">${t('examSettingsLabel', lang)}</div>
        <div class="exam-settings-cards">
          <div class="exam-stat-card">
            <span class="exam-stat-label">QUESTIONS</span>
            <span class="exam-stat-value">125</span>
          </div>
          <div class="exam-stat-card">
            <span class="exam-stat-label">TIME LIMIT</span>
            <span class="exam-stat-value">120 min</span>
          </div>
        </div>
        <div class="exam-distribution-info">
          ${t('examDistributionNote', lang)}
        </div>
      </div>
    `
    : `
      <div class="form-group count-group">
        <div class="count-row">
          <label class="form-label" for="question-count-input">
            ${t('questionsCountLabel', lang)}
          </label>
          <input 
            type="number" 
            id="question-count-input" 
            class="form-input count-input" 
            min="1" 
            max="${practicePoolSize || 1}" 
            value="${practiceQuestionCount}"
            ${practicePoolSize === 0 ? 'disabled' : ''}
          >
        </div>
        ${practicePoolSize === 0 
          ? `<div class="warn domain-warn">${t('warnSelectDomain', lang)}</div>` 
          : `<div class="pool-count-info">${practicePoolSize} ${t('availableSuffix', lang)}</div>`
        }
      </div>
    `;

  const startBtnLabel = isExam 
    ? t('startExamBtn', lang) 
    : t('startPracticeBtn', lang);

  container.innerHTML = `
    <div class="start-screen-wrapper">
      <!-- Top Navigation Bar -->
      <div class="start-top-bar">
        <button class="btn btn-secondary btn-back-home" id="btn-back-home" title="Back to Certifications">
          ${t('backToCertifications', lang)}
        </button>

        <div class="start-top-actions">
          <!-- Language Segmented Control -->
          <div class="lang-toggle-wrap" role="group" aria-label="Language selection">
            <div class="lang-toggle">
              <button class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en" id="btn-lang-en">EN</button>
              <button class="lang-btn ${lang === 'th' ? 'active' : ''}" data-lang="th" id="btn-lang-th">TH</button>
              <button class="lang-btn ${lang === 'both' ? 'active' : ''}" data-lang="both" id="btn-lang-both">EN+TH</button>
            </div>
          </div>

          <!-- Theme Toggle Button -->
          ${renderThemeToggle('start-theme-toggle')}
        </div>
      </div>

      <!-- Main Setup Panel Card -->
      <div class="start-panel-card">
        <!-- Compact Certification Branding Header -->
        <div class="start-header-hero">
          <div class="start-header-brand">
            <img src="${certLogo}" alt="${vendorName} ${shortName} Logo" class="start-logo">
            <div class="start-title-meta">
              <h1 class="start-title">${certName} (${shortName})</h1>
              <div class="start-meta-badges">
                <span class="meta-badge meta-badge-vendor">${vendorName}</span>
                <span class="meta-badge meta-badge-outline">${examVersion} ${t('outlineVersion', lang)}</span>
                <span class="meta-badge meta-badge-count">${totalQuestions} ${t('questionsUnit', lang)}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="start-form-divider"></div>

        <!-- Study Mode Section -->
        <div class="form-group mode-group">
          <div class="section-label">${t('studyModeLabel', lang)}</div>
          <div class="mode-cards">
            <div class="mode-card ${!isExam ? 'selected' : ''}" id="mode-card-practice" data-mode="practice" role="button" tabindex="0">
              <div class="mode-card-header">
                <h3>${t('practiceTitle', lang)}</h3>
              </div>
              <span class="mode-card-desc">${t('practiceDesc', lang)}</span>
            </div>

            <div class="mode-card ${isExam ? 'selected' : ''}" id="mode-card-exam" data-mode="exam" role="button" tabindex="0">
              <div class="mode-card-header">
                <h3>${t('examTitle', lang)}</h3>
              </div>
              <span class="mode-card-desc">${t('examDesc', lang)}</span>
            </div>
          </div>
          <div class="mode-note-box">
            ${isExam ? t('examNote', lang) : t('practiceNote', lang)}
          </div>
        </div>

        <!-- Order Section -->
        ${orderSectionHtml}

        <!-- Domain Selection Section -->
        <div class="form-group domains-group">
          <div class="domains-header-row">
            <div class="section-label">${t('domainsLabel', lang)}</div>
            ${domainsHeaderActionsHtml}
          </div>

          <div class="domain-grid" id="domain-grid">
            ${domainRowsHtml}
          </div>
        </div>

        <!-- Question Count / Exam Settings Section -->
        ${questionSettingsSectionHtml}

        <!-- Start Quiz Action Button -->
        <div class="start-btn-row">
          <button 
            type="button" 
            class="btn btn-primary btn-start-quiz" 
            id="btn-start-quiz" 
            ${isStartDisabled ? 'disabled' : ''}
          >
            ${startBtnLabel}
          </button>
        </div>
      </div>
    </div>
  `;

  // --- Attach Event Listeners ---

  // Back Button
  const backBtn = container.querySelector('#btn-back-home');
  if (backBtn && onBackToHome) {
    backBtn.addEventListener('click', () => {
      onBackToHome();
    });
  }

  // Theme Toggle Button
  attachThemeToggle(container, 'start-theme-toggle');

  // Language Buttons
  const langBtns = container.querySelectorAll('.lang-btn');
  langBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      if (selectedLang) {
        updateSetup({ language: selectedLang });
        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      }
    });
  });

  // Study Mode Cards
  const practiceCard = container.querySelector('#mode-card-practice');
  const examCard = container.querySelector('#mode-card-exam');
  if (practiceCard) {
    practiceCard.addEventListener('click', () => {
      updateSetup({ studyMode: 'practice' });
      renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
    });
  }
  if (examCard) {
    examCard.addEventListener('click', () => {
      updateSetup({ studyMode: 'exam' });
      renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
    });
  }

  // Order Cards (Practice Mode only)
  if (!isExam) {
    const seqCard = container.querySelector('#order-card-sequential');
    const randCard = container.querySelector('#order-card-random');
    if (seqCard) {
      seqCard.addEventListener('click', () => {
        updatePracticeSetup({ order: 'all' });
        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      });
    }
    if (randCard) {
      randCard.addEventListener('click', () => {
        updatePracticeSetup({ order: 'random' });
        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      });
    }
  }

  // Domain Selection Rows (Practice Mode only)
  if (!isExam) {
    const domainRowElements = container.querySelectorAll('.domain-row:not(.locked)');
    domainRowElements.forEach((row) => {
      const domainId = parseInt(row.getAttribute('data-domain-id'), 10);
      const toggle = () => {
        const nextSet = new Set(practiceSelectedDomains);
        if (nextSet.has(domainId)) {
          nextSet.delete(domainId);
        } else {
          nextSet.add(domainId);
        }

        // Recalculate new pool size and auto-reset question count to full pool
        let newPool = 0;
        domains.forEach((d) => {
          if (nextSet.has(d.id)) newPool += d.questionCount || 0;
        });

        updatePracticeSetup({ 
          selectedDomains: nextSet,
          questionCount: newPool
        });

        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      };

      row.addEventListener('click', toggle);
      row.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggle();
        }
      });

      const checkbox = row.querySelector('.domain-checkbox');
      if (checkbox) {
        checkbox.addEventListener('click', (e) => {
          e.stopPropagation();
          const nextSet = new Set(practiceSelectedDomains);
          if (checkbox.checked) {
            nextSet.add(domainId);
          } else {
            nextSet.delete(domainId);
          }

          let newPool = 0;
          domains.forEach((d) => {
            if (nextSet.has(d.id)) newPool += d.questionCount || 0;
          });

          updatePracticeSetup({ 
            selectedDomains: nextSet,
            questionCount: newPool
          });

          renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
        });
      }
    });

    // Select All / Clear All Buttons (Practice Mode only)
    const selectAllBtn = container.querySelector('#btn-select-all');
    if (selectAllBtn) {
      selectAllBtn.addEventListener('click', () => {
        const allIds = domains.map((d) => d.id);
        const nextSet = new Set(allIds);
        let newPool = 0;
        domains.forEach((d) => { newPool += d.questionCount || 0; });

        updatePracticeSetup({ 
          selectedDomains: nextSet,
          questionCount: newPool
        });

        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      });
    }

    const clearAllBtn = container.querySelector('#btn-clear-all');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        updatePracticeSetup({ 
          selectedDomains: new Set(),
          questionCount: 0
        });

        renderCertStartScreen(container, cert, version, onBackToHome, examConfig, onStartQuiz);
      });
    }

    // Question Count Input (Practice Mode only)
    const countInput = container.querySelector('#question-count-input');
    if (countInput) {
      const handleCountChange = (val) => {
        const parsed = parseInt(val, 10) || 1;
        const validVal = Math.min(Math.max(1, parsed), practicePoolSize || 1);
        updatePracticeSetup({ questionCount: validVal });
        countInput.value = validVal;
      };
      countInput.addEventListener('change', (e) => handleCountChange(e.target.value));
      countInput.addEventListener('blur', (e) => handleCountChange(e.target.value));
    }
  }

  // Start Quiz Button
  const startQuizBtn = container.querySelector('#btn-start-quiz');
  if (startQuizBtn) {
    startQuizBtn.addEventListener('click', async () => {
      if (!isExam && practicePoolSize === 0) return;

      startQuizBtn.disabled = true;
      const originalText = startQuizBtn.textContent;
      startQuizBtn.textContent = lang === 'th' ? 'กำลังโหลดคำถาม...' : 'Loading Questions...';

      try {
        if (isExam) {
          const allDomainIds = (examConfig.domains || []).map((d) => d.id);
          const questionsByDomain = await loadQuestionsForDomains({
            vendorId: cert?.vendorId || 'isc2',
            certId: cert?.certId || 'cc',
            version: examVersion,
            domainIds: allDomainIds
          });

          const questions = createExamSession({
            questionsByDomain,
            examConfig,
            totalQuestions: 125
          });

          startQuizSession({
            mode: 'exam',
            questions,
            timeMinutes: 120
          });
        } else {
          const countInput = container.querySelector('#question-count-input');
          const countVal = parseInt(countInput ? countInput.value : practiceQuestionCount, 10) || practiceQuestionCount;
          const validCount = Math.min(Math.max(1, countVal), practicePoolSize);
          updatePracticeSetup({ questionCount: validCount });

          const selectedDomainIds = Array.from(state.setup.practice.selectedDomains);
          const questionsByDomain = await loadQuestionsForDomains({
            vendorId: cert?.vendorId || 'isc2',
            certId: cert?.certId || 'cc',
            version: examVersion,
            domainIds: selectedDomainIds
          });

          const questions = createPracticeSession({
            questionsByDomain,
            selectedDomainIds,
            order: state.setup.practice.order,
            questionCount: validCount
          });

          startQuizSession({
            mode: 'practice',
            questions
          });
        }

        if (onStartQuiz) {
          onStartQuiz();
        }
      } catch (err) {
        console.error('Failed to start quiz session:', err);
        startQuizBtn.disabled = false;
        startQuizBtn.textContent = originalText;
      }
    });
  }
}
