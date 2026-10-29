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

export const LESSON_ID = 'lesson-d2-02-grc-tools-risk-register';

const COMPOSITIONS = Object.freeze({
  'slide-01-grc-tools-platform': { kind: 'platform-vs-spreadsheets', rows: 3 },
  'slide-02-six-grc-tool-capabilities': { kind: 'capability-workflow-hub', rows: 6 },
  'slide-03-risk-register-anatomy': { kind: 'register-schema-blueprint', rows: 11 },
  'slide-04-scoring-and-treatment': { kind: 'scoring-and-responses', rows: 6 },
  'slide-05-ransomware-worked-example': { kind: 'ransomware-register-record', rows: 6 },
  'slide-06-residual-risk-and-ownership': { kind: 'residual-ownership-pipeline', rows: 4 },
  'slide-07-risk-register-scenario': { kind: 'register-triage-scenario', rows: 4 }
});

function hasExpectedShape(slide, spec) {
  const blocks = Array.isArray(slide?.blocks) ? slide.blocks : [];
  if (blocks.length < 5) return false;
  if (blocks[0]?.kind !== 'text' || blocks[1]?.kind !== 'table' || blocks[4]?.kind !== 'text') return false;
  const rows = blocks[1]?.rows;
  return Array.isArray(rows) && rows.length === spec.rows && rows.every(r => Array.isArray(r) && r.length >= 3);
}

export function hasGrcToolsRiskRegisterPresentation({ lesson, slide } = {}) {
  const spec = COMPOSITIONS[slide?.id];
  if (lesson?.id !== LESSON_ID || !spec) return false;
  return hasExpectedShape(slide, spec);
}

function cellText(row, colIndex, language) {
  return textOf(row?.[colIndex], language);
}

function slideHeader(doc, slide, language, tagEn, tagTh) {
  return el(doc, 'header', { class: 'grt-header' }, [
    el(doc, 'div', { class: 'grt-header-top' }, [
      el(doc, 'span', { class: 'grt-eyebrow', text: language === 'th' ? tagTh : tagEn }),
      el(doc, 'span', {
        class: 'grt-domain-pill',
        text: language === 'th' ? 'Domain 2 · Objective 2.1' : 'Domain 2 · Objective 2.1'
      })
    ]),
    el(doc, 'h3', { class: 'grt-title', text: textOf(slide.title, language) }),
    el(doc, 'p', { class: 'grt-lead', text: textOf(slide.blocks[0].text, language) })
  ]);
}

function slideFooter(doc, slide, language) {
  return el(doc, 'footer', { class: 'grt-footer' }, [
    el(doc, 'span', {
      class: 'grt-footer-badge',
      text: language === 'th' ? 'สรุปสำหรับสอบ' : 'EXAM & PRACTICE CUE'
    }),
    el(doc, 'p', { class: 'grt-footer-text', text: textOf(slide.blocks[4].text, language) })
  ]);
}

