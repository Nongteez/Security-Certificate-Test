<p class="reading-lead">สรุปและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับเตรียมสอบ ISC2 Certified in Cybersecurity (CC) ฉบับปรับปรุงปี 2026 ใน Domain 5: Security Operations — การปฏิบัติการรักษาความมั่นคงปลอดภัย (น้ำหนักข้อสอบ 17.3%) ครอบคลุมการรักษาความมั่นคงปลอดภัยของข้อมูลและการจัดการวงจรชีวิตข้อมูล (Data Handling, Data Classification, Labeling, Masking, NIST SP 800-88 Data Sanitization, Data States at Rest/in Transit/in Use, Cryptography แบบ Symmetric/Asymmetric, Hashing, Digital Signatures, TPM vs. HSM), การปฏิบัติการด้านความปลอดภัยและการเฝ้าระวัง (Logging 4 ขั้นตอน Aggregation/Alerting/Reporting/Archiving, SIEM & Telemetry Correlation, Antivirus & EDR, DLP, SNMP Traps, Triage & Prioritization, Threat Actors, CTI & IOCs, MITRE ATT&CK Framework), การตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย (Incident Response Goals, IRP & CSIRT Roles, The 6-Phase Incident Response Lifecycle, Evidence Handling & Chain of Custody, Tabletop vs. Technical Exercises), การปกป้องทรัพย์สิน (Asset Lifecycle Management 6 ขั้นตอน, EOL/EOS Risks & Compensating Controls, Configuration Management, Security Baselines & Drift, 5-Step Patch Management, 7-Step Change Management & CAB), และการทดสอบความมั่นคงปลอดภัย (Blue/Red/Purple Teaming, Vulnerability Assessment vs. Penetration Testing, Application Security Testing SAST vs. DAST, Threat Modeling & STRIDE, Physical Penetration Testing, และ Social Engineering Awareness: Phishing, Tailgating, Impersonation)</p>

<section class="reading-objective-section reading-structured-objective" id="obj-5-1">

## Objective 5.1: Understand Data Security

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ข้อมูลสารสนเทศ (Data) คือทรัพย์สินที่มีค่าสูงสุดขององค์กรยุคใหม่ การทำความเข้าใจการจัดชั้นข้อมูล มาตรการเข้ารหัส การทำลายข้อมูลอย่างปลอดภัย และการปกป้องข้อมูลในทุกสภาวะ จึงเป็นรากฐานสำคัญที่สุดของความมั่นคงปลอดภัย:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-data-handling-classification">5.1.1 Data Handling, Governance &amp; Classification: การจัดการและจัดหมวดหมู่ข้อมูล</h3>

**Data Handling (การจัดการข้อมูล)** คือชุดของนโยบาย กระบวนการ และแนวทางปฏิบัติที่องค์กรกำหนดขึ้นเพื่อบริหารจัดการข้อมูลตลอดวงจรชีวิต (Data Lifecycle) ตั้งแต่การสร้าง (Create), จัดเก็บ (Store), ใช้งาน (Use), แบ่งปัน (Share), จัดเก็บถาวร (Archive), จนถึงการทำลายอย่างปลอดภัย (Destroy)

<h4 class="reading-concept-group-title">ความสำคัญของการจัดการข้อมูล (Importance of Data Handling):</h4>

- **ความสอดคล้องกับกฎหมายและข้อบังคับ (Regulatory Compliance):** องค์กรต้องปฏิบัติตามกฎหมายคุ้มครองข้อมูล เช่น GDPR (General Data Protection Regulation) สำหรับข้อมูลส่วนบุคคลในสหภาพยุโรป, HIPAA (Health Insurance Portability and Accountability Act) สำหรับข้อมูลสุขภาพของผู้ป่วย (PHI) ในสหรัฐฯ, และ PCI-DSS สำหรับข้อมูลบัตรเครดิต
- **ป้องกันการรั่วไหลของข้อมูล (Preventing Data Breaches):** การมีแนวทางปฏิบัติที่ชัดเจนช่วยให้พนักงานไม่เผลอส่งข้อมูลสำคัญออกไปยังบุคคลภายนอกโดยไม่ตั้งใจ
- **เพิ่มประสิทธิภาพต้นทุนการจัดเก็บ (Optimizing Storage Costs):** แยกแยะข้อมูลที่ต้องเก็บถาวรออกจากข้อมูลขยะ ช่วยลดค่าใช้จ่ายด้านอุปกรณ์จัดเก็บข้อมูล

<h4 class="reading-concept-group-title">ระดับการจัดชั้นข้อมูล (Data Classification Schemes):</h4>

การจัดชั้นข้อมูลคือการจัดหมวดหมู่ข้อมูลตามระดับความอ่อนไหว (Sensitivity) ผลกระทบหากข้อมูลรั่วไหล (Impact) และข้อกำหนดทางกฎหมาย เพื่อกำหนดมาตรการรักษาความมั่นคงปลอดภัยได้อย่างเหมาะสม:

<section class="reading-definition-unit">
<h5>1. ข้อมูลสาธารณะ (Public Data):</h5>

ข้อมูลที่เปิดเผยต่อบุคคลทั่วไปได้โดยไม่มีผลกระทบต่อองค์กร เช่น ข้อมูลบนเว็บไซต์บริษัท ข่าวประชาสัมพันธ์ แคตตาล็อกสินค้า และรายงานประจำปี ไม่จำเป็นต้องเข้ารหัสความลับ แต่ต้องรักษาความถูกต้องสมบูรณ์ (Integrity) ไม่ให้ถูกแก้ไขบิดเบือน

</section>

<section class="reading-definition-unit">
<h5>2. ข้อมูลภายในองค์กร / ข้อมูลลับทั่วไป (Internal / Confidential Data):</h5>

ข้อมูลที่จำกัดให้เข้าถึงได้เฉพาะพนักงานภายในองค์กรเท่านั้น เช่น อีเมลสื่อสารภายใน แผนผังองค์กร บันทึกการประชุม นโยบายการปฏิบัติงาน หากรั่วไหลจะสร้างความเสียหายระดับต่ำถึงปานกลาง

</section>

<section class="reading-definition-unit">
<h5>3. ข้อมูลอ่อนไหว (Sensitive Data):</h5>

ข้อมูลที่ต้องการการปกป้องเป็นพิเศษ หากรั่วไหลจะส่งผลกระทบต่อความได้เปรียบทางการแข่งขันหรือก่อให้เกิดความเสียหายร้ายแรง เช่น ข้อมูลการเงิน บันทึกการทำธุรกรรม ทรัพย์สินทางปัญญา ซอร์สโค้ดซอฟต์แวร์ และความลับทางการค้า (Trade Secrets)

</section>

<section class="reading-definition-unit">
<h5>4. ข้อมูลควบคุมตามกฎหมาย / ข้อมูลอ่อนไหวขั้นสูงสุด (Regulated / Highly Sensitive Data):</h5>

ข้อมูลที่กฎหมายบังคับให้ต้องมีมาตรการคุ้มครองอย่างเข้มงวด หากรั่วไหลองค์กรจะต้องรับผิดทั้งทางแพ่ง ทางอาญา และถูกปรับเป็นเงินมูลค่ามหาศาล ประกอบด้วย:
- **PII (Personally Identifiable Information):** ข้อมูลระบุตัวบุคคล เช่น หมายเลขบัตรประชาชน, เลขหนังสือเดินทาง, ชื่อ-นามสกุลคู่กับที่อยู่, ข้อมูลชีวมิติ
- **PHI (Protected Health Information):** ข้อมูลสุขภาพ ประวัติการรักษาพยาบาล และผลตรวจทางห้องปฏิบัติการ (ควบคุมโดย HIPAA)
- **CHD (Cardholder Data):** หมายเลขบัตรเครดิต วันหมดอายุ และรหัส CVV (ควบคุมโดย PCI-DSS)

</section>

<div class="reading-table-wrapper">

| ระดับการจัดชั้นข้อมูล (Classification) | ระดับความลับ | ตัวอย่างข้อมูล | มาตรการควบคุมที่จำเป็น |
| :--- | :--- | :--- | :--- |
| **Public** | เปิดเผยได้ทั่วไป | เว็บไซต์บริษัท, ข่าวแจกสื่อ | ตรวจสอบความถูกต้องสมบูรณ์ (Integrity) |
| **Internal** | เฉพาะพนักงาน | อีเมลภายใน, ผังองค์กร | ยืนยันตัวตนก่อนเข้าถึง, ควบคุมสิทธิ์พื้นฐาน |
| **Sensitive** | จำกัดเฉพาะผู้มีหน้าที่ | ข้อมูลการเงิน, ซอร์สโค้ด | เข้ารหัสลับ, กำหนดสิทธิ์ Least Privilege เข้มงวด |
| **Regulated (PII/PHI)** | กฎหมายคุ้มครองสูงสุด | ข้อมูลบัตรประชาชน, ประวัติคนไข้ | เข้ารหัส FDE/TLS, Audit Logs ตลอดเวลา, ทำลายตามมาตรฐาน |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-data-labeling-tagging">5.1.2 Data Labeling &amp; Metadata Tagging: การติดฉลากข้อมูลและแท็กเมทาดาตา</h3>

**Data Labeling (การติดฉลากข้อมูล)** คือกระบวนการกำหนดเครื่องหมายที่มองเห็นได้ด้วยสายตา (Visual Tag) หรือระบุข้อมูลกำกับ (Metadata Tag) ลงในไฟล์ เพื่อระบุระดับการจัดชั้นของข้อมูลนั้นอย่างชัดเจน ช่วยให้ผู้ใช้งานและระบบอัตโนมัติสามารถปฏิบัติต่อข้อมูลได้อย่างถูกต้อง

<h4 class="reading-concept-group-title">รูปแบบการติดฉลากข้อมูล (Labeling Methods):</h4>

<section class="reading-definition-unit">
<h5>การติดฉลากทางกายภาพ (Physical Labels):</h5>

การประทับตราหรือพิมพ์ข้อความลงบนเอกสารกระดาษ กล่องเก็บเอกสาร แฟ้มงาน หรือเทปสำรองข้อมูล เช่น ประทับคำว่า "CONFIDENTIAL" หรือ "RESTRICTED" บนหัวกระดาษและสันแฟ้ม เพื่อให้ผู้ถือเอกสารระมัดระวังเป็นพิเศษ

</section>

<section class="reading-definition-unit">
<h5>การติดฉลากดิจิทัลและแท็กเมทาดาตา (Digital Metadata Tagging):</h5>

การฝังป้ายกำกับเข้าไปในคุณสมบัติของไฟล์ดิจิทัล (เช่น เอกสาร Word, PDF, สเปรดชีต) ผ่านระบบบริหารจัดการข้อมูลระดับองค์กร เช่น Microsoft Information Protection (MIP) หรือ Azure Information Protection ป้ายกำกับดิจิทัลนี้จะติดไปกับไฟล์เสมอ และช่วยให้ระบบ DLP (Data Loss Prevention) สามารถตรวจจับและบล็อกการส่งไฟล์ออกนอกองค์กรได้อัตโนมัติ

</section>

<section class="reading-definition-unit">
<h5>การใช้รหัสสี (Color Coding):</h5>

การกำหนดสีมาตรฐานเพื่อบ่งบอกระดับความสำคัญอย่างรวดเร็ว เช่น สีแดงสำหรับข้อมูลลับสูงสุด (Highly Sensitive), สีเหลืองสำหรับข้อมูลภายใน (Internal), และสีเขียวสำหรับข้อมูลสาธารณะ (Public)

</section>

<div class="reading-callout reading-callout-info">
<p class="reading-callout-title">จุดประสงค์หลักของการติดฉลากข้อมูล</p>
<p>การจัดชั้นข้อมูล (Classification) จะไม่มีความหมายเลยหากไม่มีการติดฉลาก (Labeling) เพราะพนักงานจะไม่รู้ว่าเอกสารที่ตนถืออยู่มีความสำคัญระดับใด การติดฉลากช่วยป้องกันการเปิดเผยข้อมูลโดยอุบัติเหตุ (Accidental Data Exposure) และช่วยให้ระบบไฟร์วอลล์และอีเมลเกตเวย์บังคับใช้นโยบายความปลอดภัยได้อย่างถูกต้อง</p>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-data-masking-obfuscation">5.1.3 Data Masking &amp; Obfuscation: การพรางข้อมูลและการบดบังความลับ</h3>

**Data Masking (การพรางข้อมูล)** คือกระบวนการซ่อนหรือแทนที่ข้อมูลที่อ่อนไหวด้วยข้อมูลสมมุติหรือเครื่องหมายบังตา โดยที่ยังคงรักษาโครงสร้าง รูปแบบความยาว (Data Format) และความสามารถในการนำข้อมูลไปใช้งานตามวัตถุประสงค์ที่ได้รับอนุญาต

<h4 class="reading-concept-group-title">ตัวอย่างการใช้งานในโลกจริง:</h4>

- **ระบบบริการลูกค้า (Customer Support):** เมื่อลูกค้าโทรศัพท์สอบถามข้อมูล เจ้าหน้าที่ศูนย์บริการจะเห็นหมายเลขบัตรเครดิตเพียง 4 หลักสุดท้าย เช่น `•••• •••• •••• 1234` เพื่อยืนยันตัวตน โดยเจ้าหน้าที่ไม่สามารถเห็นเลขเต็ม 16 หลักได้ จึงป้องกันการขโมยข้อมูลบัตรไปใช้
- **สภาพแวดล้อมการพัฒนาและทดสอบ (Dev / Test / Staging):** นักพัฒนาซอฟต์แวร์ต้องการชุดข้อมูลขนาดใหญ่ที่มีรูปแบบเหมือนข้อมูลจริงเพื่อทดสอบประสิทธิภาพของระบบ แต่ไม่ควรเข้าถึงข้อมูลส่วนบุคคลจริงของลูกค้า จึงนำข้อมูลมาผ่านกระบวนการ Masking เพื่อแทนที่ชื่อ นามสกุล และเลขบัญชีด้วยข้อมูลจำลอง

<h4 class="reading-concept-group-title">ข้อแตกต่างระหว่างการปกป้องข้อมูลด้วยเทคนิคต่าง ๆ:</h4>

<div class="reading-table-wrapper">

| เทคนิค | หลักการทำงาน | ความสามารถในการกู้คืน | ประโยชน์การใช้งาน |
| :--- | :--- | :--- | :--- |
| **Data Masking** | ปิดบังบางส่วนหรือแทนที่ด้วยข้อมูลรูปทรงเดียวกัน | รักษาโครงสร้างเดิม ปิดบังสายตา | หน้าจอบริการลูกค้า, ระบบทดสอบ Dev/QA |
| **Pseudonymization** | แทนที่ตัวระบุบุคคลด้วยรหัสเทียม (Pseudonym) | ย้อนกลับได้หากมีกุญแจจับคู่แยกต่างหาก | งานวิจัย, การวิเคราะห์ข้อมูลทางการแพทย์ |
| **Anonymization** | ลบข้อมูลระบุตัวตนออกอย่างถาวร | ไม่สามารถย้อนกลับได้โดยเด็ดขาด | งานสถิติสาธารณะ, ข้อมูลที่ไม่เข้าข่าย GDPR |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-data-sanitization-destruction">5.1.4 Data Sanitization &amp; NIST SP 800-88: การล้างและทำลายสื่อบันทึกข้อมูล</h3>

เมื่ออุปกรณ์จัดเก็บข้อมูล (Hard Drive, SSD, เทปสำรองข้อมูล, แฟลชไดรฟ์) สิ้นสุดการใช้งานหรือต้องโอนย้ายไปให้ผู้อื่น องค์กรต้องทำลายข้อมูลที่ค้างอยู่ไม่ให้สามารถกู้คืนได้ ตามมาตรฐานสากล **NIST SP 800-88 Rev. 1 (Guidelines for Media Sanitization)** ได้กำหนดระดับการทำลายข้อมูลไว้ 3 ระดับหลัก:

<section class="reading-definition-unit">
<h5>1. Clear (การเขียนทับระดับผู้ใช้):</h5>

การเขียนทับพื้นที่จัดเก็บข้อมูลทั้งหมดด้วยข้อมูลที่ไม่มีความหมาย (เช่น เขียนทับด้วยเลข 0 ทั้งหมด หรือบิตสุ่ม) โดยใช้คำสั่งมาตรฐานระดับผู้ใช้ (Logical Interface Commands) สามารถป้องกันการกู้คืนข้อมูลด้วยซอฟต์แวร์กู้ข้อมูลทั่วไปได้ แต่ไม่สามารถป้องกันการกู้ข้อมูลด้วยเครื่องมือวิเคราะห์ในห้องปฏิบัติการขั้นสูงได้ เหมาะสำหรับอุปกรณ์ที่จะนำกลับมาหมุนเวียนใช้ใหม่ภายในองค์กรเดียวกัน

</section>

<section class="reading-definition-unit">
<h5>2. Purge (การล้างข้อมูลระดับลึก):</h5>

การใช้เทคนิคระดับฮาร์ดแวร์หรือทางกายภาพเพื่อทำให้ข้อมูลไม่สามารถกู้คืนได้ แม้จะใช้เครื่องมือทางห้องปฏิบัติการขั้นสูง (Laboratory Attack Techniques) ก็ตาม:
- **ATA Secure Erase / Cryptographic Erase (CE):** สั่งการผ่านคอนโทรลเลอร์ของอุปกรณ์โซลิดสเตตไดรฟ์ (SSD) เพื่อล้างบล็อกหน่วยความจำแฟลชทั้งหมด รวมถึงพื้นที่สำรอง (Over-provisioned areas)
- **Degaussing (การลบล้างสนามแม่เหล็ก):** การใช้เครื่องสร้างสนามแม่เหล็กความเข้มสูงทำลายโดเมนแม่เหล็กบนสื่อบันทึกประเภทจานแม่เหล็ก (HDD และเทป) ทำให้ข้อมูลหายไปอย่างสิ้นเชิง (ข้อควรระวัง: Degaussing จะทำลายฮาร์ดดิสก์จนไม่สามารถนำกลับมาใช้ใหม่ได้ และไม่สามารถใช้กับ SSD ได้)
- สื่อบันทึกที่ผ่านการ Purge ด้วย Secure Erase สามารถนำไปใช้งานต่อนอกองค์กรหรือบริจาคได้อย่างปลอดภัย

</section>

<section class="reading-definition-unit">
<h5>3. Destroy (การทำลายสื่อทางกายภาพ):</h5>

การทำลายชิ้นส่วนทางกายภาพของสื่อบันทึกข้อมูลจนไม่สามารถนำมาเชื่อมต่อหรือใช้งานได้อีกตลอดไป ได้แก่ การบดละเอียด (Shredding), การเผาทำลายที่อุณหภูมิสูง (Incineration), การย่อยสลายด้วยสารเคมี (Disintegration), การหลอมละลาย (Melting), หรือการเจาะทะลุจานบันทึก (Deforming/Drilling) นิยมใช้กับสื่อบันทึกที่มีข้อมูลความลับระดับสูงสุด หรืออุปกรณ์ที่ชำรุดเสียหายจนไม่สามารถสั่งรันคำสั่ง Clear/Purge ได้

</section>

<section class="reading-definition-unit">
<h5>Crypto-shredding (การทำลายกุญแจเข้ารหัส):</h5>

เทคนิคพิเศษสำหรับการทำลายข้อมูลบนระบบคลาวด์หรือไดรฟ์เสมือน (Virtual Disks) ที่ผู้ใช้งานไม่มีสิทธิ์เข้าถึงอุปกรณ์ฮาร์ดแวร์ทางกายภาพ: ทำได้โดยการเข้ารหัสข้อมูลทั้งหมดด้วยอัลกอริทึมที่แข็งแกร่ง (AES-256) ตั้งแต่ต้น จากนั้นเมื่อต้องการทำลายข้อมูล ให้ทำการลบและทำลายกุญแจถอดรหัส (Decryption Key) ทิ้งอย่างถาวร ส่งผลให้ข้อมูลที่เหลืออยู่กลายเป็นขยะดิจิทัลที่ไม่สามารถถอดรหัสกลับมาได้อีกเลย

</section>

<div class="reading-table-wrapper">

| วิธีการตาม NIST SP 800-88 | กลไกการดำเนินการ | ป้องกันการโจมตีระดับแล็บได้หรือไม่ | อุปกรณ์นำกลับมาใช้ใหม่ได้หรือไม่ |
| :--- | :--- | :--- | :--- |
| **Clear** | เขียนทับแบบลอจิคัล (Overwriting) | ไม่ได้ (แล็บขั้นสูงอาจกู้ได้) | ได้ (นำกลับมาใช้ซ้ำได้) |
| **Purge** | Secure Erase, Degaussing, CE | **ได้ (แล็บขั้นสูงก็กู้คืนไม่ได้)** | ได้สำหรับ SSD/CE, ไม่ได้สำหรับ HDD ที่โดน Degauss |
| **Destroy** | บดย่อย, เผาทำลาย, หลอมละลาย | **ได้ 100% (สื่อถูกทำลายถาวร)** | ไม่ได้ (อุปกรณ์พังทลายสิ้นเชิง) |
| **Crypto-shredding** | ลบและทำลายกุญแจเข้ารหัสทิ้ง | **ได้ (หากกุญแจถูกทำลายสมบูรณ์)** | ได้ (เนื้อที่จัดเก็บบนคลาวด์นำมาเขียนทับใหม่ได้) |

</div>

<figure class="reading-figure" style="max-width: 680px; margin: 18px auto;">
  <div class="reading-figure-img-wrap" style="aspect-ratio: 16/9; max-height: 320px;">
    <img src="assets/images/reading/physically-destroyed-hard-drive.jpg" alt="Physically shredded hard drive platters showing complete mechanical destruction" class="reading-figure-img" width="800" height="600" loading="lazy">
  </div>
  <figcaption class="reading-figcaption">
    <span class="reading-figure-badge badge-physical">NIST SP 800-88 &middot; Physical Destruction</span>
    <strong>การทำลายสื่อจัดเก็บข้อมูลทางกายภาพ (Physical Media Destruction):</strong> ตัวอย่างฮาร์ดดิสก์ที่ถูกบดละเอียดผ่านเครื่องทำลายฮาร์ดดิสก์อุตสาหกรรม (Industrial Hard Drive Shredder) จนแผ่นจานแม่เหล็ก (Platters) แตกกระจายเป็นเศษชิ้นส่วนโลหะขนาดเล็ก ทำให้การกู้คืนข้อมูลด้วยเทคนิคในห้องปฏิบัติการขั้นสูงเป็นไปไม่ได้อย่างสิ้นเชิง (Ultimate Sanitization)
    <span class="reading-figure-attr">ภาพ: Raysonho / Wikimedia Commons / CC0 1.0 Universal Public Domain</span>
  </figcaption>
</figure>

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การเลือกวิธีทำลายข้อมูลตามมาตรฐาน NIST SP 800-88 ใน 3 สถานการณ์องค์กร</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> ธนาคารพาณิชย์กำลังปลดระวางอุปกรณ์จัดเก็บข้อมูล 3 กลุ่มที่มีระดับความลับและเป้าหมายการนำไปใช้ต่างกัน: (1) แล็ปท็อปพนักงานทั่วไป 50 เครื่องที่จะบริจาคให้โรงเรียน, (2) ไดรฟ์ NVMe SSD ในเซิร์ฟเวอร์ฐานข้อมูลลูกค้า 20 ตัวที่จะส่งคืนให้บริษัทเช่าซื้อ, และ (3) ฮาร์ดดิสก์ของเซิร์ฟเวอร์จัดเก็บคีย์หลักระบบ Core Banking ที่หมดอายุการใช้งาน</div>
  <div class="reading-example-step"><strong>2. การเลือกวิธีการและผลลัพธ์ตามระดับความลับ:</strong>
    <ul>
      <li><strong>กลุ่มที่ 1 &rarr; ใช้ Clear (การเขียนทับระดับลอจิคัล):</strong> แล็ปท็อปที่จะนำไปบริจาคผ่านกระบวนการเขียนทับข้อมูลด้วยศูนย์ทุกเซกเตอร์ (Single-pass Overwrite) ตามมาตรฐาน Clear ข้อมูลทั่วไปถูกลบหมดและโรงเรียนสามารถลงระบบปฏิบัติการใหม่ใช้งานได้ทันที</li>
      <li><strong>กลุ่มที่ 2 &rarr; ใช้ Purge (Cryptographic Erase / ATA Secure Erase):</strong> ไดรฟ์ SSD ที่เคยเก็บ PII ลูกค้าต้องป้องกันไม่ให้แล็บกู้ข้อมูลได้ แม้จะส่งคืนผู้ให้เช่าซื้อ ฝ่าย IT สั่งใช้คำสั่ง Cryptographic Erase (CE) เพื่อทำลาย Master Key ของฮาร์ดแวร์ทิ้งทันที และรันคำสั่ง Sanitize Block Erase ทำให้ข้อมูลกลายเป็นสัญญาณสุ่มที่กู้คืนไม่ได้ แต่ตัวไดรฟ์ยังนำกลับมาใช้ใหม่ได้ตามเงื่อนไขสัญญาเช่า</li>
      <li><strong>กลุ่มที่ 3 &rarr; ใช้ Destroy (การทำลายทางกายภาพอย่างถาวร):</strong> ฮาร์ดดิสก์แม่เหล็กที่เคยเก็บกุญแจหลักระบบธนาคาร ถือเป็นทรัพย์สินความมั่นคงสูงสุด องค์กรนำเข้าเครื่องบดย่อยอุตสาหกรรม (Industrial Shredder) จนแผ่นจานแม่เหล็กแตกละเอียดเป็นชิ้นส่วนขนาดเล็กกว่า 2 มิลลิเมตร พร้อมออกใบรับรอง Certificate of Destruction</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): มาตรฐาน NIST SP 800-88 แบ่งการทำลายข้อมูลเป็น 3 ระดับ: Clear ป้องกันการกู้ข้อมูลด้วยเครื่องมือซอฟต์แวร์ทั่วไปและนำสื่อกลับมาใช้ใหม่ได้, Purge ป้องกันการกู้ข้อมูลแม้ใช้เทคนิคในห้องปฏิบัติการขั้นสูง, และ Destroy ทำลายสื่อทางกายภาพจนไม่สามารถอ่านหรือนำกลับมาใช้ใหม่ได้ 100%</div>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-data-states-controls">5.1.5 Data States &amp; Protection Controls: 3 สถานะของข้อมูลและมาตรการคุ้มครอง</h3>

