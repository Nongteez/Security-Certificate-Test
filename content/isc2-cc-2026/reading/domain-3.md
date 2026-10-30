<p class="reading-lead">สรุปและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับเตรียมสอบ ISC2 Certified in Cybersecurity (CC) ฉบับปรับปรุงปี 2026 ใน Domain 3: Access Controls (น้ำหนักข้อสอบ 20%) ครอบคลุมการบริหารจัดการวงจรชีวิตของตัวตนดิจิทัล (Identity Life Cycle Management: Joiner-Mover-Leaver, Provisioning, Periodic Access Review, Deprovisioning), กรอบมาตรฐานและเครื่องมืออัตลักษณ์ (NIST SP 800-63, Directory Services, IdPs), หลักการสิทธิ์ขั้นต่ำ (Principle of Least Privilege), การแบ่งแยกหน้าที่ความรับผิดชอบ (Segregation of Duties), และโมเดลการควบคุมการเข้าถึงเชิงตรรกะแบบครบวงจร (DAC, MAC, RBAC, ABAC)</p>

<section class="reading-objective-section" id="obj-3-1">

## Objective 3.1: Understand Identity Life Cycle Management

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การบริหารจัดการตัวตนและการเข้าถึง (Identity and Access Management: IAM) เป็นรากฐานสำคัญที่สุดในการควบคุมความมั่นคงปลอดภัย:</p>

<h3 id="topic-3-1-jml-lifecycle">3.1.1 IAM Overview &amp; The JML Lifecycle: วงจรชีวิตตัวตนดิจิทัล</h3>

**IAM (Identity and Access Management)** คือกรอบนโยบาย กระบวนการ และเทคโนโลยีที่ใช้เพื่อกำกับดูแลว่า *"ใคร (Who)"* สามารถเข้าถึง *"ทรัพยากรใด (What)"* ได้บ้าง ภายใต้ *"เงื่อนไขใด (Under what conditions)"* เพื่อให้มั่นใจว่าผู้ใช้ที่ถูกต้องจะสามารถเข้าถึงทรัพยากรที่จำเป็นได้ในเวลาที่เหมาะสม และป้องกันไม่ให้ผู้ไม่มีสิทธิ์เข้าถึงข้อมูลขององค์กร

กระบวนการหลักของ IAM ทำงานสอดประสานกันเป็นวงจรต่อเนื่อง 5 ขั้นตอนหลัก:
<span class="reading-math-formula">Identity → Access → Control → Review → Remove</span>

ในทางปฏิบัติระดับสากลและองค์กรธุรกิจ วงจรชีวิตของพนักงานและตัวตนดิจิทัลถูกสรุปผ่านโมเดล **JML (Joiner, Mover, Leaver)**:

<div class="reading-semantic-diagram" data-diagram="iamLifecycle"></div>

1. **Joiner (เข้าทำงานใหม่):**
   - พนักงานใหม่เริ่มงาน ต้องผ่านขั้นตอนการสร้างตัวตนดิจิทัล (Identity Creation) และการจัดสรรสิทธิ์เริ่มต้นตามตำแหน่งงาน (**Provisioning**)
   - สิ่งสำคัญที่สุด: องค์กรต้อง **Define Roles and Responsibilities** ให้ชัดเจนก่อนที่จะทำการให้สิทธิ์ (Grant Access)

2. **Mover (เปลี่ยนบทบาท / เลื่อนตำแหน่ง / ย้ายแผนก):**
   - พนักงานเปลี่ยนตำแหน่งหรือย้ายสายงาน ต้องได้รับการปรับปรุงสิทธิ์ให้ตรงกับหน้าที่ใหม่
   - ความเสี่ยงสูงสุดของขั้นตอนนี้คือ **Privilege Accumulation** (หรือ **Privilege Creep**): การได้รับสิทธิ์ใหม่เพิ่มเข้ามาแต่สิทธิ์เดิมของแผนกเก่าไม่ถูกเพิกถอนออกไป

3. **Leaver (พ้นสภาพการเป็นพนักงาน / สิ้นสุดสัญญาจ้าง):**
   - พนักงานลาออก ถูกเลิกจ้าง หรือสัญญาจ้างสิ้นสุดลง ต้องเข้าสู่กระบวนการเพิกถอนสิทธิ์อย่างรวดเร็วและสมบูรณ์ (**Deprovisioning**)
   - ต้องระงับบัญชี (Disable Account), เพิกถอนสิทธิ์การเข้าถึงทั้งหมด และยึดอุปกรณ์คืน เพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>กฎทองสำหรับห้องสอบ: จุดเริ่มต้นของ IAM</span>
  </div>
  <p>ก่อนที่องค์กรจะทำการ <strong>Grant Access</strong> ให้กับผู้ใช้รายใดก็ตาม สิ่งแรกที่ต้องทำเสมอคือ <strong>"Define Roles and Responsibilities"</strong> เพื่อกำหนดขอบเขตหน้าที่และความรับผิดชอบให้ชัดเจนเสียก่อน</p>
</div>

<h3 id="topic-3-1-roles-definition">3.1.2 Roles Definition &amp; Permission Alignment: การกำหนดบทบาทหน้าที่</h3>

เพื่อป้องกันความสับสนและการให้สิทธิ์อย่างไม่เป็นระบบ องค์กรจำเป็นต้องแยกแยะ 3 คำสำคัญออกจากกันให้ชัดเจน:

- **Role (บทบาท):** หน้าที่หรืองานที่ได้รับมอบหมายภายในองค์กร (เช่น HR Manager, Database Administrator, Security Analyst)
- **Permission (สิทธิ์ในการกระทำ):** สิทธิ์เฉพาะเจาะจงที่อนุญาตให้กระทำต่อวัตถุหรือระบบ เช่น Read (อ่าน), Write (เขียน), Modify (แก้ไข), Delete (ลบ), Execute (รันโปรแกรม)
- **Access (การเข้าถึง):** ความสามารถในการเข้าถึงระบบ แอปพลิเคชัน หรือข้อมูลนั้น ๆ

หลักการพื้นฐานคือ: <span class="reading-math-formula">Role → Job Function → Required Access</span> สิทธิ์ที่ได้รับจะต้องสะท้อนหน้าที่งานจริงเท่านั้น

| <div class="reading-bilingual-term"><span class="reading-term-en">**Role Name**</span><span class="reading-term-th">(ชื่อบทบาทหน้าที่)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Primary Job Function**</span><span class="reading-term-th">(หน้าที่งานหลัก)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Required Access &amp; Permissions**</span><span class="reading-term-th">(สิทธิ์การเข้าถึงที่จำเป็น)</span></div> |
| :--- | :--- | :--- |
| **HR Manager** | จัดการข้อมูลบุคลากรและเงินเดือน | สิทธิ์ Read/Write ระบบ HRIS, ข้อมูลประวัติพนักงาน, เอกสารสัญญาจ้าง |
| **Network Administrator** | ดูแลระบบเครือข่ายและเราเตอร์ | สิทธิ์ Configure อุปกรณ์ Network, Switches, Firewalls, VPN Gateways |
| **Database Administrator (DBA)** | จัดการฐานข้อมูลและโครงสร้างข้อมูล | สิทธิ์จัดการ Database Instances, Schema, Backup/Restore, User DB Privileges |
| **Security Analyst** | เฝ้าระวังภัยคุกคามและวิเคราะห์ล็อก | สิทธิ์ Read-only สำหรับ Security Logs, SIEM Dashboard, EDR Alerts |
| **Finance Employee** | บันทึกและตรวจสอบธุรกรรมการเงิน | สิทธิ์บันทึกใบเสร็จและใบแจ้งหนี้ในระบบ ERP โดยไม่มีสิทธิ์อนุมัติจ่ายเงินของตนเอง |

<h3 id="topic-3-1-provisioning">3.1.3 Identity Provisioning: วงจร 6 ขั้นตอนในการจัดสรรสิทธิ์</h3>

**Provisioning** คือกระบวนการเตรียม สร้าง และจัดสรรทรัพยากรตัวตนดิจิทัลและสิทธิ์การเข้าถึง เพื่อให้ผู้ใช้สามารถเริ่มต้นปฏิบัติงานได้:

สูตรจำสั้น: <span class="reading-math-formula">Provisioning = Create Identity + Grant Required Access</span>

กระบวนการ Provisioning มี 6 ขั้นตอนตามลำดับมาตรฐาน:

1. **Creating User Account:** การสร้างบัญชีผู้ใช้งานใหม่ขึ้นในระบบระบุตัวตนกลาง (เช่น Active Directory หรือ Cloud Identity)
2. **Assigning Unique Identity:** การกำหนดรหัสประจำตัวเฉพาะที่ไม่ซ้ำกับใคร เพื่อใช้ในการระบุตัวตนและติดตามความรับผิดชอบ (Accountability)
3. **Assigning Roles:** การผูกบัญชีเข้ากับบทบาทหน้าที่ (Roles) ตามตำแหน่งงานที่ได้รับการอนุมัติจากฝ่ายทรัพยากรบุคคล
4. **Granting Permissions:** การกำหนดสิทธิ์การอ่าน เขียน หรือแก้ไข ให้สอดคล้องกับบทบาทที่ได้รับมอบหมาย
5. **Providing Application Access:** การเปิดช่องทางให้เข้าถึงระบบงานและซอฟต์แวร์ที่ต้องใช้ (เช่น ERP, CRM, Email)
6. **Issuing Authentication Credentials:** การออกข้อมูลประจำตัวสำหรับยืนยันตัวตน เช่น รหัสผ่านเริ่มต้น, บัตรสมาร์ตการ์ด, หรือการลงทะเบียนโทเค็น MFA