function renderPlatformVsSpreadsheets(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const [reqRow, trackRow, distRow] = rows;

  const operationalRows = [
    {
      badge: '01',
      dim: cellText(reqRow, 0, language),
      legacy: cellText(reqRow, 1, language),
      platform: cellText(reqRow, 2, language)
    },
    {
      badge: '02',
      dim: cellText(trackRow, 0, language),
      legacy: cellText(trackRow, 1, language),
      platform: cellText(trackRow, 2, language)
    }
  ];

  return el(doc, 'div', { class: 'grt-canvas grt-platform-layout' }, [
    el(doc, 'div', { class: 'grt-compare-table' }, [
      el(doc, 'div', { class: 'grt-compare-head' }, [
        el(doc, 'div', {
          class: 'grt-compare-col-head is-dim',
          text: language === 'th' ? 'มิติการดำเนินงาน (S08)' : 'Operational Dimension (S08)'
        }),
        el(doc, 'div', { class: 'grt-compare-col-head is-legacy' }, [
          el(doc, 'span', {
            class: 'grt-state-pill is-warn',
            text: language === 'th' ? 'ปัญหาเดิม · แยกไฟล์' : 'FRAGMENTED SPREADSHEETS'
          }),
          el(doc, 'strong', {
            text: language === 'th'
              ? 'แยกเก็บหลายร้อยรายการใน Spreadsheet คนละชุด'
              : 'Hundreds of Requirements in Separate Spreadsheets'
          })
        ]),
        el(doc, 'div', { class: 'grt-compare-col-head is-platform' }, [
          el(doc, 'span', {
            class: 'grt-state-pill is-good',
            text: language === 'th' ? 'GRC PLATFORM · CENTRALIZE + TRACK' : 'GRC PLATFORM · CENTRALIZE + TRACK'
          }),
          el(doc, 'strong', {
            text: language === 'th'
              ? 'แพลตฟอร์มซอฟต์แวร์รวมศูนย์และติดตามสถานะ'
              : 'Centralized Software Platform & Live Tracking'
          })
        ])
      ]),
      ...operationalRows.map(item =>
        el(doc, 'div', { class: 'grt-compare-row' }, [
          el(doc, 'div', { class: 'grt-compare-dim' }, [
            el(doc, 'span', { class: 'grt-step-num', text: item.badge }),
            el(doc, 'strong', { text: item.dim })
          ]),
          el(doc, 'div', { class: 'grt-compare-cell is-legacy' }, [
            el(doc, 'p', { text: item.legacy })
          ]),
          el(doc, 'div', { class: 'grt-compare-cell is-platform' }, [
            el(doc, 'p', { text: item.platform })
          ])
        ])
      )
    ]),
    el(doc, 'div', { class: 'grt-distinction-banner' }, [
      el(doc, 'div', { class: 'grt-distinction-label' }, [
        el(doc, 'span', {
          class: 'grt-distinction-kicker',
          text: language === 'th' ? 'จุดแยกสำคัญในการสอบ' : 'CORE EXAM DISTINCTION'
        }),
        el(doc, 'strong', { text: cellText(distRow, 0, language) })
      ]),
      el(doc, 'div', { class: 'grt-distinction-pair' }, [
        el(doc, 'div', { class: 'grt-distinction-card is-concept' }, [
          el(doc, 'span', { class: 'grt-distinction-tag', text: 'GRC (Approach)' }),
          el(doc, 'p', { text: cellText(distRow, 1, language) })
        ]),
        el(doc, 'div', { class: 'grt-distinction-vs', text: '≠' }),
        el(doc, 'div', { class: 'grt-distinction-card is-tool' }, [
          el(doc, 'span', { class: 'grt-distinction-tag', text: 'GRC Tool (Software Platform)' }),
          el(doc, 'p', { text: cellText(distRow, 2, language) })
        ])
      ])
    ])
  ]);
}

function renderCapabilityWorkflowHub(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  // Rows order in JSON:
  // 0: Risk registers
  // 1: Policy management
  // 2: Compliance tracking
  // 3: Control management
  // 4: Audit management
  // 5: Risk assessments
  const stages = [
    {
      stageNo: 'STAGE 01',
      title: language === 'th' ? 'ประเมินและขึ้นทะเบียนความเสี่ยง' : 'Evaluate & Log Risks',
      subtitle: language === 'th' ? 'จากกิจกรรมประเมินสู่ทะเบียนกลาง' : 'Assessment feeds the living register',
      indices: [5, 0] // Risk assessments -> Risk registers
    },
    {
      stageNo: 'STAGE 02',
      title: language === 'th' ? 'กำหนดนโยบายและมาตรการควบคุม' : 'Govern Policies & Controls',
      subtitle: language === 'th' ? 'แปลงทิศทางสู่มาตรการที่วัดผลได้' : 'Link rules to active safeguards',
      indices: [1, 3] // Policy management -> Control management
    },
    {
      stageNo: 'STAGE 03',
      title: language === 'th' ? 'ติดตามข้อกำหนดและรับการตรวจสอบ' : 'Track Compliance & Audits',
      subtitle: language === 'th' ? 'ใช้หลักฐานชุดเดียวลดงานซ้ำซ้อน' : 'Verify obligations and audit evidence',
      indices: [2, 4] // Compliance tracking -> Audit management
    }
  ];

  return el(doc, 'div', { class: 'grt-canvas grt-workflow-layout' }, [
    el(doc, 'div', { class: 'grt-workflow-spine' }, [
      el(doc, 'span', {
        class: 'grt-spine-badge',
        text: language === 'th' ? 'แพลตฟอร์ม GRC รวมศูนย์ (S08 — ครบ 6 ความสามารถ)' : 'CENTRALIZED GRC PLATFORM WORKFLOW (S08 — ALL 6 CAPABILITIES)'
      }),
      el(doc, 'span', {
        class: 'grt-spine-formula',
        text: language === 'th'
          ? 'Risk assessments → Risk registers → Policy & Control management → Compliance tracking & Audit management'
          : 'Risk assessments → Risk registers → Policy & Control management → Compliance tracking & Audit management'
      })
    ]),
    el(doc, 'div', { class: 'grt-workflow-grid' },
      stages.map((stage, stageIdx) =>
        el(doc, 'section', { class: `grt-stage-column is-stage-${stageIdx + 1}` }, [
          el(doc, 'div', { class: 'grt-stage-head' }, [
            el(doc, 'span', { class: 'grt-stage-no', text: stage.stageNo }),
            el(doc, 'div', { class: 'grt-stage-titles' }, [
              el(doc, 'h4', { text: stage.title }),
              el(doc, 'span', { text: stage.subtitle })
            ])
          ]),
          el(doc, 'div', { class: 'grt-stage-cards' },
            stage.indices.map(rowIndex => {
              const row = rows[rowIndex];
              const s08Order = rowIndex + 1;
              return el(doc, 'article', {
                class: 'grt-cap-card',
                'data-grt-capability': String(rowIndex)
              }, [
                el(doc, 'div', { class: 'grt-cap-top' }, [
                  el(doc, 'span', { class: 'grt-cap-index', text: `S08 #${s08Order}` }),
                  el(doc, 'strong', { class: 'grt-cap-title', text: cellText(row, 0, language) })
                ]),
                el(doc, 'p', { class: 'grt-cap-desc', text: cellText(row, 1, language) })
              ]);
            })
          )
        ])
      )
    )
  ]);
}

