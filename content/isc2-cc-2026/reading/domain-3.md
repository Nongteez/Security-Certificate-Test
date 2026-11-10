<p class="reading-lead">สรุปและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับเตรียมสอบ ISC2 Certified in Cybersecurity (CC) ฉบับปรับปรุงปี 2026 ใน Domain 3: Identity and Access Management (IAM) Concepts — แนวคิดการบริหารตัวตนและการเข้าถึง (น้ำหนักข้อสอบ 20%) ครอบคลุมการบริหารจัดการวงจรชีวิตของตัวตนดิจิทัล (Identity Life Cycle Management: Joiner-Mover-Leaver, Provisioning, Periodic Access Review, Deprovisioning), กรอบมาตรฐานและเครื่องมืออัตลักษณ์ (NIST SP 800-63, Directory Services, IdPs), หลักการสิทธิ์ขั้นต่ำ (Principle of Least Privilege), การแบ่งแยกหน้าที่ความรับผิดชอบ (Segregation of Duties), และโมเดลการควบคุมการเข้าถึงเชิงตรรกะแบบครบวงจร (DAC, MAC, RBAC, ABAC)</p>

<section class="reading-objective-section reading-structured-objective" id="obj-3-1">

## Objective 3.1: Understand Identity Life Cycle Management

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การบริหารจัดการตัวตนและการเข้าถึง (Identity and Access Management: IAM) เป็นรากฐานสำคัญที่สุดในการควบคุมความมั่นคงปลอดภัย:</p>

<h3 id="topic-3-1-jml-lifecycle">3.1.1 IAM Overview &amp; The JML Lifecycle: วงจรชีวิตตัวตนดิจิทัล</h3>

**IAM (Identity and Access Management)** คือกรอบนโยบาย กระบวนการ และเทคโนโลยีที่ใช้เพื่อกำกับดูแลว่า *"ใคร (Who)"* สามารถเข้าถึง *"ทรัพยากรใด (What)"* ได้บ้าง ภายใต้ *"เงื่อนไขใด (Under what conditions)"* เพื่อให้มั่นใจว่าผู้ใช้ที่ถูกต้องจะสามารถเข้าถึงทรัพยากรที่จำเป็นได้ในเวลาที่เหมาะสม และป้องกันไม่ให้ผู้ไม่มีสิทธิ์เข้าถึงข้อมูลขององค์กร

กระบวนการหลักของ IAM ทำงานสอดประสานกันเป็นวงจรต่อเนื่อง 5 ขั้นตอนหลัก:
<span class="reading-math-formula">Identity → Access → Control → Review → Remove</span>

ในทางปฏิบัติระดับสากลและองค์กรธุรกิจ วงจรชีวิตของพนักงานและตัวตนดิจิทัลถูกสรุปผ่านโมเดล **JML (Joiner, Mover, Leaver)**:

<div class="reading-semantic-diagram" data-diagram="iamLifecycle"></div>

<section class="reading-concept-unit">
<h4>Joiner (เข้าทำงานใหม่):</h4>

- พนักงานใหม่เริ่มงาน ต้องผ่านขั้นตอนการสร้างตัวตนดิจิทัล (Identity Creation) และการจัดสรรสิทธิ์เริ่มต้นตามตำแหน่งงาน (**Provisioning**)
- สิ่งสำคัญที่สุด: องค์กรต้อง **Define Roles and Responsibilities** ให้ชัดเจนก่อนที่จะทำการให้สิทธิ์ (Grant Access)

</section>

<section class="reading-concept-unit">
<h4>Mover (เปลี่ยนบทบาท / เลื่อนตำแหน่ง / ย้ายแผนก):</h4>

- พนักงานเปลี่ยนตำแหน่งหรือย้ายสายงาน ต้องได้รับการปรับปรุงสิทธิ์ให้ตรงกับหน้าที่ใหม่
- ความเสี่ยงสูงสุดของขั้นตอนนี้คือ **Privilege Accumulation** (หรือ **Privilege Creep**): การได้รับสิทธิ์ใหม่เพิ่มเข้ามาแต่สิทธิ์เดิมที่หมดความจำเป็นไม่ถูกเพิกถอน (Obsolete access remains)

<div class="reading-scenario-inline">
  <p><strong>สถานการณ์สมมติ (Finance-to-IT Transfer):</strong> นโยบายตัวอย่างให้ Helpdesk รีเซ็ตรหัสผ่านผู้ใช้ทั่วไปได้ แต่ไม่ให้ Domain Admin หรืออนุมัติจ่ายเงิน ERP เมื่อสมคิดย้ายจาก Finance มา Helpdesk สิทธิ์อนุมัติจ่ายเงินเดิมที่ยังค้างจึงเป็นสิทธิ์เกินความจำเป็น ให้คงสิทธิ์ส่วนกลางที่ยังมีเหตุผลรองรับ ถอนสิทธิ์ที่เลิกใช้หรือขัดนโยบาย และให้เฉพาะงานใหม่ที่อนุมัติแล้ว พร้อมตรวจผลจริง ลำดับการเปลี่ยนผ่านเป็นไปตามนโยบาย; การมีหลายสิทธิ์ร่วมกันไม่ได้พิสูจน์การละเมิด SoD โดยอัตโนมัติ</p>
  <p><strong>Illustrative policy:</strong> Helpdesk may reset ordinary users’ passwords, but not administer the domain or approve ERP payments. When Somkid moves from Finance to Helpdesk, retained ERP payment approval is obsolete excess access. Retain justified common access, revoke obsolete or conflicting permissions, grant only approved new tasks and verify effective access. Transition order follows policy; combined permissions alone do not prove a SoD violation.</p>
</div>

</section>

<section class="reading-concept-unit">
<h4>Leaver (พ้นสภาพการเป็นพนักงาน / สิ้นสุดสัญญาจ้าง):</h4>

- พนักงานลาออก ถูกเลิกจ้าง หรือสัญญาจ้างสิ้นสุดลง ต้องเข้าสู่กระบวนการเพิกถอนสิทธิ์อย่างรวดเร็วและสมบูรณ์ (**Deprovisioning**)
- ต้องระงับบัญชี (Disable Account), เพิกถอนสิทธิ์การเข้าถึงทั้งหมด และยึดอุปกรณ์คืน เพื่อป้องกันการเข้าถึงโดยไม่ได้รับอนุญาต

</section>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>กฎทองสำหรับห้องสอบ: จุดเริ่มต้นของ IAM</span>
  </div>
  <p>ก่อนที่องค์กรจะทำการ <strong>Grant Access</strong> ให้กับผู้ใช้รายใดก็ตาม หากยังไม่ทราบบทบาทและสิทธิ์ที่งานต้องใช้ ควร <strong>"Define Roles and Responsibilities"</strong> เพื่อกำหนดขอบเขตหน้าที่และความรับผิดชอบให้ชัดเจนเสียก่อน</p>
</div>
<h3 id="topic-3-1-roles-definition">3.1.2 Roles Definition &amp; Permission Alignment: การกำหนดบทบาทหน้าที่</h3>

เพื่อป้องกันความสับสนและการให้สิทธิ์อย่างไม่เป็นระบบ องค์กรจำเป็นต้องแยกแยะ 3 คำสำคัญออกจากกันให้ชัดเจน:

<section class="reading-concept-unit">
<h4>Role (บทบาท):</h4>

หน้าที่หรืองานที่ได้รับมอบหมายภายในองค์กร (เช่น HR Manager, Database Administrator, Security Analyst)

</section>

<section class="reading-concept-unit">
<h4>Permission (สิทธิ์ในการกระทำ):</h4>

สิทธิ์เฉพาะเจาะจงที่อนุญาตให้กระทำต่อวัตถุหรือระบบ เช่น Read (อ่าน), Write (เขียน), Modify (แก้ไข), Delete (ลบ), Execute (รันโปรแกรม)

</section>

<section class="reading-concept-unit">
<h4>Access (การเข้าถึง):</h4>

ความสามารถในการเข้าถึงระบบ แอปพลิเคชัน หรือข้อมูลนั้น ๆ

</section>

หลักการพื้นฐานคือ: <span class="reading-math-formula">Role → Job Function → Required Access</span> สิทธิ์ที่ได้รับจะต้องสะท้อนหน้าที่งานจริงเท่านั้น

| <div class="reading-bilingual-term"><span class="reading-term-en">**Role Name**</span><span class="reading-term-th">(ชื่อบทบาทหน้าที่)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Primary Job Function**</span><span class="reading-term-th">(หน้าที่งานหลัก)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Required Access &amp; Permissions**</span><span class="reading-term-th">(สิทธิ์การเข้าถึงที่จำเป็น)</span></div> |
| :--- | :--- | :--- |
| **HR Manager** | จัดการข้อมูลบุคลากรและเงินเดือน | สิทธิ์ Read/Write ระบบ HRIS, ข้อมูลประวัติพนักงาน, เอกสารสัญญาจ้าง |
| **Network Administrator** | ดูแลระบบเครือข่ายและเราเตอร์ | สิทธิ์ Configure อุปกรณ์ Network, Switches, Firewalls, VPN Gateways |
| **Database Administrator (DBA)** | จัดการฐานข้อมูลและโครงสร้างข้อมูล | สิทธิ์จัดการ Database Instances, Schema, Backup/Restore, User DB Privileges |
| **Security Analyst** | เฝ้าระวังภัยคุกคามและวิเคราะห์ล็อก | สิทธิ์ Read-only สำหรับ Security Logs, SIEM Dashboard, EDR Alerts |
| **Finance Employee** | บันทึกและตรวจสอบธุรกรรมการเงิน | สิทธิ์บันทึกใบเสร็จและใบแจ้งหนี้ในระบบ ERP โดยไม่มีสิทธิ์อนุมัติจ่ายเงินของตนเอง |
<h3 id="topic-3-1-provisioning">3.1.3 Identity Provisioning: ตัวอย่างกิจกรรม 6 ส่วนในการจัดสรรสิทธิ์</h3>

