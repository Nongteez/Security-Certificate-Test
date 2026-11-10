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
<div class="reading-diagram-card reading-threat-diagram" data-diagram="threatChain" data-relationship="causal-example-with-controls" role="region" aria-label="Threat, Vulnerability, Asset and Control Causal Relationship" aria-describedby="threatChain-note">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Causal Model</span>
    <h4 class="reading-diagram-title">Threats, Vulnerabilities, Impacts &amp; Controls: Causal Relationship</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 250" class="reading-diagram-svg" aria-label="Causal flow: Threat Actor uses Exploit to target Vulnerability in Asset, which may cause Potential Impact, with Security Controls reducing likelihood and impact" role="img">
      <!-- Security Controls Secondary Band (Above) -->
      <g data-threat-concept="controls">
        <rect x="210" y="16" width="420" height="52" rx="8" class="diag-box diag-box-emerald" />
        <text x="420" y="36" class="diag-text-title" font-weight="700" text-anchor="middle" fill="var(--green, #10b981)">Security Controls · มาตรการควบคุม</text>
        <text x="420" y="53" class="diag-text-sub" text-anchor="middle">Safeguards &amp; Countermeasures · ช่วยลดโอกาสเกิดเหตุ (Likelihood) และลดผลกระทบ (Impact)</text>

        <!-- Downward Indicator 1: Reduces Likelihood -->
        <line x1="290" y1="68" x2="290" y2="108" stroke="var(--green, #059669)" stroke-width="1.5" stroke-dasharray="3 3" />
        <polygon points="290,113 286,105 294,105" fill="var(--green, #059669)" />
        <text x="290" y="92" class="diag-text-label" font-size="10px" text-anchor="middle" fill="var(--green, #059669)">Reduces Likelihood · ลดโอกาส</text>

        <!-- Downward Indicator 2: Reduces Impact -->
        <line x1="570" y1="68" x2="570" y2="98" stroke="var(--green, #059669)" stroke-width="1.5" stroke-dasharray="3 3" />
        <polygon points="570,103 566,95 574,95" fill="var(--green, #059669)" />
        <text x="570" y="86" class="diag-text-label" font-size="10px" text-anchor="middle" fill="var(--green, #059669)">Reduces Impact · ลดความเสียหาย</text>
      </g>

      <!-- Main Causal Flow -->
      <!-- 01: Threat Actor -->
      <g data-threat-concept="threat-actor">
        <rect x="20" y="115" width="150" height="105" rx="8" class="diag-box diag-box-amber" />
        <rect x="35" y="125" width="120" height="18" rx="4" fill="#f59e0b" fill-opacity="0.15" />
        <text x="95" y="138" fill="#f59e0b" font-size="9.5px" font-weight="700" text-anchor="middle">01 · INITIATING AGENT</text>
        <text x="95" y="164" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">Threat Actor</text>
        <text x="95" y="184" class="diag-text-sub" font-size="12px" text-anchor="middle">ผู้ก่อภัยคุกคาม</text>
        <text x="95" y="202" class="diag-text-label" font-size="10.5px" text-anchor="middle">บุคคล/สิ่งที่คุกคาม</text>
      </g>

      <!-- Connector 1: Uses / ใช้ -->
      <g data-from="threat-actor" data-to="vulnerability">
        <line x1="170" y1="167" x2="209" y2="167" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-linecap="round" />
        <polygon points="214,167 206,163 206,171" fill="var(--blue, #3b82f6)" />
        <text x="190" y="158" class="diag-text-label" font-size="10.5px" text-anchor="middle">Uses · ใช้</text>
      </g>

      <!-- 02: Exploit -->
      <g data-threat-concept="exploit">
        <rect x="215" y="115" width="150" height="105" rx="8" class="diag-box diag-box-banner" />
        <rect x="230" y="125" width="120" height="18" rx="4" fill="var(--blue, #3b82f6)" fill-opacity="0.15" />
        <text x="290" y="138" fill="var(--blue, #3b82f6)" font-size="9.5px" font-weight="700" text-anchor="middle">02 · TECHNIQUE / TOOL</text>
        <text x="290" y="164" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">Exploit</text>
        <text x="290" y="184" class="diag-text-sub" font-size="12px" text-anchor="middle">การใช้ประโยชน์</text>
        <text x="290" y="202" class="diag-text-label" font-size="10.5px" text-anchor="middle">วิธีหรือเครื่องมือเจาะ</text>
      </g>

      <!-- Connector 2: Targets / เจาะผ่าน -->
      <g>
        <line x1="365" y1="167" x2="404" y2="167" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-linecap="round" />
        <polygon points="409,167 401,163 401,171" fill="var(--blue, #3b82f6)" />
        <text x="385" y="158" class="diag-text-label" font-size="10.5px" text-anchor="middle">Targets · เจาะ</text>
      </g>

      <!-- 03: Asset & Vulnerability (Grouped Nested Container) -->
      <g data-threat-group="vulnerable-asset" data-threat-concept="asset">
        <!-- Outer Box: Asset -->
        <rect x="410" y="105" width="225" height="125" rx="8" class="diag-box diag-box-blue" style="stroke-dasharray: 4 2;" />
        <text x="522.5" y="125" class="diag-text-title" fill="var(--blue, #3b82f6)" font-size="12.5px" font-weight="700" text-anchor="middle">Asset · ทรัพย์สินมีคุณค่า</text>
        <text x="522.5" y="139" class="diag-text-label" font-size="10px" text-anchor="middle">Target to Protect · สิ่งที่ต้องคุ้มครอง</text>

        <!-- Inner Box: Vulnerability -->
        <g data-threat-concept="vulnerability">
          <rect x="422" y="147" width="201" height="73" rx="6" class="diag-box diag-box-banner" />
          <text x="522.5" y="171" class="diag-text-title" font-size="13.5px" font-weight="700" text-anchor="middle">Vulnerability</text>
          <text x="522.5" y="190" class="diag-text-sub" font-size="12px" text-anchor="middle">ช่องโหว่ / จุดอ่อน</text>
          <text x="522.5" y="208" class="diag-text-label" font-size="10px" text-anchor="middle">Weakness in Asset · ข้อบกพร่องภายใน</text>
        </g>
      </g>

      <!-- Connector 3: May cause / หากสำเร็จ -->
      <g data-from="vulnerable-asset" data-to="impact">
        <line x1="635" y1="167" x2="674" y2="167" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-linecap="round" />
        <polygon points="679,167 671,163 671,171" fill="var(--blue, #3b82f6)" />
        <text x="655" y="156" class="diag-text-label" font-size="9.5px" text-anchor="middle">May cause</text>
        <text x="655" y="179" class="diag-text-label" font-size="9.5px" text-anchor="middle">หากสำเร็จ</text>
      </g>

      <!-- 04: Potential Impact -->
      <g data-threat-concept="impact">
        <rect x="680" y="115" width="140" height="105" rx="8" class="diag-box diag-box-rose" />
        <rect x="695" y="125" width="110" height="18" rx="4" fill="#ef4444" fill-opacity="0.15" />
        <text x="750" y="138" fill="#ef4444" font-size="9.5px" font-weight="700" text-anchor="middle">03 · OUTCOME</text>
        <text x="750" y="164" class="diag-text-title" font-size="13px" font-weight="700" text-anchor="middle">Potential Impact</text>
        <text x="750" y="184" class="diag-text-sub" font-size="11.5px" text-anchor="middle">ผลกระทบที่อาจเกิด</text>
        <text x="750" y="202" class="diag-text-label" font-size="9.5px" text-anchor="middle">Conditional Harm</text>
      </g>
    </svg>
  </div>

  <!-- Mobile Stack Representation (<880px) -->
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Threat Chain Mobile View">
    <!-- Security Controls Secondary Card -->
    <div class="reading-mob-tier-card reading-tier-green" data-threat-concept="controls" style="border-left: 3px solid var(--green, #059669);">
      <div class="reading-mob-tier-head">
        <span class="reading-mob-tier-num" style="background: var(--green, #059669); color: #fff;">CTRL</span>
        <div class="reading-mob-tier-info">
          <h5 class="reading-mob-tier-name">SECURITY CONTROLS (มาตรการควบคุม)</h5>
          <span class="reading-mob-tier-action">Safeguards &amp; Countermeasures · ปกป้องและลดความเสี่ยง</span>
        </div>
      </div>
      <p class="reading-mob-tier-desc">มาตรการควบคุมช่วยลดโอกาสเกิดเหตุ (Reduces Likelihood) และลดทอนความเสียหาย (Reduces Impact) เมื่อเกิดเหตุ</p>
    </div>

    <!-- Main Causal Stack -->
    <div class="reading-mob-stack-list">
      <!-- 01 Threat Actor -->
      <div class="reading-mob-tier-card reading-tier-kpi" data-threat-concept="threat-actor">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">THREAT ACTOR (ผู้ก่อภัยคุกคาม)</h5>
            <span class="reading-mob-tier-action">Initiating Agent · ผู้ลงมือหรือพยายามก่อให้เกิดภัยคุกคาม</span>
          </div>
        </div>
      </div>

      <!-- Connector 1 -->
      <div class="reading-mob-step-connector" data-from="threat-actor" data-to="vulnerability">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; Uses / ใช้ประโยชน์ &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <!-- 02 Exploit -->
      <div class="reading-mob-tier-card reading-tier-blue" data-threat-concept="exploit">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">EXPLOIT (การใช้ประโยชน์จากช่องโหว่)</h5>
            <span class="reading-mob-tier-action">Attack Technique · วิธีการหรือเครื่องมือที่ใช้เจาะระบบ</span>
          </div>
        </div>
      </div>

      <!-- Connector 2 -->
      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; Targets / เจาะผ่าน &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <!-- 03 Asset & Vulnerability Grouped -->
      <div class="reading-mob-tier-card reading-tier-amber" data-threat-group="vulnerable-asset" data-threat-concept="asset" style="border: 1.5px dashed var(--blue, #3b82f6); background: var(--blue-bg, rgba(59, 130, 246, 0.05));">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num" style="background: var(--blue, #3b82f6); color: #fff;">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ASSET (ทรัพย์สินมีคุณค่า)</h5>
            <span class="reading-mob-tier-action">Target to Protect · สิ่งที่องค์กรต้องคุ้มครอง</span>
          </div>
        </div>
        <div class="reading-mob-subcard" data-threat-concept="vulnerability" style="margin-top: 10px; padding: 10px 14px; background: var(--panel, #1e293b); border: 1px solid var(--line, #334155); border-radius: 6px;">
          <h6 style="margin: 0; font-size: 14px; font-weight: 700; color: var(--text);">VULNERABILITY (ช่องโหว่)</h6>
          <div style="font-size: 12px; color: var(--text-muted, #94a3b8); margin-top: 3px;">Weakness in Asset · จุดอ่อนหรือข้อบกพร่องภายในทรัพย์สิน</div>
        </div>
      </div>

      <!-- Connector 3 -->
      <div class="reading-mob-step-connector" data-from="vulnerable-asset" data-to="impact">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; If successful, may cause / หากสำเร็จ อาจก่อให้เกิด &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <!-- 04 Potential Impact -->
      <div class="reading-mob-tier-card reading-tier-report" data-threat-concept="impact">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num" style="background: var(--red, #ef4444); color: #fff;">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">POTENTIAL IMPACT (ผลกระทบที่อาจเกิดขึ้น)</h5>
            <span class="reading-mob-tier-action">Conditional Harm · ความเสียหายหากการโจมตีสำเร็จ (ไม่แน่นอน)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p id="threatChain-note" class="reading-threat-caption"><span lang="th">เป็นตัวอย่างความสัมพันธ์เชิงเหตุและผล ไม่ใช่ลำดับการโจมตีที่ต้องเกิดทุกครั้ง มาตรการควบคุมช่วยลดโอกาสเกิดเหตุและ/หรือผลกระทบ โดยไม่ได้เป็นขั้นตอนสุดท้ายหลังเกิดเหตุ</span> / <span lang="en">Illustrative causal relationship, not a mandatory attack sequence (not five required steps). Controls can reduce risk where relevant, not a final stage after impact.</span></p>

`,

  // 1.1.2 Case A: CIA Triad
  ciaTriad: `
<div class="reading-diagram-card" data-diagram="ciaTriad" role="region" aria-label="The CIA Triad Conceptual Diagram">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Core Model</span>
    <h4 class="reading-diagram-title">The CIA Triad — Three Pillars of Information Security</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 700 380" class="reading-diagram-svg" aria-label="CIA Triad: Confidentiality at top, Integrity at bottom left, Availability at bottom right" role="img">
      <polygon points="350,60 140,300 560,300" class="diag-triad-poly" />
      <circle cx="350" cy="205" r="55" class="diag-triad-center-circle" />
      <text x="350" y="200" class="diag-triad-center-title" text-anchor="middle">CIA TRIAD</text>
      <text x="350" y="218" class="diag-triad-center-sub" text-anchor="middle">แกนกลางความปลอดภัย</text>

      <g class="diag-pillar">
        <circle cx="350" cy="60" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <g class="diag-icon-group" transform="translate(339, 48)">
          <rect x="3" y="11" width="18" height="12" rx="2" ry="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="var(--blue)" stroke-width="2"/>
        </g>
        <text x="350" y="118" class="diag-pillar-title" text-anchor="middle">Confidentiality</text>
        <text x="350" y="134" class="diag-pillar-sub" text-anchor="middle">การรักษาความลับ &middot; Who can SEE it?</text>
        <rect x="250" y="138" width="200" height="2" class="diag-pillar-line" />
      </g>

      <g class="diag-pillar">
        <circle cx="140" cy="300" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <g class="diag-icon-group" transform="translate(128, 288)">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <path d="m9 12 2 2 4-4" fill="none" stroke="var(--blue)" stroke-width="2" stroke-linecap="round"/>
        </g>
        <text x="140" y="358" class="diag-pillar-title" text-anchor="middle">Integrity</text>
        <text x="140" y="374" class="diag-pillar-sub" text-anchor="middle">ความถูกต้องไม่ถูกดัดแปลง &middot; Can I TRUST it?</text>
      </g>

      <g class="diag-pillar">
        <circle cx="560" cy="300" r="42" class="diag-pillar-circle diag-pillar-blue" />
        <g class="diag-icon-group" transform="translate(548, 288)">
          <rect x="2" y="3" width="20" height="7" rx="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <rect x="2" y="14" width="20" height="7" rx="2" fill="none" stroke="var(--blue)" stroke-width="2"/>
          <circle cx="6" cy="6.5" r="1" fill="var(--blue)"/>
          <circle cx="6" cy="17.5" r="1" fill="var(--blue)"/>
        </g>
        <text x="560" y="358" class="diag-pillar-title" text-anchor="middle">Availability</text>
        <text x="560" y="374" class="diag-pillar-sub" text-anchor="middle">ความพร้อมใช้งาน &middot; Can I ACCESS it?</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="CIA Triad 3 Pillars Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">THE CIA TRIAD &middot; 3 PILLARS</span>
      <p class="reading-mob-banner-text">สามเสาหลักแห่งความมั่นคงปลอดภัยสารสนเทศ: ความลับ &middot; ความถูกต้องสมบูรณ์ &middot; ความพร้อมใช้งาน</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">C</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CONFIDENTIALITY (การรักษาความลับ)</h5>
            <span class="reading-mob-tier-action">"Who can SEE it?" &middot; ป้องกันการเปิดเผยโดยไม่ได้รับอนุญาต</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รักษาข้อมูลไม่ให้รั่วไหลสู่บุคคลที่ไม่เกี่ยวข้อง: การเข้ารหัส (AES-256), การกำหนดสิทธิ์ตามบทบาท (RBAC), สิทธิ์ขั้นต่ำ (PoLP), นโยบายจัดชั้นความลับ (Data Classification)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">I</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INTEGRITY (ความถูกต้องสมบูรณ์)</h5>
            <span class="reading-mob-tier-action">"Can I TRUST it?" &middot; ป้องกันการดัดแปลงแก้ไข</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รับประกันว่าข้อมูลถูกต้อง แท้จริง และไม่ถูกเปลี่ยนแปลงโดยไม่ได้รับอนุญาต: การคำนวณแฮช (SHA-256), ลายมือชื่อดิจิทัล (Digital Signatures), การควบคุมการเปลี่ยนแปลง (Change Control)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">A</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">AVAILABILITY (ความพร้อมใช้งาน)</h5>
            <span class="reading-mob-tier-action">"Can I ACCESS it?" &middot; เข้าถึงได้ทันทีเมื่อจำเป็น</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รับรองว่าระบบและข้อมูลพร้อมให้ผู้มีสิทธิ์ใช้งานได้ต่อเนื่อง: การกระจายภาระงาน (Load Balancing), ระบบสำรองคู่ขนาน (Redundancy / Clustering), แผนกู้คืนระบบ (Backups / DRP)</p>
      </div>
    </div>
  </div>
</div>
`,

  // 1.1.2 High Availability & Load Balancer Topology
  loadBalancer: `
<div class="reading-diagram-card" data-diagram="loadBalancer" role="region" aria-label="High Availability and Load Balancing Topology">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Availability Topology</span>
    <h4 class="reading-diagram-title">Load Balancer &amp; Server Redundancy (Fault Tolerance)</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 680 180" class="reading-diagram-svg" aria-label="Load balancer distributing traffic to redundant servers" role="img">
      <defs>
        <marker id="diag-arrow-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diag-arrow, #64748b)" class="diag-marker-arrow" />
        </marker>
      </defs>

      <rect x="20" y="60" width="110" height="60" rx="6" class="diag-box diag-box-banner" />
      <text x="75" y="87" class="diag-text-title" text-anchor="middle">End Users</text>
      <text x="75" y="105" class="diag-text-sub" text-anchor="middle">ผู้ใช้งานระบบ</text>

      <path d="M 130 90 L 190 90" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="190" y="45" width="130" height="90" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
      <text x="255" y="82" class="diag-text-title" text-anchor="middle">Load Balancer</text>
      <text x="255" y="100" class="diag-text-sub" text-anchor="middle">กระจายภาระงาน (LB)</text>
      <text x="255" y="118" class="diag-text-sub" text-anchor="middle">Health Check สม่ำเสมอ</text>

      <path d="M 320 90 L 370 40 L 420 40" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <path d="M 320 90 L 420 90" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <path d="M 320 90 L 370 140 L 420 140" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="420" y="15" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="38" class="diag-text-title" text-anchor="middle">Web Server 01 (Active)</text>
      <text x="510" y="55" class="diag-text-sub" text-anchor="middle">ทำงานปกติ</text>

      <rect x="420" y="65" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="88" class="diag-text-title" text-anchor="middle">Web Server 02 (Active)</text>
      <text x="510" y="105" class="diag-text-sub" text-anchor="middle">ทำงานปกติ</text>

      <rect x="420" y="115" width="180" height="50" rx="6" class="diag-box diag-box-banner" />
      <text x="510" y="138" class="diag-text-title" text-anchor="middle">Web Server 03 (Standby)</text>
      <text x="510" y="155" class="diag-text-sub" text-anchor="middle">พร้อมสแตนด์บายทดแทน</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Load Balancer Topology Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">HIGH AVAILABILITY TOPOLOGY</span>
      <p class="reading-mob-banner-text">ตัวอย่าง Load Balancer นี้กระจายภาระงานไปยัง Web Servers หลายเครื่อง เพื่อลดผลกระทบจากบางเครื่องเสีย หากต้องการหลีกเลี่ยง Load Balancer เป็น Single Point of Failure ต้องออกแบบความซ้ำซ้อนของ LB และส่วนพึ่งพาอื่นด้วย</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">END USERS (ผู้ใช้งานระบบ)</h5>
            <span class="reading-mob-tier-action">Incoming Traffic &middot; คำขอใช้งาน</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ทราฟฟิกคำขอใช้งานจำนวนมากหลั่งไหลเข้าสู่ระบบผ่านจุดเชื่อมต่อเครือข่ายเดียว</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; ส่งต่อสู่ระบบกระจายโหลด &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">LOAD BALANCER (อุปกรณ์กระจายภาระงาน)</h5>
            <span class="reading-mob-tier-action">Traffic Distribution &amp; Health Checks</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ตรวจสอบสถานะความพร้อม (Health Check) และเฉลี่ยทราฟฟิกไปยังเซิร์ฟเวอร์ที่พร้อมทำงาน ป้องกันเครื่องใดเครื่องหนึ่งโอเวอร์โหลด</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">&darr; กระจายไปยังคลัสเตอร์คู่ขนาน &darr;</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">REDUNDANT SERVER NODES (เซิร์ฟเวอร์คู่ขนาน)</h5>
            <span class="reading-mob-tier-action">Active / Standby Clustering &middot; Fault Tolerance</span>
          </div>
        </div>
        <div class="reading-mob-tier-grid">
          <div class="reading-mob-sub-item">
            <span class="reading-mob-sub-name">Web Server 01 (Active)</span>
            <span class="reading-mob-sub-desc">ประมวลผลคำขอหลักร่วมกับเซิร์ฟเวอร์เครื่องอื่น</span>
          </div>
          <div class="reading-mob-sub-item">
            <span class="reading-mob-sub-name">Web Server 02 (Active)</span>
            <span class="reading-mob-sub-desc">ร่วมกระจายภาระงานแบบแบ่งเบาคู่ขนาน</span>
          </div>
          <div class="reading-mob-sub-item">
            <span class="reading-mob-sub-name">Web Server 03 (Standby)</span>
            <span class="reading-mob-sub-desc">พร้อมทำ Failover เข้าทำงานแทนทันทีหากโหนดใดโหนดหนึ่งขัดข้อง</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,

  // 1.1.3 AAA Identity Lifecycle
  aaaLifecycle: `
<div class="reading-diagram-card" data-diagram="aaaLifecycle" data-relationship="illustrative-access" role="region" aria-label="AAA Identity Lifecycle Process Flow">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Process Flow</span>
    <h4 class="reading-diagram-title">The AAA Framework &amp; Identity Lifecycle</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 760 155" class="reading-diagram-svg" aria-label="Illustrative identity claim, proof and permission, with ongoing accounting" role="img">
      <!-- Step 1: Identification -->
      <g>
        <rect x="10" y="25" width="165" height="100" rx="8" class="diag-box diag-box-banner" />
        <text x="92" y="52" class="diag-step-num" text-anchor="middle">STEP 01</text>
        <text x="92" y="74" class="diag-text-title" text-anchor="middle">Identification</text>
        <text x="92" y="93" class="diag-text-sub" text-anchor="middle">"Who are you?"</text>
        <text x="92" y="114" class="diag-text-sub" text-anchor="middle">Username / User ID</text>
      </g>
      <g>
        <line x1="175" y1="70" x2="199" y2="70" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-linecap="round" />
        <polygon points="205,70 197,65 197,75" fill="var(--blue, #3b82f6)" />
      </g>

      <!-- Step 2: Authentication -->
      <g>
        <rect x="205" y="25" width="165" height="100" rx="8" class="diag-box diag-box-banner" />
        <text x="287" y="52" class="diag-step-num" text-anchor="middle">STEP 02</text>
        <text x="287" y="74" class="diag-text-title" text-anchor="middle">Authentication</text>
        <text x="287" y="93" class="diag-text-sub" text-anchor="middle">"Prove it!"</text>
        <text x="287" y="114" class="diag-text-sub" text-anchor="middle">Password, MFA, Bio</text>
      </g>
      <g>
        <line x1="370" y1="70" x2="394" y2="70" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-linecap="round" />
        <polygon points="400,70 392,65 392,75" fill="var(--blue, #3b82f6)" />
      </g>

      <!-- Step 3: Authorization -->
      <g>
        <rect x="400" y="25" width="165" height="100" rx="8" class="diag-box diag-box-banner" />
        <text x="482" y="52" class="diag-step-num" text-anchor="middle">STEP 03</text>
        <text x="482" y="74" class="diag-text-title" text-anchor="middle">Authorization</text>
        <text x="482" y="93" class="diag-text-sub" text-anchor="middle">"What can you do?"</text>
        <text x="482" y="114" class="diag-text-sub" text-anchor="middle">Permissions / Roles</text>
      </g>

      <!-- Accounting throughout the example -->
      <g data-concept="accounting" data-scope="ongoing">
        <rect x="595" y="25" width="155" height="100" rx="8" class="diag-box diag-box-banner" />
        <text x="672" y="52" class="diag-step-num" text-anchor="middle">ONGOING</text>
        <text x="672" y="74" class="diag-text-title" text-anchor="middle">Accounting</text>
        <text x="672" y="93" class="diag-text-sub" text-anchor="middle">"What did you do?"</text>
        <text x="672" y="114" class="diag-text-sub" text-anchor="middle">Audit Logs / Tracing</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="AAA Identity Lifecycle Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IDENTIFICATION (การระบุตัวตน)</h5>
            <span class="reading-mob-tier-action">&quot;Who are you?&quot; &middot; Username / User ID</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ผู้ใช้แจ้งตัวตนต่อระบบ เช่น Username, Employee ID, อีเมล (ยังไม่มีการพิสูจน์ความจริงในขั้นตอนนี้)</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">AUTHENTICATION (การพิสูจน์ตัวตน)</h5>
            <span class="reading-mob-tier-action">&quot;Prove it!&quot; &middot; Password, MFA, Bio</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ระบบตรวจสอบหลักฐานว่าเป็นตัวจริง: Password (Knowledge), Token / OTP (Ownership), ลายนิ้วมือ/ใบหน้า (Inherence) &middot; MFA ใช้ 2 ปัจจัยขึ้นไปที่ต่างหมวดหมู่</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">AUTHORIZATION (การอนุญาตสิทธิ์)</h5>
            <span class="reading-mob-tier-action">&quot;What can you do?&quot; &middot; Permissions / Roles</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">กำหนดว่าผู้ใช้ทำอะไรได้บ้างในระบบ: Access Control Lists (ACLs), บทบาทงาน (RBAC) ตามหลักสิทธิ์ขั้นต่ำที่จำเป็น (Least Privilege)</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">LOG</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ACCOUNTING &amp; AUDITING (การตรวจสอบ)</h5>
            <span class="reading-mob-tier-action">&quot;What did you do?&quot; &middot; Audit Logs / Tracing</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">Audit Trails และ Timestamps ช่วยติดตามกิจกรรมและสนับสนุน Accountability เมื่อบันทึกได้รับการปกป้องและเชื่อมโยงกับตัวตนอย่างน่าเชื่อถือ สนับสนุน Non-repudiation</p>
      </div>
    </div>
  </div>
  <p class="reading-semantic-note">Accounting records relevant events throughout the access example, including failed authentication attempts. Logs support accountability when protected and reliably linked to identity; non-repudiation also depends on suitable evidence and controls. / Accounting บันทึกเหตุการณ์ที่เกี่ยวข้องตลอดตัวอย่าง รวมถึงการพิสูจน์ตัวตนที่ไม่สำเร็จ Log ที่ได้รับการปกป้องช่วยสนับสนุน Accountability ส่วน Non-repudiation ต้องพิจารณาหลักฐานและมาตรการประกอบ</p>
</div>
`,

  // 1.1.6 Privacy Governance & Roles Flow
  privacyFlow: `
<div class="reading-diagram-card" data-diagram="privacyFlow" data-relationship="roles-and-instructions" role="region" aria-label="Privacy Governance and Data Roles Flow">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Governance Model</span>
    <h4 class="reading-diagram-title">Data Privacy Roles and Instructions — Example Delegation</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 700 150" class="reading-diagram-svg" aria-label="Data Subject to Data Controller to Data Processor" role="img">
      <defs>
        <marker id="diag-arrow-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diag-arrow, #64748b)" class="diag-marker-arrow" />
        </marker>
      </defs>

      <rect x="15" y="30" width="180" height="90" rx="8" class="diag-box diag-box-banner" />
      <text x="105" y="58" class="diag-text-title" text-anchor="middle">Data Subject</text>
      <text x="105" y="78" class="diag-text-sub" text-anchor="middle">เจ้าของข้อมูลส่วนบุคคล</text>
      <text x="105" y="96" class="diag-text-sub" text-anchor="middle">(ลูกค้า / พนักงาน)</text>

      <path d="M 195 75 L 255 75" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="225" y="65" class="diag-text-label" text-anchor="middle">ส่งมอบข้อมูล</text>

      <rect x="255" y="30" width="200" height="90" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
      <text x="355" y="58" class="diag-text-title" text-anchor="middle">Data Controller</text>
      <text x="355" y="78" class="diag-text-sub" text-anchor="middle">ผู้ควบคุมข้อมูลส่วนบุคคล</text>
      <text x="355" y="96" class="diag-text-sub" text-anchor="middle">กำหนดวัตถุประสงค์และวิธีการ</text>

      <path d="M 455 75 L 515 75" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <text x="485" y="65" class="diag-text-label" text-anchor="middle">ว่าจ้าง/สั่งการ</text>

      <rect x="515" y="30" width="170" height="90" rx="8" class="diag-box diag-box-banner" />
      <text x="600" y="58" class="diag-text-title" text-anchor="middle">Data Processor</text>
      <text x="600" y="78" class="diag-text-sub" text-anchor="middle">ผู้ประมวลผลข้อมูล</text>
      <text x="600" y="96" class="diag-text-sub" text-anchor="middle">ทำตามคำสั่ง Controller เท่านั้น</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Privacy Governance Roles Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">PRIVACY GOVERNANCE ROLES</span>
      <p class="reading-mob-banner-text">บทบาทและหน้าที่ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล (GDPR / PDPA): เจ้าของข้อมูล &middot; ผู้ควบคุม &middot; ผู้ประมวลผล</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">

          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DATA SUBJECT (เจ้าของข้อมูลส่วนบุคคล)</h5>
            <span class="reading-mob-tier-action">Individual &middot; บุคคลธรรมดา</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">บุคคลธรรมดาที่เป็นเจ้าของข้อมูล (ลูกค้า, ผู้ใช้บริการ, พนักงาน): มีสิทธิ์ให้ความยินยอม (Consent), ขอเข้าถึง, แก้ไข หรือขอลบข้อมูลตามกฎหมาย</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; ให้ข้อมูลตามบริบท; Consent เมื่อใช้ฐานความยินยอม &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">

          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DATA CONTROLLER (ผู้ควบคุมข้อมูลส่วนบุคคล)</h5>
            <span class="reading-mob-tier-action">Determines Purposes &amp; Means &middot; รับผิดชอบสูงสุด</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า <em>เก็บข้อมูลไปทำไม และใช้อย่างไร</em>: รับผิดชอบทางกฎหมายสูงสุด (Ultimate Accountability) ในการกำกับดูแลและรักษาความปลอดภัย</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">&darr; ว่าจ้างและสั่งการตามสัญญา (Contract &amp; Instructions) &darr;</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">

          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DATA PROCESSOR (ผู้ประมวลผลข้อมูลส่วนบุคคล)</h5>
            <span class="reading-mob-tier-action">Acts on Behalf of Controller &middot; ผู้ให้บริการภายนอก</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">บุคคลภายนอกหรือผู้ให้บริการที่ประมวลผลข้อมูล <em>ตามคำสั่งของผู้ควบคุมข้อมูลเท่านั้น</em>: เช่น ผู้ให้บริการ Cloud, ระบบ Payroll (ห้ามนำข้อมูลไปใช้เพื่อประโยชน์ตนเอง)</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Example role relationships when a processor is used, not compulsory processing stages. The consent label applies when consent is the relevant basis; it does not establish the legal basis for every processing context. / ตัวอย่างความสัมพันธ์ระหว่างบทบาทเมื่อมีการใช้ผู้ประมวลผล ไม่ใช่ขั้นตอนบังคับของการประมวลผลทุกกรณี ป้าย Consent ใช้เมื่ออาศัยฐานความยินยอม ไม่ได้กำหนดฐานกฎหมายแทนการพิจารณาบริบท</p></div>
`,

  // 1.1.7 Case B: Defense in Depth (7 Concentric Layers)
  defenseInDepth: `
<div class="reading-diagram-card" data-diagram="defenseInDepth" role="region" aria-label="Defense in Depth: example complementary layers, not chronological steps">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Security Architecture</span>
    <h4 class="reading-diagram-title">Defense in Depth — Seven Example Protective Layers</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 740 320" class="reading-diagram-svg" aria-label="Seven example complementary protective layers around core data; not a fixed count, chronological sequence or guarantee" role="img">
      <circle cx="370" cy="160" r="32" class="diag-did-core" />
      <text x="370" y="157" class="diag-did-core-title" text-anchor="middle">CORE</text>
      <text x="370" y="172" class="diag-did-core-sub" text-anchor="middle">DATA</text>

      <g class="diag-did-list">
        <rect x="20" y="25" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="47" class="diag-did-num">Layer 1: People</text>
        <text x="35" y="65" class="diag-did-desc">Security Awareness &amp; Phishing Defense</text>

        <rect x="20" y="90" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="112" class="diag-did-num">Layer 2: Perimeter</text>
        <text x="35" y="130" class="diag-did-desc">Firewalls, Next-Gen FW, DDoS Shield</text>

        <rect x="20" y="155" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="177" class="diag-did-num">Layer 3: Network</text>
        <text x="35" y="195" class="diag-did-desc">Network Segmentation, VLANs, Micro-seg</text>

        <rect x="20" y="220" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="35" y="242" class="diag-did-num">Layer 4: Identity &amp; Access</text>
        <text x="35" y="260" class="diag-did-desc">MFA, Least Privilege, Role-Based Access</text>
      </g>

      <g class="diag-did-list">
        <rect x="440" y="25" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="47" class="diag-did-num">Layer 5: Endpoint</text>
        <text x="455" y="65" class="diag-did-desc">EDR, Antivirus, Host Patching</text>

        <rect x="440" y="90" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="112" class="diag-did-num">Layer 6: Application &amp; Data</text>
        <text x="455" y="130" class="diag-did-desc">Encryption (At-Rest &amp; In-Transit)</text>

        <rect x="440" y="155" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="455" y="177" class="diag-did-num">Layer 7: Resilience &amp; Response</text>
        <text x="455" y="195" class="diag-did-desc">Immutable Backups &amp; Incident Response</text>

        <rect x="440" y="220" width="280" height="52" rx="6" class="diag-box diag-box-banner" />
        <text x="580" y="242" class="diag-text-title" text-anchor="middle">Complementary Security Layers</text>
        <text x="580" y="260" class="diag-text-sub" text-anchor="middle">มาตรการทำงานสอดประสานพร้อมกัน</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Defense in Depth 7 Layers Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">7-LAYER DEFENSE IN DEPTH</span>
      <p class="reading-mob-banner-text">การป้องกันเชิงลึกหลายชั้นที่ทำงานสอดประสานกันรอบทรัพย์สินสำคัญ: ลดโอกาสที่มาตรการเดียวล้มเหลวแล้วเกิดความเสียหาย แต่ชั้นต่าง ๆ อาจมีจุดพึ่งพาร่วมกัน จึงไม่รับประกันว่าจะขจัดทุก Single Point of Failure</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PEOPLE &amp; POLICIES (บุคลากรและนโยบาย)</h5>
            <span class="reading-mob-tier-action">Security Awareness &amp; Phishing Training</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">สร้างวัฒนธรรมความปลอดภัย ฝึกอบรมพนักงานให้รู้เท่าทันการหลอกลวง (Phishing Defense) และปฏิบัติตามนโยบายความปลอดภัย</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PERIMETER SECURITY (ความปลอดภัยขอบเขต)</h5>
            <span class="reading-mob-tier-action">Edge Firewalls &middot; Next-Gen FW &middot; DDoS Shield</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ปราการด่านแรกคัดกรองภัยคุกคามภายนอก: Next-Gen Firewalls, Edge Routers, ป้องกัน DDoS, VPN Gateways</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L3</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">NETWORK SECURITY (ความปลอดภัยเครือข่ายภายใน)</h5>
            <span class="reading-mob-tier-action">Segmentation &middot; VLANs &middot; Micro-segmentation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">แบ่งส่วนเครือข่ายเพื่อจำกัดความเสียหาย (Blast Radius): VLANs, Micro-segmentation, Inter-VLAN ACLs, Internal IDS/IPS</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L4</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IDENTITY &amp; ACCESS (การยืนยันตัวตนและควบคุมสิทธิ์)</h5>
            <span class="reading-mob-tier-action">MFA &middot; Least Privilege &middot; Role-Based Access</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จำกัดให้เฉพาะผู้มีสิทธิ์เข้าถึง: Multi-Factor Authentication (MFA), สิทธิ์ขั้นต่ำ (PoLP), ควบคุมตามบทบาท (RBAC)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L5</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ENDPOINT SECURITY (ความปลอดภัยเครื่องลูกข่าย)</h5>
            <span class="reading-mob-tier-action">EDR &middot; Antivirus &middot; Host Patching</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ปกป้องเครื่องคอมพิวเตอร์และเซิร์ฟเวอร์: Endpoint Detection &amp; Response (EDR), Host Firewalls, อัปเดตแพตช์สม่ำเสมอ</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-purple">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L6</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">APPLICATION &amp; DATA (ความปลอดภัยแอปพลิเคชัน)</h5>
            <span class="reading-mob-tier-action">Encryption &middot; WAF &middot; Secure Coding</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลดการเปิดรับความเสี่ยงจากช่องโหว่ซอฟต์แวร์ด้วยมาตรการที่เหมาะสม และใช้การเข้ารหัสข้อมูล: Web Application Firewall (WAF), การเข้ารหัสทั้ง At-Rest และ In-Transit</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L7</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">RESILIENCE &amp; RESPONSE (ความยืดหยุ่นและการกู้คืน)</h5>
            <span class="reading-mob-tier-action">Immutable Backups &middot; Incident Response Plan</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">หลักประกันเมื่อชั้นอื่นถูกเจาะ: สำรองข้อมูลที่ไม่สามารถแก้ไขหรือลบได้ (Immutable Backups), แผนตอบสนองเหตุการณ์ (IRP) และ DRP</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">These seven layers are examples of complementary defenses, not a fixed number or chronological sequence. No layer guarantees protection. / ทั้งเจ็ดเป็นตัวอย่างมาตรการหลายชั้นที่เสริมกัน ไม่ใช่จำนวนชั้นสากลหรือลำดับเวลา และไม่รับประกันการป้องกันได้ทุกกรณี</p></div>
`,

  // 1.2.2 Case C: Quantitative Risk Calculation Pipeline
  riskCalculationFlow: `
<div class="reading-diagram-card" data-diagram="riskCalculationFlow" role="region" aria-label="Quantitative Risk Calculation Pipeline">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Mathematical Pipeline</span>
    <h4 class="reading-diagram-title">Quantitative Risk Calculation Flow: SLE &amp; ALE</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 720 180" class="reading-diagram-svg" aria-label="Asset Value times Exposure Factor equals SLE, times ARO equals ALE" role="img">
      <g>
        <rect x="20" y="30" width="130" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="85" y="55" class="diag-text-title" text-anchor="middle">Asset Value</text>
        <text x="85" y="73" class="diag-formula-var" text-anchor="middle">AV</text>
        <text x="85" y="93" class="diag-text-sub" text-anchor="middle">มูลค่าทรัพย์สิน ($)</text>
      </g>
      <text x="165" y="74" class="diag-math-symbol" text-anchor="middle">&times;</text>

      <g>
        <rect x="180" y="30" width="130" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="245" y="55" class="diag-text-title" text-anchor="middle">Exposure Factor</text>
        <text x="245" y="73" class="diag-formula-var" text-anchor="middle">EF</text>
        <text x="245" y="93" class="diag-text-sub" text-anchor="middle">% ความเสียหาย (0-100%)</text>
      </g>
      <text x="325" y="74" class="diag-math-symbol" text-anchor="middle">=</text>

      <g>
        <rect x="340" y="20" width="160" height="95" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="420" y="47" class="diag-text-title" text-anchor="middle">Single Loss Expectancy</text>
        <text x="420" y="72" class="diag-formula-var diag-formula-var-lg" text-anchor="middle">SLE</text>
        <text x="420" y="94" class="diag-text-sub" text-anchor="middle">เสียหายต่อ 1 ครั้ง ($)</text>
        <text x="420" y="108" class="diag-text-sub" text-anchor="middle">SLE = AV &times; EF</text>
      </g>
      <text x="515" y="74" class="diag-math-symbol" text-anchor="middle">&times;</text>

      <g>
        <rect x="530" y="30" width="80" height="75" rx="8" class="diag-box diag-box-banner" />
        <text x="570" y="55" class="diag-text-title" text-anchor="middle">ARO</text>
        <text x="570" y="73" class="diag-formula-var" text-anchor="middle">Rate</text>
        <text x="570" y="93" class="diag-text-sub" text-anchor="middle">ครั้ง / ปี</text>
      </g>
      <text x="625" y="74" class="diag-math-symbol" text-anchor="middle">=</text>

      <g>
        <rect x="640" y="20" width="70" height="95" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="675" y="50" class="diag-formula-var diag-formula-var-lg" text-anchor="middle">ALE</text>
        <text x="675" y="75" class="diag-text-sub" text-anchor="middle">เสียหาย</text>
        <text x="675" y="92" class="diag-text-sub" text-anchor="middle">เฉลี่ย / ปี</text>
      </g>

      <rect x="150" y="135" width="420" height="32" rx="6" class="diag-box diag-box-banner" />
      <text x="360" y="156" class="diag-text-sub" text-anchor="middle">Financial comparison: ALE ก่อน − ALE หลัง เทียบต้นทุน Control ต่อปี</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Quantitative Risk Calculation Pipeline Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">QUANTITATIVE RISK FORMULAS</span>
      <p class="reading-mob-banner-text">การคำนวณความเสียหายเชิงปริมาณ: SLE = AV &times; EF และความเสียหายรายปี: ALE = SLE &times; ARO</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">STEP 1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">AV &times; EF &rarr; SLE</h5>
            <span class="reading-mob-tier-action">Single Loss Expectancy &middot; ความเสียหายต่อ 1 ครั้ง</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สูตร:</strong> <code>SLE = AV &times; EF</code><br>&bull; <strong>AV (Asset Value):</strong> มูลค่ารวมของทรัพย์สิน (เช่น เซิร์ฟเวอร์ $100,000)<br>&bull; <strong>EF (Exposure Factor):</strong> อัตราส่วนความเสียหายจากเหตุการณ์ (เช่น เสียหาย 40% = 0.40)<br>&bull; <strong>ผลลัพธ์ SLE:</strong> $100,000 &times; 0.40 = <strong>$40,000 ต่อครั้ง</strong></p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; คูณด้วยความถี่ต่อปี (ARO) &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">STEP 2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">SLE &times; ARO &rarr; ALE</h5>
            <span class="reading-mob-tier-action">Annualized Loss Expectancy &middot; ความเสียหายเฉลี่ยต่อปี</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สูตร:</strong> <code>ALE = SLE &times; ARO</code><br>&bull; <strong>ARO (Annualized Rate of Occurrence):</strong> ความถี่ที่คาดว่าจะเกิดเหตุใน 1 ปี (เช่น เกิด 0.5 ครั้ง/ปี หรือ 2 ปีครั้ง)<br>&bull; <strong>ผลลัพธ์ ALE:</strong> $40,000 &times; 0.5 = <strong>$20,000 ต่อปี</strong></p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">&darr; กฎการตัดสินใจทางธุรกิจ (CBA) &darr;</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RULE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">COST-BENEFIT ANALYSIS (CBA)</h5>
            <span class="reading-mob-tier-action">Decision Rule &middot; ความคุ้มค่าของมาตรการควบคุม</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>การเปรียบเทียบด้านการเงินแบบง่าย:</strong> ALE Savings = ALE ก่อน − ALE หลัง เปรียบเทียบกับต้นทุน Control ต่อปี ตัวอย่าง ALE 20,000/ปี กับ Control 25,000/ปี ไม่คุ้มเมื่อพิจารณาเฉพาะการลดความเสียหายนี้ แต่กฎหมาย สัญญา ความปลอดภัยของบุคคล และภารกิจอาจกำหนดให้ต้องใช้มาตรการแม้ผลประโยชน์สุทธิทางการเงินไม่เป็นบวก</p>
      </div>
    </div>
  </div>
</div>
`,

  // 1.2.3 Risk Management 5-Step Lifecycle
  riskLifecycle: `
<div class="reading-diagram-card" data-diagram="riskLifecycle" role="region" aria-label="Risk Management 5-Stage Lifecycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Operational Cycle</span>
    <h4 class="reading-diagram-title">Risk Management: Five-Part Learning Model</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 800 200" class="reading-diagram-svg" aria-label="Cyclic process: 5-Stage Risk Management Lifecycle (Identify to Assess to Treat to Monitor to Communicate)" role="img">
      <defs>
        <marker id="diag-arrow-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diag-arrow, #64748b)" class="diag-marker-arrow" />
        </marker>
      </defs>

      <rect x="46" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="108" y="47" class="diag-step-num" text-anchor="middle">STAGE 01</text>
      <text x="108" y="67" class="diag-text-title" text-anchor="middle">Identify</text>
      <text x="108" y="82" class="diag-text-sub" text-anchor="middle">ระบุทรัพย์สิน &amp; ภัย</text>

      <path d="M 170 55 L 192 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="192" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="254" y="47" class="diag-step-num" text-anchor="middle">STAGE 02</text>
      <text x="254" y="67" class="diag-text-title" text-anchor="middle">Assess / Analyze</text>
      <text x="254" y="82" class="diag-text-sub" text-anchor="middle">ประเมินโอกาส &amp; ผล</text>

      <path d="M 316 55 L 338 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="338" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="400" y="47" class="diag-step-num" text-anchor="middle">STAGE 03</text>
      <text x="400" y="67" class="diag-text-title" text-anchor="middle">Treat / Respond</text>
      <text x="400" y="82" class="diag-text-sub" text-anchor="middle">เลือก 4 กลยุทธ์จัดการ</text>

      <path d="M 462 55 L 484 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="484" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="546" y="47" class="diag-step-num" text-anchor="middle">STAGE 04</text>
      <text x="546" y="67" class="diag-text-title" text-anchor="middle">Monitor &amp; Review</text>
      <text x="546" y="82" class="diag-text-sub" text-anchor="middle">ติดตาม &amp; ทบทวน</text>

      <path d="M 608 55 L 630 55" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <rect x="630" y="20" width="124" height="70" rx="8" class="diag-box diag-box-banner" />
      <text x="692" y="47" class="diag-step-num" text-anchor="middle">STAGE 05</text>
      <text x="692" y="67" class="diag-text-title" text-anchor="middle">Communicate &amp; Report</text>
      <text x="692" y="82" class="diag-text-sub" text-anchor="middle">สื่อสาร &amp; รายงานสถานะ</text>

      <path d="M 692 90 C 692 165, 108 165, 108 90" class="diag-arrow diag-arrow-dash" marker-end="url(#diag-arrow-head)" />
      <text x="400" y="158" class="diag-text-label" text-anchor="middle">กระบวนการต่อเนื่องตลอดวงจรชีวิต (Continuous Iterative Process)</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Risk Management 5-Stage Lifecycle Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">5-STAGE RISK LIFECYCLE</span>
      <p class="reading-mob-banner-text">แบบจำลองช่วยเรียนรู้ 5 ส่วน: กระบวนการต่อเนื่อง (Continuous Iterative Process) การสื่อสารเกิดควบคู่ได้ตลอด ไม่ใช่ขั้นตอนสุดท้ายเท่านั้น</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IDENTIFY (ระบุทรัพย์สินและภัย)</h5>
            <span class="reading-mob-tier-action">Asset Inventory &middot; Threat &amp; Vuln Discovery</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จัดทำทะเบียนทรัพย์สิน ระบุภัยคุกคาม และสำรวจช่องโหว่ทั้งหมดที่อาจเกิดขึ้นในองค์กร</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; ประเมินโอกาสและผลกระทบ &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ASSESS / ANALYZE (ประเมินและวิเคราะห์)</h5>
            <span class="reading-mob-tier-action">Qualitative &amp; Quantitative Analysis</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">วิเคราะห์ระดับความเสี่ยง: เชิงคุณภาพ (Likelihood &times; Impact Matrix) และเชิงปริมาณ (คำนวณตัวเลข SLE, ARO, ALE)</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; เลือก 4 กลยุทธ์จัดการความเสี่ยง &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">TREAT / RESPOND (จัดการความเสี่ยง)</h5>
            <span class="reading-mob-tier-action">Mitigate &middot; Transfer &middot; Avoid &middot; Accept</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เลือกแนวทางตอบสนอง: <strong>Mitigate</strong> (ติดตั้ง Control ลดความเสี่ยง), <strong>Transfer</strong> (ซื้อประกันภัย/Cloud), <strong>Avoid</strong> (ยกเลิกกิจกรรมเสี่ยง), <strong>Accept</strong> (ยอมรับความเสี่ยงที่เหลืออยู่ตามอนุมัติ)</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">&darr; ติดตามและประเมินผล &darr;</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">MONITOR &amp; REVIEW (ติดตามและทบทวน)</h5>
            <span class="reading-mob-tier-action">Continuous Monitoring &middot; Risk Register Update</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ติดตามประสิทธิผลของมาตรการควบคุม ตรวจจับภัยคุกคามเกิดใหม่ (Emerging Threats) และทบทวนทะเบียนความเสี่ยงสม่ำเสมอ</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-purple"></div>
        <span class="reading-mob-connector-pill reading-pill-purple">&darr; สื่อสารต่อผู้บริหาร &darr;</span>
        <div class="reading-mob-connector-line reading-connector-purple"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-purple">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">05</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">COMMUNICATE &amp; REPORT (สื่อสารและรายงาน)</h5>
            <span class="reading-mob-tier-action">Stakeholder Briefing &middot; Feedback Loop</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รายงานสถานะความเสี่ยงต่อคณะกรรมการและผู้มีส่วนได้ส่วนเสีย พร้อมนำผลสะท้อนกลับไปปรับปรุงขั้นตอนระบุความเสี่ยงในรอบถัดไป</p>
      </div>
    </div>
  </div>
</div>
`,

  // 1.2.4 Risk Treatment Decision Framework & 4 Responses
  riskTreatmentDecisionFlow: `
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
        <text x="122" y="238" class="diag-text-sub" font-size="10.5px" text-anchor="middle">หยุดกิจกรรมที่ก่อความเสี่ยงเป้าหมาย</text>
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
        <text x="50" y="344" class="diag-text-sub">ประเมินความเสี่ยงที่เหลือ ขออนุมัติ และกำหนดวันทบทวน</text>
        <rect x="660" y="310" width="168" height="38" rx="6" fill="#10b981" fill-opacity="0.12" stroke="#10b981" stroke-width="1" />
        <text x="744" y="327" class="diag-step-num" text-anchor="middle" fill="#059669">GOVERNANCE RULE</text>
        <text x="744" y="341" class="diag-text-sub" font-size="10.5px" font-weight="700" text-anchor="middle" fill="#047857">Residual &le; Appetite</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Risk Treatment Decision Framework Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">RISK TREATMENT DECISION FRAMEWORK</span>
      <p class="reading-mob-banner-text">วงจรการตัดสินใจรับมือความเสี่ยง 4 กลยุทธ์เป็นแบบจำลองช่วยเรียนรู้: หลีกเลี่ยง &middot; โอน &middot; ลด &middot; ยอมรับ</p>
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
        <p class="reading-mob-tier-desc">ยกเลิกโครงการ ยุติบริการ หรือตัดการเชื่อมต่อที่มีความเสี่ยงสูงเกินรับไหวและไม่มีมาตรการควบคุมที่คุ้มค่า เพื่อยุติการเผชิญความเสี่ยงจากกิจกรรมนั้น ไม่ใช่ทำให้ความเสี่ยงทั้งหมดขององค์กรเป็นศูนย์ / Stop the targeted risky activity; other risks can remain.</p>
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
        <p class="reading-mob-tier-desc">ทางเลือกหนึ่งคือ: ติดตั้ง Security Controls ทางเทคนิค บริหารจัดการ หรือกายภาพ (เช่น MFA, Patching, Firewall, Backup) เพื่อลดโอกาสเกิด (Likelihood) หรือลดผลกระทบ (Impact)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">D</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">OPTION 4: RISK ACCEPTANCE &amp; GOVERNANCE (การยอมรับ)</h5>
            <span class="reading-mob-tier-action">"Residual Risk &le; Appetite" &middot; ยอมรับอย่างมีเอกสาร</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ยอมรับความเสี่ยงที่เหลืออยู่ (Residual Risk) เมื่อประเมินแล้วว่าต่ำกว่าหรือเท่ากับ Risk Appetite ต้องได้รับการอนุมัติจากผู้มีอำนาจตามนโยบาย บันทึกใน Risk Register และทบทวนสม่ำเสมอ</p>
      </div>
    </div>
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
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 260" class="reading-diagram-svg" aria-label="Pyramid: Policy at top, Standard, Procedure, Guideline at base" role="img">
      <g>
        <polygon points="210,20 165,72 255,72" class="diag-pyramid-tier diag-pyramid-t1" />
        <text x="210" y="52" class="diag-text-title diag-text-light" text-anchor="middle">POLICY</text>
        <line x1="255" y1="46" x2="425" y2="46" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="21" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="41" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · ระดับสูงสุด</text>
        <text x="640" y="41" class="diag-doc-scope">Answers: WHAT &amp; WHY</text>
        <text x="442" y="58" class="diag-tier-desc">กำหนดทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหาร</text>
      </g>

      <g>
        <polygon points="162,76 117,128 303,128 258,76" class="diag-pyramid-tier diag-pyramid-t2" />
        <text x="210" y="108" class="diag-text-title diag-text-light" text-anchor="middle">STANDARD</text>
        <line x1="303" y1="102" x2="425" y2="102" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="77" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="97" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · ข้อกำหนดขั้นต่ำ</text>
        <text x="640" y="97" class="diag-doc-scope">Answers: EXACT SPECIFICATION</text>
        <text x="442" y="114" class="diag-tier-desc">ข้อกำหนดทางเทคนิคที่จำเพาะเจาะจงและวัดผลได้ชัดเจน</text>
      </g>

      <g>
        <polygon points="114,132 69,184 351,184 306,132" class="diag-pyramid-tier diag-pyramid-t3" />
        <text x="210" y="164" class="diag-text-title diag-text-light" text-anchor="middle">PROCEDURE</text>
        <line x1="351" y1="158" x2="425" y2="158" class="diag-axis-line" stroke-dasharray="4,4" />
        <rect x="425" y="133" width="415" height="50" rx="6" class="diag-doc-card" />
        <text x="442" y="153" class="diag-doc-tag diag-doc-tag-mandatory">MANDATORY · บังคับผู้ปฏิบัติ</text>
        <text x="640" y="153" class="diag-doc-scope">Answers: HOW (STEP-BY-STEP)</text>
        <text x="442" y="170" class="diag-tier-desc">ขั้นตอนและวิธีปฏิบัติงานทีละสเต็ปอย่างเป็นลำดับแบบ Task-oriented</text>
      </g>

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
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Security Document Hierarchy 4 Tiers Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">GOVERNANCE DOCUMENT PYRAMID</span>
      <p class="reading-mob-banner-text">ลำดับชั้นเอกสารกำกับดูแล 4 ระดับ: 3 ชั้นแรกมีผลบังคับใช้ (Mandatory) ส่วนชั้นฐานเป็นคำแนะนำ (Advisory)</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-red">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">TIER 1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">POLICY (นโยบาย)</h5>
            <span class="reading-mob-tier-action">MANDATORY &middot; Answers: WHAT &amp; WHY</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เอกสารระดับสูงสุด กำหนดทิศทาง วิสัยทัศน์ และเจตนารมณ์ของผู้บริหาร มีผลผูกพันทางกฎหมายและระเบียบวินัยต่อพนักงานทุกคน</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">TIER 2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">STANDARD (มาตรฐาน)</h5>
            <span class="reading-mob-tier-action">MANDATORY &middot; Answers: EXACT SPECIFICATION</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ข้อกำหนดทางเทคนิคขั้นต่ำที่วัดผลได้ชัดเจน เช่น บัญชีผู้ดูแลระบบต้องใช้ MFA เป็นข้อกำหนดบังคับ การยกเว้นต้องผ่านกระบวนการอนุมัติและบันทึกความเสี่ยงขององค์กร ไม่ใช่การยกเว้นโดยผู้ใช้เอง</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">TIER 3</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PROCEDURE (ระเบียบปฏิบัติ)</h5>
            <span class="reading-mob-tier-action">MANDATORY &middot; Answers: HOW (STEP-BY-STEP)</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">คู่มือขั้นตอนการทำงานทีละสเต็ป (SOP) เพื่อให้ผู้ปฏิบัติงานดำเนินการได้ผลลัพธ์มาตรฐานเดียวกันอย่างถูกต้อง (เช่น ขั้นตอนกู้คืนระบบจาก Backup)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">TIER 4</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">GUIDELINE (แนวทางปฏิบัติ)</h5>
            <span class="reading-mob-tier-action">ADVISORY &middot; Answers: RECOMMENDATION</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">คำแนะนำ ข้อเสนอแนะ หรือ Best Practices ที่ไม่บังคับตายตัว มีความยืดหยุ่นสูง เพื่อช่วยสนับสนุนการตัดสินใจในทางปฏิบัติ</p>
      </div>
    </div>
  </div>
</div>
`,

  // 1.4.2 Security Control Function Matrix (Non-Linear Taxonomy)
  controlTimeline: `
<div class="reading-diagram-card" data-diagram="controlTimeline" data-relationship="coexisting-functions" role="region" aria-label="Security Control Function Matrix">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Control Taxonomy</span>
    <h4 class="reading-diagram-title">Security Control Functions: Purpose, Timing &amp; Overlapping Roles</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 850 155" class="reading-diagram-svg" aria-label="Functional Matrix: Deterrent, Preventive, Detective, Corrective, Recovery with overlapping roles" role="img">
      <!-- Column 1: Before Incident -->
      <g>
        <rect x="15" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="99" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="145" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">REDUCE</text>
        <text x="145" y="68" class="diag-timeline-title" text-anchor="middle"><tspan data-concept="deterrent">Deterrent</tspan> &amp; <tspan data-concept="preventive">Preventive</tspan></text>
        <text x="145" y="93" class="diag-timeline-desc" text-anchor="middle">ยับยั้งใจ &amp; ลดโอกาสเกิดเหตุ</text>
        <text x="145" y="117" class="diag-timeline-example" text-anchor="middle">Warning Banners, MFA, Firewall</text>
      </g>

      <!-- Arrow 1: Before -> During -->


      <!-- Column 2: During Incident -->
      <g>
        <rect x="295" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="379" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="425" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">DETECT</text>
        <text x="425" y="68" class="diag-timeline-title" text-anchor="middle" data-concept="detective">Detective</text>
        <text x="425" y="93" class="diag-timeline-desc" text-anchor="middle">ตรวจพบได้ขณะเกิดหรือย้อนหลัง</text>
        <text x="425" y="117" class="diag-timeline-example" text-anchor="middle">IDS, Security Logs, Motion Sensor</text>
      </g>

      <!-- Arrow 2: During -> After -->


      <!-- Column 3: After Incident -->
      <g>
        <rect x="575" y="15" width="260" height="125" rx="8" class="diag-timeline-card" />
        <rect x="659" y="27" width="92" height="22" rx="4" class="diag-timeline-badge" />
        <text x="705" y="38" class="diag-timeline-badge-text" text-anchor="middle" dominant-baseline="central">RESPOND</text>
        <text x="705" y="68" class="diag-timeline-title" text-anchor="middle"><tspan data-concept="corrective">Corrective</tspan> &amp; <tspan data-concept="recovery">Recovery</tspan></text>
        <text x="705" y="93" class="diag-timeline-desc" text-anchor="middle">แก้ไข &amp; ฟื้นฟูตามบริบท</text>
        <text x="705" y="117" class="diag-timeline-example" text-anchor="middle">Patching, Malware Removal, Alternate Site</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Security Control Functions Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">REDUCE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DETERRENT &amp; PREVENTIVE</h5>
            <span class="reading-mob-tier-action">ยับยั้งและลดโอกาสเกิดเหตุ</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>Deterrent:</strong> ป้องปราม/ยับยั้งใจ (Warning Banners, ป้ายเตือน) &middot; <strong>Preventive:</strong> สกัดกั้น ป้องกันไม่ให้เกิดเหตุ (Firewall, MFA, การล็อคประตู, Least Privilege)</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">DETECT</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DETECTIVE</h5>
            <span class="reading-mob-tier-action">ตรวจจับและแจ้งเตือนตามการตั้งค่า</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>Detective:</strong> ตรวจพบกิจกรรมที่น่าสงสัย (Intrusion Detection System / IDS, Security Logs, Motion Sensor, Honeytokens)</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RESPOND</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CORRECTIVE &amp; RECOVERY</h5>
            <span class="reading-mob-tier-action">หลังเกิดเหตุ &middot; แก้ไขและฟื้นฟู</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>Corrective:</strong> แก้ไขความเสียหาย (Patching, Malware Removal) &middot; <strong>Recovery:</strong> กู้คืนสู่สภาวะปกติ (ชุดสำรองข้อมูล Backup, แผน DRP, ศูนย์สำรอง Alternate Site)</p>
      </div>
    </div>
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
<p class="reading-semantic-note">These are coexisting functions, not a mandatory sequence; activities may overlap. / เป็นหน้าที่ที่ใช้ร่วมกันและซ้อนทับได้ ไม่ใช่ลำดับก่อน–ระหว่าง–หลังที่ทุกมาตรการต้องทำตาม</p>
</div>
`,

  // 1.5.2 Due Care vs. Due Diligence Operational Loop
  dueCareDiligence: `
<div class="reading-diagram-card" data-diagram="dueCareDiligence" role="region" aria-label="Due Care versus Due Diligence Operational Cycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Operational Cycle</span>
    <h4 class="reading-diagram-title">Due Diligence (CHECK) &amp; Due Care (DO) Workflow</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 680 160" class="reading-diagram-svg" aria-label="Due diligence checks, Due care acts, Due diligence verifies" role="img">
      <defs>
        <marker id="diag-arrow-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diag-arrow, #64748b)" class="diag-marker-arrow" />
        </marker>
      </defs>

      <g>
        <rect x="30" y="30" width="180" height="80" rx="8" class="diag-box diag-box-banner" />
        <text x="120" y="58" class="diag-step-num" text-anchor="middle">DUE DILIGENCE (CHECK)</text>
        <text x="120" y="78" class="diag-text-title" text-anchor="middle">สืบค้น &amp; ตรวจสอบ</text>
        <text x="120" y="96" class="diag-text-sub" text-anchor="middle">สแกนพบช่องโหว่ความเสี่ยง</text>
      </g>
      <path d="M 210 70 L 250 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <g>
        <rect x="250" y="30" width="180" height="80" rx="8" class="diag-box diag-box-blue diag-box-highlight" />
        <text x="340" y="58" class="diag-step-num" text-anchor="middle">DUE CARE (DO)</text>
        <text x="340" y="78" class="diag-text-title" text-anchor="middle">ลงมือปฏิบัติแก้ไข</text>
        <text x="340" y="96" class="diag-text-sub" text-anchor="middle">ติดตั้ง Security Patch ทันที</text>
      </g>
      <path d="M 430 70 L 470 70" class="diag-arrow" marker-end="url(#diag-arrow-head)" />

      <g>
        <rect x="470" y="30" width="180" height="80" rx="8" class="diag-box diag-box-banner" />
        <text x="560" y="58" class="diag-step-num" text-anchor="middle">DUE DILIGENCE (VERIFY)</text>
        <text x="560" y="78" class="diag-text-title" text-anchor="middle">ตรวจซ้ำยืนยันผล</text>
        <text x="560" y="96" class="diag-text-sub" text-anchor="middle">สแกนยืนยันว่าช่องโหว่อุดแล้ว</text>
      </g>

      <path d="M 560 110 C 560 145, 120 145, 120 110" class="diag-arrow diag-arrow-dash" marker-end="url(#diag-arrow-head)" />
      <text x="340" y="145" class="diag-text-label" text-anchor="middle">การประเมินและการลงมือปฏิบัติอย่างต่อเนื่องและสมเหตุสมผล (Prudent Person)</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Due Care versus Due Diligence Operational Cycle Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">CONTINUOUS OPERATIONAL WORKFLOW</span>
      <p class="reading-mob-banner-text">วงจรปฏิบัติหน้าที่ตามมาตรฐานวิญญูชน (Prudent Person Rule): Due Diligence (CHECK ตรวจสอบ) &harr; Due Care (DO ลงมือทำ)</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DUE DILIGENCE (CHECK)</h5>
            <span class="reading-mob-tier-action">"Knowing what is right" &middot; สืบค้นและตรวจสอบความจริง</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">การตรวจสอบอย่างถี่ถ้วนเพื่อค้นหาความจริง เช่น ประเมินความเสี่ยง ตรวจสอบผู้ค้าภายนอก (Vendor Assessment) สแกนหาช่องโหว่ความปลอดภัย (Vulnerability Scan)</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">&darr; นำผลสืบค้นไปลงมือแก้ไข &darr;</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DUE CARE (DO)</h5>
            <span class="reading-mob-tier-action">"Doing what is right" &middot; ปฏิบัติการป้องกันตามมาตรฐานวิญญูชน</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลงมือปฏิบัติแก้ไขและควบคุมความเสี่ยงอย่างสมเหตุสมผล เช่น ติดตั้ง Security Patch อุดช่องโหว่ทันที, บังคับใช้ MFA, เข้ารหัสข้อมูลสำคัญ</p>
      </div>

      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">&darr; ตรวจสอบซ้ำยืนยันผล &darr;</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>

      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DUE DILIGENCE (VERIFY)</h5>
            <span class="reading-mob-tier-action">"Validating the outcome" &middot; ตรวจซ้ำยืนยันประสิทธิผล</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ทำการสแกนซ้ำ (Rescan) หรือตรวจสอบ Audit Log เพื่อพิสูจน์ว่าช่องโหว่ได้รับการแก้ไขจริง และไม่มีผลข้างเคียงต่อระบบ</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-purple">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RULE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PRUDENT PERSON RULE (หลักวิญญูชน)</h5>
            <span class="reading-mob-tier-action">Legal Standard &amp; Continuous Cycle</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">การละเลย Due Care หรือ Due Diligence อาจก่อให้เกิดความเสียหายและผลทางวินัย วิชาชีพ หรือกฎหมาย โดยความรับผิดและข้อคุ้มครองที่ใช้ได้ขึ้นอยู่กับข้อเท็จจริง บทบาท และกฎหมายที่เกี่ยวข้อง ไม่อาจสรุปจากคำว่า Gross Negligence (ประมาทเลินเล่ออย่างร้ายแรง) เพียงอย่างเดียวว่าบุคคลนั้นหมดความคุ้มครองทางกฎหมายทุกประเภท</p>
      </div>
    </div>
  </div>
</div>
`,

  // 1.5.3 ISC2 Code of Ethics Canons (Clean Numbered Precedence Hierarchy: 01-04)
  ethicsCanons: `
<div class="reading-diagram-card" data-diagram="ethicsCanons" role="region" aria-label="ISC2 Code of Ethics four mandatory canons and professional judgment">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Ethics Canons</span>
    <h4 class="reading-diagram-title">The Four Canons of the ISC2 Code of Ethics</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 740 250" class="reading-diagram-svg" aria-label="Four mandatory canons: Society, Honor, Principals, Profession; apply professional ethical judgment" role="img">
      <rect x="25" y="12" width="690" height="28" rx="5" class="diag-box diag-box-banner" />
      <text x="370" y="30" class="diag-text-sub" text-anchor="middle">Four mandatory canons; apply professional ethical judgment to the situation.</text>

      <g>
        <rect x="25" y="48" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="74" class="diag-step-num">01</text>
        <text x="85" y="74" class="diag-text-title">Society</text>
        <text x="145" y="74" class="diag-text-sub">Protect society, the common good, public trust, and infrastructure</text>
        <text x="695" y="74" class="diag-step-num" text-anchor="end">CANON 1</text>
      </g>

      <g>
        <rect x="25" y="97" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="123" class="diag-step-num">02</text>
        <text x="85" y="123" class="diag-text-title">Honor</text>
        <text x="135" y="123" class="diag-text-sub">Act honorably, honestly, justly, responsibly, and legally</text>
        <text x="695" y="123" class="diag-step-num" text-anchor="end">CANON 2</text>
      </g>

      <g>
        <rect x="25" y="146" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="172" class="diag-step-num">03</text>
        <text x="85" y="172" class="diag-text-title">Principals</text>
        <text x="160" y="172" class="diag-text-sub">Provide diligent and competent service to principals (Employers / Clients)</text>
        <text x="695" y="172" class="diag-step-num" text-anchor="end">CANON 3</text>
      </g>

      <g>
        <rect x="25" y="195" width="690" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="221" class="diag-step-num">04</text>
        <text x="85" y="221" class="diag-text-title">Profession</text>
        <text x="170" y="221" class="diag-text-sub">Advance and protect the profession</text>
        <text x="695" y="221" class="diag-step-num" text-anchor="end">CANON 4</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="ISC2 Code of Ethics four mandatory canons and professional judgment Mobile">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">THE FOUR CANONS</span>
      <p class="reading-mob-banner-text">จรรยาบรรณ ISC2 ทั้งสี่ข้อเป็นหน้าที่ที่ต้องยึดถือร่วมกัน พิจารณาข้อเท็จจริง บริบท และดุลยพินิจทางวิชาชีพ หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันกฎตัดสินความขัดแย้งแบบตายตัว</p>
    </div>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-red">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CANON 1: SOCIETY &amp; INFRASTRUCTURE</h5>
            <span class="reading-mob-tier-action">CANON 1 &middot; ปกป้องสังคมและสาธารณชน</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><em>"Protect society, the common good, necessary public trust, and infrastructure."</em> — ปกป้องสังคม ประโยชน์ส่วนรวม ความไว้วางใจของสาธารณะ และโครงสร้างพื้นฐานสำคัญของชาติ (พิจารณาผลกระทบต่อสังคมควบคู่กับหน้าที่อื่นตามบริบท)</p>
      </div>



      <div class="reading-mob-tier-card reading-tier-amber">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CANON 2: HONOR &amp; LEGALITY</h5>
            <span class="reading-mob-tier-action">CANON 2 &middot; ซื่อสัตย์ ยุติธรรม และเคารพกฎหมาย</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><em>"Act honorably, honestly, justly, responsibly, and legally."</em> — ประพฤติตนอย่างสมเกียรติ ซื่อสัตย์ ยุติธรรม มีความรับผิดชอบ และเคารพกฎหมายอย่างเคร่งครัด ไม่ละเมิดกฎหมายเพื่อประโยชน์ส่วนตนหรือผู้อื่น</p>
      </div>



      <div class="reading-mob-tier-card reading-tier-blue">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CANON 3: DILIGENT SERVICE TO PRINCIPALS</h5>
            <span class="reading-mob-tier-action">CANON 3 &middot; ปฏิบัติงานต่อนายจ้าง/ลูกค้าอย่างเชี่ยวชาญ</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><em>"Provide diligent and competent service to principals."</em> — ให้บริการด้วยความขยันขันแข็งและเปี่ยมด้วยสมรรถนะแก่นายจ้างหรือลูกค้า โดยไม่ละเมิดข้อ 1 หรือข้อ 2</p>
      </div>



      <div class="reading-mob-tier-card reading-tier-green">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CANON 4: ADVANCE THE PROFESSION</h5>
            <span class="reading-mob-tier-action">CANON 4 &middot; ส่งเสริมและปกป้องวิชาชีพ</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><em>"Advance and protect the profession."</em> — ส่งเสริมและปกป้องชื่อเสียงของวิชาชีพความมั่นคงปลอดภัยสารสนเทศ แบ่งปันความรู้ ยกระดับมาตรฐาน และไม่กระทำการใดที่ทำให้วิชาชีพเสื่อมเสีย</p>
      </div>
    </div>
  </div>
</div>

`,

  // 2.1.1 GRC Foundations & 3 Pillars
  grcAlignment: `
<div class="reading-diagram-card" data-diagram="grcAlignment" data-relationship="coordinated-grc" role="region" aria-label="GRC Framework Alignment: Governance, Risk, and Compliance">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Governance Model</span>
    <h4 class="reading-diagram-title">GRC Alignment: Governance, Risk Management &amp; Compliance</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 780 180" class="reading-diagram-svg" aria-label="GRC 3-Pillar alignment supporting Business Objectives" role="img">
      <defs>
        <marker id="diag-arrow-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--diag-arrow, #64748b)" class="diag-marker-arrow" />
        </marker>
      </defs>

      <rect x="30" y="12" width="720" height="32" rx="6" class="diag-box diag-box-banner" />
      <text x="390" y="32" class="diag-text-sub" text-anchor="middle">Strategic Objective: Support Business Goals &middot; Protect Assets &middot; Increase Organizational Resilience</text>
      <g>
        <rect x="30" y="58" width="220" height="106" rx="8" class="diag-box diag-box-blue" />
        <text x="140" y="85" class="diag-text-title" text-anchor="middle">GOVERNANCE</text>
        <text x="140" y="105" class="diag-text-sub" text-anchor="middle">Direction &amp; Oversight</text>
        <line x1="50" y1="117" x2="230" y2="117" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="140" y="134" class="diag-text-label" text-anchor="middle">ทิศทาง นโยบาย และบทบาทหน้าที่</text>
        <text x="140" y="150" class="diag-text-label" text-anchor="middle">Accountability ชัดเจน</text>
      </g>
      <path d="M 250 111 L 280 111" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <g>
        <rect x="280" y="58" width="220" height="106" rx="8" class="diag-box diag-box-blue" />
        <text x="390" y="85" class="diag-text-title" text-anchor="middle">RISK MANAGEMENT</text>
        <text x="390" y="105" class="diag-text-sub" text-anchor="middle">Identify &amp; Manage</text>
        <line x1="300" y1="117" x2="480" y2="117" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="390" y="134" class="diag-text-label" text-anchor="middle">ระบุและประเมินความเสี่ยง</text>
        <text x="390" y="150" class="diag-text-label" text-anchor="middle">จัดลำดับและควบคุมความเสี่ยง</text>
      </g>
      <path d="M 500 111 L 530 111" class="diag-arrow" marker-end="url(#diag-arrow-head)" />
      <g>
        <rect x="530" y="58" width="220" height="106" rx="8" class="diag-box diag-box-blue" />
        <text x="640" y="85" class="diag-text-title" text-anchor="middle">COMPLIANCE</text>
        <text x="640" y="105" class="diag-text-sub" text-anchor="middle">Adhere &amp; Fulfill</text>
        <line x1="550" y1="117" x2="730" y2="117" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="640" y="134" class="diag-text-label" text-anchor="middle">ทำตามกฎหมายและข้อบังคับ</text>
        <text x="640" y="150" class="diag-text-label" text-anchor="middle">มาตรฐานสากลและนโยบาย</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-grc" aria-label="GRC Alignment Framework">
    <div class="reading-mob-banner">
      <span class="reading-mob-banner-tag">STRATEGIC OBJECTIVE</span>
      <p class="reading-mob-banner-text">Support Business Goals &middot; Protect Assets &middot; Increase Organizational Resilience</p>
    </div>
    <div class="reading-mob-grc-stack">
      <div class="reading-mob-card reading-mob-card-grc">
        <div class="reading-mob-card-head">

          <div class="reading-mob-head-info">
            <h5 class="reading-mob-card-title">GOVERNANCE</h5>
            <span class="reading-mob-card-subtitle">Direction &amp; Oversight</span>
          </div>
        </div>
        <div class="reading-mob-card-body">
          <p class="reading-mob-card-desc">ทิศทาง นโยบาย และบทบาทหน้าที่</p>
          <div class="reading-mob-card-pill">Accountability ชัดเจน</div>
        </div>
      </div>

      <div class="reading-mob-card reading-mob-card-grc">
        <div class="reading-mob-card-head">

          <div class="reading-mob-head-info">
            <h5 class="reading-mob-card-title">RISK MANAGEMENT</h5>
            <span class="reading-mob-card-subtitle">Identify &amp; Manage</span>
          </div>
        </div>
        <div class="reading-mob-card-body">
          <p class="reading-mob-card-desc">ระบุและประเมินความเสี่ยง</p>
          <div class="reading-mob-card-pill">จัดลำดับและควบคุมความเสี่ยง</div>
        </div>
      </div>

      <div class="reading-mob-card reading-mob-card-grc">
        <div class="reading-mob-card-head">

          <div class="reading-mob-head-info">
            <h5 class="reading-mob-card-title">COMPLIANCE</h5>
            <span class="reading-mob-card-subtitle">Adhere &amp; Fulfill</span>
          </div>
        </div>
        <div class="reading-mob-card-body">
          <p class="reading-mob-card-desc">ทำตามกฎหมายและข้อบังคับ</p>
          <div class="reading-mob-card-pill">มาตรฐานสากลและนโยบาย</div>
        </div>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Governance, Risk Management and Compliance are coordinated functions supporting shared objectives, not mandatory stages. / Governance, Risk Management และ Compliance ทำงานประสานกันเพื่อเป้าหมายร่วม ไม่ใช่ขั้นตอนที่ต้องทำเรียงตามกัน</p></div>
`,

  // 2.2.5 BC vs DR Scope Hierarchy
  bcVsDrScope: `
<div class="reading-diagram-card" data-diagram="bcVsDrScope" data-relationship="supporting-scopes" role="region" aria-label="Coordinated business continuity and IT recovery scopes">
 <div class="reading-diagram-header"><span class="reading-diagram-tag">Coordinated scopes</span><h4 class="reading-diagram-title">BC and DR — different focus, coordinated plans</h4></div>
 <div class="reading-diagram-svg-wrap reading-diag-desktop"><svg viewBox="0 0 840 270" class="reading-diagram-svg" role="img" aria-label="Business continuity and disaster recovery support one another; not universal subset notation">
 <rect x="15" y="15" width="395" height="230" rx="8" class="diag-box diag-box-blue"/>
 <text x="35" y="48" class="diag-text-title">Business Continuity (BC)</text>
 <text x="35" y="77" class="diag-text-sub">รักษากิจกรรมธุรกิจที่สำคัญระหว่างเหตุขัดข้อง</text>
 <text x="35" y="108" class="diag-text-label">People · Processes · Facilities</text>
 <text x="35" y="132" class="diag-text-label">Suppliers · Technology</text>
 <text x="35" y="173" class="diag-text-sub">ตัวอย่าง: ย้ายสถานที่ทำงาน / วิธีทำงานสำรอง</text>
 <text x="35" y="201" class="diag-text-sub">เป้าหมาย: รักษาบริการธุรกิจตามลำดับความสำคัญ</text>
 <rect x="430" y="15" width="395" height="230" rx="8" class="diag-box diag-box-banner"/>
 <text x="450" y="48" class="diag-text-title">Disaster Recovery (DR)</text>
 <text x="450" y="77" class="diag-text-sub">กู้คืนระบบ IT และข้อมูลที่ธุรกิจต้องใช้</text>
 <text x="450" y="108" class="diag-text-label">Data · Virtual Machines · Network Recovery</text>
 <text x="450" y="132" class="diag-text-label">Hot Site · Warm Site · Cold Site</text>
 <text x="450" y="173" class="diag-text-sub">ตัวอย่าง: กู้ฐานข้อมูล / สลับศูนย์สำรอง</text>
 <text x="450" y="201" class="diag-text-sub">เป้าหมาย: คืนความสามารถ IT ตามเป้าหมายที่ทดสอบ</text>
 </svg></div>
 <div class="reading-diag-mobile reading-mobile-stack"><div class="reading-mob-tier-card"><h5>Business Continuity (BC)</h5><p>รักษากิจกรรมธุรกิจสำคัญระหว่างเหตุขัดข้อง ครอบคลุม People, Processes, Facilities, Suppliers และ Technology เช่น ย้ายสถานที่ทำงานหรือใช้วิธีทำงานสำรอง / Keep priority business activities operating using coordinated people, process, facility, supplier and technology arrangements.</p></div><div class="reading-mob-tier-card"><h5>Disaster Recovery (DR)</h5><p>กู้คืน IT และข้อมูล เช่น ฐานข้อมูล, Virtual Machines, Network Recovery และ Hot Site / Warm Site / Cold Site โดยทดสอบเทียบเป้าหมาย / Restore IT capabilities and data against tested recovery objectives.</p></div></div>
 <p class="reading-semantic-note">DR supports business continuity. Coordinate technical recovery with business priorities; this is a scope comparison, not a universal set equation. / ประสานการกู้คืน IT กับความต้องการธุรกิจ ไม่ใช้สัญลักษณ์เซตแทนความสัมพันธ์ทุกองค์กร</p>
</div>
`,

  // 2.2.6 RTO vs RPO Timeline
  rtoRpoTimeline: `
<div class="reading-diagram-card" data-diagram="rtoRpoTimeline" role="region" aria-label="Timeline comparison: RTO vs RPO at 17:00 failure">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Recovery Metrics</span>
    <h4 class="reading-diagram-title">Recovery Time Objective (RTO) vs. Recovery Point Objective (RPO)</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 210" class="reading-diagram-svg" aria-label="Timeline showing RPO backward from failure and RTO forward from failure" role="img">
      <line x1="40" y1="105" x2="800" y2="105" stroke="var(--diag-connector, #64748b)" stroke-width="2" />
      <rect x="140" y="25" width="260" height="58" rx="6" class="diag-box diag-box-banner" />
      <text x="270" y="47" class="diag-text-title" text-anchor="middle">RPO (Recovery Point Objective)</text>
      <text x="270" y="67" class="diag-text-sub" text-anchor="middle">← ยอมรับข้อมูลสูญเสียย้อนหลังสูงสุด: 30 นาที</text>
      <line x1="140" y1="105" x2="400" y2="105" stroke="var(--blue)" stroke-width="4" />
      <g>
        <circle cx="420" cy="105" r="9" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
        <rect x="330" y="130" width="180" height="60" rx="6" class="diag-box diag-box-banner" stroke="#ef4444" />
        <text x="420" y="152" class="diag-text-title" text-anchor="middle" fill="#ef4444">DISASTER (17:00)</text>
        <text x="420" y="172" class="diag-text-sub" text-anchor="middle">ระบบล่ม / เกิดภัยพิบัติ</text>
      </g>
      <g>
        <circle cx="140" cy="105" r="7" class="diag-box-blue" />
        <text x="140" y="145" class="diag-text-title" text-anchor="middle">16:30</text>
        <text x="140" y="165" class="diag-text-label" text-anchor="middle">จุดสำรองข้อมูลล่าสุด</text>
        <text x="140" y="180" class="diag-text-label" text-anchor="middle">(Last Valid Backup)</text>
      </g>
      <rect x="440" y="25" width="260" height="58" rx="6" class="diag-box diag-box-banner" />
      <text x="570" y="47" class="diag-text-title" text-anchor="middle">RTO (Recovery Time Objective)</text>
      <text x="570" y="67" class="diag-text-sub" text-anchor="middle">ตัวอย่างเป้าหมายกู้ระบบ: 1 ชม. (เผื่อเวลาก่อน MTD)</text>
      <line x1="440" y1="105" x2="700" y2="105" stroke="#10b981" stroke-width="4" />
      <g>
        <circle cx="700" cy="105" r="7" fill="#10b981" />
        <text x="700" y="145" class="diag-text-title" text-anchor="middle">18:00</text>
        <text x="700" y="165" class="diag-text-label" text-anchor="middle">ระบบต้องกู้เสร็จสิ้น</text>
        <text x="700" y="180" class="diag-text-label" text-anchor="middle">(Service Operational)</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-timeline" aria-label="Timeline comparison: RTO vs RPO at 17:00 failure">
    <div class="reading-mob-timeline-metrics">
      <div class="reading-mob-metric-box reading-metric-rpo">
        <span class="reading-mob-metric-tag">RPO (Data Loss Window)</span>
        <div class="reading-mob-metric-val">30 นาที (ย้อนหลัง)</div>
        <p class="reading-mob-metric-detail">ปริมาณข้อมูลที่ยอมให้สูญเสียได้นับย้อนหลังจากเวลาเกิดเหตุ (17:00 ← 16:30)</p>
      </div>
      <div class="reading-mob-metric-box reading-metric-rto">
        <span class="reading-mob-metric-tag">RTO (Restoration Target)</span>
        <div class="reading-mob-metric-val">1 ชั่วโมง (เดินหน้า)</div>
        <p class="reading-mob-metric-detail">เป้าหมายกู้คืนระบบนับเดินหน้าจากเวลาเกิดเหตุ (17:00 → 18:00) ต้องเหลือเวลาตรวจสอบและทำรายการค้างให้ธุรกิจกลับมาทำงานภายใน MTD</p>
      </div>
    </div>
    <div class="reading-mob-timeline-stepper">
      <div class="reading-mob-step-card reading-step-backup">
        <div class="reading-mob-time-col">
          <span class="reading-mob-time-tag">16:30</span>
          <span class="reading-mob-time-dot reading-dot-blue"></span>
        </div>
        <div class="reading-mob-time-body">
          <div class="reading-mob-step-badge reading-badge-blue">POINT OF RECOVERY</div>
          <h5 class="reading-mob-step-title">Last Valid Backup</h5>
          <p class="reading-mob-step-desc">จุดสำรองข้อมูลล่าสุดที่สมบูรณ์</p>
          <div class="reading-mob-step-metric-hint">← สิ้นสุดกรอบ RPO 30 นาที</div>
        </div>
      </div>
      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-blue"></div>
        <span class="reading-mob-connector-pill reading-pill-blue">↑ RPO ย้อนหลัง: รับข้อมูลสูญเสียสูงสุด 30 นาที ↑</span>
        <div class="reading-mob-connector-line reading-connector-blue"></div>
      </div>
      <div class="reading-mob-step-card reading-step-disaster">
        <div class="reading-mob-time-col">
          <span class="reading-mob-time-tag reading-tag-red">17:00</span>
          <span class="reading-mob-time-dot reading-dot-red"></span>
        </div>
        <div class="reading-mob-time-body">
          <div class="reading-mob-step-badge reading-badge-red">INCIDENT MOMENT</div>
          <h5 class="reading-mob-step-title reading-title-red">DISASTER (ระบบล่ม / เกิดภัยพิบัติ)</h5>
          <p class="reading-mob-step-desc">จุดเกิดเหตุขัดข้อง — เริ่มต้นนับเวลาหยุดทำงาน (Downtime)</p>
        </div>
      </div>
      <div class="reading-mob-step-connector">
        <div class="reading-mob-connector-line reading-connector-green"></div>
        <span class="reading-mob-connector-pill reading-pill-green">↓ RTO เดินหน้า: เป้าหมายกู้ระบบภายใน 1 ชม. ↓</span>
        <div class="reading-mob-connector-line reading-connector-green"></div>
      </div>
      <div class="reading-mob-step-card reading-step-restored">
        <div class="reading-mob-time-col">
          <span class="reading-mob-time-tag reading-tag-green">18:00</span>
          <span class="reading-mob-time-dot reading-dot-green"></span>
        </div>
        <div class="reading-mob-time-body">
          <div class="reading-mob-step-badge reading-badge-green">TARGET RESTORATION</div>
          <h5 class="reading-mob-step-title reading-title-green">Service Operational (ระบบกู้เสร็จสิ้น)</h5>
          <p class="reading-mob-step-desc">ระบบไอทีและข้อมูลต้องกลับมาเปิดบริการได้ตามปกติ</p>
          <div class="reading-mob-step-metric-hint reading-hint-green">→ สิ้นสุดกรอบ RTO 1 ชั่วโมง</div>
        </div>
      </div>
    </div>
  </div>
</div>
`,

  // 2.4.8 Cybersecurity Effectiveness & Measurement Hierarchy
  effectivenessHierarchy: `
<div class="reading-diagram-card reading-measurement-system" data-diagram="effectivenessHierarchy" role="region" aria-label="Six measurement concepts grouped by purpose; a local study aid">
<div class="reading-diagram-header"><span class="reading-diagram-tag">Local study aid</span><h4 class="reading-diagram-title">Measures and communication — grouped by purpose</h4></div>
<div class="reading-diag-desktop reading-diagram-svg-wrap"><svg viewBox="0 0 840 360" class="reading-diagram-svg" role="img" aria-label="Metric KPI KRI are measures; dashboard scorecard report communicate measures; no mandatory sequence"><text x="35" y="30" class="diag-text-title">Measures</text><text x="445" y="30" class="diag-text-title">Communication</text><g data-concept="metric" data-group="measures"><rect x="20" y="52" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="36" y="77" class="diag-text-title">Metric</text><text x="36" y="101" class="diag-text-sub">ค่าที่กำหนดและวัดได้</text><text x="36" y="122" class="diag-text-sub">Defined measurable value</text></g><g data-concept="kpi" data-group="measures"><rect x="20" y="150" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="36" y="175" class="diag-text-title">KPI</text><text x="36" y="199" class="diag-text-sub">ติดตามผลงานเทียบเป้าหมาย</text><text x="36" y="220" class="diag-text-sub">Performance against objectives</text></g><g data-concept="kri" data-group="measures"><rect x="20" y="248" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="36" y="273" class="diag-text-title">KRI</text><text x="36" y="297" class="diag-text-sub">ติดตามสัญญาณความเสี่ยง</text><text x="36" y="318" class="diag-text-sub">Risk trend / warning measure</text></g><g data-concept="dashboard" data-group="communication"><rect x="430" y="52" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="446" y="77" class="diag-text-title">Dashboard</text><text x="446" y="101" class="diag-text-sub">แสดงภาพรวมตามรอบอัปเดต</text><text x="446" y="122" class="diag-text-sub">View with a defined refresh cadence</text></g><g data-concept="scorecard" data-group="communication"><rect x="430" y="150" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="446" y="175" class="diag-text-title">Scorecard</text><text x="446" y="199" class="diag-text-sub">เทียบผลจริงกับเป้าหมาย</text><text x="446" y="220" class="diag-text-sub">Actual versus target</text></g><g data-concept="report" data-group="communication"><rect x="430" y="248" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="446" y="273" class="diag-text-title">Report</text><text x="446" y="297" class="diag-text-sub">อธิบายผลและข้อเสนอแนะ</text><text x="446" y="318" class="diag-text-sub">Findings and recommended actions</text></g></svg></div><div class="reading-diag-mobile reading-mobile-stack"><div class="reading-mob-tier-card" data-concept="metric" data-group="measures"><h5>Metric</h5><p>ค่าที่กำหนดและวัดได้ / Defined measurable value</p></div><div class="reading-mob-tier-card" data-concept="kpi" data-group="measures"><h5>KPI</h5><p>ติดตามผลงานเทียบเป้าหมาย / Performance against objectives</p></div><div class="reading-mob-tier-card" data-concept="kri" data-group="measures"><h5>KRI</h5><p>ติดตามสัญญาณความเสี่ยง / Risk trend / warning measure</p></div><div class="reading-mob-tier-card" data-concept="dashboard" data-group="communication"><h5>Dashboard</h5><p>แสดงภาพรวมตามรอบอัปเดต / View with a defined refresh cadence</p></div><div class="reading-mob-tier-card" data-concept="scorecard" data-group="communication"><h5>Scorecard</h5><p>เทียบผลจริงกับเป้าหมาย / Actual versus target</p></div><div class="reading-mob-tier-card" data-concept="report" data-group="communication"><h5>Report</h5><p>อธิบายผลและข้อเสนอแนะ / Findings and recommended actions</p></div></div><p class="reading-semantic-note">A local study aid, not a fixed hierarchy or mandatory sequence. Views can combine multiple measures; rows do not imply one-to-one dependencies. Good measures are Relevant (ตรงประเด็น), Measurable (วัดได้จริง) and Consistent (วัดซ้ำได้ผลสม่ำเสมอ). / แบ่งตามหน้าที่ ไม่ใช่ลำดับขั้นสากล รูปแบบนำเสนอหนึ่งอาจรวมหลายตัวชี้วัดได้</p></div>
`,

  // 3.1.1 IAM Lifecycle (Joiner -> Mover -> Leaver)
  iamLifecycle: `
<div class="reading-diagram-card" data-diagram="iamLifecycle" data-relationship="illustrative-lifecycle" role="region" aria-label="Identity and Access Management Lifecycle: Joiner, Mover, Leaver">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Identity Governance</span>
    <h4 class="reading-diagram-title">The JML Lifecycle: Joiner, Mover, Leaver Architecture</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 220" class="reading-diagram-svg" aria-label="JML Lifecycle showing Joiner provisioning, Mover access re-evaluation, and Leaver deprovisioning with continuous access review" role="img">
      <g data-stage="joiner">
        <rect x="20" y="20" width="245" height="150" rx="8" class="diag-box diag-box-blue" />
        <rect x="35" y="32" width="90" height="20" rx="4" fill="#1d4ed8" />
        <text x="80" y="42" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">ENTRY · JOINER</text>
        <text x="35" y="70" class="diag-text-title" font-size="15px">Provisioning</text>
        <text x="35" y="88" class="diag-text-sub" font-size="12px">การจัดสรรสิทธิ์พนักงานใหม่</text>
        <line x1="35" y1="100" x2="250" y2="100" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="35" y="118" class="diag-text-sub" font-size="11.5px">&bull; Define Roles &amp; Responsibilities</text>
        <text x="35" y="136" class="diag-text-sub" font-size="11.5px">&bull; Assign Unique Digital ID</text>
        <text x="35" y="154" class="diag-text-sub" font-size="11.5px">&bull; Initial Credentials &amp; Permissions</text>
      </g>


      <g data-stage="mover">
        <rect x="298" y="20" width="245" height="150" rx="8" class="diag-box diag-box-banner" />
        <rect x="313" y="32" width="85" height="20" rx="4" fill="#f59e0b" />
        <text x="355.5" y="42" fill="#0f172a" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">MOVER</text>
        <text x="313" y="70" class="diag-text-title" font-size="15px">Re-Evaluation</text>
        <text x="313" y="88" class="diag-text-sub" font-size="12px">ย้ายฝ่าย / เปลี่ยนตำแหน่ง</text>
        <line x1="313" y1="100" x2="528" y2="100" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="313" y="118" class="diag-text-sub" font-size="11.5px">&bull; Grant New Role Permissions</text>
        <text x="313" y="136" class="diag-text-sub" font-size="11.5px">&bull; Revoke Obsolete Permissions</text>
        <text x="313" y="154" class="diag-text-sub" font-size="11.5px">&bull; Prevent Privilege Accumulation</text>
      </g>


      <g data-stage="leaver">
        <rect x="576" y="20" width="245" height="150" rx="8" class="diag-box diag-box-blue" />
        <rect x="591" y="32" width="90" height="20" rx="4" fill="#ef4444" />
        <text x="636" y="42" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">EXIT · LEAVER</text>
        <text x="591" y="70" class="diag-text-title" font-size="15px">Deprovisioning</text>
        <text x="591" y="88" class="diag-text-sub" font-size="12px">พ้นสภาพ / ลาออก / เลิกจ้าง</text>
        <line x1="591" y1="100" x2="806" y2="100" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="591" y="118" class="diag-text-sub" font-size="11.5px">&bull; Disable Account Promptly</text>
        <text x="591" y="136" class="diag-text-sub" font-size="11.5px">&bull; Revoke All Application Access</text>
        <text x="591" y="154" class="diag-text-sub" font-size="11.5px">&bull; Retain Logs &amp; Audit Trail</text>
      </g>

      <g>
        <rect x="20" y="185" width="801" height="26" rx="4" fill="var(--panel, #1e293b)" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="420" y="198" fill="var(--text-muted, #94a3b8)" font-size="11.5px" font-weight="600" text-anchor="middle" dominant-baseline="central">CONTINUOUS GOVERNANCE: Periodic Access Reviews audit and verify permissions across all 3 stages</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="JML Lifecycle Stages">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ENTRY</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">JOINER (เข้าใหม่)</h5>
            <span class="reading-mob-tier-action">Provisioning &amp; Role Definition</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">กำหนดบทบาทและหน้าที่ให้ชัดเจนก่อนให้สิทธิ์ (Define Roles first) สร้างบัญชี กำหนด Unique ID และจัดสรรสิทธิ์เริ่มต้น</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">CHANGE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name" data-optional="true" data-repeatable="true">MOVER (optional / repeatable)</h5>
            <span class="reading-mob-tier-action">Access Re-Evaluation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ทบทวนหน้าที่ใหม่ ถอนสิทธิ์ที่เลิกใช้หรือขัดนโยบาย และคงสิทธิ์ที่ยังจำเป็นตามอำนาจอนุมัติ / Revoke obsolete or conflicting rights and retain justified access under the approved policy.</p>
      </div>
      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">EXIT</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">LEAVER (พ้นสภาพ)</h5>
            <span class="reading-mob-tier-action">Deprovisioning &amp; Retention</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ถอนการเข้าถึงตามเวลาที่อนุมัติ เช่น Disable Account ส่วนการเก็บหรือลบบัญชีและ Audit Trail ให้ทำตามนโยบายและข้อกำหนด ไม่ถือว่า Disable เก็บ Log ทุกระบบโดยอัตโนมัติ / Withdraw access as authorized; account and evidence retention depend on policy and system behavior.</p>
      </div>
    </div>
    <div class="reading-mob-banner" style="margin-top: 12px; border-left: 3.5px solid var(--blue, #3b82f6);">
      <p class="reading-mob-banner-text"><strong>Periodic Access Reviews:</strong> ตรวจสอบสิทธิ์สม่ำเสมออย่างต่อเนื่องครอบคลุมทั้ง 3 ขั้นตอน</p>
    </div>
  </div>
<p class="reading-semantic-note">An identity can leave without a Mover event and can move roles repeatedly. Periodic Access Reviews apply throughout. / ผู้ใช้ย้ายบทบาทได้หลายครั้ง หรือออกจากองค์กรโดยไม่เคยย้ายบทบาท ต้องทบทวนสิทธิ์ตลอดวงจร</p>
</div>
`,

  // 3.1.6 NIST SP 800-63 Digital Identity Framework (3 Interrelated Facets)
  nistSp80063Framework: `
<div class="reading-diagram-card" data-diagram="nistSp80063Framework" role="region" aria-label="NIST SP 800-63 Digital Identity Framework: 3 Interrelated Facets">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Identity Architecture</span>
    <h4 class="reading-diagram-title">NIST SP 800-63: The 3 Interrelated Facets of Digital Identity</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 200" class="reading-diagram-svg" aria-label="NIST SP 800-63 three interrelated facets: Identity Proofing (IAL), Authentication (AAL), and Federation (FAL)" role="img">
      <g>
        <rect x="20" y="15" width="245" height="135" rx="8" class="diag-box diag-box-blue" />
        <rect x="35" y="27" width="105" height="20" rx="4" fill="var(--blue, #3b82f6)" />
        <text x="87.5" y="37" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">SP 800-63A &middot; IAL</text>
        <text x="35" y="65" class="diag-text-title" font-size="14.5px">Identity Proofing</text>
        <text x="35" y="83" class="diag-text-sub" font-size="12px">พิสูจน์ตัวตนในโลกจริง</text>
        <line x1="35" y1="95" x2="250" y2="95" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="35" y="112" class="diag-text-sub" font-size="11.5px">&bull; Real-World Identity Validation</text>
        <text x="35" y="130" class="diag-text-sub" font-size="11.5px">&bull; Enrollment &amp; Evidence Check</text>
        <text x="35" y="142" fill="var(--text-muted, #94a3b8)" font-size="10.5px">ตรวจหลักฐานก่อนออกรหัสดิจิทัล</text>
      </g>

      <g>
        <rect x="298" y="15" width="245" height="135" rx="8" class="diag-box diag-box-banner" />
        <rect x="313" y="27" width="105" height="20" rx="4" fill="var(--blue, #3b82f6)" />
        <text x="365.5" y="37" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">SP 800-63B &middot; AAL</text>
        <text x="313" y="65" class="diag-text-title" font-size="14.5px">Authentication</text>
        <text x="313" y="83" class="diag-text-sub" font-size="12px">การพิสูจน์ยืนยันตัวตน</text>
        <line x1="313" y1="95" x2="528" y2="95" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="313" y="112" class="diag-text-sub" font-size="11.5px">&bull; Authenticator Control Proof</text>
        <text x="313" y="130" class="diag-text-sub" font-size="11.5px">&bull; Passwords, MFA Tokens, OTP</text>
        <text x="313" y="142" fill="var(--text-muted, #94a3b8)" font-size="10.5px">ยืนยันผู้ล็อกอินเป็นเจ้าของจริง</text>
      </g>

      <g>
        <rect x="576" y="15" width="245" height="135" rx="8" class="diag-box diag-box-blue" />
        <rect x="591" y="27" width="105" height="20" rx="4" fill="var(--blue, #3b82f6)" />
        <text x="643.5" y="37" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">SP 800-63C &middot; FAL</text>
        <text x="591" y="65" class="diag-text-title" font-size="14.5px">Federation</text>
        <text x="591" y="83" class="diag-text-sub" font-size="12px">การเชื่อมโยงระบบตัวตน</text>
        <line x1="591" y1="95" x2="806" y2="95" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="591" y="112" class="diag-text-sub" font-size="11.5px">&bull; Cross-Domain Identity Trust</text>
        <text x="591" y="130" class="diag-text-sub" font-size="11.5px">&bull; Single Sign-On (SSO) Assertions</text>
        <text x="591" y="142" fill="var(--text-muted, #94a3b8)" font-size="10.5px">ส่งต่อผลการยืนยันตัวตนข้ามระบบ</text>
      </g>

      <g>
        <rect x="20" y="162" width="801" height="26" rx="4" fill="var(--panel, #1e293b)" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="420" y="175" fill="var(--text-muted, #94a3b8)" font-size="11.5px" font-weight="600" text-anchor="middle" dominant-baseline="central">INTERRELATED FACETS: Distinct identity functions supporting different operational needs, not a rigid sequential pipeline</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="NIST SP 800-63 3 Facets">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">63A</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IDENTITY PROOFING (IAL)</h5>
            <span class="reading-mob-tier-action">Real-World Identity Verification</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ตรวจสอบความถูกต้องของบุคคลในโลกจริง (เช่น แสดงบัตรประชาชน) ก่อนการออกข้อมูลประจำตัวดิจิทัล (Enrollment)</p><p class="reading-diagram-source-labels">SP 800-63A &middot; IAL</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">63B</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">AUTHENTICATION (AAL)</h5>
            <span class="reading-mob-tier-action">Credential Possession &amp; Control</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ยืนยันว่าผู้ใช้เป็นผู้ครอบครองข้อมูลประจำตัว (รหัสผ่าน, OTP, ไบโอเมตริกซ์) ในการล็อกอินประจำวัน</p><p class="reading-diagram-source-labels">SP 800-63B &middot; AAL</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">63C</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">FEDERATION (FAL)</h5>
            <span class="reading-mob-tier-action">Cross-Domain Trust &amp; Assertions</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ส่งต่อข้อมูลตัวตนและการยืนยันตัวตนข้ามขอบเขตองค์กรหรือระบบบริการ เช่น Single Sign-On (SSO)</p><p class="reading-diagram-source-labels">SP 800-63C &middot; FAL</p>
      </div>
    </div>
  </div>
</div>
`,

  // 3.2.3 Least Privilege vs Segregation of Duties (Dual-Axis)
  leastPrivilegeVsSod: `
<div class="reading-diagram-card" data-diagram="leastPrivilegeVsSod" role="region" aria-label="Comparative Architecture: Principle of Least Privilege vs Segregation of Duties">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Control Architecture</span>
    <h4 class="reading-diagram-title">Least Privilege vs. Segregation of Duties: Dual-Axis Comparison</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 260" class="reading-diagram-svg" aria-label="Dual panel showing Least Privilege restricting vertical permissions and Segregation of Duties dividing horizontal workflow" role="img">
      <g>
        <rect x="20" y="20" width="385" height="220" rx="8" class="diag-box diag-box-blue" />
        <rect x="36" y="32" width="160" height="22" rx="4" fill="var(--blue, #3b82f6)" />
        <text x="116" y="43" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">VERTICAL AXIS &middot; สิทธิ์รายคน</text>
        <text x="36" y="74" class="diag-text-title" font-size="15.5px">Principle of Least Privilege (PoLP)</text>
        <text x="36" y="94" class="diag-text-sub" font-size="12.5px">หลักการจำกัดสิทธิ์ขั้นต่ำที่จำเป็น</text>
        <line x1="36" y1="106" x2="389" y2="106" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="36" y="126" class="diag-text-title" font-size="12.5px">Core Rule (กฎหลัก):</text>
        <text x="36" y="144" class="diag-text-sub" font-size="12px">&bull; ให้สิทธิ์เฉพาะเท่าที่จำเป็นอย่างแท้จริงต่องาน</text>
        <text x="36" y="162" class="diag-text-sub" font-size="12px">&bull; Minimum Necessary Access (เช่น Helpdesk รีเซ็ตรหัสได้เท่านั้น)</text>
        <text x="36" y="184" class="diag-text-title" font-size="12.5px">Primary Target (เป้าหมาย):</text>
        <text x="36" y="202" class="diag-text-sub" font-size="12px">&bull; จำกัดความเสียหายเมื่อบัญชีถูกแฮก (Limit Blast Radius)</text>
        <text x="36" y="220" class="diag-text-sub" font-size="12px">&bull; ป้องกันการสะสมสิทธิ์และข้อผิดพลาดจากผู้ใช้รายคน</text>
      </g>

      <line x1="420" y1="30" x2="420" y2="230" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="4,4" />
      <circle cx="420" cy="130" r="16" fill="var(--panel, #1e293b)" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" />
      <text x="420" y="130" fill="var(--text-muted, #94a3b8)" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">VS</text>

      <g>
        <rect x="435" y="20" width="385" height="220" rx="8" class="diag-box diag-box-banner" />
        <rect x="451" y="32" width="180" height="22" rx="4" fill="#f59e0b" />
        <text x="541" y="43" fill="#0f172a" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">HORIZONTAL AXIS &middot; ขั้นตอนงาน</text>
        <text x="451" y="74" class="diag-text-title" font-size="15.5px">Segregation of Duties (SoD)</text>
        <text x="451" y="94" class="diag-text-sub" font-size="12.5px">การแบ่งแยกหน้าที่ความรับผิดชอบ</text>
        <line x1="451" y1="106" x2="804" y2="106" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="451" y="126" class="diag-text-title" font-size="12.5px">Core Rule (กฎหลัก):</text>
        <text x="451" y="144" class="diag-text-sub" font-size="12px">&bull; งานสำคัญต้องใช้คนมากกว่าหนึ่งคน (Multiple People)</text>
        <text x="451" y="162" class="diag-text-sub" font-size="12px">&bull; ผู้สร้างรายการต้องไม่สามารถอนุมัติรายการของตนเองได้</text>
        <text x="451" y="184" class="diag-text-title" font-size="12.5px">3-Stage Workflow (ตัวอย่าง):</text>
        <text x="451" y="202" class="diag-text-sub" font-size="12px">&bull; 1. Request (คนสร้าง) &rarr; 2. Approve (คนอนุมัติ)</text>
        <text x="451" y="220" class="diag-text-sub" font-size="12px">&bull; &rarr; 3. Reconcile / Audit (คนตรวจสอบบัญชี) &rarr; ป้องกันการทุจริต</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Least Privilege vs SoD Mobile">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-foundation">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">PoLP</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">LEAST PRIVILEGE (แนวดิ่ง)</h5>
            <span class="reading-mob-tier-action">Minimum Necessary Access</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มุ่งเน้น <strong>สิทธิ์รายบุคคล</strong>: จำกัดให้ได้รับสิทธิ์ขั้นต่ำเท่าที่จำเป็นต่องาน เพื่อลดผลกระทบหากบัญชีถูกแฮก (Limit Blast Radius)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">SoD</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">SEGREGATION OF DUTIES (แนวนอน)</h5>
            <span class="reading-mob-tier-action">Multiple People &middot; Anti-Fraud</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มุ่งเน้น <strong>กระบวนการทำงาน</strong>: แบ่งขั้นตอนสำคัญให้มีผู้รับผิดชอบมากกว่าหนึ่งคน โดยผู้สร้างรายการต้องไม่อนุมัติเองได้</p>
      </div>
    </div>
  </div>
</div>
`,

  // 3.2.8 Master Access Control Models Comparison (DAC vs MAC vs RBAC vs ABAC)
  accessControlModels: `
<div class="reading-diagram-card" data-diagram="accessControlModels" role="region" aria-label="Access Control Models Comparison: DAC, MAC, RBAC, ABAC">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Access Architecture</span>
    <h4 class="reading-diagram-title">The 4 Logical Access Control Models: Master Comparison Matrix</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 295" class="reading-diagram-svg" aria-label="Four quadrant matrix showing DAC, MAC, RBAC, and ABAC models with their decision makers and mechanisms" role="img">
      <g>
        <rect x="20" y="15" width="385" height="125" rx="8" class="diag-box diag-box-blue" />
        <rect x="36" y="27" width="46" height="20" rx="4" fill="var(--blue, #3b82f6)" />
        <text x="59" y="37" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">DAC</text>
        <text x="92" y="37" class="diag-text-title" font-size="14px" font-weight="700" dominant-baseline="central">Discretionary Access Control</text>
        <line x1="36" y1="56" x2="389" y2="56" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="36" y="74" class="diag-label-dac" font-size="11.5px" font-weight="700">Decision Maker:</text>
        <text x="142" y="74" class="diag-text-sub" font-size="12px">Resource Owner (เจ้าของไฟล์)</text>
        <text x="36" y="96" class="diag-label-dac" font-size="11.5px" font-weight="700">Enforcement:</text>
        <text x="142" y="96" class="diag-text-sub" font-size="12px">Access Control Lists (ACLs)</text>
        <text x="36" y="118" class="diag-label-dac" font-size="11px" font-weight="600">Core Trait:</text>
        <text x="142" y="118" class="diag-text-sub" font-size="11.5px">Flexible &middot; "Owner Decides" Rule</text>
      </g>

      <g>
        <rect x="435" y="15" width="385" height="125" rx="8" class="diag-box diag-box-banner" />
        <rect x="451" y="27" width="46" height="20" rx="4" fill="#ef4444" />
        <text x="474" y="37" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">MAC</text>
        <text x="507" y="37" class="diag-text-title" font-size="14px" font-weight="700" dominant-baseline="central">Mandatory Access Control</text>
        <line x1="451" y1="56" x2="804" y2="56" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="451" y="74" class="diag-label-mac" font-size="11.5px" font-weight="700">Decision Maker:</text>
        <text x="557" y="74" class="diag-text-sub" font-size="12px">Central Authority (นโยบายกลาง)</text>
        <text x="451" y="96" class="diag-label-mac" font-size="11.5px" font-weight="700">Enforcement:</text>
        <text x="557" y="96" class="diag-text-sub" font-size="12px">Labels &amp; User Clearances</text>
        <text x="451" y="118" class="diag-label-mac" font-size="11px" font-weight="600">Core Trait:</text>
        <text x="557" y="118" class="diag-text-sub" font-size="11.5px">Central Policy &middot; Need-to-Know</text>
      </g>

      <g>
        <rect x="20" y="155" width="385" height="125" rx="8" class="diag-box diag-box-banner" />
        <rect x="36" y="167" width="50" height="20" rx="4" fill="#10b981" />
        <text x="61" y="177" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">RBAC</text>
        <text x="96" y="177" class="diag-text-title" font-size="14px" font-weight="700" dominant-baseline="central">Role-Based Access Control</text>
        <line x1="36" y1="196" x2="389" y2="196" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="36" y="214" class="diag-label-rbac" font-size="11.5px" font-weight="700">Decision Maker:</text>
        <text x="142" y="214" class="diag-text-sub" font-size="12px">Predefined Roles (บทบาทงาน)</text>
        <text x="36" y="236" class="diag-label-rbac" font-size="11.5px" font-weight="700">Enforcement:</text>
        <text x="142" y="236" class="diag-text-sub" font-size="12px">Users &rarr; Roles &rarr; Permissions</text>
        <text x="36" y="258" class="diag-label-rbac" font-size="11px" font-weight="600">Core Trait:</text>
        <text x="142" y="258" class="diag-text-sub" font-size="11.5px">Scalable &middot; Job Function Based</text>
      </g>

      <g>
        <rect x="435" y="155" width="385" height="125" rx="8" class="diag-box diag-box-blue" />
        <rect x="451" y="167" width="50" height="20" rx="4" fill="#8b5cf6" />
        <text x="476" y="177" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">ABAC</text>
        <text x="511" y="177" class="diag-text-title" font-size="14px" font-weight="700" dominant-baseline="central">Attribute-Based Access Control</text>
        <line x1="451" y1="196" x2="804" y2="196" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
        <text x="451" y="214" class="diag-label-abac" font-size="11.5px" font-weight="700">Decision Maker:</text>
        <text x="557" y="214" class="diag-text-sub" font-size="12px">Policy Engine (ระบบประมวลผล)</text>
        <text x="451" y="236" class="diag-label-abac" font-size="11.5px" font-weight="700">Enforcement:</text>
        <text x="557" y="236" class="diag-text-sub" font-size="12px">Subject, Object, Action, Context</text>
        <text x="451" y="258" class="diag-label-abac" font-size="11px" font-weight="600">Core Trait:</text>
        <text x="557" y="258" class="diag-text-sub" font-size="11.5px">Fine-Grained &middot; Dynamic Context</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="4 Access Control Models Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">DAC</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DISCRETIONARY (Owner Decides)</h5>
            <span class="reading-mob-tier-action">ACLs &middot; File Creator</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เจ้าของไฟล์ตัดสินใจให้สิทธิ์ตามดุลยพินิจ ยืดหยุ่นแต่เสี่ยงต่อความหละหลวม (เช่น Windows NTFS)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">MAC</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">MANDATORY (Labels &amp; Clearance)</h5>
            <span class="reading-mob-tier-action">Central Authority &middot; Military</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">นโยบายกลางบังคับใช้ผ่าน Security Labels และ Clearances ร่วมกับ Need-to-Know ผู้ใช้แก้เองไม่ได้ และไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RBAC</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ROLE-BASED (Job Functions)</h5>
            <span class="reading-mob-tier-action">Predefined Roles &middot; Scalable</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">สิทธิ์ผูกกับบทบาทหน้าที่งาน แล้วผูกผู้ใช้เข้ากับบทบาท ดูแลรักษาง่าย เหมาะกับองค์กรธุรกิจ</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ABAC</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ATTRIBUTE-BASED (Dynamic Context)</h5>
            <span class="reading-mob-tier-action">Fine-Grained &middot; Zero Trust</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ประเมินคุณลักษณะรอบด้าน (ผู้ใช้, ข้อมูล, การกระทำ, เวลา, อุปกรณ์, พิกัด) ละเอียดสูงสุด</p>
      </div>
    </div>
  </div>
</div>
`,

  // 4.1.3 OSI 7-Layer vs TCP/IP 4-Layer Architecture Mapping
  osiVsTcpIpModel: `
<div class="reading-diagram-card" data-diagram="osiVsTcpIpModel" role="region" aria-label="OSI 7-Layer to TCP/IP 4-Layer Architecture Mapping">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Architecture Mapping</span>
    <h4 class="reading-diagram-title">OSI 7-Layer Reference Model vs. TCP/IP 4-Layer Architecture Mapping</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 375" class="reading-diagram-svg" aria-label="Side-by-side mapping comparing the 7 OSI layers to the 4 TCP/IP layers" role="img">
      <g>
        <rect x="20" y="25" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <text x="36" y="42" class="diag-text-title" font-size="12px" font-weight="700">7. Application (แอปพลิเคชัน)</text>
        <text x="36" y="58" class="diag-text-sub" font-size="10.5px">HTTP, HTTPS, DNS, SSH, FTP &middot; PDU: Data</text>
      </g>
      <g>
        <rect x="20" y="73" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <text x="36" y="90" class="diag-text-title" font-size="12px" font-weight="700">6. Presentation (การนำเสนอ)</text>
        <text x="36" y="106" class="diag-text-sub" font-size="10.5px">TLS/SSL, ASCII, JSON, JPEG &middot; Formatting</text>
      </g>
      <g>
        <rect x="20" y="121" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <text x="36" y="138" class="diag-text-title" font-size="12px" font-weight="700">5. Session (เซสชัน)</text>
        <text x="36" y="154" class="diag-text-sub" font-size="10.5px">RPC, NetBIOS &middot; Session Management</text>
      </g>
      <g>
        <rect x="20" y="169" width="360" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="36" y="186" class="diag-text-title" font-size="12px" font-weight="700">4. Transport (การขนส่ง)</text>
        <text x="36" y="202" class="diag-text-sub" font-size="10.5px">TCP, UDP, Ports &middot; PDU: Segments / Datagrams</text>
      </g>
      <g>
        <rect x="20" y="217" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <text x="36" y="234" class="diag-text-title" font-size="12px" font-weight="700">3. Network (เครือข่าย)</text>
        <text x="36" y="250" class="diag-text-sub" font-size="10.5px">IPv4, IPv6, ICMP, IPsec &middot; PDU: Packets</text>
      </g>
      <g>
        <rect x="20" y="265" width="360" height="42" rx="6" class="diag-box diag-box-banner" />
        <text x="36" y="282" class="diag-text-title" font-size="12px" font-weight="700">2. Data Link (ดาต้าลิงก์)</text>
        <text x="36" y="298" class="diag-text-sub" font-size="10.5px">Ethernet, MAC, Switches &middot; PDU: Frames</text>
      </g>
      <g>
        <rect x="20" y="313" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <text x="36" y="330" class="diag-text-title" font-size="12px" font-weight="700">1. Physical (กายภาพ)</text>
        <text x="36" y="346" class="diag-text-sub" font-size="10.5px">Cables, RJ45, Hubs, Radio Signals &middot; PDU: Bits</text>
      </g>

      <path d="M 380 46 H 415 V 94 H 460 M 415 94 V 142 H 380" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" fill="none" />
      <path d="M 380 190 H 460" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" fill="none" />
      <path d="M 380 238 H 460" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" fill="none" />
      <path d="M 380 286 H 415 V 310 H 460 M 415 310 V 334 H 380" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" fill="none" />

      <g>
        <rect x="460" y="25" width="360" height="138" rx="8" class="diag-box diag-box-blue" />
        <rect x="476" y="37" width="90" height="20" rx="4" fill="#1d4ed8" />
        <text x="521" y="47" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">TCP/IP L4</text>
        <text x="476" y="80" class="diag-text-title" font-size="14px" font-weight="700">Application Layer (แอปพลิเคชัน)</text>
        <text x="476" y="102" class="diag-text-sub" font-size="11.5px">รวมหน้าที่ของ OSI Layer 7, 6, 5 เข้าด้วยกัน</text>
        <text x="476" y="122" class="diag-text-sub" font-size="11px">Protocols: HTTP/S, DNS, SSH, SMTP, DHCP, FTP</text>
        <text x="476" y="142" class="diag-text-sub" font-size="11px">PDU: Data / Messages</text>
      </g>

      <g>
        <rect x="460" y="169" width="360" height="42" rx="6" class="diag-box diag-box-banner" />
        <rect x="476" y="179" width="80" height="22" rx="4" fill="#f59e0b" />
        <text x="516" y="190" fill="#0f172a" font-size="10px" font-weight="700" text-anchor="middle" dominant-baseline="central">TCP/IP L3</text>
        <text x="568" y="185" class="diag-text-title" font-size="13px" font-weight="700">Transport Layer (TCP / UDP)</text>
        <text x="568" y="201" class="diag-text-sub" font-size="10.5px">Host-to-Host &middot; PDU: Segments / Datagrams</text>
      </g>

      <g>
        <rect x="460" y="217" width="360" height="42" rx="6" class="diag-box diag-box-blue" />
        <rect x="476" y="227" width="80" height="22" rx="4" fill="#047857" />
        <text x="516" y="238" fill="#ffffff" font-size="10px" font-weight="700" text-anchor="middle" dominant-baseline="central">TCP/IP L2</text>
        <text x="568" y="233" class="diag-text-title" font-size="13px" font-weight="700">Internet Layer (IP / ICMP)</text>
        <text x="568" y="249" class="diag-text-sub" font-size="10.5px">Logical Routing &middot; PDU: Packets</text>
      </g>

      <g>
        <rect x="460" y="265" width="360" height="90" rx="8" class="diag-box diag-box-banner" />
        <rect x="476" y="277" width="90" height="20" rx="4" fill="#6d28d9" />
        <text x="521" y="287" fill="#ffffff" font-size="10px" font-weight="700" text-anchor="middle" dominant-baseline="central">TCP/IP L1</text>
        <text x="476" y="318" class="diag-text-title" font-size="13.5px" font-weight="700">Network Access / Link Layer</text>
        <text x="476" y="338" class="diag-text-sub" font-size="11.5px">รวม Data Link (Frames) + Physical (Bits, Cables)</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="OSI vs TCP/IP Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L4</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">APPLICATION LAYER (OSI 7, 6, 5)</h5>
            <span class="reading-mob-tier-action">User Interfaces &middot; Data Representation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รวมหน้าที่ของ Application, Presentation และ Session เข้าด้วยกัน โพรโทคอลสำคัญ: HTTP/HTTPS, DNS, SSH, SMTP, DHCP &middot; PDU: Data / Messages</p>
        <div class="reading-mob-sub-layers" style="margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div class="reading-mob-sub-item" data-osi-layer="7" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #3b82f6;"><strong>7. Application:</strong> HTTP, HTTPS, DNS, SSH, FTP &middot; PDU: Data</div>
          <div class="reading-mob-sub-item" data-osi-layer="6" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #3b82f6;"><strong>6. Presentation:</strong> TLS/SSL, ASCII, JSON, JPEG &middot; Formatting</div>
          <div class="reading-mob-sub-item" data-osi-layer="5" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #3b82f6;"><strong>5. Session:</strong> RPC, NetBIOS &middot; Session Management</div>
        </div>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L3</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">TRANSPORT LAYER (OSI 4)</h5>
            <span class="reading-mob-tier-action">Host-to-Host Communication</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ดูแลการเชื่อมต่อและส่งข้อมูลระหว่างเครื่องปลายทาง (TCP: ordered byte stream; UDP: datagrams, context-dependent latency) กำกับด้วย Port Numbers &middot; PDU: Segments / Datagrams</p>
        <div class="reading-mob-sub-layers" style="margin-top: 8px;">
          <div class="reading-mob-sub-item" data-osi-layer="4" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #f59e0b;"><strong>4. Transport:</strong> TCP, UDP, Ports &middot; PDU: Segments / Datagrams</div>
        </div>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INTERNET LAYER (OSI 3)</h5>
            <span class="reading-mob-tier-action">Logical Addressing &middot; Routing</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">กำหนดหมายเลข IP และเลือกเส้นทางส่งข้อมูลข้ามเครือข่าย โพรโทคอลสำคัญ: IPv4, IPv6, ICMP, IPsec อุปกรณ์: Routers &middot; PDU: Packets</p>
        <div class="reading-mob-sub-layers" style="margin-top: 8px;">
          <div class="reading-mob-sub-item" data-osi-layer="3" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #10b981;"><strong>3. Network:</strong> IPv4, IPv6, ICMP, IPsec &middot; PDU: Packets</div>
        </div>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">L1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">NETWORK ACCESS / LINK (OSI 2, 1)</h5>
            <span class="reading-mob-tier-action">Physical Hardware &middot; Frames &amp; Bits</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รวมหน้าที่ของ Data Link (MAC, Switches, Ethernet Frames) และ Physical (สายสัญญาณ RJ45, Hubs, คลื่นวิทยุ Radio Signals, Bits 0/1)</p>
        <div class="reading-mob-sub-layers" style="margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div class="reading-mob-sub-item" data-osi-layer="2" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #8b5cf6;"><strong>2. Data Link:</strong> Ethernet, MAC, Switches &middot; PDU: Frames</div>
          <div class="reading-mob-sub-item" data-osi-layer="1" style="font-size: 13.5px; padding: 6px 10px; background: var(--panel-2); border-radius: 4px; border-left: 3px solid #8b5cf6;"><strong>1. Physical:</strong> Cables, RJ45, Hubs, Radio Signals &middot; PDU: Bits</div>
        </div>
      </div>
    </div>
  </div>
  <p class="reading-semantic-note">Lines show model correspondence, not packet flow or an encapsulation sequence. Layer numbers identify architectural functions, not mandatory operational steps. / เส้นแสดงการเทียบแบบจำลอง ไม่ใช่เส้นทางแพ็กเก็ตหรือลำดับ encapsulation หมายเลขชั้นระบุหน้าที่ทางสถาปัตยกรรม</p>
</div>
`,

  // 4.2.3 Demilitarized Zone (DMZ) Perimeter Architecture
  dmzFirewallArchitecture: `
<div class="reading-diagram-card" data-diagram="dmzFirewallArchitecture" role="region" aria-label="Illustrative DMZ zones and firewall boundaries; policy-dependent connections">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Perimeter Architecture</span>
    <h4 class="reading-diagram-title">Demilitarized Zone (DMZ): Illustrative Zones and Firewall Boundaries</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 280" class="reading-diagram-svg" aria-label="Zone overview: Internet, FW1, public Web/WAF, Mail and DNS services in the DMZ, FW2 and internal assets; connections depend on policy, not a mandatory packet route" role="img">
      <g>
        <rect x="20" y="25" width="180" height="230" rx="8" class="diag-box diag-box-banner" />
        <rect x="36" y="38" width="148" height="22" rx="4" fill="#ef4444" />
        <text x="110" y="49" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">UNTRUSTED ZONE</text>
        <text x="36" y="82" class="diag-text-title" font-size="14px" font-weight="700">Internet / Outside</text>
        <text x="36" y="104" class="diag-text-sub" font-size="11.5px">&bull; สาธารณะภายนอก</text>
        <text x="36" y="124" class="diag-text-sub" font-size="11.5px">&bull; ผู้ใช้งานทั่วไป</text>
        <text x="36" y="144" class="diag-text-sub" font-size="11.5px">&bull; ภัยคุกคามภายนอก</text>
        <text x="36" y="174" class="diag-text-sub" font-size="11px">ทราฟฟิกขาเข้าต้องผ่าน</text>
        <text x="36" y="192" class="diag-text-sub" font-size="11px">การตรวจสอบอย่างเข้มงวด</text>
      </g>

      <g>
        <rect x="220" y="45" width="55" height="190" rx="6" fill="#334155" stroke="var(--line, #475569)" stroke-width="1.5" />
        <rect x="228" y="55" width="39" height="18" rx="3" fill="#ef4444" />
        <text x="247" y="64" fill="#ffffff" font-size="9.5px" font-weight="800" text-anchor="middle" dominant-baseline="central">FW 1</text>
        <text x="247" y="105" fill="#f8fafc" font-size="11px" font-weight="700" text-anchor="middle">External</text>
        <text x="247" y="123" fill="#f8fafc" font-size="11px" font-weight="700" text-anchor="middle">Firewall</text>
        <text x="247" y="155" fill="#cbd5e1" font-size="9px" text-anchor="middle">Packet Filter</text>
        <text x="247" y="170" fill="#cbd5e1" font-size="9px" text-anchor="middle">Stateful</text>
        <text x="247" y="210" fill="#93c5fd" font-size="9px" text-anchor="middle">Policy Ports</text>
      </g>

      <g>
        <rect x="295" y="25" width="245" height="230" rx="8" class="diag-box diag-box-blue" />
        <rect x="311" y="38" width="213" height="22" rx="4" fill="#3b82f6" />
        <text x="417" y="49" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">BUFFER ZONE &middot; LIMITED TRUST</text>
        <text x="311" y="82" class="diag-text-title" font-size="14px" font-weight="700">Demilitarized Zone (DMZ)</text>
        
        <rect x="311" y="98" width="213" height="32" rx="4" class="diag-box" fill="var(--panel)" />
        <text x="323" y="118" class="diag-text-title" font-size="11px" font-weight="700">Web Server / WAF</text>
        <text x="512" y="118" class="diag-text-sub" style="fill: var(--text)" font-size="10.5px" text-anchor="end">HTTPS:443</text>

        <rect x="311" y="136" width="213" height="32" rx="4" class="diag-box" fill="var(--panel)" />
        <text x="323" y="156" class="diag-text-title" font-size="11px" font-weight="700">Mail Gateway (SMTP)</text>
        <text x="512" y="156" class="diag-text-sub" style="fill: var(--text)" font-size="10.5px" text-anchor="end">Port 25</text>

        <rect x="311" y="174" width="213" height="32" rx="4" class="diag-box" fill="var(--panel)" />
        <text x="323" y="194" class="diag-text-title" font-size="11px" font-weight="700">Public DNS / Proxy</text>
        <text x="512" y="194" class="diag-text-sub" style="fill: var(--text)" font-size="10.5px" text-anchor="end">Port 53</text>
        
        <text x="417" y="235" class="diag-text-sub" font-size="10.5px" text-anchor="middle">แยกบริการสาธารณะออกจากเครือข่ายภายใน</text>
      </g>

      <g>
        <rect x="560" y="45" width="55" height="190" rx="6" fill="#334155" stroke="var(--line, #475569)" stroke-width="1.5" />
        <rect x="568" y="55" width="39" height="18" rx="3" fill="#10b981" />
        <text x="587" y="64" fill="#ffffff" font-size="9.5px" font-weight="800" text-anchor="middle" dominant-baseline="central">FW 2</text>
        <text x="587" y="105" fill="#f8fafc" font-size="11px" font-weight="700" text-anchor="middle">Internal</text>
        <text x="587" y="123" fill="#f8fafc" font-size="11px" font-weight="700" text-anchor="middle">Firewall</text>
        <text x="587" y="155" fill="#cbd5e1" font-size="9px" text-anchor="middle">Deep Inspect</text>
        <text x="587" y="170" fill="#cbd5e1" font-size="9px" text-anchor="middle">Strict ACLs</text>
        <text x="587" y="210" fill="#6ee7b7" font-size="9px" text-anchor="middle">App &amp; DB</text>
      </g>

      <g>
        <rect x="635" y="25" width="185" height="230" rx="8" class="diag-box diag-box-blue" />
        <rect x="651" y="38" width="153" height="22" rx="4" fill="#10b981" />
        <text x="727" y="49" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">TRUSTED INTERNAL</text>
        <text x="651" y="82" class="diag-text-title" font-size="14px" font-weight="700">Internal Network</text>
        <text x="651" y="104" class="diag-text-sub" font-size="11.5px">&bull; Database Servers</text>
        <text x="651" y="124" class="diag-text-sub" font-size="11.5px">&bull; Active Directory (IAM)</text>
        <text x="651" y="144" class="diag-text-sub" font-size="11.5px">&bull; ERP / HR Systems</text>
        <text x="651" y="164" class="diag-text-sub" font-size="11.5px">&bull; Staff Workstations</text>
        <text x="651" y="195" class="diag-text-sub" font-size="11px">ไม่อนุญาตการเชื่อมต่อ</text>
        <text x="651" y="213" class="diag-text-sub" font-size="11px">ตรงจาก Internet</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="DMZ Architecture Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ZONE 1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INTERNET / OUTSIDE (UNTRUSTED)</h5>
            <span class="reading-mob-tier-action">Public Access &middot; Inbound Traffic</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เครือข่ายสาธารณะภายนอก ไม่มีความไว้วางใจ ทราฟฟิกทั้งหมดต้องถูกคัดกรองผ่าน External Firewall (FW 1)</p><p class="reading-diagram-source-labels">UNTRUSTED ZONE · Internet / Outside · &bull; สาธารณะภายนอก · &bull; ผู้ใช้งานทั่วไป · &bull; ภัยคุกคามภายนอก · ทราฟฟิกขาเข้าต้องผ่าน · การตรวจสอบอย่างเข้มงวด · FW 1 · External · Firewall · Packet Filter · Stateful · Policy Ports</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ZONE 2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DEMILITARIZED ZONE (DMZ BUFFER)</h5>
            <span class="reading-mob-tier-action">Public Services &middot; Limited Trust</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เขตกันชนที่วางเซิร์ฟเวอร์ที่เปิดให้สาธารณะเข้าถึงได้ (Web, Mail Gateway, DNS, Reverse Proxy) การแบ่งเขตช่วยจำกัดเส้นทางจาก DMZ ไปยังเครือข่ายภายใน โดยขึ้นกับนโยบาย การตั้งค่า และการควบคุมที่เกี่ยวข้อง</p><p class="reading-diagram-source-labels">BUFFER ZONE &middot; LIMITED TRUST · Demilitarized Zone (DMZ) · Web Server / WAF · HTTPS:443 · Mail Gateway (SMTP) · Port 25 · Public DNS / Proxy · Port 53 · แยกบริการสาธารณะออกจากเครือข่ายภายใน</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-foundation">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ZONE 3</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INTERNAL NETWORK (TRUSTED / PRIVATE)</h5>
            <span class="reading-mob-tier-action">Core Assets &middot; Database &amp; IAM</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เครือข่ายภายในสำหรับทรัพย์สินสำคัญ จัดเก็บฐานข้อมูลสำคัญ (Database), Active Directory, ERP กั้นด้วย Internal Firewall (FW 2) เพื่อห้ามทราฟฟิกตรงจากภายนอกโดยเด็ดขาด</p><p class="reading-diagram-source-labels">FW 2 · Internal · Firewall · Deep Inspect · Strict ACLs · App &amp; DB · TRUSTED INTERNAL · Internal Network · &bull; Database Servers · &bull; Active Directory (IAM) · &bull; ERP / HR Systems · &bull; Staff Workstations · ไม่อนุญาตการเชื่อมต่อ · ตรงจาก Internet</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Illustrative zone overview, not a universal packet route. FW1 mediates outside/DMZ connections; FW2 controls separately permitted connections to the internal network. Public requests may terminate in the DMZ. Isolation limits paths but does not guarantee that compromise cannot spread. / ตัวอย่างภาพรวมเขตและขอบเขตไฟร์วอลล์ ไม่ใช่เส้นทางบังคับของทุกแพ็กเก็ต คำขอบริการอาจสิ้นสุดใน DMZ ส่วนการเชื่อมต่อภายในต้องได้รับอนุญาตแยกตามนโยบาย การแบ่งเขตจำกัดเส้นทางแต่ไม่รับประกันว่าจะหยุดการลุกลามได้ทุกกรณี</p></div>
`,

  // 4.2.6 Defense in Depth 5 Concentric Security Tiers
  defenseInDepthLayers: `
<div class="reading-diagram-card" data-diagram="defenseInDepthLayers" role="region" aria-label="Defense in Depth 5-Layer Security Architecture">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Layered Defense</span>
    <h4 class="reading-diagram-title">Defense in Depth: Five Example Control Groups</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 280" class="reading-diagram-svg" aria-label="Hierarchical layered diagram showing 5 security tiers from Perimeter down to Data core" role="img">
      <g>
        <rect x="20" y="20" width="800" height="42" rx="6" class="diag-box diag-box-banner" />
        <rect x="32" y="28" width="60" height="26" rx="4" fill="#64748b" />
        <text x="62" y="41" fill="#ffffff" font-size="11px" font-weight="800" text-anchor="middle" dominant-baseline="central">GROUP 1</text>
        <text x="106" y="41" class="diag-text-title" font-size="13.5px" font-weight="700" dominant-baseline="central">Perimeter Security (ความมั่นคงปลอดภัยขอบเขตเครือข่าย)</text>
        <text x="804" y="41" class="diag-text-sub" font-size="11px" text-anchor="end" dominant-baseline="central">Firewalls &middot; Edge Routers &middot; Anti-DDoS &middot; External IDS/IPS</text>
      </g>

      <g>
        <rect x="20" y="70" width="800" height="42" rx="6" class="diag-box diag-box-blue" />
        <rect x="32" y="78" width="60" height="26" rx="4" fill="#3b82f6" />
        <text x="62" y="91" fill="#ffffff" font-size="11px" font-weight="800" text-anchor="middle" dominant-baseline="central">GROUP 2</text>
        <text x="106" y="91" class="diag-text-title" font-size="13.5px" font-weight="700" dominant-baseline="central">Network Security (การแบ่งส่วนและการควบคุมเครือข่าย)</text>
        <text x="804" y="91" class="diag-text-sub" font-size="11px" text-anchor="end" dominant-baseline="central">VLANs &middot; DMZ Architecture &middot; Micro-Segmentation &middot; VPN</text>
      </g>

      <g>
        <rect x="20" y="120" width="800" height="42" rx="6" class="diag-box diag-box-banner" />
        <rect x="32" y="128" width="60" height="26" rx="4" fill="#f59e0b" />
        <text x="62" y="141" fill="#0f172a" font-size="11px" font-weight="800" text-anchor="middle" dominant-baseline="central">GROUP 3</text>
        <text x="106" y="141" class="diag-text-title" font-size="13.5px" font-weight="700" dominant-baseline="central">Endpoint Security (ความปลอดภัยเครื่องลูกข่ายและเซิร์ฟเวอร์)</text>
        <text x="804" y="141" class="diag-text-sub" font-size="11px" text-anchor="end" dominant-baseline="central">EDR &middot; Host Firewall &middot; OS Patching &middot; Hardening</text>
      </g>

      <g>
        <rect x="20" y="170" width="800" height="42" rx="6" class="diag-box diag-box-blue" />
        <rect x="32" y="178" width="60" height="26" rx="4" fill="#8b5cf6" />
        <text x="62" y="191" fill="#ffffff" font-size="11px" font-weight="800" text-anchor="middle" dominant-baseline="central">GROUP 4</text>
        <text x="106" y="191" class="diag-text-title" font-size="13.5px" font-weight="700" dominant-baseline="central">Application Security (ความปลอดภัยระดับซอฟต์แวร์)</text>
        <text x="804" y="191" class="diag-text-sub" font-size="11px" text-anchor="end" dominant-baseline="central">Web Application Firewall (WAF) &middot; Input Validation &middot; MFA</text>
      </g>

      <g>
        <rect x="20" y="220" width="800" height="42" rx="6" class="diag-box diag-box-blue" />
        <rect x="32" y="228" width="60" height="26" rx="4" fill="#10b981" />
        <text x="62" y="241" fill="#ffffff" font-size="11px" font-weight="800" text-anchor="middle" dominant-baseline="central">GROUP 5</text>
        <text x="106" y="241" class="diag-text-title" font-size="13.5px" font-weight="700" dominant-baseline="central">Data Security &middot; The Core Asset (หัวใจของการปกป้องข้อมูล)</text>
        <text x="804" y="241" class="diag-text-sub" font-size="11px" text-anchor="end" dominant-baseline="central">AES-256 Encryption &middot; Access ACLs &middot; Immutable Backups</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Defense in Depth Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PERIMETER SECURITY (ขอบเขตภายนอก)</h5>
            <span class="reading-mob-tier-action">External Defense &middot; Anti-DDoS</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ปราการด่านแรกคัดกรองภัยคุกคามอินเทอร์เน็ต: Edge Firewalls, Border Routers, Anti-DDoS Protection, External IDS/IPS</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">NETWORK SECURITY (เครือข่ายภายใน)</h5>
            <span class="reading-mob-tier-action">Segmentation &middot; Blast Radius</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จำกัดการแพร่กระจายของภัยคุกคาม: DMZ, Virtual LANs (VLANs), Micro-Segmentation, Inter-VLAN ACLs, VPN Enclaves</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ENDPOINT SECURITY (เครื่องลูกข่าย/เซิร์ฟเวอร์)</h5>
            <span class="reading-mob-tier-action">EDR &middot; Patch Management</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ปกป้องระดับเครื่องอุปกรณ์: Endpoint Detection &amp; Response (EDR), Host Firewalls, Patch Updates, OS Hardening</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">APPLICATION SECURITY (ระดับแอปพลิเคชัน)</h5>
            <span class="reading-mob-tier-action">WAF &middot; Secure Coding &middot; MFA</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ป้องกันช่องโหว่ซอฟต์แวร์: Web Application Firewall (WAF), การตรวจสอบ Input Validation, การเขียนโค้ดปลอดภัย, MFA</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">05</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DATA SECURITY (หัวใจของข้อมูล &middot; CORE)</h5>
            <span class="reading-mob-tier-action">Encryption &middot; Backups &middot; Least Privilege</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ทรัพย์สินสำคัญที่สุดที่ต้องปกป้อง: เข้ารหัสข้อมูล (Encryption at Rest / in Transit), สิทธิ์ขั้นต่ำ (PoLP), สำรองข้อมูลที่ไม่สามารถแก้ไขได้ (Immutable Backups)</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Example complementary control groups, not five required stages or guaranteed independent barriers. / เป็นกลุ่มมาตรการตัวอย่างที่ใช้เสริมกัน ไม่ใช่ขั้นตอนบังคับห้าขั้น และยังอาจมีจุดพึ่งพาร่วม</p>
</div>
`,

  // 4.3.3 Cloud Shared Responsibility Model Matrix
  cloudSharedResponsibility: `
<div class="reading-diagram-card" data-diagram="cloudSharedResponsibility" role="region" aria-label="Cloud Shared Responsibility Model Matrix">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Cloud Governance</span>
    <h4 class="reading-diagram-title">Cloud Shared Responsibility Model: CSP vs. Customer Matrix</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 840 330" class="reading-diagram-svg" aria-label="Matrix showing responsibility boundary between Customer (Security in the cloud) and CSP (Security of the cloud) across IaaS, PaaS, SaaS, and FaaS" role="img">
      <g>
        <rect x="20" y="15" width="22" height="14" rx="3" fill="#10b981" />
        <text x="48" y="22" class="diag-text-title" font-size="11.5px" font-weight="700" dominant-baseline="central">Customer Responsibility (Security IN the Cloud &middot; ลูกค้าดูแล)</text>
        <rect x="470" y="15" width="22" height="14" rx="3" fill="#3b82f6" />
        <text x="498" y="22" class="diag-text-title" font-size="11.5px" font-weight="700" dominant-baseline="central">CSP Responsibility (Security OF the Cloud &middot; ผู้ให้บริการดูแล)</text>
      </g>

      <g>
        <rect x="20" y="40" width="185" height="275" rx="8" class="diag-box diag-box-blue" />
        <text x="112" y="60" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">IaaS</text>
        <text x="112" y="76" class="diag-text-sub" font-size="10.5px" text-anchor="middle">Infrastructure as a Service</text>
        
        <rect x="30" y="90" width="165" height="26" rx="4" fill="#10b981" />
        <text x="112" y="103" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Data Policy (Customer)</text>
        
        <rect x="30" y="122" width="165" height="26" rx="4" fill="#10b981" />
        <text x="112" y="135" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">IAM Policy (Customer)</text>
        
        <rect x="30" y="154" width="165" height="26" rx="4" fill="#10b981" />
        <text x="112" y="167" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Applications &amp; Code (Customer)</text>
        
        <rect x="30" y="186" width="165" height="26" rx="4" fill="#10b981" />
        <text x="112" y="199" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">OS &amp; Patching (Customer)</text>
        
        <rect x="30" y="218" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="112" y="231" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Virtualization (CSP)</text>
        
        <rect x="30" y="250" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="112" y="263" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Physical Facilities (CSP)</text>
        
        <text x="112" y="298" class="diag-text-sub" font-size="10.5px" text-anchor="middle">เช่น AWS EC2, Azure VMs</text>
      </g>

      <g>
        <rect x="225" y="40" width="185" height="275" rx="8" class="diag-box diag-box-blue" />
        <text x="317" y="60" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">PaaS</text>
        <text x="317" y="76" class="diag-text-sub" font-size="10.5px" text-anchor="middle">Platform as a Service</text>
        
        <rect x="235" y="90" width="165" height="26" rx="4" fill="#10b981" />
        <text x="317" y="103" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Data Policy (Customer)</text>
        
        <rect x="235" y="122" width="165" height="26" rx="4" fill="#10b981" />
        <text x="317" y="135" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">IAM Policy (Customer)</text>
        
        <rect x="235" y="154" width="165" height="26" rx="4" fill="#10b981" />
        <text x="317" y="167" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Applications &amp; Code (Customer)</text>
        
        <rect x="235" y="186" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="317" y="199" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">OS &amp; Runtime (CSP)</text>
        
        <rect x="235" y="218" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="317" y="231" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Virtualization (CSP)</text>
        
        <rect x="235" y="250" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="317" y="263" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Physical Facilities (CSP)</text>
        
        <text x="317" y="298" class="diag-text-sub" font-size="10.5px" text-anchor="middle">เช่น App Engine, Elastic Beanstalk</text>
      </g>

      <g>
        <rect x="430" y="40" width="185" height="275" rx="8" class="diag-box diag-box-blue" />
        <text x="522" y="60" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">SaaS</text>
        <text x="522" y="76" class="diag-text-sub" font-size="10.5px" text-anchor="middle">Software as a Service</text>
        
        <rect x="440" y="90" width="165" height="26" rx="4" fill="#10b981" />
        <text x="522" y="103" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Data Policy (Customer)</text>
        
        <rect x="440" y="122" width="165" height="26" rx="4" fill="#10b981" />
        <text x="522" y="135" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">IAM Policy (Customer)</text>
        
        <rect x="440" y="154" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="522" y="167" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Applications &amp; Logic (CSP)</text>
        
        <rect x="440" y="186" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="522" y="199" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">OS &amp; Runtime (CSP)</text>
        
        <rect x="440" y="218" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="522" y="231" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Virtualization (CSP)</text>
        
        <rect x="440" y="250" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="522" y="263" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Physical Facilities (CSP)</text>
        
        <text x="522" y="298" class="diag-text-sub" font-size="10.5px" text-anchor="middle">เช่น M365, Google Workspace</text>
      </g>

      <g>
        <rect x="635" y="40" width="185" height="275" rx="8" class="diag-box diag-box-blue" />
        <text x="727" y="60" class="diag-text-title" font-size="14px" font-weight="700" text-anchor="middle">FaaS / Serverless</text>
        <text x="727" y="76" class="diag-text-sub" font-size="10.5px" text-anchor="middle">Function as a Service</text>
        
        <rect x="645" y="90" width="165" height="26" rx="4" fill="#10b981" />
        <text x="727" y="103" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Data Policy (Customer)</text>
        
        <rect x="645" y="122" width="165" height="26" rx="4" fill="#10b981" />
        <text x="727" y="135" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">IAM Policy (Customer)</text>
        
        <rect x="645" y="154" width="165" height="26" rx="4" fill="#10b981" />
        <text x="727" y="167" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Function Code (Customer)</text>
        
        <rect x="645" y="186" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="727" y="199" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Event Runtime &amp; OS (CSP)</text>
        
        <rect x="645" y="218" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="727" y="231" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Compute Container (CSP)</text>
        
        <rect x="645" y="250" width="165" height="26" rx="4" fill="#3b82f6" />
        <text x="727" y="263" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Physical Facilities (CSP)</text>
        
        <text x="727" y="298" class="diag-text-sub" font-size="10.5px" text-anchor="middle">เช่น AWS Lambda, Cloud Functions</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Cloud Shared Responsibility Mobile Stack"><p class="reading-diagram-source-labels">Customer Responsibility (Security IN the Cloud &middot; ลูกค้าดูแล) · CSP Responsibility (Security OF the Cloud &middot; ผู้ให้บริการดูแล)</p>
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-foundation">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">IaaS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INFRASTRUCTURE AS A SERVICE</h5>
            <span class="reading-mob-tier-action">OS &middot; Apps &middot; Customer Managed</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลูกค้าดูแล: การจัดชั้นข้อมูลและนโยบาย IAM/การตั้งค่าที่ตนควบคุม, Applications, Guest OS, Patching และ Network Configs | CSP ดูแล: Hypervisor, Physical Servers, Storage, Datacenter Facility</p><p class="reading-diagram-source-labels">IaaS · Infrastructure as a Service · Data Policy (Customer) · IAM Policy (Customer) · Applications &amp; Code (Customer) · OS &amp; Patching (Customer) · Virtualization (CSP) · Physical Facilities (CSP) · เช่น AWS EC2, Azure VMs</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">PaaS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PLATFORM AS A SERVICE</h5>
            <span class="reading-mob-tier-action">Code &middot; Data &middot; Runtime Managed</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลูกค้าดูแล: การจัดชั้นข้อมูลและนโยบาย IAM/การตั้งค่าที่ตนควบคุม, Application Source Code | CSP ดูแล: OS, Middleware, Language Runtime, Database Engine, Hardware, Physical Security</p><p class="reading-diagram-source-labels">PaaS · Platform as a Service · Data Policy (Customer) · IAM Policy (Customer) · Applications &amp; Code (Customer) · OS &amp; Runtime (CSP) · Virtualization (CSP) · Physical Facilities (CSP) · เช่น App Engine, Elastic Beanstalk</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">SaaS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">SOFTWARE AS A SERVICE</h5>
            <span class="reading-mob-tier-action">Data &middot; Access &middot; App Managed</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลูกค้าดูแล: การจัดชั้นข้อมูลและนโยบาย/การตั้งค่า User Access ที่ตนควบคุม; CSP ยังคงดูแลความปลอดภัยของบริการ Storage และ IAM ที่ตนบริหาร | CSP ดูแล: แอปพลิเคชันทั้งหมด, ซอฟต์แวร์, OS, โครงสร้างพื้นฐาน และการสำรองข้อมูลระดับระบบ</p><p class="reading-diagram-source-labels">SaaS · Software as a Service · Data Policy (Customer) · IAM Policy (Customer) · Applications &amp; Logic (CSP) · OS &amp; Runtime (CSP) · Virtualization (CSP) · Physical Facilities (CSP) · เช่น M365, Google Workspace</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">FaaS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">FUNCTION AS A SERVICE (SERVERLESS)</h5>
            <span class="reading-mob-tier-action">Event Code &middot; Fully Managed</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลูกค้าดูแล: Function Code, การจัดชั้นข้อมูล และนโยบาย/การตั้งค่า IAM Trigger ที่ตนควบคุม | CSP ดูแล: การสเกลแบบอัตโนมัติ (Auto-scaling), Event Bus, Container Execution, Host Infrastructure</p><p class="reading-diagram-source-labels">FaaS / Serverless · Function as a Service · Data Policy (Customer) · IAM Policy (Customer) · Function Code (Customer) · Event Runtime &amp; OS (CSP) · Compute Container (CSP) · Physical Facilities (CSP) · เช่น AWS Lambda, Cloud Functions</p>
      </div>
    </div>
  </div>
</div>
`,
  // 5.3.3 The 6-Phase Incident Response Lifecycle
  irpLifecycle: `
<div class="reading-diagram-card" data-diagram="irpLifecycle" role="region" aria-label="The 6-Phase Incident Response Lifecycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Incident Response Process</span>
    <h4 class="reading-diagram-title">The 6-Phase Incident Response Lifecycle (วงจรการตอบสนองต่อเหตุการณ์ 6 ขั้นตอน)</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 900 270" class="reading-diagram-svg" aria-label="Continuous 6-phase incident response lifecycle with feedback loop into preparation" role="img">
      <g>
        <rect x="25" y="25" width="250" height="90" rx="8" class="diag-box diag-box-blue" />
        <rect x="37" y="37" width="36" height="20" rx="4" fill="#3b82f6" />
        <text x="55" y="47" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P1</text>
        <text x="82" y="47" class="diag-text-title" font-size="13px" font-weight="700">1. Preparation (เตรียมความพร้อม)</text>
        <text x="37" y="78" class="diag-text-sub" font-size="11px">นโยบาย, เครื่องมือ SOC, รายชื่อติดต่อ</text>
        <text x="37" y="96" class="diag-text-sub" font-size="10.5px">การฝึกอบรม IRP, การตั้งค่าความมั่นคงปลอดภัย</text>
      </g>

      <path d="M 275 70 H 325" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="325,70 315,65 315,75" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="325" y="25" width="250" height="90" rx="8" class="diag-box diag-box-banner" />
        <rect x="337" y="37" width="36" height="20" rx="4" fill="#6366f1" />
        <text x="355" y="47" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P2</text>
        <text x="382" y="47" class="diag-text-title" font-size="13px" font-weight="700">2. Detection &amp; Analysis</text>
        <text x="337" y="78" class="diag-text-sub" font-size="11px">ตรวจจับและวิเคราะห์เหตุการณ์ (SIEM/EDR)</text>
        <text x="337" y="96" class="diag-text-sub" font-size="10.5px">การคัดกรอง Triage, ประเมินความรุนแรงและขอบเขต</text>
      </g>

      <path d="M 575 70 H 625" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="625,70 615,65 615,75" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="625" y="25" width="250" height="90" rx="8" class="diag-box diag-box-blue" />
        <rect x="637" y="37" width="36" height="20" rx="4" fill="#ef4444" />
        <text x="655" y="47" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P3</text>
        <text x="682" y="47" class="diag-text-title" font-size="13px" font-weight="700">3. Containment (การควบคุม)</text>
        <text x="637" y="78" class="diag-text-sub" font-size="11px">ตัดการเชื่อมต่อเครือข่าย, กักกันโฮสต์</text>
        <text x="637" y="96" class="diag-text-sub" font-size="10.5px">จำกัดรัศมีความเสียหาย (Blast Radius)</text>
      </g>

      <path d="M 750 115 V 155" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="750,155 745,145 755,145" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="625" y="155" width="250" height="90" rx="8" class="diag-box diag-box-blue" />
        <rect x="637" y="167" width="36" height="20" rx="4" fill="#f59e0b" />
        <text x="655" y="177" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P4</text>
        <text x="682" y="177" class="diag-text-title" font-size="13px" font-weight="700">4. Eradication (กำจัดสาเหตุ)</text>
        <text x="637" y="208" class="diag-text-sub" font-size="11px">ลบมัลแวร์, ปิดบัญชีที่ถูกเจาะระบบ</text>
        <text x="637" y="226" class="diag-text-sub" font-size="10.5px">อุดช่องโหว่ที่เป็นต้นเหตุการบุกรุก</text>
      </g>

      <path d="M 625 200 H 575" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="575,200 585,195 585,205" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="325" y="155" width="250" height="90" rx="8" class="diag-box diag-box-banner" />
        <rect x="337" y="167" width="36" height="20" rx="4" fill="#10b981" />
        <text x="355" y="177" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P5</text>
        <text x="382" y="177" class="diag-text-title" font-size="13px" font-weight="700">5. Recovery (ฟื้นฟูระบบ)</text>
        <text x="337" y="208" class="diag-text-sub" font-size="11px">กู้คืนระบบจากข้อมูลสำรองที่ปลอดภัย</text>
        <text x="337" y="226" class="diag-text-sub" font-size="10.5px">ทดสอบความสมบูรณ์ก่อนเปิดใช้งานจริง</text>
      </g>

      <path d="M 325 200 H 275" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="275,200 285,195 285,205" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="25" y="155" width="250" height="90" rx="8" class="diag-box diag-box-blue" />
        <rect x="37" y="167" width="36" height="20" rx="4" fill="#8b5cf6" />
        <text x="55" y="177" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">P6</text>
        <text x="82" y="177" class="diag-text-title" font-size="13px" font-weight="700">6. Post-Incident Review</text>
        <text x="37" y="208" class="diag-text-sub" font-size="11px">ถอดบทเรียน (Lessons Learned)</text>
        <text x="37" y="226" class="diag-text-sub" font-size="10.5px">ปรับปรุงแผน IRP และมาตรการป้องกัน</text>
      </g>

      <path d="M 150 155 V 115" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,4" fill="none" />
      <polygon points="150,115 145,125 155,125" fill="#3b82f6" />
      <text x="158" y="137" fill="#3b82f6" font-size="9.5px" font-weight="700">ปรับปรุงอย่างต่อเนื่อง</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Incident Response Lifecycle Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">1. PREPARATION (การเตรียมความพร้อม)</h5>
            <span class="reading-mob-tier-action">Policies &middot; Tools &middot; Training</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">สร้างและทบทวนแผน IRP, จัดตั้งทีม CSIRT/CIRT, จัดเตรียมเครื่องมือพิสูจน์หลักฐาน (Jump Bags), ซ้อมแผน Tabletop, และเสริมความมั่นคงปลอดภัยตามมาตรฐานขั้นต่ำ (Baselines)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">2. DETECTION &amp; ANALYSIS (การตรวจจับและวิเคราะห์)</h5>
            <span class="reading-mob-tier-action">Telemetry &middot; SIEM &middot; Triage</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ติดตามการแจ้งเตือนจากระบบเฝ้าระวัง (SIEM/EDR), คัดกรองเหตุการณ์ (Triage), แยกแยะ False Positive, ยืนยัน IOCs, และประเมินระดับความรุนแรงและขอบเขตความเสียหาย</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">3. CONTAINMENT (การควบคุมและจำกัดวง)</h5>
            <span class="reading-mob-tier-action">Isolate Host &middot; Limit Blast Radius</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">หยุดยั้งการแพร่กระจายของภัยคุกคาม: ดึงสาย LAN, ปิด Wi-Fi, กักกันโฮสต์ผ่าน EDR, หรือบล็อก IP/Port บนไฟร์วอลล์ เพื่อปกป้องระบบอื่นไม่ให้ได้รับผลกระทบ</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">4. ERADICATION (การกำจัดสาเหตุ)</h5>
            <span class="reading-mob-tier-action">Malware Removal &middot; Root-Cause Patching</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ลบมัลแวร์ทั้งหมดออกจากระบบ, ล้างเครื่องและติดตั้งระบบใหม่ (Re-imaging), รีเซ็ตรหัสผ่านบัญชีที่ถูกเจาะ, และอัปเดตแพตช์อุดช่องโหว่ที่เป็นต้นเหตุของการบุกรุก</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">05</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">5. RECOVERY (การกู้คืนระบบ)</h5>
            <span class="reading-mob-tier-action">Restore &middot; Validate &middot; Production Return</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">กู้คืนระบบและข้อมูลจาก Backup ที่ปลอดภัยและผ่านการตรวจสอบแล้ว, ทดสอบการทำงานและความมั่นคงปลอดภัย, ก่อนทยอยเปิดให้บริการตามปกติและเฝ้าระวังอย่างใกล้ชิด</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">06</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">6. POST-INCIDENT REVIEW (การทบทวนหลังเหตุการณ์)</h5>
            <span class="reading-mob-tier-action">Lessons Learned &middot; IRP Improvement</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จัดประชุมสรุปบทเรียน (Lessons Learned) ร่วมกับผู้มีส่วนได้ส่วนเสีย, จัดทำรายงานเหตุการณ์ฉบับสมบูรณ์, และนำข้อบกพร่องที่พบกลับไปปรับปรุงแผนในขั้นตอน Preparation</p>
      </div>
    </div>
  </div>
</div>
`,

  // 5.2.9 MITRE ATT&CK Framework: Tactics vs. Techniques vs. Procedures
  mitreAttackTacticTechnique: `
<div class="reading-diagram-card" data-diagram="mitreAttackTacticTechnique" role="region" aria-label="MITRE ATT&CK Framework: Tactics, Techniques and Procedures">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Threat Architecture Taxonomy</span>
    <h4 class="reading-diagram-title">MITRE ATT&CK Framework: Tactics vs. Techniques vs. Procedures (TTPs)</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 900 280" class="reading-diagram-svg" aria-label="Hierarchical architecture of MITRE ATT&CK showing Tactics as Why, Techniques as How, and Procedures as Execution" role="img">
      <g>
        <rect x="25" y="25" width="255" height="230" rx="8" class="diag-box diag-box-blue" />
        <rect x="40" y="37" width="80" height="22" rx="4" fill="#3b82f6" />
        <text x="80" y="48" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">TACTIC</text>
        <text x="40" y="80" class="diag-text-title" font-size="14px" font-weight="700">The "WHY" (เป้าหมายยุทธวิธี)</text>
        <text x="40" y="102" class="diag-text-sub" font-size="11.5px">เป้าหมายสูงสุดที่ศัตรูต้องการบรรลุ:</text>
        <text x="40" y="126" class="diag-text-sub" font-size="11px">&bull; Initial Access (การเข้าถึงระบบครั้งแรก)</text>
        <text x="40" y="148" class="diag-text-sub" font-size="11px">&bull; Execution (การสั่งรันโค้ดอันตราย)</text>
        <text x="40" y="170" class="diag-text-sub" font-size="11px">&bull; Persistence (การฝังตัวระยะยาว)</text>
        <text x="40" y="192" class="diag-text-sub" font-size="11px">&bull; Lateral Movement (การเคลื่อนที่แนวราบ)</text>
        <text x="40" y="214" class="diag-text-sub" font-size="11px">&bull; Exfiltration (การขโมยส่งข้อมูลออก)</text>
        <text x="40" y="238" fill="#3b82f6" font-size="10.5px" font-weight="700">ตัวอย่าง Tactics / Goal examples</text>
      </g>

      <path d="M 280 140 H 320" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="320,140 310,135 310,145" fill="var(--diag-connector, #64748b)" />
      <text x="300" y="130" fill="var(--text-sub, #64748b)" font-size="9.5px" text-anchor="middle">บรรลุเป้าด้วย</text>

      <g>
        <rect x="320" y="25" width="255" height="230" rx="8" class="diag-box diag-box-banner" />
        <rect x="335" y="37" width="90" height="22" rx="4" fill="#6366f1" />
        <text x="380" y="48" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">TECHNIQUE</text>
        <text x="335" y="80" class="diag-text-title" font-size="14px" font-weight="700">The "HOW" (วิธีการ/เทคนิค)</text>
        <text x="335" y="102" class="diag-text-sub" font-size="11.5px">วิธีที่ศัตรูใช้กระทำเพื่อบรรลุเป้าหมาย:</text>
        <text x="335" y="126" class="diag-text-sub" font-size="11px">&bull; Spearphishing Link (T1566.002)</text>
        <text x="335" y="148" class="diag-text-sub" font-size="11px">&bull; Pass the Hash (T1550.002)</text>
        <text x="335" y="170" class="diag-text-sub" font-size="11px">&bull; PowerShell (T1059.001)</text>
        <text x="335" y="192" class="diag-text-sub" font-size="11px">&bull; Scheduled Task / Job (T1053)</text>
        <text x="335" y="214" class="diag-text-sub" font-size="11px">&bull; Valid Accounts (T1078)</text>
        <text x="335" y="238" fill="#6366f1" font-size="10.5px" font-weight="700">รวม Sub-techniques ย่อยเฉพาะเจาะจง</text>
      </g>

      <path d="M 575 140 H 615" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="615,140 605,135 605,145" fill="var(--diag-connector, #64748b)" />
      <text x="595" y="130" fill="var(--text-sub, #64748b)" font-size="9.5px" text-anchor="middle">ลงมือปฏิบัติจริง</text>

      <g>
        <rect x="615" y="25" width="260" height="230" rx="8" class="diag-box diag-box-blue" />
        <rect x="630" y="37" width="95" height="22" rx="4" fill="#0ea5e9" />
        <text x="677" y="48" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">PROCEDURE</text>
        <text x="630" y="80" class="diag-text-title" font-size="14px" font-weight="700">The "EXECUTION" (การลงมือ)</text>
        <text x="630" y="102" class="diag-text-sub" font-size="11.5px">ขั้นตอน คำสั่ง หรือมัลแวร์ที่ตรวจพบจริง:</text>
        <text x="630" y="126" class="diag-text-sub" font-size="11px">&bull; คำสั่ง PowerShell ดาวน์โหลดเพย์โหลด</text>
        <text x="630" y="148" class="diag-text-sub" font-size="11px">&bull; กลุ่ม APT29 ใช้งานเครื่องมือ Mimikatz</text>
        <text x="630" y="170" class="diag-text-sub" font-size="11px">&bull; การปรับ Registry key รันโปรแกรมอัตโนมัติ</text>
        <text x="630" y="192" class="diag-text-sub" font-size="11px">&bull; การส่งอีเมลหลอกลวงพร้อมไฟล์แนบ zip</text>
        <text x="630" y="214" class="diag-text-sub" font-size="11px">&bull; การเข้ารหัสไฟล์ด้วยมัลแวร์ LockBit</text>
        <text x="630" y="238" fill="#0ea5e9" font-size="10.5px" font-weight="700">พฤติกรรมจริงในรายงานข่าวกรอง CTI</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="MITRE ATT&CK Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">WHY</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">TACTIC (เป้าหมายยุทธวิธีของศัตรู)</h5>
            <span class="reading-mob-tier-action">Adversary Goal &middot; The "Why"</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">อธิบายว่า "ผู้โจมตีกำลังพยายามทำอะไรเพื่ออะไร" เช่น Initial Access (เจาะเข้าสู่เครือข่าย), Lateral Movement (ย้ายฝั่งไปยังเซิร์ฟเวอร์สำคัญ), Exfiltration (ขโมยข้อมูลออกนอกองค์กร)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">HOW</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">TECHNIQUE (เทคนิควิธีการที่นำมาใช้)</h5>
            <span class="reading-mob-tier-action">Action &middot; The "How"</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">อธิบายว่า "ผู้โจมตีใช้วิธีการใดเพื่อให้บรรลุเป้าหมายของ Tactic" เช่น ใช้ Phishing เพื่อได้ Initial Access, หรือใช้ Pass-the-Hash เพื่อทำการ Lateral Movement ในระบบ Windows Domain</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">EXE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PROCEDURE (ขั้นตอนปฏิบัติและโค้ดคำสั่งจริง)</h5>
            <span class="reading-mob-tier-action">Execution &middot; Real-World Observation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">อธิบายพฤติกรรมเฉพาะเจาะจงที่ตรวจพบในโลกจริง เช่น คำสั่ง command line ที่พิมพ์, เครื่องมือที่ใช้ (Mimikatz, Cobalt Strike), หรือสคริปต์ที่กลุ่มภัยคุกคาม (APT Groups) ใช้งานจริง</p>
      </div>
    </div>
  </div>
</div>
`,

  // 5.5.3 Security Testing Matrix: Threat Modeling vs SAST vs DAST vs Pentest
  securityTestingMatrix: `
<div class="reading-diagram-card" data-diagram="securityTestingMatrix" role="region" aria-label="Security Testing Matrix: Threat Modeling, SAST, DAST, and Penetration Testing">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Testing Methodology Comparison</span>
    <h4 class="reading-diagram-title">Security Testing Matrix: Threat Modeling vs. SAST vs. DAST vs. Penetration Testing</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 900 320" class="reading-diagram-svg" aria-label="Comparative matrix comparing Threat Modeling, SAST, DAST, and Penetration Testing across the SDLC" role="img">
      <rect x="25" y="20" width="850" height="28" rx="6" fill="var(--bg-subtle, #1e293b)" stroke="var(--diag-connector, #64748b)" stroke-width="1" />
      <text x="130" y="35" class="diag-text-title" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">1. DESIGN PHASE (ออกแบบ)</text>
      <text x="345" y="35" class="diag-text-title" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">2. CODING PHASE (พัฒนา)</text>
      <text x="560" y="35" class="diag-text-title" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">3. TESTING PHASE (ทดสอบ)</text>
      <text x="770" y="35" class="diag-text-title" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">4. DEPLOY / OPS (ใช้งาน)</text>

      <g>
        <rect x="25" y="60" width="205" height="240" rx="8" class="diag-box diag-box-blue" />
        <rect x="37" y="72" width="105" height="20" rx="4" fill="#3b82f6" />
        <text x="89" y="82" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Threat Modeling</text>
        <text x="37" y="112" class="diag-text-title" font-size="13px" font-weight="700">การสร้างแบบจำลองภัย</text>
        <text x="37" y="134" class="diag-text-sub" font-size="11px">จังหวะ: ระยะออกแบบสถาปัตยกรรม</text>
        <text x="37" y="154" class="diag-text-sub" font-size="11px">มุมมอง: Architectural Review</text>
        <text x="37" y="174" class="diag-text-sub" font-size="11px">กรอบการคิด: STRIDE Framework</text>
        <text x="37" y="196" class="diag-text-sub" font-size="10.5px">เป้าหมาย: ค้นหาจุดอ่อนการออกแบบ</text>
        <text x="37" y="216" class="diag-text-sub" font-size="10.5px">ก่อนเริ่มเขียนโค้ดบรรทัดแรก</text>
        <text x="37" y="246" fill="#3b82f6" font-size="10px" font-weight="700">แก้ข้อบกพร่องได้ต้นทุนต่ำสุด</text>
      </g>

      <g>
        <rect x="240" y="60" width="205" height="240" rx="8" class="diag-box diag-box-banner" />
        <rect x="252" y="72" width="75" height="20" rx="4" fill="#6366f1" />
        <text x="289" y="82" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">SAST (Static)</text>
        <text x="252" y="112" class="diag-text-title" font-size="13px" font-weight="700">การทดสอบโค้ดแบบสถิต</text>
        <text x="252" y="134" class="diag-text-sub" font-size="11px">จังหวะ: ขณะกำลังพัฒนา (Shift Left)</text>
        <text x="252" y="154" class="diag-text-sub" font-size="11px">มุมมอง: White-box (เห็นซอร์สโค้ด)</text>
        <text x="252" y="174" class="diag-text-sub" font-size="11px">สภาวะ: โปรแกรมไม่ต้องรันทำงาน</text>
        <text x="252" y="196" class="diag-text-sub" font-size="10.5px">เป้าหมาย: Insecure coding rules,</text>
        <text x="252" y="216" class="diag-text-sub" font-size="10.5px">Hardcoded secrets, SQLi syntax</text>
        <text x="252" y="246" fill="#6366f1" font-size="10px" font-weight="700">ตรวจพบข้อผิดพลาดตั้งแต่เนิ่น ๆ</text>
      </g>

      <g>
        <rect x="455" y="60" width="205" height="240" rx="8" class="diag-box diag-box-blue" />
        <rect x="467" y="72" width="90" height="20" rx="4" fill="#0ea5e9" />
        <text x="512" y="82" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">DAST (Dynamic)</text>
        <text x="467" y="112" class="diag-text-title" font-size="13px" font-weight="700">การทดสอบแบบพลวัต</text>
        <text x="467" y="134" class="diag-text-sub" font-size="11px">จังหวะ: ระยะทดสอบ / Staging</text>
        <text x="467" y="154" class="diag-text-sub" font-size="11px">มุมมอง: Black-box (ไม่เห็นโค้ด)</text>
        <text x="467" y="174" class="diag-text-sub" font-size="11px">สภาวะ: แอปพลิเคชันต้องรันทำงาน</text>
        <text x="467" y="196" class="diag-text-sub" font-size="10.5px">เป้าหมาย: ปัญหาการยืนยันตัวตน,</text>
        <text x="467" y="216" class="diag-text-sub" font-size="10.5px">Server misconfiguration, Runtime</text>
        <text x="467" y="246" fill="#0ea5e9" font-size="10px" font-weight="700">ประเมินผลลัพธ์ผ่าน HTTP Interface</text>
      </g>

      <g>
        <rect x="670" y="60" width="205" height="240" rx="8" class="diag-box diag-box-banner" />
        <rect x="682" y="72" width="95" height="20" rx="4" fill="#ef4444" />
        <text x="729" y="82" fill="#ffffff" font-size="10.5px" font-weight="700" text-anchor="middle" dominant-baseline="central">Penetration Test</text>
        <text x="682" y="112" class="diag-text-title" font-size="13px" font-weight="700">การทดสอบเจาะระบบ</text>
        <text x="682" y="134" class="diag-text-sub" font-size="11px">จังหวะ: ระบบพร้อมใช้งาน / ในองค์กร</text>
        <text x="682" y="154" class="diag-text-sub" font-size="11px">มุมมอง: Black/Gray/White-box</text>
        <text x="682" y="174" class="diag-text-sub" font-size="11px">สภาวะ: จำลองการโจมตีของศัตรูจริง</text>
        <text x="682" y="196" class="diag-text-sub" font-size="10.5px">เป้าหมาย: Exploit ช่องโหว่จริง,</text>
        <text x="682" y="216" class="diag-text-sub" font-size="10.5px">เชื่อมโยงหลายจุดอ่อน (Chaining)</text>
        <text x="682" y="246" fill="#ef4444" font-size="10px" font-weight="700">พิสูจน์ผลกระทบธุรกิจจริง (Impact)</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Security Testing Matrix Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">01</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">THREAT MODELING (การสร้างแบบจำลองภัยคุกคาม)</h5>
            <span class="reading-mob-tier-action">Design Phase &middot; STRIDE</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ดำเนินการในระยะออกแบบสถาปัตยกรรม (Design Phase) ก่อนเขียนโค้ด เพื่อวิเคราะห์ Trust Boundaries, Data Flow Diagrams และค้นหาข้อบกพร่องเชิงโครงสร้างด้วย STRIDE</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-report">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">02</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">SAST (Static Application Security Testing)</h5>
            <span class="reading-mob-tier-action">Coding Phase &middot; White-Box &middot; Code at Rest</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">วิเคราะห์ซอร์สโค้ดและไบนารีโดยตรงในขณะที่โปรแกรมยังไม่รันทำงาน สอดคล้องกับแนวคิด Shift-Left เพื่อตรวจหา Insecure Coding, Hardcoded Credentials และข้อผิดพลาดทางไวยากรณ์</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">03</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DAST (Dynamic Application Security Testing)</h5>
            <span class="reading-mob-tier-action">Testing Phase &middot; Black-Box &middot; Running App</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ทดสอบแอปพลิเคชันจากภายนอกขณะที่โปรแกรมกำลังทำงานจริงในสภาพแวดล้อมจำลอง (Staging) ผ่าน HTTP Request/Response โดยไม่ต้องเห็นซอร์สโค้ด เพื่อหาข้อผิดพลาดด้าน Authentication และเซิร์ฟเวอร์</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">04</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PENETRATION TESTING (การทดสอบเจาะระบบ)</h5>
            <span class="reading-mob-tier-action">Ops Phase &middot; Active Exploitation &middot; Impact Proof</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">การจำลองการโจมตีเสมือนจริงที่ได้รับอนุญาตอย่างเป็นลายลักษณ์อักษร (Rules of Engagement) โดยผู้เชี่ยวชาญจะพยายามโจมตีเจาะระบบจริงเพื่อพิสูจน์ผลกระทบทางธุรกิจและหาเส้นทางการโจมตีที่ซับซ้อน</p>
      </div>
    </div>
  </div>
</div>
`,

  // 5.4.1 Asset Lifecycle Management & EOL Compensating Controls
  assetLifecycleAndEol: `
<div class="reading-diagram-card" data-diagram="assetLifecycleAndEol" role="region" aria-label="Asset Lifecycle Management and EOL Compensating Controls">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Asset Protection Governance</span>
    <h4 class="reading-diagram-title">Asset Lifecycle Management (ALM) &amp; EOL/EOS Compensating Controls</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 900 320" class="reading-diagram-svg" aria-label="Asset Lifecycle stages with dedicated branch for End of Life compensating controls" role="img">
      <g>
        <rect x="25" y="25" width="125" height="75" rx="6" class="diag-box diag-box-blue" />
        <text x="87" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">1. Plan</text>
        <text x="87" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">วางแผนจัดซื้อ</text>
      </g>

      <path d="M 150 62 H 170" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="170,62 163,58 163,66" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="170" y="25" width="125" height="75" rx="6" class="diag-box diag-box-blue" />
        <text x="232" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">2. Acquire</text>
        <text x="232" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ลงทะเบียนทรัพย์สิน</text>
      </g>

      <path d="M 295 62 H 315" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="315,62 308,58 308,66" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="315" y="25" width="125" height="75" rx="6" class="diag-box diag-box-blue" />
        <text x="377" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">3. Deploy</text>
        <text x="377" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ตั้งค่าตาม Baseline</text>
      </g>

      <path d="M 440 62 H 460" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="460,62 453,58 453,66" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="460" y="25" width="125" height="75" rx="6" class="diag-box diag-box-banner" />
        <text x="522" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">4. Maintain</text>
        <text x="522" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ลงแพตช์ &amp; ดูแล</text>
      </g>

      <path d="M 585 62 H 605" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="605,62 598,58 598,66" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="605" y="25" width="125" height="75" rx="6" class="diag-box diag-box-blue" />
        <text x="667" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">5. Monitor</text>
        <text x="667" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">ตรวจจับ Drift/ช่องโหว่</text>
      </g>

      <path d="M 730 62 H 750" stroke="var(--diag-connector, #64748b)" stroke-width="2" fill="none" />
      <polygon points="750,62 743,58 743,66" fill="var(--diag-connector, #64748b)" />

      <g>
        <rect x="750" y="25" width="125" height="75" rx="6" class="diag-box diag-box-blue" />
        <text x="812" y="52" class="diag-text-title" font-size="12px" font-weight="700" text-anchor="middle">6. Dispose</text>
        <text x="812" y="72" class="diag-text-sub" font-size="10.5px" text-anchor="middle">NIST 800-88 ล้างสื่อ</text>
      </g>

      <path d="M 522 100 V 135" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3" fill="none" />
      <polygon points="522,135 517,127 527,127" fill="#ef4444" />
      <text x="532" y="122" fill="#ef4444" font-size="9.5px" font-weight="700">เข้าสู่ภาวะ EOL / EOS</text>

      <g>
        <rect x="180" y="140" width="684" height="155" rx="8" fill="var(--bg-subtle, #1e293b)" stroke="#ef4444" stroke-width="1.5" />
        <rect x="195" y="152" width="160" height="22" rx="4" fill="#ef4444" />
        <text x="275" y="163" fill="#ffffff" font-size="11px" font-weight="700" text-anchor="middle" dominant-baseline="central">EOL / EOS COMPENSATING CONTROLS</text>
        <text x="370" y="163" class="diag-text-title" font-size="12px" font-weight="700">มาตรการควบคุมชดเชยเมื่อผู้ผลิตหยุดสนับสนุนแพตช์:</text>

        <g>
          <rect x="195" y="185" width="150" height="95" rx="6" class="diag-box diag-box-blue" />
          <text x="210" y="206" class="diag-text-title" font-size="11.5px" font-weight="700">1. Network Isolation</text>
          <text x="210" y="228" class="diag-text-sub" font-size="10px">แยกเข้า Isolated VLAN</text>
          <text x="210" y="246" class="diag-text-sub" font-size="10px">ตัดขาดจากอินเทอร์เน็ต</text>
          <text x="210" y="264" class="diag-text-sub" font-size="10px">จำกัด Blast Radius</text>
        </g>

        <g>
          <rect x="360" y="185" width="150" height="95" rx="6" class="diag-box diag-box-banner" />
          <text x="375" y="206" class="diag-text-title" font-size="11.5px" font-weight="700">2. Virtual Patching</text>
          <text x="375" y="228" class="diag-text-sub" font-size="10px">ติดตั้ง WAF / IPS ขวาง</text>
          <text x="375" y="246" class="diag-text-sub" font-size="10px">กรอง Exploit Payload</text>
          <text x="375" y="264" class="diag-text-sub" font-size="10px">ป้องกันช่องโหว่ระดับทราฟฟิก</text>
        </g>

        <g>
          <rect x="525" y="185" width="150" height="95" rx="6" class="diag-box diag-box-blue" />
          <text x="540" y="206" class="diag-text-title" font-size="11.5px" font-weight="700">3. Access Restriction</text>
          <text x="540" y="228" class="diag-text-sub" font-size="10px">ปิดเซอร์วิสที่ไม่จำเป็น</text>
          <text x="540" y="246" class="diag-text-sub" font-size="10px">จำกัดสิทธิ์ Least Privilege</text>
          <text x="540" y="264" class="diag-text-sub" font-size="10px">ห้ามใช้อุปกรณ์ USB ทั่วไป</text>
        </g>

        <g>
          <rect x="690" y="185" width="160" height="95" rx="6" class="diag-box diag-box-banner" />
          <text x="705" y="206" class="diag-text-title" font-size="11.5px" font-weight="700">4. Enhanced Telemetry</text>
          <text x="705" y="228" class="diag-text-sub" font-size="10px">ส่ง Log ละเอียดเข้า SIEM</text>
          <text x="705" y="246" class="diag-text-sub" font-size="10px">ตรวจจับความผิดปกติเข้มงวด</text>
          <text x="705" y="264" class="diag-text-sub" font-size="10px">เร่งแผนย้ายระบบ (Migration)</text>
        </g>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Asset Lifecycle Management Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ALM</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">6 ขั้นตอนวงจรชีวิตทรัพย์สิน (Asset Lifecycle Management)</h5>
            <span class="reading-mob-tier-action">Standard Governance Stages</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">1. Plan (วางแผนสเปกและความปลอดภัย) &rarr; 2. Acquire (จัดซื้อและติดแท็กทรัพย์สิน) &rarr; 3. Deploy (คอนฟิกตาม Baseline) &rarr; 4. Maintain (ติดตั้ง Patch) &rarr; 5. Monitor (ตรวจสอบ Drift) &rarr; 6. Dispose (ล้างข้อมูลตาม NIST 800-88)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">EOL</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">COMPENSATING CONTROLS สำหรับอุปกรณ์ EOL/EOS</h5>
            <span class="reading-mob-tier-action">Unpatchable Legacy Risk Mitigation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">เมื่ออุปกรณ์สิ้นสุดการสนับสนุน (End of Support) และไม่มี Patch ความปลอดภัยอีกต่อไป ต้องใช้มาตรการชดเชย: 1. Network Segmentation (ตัดขาดเข้า VLAN พิเศษ), 2. Virtual Patching (ใช้ WAF/IPS กรองการโจมตี), 3. ปิดพอร์ตและเซอร์วิสที่ไม่จำเป็น, และ 4. เฝ้าระวัง Log เป็นพิเศษ</p>
      </div>
    </div>
  </div>
</div>
`,

// 2.2.7 Data Backup Strategies & Recovery Chains
  backupRestoreChains: `
<div class="reading-diagram-card reading-backup-chains" data-diagram="backupRestoreChains" role="region" aria-label="Data Backup Strategies and Recovery Chains: Differential vs Incremental">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Recovery Architecture</span>
    <h4 class="reading-diagram-title">Data Backup Strategies &amp; Recovery Chains: Differential vs. Incremental</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 410" class="reading-diagram-svg" aria-label="Comparison of restore chains for Differential and Incremental backups after a Thursday disaster" role="img">
      <!-- Days Timeline Track -->
      <g>
        <rect x="30" y="16" width="800" height="36" rx="6" class="diag-box diag-box-banner" />
        <text x="50" y="39" class="diag-text-label" font-weight="700">WEEKLY TIMELINE:</text>
        <text x="190" y="39" class="diag-text-title" font-weight="700" fill="var(--blue, #3b82f6)">SUN (Full Backup)</text>
        <text x="350" y="39" class="diag-text-label">MON</text>
        <text x="470" y="39" class="diag-text-label">TUE</text>
        <text x="590" y="39" class="diag-text-label">WED</text>
        <rect x="690" y="22" width="130" height="24" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1" />
        <text x="755" y="38" text-anchor="middle" font-size="11px" font-weight="700" fill="#ef4444">THU 09:00 CRASH</text>
      </g>

      <!-- Track 1: Differential Backup Strategy -->
      <g transform="translate(0, 68)">
        <rect x="30" y="0" width="800" height="150" rx="8" class="diag-box" />
        <rect x="42" y="10" width="220" height="24" rx="4" fill="rgba(59, 130, 246, 0.12)" />
        <text x="50" y="26" class="diag-text-title" font-weight="700" fill="var(--blue, #3b82f6)">STRATEGY A: DIFFERENTIAL BACKUP</text>
        <text x="50" y="44" class="diag-text-sub" font-size="11.5px">สำรองเฉพาะข้อมูลที่เปลี่ยนนับจาก Full ล่าสุด (ขนาดไฟล์สำรองโตขึ้นทุกวัน)</text>

        <!-- Daily Backup Footprint -->
        <g transform="translate(150, 42)">
          <rect x="0" y="10" width="70" height="50" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="var(--blue, #3b82f6)" />
          <text x="35" y="32" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">Sun Full</text>
          <text x="35" y="48" text-anchor="middle" font-size="9.5px" fill="var(--text-secondary)">100% Base</text>

          <rect x="150" y="35" width="60" height="25" rx="3" class="diag-box diag-box-banner" />
          <text x="180" y="51" text-anchor="middle" font-size="10px" fill="var(--text)">Mon Δ</text>

          <rect x="270" y="25" width="60" height="35" rx="3" class="diag-box diag-box-banner" />
          <text x="300" y="46" text-anchor="middle" font-size="10px" fill="var(--text)">Tue Δ</text>

          <rect x="390" y="10" width="65" height="50" rx="3" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5" />
          <text x="422" y="32" text-anchor="middle" font-size="10px" font-weight="700" fill="#f59e0b">Wed Diff</text>
          <text x="422" y="48" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Mon+Tue+Wed</text>
        </g>

        <!-- Recovery Action Sequence -->
        <g transform="translate(42, 108)">
          <rect x="0" y="0" width="776" height="34" rx="5" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.4)" />
          <text x="14" y="21" font-size="11.5px" font-weight="700" fill="var(--green, #10b981)">BEFORE NEXT THURSDAY BACKUP (2 BACKUP SETS):</text>
          <text x="340" y="21" font-size="12px" font-weight="700" fill="var(--text)">[1] Restore Sun Full (Base)</text>
          <text x="520" y="21" font-size="12px" fill="var(--text-secondary)">&rarr;</text>
          <text x="540" y="21" font-size="12px" font-weight="700" fill="#f59e0b">[2] Restore Wed Diff</text>
          <rect x="710" y="6" width="56" height="22" rx="3" fill="#10b981" />
          <text x="738" y="21" text-anchor="middle" font-size="10px" font-weight="700" fill="#ffffff">2 SETS</text>
        </g>
      </g>

      <!-- Track 2: Incremental Backup Strategy -->
      <g transform="translate(0, 230)">
        <rect x="30" y="0" width="800" height="150" rx="8" class="diag-box" />
        <rect x="42" y="10" width="220" height="24" rx="4" fill="rgba(16, 185, 129, 0.12)" />
        <text x="50" y="26" class="diag-text-title" font-weight="700" fill="var(--green, #10b981)">STRATEGY B: INCREMENTAL BACKUP</text>
        <text x="50" y="44" class="diag-text-sub" font-size="11.5px">สำรองเฉพาะข้อมูลที่เปลี่ยนนับจาก Backup ครั้งล่าสุด (ขนาดขึ้นกับข้อมูลที่เปลี่ยน)</text>

        <!-- Daily Backup Footprint -->
        <g transform="translate(150, 42)">
          <rect x="0" y="10" width="70" height="50" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="var(--blue, #3b82f6)" />
          <text x="35" y="32" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">Sun Full</text>
          <text x="35" y="48" text-anchor="middle" font-size="9.5px" fill="var(--text-secondary)">100% Base</text>

          <rect x="150" y="35" width="60" height="25" rx="3" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
          <text x="180" y="51" text-anchor="middle" font-size="10px" font-weight="600" fill="#10b981">Mon Incr</text>

          <rect x="270" y="35" width="60" height="25" rx="3" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
          <text x="300" y="51" text-anchor="middle" font-size="10px" font-weight="600" fill="#10b981">Tue Incr</text>

          <rect x="390" y="35" width="60" height="25" rx="3" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
          <text x="420" y="51" text-anchor="middle" font-size="10px" font-weight="600" fill="#10b981">Wed Incr</text>
        </g>

        <!-- Recovery Action Sequence -->
        <g transform="translate(42, 108)">
          <rect x="0" y="0" width="776" height="34" rx="5" fill="rgba(245, 158, 11, 0.08)" stroke="rgba(245, 158, 11, 0.4)" />
          <text x="14" y="21" font-size="11.5px" font-weight="700" fill="#f59e0b">BEFORE NEXT THURSDAY BACKUP (4 BACKUP SETS):</text>
          <text x="340" y="21" font-size="11px" font-weight="600" fill="var(--text)">[1] Sun Full &rarr; [2] Mon Inc &rarr; [3] Tue Inc &rarr; [4] Wed Inc</text>
          <rect x="710" y="6" width="56" height="22" rx="3" fill="#f59e0b" />
          <text x="738" y="21" text-anchor="middle" font-size="10px" font-weight="700" fill="#ffffff">4 SETS</text>
        </g>
      </g>

      <!-- Bottom Trade-off Banner -->
      <g transform="translate(30, 386)">
        <text x="400" y="16" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">RESTORE DEPENDENCIES: Full + latest Diff (2 sets) | Full + all later Incr (N sets); elapsed time depends on the system</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Backup and Restore Chains Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">DIFF</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DIFFERENTIAL BACKUP (2-Step Recovery Chain)</h5>
            <span class="reading-mob-tier-action">Restore Full + latest Diff &bull; 2 Sets</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สิ่งที่สำรอง:</strong> บันทึกเฉพาะไฟล์ที่มีการเปลี่ยนแปลงนับตั้งแต่ Full Backup ครั้งล่าสุด (ขนาดไฟล์จะใหญ่ขึ้นเรื่อย ๆ ในแต่ละวัน)<br><strong>การกู้คืนก่อน Backup วันพฤหัสรอบถัดไป:</strong> ใช้เพียง <code>Full (อาทิตย์) + Diff (พุธ)</code> = <strong>2 ชุดเท่านั้น</strong> กู้คืนได้รวดเร็ว ลดความเสี่ยงจากสื่อบันทึกสูญหาย</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">INCR</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INCREMENTAL BACKUP (Sequential Replay Chain)</h5>
            <span class="reading-mob-tier-action">Restore Full + all later Incr &bull; Sequential Replay</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สิ่งที่สำรอง:</strong> บันทึกเฉพาะสิ่งที่เปลี่ยนนับจาก Backup ครั้งก่อนหน้า (ปริมาณงานขึ้นกับข้อมูลที่เปลี่ยน)<br><strong>การกู้คืนก่อน Backup วันพฤหัสรอบถัดไป:</strong> ต้องกู้เรียงลำดับ <code>Full (อาทิตย์) &rarr; Incr (จันทร์) &rarr; Incr (อังคาร) &rarr; Incr (พุธ)</code> รวม <strong>4 ชุด</strong> หากเทปชุดใดชุดหนึ่งเสียหาย จะไม่สามารถกู้คืนข้อมูลต่อได้</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RULE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ARCHIVE-BIT FILE BACKUPS (ตัวอย่างกลไกบางระบบ)</h5>
            <span class="reading-mob-tier-action">Key Mechanism Trigger</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ในระบบแบ็กอัพไฟล์ที่ใช้ Archive Bit (ไม่ใช่ทุกผลิตภัณฑ์): &bull; <strong>Full Backup:</strong> สำรองทุกไฟล์ และ <em>เคลียร์ Archive Bit (เซ็ตเป็น 0)</em><br>&bull; <strong>Differential Backup:</strong> สำรองไฟล์ที่มีการเปลี่ยนแปลง แต่ <em>ไม่เคลียร์ Archive Bit (ยังคงเป็น 1)</em><br>&bull; <strong>Incremental Backup:</strong> สำรองไฟล์ที่มีการเปลี่ยนแปลง และ <em>เคลียร์ Archive Bit (เซ็ตเป็น 0)</em></p>
      </div>
    </div>
  </div>
</div>
`,

  // 2.2.7 Disaster Recovery Site Tiers Comparison
  drSiteTiers: `
<div class="reading-diagram-card reading-dr-sites" data-diagram="drSiteTiers" role="region" aria-label="Disaster Recovery Site Tiers: Hot, Warm, Cold and Cloud DR Comparison">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Disaster Recovery Sites</span>
    <h4 class="reading-diagram-title">Disaster Recovery Site Tiers Comparison: Hot vs. Warm vs. Cold vs. Cloud</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 300" class="reading-diagram-svg" aria-label="Four DR site tiers compared by RTO, cost, data currency, and hardware readiness" role="img">
      <!-- Col 1: Hot Site -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-rose" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#ef4444">HOT SITE</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Example recovery:</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#ef4444">Minutes to Hours</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Configured replication</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">and tested recovery paths</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Fully populated, active,</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">identical live servers</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#ef4444">COST: $$$$$ (HIGHEST)</text>
        <text x="95" y="258" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Mission-Critical Systems</text>
      </g>

      <!-- Col 2: Warm Site -->
      <g transform="translate(230, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-amber" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#f59e0b">WARM SITE</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Example recovery:</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#f59e0b">Hours to Days (12-48h)</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Shipped / Cloud Backups</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Must restore from media</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Pre-installed baseline</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">Needs app config &amp; data</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#f59e0b">COST: $$$ (MODERATE)</text>
        <text x="95" y="258" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Balanced Trade-off</text>
      </g>

      <!-- Col 3: Cold Site -->
      <g transform="translate(435, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-blue" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">COLD SITE</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Example recovery:</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="var(--blue, #3b82f6)">Days to Weeks</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">No data stored on-site</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Fetch from off-site vault</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Empty shell (Power, HVAC,</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">raised floor, cabling only)</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--blue, #3b82f6)">COST: $ (LOWEST)</text>
        <text x="95" y="258" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Non-Urgent Operations</text>
      </g>

      <!-- Col 4: Cloud DR -->
      <g transform="translate(640, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-emerald" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">CLOUD DR (DRaaS)</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Example recovery:</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#10b981">Minutes to Hours</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Cloud snapshot sync</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Automated replication</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Virtual on-demand</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">Spin-up compute elastic</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">COST: PAY-AS-YOU-GO</text>
        <text x="95" y="258" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Flexible OpEx Model</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="DR Site Tiers Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">HOT</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">HOT SITE (ศูนย์กู้คืนระบบพร้อมใช้งานทันที)</h5>
            <span class="reading-mob-tier-action">Example: Minutes to Hours &bull; Cost: $$$$$</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีอุปกรณ์และระบบที่เหมือนกับไซต์หลักทุกประการ ข้อมูลมีการทำสำเนาจำลองแบบต่อเนื่อง (Real-time Mirroring) พร้อมสลับการทำงานได้ทันทีเมื่อไซต์หลักล่ม เหมาะกับงานที่หยุดชะงักไม่ได้ (Mission-Critical)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">WARM</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">WARM SITE (ศูนย์กู้คืนระบบติดตั้งอุปกรณ์พร้อมส่วนหนึ่ง)</h5>
            <span class="reading-mob-tier-action">Example: Hours to Days (12-48h) &bull; Cost: $$$</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีฮาร์ดแวร์พื้นฐานติดตั้งไว้แล้ว แต่ยังไม่มีข้อมูลล่าสุด ต้องนำข้อมูลสำรองจากเทปหรือคลาวด์มา Restore และคอนฟิกค่าก่อนเปิดบริการ เป็นจุดกึ่งกลางระหว่างต้นทุนและความเร็ว</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">COLD</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">COLD SITE (ศูนย์กู้คืนระบบแบบอาคารเปล่า)</h5>
            <span class="reading-mob-tier-action">Example: Days to Weeks &bull; Cost: $</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีเพียงพื้นที่อาคาร ระบบไฟฟ้า ระบบปรับอากาศ (HVAC) และการเดินสายสัญญาณ แต่ไม่มีเครื่องเซิร์ฟเวอร์หรือข้อมูลติดตั้งอยู่ ต้องสั่งซื้อและติดตั้งอุปกรณ์ใหม่ทั้งหมด ค่าใช้จ่ายถูกที่สุดแต่ใช้เวลากู้นานที่สุด</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">CLOUD</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CLOUD DR / DRaaS (การกู้คืนบนระบบคลาวด์)</h5>
            <span class="reading-mob-tier-action">Example: Minutes to Hours &bull; Pay-as-you-go</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ใช้โครงสร้างพื้นฐานคลาวด์ในการทำ Snapshots และสำรอง Image เมื่อเกิดภัยพิบัติอาจเปิด Virtual Machines ทดแทนได้เมื่อจัดเตรียมและทดสอบทรัพยากร ข้อมูล และการเชื่อมต่อไว้ จ่ายค่าบริการตามการใช้งานจริง (OpEx)</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Readiness and time ranges are illustrative, not guaranteed RTOs. Data freshness, capacity, dependencies and restore tests determine whether a site meets its objectives. / ความพร้อมและช่วงเวลาเป็นตัวอย่าง ต้องตรวจข้อมูล ความจุ จุดพึ่งพา และผลทดสอบ ไม่ใช่ชื่อศูนย์สำรองที่รับประกัน RTO</p>
</div>
`,

  // 3.1.3 Biometric Error Sensitivity Curves (FAR vs FRR vs CER)
  biometricSensitivityCurve: `
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
        <line x1="130" y1="50" x2="130" y2="300" stroke="var(--diag-connector, #64748b)" stroke-width="2" />
        <polygon points="130,42 125,52 135,52" fill="var(--diag-connector, #64748b)" />
        <text x="120" y="55" text-anchor="end" font-size="11px" font-weight="700" fill="var(--text)">High Error %</text>
        <text x="120" y="295" text-anchor="end" font-size="11px" font-weight="700" fill="var(--text)">0% Error</text>
        <text x="50" y="175" font-size="11.5px" font-weight="700" fill="var(--text)" transform="rotate(-90 50 175)" text-anchor="middle">ERROR RATE (อัตราความผิดพลาด)</text>

        <!-- X-Axis (Sensitivity Threshold) -->
        <line x1="130" y1="300" x2="790" y2="300" stroke="var(--diag-connector, #64748b)" stroke-width="2" />
        <polygon points="798,300 788,295 788,305" fill="var(--diag-connector, #64748b)" />
        <text x="460" y="324" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--text)">SENSITIVITY THRESHOLD &middot; ระดับความเข้มงวดของระบบสแกน</text>
        <text x="170" y="318" text-anchor="start" font-size="10.5px" fill="var(--text-secondary)">Low Sensitivity (ตรวจผ่อนปรน)</text>
        <text x="760" y="318" text-anchor="end" font-size="10.5px" fill="var(--text-secondary)">High Sensitivity (ตรวจเข้มงวด)</text>

        <!-- Grid Reference Lines -->
        <line x1="130" y1="180" x2="780" y2="180" stroke="var(--diag-connector, #64748b)" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
        <line x1="455" y1="50" x2="455" y2="300" stroke="var(--diag-connector, #64748b)" stroke-width="1" stroke-dasharray="3,3" opacity="0.6" />
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
        <text x="455" y="238" text-anchor="middle" font-size="10px" font-weight="600" fill="var(--text)">FAR = FRR (Test metric)</text>
      </g>

      <!-- Bottom Benchmark Footer -->
      <g transform="translate(30, 350)">
        <rect x="0" y="0" width="800" height="30" rx="5" class="diag-box diag-box-banner" />
        <text x="400" y="19" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EER compares like-for-like tests; choose operating thresholds for the use case.</text>
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
        <p class="reading-mob-tier-desc">ระบบตัดสินใจผิดพลาดโดย <strong>"อนุญาตให้ผู้ไม่มีสิทธิ์ผ่านเข้ามา"</strong> อาจมีผลต่อความมั่นคงปลอดภัยตามบริบท เกิดขึ้นเมื่อตั้งค่าระบบให้ผ่อนปรน (Low Sensitivity)</p>
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
        <p class="reading-mob-tier-desc">จุดตัดที่อัตราความผิดพลาด <strong>FAR เท่ากับ FRR พอดี</strong> ใช้เป็นตัวชี้วัดเปรียบเทียบความแม่นยำรวมของเทคโนโลยีไบโอเมตริกซ์: <strong>ค่า CER ใช้เทียบระบบได้เมื่อเงื่อนไขทดสอบเทียบกันได้ ไม่จำเป็นต้องเลือกจุดใช้งานที่ FAR = FRR</strong> (Compare like-for-like EER; choose a risk-appropriate operating point)</p>
      </div>
    </div>
  </div>
</div>
`,

  // 4.1.6 TCP 3-Way Handshake vs UDP Connectionless Transmission
  tcpHandshakeVsUdp: `
<div class="reading-diagram-card reading-transport-protocols" data-diagram="tcpHandshakeVsUdp" role="region" aria-label="TCP 3-Way Handshake versus UDP Connectionless Datagram Transmission">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Transport Layer Protocols</span>
    <h4 class="reading-diagram-title">TCP 3-Way Handshake vs. UDP Connectionless Transmission</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 380" class="reading-diagram-svg" aria-label="Comparison of TCP connection setup and reliable stream with UDP fire-and-forget datagram delivery" role="img">
      <!-- Left Panel: TCP Connection-Oriented -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="395" height="320" rx="8" class="diag-box diag-box-blue" />
        <rect x="15" y="12" width="365" height="26" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="197" y="29" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">TCP: 3-WAY HANDSHAKE (CONNECTION-ORIENTED)</text>

        <!-- Hosts Endpoints -->
        <text x="60" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">CLIENT</text>
        <line x1="60" y1="70" x2="60" y2="250" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <text x="335" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">SERVER</text>
        <line x1="335" y1="70" x2="335" y2="250" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- 1. SYN -->
        <line x1="60" y1="90" x2="330" y2="120" stroke="var(--blue, #3b82f6)" stroke-width="2" />
        <polygon points="334,120 324,116 326,124" fill="var(--blue, #3b82f6)" />
        <rect x="130" y="92" width="135" height="18" rx="3" fill="var(--panel-2, #0f172a)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="197" y="105" text-anchor="middle" font-size="10.5px" font-weight="700" fill="var(--blue, #3b82f6)">1. SYN (Seq = x)</text>

        <!-- 2. SYN-ACK -->
        <line x1="335" y1="135" x2="65" y2="165" stroke="#10b981" stroke-width="2" />
        <polygon points="61,165 71,161 69,169" fill="#10b981" />
        <rect x="110" y="137" width="175" height="18" rx="3" fill="var(--panel-2, #0f172a)" stroke="#10b981" stroke-width="1" />
        <text x="197" y="150" text-anchor="middle" font-size="10.5px" font-weight="700" fill="#10b981">2. SYN-ACK (Seq = y, Ack = x+1)</text>

        <!-- 3. ACK -->
        <line x1="60" y1="180" x2="330" y2="210" stroke="var(--blue, #3b82f6)" stroke-width="2" />
        <polygon points="334,210 324,206 326,214" fill="var(--blue, #3b82f6)" />
        <rect x="130" y="182" width="135" height="18" rx="3" fill="var(--panel-2, #0f172a)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="197" y="195" text-anchor="middle" font-size="10.5px" font-weight="700" fill="var(--blue, #3b82f6)">3. ACK (Ack = y+1)</text>

        <!-- Established Footer -->
        <rect x="15" y="240" width="365" height="68" rx="5" class="diag-box diag-box-banner" />
        <text x="197" y="258" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">ILLUSTRATIVE CONNECTION &middot; ORDERED BYTE STREAM</text>
        <text x="197" y="274" text-anchor="middle" font-size="10px" fill="var(--text-secondary)">&bull; Header: 20&ndash;60 Bytes &bull; In-Order Delivery &bull; Retransmission on Loss</text>
        <text x="197" y="292" text-anchor="middle" font-size="10px" fill="var(--blue, #3b82f6)">Use Cases: HTTP/HTTPS, SSH, SFTP, SMTP, Database</text>
      </g>

      <!-- Right Panel: UDP Connectionless -->
      <g transform="translate(440, 15)">
        <rect x="0" y="0" width="395" height="320" rx="8" class="diag-box diag-box-amber" />
        <rect x="15" y="12" width="365" height="26" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1" />
        <text x="197" y="29" text-anchor="middle" font-size="12px" font-weight="700" fill="#f59e0b">UDP: CONNECTIONLESS DATAGRAM (BEST-EFFORT)</text>

        <!-- Hosts Endpoints -->
        <text x="60" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">SENDER</text>
        <line x1="60" y1="70" x2="60" y2="250" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <text x="335" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">RECEIVER</text>
        <line x1="335" y1="70" x2="335" y2="250" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- Datagram 1 -->
        <line x1="60" y1="95" x2="330" y2="115" stroke="#f59e0b" stroke-width="2" />
        <polygon points="334,115 324,111 326,119" fill="#f59e0b" />
        <text x="197" y="103" text-anchor="middle" font-size="10.5px" font-weight="600" fill="var(--text)">Datagram 1 (No Handshake)</text>

        <!-- Datagram 2 -->
        <line x1="60" y1="140" x2="330" y2="160" stroke="#f59e0b" stroke-width="2" />
        <polygon points="334,160 324,156 326,164" fill="#f59e0b" />
        <text x="197" y="148" text-anchor="middle" font-size="10.5px" font-weight="600" fill="var(--text)">Datagram 2 (Immediate Send)</text>

        <!-- Datagram 3 (Dropped) -->
        <line x1="60" y1="185" x2="210" y2="200" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" />
        <circle cx="215" cy="200" r="8" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />
        <line x1="210" y1="195" x2="220" y2="205" stroke="#ef4444" stroke-width="1.5" />
        <line x1="220" y1="195" x2="210" y2="205" stroke="#ef4444" stroke-width="1.5" />
        <text x="270" y="204" font-size="10px" font-weight="700" fill="#ef4444">Packet Lost (No Retransmit)</text>

        <!-- UDP Footer -->
        <rect x="15" y="240" width="365" height="68" rx="5" class="diag-box diag-box-banner" />
        <text x="197" y="258" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">FIRE-AND-FORGET &middot; MINIMAL 8-BYTE HEADER</text>
        <text x="197" y="274" text-anchor="middle" font-size="10px" fill="var(--text-secondary)">&bull; Fixed 8B Header &bull; No Ordering &bull; No Acknowledgment Overhead</text>
        <text x="197" y="292" text-anchor="middle" font-size="10px" fill="#f59e0b">Use Cases: VoIP, Video Streaming, DNS Query, DHCP, SNMP</text>
      </g>

      <!-- Bottom Benchmark Banner -->
      <g transform="translate(25, 345)">
        <rect x="0" y="0" width="810" height="26" rx="4" class="diag-box diag-box-banner" />
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">PERFORMANCE CONTEXT: UDP avoids TCP setup/retransmission overhead &mdash; actual speed depends on application and network conditions</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="TCP vs UDP Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">TCP</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">TCP (Transmission Control Protocol)</h5>
            <span class="reading-mob-tier-action">Connection-Oriented &bull; Reliable In-Order</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>3-Way Handshake:</strong> ต้องจับมือ <code>SYN &rarr; SYN-ACK &rarr; ACK</code> ให้สำเร็จก่อนเริ่มส่งข้อมูล<br><strong>ความเชื่อถือได้:</strong> ให้บริการไบต์เรียงลำดับ (Sequencing) แต่การเชื่อมต่ออาจล้มเหลว และมีการส่งซ้ำเมื่อข้อมูลตกหล่น (Retransmission) มี Header ขนาด 20-60 Bytes เหมาะกับ Web (HTTPS), Mail (SMTP), SSH, File Transfer</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">UDP</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">UDP (User Datagram Protocol)</h5>
            <span class="reading-mob-tier-action">Connectionless &bull; Best-Effort Delivery</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>ส่งข้อมูลทันที:</strong> ไม่มีการจับมือ (No Handshake) และไม่มีการส่งซ้ำหากแพ็กเก็ตสูญหาย (Best-Effort)<br><strong>น้ำหนักเบา:</strong> Header ขนาดเพียง 8 Bytes คงที่ เหมาะกับงานที่ต้องการความต่อเนื่องแบบเรียลไทม์ เช่น วิดีโอสตรีมมิง, VoIP, DNS Queries, DHCP</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">NOTE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">เงื่อนไขด้านความเร็วและความหน่วง (ACC-D4-02)</h5>
            <span class="reading-mob-tier-action">Context-Dependent Performance</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ข้อได้เปรียบด้านความเร็วของ UDP เกิดจากการไม่มีภาระในการสร้างการเชื่อมต่อและไม่มีการหน่วงเวลาเพื่อรอข้อมูลที่ส่งซ้ำ แต่ UDP ไม่ได้รับประกันว่าจะส่งข้อมูลได้เร็วกว่าเสมอไป โดยความเร็วและความหน่วงจริงยังคงขึ้นอยู่กับสภาพแบนด์วิดท์ของเครือข่ายและการจัดการของแอปพลิเคชัน</p>
      </div>
    </div>
  </div>
</div>
`,

  // 4.1.8 IDS vs IPS Architectural Inspection Flow
  idsVsIpsInspectionFlow: `
<div class="reading-diagram-card reading-ids-ips" data-diagram="idsVsIpsInspectionFlow" role="region" aria-label="IDS vs IPS Architectural Flow: Passive Out-of-Band vs Active In-Line">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Network Security Devices</span>
    <h4 class="reading-diagram-title">IDS vs. IPS Inspection Flow: Passive Out-of-Band vs. Active In-Line</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 320" class="reading-diagram-svg" aria-label="Comparison showing passive IDS receiving mirrored SPAN traffic out-of-band versus active IPS sitting directly in-line to drop packets" role="img">
      <!-- Left: Passive IDS (Out-of-Band) -->
      <g transform="translate(25, 15)">
        <rect x="0" y="0" width="395" height="260" rx="8" class="diag-box diag-box-blue" />
        <rect x="15" y="12" width="365" height="26" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="197" y="29" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">IDS (PASSIVE &middot; OUT-OF-BAND &middot; DETECTIVE)</text>

        <!-- Main Traffic Path -->
        <rect x="30" y="70" width="80" height="40" rx="6" class="diag-box diag-box-banner" />
        <text x="70" y="94" text-anchor="middle" font-size="11px" font-weight="700">Router</text>

        <line x1="110" y1="90" x2="160" y2="90" stroke="var(--diag-connector, #64748b)" stroke-width="2" />
        <polygon points="166,90 158,86 158,94" fill="var(--diag-connector, #64748b)" />

        <rect x="166" y="70" width="80" height="40" rx="6" class="diag-box diag-box-banner" />
        <text x="206" y="94" text-anchor="middle" font-size="11px" font-weight="700">Switch</text>

        <line x1="246" y1="90" x2="300" y2="90" stroke="#10b981" stroke-width="2" />
        <polygon points="306,90 298,86 298,94" fill="#10b981" />

        <rect x="306" y="70" width="70" height="40" rx="6" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" stroke-width="1" />
        <text x="341" y="94" text-anchor="middle" font-size="10.5px" font-weight="700" fill="#10b981">Host PC</text>

        <!-- SPAN / TAP Mirror Downward -->
        <line x1="206" y1="110" x2="206" y2="155" stroke="var(--blue, #3b82f6)" stroke-width="2" stroke-dasharray="3,3" />
        <polygon points="206,161 202,153 210,153" fill="var(--blue, #3b82f6)" />
        <text x="212" y="136" font-size="9.5px" font-weight="600" fill="var(--blue, #3b82f6)">SPAN / Port Mirror (Copy)</text>

        <!-- IDS Appliance Box -->
        <rect x="126" y="165" width="160" height="45" rx="6" fill="rgba(59, 130, 246, 0.2)" stroke="var(--blue, #3b82f6)" stroke-width="1.5" />
        <text x="206" y="185" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">IDS SENSOR</text>
        <text x="206" y="200" text-anchor="middle" font-size="10px" fill="var(--text-secondary)">Passive Copy Analysis</text>

        <text x="197" y="235" text-anchor="middle" font-size="11px" font-weight="700" fill="#ef4444">&bull; ALERT / LOG ONLY &bull; Cannot Stop Attack in Real-Time</text>
      </g>

      <!-- Right: Active IPS (In-Line) -->
      <g transform="translate(440, 15)">
        <rect x="0" y="0" width="395" height="260" rx="8" class="diag-box diag-box-emerald" />
        <rect x="15" y="12" width="365" height="26" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1" />
        <text x="197" y="29" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">IPS (ACTIVE &middot; IN-LINE &middot; PREVENTIVE)</text>

        <!-- Main Traffic Path Going Directly Through IPS -->
        <rect x="25" y="70" width="75" height="40" rx="6" class="diag-box diag-box-banner" />
        <text x="62" y="94" text-anchor="middle" font-size="11px" font-weight="700">Router</text>

        <line x1="100" y1="90" x2="145" y2="90" stroke="var(--diag-connector, #64748b)" stroke-width="2" />
        <polygon points="151,90 143,86 143,94" fill="var(--diag-connector, #64748b)" />

        <!-- In-Line IPS Appliance -->
        <rect x="151" y="62" width="115" height="56" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
        <text x="208" y="86" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">IPS DEVICE</text>
        <text x="208" y="104" text-anchor="middle" font-size="9.5px" font-weight="700" fill="var(--text)">IN-LINE FILTER</text>

        <!-- Safe Packet Continues -->
        <line x1="266" y1="80" x2="310" y2="80" stroke="#10b981" stroke-width="2" />
        <polygon points="316,80 308,76 308,84" fill="#10b981" />
        <rect x="316" y="65" width="65" height="30" rx="4" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" />
        <text x="348" y="84" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">Allowed traffic</text>

        <!-- Malicious Packet Dropped -->
        <line x1="208" y1="118" x2="208" y2="155" stroke="#ef4444" stroke-width="2" />
        <polygon points="208,161 204,153 212,153" fill="#ef4444" />
        <rect x="138" y="165" width="140" height="30" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />
        <text x="208" y="184" text-anchor="middle" font-size="10.5px" font-weight="700" fill="#ef4444">DROP / RESET PACKET</text>

        <text x="197" y="235" text-anchor="middle" font-size="11px" font-weight="700" fill="#10b981">&bull; CAN BLOCK MATCHED TRAFFIC &bull; Active Safeguard</text>
      </g>

      <!-- Bottom Benchmark Banner -->
      <g transform="translate(25, 285)">
        <rect x="0" y="0" width="810" height="26" rx="4" class="diag-box diag-box-banner" />
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">ILLUSTRATED CONFIGURATION: IDS = Detective (Out-of-band copy, alerts only) | IPS = Preventive (In-line path, actively blocks/drops packets)</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="IDS vs IPS Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">IDS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IDS: INTRUSION DETECTION SYSTEM</h5>
            <span class="reading-mob-tier-action">Passive &bull; Out-of-Band &bull; Detective Control</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>ตำแหน่งติดตั้ง:</strong> วางอยู่นอกสายการส่งข้อมูลจริง (Out-of-Band) โดยรับสำเนาแพ็กเก็ตผ่าน SPAN / Port Mirror หรือ Network TAP<br><strong>การทำงาน:</strong> วิเคราะห์สำเนาแพ็กเก็ต เมื่อพบการโจมตีจะทำการแจ้งเตือน (Alert) และบันทึก Log <em>แต่ไม่สามารถขัดขวางหรือหยุดยั้งแพ็กเก็ตจริงที่วิ่งผ่านสวิตช์ได้ทันที</em></p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">IPS</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">IPS: INTRUSION PREVENTION SYSTEM</h5>
            <span class="reading-mob-tier-action">Active &bull; In-Line &bull; Preventive Control</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>ตำแหน่งติดตั้ง:</strong> วางขวางอยู่กลางสายทางเดินข้อมูลจริง (In-Line) ทุกแพ็กเก็ตต้องไหลผ่าน IPS ก่อนเข้าสู่ระบบปลายทาง<br><strong>การทำงาน:</strong> ตรวจสอบแพ็กเก็ตแบบเรียลไทม์ หากพบว่าเป็นภัยคุกคามสามารถ <strong>ทิ้งแพ็กเก็ต (Drop) หรือตัดการเชื่อมต่อ (Reset Connection) ได้ทันที</strong> แต่มีความเสี่ยงที่จะกลายเป็นคอขวดหรือ Single Point of Failure หากอุปกรณ์ล้มเหลว</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">This example uses a passive IDS and an inline IPS with prevention enabled. Detection and blocking depend on rules and configuration; allowed traffic is not proof of harmless content. / ภาพนี้แสดง IDS รับสำเนาและ IPS ในเส้นทางที่เปิดใช้การป้องกัน ผลขึ้นกับกฎและการตั้งค่า ทราฟฟิกที่ผ่านไม่ได้แปลว่าปลอดภัยทั้งหมด</p>
</div>
`,

// 5.1.6 & 5.1.7 Cryptography Foundations: Symmetric, Asymmetric, Hashing & Digital Signatures
  cryptographyPipelines: `
<div class="reading-diagram-card" data-diagram="cryptographyPipelines" role="region" aria-label="Four cryptographic purposes: inputs operations and outputs"><div class="reading-diagram-header"><span class="reading-diagram-tag">Purpose comparison</span><h4 class="reading-diagram-title">Encryption, hashing and signing — different inputs and results</h4></div><div class="reading-diag-desktop reading-diagram-svg-wrap"><svg viewBox="0 0 840 590" class="reading-diagram-svg" role="img" aria-label="Four independent examples, not four sequential stages"><g><rect x="15" y="15" width="810" height="128" rx="8" class="diag-box diag-box-banner"/><text x="32" y="42" class="diag-text-title">Symmetric encryption</text><rect x="32" y="62" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="42" y="91" class="diag-text-sub">Plaintext + shared K</text><rect x="317" y="62" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="327" y="91" class="diag-text-sub">Encrypt with K</text><rect x="602" y="62" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="612" y="91" class="diag-text-sub">Ciphertext</text><path d="M258 86 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M297 81 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><path d="M543 86 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M582 81 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><text x="32" y="131" class="diag-text-sub">Same K decrypts ciphertext; shared-key confidentiality.</text></g><g><rect x="15" y="157" width="810" height="128" rx="8" class="diag-box diag-box-banner"/><text x="32" y="184" class="diag-text-title">Public-key encryption</text><rect x="32" y="204" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="42" y="233" class="diag-text-sub">Plaintext + recipient public key</text><rect x="317" y="204" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="327" y="233" class="diag-text-sub">Encrypt (selected scheme)</text><rect x="602" y="204" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="612" y="233" class="diag-text-sub">Ciphertext</text><path d="M258 228 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M297 223 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><path d="M543 228 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M582 223 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><text x="32" y="273" class="diag-text-sub">Corresponding recipient private key decrypts ciphertext.</text></g><g><rect x="15" y="299" width="810" height="128" rx="8" class="diag-box diag-box-banner"/><text x="32" y="326" class="diag-text-title">Cryptographic hashing</text><rect x="32" y="346" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="42" y="375" class="diag-text-sub">ISC2 CC 2026 / plus a dot</text><rect x="317" y="346" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="327" y="375" class="diag-text-sub">SHA-256</text><rect x="602" y="346" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="612" y="375" class="diag-text-sub">Two 256-bit digests</text><path d="M258 370 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M297 365 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><path d="M543 370 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M582 365 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><text x="32" y="415" class="diag-text-sub">Digest comparison checks data, not sender identity.</text></g><g><rect x="15" y="441" width="810" height="128" rx="8" class="diag-box diag-box-banner"/><text x="32" y="468" class="diag-text-title">Digital signature</text><rect x="32" y="488" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="42" y="517" class="diag-text-sub">Document + signing private key</text><rect x="317" y="488" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="327" y="517" class="diag-text-sub">Sign (scheme-defined hashing)</text><rect x="602" y="488" width="218" height="48" rx="5" class="diag-box diag-box-blue"/><text x="612" y="517" class="diag-text-sub">Signature</text><path d="M258 512 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M297 507 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><path d="M543 512 h45" stroke="var(--diag-connector)" stroke-width="2"/><path d="M582 507 l6 5 -6 5" fill="none" stroke="var(--diag-connector)" stroke-width="2"/><text x="32" y="557" class="diag-text-sub">Verify with document, signature and trusted public key.</text></g></svg></div><div class="reading-diag-mobile reading-mobile-stack"><div class="reading-mob-tier-card"><h5>Symmetric encryption</h5><p>Plaintext + shared K → Encrypt with K → Ciphertext</p><p>ใช้กุญแจลับร่วมกันในการเข้ารหัสและถอดรหัส ต้องปกป้องและแจกจ่ายกุญแจอย่างเหมาะสม / Decrypt with the same K to recover plaintext; distribute and protect the shared key.</p></div><div class="reading-mob-tier-card"><h5>Public-key encryption</h5><p>Plaintext + recipient public key → Encrypt (selected scheme) → Ciphertext</p><p>ตัวอย่างรักษาความลับ: ผู้รับถอดรหัสด้วย Private Key คู่กัน ต้องเชื่อถือความสัมพันธ์ระหว่างกุญแจกับผู้รับ / Recipient decrypts with the corresponding private key. Trust the recipient/key association.</p></div><div class="reading-mob-tier-card"><h5>Cryptographic hashing</h5><p>ISC2 CC 2026 / plus a dot → SHA-256 → Two 256-bit digests</p><p>แฮชตรวจเทียบข้อมูล ไม่ยืนยันตัวผู้ส่งโดยลำพัง การเติมจุดเปลี่ยนหลายบิตของอินพุต / A small input change produces different digests; a bare hash does not authenticate its sender.</p></div><div class="reading-mob-tier-card"><h5>Digital signature</h5><p>Document + signing private key → Sign (scheme-defined hashing) → Signature</p><p>Sign สร้างลายมือชื่อด้วย Private Key; Verify ตรวจเอกสาร ลายมือชื่อ และ Public Key ที่เชื่อถือได้ / Verify(document, signature, trusted public key) → valid / invalid. Not digest decryption as a universal rule.</p></div></div><p class="reading-semantic-note">Signing does not hide content; valid verification supports integrity and origin under trusted-key/evidence assumptions, not proof of human intent or harmless software. / การลงนามไม่ซ่อนข้อมูล ผลตรวจที่ผ่านเป็นหลักฐานตามเงื่อนไขกุญแจและหลักฐานประกอบ</p><p class="reading-semantic-note">SHA-256("ISC2 CC 2026"): <code>f6b25b7af6ddbc236d5a4c79a19b6054753d522ea1d42b728c7c717190698cab</code><br>SHA-256("ISC2 CC 2026."): <code>ccb550aaca692c0be01b943cee4f4bb8a4179052a70af421364d96f650ecbb7e</code><br>This pair differs in 123/256 output bits; about half is an average expectation, not a per-pair guarantee. / ตัวอย่างคู่นี้ต่าง 123 บิต ไม่ใช่กฎว่าทุกคู่ต้องต่างเกินครึ่ง</p><p class="reading-semantic-note">The n(n−1)/2 key-count example assumes one distinct symmetric key per pair of n participants, not every deployed key-management design. / จำนวนกุญแจแบบจับคู่เป็นสมมติฐานหนึ่ง ไม่ใช่ข้อกำหนดทุกระบบ</p></div>
`,

  // 5.2.2 SIEM Multi-Source Telemetry Pipeline
  siemTelemetryPipeline: `
<div class="reading-diagram-card reading-siem-pipeline" data-diagram="siemTelemetryPipeline" role="region" aria-label="SIEM Multi-Source Telemetry Pipeline: Log Aggregation, Normalization and Correlation">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Security Monitoring</span>
    <h4 class="reading-diagram-title">SIEM Multi-Source Telemetry Pipeline: Aggregation, Normalization &amp; Correlation</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 360" class="reading-diagram-svg" aria-label="Four-stage pipeline showing log sources feeding collectors, normalization with NTP sync, SIEM rule correlation, and SOC triage alerting" role="img">
      <!-- 4 Connected Pipeline Stages -->
      <!-- Stage 1: Telemetry Sources -->
      <g transform="translate(25, 20)">
        <rect x="0" y="0" width="180" height="280" rx="8" class="diag-box diag-box-blue" />
        <rect x="12" y="12" width="156" height="26" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" />
        <text x="90" y="29" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--blue, #3b82f6)">STAGE 1: SOURCES</text>

        <!-- Sub source items -->
        <g transform="translate(12, 50)">
          <rect x="0" y="0" width="156" height="34" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="16" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Firewall &amp; VPN Logs</text>
          <text x="78" y="28" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Traffic permits / drops</text>

          <rect x="0" y="44" width="156" height="34" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="60" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Active Directory Logs</text>
          <text x="78" y="72" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Event 4624 (Success) / 4625</text>

          <rect x="0" y="88" width="156" height="34" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="104" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Endpoint EDR Agents</text>
          <text x="78" y="116" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Process spawns, cmd line</text>

          <rect x="0" y="132" width="156" height="34" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="148" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Cloud Audit Trails</text>
          <text x="78" y="160" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">AWS CloudTrail, IAM API</text>

          <rect x="0" y="176" width="156" height="34" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="192" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Network Devices (Syslog)</text>
          <text x="78" y="204" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Routers, Switches, WAPs</text>
        </g>
      </g>

      <!-- Connector 1 -->
      <line x1="205" y1="160" x2="235" y2="160" stroke="var(--blue, #3b82f6)" stroke-width="2" />
      <polygon points="240,160 232,156 232,164" fill="var(--blue, #3b82f6)" />

      <!-- Stage 2: Ingestion & Normalization -->
      <g transform="translate(240, 20)">
        <rect x="0" y="0" width="175" height="280" rx="8" class="diag-box diag-box-amber" />
        <rect x="12" y="12" width="151" height="26" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
        <text x="87" y="29" text-anchor="middle" font-size="11px" font-weight="700" fill="#f59e0b">STAGE 2: COLLECT &amp; PARSE</text>

        <g transform="translate(12, 50)">
          <rect x="0" y="0" width="151" height="52" rx="4" class="diag-box diag-box-banner" />
          <text x="75" y="20" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Log Forwarders</text>
          <text x="75" y="36" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Fluentd / Logstash / Beats</text>

          <rect x="0" y="64" width="151" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="75" y="82" text-anchor="middle" font-size="10px" font-weight="700" fill="#f59e0b">NTP Time Sync (UTC)</text>
          <text x="75" y="98" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">ปรับเวลาทุกเครื่องตรงกัน</text>
          <text x="75" y="112" text-anchor="middle" font-size="8px" fill="var(--text-secondary)">ป้องกันปัญหาลำดับเหตุการณ์</text>

          <rect x="0" y="140" width="151" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="75" y="158" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Field Normalization</text>
          <text x="75" y="174" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">แปลงฟิลด์ให้เป็นมาตรฐาน</text>
          <text x="75" y="188" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Common Event Format (CEF)</text>
        </g>
      </g>

      <!-- Connector 2 -->
      <line x1="415" y1="160" x2="445" y2="160" stroke="#f59e0b" stroke-width="2" />
      <polygon points="450,160 442,156 442,164" fill="#f59e0b" />

      <!-- Stage 3: SIEM Correlation Engine -->
      <g transform="translate(450, 20)">
        <rect x="0" y="0" width="180" height="280" rx="8" class="diag-box diag-box-emerald" />
        <rect x="12" y="12" width="156" height="26" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" />
        <text x="90" y="29" text-anchor="middle" font-size="11px" font-weight="700" fill="#10b981">STAGE 3: CORRELATION</text>

        <g transform="translate(12, 50)">
          <rect x="0" y="0" width="156" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="20" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">Rule-Based Correlation</text>
          <text x="78" y="36" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">จับคู่เหตุการณ์ข้ามระบบ</text>
          <text x="78" y="50" text-anchor="middle" font-size="8px" fill="var(--text-secondary)">5x Failed Login + Admin Login</text>

          <rect x="0" y="76" width="156" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="96" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Behavioral Analytics (UEBA)</text>
          <text x="78" y="112" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">ตรวจจับพฤติกรรมผิดปกติ</text>
          <text x="78" y="126" text-anchor="middle" font-size="8px" fill="var(--text-secondary)">ล็อกอินจากประเทศที่ไม่เคยพบ</text>

          <rect x="0" y="152" width="156" height="52" rx="4" class="diag-box diag-box-banner" />
          <text x="78" y="172" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Threat Intel Matching</text>
          <text x="78" y="188" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">เทียบ IOCs กับฐานข้อมูลภายนอก</text>
        </g>
      </g>

      <!-- Connector 3 -->
      <line x1="630" y1="160" x2="660" y2="160" stroke="#10b981" stroke-width="2" />
      <polygon points="665,160 657,156 657,164" fill="#10b981" />

      <!-- Stage 4: SOC Alert & Action -->
      <g transform="translate(665, 20)">
        <rect x="0" y="0" width="170" height="280" rx="8" class="diag-box diag-box-rose" />
        <rect x="12" y="12" width="146" height="26" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" />
        <text x="85" y="29" text-anchor="middle" font-size="11px" font-weight="700" fill="#ef4444">STAGE 4: SOC TRIAGE</text>

        <g transform="translate(12, 50)">
          <rect x="0" y="0" width="146" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="73" y="22" text-anchor="middle" font-size="10px" font-weight="700" fill="#ef4444">Candidate Alert</text>
          <text x="73" y="38" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">แจ้งเตือนบนหน้าจอ SOC</text>
          <text x="73" y="52" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">จัดลำดับความเร่งด่วน</text>

          <rect x="0" y="76" width="146" height="64" rx="4" class="diag-box diag-box-banner" />
          <text x="73" y="96" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">Incident Ticket</text>
          <text x="73" y="112" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">เปิดใบสั่งงานสอบสวน</text>
          <text x="73" y="126" text-anchor="middle" font-size="8px" fill="var(--text-secondary)">มอบหมายให้ Tier 1 Analyst</text>

          <rect x="0" y="152" width="146" height="52" rx="4" class="diag-box diag-box-banner" />
          <text x="73" y="172" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--blue, #3b82f6)">SOAR Automation</text>
          <text x="73" y="188" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">สั่งตัดเครื่องออกจากเครือข่าย</text>
        </g>
      </g>

      <!-- Bottom Benchmark Banner -->
      <g transform="translate(25, 315)">
        <rect x="0" y="0" width="810" height="26" rx="4" class="diag-box diag-box-banner" />
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">PROCESS CONTEXT: Logging records relevant events &bull; SIEM is Active Correlation across Disparate Sources &bull; Reliable timestamps support linkage</text>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="SIEM Telemetry Pipeline Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">S1</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">1. TELEMETRY SOURCES (แหล่งกำเนิดบันทึกเหตุการณ์)</h5>
            <span class="reading-mob-tier-action">Firewall &bull; Active Directory &bull; EDR &bull; Cloud</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">รวบรวม Log จากหลากหลายอุปกรณ์ทั่วทั้งองค์กร เช่น ไฟร์วอลล์ (Traffic), Windows Active Directory (การพิสูจน์ตัวตน), Endpoint EDR (การรันโปรเซส), และ Cloud Audit Trails (API Calls)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">S2</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">2. INGESTION, PARSING &amp; NTP SYNC</h5>
            <span class="reading-mob-tier-action">Normalization &bull; UTC Clock Synchronization</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">แปลงฟิลด์ Log ให้เทียบกันได้ตาม Schema ที่เลือก เช่น CEF และใช้การเทียบเวลาที่เชื่อถือได้ เช่น NTP พร้อมเขตเวลา/Offset ที่ชัดเจน เพื่อให้สามารถเรียงลำดับไทม์ไลน์การโจมตีได้อย่างถูกต้อง</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">S3</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">3. SIEM CORRELATION ENGINE (เครื่องมือจับคู่ความสัมพันธ์)</h5>
            <span class="reading-mob-tier-action">Rule Matching &bull; Anomaly Detection</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">หัวใจของ SIEM คือการนำเหตุการณ์ที่ดูปกติในแต่ละระบบมาเชื่อมโยงกัน เช่น ล็อกอินล้มเหลว 5 ครั้งบนเครื่องลูกข่าย + การล็อกอินสิทธิ์แอดมินสำเร็จบนเซิร์ฟเวอร์ + การเชื่อมต่อไปยังไอพีต่างประเทศ เกิดขึ้นต่อเนื่องกันใน 10 วินาที</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">S4</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">4. SOC TRIAGE &amp; INCIDENT ESCALATION</h5>
            <span class="reading-mob-tier-action">Alert Dashboard &bull; Ticket &bull; SOAR Playbook</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">สร้างสัญญาณเพื่อให้ทีม SOC ตรวจสอบหลักฐานและจัดลำดับความเร่งด่วน เปิด Incident Ticket ให้เจ้าหน้าที่สอบสวน และสามารถสั่งการอัตโนมัติผ่าน SOAR เพื่อกักกันเครื่องได้ตามกฎและอำนาจอนุมัติ โดยต้องพิจารณาผลกระทบ</p>
      </div>
    </div>
  </div>
<p class="reading-semantic-note">Illustrative collection → normalization → correlation → validation/response pipeline. Correlation creates hypotheses for triage, not automatic proof of compromise. / ลำดับนี้เป็นภาพตัวอย่างของการประมวลผล ต้องตรวจยืนยันเหตุและผลกระทบก่อนสรุป</p>
</div>
`,

  // 5.5.1 Purple Team Collaborative Continuous Loop
  purpleTeamLoop: `
<div class="reading-diagram-card reading-purple-team" data-diagram="purpleTeamLoop" role="region" aria-label="Purple Team Continuous Collaborative Validation Cycle">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Security Testing</span>
    <h4 class="reading-diagram-title">Purple Team Collaborative Security Validation Cycle</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 300" class="reading-diagram-svg" aria-label="Cyclical collaboration showing Red Team offensive emulation, Purple Team debrief, and Blue Team defensive hardening" role="img">
      <!-- 3 Core Teaming Pillars -->
      <!-- Red Team -->
      <g transform="translate(40, 25)">
        <rect x="0" y="0" width="220" height="210" rx="8" class="diag-box diag-box-rose" />
        <rect x="15" y="15" width="190" height="26" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1" />
        <text x="110" y="32" text-anchor="middle" font-size="12px" font-weight="700" fill="#ef4444">RED TEAM (OFFENSIVE)</text>

        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Core Role: ผู้โจมตีจำลอง</text>
        <text x="20" y="88" font-size="10.5px" fill="var(--text-secondary)">&bull; Adversary Emulation</text>
        <text x="20" y="106" font-size="10.5px" fill="var(--text-secondary)">&bull; Execute MITRE ATT&amp;CK TTPs</text>
        <text x="20" y="124" font-size="10.5px" fill="var(--text-secondary)">&bull; Test Real-World Defenses</text>

        <rect x="15" y="150" width="190" height="42" rx="4" class="diag-box diag-box-banner" />
        <text x="110" y="168" text-anchor="middle" font-size="10px" font-weight="700" fill="#ef4444">GOAL: FIND DEFENSE BLINDSPOTS</text>
        <text x="110" y="182" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">ชี้เป้าจุดที่ระบบตรวจจับไม่พบ</text>
      </g>

      <!-- Arrow Red -> Purple -->
      <line x1="260" y1="130" x2="310" y2="130" stroke="#a855f7" stroke-width="2.5" />
      <polygon points="316,130 306,125 306,135" fill="#a855f7" />
      <text x="288" y="120" text-anchor="middle" font-size="10px" font-weight="700" fill="#a855f7">Attacks</text>

      <!-- Purple Team (Collaborative Bridge) -->
      <g transform="translate(320, 15)">
        <rect x="0" y="0" width="220" height="230" rx="8" fill="rgba(168, 85, 247, 0.10)" stroke="#a855f7" stroke-width="2" />
        <rect x="15" y="15" width="190" height="28" rx="4" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" />
        <text x="110" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#a855f7">PURPLE TEAM (COLLABORATIVE)</text>

        <text x="20" y="70" font-size="11px" font-weight="700" fill="var(--text)">Joint Facilitation: ประสานร่วม</text>
        <text x="20" y="90" font-size="10.5px" fill="var(--text-secondary)">&bull; Joint Debrief &amp; Walkthrough</text>
        <text x="20" y="108" font-size="10.5px" fill="var(--text-secondary)">&bull; Telemetry Visibility Verification</text>
        <text x="20" y="126" font-size="10.5px" fill="var(--text-secondary)">&bull; Gap Analysis &amp; Action Plan</text>

        <rect x="15" y="158" width="190" height="48" rx="4" class="diag-box diag-box-banner" />
        <text x="110" y="176" text-anchor="middle" font-size="10.5px" font-weight="700" fill="#a855f7">MAXIMIZE VALUE</text>
        <text x="110" y="194" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">ไม่ใช่ทีมที่สามถาวร แต่เป็นแนวทางปฏิบัติ</text>
      </g>

      <!-- Arrow Purple -> Blue -->
      <line x1="540" y1="130" x2="590" y2="130" stroke="#a855f7" stroke-width="2.5" />
      <polygon points="596,130 586,125 586,135" fill="#a855f7" />
      <text x="568" y="120" text-anchor="middle" font-size="10px" font-weight="700" fill="#a855f7">Insights</text>

      <!-- Blue Team -->
      <g transform="translate(600, 25)">
        <rect x="0" y="0" width="220" height="210" rx="8" class="diag-box diag-box-blue" />
        <rect x="15" y="15" width="190" height="26" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="110" y="32" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">BLUE TEAM (DEFENSIVE)</text>

        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Core Role: ผู้พิทักษ์ระบบ</text>
        <text x="20" y="88" font-size="10.5px" fill="var(--text-secondary)">&bull; Security Operations &amp; SIEM</text>
        <text x="20" y="106" font-size="10.5px" fill="var(--text-secondary)">&bull; Tune Detection Rules</text>
        <text x="20" y="124" font-size="10.5px" fill="var(--text-secondary)">&bull; Incident Response &amp; Patching</text>

        <rect x="15" y="150" width="190" height="42" rx="4" class="diag-box diag-box-banner" />
        <text x="110" y="168" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--blue, #3b82f6)">GOAL: HARDEN DEFENSIVE POSTURE</text>
        <text x="110" y="182" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">ปิดช่องโหว่และเพิ่มการตรวจจับ</text>
      </g>

      <!-- Feedback Loop Arrow (Blue -> Red) -->
      <path d="M 710 235 L 710 265 L 150 265 L 150 235" fill="none" stroke="var(--diag-connector, #64748b)" stroke-width="1.5" stroke-dasharray="4,4" />
      <polygon points="150,230 146,238 154,238" fill="var(--diag-connector, #64748b)" />
      <text x="430" y="280" text-anchor="middle" font-size="10.5px" font-weight="600" fill="var(--text-secondary)">CONTINUOUS VALIDATION LOOP: Retest and Verify Defensive Improvements</text>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Purple Team Loop Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RED</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">RED TEAM (Offensive Security)</h5>
            <span class="reading-mob-tier-action">Adversary Emulation &bull; Real-World Attacks</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">จำลองพฤติกรรมของผู้โจมตีจริง (Adversary Emulation) ทดสอบเจาะระบบและรัน TTPs ตามกรอบ MITRE ATT&amp;CK เพื่อค้นหาช่องโหว่และจุดบอดในการตรวจจับ</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">PURPLE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">PURPLE TEAMING (Collaborative Loop)</h5>
            <span class="reading-mob-tier-action">Knowledge Transfer &bull; Gap Remediation</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ไม่ใช่ทีมประจำที่สามแยกต่างหาก แต่เป็น <strong>กรอบการทำงานร่วมกันระหว่าง Red Team และ Blue Team</strong> เพื่อร่วมกันทบทวนว่าการโจมตีแต่ละขั้นสร้าง Log ในระบบหรือไม่ และปรับจูนการตรวจจับร่วมกันทันที</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">BLUE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">BLUE TEAM (Defensive Security)</h5>
            <span class="reading-mob-tier-action">Monitoring &bull; Detection Tuning &bull; Hardening</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ฝ่ายตั้งรับความปลอดภัย ดูแลระบบ SIEM, EDR, และไฟร์วอลล์ นำข้อค้นพบจาก Purple Team มาเขียนกฎตรวจจับใหม่ (Correlation Rules) และอัปเดตมาตรการควบคุมเพื่อปิดช่องว่างอย่างเป็นระบบ</p>
      </div>
    </div>
  </div>
</div>
`

};
