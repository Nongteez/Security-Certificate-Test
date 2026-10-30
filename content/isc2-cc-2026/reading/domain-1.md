<p class="reading-lead">เอกสารรวบรวมและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับ <strong>Domain 1: Security Principles</strong> (น้ำหนักข้อสอบ 24%) ครอบคลุมหลักการพื้นฐานด้านความมั่นคงปลอดภัยไซเบอร์ การบริหารความเสี่ยง การกำกับดูแล นโยบาย มาตรการควบคุม และประมวลจริยธรรมวิชาชีพของ ISC2 เพื่อสร้างความเข้าใจเชิงลึกสำหรับเตรียมสอบ</p>

<section id="obj-1-1" class="reading-objective-section">

## Objective 1.1: Understand cybersecurity concepts

หัวข้อนี้ว่าด้วยรากฐานที่สำคัญที่สุดของความมั่นคงปลอดภัยสารสนเทศ การเข้าใจว่าเรากำลังปกป้องอะไร จากภัยคุกคามใด ด้วยหลักการและกลไกพื้นฐานอย่างไร

<div id="topic-1-1-core-concepts" class="reading-topic-anchor"></div>

### 1.1.1 Core Security Concepts & Assets

**Information Security (InfoSec)** คือการปกป้องข้อมูลและระบบสารสนเทศจากการเข้าถึง การเปิดเผย การแก้ไข การทำลาย หรือการหยุดชะงักโดยไม่ได้รับอนุญาต โดยต้องรักษาสมดุลระหว่าง **ความปลอดภัย (Security)** กับ **ความต้องการและความคล่องตัวทางธุรกิจ (Business Needs)**

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h7"/></svg>คำศัพท์รากฐานที่ต้องแยกความหมายให้ชัดเจน:</p>

| คำศัพท์ | คำจำกัดความ | ตัวอย่างในโลกจริง |
|---|---|---|
| **Asset (ทรัพย์สิน)** | สิ่งที่มีคุณค่าต่อองค์กร ซึ่งหากสูญหาย เสียหาย หรือรั่วไหลจะเกิดผลกระทบ | ฐานข้อมูลลูกค้า (Customer Database), ระบบชำระเงิน, ทรัพย์สินทางปัญญา, บุคลากร |
| **Threat (ภัยคุกคาม)** | สิ่ง เหตุการณ์ หรือบุคคลที่อาจก่อให้เกิดอันตรายหรือสร้างความเสียหายต่อ Asset | แฮกเกอร์, มัลแวร์, แรนซัมแวร์, ไฟไหม้, น้ำท่วม, ไฟดับ |
| **Threat Actor (ผู้ก่อภัยคุกคาม)** | ตัวบุคคลหรือกลุ่มบุคคลที่ลงมือหรือพยายามก่อให้เกิดภัยคุกคาม | อาชญากรไซเบอร์ (Cybercriminals), พนักงานภายในที่ประสงค์ร้าย (Insider Threats), รัฐสนับสนุน (Nation-State) |
| **Vulnerability (ช่องโหว่)** | จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือการควบคุม ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์ | เซิร์ฟเวอร์ที่ยังไม่ได้ติดตั้ง Patch, การตั้งค่าความปลอดภัยผิดพลาด (Misconfiguration), รหัสผ่านที่คาดเดาง่าย |
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
      <p>Threat คือสิ่งภายนอกหรืออันตรายที่เข้ามา (เช่น Hacker, Flood) ส่วน Vulnerability คือจุดอ่อนภายในระบบของเรา (เช่น Unpatched Server หรือ Misconfiguration)</p>
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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</p>

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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</p>

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

ระบบ ข้อมูล และทรัพยากรต้อง **พร้อมให้ผู้มีสิทธิ์เข้าใช้งานได้เสมอเมื่อต้องการ** โดยมีเป้าหมายสำคัญคือการลด **Downtime** และรับประกันความต่อเนื่องทางธุรกิจจากการคุกคาม เช่น Hardware Failure, ไฟดับ (Power Outage), การโจมตี DDoS, Ransomware เข้ารหัส, หรือภัยธรรมชาติ

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>มาตรการควบคุมหลัก (Controls):</p>

- **Redundancy (ความซ้ำซ้อนของอุปกรณ์):** มีชิ้นส่วนสำรอง เช่น Power Supply คู่, RAID ฮาร์ดดิสก์
- **Failover & Load Balancing:** การกระจายทราฟฟิกและสลับระบบอัตโนมัติเมื่อเครื่องหลักล่ม
- **Uninterruptible Power Supply (UPS) & Backup Generators:** สำรองพลังงานไฟฟ้า
- **Redundant Network / Multiple ISPs:** มีผู้ให้บริการอินเทอร์เน็ตมากกว่า 1 เจ้า
- **Data Backups & Disaster Recovery (DR):** มีแผนและข้อมูลสำรองสำหรับกู้คืนระบบ