ข้อมูลในระบบคอมพิวเตอร์จะดำรงอยู่ใน 3 สถานะที่แตกต่างกัน ซึ่งแต่ละสถานะมีภัยคุกคามและต้องการมาตรการควบคุมความปลอดภัยที่เฉพาะเจาะจง:

<section class="reading-definition-unit">
<h5>1. ข้อมูลขณะพักหรือจัดเก็บ (Data at Rest):</h5>

ข้อมูลที่ถูกบันทึกอยู่นิ่งบนสื่อจัดเก็บข้อมูลถาวร เช่น ฮาร์ดดิสก์ในเซิร์ฟเวอร์, SSD ในเครื่องแล็ปท็อป, สื่อสำรองข้อมูลเทป, หรือฐานข้อมูลในดาต้าเซ็นเตอร์
- **ภัยคุกคาม:** อุปกรณ์สูญหาย, แล็ปท็อปถูกขโมย, การขโมยฮาร์ดดิสก์ไปต่อพ่วงกับเครื่องอื่น
- **มาตรการควบคุมหลัก:** Full Disk Encryption (FDE เช่น BitLocker บน Windows, FileVault บน macOS), Self-Encrypting Drives (SED), Transparent Data Encryption (TDE) ในระบบฐานข้อมูล, การควบคุมการเข้าถึงทางกายภาพ และการจำกัดสิทธิ์ระดับไฟล์ (File Permissions / ACLs)

</section>

<section class="reading-definition-unit">
<h5>2. ข้อมูลขณะเคลื่อนที่หรือส่งผ่านเครือข่าย (Data in Transit / Motion):</h5>

ข้อมูลที่กำลังเดินทางข้ามระบบเครือข่าย ทั้งเครือข่ายภายในองค์กร (LAN) หรือเครือข่ายสาธารณะอย่างอินเทอร์เน็ต เช่น การเปิดเว็บไซต์, การส่งอีเมล, หรือการโอนย้ายไฟล์ข้ามเซิร์ฟเวอร์
- **ภัยคุกคาม:** การดักดักรับข้อมูล (Eavesdropping / Sniffing), การปลอมแปลงแพ็กเก็ต (Man-in-the-Middle - MitM)
- **มาตรการควบคุมหลัก:** TLS 1.3 (Transport Layer Security) สำหรับการสื่อสารผ่านเว็บ (HTTPS), IPsec VPN สำหรับการเชื่อมต่อระหว่างสาขา, SSH, SFTP, และมาตรฐานความปลอดภัยไร้สาย WPA3-Enterprise

</section>

<section class="reading-definition-unit">
<h5>3. ข้อมูลขณะประมวลผล (Data in Use):</h5>

ข้อมูลที่ถูกโหลดขึ้นมาอยู่ในหน่วยความจำชั่วคราว (RAM, CPU Cache, Registers) และกำลังถูกประมวลผลหรือแก้ไขโดยซีพียูและแอปพลิเคชัน
- **ภัยคุกคาม:** การแอบส่องหน้าจอ (Shoulder Surfing), การดัมป์หน่วยความจำ (Memory Scraping / RAM Dumps), มัลแวร์ขโมยข้อมูลในแคช
- **มาตรการควบคุมหลัก:** สภาพแวดล้อมการประมวลผลที่ปลอดภัย (Secure Enclaves เช่น Intel SGX, AMD SEV), การเข้ารหัสหน่วยความจำ (Hardware Memory Encryption), การประมวลผลบนข้อมูลเข้ารหัสโดยตรง (Homomorphic Encryption), การจำกัดสิทธิ์การเข้าถึงหน่วยความจำของ Process, และนโยบาย Clean Desk / Privacy Filters ป้องกันการแอบมองหน้าจอ

</section>

<div class="reading-table-wrapper">

| สถานะของข้อมูล (Data State) | ตำแหน่งที่ข้อมูลอยู่ | มาตรการควบคุมความปลอดภัยหลัก | เทคโนโลยีตัวอย่าง |
| :--- | :--- | :--- | :--- |
| **Data at Rest** | ฮาร์ดดิสก์, SSD, Database, Backup Tape | Full Disk Encryption, File Encryption | BitLocker, FileVault, SED, TDE |
| **Data in Transit** | สาย LAN, สัญญาณ Wi-Fi, อินเทอร์เน็ต | Cryptographic Tunneling, Encrypted Protocols | TLS 1.3, HTTPS, IPsec, SFTP, WPA3 |
| **Data in Use** | RAM, CPU Cache, Registers, หน้าจอ | Memory Isolation, Enclaves, Privacy Screen | Intel SGX, AMD SEV, Clean Desk Policy |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-cryptography-symmetric-asymmetric">5.1.6 Cryptography Foundations: Symmetric vs. Asymmetric: รากฐานการเข้ารหัสลับ</h3>

**Cryptography (การเข้ารหัสลับ)** คือศาสตร์และศิลป์ในการแปลงข้อมูลที่อ่านเข้าใจได้ (Plaintext หรือ Cleartext) ให้กลายเป็นข้อมูลที่เข้ารหัสและไม่สามารถอ่านเข้าใจได้ (Ciphertext) โดยอาศัยขั้นตอนวิธีทางคณิตศาสตร์ (Algorithm หรือ Cipher) ร่วมกับกุญแจลับ (Key)

<h4 class="reading-concept-group-title">การเข้ารหัสแบบกุญแจสมมาตร (Symmetric Encryption):</h4>

การเข้ารหัสแบบดั้งเดิมที่ใช้ **กุญแจดอกเดียวกัน (Single Shared Key / Secret Key)** ในการเข้ารหัสและถอดรหัสข้อมูล:
- **จุดเด่น:** ประมวลผลรวดเร็วมาก ใช้ทรัพยากรซีพียูน้อย เหมาะอย่างยิ่งสำหรับการเข้ารหัสข้อมูลปริมาณมาก (Bulk Data Encryption) เช่น การเข้ารหัสทั้งฮาร์ดดิสก์หรือไฟล์ขนาดใหญ่
- **ข้อจำกัด:** ปัญหาความปลอดภัยในการแจกจ่ายกุญแจ (Key Distribution Problem) หากกุญแจถูกดักขโมยไประหว่างส่งมอบ ระบบความปลอดภัยจะพังทลายทันที นอกจากนี้ยังไม่รองรับคุณสมบัติ Non-repudiation (ปฏิเสธความรับผิดชอบไม่ได้) และจำนวนกุญแจที่ต้องใช้จะเพิ่มขึ้นอย่างมหาศาลตามสูตร $n(n - 1) / 2$
- **ขั้นตอนวิธีมาตรฐาน:** AES (Advanced Encryption Standard - ความยาวกุญแจ 128, 192, 256 บิต เป็นมาตรฐานสากลปัจจุบัน), DES (Data Encryption Standard - 56 บิต เลิกใช้งานแล้วเพราะไม่ปลอดภัย), 3DES (Triple DES - กำลังถูกเลิกใช้งาน), และ ChaCha20

<h4 class="reading-concept-group-title">การเข้ารหัสแบบกุญแจอสมมาตร (Asymmetric Encryption / Public Key Cryptography):</h4>

การเข้ารหัสที่ใช้ **คู่กุญแจสองดอกที่มีความสัมพันธ์ทางคณิตศาสตร์ (Key Pair)**:
- **Public Key (กุญแจสาธารณะ):** เปิดเผยให้ทุกคนในโลกทราบได้ ใช้สำหรับเข้ารหัสข้อมูล หรือใช้ตรวจสอบลายมือชื่อดิจิทัล
- **Private Key (กุญแจส่วนตัว):** ต้องเก็บรักษาเป็นความลับสูงสุดเฉพาะเจ้าของเท่านั้น ห้ามเปิดเผยเด็ดขาด ใช้สำหรับถอดรหัสข้อมูล หรือใช้สร้างลายมือชื่อดิจิทัล
- **จุดเด่น:** แก้ไขปัญหาการส่งมอบกุญแจได้อย่างสมบูรณ์แบบ เพราะสามารถแจกจ่าย Public Key ได้อย่างเปิดเผย และรองรับการยืนยันตัวตนรวมถึงการไม่สามารถปฏิเสธความรับผิดชอบได้ (Non-repudiation)
- **ข้อจำกัด:** คำนวณช้ากว่าแบบสมมาตรนับร้อยนับพันเท่า ไม่เหมาะสำหรับการเข้ารหัสไฟล์ข้อมูลขนาดใหญ่
- **ขั้นตอนวิธีมาตรฐาน:** RSA (Rivest-Shamir-Adleman - ความยาวกุญแจ 2048 หรือ 4096 บิต), ECC (Elliptic Curve Cryptography - ให้ความปลอดภัยเท่ากับ RSA แต่ใช้กุญแจสั้นกว่ามากและประมวลผลไวกว่า), และ Diffie-Hellman (ใช้แลกเปลี่ยนกุญแจ)

<h4 class="reading-concept-group-title">สถาปัตยกรรมการเข้ารหัสแบบผสมผสาน (Hybrid Encryption):</h4>

ในโลกความเป็นจริง ระบบอย่าง HTTPS, TLS, และ SSH ล้วนนำข้อดีของทั้งสองระบบมาทำงานร่วมกัน:
1. ใช้ **Asymmetric Encryption (RSA หรือ ECC)** ในช่วงเริ่มต้นเพื่อแลกเปลี่ยนกุญแจแบบสมมาตรชั่วคราว (Session Key) อย่างปลอดภัย
2. จากนั้นใช้กุญแจ Session Key ดังกล่าวในการส่งข้อมูลด้วย **Symmetric Encryption (AES)** ซึ่งมีความเร็วสูงในการเข้ารหัสเนื้อหาทั้งหมด

<div class="reading-table-wrapper">

| คุณลักษณะ (Attribute) | Symmetric Encryption (สมมาตร) | Asymmetric Encryption (อสมมาตร) |
| :--- | :--- | :--- |
| **จำนวนกุญแจ** | 1 กุญแจ (Shared Secret Key) | 2 กุญแจคู่กัน (Public Key & Private Key) |
| **ความเร็วในการประมวลผล** | รวดเร็วมาก (Fast) | ช้ากว่ามาก (Slow / High CPU overhead) |
| **การแจกจ่ายกุญแจ** | ยาก (ต้องส่งมอบผ่านช่องทางที่ปลอดภัย) | ง่าย (Public Key แจกจ่ายได้อย่างเปิดเผย) |
| **การใช้งานหลัก** | ข้อมูลปริมาณมาก (Bulk Data), Disk Encryption | การแลกเปลี่ยนกุญแจ (Key Exchange), Digital Signatures |
| **ขั้นตอนวิธีตัวอย่าง** | **AES-128/192/256**, Blowfish, ChaCha20 | **RSA**, **ECC**, Diffie-Hellman |

</div>


<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การแลกเปลี่ยนข้อมูลบัญชีด้วยการเข้ารหัสแบบสมมาตรและอสมมาตร (Hybrid Encryption)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> "อลิซ" ผู้จัดการฝ่ายบัญชีต้องการส่งไฟล์สเปรดชีตสรุปเงินเดือนประจำปีขนาด 500 MB ให้ "บ็อบ" ผู้จัดการฝ่ายบุคคลผ่านทางอินเทอร์เน็ต โดยข้อมูลต้องเป็นความลับสูงสุด</div>
  <div class="reading-example-step"><strong>2. ปัญหาของการใช้ Symmetric อย่างเดียว (Key Distribution Problem):</strong>
    <ul>
      <li>หากอลิซใช้ <strong>AES-256</strong> เข้ารหัสไฟล์ อลิซจะได้ Ciphertext ที่ปลอดภัยและประมวลผลเร็วมาก</li>
      <li>แต่อลิซจะส่งกุญแจลับ (Shared Secret Key K) ให้บ็อบได้อย่างไร? หากส่งทางอีเมลหรือแชต ผู้โจมตีที่ดักฟังอยู่จะขโมยกุญแจ K ไปถอดรหัสได้ทันที</li>
      <li>นอกจากนี้ หากบริษัทมีพนักงาน 1,000 คนที่ต้องคุยกันแบบตัวต่อตัว จะต้องจัดการกุญแจลับมากถึงเกือบ 500,000 คู่กุญแจตามสูตร n(n - 1) / 2</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. วิธีแก้ปัญหาด้วย Hybrid Encryption (TLS / OpenPGP):</strong>
    <ul>
      <li>โปรแกรมของอลิซสร้างกุญแจสมมาตรชั่วคราวขึ้นมา 1 ดอก เรียกว่า <strong>Session Key</strong> แล้วนำไปเข้ารหัสไฟล์สเปรดชีต 500 MB ด้วย <strong>AES-256</strong> (ใช้เวลาเพียง 1 วินาที)</li>
      <li>โปรแกรมนำเอา Session Key ดอกเล็กๆ นั้น ไปเข้ารหัสด้วย <strong>Public Key ของบ็อบ</strong> (โดยใช้อัลกอริทึม Asymmetric เช่น <strong>RSA-4096 หรือ ECC</strong>)</li>
      <li>อลิซส่งทั้งไฟล์ที่เข้ารหัสด้วย AES และ Session Key ที่เข้ารหัสด้วย Public Key ไปให้บ็อบพร้อมกันทางเครือข่ายสาธารณะ</li>
      <li>เมื่อบ็อบได้รับ บ็อบใช้ <strong>Private Key ของตนเอง</strong> ถอดรหัส Session Key ออกมา จากนั้นนำ Session Key นั้นไปถอดรหัสไฟล์สเปรดชีตต้นฉบับ</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Symmetric Encryption (เช่น AES) รวดเร็วมากเหมาะกับข้อมูลปริมาณมาก แต่มีปัญหาการแจกจ่ายกุญแจ ส่วน Asymmetric Encryption (เช่น RSA, ECC) ใช้คู่กุญแจทำให้ส่งมอบ Public Key ได้อย่างปลอดภัยแต่ประมวลผลช้า สถาปัตยกรรมยุคใหม่จึงใช้ Hybrid Encryption โดยใช้ Asymmetric แลกเปลี่ยนกุญแจ Session Key และใช้ Symmetric เข้ารหัสเนื้อหาจริง</div>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-hashing-digital-signatures">5.1.7 Hashing, Integrity &amp; Digital Signatures: แฮชและความถูกต้องสมบูรณ์</h3>

**Cryptographic Hash Function (ฟังก์ชันแฮชทางวิทยาการรหัสลับ)** คือขั้นตอนวิธีทางคณิตศาสตร์แบบทางเดียว (One-Way Function) ที่แปลงข้อมูลนำเข้าที่มีความยาวเท่าใดก็ได้ ให้กลายเป็นข้อความผลลัพธ์ที่มีความยาวคงที่แน่นอน เรียกว่า **Hash Value, Message Digest, หรือ Fingerprint**

<h4 class="reading-concept-group-title">5 คุณสมบัติสำคัญของฟังก์ชันแฮชทางวิทยาการรหัสลับ:</h4>

1. **ความแน่นอนของผลลัพธ์ (Deterministic):** ข้อมูลนำเข้าชุดเดียวกัน จะได้ค่าแฮชเดิมเสมอทุกครั้ง ไม่มีความสุ่ม
2. **ความต้านทานต่อการคำนวณย้อนกลับ (Preimage Resistance / One-Way Property):** เมื่อทราบค่าแฮช ไม่สามารถแปลงแฮชย้อนกลับมาเป็นข้อมูลต้นฉบับได้ในทางปฏิบัติ
3. **ความต้านทานต่อการหาข้อความอื่นที่ได้แฮชเดิม (Second-Preimage Resistance / Weak Collision Resistance):** เมื่อกำหนดข้อความต้นฉบับมาให้ชุดหนึ่ง เป็นไปไม่ได้ในทางคำนวณที่จะหาข้อความอื่นที่แตกต่างกันแต่ได้ค่าแฮชตรงกัน
4. **ความต้านทานต่อการชนกัน (Collision Resistance / Strong Collision Resistance):** เป็นไปไม่ได้ในทางคำนวณที่จะค้นหาข้อมูลสองชุดใด ๆ ที่แตกต่างกันแต่ให้ค่าแฮชตรงกัน
5. **ปรากฏการณ์หิมะถล่ม (Avalanche Effect):** หากเปลี่ยนแปลงข้อมูลต้นฉบับเพียงแค่ 1 บิต (เช่น เปลี่ยนตัวพิมพ์เล็กเป็นตัวพิมพ์ใหญ่ หรือเติมจุด) ค่าแฮชที่ได้จะเปลี่ยนไปโดยสิ้นเชิง (มากกว่า 50% ของบิตทั้งหมด)

<section class="reading-definition-unit">
<h5>Hashing vs. Encryption: ข้อแตกต่างที่ข้อสอบชอบถาม:</h5>

- **Encryption (การเข้ารหัส):** เป็นกระบวนการสองทาง (Two-Way Process) สามารถถอดรหัสกลับมาเป็นข้อความเดิมได้เสมอเมื่อมีกุญแจ วัตถุประสงค์เพื่อรักษา **ความลับ (Confidentiality)**
- **Hashing (การแฮช):** เป็นกระบวนการทางเดียว (One-Way Process) **ไม่สามารถถอดรหัสกลับได้เด็ดขาด** วัตถุประสงค์เพื่อตรวจสอบ **ความถูกต้องสมบูรณ์ (Integrity)** ว่าข้อมูลไม่ถูกแอบแก้ไขหรือเสียหายระหว่างส่ง
- **ขั้นตอนวิธีแฮช:** SHA-256 (Secure Hash Algorithm 256 บิต ในตระกูล SHA-2), SHA-3 ส่วน MD5 (128 บิต) และ SHA-1 (160 บิต) ถูกพิสูจน์แล้วว่าเกิดการชนกันได้ง่าย จึงถือว่าไม่ปลอดภัยสำหรับงานความมั่นคงปลอดภัยยุคใหม่
- **ตัวอย่างการใช้งานตรวจสอบไฟล์ (File Integrity):** การดาวน์โหลดไฟล์ติดตั้งโปรแกรมหรือเฟิร์มแวร์ แล้วนำมาคำนวณค่า SHA-256 เพื่อเปรียบเทียบกับค่า Hash อ้างอิงที่ผู้ผลิตประกาศไว้ หากค่าตรงกันแสดงว่าไฟล์ไม่ถูกมัลแวร์ดัดแปลงระหว่างทาง

</section>

<section class="reading-definition-unit">
<h5>Password Hashing และบทบาทของ Salt:</h5>

- **ทำไมไม่ควรใช้ SHA-256 แฮชรหัสผ่านโดยตรง:** SHA-256 ออกแบบมาให้ทำงานเร็วมากเพื่อตรวจสอบไฟล์ แต่ความเร็วนี้กลายเป็นจุดอ่อนสำหรับการเก็บรหัสผ่าน เพราะผู้โจมตีสามารถใช้ GPU Cluster คำนวณเดารหัสผ่านได้หลายพันล้านครั้งต่อวินาที
- **ขั้นตอนวิธีแฮชรหัสผ่านเฉพาะทาง:** องค์กรต้องใช้ขั้นตอนวิธีที่ออกแบบมาให้คำนวณช้า (Work-Factor Tunable) และใช้หน่วยความจำสูง เช่น `Argon2id` (มาตรฐานสูงสุดปัจจุบัน), `bcrypt`, `PBKDF2`, หรือ `scrypt`
- **การเติมค่าสุ่ม Salt (Cryptographic Salting):** การสร้างสตริงสุ่มความยาวพอเหมาะเฉพาะตัวสำหรับผู้ใช้แต่ละคน แล้วนำไปต่อท้ายรหัสผ่านก่อนเข้าฟังก์ชันแฮช ช่วยป้องกันการโจมตีด้วยตารางคำนวณล่วงหน้า (**Rainbow Tables**) และทำให้ผู้ใช้สองคนที่ตั้งรหัสผ่านเหมือนกัน มีค่าแฮชที่จัดเก็บในฐานข้อมูลแตกต่างกันอย่างสิ้นเชิง

</section>

<section class="reading-definition-unit">
<h5>Digital Signatures (ลายมือชื่อดิจิทัล):</h5>

กลไกที่ผสานการทำงานของ **Hashing** และ **Asymmetric Encryption** เข้าด้วยกัน เพื่อให้ได้คุณสมบัติความมั่นคงปลอดภัย 3 ประการ:
1. **Integrity (ความสมบูรณ์):** ข้อมูลไม่ถูกดัดแปลง
2. **Authentication (การยืนยันตัวตน):** ยืนยันว่าผู้ส่งเป็นตัวจริง
3. **Non-repudiation (การปฏิเสธความรับผิดชอบไม่ได้):** ผู้ส่งไม่สามารถอ้างได้ว่าตนไม่ได้เป็นผู้ส่งข้อความ

**กระบวนการทำงานของลายมือชื่อดิจิทัล:**
- **ผู้ส่ง (Sender):** นำเอกสารไปคำนวณค่าแฮช &rarr; นำค่าแฮชไปเข้ารหัสด้วย **Private Key ของผู้ส่งเอง** ได้ผลลัพธ์เป็น "ลายมือชื่อดิจิทัล" &rarr; แนบลายมือชื่อไปพร้อมกับเอกสาร
- **ผู้รับ (Recipient):** นำลายมือชื่อดิจิทัลไปถอดรหัสด้วย **Public Key ของผู้ส่ง** จะได้ค่าแฮชเดิม &rarr; คำนวณค่าแฮชของเอกสารที่ได้รับมาเทียบเคียง &rarr; หากค่าแฮชตรงกัน แสดงว่าเอกสารมาจากผู้ส่งจริงและไม่ถูกดัดแปลงแก้ไข

</section>


<div class="reading-semantic-diagram" data-diagram="cryptographyPipelines"></div>

<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การตรวจสอบความถูกต้องของเฟิร์มแวร์และลายมือชื่อดิจิทัล (Avalanche Effect &amp; Digital Signature)</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> วิศวกรเครือข่ายดาวน์โหลดไฟล์อัปเดตเฟิร์มแวร์เราเตอร์หลัก "router_fw_v4.2.bin" ขนาด 120 MB จากเว็บไซต์ผู้ผลิต โดยผู้ผลิตระบุค่า SHA-256 อ้างอิงและลายมือชื่อดิจิทัลไว้บนหน้าเว็บ</div>
  <div class="reading-example-step"><strong>2. การตรวจสอบ File Integrity และปรากฏการณ์หิมะถล่ม (Avalanche Effect):</strong>
    <ul>
      <li>วิศวกรใช้คำสั่ง sha256sum คำนวณค่าแฮชของไฟล์ที่ดาวน์โหลดมา ได้ผลลัพธ์เป็นค่าแฮช 64 ตัวอักษร เช่น a1b2c3...f9 ตรงกับค่าที่ผู้ผลิตประกาศไว้ 100%</li>
      <li>สมมติว่าระหว่างดาวน์โหลด มีมัลแวร์ในเครือข่ายพยายามแทรกโค้ดอันตรายขนาดเพียง 1 บิตลงในเฟิร์มแวร์ จากคุณสมบัติ <strong>Avalanche Effect</strong> ค่า SHA-256 ที่คำนวณได้ใหม่จะเปลี่ยนไปอย่างสิ้นเชิงมากกว่า 50% ของบิตทั้งหมด วิศวกรจะทราบทันทีว่าไฟล์ถูกดัดแปลงและยกเลิกการติดตั้ง</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. การยืนยันตัวตนด้วย Digital Signature (Authenticity &amp; Non-repudiation):</strong>
    <ul>
      <li>ลำพังเพียงค่าแฮชยังไม่พอ เพราะผู้โจมตีที่ทำ Man-in-the-Middle อาจเปลี่ยนทั้งไฟล์เฟิร์มแวร์และเปลี่ยนตัวเลขค่าแฮชบนเว็บเพจปลอมพร้อมกันได้</li>
      <li>ผู้ผลิตจึงใช้ <strong>Private Key ของบริษัทผู้ผลิต</strong> เซ็นรับรอง (Sign) บนค่าแฮชของเฟิร์มแวร์เพื่อสร้าง <strong>Digital Signature</strong></li>
      <li>ตัวเราเตอร์จะตรวจสอบลายมือชื่อด้วย <strong>Public Key ของผู้ผลิต</strong> ที่ฝังอยู่ในชิปฮาร์ดแวร์ หากค่าแฮชที่ถอดรหัสได้ตรงกัน แสดงว่า (1) เฟิร์มแวร์ไม่ถูกแก้ไข (Integrity), (2) มาจากผู้ผลิตตัวจริง (Authentication), และ (3) ผู้ผลิตไม่สามารถปฏิเสธความรับผิดชอบได้ (Non-repudiation)</li>
    </ul>
  </div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): ฟังก์ชันแฮช (เช่น SHA-256) เป็นกระบวนการทางเดียวสำหรับตรวจสอบความถูกต้องสมบูรณ์ (Integrity) โดยการเปลี่ยนเพียง 1 บิตจะทำให้ผลลัพธ์เปลี่ยนไปโดยสิ้นเชิง (Avalanche Effect) และเมื่อนำค่าแฮชไปเข้ารหัสด้วย Private Key ของผู้ส่ง จะได้เป็น ลายมือชื่อดิจิทัล (Digital Signature) ที่ให้ทั้ง Integrity, Authentication และ Non-repudiation</div>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-1-tpm-vs-hsm">5.1.8 Hardware Security: TPM vs. HSM: การรักษาความปลอดภัยระดับฮาร์ดแวร์</h3>

