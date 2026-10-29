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

export const LESSON_ID = 'lesson-d2-03-business-continuity-bcp';

const COMPOSITIONS = Object.freeze({
  'slide-01-redundancy-and-bc-foundations': { kind: 'redundancy-continuity-bridge', rows: 4 },
  'slide-02-eight-disruption-triggers': { kind: 'disruption-trigger-matrix', rows: 8 },
  'slide-03-bcp-and-eight-elements': { kind: 'bcp-architecture-blueprint', rows: 8 },
  'slide-04-operational-redundancy-strategies': { kind: 'operational-redundancy-lanes', rows: 4 },
  'slide-05-bia-and-recovery-priorities': { kind: 'bia-priority-pipeline', rows: 4 },
  'slide-06-continuity-decision-scenario': { kind: 'continuity-response-scenario', rows: 4 }
});

function hasExpectedShape(slide, spec) {
  const blocks = Array.isArray(slide?.blocks) ? slide.blocks : [];
  if (blocks.length < 5) return false;
  if (blocks[0]?.kind !== 'text' || blocks[1]?.kind !== 'table' || blocks[4]?.kind !== 'text') return false;
  const rows = blocks[1]?.rows;
  return Array.isArray(rows) && rows.length === spec.rows && rows.every(r => Array.isArray(r) && r.length >= 3);
}

export function hasBusinessContinuityBcpPresentation({ lesson, slide } = {}) {
  const spec = COMPOSITIONS[slide?.id];
  if (lesson?.id !== LESSON_ID || !spec) return false;
  return hasExpectedShape(slide, spec);
}

function cellText(row, colIndex, language) {
  return textOf(row?.[colIndex], language);
}

function slideHeader(doc, slide, language, tagEn, tagTh) {
  return el(doc, 'header', { class: 'bcb-header' }, [
    el(doc, 'div', { class: 'bcb-header-top' }, [
      el(doc, 'span', { class: 'bcb-eyebrow', text: language === 'th' ? tagTh : tagEn }),
      el(doc, 'span', {
        class: 'bcb-domain-pill',
        text: language === 'th' ? 'Domain 2 · Objective 2.2' : 'Domain 2 · Objective 2.2'
      })
    ]),
    el(doc, 'h3', { class: 'bcb-title', text: textOf(slide.title, language) }),
    el(doc, 'p', { class: 'bcb-lead', text: textOf(slide.blocks[0].text, language) })
  ]);
}

function slideFooter(doc, slide, language) {
  return el(doc, 'footer', { class: 'bcb-footer' }, [
    el(doc, 'span', {
      class: 'bcb-footer-badge',
      text: language === 'th' ? 'สรุปสำหรับสอบ' : 'EXAM & PRACTICE CUE'
    }),
    el(doc, 'p', { class: 'bcb-footer-text', text: textOf(slide.blocks[4].text, language) })
  ]);
}