<h3 id="topic-3-1-access-review">3.1.4 Access Review &amp; 6 Core Audit Findings: การทบทวนสิทธิ์เป็นระยะ</h3>

เมื่อระบบมีการใช้งานไปเป็นระยะเวลาหนึ่ง สิทธิ์การเข้าถึงมักจะเกิดความคลาดเคลื่อนจากความเป็นจริง ดังนั้นองค์กรจึงต้องมีการทำ **Periodic Access Review** (การทบทวนสิทธิ์เป็นระยะ) โดยให้ผู้จัดการสายงาน (Line Managers) และเจ้าของข้อมูล (Data Owners) ร่วมกันตรวจสอบว่าสิทธิ์ของผู้ใช้งานแต่ละคนยังคงถูกต้องและจำเป็นอยู่หรือไม่

จากการตรวจสอบความปลอดภัย (Security Audits) พบข้อบกพร่องสำคัญ 6 ประการที่ข้อสอบมักนำมาตั้งคำถาม:

1. **Excessive Permissions (สิทธิ์เกินความจำเป็น):** ผู้ใช้ได้รับสิทธิ์มากกว่าที่จำเป็นต้องใช้ในการทำงานตามหน้าที่
2. **Unused Accounts (บัญชีที่ไม่ได้ใช้งาน):** บัญชีที่ไม่มีการล็อกอินเข้าใช้งานเป็นเวลานาน (เช่น เกิน 90 วัน) แต่ยังเปิดทิ้งไว้
3. **Inappropriate Access (สิทธิ์ไม่เหมาะสมกับงาน):** ผู้ใช้มีสิทธิ์เข้าถึงระบบที่ไม่เกี่ยวข้องกับสายงานของตนเอง
4. **Role Changes (การเปลี่ยนบทบาทแต่สิทธิ์ค้าง):** พนักงานย้ายตำแหน่งงานแล้ว แต่ยังคงมีสิทธิ์ของหน้าที่งานเดิมหลงเหลืออยู่
5. **Privilege Accumulation / Privilege Creep (การสะสมสิทธิ์):** การที่สิทธิ์ในระบบค่อย ๆ พอกพูนขึ้นเรื่อย ๆ จากการย้ายแผนกหลายครั้ง
6. **Orphaned Accounts (บัญชีไร้เจ้าของ):** บัญชีของผู้ใช้ที่ลาออก พ้นสภาพ หรือสัญญาจ้างสิ้นสุดลงแล้ว แต่บัญชียังไม่ถูกระงับหรือเพิกถอน

<div class="reading-callout warning">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>กรณีศึกษาคลาสสิก: Finance ย้ายไป IT</span>
  </div>
  <p>พนักงานย้ายจากแผนก Finance ไปแผนก IT ได้รับสิทธิ์ IT Admin แต่ระบบยังไม่ได้ถอดสิทธิ์ดูงบการเงินใน Finance ออก ผ่านไป 6 เดือนพนักงานยังเปิดดูข้อมูลลับทางการเงินได้ ปัญหานี้เรียกว่า <strong>Privilege Accumulation</strong> และต้องแก้ไขด้วยกระบวนการ <strong>Periodic Access Review</strong></p>
</div>

<h3 id="topic-3-1-deprovisioning">3.1.5 Deprovisioning: Triggers &amp; Revocation Practices</h3>

**Deprovisioning** คือกระบวนการเพิกถอนสิทธิ์และระงับการเข้าถึงระบบเมื่อหมดความจำเป็นในการใช้งาน:

สูตรจำสั้น: <span class="reading-math-formula">Deprovisioning = Remove / Disable Access</span>

เหตุการณ์ที่กระตุ้นให้เกิด Deprovisioning (Triggers) มี 4 ประการ:
- **Termination:** พนักงานถูกบอกเลิกจ้างหรือให้ออก (ต้องดำเนินการระงับสิทธิ์ทันทีเพื่อป้องกัน Insider Threat)
- **Resignation:** พนักงานลาออกตามความสมัครใจ
- **Role Change:** พนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย (เพิกถอนสิทธิ์เดิมและปรับปรุงสิทธิ์ใหม่)
- **Contract Expiration:** สัญญาจ้างของ Vendor หรือพนักงานสัญญาจ้างสิ้นสุดลง

กิจกรรมหลักในการ Deprovisioning:
- **Disable Account:** ระงับการใช้งานบัญชี (Lock Account)
- **Revoke Application Access:** ถอดสิทธิ์การเข้าถึงแอปพลิเคชันและบริการคลาวด์ทั้งหมด
- **Remove Group Memberships:** นำชื่อบัญชีออกจากกลุ่มสิทธิ์ต่าง ๆ
- **Revoke Privileged Access:** ยกเลิกสิทธิ์ระดับผู้ดูแลระบบและคืนโทเค็นเข้าถึงทั้งหมด

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อควรระวัง: Deprovisioning ไม่จำเป็นต้องลบบัญชีทิ้งทันที</span>
  </div>
  <p>ในทางปฏิบัติด้านความมั่นคงปลอดภัย การ Deprovisioning มักจะใช้วิธีการ <strong>"Disable Account"</strong> (ปิดการใช้งาน) แทนการ <strong>"Delete Account"</strong> (ลบทิ้งถาวร) ทันที เพื่อเก็บรักษาประวัติการใช้งาน บันทึกการตรวจสอบย้อนหลัง (Audit Trail / Logs) และป้องกันปัญหาการสูญหายของความเป็นเจ้าของไฟล์ในระบบ</p>
</div>

<h3 id="topic-3-1-iam-frameworks">3.1.6 IAM Management Frameworks: NIST SP 800-63 vs CSF</h3>

ในการบริหารจัดการระบบอัตลักษณ์ดิจิทัล องค์กรระดับสากลนิยมอ้างอิงกรอบมาตรฐานของ NIST โดยต้องแยกความแตกต่างระหว่างสองกรอบงานสำคัญ:

1. **NIST SP 800-63 (Digital Identity Guidelines):** กรอบแนวทางเฉพาะทางสำหรับการบริหารจัดการอัตลักษณ์ดิจิทัล ซึ่งแบ่งออกเป็น 3 เสาหลัก/ฟังก์ชันที่ทำงานเกี่ยวข้องกัน:
   - **Identity Proofing (SP 800-63A):** กระบวนการพิสูจน์และตรวจสอบความมีอยู่จริงและความถูกต้องของตัวบุคคลในโลกจริง ก่อนการออกข้อมูลประจำตัวดิจิทัล (Enrollment &amp; Identity Assurance Level: IAL)
   - **Authentication (SP 800-63B):** กระบวนการตรวจสอบและยืนยันว่าผู้ที่กำลังเข้าใช้งานระบบคือผู้ครอบครองข้อมูลประจำตัว (Authenticator) ที่ถูกต้องจริง (Authenticator Assurance Level: AAL)
   - **Federation (SP 800-63C):** กระบวนการส่งต่อข้อมูลอัตลักษณ์และการยืนยันตัวตนข้ามขอบเขตความไว้วางใจระหว่างองค์กรหรือระบบต่าง ๆ เช่น Single Sign-On (Federation Assurance Level: FAL)

2. **NIST Cybersecurity Framework (CSF):** กรอบการบริหารความเสี่ยงทางไซเบอร์ในภาพรวมขององค์กร (Identify, Protect, Detect, Respond, Recover และ Govern ใน CSF 2.0) โดยมีหัวข้อการควบคุมการเข้าถึง (PR.AC) เป็นส่วนหนึ่งภายใต้ฟังก์ชัน Protect

<div class="reading-semantic-diagram" data-diagram="nistSp80063Framework"></div>

<h3 id="topic-3-1-iam-tools">3.1.7 IAM Technology Stack: Directory Services, IdPs &amp; Access Platforms</h3>

สถาปัตยกรรมเทคโนโลยีที่ใช้สนับสนุนงาน IAM ประกอบด้วย 3 องค์ประกอบหลักที่ทำงานร่วมกัน:

1. **Directory Services (บริการไดเรกทอรี):**
   - ฐานข้อมูลกลางที่จัดเก็บโครงสร้างผู้ใช้งาน บัญชี กลุ่ม และสิทธิ์ภายในองค์กร
   - ตัวอย่าง: Microsoft Active Directory (AD), Lightweight Directory Access Protocol (LDAP)

2. **Identity Providers - IdPs (ผู้ให้บริการยืนยันตัวตน):**
   - ระบบศูนย์กลางที่ทำหน้าที่ให้บริการสร้าง จัดการ และตรวจสอบข้อมูลประจำตัวดิจิทัลสำหรับการยืนยันตัวตน
   - ตัวอย่าง: Okta, Azure Active Directory / Microsoft Entra ID, Ping Identity