function renderRegisterSchemaBlueprint(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const groups = [
    {
      code: '01',
      title: language === 'th' ? 'บริบทความเสี่ยง (1–4)' : 'Risk Context (Fields 1–4)',
      indices: [0, 1, 2, 3]
    },
    {
      code: '02',
      title: language === 'th' ? 'การวิเคราะห์ระดับ (5–7)' : 'Risk Analysis (Fields 5–7)',
      indices: [4, 5, 6]
    },
    {
      code: '03',
      title: language === 'th' ? 'เจ้าภาพและกลยุทธ์ (8–9)' : 'Ownership & Response (8–9)',
      indices: [7, 8]
    },
    {
      code: '04',
      title: language === 'th' ? 'การติดตามต่อเนื่อง (10–11)' : 'Lifecycle Tracking (10–11)',
      indices: [9, 10]
    }
  ];

  return el(doc, 'div', { class: 'grt-canvas grt-schema-layout' }, [
    el(doc, 'div', { class: 'grt-schema-contrast' }, [
      el(doc, 'div', { class: 'grt-contrast-pill is-activity' }, [
        el(doc, 'span', { class: 'grt-pill-tag', text: 'Risk Assessment' }),
        el(doc, 'span', {
          class: 'grt-pill-text',
          text: language === 'th'
            ? 'กิจกรรมการระบุและประเมินความเสี่ยง (Activity / Process)'
            : 'The analytical activity of identifying & evaluating risks'
        })
      ]),
      el(doc, 'div', { class: 'grt-contrast-arrow', text: '→' }),
      el(doc, 'div', { class: 'grt-contrast-pill is-record' }, [
        el(doc, 'span', { class: 'grt-pill-tag', text: 'Risk Register (S09)' }),
        el(doc, 'span', {
          class: 'grt-pill-text',
          text: language === 'th'
            ? 'บันทึกเอกสารของความเสี่ยงที่ระบุแล้วครบ 11 ฟิลด์ (Documented Record)'
            : 'Documented record of identified organizational risks (All 11 Fields)'
        })
      ])
    ]),
    el(doc, 'div', { class: 'grt-schema-columns' },
      groups.map((grp, grpIdx) =>
        el(doc, 'section', { class: `grt-schema-col is-group-${grpIdx + 1}` }, [
          el(doc, 'header', { class: 'grt-schema-col-head' }, [
            el(doc, 'span', { class: 'grt-schema-code', text: grp.code }),
            el(doc, 'h4', { text: grp.title })
          ]),
          el(doc, 'div', { class: 'grt-schema-field-list' },
            grp.indices.map(idx => {
              const row = rows[idx];
              const fieldNo = String(idx + 1).padStart(2, '0');
              return el(doc, 'div', {
                class: 'grt-field-row',
                'data-grt-field': String(idx)
              }, [
                el(doc, 'div', { class: 'grt-field-row-top' }, [
                  el(doc, 'span', { class: 'grt-field-num', text: fieldNo }),
                  el(doc, 'strong', { class: 'grt-field-name', text: cellText(row, 0, language) })
                ]),
                el(doc, 'p', { class: 'grt-field-desc', text: cellText(row, 1, language) })
              ]);
            })
          )
        ])
      )
    )
  ]);
}