function renderRedundancyContinuityBridge(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const [bcRow, redRow, backupRow, comboRow] = rows;

  const pillars = language === 'th'
    ? [
        { code: 'P1', label: 'People (บุคลากรสำรอง)' },
        { code: 'P2', label: 'Processes (ขั้นตอนสำรอง)' },
        { code: 'P3', label: 'Facilities (สถานที่สำรอง)' },
        { code: 'P4', label: 'Suppliers (คู่ค้าสำรอง)' },
        { code: 'P5', label: 'Technology (ระบบจำเป็น)' }
      ]
    : [
        { code: 'P1', label: 'People (Backup Staff)' },
        { code: 'P2', label: 'Processes (Workarounds)' },
        { code: 'P3', label: 'Facilities (Alt Sites)' },
        { code: 'P4', label: 'Suppliers (Alt Vendors)' },
        { code: 'P5', label: 'Technology (Core IT)' }
      ];

  return el(doc, 'div', { class: 'bcb-canvas bcb-bridge-layout' }, [
    el(doc, 'section', { class: 'bcb-bridge-banner' }, [
      el(doc, 'div', { class: 'bcb-bridge-top' }, [
        el(doc, 'span', {
          class: 'bcb-tag-pill is-primary',
          text: language === 'th' ? 'BUSINESS CONTINUITY (BC) · S12' : 'BUSINESS CONTINUITY (BC) · S12'
        }),
        el(doc, 'strong', { class: 'bcb-bridge-headline', text: cellText(bcRow, 1, language) }),
        el(doc, 'span', {
          class: 'bcb-tag-pill is-accent',
          text: language === 'th' ? 'BC = Keep the Business Running' : 'BC = Keep the Business Running'
        })
      ]),
      el(doc, 'div', { class: 'bcb-pillar-strip' }, pillars.map(p =>
        el(doc, 'div', { class: 'bcb-pillar-chip' }, [
          el(doc, 'span', { class: 'bcb-pillar-code', text: p.code }),
          el(doc, 'span', { class: 'bcb-pillar-label', text: p.label })
        ])
      ))
    ]),
    el(doc, 'div', { class: 'bcb-dual-contrast' }, [
      el(doc, 'article', { class: 'bcb-contrast-card is-redundancy' }, [
        el(doc, 'div', { class: 'bcb-contrast-head' }, [
          el(doc, 'span', {
            class: 'bcb-state-pill is-blue',
            text: language === 'th' ? 'REDUNDANCY · ลดจุดล้มเหลวเดี่ยว (SPOF)' : 'REDUNDANCY · ELIMINATES SPOF'
          }),
          el(doc, 'h4', { class: 'bcb-contrast-title', text: cellText(redRow, 0, language) })
        ]),
        el(doc, 'p', { class: 'bcb-contrast-body', text: cellText(redRow, 1, language) }),
        el(doc, 'div', { class: 'bcb-contrast-note', text: cellText(redRow, 2, language) })
      ]),
      el(doc, 'article', { class: 'bcb-contrast-card is-backup' }, [
        el(doc, 'div', { class: 'bcb-contrast-head' }, [
          el(doc, 'span', {
            class: 'bcb-state-pill is-teal',
            text: language === 'th' ? 'BACKUP · สำเนาข้อมูลเพื่อกู้คืน' : 'BACKUP · RECOVERABLE DATA COPY'
          }),
          el(doc, 'h4', { class: 'bcb-contrast-title', text: cellText(backupRow, 0, language) })
        ]),
        el(doc, 'p', { class: 'bcb-contrast-body', text: cellText(backupRow, 1, language) }),
        el(doc, 'div', { class: 'bcb-contrast-note', text: cellText(backupRow, 2, language) })
      ])
    ]),
    el(doc, 'div', { class: 'bcb-synthesis-bar' }, [
      el(doc, 'span', {
        class: 'bcb-synthesis-tag',
        text: language === 'th' ? 'ทำไมต้องใช้ร่วมกัน' : 'WHY NEITHER ALONE IS ENOUGH'
      }),
      el(doc, 'p', { class: 'bcb-synthesis-copy', text: `${cellText(comboRow, 1, language)} — ${cellText(comboRow, 2, language)}` })
    ])
  ]);
}

