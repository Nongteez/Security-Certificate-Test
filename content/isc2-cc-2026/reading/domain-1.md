<p class="reading-lead">เอกสารรวบรวมและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับ <strong>Domain 1: Security Principles</strong> (น้ำหนักข้อสอบ 24%) ครอบคลุมหลักการพื้นฐานด้านความมั่นคงปลอดภัยไซเบอร์ การบริหารความเสี่ยง การกำกับดูแล นโยบาย มาตรการควบคุม และประมวลจริยธรรมวิชาชีพของ ISC2 เพื่อสร้างความเข้าใจเชิงลึกสำหรับเตรียมสอบ</p>

<section id="obj-1-1" class="reading-objective-section reading-structured-objective">

## Objective 1.1: Understand cybersecurity concepts

หัวข้อนี้ว่าด้วยรากฐานที่สำคัญที่สุดของความมั่นคงปลอดภัยสารสนเทศ การเข้าใจว่าเรากำลังปกป้องอะไร จากภัยคุกคามใด ด้วยหลักการและกลไกพื้นฐานอย่างไร

<div id="topic-1-1-core-concepts" class="reading-topic-anchor"></div>

### 1.1.1 Core Security Concepts & Assets

**Information Security (InfoSec)** คือการปกป้องข้อมูลและระบบสารสนเทศจากการเข้าถึง การเปิดเผย การแก้ไข การทำลาย หรือการหยุดชะงักโดยไม่ได้รับอนุญาต โดยต้องรักษาสมดุลระหว่าง **ความปลอดภัย (Security)** กับ **ความต้องการและความคล่องตัวทางธุรกิจ (Business Needs)**

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:</h4>

| คำศัพท์ | คำจำกัดความ | ตัวอย่างในโลกจริง |
|---|---|---|
| **Asset (ทรัพย์สิน)** | สิ่งที่มีคุณค่าต่อองค์กร ซึ่งหากสูญหาย เสียหาย หรือรั่วไหลจะเกิดผลกระทบ | ฐานข้อมูลลูกค้า (Customer Database), ระบบชำระเงิน, ทรัพย์สินทางปัญญา, บุคลากร |
| **Threat (ภัยคุกคาม)** | สิ่ง เหตุการณ์ หรือบุคคลที่อาจก่อให้เกิดอันตรายหรือสร้างความเสียหายต่อ Asset | แฮกเกอร์, มัลแวร์, แรนซัมแวร์, ไฟไหม้, น้ำท่วม, ไฟดับ |
| **Threat Actor (ผู้ก่อภัยคุกคาม)** | ตัวบุคคลหรือกลุ่มบุคคลที่ลงมือหรือพยายามก่อให้เกิดภัยคุกคาม | อาชญากรไซเบอร์ (Cybercriminals), พนักงานภายในที่ประสงค์ร้าย (Insider Threats), รัฐสนับสนุน (Nation-State) |
| **Vulnerability (ช่องโหว่)** | จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือมาตรการควบคุม ที่ผู้ก่อภัยคุกคามอาจใช้ประโยชน์ หรือเหตุการณ์คุกคามอาจกระตุ้นให้เกิดความเสียหาย | เซิร์ฟเวอร์ที่ยังไม่ได้ติดตั้ง Patch, การตั้งค่าความปลอดภัยผิดพลาด (Misconfiguration), รหัสผ่านที่คาดเดาง่าย |
| **Exploit (การใช้ประโยชน์จากช่องโหว่)** | วิธีการ โค้ดโปรแกรม หรือเทคนิคที่ใช้เจาะผ่านจุดอ่อนของระบบ | สคริปต์ยิงเจาะช่องโหว่ซอฟต์แวร์, Phishing Email หลอกขอรหัสผ่าน |
| **Risk (ความเสี่ยง)** | โอกาสและผลกระทบของความเสียหายที่อาจเกิดขึ้นเมื่อ Threat อาศัย Vulnerability สร้างผลกระทบต่อ Asset | โอกาสที่ฐานข้อมูลลูกค้าจะถูกขโมยและสร้างผลเสียหายทางการเงินและชื่อเสียง |
| **Control / Safeguard (มาตรการควบคุม)** | กลไก นโยบาย หรือเทคโนโลยีที่นำมาติดตั้งเพื่อลดโอกาสหรือผลกระทบของความเสี่ยง | Multi-Factor Authentication (MFA), Firewall, นโยบายความปลอดภัย |

<div class="reading-semantic-diagram" data-diagram="threatChain"></div>

<div class="reading-callout warning">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>ข้อควรระวังสำหรับข้อสอบ</span>
  </div>
  <div class="reading-warning-group">
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">Threat ไม่ใช่ Vulnerability</h5>
      <p>Threat คือบุคคล สิ่ง หรือเหตุการณ์ที่อาจก่อความเสียหาย ทั้งจากภายในและภายนอกองค์กร (เช่น พนักงานประสงค์ร้าย, Hacker, Flood) ส่วน Vulnerability คือจุดอ่อนภายในระบบของเรา (เช่น Unpatched Server หรือ Misconfiguration)</p>
    </div>
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">Vulnerability ไม่ได้แปลว่าเกิดเหตุโจมตีแล้ว</h5>
      <p>การมีจุดอ่อนในระบบไม่ได้แปลว่าองค์กรถูกแฮกแล้ว หากไม่มี Threat เข้ามาใช้ประโยชน์จากช่องโหว่นั้น หรือมี Control ชดเชยอื่นปิดกั้นไว้</p>
    </div>
  </div>
</div>

<div id="topic-1-1-cia-triad" class="reading-topic-anchor"></div>

### 1.1.2 The CIA Triad — Confidentiality, Integrity, Availability

แกนกลางของ Information Security ทุกเรื่องถูกสร้างขึ้นบนเสาหลัก 3 ต้น เรียกว่า **CIA Triad**

<div class="reading-semantic-diagram" data-diagram="ciaTriad"></div>

#### 1. Confidentiality — การรักษาความลับ

ข้อมูลต้องถูกเข้าถึงและเปิดเผยต่อ **ผู้ที่ได้รับอนุญาตเท่านั้น (Authorized Individuals Only)** โดยมุ่งเน้นการป้องกัน **Unauthorized Disclosure** (การเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต)

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</h5>

- **Encryption (การเข้ารหัสข้อมูล):** แปลงข้อมูลให้อ่านไม่ออกหากไม่มีกุญแจถอดรหัส
- **Access Control & Permissions:** จำกัดสิทธิ์การอ่านไฟล์และระบบ
- **Data Classification (การจัดชั้นความลับ):** กำหนดระดับความลับ เช่น Public, Internal, Confidential, Restricted
- **Data Masking (การบดบังข้อมูลบางส่วน):** ซ่อนข้อมูลอ่อนไหวบางส่วนเพื่อป้องกันการมองเห็น เช่น แสดงเฉพาะเลข 4 หลักสุดท้ายของบัตรเครดิต
- **Need to Know:** อนุญาตให้เข้าถึงเฉพาะข้อมูลที่จำเป็นต่อการปฏิบัติหน้าที่เท่านั้น
- **Multi-Factor Authentication (MFA):** ป้องกันการสวมรอยเข้าถึงข้อมูล

<div class="reading-scenario-inline">
  <strong>สถานการณ์จำลอง:</strong> แฮกเกอร์เจาะระบบขโมย Customer Database ออกไป แม้ข้อมูลจะไม่ถูกแก้ไขหรือลบทิ้ง แต่บุคคลที่ไม่ควรเห็นได้เห็น → กระทบ <strong>Confidentiality</strong>
</div>

<div class="reading-keyword-takeaway">
  <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Confidentiality = Who can SEE it? / Secret / Unauthorized Disclosure</em>
</div>

#### 2. Integrity — ความถูกต้องและความสมบูรณ์ของข้อมูล

ข้อมูลต้อง **ไม่ถูกแก้ไข ดัดแปลง หรือทำลายโดยไม่ได้รับอนุญาต** และสามารถตรวจสอบความถูกต้องได้ตลอดวงจรชีวิต เพื่อป้องกัน **Unauthorized Modification / Tampering** (การดัดแปลงข้อมูลโดยมิชอบ)

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</h5>

- **Hashing (การคำนวณค่าแฮช):** ใช้สร้างค่าสรุปข้อมูลทางเดียวเพื่อตรวจสอบว่าไฟล์หรือข้อความถูกดัดแปลงหรือไม่ (เช่น SHA-256)
- **Digital Signatures (ลายมือชื่อดิจิทัล):** ยืนยันทั้งความถูกต้องของข้อมูล (Integrity) และผู้ลงนาม (Authenticity)
- **Access Permissions:** จำกัดสิทธิ์ในการแก้ไขหรือลบข้อมูล (Write / Delete permissions)
- **Change Management (การบริหารการเปลี่ยนแปลง):** มีขั้นตอนอนุมัติ บันทึก และติดตามการแก้ไขระบบ
- **File Integrity Monitoring (FIM) & Audit Logs:** ตรวจจับเมื่อมีการเปลี่ยนแปลงไฟล์สำคัญ

<div class="reading-scenario-inline">
  <strong>สถานการณ์จำลอง:</strong> ผู้โจมตีแทรกแซงฐานข้อมูลระบบธนาคารแล้วเปลี่ยนยอดเงินในบัญชี ข้อมูลยังเปิดอ่านได้ ระบบยังออนไลน์ปกติ แต่เนื้อหาถูกเปลี่ยนแปลง → กระทบ <strong>Integrity</strong>
</div>

<div class="reading-keyword-takeaway">
  <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Integrity = Can I TRUST the data? / Correct / Tampering / Alteration</em>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>จุดสับสนยอดฮิต (Hashing vs. Encryption)</span>
  </div>
  <div class="reading-callout-group">
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Hashing (ฟังก์ชันทางเดียว — One-way)</h5>
      <p>คำนวณค่าสรุปข้อมูลเพื่อเปรียบเทียบความถูกต้อง ไม่สามารถถอดกลับมาเป็นข้อความต้นฉบับได้</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Encryption (กระบวนการสองทาง — Two-way)</h5>
      <p>เข้ารหัสเพื่อให้เป็นความลับ และสามารถถอดรหัส (Decryption) กลับมาอ่านได้ด้วยกุญแจที่ถูกต้อง</p>
    </div>
  </div>
</div>

#### 3. Availability — ความพร้อมใช้งาน

ระบบ ข้อมูล และทรัพยากรต้อง **พร้อมให้ผู้มีสิทธิ์เข้าใช้งานตามเวลาที่จำเป็นและข้อกำหนดบริการ** โดยมีเป้าหมายสำคัญคือการลด **Downtime** และสนับสนุนความต่อเนื่องทางธุรกิจเมื่อเผชิญภัยคุกคาม เช่น Hardware Failure, ไฟดับ (Power Outage), การโจมตี DDoS, Ransomware เข้ารหัส, หรือภัยธรรมชาติ

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</h5>

- **Redundancy (ความซ้ำซ้อนของอุปกรณ์):** มีชิ้นส่วนสำรอง เช่น Power Supply คู่, RAID ฮาร์ดดิสก์
- **Failover & Load Balancing:** การกระจายทราฟฟิกและสลับระบบอัตโนมัติเมื่อเครื่องหลักล่ม
- **Uninterruptible Power Supply (UPS) & Backup Generators:** สำรองพลังงานไฟฟ้า
- **Redundant Network / Multiple ISPs:** มีผู้ให้บริการอินเทอร์เน็ตมากกว่า 1 เจ้า
- **Data Backups & Disaster Recovery (DR):** มีแผนและข้อมูลสำรองสำหรับกู้คืนระบบ

<div class="reading-keyword-takeaway">
  <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Availability = Can I ACCESS it when needed? / Accessible / Downtime / Redundancy</em>
</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>ตัวอย่างสถาปัตยกรรมเพิ่ม Availability:</h5>

<div class="reading-semantic-diagram" data-diagram="loadBalancer"></div>

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg><strong>ตัวอย่างสถานการณ์จริง: การบูรณาการ CIA Triad ในระบบเวชระเบียนโรงพยาบาล (Hospital EHR System)</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> โรงพยาบาลจัดเก็บข้อมูลประวัติการรักษา ผลตรวจเลือด และคำสั่งผ่าตัดของผู้ป่วย 100,000 รายบนระบบคลาวด์ ซึ่งข้อมูลนี้มีผลโดยตรงต่อชีวิตและความเป็นส่วนตัวของผู้ป่วย</div>
  <div class="reading-example-step"><strong>2. การกระทำและเหตุการณ์ทางเทคนิค (Action &amp; Technical Events):</strong>
    <ul>
      <li><em>Confidentiality:</em> พยาบาลแผนกศัลยกรรมเข้าดูผลเลือดของผู้ป่วยที่ตนดูแลได้ แต่ระบบบล็อกไม่ให้เจ้าหน้าที่ฝ่ายการตลาดหรือบุคคลภายนอกเปิดดูเวชระเบียน โดยข้อมูลถูกเข้ารหัสด้วย AES-256 ทั้งขณะส่งผ่านเครือข่าย (In-Transit) และขณะจัดเก็บ (At-Rest)</li>
      <li><em>Integrity:</em> กรุ๊ปเลือดของผู้ป่วย <code>O-Positive</code> ต้องไม่ถูกเปลี่ยนเป็น <code>AB</code> โดยไม่ได้ตั้งใจหรือถูกแฮกเกอร์แก้ไข ระบบใช้ Cryptographic Hash (SHA-256) และบันทึก Digital Signature ของแพทย์ผู้สั่งยาเพื่อตรวจจับการปลอมแปลง หากผลแฮชไม่ตรง ระบบจะปฏิเสธการจ่ายยาทันที</li>
      <li><em>Availability:</em> ห้องผ่าตัดฉุกเฉินต้องการเข้าถึงข้อมูลแพ้ยาของผู้ป่วยทันทีตลอด 24/7 โรงพยาบาลจึงติดตั้ง Redundant Database Server, ระบบสำรองไฟฟ้า (UPS + เครื่องปั่นไฟดีเซล), และคู่สายอินเทอร์เน็ตสำรอง (Dual ISP) เพื่อไม่ให้ระบบล่มแม้ไฟฟ้าดับหรือสายไฟขาด</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. ผลกระทบด้านความมั่นคงปลอดภัย (Security Impact):</strong> ผู้ป่วยได้รับการรักษาที่ถูกต้อง ปลอดภัยจากการให้ยาผิดกรุ๊ป ข้อมูลส่วนตัวไม่รั่วไหลสู่สาธารณะ และแพทย์ผ่าตัดเข้าถึงข้อมูลได้ทันท่วงทีในภาวะวิกฤต</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): ความปลอดภัยที่แท้จริงต้องรักษาสมดุลของเสาหลักทั้งสาม (Security in Balance) หากข้อมูลเป็นความลับอย่างยิ่งยวดแต่แพทย์เปิดดูไม่ได้ในห้องผ่าตัด ความปลอดภัยนั้นย่อมล้มเหลวในภารกิจจริง</div>
</div>

<h4 class="reading-subtopic-title">เปรียบเทียบ CIA จากสถานการณ์ข้อสอบ</h4>

