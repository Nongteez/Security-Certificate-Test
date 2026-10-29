function el(doc, tag, attrs = {}, children = []) {
  const node = doc.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (val === undefined || val === null) continue;
    if (key === 'class') node.className = val;
    else if (key === 'text') node.textContent = val;
    else node.setAttribute(key, String(val));
  }
  for (const child of children) {
    if (child) node.append(child);
  }
  return node;
}

function textOf(value, language = 'en') {
  if (!value) return '';
  if (typeof value === 'string') return value;
  const lang = language === 'th' ? 'th' : 'en';
  return value[lang] || value.en || '';
}

export const LESSON_ID = 'lesson-d2-04-disaster-recovery-drp';

const COMPOSITIONS = Object.freeze({
  'slide-01-dr-definition-purposes-drp': { kind: 'dr-nested-scope-foundations', rows: 4 },
  'slide-02-dr-importance-and-compliance-bounds': { kind: 'dr-strategic-benefits-bounds', rows: 5 },
  'slide-03-rto-and-rpo-timeline': { kind: 'rto-rpo-directional-timeline', rows: 4 },
  'slide-04-worked-recovery-target-examples': { kind: 'worked-outage-target-analysis', rows: 4 },
  'slide-05-backup-and-restoration-strategies': { kind: 'backup-offsite-resilience-architecture', rows: 4 },
  'slide-06-dr-sites-hot-warm-cold': { kind: 'recovery-sites-spectrum', rows: 4 },
  'slide-07-drp-testing-and-coordination': { kind: 'drp-lifecycle-drills-coordination', rows: 4 },
  'slide-08-bc-vs-dr-seven-dimensions': { kind: 'bc-vs-dr-master-matrix', rows: 7 },
  'slide-09-disaster-recovery-scenario': { kind: 'disaster-recovery-decision-scenario', rows: 4 }
});

function hasExpectedShape(slide, spec) {
  const blocks = Array.isArray(slide?.blocks) ? slide.blocks : [];
  if (blocks.length < 5) return false;
  if (blocks[0]?.kind !== 'text' || blocks[1]?.kind !== 'table' || blocks[4]?.kind !== 'text') return false;
  const rows = blocks[1]?.rows;
  return Array.isArray(rows) && rows.length === spec.rows && rows.every(r => Array.isArray(r) && r.length >= 3);
}

export function hasDisasterRecoveryDrpPresentation({ lesson, slide } = {}) {
  const spec = COMPOSITIONS[slide?.id];
  if (lesson?.id !== LESSON_ID || !spec) return false;
  return hasExpectedShape(slide, spec);
}

function cellText(row, colIndex, language) {
  return textOf(row?.[colIndex], language);
}

function slideHeader(doc, slide, language, tagEn, tagTh) {
  return el(doc, 'header', { class: 'drp-header' }, [
    el(doc, 'div', { class: 'drp-header-top' }, [
      el(doc, 'span', { class: 'drp-eyebrow', text: language === 'th' ? tagTh : tagEn }),
      el(doc, 'span', {
        class: 'drp-domain-pill',
        text: 'Domain 2 · Objective 2.2 · Lesson 4'
      })
    ]),
    el(doc, 'h3', { class: 'drp-title', text: textOf(slide.title, language) }),
    el(doc, 'p', { class: 'drp-lead', text: textOf(slide.blocks[0].text, language) })
  ]);
}

function slideFooter(doc, slide, language) {
  return el(doc, 'footer', { class: 'drp-footer' }, [
    el(doc, 'span', {
      class: 'drp-footer-badge',
      text: language === 'th' ? 'จุดเน้นสำหรับการสอบ' : 'EXAM & PRACTICE CUE'
    }),
    el(doc, 'p', { class: 'drp-footer-text', text: textOf(slide.blocks[4].text, language) })
  ]);
}