function renderDisruptionTriggerMatrix(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const groups = [
    {
      tone: 'is-env',
      title: language === 'th' ? '1. ภัยธรรมชาติ อาคาร และพลังงาน' : '1. Environmental, Facility & Utility',
      indices: [0, 2, 6]
    },
    {
      tone: 'is-cyber',
      title: language === 'th' ? '2. ภัยไซเบอร์และระบบเทคนิค' : '2. Cyber, Hardware & Network',
      indices: [1, 3, 4]
    },
    {
      tone: 'is-eco',
      title: language === 'th' ? '3. บุคลากร ซัพพลายเออร์ และ Human Error' : '3. Workforce, Supply Chain & Human Error',
      indices: [5, 7]
    }
  ];

  return el(doc, 'div', { class: 'bcb-canvas bcb-triggers-layout' }, [
    el(doc, 'div', { class: 'bcb-trigger-clusters' }, groups.map(group =>
      el(doc, 'section', { class: `bcb-trigger-cluster ${group.tone}` }, [
        el(doc, 'header', { class: 'bcb-cluster-head' }, [
          el(doc, 'h4', { class: 'bcb-cluster-title', text: group.title }),
          el(doc, 'span', {
            class: 'bcb-cluster-count',
            text: language === 'th' ? `${group.indices.length} รายการ (S12)` : `${group.indices.length} S12 Triggers`
          })
        ]),
        el(doc, 'div', { class: 'bcb-trigger-list' }, group.indices.map(idx => {
          const row = rows[idx];
          return el(doc, 'article', {
            class: 'bcb-trigger-card',
            'data-bcb-trigger': String(idx + 1)
          }, [
            el(doc, 'div', { class: 'bcb-trigger-card-top' }, [
              el(doc, 'strong', { class: 'bcb-trigger-name', text: cellText(row, 0, language) })
            ]),
            el(doc, 'p', { class: 'bcb-trigger-desc', text: cellText(row, 1, language) }),
            el(doc, 'p', { class: 'bcb-trigger-goal', text: cellText(row, 2, language) })
          ]);
        }))
      ])
    )),
    el(doc, 'div', { class: 'bcb-trigger-callout' }, [
      el(doc, 'span', {
        class: 'bcb-state-pill is-amber',
        text: language === 'th' ? '+ HUMAN ERROR (T:L35) → BC GOAL' : '+ HUMAN ERROR (T:L35) → BC GOAL'
      }),
      el(doc, 'p', {
        class: 'bcb-trigger-callout-text',
        text: language === 'th'
          ? 'นอกจาก 8 สาเหตุในสไลด์ S12 แล้ว ผู้สอนยังเน้น Human Error (ความผิดพลาดจากคน) ว่าเป็นสาเหตุสำคัญ — เป้าหมายของ BC คือประคองงานหลักให้ดำเนินต่อได้ทั้งระหว่างและหลังเกิดเหตุ'
          : 'Alongside all 8 slide S12 triggers, the instructor highlights Human Error (accidental mistakes/misconfigurations) — BC keeps essential functions operating during and after any disruption.'
      })
    ])
  ]);
}

function renderBcpArchitectureBlueprint(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const groups = [
    {
      code: 'A',
      title: language === 'th' ? 'ขอบเขตงานหลักและลำดับความสำคัญ' : 'Core Scope & Priority Order',
      indices: [0, 7]
    },
    {
      code: 'B',
      title: language === 'th' ? 'การสั่งการและการสื่อสารยามวิกฤต' : 'Crisis Command & Communication',
      indices: [1, 2]
    },
    {
      code: 'C',
      title: language === 'th' ? 'ความซ้ำซ้อนด้านสถานที่และบุคลากร' : 'Facility & Workforce Redundancy',
      indices: [3, 4]
    },
    {
      code: 'D',
      title: language === 'th' ? 'ห่วงโซ่อุปทานและเทคโนโลยีจำเป็น' : 'Ecosystem & Essential Technology',
      indices: [5, 6]
    }
  ];

  return el(doc, 'div', { class: 'bcb-canvas bcp-blueprint-layout' }, [
    el(doc, 'div', { class: 'bcb-distinction-ribbon' }, [
      el(doc, 'div', { class: 'bcb-distinction-side is-bc' }, [
        el(doc, 'span', { class: 'bcb-tag-pill is-primary', text: 'BC (Business Continuity)' }),
        el(doc, 'span', {
          class: 'bcb-distinction-text',
          text: language === 'th'
            ? 'ความสามารถและเป้าหมายขององค์กรในการดำเนินงานหลักต่อเนื่อง'
            : 'Organizational capability & goal of continuing critical operations'
        })
      ]),
      el(doc, 'span', { class: 'bcb-distinction-vs', text: '≠' }),
      el(doc, 'div', { class: 'bcb-distinction-side is-bcp' }, [
        el(doc, 'span', { class: 'bcb-tag-pill is-accent', text: 'BCP (Business Continuity Plan)' }),
        el(doc, 'span', {
          class: 'bcb-distinction-text',
          text: language === 'th'
            ? 'เอกสารแผนอย่างเป็นทางการที่ระบุขั้นตอนและองค์ประกอบทั้ง 8 ข้อ (S14)'
            : 'Documented plan specifying how critical operations continue across 8 elements (S14)'
        })
      ])
    ]),
    el(doc, 'div', { class: 'bcb-bcp-grid' }, groups.map(group =>
      el(doc, 'section', { class: 'bcb-bcp-quadrant' }, [
        el(doc, 'header', { class: 'bcb-quadrant-head' }, [
          el(doc, 'span', { class: 'bcb-quadrant-badge', text: group.code }),
          el(doc, 'h4', { class: 'bcb-quadrant-title', text: group.title })
        ]),
        el(doc, 'div', { class: 'bcb-quadrant-items' }, group.indices.map(idx => {
          const row = rows[idx];
          return el(doc, 'article', {
            class: 'bcb-element-card',
            'data-bcb-element': String(idx + 1)
          }, [
            el(doc, 'div', { class: 'bcb-element-top' }, [
              el(doc, 'strong', { class: 'bcb-element-name', text: cellText(row, 0, language) }),
              el(doc, 'span', { class: 'bcb-element-q', text: cellText(row, 2, language) })
            ]),
            el(doc, 'p', { class: 'bcb-element-role', text: cellText(row, 1, language) })
          ]);
        }))
      ])
    ))
  ]);
}