<div class="reading-keyword-takeaway">
  <strong>คีย์เวิร์ดในข้อสอบ:</strong> <em>Availability = Can I ACCESS it when needed? / Accessible / Downtime / Redundancy</em>
</div>

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>ตัวอย่างสถาปัตยกรรมเพิ่ม Availability:</p>

<div class="reading-semantic-diagram" data-diagram="loadBalancer"></div>

<h4 class="reading-subtopic-title">เปรียบเทียบ CIA จากสถานการณ์ข้อสอบ</h4>

| สถานการณ์ในโจทย์ | หลักการที่เด่นที่สุด | คำอธิบายเหตุผล |
|---|---|---|
| ข้อมูลเงินเดือนพนักงานรั่วไหลออกสู่สาธารณะ | **Confidentiality** | มีการเปิดเผยข้อมูลลับแก่ผู้ไม่มีสิทธิ์ |
| ผู้โจมตีเปลี่ยนเลขบัญชีรับเงินในใบแจ้งหนี้ | **Integrity** | ข้อมูลถูกดัดแปลงแก้ไขจนไม่ถูกต้อง |
| เว็บไซต์ระบบลงทะเบียนล่มเพราะทราฟฟิก DDoS มหาศาล | **Availability** | ผู้ใช้ที่ถูกต้องไม่สามารถเข้าถึงระบบได้ |
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

การควบคุมการเข้าถึงระบบมีลำดับขั้นตอนที่เป็นมาตรฐาน เรียกว่า **AAA Framework** โดยมีขั้นตอนตั้งต้นคือ **Identification**

<div class="reading-semantic-diagram" data-diagram="aaaLifecycle"></div>

#### 1. Identification — การระบุตัวตน

ขั้นตอนที่ผู้ใช้ **กล่าวอ้างว่าตนเองคือใคร (Claiming Identity)** เช่น การกรอก Username, การป้อน User ID, หรือการแตะบัตรพนักงาน

*หมายเหตุสำคัญ:* Identification ยังไม่ใช่การพิสูจน์ความจริง เป็นเพียงแค่การบอกชื่อหรือตัวตนเท่านั้น

#### 2. Authentication — การพิสูจน์ตัวตน

ขั้นตอนที่ระบบ **ตรวจสอบและพิสูจน์ว่าผู้ใช้เป็นบุคคลนั้นจริงตามที่กล่าวอ้าง (Proving Identity)** เช่น การตรวจสอบ Password, การตรวจลายนิ้วมือ, หรือการรับรหัส OTP


<div id="topic-1-1-mfa" class="reading-topic-anchor"></div>

### 1.1.4 Multi-Factor Authentication (MFA)

**MFA** คือการพิสูจน์ตัวตนโดยใช้ปัจจัยตั้งแต่ **2 ประเภทที่แตกต่างกันขึ้นไป (Two or More Independent Factors)**

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>ปัจจัยการพิสูจน์ตัวตนแบ่งออกเป็น 4 หมวดหลัก:</p>

:::mfa-factors
- **Something You Know** (สิ่งที่คุณรู้)
- **Something You Have** (สิ่งที่คุณมี)
- **Something You Are** (สิ่งที่คุณเป็น)
- **Somewhere You Are** (สถานที่ที่คุณอยู่)
:::

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

เกิดขึ้น **หลังจาก** Authentication สำเร็จแล้วเสมอ ระบบจะตัดสินใจว่าผู้ใช้คนนี้มีสิทธิ์ทำอะไรกับทรัพยากรใดได้บ้าง (**Permissions / Privileges**)

- นาย A ล็อกอินผ่าน (Authentication สำเร็จ)
- นาย A อ่านไฟล์รายงานยอดขายได้ (Read Authorized)
- นาย A พยายามลบไฟล์ระบบ แต่ระบบปฏิเสธ (Delete Unauthorized)

#### 4. Accounting (Auditing) — การบันทึกและตรวจสอบย้อนหลัง

การบันทึก ติดตาม และเก็บบันทึกประวัติกิจกรรมทั้งหมด (**Tracking & Logging Activities**) เพื่อบันทึกข้อมูลสำคัญ: ใครทำอะไร ที่ไหน เมื่อไร และเกิดผลลัพธ์อย่างไร (*Who, What, When, Where, Success/Failure*) เช่น System Event Logs, Access Logs, Network Flow Logs, และ Audit Trails

วัตถุประสงค์หลักคือการใช้ในการสืบสวนคดีความมั่นคงปลอดภัย (Forensics), เฝ้าระวังความผิดปกติ, และสร้าง **Accountability** ที่ตรวจสอบย้อนหลังได้

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>สรุปคำถามหลักในข้อสอบสำหรับ 4 ขั้นตอน AAA:</p>

| คำถามหลักในข้อสอบ | ขั้นตอนที่เกี่ยวข้อง |
|---|---|
| *"Who are you?"* | **Identification** |
| *"Prove that you are who you claim to be."* | **Authentication** |
| *"What actions and resources are you permitted to access?"* | **Authorization** |
| *"What did you do, and what evidence is recorded?"* | **Accounting** |