// Slide 1: DR Definition, Purposes, 3 Key Concepts (S16) & BC/BCP vs. DR/DRP Nested Scope
function renderDrNestedScopeFoundations(doc, slide, language) {
  const [defRow, purposeRow, conceptRow, docRow] = slide.blocks[1].rows;

  const purposes = language === 'th'
    ? [
        '1. ลดเวลาที่ระบบหยุดทำงาน (Minimize downtime)',
        '2. กู้คืนระบบปฏิบัติการ IT ที่สำคัญ (Restore critical IT operations)',
        '3. ปกป้องความถูกต้องของข้อมูล (Protect data integrity)',
        '4. สนับสนุนความต่อเนื่องทางธุรกิจ (Support business continuity)'
      ]
    : [
        '1. Minimize downtime',
        '2. Restore critical IT operations',
        '3. Protect data integrity',
        '4. Support business continuity'
      ];

  const concepts = language === 'th'
    ? [
        { code: 'C1', label: 'IT-focused recovery (มุ่งกู้คืนระบบ IT)' },
        { code: 'C2', label: 'Data & system restoration (กู้คืนข้อมูลและระบบ)' },
        { code: 'C3', label: 'Critical part of overall BC (ส่วนสำคัญของ BC)' }
      ]
    : [
        { code: 'C1', label: 'IT-focused recovery' },
        { code: 'C2', label: 'Data and system restoration' },
        { code: 'C3', label: 'A critical part of overall BC' }
      ];

  return el(doc, 'div', { class: 'drp-canvas drp-scope-layout' }, [
    el(doc, 'section', { class: 'drp-nested-diagram' }, [
      el(doc, 'div', { class: 'drp-outer-bc-ring' }, [
        el(doc, 'div', { class: 'drp-ring-header' }, [
          el(doc, 'span', {
            class: 'drp-ring-badge is-bc',
            text: language === 'th' ? 'ร่มใหญ่ระดับองค์กร · BUSINESS CONTINUITY (BC / BCP)' : 'ORGANIZATION-WIDE UMBRELLA · BUSINESS CONTINUITY (BC / BCP)'
          }),
          el(doc, 'span', {
            class: 'drp-ring-caption',
            text: language === 'th' ? 'People · Processes · Facilities · Suppliers · Communications' : 'People · Processes · Facilities · Suppliers · Communications'
          })
        ]),
        el(doc, 'div', { class: 'drp-inner-dr-core' }, [
          el(doc, 'div', { class: 'drp-core-top' }, [
            el(doc, 'span', {
              class: 'drp-ring-badge is-dr',
              text: language === 'th' ? 'แกนกู้คืนด้านเทคนิค · DISASTER RECOVERY (DR / DRP) · S16' : 'TECHNICAL RECOVERY CORE · DISASTER RECOVERY (DR / DRP) · S16'
            }),
            el(doc, 'span', {
              class: 'drp-subset-formula',
              text: 'DR ⊂ BC · DRP ⊂ BCP'
            })
          ]),
          el(doc, 'p', { class: 'drp-core-def', text: cellText(defRow, 1, language) }),
          el(doc, 'div', { class: 'drp-concept-strip' }, concepts.map(c =>
            el(doc, 'div', { class: 'drp-concept-chip' }, [
              el(doc, 'span', { class: 'drp-concept-code', text: c.code }),
              el(doc, 'span', { class: 'drp-concept-text', text: c.label })
            ])
          ))
        ])
      ])
    ]),
    el(doc, 'div', { class: 'drp-scope-lower-grid' }, [
      el(doc, 'article', { class: 'drp-panel-card is-purposes' }, [
        el(doc, 'div', { class: 'drp-panel-head' }, [
          el(doc, 'span', { class: 'drp-tag is-blue', text: language === 'th' ? 'วัตถุประสงค์หลัก (S16)' : 'CORE PURPOSES (S16)' }),
          el(doc, 'strong', { class: 'drp-panel-title', text: cellText(purposeRow, 0, language) })
        ]),
        el(doc, 'ul', { class: 'drp-compact-list' }, purposes.map(item =>
          el(doc, 'li', { text: item })
        )),
        el(doc, 'p', { class: 'drp-panel-note', text: cellText(purposeRow, 2, language) })
      ]),
      el(doc, 'article', { class: 'drp-panel-card is-distinction' }, [
        el(doc, 'div', { class: 'drp-panel-head' }, [
          el(doc, 'span', { class: 'drp-tag is-indigo', text: language === 'th' ? 'วินัยกับเอกสารแผน' : 'DISCIPLINE VS. PLAN DOCUMENT' }),
          el(doc, 'strong', { class: 'drp-panel-title', text: cellText(docRow, 0, language) })
        ]),
        el(doc, 'p', { class: 'drp-panel-body', text: cellText(docRow, 1, language) }),
        el(doc, 'p', { class: 'drp-panel-note is-highlight', text: cellText(docRow, 2, language) }),
        el(doc, 'p', { class: 'drp-panel-subnote', text: cellText(conceptRow, 2, language) })
      ])
    ])
  ]);
}

// Slide 2: 5 Strategic Benefits of DR (S17) + Bounded Regulatory Note (D2-Q04: GDPR & HIPAA)
function renderDrStrategicBenefitsBounds(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const tones = ['is-blue', 'is-teal', 'is-amber', 'is-indigo', 'is-emerald'];
  const codes = ['01 · DOWNTIME', '02 · INTEGRITY', '03 · COMPLIANCE', '04 · FINANCIAL', '05 · TRUST'];

  return el(doc, 'div', { class: 'drp-canvas drp-benefits-layout' }, [
    el(doc, 'div', { class: 'drp-benefits-grid' }, rows.map((row, idx) =>
      el(doc, 'article', {
        class: `drp-benefit-card ${tones[idx]}`,
        'data-drp-benefit': String(idx + 1)
      }, [
        el(doc, 'div', { class: 'drp-benefit-top' }, [
          el(doc, 'span', { class: 'drp-benefit-code', text: codes[idx] }),
          el(doc, 'strong', { class: 'drp-benefit-title', text: cellText(row, 0, language) })
        ]),
        el(doc, 'p', { class: 'drp-benefit-desc', text: cellText(row, 1, language) }),
        el(doc, 'p', { class: 'drp-benefit-impact', text: cellText(row, 2, language) })
      ])
    )),
    el(doc, 'aside', { class: 'drp-compliance-guardrail', 'data-drp-guardrail': 'd2-q04' }, [
      el(doc, 'div', { class: 'drp-guardrail-badge-col' }, [
        el(doc, 'span', {
          class: 'drp-guardrail-pill',
          text: language === 'th' ? 'ขอบเขตทางวิชาการ · D2-Q04' : 'ACADEMIC BOUNDARY · D2-Q04'
        }),
        el(doc, 'strong', {
          class: 'drp-guardrail-heading',
          text: language === 'th' ? 'GDPR และ HIPAA เป็นเพียงตัวอย่างตามบริบท (Illustrative Examples)' : 'GDPR & HIPAA Are Context-Specific Illustrative Examples'
        })
      ]),
      el(doc, 'p', {
        class: 'drp-guardrail-copy',
        text: language === 'th'
          ? 'สไลด์ S17 ยกตัวอย่าง GDPR (ข้อมูลส่วนบุคคล PII เช่น Art. 32 ความสามารถในการกู้คืนข้อมูล) และ HIPAA (ข้อมูลสุขภาพ PHI เช่น 45 CFR §164.308(a)(7) Contingency Plan) เพื่อชี้ให้เห็นว่ากฎหมายจำนวนมากกำหนดให้ต้องมีแผนฟื้นฟูระบบเมื่อเข้าข่ายบังคับใช้ แต่กฎหมายแต่ละฉบับมีขอบเขตและรายละเอียดทางกฎหมายที่แตกต่างกัน ไม่ใช่ข้อบังคับเดียวกันทุกประการ'
          : 'Course slide S17 cites GDPR (personal data / PII, e.g., Art. 32 availability & restoration) and HIPAA (protected health information / PHI, e.g., 45 CFR §164.308(a)(7) Contingency Plan) as illustrative examples where applicable—their statutory scopes and legal requirements are not identical.'
      })
    ])
  ]);
}

