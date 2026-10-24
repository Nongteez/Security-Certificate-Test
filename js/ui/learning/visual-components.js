import { element, localize, pair } from './dom.js';

export function renderPillars(host, { slide, language }) {
  const doc = host.ownerDocument;
  const visual = slide.visual;
  if (!visual) return;

  const deck = element(doc, 'div', 'learning-pillars-deck');

  // 3-pillar architectural cards
  const grid = element(doc, 'div', 'pillars-grid');
  for (const pillar of visual.pillars || []) {
    const card = element(doc, 'article', `pillar-card tone-${pillar.tone || 'blue'}`);

    const header = element(doc, 'div', 'pillar-card-header');
    const badge = element(doc, 'span', 'pillar-symbol-badge', pillar.symbol || '');
    const titleGroup = element(doc, 'div', 'pillar-title-group');
    const term = localize(element(doc, 'h3', 'pillar-term-title'), pillar.term, language);
    titleGroup.append(term);
    header.append(badge, titleGroup);

    const questionBox = element(doc, 'div', 'pillar-question-box');
    const questionText = localize(element(doc, 'p', 'pillar-question-text'), pillar.question, language);
    questionBox.append(questionText);

    const summaryBox = element(doc, 'div', 'pillar-summary-box');
    const summaryText = localize(element(doc, 'p', 'pillar-summary-text'), pillar.summary, language);
    summaryBox.append(summaryText);

    card.append(header, questionBox, summaryBox);
    grid.append(card);
  }
  deck.append(grid);

  // Takeaway bar at the bottom
  if (visual.takeaway) {
    const takeawayBar = element(doc, 'aside', 'pillars-takeaway-bar');
    const icon = element(doc, 'span', 'pillars-takeaway-icon', '✦');
    const takeawayText = localize(element(doc, 'p', 'pillars-takeaway-text'), visual.takeaway, language);
    takeawayBar.append(icon, takeawayText);
    deck.append(takeawayBar);
  }

  host.append(deck);
  return { destroy() {} };
}

export function renderIncidentFlow(host, { slide, language }) {
  const doc = host.ownerDocument;
  const visual = slide.visual;
  if (!visual) return;

  const deck = element(doc, 'div', 'learning-incident-deck');

  // Top header: Lead text and case study title with disclaimer note
  const header = element(doc, 'div', 'incident-header-block');
  if (visual.lead) {
    const lead = localize(element(doc, 'p', 'incident-lead-text'), visual.lead, language);
    header.append(lead);
  }

  const caseBar = element(doc, 'div', 'incident-case-bar');
  if (visual.caseTitle) {
    const title = localize(element(doc, 'h3', 'incident-case-title'), visual.caseTitle, language);
    caseBar.append(title);
  }
  if (visual.note) {
    const note = localize(element(doc, 'span', 'incident-note-badge'), visual.note, language);
    caseBar.append(note);
  }
  header.append(caseBar);
  deck.append(header);

  // Stages row with connector arrows
  const stagesRow = element(doc, 'div', 'incident-stages-row');
  const stages = visual.stages || [];
  stages.forEach((stage, index) => {
    const card = element(doc, 'article', `incident-stage-card tone-${stage.tone || 'blue'}`);

    const cardHead = element(doc, 'div', 'stage-card-header');
    const phaseBadge = element(doc, 'span', 'stage-phase-badge', `${stage.symbol || index + 1}`);
    const label = localize(element(doc, 'h4', 'stage-label'), stage.label, language);
    cardHead.append(phaseBadge, label);

    const eventBox = element(doc, 'div', 'stage-event-box');
    const eventText = localize(element(doc, 'p', 'stage-event-text'), stage.event, language);
    eventBox.append(eventText);

    const impactBox = element(doc, 'div', 'stage-impact-box');
    const impactHeader = element(doc, 'div', 'stage-impact-header');
    const impactTag = element(doc, 'span', 'stage-impact-tag', 'Impact');
    const pillarBadge = localize(element(doc, 'span', 'stage-pillar-badge'), stage.pillar, language);
    impactHeader.append(impactTag, pillarBadge);

    const impactText = localize(element(doc, 'p', 'stage-impact-text'), stage.impact, language);
    impactBox.append(impactHeader, impactText);

    card.append(cardHead, eventBox, impactBox);
    stagesRow.append(card);

    if (index < stages.length - 1) {
      const connector = element(doc, 'div', 'incident-connector', '➔');
      connector.setAttribute('aria-hidden', 'true');
      stagesRow.append(connector);
    }
  });
  deck.append(stagesRow);

  // Exam insight takeaway
  if (visual.takeaway) {
    const takeaway = element(doc, 'aside', 'incident-takeaway-bar');
    const icon = element(doc, 'span', 'incident-takeaway-icon', '⚡');
    const takeawayText = localize(element(doc, 'p', 'incident-takeaway-text'), visual.takeaway, language);
    takeaway.append(icon, takeawayText);
    deck.append(takeaway);
  }

  host.append(deck);
  return { destroy() {} };
}