**Provisioning** คือกระบวนการเตรียม สร้าง และจัดสรรทรัพยากรตัวตนดิจิทัลและสิทธิ์การเข้าถึง เพื่อให้ผู้ใช้สามารถเริ่มต้นปฏิบัติงานได้:

สูตรจำสั้น: <span class="reading-math-formula">Provisioning = Create Identity + Grant Required Access</span>

กิจกรรม Provisioning ต่อไปนี้เป็นตัวอย่าง ไม่ใช่ลำดับมาตรฐานตายตัว ก่อนให้สิทธิ์ต้องทราบหน้าที่งาน ความจำเป็น และได้รับการอนุมัติตามนโยบาย:

<section class="reading-concept-unit">
<h4>Creating User Account:</h4>

การสร้างบัญชีผู้ใช้งานใหม่ขึ้นในระบบระบุตัวตนกลาง (เช่น Active Directory หรือ Cloud Identity)

</section>

<section class="reading-concept-unit">
<h4>Assigning Unique Identity:</h4>

การกำหนดรหัสประจำตัวเฉพาะที่ไม่ซ้ำกับใคร เพื่อใช้ในการระบุตัวตนและติดตามความรับผิดชอบ (Accountability)

</section>

<section class="reading-concept-unit">
<h4>Assigning Roles:</h4>

การผูกบัญชีกับบทบาทหน้าที่ (Roles) ตามข้อมูลตำแหน่งงานที่ตรวจสอบแล้ว โดยผู้มีอำนาจตามนโยบายอนุมัติสิทธิ์ของระบบหรือทรัพยากรนั้น ไม่ใช่ถือว่า HR อนุมัติสิทธิ์ทุกระบบเสมอ / Verified job information informs the role; the policy-designated authority approves resource access, rather than assuming HR approves every system.

</section>

<section class="reading-concept-unit">
<h4>Granting Permissions:</h4>

การกำหนดสิทธิ์การอ่าน เขียน หรือแก้ไข ให้สอดคล้องกับบทบาทที่ได้รับมอบหมาย

</section>

<section class="reading-concept-unit">
<h4>Providing Application Access:</h4>

การเปิดช่องทางให้เข้าถึงระบบงานและซอฟต์แวร์ที่ต้องใช้ (เช่น ERP, CRM, Email)

</section>

<section class="reading-concept-unit">
<h4>Issuing Authentication Credentials:</h4>

การออกข้อมูลประจำตัวสำหรับยืนยันตัวตน เช่น รหัสผ่านเริ่มต้น, บัตรสมาร์ตการ์ด (Smart Card / CAC / PIV), หรือการลงทะเบียนโทเค็น MFA และระบบสแกนไบโอเมตริกซ์

<figure class="reading-figure" style="max-width: 680px; margin: 18px auto;">
  <div class="reading-figure-img-wrap" style="aspect-ratio: 16/9; max-height: 320px;">
    <img src="assets/images/reading/piv-smart-card-features.jpg" alt="U.S. Personal Identity Verification (PIV) Smart Card showing integrated circuit microchip contact pad and physical security features" class="reading-figure-img" width="1017" height="1013" loading="lazy">
  </div>
  <figcaption class="reading-figcaption">
    <span class="reading-figure-badge badge-have">Something You Have · Cryptographic Smart Card</span>
    <strong>ฮาร์ดแวร์ยืนยันตัวตน Personal Identity Verification (PIV / CAC Smart Card):</strong> ตัวอย่างบัตรสมาร์ตการ์ดมาตรฐานความปลอดภัยระดับสูง แสดงแผ่นสัมผัสโลหะทองของไมโครโปรเซสเซอร์ (Integrated Circuit Chip) ที่จัดเก็บ Private Key และ Digital Certificate อย่างปลอดภัย โดยออกแบบให้ใช้กุญแจภายในขอบเขตป้องกันตามการตั้งค่า แต่ไม่ใช่หลักประกันว่าดึงกุญแจออกไม่ได้ในทุกสถานการณ์ / A hardware token is designed to protect configured keys; protection is implementation-dependent.
    <span class="reading-figure-attr">ภาพ: U.S. Government Accountability Office (GAO Report GAO-11-751) / Public Domain</span>
  </figcaption>
</figure>

<h3 id="topic-3-1-access-review">3.1.4 Access Review &amp; 6 Core Audit Findings: การทบทวนสิทธิ์เป็นระยะ</h3>

เมื่อระบบมีการใช้งานไปเป็นระยะเวลาหนึ่ง สิทธิ์การเข้าถึงมักจะเกิดความคลาดเคลื่อนจากความเป็นจริง ดังนั้นองค์กรจึงต้องมีการทำ **Periodic Access Review** (การทบทวนสิทธิ์เป็นระยะ) โดยให้ผู้จัดการสายงาน (Line Managers) และเจ้าของข้อมูล (Data Owners) ร่วมกันตรวจสอบว่าสิทธิ์ของผู้ใช้งานแต่ละคนยังคงถูกต้องและจำเป็นอยู่หรือไม่

จากการตรวจสอบความปลอดภัย (Security Audits) พบข้อบกพร่องสำคัญ 6 ประการที่ข้อสอบมักนำมาตั้งคำถาม:

<section class="reading-concept-unit">
<h4>Excessive Permissions (สิทธิ์เกินความจำเป็น):</h4>

ผู้ใช้ได้รับสิทธิ์มากกว่าที่จำเป็นต้องใช้ในการทำงานตามหน้าที่

</section>

<section class="reading-concept-unit">
<h4>Unused Accounts (บัญชีที่ไม่ได้ใช้งาน):</h4>

บัญชีที่ไม่มีการล็อกอินเป็นเวลานานแต่ยังเปิดทิ้งไว้ เช่น เกิน 90 วันภายใต้นโยบายสมมติ; เกณฑ์จริงกำหนดตามบริบทและนโยบายองค์กร / For example, over 90 days under an illustrative policy; the actual inactivity threshold is organization-defined.

</section>

<section class="reading-concept-unit">
<h4>Inappropriate Access (สิทธิ์ไม่เหมาะสมกับงาน):</h4>

ผู้ใช้มีสิทธิ์เข้าถึงระบบที่ไม่เกี่ยวข้องกับสายงานของตนเอง

</section>

<section class="reading-concept-unit">
<h4>Role Changes (การเปลี่ยนบทบาทแต่สิทธิ์ค้าง):</h4>

พนักงานย้ายตำแหน่งแล้ว แต่สิทธิ์งานเดิมที่หมดความจำเป็นยังค้างอยู่ (Obsolete access after a role change)

</section>

<section class="reading-concept-unit">
<h4>Privilege Accumulation / Privilege Creep (การสะสมสิทธิ์):</h4>

การที่สิทธิ์เกินความจำเป็นสะสมจากการย้ายแผนกหลายครั้ง โดยไม่ถอนส่วนที่เลิกใช้ (Accumulation of unnecessary access)

</section>

<section class="reading-concept-unit">
<h4>Orphaned Accounts (บัญชีไร้เจ้าของ):</h4>

ตัวอย่างคือบัญชีของผู้ลาออกหรือสิ้นสุดสัญญาที่ยังไม่ถูกระงับ นอกจากนี้ต้องตรวจสอบบัญชีที่หาผู้รับผิดชอบที่มีอำนาจไม่ได้ แม้จะมีการใช้งานล่าสุด; Activity ไม่ได้ยืนยัน Ownership / A departed user’s active account is one example. Also investigate accounts without an identifiable accountable owner, even if recently used; activity alone does not establish ownership.

</section>

<div class="reading-callout warning">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>กรณีศึกษาคลาสสิก: Finance ย้ายไป IT</span>
  </div>
  <p>สมมติว่านโยบายไม่ให้เข้าดูรายงาน Finance หลังย้ายไปงาน IT นี้ ผ่านไป 6 เดือนพนักงานยังเปิดรายงานเดิมได้ จึงพบสิทธิ์เกินความจำเป็น การทบทวนต้องตามด้วยคำตัดสินจากผู้มีอำนาจ การถอนสิทธิ์ที่อนุมัติให้ถอน และการตรวจว่าอ่านรายงาน Finance ไม่ได้แล้ว ขณะที่งาน IT ที่ยังอนุมัติไว้ทำได้</p>
  <p><strong>Review → apply → verify:</strong> Under the example policy, Finance-report access is no longer needed after this IT transfer. Six months later it still works. Obtain the authorized review decision, apply the approved removal and verify that Finance-report reading is denied while approved IT work remains available.</p>