3. **Access Management Platforms (แพลตฟอร์มบริหารจัดการการเข้าถึง):**
   - ระบบที่ทำหน้าที่บังคับใช้นโยบายการควบคุมสิทธิ์ จัดการ Single Sign-On (SSO) และ Multi-Factor Authentication (MFA)

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อสอบถามบ่อย: Authentication vs. Authorization</span>
  </div>
  <p><strong>Authentication (AuthN):</strong> ตอบคำถามว่า <em>"คุณคือใคร?"</em> (Who are you?) — ตรวจสอบยืนยันตัวตน</p>
  <p><strong>Authorization (AuthZ):</strong> ตอบคำถามว่า <em>"คุณได้รับอนุญาตให้ทำอะไรได้บ้าง?"</em> (What are you allowed to do?) — ตรวจสอบและให้สิทธิ์</p>
</div>

<h3 id="topic-3-1-least-privilege">3.1.8 Principle of Least Privilege (PoLP): หลักสิทธิ์ขั้นต่ำที่จำเป็น</h3>

**Principle of Least Privilege (PoLP)** คือหลักการพื้นฐานที่สำคัญที่สุดประการหนึ่งในการรักษาความมั่นคงปลอดภัยทางไซเบอร์:

> **นิยาม:** ผู้ใช้ บัญชีบริการ หรือโปรแกรม ต้องได้รับสิทธิ์ในการเข้าถึงและกระทำต่อทรัพยากรเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่อการปฏิบัติหน้าที่ตามที่ได้รับมอบหมายเท่านั้น (Minimum Necessary Access)

แนวทางการนำไปปฏิบัติ (Implementation Steps):
- **Role-based permissions:** กำหนดสิทธิ์ให้ตรงตามบทบาทงานจริง ไม่ให้สิทธิ์แบบเหมารวม
- **Regular reviews:** ตรวจสอบทบทวนสิทธิ์การเข้าถึงอย่างสม่ำเสมอ
- **Strict enforcement:** บังคับใช้นโยบายอย่างเคร่งครัดและไม่อนุญาตให้ใช้บัญชีระดับผู้ดูแลระบบในการทำงานประจำวัน

ประโยชน์สำคัญ 4 ประการของ Least Privilege:
1. **Mitigates Compromised Accounts:** ลดผลกระทบและความเสียหายเมื่อบัญชีผู้ใช้ถูกแฮกหรือถูกขโมยข้อมูลประจำตัว
2. **Limits Insider Threat Blast Radius:** จำกัดขอบเขตความเสียหายที่เกิดจากภัยคุกคามภายในองค์กร
3. **Aids Audit and Compliance:** สนับสนุนการตรวจสอบและทำให้เป็นไปตามข้อกำหนดของมาตรฐานสากล
4. **Promotes System Stability:** ป้องกันการแก้ไขหรือลบการตั้งค่าระบบโดยไม่ตั้งใจ ช่วยให้ระบบมีเสถียรภาพ

</section>

<section class="reading-objective-section" id="obj-3-2">

## Objective 3.2: Understand Logical Access Controls

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การควบคุมการเข้าถึงเชิงตรรกะคือกลไกทางซอฟต์แวร์และนโยบายที่กำกับดูแลการเข้าถึงทรัพยากรดิจิทัล:</p>

<h3 id="topic-3-2-logical-controls">3.2.1 Logical vs. Physical Access Controls: สถาปัตยกรรมการควบคุม</h3>

การควบคุมการเข้าถึงในระบบความมั่นคงปลอดภัยแบ่งออกเป็น 2 ประเภทใหญ่:

- **Logical Access Controls (การควบคุมการเข้าถึงเชิงตรรกะ):** คือกลไกทางเทคโนโลยี ฮาร์ดแวร์ ซอฟต์แวร์ และนโยบายที่ใช้เพื่อจำกัดและควบคุมการเข้าถึงทรัพยากรในรูปแบบดิจิทัล เช่น ระบบคอมพิวเตอร์ เครือข่าย ข้อมูล ฐานข้อมูล และแอปพลิเคชัน (ครอบคลุมรหัสผ่าน, รายการควบคุมการเข้าถึง ACL, การเข้ารหัสข้อมูล, ไฟร์วอลล์)
- **Physical Access Controls (การควบคุมการเข้าถึงทางกายภาพ):** คืออุปสรรคและมาตรการที่ใช้ป้องกันการเข้าถึงสถานที่ อาคาร ห้องเซิร์ฟเวอร์ หรืออุปกรณ์ฮาร์ดแวร์โดยตรง (เช่น รั้ว ประตูล็อก การ์ดรักษาความปลอดภัย กล้องวงจรปิด)

<h3 id="topic-3-2-sod">3.2.2 Segregation of Duties (SoD): การแบ่งแยกหน้าที่ความรับผิดชอบ</h3>

**Segregation of Duties (SoD)** หรือ **Separation of Duties** คือหลักการควบคุมภายในที่กำหนดให้กระบวนการทำงานที่มีความสำคัญอย่างยิ่งยวด (Critical Tasks) จะต้องถูกแบ่งขั้นตอนออกเป็นส่วน ๆ และกระจายให้ผู้ปฏิบัติงานมากกว่าหนึ่งคนทำร่วมกัน:

> **กฎทองของ SoD:** หนึ่งกระบวนการสำคัญ ต้องใช้คนมากกว่าหนึ่งคนรับผิดชอบ (<span class="reading-math-formula">Critical Process → Multiple People</span>) และผู้สร้างรายการต้องไม่สามารถอนุมัติรายการของตนเองได้

วัตถุประสงค์หลักของ SoD:
- ป้องกันการทุจริตและการยักยอกเงิน (Prevent Fraud)
- ป้องกันข้อผิดพลาดจากการปฏิบัติงาน (Prevent Errors)
- ป้องกันการกระทำโดยไม่ได้รับอนุญาต (Prevent Unauthorized Actions)
- ลดความเสี่ยงจากภัยคุกคามภายใน (Mitigate Insider Threats)

ตัวอย่างกระบวนการ 3 ขั้นตอนทางการเงิน (3-Stage Workflow):
1. **Purchasing / Request (การร้องขอซื้อ):** พนักงานคนที่หนึ่ง (Employee A) กรอกใบขอสั่งซื้อสินค้า
2. **Payment Processing / Approval (การอนุมัติการจ่ายเงิน):** ผู้จัดการหรือพนักงานคนที่สอง (Employee B) เป็นผู้ตรวจสอบและอนุมัติการจ่ายเงิน
3. **Record Keeping / Reconciliation (การบันทึกบัญชีและกระทบยอด):** เจ้าหน้าที่บัญชีหรือพนักงานคนที่สาม (Employee C) เป็นผู้ลงบันทึกและกระทบยอดบัญชี

<h3 id="topic-3-2-polp-vs-sod">3.2.3 Least Privilege vs. Segregation of Duties: การเปรียบเทียบเชิงลึก</h3>

แม้ว่าทั้งสองหลักการจะมุ่งเน้นการจำกัดความเสี่ยง แต่มีมิติการควบคุมที่แตกต่างกันอย่างชัดเจน:

<div class="reading-semantic-diagram" data-diagram="leastPrivilegeVsSod"></div>