<div id="topic-1-1-privacy-data-protection" class="reading-topic-anchor"></div>

### 1.1.6 Non-repudiation, Privacy & Data Protection

#### 1. Non-repudiation — การไม่อาจปฏิเสธความรับผิดชอบได้

ความสามารถในการพิสูจน์ได้อย่างน่าเชื่อถือว่า **มีบุคคลใดบุคคลหนึ่งได้กระทำการหรือส่งข้อมูลนั้นจริง** โดยผู้กระทำไม่สามารถอ้างภายหลังได้ว่าตนเองไม่ได้เป็นผู้ทำ โดยอาศัยกลไกสำคัญคือ **Digital Signature** ร่วมกับโครงสร้างกุญแจสาธารณะ (PKI) และการประทับเวลาที่เชื่อถือได้ (Timestamping)

*ความต่างจาก Authentication:* Authentication พิสูจน์ตัวตน ณ ขณะล็อกอิน ส่วน Non-repudiation สร้างหลักฐานทางนิติวิทยาศาสตร์ที่ผูกมัดการกระทำในอดีต

#### 2. Privacy — การคุ้มครองความเป็นส่วนตัวของข้อมูล

เกี่ยวข้องกับการคุ้มครอง **Personally Identifiable Information (PII) / Personal Data** ตลอดวงจรชีวิต: การจัดเก็บ (Collection), การประมวลผล (Processing), การจัดเก็บรักษา (Storage), การถ่ายโอน (Transfer), และการทำลาย (Disposal)

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>3 บทบาทหลักในกฎหมายคุ้มครองข้อมูลส่วนบุคคล (เช่น GDPR, PDPA):</p>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Subject (เจ้าของข้อมูลส่วนบุคคล)</h5>
  <p>บุคคลธรรมดาที่ข้อมูลนั้นระบุไปถึง (เช่น นายสมชาย ลูกค้าของบริษัท หรือพนักงานในองค์กร)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Controller (ผู้ควบคุมข้อมูล)</h5>
  <p>นิติบุคคลหรือองค์กรที่เป็นผู้ตัดสินใจว่า <strong>จะเก็บข้อมูลทำไม และประมวลผลอย่างไร (Determines Purpose and Means)</strong> เช่น บริษัทค้าปลีกที่เก็บข้อมูลลูกค้า</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Processor (ผู้ประมวลผลข้อมูล)</h5>
  <p>ฝ่ายที่ทำการประมวลผลข้อมูล <strong>ในนามของและตามคำสั่งของผู้ควบคุมข้อมูล (Processes on behalf of Controller)</strong> เช่น บริษัท Cloud Provider ที่รับฝากฐานข้อมูล</p>
</div>

<div class="reading-semantic-diagram" data-diagram="privacyFlow"></div>

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>กลไกการกำกับดูแลและสิทธิในข้อมูลส่วนบุคคล:</p>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Data Ownership & Authority Boundaries</h5>
  <p>การกำหนดว่าใครมีอำนาจตัดสินใจ (Authority) และความรับผิดชอบ (Responsibility) ต่อข้อมูลด้าน Security และ Compliance โดยมีหลักสำคัญคือ <em>การที่องค์กรถือครองหรือจัดเก็บข้อมูลไม่ได้แปลว่าจะนำ Personal Data ไปทำอะไรก็ได้ตามอำเภอใจ</em> องค์กรยังคงต้องเคารพสิทธิและความยินยอมของ Data Subject เสมอ</p>
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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>สองแนวคิดทางสถาปัตยกรรมความปลอดภัยที่เสริมส่งซึ่งกันและกันแต่มีมุมมองที่ต่างกัน:</p>

#### 1. Zero Trust Architecture

ยึดถือคติพจน์สำคัญคือ **“Never Trust, Always Verify” (ไม่ไว้วางใจใคร ตรวจสอบยืนยันเสมอ)** โดยปฏิเสธแนวคิดความเชื่อถือแบบเดิมที่ว่า *"คนในเครือข่ายภายใน (Internal Network) ปลอดภัยและเชื่อถือได้"*

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>หลักการสำคัญของ Zero Trust:</p>

- ยืนยันตัวตนและอุปกรณ์ตามบริบททุกครั้งที่มีการร้องขอเข้าถึง
- ยึดหลัก **Least Privilege (สิทธิ์เท่าที่จำเป็น)**
- แบ่งส่วนเครือข่ายอย่างละเอียด (Micro-segmentation)
- ประเมินพฤติกรรมและความเสี่ยงแบบเรียลไทม์อย่างต่อเนื่อง