function renderScoringAndResponses(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const [scaleRow, quantRow, mitigateRow, avoidRow, transferRow, acceptRow] = rows;
  const strategies = [
    { code: '01 · MITIGATE', tone: 'mitigate', row: mitigateRow },
    { code: '02 · AVOID', tone: 'avoid', row: avoidRow },
    { code: '03 · TRANSFER', tone: 'transfer', row: transferRow },
    { code: '04 · ACCEPT', tone: 'accept', row: acceptRow }
  ];

  return el(doc, 'div', { class: 'grt-canvas grt-scoring-layout' }, [
    el(doc, 'section', { class: 'grt-scoring-panel' }, [
      el(doc, 'div', { class: 'grt-panel-head' }, [
        el(doc, 'span', {
          class: 'grt-panel-kicker',
          text: language === 'th' ? 'ขั้นที่ 1 · จัดลำดับความเสี่ยง (S09)' : 'STEP 1 · PRIORITIZE RISK RATING (S09)'
        }),
        el(doc, 'h4', {
          text: language === 'th'
            ? 'Likelihood × Impact → Risk Rating (Low–Critical / 1–4)'
            : 'Likelihood × Impact → Risk Rating (Low–Critical / 1–4)'
        })
      ]),
      el(doc, 'div', { class: 'grt-scale-strip' }, [
        el(doc, 'div', { class: 'grt-tier-chip is-t1', text: '1 · Low' }),
        el(doc, 'div', { class: 'grt-tier-chip is-t2', text: '2 · Medium' }),
        el(doc, 'div', { class: 'grt-tier-chip is-t3', text: '3 · High' }),
        el(doc, 'div', { class: 'grt-tier-chip is-t4', text: '4 · Critical' })
      ]),
      el(doc, 'div', { class: 'grt-scoring-box is-ordinal' }, [
        el(doc, 'strong', { text: cellText(scaleRow, 0, language) }),
        el(doc, 'p', { text: cellText(scaleRow, 1, language) }),
        el(doc, 'span', { class: 'grt-scoring-note', text: cellText(scaleRow, 2, language) })
      ]),
      el(doc, 'div', { class: 'grt-scoring-box is-guardrail' }, [
        el(doc, 'span', {
          class: 'grt-guardrail-tag',
          text: language === 'th' ? 'ข้อควรระวัง NIST SP 800-30 (D2-Q02)' : 'ACADEMIC GUARDRAIL · NIST SP 800-30 (D2-Q02)'
        }),
        el(doc, 'strong', { text: cellText(quantRow, 0, language) }),
        el(doc, 'p', { text: cellText(quantRow, 1, language) }),
        el(doc, 'span', { class: 'grt-scoring-note', text: cellText(quantRow, 2, language) })
      ])
    ]),
    el(doc, 'section', { class: 'grt-treatment-panel' }, [
      el(doc, 'div', { class: 'grt-panel-head' }, [
        el(doc, 'span', {
          class: 'grt-panel-kicker',
          text: language === 'th' ? 'ขั้นที่ 2 · เลือกกลยุทธ์จัดการความเสี่ยง 4 รูปแบบ' : 'STEP 2 · SELECT TREATMENT STRATEGY (4 OPTIONS)'
        }),
        el(doc, 'h4', {
          text: language === 'th'
            ? 'Mitigate · Avoid · Transfer · Accept'
            : 'Mitigate · Avoid · Transfer · Accept'
        })
      ]),
      el(doc, 'div', { class: 'grt-treatment-grid' },
        strategies.map(item =>
          el(doc, 'article', { class: `grt-treatment-card is-${item.tone}` }, [
            el(doc, 'div', { class: 'grt-treatment-top' }, [
              el(doc, 'span', { class: 'grt-treatment-code', text: item.code }),
              el(doc, 'strong', { text: cellText(item.row, 0, language) })
            ]),
            el(doc, 'p', { class: 'grt-treatment-desc', text: cellText(item.row, 1, language) }),
            el(doc, 'div', { class: 'grt-treatment-rule', text: cellText(item.row, 2, language) })
          ])
        )
      )
    ])
  ]);
}