| สถานการณ์ในโจทย์ | หลักการที่เด่นที่สุด | คำอธิบายเหตุผล |
|---|---|---|
| ข้อมูลเงินเดือนพนักงานรั่วไหลออกสู่สาธารณะ | **Confidentiality** | มีการเปิดเผยข้อมูลลับแก่ผู้ไม่มีสิทธิ์ |
| ผู้โจมตีเปลี่ยนเลขบัญชีรับเงินในใบแจ้งหนี้ | **Integrity** | ข้อมูลถูกดัดแปลงแก้ไขจนไม่ถูกต้อง |
| เว็บไซต์ระบบลงทะเบียนล่มเพราะทราฟฟิก DDoS มหาศาล | **Availability** | ผู้ใช้ที่ถูกต้องไม่สามารถเข้าถึงระบบได้ |
| ผู้โจมตีดักจับข้อมูลที่วิ่งบนเครือข่ายที่ไม่ได้เข้ารหัส (Wiretapping / Sniffing) | **Confidentiality** | ข้อมูลความลับถูกผู้ไม่มีสิทธิ์ดักอ่าน |
| ผู้โจมตีส่งโค้ด SQL Injection เพื่อเปลี่ยนยอดเงินในฐานข้อมูล | **Integrity** | ฐานข้อมูลถูกแก้ไขดัดแปลงอย่างไม่ถูกต้อง |
| บัญชีผู้ดูแลระบบถูกขโมยรหัสผ่านผ่านการทำ Credential Dumping | **Confidentiality** | รหัสผ่านลับถูกเปิดเผยแก่ผู้ไม่ได้รับอนุญาต |
| Ransomware เข้ารหัสไฟล์ในเครื่องและระบบหยุดชะงัก | **Availability** *(และอาจกระทบ I/C)* | โจทย์มักเน้นผลกระทบที่ระบบทำงานไม่ได้ แต่ต้องดูบริบทคำถาม |

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    <span>เทคนิคจับคีย์เวิร์ดข้อสอบ</span>
  </div>
  <div class="reading-callout-group">
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Confidentiality</h5>
      <p>พบคำว่า <em>Disclosed, Leaked, Snooped, Read, Stolen data</em></p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Integrity</h5>
      <p>พบคำว่า <em>Altered, Modified, Tampered, Corrupted, Forged</em></p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Availability</h5>
      <p>พบคำว่า <em>Downtime, Disrupted, Outage, Offline, Inaccessible</em></p>
    </div>
  </div>
</div>

<div id="topic-1-1-identification-authentication" class="reading-topic-anchor"></div>

### 1.1.3 Identification & Authentication (AAA)

ในตัวอย่างการเข้าถึงนี้ ผู้ใช้กล่าวอ้างตัวตน แล้วระบบพิสูจน์ตัวตนและประเมินสิทธิ์ ส่วน Accounting บันทึกเหตุการณ์ที่เกี่ยวข้องตลอดการเข้าถึง รวมถึงความพยายามที่ไม่สำเร็จ / This access example separates identity claim, authentication and authorization; accounting records relevant events throughout, including failed attempts.

<div class="reading-semantic-diagram" data-diagram="aaaLifecycle"></div>

#### 1. Identification — การระบุตัวตน

ขั้นตอนที่ผู้ใช้ **กล่าวอ้างว่าตนเองคือใคร (Claiming Identity)** เช่น การกรอก Username, การป้อน User ID, หรือการแตะบัตรพนักงาน

*หมายเหตุสำคัญ:* Identification ยังไม่ใช่การพิสูจน์ความจริง เป็นเพียงแค่การบอกชื่อหรือตัวตนเท่านั้น

#### 2. Authentication — การพิสูจน์ตัวตน

ขั้นตอนที่ระบบ **ตรวจสอบและพิสูจน์ว่าผู้ใช้เป็นบุคคลนั้นจริงตามที่กล่าวอ้าง (Proving Identity)** เช่น การตรวจสอบ Password, การตรวจลายนิ้วมือ, หรือการรับรหัส OTP

<h4 class="reading-concept-group-title">บทบาทที่สัมพันธ์กันในตัวอย่างการเข้าถึง (Related access concepts)</h4>

| ขั้นตอน (Stage) | ชื่อกระบวนการ | ความหมายเชิงปฏิบัติ (Core Concept) | สิ่งที่ผู้ใช้ทำ (User Action) | สิ่งที่ระบบทำ (System Action) |
|---|---|---|---|---|
| **Claim** | **Identification** | กล่าวอ้างตัวตน (Claim Identity) | ป้อน Username หรือแตะบัตรสมาร์ตการ์ด | รับค่าและเตรียมค้นหาประวัติผู้ใช้ |
| **Proof** | **Authentication** | พิสูจน์ตัวตน (Prove Identity) | ป้อน Password หรือสแกนลายนิ้วมือ | ตรวจสอบว่าตรงกับข้อมูลยืนยันตัวตนหรือไม่ |
| **Permission** | **Authorization** | อนุญาตสิทธิ์ (Grant Permissions) | พยายามเข้าถึงไฟล์หรือสั่งรันโปรแกรม | ตรวจสอบสิทธิ์ (ACL/RBAC) ว่าอนุญาตให้ทำได้หรือไม่ |
| **Ongoing record** | **Accounting / Auditing** | บันทึกและตรวจสอบย้อนหลัง (Track Actions) | ใช้งานระบบตามปกติ | บันทึก Log กิจกรรม เวลา และผลลัพธ์เพื่อตรวจสอบย้อนหลัง |

<div id="topic-1-1-mfa" class="reading-topic-anchor"></div>

### 1.1.4 Multi-Factor Authentication (MFA)

**MFA** คือการพิสูจน์ตัวตนโดยใช้ปัจจัยตั้งแต่ **2 ประเภทที่แตกต่างกันขึ้นไป (Two or More Independent Factors)**

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>ปัจจัยหลักของ MFA มี 3 ประเภท: Know, Have และ Are; สถานที่หรือเครือข่ายเป็นบริบทเสริม (Context) ไม่ใช่ปัจจัยอิสระที่ใช้แทนประเภทเหล่านี้:</h4>

:::mfa-factors
- **Something You Know** (สิ่งที่คุณรู้)
- **Something You Have** (สิ่งที่คุณมี)
- **Something You Are** (สิ่งที่คุณเป็น)
- **Somewhere You Are** (สถานที่ที่คุณอยู่ — บริบทเสริม ไม่ใช่ปัจจัย MFA)
:::

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>ตัวอย่างอุปกรณ์จริงในการยืนยันตัวตน (Authentication Hardware in Practice):</h4>

<div class="reading-figure-grid">
  <figure class="reading-figure">
    <div class="reading-figure-img-wrap">
      <img src="assets/images/reading/yubikey-5-nfc-token.png" alt="YubiKey 5 NFC Hardware Security Token" class="reading-figure-img" width="450" height="300" loading="lazy">
    </div>
    <figcaption class="reading-figcaption">
      <div class="reading-figure-header">
        <span class="reading-figure-badge badge-have">Something You Have</span>
        <h5 class="reading-figure-title">Cryptographic Hardware Security Key</h5>
      </div>
      <p class="reading-figure-desc">ตัวอย่างกุญแจความปลอดภัยฮาร์ดแวร์ (YubiKey 5 NFC) พิสูจน์ตัวตนด้วยกุญแจเข้ารหัสลับภายในชิป (FIDO2 / WebAuthn) ช่วยป้องกันการดักจับรหัสผ่านและการโจมตีแบบฟิชชิ่งได้อย่างมีประสิทธิภาพสูง เพราะใช้กลไกการยืนยันตัวตนด้วยกุญแจสาธารณะที่ผูกกับโดเมน (Origin-bound)</p>
      <div class="reading-attribution">ภาพ: Wikimedia Commons (CC BY-SA 4.0 โดย FelixLadd)</div>
    </figcaption>
  </figure>

  <figure class="reading-figure">
    <div class="reading-figure-img-wrap">
      <img src="assets/images/reading/datacenter-biometric-scanner.jpg" alt="Data Center Biometric Fingerprint Access Control Scanner" class="reading-figure-img" width="280" height="380" loading="lazy">
    </div>
    <figcaption class="reading-figcaption">
      <div class="reading-figure-header">
        <span class="reading-figure-badge badge-are">Something You Are</span>
        <h5 class="reading-figure-title">Biometric Access Control Scanner</h5>
      </div>
      <p class="reading-figure-desc">ตัวอย่างเครื่องสแกนลายนิ้วมือควบคุมการเข้าออก Data Center (Macquarie Telecom) เปรียบเทียบลักษณะทางกายภาพกับข้อมูลที่ลงทะเบียนไว้ แต่ยังอาจยอมรับผิดคน ปฏิเสธเจ้าของตัวจริง หรือถูกปลอมแปลงได้ จึงต้องปกป้องเซนเซอร์และข้อมูลชีวมิติ / Biometric matching can make errors or face spoofing; protect the sensor and biometric data.</p>
      <div class="reading-attribution">ภาพ: Wikimedia Commons (CC BY 3.0 โดย Lgate74)</div>
    </figcaption>
  </figure>
</div>

<div class="reading-callout warning">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>กับดักข้อสอบที่พบบ่อยที่สุด (Multi-Factor vs. Multi-Credential)</span>
  </div>
  <div class="reading-warning-group">
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">Username + Password + PIN (ไม่ใช่ MFA!)</h5>
      <p>ทั้ง Password และ PIN จัดอยู่ในหมวด Something You Know ทั้งคู่ จึงถือเป็นเพียง Multi-Credential ไม่ใช่ Multi-Factor</p>
    </div>
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">Password + ลายนิ้วมือ (เป็น MFA!)</h5>
      <p>เป็นการผสมผสานระหว่าง Something You Know กับ Something You Are (คนละหมวดหมู่กันอย่างแท้จริง)</p>
    </div>
  </div>
</div>

<div id="topic-1-1-authorization-accounting" class="reading-topic-anchor"></div>

### 1.1.5 Authorization & Accounting

#### 3. Authorization — การกำหนดและอนุญาตสิทธิ์

เกิดขึ้น **หลังจาก** Authentication สำเร็จในตัวอย่างการล็อกอินทั่วไป ทั้งนี้นโยบาย Authorization อาจอนุญาตผู้ใช้ที่ยังไม่ล็อกอินให้อ่านข้อมูลสาธารณะได้ ระบบจะตัดสินใจว่าผู้ใช้คนนี้มีสิทธิ์ทำอะไรกับทรัพยากรใดได้บ้าง (**Permissions / Privileges**)

- นาย A ล็อกอินผ่าน (Authentication สำเร็จ)
- นาย A อ่านไฟล์รายงานยอดขายได้ (Read Authorized)
- นาย A พยายามลบไฟล์ระบบ แต่ระบบปฏิเสธ (Delete Unauthorized)

#### 4. Accounting (Auditing) — การบันทึกและตรวจสอบย้อนหลัง

การบันทึก ติดตาม และเก็บบันทึกประวัติกิจกรรมทั้งหมด (**Tracking & Logging Activities**) เพื่อบันทึกข้อมูลสำคัญ: ใครทำอะไร ที่ไหน เมื่อไร และเกิดผลลัพธ์อย่างไร (*Who, What, When, Where, Success/Failure*) เช่น System Event Logs, Access Logs, Network Flow Logs, และ Audit Trails

วัตถุประสงค์หลักคือการใช้ในการสืบสวนคดีความมั่นคงปลอดภัย (Forensics), เฝ้าระวังความผิดปกติ, และสร้าง **Accountability** ที่ตรวจสอบย้อนหลังได้

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>สรุปคำถามเพื่อแยก 4 แนวคิดในการเข้าถึง (Four access concepts):</h5>

| คำถามหลักในข้อสอบ | ขั้นตอนที่เกี่ยวข้อง |
|---|---|
| *"Who are you?"* | **Identification** |
| *"Prove that you are who you claim to be."* | **Authentication** |
| *"What actions and resources are you permitted to access?"* | **Authorization** |
| *"What did you do, and what evidence is recorded?"* | **Accounting** |

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7.5" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg><strong>ตัวอย่างสถานการณ์จริง: การทำงานร่วมกันระหว่าง Identity, Permissions, Policies และ Access Decisions</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> องค์กรจัดเก็บไฟล์งบการเงินความลับสูง <code>Q4_Audit_Report.xlsx</code> บนเซิร์ฟเวอร์กลาง โดย Security Administrator (นายชาร์ลี) ได้ตั้งค่านโยบายความปลอดภัย (Policy) ว่า <em>"อนุญาตเฉพาะตำแหน่ง Senior Accountant ในแผนกบัญชีเท่านั้นให้อ่านไฟล์นี้ได้ ส่วนแผนกอื่นห้ามเข้าถึงโดยเด็ดขาด"</em></div>
  <div class="reading-example-step"><strong>2. การกระทำของผู้ใช้ (User Actions):</strong>
    <ul>
      <li><strong>อลิซ (Senior Accountant):</strong> ต้องการเปิดไฟล์เพื่อกระทบยอดตัวเลขทางบัญชี</li>
      <li><strong>บ็อบ (Marketing Intern):</strong> บังเอิญพบ URL ของไฟล์บนระบบแชร์และพยายามคลิกเปิดดูข้อมูล</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. เหตุการณ์ทางเทคนิค (Technical Access Decision):</strong>
    <ul>
      <li><em>Identification &amp; Authentication:</em> ทั้งอลิซและบ็อบป้อน Username/Password และรหัส MFA สำเร็จ ระบบยืนยันได้ว่าอลิซคืออลิซตัวจริง และบ็อบคือบ็อบตัวจริง (Authentication Passed)</li>
      <li><em>Policy &amp; Permissions Evaluation:</em> ระบบ Access Control Engine ตรวจสอบสิทธิ์ (Permissions) จาก Role:
        <ul>
          <li>อลิซมี Role = <code>Finance_Senior</code> &rarr; สอดคล้องกับ Policy &rarr; ระบบส่งคำสั่ง <strong>Authorization Granted (Read Permitted)</strong></li>
          <li>บ็อบมี Role = <code>Marketing_Intern</code> &rarr; ขัดกับ Policy &rarr; ระบบส่งคำสั่ง <strong>Authorization Denied (HTTP 403 Forbidden)</strong></li>
        </ul>
      </li>
      <li><em>Accounting &amp; Audit Trail:</em> ระบบบันทึกหลักฐานที่ไม่สามารถแก้ไขได้ลงใน Central Log:
        <br><code>[2026-11-05 09:14:02 UTC] USER="alice@corp" ROLE="Finance_Senior" ACTION="READ" TARGET="Q4_Audit_Report.xlsx" STATUS="SUCCESS"</code>
        <br><code>[2026-11-05 09:14:48 UTC] USER="bob@corp" ROLE="Marketing_Intern" ACTION="READ" TARGET="Q4_Audit_Report.xlsx" STATUS="DENIED_UNAUTHORIZED"</code>
      </li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. ผลกระทบด้านความมั่นคงปลอดภัย (Security Impact):</strong> ความลับของข้อมูลทางการเงินได้รับการปกป้อง ป้องกันการรั่วไหลจากคนใน (Insider Threat) และเมื่อผู้ตรวจสอบภายนอก (Auditor) เข้ามาตรวจ สามารถนำ Log มายืนยันได้ทันทีว่าใครเข้าถึงเอกสารนี้เมื่อใด</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Identity &ne; Permissions — การที่ผู้ใช้ล็อกอินผ่าน (Authentication) ไม่ได้แปลว่ามีสิทธิ์เข้าถึงทุกสิ่ง ระบบต้องตัดสินใจตาม Policy (Authorization) และบันทึกหลักฐานตรวจสอบเสมอ (Accounting)</div>
</div>

<div id="topic-1-1-privacy-data-protection" class="reading-topic-anchor"></div>