| <div class="reading-bilingual-term"><span class="reading-term-en">**Comparison Aspect**</span><span class="reading-term-th">(มิติการเปรียบเทียบ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Principle of Least Privilege (PoLP)**</span><span class="reading-term-th">(หลักสิทธิ์ขั้นต่ำ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Segregation of Duties (SoD)**</span><span class="reading-term-th">(การแบ่งแยกหน้าที่)</span></div> |
| :--- | :--- | :--- |
| **Focus (จุดเน้น)** | มุ่งเน้นไปที่ **สิทธิ์ของบุคคล/บัญชีรายบุคคล** (Individual Permissions) | มุ่งเน้นไปที่ **ขั้นตอนของกระบวนการทำงาน** (Workflow / Process Steps) |
| **Core Rule (กฎหลัก)** | จำกัดสิทธิ์ให้มีเฉพาะ **สิทธิ์ขั้นต่ำที่จำเป็น** (Minimum Access) | แบ่งงานสำคัญให้มี **ผู้รับผิดชอบมากกว่าหนึ่งคน** (Multiple People) |
| **Primary Risk Mitigated** | บัญชีถูกแฮกแล้วสร้างความเสียหายลุกลาม (Blast Radius) | การทุจริต การฉ้อโกง และความผิดพลาดโดยคนเพียงคนเดียว (Fraud / Abuse) |
| **Keyword Trigger** | *"Minimum necessary", "Excessive permissions"* | *"Single person controls entire process", "Approving own request"* |

<h3 id="topic-3-2-dac">3.2.4 Discretionary Access Control (DAC): การควบคุมตามดุลยพินิจของเจ้าของ</h3>

**DAC (Discretionary Access Control)** เป็นโมเดลการควบคุมการเข้าถึงที่กระจายอำนาจการตัดสินใจให้แก่ **"เจ้าของทรัพยากร" (Resource Owner)**:

- **ผู้มีอำนาจตัดสินใจ:** เจ้าของไฟล์หรือผู้สร้างทรัพยากร (Resource Owner)
- **กลไกการทำงาน:** เจ้าของสามารถกำหนดและเปลี่ยนแปลงสิทธิ์ (Permissions เช่น Read, Write, Execute, Deny) ให้กับผู้ใช้อื่นได้ตามความพึงพอใจของตนเอง โดยมักใช้รายการควบคุมการเข้าถึง (**Access Control Lists: ACLs**) กำกับไว้ที่ตัวไฟล์
- **ข้อดี:** ยืดหยุ่นสูง (Flexible), ใช้งานง่าย, ไม่ต้องพึ่งพาผู้ดูแลระบบส่วนกลางในทุกขั้นตอน
- **ข้อเสีย:** มีความเสี่ยงด้านความปลอดภัยสูง เจ้าของอาจเผลอเปิดสิทธิ์ที่หละหลวม และไม่สามารถป้องกันโปรแกรมประสงค์ร้าย (Trojan horse) ที่แอบอ้างสิทธิ์ของผู้ใช้ไปแก้ไขไฟล์ได้
- **ตัวอย่าง:** สิทธิ์การแชร์ไฟล์ใน Windows (NTFS Permissions), สิทธิ์ไฟล์ในระบบปฏิบัติการ Linux/Unix

<h3 id="topic-3-2-mac">3.2.5 Mandatory Access Control (MAC): การควบคุมแบบบังคับตามป้ายกำกับ</h3>

**MAC (Mandatory Access Control)** เป็นโมเดลการควบคุมการเข้าถึงที่มีความเข้มงวดและปลอดภัยสูงสุด โดยควบคุมจาก **"นโยบายของระบบส่วนกลาง" (Central Authority &amp; System Policy)**:

- **ผู้มีอำนาจตัดสินใจ:** นโยบายความมั่นคงปลอดภัยส่วนกลางของระบบ (Central Authority) ผู้ใช้หรือเจ้าของไฟล์ไม่มีสิทธิ์เปลี่ยนแปลงการตั้งค่าได้เอง
- **กลไกการทำงาน:** บังคับใช้ผ่านการเปรียบเทียบระหว่าง:
  1. **Security Classification / Label (ป้ายกำกับระดับความลับ):** ติดอยู่กับทรัพยากร/วัตถุ (Object) เช่น Unclassified, Confidential, Secret, Top Secret
  2. **Security Clearance (ระดับความไว้วางใจ):** มอบให้แก่ตัวผู้ใช้งาน (Subject) ผ่านการตรวจสอบประวัติอย่างละเอียด
  > **ข้อสังเกตสำคัญสำหรับข้อสอบ (Exam Core Distinction):** การมีระดับความไว้วางใจเพียงอย่างเดียว (**Security Clearance alone**) ไม่ได้ให้อำนาจเข้าถึงข้อมูลลับโดยอัตโนมัติ ผู้ใช้ต้องมี **"ความจำเป็นในการรับรู้" (Need-to-Know)** ที่ถูกต้องชอบธรรมและผ่านเกณฑ์นโยบายการควบคุมการเข้าถึงด้วยเสมอ (Security clearance alone does not automatically authorize access; the user must also have a legitimate Need-to-Know and satisfy applicable access-control policy) ซึ่งเป็นการนำหลัก Least Privilege มาบังคับใช้ร่วมกับ MAC
- **ข้อดี:** ความมั่นคงปลอดภัยระดับสูงสุด ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด
- **ข้อเสีย:** ขาดความยืดหยุ่น (Inflexible), มีความซับซ้อนในการบริหารจัดการสูงมาก และมีต้นทุนการดำเนินงานสูง
- **ตัวอย่าง:** ระบบเครือข่ายทางทหาร, หน่วยงานความมั่นคงของรัฐบาล, ระบบปฏิบัติการ SELinux

<h3 id="topic-3-2-rbac">3.2.6 Role-Based Access Control (RBAC): การควบคุมตามบทบาทหน้าที่</h3>

**RBAC (Role-Based Access Control)** เป็นโมเดลการควบคุมที่นิยมใช้งานมากที่สุดในองค์กรธุรกิจยุคปัจจุบัน:

- **ผู้มีอำนาจตัดสินใจ:** บทบาทหน้าที่การทำงานที่กำหนดไว้ล่วงหน้า (**Predefined Job Roles**)
- **กลไกการทำงาน:** สิทธิ์การเข้าถึง (Permissions) จะถูกผูกไว้กับบทบาทหน้าที่ (Roles เช่น บัญชี, วิศวกร, ผู้จัดการ) จากนั้นผู้ใช้งาน (Users) จะถูกกำหนดให้อยู่ในบทบาทที่สอดคล้องกับตำแหน่งงานจริงของตน
- **ข้อดี:** บริหารจัดการง่าย มีความสอดคล้อง (Consistency), รองรับการขยายตัวขององค์กรได้ดี (Scalability), เมื่อมีพนักงานใหม่เข้ามาเพียงแค่ผูกเข้ากับ Role ก็สามารถเริ่มงานได้ทันที
- **ข้อเสีย:** หากองค์กรมีบทบาทงานที่ซับซ้อนเกินไป อาจเกิดปัญหาบทบาทงอกงามจนควบคุมยาก (Role Explosion) หรือหากกำหนดบทบาทกว้างเกินไปผู้ใช้อาจได้รับสิทธิ์เกินจำเป็น
- **ตัวอย่าง:** ระบบจัดการสิทธิ์ในโรงพยาบาล (แพทย์, พยาบาล, เภสัชกร, การเงิน), ระบบ ERP ขององค์กรธุรกิจ

<h3 id="topic-3-2-abac">3.2.7 Attribute-Based Access Control (ABAC): การควบคุมตามคุณลักษณะและบริบท</h3>

**ABAC (Attribute-Based Access Control)** เป็นโมเดลการควบคุมการเข้าถึงยุคใหม่ที่มีความละเอียด (Fine-grained) และยืดหยุ่นสูงสุด โดยประเมินจาก **คุณลักษณะ (Attributes)** หลากหลายมิติร่วมกับนโยบายเชิงตรรกะแบบไดนามิก:

- **ผู้มีอำนาจตัดสินใจ:** เครื่องยนต์ประมวลผลนโยบาย (Policy Engine) ที่นำเอาค่าคุณลักษณะและเงื่อนไขสภาพแวดล้อมมาประเมินร่วมกันในขณะร้องขอ
- **หมวดหมู่คุณลักษณะหลัก 4 ด้าน:**
  1. **Subject Attributes (คุณลักษณะของผู้ใช้):** แผนก, ตำแหน่งงาน, ระดับตำแหน่ง, สถานะการจ้างงาน
  2. **Object / Resource Attributes (คุณลักษณะของทรัพยากร):** ระดับชั้นความลับของไฟล์, แผนกเจ้าของข้อมูล, ประเภทของไฟล์
  3. **Environmental Attributes (คุณลักษณะของสภาพแวดล้อม):** เวลาที่ร้องขอ (Time of day), วันในสัปดาห์, พิกัดสถานที่ (Location / Geolocation), เครือข่ายที่เชื่อมต่อ (Subnet / Corporate IP)
  4. **Device Attributes (คุณลักษณะของอุปกรณ์):** ประเภทของอุปกรณ์ (Corporate Laptop vs. Personal Mobile), สถานะการเข้ารหัสเครื่อง, สถานะการติดตั้งซอฟต์แวร์ป้องกันไวรัส
- **ตัวอย่างนโยบาย:** *"อนุญาตให้เปิดไฟล์สัญญาทางการเงินได้ ก็ต่อเมื่อ ผู้ใช้สังกัดแผนก Finance (Subject) และเชื่อมต่อผ่านคอมพิวเตอร์ของบริษัทที่มีการเข้ารหัส (Device) ในเวลาทำการ 08:30 - 17:00 น. (Environment) เท่านั้น"*

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>บันทึกขอบเขตการศึกษา: บริบทวิชาการเพิ่มเติมสำหรับ ABAC</span>
  </div>
  <p>ในเนื้อหาสไลด์การเรียนรู้เบื้องต้นได้ระบุโครงสร้างและคุณลักษณะของ ABAC ไว้อย่างชัดเจน แต่ไม่ได้ระบุรายละเอียดข้อดี-ข้อเสีย ในทางวิชาการและการสอบ ISC2 CC จุดเด่นสำคัญที่สุดของ ABAC คือ <strong>ความละเอียดระดับสูง (Fine-grained Context-Aware Access)</strong> และความสามารถในการประเมินเงื่อนไขเวลาและสถานที่ ส่วนข้อจำกัดคือ <strong>ความซับซ้อนในการประมวลผลนโยบาย (Processing Overhead)</strong> และการตรวจสอบความถูกต้องของกฎที่ซับซ้อน</p>
</div>

<h3 id="topic-3-2-models-matrix">3.2.8 Master Access Control Models Comparison Matrix: สรุปเปรียบเทียบ 4 โมเดล</h3>

การจดจำความแตกต่างระหว่างโมเดลการควบคุมการเข้าถึงทั้ง 4 แบบ เป็นจุดออกข้อสอบที่พบบ่อยที่สุดใน Domain 3:

<div class="reading-semantic-diagram" data-diagram="accessControlModels"></div>

| <div class="reading-bilingual-term"><span class="reading-term-en">**Access Control Model**</span><span class="reading-term-th">(โมเดลการควบคุม)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Decision Maker**</span><span class="reading-term-th">(ผู้ตัดสินใจให้สิทธิ์)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Primary Mechanism**</span><span class="reading-term-th">(กลไกหลักในการทำงาน)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Typical Use Case / Environment**</span><span class="reading-term-th">(สภาพแวดล้อมที่นิยมใช้)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Exam Keyword Triggers**</span><span class="reading-term-th">(คำสำคัญบ่งชี้ในข้อสอบ)</span></div> |
| :--- | :--- | :--- | :--- | :--- |
| **DAC (Discretionary)** | **Resource Owner** (เจ้าของทรัพยากร) | Access Control Lists (ACLs) กำกับที่ตัวไฟล์ | ระบบแชร์ไฟล์ทั่วไป, Windows NTFS, Unix Permissions | *"Owner decides", "File creator sets access", "Discretion"* |
| **MAC (Mandatory)** | **Central Authority** (นโยบายกลางของระบบ) | Security Labels &amp; Subject Clearances | ทางทหาร, หน่วยงานความมั่นคง, ระบบลับราชการ | *"Security Classification", "Clearance", "Top Secret", "Labels"* |
| **RBAC (Role-Based)** | **Predefined Role** (บทบาทหน้าที่งาน) | Permissions ผูกกับ Roles แล้ว User ผูกกับ Roles | องค์กรธุรกิจทั่วไป, สถาบันการเงิน, โรงพยาบาล | *"Job function", "Predefined roles", "Onboarding scalability"* |
| **ABAC (Attribute-Based)** | **Policy Engine** (ระบบประมวลผลนโยบาย) | Multiple Attributes (Subject, Object, Action, Environment) | ระบบคลาวด์ยุคใหม่, Zero Trust Architecture | *"Attributes", "Environmental conditions", "Time/Location/Device"* |

</section>

<section class="reading-objective-section reading-review-section" id="domain-3-review">

## Domain 3 Summary, Key Distinctions &amp; Review Scenarios

ส่วนนี้เป็นชุดเครื่องมือทบทวนและแบบฝึกปฏิบัติสถานการณ์จำลองระดับ Domain-wide เพื่อเสริมสร้างความเข้าใจเชิงลึกสำหรับทั้ง 2 วัตถุประสงค์ใน Domain 3:

<h3 id="topic-3-review-scenarios">Domain 3 Review &amp; Practical Analysis</h3>
<span id="topic-3-review-distinctions" class="reading-topic-anchor" aria-hidden="true"></span>
<span id="topic-3-review-traps" class="reading-topic-anchor" aria-hidden="true"></span>
<span id="topic-3-review-quickref" class="reading-topic-anchor" aria-hidden="true"></span>

#### 1. ตารางเปรียบเทียบคำที่มักสับสนในข้อสอบ (Concept Distinctions)

<div class="reading-distinction-grid">
  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>1. Provisioning vs. Deprovisioning</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Provisioning</strong>
        <div class="reading-distinction-desc">กระบวนการจัดเตรียม สร้างตัวตนดิจิทัล และจัดสรรสิทธิ์การเข้าถึงให้แก่ผู้ใช้เริ่มต้นทำงาน (Give Access)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Deprovisioning</strong>
        <div class="reading-distinction-desc">กระบวนการเพิกถอนสิทธิ์ ระงับการใช้งาน หรือปิดบัญชีเมื่อหมดความจำเป็นหรือพ้นสภาพ (Remove / Disable Access)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>2. Access Review vs. Deprovisioning</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Periodic Access Review</strong>
        <div class="reading-distinction-desc">การตรวจสอบและทบทวนความถูกต้องของสิทธิ์ผู้ใช้งานเป็นระยะ เพื่อค้นหาสิทธิ์ตกค้างหรือสิทธิ์ที่เกินจำเป็น</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Deprovisioning</strong>
        <div class="reading-distinction-desc">การลงมือปฏิบัติเพื่อเพิกถอนหรือระงับสิทธิ์การเข้าถึงที่เกิดขึ้นทันทีเมื่อมีเหตุการณ์กระตุ้น (Triggers) หรือหลังผลการตรวจพบ</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>3. Principle of Least Privilege vs. Segregation of Duties</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Principle of Least Privilege (PoLP)</strong>
        <div class="reading-distinction-desc">จำกัดสิทธิ์ของบุคคลคนเดียวให้มีเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่องาน (Minimum Necessary Access)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Segregation of Duties (SoD)</strong>
        <div class="reading-distinction-desc">แบ่งขั้นตอนของกระบวนการงานสำคัญให้ใช้คนมากกว่าหนึ่งคนรับผิดชอบร่วมกัน (Multiple People) เพื่อป้องกันการทุจริต</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>4. Privilege Creep vs. Excessive Permissions</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Privilege Creep (Accumulation)</strong>
        <div class="reading-distinction-desc">การที่สิทธิ์ค่อย ๆ สะสมเพิ่มขึ้นจากการเปลี่ยนบทบาทหรือย้ายฝ่าย (Mover event) โดยสิทธิ์เดิมไม่ได้ถูกเพิกถอนออกไป</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Excessive Permissions</strong>
        <div class="reading-distinction-desc">การได้รับสิทธิ์มากเกินความจำเป็นตั้งแต่เริ่มต้น (Provisioning) หรือสิทธิ์ที่กว้างเกินขอบเขตงานโดยรวม</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>5. DAC vs. MAC</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Discretionary Access Control (DAC)</strong>
        <div class="reading-distinction-desc">เจ้าของทรัพยากร (Resource Owner) มีดุลยพินิจและอำนาจเด็ดขาดในการกำหนดสิทธิ์ให้ผู้อื่น</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Mandatory Access Control (MAC)</strong>
        <div class="reading-distinction-desc">นโยบายระบบส่วนกลาง (Central Authority) บังคับใช้สิทธิ์ตาม Security Labels และ Clearances ผู้ใช้แก้ไขเองไม่ได้</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>6. RBAC vs. ABAC</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Role-Based Access Control (RBAC)</strong>
        <div class="reading-distinction-desc">สิทธิ์ผูกกับตำแหน่งงานหรือบทบาทที่กำหนดไว้ล่วงหน้า (Predefined Job Roles) เหมาะสำหรับการขยายขนาดในองค์กร</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Attribute-Based Access Control (ABAC)</strong>
        <div class="reading-distinction-desc">สิทธิ์ถูกประเมินแบบไดนามิกจากคุณลักษณะหลากหลายด้าน (Subject, Object, Environment, Device)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>7. Authentication vs. Authorization</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authentication (AuthN)</strong>
        <div class="reading-distinction-desc">การตรวจสอบและยืนยันว่าผู้ใช้คือใคร (Who are you?) ผ่านข้อมูลประจำตัว เช่น รหัสผ่าน หรือไบโอเมตริกซ์</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authorization (AuthZ)</strong>
        <div class="reading-distinction-desc">การตรวจสอบและกำหนดว่าผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วมีสิทธิ์ทำอะไรได้บ้าง (What are you allowed to do?)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>8. Identity Proofing vs. Authentication</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Identity Proofing (NIST SP 800-63A)</strong>
        <div class="reading-distinction-desc">การตรวจสอบอัตลักษณ์และหลักฐานในโลกจริง (เช่น บัตรประชาชน) ก่อนการออกรหัสดิจิทัล (Enrollment)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authentication (NIST SP 800-63B)</strong>
        <div class="reading-distinction-desc">การยืนยันว่าผู้ล็อกอินเป็นผู้ครอบครองข้อมูลประจำตัวดิจิทัล (Tokens / Credentials) ที่ถูกต้องจริงในการใช้งานประจำวัน</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>9. Logical vs. Physical Access Controls</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Logical Access Controls</strong>
        <div class="reading-distinction-desc">การควบคุมทางเทคโนโลยี ซอฟต์แวร์ และนโยบาย เพื่อจำกัดการเข้าถึงทรัพยากรดิจิทัล (Data, Systems, Networks)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Physical Access Controls</strong>
        <div class="reading-distinction-desc">การควบคุมทางกายภาพ เพื่อป้องกันการเข้าถึงสถานที่ อาคาร ห้องเซิร์ฟเวอร์ และอุปกรณ์ฮาร์ดแวร์โดยตรง</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>10. Disabling vs. Deleting Accounts</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Disable Account (ระงับการใช้งาน)</strong>
        <div class="reading-distinction-desc">ล็อกบัญชีไม่ให้ล็อกอินได้ แต่ยังคงเก็บข้อมูล ประวัติการใช้งาน และ Audit Logs ไว้เพื่อการตรวจสอบย้อนหลัง</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Delete Account (ลบทิ้งถาวร)</strong>
        <div class="reading-distinction-desc">การทำลายข้อมูลบัญชีทิ้งถาวร ซึ่งมีความเสี่ยงทำให้ประวัติการตรวจสอบย้อนหลังสูญหายและกระทบต่อกรรมสิทธิ์ของไฟล์</div>
      </div>
    </div>
  </div>
</div>

#### 2. ข้อสังเกตและจุดจำสำคัญสำหรับข้อสอบ (Exam Traps)

1. ถ้าข้อสอบถามถึง **"สิ่งแรกที่ต้องทำก่อนให้สิทธิ์เข้าถึง (Grant Access)"** → ให้เลือก **Define Roles and Responsibilities**
2. ถ้าข้อสอบถามถึง **"กระบวนการสร้างบัญชี กำหนดบทบาท และให้สิทธิ์เข้าถึงเริ่มต้น"** → ให้เลือก **Provisioning**
3. ถ้าข้อสอบถามถึง **"สิทธิ์เก่าสะสมเพิ่มขึ้นเรื่อย ๆ เมื่อพนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย"** → ให้เลือก **Privilege Accumulation / Privilege Creep**
4. ถ้าข้อสอบถามถึง **"บัญชีของพนักงานที่ลาออกไปแล้วแต่ยังค้างอยู่ในระบบ"** → ให้เลือก **Orphaned Accounts**
5. ถ้าข้อสอบถามถึง **"ผู้สร้างรายการไม่สามารถอนุมัติรายการของตนเองได้"** → ให้เลือก **Segregation of Duties (SoD)**
6. ถ้าข้อสอบถามถึง **"หนึ่งกระบวนการสำคัญต้องใช้คนมากกว่าหนึ่งคนรับผิดชอบ"** → ให้เลือก **Segregation of Duties (SoD)**
7. ถ้าข้อสอบถามถึง **"จำกัดสิทธิ์ให้มีเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่องาน"** → ให้เลือก **Principle of Least Privilege (PoLP)**
8. ถ้าข้อสอบถามถึง **"เจ้าของไฟล์เป็นผู้ตัดสินใจกำหนดสิทธิ์การเข้าถึงด้วยตนเอง"** → ตอบ **DAC (Discretionary Access Control)**
9. ถ้าข้อสอบถามถึง **"การควบคุมการเข้าถึงโดยใช้ Security Classification, Labels และ Clearance"** → ตอบ **MAC (Mandatory Access Control)**
10. ถ้าข้อสอบถามถึง **"การควบคุมที่ผู้ใช้หรือเจ้าของไฟล์ไม่มีสิทธิ์เปลี่ยนแปลงการตั้งค่าได้เอง"** → ตอบ **MAC (Mandatory Access Control)**
11. ถ้าข้อสอบถามถึง **"การให้สิทธิ์เข้าถึงตามหน้าที่การทำงาน (Job Function / Role)"** → ตอบ **RBAC (Role-Based Access Control)**
12. ถ้าข้อสอบถามถึง **"การควบคุมการเข้าถึงที่ประเมินเวลา สถานที่ อุปกรณ์ และแผนกแบบไดนามิก"** → ตอบ **ABAC (Attribute-Based Access Control)**
13. ถ้าข้อสอบถามถึง **"การเพิกถอนสิทธิ์พนักงานที่ลาออก ควรทำอย่างไรเป็นแนวปฏิบัติที่ดีที่สุด"** → ตอบ **Disable Account** (ไม่ใช่ Delete Account ทันที)
14. ถ้าข้อสอบถามถึง **"การตรวจสอบความมีอยู่จริงของบุคคลในโลกจริงก่อนออกรหัสดิจิทัล"** → ตอบ **Identity Proofing (NIST SP 800-63A)**

#### 3. ตารางสรุปคำสำคัญบ่งชี้แนวคิด (Keyword-to-Concept Matrix)

| <div class="reading-bilingual-term"><span class="reading-term-en">**Concept**</span><span class="reading-term-th">(แนวคิดสำคัญ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Exam Trigger Keywords**</span><span class="reading-term-th">(คำค้นพบในโจทย์ข้อสอบ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Core Purpose**</span><span class="reading-term-th">(วัตถุประสงค์หลัก)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Practical Scenario Example**</span><span class="reading-term-th">(ตัวอย่างสถานการณ์จริง)</span></div> |
| :--- | :--- | :--- | :--- |
| **Provisioning** | "Create identity", "Grant required access", "Onboarding" | จัดสรรตัวตนดิจิทัลและสิทธิ์เริ่มต้นทำงาน | พนักงานใหม่ได้รับการสร้าง AD User และมอบสิทธิ์ ERP |
| **Deprovisioning** | "Disable access", "Termination", "Contract ended" | ระงับและเพิกถอนสิทธิ์เมื่อหมดความจำเป็น | ระงับบัญชี VPN และอีเมลทันทีที่พนักงานพ้นสภาพ |
| **Periodic Review** | "Regular review", "Audit findings", "Verify permissions" | ตรวจสอบความถูกต้องของสิทธิ์เป็นระยะ | ผู้จัดการตรวจสอบรายชื่อสิทธิ์ของทีมงานทุก 3 เดือน |
| **Privilege Creep** | "Role change", "Accumulated rights", "Mover event" | ระบุสิทธิ์ตกค้างจากการย้ายแผนก | ย้ายจาก Finance ไป IT แต่ยังเปิดดูไฟล์การเงินได้ |
| **Least Privilege** | "Minimum necessary access", "Limit blast radius" | ป้องกันความเสียหายลุกลามเมื่อบัญชีถูกแฮก | Helpdesk รีเซ็ตรหัสผ่านได้แต่ไม่มีสิทธิ์ Domain Admin |
| **SoD** | "Multiple people", "Creator cannot approve", "Prevent fraud" | ป้องกันการทุจริตและความผิดพลาดร้ายแรง | ผู้ขอซื้อสินค้าต้องไม่ใช่บุคคลเดียวกับผู้อนุมัติจ่ายเงิน |
| **DAC** | "Resource owner decides", "File creator", "NTFS/ACL" | เจ้าของข้อมูลจัดการสิทธิ์ตามความพอใจ | ผู้สร้างไฟล์กำหนดสิทธิ์ Read/Write ให้เพื่อนร่วมงาน |
| **MAC** | "Security labels", "Clearance", "Central authority" | ป้องกันข้อมูลความลับรั่วไหลในระดับสูงสุด | ระบบทหารอนุญาตให้อ่านเอกสารลับเฉพาะผู้มี Clearance |
| **RBAC** | "Predefined role", "Job function", "Scalability" | บริหารสิทธิ์พนักงานจำนวนมากอย่างเป็นระบบ | พยาบาลทุกคนในแผนกได้รับสิทธิ์ดูเวชระเบียนเหมือนกัน |
| **ABAC** | "Attributes", "Environment", "Time/Device/Location" | ควบคุมการเข้าถึงแบบละเอียดตามบริบท | เข้าถึงข้อมูลการเงินได้เฉพาะเครื่องบริษัทในเวลาทำการ |

#### 4. สถานการณ์จำลองและแนวคิดการวิเคราะห์ (Review Scenarios)

:::scenario
id: 1
badge: Scenario 01
topic: Roles Definition & Access Prerequisite
situation: องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์ ผู้บริหารฝ่ายความมั่นคงปลอดภัยได้กำชับทีม IT Admin ว่าก่อนที่จะเริ่มทำการอนุมัติหรือมอบสิทธิ์การเข้าถึง (Grant Access) ให้กับระบบฐานข้อมูลและซอร์สโค้ดของบริษัท จะต้องดำเนินการขั้นตอนใดให้แล้วเสร็จอย่างเป็นทางการก่อน
question: ขั้นตอนสำคัญที่สุดที่องค์กรต้องดำเนินการให้ชัดเจนก่อนทำการให้สิทธิ์การเข้าถึง (Grant Access) แก่ผู้ใช้คืออะไร?
answer: Define Roles and Responsibilities — กำหนดบทบาทและหน้าที่ความรับผิดชอบ
reasoning: ตามหลักการบริหารจัดการตัวตนและการเข้าถึง (IAM) องค์กรจะต้องทำการ "กำหนดบทบาทและหน้าที่ความรับผิดชอบ (Define Roles and Responsibilities)" ให้ชัดเจนเป็นอันดับแรก เพื่อให้ทราบว่าหน้าที่งาน (Job Function) นั้นต้องการสิทธิ์ใดบ้างที่จำเป็นอย่างแท้จริง การให้สิทธิ์โดยไม่มีการกำหนดบทบาทล่วงหน้าจะนำไปสู่ปัญหาการให้สิทธิ์เกินจำเป็น (Excessive Permissions)
:::

:::scenario
id: 2
badge: Scenario 02
topic: Identity Provisioning
situation: มีพนักงานใหม่เพิ่งเริ่มงานในแผนกการเงิน ฝ่ายบุคคลได้ส่งเอกสารส่งมอบงานให้ทีม IT เพื่อสร้างบัญชีผู้ใช้งานใหม่ กำหนดรหัสประจำตัวเฉพาะ (Unique ID) ผูกสิทธิ์ตามบทบาท Finance Staff มอบสิทธิ์เข้าถึงโฟลเดอร์งบประมาณ และออกบัตร Smart Card พร้อมรหัสผ่านเริ่มต้นสำหรับการยืนยันตัวตน
question: กระบวนการสร้างตัวตน มอบหมายบทบาท สิทธิ์ และการออกข้อมูลประจำตัวสำหรับเข้าใช้งานระบบทั้งหมดนี้ เรียกว่าอะไร?
answer: Provisioning — การจัดสรรสิทธิ์และตัวตน
reasoning: Provisioning คือกระบวนการเตรียมและจัดสรรทรัพยากรตัวตน (Identity Lifecycle Management) ซึ่งครอบคลุมตั้งแต่การสร้าง User Account, การกำหนด Unique Identity, การผูก Roles, การให้ Permissions, การเปิดสิทธิ์เข้าถึง Applications ตลอดจนการออก Authentication Credentials เพื่อให้ผู้ใช้สามารถเริ่มต้นทำงานได้
:::

:::scenario
id: 3
badge: Scenario 03
topic: Privilege Accumulation / Creep
situation: พนักงานคนหนึ่งเคยทำงานในฝ่ายบริการลูกค้า (Customer Support) และได้รับสิทธิ์เข้าถึงข้อมูลประวัติการซื้อของลูกค้า ต่อมาได้รับการเลื่อนตำแหน่งและย้ายไปอยู่ฝ่ายการตลาด (Marketing) แม้จะได้รับสิทธิ์ใหม่สำหรับงานการตลาดแล้ว แต่ทีม IT ไม่ได้เพิกถอนสิทธิ์เก่าของฝ่ายบริการลูกค้าออก ทำให้พนักงานรายนี้สามารถเข้าถึงข้อมูลของทั้งสองฝ่ายได้พร้อมกัน
question: ปรากฏการณ์ที่ผู้ใช้มีสิทธิ์ในระบบสะสมเพิ่มขึ้นเรื่อย ๆ จากการเปลี่ยนบทบาทหรือย้ายแผนกโดยไม่มีการลบสิทธิ์เก่าออก เรียกว่าอะไร?
answer: Privilege Accumulation / Privilege Creep — การสะสมสิทธิ์เกินจำเป็น
reasoning: Privilege Accumulation หรือ Privilege Creep เกิดขึ้นเมื่อพนักงานเปลี่ยนบทบาท หน้าที่ หรือย้ายแผนก (Mover event) แล้วได้รับสิทธิ์ใหม่เพิ่มเข้ามา แต่สิทธิ์เดิมที่ไม่จำเป็นต่องานปัจจุบันไม่ถูกเพิกถอนออกไป ส่งผลให้สิทธิ์การเข้าถึงพอกพูนขึ้นเรื่อย ๆ จนละเมิดหลักการสิทธิ์ขั้นต่ำที่จำเป็น (Least Privilege)
:::

:::scenario
id: 4
badge: Scenario 04
topic: Segregation of Duties (SoD)
situation: บริษัทกำหนดนโยบายทางการเงินว่า พนักงานผู้ทำหน้าที่กรอกข้อมูลคำขอสั่งซื้อสินค้า (Purchase Requisition) จะต้องไม่ใช่บุคคลเดียวกับผู้มีอำนาจกดอนุมัติการสั่งซื้อ (Payment Approval) และการกระทบยอดทางบัญชี (Reconciliation) จะต้องทำโดยเจ้าหน้าที่อีกคนหนึ่ง
question: นโยบายที่ป้องกันไม่ให้บุคคลใดบุคคลหนึ่งมีอำนาจดำเนินกระบวนการที่สำคัญตั้งแต่ต้นจนจบเพียงลำพังนี้ สอดคล้องกับหลักการใด?
answer: Segregation of Duties (SoD) — การแบ่งแยกหน้าที่ความรับผิดชอบ
reasoning: Segregation of Duties (SoD) หรือ Separation of Duties มีหลักการสำคัญคือ การแบ่งขั้นตอนการทำงานที่สำคัญ (Critical Tasks) ออกเป็นส่วน ๆ และมอบหมายให้ผู้ปฏิบัติงานมากกว่าหนึ่งคน (Multiple People) เพื่อป้องกันการทุจริต (Fraud) ความผิดพลาด (Errors) และการกระทำโดยไม่ได้รับอนุญาต โดยกฎทองคือ "ผู้สร้างรายการต้องไม่สามารถอนุมัติรายการของตนเองได้"
:::

:::scenario
id: 5
badge: Scenario 05
topic: Principle of Least Privilege (PoLP)
situation: ผู้บริหารระบบเครือข่ายตั้งค่านโยบายความปลอดภัยให้เจ้าหน้าที่ฝ่ายสนับสนุนด้านเทคนิค (Helpdesk) สามารถทำได้เพียงแค่การรีเซ็ตรหัสผ่านของผู้ใช้ทั่วไปเท่านั้น โดยไม่สามารถเข้าถึงฐานข้อมูลเงินเดือน ไม่สามารถแก้ไขไฟล์คอนฟิกูเรชันของไฟร์วอลล์ และไม่ได้รับสิทธิ์ Domain Admin
question: การจำกัดสิทธิ์การเข้าถึงทรัพยากรสารสนเทศให้มีเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่อการปฏิบัติหน้าที่ตามตำแหน่งงานเท่านั้น สอดคล้องกับหลักการใด?
answer: Principle of Least Privilege (PoLP) — หลักการให้สิทธิ์ขั้นต่ำที่จำเป็น
reasoning: Principle of Least Privilege (PoLP) คือหลักการความมั่นคงปลอดภัยพื้นฐานที่กำหนดให้ผู้ใช้ ระบบ หรือกระบวนการ ได้รับสิทธิ์ในการเข้าถึงและทำงานเฉพาะเท่าที่จำเป็นอย่างแท้จริงต่อการทำหน้าที่ของตนเท่านั้น (Minimum Necessary Access) เพื่อลดผลกระทบหากบัญชีดังกล่าวถูกแฮกหรือถูกนำไปใช้ในทางที่ผิด
:::

:::scenario
id: 6
badge: Scenario 06
topic: Discretionary Access Control (DAC)
situation: นักวิจัยในแผนก R&amp;D ได้สร้างเอกสารผลการทดลองลับขึ้นมาบนระบบแชร์ไฟล์ของแผนก ในฐานะผู้สร้างไฟล์ เธอจึงสามารถเปิดการตั้งค่าของไฟล์และเลือกกำหนดได้ด้วยตนเองว่าจะอนุญาตให้เพื่อนร่วมทีมคนใดอ่านได้ (Read) ใครแก้ไขได้ (Write) และใครที่ถูกห้ามเข้าถึงอย่างเด็ดขาด
question: รูปแบบการควบคุมการเข้าถึงที่ให้อำนาจแก่ "เจ้าของทรัพยากร" (Resource Owner) เป็นผู้ตัดสินใจและกำหนดสิทธิ์แก่ผู้อื่นตามดุลยพินิจของตน เรียกว่าอะไร?
answer: Discretionary Access Control (DAC) — การควบคุมการเข้าถึงตามดุลยพินิจของเจ้าของ
reasoning: ในโมเดล Discretionary Access Control (DAC) ผู้เป็นเจ้าของข้อมูลหรือทรัพยากร (Resource Owner) มีสิทธิ์ขาดในการกำหนดและเปลี่ยนแปลงสิทธิ์การเข้าถึงทรัพยากรนั้น ๆ ได้ตามดุลยพินิจของตนเอง (เช่น สิทธิ์ NTFS หรือ Unix File Permissions) ข้อดีคือมีความยืดหยุ่นสูง แต่ข้อเสียคือเจ้าของอาจเผลอให้สิทธิ์ที่หละหลวมจนเกิดความเสี่ยงด้านความปลอดภัย
:::

:::scenario
id: 7
badge: Scenario 07
topic: Mandatory Access Control (MAC)
situation: ในระบบสารสนเทศของหน่วยงานความมั่นคง เอกสารทุกฉบับจะถูกระบบตีตรากำกับระดับชั้นความลับอย่างเข้มงวด เช่น Confidential, Secret หรือ Top Secret ผู้ใช้งานจะสามารถเปิดอ่านเอกสารได้ก็ต่อเมื่อระดับความไว้วางใจหรือระดับการตรวจสอบประวัติ (Security Clearance) ของผู้ใช้นั้นมีระดับเท่ากับหรือสูงกว่าระดับชั้นความลับของเอกสารเท่านั้น โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับของเอกสารด้วยตนเอง
question: รูปแบบการควบคุมการเข้าถึงที่ถูกบังคับใช้โดยนโยบายกลางของระบบโดยพิจารณาจาก "ป้ายกำกับความลับ" (Security Labels) และ "ระดับความไว้วางใจ" (Clearance) ของผู้ใช้ เรียกว่าอะไร?
answer: Mandatory Access Control (MAC) — การควบคุมการเข้าถึงแบบบังคับ
reasoning: Mandatory Access Control (MAC) เป็นโมเดลการควบคุมที่มีความเข้มงวดสูงสุด โดยอำนาจการตัดสินใจไม่ได้อยู่ที่ผู้ใช้หรือเจ้าของไฟล์ แต่อยู่ที่นโยบายของระบบส่วนกลาง (Central Authority) การเข้าถึงถูกควบคุมผ่านการเปรียบเทียบระหว่าง Security Label ของวัตถุ (Object) กับ Security Clearance ของผู้ใช้ (Subject) นิยมใช้ในองค์กรทางทหารและหน่วยงานรัฐบาลระดับสูง
:::

:::scenario
id: 8
badge: Scenario 08
topic: Role-Based Access Control (RBAC)
situation: โรงพยาบาลแห่งหนึ่งกำหนดกลุ่มสิทธิ์การใช้งานระบบเวชระเบียนอิเล็กทรอนิกส์ไว้ล่วงหน้า เช่น บทบาท "พยาบาลประจำตึก" สามารถดูประวัติคนไข้และบันทึกสัญญาณชีพได้, บทบาท "แพทย์เจ้าของไข้" สามารถสั่งยาได้, และบทบาท "เจ้าหน้าที่การเงิน" ดูได้เฉพาะข้อมูลค่ารักษาพยาบาล เมื่อมีพยาบาลใหม่เข้ามาทำงาน IT เพียงแค่กำหนดให้ผู้ใช้อยู่ในกลุ่มบทบาทพยาบาล ก็จะได้รับสิทธิ์ทั้งหมดที่พยาบาลพึงมีทันที
question: รูปแบบการควบคุมการเข้าถึงที่กำหนดสิทธิ์ไว้กับ "บทบาทหน้าที่การทำงาน" (Job Roles) แล้วนำผู้ใช้ไปผูกไว้กับบทบาทเหล่านั้น เรียกว่าอะไร?
answer: Role-Based Access Control (RBAC) — การควบคุมการเข้าถึงตามบทบาทหน้าที่
reasoning: Role-Based Access Control (RBAC) คือโมเดลที่ผูกสิทธิ์ (Permissions) ไว้กับบทบาทหน้าที่ (Roles) ภายในองค์กร จากนั้นจึงมอบหมายบทบาทนั้นให้กับผู้ใช้งาน โมเดลนี้ช่วยให้การบริหารจัดการสิทธิ์ทำได้ง่าย รวดเร็ว และรองรับการขยายตัวขององค์กร (Scalability) ได้เป็นอย่างดีเมื่อเทียบกับการให้สิทธิ์รายบุคคล
:::

:::scenario
id: 9
badge: Scenario 09
topic: Attribute-Based Access Control (ABAC)
situation: บริษัทด้านการเงินแห่งหนึ่งกำหนดเงื่อนไขการเข้าถึงระบบโอนเงินข้ามประเทศไว้ว่า: ผู้ใช้จะต้องมีตำแหน่งเป็น "ผู้จัดการฝ่ายการเงิน" (Subject Attribute), เข้าถึงผ่าน "คอมพิวเตอร์แล็ปท็อปของบริษัทที่มีการเข้ารหัสฮาร์ดดิสก์และต่อผ่านเครือข่ายสำนักงานเท่านั้น" (Device &amp; Location Attributes), และต้องทำธุรกรรม "ในวันจันทร์-ศุกร์ ระหว่างเวลา 08:30 - 17:00 น." (Environmental Attributes) เท่านั้น หากอยู่นอกเงื่อนไขเหล่านี้ระบบจะปฏิเสธการเข้าถึงทันที
question: รูปแบบการควบคุมการเข้าถึงที่นำเอาคุณลักษณะหลายด้าน ทั้งตัวผู้ใช้ ทรัพยากร อุปกรณ์ และสภาพแวดล้อม มาประมวลผลร่วมกันแบบไดนามิก เรียกว่าอะไร?
answer: Attribute-Based Access Control (ABAC) — การควบคุมการเข้าถึงตามคุณลักษณะและบริบท
reasoning: Attribute-Based Access Control (ABAC) เป็นโมเดลการควบคุมขั้นสูงที่ประเมินคุณลักษณะ (Attributes) หลากหลายมิติอย่างยืดหยุ่นและละเอียด (Fine-grained) ได้แก่ Subject (ผู้ใช้), Object/Resource (ข้อมูล), Action (การกระทำ) และ Environment (เวลา, พิกัดสถานที่, ประเภทอุปกรณ์, สถานะความปลอดภัย) เพื่อตัดสินใจอนุญาตหรือปฏิเสธแบบเรียลไทม์
:::

:::scenario
id: 10
badge: Scenario 10
topic: Identity Deprovisioning &amp; Account Retention
situation: พนักงานฝ่ายขายได้ยื่นใบลาออกและทำงานวันสุดท้ายเสร็จสิ้น ทีม IT ได้รับแจ้งคำสั่งจึงทำการระงับการใช้งานบัญชี (Disable Account), เพิกถอนสิทธิ์การเข้าถึง VPN, อีเมล และระบบ CRM ทั้งหมดทันที แต่ไม่ได้ทำการลบชื่อบัญชีและประวัติการทำรายการทิ้งไปจากฐานข้อมูล Active Directory เพื่อเก็บไว้ใช้ในการตรวจสอบย้อนหลัง (Audit Trail)
question: กระบวนการเพิกถอนสิทธิ์และระงับการเข้าถึงทรัพยากรเมื่อพนักงานสิ้นสุดสภาพการทำงานนี้ เรียกว่าอะไร และเหตุใดจึงควรใช้วิธี Disable มากกว่า Delete ทันที?
answer: Deprovisioning — การเพิกถอนสิทธิ์ โดยเลือก Disable เพื่อรักษาประวัติการตรวจสอบ (Audit Trail)
reasoning: Deprovisioning คือการเพิกถอนหรือระงับสิทธิ์ทั้งหมดเมื่อหมดความจำเป็น (เช่น ลาออก ถูกเลิกจ้าง หรือหมดสัญญาจ้าง) และในทางปฏิบัติที่ดีด้านความปลอดภัย (Best Practice) ไม่ควรลบบัญชีผู้ใช้ทิ้งทันที (Delete) แต่ควรระงับการใช้งาน (Disable) เพื่อรักษาประวัติการทำงาน บันทึกการตรวจสอบย้อนหลัง (Audit Logs) และป้องกันการสูญหายของความเป็นเจ้าของไฟล์ในระบบ
:::

:::scenario
id: 11
badge: Scenario 11
topic: Periodic Access Review &amp; Orphaned Accounts
situation: ในการตรวจสอบความมั่นคงปลอดภัยประจำไตรมาส ผู้ตรวจสอบภายในพบว่ามีบัญชีผู้ใช้งานระบบ ERP จำนวน 8 บัญชีที่ยังคงเปิดใช้งานอยู่ ทั้งที่สัญญาจ้างของพนักงานภายนอก (Contractors) ที่เป็นเจ้าของบัญชีเหล่านั้นได้สิ้นสุดลงไปแล้วเมื่อ 3 เดือนก่อน
question: บัญชีผู้ใช้ที่ผู้ถือครองพ้นสภาพไปแล้วแต่ยังคงค้างอยู่ในระบบนี้เรียกว่าอะไร และกระบวนการใดที่ช่วยตรวจพบปัญหานี้ได้อย่างสม่ำเสมอ?
answer: Orphaned Accounts (บัญชีไร้เจ้าของ) ตรวจพบผ่าน Periodic Access Review (การทบทวนสิทธิ์เป็นระยะ)
reasoning: บัญชีที่ยังคงเปิดใช้งานค้างอยู่โดยไม่มีผู้รับผิดชอบหรือผู้ใช้งานจริงที่ได้รับอนุญาตหลงเหลืออยู่ เรียกว่า "Orphaned Accounts" ซึ่งมักเกิดจากกระบวนการ Deprovisioning ที่บกพร่อง การทำ "Periodic Access Review" หรือการตรวจสอบทบทวนสิทธิ์ของผู้ใช้งานในระบบอย่างสม่ำเสมอ เป็นมาตรการสำคัญในการค้นพบและกำจัดบัญชีเหล่านี้เพื่อลดความเสี่ยงจากการถูกนำไปใช้ในทางมิชอบ
:::

:::scenario
id: 12
badge: Scenario 12
topic: NIST SP 800-63: Identity Proofing vs Authentication
situation: ประชาชนต้องการสมัครใช้งานแอปพลิเคชันพอร์ทัลบริการภาครัฐ ในขั้นตอนแรก ผู้สมัครจะต้องเดินทางไปแสดงตนที่จุดบริการพร้อมแสดงบัตรประชาชนตัวจริงและสแกนใบหน้าเพื่อยืนยันว่าตนเองคือบุคคลที่มีตัวตนอยู่จริงตามกฎหมาย จากนั้นจึงได้รับสิทธิ์ให้ตั้งชื่อบัญชีและรหัสผ่านสำหรับการเข้าสู่ระบบในครั้งต่อไปจากที่บ้าน
question: ขั้นตอนการตรวจสอบเอกสารและอัตลักษณ์บุคคลในโลกจริงก่อนการออกบัตรประจำตัวดิจิทัลนี้ สอดคล้องกับฟังก์ชันใดของ NIST SP 800-63?
answer: Identity Proofing &amp; Enrollment (NIST SP 800-63A) — การพิสูจน์ตัวตนในโลกจริง
reasoning: ตามมาตรฐาน NIST SP 800-63 ฟังก์ชัน "Identity Proofing" (SP 800-63A) คือกระบวนการตรวจสอบความมีอยู่จริงและความถูกต้องของตัวตนบุคคลในโลกจริง (Real-world Identity Verification) ก่อนการออกข้อมูลประจำตัวดิจิทัล ในขณะที่ "Authentication" (SP 800-63B) คือการตรวจสอบว่าผู้ที่กำลังล็อกอินในระบบคือผู้ครอบครองข้อมูลประจำตัว (Authenticator) ที่ถูกต้องจริง
:::

</section>
