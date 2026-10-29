import { element, localize } from './dom.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

const SCENES = new Map([
  ['slide-01-grc-foundations', ['grc-roof-cycle', 3]],
  ['slide-02-purpose-of-grc', ['purpose-clusters', 7]],
  ['slide-03-importance-of-grc', ['benefits-vs-failures', 11]],
  ['slide-04-grc-frameworks', ['framework-selector', 4]],
  ['slide-05-grc-distinctions', ['dual-distinctions', 4]],
  ['slide-06-applied-grc-scenario', ['applied-scenario', 4]]
]);

export function hasGrcFoundationsPresentation({ lesson, slide }) {
  const scene = SCENES.get(slide?.id);
  const b = slide?.blocks;
  return Boolean(
    lesson?.id === 'lesson-d2-01-grc-foundations' &&
    scene &&
    b?.length === 5 &&
    b[0]?.kind === 'text' &&
    b[1]?.kind === 'table' &&
    b[2]?.kind === 'text' &&
    b[3]?.kind === 'list' &&
    b[4]?.kind === 'text' &&
    b[1].rows?.length === scene[1] &&
    b[1].rows.every(row => Array.isArray(row) && row.length === 3)
  );
}

const ART_SPECS = {
  roof: [
    ['path', { d: 'M16 62 80 22l64 40H16Z' }],
    ['path', { d: 'M28 62v58M80 62v58M132 62v58M16 120h128M10 134h140' }],
    ['circle', { cx: '80', cy: '45', r: '7' }]
  ],
  compass: [
    ['circle', { cx: '80', cy: '80', r: '58' }],
    ['path', { d: 'm104 46-14 44-34 24 14-44 34-24ZM80 12v12M80 136v12M12 80h12M136 80h12' }]
  ],
  radar: [
    ['path', { d: 'm80 16 54 21v40c0 33-23 55-54 69-31-14-54-36-54-69V37l54-21Z' }],
    ['circle', { cx: '80', cy: '78', r: '24' }],
    ['path', { d: 'M80 78 97 61M80 54v10' }]
  ],
  seal: [
    ['rect', { x: '30', y: '18', width: '100', height: '124', rx: '10' }],
    ['path', { d: 'M50 52h60M50 76h60M50 100h34' }],
    ['path', { d: 'm94 106 10 10 20-22' }]
  ],
  clusterStrategy: [
    ['circle', { cx: '80', cy: '80', r: '54' }],
    ['circle', { cx: '80', cy: '80', r: '24' }],
    ['path', { d: 'M80 16v20M80 124v20M16 80h20M124 80h20' }]
  ],
  clusterUnity: [
    ['rect', { x: '22', y: '26', width: '48', height: '48', rx: '8' }],
    ['rect', { x: '90', y: '26', width: '48', height: '48', rx: '8' }],
    ['rect', { x: '56', y: '88', width: '48', height: '48', rx: '8' }],
    ['path', { d: 'M70 50h20M56 74l16 14M104 74 88 88' }]
  ],
  clusterEfficiency: [
    ['path', { d: 'M80 22v116M44 40h72M30 40l-14 34h28L30 40Zm100 0-14 34h28l-14-34Z' }],
    ['path', { d: 'M52 138h56' }]
  ],
  positiveShield: [
    ['path', { d: 'm80 14 56 22v42c0 34-24 56-56 70-32-14-56-36-56-70V36l56-22Z' }],
    ['path', { d: 'm54 80 18 18 36-38' }]
  ],
  warningTriangle: [
    ['path', { d: 'M80 20 144 134H16L80 20Z' }],
    ['path', { d: 'M80 62v36' }],
    ['circle', { cx: '80', cy: '114', r: '4' }]
  ],
  nistWheel: [
    ['circle', { cx: '80', cy: '80', r: '24' }],
    ['circle', { cx: '80', cy: '80', r: '56' }],
    ['path', { d: 'M80 24v32M128 52 101 68M128 108l-27-16M80 136v-32M32 108l27-16M32 52l27 16' }]
  ],
  isoCycle: [
    ['path', { d: 'M80 22a58 58 0 0 1 54 38M134 100a58 58 0 0 1-108 0M26 60A58 58 0 0 1 80 22' }],
    ['path', { d: 'm122 58 14 4 4-14M38 102l-14-4-4 14' }],
    ['path', { d: 'm62 80 13 13 25-27' }]
  ],
  cobitGrid: [
    ['rect', { x: '22', y: '22', width: '116', height: '32', rx: '6' }],
    ['rect', { x: '22', y: '68', width: '52', height: '68', rx: '6' }],
    ['rect', { x: '86', y: '68', width: '52', height: '68', rx: '6' }],
    ['path', { d: 'M48 54v14M112 54v14' }]
  ],
  lawScale: [
    ['path', { d: 'M24 50 80 20l56 30H24ZM36 50v64M66 50v64M94 50v64M124 50v64M20 114h120M14 130h132' }]
  ],
  operationsGear: [
    ['circle', { cx: '80', cy: '80', r: '24' }],
    ['path', { d: 'M80 20v18M80 122v18M20 80h18M122 80h18M38 38l13 13M109 109l13 13M122 38l-13 13M51 109l-13 13' }]
  ],
  scenarioBrief: [
    ['rect', { x: '24', y: '28', width: '112', height: '104', rx: '10' }],
    ['path', { d: 'M58 28V18h44v10M46 66h68M46 90h46M46 112h32' }]
  ]
};

