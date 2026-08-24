/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 5: Security Operations
 * Question Count: 127
 */

const questions = [
  {
    "id": 81,
    "dom": 5,
    "question": "What is data security?",
    "options": [
      "Protecting data from being not being altered or disclosed",
      "The strategic use of encryption, authentication, and data handling",
      "A synonym for information security",
      "None of these answers are correct."
    ],
    "correct_idx": 1,
    "explanation": "Data security is the strategic application of encryption, authentication, and proper data handling practices to protect information.",
    "short_explanation_en": "Data security is the strategic application of encryption, authentication, and proper data handling practices to protect information.",
    "question_th": "ความปลอดภัยของข้อมูล (Data Security) คืออะไร?",
    "options_th": [
      "การปกป้องข้อมูลจากการไม่ถูกแก้ไขหรือเปิดเผย",
      "การใช้กลยุทธ์ผสมผสานระหว่างการเข้ารหัส การยืนยันตัวตน และการจัดการข้อมูล",
      "คำพ้องความหมายกับ Information Security",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Data Security คือการประยุกต์ใช้กลยุทธ์การเข้ารหัส การยืนยันตัวตน (authentication) และแนวปฏิบัติการจัดการข้อมูลที่เหมาะสม เพื่อปกป้องข้อมูล ซึ่งมีความหมายเฉพาะเจาะจงกว่า Information Security ที่ครอบคลุมกว้างกว่านี้"
  },
  {
    "id": 82,
    "dom": 5,
    "question": "What are the parts of a cryptographic algorithm?",
    "options": [
      "Fancy words, magic, numbers",
      "Key, ciphertext, key generator",
      "Coded text, random numbers, random number maker",
      "Key, ciphertext, plaintext"
    ],
    "correct_idx": 1,
    "explanation": "A cryptographic algorithm's core components are the key, the resulting ciphertext, and the key generator that produces the key.",
    "short_explanation_en": "A cryptographic algorithm's core components are the key, the resulting ciphertext, and the key generator that produces the key.",
    "question_th": "องค์ประกอบของอัลกอริทึมการเข้ารหัส (Cryptographic Algorithm) คืออะไร?",
    "options_th": [
      "คำสวยหรู เวทมนตร์ ตัวเลข",
      "กุญแจ (key), ข้อความเข้ารหัส (ciphertext), ตัวสร้างกุญแจ (key generator)",
      "ข้อความรหัส ตัวเลขสุ่ม เครื่องสร้างตัวเลขสุ่ม",
      "กุญแจ ข้อความเข้ารหัส ข้อความต้นฉบับ (plaintext)"
    ],
    "explanation_th": "องค์ประกอบหลักของอัลกอริทึมการเข้ารหัสคือ กุญแจ (key) ข้อความเข้ารหัสที่ได้ (ciphertext) และตัวสร้างกุญแจ (key generator) ที่ผลิตกุญแจนั้นขึ้นมา"
  },
  {
    "id": 83,
    "dom": 5,
    "question": "What is the difference between symmetric and asymmetric encryption?",
    "options": [
      "Symmetric encryption has different keys for encryption and decryption.",
      "Asymmetric encryption has the same key for encryption and decryption.",
      "The difference is the symmetry of the numbers used in the algorithms.",
      "None of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses a different key for each (public/private key pair) — the listed options describing them backwards are both wrong.",
    "short_explanation_en": "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses a different key for each (public/private key pair) — the listed options describing them backwards are both wrong.",
    "question_th": "ความแตกต่างระหว่าง Symmetric encryption และ Asymmetric encryption คืออะไร?",
    "options_th": [
      "Symmetric encryption มีกุญแจต่างกันสำหรับเข้ารหัสและถอดรหัส",
      "Asymmetric encryption มีกุญแจเดียวกันสำหรับเข้ารหัสและถอดรหัส",
      "ความแตกต่างคือความสมมาตรของตัวเลขที่ใช้ในอัลกอริทึม",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Symmetric encryption ใช้กุญแจเดียวกันทั้งเข้ารหัสและถอดรหัส ส่วน Asymmetric encryption ใช้กุญแจต่างกันสำหรับแต่ละฟังก์ชัน (คู่กุญแจ public/private) ซึ่งตรงข้ามกับตัวเลือก A และ B ที่อธิบายผิด ดังนั้นไม่มีข้อใดถูกต้อง"
  },
  {
    "id": 84,
    "dom": 5,
    "question": "What are some types of cryptographic protocols, and what are they used for?",
    "options": [
      "AES-256; storage and transit",
      "RSA and the Diffie-Helman Key Exchange; transit",
      "TLS; transit",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "AES-256 is used for encrypting data at rest and in transit; RSA and Diffie-Hellman handle key exchange; TLS secures data in transit — all are valid cryptographic protocols/algorithms used for different purposes.",
    "short_explanation_en": "AES-256 is used for encrypting data at rest and in transit; RSA and Diffie-Hellman handle key exchange; TLS secures data in transit — all are valid cryptographic protocols/algorithms used for different purposes.",
    "question_th": "โปรโตคอลการเข้ารหัสมีประเภทใดบ้าง และใช้เพื่ออะไร?",
    "options_th": [
      "AES-256; การจัดเก็บและการส่งข้อมูล",
      "RSA และ Diffie-Helman Key Exchange; การส่งข้อมูล",
      "TLS; การส่งข้อมูล",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "AES-256 ใช้เข้ารหัสข้อมูลทั้งขณะจัดเก็บและขณะส่งผ่าน RSA และ Diffie-Hellman ใช้สำหรับการแลกเปลี่ยนกุญแจ (key exchange) และ TLS ใช้ปกป้องข้อมูลขณะส่งผ่าน ทั้งหมดล้วนเป็นโปรโตคอล/อัลกอริทึมการเข้ารหัสที่ใช้ในวัตถุประสงค์ต่างกัน"
  },
  {
    "id": 85,
    "dom": 5,
    "question": "What are the two primary qualities of hashes?",
    "options": [
      "Can encrypt text in a pinch and cannot be hacked",
      "Excellent for breakfast and for snacks",
      "Irreversible but can be reverse-engineered",
      "Can encrypt text in a pinch but don’t use random numbers"
    ],
    "correct_idx": 2,
    "explanation": "Hash functions are designed to be irreversible (one-way), though certain weak hashes can sometimes be cracked via techniques like rainbow tables — hence 'irreversible but can be reverse-engineered' in practice.",
    "short_explanation_en": "Hash functions are designed to be irreversible (one-way), though certain weak hashes can sometimes be cracked via techniques like rainbow tables — hence 'irreversible but can be reverse-engineered' in practice.",
    "question_th": "คุณสมบัติหลักสองประการของ hash คืออะไร?",
    "options_th": [
      "สามารถเข้ารหัสข้อความได้ในกรณีฉุกเฉินและไม่สามารถถูกแฮกได้",
      "เหมาะสำหรับมื้อเช้าและของว่าง",
      "ไม่สามารถย้อนกลับได้ แต่สามารถถูกวิศวกรรมย้อนกลับได้",
      "สามารถเข้ารหัสข้อความได้ในกรณีฉุกเฉินแต่ไม่ใช้ตัวเลขสุ่ม"
    ],
    "explanation_th": "ฟังก์ชันแฮชถูกออกแบบให้ไม่สามารถย้อนกลับได้ (one-way) แม้ว่าแฮชบางประเภทที่อ่อนแออาจถูกถอดรหัสได้ด้วยเทคนิคอย่าง rainbow table จึงอธิบายได้ว่า 'ไม่สามารถย้อนกลับได้ แต่สามารถถูกวิศวกรรมย้อนกลับได้' ในทางปฏิบัติ"
  },
  {
    "id": 86,
    "dom": 5,
    "question": "What is non-repudiation?",
    "options": [
      "A way to ensure that a person can’t deny having taken an action, such as a digital signature",
      "A form of encryption",
      "A pillar of the CIA triad that we just forgot about",
      "A grammatical curiosity"
    ],
    "correct_idx": 0,
    "explanation": "Non-repudiation ensures a person cannot later deny having performed an action, such as sending a message — digital signatures are a common mechanism for this.",
    "short_explanation_en": "Non-repudiation ensures a person cannot later deny having performed an action, such as sending a message — digital signatures are a common mechanism for this.",
    "question_th": "Non-repudiation คืออะไร?",
    "options_th": [
      "วิธีการรับประกันว่าบุคคลไม่สามารถปฏิเสธการกระทำของตนได้ เช่น ลายเซ็นดิจิทัล",
      "รูปแบบหนึ่งของการเข้ารหัส",
      "เสาหลักหนึ่งของ CIA triad ที่เราลืมไป",
      "ความประหลาดทางไวยากรณ์"
    ],
    "explanation_th": "Non-repudiation คือการรับประกันว่าบุคคลไม่สามารถปฏิเสธในภายหลังว่าตนไม่ได้กระทำการบางอย่าง เช่น การส่งข้อความ โดยลายเซ็นดิจิทัลเป็นกลไกที่ใช้บ่อยเพื่อรับประกันคุณสมบัตินี้"
  },
  {
    "id": 87,
    "dom": 5,
    "question": "What is authentication?",
    "options": [
      "The practice of determining the accuracy of data before use",
      "The process of checking identity before granting access",
      "A method to ensure data integrity during transmission",
      "There are various models, so all of the answers are correct"
    ],
    "correct_idx": 1,
    "explanation": "Authentication is the process of verifying a user's claimed identity before granting them access to a system or resource.",
    "short_explanation_en": "Authentication is the process of verifying a user's claimed identity before granting them access to a system or resource.",
    "question_th": "Authentication คืออะไร?",
    "options_th": [
      "แนวปฏิบัติในการตรวจสอบความถูกต้องของข้อมูลก่อนใช้งาน",
      "กระบวนการตรวจสอบตัวตนก่อนอนุญาตให้เข้าถึง",
      "วิธีการรับประกันความถูกต้องของข้อมูลระหว่างการส่ง",
      "มีหลายโมเดล ดังนั้นถูกทุกข้อ"
    ],
    "explanation_th": "Authentication คือกระบวนการตรวจสอบตัวตนที่ผู้ใช้อ้างสิทธิ์ ก่อนที่จะอนุญาตให้เข้าถึงระบบหรือทรัพยากร"
  },
  {
    "id": 88,
    "dom": 5,
    "question": "How many factors of authentication are there, and how many should be used at a minimum in a secure system configuration?",
    "options": [
      "Two; two",
      "Five; any one will do, as these are stronger than passwords",
      "Five; two",
      "Four; three"
    ],
    "correct_idx": 2,
    "explanation": "There are five recognized authentication factor categories (knowledge, possession, inherence, location, behavior), and best practice requires at least two of them for strong authentication (MFA).",
    "short_explanation_en": "There are five recognized authentication factor categories (knowledge, possession, inherence, location, behavior), and best practice requires at least two of them for strong authentication (MFA).",
    "question_th": "มีปัจจัยการยืนยันตัวตน (Authentication) กี่ประเภท และควรใช้ขั้นต่ำกี่ประเภทในระบบที่ปลอดภัย?",
    "options_th": [
      "สอง; สอง",
      "ห้า; ใช้เพียงหนึ่งก็เพียงพอ เพราะแข็งแกร่งกว่ารหัสผ่านอยู่แล้ว",
      "ห้า; สอง",
      "สี่; สาม"
    ],
    "explanation_th": "มีปัจจัยการยืนยันตัวตนที่ได้รับการยอมรับ 5 ประเภท (ความรู้ การครอบครอง ลักษณะเฉพาะตัว ตำแหน่งที่ตั้ง พฤติกรรม) และแนวปฏิบัติที่ดีกำหนดให้ใช้อย่างน้อย 2 ประเภทร่วมกันเพื่อการยืนยันตัวตนที่แข็งแกร่ง (MFA)"
  },
  {
    "id": 89,
    "dom": 5,
    "question": "Why is authentication so critical?",
    "options": [
      "It ensures that only authorized users gain access.",
      "It is a system’s first line of defense.",
      "Without properly verifying identity, anyone could gain access to a system.",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Authentication is critical because it's a system's first line of defense — without verifying identity, anyone could access resources meant to be restricted to authorized users.",
    "short_explanation_en": "Authentication is critical because it's a system's first line of defense — without verifying identity, anyone could access resources meant to be restricted to authorized users.",
    "question_th": "เหตุใด Authentication จึงมีความสำคัญอย่างยิ่ง?",
    "options_th": [
      "รับประกันว่ามีเพียงผู้ใช้ที่ได้รับอนุญาตเท่านั้นที่เข้าถึงได้",
      "เป็นแนวป้องกันด่านแรกของระบบ",
      "หากไม่มีการยืนยันตัวตนที่เหมาะสม ใครก็สามารถเข้าถึงระบบได้",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Authentication สำคัญเพราะเป็นแนวป้องกันด่านแรกของระบบ หากไม่มีการยืนยันตัวตนที่ถูกต้อง ใครก็สามารถเข้าถึงทรัพยากรที่ควรจำกัดเฉพาะผู้ใช้ที่ได้รับอนุญาตเท่านั้น"
  },
  {
    "id": 90,
    "dom": 5,
    "question": "What is not part of implementing a strong password policy?",
    "options": [
      "Monitoring for compromised passwords",
      "Changing one number or character when it’s time to change passwords",
      "Requiring longer passwords",
      "Making users change their passwords every 15 days"
    ],
    "correct_idx": 1,
    "explanation": "A strong password policy avoids minor predictable tweaks (like changing just one character); it instead should emphasize length, monitoring for compromise, and reasonable rotation — not overly frequent forced changes.",
    "short_explanation_en": "A strong password policy avoids minor predictable tweaks (like changing just one character); it instead should emphasize length, monitoring for compromise, and reasonable rotation — not overly frequent forced changes.",
    "question_th": "ข้อใดไม่ใช่ส่วนหนึ่งของการนำนโยบายรหัสผ่านที่แข็งแกร่งมาใช้?",
    "options_th": [
      "การตรวจสอบรหัสผ่านที่ถูกบุกรุก",
      "การเปลี่ยนตัวเลขหรืออักขระเพียงตัวเดียวเมื่อถึงเวลาเปลี่ยนรหัสผ่าน",
      "การกำหนดให้ใช้รหัสผ่านที่ยาวขึ้น",
      "การบังคับให้ผู้ใช้เปลี่ยนรหัสผ่านทุก 15 วัน"
    ],
    "explanation_th": "นโยบายรหัสผ่านที่แข็งแกร่งควรหลีกเลี่ยงการเปลี่ยนแปลงเล็กน้อยที่คาดเดาได้ง่าย (เช่น เปลี่ยนแค่ตัวอักษรเดียว) และควรเน้นที่ความยาวของรหัสผ่าน การตรวจสอบการรั่วไหล และการเปลี่ยนรหัสผ่านตามความเหมาะสม ไม่ใช่บังคับเปลี่ยนบ่อยเกินไป"
  },
  {
    "id": 91,
    "dom": 5,
    "question": "What are the four components of data handling?",
    "options": [
      "Classification, labeling, retention, destruction",
      "Classification, tagging, retention, destruction",
      "Classification, labeling, destruction, disposal",
      "Classification, retention, encryption, networking"
    ],
    "correct_idx": 0,
    "explanation": "Data handling consists of four key components: classification (categorizing sensitivity), labeling, retention, and destruction.",
    "short_explanation_en": "Data handling consists of four key components: classification (categorizing sensitivity), labeling, retention, and destruction.",
    "question_th": "องค์ประกอบสี่ประการของการจัดการข้อมูล (Data Handling) คืออะไร?",
    "options_th": [
      "การจัดประเภท การติดป้าย การเก็บรักษา การทำลาย",
      "การจัดประเภท การแท็ก การเก็บรักษา การทำลาย",
      "การจัดประเภท การติดป้าย การทำลาย การกำจัด",
      "การจัดประเภท การเก็บรักษา การเข้ารหัส เครือข่าย"
    ],
    "explanation_th": "การจัดการข้อมูลประกอบด้วยองค์ประกอบหลัก 4 ประการ: การจัดประเภท (classification) ตามความอ่อนไหวของข้อมูล การติดป้าย (labeling) การเก็บรักษา (retention) และการทำลาย (destruction)"
  },
  {
    "id": 92,
    "dom": 5,
    "question": "What is the correct way to implement data classification?",
    "options": [
      "Implement classifications based on each organization’s needs and data inventory.",
      "There are four categories one should always implement: Public, Confidential, Secret, and Top Secret.",
      "The analyst should copy the categories of the company they most admire.",
      "There are three categories one should always implement: Public, Confidential, and Secret."
    ],
    "correct_idx": 0,
    "explanation": "Effective data classification should be tailored to each organization's specific needs and data inventory rather than following a rigid, universal category scheme.",
    "short_explanation_en": "Effective data classification should be tailored to each organization's specific needs and data inventory rather than following a rigid, universal category scheme.",
    "question_th": "วิธีที่ถูกต้องในการนำการจัดประเภทข้อมูล (Data Classification) มาใช้คืออะไร?",
    "options_th": [
      "นำการจัดประเภทมาใช้ตามความต้องการและคลังข้อมูลของแต่ละองค์กร",
      "ควรใช้ 4 ประเภทเสมอ: Public, Confidential, Secret, Top Secret",
      "นักวิเคราะห์ควรคัดลอกประเภทจากบริษัทที่ตนชื่นชอบ",
      "ควรใช้ 3 ประเภทเสมอ: Public, Confidential, Secret"
    ],
    "explanation_th": "การจัดประเภทข้อมูลที่มีประสิทธิภาพควรออกแบบให้เหมาะกับความต้องการและคลังข้อมูลเฉพาะของแต่ละองค์กร มากกว่าการยึดตามแบบแผนประเภทข้อมูลที่ตายตัว"
  },
  {
    "id": 93,
    "dom": 5,
    "question": "What is the objective of data handling?",
    "options": [
      "To conserve resources for the data that actually needs protection",
      "To prevent unauthorized disclosures and leaks",
      "To ensure that passwords are secure",
      "To protect all the data"
    ],
    "correct_idx": 0,
    "explanation": "Data handling exists to focus protective resources on the data that actually needs them, rather than treating all data equally regardless of sensitivity.",
    "short_explanation_en": "Data handling exists to focus protective resources on the data that actually needs them, rather than treating all data equally regardless of sensitivity.",
    "question_th": "วัตถุประสงค์ของการจัดการข้อมูล (Data Handling) คืออะไร?",
    "options_th": [
      "เพื่อประหยัดทรัพยากรสำหรับข้อมูลที่ต้องการการป้องกันจริง ๆ",
      "เพื่อป้องกันการเปิดเผยและรั่วไหลโดยไม่ได้รับอนุญาต",
      "เพื่อรับประกันว่ารหัสผ่านมีความปลอดภัย",
      "เพื่อปกป้องข้อมูลทั้งหมด"
    ],
    "explanation_th": "การจัดการข้อมูลมีขึ้นเพื่อมุ่งทรัพยากรการป้องกันไปยังข้อมูลที่ต้องการจริง ๆ แทนที่จะปฏิบัติต่อข้อมูลทั้งหมดเท่าเทียมกันโดยไม่คำนึงถึงความอ่อนไหว"
  },
  {
    "id": 94,
    "dom": 5,
    "question": "What is system hardening?",
    "options": [
      "A process intended to eliminate a means of attack by patching vulnerabilities and turning off nonessential services",
      "Getting a baseline in place",
      "Blocking some ports and installing a few patches",
      "The implementation of controls to prevent the unauthorized access to and disclosure of data"
    ],
    "correct_idx": 0,
    "explanation": "System hardening reduces attack surface by patching known vulnerabilities and disabling unnecessary services, eliminating potential means of attack.",
    "short_explanation_en": "System hardening reduces attack surface by patching known vulnerabilities and disabling unnecessary services, eliminating potential means of attack.",
    "question_th": "System hardening คืออะไร?",
    "options_th": [
      "กระบวนการที่มุ่งขจัดช่องทางการโจมตีด้วยการแพตช์ช่องโหว่และปิดบริการที่ไม่จำเป็น",
      "การจัดทำ baseline ให้พร้อมใช้งาน",
      "การบล็อกพอร์ตบางส่วนและติดตั้งแพตช์บางตัว",
      "การนำมาตรการควบคุมมาใช้เพื่อป้องกันการเข้าถึงและเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต"
    ],
    "explanation_th": "System hardening ลดพื้นผิวการโจมตีด้วยการแพตช์ช่องโหว่ที่ทราบและปิดบริการที่ไม่จำเป็น เพื่อขจัดช่องทางที่อาจถูกใช้โจมตี"
  },
  {
    "id": 95,
    "dom": 5,
    "question": "What is a baseline?",
    "options": [
      "A framework such as NIST SP 800",
      "Technical and security specifications for implementing the system",
      "A way to build a server",
      "The idealized state at which security professionals strive to keep the system"
    ],
    "correct_idx": 1,
    "explanation": "A baseline defines the technical and security configuration specifications a system should be set up and maintained against.",
    "short_explanation_en": "A baseline defines the technical and security configuration specifications a system should be set up and maintained against.",
    "question_th": "Baseline คืออะไร?",
    "options_th": [
      "กรอบการทำงาน เช่น NIST SP 800",
      "ข้อกำหนดทางเทคนิคและความปลอดภัยสำหรับการติดตั้งระบบ",
      "วิธีการสร้างเซิร์ฟเวอร์",
      "สถานะในอุดมคติที่ผู้เชี่ยวชาญความปลอดภัยมุ่งรักษาระบบให้อยู่"
    ],
    "explanation_th": "Baseline กำหนดข้อกำหนดทางเทคนิคและความปลอดภัยของการตั้งค่าที่ระบบควรถูกติดตั้งและรักษาไว้ตาม"
  },
  {
    "id": 96,
    "dom": 5,
    "question": "What is patch management?",
    "options": [
      "A bandage for software",
      "A form of risk management",
      "The implementation of new systems when older ones reach the end of their lives",
      "The implementation of vendor fixes to remediate vulnerabilities and software issues"
    ],
    "correct_idx": 3,
    "explanation": "Patch management is the process of applying vendor-released fixes to remediate known vulnerabilities and software issues.",
    "short_explanation_en": "Patch management is the process of applying vendor-released fixes to remediate known vulnerabilities and software issues.",
    "question_th": "Patch management คืออะไร?",
    "options_th": [
      "พลาสเตอร์ปิดแผลสำหรับซอฟต์แวร์",
      "รูปแบบหนึ่งของการบริหารความเสี่ยง",
      "การนำระบบใหม่มาใช้เมื่อระบบเก่าหมดอายุการใช้งาน",
      "การนำการแก้ไขจากผู้จำหน่ายมาใช้เพื่อแก้ไขช่องโหว่และปัญหาซอฟต์แวร์"
    ],
    "explanation_th": "Patch management คือกระบวนการนำการแก้ไข (fixes) ที่ผู้จำหน่ายปล่อยออกมาใช้ เพื่อแก้ไขช่องโหว่และปัญหาซอฟต์แวร์ที่ทราบแล้ว"
  },
  {
    "id": 97,
    "dom": 5,
    "question": "What are system updates and upgrades?",
    "options": [
      "Optimizing systems to run better and replacing them when the next version is available",
      "A grander version of patches",
      "Updates to specific vulnerabilities in a system",
      "None of these answers are correct."
    ],
    "correct_idx": 0,
    "explanation": "System updates and upgrades optimize performance and replace outdated systems with newer versions when available, going beyond just patching individual vulnerabilities.",
    "short_explanation_en": "System updates and upgrades optimize performance and replace outdated systems with newer versions when available, going beyond just patching individual vulnerabilities.",
    "question_th": "การอัปเดตและอัปเกรดระบบ (System updates and upgrades) คืออะไร?",
    "options_th": [
      "การปรับปรุงประสิทธิภาพระบบและเปลี่ยนเป็นเวอร์ชันใหม่เมื่อมีให้ใช้งาน",
      "เวอร์ชันที่ใหญ่กว่าของแพตช์",
      "การอัปเดตช่องโหว่เฉพาะในระบบ",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "การอัปเดตและอัปเกรดระบบช่วยปรับปรุงประสิทธิภาพและแทนที่ระบบเก่าด้วยเวอร์ชันใหม่เมื่อมีให้ใช้งาน ซึ่งกว้างกว่าการแพตช์ช่องโหว่เพียงจุดเดียว"
  },
  {
    "id": 98,
    "dom": 5,
    "question": "What are logs?",
    "options": [
      "Implementation information for a system",
      "A system to forward records",
      "Records about the status of key components of an IT infrastructure",
      "Application code"
    ],
    "correct_idx": 2,
    "explanation": "Logs are records that capture the status, activity, and events of key IT infrastructure components over time.",
    "short_explanation_en": "Logs are records that capture the status, activity, and events of key IT infrastructure components over time.",
    "question_th": "Logs คืออะไร?",
    "options_th": [
      "ข้อมูลการติดตั้งของระบบ",
      "ระบบสำหรับส่งต่อบันทึก",
      "บันทึกเกี่ยวกับสถานะขององค์ประกอบสำคัญของโครงสร้างพื้นฐาน IT",
      "โค้ดของแอปพลิเคชัน"
    ],
    "explanation_th": "Logs คือบันทึกที่เก็บสถานะ กิจกรรม และเหตุการณ์ขององค์ประกอบสำคัญของโครงสร้างพื้นฐาน IT ตลอดช่วงเวลา"
  },
  {
    "id": 99,
    "dom": 5,
    "question": "Which of the following does an Acceptable Use Policy usually not cover?",
    "options": [
      "What sort of smartphone to buy for personal use",
      "How to store documents",
      "Whether USBs can be used and how",
      "All the ways users might interact with technology"
    ],
    "correct_idx": 0,
    "explanation": "An Acceptable Use Policy governs how technology and company resources should be used (documents, USBs, general conduct) — it wouldn't typically dictate personal purchasing decisions like which smartphone to buy.",
    "short_explanation_en": "An Acceptable Use Policy governs how technology and company resources should be used (documents, USBs, general conduct) — it wouldn't typically dictate personal purchasing decisions like which smartphone to buy.",
    "question_th": "ข้อใดที่นโยบาย Acceptable Use Policy มักไม่ครอบคลุม?",
    "options_th": [
      "ควรซื้อสมาร์ทโฟนรุ่นใดสำหรับใช้งานส่วนตัว",
      "วิธีจัดเก็บเอกสาร",
      "การใช้ USB ได้หรือไม่และอย่างไร",
      "วิธีที่ผู้ใช้อาจมีปฏิสัมพันธ์กับเทคโนโลยีทั้งหมด"
    ],
    "explanation_th": "Acceptable Use Policy กำกับดูแลวิธีการใช้เทคโนโลยีและทรัพยากรของบริษัท (เอกสาร USB และพฤติกรรมทั่วไป) แต่โดยทั่วไปจะไม่กำหนดการตัดสินใจซื้อส่วนตัว เช่น สมาร์ทโฟนรุ่นใด"
  },
  {
    "id": 100,
    "dom": 5,
    "question": "Which of the following does a bring your own device policy usually cover?",
    "options": [
      "How to use company-owned devices",
      "Step-by-step instructions for setting up corporate email",
      "What employees must to do to secure their personal devices",
      "Which pictures employees shouldn’t delete"
    ],
    "correct_idx": 2,
    "explanation": "A BYOD (Bring Your Own Device) policy defines what employees must do to secure their personal devices when using them for work purposes.",
    "short_explanation_en": "A BYOD (Bring Your Own Device) policy defines what employees must do to secure their personal devices when using them for work purposes.",
    "question_th": "นโยบาย Bring Your Own Device มักครอบคลุมข้อใด?",
    "options_th": [
      "วิธีใช้อุปกรณ์ที่บริษัทเป็นเจ้าของ",
      "ขั้นตอนตั้งค่าอีเมลของบริษัททีละขั้นตอน",
      "สิ่งที่พนักงานต้องทำเพื่อรักษาความปลอดภัยอุปกรณ์ส่วนตัวของตน",
      "รูปภาพใดที่พนักงานไม่ควรลบ"
    ],
    "explanation_th": "นโยบาย BYOD (Bring Your Own Device) กำหนดสิ่งที่พนักงานต้องทำเพื่อรักษาความปลอดภัยอุปกรณ์ส่วนตัว เมื่อนำมาใช้เพื่อวัตถุประสงค์ในการทำงาน"
  },
  {
    "id": 101,
    "dom": 5,
    "question": "Who is a privacy policy intended to be written for?",
    "options": [
      "The government",
      "Customers",
      "Employees",
      "Lawyers"
    ],
    "correct_idx": 1,
    "explanation": "A privacy policy is primarily written for customers, explaining how their personal data will be collected, used, and protected.",
    "short_explanation_en": "A privacy policy is primarily written for customers, explaining how their personal data will be collected, used, and protected.",
    "question_th": "นโยบายความเป็นส่วนตัว (Privacy Policy) เขียนขึ้นเพื่อใคร?",
    "options_th": [
      "รัฐบาล",
      "ลูกค้า",
      "พนักงาน",
      "ทนายความ"
    ],
    "explanation_th": "นโยบายความเป็นส่วนตัวเขียนขึ้นเป็นหลักสำหรับลูกค้า เพื่ออธิบายว่าข้อมูลส่วนบุคคลของพวกเขาจะถูกเก็บรวบรวม ใช้งาน และปกป้องอย่างไร"
  },
  {
    "id": 102,
    "dom": 5,
    "question": "Which of the following is a privacy policy intended to cover?",
    "options": [
      "The company’s responsibilities to their customers.",
      "Every aspect of how an organization will use its users’ data",
      "Only the basics of privacy regulation compliance",
      "Only how to request deletion of personal data"
    ],
    "correct_idx": 1,
    "explanation": "A privacy policy should comprehensively cover every aspect of how an organization collects, uses, and manages its users' data — not just isolated pieces of it.",
    "short_explanation_en": "A privacy policy should comprehensively cover every aspect of how an organization collects, uses, and manages its users' data — not just isolated pieces of it.",
    "question_th": "นโยบายความเป็นส่วนตัวมีขึ้นเพื่อครอบคลุมข้อใด?",
    "options_th": [
      "ความรับผิดชอบของบริษัทต่อลูกค้า",
      "ทุกแง่มุมของวิธีที่องค์กรจะใช้ข้อมูลของผู้ใช้",
      "เพียงหลักการพื้นฐานของการปฏิบัติตามกฎระเบียบความเป็นส่วนตัว",
      "เพียงวิธีการขอลบข้อมูลส่วนบุคคล"
    ],
    "explanation_th": "นโยบายความเป็นส่วนตัวควรครอบคลุมทุกแง่มุมของวิธีที่องค์กรเก็บรวบรวม ใช้ และจัดการข้อมูลของผู้ใช้อย่างครบถ้วน ไม่ใช่เพียงบางส่วน"
  },
  {
    "id": 103,
    "dom": 5,
    "question": "Which of the following is the purpose of security awareness training?",
    "options": [
      "Security compliance",
      "Cybersecurity risk mitigation",
      "User education",
      "Phishing tests"
    ],
    "correct_idx": 2,
    "explanation": "Security awareness training's core purpose is user education — teaching employees to recognize and avoid security risks like phishing.",
    "short_explanation_en": "Security awareness training's core purpose is user education — teaching employees to recognize and avoid security risks like phishing.",
    "question_th": "ข้อใดคือวัตถุประสงค์ของการฝึกอบรมสร้างความตระหนักด้านความปลอดภัย (Security Awareness Training)?",
    "options_th": [
      "การปฏิบัติตามข้อกำหนดด้านความปลอดภัย",
      "การลดความเสี่ยงด้านความปลอดภัยไซเบอร์",
      "การให้ความรู้แก่ผู้ใช้",
      "การทดสอบฟิชชิง"
    ],
    "explanation_th": "วัตถุประสงค์หลักของการฝึกอบรมสร้างความตระหนักด้านความปลอดภัยคือการให้ความรู้แก่ผู้ใช้ — สอนพนักงานให้รู้จักและหลีกเลี่ยงความเสี่ยงด้านความปลอดภัย เช่น ฟิชชิง"
  },
  {
    "id": 163,
    "dom": 5,
    "question": "Alice sends Bob a message encrypted with a private key. Bob decrypts the message with the same private key. Which of the following types of encryption is this an example of?",
    "options": [
      "Asymmetric",
      "Symmetric",
      "Hashing",
      "None of the above"
    ],
    "correct_idx": 1,
    "explanation": "Symmetric encryption uses the same key for encryption and decryption. This means that the sender and receiver of a message need to have a copy of the same key in order to encrypt/decrypt the message.",
    "short_explanation_en": "Symmetric encryption uses the same key for encryption and decryption.",
    "question_th": "อลิซส่งข้อความให้บ็อบโดยเข้ารหัสด้วย private key บ็อบถอดรหัสข้อความด้วย private key เดียวกันนั้น นี่เป็นตัวอย่างของการเข้ารหัสประเภทใด?",
    "options_th": [
      "Asymmetric",
      "Symmetric",
      "Hashing",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Symmetric encryption ใช้กุญแจเดียวกันทั้งการเข้ารหัสและถอดรหัส หมายความว่าทั้งผู้ส่งและผู้รับต้องมีสำเนากุญแจเดียวกันเพื่อเข้ารหัส/ถอดรหัสข้อความ"
  },
  {
    "id": 164,
    "dom": 5,
    "question": "Which of the following is not a secure method of data deletion?",
    "options": [
      "Emptying the recycle bin on your computer desktop",
      "Physical destruction of a hard drive",
      "Zeroization",
      "Overwriting"
    ],
    "correct_idx": 0,
    "explanation": "Pressing the delete key on a computer and emptying the recycle bin on your desktop are not secure methods of data destruction, as the data is not actually securely deleted from the hard drive. These actions simply tell the operating system that the location on the hard drive is free for use.",
    "short_explanation_en": "Pressing the delete key on a computer and emptying the recycle bin on your desktop are not secure methods of data destruction, as the data is not actually securely deleted from the hard drive.",
    "question_th": "ข้อใดไม่ใช่วิธีการลบข้อมูลที่ปลอดภัย?",
    "options_th": [
      "การล้างถังขยะ (recycle bin) บนเดสก์ท็อปคอมพิวเตอร์",
      "การทำลายฮาร์ดดิสก์ทางกายภาพ",
      "การล้างข้อมูลด้วยศูนย์ (Zeroization)",
      "การเขียนทับ (Overwriting)"
    ],
    "explanation_th": "การกดปุ่มลบและล้างถังขยะบนเดสก์ท็อปไม่ใช่วิธีการลบข้อมูลที่ปลอดภัย เนื่องจากข้อมูลยังไม่ได้ถูกลบออกจากฮาร์ดดิสก์จริง เพียงแค่บอกระบบปฏิบัติการว่าพื้นที่นั้นว่างสำหรับใช้งานต่อไป"
  },
  {
    "id": 165,
    "dom": 5,
    "question": "Which of the following can be used to create message digests?",
    "options": [
      "Symmetric encryption algorithms",
      "Asymmetric encryption algorithms",
      "Hash functions",
      "All of the above"
    ],
    "correct_idx": 2,
    "explanation": "Hash functions transform information into fixed-length output known as a hash value, message digest, or fingerprint.",
    "short_explanation_en": "Hash functions transform information into fixed-length output known as a hash value, message digest, or fingerprint.",
    "question_th": "ข้อใดสามารถใช้สร้าง message digest ได้?",
    "options_th": [
      "อัลกอริทึมการเข้ารหัสแบบ symmetric",
      "อัลกอริทึมการเข้ารหัสแบบ asymmetric",
      "ฟังก์ชันแฮช (Hash functions)",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "ฟังก์ชันแฮชแปลงข้อมูลให้เป็นผลลัพธ์ความยาวคงที่ที่เรียกว่า hash value, message digest หรือ fingerprint"
  },
  {
    "id": 166,
    "dom": 5,
    "question": "A security administrator is looking for ways to automate the monitoring of logs throughout the environment. Which of the following solutions would help provide automated monitoring capability?",
    "options": [
      "Regularly review the logs",
      "Store the logs on a centralized log server",
      "Implement a SIEM",
      "Implement a firewall"
    ],
    "correct_idx": 2,
    "explanation": "Implementing a security information and event management (SIEM) system is one example of how an organization can implement automated monitoring. A SIEM system is a tool that ingests logs from various sources, serves as a central secure log repository, and contains rules that alert on suspicious events identified in logs.",
    "short_explanation_en": "Implementing a security information and event management (SIEM) system is one example of how an organization can implement automated monitoring.",
    "question_th": "ผู้ดูแลระบบความปลอดภัยกำลังมองหาวิธีที่จะทำให้การเฝ้าติดตาม log ทั่วทั้งสภาพแวดล้อมเป็นแบบอัตโนมัติ ข้อใดจะช่วยให้เกิดความสามารถในการเฝ้าติดตามแบบอัตโนมัติ?",
    "options_th": [
      "ทบทวน log เป็นประจำ",
      "จัดเก็บ log บนเซิร์ฟเวอร์ log แบบรวมศูนย์",
      "นำ SIEM มาใช้",
      "นำไฟร์วอลล์มาใช้"
    ],
    "explanation_th": "การนำระบบ SIEM (Security Information and Event Management) มาใช้เป็นตัวอย่างหนึ่งขององค์กรที่สามารถทำให้การเฝ้าติดตามเป็นแบบอัตโนมัติ ระบบ SIEM จะรับ log จากหลายแหล่ง ทำหน้าที่เป็นคลังจัดเก็บ log กลางที่ปลอดภัย และมีกฎที่แจ้งเตือนเหตุการณ์ที่น่าสงสัยซึ่งพบใน log"
  },
  {
    "id": 167,
    "dom": 5,
    "question": "Which of the following types of encryption uses two keys: one for encryption and a separate key for decryption?",
    "options": [
      "Asymmetric",
      "Symmetric",
      "Hashing",
      "None of the above"
    ],
    "correct_idx": 0,
    "explanation": "Asymmetric encryption uses two keys: a public key (for encryption) and a private key (for decryption).",
    "short_explanation_en": "Asymmetric encryption uses two keys: a public key (for encryption) and a private key (for decryption).",
    "question_th": "การเข้ารหัสประเภทใดที่ใช้กุญแจสองดอก: หนึ่งสำหรับเข้ารหัสและอีกดอกแยกต่างหากสำหรับถอดรหัส?",
    "options_th": [
      "Asymmetric",
      "Symmetric",
      "Hashing",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Asymmetric encryption ใช้กุญแจสองดอก: public key (สำหรับเข้ารหัส) และ private key (สำหรับถอดรหัส)"
  },
  {
    "id": 168,
    "dom": 5,
    "question": "As the new CISO of his organization, Joe decided to initiate a comprehensive set of scans. The scans reported that nearly all of his endpoints have known operating system vulnerabilities. What is the most likely root cause of this situation?",
    "options": [
      "The organization is the victim of an advanced persistent threat.",
      "The endpoints do not have up-to-date antimalware software installed.",
      "The endpoints have not been kept up-to-date with the latest security patches.",
      "Brute force attack."
    ],
    "correct_idx": 2,
    "explanation": "The most likely reason endpoints have known operating system vulnerabilities is they do not have the latest patches installed from the vendors. Poorly configured antimalware software or a brute force attack would not cause this, and an APT might be the result of this situation but not the cause of it.",
    "short_explanation_en": "The most likely reason endpoints have known operating system vulnerabilities is they do not have the latest patches installed from the vendors.",
    "question_th": "ในฐานะ CISO คนใหม่ขององค์กร โจตัดสินใจเริ่มการสแกนอย่างครอบคลุม ผลการสแกนรายงานว่าเกือบทุก endpoint มีช่องโหว่ของระบบปฏิบัติการที่ทราบแล้ว สาเหตุที่เป็นไปได้มากที่สุดของสถานการณ์นี้คืออะไร?",
    "options_th": [
      "องค์กรตกเป็นเหยื่อของการโจมตีแบบ Advanced Persistent Threat",
      "Endpoint ไม่มีการติดตั้งซอฟต์แวร์ป้องกันมัลแวร์ที่ทันสมัย",
      "Endpoint ไม่ได้รับการอัปเดตด้วยแพตช์ความปลอดภัยล่าสุด",
      "การโจมตีแบบ Brute force"
    ],
    "explanation_th": "สาเหตุที่เป็นไปได้มากที่สุดที่ endpoint มีช่องโหว่ของระบบปฏิบัติการที่ทราบแล้ว คือไม่ได้ติดตั้งแพตช์ล่าสุดจากผู้จำหน่าย การตั้งค่าซอฟต์แวร์ป้องกันมัลแวร์ที่ไม่ดีหรือการโจมตีแบบ brute force จะไม่ก่อให้เกิดปัญหานี้ และ APT อาจเป็นผลลัพธ์ของสถานการณ์นี้ แต่ไม่ใช่สาเหตุ"
  },
  {
    "id": 169,
    "dom": 5,
    "question": "A network administrator found that one of the firewalls was no longer configured in accordance with recommended settings from DISA as it once was. What is the most likely reason for this?",
    "options": [
      "The settings from DISA were incorrect.",
      "Configuration management procedures for the device were not followed.",
      "Privilege creep.",
      "Data integrity."
    ],
    "correct_idx": 1,
    "explanation": "The best answer is that it is most likely that someone changed a setting without the proper approval and documentation; therefore, CM procedures were not followed.",
    "short_explanation_en": "The best answer is that it is most likely that someone changed a setting without the proper approval and documentation; therefore, CM procedures were not followed.",
    "question_th": "ผู้ดูแลระบบเครือข่ายพบว่าไฟร์วอลล์ตัวหนึ่งไม่ได้ถูกตั้งค่าตามคำแนะนำจาก DISA เหมือนเดิมอีกต่อไป สาเหตุที่เป็นไปได้มากที่สุดคืออะไร?",
    "options_th": [
      "การตั้งค่าจาก DISA ไม่ถูกต้อง",
      "ไม่ได้ปฏิบัติตามขั้นตอนการจัดการค่าคอนฟิกสำหรับอุปกรณ์นี้",
      "Privilege creep",
      "ความถูกต้องครบถ้วนของข้อมูล (Data integrity)"
    ],
    "explanation_th": "คำตอบที่ดีที่สุดคือมีแนวโน้มสูงที่มีบางคนเปลี่ยนการตั้งค่าโดยไม่ได้รับการอนุมัติและบันทึกเอกสารอย่างถูกต้อง ดังนั้นจึงไม่ได้ปฏิบัติตามขั้นตอนการจัดการค่าคอนฟิก (CM procedures)"
  },
  {
    "id": 170,
    "dom": 5,
    "question": "Mary isn’t sure if she is allowed to use her company-owned laptop to send messages to her friend on Facebook. To find out if she can, which policy should she refer to?",
    "options": [
      "AUP",
      "BYOD policy",
      "Data handling policy",
      "None of the above"
    ],
    "correct_idx": 0,
    "explanation": "Of the choices provided, the AUP is the one most likely to provide guidance concerning whether or not Mary can use the company-owned laptop for nonbusiness use.",
    "short_explanation_en": "Of the choices provided, the AUP is the one most likely to provide guidance concerning whether or not Mary can use the company-owned laptop for nonbusiness use.",
    "question_th": "แมรี่ไม่แน่ใจว่าเธอได้รับอนุญาตให้ใช้แล็ปท็อปของบริษัทส่งข้อความหาเพื่อนบน Facebook หรือไม่ เธอควรอ้างอิงนโยบายใดเพื่อหาคำตอบ?",
    "options_th": [
      "AUP",
      "นโยบาย BYOD",
      "นโยบายการจัดการข้อมูล",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "จากตัวเลือกที่ให้มา AUP (Acceptable Use Policy) เป็นตัวเลือกที่มีแนวโน้มมากที่สุดที่จะให้แนวทางว่าแมรี่สามารถใช้แล็ปท็อปของบริษัทเพื่อวัตถุประสงค์ที่ไม่เกี่ยวกับธุรกิจได้หรือไม่"
  },
  {
    "id": 171,
    "dom": 5,
    "question": "Of the policies listed, which one is most likely to provide guidance on connecting a home computer to the work network via VPN?",
    "options": [
      "AUP",
      "BYOD",
      "Data handling policy",
      "None of the above"
    ],
    "correct_idx": 1,
    "explanation": "Of the choices provided, the BYOD policy is the best choice. The BYOD policy is used by organizations that want to allow their employees to use their personally owned devices to connect to the corporate network.",
    "short_explanation_en": "Of the choices provided, the BYOD policy is the best choice.",
    "question_th": "จากนโยบายที่ระบุไว้ ข้อใดมีแนวโน้มมากที่สุดที่จะให้แนวทางเกี่ยวกับการเชื่อมต่อคอมพิวเตอร์ที่บ้านเข้ากับเครือข่ายที่ทำงานผ่าน VPN?",
    "options_th": [
      "AUP",
      "BYOD",
      "นโยบายการจัดการข้อมูล",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "จากตัวเลือกที่ให้มา นโยบาย BYOD เป็นตัวเลือกที่ดีที่สุด นโยบาย BYOD ถูกใช้โดยองค์กรที่ต้องการอนุญาตให้พนักงานใช้อุปกรณ์ส่วนตัวเชื่อมต่อกับเครือข่ายขององค์กร"
  },
  {
    "id": 172,
    "dom": 5,
    "question": "What is the best reason to provide social engineering training to employees?",
    "options": [
      "To show people how to perform a social engineering attack",
      "So employees can report security violations to management",
      "To teach people what to look out for",
      "None of the above"
    ],
    "correct_idx": 2,
    "explanation": "The correct answer is to show people what kinds of things they should look out for as a way to defend against social engineering attacks. 5 Business Continuity (BC), Disaster Recovery (DR) & Incident Response Concepts CHAPTER This chapter discusses the following topics: • Incident response • Business continuity • Disaster recovery This chapter explores how organizations respond to and recover from",
    "short_explanation_en": "The correct answer is to show people what kinds of things they should look out for as a way to defend against social engineering attacks.",
    "question_th": "เหตุผลที่ดีที่สุดในการจัดฝึกอบรมด้านวิศวกรรมสังคม (Social Engineering) ให้กับพนักงานคืออะไร?",
    "options_th": [
      "เพื่อแสดงให้ผู้คนเห็นวิธีทำการโจมตีทางวิศวกรรมสังคม",
      "เพื่อให้พนักงานสามารถรายงานการละเมิดความปลอดภัยต่อผู้บริหาร",
      "เพื่อสอนผู้คนให้รู้จักสิ่งที่ควรระวัง",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "คำตอบที่ถูกต้องคือเพื่อแสดงให้ผู้คนเห็นสิ่งที่ควรระวัง ในฐานะวิธีการป้องกันตนเองจากการโจมตีทางวิศวกรรมสังคม"
  },
  {
    "id": 173,
    "dom": 5,
    "question": "Of the following which is the most likely reason(s) a business continuity program might fail?",
    "options": [
      "Failure to test the plan and procedures",
      "Failure to document activation procedures",
      "Failure to address the threats the organization is most likely to face",
      "All of the above"
    ],
    "correct_idx": 3,
    "explanation": "Failure to test the plan and procedures, failure to document activation procedures, and failure to address the threats the organization is most likely to face are all common reasons a business continuity program can fail — any of these gaps can render the plan ineffective when a real disruption occurs.",
    "short_explanation_en": "Failure to test the plan and procedures, failure to document activation procedures, and failure to address the threats the organization is most likely to face are all common reasons a business continuity program can fail — any of these gaps can render the plan ineffective when a real disruption occurs.",
    "question_th": "ข้อใดคือสาเหตุที่เป็นไปได้มากที่สุดที่โปรแกรมความต่อเนื่องทางธุรกิจ (Business Continuity Program) อาจล้มเหลว?",
    "options_th": [
      "ไม่ทดสอบแผนและขั้นตอน",
      "ไม่บันทึกเอกสารขั้นตอนการเปิดใช้งาน",
      "ไม่จัดการกับภัยคุกคามที่องค์กรมีแนวโน้มเผชิญมากที่สุด",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "การไม่ทดสอบแผนและขั้นตอน การไม่บันทึกเอกสารขั้นตอนการเปิดใช้งาน และการไม่จัดการกับภัยคุกคามที่น่าจะเกิดขึ้น ล้วนเป็นสาเหตุทั่วไปที่โปรแกรมความต่อเนื่องทางธุรกิจอาจล้มเหลว — ช่องว่างเหล่านี้แต่ละอย่างสามารถทำให้แผนไร้ประสิทธิภาพเมื่อเกิดการหยุดชะงักจริง"
  },
  {
    "id": 185,
    "dom": 5,
    "question": "Which of the following is a data handling policy procedure?",
    "options": [
      "Transform",
      "Collect",
      "Encode",
      "Destroy"
    ],
    "correct_idx": 3,
    "explanation": "The data handling procedures are 'Classify', 'Categorize', 'Label', 'Store', 'Encrypt', 'Backup', and 'Destroy' (see ISC2 Study Guide, chapter 5, module 3).",
    "short_explanation_en": "The data handling procedures are 'Classify', 'Categorize', 'Label', 'Store', 'Encrypt', 'Backup', and 'Destroy' (see ISC2 Study Guide, chapter 5, module 3).",
    "question_th": "ข้อใดเป็นขั้นตอนของนโยบายการจัดการข้อมูล (Data Handling Policy)?",
    "options_th": [
      "แปลง (Transform)",
      "รวบรวม (Collect)",
      "เข้ารหัส (Encode)",
      "ทำลาย (Destroy)"
    ],
    "explanation_th": "ขั้นตอนการจัดการข้อมูลคือ 'Classify' (จัดประเภท), 'Categorize' (แบ่งหมวดหมู่), 'Label' (ติดป้าย), 'Store' (จัดเก็บ), 'Encrypt' (เข้ารหัส), 'Backup' (สำรอง) และ 'Destroy' (ทำลาย)"
  },
  {
    "id": 196,
    "dom": 5,
    "question": "Logging and monitoring systems are essential to:",
    "options": [
      "Identifying inefficient performing systems, preventing compromises, and providing a record of how systems are used",
      "Identifying efficient performing systems, labeling compromises, and providing a record of how systems are used",
      "Identifying inefficient performing systems, detecting compromises, and providing a record of how systems are used",
      "Identifying efficient performing systems, detecting compromises, and providing a record of how systems are used"
    ],
    "correct_idx": 2,
    "explanation": "According to the ISC2 Study Guide (chapter 5, module 1, under Data Handling Practices), logging and monitoring systems are characterized as being \"Essential to identifying inefficient performing systems, detecting compromises, and providinga record of how systems are used\". The remaining options are incorrect variations of this definition.",
    "short_explanation_en": "According to the ISC2 Study Guide (chapter 5, module 1, under Data Handling Practices), logging and monitoring systems are characterized as being \"Essential to identifying inefficient performing systems, detecting compromises, and...",
    "question_th": "ระบบบันทึกและเฝ้าติดตาม (Logging and monitoring) มีความสำคัญต่อ:",
    "options_th": [
      "การระบุระบบที่ทำงานได้ไม่มีประสิทธิภาพ ป้องกันการถูกบุกรุก และให้บันทึกวิธีที่ระบบถูกใช้งาน",
      "การระบุระบบที่ทำงานได้อย่างมีประสิทธิภาพ ติดป้ายการถูกบุกรุก และให้บันทึกวิธีที่ระบบถูกใช้งาน",
      "การระบุระบบที่ทำงานได้ไม่มีประสิทธิภาพ ตรวจจับการถูกบุกรุก และให้บันทึกวิธีที่ระบบถูกใช้งาน",
      "การระบุระบบที่ทำงานได้อย่างมีประสิทธิภาพ ตรวจจับการถูกบุกรุก และให้บันทึกวิธีที่ระบบถูกใช้งาน"
    ],
    "explanation_th": "ตาม ISC2 Study Guide ระบบบันทึกและเฝ้าติดตามมีลักษณะสำคัญคือ 'จำเป็นต่อการระบุระบบที่ทำงานได้ไม่มีประสิทธิภาพ ตรวจจับการถูกบุกรุก และให้บันทึกวิธีที่ระบบถูกใช้งาน' ตัวเลือกอื่น ๆ เป็นรูปแบบที่ไม่ถูกต้องของนิยามนี้"
  },
  {
    "id": 198,
    "dom": 5,
    "question": "The process that ensures that system changes do not adversely impact business operations is known as:",
    "options": [
      "Change Management",
      "Vulnerability Management",
      "Configuration Management",
      "Inventory Management"
    ],
    "correct_idx": 0,
    "explanation": "Change Management is the process of implementing necessary changes so that they do not adversely affect business operations (see ISC2 Study Guide, chapter 5, module 3). Vulnerability Management refers to the capacity to identify, track, prioritize and eliminate vulnerabilities in systems and devices. Configuration Management refers to a collection of activities with the purpose of establishing and maintaining the integrity of information systems through their development lifecycle (see NIST SP 1",
    "short_explanation_en": "Change Management is the process of implementing necessary changes so that they do not adversely affect business operations (see ISC2 Study Guide, chapter 5, module 3).",
    "question_th": "กระบวนการที่รับประกันว่าการเปลี่ยนแปลงระบบจะไม่ส่งผลกระทบเชิงลบต่อการดำเนินธุรกิจ เรียกว่า:",
    "options_th": [
      "Change Management",
      "Vulnerability Management",
      "Configuration Management",
      "Inventory Management"
    ],
    "explanation_th": "Change Management คือกระบวนการนำการเปลี่ยนแปลงที่จำเป็นมาใช้โดยไม่ส่งผลกระทบเชิงลบต่อการดำเนินธุรกิจ ในขณะที่ Vulnerability Management หมายถึงความสามารถในการระบุ ติดตาม จัดลำดับความสำคัญ และกำจัดช่องโหว่ในระบบและอุปกรณ์"
  },
  {
    "id": 199,
    "dom": 5,
    "question": "The last phase in the data security cycle is:",
    "options": [
      "Encryption",
      "Backup",
      "Archival github.com/ayemunhossain",
      "Destruction"
    ],
    "correct_idx": 3,
    "explanation": "According to the data security lifecycle model, the last phase is Data Destruction, which aims at guaranteeing that data contained in a given support is erased and destroyed in a way that renders it completely irrecoverable by any means (see ISC2 Study Guide, chapter 5, module 1, under Data Handling). Archival refers to the process whereby an organization creates a long-term data archive for compliance, storage reduction or business intelligence. A Backup is a copy of files and programs created",
    "short_explanation_en": "According to the data security lifecycle model, the last phase is Data Destruction, which aims at guaranteeing that data contained in a given support is erased and destroyed in a way that renders it completely irrecoverable by any means...",
    "question_th": "ขั้นตอนสุดท้ายในวงจรความปลอดภัยของข้อมูล (Data Security Cycle) คือ:",
    "options_th": [
      "การเข้ารหัส (Encryption)",
      "การสำรองข้อมูล (Backup)",
      "การจัดเก็บถาวร (Archival)",
      "การทำลาย (Destruction)"
    ],
    "explanation_th": "ตามโมเดลวงจรชีวิตความปลอดภัยของข้อมูล ขั้นตอนสุดท้ายคือ Data Destruction ซึ่งมีเป้าหมายเพื่อรับประกันว่าข้อมูลที่จัดเก็บในสื่อบันทึกจะถูกลบและทำลายในลักษณะที่ไม่สามารถกู้คืนได้ด้วยวิธีใด ๆ"
  },
  {
    "id": 205,
    "dom": 5,
    "question": "A device found not to comply with the security baseline should be:",
    "options": [
      "Disabled or separated into a quarantine area until a virus scan can be run",
      "Disabled or isolated into a quarantine area until it can be checked and updated.",
      "Placed in a demilitarized zone (DMZ) until it can be reviewed and updated",
      "Marked as potentially vulnerable and placed in a quarantine area"
    ],
    "correct_idx": 1,
    "explanation": "Security baselines are used to guarantee that network devices, software, hardware and endpoints are configured consistently. Baselines ensure that all such devices comply with the security baseline set by the organization. Whenever a device is found not compliant with the security baseline, it may be disabled or isolated into a quarantine area until it can be checked and updated (see ISC2 Study Guide, chapter 5, module 2, under Configuration Management Overview). A github.com/ayemunhossain DMZ i",
    "short_explanation_en": "Security baselines are used to guarantee that network devices, software, hardware and endpoints are configured consistently.",
    "question_th": "อุปกรณ์ที่พบว่าไม่สอดคล้องกับ security baseline ควรถูก:",
    "options_th": [
      "ปิดใช้งานหรือแยกไว้ในพื้นที่กักกันจนกว่าจะสามารถสแกนไวรัสได้",
      "ปิดใช้งานหรือแยกไว้ในพื้นที่กักกันจนกว่าจะสามารถตรวจสอบและอัปเดตได้",
      "วางไว้ใน DMZ จนกว่าจะสามารถทบทวนและอัปเดตได้",
      "ทำเครื่องหมายว่ามีความเสี่ยงและวางไว้ในพื้นที่กักกัน"
    ],
    "explanation_th": "Security baseline ใช้เพื่อรับประกันว่าอุปกรณ์เครือข่าย ซอฟต์แวร์ ฮาร์ดแวร์ และ endpoint ได้รับการตั้งค่าอย่างสอดคล้องกัน เมื่อพบอุปกรณ์ที่ไม่สอดคล้องกับ baseline อาจต้องปิดใช้งานหรือแยกไว้ในพื้นที่กักกันจนกว่าจะสามารถตรวจสอบและอัปเดตได้"
  },
  {
    "id": 213,
    "dom": 5,
    "question": "What does SIEM mean?",
    "options": [
      "Security Information and Enterprise Manager",
      "Security Information and Event Manager",
      "System Information and Enterprise Manager",
      "System Information and Event Manager"
    ],
    "correct_idx": 1,
    "explanation": "Security Information and Event Management (SIEM) is software for aggregating logs and events from applications, servers, network equipment, and specialized security equipment such as firewalls or Intrusion Prevention systems (IPS). SIEM offers a unified view of security-related data, and is capable of identifying deviations to the regular operation of systems that are often symptoms of attacks. The remaining options do not refer to any common term in Cybersecurity.",
    "short_explanation_en": "Security Information and Event Management (SIEM) is software for aggregating logs and events from applications, servers, network equipment, and specialized security equipment such as firewalls or Intrusion Prevention systems (IPS).",
    "question_th": "SIEM ย่อมาจากอะไร?",
    "options_th": [
      "Security Information and Enterprise Manager",
      "Security Information and Event Manager",
      "System Information and Enterprise Manager",
      "System Information and Event Manager"
    ],
    "explanation_th": "Security Information and Event Management (SIEM) คือซอฟต์แวร์สำหรับรวบรวม log และเหตุการณ์จากแอปพลิเคชัน เซิร์ฟเวอร์ อุปกรณ์เครือข่าย และอุปกรณ์ความปลอดภัยเฉพาะทาง เช่น ไฟร์วอลล์หรือระบบ Intrusion Prevention (IPS) SIEM ให้มุมมองรวมของข้อมูลที่เกี่ยวข้องกับความปลอดภัย และสามารถระบุความเบี่ยงเบนจากการทำงานปกติของระบบซึ่งมักเป็นสัญญาณของการโจมตี"
  },
  {
    "id": 219,
    "dom": 5,
    "question": "Which of the following is NOT a type of learning activity used in Security Awareness?",
    "options": [
      "Awareness",
      "Training",
      "Education",
      "Tutorial"
    ],
    "correct_idx": 3,
    "explanation": "The three learning activities that organizations use in training for security awareness are Education, Training and Awareness (see ISC2 Study Guide, chapter 5, module 4). A tutorial is a form of training, but is not on the list of types of learning activities.",
    "short_explanation_en": "The three learning activities that organizations use in training for security awareness are Education, Training and Awareness (see ISC2 Study Guide, chapter 5, module 4).",
    "question_th": "ข้อใดไม่ใช่ประเภทกิจกรรมการเรียนรู้ที่ใช้ใน Security Awareness?",
    "options_th": [
      "Awareness",
      "Training",
      "Education",
      "Tutorial"
    ],
    "explanation_th": "กิจกรรมการเรียนรู้สามประเภทที่องค์กรใช้ในการฝึกอบรมสร้างความตระหนักด้านความปลอดภัยคือ Education, Training และ Awareness ส่วน Tutorial เป็นรูปแบบหนึ่งของการฝึกอบรม แต่ไม่ได้อยู่ในรายการประเภทกิจกรรมการเรียนรู้"
  },
  {
    "id": 224,
    "dom": 5,
    "question": "In Change Management, which component addresses the procedures needed to undo changes?",
    "options": [
      "Request for Approval",
      "Request for Change",
      "Rollback",
      "Disaster and Recover"
    ],
    "correct_idx": 2,
    "explanation": "In Change Management, the Request For Change (RFC) is the first stage of the request: it formalizes the change from the stakeholders' point of view. The next phase is the Approval phase, where each stakeholder reviews the change, identifies and allocates the corresponding resources, and eventually either approves or rejects the change (appropriately documenting the approval or rejection). Finally, the Rollback phase addresses the actions to take when the monitoring change suggests a failure or i",
    "short_explanation_en": "In Change Management, the Request For Change (RFC) is the first stage of the request: it formalizes the change from the stakeholders' point of view.",
    "question_th": "ใน Change Management องค์ประกอบใดที่จัดการขั้นตอนที่จำเป็นในการยกเลิกการเปลี่ยนแปลง?",
    "options_th": [
      "Request for Approval",
      "Request for Change",
      "Rollback",
      "Disaster and Recover"
    ],
    "explanation_th": "ใน Change Management, Request For Change (RFC) เป็นขั้นตอนแรกของคำขอ: ทำให้การเปลี่ยนแปลงเป็นทางการจากมุมมองของผู้มีส่วนได้ส่วนเสีย ขั้นตอนถัดไปคือขั้นตอนการอนุมัติ และสุดท้ายคือขั้นตอน Rollback ที่จัดการการดำเนินการเมื่อการเปลี่ยนแปลงที่ถูกเฝ้าติดตามบ่งชี้ถึงความล้มเหลว"
  },
  {
    "id": 225,
    "dom": 5,
    "question": "Which of the following properties is NOT guaranteed by Digital Signatures?",
    "options": [
      "Authentication",
      "Confidentiality",
      "Non-Repudiation",
      "Integrity"
    ],
    "correct_idx": 1,
    "explanation": "The correct answer is B. A digital signature is the result of a cryptographic transformation of data which is useful for providing: data origin authentication, data integrity, and non-repudiation of the signer (see NIST SP 800-12 Rev. 1 under Digital Signature). However, digital signatures cannot guarantee confidentiality (i.e. the property of data or information not being made available or disclosed).",
    "short_explanation_en": "The correct answer is B. A digital signature is the result of a cryptographic transformation of data which is useful for providing: data origin authentication, data integrity, and non-repudiation of the signer (see NIST SP 800-12 Rev.",
    "question_th": "คุณสมบัติใดที่ Digital Signatures ไม่ได้รับประกัน?",
    "options_th": [
      "Authentication",
      "Confidentiality",
      "Non-Repudiation",
      "Integrity"
    ],
    "explanation_th": "คำตอบคือ B ลายเซ็นดิจิทัลเป็นผลลัพธ์ของการแปลงข้อมูลทางการเข้ารหัสซึ่งมีประโยชน์ในการให้: การยืนยันแหล่งที่มาของข้อมูล ความถูกต้องครบถ้วนของข้อมูล และ non-repudiation ของผู้ลงนาม อย่างไรก็ตาม ลายเซ็นดิจิทัลไม่สามารถรับประกันความลับ (confidentiality) ได้"
  },
  {
    "id": 226,
    "dom": 5,
    "question": "Which devices have the PRIMARY objective of collecting and analyzing security events?",
    "options": [
      "Hubs",
      "Firewalls",
      "Routers",
      "SIEM"
    ],
    "correct_idx": 3,
    "explanation": "A Security Information and Event Management (SIEM) system is an application that gathers security data from information system components and presents actionable information through a unified interface. Routers and Hubs aim to receive and forward traffic. Firewalls filter incoming traffic. Neither of these last three options aims at collecting and analyzing security events.",
    "short_explanation_en": "A Security Information and Event Management (SIEM) system is an application that gathers security data from information system components and presents actionable information through a unified interface.",
    "question_th": "อุปกรณ์ใดมีวัตถุประสงค์หลักในการรวบรวมและวิเคราะห์เหตุการณ์ด้านความปลอดภัย?",
    "options_th": [
      "Hubs",
      "Firewalls",
      "Routers",
      "SIEM"
    ],
    "explanation_th": "ระบบ Security Information and Event Management (SIEM) คือแอปพลิเคชันที่รวบรวมข้อมูลความปลอดภัยจากส่วนประกอบของระบบสารสนเทศและนำเสนอข้อมูลที่สามารถนำไปปฏิบัติได้ผ่านอินเทอร์เฟซแบบรวม Routers และ Hubs มีเป้าหมายเพื่อรับและส่งต่อทราฟฟิก ส่วน Firewalls กรองทราฟฟิกขาเข้า"
  },
  {
    "id": 227,
    "dom": 5,
    "question": "What is an effective way of hardening a system? github.com/ayemunhossain",
    "options": [
      "Patch the system",
      "Have an IDS in place",
      "Run a vulnerability scan",
      "Create a DMZ for web application services"
    ],
    "correct_idx": 0,
    "explanation": "According to NIST SP 800-152, hardening is defined as the process of eliminating the means of an attack by simultaneously patching vulnerabilities and turning off nonessential services. The ISC2 Study Guide, chapter 5, module 2, under Configuration Management Overview, reads \"One of the best ways to achieve a hardened system is to have updates, patches, and service packs installed automatically\". Vulnerability scans and IDS do not eliminate the means of an attack. The DMZ does not eliminate vuln",
    "short_explanation_en": "According to NIST SP 800-152, hardening is defined as the process of eliminating the means of an attack by simultaneously patching vulnerabilities and turning off nonessential services.",
    "question_th": "วิธีที่มีประสิทธิภาพในการทำ hardening ระบบคืออะไร?",
    "options_th": [
      "แพตช์ระบบ",
      "มี IDS ติดตั้งอยู่",
      "รันการสแกนช่องโหว่",
      "สร้าง DMZ สำหรับบริการเว็บแอปพลิเคชัน"
    ],
    "explanation_th": "ตาม NIST SP 800-152 การ hardening ถูกนิยามว่าเป็นกระบวนการขจัดช่องทางการโจมตีด้วยการแพตช์ช่องโหว่พร้อมกับปิดบริการที่ไม่จำเป็น การสแกนช่องโหว่และ IDS ไม่ได้ขจัดช่องทางการโจมตี และ DMZ ก็ไม่ได้ขจัดช่องโหว่เช่นกัน"
  },
  {
    "id": 228,
    "dom": 5,
    "question": "Which type of key can be used to both encrypt and decrypt the same message?",
    "options": [
      "A public key",
      "A private key",
      "An asymmetric key",
      "A symmetric key"
    ],
    "correct_idx": 3,
    "explanation": "Symmetric-key algorithms are a class of cryptographic algorithms that use a single key for both encrypting and decrypting of data. Asymmetric cryptography uses pairs of related keys: the public and the corresponding private keys. A message encrypted with the public key can only be decrypted by its corresponding private key, and vice versa. The term 'asymmetric key' is not applicable here.",
    "short_explanation_en": "Symmetric-key algorithms are a class of cryptographic algorithms that use a single key for both encrypting and decrypting of data.",
    "question_th": "กุญแจประเภทใดที่สามารถใช้ทั้งเข้ารหัสและถอดรหัสข้อความเดียวกันได้?",
    "options_th": [
      "Public key",
      "Private key",
      "Asymmetric key",
      "Symmetric key"
    ],
    "explanation_th": "อัลกอริทึมแบบ Symmetric-key คือกลุ่มอัลกอริทึมการเข้ารหัสที่ใช้กุญแจเดียวสำหรับทั้งการเข้ารหัสและถอดรหัสข้อมูล ในขณะที่การเข้ารหัสแบบ Asymmetric ใช้คู่กุญแจที่สัมพันธ์กัน: public key และ private key ที่สอดคล้องกัน"
  },
  {
    "id": 229,
    "dom": 5,
    "question": "Which regulations address data protection and privacy in Europe?",
    "options": [
      "SOX",
      "HIPAA github.com/ayemunhossain",
      "FISMA",
      "GDPR"
    ],
    "correct_idx": 3,
    "explanation": "The General Data Protection Regulation (GDPR) is the official EU regulation for data protection and privacy. The remaining three options only apply to the United States. The Federal Information Security Management Act (FISMA) contains guidelines and security standards that protect government information and operations in the United States. The Sarbanes–Oxley (SOx) Act of 2002 is a United States federal law that mandates and regulates financial record-keeping and reporting practices for corporati",
    "short_explanation_en": "The General Data Protection Regulation (GDPR) is the official EU regulation for data protection and privacy.",
    "question_th": "กฎระเบียบใดที่เกี่ยวข้องกับการปกป้องข้อมูลและความเป็นส่วนตัวในยุโรป?",
    "options_th": [
      "SOX",
      "HIPAA",
      "FISMA",
      "GDPR"
    ],
    "explanation_th": "General Data Protection Regulation (GDPR) คือกฎระเบียบอย่างเป็นทางการของ EU สำหรับการปกป้องข้อมูลและความเป็นส่วนตัว ตัวเลือกอีกสามข้อใช้เฉพาะในสหรัฐอเมริกาเท่านั้น"
  },
  {
    "id": 233,
    "dom": 5,
    "question": "How many data labels are considered good practice?",
    "options": [
      "2 - 3",
      "1",
      "1-2 github.com/ayemunhossain",
      ">4"
    ],
    "correct_idx": 0,
    "explanation": "According to the ISC2 Study Guide, chapter 5, module 1, under Data Handling Practices in Labeling, we read that two or three classifications are manageable, but more than four tend to be challenging to manage.",
    "short_explanation_en": "According to the ISC2 Study Guide, chapter 5, module 1, under Data Handling Practices in Labeling, we read that two or three classifications are manageable, but more than four tend to be challenging to manage.",
    "question_th": "ป้ายกำกับข้อมูล (Data labels) กี่ประเภทที่ถือเป็นแนวปฏิบัติที่ดี?",
    "options_th": [
      "2-3",
      "1",
      "1-2",
      "มากกว่า 4"
    ],
    "explanation_th": "ตาม ISC2 Study Guide บทที่ 5 โมดูล 1 ในหัวข้อ Data Handling Practices in Labeling ระบุว่าการจัดประเภท 2 หรือ 3 ประเภทนั้นสามารถจัดการได้ดี แต่มากกว่า 4 ประเภทมักจะจัดการได้ยาก"
  },
  {
    "id": 234,
    "dom": 5,
    "question": "Security posters are an element PRIMARILY employed in: (★)",
    "options": [
      "Security Awareness",
      "Incident Response Plans",
      "Business Continuity Plans",
      "Physical Security Controls"
    ],
    "correct_idx": 0,
    "explanation": "Security posters are used to raise the awareness of employees regarding security threats, and thus are primarily employed in Security Awareness (see ISC2 Study Guide, chapter 5, module 4).",
    "short_explanation_en": "Security posters are used to raise the awareness of employees regarding security threats, and thus are primarily employed in Security Awareness (see ISC2 Study Guide, chapter 5, module 4).",
    "question_th": "โปสเตอร์ด้านความปลอดภัยเป็นองค์ประกอบที่ใช้เป็นหลักใน:",
    "options_th": [
      "Security Awareness",
      "Incident Response Plans",
      "Business Continuity Plans",
      "Physical Security Controls"
    ],
    "explanation_th": "โปสเตอร์ด้านความปลอดภัยใช้เพื่อสร้างความตระหนักของพนักงานเกี่ยวกับภัยคุกคามด้านความปลอดภัย จึงถูกใช้เป็นหลักใน Security Awareness"
  },
  {
    "id": 236,
    "dom": 5,
    "question": "Which of the following is NOT an element of System Security Configuration Management?",
    "options": [
      "Inventory",
      "Baselines",
      "Updates",
      "Audit logs"
    ],
    "correct_idx": 3,
    "explanation": "System Security Configuration Management elements are inventories, baselines, updates and patches. Audit logs can be generated after 'Verification and Audit'. However, 'Verification and Audit' is a configuration management procedure, and not a configuration management element (see ISC2 Study Guide, chapter 5, module 2, under Chapter Resource).",
    "short_explanation_en": "System Security Configuration Management elements are inventories, baselines, updates and patches.",
    "question_th": "ข้อใดไม่ใช่องค์ประกอบของ System Security Configuration Management?",
    "options_th": [
      "Inventory",
      "Baselines",
      "Updates",
      "Audit logs"
    ],
    "explanation_th": "องค์ประกอบของ System Security Configuration Management คือ inventories, baselines, updates และ patches ส่วน Audit logs สามารถถูกสร้างขึ้นหลังจาก 'Verification and Audit' แต่ 'Verification and Audit' เป็นขั้นตอนการจัดการค่าคอนฟิก ไม่ใช่องค์ประกอบ"
  },
  {
    "id": 240,
    "dom": 5,
    "question": "Which of the following is NOT a feature of a cryptographic hash function?",
    "options": [
      "Reversible",
      "Unique",
      "Deterministic",
      "Useful"
    ],
    "correct_idx": 1,
    "explanation": "A cryptographic hash function should be unique, deterministic, useful, tamper-evident (also referred to as 'the avalanche effect' or 'integrity assurance') and non-reversible (also referred to as 'one-way'). Nonreversible means it is impossible to reverse the hash function to derive the original text of a message from its hash output value (see ISC2 Study Guide, chapter 5, module 1, under Encryption Overview). Thus, the 'reversible' feature is not a feature of a hash function.",
    "short_explanation_en": "A cryptographic hash function should be unique, deterministic, useful, tamper-evident (also referred to as 'the avalanche effect' or 'integrity assurance') and non-reversible (also referred to as 'one-way').",
    "question_th": "ข้อใดไม่ใช่คุณสมบัติของฟังก์ชันแฮชเข้ารหัส (Cryptographic hash function)?",
    "options_th": [
      "Reversible (ย้อนกลับได้)",
      "Unique (มีเอกลักษณ์)",
      "Deterministic (แน่นอน)",
      "Useful (มีประโยชน์)"
    ],
    "explanation_th": "ฟังก์ชันแฮชเข้ารหัสควรมีเอกลักษณ์ แน่นอน มีประโยชน์ ตรวจจับการดัดแปลงได้ (หรือเรียกว่า 'avalanche effect') และไม่สามารถย้อนกลับได้ (non-reversible หรือ 'one-way') การไม่สามารถย้อนกลับหมายความว่าเป็นไปไม่ได้ที่จะย้อนฟังก์ชันแฮชเพื่อหาข้อความต้นฉบับจากผลลัพธ์แฮชของมัน ดังนั้นคุณสมบัติ 'reversible' จึงไม่ใช่คุณสมบัติของฟังก์ชันแฮช"
  },
  {
    "id": 244,
    "dom": 5,
    "question": "According to ISC2, which are the six phases of data handling? github.com/ayemunhossain",
    "options": [
      "Create -> Use -> Store -> Share -> Archive -> Destroy",
      "Create -> Store -> Use -> Share -> Archive -> Destroy",
      "Create -> Share -> Use ->Store -> Archive -> Destroy",
      "Create -> Share -> Store -> Use -> Archive -> Destroy"
    ],
    "correct_idx": 1,
    "explanation": "According to the data security lifecycle model, the six phases of data security lifecycle model are Create -> Store -> Use -> Share -> Archive -> Destroy (see ISC2 Study Guide, chapter 5, module 1 under data handling).",
    "short_explanation_en": "According to the data security lifecycle model, the six phases of data security lifecycle model are Create -> Store -> Use -> Share -> Archive -> Destroy (see ISC2 Study Guide, chapter 5, module 1 under data handling).",
    "question_th": "ตาม ISC2 หกขั้นตอนของการจัดการข้อมูลคืออะไร?",
    "options_th": [
      "Create -> Use -> Store -> Share -> Archive -> Destroy",
      "Create -> Store -> Use -> Share -> Archive -> Destroy",
      "Create -> Share -> Use ->Store -> Archive -> Destroy",
      "Create -> Share -> Store -> Use -> Archive -> Destroy"
    ],
    "explanation_th": "ตามโมเดลวงจรชีวิตความปลอดภัยของข้อมูล หกขั้นตอนของวงจรชีวิตความปลอดภัยของข้อมูลคือ Create -> Store -> Use -> Share -> Archive -> Destroy"
  },
  {
    "id": 247,
    "dom": 5,
    "question": "In order to find out whether personal tablet devices are allowed in the office, which of the following policies would be helpful to read?",
    "options": [
      "BYOD",
      "Privacy Policy",
      "Change Management Policy",
      "AUP"
    ],
    "correct_idx": 0,
    "explanation": "The Bring Your Own Device (BYOD) policy establishes rules for using personal devices for work-related activities. The Acceptable Use Policy (AUP) defines the permissions and limitations that users must agree to while accessing the network and using computer systems or any other organizational resources. The Privacy Policy (PP) outlines the data security mechanisms that protect customer data. In the context of Cybersecurity, a Change Management Policy (CMP) establishes the use of standardized met",
    "short_explanation_en": "The Bring Your Own Device (BYOD) policy establishes rules for using personal devices for work-related activities.",
    "question_th": "เพื่อค้นหาว่าอนุญาตให้ใช้อุปกรณ์แท็บเล็ตส่วนตัวในสำนักงานหรือไม่ ควรอ่านนโยบายใด?",
    "options_th": [
      "BYOD",
      "Privacy Policy",
      "Change Management Policy",
      "AUP"
    ],
    "explanation_th": "นโยบาย Bring Your Own Device (BYOD) กำหนดกฎเกณฑ์การใช้อุปกรณ์ส่วนตัวสำหรับกิจกรรมที่เกี่ยวข้องกับงาน ในขณะที่ Acceptable Use Policy (AUP) กำหนดสิทธิ์และข้อจำกัดที่ผู้ใช้ต้องยอมรับเมื่อเข้าถึงเครือข่ายและใช้ระบบคอมพิวเตอร์"
  },
  {
    "id": 251,
    "dom": 5,
    "question": "A best practice of patch management is to:",
    "options": [
      "Apply all patches as quickly as possible",
      "Test patches before applying them",
      "Apply patches every Wednesday",
      "Apply patches according to the vendor's reputation"
    ],
    "correct_idx": 1,
    "explanation": "Patches sometimes disrupt a system's configurations and stability. One of the main challenges for security professionalsis to ensure that patches are deployed as quickly as possible, while simultaneously ensuring the stability of running systems. To prevent flawed patches from negatively affecting running systems, it is good practice to test patches in a designated qualification environment before applying them to production systems (see ISC2 Study Guide, chapter 5, module 2 under Configuration",
    "short_explanation_en": "Patches sometimes disrupt a system's configurations and stability.",
    "question_th": "แนวปฏิบัติที่ดีในการทำ patch management คือ:",
    "options_th": [
      "ติดตั้งแพตช์ทั้งหมดให้เร็วที่สุด",
      "ทดสอบแพตช์ก่อนติดตั้ง",
      "ติดตั้งแพตช์ทุกวันพุธ",
      "ติดตั้งแพตช์ตามชื่อเสียงของผู้จำหน่าย"
    ],
    "explanation_th": "บางครั้งแพตช์อาจส่งผลกระทบต่อการตั้งค่าและความเสถียรของระบบ หนึ่งในความท้าทายหลักของผู้เชี่ยวชาญด้านความปลอดภัยคือการรับประกันว่าแพตช์ถูกนำไปใช้อย่างรวดเร็วในขณะที่ยังรับประกันความเสถียรของระบบที่กำลังทำงานอยู่ เพื่อป้องกันไม่ให้แพตช์ที่มีข้อบกพร่องส่งผลกระทบเชิงลบ จึงเป็นแนวปฏิบัติที่ดีที่จะทดสอบแพตช์ในสภาพแวดล้อมทดสอบก่อนนำไปใช้กับระบบจริง"
  },
  {
    "id": 253,
    "dom": 5,
    "question": "Which of these is NOT a change management component?",
    "options": [
      "Approval",
      "RFC",
      "Rollback",
      "Governance"
    ],
    "correct_idx": 3,
    "explanation": "All significant change management practices address typical core activities: Request For Change (RFC), Approval, and Rollback (see ISC2 Study Guide, chapter 5, module 3). Governance is not one of these practices.",
    "short_explanation_en": "All significant change management practices address typical core activities: Request For Change (RFC), Approval, and Rollback (see ISC2 Study Guide, chapter 5, module 3).",
    "question_th": "ข้อใดไม่ใช่องค์ประกอบของ change management?",
    "options_th": [
      "Approval",
      "RFC",
      "Rollback",
      "Governance"
    ],
    "explanation_th": "แนวปฏิบัติ change management ที่สำคัญทั้งหมดครอบคลุมกิจกรรมหลักทั่วไป: Request For Change (RFC), Approval และ Rollback ส่วน Governance ไม่ใช่หนึ่งในแนวปฏิบัติเหล่านี้"
  },
  {
    "id": 254,
    "dom": 5,
    "question": "Which of the following is NOT a social engineering technique?",
    "options": [
      "Pretexting",
      "Quid pro quo",
      "Double-dealing",
      "Baiting"
    ],
    "correct_idx": 2,
    "explanation": "Baiting is a social engineering attack wherein a scammer uses a false promise to lure a victim. Pretexting is a social engineering technique that manipulates victims into disclosing information. Quid pro quo is a social engineering attack (technically, one that combines 'baiting' with 'pretexting') that promises users a profit in exchange for information that can later be used to gain control of a user's account or sensitive information). Regarding cybersecurity, 'Double-ealing' is not a valid s",
    "short_explanation_en": "Baiting is a social engineering attack wherein a scammer uses a false promise to lure a victim.",
    "question_th": "ข้อใดไม่ใช่เทคนิควิศวกรรมสังคม (Social Engineering)?",
    "options_th": [
      "Pretexting",
      "Quid pro quo",
      "Double-dealing",
      "Baiting"
    ],
    "explanation_th": "Baiting คือการโจมตีทางวิศวกรรมสังคมที่ผู้หลอกลวงใช้คำสัญญาเท็จเพื่อล่อลวงเหยื่อ Pretexting คือเทคนิคที่จัดการเหยื่อให้เปิดเผยข้อมูล Quid pro quo คือการโจมตีที่รวม 'baiting' กับ 'pretexting' เข้าด้วยกัน ส่วน 'Double-dealing' ไม่ใช่เทคนิควิศวกรรมสังคมที่ถูกต้องในบริบทความปลอดภัยไซเบอร์"
  },
  {
    "id": 288,
    "dom": 5,
    "question": "If a company collects PII, which policy is required?",
    "options": [
      "Remote Access Policy",
      "GDPR",
      "Privacy Policy",
      "Acceptable Use Policy"
    ],
    "correct_idx": 2,
    "explanation": "A Privacy Policy (PP) outlines the data security mechanisms which ensure that customer data is protected, namely, how Personal Identifiable Information (PII) is collected, stored and processed. An Acceptable Use Policy (AUP) defines the guidelines and limitations that users must agree on while accessing the an organization's network, computer systems or other related resources. The General Data Protection Regulation (GDPR) is a regulation on data protection and privacy for the European Union and",
    "short_explanation_en": "A Privacy Policy (PP) outlines the data security mechanisms which ensure that customer data is protected, namely, how Personal Identifiable Information (PII) is collected, stored and processed.",
    "question_th": "หากบริษัทเก็บรวบรวม PII ต้องมีนโยบายใด?",
    "options_th": [
      "Remote Access Policy",
      "GDPR",
      "Privacy Policy",
      "Acceptable Use Policy"
    ],
    "explanation_th": "Privacy Policy (PP) ระบุกลไกความปลอดภัยของข้อมูลที่รับประกันว่าข้อมูลลูกค้าได้รับการปกป้อง กล่าวคือ วิธีที่ Personal Identifiable Information (PII) ถูกเก็บรวบรวม จัดเก็บ และประมวลผล"
  },
  {
    "id": 307,
    "dom": 5,
    "question": "On a BYOD model, which of these technologies is best suited to keep corporate data and applications separate from personal?",
    "options": [
      "Biometrics",
      "Full-device encryption",
      "Context-aware authentication",
      "Containerization"
    ],
    "correct_idx": 3,
    "explanation": "Containerization allows users to run corporate applications and access corporate data in a secure environment that applications outside the container cannot access. Containerization solutions for mobile devices typically use encryption and other isolation techniques to ensure that data and applications do not cross over. Full-device encryption helps reduce the risk of theft or loss of a device, thereby reducing the risk of a data breach. Biometrics and context-aware authentication are helpful in",
    "short_explanation_en": "Containerization allows users to run corporate applications and access corporate data in a secure environment that applications outside the container cannot access.",
    "question_th": "ในโมเดล BYOD เทคโนโลยีใดเหมาะสมที่สุดในการแยกข้อมูลและแอปพลิเคชันขององค์กรออกจากข้อมูลส่วนตัว?",
    "options_th": [
      "Biometrics",
      "Full-device encryption",
      "Context-aware authentication",
      "Containerization"
    ],
    "explanation_th": "Containerization ช่วยให้ผู้ใช้สามารถรันแอปพลิเคชันขององค์กรและเข้าถึงข้อมูลขององค์กรในสภาพแวดล้อมที่ปลอดภัยซึ่งแอปพลิเคชันภายนอกคอนเทนเนอร์ไม่สามารถเข้าถึงได้ โซลูชัน Containerization สำหรับอุปกรณ์มือถือมักใช้การเข้ารหัสและเทคนิคการแยกส่วนอื่น ๆ เพื่อรับประกันว่าข้อมูลและแอปพลิเคชันจะไม่ปะปนกัน"
  },
  {
    "id": 312,
    "dom": 5,
    "question": "While performing background checks on new employees, which of these can NEVER be an attribute for discrimination?",
    "options": [
      "Employment history, references, criminal records",
      "Credit history, employment history, references",
      "Criminal Records, credit history, references",
      "References, education, political affiliation, employment history"
    ],
    "correct_idx": 3,
    "explanation": "The correct answer is A. A best practice when hiring new staff is to perform a background check, so as to minimize risks. A company can use discriminatory factors such as references, academic degrees, and employment, criminal, or credit history (although this is not very common). However, it is illegal to inquire about potential or current employees' political preferences (see ISC2 Study Guide, chapter 5, module 4).",
    "short_explanation_en": "The correct answer is A. A best practice when hiring new staff is to perform a background check, so as to minimize risks.",
    "question_th": "เมื่อทำการตรวจสอบประวัติพนักงานใหม่ ข้อใดไม่สามารถใช้เป็นปัจจัยในการเลือกปฏิบัติได้เลย?",
    "options_th": [
      "ประวัติการทำงาน การอ้างอิง บันทึกอาชญากรรม",
      "ประวัติเครดิต ประวัติการทำงาน การอ้างอิง",
      "บันทึกอาชญากรรม ประวัติเครดิต การอ้างอิง",
      "การอ้างอิง การศึกษา ความเกี่ยวข้องทางการเมือง ประวัติการทำงาน"
    ],
    "explanation_th": "คำตอบที่ถูกต้องคือ A แนวปฏิบัติที่ดีเมื่อจ้างพนักงานใหม่คือการตรวจสอบประวัติเพื่อลดความเสี่ยง บริษัทสามารถใช้ปัจจัยเช่น การอ้างอิง วุฒิการศึกษา และประวัติการทำงาน อาชญากรรม หรือเครดิต (แม้จะไม่ค่อยพบบ่อยนัก) อย่างไรก็ตาม การสอบถามเกี่ยวกับความเกี่ยวข้องทางการเมืองของพนักงานที่มีศักยภาพหรือปัจจุบันนั้นผิดกฎหมาย"
  },
  {
    "id": 318,
    "dom": 5,
    "question": "What is the PRIMARY objective of a degaussing? github.com/ayemunhossain",
    "options": [
      "Preventing magnetic side-channel attacks",
      "Reducing noisy data on a disk",
      "Erasing the data on a disk",
      "Retaining the data on a disk"
    ],
    "correct_idx": 2,
    "explanation": "Degaussing is a technique used to erase data from a magnetic storage device, such as a hard disk drive (HDD) or magnetic tape. In degaussing, devices are exposed to strong magnetic fields that neutralize the magnetic records of the data stored on the device. This effectively erases the data, making it difficult or impossible to recover. Degaussing is often used to securely erase data from storage devices before disposing or repurposing them, thereby ensuring that unauthorized parties cannot acce",
    "short_explanation_en": "Degaussing is a technique used to erase data from a magnetic storage device, such as a hard disk drive (HDD) or magnetic tape.",
    "question_th": "วัตถุประสงค์หลักของการทำ degaussing คืออะไร?",
    "options_th": [
      "ป้องกันการโจมตีแบบ magnetic side-channel",
      "ลดข้อมูลรบกวนบนดิสก์",
      "ลบข้อมูลบนดิสก์",
      "รักษาข้อมูลบนดิสก์ไว้"
    ],
    "explanation_th": "Degaussing เป็นเทคนิคที่ใช้ลบข้อมูลจากอุปกรณ์จัดเก็บข้อมูลแบบแม่เหล็ก เช่น ฮาร์ดดิสก์ไดรฟ์ (HDD) หรือเทปแม่เหล็ก ในการทำ degaussing อุปกรณ์จะถูกทำให้สัมผัสกับสนามแม่เหล็กความเข้มสูงที่ทำให้บันทึกแม่เหล็กของข้อมูลที่จัดเก็บในอุปกรณ์เป็นกลาง ทำให้ข้อมูลถูกลบอย่างมีประสิทธิภาพ ยากหรือเป็นไปไม่ได้ที่จะกู้คืน"
  },
  {
    "id": 326,
    "dom": 5,
    "question": "What is the PRIMARY objective of a rollback in the context of the change management process?",
    "options": [
      "Identify the required changes needed",
      "Validate the system change process",
      "Restore the system to its last state before the change was made",
      "Establish a minimum understood and acceptable level of security requirements"
    ],
    "correct_idx": 2,
    "explanation": "In the context of the change management process, the primary objective of a rollback is to restore the system to its last state before the change was made. By rolling back the change, the system can be returned to its previous state, which may help to resolve issues and restore regular operation. Rollbacks can be either triggered automatically in response to a failure or error, or initiated manually during the change management process (see ISC2 Study Guide, chapter 5, module 2). Establishing a",
    "short_explanation_en": "In the context of the change management process, the primary objective of a rollback is to restore the system to its last state before the change was made.",
    "question_th": "วัตถุประสงค์หลักของ rollback ในบริบทของกระบวนการ change management คืออะไร?",
    "options_th": [
      "ระบุการเปลี่ยนแปลงที่จำเป็น",
      "ตรวจสอบความถูกต้องของกระบวนการเปลี่ยนแปลงระบบ",
      "คืนสถานะระบบให้กลับไปเป็นสถานะล่าสุดก่อนการเปลี่ยนแปลง",
      "สร้างระดับความเข้าใจและระดับข้อกำหนดด้านความปลอดภัยที่ยอมรับได้ขั้นต่ำ"
    ],
    "explanation_th": "ในบริบทของกระบวนการ change management วัตถุประสงค์หลักของ rollback คือการคืนสถานะระบบให้กลับไปเป็นสถานะล่าสุดก่อนที่การเปลี่ยนแปลงจะเกิดขึ้น การ rollback การเปลี่ยนแปลงจะทำให้ระบบกลับไปสู่สถานะก่อนหน้า ซึ่งอาจช่วยแก้ปัญหาและคืนการทำงานปกติของระบบ"
  },
  {
    "id": 329,
    "dom": 5,
    "question": "The PRIMARY objective of a security baseline is to establish ...",
    "options": [
      ". a minimum understood and a good level of security requirements",
      "a minimum understood and acceptable level of security requirements github.com/ayemunhossain",
      "security and configuration requirements",
      "a maximum understood and an acceptable level of security requirements"
    ],
    "correct_idx": 1,
    "explanation": "A security baseline is a set of security standards, guidelines and procedures used to ensure that a system or network meets a minimum level of security. Security baselines are typically based on industry best practices, regulatory requirements, and an organization's specific security needs. The primary objective of a security baseline is to establish a minimum understood and acceptable level of security requirements. While it is true that a security baseline specifies security and configuration",
    "short_explanation_en": "A security baseline is a set of security standards, guidelines and procedures used to ensure that a system or network meets a minimum level of security.",
    "question_th": "วัตถุประสงค์หลักของ security baseline คือการสร้าง...",
    "options_th": [
      "ระดับความเข้าใจขั้นต่ำและระดับข้อกำหนดด้านความปลอดภัยที่ดี",
      "ระดับความเข้าใจขั้นต่ำและระดับข้อกำหนดด้านความปลอดภัยที่ยอมรับได้",
      "ข้อกำหนดด้านความปลอดภัยและการตั้งค่าคอนฟิก",
      "ระดับความเข้าใจสูงสุดและระดับข้อกำหนดด้านความปลอดภัยที่ยอมรับได้"
    ],
    "explanation_th": "Security baseline คือชุดมาตรฐานความปลอดภัย แนวทาง และขั้นตอนที่ใช้เพื่อรับประกันว่าระบบหรือเครือข่ายมีระดับความปลอดภัยขั้นต่ำ security baseline มักอิงตามแนวปฏิบัติที่ดีของอุตสาหกรรม ข้อกำหนดด้านกฎระเบียบ และความต้องการด้านความปลอดภัยเฉพาะขององค์กร วัตถุประสงค์หลักของ security baseline คือการสร้างระดับความเข้าใจขั้นต่ำและระดับข้อกำหนดด้านความปลอดภัยที่ยอมรับได้"
  },
  {
    "id": 335,
    "dom": 5,
    "question": "Which of these is a type of corrective security control? github.com/ayemunhossain",
    "options": [
      "Patches",
      "Intrusion detection systems",
      "Guidelines",
      "Encryption"
    ],
    "correct_idx": 0,
    "explanation": "Patches are a type of corrective security control, since they repair damage and restore resources and capabilities to a secure and previously-updated state (see ISC2 Study Guide, chapter 5, module 2). Encryption is a preventive security control that ensures data confidentiality. Intrusion detection systems are detective controls, since they monitor a given system for unwanted activity. Intrusion detection systems (IDS) alert administrators to potential security breaches or attacks. Although they",
    "short_explanation_en": "Patches are a type of corrective security control, since they repair damage and restore resources and capabilities to a secure and previously-updated state (see ISC2 Study Guide, chapter 5, module 2).",
    "question_th": "ข้อใดเป็นประเภทของ corrective security control?",
    "options_th": [
      "Patches",
      "Intrusion detection systems",
      "Guidelines",
      "Encryption"
    ],
    "explanation_th": "Patches เป็นประเภทหนึ่งของ corrective security control เนื่องจากซ่อมแซมความเสียหายและคืนทรัพยากรและความสามารถให้กลับสู่สถานะที่ปลอดภัยและอัปเดตแล้วก่อนหน้า Encryption เป็น preventive security control ที่รับประกันความลับของข้อมูล Intrusion detection systems เป็น detective controls เนื่องจากเฝ้าติดตามระบบสำหรับกิจกรรมที่ไม่พึงประสงค์"
  },
  {
    "id": 344,
    "dom": 5,
    "question": "(★) Which of these statements is TRUE about cybersquatting?",
    "options": [
      "Its an unethical practice but everyone does it",
      "It is partially illegal practice",
      "It is an illegal practice",
      "It is s a legal practice"
    ],
    "correct_idx": 2,
    "explanation": "Cybersquatting (also known as domain squatting) is the practice of speculatively registering and then selling (typically ata high price) a domain name, with the intent of profiting from someone else's trademark. An example would be someone registering the domain name \"mycompany.com\" and then offering to sell it to the owner of the trademark \"MyCompany\" for a high price. Cybersquatting can cause confusion and damage to the trademark owner's brand, which is generally considered unethical and decep",
    "short_explanation_en": "Cybersquatting (also known as domain squatting) is the practice of speculatively registering and then selling (typically ata high price) a domain name, with the intent of profiting from someone else's trademark.",
    "question_th": "ข้อความใดเป็นจริงเกี่ยวกับ cybersquatting?",
    "options_th": [
      "เป็นแนวปฏิบัติที่ผิดจริยธรรมแต่ทุกคนก็ทำกัน",
      "เป็นแนวปฏิบัติที่ผิดกฎหมายบางส่วน",
      "เป็นแนวปฏิบัติที่ผิดกฎหมาย",
      "เป็นแนวปฏิบัติที่ถูกกฎหมาย"
    ],
    "explanation_th": "Cybersquatting (หรือเรียกว่า domain squatting) คือแนวปฏิบัติในการจดทะเบียนโดเมนเนมล่วงหน้าแล้วนำไปขาย (มักในราคาสูง) โดยมีเจตนาที่จะแสวงหากำไรจากเครื่องหมายการค้าของผู้อื่น ตัวอย่างเช่นการจดทะเบียนโดเมนเนม 'mycompany.com' แล้วเสนอขายให้กับเจ้าของเครื่องหมายการค้า 'MyCompany' ในราคาสูง Cybersquatting อาจก่อให้เกิดความสับสนและความเสียหายต่อแบรนด์ของเจ้าของเครื่องหมายการค้า ซึ่งโดยทั่วไปถือเป็นการกระทำที่ผิดจริยธรรมและหลอกลวง และในหลายประเทศถือเป็นการกระทำที่ผิดกฎหมาย"
  },
  {
    "id": 349,
    "dom": 5,
    "question": "A poster reminding the best password management practices is an example of which type of learning activity?",
    "options": [
      "Awareness",
      "Schooling",
      "Education",
      "Training"
    ],
    "correct_idx": 0,
    "explanation": "An awareness poster or campaign can be effective in engaging a user's attention and encouraging them to consider their password practices. Specific strategies include highlighting the risks associated with weak or easily guessable passwords (such as the risk of account compromise or data theft) and encouraging users to remember to use a password manager to store and manage their passwords securely. The primary goal of education is to help learners improve both their understanding of concepts and",
    "short_explanation_en": "An awareness poster or campaign can be effective in engaging a user's attention and encouraging them to consider their password practices.",
    "question_th": "โปสเตอร์เตือนเกี่ยวกับแนวปฏิบัติการจัดการรหัสผ่านที่ดีที่สุด เป็นตัวอย่างของกิจกรรมการเรียนรู้ประเภทใด?",
    "options_th": [
      "Awareness",
      "Schooling",
      "Education",
      "Training"
    ],
    "explanation_th": "โปสเตอร์หรือแคมเปญสร้างความตระหนักสามารถมีประสิทธิภาพในการดึงดูดความสนใจของผู้ใช้และกระตุ้นให้พวกเขาพิจารณาแนวปฏิบัติด้านรหัสผ่านของตน กลยุทธ์เฉพาะรวมถึงการเน้นความเสี่ยงที่เกี่ยวข้องกับรหัสผ่านที่อ่อนแอหรือคาดเดาง่าย และกระตุ้นให้ผู้ใช้จำการใช้ตัวจัดการรหัสผ่านเพื่อจัดเก็บและจัดการรหัสผ่านอย่างปลอดภัย"
  },
  {
    "id": 351,
    "dom": 5,
    "question": "(★) What technology is MOST LIKELY to conserve the storage space required for video recordings?",
    "options": [
      "Motion detection",
      "PTZ",
      "Facial recognition",
      "Infrared cameras"
    ],
    "correct_idx": 0,
    "explanation": "Motion-detecting cameras record only when motion is detected, and thus help in reducing video storage requirements. A recording will occur more rarely in low-occupancy places (like data centers), thus conserving storage. In more heavily used areas, the impact on total storage space used will be negligible. Infrared cameras, facial recognition, and the abilityto pan, tilt, and zoom (PTZ) a camera are important features, but more is needed to conserve storage space.",
    "short_explanation_en": "Motion-detecting cameras record only when motion is detected, and thus help in reducing video storage requirements.",
    "question_th": "เทคโนโลยีใดมีแนวโน้มมากที่สุดที่จะช่วยประหยัดพื้นที่จัดเก็บที่จำเป็นสำหรับการบันทึกวิดีโอ?",
    "options_th": [
      "Motion detection",
      "PTZ",
      "Facial recognition",
      "Infrared cameras"
    ],
    "explanation_th": "กล้องที่ตรวจจับการเคลื่อนไหวจะบันทึกเฉพาะเมื่อตรวจพบการเคลื่อนไหว จึงช่วยลดความต้องการพื้นที่จัดเก็บวิดีโอ การบันทึกจะเกิดขึ้นน้อยกว่าในสถานที่ที่มีคนน้อย (เช่น ศูนย์ข้อมูล) จึงช่วยประหยัดพื้นที่จัดเก็บ"
  },
  {
    "id": 353,
    "dom": 5,
    "question": "Which of these techniques will ensure the property of 'non-repudiation'?",
    "options": [
      "Using a VPN",
      "Passwords",
      "Encryption",
      "Digital signatures"
    ],
    "correct_idx": 3,
    "explanation": "Non-repudiation means ensuring that the sender cannot later deny having sent the message. Digital signatures provide an undeniable match between sender and digital signature. We can think of a digital signature as a Message Digest encrypted with an asymmetric key: first, the message hash is encrypted using the sender's private key; then, the message (possibly encrypted) previously encrypted message hash; finally, the recipient decrypts the signature with the sender's public key, and transfers th",
    "short_explanation_en": "Non-repudiation means ensuring that the sender cannot later deny having sent the message.",
    "question_th": "เทคนิคใดที่จะรับประกันคุณสมบัติ 'non-repudiation'?",
    "options_th": [
      "การใช้ VPN",
      "รหัสผ่าน",
      "การเข้ารหัส",
      "ลายเซ็นดิจิทัล"
    ],
    "explanation_th": "Non-repudiation หมายถึงการรับประกันว่าผู้ส่งไม่สามารถปฏิเสธในภายหลังว่าตนไม่ได้ส่งข้อความ ลายเซ็นดิจิทัลให้การจับคู่ที่ปฏิเสธไม่ได้ระหว่างผู้ส่งและลายเซ็นดิจิทัล"
  },
  {
    "id": 354,
    "dom": 5,
    "question": "(★) A USB pen with data passed around the office is an example of:",
    "options": [
      "Data in motion",
      "Data at rest",
      "Data in transit",
      "Data in use"
    ],
    "correct_idx": 1,
    "explanation": "Data at rest is stored data that resides on hard drives, on tapes, in the cloud, or on other storage media like (in this case)a USB pen. Data in processing (also called data in use) is actively used by a computer system. Data sent over a network is called data in motion. Data in transit is a term that does not usually apply to such a situation.",
    "short_explanation_en": "Data at rest is stored data that resides on hard drives, on tapes, in the cloud, or on other storage media like (in this case)a USB pen.",
    "question_th": "USB pen ที่มีข้อมูลถูกส่งต่อกันในสำนักงาน เป็นตัวอย่างของ:",
    "options_th": [
      "Data in motion",
      "Data at rest",
      "Data in transit",
      "Data in use"
    ],
    "explanation_th": "Data at rest คือข้อมูลที่จัดเก็บอยู่บนฮาร์ดไดรฟ์ เทป คลาวด์ หรือสื่อจัดเก็บข้อมูลอื่น ๆ เช่น (ในกรณีนี้) USB pen ข้อมูลที่กำลังประมวลผล (เรียกอีกอย่างว่า data in use) คือข้อมูลที่กำลังถูกใช้งานอย่างต่อเนื่องโดยระบบคอมพิวเตอร์ ข้อมูลที่ส่งผ่านเครือข่ายเรียกว่า data in motion"
  },
  {
    "id": 365,
    "dom": 5,
    "question": "Which of these is a COMMON mistake made when implementing record retention policies?",
    "options": [
      "Not categorizing the type of information to be retained",
      "Not labeling the type of information to be retained",
      "Applying the longest retention periods to the information",
      "Applying shorter retention periods to the information"
    ],
    "correct_idx": 2,
    "explanation": "A common mistake in record retention is applying the longest retention period without taking into account the sensitivity or importance of the corresponding information. Retaining unnecessary data has considerable costs in terms of storage and management. Less important or sensitive information can have shorter retention periods, thereby allowing longer retention periods for more important or sensitive information (see ISC2 Study Guide, chapter 5, module 1).",
    "short_explanation_en": "A common mistake in record retention is applying the longest retention period without taking into account the sensitivity or importance of the corresponding information.",
    "question_th": "ข้อใดเป็นความผิดพลาดทั่วไปที่เกิดขึ้นเมื่อนำนโยบายการเก็บรักษาข้อมูล (Record retention policies) มาใช้?",
    "options_th": [
      "ไม่จัดประเภทของข้อมูลที่จะเก็บรักษา",
      "ไม่ติดป้ายประเภทของข้อมูลที่จะเก็บรักษา",
      "การใช้ระยะเวลาการเก็บรักษาที่ยาวนานที่สุดกับข้อมูล",
      "การใช้ระยะเวลาการเก็บรักษาที่สั้นกว่ากับข้อมูล"
    ],
    "explanation_th": "ความผิดพลาดทั่วไปในการเก็บรักษาข้อมูลคือการใช้ระยะเวลาการเก็บรักษาที่ยาวนานที่สุดโดยไม่คำนึงถึงความอ่อนไหวหรือความสำคัญของข้อมูลนั้น ๆ การเก็บรักษาข้อมูลที่ไม่จำเป็นมีค่าใช้จ่ายมากในแง่ของการจัดเก็บและการบริหารจัดการ ข้อมูลที่มีความสำคัญหรือความอ่อนไหวน้อยกว่าสามารถมีระยะเวลาการเก็บรักษาที่สั้นกว่า"
  },
  {
    "id": 369,
    "dom": 5,
    "question": "What is the primary goal of a Change Management Policy?",
    "options": [
      "To standardize the creation of the organization's network and computer systems",
      "To guarantee that systems are up to date with the latest security patch",
      "To standardize the usage of the organization's network and computer systems",
      "To guarantee that system changes are performed without negatively affecting business operations"
    ],
    "correct_idx": 3,
    "explanation": "The primary goal of a Change Management Policy is to realize the benefits of the system's changes while minimizing disruptions to business operations, namely by ensuring the integrity of the organization's systems and processes (see ISC2 Study Guide, chapter 5, module 3). Guaranteeing that systems have the latest security patches is the goal of a Patch Management Policy. A Networking Policy governs the usage of networks, and an Acceptable Use Policy governs the usage of computer systems. The cre",
    "short_explanation_en": "The primary goal of a Change Management Policy is to realize the benefits of the system's changes while minimizing disruptions to business operations, namely by ensuring the integrity of the organization's systems and processes (see...",
    "question_th": "เป้าหมายหลักของ Change Management Policy คืออะไร?",
    "options_th": [
      "เพื่อสร้างมาตรฐานการสร้างเครือข่ายและระบบคอมพิวเตอร์ขององค์กร",
      "เพื่อรับประกันว่าระบบมีการอัปเดตด้วยแพตช์ความปลอดภัยล่าสุด",
      "เพื่อสร้างมาตรฐานการใช้งานเครือข่ายและระบบคอมพิวเตอร์ขององค์กร",
      "เพื่อรับประกันว่าการเปลี่ยนแปลงระบบดำเนินการโดยไม่ส่งผลกระทบเชิงลบต่อการดำเนินธุรกิจ"
    ],
    "explanation_th": "เป้าหมายหลักของ Change Management Policy คือการทำให้เกิดประโยชน์จากการเปลี่ยนแปลงระบบในขณะที่ลดผลกระทบต่อการดำเนินธุรกิจให้เหลือน้อยที่สุด กล่าวคือ โดยการรับประกันความถูกต้องครบถ้วนของระบบและกระบวนการขององค์กร การรับประกันว่าระบบมีแพตช์ความปลอดภัยล่าสุดเป็นเป้าหมายของ Patch Management Policy"
  },
  {
    "id": 370,
    "dom": 5,
    "question": "Which of these is NOT a feature of a SIEM (Security Information and Event Management)?",
    "options": [
      "Log auditing",
      "Log encryption",
      "Log consolidation",
      "Log retention github.com/ayemunhossain"
    ],
    "correct_idx": 0,
    "explanation": "Log auditing is not a feature of a SIEM (Security Information and Event Management). A SIEM typically provides the following features: Log consolidation, which consists in collecting logs from various sources (like servers, firewalls or IDS/IPS) and then storing them in one central location. Log retention, which consists in storing logs for a specific period (like 90 days), so as to allow security analysts to keep track of and investigate past events. Log encryption, which is an optional feature",
    "short_explanation_en": "Log auditing is not a feature of a SIEM (Security Information and Event Management).",
    "question_th": "ข้อใดไม่ใช่คุณสมบัติของ SIEM (Security Information and Event Management)?",
    "options_th": [
      "การตรวจสอบ Log (Log auditing)",
      "การเข้ารหัส Log (Log encryption)",
      "การรวมศูนย์ Log (Log consolidation)",
      "การเก็บรักษา Log (Log retention)"
    ],
    "explanation_th": "Log auditing ไม่ใช่คุณสมบัติของ SIEM โดยทั่วไป SIEM มีคุณสมบัติดังนี้: Log consolidation คือการรวบรวม log จากแหล่งต่าง ๆ (เช่น เซิร์ฟเวอร์ ไฟร์วอลล์ หรือ IDS/IPS) แล้วจัดเก็บไว้ในที่เดียว Log retention คือการจัดเก็บ log ไว้เป็นระยะเวลาหนึ่ง (เช่น 90 วัน) เพื่อให้นักวิเคราะห์ความปลอดภัยติดตามและสืบสวนเหตุการณ์ในอดีตได้ Log encryption เป็นคุณสมบัติเสริม"
  },
  {
    "id": 376,
    "dom": 5,
    "question": "A backup that captures the changes made since the latest full backup is an example of:",
    "options": [
      "A differential backup",
      "An incremental backup",
      "A backup snapshot github.com/ayemunhossain",
      "A full backup"
    ],
    "correct_idx": 0,
    "explanation": "A differential backup is a backup that captures the changes made since the latest full backup. Incremental backups capture changes since the latest backup (which can be full or incremental), and snapshots are live copies of a system. Neither incremental backups nor snapshots necessarily capture changes since a full backup (see ISC2 Study Guide, chapter 5, module 1).",
    "short_explanation_en": "A differential backup is a backup that captures the changes made since the latest full backup.",
    "question_th": "การสำรองข้อมูลที่บันทึกการเปลี่ยนแปลงที่เกิดขึ้นนับตั้งแต่การสำรองข้อมูลแบบเต็ม (full backup) ครั้งล่าสุด เป็นตัวอย่างของ:",
    "options_th": [
      "Differential backup",
      "Incremental backup",
      "Backup snapshot",
      "Full backup"
    ],
    "explanation_th": "Differential backup คือการสำรองข้อมูลที่บันทึกการเปลี่ยนแปลงที่เกิดขึ้นนับตั้งแต่ full backup ครั้งล่าสุด Incremental backups บันทึกการเปลี่ยนแปลงนับตั้งแต่การสำรองข้อมูลครั้งล่าสุด (ไม่ว่าจะเป็น full หรือ incremental) และ snapshots คือสำเนาสดของระบบ ทั้ง incremental backups และ snapshots ไม่จำเป็นต้องบันทึกการเปลี่ยนแปลงนับตั้งแต่ full backup"
  },
  {
    "id": 379,
    "dom": 5,
    "question": "When a company collects PII, which policy is required?",
    "options": [
      "Remote Access Policy",
      "GDPR",
      "Privacy Policy",
      "Acceptable Use Policy"
    ],
    "correct_idx": 2,
    "explanation": "A Privacy Policy outlines the data security mechanisms which ensure that customer data is protected; namely, how Personal Identifiable Information (PII) is collected, stored and processed (see ISC2 Study Guide, chapter 5, module 3). The General Data Protection Regulation (GDPR) is a data protection and privacy regulation for the European Union and the European Economic Area (not a policy). An Acceptable Use Policy (AUP) defines the guidelines and limitations that users must agree on while access",
    "short_explanation_en": "A Privacy Policy outlines the data security mechanisms which ensure that customer data is protected; namely, how Personal Identifiable Information (PII) is collected, stored and processed (see ISC2 Study Guide, chapter 5, module 3).",
    "question_th": "เมื่อบริษัทเก็บรวบรวม PII ต้องมีนโยบายใด?",
    "options_th": [
      "Remote Access Policy",
      "GDPR",
      "Privacy Policy",
      "Acceptable Use Policy"
    ],
    "explanation_th": "Privacy Policy ระบุกลไกความปลอดภัยของข้อมูลที่รับประกันว่าข้อมูลลูกค้าได้รับการปกป้อง กล่าวคือ วิธีที่ Personal Identifiable Information (PII) ถูกเก็บรวบรวม จัดเก็บ และประมวลผล GDPR เป็นกฎระเบียบด้านการปกป้องข้อมูลและความเป็นส่วนตัวสำหรับสหภาพยุโรป (ไม่ใช่นโยบาย)"
  },
  {
    "id": 466,
    "dom": 5,
    "question": "What is the primary function of a SIEM (Security Information and Event Management)?",
    "options": [
      "Encrypt data in a database",
      "Collect, analyze, and correlate logs from multiple sources across the organization to centrally detect anomalous events",
      "Automatically back up data",
      "Manage user accounts"
    ],
    "correct_idx": 1,
    "explanation": "A SIEM centralizes the collection and analysis of log data from devices and systems across an organization, helping security teams detect, correlate, and respond to anomalous events more effectively than checking each source individually.",
    "short_explanation_en": "A SIEM centralizes the collection and analysis of log data from devices and systems across an organization, helping security teams detect, correlate, and respond to anomalous events more effectively than checking each source individually.",
    "question_th": "'SIEM (Security Information and Event Management)' มีหน้าที่หลักคืออะไร?",
    "options_th": [
      "เข้ารหัสข้อมูลในฐานข้อมูล",
      "รวบรวม วิเคราะห์ และเชื่อมโยง Log จากหลายแหล่งในองค์กรเพื่อตรวจจับเหตุการณ์ผิดปกติแบบรวมศูนย์",
      "สำรองข้อมูลอัตโนมัติ",
      "จัดการบัญชีผู้ใช้"
    ],
    "explanation_th": "SIEM รวบรวมและวิเคราะห์ข้อมูล Log จากอุปกรณ์และระบบต่างๆ ทั่วองค์กรแบบรวมศูนย์ ช่วยให้ทีมความปลอดภัยตรวจจับ เชื่อมโยง และตอบสนองต่อเหตุการณ์ผิดปกติได้อย่างมีประสิทธิภาพ"
  },
  {
    "id": 467,
    "dom": 5,
    "question": "Why is keeping logs important for security operations?",
    "options": [
      "It makes systems run faster",
      "It supports traceability, event analysis, and serves as evidence for investigating anomalous events",
      "It reduces storage usage",
      "It's unnecessary if a firewall is already in place"
    ],
    "correct_idx": 1,
    "explanation": "Logs provide accountability (tracing who did what and when), support post-incident analysis, and serve as digital forensic evidence when investigating a security event — none of which a firewall alone can provide.",
    "short_explanation_en": "Logs provide accountability (tracing who did what and when), support post-incident analysis, and serve as digital forensic evidence when investigating a security event — none of which a firewall alone can provide.",
    "question_th": "เหตุใดการเก็บบันทึก Log (Logging) จึงมีความสำคัญต่อการดำเนินงานด้านความปลอดภัย?",
    "options_th": [
      "ทำให้ระบบทำงานเร็วขึ้น",
      "ช่วยในการตรวจสอบย้อนกลับ วิเคราะห์เหตุการณ์ และเป็นหลักฐานสำหรับการสืบสวนเมื่อเกิดเหตุการณ์ผิดปกติ",
      "ลดการใช้พื้นที่จัดเก็บข้อมูล",
      "ไม่มีความจำเป็นหากมีไฟร์วอลล์แล้ว"
    ],
    "explanation_th": "การบันทึก Log ช่วยให้สามารถตรวจสอบย้อนกลับ (Accountability) วิเคราะห์เหตุการณ์ที่เกิดขึ้น และใช้เป็นหลักฐานทางนิติวิทยาศาสตร์ดิจิทัล (Digital Forensics) เมื่อเกิดเหตุการณ์ด้านความปลอดภัย"
  },
  {
    "id": 468,
    "dom": 5,
    "question": "What is Patch Management?",
    "options": [
      "Routine data backups",
      "The systematic process of managing and installing software updates to fix vulnerabilities and security issues",
      "Creating new user accounts",
      "Encrypting hard disks"
    ],
    "correct_idx": 1,
    "explanation": "Patch Management is the systematic process of tracking, testing, and installing patches or software updates to close known security vulnerabilities and maintain system stability.",
    "short_explanation_en": "Patch Management is the systematic process of tracking, testing, and installing patches or software updates to close known security vulnerabilities and maintain system stability.",
    "question_th": "'Patch Management' คือกระบวนการใด?",
    "options_th": [
      "การสำรองข้อมูลเป็นประจำ",
      "กระบวนการจัดการติดตั้งการอัปเดตซอฟต์แวร์เพื่อแก้ไขช่องโหว่และปัญหาด้านความปลอดภัยอย่างเป็นระบบ",
      "การสร้างบัญชีผู้ใช้ใหม่",
      "การเข้ารหัสฮาร์ดดิสก์"
    ],
    "explanation_th": "Patch Management คือกระบวนการติดตาม ทดสอบ และติดตั้งแพตช์หรืออัปเดตซอฟต์แวร์อย่างเป็นระบบ เพื่อปิดช่องโหว่ด้านความปลอดภัยและรักษาเสถียรภาพของระบบ"
  },
  {
    "id": 469,
    "dom": 5,
    "question": "How does Vulnerability Management differ from Patch Management?",
    "options": [
      "The two terms mean exactly the same thing",
      "Vulnerability Management is the broader process covering discovery, assessment, and prioritization of all vulnerabilities, while Patch Management is one remediation measure used to address them",
      "Patch Management applies only to hardware",
      "Vulnerability Management has nothing to do with software"
    ],
    "correct_idx": 1,
    "explanation": "Vulnerability Management is the full lifecycle — scanning, assessing risk, and prioritizing vulnerabilities — while Patch Management is specifically one remediation method (applying vendor fixes) used within that broader process.",
    "short_explanation_en": "Vulnerability Management is the full lifecycle — scanning, assessing risk, and prioritizing vulnerabilities — while Patch Management is specifically one remediation method (applying vendor fixes) used within that broader process.",
    "question_th": "'Vulnerability Management' แตกต่างจาก 'Patch Management' อย่างไร?",
    "options_th": [
      "ทั้งสองคำมีความหมายเหมือนกันทุกประการ",
      "Vulnerability Management เป็นกระบวนการที่กว้างกว่า ครอบคลุมการค้นหา ประเมิน และจัดลำดับความสำคัญของช่องโหว่ทั้งหมด ส่วน Patch Management เป็นหนึ่งในมาตรการแก้ไขที่ใช้จัดการช่องโหว่นั้น",
      "Patch Management ใช้เฉพาะฮาร์ดแวร์เท่านั้น",
      "Vulnerability Management ไม่เกี่ยวข้องกับซอฟต์แวร์"
    ],
    "explanation_th": "Vulnerability Management เป็นวงจรกว้างที่รวมการสแกนหา ประเมินความเสี่ยง จัดลำดับความสำคัญ และแก้ไขช่องโหว่ ในขณะที่ Patch Management เป็นหนึ่งในวิธีการแก้ไข (Remediation) ที่ใช้ปิดช่องโหว่ที่พบ"
  },
  {
    "id": 470,
    "dom": 5,
    "question": "What is the primary purpose of Change Management?",
    "options": [
      "To prevent any changes to a system entirely",
      "To systematically control and track changes to IT systems through an approval process, reducing risk from unplanned changes",
      "To delete old log data",
      "To perform daily data backups"
    ],
    "correct_idx": 1,
    "explanation": "Change Management is a structured process for planning, testing, approving, and documenting changes to IT systems, reducing the risk of unauthorized or unplanned changes causing problems.",
    "short_explanation_en": "Change Management is a structured process for planning, testing, approving, and documenting changes to IT systems, reducing the risk of unauthorized or unplanned changes causing problems.",
    "question_th": "'Change Management' มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options_th": [
      "ป้องกันการเปลี่ยนแปลงใดๆ ในระบบโดยเด็ดขาด",
      "ควบคุมและติดตามการเปลี่ยนแปลงในระบบ IT อย่างเป็นระบบผ่านกระบวนการอนุมัติ เพื่อลดความเสี่ยงจากการเปลี่ยนแปลงที่ไม่ได้วางแผน",
      "ลบข้อมูล Log เก่า",
      "สำรองข้อมูลรายวัน"
    ],
    "explanation_th": "Change Management คือกระบวนการที่มีโครงสร้างในการวางแผน ทดสอบ อนุมัติ และบันทึกการเปลี่ยนแปลงในระบบ IT เพื่อลดความเสี่ยงจากการเปลี่ยนแปลงที่ไม่ได้รับอนุญาตหรือไม่ได้วางแผนซึ่งอาจก่อให้เกิดปัญหา"
  },
  {
    "id": 471,
    "dom": 5,
    "question": "How do Configuration Management and 'Baselines' help security?",
    "options": [
      "They establish a secure standard configuration as a reference point, helping detect unauthorized or abnormal changes",
      "They only increase system speed",
      "They automatically remove malware",
      "They have no effect on security"
    ],
    "correct_idx": 0,
    "explanation": "A baseline defines the approved secure configuration of a system as a reference point — when the system deviates from that baseline, it signals a potentially unauthorized or abnormal change that needs investigation.",
    "short_explanation_en": "A baseline defines the approved secure configuration of a system as a reference point — when the system deviates from that baseline, it signals a potentially unauthorized or abnormal change that needs investigation.",
    "question_th": "'Configuration Management' และการใช้ 'Baseline' ช่วยด้านความปลอดภัยอย่างไร?",
    "options_th": [
      "กำหนดค่ามาตรฐานที่ปลอดภัยของระบบไว้เป็นข้อมูลอ้างอิง ช่วยตรวจจับการเปลี่ยนแปลงที่ผิดปกติหรือไม่ได้รับอนุญาต",
      "เพิ่มความเร็วของระบบเท่านั้น",
      "ลบมัลแวร์อัตโนมัติ",
      "ไม่มีผลต่อความปลอดภัย"
    ],
    "explanation_th": "Baseline คือค่ากำหนดมาตรฐานที่ปลอดภัยของระบบ (Secure Configuration) ที่ใช้เป็นข้อมูลอ้างอิง เมื่อระบบเบี่ยงเบนจาก Baseline จะสามารถตรวจจับการเปลี่ยนแปลงที่ผิดปกติหรือไม่ได้รับอนุญาตได้ทันที"
  },
  {
    "id": 472,
    "dom": 5,
    "question": "Which of the following best describes 'Encryption at Rest'?",
    "options": [
      "Encrypting data while it travels across a network",
      "Encrypting data stored on storage media, such as a hard disk or database",
      "Encrypting only passwords",
      "Encrypting outgoing email"
    ],
    "correct_idx": 1,
    "explanation": "Encryption at Rest protects data that is stored (not moving) — such as on a hard disk or in a database — from unauthorized access if the storage device is stolen or improperly accessed.",
    "short_explanation_en": "Encryption at Rest protects data that is stored (not moving) — such as on a hard disk or in a database — from unauthorized access if the storage device is stolen or improperly accessed.",
    "question_th": "ข้อใดคือคำอธิบายที่ถูกต้องของ 'Encryption at Rest'?",
    "options_th": [
      "การเข้ารหัสข้อมูลขณะส่งผ่านเครือข่าย",
      "การเข้ารหัสข้อมูลที่จัดเก็บอยู่บนอุปกรณ์จัดเก็บข้อมูล เช่น ฮาร์ดดิสก์หรือฐานข้อมูล",
      "การเข้ารหัสรหัสผ่านเท่านั้น",
      "การเข้ารหัสอีเมลขาออก"
    ],
    "explanation_th": "Encryption at Rest คือการเข้ารหัสข้อมูลที่ถูกจัดเก็บไว้ (ไม่ได้เคลื่อนที่) เช่น บนฮาร์ดดิสก์หรือในฐานข้อมูล เพื่อป้องกันการเข้าถึงข้อมูลหากอุปกรณ์จัดเก็บถูกขโมยหรือเข้าถึงโดยไม่ได้รับอนุญาต"
  },
  {
    "id": 473,
    "dom": 5,
    "question": "What does 'Encryption in Transit' mean?",
    "options": [
      "Encrypting data stored on a disk",
      "Encrypting data while it is being transmitted across a network from one point to another, e.g. via TLS/SSL",
      "Encrypting backup data",
      "Encrypting passwords in a database"
    ],
    "correct_idx": 1,
    "explanation": "Encryption in Transit protects data while it travels across a network — for example using HTTPS/TLS — to prevent eavesdropping or tampering during transmission.",
    "short_explanation_en": "Encryption in Transit protects data while it travels across a network — for example using HTTPS/TLS — to prevent eavesdropping or tampering during transmission.",
    "question_th": "'Encryption in Transit' หมายถึงอะไร?",
    "options_th": [
      "การเข้ารหัสข้อมูลที่จัดเก็บบนดิสก์",
      "การเข้ารหัสข้อมูลขณะกำลังถูกส่งผ่านเครือข่ายจากจุดหนึ่งไปยังอีกจุดหนึ่ง เช่น ผ่าน TLS/SSL",
      "การเข้ารหัสข้อมูลสำรอง",
      "การเข้ารหัสรหัสผ่านในฐานข้อมูล"
    ],
    "explanation_th": "Encryption in Transit คือการเข้ารหัสข้อมูลขณะกำลังเดินทางผ่านเครือข่าย เช่น การใช้ HTTPS/TLS เพื่อป้องกันการดักฟังหรือแก้ไขข้อมูลระหว่างการส่ง"
  },
  {
    "id": 474,
    "dom": 5,
    "question": "What is the difference between 'Symmetric Encryption' and 'Asymmetric Encryption'?",
    "options": [
      "Symmetric uses the same key for both encryption and decryption, while Asymmetric uses a key pair (public/private)",
      "Symmetric uses a key pair while Asymmetric uses a single key",
      "There is no difference between the two",
      "Asymmetric is always faster than Symmetric"
    ],
    "correct_idx": 0,
    "explanation": "Symmetric Encryption uses one shared secret key for both encrypting and decrypting (e.g. AES) — faster but requires securely sharing the key. Asymmetric Encryption uses a public/private key pair (e.g. RSA) — slower but avoids the need to share a secret key.",
    "short_explanation_en": "Symmetric Encryption uses one shared secret key for both encrypting and decrypting (e.g. AES) — faster but requires securely sharing the key. Asymmetric Encryption uses a public/private key pair (e.g. RSA) — slower but avoids the need to share a secret key.",
    "question_th": "ความแตกต่างระหว่าง 'Symmetric Encryption' และ 'Asymmetric Encryption' คืออะไร?",
    "options_th": [
      "Symmetric ใช้กุญแจเดียวกันทั้งเข้ารหัสและถอดรหัส ส่วน Asymmetric ใช้กุญแจคู่ (Public/Private Key)",
      "Symmetric ใช้กุญแจคู่ ส่วน Asymmetric ใช้กุญแจเดียว",
      "ทั้งสองแบบไม่มีความแตกต่างกัน",
      "Asymmetric เร็วกว่า Symmetric เสมอ"
    ],
    "explanation_th": "Symmetric Encryption ใช้กุญแจลับเดียวกันทั้งการเข้ารหัสและถอดรหัส (เช่น AES) ซึ่งเร็วกว่าแต่ต้องแชร์กุญแจอย่างปลอดภัย ส่วน Asymmetric Encryption ใช้กุญแจคู่ Public Key และ Private Key (เช่น RSA) ซึ่งช้ากว่าแต่ไม่ต้องแชร์กุญแจลับ"
  },
  {
    "id": 475,
    "dom": 5,
    "question": "How does 'Hashing' differ from 'Encryption'?",
    "options": [
      "Hashing is a one-way process that cannot be reversed to the original data and is used to verify integrity, while Encryption can be decrypted back to the original with the correct key",
      "The two are identical and always interchangeable",
      "Hashing only works on images",
      "Encryption can never be reversed at all"
    ],
    "correct_idx": 0,
    "explanation": "Hashing is a one-way function that converts data into a fixed-length value used to verify data integrity — it cannot be reversed to recover the original data, unlike Encryption which is designed to be decrypted back with the correct key.",
    "short_explanation_en": "Hashing is a one-way function that converts data into a fixed-length value used to verify data integrity — it cannot be reversed to recover the original data, unlike Encryption which is designed to be decrypted back with the correct key.",
    "question_th": "'Hashing' แตกต่างจาก 'Encryption' อย่างไร?",
    "options_th": [
      "Hashing เป็นกระบวนการทางเดียว (One-way) ที่ไม่สามารถถอดกลับเป็นข้อมูลเดิมได้ ใช้เพื่อตรวจสอบความถูกต้อง ส่วน Encryption สามารถถอดรหัสกลับเป็นข้อมูลเดิมได้หากมีกุญแจที่ถูกต้อง",
      "ทั้งสองแบบเหมือนกันทุกประการและใช้แทนกันได้เสมอ",
      "Hashing ใช้เฉพาะกับรูปภาพเท่านั้น",
      "Encryption ไม่สามารถถอดรหัสกลับได้เลย"
    ],
    "explanation_th": "Hashing เป็นฟังก์ชันทางเดียวที่แปลงข้อมูลเป็นค่าความยาวคงที่ (Hash Value) เพื่อตรวจสอบความถูกต้องครบถ้วนของข้อมูล ไม่สามารถย้อนกลับเป็นข้อมูลต้นฉบับได้ ต่างจาก Encryption ที่ออกแบบมาให้ถอดรหัสกลับได้เมื่อมีกุญแจที่ถูกต้อง"
  },
  {
    "id": 476,
    "dom": 5,
    "question": "What key topic should 'Security Awareness Training' cover to reduce the risk of Social Engineering?",
    "options": [
      "Advanced programming",
      "Recognizing and being cautious of phishing and various social engineering tactics",
      "Computer hardware repair",
      "Project management"
    ],
    "correct_idx": 1,
    "explanation": "Since phishing and social engineering are among the most common attack vectors, training should focus on helping employees recognize the warning signs of deceptive emails or messages to reduce the risk of being tricked into revealing sensitive information.",
    "short_explanation_en": "Since phishing and social engineering are among the most common attack vectors, training should focus on helping employees recognize the warning signs of deceptive emails or messages to reduce the risk of being tricked into revealing sensitive information.",
    "question_th": "'Security Awareness Training' ควรครอบคลุมหัวข้อใดเป็นสำคัญเพื่อลดความเสี่ยงจาก Social Engineering?",
    "options_th": [
      "การเขียนโปรแกรมขั้นสูง",
      "การรู้จักและระวังภัยฟิชชิ่ง (Phishing) และกลลวงทางวิศวกรรมสังคมรูปแบบต่างๆ",
      "การซ่อมแซมฮาร์ดแวร์คอมพิวเตอร์",
      "การบริหารจัดการโครงการ"
    ],
    "explanation_th": "เนื่องจากฟิชชิ่งและ Social Engineering เป็นช่องทางโจมตีที่พบบ่อยที่สุด การฝึกอบรมจึงควรเน้นให้พนักงานรู้จักสังเกตสัญญาณของอีเมลหรือข้อความหลอกลวง เพื่อลดความเสี่ยงจากการถูกหลอกให้เปิดเผยข้อมูลสำคัญ"
  },
  {
    "id": 477,
    "dom": 5,
    "question": "Why is a 'Data Retention Policy' important to security operations?",
    "options": [
      "It defines how long different types of data must be kept and how to destroy it when no longer needed, ensuring legal compliance and reducing risk",
      "It provides unlimited storage space",
      "It makes data access faster",
      "It has no impact on legal compliance"
    ],
    "correct_idx": 0,
    "explanation": "A Data Retention Policy defines how long each category of data must be kept and how to securely destroy it once no longer needed, ensuring compliance with legal requirements and reducing the risk of holding unnecessary data.",
    "short_explanation_en": "A Data Retention Policy defines how long each category of data must be kept and how to securely destroy it once no longer needed, ensuring compliance with legal requirements and reducing the risk of holding unnecessary data.",
    "question_th": "'Data Retention Policy' มีความสำคัญอย่างไรต่อการดำเนินงานด้านความปลอดภัย?",
    "options_th": [
      "กำหนดระยะเวลาที่ต้องเก็บรักษาข้อมูลประเภทต่างๆ และวิธีการทำลายข้อมูลเมื่อหมดความจำเป็น เพื่อให้สอดคล้องกับกฎหมายและลดความเสี่ยง",
      "เพิ่มพื้นที่จัดเก็บข้อมูลไม่จำกัด",
      "ทำให้ข้อมูลเข้าถึงได้เร็วขึ้น",
      "ไม่มีผลต่อการปฏิบัติตามกฎหมาย"
    ],
    "explanation_th": "Data Retention Policy กำหนดระยะเวลาที่องค์กรต้องเก็บรักษาข้อมูลแต่ละประเภท และวิธีการทำลายข้อมูลอย่างปลอดภัยเมื่อหมดความจำเป็น เพื่อให้สอดคล้องกับข้อกำหนดทางกฎหมายและลดความเสี่ยงจากการเก็บข้อมูลเกินความจำเป็น"
  },
  {
    "id": 478,
    "dom": 5,
    "question": "What is the purpose of 'Media Sanitization' (secure destruction of storage media)?",
    "options": [
      "To increase hard disk capacity",
      "To ensure data stored on media cannot be recovered before the media is disposed of or reused",
      "To increase data read speed",
      "To back up data before destruction"
    ],
    "correct_idx": 1,
    "explanation": "Media Sanitization is the process of erasing or destroying data on storage media (e.g., via degaussing or physical destruction) to ensure sensitive data cannot be recovered when the media is disposed of or repurposed.",
    "short_explanation_en": "Media Sanitization is the process of erasing or destroying data on storage media (e.g., via degaussing or physical destruction) to ensure sensitive data cannot be recovered when the media is disposed of or repurposed.",
    "question_th": "'Media Sanitization' หรือการทำลายสื่อบันทึกข้อมูลอย่างปลอดภัย มีวัตถุประสงค์เพื่ออะไร?",
    "options_th": [
      "เพิ่มความจุของฮาร์ดดิสก์",
      "ทำให้ข้อมูลที่จัดเก็บไว้ในสื่อไม่สามารถกู้คืนได้ ก่อนนำสื่อไปกำจัดทิ้งหรือนำกลับมาใช้ใหม่",
      "เพิ่มความเร็วในการอ่านข้อมูล",
      "สำรองข้อมูลก่อนทำลาย"
    ],
    "explanation_th": "Media Sanitization คือกระบวนการลบหรือทำลายข้อมูลบนสื่อบันทึกข้อมูล (เช่น การ Degauss หรือ Physical Destruction) เพื่อป้องกันไม่ให้ข้อมูลที่อ่อนไหวถูกกู้คืนได้เมื่อสื่อนั้นถูกนำไปทิ้งหรือนำกลับมาใช้ใหม่"
  },
  {
    "id": 479,
    "dom": 5,
    "question": "What is the benefit of 'Monitoring' and Continuous Log Monitoring?",
    "options": [
      "It helps detect abnormal behavior or attack signals quickly, reducing the time between an incident occurring and being detected",
      "It increases network speed",
      "It reduces the total number of employees needed",
      "It has no direct effect on security"
    ],
    "correct_idx": 0,
    "explanation": "Continuous monitoring helps security teams quickly detect abnormal behavior or attack indicators, reducing 'dwell time' — the period an attacker remains undetected in a system.",
    "short_explanation_en": "Continuous monitoring helps security teams quickly detect abnormal behavior or attack indicators, reducing 'dwell time' — the period an attacker remains undetected in a system.",
    "question_th": "'Monitoring' และการตรวจสอบ Log อย่างต่อเนื่อง (Continuous Monitoring) มีประโยชน์อย่างไร?",
    "options_th": [
      "ช่วยตรวจจับพฤติกรรมผิดปกติหรือสัญญาณการโจมตีได้อย่างรวดเร็ว ลดระยะเวลาระหว่างการเกิดเหตุการณ์กับการตรวจพบ",
      "เพิ่มความเร็วของเครือข่าย",
      "ลดจำนวนพนักงานที่ต้องใช้ทั้งหมด",
      "ไม่มีผลต่อความปลอดภัยโดยตรง"
    ],
    "explanation_th": "การตรวจสอบอย่างต่อเนื่องช่วยให้ทีมความปลอดภัยตรวจพบพฤติกรรมผิดปกติหรือสัญญาณบ่งชี้การโจมตีได้อย่างรวดเร็ว ลดเวลาที่เรียกว่า 'Dwell Time' หรือช่วงเวลาที่ผู้โจมตีอยู่ในระบบโดยไม่ถูกตรวจพบ"
  },
  {
    "id": 480,
    "dom": 5,
    "question": "How does 'Job Rotation' help as a security measure?",
    "options": [
      "It increases employee salaries",
      "It reduces the risk of hidden fraud or wrongdoing, since rotating duties gives others the opportunity to notice irregularities",
      "It reduces the number of employees needed",
      "It speeds up data processing"
    ],
    "correct_idx": 1,
    "explanation": "Job Rotation periodically moves employees between duties, reducing the risk that any one person retains sole control over a critical process for too long, and increasing the chance that fraud or errors get noticed by someone else.",
    "short_explanation_en": "Job Rotation periodically moves employees between duties, reducing the risk that any one person retains sole control over a critical process for too long, and increasing the chance that fraud or errors get noticed by someone else.",
    "question_th": "'Job Rotation' เป็นมาตรการด้านความปลอดภัยที่ช่วยอะไร?",
    "options_th": [
      "เพิ่มเงินเดือนพนักงาน",
      "ลดความเสี่ยงจากการทุจริตหรือการกระทำผิดที่ซ่อนเร้น โดยการหมุนเวียนหน้าที่ทำให้ผู้อื่นมีโอกาสตรวจพบความผิดปกติ",
      "ลดจำนวนพนักงานที่ต้องจ้าง",
      "เพิ่มความเร็วในการประมวลผลข้อมูล"
    ],
    "explanation_th": "Job Rotation คือการหมุนเวียนพนักงานให้ทำหน้าที่ต่างๆ เป็นระยะ ซึ่งช่วยลดความเสี่ยงที่บุคคลใดบุคคลหนึ่งจะควบคุมกระบวนการสำคัญไว้คนเดียวเป็นเวลานาน และเพิ่มโอกาสตรวจพบการทุจริตหรือข้อผิดพลาดที่ซ่อนเร้น"
  },
  {
    "id": 481,
    "dom": 5,
    "question": "What type of control is 'Mandatory Vacation' and what benefit does it provide?",
    "options": [
      "Purely a benefits perk, unrelated to security",
      "A control that requires employees to take continuous leave, giving others the opportunity to detect fraud or irregularities the employee may have concealed",
      "Used only to reduce labor costs",
      "A substitute for background checks"
    ],
    "correct_idx": 1,
    "explanation": "Mandatory Vacation forces employees to take continuous time off, during which someone else covers their duties — creating an opportunity to detect fraud or irregularities the original employee may have been concealing.",
    "short_explanation_en": "Mandatory Vacation forces employees to take continuous time off, during which someone else covers their duties — creating an opportunity to detect fraud or irregularities the original employee may have been concealing.",
    "question_th": "'Mandatory Vacation' เป็นมาตรการควบคุมประเภทใดและมีประโยชน์อย่างไร?",
    "options_th": [
      "เป็นมาตรการด้านสวัสดิการเท่านั้น ไม่เกี่ยวข้องกับความปลอดภัย",
      "เป็นมาตรการควบคุมที่บังคับให้พนักงานลาพักร้อนต่อเนื่อง เพื่อเปิดโอกาสให้ผู้อื่นตรวจพบการทุจริตหรือความผิดปกติที่พนักงานอาจปกปิดไว้",
      "ใช้เพื่อลดต้นทุนแรงงานเท่านั้น",
      "ใช้แทนการทำ Background Check"
    ],
    "explanation_th": "Mandatory Vacation บังคับให้พนักงานลาพักร้อนต่อเนื่องเป็นระยะเวลาหนึ่ง ในช่วงนั้นบุคคลอื่นจะเข้ามาทำหน้าที่แทน ซึ่งเปิดโอกาสให้ตรวจพบการทุจริตหรือความผิดปกติที่พนักงานคนเดิมอาจปกปิดไว้ระหว่างปฏิบัติงาน"
  },
  {
    "id": 482,
    "dom": 5,
    "question": "How does 'Vulnerability Scanning' differ from 'Penetration Testing'?",
    "options": [
      "Vulnerability Scanning automatically scans for known vulnerabilities, while Penetration Testing simulates a real attack to prove whether a vulnerability can actually be exploited",
      "The two are identical in every way",
      "Vulnerability Scanning can only be performed by senior experts",
      "Penetration Testing uses only automated tools"
    ],
    "correct_idx": 0,
    "explanation": "Vulnerability Scanning uses automated tools to find known weaknesses in a system, while Penetration Testing is a deeper, expert-led test that actively attempts to exploit those weaknesses to prove real-world impact.",
    "short_explanation_en": "Vulnerability Scanning uses automated tools to find known weaknesses in a system, while Penetration Testing is a deeper, expert-led test that actively attempts to exploit those weaknesses to prove real-world impact.",
    "question_th": "'Vulnerability Scanning' แตกต่างจาก 'Penetration Testing' อย่างไร?",
    "options_th": [
      "Vulnerability Scanning เป็นการสแกนหาช่องโหว่ที่ทราบอยู่แล้วโดยอัตโนมัติ ส่วน Penetration Testing เป็นการจำลองการโจมตีจริงเพื่อพิสูจน์ว่าช่องโหว่นั้นสามารถถูกใช้ประโยชน์ได้จริงหรือไม่",
      "ทั้งสองแบบเหมือนกันทุกประการ",
      "Vulnerability Scanning ทำได้เฉพาะผู้เชี่ยวชาญระดับสูงเท่านั้น",
      "Penetration Testing ใช้เครื่องมืออัตโนมัติเพียงอย่างเดียว"
    ],
    "explanation_th": "Vulnerability Scanning ใช้เครื่องมืออัตโนมัติสแกนหาช่องโหว่ที่ทราบอยู่แล้วในระบบ ในขณะที่ Penetration Testing เป็นการทดสอบเชิงลึกที่จำลองการโจมตีจริงโดยผู้เชี่ยวชาญ เพื่อพิสูจน์ว่าช่องโหว่ที่พบสามารถถูกใช้ประโยชน์ (Exploit) ได้จริงหรือไม่ และประเมินผลกระทบที่แท้จริง"
  },
  {
    "id": 483,
    "dom": 5,
    "question": "Why is periodically testing a backup plan important?",
    "options": [
      "To ensure backup files can actually be restored and the data is not corrupted — not just that backup files exist",
      "To reduce backup file size",
      "To increase backup speed",
      "It's unnecessary if backups run regularly"
    ],
    "correct_idx": 0,
    "explanation": "Simply having backup files doesn't guarantee successful data recovery. Periodic restore testing confirms the backup process actually works and the data is intact, before you're forced to rely on it during a real incident.",
    "short_explanation_en": "Simply having backup files doesn't guarantee successful data recovery. Periodic restore testing confirms the backup process actually works and the data is intact, before you're forced to rely on it during a real incident.",
    "question_th": "เหตุใดการทดสอบ (Testing) แผนสำรองข้อมูล (Backup) เป็นระยะจึงมีความสำคัญ?",
    "options_th": [
      "เพื่อให้แน่ใจว่าไฟล์แบ็กอัพสามารถกู้คืนได้จริงและข้อมูลไม่เสียหาย ไม่ใช่แค่มีไฟล์แบ็กอัพอยู่เท่านั้น",
      "เพื่อลดขนาดไฟล์แบ็กอัพ",
      "เพื่อเพิ่มความเร็วในการสำรองข้อมูล",
      "ไม่มีความจำเป็นหากมีการสำรองข้อมูลเป็นประจำ"
    ],
    "explanation_th": "การมีไฟล์แบ็กอัพไม่ได้รับประกันว่าจะสามารถกู้คืนข้อมูลได้สำเร็จ การทดสอบกู้คืน (Restore Testing) เป็นระยะช่วยยืนยันว่ากระบวนการสำรองข้อมูลทำงานถูกต้องและข้อมูลไม่เสียหาย ก่อนที่จะเกิดเหตุการณ์จริงที่ต้องพึ่งพาแบ็กอัพนั้น"
  },
  {
    "id": 548,
    "dom": 5,
    "question": "Which type of malware secretly encrypts a victim's files and demands payment for the decryption key?",
    "options": [
      "Rootkit",
      "Ransomware",
      "Adware",
      "Spyware"
    ],
    "correct_idx": 1,
    "explanation": "Ransomware secretly encrypts a victim's files and demands payment for the decryption key. Without prior backups, victims may permanently lose their data or feel pressured to pay, with no guarantee the data will actually be recovered.",
    "short_explanation_en": "Ransomware secretly encrypts a victim's files and demands payment for the decryption key. Without prior backups, victims may permanently lose their data or feel pressured to pay, with no guarantee the data will actually be recovered.",
    "question_th": "มัลแวร์ประเภทใดที่เข้ารหัสไฟล์ของเหยื่ออย่างลับ ๆ แล้วเรียกร้องค่าไถ่เพื่อแลกกับกุญแจถอดรหัส?",
    "options_th": [
      "Rootkit",
      "Ransomware",
      "Adware",
      "Spyware"
    ],
    "explanation_th": "Ransomware คือมัลแวร์ที่เข้ารหัสไฟล์ของเหยื่ออย่างลับ ๆ แล้วเรียกร้องค่าไถ่เพื่อแลกกับกุญแจถอดรหัส หากไม่มีการสำรองข้อมูลไว้ล่วงหน้า เหยื่ออาจสูญเสียข้อมูลถาวรหรือถูกบังคับให้จ่ายเงินให้ผู้โจมตี ซึ่งไม่มีการรับประกันว่าจะได้ข้อมูลคืนจริง"
  },
  {
    "id": 549,
    "dom": 5,
    "question": "Which type of malware disguises itself as legitimate software to trick users into installing it, without self-replicating like a virus?",
    "options": [
      "Logic bomb",
      "Worm",
      "Trojan horse",
      "Botnet"
    ],
    "correct_idx": 2,
    "explanation": "A Trojan horse disguises itself as legitimate or useful software to trick users into installing it themselves. Unlike a virus or worm, it does not self-replicate or spread to other systems on its own.",
    "short_explanation_en": "A Trojan horse disguises itself as legitimate or useful software to trick users into installing it themselves. Unlike a virus or worm, it does not self-replicate or spread to other systems on its own.",
    "question_th": "มัลแวร์ประเภทใดที่ปลอมตัวเป็นซอฟต์แวร์ถูกกฎหมายเพื่อหลอกให้ผู้ใช้ติดตั้ง โดยไม่แพร่กระจายตัวเองเหมือนไวรัส?",
    "options_th": [
      "Logic bomb",
      "Worm",
      "Trojan horse",
      "Botnet"
    ],
    "explanation_th": "Trojan Horse (ม้าโทรจัน) คือมัลแวร์ที่ปลอมตัวเป็นซอฟต์แวร์ที่ดูปกติหรือมีประโยชน์ เพื่อหลอกล่อให้ผู้ใช้ติดตั้งเอง โดยตัวมันเองไม่มีความสามารถในการแพร่กระจายตัวเองไปยังระบบอื่นเหมือนไวรัสหรือเวิร์ม (worm) ต่างจาก Worm ที่สามารถแพร่กระจายผ่านเครือข่ายได้ด้วยตัวเอง"
  },
  {
    "id": 550,
    "dom": 5,
    "question": "Which type of malware can self-replicate and spread across a network WITHOUT requiring a host file or user interaction?",
    "options": [
      "Trojan horse",
      "Adware",
      "Worm",
      "Keylogger"
    ],
    "correct_idx": 2,
    "explanation": "A Worm can self-replicate and spread across a network automatically, without needing a host file or any user interaction, unlike a typical virus which requires a host program to spread.",
    "short_explanation_en": "A Worm can self-replicate and spread across a network automatically, without needing a host file or any user interaction, unlike a typical virus which requires a host program to spread.",
    "question_th": "มัลแวร์ประเภทใดที่สามารถแพร่กระจายตัวเองผ่านเครือข่ายได้โดยไม่ต้องอาศัยไฟล์โฮสต์หรือการกระทำของผู้ใช้?",
    "options_th": [
      "Trojan horse",
      "Adware",
      "Worm",
      "Keylogger"
    ],
    "explanation_th": "Worm (เวิร์ม) เป็นมัลแวร์ที่สามารถแพร่กระจายตัวเองผ่านเครือข่ายไปยังเครื่องอื่นได้โดยอัตโนมัติ โดยไม่จำเป็นต้องอาศัยไฟล์โฮสต์หรือการกระทำของผู้ใช้เหมือนไวรัสทั่วไป ทำให้สามารถแพร่ระบาดได้อย่างรวดเร็วในวงกว้าง"
  },
  {
    "id": 551,
    "dom": 5,
    "question": "Which social engineering technique involves an attacker following an authorized employee through a secured door without using their own credentials?",
    "options": [
      "Baiting",
      "Phishing",
      "Pretexting",
      "Tailgating (piggybacking)"
    ],
    "correct_idx": 3,
    "explanation": "Tailgating (or piggybacking) is when an attacker follows an authorized employee through a secured door without using their own credentials, often exploiting social courtesy like someone holding the door open.",
    "short_explanation_en": "Tailgating (or piggybacking) is when an attacker follows an authorized employee through a secured door without using their own credentials, often exploiting social courtesy like someone holding the door open.",
    "question_th": "เทคนิควิศวกรรมสังคมใดที่ผู้โจมตีเดินตามพนักงานที่ได้รับอนุญาตผ่านประตูที่มีการรักษาความปลอดภัย โดยไม่ใช้ข้อมูลรับรองของตนเอง?",
    "options_th": [
      "Baiting",
      "Phishing",
      "Pretexting",
      "Tailgating (piggybacking)"
    ],
    "explanation_th": "Tailgating หรือ Piggybacking คือเทคนิควิศวกรรมสังคมที่ผู้โจมตีเดินตามพนักงานที่ได้รับอนุญาตเข้าประตูที่มีการรักษาความปลอดภัย โดยไม่ต้องใช้บัตรผ่านหรือข้อมูลรับรองของตนเอง มักอาศัยมารยาททางสังคม เช่น การถือประตูให้ผู้อื่น เพื่อเข้าถึงพื้นที่หวงห้ามได้"
  },
  {
    "id": 552,
    "dom": 5,
    "question": "An attacker creates a fabricated scenario, such as pretending to be IT support, to trick an employee into revealing their password over the phone. This technique is called:",
    "options": [
      "Pretexting",
      "Dumpster diving",
      "Tailgating",
      "Baiting"
    ],
    "correct_idx": 0,
    "explanation": "Pretexting is creating a fabricated scenario or false identity — such as posing as IT support — to manipulate a victim into revealing sensitive information like a password.",
    "short_explanation_en": "Pretexting is creating a fabricated scenario or false identity — such as posing as IT support — to manipulate a victim into revealing sensitive information like a password.",
    "question_th": "ผู้โจมตีสร้างสถานการณ์สมมติขึ้น เช่น แสร้งเป็นเจ้าหน้าที่ฝ่าย IT เพื่อหลอกให้พนักงานเปิดเผยรหัสผ่านทางโทรศัพท์ เทคนิคนี้เรียกว่าอะไร?",
    "options_th": [
      "Pretexting",
      "Dumpster diving",
      "Tailgating",
      "Baiting"
    ],
    "explanation_th": "Pretexting คือการสร้างสถานการณ์หรือเรื่องราวสมมติขึ้นมา เช่น การอ้างตัวเป็นเจ้าหน้าที่ฝ่าย IT เพื่อหลอกล่อให้เหยื่อเปิดเผยข้อมูลที่ละเอียดอ่อน เช่น รหัสผ่าน โดยอาศัยความน่าเชื่อถือของบทบาทปลอมนั้นในการโน้มน้าวเหยื่อ"
  },
  {
    "id": 553,
    "dom": 5,
    "question": "Which social engineering attack involves leaving an infected USB drive in a location where an employee is likely to find and plug it into their computer?",
    "options": [
      "Phishing",
      "Baiting",
      "Tailgating",
      "Vishing"
    ],
    "correct_idx": 1,
    "explanation": "Baiting uses a tempting lure — such as an infected USB drive left where a curious employee might find and plug it in — to trigger malware execution once connected.",
    "short_explanation_en": "Baiting uses a tempting lure — such as an infected USB drive left where a curious employee might find and plug it in — to trigger malware execution once connected.",
    "question_th": "การโจมตีทางวิศวกรรมสังคมใดที่วางอุปกรณ์ USB ที่ติดมัลแวร์ไว้ในจุดที่คาดว่าพนักงานจะพบและนำไปเสียบเข้ากับคอมพิวเตอร์?",
    "options_th": [
      "Phishing",
      "Baiting",
      "Tailgating",
      "Vishing"
    ],
    "explanation_th": "Baiting คือเทคนิควิศวกรรมสังคมที่ใช้สิ่งล่อใจ เช่น อุปกรณ์ USB ที่ติดมัลแวร์ วางไว้ในจุดที่คาดว่าเหยื่อจะพบและนำไปเสียบเข้ากับคอมพิวเตอร์ด้วยความอยากรู้อยากเห็น เมื่อเสียบแล้วมัลแวร์จะทำงานทันทีและอาจแพร่กระจายเข้าสู่ระบบขององค์กร"
  },
  {
    "id": 554,
    "dom": 5,
    "question": "Which data classification level is typically reserved for information that, if disclosed, would cause exceptionally grave damage to national security or the organization?",
    "options": [
      "Internal Use Only",
      "Public",
      "Unclassified",
      "Top Secret (or Highly Confidential)"
    ],
    "correct_idx": 3,
    "explanation": "The highest classification level, such as Top Secret or Highly Confidential, is reserved for information whose disclosure would cause exceptionally grave damage to national security or the organization, requiring the strictest access controls.",
    "short_explanation_en": "The highest classification level, such as Top Secret or Highly Confidential, is reserved for information whose disclosure would cause exceptionally grave damage to national security or the organization, requiring the strictest access controls.",
    "question_th": "ระดับการจัดประเภทข้อมูลใดที่ปกติสงวนไว้สำหรับข้อมูลที่หากรั่วไหลจะสร้างความเสียหายร้ายแรงอย่างยิ่งต่อความมั่นคงของชาติหรือองค์กร?",
    "options_th": [
      "Internal Use Only",
      "Public",
      "Unclassified",
      "Top Secret (or Highly Confidential)"
    ],
    "explanation_th": "ระดับชั้นความลับสูงสุด เช่น Top Secret หรือ Highly Confidential สงวนไว้สำหรับข้อมูลที่หากรั่วไหลจะสร้างความเสียหายร้ายแรงอย่างยิ่งต่อความมั่นคงของชาติหรือองค์กร จึงต้องมีมาตรการควบคุมการเข้าถึงที่เข้มงวดที่สุดเมื่อเทียบกับข้อมูลระดับอื่น"
  },
  {
    "id": 555,
    "dom": 5,
    "question": "Which of the following BEST describes data classified as 'Public'?",
    "options": [
      "Information that requires the highest level of protection",
      "Information that must always be encrypted at rest",
      "Information that can be freely disclosed to anyone without causing harm to the organization",
      "Information accessible only to senior executives"
    ],
    "correct_idx": 2,
    "explanation": "'Public' classified data can be freely disclosed to anyone without causing harm to the organization, such as press releases or public website content — it requires the least protection compared to other classification levels.",
    "short_explanation_en": "'Public' classified data can be freely disclosed to anyone without causing harm to the organization, such as press releases or public website content — it requires the least protection compared to other classification levels.",
    "question_th": "ข้อใดอธิบายข้อมูลที่จัดประเภทเป็น 'Public' ได้ดีที่สุด?",
    "options_th": [
      "ข้อมูลที่ต้องการการป้องกันระดับสูงสุด",
      "ข้อมูลที่ต้องเข้ารหัสตลอดเวลาที่จัดเก็บ",
      "ข้อมูลที่สามารถเปิดเผยต่อสาธารณะได้อย่างอิสระโดยไม่ก่อความเสียหายต่อองค์กร",
      "ข้อมูลที่เข้าถึงได้เฉพาะผู้บริหารระดับสูงเท่านั้น"
    ],
    "explanation_th": "ข้อมูลระดับ Public คือข้อมูลที่สามารถเปิดเผยต่อสาธารณะได้อย่างอิสระโดยไม่ก่อให้เกิดความเสียหายต่อองค์กร เช่น ข่าวประชาสัมพันธ์หรือข้อมูลบนเว็บไซต์สาธารณะ จึงต้องการมาตรการป้องกันน้อยที่สุดเมื่อเทียบกับข้อมูลระดับอื่น เช่น Confidential หรือ Top Secret"
  },
  {
    "id": 556,
    "dom": 5,
    "question": "Which term describes data that is actively being processed by an application in a computer's memory (RAM)?",
    "options": [
      "Data in transit",
      "Data in archive",
      "Data in use",
      "Data at rest"
    ],
    "correct_idx": 2,
    "explanation": "'Data in Use' refers to data actively being processed in an application's memory (RAM) at that moment — distinct from Data at Rest (stored, e.g. on a hard disk) and Data in Transit (moving across a network).",
    "short_explanation_en": "'Data in Use' refers to data actively being processed in an application's memory (RAM) at that moment — distinct from Data at Rest (stored, e.g. on a hard disk) and Data in Transit (moving across a network).",
    "question_th": "คำใดอธิบายข้อมูลที่กำลังถูกประมวลผลโดยแอปพลิเคชันในหน่วยความจำของคอมพิวเตอร์ (RAM)?",
    "options_th": [
      "Data in transit",
      "Data in archive",
      "Data in use",
      "Data at rest"
    ],
    "explanation_th": "Data in Use หมายถึงข้อมูลที่กำลังถูกประมวลผลอยู่ในหน่วยความจำ (RAM) ของแอปพลิเคชัน ณ ขณะนั้น ต่างจาก Data at Rest ซึ่งหมายถึงข้อมูลที่จัดเก็บอยู่นิ่ง ๆ เช่น บนฮาร์ดดิสก์ และ Data in Transit ซึ่งหมายถึงข้อมูลที่กำลังถูกส่งผ่านเครือข่าย"
  },
  {
    "id": 557,
    "dom": 5,
    "question": "Which encryption approach uses the SAME key for both encrypting and decrypting data?",
    "options": [
      "Hashing",
      "Symmetric encryption",
      "Digital signature",
      "Asymmetric encryption"
    ],
    "correct_idx": 1,
    "explanation": "Symmetric encryption uses the same key for both encrypting and decrypting data — fast and well-suited for large volumes of data, but it poses a challenge around securely distributing that shared key.",
    "short_explanation_en": "Symmetric encryption uses the same key for both encrypting and decrypting data — fast and well-suited for large volumes of data, but it poses a challenge around securely distributing that shared key.",
    "question_th": "วิธีการเข้ารหัสใดที่ใช้กุญแจเดียวกันทั้งในการเข้ารหัสและถอดรหัสข้อมูล?",
    "options_th": [
      "Hashing",
      "Symmetric encryption",
      "Digital signature",
      "Asymmetric encryption"
    ],
    "explanation_th": "Symmetric Encryption (การเข้ารหัสแบบสมมาตร) ใช้กุญแจเดียวกันทั้งในการเข้ารหัสและถอดรหัสข้อมูล มีความเร็วสูงเหมาะกับการเข้ารหัสข้อมูลปริมาณมาก แต่มีความท้าทายเรื่องการแจกจ่ายกุญแจอย่างปลอดภัย ต่างจาก Asymmetric Encryption ที่ใช้กุญแจคู่ (public/private key) แยกกัน"
  },
  {
    "id": 558,
    "dom": 5,
    "question": "Which encryption approach uses a public key to encrypt data and a mathematically related private key to decrypt it?",
    "options": [
      "Steganography",
      "Asymmetric encryption",
      "Symmetric encryption",
      "Hashing"
    ],
    "correct_idx": 1,
    "explanation": "Asymmetric encryption uses a mathematically related key pair — a public key to encrypt and a private key to decrypt — allowing the public key to be shared openly since only the private key holder can decrypt the data.",
    "short_explanation_en": "Asymmetric encryption uses a mathematically related key pair — a public key to encrypt and a private key to decrypt — allowing the public key to be shared openly since only the private key holder can decrypt the data.",
    "question_th": "วิธีการเข้ารหัสใดที่ใช้ public key ในการเข้ารหัสข้อมูล และใช้ private key ที่สัมพันธ์กันทางคณิตศาสตร์ในการถอดรหัส?",
    "options_th": [
      "Steganography",
      "Asymmetric encryption",
      "Symmetric encryption",
      "Hashing"
    ],
    "explanation_th": "Asymmetric Encryption (การเข้ารหัสแบบอสมมาตร) ใช้กุญแจคู่ที่สัมพันธ์กันทางคณิตศาสตร์ คือ Public Key สำหรับเข้ารหัส และ Private Key สำหรับถอดรหัส ทำให้สามารถแจกจ่าย Public Key ได้อย่างเปิดเผยโดยไม่ทำให้ข้อมูลไม่ปลอดภัย เพราะมีเพียงเจ้าของ Private Key เท่านั้นที่ถอดรหัสได้"
  },
  {
    "id": 559,
    "dom": 5,
    "question": "Which cryptographic function takes an input of any size and produces a fixed-length output, primarily used to verify data integrity rather than for encryption?",
    "options": [
      "Asymmetric encryption",
      "Tokenization",
      "Symmetric encryption",
      "Hashing"
    ],
    "correct_idx": 3,
    "explanation": "Hashing is a one-way mathematical function that takes input of any size and produces a fixed-length output (hash value), used primarily to verify data integrity rather than for reversible encryption.",
    "short_explanation_en": "Hashing is a one-way mathematical function that takes input of any size and produces a fixed-length output (hash value), used primarily to verify data integrity rather than for reversible encryption.",
    "question_th": "ฟังก์ชันการเข้ารหัสใดที่รับข้อมูลนำเข้าขนาดใดก็ได้และสร้างผลลัพธ์ที่มีความยาวคงที่ ใช้เพื่อตรวจสอบความถูกต้องของข้อมูลมากกว่าการเข้ารหัส?",
    "options_th": [
      "Asymmetric encryption",
      "Tokenization",
      "Symmetric encryption",
      "Hashing"
    ],
    "explanation_th": "Hashing คือฟังก์ชันทางคณิตศาสตร์ที่รับข้อมูลนำเข้าขนาดใดก็ได้แล้วสร้างผลลัพธ์ที่มีความยาวคงที่ (hash value) ใช้เพื่อตรวจสอบความถูกต้องครบถ้วนของข้อมูล (integrity) เป็นหลัก ไม่ใช่เพื่อการเข้ารหัสที่สามารถถอดกลับได้ เนื่องจากฟังก์ชันแฮชเป็นกระบวนการทางเดียว (one-way)"
  },
  {
    "id": 560,
    "dom": 5,
    "question": "Which cryptographic technique combines hashing and asymmetric encryption to verify both the authenticity and integrity of a message, while also providing non-repudiation?",
    "options": [
      "Symmetric encryption",
      "Tokenization",
      "Salting",
      "Digital signature"
    ],
    "correct_idx": 3,
    "explanation": "A digital signature combines hashing with asymmetric encryption: the sender signs the message hash with their private key, and the receiver verifies it with the sender's public key, confirming both authenticity, integrity, and non-repudiation.",
    "short_explanation_en": "A digital signature combines hashing with asymmetric encryption: the sender signs the message hash with their private key, and the receiver verifies it with the sender's public key, confirming both authenticity, integrity, and non-repudiation.",
    "question_th": "เทคนิคการเข้ารหัสใดที่ผสมผสาน hashing กับ asymmetric encryption เพื่อยืนยันความถูกต้องและความครบถ้วนของข้อความ พร้อมทั้งให้ non-repudiation?",
    "options_th": [
      "Symmetric encryption",
      "Tokenization",
      "Salting",
      "Digital signature"
    ],
    "explanation_th": "Digital Signature (ลายเซ็นดิจิทัล) ผสมผสานการแฮชข้อมูลกับการเข้ารหัสแบบอสมมาตร โดยผู้ส่งใช้ Private Key เซ็นค่าแฮชของข้อความ ผู้รับสามารถตรวจสอบด้วย Public Key ได้ว่าข้อความมาจากผู้ส่งจริงและไม่ถูกแก้ไข พร้อมทั้งช่วยป้องกันการปฏิเสธความรับผิดชอบ (non-repudiation) ของผู้ส่ง"
  },
  {
    "id": 561,
    "dom": 5,
    "question": "Which infrastructure manages the creation, distribution, storage, and revocation of digital certificates used to establish trust in public key cryptography?",
    "options": [
      "Domain Name System (DNS)",
      "Security Information and Event Management (SIEM)",
      "Network Access Control (NAC)",
      "Public Key Infrastructure (PKI)"
    ],
    "correct_idx": 3,
    "explanation": "Public Key Infrastructure (PKI) manages the full lifecycle of digital certificates — issuance, distribution, storage, and revocation — establishing trust for public key cryptography between parties who have never interacted before.",
    "short_explanation_en": "Public Key Infrastructure (PKI) manages the full lifecycle of digital certificates — issuance, distribution, storage, and revocation — establishing trust for public key cryptography between parties who have never interacted before.",
    "question_th": "โครงสร้างพื้นฐานใดที่จัดการการออก แจกจ่าย จัดเก็บ และเพิกถอนใบรับรองดิจิทัลที่ใช้สร้างความน่าเชื่อถือในการเข้ารหัสแบบกุญแจสาธารณะ?",
    "options_th": [
      "Domain Name System (DNS)",
      "Security Information and Event Management (SIEM)",
      "Network Access Control (NAC)",
      "Public Key Infrastructure (PKI)"
    ],
    "explanation_th": "Public Key Infrastructure (PKI) คือระบบโครงสร้างพื้นฐานที่จัดการวงจรชีวิตทั้งหมดของใบรับรองดิจิทัล (digital certificate) ตั้งแต่การออก แจกจ่าย จัดเก็บ ไปจนถึงการเพิกถอน เพื่อสร้างความน่าเชื่อถือในการเข้ารหัสแบบกุญแจสาธารณะ (public key cryptography) ระหว่างคู่สื่อสารที่ไม่เคยรู้จักกันมาก่อน"
  },
  {
    "id": 562,
    "dom": 5,
    "question": "Adding a unique, random value to a password before hashing it, so that identical passwords produce different hash outputs, is called:",
    "options": [
      "Salting",
      "Key stretching",
      "Tokenization",
      "Hashing collision"
    ],
    "correct_idx": 0,
    "explanation": "Salting adds a unique random value to a password before hashing it, so identical passwords produce different hash outputs — this defeats precomputed rainbow table attacks.",
    "short_explanation_en": "Salting adds a unique random value to a password before hashing it, so identical passwords produce different hash outputs — this defeats precomputed rainbow table attacks.",
    "question_th": "การเพิ่มค่าสุ่มเฉพาะตัวให้กับรหัสผ่านก่อนนำไปแฮช เพื่อให้รหัสผ่านที่เหมือนกันได้ค่าแฮชต่างกัน เรียกว่าอะไร?",
    "options_th": [
      "Salting",
      "Key stretching",
      "Tokenization",
      "Hashing collision"
    ],
    "explanation_th": "Salting คือการเพิ่มค่าสุ่มเฉพาะตัว (salt) ให้กับรหัสผ่านก่อนนำไปแฮช ทำให้รหัสผ่านที่เหมือนกันของผู้ใช้แต่ละคนมีค่าแฮชที่แตกต่างกัน ซึ่งช่วยทำลายประสิทธิภาพของการโจมตีด้วย Rainbow Table ที่อาศัยตารางแฮชที่คำนวณไว้ล่วงหน้า"
  },
  {
    "id": 563,
    "dom": 5,
    "question": "Which centralized system collects, correlates, and analyzes log data from across an organization's network to detect potential security incidents in real time?",
    "options": [
      "Network Access Control (NAC)",
      "Security Information and Event Management (SIEM)",
      "Content Delivery Network (CDN)",
      "Public Key Infrastructure (PKI)"
    ],
    "correct_idx": 1,
    "explanation": "A SIEM centrally collects, correlates, and analyzes log data across an organization's network to detect potential security incidents in near real time, helping teams respond faster.",
    "short_explanation_en": "A SIEM centrally collects, correlates, and analyzes log data across an organization's network to detect potential security incidents in near real time, helping teams respond faster.",
    "question_th": "ระบบรวมศูนย์ใดที่รวบรวม เชื่อมโยง และวิเคราะห์ข้อมูล log จากทั่วทั้งเครือข่ายเพื่อตรวจจับเหตุการณ์ด้านความปลอดภัยแบบเรียลไทม์?",
    "options_th": [
      "Network Access Control (NAC)",
      "Security Information and Event Management (SIEM)",
      "Content Delivery Network (CDN)",
      "Public Key Infrastructure (PKI)"
    ],
    "explanation_th": "SIEM (Security Information and Event Management) รวบรวมและวิเคราะห์ข้อมูลบันทึกเหตุการณ์ (log) จากอุปกรณ์และระบบต่าง ๆ ทั่วทั้งเครือข่ายไว้ที่ศูนย์กลาง เพื่อค้นหาความสัมพันธ์ของเหตุการณ์และตรวจจับสัญญาณของภัยคุกคามด้านความปลอดภัยแบบเรียลไทม์ ช่วยให้ทีมความปลอดภัยตอบสนองต่อเหตุการณ์ได้รวดเร็วขึ้น"
  },
  {
    "id": 564,
    "dom": 5,
    "question": "Which process involves systematically scanning systems to identify known security weaknesses, then prioritizing and remediating them?",
    "options": [
      "Configuration management",
      "Vulnerability management",
      "Asset management",
      "Change management"
    ],
    "correct_idx": 1,
    "explanation": "Vulnerability management is the systematic process of scanning for known security weaknesses, then prioritizing and remediating them to continually reduce an organization's attack surface.",
    "short_explanation_en": "Vulnerability management is the systematic process of scanning for known security weaknesses, then prioritizing and remediating them to continually reduce an organization's attack surface.",
    "question_th": "กระบวนการใดที่สแกนระบบอย่างเป็นระบบเพื่อค้นหาช่องโหว่ด้านความปลอดภัยที่ทราบอยู่แล้ว แล้วจัดลำดับความสำคัญและแก้ไข?",
    "options_th": [
      "Configuration management",
      "Vulnerability management",
      "Asset management",
      "Change management"
    ],
    "explanation_th": "Vulnerability Management คือกระบวนการที่เป็นระบบในการค้นหาช่องโหว่ที่ทราบอยู่แล้วในระบบผ่านการสแกน จากนั้นจึงจัดลำดับความสำคัญและดำเนินการแก้ไข (remediate) ช่องโหว่เหล่านั้น เพื่อลดพื้นผิวการโจมตี (attack surface) ขององค์กรอย่างต่อเนื่อง"
  },
  {
    "id": 565,
    "dom": 5,
    "question": "Which process ensures that software updates addressing known vulnerabilities are tested and deployed to systems in a timely, controlled manner?",
    "options": [
      "Patch management",
      "Penetration testing",
      "Vulnerability scanning",
      "Data classification"
    ],
    "correct_idx": 0,
    "explanation": "Patch management is the process of testing and deploying software updates that address known vulnerabilities, in a timely and controlled manner, to close gaps before attackers can exploit them.",
    "short_explanation_en": "Patch management is the process of testing and deploying software updates that address known vulnerabilities, in a timely and controlled manner, to close gaps before attackers can exploit them.",
    "question_th": "กระบวนการใดที่รับรองว่าการอัปเดตซอฟต์แวร์ที่แก้ไขช่องโหว่ที่ทราบแล้วจะถูกทดสอบและติดตั้งอย่างทันเวลาและมีการควบคุม?",
    "options_th": [
      "Patch management",
      "Penetration testing",
      "Vulnerability scanning",
      "Data classification"
    ],
    "explanation_th": "Patch Management คือกระบวนการจัดการการทดสอบและติดตั้งการอัปเดตซอฟต์แวร์ที่แก้ไขช่องโหว่ที่ทราบแล้ว อย่างมีการควบคุมและทันเวลา เพื่อป้องกันไม่ให้ผู้โจมตีใช้ประโยชน์จากช่องโหว่ที่มีแพตช์แก้ไขอยู่แล้วแต่ยังไม่ได้ติดตั้ง"
  },
  {
    "id": 566,
    "dom": 5,
    "question": "Which formal process requires proposed modifications to IT systems to be documented, reviewed, approved, and tested before implementation, to avoid unintended disruptions?",
    "options": [
      "Change management",
      "Vulnerability management",
      "Patch management",
      "Incident response"
    ],
    "correct_idx": 0,
    "explanation": "Change management is the formal process requiring proposed IT system modifications to be documented, reviewed, approved, and tested before implementation, reducing the risk of unintended disruptions.",
    "short_explanation_en": "Change management is the formal process requiring proposed IT system modifications to be documented, reviewed, approved, and tested before implementation, reducing the risk of unintended disruptions.",
    "question_th": "กระบวนการที่เป็นทางการใดที่กำหนดให้การแก้ไขระบบ IT ที่เสนอต้องถูกบันทึก ทบทวน อนุมัติ และทดสอบก่อนนำไปใช้งาน เพื่อหลีกเลี่ยงการหยุดชะงักที่ไม่ได้ตั้งใจ?",
    "options_th": [
      "Change management",
      "Vulnerability management",
      "Patch management",
      "Incident response"
    ],
    "explanation_th": "Change Management คือกระบวนการที่เป็นทางการในการบันทึก ทบทวน อนุมัติ และทดสอบการเปลี่ยนแปลงใด ๆ ต่อระบบไอที ก่อนนำไปใช้งานจริง เพื่อลดความเสี่ยงที่การเปลี่ยนแปลงจะก่อให้เกิดปัญหาหรือการหยุดชะงักของระบบโดยไม่ได้ตั้งใจ"
  },
  {
    "id": 567,
    "dom": 5,
    "question": "Which practice involves establishing and maintaining a documented, standardized baseline configuration for systems to ensure consistency and detect unauthorized changes?",
    "options": [
      "Incident response",
      "Data classification",
      "Configuration management",
      "Change management"
    ],
    "correct_idx": 2,
    "explanation": "Configuration management establishes and maintains a documented, standardized baseline configuration for systems, ensuring consistency and making it easier to detect unauthorized changes.",
    "short_explanation_en": "Configuration management establishes and maintains a documented, standardized baseline configuration for systems, ensuring consistency and making it easier to detect unauthorized changes.",
    "question_th": "แนวปฏิบัติใดที่กำหนดและรักษามาตรฐานการตั้งค่าระบบ (baseline configuration) ที่มีการบันทึกไว้ เพื่อความสอดคล้องและตรวจจับการเปลี่ยนแปลงที่ไม่ได้รับอนุญาต?",
    "options_th": [
      "Incident response",
      "Data classification",
      "Configuration management",
      "Change management"
    ],
    "explanation_th": "Configuration Management คือแนวปฏิบัติในการกำหนดและรักษามาตรฐานการตั้งค่าระบบ (baseline configuration) ให้เป็นไปในทิศทางเดียวกันและมีการบันทึกไว้อย่างชัดเจน ช่วยให้สามารถตรวจพบการเปลี่ยนแปลงที่ไม่ได้รับอนุญาตได้ง่ายขึ้น และรักษาความสอดคล้องของระบบทั้งหมดในองค์กร"
  },
  {
    "id": 568,
    "dom": 5,
    "question": "Which term describes the process of applying security settings to reduce a system's attack surface, such as disabling unnecessary services and closing unused ports?",
    "options": [
      "Load balancing",
      "Data classification",
      "System hardening",
      "Patch management"
    ],
    "correct_idx": 2,
    "explanation": "System hardening is the process of applying security settings to reduce a system's attack surface — such as disabling unnecessary services and closing unused ports — leaving fewer entry points for attackers.",
    "short_explanation_en": "System hardening is the process of applying security settings to reduce a system's attack surface — such as disabling unnecessary services and closing unused ports — leaving fewer entry points for attackers.",
    "question_th": "คำใดอธิบายกระบวนการปรับใช้การตั้งค่าความปลอดภัยเพื่อลดพื้นผิวการโจมตีของระบบ เช่น การปิดบริการที่ไม่จำเป็นและปิดพอร์ตที่ไม่ได้ใช้งาน?",
    "options_th": [
      "Load balancing",
      "Data classification",
      "System hardening",
      "Patch management"
    ],
    "explanation_th": "System Hardening คือกระบวนการปรับแต่งการตั้งค่าความปลอดภัยของระบบเพื่อลดพื้นผิวการโจมตี (attack surface) เช่น การปิดบริการที่ไม่จำเป็น ปิดพอร์ตที่ไม่ได้ใช้งาน และลบซอฟต์แวร์ที่ไม่จำเป็นออก ทำให้มีช่องทางที่ผู้โจมตีสามารถใช้ประโยชน์ได้น้อยลง"
  },
  {
    "id": 569,
    "dom": 5,
    "question": "Which type of backup captures ALL data selected for backup every time it runs, resulting in the longest backup time but the fastest restore time?",
    "options": [
      "Incremental backup",
      "Snapshot backup only",
      "Full backup",
      "Differential backup"
    ],
    "correct_idx": 2,
    "explanation": "A Full backup captures all selected data every time it runs, resulting in the longest backup time and largest storage use, but the fastest and simplest restore — since only one backup set is needed.",
    "short_explanation_en": "A Full backup captures all selected data every time it runs, resulting in the longest backup time and largest storage use, but the fastest and simplest restore — since only one backup set is needed.",
    "question_th": "ประเภทการสำรองข้อมูลใดที่สำรองข้อมูลทั้งหมดที่เลือกไว้ทุกครั้งที่ทำงาน ทำให้ใช้เวลาสำรองนานที่สุดแต่กู้คืนได้เร็วที่สุด?",
    "options_th": [
      "Incremental backup",
      "Snapshot backup only",
      "Full backup",
      "Differential backup"
    ],
    "explanation_th": "Full Backup คือการสำรองข้อมูลทั้งหมดที่เลือกไว้ทุกครั้งที่ทำการสำรอง ทำให้ใช้เวลาสำรองนานที่สุดและใช้พื้นที่จัดเก็บมากที่สุด แต่มีข้อดีคือการกู้คืนข้อมูลทำได้รวดเร็วที่สุด เพราะต้องใช้เพียงไฟล์สำรองชุดเดียวในการกู้คืนทั้งหมด"
  },
  {
    "id": 570,
    "dom": 5,
    "question": "Which type of backup only captures data that has changed since the LAST backup of any type (full or incremental), resulting in the smallest backup size and fastest backup time, but a slower and more complex restore process?",
    "options": [
      "Full backup",
      "Incremental backup",
      "Differential backup",
      "Mirror backup"
    ],
    "correct_idx": 1,
    "explanation": "An Incremental backup only captures data changed since the very last backup of any type (full or incremental), resulting in the smallest size and fastest backup, but a slower and more complex restore since every incremental file must be applied in sequence.",
    "short_explanation_en": "An Incremental backup only captures data changed since the very last backup of any type (full or incremental), resulting in the smallest size and fastest backup, but a slower and more complex restore since every incremental file must be applied in sequence.",
    "question_th": "ประเภทการสำรองข้อมูลใดที่สำรองเฉพาะข้อมูลที่เปลี่ยนแปลงนับตั้งแต่การสำรองครั้งล่าสุด (ไม่ว่าจะเป็น full หรือ incremental) ทำให้ใช้พื้นที่น้อยที่สุดแต่การกู้คืนซับซ้อนกว่า?",
    "options_th": [
      "Full backup",
      "Incremental backup",
      "Differential backup",
      "Mirror backup"
    ],
    "explanation_th": "Incremental Backup สำรองเฉพาะข้อมูลที่เปลี่ยนแปลงไปนับตั้งแต่การสำรองครั้งล่าสุด (ไม่ว่าจะเป็น Full หรือ Incremental ครั้งก่อน) ทำให้ใช้เวลาและพื้นที่จัดเก็บน้อยที่สุด แต่การกู้คืนข้อมูลจะซับซ้อนกว่า เพราะต้องนำไฟล์ Full backup และไฟล์ Incremental ทุกไฟล์ตามลำดับมาประกอบรวมกัน"
  },
  {
    "id": 571,
    "dom": 5,
    "question": "Which secure media disposal method makes data on a hard drive UNRECOVERABLE by exposing it to a strong magnetic field?",
    "options": [
      "Formatting",
      "Compression",
      "File deletion",
      "Degaussing"
    ],
    "correct_idx": 3,
    "explanation": "Degaussing exposes magnetic storage media (like a hard disk) to a strong magnetic field, rendering the data unrecoverable — unlike formatting or file deletion, which only remove pointers to the data while the actual data remains recoverable.",
    "short_explanation_en": "Degaussing exposes magnetic storage media (like a hard disk) to a strong magnetic field, rendering the data unrecoverable — unlike formatting or file deletion, which only remove pointers to the data while the actual data remains recoverable.",
    "question_th": "วิธีการทำลายสื่อจัดเก็บข้อมูลอย่างปลอดภัยแบบใดที่ทำให้ข้อมูลบนฮาร์ดดิสก์ไม่สามารถกู้คืนได้ด้วยการใช้สนามแม่เหล็กความเข้มสูง?",
    "options_th": [
      "Formatting",
      "Compression",
      "File deletion",
      "Degaussing"
    ],
    "explanation_th": "Degaussing คือการใช้สนามแม่เหล็กความเข้มสูงในการลบข้อมูลบนสื่อจัดเก็บแบบแม่เหล็ก เช่น ฮาร์ดดิสก์ ทำให้ข้อมูลไม่สามารถกู้คืนได้อีก ต่างจากการฟอร์แมตหรือการลบไฟล์ปกติซึ่งเพียงลบตัวชี้ (pointer) ไปยังข้อมูล แต่ข้อมูลจริงยังคงอยู่และสามารถกู้คืนได้ด้วยเครื่องมือเฉพาะทาง"
  },
  {
    "id": 572,
    "dom": 5,
    "question": "Which of the following is the MOST secure method to ensure that data on a physical hard drive can NEVER be recovered, especially when the drive itself will not be reused?",
    "options": [
      "Renaming the files with random characters",
      "Moving files to the recycle bin and emptying it",
      "Physical destruction (shredding or crushing the drive)",
      "Quick format"
    ],
    "correct_idx": 2,
    "explanation": "Physical destruction (shredding or crushing the drive) is the most secure method to guarantee data can never be recovered, ideal when the storage media itself won't be reused — unlike formatting or file deletion, which leave data recoverable with specialized tools.",
    "short_explanation_en": "Physical destruction (shredding or crushing the drive) is the most secure method to guarantee data can never be recovered, ideal when the storage media itself won't be reused — unlike formatting or file deletion, which leave data recoverable with specialized tools.",
    "question_th": "ข้อใดคือวิธีที่ปลอดภัยที่สุดในการรับประกันว่าข้อมูลบนฮาร์ดดิสก์จะไม่สามารถกู้คืนได้เลย โดยเฉพาะเมื่อจะไม่นำไดรฟ์นั้นกลับมาใช้ซ้ำ?",
    "options_th": [
      "เปลี่ยนชื่อไฟล์เป็นอักขระสุ่ม",
      "ย้ายไฟล์ไปที่ถังขยะแล้วล้างถังขยะ",
      "การทำลายทางกายภาพ (บดหรือทุบไดรฟ์)",
      "การฟอร์แมตแบบเร็ว (quick format)"
    ],
    "explanation_th": "การทำลายทางกายภาพ (physical destruction) เช่น การบดหรือทำลายฮาร์ดดิสก์ เป็นวิธีที่ปลอดภัยที่สุดในการรับประกันว่าจะไม่มีทางกู้คืนข้อมูลได้อีก เหมาะสำหรับกรณีที่ไม่ต้องการนำสื่อจัดเก็บนั้นกลับมาใช้งานซ้ำ ต่างจากการฟอร์แมตหรือการลบไฟล์ทั่วไปซึ่งข้อมูลยังสามารถถูกกู้คืนได้ด้วยเครื่องมือพิเศษ"
  },
  {
    "id": 573,
    "dom": 5,
    "question": "Which document tracks organizational assets (hardware, software, data) throughout their lifecycle, supporting security decisions such as patching and end-of-life planning?",
    "options": [
      "Business continuity plan",
      "Asset inventory (asset management register)",
      "Risk register",
      "Incident response plan"
    ],
    "correct_idx": 1,
    "explanation": "An asset inventory (asset management register) tracks organizational assets — hardware, software, and data — throughout their lifecycle, supporting security decisions such as patching schedules and end-of-life planning.",
    "short_explanation_en": "An asset inventory (asset management register) tracks organizational assets — hardware, software, and data — throughout their lifecycle, supporting security decisions such as patching schedules and end-of-life planning.",
    "question_th": "เอกสารใดที่ติดตามทรัพย์สินขององค์กร (ฮาร์ดแวร์ ซอฟต์แวร์ ข้อมูล) ตลอดวงจรชีวิต เพื่อสนับสนุนการตัดสินใจด้านความปลอดภัย เช่น การอัปเดตแพตช์และการวางแผนเลิกใช้งาน?",
    "options_th": [
      "Business continuity plan",
      "Asset inventory (asset management register)",
      "Risk register",
      "Incident response plan"
    ],
    "explanation_th": "Asset Inventory หรือ Asset Management Register คือเอกสารที่บันทึกและติดตามทรัพย์สินขององค์กร ทั้งฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูล ตลอดวงจรชีวิตการใช้งาน ช่วยสนับสนุนการตัดสินใจด้านความปลอดภัย เช่น การวางแผนอัปเดตแพตช์หรือการเลิกใช้งานอุปกรณ์เมื่อหมดอายุการใช้งาน (end-of-life)"
  },
  {
    "id": 574,
    "dom": 5,
    "question": "An organization conducts regular training sessions to teach employees how to recognize phishing emails and avoid clicking malicious links. This is an example of:",
    "options": [
      "Log correlation",
      "Security awareness training",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "correct_idx": 1,
    "explanation": "This is an example of security awareness training — an administrative control designed to help employees recognize and avoid threats like phishing, since human behavior is often the weakest link in an organization's security chain.",
    "short_explanation_en": "This is an example of security awareness training — an administrative control designed to help employees recognize and avoid threats like phishing, since human behavior is often the weakest link in an organization's security chain.",
    "question_th": "องค์กรจัดฝึกอบรมพนักงานเป็นประจำเพื่อสอนวิธีสังเกตอีเมลฟิชชิงและหลีกเลี่ยงการคลิกลิงก์อันตราย นี่คือตัวอย่างของอะไร?",
    "options_th": [
      "Log correlation",
      "Security awareness training",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "explanation_th": "การฝึกอบรมสร้างความตระหนักด้านความปลอดภัย (Security Awareness Training) มีเป้าหมายเพื่อให้พนักงานสามารถสังเกตและหลีกเลี่ยงภัยคุกคาม เช่น อีเมลฟิชชิง ซึ่งเป็นการควบคุมเชิงบริหาร (administrative control) ที่สำคัญ เพราะมนุษย์มักเป็นจุดอ่อนที่สุดในห่วงโซ่ความปลอดภัยขององค์กร"
  },
  {
    "id": 575,
    "dom": 5,
    "question": "Which authorized, simulated cyberattack is conducted to actively exploit vulnerabilities and assess how far an attacker could penetrate a system, going beyond simply identifying weaknesses?",
    "options": [
      "Configuration management",
      "Security awareness training",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "correct_idx": 3,
    "explanation": "Penetration testing is an authorized, simulated cyberattack that actively exploits vulnerabilities to assess how far an attacker could penetrate a system — going beyond vulnerability scanning, which only identifies weaknesses without exploiting them.",
    "short_explanation_en": "Penetration testing is an authorized, simulated cyberattack that actively exploits vulnerabilities to assess how far an attacker could penetrate a system — going beyond vulnerability scanning, which only identifies weaknesses without exploiting them.",
    "question_th": "การจำลองการโจมตีทางไซเบอร์แบบใดที่ได้รับอนุญาตและพยายามใช้ประโยชน์จากช่องโหว่จริงเพื่อประเมินว่าผู้โจมตีจะเจาะระบบได้ลึกเพียงใด มากกว่าการค้นหาช่องโหว่เพียงอย่างเดียว?",
    "options_th": [
      "Configuration management",
      "Security awareness training",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    "explanation_th": "Penetration Testing คือการจำลองการโจมตีทางไซเบอร์ที่ได้รับอนุญาต โดยพยายามเจาะระบบและใช้ประโยชน์จากช่องโหว่จริง เพื่อประเมินว่าผู้โจมตีจะสามารถเจาะลึกเข้าไปในระบบได้มากเพียงใด ต่างจาก Vulnerability Scanning ซึ่งเป็นเพียงการค้นหาและระบุช่องโหว่โดยไม่มีการโจมตีจริง"
  },
  {
    "id": 576,
    "dom": 5,
    "question": "Which term describes the continuous monitoring of network traffic, system logs, and security alerts to detect and respond to threats as they occur?",
    "options": [
      "Business impact analysis",
      "Change management",
      "Security monitoring",
      "Data classification"
    ],
    "correct_idx": 2,
    "explanation": "Security monitoring is the continuous observation of network traffic, system logs, and security alerts to detect and respond to threats as they occur — a core function of a Security Operations Center (SOC).",
    "short_explanation_en": "Security monitoring is the continuous observation of network traffic, system logs, and security alerts to detect and respond to threats as they occur — a core function of a Security Operations Center (SOC).",
    "question_th": "คำใดอธิบายการเฝ้าระวังทราฟฟิกเครือข่าย บันทึกระบบ และการแจ้งเตือนด้านความปลอดภัยอย่างต่อเนื่อง เพื่อตรวจจับและตอบสนองต่อภัยคุกคามได้ทันทีที่เกิดขึ้น?",
    "options_th": [
      "Business impact analysis",
      "Change management",
      "Security monitoring",
      "Data classification"
    ],
    "explanation_th": "Security Monitoring คือการเฝ้าระวังทราฟฟิกเครือข่าย บันทึกระบบ (log) และการแจ้งเตือนด้านความปลอดภัยอย่างต่อเนื่อง เพื่อตรวจจับและตอบสนองต่อภัยคุกคามได้ทันทีที่เกิดขึ้น ถือเป็นกิจกรรมหลักของศูนย์ปฏิบัติการความปลอดภัย (Security Operations Center - SOC)"
  },
  {
    "id": 577,
    "dom": 5,
    "question": "Which term refers to the process of identifying, collecting, and preserving digital evidence in a manner that maintains its integrity for potential use in legal proceedings?",
    "options": [
      "Digital forensics",
      "Penetration testing",
      "Change management",
      "Data classification"
    ],
    "correct_idx": 0,
    "explanation": "Digital forensics is the process of identifying, collecting, and preserving digital evidence in a manner that maintains its integrity, so it can potentially be used in legal proceedings — this requires strictly following a 'chain of custody' to keep the evidence credible.",
    "short_explanation_en": "Digital forensics is the process of identifying, collecting, and preserving digital evidence in a manner that maintains its integrity, so it can potentially be used in legal proceedings — this requires strictly following a 'chain of custody' to keep the evidence credible.",
    "question_th": "คำใดหมายถึงกระบวนการระบุ เก็บรวบรวม และรักษาหลักฐานดิจิทัลในลักษณะที่คงความถูกต้องครบถ้วนไว้ เพื่อใช้ในกระบวนการทางกฎหมาย?",
    "options_th": [
      "Digital forensics",
      "Penetration testing",
      "Change management",
      "Data classification"
    ],
    "explanation_th": "Digital Forensics คือกระบวนการระบุ เก็บรวบรวม และรักษาหลักฐานดิจิทัลในลักษณะที่คงความถูกต้องครบถ้วนไว้ เพื่อให้สามารถนำไปใช้เป็นหลักฐานทางกฎหมายได้ กระบวนการนี้ต้องปฏิบัติตามหลัก 'chain of custody' อย่างเคร่งครัดเพื่อป้องกันไม่ให้หลักฐานถูกโต้แย้งความน่าเชื่อถือ"
  },
  {
    "id": 578,
    "dom": 5,
    "question": "Which practice involves storing multiple copies of critical data in geographically separate locations to protect against data loss from a localized disaster?",
    "options": [
      "Offsite backup storage",
      "Network segmentation",
      "Load balancing",
      "Data classification"
    ],
    "correct_idx": 0,
    "explanation": "Offsite backup storage keeps multiple copies of critical data in geographically separate locations to protect against data loss from a localized disaster, such as a fire or flood at the primary data center.",
    "short_explanation_en": "Offsite backup storage keeps multiple copies of critical data in geographically separate locations to protect against data loss from a localized disaster, such as a fire or flood at the primary data center.",
    "question_th": "แนวปฏิบัติใดที่จัดเก็บสำเนาข้อมูลสำคัญหลายชุดไว้ในสถานที่ทางภูมิศาสตร์ที่แยกจากกัน เพื่อป้องกันการสูญเสียข้อมูลจากภัยพิบัติเฉพาะพื้นที่?",
    "options_th": [
      "Offsite backup storage",
      "Network segmentation",
      "Load balancing",
      "Data classification"
    ],
    "explanation_th": "การจัดเก็บสำเนาข้อมูลสำรองไว้ในสถานที่ทางภูมิศาสตร์ที่แยกจากกัน (Offsite Backup Storage) ช่วยป้องกันการสูญเสียข้อมูลถาวรหากเกิดภัยพิบัติเฉพาะพื้นที่ เช่น ไฟไหม้หรือน้ำท่วมที่ศูนย์ข้อมูลหลัก เนื่องจากสำเนาสำรองในสถานที่อื่นจะไม่ได้รับผลกระทบจากเหตุการณ์เดียวกัน"
  },
  {
    "id": 579,
    "dom": 5,
    "question": "An organization builds redundant power supplies, network paths, and clustered servers into its infrastructure to minimize single points of failure. This design goal primarily supports which CIA Triad principle?",
    "options": [
      "Non-repudiation",
      "Availability",
      "Confidentiality",
      "Accountability"
    ],
    "correct_idx": 1,
    "explanation": "Building redundant power supplies, network paths, and clustered servers minimizes single points of failure, directly supporting the Availability principle of the CIA Triad — ensuring systems remain accessible even if one component fails.",
    "short_explanation_en": "Building redundant power supplies, network paths, and clustered servers minimizes single points of failure, directly supporting the Availability principle of the CIA Triad — ensuring systems remain accessible even if one component fails.",
    "question_th": "องค์กรออกแบบระบบให้มีแหล่งจ่ายไฟสำรอง เส้นทางเครือข่ายสำรอง และเซิร์ฟเวอร์แบบคลัสเตอร์ เพื่อลดจุดที่หากล้มเหลวแล้วระบบทั้งหมดจะหยุดทำงาน เป้าหมายการออกแบบนี้สนับสนุนหลักการใดของ CIA Triad เป็นหลัก?",
    "options_th": [
      "Non-repudiation",
      "Availability",
      "Confidentiality",
      "Accountability"
    ],
    "explanation_th": "การออกแบบระบบให้มีความซ้ำซ้อน (redundancy) เช่น แหล่งจ่ายไฟสำรอง เส้นทางเครือข่ายสำรอง และเซิร์ฟเวอร์แบบคลัสเตอร์ มีเป้าหมายหลักเพื่อลดจุดที่หากล้มเหลวแล้วระบบทั้งหมดจะหยุดทำงาน (single point of failure) ซึ่งสนับสนุนหลัก Availability (ความพร้อมใช้งาน) ของระบบโดยตรง"
  },
  {
    "id": 580,
    "dom": 5,
    "question": "Which term describes an attacker trying every possible combination of characters until the correct password is found?",
    "options": [
      "SQL injection",
      "Man-in-the-middle attack",
      "Phishing attack",
      "Brute-force attack"
    ],
    "correct_idx": 3,
    "explanation": "A brute-force attack systematically tries every possible character combination until the correct password is found. Long, complex passwords and account lockout policies after repeated failed attempts help reduce this risk.",
    "short_explanation_en": "A brute-force attack systematically tries every possible character combination until the correct password is found. Long, complex passwords and account lockout policies after repeated failed attempts help reduce this risk.",
    "question_th": "คำใดอธิบายผู้โจมตีที่พยายามลองรหัสผ่านทุกความเป็นไปได้จนกว่าจะพบรหัสผ่านที่ถูกต้อง?",
    "options_th": [
      "SQL injection",
      "Man-in-the-middle attack",
      "Phishing attack",
      "Brute-force attack"
    ],
    "explanation_th": "Brute-Force Attack คือการโจมตีที่ผู้โจมตีพยายามลองรหัสผ่านทุกความเป็นไปได้อย่างเป็นระบบจนกว่าจะพบรหัสผ่านที่ถูกต้อง การใช้รหัสผ่านที่ยาวและซับซ้อน รวมถึงการล็อกบัญชีหลังพยายามผิดหลายครั้ง (account lockout) ช่วยลดความเสี่ยงจากการโจมตีประเภทนี้ได้"
  },
  {
    "id": 581,
    "dom": 5,
    "question": "Which type of attack pre-computes and stores a large table of hash values to quickly reverse-lookup a plaintext password from its hash, unless the hash was salted?",
    "options": [
      "Brute-force attack",
      "Denial of Service attack",
      "Dictionary attack",
      "Rainbow table attack"
    ],
    "correct_idx": 3,
    "explanation": "A rainbow table attack uses a large precomputed table of hash values to quickly reverse-lookup a plaintext password from its hash — but salting the password before hashing defeats this attack, since the same password produces a different hash for each account.",
    "short_explanation_en": "A rainbow table attack uses a large precomputed table of hash values to quickly reverse-lookup a plaintext password from its hash — but salting the password before hashing defeats this attack, since the same password produces a different hash for each account.",
    "question_th": "การโจมตีประเภทใดที่คำนวณและจัดเก็บตารางค่าแฮชขนาดใหญ่ไว้ล่วงหน้า เพื่อค้นหารหัสผ่านต้นฉบับจากค่าแฮชได้อย่างรวดเร็ว เว้นแต่จะมีการทำ salting?",
    "options_th": [
      "Brute-force attack",
      "Denial of Service attack",
      "Dictionary attack",
      "Rainbow table attack"
    ],
    "explanation_th": "Rainbow Table Attack ใช้ตารางค่าแฮชที่คำนวณไว้ล่วงหน้าจำนวนมาก เพื่อค้นหารหัสผ่านต้นฉบับจากค่าแฮชได้อย่างรวดเร็วโดยไม่ต้องคำนวณใหม่ทุกครั้ง อย่างไรก็ตาม หากมีการทำ Salting ก่อนแฮชรหัสผ่าน ตารางที่คำนวณไว้ล่วงหน้าจะใช้ไม่ได้ผล เพราะค่าแฮชของรหัสผ่านเดียวกันจะแตกต่างกันในแต่ละบัญชี"
  },
  {
    "id": 582,
    "dom": 5,
    "question": "Which practice reduces the risk of storing actual sensitive data (such as credit card numbers) by replacing it with a non-sensitive substitute value that has no exploitable meaning on its own?",
    "options": [
      "Load balancing",
      "Hashing",
      "Tokenization",
      "Digital signature"
    ],
    "correct_idx": 2,
    "explanation": "Tokenization replaces sensitive data — such as credit card numbers — with a non-sensitive token value that has no exploitable meaning on its own and cannot be reversed to the original data without the separate tokenization vault, reducing risk if the stored data is stolen.",
    "short_explanation_en": "Tokenization replaces sensitive data — such as credit card numbers — with a non-sensitive token value that has no exploitable meaning on its own and cannot be reversed to the original data without the separate tokenization vault, reducing risk if the stored data is stolen.",
    "question_th": "แนวปฏิบัติใดที่ลดความเสี่ยงจากการจัดเก็บข้อมูลอ่อนไหวจริง (เช่น หมายเลขบัตรเครดิต) โดยแทนที่ด้วยค่าทดแทนที่ไม่มีความหมายในตัวเอง?",
    "options_th": [
      "Load balancing",
      "Hashing",
      "Tokenization",
      "Digital signature"
    ],
    "explanation_th": "Tokenization คือการแทนที่ข้อมูลที่ละเอียดอ่อน เช่น หมายเลขบัตรเครดิต ด้วยค่าโทเค็น (token) ที่ไม่มีความหมายในตัวเองและไม่สามารถย้อนกลับไปหาข้อมูลจริงได้หากไม่มีระบบแปลงกลับ (tokenization vault) ช่วยลดความเสี่ยงหากข้อมูลที่จัดเก็บถูกขโมยไป เนื่องจากโทเค็นเพียงอย่างเดียวไม่มีประโยชน์ต่อผู้โจมตี"
  },
  {
    "id": 583,
    "dom": 5,
    "question": "Which of the following BEST describes the purpose of a Security Operations Center (SOC)?",
    "options": [
      "A vendor that manufactures firewalls",
      "A physical vault for storing backup tapes",
      "A single employee responsible for all security tasks",
      "A centralized team and facility that continuously monitors, detects, and responds to security incidents"
    ],
    "correct_idx": 3,
    "explanation": "A Security Operations Center (SOC) is a centralized team and facility that continuously monitors, detects, and responds to security incidents, typically using tools like SIEM to collect and analyze data across the organization for faster, more effective threat response.",
    "short_explanation_en": "A Security Operations Center (SOC) is a centralized team and facility that continuously monitors, detects, and responds to security incidents, typically using tools like SIEM to collect and analyze data across the organization for faster, more effective threat response.",
    "question_th": "ข้อใดอธิบายวัตถุประสงค์ของ Security Operations Center (SOC) ได้ดีที่สุด?",
    "options_th": [
      "ผู้จำหน่ายที่ผลิตไฟร์วอลล์",
      "ห้องนิรภัยทางกายภาพสำหรับจัดเก็บเทปสำรองข้อมูล",
      "พนักงานคนเดียวที่รับผิดชอบงานด้านความปลอดภัยทั้งหมด",
      "ทีมงานและศูนย์ปฏิบัติการรวมศูนย์ที่เฝ้าระวัง ตรวจจับ และตอบสนองต่อเหตุการณ์ด้านความปลอดภัยอย่างต่อเนื่อง"
    ],
    "explanation_th": "Security Operations Center (SOC) คือทีมงานและศูนย์ปฏิบัติการรวมศูนย์ที่เฝ้าระวัง ตรวจจับ และตอบสนองต่อเหตุการณ์ด้านความปลอดภัยอย่างต่อเนื่องตลอด 24 ชั่วโมง โดยใช้เครื่องมือ เช่น SIEM ในการรวบรวมและวิเคราะห์ข้อมูลจากทั่วทั้งองค์กร เพื่อให้สามารถตอบสนองต่อภัยคุกคามได้อย่างรวดเร็วและมีประสิทธิภาพ"
  }
];

export default questions;