function renderRansomwareRegisterRecord(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const controlsBreakdown = [
    {
      code: 'CONTROL 01',
      name: 'EDR',
      effect: language === 'th' ? 'ลดโอกาสสำเร็จ & จำกัดผลกระทบ' : 'Reduces Likelihood & Impact',
      detail: language === 'th'
        ? 'ตรวจจับและระงับพฤติกรรมมัลแวร์บนเซิร์ฟเวอร์ตั้งแต่ระยะเริ่มต้น'
        : 'Detects and blocks malicious ransomware execution on server endpoints'
    },
    {
      code: 'CONTROL 02',
      name: 'Backups',
      effect: language === 'th' ? 'ลดผลกระทบ (Impact)' : 'Reduces Impact & Downtime',
      detail: language === 'th'
        ? 'สำรองข้อมูลสำคัญเพื่อให้กู้คืนระบบกลับมาทำงานได้โดยไม่ต้องจ่ายค่าไถ่'
        : 'Restores encrypted server data and operations without paying ransom'
    },
    {
      code: 'CONTROL 03',
      name: 'Network segmentation',
      effect: language === 'th' ? 'จำกัดการแพร่กระจาย (Blast Radius)' : 'Limits Lateral Spread & Impact',
      detail: language === 'th'
        ? 'แยกโซนเครือข่ายเพื่อกั้นไม่ให้แรนซัมแวร์ลามไปยังเซิร์ฟเวอร์สำคัญทั้งหมด'
        : 'Isolates server zones so an infection cannot spread across the network'
    },
    {
      code: 'CONTROL 04',
      name: 'MFA',
      effect: language === 'th' ? 'ลดโอกาสเกิด (Likelihood)' : 'Reduces Initial Likelihood',
      detail: language === 'th'
        ? 'เพิ่มชั้นยืนยันตัวตนป้องกันผู้โจมตีใช้รหัสผ่านที่รั่วไหลเข้ายึดเซิร์ฟเวอร์'
        : 'Blocks attackers from logging in with stolen passwords alone'
    }
  ];

  return el(doc, 'div', { class: 'grt-canvas grt-ransomware-layout' }, [
    el(doc, 'section', { class: 'grt-ledger-sheet' }, [
      el(doc, 'header', { class: 'grt-ledger-bar' }, [
        el(doc, 'div', { class: 'grt-ledger-id' }, [
          el(doc, 'span', { class: 'grt-ledger-badge', text: 'RISK REGISTER RECORD · S10 WORKED EXAMPLE' }),
          el(doc, 'strong', {
            text: language === 'th'
              ? 'ระเบียนตัวอย่างจากสไลด์ S10 (ครบทั้ง 6 รายการ)'
              : 'Authoritative 6-Field Risk Register Entry (Course Slide S10)'
          })
        ]),
        el(doc, 'span', {
          class: 'grt-ledger-status',
          text: language === 'th' ? 'สถานะ: กำหนดแผน Mitigation แล้ว' : 'STATUS: ACTIVE MITIGATION PLAN'
        })
      ]),
      el(doc, 'div', { class: 'grt-ledger-fields' },
        rows.map((row, idx) => {
          const isSeverity = idx === 1 || idx === 2;
          return el(doc, 'article', {
            class: `grt-worked-cell is-field-${idx + 1}${isSeverity ? ' is-high-severity' : ''}`,
            'data-grt-worked-field': String(idx)
          }, [
            el(doc, 'span', { class: 'grt-worked-label', text: cellText(row, 0, language) }),
            el(doc, 'strong', { class: 'grt-worked-value', text: cellText(row, 1, language) }),
            el(doc, 'p', { class: 'grt-worked-role', text: cellText(row, 2, language) })
          ]);
        })
      )
    ]),
    el(doc, 'section', { class: 'grt-controls-strip' }, [
      el(doc, 'div', { class: 'grt-strip-head' }, [
        el(doc, 'span', {
          class: 'grt-strip-kicker',
          text: language === 'th'
            ? 'กลไกการทำงานของ Controls ทั้ง 4 ชั้น (Defense in Depth — Domain 2.md §5.3)'
            : 'HOW THE 4 LAYERED CONTROLS WORK TOGETHER (DEFENSE IN DEPTH — DOMAIN 2.MD §5.3)'
        })
      ]),
      el(doc, 'div', { class: 'grt-controls-grid' },
        controlsBreakdown.map((ctrl, idx) =>
          el(doc, 'div', {
            class: 'grt-control-card',
            'data-grt-control-item': String(idx)
          }, [
            el(doc, 'div', { class: 'grt-control-top' }, [
              el(doc, 'strong', { class: 'grt-control-name', text: ctrl.name }),
              el(doc, 'span', { class: 'grt-control-effect', text: ctrl.effect })
            ]),
            el(doc, 'p', { class: 'grt-control-detail', text: ctrl.detail })
          ])
        )
      )
    ])
  ]);
}