</div>

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การสะสมสิทธิ์ข้ามสายงาน (Privilege Creep) และการแก้ไขด้วย Periodic Access Review</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> "กานต์" เริ่มต้นทำงานเป็นเจ้าหน้าที่ฝ่ายการเงิน (Finance Officer) มีสิทธิ์เข้าถึงระบบ SAP บัญชีเจ้าหนี้และการอนุมัติใบจ่ายเงิน 3 ปีต่อมา กานต์สอบย้ายตำแหน่งภายในสำเร็จเป็นเจ้าหน้าที่ฝ่ายตรวจสอบภายใน (Internal Auditor) เพื่อช่วยตรวจทานการดำเนินงานขององค์กร</div>
  <div class="reading-example-step"><strong>2. เหตุการณ์เกิดการสะสมสิทธิ์ (Privilege Accumulation):</strong>
    <ul>
      <li>ฝ่าย IT ดำเนินการ Provisioning สิทธิ์ใหม่สำหรับตำแหน่ง Internal Auditor ให้แก่กานต์ ได้แก่ สิทธิ์อ่านล็อกระบบและเข้าถึงรายงานตรวจสอบทุกแผนก</li>
      <li>อย่างไรก็ตาม ผู้จัดการฝ่ายการเงินคนเดิมไม่ได้แจ้งคำขอ Deprovisioning สิทธิ์เก่าออก และฝ่าย IT ก็ไม่ได้ตรวจสอบสิทธิ์เดิมที่มีอยู่</li>
      <li><strong>ผลลัพธ์:</strong> กานต์มีทั้งสิทธิ์ในการอนุมัติจ่ายเงินของฝ่ายการเงินเดิม และสิทธิ์ในการตรวจสอบระบบของฝ่ายตรวจสอบภายในไปพร้อมกัน ซึ่งถือเป็นการขัดต่อหลักการแบ่งแยกหน้าที่ (Segregation of Duties: SoD) อย่างร้ายแรง</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. การตรวจพบในรอบ Periodic Access Review (Audit Finding):</strong>
    <ul>
      <li>เมื่อถึงรอบการทบทวนสิทธิ์ประจำไตรมาส (Quarterly Access Review) เจ้าของระบบและผู้จัดการฝ่ายตรวจสอบได้เปรียบเทียบสิทธิ์จริงที่กานต์ถือครองเทียบกับ Job Function ปัจจุบัน</li>
      <li>ระบบ Identity Governance แจ้งเตือนข้อขัดแย้งด้าน SoD และระบุว่าบัญชีของกานต์มี "สิทธิ์เกินความจำเป็น" (Excessive Permissions) จากบทบาทงานเดิมที่เลิกใช้แล้ว (Obsolete Permissions)</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. การแก้ไขและการบังคับใช้นโยบาย (Remediation & Least Privilege):</strong>
    <ul>
      <li>ฝ่ายความปลอดภัยเพิกถอนสิทธิ์การอนุมัติจ่ายเงินในระบบบัญชีทั้งหมดทันที</li>
      <li>กำหนดให้การเปลี่ยนบทบาทตรวจสิทธิ์ที่ยังจำเป็น ถอนสิทธิ์ที่เลิกใช้หรือขัดนโยบาย และตรวจผลสิทธิ์ใหม่ตามลำดับที่องค์กรอนุมัติ / Review current need, remove obsolete/conflicting rights and verify the approved transition. เพื่อป้องกันปัญหา Privilege Creep ในอนาคต</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): ในขั้นตอน Mover ของวงจรชีวิต JML ความเสี่ยงสูงสุดคือการสะสมสิทธิ์เดิมที่ล้าสมัย (Privilege Creep) การทบทวนสิทธิ์เป็นระยะ (Periodic Access Review) ร่วมกับการบังคับใช้หลัก Least Privilege จะช่วยตรวจจับและตัดสิทธิ์ที่เกินจำเป็นออกก่อนที่จะนำไปสู่การทุจริตหรือช่องโหว่ความปลอดภัย</div>
</div>
<h3 id="topic-3-1-deprovisioning">3.1.5 Deprovisioning: Triggers &amp; Revocation Practices</h3>

**Deprovisioning** คือกระบวนการเพิกถอนสิทธิ์และระงับการเข้าถึงระบบเมื่อหมดความจำเป็นในการใช้งาน:

สูตรจำสั้น: <span class="reading-math-formula">Deprovisioning = Remove / Disable Access</span>

<h4 class="reading-concept-group-title">เหตุการณ์ที่กระตุ้นให้เกิด Deprovisioning (Triggers) มี 4 ประการ:</h4>
<section class="reading-concept-unit">
<h5>Termination:</h5>

พนักงานถูกบอกเลิกจ้างหรือให้ออก (ต้องดำเนินการระงับสิทธิ์ทันทีเพื่อป้องกัน Insider Threat)

</section>

<section class="reading-concept-unit">
<h5>Resignation:</h5>

พนักงานลาออกตามความสมัครใจ

</section>

<section class="reading-concept-unit">
<h5>Role Change:</h5>

พนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย (ถอนสิทธิ์ที่หมดความจำเป็นและปรับให้ตรงหน้าที่ใหม่ตามนโยบาย / Revoke obsolete access and align rights with the new duties under policy)

</section>

<section class="reading-concept-unit">
<h5>Contract Expiration:</h5>

สัญญาจ้างของ Vendor หรือพนักงานสัญญาจ้างสิ้นสุดลง

</section>

<h4 class="reading-concept-group-title">กิจกรรมหลักในการ Deprovisioning:</h4>
<section class="reading-concept-unit">
<h5>Disable Account:</h5>

ปิดการใช้งานบัญชีโดยผู้ดูแล แตกต่างจาก Account Lockout ที่มักเกิดจากการลงชื่อเข้าใช้ผิดซ้ำ

</section>

<section class="reading-concept-unit">
<h5>Revoke Application Access:</h5>

ถอดสิทธิ์การเข้าถึงแอปพลิเคชันและบริการคลาวด์ทั้งหมด

</section>

<section class="reading-concept-unit">
<h5>Remove Group Memberships:</h5>

นำชื่อบัญชีออกจากกลุ่มสิทธิ์ต่าง ๆ

</section>

<section class="reading-concept-unit">
<h5>Revoke Privileged Access:</h5>

ยกเลิกสิทธิ์ระดับผู้ดูแลระบบและคืนโทเค็นเข้าถึงทั้งหมด

</section>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อควรระวัง: Deprovisioning ไม่จำเป็นต้องลบบัญชีทิ้งทันที</span>
  </div>
  <p>ในทางปฏิบัติด้านความมั่นคงปลอดภัย การ Deprovisioning มักจะใช้วิธีการ <strong>"Disable Account"</strong> (ปิดการใช้งาน) แทนการ <strong>"Delete Account"</strong> (ลบทิ้งถาวร) ทันที เพื่อพิจารณานโยบายการเก็บรักษาบัญชี หลักฐานตรวจสอบ (Audit Trail / Logs) และความสัมพันธ์ของระบบ เช่น ความเป็นเจ้าของไฟล์ การเก็บหรือลบต้องทำตามข้อกำหนดที่เกี่ยวข้อง; การ Disable ไม่ได้ยืนยันว่าทุก Log ถูกเก็บไว้ และการ Delete ไม่ได้ทำให้ Log ทุกระบบสูญหายเสมอไป</p>
</div>

<div class="reading-callout info">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อกำหนดสำคัญ: Leaver Access Revocation vs. Audit Log Retention (ENR-D3-04)</span>
  </div>
  <p><strong>การตัดสิทธิ์การเข้าถึงทันที (Immediate Access Revocation):</strong> เมื่อพนักงานพ้นสภาพหรือสิ้นสุดสัญญาจ้าง (Leaver Event) บัญชีผู้ใช้, สิทธิ์การเข้าถึงระบบ, กุญแจดิจิทัล, และ Session tokens ทั้งหมดต้องถูกระงับหรือเพิกถอน <em>โดยทันที (Immediately)</em> เพื่อกำจัดความเสี่ยงจากการเข้าถึงโดยไม่ได้รับอนุญาตและภัยคุกคามจากคนใน (Insider Threat)</p>
  <p><strong>การเก็บรักษาบันทึกหลักฐานตรวจสอบ (Audit Log &amp; History Retention):</strong> บันทึกประวัติการเข้าถึง (Access Logs), บันทึกการทำธุรกรรม (Transaction Logs), และร่องรอยการตรวจสอบ (Audit Trail) ในอดีตของพนักงานผู้นั้น <em>ต้องไม่ถูกลบทำลายโดยเด็ดขาด</em> แต่องค์กรต้องจัดเก็บรักษาไว้ตามนโยบาย Retention Policy และข้อกำหนดทางกฎหมาย/การกำกับดูแล เพื่อความพร้อมในการสืบสวนทางนิติวิทยาศาสตร์ (Forensic Readiness) และการตรวจสอบความสอดคล้อง (Compliance Auditing)</p>
</div>
<p><strong>ตัวอย่างสมมติ: Session ในแอปยังใช้ได้ (Surviving app session):</strong> สัญญาจ้างสิ้นสุดและผู้ดูแลมีอำนาจถอนสิทธิ์แล้ว บัญชีกลางถูกระงับ แต่ในตัวอย่างนี้ Session เดิมของแอปยังเปิดข้อมูลได้ ให้ใช้กระบวนการถอนสิทธิ์หรือ Session ที่แอปรองรับ แล้วตรวจด้วย Session เดิมว่าถูกปฏิเสธการเข้าถึง พร้อมเก็บหลักฐานตามนโยบาย พฤติกรรมนี้ไม่ได้เกิดเหมือนกันทุกแอป</p>
<p><strong>Illustrative session check:</strong> The contract has ended and the administrator is authorized to withdraw access. The central account is disabled, but this application’s existing session still reads data. Use the application’s supported access/session revocation process, verify denial with that existing session, and retain required evidence. Application behavior varies.</p>