// Slide 3: Directional RTO vs. RPO Timeline (S18, Domain 2.md §9.1-9.2)
function renderRtoRpoDirectionalTimeline(doc, slide, language) {
  const [rpoRow, rtoRow, targetRow, linkRow] = slide.blocks[1].rows;

  return el(doc, 'div', { class: 'drp-canvas drp-timeline-layout' }, [
    el(doc, 'section', { class: 'drp-timeline-board', 'data-drp-timeline': 'rpo-rto-axis' }, [
      el(doc, 'div', { class: 'drp-timeline-axis-grid' }, [
        el(doc, 'div', { class: 'drp-timeline-zone is-rpo' }, [
          el(doc, 'div', { class: 'drp-zone-header' }, [
            el(doc, 'span', {
              class: 'drp-direction-pill is-rpo',
              text: language === 'th' ? '← มองย้อนหลังในอดีต (BACKWARD IN TIME)' : '← LOOKS BACKWARD IN TIME (PAST)'
            }),
            el(doc, 'strong', { class: 'drp-zone-metric', text: 'RPO · Recovery Point Objective' })
          ]),
          el(doc, 'p', {
            class: 'drp-zone-formula',
            text: language === 'th'
              ? 'จุดสำรองข้อมูลล่าสุด (Last Valid Backup) ⟵ [ ข้อมูลสูญหายสูงสุดที่ยอมรับได้ ] ⟵ เวลาเกิดเหตุ'
              : 'Last Valid Backup ⟵ [ Maximum Acceptable Data Loss in Time ] ⟵ Outage Strikes'
          }),
          el(doc, 'p', { class: 'drp-zone-driver', text: cellText(rpoRow, 2, language) })
        ]),
        el(doc, 'div', { class: 'drp-timeline-pivot' }, [
          el(doc, 'span', { class: 'drp-pivot-icon', text: '⚡' }),
          el(doc, 'strong', {
            class: 'drp-pivot-title',
            text: language === 'th' ? 'เหตุภัยพิบัติ / ระบบล่ม (T₀)' : 'DISASTER / OUTAGE (T₀)'
          }),
          el(doc, 'span', {
            class: 'drp-pivot-sub',
            text: language === 'th' ? 'จุดแบ่งอดีต (ข้อมูล) กับอนาคต (เวลาหยุดทำงาน)' : 'Divides Past Data Age from Future Downtime'
          })
        ]),
        el(doc, 'div', { class: 'drp-timeline-zone is-rto' }, [
          el(doc, 'div', { class: 'drp-zone-header' }, [
            el(doc, 'strong', { class: 'drp-zone-metric', text: 'RTO · Recovery Time Objective' }),
            el(doc, 'span', {
              class: 'drp-direction-pill is-rto',
              text: language === 'th' ? 'มองไปข้างหน้าหลังเกิดเหตุ (FORWARD IN TIME) →' : 'LOOKS FORWARD IN TIME (FUTURE) →'
            })
          ]),
          el(doc, 'p', {
            class: 'drp-zone-formula',
            text: language === 'th'
              ? 'เวลาเกิดเหตุ ⟶ [ ระยะเวลาที่ระบบหยุดทำงานสูงสุดที่ยอมรับได้ ] ⟶ กู้ระบบกลับมาใช้งานได้'
              : 'Outage Strikes ⟶ [ Maximum Acceptable Downtime ] ⟶ Service Restored'
          }),
          el(doc, 'p', { class: 'drp-zone-driver', text: cellText(rtoRow, 2, language) })
        ])
      ])
    ]),
    el(doc, 'div', { class: 'drp-metric-cards-grid' }, [
      el(doc, 'article', { class: 'drp-metric-card is-rpo' }, [
        el(doc, 'span', { class: 'drp-tag is-amber', text: 'DRP COMPONENT 2 · RPO (POINT = DATA)' }),
        el(doc, 'h4', { class: 'drp-card-heading', text: cellText(rpoRow, 0, language) }),
        el(doc, 'p', { class: 'drp-card-body', text: cellText(rpoRow, 1, language) })
      ]),
      el(doc, 'article', { class: 'drp-metric-card is-rto' }, [
        el(doc, 'span', { class: 'drp-tag is-blue', text: 'DRP COMPONENT 1 · RTO (TIME = DOWNTIME)' }),
        el(doc, 'h4', { class: 'drp-card-heading', text: cellText(rtoRow, 0, language) }),
        el(doc, 'p', { class: 'drp-card-body', text: cellText(rtoRow, 1, language) })
      ]),
      el(doc, 'article', { class: 'drp-metric-card is-reality' }, [
        el(doc, 'span', {
          class: 'drp-tag is-indigo',
          text: language === 'th' ? 'เป้าหมาย ≠ การรับประกันอัตโนมัติ' : 'TARGETS ≠ AUTOMATIC GUARANTEES'
        }),
        el(doc, 'h4', { class: 'drp-card-heading', text: cellText(targetRow, 0, language) }),
        el(doc, 'p', { class: 'drp-card-body', text: cellText(targetRow, 1, language) }),
        el(doc, 'p', { class: 'drp-card-sub', text: cellText(linkRow, 2, language) })
      ])
    ])
  ]);
}