function renderResidualOwnershipPipeline(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const [inherentRow, controlsRow, residualRow, ownerRow] = rows;

  return el(doc, 'div', { class: 'grt-canvas grt-residual-layout' }, [
    el(doc, 'section', { class: 'grt-equation-row' }, [
      el(doc, 'article', { class: 'grt-eq-card is-inherent' }, [
        el(doc, 'span', { class: 'grt-eq-step', text: '01 · BASELINE EXPOSURE' }),
        el(doc, 'h4', { text: cellText(inherentRow, 0, language) }),
        el(doc, 'p', { text: cellText(inherentRow, 1, language) }),
        el(doc, 'div', { class: 'grt-eq-note', text: cellText(inherentRow, 2, language) })
      ]),
      el(doc, 'div', { class: 'grt-eq-operator', text: '−' }),
      el(doc, 'article', { class: 'grt-eq-card is-controls' }, [
        el(doc, 'span', { class: 'grt-eq-step', text: '02 · SAFEGUARDS APPLIED' }),
        el(doc, 'h4', { text: cellText(controlsRow, 0, language) }),
        el(doc, 'p', { text: cellText(controlsRow, 1, language) }),
        el(doc, 'div', { class: 'grt-eq-note', text: cellText(controlsRow, 2, language) })
      ]),
      el(doc, 'div', { class: 'grt-eq-operator', text: '=' }),
      el(doc, 'article', { class: 'grt-eq-card is-residual' }, [
        el(doc, 'span', { class: 'grt-eq-step', text: '03 · REMAINING EXPOSURE (S10: > 0)' }),
        el(doc, 'h4', { text: cellText(residualRow, 0, language) }),
        el(doc, 'p', { text: cellText(residualRow, 1, language) }),
        el(doc, 'div', { class: 'grt-eq-note is-alert', text: cellText(residualRow, 2, language) })
      ])
    ]),
    el(doc, 'section', { class: 'grt-owner-charter' }, [
      el(doc, 'div', { class: 'grt-owner-summary' }, [
        el(doc, 'span', {
          class: 'grt-owner-kicker',
          text: language === 'th' ? 'ความรับผิดชอบของ Risk Owner (Domain 2.md §5.3)' : 'RISK OWNER ACCOUNTABILITY (DOMAIN 2.MD §5.3)'
        }),
        el(doc, 'h4', { text: cellText(ownerRow, 0, language) }),
        el(doc, 'p', { text: cellText(ownerRow, 1, language) })
      ]),
      el(doc, 'div', { class: 'grt-owner-split' }, [
        el(doc, 'div', { class: 'grt-owner-box is-do' }, [
          el(doc, 'span', {
            class: 'grt-owner-tag',
            text: language === 'th' ? 'สิ่งที่ Risk Owner รับผิดชอบจริง (Accountable)' : 'WHAT RISK OWNERSHIP MEANS (ACCOUNTABLE)'
          }),
          el(doc, 'p', {
            text: language === 'th'
              ? 'กำกับดูแลให้มีการจัดการความเสี่ยง ติดตามสถานะ Controls และทบทวน Residual Risk ร่วมกับฝ่ายบริหาร'
              : 'Accountable for ensuring the risk is treated, controls are tracked, and residual risk stays within acceptable thresholds.'
          })
        ]),
        el(doc, 'div', { class: 'grt-owner-box is-not' }, [
          el(doc, 'span', {
            class: 'grt-owner-tag',
            text: language === 'th' ? 'ความเข้าใจผิดที่พบบ่อยในข้อสอบ' : 'COMMON EXAM MISCONCEPTION'
          }),
          el(doc, 'p', { text: cellText(ownerRow, 2, language) })
        ])
      ])
    ])
  ]);
}

