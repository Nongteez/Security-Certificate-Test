import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const diagPath = path.join(rootDir, 'js', 'core', 'diagram-generator.js');

let code = fs.readFileSync(diagPath, 'utf8');

const domain2DiagramsCode = `
  // 2.2.7 Data Backup Strategies & Recovery Chains
  backupRestoreChains: \`
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
        <text x="275" y="26" class="diag-text-sub" font-size="11.5px">สำรองเฉพาะข้อมูลที่เปลี่ยนนับจาก Full ล่าสุด (ขนาดไฟล์สำรองโตขึ้นทุกวัน)</text>

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
          <text x="14" y="21" font-size="11.5px" font-weight="700" fill="var(--green, #10b981)">RECOVERY PATH ON THURSDAY (EXACTLY 2 STEPS):</text>
          <text x="340" y="21" font-size="12px" font-weight="700" fill="var(--text)">[1] Restore Sun Full (Base)</text>
          <text x="520" y="21" font-size="12px" fill="var(--text-secondary)">&rarr;</text>
          <text x="540" y="21" font-size="12px" font-weight="700" fill="#f59e0b">[2] Restore Wed Diff (All Changes)</text>
          <rect x="710" y="6" width="56" height="22" rx="3" fill="#10b981" />
          <text x="738" y="21" text-anchor="middle" font-size="10px" font-weight="700" fill="#ffffff">FAST RTO</text>
        </g>
      </g>

      <!-- Track 2: Incremental Backup Strategy -->
      <g transform="translate(0, 230)">
        <rect x="30" y="0" width="800" height="150" rx="8" class="diag-box" />
        <rect x="42" y="10" width="220" height="24" rx="4" fill="rgba(16, 185, 129, 0.12)" />
        <text x="50" y="26" class="diag-text-title" font-weight="700" fill="var(--green, #10b981)">STRATEGY B: INCREMENTAL BACKUP</text>
        <text x="275" y="26" class="diag-text-sub" font-size="11.5px">สำรองเฉพาะข้อมูลที่เปลี่ยนนับจาก Backup ครั้งล่าสุด (ขนาดเล็ก สำรองเร็วสุด)</text>

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
          <text x="14" y="21" font-size="11.5px" font-weight="700" fill="#f59e0b">RECOVERY PATH ON THURSDAY (4 SEQUENTIAL STEPS):</text>
          <text x="340" y="21" font-size="11px" font-weight="600" fill="var(--text)">[1] Sun Full &rarr; [2] Mon Inc &rarr; [3] Tue Inc &rarr; [4] Wed Inc</text>
          <rect x="710" y="6" width="56" height="22" rx="3" fill="#f59e0b" />
          <text x="738" y="21" text-anchor="middle" font-size="10px" font-weight="700" fill="#ffffff">SLOW RTO</text>
        </g>
      </g>

      <!-- Bottom Trade-off Banner -->
      <g transform="translate(30, 386)">
        <text x="400" y="16" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EXAM TAKEAWAY: Differential = Fast Restore (2 sets), Slower Backup | Incremental = Fastest Daily Backup, Slowest Restore (N sets)</text>
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
            <span class="reading-mob-tier-action">Fast Restoration &bull; 2 Sets Required</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สิ่งที่สำรอง:</strong> บันทึกเฉพาะไฟล์ที่มีการเปลี่ยนแปลงนับตั้งแต่ Full Backup ครั้งล่าสุด (ขนาดไฟล์จะใหญ่ขึ้นเรื่อย ๆ ในแต่ละวัน)<br><strong>การกู้คืนเมื่อระบบล่มวันพฤหัส:</strong> ใช้เพียง <code>Full (อาทิตย์) + Diff (พุธ)</code> = <strong>2 ชุดเท่านั้น</strong> กู้คืนได้รวดเร็ว ลดความเสี่ยงจากสื่อบันทึกสูญหาย</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">INCR</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">INCREMENTAL BACKUP (Sequential Replay Chain)</h5>
            <span class="reading-mob-tier-action">Fastest Daily Backup &bull; Sequential Replay</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc"><strong>สิ่งที่สำรอง:</strong> บันทึกเฉพาะสิ่งที่เปลี่ยนนับจาก Backup ครั้งก่อนหน้า (ใช้เวลาและพื้นที่สำรองน้อยที่สุดในแต่ละวัน)<br><strong>การกู้คืนเมื่อระบบล่มวันพฤหัส:</strong> ต้องกู้เรียงลำดับ <code>Full (อาทิตย์) &rarr; Incr (จันทร์) &rarr; Incr (อังคาร) &rarr; Incr (พุธ)</code> รวม <strong>4 ชุด</strong> หากเทปชุดใดชุดหนึ่งเสียหาย จะไม่สามารถกู้คืนข้อมูลต่อได้</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kri">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">RULE</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">ARCHIVE BIT BEHAVIOR (กลไก Archive Bit สำหรับห้องสอบ)</h5>
            <span class="reading-mob-tier-action">Key Mechanism Trigger</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">&bull; <strong>Full Backup:</strong> สำรองทุกไฟล์ และ <em>เคลียร์ Archive Bit (เซ็ตเป็น 0)</em><br>&bull; <strong>Differential Backup:</strong> สำรองไฟล์ที่มีการเปลี่ยนแปลง แต่ <em>ไม่เคลียร์ Archive Bit (ยังคงเป็น 1)</em><br>&bull; <strong>Incremental Backup:</strong> สำรองไฟล์ที่มีการเปลี่ยนแปลง และ <em>เคลียร์ Archive Bit (เซ็ตเป็น 0)</em></p>
      </div>
    </div>
  </div>
</div>
\`,

  // 2.2.7 Disaster Recovery Site Tiers Comparison
  drSiteTiers: \`
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
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Readiness (RTO):</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#ef4444">Minutes to Hours</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Real-time Synchronous</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">or Continuous Mirroring</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Fully populated, active,</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">identical live servers</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#ef4444">COST: $$$$$ (HIGHEST)</text>
        <text x="95" y="250" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Mission-Critical Systems</text>
      </g>

      <!-- Col 2: Warm Site -->
      <g transform="translate(230, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-amber" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#f59e0b">WARM SITE</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Readiness (RTO):</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#f59e0b">Hours to Days (12-48h)</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Shipped / Cloud Backups</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Must restore from media</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Pre-installed baseline</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">Needs app config &amp; data</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#f59e0b">COST: $$$ (MODERATE)</text>
        <text x="95" y="250" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Balanced Trade-off</text>
      </g>

      <!-- Col 3: Cold Site -->
      <g transform="translate(435, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-blue" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(59, 130, 246, 0.15)" stroke="var(--blue, #3b82f6)" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="var(--blue, #3b82f6)">COLD SITE</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Readiness (RTO):</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="var(--blue, #3b82f6)">Days to Weeks</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">No data stored on-site</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Fetch from off-site vault</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Empty shell (Power, HVAC,</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">raised floor, cabling only)</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="var(--blue, #3b82f6)">COST: $ (LOWEST)</text>
        <text x="95" y="250" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Non-Urgent Operations</text>
      </g>

      <!-- Col 4: Cloud DR -->
      <g transform="translate(640, 15)">
        <rect x="0" y="0" width="190" height="270" rx="8" class="diag-box diag-box-emerald" />
        <rect x="15" y="15" width="160" height="28" rx="4" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1" />
        <text x="95" y="34" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">CLOUD DR (DRaaS)</text>
        
        <text x="20" y="68" font-size="11px" font-weight="700" fill="var(--text)">Readiness (RTO):</text>
        <text x="20" y="86" font-size="11.5px" font-weight="700" fill="#10b981">Minutes to Hours</text>
        
        <text x="20" y="112" font-size="11px" font-weight="700" fill="var(--text)">Data Status:</text>
        <text x="20" y="128" font-size="10.5px" fill="var(--text-secondary)">Cloud snapshot sync</text>
        <text x="20" y="142" font-size="10.5px" fill="var(--text-secondary)">Automated replication</text>
        
        <text x="20" y="168" font-size="11px" font-weight="700" fill="var(--text)">Hardware State:</text>
        <text x="20" y="184" font-size="10.5px" fill="var(--text-secondary)">Virtual on-demand</text>
        <text x="20" y="198" font-size="10.5px" fill="var(--text-secondary)">Spin-up compute elastic</text>
        
        <rect x="15" y="222" width="160" height="36" rx="4" class="diag-box diag-box-banner" />
        <text x="95" y="238" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">COST: PAY-AS-YOU-GO</text>
        <text x="95" y="250" text-anchor="middle" font-size="9px" fill="var(--text-secondary)">Flexible OpEx Model</text>
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
            <span class="reading-mob-tier-action">RTO: Minutes to Hours &bull; Cost: $$$$$</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีอุปกรณ์และระบบที่เหมือนกับไซต์หลักทุกประการ ข้อมูลมีการทำสำเนาจำลองแบบต่อเนื่อง (Real-time Mirroring) พร้อมสลับการทำงานได้ทันทีเมื่อไซต์หลักล่ม เหมาะกับงานที่หยุดชะงักไม่ได้ (Mission-Critical)</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-scorecard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">WARM</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">WARM SITE (ศูนย์กู้คืนระบบติดตั้งอุปกรณ์พร้อมส่วนหนึ่ง)</h5>
            <span class="reading-mob-tier-action">RTO: Hours to Days (12-48h) &bull; Cost: $$$</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีฮาร์ดแวร์พื้นฐานติดตั้งไว้แล้ว แต่ยังไม่มีข้อมูลล่าสุด ต้องนำข้อมูลสำรองจากเทปหรือคลาวด์มา Restore และคอนฟิกค่าก่อนเปิดบริการ เป็นจุดกึ่งกลางระหว่างต้นทุนและความเร็ว</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-kpi">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">COLD</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">COLD SITE (ศูนย์กู้คืนระบบแบบอาคารเปล่า)</h5>
            <span class="reading-mob-tier-action">RTO: Days to Weeks &bull; Cost: $</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">มีเพียงพื้นที่อาคาร ระบบไฟฟ้า ระบบปรับอากาศ (HVAC) และการเดินสายสัญญาณ แต่ไม่มีเครื่องเซิร์ฟเวอร์หรือข้อมูลติดตั้งอยู่ ต้องสั่งซื้อและติดตั้งอุปกรณ์ใหม่ทั้งหมด ค่าใช้จ่ายถูกที่สุดแต่ใช้เวลากู้นานที่สุด</p>
      </div>

      <div class="reading-mob-tier-card reading-tier-dashboard">
        <div class="reading-mob-tier-head">
          <span class="reading-mob-tier-num">CLOUD</span>
          <div class="reading-mob-tier-info">
            <h5 class="reading-mob-tier-name">CLOUD DR / DRaaS (การกู้คืนบนระบบคลาวด์)</h5>
            <span class="reading-mob-tier-action">RTO: Minutes to Hours &bull; Pay-as-you-go</span>
          </div>
        </div>
        <p class="reading-mob-tier-desc">ใช้โครงสร้างพื้นฐานคลาวด์ในการทำ Snapshots และสำรอง Image เมื่อเกิดภัยพิบัติสามารถเปิด Virtual Machines ขึ้นมาทำงานแทนได้ทันที จ่ายค่าบริการตามการใช้งานจริง (OpEx)</p>
      </div>
    </div>
  </div>
</div>
\`
`;

// Insert before the last \n};\n
const lastBraceIndex = code.lastIndexOf('};');
if (lastBraceIndex === -1) {
  console.error('Could not find closing }; in diagram-generator.js');
  process.exit(1);
}

const newCode = code.slice(0, lastBraceIndex) + domain2DiagramsCode + '\n' + code.slice(lastBraceIndex);
fs.writeFileSync(diagPath, newCode, 'utf8');
console.log('Successfully inserted backupRestoreChains and drSiteTiers into diagram-generator.js');