function renderOperationalRedundancyLanes(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  return el(doc, 'div', { class: 'bcb-canvas bcb-lanes-layout' }, [
    el(doc, 'div', { class: 'bcb-lanes-head' }, [
      el(doc, 'div', {
        class: 'bcb-lane-col-head is-pillar',
        text: language === 'th' ? 'องค์ประกอบ BCP (S14 / S19)' : 'BCP Redundancy Pillar (S14 / S19)'
      }),
      el(doc, 'div', {
        class: 'bcb-lane-col-head is-spof',
        text: language === 'th' ? 'จุดล้มเหลวเดี่ยว (SPOF) หากไม่มีแผน' : 'Single Point of Failure (SPOF) Exposure'
      }),
      el(doc, 'div', {
        class: 'bcb-lane-col-head is-strategy',
        text: language === 'th' ? 'กลยุทธ์ความต่อเนื่องในการปฏิบัติงานจริง' : 'Operational Redundancy & Continuity Action'
      })
    ]),
    el(doc, 'div', { class: 'bcb-lanes-body' }, rows.map((row, idx) =>
      el(doc, 'article', {
        class: 'bcb-lane-row',
        'data-bcb-redundancy-lane': String(idx + 1)
      }, [
        el(doc, 'div', { class: 'bcb-lane-cell is-pillar' }, [
          el(doc, 'span', { class: 'bcb-lane-index', text: `0${idx + 1}` }),
          el(doc, 'strong', { class: 'bcb-lane-title', text: cellText(row, 0, language) })
        ]),
        el(doc, 'div', { class: 'bcb-lane-cell is-spof' }, [
          el(doc, 'span', {
            class: 'bcb-mini-badge is-warn',
            text: language === 'th' ? 'SPOF RISK' : 'SPOF RISK'
          }),
          el(doc, 'p', { class: 'bcb-lane-text', text: cellText(row, 1, language) })
        ]),
        el(doc, 'div', { class: 'bcb-lane-cell is-strategy' }, [
          el(doc, 'span', {
            class: 'bcb-mini-badge is-good',
            text: language === 'th' ? 'REDUNDANT DESIGN' : 'REDUNDANT DESIGN'
          }),
          el(doc, 'p', { class: 'bcb-lane-text', text: cellText(row, 2, language) })
        ])
      ])
    ))
  ]);
}

