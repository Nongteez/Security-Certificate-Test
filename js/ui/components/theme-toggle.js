/**
 * Shared Theme Toggle Component.
 * Used consistently across Home, Start, and Quiz screens.
 */

import { getCurrentTheme, toggleTheme } from '../../core/theme.js';

export const SUN_ICON = `
  <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
`;

export const MOON_ICON = `
  <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;

/**
 * Returns the HTML string for the theme toggle button.
 * @param {string} [buttonId='theme-toggle'] - ID for the button
 * @returns {string} HTML markup
 */
export function renderThemeToggle(buttonId = 'theme-toggle') {
  const currentTheme = getCurrentTheme();
  const icon = currentTheme === 'dark' ? SUN_ICON : MOON_ICON;
  return `
    <button type="button" class="theme-toggle" id="${buttonId}" title="Toggle color theme" aria-label="Toggle theme">
      ${icon}
    </button>
  `;
}

/**
 * Attaches click event listener to a theme toggle button that updates theme and icon in-place.
 * @param {HTMLElement} container - DOM container containing the button
 * @param {string} [buttonId='theme-toggle'] - ID of the button
 * @param {Function} [onToggle] - Optional callback after toggle
 */
export function attachThemeToggle(container, buttonId = 'theme-toggle', onToggle) {
  const btn = container.querySelector(`#${buttonId}`);
  if (btn) {
    btn.addEventListener('click', () => {
      const nextTheme = toggleTheme();
      btn.innerHTML = nextTheme === 'dark' ? SUN_ICON : MOON_ICON;
      if (onToggle) onToggle(nextTheme);
    });
  }
}

/**
 * Creates and returns a DOM theme toggle button element with click handler.
 * @param {Document} doc - Document instance to create element
 * @param {string} [buttonId='theme-toggle'] - ID for the button
 * @param {Function} [onToggle] - Optional callback after toggle
 * @param {AbortSignal} [signal] - Optional abort signal
 * @returns {HTMLElement} The created theme toggle button
 */
export function createThemeToggleButton(doc, buttonId = 'theme-toggle', onToggle, signal) {
  const btn = doc.createElement('button');
  btn.type = 'button';
  btn.className = 'theme-toggle';
  btn.id = buttonId;
  btn.title = 'Toggle color theme';
  btn.setAttribute('aria-label', 'Toggle theme');
  const updateIcon = (theme) => {
    btn.innerHTML = theme === 'dark' ? SUN_ICON : MOON_ICON;
  };
  try {
    updateIcon(getCurrentTheme());
  } catch {}
  btn.addEventListener('click', () => {
    const nextTheme = toggleTheme();
    updateIcon(nextTheme);
    if (doc.documentElement && typeof doc.documentElement.setAttribute === 'function') {
      try { doc.documentElement.setAttribute('data-theme', nextTheme); } catch {}
    }
    if (onToggle) onToggle(nextTheme);
  }, signal ? { signal } : undefined);
  return btn;
}
