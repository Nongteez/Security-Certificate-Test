/**
 * Theme management module.
 * Handles dark/light theme switching and persistence via localStorage.
 */

export const THEME_STORAGE_KEY = 'sec_cert_test_theme';

/**
 * Gets the current active theme from localStorage, defaulting to 'dark'.
 * @returns {'dark' | 'light'}
 */
export function getSavedTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return saved === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

/**
 * Gets the current theme (alias for getSavedTheme).
 * @returns {'dark' | 'light'}
 */
export function getCurrentTheme() {
  return getSavedTheme();
}

/**
 * Applies the given theme to document.documentElement and saves it to localStorage.
 * @param {'dark' | 'light'} theme
 */
export function applyTheme(theme) {
  const activeTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', activeTheme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
  } catch (e) {
    // LocalStorage may be unavailable in private browsing
  }
  return activeTheme;
}

/**
 * Toggles the theme between dark and light, applying the new theme.
 * @returns {'dark' | 'light'} The newly applied theme
 */
export function toggleTheme() {
  const current = getSavedTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  return applyTheme(next);
}

/**
 * Initializes the theme on application bootstrap.
 */
export function initTheme() {
  const theme = getSavedTheme();
  applyTheme(theme);
  return theme;
}