### 1.1.6 Non-repudiation, Privacy & Data Protection

#### 1. Non-repudiation — การไม่อาจปฏิเสธความรับผิดชอบได้

ความสามารถในการพิสูจน์ได้อย่างน่าเชื่อถือว่า มีบุคคลใดบุคคลหนึ่งได้กระทำการหรือส่งข้อมูลนั้นจริง เพื่อใช้ประกอบการโต้แย้งภายหลัง โดยต้องพิจารณาความน่าเชื่อถือของกุญแจ การควบคุมตัวตน และหลักฐานประกอบ ไม่ใช่การรับประกันเจตนาของบุคคล (Evidence for later disputes, not proof of human intent) โดยอาศัยกลไกสำคัญคือ **Digital Signature** ร่วมกับโครงสร้างกุญแจสาธารณะ (PKI) และการประทับเวลาที่เชื่อถือได้ (Timestamping)

*ความต่างจาก Authentication:* Authentication พิสูจน์ตัวตน ณ ขณะล็อกอิน ส่วน Non-repudiation สร้างหลักฐานทางนิติวิทยาศาสตร์ที่ผูกมัดการกระทำในอดีต

<section class="reading-privacy-context">

#### 2. Privacy — การคุ้มครองความเป็นส่วนตัวของข้อมูล

เกี่ยวข้องกับการคุ้มครอง **Personally Identifiable Information (PII) / Personal Data** ตลอดวงจรชีวิต: การเก็บรวบรวมข้อมูล (Collection), การประมวลผล (Processing), การจัดเก็บรักษา (Storage), การถ่ายโอน (Transfer), และการทำลาย (Disposal)

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>3 บทบาทหลักในกฎหมายคุ้มครองข้อมูลส่วนบุคคล (เช่น GDPR, PDPA):</h5>

<div class="reading-definition-group reading-privacy-roles">

<div class="reading-concept-item">
  <h6 class="reading-concept-heading">Data Subject (เจ้าของข้อมูลส่วนบุคคล)</h6>
  <p>บุคคลธรรมดาที่ข้อมูลนั้นระบุไปถึง (เช่น นายสมชาย ลูกค้าของบริษัท หรือพนักงานในองค์กร)</p>
</div>

<div class="reading-concept-item">
  <h6 class="reading-concept-heading">Data Controller (ผู้ควบคุมข้อมูล)</h6>
  <p>บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า จะเก็บข้อมูลทำไม และประมวลผลอย่างไร <strong>(Determines Purpose and Means)</strong> เช่น บริษัทค้าปลีกที่เก็บข้อมูลลูกค้า</p>
</div>

<div class="reading-concept-item">
  <h6 class="reading-concept-heading">Data Processor (ผู้ประมวลผลข้อมูล)</h6>
  <p>ฝ่ายที่ทำการประมวลผลข้อมูล ในนามของและตามคำสั่งของผู้ควบคุมข้อมูล <strong>(Processes on behalf of Controller)</strong> เช่น บริษัท Cloud Provider ที่รับฝากฐานข้อมูล</p>
</div>

</div>

<div class="reading-semantic-diagram" data-diagram="privacyFlow"></div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>กลไกการกำกับดูแลและสิทธิในข้อมูลส่วนบุคคล:</h5>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Ownership & Authority Boundaries</h5>
  <p>การกำหนดว่าใครมีอำนาจตัดสินใจ (Authority) และความรับผิดชอบ (Responsibility) ต่อข้อมูลด้าน Security และ Compliance โดยมีหลักสำคัญคือ <em>การที่องค์กรถือครองหรือจัดเก็บข้อมูลไม่ได้แปลว่าจะนำ Personal Data ไปทำอะไรก็ได้ตามอำเภอใจ</em> องค์กรต้องเคารพสิทธิของ Data Subject ตามกฎหมายที่ใช้บังคับ และขอความยินยอมเมื่อใช้ฐานความยินยอม <em>Respect data-subject rights under applicable law; obtain consent when relying on consent as the legal basis.</em></p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Inventory</h5>
  <p>รายการสำรวจทรัพย์สินข้อมูลทั้งหมดขององค์กร เพื่อตอบคำถามว่า <em>"เรามีข้อมูลประเภทใดบ้าง และจัดเก็บอยู่ที่ใด?"</em></p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Retention</h5>
  <p>นโยบายระบุระยะเวลาในการเก็บรักษาข้อมูลแต่ละประเภท และกำหนดเงื่อนไขการทำลายทิ้งเมื่อหมดความจำเป็น (เช่น การเก็บเอกสารภาษีพนักงานไว้ 7 ปีตามที่กฎหมายกำหนด)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Right to Be Forgotten (สิทธิในการขอลบข้อมูล)</h5>
  <p>สิทธิของ Data Subject ในการร้องขอให้ลบข้อมูลส่วนบุคคลของตน อย่างไรก็ตาม <em>ไม่ได้แปลว่าขอลบแล้วองค์กรต้องลบทันทีเสมอไป</em> หากมีกฎหมายบังคับให้ต้องเก็บรักษาไว้ (เช่น กฎหมายภาษี กฎหมายฟอกเงิน) องค์กรยังมีความชอบธรรมในการเก็บข้อมูลนั้นตามกรอบกฎหมาย</p>
</div>

<h4 class="reading-subtopic-title">ตารางเปรียบเทียบความแตกต่าง: Confidentiality vs. Privacy</h4>

| มิติการเปรียบเทียบ | Confidentiality (การรักษาความลับ) | Privacy (ความเป็นส่วนตัว) |
|---|---|---|
| **นิยามหลัก** | การป้องกันไม่ให้ผู้ไม่มีสิทธิ์เข้าถึงหรือล่วงรู้ข้อมูล (Protect from unauthorized access) | สิทธิของบุคคลธรรมดาในการควบคุมข้อมูลส่วนตัวของตน (Right to control personal data) |
| **เป้าหมายความปลอดภัย** | ป้องกัน **Unauthorized Disclosure** | คุ้มครองสิทธิของ **Data Subject** ตามกฎหมาย (เช่น GDPR, PDPA) |
| **ขอบเขตข้อมูล** | ข้อมูลลับทุกชนิดขององค์กร (Trade Secrets, Financial, Source Code, PII) | เฉพาะข้อมูลส่วนบุคคลที่ระบุตัวตนได้ (**PII / Personal Data**) เท่านั้น |
| **มาตรการควบคุมหลัก** | Encryption, Access Control, Need to Know, Firewalls | Lawful Basis (เช่น Consent เมื่อเหมาะสม), Transparency, Data Retention, Purpose Limitation, Right to be Forgotten |
| **ตัวอย่างวิเคราะห์ (Illustrative example)** | Encryption จำกัดการเข้าถึง แต่เพียงอย่างเดียวยังไม่ยืนยันว่าปฏิบัติตาม Privacy ครบถ้วน / Encryption restricts access; it alone does not establish privacy compliance. | ต้องพิจารณาวัตถุประสงค์ ฐานกฎหมาย และหน้าที่ด้านความโปร่งใสตามกฎหมายที่ใช้บังคับ; ตาม GDPR ความยินยอมเป็นฐานหนึ่ง / Check purpose, lawful basis and applicable transparency duties; under GDPR, consent is one possible basis. |

<h4 class="reading-subtopic-title">เทคนิคการปกป้องข้อมูลส่วนบุคคล: การทำ Data Masking (Display Masking)</h4>

การพรางข้อมูลหรือ **Data Masking (Display / Dynamic Masking)** คือเทคนิคการปกป้องความเป็นส่วนตัวของข้อมูลส่วนบุคคล (PII) ณ จุดแสดงผลบนหน้าจอ โดยระบบจะแสดงเฉพาะข้อมูลบางส่วนเท่าที่จำเป็นต่อการปฏิบัติงาน (เช่น การยืนยันตัวตนลูกค้าของ Call Center) และปกปิดส่วนที่เหลือด้วยเครื่องมือหรือสัญลักษณ์พรางตา โดย **ไม่ต้องแก้ไขข้อมูลจริงในฐานข้อมูลหลัก**

<div class="reading-masking-card" role="region" aria-label="Data Masking Input Process Output Flow">
  <div class="reading-masking-header">
    <span class="reading-masking-tag">Privacy Technique · Input → Process → Output</span>
    <h5 class="reading-masking-title">ตัวอย่างกระบวนการทำ Data Masking บนข้อมูลตัวอย่างจำลอง (Fictional Examples)</h5>
  </div>
  <div class="reading-masking-grid">
    <div class="reading-masking-item">
      <div class="reading-masking-type">หมายเลขบัตรเครดิต (Payment Card / PAN)</div>
      <div class="reading-masking-pipeline">
        <div class="reading-masking-before"><code>4532 8912 3456 7890</code><span class="reading-masking-note">ข้อมูลดิบ (Raw Data)</span></div>
        <div class="reading-masking-arrow"><span>Mask Middle</span>&rarr;</div>
        <div class="reading-masking-after"><code>4532 •••• •••• 7890</code><span class="reading-masking-note">แสดงผลให้ Call Center</span></div>
      </div>
    </div>
    <div class="reading-masking-item">
      <div class="reading-masking-type">เลขประจำตัวประชาชน (Citizen ID Number)</div>
      <div class="reading-masking-pipeline">
        <div class="reading-masking-before"><code>1-2345-67890-12-3</code><span class="reading-masking-note">ข้อมูลลับในระบบ</span></div>
        <div class="reading-masking-arrow"><span>Mask 5 Digits</span>&rarr;</div>
        <div class="reading-masking-after"><code>1-2345-•••••-12-3</code><span class="reading-masking-note">แสดงผลบนหน้าเว็บ</span></div>
      </div>
    </div>
    <div class="reading-masking-item">
      <div class="reading-masking-type">อีเมลผู้ใช้งาน (Personal Email Address)</div>
      <div class="reading-masking-pipeline">
        <div class="reading-masking-before"><code>sarah.connor@example.com</code><span class="reading-masking-note">อีเมลจริงของบัญชี</span></div>
        <div class="reading-masking-arrow"><span>Mask Mailbox</span>&rarr;</div>
        <div class="reading-masking-after"><code>s•••••r@example.com</code><span class="reading-masking-note">หน้าจอขอรีเซ็ตรหัสผ่าน</span></div>
      </div>
    </div>
  </div>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>แยกแยะ 4 เทคนิคปกป้องข้อมูลในข้อสอบ (Masking vs. Encryption vs. Hashing vs. Tokenization)</span>
  </div>
  <ul>
    <li><strong>Data Masking:</strong> การพรางข้อมูลหน้าจอเพื่อจำกัดการมองเห็น (Obfuscate Display) โดยข้อมูลจริงยังอยู่เหมือนเดิม มุ่งตอบโจทย์ Privacy &amp; Need-to-Know</li>
    <li><strong>Encryption:</strong> การเข้ารหัสข้อมูลทางคณิตศาสตร์ให้กลายเป็น Ciphertext สามารถ <strong>ถอดรหัสกลับคืนได้ (Reversible)</strong> หากมีกุญแจถอดรหัสที่ถูกต้อง</li>
    <li><strong>Hashing:</strong> การแปลงข้อมูลเป็นค่าตัวเลขขนาดคงที่ทางเดียว <strong>ไม่สามารถแปลงย้อนกลับได้ (Irreversible)</strong> ใช้ตรวจความถูกต้องสมบูรณ์ (Integrity)</li>
    <li><strong>Tokenization:</strong> การแทนที่ข้อมูลจริงด้วยค่าตัวแทนสุ่ม (Surrogate Token) ที่ไม่มีความสัมพันธ์ทางคณิตศาสตร์กับข้อมูลเดิม โดยข้อมูลจริงถูกเก็บแยกไว้ใน Token Vault ที่มีความปลอดภัยสูง</li>
  </ul>
</div>

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg><strong>ตัวอย่างสถานการณ์จริง: การแสดงผลด้วย Data Masking ในศูนย์บริการลูกค้า (Customer Call Center)</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> ลูกค้าโทรศัพท์เข้ามายังศูนย์บริการ Call Center ของธนาคารเพื่อสอบถามยอดใช้จ่ายบัตรเครดิต เจ้าหน้าที่บริการลูกค้าจำเป็นต้องยืนยันตัวตนของผู้โทร แต่ตามหลักการ <em>Need-to-Know</em> เจ้าหน้าที่ไม่มีความจำเป็นต้องเห็นเลขบัตรเครดิตเต็ม 16 หลัก หรือรหัส CVV</div>
  <div class="reading-example-step"><strong>2. การกระทำและเหตุการณ์ทางเทคนิค (Action &amp; Technical Events):</strong>
    <ul>
      <li><em>ข้อมูลจริงในฐานข้อมูล (Storage At-Rest):</em> เลขบัตร <code>4532-8901-2345-6789</code> ถูกเข้ารหัสอย่างแน่นหนาด้วย AES-256 (Encryption) หากแฮกเกอร์ขโมยฮาร์ดดิสก์ไป จะอ่านข้อมูลไม่ได้เลย</li>
      <li><em>การพรางข้อมูลบนหน้าจอ (Dynamic Data Masking):</em> เมื่อระบบดึงข้อมูลมาแสดงบนหน้าจอโปรแกรมของเจ้าหน้าที่ แอปพลิเคชันทำการพรางข้อมูลทันที โดยแสดงผลเป็น <code>••••-••••-••••-6789</code> และเลขบัตรประชาชนเป็น <code>X-XXXX-XXXXX-89-0</code></li>
      <li><em>การยืนยันตัวตน:</em> เจ้าหน้าที่กล่าวว่า <em>"ขออนุญาตให้คุณลูกค้ายืนยันเลข 4 หลักสุดท้ายของบัตรเครดิตครับ"</em> ลูกค้าตอบ <em>"6789"</em> &rarr; เจ้าหน้าที่ตรวจสอบตรงกับหน้าจอและดำเนินการต่อได้</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. ผลกระทบด้านความมั่นคงปลอดภัย (Security Impact):</strong> ป้องกันการแอบมองหน้าจอ (Shoulder Surfing), ป้องกันมัลแวร์จับภาพหน้าจอ (Screen Scraping), และลดความเสี่ยงที่เจ้าหน้าที่ภายในจะจดเลขบัตรเครดิตไปทุจริต (Insider Threat) ตอบโจทย์ทั้ง Privacy และมาตรฐาน PCI DSS</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Data Masking คือการพรางหน้าจอเพื่อจำกัดการมองเห็น (Obfuscation) ข้อมูลจริงหลังบ้านยังอยู่ครบ ไม่ใช่การเข้ารหัสทางคณิตศาสตร์ (Encryption) ที่แปลงข้อมูลเป็น Ciphertext เพื่อถอดรหัสในภายหลัง</div>
</div>

</section>

#### 3. Accountability — ความรับผิดชอบที่ตรวจสอบย้อนหลังได้

หลักการที่บุคคลต้องรับผิดชอบต่อการกระทำของตนบนระบบ โดยระบบต้องสามารถเชื่อมโยงกิจกรรมไปยังตัวบุคคลนั้นได้อย่างจำเพาะเจาะจง (Unique Identity + Secure Logs)

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>สรุปเปรียบเทียบคำที่ใกล้เคียงกัน</span>
  </div>
  <div class="reading-callout-group">
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Confidentiality</h5>
      <p>ข้อมูลลับถูกจำกัดการเข้าถึงเฉพาะผู้ได้รับอนุญาต (Who can SEE it?)</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Privacy</h5>
      <p>การจัดการข้อมูลส่วนบุคคล (PII) ให้สอดคล้องกับสิทธิและกฎหมาย</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Non-repudiation</h5>
      <p>มีหลักฐานทางดิจิทัลยืนยันว่าผู้กระทำไม่อาจปฏิเสธได้</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Accountability</h5>
      <p>สามารถตรวจสอบย้อนหลังได้ว่าใครเป็นผู้รับผิดชอบต่อเหตุการณ์นั้น (Unique Identity + Secure Logs)</p>
    </div>
  </div>