การเก็บกุญแจเข้ารหัสลับไว้บนซอฟต์แวร์หรือในระบบปฏิบัติการมีความเสี่ยงที่จะถูกมัลแวร์ขโมย องค์กรจึงใช้ฮาร์ดแวร์ความปลอดภัยเฉพาะทางในการปกป้องกุญแจ:

<section class="reading-definition-unit">
<h5>TPM (Trusted Platform Module - ISO/IEC 11889):</h5>

ไมโครชิปความปลอดภัยเฉพาะทางที่ถูกบัดกรีติดอยู่บนเมนบอร์ดของคอมพิวเตอร์หรืออุปกรณ์ปลายทาง:
- ทำหน้าที่เป็น **Hardware Root of Trust (รากฐานความน่าเชื่อถือระดับฮาร์ดแวร์)** ของคอมพิวเตอร์แต่ละเครื่อง
- สนับสนุนฟีเจอร์ **Measured Boot และ Secure Boot** โดยวัดค่าแฮชของเฟิร์มแวร์ UEFI, บูตโหลดเดอร์, และเคอร์เนลระบบปฏิบัติการก่อนอนุญาตให้เปิดเครื่อง เพื่อป้องกันไม่ให้ Rootkit หรือมัลแวร์บูตแทรกแซงระบบ
- จัดเก็บกุญแจเข้ารหัสลับของเครื่องเฉพาะ เช่น กุญแจ BitLocker โดยกุญแจจะไม่หลุดออกไปยังระบบปฏิบัติการ

</section>

<section class="reading-definition-unit">
<h5>HSM (Hardware Security Module):</h5>

อุปกรณ์ฮาร์ดแวร์ความปลอดภัยระดับองค์กร (Enterprise Appliance) อาจเป็นการ์ด PCIe ภายในเซิร์ฟเวอร์ หรือเป็นตู้ฮาร์ดแวร์ภายนอกที่เชื่อมต่อผ่านระบบเครือข่าย:
- ออกแบบมาเพื่อสร้าง ปกป้อง และบริหารวงจรกุญแจเข้ารหัสลับระดับองค์กร (Root Certificate Authority Keys, กุญแจธุรกรรมทางการเงิน, กุญแจเซิร์ฟเวอร์คลาวด์)
- มีประสิทธิภาพในการประมวลผลทางคณิตศาสตร์สูงมาก รองรับการถอดรหัสและเซ็นลายมือชื่อดิจิทัลพร้อมกันนับหมื่นรายการต่อวินาที
- ผ่านการรับรองความปลอดภัยระดับสูงตามมาตรฐาน **FIPS 140-2 Level 3 หรือ Level 4**
- มีคุณสมบัติต่อต้านการงัดแงะทางกายภาพ (Tamper-Resistant & Tamper-Evident) หากตรวจพบการพยายามเปิดฝาเครื่องหรือเจาะทะลุ อุปกรณ์จะทำลายกุญแจทิ้งทันที (Zeroization) เพื่อป้องกันข้อมูลรั่วไหล

</section>

<div class="reading-table-wrapper">

| มิติการเปรียบเทียบ | TPM (Trusted Platform Module) | HSM (Hardware Security Module) |
| :--- | :--- | :--- |
| **ตำแหน่งติดตั้ง** | ชิปบนเมนบอร์ดคอมพิวเตอร์ปลายทาง (PC/Laptop) | อุปกรณ์ฮาร์ดแวร์แยกต่างหากในศูนย์ข้อมูล / เครือข่าย |
| **ขอบเขตการใช้งาน** | ประจำเครื่องคอมพิวเตอร์เครื่องเดียว | ให้บริการส่วนกลางแก่องค์กรหรือเซิร์ฟเวอร์ทั้งระบบ |
| **หน้าที่หลัก** | Platform Integrity, Secure Boot, BitLocker Keys | จัดการวงจรกุญแจ, Root CA, ทำธุรกรรมทางการเงิน |
| **มาตรฐานความปลอดภัย** | ISO/IEC 11889 | **FIPS 140-2 / FIPS 140-3 (Level 3/4)** |
| **การป้องกันการงัดแงะ** | พื้นฐานในตัวชิป | มีเซนเซอร์ตรวจจับและทำลายกุญแจอัตโนมัติ (Zeroization) |

</div>

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="obj-5-2">

## Objective 5.2: Understand Security Operations

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การปฏิบัติการด้านความมั่นคงปลอดภัย (Security Operations) คือการเฝ้าระวัง วิเคราะห์ ตรวจจับ และรับมือกับภัยคุกคามที่เกิดขึ้นตลอด 24 ชั่วโมง โดยอาศัยข้อมูลโทรมาตร บันทึกเหตุการณ์ และเครื่องมืออัตโนมัติ:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-logging-telemetry-audit">5.2.1 Logging, Telemetry &amp; Audit Trails: บันทึกเหตุการณ์และเส้นทางการตรวจสอบ</h3>

**Log (บันทึกเหตุการณ์)** คือประวัติการบันทึกกิจกรรม คำขอ การทำงาน และความผิดปกติที่เกิดขึ้นในระบบคอมพิวเตอร์ เครือข่าย หรือแอปพลิเคชันอย่างต่อเนื่อง โดยระบุวัน เวลา (Timestamp), บัญชีผู้ใช้, หมายเลข IP, และเหตุการณ์ที่เกิดขึ้น

<section class="reading-definition-unit">
<h5>Logging vs. Monitoring: ความแตกต่างเชิงแนวคิดที่สำคัญ:</h5>

- **Logging (การบันทึก):** คือกระบวนการจัดเก็บรวบรวมข้อมูลเหตุการณ์ที่เกิดขึ้นในระบบ (Recording Events) ลงในไฟล์หรือฐานข้อมูล
- **Monitoring (การเฝ้าระวัง):** คือการติดตาม สังเกตการณ์ วิเคราะห์ และประเมินพฤติกรรมจากข้อมูล Log เหล่านั้นอย่างต่อเนื่องในเวลาจริง (Observing & Evaluating Behavior)
- **ตัวอย่างข้อสอบชวนคิด:** ไฟร์วอลล์บันทึก Log ว่ามีการปฏิเสธการเชื่อมต่อจากหมายเลข IP หนึ่งเมื่อเวลา 10:15 น. (นี่คือ Logging) ในขณะที่ระบบ Monitoring ตรวจพบว่า IP เดียวกันนี้พยายามเชื่อมต่อเข้ามาหลายพันครั้งภายในเวลาเพียง 60 วินาที จึงส่งสัญญาณแจ้งเตือนการสแกนพอร์ต (นี่คือ Monitoring)
- **ข้อสรุปสำคัญ:** *"การมี Log ไม่ได้หมายความว่ามีคนกำลังตรวจจับความผิดปกติ"* หากไม่มีการเฝ้าระวังและการตั้งเงื่อนไขเตือนภัยที่มีประสิทธิภาพ

</section>

<section class="reading-definition-unit">
<h5>6 แหล่ง Log สำคัญในระบบไอที (The 6 Essential Log Sources):</h5>

1. **Authentication Logs:** บันทึกการเข้าสู่ระบบสำเร็จ (Login Success), ล้มเหลว (Login Failure), การล็อกบัญชี (Lockout), และการยกระดับสิทธิ์
2. **Operating System Logs:** การเริ่มหรือหยุดบริการ (Service Start/Stop), ข้อผิดพลาดของเคอร์เนล, และการแก้ไขไฟล์ระบบ
3. **Application Logs:** ข้อผิดพลาดในการประมวลผล, ธุรกรรมล้มเหลว, และการเปลี่ยนแปลงสิทธิ์ภายในแอปพลิเคชัน
4. **Network &amp; Firewall Logs:** ข้อมูล Ingress/Egress, Source/Destination IP, Port, Protocol, และคำสั่ง Allow/Deny
5. **Endpoint Security Logs:** บันทึกการตรวจพบมัลแวร์, การเปิดสคริปต์ที่น่าสงสัย, และข้อมูลโทรมาตรจากระบบ EDR
6. **Cloud Audit Logs:** บันทึกการเรียกใช้ Cloud API (เช่น AWS CloudTrail), การปรับแต่งสิทธิ์ IAM, และการแก้ไข Infrastructure

</section>

<h4 class="reading-concept-group-title">ความสำคัญของ Log และเส้นทางการตรวจสอบ (Audit Trails):</h4>

- **กายวิภาคของ Log ที่มีคุณภาพ:** Log ที่สมบูรณ์ต้องมี 6 ข้อมูลหลักเสมอ: วันเวลา (Timestamp), อุปกรณ์ต้นกำเนิด (Source Host), ประเภทเหตุการณ์ (Event Type), ตัวตนของผู้ใช้/โปรเซส (Identity), ผลลัพธ์ (Success/Failure), และบริบทแวดล้อม (Context)
- **การระบุผู้รับผิดชอบ (Accountability &amp; Non-repudiation):** ทำให้ทราบได้อย่างชัดเจนว่าใคร ทำอะไร ที่ไหน เมื่อไหร่ และอย่างไร
- **ความสำคัญยิ่งยวดของ NTP (Network Time Protocol):** หากนาฬิกาของเซิร์ฟเวอร์แต่ละเครื่องไม่ตรงกัน การนำ Log จากไฟร์วอลล์และเซิร์ฟเวอร์มาเทียบเคียงลำดับเหตุการณ์จะผิดเพี้ยนไปหมด ดังนั้น ทุกระบบในองค์กรต้องซิงโครไนซ์เวลาผ่านเซิร์ฟเวอร์ NTP กลางที่มีการพิสูจน์ตัวตน (Cryptographic NTP Authentication) เพื่อป้องกันการปลอมแปลงเวลา (Time Spoofing) ซึ่งจะทำลายความน่าเชื่อถือของพยานหลักฐานดิจิทัล และต้องควบคุมการเข้าถึงเพื่อป้องกันการถูกใช้เป็นฐานโจมตีแบบ NTP Amplification DDoS
- **กรณีศึกษาการสืบสวนย้อนหลังผ่าน Archive (Dwell Time):** การโจมตีของกลุ่มแฮกเกอร์ขั้นสูงที่เพิ่งตรวจพบในเดือนนี้ หลักฐานมักบ่งชี้ว่าผู้โจมตีแฝงตัวอยู่ในระบบมาตั้งแต่ 3 ถึง 6 เดือนก่อนหน้า (Dwell Time) การจัดเก็บ Log เก่า (Archiving) อย่างปลอดภัยด้วยสื่อแบบ Write-Once-Read-Many (WORM) จึงจำเป็นอย่างยิ่งในการสืบสวนย้อนรอยหาจุดเริ่มต้นของการบุกรุก

<h4 class="reading-concept-group-title">4 ขั้นตอนการบริหารจัดการ Log (Four Stages of Logging):</h4>

1. **Log Aggregation (การรวบรวมบันทึกเข้าสู่ศูนย์กลาง):** ส่ง Log จากอุปกรณ์ทั้งหมด (Firewalls, Servers, Switches, Endpoints) มารวมไว้ที่เซิร์ฟเวอร์กลาง ป้องกันไม่ให้แฮกเกอร์เข้าไปลบ Log บนเครื่องที่ถูกเจาะ
2. **Alerting (การแจ้งเตือนภัย):** ตรวจจับเหตุการณ์ผิดปกติตามเกณฑ์ที่กำหนดและส่งการแจ้งเตือนไปยังเจ้าหน้าที่ SOC ทันที
3. **Reporting (การจัดทำรายงาน):** สรุปแนวโน้ม สถิติการตรวจจับ และรายงานความสอดคล้องตามกฎหมายสำหรับผู้บริหารและผู้ตรวจสอบ
4. **Archiving (การจัดเก็บถาวร):** จัดเก็บ Log เก่าลงในสื่อจัดเก็บระยะยาวที่มีคุณสมบัติ WORM เพื่อป้องกันการแก้ไข และเก็บรักษาไว้ตามระยะเวลาที่กฎหมายกำหนด (Retention Period) โดยไม่เก็บเกินความจำเป็นเพื่อจำกัดต้นทุนและความเสี่ยงด้านความเป็นส่วนตัว

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-monitoring-siem-correlation">5.2.2 Security Monitoring, SIEM &amp; Telemetry Correlation: การเฝ้าระวังและระบบ SIEM</h3>

<section class="reading-definition-unit">
<h5>Agent-Based vs. Agentless Monitoring:</h5>

- **Agent-Based Monitoring:** ติดตั้งโปรแกรมตัวแทน (Agent) ลงบนเครื่องเป้าหมายโดยตรง สามารถดึงข้อมูลระบบได้ละเอียด ลึกซึ้ง และมีประสิทธิภาพสูง แต่กินทรัพยากรเครื่องและต้องคอยอัปเดต Agent
- **Agentless Monitoring:** ใช้โพรโทคอลมาตรฐานเครือข่ายในการดึงข้อมูลจากระยะไกล (เช่น SNMP, WMI, SSH, NetFlow) ไม่ต้องติดตั้งโปรแกรมเพิ่มในเครื่องเป้าหมาย แต่ข้อมูลที่ได้อาจไม่ละเอียดเท่ากับการมี Agent

</section>

<section class="reading-definition-unit">
<h5>SIEM (Security Information and Event Management):</h5>

ระบบศูนย์กลางอัจฉริยะของศูนย์ปฏิบัติการเฝ้าระวังความมั่นคงปลอดภัย (SOC) ที่รวบรวมข้อมูล Log และเหตุการณ์จากอุปกรณ์ทุกชนิดมาจัดหมวดหมู่ให้เป็นมาตรฐานเดียวกัน (Normalization) และวิเคราะห์ความสัมพันธ์แบบเรียลไทม์

</section>

<section class="reading-definition-unit">
<h5>Event Correlation (การวิเคราะห์ความเชื่อมโยงของเหตุการณ์):</h5>

หัวใจสำคัญที่สุดของ SIEM คือการนำเหตุการณ์ที่เกิดขึ้นแยกจากกันมาร้อยเรียงเข้าด้วยกัน:
- *เหตุการณ์ที่ 1:* ไฟร์วอลล์ตรวจพบการสแกนพอร์ตจาก IP ภายนอก (ถือเป็นเหตุการณ์ความเสี่ยงต่ำ)
- *เหตุการณ์ที่ 2:* เครื่องโดเมนคอนโทรลเลอร์บันทึกการล็อกอินล้มเหลว 50 ครั้งใน 1 นาที (เสี่ยงปานกลาง)
- *เหตุการณ์ที่ 3:* มีการล็อกอินสำเร็จในครั้งที่ 51 นอกเวลาทำการ
- *เหตุการณ์ที่ 4:* เครื่องปลายทางมีการรันคำสั่ง PowerShell ที่น่าสงสัย
- **ผลลัพธ์ Correlation:** หากมองแยกชิ้น เหตุการณ์เหล่านี้อาจดูเหมือนเรื่องทั่วไป แต่เมื่อ SIEM นำมาร้อยเรียงกัน ระบบจะสามารถสรุปได้ทันทีว่า **"กำลังเกิดการโจมตีแบบ Brute-Force สำเร็จและมีการสั่งรันโค้ดเจาะระบบ"** พร้อมยกระดับเป็นแจ้งเตือนวิกฤต (Critical Incident Alert) ทันที

</section>

<div class="reading-semantic-diagram" data-diagram="siemTelemetryPipeline"></div>


<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การตรวจจับการโจมตีข้ามเซิร์ฟเวอร์ด้วย SIEM Event Correlation</div>
  <div class="reading-example-step"><strong>1. สถานการณ์เริ่มต้น (Initial Situation):</strong> องค์กรมีเซิร์ฟเวอร์ 5 เครื่องในระบบงาน และได้รับเหตุการณ์ล็อกอินล้มเหลว (Event ID 4625) เฉลี่ยวันละหลายร้อยครั้งจากผู้ใช้ทั่วไปที่พิมพ์รหัสผ่านผิด หากดูแยกทีละเครื่องจะไม่มีอะไรผิดปกติ</div>
  <div class="reading-example-step"><strong>2. เหตุการณ์การโจมตีแบบ Password Spraying:</strong>
    <ul>
      <li>ผู้โจมตีสุ่มใช้รหัสผ่านยอดนิยมอย่าง "Winter2026!" ยิงทดสอบไปยังบัญชีพนักงาน 100 คนบนเซิร์ฟเวอร์ 5 เครื่องพร้อมกัน โดยเว้นช่วงไม่ให้บัญชีใดบัญชีหนึ่งถูกล็อก</li>
      <li>เซิร์ฟเวอร์แต่ละเครื่องบันทึกเฉพาะล็อกอินล้มเหลวเครื่องละ 20 ครั้ง ซึ่งผู้ดูแลระบบแต่ละเครื่องมองว่าเป็นเหตุการณ์ปกติ (Isolated Log Noise)</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. พลังของ SIEM Event Correlation (Connecting the Dots):</strong>
    <ul>
      <li>ระบบ SIEM ดึงล็อก (Log Ingestion &amp; Aggregation) จากเซิร์ฟเวอร์ทั้ง 5 เครื่อง, ไฟร์วอลล์, และ VPN Gateway มารวมที่ศูนย์กลาง</li>
      <li><strong>Correlation Rule:</strong> มีการตั้งกฎว่า <em>"หากมี IP แอดเดรสเดียวกัน พยายามล็อกอินล้มเหลวด้วยรหัสผ่านเดียวกัน ไปยังบัญชีผู้ใช้มากกว่า 10 บัญชี ภายในเวลา 5 นาที ข้ามเครื่องเซิร์ฟเวอร์มากกว่า 2 เครื่อง ให้จัดเป็นภัยคุกคามระดับสูง"</em></li>
      <li>เครื่องยนต์ Event Correlation ทำการจับคู่เวลา (Time-window), IP ต้นทาง และชื่อผู้ใช้ข้ามอุปกรณ์ทั้ง 5 เครื่องเข้าด้วยกัน แล้วสรุปเป็น <strong>High-Severity Alert: Distributed Password Spraying Attack</strong> ทันที</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. การตอบสนองอัตโนมัติ (Automated Containment):</strong> ระบบ SIEM สั่งการไปยังไฟร์วอลล์เพื่อขึ้นบัญชีดำบล็อก IP ของผู้โจมตี และแจ้งเตือนให้นักวิเคราะห์ SOC ดำเนินการรีเซ็ตรหัสผ่านบัญชีพนักงานที่มีความเสี่ยง</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): Log Aggregation คือการรวบรวมล็อกมาไว้ที่เดียว แต่หัวใจสำคัญที่แท้จริงของ SIEM คือ Event Correlation ซึ่งเป็นการเชื่อมโยงความสัมพันธ์ของล็อกหลายร้อยรายการจากหลายอุปกรณ์เข้าด้วยกันตามเวลาและตรรกะ เพื่อตรวจจับการโจมตีที่ซับซ้อนซึ่งไม่สามารถมองเห็นได้จากการดูล็อกทีละเครื่อง</div>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-edr-antivirus">5.2.3 Endpoint Detection &amp; Response (EDR) and Antivirus: การปกป้องเครื่องปลายทาง</h3>

<section class="reading-definition-unit">
<h5>Traditional Antivirus (แอนติไวรัสแบบดั้งเดิม):</h5>

ทำงานโดยอาศัยการตรวจจับด้วย **ลายเซ็น (Signature-based Detection)** คือเปรียบเทียบไฟล์กับฐานข้อมูลไวรัสที่รู้จัก หากแฮกเกอร์เขียนมัลแวร์ใหม่ (Zero-day) หรือปรับเปลี่ยนโค้ดเล็กน้อย (Polymorphic Malware) แอนติไวรัสแบบเดิมจะไม่สามารถตรวจจับได้

</section>

<section class="reading-definition-unit">
<h5>Next-Gen Antivirus (NGAV) &amp; EDR (Endpoint Detection and Response):</h5>

เทคโนโลยีการปกป้องเครื่องปลายทางยุคใหม่ที่ก้าวข้ามข้อจำกัดของลายเซ็น:
- **Heuristic &amp; Behavioral Analysis:** ตรวจสอบพฤติกรรมการทำงานของโปรแกรม เช่น การพยายามฉีดโค้ดเข้าไปในโพรเซสอื่น การแก้ไขรีจิสทรีสำคัญ หรือการพยายามเข้ารหัสไฟล์จำนวนมาก แม้จะไม่เคยรู้จักมัลแวร์ตัวนี้มาก่อนแต่หากพฤติกรรมเป็นอันตราย ระบบจะบล็อกทันที
- **Continuous Telemetry Recording:** บันทึกประวัติกิจกรรมทุกอย่างที่เกิดขึ้นบนเครื่อง (Process Tree, การเชื่อมต่อเครือข่าย, การเปิดไฟล์) เพื่อใช้ในการสืบสวน
- **Automated Host Isolation:** เมื่อตรวจพบภัยคุกคาม EDR สามารถตัดการเชื่อมต่อเครือข่ายของเครื่องนั้นโดยอัตโนมัติทันที เพื่อกักกันโรคไม่ให้แพร่ระบาดไปยังเครื่องอื่น

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-dlp-controls">5.2.4 Data Loss Prevention (DLP) Across Environments: การป้องกันข้อมูลรั่วไหล</h3>

**DLP (Data Loss Prevention)** คือชุดเทคโนโลยีที่ออกแบบมาเพื่อตรวจจับ ตรวจสอบ และป้องกันไม่ให้ข้อมูลสำคัญขององค์กรรั่วไหลออกไปภายนอกโดยไม่ได้รับอนุญาต โดยแบ่งการทำงานตามสถาปัตยกรรมออกเป็น 3 รูปแบบ:

- **Host-based / Endpoint DLP:** ติดตั้ง Agent บนคอมพิวเตอร์พนักงาน ทำหน้าที่ควบคุมการเสียบแฟลชไดรฟ์ USB, ป้องกันการก็อปปี้ข้อมูลลงคลิปบอร์ด, ควบคุมการสั่งพิมพ์เอกสาร และตรวจจับการถ่ายโอนไฟล์ลงสื่อภายนอก
- **Network DLP:** ติดตั้งอุปกรณ์หรือพร็อกซีที่ขอบเขตเครือข่าย คอยสแกนข้อมูลที่กำลังเดินทางออกจากองค์กร (Egress Traffic) ผ่านโพรโทคอลอีเมล (SMTP), เว็บ (HTTP/HTTPS), หรือ FTP เพื่อตรวจหาแพทเทิร์นข้อมูลสำคัญ เช่น หมายเลขบัตรประชาชน หรือเลขบัตรเครดิต 16 หลัก
- **Cloud DLP:** ตรวจสอบและบังคับใช้นโยบายความปลอดภัยบนพื้นที่จัดเก็บบนคลาวด์และแอปพลิเคชัน SaaS (เช่น Google Drive, OneDrive, AWS S3) เพื่อป้องกันการตั้งค่าแชร์ไฟล์เป็น Public สู่สาธารณะ

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-snmp-traps-network-monitoring">5.2.5 Network Monitoring &amp; Protocol Traps: การเฝ้าระวังเครือข่ายและกับดักโพรโทคอล</h3>

**SNMP (Simple Network Management Protocol)** คือโพรโทคอลมาตรฐานที่ใช้ในการบริหารและเฝ้าระวังอุปกรณ์เครือข่าย (เราเตอร์ สวิตช์ ไฟร์วอลล์ และเซิร์ฟเวอร์):

- **Polling (การดึงข้อมูลตามรอบ):** เซิร์ฟเวอร์บริหารจัดการ (SNMP Manager) จะส่งคำขอไปยังอุปกรณ์เป็นระยะ ๆ (เช่น ทุก 5 นาที) เพื่อสอบถามสถานะ
- **SNMP Traps (การแจ้งเตือนฉับพลัน):** เมื่อเกิดเหตุการณ์วิกฤตบนอุปกรณ์เครือข่าย (เช่น สายลิงก์สัญญาณขาด, อุณหภูมิเครื่องสูงเกินเกณฑ์, หรือมีการพยายามล็อกอินผิดพลาด) อุปกรณ์จะทำหน้าที่เป็น Agent ส่งข้อความแจ้งเตือน **แบบฉับพลันโดยไม่ต้องรอให้ถาม (Unsolicited Alert)** ไปยัง SNMP Manager ทันทีผ่านพอร์ต **UDP 162**
- **SNMPv3:** เป็นเวอร์ชันเดียวที่ปลอดภัยสำหรับองค์กร เนื่องจากเพิ่มระบบการยืนยันตัวตนและการเข้ารหัสลับข้อมูล (ต่างจาก SNMPv1 และ v2c ที่ส่งข้อมูลด้วยข้อความธรรมดาและใช้ Community String ที่คาดเดาง่าย)

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-alert-triage-prioritization">5.2.6 Alert Triage &amp; Risk Matrix Prioritization: การคัดกรองและการจัดลำดับความสำคัญ</h3>

