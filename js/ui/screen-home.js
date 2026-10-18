/**
 * Home screen UI.
 * Renders SEC CERT TEST Home page displaying available and roadmap certifications
 * loaded dynamically from data/certifications.js, active quiz resume banner if an unfinished session exists,
 * along with the Theme Toggle.
 */

import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';
import { loadActiveQuizSession } from '../core/storage.js';
import { loadQuestionsForSession } from '../core/question-loader.js';
import { resumeQuizSession } from '../core/quiz-engine.js';
import { state } from '../core/state.js';

/**
 * Renders the Home screen into the given container.
 * @param {HTMLElement} container - The DOM container (#app)
 * @param {Array} certifications - List of certifications from data/certifications.js
 * @param {Function} onSelectCert - Callback invoked when an enabled certification is selected
 * @param {Function} [onResumeQuiz] - Callback invoked when an active quiz session is resumed
 */
export function renderHomeScreen(container, certifications, onSelectCert, onResumeQuiz) {
  const availableCerts = certifications.filter(c => c.enabled);
  const comingSoonCerts = certifications.filter(c => !c.enabled);
  const activeSession = loadActiveQuizSession();

  const availableCardsHtml = availableCerts.map(cert => `
    <div class="cert-card cert-card-available" data-cert-id="${cert.id}">
      <div class="cert-card-header">
        <div class="cert-card-brand">
          ${cert.logo ? `<img src="${cert.logo}" alt="${cert.name} Logo" class="cert-card-logo">` : ''}
          <span class="cert-vendor-badge">${cert.vendor}</span>
        </div>
        <span class="cert-code-chip">${cert.shortName}</span>
      </div>
      <div class="cert-card-body">
        <h3 class="cert-card-title">${cert.name}</h3>
        <p class="cert-card-desc">${cert.description || ''}</p>
      </div>
      <div class="cert-card-footer">
        <span class="status-badge status-available">AVAILABLE</span>
        <button class="btn btn-primary btn-open-cert" data-cert-id="${cert.id}">
          Open Certification →
        </button>
      </div>
    </div>
  `).join('');

  const comingSoonCardsHtml = comingSoonCerts.map(cert => `
    <div class="cert-card cert-card-disabled" data-cert-id="${cert.id}">
      <div class="cert-card-header">
        <div class="cert-card-brand">
          ${cert.logo ? `<img src="${cert.logo}" alt="${cert.name} Logo" class="cert-card-logo">` : ''}
          <span class="cert-vendor-badge">${cert.vendor}</span>
        </div>
        <span class="cert-code-chip">${cert.shortName}</span>
      </div>
      <div class="cert-card-body">
        <h3 class="cert-card-title">${cert.name}</h3>
        <p class="cert-card-desc">${cert.description || ''}</p>
      </div>
      <div class="cert-card-footer">
        <span class="status-badge status-planned">ROADMAP</span>
        <button class="btn btn-secondary btn-disabled" disabled>
          In Development
        </button>
      </div>
    </div>
  `).join('');

  let resumeBannerHtml = '';
  if (activeSession) {
    const answeredCount = activeSession.answers ? activeSession.answers.filter(a => a !== null).length : 0;
    const progressPercent = Math.round(((activeSession.currentIndex + 1) / (activeSession.questionCount || 1)) * 100);
    const modeLabel = activeSession.mode === 'exam' ? 'EXAM MODE' : 'PRACTICE MODE';

    resumeBannerHtml = `
      <section class="cert-section resume-section">
        <div class="resume-session-card">
          <div class="resume-session-header">
            <span class="resume-badge"><span class="pulse-dot"></span> UNFINISHED QUIZ IN PROGRESS</span>
            <span class="resume-mode-tag">${modeLabel}</span>
          </div>
          <div class="resume-session-body">
            <h3 class="resume-title">${activeSession.certName || 'ISC2 Certified in Cybersecurity'}</h3>
            <div class="resume-progress-bar-wrap">
              <div class="resume-progress-bar-fill" style="width: ${progressPercent}%"></div>
            </div>
            <div class="resume-progress-meta">
              <span>Question ${activeSession.currentIndex + 1} of ${activeSession.questionCount}</span>
              <span>${answeredCount} answered</span>
            </div>
          </div>
          <div class="resume-actions">
            <p role="alert" id="home-resume-error" hidden></p>
            <button type="button" class="btn btn-primary" id="btn-home-resume">
              Resume Quiz →
            </button>
          </div>
        </div>
      </section>
    `;
  }

  container.innerHTML = `
    <header class="home-header">
      <div class="home-header-main">
        <div class="home-header-top">
          <img src="./assets/logos/LOGO.png" alt="SEC CERT TEST Logo" class="home-logo">
          <div class="home-header-actions">
            ${renderThemeToggle('theme-toggle-btn')}
          </div>
        </div>
        <div class="home-title-group">
          <div class="subheading">CERTIFICATION PRACTICE PLATFORM</div>
          <h1 class="home-title">SEC CERT TEST</h1>
          <p class="home-tagline">
            Interactive practice questions and mock exams for cybersecurity and networking certifications.
          </p>
        </div>
      </div>
    </header>

    ${resumeBannerHtml}

    <section class="cert-section">
      <div class="section-label">Available Certifications</div>
      <div class="cert-grid cert-grid-available">
        ${availableCardsHtml}
      </div>
    </section>

    <section class="cert-section" style="margin-top: 44px;">
      <div class="section-label">Coming Soon</div>
      <div class="cert-grid cert-grid-coming-soon">
        ${comingSoonCardsHtml}
      </div>
    </section>
  `;

  // Attach event listeners to available certification cards & buttons
  const availableElements = container.querySelectorAll('.cert-card-available, .btn-open-cert');
  availableElements.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const certId = el.getAttribute('data-cert-id');
      const selected = certifications.find(c => c.id === certId);
      if (selected && onSelectCert) {
        onSelectCert(selected);
      }
    });
  });

  // Attach event listener for Home Resume button
  const homeResumeBtn = container.querySelector('#btn-home-resume');
  if (homeResumeBtn && activeSession) {
    homeResumeBtn.addEventListener('click', async () => {
      homeResumeBtn.disabled = true;
      const origText = homeResumeBtn.textContent;
      homeResumeBtn.textContent = 'Loading Session...';

      try {
        const questionsByDomain = await loadQuestionsForSession(activeSession);
        if (state.screen !== 'home' || JSON.stringify(loadActiveQuizSession()) !== JSON.stringify(activeSession)) return;

        const res = resumeQuizSession({
          storedSession: activeSession,
          questionsByDomain,
          certifications
        });

        if (res.success && onResumeQuiz) {
          onResumeQuiz();
        } else if (!res.success) {
          throw new Error('The saved quiz could not be restored. Saved progress has been kept.');
        }
      } catch (err) {
        console.error('Failed to resume active session from home:', err);
        homeResumeBtn.disabled = false;
        homeResumeBtn.textContent = origText;
        const error = container.querySelector('#home-resume-error');
        if (error) {
          error.textContent = err.message;
          error.hidden = false;
        }
      }
    });
  }

  // Attach event listener to Theme Toggle button
  attachThemeToggle(container, 'theme-toggle-btn');
}
