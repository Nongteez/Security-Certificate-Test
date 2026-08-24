/**
 * Application Bootstrap.
 * Entry point for SEC CERT TEST Vanilla SPA.
 */

import { initTheme } from './core/theme.js';
import { renderApp } from './ui/renderer.js';

// Apply saved or default theme
initTheme();

// Initialize application on DOM content loaded or immediately if already parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