ในแต่ละวัน ศูนย์ SOC อาจได้รับการแจ้งเตือนนับหมื่นรายการ การคัดกรองที่มีประสิทธิภาพจึงเป็นหัวใจสำคัญ:

<section class="reading-definition-unit">
<h5>Event vs. Alert vs. Incident: 3 คำสำคัญที่ห้ามสับสน:</h5>

- **Event (เหตุการณ์ทั่วไป):** สิ่งที่เกิดขึ้นในระบบที่สามารถสังเกตและบันทึกได้ เช่น ผู้ใช้เข้าสู่ระบบสำเร็จ, การสร้างไฟล์ใหม่, การส่งคำขอ DNS ส่วนใหญ่เป็นกิจกรรมปกติ
- **Alert (การแจ้งเตือน):** ข้อความเตือนที่ระบบสร้างขึ้นเมื่อตรวจพบ Event ที่ตรงตามเงื่อนไขหรือเกินขอบเขตที่ตั้งไว้ บ่งบอกว่าอาจมีความผิดปกติที่ต้องตรวจสอบ
- **Incident (เหตุการณ์ความมั่นคงปลอดภัย):** เหตุการณ์ที่มีผลกระทบในทางลบ (Adverse Impact) หรือเป็นภัยคุกคามต่อความลับ (Confidentiality), ความถูกต้องสมบูรณ์ (Integrity), หรือความพร้อมใช้งาน (Availability) ของระบบและข้อมูล ต้องมีการเปิดกระบวนการ Incident Response รับมือทันที
- **ตัวอย่างเชื่อมโยง:** ผู้ใช้พิมพ์รหัสผ่านถูกต้องเข้าสู่ระบบ = **Event**; มีการล็อกอินสำเร็จจากต่างประเทศในเวลาไล่เลี่ยกับการล็อกอินในกรุงเทพฯ = **Alert**; ตรวจพบว่าผู้โจมตีใช้รหัสผ่านที่ขโมยมาเข้าถึงฐานข้อมูลลูกค้าและดาวน์โหลดข้อมูล = **Incident**

</section>

<section class="reading-definition-unit">
<h5>Event Correlation: การเชื่อมโยงเหตุการณ์หาความจริง:</h5>

**Event Correlation** คือกระบวนการวิเคราะห์ความสัมพันธ์เชิงตรรกะและเวลาของเหตุการณ์หลายรายการที่บันทึกไว้ในระบบต่าง ๆ เพื่อตรวจจับการโจมตีที่ซับซ้อน ตัวอย่างลำดับเหตุการณ์ 5 ขั้นตอนที่ข้อสอบชอบยก:

1. **Multiple Failed Logins:** ตรวจพบการล็อกอินล้มเหลวต่อเนื่อง 20 ครั้งภายใน 3 นาทีบนเครื่องผู้ใช้ (การสุ่มรหัสผ่าน / Password Guessing)
2. **Successful Login:** มีการล็อกอินสำเร็จในครั้งถัดมา (บ่งชี้ว่า Credential ถูกเจาะสำเร็จ)
3. **Privilege Escalation:** บัญชีดังกล่าวเปิด PowerShell และพยายามขอใช้สิทธิ์ระดับ Administrator (การยกระดับสิทธิ์โดยมิชอบ)
4. **Access to Sensitive Files:** มีการเข้าถึงโฟลเดอร์ฐานข้อมูลการเงินของบริษัท (การเข้าถึงข้อมูลอ่อนไหว)
5. **Correlation Alert:** SIEM รวบรวม 4 เหตุการณ์นี้และสรุปผลแจ้งเตือนเป็น **Potential Account Compromise (การถูกยึดครองบัญชี)** พร้อมเปิด Incident ทันที

</section>

<section class="reading-definition-unit">
<h5>6 สถานการณ์จำลองการใช้งานในศูนย์ SOC (Common SOC Use Cases):</h5>

1. **Multiple Failed Logins:** การพยายามล็อกอินล้มเหลวซ้ำ ๆ บ่งชี้ถึงการโจมตีแบบ Brute-Force หรือ Password Spraying
2. **Impossible Travel:** มีการเข้าสู่ระบบจาก 2 สถานที่ห่างไกลกันในเวลาสั้นเกินกว่าจะเดินทางได้จริง (เช่น กรุงเทพฯ และ ลอนดอน ในเวลาห่างกัน 30 นาที) แต่อาจเกิด False Positive ได้หากผู้ใช้เชื่อมต่อผ่าน Corporate VPN
3. **Privilege Abuse:** บัญชีผู้ใช้ทั่วไปดำเนินการเปลี่ยนแปลงสิทธิ์ระบบโดยไม่มีเอกสาร Change Request รองรับ
4. **Data Exfiltration:** ปริมาณข้อมูลส่งออกภายนอกพุ่งสูงผิดปกติในช่วงนอกเวลาทำการ โดยเฉพาะการเชื่อมต่อไปยัง IP ปลายทางที่ไม่รู้จัก
5. **Suspicious PowerShell:** การสั่งรันคำสั่ง PowerShell แบบ Base64 Encoded หรือสั่งดาวน์โหลดไฟล์จากอินเทอร์เน็ตโดยตรงผ่านบรรทัดคำสั่ง
6. **Malware Outbreak:** มีการแจ้งเตือนไฟล์ที่มี Hash ต้องสงสัยแพร่กระจายไปยังคอมพิวเตอร์หลายเครื่องในเครือข่ายพร้อมกัน

</section>

<section class="reading-definition-unit">
<h5>False Positive vs. False Negative: ข้อสอบออกบ่อยมาก:</h5>

- **False Positive (การแจ้งเตือนผิดพลาด):** ระบบแจ้งเตือนว่ามีภัยคุกคาม แต่ความจริงเป็นกิจกรรมปกติ (เช่น แจ้งเตือนว่าพนักงานส่งมัลแวร์ ทั้งที่เป็นเพียงการส่งสคริปต์รายงานประจำวัน) ผลกระทบ: ก่อให้เกิดภาวะ **Alert Fatigue (ความเหนื่อยล้าจากการแจ้งเตือน)** ทำให้นักวิเคราะห์ทำงานหนักเกินไปและอาจมองข้ามภัยจริง
- **False Negative (การตรวจจับล้มเหลว / มองไม่เห็นภัย):** เกิดการโจมตีหรือมีมัลแวร์บุกรุกเข้ามาในระบบจริง แต่ระบบรักษาความปลอดภัย **ตรวจจับไม่พบและไม่มีการแจ้งเตือนใด ๆ** ผลกระทบ: **เป็นสถานการณ์ที่อันตรายและสร้างความเสียหายสูงสุด** เพราะองค์กรจะไม่รู้ตัวว่าถูกเจาะระบบ

</section>

<section class="reading-definition-unit">
<h5>การจัดลำดับความสำคัญตามเมทริกซ์ความเสี่ยง (Risk Matrix Prioritization):</h5>

การจัดลำดับการตอบสนองของศูนย์ SOC ต้องประเมินจากหลายปัจจัยร่วมกัน ได้แก่ **Severity, Business Impact, Likelihood, Business Criticality, Asset Exposure, และ Urgency**:

<div class="reading-table-wrapper">

| Urgency / Impact | High Impact (ผลกระทบสูง) | Medium Impact (ผลกระทบปานกลาง) | Low Impact (ผลกระทบต่ำ) |
| :--- | :--- | :--- | :--- |
| **High Urgency (เร่งด่วนสูง)** | **P1 (Critical):** โจมตีเซิร์ฟเวอร์หลัก | **P2 (Major):** ระบบงานสาขาย่อยติดขัด | **P3 (Moderate):** เครื่องพนักงาน 1 เครื่อง |
| **Medium Urgency (เร่งด่วนปานกลาง)** | **P2 (Major):** ช่องโหว่สำคัญบนระบบหลังบ้าน | **P3 (Moderate):** การตั้งค่าผิดพลาดทั่วไป | **P4 (Minor):** โปรแกรมแจ้งเตือนข้อผิดพลาด |
| **Low Urgency (เร่งด่วนต่ำ)** | **P3 (Moderate):** ระบบทดสอบถูกโจมตี | **P4 (Minor):** ข้อมูล Log ค้างส่ง | **P5 (Informational):** บันทึกสถิติเพื่อทบทวน |

</div>

- **เกณฑ์พิจารณาเปรียบเทียบ:** สัญญาณเตือน Suspicious Login บนเซิร์ฟเวอร์ Production Domain Controller ต้องถูกจัดเป็น **P1** เสมอ ในขณะที่การพยายามสแกนพอร์ตบนเซิร์ฟเวอร์ทดสอบในห้อง Lab ที่ไม่มีข้อมูลจริงจะถูกจัดเป็น **P4 หรือ P5**

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-threat-actors-motivations">5.2.7 Threat Actors &amp; Motivations: ผู้ก่อภัยคุกคามและแรงจูงใจ</h3>

การเข้าใจแรงจูงใจและความสามารถของผู้โจมตี ช่วยให้องค์กรออกแบบมาตรการป้องกันได้อย่างตรงจุด:

<section class="reading-definition-unit">
<h5>1. กลุ่มที่ได้รับการสนับสนุนจากรัฐบาล (Nation-State / APTs):</h5>

กลุ่มแฮกเกอร์ระดับสูงที่ได้รับทุนสนับสนุนจากรัฐบาลต่างชาติ (Advanced Persistent Threats) มีทรัพยากรมหาศาล ความเชี่ยวชาญสูงสุด และความอดทนในการฝังตัวระยะยาว แรงจูงใจหลัก: ผลประโยชน์ทางภูมิรัฐศาสตร์ การจารกรรมข้อมูลความลับระดับชาติ (Espionage) หรือการก่อวินาศกรรมโครงสร้างพื้นฐาน

</section>

<section class="reading-definition-unit">
<h5>2. อาชญากรไซเบอร์ (Cybercriminals):</h5>

กลุ่มอาชญากรรมที่มุ่งแสวงหา **ผลประโยชน์ทางการเงิน (Financial Gain)** เป็นหลัก ผ่านการปล่อยมัลแวร์เรียกค่าไถ่ (Ransomware), การขโมยข้อมูลบัตรเครดิตไปขายในดาร์กเว็บ, หรือการหลอกโอนเงินทางธุรกิจ (Business Email Compromise - BEC)

</section>

<section class="reading-definition-unit">
<h5>3. แฮกเกอร์นักกิจกรรม (Hacktivists):</h5>

บุคคลหรือกลุ่มบุคคลที่โจมตีระบบเพื่อขับเคลื่อน **อุดมการณ์ทางการเมือง สังคม ศาสนา หรือสิ่งแวดล้อม** เช่น การเจาะเว็บไซต์เพื่อเปลี่ยนหน้าประกาศ (Defacement) หรือการยิงถล่มด้วย DDoS เพื่อปิดกั้นการเข้าถึง

</section>

<section class="reading-definition-unit">
<h5>4. บุคคลภายในองค์กร (Insiders):</h5>

พนักงาน คู่ค้า หรือผู้รับเหมาที่มีสิทธิ์เข้าถึงระบบถูกต้องตามกฎหมาย:
- **Malicious Insider (ผู้ไม่ประสงค์ดี):** ใช้สิทธิ์ที่ตนมีขโมยข้อมูลเพื่อขายหรือทำลายระบบเพื่อแก้แค้น
- **Accidental / Negligent Insider (ความประมาทเลินเล่อ):** พนักงานทั่วไปที่เผลอกดลิงก์ฟิชชิ่ง หรือตั้งค่าความปลอดภัยผิดพลาดโดยไม่มีเจตนาร้าย

</section>

<section class="reading-definition-unit">
<h5>5. ผู้โจมตีมือใหม่ (Script Kiddies):</h5>

ผู้โจมตีที่มีทักษะทางเทคนิคต่ำ ใช้เครื่องมือและสคริปต์สำเร็จรูปที่ดาวน์โหลดจากอินเทอร์เน็ตในการโจมตีเป้าหมายแบบสุ่ม แรงจูงใจ: ความคึกคะนอง เรียกร้องความสนใจ หรืออวดเพื่อน

</section>

<div class="reading-table-wrapper">

| ประเภท Threat Actor | แรงจูงใจหลัก | ระดับความสามารถและทรัพยากร | เป้าหมายทั่วไป |
| :--- | :--- | :--- | :--- |
| **Nation-State (APT)** | จารกรรมข้อมูล, ผลประโยชน์ประเทศ | สูงสุด (งบประมาณและเครื่องมือระดับชาติ) | รัฐบาล, กองทัพ, โครงสร้างพื้นฐานสำคัญ |
| **Cybercriminals** | **เงินและผลประโยชน์ทางเศรษฐกิจ** | ปานกลางถึงสูงมาก (จัดตั้งเป็นองค์กร) | ธนาคาร, องค์กรธุรกิจ, โรงพยาบาล |
| **Hacktivists** | อุดมการณ์, การเมือง, สังคม | ต่ำถึงปานกลาง | องค์กรที่ขัดต่ออุดมการณ์, หน่วยงานรัฐ |
| **Insiders** | เงิน, ความแค้น, หรือความประมาท | มีสิทธิ์เข้าถึงระบบภายในโดยตรง | ทรัพย์สินทางปัญญา, ฐานข้อมูลลูกค้า |
| **Script Kiddies** | ความสนุก, อวดโอ้, ลองของ | ต่ำมาก (ใช้เครื่องมือสำเร็จรูป) | ระบบที่มีช่องโหว่ชัดเจนและเปิดสู่สาธารณะ |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-cti-iocs-pyramid">5.2.8 Cyber Threat Intelligence (CTI) &amp; Indicators of Compromise: ข่าวกรองภัยคุกคาม</h3>

**CTI (Cyber Threat Intelligence)** คือข้อมูลข่าวกรองเกี่ยวกับภัยคุกคามและกลุ่มผู้โจมตีที่ผ่านการรวบรวม กลั่นกรอง วิเคราะห์บริบท และแปลงเป็นความรู้เชิงปฏิบัติการสำหรับช่วยตัดสินใจด้านความมั่นคงปลอดภัย (Actionable Security Knowledge)

<section class="reading-definition-unit">
<h5>6 คำถามหลักที่ CTI ช่วยให้องค์กรตอบได้:</h5>

- **ใครอาจโจมตีเรา? (Who might attack us?):** ระบุกลุ่ม Threat Actor และแรงจูงใจ
- **เรากำลังเผชิญภัยคุกคามใด? (What threats are we facing?):** แคมเปญการโจมตีที่มุ่งเป้ามายังอุตสาหกรรมเดียวกัน
- **ผู้โจมตีใช้วิธีการใด? (How do attackers operate?):** กลยุทธ์และเครื่องมือที่ใช้บุกรุก
- **ช่องโหว่ใดในระบบของเราที่ตกเป็นเป้าหมาย? (Which vulnerabilities are targeted?):** ช่องโหว่ที่มีโค้ดโจมตี (Exploit) แพร่หลาย
- **ควรเฝ้าดู Indicators ใดในระบบ? (What indicators should be monitored?):** ค่าแฮช IP หรือโดเมนที่เกี่ยวข้อง
- **ควรปรับมาตรการป้องกันอย่างไร? (How should defenses be adjusted?):** ปรับจูนไฟร์วอลล์และกฎ SIEM ให้ตรงเป้าหมาย

<p class="reading-note-text"><em>ข้อแตกต่างระหว่างข้อมูลดิบกับข่าวกรอง:</em> รายการ IP อันตรายที่เป็นเพียงตัวเลขดิบคือ Data แต่เมื่อนำมาวิเคราะห์ระบุกลุ่มแฮกเกอร์ ความน่าเชื่อถือ และความเกี่ยวข้องกับระบบงานขององค์กร นั่นคือ <strong>Threat Intelligence</strong> ที่นำไปใช้ตัดสินใจได้จริง</p>

</section>

<h4 class="reading-concept-group-title">3 ระดับของข่าวกรองภัยคุกคาม (3 Levels of CTI):</h4>

- **Strategic CTI (ระดับยุทธศาสตร์):** ภาพรวมความเสี่ยง แนวโน้มภัยคุกคาม และผลกระทบต่อธุรกิจ สำหรับผู้บริหารระดับสูง (CISO, Board of Directors) ใช้ตัดสินใจวางแผนงบประมาณและนโยบาย
- **Operational CTI (ระดับปฏิบัติการ):** ข้อมูลเจาะลึกเกี่ยวกับกลุ่มแฮกเกอร์ เทคนิค และแคมเปญการโจมตีเฉพาะ สำหรับหัวหน้าทีมความปลอดภัยใช้ประเมินความพร้อมขององค์กร
- **Tactical CTI (ระดับเทคนิค):** ตัวบ่งชี้ความเสียหายทางเทคนิค (IOCs) สำหรับส่งให้ระบบตรวจจับอัตโนมัติ (SIEM, Firewall, EDR) นำไปบล็อกการเชื่อมต่อทันที

<section class="reading-definition-unit">
<h5>5 ตัวบ่งชี้ความเสียหายทางเทคนิค (The 5 Core Indicators of Compromise - IOCs):</h5>

IOC คือหลักฐานหรือร่องรอยทางดิจิทัลที่บ่งชี้ว่าระบบคอมพิวเตอร์ถูกบุกรุกหรือมีกิจกรรมอันตรายเกิดขึ้น ประกอบด้วย 5 รูปแบบหลัก:

1. **Malicious IP Address:** หมายเลข IP ของเซิร์ฟเวอร์สั่งการ (Command &amp; Control - C2) หรือเครื่องที่ใช้โจมตี
2. **Suspicious Domain Name:** ชื่อโดเมนที่แฮกเกอร์จดทะเบียนไว้เพื่อหลอกล่อหรือใช้สื่อสารกับมัลแวร์
3. **Malicious URL:** ลิงก์ที่นำเหยื่อไปยังเว็บไซต์อันตราย หน้าฟิชชิ่ง หรือไฟล์ดาวน์โหลดมัลแวร์
4. **File Hash (MD5, SHA-256):** ลายพิมพ์ดิจิทัลของไฟล์มัลแวร์ ใช้สำหรับตรวจสอบเทียบเคียงไฟล์ในระบบ
5. **Unusual Registry Key Modification:** การแก้ไขค่าคีย์ในระบบรีจิสทรีของ Windows เพื่อให้มัลแวร์เริ่มทำงานอัตโนมัติทุกครั้งที่เปิดเครื่อง (Persistence)

**กรณีศึกษาการล่าภัยคุกคามใน SOC (Threat Hunting Scenario):**
Threat Intelligence Feed แจ้งเตือนหมายเลข IP อันตรายที่กลุ่มแฮกเกอร์เพิ่งใช้โจมตีสถาบันการเงิน &rarr; นักวิเคราะห์ SOC นำ IP ดังกล่าวไปค้นหาในประวัติ Log ของ SIEM ย้อนหลัง 30 วัน &rarr; ตรวจพบว่ามีเครื่องคอมพิวเตอร์ภายใน 2 เครื่องเคยติดต่อออกไปยัง IP นี้เมื่อสัปดาห์ก่อน &rarr; ทีม IR นำเครื่องดังกล่าวเข้าสู่กระบวนการตรวจพิสูจน์พยานหลักฐานทันที

*ข้อควรระวังในการใช้งาน IOC:* หมายเลข IP มีการเปลี่ยนแปลงผู้ใช้งานได้ตลอดเวลา (Dynamic IP) และอาจเป็น IP ของบริการ Cloud/CDN ที่มีเว็บไซต์ปกติใช้งานร่วมกัน นักวิเคราะห์จึงต้องตรวจสอบช่วงเวลา (Timestamp), บริบท, และค่าความเชื่อมั่น (Confidence Score) ควบคู่กันเสมอ

</section>

<h4 class="reading-concept-group-title">The Pyramid of Pain (พีระมิดแห่งความเจ็บปวด โดย David Bianco):</h4>

แบบจำลองที่อธิบายว่า การตรวจจับและบล็อกสิ่งใดที่สร้างความยากลำบากและเจ็บปวดต่อผู้โจมตีมากที่สุด:
1. **Hash Values (ง่ายที่สุดสำหรับเรา / ไม่เจ็บปวดสำหรับแฮกเกอร์):** แฮกเกอร์เพียงเปลี่ยนโค้ด 1 บิต ค่าแฮชก็เปลี่ยนแล้ว
2. **IP Addresses:** แฮกเกอร์เปลี่ยน IP พร็อกซีใหม่ได้ง่ายดาย
3. **Domain Names:** จดโดเมนใหม่ได้ในราคาไม่กี่บาท
4. **Network / Host Artifacts:** ร่องรอยที่สังเกตได้ในระบบ
5. **Tools:** เครื่องมือที่แฮกเกอร์ใช้ (เช่น Mimikatz, Cobalt Strike) การตรวจจับได้ทำให้แฮกเกอร์ต้องหาเครื่องมือใหม่
6. **TTPs (Tactics, Techniques &amp; Procedures - ยากที่สุดสำหรับเรา / เจ็บปวดสูงสุดสำหรับแฮกเกอร์):** พฤติกรรมและแบบแผนการโจมตี หากเราตรวจจับและบล็อกที่ระดับ TTPs ได้ แฮกเกอร์จะต้องเรียนรู้วิธีการโจมตีใหม่ทั้งหมด

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-2-mitre-attack-framework">5.2.9 MITRE ATT&amp;CK Framework: TTPs กรอบโครงสร้างวิเคราะห์ภัยคุกคาม</h3>

**MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge)** คือฐานความรู้ระดับโลกที่รวบรวมพฤติกรรมการโจมตีในโลกแห่งความเป็นจริงของแฮกเกอร์ โดยจัดหมวดหมู่อย่างเป็นระบบเพื่อให้นักวิเคราะห์ความมั่นคงปลอดภัยเข้าใจบริบทการโจมตีได้อย่างแม่นยำ

<div class="reading-semantic-diagram" data-diagram="mitreAttackTacticTechnique"></div>

<h4 class="reading-concept-group-title">การแบ่งระดับชั้น TTPs ใน MITRE ATT&amp;CK:</h4>

<section class="reading-definition-unit">
<h5>1. Tactics (ยุทธวิธี — ทำไม / The "WHY"):</h5>

เป้าหมายสูงสุดที่ผู้โจมตีกำลังพยายามทำให้สำเร็จในแต่ละขั้นตอน เช่น:
- **Initial Access:** ต้องการเจาะเข้าสู่เครือข่ายเป็นก้าวแรก
- **Execution:** ต้องการสั่งรันโค้ดอันตรายบนเครื่องเหยื่อ
- **Persistence:** ต้องการฝังตัวในระบบแม้เครื่องจะถูกรีสตาร์ต
- **Lateral Movement:** ต้องการขยายการเข้าถึงจากเครื่องหนึ่งไปยังเซิร์ฟเวอร์เครื่องอื่น
- **Exfiltration:** ต้องการขโมยส่งข้อมูลสำคัญออกนอกองค์กร

</section>

<section class="reading-definition-unit">
<h5>2. Techniques (เทคนิค — ทำอย่างไร / The "HOW"):</h5>

วิธีการหรือเทคนิคเฉพาะทางที่ผู้โจมตีนำมาใช้เพื่อให้บรรลุเป้าหมายของ Tactic นั้น เช่น:
- ใน Tactic *Initial Access* อาจใช้เทคนิค **Phishing (T1566)**
- ใน Tactic *Lateral Movement* อาจใช้เทคนิค **Pass the Hash (T1550.002)**
- ใน Tactic *Execution* อาจใช้เทคนิค **Command and Scripting: PowerShell (T1059)**

</section>

<section class="reading-definition-unit">
<h5>3. Procedures (ขั้นตอนปฏิบัติการจริง — การลงมือทำ / The "EXECUTION"):</h5>

การลงมือปฏิบัติจริงในโลกความจริง คำสั่งคอมมานด์ไลน์ที่พิมพ์ หรือสายพันธุ์มัลแวร์ที่ตรวจพบ เช่น กลุ่ม APT29 ใช้งานเครื่องมือ Mimikatz ในการดึงรหัสผ่าน หรือสคริปต์คำสั่งดาวน์โหลดไฟล์เพย์โหลดเฉพาะเจาะจง

</section>

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="obj-5-3">

## Objective 5.3: Understand Incident Response (IR)

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>ไม่มีองค์กรใดที่ปลอดภัย 100% สิ่งสำคัญที่สุดเมื่อเกิดการบุกรุกคือความสามารถในการควบคุมความเสียหาย กู้คืนระบบ และรวบรวมหลักฐานอย่างเป็นระบบตามกระบวนการ Incident Response:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-3-ir-goals-terminology">5.3.1 Incident Response Goals &amp; Terminology: เป้าหมายและคำนิยามหลัก</h3>

**Incident Response (IR - การตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย)** คือกระบวนการที่มีแบบแผนและโครงสร้างชัดเจนในการตรวจจับ ควบคุมความเสียหาย กำจัดภัยคุกคาม และกู้คืนระบบงานให้กลับสู่ภาวะปกติอย่างรวดเร็ว

<h4 class="reading-concept-group-title">เป้าหมายหลักของการตอบสนองต่อเหตุการณ์ (IR Goals):</h4>

