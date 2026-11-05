import fs from 'node:fs';

const filePath = 'js/core/diagram-generator.js';
let content = fs.readFileSync(filePath, 'utf8');

const snippet = `
  // 4.1.6 TCP 3-Way Handshake vs UDP Connectionless Transmission
  tcpHandshakeVsUdp: \`
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
        <line x1="60" y1="70" x2="60" y2="250" stroke="var(--line, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <text x="335" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">SERVER</text>
        <line x1="335" y1="70" x2="335" y2="250" stroke="var(--line, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

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
        <text x="197" y="258" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">CONNECTION ESTABLISHED &middot; RELIABLE STREAM</text>
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
        <line x1="60" y1="70" x2="60" y2="250" stroke="var(--line, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

        <text x="335" y="62" text-anchor="middle" font-size="11px" font-weight="700" fill="var(--text)">RECEIVER</text>
        <line x1="335" y1="70" x2="335" y2="250" stroke="var(--line, #64748b)" stroke-width="1.5" stroke-dasharray="3,3" />

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
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EXAM TAKEAWAY: UDP latency advantage is from zero setup/retransmission &mdash; actual speed depends on application and network conditions</text>
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
        <p class="reading-mob-tier-desc"><strong>3-Way Handshake:</strong> ต้องจับมือ <code>SYN &rarr; SYN-ACK &rarr; ACK</code> ให้สำเร็จก่อนเริ่มส่งข้อมูล<br><strong>ความเชื่อถือได้:</strong> รับประกันลำดับข้อมูล (Sequencing) และมีการส่งซ้ำเมื่อข้อมูลตกหล่น (Retransmission) มี Header ขนาด 20-60 Bytes เหมาะกับ Web (HTTPS), Mail (SMTP), SSH, File Transfer</p>
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
\`,

  // 4.1.8 IDS vs IPS Architectural Inspection Flow
  idsVsIpsInspectionFlow: \`
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

        <line x1="110" y1="90" x2="160" y2="90" stroke="var(--line, #64748b)" stroke-width="2" />
        <polygon points="166,90 158,86 158,94" fill="var(--line, #64748b)" />

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

        <line x1="100" y1="90" x2="145" y2="90" stroke="var(--line, #64748b)" stroke-width="2" />
        <polygon points="151,90 143,86 143,94" fill="var(--line, #64748b)" />

        <!-- In-Line IPS Appliance -->
        <rect x="151" y="62" width="115" height="56" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
        <text x="208" y="86" text-anchor="middle" font-size="12px" font-weight="700" fill="#10b981">IPS DEVICE</text>
        <text x="208" y="104" text-anchor="middle" font-size="9.5px" font-weight="700" fill="var(--text)">IN-LINE FILTER</text>

        <!-- Safe Packet Continues -->
        <line x1="266" y1="80" x2="310" y2="80" stroke="#10b981" stroke-width="2" />
        <polygon points="316,80 308,76 308,84" fill="#10b981" />
        <rect x="316" y="65" width="65" height="30" rx="4" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" />
        <text x="348" y="84" text-anchor="middle" font-size="10px" font-weight="700" fill="#10b981">Pass Safe</text>

        <!-- Malicious Packet Dropped -->
        <line x1="208" y1="118" x2="208" y2="155" stroke="#ef4444" stroke-width="2" />
        <polygon points="208,161 204,153 212,153" fill="#ef4444" />
        <rect x="138" y="165" width="140" height="30" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="#ef4444" />
        <text x="208" y="184" text-anchor="middle" font-size="10.5px" font-weight="700" fill="#ef4444">DROP / RESET PACKET</text>

        <text x="197" y="235" text-anchor="middle" font-size="11px" font-weight="700" fill="#10b981">&bull; BLOCKS ATTACK IN REAL-TIME &bull; Active Safeguard</text>
      </g>

      <!-- Bottom Benchmark Banner -->
      <g transform="translate(25, 285)">
        <rect x="0" y="0" width="810" height="26" rx="4" class="diag-box diag-box-banner" />
        <text x="405" y="17" text-anchor="middle" font-size="11px" font-weight="600" fill="var(--text-secondary)">EXAM DECISION: IDS = Detective (Out-of-band copy, alerts only) | IPS = Preventive (In-line path, actively blocks/drops packets)</text>
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
console.log('Successfully inserted tcpHandshakeVsUdp and idsVsIpsInspectionFlow into diagram-generator.js');