<h3 id="topic-3-1-iam-frameworks">3.1.6 IAM Management Frameworks: NIST SP 800-63 vs CSF</h3>

ในการบริหารจัดการระบบอัตลักษณ์ดิจิทัล องค์กรระดับสากลนิยมอ้างอิงกรอบมาตรฐานของ NIST โดยต้องแยกความแตกต่างระหว่างสองกรอบงานสำคัญ:

<section class="reading-concept-unit">
<h4>NIST SP 800-63 (Digital Identity Guidelines):</h4>

กรอบแนวทางเฉพาะทางสำหรับการบริหารจัดการอัตลักษณ์ดิจิทัล ซึ่งแบ่งออกเป็น 3 เสาหลัก/ฟังก์ชันที่ทำงานเกี่ยวข้องกัน:

- **Identity Proofing (SP 800-63A):** กระบวนการพิสูจน์และตรวจสอบความมีอยู่จริงและความถูกต้องของตัวบุคคลในโลกจริง ก่อนการออกข้อมูลประจำตัวดิจิทัล (Enrollment &amp; Identity Assurance Level: IAL)
- **Authentication (SP 800-63B):** กระบวนการตรวจสอบและยืนยันว่าผู้ที่กำลังเข้าใช้งานระบบคือผู้ครอบครองข้อมูลประจำตัว (Authenticator) ที่ถูกต้องจริง (Authenticator Assurance Level: AAL)
- **Federation (SP 800-63C):** กระบวนการส่งต่อข้อมูลอัตลักษณ์และการยืนยันตัวตนข้ามขอบเขตความไว้วางใจระหว่างองค์กรหรือระบบต่าง ๆ เช่น Single Sign-On (Federation Assurance Level: FAL)

</section>

<section class="reading-concept-unit">
<h4>NIST Cybersecurity Framework (CSF):</h4>

กรอบการบริหารความเสี่ยงทางไซเบอร์ในภาพรวมขององค์กร (Identify, Protect, Detect, Respond, Recover และ Govern ใน CSF 2.0) โดยมีหมวด Identity Management, Authentication, and Access Control (PR.AA) เป็นส่วนหนึ่งภายใต้ฟังก์ชัน Protect

</section>

<div class="reading-semantic-diagram" data-diagram="nistSp80063Framework"></div>
<h3 id="topic-3-1-iam-tools">3.1.7 IAM Technology Stack: Directory Services, IdPs &amp; Access Platforms</h3>

สถาปัตยกรรมเทคโนโลยีที่ใช้สนับสนุนงาน IAM ประกอบด้วย 3 องค์ประกอบหลักที่ทำงานร่วมกัน:

<section class="reading-concept-unit">
<h4>Directory Services (บริการไดเรกทอรี):</h4>

- ฐานข้อมูลกลางที่จัดเก็บโครงสร้างผู้ใช้งาน บัญชี กลุ่ม และสิทธิ์ภายในองค์กร
- ตัวอย่างบริการไดเรกทอรี: Microsoft Active Directory Domain Services หรือไดเรกทอรีที่ให้บริการ LDAP โดย LDAP (Lightweight Directory Access Protocol) เป็นโพรโทคอลสำหรับเข้าถึงบริการไดเรกทอรี ไม่ใช่ชื่อผลิตภัณฑ์เดียวกับ AD

</section>

<section class="reading-concept-unit">
<h4>Identity Providers - IdPs (ผู้ให้บริการยืนยันตัวตน):</h4>

- ระบบศูนย์กลางที่ทำหน้าที่ให้บริการสร้าง จัดการ และตรวจสอบข้อมูลประจำตัวดิจิทัลสำหรับการยืนยันตัวตน
- ตัวอย่าง: Okta, Azure Active Directory / Microsoft Entra ID, Ping Identity

</section>

<section class="reading-concept-unit">
<h4>Access Management Platforms (แพลตฟอร์มบริหารจัดการการเข้าถึง):</h4>

- ระบบที่ทำหน้าที่บังคับใช้นโยบายการควบคุมสิทธิ์ จัดการ Single Sign-On (SSO) และ Multi-Factor Authentication (MFA)

</section>

<section class="reading-concept-unit">
<h4>Modern Identity Federation &amp; SSO Protocols (โพรโทคอลการเชื่อมโยงระบบตัวตนดิจิทัล):</h4>

ในการเชื่อมต่อระบบ Identity ข้ามองค์กร (Federation) หรือการทำ Single Sign-On (SSO) บนเว็บคลาวด์ยุคใหม่ อาศัย 3 โพรโทคอลมาตรฐานที่ออกสอบบ่อย:

| โพรโทคอล (Protocol) | หน้าที่หลัก (Primary Purpose) | รูปแบบข้อมูล (Data Format) | คำตอบข้อสอบ (Exam Takeaway) |
|---|---|---|---|
| **SAML 2.0**<br>(Security Assertion Markup Language) | **Authentication &amp; Authorization** ในระดับองค์กร | XML (SAML Assertion) | ใช้ทำ Enterprise Web SSO ข้ามโดเมนระหว่าง IdP และ SP (เช่น เข้าแอปองค์กรด้วยบัญชีบริษัท) |
| **OAuth 2.0**<br>(Open Authorization) | **Authorization (การอนุญาตสิทธิ์)** เท่านั้น | JSON / Access Token | ให้สิทธิ์แอปเข้าถึง API แทนผู้ใช้ โดยไม่ต้องบอกรหัสผ่าน (Delegated Access เช่น อนุญาตให้แอปอ่าน Google Calendar) |
| **OpenID Connect (OIDC)** | **Authentication (การพิสูจน์ตัวตน)** บนเว็บและมือถือ | JSON Web Token (JWT / id_token) | เลเยอร์ยืนยันตัวตนที่สร้างครอบบน OAuth 2.0 (Identity Layer over OAuth 2.0 เช่น ล็อกอินเว็บด้วยปุ่ม "Sign in with Google") |

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>สูตรจำแยก 3 โพรโทคอลสำหรับข้อสอบ</span>
  </div>
  <p><strong>SAML 2.0</strong> = XML + Enterprise SSO (องค์กรใหญ่กับแอปคลาวด์)</p>
  <p><strong>OAuth 2.0</strong> = Authorization / Delegated API Access (ให้สิทธิ์แอป ไม่ใช่พิสูจน์ตัวตน)</p>
  <p><strong>OpenID Connect (OIDC)</strong> = Authentication on top of OAuth 2.0 (ยืนยันตัวตนด้วย JSON Web Token)</p>
</div>

</section>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ข้อสอบถามบ่อย: Authentication vs. Authorization</span>
  </div>
  <p><strong>Authentication (AuthN):</strong> ตอบคำถามว่า <em>"พิสูจน์ว่าคุณเป็นบุคคลที่กล่าวอ้าง"</em> (Prove the claimed identity) — ตรวจสอบยืนยันตัวตน</p>
  <p><strong>Authorization (AuthZ):</strong> ตอบคำถามว่า <em>"คุณได้รับอนุญาตให้ทำอะไรได้บ้าง?"</em> (What are you allowed to do?) — ตรวจสอบและให้สิทธิ์</p>
</div>
<h3 id="topic-3-1-least-privilege">3.1.8 Principle of Least Privilege (PoLP): หลักสิทธิ์ขั้นต่ำที่จำเป็น</h3>

**Principle of Least Privilege (PoLP)** คือหลักการพื้นฐานที่สำคัญที่สุดประการหนึ่งในการรักษาความมั่นคงปลอดภัยทางไซเบอร์:

> **นิยาม:** ผู้ใช้ บัญชีบริการ หรือโปรแกรม ต้องได้รับสิทธิ์ในการเข้าถึงและกระทำต่อทรัพยากรเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่อการปฏิบัติหน้าที่ตามที่ได้รับมอบหมายเท่านั้น (Minimum Necessary Access)

<h4 class="reading-concept-group-title">แนวทางการนำไปปฏิบัติ (Implementation Steps):</h4>
<section class="reading-concept-unit">
<h5>Role-based permissions:</h5>

กำหนดสิทธิ์ให้ตรงตามบทบาทงานจริง ไม่ให้สิทธิ์แบบเหมารวม

</section>

<section class="reading-concept-unit">
<h5>Regular reviews:</h5>

ตรวจสอบทบทวนสิทธิ์การเข้าถึงอย่างสม่ำเสมอ

</section>

<section class="reading-concept-unit">
<h5>Strict enforcement:</h5>

บังคับใช้นโยบายอย่างเคร่งครัดและไม่อนุญาตให้ใช้บัญชีระดับผู้ดูแลระบบในการทำงานประจำวัน

</section>

<h4 class="reading-concept-group-title">ประโยชน์สำคัญ 4 ประการของ Least Privilege:</h4>
<section class="reading-concept-unit">
<h5>Mitigates Compromised Accounts:</h5>

ลดผลกระทบและความเสียหายเมื่อบัญชีผู้ใช้ถูกแฮกหรือถูกขโมยข้อมูลประจำตัว

</section>

<section class="reading-concept-unit">
<h5>Limits Insider Threat Blast Radius:</h5>

จำกัดขอบเขตความเสียหายที่เกิดจากภัยคุกคามภายในองค์กร

</section>