- **จำกัดรัศมีความเสียหาย (Contain & Minimize Blast Radius):** หยุดยั้งไม่ให้ภัยคุกคามแพร่กระจายไปยังระบบสำคัญอื่น
- **ฟื้นฟูระบบงานให้กลับสู่สภาพปกติโดยเร็ว (Restore Normal Operations):** ลดเวลาหยุดชะงักของธุรกิจ (Downtime)
- **รักษาความสมบูรณ์ของหลักฐานดิจิทัล (Preserve Forensic Evidence):** บันทึกหลักฐานสำหรับการดำเนินคดีตามกฎหมาย
- **ป้องกันการเกิดเหตุการณ์ซ้ำ (Prevent Recurrence):** ถอดบทเรียนและอุดช่องโหว่เพื่อไม่ให้เกิดเหตุซ้ำในอนาคต

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-3-irp-roles-csirt">5.3.2 Incident Response Plan (IRP) &amp; Roles: แผนและบทบาทหน้าที่ของทีม CSIRT</h3>

**Incident Response Plan (IRP)** คือเอกสารแนวทางปฏิบัติที่ได้รับอนุมัติจากผู้บริหารระดับสูง ซึ่งระบุขั้นตอน ขั้นตอนการตัดสินใจ และความรับผิดชอบของบุคลากรเมื่อเกิดเหตุฉุกเฉิน

<h4 class="reading-concept-group-title">โครงสร้างทีมตอบสนองต่อเหตุการณ์ (CSIRT / CIRT):</h4>

ทีม **CSIRT (Computer Security Incident Response Team)** ต้องประกอบด้วยตัวแทนจากหลากหลายสายงาน ไม่ใช่เพียงทีมไอทีเท่านั้น:

- **Incident Commander (ผู้บัญชาการเหตุการณ์):** ผู้มีอำนาจสูงสุดในการสั่งการและตัดสินใจในภาวะวิกฤต (เช่น อนุมัติตัดระบบงานสำคัญเพื่อหยุดการแพร่ระบาด)
- **Technical Leads / Security Analysts:** ผู้เชี่ยวชาญด้านเทคนิค ทำหน้าที่วิเคราะห์ Log, กักกันมัลแวร์, และกู้คืนระบบ
- **ฝ่ายกฎหมาย (Legal Counsel):** ให้คำแนะนำเกี่ยวกับข้อบังคับทางกฎหมาย การแจ้งเตือนหน่วยงานกำกับดูแล และการรักษาสิทธิ์ขององค์กร
- **ฝ่ายสื่อสารองค์กรและประชาสัมพันธ์ (Public Relations / Communications):** ดูแลการแถลงข่าว การสื่อสารกับลูกค้า และการบริหารจัดการชื่อเสียงองค์กร ห้ามพนักงานทั่วไปให้ข่าวเด็ดขาด
- **ฝ่ายทรัพยากรบุคคล (Human Resources):** มีส่วนร่วมในกรณีที่เหตุการณ์เกิดจากการกระทำของพนักงานภายในองค์กร
- **ผู้บริหารระดับสูง (Executive Leadership):** รับทราบสถานการณ์และสนับสนุนทรัพยากร

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-3-irp-lifecycle-phases">5.3.3 The 6-Phase Incident Response Lifecycle: 6 ขั้นตอนวงจรการตอบสนองต่อเหตุการณ์</h3>

ตามมาตรฐาน **NIST SP 800-61 / ISO 27035** และหลักสูตร ISC2 CC วงจรการตอบสนองต่อเหตุการณ์แบ่งออกเป็น 6 ขั้นตอนต่อเนื่องกันอย่างเป็นระบบ:

<div class="reading-semantic-diagram" data-diagram="irpLifecycle"></div>

<section class="reading-definition-unit">
<h5>1. Preparation (การเตรียมความพร้อม):</h5>

ขั้นตอนที่สำคัญที่สุดที่ต้องทำ **ก่อนเกิดเหตุการณ์จริง**:
- จัดทำและทบทวนแผน IRP และนโยบายความมั่นคงปลอดภัย
- จัดตั้งและอบรมทีม CSIRT พร้อมจัดทำผังการติดต่อสื่อสารยามฉุกเฉิน (Call Tree)
- จัดเตรียมเครื่องมือสำหรับเก็บหลักฐานดิจิทัล (Forensic Jump Bags)
- เสริมความแข็งแกร่งของระบบตามมาตรฐานขั้นต่ำ (Security Baselines) และซ้อมแผนรับมืออย่างสม่ำเสมอ

</section>

<section class="reading-definition-unit">
<h5>2. Detection &amp; Analysis (การตรวจจับและวิเคราะห์):</h5>

ขั้นตอนที่เริ่มเมื่อมีสัญญาณเตือนภัย:
- เฝ้าระวังและคัดกรองการแจ้งเตือนจากระบบ SIEM, EDR, และไฟร์วอลล์
- แยกแยะ False Positive ออกจากภัยคุกคามจริง
- ประเมินขอบเขตของระบบที่ได้รับผลกระทบ (Scope) และกำหนดระดับความรุนแรงของเหตุการณ์

</section>

<section class="reading-definition-unit">
<h5>3. Containment (การควบคุมและจำกัดขอบเขตความเสียหาย):</h5>

เป้าหมายคือหยุดยั้งไม่ให้ความเสียหายลุกลามไปยังระบบอื่น แบ่งเป็น:
- **Short-term Containment (การกักกันระยะสั้น):** ดึงสาย LAN, ปิดการเชื่อมต่อ Wi-Fi, สั่ง EDR กักกันโฮสต์ (Isolate Host), หรือบล็อก IP/Port บนไฟร์วอลล์ทันที
- **Long-term Containment (การควบคุมระยะยาว):** วางระบบสำรองชั่วคราวเพื่อให้อสังหาริมทรัพย์ของระบบงานยังคงให้บริการได้ในวงจำกัดในระหว่างรอการแก้ไขถาวร

</section>

<section class="reading-definition-unit">
<h5>4. Eradication (การกำจัดสาเหตุของภัยคุกคาม):</h5>

เมื่อควบคุมพื้นที่เกิดเหตุได้แล้ว จึงเริ่มกำจัดต้นเหตุของปัญหาทั้งหมด:
- ลบมัลแวร์ เครื่องมือเจาะระบบ และแบ็คดอร์ (Backdoors) ออกจากเครื่อง
- ล้างระบบและติดตั้งระบบปฏิบัติการใหม่จากอิมเมจที่ปลอดภัย (Re-imaging)
- ปิดหรือรีเซ็ตรหัสผ่านบัญชีผู้ใช้ทั้งหมดที่ถูกแฮกเกอร์ยึดครอง
- อัปเดตแพตช์อุดช่องโหว่ที่เป็นจุดเริ่มต้นของการถูกเจาะระบบ

</section>

<section class="reading-definition-unit">
<h5>5. Recovery (การกู้คืนระบบสู่สภาวะปกติ):</h5>

นำระบบงานและข้อมูลกลับมาเปิดให้บริการอย่างปลอดภัย:
- กู้คืนข้อมูลจากระบบสำรอง (Backup) ที่ตรวจสอบแล้วว่าสะอาดและไม่มีมัลแวร์แฝงอยู่
- ทดสอบการทำงานและความปลอดภัยก่อนเปิดให้บริการแก่ผู้ใช้งานทั่วไป
- เฝ้าระวังพฤติกรรมของระบบอย่างใกล้ชิดเพื่อป้องกันการกลับมาบุกรุกซ้ำ

</section>

<section class="reading-definition-unit">
<h5>6. Post-Incident Review (การทบทวนหลังเหตุการณ์ / Lessons Learned):</h5>

ขั้นตอนสุดท้ายแต่ทรงคุณค่าที่สุดสำหรับการปรับปรุงระบบ:
- จัดประชุมถอดบทเรียนร่วมกับผู้เกี่ยวข้องทั้งหมดภายใน 1–2 สัปดาห์หลังเหตุการณ์ยุติ
- ตอบคำถามสำคัญ: อะไรเกิดขึ้นบ้าง? แผนที่เตรียมไว้ได้ผลหรือไม่? มีจุดบกพร่องตรงไหน?
- จัดทำรายงานสรุปเหตุการณ์ฉบับสมบูรณ์ และนำข้อเสนอแนะกลับไปอัปเดตแผน IRP ในขั้นตอน Preparation เพื่อสร้างวงจรสู่การพัฒนาอย่างต่อเนื่อง

</section>

<section class="reading-definition-unit">
<h5>ตารางเปรียบเทียบคำกริยาชี้เป้าสำหรับข้อสอบ (Exam Verb Triggers):</h5>

<div class="reading-table-wrapper">

| ขั้นตอน IRP | คำกริยาชี้เป้าในโจทย์ (Exam Keywords) | คำถามหลัก | ตัวอย่างการกระทำในสถานการณ์จริง |
| :--- | :--- | :--- | :--- |
| **Preparation** | Train, Establish playbook, Backup, Call tree | เตรียมพร้อมล่วงหน้าอย่างไร? | จัดตั้งทีม CSIRT, จัดทำ Playbook, จัดเตรียมเครื่องมือ Forensics |
| **Detection &amp; Analysis** | Identify, Scope, Investigate, Assess impact | เกิดอะไรขึ้นและลามไปถึงไหน? | ตรวจสอบ Alert บน EDR, สำรวจว่าเซิร์ฟเวอร์กี่เครื่องติดมัลแวร์ |
| **Containment** | **Stop spread**, **Isolate**, **Disconnect**, Quarantine | หยุดยั้งการลุกลามอย่างไร? | ดึงสาย LAN, สั่ง EDR ตัดขาดโฮสต์, บล็อกพอร์ตบนไฟร์วอลล์ |
| **Eradication** | **Remove malware**, **Delete backdoor**, **Patch flaw** | กำจัดต้นตอของภัยอย่างไร? | สแกนลบโทรจัน, ปิดบัญชีลับที่แฮกเกอร์สร้าง, อุดช่องโหว่ซอฟต์แวร์ |
| **Recovery** | **Restore**, **Rebuild**, **Return to service**, Reconnect | นำระบบกลับมาเปิดอย่างไร? | Restore ข้อมูลจาก Clean Backup, เปิดระบบให้ผู้ใช้กลับมาทำงาน |
| **Post-Incident Review** | **Lessons learned**, Root cause analysis, Update IRP | เรียนรู้อะไรเพื่อไม่ให้เกิดซ้ำ? | ประชุมทบทวนเหตุการณ์, ปรับปรุงกฎตรวจจับ, อบรมพนักงาน |

</div>

</section>

<section class="reading-definition-unit">
<h5>กรณีศึกษาจำลองสถานการณ์ Ransomware แบบครบวงจร 6 ขั้นตอน:</h5>

**สถานการณ์:** พนักงานแผนกบัญชีเปิดไฟล์เอกสารแนบในอีเมลหลอกลวง ทำให้มัลแวร์เรียกค่าไถ่ (Ransomware) เริ่มปฏิบัติการเข้ารหัสไฟล์และพยายามแพร่กระจายไปทั่วเครือข่าย:

1. **Phase 1: Preparation:** องค์กรมีการสำรองข้อมูลแบบ Immutable Backup (แก้ไขไม่ได้) ไว้นอกสถานที่ มีเครื่องมือ EDR และมีคู่มือ Ransomware Playbook พร้อมใช้งาน
2. **Phase 2: Detection &amp; Analysis:** ระบบ EDR ส่งสัญญาณเตือนเมื่อพบคำสั่งผิดปกติในการลบ Shadow Copies ทีมวิเคราะห์ประเมินขอบเขตพบเครื่องคอมพิวเตอร์ติดเชื้อแล้ว 3 เครื่อง
3. **Phase 3: Containment:** เจ้าหน้าที่สั่ง EDR ตัดการเชื่อมต่อเครือข่ายของเครื่องทั้ง 3 เครื่องทันที (Isolate Hosts) เพื่อหยุดยั้งไม่ให้มัลแวร์เข้ารหัสไฟล์บน Network Share กลาง
4. **Phase 4: Eradication:** ทีมงานตรวจพบช่องทางเข้าหลัก ลบไฟล์เพย์โหลดมัลแวร์ ทำการล้างเครื่องและลง OS ใหม่ (Re-imaging) และบล็อกโดเมน C2 บนเกตเวย์
5. **Phase 5: Recovery:** กู้คืนไฟล์ข้อมูลของแผนกบัญชีจากระบบสำรองข้อมูลที่สะอาด ทดสอบการทำงาน และเปิดให้พนักงานใช้งานพร้อมเฝ้าระวังพฤติกรรมอย่างใกล้ชิด
6. **Phase 6: Post-Incident Review:** ทีมงานประชุมสรุปเหตุการณ์ (PIR) ระบุสาเหตุรากเหง้า (RCA) ว่าระบบคัดกรองอีเมลปล่อยไฟล์แนบต้องสงสัยผ่านเข้ามา จึงทำการปรับปรุงกฎเกณฑ์ Mail Filter และส่งพนักงานเข้ารับการอบรม Phishing Simulation เพิ่มเติม

</section>


<div class="reading-example-box">
  <div class="reading-example-title">สถานการณ์ตัวอย่างในโลกจริง (Realistic Operational Scenario): การรับมือวิกฤตแรนซัมแวร์ตามวงจร Incident Response Lifecycle 6 ขั้นตอน</div>
  <div class="reading-example-step"><strong>1. Preparation (การเตรียมความพร้อม):</strong> องค์กรมีแผน IRP จัดตั้งทีม CSIRT มีการติดตั้งซอฟต์แวร์ EDR บนทุกเครื่อง และทำระบบสำรองข้อมูลแบบ Immutable Cloud Backup ตลอดจนซ้อมแผน Tabletop Exercise ทุกปี</div>
  <div class="reading-example-step"><strong>2. Detection &amp; Analysis (การตรวจจับและวิเคราะห์):</strong>
    <ul>
      <li>เวลา 09:15 น. ระบบ EDR ตรวจพบลักษณะการเข้ารหัสไฟล์ผิดปกติบนเครื่องของแผนกจัดซื้อ และแจ้งเตือนมายัง SIEM</li>
      <li>นักวิเคราะห์ SOC วิเคราะห์ Signature ยืนยันว่าคือแรนซัมแวร์ LockBit ที่พยายามเชื่อมต่อ C2 Server เพื่อดาวน์โหลดเพย์โหลดเพิ่มเติม</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>3. Containment (การควบคุมและกักกันความเสียหาย):</strong>
    <ul>
      <li><strong>Short-term Containment:</strong> ทีม CSIRT สั่ง EDR กักกันเครื่อง (Network Isolation) ตัดสัญญาณ Wi-Fi และดึงสาย LAN ทันทีเพื่อหยุดการแพร่กระจายไปยังเซิร์ฟเวอร์ส่วนกลาง</li>
      <li>บล็อกโดเมนและ IP ของ C2 Server บน External Firewall ทั่วทั้งองค์กร</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>4. Eradication (การกำจัดต้นตอ):</strong>
    <ul>
      <li>ตรวจพบว่าผู้โจมตีเข้ามาทางช่องโหว่ VPN ที่ไม่ได้แพตช์ ทีมความปลอดภัยจึงทำการติดตั้งแพตช์อุดช่องโหว่ VPN ทันที</li>
      <li>สั่งล้างระบบเครื่องที่ติดมัลแวร์ทั้งหมดและติดตั้งระบบปฏิบัติการใหม่จาก Gold Image ที่สะอาด (Re-imaging) พร้อมทั้งบังคับรีเซ็ตรหัสผ่านและโทเค็นเซสชันของบัญชีที่เกี่ยวข้องทั้งหมด</li>
    </ul>
  </div>
  <div class="reading-example-step"><strong>5. Recovery (การกู้คืนระบบ):</strong> ทีม IT กู้คืนไฟล์ข้อมูลจากระบบ Immutable Backup ของคืนก่อนหน้า ทำการตรวจสอบความสมบูรณ์และสแกนหามัลแวร์ซ้ำ จากนั้นเปิดระบบให้พนักงานจัดซื้อกลับมาทำงานตามปกติ พร้อมเฝ้าระวังทราฟฟิกเครือข่ายอย่างใกล้ชิดตลอด 48 ชั่วโมง</div>
  <div class="reading-example-step"><strong>6. Post-Incident Review / Lessons Learned (การทบทวนหลังเหตุการณ์):</strong> ทีม CSIRT และผู้บริหารประชุมทบทวนเหตุการณ์ บันทึก Timeline และช่องโหว่ นำข้อผิดพลาดมาปรับปรุงกระบวนการ Patch Management ให้มีระยะเวลาติดตั้งแพตช์เร็วขึ้น และจัดฝึกอบรมพนักงานเรื่องการสังเกตไฟล์แนบอันตรายเพิ่มเติม</div>
  <div class="reading-example-takeaway">บทเรียนสำคัญ (Key Takeaway): กระบวนการรับมือเหตุการณ์ความมั่นคงปลอดภัยต้องดำเนินตาม 6 ขั้นตอนของ NIST SP 800-61 / ISC2: การเตรียมพร้อม &rarr; การตรวจจับและวิเคราะห์ &rarr; การกักกัน &rarr; การกำจัดต้นตอ &rarr; การกู้คืนระบบ &rarr; และการสรุปบทเรียน โดยห้ามข้ามขั้นตอนการกักกัน (Containment) ก่อนไปเริ่มกำจัดมัลแวร์ เพื่อป้องกันไม่ให้มัลแวร์ลุกลามไปยังระบบอื่น</div>
</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-3-evidence-handling-chain-of-custody">5.3.4 Evidence Handling, Chain of Custody &amp; Forensic Readiness: นิติวิทยาศาสตร์ดิจิทัล</h3>

การเก็บรวบรวมหลักฐานดิจิทัลต้องเป็นไปตามหลักการทางกฎหมาย เพื่อให้สามารถใช้เป็นพยานหลักฐานในชั้นศาลได้:

<section class="reading-definition-unit">
<h5>ความสมบูรณ์ของพยานหลักฐาน (Evidence Integrity &amp; Bit-stream Image):</h5>

ห้ามเปิดเครื่องหรือทำงานบนฮาร์ดดิสก์ของกลางโดยตรง เพราะการเปิดเครื่องจะเปลี่ยนแปลง Timestamp และข้อมูลในระบบ ต้องใช้อุปกรณ์ป้องกันการเขียนทับ (Write-Blocker) และทำสำเนาข้อมูลแบบบิตต่อบิต (Bit-stream Image หรือ Forensic Clone) จากนั้นคำนวณค่าแฮช (SHA-256) ของข้อมูลต้นฉบับและข้อมูลสำเนามาเทียบกัน หากค่าแฮชตรงกันจึงนำสำเนานั้นไปตรวจพิสูจน์

</section>

<section class="reading-definition-unit">
<h5>โซ่การเก็บรักษาพยานหลักฐาน (Chain of Custody):</h5>

เอกสารบันทึกประวัติการครอบครองพยานหลักฐานอย่างต่อเนื่องตั้งแต่เริ่มเก็บกู้จนถึงชั้นศาล ต้องระบุอย่างละเอียดว่า: ใครเป็นผู้เก็บหลักฐาน, เก็บเมื่อไหร่, เก็บที่ไหน, ถูกส่งมอบให้ใคร, วันเวลาใด, และเพื่อวัตถุประสงค์อะไร หากเอกสาร Chain of Custody ขาดตอนหรือมีช่องว่าง ศาลอาจปฏิเสธไม่รับฟังพยานหลักฐานชิ้นนั้นทันที

</section>

<section class="reading-definition-unit">
<h5>ลำดับความไม่เสถียรของข้อมูล (Order of Volatility - RFC 3227):</h5>

ข้อมูลดิจิทัลมีอายุขัยต่างกัน เมื่อต้องเก็บหลักฐาน ผู้ตรวจสอบต้องเก็บ **ข้อมูลที่สูญหายได้ง่ายที่สุดก่อนเสมอ**:
1. รีจิสทรีและแคชของหน่วยประมวลผล (CPU Registers & Cache) — *หายทันทีเมื่อไม่มีไฟ*
2. ตารางเราติ้ง, ตาราง ARP, แคชเคอร์เนล, และหน่วยความจำแรม (RAM)
3. ระบบไฟล์ชั่วคราวและ Swap Space
4. ข้อมูลบนฮาร์ดดิสก์ถาวรและสื่อบันทึกข้อมูล (Hard Drives, SSDs)
5. ข้อมูลการบันทึก Log บนเซิร์ฟเวอร์ระยะไกล
6. สื่อสำรองข้อมูลแบบเทปหรือไดรฟ์ออฟไลน์ (Backups & Tapes) — *คงทนยาวนานที่สุด*

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-3-ir-exercises-tabletop-simulation">5.3.5 Incident Response Exercises: Tabletop vs. Technical Simulation: การฝึกซ้อมแผนรับมือเหตุฉุกเฉิน</h3>

แผน IRP ที่เขียนไว้บนกระดาษแต่ไม่เคยซ้อม จะใช้งานไม่ได้จริงในยามวิกฤต องค์กรจึงต้องฝึกซ้อมอย่างสม่ำเสมอ:

<section class="reading-definition-unit">
<h5>1. การฝึกซ้อมบนโต๊ะ (Tabletop Exercise - TTX):</h5>

การฝึกซ้อมตามสถานการณ์จำลองเชิงอภิปราย (Discussion-based) ในห้องประชุม โดยมีผู้บริหาร ฝ่ายไอที ฝ่ายกฎหมาย และฝ่ายประชาสัมพันธ์เข้าร่วม:
- มีผู้นำเสนอสถานการณ์วิกฤตสมมุติ (เช่น เกิดการโจมตีด้วย Ransomware และข้อมูลลูกค้ารั่วไหล)
- ผู้เข้าร่วมประชุมร่วมกันอภิปรายบทบาท หน้าที่ ช่องทางการสื่อสาร และการตัดสินใจตามแผน IRP
- **ข้อดี:** ค่าใช้จ่ายต่ำ, ไม่มีความเสี่ยงต่อระบบงานจริง, มุ่งเน้นการประเมินความพร้อมในการประสานงานและการตัดสินใจเชิงบริหาร

</section>

<section class="reading-definition-unit">
<h5>2. การทดสอบและจำลองเชิงเทคนิค (Technical Testing / Live Simulation):</h5>

การทดสอบภาคปฏิบัติจริงในสภาพแวดล้อมจำลอง (Cyber Range, Purple Team, หรือ Live Fire):
- ทีมเทคนิคต้องเผชิญหน้ากับการโจมตีเสมือนจริงบนระบบคอมพิวเตอร์และเครือข่าย
- ตรวจสอบประสิทธิภาพของเครื่องมือ EDR, กฎการแจ้งเตือนของ SIEM, และสคริปต์กักกันโฮสต์
- **ข้อดี:** ตรวจสอบความพร้อมทางเทคโนโลยีและทักษะของทีมวิศวกรได้อย่างแท้จริง มีความซับซ้อนและค่าใช้จ่ายสูงกว่า TTX

</section>

<div class="reading-table-wrapper">

| มิติการเปรียบเทียบ | Tabletop Exercise (TTX) | Technical Testing / Simulation |
| :--- | :--- | :--- |
| **รูปแบบการฝึกซ้อม** | อภิปรายจำลองสถานการณ์ในห้องประชุม (Discussion) | ลงมือปฏิบัติจริงบนระบบคอมพิวเตอร์ (Hands-on) |
| **ผู้เข้าร่วมหลัก** | ผู้บริหาร, ผู้นำทีมไอที, กฎหมาย, ประชาสัมพันธ์ | นักวิเคราะห์ความปลอดภัย, วิศวกรระบบ, SOC |
| **ความเสี่ยงต่อระบบจริง** | **ศูนย์ (ไม่มีความเสี่ยงต่อระบบงาน)** | ปานกลางถึงสูง (หากซ้อมบนระบบเครือข่ายจริง) |
| **จุดเน้นหลัก** | การตัดสินใจ, บทบาทหน้าที่, การสื่อสาร | ความแม่นยำของเครื่องมือ, การจับสัญญาณ Log, ฝีมือช่าง |
| **ความถี่ที่แนะนำ** | อย่างน้อยปีละ 1–2 ครั้ง | ซ้อมเป็นประจำหรือทำร่วมกับ Red/Blue Team |

</div>

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="obj-5-4">

## Objective 5.4: Understand Asset Protection

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การปกป้องทรัพย์สินขององค์กรครอบคลุมการจัดการวงจรชีวิตฮาร์ดแวร์ ซอฟต์แวร์ และการควบคุมการเปลี่ยนแปลง การกำหนดมาตรฐานความปลอดภัย (Baselines) และกระบวนการ Patch Management ที่มีวินัย:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-4-asset-lifecycle-management">5.4.1 Asset Lifecycle Management (ALM): การบริหารวงจรชีวิตทรัพย์สิน</h3>

**Asset Lifecycle Management (ALM)** คือกระบวนการบริหารจัดการทรัพย์สินขององค์กรอย่างเป็นระบบตั้งแต่เริ่มต้นจัดหาไปจนถึงการปลดระวาง มีหลักการพื้นฐานคือ: *"เราไม่สามารถปกป้องสิ่งที่เราไม่รู้ว่ามีอยู่ได้"* องค์กรจึงต้องมีระบบบัญชีทรัพย์สิน (Asset Inventory / CMDB) ที่ถูกต้องและอัปเดตอยู่เสมอ

