/**
 * tools/draft-domain-1-questions.mjs
 *
 * Staged questions for ISC2 CC 2026 Domain 1 (Security Principles).
 * IDs: 584 - 607 (24 items).
 * Fully grounded in Domain 1 curation plan (O01 - O18).
 */

export const domain1NewQuestions = [
  // =========================================================================
  // BATCH 1: Subtopic 1.1 — Security Concepts (O01 - O07)
  // =========================================================================
  {
    id: 584,
    dom: 1,
    question: "During a routine software maintenance update at a regional hospital, an unauthorized script inadvertently alters prescription dosage values in the central patient database. The database remains fully online and accessible to authorized physicians, and no patient data was disclosed outside the network. Which core security objective was primarily violated?",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    correct_idx: 1,
    explanation: "Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity. Confidentiality was not violated because data was not improperly disclosed. Availability was maintained because the database remained online and accessible. Non-repudiation concerns proving the identity of a sender or actor, which is secondary to the factual alteration of the clinical records.",
    short_explanation_en: "Integrity ensures data is accurate and protected against unauthorized modification or deletion.",
    question_th: "ระหว่างการอัปเดตบำรุงรักษาซอฟต์แวร์ตามปกติที่โรงพยาบาล สคริปต์ที่ไม่ได้รับอนุญาตตัวหนึ่งได้แก้ไขค่าขนาดยาในฐานข้อมูลผู้ป่วยส่วนกลางโดยไม่ได้ตั้งใจ โดยที่ฐานข้อมูลยังคงออนไลน์และแพทย์ที่ได้รับอนุญาตสามารถเข้าถึงได้ตามปกติ และไม่มีข้อมูลผู้ป่วยรั่วไหลออกสู่ภายนอก เหตุการณ์นี้ละเมิดวัตถุประสงค์ความปลอดภัยหลักข้อใด?",
    options_th: [
      "การรักษาความลับ (Confidentiality)",
      "ความถูกต้องแท้จริงและความสมบูรณ์ของข้อมูล (Integrity)",
      "ความพร้อมใช้งาน (Availability)",
      "การไม่สามารถปฏิเสธความรับผิดได้ (Non-repudiation)"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง\n- ข้อ A ไม่ถูกต้อง: Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์\n- ข้อ C ไม่ถูกต้อง: Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ\n- ข้อ D ไม่ถูกต้อง: Non-repudiation เป็นเรื่องการยืนยันตัวตนผู้กระทำเพื่อไม่ให้ปฏิเสธได้ ไม่ใช่วัตถุประสงค์หลักที่ถูกทำลายในกรณีนี้",
    _meta: {
      opportunity: "O01",
      objective: "1.1",
      concept: "C003, C010",
      references: "[S07], [S09], T@00:11:53"
    }
  },
  {
    id: 585,
    dom: 1,
    question: "A bank's customer service representatives must view customer payment histories to address transaction inquiries, but internal policy prohibits representatives from viewing full 16-digit payment card numbers. Which bounded security control BEST satisfies this confidentiality requirement without disrupting customer support operations?",
    options: [
      "Data masking that displays only the last four digits of the card number to representatives",
      "Full-disk encryption applied to the customer service department's workstations",
      "Discretionary access control granting representatives unrestricted read access to customer files",
      "Digital signatures applied to all incoming credit card transactions"
    ],
    correct_idx: 0,
    explanation: "Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties. Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number. Unrestricted read access directly violates the confidentiality mandate by exposing the full number. Digital signatures provide integrity and authenticity verification, not display confidentiality.",
    short_explanation_en: "Data masking selectively obscures sensitive data fields while preserving operational utility for authorized users.",
    question_th: "เจ้าหน้าที่บริการลูกค้าของธนาคารจำเป็นต้องดูประวัติการชำระเงินของลูกค้าเพื่อตอบข้อซักถาม แต่ตามนโยบายภายในห้ามไม่ให้เจ้าหน้าที่มองเห็นหมายเลขบัตรเครดิตครบทั้ง 16 หลัก มาตรการความปลอดภัยในข้อใดเหมาะสมที่สุดในการตอบสนองข้อกำหนดการรักษาความลับนี้โดยไม่กระทบต่อการให้บริการ?",
    options_th: [
      "การทำ Data Masking โดยแสดงเฉพาะ 4 หลักสุดท้ายของหมายเลขบัตรแก่เจ้าหน้าที่",
      "การเข้ารหัสทั้งฮาร์ดดิสก์ (Full-disk encryption) บนเครื่องคอมพิวเตอร์ของฝ่ายบริการลูกค้า",
      "การกำหนดสิทธิ์แบบดุลยพินิจ (DAC) โดยอนุญาตให้เจ้าหน้าที่อ่านข้อมูลลูกค้าได้อย่างอิสระ",
      "การใช้ลายมือชื่อดิจิทัล (Digital Signatures) กำกับทุกรายการธุรกรรมที่เข้ามา"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด\n- ข้อ B ไม่ถูกต้อง: Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี\n- ข้อ C ไม่ถูกต้อง: การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง\n- ข้อ D ไม่ถูกต้อง: Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล",
    _meta: {
      opportunity: "O02",
      objective: "1.1",
      concept: "C005, C006",
      references: "[S05], [S06], T@00:08:54, T@00:09:35"
    }
  },
  {
    id: 586,
    dom: 1,
    question: "An organization's primary datacenter is equipped with an uninterruptible power supply (UPS) system that sustains server operations for up to 30 minutes during a blackout. To ensure continuous availability during an extended utility power outage lasting several days, which mechanism should the organization deploy?",
    options: [
      "An on-site auxiliary diesel generator with dedicated fuel reserves",
      "Redundant server power supplies connected to the same electrical breaker panel",
      "A storage area network (SAN) utilizing RAID 1 disk mirroring",
      "Daily off-site magnetic tape backups stored in an archival facility"
    ],
    correct_idx: 0,
    explanation: "An auxiliary diesel generator provides continuous secondary electrical power once temporary battery-backed UPS reserves are depleted, ensuring extended operational availability during prolonged municipal power outages. Redundant power supplies connected to the same electrical panel will both fail if utility power is lost. RAID disk mirroring protects against individual drive failures, not power loss. Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.",
    short_explanation_en: "Auxiliary generators provide secondary long-term power to sustain system availability when primary power and UPS batteries fail.",
    question_th: "ศูนย์ข้อมูลหลักขององค์กรมีการติดตั้งระบบจ่ายไฟสำรองแบบต่อเนื่อง (UPS) ซึ่งสามารถจ่ายพลังงานให้เซิร์ฟเวอร์ทำงานได้นานสูงสุด 30 นาทีเมื่อไฟดับ หากต้องการรักษาความพร้อมใช้งานอย่างต่อเนื่องในกรณีที่ไฟฟ้าดับเป็นเวลานานหลายวัน องค์กรควรติดตั้งกลไกใด?",
    options_th: [
      "เครื่องกำเนิดไฟฟ้าดีเซลสำรองในพื้นที่ (Auxiliary generator) พร้อมถังน้ำมันเชื้อเพลิงสำรอง",
      "พาวเวอร์ซัพพลายแบบสำรองในเซิร์ฟเวอร์ที่เสียบเข้ากับแผงวงจรไฟฟ้าเดียวกัน",
      "ระบบเครือข่ายจัดเก็บข้อมูล (SAN) ที่ใช้การจำลองข้อมูลแบบ RAID 1",
      "การสำรองข้อมูลลงเทปแม่เหล็กทุกวันแล้วนำไปเก็บไว้ที่สถานที่จัดเก็บภายนอก"
    ],
    explanation_th: "ข้อ A ถูกต้อง: เครื่องกำเนิดไฟฟ้าดีเซลสำรอง (Auxiliary generator) เป็นกลไกรักษา Availability ในระยะยาว ทำหน้าที่จ่ายไฟฟ้าทดแทนเมื่อแบตเตอรี่ UPS ที่จ่ายไฟได้เพียงระยะสั้น (30 นาที) หมดลง\n- ข้อ B ไม่ถูกต้อง: พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร\n- ข้อ C ไม่ถูกต้อง: RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ\n- ข้อ D ไม่ถูกต้อง: เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้",
    _meta: {
      opportunity: "O03",
      objective: "1.1",
      concept: "C014",
      references: "[S10], [S11], T@00:14:40, T@00:16:01"
    }
  },
  {
    id: 587,
    dom: 1,
    question: "A contractor whose contract ended two days ago attempts to log into the corporate payroll portal. The contractor successfully provides a valid username and password, but the system denies access because the account's role permissions were disabled immediately upon contract termination. Which phase of the AAA model successfully prevented unauthorized access?",
    options: [
      "Authentication",
      "Authorization",
      "Accounting",
      "Identification"
    ],
    correct_idx: 1,
    explanation: "Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges. Accounting tracks and logs user activity after access occurs, but does not make access-granting decisions.",
    short_explanation_en: "Authorization determines and enforces what resources an authenticated identity is permitted to access.",
    question_th: "ผู้รับเหมาที่สิ้นสุดสัญญาจ้างไปแล้วเมื่อ 2 วันก่อน พยายามเข้าสู่ระบบพอร์ทัลเงินเดือนของบริษัท โดยสามารถกรอกชื่อผู้ใช้และรหัสผ่านที่ถูกต้องได้สำเร็จ แต่ระบบปฏิเสธการเข้าถึงเนื่องจากสิทธิ์ตามบทบาท (Role permissions) ของบัญชีถูกระงับทันทีหลังหมดสัญญาจ้าง ขั้นตอนใดของโมเดล AAA ที่ทำหน้าที่ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาตได้สำเร็จ?",
    options_th: [
      "การพิสูจน์ตัวตน (Authentication)",
      "การกำหนดและอนุญาตสิทธิ์ (Authorization)",
      "การบันทึกและตรวจสอบกิจกรรม (Accounting)",
      "การระบุตัวตน (Identification)"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Authorization (การอนุญาตสิทธิ์) คือขั้นตอนที่ตรวจสอบว่าตัวตนที่ผ่านการพิสูจน์แล้วมีสิทธิ์เข้าถึงทรัพยากรหรือทำงานใดได้บ้าง ในกรณีนี้ผู้รับเหมาพิสูจน์ตัวตนผ่าน (Authentication สำเร็จ) แต่ระบบปฏิเสธการเข้าถึงเพราะสิทธิ์ถูกเพิกถอนไปแล้ว ซึ่งเป็นหน้าที่ของ Authorization\n- ข้อ A ไม่ถูกต้อง: Authentication ทำหน้าที่ตรวจสอบความถูกต้องของรหัสผ่าน ซึ่งในข้อนี้ระบุว่ากรอกผ่านได้สำเร็จ\n- ข้อ C ไม่ถูกต้อง: Accounting ทำหน้าที่บันทึกประวัติการใช้งาน ไม่ใช่ตัวตัดสินอนุญาตหรือปฏิเสธสิทธิ์\n- ข้อ D ไม่ถูกต้อง: Identification คือการอ้างตัวตน (เช่น การป้อน username) ซึ่งเกิดขึ้นก่อนการตรวจสอบ",
    _meta: {
      opportunity: "O04",
      objective: "1.1",
      concept: "C017, C018, C019",
      references: "[S12], T@00:18:08, T@00:19:38, T@00:20:20"
    }
  },
  {
    id: 588,
    dom: 1,
    question: "An organization's security policy requires multi-factor authentication (MFA) for administrative access. A systems administrator logs in by entering an alphanumeric password and a four-digit numeric PIN on the login screen. Why does this authentication mechanism FAIL to satisfy the MFA requirement?",
    options: [
      "A four-digit PIN does not provide sufficient cryptographic entropy for administrative accounts",
      "Both credentials belong to the same factor category of 'something you know'",
      "Multi-factor authentication requires at least three independent credential types",
      "PIN codes can only be processed when entered on an approved hardware security token"
    ],
    correct_idx: 1,
    explanation: "Multi-factor authentication (MFA) requires the presentation of two or more credentials drawn from independent factor categories: something you know (knowledge), something you have (possession), or something you are (biometrics). A password and a PIN are both knowledge-based credentials ('something you know'). Using two items from the same factor category constitutes two-step or multi-credential authentication, but not multi-factor authentication. MFA requires two distinct categories, not necessarily three. PIN entropy and token format are implementation details that do not change factor taxonomy.",
    short_explanation_en: "Multi-factor authentication requires credentials from at least two distinct, independent factor categories.",
    question_th: "นโยบายความมั่นคงปลอดภัยขององค์กรกำหนดให้ต้องใช้ Multi-Factor Authentication (MFA) สำหรับการเข้าถึงระบบของผู้ดูแลระบบ ผู้ดูแลระบบคนหนึ่งล็อกอินเข้าสู่ระบบโดยกรอกรหัสผ่านตัวอักษรผสมตัวเลขและตามด้วยรหัส PIN ตัวเลข 4 หลักบนหน้าจอ เหตุใดกลไกการยืนยันตัวตนนี้จึงไม่ผ่านเกณฑ์ข้อกำหนด MFA?",
    options_th: [
      "รหัส PIN 4 หลักมีความซับซ้อน (Entropy) ไม่เพียงพอสำหรับบัญชีผู้ดูแลระบบ",
      "ข้อมูลประจำตัวทั้งสองอย่างจัดอยู่ในประเภทปัจจัยเดียวกันคือ 'สิ่งที่คุณรู้' (Something you know)",
      "การยืนยันตัวตนแบบหลายปัจจัยจำเป็นต้องใช้ข้อมูลประจำตัวที่แตกต่างกันอย่างน้อย 3 ประเภทขึ้นไป",
      "รหัส PIN สามารถประมวลผลได้ก็ต่อเมื่อกดผ่านอุปกรณ์ฮาร์ดแวร์โทเคน (Hardware token) เท่านั้น"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Multi-Factor Authentication (MFA) ต้องใช้หลักฐานที่มาจากปัจจัยที่แตกต่างกันอย่างน้อย 2 ใน 3 ปัจจัย ได้แก่ สิ่งที่คุณรู้ (Know), สิ่งที่คุณมี (Have), และสิ่งที่คุณเป็น (Are) ทั้งรหัสผ่านและรหัส PIN จัดเป็น 'สิ่งที่คุณรู้' (Knowledge factor) ทั้งคู่ จึงเป็นเพียง Two-step authentication ไม่ใช่ MFA\n- ข้อ A ไม่ถูกต้อง: แม้ PIN 4 หลักจะสั้น แต่นั่นไม่ใช่เหตุผลทางนิยามที่ทำให้ไม่เป็น MFA\n- ข้อ C ไม่ถูกต้อง: MFA พื้นฐานต้องการเพียง 2 ปัจจัยที่ต่างกัน (Two-factor) ไม่จำเป็นต้องถึง 3 ปัจจัยเสมอไป\n- ข้อ D ไม่ถูกต้อง: PIN สามารถตั้งและกรอกผ่านซอฟต์แวร์ได้ ไม่จำกัดเฉพาะฮาร์ดแวร์โทเคน",
    _meta: {
      opportunity: "O05",
      objective: "1.1",
      concept: "C021",
      references: "[S13], [S14], T@00:21:43, T@00:25:37"
    }
  },
  {
    id: 589,
    dom: 1,
    question: "A digital retail company collects customer shipping addresses and payment details to fulfill online purchases. The retailer contracts a third-party cloud hosting provider to store the customer database and execute queries solely based on the retailer's written instructions. In the context of data privacy governance, which role does the cloud provider represent?",
    options: [
      "Data Subject",
      "Data Controller",
      "Data Processor",
      "Data Protection Authority"
    ],
    correct_idx: 2,
    explanation: "A Data Processor is an entity that processes personal data on behalf of and under the direct instructions of the data controller. The cloud hosting provider stores and manages the data strictly according to the retailer's directions without determining the purpose or legal basis of the processing. The online retailer is the Data Controller because it determines the purposes and means of processing. The customers whose information is collected are the Data Subjects. A Data Protection Authority is an independent public regulatory body overseeing privacy laws.",
    short_explanation_en: "A Data Processor processes personal information on behalf of and strictly according to the instructions of the Data Controller.",
    question_th: "บริษัทค้าปลีกออนไลน์แห่งหนึ่งเก็บรวบรวมที่อยู่จัดส่งและข้อมูลการชำระเงินของลูกค้าเพื่อจัดส่งสินค้า โดยบริษัทได้ทำสัญญากับผู้ให้บริการคลาวด์ภายนอกเพื่อจัดเก็บฐานข้อมูลลูกค้าและประมวลผลคำสั่งตามคำสั่งเป็นลายลักษณ์อักษรของบริษัทค้าปลีกเท่านั้น ในบริบทของการกำกับดูแลความเป็นส่วนตัวของข้อมูล (Data Privacy) ผู้ให้บริการคลาวด์นี้ทำหน้าที่ในบทบาทใด?",
    options_th: [
      "เจ้าของข้อมูลส่วนบุคคล (Data Subject)",
      "ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)",
      "ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor)",
      "องค์กรกำกับดูแลการคุ้มครองข้อมูลส่วนบุคคล (Data Protection Authority)"
    ],
    explanation_th: "ข้อ C ถูกต้อง: ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) คือบุคคลหรือนิติบุคคลที่ดำเนินการประมวลผลข้อมูลส่วนบุคคลในนามหรือตามคำสั่งของผู้ควบคุมข้อมูล ผู้ให้บริการคลาวด์ที่ทำหน้าที่เก็บและประมวลผลตามคำสั่งของบริษัทค้าปลีกจึงมีสถานะเป็น Data Processor\n- ข้อ A ไม่ถูกต้อง: Data Subject คือตัวลูกค้าซึ่งเป็นบุคคลธรรมดาที่เป็นเจ้าของข้อมูล\n- ข้อ B ไม่ถูกต้อง: Data Controller คือบริษัทค้าปลีกเอง เนื่องจากเป็นผู้กำหนดวัตถุประสงค์และวิธีการในการเก็บรวบรวมและใช้ข้อมูล\n- ข้อ D ไม่ถูกต้อง: Data Protection Authority คือหน่วยงานรัฐที่กำกับดูแลกฎหมายคุ้มครองข้อมูลส่วนบุคคล",
    _meta: {
      opportunity: "O06",
      objective: "1.1",
      concept: "C025, C027",
      references: "[S17], T@00:28:22, T@00:29:06"
    }
  },
  {
    id: 590,
    dom: 1,
    question: "An information security officer is conducting an internal data mapping exercise. The officer needs to determine what categories of sensitive information exist across enterprise file shares, where the data is physically and logically stored, and which business units own each dataset. Which data governance component directly fulfills this need?",
    options: [
      "Data retention policy",
      "Data inventory",
      "Data sanitization schedule",
      "Data masking standard"
    ],
    correct_idx: 1,
    explanation: "A data inventory (or data asset catalog) identifies what information assets exist, their classification, their storage locations, and their assigned business owners. In contrast, a data retention policy establishes timeframes for how long records must be kept and when they must be destroyed. A data sanitization schedule specifies operational procedures for wiping or destroying retired physical media. A data masking standard defines formatting rules for obscuring sensitive fields from unauthorized viewers.",
    short_explanation_en: "A data inventory catalogs information assets, their storage locations, sensitivity levels, and assigned owners.",
    question_th: "เจ้าหน้าที่ความมั่นคงปลอดภัยสารสนเทศกำลังจัดทำแผนผังข้อมูลภายในองค์กร โดยจำเป็นต้องระบุว่ามีข้อมูลสำคัญประเภทใดบ้างในระบบแชร์ไฟล์ ข้อมูลนั้นถูกจัดเก็บไว้ที่ใดทั้งทางกายภาพและเชิงตรรกะ และหน่วยงานใดเป็นเจ้าของข้อมูลแต่ละชุด ส่วนประกอบใดของการกำกับดูแลข้อมูลที่ตอบสนองความต้องการนี้โดยตรง?",
    options_th: [
      "นโยบายการเก็บรักษาข้อมูล (Data retention policy)",
      "การจัดทำบัญชีรายการข้อมูล (Data inventory)",
      "ตารางการทำลายข้อมูลอย่างปลอดภัย (Data sanitization schedule)",
      "มาตรฐานการพรางข้อมูล (Data masking standard)"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Data Inventory (การจัดทำบัญชีรายการข้อมูล) เป็นกระบวนการสำรวจและบันทึกว่าองค์กรครอบครองข้อมูลประเภทใดบ้าง จัดเก็บอยู่ที่ไหน (Location) และใครเป็นผู้รับผิดชอบ (Ownership) เพื่อเป็นรากฐานในการคุ้มครองข้อมูล\n- ข้อ A ไม่ถูกต้อง: Data retention policy กำหนดระยะเวลาว่าต้องเก็บข้อมูลไว้นานเท่าใดและทำลายเมื่อใด\n- ข้อ C ไม่ถูกต้อง: Data sanitization schedule คือกำหนดการลบหรือทำลายสื่อบันทึกข้อมูลอย่างถาวร\n- ข้อ D ไม่ถูกต้อง: Data masking standard คือแนวทางปฏิบัติในการปิดบังข้อมูลบางส่วนเพื่อความปลอดภัย",
    _meta: {
      opportunity: "O07",
      objective: "1.1",
      concept: "C029",
      references: "[S18], T@00:30:34"
    }
  },

  // =========================================================================
  // BATCH 2: Subtopic 1.2 — Risk Management (O08 - O12)
  // =========================================================================
  {
    id: 591,
    dom: 1,
    question: "During a threat modeling session, an analyst reviews the following scenario: 'An internet-facing web server contains an unpatched vulnerability that allows arbitrary code execution. Malicious threat actors are actively scanning the subnet, which could lead to unauthorized access to the customer database.' In this relational risk analysis, what does the unpatched code execution flaw represent?",
    options: [
      "Asset",
      "Threat",
      "Vulnerability",
      "Impact"
    ],
    correct_idx: 2,
    explanation: "A vulnerability is a flaw, weakness, or gap in security procedures, design, implementation, or internal controls that can be exploited by a threat. An unpatched software flaw is the classic definition of a vulnerability. The asset is the web server or customer database. The threat is the potential occurrence of an unauthorized compromise or the malicious actors conducting scans. The impact is the resulting damage, such as unauthorized disclosure of confidential customer records.",
    short_explanation_en: "A vulnerability is an exploitable flaw or weakness in a system or control.",
    question_th: "ในระหว่างการประชุมประเมินภัยคุกคาม นักวิเคราะห์ได้ทบทวนสถานการณ์ต่อไปนี้: 'เว็บเซิร์ฟเวอร์ที่เชื่อมต่อกับอินเทอร์เน็ตมีช่องโหว่ที่ยังไม่ได้รับการแพตช์ซึ่งเปิดทางให้รันโค้ดแปลกปลอมได้ แฮกเกอร์กำลังสแกนซับเน็ตนี้อย่างต่อเนื่อง ซึ่งอาจนำไปสู่การเข้าถึงฐานข้อมูลลูกค้าโดยไม่ได้รับอนุญาต' ในการวิเคราะห์ความเสี่ยงนี้ ข้อบกพร่องของซอฟต์แวร์ที่ยังไม่ได้รับการแพตช์จัดเป็นอะไร?",
    options_th: [
      "ทรัพย์สิน (Asset)",
      "ภัยคุกคาม (Threat)",
      "ช่องโหว่ (Vulnerability)",
      "ผลกระทบ (Impact)"
    ],
    explanation_th: "ข้อ C ถูกต้อง: ช่องโหว่ (Vulnerability) คือจุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ โปรแกรม หรือกระบวนการ ซึ่งสามารถถูกเจาะหรือใช้ประโยชน์โดยภัยคุกคามได้ ซอฟต์แวร์ที่ยังไม่ลงแพตช์จึงเป็นตัวอย่างที่ชัดเจนของช่องโหว่\n- ข้อ A ไม่ถูกต้อง: ทรัพย์สิน (Asset) คือเว็บเซิร์ฟเวอร์หรือฐานข้อมูลลูกค้าที่มีมูลค่าต่อองค์กร\n- ข้อ B ไม่ถูกต้อง: ภัยคุกคาม (Threat) คือเหตุการณ์หรือตัวกระทำที่อาจก่อให้เกิดความเสียหาย เช่น แฮกเกอร์หรือการโจมตีทางไซเบอร์\n- ข้อ D ไม่ถูกต้อง: ผลกระทบ (Impact) คือความเสียหายหรือความสูญเสียที่เกิดขึ้นหากการโจมตีสำเร็จ เช่น ข้อมูลลูกค้าถูกขโมย",
    _meta: {
      opportunity: "O08",
      objective: "1.2",
      concept: "C036",
      references: "[S21], [S22], T@00:33:37, T@00:34:18"
    }
  },
  {
    id: 592,
    dom: 1,
    question: "A security manager leads a risk assessment workshop with cross-functional department heads. Because the organization has limited actuarial loss data, the team evaluates identified risks by assigning descriptive rankings of 'High', 'Medium', or 'Low' based on operational experience and collective consensus. Which risk assessment methodology is the manager using?",
    options: [
      "Quantitative risk analysis",
      "Qualitative risk analysis",
      "Residual risk calculation",
      "Total cost of ownership analysis"
    ],
    correct_idx: 1,
    explanation: "Qualitative risk analysis uses descriptive scales, expert judgment, and experiential categorization (such as High, Medium, and Low) to evaluate and prioritize risks based on likelihood and impact. It does not attempt to assign precise numerical dollar amounts. In contrast, quantitative risk analysis relies on numerical and financial calculations, such as monetary loss figures and annual frequencies. Residual risk is the risk remaining after controls are implemented, and total cost of ownership evaluates asset purchase and maintenance expenses.",
    short_explanation_en: "Qualitative risk analysis uses subjective judgment and descriptive scales rather than numerical financial metrics.",
    question_th: "ผู้จัดการฝ่ายความมั่นคงปลอดภัยจัดเวิร์กช็อปประเมินความเสี่ยงร่วมกับหัวหน้าแผนกต่างๆ เนื่องจากองค์กรมีข้อมูลสถิติความสูญเสียทางการเงินในอดีตอย่างจำกัด ทีมงานจึงประเมินความเสี่ยงที่พบโดยใช้การจัดอันดับเชิงพรรณนา เช่น 'สูง', 'ปานกลาง' หรือ 'ต่ำ' ตามประสบการณ์และการระดมสมองร่วมกัน ผู้จัดการกำลังใช้วิธีการประเมินความเสี่ยงแบบใด?",
    options_th: [
      "การวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative risk analysis)",
      "การวิเคราะห์ความเสี่ยงเชิงคุณภาพ (Qualitative risk analysis)",
      "การคำนวณความเสี่ยงที่เหลืออยู่ (Residual risk calculation)",
      "การวิเคราะห์ต้นทุนรวมในการเป็นเจ้าของ (Total cost of ownership analysis)"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Qualitative Risk Analysis (การวิเคราะห์ความเสี่ยงเชิงคุณภาพ) เป็นการประเมินความเสี่ยงโดยใช้ดุลยพินิจของผู้เชี่ยวชาญ การระดมสมอง และการจัดลำดับด้วยคำอธิบายเชิงคุณภาพ เช่น สูง/กลาง/ต่ำ โดยไม่ต้องใช้ตัวเลขทางการเงินที่แน่ชัด เหมาะกับองค์กรที่ไม่มีข้อมูลสถิติตัวเลขในอดีต\n- ข้อ A ไม่ถูกต้อง: Quantitative risk analysis ต้องคำนวณเป็นตัวเลขทางการเงินและความถี่ทางสถิติที่แน่นอน\n- ข้อ C ไม่ถูกต้อง: Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน\n- ข้อ D ไม่ถูกต้อง: Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง",
    _meta: {
      opportunity: "O09",
      objective: "1.2",
      concept: "C038",
      references: "[S23], [S24], T@00:35:02, T@00:35:44"
    }
  },
  {
    id: 593,
    dom: 1,
    question: "Six months ago, an enterprise formally accepted the risk of operating an unpatched internal document archive because it was completely isolated from the internet. Recently, the engineering department connected this archive to a public cloud storage service to enable remote collaboration. In accordance with the risk management lifecycle, how should the organization respond to this operational change?",
    options: [
      "Maintain the existing risk acceptance record until the scheduled annual audit cycle concludes",
      "Reassess the risk immediately under the Monitor and Review process because the exposure context has changed",
      "Automatically transfer the risk to an insurance policy without conducting a technical review",
      "Terminate the remote collaboration project immediately because accepted risks can never be altered"
    ],
    correct_idx: 1,
    explanation: "Risk management is a continuous lifecycle. Under the Monitor and Review phase, organizations must regularly evaluate existing risks and reassess previously accepted risks whenever significant operational, technological, or environmental changes occur. Connecting a previously isolated system to the public internet alters its threat environment and attack surface, rendering prior risk acceptance assumptions invalid. Risk acceptance is not an indefinite exemption, insurance requires informed assessment, and operational changes require review rather than arbitrary termination.",
    short_explanation_en: "Risk management is a continuous process requiring reassessment whenever operational or technological conditions change.",
    question_th: "เมื่อ 6 เดือนก่อน องค์กรแห่งหนึ่งได้ยอมรับความเสี่ยง (Risk Acceptance) อย่างเป็นทางการในการใช้งานระบบจัดเก็บเอกสารภายในที่ยังไม่ได้ลงแพตช์ เนื่องจากระบบถูกตัดขาดจากอินเทอร์เน็ตโดยสิ้นเชิง แต่เมื่อเร็วๆ นี้ แผนกวิศวกรรมได้เชื่อมต่อระบบนี้เข้ากับคลาวด์เพื่อทำงานร่วมกันจากระยะไกล ตามวงจรการบริหารความเสี่ยง องค์กรควรตอบสนองต่อการเปลี่ยนแปลงนี้อย่างไร?",
    options_th: [
      "คงสถานะการยอมรับความเสี่ยงเดิมไว้จนกว่าจะครบรอบการตรวจสอบประจำปี",
      "ทำการประเมินความเสี่ยงใหม่อีกครั้งทันทีในขั้นตอน Monitor and Review เนื่องจากบริบทความเสี่ยงเปลี่ยนไป",
      "โอนย้ายความเสี่ยงไปให้บริษัทประกันภัยโดยอัตโนมัติโดยไม่ต้องตรวจสอบทางเทคนิค",
      "สั่งยกเลิกโครงการทำงานร่วมกันผ่านคลาวด์ทันทีเพราะระบบที่เคยยอมรับความเสี่ยงไปแล้วห้ามเปลี่ยนแปลงใดๆ"
    ],
    explanation_th: "ข้อ B ถูกต้อง: การบริหารความเสี่ยงเป็นกระบวนการต่อเนื่อง (Continuous process) ในขั้นตอน Monitor and Review ความเสี่ยงที่เคยยอมรับไว้ (Accepted risk) จะต้องถูกนำมาทบทวนและประเมินใหม่เสมอเมื่อมีสภาพแวดล้อม เทคโนโลยี หรือสถาปัตยกรรมระบบที่เปลี่ยนแปลงไป การนำระบบที่ไม่ลงแพตช์ไปต่ออินเทอร์เน็ตทำให้ระดับความเสี่ยงเพิ่มขึ้นอย่างมีนัยสำคัญ\n- ข้อ A ไม่ถูกต้อง: การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที\n- ข้อ C ไม่ถูกต้อง: การทำประกันภัยไม่สามารถทำได้โดยไม่ประเมินความเสี่ยง และไม่ช่วยลดความเสี่ยงทางเทคนิค\n- ข้อ D ไม่ถูกต้อง: การบริหารความเสี่ยงมีเป้าหมายเพื่อสนับสนุนธุรกิจ การเปลี่ยนแปลงระบบสามารถทำได้หากประเมินและควบคุมความเสี่ยงอย่างเหมาะสม",
    _meta: {
      opportunity: "O10",
      objective: "1.2",
      concept: "C034, C049",
      references: "[S20], [S29], T@00:32:07, T@00:44:51, T@00:45:32"
    }
  },
  {
    id: 594,
    dom: 1,
    question: "A logistics company evaluates the financial exposure associated with potential warehouse fire damage to its server infrastructure. The executive leadership decides to purchase a comprehensive commercial cyber and property insurance policy that covers recovery costs and business interruption losses resulting from a catastrophe. Which risk treatment strategy has the company executed?",
    options: [
      "Risk Mitigation",
      "Risk Transfer",
      "Risk Avoidance",
      "Risk Acceptance"
    ],
    correct_idx: 1,
    explanation: "Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer. Risk mitigation implements safeguards to reduce likelihood or impact. Risk avoidance ceases the activity altogether. Risk acceptance absorbs potential losses without additional safeguards or insurance.",
    short_explanation_en: "Risk transfer shifts financial loss exposure to a third party, such as an insurance underwriter.",
    question_th: "บริษัทโลจิสติกส์แห่งหนึ่งประเมินผลกระทบทางการเงินที่อาจเกิดขึ้นจากเหตุเพลิงไหม้คลังสินค้าซึ่งมีเซิร์ฟเวอร์ติดตั้งอยู่ ผู้บริหารระดับสูงตัดสินใจซื้อกรมธรรม์ประกันภัยทรัพย์สินและไซเบอร์เพื่อชดเชยค่าใช้จ่ายในการกู้คืนระบบและความสูญเสียจากการหยุดชะงักทางธุรกิจหากเกิดภัยพิบัติ บริษัทได้ดำเนินกลยุทธ์จัดการความเสี่ยงแบบใด?",
    options_th: [
      "การบรรเทาความเสี่ยง (Risk Mitigation)",
      "การโอนย้ายความเสี่ยง (Risk Transfer)",
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    explanation_th: "ข้อ B ถูกต้อง: Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก\n- ข้อ A ไม่ถูกต้อง: Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ\n- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า\n- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการรับรู้ความเสี่ยงและพร้อมรับผลกระทบด้วยตนเองโดยไม่ทำประกันหรือเพิ่มมาตรการใดๆ",
    _meta: {
      opportunity: "O11",
      objective: "1.2",
      concept: "C043",
      references: "[S25], T@00:40:30, T@00:41:19"
    }
  },
  {
    id: 595,
    dom: 1,
    question: "A healthcare provider explores implementing an experimental generative artificial intelligence platform to summarize patient consultation audio recordings. Following a security and compliance assessment, the compliance committee determines that the legal liability and privacy breach risks exceed organizational tolerance, and current vendor safeguards cannot sufficiently guarantee data protection. Consequently, the organization decides not to purchase or deploy the AI platform. Which risk treatment strategy was applied?",
    options: [
      "Risk Avoidance",
      "Risk Mitigation",
      "Risk Transfer",
      "Risk Acceptance"
    ],
    correct_idx: 0,
    explanation: "Risk Avoidance is the strategy of eliminating risk exposure entirely by choosing not to engage in, or by completely discontinuing, the specific activity, service, or technology that creates the risk. Choosing not to adopt or purchase the high-risk AI platform completely avoids the associated risks. Risk mitigation would involve deploying controls (such as data sanitization filters) to use the technology safely. Risk transfer would involve shifting financial exposure via insurance or contracts. Risk acceptance would proceed with adoption while tolerating the risks.",
    short_explanation_en: "Risk avoidance eliminates exposure by deciding not to engage in or by discontinuing a risky activity.",
    question_th: "ผู้ให้บริการทางการแพทย์แห่งหนึ่งกำลังพิจารณานำแพลตฟอร์มปัญญาประดิษฐ์ (AI) แบบ Generative มาใช้สรุปเสียงการให้คำปรึกษาแก่ผู้ป่วย หลังจากการประเมินด้านความปลอดภัยและการปฏิบัติตามกฎหมาย คณะกรรมการพบว่าความเสี่ยงด้านความรับผิดชอบทางกฎหมายและข้อมูลรั่วไหลสูงเกินกว่าระดับที่องค์กรยอมรับได้ และไม่มีมาตรการควบคุมใดของผู้ขายที่รัดกุมเพียงพอ องค์กรจึงตัดสินใจไม่จัดซื้อและไม่ใช้งานแพลตฟอร์ม AI นี้ องค์กรใช้กลยุทธ์จัดการความเสี่ยงข้อใด?",
    options_th: [
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การบรรเทาความเสี่ยง (Risk Mitigation)",
      "การโอนย้ายความเสี่ยง (Risk Transfer)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Risk Avoidance (การหลีกเลี่ยงความเสี่ยง) คือการตัดสินใจไม่ทำกิจกรรม ยกเลิก หรือไม่นำเทคโนโลยีที่มีความเสี่ยงสูงนั้นเข้ามาใช้เลย เพื่อตัดโอกาสการเกิดความเสี่ยงนั้นให้หมดสิ้นไป\n- ข้อ B ไม่ถูกต้อง: Risk Mitigation คือการเดินหน้านำ AI มาใช้แต่ติดตั้งมาตรการป้องกันเพิ่มเติมเพื่อลดความเสี่ยง\n- ข้อ C ไม่ถูกต้อง: Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย\n- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการยอมรับความเสี่ยงและเดินหน้าติดตั้งใช้งานโดยไม่สนผลกระทบ",
    _meta: {
      opportunity: "O11",
      objective: "1.2",
      concept: "C046",
      references: "[S27], [S28], T@00:43:30, T@00:44:08"
    }
  },
  {
    id: 596,
    dom: 1,
    question: "A Chief Information Security Officer (CISO) is preparing a quarterly risk report for the Board of Directors. The primary objective of the presentation is to help executive leadership allocate capital and prioritize security investments across business units. Which reporting approach is MOST appropriate for this audience?",
    options: [
      "Exporting raw, unaggregated firewall packet logs and intrusion detection alerts from the past 90 days",
      "Presenting high-level summaries of prioritized risks, potential business and financial impacts, and required remediation resources",
      "Providing a detailed technical inventory of software version numbers and vulnerability scanning script outputs",
      "Guaranteeing that all residual cyber risks will be reduced to zero if the requested budget is approved"
    ],
    correct_idx: 1,
    explanation: "Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization. Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points. Furthermore, promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management.",
    short_explanation_en: "Executive risk reporting should focus on high-level business impact, prioritized risks, and resource requirements rather than low-level technical logs.",
    question_th: "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) กำลังเตรียมรายงานความเสี่ยงรายไตรมาสเพื่อนำเสนอต่อคณะกรรมการบริหาร (Board of Directors) โดยมีเป้าหมายหลักเพื่อช่วยให้ผู้บริหารจัดสรรงบประมาณและจัดลำดับความสำคัญของการลงทุนด้านความปลอดภัย แนวทางการรายงานในข้อใดเหมาะสมที่สุดสำหรับกลุ่มเป้าหมายนี้?",
    options_th: [
      "การส่งออกข้อมูลบันทึกแพ็กเก็ตของไฟร์วอลล์ (Raw packet logs) และการแจ้งเตือนของระบบตรวจจับการบุกรุกทั้งหมดในรอบ 90 วันที่ผ่านมา",
      "การนำเสนอสรุปภาพรวมระดับสูงของความเสี่ยงที่จัดลำดับความสำคัญแล้ว ผลกระทบต่อธุรกิจและการเงิน และทรัพยากรที่จำเป็นต้องใช้ในการแก้ไข",
      "การแสดงรายการหมายเลขเวอร์ชันของซอฟต์แวร์ทั้งหมดในองค์กรและผลลัพธ์ของสคริปต์สแกนช่องโหว่อย่างละเอียด",
      "การให้คำมั่นสัญญากับบอร์ดว่าความเสี่ยงทางไซเบอร์ที่เหลืออยู่ทั้งหมดจะลดลงเหลือศูนย์อย่างแน่นอนหากได้รับการอนุมัติงบประมาณ"
    ],
    explanation_th: "ข้อ B ถูกต้อง: การรายงานความเสี่ยง (Risk Reporting) ต้องคำนึงถึงผู้รับสาร คณะกรรมการบริหารต้องการข้อมูลสรุปภาพรวมเชิงกลยุทธ์ (Executive summary) ที่ชี้ให้เห็นว่าความเสี่ยงใดสำคัญที่สุด ส่งผลกระทบต่อธุรกิจอย่างไร และต้องใช้งบประมาณหรือทรัพยากรเท่าใดในการจัดการ\n- ข้อ A ไม่ถูกต้อง: Raw logs มีรายละเอียดทางเทคนิคมากเกินไปและไม่ช่วยให้เกิดการตัดสินใจเชิงธุรกิจ\n- ข้อ C ไม่ถูกต้อง: รายการเวอร์ชันซอฟต์แวร์เป็นข้อมูลการปฏิบัติการ (Operational) ที่ไม่เหมาะกับระดับบอร์ดบริหาร\n- ข้อ D ไม่ถูกต้อง: การอ้างว่าความเสี่ยงจะลดเหลือศูนย์ (Zero risk) เป็นไปไม่ได้ในทางปฏิบัติและขัดกับหลักการบริหารความเสี่ยง",
    _meta: {
      opportunity: "O12",
      objective: "1.2",
      concept: "C050",
      references: "[S30], [S32], T@00:45:32, T@00:46:10"
    }
  },

  // =========================================================================
  // BATCH 3: Subtopic 1.3 — Governance Concepts (O13 - O14)
  // =========================================================================
  {
    id: 597,
    dom: 1,
    question: "Which of the following BEST describes the core role and primary objective of cybersecurity governance within an enterprise?",
    options: [
      "Providing strategic leadership, organizational oversight, and accountability to ensure security objectives support business goals and regulatory requirements",
      "Executing day-to-day administrative tasks, such as creating user accounts and inspecting endpoint antivirus definition updates",
      "Providing an absolute guarantee that the organization will never suffer a data breach or operational outage",
      "Configuring boundary network firewalls and writing automated intrusion detection rules"
    ],
    correct_idx: 0,
    explanation: "Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals. Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance. Governance cannot guarantee the complete absence of incidents.",
    short_explanation_en: "Cybersecurity governance provides strategic oversight, direction, and accountability aligned with business objectives.",
    question_th: "ข้อใดอธิบายบทบาทหลักและวัตถุประสงค์ที่แท้จริงของการกำกับดูแลความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Governance) ในองค์กรได้ดีที่สุด?",
    options_th: [
      "การกำหนดทิศทางเชิงกลยุทธ์ การกำกับดูแล และความรับผิดชอบเพื่อให้แน่ใจว่างานความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย",
      "การปฏิบัติงานดูแลระบบประจำวัน เช่น การสร้างบัญชีผู้ใช้งานและการตรวจสอบการอัปเดตแอนติไวรัสของเครื่องลูกข่าย",
      "การให้การรับประกันแบบเบ็ดเสร็จเด็ดขาดว่าองค์กรจะไม่มีวันถูกเจาะระบบหรือเกิดเหตุการณ์ระบบล่มอย่างแน่นอน",
      "การกำหนดค่าคอนฟิกไฟร์วอลล์ที่ขอบเขตเครือข่ายและการเขียนกฎของระบบตรวจจับการบุกรุก"
    ],
    explanation_th: "ข้อ A ถูกต้อง: การกำกับดูแล (Governance) คือโครงสร้างระดับกลยุทธ์ การกำหนดทิศทาง การกำกับดูแลความรับผิดชอบ (Accountability) และการตรวจสอบ เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ กฎหมาย และระดับความเสี่ยงขององค์กร\n- ข้อ B ไม่ถูกต้อง: การสร้าง user และอัปเดตโปรแกรมเป็นงานระดับปฏิบัติการ (Operational task) ไม่ใช่การกำกับดูแล\n- ข้อ C ไม่ถูกต้อง: Governance ไม่สามารถรับประกันได้ว่าจะไม่มีเหตุการณ์ถูกโจมตีเกิดขึ้น 100%\n- ข้อ D ไม่ถูกต้อง: การตั้งค่าไฟร์วอลล์เป็นงานเชิงเทคนิคและการปฏิบัติการ (Technical/Operational control)",
    _meta: {
      opportunity: "O13",
      objective: "1.3",
      concept: "C052",
      references: "[S33], T@00:46:10, T@00:46:59"
    }
  },
  {
    id: 598,
    dom: 1,
    question: "An organization's executive committee publishes an official document that states: 'All corporate information systems and sensitive customer records must be protected from unauthorized disclosure, and employee access must be restricted to legitimate business needs.' The document outlines management's high-level expectations and overarching goals, but contains no technical parameters or operational steps. What type of governance artifact is this document?",
    options: [
      "Policy",
      "Standard",
      "Procedure",
      "Guideline"
    ],
    correct_idx: 0,
    explanation: "A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms. A standard establishes mandatory technical baselines and specific criteria. A procedure provides step-by-step instructions ('HOW' to accomplish a task). A guideline provides recommended best practices that are generally advisory and flexible.",
    short_explanation_en: "A policy is a high-level, mandatory management directive outlining overarching security expectations and rules.",
    question_th: "คณะกรรมการบริหารขององค์กรเผยแพร่เอกสารอย่างเป็นทางการซึ่งระบุว่า: 'ระบบสารสนเทศและข้อมูลลูกค้าสำคัญทั้งหมดขององค์กรจะต้องได้รับการปกป้องจากการเปิดเผยโดยไม่ได้รับอนุญาต และการเข้าถึงของพนักงานจะต้องถูกจำกัดเฉพาะเพื่อการปฏิบัติงานตามหน้าที่เท่านั้น' เอกสารนี้กำหนดความคาดหวังและเป้าหมายระดับสูงของผู้บริหาร แต่ไม่ได้ระบุค่าทางเทคนิคหรือขั้นตอนปฏิบัติ เอกสารนี้จัดเป็นเอกสารกำกับดูแลประเภทใด?",
    options_th: [
      "นโยบาย (Policy)",
      "มาตรฐาน (Standard)",
      "ขั้นตอนปฏิบัติ (Procedure)",
      "แนวปฏิบัติ (Guideline)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: นโยบาย (Policy) คือเอกสารระดับผู้บริหารสูงสุดที่มีผลบังคับใช้ (Mandatory) กำหนดทิศทาง เป้าหมาย และกฎเกณฑ์ระดับสูงขององค์กร (WHAT ต้องทำอะไร) โดยไม่ลงลึกถึงขั้นตอนทางเทคนิคหรือวิธีการปฏิบัติ\n- ข้อ B ไม่ถูกต้อง: มาตรฐาน (Standard) กำหนดข้อกำหนดทางเทคนิคที่ต้องปฏิบัติตามอย่างเฉพาะเจาะจง เช่น กำหนดความยาวรหัสผ่าน\n- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) คือคู่มืออธิบายขั้นตอนการทำงานอย่างเป็นลำดับขั้น (HOW ทำอย่างไรแบบ step-by-step)\n- ข้อ D ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) คือคำแนะนำหรือข้อเสนอแนะที่ไม่มีการบังคับใช้โดยเด็ดขาด ยืดหยุ่นได้",
    _meta: {
      opportunity: "O14",
      objective: "1.3",
      concept: "C053, C059",
      references: "[S40], [S43], [S47], T@00:51:14, T@00:53:23"
    }
  },
  {
    id: 599,
    dom: 1,
    question: "The IT security engineering team creates an internal document stating: 'All enterprise employee workstations must have screen savers configured to automatically lock after 10 minutes of inactivity, require an authenticated password to resume, and use AES-256 bit full-disk encryption.' This document defines mandatory technical specifications that must be implemented across all systems. Which type of governance document does this represent?",
    options: [
      "Standard",
      "Guideline",
      "Procedure",
      "Policy"
    ],
    correct_idx: 0,
    explanation: "A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard. Policies outline high-level management intent. Procedures provide chronological step-by-step instructions. Guidelines offer non-mandatory recommendations.",
    short_explanation_en: "A standard establishes mandatory, specific technical baselines and requirements to implement policy directives.",
    question_th: "ทีมวิศวกรรมความมั่นคงปลอดภัยสารสนเทศจัดทำเอกสารภายในระบุว่า: 'เครื่องคอมพิวเตอร์พนักงานทั้งหมดต้องตั้งค่า Screen Saver ให้ล็อกหน้าจอโดยอัตโนมัติเมื่อไม่มีการใช้งานเกิน 10 นาที ต้องใส่รหัสผ่านเพื่อปลดล็อก และต้องเปิดใช้งานการเข้ารหัสข้อมูลทั้งดิสก์ด้วยมาตรฐาน AES-256' เอกสารนี้กำหนดข้อกำหนดทางเทคนิคภาคบังคับที่ต้องนำไปปฏิบัติในทุกระบบ จัดเป็นเอกสารประเภทใด?",
    options_th: [
      "มาตรฐาน (Standard)",
      "แนวปฏิบัติ (Guideline)",
      "ขั้นตอนปฏิบัติ (Procedure)",
      "นโยบาย (Policy)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: มาตรฐาน (Standard) เป็นเอกสารภาคบังคับ (Mandatory) ที่กำหนดสเปกหรือข้อกำหนดทางเทคนิคอย่างเฉพาะเจาะจง (เช่น กำหนดระยะเวลา 10 นาที หรืออัลกอริทึม AES-256) เพื่อให้ระบบต่างๆ มีความมั่นคงปลอดภัยตามเกณฑ์มาตรฐานเดียวกัน\n- ข้อ B ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) เป็นเพียงคำแนะนำที่ยืดหยุ่นได้ ไม่ใช่ข้อกำหนดบังคับ\n- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) บอกขั้นตอนการคลิกเมนูหรือคำสั่งเป็นลำดับทีละขั้น\n- ข้อ D ไม่ถูกต้อง: นโยบาย (Policy) กำหนดทิศทางระดับสูง เช่น 'ต้องมีการปกป้องหน้าจอคอมพิวเตอร์' แต่จะไม่ระบุตัวเลขเวลาหรือเทคโนโลยีเฉพาะเจาะจง",
    _meta: {
      opportunity: "O14",
      objective: "1.3",
      concept: "C060",
      references: "[S41], [S43], [S47], T@00:51:53, T@00:52:38"
    }
  },
  {
    id: 600,
    dom: 1,
    question: "A Chief Information Officer (CIO) wants to establish a comprehensive cybersecurity program for an expanding organization. The security team needs a structured, organized approach to assess cybersecurity capabilities, identify program gaps, guide security investment, and systematically improve security maturity over time. Which governance instrument is MOST suitable for this purpose?",
    options: [
      "Cybersecurity Framework",
      "Standard Operating Procedure",
      "Acceptable Use Policy",
      "Baseline Security Guideline"
    ],
    correct_idx: 0,
    explanation: "A cybersecurity framework (such as NIST CSF or ISO/IEC 27001) provides a comprehensive, structured methodology for building, organizing, measuring, and maturing an enterprise security program. It organizes controls across domains and assists organizations in assessing their current security posture against targeted baselines. In contrast, standard operating procedures outline operational keystrokes for specific tasks, acceptable use policies govern end-user computer usage, and baseline guidelines provide non-mandatory technical advice.",
    short_explanation_en: "A cybersecurity framework provides a structured, comprehensive approach to organize, assess, and mature an entire security program.",
    question_th: "ประธานเจ้าหน้าที่ฝ่ายสารสนเทศ (CIO) ต้องการจัดตั้งโครงการความมั่นคงปลอดภัยไซเบอร์แบบครอบคลุมสำหรับองค์กรที่กำลังเติบโต ทีมงานต้องการแนวทางที่มีโครงสร้างชัดเจนในการประเมินขีดความสามารถ ชี้หาจุดบกพร่องของระบบ กำกับการลงทุน และพัฒนาวุฒิภาวะ (Maturity) ด้านความปลอดภัยอย่างเป็นระบบ เครื่องมือในการกำกับดูแลข้อใดเหมาะสมที่สุดสำหรับเป้าหมายนี้?",
    options_th: [
      "กรอบการดำเนินงานด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Framework)",
      "ระเบียบปฏิบัติประจำ (Standard Operating Procedure)",
      "นโยบายการใช้งานเทคโนโลยีที่ยอมรับได้ (Acceptable Use Policy)",
      "แนวปฏิบัติความปลอดภัยขั้นพื้นฐาน (Baseline Security Guideline)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: กรอบการดำเนินงาน (Cybersecurity Framework) เช่น NIST CSF หรือ ISO/IEC 27001 คือแบบแผนโครงสร้างระดับมหภาคที่ช่วยให้องค์กรวางแผน ออกแบบ สร้าง และประเมินระดับวุฒิภาวะ (Maturity) ของโครงการความมั่นคงปลอดภัยในภาพรวมได้อย่างเป็นระบบ\n- ข้อ B ไม่ถูกต้อง: Standard Operating Procedure (SOP) เป็นขั้นตอนการทำงานสำหรับงานย่อยเฉพาะเรื่อง ไม่ใช่โครงสร้างของทั้งโปรแกรม\n- ข้อ C ไม่ถูกต้อง: Acceptable Use Policy (AUP) เป็นนโยบายการใช้งานของพนักงานทั่วไป\n- ข้อ D ไม่ถูกต้อง: Baseline Security Guideline เป็นเพียงคำแนะนำเบื้องต้นสำหรับการตั้งค่าอุปกรณ์",
    _meta: {
      opportunity: "O14",
      objective: "1.3",
      concept: "C056",
      references: "[S38], T@00:49:10, T@00:49:52"
    }
  },

  // =========================================================================
  // BATCH 4: Subtopic 1.4 — Cybersecurity Controls (O15 - O17)
  // =========================================================================
  {
    id: 601,
    dom: 1,
    question: "An organization protects its data center using three distinct measures: (1) network firewalls that inspect incoming packets, (2) mandatory background checks and security awareness training for newly hired staff, and (3) perimeter fences equipped with biometric turnstiles at facility gates. In terms of implementation categories, how are these three controls properly classified?",
    options: [
      "(1) Technical, (2) Managerial/Administrative, (3) Physical",
      "(1) Operational, (2) Technical, (3) Physical",
      "(1) Physical, (2) Operational, (3) Managerial/Administrative",
      "(1) Technical, (2) Physical, (3) Operational"
    ],
    correct_idx: 0,
    explanation: "Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.",
    short_explanation_en: "Security controls are categorized by implementation domain into Technical (hardware/software), Managerial/Administrative (management/personnel), and Physical (facility/tangible barriers).",
    question_th: "องค์กรแห่งหนึ่งปกป้องศูนย์ข้อมูลด้วย 3 มาตรการ ได้แก่: (1) ไฟร์วอลล์เครือข่ายที่ตรวจสอบข้อมูลแพ็กเก็ตที่ผ่านเข้าออก, (2) การตรวจสอบประวัติและการฝึกอบรมความตระหนักรู้ด้านความปลอดภัยภาคบังคับสำหรับพนักงานใหม่, และ (3) รั้วล้อมรอบอาคารพร้อมประตูกั้นแบบสแกนลายนิ้วมือที่ทางเข้า ในแง่ของประเภทการนำไปใช้ (Control categories) มาตรการทั้งสามนี้จัดอยู่ในประเภทใดตามลำดับ?",
    options_th: [
      "(1) ทางเทคนิค (Technical), (2) ทางการจัดการ/บริหาร (Managerial/Administrative), (3) ทางกายภาพ (Physical)",
      "(1) ทางการปฏิบัติการ (Operational), (2) ทางเทคนิค (Technical), (3) ทางกายภาพ (Physical)",
      "(1) ทางกายภาพ (Physical), (2) ทางการปฏิบัติการ (Operational), (3) ทางการจัดการ/บริหาร (Managerial/Administrative)",
      "(1) ทางเทคนิค (Technical), (2) ทางกายภาพ (Physical), (3) ทางการปฏิบัติการ (Operational)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่:\n(1) Technical: กลไกฮาร์ดแวร์หรือซอฟต์แวร์ เช่น ไฟร์วอลล์\n(2) Managerial/Administrative: การจัดการ นโยบาย การตรวจประวัติ และการฝึกอบรมบุคลากร\n(3) Physical: มาตรการทางกายภาพ สิ่งกีดขวาง และรั้วอาคาร\n- ตัวเลือกอื่นๆ สลับหมวดหมู่และจำแนกไม่ถูกต้องตามนิยาม",
    _meta: {
      opportunity: "O15",
      objective: "1.4",
      concept: "C070, C079",
      references: "[S50], [S51], T@00:57:54, T@00:58:31"
    }
  },
  {
    id: 602,
    dom: 1,
    question: "A high-security corporate research facility mounts brightly colored, illuminated warning signs along its external perimeter boundary reading: 'WARNING: Restricted Property. 24-Hour Armed Patrols and Continuous Closed-Circuit Video Surveillance in Progress.' In terms of functional control types, what is the PRIMARY purpose of these warning signs?",
    options: [
      "Deterrent control",
      "Preventive control",
      "Detective control",
      "Corrective control"
    ],
    correct_idx: 0,
    explanation: "A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents. In contrast, a preventive control physically or technically stops an action (such as a locked gate). A detective control identifies and records an incident when it happens (such as the video camera recording the footage). A corrective control restores or repairs damage after an event occurs.",
    short_explanation_en: "A deterrent control aims to discourage individuals from attempting unauthorized actions by increasing perceived risk and consequences.",
    question_th: "ศูนย์วิจัยความปลอดภัยสูงแห่งหนึ่งติดตั้งป้ายเตือนไฟส่องสว่างสีสันสะดุดตาตามแนวรั้วภายนอกอาคาร ระบุว่า: 'คำเตือน: เขตหวงห้าม มีเจ้าหน้าที่รักษาความปลอดภัยติดอาวุธลาดตระเวนตลอด 24 ชั่วโมงและบันทึกภาพด้วยกล้องวงจรปิดตลอดเวลา' ในแง่ของฟังก์ชันการทำงาน (Functional control types) วัตถุประสงค์หลักของป้ายเตือนนี้คือข้อใด?",
    options_th: [
      "การควบคุมเชิงยับยั้ง (Deterrent control)",
      "การควบคุมเชิงป้องกัน (Preventive control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงแก้ไข (Corrective control)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: การควบคุมเชิงยับยั้ง (Deterrent control) มีหน้าที่หลักในการขัดขวางหรือทำให้ผู้ประสงค์ร้ายเกิดความกลัวและเปลี่ยนใจไม่ก่อเหตุ ป้ายเตือนที่มองเห็นได้ชัดเจนเป็นตัวอย่างคลาสสิกของการควบคุมเชิงยับยั้ง\n- ข้อ B ไม่ถูกต้อง: Preventive control ต้องสามารถหยุดยั้งทางกายภาพหรือเทคนิคได้จริง เช่น ประตูล็อกหรือกำแพง (ป้ายเตือนหยุดคนเดินผ่านไม่ได้จริง)\n- ข้อ C ไม่ถูกต้อง: Detective control คือสิ่งที่ตรวจจับและแจ้งเตือน เช่น ตัวกล้องวงจรปิดหรือเซ็นเซอร์ตรวจจับความเคลื่อนไหว\n- ข้อ D ไม่ถูกต้อง: Corrective control ใช้แก้ไขฟื้นฟูหลังเกิดเหตุ เช่น การสำรองข้อมูล",
    _meta: {
      opportunity: "O16",
      objective: "1.4",
      concept: "C075, C079",
      references: "[S53], [S55], [S56], T@01:00:36, T@01:04:26"
    }
  },
  {
    id: 603,
    dom: 1,
    question: "Following a sophisticated ransomware infection that encrypted critical accounting databases, the disaster recovery team isolates the infected network segment, wipes the compromised virtual machines, and restores clean financial data from an offline, write-once backup copy. In terms of functional control types, what role does restoring systems from backup media fulfill?",
    options: [
      "Corrective control",
      "Detective control",
      "Preventive control",
      "Directive control"
    ],
    correct_idx: 0,
    explanation: "A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls. Preventive controls stop incidents before they occur. Detective controls identify and alert on active or past incidents. Directive controls specify mandatory behavioral rules.",
    short_explanation_en: "A corrective control restores systems, repairs damage, and mitigates harm following a security incident.",
    question_th: "หลังจากเกิดเหตุการณ์มัลแวร์เรียกค่าไถ่ (Ransomware) เข้ารหัสฐานข้อมูลบัญชีสำคัญ ทีมกู้คืนภัยพิบัติได้แยกเครือข่ายที่ติดเชื้อ ล้างเครื่องเสมือนที่ถูกโจมตี และกู้คืนข้อมูลการเงินที่สมบูรณ์จากชุดข้อมูลสำรองแบบออฟไลน์ (Offline backup) ในแง่ของฟังก์ชันการควบคุม การกู้คืนระบบจากชุดข้อมูลสำรองนี้ทำหน้าที่ใด?",
    options_th: [
      "การควบคุมเชิงแก้ไข (Corrective control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงป้องกัน (Preventive control)",
      "การควบคุมเชิงสั่งการ (Directive control)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Corrective Control (การควบคุมเชิงแก้ไข) คือมาตรการที่ทำงาน 'หลังเกิดเหตุ' (Post-incident) เพื่อเยียวยาความเสียหาย ซ่อมแซมระบบ และนำระบบและข้อมูลกลับคืนสู่สภาวะปกติ เช่น การกู้คืนข้อมูลจากแบ็กอัป หรือการลงระบบใหม่\n- ข้อ B ไม่ถูกต้อง: Detective control ทำหน้าที่ตรวจพบการบุกรุก เช่น ระบบแอนติไวรัสหรือ SIEM แจ้งเตือน\n- ข้อ C ไม่ถูกต้อง: Preventive control ทำหน้าที่สกัดกั้นการโจมตีไม่ให้เกิดขึ้นตั้งแต่แรก\n- ข้อ D ไม่ถูกต้อง: Directive control เป็นการออกคำสั่ง กฎเกณฑ์ หรือนโยบายเพื่อนำทางพฤติกรรมของบุคลากร",
    _meta: {
      opportunity: "O16",
      objective: "1.4",
      concept: "C076",
      references: "[S53], [S56], T@01:01:20"
    }
  },
  {
    id: 604,
    dom: 1,
    question: "Management posts a mandatory notice on all server room entry doors stating: 'NOTICE: Tailgating is strictly prohibited. Every employee must badge in individually, and all external visitors must be escorted by authorized IT staff at all times.' Which functional control type is illustrated by this posted directive?",
    options: [
      "Directive control",
      "Compensating control",
      "Detective control",
      "Corrective control"
    ],
    correct_idx: 0,
    explanation: "A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls. Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed. Detective controls discover and log violations. Corrective controls remediate consequences after an event.",
    short_explanation_en: "A directive control guides behavior and mandates compliance with specified security procedures and policies.",
    question_th: "ผู้บริหารติดประกาศบังคับไว้ที่ประตูทางเข้าห้องเซิร์ฟเวอร์ทุกบานว่า: 'ประกาศ: ห้ามเดินตามหลังโดยไม่แตะบัตร (Tailgating) อย่างเด็ดขาด พนักงานทุกคนต้องแตะบัตรเข้าออกรายบุคคล และผู้มาติดต่อภายนอกต้องมีเจ้าหน้าที่ไอทีติดตามตลอดเวลา' ป้ายประกาศนี้เป็นตัวอย่างของการควบคุมเชิงฟังก์ชันประเภทใด?",
    options_th: [
      "การควบคุมเชิงสั่งการ (Directive control)",
      "การควบคุมเชิงชดเชย (Compensating control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงแก้ไข (Corrective control)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท\n- ข้อ B ไม่ถูกต้อง: Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้\n- ข้อ C ไม่ถูกต้อง: Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่\n- ข้อ D ไม่ถูกต้อง: Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร",
    _meta: {
      opportunity: "O16",
      objective: "1.4",
      concept: "C077",
      references: "[S53], [S56], T@01:01:20, T@01:03:13"
    }
  },
  {
    id: 605,
    dom: 1,
    question: "A bank protects its core customer banking application using perimeter firewalls, internal network segmentation, host-based endpoint protection, multi-factor authentication, database-level encryption, and continuous log auditing. Why is this multi-tiered architecture considered superior to relying solely on a powerful perimeter firewall?",
    options: [
      "It implements Defense in Depth, ensuring that if a perimeter control fails or is bypassed, complementary internal layers continue to protect the critical asset",
      "It completely eliminates the requirement for ongoing vulnerability management and security patching",
      "It eliminates single points of failure by ensuring that every security control performs identical functional operations",
      "It ensures that technical controls operate independently of organizational security policies and management oversight"
    ],
    correct_idx: 0,
    explanation: "Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset. Defense in depth does not eliminate the need for patching or vulnerability management, nor does it mean controls operate without policy.",
    short_explanation_en: "Defense in depth deploys multiple complementary security layers so that the failure of any single control does not compromise the asset.",
    question_th: "ธนาคารแห่งหนึ่งปกป้องแอปพลิเคชันระบบการเงินโดยใช้ไฟร์วอลล์ที่ขอบเขตเครือข่าย, การแบ่งเซกเมนต์เครือข่ายภายใน, การป้องกันที่เครื่องแม่ข่าย, การยืนยันตัวตนแบบหลายปัจจัย, การเข้ารหัสฐานข้อมูล, และการตรวจสอบ Log อย่างต่อเนื่อง เหตุใดสถาปัตยกรรมแบบหลายชั้นนี้จึงเหนือกว่าการพึ่งพาเพียงไฟร์วอลล์รอบนอกที่ทรงประสิทธิภาพเพียงอย่างเดียว?",
    options_th: [
      "เป็นการใช้หลักการป้องกันแบบเชิงลึก (Defense in Depth) ทำให้หากการควบคุมรอบนอกล้มเหลวหรือถูกบายพาส เลเยอร์ชั้นในที่เสริมกันจะยังคงปกป้องทรัพยากรสำคัญต่อไปได้",
      "ช่วยขจัดความจำเป็นในการจัดการช่องโหว่และการลงแพตช์ระบบอย่างต่อเนื่องได้อย่างสิ้นเชิง",
      "ช่วยกำจัดจุดล้มเหลวเดี่ยวโดยทำให้แน่ใจว่ามาตรการควบคุมทุกตัวทำงานในฟังก์ชันที่เหมือนกันทุกประการ",
      "ทำให้มาตรการควบคุมทางเทคนิคสามารถทำงานได้โดยไม่ต้องขึ้นกับนโยบายขององค์กรหรือการกำกับดูแลของผู้บริหาร"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่\n- ข้อ B ไม่ถูกต้อง: Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง\n- ข้อ C ไม่ถูกต้อง: การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ\n- ข้อ D ไม่ถูกต้อง: มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ",
    _meta: {
      opportunity: "O17",
      objective: "1.4",
      concept: "C073",
      references: "[S52], [S55], T@00:59:47, T@01:00:36"
    }
  },

  // =========================================================================
  // BATCH 5: Subtopic 1.5 — Professional & Ethical Conduct (O18)
  // =========================================================================
  {
    id: 606,
    dom: 1,
    question: "A system administrator routinely applies verified operating system security updates, maintains current anti-malware signatures on endpoints, and changes factory-default passwords on newly installed network switches before deployment. These routine, prudent operational measures reflect which professional security principle?",
    options: [
      "Due Care",
      "Due Diligence",
      "Risk Avoidance",
      "Separation of Duties"
    ],
    correct_idx: 0,
    explanation: "Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care. Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done'). Risk avoidance eliminates activities altogether, and separation of duties divides tasks among multiple people.",
    short_explanation_en: "Due Care is the implementation of reasonable, prudent actions and operational safeguards to protect assets from harm.",
    question_th: "ผู้ดูแลระบบปฏิบัติการหมั่นลงแพตช์ความมั่นคงปลอดภัยตามกำหนดเวลาอย่างสม่ำเสมอ อัปเดตฐานข้อมูลแอนติไวรัสบนเครื่องลูกข่าย และเปลี่ยนรหัสผ่านเริ่มต้นจากโรงงาน (Default passwords) บนอุปกรณ์สวิตช์เครือข่ายตัวใหม่ก่อนนำไปใช้งานจริง การดำเนินการที่รอบคอบและเหมาะสมตามปกตินี้สะท้อนถึงหลักการวิชาชีพใด?",
    options_th: [
      "ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)",
      "ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)",
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การแบ่งแยกหน้าที่ความรับผิดชอบ (Separation of Duties)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)\n- ข้อ B ไม่ถูกต้อง: Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)\n- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง\n- ข้อ D ไม่ถูกต้อง: Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต",
    _meta: {
      opportunity: "O18",
      objective: "1.5",
      concept: "C085",
      references: "[S58], T@01:06:33, T@01:07:15"
    }
  },
  {
    id: 607,
    dom: 1,
    question: "Prior to signing a service agreement with a third-party cloud analytics provider, a financial firm's cybersecurity team conducts a formal risk assessment, reviews the vendor's SOC 2 Type II audit report, evaluates their encryption architecture, and verifies their regulatory compliance certifications. Which professional security principle is the cybersecurity team executing?",
    options: [
      "Due Diligence",
      "Due Care",
      "Strict Liability",
      "Risk Acceptance"
    ],
    correct_idx: 0,
    explanation: "Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence. Due Care is the subsequent or routine practice of taking prudent, protective operational steps. Strict liability is a legal standard, and risk acceptance acknowledges and absorbs risk without requiring remediation.",
    short_explanation_en: "Due Diligence is the thorough investigation, review, and assessment of risks and controls before and during an activity.",
    question_th: "ก่อนการลงนามในสัญญาใช้บริการกับผู้ให้บริการวิเคราะห์ข้อมูลบนคลาวด์ภายนอก ทีมความมั่นคงปลอดภัยไซเบอร์ของบริษัทการเงินได้ทำการประเมินความเสี่ยงอย่างเป็นทางการ ตรวจสอบรายงานการตรวจสอบ SOC 2 Type II ของผู้ขาย ประเมินสถาปัตยกรรมการเข้ารหัสข้อมูล และยืนยันการรับรองมาตรฐานด้านกฎหมาย ทีมงานกำลังปฏิบัติตามหลักการวิชาชีพใด?",
    options_th: [
      "ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)",
      "ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)",
      "ความรับผิดโดยเคร่งครัด (Strict Liability)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    explanation_th: "ข้อ A ถูกต้อง: Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ\n- ข้อ B ไม่ถูกต้อง: Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)\n- ข้อ C ไม่ถูกต้อง: Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย\n- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย",
    _meta: {
      opportunity: "O18",
      objective: "1.5",
      concept: "C086",
      references: "[S59], T@01:07:15, T@01:07:59"
    }
  }
];
