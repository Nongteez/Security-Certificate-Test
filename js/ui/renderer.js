/**
 * Main UI renderer and screen router.
 * Dispatches view rendering to appropriate screen modules based on application state.
 */

import { state, selectCertification, resetToHome } from '../core/state.js';
import certifications from '../../data/certifications.js';
import { loadExamConfig } from '../core/question-loader.js';
import { renderHomeScreen } from './screen-home.js';
import { renderCertStartScreen } from './screen-start.js';
import { renderQuizScreen } from './screen-quiz.js';
import { renderResultsScreen, renderReviewWrongScreen } from './screen-results.js';

/**
 * Main render function. Reads state.screen and mounts the active view into #app.
 */
export async function renderApp() {
  const container = document.getElementById('app');
  if (!container) {
    console.error('Root element #app not found');
    return;
  }

  switch (state.screen) {
    case 'home':
      renderHomeScreen(
        container,
        certifications,
        (selectedCert) => {
          selectCertification(selectedCert);
          renderApp();
        }
      );
      break;

    case 'cert-start': {
      const examConfig = await loadExamConfig(
        state.selectedCertification?.vendorId || 'isc2',
        state.selectedCertification?.certId || 'cc',
        state.selectedExamVersion || '2026'
      );
      renderCertStartScreen(
        container,
        state.selectedCertification,
        state.selectedExamVersion,
        () => {
          resetToHome();
          renderApp();
        },
        examConfig,
        () => {
          renderApp();
        }
      );
      break;
    }

    case 'quiz':
      renderQuizScreen(
        container,
        () => {
          renderApp();
        }
      );
      break;

    case 'results':
      renderResultsScreen(
        container,
        () => {
          renderApp();
        }
      );
      break;

    case 'review-wrong':
      renderReviewWrongScreen(
        container,
        () => {
          renderApp();
        }
      );
      break;

    default:
      console.warn(`Unknown screen state: ${state.screen}. Falling back to home.`);
      resetToHome();
      renderApp();
      break;
  }
}