<section class="reading-concept-unit">
<h5>Aids Audit and Compliance:</h5>

สนับสนุนการตรวจสอบและทำให้เป็นไปตามข้อกำหนดของมาตรฐานสากล

</section>

<section class="reading-concept-unit">
<h5>Promotes System Stability:</h5>

ป้องกันการแก้ไขหรือลบการตั้งค่าระบบโดยไม่ตั้งใจ ช่วยให้ระบบมีเสถียรภาพ

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="obj-3-2">

## Objective 3.2: Understand Logical Access Controls

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การควบคุมการเข้าถึงเชิงตรรกะคือกลไกทางซอฟต์แวร์และนโยบายที่กำกับดูแลการเข้าถึงทรัพยากรดิจิทัล:</p>
<h3 id="topic-3-2-logical-controls">3.2.1 Logical vs. Physical Access Controls: สถาปัตยกรรมการควบคุม</h3>

การควบคุมการเข้าถึงในระบบความมั่นคงปลอดภัยแบ่งออกเป็น 2 ประเภทใหญ่:

<section class="reading-concept-unit">
<h4>Logical Access Controls (การควบคุมการเข้าถึงเชิงตรรกะ):</h4>

คือกลไกทางเทคโนโลยี ฮาร์ดแวร์ ซอฟต์แวร์ และนโยบายที่ใช้เพื่อจำกัดและควบคุมการเข้าถึงทรัพยากรในรูปแบบดิจิทัล เช่น ระบบคอมพิวเตอร์ เครือข่าย ข้อมูล ฐานข้อมูล และแอปพลิเคชัน (ครอบคลุมรหัสผ่าน, รายการควบคุมการเข้าถึง ACL, การเข้ารหัสข้อมูล, ไฟร์วอลล์)

</section>

<section class="reading-concept-unit">
<h4>Physical Access Controls (การควบคุมการเข้าถึงทางกายภาพ):</h4>

คืออุปสรรคและมาตรการที่ใช้ป้องกันการเข้าถึงสถานที่ อาคาร ห้องเซิร์ฟเวอร์ หรืออุปกรณ์ฮาร์ดแวร์โดยตรง (เช่น รั้ว ประตูล็อก การ์ดรักษาความปลอดภัย กล้องวงจรปิด)

</section>
<h4>Biometric matching in access control — ความคลาดเคลื่อนในการตรวจชีวมิติ</h4>
<p>การตรวจชีวมิติใช้ได้กับการเข้าถึงทั้งดิจิทัลและกายภาพ ต้องแยกการยอมรับผิดคน (FAR) จากการปฏิเสธผู้ใช้จริง (FRR) และทดสอบเกณฑ์ให้เหมาะกับความเสี่ยง / Biometric matching may support logical or physical access; distinguish false acceptance from false rejection and test the threshold for the use case.</p>
<div class="reading-semantic-diagram" data-diagram="biometricSensitivityCurve"></div>

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การปรับตั้งค่าไบโอเมตริกซ์ — ห้องมั่นคงคลังอาวุธ (High Security) เทียบกับ ประตูตรวจบัตรสนามบิน (High Throughput)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> องค์กรด้านความมั่นคงกำลังติดตั้งระบบสแกนม่านตา (Iris Scanner) ใน 2 พื้นที่ที่มีเป้าหมายต่างกันอย่างสิ้นเชิง: (1) ประตูทางเข้าห้องนิรภัยเก็บข้อมูลลับทางทหาร และ (2) ประตูทางผ่านอัตโนมัติ (Automated Border Gate) ที่สนามบินนานาชาติ</div>
  <div class="reading-example-step"><strong>2. การตั้งค่าพื้นที่ความมั่นคงสูง (Vault / Military: เน้น Low FAR):</strong>
    <ul>
      <li><strong>เป้าหมาย:</strong> ป้องกันไม่ให้ผู้ไม่มีสิทธิ์ผ่านเข้าไปได้โดยเด็ดขาด แม้จะยอมให้เจ้าหน้าที่ตัวจริงถูกปฏิเสธบ้างก็ตาม</li>
      <li><strong>การตั้งค่า:</strong> ปรับเพิ่มระดับความไว (High Sensitivity / Stringent Threshold) ส่งผลให้ <strong>False Acceptance Rate (FAR)</strong> ลดลงตามเกณฑ์ที่ทดสอบ แต่ไม่รับประกันว่าจะไม่ยอมรับผิดคน (Lower measured FAR, not zero-risk authentication)</li>
      <li><strong>ผลข้างเคียง:</strong> <strong>False Rejection Rate (FRR)</strong> สูงขึ้น เจ้าหน้าที่ตัวจริงอาจต้องสแกนม่านตาซ้ำ 2-3 ครั้งกว่าระบบจะยอมรับ แต่ในบริบทนี้ถือเป็นเรื่องยอมรับได้เพื่อแลกกับความปลอดภัยสูงสุด</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. การตั้งค่าพื้นที่ที่มีผู้คนหนาแน่น (Airport Turnstile: เน้น Low FRR & Throughput):</strong>
    <ul>
      <li><strong>เป้าหมาย:</strong> ระบายผู้โดยสารหลายหมื่นคนต่อชั่วโมง ไม่ให้เกิดคิวสะสมหรือการติดขัดที่หน้าประตู</li>
      <li><strong>การตั้งค่า:</strong> ปรับลดระดับความไวลงเล็กน้อยเพื่อให้ผู้โดยสารที่ถูกต้องเดินผ่านได้รวดเร็ว ช่วยให้ <strong>False Rejection Rate (FRR)</strong> ต่ำสุด โดยมีเจ้าหน้าที่รักษาความปลอดภัยตรวจซ้ำเป็นด่านที่สอง</li>
      <li><strong>จุดสมดุล (CER):</strong> ในการเลือกซื้ออุปกรณ์ ผู้จัดซื้อเปรียบเทียบ <strong>Crossover Error Rate (CER / EER)</strong> ภายใต้ชุดข้อมูลและเงื่อนไขทดสอบที่เทียบกันได้ ค่าต่ำอาจช่วยเปรียบเทียบระบบ แต่จุดที่ FAR เท่ากับ FRR ไม่จำเป็นต้องเป็นเกณฑ์ใช้งานที่เหมาะกับทุกพื้นที่ / Compare EER under comparable tests; the equal-error point is not every site’s operating threshold.</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): FAR (Type II Error) คือการยอมรับคนร้าย ส่วน FRR (Type I Error) คือการปฏิเสธคนดี การปรับระดับความไวของระบบไบโอเมตริกซ์ต้องสอดคล้องกับวัตถุประสงค์การใช้งาน: ระบบความมั่นคงสูงต้องการ FAR ต่ำสุด ขณะที่ระบบสาธารณะเน้น FRR ต่ำเพื่อความสะดวก และอุปกรณ์ที่ดีที่สุดคืออุปกรณ์ที่มีค่า CER ต่ำที่สุด</div>
</div>

</section>
<p><strong>ตัวอย่างสมมติ: สิทธิ์ที่อนุมัติเทียบกับผลจริง (Approved vs observed):</strong> ผู้มีอำนาจตามนโยบายอนุมัติให้นักวิเคราะห์อ่านรายงานรายเดือนเท่านั้น ไม่ให้แก้ Payroll หรือดูแล Network แต่ผลตรวจพบว่าแก้ Payroll ได้ ต้องแก้สิทธิ์ที่เกินและตรวจซ้ำว่าอ่านรายงานได้ ส่วนแก้ Payroll และดูแล Network ต้องถูกปฏิเสธ</p>
<p><strong>Illustrative check:</strong> The policy-designated approver authorizes only monthly-report reading, not payroll changes or network administration. Testing shows payroll changes also succeed. Correct the excess grant, then verify that report reading succeeds while payroll changes and network administration are denied.</p>

<h3 id="topic-3-2-sod">3.2.2 Segregation of Duties (SoD): การแบ่งแยกหน้าที่ความรับผิดชอบ</h3>

**Segregation of Duties (SoD)** หรือ **Separation of Duties** คือหลักการควบคุมภายในที่กำหนดให้กระบวนการทำงานที่มีความสำคัญอย่างยิ่งยวด (Critical Tasks) จะต้องถูกแบ่งขั้นตอนออกเป็นส่วน ๆ และกระจายให้ผู้ปฏิบัติงานมากกว่าหนึ่งคนทำร่วมกัน:

> **กฎทองของ SoD:** หนึ่งกระบวนการสำคัญ ต้องใช้คนมากกว่าหนึ่งคนรับผิดชอบ (<span class="reading-math-formula">Critical Process → Multiple People</span>) และผู้สร้างรายการต้องไม่สามารถอนุมัติรายการของตนเองได้

<h4 class="reading-concept-group-title">วัตถุประสงค์หลักของ SoD:</h4>
- ป้องกันการทุจริตและการยักยอกเงิน (Prevent Fraud)
- ป้องกันข้อผิดพลาดจากการปฏิบัติงาน (Prevent Errors)
- ป้องกันการกระทำโดยไม่ได้รับอนุญาต (Prevent Unauthorized Actions)
- ลดความเสี่ยงจากภัยคุกคามภายใน (Mitigate Insider Threats)

<h4 class="reading-concept-group-title">ตัวอย่างกระบวนการ 3 ขั้นตอนทางการเงิน (3-Stage Workflow):</h4>
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