<div class="reading-semantic-diagram" data-diagram="assetLifecycleAndEol"></div>

<h4 class="reading-concept-group-title">6 ขั้นตอนของ Asset Lifecycle Management:</h4>

1. **Plan (วางแผน):** ประเมินความต้องการทางธุรกิจ กำหนดคุณสมบัติด้านความมั่นคงปลอดภัย และคัดเลือกผู้ขาย (Vendor Risk Assessment)
2. **Acquire (จัดซื้อและลงทะเบียน):** สั่งซื้ออุปกรณ์ ติดแท็กทรัพย์สิน (Asset Tag) และบันทึกข้อมูลเข้าสู่ฐานข้อมูลสินทรัพย์ (CMDB)
3. **Deploy (ติดตั้งใช้งาน):** ติดตั้งระบบปฏิบัติการและซอฟต์แวร์ตามมาตรฐานความปลอดภัย (Security Baseline) ติดตั้งระบบ EDR และกำหนดสิทธิ์การเข้าถึง
4. **Maintain (บำรุงรักษา):** อัปเดตซ่อมบำรุงตามรอบ ติดตั้ง Security Patches และตรวจสอบสุขภาพระบบ
5. **Monitor (เฝ้าระวังและตรวจสอบ):** ตรวจสอบการเบี่ยงเบนของการตั้งค่า (Configuration Drift), สแกนหาช่องโหว่, และประเมินความสอดคล้องตามมาตรฐาน
6. **Dispose (ปลดระวางและทำลาย):** ทำลายข้อมูลบนสื่อบันทึกตามมาตรฐาน NIST SP 800-88, บันทึกการจำหน่ายสินทรัพย์ออกจากบัญชี, และรีไซเคิลอย่างถูกวิธี

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-4-eol-eos-compensating-controls">5.4.2 End of Life (EOL) / End of Support (EOS) Risks &amp; Compensating Controls: อุปกรณ์หมดอายุการใช้งาน</h3>

<section class="reading-definition-unit">
<h5>EOL vs. EOS: ความแตกต่างที่สำคัญ:</h5>

- **End of Life (EOL):** ผู้ผลิตยุติการจัดจำหน่ายผลิตภัณฑ์และหยุดพัฒนาฟีเจอร์ใหม่ แต่อาจยังคงมีการปล่อยแพตช์ความปลอดภัยที่สำคัญอยู่
- **End of Support (EOS):** ผู้ผลิต **ยุติการสนับสนุนทางเทคนิคและหยุดการออกแพตช์ความปลอดภัยทั้งหมดโดยสิ้นเชิง** อุปกรณ์หรือระบบปฏิบัติการที่เข้าสู่สภาวะ EOS (เช่น Windows 7 หรือ Windows Server 2008) จะกลายเป็นเป้าหมายที่เปราะบางที่สุด เพราะหากมีช่องโหว่ใหม่เกิดขึ้น ผู้ผลิตจะไม่ทำแพตช์อุดช่องโหว่นั้นอีกต่อไป

</section>

<section class="reading-definition-unit">
<h5>มาตรการควบคุมชดเชย (Compensating Controls) สำหรับระบบ EOS:</h5>

ในบางกรณี องค์กรไม่สามารถเปลี่ยนอุปกรณ์ EOS ได้ทันที (เช่น เครื่องจักรในโรงงานผลิต หรือเครื่องมือแพทย์ที่มีมูลค่าหลายสิบล้านบาท) องค์กรจำเป็นต้องบังคับใช้ **Compensating Controls (มาตรการควบคุมชดเชย)** เพื่อบรรเทาความเสี่ยง:
1. **Network Segmentation / Strict Isolation:** ตัดขาดอุปกรณ์ EOS ออกจากอินเทอร์เน็ตภายนอก และแยกไปอยู่ใน VLAN อิสระ (Isolated VLAN) เพื่อป้องกันการแพร่กระจายของมัลแวร์
2. **Virtual Patching:** ติดตั้ง Web Application Firewall (WAF) หรือ Next-Gen IPS ขวางหน้า เพื่อตรวจจับและกรองโค้ดโจมตี (Exploit Payloads) ก่อนที่จะเดินทางไปถึงเครื่องที่มีช่องโหว่
3. **Access Restriction:** ปิดพอร์ตและเซอร์วิสที่ไม่จำเป็นทั้งหมด และบังคับใช้ Least Privilege อย่างเข้มงวด
4. **Enhanced Telemetry:** ส่งข้อมูล Log ของอุปกรณ์เข้า SIEM ตลอดเวลาเพื่อตรวจจับความผิดปกติอย่างใกล้ชิด

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-4-configuration-management-baselines">5.4.3 Configuration Management, Baselines &amp; Drift: การจัดการการตั้งค่าและฐานความปลอดภัย</h3>

**Configuration Management (การจัดการการตั้งค่า)** คือกระบวนการควบคุมและรักษาความสม่ำเสมอของการตั้งค่าฮาร์ดแวร์ ซอฟต์แวร์ และระบบเครือข่ายให้เป็นไปตามมาตรฐานที่ได้รับการอนุมัติ

<section class="reading-definition-unit">
<h5>Security Baselines (ฐานความมั่นคงปลอดภัยขั้นต่ำ):</h5>

ชุดการตั้งค่าความปลอดภัยมาตรฐานที่ผ่านการทดสอบและอนุมัติแล้วว่าต้องถูกนำไปปรับใช้กับอุปกรณ์ทุกเครื่องในองค์กร เช่น การปิดพอร์ตที่ไม่จำเป็น, การปิดสิทธิ์ Guest Account, การบังคับใช้นโยบายรหัสผ่านที่ซับซ้อน อ้างอิงตามมาตรฐานสากล เช่น **CIS Benchmarks** หรือ **DISA STIGs**

</section>

<section class="reading-definition-unit">
<h5>Configuration Drift (การเบี่ยงเบนของการตั้งค่า):</h5>

ปรากฏการณ์ที่การตั้งค่าของระบบค่อย ๆ เบี่ยงเบนออกจาก Baseline เดิมอย่างช้า ๆ อันเนื่องมาจากการแก้ไขเฉพาะหน้าของผู้ดูแลระบบ การติดตั้งซอฟต์แวร์เสริม หรือการทดสอบระบบที่ไม่มีการบันทึก การเกิด Drift ทำให้ระบบมีช่องโหว่ที่ไม่คาดคิด องค์กรจึงต้องใช้เครื่องมืออัตโนมัติ (เช่น Ansible, Puppet, Chef, Microsoft Intune) เพื่อตรวจสอบและดึงการตั้งค่าให้กลับสู่ Baseline ที่ถูกต้องตลอดเวลา

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-4-patch-management-process">5.4.4 The 5-Step Patch Management Process: กระบวนการจัดการแพตช์ 5 ขั้นตอน</h3>

**Patch Management (การจัดการแพตช์)** คือกระบวนการค้นหา จัดหา ทดสอบ และติดตั้งชุดอัปเดตซอฟต์แวร์ (Patches) เพื่อแก้ไขจุดบกพร่องและอุดช่องโหว่ความปลอดภัย โดยมี 5 ขั้นตอนมาตรฐาน:

1. **Identify &amp; Monitor (ตรวจหาช่องโหว่และติดตามข่าวสาร):** ติดตามการประกาศช่องโหว่ใหม่ (CVEs) และอัปเดตจากผู้ผลิตซอฟต์แวร์อย่างต่อเนื่อง
2. **Evaluate &amp; Assess (ประเมินความเสี่ยงและจัดลำดับความสำคัญ):** วิเคราะห์ว่าช่องโหว่นั้นส่งผลกระทบต่อระบบงานในองค์กรหรือไม่ โดยจัดลำดับความเร่งด่วนตามความเสี่ยงและระดับความสำคัญของระบบ
3. **Test in Sandbox / Staging (ทดสอบในสภาพแวดล้อมจำลอง):** ติดตั้งแพตช์บนเครื่องทดสอบที่ไม่ใช่ระบบจริง เพื่อตรวจสอบความเข้ากันได้ของระบบ (Compatibility) ป้องกันไม่ให้แพตช์ทำให้โปรแกรมทำงานผิดพลาด
4. **Deploy &amp; Roll Out (ติดตั้งและทยอยปรับใช้):** วางแผนติดตั้งแพตช์ในช่วงเวลาบำรุงรักษาระบบ (Maintenance Window) เพื่อลดผลกระทบต่อผู้ใช้งาน พร้อมทั้งจัดเตรียมแผนสำรองสำหรับการกู้คืน (Rollback Plan) หากเกิดปัญหา
5. **Verify &amp; Audit (ตรวจสอบยืนยันและประเมินผล):** สแกนระบบซ้ำเพื่อยืนยันว่าการติดตั้งแพตช์สำเร็จเรียบร้อย ช่องโหว่ถูกปิดสนิท และระบบทำงานได้อย่างมีเสถียรภาพ

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-4-change-management-process">5.4.5 The 7-Step Change Management Process &amp; CAB: กระบวนการจัดการการเปลี่ยนแปลง</h3>

**Change Management (การจัดการการเปลี่ยนแปลง)** คือกระบวนการควบคุมอย่างเป็นทางการเพื่อรองรับการเปลี่ยนแปลงระบบและสภาพแวดล้อมทางไอที เพื่อลดความเสี่ยงที่ระบบจะหยุดชะงัก (Downtime) หรือเกิดช่องโหว่ใหม่

<h4 class="reading-concept-group-title">7 ขั้นตอนของกระบวนการ Change Management:</h4>

1. **Request for Change (RFC):** ผู้ขอยื่นเอกสารคำขอเปลี่ยนแปลงอย่างเป็นทางการ ระบุรายละเอียด เหตุผลทางธุรกิจ ผลกระทบที่คาดว่าจะเกิดขึ้น และขั้นตอนการย้อนกลับ (Rollback Plan)
2. **Impact &amp; Risk Assessment:** ทีมวิศวกรประเมินผลกระทบและความเสี่ยงต่อความมั่นคงปลอดภัยและธุรกิจ
3. **Review &amp; Approve by CAB:** นำคำขอเข้าสู่การพิจารณาของ **Change Advisory Board (CAB)** ซึ่งเป็นคณะกรรมการสหสาขาวิชาชีพเพื่อพิจารณาอนุมัติ
4. **Schedule &amp; Plan:** กำหนดวัน เวลา และตารางเวลาการบำรุงรักษา (Maintenance Window) พร้อมแจ้งเตือนผู้มีส่วนได้ส่วนเสีย
5. **Test &amp; Validate:** ดำเนินการทดสอบการเปลี่ยนแปลงในสภาพแวดล้อม Staging อย่างละเอียด
6. **Implement &amp; Deploy:** ดำเนินการติดตั้งจริงตามขั้นตอนที่ได้รับอนุมัติอย่างเคร่งครัด
7. **Post-Implementation Review (PIR):** ประเมินผลลัพธ์หลังการติดตั้งว่าบรรลุวัตถุประสงค์หรือไม่ และบันทึกข้อผิดพลาดเพื่อปิดคำขอเปลี่ยนแปลง

<div class="reading-table-wrapper">

| ประเด็นเปรียบเทียบ | Configuration Management (การจัดการการตั้งค่า) | Change Management (การจัดการการเปลี่ยนแปลง) |
| :--- | :--- | :--- |
| **บทบาทหลัก** | **Maintains Desired Configuration:** รักษาและคงสถานะความมั่นคงปลอดภัยที่ระบบควรจะเป็น | **Controls Changes to Systems:** ควบคุมกระบวนการปรับปรุง แก้ไข หรืออัปเกรดระบบ |
| **คำถามสำคัญสำหรับข้อสอบ** | **What Configuration Should Be:** ระบบควรถูกตั้งค่าอย่างไรให้ปลอดภัยและสม่ำเสมอ | **How &amp; When Changes Occur:** การเปลี่ยนแปลงควรดำเนินการเมื่อใด มีขั้นตอนและใครอนุมัติ |
| **รากฐานการทำงาน** | จัดทำ **Security Baselines** (CIS Benchmarks, STIGs) และ CMDB | ประเมินความเสี่ยง ทดสอบ Staging และอนุมัติผ่าน **CAB** |
| **การตรวจจับและป้องกัน** | ตรวจจับ **Configuration Drift** (การเบี่ยงเบนจากฐานมาตรฐาน) | ป้องกันปัญหา Downtime, ผลกระทบต่อธุรกิจ และการแก้ไขโดยพลการ |
| **ตัวอย่างในโลกจริง** | เทมเพลตการตั้งค่าพอร์ตและนโยบายบนไฟร์วอลล์ที่ได้รับอนุมัติแล้ว | เอกสาร RFC ยื่นขอเปิดพอร์ตบริการใหม่บนไฟร์วอลล์พร้อมแผน Rollback |

</div>

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="obj-5-5">

## Objective 5.5: Understand Security Testing

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การทดสอบความมั่นคงปลอดภัย (Security Testing) คือการประเมินประสิทธิภาพของมาตรการป้องกัน ค้นหาจุดอ่อน และจำลองการโจมตีเพื่อเสริมความแข็งแกร่งของระบบก่อนที่ศัตรูตัวจริงจะค้นพบ:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-security-teaming">5.5.1 Security Assessment Strategies &amp; Teaming: การทดสอบทีมสี Blue, Red &amp; Purple</h3>

ในการฝึกซ้อมและประเมินความพร้อมด้านความปลอดภัย องค์กรนิยมจัดทีมผู้เชี่ยวชาญออกเป็น 3 สี:

<section class="reading-definition-unit">
<h5>1. Blue Team (ทีมสีน้ำเงิน — ฝ่ายตั้งรับ):</h5>

ทีมวิศวกรความปลอดภัยที่มีหน้าที่ในการ **ปกป้องและเฝ้าระวังระบบขององค์กร**:
- เฝ้าระวังเหตุการณ์ผ่าน SIEM และ EDR
- ตรวจจับภัยคุกคาม คัดกรองเหตุการณ์ และเริ่มกระบวนการตอบสนองต่อเหตุการณ์ (Incident Response)
- เสริมความแข็งแกร่งของระบบ (Hardening) และออกล่าภัยคุกคามเชิงรุก (Threat Hunting)

</section>

<section class="reading-definition-unit">
<h5>2. Red Team (ทีมสีแดง — ฝ่ายรุก):</h5>

ทีมผู้เชี่ยวชาญที่ทำหน้าที่ **จำลองบทบาทเป็นผู้โจมตีในโลกจริง (Adversary Emulation)**:
- ใช้วิธีการ เครื่องมือ และยุทธวิธีเสมือนแฮกเกอร์จริงในการเจาะระบบ
- พยายามข้ามผ่านการป้องกัน เข้าถึงข้อมูลสำคัญ หรือยึดครองสิทธิ์ผู้ดูแลระบบสูงสุด (Domain Admin)
- มีเป้าหมายเพื่อทดสอบว่า ทีม Blue Team และระบบเฝ้าระวังขององค์กรสามารถตรวจจับและขัดขวางการโจมตีได้หรือไม่

</section>

<section class="reading-definition-unit">
<h5>3. Purple Team (ทีมสีม่วง — ฝ่ายผสานความร่วมมือ):</h5>

แนวคิดการผสานความร่วมมือแบบบูรณาการระหว่าง **Red Team และ Blue Team**:
- ในอดีต Red และ Blue มักทำงานแยกกัน ทำให้ Blue Team ไม่ทราบว่าตนพลาดการตรวจจับจุดใด
- Purple Teaming ให้ทั้งสองทีมทำงานเคียงข้างกันในเวลาจริง (Real-Time Collaboration): เมื่อ Red Team ทดสอบใช้เทคนิคการโจมตีใหม่ Blue Team จะสังเกตการณ์บนหน้าจอ SIEM ทันทีว่าระบบตรวจจับได้หรือไม่ หากตรวจไม่พบ ทั้งสองทีมจะช่วยกันปรับแต่งกฎการตรวจจับ (Detection Rules) ให้สามารถดักจับการโจมตีนั้นได้สำเร็จทันที

**วงจรการทำงานร่วมกัน 5 ขั้นตอนของ Purple Team (5-Step Collaborative Loop):**
1. **Simulate Attack (จำลองการโจมตี):** Red Team รันเทคนิคการโจมตีเฉพาะเจาะจงตามกรอบ MITRE ATT&amp;CK (เช่น OS Credential Dumping)
2. **Observe Detection (สังเกตการณ์การตรวจจับ):** Blue Team ตรวจดูหน้าจอ SIEM และ EDR ว่าได้รับโทรมาตรและมีการแจ้งเตือนหรือไม่
3. **Identify Gaps (ชี้จุดบกพร่อง):** หากตรวจไม่พบ ทั้งสองทีมร่วมกันวิเคราะห์ว่าขาด Log ใด หรือเงื่อนไขของกฎการตรวจจับยังไม่ครอบคลุม
4. **Improve Controls (ปรับปรุงมาตรการ):** Blue Team ปรับจูน Correlation Rule หรือสร้าง Signature ใหม่เพื่ออุดช่องว่างการตรวจจับทันที
5. **Retest &amp; Validate (ทดสอบซ้ำ):** Red Team จำลองการโจมตีเดิมซ้ำอีกครั้ง เพื่อยืนยันว่าระบบแจ้งเตือนได้อย่างถูกต้องและแม่นยำ

</section>

<div class="reading-table-wrapper">

| ทีมความปลอดภัย | บทบาทหน้าที่ | กิจกรรมหลัก | เป้าหมายสูงสุด |
| :--- | :--- | :--- | :--- |
| **Blue Team** | ฝ่ายตั้งรับ (Defenders) | เฝ้าระวัง SIEM, ปรับแต่งไฟร์วอลล์, ทำ IR, กักกันมัลแวร์ | ปกป้องระบบและขัดขวางการโจมตี |
| **Red Team** | ฝ่ายรุก (Attackers) | จำลองการเจาะระบบ, เจาะผ่านช่องโหว่, ทำ Phishing | ค้นหาจุดอ่อนและทดสอบประสิทธิภาพของฝ่ายรับ |
| **Purple Team** | ผสานความร่วมมือ (Collaboration) | ซ้อมร่วมกันแบบเรียลไทม์, แลกเปลี่ยนข้อมูลเชิงลึก | ยกระดับขีดความสามารถการตรวจจับอย่างรวดเร็ว |

</div>

<div class="reading-semantic-diagram" data-diagram="purpleTeamLoop"></div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-vulnerability-assessment-pentest">5.5.2 Vulnerability Assessment vs. Penetration Testing: การสแกนช่องโหว่กับการเจาะระบบ</h3>

สองกระบวนการนี้มีเป้าหมายและขั้นตอนการทำงานที่แตกต่างกันอย่างชัดเจน:

<section class="reading-definition-unit">
<h5>Vulnerability Assessment (VA - การประเมินและสแกนหาช่องโหว่):</h5>

กระบวนการที่ใช้ **เครื่องมือสแกนอัตโนมัติ (Automated Vulnerability Scanners เช่น Nessus, Qualys, OpenVAS)** เพื่อค้นหาจุดอ่อน ซอฟต์แวร์ที่ยังไม่ได้อัปเดตแพตช์ หรือการตั้งค่าที่ผิดพลาดในระบบ:
- **เน้นความกว้าง (Breadth):** ตรวจสอบอุปกรณ์จำนวนมากในเวลาอันสั้น
- **ไม่มีการเจาะระบบจริง (No Exploitation):** เครื่องมือเพียงรายงานว่า "มีโอกาสมีช่องโหว่" แต่ไม่ได้พยายามส่งเพย์โหลดเข้าไปเจาะ จึงมีความเสี่ยงต่อระบบต่ำ
- **ผลลัพธ์:** รายการช่องโหว่ที่จัดลำดับตามความรุนแรง (CVSS Score)

</section>

<section class="reading-definition-unit">
<h5>Penetration Testing (Pentest - การทดสอบเจาะระบบ):</h5>

การจำลองการโจมตีเสมือนจริงโดยมนุษย์ (Ethical Hacker) ที่ได้รับ **การอนุญาตอย่างเป็นลายลักษณ์อักษร (Rules of Engagement - RoE)**:
- **เน้นความลึก (Depth):** ผู้ทดสอบจะพยายาม **ส่งโค้ดเจาะช่องโหว่จริง (Active Exploitation)** เพื่อพิสูจน์ว่าช่องโหว่นั้นสามารถสร้างความเสียหายต่อธุรกิจได้จริงหรือไม่
- **การเชื่อมโยงหลายช่องโหว่ (Chaining):** แฮกเกอร์มักนำจุดอ่อนความรุนแรงต่ำหลาย ๆ จุดมาร้อยเรียงต่อกันจนสามารถยึดระบบได้ทั้งหมด
- **ผลลัพธ์:** รายงานพิสูจน์หลักฐาน (Proof of Concept) และคำแนะนำในการปรับปรุงแก้ไข

</section>

<div class="reading-table-wrapper">

| มิติการเปรียบเทียบ | Vulnerability Assessment (VA) | Penetration Testing (Pentest) |
| :--- | :--- | :--- |
| **วิธีการทำงาน** | สแกนอัตโนมัติด้วยซอฟต์แวร์ (Automated Tool) | ดำเนินการโดยผู้เชี่ยวชาญมนุษย์ (Human Expert) |
| **การเจาะระบบ (Exploit)** | **ไม่มีการเจาะจริง (Identify only)** | **มีการเจาะและขโมยสิทธิ์จริง (Active Exploit)** |
| **ขอบเขตการตรวจสอบ** | กว้างขวาง (Breadth) ครอบคลุมอุปกรณ์จำนวนมาก | เจาะจงและเจาะลึก (Depth) ตามเป้าหมายที่กำหนด |
| **ความเสี่ยงต่อระบบงาน** | ต่ำมาก (ทำงานได้ในเวลาปกติ) | ปานกลางถึงสูง (อาจทำให้บริการหยุดชะงัก) |
| **เอกสารบังคับก่อนเริ่ม** | ข้อตกลงทั่วไป | **เอกสารอนุญาตและกฎเกณฑ์ (Rules of Engagement)** |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-appsec-sast-dast">5.5.3 Application Security Testing: SAST vs. DAST: การทดสอบความปลอดภัยแอปพลิเคชัน</h3>

ในการพัฒนาซอฟต์แวร์ตามแนวคิด DevSecOps การตรวจหาช่องโหว่ในแต่ละขั้นตอนของวงจรการพัฒนาซอฟต์แวร์ (SDLC) ต้องการเครื่องมือที่ต่างกัน:

<div class="reading-semantic-diagram" data-diagram="securityTestingMatrix"></div>

<section class="reading-definition-unit">
<h5>SAST (Static Application Security Testing):</h5>

การทดสอบแบบ **กล่องขาว (White-box Testing)** ที่วิเคราะห์ซอร์สโค้ด (Source Code), ไบต์โค้ด, หรือไบนารีโดยตรง:
- ดำเนินการในขณะที่ **โปรแกรมยังไม่รันทำงาน (Code at Rest)** ในระยะเริ่มต้นของการพัฒนา (Coding Phase)
- สอดคล้องกับแนวคิด **"Shift-Left"** คือตรวจหาช่องโหว่ให้เร็วที่สุด ยิ่งพบเร็วเท่าไหร่ ค่าใช้จ่ายในการแก้ไขยิ่งต่ำลงเท่านั้น
- จุดแข็ง: ตรวจพบข้อผิดพลาดในไวยากรณ์โค้ด (Insecure Coding Practices), กุญแจรหัสผ่านที่ฝังแข็งอยู่ในโค้ด (Hardcoded Secrets), และช่องโหว่ SQL Injection ได้ถึงบรรทัดของโค้ด

</section>

<section class="reading-definition-unit">
<h5>DAST (Dynamic Application Security Testing):</h5>

การทดสอบแบบ **กล่องดำ (Black-box Testing)** ที่ทดสอบแอปพลิเคชันจากมุมมองภายนอกผ่านเครือข่าย:
- ดำเนินการในขณะที่ **แอปพลิเคชันกำลังรันทำงานจริง (Running Application)** ในสภาพแวดล้อมทดสอบ (Staging / QA)
- ผู้ทดสอบไม่เห็นซอร์สโค้ดภายใน แต่จะส่งคำขอ (HTTP Requests) ที่แฝงเพย์โหลดอันตรายเข้าไป แล้วสังเกตการตอบสนอง (HTTP Responses)
- จุดแข็ง: ตรวจจับปัญหาที่เกิดขึ้นเฉพาะตอนโปรแกรมทำงาน เช่น ปัญหาเซสชันการยืนยันตัวตน (Authentication Flaws), การตั้งค่าเซิร์ฟเวอร์ผิดพลาด (Server Misconfigurations), และปัญหาความปลอดภัยของ API

</section>

<div class="reading-table-wrapper">

| คุณลักษณะ (Attribute) | SAST (Static Testing) | DAST (Dynamic Testing) |
| :--- | :--- | :--- |
| **มุมมองการทดสอบ** | White-box (มองเห็นซอร์สโค้ด) | Black-box (มองไม่เห็นซอร์สโค้ด) |
| **สภาวะของโปรแกรม** | **ไม่ต้องรันโปรแกรม (At Rest)** | **ต้องรันโปรแกรมทำงานจริง (In Runtime)** |
| **ช่วงเวลาใน SDLC** | ระยะเขียนโค้ดเริ่มต้น (Coding / Shift-Left) | ระยะทดสอบและติดตั้ง (Testing / Staging) |
| **สิ่งที่ตรวจจับได้ดี** | ไวยากรณ์ผิดพลาด, Hardcoded Passwords, SQLi | ปัญหาเซสชัน, Authentication, Server Config |
| **ความแม่นยำของตำแหน่ง** | ชี้เป้าได้ถึงหมายเลขบรรทัดของโค้ด | แจ้งเฉพาะ URL หรือพารามิเตอร์ที่พบปัญหา |