<div class="reading-example-box">
  <strong>ตัวอย่างสถานการณ์จริง:</strong> แม้พนักงานจะนั่งทำงานในออฟฟิศและเชื่อมต่อสาย LAN ของบริษัท แต่เมื่อจะเปิดฐานข้อมูลลูกค้า ระบบยังคงต้องบังคับให้ยืนยันตัวตน ตรวจสอบสิทธิ์ และประเมินความปลอดภัยของเครื่องคอมพิวเตอร์ใหม่อยู่เสมอ
</div>

#### 2. Defense in Depth (Layered Defense)

กลยุทธ์การวาง **มาตรการควบคุมความปลอดภัยหลายชั้นที่สอดประสานกัน** เพื่อป้องกันไม่ให้การล้มเหลวของมาตรการควบคุมชั้นใดชั้นหนึ่งเปิดโอกาสให้ผู้โจมตีเจาะทะลุระบบได้สำเร็จ (No Single Point of Failure in Security)

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>ตัวอย่างสถาปัตยกรรมการวางชั้นป้องกัน (7 Security Layers):</p>

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

</section>


<section id="obj-1-2" class="reading-objective-section">

## Objective 1.2: Understand risk management concepts

การบริหารความเสี่ยงคือหัวใจของการตัดสินใจด้านความปลอดภัย องค์กรไม่สามารถกำจัดความเสี่ยงให้เป็นศูนย์ได้ แต่ต้องเข้าใจ วัดผล และจัดการให้อยู่ในระดับที่ยอมรับได้

<div id="topic-1-2-risk-components" class="reading-topic-anchor"></div>

### 1.2.1 Risk Definition & Core Components

**Risk (ความเสี่ยง)** คือผลรวมของโอกาสที่เหตุการณ์ไม่พึงประสงค์จะเกิดขึ้น ควบคู่กับขนาดของผลกระทบหรือความเสียหายที่เกิดขึ้นต่อองค์กร

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>องค์ประกอบหลักของความเสี่ยง:</p>

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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>สมการความเสี่ยงเชิงคุณภาพ (Qualitative Risk Formula):</p>

$\text{Risk} \approx \text{Likelihood} \times \text{Impact}$


<div id="topic-1-2-quantitative-risk" class="reading-topic-anchor"></div>

### 1.2.2 Quantitative Risk Analysis & Formulas

การวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative Risk Analysis) เป็นการคำนวณมูลค่าความเสียหายออกมาเป็นตัวเลขทางการเงินที่ชัดเจน มีสูตรและตัวแปรสำคัญที่ **ต้องจำอย่างแม่นยำ**:

<h4 class="reading-subtopic-title">ตัวแปรพื้นฐานในการคำนวณ</h4>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Asset Value (AV)</h5>
  <p>มูลค่ารวมของทรัพย์สินที่กำลังพิจารณา (คิดเป็นจำนวนเงิน เช่น มูลค่าเซิร์ฟเวอร์ฐานข้อมูล = \$10,000)</p>
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
    <div class="reading-formula-var"><strong>AV</strong>: Asset Value (มูลค่าทรัพย์สิน เช่น \$10,000)</div>
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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>ตัวอย่างค่า ARO ในข้อสอบ:</p>

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
    <div class="reading-formula-var"><strong>SLE</strong>: Single Loss Expectancy (ความเสียหายต่อครั้ง เช่น \$5,000)</div>
    <div class="reading-formula-var"><strong>ARO</strong>: Annualized Rate of Occurrence (ความถี่ต่อปี เช่น 2 ครั้ง/ปี)</div>
  </div>
</div>

<div class="reading-calculation-box">
  <div class="reading-calculation-title"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>ตัวอย่างคำนวณต่อเนื่อง ALE:</div>

- จากตัวอย่างข้างต้น $SLE = \$5,000$
- หากประเมินว่าเหตุการณ์นี้อาจเกิดขึ้นปีละ 2 ครั้ง ($ARO = 2$) $→ ALE = \$5,000 \times 2 = \$10,000$ ต่อปี
- หากเหตุการณ์นี้เกิดขึ้นทุก 5 ปีครั้ง ($ARO = 0.2$) $→ ALE = \$5,000 \times 0.2 = \$1,000$ ต่อปี

</div>

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>ขั้นตอนและลำดับการคำนวณ (Calculation Pipeline):</p>

<div class="reading-semantic-diagram" data-diagram="riskCalculationFlow"></div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ประโยชน์หลักในการทำข้อสอบ (Cost-Benefit Decision Rule)</span>
  </div>
  <p>ค่า $ALE$ ถูกนำมาใช้เปรียบเทียบกับ <strong>ต้นทุนของมาตรการควบคุม (Cost of Control / Safeguard Cost)</strong></p>
  <p><strong>กฎการตัดสินใจ:</strong> ต้นทุนของมาตรการความปลอดภัยต่อปีไม่ควรเกินมูลค่า $ALE$ ของความเสี่ยงนั้น (เช่น หากความเสี่ยงก่อความเสียหายปีละ \$10,000 องค์กรไม่ควรจ่ายเงินซื้ออุปกรณ์ป้องกันปีละ \$25,000)</p>
</div>