function renderBiaPriorityPipeline(doc, slide, language) {
  const rows = slide.blocks[1].rows;
  const [biaRow, prioRow, bcpRow, drpRow] = rows;

  const pipelineSteps = [
    {
      step: 'STEP 01 · ANALYZE',
      tone: 'is-bia',
      title: cellText(biaRow, 0, language),
      role: cellText(biaRow, 1, language),
      note: cellText(biaRow, 2, language)
    },
    {
      step: 'STEP 02 · PRIORITIZE',
      tone: 'is-prio',
      title: cellText(prioRow, 0, language),
      role: cellText(prioRow, 1, language),
      note: cellText(prioRow, 2, language)
    }
  ];

  return el(doc, 'div', { class: 'bcb-canvas bcb-bia-layout' }, [
    el(doc, 'div', { class: 'bcb-bia-pipeline' }, pipelineSteps.map((s, idx) =>
      el(doc, 'article', {
        class: `bcb-bia-step ${s.tone}`,
        'data-bcb-bia-stage': String(idx + 1)
      }, [
        el(doc, 'div', { class: 'bcb-bia-step-top' }, [
          el(doc, 'span', { class: 'bcb-state-pill is-blue', text: s.step }),
          el(doc, 'h4', { class: 'bcb-bia-step-title', text: s.title })
        ]),
        el(doc, 'p', { class: 'bcb-bia-step-body', text: s.role }),
        el(doc, 'p', { class: 'bcb-bia-step-note', text: s.note })
      ])
    )),
    el(doc, 'section', { class: 'bcb-boundary-board' }, [
      el(doc, 'header', { class: 'bcb-boundary-head' }, [
        el(doc, 'span', {
          class: 'bcb-tag-pill is-primary',
          text: language === 'th' ? 'ขอบเขตสำคัญจากตาราง S19 · BCP vs. DRP (DR ⊂ BC)' : 'S19 ARCHITECTURAL BOUNDARY · BCP vs. DRP (DR ⊂ BC)'
        })
      ]),
      el(doc, 'div', { class: 'bcb-boundary-cols' }, [
        el(doc, 'article', {
          class: 'bcb-boundary-card is-bcp',
          'data-bcb-bia-stage': '3'
        }, [
          el(doc, 'div', { class: 'bcb-boundary-card-top' }, [
            el(doc, 'span', {
              class: 'bcb-state-pill is-good',
              text: language === 'th' ? 'UMBRELLA PLAN · ระดับธุรกิจทั้งหมด' : 'UMBRELLA PLAN · WHOLE BUSINESS'
            }),
            el(doc, 'strong', { class: 'bcb-boundary-title', text: cellText(bcpRow, 0, language) })
          ]),
          el(doc, 'p', { class: 'bcb-boundary-body', text: cellText(bcpRow, 1, language) }),
          el(doc, 'p', { class: 'bcb-boundary-meta', text: cellText(bcpRow, 2, language) })
        ]),
        el(doc, 'article', {
          class: 'bcb-boundary-card is-drp',
          'data-bcb-bia-stage': '4'
        }, [
          el(doc, 'div', { class: 'bcb-boundary-card-top' }, [
            el(doc, 'span', {
              class: 'bcb-state-pill is-teal',
              text: language === 'th' ? 'SUPPORTING COMPONENT · เฉพาะระบบ IT' : 'SUPPORTING COMPONENT · IT FOCUS'
            }),
            el(doc, 'strong', { class: 'bcb-boundary-title', text: cellText(drpRow, 0, language) })
          ]),
          el(doc, 'p', { class: 'bcb-boundary-body', text: cellText(drpRow, 1, language) }),
          el(doc, 'p', { class: 'bcb-boundary-meta', text: cellText(drpRow, 2, language) })
        ])
      ])
    ])
  ]);
}