// Slide 4: Worked Recovery Target Examples (Domain 2.md §9.3 16:30/17:00/18:00 & S18/T:L57-60 4:00/4:30/5:00/5:20)
function renderWorkedOutageTargetAnalysis(doc, slide, language) {
  const [caseARpo, caseARto, caseBRpo, caseBRto] = slide.blocks[1].rows;

  return el(doc, 'div', { class: 'drp-canvas drp-worked-layout' }, [
    el(doc, 'div', { class: 'drp-worked-cases-grid' }, [
      el(doc, 'section', { class: 'drp-worked-case is-case-a' }, [
        el(doc, 'div', { class: 'drp-case-banner' }, [
          el(doc, 'span', {
            class: 'drp-case-badge is-emerald',
            text: language === 'th' ? 'กรณีศึกษาที่ 1 · DOMAIN 2.MD §9.3 (ผ่านเกณฑ์)' : 'WORKED CASE 1 · DOMAIN 2.MD §9.3 (TARGETS MET)'
          }),
          el(doc, 'strong', {
            class: 'drp-case-title',
            text: language === 'th' ? 'เหตุระบบล่มเวลา 17:00 (RPO = 30 นาที, RTO = 1 ชั่วโมง)' : 'Outage at 17:00 (Target RPO = 30 min, Target RTO = 1 hour)'
          })
        ]),
        el(doc, 'div', { class: 'drp-clock-strip' }, [
          el(doc, 'div', { class: 'drp-clock-node is-rpo' }, [
            el(doc, 'span', { class: 'drp-clock-time', text: '16:30' }),
            el(doc, 'span', {
              class: 'drp-clock-label',
              text: language === 'th' ? 'สำรองข้อมูลล่าสุด (RPO ≤ 30m)' : 'Last Valid Backup (RPO ≤ 30m)'
            })
          ]),
          el(doc, 'span', { class: 'drp-clock-arrow', text: '⟵ 30m ── ⚡' }),
          el(doc, 'div', { class: 'drp-clock-node is-crash' }, [
            el(doc, 'span', { class: 'drp-clock-time', text: '17:00' }),
            el(doc, 'span', {
              class: 'drp-clock-label',
              text: language === 'th' ? 'ระบบล่ม (Outage T₀)' : 'System Fails (Outage T₀)'
            })
          ]),
          el(doc, 'span', { class: 'drp-clock-arrow', text: '⚡ ── 1h ⟶' }),
          el(doc, 'div', { class: 'drp-clock-node is-rto' }, [
            el(doc, 'span', { class: 'drp-clock-time', text: '18:00' }),
            el(doc, 'span', {
              class: 'drp-clock-label',
              text: language === 'th' ? 'กู้ระบบเสร็จไม่เกิน (RTO ≤ 1h)' : 'Service Restored By (RTO ≤ 1h)'
            })
          ])
        ]),
        el(doc, 'div', { class: 'drp-case-rows' }, [
          el(doc, 'div', { class: 'drp-case-row' }, [
            el(doc, 'strong', { text: cellText(caseARpo, 0, language) }),
            el(doc, 'p', { text: `${cellText(caseARpo, 1, language)} — ${cellText(caseARpo, 2, language)}` })
          ]),
          el(doc, 'div', { class: 'drp-case-row' }, [
            el(doc, 'strong', { text: cellText(caseARto, 0, language) }),
            el(doc, 'p', { text: `${cellText(caseARto, 1, language)} — ${cellText(caseARto, 2, language)}` })
          ])
        ])
      ]),
      el(doc, 'section', { class: 'drp-worked-case is-case-b' }, [
        el(doc, 'div', { class: 'drp-case-banner' }, [
          el(doc, 'span', {
            class: 'drp-case-badge is-amber',
            text: language === 'th' ? 'กรณีศึกษาที่ 2 · สไลด์ S18 และบทบรรยาย T:L57–60' : 'WORKED CASE 2 · SLIDE S18 & LECTURE T:L57–60'
          }),
          el(doc, 'strong', {
            class: 'drp-case-title',
            text: language === 'th' ? 'ตัวอย่างการวัดข้อมูลสูญหาย (4:00→4:30) และการเกินเวลาเป้าหมาย (5:00→5:20)' : 'Evaluating 30-Min Data Loss (4:00→4:30) & 20-Min Target Breach (5:00→5:20)'
          })
        ]),
        el(doc, 'div', { class: 'drp-clock-strip' }, [
          el(doc, 'div', { class: 'drp-clock-node is-rpo' }, [
            el(doc, 'span', { class: 'drp-clock-time', text: '4:00 → 4:30 PM' }),
            el(doc, 'span', {
              class: 'drp-clock-label',
              text: language === 'th' ? 'สูญเสียข้อมูล 30 นาที (ผ่าน RPO)' : '30m Data Loss (Meets 30m RPO)'
            })
          ]),
          el(doc, 'span', { class: 'drp-clock-arrow', text: '│' }),
          el(doc, 'div', { class: 'drp-clock-node is-breach' }, [
            el(doc, 'span', { class: 'drp-clock-time', text: '5:00 → 5:20 PM' }),
            el(doc, 'span', {
              class: 'drp-clock-label',
              text: language === 'th' ? 'ช่องว่าง 20 นาที (เกินเกณฑ์เมื่อลากยาว)' : '20m Gap / Overrun Benchmark'
            })
          ])
        ]),
        el(doc, 'div', { class: 'drp-case-rows' }, [
          el(doc, 'div', { class: 'drp-case-row' }, [
            el(doc, 'strong', { text: cellText(caseBRpo, 0, language) }),
            el(doc, 'p', { text: `${cellText(caseBRpo, 1, language)} — ${cellText(caseBRpo, 2, language)}` })
          ]),
          el(doc, 'div', { class: 'drp-case-row' }, [
            el(doc, 'strong', { text: cellText(caseBRto, 0, language) }),
            el(doc, 'p', { text: `${cellText(caseBRto, 1, language)} — ${cellText(caseBRto, 2, language)}` })
          ])
        ])
      ])
    ])
  ]);
}

