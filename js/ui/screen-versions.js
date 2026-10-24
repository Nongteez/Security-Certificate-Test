import { getExamVersions, resolveExamVersion } from '../../data/exam-versions.js';
import { state, updateSetup } from '../core/state.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';
import information, { informationLabels } from '../../data/exam-version-info.js';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function localized(value, language) {
  if (value.en === value.th) return `<span>${escapeHtml(value.en)}</span>`;
  const languages = language === 'both' ? ['en', 'th'] : [language === 'th' ? 'th' : 'en'];
  return languages.map(lang => `<span lang="${lang}">${escapeHtml(value[lang] || value.en)}</span>`).join('<br>');
}

function informationContent(info, language) {
  const loc = value => localized(value, language);
  const paragraph = value => `<p class="modal-desc">${loc(value)}</p>`;
  const section = (id, title, content) => `<section class="version-info-section" aria-labelledby="info-section-${id}"><h3 id="info-section-${id}">${loc(title)}</h3>${content}</section>`;
  const topics = list => `<ul class="version-info-topics">${list.map(topic => `<li>${loc(topic)}${topic.children ? topics(topic.children) : ''}</li>`).join('')}</ul>`;
  const table = (columns, rows, caption, footer = '', numeric = false) => `<div class="version-info-table-scroll"><table class="version-info-table">
    <caption>${loc(caption)}</caption>
    <thead><tr>${columns.map(column => `<th scope="col">${loc(column)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(row => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${cell}</th>` : `<td${numeric && index === row.length - 1 ? ' class="version-info-number"' : ''}>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
    ${footer ? `<tfoot><tr>${footer}</tr></tfoot>` : ''}
    </table></div>`;

  if (info.type === 'vocabulary') {
    return paragraph(info.subtitle) +
      section('overview', info.headings.overview, paragraph(info.description)) +
      section('vocabulary', info.headings.information, table(
        [info.headings.field, informationLabels.value], info.facts.map(fact => [loc(fact.label), loc(fact.value)]), info.headings.information)) +
      section('coverage', info.headings.coverage, paragraph(info.coverageNotice) + table(
        [informationLabels.domain, info.headings.topic], info.domains.map(domain => [String(domain.id), loc(domain.name)]), info.headings.coverage)) +
      section('goals', info.headings.goals, paragraph(info.goalsNotice) + `<ol class="version-info-topics">${info.goals.map(goal => `<li>${loc(goal)}</li>`).join('')}</ol>`) +
      section('plans', info.headings.plans, paragraph(info.plansNotice) + topics(info.plans)) +
      section('notice', info.headings.notice, paragraph(info.notice) + paragraph(info.comingSoon));
  }

  const isPracticeBank = info.totalQuestions !== undefined;
  const overview = paragraph(info.description) + (info.effectiveDate ? paragraph(info.effectiveDate) : '') +
    (info.bankNotice ? paragraph(info.bankNotice) : '') +
    `<p><span class="status-badge ${isPracticeBank ? 'status-available' : 'status-planned'}">${loc(isPracticeBank ? informationLabels.available : info.bankStatus)}</span></p>`;
  let html = section('overview', informationLabels.overview, overview);
  if (isPracticeBank) {
    html += section('summary', informationLabels.bankSummary, paragraph(info.bankSummary) + `<p><strong>${loc(informationLabels.practiceQuestions)}:</strong> <span>${info.totalQuestions}</span></p>`);
    html += section('counts', informationLabels.counts, table(
      [informationLabels.domain, informationLabels.name, informationLabels.practiceQuestions],
      info.domains.map(domain => [escapeHtml(domain.id), loc(domain.name), String(domain.questionCount)]),
      info.domainHeading,
      `<th scope="row" colspan="2">${loc(informationLabels.total)}</th><td class="version-info-number">${info.totalQuestions}</td>`, true));
    return html + section('notes', informationLabels.notes, paragraph(info.notice));
  }

  html += section('weights', informationLabels.weights, table(
    [informationLabels.domain, informationLabels.name, informationLabels.weight],
    info.domains.map(domain => [escapeHtml(domain.id), loc(domain.name), escapeHtml(domain.weight)]),
    info.domainHeading,
    `<th scope="row" colspan="2">${loc(informationLabels.officialTotal)}</th><td class="version-info-number">100%</td>`, true) + paragraph(info.roundingNote));

  html += section('details', informationLabels.details, info.details.map(detail => {
    const domain = info.domains.find(item => item.id === detail.id);
    return `<section class="version-domain-details" aria-labelledby="info-domain-${detail.id}">
      <h4 id="info-domain-${detail.id}">${loc(informationLabels.domain)} ${detail.id} — ${loc(domain.name)} (${escapeHtml(domain.weight)})</h4>
      ${detail.coverage ? `<h5>${loc(informationLabels.coverage)}</h5>${topics(detail.coverage)}${paragraph(detail.note)}` :
        detail.objectives.map(item => `<div class="version-objective"><h5>${escapeHtml(item.code)} ${loc(item.title)}</h5>${topics(item.topics)}</div>`).join('')}
    </section>`;
  }).join(''));

  html += section('ai', informationLabels.ai, paragraph(info.aiDescription) + table(
    [informationLabels.domain, informationLabels.aiCoverage],
    info.aiDomains.map((coverage, index) => [`D${index + 1}`, loc(coverage)]),
    informationLabels.ai) + paragraph(info.aiNotice) + `<h4>${loc(informationLabels.topics)}</h4>${topics(info.topics)}`);

  html += section('exam', informationLabels.exam, table(
    [informationLabels.item, informationLabels.value],
    info.examFacts.map(fact => [loc(fact.label), fact.number ? `${escapeHtml(fact.number)}${fact.unit ? ` ${loc(fact.unit)}` : ''}` : loc(fact.value)]),
    informationLabels.exam) + paragraph(info.simulationNotice));

  return html + section('source', informationLabels.source, paragraph(info.notice));
}

export function renderExamVersionsScreen(container, cert, onSelectVersion, onBack, error = '', activeInfoId = null, learningAvailable = false) {
  // Shared across local language rerenders so an in-flight check updates the live card only.
  const learningAvailability = typeof learningAvailable === 'object' && learningAvailable !== null ? learningAvailable : { available: learningAvailable === true };
  const versions = getExamVersions(cert?.id);
  const language = state.setup.language;
  let openInfoId = null;
  let selectionPending = false;
  container.innerHTML = `
    <div class="start-screen-wrapper exam-versions-screen">
      <div id="version-selection-content">
      <div class="start-top-bar">
        <button type="button" class="btn btn-secondary btn-back-home" id="btn-versions-back">← Back to Certifications</button>
        <div class="start-top-actions">
          <div class="lang-toggle" role="group" aria-label="Language selection">
            ${['en', 'th', 'both'].map(lang => `<button type="button" class="lang-btn ${state.setup.language === lang ? 'active' : ''}" data-lang="${lang}">${lang === 'both' ? 'EN+TH' : lang.toUpperCase()}</button>`).join('')}
          </div>
          ${renderThemeToggle('versions-theme-toggle')}
        </div>
      </div>
      <div class="start-panel-card">
        <div class="start-header-hero">
          <div class="start-header-brand">
            <img src="${cert.logo}" alt="${cert.vendor} ${cert.shortName} Logo" class="start-logo">
            <div class="start-title-meta">
              <h1 class="start-title">${cert.name} (${cert.shortName})</h1>
              <div class="start-meta-badges"><span class="meta-badge meta-badge-vendor">${cert.vendor}</span></div>
            </div>
          </div>
        </div>
        <div class="start-form-divider"></div>
        <section aria-labelledby="version-selection-title">
          <h2 class="section-label" id="version-selection-title">Select Exam Version</h2>
          <p role="alert" id="version-error" ${error ? '' : 'hidden'}></p>
          <div class="cert-grid">
            ${versions.map(version => {
              const isVocabulary = version.type === 'vocabulary';
              const isLearning = version.type === 'learning';
              const available = isLearning ? learningAvailability.available : isVocabulary ? (version.status === 'available') : !!resolveExamVersion(cert.id, version.id);
              const info = information[version.id];
              const viewLabel = info?.viewLabel || informationLabels.view;
              return `<article class="cert-card version-card ${available ? '' : 'cert-card-disabled'}"${isLearning ? ' data-learning-card' : ''}>
                ${info ? `<button type="button" class="btn-version-info" data-info-version-id="${version.id}" aria-label="${escapeHtml(viewLabel.en || 'View exam version information')}: ${escapeHtml(version.title)}" aria-haspopup="dialog" aria-controls="version-info-modal"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".75" fill="currentColor" stroke="none"/></svg></button>` : ''}
                <div class="cert-card-body">
                  <h3 class="cert-card-title">${escapeHtml(version.title)}</h3>
                  <p class="cert-card-desc">${escapeHtml(version.description)}</p>
                  ${version.questionCount !== undefined ? `<span class="meta-badge meta-badge-count">${version.questionCount} Questions</span>` : ''}
                  ${version.vocabularyCount !== undefined ? `<span class="meta-badge meta-badge-count">${version.vocabularyCount} Terms</span>` : ''}
                </div>
                <div class="cert-card-footer">
                  <span class="status-badge ${available ? 'status-available' : 'status-planned'}${isLearning ? ' learning-entry-status' : ''}">${available ? 'Available' : 'Coming Soon'}</span>
                  ${isLearning ? `<button type="button" class="btn ${available ? 'btn-primary' : 'btn-secondary btn-disabled'} btn-select-version btn-learning-entry" data-version-id="${version.id}"${available ? '' : ' disabled'}>${available ? 'Learning →' : 'Coming Soon'}</button>` : available ? `<button type="button" class="btn btn-primary btn-select-version" data-version-id="${version.id}">Select →</button>` : '<button type="button" class="btn btn-secondary btn-disabled" disabled>Coming Soon</button>'}
                </div>
              </article>`;
            }).join('')}
          </div>
        </section>
      </div>
      </div>
      <div class="setup-modal-backdrop version-info-backdrop" id="version-info-modal" hidden>
        <div class="setup-modal-content version-info-dialog" role="dialog" aria-modal="true" aria-labelledby="version-info-title">
          <h2 class="modal-title" id="version-info-title" tabindex="-1"></h2>
          <div id="version-info-content"></div>
          <button type="button" class="btn btn-secondary modal-close-btn" id="btn-version-info-close">Close</button>
        </div>
      </div>
    </div>`;
  const overlay = container.querySelector('#version-info-modal');
  const title = container.querySelector('#version-info-title');
  const content = container.querySelector('#version-info-content');
  const closeButton = container.querySelector('#btn-version-info-close');
  const background = container.querySelector('#version-selection-content');
  const body = typeof document !== 'undefined' ? document.body : null;
  let savedOverflow;
  let trigger;
  const closeInformation = () => {
    if (!openInfoId) return;
    overlay.hidden = true;
    background.inert = false;
    if (body) body.style.overflow = savedOverflow;
    openInfoId = null;
    trigger?.focus();
  };
  const openInformation = (id, button) => {
    const version = versions.find(v => v.id === id);
    const info = information[id];
    if (selectionPending || !version || !info || !overlay || !title || !content || !closeButton || !background) return;
    savedOverflow = body?.style.overflow;
    openInfoId = id;
    trigger = button;
    title.innerHTML = localized({ en: version.title, th: info.titleTh }, language);
    content.innerHTML = informationContent(info, language);
    content.scrollTop = 0;
    closeButton.textContent = 'Close';
    overlay.hidden = false;
    background.inert = true;
    if (body) body.style.overflow = 'hidden';
    title.focus();
  };
  const infoButtons = container.querySelectorAll('.btn-version-info');
  infoButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      if (!openInfoId) openInformation(button.getAttribute('data-info-version-id'), button);
    });
  });
  closeButton?.addEventListener('click', closeInformation);
  overlay?.addEventListener('click', event => {
    if (event.target === overlay) closeInformation();
  });
  overlay?.addEventListener('keydown', event => {
    if (!openInfoId) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeInformation();
    } else if (event.key === 'Tab') {
      // Close is the dialog's only tab stop; the heading receives initial reading focus.
      event.preventDefault();
      closeButton.focus();
    }
  });
  const errorElement = container.querySelector('#version-error');
  if (errorElement) errorElement.textContent = error;
  container.querySelector('#btn-versions-back')?.addEventListener('click', onBack);
  container.querySelectorAll('.btn-select-version').forEach(button => {
    button.addEventListener('click', async () => {
      if (selectionPending || openInfoId) return;
      const id = button.getAttribute('data-version-id');
      const targetVersion = versions.find(v => v.id === id);
      if (!targetVersion) return;
      if (targetVersion.type === 'learning' && !learningAvailability.available) return;
      if (!['vocabulary', 'learning'].includes(targetVersion.type) && !resolveExamVersion(cert.id, id)) return;
      if (targetVersion.type === 'vocabulary' && targetVersion.status !== 'available') return;
      selectionPending = true;
      const controls = [...infoButtons, ...container.querySelectorAll('.lang-btn')];
      controls.forEach(control => { control.disabled = true; });
      try {
        await onSelectVersion(id);
      } finally {
        selectionPending = false;
        controls.forEach(control => { control.disabled = false; });
      }
    });
  });
  container.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      if (selectionPending) return;
      const currentInfoId = openInfoId;
      closeInformation();
      updateSetup({ language: button.getAttribute('data-lang') });
      renderExamVersionsScreen(container, cert, onSelectVersion, onBack, error, currentInfoId, learningAvailability);
    });
  });
  attachThemeToggle(container, 'versions-theme-toggle');
  if (activeInfoId) {
    const button = Array.from(infoButtons).find(item => item.getAttribute('data-info-version-id') === activeInfoId);
    if (button) openInformation(activeInfoId, button);
  }
  return {
    setLearningAvailable(value) {
      learningAvailability.available = value === true;
      const card = container.querySelector('[data-learning-card]');
      const action = container.querySelector('.btn-learning-entry');
      const status = container.querySelector('.learning-entry-status');
      if (!card || !action || !status) return;
      const available = learningAvailability.available;
      card.classList.toggle('cert-card-disabled', !available);
      action.className = `btn ${available ? 'btn-primary' : 'btn-secondary btn-disabled'} btn-select-version btn-learning-entry`;
      action.disabled = !available;
      action.textContent = available ? 'Learning →' : 'Coming Soon';
      status.className = `status-badge ${available ? 'status-available' : 'status-planned'} learning-entry-status`;
      status.textContent = available ? 'Available' : 'Coming Soon';
    }
  };
}