<div id="topic-1-2-risk-lifecycle" class="reading-topic-anchor"></div>

### 1.2.3 Risk Management Lifecycle

การบริหารความเสี่ยง **เป็นกระบวนการต่อเนื่องตลอดเวลา (Continuous Process)** ไม่ใช่กิจกรรมที่ทำครั้งเดียวแล้วสิ้นสุด วงจรชีวิตการบริหารความเสี่ยงประกอบด้วย 5 ขั้นตอนหลัก:

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
  <p>ในตำราและกรอบการทำงานด้านความปลอดภัยสากล (เช่น NIST หรือ ISO 31000) บางครั้งอาจสรุปกระบวนการปฏิบัติการเป็น <strong>4 ขั้นตอนหลัก</strong> (Identify → Assess → Treat → Monitor) โดยมองว่าการสื่อสารและรายงานผล (Communication & Reporting) เป็นกิจกรรมที่ทำควบคู่ไปตลอดเวลา แต่ในหลักสูตรการสอน ISC2 CC 2026 นี้ ได้กำหนด <strong>Risk Communication & Reporting</strong> ไว้อย่างชัดเจนเป็นขั้นตอนที่ 5 ของวงจร เพื่อเน้นย้ำความสำคัญของการรายงานต่อผู้บริหารและผู้มีส่วนได้เสียในการตัดสินใจจัดสรรงบประมาณ</p>
</div>


<div id="topic-1-2-risk-treatment" class="reading-topic-anchor"></div>

### 1.2.4 Risk Treatment: The 4 Responses

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>เมื่อประเมินความเสี่ยงแล้ว องค์กรต้องเลือกกลยุทธ์ในการจัดการความเสี่ยง 4 รูปแบบหลัก:</p>

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


<div id="topic-1-2-inherent-residual-risk" class="reading-topic-anchor"></div>

### 1.2.5 Inherent Risk, Residual Risk, Risk Appetite & Tolerance

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Inherent Risk (ความเสี่ยงดั้งเดิม)</h5>
  <p>ระดับความเสี่ยงที่มีอยู่ตามธรรมชาติก่อนที่จะมีการนำมาตรการควบคุมความปลอดภัยใด ๆ มาติดตั้งใช้งาน (Risk before controls)</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Residual Risk (ความเสี่ยงที่หลงเหลือ)</h5>
  <p>ระดับความเสี่ยงที่ยังคงหลงเหลืออยู่หลังจากที่ได้ติดตั้งมาตรการควบคุมความปลอดภัยแล้ว (Risk after controls)</p>
  $\text{Residual Risk} = \text{Inherent Risk} - \text{Impact of Controls}$
  <p><em>ตัวอย่าง:</em> ก่อนติดตั้ง MFA ความเสี่ยงที่บัญชีจะถูกแฮกจากรหัสผ่านรั่วมีสูงมาก (Inherent Risk สูง) หลังติดตั้ง MFA ความเสี่ยงลดลงอย่างมาก แต่ยังคงมีโอกาสที่ผู้ใช้อาจถูกหลอกด้วยฟิชชิ่งแบบขั้นสูง (Adversary-in-the-Middle) อยู่บ้าง ความเสี่ยงที่ยังเหลือน้อยนี้เรียกว่า <strong>Residual Risk</strong></p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Risk Appetite (ความเต็มใจรับความเสี่ยง)</h5>
  <p>ปริมาณและประเภทของความเสี่ยงในระดับกว้างที่องค์กรพร้อมและยินดีที่จะเปิดรับเพื่อบรรลุเป้าหมายและวิสัยทัศน์ทางธุรกิจ</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Risk Tolerance (ขอบเขตความเสี่ยงที่ยอมรับได้)</h5>
  <p>ขอบเขตความเบี่ยงเบนที่ยอมให้เกิดขึ้นได้ในแต่ละโครงการหรือระบบย่อย เป็นระดับที่จำเพาะเจาะจงและวัดผลได้มากกว่า Risk Appetite</p>
</div>

</section>


<section id="obj-1-3" class="reading-objective-section">

## Objective 1.3: Understand governance concepts

การกำกับดูแลความมั่นคงปลอดภัยสารสนเทศ (Security Governance) คือการกำหนดทิศทาง โครงสร้างอำนาจหน้าที่ และกติกาเพื่อให้มั่นใจว่ากิจกรรมด้านความปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย

<div id="topic-1-3-governance-fundamentals" class="reading-topic-anchor"></div>

### 1.3.1 Security Governance Fundamentals

**Security Governance** คือระบบความสัมพันธ์และกระบวนการที่คณะกรรมการบริหารและผู้บริหารระดับสูงใช้ในการ **ชี้นำ (Direct), ควบคุม (Control), และติดตามตรวจสอบ (Hold Accountable)** การดำเนินงานด้านความปลอดภัย

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>แกนหลักของ Governance:</p>
**Governance = Direction + Oversight + Accountability**