// Slide 5: Backup and Recovery Strategies (S18: Cloud Backups & Off-site Storage, D2-Q01)
function renderBackupOffsiteResilienceArchitecture(doc, slide, language) {
  const [localRiskRow, cloudRow, offsiteRow, verifyRow] = slide.blocks[1].rows;

  return el(doc, 'div', { class: 'drp-canvas drp-backup-layout' }, [
    el(doc, 'section', { class: 'drp-backup-flow-banner' }, [
      el(doc, 'div', { class: 'drp-site-box is-primary-hazard' }, [
        el(doc, 'span', {
          class: 'drp-tag is-danger',
          text: language === 'th' ? 'ความเสี่ยงเมื่อเก็บจุดเดียว' : 'SINGLE-SITE CO-LOCATION RISK'
        }),
        el(doc, 'strong', { class: 'drp-box-title', text: cellText(localRiskRow, 0, language) }),
        el(doc, 'p', { class: 'drp-box-desc', text: cellText(localRiskRow, 1, language) }),
        el(doc, 'p', { class: 'drp-box-hazard-note', text: cellText(localRiskRow, 2, language) })
      ]),
      el(doc, 'div', { class: 'drp-replication-bridge' }, [
        el(doc, 'span', {
          class: 'drp-bridge-pill',
          text: language === 'th' ? 'แยกสถานที่ทางภูมิศาสตร์ (GEOGRAPHIC SEPARATION)' : 'GEOGRAPHIC SEPARATION (SURVIVES SITE LOSS)'
        }),
        el(doc, 'span', { class: 'drp-bridge-arrows', text: '═══ Encrypted Replication & Off-site Transfer ══►' }),
        el(doc, 'span', {
          class: 'drp-bridge-sub',
          text: language === 'th' ? 'ความถี่ Backup กำหนด RPO · ความเร็ว Restore กำหนด RTO' : 'Backup Frequency Bounds RPO · Restore Throughput Bounds RTO'
        })
      ]),
      el(doc, 'div', { class: 'drp-offsite-targets' }, [
        el(doc, 'article', { class: 'drp-target-card is-cloud' }, [
          el(doc, 'span', { class: 'drp-tag is-blue', text: 'S18 · CLOUD BACKUPS' }),
          el(doc, 'strong', { class: 'drp-box-title', text: cellText(cloudRow, 0, language) }),
          el(doc, 'p', { class: 'drp-box-desc', text: cellText(cloudRow, 1, language) }),
          el(doc, 'p', { class: 'drp-box-note', text: cellText(cloudRow, 2, language) })
        ]),
        el(doc, 'article', { class: 'drp-target-card is-offsite' }, [
          el(doc, 'span', { class: 'drp-tag is-teal', text: 'S18 · OFF-SITE STORAGE (D2-Q01)' }),
          el(doc, 'strong', { class: 'drp-box-title', text: cellText(offsiteRow, 0, language) }),
          el(doc, 'p', { class: 'drp-box-desc', text: cellText(offsiteRow, 1, language) }),
          el(doc, 'p', { class: 'drp-box-note', text: cellText(offsiteRow, 2, language) })
        ])
      ])
    ]),
    el(doc, 'aside', { class: 'drp-verification-strip' }, [
      el(doc, 'div', { class: 'drp-verify-left' }, [
        el(doc, 'span', {
          class: 'drp-tag is-emerald',
          text: language === 'th' ? 'กฎเหล็กของการกู้คืนข้อมูล' : 'RESTORATION VERIFICATION RULE'
        }),
        el(doc, 'strong', { text: cellText(verifyRow, 0, language) })
      ]),
      el(doc, 'p', { class: 'drp-verify-body', text: `${cellText(verifyRow, 1, language)} — ${cellText(verifyRow, 2, language)}` })
    ])
  ]);
}

