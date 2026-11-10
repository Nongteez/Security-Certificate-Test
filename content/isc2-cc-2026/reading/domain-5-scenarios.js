/**
 * Domain 5: Security Operations — Review Scenarios Data Module
 *
 * 12 Grounded Educational Practice Scenarios reflecting core Domain 5 syllabus targets:
 * - 01: Data Sanitization & NIST SP 800-88 Media Sanitization (Purge vs. Clear for SSDs)
 * - 02: Cryptographic Protection for Data at Rest vs. Data in Transit (Full Disk Encryption & TLS)
 * - 03: Hybrid Cryptography & Bulk Data Transmission (Symmetric AES payload + Asymmetric RSA key exchange)
 * - 04: Platform trust vs. service-key operations (TPM vs. selected HSM)
 * - 05: Centralized Log Aggregation & Telemetry Correlation (SIEM Incident Detection)
 * - 06: Security Alert Triage & Alert Fatigue Mitigation (False Positive vs. False Negative)
 * - 07: Threat Framework Taxonomy (MITRE ATT&CK Tactics [Why] vs. Techniques [How])
 * - 08: Incident Response Lifecycle Phase Boundaries (Network Containment before Eradication)
 * - 09: Discussion-Based Readiness vs. Technical Verification (Tabletop Exercise / TTX)
 * - 10: Legacy Asset Protection & Compensating Controls (EOL/EOS Network Segmentation)
 * - 11: Controlled Operational Maintenance (5-Step Patch Management & 7-Step Change Advisory Board)
 * - 12: Application Security Testing Alignment (SAST Shift-Left Source Code Analysis vs. DAST Runtime)
 */