</div>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-threat-modeling-design">5.5.4 Threat Modeling in Secure System Design &amp; STRIDE: การสร้างแบบจำลองภัยคุกคาม</h3>

**Threat Modeling (การสร้างแบบจำลองภัยคุกคาม)** คือกระบวนการคิดเชิงวิเคราะห์โครงสร้างที่ดำเนินการใน **ระยะออกแบบสถาปัตยกรรม (Design Phase)** ก่อนที่จะเริ่มเขียนโค้ดบรรทัดแรก:
- มุ่งเน้นการวิเคราะห์เส้นทางการไหลของข้อมูล (Data Flow Diagrams - DFDs) และขอบเขตความเชื่อถือ (Trust Boundaries)
- การแก้ไขข้อบกพร่องเชิงสถาปัตยกรรมในระยะนี้มีต้นทุนต่ำที่สุด เมื่อเทียบกับการต้องมารื้อแก้ระบบหลังจากติดตั้งใช้งานแล้ว

<h4 class="reading-concept-group-title">กรอบการวิเคราะห์ภัยคุกคาม STRIDE:</h4>

แบบจำลองคลาสสิกที่พัฒนาโดย Microsoft เพื่อช่วยระบุภัยคุกคาม 6 หมวดหมู่:

- **S — Spoofing (การปลอมแปลงตัวตน):** การแอบอ้างเป็นบุคคลหรือระบบอื่น &rarr; ทำลาย *Authenticity* &rarr; ป้องกันด้วย: การยืนยันตัวตนที่เข้มงวด (MFA)
- **T — Tampering (การดัดแปลงแก้ไขข้อมูล):** การแอบเปลี่ยนข้อมูลขณะส่งหรือจัดเก็บ &rarr; ทำลาย *Integrity* &rarr; ป้องกันด้วย: Digital Signatures, Hashes
- **R — Repudiation (การปฏิเสธความรับผิดชอบ):** ผู้กระทำผิดอ้างว่าตนไม่ได้ทำ &rarr; ทำลาย *Non-repudiation* &rarr; ป้องกันด้วย: Audit Logs, Digital Signatures
- **I — Information Disclosure (การเปิดเผยข้อมูลความลับ):** ข้อมูลลับรั่วไหลสู่ผู้ไม่มีสิทธิ์ &rarr; ทำลาย *Confidentiality* &rarr; ป้องกันด้วย: Encryption, Access Control
- **D — Denial of Service (การปฏิเสธการให้บริการ):** การทำให้ระบบล่มหรือไม่สามารถใช้งานได้ &rarr; ทำลาย *Availability* &rarr; ป้องกันด้วย: Redundancy, Rate Limiting
- **E — Elevation of Privilege (การยกระดับสิทธิ์โดยมิชอบ):** ผู้ใช้ทั่วไปยกระดับเป็นผู้ดูแลระบบ &rarr; ทำลาย *Authorization* &rarr; ป้องกันด้วย: Least Privilege, RBAC

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-physical-penetration-testing">5.5.5 Physical Penetration Testing &amp; Facility Controls: การทดสอบความปลอดภัยทางกายภาพ</h3>

ความมั่นคงปลอดภัยไซเบอร์จะไร้ความหมายหากผู้ไม่หวังดีสามารถเดินเข้าไปหยิบฮาร์ดดิสก์ในห้องเซิร์ฟเวอร์ได้โดยตรง **Physical Penetration Testing** คือการทดสอบที่ได้รับอนุญาตเพื่อประเมินความแข็งแกร่งของมาตรการควบคุมทางกายภาพ:

- **การทดสอบรั้ว ประตู และกุญแจ:** ทดสอบความแข็งแรงของรั้วรอบอาคาร, การสะเดาะกลอนประตูห้องเซิร์ฟเวอร์, หรือการลอดผ่านช่องเพดาน
- **การทดสอบระบบตรวจจับทางกายภาพ:** ตรวจสอบมุมอับของกล้องวงจรปิด (CCTV), ความไวของเซนเซอร์ตรวจจับความเคลื่อนไหว (Motion Sensors), และความพร้อมของเจ้าหน้าที่รักษาความปลอดภัย
- **การตรวจสอบนโยบายโต๊ะและหน้าจอสะอาด (Clean Desk / Clear Screen):** ตรวจสอบว่าพนักงานแอบจดรหัสผ่านแปะไว้ใต้คีย์บอร์ด หรือทิ้งเอกสารลับไว้บนโต๊ะหลังเลิกงานหรือไม่

</section>

<section class="reading-structure-pilot">

<h3 id="topic-5-5-social-engineering-testing">5.5.6 Social Engineering Testing &amp; Awareness: การทดสอบวิศวกรรมสังคม</h3>

**Social Engineering (วิศวกรรมสังคม)** คือศิลปะในการหลอกลวงหรือโน้มน้าวใจมนุษย์ให้เปิดเผยข้อมูลความลับ ยอมละเมิดขั้นตอนความปลอดภัย หรือติดตั้งมัลแวร์ โดยโจมตีที่จุดอ่อนของมนุษย์ (ความกลัว ความโลภ ความเห็นอกเห็นใจ หรือความเกรงใจ):

<section class="reading-definition-unit">
<h5>1. Phishing (การหลอกลวงผ่านอีเมล):</h5>

- **Phishing (ทั่วไป):** การหว่านส่งอีเมลหลอกลวงจำนวนมากไปยังผู้รับแบบไม่เจาะจง อ้างว่าบัญชีถูกระงับเพื่อให้เหยื่อคลิกลิงก์ปลอม
- **Spear Phishing:** การเจาะจงเป้าหมายไปยังบุคคลหรือองค์กรใดองค์กรหนึ่งโดยเฉพาะ มีการหาข้อมูลเหยื่อมาล่วงหน้าเพื่อสร้างความน่าเชื่อถือ
- **Whaling:** การพุ่งเป้าโจมตีผู้บริหารระดับสูง (CEO, CFO) เพื่อสั่งโอนเงินหรือขโมยความลับระดับชาติ
- **Smishing &amp; Vishing:** การหลอกลวงผ่านข้อความ SMS (Smishing) หรือการโทรศัพท์พูดคุยด้วยเสียง (Vishing)

</section>

<section class="reading-definition-unit">
<h5>2. Tailgating / Piggybacking (การเดินตามหลังเข้าประตู):</h5>

การที่บุคคลที่ไม่ได้รับอนุญาตแอบเดินตามหลังพนักงานที่แตะคีย์การ์ดผ่านประตูความปลอดภัยเข้ามาในพื้นที่หวงห้ามโดยอาศัยความเกรงใจหรือความมีน้ำใจของพนักงาน
- **มาตรการป้องกัน:** การติดตั้งประตูกลสองชั้น (Mantraps / Security Portals), ประตูกลหมุนแบบเดินได้ทีละคน (Turnstiles), และการอบรมพนักงานให้กล้าปฏิเสธไม่ให้คนอื่นเดินตาม

</section>

<section class="reading-definition-unit">
<h5>3. Impersonation &amp; Pretexting (การสวมรอยเป็นบุคคลอื่น):</h5>

การสร้างตัวตนสมมุติและเรื่องราวหลอกลวง (Pretext) เพื่อให้เหยื่อหลงเชื่อ เช่น แต่งตัวเป็นช่างเทคนิคไอที ช่างซ่อมแอร์ พนักงานส่งเอกสาร หรือผู้ตรวจสอบบัญชี เพื่อขอเดินเข้าไปในห้องเซิร์ฟเวอร์หรือขอดูข้อมูลสำคัญ
- **มาตรการป้องกัน:** การบังคับใช้ขั้นตอนการยืนยันตัวตนอย่างเคร่งครัด (Verification Procedures) ห้ามอนุญาตให้บุคคลภายนอกเข้าพื้นที่โดยไม่มีเจ้าหน้าที่ประกบ (Escort) ตลอดเวลา

</section>

</section>

</section>

<section class="reading-objective-section reading-structured-objective" id="domain-5-review">

## Domain 5 Summary, Distinctions &amp; Scenarios: สรุปและแบบฝึกหัดทบทวน

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>รวบรวมประเด็นเปรียบเทียบที่ข้อสอบมักนำมาทดสอบความแม่นยำ กับดักข้อสอบที่พบบ่อย และสถานการณ์จำลอง 12 ข้อสำหรับประเมินความพร้อม:</p>

<section class="reading-structure-pilot">

<h3 id="topic-5-review-scenarios">5.6.1 Core Concept Distinctions &amp; Exam Traps</h3>

<h4 class="reading-concept-group-title">12 ประเด็นเปรียบเทียบสำคัญใน Domain 5 (Concept Distinctions):</h4>

- **1. Symmetric vs. Asymmetric Encryption:** Symmetric ใช้กุญแจเดียว รวดเร็ว เหมาะกับข้อมูลขนาดใหญ่ (AES); Asymmetric ใช้ 2 กุญแจ ช้ากว่า แต่แก้ปัญหาการส่งกุญแจและทำลายมือชื่อดิจิทัลได้ (RSA, ECC)
- **2. Hashing vs. Encryption:** Hashing เป็นกระบวนการทางเดียว ตรวจสอบความถูกต้องสมบูรณ์ (Integrity) ถอดรหัสกลับไม่ได้; Encryption เป็นสองทาง คุ้มครองความลับ (Confidentiality) ถอดรหัสกลับได้
- **3. TPM vs. HSM:** TPM เป็นชิปบนเมนบอร์ดดูแลเครื่องเฉพาะตัว (Measured Boot / BitLocker); HSM เป็นอุปกรณ์แยกต่างหากระดับองค์กรรองรับ FIPS 140-2 Level 3/4 สำหรับกุญแจสำคัญระดับศูนย์ข้อมูล
- **4. Data at Rest vs. Data in Transit vs. Data in Use:** At Rest ปกป้องด้วย Full Disk Encryption; In Transit ปกป้องด้วย TLS/IPsec; In Use ปกป้องด้วย Secure Enclaves และ Memory Isolation
- **5. Clear vs. Purge vs. Destroy:** Clear ป้องกันเครื่องมือทั่วไปแต่วิธีทางแล็บอาจกู้ได้; Purge ป้องกันได้แม้ใช้เครื่องมือแล็บขั้นสูง; Destroy ทำลายสื่อทางกายภาพจนใช้งานไม่ได้ถาวร
- **6. Event vs. Alert vs. Incident:** Event คือเรื่องปกติทั่วไป; Alert คือการแจ้งเตือนเมื่อเกินเกณฑ์; Incident คือเหตุการณ์ที่มีผลกระทบเชิงลบต่อสามเหลี่ยม CIA
- **7. False Positive vs. False Negative:** False Positive คือแจ้งเตือนผิดทั้งที่ไม่มีภัย ทำให้เกิด Alert Fatigue; False Negative คือมีภัยจริงแต่ตรวจไม่พบ ซึ่งเป็นสภาวะที่อันตรายที่สุด
- **8. Tabletop Exercise (TTX) vs. Technical Testing:** TTX ซ้อมแบบอภิปรายในห้องประชุม ไม่มีผลต่อระบบจริง; Technical Testing คือการลงมือปฏิบัติทดสอบระบบจริง
- **9. Containment vs. Eradication:** Containment คือการกักกันโรคเพื่อจำกัดวงความเสียหาย (ดึงสาย LAN); Eradication คือการกำจัดมัลแวร์และอุดช่องโหว่ให้สะอาด
- **10. EOL vs. EOS:** EOL หยุดขายแต่ยังออกแพตช์; EOS หยุดสนับสนุนและหยุดออกแพตช์โดยสิ้นเชิง ต้องใช้ Compensating Controls
- **11. Patch Management vs. Change Management:** Patch Management คือกระบวนการอัปเดตระบบ 5 ขั้นตอน; Change Management คือกระบวนการอนุมัติการเปลี่ยนแปลง 7 ขั้นตอนผ่าน CAB
- **12. SAST vs. DAST:** SAST คือการสแกนซอร์สโค้ดในระยะเริ่มต้น (Shift-Left) โดยโปรแกรมไม่ต้องทำงาน; DAST คือการทดสอบแอปพลิเคชันจากภายนอกขณะกำลังทำงานจริง

<h4 class="reading-concept-group-title">กับดักข้อสอบที่พบบ่อยใน Domain 5 (Exam Traps):</h4>

- ถ้าข้อสอบถามถึงการทำลายข้อมูลบนระบบคลาวด์ที่เข้าไม่ถึงฮาร์ดแวร์จริง คำตอบคือ Crypto-shredding (การลบและทำลายกุญแจถอดรหัสทิ้ง)
- ถ้าข้อสอบถามถึงวิธีการกำจัดข้อมูลบนฮาร์ดดิสก์จานแม่เหล็กด้วยสนามแม่เหล็กเข้มข้น คำตอบคือ Degaussing แต่ห้ามตอบข้อนี้หากสื่อบันทึกเป็น SSD
- ถ้าข้อสอบถามถึงสิ่งที่อันตรายที่สุดในระบบเฝ้าระวัง คำตอบคือ False Negative (ภัยบุกรุกเข้ามาได้โดยไม่มีใครรู้ตัว)
- ถ้าข้อสอบถามถึงขั้นตอนแรกสุดที่ต้องทำเมื่อเครื่องปลายทางติด Ransomware คำตอบคือ Containment (การกักกันโฮสต์หรือตัดการเชื่อมต่อเครือข่ายทันที)
- ถ้าข้อสอบถามถึงคณะกรรมการที่มีหน้าที่อนุมัติคำขอการเปลี่ยนแปลงระบบ คำตอบคือ Change Advisory Board (CAB)
- ถ้าข้อสอบถามถึงเครื่องมือตรวจหาช่องโหว่ซอร์สโค้ดตั้งแต่ระยะเริ่มพัฒนา (Shift-Left) คำตอบคือ SAST (Static Application Security Testing)
- ถ้าข้อสอบถามถึงการเดินตามหลังพนักงานผ่านประตูความปลอดภัย คำตอบคือ Tailgating หรือ Piggybacking
- ถ้าข้อสอบถามถึงองค์ประกอบของลายมือชื่อดิจิทัล คำตอบคือ นำแฮชของข้อความไปเข้ารหัสด้วย Private Key ของผู้ส่ง

#### สถานการณ์จำลองและแนวคิดการวิเคราะห์ (Review Scenarios)

:::scenario
id: 1
badge: Scenario 01
topic: Data Sanitization & NIST SP 800-88
situation: โรงพยาบาลแห่งหนึ่งเตรียมปลดระวางอุปกรณ์ Solid-State Drive (SSD) ที่เคยจัดเก็บประวัติข้อมูลสุขภาพของผู้ป่วย (Protected Health Information - PHI) เพื่อนำไดรฟ์ไปบริจาคต่อให้กับสถานศึกษา ฝ่ายความปลอดภัยต้องการลบข้อมูลโดยมั่นใจว่าข้อมูลจะไม่สามารถกู้คืนได้ด้วยเครื่องมือทางห้องปฏิบัติการขั้นสูง แต่ยังคงรักษาโครงสร้างของ SSD ให้สามารถนำกลับมาใช้งานซ้ำได้
question: ตามมาตรฐาน NIST SP 800-88 Rev. 1 ระดับการทำลายข้อมูล (Sanitization Level) ใดที่เหมาะสมที่สุดสำหรับสถานการณ์นี้?
answer: Purge (Sanitization via Cryptographic Erase / Secure Erase)
reasoning: NIST SP 800-88 แบ่งระดับการล้างข้อมูลเป็น 3 ระดับหลัก: Clear (การเขียนทับระดับผู้ใช้ ไม่สามารถป้องกันเครื่องมือห้องแล็บขั้นสูงได้), Purge (การล้างข้อมูลระดับลึก เช่น Secure Erase ของคอนโทรลเลอร์ SSD หรือ Degaussing บนสื่อแม่เหล็ก ทำให้ไม่สามารถกู้คืนได้แม้ใช้เครื่องมือขั้นสูงในแล็บ แต่อุปกรณ์ยังนำมาใช้ต่อได้), และ Destroy (การทำลายสื่อทางกายภาพ เช่น บด ย่อย หรือเผา ซึ่งอุปกรณ์จะไม่สามารถใช้งานได้อีก)
:::

:::scenario
id: 2
badge: Scenario 02
topic: Data States & Cryptographic Controls
situation: ธนาคารพาณิชย์กำหนดนโยบายความมั่นคงปลอดภัยว่า หากเครื่องคอมพิวเตอร์แล็ปท็อปของพนักงานสูญหายหรือถูกขโมย ผู้ที่ได้เครื่องไปจะต้องไม่สามารถอ่านไฟล์เอกสารสัญญาหรือข้อมูลบัญชีลูกค้าที่บันทึกอยู่บนฮาร์ดดิสก์ได้เลย แม้จะถอดฮาร์ดดิสก์ไปต่อกับคอมพิวเตอร์เครื่องอื่นก็ตาม
question: มาตรการควบคุมความมั่นคงปลอดภัยข้อมูลในสถานะใด (Data State) และเทคโนโลยีใดที่ตอบโจทย์ความต้องการนี้โดยตรง?
answer: Data at Rest Protection — Full Disk Encryption (FDE / BitLocker)
reasoning: ข้อมูลที่ถูกบันทึกลงบนไดรฟ์จัดอยู่ในสถานะ Data at Rest (ข้อมูลขณะพักหรือจัดเก็บ) การป้องกันที่ตรงจุดที่สุดคือ Full Disk Encryption (FDE) เช่น BitLocker หรือการใช้ Self-Encrypting Drives (SED) ซึ่งจะเข้ารหัสทั้งไดรฟ์ด้วยอัลกอริทึมที่แข็งแกร่ง (AES) ทำให้หากไม่มีกุญแจถอดรหัส ข้อมูลในสื่อบันทึกจะไม่สามารถเปิดอ่านได้เลย
:::

:::scenario
id: 3
badge: Scenario 03
topic: Hybrid Cryptography & Key Exchange
situation: ในการออกแบบระบบโอนถ่ายไฟล์ความลับทางธุรกิจขนาดใหญ่ (10 GB) ข้ามเครือข่ายอินเทอร์เน็ต ทีมวิศวกรต้องการทั้งความเร็วในการประมวลผลสูง และความปลอดภัยสูงสุดในการส่งมอบกุญแจลับระหว่างต้นทางและปลายทางโดยที่ไม่มีกุญแจหลุดออกไประหว่างทาง
question: สถาปัตยกรรมการเข้ารหัสแบบใดที่นำข้อดีของการเข้ารหัสแบบสมมาตร (Symmetric) และแบบอสมมาตร (Asymmetric) มารวมกันเพื่อตอบโจทย์นี้?
answer: Hybrid Encryption (การเข้ารหัสแบบผสมผสาน)
reasoning: Hybrid Encryption นำจุดเด่นของทั้งสองระบบมาประสานกัน: ใช้อสมมาตร (Asymmetric เช่น RSA หรือ ECC) เพื่อแลกเปลี่ยน Session Key แบบสมมาตรอย่างปลอดภัย จากนั้นใช้การเข้ารหัสแบบสมมาตร (Symmetric เช่น AES-256) เข้ารหัสไฟล์ข้อมูลขนาดใหญ่ เนื่องจาก Symmetric มีความเร็วและประสิทธิภาพสูงกว่า Asymmetric นับร้อยเท่า
:::

:::scenario
id: 4
badge: Scenario 04
topic: Hardware Security Modules (HSM) vs. TPM
situation: ศูนย์ข้อมูลของสถาบันการเงินต้องการติดตั้งระบบสร้าง จัดเก็บ และบริหารจัดการวงจรกุญแจเข้ารหัสระดับองค์กร (Root CA Keys และ Financial Transaction Keys) ที่รองรับการประมวลผลคำขอถอดรหัสปริมาณมหาศาล และมีระบบป้องกันการงัดแงะทางกายภาพระดับสูงตามมาตรฐาน FIPS 140-2 Level 3/4
question: อุปกรณ์รักษาความมั่นคงปลอดภัยระดับฮาร์ดแวร์ชนิดใดที่เหมาะสมที่สุดสำหรับศูนย์ข้อมูลแห่งนี้?
answer: Hardware Security Module (HSM)
reasoning: HSM คืออุปกรณ์ฮาร์ดแวร์ภายนอกหรือระบบเครือข่ายสำหรับองค์กรขนาดใหญ่ ออกแบบมาเฉพาะเพื่อสร้าง ปกป้อง และบริหารกุญแจเข้ารหัสลับขั้นสูงสุด มีคุณสมบัติต่อต้านการงัดแงะ (Tamper-resistant) ต่างจาก TPM ซึ่งเป็นชิปฝังอยู่บนเมนบอร์ดของคอมพิวเตอร์เฉพาะเครื่องเพื่อดูแลความสมบูรณ์ของระบบ (Platform Integrity) และบูตระบบปลอดภัย (Secure Boot)
:::

:::scenario
id: 5
badge: Scenario 05
topic: SIEM & Log Correlation
situation: ระบบไฟร์วอลล์ตรวจพบการพยายามเชื่อมต่อผิดปกติจากอินเทอร์เน็ต แต่บันทึกเป็นเหตุการณ์ระดับต่ำ ขณะเดียวกันเครื่องเซิร์ฟเวอร์ Active Directory บันทึกการล็อกอินล้มเหลวติดต่อกัน 50 ครั้ง และเครื่องปลายทางของฝ่ายบัญชีตรวจพบการรันคำสั่ง PowerShell ที่น่าสงสัย
question: ระบบความมั่นคงปลอดภัยใดทำหน้าที่รวบรวมบันทึกเหตุการณ์ (Log Aggregation) จากอุปกรณ์ที่หลากหลายเหล่านี้มาวิเคราะห์ความสัมพันธ์ (Event Correlation) เพื่อแจ้งเตือนการโจมตีภาพรวม?
answer: SIEM (Security Information and Event Management)
reasoning: SIEM ทำหน้าที่รวบรวมข้อมูล Log จากแหล่งข้อมูลที่หลากหลาย (Firewall, AD, Endpoint, Network Devices) เข้าสู่ศูนย์กลาง และใช้กฎเกณฑ์ความสัมพันธ์ (Correlation Rules) ตรวจจับรูปแบบพฤติกรรมที่หากมองแยกกันจะไม่พบความผิดปกติ แต่เมื่อนำมาร้อยเรียงกันจะพบว่าเป็นขั้นตอนการโจมตีแบบบูรณาการ
:::

:::scenario
id: 6
badge: Scenario 06
topic: Security Alert Triage & Alert Fatigue
situation: เจ้าหน้าที่ศูนย์เฝ้าระวังความมั่นคงปลอดภัย (SOC) ได้รับการแจ้งเตือนจากระบบตรวจจับมากกว่า 5,000 ครั้งต่อวัน โดยพบว่ามากกว่า 95% เป็นการแจ้งเตือนกิจกรรมปกติของระบบ ส่งผลให้นักวิเคราะห์ทำงานหนักเกินไปและมองข้ามการแจ้งเตือนภัยคุกคามจริงที่แฝงเข้ามา
question: ปรากฏการณ์ที่เกิดการแจ้งเตือนกิจกรรมปกติว่าเป็นภัย (False Positive) จนนำไปสู่ความเหนื่อยล้าของเจ้าหน้าที่ เรียกว่าอะไร และภัยประเภทใดที่อันตรายที่สุดต่อความมั่นคงปลอดภัย?
answer: Alert Fatigue (ความเหนื่อยล้าจากการแจ้งเตือน) เกิดจาก False Positive; และภัยที่อันตรายที่สุดคือ False Negative
reasoning: False Positive (เตือนผิดพลาดทั้งที่ไม่มีภัย) ก่อให้เกิดภาวะ Alert Fatigue ทำให้เจ้าหน้าที่ละเลยการตรวจสอบ ขณะที่ False Negative (มีภัยคุกคามเกิดขึ้นจริงแต่ระบบตรวจไม่พบและไม่แจ้งเตือน) เป็นสถานการณ์ที่อันตรายที่สุด เพราะผู้โจมตีสามารถยึดครองระบบได้โดยที่องค์กรไม่รู้ตัว
:::

:::scenario
id: 7
badge: Scenario 07
topic: MITRE ATT&CK Taxonomy: Tactics vs. Techniques
situation: ในรายงานการวิเคราะห์ภัยคุกคามขั้นสูง ผู้เชี่ยวชาญระบุว่า "ผู้โจมตีพยายามดำเนินการในเป้าหมาย Lateral Movement (การเคลื่อนที่ในแนวราบ) โดยใช้วิธีการ Pass-the-Hash เพื่อขยายขอบเขตการเข้าถึงเซิร์ฟเวอร์เครื่องอื่นในโดเมน"
question: ตามโครงสร้างของ MITRE ATT&CK Framework คำว่า "Lateral Movement" และ "Pass-the-Hash" จัดอยู่ในหมวดหมู่ใดตามลำดับ?
answer: Lateral Movement คือ Tactic (เป้าหมาย/ทำไม) และ Pass-the-Hash คือ Technique (วิธีการ/ทำอย่างไร)
reasoning: ใน MITRE ATT&CK: Tactics คือ "ทำไม" หรือเป้าหมายทางยุทธวิธีของศัตรู (เช่น Initial Access, Persistence, Lateral Movement, Exfiltration) ส่วน Techniques คือ "ทำอย่างไร" หรือเทคนิควิธีการเฉพาะที่ศัตรูใช้เพื่อให้บรรลุเป้าหมายทางยุทธวิธีนั้น (เช่น Pass-the-Hash, Phishing, DLL Side-Loading)
:::