// Slide 6: Disaster Recovery Sites (Hot Site, Warm Site, Cold Site — S18, Domain 2.md §9.5)
function renderRecoverySitesSpectrum(doc, slide, language) {
  const [hotRow, warmRow, coldRow, depRow] = slide.blocks[1].rows;
  const tiers = [
    {
      row: hotRow,
      key: 'hot',
      tone: 'is-hot',
      badge: language === 'th' ? 'ความพร้อมสูงสุด · เร็วที่สุด · ต้นทุนสูงสุด' : 'HIGHEST READINESS · FASTEST · HIGHEST COST',
      readinessPct: '96%',
      speedLabel: language === 'th' ? 'แทบจะทันที / เป็นนาที (Near-instant / Minutes)' : 'Near-Instant / Minutes',
      costLabel: language === 'th' ? 'ต้นทุนสูงมาก ($$$)' : 'Very High Cost ($$$)'
    },
    {
      row: warmRow,
      key: 'warm',
      tone: 'is-warm',
      badge: language === 'th' ? 'พร้อมบางส่วน · สมดุลเวลาและงบประมาณ' : 'PARTIALLY EQUIPPED · BALANCED SPEED & COST',
      readinessPct: '62%',
      speedLabel: language === 'th' ? 'เป็นชั่วโมง ถึง ~1 วัน (Hours to ~1 Day)' : 'Hours to ~1 Day',
      costLabel: language === 'th' ? 'ต้นทุนปานกลาง ($$)' : 'Moderate Cost ($$)'
    },
    {
      row: coldRow,
      key: 'cold',
      tone: 'is-cold',
      badge: language === 'th' ? 'พื้นที่และระบบไฟ/แอร์พื้นฐาน · ช้าที่สุด · ประหยัดสุด' : 'BASIC FACILITY SHELL · SLOWEST · LOWEST COST',
      readinessPct: '24%',
      speedLabel: language === 'th' ? 'หลายวันหรือหลายสัปดาห์ (Days or Weeks)' : 'Days or Weeks',
      costLabel: language === 'th' ? 'ต้นทุนต่ำสุด ($)' : 'Lowest Ongoing Cost ($)'
    }
  ];

  return el(doc, 'div', { class: 'drp-canvas drp-sites-layout' }, [
    el(doc, 'div', { class: 'drp-sites-grid' }, tiers.map(tier =>
      el(doc, 'article', {
        class: `drp-site-tier-card ${tier.tone}`,
        'data-drp-site-tier': tier.key
      }, [
        el(doc, 'div', { class: 'drp-site-tier-top' }, [
          el(doc, 'span', { class: 'drp-site-tier-badge', text: tier.badge }),
          el(doc, 'h4', { class: 'drp-site-tier-title', text: cellText(tier.row, 0, language) })
        ]),
        el(doc, 'div', { class: 'drp-site-meter-group' }, [
          el(doc, 'div', { class: 'drp-site-meter-labels' }, [
            el(doc, 'span', { text: tier.speedLabel }),
            el(doc, 'strong', { text: tier.costLabel })
          ]),
          el(doc, 'div', { class: 'drp-site-meter-track' }, [
            el(doc, 'div', { class: 'drp-site-meter-fill', style: `width: ${tier.readinessPct};` })
          ])
        ]),
        el(doc, 'p', { class: 'drp-site-tier-desc', text: cellText(tier.row, 1, language) }),
        el(doc, 'p', { class: 'drp-site-tier-fit', text: cellText(tier.row, 2, language) })
      ])
    )),
    el(doc, 'aside', { class: 'drp-sites-dependency-bar' }, [
      el(doc, 'span', {
        class: 'drp-tag is-indigo',
        text: language === 'th' ? 'เงื่อนไขทางวิศวกรรม' : 'ENGINEERING DEPENDENCY'
      }),
      el(doc, 'strong', { text: cellText(depRow, 0, language) }),
      el(doc, 'p', { text: `${cellText(depRow, 1, language)} — ${cellText(depRow, 2, language)}` })
    ])
  ]);
}

// Slide 7: DRP Testing, Drills, and Recovery Coordination (S18, Domain 2.md §9.6)
function renderDrpLifecycleDrillsCoordination(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const tones = ['is-blue', 'is-teal', 'is-indigo', 'is-emerald'];
  const badges = [
    'STAGE 1 · BIA-DRIVEN RECOVERY ORDER',
    'STAGE 2 · ROLES & COMMUNICATION',
    'STAGE 3 · S18 COMPONENT 5: TESTING & DRILLS',
    'STAGE 4 · CONTINUOUS PLAN MAINTENANCE'
  ];

  return el(doc, 'div', { class: 'drp-canvas drp-drills-layout' }, [
    el(doc, 'div', { class: 'drp-drills-grid' }, rows.map((row, idx) =>
      el(doc, 'article', { class: `drp-drill-card ${tones[idx]}` }, [
        el(doc, 'div', { class: 'drp-drill-head' }, [
          el(doc, 'span', { class: 'drp-drill-badge', text: badges[idx] }),
          el(doc, 'h4', { class: 'drp-drill-title', text: cellText(row, 0, language) })
        ]),
        el(doc, 'p', { class: 'drp-drill-practice', text: cellText(row, 1, language) }),
        el(doc, 'div', { class: 'drp-drill-outcome' }, [
          el(doc, 'span', {
            class: 'drp-outcome-label',
            text: language === 'th' ? 'ผลลัพธ์ต่อความพร้อมใช้งาน:' : 'Readiness Impact:'
          }),
          el(doc, 'p', { text: cellText(row, 2, language) })
        ])
      ])
    ))
  ]);
}

// Slide 8: Complete 7-Row Business Continuity (BC) vs. Disaster Recovery (DR) Table (S19, Domain 2.md §10)
function renderBcVsDrMasterMatrix(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const cols = slide.blocks[1].columns;

  return el(doc, 'div', { class: 'drp-canvas drp-matrix-layout' }, [
    el(doc, 'div', { class: 'drp-matrix-container', role: 'region', 'aria-label': textOf(slide.blocks[1].caption, language) }, [
      el(doc, 'div', { class: 'drp-matrix-head' }, [
        el(doc, 'div', { class: 'drp-matrix-col-head is-aspect', text: textOf(cols[0], language) }),
        el(doc, 'div', { class: 'drp-matrix-col-head is-bc', text: textOf(cols[1], language) }),
        el(doc, 'div', { class: 'drp-matrix-col-head is-dr', text: textOf(cols[2], language) })
      ]),
      el(doc, 'div', { class: 'drp-matrix-body' }, rows.map((row, idx) =>
        el(doc, 'div', {
          class: 'drp-matrix-row',
          'data-drp-comparison-row': String(idx + 1)
        }, [
          el(doc, 'div', { class: 'drp-matrix-cell is-aspect' }, [
            el(doc, 'span', { class: 'drp-row-index', text: `0${idx + 1}` }),
            el(doc, 'strong', { text: cellText(row, 0, language) })
          ]),
          el(doc, 'div', { class: 'drp-matrix-cell is-bc', text: cellText(row, 1, language) }),
          el(doc, 'div', { class: 'drp-matrix-cell is-dr', text: cellText(row, 2, language) })
        ])
      ))
    ])
  ]);
}