export const domain5Scenarios = [
  {
    id: 1,
    topic: 'Data Sanitization & NIST SP 800-88',
    situation: 'โรงพยาบาลจะบริจาค SSD ที่เคยเก็บข้อมูลผู้ป่วย ต้องการให้การกู้ข้อมูลระดับแล็บไม่อาจทำได้ในทางปฏิบัติและให้ไดรฟ์ยังใช้ต่อได้ โดยต้องตรวจวิธีที่รุ่นนั้นรองรับและยอมรับผลตามนโยบายก่อนส่งต่อ / A hospital plans to donate a patient-data SSD. It needs infeasible advanced recovery while retaining usability, subject to a supported technique and an accepted sanitization outcome.',
    question: 'ตาม NIST SP 800-88 Rev. 2 วิธีใดตรงกับเป้าหมายของกรณีนี้? / Which sanitization method matches this case\'s goal?',
    answer: 'Purge (ใช้เทคนิคที่เหมาะกับ SSD และตรวจผลแล้ว / SSD-appropriate technique with verified and validated results)',
    reasoning: 'Purge ตรงกับเป้าหมายการกู้ระดับแล็บและการใช้สื่อต่อ ต้องเลือกเทคนิคที่ SSD รองรับ โดย CE ใช้ได้เมื่อครบเงื่อนไขการเข้ารหัสและกุญแจ การ Degauss ไม่ใช้กับ SSD และชื่อ Secure Erase อย่างเดียวไม่พิสูจน์ผล ต้อง Verification และ Validation ก่อนยอมรับ / Purge matches the advanced-recovery goal while aiming to retain usability. Select a supported SSD technique; CE requires appropriate encryption and key conditions. Degaussing is unsuitable for SSDs, and a Secure Erase label alone is not proof. Verify completion and validate effectiveness.'
  },
  {
    id: 2,
    topic: 'Data States & Cryptographic Controls',
    situation: 'ธนาคารพาณิชย์กำหนดนโยบายความมั่นคงปลอดภัยว่า หากเครื่องคอมพิวเตอร์แล็ปท็อปของพนักงานสูญหายหรือถูกขโมย ผู้ที่ได้เครื่องไปจะต้องไม่สามารถอ่านไฟล์เอกสารสัญญาหรือข้อมูลบัญชีลูกค้าที่บันทึกอยู่บนฮาร์ดดิสก์ได้เลย แม้จะถอดฮาร์ดดิสก์ไปต่อกับคอมพิวเตอร์เครื่องอื่นก็ตาม',
    question: 'มาตรการควบคุมความมั่นคงปลอดภัยข้อมูลในสถานะใด (Data State) และเทคโนโลยีใดที่ตอบโจทย์ความต้องการนี้โดยตรง?',
    answer: 'Data at Rest Protection — Full Disk Encryption (FDE / BitLocker)',
    reasoning: 'ข้อมูลที่ถูกบันทึกลงบนไดรฟ์จัดอยู่ในสถานะ Data at Rest (ข้อมูลขณะพักหรือจัดเก็บ) การป้องกันที่ตรงจุดที่สุดคือ Full Disk Encryption (FDE) เช่น BitLocker หรือการใช้ Self-Encrypting Drives (SED) ซึ่งจะเข้ารหัสทั้งไดรฟ์ด้วยอัลกอริทึมที่แข็งแกร่ง (AES) ทำให้หากไม่มีกุญแจถอดรหัส ข้อมูลในสื่อบันทึกจะไม่สามารถเปิดอ่านได้เลย'
  },
  {
    id: 3,
    topic: 'Hybrid Cryptography & Key Exchange',
    situation: 'ในการออกแบบระบบโอนถ่ายไฟล์ความลับทางธุรกิจขนาดใหญ่ (10 GB) ข้ามเครือข่ายอินเทอร์เน็ต ทีมวิศวกรต้องการทั้งความเร็วในการประมวลผลสูง และความปลอดภัยสูงสุดในการส่งมอบกุญแจลับระหว่างต้นทางและปลายทางโดยที่ไม่มีกุญแจหลุดออกไประหว่างทาง',
    question: 'สถาปัตยกรรมการเข้ารหัสแบบใดที่นำข้อดีของการเข้ารหัสแบบสมมาตร (Symmetric) และแบบอสมมาตร (Asymmetric) มารวมกันเพื่อตอบโจทย์นี้?',
    answer: 'Hybrid Encryption (การเข้ารหัสแบบผสมผสาน)',
    reasoning: 'Hybrid Encryption นำจุดเด่นของทั้งสองระบบมาประสานกัน: ใช้อสมมาตร (Asymmetric เช่น RSA หรือ ECC) เพื่อแลกเปลี่ยน Session Key แบบสมมาตรอย่างปลอดภัย จากนั้นใช้การเข้ารหัสแบบสมมาตร (Symmetric เช่น AES-256) เข้ารหัสไฟล์ข้อมูลขนาดใหญ่ เนื่องจาก Symmetric มีความเร็วและประสิทธิภาพสูงกว่า Asymmetric นับร้อยเท่า'
  },
  {
    id: 4,
    topic: 'Hardware Security Modules (HSM) vs. TPM',
    situation: "ศูนย์ข้อมูลของสถาบันการเงินต้องการระบบสร้าง ปกป้อง และบริหาร Root CA Keys และ Financial Transaction Keys สำหรับบริการหลายระบบ โดยต้องเลือกรุ่นที่รองรับภาระงานและมีใบรับรอง FIPS 140-3 ตรงตามข้อกำหนดของกรณีนี้ / A financial institution needs shared CA/payment-key operations and must select a module whose capacity and FIPS 140-3 validation meet this case's requirements.",
    question: 'อุปกรณ์รักษาความมั่นคงปลอดภัยระดับฮาร์ดแวร์ชนิดใดที่เหมาะสมที่สุดสำหรับศูนย์ข้อมูลแห่งนี้?',
    answer: 'Hardware Security Module (HSM)',
    reasoning: 'HSM เหมาะกับงานกุญแจของบริการในกรณีนี้ แต่ต้องตรวจความสามารถและใบรับรองของโมดูลที่เลือก ส่วน TPM เน้นความเชื่อถือและกุญแจของแพลตฟอร์ม ไม่ได้จำกัดเฉพาะชิปแยกบนเมนบอร์ด / An HSM fits this service-key use case; verify the selected module\'s capabilities and certificate. A TPM focuses on platform trust and keys and need not be a discrete motherboard chip.'
  },
  {
    id: 5,
    topic: 'SIEM & Log Correlation',
    situation: 'ระบบไฟร์วอลล์ตรวจพบการพยายามเชื่อมต่อผิดปกติจากอินเทอร์เน็ต แต่บันทึกเป็นเหตุการณ์ระดับต่ำ ขณะเดียวกันเครื่องเซิร์ฟเวอร์ Active Directory บันทึกการล็อกอินล้มเหลวติดต่อกัน 50 ครั้ง และเครื่องปลายทางของฝ่ายบัญชีตรวจพบการรันคำสั่ง PowerShell ที่น่าสงสัย',
    question: 'ระบบความมั่นคงปลอดภัยใดทำหน้าที่รวบรวมบันทึกเหตุการณ์ (Log Aggregation) จากอุปกรณ์ที่หลากหลายเหล่านี้มาวิเคราะห์ความสัมพันธ์ (Event Correlation) เพื่อแจ้งเตือนการโจมตีภาพรวม?',
    answer: 'SIEM (Security Information and Event Management)',
    reasoning: 'SIEM ทำหน้าที่รวบรวมข้อมูล Log จากแหล่งข้อมูลที่หลากหลาย (Firewall, AD, Endpoint, Network Devices) เข้าสู่ศูนย์กลาง และใช้กฎเกณฑ์ความสัมพันธ์ (Correlation Rules) ตรวจจับรูปแบบพฤติกรรมที่หากมองแยกกันจะไม่พบความผิดปกติ แต่เมื่อนำมาร้อยเรียงกันจะพบว่าเป็นขั้นตอนการโจมตีแบบบูรณาการ'
  },
  {
    id: 6,
    topic: 'Security Alert Triage & Alert Fatigue',
    situation: 'เจ้าหน้าที่ศูนย์เฝ้าระวังความมั่นคงปลอดภัย (SOC) ได้รับการแจ้งเตือนจากระบบตรวจจับมากกว่า 5,000 ครั้งต่อวัน โดยพบว่ามากกว่า 95% เป็นการแจ้งเตือนกิจกรรมปกติของระบบ ส่งผลให้นักวิเคราะห์ทำงานหนักเกินไปและมองข้ามการแจ้งเตือนภัยคุกคามจริงที่แฝงเข้ามา',
    question: 'การเตือนกิจกรรมปกติว่าเป็นภัย (False Positive) สะสมทำให้เกิดอะไร และเหตุใดต้องประเมินผลกระทบของ False Positive กับ False Negative ตามบริบท?',
    answer: 'False Positive ที่สะสมอาจทำให้ Alert Fatigue; False Negative คือภัยจริงที่ไม่ถูกตรวจพบ ความรุนแรงของทั้งสองขึ้นกับผลกระทบและบริบท',
    reasoning: 'False Positive ที่สะสมอาจทำให้เจ้าหน้าที่ล้าและพลาดสัญญาณสำคัญ ขณะที่ False Negative ปล่อยให้ภัยจริงดำเนินต่อโดยไม่ถูกตรวจพบ ทั้งสองอาจรุนแรงได้ ต้องพิจารณาผลกระทบ ความเชื่อมั่น และความสำคัญของระบบ / False positives can cause fatigue or unnecessary disruption; false negatives leave real threats undetected. Assess impact and context rather than assuming one type is always worst.'
  },
  {
    id: 7,
    topic: 'MITRE ATT&CK Taxonomy: Tactics vs. Techniques',
    situation: 'ในรายงานการวิเคราะห์ภัยคุกคามขั้นสูง ผู้เชี่ยวชาญระบุว่า "ผู้โจมตีพยายามดำเนินการในเป้าหมาย Lateral Movement (การเคลื่อนที่ในแนวราบ) โดยใช้วิธีการ Pass-the-Hash เพื่อขยายขอบเขตการเข้าถึงเซิร์ฟเวอร์เครื่องอื่นในโดเมน"',
    question: 'ตามโครงสร้างของ MITRE ATT&CK Framework คำว่า "Lateral Movement" และ "Pass-the-Hash" จัดอยู่ในหมวดหมู่ใดตามลำดับ?',
    answer: 'Lateral Movement คือ Tactic (เป้าหมาย/ทำไม) และ Pass-the-Hash คือ Technique (วิธีการ/ทำอย่างไร)',
    reasoning: 'ใน MITRE ATT&CK: Tactics คือ "ทำไม" หรือเป้าหมายทางยุทธวิธีของศัตรู (เช่น Initial Access, Persistence, Lateral Movement, Exfiltration) ส่วน Techniques คือ "ทำอย่างไร" หรือเทคนิควิธีการเฉพาะที่ศัตรูใช้เพื่อให้บรรลุเป้าหมายทางยุทธวิธีนั้น (เช่น Pass-the-Hash, Phishing, DLL Side-Loading)'
  },
  {
    id: 8,
    topic: 'Incident Response Lifecycle: Containment',
    situation: 'ศูนย์ SOC ตรวจพบว่าคอมพิวเตอร์ของฝ่ายทรัพยากรบุคคลเครื่องหนึ่งติดมัลแวร์เรียกค่าไถ่ (Ransomware) และกำลังพยายามเข้ารหัสไฟล์แชร์ในเครือข่าย เจ้าหน้าที่จึงตัดการเชื่อมต่อสาย LAN และปิดสัญญาณ Wi-Fi ของเครื่องดังกล่าวทันที ก่อนที่จะเริ่มกระบวนการสแกนและลบมัลแวร์',
    question: 'การตัดการเชื่อมต่อเครือข่ายเพื่อหยุดยั้งการแพร่กระจายของมัลแวร์ จัดอยู่ในขั้นตอนใดของวงจรการตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย (Incident Response Lifecycle)?',
    answer: 'Containment (การควบคุมและจำกัดขอบเขตความเสียหาย)',
    reasoning: 'ขั้นตอน Containment มีเป้าหมายเพื่อจำกัดรัศมีความเสียหาย (Blast Radius) และป้องกันไม่ให้ภัยคุกคามลุกลามไปยังระบบอื่น เช่น การกักกันโฮสต์ (Isolate Host) หรือปิดพอร์ตเชื่อมต่อ เมื่อจำกัดวงความเสียหายสำเร็จแล้ว จึงจะเข้าสู่ขั้นตอน Eradication (การกำจัดมัลแวร์และปิดช่องโหว่) และ Recovery (การกู้คืนระบบจากข้อมูลสำรอง)'
  },
  {
    id: 9,
    topic: 'Incident Response Exercises: Tabletop vs. Technical',
    situation: 'ผู้บริหารระดับสูง ฝ่ายกฎหมาย ฝ่ายประชาสัมพันธ์ และทีมไอที นัดประชุมร่วมกันในห้องประชุมใหญ่เพื่อจำลองสถานการณ์สมมุติว่าบริษัทถูกขโมยฐานข้อมูลลูกค้าและถูกขู่กรรโชก โดยผู้เข้าร่วมประชุมได้ร่วมกันหารือถึงบทบาทหน้าที่ ช่องทางการสื่อสาร และกระบวนการตัดสินใจตามแผน IRP โดยไม่มีการแตะต้องระบบคอมพิวเตอร์จริง',
    question: 'การฝึกซ้อมแผนการตอบสนองต่อเหตุการณ์ในรูปแบบการอภิปรายจำลองสถานการณ์เช่นนี้ เรียกว่าอะไร?',
    answer: 'Tabletop Exercise (TTX) — การฝึกซ้อมบนโต๊ะหรือการซ้อมแบบจำลองการอภิปราย',
    reasoning: 'Tabletop Exercise (TTX) เป็นการฝึกซ้อมตามสถานการณ์จำลองเชิงอภิปราย (Discussion-based) ในห้องประชุม เพื่อทดสอบความเข้าใจในบทบาท อำนาจการตัดสินใจ และขั้นตอนประสานงานตามแผน IRP โดยไม่มีค่าใช้จ่ายสูงและไม่มีความเสี่ยงต่อระบบงานจริง ต่างจาก Technical Testing / Simulation ที่ต้องลงมือปฏิบัติต่อระบบคอมพิวเตอร์และเครือข่ายจริง'
  },
  {
    id: 10,
    topic: 'Asset Protection & EOL Compensating Controls',
    situation: 'โรงงานผลิตแห่งหนึ่งมีเครื่องควบคุมสายการผลิตที่ใช้ระบบปฏิบัติการรุ่นเก่าซึ่งผู้ผลิตประกาศสิ้นสุดการสนับสนุน (End of Support - EOS) และไม่มีแพตช์ความปลอดภัยอีกต่อไป แต่โรงงานยังไม่สามารถเปลี่ยนเครื่องใหม่ได้เนื่องจากมูลค่าเครื่องจักรสูงมาก',
    question: 'มาตรการควบคุมชดเชย (Compensating Control) ใดที่มีประสิทธิภาพสูงสุดในการปกป้องอุปกรณ์ EOS นี้จากการถูกโจมตีผ่านเครือข่าย?',
    answer: 'Network Segmentation / Isolation (การแบ่งแยกเครือข่ายและกักกันระบบอย่างเข้มงวด)',
    reasoning: 'เมื่ออุปกรณ์เข้าสู่สภาวะ EOL/EOS และไม่สามารถอัปเดตแพตช์ความปลอดภัยได้ องค์กรต้องบังคับใช้ Compensating Controls โดยมาตรการที่ได้ผลที่สุดคือการแยกอุปกรณ์ออกไปอยู่ใน VLAN อิสระ (Isolated VLAN) หรือตัดขาดจากอินเทอร์เน็ตภายนอก พร้อมทั้งตั้งค่าไฟร์วอลล์กั้นการสื่อสารไม่ให้เข้าถึงระบบงานอื่น เพื่อลดโอกาสการถูกโจมตี'
  },
  {
    id: 11,
    topic: 'Patch Management & Change Advisory Board (CAB)',
    situation: 'ผู้ดูแลระบบเซิร์ฟเวอร์ได้รับแจ้งช่องโหว่วิกฤตระดับ 9.8 บนเว็บแอปพลิเคชัน จึงรีบทดสอบแพตช์บนเซิร์ฟเวอร์ทดสอบ (Staging Environment) จากนั้นจัดทำเอกสารคำขอเปลี่ยนแปลง (RFC) พร้อมแผนการย้อนกลับ (Rollback Plan) เพื่อเสนอต่อคณะกรรมการเพื่อขออนุมัติติดตั้งในช่วงเวลาบำรุงรักษาระบบ (Maintenance Window)',
    question: 'คณะกรรมการที่มีหน้าที่ประเมินผลกระทบ ความเสี่ยง และอนุมัติคำขอการเปลี่ยนแปลงระบบในกระบวนการ Change Management คือใคร?',
    answer: 'CAB (Change Advisory Board) — คณะกรรมการที่ปรึกษาการเปลี่ยนแปลง',
    reasoning: 'CAB เป็นคณะกรรมการสหสาขาวิชาชีพที่ทำหน้าที่ประเมินคำขอเปลี่ยนแปลง (Request for Change - RFC) ในแง่ของความเสี่ยงต่อธุรกิจ ผลกระทบต่อระบบงาน และความพร้อมของแผนย้อนกลับ (Rollback Plan) เพื่อป้องกันไม่ให้การปรับปรุงระบบก่อให้เกิดความเสียหายหรือระบบหยุดชะงัก'
  },
  {
    id: 12,
    topic: 'Security Testing: SAST vs. DAST',
    situation: 'ในกระบวนการพัฒนาซอฟต์แวร์ตามแนวคิด DevSecOps ทีมพัฒนาต้องการตรวจหาช่องโหว่ความปลอดภัย เช่น ข้อผิดพลาดในการเขียนโปรแกรม (Insecure Coding Practices) และข้อบกพร่อง SQL Injection ตั้งแต่ระยะเริ่มต้นที่เขียนโค้ดเสร็จ โดยไม่จำเป็นต้องคอมไพล์หรือเปิดให้แอปพลิเคชันทำงาน',
    question: 'เครื่องมือและวิธีการทดสอบความมั่นคงปลอดภัยของแอปพลิเคชันแบบใดที่ตอบโจทย์การทดสอบซอร์สโค้ดในระยะต้นนี้?',
    answer: 'SAST (Static Application Security Testing) — การทดสอบความปลอดภัยของแอปพลิเคชันแบบสถิต',
    reasoning: 'SAST เป็นการทดสอบแบบ White-box ที่วิเคราะห์ซอร์สโค้ด (Source Code) หรือไบนารีโดยตรงในขณะที่โปรแกรมยังไม่ทำงาน (At Rest) สอดคล้องกับแนวคิด "Shift-Left" ที่ตรวจพบช่องโหว่ได้ตั้งแต่เนิ่น ๆ ต่างจาก DAST ที่เป็นการทดสอบแบบ Black-box ซึ่งต้องรอให้แอปพลิเคชันรันทำงานจริงเพื่อทดสอบการตอบสนองผ่านเครือข่าย'
  }
];

