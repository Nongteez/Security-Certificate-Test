/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Question Count: 24
 * Version: next-bank (ISC2 CC 2026 Exam Outline)
 */

const questions = [
  {
    "id": 584,
    "dom": 1,
    "question": "During a routine software maintenance update at a regional hospital, an unauthorized script inadvertently alters prescription dosage values in the central patient database. The database remains fully online and accessible to authorized physicians, and no patient data was disclosed outside the network. Which core security objective was primarily violated?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation"
    ],
    "correct_idx": 1,
    "explanation": "Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity. Confidentiality was not violated because data was not improperly disclosed. Availability was maintained because the database remained online and accessible. Non-repudiation concerns evidence that a particular past action or message originated from the attributed party. The demonstrated unauthorized dosage changes primarily compromise integrity.",
    "short_explanation_en": "Integrity ensures data is accurate and protected against unauthorized modification or deletion.",
    "question_th": "ระหว่างการอัปเดตบำรุงรักษาซอฟต์แวร์ตามปกติที่โรงพยาบาล สคริปต์ที่ไม่ได้รับอนุญาตตัวหนึ่งได้แก้ไขค่าขนาดยาในฐานข้อมูลผู้ป่วยส่วนกลางโดยไม่ได้ตั้งใจ โดยที่ฐานข้อมูลยังคงออนไลน์และแพทย์ที่ได้รับอนุญาตสามารถเข้าถึงได้ตามปกติ และไม่มีข้อมูลผู้ป่วยรั่วไหลออกสู่ภายนอก เหตุการณ์นี้ละเมิดวัตถุประสงค์ความปลอดภัยหลักข้อใด?",
    "options_th": [
      "การรักษาความลับ (Confidentiality)",
      "ความถูกต้องแท้จริงและความสมบูรณ์ของข้อมูล (Integrity)",
      "ความพร้อมใช้งาน (Availability)",
      "การไม่สามารถปฏิเสธความรับผิดได้ (Non-repudiation)"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง\n- ข้อ A ไม่ถูกต้อง: Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์\n- ข้อ C ไม่ถูกต้อง: Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ\n- ข้อ D ไม่ถูกต้อง: Non-repudiation เกี่ยวกับหลักฐานที่สนับสนุนว่าการกระทำหรือข้อความในอดีตมาจากผู้ที่ถูกอ้างถึง ส่วนการเปลี่ยนขนาดยาโดยไม่ได้รับอนุญาตในโจทย์ละเมิด Integrity เป็นหลัก",
    "explanation_detail": {
      "correct": {
        "en": "Integrity is the security objective focused on guarding against improper information modification, alteration, or destruction. In this scenario, prescription dosage values were altered without authorization, representing a direct compromise of data integrity.",
        "th": "Integrity (ความถูกต้องสมบูรณ์ของข้อมูล) คือเป้าหมายความมั่นคงปลอดภัยในการป้องกันการแก้ไข ดัดแปลง หรือทำลายข้อมูลโดยไม่ได้รับอนุญาต การที่ขนาดยาถูกเปลี่ยนแปลงถือเป็นการทำลายความถูกต้องของข้อมูลโดยตรง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Confidentiality was not violated because data was not improperly disclosed outside the authorized environment.",
          "text_th": "Confidentiality ไม่ถูกละเมิดเนื่องจากไม่มีการเปิดเผยข้อมูลแก่ผู้ไม่มีสิทธิ์"
        },
        {
          "letter": "C",
          "text_en": "Availability was maintained because the database remained fully online and accessible to authorized physicians.",
          "text_th": "Availability ยังคงอยู่เพราะระบบยังออนไลน์และเข้าถึงได้ตามปกติ"
        },
        {
          "letter": "D",
          "text_en": "Non-repudiation concerns evidence that a particular past action or message originated from the attributed party. The demonstrated unauthorized dosage changes primarily compromise integrity.",
          "text_th": "Non-repudiation เกี่ยวกับหลักฐานที่สนับสนุนว่าการกระทำหรือข้อความในอดีตมาจากผู้ที่ถูกอ้างถึง ส่วนการเปลี่ยนขนาดยาโดยไม่ได้รับอนุญาตในโจทย์ละเมิด Integrity เป็นหลัก"
        }
      ]
    }
  },
  {
    "id": 585,
    "dom": 1,
    "question": "A bank's customer service representatives must view customer payment histories to address transaction inquiries, but internal policy prohibits representatives from viewing full 16-digit payment card numbers. Which bounded security control BEST satisfies this confidentiality requirement without disrupting customer support operations?",
    "options": [
      "Data masking that displays only the last four digits of the card number to representatives",
      "Full-disk encryption applied to the customer service department's workstations",
      "Discretionary access control granting representatives unrestricted read access to customer files",
      "Digital signatures applied to all incoming credit card transactions"
    ],
    "correct_idx": 0,
    "explanation": "Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties. Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number. Unrestricted read access directly violates the confidentiality mandate by exposing the full number. Digital signatures provide integrity and authenticity verification, not display confidentiality.",
    "short_explanation_en": "Data masking selectively obscures sensitive data fields while preserving operational utility for authorized users.",
    "question_th": "เจ้าหน้าที่บริการลูกค้าของธนาคารจำเป็นต้องดูประวัติการชำระเงินของลูกค้าเพื่อตอบข้อซักถาม แต่ตามนโยบายภายในห้ามไม่ให้เจ้าหน้าที่มองเห็นหมายเลขบัตรชำระเงินครบทั้ง 16 หลัก มาตรการความปลอดภัยในข้อใดเหมาะสมที่สุดในการตอบสนองข้อกำหนดการรักษาความลับนี้โดยไม่กระทบต่อการให้บริการ?",
    "options_th": [
      "การทำ Data Masking โดยแสดงเฉพาะ 4 หลักสุดท้ายของหมายเลขบัตรแก่เจ้าหน้าที่",
      "การเข้ารหัสทั้งฮาร์ดดิสก์ (Full-disk encryption) บนเครื่องคอมพิวเตอร์ของฝ่ายบริการลูกค้า",
      "การกำหนดสิทธิ์แบบดุลยพินิจ (DAC) โดยอนุญาตให้เจ้าหน้าที่อ่านข้อมูลลูกค้าได้อย่างอิสระ",
      "การใช้ลายมือชื่อดิจิทัล (Digital Signatures) กำกับทุกรายการธุรกรรมที่เข้ามา"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด\n- ข้อ B ไม่ถูกต้อง: Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี\n- ข้อ C ไม่ถูกต้อง: การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง\n- ข้อ D ไม่ถูกต้อง: Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "Data masking is a bounded confidentiality control that obscures sensitive elements of a dataset (such as displaying only the last four digits of a credit card number) while allowing authorized users to access necessary contextual information to perform their job duties.",
        "th": "Data Masking (การพรางข้อมูล) คือมาตรการรักษาความลับที่ปิดบังข้อมูลส่วนที่ละเอียดอ่อน (เช่น การแสดงเฉพาะเลขท้าย 4 ตัว) ทำให้เจ้าหน้าที่สามารถตรวจสอบยืนยันกับลูกค้าได้โดยไม่ต้องเปิดเผยหมายเลขบัตรทั้งหมด"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Full-disk encryption protects data at rest against physical machine theft, but authorized active users can still see the entire decrypted number.",
          "text_th": "Full-disk encryption ป้องกันข้อมูลเมื่อเครื่องถูกขโมย แต่เมื่อเจ้าหน้าที่ล็อกอินทำงาน ข้อมูลจะถูกถอดรหัสและแสดงผลเต็มจำนวนอยู่ดี"
        },
        {
          "letter": "C",
          "text_en": "Unrestricted read access directly violates the confidentiality mandate by exposing the full number.",
          "text_th": "การให้สิทธิ์อ่านทั้งหมดละเมิดนโยบายความลับโดยตรง"
        },
        {
          "letter": "D",
          "text_en": "Digital signatures provide integrity and authenticity verification, not display confidentiality.",
          "text_th": "Digital signatures ใช้ตรวจสอบความถูกต้องและแหล่งที่มา (Integrity/Authenticity) ไม่ได้ใช้จำกัดการมองเห็นข้อมูล"
        }
      ]
    }
  },
  {
    "id": 586,
    "dom": 1,
    "question": "An organization's primary datacenter is equipped with an uninterruptible power supply (UPS) system that sustains server operations for up to 30 minutes during a blackout. To ensure continuous availability during an extended utility power outage lasting several days, which mechanism should the organization deploy?",
    "options": [
      "An on-site auxiliary diesel generator with dedicated fuel reserves",
      "Redundant server power supplies connected to the same electrical breaker panel",
      "A storage area network (SAN) utilizing RAID 1 disk mirroring",
      "Daily off-site magnetic tape backups stored in an archival facility"
    ],
    "correct_idx": 0,
    "explanation": "An auxiliary generator supplies longer-duration backup power while a UPS bridges the startup interval. Sustaining operation for days also requires suitable capacity, fuel, maintenance and tested transfer arrangements; the generator label alone is not an availability guarantee. Redundant power supplies connected to the same electrical panel will both fail if utility power is lost. RAID disk mirroring protects against individual drive failures, not power loss. Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.",
    "short_explanation_en": "A UPS bridges generator startup; a suitably supported generator can provide longer-duration backup power.",
    "question_th": "ศูนย์ข้อมูลหลักขององค์กรมีการติดตั้งระบบจ่ายไฟสำรองแบบต่อเนื่อง (UPS) ซึ่งสามารถจ่ายพลังงานให้เซิร์ฟเวอร์ทำงานได้นานสูงสุด 30 นาทีเมื่อไฟดับ หากต้องการรักษาความพร้อมใช้งานอย่างต่อเนื่องในกรณีที่ไฟฟ้าดับเป็นเวลานานหลายวัน องค์กรควรติดตั้งกลไกใด?",
    "options_th": [
      "เครื่องกำเนิดไฟฟ้าดีเซลสำรองในพื้นที่ (Auxiliary generator) พร้อมถังน้ำมันเชื้อเพลิงสำรอง",
      "พาวเวอร์ซัพพลายแบบสำรองในเซิร์ฟเวอร์ที่เสียบเข้ากับแผงวงจรไฟฟ้าเดียวกัน",
      "ระบบเครือข่ายจัดเก็บข้อมูล (SAN) ที่ใช้การจำลองข้อมูลแบบ RAID 1",
      "การสำรองข้อมูลลงเทปแม่เหล็กทุกวันแล้วนำไปเก็บไว้ที่สถานที่จัดเก็บภายนอก"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: เครื่องกำเนิดไฟฟ้าสำรองจ่ายไฟระยะยาวกว่า โดย UPS จ่ายไฟเชื่อมช่วงเริ่มเดินเครื่อง การทำงานต่อเนื่องหลายวันยังต้องมีความจุ เชื้อเพลิง การบำรุงรักษา และระบบสลับจ่ายไฟที่ทดสอบแล้ว ชื่ออุปกรณ์เพียงอย่างเดียวไม่รับประกัน Availability\n- ข้อ B ไม่ถูกต้อง: พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร\n- ข้อ C ไม่ถูกต้อง: RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ\n- ข้อ D ไม่ถูกต้อง: เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้",
    "explanation_detail": {
      "correct": {
        "en": "An auxiliary generator supplies longer-duration backup power while a UPS bridges the startup interval. Sustaining operation for days also requires suitable capacity, fuel, maintenance and tested transfer arrangements; the generator label alone is not an availability guarantee.",
        "th": "เครื่องกำเนิดไฟฟ้าสำรองจ่ายไฟระยะยาวกว่า โดย UPS จ่ายไฟเชื่อมช่วงเริ่มเดินเครื่อง การทำงานต่อเนื่องหลายวันยังต้องมีความจุ เชื้อเพลิง การบำรุงรักษา และระบบสลับจ่ายไฟที่ทดสอบแล้ว ชื่ออุปกรณ์เพียงอย่างเดียวไม่รับประกัน Availability"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Redundant power supplies connected to the same electrical panel will both fail if utility power is lost.",
          "text_th": "พาวเวอร์ซัพพลายคู่ที่ต่อกับแผงไฟเดียวกันจะดับพร้อมกันเมื่อไฟดับทั้งอาคาร"
        },
        {
          "letter": "C",
          "text_en": "RAID disk mirroring protects against individual drive failures, not power loss.",
          "text_th": "RAID ป้องกันความเสียหายจากฮาร์ดดิสก์พัง ไม่ได้ป้องกันไฟฟ้าดับ"
        },
        {
          "letter": "D",
          "text_en": "Tape backups provide data restoration following a disaster, but cannot keep active systems running during a power interruption.",
          "text_th": "เทปสำรองข้อมูลใช้สำหรับการกู้คืนข้อมูล (Recovery) ไม่สามารถทำให้ระบบออนไลน์ต่อเนื่องระหว่างไฟดับได้"
        }
      ]
    }
  },
  {
    "id": 587,
    "dom": 1,
    "question": "A contractor whose contract ended two days ago attempts to log into the corporate payroll portal. The contractor successfully provides a valid username and password, but the system denies access because the account's role permissions were disabled immediately upon contract termination. Which phase of the AAA model successfully prevented unauthorized access?",
    "options": [
      "Authentication",
      "Authorization",
      "Accounting",
      "Identification"
    ],
    "correct_idx": 1,
    "explanation": "Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges. Accounting records activity, including successful or denied access attempts where configured; recording an event does not itself grant access.",
    "short_explanation_en": "Authorization determines and enforces what resources an authenticated identity is permitted to access.",
    "question_th": "ผู้รับเหมาที่สิ้นสุดสัญญาจ้างไปแล้วเมื่อ 2 วันก่อน พยายามเข้าสู่ระบบพอร์ทัลเงินเดือนของบริษัท โดยสามารถกรอกชื่อผู้ใช้และรหัสผ่านที่ถูกต้องได้สำเร็จ แต่ระบบปฏิเสธการเข้าถึงเนื่องจากสิทธิ์ตามบทบาท (Role permissions) ของบัญชีถูกระงับทันทีหลังหมดสัญญาจ้าง ขั้นตอนใดของโมเดล AAA ที่ทำหน้าที่ป้องกันการเข้าถึงที่ไม่ได้รับอนุญาตได้สำเร็จ?",
    "options_th": [
      "การพิสูจน์ตัวตน (Authentication)",
      "การกำหนดและอนุญาตสิทธิ์ (Authorization)",
      "การบันทึกและตรวจสอบกิจกรรม (Accounting)",
      "การระบุตัวตน (Identification)"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Authorization (การอนุญาตสิทธิ์) คือขั้นตอนที่ตรวจสอบว่าตัวตนที่ผ่านการพิสูจน์แล้วมีสิทธิ์เข้าถึงทรัพยากรหรือทำงานใดได้บ้าง ในกรณีนี้ผู้รับเหมาพิสูจน์ตัวตนผ่าน (Authentication สำเร็จ) แต่ระบบปฏิเสธการเข้าถึงเพราะสิทธิ์ถูกเพิกถอนไปแล้ว ซึ่งเป็นหน้าที่ของ Authorization\n- ข้อ A ไม่ถูกต้อง: Authentication ทำหน้าที่ตรวจสอบความถูกต้องของรหัสผ่าน ซึ่งในข้อนี้ระบุว่ากรอกผ่านได้สำเร็จ\n- ข้อ C ไม่ถูกต้อง: Accounting ทำหน้าที่บันทึกประวัติการใช้งาน ไม่ใช่ตัวตัดสินอนุญาตหรือปฏิเสธสิทธิ์\n- ข้อ D ไม่ถูกต้อง: Identification คือการอ้างตัวตน (เช่น การป้อน username) ซึ่งเกิดขึ้นก่อนการตรวจสอบ",
    "explanation_detail": {
      "correct": {
        "en": "Authorization is the phase of the AAA model that determines whether an authenticated entity is permitted to access a specific resource or execute specific actions. In this scenario, identification and authentication succeeded because the contractor presented valid credentials, but the system enforced authorization rules to deny access based on revoked privileges.",
        "th": "Authorization (การกำหนดสิทธิ์) เป็นขั้นตอนในโมเดล AAA ที่ทำหน้าที่ตรวจสอบว่าผู้ใช้ที่ผ่านการยืนยันตัวตนแล้วมีสิทธิ์เข้าถึงทรัพยากรนั้นหรือไม่ ในกรณีนี้การพิสูจน์ตัวตนสำเร็จแต่ระบบบล็อกเพราะสิทธิ์ของบัญชีถูกระงับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Authentication succeeded when credentials were validated; it does not determine access permissions.",
          "text_th": "Authentication ทำงานสำเร็จไปแล้วตอนตรวจรหัสผ่าน แต่ไม่ได้มีหน้าที่ตัดสินว่าเข้าถึงข้อมูลได้หรือไม่"
        },
        {
          "letter": "C",
          "text_en": "Accounting records activity, including successful or denied access attempts where configured; recording an event does not itself grant access.",
          "text_th": "Accounting บันทึกกิจกรรม รวมถึงความพยายามเข้าถึงที่สำเร็จหรือถูกปฏิเสธตามการตั้งค่า การบันทึกเหตุการณ์ไม่ได้ให้สิทธิ์เข้าถึงด้วยตัวเอง"
        },
        {
          "letter": "D",
          "text_en": "Identification is simply claiming an identity (such as supplying a username) prior to authentication.",
          "text_th": "Identification เป็นเพียงการระบุตัวตน (เช่น ป้อน Username) ซึ่งสำเร็จไปตั้งแต่ตอนล็อกอินแล้ว"
        }
      ]
    }
  },
  {
    "id": 588,
    "dom": 1,
    "question": "An organization's security policy requires multi-factor authentication (MFA) for administrative access. A systems administrator logs in by entering an alphanumeric password and a four-digit numeric PIN on the login screen. Why does this authentication mechanism FAIL to satisfy the MFA requirement?",
    "options": [
      "A four-digit PIN does not provide sufficient cryptographic entropy for administrative accounts",
      "Both credentials belong to the same factor category of 'something you know'",
      "Multi-factor authentication requires at least three independent credential types",
      "PIN codes can only be processed when entered on an approved hardware security token"
    ],
    "correct_idx": 1,
    "explanation": "Multi-factor authentication (MFA) requires the presentation of two or more credentials drawn from independent factor categories: something you know (knowledge), something you have (possession), or something you are (biometrics). A password and a PIN are both knowledge-based credentials ('something you know'). Using two items from the same factor category still constitutes single-factor authentication, not multi-factor authentication. MFA requires two distinct categories, not necessarily three. PIN entropy and token format are implementation details that do not change factor taxonomy.",
    "short_explanation_en": "Multi-factor authentication requires credentials from at least two distinct, independent factor categories.",
    "question_th": "นโยบายความมั่นคงปลอดภัยขององค์กรกำหนดให้ต้องใช้ Multi-Factor Authentication (MFA) สำหรับการเข้าถึงระบบของผู้ดูแลระบบ ผู้ดูแลระบบคนหนึ่งล็อกอินเข้าสู่ระบบโดยกรอกรหัสผ่านตัวอักษรผสมตัวเลขและตามด้วยรหัส PIN ตัวเลข 4 หลักบนหน้าจอ เหตุใดกลไกการยืนยันตัวตนนี้จึงไม่ผ่านเกณฑ์ข้อกำหนด MFA?",
    "options_th": [
      "รหัส PIN 4 หลักมีความซับซ้อน (Entropy) ไม่เพียงพอสำหรับบัญชีผู้ดูแลระบบ",
      "ข้อมูลประจำตัวทั้งสองอย่างจัดอยู่ในประเภทปัจจัยเดียวกันคือ 'สิ่งที่คุณรู้' (Something you know)",
      "การยืนยันตัวตนแบบหลายปัจจัยจำเป็นต้องใช้ข้อมูลประจำตัวที่แตกต่างกันอย่างน้อย 3 ประเภทขึ้นไป",
      "รหัส PIN สามารถประมวลผลได้ก็ต่อเมื่อกดผ่านอุปกรณ์ฮาร์ดแวร์โทเคน (Hardware token) เท่านั้น"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Multi-Factor Authentication (MFA) ต้องใช้หลักฐานที่มาจากปัจจัยที่แตกต่างกันอย่างน้อย 2 ใน 3 ปัจจัย ได้แก่ สิ่งที่คุณรู้ (Know), สิ่งที่คุณมี (Have), และสิ่งที่คุณเป็น (Are) ทั้งรหัสผ่านและรหัส PIN จัดเป็น 'สิ่งที่คุณรู้' (Knowledge factor) ทั้งคู่ จึงยังคงเป็นการพิสูจน์ตัวตนแบบปัจจัยเดียว ไม่ใช่ MFA\n- ข้อ A ไม่ถูกต้อง: แม้ PIN 4 หลักจะสั้น แต่นั่นไม่ใช่เหตุผลทางนิยามที่ทำให้ไม่เป็น MFA\n- ข้อ C ไม่ถูกต้อง: MFA พื้นฐานต้องการเพียง 2 ปัจจัยที่ต่างกัน (Two-factor) ไม่จำเป็นต้องถึง 3 ปัจจัยเสมอไป\n- ข้อ D ไม่ถูกต้อง: PIN สามารถตั้งและกรอกผ่านซอฟต์แวร์ได้ ไม่จำกัดเฉพาะฮาร์ดแวร์โทเคน",
    "explanation_detail": {
      "correct": {
        "en": "The password and the PIN entered on this login screen are both knowledge factors: something you know. Two secrets of the same factor type do not meet the requirement for multiple distinct authentication factors.",
        "th": "รหัสผ่านและ PIN ที่กรอกบนหน้าจอล็อกอินนี้เป็นปัจจัยประเภทสิ่งที่คุณรู้ (Knowledge factor) ทั้งคู่ การใช้ความลับสองอย่างในปัจจัยประเภทเดียวกันจึงไม่ตรงตามข้อกำหนดที่ต้องใช้ปัจจัยต่างประเภทกันของ MFA"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "PIN strength matters to security, but its length does not change its factor category. Even a longer PIN combined only with a password would still use knowledge factors.",
          "text_th": "ความแข็งแรงของ PIN มีผลต่อความปลอดภัย แต่ความยาวไม่ได้เปลี่ยนประเภทปัจจัย แม้ใช้ PIN ที่ยาวขึ้นร่วมกับรหัสผ่านเพียงอย่างเดียวก็ยังเป็นปัจจัยประเภทสิ่งที่คุณรู้"
        },
        {
          "letter": "C",
          "text_en": "MFA requires at least two distinct factor types, not necessarily three. The problem here is that both supplied secrets have the same type.",
          "text_th": "MFA ต้องใช้ปัจจัยต่างประเภทกันอย่างน้อยสองประเภท ไม่จำเป็นต้องครบสามประเภท ปัญหาในโจทย์คือความลับทั้งสองอย่างเป็นปัจจัยประเภทเดียวกัน"
        },
        {
          "letter": "D",
          "text_en": "A PIN can be entered in software or used to activate an authenticator. It is not restricted to hardware-token entry; a PIN plus a password alone does not demonstrate possession of such a token.",
          "text_th": "PIN สามารถกรอกผ่านซอฟต์แวร์หรือใช้ปลดล็อกสิ่งที่ใช้พิสูจน์ตัวตนได้ ไม่ได้จำกัดว่าต้องกรอกบนฮาร์ดแวร์โทเคน และ PIN ร่วมกับรหัสผ่านเพียงอย่างเดียวไม่ได้แสดงว่าผู้ใช้ครอบครองโทเคนดังกล่าว"
        }
      ]
    }
  },
  {
    "id": 589,
    "dom": 1,
    "question": "A digital retail company collects customer shipping addresses and payment details to fulfill online purchases. The retailer contracts a third-party cloud hosting provider to store the customer database and execute queries solely based on the retailer's written instructions. In the context of data privacy governance, which role does the cloud provider represent?",
    "options": [
      "Data Subject",
      "Data Controller",
      "Data Processor",
      "Data Protection Authority"
    ],
    "correct_idx": 2,
    "explanation": "A Data Processor is an entity that processes personal data on behalf of and under the direct instructions of the data controller. The cloud hosting provider stores and manages the data strictly according to the retailer's directions without determining the purpose or legal basis of the processing. The online retailer is the Data Controller because it determines the purposes and means of processing. The customers whose information is collected are the Data Subjects. A Data Protection Authority is an independent public regulatory body overseeing privacy laws.",
    "short_explanation_en": "A Data Processor processes personal information on behalf of and strictly according to the instructions of the Data Controller.",
    "question_th": "บริษัทค้าปลีกออนไลน์แห่งหนึ่งเก็บรวบรวมที่อยู่จัดส่งและข้อมูลการชำระเงินของลูกค้าเพื่อจัดส่งสินค้า โดยบริษัทได้ทำสัญญากับผู้ให้บริการคลาวด์ภายนอกเพื่อจัดเก็บฐานข้อมูลลูกค้าและประมวลผลคำสั่งตามคำสั่งเป็นลายลักษณ์อักษรของบริษัทค้าปลีกเท่านั้น ในบริบทของการกำกับดูแลความเป็นส่วนตัวของข้อมูล (Data Privacy) ผู้ให้บริการคลาวด์นี้ทำหน้าที่ในบทบาทใด?",
    "options_th": [
      "เจ้าของข้อมูลส่วนบุคคล (Data Subject)",
      "ผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)",
      "ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor)",
      "องค์กรกำกับดูแลการคุ้มครองข้อมูลส่วนบุคคล (Data Protection Authority)"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: ผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) คือบุคคลหรือนิติบุคคลที่ดำเนินการประมวลผลข้อมูลส่วนบุคคลในนามหรือตามคำสั่งของผู้ควบคุมข้อมูล ผู้ให้บริการคลาวด์ที่ทำหน้าที่เก็บและประมวลผลตามคำสั่งของบริษัทค้าปลีกจึงมีสถานะเป็น Data Processor\n- ข้อ A ไม่ถูกต้อง: Data Subject คือตัวลูกค้าซึ่งเป็นบุคคลธรรมดาที่เป็นเจ้าของข้อมูล\n- ข้อ B ไม่ถูกต้อง: Data Controller คือบริษัทค้าปลีกเอง เนื่องจากเป็นผู้กำหนดวัตถุประสงค์และวิธีการในการเก็บรวบรวมและใช้ข้อมูล\n- ข้อ D ไม่ถูกต้อง: Data Protection Authority คือหน่วยงานรัฐที่กำกับดูแลกฎหมายคุ้มครองข้อมูลส่วนบุคคล",
    "explanation_detail": {
      "correct": {
        "en": "The cloud provider is the Data Processor in the stated arrangement because it stores and processes personal data on the retailer’s instructions. The retailer determines the processing purpose; cloud hosting alone does not make the provider the controller.",
        "th": "ผู้ให้บริการคลาวด์เป็นผู้ประมวลผลข้อมูลส่วนบุคคล (Data Processor) ในความสัมพันธ์ตามโจทย์ เพราะจัดเก็บและประมวลผลข้อมูลตามคำสั่งของบริษัทค้าปลีก บริษัทค้าปลีกเป็นผู้กำหนดวัตถุประสงค์ การให้บริการโฮสต์บนคลาวด์เพียงอย่างเดียวไม่ได้ทำให้ผู้ให้บริการเป็นผู้ควบคุมข้อมูล"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The Data Subjects are the individuals whose shipping and payment information is processed, rather than the hosting provider.",
          "text_th": "Data Subject คือบุคคลที่ข้อมูลการจัดส่งและการชำระเงินของตนถูกประมวลผล ไม่ใช่ผู้ให้บริการโฮสต์"
        },
        {
          "letter": "B",
          "text_en": "A Data Controller determines the purposes and means of processing. Here the retailer directs the processing, while the provider acts on its instructions.",
          "text_th": "Data Controller เป็นผู้กำหนดวัตถุประสงค์และวิธีการประมวลผล ในโจทย์บริษัทค้าปลีกเป็นผู้กำหนดการประมวลผล ส่วนผู้ให้บริการปฏิบัติตามคำสั่ง"
        },
        {
          "letter": "D",
          "text_en": "A Data Protection Authority supervises compliance with data-protection law. The provider is supplying a processing service, not acting as that regulator.",
          "text_th": "Data Protection Authority เป็นหน่วยงานกำกับการปฏิบัติตามกฎหมายคุ้มครองข้อมูล ผู้ให้บริการในโจทย์ให้บริการประมวลผล ไม่ได้ทำหน้าที่เป็นหน่วยงานกำกับดังกล่าว"
        }
      ]
    }
  },
  {
    "id": 590,
    "dom": 1,
    "question": "An information security officer is conducting an internal data mapping exercise. The officer needs to determine what categories of sensitive information exist across enterprise file shares, where the data is physically and logically stored, and which business units own each dataset. Which data governance component directly fulfills this need?",
    "options": [
      "Data retention policy",
      "Data inventory",
      "Data sanitization schedule",
      "Data masking standard"
    ],
    "correct_idx": 1,
    "explanation": "A data inventory records the categories of information held, their storage locations and their responsible owners. Those are the facts needed for the stated data-mapping exercise.\nA: A retention policy defines how long records are kept and when disposal is appropriate; it does not itself catalog the data, locations and owners.\nC: A sanitization schedule sets when data or media is to be sanitized. It does not provide the requested catalog of existing datasets and their owners.\nD: A masking standard specifies how sensitive fields are obscured for an authorized use. It does not identify every dataset, storage location and owner.",
    "short_explanation_en": "A data inventory catalogs information assets, their storage locations, sensitivity levels, and assigned owners.",
    "question_th": "เจ้าหน้าที่ความมั่นคงปลอดภัยสารสนเทศกำลังจัดทำแผนผังข้อมูลภายในองค์กร โดยจำเป็นต้องระบุว่ามีข้อมูลสำคัญประเภทใดบ้างในระบบแชร์ไฟล์ ข้อมูลนั้นถูกจัดเก็บไว้ที่ใดทั้งทางกายภาพและเชิงตรรกะ และหน่วยงานใดเป็นเจ้าของข้อมูลแต่ละชุด ส่วนประกอบใดของการกำกับดูแลข้อมูลที่ตอบสนองความต้องการนี้โดยตรง?",
    "options_th": [
      "นโยบายการเก็บรักษาข้อมูล (Data retention policy)",
      "การจัดทำบัญชีรายการข้อมูล (Data inventory)",
      "ตารางการทำลายข้อมูลอย่างปลอดภัย (Data sanitization schedule)",
      "มาตรฐานการพรางข้อมูล (Data masking standard)"
    ],
    "explanation_th": "Data inventory บันทึกประเภทข้อมูลที่องค์กรมี สถานที่จัดเก็บ และเจ้าของหรือผู้รับผิดชอบข้อมูล ซึ่งตรงกับข้อมูลที่ต้องใช้ในการจัดทำแผนผังข้อมูลตามโจทย์\nA: นโยบายการเก็บรักษาข้อมูลกำหนดว่าต้องเก็บข้อมูลนานเท่าใดและควรทำลายเมื่อใด ไม่ได้ทำหน้าที่จัดทำบัญชีประเภทข้อมูล สถานที่จัดเก็บ และเจ้าของข้อมูลโดยตรง\nC: ตารางการทำลายข้อมูลอย่างปลอดภัยกำหนดเวลาที่ต้องล้างข้อมูลหรือจัดการสื่อบันทึก ไม่ได้ให้บัญชีชุดข้อมูลที่มีอยู่และเจ้าของข้อมูลตามที่ต้องการ\nD: มาตรฐานการพรางข้อมูลกำหนดวิธีปิดบังข้อมูลอ่อนไหวเพื่อการใช้งานที่ได้รับอนุญาต ไม่ได้ระบุชุดข้อมูลทั้งหมด สถานที่จัดเก็บ และเจ้าของข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "A data inventory records the categories of information held, their storage locations and their responsible owners. Those are the facts needed for the stated data-mapping exercise.",
        "th": "Data inventory บันทึกประเภทข้อมูลที่องค์กรมี สถานที่จัดเก็บ และเจ้าของหรือผู้รับผิดชอบข้อมูล ซึ่งตรงกับข้อมูลที่ต้องใช้ในการจัดทำแผนผังข้อมูลตามโจทย์"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A retention policy defines how long records are kept and when disposal is appropriate; it does not itself catalog the data, locations and owners.",
          "text_th": "นโยบายการเก็บรักษาข้อมูลกำหนดว่าต้องเก็บข้อมูลนานเท่าใดและควรทำลายเมื่อใด ไม่ได้ทำหน้าที่จัดทำบัญชีประเภทข้อมูล สถานที่จัดเก็บ และเจ้าของข้อมูลโดยตรง"
        },
        {
          "letter": "C",
          "text_en": "A sanitization schedule sets when data or media is to be sanitized. It does not provide the requested catalog of existing datasets and their owners.",
          "text_th": "ตารางการทำลายข้อมูลอย่างปลอดภัยกำหนดเวลาที่ต้องล้างข้อมูลหรือจัดการสื่อบันทึก ไม่ได้ให้บัญชีชุดข้อมูลที่มีอยู่และเจ้าของข้อมูลตามที่ต้องการ"
        },
        {
          "letter": "D",
          "text_en": "A masking standard specifies how sensitive fields are obscured for an authorized use. It does not identify every dataset, storage location and owner.",
          "text_th": "มาตรฐานการพรางข้อมูลกำหนดวิธีปิดบังข้อมูลอ่อนไหวเพื่อการใช้งานที่ได้รับอนุญาต ไม่ได้ระบุชุดข้อมูลทั้งหมด สถานที่จัดเก็บ และเจ้าของข้อมูล"
        }
      ]
    }
  },
  {
    "id": 591,
    "dom": 1,
    "question": "During a threat modeling session, an analyst reviews the following scenario: 'An internet-facing web server contains an unpatched software flaw that allows arbitrary code execution. Malicious threat actors are actively scanning the subnet, which could lead to unauthorized access to the customer database.' In this relational risk analysis, what does the unpatched code execution flaw represent?",
    "options": [
      "Asset",
      "Threat",
      "Vulnerability",
      "Impact"
    ],
    "correct_idx": 2,
    "explanation": "A vulnerability is a flaw, weakness, or gap in security procedures, design, implementation, or internal controls that can be exploited by a threat. An unpatched software flaw is the classic definition of a vulnerability. The asset is the web server or customer database. The threat is the potential occurrence of an unauthorized compromise or the malicious actors conducting scans. The impact is the resulting damage, such as unauthorized disclosure of confidential customer records.",
    "short_explanation_en": "A vulnerability is an exploitable flaw or weakness in a system or control.",
    "question_th": "ในระหว่างการประชุมประเมินภัยคุกคาม นักวิเคราะห์ได้ทบทวนสถานการณ์ต่อไปนี้: 'เว็บเซิร์ฟเวอร์ที่เชื่อมต่อกับอินเทอร์เน็ตมีข้อบกพร่องในซอฟต์แวร์ที่ยังไม่ได้รับการแพตช์ซึ่งเปิดทางให้รันโค้ดแปลกปลอมได้ แฮกเกอร์กำลังสแกนซับเน็ตนี้อย่างต่อเนื่อง ซึ่งอาจนำไปสู่การเข้าถึงฐานข้อมูลลูกค้าโดยไม่ได้รับอนุญาต' ในการวิเคราะห์ความเสี่ยงนี้ ข้อบกพร่องของซอฟต์แวร์ที่ยังไม่ได้รับการแพตช์จัดเป็นอะไร?",
    "options_th": [
      "ทรัพย์สิน (Asset)",
      "ภัยคุกคาม (Threat)",
      "ช่องโหว่ (Vulnerability)",
      "ผลกระทบ (Impact)"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: ช่องโหว่ (Vulnerability) คือจุดอ่อน ข้อบกพร่อง หรือความผิดพลาดในระบบ โปรแกรม หรือกระบวนการ ซึ่งสามารถถูกเจาะหรือใช้ประโยชน์โดยภัยคุกคามได้ ข้อบกพร่องในซอฟต์แวร์ที่ยังไม่ได้แพตช์จึงเป็นตัวอย่างที่ชัดเจนของช่องโหว่\n- ข้อ A ไม่ถูกต้อง: ทรัพย์สิน (Asset) คือเว็บเซิร์ฟเวอร์หรือฐานข้อมูลลูกค้าที่มีมูลค่าต่อองค์กร\n- ข้อ B ไม่ถูกต้อง: ภัยคุกคาม (Threat) คือเหตุการณ์หรือตัวกระทำที่อาจก่อให้เกิดความเสียหาย เช่น แฮกเกอร์หรือการโจมตีทางไซเบอร์\n- ข้อ D ไม่ถูกต้อง: ผลกระทบ (Impact) คือความเสียหายหรือความสูญเสียที่เกิดขึ้นหากการโจมตีสำเร็จ เช่น ข้อมูลลูกค้าถูกขโมย",
    "explanation_detail": {
      "correct": {
        "en": "The unpatched code-execution flaw is a Vulnerability: a weakness that a threat could exploit. The question asks about the flaw itself, not the asset containing it or the resulting harm.",
        "th": "ข้อบกพร่องที่ยังไม่ได้แพตช์และเปิดทางให้รันโค้ดได้เป็นช่องโหว่ (Vulnerability) คือจุดอ่อนที่ภัยคุกคามอาจใช้ประโยชน์ได้ โจทย์ถามถึงข้อบกพร่อง ไม่ใช่ทรัพย์สินที่มีข้อบกพร่องหรือความเสียหายที่ตามมา"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The web server and customer database are assets of value. The software flaw is a weakness in an asset, not the asset itself.",
          "text_th": "เว็บเซิร์ฟเวอร์และฐานข้อมูลลูกค้าเป็นทรัพย์สินที่มีคุณค่า ส่วนข้อบกพร่องของซอฟต์แวร์เป็นจุดอ่อนในทรัพย์สิน ไม่ใช่ตัวทรัพย์สินเอง"
        },
        {
          "letter": "B",
          "text_en": "The malicious actors and the potential attack are sources or events of threat. The exploitable software flaw is the vulnerability they could use.",
          "text_th": "ผู้ไม่หวังดีและการโจมตีที่อาจเกิดขึ้นเป็นแหล่งหรือเหตุการณ์ของภัยคุกคาม ส่วนข้อบกพร่องของซอฟต์แวร์ที่ใช้โจมตีได้เป็นช่องโหว่"
        },
        {
          "letter": "D",
          "text_en": "Impact is the harm resulting from an incident, such as disclosure or alteration of customer records. The flaw is a condition that can enable that harm.",
          "text_th": "Impact คือความเสียหายที่เกิดจากเหตุการณ์ เช่น ข้อมูลลูกค้าถูกเปิดเผยหรือแก้ไข ส่วนข้อบกพร่องเป็นสภาวะที่อาจเปิดทางให้เกิดความเสียหายนั้น"
        }
      ]
    }
  },
  {
    "id": 592,
    "dom": 1,
    "question": "A security manager leads a risk assessment workshop with cross-functional department heads. Because the organization has limited actuarial loss data, the team evaluates identified risks by assigning descriptive rankings of 'High', 'Medium', or 'Low' based on operational experience and collective consensus. Which risk assessment methodology is the manager using?",
    "options": [
      "Quantitative risk analysis",
      "Qualitative risk analysis",
      "Residual risk calculation",
      "Total cost of ownership analysis"
    ],
    "correct_idx": 1,
    "explanation": "The descriptive High/Medium/Low ratings and expert judgment make this qualitative risk analysis. Quantitative analysis uses numerical values with meaningful units and relationships; financial loss estimates are one example, not its only form.\nA: Quantitative analysis uses numerical estimates whose meaning and scale support comparison, such as loss amounts or occurrence frequencies. The supplied descriptive categories do not provide such measurements.\nC: Residual risk is the risk remaining after safeguards, not an analysis methodology.\nD: Total cost of ownership assesses acquisition and operating costs, not risk probability or impact.",
    "short_explanation_en": "Qualitative analysis uses descriptive categories and expert judgment; quantitative analysis requires meaningful numerical estimates.",
    "question_th": "ผู้จัดการฝ่ายความมั่นคงปลอดภัยจัดเวิร์กช็อปประเมินความเสี่ยงร่วมกับหัวหน้าแผนกต่างๆ เนื่องจากองค์กรมีข้อมูลสถิติความสูญเสียทางการเงินในอดีตอย่างจำกัด ทีมงานจึงประเมินความเสี่ยงที่พบโดยใช้การจัดอันดับเชิงพรรณนา เช่น 'สูง', 'ปานกลาง' หรือ 'ต่ำ' ตามประสบการณ์และการระดมสมองร่วมกัน ผู้จัดการกำลังใช้วิธีการประเมินความเสี่ยงแบบใด?",
    "options_th": [
      "การวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative risk analysis)",
      "การวิเคราะห์ความเสี่ยงเชิงคุณภาพ (Qualitative risk analysis)",
      "การคำนวณความเสี่ยงที่เหลืออยู่ (Residual risk calculation)",
      "การวิเคราะห์ต้นทุนรวมในการเป็นเจ้าของ (Total cost of ownership analysis)"
    ],
    "explanation_th": "การให้ระดับเชิงพรรณนา High/Medium/Low โดยอาศัยดุลยพินิจของผู้เชี่ยวชาญเป็นการวิเคราะห์ความเสี่ยงเชิงคุณภาพ ส่วนการวิเคราะห์เชิงปริมาณใช้ค่าตัวเลขที่มีหน่วยและความสัมพันธ์ที่มีความหมาย การประมาณความสูญเสียทางการเงินเป็นเพียงตัวอย่างหนึ่ง ไม่ใช่รูปแบบเดียว\nA: การวิเคราะห์เชิงปริมาณใช้ค่าประมาณตัวเลขที่มีความหมายและมาตราส่วนสำหรับเปรียบเทียบ เช่น มูลค่าความสูญเสียหรือความถี่การเกิดเหตุ ระดับเชิงพรรณนาในโจทย์ไม่ได้ให้ค่าการวัดลักษณะนั้น\nC: Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน\nD: Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง",
    "explanation_detail": {
      "correct": {
        "en": "The descriptive High/Medium/Low ratings and expert judgment make this qualitative risk analysis. Quantitative analysis uses numerical values with meaningful units and relationships; financial loss estimates are one example, not its only form.",
        "th": "การให้ระดับเชิงพรรณนา High/Medium/Low โดยอาศัยดุลยพินิจของผู้เชี่ยวชาญเป็นการวิเคราะห์ความเสี่ยงเชิงคุณภาพ ส่วนการวิเคราะห์เชิงปริมาณใช้ค่าตัวเลขที่มีหน่วยและความสัมพันธ์ที่มีความหมาย การประมาณความสูญเสียทางการเงินเป็นเพียงตัวอย่างหนึ่ง ไม่ใช่รูปแบบเดียว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Quantitative analysis uses numerical estimates whose meaning and scale support comparison, such as loss amounts or occurrence frequencies. The supplied descriptive categories do not provide such measurements.",
          "text_th": "การวิเคราะห์เชิงปริมาณใช้ค่าประมาณตัวเลขที่มีความหมายและมาตราส่วนสำหรับเปรียบเทียบ เช่น มูลค่าความสูญเสียหรือความถี่การเกิดเหตุ ระดับเชิงพรรณนาในโจทย์ไม่ได้ให้ค่าการวัดลักษณะนั้น"
        },
        {
          "letter": "C",
          "text_en": "Residual risk is the risk remaining after safeguards, not an analysis methodology.",
          "text_th": "Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังใช้มาตรการควบคุม ไม่ใช่ชื่อวิธีประเมิน"
        },
        {
          "letter": "D",
          "text_en": "Total cost of ownership assesses acquisition and operating costs, not risk probability or impact.",
          "text_th": "Total cost of ownership เป็นการคำนวณค่าใช้จ่ายในการจัดซื้อและดูแลรักษาระบบ ไม่ใช่การประเมินความเสี่ยง"
        }
      ]
    }
  },
  {
    "id": 593,
    "dom": 1,
    "question": "Six months ago, an enterprise formally accepted the risk of operating an unpatched internal document archive because it was completely isolated from the internet. Recently, the engineering department connected this archive to a public cloud storage service to enable remote collaboration. In accordance with the risk management lifecycle, how should the organization respond to this operational change?",
    "options": [
      "Maintain the existing risk acceptance record until the scheduled annual audit cycle concludes",
      "Reassess the risk immediately under the Monitor and Review process because the exposure context has changed",
      "Automatically transfer the risk to an insurance policy without conducting a technical review",
      "Terminate the remote collaboration project immediately because accepted risks can never be altered"
    ],
    "correct_idx": 1,
    "explanation": "Risk monitoring and review reassess accepted exposure when relevant conditions change. The new cloud connection changes dependencies and trust-boundary assumptions that supported the earlier acceptance. Assess the actual architecture and remaining exposure before deciding treatment; direct public-internet exposure or a quantified increase is not established by the stem. Risk acceptance is not an indefinite exemption. Insurance can share covered losses but does not itself assess changed technical exposure. Reassess the change before choosing treatment rather than assuming that accepted risk can never be revised.",
    "short_explanation_en": "Risk management is a continuous process requiring reassessment whenever operational or technological conditions change.",
    "question_th": "เมื่อ 6 เดือนก่อน องค์กรแห่งหนึ่งได้ยอมรับความเสี่ยง (Risk Acceptance) อย่างเป็นทางการในการใช้งานระบบจัดเก็บเอกสารภายในที่ยังไม่ได้ลงแพตช์ เนื่องจากระบบถูกตัดขาดจากอินเทอร์เน็ตโดยสิ้นเชิง แต่เมื่อเร็วๆ นี้ แผนกวิศวกรรมได้เชื่อมต่อระบบนี้เข้ากับคลาวด์เพื่อทำงานร่วมกันจากระยะไกล ตามวงจรการบริหารความเสี่ยง องค์กรควรตอบสนองต่อการเปลี่ยนแปลงนี้อย่างไร?",
    "options_th": [
      "คงสถานะการยอมรับความเสี่ยงเดิมไว้จนกว่าจะครบรอบการตรวจสอบประจำปี",
      "ทำการประเมินความเสี่ยงใหม่อีกครั้งทันทีในขั้นตอน Monitor and Review เนื่องจากบริบทความเสี่ยงเปลี่ยนไป",
      "โอนย้ายความเสี่ยงไปให้บริษัทประกันภัยโดยอัตโนมัติโดยไม่ต้องตรวจสอบทางเทคนิค",
      "สั่งยกเลิกโครงการทำงานร่วมกันผ่านคลาวด์ทันทีเพราะระบบที่เคยยอมรับความเสี่ยงไปแล้วห้ามเปลี่ยนแปลงใดๆ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การติดตามและทบทวนความเสี่ยงต้องประเมินความเสี่ยงที่ยอมรับไว้ใหม่เมื่อเงื่อนไขสำคัญเปลี่ยน การเชื่อม Cloud เพิ่มความพึ่งพาและเปลี่ยนสมมติฐานเรื่องขอบเขตความเชื่อถือที่ใช้ยอมรับเดิม ต้องประเมินสถาปัตยกรรมจริงและความเสี่ยงคงเหลือก่อนเลือกวิธีจัดการ โจทย์ไม่ได้ยืนยันการเปิดสู่อินเทอร์เน็ตโดยตรงหรือขนาดความเสี่ยงที่เพิ่มขึ้น\n- ข้อ A ไม่ถูกต้อง: การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที\n- ข้อ C ไม่ถูกต้อง: ประกันภัยแบ่งภาระความเสียหายทางการเงินตามความคุ้มครองได้ แต่การซื้อประกันไม่ได้ประเมินหรือกำจัดความเสี่ยงทางเทคนิคที่เปลี่ยนไปด้วยตัวเอง\n- ข้อ D ไม่ถูกต้อง: ความเสี่ยงที่ยอมรับไว้สามารถประเมินและปรับการตัดสินใจใหม่ได้ การเปลี่ยนแปลงนี้ต้องนำไปประเมิน ไม่ใช่หยุดงานถาวรโดยอ้างว่าความเสี่ยงที่ยอมรับแล้วเปลี่ยนไม่ได้",
    "explanation_detail": {
      "correct": {
        "en": "Risk monitoring and review reassess accepted exposure when relevant conditions change. The new cloud connection changes dependencies and trust-boundary assumptions that supported the earlier acceptance. Assess the actual architecture and remaining exposure before deciding treatment; direct public-internet exposure or a quantified increase is not established by the stem.",
        "th": "การติดตามและทบทวนความเสี่ยงต้องประเมินความเสี่ยงที่ยอมรับไว้ใหม่เมื่อเงื่อนไขสำคัญเปลี่ยน การเชื่อม Cloud เพิ่มความพึ่งพาและเปลี่ยนสมมติฐานเรื่องขอบเขตความเชื่อถือที่ใช้ยอมรับเดิม ต้องประเมินสถาปัตยกรรมจริงและความเสี่ยงคงเหลือก่อนเลือกวิธีจัดการ โจทย์ไม่ได้ยืนยันการเปิดสู่อินเทอร์เน็ตโดยตรงหรือขนาดความเสี่ยงที่เพิ่มขึ้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Risk acceptance is not an indefinite exemption; significant architectural changes require immediate re-evaluation.",
          "text_th": "การยอมรับความเสี่ยงไม่ใช่การละเลยจนกว่าจะครบรอบปี หากมีการเปลี่ยนแปลงสำคัญต้องทบทวนทันที"
        },
        {
          "letter": "C",
          "text_en": "Insurance can share covered financial losses, but purchasing it does not itself assess or remove the changed technical exposure.",
          "text_th": "ประกันภัยแบ่งภาระความเสียหายทางการเงินตามความคุ้มครองได้ แต่การซื้อประกันไม่ได้ประเมินหรือกำจัดความเสี่ยงทางเทคนิคที่เปลี่ยนไปด้วยตัวเอง"
        },
        {
          "letter": "D",
          "text_en": "Accepted risks can be reassessed and revised. The stated change calls for reassessment, not an automatic permanent halt based on a claim that accepted risks can never change.",
          "text_th": "ความเสี่ยงที่ยอมรับไว้สามารถประเมินและปรับการตัดสินใจใหม่ได้ การเปลี่ยนแปลงนี้ต้องนำไปประเมิน ไม่ใช่หยุดงานถาวรโดยอ้างว่าความเสี่ยงที่ยอมรับแล้วเปลี่ยนไม่ได้"
        }
      ]
    }
  },
  {
    "id": 594,
    "dom": 1,
    "question": "A logistics company evaluates the financial exposure associated with potential warehouse fire damage to its server infrastructure. The executive leadership decides to purchase a comprehensive commercial cyber and property insurance policy that covers recovery costs and business interruption losses resulting from a catastrophe. Which risk treatment strategy has the company executed?",
    "options": [
      "Risk Mitigation",
      "Risk Transfer",
      "Risk Avoidance",
      "Risk Acceptance"
    ],
    "correct_idx": 1,
    "explanation": "Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer. Risk mitigation implements safeguards to reduce likelihood or impact. Risk avoidance ceases the activity altogether. Risk acceptance is an informed, authorized decision to retain exposure. It can coexist with safeguards; it does not describe sharing covered financial losses with an insurer.",
    "short_explanation_en": "Risk transfer shifts financial loss exposure to a third party, such as an insurance underwriter.",
    "question_th": "บริษัทโลจิสติกส์แห่งหนึ่งประเมินผลกระทบทางการเงินที่อาจเกิดขึ้นจากเหตุเพลิงไหม้คลังสินค้าซึ่งมีเซิร์ฟเวอร์ติดตั้งอยู่ ผู้บริหารระดับสูงตัดสินใจซื้อกรมธรรม์ประกันภัยทรัพย์สินและไซเบอร์เพื่อชดเชยค่าใช้จ่ายในการกู้คืนระบบและความสูญเสียจากการหยุดชะงักทางธุรกิจหากเกิดภัยพิบัติ บริษัทได้ดำเนินกลยุทธ์จัดการความเสี่ยงแบบใด?",
    "options_th": [
      "การบรรเทาความเสี่ยง (Risk Mitigation)",
      "การโอนย้ายความเสี่ยง (Risk Transfer)",
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก\n- ข้อ A ไม่ถูกต้อง: Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ\n- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า\n- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการตัดสินใจรับความเสี่ยงไว้อย่างมีข้อมูลและมีอำนาจอนุมัติ ซึ่งใช้ร่วมกับมาตรการอื่นได้ ไม่ใช่การแบ่งภาระความเสียหายที่คุ้มครองให้บริษัทประกัน",
    "explanation_detail": {
      "correct": {
        "en": "Risk Transfer involves shifting or sharing financial loss exposure with a third party, most commonly through insurance policies, indemnification clauses, or outsourcing contracts. Purchasing an insurance policy to cover monetary losses from physical disaster is the primary example of risk transfer.",
        "th": "Risk Transfer (การโอนความเสี่ยง) คือการย้ายหรือแบ่งปันภาระความสูญเสียทางการเงินไปให้บุคคลที่สาม โดยวิธีการที่พบบ่อยที่สุดคือการทำประกันภัย (Insurance) หรือการทำสัญญาจ้างภายนอก"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Risk Mitigation implements safeguards (such as fire suppression) to reduce likelihood or impact.",
          "text_th": "Risk Mitigation คือการใช้มาตรการควบคุมเพื่อลดโอกาสหรือผลกระทบ เช่น ติดตั้งระบบดับเพลิงอัตโนมัติ"
        },
        {
          "letter": "C",
          "text_en": "Risk Avoidance eliminates exposure by discontinuing the activity (e.g., closing the datacenter).",
          "text_th": "Risk Avoidance คือการยกเลิกกิจกรรมนั้นไปเลย เช่น เลิกตั้งเซิร์ฟเวอร์ในคลังสินค้า"
        },
        {
          "letter": "D",
          "text_en": "Risk acceptance is an informed, authorized decision to retain exposure. It can coexist with safeguards; it does not describe sharing covered financial losses with an insurer.",
          "text_th": "Risk Acceptance คือการตัดสินใจรับความเสี่ยงไว้อย่างมีข้อมูลและมีอำนาจอนุมัติ ซึ่งใช้ร่วมกับมาตรการอื่นได้ ไม่ใช่การแบ่งภาระความเสียหายที่คุ้มครองให้บริษัทประกัน"
        }
      ]
    }
  },
  {
    "id": 595,
    "dom": 1,
    "question": "A healthcare provider explores implementing an experimental generative artificial intelligence platform to summarize patient consultation audio recordings. Following a security and compliance assessment, the compliance committee determines that the legal liability and privacy breach risks exceed organizational tolerance, and current vendor safeguards cannot sufficiently guarantee data protection. Consequently, the organization decides not to purchase or deploy the AI platform. Which risk treatment strategy was applied?",
    "options": [
      "Risk Avoidance",
      "Risk Mitigation",
      "Risk Transfer",
      "Risk Acceptance"
    ],
    "correct_idx": 0,
    "explanation": "Declining to deploy this platform avoids the exposure associated with using it. This is avoidance of the specified activity, not a claim that all healthcare or privacy risks disappear.\nB: Mitigation would use safeguards to reduce risk while continuing with the activity, rather than declining deployment.\nC: Risk transfer would involve shifting financial exposure via insurance or contracts.\nD: Acceptance would retain the identified risk through an informed decision by an authorized party. It does not mean ignoring possible impacts; the organization instead declines the activity here.",
    "short_explanation_en": "Risk avoidance eliminates exposure by deciding not to engage in or by discontinuing a risky activity.",
    "question_th": "ผู้ให้บริการทางการแพทย์แห่งหนึ่งกำลังพิจารณานำแพลตฟอร์มปัญญาประดิษฐ์ (AI) แบบ Generative มาใช้สรุปเสียงการให้คำปรึกษาแก่ผู้ป่วย หลังจากการประเมินด้านความปลอดภัยและการปฏิบัติตามกฎหมาย คณะกรรมการพบว่าความเสี่ยงด้านความรับผิดชอบทางกฎหมายและข้อมูลรั่วไหลสูงเกินกว่าระดับที่องค์กรยอมรับได้ และมาตรการควบคุมที่ผู้ขายมีอยู่ในปัจจุบันยังไม่รัดกุมเพียงพอ องค์กรจึงตัดสินใจไม่จัดซื้อและไม่ใช้งานแพลตฟอร์ม AI นี้ องค์กรใช้กลยุทธ์จัดการความเสี่ยงข้อใด?",
    "options_th": [
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การบรรเทาความเสี่ยง (Risk Mitigation)",
      "การโอนย้ายความเสี่ยง (Risk Transfer)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    "explanation_th": "การไม่นำแพลตฟอร์มนี้มาใช้เป็นการหลีกเลี่ยงความเสี่ยงที่เกิดจากการใช้งานแพลตฟอร์มนั้น เป็นการหลีกเลี่ยงกิจกรรมที่ระบุ ไม่ได้หมายความว่าความเสี่ยงด้านสุขภาพหรือความเป็นส่วนตัวทั้งหมดจะหายไป\nB: Mitigation ใช้มาตรการลดความเสี่ยงโดยยังดำเนินกิจกรรมต่อ ต่างจากการตัดสินใจไม่นำระบบมาใช้\nC: Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย\nD: Acceptance คือการคงรับความเสี่ยงที่ระบุไว้โดยผู้มีอำนาจตัดสินใจอย่างมีข้อมูล ไม่ใช่การเพิกเฉยต่อผลกระทบที่อาจเกิดขึ้น แต่ในโจทย์องค์กรเลือกไม่ดำเนินกิจกรรมนั้น",
    "explanation_detail": {
      "correct": {
        "en": "Declining to deploy this platform avoids the exposure associated with using it. This is avoidance of the specified activity, not a claim that all healthcare or privacy risks disappear.",
        "th": "การไม่นำแพลตฟอร์มนี้มาใช้เป็นการหลีกเลี่ยงความเสี่ยงที่เกิดจากการใช้งานแพลตฟอร์มนั้น เป็นการหลีกเลี่ยงกิจกรรมที่ระบุ ไม่ได้หมายความว่าความเสี่ยงด้านสุขภาพหรือความเป็นส่วนตัวทั้งหมดจะหายไป"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Mitigation would use safeguards to reduce risk while continuing with the activity, rather than declining deployment.",
          "text_th": "Mitigation ใช้มาตรการลดความเสี่ยงโดยยังดำเนินกิจกรรมต่อ ต่างจากการตัดสินใจไม่นำระบบมาใช้"
        },
        {
          "letter": "C",
          "text_en": "Risk transfer would involve shifting financial exposure via insurance or contracts.",
          "text_th": "Risk Transfer คือการผลักภาระความสูญเสียทางการเงินไปให้ผู้อื่น เช่น ทำประกันภัย"
        },
        {
          "letter": "D",
          "text_en": "Acceptance would retain the identified risk through an informed decision by an authorized party. It does not mean ignoring possible impacts; the organization instead declines the activity here.",
          "text_th": "Acceptance คือการคงรับความเสี่ยงที่ระบุไว้โดยผู้มีอำนาจตัดสินใจอย่างมีข้อมูล ไม่ใช่การเพิกเฉยต่อผลกระทบที่อาจเกิดขึ้น แต่ในโจทย์องค์กรเลือกไม่ดำเนินกิจกรรมนั้น"
        }
      ]
    }
  },
  {
    "id": 596,
    "dom": 1,
    "question": "A Chief Information Security Officer (CISO) is preparing a quarterly risk report for the Board of Directors. The primary objective of the presentation is to help executive leadership allocate capital and prioritize security investments across business units. Which reporting approach is MOST appropriate for this audience?",
    "options": [
      "Exporting raw, unaggregated firewall packet logs and intrusion detection alerts from the past 90 days",
      "Presenting high-level summaries of prioritized risks, potential business and financial impacts, and required remediation resources",
      "Providing a detailed technical inventory of software version numbers and vulnerability scanning script outputs",
      "Guaranteeing that all residual cyber risks will be reduced to zero if the requested budget is approved"
    ],
    "correct_idx": 1,
    "explanation": "Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization. Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points. Furthermore, promising 'zero risk' is unrealistic and fundamentally misrepresents the nature of risk management.",
    "short_explanation_en": "Executive risk reporting should focus on high-level business impact, prioritized risks, and resource requirements rather than low-level technical logs.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) กำลังเตรียมรายงานความเสี่ยงรายไตรมาสเพื่อนำเสนอต่อคณะกรรมการบริหาร (Board of Directors) โดยมีเป้าหมายหลักเพื่อช่วยให้ผู้บริหารจัดสรรงบประมาณและจัดลำดับความสำคัญของการลงทุนด้านความปลอดภัย แนวทางการรายงานในข้อใดเหมาะสมที่สุดสำหรับกลุ่มเป้าหมายนี้?",
    "options_th": [
      "การส่งออกข้อมูลบันทึกแพ็กเก็ตของไฟร์วอลล์ (Raw packet logs) และการแจ้งเตือนของระบบตรวจจับการบุกรุกทั้งหมดในรอบ 90 วันที่ผ่านมา",
      "การนำเสนอสรุปภาพรวมระดับสูงของความเสี่ยงที่จัดลำดับความสำคัญแล้ว ผลกระทบต่อธุรกิจและการเงิน และทรัพยากรที่จำเป็นต้องใช้ในการแก้ไข",
      "การแสดงรายการหมายเลขเวอร์ชันของซอฟต์แวร์ทั้งหมดในองค์กรและผลลัพธ์ของสคริปต์สแกนช่องโหว่อย่างละเอียด",
      "การให้คำมั่นสัญญากับบอร์ดว่าความเสี่ยงทางไซเบอร์ที่เหลืออยู่ทั้งหมดจะลดลงเหลือศูนย์อย่างแน่นอนหากได้รับการอนุมัติงบประมาณ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การรายงานความเสี่ยง (Risk Reporting) ต้องคำนึงถึงผู้รับสาร คณะกรรมการบริหารต้องการข้อมูลสรุปภาพรวมเชิงกลยุทธ์ (Executive summary) ที่ชี้ให้เห็นว่าความเสี่ยงใดสำคัญที่สุด ส่งผลกระทบต่อธุรกิจอย่างไร และต้องใช้งบประมาณหรือทรัพยากรเท่าใดในการจัดการ\n- ข้อ A ไม่ถูกต้อง: Raw logs มีรายละเอียดทางเทคนิคมากเกินไปและไม่ช่วยให้เกิดการตัดสินใจเชิงธุรกิจ\n- ข้อ C ไม่ถูกต้อง: รายการเวอร์ชันซอฟต์แวร์เป็นข้อมูลการปฏิบัติการ (Operational) ที่ไม่เหมาะกับระดับบอร์ดบริหาร\n- ข้อ D ไม่ถูกต้อง: การอ้างว่าความเสี่ยงจะลดเหลือศูนย์ (Zero risk) เป็นไปไม่ได้ในทางปฏิบัติและขัดกับหลักการบริหารความเสี่ยง",
    "explanation_detail": {
      "correct": {
        "en": "Effective risk communication matches the information needs and decision authority of the intended audience. Executive leadership and the Board of Directors require high-level, strategic risk reports that contextualize identified threats in terms of business impact, financial risk, operational objectives, and resource prioritization.",
        "th": "การสื่อสารความเสี่ยงที่มีประสิทธิภาพจะต้องปรับให้เข้ากับกลุ่มเป้าหมาย สำหรับผู้บริหารระดับสูงและคณะกรรมการบริษัท ต้องนำเสนอเป็นรายงานเชิงกลยุทธ์ระดับสูง (High-level strategic report) ที่เชื่อมโยงความเสี่ยงด้านไซเบอร์เข้ากับผลกระทบทางธุรกิจ การเงิน และการจัดสรรทรัพยากร"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Raw technical packet captures, alert logs, and software revision lists overwhelm non-technical executives and obscure critical decision points.",
          "text_th": "การส่งข้อมูลล็อกทางเทคนิคอย่างละเอียดจะทำให้ผู้บริหารสับสนและไม่เห็นภาพรวมเชิงธุรกิจ"
        },
        {
          "letter": "C",
          "text_en": "Software versions and scan-script output may support technical investigation, but this inventory alone does not explain prioritized business impacts or investment needs to the board.",
          "text_th": "หมายเลขเวอร์ชันและผลลัพธ์สคริปต์สแกนอาจใช้สนับสนุนการตรวจสอบทางเทคนิค แต่รายการเหล่านี้เพียงอย่างเดียวไม่ได้อธิบายผลกระทบทางธุรกิจที่จัดลำดับแล้วหรือความต้องการลงทุนต่อคณะกรรมการ"
        },
        {
          "letter": "D",
          "text_en": "Budget approval cannot guarantee that every residual cyber risk becomes zero. Reporting should communicate remaining risk and the expected benefits and limits of proposed controls.",
          "text_th": "การอนุมัติงบประมาณไม่สามารถรับประกันว่าความเสี่ยงทางไซเบอร์ที่เหลืออยู่ทุกอย่างจะเป็นศูนย์ รายงานควรสื่อสารความเสี่ยงที่เหลือและประโยชน์รวมถึงข้อจำกัดที่คาดหวังจากมาตรการที่เสนอ"
        }
      ]
    }
  },
  {
    "id": 597,
    "dom": 1,
    "question": "Which of the following BEST describes the core role and primary objective of cybersecurity governance within an enterprise?",
    "options": [
      "Providing strategic leadership, organizational oversight, and accountability to ensure security objectives support business goals and regulatory requirements",
      "Executing day-to-day administrative tasks, such as creating user accounts and inspecting endpoint antivirus definition updates",
      "Providing an absolute guarantee that the organization will never suffer a data breach or operational outage",
      "Configuring boundary network firewalls and writing automated intrusion detection rules"
    ],
    "correct_idx": 0,
    "explanation": "Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals. Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance. Governance cannot guarantee the complete absence of incidents.",
    "short_explanation_en": "Cybersecurity governance provides strategic oversight, direction, and accountability aligned with business objectives.",
    "question_th": "ข้อใดอธิบายบทบาทหลักและวัตถุประสงค์ที่แท้จริงของการกำกับดูแลความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Governance) ในองค์กรได้ดีที่สุด?",
    "options_th": [
      "การกำหนดทิศทางเชิงกลยุทธ์ การกำกับดูแล และความรับผิดชอบเพื่อให้แน่ใจว่างานความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจและกฎหมาย",
      "การปฏิบัติงานดูแลระบบประจำวัน เช่น การสร้างบัญชีผู้ใช้งานและการตรวจสอบการอัปเดตแอนติไวรัสของเครื่องลูกข่าย",
      "การให้การรับประกันแบบเบ็ดเสร็จเด็ดขาดว่าองค์กรจะไม่มีวันถูกเจาะระบบหรือเกิดเหตุการณ์ระบบล่มอย่างแน่นอน",
      "การกำหนดค่าคอนฟิกไฟร์วอลล์ที่ขอบเขตเครือข่ายและการเขียนกฎของระบบตรวจจับการบุกรุก"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การกำกับดูแล (Governance) คือโครงสร้างระดับกลยุทธ์ การกำหนดทิศทาง การกำกับดูแลความรับผิดชอบ (Accountability) และการตรวจสอบ เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ กฎหมาย และระดับความเสี่ยงขององค์กร\n- ข้อ B ไม่ถูกต้อง: การสร้าง user และอัปเดตโปรแกรมเป็นงานระดับปฏิบัติการ (Operational task) ไม่ใช่การกำกับดูแล\n- ข้อ C ไม่ถูกต้อง: Governance ไม่สามารถรับประกันได้ว่าจะไม่มีเหตุการณ์ถูกโจมตีเกิดขึ้น 100%\n- ข้อ D ไม่ถูกต้อง: การตั้งค่าไฟร์วอลล์เป็นงานเชิงเทคนิคและการปฏิบัติการ (Technical/Operational control)",
    "explanation_detail": {
      "correct": {
        "en": "Governance is the strategic framework of rules, relationships, and oversight that directs and controls how an organization manages risk, ensures accountability, complies with legal requirements, and aligns information security with overall business goals.",
        "th": "Governance (การกำกับดูแล) คือกรอบการทำงานเชิงกลยุทธ์ กฎเกณฑ์ และการกำกับดูแลจากฝ่ายบริหาร เพื่อให้มั่นใจว่าการบริหารจัดการความมั่นคงปลอดภัยสอดคล้องกับเป้าหมายทางธุรกิจ มีความรับผิดชอบ และปฏิบัติตามกฎหมาย"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Operational activities—such as configuring firewalls, managing user accounts, or updating antivirus definitions—are tactical and operational security administration, not governance.",
          "text_th": "การคอนฟิกไฟร์วอลล์และจัดการบัญชีผู้ใช้เป็นงานระดับปฏิบัติการ (Security Administration) ไม่ใช่ Governance"
        },
        {
          "letter": "C",
          "text_en": "Governance directs and oversees risk management; it cannot guarantee that a breach or outage will never occur.",
          "text_th": "Governance กำหนดทิศทางและกำกับการบริหารความเสี่ยง แต่ไม่สามารถรับประกันว่าจะไม่มีการละเมิดข้อมูลหรือระบบหยุดทำงานเลย"
        },
        {
          "letter": "D",
          "text_en": "Configuring firewalls and writing detection rules implement technical controls. These activities support governance decisions but are not the enterprise-level direction and oversight asked about.",
          "text_th": "การตั้งค่าไฟร์วอลล์และเขียนกฎตรวจจับเป็นการนำมาตรการทางเทคนิคไปใช้ งานเหล่านี้สนับสนุนการตัดสินใจด้าน Governance แต่ไม่ใช่การกำหนดทิศทางและกำกับดูแลระดับองค์กรที่โจทย์ถาม"
        }
      ]
    }
  },
  {
    "id": 598,
    "dom": 1,
    "question": "An organization's executive committee publishes an official document that states: 'All corporate information systems and sensitive customer records must be protected from unauthorized disclosure, and employee access must be restricted to legitimate business needs.' The document outlines management's high-level expectations and overarching goals, but contains no technical parameters or operational steps. What type of governance artifact is this document?",
    "options": [
      "Policy",
      "Standard",
      "Procedure",
      "Guideline"
    ],
    "correct_idx": 0,
    "explanation": "A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms. A standard establishes mandatory technical baselines and specific criteria. A procedure provides step-by-step instructions ('HOW' to accomplish a task). A guideline provides recommended best practices that are generally advisory and flexible.",
    "short_explanation_en": "A policy is a high-level, mandatory management directive outlining overarching security expectations and rules.",
    "question_th": "คณะกรรมการบริหารขององค์กรเผยแพร่เอกสารอย่างเป็นทางการซึ่งระบุว่า: 'ระบบสารสนเทศและข้อมูลลูกค้าสำคัญทั้งหมดขององค์กรจะต้องได้รับการปกป้องจากการเปิดเผยโดยไม่ได้รับอนุญาต และการเข้าถึงของพนักงานจะต้องถูกจำกัดเฉพาะเพื่อการปฏิบัติงานตามหน้าที่เท่านั้น' เอกสารนี้กำหนดความคาดหวังและเป้าหมายระดับสูงของผู้บริหาร แต่ไม่ได้ระบุค่าทางเทคนิคหรือขั้นตอนปฏิบัติ เอกสารนี้จัดเป็นเอกสารกำกับดูแลประเภทใด?",
    "options_th": [
      "นโยบาย (Policy)",
      "มาตรฐาน (Standard)",
      "ขั้นตอนปฏิบัติ (Procedure)",
      "แนวปฏิบัติ (Guideline)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: นโยบาย (Policy) คือเอกสารระดับผู้บริหารสูงสุดที่มีผลบังคับใช้ (Mandatory) กำหนดทิศทาง เป้าหมาย และกฎเกณฑ์ระดับสูงขององค์กร (WHAT ต้องทำอะไร) โดยไม่ลงลึกถึงขั้นตอนทางเทคนิคหรือวิธีการปฏิบัติ\n- ข้อ B ไม่ถูกต้อง: มาตรฐาน (Standard) กำหนดข้อกำหนดทางเทคนิคที่ต้องปฏิบัติตามอย่างเฉพาะเจาะจง เช่น กำหนดความยาวรหัสผ่าน\n- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) คือคู่มืออธิบายขั้นตอนการทำงานอย่างเป็นลำดับขั้น (HOW ทำอย่างไรแบบ step-by-step)\n- ข้อ D ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) คือคำแนะนำหรือข้อเสนอแนะที่ไม่มีการบังคับใช้โดยเด็ดขาด ยืดหยุ่นได้",
    "explanation_detail": {
      "correct": {
        "en": "A security policy is a high-level, mandatory management document that establishes organizational security posture, expectations, and goals ('WHAT' must be done). It is authored by leadership to define rules and direction without specifying technical mechanisms.",
        "th": "Security Policy (นโยบายความมั่นคงปลอดภัย) เป็นเอกสารระดับบริหารที่มีผลบังคับใช้ (Mandatory) ซึ่งระบุเป้าหมาย ทิศทาง และข้อกำหนดว่า 'ต้องทำอะไร' (WHAT) เพื่อกำหนดกรอบความปลอดภัยโดยไม่ลงลึกถึงวิธีปฏิบัติทางเทคนิค"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A standard establishes mandatory technical baselines and specific criteria.",
          "text_th": "Standard (มาตรฐาน) กำหนดเกณฑ์ทางเทคนิคที่ต้องปฏิบัติอย่างสม่ำเสมอ"
        },
        {
          "letter": "C",
          "text_en": "A procedure provides step-by-step instructions ('HOW' to accomplish a task).",
          "text_th": "Procedure (ระเบียบปฏิบัติ) ให้คำแนะนำทีละขั้นตอนว่าต้องทำอย่างไร (HOW)"
        },
        {
          "letter": "D",
          "text_en": "A guideline provides recommended best practices that are generally advisory and flexible.",
          "text_th": "Guideline (แนวทางปฏิบัติ) เป็นข้อแนะนำที่ไม่บังคับ เพื่อให้เกิดความยืดหยุ่น"
        }
      ],
      "exam_tip": {
        "en": "Policies define 'WHAT' must be done; Procedures define 'HOW' to do it; Standards specify mandatory technical baselines; Guidelines offer advisory best practices.",
        "th": "Policy บอกว่า 'ต้องทำอะไร' (WHAT), Procedure บอกว่า 'ทำอย่างไร' (HOW), Standard คือเกณฑ์มาตรฐานบังคับ, และ Guideline คือคำแนะนำที่ไม่บังคับ"
      }
    }
  },
  {
    "id": 599,
    "dom": 1,
    "question": "The IT security engineering team creates an internal document stating: 'All enterprise employee workstations must have screen savers configured to automatically lock after 10 minutes of inactivity, require an authenticated password to resume, and use AES-256 bit full-disk encryption.' This document defines mandatory technical specifications that must be implemented across all systems. Which type of governance document does this represent?",
    "options": [
      "Standard",
      "Guideline",
      "Procedure",
      "Policy"
    ],
    "correct_idx": 0,
    "explanation": "A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard. Policies outline high-level management intent. Procedures provide chronological step-by-step instructions. Guidelines offer non-mandatory recommendations.",
    "short_explanation_en": "A standard establishes mandatory, specific technical baselines and requirements to implement policy directives.",
    "question_th": "ทีมวิศวกรรมความมั่นคงปลอดภัยสารสนเทศจัดทำเอกสารภายในระบุว่า: 'เครื่องคอมพิวเตอร์พนักงานทั้งหมดต้องตั้งค่า Screen Saver ให้ล็อกหน้าจอโดยอัตโนมัติเมื่อไม่มีการใช้งานเกิน 10 นาที ต้องใส่รหัสผ่านเพื่อปลดล็อก และต้องเปิดใช้งานการเข้ารหัสข้อมูลทั้งดิสก์ด้วยมาตรฐาน AES-256' เอกสารนี้กำหนดข้อกำหนดทางเทคนิคภาคบังคับที่ต้องนำไปปฏิบัติในทุกระบบ จัดเป็นเอกสารประเภทใด?",
    "options_th": [
      "มาตรฐาน (Standard)",
      "แนวปฏิบัติ (Guideline)",
      "ขั้นตอนปฏิบัติ (Procedure)",
      "นโยบาย (Policy)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: มาตรฐาน (Standard) เป็นเอกสารภาคบังคับ (Mandatory) ที่กำหนดสเปกหรือข้อกำหนดทางเทคนิคอย่างเฉพาะเจาะจง (เช่น กำหนดระยะเวลา 10 นาที หรืออัลกอริทึม AES-256) เพื่อให้ระบบต่างๆ มีความมั่นคงปลอดภัยตามเกณฑ์มาตรฐานเดียวกัน\n- ข้อ B ไม่ถูกต้อง: แนวปฏิบัติ (Guideline) เป็นเพียงคำแนะนำที่ยืดหยุ่นได้ ไม่ใช่ข้อกำหนดบังคับ\n- ข้อ C ไม่ถูกต้อง: ขั้นตอนปฏิบัติ (Procedure) บอกลำดับขั้นตอนการปฏิบัติงาน\n- ข้อ D ไม่ถูกต้อง: นโยบาย (Policy) กำหนดทิศทางระดับสูง เช่น 'ต้องมีการปกป้องหน้าจอคอมพิวเตอร์' แต่จะไม่ระบุตัวเลขเวลาหรือเทคโนโลยีเฉพาะเจาะจง",
    "explanation_detail": {
      "correct": {
        "en": "A standard is a mandatory governance document that specifies uniform technical requirements, configurations, hardware/software baselines, and rules used to achieve policy compliance. The specific 10-minute screen lock and AES-256 encryption criteria are explicit technical specifications, making this a standard.",
        "th": "Standard (มาตรฐาน) คือเอกสารข้อกำหนดที่มีผลบังคับใช้เพื่อระบุเกณฑ์ทางเทคนิคขั้นต่ำ (Baseline) ที่แน่นอน เช่น การกำหนดเวลาล็อกหน้าจอ 10 นาที หรือระดับการเข้ารหัส AES-256 เพื่อให้สอดคล้องกับนโยบาย"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A guideline gives recommended practice rather than the mandatory technical requirements explicitly specified in this document.",
          "text_th": "Guideline เป็นคำแนะนำในการปฏิบัติ ไม่ใช่ข้อกำหนดทางเทคนิคภาคบังคับที่ระบุอย่างชัดเจนในเอกสารนี้"
        },
        {
          "letter": "C",
          "text_en": "Procedures provide chronological step-by-step instructions for performing tasks.",
          "text_th": "Procedure ระบุลำดับขั้นตอนปฏิบัติงาน ไม่ใช่เกณฑ์ข้อกำหนดทางเทคนิคภาคบังคับที่เอกสารนี้กำหนด"
        },
        {
          "letter": "D",
          "text_en": "A policy states management direction and expectations. The mandatory lock interval and encryption specification are the detailed standard implementing that direction.",
          "text_th": "Policy ระบุทิศทางและความคาดหวังของผู้บริหาร ส่วนระยะเวลาล็อกหน้าจอและข้อกำหนดการเข้ารหัสภาคบังคับเป็นรายละเอียดของ Standard ที่ใช้ดำเนินการตามทิศทางนั้น"
        }
      ]
    }
  },
  {
    "id": 600,
    "dom": 1,
    "question": "A Chief Information Officer (CIO) wants to establish a comprehensive cybersecurity program for an expanding organization. The security team needs a structured, organized approach to assess cybersecurity capabilities, identify program gaps, guide security investment, and systematically improve security maturity over time. Which governance instrument is MOST suitable for this purpose?",
    "options": [
      "Cybersecurity Framework",
      "Standard Operating Procedure",
      "Acceptable Use Policy",
      "Baseline Security Guideline"
    ],
    "correct_idx": 0,
    "explanation": "A cybersecurity framework such as NIST CSF provides a structure for assessing, prioritizing and communicating cybersecurity outcomes across a program. ISO/IEC 27001 is a related ISMS requirements standard, rather than another name for the CSF.\nB: An SOP gives repeatable operational steps for a specified activity, rather than the structure for an enterprise-wide cybersecurity program.\nC: Acceptable use policies govern end-user computer usage rules, not overall program structure.\nD: Baseline guidelines provide non-mandatory technical advice rather than program architecture.",
    "short_explanation_en": "A cybersecurity framework provides a structured, comprehensive approach to organize, assess, and mature an entire security program.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายสารสนเทศ (CIO) ต้องการจัดตั้งโครงการความมั่นคงปลอดภัยไซเบอร์แบบครอบคลุมสำหรับองค์กรที่กำลังเติบโต ทีมงานต้องการแนวทางที่มีโครงสร้างชัดเจนในการประเมินขีดความสามารถ ชี้หาจุดบกพร่องของระบบ กำกับการลงทุน และพัฒนาวุฒิภาวะ (Maturity) ด้านความปลอดภัยอย่างเป็นระบบ เครื่องมือในการกำกับดูแลข้อใดเหมาะสมที่สุดสำหรับเป้าหมายนี้?",
    "options_th": [
      "กรอบการดำเนินงานด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity Framework)",
      "ระเบียบปฏิบัติประจำ (Standard Operating Procedure)",
      "นโยบายการใช้งานเทคโนโลยีที่ยอมรับได้ (Acceptable Use Policy)",
      "แนวปฏิบัติความปลอดภัยขั้นพื้นฐาน (Baseline Security Guideline)"
    ],
    "explanation_th": "กรอบการทำงานด้านความมั่นคงปลอดภัย เช่น NIST CSF ช่วยจัดโครงสร้างการประเมิน จัดลำดับความสำคัญ และสื่อสารผลลัพธ์ด้านความมั่นคงปลอดภัยของโปรแกรม ส่วน ISO/IEC 27001 เป็นมาตรฐานข้อกำหนด ISMS ที่เกี่ยวข้อง ไม่ใช่อีกชื่อหนึ่งของ CSF\nB: ระเบียบปฏิบัติประจำกำหนดขั้นตอนการปฏิบัติงานที่ทำซ้ำได้สำหรับกิจกรรมเฉพาะ ไม่ใช่โครงสร้างของโปรแกรมความมั่นคงปลอดภัยทั้งองค์กร\nC: Acceptable use policy เป็นนโยบายการใช้งานอุปกรณ์ของผู้ใช้ ไม่ใช่กรอบโครงสร้างองค์กร\nD: Baseline guidelines เป็นเพียงคำแนะนำเบื้องต้น ไม่ครอบคลุมการบริหารจัดการระดับองค์กร",
    "explanation_detail": {
      "correct": {
        "en": "A cybersecurity framework such as NIST CSF provides a structure for assessing, prioritizing and communicating cybersecurity outcomes across a program. ISO/IEC 27001 is a related ISMS requirements standard, rather than another name for the CSF.",
        "th": "กรอบการทำงานด้านความมั่นคงปลอดภัย เช่น NIST CSF ช่วยจัดโครงสร้างการประเมิน จัดลำดับความสำคัญ และสื่อสารผลลัพธ์ด้านความมั่นคงปลอดภัยของโปรแกรม ส่วน ISO/IEC 27001 เป็นมาตรฐานข้อกำหนด ISMS ที่เกี่ยวข้อง ไม่ใช่อีกชื่อหนึ่งของ CSF"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "An SOP gives repeatable operational steps for a specified activity, rather than the structure for an enterprise-wide cybersecurity program.",
          "text_th": "ระเบียบปฏิบัติประจำกำหนดขั้นตอนการปฏิบัติงานที่ทำซ้ำได้สำหรับกิจกรรมเฉพาะ ไม่ใช่โครงสร้างของโปรแกรมความมั่นคงปลอดภัยทั้งองค์กร"
        },
        {
          "letter": "C",
          "text_en": "Acceptable use policies govern end-user computer usage rules, not overall program structure.",
          "text_th": "Acceptable use policy เป็นนโยบายการใช้งานอุปกรณ์ของผู้ใช้ ไม่ใช่กรอบโครงสร้างองค์กร"
        },
        {
          "letter": "D",
          "text_en": "Baseline guidelines provide non-mandatory technical advice rather than program architecture.",
          "text_th": "Baseline guidelines เป็นเพียงคำแนะนำเบื้องต้น ไม่ครอบคลุมการบริหารจัดการระดับองค์กร"
        }
      ]
    }
  },
  {
    "id": 601,
    "dom": 1,
    "question": "An organization protects its data center using three distinct measures: (1) network firewalls that inspect incoming packets, (2) mandatory background checks and security awareness training for newly hired staff, and (3) perimeter fences equipped with biometric turnstiles at facility gates. In terms of implementation categories, how are these three controls properly classified?",
    "options": [
      "(1) Technical, (2) Managerial/Administrative, (3) Physical",
      "(1) Operational, (2) Technical, (3) Physical",
      "(1) Physical, (2) Operational, (3) Managerial/Administrative",
      "(1) Technical, (2) Physical, (3) Operational"
    ],
    "correct_idx": 0,
    "explanation": "Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.",
    "short_explanation_en": "Security controls are categorized by implementation domain into Technical (hardware/software), Managerial/Administrative (management/personnel), and Physical (facility/tangible barriers).",
    "question_th": "องค์กรแห่งหนึ่งปกป้องศูนย์ข้อมูลด้วย 3 มาตรการ ได้แก่: (1) ไฟร์วอลล์เครือข่ายที่ตรวจสอบข้อมูลแพ็กเก็ตที่ผ่านเข้าออก, (2) การตรวจสอบประวัติและการฝึกอบรมความตระหนักรู้ด้านความปลอดภัยภาคบังคับสำหรับพนักงานใหม่, และ (3) รั้วล้อมรอบอาคารพร้อมประตูกั้นแบบสแกนลายนิ้วมือที่ทางเข้า ในแง่ของประเภทการนำไปใช้ (Control categories) มาตรการทั้งสามนี้จัดอยู่ในประเภทใดตามลำดับ?",
    "options_th": [
      "(1) ทางเทคนิค (Technical), (2) ทางการจัดการ/บริหาร (Managerial/Administrative), (3) ทางกายภาพ (Physical)",
      "(1) ทางการปฏิบัติการ (Operational), (2) ทางเทคนิค (Technical), (3) ทางกายภาพ (Physical)",
      "(1) ทางกายภาพ (Physical), (2) ทางการปฏิบัติการ (Operational), (3) ทางการจัดการ/บริหาร (Managerial/Administrative)",
      "(1) ทางเทคนิค (Technical), (2) ทางกายภาพ (Physical), (3) ทางการปฏิบัติการ (Operational)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่:\n(1) Technical: กลไกฮาร์ดแวร์หรือซอฟต์แวร์ เช่น ไฟร์วอลล์\n(2) Managerial/Administrative: การจัดการ นโยบาย การตรวจประวัติ และการฝึกอบรมบุคลากร\n(3) Physical: มาตรการทางกายภาพ สิ่งกีดขวาง และรั้วอาคาร\n- ตัวเลือกอื่นๆ สลับหมวดหมู่และจำแนกไม่ถูกต้องตามนิยาม",
    "explanation_detail": {
      "correct": {
        "en": "Cybersecurity controls are categorized by their implementation domain: Technical controls use hardware or software mechanisms (e.g., firewalls, access control lists, encryption). Managerial (or Administrative) controls focus on policies, procedures, background checks, risk assessments, and personnel training directed by management. Physical controls use real-world tangible barriers and facility defenses (e.g., fences, turnstiles, locks, lighting). Thus, firewalls are Technical, employee training and background checks are Managerial/Administrative, and fences/turnstiles are Physical.",
        "th": "หมวดหมู่ของการควบคุมความมั่นคงปลอดภัยแบ่งตามลักษณะการนำไปใช้งาน ได้แก่: Technical (เทคนิค: กลไกฮาร์ดแวร์/ซอฟต์แวร์ เช่น ไฟร์วอลล์), Managerial/Administrative (การจัดการ: นโยบาย ตรวจประวัติ และการอบรม), และ Physical (กายภาพ: สิ่งกีดขวาง รั้ว ประตูล็อก)"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Under the technical/administrative/physical classification used here, the packet-inspecting firewall is technical, and background checks/training are administrative personnel measures. B instead calls them operational and technical.",
          "text_th": "ภายใต้การแบ่งเป็น Technical/Administrative/Physical ที่ใช้ในข้อนี้ ไฟร์วอลล์ตรวจแพ็กเก็ตเป็นมาตรการทางเทคนิค ส่วนการตรวจประวัติและอบรมเป็นมาตรการด้านบุคลากรทางการบริหาร ข้อ B กลับจัดเป็น Operational และ Technical ตามลำดับ"
        },
        {
          "letter": "C",
          "text_en": "C calls the firewall physical and the facility barriers managerial/administrative. The firewall’s packet inspection is technical, while the fences and turnstiles control physical entry.",
          "text_th": "ข้อ C จัดไฟร์วอลล์เป็น Physical และสิ่งกีดขวางอาคารเป็น Managerial/Administrative แต่การตรวจแพ็กเก็ตเป็นกลไกทางเทคนิค ส่วนรั้วและประตูกั้นควบคุมการเข้าถึงทางกายภาพ"
        },
        {
          "letter": "D",
          "text_en": "D correctly identifies the firewall as technical, but calls background checks/training physical and facility barriers operational. Those measures are administrative and physical respectively in the classification used here.",
          "text_th": "ข้อ D จัดไฟร์วอลล์เป็น Technical ถูกต้อง แต่จัดการตรวจประวัติและอบรมเป็น Physical และสิ่งกีดขวางอาคารเป็น Operational ซึ่งในกรอบการแบ่งประเภทที่ใช้ในข้อนี้ควรเป็น Administrative และ Physical ตามลำดับ"
        }
      ]
    }
  },
  {
    "id": 602,
    "dom": 1,
    "question": "A high-security corporate research facility mounts brightly colored, illuminated warning signs along its external perimeter boundary reading: 'WARNING: Restricted Property. 24-Hour Armed Patrols and Continuous Closed-Circuit Video Surveillance in Progress.' In terms of functional control types, what is the PRIMARY purpose of these warning signs?",
    "options": [
      "Deterrent control",
      "Preventive control",
      "Detective control",
      "Corrective control"
    ],
    "correct_idx": 0,
    "explanation": "A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents. In contrast, a preventive control physically or technically stops an action (such as a locked gate). A detective control identifies and records an incident when it happens (such as the video camera recording the footage). A corrective control restores or repairs damage after an event occurs.",
    "short_explanation_en": "A deterrent control aims to discourage individuals from attempting unauthorized actions by increasing perceived risk and consequences.",
    "question_th": "ศูนย์วิจัยความปลอดภัยสูงแห่งหนึ่งติดตั้งป้ายเตือนไฟส่องสว่างสีสันสะดุดตาตามแนวรั้วภายนอกอาคาร ระบุว่า: 'คำเตือน: เขตหวงห้าม มีเจ้าหน้าที่รักษาความปลอดภัยติดอาวุธลาดตระเวนตลอด 24 ชั่วโมงและบันทึกภาพด้วยกล้องวงจรปิดตลอดเวลา' ในแง่ของฟังก์ชันการทำงาน (Functional control types) วัตถุประสงค์หลักของป้ายเตือนนี้คือข้อใด?",
    "options_th": [
      "การควบคุมเชิงยับยั้ง (Deterrent control)",
      "การควบคุมเชิงป้องกัน (Preventive control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงแก้ไข (Corrective control)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การควบคุมเชิงยับยั้ง (Deterrent control) มีหน้าที่หลักในการขัดขวางหรือทำให้ผู้ประสงค์ร้ายเกิดความกลัวและเปลี่ยนใจไม่ก่อเหตุ ป้ายเตือนที่มองเห็นได้ชัดเจนเป็นตัวอย่างคลาสสิกของการควบคุมเชิงยับยั้ง\n- ข้อ B ไม่ถูกต้อง: Preventive control ต้องสามารถหยุดยั้งทางกายภาพหรือเทคนิคได้จริง เช่น ประตูล็อกหรือกำแพง (ป้ายเตือนหยุดคนเดินผ่านไม่ได้จริง)\n- ข้อ C ไม่ถูกต้อง: Detective control คือสิ่งที่ตรวจจับและแจ้งเตือน เช่น ตัวกล้องวงจรปิดหรือเซ็นเซอร์ตรวจจับความเคลื่อนไหว\n- ข้อ D ไม่ถูกต้อง: Corrective control ใช้แก้ไขฟื้นฟูหลังเกิดเหตุ เช่น การกู้คืนข้อมูลจากสำเนาสำรอง",
    "explanation_detail": {
      "correct": {
        "en": "A Deterrent control aims to discourage would-be attackers or trespassers from attempting unauthorized actions by making them aware of the risks, consequences, and likelihood of detection. Warning signs and visible notices function primarily as deterrents.",
        "th": "Deterrent Control (การควบคุมเชิงป้องปราม) มีเป้าหมายเพื่อยับยั้ง ข่มขวัญ หรือทำให้ผู้ไม่หวังดีเปลี่ยนใจล้มเลิกการกระทำความผิด โดยการแจ้งเตือนให้ทราบถึงความเสี่ยงและบทลงโทษ เช่น ป้ายเตือนทรัพย์สินส่วนบุคคล"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A preventive control physically or technically stops an action before it can occur (such as a locked security gate).",
          "text_th": "Preventive control ทำหน้าที่สกัดกั้นหรือหยุดยั้งการกระทำผิดทางกายภาพ เช่น ประตูล็อก"
        },
        {
          "letter": "C",
          "text_en": "A detective control identifies and records an incident when it happens (such as the video camera recording footage).",
          "text_th": "Detective control ทำหน้าที่ตรวจจับและบันทึกเหตุการณ์ เช่น กล้องวงจรปิด"
        },
        {
          "letter": "D",
          "text_en": "A corrective control restores or repairs damage after an event occurs.",
          "text_th": "Corrective control ทำหน้าที่แก้ไขและฟื้นฟูหลังเกิดเหตุการณ์"
        }
      ]
    }
  },
  {
    "id": 603,
    "dom": 1,
    "question": "Following a sophisticated ransomware infection that encrypted critical accounting databases, the disaster recovery team isolates the infected network segment, wipes the compromised virtual machines, and restores clean financial data from an offline, write-once backup copy. In terms of functional control types, what role does restoring systems from backup media fulfill?",
    "options": [
      "Corrective control",
      "Detective control",
      "Preventive control",
      "Directive control"
    ],
    "correct_idx": 0,
    "explanation": "A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls. Preventive controls stop incidents before they occur. Detective controls identify and alert on active or past incidents. Directive controls specify mandatory behavioral rules.",
    "short_explanation_en": "A corrective control restores systems, repairs damage, and mitigates harm following a security incident.",
    "question_th": "หลังจากเกิดเหตุการณ์มัลแวร์เรียกค่าไถ่ (Ransomware) เข้ารหัสฐานข้อมูลบัญชีสำคัญ ทีมกู้คืนภัยพิบัติได้แยกเครือข่ายที่ติดเชื้อ ล้างเครื่องเสมือนที่ถูกโจมตี และกู้คืนข้อมูลการเงินที่สมบูรณ์จากชุดข้อมูลสำรองแบบออฟไลน์ (Offline backup) แบบเขียนได้ครั้งเดียว (Write-once) ในแง่ของฟังก์ชันการควบคุม การกู้คืนระบบจากชุดข้อมูลสำรองนี้ทำหน้าที่ใด?",
    "options_th": [
      "การควบคุมเชิงแก้ไข (Corrective control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงป้องกัน (Preventive control)",
      "การควบคุมเชิงสั่งการ (Directive control)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Corrective Control (การควบคุมเชิงแก้ไข) คือมาตรการที่ทำงาน 'หลังเกิดเหตุ' (Post-incident) เพื่อเยียวยาความเสียหาย ซ่อมแซมระบบ และนำระบบและข้อมูลกลับคืนสู่สภาวะปกติ เช่น การกู้คืนข้อมูลจากแบ็กอัป หรือการลงระบบใหม่\n- ข้อ B ไม่ถูกต้อง: Detective control ทำหน้าที่ตรวจพบการบุกรุก เช่น ระบบแอนติไวรัสหรือ SIEM แจ้งเตือน\n- ข้อ C ไม่ถูกต้อง: Preventive control ทำหน้าที่สกัดกั้นการโจมตีไม่ให้เกิดขึ้นตั้งแต่แรก\n- ข้อ D ไม่ถูกต้อง: Directive control เป็นการออกคำสั่ง กฎเกณฑ์ หรือนโยบายเพื่อนำทางพฤติกรรมของบุคลากร",
    "explanation_detail": {
      "correct": {
        "en": "A Corrective control functions to remedy damage, fix vulnerabilities, restore impacted assets, and return systems to a normal operational state following a security incident. Restoring data from backups, applying corrective patches, and rebuilding compromised operating systems are primary examples of corrective controls.",
        "th": "Corrective Control (การควบคุมเชิงแก้ไข) ทำหน้าที่ซ่อมแซม เยียวยาความเสียหาย ฟื้นฟูระบบ และนำระบบกลับสู่สภาวะการทำงานปกติหลังเกิดเหตุการณ์ความมั่นคงปลอดภัย เช่น การกู้คืนข้อมูลจากแบ็กอัป การลงแพตช์แก้ไขช่องโหว่ หรือการติดตั้งระบบใหม่"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Detective controls identify or alert on events. Restoring the affected systems is corrective recovery rather than the act of detecting the ransomware.",
          "text_th": "Detective control ใช้ระบุหรือตรวจพบเหตุการณ์และแจ้งเตือน ส่วนการกู้คืนระบบที่ได้รับผลกระทบเป็นการแก้ไขฟื้นฟู ไม่ใช่การตรวจจับ Ransomware"
        },
        {
          "letter": "C",
          "text_en": "Preventive controls aim to stop an unwanted event before it occurs. Here the infection has already damaged systems and the stated action restores them.",
          "text_th": "Preventive control มุ่งป้องกันเหตุที่ไม่ต้องการก่อนเกิดเหตุ แต่ในโจทย์ระบบได้รับความเสียหายจากการติดเชื้อแล้ว และการกระทำที่ถามคือการกู้คืนระบบ"
        },
        {
          "letter": "D",
          "text_en": "Directive controls specify mandatory behavioral rules and policies.",
          "text_th": "Directive control เป็นการสั่งการและออกกฎระเบียบบังคับใช้"
        }
      ]
    }
  },
  {
    "id": 604,
    "dom": 1,
    "question": "Management posts a mandatory notice on all server room entry doors stating: 'NOTICE: Tailgating is strictly prohibited. Every employee must badge in individually, and all external visitors must be escorted by authorized IT staff at all times.' Which functional control type is illustrated by this posted notice?",
    "options": [
      "Directive control",
      "Compensating control",
      "Detective control",
      "Corrective control"
    ],
    "correct_idx": 0,
    "explanation": "A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls. Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed. Detective controls discover and log violations. Corrective controls remediate consequences after an event.",
    "short_explanation_en": "A directive control guides behavior and mandates compliance with specified security procedures and policies.",
    "question_th": "ผู้บริหารติดประกาศบังคับไว้ที่ประตูทางเข้าห้องเซิร์ฟเวอร์ทุกบานว่า: 'ประกาศ: ห้ามเดินตามหลังโดยไม่แตะบัตร (Tailgating) อย่างเด็ดขาด พนักงานทุกคนต้องแตะบัตรเข้าออกรายบุคคล และผู้มาติดต่อภายนอกต้องมีเจ้าหน้าที่ไอทีติดตามตลอดเวลา' ป้ายประกาศนี้เป็นตัวอย่างของการควบคุมเชิงฟังก์ชันประเภทใด?",
    "options_th": [
      "การควบคุมเชิงสั่งการ (Directive control)",
      "การควบคุมเชิงชดเชย (Compensating control)",
      "การควบคุมเชิงตรวจจับ (Detective control)",
      "การควบคุมเชิงแก้ไข (Corrective control)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท\n- ข้อ B ไม่ถูกต้อง: Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้\n- ข้อ C ไม่ถูกต้อง: Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่\n- ข้อ D ไม่ถูกต้อง: Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร",
    "explanation_detail": {
      "correct": {
        "en": "A Directive control specifies, guides, or mandates specific employee behaviors and actions to ensure compliance with organizational security policies and standards. Signs instructing employees on required procedures (such as no tailgating and escorting visitors) are classic examples of directive controls.",
        "th": "Directive Control (การควบคุมเชิงสั่งการ) คือการกำหนดแนวทาง ชี้แนะ หรือออกคำสั่งบังคับพฤติกรรมของบุคลากรให้ปฏิบัติตามนโยบายความมั่นคงปลอดภัย เช่น ป้ายประกาศกฎระเบียบ ข้อปฏิบัติ หรือข้อบังคับของบริษัท"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Compensating controls serve as alternative mechanisms when primary safeguards cannot be deployed.",
          "text_th": "Compensating control คือมาตรการทดแทนเมื่อไม่สามารถติดตั้งมาตรการหลักได้"
        },
        {
          "letter": "C",
          "text_en": "Detective controls discover and log violations rather than commanding behavior.",
          "text_th": "Detective control คือการตรวจสอบ เช่น มีกล้องวงจรปิดคอยดูว่ามีใครแอบเดินตามหรือไม่"
        },
        {
          "letter": "D",
          "text_en": "Corrective controls remediate consequences and repair damage after an event.",
          "text_th": "Corrective control คือการแก้ไขหลังเกิดเหตุ เช่น การลงโทษทางวินัยหรือการยกเลิกบัตร"
        }
      ]
    }
  },
  {
    "id": 605,
    "dom": 1,
    "question": "A bank protects its core customer banking application using perimeter firewalls, internal network segmentation, host-based endpoint protection, multi-factor authentication, database-level encryption, and continuous log auditing. Why is this multi-tiered architecture considered superior to relying solely on a powerful perimeter firewall?",
    "options": [
      "It implements Defense in Depth, ensuring that if a perimeter control fails or is bypassed, complementary internal layers continue to protect the critical asset",
      "It completely eliminates the requirement for ongoing vulnerability management and security patching",
      "It eliminates single points of failure by ensuring that every security control performs identical functional operations",
      "It ensures that technical controls operate independently of organizational security policies and management oversight"
    ],
    "correct_idx": 0,
    "explanation": "Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset. Defense in depth does not eliminate the need for patching or vulnerability management, nor does it mean controls operate without policy.",
    "short_explanation_en": "Defense in depth uses complementary layers to reduce reliance on a single control; effectiveness still depends on their design, operation and shared dependencies.",
    "question_th": "ธนาคารแห่งหนึ่งปกป้องแอปพลิเคชันระบบการเงินโดยใช้ไฟร์วอลล์ที่ขอบเขตเครือข่าย, การแบ่งเซกเมนต์เครือข่ายภายใน, การป้องกันที่เครื่องแม่ข่าย, การยืนยันตัวตนแบบหลายปัจจัย, การเข้ารหัสฐานข้อมูล, และการตรวจสอบ Log อย่างต่อเนื่อง เหตุใดสถาปัตยกรรมแบบหลายชั้นนี้จึงเหนือกว่าการพึ่งพาเพียงไฟร์วอลล์รอบนอกที่ทรงประสิทธิภาพเพียงอย่างเดียว?",
    "options_th": [
      "เป็นการใช้หลักการป้องกันแบบเชิงลึก (Defense in Depth) ทำให้หากการควบคุมรอบนอกล้มเหลวหรือถูกบายพาส เลเยอร์ชั้นในที่เสริมกันจะยังคงปกป้องทรัพยากรสำคัญต่อไปได้",
      "ช่วยขจัดความจำเป็นในการจัดการช่องโหว่และการลงแพตช์ระบบอย่างต่อเนื่องได้อย่างสิ้นเชิง",
      "ช่วยกำจัดจุดล้มเหลวเดี่ยวโดยทำให้แน่ใจว่ามาตรการควบคุมทุกตัวทำงานในฟังก์ชันที่เหมือนกันทุกประการ",
      "ทำให้มาตรการควบคุมทางเทคนิคสามารถทำงานได้โดยไม่ต้องขึ้นกับนโยบายขององค์กรหรือการกำกับดูแลของผู้บริหาร"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่\n- ข้อ B ไม่ถูกต้อง: Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง\n- ข้อ C ไม่ถูกต้อง: การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ\n- ข้อ D ไม่ถูกต้อง: มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ",
    "explanation_detail": {
      "correct": {
        "en": "Defense in Depth (or layered security) is the defensive practice of deploying multiple complementary, overlapping security controls across technical, administrative, and physical domains. The core rationale is that no single security control is infallible; if an attacker penetrates or bypasses perimeter firewalls, subsequent layers—such as host-based protection, multi-factor authentication, and database encryption—still protect the underlying asset.",
        "th": "Defense in Depth (การป้องกันแบบเชิงลึก) คือการวางมาตรการควบคุมหลายระดับที่สอดประสานกัน เพื่อให้แน่ใจว่าหากด่านป้องกันชั้นใดชั้นหนึ่งล้มเหลวหรือถูกเจาะ ด่านชั้นต่อๆ ไป (เช่น การจำกัดสิทธิ์ การเข้ารหัสข้อมูล การยืนยันตัวตน) จะยังคงทำหน้าที่ปกป้องข้อมูลสำคัญอยู่"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Defense in depth does not eliminate the need for patching or vulnerability management; regular maintenance remains essential.",
          "text_th": "Defense in Depth ไม่ได้ทำให้ยกเลิกการลงแพตช์ได้ การอัปเดตระบบยังคงจำเป็นอย่างยิ่ง"
        },
        {
          "letter": "C",
          "text_en": "Controls across layers perform diverse and complementary functions, not identical operations.",
          "text_th": "การควบคุมแต่ละชั้นมีหน้าที่หลากหลายและเสริมกัน ไม่ได้ทำงานเหมือนกันทุกประการ"
        },
        {
          "letter": "D",
          "text_en": "Technical controls must always align with and be driven by organizational security policies.",
          "text_th": "มาตรการทางเทคนิคทั้งหมดต้องขับเคลื่อนและสอดคล้องกับนโยบายของผู้บริหารเสมอ"
        }
      ]
    }
  },
  {
    "id": 606,
    "dom": 1,
    "question": "A system administrator routinely applies verified operating system security updates, maintains current anti-malware signatures on endpoints, and changes factory-default passwords on newly installed network switches before deployment. These routine, prudent operational measures reflect which professional security principle?",
    "options": [
      "Due Care",
      "Due Diligence",
      "Risk Avoidance",
      "Separation of Duties"
    ],
    "correct_idx": 0,
    "explanation": "Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care. Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done'). Risk avoidance eliminates activities altogether, and separation of duties divides tasks among multiple people.",
    "short_explanation_en": "Due Care is the implementation of reasonable, prudent actions and operational safeguards to protect assets from harm.",
    "question_th": "ผู้ดูแลระบบปฏิบัติการหมั่นลงแพตช์ความมั่นคงปลอดภัยของระบบปฏิบัติการที่ผ่านการตรวจสอบแล้วตามกำหนดเวลาอย่างสม่ำเสมอ อัปเดตฐานข้อมูลแอนติไวรัสบนเครื่องลูกข่าย และเปลี่ยนรหัสผ่านเริ่มต้นจากโรงงาน (Default passwords) บนอุปกรณ์สวิตช์เครือข่ายตัวใหม่ก่อนนำไปใช้งานจริง การดำเนินการที่รอบคอบและเหมาะสมตามปกตินี้สะท้อนถึงหลักการวิชาชีพใด?",
    "options_th": [
      "ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)",
      "ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)",
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การแบ่งแยกหน้าที่ความรับผิดชอบ (Separation of Duties)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)\n- ข้อ B ไม่ถูกต้อง: Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)\n- ข้อ C ไม่ถูกต้อง: Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง\n- ข้อ D ไม่ถูกต้อง: Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต",
    "explanation_detail": {
      "correct": {
        "en": "Due Care is the practice of taking reasonable, prudent, and responsible operational actions under the circumstances to protect assets, enforce security controls, and mitigate known risks ('doing the right things' to protect the organization). Routine activities like applying security patches, maintaining antivirus definitions, and changing default passwords are core examples of practicing Due Care.",
        "th": "Due Care (การปฏิบัติหน้าที่ด้วยความใส่ใจตามสมควร) คือการลงมือกระทำอย่างถูกต้อง รอบคอบ และมีความรับผิดชอบในการปกป้องดูแลระบบและทรัพย์สิน เช่น การลงแพตช์อย่างสม่ำเสมอ การเปลี่ยนรหัสผ่านเริ่มต้น และการเปิดใช้งานแอนติไวรัส (เน้นการ 'ลงมือทำ' เพื่อปกป้อง)"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Due Diligence, by contrast, is the analytical and investigative process of researching, assessing, and evaluating risk and control adequacy ('knowing what needs to be done').",
          "text_th": "Due Diligence คือการตรวจสอบ วิเคราะห์ และประเมินสถานการณ์ล่วงหน้าอย่างละเอียดรอบคอบ (เน้นการ 'ตรวจสอบ/ประเมิน' ก่อนและระหว่างดำเนินการ)"
        },
        {
          "letter": "C",
          "text_en": "Risk avoidance eliminates activities altogether to avoid risk exposure.",
          "text_th": "Risk Avoidance คือการยกเลิกไม่ทำกิจกรรมเพื่อไม่ให้มีความเสี่ยง"
        },
        {
          "letter": "D",
          "text_en": "Separation of duties divides sensitive tasks among multiple people to prevent fraud.",
          "text_th": "Separation of Duties คือการแยกหน้าที่สำคัญออกจากกันเพื่อป้องกันการทุจริต"
        }
      ],
      "exam_tip": {
        "en": "Due Care = Prudent Action / Implementation ('Doing the right thing'); Due Diligence = Thorough Investigation / Verification ('Knowing the right thing').",
        "th": "Due Care = การลงมือปฏิบัติอย่างรอบคอบ (Doing the right thing); Due Diligence = การตรวจสอบหาข้อเท็จจริงอย่างละเอียด (Knowing the right thing)"
      }
    }
  },
  {
    "id": 607,
    "dom": 1,
    "question": "Prior to signing a service agreement with a third-party cloud analytics provider, a financial firm's cybersecurity team conducts a formal risk assessment, reviews the vendor's SOC 2 Type II audit report, evaluates their encryption architecture, and verifies their regulatory compliance certifications. Which professional security principle is the cybersecurity team executing?",
    "options": [
      "Due Diligence",
      "Due Care",
      "Strict Liability",
      "Risk Acceptance"
    ],
    "correct_idx": 0,
    "explanation": "Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence. Due Care is taking prudent protective actions in the circumstances; this question instead describes investigating vendor risks and controls. Strict liability is a legal standard, and risk acceptance is an informed, authorized decision to retain assessed exposure.",
    "short_explanation_en": "Due Diligence is the thorough investigation, review, and assessment of risks and controls before and during an activity.",
    "question_th": "ก่อนการลงนามในสัญญาใช้บริการกับผู้ให้บริการวิเคราะห์ข้อมูลบนคลาวด์ภายนอก ทีมความมั่นคงปลอดภัยไซเบอร์ของบริษัทการเงินได้ทำการประเมินความเสี่ยงอย่างเป็นทางการ ตรวจสอบรายงานการตรวจสอบ SOC 2 Type II ของผู้ขาย ประเมินสถาปัตยกรรมการเข้ารหัสข้อมูล และยืนยันการรับรองมาตรฐานด้านกฎหมาย ทีมงานกำลังปฏิบัติตามหลักการวิชาชีพใด?",
    "options_th": [
      "ความรอบคอบในการตรวจสอบและประเมิน (Due Diligence)",
      "ความใส่ใจตามสมควรในการปฏิบัติหน้าที่ (Due Care)",
      "ความรับผิดโดยเคร่งครัด (Strict Liability)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ\n- ข้อ B ไม่ถูกต้อง: Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)\n- ข้อ C ไม่ถูกต้อง: Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย\n- ข้อ D ไม่ถูกต้อง: Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย",
    "explanation_detail": {
      "correct": {
        "en": "Due Diligence is the practice of thoroughly investigating, assessing, evaluating, and validating risks and security postures before and during a business commitment or operational activity ('knowing the facts and assessing the risks'). Reviewing third-party audit reports, inspecting security controls, and validating vendor compliance certifications prior to signing a contract represents Due Diligence.",
        "th": "Due Diligence (ความรอบคอบในการตรวจสอบ) คือการศึกษา ค้นคว้า ตรวจสอบ และประเมินความเสี่ยงและมาตรการความปลอดภัยอย่างละเอียดรอบคอบ 'ก่อนและระหว่าง' การทำธุรกรรมหรือการว่าจ้างผู้ให้บริการภายนอก เพื่อให้มีข้อมูลครบถ้วนก่อนตัดสินใจ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Due Care is taking prudent protective actions in the circumstances; this question instead describes investigating vendor risks and controls.",
          "text_th": "Due Care คือการลงมือปฏิบัติด้านการป้องกันดูแลระบบอย่างสม่ำเสมอตามสมควร (Duty of care)"
        },
        {
          "letter": "C",
          "text_en": "Strict liability is a legal standard assigning liability regardless of fault or intent, not a security evaluation practice.",
          "text_th": "Strict Liability เป็นหลักการทางกฎหมายว่าด้วยความรับผิดโดยไม่ต้องพิสูจน์เจตนา ไม่ใช่หลักการประเมินความปลอดภัย"
        },
        {
          "letter": "D",
          "text_en": "Risk acceptance is an informed, authorized decision to retain assessed exposure; it does not name the vendor-investigation activity described here.",
          "text_th": "Risk Acceptance คือการตัดสินใจยอมรับความเสี่ยง ไม่ใช่กระบวนการตรวจสอบข้อมูลของผู้ขาย"
        }
      ],
      "example": {
        "en": "Reviewing a cloud vendor's SOC 2 Type II report and ISO 27001 certificate before signing an enterprise subscription is Due Diligence.",
        "th": "การขอตรวจสอบรายงาน SOC 2 Type II และใบรับรอง ISO 27001 ของผู้ให้บริการคลาวด์ก่อนลงนามในสัญญาคือตัวอย่างของ Due Diligence"
      }
    }
  },
  {
    "id": 1041,
    "dom": 1,
    "question": "An administrator is authorized to change a payroll configuration. Investigators later need to establish which account changed a specific value and when. Which evidence most directly supports the accounting function of AAA?",
    "options": [
      "A successful login record for the administrator that morning",
      "An approved role definition permitting configuration changes",
      "A current inventory listing the payroll server and its owner",
      "A protected activity record linking the account, change and timestamp"
    ],
    "correct_idx": 3,
    "explanation": "Accounting records attributable actions. A protected account/action/time record addresses the investigation; authentication and permission records alone do not show the change.\n\nA: A login shows authentication at that time, not which later configuration action occurred.\nB: The role establishes authorization, not evidence that a particular account performed this change.\nC: Inventory identifies the asset and owner, not the actor and time of the configuration change.",
    "short_explanation_en": "Accounting records attributable actions. A protected account/action/time record addresses the investigation; authentication and permission records alone do not show the change.",
    "question_th": "ผู้ดูแลระบบได้รับอนุญาตให้เปลี่ยนการตั้งค่าระบบเงินเดือน ต่อมาผู้ตรวจสอบต้องการทราบว่าบัญชีใดเปลี่ยนค่าหนึ่งและเปลี่ยนเมื่อใด หลักฐานใดสนับสนุนหน้าที่ Accounting ใน AAA ได้ตรงที่สุด?",
    "options_th": [
      "บันทึกว่าผู้ดูแลระบบเข้าสู่ระบบสำเร็จในเช้าวันนั้น",
      "ข้อกำหนดบทบาทที่อนุมัติให้เปลี่ยนการตั้งค่าได้",
      "ทะเบียนปัจจุบันที่ระบุเซิร์ฟเวอร์เงินเดือนและเจ้าของ",
      "บันทึกกิจกรรมที่ได้รับการป้องกันและเชื่อมโยงบัญชี การเปลี่ยนแปลง และเวลา"
    ],
    "explanation_th": "Accounting บันทึกการกระทำที่เชื่อมโยงกับผู้กระทำได้ บันทึกบัญชี การกระทำ และเวลาที่ได้รับการป้องกันตอบโจทย์การตรวจสอบ ส่วนหลักฐานการเข้าสู่ระบบหรือสิทธิ์เพียงอย่างเดียวไม่ได้แสดงการเปลี่ยนค่านั้น\n\nA: บันทึกการเข้าสู่ระบบแสดงการพิสูจน์ตัวตน ณ เวลานั้น ไม่ได้ระบุการเปลี่ยนการตั้งค่าที่เกิดขึ้นภายหลัง\nB: บทบาทแสดงสิทธิ์ที่อนุญาต ไม่ใช่หลักฐานว่าบัญชีหนึ่งได้ทำการเปลี่ยนแปลงนี้\nC: ทะเบียนระบุทรัพย์สินและเจ้าของ ไม่ได้ระบุบัญชีผู้เปลี่ยนค่าหรือเวลาที่เปลี่ยน",
    "explanation_detail": {
      "correct": {
        "en": "Accounting records attributable actions. A protected account/action/time record addresses the investigation; authentication and permission records alone do not show the change.",
        "th": "Accounting บันทึกการกระทำที่เชื่อมโยงกับผู้กระทำได้ บันทึกบัญชี การกระทำ และเวลาที่ได้รับการป้องกันตอบโจทย์การตรวจสอบ ส่วนหลักฐานการเข้าสู่ระบบหรือสิทธิ์เพียงอย่างเดียวไม่ได้แสดงการเปลี่ยนค่านั้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A login shows authentication at that time, not which later configuration action occurred.",
          "text_th": "บันทึกการเข้าสู่ระบบแสดงการพิสูจน์ตัวตน ณ เวลานั้น ไม่ได้ระบุการเปลี่ยนการตั้งค่าที่เกิดขึ้นภายหลัง"
        },
        {
          "letter": "B",
          "text_en": "The role establishes authorization, not evidence that a particular account performed this change.",
          "text_th": "บทบาทแสดงสิทธิ์ที่อนุญาต ไม่ใช่หลักฐานว่าบัญชีหนึ่งได้ทำการเปลี่ยนแปลงนี้"
        },
        {
          "letter": "C",
          "text_en": "Inventory identifies the asset and owner, not the actor and time of the configuration change.",
          "text_th": "ทะเบียนระบุทรัพย์สินและเจ้าของ ไม่ได้ระบุบัญชีผู้เปลี่ยนค่าหรือเวลาที่เปลี่ยน"
        }
      ]
    }
  },
  {
    "id": 1042,
    "dom": 1,
    "question": "A supplier disputes having approved a particular purchase order. The customer has a verifiable digital signature covering that order, with trustworthy evidence of the signing-key binding and its control at signing. Which security property is this evidence primarily intended to support?",
    "options": [
      "Authentication of a new login session",
      "Confidentiality of the stored purchase order",
      "Availability of the purchase-order service",
      "Non-repudiation of the recorded approval"
    ],
    "correct_idx": 3,
    "explanation": "Non-repudiation concerns evidence of a past action. The stated signature and supporting key evidence address the disputed approval; they are not an unconditional legal guarantee.\n\nA: Authentication of a current session does not by itself establish approval of a particular past order.\nB: A signature does not hide the signed order from readers.\nC: Signature evidence does not demonstrate service uptime or recoverability.",
    "short_explanation_en": "Non-repudiation concerns evidence of a past action. The stated signature and supporting key evidence address the disputed approval; they are not an unconditional legal guarantee.",
    "question_th": "ผู้ขายปฏิเสธว่าไม่ได้อนุมัติใบสั่งซื้อฉบับหนึ่ง ลูกค้ามีลายมือชื่อดิจิทัลที่ตรวจสอบได้และครอบคลุมใบสั่งซื้อนั้น พร้อมหลักฐานที่น่าเชื่อถือเกี่ยวกับการผูกกุญแจลงนามและผู้ควบคุมกุญแจขณะลงนาม หลักฐานนี้มุ่งสนับสนุนคุณสมบัติความปลอดภัยใดเป็นหลัก?",
    "options_th": [
      "การพิสูจน์ตัวตนของการเข้าสู่ระบบครั้งใหม่",
      "การรักษาความลับของใบสั่งซื้อที่จัดเก็บไว้",
      "ความพร้อมใช้งานของบริการใบสั่งซื้อ",
      "การไม่อาจปฏิเสธการอนุมัติที่บันทึกไว้ (Non-repudiation)"
    ],
    "explanation_th": "Non-repudiation เกี่ยวกับหลักฐานของการกระทำในอดีต ลายมือชื่อและหลักฐานประกอบเรื่องกุญแจตามโจทย์ช่วยตอบข้อโต้แย้งเรื่องการอนุมัติ แต่ไม่ได้รับประกันผลทางกฎหมายอย่างไม่มีเงื่อนไข\n\nA: การพิสูจน์ตัวตนของเซสชันปัจจุบันเพียงอย่างเดียวไม่ได้ยืนยันการอนุมัติใบสั่งซื้อเฉพาะฉบับในอดีต\nB: ลายมือชื่อไม่ได้ซ่อนเนื้อหาใบสั่งซื้อจากผู้อ่าน\nC: หลักฐานลายมือชื่อไม่ได้แสดงเวลาที่บริการพร้อมใช้งานหรือความสามารถในการกู้คืน",
    "explanation_detail": {
      "correct": {
        "en": "Non-repudiation concerns evidence of a past action. The stated signature and supporting key evidence address the disputed approval; they are not an unconditional legal guarantee.",
        "th": "Non-repudiation เกี่ยวกับหลักฐานของการกระทำในอดีต ลายมือชื่อและหลักฐานประกอบเรื่องกุญแจตามโจทย์ช่วยตอบข้อโต้แย้งเรื่องการอนุมัติ แต่ไม่ได้รับประกันผลทางกฎหมายอย่างไม่มีเงื่อนไข"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Authentication of a current session does not by itself establish approval of a particular past order.",
          "text_th": "การพิสูจน์ตัวตนของเซสชันปัจจุบันเพียงอย่างเดียวไม่ได้ยืนยันการอนุมัติใบสั่งซื้อเฉพาะฉบับในอดีต"
        },
        {
          "letter": "B",
          "text_en": "A signature does not hide the signed order from readers.",
          "text_th": "ลายมือชื่อไม่ได้ซ่อนเนื้อหาใบสั่งซื้อจากผู้อ่าน"
        },
        {
          "letter": "C",
          "text_en": "Signature evidence does not demonstrate service uptime or recoverability.",
          "text_th": "หลักฐานลายมือชื่อไม่ได้แสดงเวลาที่บริการพร้อมใช้งานหรือความสามารถในการกู้คืน"
        }
      ]
    }
  },
  {
    "id": 1043,
    "dom": 1,
    "question": "A training provider needs to send joining instructions to registered attendees. Its proposed form asks for an email address, date of birth, home address and passport number. Only the email address is needed for the stated purpose, and no other collection requirement applies. Which change best applies data minimization?",
    "options": [
      "Collect every field but encrypt the stored form",
      "Collect the email address and omit the three unnecessary fields",
      "Collect every field but restrict staff access",
      "Collect every field but delete it after the course"
    ],
    "correct_idx": 1,
    "explanation": "Minimization limits collection to information needed for the stated purpose. Protecting or later deleting unnecessary data does not remove the unnecessary collection.\n\nA: Encryption can protect confidentiality but still collects unnecessary personal data.\nC: Access restrictions do not justify collecting fields unnecessary for joining instructions.\nD: A deletion schedule limits duration but does not minimize initial collection.",
    "short_explanation_en": "Minimization limits collection to information needed for the stated purpose. Protecting or later deleting unnecessary data does not remove the unnecessary collection.",
    "question_th": "ผู้จัดอบรมต้องส่งคำแนะนำการเข้าร่วมให้ผู้ลงทะเบียน แบบฟอร์มที่เสนอขออีเมล วันเกิด ที่อยู่บ้าน และหมายเลขหนังสือเดินทาง แต่มีเพียงอีเมลที่จำเป็นต่อวัตถุประสงค์นี้ และไม่มีข้อกำหนดให้เก็บข้อมูลอื่น การเปลี่ยนแปลงใดใช้หลักลดการเก็บข้อมูลให้น้อยที่สุดได้เหมาะสมที่สุด?",
    "options_th": [
      "เก็บทุกช่องแต่เข้ารหัสแบบฟอร์มที่จัดเก็บ",
      "เก็บอีเมลและตัดข้อมูลอีกสามรายการที่ไม่จำเป็นออก",
      "เก็บทุกช่องแต่จำกัดสิทธิ์เข้าถึงของเจ้าหน้าที่",
      "เก็บทุกช่องแต่ลบหลังจบการอบรม"
    ],
    "explanation_th": "การลดการเก็บข้อมูลจำกัดข้อมูลให้เท่าที่จำเป็นต่อวัตถุประสงค์ การป้องกันหรือลบข้อมูลภายหลังไม่ได้ทำให้การเก็บข้อมูลที่ไม่จำเป็นหายไป\n\nA: การเข้ารหัสช่วยรักษาความลับ แต่ยังคงเก็บข้อมูลส่วนบุคคลที่ไม่จำเป็น\nC: การจำกัดสิทธิ์ไม่ได้เป็นเหตุให้เก็บข้อมูลที่ไม่จำเป็นต่อคำแนะนำการเข้าร่วม\nD: กำหนดลบช่วยจำกัดระยะเวลาเก็บ แต่ไม่ได้ลดข้อมูลที่เก็บตั้งแต่ต้น",
    "explanation_detail": {
      "correct": {
        "en": "Minimization limits collection to information needed for the stated purpose. Protecting or later deleting unnecessary data does not remove the unnecessary collection.",
        "th": "การลดการเก็บข้อมูลจำกัดข้อมูลให้เท่าที่จำเป็นต่อวัตถุประสงค์ การป้องกันหรือลบข้อมูลภายหลังไม่ได้ทำให้การเก็บข้อมูลที่ไม่จำเป็นหายไป"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Encryption can protect confidentiality but still collects unnecessary personal data.",
          "text_th": "การเข้ารหัสช่วยรักษาความลับ แต่ยังคงเก็บข้อมูลส่วนบุคคลที่ไม่จำเป็น"
        },
        {
          "letter": "C",
          "text_en": "Access restrictions do not justify collecting fields unnecessary for joining instructions.",
          "text_th": "การจำกัดสิทธิ์ไม่ได้เป็นเหตุให้เก็บข้อมูลที่ไม่จำเป็นต่อคำแนะนำการเข้าร่วม"
        },
        {
          "letter": "D",
          "text_en": "A deletion schedule limits duration but does not minimize initial collection.",
          "text_th": "กำหนดลบช่วยจำกัดระยะเวลาเก็บ แต่ไม่ได้ลดข้อมูลที่เก็บตั้งแต่ต้น"
        }
      ]
    }
  },
  {
    "id": 1044,
    "dom": 1,
    "question": "An approved schedule requires visitor contact records to be deleted 30 days after the visit ends. It applies to every record in this case, with no preservation exception. A record was created 40 days ago for a visit that ended 12 days ago. Which action follows the schedule?",
    "options": [
      "Delete it now because its creation was more than 30 days ago",
      "Restart the 30-day period whenever an employee reads it",
      "Retain it for now and schedule deletion 30 days after the visit ended",
      "Keep it for 30 more days starting from this review"
    ],
    "correct_idx": 2,
    "explanation": "The specified trigger is the end of the visit. Only 12 days have elapsed from that trigger, regardless of when the record was created.\n\nA: Creation time is not the trigger defined in this schedule.\nB: Reading a record does not reset the supplied visit-end trigger.\nD: The review date is not the retention trigger, so this would extend the defined period.",
    "short_explanation_en": "The specified trigger is the end of the visit. Only 12 days have elapsed from that trigger, regardless of when the record was created.",
    "question_th": "กำหนดการเก็บรักษาที่อนุมัติกำหนดให้ลบข้อมูลติดต่อผู้มาติดต่อ 30 วันหลังสิ้นสุดการเข้าพบ กฎนี้ใช้กับทุกระเบียนในกรณีนี้โดยไม่มีข้อยกเว้นให้เก็บไว้เป็นหลักฐาน ระเบียนหนึ่งสร้างเมื่อ 40 วันก่อนสำหรับการเข้าพบที่สิ้นสุดเมื่อ 12 วันก่อน การดำเนินการใดเป็นไปตามกำหนดการ?",
    "options_th": [
      "ลบทันทีเพราะสร้างระเบียนมาเกิน 30 วันแล้ว",
      "เริ่มนับ 30 วันใหม่ทุกครั้งที่พนักงานอ่านระเบียน",
      "เก็บไว้ก่อนและกำหนดลบเมื่อครบ 30 วันหลังสิ้นสุดการเข้าพบ",
      "เก็บต่ออีก 30 วันโดยเริ่มนับจากการทบทวนครั้งนี้"
    ],
    "explanation_th": "จุดเริ่มนับตามกฎคือเวลาสิ้นสุดการเข้าพบ ซึ่งผ่านไปเพียง 12 วัน ไม่ขึ้นกับวันที่สร้างระเบียน\n\nA: วันที่สร้างไม่ใช่จุดเริ่มนับที่กำหนดในกฎนี้\nB: การอ่านระเบียนไม่ได้เปลี่ยนจุดเริ่มนับจากเวลาสิ้นสุดการเข้าพบตามที่กำหนด\nD: วันที่ทบทวนไม่ใช่จุดเริ่มนับ จึงจะเป็นการขยายระยะเวลาเก็บเกินกฎ",
    "explanation_detail": {
      "correct": {
        "en": "The specified trigger is the end of the visit. Only 12 days have elapsed from that trigger, regardless of when the record was created.",
        "th": "จุดเริ่มนับตามกฎคือเวลาสิ้นสุดการเข้าพบ ซึ่งผ่านไปเพียง 12 วัน ไม่ขึ้นกับวันที่สร้างระเบียน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Creation time is not the trigger defined in this schedule.",
          "text_th": "วันที่สร้างไม่ใช่จุดเริ่มนับที่กำหนดในกฎนี้"
        },
        {
          "letter": "B",
          "text_en": "Reading a record does not reset the supplied visit-end trigger.",
          "text_th": "การอ่านระเบียนไม่ได้เปลี่ยนจุดเริ่มนับจากเวลาสิ้นสุดการเข้าพบตามที่กำหนด"
        },
        {
          "letter": "D",
          "text_en": "The review date is not the retention trigger, so this would extend the defined period.",
          "text_th": "วันที่ทบทวนไม่ใช่จุดเริ่มนับ จึงจะเป็นการขยายระยะเวลาเก็บเกินกฎ"
        }
      ]
    }
  },
  {
    "id": 1045,
    "dom": 1,
    "question": "A verified customer requests erasure of two record categories. The approved disposition rule permits deletion of obsolete marketing preferences but requires the related invoice records to be retained for two more years. These are the only applicable requirements. Which response follows the supplied rule?",
    "options": [
      "Delete both categories because a verified request overrides retention",
      "Retain both categories until the invoice period ends",
      "Replace both categories with encrypted copies and close the request",
      "Delete the obsolete preferences and retain the invoices for the required period"
    ],
    "correct_idx": 3,
    "explanation": "The request must be applied by record category. The supplied retention requirement covers invoices, not the obsolete preferences.\n\nA: Verification establishes who requested erasure, not an override of the stated retention requirement.\nB: The invoice requirement does not extend to preferences whose deletion is permitted.\nC: Encryption is not erasure and does not implement the category-specific disposition.",
    "short_explanation_en": "The request must be applied by record category. The supplied retention requirement covers invoices, not the obsolete preferences.",
    "question_th": "ลูกค้าที่ผ่านการยืนยันตัวตนขอลบข้อมูลสองประเภท กฎจัดการข้อมูลที่อนุมัติให้ลบการตั้งค่าการตลาดที่ไม่ใช้แล้ว แต่กำหนดให้เก็บใบแจ้งหนี้ที่เกี่ยวข้องต่ออีกสองปี นี่คือข้อกำหนดที่เกี่ยวข้องทั้งหมด การตอบสนองใดเป็นไปตามกฎที่ให้มา?",
    "options_th": [
      "ลบทั้งสองประเภทเพราะคำขอที่ยืนยันแล้วมีอำนาจเหนือข้อกำหนดเก็บรักษา",
      "เก็บทั้งสองประเภทจนสิ้นสุดระยะเวลาเก็บใบแจ้งหนี้",
      "แทนข้อมูลทั้งสองประเภทด้วยสำเนาเข้ารหัสแล้วปิดคำขอ",
      "ลบการตั้งค่าที่ไม่ใช้แล้วและเก็บใบแจ้งหนี้ตามระยะเวลาที่กำหนด"
    ],
    "explanation_th": "ต้องพิจารณาคำขอแยกตามประเภทข้อมูล ข้อกำหนดเก็บรักษาที่ให้มาครอบคลุมใบแจ้งหนี้ ไม่ได้ครอบคลุมการตั้งค่าที่ไม่ใช้แล้ว\n\nA: การยืนยันแสดงว่าใครเป็นผู้ขอลบ ไม่ได้ยกเลิกข้อกำหนดเก็บรักษาตามโจทย์\nB: ข้อกำหนดเกี่ยวกับใบแจ้งหนี้ไม่ได้ขยายไปถึงการตั้งค่าที่อนุญาตให้ลบ\nC: การเข้ารหัสไม่ใช่การลบ และไม่ได้ดำเนินการตามกฎที่แยกตามประเภทข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "The request must be applied by record category. The supplied retention requirement covers invoices, not the obsolete preferences.",
        "th": "ต้องพิจารณาคำขอแยกตามประเภทข้อมูล ข้อกำหนดเก็บรักษาที่ให้มาครอบคลุมใบแจ้งหนี้ ไม่ได้ครอบคลุมการตั้งค่าที่ไม่ใช้แล้ว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Verification establishes who requested erasure, not an override of the stated retention requirement.",
          "text_th": "การยืนยันแสดงว่าใครเป็นผู้ขอลบ ไม่ได้ยกเลิกข้อกำหนดเก็บรักษาตามโจทย์"
        },
        {
          "letter": "B",
          "text_en": "The invoice requirement does not extend to preferences whose deletion is permitted.",
          "text_th": "ข้อกำหนดเกี่ยวกับใบแจ้งหนี้ไม่ได้ขยายไปถึงการตั้งค่าที่อนุญาตให้ลบ"
        },
        {
          "letter": "C",
          "text_en": "Encryption is not erasure and does not implement the category-specific disposition.",
          "text_th": "การเข้ารหัสไม่ใช่การลบ และไม่ได้ดำเนินการตามกฎที่แยกตามประเภทข้อมูล"
        }
      ]
    }
  },
  {
    "id": 1046,
    "dom": 1,
    "question": "A clinic permits an analyst to read appointment contact details for scheduling. A stated purpose rule prohibits using these details for product promotion. The analyst exports them for a promotional campaign; no unauthorized reader receives them, no values change and access is logged. Which concern is most directly demonstrated?",
    "options": [
      "The data values have lost integrity during storage",
      "The scheduling service has lost availability",
      "Personal data is being used outside its permitted purpose",
      "The analyst cannot be held accountable for the export"
    ],
    "correct_idx": 2,
    "explanation": "Privacy includes appropriate use of personal data. Authorized reading, accurate values and an audit trail do not make the prohibited promotional purpose permissible.\n\nA: The scenario states that values did not change; it demonstrates improper use rather than altered data.\nB: No service interruption or inability to access scheduling is stated.\nD: The export is logged and attributed. Accountability evidence does not itself authorize the purpose.",
    "short_explanation_en": "Privacy includes appropriate use of personal data. Authorized reading, accurate values and an audit trail do not make the prohibited promotional purpose permissible.",
    "question_th": "คลินิกอนุญาตให้นักวิเคราะห์อ่านข้อมูลติดต่อเพื่อนัดหมาย กฎเรื่องวัตถุประสงค์ห้ามนำข้อมูลนี้ไปส่งเสริมการขายสินค้า นักวิเคราะห์ส่งออกข้อมูลไปใช้ในแคมเปญส่งเสริมการขาย โดยไม่มีผู้อ่านที่ไม่ได้รับอนุญาตได้รับข้อมูล ไม่มีค่าใดเปลี่ยน และมีบันทึกการเข้าถึง ข้อใดเป็นปัญหาที่แสดงให้เห็นโดยตรงที่สุด?",
    "options_th": [
      "ค่าข้อมูลสูญเสียความถูกต้องครบถ้วนระหว่างจัดเก็บ",
      "บริการนัดหมายสูญเสียความพร้อมใช้งาน",
      "ข้อมูลส่วนบุคคลถูกใช้ผิดจากวัตถุประสงค์ที่อนุญาต",
      "ไม่สามารถเชื่อมโยงนักวิเคราะห์กับความรับผิดชอบต่อการส่งออก"
    ],
    "explanation_th": "Privacy ครอบคลุมการใช้ข้อมูลส่วนบุคคลอย่างเหมาะสม การมีสิทธิ์อ่าน ค่าข้อมูลถูกต้อง และมีบันทึกกิจกรรมไม่ได้ทำให้วัตถุประสงค์ส่งเสริมการขายที่ห้ามไว้กลายเป็นสิ่งที่อนุญาต\n\nA: โจทย์ระบุว่าค่าไม่เปลี่ยน ปัญหาคือการใช้ไม่เหมาะสม ไม่ใช่ข้อมูลถูกแก้ไข\nB: ไม่มีข้อมูลว่าบริการหยุดชะงักหรือไม่สามารถเข้าถึงการนัดหมายได้\nD: มีบันทึกที่เชื่อมโยงการส่งออกกับผู้กระทำ หลักฐานความรับผิดชอบไม่ได้อนุญาตวัตถุประสงค์นั้นด้วยตัวเอง",
    "explanation_detail": {
      "correct": {
        "en": "Privacy includes appropriate use of personal data. Authorized reading, accurate values and an audit trail do not make the prohibited promotional purpose permissible.",
        "th": "Privacy ครอบคลุมการใช้ข้อมูลส่วนบุคคลอย่างเหมาะสม การมีสิทธิ์อ่าน ค่าข้อมูลถูกต้อง และมีบันทึกกิจกรรมไม่ได้ทำให้วัตถุประสงค์ส่งเสริมการขายที่ห้ามไว้กลายเป็นสิ่งที่อนุญาต"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The scenario states that values did not change; it demonstrates improper use rather than altered data.",
          "text_th": "โจทย์ระบุว่าค่าไม่เปลี่ยน ปัญหาคือการใช้ไม่เหมาะสม ไม่ใช่ข้อมูลถูกแก้ไข"
        },
        {
          "letter": "B",
          "text_en": "No service interruption or inability to access scheduling is stated.",
          "text_th": "ไม่มีข้อมูลว่าบริการหยุดชะงักหรือไม่สามารถเข้าถึงการนัดหมายได้"
        },
        {
          "letter": "D",
          "text_en": "The export is logged and attributed. Accountability evidence does not itself authorize the purpose.",
          "text_th": "มีบันทึกที่เชื่อมโยงการส่งออกกับผู้กระทำ หลักฐานความรับผิดชอบไม่ได้อนุญาตวัตถุประสงค์นั้นด้วยตัวเอง"
        }
      ]
    }
  },
  {
    "id": 1047,
    "dom": 1,
    "question": "At a staff kiosk, a person enters an employee identifier. The kiosk has not yet checked a password, device or biometric evidence. Which statement best describes what has occurred?",
    "options": [
      "The person has been authenticated by naming an existing account",
      "The person has been authorized to use all staff services",
      "An identity has been claimed, but the claim has not been authenticated",
      "The person has completed identity proofing for enrollment"
    ],
    "correct_idx": 2,
    "explanation": "Identification presents a claimed identity. The stated process has not yet checked evidence that supports the claim.\n\nA: Knowing or entering an identifier is not the stated verification of the claimant.\nB: No resource-permission decision has been made.\nD: Entering an identifier at a kiosk does not establish enrollment identity-proofing evidence.",
    "short_explanation_en": "Identification presents a claimed identity. The stated process has not yet checked evidence that supports the claim.",
    "question_th": "ที่ตู้บริการพนักงาน บุคคลหนึ่งป้อนตัวระบุพนักงาน ตู้ยังไม่ได้ตรวจรหัสผ่าน อุปกรณ์ หรือหลักฐานชีวมิติ ข้อใดอธิบายสิ่งที่เกิดขึ้นได้ดีที่สุด?",
    "options_th": [
      "พิสูจน์ตัวตนของบุคคลสำเร็จแล้วเพราะระบุบัญชีที่มีอยู่ได้",
      "บุคคลได้รับสิทธิ์ใช้บริการพนักงานทั้งหมดแล้ว",
      "มีการอ้างอัตลักษณ์แล้ว แต่ยังไม่ได้พิสูจน์คำกล่าวอ้างนั้น",
      "บุคคลผ่านการตรวจพิสูจน์อัตลักษณ์สำหรับลงทะเบียนแล้ว"
    ],
    "explanation_th": "Identification เป็นการอ้างว่าเป็นใคร กระบวนการตามโจทย์ยังไม่ได้ตรวจหลักฐานสนับสนุนคำกล่าวอ้าง\n\nA: การรู้หรือป้อนตัวระบุไม่ใช่การตรวจสอบผู้กล่าวอ้างตามกระบวนการนี้\nB: ยังไม่มีการตัดสินสิทธิ์เข้าถึงทรัพยากร\nD: การป้อนตัวระบุที่ตู้ไม่ได้เป็นหลักฐานการตรวจพิสูจน์อัตลักษณ์ตอนลงทะเบียน",
    "explanation_detail": {
      "correct": {
        "en": "Identification presents a claimed identity. The stated process has not yet checked evidence that supports the claim.",
        "th": "Identification เป็นการอ้างว่าเป็นใคร กระบวนการตามโจทย์ยังไม่ได้ตรวจหลักฐานสนับสนุนคำกล่าวอ้าง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Knowing or entering an identifier is not the stated verification of the claimant.",
          "text_th": "การรู้หรือป้อนตัวระบุไม่ใช่การตรวจสอบผู้กล่าวอ้างตามกระบวนการนี้"
        },
        {
          "letter": "B",
          "text_en": "No resource-permission decision has been made.",
          "text_th": "ยังไม่มีการตัดสินสิทธิ์เข้าถึงทรัพยากร"
        },
        {
          "letter": "D",
          "text_en": "Entering an identifier at a kiosk does not establish enrollment identity-proofing evidence.",
          "text_th": "การป้อนตัวระบุที่ตู้ไม่ได้เป็นหลักฐานการตรวจพิสูจน์อัตลักษณ์ตอนลงทะเบียน"
        }
      ]
    }
  },
  {
    "id": 1048,
    "dom": 1,
    "question": "A risk assessment estimates exposure to unauthorized transfers before considering any controls. It then estimates the exposure remaining after a transaction-approval control operates. Which pair correctly names these estimates?",
    "options": [
      "Residual risk before controls; inherent risk after controls",
      "Risk appetite before controls; risk tolerance after controls",
      "Inherent risk before controls; residual risk after controls",
      "Transferred risk before controls; avoided risk after controls"
    ],
    "correct_idx": 2,
    "explanation": "Inherent risk excludes the effect of controls; residual risk is the exposure remaining after them. The latter need not be zero or accepted.\n\nA: This reverses the before-control and remaining-risk meanings.\nB: Appetite and tolerance express organizational boundaries, not these two exposure estimates.\nD: Neither insurance/transfer nor ending the risky activity is stated.",
    "short_explanation_en": "Inherent risk excludes the effect of controls; residual risk is the exposure remaining after them. The latter need not be zero or accepted.",
    "question_th": "การประเมินความเสี่ยงประมาณความเสี่ยงจากการโอนเงินที่ไม่ได้รับอนุญาตก่อนพิจารณามาตรการใด จากนั้นประมาณความเสี่ยงที่เหลือหลังมาตรการอนุมัติธุรกรรมทำงาน คู่คำใดเรียกค่าประมาณทั้งสองได้ถูกต้อง?",
    "options_th": [
      "ความเสี่ยงคงเหลือก่อนมาตรการ; ความเสี่ยงโดยธรรมชาติหลังมาตรการ",
      "ระดับความเสี่ยงที่เต็มใจรับก่อนมาตรการ; ขอบเขตความเสี่ยงที่ยอมให้เบี่ยงเบนหลังมาตรการ",
      "ความเสี่ยงโดยธรรมชาติก่อนมาตรการ; ความเสี่ยงคงเหลือหลังมาตรการ",
      "ความเสี่ยงที่โอนก่อนมาตรการ; ความเสี่ยงที่หลีกเลี่ยงหลังมาตรการ"
    ],
    "explanation_th": "Inherent risk ยังไม่พิจารณาผลของมาตรการ ส่วน Residual risk คือความเสี่ยงที่เหลือหลังใช้มาตรการ ค่าหลังไม่จำเป็นต้องเป็นศูนย์หรือได้รับการยอมรับแล้ว\n\nA: เป็นการสลับความหมายของความเสี่ยงก่อนมาตรการกับความเสี่ยงที่เหลือ\nB: Risk appetite และ Risk tolerance เป็นขอบเขตขององค์กร ไม่ใช่ค่าประมาณความเสี่ยงสองช่วงนี้\nD: โจทย์ไม่ได้ระบุการประกันหรือโอนความเสี่ยง และไม่ได้ระบุการยุติกิจกรรมเสี่ยง",
    "explanation_detail": {
      "correct": {
        "en": "Inherent risk excludes the effect of controls; residual risk is the exposure remaining after them. The latter need not be zero or accepted.",
        "th": "Inherent risk ยังไม่พิจารณาผลของมาตรการ ส่วน Residual risk คือความเสี่ยงที่เหลือหลังใช้มาตรการ ค่าหลังไม่จำเป็นต้องเป็นศูนย์หรือได้รับการยอมรับแล้ว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This reverses the before-control and remaining-risk meanings.",
          "text_th": "เป็นการสลับความหมายของความเสี่ยงก่อนมาตรการกับความเสี่ยงที่เหลือ"
        },
        {
          "letter": "B",
          "text_en": "Appetite and tolerance express organizational boundaries, not these two exposure estimates.",
          "text_th": "Risk appetite และ Risk tolerance เป็นขอบเขตขององค์กร ไม่ใช่ค่าประมาณความเสี่ยงสองช่วงนี้"
        },
        {
          "letter": "D",
          "text_en": "Neither insurance/transfer nor ending the risky activity is stated.",
          "text_th": "โจทย์ไม่ได้ระบุการประกันหรือโอนความเสี่ยง และไม่ได้ระบุการยุติกิจกรรมเสี่ยง"
        }
      ]
    }
  },
  {
    "id": 1049,
    "dom": 1,
    "question": "For a simple loss estimate, an equipment asset is valued at USD60,000. One specified incident is expected to destroy 30% of that value. Using SLE = asset value × exposure fraction, what is the estimated loss for one such incident?",
    "options": [
      "USD6,000 per incident",
      "USD42,000 per incident",
      "USD18,000 per incident",
      "USD60,000 per incident"
    ],
    "correct_idx": 2,
    "explanation": "60,000 × 0.30 = 18,000 dollars for one incident. No annual occurrence rate is supplied, so this is not an annualized estimate.\n\nA: 6,000 is 10% of 60,000, not the supplied 30% exposure.\nB: 42,000 is the value remaining after a 30% loss, not the expected loss.\nD: The full asset value assumes 100% loss rather than the stated exposure fraction.",
    "short_explanation_en": "60,000 × 0.30 = 18,000 dollars for one incident. No annual occurrence rate is supplied, so this is not an annualized estimate.",
    "question_th": "ในการประมาณความเสียหายอย่างง่าย อุปกรณ์มีมูลค่า 60,000 ดอลลาร์สหรัฐ เหตุการณ์ที่ระบุหนึ่งครั้งคาดว่าจะทำลายมูลค่านั้น 30% เมื่อใช้ SLE = มูลค่าทรัพย์สิน × สัดส่วนความเสียหาย ค่าความเสียหายโดยประมาณต่อเหตุการณ์นี้หนึ่งครั้งเท่ากับเท่าใด?",
    "options_th": [
      "6,000 ดอลลาร์สหรัฐต่อเหตุการณ์",
      "42,000 ดอลลาร์สหรัฐต่อเหตุการณ์",
      "18,000 ดอลลาร์สหรัฐต่อเหตุการณ์",
      "60,000 ดอลลาร์สหรัฐต่อเหตุการณ์"
    ],
    "explanation_th": "60,000 × 0.30 = 18,000 ดอลลาร์ต่อเหตุการณ์หนึ่งครั้ง ไม่มีอัตราเกิดรายปี จึงยังไม่ใช่ค่าความเสียหายรายปี\n\nA: 6,000 เท่ากับ 10% ของ 60,000 ไม่ใช่สัดส่วนความเสียหาย 30% ที่กำหนด\nB: 42,000 เป็นมูลค่าที่เหลือหลังเสียหาย 30% ไม่ใช่มูลค่าความเสียหายที่คาด\nD: มูลค่าทั้งหมดเท่ากับสมมติให้เสียหาย 100% แทนสัดส่วนที่กำหนด",
    "explanation_detail": {
      "correct": {
        "en": "60,000 × 0.30 = 18,000 dollars for one incident. No annual occurrence rate is supplied, so this is not an annualized estimate.",
        "th": "60,000 × 0.30 = 18,000 ดอลลาร์ต่อเหตุการณ์หนึ่งครั้ง ไม่มีอัตราเกิดรายปี จึงยังไม่ใช่ค่าความเสียหายรายปี"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "6,000 is 10% of 60,000, not the supplied 30% exposure.",
          "text_th": "6,000 เท่ากับ 10% ของ 60,000 ไม่ใช่สัดส่วนความเสียหาย 30% ที่กำหนด"
        },
        {
          "letter": "B",
          "text_en": "42,000 is the value remaining after a 30% loss, not the expected loss.",
          "text_th": "42,000 เป็นมูลค่าที่เหลือหลังเสียหาย 30% ไม่ใช่มูลค่าความเสียหายที่คาด"
        },
        {
          "letter": "D",
          "text_en": "The full asset value assumes 100% loss rather than the stated exposure fraction.",
          "text_th": "มูลค่าทั้งหมดเท่ากับสมมติให้เสียหาย 100% แทนสัดส่วนที่กำหนด"
        }
      ]
    }
  },
  {
    "id": 1050,
    "dom": 1,
    "question": "A risk model estimates a loss of USD12,000 for each specified event and an average occurrence rate of 0.25 events per year. Using ALE = single-event loss × annual occurrence rate, what is the annualized loss estimate?",
    "options": [
      "USD12,000 per year",
      "USD48,000 per year",
      "USD3,000 per year",
      "USD3,000 per event"
    ],
    "correct_idx": 2,
    "explanation": "12,000 × 0.25 = 3,000 dollars per year. It is a model-based annual expectation, not a guarantee of spending or loss in any one year.\n\nA: This ignores the occurrence rate and treats the single-event loss as an annual amount.\nB: Dividing by 0.25 reverses the required annualization; the given rate must be multiplied.\nD: The amount is annualized; the supplied loss per event remains 12,000 dollars.",
    "short_explanation_en": "12,000 × 0.25 = 3,000 dollars per year. It is a model-based annual expectation, not a guarantee of spending or loss in any one year.",
    "question_th": "แบบจำลองความเสี่ยงประมาณความเสียหาย 12,000 ดอลลาร์สหรัฐต่อเหตุการณ์ที่ระบุ และอัตราเกิดเฉลี่ย 0.25 เหตุการณ์ต่อปี เมื่อใช้ ALE = ความเสียหายต่อเหตุการณ์ × อัตราเกิดรายปี ค่าความเสียหายรายปีโดยประมาณเท่ากับเท่าใด?",
    "options_th": [
      "12,000 ดอลลาร์สหรัฐต่อปี",
      "48,000 ดอลลาร์สหรัฐต่อปี",
      "3,000 ดอลลาร์สหรัฐต่อปี",
      "3,000 ดอลลาร์สหรัฐต่อเหตุการณ์"
    ],
    "explanation_th": "12,000 × 0.25 = 3,000 ดอลลาร์ต่อปี เป็นค่าคาดหมายรายปีจากแบบจำลอง ไม่ใช่การรับประกันค่าใช้จ่ายหรือความเสียหายในปีใดปีหนึ่ง\n\nA: เป็นการละเลยอัตราเกิดและนำความเสียหายต่อเหตุการณ์มาเป็นค่ารายปี\nB: การหารด้วย 0.25 สวนทางกับสูตรรายปีที่กำหนด ต้องคูณด้วยอัตราเกิด\nD: จำนวนนี้เป็นค่ารายปี ส่วนความเสียหายต่อเหตุการณ์ที่ให้มายังคงเป็น 12,000 ดอลลาร์",
    "explanation_detail": {
      "correct": {
        "en": "12,000 × 0.25 = 3,000 dollars per year. It is a model-based annual expectation, not a guarantee of spending or loss in any one year.",
        "th": "12,000 × 0.25 = 3,000 ดอลลาร์ต่อปี เป็นค่าคาดหมายรายปีจากแบบจำลอง ไม่ใช่การรับประกันค่าใช้จ่ายหรือความเสียหายในปีใดปีหนึ่ง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This ignores the occurrence rate and treats the single-event loss as an annual amount.",
          "text_th": "เป็นการละเลยอัตราเกิดและนำความเสียหายต่อเหตุการณ์มาเป็นค่ารายปี"
        },
        {
          "letter": "B",
          "text_en": "Dividing by 0.25 reverses the required annualization; the given rate must be multiplied.",
          "text_th": "การหารด้วย 0.25 สวนทางกับสูตรรายปีที่กำหนด ต้องคูณด้วยอัตราเกิด"
        },
        {
          "letter": "D",
          "text_en": "The amount is annualized; the supplied loss per event remains 12,000 dollars.",
          "text_th": "จำนวนนี้เป็นค่ารายปี ส่วนความเสียหายต่อเหตุการณ์ที่ให้มายังคงเป็น 12,000 ดอลลาร์"
        }
      ]
    }
  },
  {
    "id": 1051,
    "dom": 1,
    "question": "For the next year, two controls have comparable all-in annual costs and expected loss-reduction estimates. A costs USD3,000 and reduces expected loss by USD8,000; B costs USD6,000 and reduces it by USD7,000. A binding internal requirement also mandates privileged-action logging. B provides that logging; A does not, and no separate logging control is available. Which recommendation best uses the supplied evidence?",
    "options": [
      "Recommend A because its larger net benefit overrides the logging requirement",
      "Recommend B because it meets the binding requirement and has a positive net expected benefit",
      "Accept the risk because neither control removes every possible loss",
      "Reject B because a control cost above A cannot be justified"
    ],
    "correct_idx": 1,
    "explanation": "B meets the stated constraint and its estimated reduction exceeds its cost by 1,000 dollars over the same year. A has a larger net estimate but fails the binding requirement.\n\nA: A favorable estimate does not authorize ignoring a binding internal requirement.\nC: Complete risk elimination is not a prerequisite for a defensible treatment choice.\nD: Relative price alone ignores mandatory capabilities and the positive supplied benefit of B.",
    "short_explanation_en": "B meets the stated constraint and its estimated reduction exceeds its cost by 1,000 dollars over the same year. A has a larger net estimate but fails the binding requirement.",
    "question_th": "สำหรับปีหน้า มาตรการสองแบบมีค่าใช้จ่ายรวมต่อปีและค่าประมาณการลดความเสียหายที่คาดหมายซึ่งเปรียบเทียบกันได้ A มีค่าใช้จ่าย 3,000 ดอลลาร์สหรัฐและลดความเสียหายที่คาดหมายได้ 8,000 ดอลลาร์ B มีค่าใช้จ่าย 6,000 ดอลลาร์และลดได้ 7,000 ดอลลาร์ ข้อกำหนดภายในที่มีผลบังคับยังสั่งให้บันทึกการกระทำที่ใช้สิทธิ์พิเศษ B บันทึกได้ แต่ A ทำไม่ได้ และไม่มีมาตรการบันทึกแยกต่างหาก ข้อเสนอใดใช้หลักฐานนี้ได้เหมาะสมที่สุด?",
    "options_th": [
      "เสนอ A เพราะผลประโยชน์สุทธิที่สูงกว่ามีอำนาจเหนือข้อกำหนดบันทึก",
      "เสนอ B เพราะตรงข้อกำหนดที่มีผลบังคับและมีผลประโยชน์คาดหมายสุทธิเป็นบวก",
      "ยอมรับความเสี่ยงเพราะไม่มีมาตรการใดกำจัดความเสียหายที่เป็นไปได้ทั้งหมด",
      "ปฏิเสธ B เพราะค่าใช้จ่ายที่สูงกว่า A ไม่อาจมีเหตุผลรองรับ"
    ],
    "explanation_th": "B ตรงเงื่อนไขที่ระบุและลดความเสียหายได้มากกว่าค่าใช้จ่าย 1,000 ดอลลาร์ในปีเดียวกัน A มีผลประโยชน์สุทธิสูงกว่าแต่ไม่ตรงข้อกำหนดที่มีผลบังคับ\n\nA: ค่าประมาณที่คุ้มค่าไม่ได้ให้อำนาจละเลยข้อกำหนดภายในที่มีผลบังคับ\nC: การกำจัดความเสี่ยงทั้งหมดไม่ใช่เงื่อนไขจำเป็นก่อนเลือกวิธีจัดการที่มีเหตุผล\nD: การดูราคาเปรียบเทียบเพียงอย่างเดียวละเลยความสามารถที่ต้องมีและผลประโยชน์เป็นบวกของ B ตามข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "B meets the stated constraint and its estimated reduction exceeds its cost by 1,000 dollars over the same year. A has a larger net estimate but fails the binding requirement.",
        "th": "B ตรงเงื่อนไขที่ระบุและลดความเสียหายได้มากกว่าค่าใช้จ่าย 1,000 ดอลลาร์ในปีเดียวกัน A มีผลประโยชน์สุทธิสูงกว่าแต่ไม่ตรงข้อกำหนดที่มีผลบังคับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A favorable estimate does not authorize ignoring a binding internal requirement.",
          "text_th": "ค่าประมาณที่คุ้มค่าไม่ได้ให้อำนาจละเลยข้อกำหนดภายในที่มีผลบังคับ"
        },
        {
          "letter": "C",
          "text_en": "Complete risk elimination is not a prerequisite for a defensible treatment choice.",
          "text_th": "การกำจัดความเสี่ยงทั้งหมดไม่ใช่เงื่อนไขจำเป็นก่อนเลือกวิธีจัดการที่มีเหตุผล"
        },
        {
          "letter": "D",
          "text_en": "Relative price alone ignores mandatory capabilities and the positive supplied benefit of B.",
          "text_th": "การดูราคาเปรียบเทียบเพียงอย่างเดียวละเลยความสามารถที่ต้องมีและผลประโยชน์เป็นบวกของ B ตามข้อมูล"
        }
      ]
    }
  },
  {
    "id": 1052,
    "dom": 1,
    "question": "A team's approved matrix rates high-likelihood/high-impact risks as Critical and high-likelihood/low-impact risks as Medium. Issue A has 40 findings, high likelihood and low business impact. Issue B has two findings, high likelihood and high business impact. Policy treats Critical risks before Medium risks. Which priority follows this assessment?",
    "options": [
      "Treat A first because its larger finding count establishes greater risk",
      "Treat B first because its likelihood and impact place it in the Critical category",
      "Treat both as equal because their likelihood ratings are the same",
      "Postpone both because no monetary loss estimates are available"
    ],
    "correct_idx": 1,
    "explanation": "The supplied matrix and treatment policy prioritize B. Finding counts alone do not determine the assessed business risk.\n\nA: The policy uses likelihood and impact, not the raw number of findings.\nC: Equal likelihood does not erase the stated difference in business impact.\nD: The approved qualitative matrix supports this priority without monetary estimates.",
    "short_explanation_en": "The supplied matrix and treatment policy prioritize B. Finding counts alone do not determine the assessed business risk.",
    "question_th": "เมทริกซ์ที่ทีมอนุมัติจัดความเสี่ยงที่มีโอกาสเกิดสูงและผลกระทบสูงเป็น Critical ส่วนโอกาสเกิดสูงและผลกระทบต่ำเป็น Medium ประเด็น A มีข้อค้นพบ 40 รายการ โอกาสเกิดสูง และผลกระทบทางธุรกิจต่ำ ประเด็น B มีสองรายการ โอกาสเกิดสูง และผลกระทบทางธุรกิจสูง นโยบายให้จัดการ Critical ก่อน Medium การจัดลำดับใดเป็นไปตามการประเมินนี้?",
    "options_th": [
      "จัดการ A ก่อน เพราะจำนวนข้อค้นพบมากกว่ายืนยันว่าความเสี่ยงสูงกว่า",
      "จัดการ B ก่อน เพราะโอกาสเกิดและผลกระทบทำให้อยู่ในกลุ่ม Critical",
      "จัดทั้งสองให้เท่ากัน เพราะมีระดับโอกาสเกิดเท่ากัน",
      "เลื่อนทั้งสองออกไป เพราะไม่มีค่าประมาณความเสียหายเป็นเงิน"
    ],
    "explanation_th": "เมทริกซ์และนโยบายที่ให้มาจัด B ไว้ก่อน จำนวนข้อค้นพบเพียงอย่างเดียวไม่ได้กำหนดความเสี่ยงทางธุรกิจที่ประเมิน\n\nA: นโยบายใช้โอกาสเกิดและผลกระทบ ไม่ใช่จำนวนข้อค้นพบดิบ\nC: โอกาสเกิดเท่ากันไม่ได้ลบความแตกต่างของผลกระทบทางธุรกิจที่ระบุ\nD: เมทริกซ์เชิงคุณภาพที่อนุมัติรองรับการจัดลำดับนี้ได้โดยไม่ต้องประมาณเป็นเงิน",
    "explanation_detail": {
      "correct": {
        "en": "The supplied matrix and treatment policy prioritize B. Finding counts alone do not determine the assessed business risk.",
        "th": "เมทริกซ์และนโยบายที่ให้มาจัด B ไว้ก่อน จำนวนข้อค้นพบเพียงอย่างเดียวไม่ได้กำหนดความเสี่ยงทางธุรกิจที่ประเมิน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The policy uses likelihood and impact, not the raw number of findings.",
          "text_th": "นโยบายใช้โอกาสเกิดและผลกระทบ ไม่ใช่จำนวนข้อค้นพบดิบ"
        },
        {
          "letter": "C",
          "text_en": "Equal likelihood does not erase the stated difference in business impact.",
          "text_th": "โอกาสเกิดเท่ากันไม่ได้ลบความแตกต่างของผลกระทบทางธุรกิจที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "The approved qualitative matrix supports this priority without monetary estimates.",
          "text_th": "เมทริกซ์เชิงคุณภาพที่อนุมัติรองรับการจัดลำดับนี้ได้โดยไม่ต้องประมาณเป็นเงิน"
        }
      ]
    }
  },
  {
    "id": 1053,
    "dom": 1,
    "question": "A team closes a risk-treatment action after installing a required second-approver control. A subsequent controlled test shows that one user can still authorize the transaction alone. The asset and business use have not changed. Which response best completes risk monitoring and review?",
    "options": [
      "Keep the risk closed because installation completed the approved action",
      "Record a new asset owner without revisiting the control assessment",
      "Reclassify the test as an accepted exception without authorization",
      "Reassess remaining exposure and revise the treatment using the failed test evidence"
    ],
    "correct_idx": 3,
    "explanation": "Observed control ineffectiveness challenges the assumed reduction. Monitoring should update residual-risk assessment and treatment, not equate installation with effectiveness.\n\nA: Installation alone does not demonstrate that the intended risk-reduction objective is met.\nB: Changing an ownership entry does not address the observed failure of the control.\nC: Acceptance requires appropriate authority; the failed test does not itself grant an exception.",
    "short_explanation_en": "Observed control ineffectiveness challenges the assumed reduction. Monitoring should update residual-risk assessment and treatment, not equate installation with effectiveness.",
    "question_th": "ทีมปิดงานจัดการความเสี่ยงหลังติดตั้งมาตรการที่กำหนดให้มีผู้อนุมัติคนที่สอง ต่อมาการทดสอบแบบควบคุมพบว่าผู้ใช้คนเดียวยังอนุมัติธุรกรรมได้ ทรัพย์สินและการใช้งานทางธุรกิจไม่ได้เปลี่ยน การตอบสนองใดทำให้การติดตามและทบทวนความเสี่ยงสมบูรณ์ที่สุด?",
    "options_th": [
      "คงสถานะปิดความเสี่ยง เพราะติดตั้งเสร็จตามงานที่อนุมัติแล้ว",
      "เปลี่ยนเจ้าของทรัพย์สินในทะเบียนโดยไม่ทบทวนการประเมินมาตรการ",
      "จัดการทดสอบนั้นเป็นข้อยกเว้นที่ยอมรับแล้วโดยไม่ขออนุมัติ",
      "ประเมินความเสี่ยงคงเหลือใหม่และปรับวิธีจัดการโดยใช้หลักฐานจากการทดสอบที่ไม่ผ่าน"
    ],
    "explanation_th": "การพบว่ามาตรการไม่มีประสิทธิผลทำให้ต้องทบทวนการลดความเสี่ยงที่เคยสมมติไว้ การติดตามควรปรับการประเมินความเสี่ยงคงเหลือและวิธีจัดการ ไม่ใช่ถือว่าติดตั้งแล้วเท่ากับได้ผล\n\nA: การติดตั้งเพียงอย่างเดียวไม่ได้แสดงว่าบรรลุวัตถุประสงค์ลดความเสี่ยง\nB: การแก้เจ้าของในทะเบียนไม่ได้แก้การทำงานล้มเหลวของมาตรการที่พบ\nC: การยอมรับต้องมีอำนาจที่เหมาะสม ผลทดสอบที่ไม่ผ่านไม่ได้ให้อำนาจยกเว้นด้วยตัวเอง",
    "explanation_detail": {
      "correct": {
        "en": "Observed control ineffectiveness challenges the assumed reduction. Monitoring should update residual-risk assessment and treatment, not equate installation with effectiveness.",
        "th": "การพบว่ามาตรการไม่มีประสิทธิผลทำให้ต้องทบทวนการลดความเสี่ยงที่เคยสมมติไว้ การติดตามควรปรับการประเมินความเสี่ยงคงเหลือและวิธีจัดการ ไม่ใช่ถือว่าติดตั้งแล้วเท่ากับได้ผล"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Installation alone does not demonstrate that the intended risk-reduction objective is met.",
          "text_th": "การติดตั้งเพียงอย่างเดียวไม่ได้แสดงว่าบรรลุวัตถุประสงค์ลดความเสี่ยง"
        },
        {
          "letter": "B",
          "text_en": "Changing an ownership entry does not address the observed failure of the control.",
          "text_th": "การแก้เจ้าของในทะเบียนไม่ได้แก้การทำงานล้มเหลวของมาตรการที่พบ"
        },
        {
          "letter": "C",
          "text_en": "Acceptance requires appropriate authority; the failed test does not itself grant an exception.",
          "text_th": "การยอมรับต้องมีอำนาจที่เหมาะสม ผลทดสอบที่ไม่ผ่านไม่ได้ให้อำนาจยกเว้นด้วยตัวเอง"
        }
      ]
    }
  },
  {
    "id": 1054,
    "dom": 1,
    "question": "A mandatory standard says that every new service account must have an assigned owner. Administrators need a document specifying the sequence for recording that owner, creating the account and verifying the assignment. Which document best meets this need?",
    "options": [
      "A policy explaining why account ownership matters",
      "A standard restating that an owner is mandatory",
      "A procedure implementing the account-ownership requirement",
      "A guideline suggesting optional ownership practices"
    ],
    "correct_idx": 2,
    "explanation": "A procedure specifies operational steps. It implements the standard rather than replacing the mandatory requirement.\n\nA: A policy supplies direction and purpose rather than the requested operational sequence.\nB: The requirement already exists; repeating it does not provide the implementation steps.\nD: Optional recommendations do not supply the required operational procedure.",
    "short_explanation_en": "A procedure specifies operational steps. It implements the standard rather than replacing the mandatory requirement.",
    "question_th": "มาตรฐานที่มีผลบังคับกำหนดว่าบัญชีบริการใหม่ทุกบัญชีต้องมีเจ้าของที่ได้รับมอบหมาย ผู้ดูแลระบบต้องการเอกสารที่ระบุลำดับการบันทึกเจ้าของ การสร้างบัญชี และการตรวจสอบการกำหนดเจ้าของ เอกสารใดตรงความต้องการที่สุด?",
    "options_th": [
      "นโยบายอธิบายเหตุผลที่ต้องมีเจ้าของบัญชี",
      "มาตรฐานย้ำว่าต้องมีเจ้าของ",
      "ระเบียบปฏิบัติที่นำข้อกำหนดเจ้าของบัญชีไปดำเนินการ",
      "แนวปฏิบัติแนะนำเรื่องเจ้าของบัญชีแบบเลือกทำได้"
    ],
    "explanation_th": "Procedure ระบุขั้นตอนปฏิบัติงาน เพื่อนำมาตรฐานไปใช้ ไม่ได้แทนที่ข้อกำหนดที่มีผลบังคับ\n\nA: นโยบายให้ทิศทางและเหตุผล ไม่ใช่ลำดับปฏิบัติงานที่ต้องการ\nB: ข้อกำหนดมีอยู่แล้ว การย้ำไม่ได้ให้ขั้นตอนนำไปดำเนินการ\nD: คำแนะนำที่เลือกทำได้ไม่ได้ให้ระเบียบปฏิบัติงานที่ต้องใช้",
    "explanation_detail": {
      "correct": {
        "en": "A procedure specifies operational steps. It implements the standard rather than replacing the mandatory requirement.",
        "th": "Procedure ระบุขั้นตอนปฏิบัติงาน เพื่อนำมาตรฐานไปใช้ ไม่ได้แทนที่ข้อกำหนดที่มีผลบังคับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A policy supplies direction and purpose rather than the requested operational sequence.",
          "text_th": "นโยบายให้ทิศทางและเหตุผล ไม่ใช่ลำดับปฏิบัติงานที่ต้องการ"
        },
        {
          "letter": "B",
          "text_en": "The requirement already exists; repeating it does not provide the implementation steps.",
          "text_th": "ข้อกำหนดมีอยู่แล้ว การย้ำไม่ได้ให้ขั้นตอนนำไปดำเนินการ"
        },
        {
          "letter": "D",
          "text_en": "Optional recommendations do not supply the required operational procedure.",
          "text_th": "คำแนะนำที่เลือกทำได้ไม่ได้ให้ระเบียบปฏิบัติงานที่ต้องใช้"
        }
      ]
    }
  },
  {
    "id": 1055,
    "dom": 1,
    "question": "An organization's mandatory password standard requires at least 14 characters. A nonbinding usability guideline recommends an easier-to-type 10-character pattern. No exception has been approved. An administrator must configure a new system. Which choice follows the document roles stated here?",
    "options": [
      "Enforce 10 characters because the guideline addresses usability",
      "Enforce at least 14 characters and raise the conflicting recommendation for review",
      "Let each user choose which document to follow",
      "Enforce 12 characters as a compromise between the documents"
    ],
    "correct_idx": 1,
    "explanation": "The mandatory standard governs this configuration. A nonbinding guideline does not create an exception.\n\nA: The guideline's subject does not override the mandatory length requirement.\nC: Users are not given authority to waive the mandatory standard.\nD: An arbitrary midpoint still fails the stated 14-character minimum.",
    "short_explanation_en": "The mandatory standard governs this configuration. A nonbinding guideline does not create an exception.",
    "question_th": "มาตรฐานรหัสผ่านที่มีผลบังคับขององค์กรกำหนดอย่างน้อย 14 อักขระ แต่แนวปฏิบัติด้านความสะดวกใช้ที่ไม่บังคับแนะนำรูปแบบ 10 อักขระที่พิมพ์ง่ายกว่า ยังไม่มีการอนุมัติข้อยกเว้น ผู้ดูแลระบบต้องตั้งค่าระบบใหม่ ทางเลือกใดสอดคล้องกับบทบาทเอกสารตามที่ระบุ?",
    "options_th": [
      "บังคับ 10 อักขระเพราะแนวปฏิบัติกล่าวถึงความสะดวกใช้",
      "บังคับอย่างน้อย 14 อักขระและเสนอให้ทบทวนคำแนะนำที่ขัดกัน",
      "ให้ผู้ใช้แต่ละคนเลือกว่าจะทำตามเอกสารใด",
      "บังคับ 12 อักขระเพื่อประนีประนอมระหว่างสองเอกสาร"
    ],
    "explanation_th": "มาตรฐานที่มีผลบังคับกำกับการตั้งค่านี้ แนวปฏิบัติที่ไม่บังคับไม่ได้สร้างข้อยกเว้น\n\nA: หัวข้อของแนวปฏิบัติไม่ได้มีอำนาจเหนือข้อกำหนดความยาวที่บังคับ\nC: โจทย์ไม่ได้ให้อำนาจผู้ใช้ยกเว้นมาตรฐานที่บังคับ\nD: ค่ากึ่งกลางที่ตั้งขึ้นเองยังไม่ผ่านขั้นต่ำ 14 อักขระที่ระบุ",
    "explanation_detail": {
      "correct": {
        "en": "The mandatory standard governs this configuration. A nonbinding guideline does not create an exception.",
        "th": "มาตรฐานที่มีผลบังคับกำกับการตั้งค่านี้ แนวปฏิบัติที่ไม่บังคับไม่ได้สร้างข้อยกเว้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The guideline's subject does not override the mandatory length requirement.",
          "text_th": "หัวข้อของแนวปฏิบัติไม่ได้มีอำนาจเหนือข้อกำหนดความยาวที่บังคับ"
        },
        {
          "letter": "C",
          "text_en": "Users are not given authority to waive the mandatory standard.",
          "text_th": "โจทย์ไม่ได้ให้อำนาจผู้ใช้ยกเว้นมาตรฐานที่บังคับ"
        },
        {
          "letter": "D",
          "text_en": "An arbitrary midpoint still fails the stated 14-character minimum.",
          "text_th": "ค่ากึ่งกลางที่ตั้งขึ้นเองยังไม่ผ่านขั้นต่ำ 14 อักขระที่ระบุ"
        }
      ]
    }
  },
  {
    "id": 1056,
    "dom": 1,
    "question": "An organization confirms that a regulator's access-review requirement applies to its service. A vendor brochure suggests a different review approach, and an industry framework offers voluntary outcomes. Neither has been adopted as an internal obligation. Which statement correctly identifies the binding requirement in this case?",
    "options": [
      "The vendor recommendation takes precedence for its product",
      "The voluntary framework becomes binding because it is widely used",
      "The three sources have equal mandatory force",
      "The applicable regulatory requirement must be met"
    ],
    "correct_idx": 3,
    "explanation": "Applicability is explicitly supplied. Voluntary framework outcomes and a vendor suggestion do not displace that requirement.\n\nA: A product recommendation does not override the stated applicable regulation.\nB: Popularity does not itself create the obligation excluded by the scenario.\nC: The scenario distinguishes an applicable requirement from two nonbinding sources.",
    "short_explanation_en": "Applicability is explicitly supplied. Voluntary framework outcomes and a vendor suggestion do not displace that requirement.",
    "question_th": "องค์กรยืนยันว่าข้อกำหนดทบทวนสิทธิ์ของหน่วยงานกำกับใช้กับบริการของตน โบรชัวร์ผู้ขายแนะนำแนวทางทบทวนอีกแบบ ส่วนกรอบอุตสาหกรรมให้ผลลัพธ์แบบสมัครใจ ทั้งสองอย่างยังไม่ได้รับมาบังคับใช้ภายใน ข้อใดระบุข้อกำหนดที่มีผลบังคับในกรณีนี้ได้ถูกต้อง?",
    "options_th": [
      "คำแนะนำผู้ขายมีลำดับเหนือกว่าสำหรับผลิตภัณฑ์ของตน",
      "กรอบสมัครใจกลายเป็นข้อบังคับเพราะมีผู้ใช้อย่างแพร่หลาย",
      "แหล่งทั้งสามมีผลบังคับเท่ากัน",
      "ต้องปฏิบัติตามข้อกำหนดของหน่วยงานกำกับที่ใช้กับองค์กร"
    ],
    "explanation_th": "โจทย์ระบุการมีผลใช้บังคับชัดเจน ผลลัพธ์ตามกรอบสมัครใจและคำแนะนำผู้ขายไม่ได้แทนที่ข้อกำหนดนั้น\n\nA: คำแนะนำผลิตภัณฑ์ไม่ได้มีอำนาจเหนือข้อกำหนดของหน่วยงานกำกับตามโจทย์\nB: ความนิยมไม่ได้สร้างข้อผูกพันที่โจทย์ระบุว่ายังไม่มี\nC: โจทย์แยกข้อกำหนดที่มีผลบังคับออกจากอีกสองแหล่งที่ไม่บังคับ",
    "explanation_detail": {
      "correct": {
        "en": "Applicability is explicitly supplied. Voluntary framework outcomes and a vendor suggestion do not displace that requirement.",
        "th": "โจทย์ระบุการมีผลใช้บังคับชัดเจน ผลลัพธ์ตามกรอบสมัครใจและคำแนะนำผู้ขายไม่ได้แทนที่ข้อกำหนดนั้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A product recommendation does not override the stated applicable regulation.",
          "text_th": "คำแนะนำผลิตภัณฑ์ไม่ได้มีอำนาจเหนือข้อกำหนดของหน่วยงานกำกับตามโจทย์"
        },
        {
          "letter": "B",
          "text_en": "Popularity does not itself create the obligation excluded by the scenario.",
          "text_th": "ความนิยมไม่ได้สร้างข้อผูกพันที่โจทย์ระบุว่ายังไม่มี"
        },
        {
          "letter": "C",
          "text_en": "The scenario distinguishes an applicable requirement from two nonbinding sources.",
          "text_th": "โจทย์แยกข้อกำหนดที่มีผลบังคับออกจากอีกสองแหล่งที่ไม่บังคับ"
        }
      ]
    }
  },
  {
    "id": 1057,
    "dom": 1,
    "question": "An assessment confirms compliance with a defined checklist for an existing service. A separate risk assessment finds an exposed data-sharing path outside that checklist's scope. What is the most defensible conclusion?",
    "options": [
      "The compliance result proves that the data-sharing path is acceptable",
      "The compliance result can stand within its scope while the additional risk still needs assessment and treatment",
      "The new finding automatically invalidates every completed checklist test",
      "The risk can be deferred until a checklist requirement explicitly names it"
    ],
    "correct_idx": 1,
    "explanation": "A scoped compliance result does not establish complete security. The new evidence must be evaluated on its own merits.\n\nA: A finding outside the checklist is not accepted merely by passing that checklist.\nC: Additional risk does not by itself disprove tests that were valid within their stated scope.\nD: Risk management is not limited to risks already enumerated in a compliance checklist.",
    "short_explanation_en": "A scoped compliance result does not establish complete security. The new evidence must be evaluated on its own merits.",
    "question_th": "การประเมินยืนยันว่าบริการเดิมผ่านรายการตรวจตามข้อกำหนดที่ระบุ การประเมินความเสี่ยงแยกต่างหากพบเส้นทางแบ่งปันข้อมูลที่เปิดเผยความเสี่ยงและอยู่นอกขอบเขตรายการตรวจนั้น ข้อสรุปใดมีเหตุผลรองรับมากที่สุด?",
    "options_th": [
      "ผลการปฏิบัติตามข้อกำหนดยืนยันว่าเส้นทางแบ่งปันข้อมูลยอมรับได้",
      "ผลการปฏิบัติตามข้อกำหนดยังคงใช้ได้ภายในขอบเขต ขณะที่ความเสี่ยงเพิ่มเติมยังต้องประเมินและจัดการ",
      "ข้อค้นพบใหม่ทำให้การทดสอบทุกรายการที่เสร็จแล้วใช้ไม่ได้โดยอัตโนมัติ",
      "เลื่อนความเสี่ยงนี้ไว้ได้จนกว่ารายการตรวจจะระบุชื่อไว้อย่างชัดเจน"
    ],
    "explanation_th": "ผลตรวจที่มีขอบเขตไม่ได้ยืนยันความปลอดภัยทั้งหมด ต้องประเมินหลักฐานใหม่ตามข้อเท็จจริงของมัน\n\nA: ความเสี่ยงนอกรายการตรวจไม่ได้รับการยอมรับเพียงเพราะผ่านรายการตรวจนั้น\nC: ความเสี่ยงเพิ่มเติมไม่ได้หักล้างการทดสอบที่ถูกต้องภายในขอบเขตด้วยตัวมันเอง\nD: การบริหารความเสี่ยงไม่ได้จำกัดเฉพาะรายการที่ระบุในรายการตรวจตามข้อกำหนดแล้ว",
    "explanation_detail": {
      "correct": {
        "en": "A scoped compliance result does not establish complete security. The new evidence must be evaluated on its own merits.",
        "th": "ผลตรวจที่มีขอบเขตไม่ได้ยืนยันความปลอดภัยทั้งหมด ต้องประเมินหลักฐานใหม่ตามข้อเท็จจริงของมัน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A finding outside the checklist is not accepted merely by passing that checklist.",
          "text_th": "ความเสี่ยงนอกรายการตรวจไม่ได้รับการยอมรับเพียงเพราะผ่านรายการตรวจนั้น"
        },
        {
          "letter": "C",
          "text_en": "Additional risk does not by itself disprove tests that were valid within their stated scope.",
          "text_th": "ความเสี่ยงเพิ่มเติมไม่ได้หักล้างการทดสอบที่ถูกต้องภายในขอบเขตด้วยตัวมันเอง"
        },
        {
          "letter": "D",
          "text_en": "Risk management is not limited to risks already enumerated in a compliance checklist.",
          "text_th": "การบริหารความเสี่ยงไม่ได้จำกัดเฉพาะรายการที่ระบุในรายการตรวจตามข้อกำหนดแล้ว"
        }
      ]
    }
  },
  {
    "id": 1058,
    "dom": 1,
    "question": "A records room already has a functioning door lock. A new sensor records after-hours entry and sends an alert to the duty officer, but it does not block the door or change access rights. What is the new sensor's primary security function in this use?",
    "options": [
      "Detective",
      "Preventive",
      "Corrective",
      "Directive"
    ],
    "correct_idx": 0,
    "explanation": "The specified purpose is discovering and reporting entry. The separate lock performs the described access prevention.\n\nB: The sensor does not block entry or change permission in this scenario.\nC: The sensor reports an event rather than restoring a damaged state.\nD: The sensor detects activity rather than instructing people how to behave.",
    "short_explanation_en": "The specified purpose is discovering and reporting entry. The separate lock performs the described access prevention.",
    "question_th": "ห้องเก็บระเบียนมีระบบล็อกประตูที่ทำงานได้อยู่แล้ว เซนเซอร์ใหม่บันทึกการเข้าหลังเวลางานและแจ้งเจ้าหน้าที่เวร แต่ไม่ได้ขวางประตูหรือเปลี่ยนสิทธิ์เข้าถึง หน้าที่ความปลอดภัยหลักของเซนเซอร์ในการใช้นี้คืออะไร?",
    "options_th": [
      "การตรวจจับ (Detective)",
      "การป้องกัน (Preventive)",
      "การแก้ไขฟื้นสภาพ (Corrective)",
      "การชี้นำพฤติกรรม (Directive)"
    ],
    "explanation_th": "หน้าที่ที่ระบุคือค้นพบและรายงานการเข้า ส่วนล็อกที่แยกต่างหากทำหน้าที่ป้องกันการเข้าถึงตามโจทย์\n\nB: เซนเซอร์ไม่ได้ขวางการเข้าหรือเปลี่ยนสิทธิ์ในสถานการณ์นี้\nC: เซนเซอร์รายงานเหตุการณ์ ไม่ได้ฟื้นสภาพที่เสียหาย\nD: เซนเซอร์ตรวจพบกิจกรรม ไม่ได้สั่งแนวทางปฏิบัติให้บุคคล",
    "explanation_detail": {
      "correct": {
        "en": "The specified purpose is discovering and reporting entry. The separate lock performs the described access prevention.",
        "th": "หน้าที่ที่ระบุคือค้นพบและรายงานการเข้า ส่วนล็อกที่แยกต่างหากทำหน้าที่ป้องกันการเข้าถึงตามโจทย์"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The sensor does not block entry or change permission in this scenario.",
          "text_th": "เซนเซอร์ไม่ได้ขวางการเข้าหรือเปลี่ยนสิทธิ์ในสถานการณ์นี้"
        },
        {
          "letter": "C",
          "text_en": "The sensor reports an event rather than restoring a damaged state.",
          "text_th": "เซนเซอร์รายงานเหตุการณ์ ไม่ได้ฟื้นสภาพที่เสียหาย"
        },
        {
          "letter": "D",
          "text_en": "The sensor detects activity rather than instructing people how to behave.",
          "text_th": "เซนเซอร์ตรวจพบกิจกรรม ไม่ได้สั่งแนวทางปฏิบัติให้บุคคล"
        }
      ]
    }
  },
  {
    "id": 1059,
    "dom": 1,
    "question": "A badge reader at a restricted archive is temporarily unavailable. An approved exception permits an attendant to verify each person's identity and authorization, control entry and record access until repair. The objective remains admitting only authorized people. How is this temporary arrangement best described?",
    "options": [
      "Acceptance of unrestricted archive access",
      "A replacement of the access objective with visitor logging",
      "A compensating control for the unavailable reader",
      "A permanent elimination of the need to repair the reader"
    ],
    "correct_idx": 2,
    "explanation": "The approved alternative addresses the same entry-control objective while the preferred mechanism is unavailable; effectiveness still requires monitoring.\n\nA: Entry remains controlled; the organization has not simply accepted unrestricted access.\nB: The attendant also verifies authorization and controls entry, so logging is not the only objective.\nD: The exception is temporary and does not establish that the repair requirement has ended.",
    "short_explanation_en": "The approved alternative addresses the same entry-control objective while the preferred mechanism is unavailable; effectiveness still requires monitoring.",
    "question_th": "เครื่องอ่านบัตรที่คลังเอกสารจำกัดสิทธิ์ใช้งานไม่ได้ชั่วคราว ข้อยกเว้นที่อนุมัติให้เจ้าหน้าที่ตรวจตัวตนและสิทธิ์ของแต่ละคน ควบคุมการเข้า และบันทึกการเข้าจนกว่าจะซ่อมเสร็จ วัตถุประสงค์ยังคงให้เฉพาะผู้มีสิทธิ์เข้า การจัดการชั่วคราวนี้ควรเรียกว่าอะไร?",
    "options_th": [
      "การยอมรับให้เข้าคลังเอกสารโดยไม่จำกัด",
      "การแทนวัตถุประสงค์ควบคุมการเข้าด้วยการบันทึกผู้มาติดต่อ",
      "มาตรการชดเชยเครื่องอ่านที่ใช้งานไม่ได้",
      "การยกเลิกความจำเป็นต้องซ่อมเครื่องอ่านอย่างถาวร"
    ],
    "explanation_th": "ทางเลือกที่อนุมัติตอบวัตถุประสงค์ควบคุมการเข้าเดียวกันในช่วงที่กลไกหลักใช้ไม่ได้ และยังต้องติดตามประสิทธิผล\n\nA: ยังมีการควบคุมการเข้า องค์กรไม่ได้ยอมรับการเข้าอย่างไม่จำกัดเฉย ๆ\nB: เจ้าหน้าที่ยังตรวจสิทธิ์และควบคุมการเข้า การบันทึกจึงไม่ใช่วัตถุประสงค์เดียว\nD: ข้อยกเว้นเป็นการชั่วคราว ไม่ได้แสดงว่าข้อกำหนดซ่อมสิ้นสุดลง",
    "explanation_detail": {
      "correct": {
        "en": "The approved alternative addresses the same entry-control objective while the preferred mechanism is unavailable; effectiveness still requires monitoring.",
        "th": "ทางเลือกที่อนุมัติตอบวัตถุประสงค์ควบคุมการเข้าเดียวกันในช่วงที่กลไกหลักใช้ไม่ได้ และยังต้องติดตามประสิทธิผล"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Entry remains controlled; the organization has not simply accepted unrestricted access.",
          "text_th": "ยังมีการควบคุมการเข้า องค์กรไม่ได้ยอมรับการเข้าอย่างไม่จำกัดเฉย ๆ"
        },
        {
          "letter": "B",
          "text_en": "The attendant also verifies authorization and controls entry, so logging is not the only objective.",
          "text_th": "เจ้าหน้าที่ยังตรวจสิทธิ์และควบคุมการเข้า การบันทึกจึงไม่ใช่วัตถุประสงค์เดียว"
        },
        {
          "letter": "D",
          "text_en": "The exception is temporary and does not establish that the repair requirement has ended.",
          "text_th": "ข้อยกเว้นเป็นการชั่วคราว ไม่ได้แสดงว่าข้อกำหนดซ่อมสิ้นสุดลง"
        }
      ]
    }
  },
  {
    "id": 1060,
    "dom": 1,
    "question": "One access-control platform denies unapproved badge entry at a door. The same platform also supplies historical entry records for an officer to identify unauthorized attempts during review. Which classification best describes these two uses?",
    "options": [
      "Detective for the entry decision; preventive for the record review",
      "Preventive for the entry decision; detective for the record review",
      "Corrective for both because one platform performs both tasks",
      "Directive for both because access policy governs the platform"
    ],
    "correct_idx": 1,
    "explanation": "Control functions depend on use. Denying entry prevents the specified access, while reviewing records discovers attempted violations.\n\nA: This reverses enforcement at entry and later discovery from records.\nC: Neither stated task restores damage, and one product can perform different functions.\nD: Being governed by policy does not make every implemented function directive.",
    "short_explanation_en": "Control functions depend on use. Denying entry prevents the specified access, while reviewing records discovers attempted violations.",
    "question_th": "แพลตฟอร์มควบคุมการเข้าถึงหนึ่งระบบปฏิเสธบัตรที่ไม่ได้รับอนุมัติเมื่อใช้เข้าประตู ระบบเดียวกันยังให้บันทึกการเข้าย้อนหลังเพื่อให้เจ้าหน้าที่ค้นหาความพยายามเข้าที่ไม่ได้รับอนุญาตระหว่างทบทวน ข้อใดจัดหน้าที่ของการใช้ทั้งสองแบบได้ดีที่สุด?",
    "options_th": [
      "ตรวจจับสำหรับการตัดสินให้เข้า; ป้องกันสำหรับการทบทวนบันทึก",
      "ป้องกันสำหรับการตัดสินให้เข้า; ตรวจจับสำหรับการทบทวนบันทึก",
      "แก้ไขฟื้นสภาพทั้งสองแบบเพราะทำโดยแพลตฟอร์มเดียวกัน",
      "ชี้นำทั้งสองแบบเพราะนโยบายเข้าถึงกำกับแพลตฟอร์ม"
    ],
    "explanation_th": "หน้าที่ของมาตรการขึ้นกับการใช้ การปฏิเสธการเข้าป้องกันการเข้าถึงที่ระบุ ส่วนการทบทวนบันทึกค้นพบความพยายามละเมิด\n\nA: เป็นการสลับระหว่างการบังคับขณะเข้าและการค้นพบภายหลังจากบันทึก\nC: ไม่มีงานใดฟื้นสภาพความเสียหาย และผลิตภัณฑ์เดียวทำหน้าที่ได้ต่างกัน\nD: การถูกกำกับด้วยนโยบายไม่ได้ทำให้ทุกหน้าที่ที่นำไปใช้กลายเป็นมาตรการชี้นำ",
    "explanation_detail": {
      "correct": {
        "en": "Control functions depend on use. Denying entry prevents the specified access, while reviewing records discovers attempted violations.",
        "th": "หน้าที่ของมาตรการขึ้นกับการใช้ การปฏิเสธการเข้าป้องกันการเข้าถึงที่ระบุ ส่วนการทบทวนบันทึกค้นพบความพยายามละเมิด"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This reverses enforcement at entry and later discovery from records.",
          "text_th": "เป็นการสลับระหว่างการบังคับขณะเข้าและการค้นพบภายหลังจากบันทึก"
        },
        {
          "letter": "C",
          "text_en": "Neither stated task restores damage, and one product can perform different functions.",
          "text_th": "ไม่มีงานใดฟื้นสภาพความเสียหาย และผลิตภัณฑ์เดียวทำหน้าที่ได้ต่างกัน"
        },
        {
          "letter": "D",
          "text_en": "Being governed by policy does not make every implemented function directive.",
          "text_th": "การถูกกำกับด้วยนโยบายไม่ได้ทำให้ทุกหน้าที่ที่นำไปใช้กลายเป็นมาตรการชี้นำ"
        }
      ]
    }
  },
  {
    "id": 1061,
    "dom": 1,
    "question": "An engineer finds credible evidence that a deployment defect could interrupt a public emergency-call service. The engineer is authorized to escalate urgent safety risks to the on-call incident lead, who can coordinate a safe response. Which action best supports the ISC2 duty to protect society and infrastructure?",
    "options": [
      "Wait for the next routine report because no outage has occurred",
      "Publish the defect details immediately to demonstrate transparency",
      "Escalate promptly through the authorized urgent-safety channel with the supporting evidence",
      "Disable the service immediately without involving its operators"
    ],
    "correct_idx": 2,
    "explanation": "Prompt authorized escalation addresses potential public harm while enabling coordinated action. The canon does not grant unrestricted disclosure or unsafe operational authority.\n\nA: The credible urgent safety risk warrants the available escalation rather than routine delay.\nB: Public disclosure is not the stated authorized response and may increase risk before coordination.\nD: Uncoordinated disabling could itself harm emergency access and exceeds the stated escalation role.",
    "short_explanation_en": "Prompt authorized escalation addresses potential public harm while enabling coordinated action. The canon does not grant unrestricted disclosure or unsafe operational authority.",
    "question_th": "วิศวกรพบหลักฐานน่าเชื่อถือว่าข้อบกพร่องในการนำระบบขึ้นใช้งานอาจทำให้บริการรับสายฉุกเฉินสาธารณะหยุดชะงัก วิศวกรมีอำนาจส่งต่อความเสี่ยงเร่งด่วนด้านความปลอดภัยให้หัวหน้าเหตุการณ์เวรซึ่งประสานการตอบสนองอย่างปลอดภัยได้ การกระทำใดสนับสนุนหน้าที่ ISC2 ในการปกป้องสังคมและโครงสร้างพื้นฐานได้ดีที่สุด?",
    "options_th": [
      "รอรายงานตามรอบถัดไปเพราะยังไม่เกิดการหยุดให้บริการ",
      "เผยแพร่รายละเอียดข้อบกพร่องทันทีเพื่อแสดงความโปร่งใส",
      "ส่งต่อโดยเร็วผ่านช่องทางความเสี่ยงเร่งด่วนที่มีอำนาจ พร้อมหลักฐานประกอบ",
      "ปิดบริการทันทีโดยไม่ให้ผู้ปฏิบัติงานมีส่วนร่วม"
    ],
    "explanation_th": "การส่งต่อโดยเร็วตามอำนาจช่วยจัดการอันตรายต่อสาธารณะและให้เกิดการประสานงาน หลักจริยธรรมไม่ได้ให้อำนาจเปิดเผยโดยไม่จำกัดหรือดำเนินการที่ไม่ปลอดภัย\n\nA: ความเสี่ยงเร่งด่วนที่น่าเชื่อถือควรใช้ช่องทางส่งต่อที่มี ไม่ใช่รอตามรอบ\nB: การเผยแพร่สาธารณะไม่ใช่การตอบสนองตามอำนาจที่ระบุ และอาจเพิ่มความเสี่ยงก่อนประสานงาน\nD: การปิดโดยไม่ประสานอาจทำให้การเข้าถึงบริการฉุกเฉินเสียหาย และเกินบทบาทส่งต่อที่ระบุ",
    "explanation_detail": {
      "correct": {
        "en": "Prompt authorized escalation addresses potential public harm while enabling coordinated action. The canon does not grant unrestricted disclosure or unsafe operational authority.",
        "th": "การส่งต่อโดยเร็วตามอำนาจช่วยจัดการอันตรายต่อสาธารณะและให้เกิดการประสานงาน หลักจริยธรรมไม่ได้ให้อำนาจเปิดเผยโดยไม่จำกัดหรือดำเนินการที่ไม่ปลอดภัย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The credible urgent safety risk warrants the available escalation rather than routine delay.",
          "text_th": "ความเสี่ยงเร่งด่วนที่น่าเชื่อถือควรใช้ช่องทางส่งต่อที่มี ไม่ใช่รอตามรอบ"
        },
        {
          "letter": "B",
          "text_en": "Public disclosure is not the stated authorized response and may increase risk before coordination.",
          "text_th": "การเผยแพร่สาธารณะไม่ใช่การตอบสนองตามอำนาจที่ระบุ และอาจเพิ่มความเสี่ยงก่อนประสานงาน"
        },
        {
          "letter": "D",
          "text_en": "Uncoordinated disabling could itself harm emergency access and exceeds the stated escalation role.",
          "text_th": "การปิดโดยไม่ประสานอาจทำให้การเข้าถึงบริการฉุกเฉินเสียหาย และเกินบทบาทส่งต่อที่ระบุ"
        }
      ]
    }
  },
  {
    "id": 1062,
    "dom": 1,
    "question": "A manager asks an analyst to change a report so a test not yet performed appears completed before the audit deadline. The analyst is authorized to report actual test status and unresolved limitations. Which response best meets the ISC2 obligation of honest professional conduct?",
    "options": [
      "Mark the test complete if its outcome is expected to be favorable",
      "Omit the test from the report without disclosing the gap",
      "Copy last year's result into the current completion field",
      "Report the actual status and document the unperformed test as an open limitation"
    ],
    "correct_idx": 3,
    "explanation": "Truthful reporting avoids a false assurance claim while making the remaining work visible. A deadline does not justify misrepresenting evidence.\n\nA: An expected result is not evidence that the test occurred.\nB: Concealing a material unfinished test would misrepresent the report's coverage.\nC: Historical results do not establish current test completion.",
    "short_explanation_en": "Truthful reporting avoids a false assurance claim while making the remaining work visible. A deadline does not justify misrepresenting evidence.",
    "question_th": "ผู้จัดการขอให้นักวิเคราะห์แก้รายงานให้การทดสอบที่ยังไม่ได้ทำดูเหมือนเสร็จก่อนกำหนดตรวจสอบ นักวิเคราะห์มีอำนาจรายงานสถานะจริงและข้อจำกัดที่ยังไม่แก้ การตอบสนองใดตรงหน้าที่ความซื่อสัตย์ในวิชาชีพของ ISC2 ได้ดีที่สุด?",
    "options_th": [
      "ระบุว่าทดสอบเสร็จหากคาดว่าผลจะเป็นที่น่าพอใจ",
      "ตัดการทดสอบออกจากรายงานโดยไม่เปิดเผยช่องว่าง",
      "คัดลอกผลปีก่อนลงในช่องสถานะเสร็จของปีนี้",
      "รายงานสถานะจริงและระบุการทดสอบที่ยังไม่ทำเป็นข้อจำกัดที่ยังเปิดอยู่"
    ],
    "explanation_th": "การรายงานตามจริงหลีกเลี่ยงการอ้างความมั่นใจที่ไม่จริงและทำให้งานค้างมองเห็นได้ กำหนดส่งไม่ใช่เหตุให้บิดเบือนหลักฐาน\n\nA: ผลที่คาดไม่ใช่หลักฐานว่าได้ทดสอบแล้ว\nB: การซ่อนการทดสอบสำคัญที่ยังไม่เสร็จทำให้ขอบเขตรายงานคลาดเคลื่อน\nC: ผลในอดีตไม่ได้ยืนยันว่าการทดสอบปัจจุบันเสร็จแล้ว",
    "explanation_detail": {
      "correct": {
        "en": "Truthful reporting avoids a false assurance claim while making the remaining work visible. A deadline does not justify misrepresenting evidence.",
        "th": "การรายงานตามจริงหลีกเลี่ยงการอ้างความมั่นใจที่ไม่จริงและทำให้งานค้างมองเห็นได้ กำหนดส่งไม่ใช่เหตุให้บิดเบือนหลักฐาน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "An expected result is not evidence that the test occurred.",
          "text_th": "ผลที่คาดไม่ใช่หลักฐานว่าได้ทดสอบแล้ว"
        },
        {
          "letter": "B",
          "text_en": "Concealing a material unfinished test would misrepresent the report's coverage.",
          "text_th": "การซ่อนการทดสอบสำคัญที่ยังไม่เสร็จทำให้ขอบเขตรายงานคลาดเคลื่อน"
        },
        {
          "letter": "C",
          "text_en": "Historical results do not establish current test completion.",
          "text_th": "ผลในอดีตไม่ได้ยืนยันว่าการทดสอบปัจจุบันเสร็จแล้ว"
        }
      ]
    }
  },
  {
    "id": 1063,
    "dom": 1,
    "question": "A consultant is assigned to assess a safety-critical control system using a specialized method they have never applied. The engagement permits raising capability limits and bringing in a qualified specialist. Which response best provides competent service to the client?",
    "options": [
      "Complete the assessment alone using the familiar enterprise checklist",
      "Disclose the capability limit and arrange qualified support before making the assessment",
      "Present the assessment as expert work after reading a short summary",
      "Decline the whole engagement without discussing the permitted specialist support"
    ],
    "correct_idx": 1,
    "explanation": "Competent service includes recognizing limits and obtaining suitable expertise within the engagement. This protects the client without pretending expertise or abandoning the work.\n\nA: Familiarity with a different checklist does not establish competence in the required specialized method.\nC: Reading a summary does not substantiate the expert capability being claimed.\nD: The scenario provides a route to competent delivery; immediate withdrawal ignores that available option.",
    "short_explanation_en": "Competent service includes recognizing limits and obtaining suitable expertise within the engagement. This protects the client without pretending expertise or abandoning the work.",
    "question_th": "ที่ปรึกษาได้รับมอบหมายให้ประเมินระบบควบคุมที่สำคัญต่อความปลอดภัยโดยใช้วิธีเฉพาะที่ตนไม่เคยใช้ ขอบเขตงานอนุญาตให้แจ้งข้อจำกัดความสามารถและขอผู้เชี่ยวชาญที่มีคุณสมบัติมาร่วม การตอบสนองใดให้บริการที่มีความสามารถแก่ลูกค้าได้ดีที่สุด?",
    "options_th": [
      "ประเมินคนเดียวโดยใช้รายการตรวจองค์กรที่คุ้นเคย",
      "เปิดเผยข้อจำกัดและจัดหาผู้มีคุณสมบัติมาสนับสนุนก่อนประเมิน",
      "นำเสนอว่าเป็นงานผู้เชี่ยวชาญหลังอ่านบทสรุปสั้น ๆ",
      "ปฏิเสธงานทั้งหมดโดยไม่หารือเรื่องผู้เชี่ยวชาญที่ขอได้"
    ],
    "explanation_th": "บริการที่มีความสามารถรวมถึงการรู้ขีดจำกัดและขอความเชี่ยวชาญที่เหมาะสมภายในงานที่ตกลง ช่วยปกป้องลูกค้าโดยไม่แสร้งว่าชำนาญหรือทิ้งงาน\n\nA: ความคุ้นเคยกับรายการตรวจอีกแบบไม่ได้ยืนยันความสามารถในวิธีเฉพาะที่ต้องใช้\nC: การอ่านบทสรุปไม่ได้รองรับความสามารถระดับผู้เชี่ยวชาญที่อ้าง\nD: โจทย์มีทางส่งมอบงานอย่างมีความสามารถ การถอนตัวทันทีละเลยทางเลือกที่มี",
    "explanation_detail": {
      "correct": {
        "en": "Competent service includes recognizing limits and obtaining suitable expertise within the engagement. This protects the client without pretending expertise or abandoning the work.",
        "th": "บริการที่มีความสามารถรวมถึงการรู้ขีดจำกัดและขอความเชี่ยวชาญที่เหมาะสมภายในงานที่ตกลง ช่วยปกป้องลูกค้าโดยไม่แสร้งว่าชำนาญหรือทิ้งงาน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Familiarity with a different checklist does not establish competence in the required specialized method.",
          "text_th": "ความคุ้นเคยกับรายการตรวจอีกแบบไม่ได้ยืนยันความสามารถในวิธีเฉพาะที่ต้องใช้"
        },
        {
          "letter": "C",
          "text_en": "Reading a summary does not substantiate the expert capability being claimed.",
          "text_th": "การอ่านบทสรุปไม่ได้รองรับความสามารถระดับผู้เชี่ยวชาญที่อ้าง"
        },
        {
          "letter": "D",
          "text_en": "The scenario provides a route to competent delivery; immediate withdrawal ignores that available option.",
          "text_th": "โจทย์มีทางส่งมอบงานอย่างมีความสามารถ การถอนตัวทันทีละเลยทางเลือกที่มี"
        }
      ]
    }
  },
  {
    "id": 1064,
    "dom": 1,
    "question": "A professional wants to help new security practitioners learn from a completed engagement. The client permits sharing an approved, generalized lesson but prohibits disclosing its configurations and identities. Which activity best advances the profession within those constraints?",
    "options": [
      "Teach the approved generalized lesson and invite technical peer feedback",
      "Share the original configuration because realistic details improve training",
      "Publish the client's identity to make the lesson more credible",
      "Delay all educational sharing until the full engagement record can be published"
    ],
    "correct_idx": 0,
    "explanation": "Authorized knowledge sharing and peer learning support professional development while respecting the client's confidentiality limits.\n\nB: Instructional value does not override the explicit confidentiality restriction.\nC: Naming the client violates the supplied restriction and is unnecessary for the approved lesson.\nD: The client already permits a useful generalized lesson; waiting for unrestricted disclosure is unnecessary to share it responsibly.",
    "short_explanation_en": "Authorized knowledge sharing and peer learning support professional development while respecting the client's confidentiality limits.",
    "question_th": "ผู้ประกอบวิชาชีพต้องการช่วยผู้เริ่มงานความปลอดภัยเรียนรู้จากงานที่เสร็จแล้ว ลูกค้าอนุญาตให้แบ่งปันบทเรียนภาพรวมที่อนุมัติ แต่ห้ามเปิดเผยการตั้งค่าและตัวตนของลูกค้า กิจกรรมใดพัฒนาวิชาชีพภายใต้ข้อจำกัดนี้ได้ดีที่สุด?",
    "options_th": [
      "สอนบทเรียนภาพรวมที่อนุมัติและเชิญเพื่อนร่วมวิชาชีพให้ข้อเสนอแนะด้านเทคนิค",
      "แบ่งปันการตั้งค่าต้นฉบับเพราะรายละเอียดจริงทำให้การอบรมดีขึ้น",
      "เผยแพร่ตัวตนลูกค้าเพื่อให้บทเรียนน่าเชื่อถือขึ้น",
      "เลื่อนการแบ่งปันเพื่อการศึกษาทั้งหมดจนกว่าจะเผยแพร่ระเบียนงานฉบับเต็มได้"
    ],
    "explanation_th": "การแบ่งปันที่ได้รับอนุญาตและเรียนรู้ร่วมกันสนับสนุนการพัฒนาวิชาชีพพร้อมเคารพข้อจำกัดความลับของลูกค้า\n\nB: ประโยชน์การสอนไม่ได้ยกเลิกข้อจำกัดความลับที่ระบุ\nC: การระบุชื่อลูกค้าละเมิดข้อจำกัด และไม่จำเป็นต่อบทเรียนที่อนุมัติ\nD: ลูกค้าอนุญาตบทเรียนภาพรวมที่มีประโยชน์แล้ว ไม่จำเป็นต้องรอเปิดเผยทั้งหมดจึงจะแบ่งปันอย่างรับผิดชอบ",
    "explanation_detail": {
      "correct": {
        "en": "Authorized knowledge sharing and peer learning support professional development while respecting the client's confidentiality limits.",
        "th": "การแบ่งปันที่ได้รับอนุญาตและเรียนรู้ร่วมกันสนับสนุนการพัฒนาวิชาชีพพร้อมเคารพข้อจำกัดความลับของลูกค้า"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Instructional value does not override the explicit confidentiality restriction.",
          "text_th": "ประโยชน์การสอนไม่ได้ยกเลิกข้อจำกัดความลับที่ระบุ"
        },
        {
          "letter": "C",
          "text_en": "Naming the client violates the supplied restriction and is unnecessary for the approved lesson.",
          "text_th": "การระบุชื่อลูกค้าละเมิดข้อจำกัด และไม่จำเป็นต่อบทเรียนที่อนุมัติ"
        },
        {
          "letter": "D",
          "text_en": "The client already permits a useful generalized lesson; waiting for unrestricted disclosure is unnecessary to share it responsibly.",
          "text_th": "ลูกค้าอนุญาตบทเรียนภาพรวมที่มีประโยชน์แล้ว ไม่จำเป็นต้องรอเปิดเผยทั้งหมดจึงจะแบ่งปันอย่างรับผิดชอบ"
        }
      ]
    }
  }
];
export default questions;