// Slide 9: Interactive Disaster Recovery Decision Scenario
function renderDisasterRecoveryDecisionScenario(doc, slide, language, interactionState, signal) {
  const rows = slide.blocks[1].rows;
  const recommendedIndex = 2; // Option C

  const scenarioRoot = el(doc, 'div', { class: 'drp-canvas drp-scenario-layout' });

  const metricsStrip = el(doc, 'div', { class: 'drp-scenario-context-bar' }, [
    el(doc, 'div', { class: 'drp-context-chip is-incident' }, [
      el(doc, 'span', { class: 'drp-chip-label', text: language === 'th' ? 'เหตุการณ์' : 'OUTAGE CLOCK' }),
      el(doc, 'strong', { text: language === 'th' ? 'ฐานข้อมูลหลักล่มเวลา 17:00' : 'Order DB Crashes at 17:00' })
    ]),
    el(doc, 'div', { class: 'drp-context-chip is-rpo' }, [
      el(doc, 'span', { class: 'drp-chip-label', text: language === 'th' ? 'ข้อมูลสูญหายสูงสุด (BIA)' : 'MAX DATA LOSS (BIA)' }),
      el(doc, 'strong', { text: language === 'th' ? '≤ 30 นาที → RPO (สำรอง ≥ 16:30)' : '≤ 30 min → RPO (Backup ≥ 16:30)' })
    ]),
    el(doc, 'div', { class: 'drp-context-chip is-rto' }, [
      el(doc, 'span', { class: 'drp-chip-label', text: language === 'th' ? 'หยุดทำงานสูงสุด (BIA)' : 'MAX DOWNTIME (BIA)' }),
      el(doc, 'strong', { text: language === 'th' ? '≤ 1 ชั่วโมง → RTO (กู้เสร็จ ≤ 18:00)' : '≤ 1 hour → RTO (Restore ≤ 18:00)' })
    ])
  ]);

  const choicesGrid = el(doc, 'div', { class: 'drp-scenario-choices' });
  const feedbackBox = el(doc, 'div', { class: 'drp-scenario-feedback-wrap' });

  function syncFeedback() {
    const selected = typeof interactionState?.choice === 'number' ? interactionState.choice : null;
    for (const [idx, btn] of choiceButtons.entries()) {
      const active = selected === idx;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-selected', active);
      btn.classList.toggle('is-recommended', active && idx === recommendedIndex);
      btn.classList.toggle('is-distractor', active && idx !== recommendedIndex);
    }

    feedbackBox.replaceChildren();
    if (selected === null || !rows[selected]) {
      feedbackBox.append(
        el(doc, 'div', { class: 'drp-scenario-prompt' }, [
          el(doc, 'span', {
            class: 'drp-prompt-badge',
            text: language === 'th' ? 'เลือกตัวเลือกเพื่อตรวจคำตอบ' : 'SELECT AN OPTION ABOVE'
          }),
          el(doc, 'p', {
            text: language === 'th'
              ? 'คลิกเลือกตัวเลือก A, B, C หรือ D เพื่อวิเคราะห์การจับคู่ค่า RPO/RTO กลยุทธ์ข้อมูลสำรองนอกสถานที่ ศูนย์สำรอง และการซ้อมแผน DRP'
              : 'Select Option A, B, C, or D to evaluate how RPO, RTO, off-site/cloud backups, recovery site readiness, and DRP testing interact.'
          })
        ])
      );
      return;
    }

    const chosenRow = rows[selected];
    const isRecommended = selected === recommendedIndex;
    feedbackBox.append(
      el(doc, 'div', {
        class: `drp-scenario-feedback ${isRecommended ? 'is-recommended' : 'is-distractor'}`,
        'data-drp-scenario-feedback': '',
        'data-drp-outcome': isRecommended ? 'recommended' : 'distractor'
      }, [
        el(doc, 'div', { class: 'drp-feedback-head' }, [
          el(doc, 'span', {
            class: 'drp-feedback-badge',
            text: isRecommended
              ? (language === 'th' ? 'ตัวเลือกที่เหมาะสมที่สุด (RECOMMENDED)' : 'RECOMMENDED STRATEGY')
              : (language === 'th' ? 'ตัวลวงในการสอบ (DISTRACTOR)' : 'EXAM DISTRACTOR')
          }),
          el(doc, 'strong', { text: cellText(chosenRow, 0, language) })
        ]),
        el(doc, 'p', { class: 'drp-feedback-text', text: cellText(chosenRow, 2, language) })
      ])
    );
  }

  const choiceButtons = rows.map((row, idx) => {
    const btn = el(doc, 'button', {
      type: 'button',
      class: 'drp-choice-btn',
      'data-drp-scenario-choice': String(idx),
      'data-slide-interactive': '',
      'aria-pressed': 'false'
    }, [
      el(doc, 'div', { class: 'drp-choice-top' }, [
        el(doc, 'span', { class: 'drp-choice-letter', text: cellText(row, 0, language) })
      ]),
      el(doc, 'p', { class: 'drp-choice-copy', text: cellText(row, 1, language) })
    ]);

    btn.addEventListener('click', () => {
      if (signal?.aborted) return;
      interactionState.choice = idx;
      syncFeedback();
    }, { signal });

    choicesGrid.append(btn);
    return btn;
  });

  syncFeedback();
  scenarioRoot.append(metricsStrip, choicesGrid, feedbackBox);
  return scenarioRoot;
}