</div>

<div id="topic-1-1-zero-trust-defense-in-depth" class="reading-topic-anchor"></div>

### 1.1.7 Zero Trust & Defense in Depth

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>สองแนวคิดทางสถาปัตยกรรมความปลอดภัยที่เสริมส่งซึ่งกันและกันแต่มีมุมมองที่ต่างกัน:</h4>

#### 1. Zero Trust Architecture

ยึดถือคติพจน์สำคัญคือ **“Never Trust, Always Verify” (ไม่ไว้วางใจใคร ตรวจสอบยืนยันเสมอ)** โดยปฏิเสธแนวคิดความเชื่อถือแบบเดิมที่ว่า *"คนในเครือข่ายภายใน (Internal Network) ปลอดภัยและเชื่อถือได้"*

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>หลักการสำคัญของ Zero Trust:</h5>

- ยืนยันตัวตนและอุปกรณ์ตามบริบททุกครั้งที่มีการร้องขอเข้าถึง
- ยึดหลัก **Least Privilege (สิทธิ์เท่าที่จำเป็น)**
- แบ่งส่วนเครือข่ายอย่างละเอียด (Micro-segmentation)
- ประเมินพฤติกรรมและความเสี่ยงแบบเรียลไทม์อย่างต่อเนื่อง

<div class="reading-example-box">
  <strong>ตัวอย่างสถานการณ์จริง:</strong> แม้พนักงานจะนั่งทำงานในออฟฟิศและเชื่อมต่อสาย LAN ของบริษัท แต่เมื่อจะเปิดฐานข้อมูลลูกค้า ระบบยังคงต้องบังคับให้ยืนยันตัวตน ตรวจสอบสิทธิ์ และประเมินความปลอดภัยของเครื่องคอมพิวเตอร์ใหม่อยู่เสมอ
</div>

#### 2. Defense in Depth (Layered Defense)

กลยุทธ์การวาง **มาตรการควบคุมความปลอดภัยหลายชั้นที่สอดประสานกัน (Defense in Depth)** เพื่อลดโอกาสที่ความล้มเหลวของมาตรการเดียวจะนำไปสู่ความเสียหาย ชั้นต่าง ๆ ยังอาจมีจุดพึ่งพาร่วมกัน จึงไม่รับประกันว่าจะกำจัดจุดล้มเหลวเดี่ยว (Single Point of Failure) ทั้งหมด

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>ตัวอย่างสถาปัตยกรรมการวางชั้นป้องกัน (7 Security Layers):</h5>

<div class="reading-semantic-diagram" data-diagram="defenseInDepth"></div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ความต่างที่ต้องแยก: Zero Trust vs. Defense in Depth</span>
  </div>
  <div class="reading-callout-group">
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Zero Trust</h5>
      <p>เป็น <em>Trust & Access Philosophy</em> ที่เน้นการไม่ไว้ใจใครและตรวจสอบทุกการเข้าถึงตามบริบท</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Defense in Depth</h5>
      <p>เป็น <em>Architecture Strategy</em> ที่เน้นการวางเกราะป้องกันหลายชั้นซ้อนกัน</p>
    </div>
  </div>
</div>

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg><strong>ตัวอย่างสถานการณ์จริง: การประสานพลังระหว่าง Defense in Depth และ Zero Trust เมื่อเกิดการโจมตี Phishing</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> พนักงานฝ่ายจัดซื้อที่ทำงานจากบ้าน (Remote Work) ได้รับอีเมลหลอกลวง (Spear Phishing) ที่แนบไฟล์มัลแวร์ปลอมแปลงเป็นใบเสนอราคา <code>Invoice_October.pdf.exe</code></div>
  <div class="reading-example-step"><strong>2. กลไกการป้องกันหลายชั้น (Defense in Depth Layers):</strong>
    <ul>
      <li><em>Layer 1 (Email Security Gateway):</em> ตรวจจับความผิดปกติของ Sender Domain และแนบป้ายเตือน <code>[EXTERNAL EMAIL]</code> ให้พนักงานระมัดระวัง</li>
      <li><em>Layer 2 (Endpoint EDR Protection):</em> พนักงานเผลอเปิดไฟล์ มัลแวร์พยายามรันสคริปต์ PowerShell แต่ซอฟต์แวร์ EDR บนเครื่องตรวจจับพฤติกรรมผิดปกติและสั่งกักกันไฟล์ (Quarantine) ทันที</li>
      <li><em>Layer 3 (Zero Trust Network Access - ZTNA):</em> หากมัลแวร์สามารถขโมยรหัสผ่านเครื่องได้และพยายามแพร่กระจายข้ามเครือข่าย (Lateral Movement) ไปยังฐานข้อมูลลูกค้า ระบบ Zero Trust จะบล็อกทันทีเพราะ: (1) มีการแบ่งส่วนเครือข่ายย่อย (Microsegmentation), (2) เครื่องของพนักงานไม่ผ่านการตรวจสอบความสมบูรณ์ (Posture Check), และ (3) มีการเรียกขอ MFA ซ้ำอีกครั้ง</li>
      <li><em>Layer 4 (Data Encryption &amp; SIEM Monitoring):</em> ข้อมูลในฐานข้อมูลยังคงเข้ารหัสด้วย AES-256 และเหตุการณ์การเชื่อมต่อที่ผิดปกติถูกส่งแจ้งเตือนไปยังทีม SOC แบบเรียลไทม์</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. ผลกระทบด้านความมั่นคงปลอดภัย (Security Impact):</strong> แม้จะมีพนักงานพลาดเปิดไฟล์ติดมัลแวร์ (Endpoint Compromised) แต่องค์กรไม่เกิดวิกฤตข้อมูลรั่วไหลครั้งใหญ่ เพราะไม่ได้พึ่งพาเพียงเกราะป้องกันชั้นเดียว</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Defense in Depth วางเกราะป้องกันหลายชั้นเพื่อขจัด Single Point of Failure ส่วน Zero Trust ยึดหลัก "Assume Breach" (สมมติว่ามีช่องโหว่เกิดขึ้นแล้ว) และตรวจสอบยืนยันทุกการเข้าถึงอย่างต่อเนื่องแม้จะอยู่ภายในเครือข่ายเดียวกัน</div>
</div>

</section>


<section id="obj-1-2" class="reading-objective-section reading-structured-objective">

## Objective 1.2: Understand risk management concepts

การบริหารความเสี่ยงคือหัวใจของการตัดสินใจด้านความปลอดภัย องค์กรไม่สามารถกำจัดความเสี่ยงให้เป็นศูนย์ได้ แต่ต้องเข้าใจ วัดผล และจัดการให้อยู่ในระดับที่ยอมรับได้
<div id="topic-1-2-risk-components" class="reading-topic-anchor"></div>

### 1.2.1 Risk Definition & Core Components

**Risk (ความเสี่ยง)** ประเมินจากโอกาสที่เหตุการณ์ไม่พึงประสงค์จะเกิดขึ้นร่วมกับขนาดของผลกระทบหรือความเสียหายที่เกิดขึ้นต่อองค์กร

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>องค์ประกอบหลักของความเสี่ยง:</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Likelihood (Probability / โอกาสเกิด)</h5>
  <p>ความเป็นไปได้ที่ภัยคุกคามจะอาศัยช่องโหว่โจมตีสำเร็จ</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Impact (Magnitude / ผลกระทบ)</h5>
  <p>ระดับความรุนแรงหรือมูลค่าความเสียหายที่องค์กรต้องสูญเสีย (ทางการเงิน การดำเนินงาน กฎหมาย หรือชื่อเสียง)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Risk Level (ระดับความเสี่ยง)</h5>
  <p>ผลลัพธ์จากการนำโอกาสเกิดและผลกระทบมาประเมินร่วมกันเพื่อจัดลำดับความสำคัญ</p>
</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>สมการความเสี่ยงเชิงคุณภาพ (Qualitative Risk Formula):</h5>

$\text{Risk} \approx \text{Likelihood} \times \text{Impact}$

บางโมเดลแบบง่ายใช้ผลคูณนี้โดยต้องกำหนดสเกลและความหมายของคะแนนให้ชัดเจน องค์กรอาจเลือกวิธีเชิงคุณภาพหรือเชิงปริมาณต่างกัน ไม่ใช่สูตรเดียวที่บังคับใช้กับทุกการประเมิน

<div id="topic-1-2-quantitative-risk" class="reading-topic-anchor"></div>

### 1.2.2 Quantitative Risk Analysis & Formulas

การวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative Risk Analysis) เป็นการคำนวณมูลค่าความเสียหายออกมาเป็นตัวเลขทางการเงินที่ชัดเจน มีสูตรและตัวแปรสำคัญที่ **ต้องจำอย่างแม่นยำ**:

