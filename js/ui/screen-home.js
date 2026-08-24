/**
 * Home screen UI.
 * Renders SEC CERT TEST Home page displaying available and roadmap certifications
 * loaded dynamically from data/certifications.js, along with the Theme Toggle.
 */

import { getSavedTheme, toggleTheme } from '../core/theme.js';

const SUN_ICON = `
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

const MOON_ICON = `
  <svg class="theme-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;

/**
 * Renders the Home screen into the given container.
 * @param {HTMLElement} container - The DOM container (#app)
 * @param {Array} certifications - List of certifications from data/certifications.js
 * @param {Function} onSelectCert - Callback invoked when an enabled certification is selected
 */
export function renderHomeScreen(container, certifications, onSelectCert) {
  const availableCerts = certifications.filter(c => c.enabled);
  const comingSoonCerts = certifications.filter(c => !c.enabled);
  const currentTheme = getSavedTheme();
  const isDark = currentTheme === 'dark';

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
    <div class="cert-card cert-card-disabled">
      <div class="cert-card-header">
        <div class="cert-card-brand">
          ${cert.logo ? `<img src="${cert.logo}" alt="${cert.name} Logo" class="cert-card-logo muted">` : ''}
          <span class="cert-vendor-badge muted">${cert.vendor}</span>
        </div>
        <span class="cert-code-chip muted">${cert.shortName}</span>
      </div>
      <div class="cert-card-body">
        <h3 class="cert-card-title muted">${cert.name}</h3>
        <p class="cert-card-desc muted">${cert.description || ''}</p>
      </div>
      <div class="cert-card-footer">
        <span class="status-badge status-coming-soon">COMING SOON</span>
        <button class="btn btn-disabled" disabled>
          Not Available Yet
        </button>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <header class="home-header">
      <div class="home-header-main">
        <div class="home-branding">
          <img src="./assets/logos/LOGO.png" alt="SEC CERT TEST Logo" class="home-logo">
          <div class="home-title-group">
            <div class="subheading">CERTIFICATION PRACTICE PLATFORM</div>
            <h1 class="home-title">SEC CERT TEST</h1>
            <p class="home-tagline">
              Interactive practice questions and mock exams for cybersecurity and networking certifications.
            </p>
          </div>
        </div>
        <div class="home-header-actions">
          <button
            id="theme-toggle-btn"
            class="theme-toggle"
            aria-label="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
            title="${isDark ? 'Switch to light mode' : 'Switch to dark mode'}"
          >
            ${isDark ? SUN_ICON : MOON_ICON}
          </button>
        </div>
      </div>
    </header>

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

  // Attach event listener to Theme Toggle button
  const themeToggleBtn = container.querySelector('#theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = toggleTheme();
      const nowDark = newTheme === 'dark';
      themeToggleBtn.innerHTML = nowDark ? SUN_ICON : MOON_ICON;
      themeToggleBtn.setAttribute('aria-label', nowDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggleBtn.setAttribute('title', nowDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }
}