export function renderScenarioDecision(host, { slide, language, signal }) {
  const doc = host.ownerDocument;
  const visual = slide.visual;
  if (!visual) return;

  const deck = element(doc, 'div', 'learning-scenario-deck');
  let revealed = false;
  let selectedKey = null;

  // Dossier card
  const dossier = element(doc, 'article', 'scenario-dossier-card');
  const dossierHead = element(doc, 'div', 'scenario-dossier-header');
  const badge = element(doc, 'span', 'scenario-dossier-badge', 'Enterprise Scenario');
  dossierHead.append(badge);

  const narrative = localize(element(doc, 'p', 'scenario-narrative-text'), visual.scenario, language);
  dossier.append(dossierHead, narrative);
  deck.append(dossier);

  // Diagnostic Prompt Box
  const promptBox = element(doc, 'div', 'scenario-prompt-box');
  const promptText = localize(element(doc, 'p', 'scenario-prompt-text'), visual.prompt, language);
  promptBox.append(promptText);
  deck.append(promptBox);

  // Interactive decision cards
  const optionsGrid = element(doc, 'div', 'scenario-options-grid');
  const optionCards = [];

  for (const opt of visual.options || []) {
    const card = element(doc, 'div', `scenario-option-card tone-${opt.tone || 'slate'}`);
    card.setAttribute('data-slide-interactive', '');
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-pressed', 'false');

    const topRow = element(doc, 'div', 'option-top-row');
    const symbolBadge = element(doc, 'span', 'option-symbol-badge', opt.symbol || '');
    const label = localize(element(doc, 'span', 'option-label-text'), opt.label, language);
    const verdict = localize(element(doc, 'span', 'option-verdict-badge'), opt.verdict, language);
    verdict.hidden = true;
    topRow.append(symbolBadge, label, verdict);

    const reasonBox = element(doc, 'div', 'option-reason-box');
    const reasonText = localize(element(doc, 'p', 'option-reason-text'), opt.reason, language);
    reasonBox.append(reasonText);
    reasonBox.hidden = true;

    card.append(topRow, reasonBox);

    const onSelect = () => {
      selectedKey = opt.key;
      revealed = true;
      updateCards();
    };

    card.addEventListener('click', onSelect, { signal });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onSelect();
      }
    }, { signal });

    optionCards.push({ card, opt, verdict, reasonBox });
    optionsGrid.append(card);
  }
  deck.append(optionsGrid);

  // Action bar with reveal button
  const actionBar = element(doc, 'div', 'scenario-action-bar');
  const revealBtn = element(doc, 'button', 'btn btn-secondary scenario-reveal-btn');
  revealBtn.type = 'button';
  revealBtn.setAttribute('data-slide-interactive', '');

  function updateCards() {
    for (const item of optionCards) {
      const isSelected = item.opt.key === selectedKey;
      const isCorrect = item.opt.correct === true;

      item.card.classList.toggle('is-selected', isSelected);
      item.card.setAttribute('aria-pressed', String(isSelected));

      if (revealed) {
        item.card.classList.toggle('is-correct', isCorrect);
        item.card.classList.toggle('is-incorrect', !isCorrect);
        item.verdict.hidden = false;
        item.reasonBox.hidden = false;
      } else {
        item.card.classList.remove('is-correct', 'is-incorrect');
        item.verdict.hidden = true;
        item.reasonBox.hidden = true;
      }
    }
    const btnLabel = revealed
      ? pair('Hide Analysis', 'ซ่อนการวิเคราะห์')
      : pair('Reveal Expert Analysis', 'แสดงการวิเคราะห์ของผู้เชี่ยวชาญ');
    localize(revealBtn, btnLabel, 'en');
  }

  revealBtn.addEventListener('click', () => {
    revealed = !revealed;
    updateCards();
  }, { signal });

  updateCards();
  actionBar.append(revealBtn);
  deck.append(actionBar);

  host.append(deck);
  return { destroy() {} };
}

export function renderVisualThumbnail(host, { slide, language }) {
  const doc = host.ownerDocument;
  const isThai = language === 'th';
  host.append(element(doc, 'strong', '', slide.title[isThai ? 'th' : 'en']));

  if (slide.rendererId === 'pillars') {
    const preview = element(doc, 'div', 'thumb-preview-row');
    preview.append(
      element(doc, 'span', 'thumb-tag tone-blue', 'C'),
      element(doc, 'span', 'thumb-tag tone-green', 'I'),
      element(doc, 'span', 'thumb-tag tone-amber', 'A')
    );
    host.append(preview);
    host.append(element(doc, 'small', '', isThai ? '3 เสาหลักความปลอดภัย' : '3 Security Pillars'));
  } else if (slide.rendererId === 'incident-flow') {
    const preview = element(doc, 'div', 'thumb-preview-row');
    preview.append(
      element(doc, 'span', 'thumb-tag tone-blue', '1'),
      element(doc, 'span', 'thumb-arrow', '➔'),
      element(doc, 'span', 'thumb-tag tone-amber', '2'),
      element(doc, 'span', 'thumb-arrow', '➔'),
      element(doc, 'span', 'thumb-tag tone-green', '3')
    );
    host.append(preview);
    host.append(element(doc, 'small', '', isThai ? 'ลำดับผลกระทบลูกโซ่' : 'Cascading Sequence'));
  } else if (slide.rendererId === 'scenario-decision') {
    const preview = element(doc, 'div', 'thumb-preview-row');
    preview.append(
      element(doc, 'span', 'thumb-tag tone-slate', '?'),
      element(doc, 'span', 'thumb-arrow', '➔'),
      element(doc, 'span', 'thumb-tag tone-green', '✓')
    );
    host.append(preview);
    host.append(element(doc, 'small', '', isThai ? 'วิเคราะห์การตัดสินใจ' : 'Scenario Dilemma'));
  }
}
