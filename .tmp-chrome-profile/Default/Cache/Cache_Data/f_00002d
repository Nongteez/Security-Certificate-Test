import { element, localize, pair } from './dom.js';

/** Prototype 1 — Hero / Lesson Introduction (Slide 1) */
export function renderHeroIntro(host, { slide, language }) {
  const doc = host.ownerDocument;
  const deck = element(doc, 'div', 'learning-hero-deck');

  // Left column: Narrative, mission headline, and core principle
  const leftCol = element(doc, 'div', 'hero-content-col');
  const eyebrow = element(doc, 'span', 'hero-eyebrow', language === 'th' ? 'เป้าหมายพื้นฐานของความมั่นคงปลอดภัย' : 'FOUNDATIONAL OBJECTIVE');
  const headline = element(doc, 'h3', 'hero-headline', language === 'th'
    ? 'ปกป้องทรัพย์สินสำคัญเพื่อให้องค์กรบรรลุพันธกิจได้อย่างปลอดภัย'
    : 'Protecting Critical Assets to Achieve the Business Mission');

  const leadBlock = slide.blocks?.find(b => b.kind === 'text');
  const leadText = leadBlock ? localize(element(doc, 'p', 'hero-lead-text'), leadBlock.text, language) : null;

  const principleBlock = slide.blocks?.filter(b => b.kind === 'text')[1];
  const principleCard = element(doc, 'div', 'hero-principle-card');
  const principleBadge = element(doc, 'div', 'hero-principle-header');
  const principleIcon = element(doc, 'span', 'hero-principle-icon', '🛡️');
  const principleTitle = element(doc, 'span', 'hero-principle-title', language === 'th' ? 'หลักการสำคัญ (Core Principle)' : 'Core Principle');
  principleBadge.append(principleIcon, principleTitle);
  const principleText = principleBlock
    ? localize(element(doc, 'p', 'hero-principle-text'), principleBlock.text, language)
    : element(doc, 'p', 'hero-principle-text', language === 'th'
        ? 'มาตรการควบคุมทุกประการในหลักสูตร ISC2 มีขึ้นเพื่อสนับสนุนเสาหลัก 3 ประการนี้'
        : 'Every security control in the curriculum exists to uphold one or more of these fundamental pillars.');
  principleCard.append(principleBadge, principleText);

  leftCol.append(eyebrow, headline);
  if (leadText) leftCol.append(leadText);
  leftCol.append(principleCard);

  // Right column: Conceptual Visual (Substantial CIA Triad Emblem)
  const rightCol = element(doc, 'div', 'hero-visual-col');
  const emblemCard = element(doc, 'div', 'hero-emblem-card');

  // SVG CIA Triad visual
  const svg = doc.createElementNS?.('http://www.w3.org/2000/svg', 'svg') || doc.createElement('svg');
  svg.setAttribute('viewBox', '0 0 340 280');
  svg.setAttribute('class', 'hero-triad-svg');
  svg.setAttribute('aria-hidden', 'true');

  svg.innerHTML = `
    <defs>
      <linearGradient id="heroGradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#1d4ed8" />
      </linearGradient>
      <linearGradient id="heroGradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" />
        <stop offset="100%" stop-color="#047857" />
      </linearGradient>
      <linearGradient id="heroGradAmber" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#b45309" />
      </linearGradient>
      <linearGradient id="heroCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1e293b" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <!-- Connecting Triangle lines -->
    <polygon points="170,42 55,225 285,225" fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-width="3" stroke-dasharray="6,4" />
    <line x1="170" y1="42" x2="170" y2="148" stroke="rgba(59, 130, 246, 0.2)" stroke-width="2" />
    <line x1="55" y1="225" x2="170" y2="148" stroke="rgba(16, 185, 129, 0.2)" stroke-width="2" />
    <line x1="285" y1="225" x2="170" y2="148" stroke="rgba(245, 158, 11, 0.2)" stroke-width="2" />

    <!-- Center Core: Assets & Mission -->
    <circle cx="170" cy="148" r="36" fill="url(#heroCoreGrad)" stroke="#3b82f6" stroke-width="2" />
    <text x="170" y="142" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700" letter-spacing="0.05em">ORGANIZATION</text>
    <text x="170" y="157" text-anchor="middle" fill="#ffffff" font-size="10.5" font-weight="800">ASSETS & MISSION</text>

    <!-- Top Node: Confidentiality -->
    <circle cx="170" cy="42" r="28" fill="url(#heroGradBlue)" stroke="#60a5fa" stroke-width="2" />
    <text x="170" y="37" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="900">C</text>
    <text x="170" y="51" text-anchor="middle" fill="#dbeafe" font-size="8" font-weight="700">CONFIDENTIALITY</text>

    <!-- Bottom Left Node: Integrity -->
    <circle cx="55" cy="225" r="28" fill="url(#heroGradGreen)" stroke="#34d399" stroke-width="2" />
    <text x="55" y="220" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="900">I</text>
    <text x="55" y="234" text-anchor="middle" fill="#d1fae5" font-size="8" font-weight="700">INTEGRITY</text>

    <!-- Bottom Right Node: Availability -->
    <circle cx="285" cy="225" r="28" fill="url(#heroGradAmber)" stroke="#fbbf24" stroke-width="2" />
    <text x="285" y="220" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="900">A</text>
    <text x="285" y="234" text-anchor="middle" fill="#fef3c7" font-size="8" font-weight="700">AVAILABILITY</text>
  `;

  emblemCard.append(svg);

  // 3 Pillar Summary Mini-Rows under the diagram
  const miniList = element(doc, 'div', 'hero-triad-pills');
  const pillarsMeta = [
    { key: 'C', tone: 'blue', en: 'Confidentiality: Protecting against unauthorized disclosure', th: 'Confidentiality (การรักษาความลับ): ป้องกันการเปิดเผยข้อมูลโดยมิชอบ' },
    { key: 'I', tone: 'green', en: 'Integrity: Protecting against unauthorized alteration or tampering', th: 'Integrity (ความถูกต้องครบถ้วน): ป้องกันการแก้ไขหรือดัดแปลงข้อมูล' },
    { key: 'A', tone: 'amber', en: 'Availability: Ensuring timely, dependable access for authorized users', th: 'Availability (ความพร้อมใช้งาน): รับรองความพร้อมใช้งานอย่างต่อเนื่อง' }
  ];
  for (const p of pillarsMeta) {
    const pill = element(doc, 'div', `hero-mini-pill tone-${p.tone}`);
    const badge = element(doc, 'span', 'hero-pill-badge', p.key);
    const label = element(doc, 'span', 'hero-pill-label', language === 'th' ? p.th : p.en);
    pill.append(badge, label);
    miniList.append(pill);
  }
  emblemCard.append(miniList);
  rightCol.append(emblemCard);

  deck.append(leftCol, rightCol);
  host.append(deck);
  return { destroy() {} };
}