function renderRegisterTriageScenario(doc, slide, language, interactionState, controller) {
  const rows = slide.blocks[1].rows;
  const recommendedIndex = 2; // Option C

  const root = el(doc, 'div', { class: 'grt-canvas grt-scenario-layout' });
  const optionsList = el(doc, 'div', {
    class: 'grt-scenario-options',
    role: 'group',
    'aria-label': language === 'th' ? 'ตัวเลือกการตัดสินใจ' : 'Scenario decision options'
  });
  const feedbackBox = el(doc, 'div', {
    class: 'grt-scenario-feedback',
    'data-grt-scenario-feedback': '',
    'aria-live': 'polite'
  });

  function updateView() {
    const selected = Number.isInteger(interactionState.choice) ? interactionState.choice : null;

    optionsList.replaceChildren(
      ...rows.map((row, idx) => {
        const isSelected = selected === idx;
        const isRecommended = idx === recommendedIndex;
        let stateClass = '';
        if (isSelected) {
          stateClass = isRecommended ? ' is-selected is-recommended' : ' is-selected is-distractor';
        }
        const btn = el(doc, 'button', {
          type: 'button',
          class: `grt-option-btn${stateClass}`,
          'data-grt-scenario-choice': String(idx),
          'aria-pressed': isSelected ? 'true' : 'false'
        }, [
          el(doc, 'div', { class: 'grt-option-head' }, [
            el(doc, 'span', {
              class: 'grt-option-letter',
              text: String.fromCharCode(65 + idx)
            }),
            el(doc, 'strong', {
              class: 'grt-option-title',
              text: cellText(row, 0, language)
            })
          ]),
          el(doc, 'p', {
            class: 'grt-option-action',
            text: cellText(row, 1, language)
          })
        ]);

        btn.addEventListener(
          'click',
          () => {
            interactionState.choice = idx;
            updateView();
          },
          { signal: controller.signal }
        );
        return btn;
      })
    );

    if (selected === null || !rows[selected]) {
      feedbackBox.setAttribute('data-grt-outcome', 'idle');
      feedbackBox.className = 'grt-scenario-feedback is-idle';
      feedbackBox.replaceChildren(
        el(doc, 'span', {
          class: 'grt-feedback-kicker',
          text: language === 'th' ? 'วิเคราะห์การตัดสินใจด้าน GRC & Risk Register' : 'GRC & RISK REGISTER DECISION EVALUATION'
        }),
        el(doc, 'h4', {
          class: 'grt-feedback-title',
          text: language === 'th'
            ? 'เลือกตัวเลือก A–D ด้านซ้ายเพื่อตรวจสอบผลวิเคราะห์ตามหลัก Objective 2.1'
            : 'Select Option A–D on the left to evaluate the governance & Risk Register outcome'
        }),
        el(doc, 'p', {
          class: 'grt-feedback-body',
          text: language === 'th'
            ? 'พิจารณาว่าตัวเลือกใดเปลี่ยนจาก Spreadsheet แยกส่วนมาสู่การบันทึก Risk Register กลาง กำหนด Risk Owner ใช้ Controls ทั้ง 4 ชั้นจาก S10 และติดตาม Residual Risk (> 0) ได้ถูกต้องครบถ้วน'
            : 'Evaluate which choice replaces 14 disconnected spreadsheets with a centralized Risk Register entry, assigns an accountable Risk Owner, applies the four S10 controls, and tracks non-zero Residual Risk.'
        }),
        el(doc, 'div', { class: 'grt-feedback-checklist' }, [
          el(doc, 'span', { class: 'grt-check-pill', text: 'S08 · Centralize + Track' }),
          el(doc, 'span', { class: 'grt-check-pill', text: 'S09 · 11 Register Fields' }),
          el(doc, 'span', { class: 'grt-check-pill', text: 'S10 · 4 Layered Controls' }),
          el(doc, 'span', { class: 'grt-check-pill', text: 'D2-Q06 · Residual Risk > 0' })
        ])
      );
      return;
    }

    const chosenRow = rows[selected];
    const isRecommended = selected === recommendedIndex;
    const outcome = isRecommended ? 'recommended' : 'distractor';
    feedbackBox.setAttribute('data-grt-outcome', outcome);
    feedbackBox.className = `grt-scenario-feedback is-${outcome}`;

    feedbackBox.replaceChildren(
      el(doc, 'span', {
        class: 'grt-feedback-kicker',
        text: isRecommended
          ? (language === 'th' ? 'แนวทางที่เหมาะสมที่สุดตามหลัก GRC (RECOMMENDED)' : 'RECOMMENDED GRC & RISK REGISTER ACTION')
          : (language === 'th' ? 'จุดที่ยังไม่สอดคล้องกับหลัก GRC (LESS SUITABLE)' : 'GOVERNANCE & RISK REGISTER GAP IDENTIFIED')
      }),
      el(doc, 'h4', {
        class: 'grt-feedback-title',
        text: cellText(chosenRow, 0, language)
      }),
      el(doc, 'p', {
        class: 'grt-feedback-body',
        text: cellText(chosenRow, 2, language)
      }),
      el(doc, 'div', { class: 'grt-feedback-summary' }, [
        el(doc, 'strong', {
          text: language === 'th' ? 'หลักการสำคัญที่ต้องเชื่อมโยง:' : 'Key Objective 2.1 Verification:'
        }),
        el(doc, 'p', {
          text: isRecommended
            ? (language === 'th'
              ? 'ครบถ้วนทั้งการรวมศูนย์ด้วย GRC Platform (S08) การบันทึกโครงสร้าง Risk Register (S09) การระบุ IT Manager เป็น Risk Owner พร้อม Controls 4 ชั้น (S10) และการติดตาม Residual Risk ที่ยังมากกว่าศูนย์ (D2-Q06)'
              : 'Integrates centralized GRC platform tracking (S08), documented Risk Register structure (S09), IT Manager ownership and four layered controls (S10), and non-zero Residual Risk tracking (D2-Q06).')
            : (language === 'th'
              ? 'ลองเปรียบเทียบกับตัวเลือก C ซึ่งรวมศูนย์ข้อมูลใน Risk Register ของแพลตฟอร์ม GRC กำหนด IT Manager เป็น Risk Owner ใช้แผน Mitigation 4 ชั้น และบันทึก Residual risk (> 0) อย่างถูกต้อง'
              : 'Compare with Option C, which logs the finding in the centralized GRC Risk Register, assigns the IT Manager as accountable Risk Owner, tracks the four S10 mitigation controls, and records Residual risk (> 0).')
        })
      ])
    );
  }

  updateView();
  root.append(optionsList, feedbackBox);
  return root;
}