function renderContinuityScenario(doc, slide, language, interactionState, signal) {
  const rows = slide.blocks[1].rows;
  const recommendedIndex = 1; // Option B is the recommended BCP + redundancy response

  const root = el(doc, 'div', { class: 'bcb-canvas bcb-scenario-layout' });

  const brief = el(doc, 'section', { class: 'bcb-scenario-brief' }, [
    el(doc, 'div', { class: 'bcb-scenario-chips' }, [
      el(doc, 'span', {
        class: 'bcb-tag-pill is-warn',
        text: language === 'th' ? 'FLOOD + LOSS OF FACILITY' : 'FLOOD + LOSS OF FACILITY'
      }),
      el(doc, 'span', {
        class: 'bcb-tag-pill is-warn',
        text: language === 'th' ? 'KEY MANAGER UNREACHABLE' : 'KEY MANAGER UNREACHABLE'
      }),
      el(doc, 'span', {
        class: 'bcb-tag-pill is-warn',
        text: language === 'th' ? 'PRIMARY ISP DOWN' : 'PRIMARY ISP DOWN'
      }),
      el(doc, 'span', {
        class: 'bcb-tag-pill is-primary',
        text: language === 'th' ? 'GOAL: KEEP CRITICAL OPS RUNNING' : 'GOAL: KEEP CRITICAL OPS RUNNING'
      })
    ]),
    el(doc, 'p', {
      class: 'bcb-scenario-prompt',
      text: language === 'th'
        ? 'เลือกแนวทางตัดสินใจที่สอดคล้องกับ Business Continuity (BC), แผน BCP ทั้ง 8 องค์ประกอบ และการลดจุดล้มเหลวเดี่ยว (SPOF) มากที่สุด:'
        : 'Select the governance action that best applies Business Continuity (BC), the 8 BCP elements, and operational redundancy:'
    })
  ]);

  const optionsGrid = el(doc, 'div', {
    class: 'bcb-scenario-options',
    role: 'group',
    'aria-label': language === 'th' ? 'ตัวเลือกการตัดสินใจด้านความต่อเนื่องทางธุรกิจ' : 'Business Continuity decision options'
  });

  const feedbackHost = el(doc, 'div', { class: 'bcb-scenario-feedback-wrap' });

  const optionButtons = rows.map((row, index) => {
    const btn = el(doc, 'button', {
      type: 'button',
      class: 'bcb-option-btn',
      'data-bcb-scenario-choice': String(index),
      'aria-pressed': 'false'
    }, [
      el(doc, 'span', { class: 'bcb-option-label', text: cellText(row, 0, language) }),
      el(doc, 'span', { class: 'bcb-option-copy', text: cellText(row, 1, language) })
    ]);

    btn.addEventListener('click', () => {
      if (signal?.aborted) return;
      interactionState.choice = index;
      updateScenarioView();
    }, { signal });

    optionsGrid.append(btn);
    return btn;
  });

  function updateScenarioView() {
    const selected = typeof interactionState?.choice === 'number' ? interactionState.choice : null;
    optionButtons.forEach((btn, idx) => {
      const isSelected = selected === idx;
      const isRecommended = idx === recommendedIndex;
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      btn.classList.toggle('is-selected', isSelected);
      btn.classList.toggle('is-recommended', isSelected && isRecommended);
      btn.classList.toggle('is-distractor', isSelected && !isRecommended);
    });

    feedbackHost.replaceChildren();
    if (selected === null || !rows[selected]) {
      feedbackHost.append(
        el(doc, 'div', { class: 'bcb-scenario-placeholder' }, [
          el(doc, 'span', {
            text: language === 'th'
              ? 'คลิกเลือกตัวเลือก A–D ด้านบนเพื่อดูผลการวิเคราะห์ตามหลัก Business Continuity และแผน BCP'
              : 'Select an option (A–D) above to evaluate the continuity & redundancy rationale.'
          })
        ])
      );
      return;
    }

    const chosenRow = rows[selected];
    const isCorrect = selected === recommendedIndex;
    const outcome = isCorrect ? 'recommended' : 'distractor';
    feedbackHost.append(
      el(doc, 'section', {
        class: `bcb-scenario-feedback ${isCorrect ? 'is-recommended' : 'is-distractor'}`,
        'data-bcb-scenario-feedback': '',
        'data-bcb-outcome': outcome
      }, [
        el(doc, 'div', { class: 'bcb-feedback-head' }, [
          el(doc, 'span', {
            class: `bcb-state-pill ${isCorrect ? 'is-good' : 'is-warn'}`,
            text: isCorrect
              ? (language === 'th' ? 'แนะนำ · สอดคล้องกับหลัก BC & BCP' : 'RECOMMENDED · ALIGNS WITH BC & BCP')
              : (language === 'th' ? 'ยังไม่ครบถ้วน · มีจุดบอดด้านความต่อเนื่อง' : 'DISTRACTOR · CONTINUITY GAP')
          }),
          el(doc, 'strong', {
            class: 'bcb-feedback-option',
            text: cellText(chosenRow, 0, language)
          })
        ]),
        el(doc, 'p', {
          class: 'bcb-feedback-text',
          text: cellText(chosenRow, 2, language)
        })
      ])
    );
  }

  updateScenarioView();
  root.append(brief, optionsGrid, feedbackHost);
  return root;
}