const SLIDE_TAGS = Object.freeze({
  'slide-01-dr-definition-purposes-drp': {
    en: 'SLIDE 1 · DR DEFINITION, PURPOSES & DRP SCOPE (S16)',
    th: 'สไลด์ 1 · นิยาม วัตถุประสงค์ และขอบเขตของ DR / DRP (S16)'
  },
  'slide-02-dr-importance-and-compliance-bounds': {
    en: 'SLIDE 2 · FIVE STRATEGIC BENEFITS & BOUNDED COMPLIANCE (S17)',
    th: 'สไลด์ 2 · ประโยชน์ 5 ด้านของ DR และขอบเขตข้อกำหนดทางกฎหมาย (S17)'
  },
  'slide-03-rto-and-rpo-timeline': {
    en: 'SLIDE 3 · RTO VS. RPO DIRECTIONAL RECOVERY TIMELINE (S18)',
    th: 'สไลด์ 3 · เส้นเวลาเปรียบเทียบ RTO (ไปข้างหน้า) กับ RPO (ย้อนหลัง) (S18)'
  },
  'slide-04-worked-recovery-target-examples': {
    en: 'SLIDE 4 · WORKED RECOVERY TARGET TIMELINES (17:00 & S18 CLOCKS)',
    th: 'สไลด์ 4 · ตัวอย่างการคำนวณเวลา RPO และ RTO จากสถานการณ์จริง'
  },
  'slide-05-backup-and-restoration-strategies': {
    en: 'SLIDE 5 · BACKUP & RECOVERY STRATEGIES: CLOUD & OFF-SITE STORAGE (S18)',
    th: 'สไลด์ 5 · กลยุทธ์การสำรองและกู้คืนข้อมูล: Cloud & Off-site Storage (S18)'
  },
  'slide-06-dr-sites-hot-warm-cold': {
    en: 'SLIDE 6 · DISASTER RECOVERY SITES: HOT, WARM & COLD SPECTRUM (S18)',
    th: 'สไลด์ 6 · ศูนย์สำรองกู้คืนภัยพิบัติ: เปรียบเทียบ Hot, Warm และ Cold Site (S18)'
  },
  'slide-07-drp-testing-and-coordination': {
    en: 'SLIDE 7 · DRP TESTING, DRILLS & RECOVERY COORDINATION (S18)',
    th: 'สไลด์ 7 · การทดสอบ ซ้อมแผน DRP และการประสานงานตามลำดับความสำคัญ (S18)'
  },
  'slide-08-bc-vs-dr-seven-dimensions': {
    en: 'SLIDE 8 · BUSINESS CONTINUITY (BC) VS. DISASTER RECOVERY (DR) — 7 DIMENSIONS (S19)',
    th: 'สไลด์ 8 · ตารางเปรียบเทียบ Business Continuity (BC) กับ Disaster Recovery (DR) ครบ 7 มิติ (S19)'
  },
  'slide-09-disaster-recovery-scenario': {
    en: 'SLIDE 9 · APPLIED DISASTER RECOVERY DECISION SCENARIO',
    th: 'สไลด์ 9 · สถานการณ์ฝึกตัดสินใจ: การประยุกต์ใช้ RTO, RPO และกลยุทธ์ DRP'
  }
});

export function renderDisasterRecoveryDrpPresentation(host, { slide, language = 'en', interactionState = {}, signal } = {}) {
  const doc = host.ownerDocument;
  const spec = COMPOSITIONS[slide.id];
  const tags = SLIDE_TAGS[slide.id] || { en: 'DISASTER RECOVERY', th: 'การกู้คืนจากภัยพิบัติ' };

  let visualNode = null;
  if (spec.kind === 'dr-nested-scope-foundations') {
    visualNode = renderDrNestedScopeFoundations(doc, slide, language);
  } else if (spec.kind === 'dr-strategic-benefits-bounds') {
    visualNode = renderDrStrategicBenefitsBounds(doc, slide, language);
  } else if (spec.kind === 'rto-rpo-directional-timeline') {
    visualNode = renderRtoRpoDirectionalTimeline(doc, slide, language);
  } else if (spec.kind === 'worked-outage-target-analysis') {
    visualNode = renderWorkedOutageTargetAnalysis(doc, slide, language);
  } else if (spec.kind === 'backup-offsite-resilience-architecture') {
    visualNode = renderBackupOffsiteResilienceArchitecture(doc, slide, language);
  } else if (spec.kind === 'recovery-sites-spectrum') {
    visualNode = renderRecoverySitesSpectrum(doc, slide, language);
  } else if (spec.kind === 'drp-lifecycle-drills-coordination') {
    visualNode = renderDrpLifecycleDrillsCoordination(doc, slide, language);
  } else if (spec.kind === 'bc-vs-dr-master-matrix') {
    visualNode = renderBcVsDrMasterMatrix(doc, slide, language);
  } else if (spec.kind === 'disaster-recovery-decision-scenario') {
    visualNode = renderDisasterRecoveryDecisionScenario(doc, slide, language, interactionState, signal);
  }

  const root = el(doc, 'section', {
    class: `drp-presentation is-${spec.kind}`,
    'data-dr-drp-composition': spec.kind,
    lang: language === 'th' ? 'th' : 'en'
  }, [
    slideHeader(doc, slide, language, tags.en, tags.th),
    visualNode,
    slideFooter(doc, slide, language)
  ]);

  host.append(root);
}