<div class="reading-callout info">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>ความสัมพันธ์แบบไตรภาคี: Least Privilege vs. Need to Know vs. Separation of Duties</span>
  </div>
  <p><strong>Least Privilege (สิทธิ์ต่ำสุด):</strong> จำกัดระดับสิทธิ์หรือสิทธิพิเศษ (Privileges/Permissions) เท่าที่จำเป็นต่อการปฏิบัติงาน (เช่น ให้สิทธิ์ Read-Only แทนที่จะเป็น Admin)</p>
  <p><strong>Need to Know (จำเป็นต้องทราบ):</strong> จำกัดการเข้าถึง <em>เนื้อหาข้อมูลเฉพาะส่วน (Specific Data Content)</em> แม้ผู้ใช้จะมีระดับ Clearance สูงก็ตาม หากงานชิ้นนั้นไม่จำเป็นต้องรู้ข้อมูลลับชุดนี้ ก็จะไม่มีสิทธิ์เปิดอ่าน</p>
  <p><strong>Separation of Duties (การแบ่งแยกหน้าที่):</strong> แบ่งขั้นตอนกระบวนการสำคัญให้ต้องใช้ <em>บุคคลมากกว่าหนึ่งคน</em> ในการดำเนินการจนเสร็จสิ้น เพื่อป้องกันการทุจริต</p>
</div>
<h3 id="topic-3-2-dac">3.2.4 Discretionary Access Control (DAC): การควบคุมตามดุลยพินิจของเจ้าของ</h3>

**DAC (Discretionary Access Control)** เป็นโมเดลการควบคุมการเข้าถึงที่กระจายอำนาจการตัดสินใจให้แก่ **"เจ้าของทรัพยากร" (Resource Owner)**:

<section class="reading-concept-unit">
<h4>ผู้มีอำนาจตัดสินใจ:</h4>

เจ้าของไฟล์หรือผู้สร้างทรัพยากร (Resource Owner)

</section>

<section class="reading-concept-unit">
<h4>กลไกการทำงาน:</h4>

เจ้าของสามารถกำหนดและเปลี่ยนแปลงสิทธิ์ (Permissions เช่น Read, Write, Execute, Deny) ให้กับผู้ใช้อื่นได้ตามความพึงพอใจของตนเอง โดยมักใช้รายการควบคุมการเข้าถึง (**Access Control Lists: ACLs**) กำกับไว้ที่ตัวไฟล์

</section>

<section class="reading-concept-unit">
<h4>ข้อดี:</h4>

ยืดหยุ่นสูง (Flexible), ใช้งานง่าย, ไม่ต้องพึ่งพาผู้ดูแลระบบส่วนกลางในทุกขั้นตอน

</section>

<section class="reading-concept-unit">
<h4>ข้อเสีย:</h4>

มีความเสี่ยงด้านความปลอดภัยสูง เจ้าของอาจเผลอเปิดสิทธิ์ที่หละหลวม และไม่สามารถป้องกันโปรแกรมประสงค์ร้าย (Trojan horse) ที่แอบอ้างสิทธิ์ของผู้ใช้ไปแก้ไขไฟล์ได้

</section>

<section class="reading-concept-unit">
<h4>ตัวอย่าง:</h4>

สิทธิ์การแชร์ไฟล์ใน Windows (NTFS Permissions), สิทธิ์ไฟล์ในระบบปฏิบัติการ Linux/Unix

</section>
<h3 id="topic-3-2-mac">3.2.5 Mandatory Access Control (MAC): การควบคุมแบบบังคับตามป้ายกำกับ</h3>

**MAC (Mandatory Access Control)** เป็นโมเดลการควบคุมการเข้าถึงที่บังคับใช้นโยบายส่วนกลาง โดยควบคุมจาก **"นโยบายของระบบส่วนกลาง" (Central Authority &amp; System Policy)**:

<section class="reading-concept-unit">
<h4>ผู้มีอำนาจตัดสินใจ:</h4>

นโยบายความมั่นคงปลอดภัยส่วนกลางของระบบ (Central Authority) ผู้ใช้หรือเจ้าของไฟล์ไม่มีสิทธิ์เปลี่ยนแปลงการตั้งค่าได้เอง

</section>

<section class="reading-concept-unit">
<h4>กลไกการทำงาน:</h4>

บังคับใช้ผ่านการเปรียบเทียบระหว่าง:

<section class="reading-concept-unit">
<h5>Security Classification / Label (ป้ายกำกับระดับความลับ):</h5>

ติดอยู่กับทรัพยากร/วัตถุ (Object) เช่น Unclassified, Confidential, Secret, Top Secret

</section>

<section class="reading-concept-unit">
<h5>Security Clearance (ระดับความไว้วางใจ):</h5>

มอบให้แก่ตัวผู้ใช้งาน (Subject) ผ่านการตรวจสอบประวัติอย่างละเอียด

</section>

> **ข้อสังเกตสำคัญสำหรับข้อสอบ (Exam Core Distinction):** การมีระดับความไว้วางใจเพียงอย่างเดียว (**Security Clearance alone**) ไม่ได้ให้อำนาจเข้าถึงข้อมูลลับโดยอัตโนมัติ ผู้ใช้ต้องมี **"ความจำเป็นในการรับรู้" (Need-to-Know)** ที่ถูกต้องชอบธรรมและผ่านเกณฑ์นโยบายการควบคุมการเข้าถึงด้วยเสมอ (Security clearance alone does not automatically authorize access; the user must also have a legitimate Need-to-Know and satisfy applicable access-control policy) ซึ่งเป็นการนำหลัก Least Privilege มาบังคับใช้ร่วมกับ MAC

</section>

<section class="reading-concept-unit">
<h4>ข้อดี:</h4>

ช่วยจำกัดการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต แต่ไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี

</section>

<section class="reading-concept-unit">
<h4>ข้อเสีย:</h4>

ขาดความยืดหยุ่น (Inflexible), มีความซับซ้อนในการบริหารจัดการสูงมาก และมีต้นทุนการดำเนินงานสูง

</section>

<section class="reading-concept-unit">
<h4>ตัวอย่าง:</h4>

ระบบเครือข่ายทางทหาร, หน่วยงานความมั่นคงของรัฐบาล, ระบบปฏิบัติการ SELinux

</section>
<h3 id="topic-3-2-rbac">3.2.6 Role-Based Access Control (RBAC): การควบคุมตามบทบาทหน้าที่</h3>

**RBAC (Role-Based Access Control)** เป็นโมเดลการควบคุมที่นิยมใช้งานมากที่สุดในองค์กรธุรกิจยุคปัจจุบัน:

<section class="reading-concept-unit">
<h4>ผู้มีอำนาจตัดสินใจ:</h4>

บทบาทหน้าที่การทำงานที่กำหนดไว้ล่วงหน้า (**Predefined Job Roles**)

</section>

<section class="reading-concept-unit">
<h4>กลไกการทำงาน:</h4>

สิทธิ์การเข้าถึง (Permissions) จะถูกผูกไว้กับบทบาทหน้าที่ (Roles เช่น บัญชี, วิศวกร, ผู้จัดการ) จากนั้นผู้ใช้งาน (Users) จะถูกกำหนดให้อยู่ในบทบาทที่สอดคล้องกับตำแหน่งงานจริงของตน

</section>

<section class="reading-concept-unit">
<h4>ข้อดี:</h4>

บริหารจัดการง่าย มีความสอดคล้อง (Consistency), รองรับการขยายตัวขององค์กรได้ดี (Scalability), เมื่อมีพนักงานใหม่เข้ามาเพียงแค่ผูกเข้ากับ Role ก็สามารถเริ่มงานได้ทันที

</section>

<section class="reading-concept-unit">
<h4>ข้อเสีย:</h4>

หากองค์กรมีบทบาทงานที่ซับซ้อนเกินไป อาจเกิดปัญหาบทบาทงอกงามจนควบคุมยาก (Role Explosion) หรือหากกำหนดบทบาทกว้างเกินไปผู้ใช้อาจได้รับสิทธิ์เกินจำเป็น

</section>

<section class="reading-concept-unit">
<h4>ตัวอย่าง:</h4>

ระบบจัดการสิทธิ์ในโรงพยาบาล (แพทย์, พยาบาล, เภสัชกร, การเงิน), ระบบ ERP ขององค์กรธุรกิจ

</section>
<h3 id="topic-3-2-abac">3.2.7 Attribute-Based Access Control (ABAC): การควบคุมตามคุณลักษณะและบริบท</h3>

**ABAC (Attribute-Based Access Control)** เป็นโมเดลการควบคุมการเข้าถึงยุคใหม่ที่มีความละเอียด (Fine-grained) และยืดหยุ่นสูงสุด โดยประเมินจาก **คุณลักษณะ (Attributes)** หลากหลายมิติร่วมกับนโยบายเชิงตรรกะแบบไดนามิก:

<section class="reading-concept-unit">
<h4>ผู้มีอำนาจตัดสินใจ:</h4>

เครื่องยนต์ประมวลผลนโยบาย (Policy Engine) ที่นำเอาค่าคุณลักษณะและเงื่อนไขสภาพแวดล้อมมาประเมินร่วมกันในขณะร้องขอ

</section>

<section class="reading-concept-unit">
<h4>ตัวอย่างคุณลักษณะและบริบทที่นโยบายอาจใช้ (ไม่ใช่หมวดหมู่ตายตัว):</h4>