export function renderBusinessContinuityBcpPresentation(host, {
  lesson,
  slide,
  language = 'en',
  interactionState = {},
  signal
} = {}) {
  const doc = host.ownerDocument;
  const spec = COMPOSITIONS[slide?.id];
  const lang = language === 'th' ? 'th' : 'en';

  const section = el(doc, 'section', {
    class: 'bcb-presentation',
    'data-bc-bcp-composition': spec.kind,
    lang
  });

  if (spec.kind === 'redundancy-continuity-bridge') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 01 · REDUNDANCY & BC FOUNDATIONS', 'สไลด์ 01 · พื้นฐาน Redundancy และ Business Continuity'),
      renderRedundancyContinuityBridge(doc, slide, lang),
      slideFooter(doc, slide, lang)
    );
  } else if (spec.kind === 'disruption-trigger-matrix') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 02 · THE 8 CORE DISRUPTIONS (+ HUMAN ERROR)', 'สไลด์ 02 · เหตุหยุดชะงัก 8 ประเภท (+ ความผิดพลาดจากคน)'),
      renderDisruptionTriggerMatrix(doc, slide, lang),
      slideFooter(doc, slide, lang)
    );
  } else if (spec.kind === 'bcp-architecture-blueprint') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 03 · BUSINESS CONTINUITY PLAN (BCP) & 8 ELEMENTS', 'สไลด์ 03 · แผนความต่อเนื่องทางธุรกิจ (BCP) และ 8 องค์ประกอบหลัก'),
      renderBcpArchitectureBlueprint(doc, slide, lang),
      slideFooter(doc, slide, lang)
    );
  } else if (spec.kind === 'operational-redundancy-lanes') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 04 · OPERATIONALIZING REDUNDANCY IN THE BCP', 'สไลด์ 04 · การนำกลยุทธ์ Redundancy ไปใช้จริงในแผน BCP'),
      renderOperationalRedundancyLanes(doc, slide, lang),
      slideFooter(doc, slide, lang)
    );
  } else if (spec.kind === 'bia-priority-pipeline') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 05 · BUSINESS IMPACT ANALYSIS (BIA) & PRIORITIES', 'สไลด์ 05 · การวิเคราะห์ผลกระทบทางธุรกิจ (BIA) และลำดับการกู้คืน'),
      renderBiaPriorityPipeline(doc, slide, lang),
      slideFooter(doc, slide, lang)
    );
  } else if (spec.kind === 'continuity-response-scenario') {
    section.append(
      slideHeader(doc, slide, lang, 'SLIDE 06 · APPLIED CONTINUITY DECISION SCENARIO', 'สไลด์ 06 · สถานการณ์ฝึกตัดสินใจด้านความต่อเนื่องทางธุรกิจ'),
      renderContinuityScenario(doc, slide, lang, interactionState, signal),
      slideFooter(doc, slide, lang)
    );
  }

  host.append(section);
  return {
    destroy() {}
  };
}

