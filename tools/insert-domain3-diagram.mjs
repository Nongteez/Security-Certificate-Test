import fs from 'node:fs';

const filePath = 'js/core/diagram-generator.js';
let content = fs.readFileSync(filePath, 'utf8');

const snippet = `
  // 3.1.3 Biometric Error Sensitivity Curves (FAR vs FRR vs CER)
  biometricSensitivityCurve: \`
<div class="reading-diagram-card reading-biometric-curve" data-diagram="biometricSensitivityCurve" role="region" aria-label="Biometric Performance Curve: FAR, FRR, and Crossover Error Rate (CER)">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Biometric Performance</span>
    <h4 class="reading-diagram-title">Biometric Error Trade-offs: FAR, FRR &amp; Crossover Error Rate (CER)</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 390" class="reading-diagram-svg" aria-label="Plot of FAR decreasing and FRR increasing with sensitivity threshold, intersecting at CER point" role="img">
      <!-- Coordinate System Background -->
      <g>
        <rect x="30" y="15" width="800" height="325" rx="8" class="diag-box diag-box-banner" />
        
        <!-- Y-Axis (Error Rate) -->
        <line x1="130" y1="50" x2="130" y2="300" stroke="var(--line, #64748b)" stroke-width="2" />
        <polygon points="130,42 125,52 135,52" fill="var(--line, #64748b)" />
        <text x="120" y="55" text-anchor="end" font-size="11px" font-weight="700" fill="var(--text)">High Error %</text>
        <text x="120" y="295" text-anchor="end" font-size="11px" font-weight="700" fill="var(--text)">0% Error</text>
        <text x="50" y="175" font-size="11.5px" font-weight="700" fill="var(--text)" transform="rotate(-90 50 175)" text-anchor="middle">ERROR RATE (อัตราความผิดพลาด)</text>

        <!-- X-Axis (Sensitivity Threshold) -->
        <line x1="130" y1="300" x2="790" y2="300" stroke="var(--line, #64748b)" stroke-width="2" />
        <polygon points="798,300 788,295 788,305" fill="var(--line, #64748b)" />
        <text x="460" y="324" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--text)">SENSITIVITY THRESHOLD &middot; ระดับความเข้มงวดของระบบสแกน</text>
        <text x="170" y="318" text-anchor="start" font-size="10.5px" fill="var(--text-secondary)">Low Sensitivity (ตรวจผ่อนปรน)</text>
        <text x="760" y="318" text-anchor="end" font-size="10.5px" fill="var(--text-secondary)">High Sensitivity (ตรวจเข้มงวด)</text>

        <!-- Grid Reference Lines -->
        <line x1="130" y1="180" x2="780" y2="180" stroke="var(--line, #334155)" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
        <line x1="455" y1="50" x2="455" y2="300" stroke="var(--line, #334155)" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
      </g>

      <!-- Curve 1: FAR (False Acceptance Rate - Type II Error) -->
      <g>
        <path d="M 160 80 Q 300 120 455 180 T 750 280" fill="none" stroke="#ef4444" stroke-width="3.5" stroke-linecap="round" />
        <!-- Callout Banner for FAR -->
        <rect x="155" y="88" width="225" height="48" rx="6" fill="rgba(239, 68, 68, 0.12)" stroke="#ef4444" stroke-width="1.2" />
        <text x="165" y="106" font-size="11.5px" font-weight="700" fill="#ef4444">FAR · False Acceptance Rate</text>
        <text x="165" y="124" font-size="10px" font-weight="600" fill="var(--text)">Type II Error: ยอมรับผู้บุกรุก (อันตราย)</text>
      </g>

      <!-- Curve 2: FRR (False Rejection Rate - Type I Error) -->
      <g>
        <path d="M 160 280 Q 300 240 455 180 T 750 80" fill="none" stroke="var(--blue, #3b82f6)" stroke-width="3.5" stroke-linecap="round" />
        <!-- Callout Banner for FRR -->
        <rect x="545" y="88" width="225" height="48" rx="6" fill="rgba(59, 130, 246, 0.12)" stroke="var(--blue, #3b82f6)" stroke-width="1.2" />
        <text x="555" y="106" font-size="11.5px" font-weight="700" fill="var(--blue, #3b82f6)">FRR · False Rejection Rate</text>
        <text x="555" y="124" font-size="10px" font-weight="600" fill="var(--text)">Type I Error: ปฏิเสธผู้มีสิทธิ์ (ไม่สะดวก)</text>
      </g>

      <!-- CER Intersection Point -->
      <g>
        <!-- Outer Glow Ring -->
        <circle cx="455" cy="180" r="14" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
        <!-- Inner Core -->
        <circle cx="455" cy="180" r="6" fill="#10b981" />
        
        <!-- CER Callout Box -->
        <rect x="360" y="202" width="190" height="48" rx="6" fill="var(--panel-2, #0f172a)" stroke="#10b981" stroke-width="1.5" />
        <text x="455" y="220" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">CER / EER Point</text>
        <text x="455" y="238" text-anchor="middle" font-size="10px" font-weight="600" fill="var(--text)">FAR = FRR (Optimal Balance)</text>
      </g>

      <!-- Bottom Benchmark Footer -->
      <g transform="translate(30, 350)">
        <rect x="0" y="0" width="800" height="30" rx="5" class="diag-box diag-box-banner" />
        <text x="400" y="19" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EXAM RULE: The LOWER the CER value, the MORE ACCURATE the biometric system &bull; High-security sites tune for lower FAR</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Biometric Sensitivity Curves Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">FAR</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">FALSE ACCEPTANCE RATE (Type II Error)</h5>
            <span class="reading-mob-tier-action">Security Failure &bull; Impostor Accepted</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ระบบตัดสินใจผิดพลาดโดย <strong>"อนุญาตให้ผู้ไม่มีสิทธิ์ผ่านเข้ามา"</strong> ถือเป็นความล้มเหลวด้านความมั่นคงปลอดภัยที่ร้ายแรงที่สุด เกิดขึ้นเมื่อตั้งค่าระบบให้ผ่อนปรน (Low Sensitivity)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">FRR</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">FALSE REJECTION RATE (Type I Error)</h5>
            <span class="reading-mob-tier-action">Usability Friction &bull; Valid User Rejected</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ระบบตัดสินใจผิดพลาดโดย <strong>"ปฏิเสธผู้ใช้งานจริงที่มีสิทธิ์ถูกต้อง"</strong> (Insult Rate) เกิดขึ้นเมื่อตั้งค่าระบบให้เข้มงวดเกินไป (High Sensitivity) ทำให้เกิดความล่าช้า ผู้ใช้หงุดหงิด และภาระงาน Helpdesk เพิ่มขึ้น</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">CER</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CROSSOVER ERROR RATE (CER / EER)</h5>
            <span class="reading-mob-tier-action">Accuracy Benchmark &bull; FAR = FRR</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จุดตัดที่อัตราความผิดพลาด <strong>FAR เท่ากับ FRR พอดี</strong> ใช้เป็นตัวชี้วัดเปรียบเทียบความแม่นยำรวมของเทคโนโลยีไบโอเมตริกซ์: <strong>ยิ่งค่า CER ต่ำ แสดงว่าระบบมีความแม่นยำสูงกว่า</strong> (The lower the CER, the more accurate the device)</p>
      </div>
    </div>
  </div>
</div>
\`
`;

const lastBraceIdx = content.lastIndexOf('};');
if (lastBraceIdx === -1) {
  console.error('Could not find };');
  process.exit(1);
}

// Find previous backtick
const lastBacktick = content.lastIndexOf('`', lastBraceIdx - 1);
const beforeLastBrace = content.slice(lastBacktick + 1, lastBraceIdx);
let newContent;
if (!beforeLastBrace.trim().startsWith(',')) {
  newContent = content.slice(0, lastBacktick + 1) + ',\n' + snippet + '\n' + content.slice(lastBraceIdx);
} else {
  newContent = content.slice(0, lastBraceIdx) + snippet + '\n' + content.slice(lastBraceIdx);
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully inserted biometricSensitivityCurve into diagram-generator.js');