<h4 class="reading-subtopic-title">ตัวแปรพื้นฐานในการคำนวณ</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Asset Value (AV)</h5>
  <p>มูลค่ารวมของทรัพย์สินที่กำลังพิจารณา (คิดเป็นจำนวนเงิน เช่น มูลค่าเซิร์ฟเวอร์ฐานข้อมูล = &#36;10,000)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Exposure Factor (EF)</h5>
  <p>สัดส่วนหรือเปอร์เซ็นต์ความเสียหายที่คาดว่าจะเกิดขึ้นต่อ Asset เมื่อเกิดเหตุการณ์ร้ายแรง 1 ครั้ง (แสดงเป็นค่าร้อยละ เช่น เสียหาย 50% หรือ 0.50)</p>
</div>

#### 1. Single Loss Expectancy (SLE)

ความเสียหายทางการเงินที่คาดว่าจะเกิดขึ้นจาก **การเกิดเหตุการณ์ครั้งเดียว (Single Incident)**

<div class="reading-formula-card">
  <div class="reading-formula-header">
    <span class="reading-formula-title">Single Loss Expectancy (SLE)</span>
    <span class="reading-formula-badge">ความเสียหายต่อครั้ง</span>
  </div>
  <div class="reading-formula-equation">
$SLE = AV \times EF$
  </div>
  <div class="reading-formula-vars">
    <div class="reading-formula-var"><strong>AV</strong>: Asset Value (มูลค่าทรัพย์สิน เช่น &#36;10,000)</div>
    <div class="reading-formula-var"><strong>EF</strong>: Exposure Factor (สัดส่วนความเสียหาย เช่น 50% หรือ 0.50)</div>
  </div>
</div>

<div class="reading-calculation-box">
  <div class="reading-calculation-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>ตัวอย่างการคำนวณ SLE:</div>

- เซิร์ฟเวอร์มีมูลค่า ($AV$) = \$10,000
- หากน้ำท่วมห้องเซิร์ฟเวอร์ ประเมินว่าจะเสียหาย ($EF$) = 50% (0.50)
- $SLE = \$10,000 \times 0.50 = \$5,000$ ต่อครั้ง

</div>

#### 2. Annualized Rate of Occurrence (ARO)

ความถี่หรือจำนวนครั้งโดยประมาณที่เหตุการณ์นั้นจะเกิดขึ้น **ภายในรอบระยะเวลา 1 ปี**

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>ตัวอย่างค่า ARO ในข้อสอบ:</h5>

- เกิดขึ้นปีละ 2 ครั้ง $→ ARO = 2$
- เกิดขึ้นปีละ 1 ครั้ง $→ ARO = 1$
- เกิดขึ้นทุก ๆ 2 ปีครั้ง $→ ARO = 1 / 2 = 0.5$
- เกิดขึ้นทุก ๆ 5 ปีครั้ง $→ ARO = 1 / 5 = 0.2$
- เกิดขึ้นทุก ๆ 10 ปีครั้ง $→ ARO = 1 / 10 = 0.1$

#### 3. Annualized Loss Expectancy (ALE)

ประมาณการมูลค่าความเสียหายทางการเงินทั้งหมดที่คาดว่าจะเกิดขึ้น **เฉลี่ยต่อปี (Loss per Year)**

<div class="reading-formula-card">
  <div class="reading-formula-header">
    <span class="reading-formula-title">Annualized Loss Expectancy (ALE)</span>
    <span class="reading-formula-badge">ความเสียหายเฉลี่ยต่อปี</span>
  </div>
  <div class="reading-formula-equation">
$ALE = SLE \times ARO$
  </div>
  <div class="reading-formula-vars">
    <div class="reading-formula-var"><strong>SLE</strong>: Single Loss Expectancy (ความเสียหายต่อครั้ง เช่น &#36;5,000)</div>
    <div class="reading-formula-var"><strong>ARO</strong>: Annualized Rate of Occurrence (ความถี่ต่อปี เช่น 2 ครั้ง/ปี)</div>
  </div>
</div>

<div class="reading-calculation-box">
  <div class="reading-calculation-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>ตัวอย่างคำนวณต่อเนื่อง ALE:</div>

- จากตัวอย่างข้างต้น $SLE = \$5,000$
- หากประเมินว่าเหตุการณ์นี้อาจเกิดขึ้นปีละ 2 ครั้ง ($ARO = 2$) $→ ALE = \$5,000 \times 2 = \$10,000$ ต่อปี
- หากเหตุการณ์นี้เกิดขึ้นทุก 5 ปีครั้ง ($ARO = 0.2$) $→ ALE = \$5,000 \times 0.2 = \$1,000$ ต่อปี

</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>ขั้นตอนและลำดับการคำนวณ (Calculation Pipeline):</h5>

<div class="reading-semantic-diagram" data-diagram="riskCalculationFlow"></div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ประโยชน์หลักในการทำข้อสอบ (Cost-Benefit Decision Rule)</span>
  </div>
  <p>ค่า $ALE$ ถูกนำมาใช้เปรียบเทียบกับ <strong>ต้นทุนของมาตรการควบคุม (Cost of Control / Safeguard Cost)</strong></p>
  <p><strong>การเปรียบเทียบด้านการเงินแบบง่าย:</strong> ผลประโยชน์จากการลดความเสียหายต่อปี (Annual Loss-Reduction Benefit) = ALE ก่อนใช้ Control − ALE หลังใช้ Control แล้วเปรียบเทียบกับต้นทุน Control ต่อปี การมีต้นทุนต่ำกว่า ALE เดิมเพียงอย่างเดียวยังไม่พอ เช่น ALE ก่อน 10,000/ปี หลัง 9,000/ปี ลดความเสียหายได้ 1,000/ปี หาก Control มีต้นทุน 5,000/ปี ผลประโยชน์สุทธิเท่ากับ −4,000/ปี ตัวอย่างเดิมที่ ALE &#36;10,000/ปี แต่ Control ราคา &#36;25,000/ปี ก็ไม่คุ้มด้านการเงินภายใต้สมมติฐานนี้ อย่างไรก็ตาม กฎหมาย สัญญา ความปลอดภัยของบุคคล และภารกิจอาจทำให้องค์กรต้องเลือกมาตรการแม้ผลตอบแทนทางการเงินโดยตรงไม่เป็นบวก</p>
</div>

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg><strong>ตัวอย่างสถานการณ์จริง: การประยุกต์ใช้สูตร SLE, ARO, ALE ในการตัดสินใจทางธุรกิจ (Cost-Benefit Business Case)</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> บริษัท E-Commerce มีฐานข้อมูลคำสั่งซื้อและบัญชีลูกค้าที่มีมูลค่า ($AV$) เท่ากับ \$200,000 ปัจจุบันยังไม่มีระบบสำรองข้อมูลอัตโนมัติบนคลาวด์</div>
  <div class="reading-example-step"><strong>2. การคำนวณความเสี่ยงเดิม (Inherent Risk Calculation):</strong>
    <ul>
      <li>หากเกิดเหตุการณ์ฮาร์ดแวร์เซิร์ฟเวอร์พังเสียหายอย่างรุนแรง ประเมินว่าจะสูญเสียข้อมูลและโอกาสขาย 40% ($EF = 0.40$) &rarr; $SLE = \$200,000 \times 0.40 = \$80,000$ ต่อครั้ง</li>
      <li>สมมติว่าข้อมูลประเมินในตัวอย่างให้ความถี่เหตุการณ์ฮาร์ดแวร์พังเฉลี่ยทุก 2 ปีครั้ง ($ARO = 0.5$)</li>
      <li>ความเสียหายที่คาดว่าจะเกิดขึ้นต่อปีเดิม ($ALE_{\text{initial}}$) = $\$80,000 \times 0.5 = \$40,000$ ต่อปี</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. การประเมินมาตรการควบคุม (Safeguard Evaluation):</strong>
    <ul>
      <li>ฝ่ายไอทีเสนอติดตั้งระบบ Automated Cloud Snapshot Replication ซึ่งมีค่าใช้จ่ายรวมค่าสมาชิก \$10,000 ต่อปี</li>
      <li>หากติดตั้งระบบนี้ ความเสียหายหากเกิดเหตุการณ์เดิมจะลดลงเหลือเพียง 5% ($EF_{\text{new}} = 0.05$) &rarr; $SLE_{\text{new}} = \$10,000$ ทำให้ $ALE_{\text{residual}} = \$10,000 \times 0.5 = \$5,000$ ต่อปี</li>
      <li><strong>คำนวณความคุ้มค่าสุทธิ (Cost-Benefit):</strong> $(\$40,000 - \$5,000) - \$10,000 = \$25,000$ ต่อปี</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. ผลกระทบและการตัดสินใจ (Management Decision):</strong> ในตัวอย่างนี้ คณะกรรมการใช้ผลประโยชน์สุทธิที่คาดไว้ \$25,000 ต่อปีประกอบการพิจารณาต้นทุน \$10,000 ต่อปี ผลจริงขึ้นกับสมมติฐานและประสิทธิผลของมาตรการที่ต้องตรวจสอบ (Estimated benefit under stated assumptions, not guaranteed savings)</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): การตัดสินใจซื้อมาตรการควบคุมความปลอดภัยในองค์กรต้องใช้การวิเคราะห์เชิงปริมาณ (Quantitative Analysis) เปรียบเทียบผลประโยชน์ที่ลดความสูญเสียต่อปีกับต้นทุนของมาตรการนั้น ไม่ใช่การตัดสินใจด้วยความรู้สึก</div>
</div>

<div id="topic-1-2-risk-lifecycle" class="reading-topic-anchor"></div>

### 1.2.3 Risk Management Lifecycle

การบริหารความเสี่ยง **เป็นกระบวนการต่อเนื่องตลอดเวลา (Continuous Process)** ไม่ใช่กิจกรรมที่ทำครั้งเดียวแล้วสิ้นสุด บทนี้ใช้ลำดับช่วยเรียนรู้ 5 ส่วนจากบันทึกการเรียน โดยการสื่อสารเกิดควบคู่ได้ตลอดกระบวนการ:

<div class="reading-semantic-diagram" data-diagram="riskLifecycle"></div>

1. **Risk Identification:** ค้นหาและบันทึก Assets, Threats, Vulnerabilities, และ Potential Impacts
2. **Risk Assessment & Analysis:** วิเคราะห์และจัดลำดับความสำคัญของความเสี่ยง (Qualitative: สูง/กลาง/ต่ำ, Quantitative: คำนวณ SLE/ALE)
3. **Risk Treatment / Response:** ตัดสินใจเลือกแนวทางรับมือความเสี่ยงที่เหมาะสม (Avoidance, Mitigation, Transfer, Acceptance)
4. **Risk Monitoring & Review:** ติดตามประสิทธิภาพของมาตรการควบคุมอย่างต่อเนื่อง และทบทวนเมื่อเกิดเหตุการณ์กระตุ้น (Trigger Events) เช่น:
   - มีการนำเทคโนโลยีใหม่มาใช้งาน (New Technology)
   - มีการอัปเกรดระบบซอฟต์แวร์ครั้งใหญ่ (Major Software Upgrade)
   - มีกฎหมายหรือข้อบังคับใหม่ประกาศใช้ (New Laws or Regulations)
   - มีภัยคุกคามหรือช่องโหว่ใหม่ปรากฏขึ้น (Emerging Threats / Zero-day Vulnerabilities)
5. **Risk Communication & Reporting:** รวบรวมข้อมูลสถานะความเสี่ยง รายงานต่อคณะผู้บริหารและผู้มีส่วนได้เสีย (Stakeholders) เพื่อให้สามารถตัดสินใจจัดสรรทรัพยากรได้อย่างเหมาะสม

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อสังเกตเชิงโครงสร้างและวิชาการ (4 vs. 5 Lifecycle Stages)</span>
  </div>
  <p>บทนี้ใช้ลำดับช่วยเรียนรู้ 5 ส่วนจากบันทึกการเรียน: Identify → Assess → Treat → Monitor → Communicate/Report โดยการสื่อสารและรายงานผลเกิดควบคู่ได้ตลอดกระบวนการ เพื่อให้ผู้บริหารและผู้มีส่วนได้เสียตัดสินใจจัดสรรทรัพยากรได้ กรอบงานอื่นอาจจัดกลุ่มต่างกัน เช่น NIST SP 800-39 ใช้ Frame, Assess, Respond และ Monitor ลำดับ 5 ส่วนนี้เป็นแบบจำลองช่วยเรียนรู้ ไม่ใช่ข้อกำหนดลำดับตายตัวจาก Exam Outline</p>
</div>

<div id="topic-1-2-risk-treatment" class="reading-topic-anchor"></div>

### 1.2.4 Risk Treatment: The 4 Responses

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>เมื่อประเมินความเสี่ยงแล้ว องค์กรต้องเลือกกลยุทธ์ในการจัดการความเสี่ยง 4 รูปแบบหลัก:</h4>

:::risk-treatment
- **Risk Avoidance** (การหลีกเลี่ยงความเสี่ยง)
- **Risk Mitigation** (การลดความเสี่ยง)
- **Risk Transfer** (การโอนความเสี่ยง)
- **Risk Acceptance** (การยอมรับความเสี่ยง)
:::

<div class="reading-callout danger">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>ประเด็นเน้นย้ำสำหรับข้อสอบ (Cyber Insurance Limitation)</span>
  </div>
  <div class="reading-warning-group">
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">การซื้อประกันภัยไซเบอร์ (Cyber Insurance) ช่วยโอนเฉพาะภาระค่าเสียหายทางการเงิน (Financial Impact)</h5>
      <p>ช่วยชดเชยความเสียหายทางการเงินตามวงเงินประกันเมื่อเกิดเหตุการณ์ข้อมูลรั่วไหลหรือระบบถูกโจมตี</p>
    </div>
    <div class="reading-warning-item">
      <h5 class="reading-concept-heading">ประกันไม่ได้อุดช่องโหว่ทางเทคนิคให้หายไป</h5>
      <p>ไม่ได้ลดความเสี่ยงที่ต้นเหตุ และไม่สามารถกู้คืนชื่อเสียงขององค์กรหรือความไว้วางใจของลูกค้าที่สูญเสียไปจากการถูกเจาะข้อมูลได้</p>
    </div>
  </div>
</div>

<div class="reading-example-box">
  <div class="reading-example-title"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><strong>ตัวอย่างสถานการณ์จริง: การประยุกต์ใช้ 4 กลยุทธ์จัดการความเสี่ยง (Avoid, Mitigate, Transfer, Accept) ในโครงการย้ายระบบขึ้นคลาวด์</strong></div>
  <div class="reading-example-step"><strong>1. สถานการณ์ตั้งต้น (Initial Situation):</strong> สถาบันการเงินแห่งหนึ่งกำลังวางแผนพัฒนาแอปพลิเคชันธุรกรรมออนไลน์บนคลาวด์ ทีมประเมินความเสี่ยงพบประเด็นสำคัญ 4 ด้านที่ต้องตัดสินใจรับมือ:</div>
  <div class="reading-example-step"><strong>2. การเลือกกลยุทธ์ตามบริบท (Strategic Response Selection):</strong>
    <ul>
      <li><strong>Risk Avoidance (หลีกเลี่ยง):</strong> ฝ่ายการตลาดต้องการทำระบบเก็บบัตรเครดิตในเครื่องเซิร์ฟเวอร์ของตนเองเพื่อความสะดวก แต่ทีมความปลอดภัยประเมินว่าเสี่ยงถูกโจมตีสูงมาก จึงตัดสินใจ <em>ยกเลิกฟีเจอร์นี้ทิ้งโดยสิ้นเชิง</em> และเปลี่ยนไปเชื่อมต่อกับ Payment Gateway ภายนอกที่ผ่านการรับรอง PCI DSS แทน เพื่อตัดกิจกรรมที่มีความเสี่ยงสูงออกไป</li>
      <li><strong>Risk Mitigation (ลดความเสี่ยง):</strong> ความเสี่ยงจากการถูกดักรับข้อมูลบนอินเทอร์เน็ต (Man-in-the-Middle) องค์กร <em>ติดตั้งมาตรการควบคุมทางเทคนิค</em> บังคับใช้โปรโตคอล TLS 1.3, ติดตั้ง Web Application Firewall (WAF), เข้ารหัสฐานข้อมูล, และบังคับให้ผู้ใช้ทุกคนยืนยันตัวตนด้วย MFA</li>
      <li><strong>Risk Transfer (โอนความเสี่ยง):</strong> ความเสี่ยงจากผลกระทบทางการเงินและความรับผิดชอบตามกฎหมายหากเกิดเหตุการณ์ข้อมูลลูกค้ารั่วไหลครั้งใหญ่ องค์กร <em>ซื้อประกันภัยไซเบอร์ (Cyber Insurance) วงเงิน 50 ล้านบาท</em> เพื่อให้บริษัทประกันเป็นผู้รับภาระความเสียหายทางการเงินแทน</li>
      <li><strong>Risk Acceptance (ยอมรับความเสี่ยง):</strong> ความเสี่ยงจากความล่าช้าในการประมวลผล (Network Latency) เล็กน้อย 0.05 วินาทีระหว่างคลาวด์ต่างภูมิภาค ซึ่งไม่กระทบต่อประสบการณ์ใช้งานของผู้ใช้และต้นทุนในการเช่าคู่สายความเร็วสูงพิเศษระดับ Dedicated สูงเกินความจำเป็น ผู้บริหารจึง <em>ลงนามยอมรับความเสี่ยงนี้อย่างเป็นทางการ</em> ภายในกรอบ Risk Appetite</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): ในโลกความเป็นจริง องค์กรไม่ได้เลือกใช้เพียงกลยุทธ์เดียว แต่ต้องผสมผสานทั้ง 4 กลยุทธ์ตามระดับความเสี่ยง ต้นทุน และความเต็มใจรับความเสี่ยง (Risk Appetite) ขององค์กร</div>
</div>

<div id="topic-1-2-inherent-residual-risk" class="reading-topic-anchor"></div>

### 1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Inherent Risk (ความเสี่ยงดั้งเดิม)</h4>
  <p>ระดับความเสี่ยงที่มีอยู่ตามธรรมชาติก่อนที่จะมีการนำมาตรการควบคุมความปลอดภัยใด ๆ มาติดตั้งใช้งาน (Risk before controls)</p>
</div>

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Residual Risk (ความเสี่ยงที่หลงเหลือ)</h4>
  <p>ระดับความเสี่ยงที่ยังคงหลงเหลืออยู่หลังจากที่ได้ติดตั้งมาตรการควบคุมความปลอดภัยแล้ว (Risk after controls)</p>
  <p>Residual Risk คือความเสี่ยงที่ประเมินใหม่หลังคำนึงถึงมาตรการควบคุม ไม่ใช่การลบคะแนนหรือเงินออกจากกันได้เสมอไป ต้องประเมินโอกาสเกิดและผลกระทบที่ยังเหลืออยู่ด้วยโมเดลและสเกลที่เหมาะสม</p>
  <p><em>ตัวอย่าง:</em> ก่อนติดตั้ง MFA ความเสี่ยงที่บัญชีจะถูกแฮกจากรหัสผ่านรั่วมีสูงมาก (Inherent Risk สูง) หลังติดตั้ง MFA ความเสี่ยงลดลงอย่างมาก แต่ยังคงมีโอกาสที่ผู้ใช้อาจถูกหลอกด้วยฟิชชิ่งแบบขั้นสูง (Adversary-in-the-Middle) อยู่บ้าง ความเสี่ยงที่ยังเหลือน้อยนี้เรียกว่า <strong>Residual Risk</strong></p>
</div>

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Risk Appetite (ความเต็มใจรับความเสี่ยง)</h4>
  <p>ปริมาณและประเภทของความเสี่ยงในระดับกว้างที่องค์กรพร้อมและยินดีที่จะเปิดรับเพื่อบรรลุเป้าหมายและวิสัยทัศน์ทางธุรกิจ</p>
</div>

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Risk Tolerance (ขอบเขตความเสี่ยงที่ยอมรับได้)</h4>
  <p>ขอบเขตความเบี่ยงเบนที่ยอมให้เกิดขึ้นได้ในแต่ละโครงการหรือระบบย่อย เป็นระดับที่จำเพาะเจาะจงและวัดผลได้มากกว่า Risk Appetite</p>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    <span>วงจรการตัดสินใจความเสี่ยงในทางปฏิบัติ (Risk Decision Flow)</span>
  </div>
  <p><strong>1. คำนวณความเสี่ยงดั้งเดิม:</strong> ประเมินระดับความเสี่ยงที่ยังไม่มีการควบคุม (Inherent Risk)</p>
  <p><strong>2. นำมาตรการควบคุมมาใช้:</strong> ติดตั้ง Security Controls ที่เหมาะสมเพื่อลดโอกาสเกิดหรือผลกระทบ</p>
  <p><strong>3. ประเมินความเสี่ยงที่เหลืออยู่:</strong> คำนวณ Residual Risk หลังมีมาตรการควบคุม</p>
  <p><strong>4. เปรียบเทียบกับ Risk Appetite:</strong></p>
  <ul>
    <li>หาก <strong>Residual Risk &le; Risk Appetite</strong> &rarr; องค์กร <strong>ยอมรับความเสี่ยง (Accept)</strong> ได้อย่างเป็นทางการ</li>
    <li>หาก <strong>Residual Risk &gt; Risk Appetite</strong> &rarr; องค์กร <strong>ต้องดำเนินการจัดการต่อ (Treat)</strong> เช่น ลดความเสี่ยงเพิ่มเติม (Mitigate), โอนความเสี่ยง (Transfer), หรือหลีกเลี่ยงกิจกรรมนั้น (Avoid) จนกว่าจะอยู่ภายในกรอบที่ยอมรับได้</li>
  </ul>
</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>กระบวนการตัดสินใจเลือกกลยุทธ์รับมือความเสี่ยง (Risk Treatment Decision Logic):</h5>

<div class="reading-semantic-diagram" data-diagram="riskTreatmentDecisionFlow"></div>
<p class="reading-semantic-note">ภาพเชื่อมคำศัพท์ข้างต้นกับทางเลือกในการตอบสนอง ไม่ใช่สูตรตัดสินใจแทนผู้มีอำนาจ / This study model connects the definitions to response options; authorized judgment remains necessary.</p>

</section>


<section id="obj-1-3" class="reading-objective-section reading-structured-objective">

## Objective 1.3: Understand governance concepts

การกำกับดูแลความมั่นคงปลอดภัยสารสนเทศ (Security Governance) คือการกำหนดทิศทาง โครงสร้างอำนาจหน้าที่ และกติกาเพื่อให้มั่นใจว่ากิจกรรมด้านความปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย
<div id="topic-1-3-governance-fundamentals" class="reading-topic-anchor"></div>

### 1.3.1 Security Governance Fundamentals

**Security Governance** คือระบบความสัมพันธ์และกระบวนการที่คณะกรรมการบริหารและผู้บริหารระดับสูงใช้ในการ **ชี้นำ (Direct), ควบคุม (Control), และติดตามตรวจสอบ (Hold Accountable)** การดำเนินงานด้านความปลอดภัย

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>แกนหลักของ Governance:</h4>
**Governance = Direction + Oversight + Accountability**

> **ข้อสอบมักถามความแตกต่าง:**  
> ผู้บริหารระดับสูงที่ทำหน้าที่ Governance **ไม่ใช่ผู้ที่ลงไปคอนฟิก Firewall หรือตั้งกฎบนเราเตอร์ด้วยตนเอง** แต่เป็นผู้กำหนดนโยบาย ทิศทาง การจัดสรรงบประมาณ การแต่งตั้งผู้รับผิดชอบ และการตรวจสอบว่าองค์กรกำลังมุ่งหน้าไปในทิศทางที่ถูกต้อง

<div id="topic-1-3-laws-regulations" class="reading-topic-anchor"></div>

### 1.3.2 Laws and Regulations

กฎหมายและข้อบังคับคือ **ข้อกำหนดที่มีผลผูกพันตามกฎหมาย (Legally Enforceable Requirements)** หากฝ่าฝืนจะมีบทลงโทษทั้งทางแพ่ง ทางอาญา หรือค่าปรับมหาศาล

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>ตัวอย่างสำคัญที่มักพบในสื่อการเรียนและการสอบ:</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">GDPR (General Data Protection Regulation)</h5>
  <p>GDPR คุ้มครองข้อมูลส่วนบุคคลตามขอบเขตการใช้บังคับของกฎหมาย เช่น การประมวลผลในบริบทกิจกรรมของสถานประกอบการในสหภาพยุโรป หรือการเสนอสินค้า/บริการแก่บุคคลที่อยู่ในสหภาพยุโรปหรือเฝ้าติดตามพฤติกรรมของบุคคลที่เกิดขึ้นที่นั่นตามเงื่อนไข Article 3 การมีสัญชาติ EU เพียงอย่างเดียวไม่ใช่เกณฑ์ตัดสิน</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">HIPAA (Health Insurance Portability and Accountability Act)</h5>
  <p>กฎหมายในสหรัฐอเมริกาที่เน้นการคุ้มครองข้อมูลสุขภาพของผู้ป่วย (Protected Health Information - PHI)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">PCI DSS (Payment Card Industry Data Security Standard)</h5>
  <p>มาตรฐานความปลอดภัยสำหรับองค์กรที่มีการจัดเก็บ ประมวลผล หรือส่งต่อข้อมูลบัตรเครดิต/เดบิต (แม้จะเป็นมาตรฐานของกลุ่มอุตสาหกรรม แต่มีผลบังคับใช้ผ่านสัญญาระหว่างธนาคารและผู้ให้บริการ)</p>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>หลักสำคัญเรื่องความสอดคล้อง (Applicability)</span>
  </div>
  <p>องค์กรแต่ละแห่งไม่ได้มีหน้าที่ต้องปฏิบัติตามกฎหมายหรือข้อบังคับทุกตัวบนโลก แต่ต้องพิจารณาจาก <strong>พื้นที่ตั้งทางภูมิศาสตร์ (Geography), อุตสาหกรรม (Industry), และประเภทของข้อมูล (Data Type)</strong> ที่ตนเองครอบครอง</p>
</div>

<div id="topic-1-3-security-frameworks" class="reading-topic-anchor"></div>

### 1.3.3 Security Frameworks

**Security Framework** คือโครงสร้างหรือพิมพ์เขียวที่เป็นระบบ (Structured Blueprint) สำหรับใช้เป็นแนวทางในการสร้าง ปรับปรุง และประเมินโปรแกรมความปลอดภัยขององค์กร

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>ตัวอย่าง Framework ที่เป็นที่ยอมรับระดับสากล:</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">NIST Cybersecurity Framework (NIST CSF)</h5>
  <p>กรอบการดำเนินงานยอดนิยม ประกอบด้วยฟังก์ชันหลัก (Identify, Protect, Detect, Respond, Recover, Govern) ช่วยให้องค์กรประเมินช่องว่างและยกระดับความมั่นคงปลอดภัย</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">ISO/IEC 27001</h5>
  <p>มาตรฐานสากลว่าด้วยการจัดทำ นำไปปฏิบัติ บำรุงรักษา และปรับปรุง <strong>ระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (Information Security Management System - ISMS)</strong> มุ่งเน้นการบริหารความเสี่ยงและกระบวนการอย่างต่อเนื่อง</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">CIS Controls (Center for Internet Security Controls)</h5>
  <p>รายการแนวทางปฏิบัติและมาตรการป้องกันความปลอดภัยที่ได้รับการจัดลำดับความสำคัญตามความเร่งด่วน (Prioritized Safeguards) เพื่อรับมือกับการโจมตีทางไซเบอร์ที่พบบ่อยที่สุด</p>
</div>

<div id="topic-1-3-document-hierarchy" class="reading-topic-anchor"></div>

### 1.3.4 Security Document Hierarchy

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22 12 2"></polygon></svg>ลำดับชั้นของเอกสารความปลอดภัยเป็นหัวข้อที่ออกสอบบ่อยมาก และต้องแยกหน้าที่ของเอกสารแต่ละระดับให้ชัดเจน:</h4>

<div class="reading-semantic-diagram" data-diagram="documentHierarchy"></div>

| ประเภทเอกสาร | บทบาทหน้าที่ | ระดับการบังคับ | ตัวอย่างรูปธรรม |
|---|---|---|---|
| **Policy (นโยบาย)** | กำหนดทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหาร (Answers: *WHAT & WHY*) | **Mandatory (บังคับทุกคน)** | *"พนักงานทุกคนต้องใช้รหัสผ่านที่รัดกุมและปกป้องข้อมูลลูกค้า"* |
| **Standard (มาตรฐาน)** | กำหนดเกณฑ์ขั้นต่ำ ข้อกำหนดทางเทคนิคที่จำเพาะเจาะจงและวัดผลได้ (Answers: *EXACT SPECIFICATION*) | **Mandatory (บังคับทุกคน)** | *"บัญชีผู้ดูแลระบบต้องใช้ MFA ตามมาตรฐานที่องค์กรอนุมัติ"* |
| **Procedure (ขั้นตอนปฏิบัติ)** | คำแนะนำขั้นตอนการทำงานทีละขั้นแบบเป็นลำดับ (Answers: *HOW*) | **Mandatory (บังคับผู้ปฏิบัติ)** | *"ขั้นตอนการรีเซ็ตรหัสผ่าน: 1. เปิดเว็บพอร์ทัล 2. สแกนบัตร 3. ยืนยัน OTP 4. บันทึกผล"* |
| **Guideline (แนวทางปฏิบัติ)** | คำแนะนำ ข้อเสนอแนะ หรือ Best Practices เพื่อช่วยในการตัดสินใจ (Answers: *RECOMMENDATION*) | **Advisory (ไม่บังคับ ยืดหยุ่น)** | *"ข้อแนะนำในการสร้าง Passphrase ที่จำง่ายแต่เดายาก เช่น การนำคำ 4 คำมาร้อยเรียงกัน"* |

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    <span>สูตรจำเร็วสำหรับข้อสอบ</span>
  </div>
  <div class="reading-callout-group">
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Policy = WHAT</h5>
      <p>ทิศทางหลักการ วิสัยทัศน์ และความคาดหวังของผู้บริหาร (Mandatory)</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Standard = REQUIRED SPECS</h5>
      <p>ข้อกำหนดขั้นต่ำที่จำเพาะเจาะจงและวัดผลได้ (Mandatory)</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Procedure = HOW</h5>
      <p>ขั้นตอนการทำงานทีละสเต็ปแบบเป็นลำดับ (Mandatory)</p>
    </div>
    <div class="reading-callout-item">
      <h5 class="reading-concept-heading">Guideline = SHOULD</h5>
      <p>คำแนะนำหรือ Best Practice เพื่อช่วยตัดสินใจ (Advisory / ไม่บังคับ)</p>
    </div>
  </div>
</div>

<div id="topic-1-3-grc" class="reading-topic-anchor"></div>

### 1.3.5 Governance, Risk, and Compliance (GRC)

**GRC** คือการบูรณาการสามเสาหลักเข้าด้วยกันเพื่อให้องค์กรขับเคลื่อนไปข้างหน้าอย่างปลอดภัย:

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Governance</h4>
  <p>ชี้ทิศทาง กำหนดความรับผิดชอบ และดูแลภาพรวมเชิงกลยุทธ์</p>
</div>

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Risk Management</h4>
  <p>ระบุและจัดการกับความไม่แน่นอนที่อาจส่งผลกระทบต่อเป้าหมายขององค์กร</p>
</div>

<div class="reading-concept-item">
  <h4 class="reading-concept-heading">Compliance</h4>
  <p>ปฏิบัติตามกฎหมาย ระเบียบ ข้อบังคับ และเงื่อนไขสัญญาอย่างถูกต้อง</p>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อคิดสำคัญสำหรับสอบ</span>
  </div>
  <p><strong>"Compliance is not equivalent to complete security."</strong></p>
  <p>การปฏิบัติตามมาตรฐานครบถ้วน (100% Compliant) ไม่ได้รับประกันว่าองค์กรจะปลอดภัย 100% การตรวจสอบและประเมินความเสี่ยงที่แท้จริงตามบริบทของตนเองยังคงเป็นสิ่งที่ต้องทำควบคู่กันเสมอ</p>
</div>

</section>


<section id="obj-1-4" class="reading-objective-section reading-structured-objective">

## Objective 1.4: Understand cybersecurity controls

มาตรการควบคุมความปลอดภัย (Security Controls) คือเครื่องมือ กลไก และกระบวนการที่นำมาใช้ป้องกัน ตรวจจับ และตอบสนองต่อความเสี่ยง การวิเคราะห์ข้อสอบต้องแยกให้ออกระหว่าง **Category (หมวดหมู่ของมาตรการ)** และ **Type / Function (หน้าที่การทำงานของมาตรการ)**
<div id="topic-1-4-control-categories" class="reading-topic-anchor"></div>

### 1.4.1 Security Control Categories

**คำศัพท์ในโครงร่างสอบ (Outline terminology):** โครงร่างสอบ CC ที่มีผล 1 กันยายน 2026 ระบุหมวด Technical, Administrative และ Physical; บทเรียนนี้แยกงานบริหาร (Managerial) และงานประจำวันโดยบุคลากร (Operational) เพื่อช่วยอธิบายด้าน Administrative / The CC outline effective 1 September 2026 names Technical, Administrative and Physical controls; this course explains administrative work through managerial and day-to-day operational activities.

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>การแบ่งหมวดหมู่ตามลักษณะของกลไกหรือสิ่งที่นำมาดำเนินการ:</h4>

:::control-categories
- **Technical (Logical) Controls** (มาตรการทางเทคนิค)
- **Managerial (Administrative) Controls** (มาตรการเชิงบริหารจัดการ)
- **Operational Controls** (มาตรการเชิงปฏิบัติการ)
- **Physical Controls** (มาตรการทางกายภาพ)
:::

<figure class="reading-figure">
  <div class="reading-figure-img-wrap">
    <img src="assets/images/reading/optical-access-turnstiles.jpg" alt="Drop Arm Optical Turnstiles with integrated access control" class="reading-figure-img" width="720" height="400" loading="lazy">
  </div>
  <figcaption class="reading-figcaption">
    <div class="reading-figure-header">
      <span class="reading-figure-badge badge-physical">Physical Security Control</span>
      <h5 class="reading-figure-title">Optical Access Control Turnstiles (ระบบประตูปีกกั้นออปติคัล)</h5>
    </div>
    <p class="reading-figure-desc">ตัวอย่างมาตรการควบคุมทางกายภาพ (Physical Control) ที่ทำหน้าที่ร่วมกันทั้ง <strong>Preventive</strong> (สกัดกั้นการเข้าถึงโดยไม่ได้รับอนุญาต และช่วยจำกัดการเดินตามกันหรือ Tailgating / Piggybacking ตามการออกแบบและการใช้งาน) และ <strong>Detective</strong> (มีเซนเซอร์ตรวจจับและส่งสัญญาณเตือน Alarm เมื่อมีการบุกรุกหรือฝ่าแนวกั้น)</p>
    <div class="reading-attribution">ภาพ: Wikimedia Commons (CC BY-SA 4.0 โดย Fabtron)</div>
  </figcaption>
</figure>

<div id="topic-1-4-control-types" class="reading-topic-anchor"></div>

### 1.4.2 Security Control Types / Functions

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>การแบ่งประเภทตามบทบาทหน้าที่ในการรับมือกับเหตุการณ์ (Timing & Purpose):</h4>

<div class="reading-semantic-diagram" data-diagram="controlTimeline"></div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">1. Deterrent (ยับยั้ง / ขัดขวาง)</h5>
  <p>มุ่งทำให้ผู้ประสงค์ร้ายเกิดความกลัว ไม่กล้าลงมือทำ หรือเปลี่ยนใจยอมแพ้ตั้งแต่ยังไม่เริ่ม</p>
  <p><strong>ตัวอย่าง:</strong> ป้ายเตือนมีกล้องวงจรปิดหรือห้ามบุกรุก, กล้องวงจรปิดที่ติดตั้งให้เห็นเด่นชัด, ป้อมยามพร้อมเจ้าหน้าที่ยืนตรวจ</p>
  <div class="reading-keyword-takeaway">
    <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Discourage, Warning signs, Visible presence, Don't even try</em>
  </div>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">2. Preventive (ป้องกัน / สกัดกั้น)</h5>
  <p>ปิดกั้นหรือสกัดกั้นไม่ให้การกระทำที่ไม่พึงประสงค์เกิดขึ้นได้สำเร็จ</p>
  <p><strong>ตัวอย่าง:</strong> Firewall บล็อกพอร์ตที่ไม่ปลอดภัย, ประตูล็อค, การใช้ MFA สกัดการเข้าสู่ระบบ, การเข้ารหัสข้อมูล, Mantrap ป้องกันการเดินตาม</p>
  <div class="reading-keyword-takeaway">
    <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Block, Stop, Prevent, Keep out, Deny access</em>
  </div>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">3. Detective (ตรวจจับ / แจ้งเตือน)</h5>
  <p>ตรวจจับ ค้นหา และแจ้งเตือนเมื่อมีเหตุการณ์ผิดปกติหรือมีการละเมิดเกิดขึ้น</p>
  <p><strong>ตัวอย่าง:</strong> Intrusion Detection Systems (IDS), Audit Logs, การเฝ้าระวังความผิดปกติ (Log Monitoring), Motion Detectors</p>
  <div class="reading-keyword-takeaway">
    <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Discover, Identify, Alert, Monitor, Audit trail</em>
  </div>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">4. Corrective (แก้ไข / บรรเทาผลกระทบ)</h5>
  <p>แก้ไข ฟื้นฟู หรือกำจัดความเสียหายหลังจากที่เหตุการณ์เกิดขึ้นแล้ว</p>
  <p><strong>ตัวอย่าง:</strong> การกำจัดมัลแวร์ออกจากเครื่อง, การลง Patch แก้ไขช่องโหว่หลังถูกเจาะ, การกู้คืนระบบจาก Backup</p>
  <div class="reading-keyword-takeaway">
    <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Fix, Repair, Remediate, Restore system to normal</em>
  </div>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">5. Compensating (ชดเชย / มาตรการทดแทน)</h5>
  <p>มาตรการทางเลือกที่นำมาใช้ทดแทนชั่วคราวหรือถาวรเมื่อไม่สามารถติดตั้งมาตรการควบคุมหลักตามมาตรฐานได้ (เนื่องจากข้อจำกัดทางเทคนิคหรือต้นทุน)</p>
  <p><strong>ตัวอย่าง:</strong> เซิร์ฟเวอร์รุ่นเก่าไม่รองรับ MFA จึงต้องใช้การเพิ่มการเฝ้าระวัง Log อย่างเข้มข้น ร่วมกับการจำกัดการเข้าถึงเฉพาะผ่าน VPN ภายในเท่านั้น</p>
  <div class="reading-keyword-takeaway">
    <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Alternative, Substitute, In place of primary control</em>
  </div>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">6. Directive (ชี้นำ / สั่งการ)</h5>
  <p>ชี้แนะ บังคับ หรือสั่งการให้บุคคลปฏิบัติตามแนวทางที่ถูกต้อง</p>
  <p><strong>ตัวอย่าง:</strong> นโยบายความปลอดภัย, ขั้นตอนการทำงาน, ป้ายบอกทางหนีไฟ</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">7. Recovery (กู้คืน)</h5>
  <p>ขั้นตอนเฉพาะในการฟื้นฟูสภาพแวดล้อมและข้อมูลให้กลับมาให้บริการได้ตามปกติหลังวิกฤต เช่น Disaster Recovery Plan Execution</p>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    <span>สูตรจำหน้าที่ของมาตรการ (Function Mnemonic; ไม่ใช่ลำดับตายตัว)</span>
  </div>
  <p><strong>"กลัว (Deterrent) → กัน (Preventive) → เจอ (Detective) → แก้ (Corrective)"</strong></p>
</div>

<div id="topic-1-4-overlapping-controls" class="reading-topic-anchor"></div>

### 1.4.3 Contextual & Overlapping Controls

**หลักสำคัญที่สุดในข้อสอบ:** มาตรการควบคุมหนึ่งตัวสามารถจัดอยู่ในหลายประเภทได้ ขึ้นอยู่กับ **บริบทและการใช้งานในโจทย์นั้น ๆ (Context is King)**

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>ตัวอย่างเปรียบเทียบการประยุกต์ใช้ตามบริบท:</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">กล้องวงจรปิด (CCTV)</h5>
  <ul>
    <li>ติดตั้งกล้องขนาดใหญ่ไว้หน้าประตูทางเข้าอย่างเด่นชัดเพื่อให้คนเห็น → ทำหน้าที่เป็น <strong>Deterrent Control</strong></li>
    <li>เจ้าหน้าที่นั่งดูกล้องสดเพื่อเฝ้าระวังผู้บุกรุก หรือเปิดเทปย้อนหลังสืบสวน → ทำหน้าที่เป็น <strong>Detective Control</strong></li>
    <li>ในแง่หมวดหมู่เครื่องมือ → จัดเป็น <strong>Physical Category</strong></li>
  </ul>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">ไฟร์วอลล์ (Firewall)</h5>
  <ul>
    <li>ทำหน้าที่ Drop หรือ Block แพ็กเก็ตที่ผิดปกติ → ทำหน้าที่เป็น <strong>Preventive Control</strong></li>
    <li>ทำหน้าที่บันทึก Connection Logs และแจ้งเตือน Alert → ทำหน้าที่เป็น <strong>Detective Control</strong></li>
    <li>ในแง่หมวดหมู่เครื่องมือ → จัดเป็น <strong>Technical Category</strong></li>
  </ul>
</div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>วิธีวิเคราะห์ข้อสอบเรื่อง Security Controls 3 สเต็ป</span>
  </div>
  <ol>
    <li>โจทย์ถามหา <strong>หมวดหมู่ (Category)</strong> หรือถามหา <strong>หน้าที่ (Type/Function)</strong>?</li>
    <li>มาตรการนั้นทำงาน <strong>ก่อน (Before), ระหว่าง (During), หรือหลัง (After)</strong> เกิดเหตุ? ใช้เวลาเป็นบริบทประกอบ ไม่ใช่เกณฑ์ตายตัว เพราะ Detective อาจพบย้อนหลังและ Corrective อาจเริ่มขณะเกิดเหตุ</li>
    <li>เจตนาหลักที่โจทย์เน้นคือ <strong>ยับยั้งใจ, สกัดกั้น, ค้นหาตรวจจับ, หรือแก้ไขปัญหา</strong>?</li>
  </ol>
</div>

</section>


<section id="obj-1-5" class="reading-objective-section reading-structured-objective">

## Objective 1.5: Maintain professional and ethical conduct

บุคลากรด้านความมั่นคงปลอดภัยไซเบอร์มักถือครองสิทธิ์ระดับสูงในระบบ หน้าที่ด้านจริยธรรม ความรอบคอบระมัดระวัง และการปฏิบัติตามประมวลจริยธรรมของสถาบันจึงเป็นข้อกำหนดที่ไม่อาจละเลยได้
<div id="topic-1-5-code-of-conduct" class="reading-topic-anchor"></div>

### 1.5.1 Professional Code of Conduct & Authority Boundaries

หลักจรรยาบรรณวิชาชีพกำหนดแนวทางการปฏิบัติตนของผู้เชี่ยวชาญด้านไซเบอร์ โดยยึดถือหลักความซื่อสัตย์ ความน่าเชื่อถือ และความรับผิดชอบ

<h4 class="reading-concept-group-title">หลักการเรื่องสิทธิ์และขอบเขตอำนาจ (Technical Access $\neq$ Business Authorization):</h4>
> การที่ผู้ดูแลระบบมีความสามารถทางเทคนิค (Technical Capability) ในการเข้าถึงระบบได้ทุกอย่าง **ไม่ได้แปลว่าบุคคลนั้นมีสิทธิ์อันชอบธรรม (Authorized Right) ในการเข้าไปดูหรือแก้ไขข้อมูลเหล่านั้นตามอำเภอใจ**

<div class="reading-example-box">
  <strong>ตัวอย่างคลาสสิก (Technical Access $\neq$ Business Authorization):</strong><br>
  นาย ก. เป็น Domain Administrator ของบริษัท มีสิทธิ์เข้าถึงฮาร์ดดิสก์ของแผนก HR ได้โดยตรงทางเทคนิค แต่นาย ก. <strong>ไม่มีสิทธิ์</strong> เข้าไปเปิดอ่านไฟล์ประวัติเงินเดือนหรือข้อมูลสุขภาพของเพื่อนร่วมงาน เว้นแต่จะมีคำสั่งหรือวัตถุประสงค์ทางธุรกิจที่ได้รับอนุมัติอย่างเป็นทางการ
</div>

<div id="topic-1-5-due-care-due-diligence" class="reading-topic-anchor"></div>

### 1.5.2 Due Care vs. Due Diligence

สองคำนี้เป็นคำศัพท์ทางกฎหมายและความปลอดภัยที่มักทำให้สับสน:

#### 1. Due Care (ความระมัดระวังตามสมควร)

การลงมือกระทำในสิ่งที่สมเหตุสมผลและรับผิดชอบ เพื่อปกป้องทรัพย์สินและลดความเสี่ยง

<div class="reading-keyword-takeaway">
  <strong>แก่นสำคัญในข้อสอบ:</strong> <em>Due Care = DO / Take Action</em>
</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ตัวอย่างการปฏิบัติ Due Care:</h5>

- การลง Patch อุดช่องโหว่ทันทีที่ได้รับแจ้ง
- การบังคับใช้นโยบายรหัสผ่านที่รัดกุม
- การติดตั้งโปรแกรมป้องกันไวรัสบนเครื่องคอมพิวเตอร์
- การฝึกอบรมพนักงานเรื่อง Phishing

#### 2. Due Diligence (ความพากเพียรตรวจสอบอย่างรอบคอบ)

การสืบค้น ตรวจสอบ ประเมินผล และติดตามสถานะความเสี่ยงอย่างต่อเนื่อง เพื่อให้รู้ว่าสิ่งที่ทำอยู่นั้นเหมาะสมและมีประสิทธิภาพจริงหรือไม่

<div class="reading-keyword-takeaway">
  <strong>แก่นสำคัญในข้อสอบ:</strong> <em>Due Diligence = CHECK / Verify / Investigate</em>
</div>

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ตัวอย่างการปฏิบัติ Due Diligence:</h5>

- การรัน Vulnerability Scan ตรวจสอบจุดอ่อนของเซิร์ฟเวอร์
- การทำ Risk Assessment ประจำปี
- การตรวจสอบประวัติและสถานะความปลอดภัยของ Vendor ก่อนเซ็นสัญญา
- การตรวจสอบผลการสแกนหลังจากการ Patch ว่าช่องโหว่ถูกปิดสนิทจริงหรือไม่

<h5 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>วงจรการทำงานร่วมกันและตารางคำกริยาแยกแยะในข้อสอบ:</h5>

<div class="reading-semantic-diagram" data-diagram="dueCareDiligence"></div>

| คำกริยาในโจทย์ Due Care (DO) | คำกริยาในโจทย์ Due Diligence (CHECK) |
|---|---|
| **Implement** (นำไปติดตั้ง) | **Assess / Evaluate** (ประเมินผล) |
| **Apply** (ปรับใช้) | **Review / Audit** (ทบทวนและตรวจสอบ) |
| **Protect** (ปกป้อง) | **Monitor** (เฝ้าระวัง) |
| **Take Action** (ลงมือปฏิบัติ) | **Investigate** (สืบค้นหาข้อเท็จจริง) |
| **Patch** (อุดช่องโหว่) | **Verify** (ตรวจพิสูจน์ยืนยัน) |

<p class="reading-table-note"><em>หมายเหตุ: คำกริยาในแต่ละคอลัมน์เป็นตัวอย่างกลุ่มคำกริยาบ่งชี้ (Illustrative Verb Clusters) ที่พบบ่อยในข้อสอบ ไม่ใช่คู่คำที่มีความสัมพันธ์เทียบเท่ากันแบบ 1 ต่อ 1 ในแต่ละบรรทัด</em></p>

<div id="topic-1-5-isc2-ethics" class="reading-topic-anchor"></div>

### 1.5.3 ISC2 Code of Ethics (The 4 Canons)

สมาชิกและผู้ถือใบรับรองของ ISC2 ทุกคนต้องยึดมั่นและปฏิบัติตาม **ประมวลจริยธรรม 4 ข้อ (4 Canons)** โดยพิจารณาหน้าที่ทั้งสี่ร่วมกับข้อเท็จจริงและใช้ดุลยพินิจทางวิชาชีพ:

<h4 class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>ประมวลจริยธรรม 4 ข้อ (The Four Canons):</h4>

<div class="reading-precedence-rule">
  <svg class="reading-rule-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  <span><strong>การใช้ประมวลจริยธรรม (Applying the Canons):</strong> พิจารณาหน้าที่ตาม Canon ทั้งสี่ร่วมกับข้อเท็จจริงและบริบท หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันอัลกอริทึมตัดสินความขัดแย้งแบบตายตัว <em>Use professional ethical judgment; numbering alone does not establish a universal conflict-resolution algorithm.</em></span>
</div>

<div class="reading-precedence-stack">
  <div class="reading-precedence-card tier-1">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">01</span>
        <h4 class="reading-precedence-title">Canon 1: Protect society, the common good, necessary public trust and confidence, and the infrastructure</h4>
      </div>
      <span class="reading-precedence-badge">Canon 1</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ปกป้องสังคม ประโยชน์ส่วนรวม ความไว้วางใจของสาธารณะ และโครงสร้างพื้นฐานสำคัญ:</strong> พิจารณาความปลอดภัยของสังคมและประโยชน์ส่วนรวมเมื่อประเมินผลกระทบของการกระทำ รวมถึงเมื่อมีแรงกดดันจากผลประโยชน์องค์กรหรือคำสั่งผู้ว่าจ้าง
    </p>
  </div>

  <div class="reading-precedence-card tier-2">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">02</span>
        <h4 class="reading-precedence-title">Canon 2: Act honorably, honestly, justly, responsibly, and legally</h4>
      </div>
      <span class="reading-precedence-badge">Canon 2</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ประพฤติตนอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม มีความรับผิดชอบ และถูกต้องตามกฎหมาย:</strong> ปฏิบัติตามกฎหมายอย่างเคร่งครัด ไม่โกหก ไม่บิดเบือนข้อเท็จจริง และรักษาความโปร่งใสในวิชาชีพ <em>(ข้อสังเกต: Canon 2 กำหนดหน้าที่เหล่านี้ร่วมกัน ไม่ควรอนุมานลำดับเหนือกว่ากันจากลำดับคำในประโยค การกระทำที่ไม่ผิดกฎหมายอาจยังขัดจริยธรรมหากเป็นการหลอกลวง บิดเบือนข้อเท็จจริง หรือไม่เป็นธรรม)</em>
    </p>
  </div>

  <div class="reading-precedence-card tier-3">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">03</span>
        <h4 class="reading-precedence-title">Canon 3: Provide diligent and competent service to principals</h4>
      </div>
      <span class="reading-precedence-badge">Canon 3</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ให้บริการแก่นายจ้างหรือลูกค้าอย่างขยันขันแข็ง รอบคอบ และเต็มความสามารถ:</strong> รักษาความลับและผลประโยชน์ที่ชอบธรรมของผู้ว่าจ้าง ไม่นำข้อมูลลับไปแสวงหาผลประโยชน์ส่วนตน และไม่รับงานที่ตนขาดความเชี่ยวชาญโดยไม่แจ้งล่วงหน้า
    </p>
  </div>

  <div class="reading-precedence-card tier-4">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">04</span>
        <h4 class="reading-precedence-title">Canon 4: Advance and protect the profession</h4>
      </div>
      <span class="reading-precedence-badge">Canon 4</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ส่งเสริม ยกระดับ และปกป้องชื่อเสียงของวิชาชีพ:</strong> ร่วมแลกเปลี่ยนความรู้ ยกระดับมาตรฐานวิชาชีพด้านไซเบอร์ และไม่กระทำการใดที่ทำให้เกียรติภูมิของวิชาชีพเสื่อมเสีย
    </p>
  </div>
</div>

> **สูตรจำตัวอักษรย่อ (Mnemonic):**  
> "<strong class="reading-mnemonic-highlight">S - A - P - P</strong>"  
> <strong class="reading-mnemonic-highlight">S</strong>ociety → <strong class="reading-mnemonic-highlight">A</strong>ct honorably → <strong class="reading-mnemonic-highlight">P</strong>rincipals → <strong class="reading-mnemonic-highlight">P</strong>rofession

<div class="reading-callout info">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>กรณีศึกษาข้อสอบ: ภาวะกลืนไม่เข้าคายไม่ออกทางจริยธรรม (Ethical Dilemmas)</span>
  </div>
  <p><strong>สถานการณ์จำลอง:</strong> ผู้บริหารสั่งให้ผู้ดูแลระบบปกปิดรายงานช่องโหว่ความปลอดภัยร้ายแรงในระบบควบคุมการจ่ายน้ำประปาของเมือง (Critical Infrastructure) เนื่องจากกลัวผลกระทบต่อราคาหุ้นของบริษัท</p>
  <p><strong>แนวคิดการวิเคราะห์ตามหลักการ ISC2:</strong> เหตุการณ์นี้เกิดความขัดแย้งระหว่างหน้าที่ต่อผู้ว่าจ้าง (<strong>Canon 3:</strong> Diligent service to principals) กับความปลอดภัยของสังคม (<strong>Canon 1:</strong> Protect society, common good &amp; infrastructure)</p>
  <p><strong>แนวทางใช้ดุลยพินิจ (Professional judgment):</strong> คำนึงถึงความปลอดภัยของสาธารณะ เก็บรักษาหลักฐานที่เกี่ยวข้อง และขอคำแนะนำผ่านช่องทางที่มีอำนาจ เช่น ผู้รับผิดชอบด้านความปลอดภัยหรือฝ่ายกฎหมาย โดยพิจารณาหน้าที่ทั้งสี่ร่วมกับข้อเท็จจริง ไม่อนุมานว่ามีสิทธิปกปิด เปิดเผยข้อมูลต่อสาธารณะโดยพลการ หรือทำผิดกฎหมาย / Protect public welfare, preserve relevant evidence and seek guidance through authorized channels, such as security leadership or legal counsel, considering all four duties and the facts. Do not infer permission to conceal, disclose publicly without authorization or act illegally.</p>
</div>

<div id="topic-1-5-distinctions-scenarios" class="reading-topic-anchor"></div>

### 1.5.4 Concept Distinctions, Scenarios & Quick Review

#### 1. ตาราง 12 คู่คำที่มักสับสนในข้อสอบ (Concept Distinctions Matrix)

<div class="reading-distinction-grid">
  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>1. Threat vs. Vulnerability</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Threat (ภัยคุกคาม)</strong>
        <div class="reading-distinction-desc">บุคคล สิ่ง หรือเหตุการณ์ภายในหรือภายนอกที่อาจก่ออันตราย (Insider, Hacker, Malware, Flood)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Vulnerability (ช่องโหว่)</strong>
        <div class="reading-distinction-desc">จุดอ่อนภายในระบบที่เปิดโอกาสให้ถูกโจมตี (Unpatched Server, Weak Password)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>2. Risk vs. Impact</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Risk (ความเสี่ยง)</strong>
        <div class="reading-distinction-desc">การพิจารณาโอกาสเกิด (Likelihood) ร่วมกับผลกระทบ (Impact) จากเหตุการณ์ที่ไม่แน่นอน</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Impact (ผลกระทบ)</strong>
        <div class="reading-distinction-desc">ขนาดหรือมูลค่าความเสียหายที่เกิดขึ้นจริงเมื่อระบบถูกโจมตี</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>3. Authentication vs. Authorization</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authentication (พิสูจน์ตัวตน)</strong>
        <div class="reading-distinction-desc">ยืนยันว่าคุณคือบุคคลนั้นจริงหรือไม่ ("Prove who you are")</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authorization (กำหนดสิทธิ์)</strong>
        <div class="reading-distinction-desc">ตัดสินว่าคุณมีสิทธิ์ทำอะไรกับระบบได้บ้าง ("What can you do")</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>4. Confidentiality vs. Privacy</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Confidentiality (ความลับ)</strong>
        <div class="reading-distinction-desc">ป้องกันไม่ให้ข้อมูลลับถูกเปิดเผยแก่ผู้ไม่มีสิทธิ์</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Privacy (ความเป็นส่วนตัว)</strong>
        <div class="reading-distinction-desc">สิทธิและการคุ้มครองข้อมูลส่วนบุคคล (PII) ตามกฎหมายและเจตนารมณ์ของเจ้าของข้อมูล</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>5. Integrity vs. Availability</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Integrity (ความถูกต้อง)</strong>
        <div class="reading-distinction-desc">ข้อมูลต้องไม่ถูกแก้ไขหรือทำลายโดยมิชอบ ("Can I trust the data?")</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Availability (ความพร้อมใช้)</strong>
        <div class="reading-distinction-desc">ระบบและข้อมูลพร้อมให้ผู้มีสิทธิ์เข้าถึงตามเวลาที่จำเป็นและข้อกำหนดบริการ ("Can I access it?")</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>6. Hashing vs. Encryption</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Hashing</strong>
        <div class="reading-distinction-desc">ฟังก์ชันทางเดียว (One-way) ใช้คำนวณค่าเพื่อตรวจสอบความถูกต้อง ไม่สามารถถอดรหัสกลับได้</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Encryption</strong>
        <div class="reading-distinction-desc">ฟังก์ชันสองทาง (Two-way) เข้ารหัสเพื่อรักษาความลับ และถอดรหัสกลับได้ด้วยกุญแจที่ถูกต้อง</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>7. Preventive vs. Detective</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Preventive (ป้องกัน)</strong>
        <div class="reading-distinction-desc">ปิดกั้นหรือสกัดกั้นการโจมตีไม่ให้เกิดขึ้น (Firewall drop, Door lock, MFA)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Detective (ตรวจจับ)</strong>
        <div class="reading-distinction-desc">ตรวจจับ ค้นหา และแจ้งเตือนเมื่อเกิดความผิดปกติ (IDS, Log monitor, Motion sensor)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>8. Corrective vs. Recovery</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Corrective (แก้ไข)</strong>
        <div class="reading-distinction-desc">แก้ไข เยียวยา หรือกำจัดมัลแวร์และอุดช่องโหว่เพื่อลดความเสียหาย</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Recovery (กู้คืน)</strong>
        <div class="reading-distinction-desc">ฟื้นฟูระบบและข้อมูลให้กลับมาให้บริการตามปกติหลังวิกฤต (DRP restore)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>9. Risk Transfer vs. Risk Mitigation</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Risk Transfer (โอนความเสี่ยง)</strong>
        <div class="reading-distinction-desc">ย้ายเฉพาะภาระทางการเงินไปยังบุคคลภายนอก (ประกันภัยไซเบอร์)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Risk Mitigation (ลดความเสี่ยง)</strong>
        <div class="reading-distinction-desc">ติดตั้งมาตรการทางเทคนิค/กระบวนการเพื่อลดโอกาสเกิดหรือผลกระทบโดยตรง</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>10. Policy vs. Procedure</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Policy (นโยบาย)</strong>
        <div class="reading-distinction-desc">ทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหารระดับสูง (WHAT & WHY)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Procedure (ขั้นตอนปฏิบัติ)</strong>
        <div class="reading-distinction-desc">ขั้นตอนการลงมือปฏิบัติทีละขั้นแบบเป็นลำดับสำหรับผู้ใช้งาน (HOW)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>11. Due Care vs. Due Diligence</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Due Care</strong>
        <div class="reading-distinction-desc">การลงมือกระทำในสิ่งที่สมเหตุสมผลและรับผิดชอบเพื่อปกป้องทรัพย์สิน (DO / Take Action)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Due Diligence</strong>
        <div class="reading-distinction-desc">การสืบค้น ตรวจสอบ ประเมินผล และติดตามสถานะความเสี่ยงอย่างรอบคอบ (CHECK / Investigate)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header">
      <span>12. Zero Trust vs. Defense in Depth</span>
    </div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Zero Trust</strong>
        <div class="reading-distinction-desc">ปรัชญาความเชื่อมั่นและการเข้าถึง ("Never Trust, Always Verify" ตรวจสอบทุกบริบท)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Defense in Depth</strong>
        <div class="reading-distinction-desc">ยุทธศาสตร์สถาปัตยกรรมความปลอดภัยที่วางเกราะป้องกันหลายชั้นสอดประสานกัน</div>
      </div>
    </div>
  </div>
</div>

#### 2. ตัวอย่างโจทย์สถานการณ์ทบทวน (Review Scenarios)

:::scenario
id: 1
topic: CIA Triad
situation: ผู้โจมตีสามารถแก้ไขตัวเลขเงินเดือนในฐานข้อมูลโดยที่ระบบไม่ส่งสัญญาณเตือนใด ๆ
question: เหตุการณ์นี้ส่งผลกระทบต่อหลักการใดของ CIA มากที่สุด?
answer: Integrity
reasoning: เพราะข้อมูลถูกแก้ไขดัดแปลงให้ผิดเพี้ยนไปจากความจริง
:::

:::scenario
id: 2
topic: Access Control
situation: พนักงานกรอกรหัสผ่านผ่านเรียบร้อยแล้ว แต่เมื่อคลิกเปิดไฟล์โฟลเดอร์การเงิน ระบบแจ้งว่าไม่สามารถเข้าถึงได้
question: ปัญหานี้เกี่ยวข้องกับขั้นตอนใดของระบบควบคุมการเข้าถึง?
answer: Authorization
reasoning: เนื่องจาก Authentication ยืนยันตัวตนผ่านแล้ว แต่สิทธิ์การเข้าถึงไม่อนุญาต
:::

:::scenario
id: 3
topic: Risk Management
situation: บริษัทแห่งหนึ่งตัดสินใจซื้อกรมธรรม์ประกันภัยไซเบอร์ (Cyber Insurance) วงเงิน 50 ล้านบาท เพื่อคุ้มครองกรณีข้อมูลรั่วไหล
question: จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?
answer: Risk Transfer (Sharing)
reasoning: การโอนย้ายภาระทางการเงินไปยังบริษัทประกันภัย
:::

:::scenario
id: 4
topic: Professional Conduct
situation: เจ้าหน้าที่ความปลอดภัยนำโปรแกรม Vulnerability Scanner มาสแกนเซิร์ฟเวอร์ทั้งหมดในองค์กรเพื่อทำรายงานความเสี่ยง
question: การกระทำนี้สะท้อนถึงหลักการใดระหว่าง Due Care กับ Due Diligence?
answer: Due Diligence
reasoning: เนื่องจากเป็นการตรวจสอบ สืบค้น และประเมินความเสี่ยงอย่างรอบคอบ
:::

:::scenario
id: 5
topic: Professional Conduct
situation: เมื่อระบบสแกนพบช่องโหว่ระดับวิกฤต ทีมงานจึงเร่งดาวน์โหลดและติดตั้ง Security Patch ทันที
question: การลงมือติดตั้ง Patch สะท้อนถึงหลักการใด?
answer: Due Care
reasoning: เป็นการลงมือปฏิบัติเพื่อปกป้องทรัพย์สิน
:::

:::scenario
id: 6
topic: Risk Analysis
situation: ผู้บริหารพิจารณาแล้วพบว่า ค่าใช้จ่ายในการซื้ออุปกรณ์ป้องกัน DDoS มูลค่าปีละ 1,000,000 บาท สูงกว่าความเสียหายเฉลี่ยต่อปีที่คาดว่าจะเกิดขึ้น (ALE = 50,000 บาท) ผู้บริหารจึงลงนามอนุมัติไม่ซื้ออุปกรณ์และยอมรับความเสี่ยงนี้
question: จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?
answer: Risk Acceptance
reasoning: การยอมรับความเสี่ยงอย่างเป็นทางการเมื่อต้นทุนสูงกว่าผลประโยชน์
:::

:::scenario
id: 7
topic: Security Architecture
situation: องค์กรบังคับใช้นโยบายว่า แม้พนักงานจะล็อกอินผ่านคอมพิวเตอร์ที่ต่อสาย LAN ภายในอาคารสำนักงานใหญ่ ทุกคนยังต้องยืนยันตัวตนผ่าน MFA และระบบจะตรวจสอบสุขภาพของเครื่องก่อนอนุญาตให้เข้าถึงคลาวด์
question: สอดคล้องกับแนวคิดทางสถาปัตยกรรมความปลอดภัยใด?
answer: Zero Trust Architecture
reasoning: Never Trust, Always Verify ไม่ให้ความเชื่อถือโดยปริยายเพียงเพราะอยู่ภายในเครือข่าย
:::

:::scenario
id: 8
topic: Security Controls
situation: ป้ายเตือนขนาดใหญ่เขียนว่า *"พื้นที่หวงห้าม บันทึกภาพด้วยกล้องวงจรปิดตลอด 24 ชั่วโมง ผู้บุกรุกจะถูกดำเนินคดีตามกฎหมาย"*
question: ป้ายเตือนนี้ทำหน้าที่เป็น Security Control ประเภทใด?
answer: Deterrent Control
reasoning: มุ่งยับยั้งใจและขัดขวางไม่ให้ผู้ประสงค์ร้ายกล้าลงมือกระทำผิด
:::

#### 3. สรุป Keyword ลัดก่อนสอบ (Exam Keyword Cheat Sheet)

| Keyword ในโจทย์ข้อสอบ | เชื่อมโยงไปยังคำตอบ / แนวคิด |
|---|---|
| *Unauthorized disclosure / Read without permission* | **Confidentiality** |
| *Unauthorized modification / Tampering / Data altered* | **Integrity** |
| *Downtime / Service disruption / Inaccessible system* | **Availability** |
| *Claim identity / Who are you? — กล่าวอ้างตัวตน* | **Identification (การระบุตัวตน)** |
| *Prove the claimed identity / Prove it — พิสูจน์ตัวตนที่กล่าวอ้าง* | **Authentication (การพิสูจน์ตัวตน)** |
| *Permissions / Allowed actions / Read vs Write* | **Authorization** |
| *Logs / Audit trails / Trace actions* | **Accounting / Accountability** |
| *Evidence of transaction / Cannot deny sending* | **Non-repudiation** |
| *Threat exploits weakness* | **Vulnerability → Risk** |
| *Cease risky activity / Stop service* | **Risk Avoidance** |
| *Install patches / Deploy MFA / Lower impact* | **Risk Mitigation** |
| *Purchase cyber insurance / Third-party SLA* | **Risk Transfer** |
| *Formal executive sign-off / Cost exceeds benefit* | **Risk Acceptance** |
| *Risk remaining after controls deployed* | **Residual Risk** |
| *High-level management direction (WHAT)* | **Policy** |
| *Mandatory minimum specification (REQUIRED)* | **Standard** |
| *Step-by-step technical instructions (HOW)* | **Procedure** |
| *Advisory best practice recommendations (SHOULD)* | **Guideline** |
| *Reasonable steps taken to protect (DO)* | **Due Care** |
| *Investigate, assess, evaluate, verify (CHECK)* | **Due Diligence** |
| *Verify every access regardless of location* | **Zero Trust** |
| *Multiple layered safeguards / Redundant defenses* | **Defense in Depth** |
| *Society → Act honorably → Principals → Profession* | **ISC2 Code of Ethics (Canons 1–4)** |

</section>
