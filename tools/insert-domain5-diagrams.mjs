import fs from 'node:fs';

const filePath = 'js/core/diagram-generator.js';
let content = fs.readFileSync(filePath, 'utf8');

const snippet = `
  // 5.1.6 & 5.1.7 Cryptography Foundations: Symmetric, Asymmetric, Hashing & Digital Signatures
  cryptographyPipelines: \`
<div class="reading-diagram-card reading-crypto-pipelines" data-diagram="cryptographyPipelines" role="region" aria-label="Cryptography Pipelines: Symmetric, Asymmetric, Hashing and Digital Signatures">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Cryptographic Foundations</span>
    <h4 class="reading-diagram-title">Cryptographic Systems: Symmetric, Asymmetric, Hashing &amp; Digital Signatures</h4>
  </div>
  <div class="reading-diagram-svg-wrap reading-diag-desktop">
    <svg viewBox="0 0 860 480" class="reading-diagram-svg" aria-label="Visual pipelines comparing Symmetric encryption, Asymmetric encryption, Cryptographic Hashing with avalanche effect, and Digital Signature signing and verification" role="img">
      <!-- Top Half: Symmetric vs Asymmetric Encryption -->
      <g transform="translate(25, 12)">
        <rect x="0" y="0" width="810" height="210" rx="8" class="diag-box diag-box-banner" />
        
        <!-- Section A: Symmetric Encryption -->
        <g transform="translate(15, 10)">
          <rect x="0" y="0" width="375" height="185" rx="6" class="diag-box diag-box-blue" />
          <rect x="12" y="10" width="350" height="24" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
          <text x="187" y="26" text-anchor="middle" font-size="11.5px" font-weight="700" fill="var(--blue, #3b82f6)">1. SYMMETRIC ENCRYPTION (SHARED SECRET KEY)</text>

          <!-- Symmetric Flow -->
          <text x="35" y="65" font-size="10px" font-weight="700" fill="var(--text)">Plaintext</text>
          <rect x="25" y="72" width="60" height="36" rx="4" class="diag-box diag-box-banner" />
          <text x="55" y="94" text-anchor="middle" font-size="10px" font-weight="600">"Data"</text>

          <line x1="85" y1="90" x2="115" y2="90" stroke="var(--blue, #3b82f6)" stroke-width="1.5" />
          <polygon points="120,90 113,86 113,94" fill="var(--blue, #3b82f6)" />

          <!-- Encrypt Box -->
          <rect x="120" y="66" width="70" height="48" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="var(--blue, #3b82f6)" />
          <text x="155" y="86" text-anchor="middle" font-size="9.5px" font-weight="700" fill="var(--blue, #3b82f6)">Encrypt</text>
          <text x="155" y="102" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Key K (Shared)</text>

          <line x1="190" y1="90" x2="215" y2="90" stroke="var(--blue, #3b82f6)" stroke-width="1.5" />
          <polygon points="220,90 213,86 213,94" fill="var(--blue, #3b82f6)" />

          <text x="235" y="65" font-size="10px" font-weight="700" fill="#f59e0b">Ciphertext</text>
          <rect x="220" y="72" width="55" height="36" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
          <text x="247" y="94" text-anchor="middle" font-size="9px" font-weight="700" fill="#f59e0b">%#8@!</text>

          <line x1="275" y1="90" x2="295" y2="90" stroke="var(--blue, #3b82f6)" stroke-width="1.5" />
          <polygon points="300,90 293,86 293,94" fill="var(--blue, #3b82f6)" />

          <!-- Decrypt Box -->
          <rect x="300" y="66" width="65" height="48" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="var(--blue, #3b82f6)" />
          <text x="332" y="86" text-anchor="middle" font-size="9.5px" font-weight="700" fill="var(--blue, #3b82f6)">Decrypt</text>
          <text x="332" y="102" text-anchor="middle" font-size="8.5px" fill="var(--text-secondary)">Same Key K</text>

          <!-- Footer note -->
          <rect x="12" y="126" width="350" height="48" rx="4" class="diag-box diag-box-banner" />
          <text x="187" y="144" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">เร็วมาก เหมาะกับข้อมูลขนาดใหญ่ (Bulk Data) เช่น AES-256</text>
          <text x="187" y="162" text-anchor="middle" font-size="9.5px" fill="#ef4444">ข้อจำกัด: การแจกจ่ายกุญแจลับ &bull; สูตรคำนวณกุญแจ n(n-1)/2</text>
        </g>

        <!-- Section B: Asymmetric Encryption -->
        <g transform="translate(405, 10)">
          <rect x="0" y="0" width="390" height="185" rx="6" class="diag-box diag-box-emerald" />
          <rect x="12" y="10" width="365" height="24" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1" />
          <text x="195" y="26" text-anchor="middle" font-size="11.5px" font-weight="700" fill="#10b981">2. ASYMMETRIC ENCRYPTION (PUBLIC / PRIVATE PAIR)</text>

          <!-- Asymmetric Flow -->
          <text x="35" y="65" font-size="10px" font-weight="700" fill="var(--text)">Plaintext</text>
          <rect x="25" y="72" width="60" height="36" rx="4" class="diag-box diag-box-banner" />
          <text x="55" y="94" text-anchor="middle" font-size="10px" font-weight="600">"Secret"</text>

          <line x1="85" y1="90" x2="115" y2="90" stroke="#10b981" stroke-width="1.5" />
          <polygon points="120,90 113,86 113,94" fill="#10b981" />

          <!-- Encrypt Box (Recipient Public Key) -->
          <rect x="120" y="66" width="80" height="48" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" />
          <text x="160" y="86" text-anchor="middle" font-size="9.5px" font-weight="700" fill="#10b981">Encrypt With</text>
          <text x="160" y="102" text-anchor="middle" font-size="8.5px" font-weight="600" fill="var(--text)">Recipient Public Key</text>

          <line x1="200" y1="90" x2="225" y2="90" stroke="#10b981" stroke-width="1.5" />
          <polygon points="230,90 223,86 223,94" fill="#10b981" />

          <rect x="230" y="72" width="55" height="36" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" />
          <text x="257" y="94" text-anchor="middle" font-size="9px" font-weight="700" fill="#f59e0b">&amp;*#^?</text>

          <line x1="285" y1="90" x2="305" y2="90" stroke="#10b981" stroke-width="1.5" />
          <polygon points="310,90 303,86 303,94" fill="#10b981" />

          <!-- Decrypt Box (Recipient Private Key) -->
          <rect x="310" y="66" width="70" height="48" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" />
          <text x="345" y="86" text-anchor="middle" font-size="9.5px" font-weight="700" fill="#ef4444">Decrypt With</text>
          <text x="345" y="102" text-anchor="middle" font-size="8.5px" font-weight="600" fill="var(--text)">Recipient Priv Key</text>

          <!-- Footer note -->
          <rect x="12" y="126" width="365" height="48" rx="4" class="diag-box diag-box-banner" />
          <text x="195" y="144" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--text)">แก้ปัญหาการส่งกุญแจลับ &bull; ทุกคนมี 2 กุญแจ (Public เปิดเผย / Private หวงห้าม)</text>
          <text x="195" y="162" text-anchor="middle" font-size="9.5px" fill="#10b981">การใช้งาน: RSA, ECC, Diffie-Hellman, แลกเปลี่ยน Session Keys</text>
        </g>
      </g>

      <!-- Bottom Half: Hashing & Digital Signatures -->
      <g transform="translate(25, 235)">
        <rect x="0" y="0" width="810" height="230" rx="8" class="diag-box diag-box-banner" />

        <!-- Section C: Cryptographic Hashing -->
        <g transform="translate(15, 10)">
          <rect x="0" y="0" width="375" height="205" rx="6" class="diag-box diag-box-amber" />
          <rect x="12" y="10" width="350" height="24" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1" />
          <text x="187" y="26" text-anchor="middle" font-size="11.5px" font-weight="700" fill="#f59e0b">3. CRYPTOGRAPHIC HASHING (ONE-WAY INTEGRITY)</text>

          <!-- Hash Flow Example with Avalanche Effect -->
          <g transform="translate(15, 45)">
            <text x="0" y="14" font-size="10px" font-weight="600" fill="var(--text)">Input: "cat"</text>
            <text x="115" y="14" font-size="10.5px" fill="var(--text-secondary)">&rarr; SHA-256 &rarr;</text>
            <text x="195" y="14" font-size="9.5px" font-family="monospace" fill="#10b981">77af778b...5467</text>

            <text x="0" y="38" font-size="10px" font-weight="700" fill="#ef4444">Input: "Cat" (1 bit change!)</text>
            <text x="115" y="38" font-size="10.5px" fill="var(--text-secondary)">&rarr; SHA-256 &rarr;</text>
            <text x="195" y="38" font-size="9.5px" font-family="monospace" fill="#ef4444">53376022...93bf</text>
          </g>

          <rect x="12" y="95" width="350" height="98" rx="4" class="diag-box diag-box-banner" />
          <text x="22" y="115" font-size="10px" font-weight="700" fill="#f59e0b">5 คุณสมบัติทางคณิตศาสตร์ของฟังก์ชันแฮช (Hash Properties):</text>
          <text x="22" y="132" font-size="9.5px" fill="var(--text)">&bull; <strong>Deterministic:</strong> ข้อมูลเดิม ย่อมได้ผลแฮชเดิมเสมอ</text>
          <text x="22" y="148" font-size="9.5px" fill="var(--text)">&bull; <strong>Fixed-Length Digest:</strong> ผลลัพธ์มีความยาวคงที่เสมอ (เช่น 256 บิต)</text>
          <text x="22" y="164" font-size="9.5px" fill="var(--text)">&bull; <strong>One-Way:</strong> ไม่สามารถย้อนกลับ (Irreversible) เพื่อหากระดาษต้นฉบับได้</text>
          <text x="22" y="180" font-size="9.5px" fill="var(--text)">&bull; <strong>Avalanche Effect:</strong> ข้อมูลเปลี่ยนเพียง 1 บิต ค่าแฮชเปลี่ยนสิ้นเชิง &gt; 50%</text>
        </g>

        <!-- Section D: Digital Signatures -->
        <g transform="translate(405, 10)">
          <rect x="0" y="0" width="390" height="205" rx="6" class="diag-box diag-box-rose" />
          <rect x="12" y="10" width="365" height="24" rx="4" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" stroke-width="1" />
          <text x="195" y="26" text-anchor="middle" font-size="11.5px" font-weight="700" fill="#ef4444">4. DIGITAL SIGNATURE WORKFLOW (SIGN &amp; VERIFY)</text>

          <!-- Step 1: Sign -->
          <rect x="12" y="45" width="365" height="52" rx="4" class="diag-box diag-box-banner" />
          <text x="22" y="62" font-size="10px" font-weight="700" fill="#ef4444">ขั้นตอนการสร้างลายมือชื่อ (SIGNING PROCESS):</text>
          <text x="22" y="78" font-size="9.5px" fill="var(--text)">Doc &rarr; Hash &rarr; Encrypt with <strong>Sender's Private Key</strong> = <span style="color:#ef4444; font-weight:700;">Digital Signature</span></text>
          <text x="22" y="90" font-size="9px" fill="var(--text-secondary)">ผู้ส่งใช้กุญแจส่วนตัวของตนเอง เพื่อพิสูจน์ว่าเป็นเจ้าของจริง</text>

          <!-- Step 2: Verify -->
          <rect x="12" y="105" width="365" height="52" rx="4" class="diag-box diag-box-banner" />
          <text x="22" y="122" font-size="10px" font-weight="700" fill="#10b981">ขั้นตอนการตรวจสอบลายมือชื่อ (VERIFICATION PROCESS):</text>
          <text x="22" y="138" font-size="9.5px" fill="var(--text)">Decrypt Signature with <strong>Sender's Public Key</strong> = Hash A vs Hash(Doc) = Hash B</text>
          <text x="22" y="150" font-size="9px" fill="#10b981">ถ้า Hash A == Hash B แสดงว่าข้อมูลไม่ถูกแก้ไข และมาจากผู้ส่งตัวจริง!</text>

          <rect x="12" y="165" width="365" height="30" rx="4" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" />
          <text x="195" y="184" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">รับประกัน 3 ประการ: Integrity + Non-Repudiation + Authenticity</text>
        </g>
      </g>
    </svg>
  </div>
  <div class="reading-diag-mobile reading-mobile-stack" aria-label="Cryptography Pipelines Mobile Stack">
    <div class="reading-mob-stack-list">
      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">SYM</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">SYMMETRIC ENCRYPTION (กุญแจลับร่วมดอกเดียว)</h5>
            <span class="reading-mob-tier-action">Fast &bull; Bulk Data &bull; AES-256</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ใช้กุญแจลับดอกเดียวกัน (Shared Secret Key) ทั้งเข้ารหัสและถอดรหัส มีความเร็วสูงมาก เหมาะสำหรับข้อมูลปริมาณมาก แต่มีความท้าทายในการส่งมอบกุญแจลับให้ปลอดภัย และจำนวนคู่กุญแจจะเพิ่มขึ้นมหาศาลตามสูตร <code>n(n-1)/2</code></p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">ASYM</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ASYMMETRIC ENCRYPTION (คู่กุญแจสาธารณะ/ส่วนตัว)</h5>
            <span class="reading-mob-tier-action">Key Exchange &bull; Confidentiality &bull; RSA/ECC</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">แต่ละคนมีคู่กุญแจ: <strong>Public Key</strong> (เผยแพร่ได้) และ <strong>Private Key</strong> (เก็บเป็นความลับสูงสุด) เมื่อต้องการส่งข้อมูลลับ ให้เข้ารหัสด้วย <em>Public Key ของผู้รับ</em> ซึ่งจะมีเพียง <em>Private Key ของผู้รับเท่านั้น</em> ที่สามารถถอดรหัสได้ แก้ปัญหาการแจกจ่ายกุญแจลับได้สมบูรณ์</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">HASH</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CRYPTOGRAPHIC HASHING &amp; AVALANCHE EFFECT</h5>
            <span class="reading-mob-tier-action">Integrity Check &bull; One-Way Function</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">แปลงข้อมูลขนาดใดก็ได้ให้กลายเป็นค่า Digest ความยาวคงที่ ไม่สามารถคำนวณย้อนกลับได้ (Irreversible) มีคุณสมบัติ <strong>Avalanche Effect</strong>: หากข้อมูลเปลี่ยนไปแม้แต่ 1 บิต ค่าแฮชผลลัพธ์จะเปลี่ยนไปอย่างสิ้นเชิงเกินกว่า 50%</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">SIGN</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">DIGITAL SIGNATURES (ลายมือชื่อดิจิทัล)</h5>
            <span class="reading-mob-tier-action">Integrity + Non-Repudiation + Authenticity</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>การลงนาม:</strong> ผู้ส่งนำเอกสารไปแฮช แล้วเข้ารหัสค่าแฮชด้วย <em>Private Key ของผู้ส่ง</em><br><strong>การตรวจสอบ:</strong> ผู้รับถอดรหัสลายมือชื่อด้วย <em>Public Key ของผู้ส่ง</em> เพื่อเปรียบเทียบค่าแฮช ยืนยันว่าเอกสารไม่ถูกแก้ไขและมาจากผู้ส่งตัวจริงโดยไม่อาจปฏิเสธความรับผิดชอบได้</p>
      </div>
    </div>
  </div>
</div>
\`,

  // 5.2.2 SIEM Multi-Source Telemetry Pipeline
  siemTelemetryPipeline: \`
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
          <text x="73" y="22" text-anchor="middle" font-size="10px" font-weight="700" fill="#ef4444">High-Severity Alert</text>
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
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EXAM TAKEAWAY: Logging is Passive Recording &bull; SIEM is Active Correlation across Disparate Sources &bull; NTP is Essential</text>
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
        <p class="reading-mob-tier-desc">แปลงข้อมูล Log หลากหลายรูปแบบให้อยู่ในมาตรฐานเดียวกัน (CEF) และต้องมี <strong>NTP (Network Time Protocol)</strong> ซิงค์เวลาของทุกระบบให้ตรงกันในมาตรฐาน UTC เพื่อให้สามารถเรียงลำดับไทม์ไลน์การโจมตีได้อย่างถูกต้อง</p>
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
        <p class="reading-mob-tier-desc">สร้างการแจ้งเตือนระดับสูงบน Dashboard ของทีม SOC เปิด Incident Ticket ให้เจ้าหน้าที่สอบสวน และสามารถสั่งการอัตโนมัติผ่าน SOAR เพื่อกักกันเครื่องที่ติดมัลแวร์ได้ทันที</p>
      </div>
    </div>
  </div>
</div>
\`,

  // 5.5.1 Purple Team Collaborative Continuous Loop
  purpleTeamLoop: \`
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
      <path d="M 710 235 L 710 265 L 150 265 L 150 235" fill="none" stroke="var(--line, #64748b)" stroke-width="1.5" stroke-dasharray="4,4" />
      <polygon points="150,230 146,238 154,238" fill="var(--line, #64748b)" />
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
console.log('Successfully inserted cryptographyPipelines, siemTelemetryPipeline, and purpleTeamLoop into diagram-generator.js');