:::scenario
id: 8
badge: Scenario 08
topic: Incident Response Lifecycle: Containment
situation: ศูนย์ SOC ตรวจพบว่าคอมพิวเตอร์ของฝ่ายทรัพยากรบุคคลเครื่องหนึ่งติดมัลแวร์เรียกค่าไถ่ (Ransomware) และกำลังพยายามเข้ารหัสไฟล์แชร์ในเครือข่าย เจ้าหน้าที่จึงตัดการเชื่อมต่อสาย LAN และปิดสัญญาณ Wi-Fi ของเครื่องดังกล่าวทันที ก่อนที่จะเริ่มกระบวนการสแกนและลบมัลแวร์
question: การตัดการเชื่อมต่อเครือข่ายเพื่อหยุดยั้งการแพร่กระจายของมัลแวร์ จัดอยู่ในขั้นตอนใดของวงจรการตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย (Incident Response Lifecycle)?
answer: Containment (การควบคุมและจำกัดขอบเขตความเสียหาย)
reasoning: ขั้นตอน Containment มีเป้าหมายเพื่อจำกัดรัศมีความเสียหาย (Blast Radius) และป้องกันไม่ให้ภัยคุกคามลุกลามไปยังระบบอื่น เช่น การกักกันโฮสต์ (Isolate Host) หรือปิดพอร์ตเชื่อมต่อ เมื่อจำกัดวงความเสียหายสำเร็จแล้ว จึงจะเข้าสู่ขั้นตอน Eradication (การกำจัดมัลแวร์และปิดช่องโหว่) และ Recovery (การกู้คืนระบบจากข้อมูลสำรอง)
:::

:::scenario
id: 9
badge: Scenario 09
topic: Incident Response Exercises: Tabletop vs. Technical
situation: ผู้บริหารระดับสูง ฝ่ายกฎหมาย ฝ่ายประชาสัมพันธ์ และทีมไอที นัดประชุมร่วมกันในห้องประชุมใหญ่เพื่อจำลองสถานการณ์สมมุติว่าบริษัทถูกขโมยฐานข้อมูลลูกค้าและถูกขู่กรรโชก โดยผู้เข้าร่วมประชุมได้ร่วมกันหารือถึงบทบาทหน้าที่ ช่องทางการสื่อสาร และกระบวนการตัดสินใจตามแผน IRP โดยไม่มีการแตะต้องระบบคอมพิวเตอร์จริง
question: การฝึกซ้อมแผนการตอบสนองต่อเหตุการณ์ในรูปแบบการอภิปรายจำลองสถานการณ์เช่นนี้ เรียกว่าอะไร?
answer: Tabletop Exercise (TTX) — การฝึกซ้อมบนโต๊ะหรือการซ้อมแบบจำลองการอภิปราย
reasoning: Tabletop Exercise (TTX) เป็นการฝึกซ้อมตามสถานการณ์จำลองเชิงอภิปราย (Discussion-based) ในห้องประชุม เพื่อทดสอบความเข้าใจในบทบาท อำนาจการตัดสินใจ และขั้นตอนประสานงานตามแผน IRP โดยไม่มีค่าใช้จ่ายสูงและไม่มีความเสี่ยงต่อระบบงานจริง ต่างจาก Technical Testing / Simulation ที่ต้องลงมือปฏิบัติต่อระบบคอมพิวเตอร์และเครือข่ายจริง
:::

:::scenario
id: 10
badge: Scenario 10
topic: Asset Protection & EOL Compensating Controls
situation: โรงงานผลิตแห่งหนึ่งมีเครื่องควบคุมสายการผลิตที่ใช้ระบบปฏิบัติการรุ่นเก่าซึ่งผู้ผลิตประกาศสิ้นสุดการสนับสนุน (End of Support - EOS) และไม่มีแพตช์ความปลอดภัยอีกต่อไป แต่โรงงานยังไม่สามารถเปลี่ยนเครื่องใหม่ได้เนื่องจากมูลค่าเครื่องจักรสูงมาก
question: มาตรการควบคุมชดเชย (Compensating Control) ใดที่มีประสิทธิภาพสูงสุดในการปกป้องอุปกรณ์ EOS นี้จากการถูกโจมตีผ่านเครือข่าย?
answer: Network Segmentation / Isolation (การแบ่งแยกเครือข่ายและกักกันระบบอย่างเข้มงวด)
reasoning: เมื่ออุปกรณ์เข้าสู่สภาวะ EOL/EOS และไม่สามารถอัปเดตแพตช์ความปลอดภัยได้ องค์กรต้องบังคับใช้ Compensating Controls โดยมาตรการที่ได้ผลที่สุดคือการแยกอุปกรณ์ออกไปอยู่ใน VLAN อิสระ (Isolated VLAN) หรือตัดขาดจากอินเทอร์เน็ตภายนอก พร้อมทั้งตั้งค่าไฟร์วอลล์กั้นการสื่อสารไม่ให้เข้าถึงระบบงานอื่น เพื่อลดโอกาสการถูกโจมตี
:::

:::scenario
id: 11
badge: Scenario 11
topic: Patch Management & Change Advisory Board (CAB)
situation: ผู้ดูแลระบบเซิร์ฟเวอร์ได้รับแจ้งช่องโหว่วิกฤตระดับ 9.8 บนเว็บแอปพลิเคชัน จึงรีบทดสอบแพตช์บนเซิร์ฟเวอร์ทดสอบ (Staging Environment) จากนั้นจัดทำเอกสารคำขอเปลี่ยนแปลง (RFC) พร้อมแผนการย้อนกลับ (Rollback Plan) เพื่อเสนอต่อคณะกรรมการเพื่อขออนุมัติติดตั้งในช่วงเวลาบำรุงรักษาระบบ (Maintenance Window)
question: คณะกรรมการที่มีหน้าที่ประเมินผลกระทบ ความเสี่ยง และอนุมัติคำขอการเปลี่ยนแปลงระบบในกระบวนการ Change Management คือใคร?
answer: CAB (Change Advisory Board) — คณะกรรมการที่ปรึกษาการเปลี่ยนแปลง
reasoning: CAB เป็นคณะกรรมการสหสาขาวิชาชีพที่ทำหน้าที่ประเมินคำขอเปลี่ยนแปลง (Request for Change - RFC) ในแง่ของความเสี่ยงต่อธุรกิจ ผลกระทบต่อระบบงาน และความพร้อมของแผนย้อนกลับ (Rollback Plan) เพื่อป้องกันไม่ให้การปรับปรุงระบบก่อให้เกิดความเสียหายหรือระบบหยุดชะงัก
:::

:::scenario
id: 12
badge: Scenario 12
topic: Security Testing: SAST vs. DAST
situation: ในกระบวนการพัฒนาซอฟต์แวร์ตามแนวคิด DevSecOps ทีมพัฒนาต้องการตรวจหาช่องโหว่ความปลอดภัย เช่น ข้อผิดพลาดในการเขียนโปรแกรม (Insecure Coding Practices) และข้อบกพร่อง SQL Injection ตั้งแต่ระยะเริ่มต้นที่เขียนโค้ดเสร็จ โดยไม่จำเป็นต้องคอมไพล์หรือเปิดให้แอปพลิเคชันทำงาน
question: เครื่องมือและวิธีการทดสอบความมั่นคงปลอดภัยของแอปพลิเคชันแบบใดที่ตอบโจทย์การทดสอบซอร์สโค้ดในระยะต้นนี้?
answer: SAST (Static Application Security Testing) — การทดสอบความปลอดภัยของแอปพลิเคชันแบบสถิต
reasoning: SAST เป็นการทดสอบแบบ White-box ที่วิเคราะห์ซอร์สโค้ด (Source Code) หรือไบนารีโดยตรงในขณะที่โปรแกรมยังไม่ทำงาน (At Rest) สอดคล้องกับแนวคิด "Shift-Left" ที่ตรวจพบช่องโหว่ได้ตั้งแต่เนิ่น ๆ ต่างจาก DAST ที่เป็นการทดสอบแบบ Black-box ซึ่งต้องรอให้แอปพลิเคชันรันทำงานจริงเพื่อทดสอบการตอบสนองผ่านเครือข่าย
:::

<h4 class="reading-concept-group-title">5 สถานการณ์บูรณาการแบบ SOC และ Incident Response (Integrated Scenarios A–E):</h4>

<section class="reading-definition-unit">
<h5>Scenario A: Account Compromise (การถูกยึดครองบัญชีและการวิเคราะห์แบบบูรณาการ):</h5>

- **สถานการณ์:** ตรวจพบการพยายามล็อกอินล้มเหลวหลายสิบครั้ง ตามด้วยการล็อกอินสำเร็จ การยกระดับสิทธิ์ผ่าน PowerShell และการเข้าถึงไฟล์ข้อมูลการเงินลับ
- **ขั้นตอนการวิเคราะห์และรับมือ:**
  1. *Authentication Logs* เป็นหลักฐานเริ่มต้นในการตรวจจับรหัสผ่านถูกสุ่มเดา
  2. *SIEM Event Correlation* เชื่อมโยงกิจกรรมทั้ง 4 เข้าด้วยกันเป็นเรื่องราวเดียว
  3. *Triage* ประเมินความรุนแรงระดับสูง (P1) เนื่องจากเกี่ยวข้องกับสิทธิ์ผู้ดูแลระบบ
  4. *Containment:* ระงับการใช้งานบัญชี (Disable Account) และตัดเซสชันการเชื่อมต่อทันที
  5. *Eradication:* บังคับรีเซ็ตรหัสผ่าน เปิดใช้งาน MFA และลบสคริปต์อันตราย
  6. *Recovery:* คืนสิทธิ์การใช้งานที่ปลอดภัย และตรวจสอบความถูกต้องของไฟล์
  7. *Post-Incident Review:* ปรับปรุงนโยบายรหัสผ่านและสร้างกฎ SIEM ตรวจจับการสุ่มรหัสผ่าน

</section>

<section class="reading-definition-unit">
<h5>Scenario B: EOL Server ถูกพบช่องโหว่วิกฤต (Legacy Server Vulnerability Management):</h5>

- **สถานการณ์:** เซิร์ฟเวอร์ฐานข้อมูลเก่าของระบบบัญชีหมดอายุการสนับสนุน (EOS) ผู้ผลิตไม่ทำแพตช์อุดช่องโหว่อีกต่อไป แต่ยังไม่สามารถเปลี่ยนเครื่องได้เนื่องจากความซับซ้อนของซอฟต์แวร์
- **ขั้นตอนการวิเคราะห์และรับมือ:**
  1. *Asset Inventory* ชี้เป้าว่าระบบนี้เป็นสินทรัพย์ที่มีความสำคัญทางธุรกิจสูง
  2. *Compensating Controls:* ดำเนินการตัดขาดเซิร์ฟเวอร์ออกจากอินเทอร์เน็ตทันที (Network Segmentation) และอนุญาตให้เฉพาะเครื่องเซิร์ฟเวอร์แอปพลิเคชันที่ระบุไอพีไว้เข้าถึงได้เท่านั้น
  3. เพิ่มระดับการเฝ้าระวัง *Enhanced Logging &amp; Monitoring* ส่ง Log ตรงเข้า SIEM ตลอด 24 ชั่วโมง
  4. นำแผนการย้ายระบบ (Migration Plan) เข้าสู่กระบวนการ *Change Management* เพื่อวางกรอบเวลาปลดระวางถาวร

</section>

<section class="reading-definition-unit">
<h5>Scenario C: Deployment ทำให้เกิด Configuration Drift บนไฟร์วอลล์ (Firewall Drift Remediation):</h5>

- **สถานการณ์:** มีการเปิดพอร์ตบริการทดสอบบนไฟร์วอลล์สู่สาธารณะเพื่อแก้ปัญหาด่วน แต่วิศวกรลืมปิดพอร์ตหลังจากทดสอบเสร็จ
- **ขั้นตอนการวิเคราะห์และรับมือ:**
  1. *Configuration Baseline* ระบุไว้ชัดเจนว่าพอร์ตดังกล่าวต้องปิดใช้งานสู่ภายนอก
  2. การตรวจสอบ *Configuration Audit* อัตโนมัติตรวจพบความเบี่ยงเบน (Configuration Drift)
  3. ตรวจสอบระบบ *Change Management* พบว่าไม่มีเอกสาร RFC อนุมัติการเปิดพอร์ตนี้
  4. ดำเนินการปิดพอร์ตดังกล่าวให้กลับคืนสู่ค่ามาตรฐานความปลอดภัยทันที
  5. บันทึกรายงานข้อผิดพลาดและทบทวนระเบียบวินัยการเปลี่ยนแปลงระบบ

</section>

<section class="reading-definition-unit">
<h5>Scenario D: การทดสอบความปลอดภัยของ Web Application ก่อน Go-Live (SDLC Security Testing):</h5>

- **สถานการณ์:** ธนาคารเตรียมเปิดตัวแอปพลิเคชัน Mobile Banking ตัวใหม่
- **ขั้นตอนการวิเคราะห์และรับมือ:**
  1. *Threat Modeling:* ดำเนินการตั้งแต่ช่วงออกแบบ (Design Phase) เพื่อระบุความเสี่ยง Account Takeover และ Credential Theft
  2. *SAST:* สแกนซอร์สโค้ดในระหว่างพัฒนา เพื่อค้นหาจุดบกพร่อง Insecure Coding และ Hardcoded Secrets
  3. *DAST:* ทดสอบแอปพลิเคชันขณะรันบน Staging เพื่อตรวจสอบ Session Management และ Input Validation
  4. *Vulnerability Scanning:* ตรวจสอบเวอร์ชันของ Web Server และ Open Source Libraries
  5. *Penetration Testing:* ว่าจ้างผู้เชี่ยวชาญอิสระเจาะระบบตามขอบเขตที่ได้รับอนุญาตเพื่อพิสูจน์การบุกรุกจริง

</section>

<section class="reading-definition-unit">
<h5>Scenario E: การฝึกซ้อมแบบ Purple Team เมื่อระบบตรวจจับไม่พบ (Collaborative Retesting):</h5>

- **สถานการณ์:** Red Team จำลองการขโมยรหัสผ่าน (Credential Dumping) แต่ Blue Team ไม่พบการแจ้งเตือนบน SIEM
- **ขั้นตอนการวิเคราะห์และรับมือ:**
  1. Red Team ชี้แจงลำดับคำสั่งและเวลาที่ใช้โจมตีให้ Blue Team ทราบ
  2. ทั้งสองทีมตรวจสอบ Log พบว่าเครื่องปลายทางไม่ได้เปิดการบันทึก Audit Process Creation
  3. Blue Team เปิดใช้งานการบันทึก Log และเขียนกฎ Correlation Rule ดักจับพฤติกรรมบน SIEM
  4. Red Team ทำการจำลองการโจมตีซ้ำ (Retest)
  5. Blue Team ยืนยันว่าหน้าจอ SIEM มีการแจ้งเตือน Alert เกิดขึ้นอย่างถูกต้องและรวดเร็ว

</section>

<h4 class="reading-concept-group-title">Cheat Sheet ทบทวนก่อนสอบ (Pre-Exam Fast Review):</h4>

<section class="reading-definition-unit">
<h5>คำจำแบบหนึ่งบรรทัด (One-Line Memory Cues):</h5>

- **Encryption:** ปกป้องความลับ (Confidentiality) ด้วยการแปลง Plaintext &rarr; Ciphertext
- **Hash:** การตรวจสอบความสมบูรณ์ทางเดียว (One-way Integrity Check) ไม่สามารถถอดรหัสกลับได้
- **Digital Signature:** ยืนยันความสมบูรณ์และตัวตนผู้ส่ง (Integrity + Authenticity + Non-repudiation)
- **HSM:** อุปกรณ์ฮาร์ดแวร์ความปลอดภัยสูงเฉพาะทางสำหรับจัดเก็บและประมวลผลกุญแจเข้ารหัสลับ
- **Logging:** การบันทึกเหตุการณ์ (Record Events) ลงในแฟ้มข้อมูล
- **Monitoring:** การเฝ้าสังเกตและประเมินพฤติกรรม (Observe &amp; Evaluate) จากข้อมูล Log
- **SIEM:** รวม Log จากทุกแหล่งและทำ Event Correlation เพื่อตรวจจับภัยคุกคาม
- **DLP:** ควบคุมและป้องกันการรั่วไหลของข้อมูลความลับออกนอกองค์กร
- **SNMP Trap:** อุปกรณ์เครือข่ายส่งข้อความเตือนฉับพลันหาเซิร์ฟเวอร์บริหารจัดการโดยไม่ต้องรอถาม
- **Triage:** การคัดกรองและจัดลำดับความเร่งด่วนของการแจ้งเตือนภัย
- **Event Correlation:** การเชื่อมโยงเหตุการณ์หลายรายการที่สัมพันธ์กันเพื่อระบุการโจมตี
- **CTI (Cyber Threat Intelligence):** ข่าวกรองภัยคุกคามที่ผ่านการวิเคราะห์เพื่อใช้ตัดสินใจ
- **IOC (Indicator of Compromise):** ร่องรอยหรือหลักฐานทางดิจิทัลที่บ่งชี้ว่าระบบถูกบุกรุก
- **MITRE Tactic:** ทำไม (WHY / Attacker's Tactical Goal)
- **MITRE Technique:** อย่างไร (HOW / Specific Method Used)
- **IR Preparation:** การเตรียมความพร้อมล่วงหน้า (นโยบาย, ทีม CSIRT, Playbook, เครื่องมือ)
- **Detection &amp; Analysis:** การตรวจจับ ยืนยันภัย และประเมินขอบเขตความเสียหาย
- **Containment:** การจำกัดวงความเสียหายและหยุดยั้งการแพร่กระจาย (ดึงสาย LAN, กักกันโฮสต์)
- **Eradication:** การกำจัดต้นตอ มัลแวร์ แบ็คดอร์ และอุดช่องโหว่ความปลอดภัย
- **Recovery:** การกู้คืนระบบงานและข้อมูลจาก Clean Backup กลับมาให้บริการอย่างปลอดภัย
- **Post-Incident Review:** การประชุมถอดบทเรียน (Lessons Learned) เพื่อปรับปรุงแผน IRP
- **Tabletop Exercise:** การฝึกซ้อมแผนแบบอภิปรายจำลองสถานการณ์ในห้องประชุม (Discussion-based)
- **Technical Testing:** การลงมือปฏิบัติทดสอบมาตรการและระบบงานจริงในสภาพแวดล้อมควบคุม
- **Asset Lifecycle:** วงจรชีวิตสินทรัพย์ตั้งแต่ Plan &rarr; Acquire &rarr; Deploy &rarr; Maintain &rarr; Monitor &rarr; Dispose
- **EOL / EOS:** สินค้าหมดอายุการสนับสนุน ขาดแพตช์ความปลอดภัย
- **Compensating Controls:** มาตรการควบคุมชดเชยเพื่อบรรเทาความเสี่ยงเมื่อไม่สามารถใช้มาตรการหลักได้
- **Baseline:** ค่าการตั้งค่าความมั่นคงปลอดภัยขั้นต่ำที่ได้รับอนุมัติ (Desired State)
- **Configuration Drift:** ปรากฏการณ์ที่การตั้งค่าระบบค่อย ๆ เบี่ยงเบนออกจาก Baseline
- **Patch Management:** กระบวนการอุดช่องโหว่ 5 ขั้นตอน (Identify &rarr; Assess &rarr; Test &rarr; Deploy &rarr; Verify)
- **Change Management:** กระบวนการควบคุมการเปลี่ยนแปลง 7 ขั้นตอนผ่านการอนุมัติของ CAB
- **Blue Team:** ฝ่ายตั้งรับ เฝ้าระวัง และตอบสนองต่อเหตุการณ์ (Defenders)
- **Red Team:** ฝ่ายรุก จำลองบทบาทเป็นแฮกเกอร์จริงเพื่อทดสอบระบบ (Attackers)
- **Purple Team:** ผสานความร่วมมือระหว่าง Red และ Blue เพื่อยกระดับการตรวจจับ
- **Vulnerability Scanning:** การใช้เครื่องมืออัตโนมัติตรวจหาช่องโหว่ที่รู้จัก (Known Weaknesses)
- **Penetration Testing:** การจำลองการโจมตีที่ได้รับอนุญาตเพื่อพิสูจน์การเจาะระบบได้จริง (Exploitability)
- **SAST:** การสแกนวิเคราะห์ซอร์สโค้ดโดยไม่ต้องรันโปรแกรม (White-box / At Rest)
- **DAST:** การทดสอบแอปพลิเคชันขณะกำลังทำงานจริงผ่านเครือข่าย (Black-box / In Runtime)
- **Threat Modeling:** การวิเคราะห์ภัยคุกคามในระยะออกแบบระบบ (Design Phase) ก่อนเขียนโค้ด
- **Physical Pentest:** การทดสอบความแข็งแกร่งของมาตรการควบคุมทางกายภาพ (รั้ว ประตู ล็อค)
- **Phishing:** การหลอกลวงผ่านการสื่อสาร (อีเมล, SMS) เพื่อให้เหยื่อเปิดเผยข้อมูล
- **Tailgating:** การแอบเดินตามหลังผู้มีสิทธิ์ผ่านประตูความปลอดภัยเข้าสู่พื้นที่หวงห้าม
- **Impersonation:** การแอบอ้างสวมรอยเป็นบุคคลอื่น (เช่น ช่างไอที) เพื่อขอเข้าถึงระบบ

</section>

<section class="reading-definition-unit">
<h5>5 ลำดับกระบวนการสำคัญที่ควรท่องจำ (Key Process Sequences):</h5>

1. **Incident Response Lifecycle (6 ขั้นตอน):** Preparation &rarr; Detection &amp; Analysis &rarr; Containment &rarr; Eradication &rarr; Recovery &rarr; Post-Incident Review
2. **Patch Management Process (5 ขั้นตอน):** Identify &rarr; Assess &rarr; Test &rarr; Deploy &rarr; Verify
3. **Change Management Process (7 ขั้นตอน):** Request &rarr; Assess &rarr; Approve (CAB) &rarr; Schedule &rarr; Test &rarr; Implement &rarr; Post-Implementation Review (PIR)
4. **Asset Lifecycle Management (6 ขั้นตอน):** Plan &rarr; Acquire &rarr; Deploy &rarr; Maintain &rarr; Monitor &rarr; Dispose
5. **Purple Team Collaborative Loop (5 ขั้นตอน):** Simulate Attack &rarr; Observe Detection &rarr; Identify Gaps &rarr; Improve Controls &rarr; Retest &amp; Validate

</section>

<section class="reading-definition-unit">
<h5>10 ข้อที่ต้องจำให้แม่นที่สุดสำหรับการสอบ ISC2 CC:</h5>

1. **SIEM ทำ Event Correlation:** ทำหน้าที่รวบรวม Log จากอุปกรณ์หลากหลายประเภทและเชื่อมโยงหาความสัมพันธ์ของเหตุการณ์เพื่อชี้เป้าภัยคุกคาม
2. **IOC เป็นหลักฐานที่ *อาจ* บ่งชี้ Compromise:** ไม่ใช่หลักฐานตัดสินเด็ดขาดเสมอ ต้องพิจารณาบริบท วันเวลา และค่าความเชื่อมั่นประกอบ
3. **MITRE ATT&amp;CK:** Tactics คือ **เป้าหมาย (Why)**, Techniques คือ **วิธีการ (How)**
4. **ความแตกต่างของ 3 ขั้นตอน IRP:** Containment = หยุดการลาม; Eradication = กำจัดสาเหตุ; Recovery = กู้คืนบริการ
5. **Tabletop vs. Technical:** Tabletop คือการประชุมอภิปรายจำลองบนโต๊ะ; Technical Testing คือการลงมือทดสอบระบบจริง
6. **EOL / EOS:** เพิ่มความเสี่ยงอย่างมากเพราะผู้ผลิตหยุดออกแพตช์ ต้องบังคับใช้ **Compensating Controls (การแบ่งแยกเครือข่าย/กักกัน)** ระหว่างรอเปลี่ยน
7. **Baseline vs. Drift:** Baseline คือค่ามาตรฐานที่ปลอดภัย (Desired State); Drift คือความเบี่ยงเบนที่เกิดขึ้นจากการแก้ไขระบบโดยพลการ
8. **Configuration vs. Change:** Configuration Management ดูแลว่าระบบ *ควรมีสถานะอย่างไร*; Change Management ควบคุมว่า *การแก้ไขควรเกิดขึ้นเมื่อใดและทำอย่างไร*
9. **SAST vs. DAST:** SAST ตรวจสอบซอร์สโค้ดโดยไม่ต้องรันโปรแกรม; DAST ทดสอบแอปพลิเคชันจากภายนอกขณะกำลังรันทำงานจริง
10. **กลวิธี Social Engineering:** Phishing คือหลอกผ่านข้อความ; Tailgating คือแอบเดินตามหลังคนอื่นผ่านประตู; Impersonation คือแอบอ้างสวมรอยเป็นบุคคลอื่น

</section>

</section>

</section>