> **ข้อสอบมักถามความแตกต่าง:**  
> ผู้บริหารระดับสูงที่ทำหน้าที่ Governance **ไม่ใช่ผู้ที่ลงไปคอนฟิก Firewall หรือตั้งกฎบนเราเตอร์ด้วยตนเอง** แต่เป็นผู้กำหนดนโยบาย ทิศทาง การจัดสรรงบประมาณ การแต่งตั้งผู้รับผิดชอบ และการตรวจสอบว่าองค์กรกำลังมุ่งหน้าไปในทิศทางที่ถูกต้อง


<div id="topic-1-3-laws-regulations" class="reading-topic-anchor"></div>

### 1.3.2 Laws and Regulations

กฎหมายและข้อบังคับคือ **ข้อกำหนดที่มีผลผูกพันตามกฎหมาย (Legally Enforceable Requirements)** หากฝ่าฝืนจะมีบทลงโทษทั้งทางแพ่ง ทางอาญา หรือค่าปรับมหาศาล

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>ตัวอย่างสำคัญที่มักพบในสื่อการเรียนและการสอบ:</p>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">GDPR (General Data Protection Regulation)</h5>
  <p>กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป เน้นสิทธิของ Data Subject และข้อบังคับสำหรับ Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป</p>
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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>ตัวอย่าง Framework ที่เป็นที่ยอมรับระดับสากล:</p>

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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 22 22 22 12 2"></polygon></svg>ลำดับชั้นของเอกสารความปลอดภัยเป็นหัวข้อที่ออกสอบบ่อยมาก และต้องแยกหน้าที่ของเอกสารแต่ละระดับให้ชัดเจน:</p>

<div class="reading-semantic-diagram" data-diagram="documentHierarchy"></div>

| ประเภทเอกสาร | บทบาทหน้าที่ | ระดับการบังคับ | ตัวอย่างรูปธรรม |
|---|---|---|---|
| **Policy (นโยบาย)** | กำหนดทิศทางภาพกว้าง วิสัยทัศน์ และความคาดหวังของผู้บริหาร (Answers: *WHAT & WHY*) | **Mandatory (บังคับทุกคน)** | *"พนักงานทุกคนต้องใช้รหัสผ่านที่รัดกุมและปกป้องข้อมูลลูกค้า"* |
| **Standard (มาตรฐาน)** | กำหนดเกณฑ์ขั้นต่ำ ข้อกำหนดทางเทคนิคที่จำเพาะเจาะจงและวัดผลได้ (Answers: *EXACT SPECIFICATION*) | **Mandatory (บังคับทุกคน)** | *"รหัสผ่านต้องมีความยาวอย่างน้อย 14 ตัวอักษร ผสมอักขระ 3 ใน 4 ประเภท และบังคับใช้ MFA"* |
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
  <h5 class="reading-concept-heading">Governance</h5>
  <p>ชี้ทิศทาง กำหนดความรับผิดชอบ และดูแลภาพรวมเชิงกลยุทธ์</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Risk Management</h5>
  <p>ระบุและจัดการกับความไม่แน่นอนที่อาจส่งผลกระทบต่อเป้าหมายขององค์กร</p>
</div>

<div class="reading-concept-item">
  <h5 class="reading-concept-heading">Compliance</h5>
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


<section id="obj-1-4" class="reading-objective-section">

## Objective 1.4: Understand cybersecurity controls

มาตรการควบคุมความปลอดภัย (Security Controls) คือเครื่องมือ กลไก และกระบวนการที่นำมาใช้ป้องกัน ตรวจจับ และตอบสนองต่อความเสี่ยง การวิเคราะห์ข้อสอบต้องแยกให้ออกระหว่าง **Category (หมวดหมู่ของมาตรการ)** และ **Type / Function (หน้าที่การทำงานของมาตรการ)**

<div id="topic-1-4-control-categories" class="reading-topic-anchor"></div>

### 1.4.1 Security Control Categories

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>การแบ่งหมวดหมู่ตามลักษณะของกลไกหรือสิ่งที่นำมาดำเนินการ:</p>

:::control-categories
- **Technical (Logical) Controls** (มาตรการทางเทคนิค)
- **Managerial (Administrative) Controls** (มาตรการเชิงบริหารจัดการ)
- **Operational Controls** (มาตรการเชิงปฏิบัติการ)
- **Physical Controls** (มาตรการทางกายภาพ)
:::


<div id="topic-1-4-control-types" class="reading-topic-anchor"></div>

### 1.4.2 Security Control Types / Functions

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>การแบ่งประเภทตามบทบาทหน้าที่ในการรับมือกับเหตุการณ์ (Timing & Purpose):</p>

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
    <span>สูตรจำลำดับการทำงาน (Action Sequence Mnemonic)</span>
  </div>
  <p><strong>"กลัว (Deterrent) → กัน (Preventive) → เจอ (Detective) → แก้ (Corrective)"</strong></p>
</div>