export function renderGrcToolsRiskRegisterPresentation(host, context = {}) {
  const { lesson, slide, language = 'en', interactionState = {} } = context;
  const doc = host.ownerDocument;
  const spec = COMPOSITIONS[slide.id];
  const controller = new AbortController();

  let canvas = null;
  let tagEn = 'GRC TOOLS & RISK REGISTER';
  let tagTh = 'เครื่องมือ GRC และทะเบียนความเสี่ยง';

  switch (spec.kind) {
    case 'platform-vs-spreadsheets':
      tagEn = 'SLIDE 1 · GRC PLATFORM VS. SPREADSHEETS (S08)';
      tagTh = 'สไลด์ 1 · แพลตฟอร์ม GRC เทียบกับ Spreadsheet แยกส่วน (S08)';
      canvas = renderPlatformVsSpreadsheets(doc, slide, language);
      break;
    case 'capability-workflow-hub':
      tagEn = 'SLIDE 2 · SIX CORE GRC TOOL CAPABILITIES (S08)';
      tagTh = 'สไลด์ 2 · ความสามารถหลัก 6 ด้านของ GRC Tools (S08)';
      canvas = renderCapabilityWorkflowHub(doc, slide, language);
      break;
    case 'register-schema-blueprint':
      tagEn = 'SLIDE 3 · RISK REGISTER ANATOMY — ALL 11 FIELDS (S09)';
      tagTh = 'สไลด์ 3 · โครงสร้าง Risk Register ทั้ง 11 ฟิลด์ (S09)';
      canvas = renderRegisterSchemaBlueprint(doc, slide, language);
      break;
    case 'scoring-and-responses':
      tagEn = 'SLIDE 4 · RISK SCORING & 4 TREATMENT STRATEGIES (S09)';
      tagTh = 'สไลด์ 4 · การจัดระดับความเสี่ยงและกลยุทธ์จัดการ 4 รูปแบบ (S09)';
      canvas = renderScoringAndResponses(doc, slide, language);
      break;
    case 'ransomware-register-record':
      tagEn = 'SLIDE 5 · WORKED EXAMPLE: RANSOMWARE RISK RECORD (S10)';
      tagTh = 'สไลด์ 5 · ตัวอย่างบันทึกความเสี่ยง Ransomware (S10)';
      canvas = renderRansomwareRegisterRecord(doc, slide, language);
      break;
    case 'residual-ownership-pipeline':
      tagEn = 'SLIDE 6 · RESIDUAL RISK (> 0) & RISK OWNER ACCOUNTABILITY (S10)';
      tagTh = 'สไลด์ 6 · Residual Risk (> 0) และความรับผิดชอบของ Risk Owner (S10)';
      canvas = renderResidualOwnershipPipeline(doc, slide, language);
      break;
    case 'register-triage-scenario':
      tagEn = 'SLIDE 7 · APPLIED RISK REGISTER SCENARIO';
      tagTh = 'สไลด์ 7 · สถานการณ์ประยุกต์ใช้ GRC Tool และ Risk Register';
      canvas = renderRegisterTriageScenario(doc, slide, language, interactionState, controller);
      break;
    default:
      canvas = renderPlatformVsSpreadsheets(doc, slide, language);
      break;
  }

  const scene = el(
    doc,
    'section',
    {
      class: `grt-scene grt-${spec.kind}`,
      'data-grc-tools-composition': spec.kind,
      lang: language
    },
    [slideHeader(doc, slide, language, tagEn, tagTh), canvas, slideFooter(doc, slide, language)]
  );

  host.append(scene);
  return {
    destroy() {
      controller.abort();
    }
  };
}