- **Subject Attributes (คุณลักษณะของผู้ใช้):** แผนก, ตำแหน่งงาน, ระดับตำแหน่ง, สถานะการจ้างงาน
- **Object / Resource Attributes (คุณลักษณะของทรัพยากร):** ระดับชั้นความลับของไฟล์, แผนกเจ้าของข้อมูล, ประเภทของไฟล์
- **Environmental Attributes (คุณลักษณะของสภาพแวดล้อม):** เวลาที่ร้องขอ (Time of day), วันในสัปดาห์, พิกัดสถานที่ (Location / Geolocation), เครือข่ายที่เชื่อมต่อ (Subnet / Corporate IP)
- **Device Attributes (คุณลักษณะของอุปกรณ์):** ประเภทของอุปกรณ์ (Corporate Laptop vs. Personal Mobile), สถานะการเข้ารหัสเครื่อง, สถานะการติดตั้งซอฟต์แวร์ป้องกันไวรัส

</section>

<section class="reading-concept-unit">
<h4>Requested Action (การกระทำที่ร้องขอ):</h4>

ต้องประเมินร่วมกับคุณลักษณะและนโยบาย เช่น Read อาจอนุญาต แต่ Delete ไม่อนุญาต แม้เป็นผู้ใช้และไฟล์เดียวกัน

</section>

<section class="reading-concept-unit">
<h4>ตัวอย่างนโยบาย:</h4>

*"อนุญาตให้อ่าน (Read) ไฟล์สัญญาทางการเงินได้ ก็ต่อเมื่อ ผู้ใช้สังกัดแผนก Finance (Subject) และเชื่อมต่อผ่านคอมพิวเตอร์ของบริษัทที่มีการเข้ารหัส (Device) ในเวลาทำการ 08:30 - 17:00 น. (Environment) เท่านั้น"*

</section>

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

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การเปรียบเทียบการตัดสินใจให้สิทธิ์ใน 4 โมเดล (DAC, MAC, RBAC, ABAC)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> องค์กรต้องการกำหนดนโยบายให้บุคลากรเข้าถึงเอกสารและฐานข้อมูลเวชระเบียน โดยแต่ละฝ่ายเลือกใช้โมเดลควบคุมการเข้าถึงที่เหมาะสมกับบริบทของตน</div>
  <div class="reading-example-step"><strong>2. การตัดสินใจในแต่ละโมเดล (Access Decision Mechanisms):</strong>
    <ul>
      <li><strong>Discretionary Access Control (DAC):</strong> นายแพทย์สมชายเป็นผู้สร้างไฟล์รายงานผลวิจัย "Research_2026.docx" บนระบบแชร์ไฟล์ ในฐานะ Resource Owner หมอสมชายสามารถคลิกขวาที่ไฟล์เพื่อกำหนดให้เพื่อนร่วมงานอ่านได้ และสั่งบล็อกคนอื่นได้ด้วยตนเองอย่างอิสระ (Owner sets ACLs)</li>
      <li><strong>Mandatory Access Control (MAC):</strong> หน่วยวิจัยด้านความมั่นคงกำหนดป้ายกำกับไฟล์เป็น <em>Top Secret</em> นายแพทย์สมเกียรติมี Security Clearance ระดับ <em>Top Secret</em> แต่หากไม่มี <strong>Need-to-Know</strong> ในโครงการนี้ ระบบส่วนกลางจะปฏิเสธการเข้าถึงทันที (Central Policy + Label + Clearance + Need-to-Know)</li>
      <li><strong>Role-Based Access Control (RBAC):</strong> ในระบบโรงพยาบาลส่วนหน้า มีการสร้าง Role เช่น <em>"Emergency Nurse"</em> และ <em>"Cardiologist"</em> พยาบาลที่ถูกบรรจุใน Role นี้จะได้รับสิทธิ์บันทึกสัญญาณชีพทันที แต่ไม่สามารถสั่งยาจำพวกสารเสพติดได้ ซึ่งสงวนไว้เฉพาะ Role แพทย์เท่านั้น (Predefined Job Roles)</li>
      <li><strong>Attribute-Based Access Control (ABAC):</strong> พยาบาลเข้าใช้งานระบบจากเครื่องแท็บเล็ตของโรงพยาบาลในเวลากะปฏิบัติงาน (08:00 - 16:00 น.) ผ่านเครือข่าย Wi-Fi ในหอผู้ป่วย &rarr; ระบบอนุญาตให้เข้าดูประวัติผู้ป่วยได้ แต่หากพยาบาลคนเดียวกันพยายามล็อกอินดูข้อมูลชุดเดิมจากสมาร์ตโฟนส่วนตัวเวลา 22:00 น. จากที่พัก &rarr; Policy Engine ของ ABAC จะปฏิเสธการเข้าถึงทันทีเนื่องจากเงื่อนไขเวลา สถานที่ และอุปกรณ์ไม่ตรงตามนโยบาย</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): DAC ให้สิทธิ์แก่เจ้าของไฟล์ตัดสินใจเอง, MAC บังคับใช้ตามระดับความลับและสิทธิ์ส่วนกลางจากระบบ, RBAC ยึดตามบทบาทหน้าที่งานในองค์กร, และ ABAC ประเมินแบบไดนามิกจากคุณลักษณะของผู้ใช้ ทรัพยากร และบริบทสภาพแวดล้อม (เวลา สถานที่ อุปกรณ์)</div>
</div>

</section>

<section class="reading-objective-section reading-review-section reading-structured-objective" id="domain-3-review">

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
        <div class="reading-distinction-desc">สิทธิ์ถูกประเมินแบบไดนามิกจากคุณลักษณะหลากหลายด้าน (Subject, Object, Requested Action, Environment และอาจใช้ Device Posture)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>7. Authentication vs. Authorization</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Authentication (AuthN)</strong>
        <div class="reading-distinction-desc">การพิสูจน์ตัวตนที่ผู้ใช้กล่าวอ้าง (Prove the claimed identity) ผ่านข้อมูลประจำตัว เช่น รหัสผ่าน หรือไบโอเมตริกซ์</div>
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
        <div class="reading-distinction-desc">ปิดการใช้งานบัญชีโดยผู้ดูแล (Administrative Disable) แตกต่างจาก Lockout; การเก็บบัญชีและ Audit Logs ต้องเป็นไปตามนโยบายและความสัมพันธ์ของระบบ</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Delete Account (ลบทิ้งถาวร)</strong>
        <div class="reading-distinction-desc">การลบบัญชีถาวร ต้องพิจารณานโยบายการเก็บรักษา หลักฐาน และความเป็นเจ้าของไฟล์ ผลต่อ Audit Logs ขึ้นอยู่กับระบบ ไม่ใช่ว่าการลบบัญชีทำลาย Log เสมอไป</div>
      </div>
    </div>
  </div>
</div>

#### 2. ข้อสังเกตและจุดจำสำคัญสำหรับข้อสอบ (Exam Traps)

- ถ้าข้อสอบถามถึง **"ยังไม่ได้กำหนดบทบาทและสิทธิ์ที่งานต้องใช้ ก่อนให้สิทธิ์เข้าถึง (Grant Access) ควรทำอะไร"** → ให้เลือก **Define Roles and Responsibilities**
- ถ้าข้อสอบถามถึง **"กระบวนการสร้างบัญชี กำหนดบทบาท และให้สิทธิ์เข้าถึงเริ่มต้น"** → ให้เลือก **Provisioning**
- ถ้าข้อสอบถามถึง **"สิทธิ์เก่าสะสมเพิ่มขึ้นเรื่อย ๆ เมื่อพนักงานเปลี่ยนบทบาทหรือย้ายฝ่าย"** → ให้เลือก **Privilege Accumulation / Privilege Creep**
- ถ้าข้อสอบถามถึง **"บัญชีของพนักงานที่ลาออกไปแล้วแต่ยังค้างอยู่ในระบบ"** → ให้เลือก **Orphaned Accounts**
- ถ้าข้อสอบถามถึง **"ผู้สร้างรายการไม่สามารถอนุมัติรายการของตนเองได้"** → ให้เลือก **Segregation of Duties (SoD)**
- ถ้าข้อสอบถามถึง **"หนึ่งกระบวนการสำคัญต้องใช้คนมากกว่าหนึ่งคนรับผิดชอบ"** → ให้เลือก **Segregation of Duties (SoD)**
- ถ้าข้อสอบถามถึง **"จำกัดสิทธิ์ให้มีเฉพาะเท่าที่จำเป็นอย่างยิ่งยวดต่องาน"** → ให้เลือก **Principle of Least Privilege (PoLP)**
- ถ้าข้อสอบถามถึง **"เจ้าของไฟล์เป็นผู้ตัดสินใจกำหนดสิทธิ์การเข้าถึงด้วยตนเอง"** → ตอบ **DAC (Discretionary Access Control)**
- ถ้าข้อสอบถามถึง **"การควบคุมการเข้าถึงโดยใช้ Security Classification, Labels และ Clearance"** → ตอบ **MAC (Mandatory Access Control)**
- ถ้าข้อสอบถามถึง **"การควบคุมที่ผู้ใช้หรือเจ้าของไฟล์ไม่มีสิทธิ์เปลี่ยนแปลงการตั้งค่าได้เอง"** → ตอบ **MAC (Mandatory Access Control)**
- ถ้าข้อสอบถามถึง **"การให้สิทธิ์เข้าถึงตามหน้าที่การทำงาน (Job Function / Role)"** → ตอบ **RBAC (Role-Based Access Control)**
- ถ้าข้อสอบถามถึง **"การควบคุมการเข้าถึงที่ประเมินเวลา สถานที่ อุปกรณ์ และแผนกแบบไดนามิก"** → ตอบ **ABAC (Attribute-Based Access Control)**
- ถ้าข้อสอบถามถึง **"การเพิกถอนสิทธิ์พนักงานที่ลาออก ควรทำอย่างไรเป็นแนวปฏิบัติที่ดีที่สุด"** → ตอบ **Disable Account** (ไม่ใช่ Delete Account ทันที)
- ถ้าข้อสอบถามถึง **"การตรวจสอบความมีอยู่จริงของบุคคลในโลกจริงก่อนออกรหัสดิจิทัล"** → ตอบ **Identity Proofing (NIST SP 800-63A)**

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
| **MAC** | "Security labels", "Clearance", "Central authority" | บังคับใช้นโยบายส่วนกลางเพื่อจำกัดการเปิดเผยข้อมูล | ระบบทหารตรวจ Clearance, Need-to-Know และนโยบายที่เกี่ยวข้องก่อนอนุญาตให้อ่านเอกสารลับ |
| **RBAC** | "Predefined role", "Job function", "Scalability" | บริหารสิทธิ์พนักงานจำนวนมากอย่างเป็นระบบ | พยาบาลทุกคนในแผนกได้รับสิทธิ์ดูเวชระเบียนเหมือนกัน |
| **ABAC** | "Attributes", "Environment", "Time/Device/Location" | ควบคุมการเข้าถึงแบบละเอียดตามบริบท | เข้าถึงข้อมูลการเงินได้เฉพาะเครื่องบริษัทในเวลาทำการ |

