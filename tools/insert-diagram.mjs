import fs from 'node:fs';

const file = 'js/core/diagram-generator.js';
let content = fs.readFileSync(file, 'utf8');

const target = '  // 1.3.4 Security Document Hierarchy Pyramid\r\n  documentHierarchy: `';
if (!content.includes(target)) {
  console.error('Target not found in diagram-generator.js!');
  process.exit(1);
}

const snippet = `  // 1.2.4 Risk Treatment Decision Framework & 4 Responses
  riskTreatmentDecisionFlow: \`
<div class="reading-diagram-card" data-diagram="riskTreatmentDecisionFlow" role="region" aria-label="Risk Treatment Decision Framework and 4 Responses Flowchart">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Decision Framework</span>
    <h4 class="reading-diagram-title">Risk Treatment Decision Logic &middot; The 4 Strategic Responses</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 380" class="reading-diagram-svg" aria-label="Risk Treatment Decision Flowchart showing Inherent Risk evaluated against Risk Appetite, leading to Avoid, Transfer, Mitigate, or Accept, and Residual Risk governance loop" role="img">
      <!-- Top Level: Inherent Risk Card -->
      <g>
        <rect x="30" y="20" width="220" height="62" rx="8" class="diag-box diag-box-banner" />
        <text x="140" y="44" class="diag-step-num" text-anchor="middle">INPUT · EVALUATION</text>
        <text x="140" y="65" class="diag-text-title" text-anchor="middle">Inherent Risk (ความเสี่ยงดั้งเดิม)</text>
      </g>

      <!-- Arrow to Decision Point -->
      <line x1="250" y1="51" x2="310" y2="51" stroke="var(--blue, #3b82f6)" stroke-width="2" />
      <polygon points="316,51 308,47 308,55" fill="var(--blue, #3b82f6)" />

      <!-- Top Level: Decision Threshold Card -->
      <g>
        <rect x="316" y="16" width="260" height="70" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="446" y="42" class="diag-text-title" font-weight="700" text-anchor="middle">Is Risk &gt; Risk Appetite?</text>
        <text x="446" y="62" class="diag-text-sub" text-anchor="middle">ความเสี่ยงเกินขอบเขตที่ยอมรับได้หรือไม่?</text>
      </g>

      <!-- Downward Arrow for YES -->
      <line x1="446" y1="86" x2="446" y2="120" stroke="var(--blue, #2563eb)" stroke-width="2" />
      <polygon points="446,126 441,118 451,118" fill="var(--blue, #2563eb)" />
      <rect x="376" y="94" width="140" height="20" rx="4" fill="var(--panel-2, #f8fafc)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
      <text x="446" y="108" class="diag-text-label" font-size="11px" font-weight="700" text-anchor="middle" fill="var(--blue, #2563eb)">YES &middot; ต้องจัดการ (Treat)</text>

      <!-- Rightward connection for NO -> Direct Accept -->
      <path d="M 576 51 L 752 51 L 752 120" stroke="var(--text-light, #64748b)" stroke-width="1.5" stroke-dasharray="4,4" fill="none" />
      <polygon points="752,126 748,118 756,118" fill="var(--text-light, #64748b)" />
      <text x="664" y="44" class="diag-text-sub" font-size="10.5px" text-anchor="middle">NO (&le; Appetite)</text>

      <!-- Middle Level: 4 Treatment Cards -->
      <!-- Option 1: AVOID -->
      <g>
        <rect x="30" y="130" width="185" height="135" rx="8" class="diag-box diag-box-rose" />
        <rect x="42" y="140" width="161" height="20" rx="4" fill="#ef4444" fill-opacity="0.15" />
        <text x="122" y="154" class="diag-step-num" text-anchor="middle" fill="#dc2626">OPTION 1 · AVOID</text>
        <text x="122" y="180" class="diag-text-title" font-weight="700" text-anchor="middle">Risk Avoidance</text>
        <text x="122" y="198" class="diag-text-sub" font-weight="600" text-anchor="middle">การหลีกเลี่ยงความเสี่ยง</text>
        <text x="122" y="222" class="diag-text-sub" font-size="11px" text-anchor="middle">"Stop the Activity"</text>
        <text x="122" y="238" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ยกเลิกโครงการ / ตัดความเสี่ยงเป็น 0</text>
      </g>

      <!-- Option 2: TRANSFER -->
      <g>
        <rect x="240" y="130" width="185" height="135" rx="8" class="diag-box diag-box-amber" />
        <rect x="252" y="140" width="161" height="20" rx="4" fill="#f59e0b" fill-opacity="0.15" />
        <text x="332" y="154" class="diag-step-num" text-anchor="middle" fill="#d97706">OPTION 2 · TRANSFER</text>
        <text x="332" y="180" class="diag-text-title" font-weight="700" text-anchor="middle">Risk Transfer / Share</text>
        <text x="332" y="198" class="diag-text-sub" font-weight="600" text-anchor="middle">การโอนความเสี่ยง</text>
        <text x="332" y="222" class="diag-text-sub" font-size="11px" text-anchor="middle">"Share Financial Impact"</text>
        <text x="332" y="238" class="diag-text-sub" font-size="10.5px" text-anchor="middle">Cyber Insurance / Vendor SLA</text>
      </g>

      <!-- Option 3: MITIGATE -->
      <g>
        <rect x="450" y="130" width="185" height="135" rx="8" class="diag-box diag-box-emerald" />
        <rect x="462" y="140" width="161" height="20" rx="4" fill="#10b981" fill-opacity="0.15" />
        <text x="542" y="154" class="diag-step-num" text-anchor="middle" fill="#059669">OPTION 3 · MITIGATE</text>
        <text x="542" y="180" class="diag-text-title" font-weight="700" text-anchor="middle">Risk Mitigation</text>
        <text x="542" y="198" class="diag-text-sub" font-weight="600" text-anchor="middle">การลดความเสี่ยง</text>
        <text x="542" y="222" class="diag-text-sub" font-size="11px" text-anchor="middle">"Apply Security Controls"</text>
        <text x="542" y="238" class="diag-text-sub" font-size="10.5px" text-anchor="middle">MFA / Patching / Firewall</text>
      </g>

      <!-- Option 4: ACCEPT -->
      <g>
        <rect x="660" y="130" width="185" height="135" rx="8" class="diag-box diag-box-blue" />
        <rect x="672" y="140" width="161" height="20" rx="4" fill="#3b82f6" fill-opacity="0.15" />
        <text x="752" y="154" class="diag-step-num" text-anchor="middle" fill="#2563eb">OPTION 4 · ACCEPT</text>
        <text x="752" y="180" class="diag-text-title" font-weight="700" text-anchor="middle">Risk Acceptance</text>
        <text x="752" y="198" class="diag-text-sub" font-weight="600" text-anchor="middle">การยอมรับความเสี่ยง</text>
        <text x="752" y="222" class="diag-text-sub" font-size="11px" text-anchor="middle">"Formal Sign-off &amp; Log"</text>
        <text x="752" y="238" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ผู้บริหารลงนาม + Risk Register</text>
      </g>

      <!-- Connecting Lines from Mitigate/Transfer to Residual Risk -->
      <line x1="332" y1="265" x2="332" y2="288" stroke="var(--amber, #f59e0b)" stroke-width="1.5" />
      <line x1="542" y1="265" x2="542" y2="288" stroke="var(--green, #10b981)" stroke-width="1.5" />
      <polygon points="332,294 328,286 336,286" fill="var(--amber, #f59e0b)" />
      <polygon points="542,294 538,286 546,286" fill="var(--green, #10b981)" />

      <!-- Bottom Level: Residual Risk & Governance Band -->
      <g>
        <rect x="30" y="298" width="815" height="64" rx="8" class="diag-box diag-box-banner" />
        <text x="50" y="324" class="diag-text-title" font-weight="700">Governance Gate &middot; Residual Risk Evaluation:</text>
        <text x="50" y="344" class="diag-text-sub">ความเสี่ยงที่หลงเหลือ (Residual Risk) ต้องได้รับการประเมินใหม่ หาก Residual Risk &le; Risk Appetite &rarr; Accept ได้อย่างถูกต้อง | ทบทวนสม่ำเสมอ</text>
        <rect x="660" y="310" width="168" height="38" rx="6" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1" />
        <text x="744" y="327" class="diag-step-num" text-anchor="middle" fill="#059669">GOVERNANCE RULE</text>
        <text x="744" y="341" class="diag-text-sub" font-size="10.5px" font-weight="700" text-anchor="middle" fill="#047857">Residual &le; Appetite</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Risk Treatment Decision Framework Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">RISK TREATMENT DECISION FRAMEWORK</span>
      <p class="reading-mob-banner-text">วงจรการตัดสินใจรับมือความเสี่ยง 4 กลยุทธ์ตามกรอบมาตรฐานสากล: หลีกเลี่ยง &middot; โอน &middot; ลด &middot; ยอมรับ</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-foundation">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INHERENT RISK &amp; THRESHOLD EVALUATION</h5>
            <span class="reading-mob-tier-action">Is Risk &gt; Risk Appetite?</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ประเมินระดับความเสี่ยงดั้งเดิมก่อนมีมาตรการ (Likelihood &times; Impact) หากความเสี่ยงสูงกว่า Risk Appetite องค์กรต้องเลือกกลยุทธ์จัดการ (Treat) เพื่อลดระดับความเสี่ยง</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-red">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">A</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">OPTION 1: RISK AVOIDANCE (การหลีกเลี่ยง)</h5>
            <span class="reading-mob-tier-action">"Stop the Activity" &middot; ยุติกิจกรรมเสี่ยง</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ยกเลิกโครงการ ยุติบริการ หรือตัดการเชื่อมต่อที่มีความเสี่ยงสูงเกินรับไหวและไม่มีมาตรการควบคุมที่คุ้มค่า เพื่อตัดโอกาสเกิดความเสียหายเป็น 0 โดยสิ้นเชิง</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">B</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">OPTION 2: RISK TRANSFER / SHARING (การโอน)</h5>
            <span class="reading-mob-tier-action">"Share Financial Impact" &middot; ถ่ายโอนภาระการเงิน</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ซื้อประกันภัยไซเบอร์ (Cyber Insurance) หรือทำสัญญา Third-Party SLA เพื่อชดเชยความเสียหายทางการเงิน *ข้อควรระวัง: ประกันไม่สามารถอุดช่องโหว่ทางเทคนิคหรือกู้ชื่อเสียงที่เสียไปได้*</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">C</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">OPTION 3: RISK MITIGATION (การลดความเสี่ยง)</h5>
            <span class="reading-mob-tier-action">"Apply Controls" &middot; ติดตั้งมาตรการความปลอดภัย</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">กลยุทธ์หลักที่ใช้บ่อยที่สุด: ติดตั้ง Security Controls ทางเทคนิค บริหารจัดการ หรือกายภาพ (เช่น MFA, Patching, Firewall, Backup) เพื่อลดโอกาสเกิด (Likelihood) หรือลดผลกระทบ (Impact)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">D</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">OPTION 4: RISK ACCEPTANCE &amp; GOVERNANCE (การยอมรับ)</h5>
            <span class="reading-mob-tier-action">"Residual Risk &le; Appetite" &middot; ยอมรับอย่างมีเอกสาร</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ยอมรับความเสี่ยงที่เหลืออยู่ (Residual Risk) เมื่อประเมินแล้วว่าต่ำกว่าหรือเท่ากับ Risk Appetite ต้องผ่านการลงนามอนุมัติจากผู้บริหารอย่างเป็นทางการ บันทึกใน Risk Register และทบทวนสม่ำเสมอ</p>
      </div>
    </div>
  </div>
</div>
\`,

`;

const crlfSnippet = snippet.replace(/\n/g, '\r\n');
content = content.replace(target, crlfSnippet + target);
fs.writeFileSync(file, content, 'utf8');
console.log('Inserted riskTreatmentDecisionFlow successfully!');
