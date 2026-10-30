/**
 * Main UI renderer and screen router.
 * Dispatches view rendering to appropriate screen modules based on application state.
 */

import { state, selectCertification, selectExamVersion, resetToHome, selectLearningScreen } from '../core/state.js';
import { getExamVersions } from '../../data/exam-versions.js';
import certifications from '../../data/certifications.js';
import { loadExamConfig } from '../core/question-loader.js';
import { renderHomeScreen } from './screen-home.js';
import { renderExamVersionsScreen } from './screen-versions.js';
import { renderCertStartScreen } from './screen-start.js';
import { renderQuizScreen } from './screen-quiz.js';
import { renderResultsScreen, renderReviewWrongScreen } from './screen-results.js';
import { renderVocabularyScreen } from './screen-vocabulary.js';
import { renderReadingScreen } from './screen-reading.js';
import { hasPublishedLearning } from '../core/learning-loader.js';
let learningRoutes;
let renderGeneration = 0;

/**
 * Main render function. Reads state.screen and mounts the active view into #app.
 */
export async function renderApp(versionError = '') {
  const generation = ++renderGeneration;
  learningRoutes?.disposeLearningRoute();
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
      const versionScreen = renderExamVersionsScreen(container, cert, async id => {
        if (id === 'isc2-cc-learning-slides') {
          if (!await hasPublishedLearning() || state.screen !== 'exam-versions' || state.selectedCertification !== cert) return;
          selectLearningScreen('learning-center'); return renderApp();
        }
        if (id === 'isc2-cc-vocabulary') {
          state.screen = 'vocabulary';
          return renderApp();
        }
        if (id === 'isc2-cc-reading-notes') {
          state.screen = 'reading-notes';
          return renderApp();
        }
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
      // Existing exam/vocabulary cards stay usable even if the new content request is slow.
      hasPublishedLearning().then(available => {
        if (generation === renderGeneration && state.screen === 'exam-versions' && state.selectedCertification === cert) versionScreen.setLearningAvailable(available);
      });
      break;
    }

    case 'learning-center':
    case 'learning-domain':
    case 'learning-lesson':
    case 'learning-viewer': {
      const module = await import('./learning/routes.js');
      if (generation !== renderGeneration) return;
      learningRoutes = module;
      module.renderLearningRoute(container, renderApp);
      break;
    }

    case 'vocabulary':
      renderVocabularyScreen(
        container,
        () => {
          state.screen = 'exam-versions';
          renderApp();
        }
      );
      break;

    case 'reading-notes':
      renderReadingScreen(
        container,
        () => {
          state.screen = 'exam-versions';
          renderApp();
        }
      );
      break;

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
