/**
 * Main UI renderer and screen router.
 * Dispatches view rendering to appropriate screen modules based on application state.
 */

import { state, selectCertification, selectExamVersion, resetToHome } from '../core/state.js';
import { getExamVersions } from '../../data/exam-versions.js';
import certifications from '../../data/certifications.js';
import { loadExamConfig } from '../core/question-loader.js';
import { renderHomeScreen } from './screen-home.js';
import { renderExamVersionsScreen } from './screen-versions.js';
import { renderCertStartScreen } from './screen-start.js';
import { renderQuizScreen } from './screen-quiz.js';
import { renderResultsScreen, renderReviewWrongScreen } from './screen-results.js';

/**
 * Main render function. Reads state.screen and mounts the active view into #app.
 */
export async function renderApp(versionError = '') {
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
        },
        () => {
          renderApp();
        }
      );
      break;

    case 'exam-versions': {
      const cert = state.selectedCertification;
      if (!cert || !getExamVersions(cert.id).length) {
        resetToHome();
        return renderApp();
      }
      renderExamVersionsScreen(container, cert, async id => {
        const config = await loadExamConfig(cert.vendorId, cert.certId, id);
        if (state.screen !== 'exam-versions' || state.selectedCertification !== cert) return;
        if (!selectExamVersion(id, config)) {
          return renderApp('This exam version is unavailable or its configuration could not be loaded.');
        }
        return renderApp();
      }, () => {
        resetToHome();
        renderApp();
      }, versionError);
      break;
    }

    case 'cert-start': {
      const cert = state.selectedCertification;
      const version = state.selectedExamVersion;
      const examConfig = await loadExamConfig(
        state.selectedCertification?.vendorId || 'isc2',
        state.selectedCertification?.certId || 'cc',
        state.selectedExamVersion
      );
      if (state.screen !== 'cert-start' || state.selectedCertification !== cert || state.selectedExamVersion !== version) return;
      if (!examConfig && getExamVersions(cert?.id).length) {
        state.selectedExamVersion = null;
        state.screen = 'exam-versions';
        return renderApp('This exam version is unavailable or its configuration could not be loaded.');
      }
      renderCertStartScreen(
        container,
        state.selectedCertification,
        state.selectedExamVersion,
        () => {
          if (getExamVersions(state.selectedCertification?.id).length) {
            state.selectedExamVersion = null;
            state.screen = 'exam-versions';
          } else {
            resetToHome();
          }
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