<div id="topic-1-4-overlapping-controls" class="reading-topic-anchor"></div>

### 1.4.3 Contextual & Overlapping Controls

**หลักสำคัญที่สุดในข้อสอบ:** มาตรการควบคุมหนึ่งตัวสามารถจัดอยู่ในหลายประเภทได้ ขึ้นอยู่กับ **บริบทและการใช้งานในโจทย์นั้น ๆ (Context is King)**

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>ตัวอย่างเปรียบเทียบการประยุกต์ใช้ตามบริบท:</p>

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
    <li>มาตรการนั้นทำงาน <strong>ก่อน (Before), ระหว่าง (During), หรือหลัง (After)</strong> เกิดเหตุ?</li>
    <li>เจตนาหลักที่โจทย์เน้นคือ <strong>ยับยั้งใจ, สกัดกั้น, ค้นหาตรวจจับ, หรือแก้ไขปัญหา</strong>?</li>
  </ol>
</div>

</section>


<section id="obj-1-5" class="reading-objective-section">

## Objective 1.5: Maintain professional and ethical conduct

บุคลากรด้านความมั่นคงปลอดภัยไซเบอร์มักถือครองสิทธิ์ระดับสูงในระบบ หน้าที่ด้านจริยธรรม ความรอบคอบระมัดระวัง และการปฏิบัติตามประมวลจริยธรรมของสถาบันจึงเป็นข้อกำหนดที่ไม่อาจละเลยได้

<div id="topic-1-5-code-of-conduct" class="reading-topic-anchor"></div>

### 1.5.1 Professional Code of Conduct & Authority Boundaries

หลักจรรยาบรรณวิชาชีพกำหนดแนวทางการปฏิบัติตนของผู้เชี่ยวชาญด้านไซเบอร์ โดยยึดถือหลักความซื่อสัตย์ ความน่าเชื่อถือ และความรับผิดชอบ

**หลักการเรื่องสิทธิ์และขอบเขตอำนาจ (Technical Access $\neq$ Business Authorization):**
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

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ตัวอย่างการปฏิบัติ Due Care:</p>

- การลง Patch อุดช่องโหว่ทันทีที่ได้รับแจ้ง
- การบังคับใช้นโยบายรหัสผ่านที่รัดกุม
- การติดตั้งโปรแกรมป้องกันไวรัสบนเครื่องคอมพิวเตอร์
- การฝึกอบรมพนักงานเรื่อง Phishing

#### 2. Due Diligence (ความพากเพียรตรวจสอบอย่างรอบคอบ)

การสืบค้น ตรวจสอบ ประเมินผล และติดตามสถานะความเสี่ยงอย่างต่อเนื่อง เพื่อให้รู้ว่าสิ่งที่ทำอยู่นั้นเหมาะสมและมีประสิทธิภาพจริงหรือไม่

<div class="reading-keyword-takeaway">
  <strong>แก่นสำคัญในข้อสอบ:</strong> <em>Due Diligence = CHECK / Verify / Investigate</em>
</div>

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ตัวอย่างการปฏิบัติ Due Diligence:</p>

- การรัน Vulnerability Scan ตรวจสอบจุดอ่อนของเซิร์ฟเวอร์
- การทำ Risk Assessment ประจำปี
- การตรวจสอบประวัติและสถานะความปลอดภัยของ Vendor ก่อนเซ็นสัญญา
- การตรวจสอบผลการสแกนหลังจากการ Patch ว่าช่องโหว่ถูกปิดสนิทจริงหรือไม่

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>วงจรการทำงานร่วมกันและตารางคำกริยาแยกแยะในข้อสอบ:</p>

<div class="reading-semantic-diagram" data-diagram="dueCareDiligence"></div>

| คำกริยาในโจทย์ Due Care (DO) | คำกริยาในโจทย์ Due Diligence (CHECK) |
|---|---|
| **Implement** (นำไปติดตั้ง) | **Assess / Evaluate** (ประเมินผล) |
| **Apply** (ปรับใช้) | **Review / Audit** (ทบทวนและตรวจสอบ) |
| **Protect** (ปกป้อง) | **Monitor** (เฝ้าระวัง) |
| **Take Action** (ลงมือปฏิบัติ) | **Investigate** (สืบค้นหาข้อเท็จจริง) |
| **Patch** (อุดช่องโหว่) | **Verify** (ตรวจพิสูจน์ยืนยัน) |

<p class="reading-table-note">*หมายเหตุ: คำกริยาในแต่ละคอลัมน์เป็นตัวอย่างกลุ่มคำกริยาบ่งชี้ (Illustrative Verb Clusters) ที่พบบ่อยในข้อสอบ ไม่ใช่คู่คำที่มีความสัมพันธ์เทียบเท่ากันแบบ 1 ต่อ 1 ในแต่ละบรรทัด*</p>


<div id="topic-1-5-isc2-ethics" class="reading-topic-anchor"></div>

### 1.5.3 ISC2 Code of Ethics (The 4 Canons)