#### 4. สถานการณ์จำลองและแนวคิดการวิเคราะห์ (Review Scenarios)

:::scenario
id: 1
badge: Scenario 01
topic: Roles Definition & Access Prerequisite
situation: องค์กรกำลังเริ่มรับพนักงานใหม่จำนวนมากในสายงานพัฒนาซอฟต์แวร์ โดยยังไม่ได้กำหนดบทบาทและสิทธิ์ที่แต่ละงานต้องใช้ ผู้บริหารฝ่ายความมั่นคงปลอดภัยได้กำชับทีม IT Admin ว่าก่อนที่จะเริ่มทำการอนุมัติหรือมอบสิทธิ์การเข้าถึง (Grant Access) ให้กับระบบฐานข้อมูลและซอร์สโค้ดของบริษัท จะต้องดำเนินการขั้นตอนใดให้แล้วเสร็จอย่างเป็นทางการก่อน
question: ขั้นตอนสำคัญที่สุดที่องค์กรต้องดำเนินการให้ชัดเจนก่อนทำการให้สิทธิ์การเข้าถึง (Grant Access) แก่ผู้ใช้คืออะไร?
answer: Define Roles and Responsibilities — กำหนดบทบาทและหน้าที่ความรับผิดชอบ
reasoning: ตามหลักการบริหารจัดการตัวตนและการเข้าถึง (IAM) องค์กรจะต้องทำการ "กำหนดบทบาทและหน้าที่ความรับผิดชอบ (Define Roles and Responsibilities)" ให้ชัดเจนก่อนจัดสรรสิทธิ์ในกรณีที่ยังไม่กำหนดไว้ เพื่อให้ทราบว่าหน้าที่งาน (Job Function) นั้นต้องการสิทธิ์ใดบ้างที่จำเป็นอย่างแท้จริง การให้สิทธิ์โดยไม่มีการกำหนดบทบาทล่วงหน้าจะนำไปสู่ปัญหาการให้สิทธิ์เกินจำเป็น (Excessive Permissions)
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
situation: ในระบบสารสนเทศของหน่วยงานความมั่นคง เอกสารทุกฉบับจะถูกระบบตีตรากำกับระดับชั้นความลับอย่างเข้มงวด เช่น Confidential, Secret หรือ Top Secret ผู้ใช้งานจะสามารถเปิดอ่านเอกสารได้ก็ต่อเมื่อระดับความไว้วางใจหรือระดับการตรวจสอบประวัติ (Security Clearance) ของผู้ใช้นั้นมีระดับเท่ากับหรือสูงกว่าระดับชั้นความลับของเอกสาร และต้องมี Need-to-Know พร้อมผ่านนโยบายที่เกี่ยวข้องด้วย โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับของเอกสารด้วยตนเอง
question: รูปแบบการควบคุมการเข้าถึงที่ถูกบังคับใช้โดยนโยบายกลางของระบบโดยพิจารณาจาก "ป้ายกำกับความลับ" (Security Labels) และ "ระดับความไว้วางใจ" (Clearance) ของผู้ใช้ เรียกว่าอะไร?
answer: Mandatory Access Control (MAC) — การควบคุมการเข้าถึงแบบบังคับ
reasoning: Mandatory Access Control (MAC) เป็นโมเดลการควบคุมที่บังคับใช้นโยบายส่วนกลาง โดยอำนาจการตัดสินใจไม่ได้อยู่ที่ผู้ใช้หรือเจ้าของไฟล์ แต่อยู่ที่นโยบายของระบบส่วนกลาง (Central Authority) การเข้าถึงถูกควบคุมผ่านการเปรียบเทียบระหว่าง Security Label ของวัตถุ (Object) กับ Security Clearance ของผู้ใช้ (Subject) นิยมใช้ในองค์กรทางทหารและหน่วยงานรัฐบาลระดับสูง
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
situation: บริษัทด้านการเงินแห่งหนึ่งกำหนดเงื่อนไขการเข้าถึงระบบโอนเงินข้ามประเทศไว้ว่า: ผู้ใช้จะต้องมีตำแหน่งเป็น "ผู้จัดการฝ่ายการเงิน" (Subject Attribute), เข้าถึงผ่าน "คอมพิวเตอร์แล็ปท็อปของบริษัทที่มีการเข้ารหัสฮาร์ดดิสก์และต่อผ่านเครือข่ายสำนักงานเท่านั้น" (Device &amp; Location Attributes), และต้องทำรายการโอนเงิน (Requested Action) "ในวันจันทร์-ศุกร์ ระหว่างเวลา 08:30 - 17:00 น." (Environmental Attributes) เท่านั้น หากอยู่นอกเงื่อนไขเหล่านี้ระบบจะปฏิเสธการเข้าถึงทันที
question: รูปแบบการควบคุมการเข้าถึงที่นำเอาคุณลักษณะหลายด้าน ทั้งตัวผู้ใช้ ทรัพยากร อุปกรณ์ และสภาพแวดล้อม มาประมวลผลร่วมกันแบบไดนามิก เรียกว่าอะไร?
answer: Attribute-Based Access Control (ABAC) — การควบคุมการเข้าถึงตามคุณลักษณะและบริบท
reasoning: Attribute-Based Access Control (ABAC) เป็นโมเดลการควบคุมขั้นสูงที่ประเมินคุณลักษณะ (Attributes) หลากหลายมิติอย่างยืดหยุ่นและละเอียด (Fine-grained) ได้แก่ Subject (ผู้ใช้), Object/Resource (ข้อมูล), Action (การกระทำ) และ Environment (เวลา, พิกัดสถานที่, ประเภทอุปกรณ์, สถานะความปลอดภัย) เพื่อตัดสินใจอนุญาตหรือปฏิเสธแบบเรียลไทม์
:::

:::scenario
id: 10
badge: Scenario 10
topic: Identity Deprovisioning &amp; Account Retention
situation: ตามนโยบายองค์กรต้องเก็บบัญชีที่ปิดใช้งานเพื่อการตรวจสอบและการโอนความเป็นเจ้าของไฟล์ พนักงานฝ่ายขายได้ยื่นใบลาออกและทำงานวันสุดท้ายเสร็จสิ้น ทีม IT ได้รับแจ้งคำสั่งจึงทำการระงับการใช้งานบัญชี (Disable Account), เพิกถอนสิทธิ์การเข้าถึง VPN, อีเมล และระบบ CRM ทั้งหมดทันที แต่ไม่ได้ทำการลบชื่อบัญชีและประวัติการทำรายการทิ้งไปจากฐานข้อมูล Active Directory เพื่อเก็บไว้ใช้ในการตรวจสอบย้อนหลัง (Audit Trail)
question: กระบวนการเพิกถอนสิทธิ์และระงับการเข้าถึงทรัพยากรเมื่อพนักงานสิ้นสุดสภาพการทำงานนี้ เรียกว่าอะไร และเหตุใดจึงควรใช้วิธี Disable มากกว่า Delete ทันที?
answer: Deprovisioning — การเพิกถอนสิทธิ์ โดยเลือก Disable เพื่อรักษาประวัติการตรวจสอบ (Audit Trail)
reasoning: Deprovisioning คือการเพิกถอนหรือระงับสิทธิ์ทั้งหมดเมื่อหมดความจำเป็น (เช่น ลาออก ถูกเลิกจ้าง หรือหมดสัญญาจ้าง) และตามนโยบายการเก็บรักษาขององค์กรในสถานการณ์นี้ ไม่ควรลบบัญชีผู้ใช้ทิ้งทันที (Delete) แต่ควรระงับการใช้งาน (Disable) เพื่อรักษาประวัติการทำงาน บันทึกการตรวจสอบย้อนหลัง (Audit Logs) และป้องกันการสูญหายของความเป็นเจ้าของไฟล์ในระบบ
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