/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 3: Access Controls Concepts
 * Question Count: 93
 */

const questions = [
  {
    "id": 38,
    "dom": 3,
    "question": "Which of the following is not an example of physical access controls?",
    "options": [
      "Locks",
      "Gates",
      "Cybersecurity software",
      "Fences"
    ],
    "correct_idx": 2,
    "explanation": "Physical access controls are tangible barriers or mechanisms (locks, gates, fences) that restrict physical entry — cybersecurity software is a logical/technical control, not physical.",
    "short_explanation_en": "Physical access controls are tangible barriers or mechanisms (locks, gates, fences) that restrict physical entry — cybersecurity software is a logical/technical control, not physical.",
    "question_th": "ข้อใดไม่ใช่ตัวอย่างของการควบคุมการเข้าถึงทางกายภาพ?",
    "options_th": [
      "กุญแจล็อก",
      "ประตูรั้ว",
      "ซอฟต์แวร์ความปลอดภัยไซเบอร์",
      "รั้วรอบ"
    ],
    "explanation_th": "การควบคุมการเข้าถึงทางกายภาพคือสิ่งกีดขวางหรือกลไกที่จับต้องได้ (กุญแจ ประตูรั้ว รั้ว) ที่จำกัดการเข้าถึงทางกายภาพ — ซอฟต์แวร์ความปลอดภัยไซเบอร์เป็นการควบคุมเชิงตรรกะ/เทคนิค ไม่ใช่ทางกายภาพ"
  },
  {
    "id": 39,
    "dom": 3,
    "question": "Which type of badging system uses RFID technology for access control?",
    "options": [
      "Proximity cards",
      "Smart cards",
      "Biometric IDs",
      "Turnstiles"
    ],
    "correct_idx": 0,
    "explanation": "Proximity cards use RFID (radio-frequency identification) technology, letting a badge be read at a short distance without direct contact.",
    "short_explanation_en": "Proximity cards use RFID (radio-frequency identification) technology, letting a badge be read at a short distance without direct contact.",
    "question_th": "ระบบบัตรผ่านประเภทใดที่ใช้เทคโนโลยี RFID ในการควบคุมการเข้าถึง?",
    "options_th": [
      "บัตร Proximity",
      "บัตร Smart card",
      "ระบบไบโอเมตริกซ์",
      "Turnstiles"
    ],
    "explanation_th": "บัตร Proximity ใช้เทคโนโลยี RFID (การระบุตัวตนด้วยคลื่นความถี่วิทยุ) ทำให้สามารถอ่านบัตรได้ในระยะใกล้โดยไม่ต้องสัมผัสโดยตรง"
  },
  {
    "id": 40,
    "dom": 3,
    "question": "What is the purpose of using gates for physical protection?",
    "options": [
      "To visually identify authorized personnel",
      "To track where access cards are used",
      "To limit physical access to facilities",
      "To integrate with badging systems"
    ],
    "correct_idx": 2,
    "explanation": "Gates are physical barriers designed to limit and control who can physically enter a facility or area.",
    "short_explanation_en": "Gates are physical barriers designed to limit and control who can physically enter a facility or area.",
    "question_th": "วัตถุประสงค์ของการใช้ประตูรั้วเพื่อการป้องกันทางกายภาพคืออะไร?",
    "options_th": [
      "เพื่อระบุบุคลากรที่ได้รับอนุญาตด้วยสายตา",
      "เพื่อติดตามว่าบัตรผ่านถูกใช้ที่ใด",
      "เพื่อจำกัดการเข้าถึงทางกายภาพต่อสถานที่",
      "เพื่อผสานรวมกับระบบบัตรผ่าน"
    ],
    "explanation_th": "ประตูรั้วเป็นสิ่งกีดขวางทางกายภาพที่ออกแบบมาเพื่อจำกัดและควบคุมว่าใครสามารถเข้าถึงสถานที่หรือพื้นที่ทางกายภาพได้"
  },
  {
    "id": 41,
    "dom": 3,
    "question": "What is a drawback of using turnstiles for access control?",
    "options": [
      "They are easily customizable for different organizations.",
      "They can be integrated with badging systems.",
      "They can cause delays and bottlenecks in traffic.",
      "They provide the same level of security as solid gates."
    ],
    "correct_idx": 2,
    "explanation": "Turnstiles can create congestion and slow down the flow of people during high-traffic periods, which is a practical drawback despite their access-control benefit.",
    "short_explanation_en": "Turnstiles can create congestion and slow down the flow of people during high-traffic periods, which is a practical drawback despite their access-control benefit.",
    "question_th": "ข้อเสียของการใช้ turnstiles สำหรับการควบคุมการเข้าถึงคืออะไร?",
    "options_th": [
      "สามารถปรับแต่งได้ง่ายสำหรับองค์กรที่แตกต่างกัน",
      "สามารถผสานรวมกับระบบบัตรผ่านได้",
      "สามารถทำให้เกิดความล่าช้าและความคับคั่งของทราฟฟิก",
      "ให้ระดับความปลอดภัยเทียบเท่ากับประตูทึบ"
    ],
    "explanation_th": "Turnstiles สามารถก่อให้เกิดความแออัดและทำให้การไหลของผู้คนช้าลงในช่วงเวลาที่มีทราฟฟิกสูง ซึ่งเป็นข้อเสียในทางปฏิบัติแม้จะมีประโยชน์ด้านการควบคุมการเข้าถึง"
  },
  {
    "id": 42,
    "dom": 3,
    "question": "Which access control method is based on unique characteristics like fingerprints or facial recognition?",
    "options": [
      "Badging systems",
      "Access codes or PINs",
      "Biometric authentication",
      "Gate"
    ],
    "correct_idx": 2,
    "explanation": "Biometric authentication uses unique physical characteristics — like fingerprints or facial features — to verify identity.",
    "short_explanation_en": "Biometric authentication uses unique physical characteristics — like fingerprints or facial features — to verify identity.",
    "question_th": "วิธีการควบคุมการเข้าถึงใดที่อิงตามลักษณะเฉพาะตัว เช่น ลายนิ้วมือหรือการจดจำใบหน้า?",
    "options_th": [
      "ระบบบัตรผ่าน",
      "รหัสเข้าถึงหรือ PIN",
      "การยืนยันตัวตนด้วยไบโอเมตริกซ์",
      "ประตูรั้ว"
    ],
    "explanation_th": "การยืนยันตัวตนด้วยไบโอเมตริกซ์ใช้ลักษณะทางกายภาพเฉพาะตัว เช่น ลายนิ้วมือหรือคุณลักษณะใบหน้า เพื่อยืนยันตัวตน"
  },
  {
    "id": 43,
    "dom": 3,
    "question": "Which of the following is not a type of CCTV camera?",
    "options": [
      "Fixed cameras",
      "Dome cameras",
      "Pan-tilt-zoom (PTZ) cameras",
      "Mobile cameras"
    ],
    "correct_idx": 3,
    "explanation": "Fixed, dome, and PTZ (pan-tilt-zoom) are standard CCTV camera types; 'mobile cameras' isn't a recognized standard CCTV category.",
    "short_explanation_en": "Fixed, dome, and PTZ (pan-tilt-zoom) are standard CCTV camera types; 'mobile cameras' isn't a recognized standard CCTV category.",
    "question_th": "ข้อใดไม่ใช่ประเภทของกล้อง CCTV?",
    "options_th": [
      "กล้องแบบติดตั้งถาวร (Fixed cameras)",
      "กล้องแบบโดม (Dome cameras)",
      "กล้องแบบหมุนซูมได้ (PTZ)",
      "กล้องเคลื่อนที่ (Mobile cameras)"
    ],
    "explanation_th": "Fixed, dome และ PTZ (pan-tilt-zoom) เป็นประเภทกล้อง CCTV มาตรฐาน 'กล้องเคลื่อนที่' ไม่ใช่หมวดหมู่ CCTV มาตรฐานที่รู้จัก"
  },
  {
    "id": 44,
    "dom": 3,
    "question": "What is the role of security guards in physical security?",
    "options": [
      "They monitor CCTV systems.",
      "They set up access control systems.",
      "They patrol and monitor the premises.",
      "They manage logs and documentation."
    ],
    "correct_idx": 2,
    "explanation": "Security guards are primarily responsible for patrolling and physically monitoring premises to detect and respond to security issues in real time.",
    "short_explanation_en": "Security guards are primarily responsible for patrolling and physically monitoring premises to detect and respond to security issues in real time.",
    "question_th": "บทบาทของเจ้าหน้าที่รักษาความปลอดภัยในความปลอดภัยทางกายภาพคืออะไร?",
    "options_th": [
      "เฝ้าติดตามระบบ CCTV",
      "ตั้งค่าระบบควบคุมการเข้าถึง",
      "ลาดตระเวนและเฝ้าติดตามสถานที่",
      "จัดการ log และเอกสาร"
    ],
    "explanation_th": "เจ้าหน้าที่รักษาความปลอดภัยมีหน้าที่หลักในการลาดตระเวนและเฝ้าติดตามสถานที่ทางกายภาพเพื่อตรวจจับและตอบสนองต่อปัญหาความปลอดภัยแบบเรียลไทม์"
  },
  {
    "id": 45,
    "dom": 3,
    "question": "What can trigger alarm systems in physical security?",
    "options": [
      "Unauthorized access to areas",
      "Motion when no one should be present",
      "Lapses in CCTV coverage",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Alarm systems can be triggered by unauthorized access attempts, unexpected motion, or breaks in CCTV monitoring coverage — any of these anomalies.",
    "short_explanation_en": "Alarm systems can be triggered by unauthorized access attempts, unexpected motion, or breaks in CCTV monitoring coverage — any of these anomalies.",
    "question_th": "สิ่งใดสามารถกระตุ้นระบบสัญญาณเตือนภัยในความปลอดภัยทางกายภาพได้?",
    "options_th": [
      "การเข้าถึงพื้นที่โดยไม่ได้รับอนุญาต",
      "การเคลื่อนไหวในขณะที่ไม่ควรมีใครอยู่",
      "ช่องว่างในการครอบคลุมของ CCTV",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "ระบบสัญญาณเตือนภัยสามารถถูกกระตุ้นได้จากความพยายามเข้าถึงโดยไม่ได้รับอนุญาต การเคลื่อนไหวที่ไม่คาดคิด หรือช่องว่างในการเฝ้าติดตามด้วย CCTV — ความผิดปกติใดข้อหนึ่งก็เพียงพอ"
  },
  {
    "id": 46,
    "dom": 3,
    "question": "How is the retention of access logs and other documentation determined?",
    "options": [
      "By the organization’s data retention policy",
      "By the manager of the security team",
      "By stakeholder consensus",
      "By the discretion of individual employees"
    ],
    "correct_idx": 0,
    "explanation": "How long access logs and related records are kept is governed by the organization's formal data retention policy.",
    "short_explanation_en": "How long access logs and related records are kept is governed by the organization's formal data retention policy.",
    "question_th": "การเก็บรักษาบันทึกการเข้าถึงและเอกสารอื่น ๆ ถูกกำหนดโดยอะไร?",
    "options_th": [
      "นโยบายการเก็บรักษาข้อมูลขององค์กร",
      "ผู้จัดการทีมความปลอดภัย",
      "ฉันทามติของผู้มีส่วนได้ส่วนเสีย",
      "ดุลยพินิจของพนักงานแต่ละคน"
    ],
    "explanation_th": "ระยะเวลาการเก็บรักษาบันทึกการเข้าถึงและเอกสารที่เกี่ยวข้องถูกกำหนดโดยนโยบายการเก็บรักษาข้อมูลอย่างเป็นทางการขององค์กร"
  },
  {
    "id": 47,
    "dom": 3,
    "question": "How do security guards determine whether someone is authorized or unauthorized personnel?",
    "options": [
      "They check the person’s identification.",
      "They analyze the person’s body language.",
      "They rely on the person’s job title.",
      "They make a judgment based on the person’s appearance."
    ],
    "correct_idx": 0,
    "explanation": "Security guards verify identity primarily by checking a person's official identification/credentials rather than relying on appearance or job title claims.",
    "short_explanation_en": "Security guards verify identity primarily by checking a person's official identification/credentials rather than relying on appearance or job title claims.",
    "question_th": "เจ้าหน้าที่รักษาความปลอดภัยตรวจสอบว่าบุคคลใดได้รับอนุญาตหรือไม่ได้รับอนุญาตอย่างไร?",
    "options_th": [
      "ตรวจสอบบัตรประจำตัวของบุคคลนั้น",
      "วิเคราะห์ภาษากายของบุคคลนั้น",
      "อาศัยตำแหน่งงานของบุคคลนั้น",
      "ตัดสินตามลักษณะภายนอกของบุคคลนั้น"
    ],
    "explanation_th": "เจ้าหน้าที่รักษาความปลอดภัยยืนยันตัวตนเป็นหลักโดยการตรวจสอบบัตรประจำตัว/ข้อมูลรับรองอย่างเป็นทางการของบุคคล มากกว่าการอาศัยลักษณะภายนอกหรือการอ้างตำแหน่งงาน"
  },
  {
    "id": 48,
    "dom": 3,
    "question": "Which of the following best describes logical access controls?",
    "options": [
      "Access controls that regulate physical access to computer systems",
      "Access controls that restrict access to software, applications, and databases based on user privileges",
      "Access controls that separate critical tasks and responsibilities among multiple individuals",
      "Access controls that monitor and audit user access to information systems"
    ],
    "correct_idx": 1,
    "explanation": "Logical access controls restrict access to software, applications, and databases based on a user's assigned privileges, distinct from physical access controls.",
    "short_explanation_en": "Logical access controls restrict access to software, applications, and databases based on a user's assigned privileges, distinct from physical access controls.",
    "question_th": "ข้อใดอธิบาย logical access controls ได้ดีที่สุด?",
    "options_th": [
      "การควบคุมการเข้าถึงที่กำกับการเข้าถึงทางกายภาพต่อระบบคอมพิวเตอร์",
      "การควบคุมการเข้าถึงที่จำกัดการเข้าถึงซอฟต์แวร์ แอปพลิเคชัน และฐานข้อมูลตามสิทธิ์ของผู้ใช้",
      "การควบคุมการเข้าถึงที่แยกงานและความรับผิดชอบที่สำคัญระหว่างบุคคลหลายคน",
      "การควบคุมการเข้าถึงที่เฝ้าติดตามและตรวจสอบการเข้าถึงระบบสารสนเทศของผู้ใช้"
    ],
    "explanation_th": "Logical access controls จำกัดการเข้าถึงซอฟต์แวร์ แอปพลิเคชัน และฐานข้อมูลตามสิทธิ์ที่ผู้ใช้ได้รับมอบหมาย ซึ่งแตกต่างจากการควบคุมการเข้าถึงทางกายภาพ"
  },
  {
    "id": 49,
    "dom": 3,
    "question": "What is the principle of least privilege?",
    "options": [
      "Users are only provided with the information they need to complete their job.",
      "Users are granted the least amount of permission necessary to complete their job function.",
      "Users have access to all the privilege and control in the organization.",
      "Users have limited access to information or systems."
    ],
    "correct_idx": 1,
    "explanation": "Least privilege means giving users only the minimum permissions necessary to perform their specific job functions — nothing more.",
    "short_explanation_en": "Least privilege means giving users only the minimum permissions necessary to perform their specific job functions — nothing more.",
    "question_th": "หลักการ least privilege คืออะไร?",
    "options_th": [
      "ผู้ใช้ได้รับเพียงข้อมูลที่จำเป็นต่อการทำงานเท่านั้น",
      "ผู้ใช้ได้รับสิทธิ์น้อยที่สุดที่จำเป็นต่อการปฏิบัติหน้าที่งาน",
      "ผู้ใช้มีสิทธิ์และการควบคุมทั้งหมดในองค์กร",
      "ผู้ใช้มีการเข้าถึงข้อมูลหรือระบบที่จำกัด"
    ],
    "explanation_th": "Least privilege หมายถึงการให้ผู้ใช้ได้รับเพียงสิทธิ์ขั้นต่ำที่จำเป็นในการปฏิบัติหน้าที่งานเฉพาะของตน — ไม่มากไปกว่านั้น"
  },
  {
    "id": 50,
    "dom": 3,
    "question": "What is the purpose of segregation of duties?",
    "options": [
      "To ensure efficient completion of tasks",
      "To reduce the risk of unauthorized or fraudulent activities",
      "To grant complete control over a process to one person",
      "To increase efficiency in task completion"
    ],
    "correct_idx": 1,
    "explanation": "Segregation of duties splits critical tasks among multiple people so no single individual can complete a sensitive process alone, reducing fraud and error risk.",
    "short_explanation_en": "Segregation of duties splits critical tasks among multiple people so no single individual can complete a sensitive process alone, reducing fraud and error risk.",
    "question_th": "วัตถุประสงค์ของ segregation of duties คืออะไร?",
    "options_th": [
      "เพื่อรับประกันการทำงานให้เสร็จอย่างมีประสิทธิภาพ",
      "เพื่อลดความเสี่ยงของกิจกรรมที่ไม่ได้รับอนุญาตหรือการทุจริต",
      "เพื่อมอบการควบคุมกระบวนการทั้งหมดให้กับบุคคลเดียว",
      "เพื่อเพิ่มประสิทธิภาพในการทำงานให้เสร็จ"
    ],
    "explanation_th": "Segregation of duties แบ่งงานที่สำคัญออกเป็นหลายส่วนให้คนละคนรับผิดชอบ เพื่อไม่ให้บุคคลใดบุคคลหนึ่งสามารถดำเนินกระบวนการที่อ่อนไหวได้เพียงลำพัง ลดความเสี่ยงจากการทุจริตและข้อผิดพลาด"
  },
  {
    "id": 51,
    "dom": 3,
    "question": "What is the main difference between mandatory access control and discretionary access control?",
    "options": [
      "MAC allows subjects to override access control policies, while DAC does not.",
      "MAC is focused on data integrity, while DAC is focused on confidentiality.",
      "MAC implements zero trust in its control mechanism, while DAC separates subjects into trusted and untrusted groups.",
      "MAC is used in government agencies and defense organizations, while DAC is used in corporate environments."
    ],
    "correct_idx": 0,
    "explanation": "In Mandatory Access Control (MAC), access decisions are made centrally by policy and cannot be overridden by users, whereas Discretionary Access Control (DAC) lets resource owners set their own permissions.",
    "short_explanation_en": "In Mandatory Access Control (MAC), access decisions are made centrally by policy and cannot be overridden by users, whereas Discretionary Access Control (DAC) lets resource owners set their own permissions.",
    "question_th": "ความแตกต่างหลักระหว่าง mandatory access control และ discretionary access control คืออะไร?",
    "options_th": [
      "MAC อนุญาตให้ subject แทนที่นโยบายควบคุมการเข้าถึงได้ ในขณะที่ DAC ไม่อนุญาต",
      "MAC มุ่งเน้นที่ความถูกต้องครบถ้วนของข้อมูล ในขณะที่ DAC มุ่งเน้นที่ความลับ",
      "MAC ใช้ zero trust ในกลไกการควบคุม ในขณะที่ DAC แยก subject ออกเป็นกลุ่มที่เชื่อถือได้และไม่ได้",
      "MAC ใช้ในหน่วยงานราชการและองค์กรป้องกันประเทศ ในขณะที่ DAC ใช้ในสภาพแวดล้อมองค์กร"
    ],
    "explanation_th": "ใน Mandatory Access Control (MAC) การตัดสินใจการเข้าถึงถูกกำหนดโดยนโยบายส่วนกลางและไม่สามารถถูกแทนที่โดยผู้ใช้ได้ ในขณะที่ Discretionary Access Control (DAC) ให้เจ้าของทรัพยากรกำหนดสิทธิ์ของตนเอง"
  },
  {
    "id": 52,
    "dom": 3,
    "question": "Which access control model focuses on confidentiality by controlling access based on security levels and preventing information leakage?",
    "options": [
      "Role-based access control",
      "Mandatory access control",
      "Discretionary access control",
      "Biba Model"
    ],
    "correct_idx": 1,
    "explanation": "Mandatory Access Control assigns security labels/clearance levels to enforce confidentiality and prevent information from flowing to unauthorized levels.",
    "short_explanation_en": "Mandatory Access Control assigns security labels/clearance levels to enforce confidentiality and prevent information from flowing to unauthorized levels.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่มุ่งเน้นความลับโดยควบคุมการเข้าถึงตามระดับความปลอดภัยและป้องกันการรั่วไหลของข้อมูล?",
    "options_th": [
      "Role-based access control",
      "Mandatory access control",
      "Discretionary access control",
      "Biba Model"
    ],
    "explanation_th": "Mandatory Access Control กำหนดป้ายกำกับความปลอดภัย/ระดับชั้นความลับ เพื่อบังคับใช้ความลับและป้องกันไม่ให้ข้อมูลไหลไปยังระดับที่ไม่ได้รับอนุญาต"
  },
  {
    "id": 53,
    "dom": 3,
    "question": "Which security model focuses on controlling access based on the user’s assigned role?",
    "options": [
      "Mandatory access control",
      "Bell-LaPadula Model",
      "Clark-Wilson Model",
      "Role-based access control"
    ],
    "correct_idx": 3,
    "explanation": "Role-Based Access Control (RBAC) grants permissions based on the role a user is assigned within the organization.",
    "short_explanation_en": "Role-Based Access Control (RBAC) grants permissions based on the role a user is assigned within the organization.",
    "question_th": "โมเดลความปลอดภัยใดที่มุ่งเน้นการควบคุมการเข้าถึงตามบทบาทที่ผู้ใช้ได้รับมอบหมาย?",
    "options_th": [
      "Mandatory access control",
      "Bell-LaPadula Model",
      "Clark-Wilson Model",
      "Role-based access control"
    ],
    "explanation_th": "Role-Based Access Control (RBAC) ให้สิทธิ์ตามบทบาทที่ผู้ใช้ได้รับมอบหมายภายในองค์กร"
  },
  {
    "id": 54,
    "dom": 3,
    "question": "What is the purpose of an access matrix in access control?",
    "options": [
      "To map permissions to each user or role in the organization",
      "To enforce separation of duties in a constrained access control model",
      "To visualize the hierarchy of permissions in a hierarchical access control model",
      "To centralize user management and access control in an IAM system"
    ],
    "correct_idx": 0,
    "explanation": "An access matrix is a table mapping which permissions each user or role has to which resources, giving a clear overview of the access control scheme.",
    "short_explanation_en": "An access matrix is a table mapping which permissions each user or role has to which resources, giving a clear overview of the access control scheme.",
    "question_th": "วัตถุประสงค์ของ access matrix ในการควบคุมการเข้าถึงคืออะไร?",
    "options_th": [
      "เพื่อจับคู่สิทธิ์กับผู้ใช้หรือบทบาทแต่ละอย่างในองค์กร",
      "เพื่อบังคับใช้ separation of duties ในโมเดลควบคุมการเข้าถึงแบบจำกัด",
      "เพื่อแสดงลำดับชั้นของสิทธิ์ในโมเดลควบคุมการเข้าถึงแบบลำดับชั้น",
      "เพื่อรวมศูนย์การจัดการผู้ใช้และการควบคุมการเข้าถึงในระบบ IAM"
    ],
    "explanation_th": "Access matrix เป็นตารางที่จับคู่ว่าผู้ใช้หรือบทบาทแต่ละอย่างมีสิทธิ์ใดต่อทรัพยากรใด ให้ภาพรวมที่ชัดเจนของโครงร่างการควบคุมการเข้าถึง"
  },
  {
    "id": 55,
    "dom": 3,
    "question": "Which technology can IAM utilize to enhance security by requiring users to provide multiple forms of authentication when accessing objects?",
    "options": [
      "Single sign-on",
      "Automation scripts",
      "Security orchestration, automation, and remediation tools",
      "Multi-factor authentication"
    ],
    "correct_idx": 3,
    "explanation": "Multi-Factor Authentication (MFA) requires users to verify their identity using more than one independent factor, significantly strengthening access security.",
    "short_explanation_en": "Multi-Factor Authentication (MFA) requires users to verify their identity using more than one independent factor, significantly strengthening access security.",
    "question_th": "เทคโนโลยีใดที่ IAM สามารถใช้เพื่อเพิ่มความปลอดภัยโดยกำหนดให้ผู้ใช้ต้องยืนยันตัวตนหลายรูปแบบเมื่อเข้าถึงวัตถุ?",
    "options_th": [
      "Single sign-on",
      "สคริปต์อัตโนมัติ",
      "เครื่องมือ Security orchestration, automation, and remediation",
      "Multi-factor authentication"
    ],
    "explanation_th": "Multi-Factor Authentication (MFA) กำหนดให้ผู้ใช้ต้องยืนยันตัวตนโดยใช้ปัจจัยอิสระมากกว่าหนึ่งประเภท เสริมความปลอดภัยของการเข้าถึงอย่างมีนัยสำคัญ"
  },
  {
    "id": 133,
    "dom": 3,
    "question": "Jane is a security administrator setting up access for a new employee who works in the manufacturing department. Jane makes sure to enable the employee’s access for the manufacturing area but not for the parts storage area. What best describes the principle Jane is applying?",
    "options": [
      "Principle of authentication",
      "Two-person rule",
      "Need to know",
      "Least privilege"
    ],
    "correct_idx": 3,
    "explanation": "Least privilege is the most correct answer. By giving the employee access to the area the employee requires access to but no more, Jane is applying the principle of least privilege.",
    "short_explanation_en": "Least privilege is the most correct answer. By giving the employee access to the area the employee requires access to but no more, Jane is applying the principle of least privilege.",
    "question_th": "เจนเป็นผู้ดูแลระบบความปลอดภัยที่กำลังตั้งค่าการเข้าถึงให้กับพนักงานใหม่ที่ทำงานในฝ่ายผลิต เจนตรวจสอบให้แน่ใจว่าเปิดใช้งานการเข้าถึงพื้นที่ผลิตให้พนักงาน แต่ไม่เปิดให้เข้าถึงพื้นที่จัดเก็บชิ้นส่วน ข้อใดอธิบายหลักการที่เจนกำลังใช้ได้ดีที่สุด?",
    "options_th": [
      "หลักการ Authentication",
      "กฎ Two-person",
      "Need to know",
      "Least privilege"
    ],
    "explanation_th": "Least privilege เป็นคำตอบที่ถูกต้องที่สุด โดยให้พนักงานเข้าถึงเฉพาะพื้นที่ที่จำเป็นแต่ไม่มากไปกว่านั้น เจนกำลังใช้หลักการ least privilege"
  },
  {
    "id": 134,
    "dom": 3,
    "question": "Which statement best describes the relationship between subjects, objects, and rules?",
    "options": [
      "A subject grants access to an object based on rules.",
      "An object is granted access to a subject based on rules.",
      "A subject is granted access to an object based on rules.",
      "An object is granted access to a subject based on credentials."
    ],
    "correct_idx": 2,
    "explanation": "After first requesting access, a subject gets access to an object based on rules.",
    "short_explanation_en": "After first requesting access, a subject gets access to an object based on rules.",
    "question_th": "ข้อความใดอธิบายความสัมพันธ์ระหว่าง subjects, objects และ rules ได้ดีที่สุด?",
    "options_th": [
      "Subject ให้สิทธิ์การเข้าถึงแก่ object ตามกฎ",
      "Object ได้รับสิทธิ์การเข้าถึงจาก subject ตามกฎ",
      "Subject ได้รับสิทธิ์การเข้าถึง object ตามกฎ",
      "Object ได้รับสิทธิ์การเข้าถึงจาก subject ตามข้อมูลรับรอง"
    ],
    "explanation_th": "หลังจากร้องขอการเข้าถึงก่อน subject จะได้รับสิทธิ์เข้าถึง object ตามกฎ"
  },
  {
    "id": 135,
    "dom": 3,
    "question": "Joe has to log in to many systems on a daily basis and has too many passwords to remember. What is the best way for Joe to manage his passwords?",
    "options": [
      "Write the passwords down on a piece of paper.",
      "Store the passwords in a text file and store it in a safe place.",
      "Use the same password for every system so he only has to remember one password.",
      "Use a password manager or password vault software."
    ],
    "correct_idx": 3,
    "explanation": "The best answer is to use a password manager or password vault software to manage passwords. These products require credentials to log in and protect the passwords with encryption and good access control. None of the other answers provide a secure solution.",
    "short_explanation_en": "The best answer is to use a password manager or password vault software to manage passwords.",
    "question_th": "โจต้องล็อกอินเข้าระบบหลายระบบทุกวันและมีรหัสผ่านมากเกินไปที่จะจดจำ วิธีที่ดีที่สุดสำหรับโจในการจัดการรหัสผ่านคืออะไร?",
    "options_th": [
      "จดรหัสผ่านลงในกระดาษ",
      "จัดเก็บรหัสผ่านในไฟล์ข้อความและเก็บไว้ในที่ปลอดภัย",
      "ใช้รหัสผ่านเดียวกันสำหรับทุกระบบเพื่อให้ต้องจำเพียงรหัสเดียว",
      "ใช้ตัวจัดการรหัสผ่านหรือซอฟต์แวร์ password vault"
    ],
    "explanation_th": "คำตอบที่ดีที่สุดคือการใช้ตัวจัดการรหัสผ่านหรือซอฟต์แวร์ password vault ผลิตภัณฑ์เหล่านี้ต้องการข้อมูลรับรองในการล็อกอินและปกป้องรหัสผ่านด้วยการเข้ารหัสและการควบคุมการเข้าถึงที่ดี"
  },
  {
    "id": 136,
    "dom": 3,
    "question": "Debby has been an employee of Acme Corp. for over 20 years. During that time, she has been able to access more and more systems. Now she has access to systems she doesn’t even need access to in order to do her job. This is an example of what type of situation?",
    "options": [
      "Privilege modification",
      "Access management",
      "Privileged access management",
      "Privilege creep"
    ],
    "correct_idx": 3,
    "explanation": "The situation described is an example of privilege creep, where over time a person’s access increases beyond that which they require to do their job.",
    "short_explanation_en": "The situation described is an example of privilege creep, where over time a person’s access increases beyond that which they require to do their job.",
    "question_th": "เด็บบี้เป็นพนักงานของ Acme Corp. มากว่า 20 ปี ในช่วงเวลานั้น เธอสามารถเข้าถึงระบบได้มากขึ้นเรื่อย ๆ ตอนนี้เธอมีสิทธิ์เข้าถึงระบบที่เธอไม่จำเป็นต้องใช้เพื่อทำงานด้วยซ้ำ นี่เป็นตัวอย่างของสถานการณ์ประเภทใด?",
    "options_th": [
      "การปรับเปลี่ยนสิทธิ์",
      "การจัดการการเข้าถึง",
      "Privileged access management",
      "Privilege creep"
    ],
    "explanation_th": "สถานการณ์ที่อธิบายเป็นตัวอย่างของ privilege creep ซึ่งเมื่อเวลาผ่านไป การเข้าถึงของบุคคลเพิ่มขึ้นเกินกว่าที่จำเป็นต่อการทำงาน"
  },
  {
    "id": 137,
    "dom": 3,
    "question": "The identity and access management lifecycle consists of which steps?",
    "options": [
      "Provisioning, review, revocation",
      "Setup, review, auditing",
      "Creation, monitoring, termination",
      "Identification, authentication, authorization"
    ],
    "correct_idx": 0,
    "explanation": "The identity and access management lifecycle consists of provisioning, review, and revocation steps.",
    "short_explanation_en": "The identity and access management lifecycle consists of provisioning, review, and revocation steps.",
    "question_th": "วงจรชีวิตของการบริหารจัดการตัวตนและการเข้าถึง (Identity and access management lifecycle) ประกอบด้วยขั้นตอนใด?",
    "options_th": [
      "Provisioning, review, revocation",
      "Setup, review, auditing",
      "Creation, monitoring, termination",
      "Identification, authentication, authorization"
    ],
    "explanation_th": "วงจรชีวิตของการบริหารจัดการตัวตนและการเข้าถึงประกอบด้วยขั้นตอน provisioning, review และ revocation"
  },
  {
    "id": 138,
    "dom": 3,
    "question": "Which of the following access control models leverages roles to provision access, where users with similar access needs are assigned to the same role?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "None of the above"
    ],
    "correct_idx": 2,
    "explanation": "Role-based access control (RBAC) enforces access based on roles that define permissions and the level of access provided to any user assigned to that role. Roles are typically developed for similar users with the same access needs (e.g., HR, Sales, IT, Security).",
    "short_explanation_en": "Role-based access control (RBAC) enforces access based on roles that define permissions and the level of access provided to any user assigned to that role.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่ใช้บทบาทเพื่อจัดสรรการเข้าถึง โดยผู้ใช้ที่มีความต้องการการเข้าถึงคล้ายกันจะถูกกำหนดให้อยู่ในบทบาทเดียวกัน?",
    "options_th": [
      "DAC",
      "MAC",
      "RBAC",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Role-based access control (RBAC) บังคับใช้การเข้าถึงตามบทบาทที่กำหนดสิทธิ์และระดับการเข้าถึงให้กับผู้ใช้ที่ได้รับมอบหมายบทบาทนั้น บทบาทมักถูกพัฒนาขึ้นสำหรับผู้ใช้ที่คล้ายกันที่มีความต้องการการเข้าถึงเดียวกัน (เช่น HR, Sales, IT, Security)"
  },
  {
    "id": 139,
    "dom": 3,
    "question": "An organization is concerned about the risk of a car driving from the parking lot through the entrance of the building. Which of the following security measures would best help address this concern?",
    "options": [
      "Biometrics",
      "RBAC",
      "Badge system",
      "Bollards"
    ],
    "correct_idx": 3,
    "explanation": "Bollards are pillars or spheres made out of hard material used to prevent vehicles from driving through entrances. Biometrics and badge systems are measures to implement physical access control but would not prevent a car from driving through the entrance. RBAC is an access control model.",
    "short_explanation_en": "Bollards are pillars or spheres made out of hard material used to prevent vehicles from driving through entrances.",
    "question_th": "องค์กรกังวลเกี่ยวกับความเสี่ยงที่รถยนต์จะขับจากลานจอดรถผ่านทางเข้าอาคาร มาตรการความปลอดภัยใดต่อไปนี้จะช่วยแก้ไขข้อกังวลนี้ได้ดีที่สุด?",
    "options_th": [
      "ไบโอเมตริกซ์",
      "RBAC",
      "ระบบบัตรผ่าน",
      "Bollards"
    ],
    "explanation_th": "Bollards คือเสาหรือทรงกลมที่ทำจากวัสดุแข็งใช้เพื่อป้องกันไม่ให้ยานพาหนะขับผ่านทางเข้า ไบโอเมตริกซ์และระบบบัตรผ่านเป็นมาตรการควบคุมการเข้าถึงทางกายภาพแต่จะไม่ป้องกันรถยนต์ไม่ให้ขับผ่านทางเข้าได้ RBAC เป็นโมเดลควบคุมการเข้าถึง"
  },
  {
    "id": 140,
    "dom": 3,
    "question": "The security team is reviewing the configuration of the door that serves as the only entrance or exit to the datacenter. Organization personnel commonly access the datacenter to perform their work. In the event of a fire that impacts power to the door-locking mechanism, which of the following configurations is best?",
    "options": [
      "The door should always remain locked.",
      "The door should fail-secure.",
      "The door should fail-open.",
      "The door should automatically lock when there is no power."
    ],
    "correct_idx": 2,
    "explanation": "The door should fail-open (also known as fail-safe). While this is a less secure option, it ensures the preservation of human life, which is the number-one priority.",
    "short_explanation_en": "The door should fail-open (also known as fail-safe). While this is a less secure option, it ensures the preservation of human life, which is the number-one priority.",
    "question_th": "ทีมความปลอดภัยกำลังทบทวนการตั้งค่าของประตูที่เป็นทางเข้า-ออกเดียวของศูนย์ข้อมูล บุคลากรขององค์กรมักเข้าถึงศูนย์ข้อมูลเพื่อปฏิบัติงาน ในกรณีเกิดไฟไหม้ที่ส่งผลกระทบต่อไฟฟ้าของกลไกล็อกประตู การตั้งค่าใดต่อไปนี้ดีที่สุด?",
    "options_th": [
      "ประตูควรล็อกอยู่ตลอดเวลา",
      "ประตูควรเป็นแบบ fail-secure",
      "ประตูควรเป็นแบบ fail-open",
      "ประตูควรล็อกอัตโนมัติเมื่อไม่มีไฟฟ้า"
    ],
    "explanation_th": "ประตูควรเป็นแบบ fail-open (หรือเรียกว่า fail-safe) แม้ตัวเลือกนี้จะปลอดภัยน้อยกว่า แต่รับประกันการรักษาชีวิตมนุษย์ซึ่งเป็นสิ่งสำคัญอันดับหนึ่ง"
  },
  {
    "id": 141,
    "dom": 3,
    "question": "The security team of an organization is concerned about the physical security of datacenter access. They want the datacenter entrance built in such a way that there are two doors with locks and the first door must close before the next door can be unlocked. Which of the following is this an example of?",
    "options": [
      "Bollard",
      "Mantrap",
      "Fence",
      "Biometric lock"
    ],
    "correct_idx": 1,
    "explanation": "A mantrap is an area that has two doors built in such a way that the first door must be closed before the second door can be opened.",
    "short_explanation_en": "A mantrap is an area that has two doors built in such a way that the first door must be closed before the second door can be opened.",
    "question_th": "ทีมความปลอดภัยขององค์กรกังวลเกี่ยวกับความปลอดภัยทางกายภาพของการเข้าถึงศูนย์ข้อมูล พวกเขาต้องการให้ทางเข้าศูนย์ข้อมูลถูกสร้างในลักษณะที่มีประตูล็อกสองบาน โดยประตูแรกต้องปิดก่อนที่ประตูถัดไปจะสามารถปลดล็อกได้ ข้อใดเป็นตัวอย่างของสิ่งนี้?",
    "options_th": [
      "Bollard",
      "Mantrap",
      "Fence",
      "Biometric lock"
    ],
    "explanation_th": "Mantrap คือพื้นที่ที่มีประตูสองบานสร้างในลักษณะที่ประตูแรกต้องปิดก่อนที่ประตูที่สองจะสามารถเปิดได้"
  },
  {
    "id": 142,
    "dom": 3,
    "question": "Which of the following access control models allows the creator of a resource the ability to assign permissions to other users?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "None of the above"
    ],
    "correct_idx": 0,
    "explanation": "Discretionary access control (DAC) provides the owner of the resource, typically the creator, full control to configure which users can access the resource.",
    "short_explanation_en": "Discretionary access control (DAC) provides the owner of the resource, typically the creator, full control to configure which users can access the resource.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่ให้ผู้สร้างทรัพยากรมีความสามารถในการมอบสิทธิ์ให้ผู้ใช้อื่นได้?",
    "options_th": [
      "DAC",
      "MAC",
      "RBAC",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Discretionary access control (DAC) ให้เจ้าของทรัพยากร ซึ่งโดยปกติคือผู้สร้าง มีอำนาจควบคุมเต็มที่ในการกำหนดว่าผู้ใช้ใดสามารถเข้าถึงทรัพยากรได้บ้าง"
  },
  {
    "id": 143,
    "dom": 3,
    "question": "__________________ is a method of attack where a hacker enters SQL commands into fields on a vulnerable web page. The commands are executed without proper authorization.",
    "options": [
      "Buffer overflow",
      "SQL injection",
      "HTTP response splitting",
      "Backdoor"
    ],
    "correct_idx": 1,
    "explanation": "If a web server does not properly validate user input, an attacker can insert SQL commands into a field, which get executed by the database without proper authorization — this is called a SQL injection attack.",
    "short_explanation_en": "If a web server does not properly validate user input, an attacker can insert SQL commands into a field, which get executed by the database without proper authorization — this is called a SQL injection attack.",
    "question_th": "__________________ คือวิธีการโจมตีที่แฮกเกอร์ป้อนคำสั่ง SQL ลงในช่องข้อมูลบนหน้าเว็บที่มีช่องโหว่ คำสั่งเหล่านี้จะถูกดำเนินการโดยไม่มีการอนุญาตที่เหมาะสม",
    "options_th": [
      "Buffer overflow",
      "SQL injection",
      "HTTP response splitting",
      "Backdoor"
    ],
    "explanation_th": "หากเว็บเซิร์ฟเวอร์ไม่ตรวจสอบข้อมูลที่ผู้ใช้ป้อนอย่างเหมาะสม ผู้โจมตีสามารถแทรกคำสั่ง SQL ลงในช่องข้อมูล ซึ่งจะถูกดำเนินการโดยฐานข้อมูลโดยไม่มีการอนุญาตที่เหมาะสม เรียกว่าการโจมตีแบบ SQL injection"
  },
  {
    "id": 144,
    "dom": 3,
    "question": "Mary is a network engineer who wants to install a firewall in front of a database server to hide its IP address. What type of firewall should Mary choose?",
    "options": [
      "Proxy",
      "Packet filter",
      "Stateful/dynamic packet filter",
      "Database filter"
    ],
    "correct_idx": 0,
    "explanation": "A proxy firewall acts as an intermediary between clients and the database server, masking the server's real IP address from external requesters — unlike packet filtering firewalls, which simply inspect and forward traffic without hiding the origin.",
    "short_explanation_en": "A proxy firewall acts as an intermediary between clients and the database server, masking the server's real IP address from external requesters — unlike packet filtering firewalls, which simply inspect and forward traffic without hiding the origin.",
    "question_th": "แมรี่เป็นวิศวกรเครือข่ายที่ต้องการติดตั้งไฟร์วอลล์หน้าเซิร์ฟเวอร์ฐานข้อมูลเพื่อซ่อน IP address ของมัน แมรี่ควรเลือกไฟร์วอลล์ประเภทใด?",
    "options_th": [
      "Proxy",
      "Packet filter",
      "Stateful/dynamic packet filter",
      "Database filter"
    ],
    "explanation_th": "ไฟร์วอลล์แบบ proxy ทำหน้าที่เป็นตัวกลางระหว่างไคลเอนต์กับเซิร์ฟเวอร์ฐานข้อมูล ซ่อน IP address จริงของเซิร์ฟเวอร์จากผู้ร้องขอภายนอก ต่างจากไฟร์วอลล์แบบ packet filtering ซึ่งเพียงตรวจสอบและส่งต่อทราฟฟิกโดยไม่ซ่อนแหล่งที่มา"
  },
  {
    "id": 145,
    "dom": 3,
    "question": "An organization is using a cloud service provider to host their infrastructure. The cloud service provider manages the underlying infrastructure, and the organization manages the platforms and software (such as the OS, development tools, and applications). Which of the following cloud service models is being utilized?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-premises"
    ],
    "correct_idx": 0,
    "explanation": "In IaaS (Infrastructure as a Service), the cloud provider manages the underlying physical infrastructure, while the customer manages platforms and software such as the OS, development tools, and applications running on it.",
    "short_explanation_en": "In IaaS (Infrastructure as a Service), the cloud provider manages the underlying physical infrastructure, while the customer manages platforms and software such as the OS, development tools, and applications running on it.",
    "question_th": "องค์กรใช้ผู้ให้บริการคลาวด์เพื่อโฮสต์โครงสร้างพื้นฐานของตน ผู้ให้บริการคลาวด์จัดการโครงสร้างพื้นฐานพื้นฐาน ในขณะที่องค์กรจัดการแพลตฟอร์มและซอฟต์แวร์ (เช่น OS เครื่องมือพัฒนา และแอปพลิเคชัน) โมเดลบริการคลาวด์ใดที่กำลังถูกใช้งาน?",
    "options_th": [
      "IaaS",
      "PaaS",
      "SaaS",
      "On-premises"
    ],
    "explanation_th": "ใน IaaS (Infrastructure as a Service) ผู้ให้บริการคลาวด์จัดการโครงสร้างพื้นฐานทางกายภาพ ในขณะที่ลูกค้าจัดการแพลตฟอร์มและซอฟต์แวร์ เช่น OS เครื่องมือพัฒนา และแอปพลิเคชันที่รันอยู่บนนั้น"
  },
  {
    "id": 188,
    "dom": 3,
    "question": "Which access control is more effective at protecting a door against unauthorized access?",
    "options": [
      "Fences",
      "Turnstiles",
      "Barriers",
      "Locks"
    ],
    "correct_idx": 3,
    "explanation": "A lock is a device that prevents a physical structure (typically a door) from being opened, indicating that only the authorized person (i.e. the person with the key) can open it. A fence or a barrier will prevent ALL access. Turnstiles are physical barriers that can be easily overcome (after all, it is common knowledge that intruders can easily jump over a turnstile when no one is watching).",
    "short_explanation_en": "A lock is a device that prevents a physical structure (typically a door) from being opened, indicating that only the authorized person (i.e.",
    "question_th": "การควบคุมการเข้าถึงใดมีประสิทธิภาพมากกว่าในการป้องกันประตูจากการเข้าถึงโดยไม่ได้รับอนุญาต?",
    "options_th": [
      "รั้ว",
      "Turnstiles",
      "สิ่งกีดขวาง",
      "กุญแจล็อก"
    ],
    "explanation_th": "กุญแจล็อกเป็นอุปกรณ์ที่ป้องกันไม่ให้โครงสร้างทางกายภาพ (โดยทั่วไปคือประตู) ถูกเปิด บ่งชี้ว่ามีเพียงบุคคลที่ได้รับอนุญาต (ผู้ที่มีกุญแจ) เท่านั้นที่สามารถเปิดได้ รั้วหรือสิ่งกีดขวางจะป้องกันการเข้าถึงทั้งหมด Turnstiles เป็นสิ่งกีดขวางทางกายภาพที่สามารถเอาชนะได้ง่าย"
  },
  {
    "id": 195,
    "dom": 3,
    "question": "If an organization wants to protect itself against tailgating, which of the following types of access control would be most effective?",
    "options": [
      "Locks",
      "Fences",
      "Barriers",
      "Turnstiles"
    ],
    "correct_idx": 3,
    "explanation": "A lock is a device that prevents a physical structure (typically a door) from being opened, indicating that only the authorized person (i.e. the person with the key) can open it. A fence or a barrier will prevent ALL access. Turnstiles are physical barriers that can be easily overcome (after all, it is common knowledge that intruders can easily jump over a turnstile when no one is watching).",
    "short_explanation_en": "A lock is a device that prevents a physical structure (typically a door) from being opened, indicating that only the authorized person (i.e.",
    "question_th": "หากองค์กรต้องการป้องกันตนเองจาก tailgating การควบคุมการเข้าถึงประเภทใดต่อไปนี้จะมีประสิทธิภาพมากที่สุด?",
    "options_th": [
      "กุญแจล็อก",
      "รั้ว",
      "สิ่งกีดขวาง",
      "Turnstiles"
    ],
    "explanation_th": "กุญแจล็อกเป็นอุปกรณ์ที่ป้องกันไม่ให้โครงสร้างทางกายภาพถูกเปิด รั้วหรือสิ่งกีดขวางจะป้องกันการเข้าถึงทั้งหมด Turnstiles เป็นสิ่งกีดขวางทางกายภาพที่ควบคุมให้เข้าได้ทีละคน จึงมีประสิทธิภาพมากที่สุดในการป้องกัน tailgating"
  },
  {
    "id": 200,
    "dom": 3,
    "question": "Which access control model specifies access to an object based on the subject's role in the organization?",
    "options": [
      "RBAC",
      "MAC",
      "DAC",
      "ABAC"
    ],
    "correct_idx": 0,
    "explanation": "The role-based access control (RBAC) model is well known for governing access to objects based on the roles of individual users within the organization. Mandatory access control is based on security classifications. Attribute-based access control is based on complex attribute rules. In discretionary access control, subjects can grant privileges to other subjects and change some of the security attributes of the objects they have access to.",
    "short_explanation_en": "The role-based access control (RBAC) model is well known for governing access to objects based on the roles of individual users within the organization.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่ระบุการเข้าถึงวัตถุตามบทบาทของ subject ในองค์กร?",
    "options_th": [
      "RBAC",
      "MAC",
      "DAC",
      "ABAC"
    ],
    "explanation_th": "โมเดล role-based access control (RBAC) เป็นที่รู้จักดีในการกำกับดูแลการเข้าถึงวัตถุตามบทบาทของผู้ใช้แต่ละคนภายในองค์กร Mandatory access control อิงตามการจัดประเภทความปลอดภัย Attribute-based access control อิงตามกฎคุณลักษณะที่ซับซ้อน"
  },
  {
    "id": 215,
    "dom": 3,
    "question": "Which access control model can grant access to a given object based on complex rules?",
    "options": [
      "DAC",
      "ABAC",
      "RBAC",
      "MAC"
    ],
    "correct_idx": 1,
    "explanation": "ABAC is an access control model that controls access to objects using rules that are evaluated according to the attributes of the subject, relevant objects, and attributes of the environment and action. The RBAC and MAC models are based on more straightforward and relatively less flexible rule systems, which are evaluated according to subject roles and security classifications. The rules that can be specified in a DAC model are even simpler than those of the previous two models",
    "short_explanation_en": "ABAC is an access control model that controls access to objects using rules that are evaluated according to the attributes of the subject, relevant objects, and attributes of the environment and action.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่สามารถให้สิทธิ์การเข้าถึงวัตถุที่กำหนดตามกฎที่ซับซ้อน?",
    "options_th": [
      "DAC",
      "ABAC",
      "RBAC",
      "MAC"
    ],
    "explanation_th": "ABAC เป็นโมเดลควบคุมการเข้าถึงที่ควบคุมการเข้าถึงวัตถุโดยใช้กฎที่ประเมินตามคุณลักษณะของ subject วัตถุที่เกี่ยวข้อง และคุณลักษณะของสภาพแวดล้อมและการกระทำ โมเดล RBAC และ MAC อิงตามระบบกฎที่ตรงไปตรงมาและยืดหยุ่นน้อยกว่า"
  },
  {
    "id": 238,
    "dom": 3,
    "question": "Which of the following is an example of 2FA?",
    "options": [
      "Badges",
      "Passwords",
      "Keys",
      "One-Time passwords (OTA)"
    ],
    "correct_idx": 3,
    "explanation": "One-time passwords are typically generated by a device (i.e. \"something you have\") and are required in addition to the actual main password (i.e. \"something you know\"). Badges, keys and passwords with no other overlapping authentication controls are considered single-factor (and thus are not 2FA).",
    "short_explanation_en": "One-time passwords are typically generated by a device (i.e.",
    "question_th": "ข้อใดเป็นตัวอย่างของ 2FA?",
    "options_th": [
      "บัตรผ่าน",
      "รหัสผ่าน",
      "กุญแจ",
      "รหัสผ่านแบบใช้ครั้งเดียว (OTP)"
    ],
    "explanation_th": "รหัสผ่านแบบใช้ครั้งเดียวมักถูกสร้างโดยอุปกรณ์ (คือ 'สิ่งที่คุณมี') และจำเป็นต้องใช้ร่วมกับรหัสผ่านหลักจริง (คือ 'สิ่งที่คุณรู้') บัตรผ่าน กุญแจ และรหัสผ่านที่ไม่มีการควบคุมยืนยันตัวตนซ้อนทับกันอื่น ๆ ถือเป็นปัจจัยเดียว (จึงไม่ใช่ 2FA)"
  },
  {
    "id": 262,
    "dom": 3,
    "question": "The Bell and LaPadula access control model is a form of: (★)",
    "options": [
      "ABAC",
      "RBAC",
      "MAC",
      "DAC"
    ],
    "correct_idx": 2,
    "explanation": "The Bell and LaPadula access control model arranges subjects and objects into security levels and defines access specifications, whereby subjects can only access objects at certain levels based on their security level. Typical access specifications can be things like \"Unclassified personnel cannot read data at confidential levels\" or \"Top-Secret data cannot be written into the files at unclassified levels\". Since subjects cannot change access specifications, this model is a form of mandatory acc",
    "short_explanation_en": "The Bell and LaPadula access control model arranges subjects and objects into security levels and defines access specifications, whereby subjects can only access objects at certain levels based on their security level.",
    "question_th": "โมเดลควบคุมการเข้าถึง Bell and LaPadula เป็นรูปแบบหนึ่งของ:",
    "options_th": [
      "ABAC",
      "RBAC",
      "MAC",
      "DAC"
    ],
    "explanation_th": "โมเดล Bell and LaPadula จัดเรียง subjects และ objects เข้าสู่ระดับความปลอดภัยและกำหนดข้อกำหนดการเข้าถึง โดย subjects สามารถเข้าถึง objects ที่ระดับบางระดับตามระดับความปลอดภัยของตนเท่านั้น เนื่องจาก subjects ไม่สามารถเปลี่ยนข้อกำหนดการเข้าถึงได้ โมเดลนี้จึงเป็นรูปแบบหนึ่งของ mandatory access control"
  },
  {
    "id": 269,
    "dom": 3,
    "question": "In which of the following access control models can the creator of an object delegate permission?",
    "options": [
      "ABAC",
      "MAC",
      "RBAC",
      "DAC"
    ],
    "correct_idx": 3,
    "explanation": "In a Discretionary Access control model, the permissions associated with each object (file or data) are set by the owner of the object. In this model, the creator of an object implicitly becomes its owner, and therefore can decide who will have permission over the objects. In the remaining models, access specifications are centrally determined.",
    "short_explanation_en": "In a Discretionary Access control model, the permissions associated with each object (file or data) are set by the owner of the object.",
    "question_th": "ในโมเดลควบคุมการเข้าถึงใดที่ผู้สร้างวัตถุสามารถมอบสิทธิ์ให้ผู้อื่นได้?",
    "options_th": [
      "ABAC",
      "MAC",
      "RBAC",
      "DAC"
    ],
    "explanation_th": "ในโมเดล discretionary access control สิทธิ์ที่เกี่ยวข้องกับแต่ละวัตถุ (ไฟล์หรือข้อมูล) ถูกกำหนดโดยเจ้าของวัตถุ ในโมเดลนี้ ผู้สร้างวัตถุกลายเป็นเจ้าของโดยปริยาย จึงสามารถตัดสินใจว่าใครจะมีสิทธิ์เข้าถึงวัตถุนั้นได้ ในโมเดลที่เหลือ ข้อกำหนดการเข้าถึงถูกกำหนดจากส่วนกลาง"
  },
  {
    "id": 285,
    "dom": 3,
    "question": "Requiring a specific user role to access resources is an example of:",
    "options": [
      "MAC",
      "ABAC",
      "RBAC",
      "DAC"
    ],
    "correct_idx": 2,
    "explanation": "Role-Based Access Control (RBAC) restricts access to the resources of a computer or network, according to the roles of individual users within your organization. Attribute-Based Access Control (ABAC) is based on complex attribute rules. In Discretionary Access Control (DAC), users may grant privileges to other subjects, as well as change the security attributes of the objects they have access to.",
    "short_explanation_en": "Role-Based Access Control (RBAC) restricts access to the resources of a computer or network, according to the roles of individual users within your organization. Attribute-Based Access Control (ABAC) is based on complex attribute rules. In Discretionary Access Control (DAC), users may grant privileges to other subjects, as well as change the security attributes of the objects they have access to.",
    "question_th": "การกำหนดให้ต้องมีบทบาทผู้ใช้เฉพาะเพื่อเข้าถึงทรัพยากรเป็นตัวอย่างของ:",
    "options_th": [
      "MAC",
      "ABAC",
      "RBAC",
      "DAC"
    ],
    "explanation_th": "Role-Based Access Control (RBAC) จำกัดการเข้าถึงทรัพยากรของคอมพิวเตอร์หรือเครือข่ายตามบทบาทของผู้ใช้แต่ละคนภายในองค์กร Attribute-Based Access Control (ABAC) อิงตามกฎคุณลักษณะที่ซับซ้อน ใน Discretionary Access Control (DAC) ผู้ใช้สามารถให้สิทธิ์แก่ subject อื่นได้"
  },
  {
    "id": 296,
    "dom": 3,
    "question": "In an Access Control List (ACL), the element that determines which permissions you have is:",
    "options": [
      "The subject",
      "The object",
      "The firmware",
      "The rule"
    ],
    "correct_idx": 3,
    "explanation": "An Access Control List (ACL) is a list of rules that specifies which users or systems are granted or denied access (i.e., have permission to access) to a particular object or system resource (see ISC2 Study Guide, chapter 3, module 4). The subject is a user or a process run by a user, which inherits the user authorization. The object is the resource or data in the system (or the network) to be accessed. Firmware is a type of software embedded in a hardware system; therefore, the concept of an Ac",
    "short_explanation_en": "An Access Control List (ACL) is a list of rules that specifies which users or systems are granted or denied access (i.e., have permission to access) to a particular object or system resource (see ISC2 Study Guide, chapter 3, module 4).",
    "question_th": "ใน Access Control List (ACL) องค์ประกอบที่กำหนดว่าคุณมีสิทธิ์ใดคือ:",
    "options_th": [
      "Subject",
      "Object",
      "Firmware",
      "Rule"
    ],
    "explanation_th": "Access Control List (ACL) คือรายการกฎที่ระบุว่าผู้ใช้หรือระบบใดได้รับหรือถูกปฏิเสธการเข้าถึง (มีสิทธิ์เข้าถึง) วัตถุหรือทรัพยากรระบบเฉพาะ Subject คือผู้ใช้หรือกระบวนการที่รันโดยผู้ใช้ ซึ่งสืบทอดการอนุญาตของผู้ใช้ Object คือทรัพยากรหรือข้อมูลในระบบ (หรือเครือข่าย) ที่จะถูกเข้าถึง"
  },
  {
    "id": 303,
    "dom": 3,
    "question": "Which of these Access Control Systems is commonly used in the military?",
    "options": [
      "ABAC",
      "DAC",
      "RBAC",
      "MAC"
    ],
    "correct_idx": 3,
    "explanation": "Mandatory Access Control (MAC) is a model of access control that is commonly used in the military, because it enables the centralized management of access rights, as well as the enforcement of strict security policies (see ISC2 Study Guide, chapter 3, module 3). In MAC, access to resources is based on the classification level of a given resource, as well as on the clearance level of the user. The use of classification and clearance levels allows for a hierarchical approach to security, whereby a",
    "short_explanation_en": "Mandatory Access Control (MAC) is a model of access control that is commonly used in the military, because it enables the centralized management of access rights, as well as the enforcement of strict security policies (see ISC2 Study...",
    "question_th": "ระบบควบคุมการเข้าถึงใดต่อไปนี้ที่นิยมใช้ในกองทัพ?",
    "options_th": [
      "ABAC",
      "DAC",
      "RBAC",
      "MAC"
    ],
    "explanation_th": "Mandatory Access Control (MAC) เป็นโมเดลการควบคุมการเข้าถึงที่นิยมใช้ในกองทัพ เนื่องจากช่วยให้สามารถจัดการสิทธิ์การเข้าถึงแบบรวมศูนย์ได้ รวมถึงการบังคับใช้นโยบายความปลอดภัยที่เข้มงวด ใน MAC การเข้าถึงทรัพยากรอิงตามระดับการจัดประเภทของทรัพยากรที่กำหนด และระดับการอนุญาตของผู้ใช้"
  },
  {
    "id": 332,
    "dom": 3,
    "question": "In a DAC policy scenario, which of these tasks can only be performed by a subject granted access to information?",
    "options": [
      "Changing security attributes",
      "Reading the information",
      "Executing the information",
      "Modifying the information"
    ],
    "correct_idx": 0,
    "explanation": "As a principle, users can perform Read, Write and Execute actions with every Access Control policy. However, in discretionary access control policies, the permissions associated with each object (files or system resources) are set by the object's owner. In this model, the creator of an object implicitly becomes its owner, and therefore can decide who will have permission to the objects (see ISC2 Study Guide, chapter 3, module 3). A major weakness of DAC is that it gives users complete control to",
    "short_explanation_en": "As a principle, users can perform Read, Write and Execute actions with every Access Control policy.",
    "question_th": "ในสถานการณ์นโยบาย DAC งานใดต่อไปนี้ทำได้เฉพาะโดย subject ที่ได้รับสิทธิ์เข้าถึงข้อมูลเท่านั้น?",
    "options_th": [
      "การเปลี่ยนคุณลักษณะความปลอดภัย",
      "การอ่านข้อมูล",
      "การรันข้อมูล",
      "การแก้ไขข้อมูล"
    ],
    "explanation_th": "โดยหลักการ ผู้ใช้สามารถดำเนินการ Read, Write และ Execute ได้กับทุกนโยบายควบคุมการเข้าถึง อย่างไรก็ตาม ในนโยบาย discretionary access control สิทธิ์ที่เกี่ยวข้องกับแต่ละวัตถุ (ไฟล์หรือทรัพยากรระบบ) ถูกกำหนดโดยเจ้าของวัตถุ ในโมเดลนี้ ผู้สร้างวัตถุกลายเป็นเจ้าของโดยปริยาย จึงสามารถตัดสินใจว่าใครจะมีสิทธิ์เข้าถึงวัตถุนั้น รวมถึงการเปลี่ยนคุณลักษณะความปลอดภัย"
  },
  {
    "id": 342,
    "dom": 3,
    "question": "The name, age, location and job title of a person are all examples of:",
    "options": [
      "Biometric factors",
      "Attributes",
      "Account permissions",
      "Identity factors"
    ],
    "correct_idx": 1,
    "explanation": "Attributes such as a person's name, age, location, job title, and even characteristics such as height or hair color, may all be associated with their identity. None of these describe biometric factors used for authentication. Identity factors are something you know, are or have. Account permissions determine what an authenticated person (a user) can do, and not attributes related to the user's identity.",
    "short_explanation_en": "Attributes such as a person's name, age, location, job title, and even characteristics such as height or hair color, may all be associated with their identity. None of these describe biometric factors used for authentication. Identity factors are something you know, are or have. Account permissions determine what an authenticated person (a user) can do, and not attributes related to the user's identity.",
    "question_th": "ชื่อ อายุ สถานที่ และตำแหน่งงานของบุคคล ล้วนเป็นตัวอย่างของ:",
    "options_th": [
      "ปัจจัยชีวมิติ (Biometric factors)",
      "คุณลักษณะ (Attributes)",
      "สิทธิ์บัญชี (Account permissions)",
      "ปัจจัยตัวตน (Identity factors)"
    ],
    "explanation_th": "คุณลักษณะ เช่น ชื่อ อายุ สถานที่ ตำแหน่งงานของบุคคล และแม้กระทั่งลักษณะอื่น ๆ เช่น ส่วนสูงหรือสีผม ล้วนสามารถเชื่อมโยงกับตัวตนของพวกเขาได้ ไม่มีข้อใดอธิบายปัจจัยชีวมิติที่ใช้ในการยืนยันตัวตน ปัจจัยตัวตนคือสิ่งที่คุณรู้ เป็น หรือมี"
  },
  {
    "id": 347,
    "dom": 3,
    "question": "Which of these pairs does NOT constitute Multi-Factor Authentication (MFA)?",
    "options": [
      "Fingerprint and password.",
      "Username and retina scan.",
      "Password and username.",
      "PIN and credit card."
    ],
    "correct_idx": 2,
    "explanation": "Multi-Factor Authentication uses authentication from more than one factor. Passwords and usernames are not multifactor, since they are both 'something you know' (see ISC2 Study Guide, chapter 3, module 1).",
    "short_explanation_en": "Multi-Factor Authentication uses authentication from more than one factor.",
    "question_th": "คู่ใดต่อไปนี้ไม่ถือเป็น Multi-Factor Authentication (MFA)?",
    "options_th": [
      "ลายนิ้วมือและรหัสผ่าน",
      "ชื่อผู้ใช้และการสแกนม่านตา",
      "รหัสผ่านและชื่อผู้ใช้",
      "PIN และบัตรเครดิต"
    ],
    "explanation_th": "Multi-Factor Authentication ใช้การยืนยันตัวตนจากมากกว่าหนึ่งปัจจัย รหัสผ่านและชื่อผู้ใช้ไม่ใช่ multi-factor เนื่องจากทั้งสองเป็น 'สิ่งที่คุณรู้'"
  },
  {
    "id": 357,
    "dom": 3,
    "question": "Which of these types of credentials is NOT used in multi-factor authentication?",
    "options": [
      "Something you have",
      "Something you know",
      "Something you are",
      "Something you trust"
    ],
    "correct_idx": 3,
    "explanation": "Authentication generally requires that users provide identity factors (that others can't not easily provide). Because no single factor is ever foolproof, multi-factor authentication typically uses one or several of the following (see ISC2 Study Guide, chapter 3, module 1): 'Something you know', such as a password or personal identification number (PIN); 'Something you have', such as a smart card or certificate; 'Something you are', which would be based on your physical characteristics, in which",
    "short_explanation_en": "Authentication generally requires that users provide identity factors (that others can't not easily provide).",
    "question_th": "ข้อมูลรับรองประเภทใดต่อไปนี้ที่ไม่ได้ใช้ใน multi-factor authentication?",
    "options_th": [
      "สิ่งที่คุณมี",
      "สิ่งที่คุณรู้",
      "สิ่งที่คุณเป็น",
      "สิ่งที่คุณเชื่อถือ"
    ],
    "explanation_th": "การยืนยันตัวตนโดยทั่วไปกำหนดให้ผู้ใช้ต้องให้ปัจจัยตัวตน (ที่ผู้อื่นไม่สามารถให้ได้ง่าย) เนื่องจากไม่มีปัจจัยเดียวที่สมบูรณ์แบบ multi-factor authentication มักใช้หนึ่งหรือหลายอย่างต่อไปนี้: 'สิ่งที่คุณรู้' เช่น รหัสผ่านหรือ PIN; 'สิ่งที่คุณมี' เช่น สมาร์ทการ์ดหรือใบรับรอง; 'สิ่งที่คุณเป็น' ซึ่งอิงตามลักษณะทางกายภาพของคุณ"
  },
  {
    "id": 360,
    "dom": 3,
    "question": "Which of these CANNOT be a corrective security control?",
    "options": [
      "Disaster Recovery Plan",
      "Backups",
      "Patches",
      "Bollards"
    ],
    "correct_idx": 3,
    "explanation": "Corrective security controls are measures used to address security vulnerabilities or weaknesses already identified. Backups, patches, and Disaster Recovery Plans are all corrective security controls (see ISC2 Study Guide, chapter 3, module 2). Backups can help ensure that important information is not lost in the event of an incident. Patches can help fix vulnerabilities and improve security. Disaster Recovery Plans are administrative security controls that establish the corrective measures to b",
    "short_explanation_en": "Corrective security controls are measures used to address security vulnerabilities or weaknesses already identified.",
    "question_th": "ข้อใดต่อไปนี้ไม่สามารถเป็น corrective security control ได้?",
    "options_th": [
      "Disaster Recovery Plan",
      "Backups",
      "Patches",
      "Bollards"
    ],
    "explanation_th": "การควบคุมความปลอดภัยเชิงแก้ไข (Corrective) คือมาตรการที่ใช้จัดการช่องโหว่หรือจุดอ่อนความปลอดภัยที่ระบุไว้แล้ว Backups, patches และ Disaster Recovery Plans ล้วนเป็นการควบคุมความปลอดภัยเชิงแก้ไข Backups ช่วยรับประกันว่าข้อมูลสำคัญจะไม่สูญหายในกรณีเกิดเหตุการณ์ Patches ช่วยแก้ไขช่องโหว่และปรับปรุงความปลอดภัย"
  },
  {
    "id": 366,
    "dom": 3,
    "question": "Which type of security control does NOT include CCTV cameras?",
    "options": [
      "Corrective",
      "Deterrent",
      "Preventive",
      "Detective"
    ],
    "correct_idx": 0,
    "explanation": "CCTV cameras are considered a deterrent to criminal activity. In addition, combined with other sensors, they can detect movement, and thus are considered a detective control. Image recordings provide evidence after the fact. According to the NIST, preventive controls are measures to detect, deter and/or reduce an impact of a system. CCTV cameras are not corrective controls, as they are not deployed to repair detected errors or irregularities (see ISC2 Study Guide, chapter 3, module 2).",
    "short_explanation_en": "CCTV cameras are considered a deterrent to criminal activity.",
    "question_th": "การควบคุมความปลอดภัยประเภทใดที่ไม่รวมกล้อง CCTV?",
    "options_th": [
      "Corrective",
      "Deterrent",
      "Preventive",
      "Detective"
    ],
    "explanation_th": "กล้อง CCTV ถือเป็นการยับยั้งกิจกรรมทางอาญา นอกจากนี้ เมื่อรวมกับเซนเซอร์อื่น ๆ กล้องสามารถตรวจจับการเคลื่อนไหวได้ จึงถือเป็นการควบคุมแบบตรวจจับ การบันทึกภาพเป็นหลักฐานหลังเกิดเหตุ กล้อง CCTV ไม่ใช่การควบคุมเชิงแก้ไข เนื่องจากไม่ได้ถูกนำไปใช้เพื่อซ่อมแซมข้อผิดพลาดหรือความผิดปกติที่ตรวจพบ"
  },
  {
    "id": 371,
    "dom": 3,
    "question": "Which of these technologies is the LEAST effective means of preventing shared accounts?",
    "options": [
      "Requiring a one-time password via an application",
      "Requiring one-time passwords via a token",
      "Password complexity requirements",
      "Requiring biometric authentication"
    ],
    "correct_idx": 2,
    "explanation": "Password complexity requirements do not prevent the sharing of complex passwords, making it the least effective option from the above list. One-time passwords are hard to share, making it far less convenient to share accounts. Biometric authentication requires the registered user to actually be present when signing in. However, in some cases, such as fingerprint systems, multiple users could each register a valid fingerprint for a single account (see ISC2 Study Guide, chapter 3, module 1).",
    "short_explanation_en": "Password complexity requirements do not prevent the sharing of complex passwords, making it the least effective option from the above list.",
    "question_th": "เทคโนโลยีใดต่อไปนี้มีประสิทธิภาพน้อยที่สุดในการป้องกันการใช้บัญชีร่วมกัน?",
    "options_th": [
      "กำหนดให้ใช้รหัสผ่านแบบใช้ครั้งเดียวผ่านแอปพลิเคชัน",
      "กำหนดให้ใช้รหัสผ่านแบบใช้ครั้งเดียวผ่านโทเค็น",
      "ข้อกำหนดความซับซ้อนของรหัสผ่าน",
      "กำหนดให้ใช้การยืนยันตัวตนด้วยไบโอเมตริกซ์"
    ],
    "explanation_th": "ข้อกำหนดความซับซ้อนของรหัสผ่านไม่ได้ป้องกันการแชร์รหัสผ่านที่ซับซ้อน ทำให้เป็นตัวเลือกที่มีประสิทธิภาพน้อยที่สุดในรายการข้างต้น รหัสผ่านแบบใช้ครั้งเดียวแชร์กันได้ยาก ทำให้การแชร์บัญชีสะดวกน้อยลงมาก การยืนยันตัวตนด้วยไบโอเมตริกซ์กำหนดให้ผู้ใช้ที่ลงทะเบียนต้องอยู่จริงขณะลงชื่อเข้าใช้"
  },
  {
    "id": 382,
    "dom": 3,
    "question": "Which kind of physical access control is LESS effective at preventing unauthorized individual access to a data center?",
    "options": [
      "Turnstiles",
      "Barriers",
      "Fences",
      "Bollards"
    ],
    "correct_idx": 3,
    "explanation": "Bollards are short, vertical posts that block vehicles from accessing a data center. They are, however, ineffective at preventing access to individuals. Fences can be placed around the perimeter of the data center, so as to block unauthorized access and deter potential intruders. Barriers such as gates, walls or barricades can be used to block access to the data center. Finally, turnstiles can be used to control access to a data center, namely by allowing entry only to authorized individuals.",
    "short_explanation_en": "Bollards are short, vertical posts that block vehicles from accessing a data center.",
    "question_th": "การควบคุมการเข้าถึงทางกายภาพประเภทใดมีประสิทธิภาพน้อยกว่าในการป้องกันการเข้าถึงศูนย์ข้อมูลของบุคคลที่ไม่ได้รับอนุญาต?",
    "options_th": [
      "Turnstiles",
      "สิ่งกีดขวาง",
      "รั้ว",
      "Bollards"
    ],
    "explanation_th": "Bollards คือเสาแนวตั้งขนาดสั้นที่ปิดกั้นไม่ให้ยานพาหนะเข้าถึงศูนย์ข้อมูล อย่างไรก็ตาม ไม่มีประสิทธิภาพในการป้องกันการเข้าถึงของบุคคล รั้วสามารถวางไว้รอบขอบเขตของศูนย์ข้อมูลเพื่อปิดกั้นการเข้าถึงโดยไม่ได้รับอนุญาตและยับยั้งผู้บุกรุกที่อาจเกิดขึ้น"
  },
  {
    "id": 420,
    "dom": 3,
    "question": "Which of the following is an example of the 'Something you know' authentication factor?",
    "options": [
      "Fingerprint",
      "Password",
      "Employee ID card",
      "Geographic location"
    ],
    "correct_idx": 1,
    "explanation": "'Something you know' is a knowledge factor, such as a password, PIN, or security question, distinct from 'Something you have' (card, token) and 'Something you are' (biometrics).",
    "short_explanation_en": "'Something you know' is a knowledge factor, such as a password, PIN, or security question, distinct from 'Something you have' (card, token) and 'Something you are' (biometrics).",
    "question_th": "ปัจจัยการยืนยันตัวตน (Authentication Factor) แบบ 'สิ่งที่คุณรู้' (Something you know) คือตัวอย่างใด?",
    "options_th": [
      "ลายนิ้วมือ",
      "รหัสผ่าน (Password)",
      "บัตรประจำตัวพนักงาน",
      "ตำแหน่งที่ตั้งทางภูมิศาสตร์"
    ],
    "explanation_th": "'Something you know' คือปัจจัยความรู้ เช่น รหัสผ่าน PIN หรือคำถามเพื่อความปลอดภัย ต่างจาก 'Something you have' (บัตร โทเค็น) และ 'Something you are' (ไบโอเมตริกซ์)"
  },
  {
    "id": 421,
    "dom": 3,
    "question": "Using a password together with an OTP sent to a mobile phone is an example of which concept?",
    "options": [
      "Single Factor Authentication",
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Role-Based Access Control"
    ],
    "correct_idx": 1,
    "explanation": "MFA is authentication using more than one factor type together — in this case 'something you know' (password) and 'something you have' (phone receiving the OTP).",
    "short_explanation_en": "MFA is authentication using more than one factor type together — in this case 'something you know' (password) and 'something you have' (phone receiving the OTP).",
    "question_th": "การใช้รหัสผ่านร่วมกับรหัส OTP ที่ส่งไปยังโทรศัพท์มือถือ เป็นตัวอย่างของแนวคิดใด?",
    "options_th": [
      "Single Factor Authentication",
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Role-Based Access Control"
    ],
    "explanation_th": "MFA คือการยืนยันตัวตนโดยใช้ปัจจัยมากกว่าหนึ่งประเภทร่วมกัน ในกรณีนี้คือ 'สิ่งที่คุณรู้' (รหัสผ่าน) และ 'สิ่งที่คุณมี' (โทรศัพท์ที่รับ OTP)"
  },
  {
    "id": 422,
    "dom": 3,
    "question": "What characterizes the Mandatory Access Control (MAC) model?",
    "options": [
      "The resource owner sets their own access permissions",
      "Access is determined centrally based on classification/clearance levels and cannot be changed by regular users",
      "Access is determined by the user's job role",
      "Access is determined by multiple dynamic attributes"
    ],
    "correct_idx": 1,
    "explanation": "MAC is a model where access is controlled by a central policy (e.g., government classification levels). Users cannot change permissions themselves — commonly used in high-security agencies like the military.",
    "short_explanation_en": "MAC is a model where access is controlled by a central policy (e.g., government classification levels). Users cannot change permissions themselves — commonly used in high-security agencies like the military.",
    "question_th": "โมเดลควบคุมการเข้าถึงแบบ Mandatory Access Control (MAC) มีลักษณะอย่างไร?",
    "options_th": [
      "เจ้าของทรัพยากรเป็นผู้กำหนดสิทธิ์การเข้าถึงเอง",
      "การเข้าถึงถูกกำหนดโดยระบบส่วนกลางตามระดับชั้นความลับ (Classification/Clearance) ไม่สามารถเปลี่ยนแปลงได้โดยผู้ใช้ทั่วไป",
      "การเข้าถึงถูกกำหนดตามบทบาทหน้าที่ของผู้ใช้",
      "การเข้าถึงถูกกำหนดตามคุณลักษณะหลายอย่างแบบไดนามิก"
    ],
    "explanation_th": "MAC เป็นโมเดลที่การเข้าถึงถูกควบคุมโดยนโยบายส่วนกลาง (เช่น ระดับชั้นความลับของรัฐบาล) ผู้ใช้ไม่สามารถเปลี่ยนแปลงสิทธิ์ได้เอง มักใช้ในหน่วยงานที่ต้องการความปลอดภัยสูง เช่น หน่วยงานทหาร"
  },
  {
    "id": 423,
    "dom": 3,
    "question": "What is the defining feature of the Discretionary Access Control (DAC) model?",
    "options": [
      "A central administrator sets all permissions",
      "The data owner can define and grant access to others at their own discretion",
      "Permissions are set only by job role",
      "Confidentiality labels are used to control access"
    ],
    "correct_idx": 1,
    "explanation": "DAC gives resource owners the authority to decide who can access their resources — for example, sharing files in a typical operating system.",
    "short_explanation_en": "DAC gives resource owners the authority to decide who can access their resources — for example, sharing files in a typical operating system.",
    "question_th": "โมเดล Discretionary Access Control (DAC) มีลักษณะเด่นอย่างไร?",
    "options_th": [
      "ผู้ดูแลระบบกลางเป็นผู้กำหนดสิทธิ์ทั้งหมด",
      "เจ้าของข้อมูล (Data Owner) สามารถกำหนดและมอบสิทธิ์การเข้าถึงให้ผู้อื่นได้ตามดุลยพินิจของตนเอง",
      "สิทธิ์ถูกกำหนดตามบทบาทงานเท่านั้น",
      "ใช้ Label ความลับเพื่อควบคุมการเข้าถึง"
    ],
    "explanation_th": "DAC ให้อำนาจเจ้าของทรัพยากรในการตัดสินใจว่าใครสามารถเข้าถึงทรัพยากรของตนได้บ้าง เช่น การแชร์ไฟล์ในระบบปฏิบัติการทั่วไป"
  },
  {
    "id": 424,
    "dom": 3,
    "question": "What does the Role-Based Access Control (RBAC) model primarily base access permissions on?",
    "options": [
      "User attributes such as department, position, time",
      "The user's role (Role) within the organization",
      "The data owner's discretion",
      "Government classification levels"
    ],
    "correct_idx": 1,
    "explanation": "RBAC assigns access based on the role a user is given — for example, an 'HR Manager' role has different system access than a 'Finance Officer' role, making it easier to manage permissions in large organizations.",
    "short_explanation_en": "RBAC assigns access based on the role a user is given — for example, an 'HR Manager' role has different system access than a 'Finance Officer' role, making it easier to manage permissions in large organizations.",
    "question_th": "โมเดล Role-Based Access Control (RBAC) กำหนดสิทธิ์การเข้าถึงตามอะไรเป็นหลัก?",
    "options_th": [
      "คุณลักษณะของผู้ใช้ เช่น แผนก ตำแหน่ง เวลา",
      "บทบาทหน้าที่ (Role) ของผู้ใช้ในองค์กร",
      "ดุลยพินิจของเจ้าของข้อมูล",
      "ระดับชั้นความลับของรัฐบาล"
    ],
    "explanation_th": "RBAC กำหนดสิทธิ์การเข้าถึงตามบทบาทที่ผู้ใช้ได้รับมอบหมาย เช่น บทบาท 'HR Manager' จะมีสิทธิ์เข้าถึงระบบที่แตกต่างจากบทบาท 'Finance Officer' ช่วยให้บริหารจัดการสิทธิ์ได้ง่ายในองค์กรขนาดใหญ่"
  },
  {
    "id": 425,
    "dom": 3,
    "question": "Why does the Attribute-Based Access Control (ABAC) model offer high flexibility?",
    "options": [
      "It uses only passwords for decisions",
      "It dynamically considers multiple combined attributes such as user, device, time, location, and context",
      "It gives everyone equal access always",
      "It uses only classification levels"
    ],
    "correct_idx": 1,
    "explanation": "ABAC makes access decisions by dynamically evaluating multiple attribute dimensions together — such as user role, device type, time, and location — making it more flexible and granular than other models.",
    "short_explanation_en": "ABAC makes access decisions by dynamically evaluating multiple attribute dimensions together — such as user role, device type, time, and location — making it more flexible and granular than other models.",
    "question_th": "โมเดล Attribute-Based Access Control (ABAC) มีความยืดหยุ่นสูงเพราะเหตุใด?",
    "options_th": [
      "ใช้เฉพาะรหัสผ่านในการตัดสินใจ",
      "พิจารณาจากคุณลักษณะหลายด้านร่วมกัน เช่น ผู้ใช้ อุปกรณ์ เวลา สถานที่ และบริบทแบบไดนามิก",
      "ให้สิทธิ์ทุกคนเท่ากันเสมอ",
      "ใช้เฉพาะระดับชั้นความลับเท่านั้น"
    ],
    "explanation_th": "ABAC ตัดสินใจให้สิทธิ์การเข้าถึงโดยประเมินจากคุณลักษณะ (Attributes) หลายมิติร่วมกันแบบไดนามิก เช่น บทบาทผู้ใช้ ประเภทอุปกรณ์ เวลา และตำแหน่งที่ตั้ง ทำให้มีความยืดหยุ่นและละเอียดกว่าโมเดลอื่น"
  },
  {
    "id": 426,
    "dom": 3,
    "question": "What is the primary benefit that Single Sign-On (SSO) provides to users?",
    "options": [
      "Requiring separate logins on every system for maximum security",
      "Logging in once to access multiple linked systems or applications without re-logging in",
      "Encrypting all data in the system",
      "Only preventing brute force attacks"
    ],
    "correct_idx": 1,
    "explanation": "SSO lets users authenticate once and immediately access other linked systems or applications, improving convenience and reducing the number of passwords they need to remember.",
    "short_explanation_en": "SSO lets users authenticate once and immediately access other linked systems or applications, improving convenience and reducing the number of passwords they need to remember.",
    "question_th": "'Single Sign-On (SSO)' ให้ประโยชน์อะไรแก่ผู้ใช้เป็นหลัก?",
    "options_th": [
      "ต้องล็อกอินแยกกันในทุกระบบเพื่อความปลอดภัยสูงสุด",
      "ล็อกอินเพียงครั้งเดียวแล้วสามารถเข้าถึงหลายระบบหรือแอปพลิเคชันที่เชื่อมโยงกันได้โดยไม่ต้องล็อกอินซ้ำ",
      "เข้ารหัสข้อมูลทั้งหมดในระบบ",
      "ป้องกันการโจมตีแบบ Brute Force เท่านั้น"
    ],
    "explanation_th": "SSO ช่วยให้ผู้ใช้ยืนยันตัวตนเพียงครั้งเดียวแล้วสามารถเข้าถึงระบบหรือแอปพลิเคชันอื่นๆ ที่เชื่อมโยงกันได้ทันที ช่วยเพิ่มความสะดวกและลดจำนวนรหัสผ่านที่ต้องจำ"
  },
  {
    "id": 427,
    "dom": 3,
    "question": "What is a potential drawback of using SSO?",
    "options": [
      "Users must remember multiple sets of passwords",
      "If the SSO account is successfully attacked, the attacker may gain access to all linked systems (Single Point of Failure)",
      "It slows down login on every system",
      "It cannot be used together with MFA"
    ],
    "correct_idx": 1,
    "explanation": "SSO's main risk is that if the central account is compromised, an attacker gains immediate access to all linked systems — which is why it's often recommended to pair SSO with MFA for added security.",
    "short_explanation_en": "SSO's main risk is that if the central account is compromised, an attacker gains immediate access to all linked systems — which is why it's often recommended to pair SSO with MFA for added security.",
    "question_th": "ข้อเสียที่อาจเกิดขึ้นจากการใช้ SSO คืออะไร?",
    "options_th": [
      "ผู้ใช้ต้องจำรหัสผ่านหลายชุด",
      "หากบัญชี SSO ถูกโจมตีสำเร็จ ผู้โจมตีอาจเข้าถึงระบบที่เชื่อมโยงทั้งหมดได้ (Single Point of Failure)",
      "ทำให้การล็อกอินช้าลงในทุกระบบ",
      "ไม่สามารถใช้งานร่วมกับ MFA ได้"
    ],
    "explanation_th": "ความเสี่ยงหลักของ SSO คือหากบัญชีกลางถูกบุกรุก ผู้โจมตีจะสามารถเข้าถึงระบบที่เชื่อมโยงทั้งหมดได้ทันที จึงมักแนะนำให้ใช้ร่วมกับ MFA เพื่อเพิ่มความปลอดภัย"
  },
  {
    "id": 428,
    "dom": 3,
    "question": "What does Federated Identity Management enable?",
    "options": [
      "Users can use the same identity to access systems across trusted organizations",
      "Every organization must maintain completely separate user databases",
      "Eliminates the use of passwords entirely",
      "Restricts access only within a single organization"
    ],
    "correct_idx": 0,
    "explanation": "Federated Identity Management lets users use one set of credentials to access resources across organizations or domains that share a trust relationship — such as logging in with a Google account to access an external service.",
    "short_explanation_en": "Federated Identity Management lets users use one set of credentials to access resources across organizations or domains that share a trust relationship — such as logging in with a Google account to access an external service.",
    "question_th": "'Federated Identity Management' ช่วยให้เกิดอะไร?",
    "options_th": [
      "ผู้ใช้สามารถใช้ข้อมูลประจำตัว (Identity) เดียวกันเพื่อเข้าถึงระบบข้ามองค์กรที่เชื่อถือกัน",
      "ทุกองค์กรต้องมีฐานข้อมูลผู้ใช้แยกกันโดยเด็ดขาด",
      "ยกเลิกการใช้รหัสผ่านทั้งหมด",
      "จำกัดการเข้าถึงเฉพาะภายในองค์กรเดียว"
    ],
    "explanation_th": "Federated Identity Management ช่วยให้ผู้ใช้สามารถใช้ข้อมูลประจำตัวชุดเดียวเพื่อเข้าถึงทรัพยากรข้ามองค์กรหรือโดเมนที่มีความสัมพันธ์ไว้วางใจกัน (Trust Relationship) เช่น การล็อกอินด้วยบัญชี Google เพื่อเข้าใช้บริการภายนอก"
  },
  {
    "id": 429,
    "dom": 3,
    "question": "What do the 'Provisioning' and 'Deprovisioning' processes for user accounts involve?",
    "options": [
      "Creating and revoking user accounts according to the employment lifecycle, e.g. when hiring or when an employee leaves",
      "Encrypting the user database",
      "Daily backups of user account data",
      "Detecting network intrusions"
    ],
    "correct_idx": 0,
    "explanation": "Provisioning is creating an account and granting access for a new user, while Deprovisioning is revoking or disabling an account when access is no longer needed — such as when an employee leaves — which is critical for preventing orphaned accounts.",
    "short_explanation_en": "Provisioning is creating an account and granting access for a new user, while Deprovisioning is revoking or disabling an account when access is no longer needed — such as when an employee leaves — which is critical for preventing orphaned accounts.",
    "question_th": "กระบวนการ 'Provisioning' และ 'Deprovisioning' บัญชีผู้ใช้เกี่ยวข้องกับอะไร?",
    "options_th": [
      "การสร้างและยกเลิกบัญชีผู้ใช้ตามวงจรชีวิตการจ้างงาน เช่น เมื่อรับพนักงานใหม่หรือพนักงานลาออก",
      "การเข้ารหัสฐานข้อมูลผู้ใช้",
      "การสำรองข้อมูลบัญชีผู้ใช้รายวัน",
      "การตรวจจับการบุกรุกเครือข่าย"
    ],
    "explanation_th": "Provisioning คือการสร้างบัญชีและกำหนดสิทธิ์การเข้าถึงให้ผู้ใช้ใหม่ ส่วน Deprovisioning คือการยกเลิกหรือปิดบัญชีเมื่อผู้ใช้ไม่ต้องการสิทธิ์นั้นอีกต่อไป เช่น เมื่อพนักงานลาออก ซึ่งสำคัญมากเพื่อป้องกันบัญชีค้าง (Orphaned Account)"
  },
  {
    "id": 430,
    "dom": 3,
    "question": "What does 'Accountability' mean in the context of access control?",
    "options": [
      "Granting user permissions based on role",
      "The ability to track and trace who did what and when, through logging and audit trails",
      "Encrypting passwords",
      "Biometric authentication"
    ],
    "correct_idx": 1,
    "explanation": "Accountability is the ability to trace individual users' actions through logging and audit trails, which relies on accurate Identification and Authentication as its foundation.",
    "short_explanation_en": "Accountability is the ability to trace individual users' actions through logging and audit trails, which relies on accurate Identification and Authentication as its foundation.",
    "question_th": "'Accountability' ในบริบทการควบคุมการเข้าถึงหมายถึงอะไร?",
    "options_th": [
      "การให้สิทธิ์ผู้ใช้ตามบทบาท",
      "ความสามารถในการติดตามและตรวจสอบย้อนกลับได้ว่าใครทำอะไร เมื่อใด ผ่านการบันทึก Log และ Audit Trail",
      "การเข้ารหัสรหัสผ่าน",
      "การยืนยันตัวตนด้วยไบโอเมตริกซ์"
    ],
    "explanation_th": "Accountability คือความสามารถในการตรวจสอบย้อนกลับถึงการกระทำของผู้ใช้แต่ละคนผ่านการบันทึกเหตุการณ์ (Logging) และ Audit Trail ซึ่งต้องอาศัย Identification และ Authentication ที่ถูกต้องเป็นพื้นฐาน"
  },
  {
    "id": 431,
    "dom": 3,
    "question": "Which of the following is an example of the 'Something you are' authentication factor?",
    "options": [
      "A PIN code",
      "Iris or fingerprint scan",
      "An office key",
      "An employee badge"
    ],
    "correct_idx": 1,
    "explanation": "'Something you are' is a biometric factor — such as a fingerprint, iris, or face — that represents a person's unique physical characteristic.",
    "short_explanation_en": "'Something you are' is a biometric factor — such as a fingerprint, iris, or face — that represents a person's unique physical characteristic.",
    "question_th": "'Something you are' ในปัจจัยการยืนยันตัวตนหมายถึงตัวอย่างใด?",
    "options_th": [
      "รหัส PIN",
      "สแกนม่านตาหรือลายนิ้วมือ",
      "กุญแจสำนักงาน",
      "บัตรพนักงาน"
    ],
    "explanation_th": "'Something you are' คือปัจจัยทางชีวมิติ (Biometric) เช่น ลายนิ้วมือ ม่านตา หรือใบหน้า ซึ่งเป็นลักษณะเฉพาะตัวของบุคคล"
  },
  {
    "id": 432,
    "dom": 3,
    "question": "Which of the following is a correct example of Physical Access Control?",
    "options": [
      "An Access Control List (ACL) on a firewall",
      "A mantrap system and electronic door badge readers",
      "Data encryption",
      "A password policy"
    ],
    "correct_idx": 1,
    "explanation": "A mantrap (double-door containment room) and electronic badge systems are examples of Physical Access Control that regulate access to actual physical spaces — distinct from Logical Access Control, which governs access to digital systems.",
    "short_explanation_en": "A mantrap (double-door containment room) and electronic badge systems are examples of Physical Access Control that regulate access to actual physical spaces — distinct from Logical Access Control, which governs access to digital systems.",
    "question_th": "การควบคุมการเข้าถึงทางกายภาพ (Physical Access Control) ข้อใดเป็นตัวอย่างที่ถูกต้อง?",
    "options_th": [
      "Access Control List (ACL) บนไฟร์วอลล์",
      "ระบบ Mantrap และบัตรผ่านประตูอิเล็กทรอนิกส์",
      "การเข้ารหัสข้อมูล (Encryption)",
      "นโยบายรหัสผ่าน"
    ],
    "explanation_th": "Mantrap (ห้องกักตัวสองประตู) และระบบบัตรผ่านประตูเป็นตัวอย่างของ Physical Access Control ที่ควบคุมการเข้าออกพื้นที่จริง แตกต่างจาก Logical Access Control ที่ควบคุมการเข้าถึงระบบดิจิทัล"
  },
  {
    "id": 433,
    "dom": 3,
    "question": "What does 'Logical Access Control' mean?",
    "options": [
      "Controlling building entry with a security guard",
      "Controlling access to systems, data, or digital resources through software mechanisms such as passwords and ACLs",
      "Installing CCTV cameras",
      "Locking a door with a key"
    ],
    "correct_idx": 1,
    "explanation": "Logical Access Control (or Technical Access Control) governs access to digital resources through software mechanisms — such as passwords, file permissions, and ACLs — distinct from Physical Access Control, which governs physical spaces.",
    "short_explanation_en": "Logical Access Control (or Technical Access Control) governs access to digital resources through software mechanisms — such as passwords, file permissions, and ACLs — distinct from Physical Access Control, which governs physical spaces.",
    "question_th": "'Logical Access Control' หมายถึงอะไร?",
    "options_th": [
      "การควบคุมการเข้าออกอาคารด้วยยาม",
      "การควบคุมการเข้าถึงระบบ ข้อมูล หรือทรัพยากรดิจิทัลผ่านกลไกทางซอฟต์แวร์ เช่น รหัสผ่านและ ACL",
      "การติดตั้งกล้องวงจรปิด",
      "การล็อกประตูด้วยกุญแจ"
    ],
    "explanation_th": "Logical Access Control (หรือ Technical Access Control) ควบคุมการเข้าถึงทรัพยากรดิจิทัลผ่านกลไกซอฟต์แวร์ เช่น รหัสผ่าน สิทธิ์ไฟล์ และ Access Control List ต่างจาก Physical Access Control ที่ควบคุมพื้นที่จริง"
  },
  {
    "id": 434,
    "dom": 3,
    "question": "Why is setting a 'Password Complexity Policy' important?",
    "options": [
      "It makes passwords easier for users to remember",
      "It reduces the chance of a password being successfully guessed or cracked via Brute Force / Dictionary attacks",
      "It makes the system run faster",
      "It has no effect on system security"
    ],
    "correct_idx": 1,
    "explanation": "Password complexity policies (such as minimum length and mixed characters) reduce the likelihood that an attacker can successfully guess or crack a password via Brute Force or Dictionary attacks.",
    "short_explanation_en": "Password complexity policies (such as minimum length and mixed characters) reduce the likelihood that an attacker can successfully guess or crack a password via Brute Force or Dictionary attacks.",
    "question_th": "เหตุใดการกำหนด 'Password Complexity Policy' จึงมีความสำคัญ?",
    "options_th": [
      "ทำให้ผู้ใช้จำรหัสผ่านได้ง่ายขึ้น",
      "ลดโอกาสที่รหัสผ่านจะถูกคาดเดาหรือถูกโจมตีแบบ Brute Force / Dictionary Attack สำเร็จ",
      "ทำให้ระบบทำงานเร็วขึ้น",
      "ไม่มีผลต่อความปลอดภัยของระบบ"
    ],
    "explanation_th": "นโยบายความซับซ้อนของรหัสผ่าน (เช่น ความยาวขั้นต่ำ ตัวอักษรผสม) ช่วยลดโอกาสที่ผู้โจมตีจะคาดเดาหรือเดารหัสผ่านได้สำเร็จผ่านการโจมตีแบบ Brute Force หรือ Dictionary Attack"
  },
  {
    "id": 435,
    "dom": 3,
    "question": "What is the primary purpose of Privileged Access Management (PAM)?",
    "options": [
      "Strictly manage and control high-privilege accounts, such as Administrator accounts, in an auditable way",
      "Grant Administrator privileges to all users",
      "Delete all user accounts in the system",
      "Only manage regular users' passwords"
    ],
    "correct_idx": 0,
    "explanation": "PAM is a set of practices and tools for controlling, monitoring, and restricting the use of privileged accounts, to reduce the risk of misuse or compromise of high-privilege access.",
    "short_explanation_en": "PAM is a set of practices and tools for controlling, monitoring, and restricting the use of privileged accounts, to reduce the risk of misuse or compromise of high-privilege access.",
    "question_th": "'Privileged Access Management (PAM)' มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options_th": [
      "จัดการและควบคุมบัญชีที่มีสิทธิ์สูง เช่น บัญชี Administrator อย่างเข้มงวดและตรวจสอบได้",
      "ให้สิทธิ์ Administrator แก่ผู้ใช้ทุกคน",
      "ลบบัญชีผู้ใช้ทั้งหมดในระบบ",
      "จัดการเฉพาะรหัสผ่านของผู้ใช้ทั่วไป"
    ],
    "explanation_th": "PAM คือแนวทางและเครื่องมือในการควบคุม ตรวจสอบ และจำกัดการใช้งานบัญชีที่มีสิทธิ์สูง (Privileged Account) เพื่อลดความเสี่ยงจากการใช้สิทธิ์ในทางที่ผิดหรือถูกโจมตี"
  },
  {
    "id": 436,
    "dom": 3,
    "question": "What is the goal of periodic Access Review/Recertification?",
    "options": [
      "Automatically increase everyone's access rights",
      "Review and confirm that users' access rights remain appropriate and necessary for their current duties, reducing Privilege Creep",
      "Delete unnecessary old log data",
      "Reset all users' passwords"
    ],
    "correct_idx": 1,
    "explanation": "Periodic access review helps detect and correct 'Privilege Creep' — where a user accumulates unnecessary access rights over time as their role or duties change, without prior access being revoked.",
    "short_explanation_en": "Periodic access review helps detect and correct 'Privilege Creep' — where a user accumulates unnecessary access rights over time as their role or duties change, without prior access being revoked.",
    "question_th": "ในการตรวจสอบสิทธิ์การเข้าถึงเป็นระยะ (Access Review/Recertification) มีเป้าหมายเพื่ออะไร?",
    "options_th": [
      "เพิ่มสิทธิ์ให้ผู้ใช้ทุกคนโดยอัตโนมัติ",
      "ทบทวนและยืนยันว่าสิทธิ์การเข้าถึงของผู้ใช้ยังคงเหมาะสมและจำเป็นต่อหน้าที่ปัจจุบัน ลด Privilege Creep",
      "ลบข้อมูล Log เก่าที่ไม่จำเป็น",
      "เปลี่ยนรหัสผ่านผู้ใช้ทั้งหมด"
    ],
    "explanation_th": "การทบทวนสิทธิ์เป็นระยะช่วยตรวจจับและแก้ไข 'Privilege Creep' ซึ่งเกิดจากผู้ใช้สะสมสิทธิ์เกินความจำเป็นเมื่อเปลี่ยนตำแหน่งหรือหน้าที่งาน โดยไม่มีการเพิกถอนสิทธิ์เดิม"
  },
  {
    "id": 437,
    "dom": 3,
    "question": "What is the primary purpose of the 'Kerberos' protocol?",
    "options": [
      "File encryption",
      "Centralized authentication using tickets via a Key Distribution Center",
      "Network routing",
      "Vulnerability scanning"
    ],
    "correct_idx": 1,
    "explanation": "Kerberos is an authentication protocol that uses a ticket-based system via a Key Distribution Center (KDC), allowing users to securely access network services without repeatedly transmitting their password.",
    "short_explanation_en": "Kerberos is an authentication protocol that uses a ticket-based system via a Key Distribution Center (KDC), allowing users to securely access network services without repeatedly transmitting their password.",
    "question_th": "'Kerberos' เป็นโปรโตคอลที่ใช้เพื่อวัตถุประสงค์ใดเป็นหลัก?",
    "options_th": [
      "การเข้ารหัสไฟล์",
      "การยืนยันตัวตนแบบรวมศูนย์โดยใช้ตั๋ว (Ticket) ผ่าน Key Distribution Center",
      "การกำหนดเส้นทางเครือข่าย",
      "การสแกนหาช่องโหว่"
    ],
    "explanation_th": "Kerberos เป็นโปรโตคอลยืนยันตัวตนที่ใช้ระบบ Ticket ผ่าน Key Distribution Center (KDC) เพื่อให้ผู้ใช้สามารถเข้าถึงบริการต่างๆ ในเครือข่ายได้อย่างปลอดภัยโดยไม่ต้องส่งรหัสผ่านซ้ำๆ"
  },
  {
    "id": 438,
    "dom": 3,
    "question": "Why should a user account be disabled immediately when an employee leaves, rather than waiting to delete it later?",
    "options": [
      "To save storage space",
      "To prevent an orphaned account from being misused or compromised",
      "Because the law requires immediate deletion",
      "To make the system run faster"
    ],
    "correct_idx": 1,
    "explanation": "An account left active after an employee departs (an orphaned account) is a significant security risk, since it could be misused by the former employee or an attacker to gain unauthorized access.",
    "short_explanation_en": "An account left active after an employee departs (an orphaned account) is a significant security risk, since it could be misused by the former employee or an attacker to gain unauthorized access.",
    "question_th": "เหตุใดจึงควรปิดใช้งาน (Disable) บัญชีผู้ใช้ทันทีเมื่อพนักงานลาออก แทนที่จะรอลบภายหลัง?",
    "options_th": [
      "เพื่อประหยัดพื้นที่จัดเก็บข้อมูล",
      "เพื่อป้องกันไม่ให้บัญชีที่ไม่มีเจ้าของ (Orphaned Account) ถูกนำไปใช้ในทางที่ผิดหรือถูกโจมตี",
      "เพราะกฎหมายบังคับให้ลบทันที",
      "เพื่อให้ระบบทำงานเร็วขึ้น"
    ],
    "explanation_th": "บัญชีที่ยังเปิดใช้งานอยู่หลังพนักงานลาออก (Orphaned Account) เป็นความเสี่ยงด้านความปลอดภัยสูง เพราะอาจถูกอดีตพนักงานหรือผู้โจมตีนำไปใช้เข้าถึงระบบโดยไม่ได้รับอนุญาต"
  },
  {
    "id": 439,
    "dom": 3,
    "question": "What is the difference between 'Authentication' and 'Authorization'?",
    "options": [
      "Both terms mean the same thing",
      "Authentication verifies who a user is, while Authorization determines what that user is allowed to do",
      "Authorization always occurs before Authentication",
      "Authentication applies only to cloud systems"
    ],
    "correct_idx": 1,
    "explanation": "Authentication is the process of verifying a user's claimed identity, while Authorization is the subsequent step that determines what actions or resources the authenticated user is permitted to access.",
    "short_explanation_en": "Authentication is the process of verifying a user's claimed identity, while Authorization is the subsequent step that determines what actions or resources the authenticated user is permitted to access.",
    "question_th": "ข้อใดคือความแตกต่างระหว่าง 'Authentication' และ 'Authorization'?",
    "options_th": [
      "ทั้งสองคำมีความหมายเหมือนกัน",
      "Authentication คือการยืนยันว่าผู้ใช้เป็นใคร ส่วน Authorization คือการกำหนดว่าผู้ใช้มีสิทธิ์ทำอะไรได้บ้าง",
      "Authorization เกิดขึ้นก่อน Authentication เสมอ",
      "Authentication ใช้เฉพาะกับระบบ Cloud เท่านั้น"
    ],
    "explanation_th": "Authentication คือกระบวนการยืนยันตัวตนของผู้ใช้ว่าเป็นบุคคลที่อ้างสิทธิ์จริงหรือไม่ ส่วน Authorization คือขั้นตอนถัดมาที่กำหนดว่าผู้ใช้ที่ยืนยันตัวตนแล้วมีสิทธิ์เข้าถึงหรือกระทำการใดได้บ้าง"
  },
  {
    "id": 440,
    "dom": 3,
    "question": "Why does 'Biometric Authentication' carry a unique risk compared to passwords?",
    "options": [
      "Biometrics can be easily changed like passwords when leaked",
      "If biometric data is leaked, the user cannot 'change' their fingerprint or iris the way they can change a password",
      "Biometrics cannot be used together with MFA",
      "Biometrics always cost less than passwords"
    ],
    "correct_idx": 1,
    "explanation": "Biometric data is a permanent, unique physical characteristic. If it leaks, it cannot be 'reset' or changed like a password, so biometric data requires special protective measures.",
    "short_explanation_en": "Biometric data is a permanent, unique physical characteristic. If it leaks, it cannot be 'reset' or changed like a password, so biometric data requires special protective measures.",
    "question_th": "เหตุใด 'Biometric Authentication' จึงมีความเสี่ยงเฉพาะตัวที่แตกต่างจากรหัสผ่าน?",
    "options_th": [
      "ไบโอเมตริกซ์เปลี่ยนแปลงได้ง่ายเหมือนรหัสผ่านเมื่อรั่วไหล",
      "หากข้อมูลไบโอเมตริกซ์รั่วไหล ผู้ใช้ไม่สามารถ 'เปลี่ยน' ลายนิ้วมือหรือม่านตาของตนได้เหมือนการเปลี่ยนรหัสผ่าน",
      "ไบโอเมตริกซ์ไม่สามารถใช้ร่วมกับ MFA ได้",
      "ไบโอเมตริกซ์มีต้นทุนต่ำกว่ารหัสผ่านเสมอ"
    ],
    "explanation_th": "ข้อมูลไบโอเมตริกซ์เป็นลักษณะเฉพาะตัวถาวรของบุคคล หากรั่วไหลจะไม่สามารถ 'รีเซ็ต' หรือเปลี่ยนใหม่ได้เหมือนรหัสผ่าน จึงต้องมีมาตรการปกป้องข้อมูลไบโอเมตริกซ์เป็นพิเศษ"
  },
  {
    "id": 441,
    "dom": 3,
    "question": "What is an 'Access Control List (ACL)'?",
    "options": [
      "A list specifying which users or groups have permission to access which resources and at what level",
      "A list of all employees in the organization",
      "A record of all security events",
      "The organization's network diagram"
    ],
    "correct_idx": 0,
    "explanation": "An ACL is a list that defines access permissions to resources — such as files, folders, or network devices — specifying which users or groups can read, write, or perform other operations.",
    "short_explanation_en": "An ACL is a list that defines access permissions to resources — such as files, folders, or network devices — specifying which users or groups can read, write, or perform other operations.",
    "question_th": "'Access Control List (ACL)' คืออะไร?",
    "options_th": [
      "รายการที่ระบุว่าผู้ใช้หรือกลุ่มใดมีสิทธิ์เข้าถึงทรัพยากรใดได้บ้างและในระดับใด",
      "รายชื่อพนักงานทั้งหมดในองค์กร",
      "บันทึกเหตุการณ์ความปลอดภัยทั้งหมด",
      "แผนผังเครือข่ายขององค์กร"
    ],
    "explanation_th": "ACL คือรายการที่กำหนดสิทธิ์การเข้าถึงทรัพยากร เช่น ไฟล์ โฟลเดอร์ หรืออุปกรณ์เครือข่าย โดยระบุว่าผู้ใช้หรือกลุ่มใดสามารถอ่าน เขียน หรือดำเนินการใดได้บ้าง"
  },
  {
    "id": 502,
    "dom": 3,
    "question": "Which of the following BEST describes 'Identification' in the context of the IAAA model?",
    "options": [
      "A system records what a user did after logging in",
      "A system determines what resources a user can access",
      "A user proves their identity using a password",
      "A user claims an identity, such as by entering a username"
    ],
    "correct_idx": 3,
    "explanation": "Identification is the step where a user 'claims' an identity — such as typing in a username — which is not yet proof of identity. Actual proof (such as entering a password) is the Authentication step that follows.",
    "short_explanation_en": "Identification is the step where a user 'claims' an identity — such as typing in a username — which is not yet proof of identity. Actual proof (such as entering a password) is the Authentication step that follows.",
    "question_th": "ข้อใดอธิบาย 'Identification' ในบริบทของโมเดล IAAA ได้ดีที่สุด?",
    "options_th": [
      "ระบบบันทึกสิ่งที่ผู้ใช้ทำหลังจากล็อกอิน",
      "ระบบกำหนดว่าผู้ใช้สามารถเข้าถึงทรัพยากรใดได้บ้าง",
      "ผู้ใช้พิสูจน์ตัวตนของตนโดยใช้รหัสผ่าน",
      "ผู้ใช้อ้างสิทธิ์ตัวตน เช่น การพิมพ์ชื่อผู้ใช้"
    ],
    "explanation_th": "Identification คือขั้นตอนที่ผู้ใช้ 'อ้าง' ตัวตนของตนเอง เช่น การพิมพ์ชื่อผู้ใช้ (username) ยังไม่ใช่การพิสูจน์ตัวตน ส่วนการพิสูจน์ตัวตนจริง (เช่น การใส่รหัสผ่าน) คือขั้นตอน Authentication ซึ่งเกิดขึ้นถัดไป"
  },
  {
    "id": 503,
    "dom": 3,
    "question": "Which authentication factor category does a fingerprint scan belong to?",
    "options": [
      "Something you are",
      "Something you know",
      "Something you have",
      "Somewhere you are"
    ],
    "correct_idx": 0,
    "explanation": "A fingerprint is a unique biological characteristic of an individual, placing it in the 'Something you are' category (biometric factor) — distinct from a password ('something you know') or a token/card ('something you have').",
    "short_explanation_en": "A fingerprint is a unique biological characteristic of an individual, placing it in the 'Something you are' category (biometric factor) — distinct from a password ('something you know') or a token/card ('something you have').",
    "question_th": "การสแกนลายนิ้วมือจัดอยู่ในหมวดปัจจัยการยืนยันตัวตนใด?",
    "options_th": [
      "Something you are",
      "Something you know",
      "Something you have",
      "Somewhere you are"
    ],
    "explanation_th": "ลายนิ้วมือเป็นลักษณะทางชีวภาพเฉพาะตัวของแต่ละบุคคล จึงจัดอยู่ในหมวด 'สิ่งที่คุณเป็น' (Something you are) หรือปัจจัยชีวมิติ (Biometric factor) ต่างจากรหัสผ่านซึ่งเป็น 'สิ่งที่คุณรู้' และโทเค็นหรือบัตรซึ่งเป็น 'สิ่งที่คุณมี'"
  },
  {
    "id": 504,
    "dom": 3,
    "question": "A login process requires a password AND a one-time code generated by a mobile app. This is an example of:",
    "options": [
      "Multi-factor authentication (MFA)",
      "Role-based access control",
      "Federated identity management",
      "Single sign-on (SSO)"
    ],
    "correct_idx": 0,
    "explanation": "Using a password ('something you know') together with a one-time code from a mobile app ('something you have') uses more than one authentication factor type, making this Multi-Factor Authentication (MFA), which is more secure than a single factor.",
    "short_explanation_en": "Using a password ('something you know') together with a one-time code from a mobile app ('something you have') uses more than one authentication factor type, making this Multi-Factor Authentication (MFA), which is more secure than a single factor.",
    "question_th": "กระบวนการล็อกอินต้องใช้รหัสผ่านและรหัสแบบใช้ครั้งเดียวที่สร้างจากแอปในมือถือ นี่เป็นตัวอย่างของ:",
    "options_th": [
      "Multi-factor authentication (MFA)",
      "Role-based access control",
      "Federated identity management",
      "Single sign-on (SSO)"
    ],
    "explanation_th": "การใช้รหัสผ่าน (สิ่งที่คุณรู้) ร่วมกับรหัสแบบใช้ครั้งเดียวจากแอปในมือถือ (สิ่งที่คุณมี) เป็นการใช้ปัจจัยยืนยันตัวตนมากกว่าหนึ่งประเภท จึงเป็น Multi-Factor Authentication (MFA) ซึ่งเพิ่มความปลอดภัยมากกว่าการใช้ปัจจัยเดียว"
  },
  {
    "id": 505,
    "dom": 3,
    "question": "Which access control model grants permissions based on labels such as 'Confidential' or 'Top Secret' that are enforced system-wide and cannot be overridden by users?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Attribute-Based Access Control (ABAC)",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "correct_idx": 0,
    "explanation": "Mandatory Access Control (MAC) enforces a centralized security policy by comparing a user's clearance level (e.g., Confidential, Top Secret) against the data's classification, and users cannot alter these permissions themselves — commonly used in government or military settings requiring high security.",
    "short_explanation_en": "Mandatory Access Control (MAC) enforces a centralized security policy by comparing a user's clearance level (e.g., Confidential, Top Secret) against the data's classification, and users cannot alter these permissions themselves — commonly used in government or military settings requiring high security.",
    "question_th": "โมเดลควบคุมการเข้าถึงใดที่ให้สิทธิ์ตามป้ายกำกับ เช่น 'Confidential' หรือ 'Top Secret' ซึ่งบังคับใช้ทั่วทั้งระบบและไม่สามารถถูกแทนที่โดยผู้ใช้ได้?",
    "options_th": [
      "Mandatory Access Control (MAC)",
      "Attribute-Based Access Control (ABAC)",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "explanation_th": "Mandatory Access Control (MAC) บังคับใช้นโยบายความปลอดภัยแบบรวมศูนย์โดยเปรียบเทียบระดับชั้นความลับ (เช่น Confidential, Top Secret) ของผู้ใช้กับของข้อมูล และผู้ใช้ไม่สามารถเปลี่ยนแปลงสิทธิ์เหล่านี้ได้เอง มักใช้ในหน่วยงานราชการหรือทหารที่ต้องการความปลอดภัยสูง"
  },
  {
    "id": 506,
    "dom": 3,
    "question": "In which access control model does the owner of a resource decide who else may access it?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Rule-Based Access Control",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "correct_idx": 3,
    "explanation": "Discretionary Access Control (DAC) gives the resource owner (Data Owner) the authority to decide who can access their own resources — such as sharing files in a typical operating system — unlike MAC, where the system enforces a fixed policy.",
    "short_explanation_en": "Discretionary Access Control (DAC) gives the resource owner (Data Owner) the authority to decide who can access their own resources — such as sharing files in a typical operating system — unlike MAC, where the system enforces a fixed policy.",
    "question_th": "ในโมเดลควบคุมการเข้าถึงใดที่เจ้าของทรัพยากรเป็นผู้ตัดสินใจว่าใครสามารถเข้าถึงได้บ้าง?",
    "options_th": [
      "Mandatory Access Control (MAC)",
      "Rule-Based Access Control",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "explanation_th": "Discretionary Access Control (DAC) ให้อำนาจแก่เจ้าของทรัพยากร (Data Owner) เป็นผู้ตัดสินใจเองว่าใครสามารถเข้าถึงทรัพยากรของตนได้บ้าง เช่น การแชร์ไฟล์ในระบบปฏิบัติการทั่วไป ต่างจาก MAC ที่ระบบเป็นผู้บังคับใช้นโยบายแบบตายตัว"
  },
  {
    "id": 507,
    "dom": 3,
    "question": "An organization assigns access permissions to users based on their job function, such as 'HR Manager' or 'Accountant'. Which access control model is being used?",
    "options": [
      "Mandatory Access Control (MAC)",
      "Content-dependent Access Control",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "correct_idx": 2,
    "explanation": "Role-Based Access Control (RBAC) assigns access based on job function (Role) rather than assigning permissions to each individual directly, making it easier to manage access when there are many employees — since assigning a role automatically grants the associated permissions.",
    "short_explanation_en": "Role-Based Access Control (RBAC) assigns access based on job function (Role) rather than assigning permissions to each individual directly, making it easier to manage access when there are many employees — since assigning a role automatically grants the associated permissions.",
    "question_th": "องค์กรกำหนดสิทธิ์การเข้าถึงให้ผู้ใช้ตามหน้าที่งาน เช่น 'HR Manager' หรือ 'Accountant' นี่เป็นการใช้โมเดลควบคุมการเข้าถึงใด?",
    "options_th": [
      "Mandatory Access Control (MAC)",
      "Content-dependent Access Control",
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)"
    ],
    "explanation_th": "Role-Based Access Control (RBAC) กำหนดสิทธิ์การเข้าถึงตามบทบาทหน้าที่งาน (Role) แทนที่จะกำหนดให้แต่ละบุคคลโดยตรง ทำให้บริหารจัดการสิทธิ์ได้ง่ายขึ้นเมื่อมีพนักงานจำนวนมาก เพราะเพียงกำหนดบทบาทให้ผู้ใช้ สิทธิ์ที่เกี่ยวข้องก็จะถูกกำหนดตามไปด้วย"
  },
  {
    "id": 508,
    "dom": 3,
    "question": "Which principle states that users should be granted only the minimum access rights necessary to perform their job functions?",
    "options": [
      "Separation of duties",
      "Least privilege",
      "Need to know",
      "Defense in depth"
    ],
    "correct_idx": 1,
    "explanation": "The Least Privilege principle states that users should be granted only the access necessary for their job, reducing potential damage if that account is compromised or misused.",
    "short_explanation_en": "The Least Privilege principle states that users should be granted only the access necessary for their job, reducing potential damage if that account is compromised or misused.",
    "question_th": "หลักการใดระบุว่าผู้ใช้ควรได้รับสิทธิ์การเข้าถึงเพียงขั้นต่ำที่จำเป็นสำหรับการปฏิบัติหน้าที่ของตนเท่านั้น?",
    "options_th": [
      "Separation of duties",
      "Least privilege",
      "Need to know",
      "Defense in depth"
    ],
    "explanation_th": "หลักการ Least Privilege (การให้สิทธิ์น้อยที่สุด) กำหนดว่าผู้ใช้ควรได้รับสิทธิ์การเข้าถึงเพียงเท่าที่จำเป็นสำหรับการทำงานเท่านั้น เพื่อลดความเสียหายที่อาจเกิดขึ้นหากบัญชีนั้นถูกบุกรุกหรือถูกใช้ในทางที่ผิด"
  },
  {
    "id": 509,
    "dom": 3,
    "question": "'Need to know' differs from 'least privilege' in that it primarily focuses on:",
    "options": [
      "Limiting the technical capabilities (e.g., read vs. write) granted to an account",
      "Requiring two people to approve a sensitive transaction",
      "Limiting access to specific information required for a task, regardless of general job permissions",
      "Rotating job duties among employees periodically"
    ],
    "correct_idx": 2,
    "explanation": "Need to Know focuses on restricting access to specific 'information' needed for a current task, even if the user has broader general system permissions — distinct from Least Privilege, which focuses on limiting an account's 'technical capabilities', such as read-only versus write/edit access.",
    "short_explanation_en": "Need to Know focuses on restricting access to specific 'information' needed for a current task, even if the user has broader general system permissions — distinct from Least Privilege, which focuses on limiting an account's 'technical capabilities', such as read-only versus write/edit access.",
    "question_th": "'Need to know' แตกต่างจาก 'least privilege' อย่างไร ตรงที่มุ่งเน้นเรื่องใดเป็นหลัก?",
    "options_th": [
      "การจำกัดความสามารถทางเทคนิค (เช่น อ่าน vs เขียน) ที่มอบให้กับบัญชี",
      "การกำหนดให้ต้องมีคนสองคนอนุมัติธุรกรรมที่อ่อนไหว",
      "การจำกัดการเข้าถึงข้อมูลเฉพาะที่จำเป็นสำหรับงาน โดยไม่คำนึงถึงสิทธิ์ทั่วไปของตำแหน่งงาน",
      "การหมุนเวียนหน้าที่งานในหมู่พนักงานเป็นระยะ"
    ],
    "explanation_th": "Need to Know เน้นการจำกัดการเข้าถึง 'ข้อมูล' เฉพาะที่จำเป็นต่อการทำงานในขณะนั้น แม้ผู้ใช้จะมีสิทธิ์ในระบบโดยทั่วไปก็ตาม ต่างจาก Least Privilege ซึ่งเน้นจำกัด 'ความสามารถทางเทคนิค' ของบัญชี เช่น สิทธิ์อ่านอย่างเดียวเทียบกับสิทธิ์เขียนหรือแก้ไข"
  },
  {
    "id": 510,
    "dom": 3,
    "question": "A company requires that the employee who creates a purchase order cannot be the same employee who approves it. This control is an example of:",
    "options": [
      "Job rotation",
      "Mandatory vacation",
      "Least privilege",
      "Separation of duties"
    ],
    "correct_idx": 3,
    "explanation": "Separation of Duties requires that critical steps of a process be split among two or more people, preventing any single individual from being able to commit fraud alone — such as separating the person who creates a purchase order from the person who approves it.",
    "short_explanation_en": "Separation of Duties requires that critical steps of a process be split among two or more people, preventing any single individual from being able to commit fraud alone — such as separating the person who creates a purchase order from the person who approves it.",
    "question_th": "บริษัทกำหนดว่าพนักงานที่สร้างใบสั่งซื้อจะต้องไม่ใช่คนเดียวกับที่อนุมัติใบสั่งซื้อนั้น การควบคุมนี้เป็นตัวอย่างของ:",
    "options_th": [
      "Job rotation",
      "Mandatory vacation",
      "Least privilege",
      "Separation of duties"
    ],
    "explanation_th": "Separation of Duties (การแบ่งแยกหน้าที่) กำหนดให้ขั้นตอนสำคัญของงานหนึ่งงานต้องถูกแบ่งความรับผิดชอบระหว่างบุคคลตั้งแต่สองคนขึ้นไป เพื่อป้องกันไม่ให้บุคคลใดบุคคลหนึ่งสามารถกระทำการทุจริตได้โดยลำพัง เช่น แยกผู้สร้างใบสั่งซื้อออกจากผู้อนุมัติ"
  },
  {
    "id": 511,
    "dom": 3,
    "question": "Employees are required to take at least one consecutive week of vacation per year, during which their duties are covered by others. What risk does this control MOST directly help detect?",
    "options": [
      "Weak password policies",
      "Poor physical security at the office",
      "Ongoing fraud or unauthorized activity that the employee may be concealing",
      "Insufficient network bandwidth"
    ],
    "correct_idx": 2,
    "explanation": "A Mandatory Vacation policy requires someone else to temporarily cover the employee's duties, which creates an opportunity for the organization to detect fraud or unauthorized activity that the employee may have been concealing during their normal work.",
    "short_explanation_en": "A Mandatory Vacation policy requires someone else to temporarily cover the employee's duties, which creates an opportunity for the organization to detect fraud or unauthorized activity that the employee may have been concealing during their normal work.",
    "question_th": "พนักงานถูกกำหนดให้ต้องลาพักร้อนติดต่อกันอย่างน้อยหนึ่งสัปดาห์ต่อปี ในช่วงนั้นหน้าที่ของพวกเขาจะถูกดูแลโดยผู้อื่น การควบคุมนี้ช่วยตรวจจับความเสี่ยงใดมากที่สุดโดยตรง?",
    "options_th": [
      "นโยบายรหัสผ่านที่อ่อนแอ",
      "ความปลอดภัยทางกายภาพของสำนักงานที่ไม่ดี",
      "การทุจริตหรือกิจกรรมที่ไม่ได้รับอนุญาตที่พนักงานอาจกำลังปกปิดอยู่",
      "แบนด์วิดท์เครือข่ายที่ไม่เพียงพอ"
    ],
    "explanation_th": "นโยบายบังคับลาพักร้อน (Mandatory Vacation) ทำให้ผู้อื่นต้องเข้ามาทำหน้าที่แทนชั่วคราว ซึ่งเปิดโอกาสให้องค์กรตรวจพบความผิดปกติ การทุจริต หรือกิจกรรมที่ไม่ได้รับอนุญาตที่พนักงานคนนั้นอาจปกปิดไว้ระหว่างการปฏิบัติงานตามปกติ"
  },
  {
    "id": 512,
    "dom": 3,
    "question": "Over time, an employee who has changed roles several times still retains access rights from all previous positions. This situation is known as:",
    "options": [
      "Access provisioning",
      "Least privilege",
      "Privilege creep",
      "Role explosion"
    ],
    "correct_idx": 2,
    "explanation": "Privilege Creep is the situation where a user accumulates unnecessary access rights over time, often caused by multiple role changes without revoking previous permissions. Periodic access reviews help detect and correct this.",
    "short_explanation_en": "Privilege Creep is the situation where a user accumulates unnecessary access rights over time, often caused by multiple role changes without revoking previous permissions. Periodic access reviews help detect and correct this.",
    "question_th": "เมื่อเวลาผ่านไป พนักงานที่เปลี่ยนตำแหน่งหลายครั้งยังคงมีสิทธิ์การเข้าถึงจากตำแหน่งก่อนหน้าทั้งหมด สถานการณ์นี้เรียกว่า:",
    "options_th": [
      "Access provisioning",
      "Least privilege",
      "Privilege creep",
      "Role explosion"
    ],
    "explanation_th": "Privilege Creep คือสถานการณ์ที่ผู้ใช้สะสมสิทธิ์การเข้าถึงเกินความจำเป็นเมื่อเวลาผ่านไป มักเกิดจากการเปลี่ยนตำแหน่งงานหลายครั้งโดยไม่มีการเพิกถอนสิทธิ์เดิม การทบทวนสิทธิ์การเข้าถึงเป็นระยะช่วยตรวจจับและแก้ไขปัญหานี้"
  },
  {
    "id": 513,
    "dom": 3,
    "question": "Which process should occur promptly when an employee leaves the organization, to reduce security risk?",
    "options": [
      "De-provisioning (revoking) the employee's accounts and access rights",
      "Archiving the employee's email for one year only",
      "Issuing the employee a new access badge",
      "Assigning the employee's role to a temporary contractor immediately"
    ],
    "correct_idx": 0,
    "explanation": "When an employee leaves the organization, De-provisioning — immediately revoking all user accounts and access rights — must be done promptly to prevent an unused account from becoming a vulnerability that could be exploited.",
    "short_explanation_en": "When an employee leaves the organization, De-provisioning — immediately revoking all user accounts and access rights — must be done promptly to prevent an unused account from becoming a vulnerability that could be exploited.",
    "question_th": "กระบวนการใดควรเกิดขึ้นทันทีเมื่อพนักงานลาออกจากองค์กร เพื่อลดความเสี่ยงด้านความปลอดภัย?",
    "options_th": [
      "De-provisioning (เพิกถอน) บัญชีและสิทธิ์การเข้าถึงของพนักงาน",
      "จัดเก็บอีเมลของพนักงานไว้เพียงหนึ่งปีเท่านั้น",
      "ออกบัตรผ่านใหม่ให้พนักงาน",
      "มอบหมายบทบาทของพนักงานให้ผู้รับจ้างชั่วคราวทันที"
    ],
    "explanation_th": "เมื่อพนักงานพ้นสภาพจากองค์กร ต้องรีบดำเนินการ De-provisioning คือการเพิกถอนบัญชีผู้ใช้และสิทธิ์การเข้าถึงทั้งหมดโดยทันที เพื่อป้องกันไม่ให้บัญชีที่ไม่มีการใช้งานแล้วกลายเป็นช่องโหว่ที่อาจถูกนำไปใช้ในทางที่ผิด"
  },
  {
    "id": 514,
    "dom": 3,
    "question": "Which technology allows a user to log in once and gain access to multiple independent systems without re-entering credentials?",
    "options": [
      "Federated Identity Management",
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "Multi-Factor Authentication (MFA)"
    ],
    "correct_idx": 1,
    "explanation": "Single Sign-On (SSO) allows a user to log in once and access other related systems without re-entering credentials, improving convenience and reducing the number of passwords a user must remember — though it also makes that single account a high-value target if compromised.",
    "short_explanation_en": "Single Sign-On (SSO) allows a user to log in once and access other related systems without re-entering credentials, improving convenience and reducing the number of passwords a user must remember — though it also makes that single account a high-value target if compromised.",
    "question_th": "เทคโนโลยีใดที่ให้ผู้ใช้ล็อกอินเพียงครั้งเดียวและเข้าถึงระบบอิสระหลายระบบได้โดยไม่ต้องกรอกข้อมูลรับรองซ้ำ?",
    "options_th": [
      "Federated Identity Management",
      "Single Sign-On (SSO)",
      "Role-Based Access Control (RBAC)",
      "Multi-Factor Authentication (MFA)"
    ],
    "explanation_th": "Single Sign-On (SSO) ช่วยให้ผู้ใช้ล็อกอินเพียงครั้งเดียวแล้วสามารถเข้าถึงระบบอื่น ๆ ที่เกี่ยวข้องได้โดยไม่ต้องกรอกข้อมูลรับรองซ้ำ ช่วยเพิ่มความสะดวกในการใช้งานและลดจำนวนรหัสผ่านที่ผู้ใช้ต้องจดจำ แต่ก็ทำให้บัญชีเดียวมีความสำคัญสูงมากหากถูกบุกรุก"
  },
  {
    "id": 515,
    "dom": 3,
    "question": "Which concept allows users from one organization to access resources of a different, trusted organization using their existing credentials?",
    "options": [
      "Federated identity management",
      "Privilege escalation",
      "Discretionary access control",
      "Single sign-on"
    ],
    "correct_idx": 0,
    "explanation": "Federated Identity Management allows users from one organization to access resources of another trusted organization using their existing credentials, without needing to create a new account in each system — such as logging into another website using a Google account.",
    "short_explanation_en": "Federated Identity Management allows users from one organization to access resources of another trusted organization using their existing credentials, without needing to create a new account in each system — such as logging into another website using a Google account.",
    "question_th": "แนวคิดใดที่ให้ผู้ใช้จากองค์กรหนึ่งสามารถเข้าถึงทรัพยากรของอีกองค์กรที่เชื่อถือกันได้ โดยใช้ข้อมูลรับรองที่มีอยู่แล้ว?",
    "options_th": [
      "Federated identity management",
      "Privilege escalation",
      "Discretionary access control",
      "Single sign-on"
    ],
    "explanation_th": "Federated Identity Management ช่วยให้ผู้ใช้จากองค์กรหนึ่งสามารถเข้าถึงทรัพยากรของอีกองค์กรที่มีความสัมพันธ์ไว้วางใจกัน (trust relationship) โดยใช้ข้อมูลรับรองเดิมของตนเอง โดยไม่ต้องสร้างบัญชีใหม่ในแต่ละระบบ เช่น การล็อกอินด้วยบัญชี Google เข้าเว็บไซต์อื่น"
  },
  {
    "id": 516,
    "dom": 3,
    "question": "A biometric system incorrectly denies access to an authorized user whose fingerprint was not clearly scanned. This error is known as a:",
    "options": [
      "False rejection (Type I error)",
      "False acceptance (Type II error)",
      "Crossover error rate",
      "False positive alert"
    ],
    "correct_idx": 0,
    "explanation": "False Rejection (Type I Error) occurs when a biometric system incorrectly denies an authorized user due to an unclear scan or other error — distinct from False Acceptance (Type II Error), where the system incorrectly allows an unauthorized person through.",
    "short_explanation_en": "False Rejection (Type I Error) occurs when a biometric system incorrectly denies an authorized user due to an unclear scan or other error — distinct from False Acceptance (Type II Error), where the system incorrectly allows an unauthorized person through.",
    "question_th": "ระบบไบโอเมตริกซ์ปฏิเสธการเข้าถึงของผู้ใช้ที่ได้รับอนุญาตอย่างผิดพลาด เนื่องจากลายนิ้วมือถูกสแกนไม่ชัดเจน ข้อผิดพลาดนี้เรียกว่า:",
    "options_th": [
      "False rejection (Type I error)",
      "False acceptance (Type II error)",
      "Crossover error rate",
      "False positive alert"
    ],
    "explanation_th": "False Rejection หรือ Type I Error คือกรณีที่ระบบไบโอเมตริกซ์ปฏิเสธผู้ใช้ที่ได้รับอนุญาตอย่างถูกต้อง เนื่องจากการสแกนไม่ชัดเจนหรือข้อผิดพลาดอื่น ต่างจาก False Acceptance (Type II Error) ซึ่งเป็นกรณีที่ระบบยอมให้ผู้ที่ไม่ได้รับอนุญาตผ่านเข้ามาได้"
  },
  {
    "id": 517,
    "dom": 3,
    "question": "Which term describes the point at which the false rejection rate and false acceptance rate of a biometric system are equal, used to measure overall system accuracy?",
    "options": [
      "False Acceptance Rate (FAR)",
      "Throughput rate",
      "Crossover Error Rate (CER)",
      "False Rejection Rate (FRR)"
    ],
    "correct_idx": 2,
    "explanation": "The Crossover Error Rate (CER) is the point where the False Rejection Rate (FRR) and False Acceptance Rate (FAR) are equal. A lower CER indicates a more accurate biometric system, making it a common metric for comparing different biometric systems.",
    "short_explanation_en": "The Crossover Error Rate (CER) is the point where the False Rejection Rate (FRR) and False Acceptance Rate (FAR) are equal. A lower CER indicates a more accurate biometric system, making it a common metric for comparing different biometric systems.",
    "question_th": "คำใดอธิบายจุดที่อัตราการปฏิเสธผิดพลาดและอัตราการยอมรับผิดพลาดของระบบไบโอเมตริกซ์มีค่าเท่ากัน ซึ่งใช้วัดความแม่นยำโดยรวมของระบบ?",
    "options_th": [
      "False Acceptance Rate (FAR)",
      "Throughput rate",
      "Crossover Error Rate (CER)",
      "False Rejection Rate (FRR)"
    ],
    "explanation_th": "Crossover Error Rate (CER) คือจุดที่อัตราการปฏิเสธผิดพลาด (FRR) และอัตราการยอมรับผิดพลาด (FAR) มีค่าเท่ากัน ยิ่งค่า CER ต่ำเท่าไร ระบบไบโอเมตริกซ์นั้นก็ยิ่งมีความแม่นยำสูงเท่านั้น จึงมักใช้เป็นตัวชี้วัดเปรียบเทียบประสิทธิภาพของระบบไบโอเมตริกซ์ต่าง ๆ"
  },
  {
    "id": 518,
    "dom": 3,
    "question": "Which access control concept requires two individuals to be present simultaneously to access a highly sensitive area, such as a data center vault?",
    "options": [
      "Separation of duties",
      "Mandatory vacation",
      "Two-person integrity",
      "Job rotation"
    ],
    "correct_idx": 2,
    "explanation": "Two-Person Integrity requires two individuals to be present simultaneously any time a highly sensitive area or asset — such as a data center vault — is accessed, preventing any one person from acting alone without a witness.",
    "short_explanation_en": "Two-Person Integrity requires two individuals to be present simultaneously any time a highly sensitive area or asset — such as a data center vault — is accessed, preventing any one person from acting alone without a witness.",
    "question_th": "แนวคิดการควบคุมการเข้าถึงใดที่กำหนดให้ต้องมีบุคคลสองคนอยู่พร้อมกันเพื่อเข้าถึงพื้นที่ที่มีความอ่อนไหวสูง เช่น ห้องนิรภัยศูนย์ข้อมูล?",
    "options_th": [
      "Separation of duties",
      "Mandatory vacation",
      "Two-person integrity",
      "Job rotation"
    ],
    "explanation_th": "Two-Person Integrity กำหนดให้ต้องมีบุคคลสองคนอยู่พร้อมกัน ณ จุดนั้นทุกครั้งที่มีการเข้าถึงพื้นที่หรือทรัพย์สินที่มีความอ่อนไหวสูงมาก เช่น ห้องนิรภัยศูนย์ข้อมูล เพื่อป้องกันไม่ให้บุคคลใดบุคคลหนึ่งกระทำการโดยลำพังโดยไม่มีพยาน"
  },
  {
    "id": 519,
    "dom": 3,
    "question": "Which of the following is the STRONGEST example of a good passphrase from a security standpoint?",
    "options": [
      "The word 'Password123'",
      "The user's own name followed by their birth year",
      "A 4-digit PIN such as '1234'",
      "A long, random sequence of unrelated words such as 'CorrectHorseBattery42!'"
    ],
    "correct_idx": 3,
    "explanation": "A strong passphrase should be long and made up of random, unrelated words, making it far harder to guess or brute-force — whereas familiar or personally identifiable passwords, like a name or birth year, are all easily guessed.",
    "short_explanation_en": "A strong passphrase should be long and made up of random, unrelated words, making it far harder to guess or brute-force — whereas familiar or personally identifiable passwords, like a name or birth year, are all easily guessed.",
    "question_th": "ข้อใดเป็นตัวอย่างที่แข็งแรงที่สุดของ passphrase ที่ดีจากมุมมองความปลอดภัย?",
    "options_th": [
      "คำว่า 'Password123'",
      "ชื่อของผู้ใช้เองตามด้วยปีเกิด",
      "PIN 4 หลัก เช่น '1234'",
      "ลำดับคำที่ไม่เกี่ยวข้องกันแบบสุ่มและยาว เช่น 'CorrectHorseBattery42!'"
    ],
    "explanation_th": "รหัสผ่านที่แข็งแรง (strong passphrase) ควรมีความยาวมาก ประกอบด้วยคำที่ไม่เกี่ยวข้องกันแบบสุ่ม ทำให้คาดเดาหรือโจมตีแบบ brute-force ได้ยากขึ้นมาก ในขณะที่รหัสผ่านที่คุ้นเคยหรือเกี่ยวข้องกับข้อมูลส่วนตัว เช่น ชื่อหรือปีเกิด ล้วนถูกคาดเดาได้ง่าย"
  },
  {
    "id": 520,
    "dom": 3,
    "question": "Which network access control mechanism restricts a device from connecting to the network until it meets specific security requirements, such as up-to-date antivirus signatures?",
    "options": [
      "Virtual Private Network (VPN)",
      "Network Access Control (NAC)",
      "Access Control List (ACL)",
      "Intrusion Prevention System (IPS)"
    ],
    "correct_idx": 1,
    "explanation": "Network Access Control (NAC) checks a device's security posture before allowing it to connect to the network — such as verifying up-to-date antivirus signatures. Devices that don't meet the criteria are quarantined in a separate network until remediated.",
    "short_explanation_en": "Network Access Control (NAC) checks a device's security posture before allowing it to connect to the network — such as verifying up-to-date antivirus signatures. Devices that don't meet the criteria are quarantined in a separate network until remediated.",
    "question_th": "กลไกควบคุมการเข้าถึงเครือข่ายใดที่จำกัดไม่ให้อุปกรณ์เชื่อมต่อกับเครือข่ายจนกว่าจะผ่านข้อกำหนดด้านความปลอดภัยเฉพาะ เช่น ลายเซ็นแอนตี้ไวรัสที่อัปเดตล่าสุด?",
    "options_th": [
      "Virtual Private Network (VPN)",
      "Network Access Control (NAC)",
      "Access Control List (ACL)",
      "Intrusion Prevention System (IPS)"
    ],
    "explanation_th": "Network Access Control (NAC) ตรวจสอบสถานะความปลอดภัยของอุปกรณ์ก่อนอนุญาตให้เชื่อมต่อกับเครือข่าย เช่น ตรวจสอบว่ามีโปรแกรมป้องกันไวรัสที่อัปเดตล่าสุดหรือไม่ หากไม่ผ่านเกณฑ์ อุปกรณ์นั้นจะถูกกักไว้ในเครือข่ายแยกต่างหาก (quarantine) จนกว่าจะได้รับการแก้ไข"
  },
  {
    "id": 521,
    "dom": 3,
    "question": "A network device filters traffic based on a list of rules specifying source, destination, and port. This is an example of:",
    "options": [
      "An Access Control List (ACL)",
      "Federated identity management",
      "Role-Based Access Control",
      "Single sign-on"
    ],
    "correct_idx": 0,
    "explanation": "An Access Control List (ACL) is a list of rules that determines which traffic is allowed or denied based on conditions such as source, destination, and port — commonly used on routers or firewalls to control network access at the packet level.",
    "short_explanation_en": "An Access Control List (ACL) is a list of rules that determines which traffic is allowed or denied based on conditions such as source, destination, and port — commonly used on routers or firewalls to control network access at the packet level.",
    "question_th": "อุปกรณ์เครือข่ายกรองทราฟฟิกตามรายการกฎที่ระบุต้นทาง ปลายทาง และพอร์ต นี่เป็นตัวอย่างของ:",
    "options_th": [
      "Access Control List (ACL)",
      "Federated identity management",
      "Role-Based Access Control",
      "Single sign-on"
    ],
    "explanation_th": "Access Control List (ACL) คือรายการกฎที่กำหนดว่าทราฟฟิกใดได้รับอนุญาตหรือถูกปฏิเสธ โดยอ้างอิงจากเงื่อนไข เช่น ต้นทาง ปลายทาง และพอร์ต มักใช้กับเราเตอร์หรือไฟร์วอลล์เพื่อควบคุมการเข้าถึงเครือข่ายในระดับแพ็กเก็ต"
  },
  {
    "id": 522,
    "dom": 3,
    "question": "An organization implements a policy requiring that no single employee can both initiate a wire transfer and approve it. What primary risk does this control address?",
    "options": [
      "Network latency during transfers",
      "Fraud committed by a single insider acting alone",
      "Weak encryption of financial data",
      "Data loss during a natural disaster"
    ],
    "correct_idx": 1,
    "explanation": "A policy preventing a single employee from both initiating and approving a wire transfer aligns with the Separation of Duties principle, whose primary goal is to prevent fraud committed by a single insider acting alone, since another person must always review or approve as well.",
    "short_explanation_en": "A policy preventing a single employee from both initiating and approving a wire transfer aligns with the Separation of Duties principle, whose primary goal is to prevent fraud committed by a single insider acting alone, since another person must always review or approve as well.",
    "question_th": "องค์กรนำนโยบายมาใช้ที่กำหนดให้พนักงานคนเดียวไม่สามารถทั้งริเริ่มและอนุมัติการโอนเงินได้ การควบคุมนี้จัดการกับความเสี่ยงหลักใด?",
    "options_th": [
      "ความหน่วงของเครือข่ายระหว่างการโอนเงิน",
      "การทุจริตที่กระทำโดยบุคคลภายในเพียงคนเดียว",
      "การเข้ารหัสข้อมูลทางการเงินที่อ่อนแอ",
      "การสูญเสียข้อมูลระหว่างภัยพิบัติทางธรรมชาติ"
    ],
    "explanation_th": "นโยบายที่ห้ามพนักงานคนเดียวทำทั้งการริเริ่มและอนุมัติการโอนเงินสอดคล้องกับหลัก Separation of Duties ซึ่งมีเป้าหมายหลักเพื่อป้องกันการทุจริตที่กระทำโดยพนักงานภายในเพียงคนเดียวโดยลำพัง เนื่องจากต้องมีบุคคลอื่นเข้ามาตรวจสอบหรืออนุมัติร่วมด้วยเสมอ"
  },
  {
    "id": 523,
    "dom": 3,
    "question": "Which of the following BEST describes 'Accounting' (or auditing) in the IAAA model?",
    "options": [
      "Issuing a username to a new employee",
      "Verifying a user's claimed identity",
      "Determining what resources a user is allowed to access",
      "Tracking and logging user activities for later review"
    ],
    "correct_idx": 3,
    "explanation": "Accounting (or Auditing) in the IAAA model refers to recording and tracking user activities in a system, so it can later be reviewed to determine who did what and when — supporting accountability and security incident investigation.",
    "short_explanation_en": "Accounting (or Auditing) in the IAAA model refers to recording and tracking user activities in a system, so it can later be reviewed to determine who did what and when — supporting accountability and security incident investigation.",
    "question_th": "ข้อใดอธิบาย 'Accounting' (หรือการตรวจสอบ) ในโมเดล IAAA ได้ดีที่สุด?",
    "options_th": [
      "การออกชื่อผู้ใช้ให้พนักงานใหม่",
      "การยืนยันตัวตนที่ผู้ใช้อ้างสิทธิ์",
      "การกำหนดว่าผู้ใช้ได้รับอนุญาตให้เข้าถึงทรัพยากรใดได้บ้าง",
      "การติดตามและบันทึกกิจกรรมของผู้ใช้เพื่อทบทวนในภายหลัง"
    ],
    "explanation_th": "Accounting (หรือ Auditing) ในโมเดล IAAA หมายถึงการบันทึกและติดตามกิจกรรมของผู้ใช้ในระบบ เพื่อให้สามารถตรวจสอบย้อนหลังได้ว่าใครทำอะไร เมื่อใด ซึ่งช่วยสนับสนุนการตรวจสอบความรับผิดชอบ (accountability) และการสืบสวนเหตุการณ์ด้านความปลอดภัย"
  }
];

export default questions;
