/**
 * Home screen UI.
 * Renders SEC CERT TEST Home page displaying available and roadmap certifications
 * loaded dynamically from data/certifications.js, along with the Theme Toggle.
 */

import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';

/**
 * Renders the Home screen into the given container.
 * @param {HTMLElement} container - The DOM container (#app)
 * @param {Array} certifications - List of certifications from data/certifications.js
 * @param {Function} onSelectCert - Callback invoked when an enabled certification is selected
 */
export function renderHomeScreen(container, certifications, onSelectCert) {
  const availableCerts = certifications.filter(c => c.enabled);
  const comingSoonCerts = certifications.filter(c => !c.enabled);

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
          ${renderThemeToggle('theme-toggle-btn')}
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
  attachThemeToggle(container, 'theme-toggle-btn');
}
