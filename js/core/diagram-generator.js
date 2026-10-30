/**
 * Domain 1 Semantic Diagrams Module
 *
 * Provides accessible, theme-adaptive SVG illustrations for core cybersecurity architectures:
 * - Case A: CIA Triad Conceptual Diagram (SVG vector icons, zero emojis)
 * - Case B: Defense in Depth 7-Layer Architecture (Unified neutral layers)
 * - Case C: Quantitative Risk Calculation Pipeline (SLE & ALE)
 * - Threat & Control Relationship Chain
 * - High Availability & Load Balancer Topology
 * - AAA Identity Lifecycle Process Flow
 * - Privacy Governance & Data Roles Flow
 * - 4-Stage Risk Management Lifecycle
 * - Security Document Hierarchy Pyramid (Clean stepped monochrome hierarchy)
 * - Security Control Function Matrix (Non-Linear Taxonomy)
 * - Due Diligence <-> Due Care Operational Loop
 * - ISC2 Code of Ethics 4 Canons Numbered Precedence Hierarchy (01-04)
 */

export const diagrams = {
  // 1.1.1 Threat & Control Relationship Chain
  threatChain: `
<div class="reading-diagram-card" data-diagram="threatChain" role="region" aria-label="Threat and Control Relationship Pipeline">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Architecture Flow</span>
    <h4 class="reading-diagram-title">Cybersecurity Threat & Control Relationship Pipeline</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 760 150" class="reading-diagram-svg" aria-label="Pipeline showing Asset with Vulnerability exploited by Threat Actor causing Impact, mitigated by Safeguards" role="img">
      <!-- Node 1: Asset -->
      <g class="diag-node">
        <rect x="10" y="35" width="120" height="70" rx="8" class="diag-box diag-box-blue" />
        <text x="70" y="65" class="diag-text-title" text-anchor="middle">Asset</text>
        <text x="70" y="85" class="diag-text-sub" text-anchor="middle">ทรัพย์สินมีคุณค่า</text>
      </g>
      <!-- Arrow 1 -->
      <path d="M 130 70 L 160 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="145" y="62" class="diag-text-label" text-anchor="middle">มี</text>

      <!-- Node 2: Vulnerability -->
      <g class="diag-node">
        <rect x="160" y="35" width="130" height="70" rx="8" class="diag-box diag-box-banner" />
        <text x="225" y="65" class="diag-text-title" text-anchor="middle">Vulnerability</text>
        <text x="225" y="85" class="diag-text-sub" text-anchor="middle">จุดอ่อน / ช่องโหว่</text>
      </g>
      <!-- Arrow 2 -->
      <path d="M 290 70 L 320 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="305" y="62" class="diag-text-label" text-anchor="middle">ถูกเจาะผ่าน</text>

      <!-- Node 3: Threat Actor -->
      <g class="diag-node">
        <rect x="320" y="35" width="130" height="70" rx="8" class="diag-box diag-box-banner" />
        <text x="385" y="65" class="diag-text-title" text-anchor="middle">Threat Actor</text>
        <text x="385" y="85" class="diag-text-sub" text-anchor="middle">ผู้คุกคามใช้ Exploit</text>
      </g>
      <!-- Arrow 3 -->
      <path d="M 450 70 L 480 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="465" y="62" class="diag-text-label" text-anchor="middle">ก่อให้เกิด</text>

      <!-- Node 4: Impact -->
      <g class="diag-node">
        <rect x="480" y="35" width="120" height="70" rx="8" class="diag-box diag-box-banner" />
        <text x="540" y="65" class="diag-text-title" text-anchor="middle">Impact</text>
        <text x="540" y="85" class="diag-text-sub" text-anchor="middle">ความเสียหาย</text>
      </g>

      <!-- Safeguard / Control Banner -->
      <g class="diag-node">
        <rect x="620" y="25" width="130" height="90" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="685" y="55" class="diag-text-title" text-anchor="middle">Safeguards</text>
        <text x="685" y="75" class="diag-text-title" text-anchor="middle">& Controls</text>
        <text x="685" y="98" class="diag-text-sub" text-anchor="middle">มาตรการปกป้อง</text>
      </g>
      <!-- Protective Loop arrow -->
      <path d="M 685 115 C 685 140, 70 140, 70 105" class="diag-arrow diag-arrow-dash" marker-end="url(#diag-arrow-head)" />
      <text x="375" y="136" class="diag-text-label" text-anchor="middle">Controls เข้ามาปกป้อง Asset และลดความเสี่ยง (Risk)</text>
    </svg>
  </div>
</div>
`,

  // 1.1.2 Case A: CIA Triad
  ciaTriad: `
<div class="reading-diagram-card" data-diagram="ciaTriad" role="region" aria-label="The CIA Triad Conceptual Diagram">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Core Model</span>
    <h4 class="reading-diagram-title">The CIA Triad — Three Pillars of Information Security</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 700 380" class="reading-diagram-svg" aria-label="CIA Triad: Confidentiality at top, Integrity at bottom left, Availability at bottom right" role="img">
      <!-- Triangle Connecting Path -->
      <polygon points="350,60 140,300 560,300" class="diag-triad-poly" />
      <circle cx="350" cy="205" r="55" class="diag-triad-center-circle" />
      <text x="350" y="200" class="diag-triad-center-title" text-anchor="middle">CIA TRIAD</text>
      <text x="350" y="218" class="diag-triad-center-sub" text-anchor="middle">แกนกลางความปลอดภัย</text>

      <!-- Pillar 1: Confidentiality (Top) -->
      <g class="diag-pillar">
        <circle cx="350" cy="60" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <!-- Vector Lock Icon (Zero Emojis) -->
        <g class="diag-icon-group" transform="translate(339, 48)">
          <rect x="3" y="11" width="18" height="12" rx="2" ry="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="var(--blue)" stroke-width="2"/>
        </g>
        <text x="350" y="118" class="diag-pillar-title" text-anchor="middle">Confidentiality</text>
        <text x="350" y="134" class="diag-pillar-sub" text-anchor="middle">การรักษาความลับ · Who can SEE it?</text>
        <rect x="250" y="138" width="200" height="2" class="diag-pillar-line" />
      </g>

      <!-- Pillar 2: Integrity (Bottom-Left) -->
      <g class="diag-pillar">
        <circle cx="140" cy="300" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <!-- Vector Shield Icon (Zero Emojis) -->
        <g class="diag-icon-group" transform="translate(128, 288)">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <path d="m9 12 2 2 4-4" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/>
        </g>
        <text x="140" y="358" class="diag-pillar-title" text-anchor="middle">Integrity</text>
        <text x="140" y="374" class="diag-pillar-sub" text-anchor="middle">ความถูกต้องไม่ถูกดัดแปลง · Can I TRUST it?</text>
      </g>

      <!-- Pillar 3: Availability (Bottom-Right) -->
      <g class="diag-pillar">
        <circle cx="560" cy="300" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <!-- Vector High-Availability Server Icon (Zero Emojis) -->
        <g class="diag-icon-group" transform="translate(548, 288)">
          <rect x="2" y="3" width="20" height="7" rx="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <rect x="2" y="14" width="20" height="7" rx="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <circle cx="6" cy="6.5" r="1" fill="var(--blue)"/>
          <circle cx="6" cy="17.5" r="1" fill="var(--blue)"/>
        </g>
        <text x="560" y="358" class="diag-pillar-title" text-anchor="middle">Availability</text>
        <text x="560" y="374" class="diag-pillar-sub" text-anchor="middle">ความพร้อมใช้งาน · Can I ACCESS it?</text>
      </g>
    </svg>
  </div>
</div>
`,

  // 1.1.2 High Availability & Load Balancer Topology
  loadBalancer: `
<div class="reading-diagram-card" data-diagram="loadBalancer" role="region" aria-label="High Availability and Load Balancing Topology">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Availability Topology</span>
    <h4 class="reading-diagram-title">Load Balancer & Server Redundancy (Fault Tolerance)</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 680 180" class="reading-diagram-svg" aria-label="Load balancer distributing traffic to redundant servers" role="img">
      <!-- Users -->
      <rect x="20" y="60" width="110" height="60" rx="6" class="diag-box diag-box-banner" />
      <text x="75" y="87" class="diag-text-title" text-anchor="middle">End Users</text>
      <text x="75" y="105" class="diag-text-sub" text-anchor="middle">ผู้ใช้งานระบบ</text>

      <!-- Arrow to LB -->
      <path d="M 130 90 L 190 90" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Load Balancer -->
      <rect x="190" y="45" width="130" height="90" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
      <text x="255" y="82" class="diag-text-title" text-anchor="middle">Load Balancer</text>
      <text x="255" y="100" class="diag-text-sub" text-anchor="middle">กระจายภาระงาน (LB)</text>
      <text x="255" y="118" class="diag-text-sub" text-anchor="middle">Health Check สม่ำเสมอ</text>

      <!-- Distribution paths -->
      <path d="M 320 90 L 370 40 L 420 40" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <path d="M 320 90 L 420 90" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <path d="M 320 90 L 370 140 L 420 140" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Server 1 -->
      <rect x="420" y="15" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="38" class="diag-text-title" text-anchor="middle">Web Server 01 (Active)</text>
      <text x="510" y="55" class="diag-text-sub" text-anchor="middle">ทำงานปกติ</text>

      <!-- Server 2 -->
      <rect x="420" y="65" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="88" class="diag-text-title" text-anchor="middle">Web Server 02 (Active)</text>
      <text x="510" y="105" class="diag-text-sub" text-anchor="middle">ทำงานปกติ</text>

      <!-- Server 3 -->
      <rect x="420" y="115" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="138" class="diag-text-title" text-anchor="middle">Web Server 03 (Standby)</text>
      <text x="510" y="155" class="diag-text-sub" text-anchor="middle">พร้อมสแตนด์บายทดแทน</text>
    </svg>
  </div>
</div>
`,

  // 1.1.3 AAA Identity Lifecycle
  aaaLifecycle: `
<div class="reading-diagram-card" data-diagram="aaaLifecycle" role="region" aria-label="AAA Identity Lifecycle Process Flow">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Process Flow</span>
    <h4 class="reading-diagram-title">The AAA Framework & Identity Lifecycle</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 760 140" class="reading-diagram-svg" aria-label="Identification to Authentication to Authorization to Accounting" role="img">
      <!-- Step 1: Identification -->
      <g>
        <rect x="10" y="25" width="165" height="90" rx="8" class="diag-box diag-box-banner" />
        <text x="92" y="52" class="diag-step-num" text-anchor="middle">STEP 01</text>
        <text x="92" y="74" class="diag-text-title" text-anchor="middle">Identification</text>
        <text x="92" y="93" class="diag-text-sub" text-anchor="middle">"Who are you?"</text>
        <text x="92" y="107" class="diag-text-sub" text-anchor="middle">Username / User ID</text>
      </g>
      <path d="M 175 70 L 205 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Step 2: Authentication -->
      <g>
        <rect x="205" y="25" width="165" height="90" rx="8" class="diag-box diag-box-banner" />
        <text x="287" y="52" class="diag-step-num" text-anchor="middle">STEP 02</text>
        <text x="287" y="74" class="diag-text-title" text-anchor="middle">Authentication</text>
        <text x="287" y="93" class="diag-text-sub" text-anchor="middle">"Prove it!"</text>
        <text x="287" y="107" class="diag-text-sub" text-anchor="middle">Password, MFA, Bio</text>
      </g>
      <path d="M 370 70 L 400 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Step 3: Authorization -->
      <g>
        <rect x="400" y="25" width="165" height="90" rx="8" class="diag-box diag-box-banner" />
        <text x="482" y="52" class="diag-step-num" text-anchor="middle">STEP 03</text>
        <text x="482" y="74" class="diag-text-title" text-anchor="middle">Authorization</text>
        <text x="482" y="93" class="diag-text-sub" text-anchor="middle">"What can you do?"</text>
        <text x="482" y="107" class="diag-text-sub" text-anchor="middle">Permissions / Roles</text>
      </g>
      <path d="M 565 70 L 595 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Step 4: Accounting -->
      <g>
        <rect x="595" y="25" width="155" height="90" rx="8" class="diag-box diag-box-banner" />
        <text x="672" y="52" class="diag-step-num" text-anchor="middle">STEP 04</text>
        <text x="672" y="74" class="diag-text-title" text-anchor="middle">Accounting</text>
        <text x="672" y="93" class="diag-text-sub" text-anchor="middle">"What did you do?"</text>
        <text x="672" y="107" class="diag-text-sub" text-anchor="middle">Audit Logs / Tracing</text>
      </g>
    </svg>
  </div>
</div>
`,

  // 1.1.6 Privacy Governance & Roles Flow
  privacyFlow: `
<div class="reading-diagram-card" data-diagram="privacyFlow" role="region" aria-label="Privacy Governance and Data Roles Flow">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Governance Model</span>
    <h4 class="reading-diagram-title">Data Privacy Roles & Lifecycle Chain (GDPR / Regulatory)</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 700 150" class="reading-diagram-svg" aria-label="Data Subject to Data Controller to Data Processor" role="img">
      <!-- Data Subject -->
      <rect x="15" y="30" width="180" height="90" rx="8" class="diag-box diag-box-banner" />
      <text x="105" y="58" class="diag-text-title" text-anchor="middle">Data Subject</text>
      <text x="105" y="78" class="diag-text-sub" text-anchor="middle">เจ้าของข้อมูลส่วนบุคคล</text>
      <text x="105" y="96" class="diag-text-sub" text-anchor="middle">(ลูกค้า / พนักงาน)</text>

      <!-- Arrow 1 -->
      <path d="M 195 75 L 255 75" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="225" y="65" class="diag-text-label" text-anchor="middle">ส่งมอบข้อมูล</text>

      <!-- Data Controller -->
      <rect x="255" y="30" width="200" height="90" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
      <text x="355" y="58" class="diag-text-title" text-anchor="middle">Data Controller</text>
      <text x="355" y="78" class="diag-text-sub" text-anchor="middle">ผู้ควบคุมข้อมูลส่วนบุคคล</text>
      <text x="355" y="96" class="diag-text-sub" text-anchor="middle">กำหนดวัตถุประสงค์และวิธีการ</text>

      <!-- Arrow 2 -->
      <path d="M 455 75 L 515 75" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="485" y="65" class="diag-text-label" text-anchor="middle">ว่าจ้าง/สั่งการ</text>

      <!-- Data Processor -->
      <rect x="515" y="30" width="170" height="90" rx="8" class="diag-box diag-box-banner" />
      <text x="600" y="58" class="diag-text-title" text-anchor="middle">Data Processor</text>
      <text x="600" y="78" class="diag-text-sub" text-anchor="middle">ผู้ประมวลผลข้อมูล</text>
      <text x="600" y="96" class="diag-text-sub" text-anchor="middle">ทำตามคำสั่ง Controller เท่านั้น</text>
    </svg>
  </div>
</div>
`,

  // 1.1.7 Case B: Defense in Depth (7 Concentric Layers)
  defenseInDepth: `
<div class="reading-diagram-card" data-diagram="defenseInDepth" role="region" aria-label="Defense in Depth 7-Layer Architecture Diagram">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Security Architecture</span>
    <h4 class="reading-diagram-title">Defense in Depth — 7 Complementary Protective Layers</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 740 320" class="reading-diagram-svg" aria-label="7 defensive layers protecting core asset at center" role="img">
      <!-- Core Asset -->
      <circle cx="370" cy="160" r="32" class="diag-did-core" />
      <text x="370" y="157" class="diag-did-core-title" text-anchor="middle">CORE</text>
      <text x="370" y="172" class="diag-did-core-sub" text-anchor="middle">DATA</text>

      <!-- Left Side Layers 1-4 (Unified Neutral Styling) -->
      <g class="diag-did-list">
        <rect x="20" y="25" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="47" class="diag-did-num">Layer 1: People</text>
        <text x="35" y="65" class="diag-did-desc">Security Awareness & Phishing Defense</text>

        <rect x="20" y="90" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="112" class="diag-did-num">Layer 2: Perimeter</text>
        <text x="35" y="130" class="diag-did-desc">Firewalls, Next-Gen FW, DDoS Shield</text>

        <rect x="20" y="155" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="177" class="diag-did-num">Layer 3: Network</text>
        <text x="35" y="195" class="diag-did-desc">Network Segmentation, VLANs, Micro-seg</text>

        <rect x="20" y="220" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="242" class="diag-did-num">Layer 4: Identity & Access</text>
        <text x="35" y="260" class="diag-did-desc">MFA, Least Privilege, Role-Based Access</text>
      </g>

      <!-- Right Side Layers 5-7 + Note -->
      <g class="diag-did-list">
        <rect x="440" y="25" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="47" class="diag-did-num">Layer 5: Endpoint</text>
        <text x="455" y="65" class="diag-did-desc">EDR, Antivirus, Host Patching</text>

        <rect x="440" y="90" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="112" class="diag-did-num">Layer 6: Application & Data</text>
        <text x="455" y="130" class="diag-did-desc">Encryption (At-Rest & In-Transit)</text>

        <rect x="440" y="155" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="177" class="diag-did-num">Layer 7: Resilience & Response</text>
        <text x="455" y="195" class="diag-did-desc">Immutable Backups & Incident Response</text>

        <rect x="440" y="220" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="580" y="242" class="diag-text-title" text-anchor="middle">No Single Point of Failure</text>
        <text x="580" y="260" class="diag-text-sub" text-anchor="middle">มาตรการทำงานสอดประสานพร้อมกัน</text>
      </g>
    </svg>
  </div>
</div>
`,

  // 1.2.2 Case C: Quantitative Risk Calculation Pipeline
  riskCalculationFlow: `
<div class="reading-diagram-card" data-diagram="riskCalculationFlow" role="region" aria-label="Quantitative Risk Calculation Pipeline">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Mathematical Pipeline</span>
    <h4 class="reading-diagram-title">Quantitative Risk Calculation Flow: SLE & ALE</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 720 180" class="reading-diagram-svg" aria-label="Asset Value times Exposure Factor equals SLE, times ARO equals ALE" role="img">
      <!-- Box 1: AV -->
      <g>
        <rect x="20" y="30" width="130" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="85" y="55" class="diag-text-title" text-anchor="middle">Asset Value</text>
        <text x="85" y="73" class="diag-formula-var" text-anchor="middle">AV</text>
        <text x="85" y="93" class="diag-text-sub" text-anchor="middle">มูลค่าทรัพย์สิน ($)</text>
      </g>
      <text x="165" y="74" class="diag-math-symbol" text-anchor="middle">&times;</text>

      <!-- Box 2: EF -->
      <g>
        <rect x="180" y="30" width="130" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="245" y="55" class="diag-text-title" text-anchor="middle">Exposure Factor</text>
        <text x="245" y="73" class="diag-formula-var" text-anchor="middle">EF</text>
        <text x="245" y="93" class="diag-text-sub" text-anchor="middle">% ความเสียหาย (0-100%)</text>
      </g>
      <text x="325" y="74" class="diag-math-symbol" text-anchor="middle">=</text>

      <!-- Box 3: SLE -->
      <g>
        <rect x="340" y="20" width="160" height="95" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="420" y="47" class="diag-text-title" text-anchor="middle">Single Loss Expectancy</text>
        <text x="420" y="72" class="diag-formula-var diag-formula-var-lg" text-anchor="middle">SLE</text>
        <text x="420" y="94" class="diag-text-sub" text-anchor="middle">เสียหายต่อ 1 ครั้ง ($)</text>
        <text x="420" y="108" class="diag-text-sub" text-anchor="middle">SLE = AV &times; EF</text>
      </g>
      <text x="515" y="74" class="diag-math-symbol" text-anchor="middle">&times;</text>

      <!-- Box 4: ARO -->
      <g>
        <rect x="530" y="30" width="80" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="570" y="55" class="diag-text-title" text-anchor="middle">ARO</text>
        <text x="570" y="73" class="diag-formula-var" text-anchor="middle">Rate</text>
        <text x="570" y="93" class="diag-text-sub" text-anchor="middle">ครั้ง / ปี</text>
      </g>
      <text x="625" y="74" class="diag-math-symbol" text-anchor="middle">=</text>

      <!-- Box 5: ALE -->
      <g>
        <rect x="640" y="20" width="70" height="95" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="675" y="50" class="diag-formula-var diag-formula-var-lg" text-anchor="middle">ALE</text>
        <text x="675" y="75" class="diag-text-sub" text-anchor="middle">เสียหาย</text>
        <text x="675" y="92" class="diag-text-sub" text-anchor="middle">เฉลี่ย / ปี</text>
      </g>

      <!-- Bottom Rule Note -->
      <rect x="150" y="135" width="420" height="32" rx="6" class="diag-box diag-box-banner" />
      <text x="360" y="156" class="diag-text-sub" text-anchor="middle">Decision Rule: ค่าใช้จ่ายมาตรการป้องกันต่อปี (Cost of Control) ไม่ควรเกิน ALE</text>
    </svg>
  </div>
</div>
`,

  // 1.2.3 Risk Management 5-Step Lifecycle
  riskLifecycle: `
<div class="reading-diagram-card" data-diagram="riskLifecycle" role="region" aria-label="Risk Management 5-Stage Lifecycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Operational Cycle</span>
    <h4 class="reading-diagram-title">The 5-Stage Risk Management Lifecycle</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 800 200" class="reading-diagram-svg" aria-label="Cyclic process: 5-Stage Risk Management Lifecycle (Identify to Assess to Treat to Monitor to Communicate)" role="img">
      <!-- Stage 1 -->
      <rect x="46" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="108" y="47" class="diag-step-num" text-anchor="middle">STAGE 01</text>
      <text x="108" y="67" class="diag-text-title" text-anchor="middle">Identify</text>
      <text x="108" y="82" class="diag-text-sub" text-anchor="middle">ระบุทรัพย์สิน &amp; ภัย</text>

      <!-- Arrow 1 -> 2 -->
      <path d="M 170 55 L 192 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Stage 2 -->
      <rect x="192" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="254" y="47" class="diag-step-num" text-anchor="middle">STAGE 02</text>
      <text x="254" y="67" class="diag-text-title" text-anchor="middle">Assess / Analyze</text>
      <text x="254" y="82" class="diag-text-sub" text-anchor="middle">ประเมินโอกาส &amp; ผล</text>

      <!-- Arrow 2 -> 3 -->
      <path d="M 316 55 L 338 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Stage 3 -->
      <rect x="338" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="400" y="47" class="diag-step-num" text-anchor="middle">STAGE 03</text>
      <text x="400" y="67" class="diag-text-title" text-anchor="middle">Treat / Respond</text>
      <text x="400" y="82" class="diag-text-sub" text-anchor="middle">เลือก 4 กลยุทธ์จัดการ</text>

      <!-- Arrow 3 -> 4 -->
      <path d="M 462 55 L 484 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Stage 4 -->
      <rect x="484" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="546" y="47" class="diag-step-num" text-anchor="middle">STAGE 04</text>
      <text x="546" y="67" class="diag-text-title" text-anchor="middle">Monitor &amp; Review</text>
      <text x="546" y="82" class="diag-text-sub" text-anchor="middle">ติดตาม &amp; ทบทวน</text>

      <!-- Arrow 4 -> 5 -->
      <path d="M 608 55 L 630 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Stage 5 -->
      <rect x="630" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="692" y="47" class="diag-step-num" text-anchor="middle">STAGE 05</text>
      <text x="692" y="67" class="diag-text-title" text-anchor="middle">Communicate &amp; Report</text>
      <text x="692" y="82" class="diag-text-sub" text-anchor="middle">สื่อสาร &amp; รายงานสถานะ</text>

      <!-- Feedback Loop 5 -> 1 -->
      <path d="M 692 90 C 692 165, 108 165, 108 90" class="diag-arrow diag-arrow-dash" marker-end="url(#diag-arrow-head)" />
      <text x="400" y="158" class="diag-text-label" text-anchor="middle">กระบวนการต่อเนื่องตลอดวงจรชีวิต (Continuous Iterative Process)</text>
    </svg>
  </div>
</div>
`,

  // 1.3.4 Security Document Hierarchy Pyramid
  documentHierarchy: `
<div class="reading-diagram-card" data-diagram="documentHierarchy" role="region" aria-label="Security Document Hierarchy Pyramid">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Governance Hierarchy</span>
    <h4 class="reading-diagram-title">Security Document Hierarchy — The 4 Tiers</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 860 260" class="reading-diagram-svg" aria-label="Pyramid: Policy at top, Standard, Procedure, Guideline at base" role="img">
      <!-- Tier 1: Policy -->
      <g>
        <polygon points="210,20 165,72 255,72" class="diag-pyramid-tier diag-pyramid-t1" />
        <text x="210" y="52" class="diag-text-title diag-text-light" text-anchor="middle">POLICY</text>
        <line x1="255" y1="46" x2="425" y2="46" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="21" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="41" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · ระดับสูงสุด</text>
        <text x="640" y="41" class="diag-doc-scope">Answers: WHAT &amp; WHY</text>
        <text x="442" y="58" class="diag-tier-desc">กำหนดทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหาร</text>
      </g>

      <!-- Tier 2: Standard -->
      <g>
        <polygon points="162,76 117,128 303,128 258,76" class="diag-pyramid-tier diag-pyramid-t2" />
        <text x="210" y="108" class="diag-text-title diag-text-light" text-anchor="middle">STANDARD</text>
        <line x1="303" y1="102" x2="425" y2="102" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="77" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="97" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · ข้อกำหนดขั้นต่ำ</text>
        <text x="640" y="97" class="diag-doc-scope">Answers: EXACT SPECIFICATION</text>
        <text x="442" y="114" class="diag-tier-desc">ข้อกำหนดทางเทคนิคที่จำเพาะเจาะจงและวัดผลได้ชัดเจน</text>
      </g>

      <!-- Tier 3: Procedure -->
      <g>
        <polygon points="114,132 69,184 351,184 306,132" class="diag-pyramid-tier diag-pyramid-t3" />
        <text x="210" y="164" class="diag-text-title diag-text-light" text-anchor="middle">PROCEDURE</text>
        <line x1="351" y1="158" x2="425" y2="158" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="133" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="153" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · บังคับผู้ปฏิบัติ</text>
        <text x="640" y="153" class="diag-doc-scope">Answers: HOW (STEP-BY-STEP)</text>
        <text x="442" y="170" class="diag-tier-desc">ขั้นตอนและวิธีปฏิบัติงานทีละสเต็ปอย่างเป็นลำดับแบบ Task-oriented</text>
      </g>

      <!-- Tier 4: Guideline -->
      <g>
        <polygon points="66,188 20,240 400,240 354,188" class="diag-pyramid-tier diag-pyramid-t4" />
        <text x="210" y="220" class="diag-text-title diag-text-light" text-anchor="middle">GUIDELINE</text>
        <line x1="400" y1="214" x2="425" y2="214" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="189" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="209" class="diag-doc-tag diag-doc-tag-advisory">ADVISORY · ไม่บังคับ ยืดหยุ่น</text>
        <text x="640" y="209" class="diag-doc-scope">Answers: RECOMMENDATION</text>
        <text x="442" y="226" class="diag-tier-desc">คำแนะนำ ข้อเสนอแนะ หรือ Best Practices เพื่อช่วยในการตัดสินใจ</text>
      </g>
    </svg>
  </div>
</div>
`,

  // 1.4.2 Security Control Function Matrix (Non-Linear Taxonomy)
  controlTimeline: `
<div class="reading-diagram-card" data-diagram="controlTimeline" role="region" aria-label="Security Control Function Matrix">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Control Taxonomy</span>
    <h4 class="reading-diagram-title">Security Control Functions: Purpose, Timing & Overlapping Roles</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 850 155" class="reading-diagram-svg" aria-label="Functional Matrix: Deterrent, Preventive, Detective, Corrective, Recovery with overlapping roles" role="img">
      <!-- Column 1: Before Incident -->
      <g>
        <rect x="15" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="99" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="145" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">BEFORE</text>
        <text x="145" y="68" class="diag-timeline-title" text-anchor="middle">Deterrent &amp; Preventive</text>
        <text x="145" y="93" class="diag-timeline-desc" text-anchor="middle">ยับยั้งใจ &amp; สกัดกั้นก่อนเกิดเหตุ</text>
        <text x="145" y="117" class="diag-timeline-example" text-anchor="middle">ป้ายเตือน, ล็อคประตู, Firewall, MFA</text>
      </g>

      <!-- Arrow 1: Before -> During -->
      <g class="diag-timeline-arrow-group" aria-hidden="true">
        <line x1="277" y1="77" x2="289" y2="77" class="diag-timeline-arrow-line" />
        <polygon points="293,77 287,73 287,81" class="diag-timeline-arrow-head" />
      </g>

      <!-- Column 2: During Incident -->
      <g>
        <rect x="295" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="379" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="425" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">DURING</text>
        <text x="425" y="68" class="diag-timeline-title" text-anchor="middle">Detective</text>
        <text x="425" y="93" class="diag-timeline-desc" text-anchor="middle">ตรวจจับ &amp; แจ้งเตือนภัยขณะเกิดเหตุ</text>
        <text x="425" y="117" class="diag-timeline-example" text-anchor="middle">IDS, Security Logs, Motion Sensor</text>
      </g>

      <!-- Arrow 2: During -> After -->
      <g class="diag-timeline-arrow-group" aria-hidden="true">
        <line x1="557" y1="77" x2="569" y2="77" class="diag-timeline-arrow-line" />
        <polygon points="573,77 567,73 567,81" class="diag-timeline-arrow-head" />
      </g>

      <!-- Column 3: After Incident -->
      <g>
        <rect x="575" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="659" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="705" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">AFTER</text>
        <text x="705" y="68" class="diag-timeline-title" text-anchor="middle">Corrective &amp; Recovery</text>
        <text x="705" y="93" class="diag-timeline-desc" text-anchor="middle">แก้ไขเยียวยา &amp; กู้คืนระบบหลังเกิดเหตุ</text>
        <text x="705" y="117" class="diag-timeline-example" text-anchor="middle">Patching, Malware Removal, DRP</text>
      </g>
    </svg>
  </div>
  <div class="reading-diagram-caption reading-timeline-caption">
    <div class="reading-timeline-caption-header">
      <span class="reading-timeline-caption-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Key Concept: Overlap &amp; Multi-Role Functions
      </span>
    </div>
    <p class="reading-timeline-caption-text">
      <strong>มาตรการความมั่นคงปลอดภัยหนึ่งตัวสามารถทำหน้าที่ได้หลายฟังก์ชันพร้อมกัน:</strong>
      การจำแนกตามช่วงเวลา (Before / During / After) เป็นกรอบแนวคิดเพื่อความเข้าใจ ไม่ได้จำกัดว่ามาตรการหนึ่งจะถูกผูกขาดอยู่เพียงช่วงเวลาเดียว เช่น <em>กล้องวงจรปิด (CCTV)</em> เมื่อติดตั้งเด่นชัดจะทำหน้าที่เป็น <strong>Deterrent</strong> (ป้องปรามยับยั้งใจผู้บุกรุกก่อนเกิดเหตุ) ขณะเดียวกันก็ทำหน้าที่เป็น <strong>Detective</strong> (ตรวจจับและบันทึกภาพหลักฐานขณะเกิดเหตุ)
    </p>
  </div>
</div>
`,

  // 1.5.2 Due Care vs. Due Diligence Operational Loop
  dueCareDiligence: `
<div class="reading-diagram-card" data-diagram="dueCareDiligence" role="region" aria-label="Due Care versus Due Diligence Operational Cycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Operational Cycle</span>
    <h4 class="reading-diagram-title">Due Diligence (CHECK) & Due Care (DO) Workflow</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 680 160" class="reading-diagram-svg" aria-label="Due diligence checks, Due care acts, Due diligence verifies" role="img">
      <!-- Step 1: Check -->
      <g>
        <rect x="30" y="30" width="180" height="80" rx="8" class="diag-box diag-box-banner" />
        <text x="120" y="58" class="diag-step-num" text-anchor="middle">DUE DILIGENCE (CHECK)</text>
        <text x="120" y="78" class="diag-text-title" text-anchor="middle">สืบค้น & ตรวจสอบ</text>
        <text x="120" y="96" class="diag-text-sub" text-anchor="middle">สแกนพบช่องโหว่ความเสี่ยง</text>
      </g>
      <path d="M 210 70 L 250 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Step 2: Do -->
      <g>
        <rect x="250" y="30" width="180" height="80" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="340" y="58" class="diag-step-num" text-anchor="middle">DUE CARE (DO)</text>
        <text x="340" y="78" class="diag-text-title" text-anchor="middle">ลงมือปฏิบัติแก้ไข</text>
        <text x="340" y="96" class="diag-text-sub" text-anchor="middle">ติดตั้ง Security Patch ทันที</text>
      </g>
      <path d="M 430 70 L 470 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <!-- Step 3: Verify -->
      <g>
        <rect x="470" y="30" width="180" height="80" rx="8" class="diag-box diag-box-banner" />
        <text x="560" y="58" class="diag-step-num" text-anchor="middle">DUE DILIGENCE (VERIFY)</text>
        <text x="560" y="78" class="diag-text-title" text-anchor="middle">ตรวจซ้ำยืนยันผล</text>
        <text x="560" y="96" class="diag-text-sub" text-anchor="middle">สแกนยืนยันว่าช่องโหว่อุดแล้ว</text>
      </g>

      <!-- Loop back -->
      <path d="M 560 110 C 560 145, 120 145, 120 110" class="diag-arrow diag-arrow-dash" marker-end="url(#diag-arrow-head)" />
      <text x="340" y="145" class="diag-text-label" text-anchor="middle">การประเมินและการลงมือปฏิบัติอย่างต่อเนื่องและสมเหตุสมผล (Prudent Person)</text>
    </svg>
  </div>
</div>
`,

  // 1.5.3 ISC2 Code of Ethics Canons (Clean Numbered Precedence Hierarchy: 01-04)
  ethicsCanons: `
<div class="reading-diagram-card" data-diagram="ethicsCanons" role="region" aria-label="ISC2 Code of Ethics 4 Canons Numbered Precedence Hierarchy">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Ethics Hierarchy</span>
    <h4 class="reading-diagram-title">The 4 Canons of the ISC2 Code of Ethics (Strict Order of Precedence)</h4>
  </div>
  <div class="reading-diagram-svg-wrap">
    <svg viewBox="0 0 740 250" class="reading-diagram-svg" aria-label="Order of precedence: 01 Society, 02 Honor, 03 Principals, 04 Profession" role="img">
      <!-- Precedence Rule Banner (Stated Once at Top) -->
      <rect x="25" y="12" width="690" height="28" rx="5" class="diag-box diag-box-banner" />
      <text x="370" y="30" class="diag-text-sub" text-anchor="middle">Order of Precedence: Canon 01 supersedes 02 &middot; 02 supersedes 03 &middot; 03 supersedes 04 (In case of conflict)</text>

      <!-- Canon 01: Society -->
      <g>
        <rect x="25" y="48" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="74" class="diag-step-num">01</text>
        <text x="85" y="74" class="diag-text-title">Society</text>
        <text x="145" y="74" class="diag-text-sub">Protect society, the common good, public trust, and infrastructure</text>
        <text x="695" y="74" class="diag-step-num" text-anchor="end">PRIORITY 1 (HIGHEST)</text>
      </g>

      <!-- Canon 02: Honor -->
      <g>
        <rect x="25" y="97" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="123" class="diag-step-num">02</text>
        <text x="85" y="123" class="diag-text-title">Honor</text>
        <text x="135" y="123" class="diag-text-sub">Act honorably, honestly, justly, responsibly, and legally</text>
        <text x="695" y="123" class="diag-step-num" text-anchor="end">PRIORITY 2</text>
      </g>

      <!-- Canon 03: Principals -->
      <g>
        <rect x="25" y="146" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="172" class="diag-step-num">03</text>
        <text x="85" y="172" class="diag-text-title">Principals</text>
        <text x="160" y="172" class="diag-text-sub">Provide diligent and competent service to principals (Employers / Clients)</text>
        <text x="695" y="172" class="diag-step-num" text-anchor="end">PRIORITY 3</text>
      </g>

      <!-- Canon 04: Profession -->
      <g>
        <rect x="25" y="195" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="221" class="diag-step-num">04</text>
        <text x="85" y="221" class="diag-text-title">Profession</text>
        <text x="170" y="221" class="diag-text-sub">Advance and protect the profession</text>
        <text x="695" y="221" class="diag-step-num" text-anchor="end">PRIORITY 4</text>
      </g>
    </svg>
  </div>
</div>
`
};
