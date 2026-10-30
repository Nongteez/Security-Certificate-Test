/**
 * Application Bootstrap.
 * Entry point for SEC CERT TEST Vanilla SPA.
 */

import { initTheme } from './core/theme.js';
import { renderApp } from './ui/renderer.js';
import { state } from './core/state.js';
import certifications from '../data/certifications.js';
import { parseReadingDeepLink, loadReadingProgress } from './core/reading-progress.js';

// Apply saved or default theme
initTheme();

/**
 * Initializes state from deep-link URL hash if present on cold start.
 */
function handleInitialRoute() {
  if (typeof window === 'undefined') return;
  const hash = window.location.hash;
  const deepLink = parseReadingDeepLink(hash);

  if (deepLink.isReadingRoute) {
    state.selectedCertification = certifications[0];
    state.selectedExamVersion = '2026';
    state.screen = 'reading-notes';
    state.reading = state.reading || {};

    if (deepLink.domainId) {
      state.reading.selectedDomainId = deepLink.domainId;
      state.reading.targetAnchorId = deepLink.anchorId || null;
      state.reading._hasRestoredProgress = true;
    } else {
      const progress = loadReadingProgress();
      const resumeDomain = progress.lastDomainId || 1;
      const dProg = progress.domains?.[resumeDomain];
      state.reading.selectedDomainId = resumeDomain;
      state.reading.targetAnchorId = dProg?.lastTopicId || null;
      state.reading.targetScrollY = dProg?.lastScrollY || 0;
      state.reading._hasRestoredProgress = true;
    }
  }
}

/**
 * Listens for browser hash changes (Back / Forward navigation, anchor links).
 */
function setupHashRouting() {
  if (typeof window === 'undefined') return;
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    const deepLink = parseReadingDeepLink(hash);

    if (deepLink.isReadingRoute) {
      if (!state.selectedCertification) {
        state.selectedCertification = certifications[0];
        state.selectedExamVersion = '2026';
      }
      state.reading = state.reading || {};
      const domainChanged = deepLink.domainId && deepLink.domainId !== state.reading.selectedDomainId;

      if (state.screen !== 'reading-notes') {
        state.screen = 'reading-notes';
        if (deepLink.domainId) {
          state.reading.selectedDomainId = deepLink.domainId;
          state.reading.targetAnchorId = deepLink.anchorId || null;
        }
        renderApp();
      } else if (domainChanged) {
        state.reading.selectedDomainId = deepLink.domainId;
        state.reading.targetAnchorId = deepLink.anchorId || null;
        renderApp();
      } else if (deepLink.anchorId) {
        const targetEl = document.getElementById(deepLink.anchorId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (state.screen === 'reading-notes' && (!hash || hash === '#')) {
      state.screen = 'exam-versions';
      renderApp();
    }
  });
}

// Bootstrap router before rendering
handleInitialRoute();
setupHashRouting();

// Initialize application on DOM content loaded or immediately if already parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => renderApp());
} else {
  renderApp();
}