function createArt(doc, type) {
  const svg = doc.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 160 160');
  svg.setAttribute('class', 'grf-art');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  const group = doc.createElementNS(SVG_NS, 'g');
  group.setAttribute('fill', 'none');
  group.setAttribute('stroke', 'currentColor');
  group.setAttribute('stroke-width', '4');
  group.setAttribute('stroke-linecap', 'round');
  group.setAttribute('stroke-linejoin', 'round');

  for (const [tag, attrs] of ART_SPECS[type] || ART_SPECS.compass) {
    const shape = doc.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      shape.setAttribute(k, v);
    }
    group.append(shape);
  }
  svg.append(group);
  return svg;
}

export function renderGrcFoundationsPresentation(host, context) {
  const { slide } = context;
  const doc = host.ownerDocument;
  const [kind] = SCENES.get(slide.id);
  const language = context.language === 'th' ? 'th' : 'en';
  const slideNumber = String([...SCENES.keys()].indexOf(slide.id) + 1).padStart(2, '0');
  const rows = slide.blocks[1].rows;

  const put = (tag, cls, pair) => localize(element(doc, tag, cls), pair, language);

  const root = element(doc, 'section', `grf-scene grf-${kind}`);
  root.setAttribute('data-grc-foundations-composition', kind);
  root.setAttribute('lang', language);

  const header = element(doc, 'header', 'grf-header');
  header.append(
    element(doc, 'p', 'grf-kicker', `DOMAIN 2 · OBJECTIVE 2.1 · ${slideNumber} / 06`),
    put('h3', 'grf-title', slide.title),
    put('p', 'grf-lead', slide.blocks[0].text)
  );

  const main = element(doc, 'div', 'grf-main');
  const footer = put('footer', 'grf-footer', slide.blocks[4].text);
  root.append(header, main, footer);
  host.append(root);

  if (kind === 'grc-roof-cycle') {
    const roof = element(doc, 'div', 'grf-roof-banner');
    roof.append(
      createArt(doc, 'roof'),
      put('div', 'grf-roof-copy', {
        en: 'Business Alignment Roof — Security decisions support organizational mission & business objectives',
        th: 'หลังคาเป้าหมายธุรกิจ (Business Alignment) — ทุกการตัดสินใจด้านความปลอดภัยมุ่งสนับสนุน Business Objectives'
      })
    );

    const triad = element(doc, 'div', 'grf-triad-grid');
    const pillarMeta = [
      { code: 'G', icon: 'compass', flow: { en: 'Direction & Oversight →', th: 'กำหนดทิศทางและกำกับดูแล →' } },
      { code: 'R', icon: 'radar', flow: { en: 'Risk Priorities →', th: 'ชี้ลำดับความเสี่ยง →' } },
      { code: 'C', icon: 'seal', flow: { en: '↺ Verified Assurance', th: '↺ ยืนยันการปฏิบัติตามข้อกำหนด' } }
    ];

    rows.forEach((row, index) => {
      const meta = pillarMeta[index];
      const card = element(doc, 'article', `grf-pillar grf-pillar-${meta.code.toLowerCase()}`);
      const cardTop = element(doc, 'div', 'grf-pillar-top');
      cardTop.append(element(doc, 'span', 'grf-badge', meta.code), createArt(doc, meta.icon));
      const example = element(doc, 'div', 'grf-example-box');
      example.append(
        put('span', 'grf-example-tag', { en: 'MFA in Action', th: 'ตัวอย่าง MFA' }),
        put('p', 'grf-note', row[2])
      );
      card.append(
        cardTop,
        put('h4', 'grf-term', row[0]),
        put('p', 'grf-copy', row[1]),
        example,
        put('p', 'grf-cycle-link', meta.flow)
      );
      triad.append(card);
    });

    main.append(roof, triad);
  } else if (kind === 'purpose-clusters') {
    const clusterDefs = [
      {
        icon: 'clusterStrategy',
        badge: '01',
        title: { en: 'Strategy & Decisions', th: 'ทิศทางและการตัดสินใจ' },
        indices: [0, 5]
      },
      {
        icon: 'clusterUnity',
        badge: '02',
        title: { en: 'Risk & Control Unity', th: 'เอกภาพด้านความเสี่ยงและการควบคุม' },
        indices: [1, 3, 4]
      },
      {
        icon: 'clusterEfficiency',
        badge: '03',
        title: { en: 'Obligations & Efficiency', th: 'การทำตามข้อบังคับและลดงานซ้ำซ้อน' },
        indices: [2, 6]
      }
    ];

    const grid = element(doc, 'div', 'grf-cluster-grid');
    for (const def of clusterDefs) {
      const col = element(doc, 'section', 'grf-cluster-col');
      const colHead = element(doc, 'div', 'grf-cluster-head');
      colHead.append(
        element(doc, 'span', 'grf-badge', def.badge),
        createArt(doc, def.icon),
        put('h4', 'grf-cluster-title', def.title)
      );
      const list = element(doc, 'div', 'grf-purpose-list');
      for (const rowIndex of def.indices) {
        const row = rows[rowIndex];
        const item = element(doc, 'article', 'grf-purpose-item');
        item.setAttribute('data-grc-purpose-item', String(rowIndex + 1));
        item.append(put('h5', 'grf-item-title', row[1]), put('p', 'grf-item-note', row[2]));
        list.append(item);
      }
      col.append(colHead, list);
      grid.append(col);
    }
    main.append(grid);
  } else if (kind === 'benefits-vs-failures') {
    const split = element(doc, 'div', 'grf-contrast-split');

    const positivePanel = element(doc, 'section', 'grf-contrast-panel grf-contrast-positive');
    const posHead = element(doc, 'div', 'grf-contrast-head');
    posHead.append(
      createArt(doc, 'positiveShield'),
      put('h4', 'grf-term', {
        en: 'With Effective GRC (7 Benefits)',
        th: 'เมื่อมี GRC ที่มีประสิทธิผล (ประโยชน์ 7 ข้อ)'
      })
    );
    const benefitGrid = element(doc, 'div', 'grf-benefit-grid');
    rows.slice(0, 7).forEach((row, index) => {
      const card = element(doc, 'article', 'grf-benefit-card');
      card.setAttribute('data-grc-benefit-item', String(index + 1));
      card.append(
        element(doc, 'span', 'grf-mini-index', String(index + 1).padStart(2, '0')),
        put('h5', 'grf-item-title', row[1]),
        put('p', 'grf-item-note', row[2])
      );
      benefitGrid.append(card);
    });
    positivePanel.append(posHead, benefitGrid);

    const warningPanel = element(doc, 'section', 'grf-contrast-panel grf-contrast-warning');
    const warnHead = element(doc, 'div', 'grf-contrast-head');
    warnHead.append(
      createArt(doc, 'warningTriangle'),
      put('h4', 'grf-term', {
        en: 'Without Effective GRC (4 Breakdowns)',
        th: 'หากขาด GRC ที่ดี (ความล้มเหลว 4 รูปแบบ)'
      })
    );
    const failureStack = element(doc, 'div', 'grf-failure-stack');
    rows.slice(7, 11).forEach((row, index) => {
      const card = element(doc, 'article', 'grf-failure-card');
      card.setAttribute('data-grc-failure-item', String(index + 1));
      card.append(
        element(doc, 'span', 'grf-warn-mark', `!${index + 1}`),
        put('h5', 'grf-item-title', row[1]),
        put('p', 'grf-item-note', row[2])
      );
      failureStack.append(card);
    });
    warningPanel.append(warnHead, failureStack);

    split.append(positivePanel, warningPanel);
    main.append(split);
  } else if (kind === 'framework-selector') {
    const fwMeta = [
      {
        icon: 'nistWheel',
        tag: { en: 'Cybersecurity Risk Framework', th: 'กรอบบริหาร Cybersecurity Risk' }
      },
      {
        icon: 'isoCycle',
        tag: { en: 'International ISMS Standard', th: 'มาตรฐานสากลระบบ ISMS' }
      },
      {
        icon: 'cobitGrid',
        tag: { en: 'Enterprise IT Governance', th: 'กรอบกำกับและบริหาร Enterprise IT' }
      }
    ];

    const selectorGrid = element(doc, 'div', 'grf-framework-grid');
    rows.slice(0, 3).forEach((row, index) => {
      const meta = fwMeta[index];
      const card = element(doc, 'article', `grf-framework-card grf-framework-${index}`);
      const top = element(doc, 'div', 'grf-framework-top');
      top.append(createArt(doc, meta.icon), put('span', 'grf-framework-tag', meta.tag));
      card.append(
        top,
        put('h4', 'grf-term', row[0]),
        put('p', 'grf-copy', row[1]),
        put('p', 'grf-note', row[2])
      );
      selectorGrid.append(card);
    });

    const boundaryRow = rows[3];
    const boundaryBanner = element(doc, 'section', 'grf-boundary-banner');
    boundaryBanner.append(
      createArt(doc, 'lawScale'),
      element(doc, 'div', 'grf-boundary-copy')
    );
    const boundaryCopy = boundaryBanner.children[1];
    boundaryCopy.append(
      put('h4', 'grf-boundary-title', boundaryRow[0]),
      put('p', 'grf-item-note', boundaryRow[1]),
      put('p', 'grf-boundary-rule', boundaryRow[2])
    );

    main.append(selectorGrid, boundaryBanner);
  } else if (kind === 'dual-distinctions') {
    const lanes = element(doc, 'div', 'grf-lanes-grid');

    const lane1 = element(doc, 'section', 'grf-lane grf-lane-roles');
    lane1.append(
      put('p', 'grf-lane-kicker', {
        en: 'BOUNDARY 01 · DIRECTION VS. EXECUTION',
        th: 'ขอบเขตที่ 1 · การกำกับทิศทาง vs. การนำไปปฏิบัติ'
      })
    );
    const pair1 = element(doc, 'div', 'grf-pair-stack');
    const govCard = element(doc, 'article', 'grf-role-card');
    govCard.append(createArt(doc, 'compass'), put('h4', 'grf-term', rows[0][0]), put('p', 'grf-copy', rows[0][1]), put('p', 'grf-note', rows[0][2]));
    const loopConnector = put('div', 'grf-connector-pill', {
      en: 'Direction & Oversight ↓   ·   ↑ Operational Evidence',
      th: 'ส่งทิศทางและนโยบาย ↓   ·   ↑ รายงานหลักฐานผลลัพธ์'
    });
    const mgmtCard = element(doc, 'article', 'grf-role-card grf-role-alt');
    mgmtCard.append(createArt(doc, 'operationsGear'), put('h4', 'grf-term', rows[1][0]), put('p', 'grf-copy', rows[1][1]), put('p', 'grf-note', rows[1][2]));
    pair1.append(govCard, loopConnector, mgmtCard);
    lane1.append(pair1);

    const lane2 = element(doc, 'section', 'grf-lane grf-lane-assurance');
    lane2.append(
      put('p', 'grf-lane-kicker', {
        en: 'BOUNDARY 02 · DYNAMIC EXPOSURE VS. RULE CONFORMANCE',
        th: 'ขอบเขตที่ 2 · การจัดการความเสี่ยงจริง vs. การทำตามข้อกำหนด'
      })
    );
    const pair2 = element(doc, 'div', 'grf-pair-stack');
    const riskCard = element(doc, 'article', 'grf-role-card');
    riskCard.append(createArt(doc, 'radar'), put('h4', 'grf-term', rows[2][0]), put('p', 'grf-copy', rows[2][1]), put('p', 'grf-note', rows[2][2]));
    const notEqualConnector = put('div', 'grf-connector-pill grf-connector-warn', {
      en: '≠  Compliant ≠ Secure (Checklist conformance never eliminates active risk)',
      th: '≠  Compliant ≠ Secure (ผ่านเกณฑ์ตรวจขั้นต่ำ ไม่ได้แปลว่าปลอดภัยจากทุกความเสี่ยง)'
    });
    const compCard = element(doc, 'article', 'grf-role-card grf-role-alt');
    compCard.append(createArt(doc, 'seal'), put('h4', 'grf-term', rows[3][0]), put('p', 'grf-copy', rows[3][1]), put('p', 'grf-note', rows[3][2]));
    pair2.append(riskCard, notEqualConnector, compCard);
    lane2.append(pair2);

    lanes.append(lane1, lane2);
    main.append(lanes);
  } else if (kind === 'applied-scenario') {
    const state = context.interactionState || {};
    const abort = new AbortController();
    const scenarioGrid = element(doc, 'div', 'grf-scenario-grid');
    const choicesWrap = element(doc, 'div', 'grf-scenario-choices');
    const feedback = element(doc, 'section', 'grf-scenario-feedback');
    feedback.setAttribute('data-grc-scenario-feedback', '');
    feedback.setAttribute('aria-live', 'polite');

    const optionLetters = ['A', 'B', 'C', 'D'];
    const buttons = rows.map((row, index) => {
      const btn = element(doc, 'button', 'grf-scenario-choice');
      btn.type = 'button';
      btn.setAttribute('data-grc-scenario-choice', String(index));
      btn.append(
        element(doc, 'span', 'grf-choice-letter', optionLetters[index]),
        put('span', 'grf-choice-title', row[0]),
        put('span', 'grf-choice-summary', row[1])
      );
      btn.addEventListener(
        'click',
        () => {
          state.choice = index;
          paint();
        },
        { signal: abort.signal }
      );
      choicesWrap.append(btn);
      return btn;
    });

    const paint = () => {
      const selected = Number.isInteger(state.choice) && state.choice >= 0 && state.choice < rows.length ? state.choice : -1;
      buttons.forEach((btn, idx) => {
        const active = idx === selected;
        btn.setAttribute('aria-pressed', String(active));
        btn.classList.toggle('is-selected', active);
      });

      if (selected < 0) {
        feedback.setAttribute('data-grc-outcome', 'pending');
        feedback.classList.remove('is-recommended', 'is-distractor');
        feedback.replaceChildren(
          createArt(doc, 'scenarioBrief'),
          put('p', 'grf-feedback-status', {
            en: 'Decision Prompt · Select an Option (A–D)',
            th: 'โจทย์ตัดสินใจ · เลือกแนวทาง A–D เพื่อดูผลการวิเคราะห์'
          }),
          put('h4', 'grf-term', {
            en: 'How should NovaPay establish GRC first?',
            th: 'NovaPay ควรวางรากฐาน GRC อย่างไรเป็นลำดับแรก?'
          }),
          put('p', 'grf-copy', {
            en: 'Evaluate each candidate response against Governance direction, Risk alignment, applicable Compliance, and framework roles (ISO/IEC 27001 ISMS & NIST CSF).',
            th: 'พิจารณาแต่ละตัวเลือกโดยเทียบกับหลัก Governance, การบริหารความเสี่ยง (Risk), ข้อกำหนดที่ใช้บังคับจริง (Compliance) และบทบาทของ ISO/IEC 27001 กับ NIST CSF'
          })
        );
        return;
      }

      const isRecommended = selected === 2;
      const chosenRow = rows[selected];
      feedback.setAttribute('data-grc-outcome', isRecommended ? 'recommended' : 'distractor');
      feedback.classList.toggle('is-recommended', isRecommended);
      feedback.classList.toggle('is-distractor', !isRecommended);
      feedback.replaceChildren(
        createArt(doc, isRecommended ? 'positiveShield' : 'warningTriangle'),
        put(
          'p',
          'grf-feedback-status',
          isRecommended
            ? { en: 'Recommended GRC Decision', th: 'แนวทางที่เหมาะสมที่สุดตามหลัก GRC' }
            : { en: 'Less Suitable — Governance Gap', th: 'ยังไม่เหมาะสม — มีช่องว่างด้าน GRC' }
        ),
        put('h4', 'grf-term', chosenRow[0]),
        put('p', 'grf-copy', chosenRow[1]),
        put('p', 'grf-note', chosenRow[2])
      );
    };

    const stop = () => abort.abort();
    context.signal?.addEventListener('abort', stop, { once: true });
    if (context.signal?.aborted) stop();

    paint();
    scenarioGrid.append(choicesWrap, feedback);
    main.append(scenarioGrid);

    return {
      destroy() {
        abort.abort();
        context.signal?.removeEventListener('abort', stop);
      }
    };
  }

  return { destroy() {} };
}