สมาชิกและผู้ถือใบรับรองของ ISC2 ทุกคนต้องยึดมั่นและปฏิบัติตาม **ประมวลจริยธรรม 4 ข้อ (4 Canons)** โดยต้องยึดถือตาม **ลำดับความสำคัญก่อนหลัง (Strict Order of Precedence)**:

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>ประมวลจริยธรรม 4 ข้อตามลำดับความสำคัญก่อนหลัง (Strict Order of Precedence):</p>

<div class="reading-semantic-diagram" data-diagram="ethicsCanons"></div>

<div class="reading-precedence-rule">
  <svg class="reading-rule-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  <span><strong>กฎลำดับความสำคัญ (Strict Order of Precedence):</strong> ข้อ 1 ถึง 4 เรียงตามลำดับความสำคัญจากสูงสุดลงไปอย่างเคร่งครัด หากเกิดความขัดแย้งทางหน้าที่ ผลประโยชน์ หรือคำสั่งของผู้ว่าจ้าง <em>Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ</em></span>
</div>

<div class="reading-precedence-stack">
  <div class="reading-precedence-card tier-1">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">01</span>
        <h4 class="reading-precedence-title">Canon 1: Protect society, the common good, necessary public trust and confidence, and the infrastructure</h4>
      </div>
      <span class="reading-precedence-badge">Priority 1 (สำคัญสูงสุด)</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ปกป้องสังคม ประโยชน์ส่วนรวม ความไว้วางใจของสาธารณะ และโครงสร้างพื้นฐานสำคัญ:</strong> เป็นข้อที่มีลำดับความสำคัญสูงสุดเหนือกฎข้ออื่นทั้งหมด หากผลประโยชน์ขององค์กรหรือคำสั่งของผู้ว่าจ้างขัดแย้งกับความปลอดภัยของสาธารณะ ต้องเลือกความปลอดภัยของสังคมเป็นอันดับแรกเสมอ
    </p>
  </div>

  <div class="reading-precedence-card tier-2">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">02</span>
        <h4 class="reading-precedence-title">Canon 2: Act honorably, honestly, justly, responsibly, and legally</h4>
      </div>
      <span class="reading-precedence-badge">Priority 2</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ประพฤติตนอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม มีความรับผิดชอบ และถูกต้องตามกฎหมาย:</strong> ปฏิบัติตามกฎหมายอย่างเคร่งครัด ไม่โกหก ไม่บิดเบือนข้อเท็จจริง และรักษาความโปร่งใสในวิชาชีพ <em>(ข้อสังเกตเชิงลึก: ลำดับคำใน Canon 2 ให้เกียรติและความซื่อสัตย์มาก่อนกฎหมาย เพื่อเน้นย้ำว่าความซื่อตรงต่อความจริงต้องเป็นที่ตั้งเสมอ แม้การกระทำบางอย่างจะไม่ผิดกฎหมายแต่ถ้าขาดความซื่อสัตย์หรือบิดเบือนข้อเท็จจริงก็ยังถือว่าละเมิดจริยธรรมของ ISC2)</em>
    </p>
  </div>

  <div class="reading-precedence-card tier-3">
    <div class="reading-precedence-header">
      <div class="reading-precedence-title-wrap">
        <span class="reading-precedence-num">03</span>
        <h4 class="reading-precedence-title">Canon 3: Provide diligent and competent service to principals</h4>
      </div>
      <span class="reading-precedence-badge">Priority 3</span>
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
      <span class="reading-precedence-badge">Priority 4</span>
    </div>
    <p class="reading-precedence-body">
      <strong>ส่งเสริม ยกระดับ และปกป้องชื่อเสียงของวิชาชีพ:</strong> ร่วมแลกเปลี่ยนความรู้ ยกระดับมาตรฐานวิชาชีพด้านไซเบอร์ และไม่กระทำการใดที่ทำให้เกียรติภูมิของวิชาชีพเสื่อมเสีย
    </p>
  </div>
</div>

> **สูตรจำตัวอักษรย่อ (Mnemonic):**  
> "<strong class="reading-mnemonic-highlight">S - A - P - P</strong>"  
> <strong class="reading-mnemonic-highlight">S</strong>ociety → <strong class="reading-mnemonic-highlight">A</strong>ct honorably → <strong class="reading-mnemonic-highlight">P</strong>rincipals → <strong class="reading-mnemonic-highlight">P</strong>rofession


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
        <div class="reading-distinction-desc">สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย (Hacker, Malware, Flood)</div>
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
        <div class="reading-distinction-desc">ผลรวมของโอกาสเกิด (Likelihood) และผลกระทบจากเหตุการณ์ที่ไม่แน่นอน</div>
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
        <div class="reading-distinction-desc">ระบบและข้อมูลพร้อมให้เข้าถึงได้เสมอเมื่อต้องการ ("Can I access it?")</div>
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
| *Prove identity / Who are you* | **Authentication** |
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