/** Prototype 2 — CIA Triad Concept Diagram (Slide 2) */
export function renderPillars(host, { slide, language }) {
  const doc = host.ownerDocument;
  const visual = slide.visual;
  if (!visual) return;

  const deck = element(doc, 'div', 'learning-pillars-deck');

  // Substantial central CIA Triad relationship diagram
  const diagramBar = element(doc, 'div', 'pillars-diagram-bar');
  const svg = doc.createElementNS?.('http://www.w3.org/2000/svg', 'svg') || doc.createElement('svg');
  svg.setAttribute('viewBox', '0 0 740 78');
  svg.setAttribute('class', 'pillars-diagram-svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.innerHTML = `
    <!-- Interconnecting Vectors linking C, I, A -->
    <line x1="120" y1="39" x2="370" y2="39" stroke="rgba(59, 130, 246, 0.35)" stroke-width="2.5" stroke-dasharray="5,3" />
    <line x1="370" y1="39" x2="620" y2="39" stroke="rgba(16, 185, 129, 0.35)" stroke-width="2.5" stroke-dasharray="5,3" />
    <path d="M 120 39 Q 370 4 620 39" fill="none" stroke="rgba(245, 158, 11, 0.3)" stroke-width="2" stroke-dasharray="4,3" />

    <!-- Left Connector Badge: Confidentiality -->
    <rect x="50" y="19" width="140" height="40" rx="8" fill="#1e3a8a" stroke="#3b82f6" stroke-width="1.5" />
    <text x="120" y="35" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="700">PILLAR C</text>
    <text x="120" y="49" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">SECRECY</text>

    <!-- Center Hub: Security Goals -->
    <rect x="290" y="13" width="160" height="52" rx="10" fill="#0f172a" stroke="#60a5fa" stroke-width="2" />
    <text x="370" y="34" text-anchor="middle" fill="#93c5fd" font-size="9.5" font-weight="700" letter-spacing="0.05em">FOUNDATIONAL CORE</text>
    <text x="370" y="51" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="800">CIA TRIAD GOALS</text>

    <!-- Right Connector Badge: Availability -->
    <rect x="550" y="19" width="140" height="40" rx="8" fill="#78350f" stroke="#f59e0b" stroke-width="1.5" />
    <text x="620" y="35" text-anchor="middle" fill="#fde68a" font-size="9" font-weight="700">PILLAR A</text>
    <text x="620" y="49" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800">ACCESS</text>
  `;
  diagramBar.append(svg);
  deck.append(diagramBar);

  // 3-pillar architectural cards with English term retention in Thai mode
  const grid = element(doc, 'div', 'pillars-grid');
  for (const pillar of visual.pillars || []) {
    const card = element(doc, 'article', `pillar-card tone-${pillar.tone || 'blue'}`);

    const header = element(doc, 'div', 'pillar-card-header');
    const badge = element(doc, 'span', 'pillar-symbol-badge', pillar.symbol || '');
    const titleGroup = element(doc, 'div', 'pillar-title-group');
    const termObj = {
      en: pillar.term.en,
      th: `${pillar.term.en} (${pillar.term.th})`
    };
    const term = localize(element(doc, 'h3', 'pillar-term-title'), termObj, language);
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

  // Horizontal Timeline Axis Track with progression indicators
  const timelineAxis = element(doc, 'div', 'incident-timeline-track');
  const axisLine = element(doc, 'div', 'timeline-track-line');
  axisLine.setAttribute('aria-hidden', 'true');
  timelineAxis.append(axisLine);
  deck.append(timelineAxis);

  // Stages row with connector arrows
  const stagesRow = element(doc, 'div', 'incident-stages-row');
  const stages = visual.stages || [];
  const phaseTimestamps = [
    { en: 'T₀ · Infiltration', th: 'T₀ · เริ่มต้นบุกรุก' },
    { en: 'T + 4h · Lockout', th: 'T + 4 ชม. · ระบบหยุดชะงัก' },
    { en: 'T + 24h · Tampering', th: 'T + 24 ชม. · ดัดแปลงข้อมูล' }
  ];

  stages.forEach((stage, index) => {
    const card = element(doc, 'article', `incident-stage-card tone-${stage.tone || 'blue'}`);

    // Timeline phase header with chronological marker
    const cardHead = element(doc, 'div', 'stage-card-header');
    const phaseBadge = element(doc, 'span', 'stage-phase-badge', `${stage.symbol || index + 1}`);
    const timeTag = element(doc, 'span', 'stage-time-tag', language === 'th' ? phaseTimestamps[index]?.th : phaseTimestamps[index]?.en);
    const label = localize(element(doc, 'h4', 'stage-label'), stage.label, language);
    cardHead.append(phaseBadge, timeTag, label);

    const eventBox = element(doc, 'div', 'stage-event-box');
    const eventText = localize(element(doc, 'p', 'stage-event-text'), stage.event, language);
    eventBox.append(eventText);

    const impactBox = element(doc, 'div', 'stage-impact-box');
    const impactHeader = element(doc, 'div', 'stage-impact-header');
    const impactTag = element(doc, 'span', 'stage-impact-tag', language === 'th' ? 'ผลกระทบหลัก' : 'Harm:');
    const pillarName = stage.pillar?.en || '';
    const pillarObj = {
      en: pillarName,
      th: `${pillarName} (${stage.pillar?.th || ''})`
    };
    const pillarBadge = localize(element(doc, 'span', 'stage-pillar-badge'), pillarObj, language);
    impactHeader.append(impactTag, pillarBadge);

    const impactText = localize(element(doc, 'p', 'stage-impact-text'), stage.impact, language);
    impactBox.append(impactHeader, impactText);

    card.append(cardHead, eventBox, impactBox);
    stagesRow.append(card);

    if (index < stages.length - 1) {
      const connector = element(doc, 'div', 'incident-connector');
      const arrow = element(doc, 'span', 'connector-arrow', '➔');
      const flowLabel = element(doc, 'span', 'connector-flow-text', index === 0 ? 'Cascade' : 'Escalation');
      flowLabel.setAttribute('aria-hidden', 'true');
      connector.append(arrow, flowLabel);
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

export function renderScenarioDecision(host, { slide, language, signal, interactionState = {} }) {
  const doc = host.ownerDocument;
  const visual = slide.visual;
  if (!visual) return;

  const deck = element(doc, 'div', 'learning-scenario-deck');
  let revealed = interactionState.revealed === true;
  let selectedKey = interactionState.selectedKey || null;

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
    interactionState.revealed = revealed; interactionState.selectedKey = selectedKey;
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
