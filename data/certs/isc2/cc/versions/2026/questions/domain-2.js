/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 2: BC/DR/IR
 * Question Count: 65
 */

const questions = [
  {
    "id": 104,
    "dom": 2,
    "question": "What is incident response?",
    "options": [
      "Helpdesk and customer service",
      "Putting out corporate fires",
      "Addressing anomalies and events in a timely fashion to minimize risk to the organization",
      "Remediating technical issues that pose a threat to the organization"
    ],
    "correct_idx": 2,
    "explanation": "Incident response means addressing security anomalies and events promptly to minimize the risk and impact to the organization.",
    "short_explanation_en": "Incident response means addressing security anomalies and events promptly to minimize the risk and impact to the organization.",
    "question_th": "Incident Response (การตอบสนองต่อเหตุการณ์) คืออะไร?",
    "options_th": [
      "ฝ่ายช่วยเหลือและบริการลูกค้า",
      "การดับไฟในองค์กร",
      "การจัดการกับความผิดปกติและเหตุการณ์อย่างทันท่วงทีเพื่อลดความเสี่ยงต่อองค์กร",
      "การแก้ไขปัญหาทางเทคนิคที่เป็นภัยคุกคามต่อองค์กร"
    ],
    "explanation_th": "Incident Response คือการจัดการความผิดปกติและเหตุการณ์ด้านความปลอดภัยอย่างทันท่วงที เพื่อลดความเสี่ยงและผลกระทบต่อองค์กร"
  },
  {
    "id": 105,
    "dom": 2,
    "question": "What is an incident response plan?",
    "options": [
      "A document outlining how to respond to incidents",
      "Technical specifications for incident containment",
      "Another plan to seldom follow",
      "Training for incident response team members"
    ],
    "correct_idx": 0,
    "explanation": "An incident response plan is the formal document outlining the specific steps and procedures for responding to security incidents.",
    "short_explanation_en": "An incident response plan is the formal document outlining the specific steps and procedures for responding to security incidents.",
    "question_th": "แผนตอบสนองต่อเหตุการณ์ (Incident Response Plan) คืออะไร?",
    "options_th": [
      "เอกสารที่ระบุขั้นตอนการตอบสนองต่อเหตุการณ์",
      "ข้อกำหนดทางเทคนิคสำหรับการควบคุมเหตุการณ์",
      "แผนอีกฉบับที่ไม่ค่อยมีใครทำตาม",
      "การฝึกอบรมสำหรับสมาชิกทีมตอบสนองเหตุการณ์"
    ],
    "explanation_th": "แผนตอบสนองต่อเหตุการณ์คือเอกสารทางการที่ระบุขั้นตอนและกระบวนการเฉพาะสำหรับการตอบสนองต่อเหตุการณ์ด้านความปลอดภัย"
  },
  {
    "id": 106,
    "dom": 2,
    "question": "What are the six steps of incident response?",
    "options": [
      "Detection, prioritization, isolation, response, recovery, reflection",
      "Monitoring, classification, containment, response, testing, reflection",
      "Analysis, classification, containment, response, recovery, lessons",
      "Detection, classification, containment, response, recovery, reflection"
    ],
    "correct_idx": 3,
    "explanation": "The six standard phases of incident response are: detection, classification, containment, response, recovery, and reflection (lessons learned).",
    "short_explanation_en": "The six standard phases of incident response are: detection, classification, containment, response, recovery, and reflection (lessons learned).",
    "question_th": "หกขั้นตอนของ Incident Response คืออะไร?",
    "options_th": [
      "Detection, prioritization, isolation, response, recovery, reflection",
      "Monitoring, classification, containment, response, testing, reflection",
      "Analysis, classification, containment, response, recovery, lessons",
      "Detection, classification, containment, response, recovery, reflection"
    ],
    "explanation_th": "หกขั้นตอนมาตรฐานของ Incident Response คือ: การตรวจจับ (detection), การจัดประเภท (classification), การควบคุม (containment), การตอบสนอง (response), การกู้คืน (recovery) และการทบทวน (reflection/lessons learned)"
  },
  {
    "id": 107,
    "dom": 2,
    "question": "How are incident response plans tested?",
    "options": [
      "Actually responding to an incident",
      "Tabletop walkthroughs",
      "Simulations",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Incident response plans can be validated through live incident response, tabletop walkthroughs, and simulations — all are legitimate testing methods.",
    "short_explanation_en": "Incident response plans can be validated through live incident response, tabletop walkthroughs, and simulations — all are legitimate testing methods.",
    "question_th": "แผนตอบสนองต่อเหตุการณ์ถูกทดสอบอย่างไร?",
    "options_th": [
      "การตอบสนองต่อเหตุการณ์จริง",
      "การประชุมจำลองสถานการณ์บนโต๊ะ (Tabletop walkthroughs)",
      "การจำลองสถานการณ์ (Simulations)",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "แผนตอบสนองต่อเหตุการณ์สามารถทดสอบได้หลายวิธี ทั้งการตอบสนองต่อเหตุการณ์จริง การประชุมจำลองบนโต๊ะ และการจำลองสถานการณ์ ล้วนเป็นวิธีทดสอบที่ถูกต้อง"
  },
  {
    "id": 108,
    "dom": 2,
    "question": "What is business continuity?",
    "options": [
      "Another name for incident response",
      "Plans and procedures for preparing systems for emergencies",
      "A list of people to call in an emergency",
      "Processes and procedures for the whole organization during emergencies"
    ],
    "correct_idx": 3,
    "explanation": "Business continuity encompasses the processes and procedures the whole organization follows to keep operating during and after an emergency.",
    "short_explanation_en": "Business continuity encompasses the processes and procedures the whole organization follows to keep operating during and after an emergency.",
    "question_th": "Business Continuity (ความต่อเนื่องทางธุรกิจ) คืออะไร?",
    "options_th": [
      "ชื่ออื่นของ Incident Response",
      "แผนและขั้นตอนการเตรียมระบบสำหรับเหตุฉุกเฉิน",
      "รายชื่อบุคคลที่ต้องติดต่อในกรณีฉุกเฉิน",
      "กระบวนการและขั้นตอนสำหรับทั้งองค์กรในช่วงเหตุฉุกเฉิน"
    ],
    "explanation_th": "Business Continuity ครอบคลุมกระบวนการและขั้นตอนที่ทั้งองค์กรต้องปฏิบัติตามเพื่อให้สามารถดำเนินงานต่อไปได้ในระหว่างและหลังเหตุฉุกเฉิน"
  },
  {
    "id": 109,
    "dom": 2,
    "question": "What is the purpose of a business impact analysis?",
    "options": [
      "Determining which systems and data are critical",
      "Conducting a secondary risk assessment",
      "Judging the impact of the business continuity plan on the organization",
      "Judging the risks to confidentiality, integrity, and availability if an emergency were to happen"
    ],
    "correct_idx": 0,
    "explanation": "A Business Impact Analysis (BIA) determines which systems and business functions are most critical, helping prioritize recovery efforts.",
    "short_explanation_en": "A Business Impact Analysis (BIA) determines which systems and business functions are most critical, helping prioritize recovery efforts.",
    "question_th": "วัตถุประสงค์ของ Business Impact Analysis คืออะไร?",
    "options_th": [
      "ระบุว่าระบบและข้อมูลใดมีความสำคัญ",
      "ทำการประเมินความเสี่ยงรอบที่สอง",
      "ประเมินผลกระทบของแผนความต่อเนื่องทางธุรกิจต่อองค์กร",
      "ประเมินความเสี่ยงต่อ confidentiality, integrity และ availability หากเกิดเหตุฉุกเฉิน"
    ],
    "explanation_th": "Business Impact Analysis (BIA) ใช้ระบุว่าระบบและฟังก์ชันทางธุรกิจใดสำคัญที่สุด เพื่อช่วยจัดลำดับความสำคัญในการกู้คืน"
  },
  {
    "id": 110,
    "dom": 2,
    "question": "An RTO refers to which of the following?",
    "options": [
      "The amount of money required to recover from an incident",
      "The latest time after an incident at which the system should be recovered and operational",
      "The amount of time required to recover from an incident",
      "The latest time after an incident at which the incident response plan should be completed"
    ],
    "correct_idx": 1,
    "explanation": "RTO (Recovery Time Objective) is the maximum acceptable time after an incident by which a system must be restored and operational again.",
    "short_explanation_en": "RTO (Recovery Time Objective) is the maximum acceptable time after an incident by which a system must be restored and operational again.",
    "question_th": "RTO หมายถึงอะไร?",
    "options_th": [
      "จำนวนเงินที่ต้องใช้ในการกู้คืนจากเหตุการณ์",
      "เวลาล่าสุดหลังเหตุการณ์ที่ระบบควรถูกกู้คืนและกลับมาใช้งานได้",
      "ระยะเวลาที่ใช้ในการกู้คืนจากเหตุการณ์",
      "เวลาล่าสุดหลังเหตุการณ์ที่แผนตอบสนองต่อเหตุการณ์ควรเสร็จสิ้น"
    ],
    "explanation_th": "RTO (Recovery Time Objective) คือระยะเวลาสูงสุดที่ยอมรับได้หลังเกิดเหตุการณ์ ซึ่งระบบต้องถูกกู้คืนและกลับมาทำงานได้"
  },
  {
    "id": 111,
    "dom": 2,
    "question": "An RPO refers to which of the following?",
    "options": [
      "The most recent point before an incident to which the system can be recovered",
      "The amount of data lost during recovery from an incident",
      "The amount of time spent during recovery from an incident",
      "The last point at which the database was online"
    ],
    "correct_idx": 0,
    "explanation": "RPO (Recovery Point Objective) is the most recent point in time to which data must be recoverable, defining how much data loss is tolerable.",
    "short_explanation_en": "RPO (Recovery Point Objective) is the most recent point in time to which data must be recoverable, defining how much data loss is tolerable.",
    "question_th": "RPO หมายถึงอะไร?",
    "options_th": [
      "จุดเวลาล่าสุดก่อนเหตุการณ์ที่ระบบสามารถกู้คืนได้",
      "ปริมาณข้อมูลที่สูญเสียระหว่างการกู้คืนจากเหตุการณ์",
      "ระยะเวลาที่ใช้ในการกู้คืน",
      "จุดเวลาล่าสุดที่ฐานข้อมูลยังออนไลน์อยู่"
    ],
    "explanation_th": "RPO (Recovery Point Objective) คือจุดเวลาล่าสุดที่ข้อมูลสามารถกู้คืนได้ ซึ่งกำหนดปริมาณข้อมูลสูญหายที่ยอมรับได้"
  },
  {
    "id": 112,
    "dom": 2,
    "question": "What are the four types of backups?",
    "options": [
      "Full, differential, incremental, real-time",
      "Full, real-time, cloud, differential",
      "Full, mirror, replicative, incremental",
      "Full, mirror, differential, incremental"
    ],
    "correct_idx": 3,
    "explanation": "The four standard backup types are full, mirror, differential, and incremental — each balancing storage space and recovery speed differently.",
    "short_explanation_en": "The four standard backup types are full, mirror, differential, and incremental — each balancing storage space and recovery speed differently.",
    "question_th": "การสำรองข้อมูล (Backup) มีกี่ประเภทหลัก?",
    "options_th": [
      "Full, differential, incremental, real-time",
      "Full, real-time, cloud, differential",
      "Full, mirror, replicative, incremental",
      "Full, mirror, differential, incremental"
    ],
    "explanation_th": "การสำรองข้อมูลมี 4 ประเภทหลัก: full (สำรองทั้งหมด), mirror (สำเนาเหมือนต้นฉบับ), differential (สำรองส่วนที่เปลี่ยนจาก full ล่าสุด) และ incremental (สำรองส่วนที่เปลี่ยนจากครั้งก่อนหน้า)"
  },
  {
    "id": 113,
    "dom": 2,
    "question": "What is disaster recovery?",
    "options": [
      "Processes for storing backups and resuming business operations",
      "Another name for incident response",
      "Processes for handling and recovering from disasters",
      "Practical plans for safeguarding systems and technology"
    ],
    "correct_idx": 2,
    "explanation": "Disaster recovery specifically covers the processes for responding to and recovering from major disruptive events (disasters).",
    "short_explanation_en": "Disaster recovery specifically covers the processes for responding to and recovering from major disruptive events (disasters).",
    "question_th": "Disaster Recovery คืออะไร?",
    "options_th": [
      "กระบวนการสำรองข้อมูลและกลับมาดำเนินธุรกิจ",
      "ชื่ออื่นของ Incident Response",
      "กระบวนการจัดการและกู้คืนจากภัยพิบัติ",
      "แผนปฏิบัติสำหรับปกป้องระบบและเทคโนโลยี"
    ],
    "explanation_th": "Disaster Recovery ครอบคลุมกระบวนการเฉพาะสำหรับการตอบสนองและกู้คืนจากเหตุการณ์ภัยพิบัติร้ายแรง"
  },
  {
    "id": 114,
    "dom": 2,
    "question": "What are the three types of backup sites?",
    "options": [
      "Hot, tepid, chilly",
      "Hot, warm, cold",
      "Hot, lukewarm, cold",
      "Boiling, hot, warm"
    ],
    "correct_idx": 1,
    "explanation": "The three standard types of backup/recovery sites are hot (fully ready), warm (partially ready), and cold (minimal readiness).",
    "short_explanation_en": "The three standard types of backup/recovery sites are hot (fully ready), warm (partially ready), and cold (minimal readiness).",
    "question_th": "ไซต์สำรอง (Backup site) มีกี่ประเภทหลัก?",
    "options_th": [
      "Hot, tepid, chilly",
      "Hot, warm, cold",
      "Hot, lukewarm, cold",
      "Boiling, hot, warm"
    ],
    "explanation_th": "ไซต์สำรองมี 3 ประเภทหลัก: hot site (พร้อมใช้งานทันที), warm site (พร้อมใช้งานบางส่วน) และ cold site (พร้อมใช้งานน้อยที่สุด)"
  },
  {
    "id": 115,
    "dom": 2,
    "question": "What is failover testing?",
    "options": [
      "Testing backup restoration",
      "Switching over to alternate sites or redundant cloud setups",
      "A disaster recovery plan test",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Failover testing can include testing backup restoration, switching to alternate/redundant sites, and validating the disaster recovery plan itself — all are part of failover testing.",
    "short_explanation_en": "Failover testing can include testing backup restoration, switching to alternate/redundant sites, and validating the disaster recovery plan itself — all are part of failover testing.",
    "question_th": "Failover testing คืออะไร?",
    "options_th": [
      "การทดสอบการกู้คืนข้อมูลสำรอง",
      "การสลับไปยังไซต์สำรองหรือระบบคลาวด์สำรอง",
      "การทดสอบแผน Disaster Recovery",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Failover testing ครอบคลุมการทดสอบการกู้คืนข้อมูลสำรอง การสลับไปยังไซต์สำรอง และการตรวจสอบแผน Disaster Recovery ทั้งหมดนี้ล้วนเป็นส่วนหนึ่งของการทดสอบ failover"
  },
  {
    "id": 116,
    "dom": 2,
    "question": "For what purpose can governance documents be used?",
    "options": [
      "To fulfill the requirements of audits and vendor questionnaires",
      "To meet the requirements of regulations and laws",
      "To provide reference points during emergencies, staff changes, and training",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Governance documents serve multiple purposes: satisfying audits and vendor questionnaires, meeting regulatory/legal requirements, and providing guidance during emergencies, staff turnover, and training.",
    "short_explanation_en": "Governance documents serve multiple purposes: satisfying audits and vendor questionnaires, meeting regulatory/legal requirements, and providing guidance during emergencies, staff turnover, and training.",
    "question_th": "เอกสารด้านการกำกับดูแล (Governance documents) ใช้เพื่อวัตถุประสงค์ใด?",
    "options_th": [
      "เพื่อตอบสนองข้อกำหนดของการตรวจสอบและแบบสอบถามผู้ขาย",
      "เพื่อให้เป็นไปตามข้อกำหนดของกฎระเบียบและกฎหมาย",
      "เพื่อเป็นจุดอ้างอิงในสถานการณ์ฉุกเฉิน การเปลี่ยนพนักงาน และการฝึกอบรม",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "เอกสารด้านการกำกับดูแลมีหลายวัตถุประสงค์ ทั้งการตอบสนองการตรวจสอบ การปฏิบัติตามกฎระเบียบ และเป็นจุดอ้างอิงในสถานการณ์ต่าง ๆ"
  },
  {
    "id": 117,
    "dom": 2,
    "question": "What is the hierarchy of governance documents?",
    "options": [
      "General statements, manuals, plans, guidelines",
      "Policies, standards, procedures, plans",
      "Policies, standards, procedures, guidelines",
      "Policies, manuals, plans, regulations"
    ],
    "correct_idx": 2,
    "explanation": "The standard governance document hierarchy, from most to least formal, is: policies, standards, procedures, and guidelines.",
    "short_explanation_en": "The standard governance document hierarchy, from most to least formal, is: policies, standards, procedures, and guidelines.",
    "question_th": "ลำดับชั้นของเอกสารด้านการกำกับดูแลเป็นอย่างไร?",
    "options_th": [
      "General statements, manuals, plans, guidelines",
      "Policies, standards, procedures, plans",
      "Policies, standards, procedures, guidelines",
      "Policies, manuals, plans, regulations"
    ],
    "explanation_th": "ลำดับชั้นมาตรฐานของเอกสารด้านการกำกับดูแล เรียงจากเป็นทางการมากที่สุดไปน้อยที่สุด คือ: policies, standards, procedures และ guidelines"
  },
  {
    "id": 118,
    "dom": 2,
    "question": "What are the two primary sources of regulations in the cybersecurity industry?",
    "options": [
      "Government agencies and industry groups",
      "Legislatures and government agencies",
      "International organizations and cybersecurity associations",
      "Government agencies and international organizations"
    ],
    "correct_idx": 0,
    "explanation": "Cybersecurity regulations primarily originate from government agencies (laws) and industry groups (standards/frameworks).",
    "short_explanation_en": "Cybersecurity regulations primarily originate from government agencies (laws) and industry groups (standards/frameworks).",
    "question_th": "แหล่งที่มาหลักสองแหล่งของกฎระเบียบในอุตสาหกรรมความปลอดภัยไซเบอร์คืออะไร?",
    "options_th": [
      "หน่วยงานภาครัฐและกลุ่มอุตสาหกรรม",
      "ฝ่ายนิติบัญญัติและหน่วยงานภาครัฐ",
      "องค์กรระหว่างประเทศและสมาคมความปลอดภัยไซเบอร์",
      "หน่วยงานภาครัฐและองค์กรระหว่างประเทศ"
    ],
    "explanation_th": "กฎระเบียบด้านความปลอดภัยไซเบอร์ส่วนใหญ่มาจากหน่วยงานภาครัฐ (กฎหมาย) และกลุ่มอุตสาหกรรม (มาตรฐาน/กรอบการทำงาน)"
  },
  {
    "id": 119,
    "dom": 2,
    "question": "Which of the following lists four laws and regulations that could apply to an organization?",
    "options": [
      "HIPAA, SOX, PCI DSS, GDPR",
      "HIPAA, SOC, CFAA, GDPR",
      "PCI DSS, HiTRUST, FedRAMP, FCPA",
      "PCI DSS, ISO 27001, SOX, HIPAA"
    ],
    "correct_idx": 0,
    "explanation": "HIPAA (healthcare), SOX (financial reporting), PCI DSS (payment cards), and GDPR (EU data privacy) are all well-known regulations that could apply depending on an organization's industry and location.",
    "short_explanation_en": "HIPAA (healthcare), SOX (financial reporting), PCI DSS (payment cards), and GDPR (EU data privacy) are all well-known regulations that could apply depending on an organization's industry and location.",
    "question_th": "ข้อใดต่อไปนี้ระบุกฎหมายและกฎระเบียบ 4 ฉบับที่อาจใช้กับองค์กรได้?",
    "options_th": [
      "HIPAA, SOX, PCI DSS, GDPR",
      "HIPAA, SOC, CFAA, GDPR",
      "PCI DSS, HiTRUST, FedRAMP, FCPA",
      "PCI DSS, ISO 27001, SOX, HIPAA"
    ],
    "explanation_th": "HIPAA (สุขภาพ), SOX (การรายงานทางการเงิน), PCI DSS (บัตรชำระเงิน) และ GDPR (ความเป็นส่วนตัวข้อมูลสหภาพยุโรป) เป็นกฎระเบียบที่รู้จักกันดีซึ่งอาจใช้บังคับตามอุตสาหกรรมและที่ตั้งขององค์กร"
  },
  {
    "id": 174,
    "dom": 2,
    "question": "During which phase of the incident response process is the incident response plan developed and documented?",
    "options": [
      "Preparation",
      "Containment, eradication, and recovery",
      "Detection and analysis",
      "Post-incident activity"
    ],
    "correct_idx": 0,
    "explanation": "The incident response plan is developed and documented during the preparation phase of the incident response process.",
    "short_explanation_en": "The incident response plan is developed and documented during the preparation phase of the incident response process.",
    "question_th": "แผนตอบสนองต่อเหตุการณ์ถูกพัฒนาและจัดทำเอกสารในขั้นตอนใดของกระบวนการ Incident Response?",
    "options_th": [
      "Preparation",
      "Containment, eradication, and recovery",
      "Detection and analysis",
      "Post-incident activity"
    ],
    "explanation_th": "แผนตอบสนองต่อเหตุการณ์ถูกพัฒนาและจัดทำเอกสารในขั้นตอน Preparation ของกระบวนการ Incident Response"
  },
  {
    "id": 175,
    "dom": 2,
    "question": "During which phase of the incident response process does the lessonslearned assessment take place?",
    "options": [
      "Detection and analysis",
      "Containment, eradication, and recovery",
      "Preparation",
      "Post-incident activity"
    ],
    "correct_idx": 3,
    "explanation": "The lessons-learned assessment occurs during the post-incident activity phase of the incident response process.",
    "short_explanation_en": "The lessons-learned assessment occurs during the post-incident activity phase of the incident response process.",
    "question_th": "การประเมินบทเรียนที่ได้ (Lessons-learned assessment) เกิดขึ้นในขั้นตอนใด?",
    "options_th": [
      "Detection and analysis",
      "Containment, eradication, and recovery",
      "Preparation",
      "Post-incident activity"
    ],
    "explanation_th": "การประเมินบทเรียนที่ได้เกิดขึ้นในขั้นตอน Post-incident activity ของกระบวนการ Incident Response"
  },
  {
    "id": 176,
    "dom": 2,
    "question": "In which phase of the incident response process would a security analyst recover a system from a backup?",
    "options": [
      "Preparation",
      "Detection and analysis",
      "Post-incident activity",
      "Containment, eradication, and recovery"
    ],
    "correct_idx": 3,
    "explanation": "Recovering a system from backup would take place during the containment, eradication, and recovery phase of the incident response process.",
    "short_explanation_en": "Recovering a system from backup would take place during the containment, eradication, and recovery phase of the incident response process.",
    "question_th": "ในขั้นตอนใดของกระบวนการ Incident Response ที่นักวิเคราะห์ความปลอดภัยจะกู้คืนระบบจากข้อมูลสำรอง?",
    "options_th": [
      "Preparation",
      "Detection and analysis",
      "Post-incident activity",
      "Containment, eradication, and recovery"
    ],
    "explanation_th": "การกู้คืนระบบจากข้อมูลสำรองเกิดขึ้นในขั้นตอน Containment, eradication, and recovery"
  },
  {
    "id": 177,
    "dom": 2,
    "question": "What phase comes after the detection and analysis phase in the incident response process?",
    "options": [
      "Containment, eradication, and recovery.",
      "Preparation.",
      "Post-incident activity.",
      "Detection and analysis is the last phase of the process."
    ],
    "correct_idx": 0,
    "explanation": "The containment, eradication, and recovery phase comes after the detection and analysis phase of the incident response process. The process steps are Preparation -> Detection and Analysis -> Containment, Eradication, and Recovery -> Post-Incident Activity.",
    "short_explanation_en": "The containment, eradication, and recovery phase comes after the detection and analysis phase of the incident response process.",
    "question_th": "ขั้นตอนใดเกิดขึ้นหลังจากขั้นตอน detection and analysis ในกระบวนการ Incident Response?",
    "options_th": [
      "Containment, eradication, and recovery",
      "Preparation",
      "Post-incident activity",
      "Detection and analysis เป็นขั้นตอนสุดท้ายของกระบวนการ"
    ],
    "explanation_th": "ขั้นตอน Containment, eradication, and recovery เกิดขึ้นหลังขั้นตอน detection and analysis โดยลำดับเต็มคือ Preparation -> Detection and Analysis -> Containment, Eradication, and Recovery -> Post-Incident Activity"
  },
  {
    "id": 178,
    "dom": 2,
    "question": "Carol is tasked with creating a business continuity plan for her organization. What should she do to determine which of her organization’s business functions should be restored in the event of an incident?",
    "options": [
      "Conduct a risk assessment.",
      "Interview key stakeholders throughout the organization.",
      "Calculate the MTD for each business function.",
      "Conduct a business impact analysis."
    ],
    "correct_idx": 3,
    "explanation": "The purpose of a business impact analysis is to determine which business functions should be restored after an incident.",
    "short_explanation_en": "The purpose of a business impact analysis is to determine which business functions should be restored after an incident.",
    "question_th": "แครอลได้รับมอบหมายให้จัดทำแผนความต่อเนื่องทางธุรกิจสำหรับองค์กรของเธอ เธอควรทำอย่างไรเพื่อกำหนดว่าฟังก์ชันทางธุรกิจใดขององค์กรควรถูกกู้คืนก่อนหากเกิดเหตุการณ์?",
    "options_th": [
      "ทำการประเมินความเสี่ยง",
      "สัมภาษณ์ผู้มีส่วนได้ส่วนเสียหลักทั่วทั้งองค์กร",
      "คำนวณ MTD สำหรับแต่ละฟังก์ชันทางธุรกิจ",
      "ทำ Business Impact Analysis"
    ],
    "explanation_th": "วัตถุประสงค์ของ Business Impact Analysis คือการกำหนดว่าฟังก์ชันทางธุรกิจใดควรถูกกู้คืนก่อนหลังเกิดเหตุการณ์"
  },
  {
    "id": 179,
    "dom": 2,
    "question": "Alice is responsible for designing her organization’s datacenter to provide resiliency in the event of a disaster. If a disaster occurs, she wants to have the new datacenter up and running within a few days, but she does not want to incur the cost of building a full datacenter with all equipment fully installed and configured. Which of the following options is the best choice for her situation?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Tertiary site"
    ],
    "correct_idx": 1,
    "explanation": "A warm site is a facility that is configured with equipment suitable for supporting IT operations but without the computing equipment itself. The warm site has power, HVAC, physical infrastructure, and possibly telecommunications and peripheral equipment. APPENDIX About the Online Content This book comes complete with TotalTester Online customizable practice exam software with 200 practice exam qu",
    "short_explanation_en": "A warm site is a facility that is configured with equipment suitable for supporting IT operations but without the computing equipment itself.",
    "question_th": "อลิซรับผิดชอบออกแบบศูนย์ข้อมูลขององค์กรเพื่อให้มีความยืดหยุ่นในกรณีเกิดภัยพิบัติ หากเกิดภัยพิบัติ เธอต้องการให้ศูนย์ข้อมูลใหม่พร้อมใช้งานภายในไม่กี่วัน แต่ไม่ต้องการเสียค่าใช้จ่ายในการสร้างศูนย์ข้อมูลเต็มรูปแบบพร้อมอุปกรณ์ครบชุด ตัวเลือกใดเหมาะสมที่สุดสำหรับสถานการณ์ของเธอ?",
    "options_th": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Tertiary site"
    ],
    "explanation_th": "Warm site คือศูนย์สำรองที่มีอุปกรณ์เหมาะสมสำหรับรองรับการดำเนินงานด้าน IT แต่ไม่มีอุปกรณ์คอมพิวเตอร์ครบชุด ซึ่งเหมาะกับสถานการณ์นี้"
  },
  {
    "id": 197,
    "dom": 2,
    "question": "In the event of a disaster, which of these should be the PRIMARY objective? (★)",
    "options": [
      "Guarantee the safety of people",
      "Guarantee the continuity of critical systems",
      "Protection of the production database github.com/ayemunhossain",
      "Application of disaster communication"
    ],
    "correct_idx": 0,
    "explanation": "In the event of a disaster, the clear priority is to guarantee the safety of human life above all. The remaining options, though important from the point of view of disaster recovery and business continuity, are secondary when compared to safety.",
    "short_explanation_en": "In the event of a disaster, the clear priority is to guarantee the safety of human life above all.",
    "question_th": "ในกรณีเกิดภัยพิบัติ วัตถุประสงค์หลักควรเป็นสิ่งใด?",
    "options_th": [
      "รับประกันความปลอดภัยของบุคลากร",
      "รับประกันความต่อเนื่องของระบบสำคัญ",
      "ปกป้องฐานข้อมูลการผลิต",
      "การสื่อสารในสถานการณ์ภัยพิบัติ"
    ],
    "explanation_th": "ในกรณีเกิดภัยพิบัติ ความสำคัญอันดับแรกคือการรับประกันความปลอดภัยของชีวิตมนุษย์เหนือสิ่งอื่นใด"
  },
  {
    "id": 203,
    "dom": 2,
    "question": "In incident terminology, the meaning of Zero Day is:",
    "options": [
      "Days to solve a previously unknown system vulnerability",
      "A previously unknown system vulnerability",
      "Days without a cybersecurity incident",
      "Days with a cybersecurity incident"
    ],
    "correct_idx": 1,
    "explanation": "A 'Zero Day' is an unknown system vulnerability that can be exploited since it does not yet exist in any vulnerability database. Moreover, these vulnerabilities do not generally fit recognized patterns, signatures or methods (see ISC2 Study Guide Chapter 2, Module 1, under Incident Terminology), making them very hard to detect and prevent.",
    "short_explanation_en": "A 'Zero Day' is an unknown system vulnerability that can be exploited since it does not yet exist in any vulnerability database.",
    "question_th": "ในศัพท์เฉพาะด้านเหตุการณ์ความหมายของ Zero Day คืออะไร?",
    "options_th": [
      "วันที่ใช้แก้ไขช่องโหว่ที่ไม่เคยรู้จักมาก่อน",
      "ช่องโหว่ของระบบที่ไม่เคยถูกค้นพบมาก่อน",
      "วันที่ไม่มีเหตุการณ์ด้านความปลอดภัยไซเบอร์",
      "วันที่เกิดเหตุการณ์ด้านความปลอดภัยไซเบอร์"
    ],
    "explanation_th": "'Zero Day' คือช่องโหว่ของระบบที่ยังไม่เคยถูกค้นพบมาก่อน จึงยังไม่มีอยู่ในฐานข้อมูลช่องโหว่ใด ๆ ทำให้ตรวจจับและป้องกันได้ยาก"
  },
  {
    "id": 204,
    "dom": 2,
    "question": "Which of the following is NOT a possible model for an Incident Response Team (IRT)?",
    "options": [
      "Leveraged",
      "Pre-existing",
      "Dedicated",
      "Hybrid"
    ],
    "correct_idx": 1,
    "explanation": "The three possible models for incident response are Leveraged, Dedicated, and Hybrid (see the ISC2 Study Guide, Chapter 2, Module 1, under Chapter Takeaways). The term 'Pre-existing' is not a valid model for an IRT.",
    "short_explanation_en": "The three possible models for incident response are Leveraged, Dedicated, and Hybrid (see the ISC2 Study Guide, Chapter 2, Module 1, under Chapter Takeaways).",
    "question_th": "ข้อใดไม่ใช่รูปแบบที่เป็นไปได้สำหรับทีมตอบสนองต่อเหตุการณ์ (IRT)?",
    "options_th": [
      "Leveraged",
      "Pre-existing",
      "Dedicated",
      "Hybrid"
    ],
    "explanation_th": "สามรูปแบบที่เป็นไปได้ของทีมตอบสนองต่อเหตุการณ์คือ Leveraged, Dedicated และ Hybrid คำว่า 'Pre-existing' ไม่ใช่รูปแบบที่ถูกต้องของ IRT"
  },
  {
    "id": 217,
    "dom": 2,
    "question": "Which of these has the PRIMARY objective of identifying and prioritizing critical business processes?",
    "options": [
      "Business Impact Plan",
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Continuity Plan"
    ],
    "correct_idx": 1,
    "explanation": "The term 'Business Impact Plan' does not exist. A Business Impact Analysis (BIA) is a technique for analyzing how disruptions can affect an organization, and determines the criticality of all business activities and associated resources. A Business Continuity Plan (BCP) is a pre-determined set of instructions describing how the mission/business processes of an organization will be sustained during and after a significant disruption. A Disaster Recovery Plan is a written plan for recovering infor",
    "short_explanation_en": "The term 'Business Impact Plan' does not exist. A Business Impact Analysis (BIA) is a technique for analyzing how disruptions can affect an organization, and determines the criticality of all business activities and associated resources.",
    "question_th": "ข้อใดมีวัตถุประสงค์หลักในการระบุและจัดลำดับความสำคัญของกระบวนการทางธุรกิจที่สำคัญ?",
    "options_th": [
      "Business Impact Plan",
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Continuity Plan"
    ],
    "explanation_th": "คำว่า 'Business Impact Plan' ไม่มีอยู่จริง ในขณะที่ Business Impact Analysis (BIA) คือเทคนิคการวิเคราะห์ว่าการหยุดชะงักส่งผลกระทบต่อองค์กรอย่างไร"
  },
  {
    "id": 237,
    "dom": 2,
    "question": "Which are the components of an incident response plan?",
    "options": [
      "Preparation -> Detection and Analysis -> Recovery -> Containment -> Eradication -> Post-Incident Activity",
      "Preparation -> Detection and Analysis -> Containment -> Eradication -> Post-Incident Activity -> Recovery",
      "Preparation -> Detection and Analysis -> Eradication -> Recovery -> Containment -> Post-Incident Activity",
      "Preparation -> Detection and Analysis -> Containment, Eradication and Recovery -> Post-Incident Activity"
    ],
    "correct_idx": 3,
    "explanation": "The components commonly found in an incident response plan are (in this order): Preparation; Detection and Analysis; Containment, Eradication and Recovery; Post-Incident Activity (see the ISC2 Chapter 2, Module 1, under Components of github.com/ayemunhossain an Incident Response Plan).",
    "short_explanation_en": "The components commonly found in an incident response plan are (in this order): Preparation; Detection and Analysis; Containment, Eradication and Recovery; Post-Incident Activity (see the ISC2 Chapter 2, Module 1, under Components of...",
    "question_th": "องค์ประกอบของแผนตอบสนองต่อเหตุการณ์คืออะไร?",
    "options_th": [
      "Preparation -> Detection and Analysis -> Recovery -> Containment -> Eradication -> Post-Incident Activity",
      "Preparation -> Detection and Analysis -> Containment -> Eradication -> Post-Incident Activity -> Recovery",
      "Preparation -> Detection and Analysis -> Eradication -> Recovery -> Containment -> Post-Incident Activity",
      "Preparation -> Detection and Analysis -> Containment, Eradication and Recovery -> Post-Incident Activity"
    ],
    "explanation_th": "องค์ประกอบมาตรฐานของแผนตอบสนองต่อเหตุการณ์ตามลำดับคือ: Preparation, Detection and Analysis, Containment/Eradication/Recovery และ Post-Incident Activity"
  },
  {
    "id": 239,
    "dom": 2,
    "question": "The predetermined set of instructions or procedures to sustain business operations after a disaster is commonly known as:",
    "options": [
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Impact Plan",
      "Business Continuity Plan"
    ],
    "correct_idx": 3,
    "explanation": "A Business Continuity Plan (BCP) is a pre-determined set of instructions describing how an organization's mission/business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under Terms and Definitions). A Business Impact Analysis (BIA) is a technique for analyzing how disruptions can affect an organization. A Disaster Recovery Plan is a written plan for recovering information systems in response to a major failure or disaster. The te",
    "short_explanation_en": "A Business Continuity Plan (BCP) is a pre-determined set of instructions describing how an organization's mission/business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4,...",
    "question_th": "ชุดคำสั่งหรือขั้นตอนที่กำหนดไว้ล่วงหน้าเพื่อรักษาการดำเนินธุรกิจหลังเกิดภัยพิบัติ เรียกว่าอะไร?",
    "options_th": [
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Impact Plan",
      "Business Continuity Plan"
    ],
    "explanation_th": "Business Continuity Plan (BCP) คือชุดคำสั่งที่กำหนดไว้ล่วงหน้าเพื่ออธิบายว่ากระบวนการทางธุรกิจขององค์กรจะดำเนินต่อไปอย่างไรในระหว่างและหลังเหตุการณ์หยุดชะงักสำคัญ"
  },
  {
    "id": 242,
    "dom": 2,
    "question": "After an earthquake disrupting business operations, which document contains the procedures required to return business github.com/ayemunhossain to normal operation?",
    "options": [
      "The Business Impact Plan",
      "The Business Impact Analysis",
      "The Business Continuity Plan",
      "The Disaster Recovery Plan"
    ],
    "correct_idx": 3,
    "explanation": "A Disaster Recovery Plan (DRP) is a plan for processing and restoring operations in the event of a significant hardware or software failure, or of the destruction of the organization's facilities. The primary goal of a DRP is to restore the business to the last-known reliable state of operations (see Chapter 2 ISC2 Study Guide, module 4, under The Goal of Disaster Recovery). The term 'Business Impact Plan' does not exist. A Business Continuity Plan (BCP) is a pre-determined set of instructions d",
    "short_explanation_en": "A Disaster Recovery Plan (DRP) is a plan for processing and restoring operations in the event of a significant hardware or software failure, or of the destruction of the organization's facilities.",
    "question_th": "หลังเกิดแผ่นดินไหวที่ทำให้การดำเนินธุรกิจหยุดชะงัก เอกสารใดมีขั้นตอนที่จำเป็นในการนำธุรกิจกลับสู่การดำเนินงานปกติ?",
    "options_th": [
      "The Business Impact Plan",
      "The Business Impact Analysis",
      "The Business Continuity Plan",
      "The Disaster Recovery Plan"
    ],
    "explanation_th": "Disaster Recovery Plan (DRP) คือแผนสำหรับประมวลผลและกู้คืนการดำเนินงานเมื่อเกิดความล้มเหลวของฮาร์ดแวร์/ซอฟต์แวร์ครั้งใหญ่ หรือการทำลายสถานที่ขององค์กร"
  },
  {
    "id": 245,
    "dom": 2,
    "question": "Which of the following is less likely to be part of an incident response team?",
    "options": [
      "Legal representatives",
      "Human Resources",
      "Representatives of senior management",
      "Information security professionals"
    ],
    "correct_idx": 1,
    "explanation": "The incident response team carries out the post-incident analysis phase of an incident response plan. They are a cross- functional group of individuals representing the management, technical and functional areas of responsibility most directly impacted by a security incident. In the incident response team, we typically find (i) representatives of senior management, (ii) information security professionals, (iii) legal representatives, (iv) public affairs/communications representatives, (v) engine",
    "short_explanation_en": "The incident response team carries out the post-incident analysis phase of an incident response plan.",
    "question_th": "ข้อใดมีโอกาสน้อยที่สุดที่จะเป็นส่วนหนึ่งของทีมตอบสนองต่อเหตุการณ์?",
    "options_th": [
      "ตัวแทนฝ่ายกฎหมาย",
      "ฝ่ายทรัพยากรบุคคล",
      "ตัวแทนผู้บริหารระดับสูง",
      "ผู้เชี่ยวชาญด้านความปลอดภัยสารสนเทศ"
    ],
    "explanation_th": "ทีมตอบสนองต่อเหตุการณ์ทำหน้าที่วิเคราะห์หลังเกิดเหตุการณ์ โดยทั่วไปประกอบด้วยตัวแทนผู้บริหาร ผู้เชี่ยวชาญความปลอดภัย ตัวแทนฝ่ายกฎหมาย และฝ่ายสื่อสาร ส่วนฝ่ายทรัพยากรบุคคลมักไม่ได้เป็นสมาชิกหลัก"
  },
  {
    "id": 249,
    "dom": 2,
    "question": "Which of these is the PRIMARY objective of a Disaster Recovery Plan?",
    "options": [
      "Restore company operation to the last-known reliable operation state",
      "Outline a safe escape procedure for the organization's personnel",
      "Maintain crucial company operations in the event of a disaster",
      "Communicate to the responsible entities the damage caused to operations in the event of a disaster"
    ],
    "correct_idx": 0,
    "explanation": "A Disaster Recovery Plan (DRP) is a plan for processing and restoring operations in the event of a significant hardware or software failure, or of the destruction of the organization's facilities. The primary goal of a DRP is to restore the business to the last-known reliable state of operations (see Chapter 2 ISC2 Study Guide, module 4, under The Goal of Disaster Recovery). Maintaining crucial operations is the goal of the Business Continuity Plan (BCP). The remaining options may be included in",
    "short_explanation_en": "A Disaster Recovery Plan (DRP) is a plan for processing and restoring operations in the event of a significant hardware or software failure, or of the destruction of the organization's facilities.",
    "question_th": "ข้อใดคือวัตถุประสงค์หลักของ Disaster Recovery Plan?",
    "options_th": [
      "กู้คืนการดำเนินงานของบริษัทให้กลับสู่สถานะที่เชื่อถือได้ล่าสุด",
      "ระบุขั้นตอนการอพยพบุคลากรอย่างปลอดภัย",
      "รักษาการดำเนินงานสำคัญของบริษัทในกรณีเกิดภัยพิบัติ",
      "สื่อสารความเสียหายต่อการดำเนินงานไปยังหน่วยงานที่รับผิดชอบเมื่อเกิดภัยพิบัติ"
    ],
    "explanation_th": "Disaster Recovery Plan (DRP) คือแผนสำหรับประมวลผลและกู้คืนการดำเนินงาน โดยมีเป้าหมายหลักคือการนำธุรกิจกลับสู่สถานะการดำเนินงานที่เชื่อถือได้ล่าสุด"
  },
  {
    "id": 260,
    "dom": 2,
    "question": "In which of the following phases of an Incident Recovery Plan are incident responses prioritized?",
    "options": [
      "Post-incident Activity",
      "Detection and Analysis",
      "Preparation",
      "Contentment, Eradication, and Recovery"
    ],
    "correct_idx": 1,
    "explanation": "Incident responses are prioritized in the Detection and Analysis phase (see the ISC2 Study Guide, Chapter 2, Module 1, under Components of Incident Response). github.com/ayemunhossain",
    "short_explanation_en": "Incident responses are prioritized in the Detection and Analysis phase (see the ISC2 Study Guide, Chapter 2, Module 1, under Components of Incident Response).",
    "question_th": "ในขั้นตอนใดของแผนกู้คืนจากเหตุการณ์ที่มีการจัดลำดับความสำคัญของการตอบสนองต่อเหตุการณ์?",
    "options_th": [
      "Post-incident Activity",
      "Detection and Analysis",
      "Preparation",
      "Containment, Eradication, and Recovery"
    ],
    "explanation_th": "การจัดลำดับความสำคัญของการตอบสนองต่อเหตุการณ์เกิดขึ้นในขั้นตอน Detection and Analysis"
  },
  {
    "id": 278,
    "dom": 2,
    "question": "Which of these is the most efficient and effective way to test a business continuity plan?",
    "options": [
      "Simulations",
      "Walkthroughs",
      "Reviews",
      "Discussions"
    ],
    "correct_idx": 0,
    "explanation": "Simulations are full re-enactments of business continuity procedures and can involve most, if not all, of your workforce. They also tend to take place on-site in the relevant business areas. Thus, they are an exceptionally effective way to test your business continuity plan. Walkthroughs verbally carry out specific recovery steps stipulated in the business Continuity plan. Discussion and reviews are static ways of testing the business continuity plan.",
    "short_explanation_en": "Simulations are full re-enactments of business continuity procedures and can involve most, if not all, of your workforce.",
    "question_th": "ข้อใดเป็นวิธีที่มีประสิทธิภาพและประสิทธิผลที่สุดในการทดสอบแผนความต่อเนื่องทางธุรกิจ?",
    "options_th": [
      "การจำลองสถานการณ์ (Simulations)",
      "การเดินผ่านขั้นตอน (Walkthroughs)",
      "การทบทวน (Reviews)",
      "การอภิปราย (Discussions)"
    ],
    "explanation_th": "การจำลองสถานการณ์คือการจำลองขั้นตอนความต่อเนื่องทางธุรกิจเต็มรูปแบบ ซึ่งมักเกี่ยวข้องกับพนักงานส่วนใหญ่และเกิดขึ้น ณ พื้นที่จริง จึงเป็นวิธีทดสอบที่มีประสิทธิภาพที่สุด"
  },
  {
    "id": 280,
    "dom": 2,
    "question": "In the event of a disaster, what should be the PRIMARY objective? (★)",
    "options": [
      "Apply disaster communication",
      "Protect the production database",
      "Guarantee the safety of people",
      "Guarantee the continuity of critical systems"
    ],
    "correct_idx": 2,
    "explanation": "In the event of a disaster, the number one priority is to guarantee the safety of human life above all else. The remaining options, though important as concerns business continuity, are never as important as the safety of human beings.",
    "short_explanation_en": "In the event of a disaster, the number one priority is to guarantee the safety of human life above all else.",
    "question_th": "ในกรณีเกิดภัยพิบัติ วัตถุประสงค์หลักควรเป็นสิ่งใด?",
    "options_th": [
      "สื่อสารในสถานการณ์ภัยพิบัติ",
      "ปกป้องฐานข้อมูลการผลิต",
      "รับประกันความปลอดภัยของบุคลากร",
      "รับประกันความต่อเนื่องของระบบสำคัญ"
    ],
    "explanation_th": "ในกรณีเกิดภัยพิบัติ ความสำคัญอันดับแรกคือการรับประกันความปลอดภัยของชีวิตมนุษย์เหนือสิ่งอื่นใด"
  },
  {
    "id": 282,
    "dom": 2,
    "question": "Which department in a company is NOT regularly involved in a DRP?",
    "options": [
      "Executives",
      "IT",
      "Public Relations",
      "Financial"
    ],
    "correct_idx": 3,
    "explanation": "Executives and Public Relations (PR) need to be aware of the company DRP to handle the expectation of the public and of company stakeholders. IT personnel should be involved in helping businesses get back to normal operations. A company's financial department is rarely involved in a disaster recovery plan. An exception would be if the issue at hand is connected to their area of expertise (see Chapter 2 ISC2 Study Guide, module 4, under Components of a Disaster Recovery Plan).",
    "short_explanation_en": "Executives and Public Relations (PR) need to be aware of the company DRP to handle the expectation of the public and of company stakeholders.",
    "question_th": "แผนกใดในบริษัทที่มักไม่เกี่ยวข้องเป็นประจำใน DRP?",
    "options_th": [
      "ผู้บริหาร",
      "IT",
      "ฝ่ายประชาสัมพันธ์",
      "ฝ่ายการเงิน"
    ],
    "explanation_th": "ผู้บริหารและฝ่ายประชาสัมพันธ์ต้องรับทราบ DRP เพื่อจัดการความคาดหวังของสาธารณะและผู้มีส่วนได้ส่วนเสีย ส่วน IT ต้องช่วยให้ธุรกิจกลับสู่การดำเนินงานปกติ ในขณะที่ฝ่ายการเงินมักไม่ค่อยเกี่ยวข้องกับ DRP"
  },
  {
    "id": 283,
    "dom": 2,
    "question": "Which of the following is included in an SLA document?",
    "options": [
      "A plan to prepare the organization for the continuation of critical business functions",
      "A plan to keep business operations going while recovering from a significant disruption",
      "Instructions to detect, respond to, and limit the consequences of a cyber-attack",
      "Instructions on data ownership and destruction"
    ],
    "correct_idx": 3,
    "explanation": "A set of instructions or procedures to detect, respond and limit the consequences of a cyber-attack is an Incident Response Plan (see ISC2 Study Guide Chapter 2, module 1, under The Goal of Incident Response). A plan to sustain business operations while recovering from a significant disruption is a Business Continuity Plan (see ISC2 Study Guide Chapter 2, module 2, under The Importance of Business Continuity). A plan to prepare the organization for the continuation of critical business functions",
    "short_explanation_en": "A set of instructions or procedures to detect, respond and limit the consequences of a cyber-attack is an Incident Response Plan (see ISC2 Study Guide Chapter 2, module 1, under The Goal of Incident Response).",
    "question_th": "ข้อใดรวมอยู่ในเอกสาร SLA?",
    "options_th": [
      "แผนเตรียมองค์กรสำหรับความต่อเนื่องของฟังก์ชันทางธุรกิจสำคัญ",
      "แผนรักษาการดำเนินธุรกิจระหว่างการกู้คืนจากการหยุดชะงักครั้งใหญ่",
      "ขั้นตอนตรวจจับ ตอบสนอง และจำกัดผลกระทบจากการโจมตีทางไซเบอร์",
      "ขั้นตอนเกี่ยวกับความเป็นเจ้าของข้อมูลและการทำลายข้อมูล"
    ],
    "explanation_th": "SLA (Service Level Agreement) คือสัญญาระหว่างผู้ให้บริการกับลูกค้าที่กำหนดระดับการบริการ ซึ่งรวมถึงขั้นตอนเกี่ยวกับความเป็นเจ้าของข้อมูลและการทำลายข้อมูล"
  },
  {
    "id": 286,
    "dom": 2,
    "question": "Which type of document outlines the procedures ensuring that vital company systems keep running during business- disrupting events?",
    "options": [
      "Business Impact Plan",
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Continuity Plan"
    ],
    "correct_idx": 3,
    "explanation": "A Business Continuity Plan (BCP) is a pre-determined set of instructions describing how an organization's mission or business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under Terms and Definitions). A Business Impact Analysis (BIA) is a method of analyzing how disruptions can affect an organization. A Disaster Recovery Plan is used to recover systems after a major failure or disaster. The term 'Business Impact Plan' does not e",
    "short_explanation_en": "A Business Continuity Plan (BCP) is a pre-determined set of instructions describing how an organization's mission or business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module...",
    "question_th": "เอกสารประเภทใดที่ระบุขั้นตอนเพื่อให้ระบบสำคัญขององค์กรยังคงทำงานได้ในระหว่างเหตุการณ์ที่รบกวนธุรกิจ?",
    "options_th": [
      "Business Impact Plan",
      "Business Impact Analysis",
      "Disaster Recovery Plan",
      "Business Continuity Plan"
    ],
    "explanation_th": "Business Continuity Plan (BCP) คือชุดคำสั่งที่กำหนดไว้ล่วงหน้าเพื่ออธิบายว่ากระบวนการทางธุรกิจขององค์กรจะดำเนินต่อไปอย่างไรในระหว่างและหลังเหตุการณ์หยุดชะงักสำคัญ"
  },
  {
    "id": 295,
    "dom": 2,
    "question": "During the investigation of an incident, which security policies are more likely to cause difficulties?",
    "options": [
      "Configuration standards",
      "Incident response policies",
      "Communication policies",
      "Retention policies github.com/ayemunhossain"
    ],
    "correct_idx": 3,
    "explanation": "For many organizations, retention policies entail keeping data only for a limited time. Because of the high costs of data storage capacity, organizations maintain specific logs only for a short period of time (a few hours to several days), and keep other data records for more extended periods (months to years). Because of this, not all data regarding an incident may be available. Communication and incident response policies can provide valuable help to an incident investigation. Finally, configu",
    "short_explanation_en": "For many organizations, retention policies entail keeping data only for a limited time.",
    "question_th": "ในระหว่างการสืบสวนเหตุการณ์ นโยบายด้านความปลอดภัยใดมีแนวโน้มก่อให้เกิดความยากลำบากมากกว่า?",
    "options_th": [
      "มาตรฐานการกำหนดค่า",
      "นโยบายตอบสนองต่อเหตุการณ์",
      "นโยบายการสื่อสาร",
      "นโยบายการเก็บรักษาข้อมูล"
    ],
    "explanation_th": "นโยบายการเก็บรักษาข้อมูลมักกำหนดให้เก็บข้อมูลไว้เพียงระยะเวลาจำกัด เนื่องจากต้นทุนการจัดเก็บที่สูง ทำให้ข้อมูลบางส่วนที่เกี่ยวข้องกับเหตุการณ์อาจไม่พร้อมใช้งานเมื่อต้องสืบสวน"
  },
  {
    "id": 298,
    "dom": 2,
    "question": "(★) Which type of recovery site has some or most systems in place, but does not have the data needed to take over operations?",
    "options": [
      "A hot site",
      "A cloud site",
      "A warm site",
      "A cold site"
    ],
    "correct_idx": 2,
    "explanation": "A cold site requires space, power, network connectivity, systems and data to be put in place and take over operations. Warm sites have power, connectivity, and systems, but do not have live or current data enabling the immediate takeover of operations (see ISC2 Study Guide, chapter 2, module 3). A hot site can immediately take over operations. A cloud site is not a term that refers to one of the three most common types of recovery sites.",
    "short_explanation_en": "A cold site requires space, power, network connectivity, systems and data to be put in place and take over operations.",
    "question_th": "ไซต์กู้คืนประเภทใดที่มีระบบบางส่วนหรือส่วนใหญ่พร้อมใช้งาน แต่ไม่มีข้อมูลที่จำเป็นในการเข้าครองการดำเนินงาน?",
    "options_th": [
      "Hot site",
      "Cloud site",
      "Warm site",
      "Cold site"
    ],
    "explanation_th": "Cold site ต้องการพื้นที่ ไฟฟ้า การเชื่อมต่อเครือข่าย ระบบ และข้อมูลก่อนจึงจะเข้าครองการดำเนินงานได้ ในขณะที่ Warm site มีไฟฟ้า การเชื่อมต่อ และระบบพร้อมแล้ว แต่ไม่มีข้อมูลปัจจุบัน"
  },
  {
    "id": 300,
    "dom": 2,
    "question": "Which of these is NOT a typical component of a comprehensive business continuity plan (BCP)?",
    "options": [
      "A cost prediction of the immediate response procedures",
      "Immediate response procedures and checklists",
      "Notification systems and call trees for alerting personnel",
      "A list of the BCP team members"
    ],
    "correct_idx": 0,
    "explanation": "Cost predictions of response procedures are not typical components of business continuity plans (BCP). A BCP typically includes the following elements: A list of BCP team members, who will be responsible for implementing the BCP and coordinating the response to an incident; Immediate response procedures and checklists, with step-by-step instructions for responding to an incident and restoring operations; Notification systems and call trees for alerting personnel, the purpose of which is to effec",
    "short_explanation_en": "Cost predictions of response procedures are not typical components of business continuity plans (BCP).",
    "question_th": "ข้อใดไม่ใช่องค์ประกอบทั่วไปของแผนความต่อเนื่องทางธุรกิจ (BCP) ที่ครอบคลุม?",
    "options_th": [
      "การประมาณต้นทุนของขั้นตอนการตอบสนองทันที",
      "ขั้นตอนและรายการตรวจสอบการตอบสนองทันที",
      "ระบบแจ้งเตือนและสายโทรศัพท์สำหรับแจ้งบุคลากร",
      "รายชื่อสมาชิกทีม BCP"
    ],
    "explanation_th": "การประมาณต้นทุนของขั้นตอนการตอบสนองไม่ใช่องค์ประกอบทั่วไปของ BCP ซึ่งปกติจะรวมรายชื่อทีม ขั้นตอนตอบสนองทันที และระบบแจ้งเตือนบุคลากร"
  },
  {
    "id": 302,
    "dom": 2,
    "question": "In an incident response process, which phase uses indicators of compromise and log analysis as part of a review of events?",
    "options": [
      "Preparation",
      "Eradication",
      "Identification",
      "Containment"
    ],
    "correct_idx": 2,
    "explanation": "According to NIST methodology, an incident response plan has four phases to structure the organization’s incident response, and typically includes short and long-term goals, metrics for measuring success, training, and job requirements for incident response roles. The identification phase focuses on identifying the attack, understanding its severity, and prioritizing it appropriately. Preparation focuses on building tools, processes and procedures to respond to incidents. Eradication involves th",
    "short_explanation_en": "According to NIST methodology, an incident response plan has four phases to structure the organization’s incident response, and typically includes short and long-term goals, metrics for measuring success, training, and job requirements...",
    "question_th": "ในกระบวนการตอบสนองต่อเหตุการณ์ ขั้นตอนใดใช้ตัวชี้วัดการถูกบุกรุก (Indicators of Compromise) และการวิเคราะห์ log เป็นส่วนหนึ่งของการทบทวนเหตุการณ์?",
    "options_th": [
      "Preparation",
      "Eradication",
      "Identification",
      "Containment"
    ],
    "explanation_th": "ตามระเบียบวิธีของ NIST ขั้นตอน Identification จะเน้นการระบุการโจมตี ทำความเข้าใจความรุนแรง และจัดลำดับความสำคัญอย่างเหมาะสม โดยใช้ log และตัวชี้วัดการบุกรุก"
  },
  {
    "id": 310,
    "dom": 2,
    "question": "Which of these is an example of a privacy breach?",
    "options": [
      "Any observable occurrence in a network or system",
      "Being exposed to the possibility of attack",
      "Unavailability of critical systems",
      "Access of private information by an unauthorized person github.com/ayemunhossain"
    ],
    "correct_idx": 3,
    "explanation": "A privacy breach is a compromise of confidentiality (see ISC2 Study Guide, chapter 2, module 1). The NIST defines privacy breach as \"the loss of control, compromise, unauthorized disclosure, unauthorized acquisition, or any similar occurrence where a person other than an authorized user accesses (or potentially accesses) personally identifiable information, or uses it for anything other than its authorized purpose\". The unavailability of a critical system is a compromise of availability (not of",
    "short_explanation_en": "A privacy breach is a compromise of confidentiality (see ISC2 Study Guide, chapter 2, module 1).",
    "question_th": "ข้อใดเป็นตัวอย่างของการละเมิดความเป็นส่วนตัว (Privacy breach)?",
    "options_th": [
      "เหตุการณ์ใด ๆ ที่สังเกตได้ในเครือข่ายหรือระบบ",
      "การถูกเปิดเผยต่อความเป็นไปได้ในการถูกโจมตี",
      "ความไม่พร้อมใช้งานของระบบสำคัญ",
      "การเข้าถึงข้อมูลส่วนบุคคลโดยบุคคลที่ไม่ได้รับอนุญาต"
    ],
    "explanation_th": "การละเมิดความเป็นส่วนตัวคือการถูกละเมิด confidentiality โดย NIST นิยามว่าเป็นการสูญเสียการควบคุมหรือการเข้าถึงข้อมูลส่วนบุคคลโดยบุคคลที่ไม่ได้รับอนุญาต"
  },
  {
    "id": 315,
    "dom": 2,
    "question": "Which kind of document outlines the procedures ensuring that vital company systems keep running during business- disrupting events?",
    "options": [
      "Business Impact Analysis",
      "Business Impact Plan",
      "Business Continuity Plan",
      "Disaster Recovery Plan"
    ],
    "correct_idx": 2,
    "explanation": "A Business Continuity Plan (BCP) is a predetermined set of instructions describing how an organization's business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under Terms and Definitions). A Business Impact Analysis (BIA) is a method of analyzing how such disruptions can affect an organization. A Disaster Recovery Plan is used to recover systems after a major failure or disaster. The term 'Business Impact Plan' does not actually",
    "short_explanation_en": "A Business Continuity Plan (BCP) is a predetermined set of instructions describing how an organization's business processes will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under...",
    "question_th": "เอกสารประเภทใดที่ระบุขั้นตอนเพื่อให้ระบบสำคัญขององค์กรยังคงทำงานได้ในระหว่างเหตุการณ์ที่รบกวนธุรกิจ?",
    "options_th": [
      "Business Impact Analysis",
      "Business Impact Plan",
      "Business Continuity Plan",
      "Disaster Recovery Plan"
    ],
    "explanation_th": "Business Continuity Plan (BCP) คือชุดคำสั่งที่กำหนดไว้ล่วงหน้าเพื่ออธิบายว่ากระบวนการทางธุรกิจขององค์กรจะดำเนินต่อไปอย่างไรในระหว่างเหตุการณ์หยุดชะงัก"
  },
  {
    "id": 323,
    "dom": 2,
    "question": "The PRIMARY objective of a business continuity plan is:",
    "options": [
      "To regularly verify whether the organization complies with applicable regulations",
      "To sustain business operations while recovering from a disruption",
      "To assess the impact of disruption to the business",
      "To restore the business to the full last-known reliable state of operations"
    ],
    "correct_idx": 1,
    "explanation": "A Business Continuity Plan (BCP) is a predetermined set of instructions describing how the mission and business processes of an organization will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide, module 4, under Terms and Definitions). Restoring a business to its last-known reliable state of operations is the goal of a Disaster Recovery Plan (see Chapter 2 ISC2 Study Guide, module 4, under The Goal of Disaster Recovery). Assessing the github.com/ayemunhossai",
    "short_explanation_en": "A Business Continuity Plan (BCP) is a predetermined set of instructions describing how the mission and business processes of an organization will be sustained during and after a significant disruption (see Chapter 2 ISC2 Study Guide,...",
    "question_th": "วัตถุประสงค์หลักของแผนความต่อเนื่องทางธุรกิจคืออะไร?",
    "options_th": [
      "ตรวจสอบเป็นประจำว่าองค์กรปฏิบัติตามกฎระเบียบที่บังคับใช้หรือไม่",
      "รักษาการดำเนินธุรกิจในระหว่างการกู้คืนจากการหยุดชะงัก",
      "ประเมินผลกระทบของการหยุดชะงักต่อธุรกิจ",
      "กู้คืนธุรกิจให้กลับสู่สถานะที่เชื่อถือได้ล่าสุดอย่างสมบูรณ์"
    ],
    "explanation_th": "Business Continuity Plan (BCP) คือชุดคำสั่งที่กำหนดไว้ล่วงหน้าเพื่ออธิบายว่าภารกิจและกระบวนการทางธุรกิจขององค์กรจะดำเนินต่อไปอย่างไรในระหว่างและหลังเหตุการณ์หยุดชะงักสำคัญ"
  },
  {
    "id": 325,
    "dom": 2,
    "question": "When an incident occurs, which of these is not a PRIMARY responsibility of an organization's response team?",
    "options": [
      "Determining the scope of the damage caused by the incident",
      "Implementing the recovery procedures necessary to restore security and recover from any incident-related damage",
      "Determining whether any confidential information has been compromised over the course of the entire incident",
      "Communicating with top management regarding the circumstances of the cybersecurity event"
    ],
    "correct_idx": 3,
    "explanation": "While communicating with top management about the circumstances of the cybersecurity event is always important, it is not a primary responsibility of the response team. Indeed, the primary responsibility of the response team is to address github.com/ayemunhossain the immediate impact of the incident, and to restore security as quickly as possible. When an incident occurs, the primary duties of a response team include the following: Determining the scope of the damage caused by the incident, and",
    "short_explanation_en": "While communicating with top management about the circumstances of the cybersecurity event is always important, it is not a primary responsibility of the response team.",
    "question_th": "เมื่อเกิดเหตุการณ์ ข้อใดไม่ใช่ความรับผิดชอบหลักของทีมตอบสนองขององค์กร?",
    "options_th": [
      "กำหนดขอบเขตความเสียหายที่เกิดจากเหตุการณ์",
      "ดำเนินการตามขั้นตอนกู้คืนที่จำเป็นเพื่อฟื้นฟูความปลอดภัยและกู้คืนความเสียหายจากเหตุการณ์",
      "กำหนดว่าข้อมูลลับใดถูกละเมิดตลอดระยะเวลาของเหตุการณ์",
      "สื่อสารกับผู้บริหารระดับสูงเกี่ยวกับสถานการณ์ของเหตุการณ์ความปลอดภัยไซเบอร์"
    ],
    "explanation_th": "แม้การสื่อสารกับผู้บริหารระดับสูงจะสำคัญเสมอ แต่ไม่ใช่ความรับผิดชอบหลักของทีมตอบสนอง ซึ่งเน้นที่การจัดการผลกระทบทันทีและฟื้นฟูความปลอดภัยโดยเร็วที่สุด"
  },
  {
    "id": 346,
    "dom": 2,
    "question": "Which department in a company is NOT typically involved in a Disaster Recovery Plan (DRP)?",
    "options": [
      "Executive",
      "Financial",
      "Public Relations",
      "IT"
    ],
    "correct_idx": 1,
    "explanation": "Executives and Public Relations staff need to be aware of the company's Disaster Recovery Plan (DRP) to properly handle the expectations of the public, as well as of company stakeholders. IT personnel should be focused on helping businesses return to normal operations. A company's financial department is rarely involved in a disaster recovery plan, except when the issue at hand is directly connected to company finances (see Chapter 2 ISC2 Study Guide, module 3, under Components of a Disaster Rec",
    "short_explanation_en": "Executives and Public Relations staff need to be aware of the company's Disaster Recovery Plan (DRP) to properly handle the expectations of the public, as well as of company stakeholders.",
    "question_th": "แผนกใดในบริษัทที่มักไม่เกี่ยวข้องใน Disaster Recovery Plan (DRP)?",
    "options_th": [
      "ผู้บริหาร",
      "การเงิน",
      "ฝ่ายประชาสัมพันธ์",
      "IT"
    ],
    "explanation_th": "ผู้บริหารและฝ่ายประชาสัมพันธ์ต้องรับทราบ DRP เพื่อจัดการความคาดหวังของสาธารณะและผู้มีส่วนได้ส่วนเสีย ส่วนฝ่ายการเงินมักไม่ค่อยเกี่ยวข้องกับ DRP เว้นแต่ประเด็นนั้นเกี่ยวข้องกับการเงินโดยตรง"
  },
  {
    "id": 358,
    "dom": 2,
    "question": "On an Incident Response team, which role acts as the team's main link to Senior Management?",
    "options": [
      "Information security",
      "Communications and public relations",
      "Management",
      "Technical expert"
    ],
    "correct_idx": 2,
    "explanation": "On most incident response teams, members of management or organizational leadership act as a primary conduit to senior management (see ISC2 Study Guide, chapter 2, module 1). The management team member also ensures that difficult or urgent decisions can be made without escalating authority. Communications and public relations staff focus on internal and external communications that typically differ from the direct conduit to senior management. Technical and information security experts are prima",
    "short_explanation_en": "On most incident response teams, members of management or organizational leadership act as a primary conduit to senior management (see ISC2 Study Guide, chapter 2, module 1).",
    "question_th": "ในทีมตอบสนองต่อเหตุการณ์ บทบาทใดทำหน้าที่เป็นตัวเชื่อมหลักของทีมกับผู้บริหารระดับสูง?",
    "options_th": [
      "ฝ่ายความปลอดภัยสารสนเทศ",
      "ฝ่ายสื่อสารและประชาสัมพันธ์",
      "ฝ่ายบริหาร",
      "ผู้เชี่ยวชาญด้านเทคนิค"
    ],
    "explanation_th": "ในทีมตอบสนองต่อเหตุการณ์ส่วนใหญ่ สมาชิกจากฝ่ายบริหารหรือผู้นำองค์กรทำหน้าที่เป็นช่องทางหลักในการสื่อสารกับผู้บริหารระดับสูง"
  },
  {
    "id": 361,
    "dom": 2,
    "question": "Which of these is included in an SLA document?",
    "options": [
      "Instructions on data ownership and destruction",
      "Instructions to detect, respond to, and limit the consequences of a cyber-attack",
      "A plan to keep business operations going while recovering from a significant disruption",
      "A plan to prepare the organization for the continuation of critical business functions"
    ],
    "correct_idx": 0,
    "explanation": "A Service Level Agreement (SLA) is a contract between a service provider and a customer which defines the level of service that the provider will deliver. It must include instructions on data ownership and destruction in order to ensure that sensitive data is properly protected. A set of instructions or procedures to detect, respond, and limit the consequences of a cyber-attack is called an Incident Response Plan (see ISC2 Study Guide chapter 2, module 1, under The Goal of Incident Response). A",
    "short_explanation_en": "A Service Level Agreement (SLA) is a contract between a service provider and a customer which defines the level of service that the provider will deliver.",
    "question_th": "ข้อใดรวมอยู่ในเอกสาร SLA?",
    "options_th": [
      "ขั้นตอนเกี่ยวกับความเป็นเจ้าของข้อมูลและการทำลายข้อมูล",
      "ขั้นตอนตรวจจับ ตอบสนอง และจำกัดผลกระทบจากการโจมตีทางไซเบอร์",
      "แผนรักษาการดำเนินธุรกิจระหว่างการกู้คืนจากการหยุดชะงักครั้งใหญ่",
      "แผนเตรียมองค์กรสำหรับความต่อเนื่องของฟังก์ชันทางธุรกิจสำคัญ"
    ],
    "explanation_th": "SLA (Service Level Agreement) คือสัญญาระหว่างผู้ให้บริการกับลูกค้าที่กำหนดระดับการบริการ ซึ่งควรรวมถึงขั้นตอนเกี่ยวกับความเป็นเจ้าของข้อมูลและการทำลายข้อมูล"
  },
  {
    "id": 374,
    "dom": 2,
    "question": "Which of these exercises goes through a sample of an incident step-by-step, validating what each person will do?",
    "options": [
      "A simulation exercise",
      "A walk-through exercise",
      "A tabletop exercise github.com/ayemunhossain",
      "A checklist exercise"
    ],
    "correct_idx": 1,
    "explanation": "A walk-through exercise reviews each step of the incident, in order to ensure that every team member knows exactly what they should do, and how they should do it. In tabletop exercises, team members are given a scenario and asked how they would respond, as well as what tasks they believe would be relevant. A simulation exercise attempts to recreate an actual incident so as to thoroughly test responses. Checklists are essential in incident response, but aren't actually a specific type of exercise",
    "short_explanation_en": "A walk-through exercise reviews each step of the incident, in order to ensure that every team member knows exactly what they should do, and how they should do it.",
    "question_th": "แบบฝึกหัดใดที่เดินผ่านตัวอย่างเหตุการณ์ทีละขั้นตอน เพื่อตรวจสอบว่าแต่ละคนจะทำอะไร?",
    "options_th": [
      "การฝึกจำลองสถานการณ์",
      "การฝึกเดินผ่านขั้นตอน",
      "การฝึกประชุมบนโต๊ะ",
      "การฝึกตรวจสอบรายการ"
    ],
    "explanation_th": "การฝึกเดินผ่านขั้นตอนจะทบทวนแต่ละขั้นตอนของเหตุการณ์ เพื่อให้แน่ใจว่าสมาชิกทีมทุกคนรู้ว่าต้องทำอะไรและทำอย่างไร"
  },
  {
    "id": 410,
    "dom": 2,
    "question": "What does RTO (Recovery Time Objective) mean?",
    "options": [
      "The maximum amount of data acceptable to lose",
      "The maximum acceptable time after an incident to restore the system to operation",
      "The total time used for backing up all data",
      "The number of employees needed to recover the system"
    ],
    "correct_idx": 1,
    "explanation": "RTO is the maximum time an organization can tolerate before a system or process must be back in service after an outage.",
    "short_explanation_en": "RTO คือระยะเวลาสูงสุดที่องค์กรยอมรับได้ในการนำระบบหรือกระบวนการกลับมาให้บริการได้อีกครั้งหลังจากเกิดเหตุการณ์ขัดข้อง",
    "question_th": "'RTO (Recovery Time Objective)' หมายถึงอะไร?",
    "options_th": [
      "ปริมาณข้อมูลสูงสุดที่ยอมรับได้ว่าจะสูญหาย",
      "ระยะเวลาสูงสุดที่ยอมรับได้ในการกู้คืนระบบให้กลับมาใช้งานได้หลังเกิดเหตุขัดข้อง",
      "ระยะเวลาที่ใช้ในการสำรองข้อมูลทั้งหมด",
      "จำนวนพนักงานที่ต้องใช้ในการกู้คืนระบบ"
    ],
    "explanation_th": "RTO คือระยะเวลาสูงสุดที่องค์กรยอมรับได้ในการนำระบบหรือกระบวนการกลับมาให้บริการได้อีกครั้งหลังจากเกิดเหตุการณ์ขัดข้อง"
  },
  {
    "id": 411,
    "dom": 2,
    "question": "What does RPO (Recovery Point Objective) mean?",
    "options": [
      "The maximum time to recover the system",
      "The furthest point back in time to which data loss is acceptable, which determines backup frequency",
      "The number of backup servers required",
      "The budget for the recovery plan"
    ],
    "correct_idx": 1,
    "explanation": "RPO is the maximum acceptable amount of data loss measured in time — e.g., an RPO of 4 hours means backups must run at least every 4 hours.",
    "short_explanation_en": "RPO คือระยะเวลาย้อนหลังสูงสุดของข้อมูลที่องค์กรยอมรับได้ว่าจะสูญหาย เช่น หาก RPO คือ 4 ชั่วโมง หมายความว่าต้องสำรองข้อมูลอย่างน้อยทุก 4 ชั่วโมง",
    "question_th": "'RPO (Recovery Point Objective)' หมายถึงอะไร?",
    "options_th": [
      "ระยะเวลาสูงสุดในการกู้คืนระบบ",
      "จุดเวลาย้อนหลังสูงสุดที่ยอมรับได้สำหรับข้อมูลที่อาจสูญหาย ซึ่งกำหนดความถี่ในการสำรองข้อมูล",
      "จำนวนเซิร์ฟเวอร์สำรองที่ต้องมี",
      "งบประมาณสำหรับแผนกู้คืนระบบ"
    ],
    "explanation_th": "RPO คือระยะเวลาย้อนหลังสูงสุดของข้อมูลที่องค์กรยอมรับได้ว่าจะสูญหาย เช่น หาก RPO คือ 4 ชั่วโมง หมายความว่าต้องสำรองข้อมูลอย่างน้อยทุก 4 ชั่วโมง"
  },
  {
    "id": 412,
    "dom": 2,
    "question": "How does a Business Continuity Plan (BCP) differ from a Disaster Recovery Plan (DRP)?",
    "options": [
      "BCP focuses only on restoring IT systems while DRP focuses on overall business processes",
      "BCP focuses on keeping overall business processes running while DRP focuses specifically on restoring IT systems and technical infrastructure",
      "Both plans are fully interchangeable in every case",
      "DRP applies only to natural disasters"
    ],
    "correct_idx": 1,
    "explanation": "BCP is the overarching plan covering business continuity as a whole, while DRP is a subset of BCP focused specifically on restoring IT systems and infrastructure.",
    "short_explanation_en": "BCP เป็นแผนภาพรวมที่ครอบคลุมการดำเนินธุรกิจต่อเนื่องทุกด้าน ในขณะที่ DRP เป็นส่วนย่อยของ BCP ที่มุ่งเน้นเฉพาะการกู้คืนระบบเทคโนโลยีสารสนเทศและโครงสร้างพื้นฐาน",
    "question_th": "แผน Business Continuity Plan (BCP) แตกต่างจาก Disaster Recovery Plan (DRP) อย่างไร?",
    "options_th": [
      "BCP มุ่งเน้นการฟื้นฟูระบบ IT เท่านั้น ส่วน DRP มุ่งเน้นกระบวนการทางธุรกิจโดยรวม",
      "BCP มุ่งเน้นให้กระบวนการทางธุรกิจดำเนินต่อไปได้ในภาพรวม ส่วน DRP มุ่งเน้นการกู้คืนระบบ IT และโครงสร้างพื้นฐานเทคนิคโดยเฉพาะ",
      "ทั้งสองแผนใช้แทนกันได้ทุกกรณี",
      "DRP ใช้เฉพาะภัยธรรมชาติเท่านั้น"
    ],
    "explanation_th": "BCP เป็นแผนภาพรวมที่ครอบคลุมการดำเนินธุรกิจต่อเนื่องทุกด้าน ในขณะที่ DRP เป็นส่วนย่อยของ BCP ที่มุ่งเน้นเฉพาะการกู้คืนระบบเทคโนโลยีสารสนเทศและโครงสร้างพื้นฐาน"
  },
  {
    "id": 413,
    "dom": 2,
    "question": "Which backup type captures only data changed since the last Full Backup (ignoring any prior Incremental backups)?",
    "options": [
      "Full Backup",
      "Incremental Backup",
      "Differential Backup",
      "Mirror Backup"
    ],
    "correct_idx": 2,
    "explanation": "A Differential Backup captures all changes made since the last Full Backup, unlike Incremental, which only captures changes since the most recent backup of any type.",
    "short_explanation_en": "Differential Backup สำรองข้อมูลทั้งหมดที่เปลี่ยนแปลงนับจาก Full Backup ครั้งล่าสุด ต่างจาก Incremental ที่สำรองเฉพาะการเปลี่ยนแปลงตั้งแต่การสำรองครั้งก่อนหน้า (ไม่ว่าจะเป็น Full หรือ Incremental)",
    "question_th": "Backup แบบใดที่สำรองเฉพาะข้อมูลที่เปลี่ยนแปลงนับตั้งแต่การทำ Full Backup ครั้งล่าสุด (ไม่สนใจ Incremental ก่อนหน้า)?",
    "options_th": [
      "Full Backup",
      "Incremental Backup",
      "Differential Backup",
      "Mirror Backup"
    ],
    "explanation_th": "Differential Backup สำรองข้อมูลทั้งหมดที่เปลี่ยนแปลงนับจาก Full Backup ครั้งล่าสุด ต่างจาก Incremental ที่สำรองเฉพาะการเปลี่ยนแปลงตั้งแต่การสำรองครั้งก่อนหน้า (ไม่ว่าจะเป็น Full หรือ Incremental)"
  },
  {
    "id": 414,
    "dom": 2,
    "question": "What is the first step in the standard Incident Response Lifecycle?",
    "options": [
      "Eradication",
      "Containment",
      "Preparation",
      "Recovery"
    ],
    "correct_idx": 2,
    "explanation": "The standard Incident Response lifecycle (e.g., NIST) consists of Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned — Preparation is the first step.",
    "short_explanation_en": "วงจร Incident Response มาตรฐาน (เช่นของ NIST) ประกอบด้วย Preparation, Detection & Analysis, Containment, Eradication, Recovery และ Lessons Learned โดย Preparation คือขั้นตอนแรกที่ต้องเตรียมความพร้อมก่อนเกิดเหตุ",
    "question_th": "ขั้นตอนแรกในวงจรการตอบสนองต่อเหตุการณ์ (Incident Response Lifecycle) ตามมาตรฐานทั่วไปคืออะไร?",
    "options_th": [
      "Eradication",
      "Containment",
      "Preparation",
      "Recovery"
    ],
    "explanation_th": "วงจร Incident Response มาตรฐาน (เช่นของ NIST) ประกอบด้วย Preparation, Detection & Analysis, Containment, Eradication, Recovery และ Lessons Learned โดย Preparation คือขั้นตอนแรกที่ต้องเตรียมความพร้อมก่อนเกิดเหตุ"
  },
  {
    "id": 415,
    "dom": 2,
    "question": "What is the purpose of the 'Containment' step in incident response?",
    "options": [
      "Permanently remove the cause of the incident from the system",
      "Limit the scope of damage from spreading further",
      "Analyze the true root cause of the incident",
      "Document lessons learned after the incident"
    ],
    "correct_idx": 1,
    "explanation": "Containment limits the scope of an incident to prevent it from spreading or causing further damage, such as disconnecting an infected machine from the network.",
    "short_explanation_en": "Containment คือการจำกัดขอบเขตของเหตุการณ์ไม่ให้ลุกลามหรือสร้างความเสียหายเพิ่มเติม เช่น การตัดการเชื่อมต่อเครื่องที่ติดมัลแวร์ออกจากเครือข่าย",
    "question_th": "ขั้นตอน 'Containment' ในการตอบสนองเหตุการณ์มีวัตถุประสงค์เพื่ออะไร?",
    "options_th": [
      "กำจัดสาเหตุของเหตุการณ์ออกจากระบบอย่างถาวร",
      "จำกัดขอบเขตความเสียหายไม่ให้ลุกลามต่อไป",
      "วิเคราะห์สาเหตุที่แท้จริงของเหตุการณ์",
      "บันทึกบทเรียนหลังเหตุการณ์"
    ],
    "explanation_th": "Containment คือการจำกัดขอบเขตของเหตุการณ์ไม่ให้ลุกลามหรือสร้างความเสียหายเพิ่มเติม เช่น การตัดการเชื่อมต่อเครื่องที่ติดมัลแวร์ออกจากเครือข่าย"
  },
  {
    "id": 416,
    "dom": 2,
    "question": "Which type of backup site has equipment and systems ready almost instantly, requiring only a data sync to become operational quickly?",
    "options": [
      "Cold Site",
      "Warm Site",
      "Hot Site",
      "Mobile Site"
    ],
    "correct_idx": 2,
    "explanation": "A Hot Site has hardware, software, and data ready in near real-time, allowing the fastest recovery compared to Warm and Cold sites.",
    "short_explanation_en": "Hot Site คือไซต์สำรองที่มีฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูลพร้อมใช้งานเกือบเรียลไทม์ ทำให้สามารถกู้คืนระบบได้รวดเร็วที่สุดเมื่อเทียบกับ Warm Site และ Cold Site แต่มีค่าใช้จ่ายสูงที่สุด",
    "question_th": "ไซต์สำรองประเภทใดที่มีอุปกรณ์และระบบพร้อมใช้งานเกือบทันที เพียงแค่ซิงค์ข้อมูลล่าสุดก็สามารถเปิดใช้งานได้ภายในเวลาอันสั้น?",
    "options_th": [
      "Cold Site",
      "Warm Site",
      "Hot Site",
      "Mobile Site"
    ],
    "explanation_th": "Hot Site คือไซต์สำรองที่มีฮาร์ดแวร์ ซอฟต์แวร์ และข้อมูลพร้อมใช้งานเกือบเรียลไทม์ ทำให้สามารถกู้คืนระบบได้รวดเร็วที่สุดเมื่อเทียบกับ Warm Site และ Cold Site แต่มีค่าใช้จ่ายสูงที่สุด"
  },
  {
    "id": 417,
    "dom": 2,
    "question": "What is a 'Tabletop Exercise' in BC/DR plan testing?",
    "options": [
      "A full real-world simulation that halts actual operations",
      "A discussion-based meeting simulating a scenario without disrupting live systems, to review plan steps",
      "Testing full data restoration from actual backups",
      "Sending staff to train at the actual backup site"
    ],
    "correct_idx": 1,
    "explanation": "A Tabletop Exercise is a discussion-based test among team members that simulates a scenario without impacting live systems, used to review understanding of roles and plan steps.",
    "short_explanation_en": "Tabletop Exercise เป็นการทดสอบแผนแบบพูดคุยหารือระหว่างทีมงาน จำลองสถานการณ์สมมติโดยไม่กระทบระบบจริง ใช้เพื่อทบทวนความเข้าใจในบทบาทหน้าที่และขั้นตอนของแผน",
    "question_th": "'Tabletop Exercise' ในการทดสอบแผน BC/DR คืออะไร?",
    "options_th": [
      "การจำลองสถานการณ์จริงโดยหยุดระบบการทำงานจริง",
      "การประชุมพูดคุยจำลองสถานการณ์บนโต๊ะโดยไม่ต้องหยุดระบบจริง เพื่อทบทวนขั้นตอนตามแผน",
      "การทดสอบกู้คืนข้อมูลจากแบ็กอัพจริงทั้งหมด",
      "การส่งพนักงานไปฝึกที่ไซต์สำรองจริง"
    ],
    "explanation_th": "Tabletop Exercise เป็นการทดสอบแผนแบบพูดคุยหารือระหว่างทีมงาน จำลองสถานการณ์สมมติโดยไม่กระทบระบบจริง ใช้เพื่อทบทวนความเข้าใจในบทบาทหน้าที่และขั้นตอนของแผน"
  },
  {
    "id": 418,
    "dom": 2,
    "question": "After a security incident has ended, which step should be taken to prevent it from recurring in the future?",
    "options": [
      "Identification",
      "Lessons Learned / Post-Incident Review",
      "Detection",
      "Containment"
    ],
    "correct_idx": 1,
    "explanation": "Lessons Learned (or Post-Incident Review) is the final step where the team reviews the incident, analyzes gaps, and improves processes to prevent recurrence.",
    "short_explanation_en": "Lessons Learned (หรือ Post-Incident Review) เป็นขั้นตอนสุดท้ายที่ทีมงานทบทวนเหตุการณ์ที่เกิดขึ้น วิเคราะห์จุดบกพร่อง และปรับปรุงกระบวนการเพื่อป้องกันไม่ให้เกิดซ้ำ",
    "question_th": "หลังจากเหตุการณ์ด้านความปลอดภัยสิ้นสุดลง ขั้นตอนใดที่ควรทำเพื่อป้องกันไม่ให้เกิดเหตุการณ์ซ้ำในอนาคต?",
    "options_th": [
      "Identification",
      "Lessons Learned / Post-Incident Review",
      "Detection",
      "Containment"
    ],
    "explanation_th": "Lessons Learned (หรือ Post-Incident Review) เป็นขั้นตอนสุดท้ายที่ทีมงานทบทวนเหตุการณ์ที่เกิดขึ้น วิเคราะห์จุดบกพร่อง และปรับปรุงกระบวนการเพื่อป้องกันไม่ให้เกิดซ้ำ"
  },
  {
    "id": 419,
    "dom": 2,
    "question": "What is the primary purpose of a 'Business Impact Analysis (BIA)'?",
    "options": [
      "Identify and assess potential business impact if critical processes are disrupted, to prioritize recovery",
      "Write malware protection code",
      "Install new firewalls",
      "Train all new employees"
    ],
    "correct_idx": 0,
    "explanation": "BIA is the analytical process of identifying critical business processes, assessing the impact of disruption, and using results to set RTO/RPO and BC/DR plan priorities.",
    "short_explanation_en": "BIA คือกระบวนการวิเคราะห์เพื่อระบุกระบวนการทางธุรกิจที่สำคัญ ประเมินผลกระทบหากหยุดชะงัก และใช้ผลลัพธ์นี้ในการกำหนด RTO/RPO และลำดับความสำคัญของแผน BC/DR",
    "question_th": "'Business Impact Analysis (BIA)' มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options_th": [
      "ระบุและประเมินผลกระทบทางธุรกิจที่อาจเกิดขึ้นหากกระบวนการสำคัญหยุดชะงัก เพื่อกำหนดลำดับความสำคัญในการกู้คืน",
      "เขียนโค้ดป้องกันมัลแวร์",
      "ติดตั้งไฟร์วอลล์ใหม่",
      "ฝึกอบรมพนักงานใหม่ทุกคน"
    ],
    "explanation_th": "BIA คือกระบวนการวิเคราะห์เพื่อระบุกระบวนการทางธุรกิจที่สำคัญ ประเมินผลกระทบหากหยุดชะงัก และใช้ผลลัพธ์นี้ในการกำหนด RTO/RPO และลำดับความสำคัญของแผน BC/DR"
  },
  {
    "id": 496,
    "dom": 2,
    "question": "Which document identifies an organization's critical business functions and the impact of their disruption over time?",
    "options": [
      "Incident Response Plan (IRP)",
      "Business Continuity Plan (BCP)",
      "Business Impact Analysis (BIA)",
      "Disaster Recovery Plan (DRP)"
    ],
    "correct_idx": 2,
    "explanation": "A Business Impact Analysis (BIA) identifies an organization's critical business functions and assesses the impact of their disruption over time.",
    "short_explanation_en": "Business Impact Analysis (BIA) คือกระบวนการวิเคราะห์เพื่อระบุฟังก์ชันทางธุรกิจที่สำคัญ และประเมินผลกระทบที่จะเกิดขึ้นหากฟังก์ชันเหล่านั้นหยุดชะงักไปตามระยะเวลา ผลลัพธ์จาก BIA ใช้เป็นพื้นฐานในการจัดทำ BCP และ DRP ต่อไป",
    "question_th": "เอกสารใดระบุฟังก์ชันทางธุรกิจที่สำคัญขององค์กรและผลกระทบจากการหยุดชะงักตามช่วงเวลา?",
    "options_th": [
      "Incident Response Plan (IRP)",
      "Business Continuity Plan (BCP)",
      "Business Impact Analysis (BIA)",
      "Disaster Recovery Plan (DRP)"
    ],
    "explanation_th": "Business Impact Analysis (BIA) คือกระบวนการวิเคราะห์เพื่อระบุฟังก์ชันทางธุรกิจที่สำคัญ และประเมินผลกระทบที่จะเกิดขึ้นหากฟังก์ชันเหล่านั้นหยุดชะงักไปตามช่วงเวลา"
  },
  {
    "id": 497,
    "dom": 2,
    "question": "What does Recovery Time Objective (RTO) measure?",
    "options": [
      "The total cost of a disaster recovery solution",
      "The time needed to train staff on the recovery plan",
      "The maximum acceptable amount of data loss measured in time",
      "The maximum acceptable time a system or process can be down before causing unacceptable harm"
    ],
    "correct_idx": 3,
    "explanation": "RTO measures the maximum acceptable time a system or process can be down before causing unacceptable harm to the organization.",
    "short_explanation_en": "RTO (Recovery Time Objective) คือระยะเวลาสูงสุดที่ระบบหรือกระบวนการสามารถหยุดทำงานได้ก่อนที่จะสร้างความเสียหายที่ยอมรับไม่ได้ต่อองค์กร ส่วน RPO (Recovery Point Objective) วัดปริมาณข้อมูลสูงสุดที่ยอมรับได้ว่าจะสูญหายไป โดยวัดเป็นระยะเวลา",
    "question_th": "Recovery Time Objective (RTO) วัดอะไร?",
    "options_th": [
      "ต้นทุนรวมของโซลูชัน disaster recovery",
      "ระยะเวลาที่ใช้ฝึกอบรมพนักงานเกี่ยวกับแผนกู้คืน",
      "ปริมาณข้อมูลสูญเสียสูงสุดที่ยอมรับได้ วัดเป็นเวลา",
      "ระยะเวลาสูงสุดที่ยอมรับได้ที่ระบบหรือกระบวนการหยุดทำงานก่อนก่อให้เกิดความเสียหายที่ยอมรับไม่ได้"
    ],
    "explanation_th": "RTO (Recovery Time Objective) คือระยะเวลาสูงสุดที่ระบบหรือกระบวนการสามารถหยุดทำงานได้ก่อนที่จะสร้างความเสียหายที่ยอมรับไม่ได้ต่อองค์กร"
  },
  {
    "id": 498,
    "dom": 2,
    "question": "A company's RPO is 1 hour. What does this mean for the organization's backup strategy?",
    "options": [
      "Backups must run at least every hour so that no more than 1 hour of data is lost",
      "The system must be restored within 1 hour of an outage",
      "Staff must be trained on recovery procedures within 1 hour",
      "The company can tolerate up to 1 hour of downtime per year"
    ],
    "correct_idx": 0,
    "explanation": "An RPO of 1 hour means backups must run at least every hour, so that no more than 1 hour of data would be lost in the event of an outage.",
    "short_explanation_en": "RPO 1 ชั่วโมง หมายความว่าองค์กรยอมรับการสูญเสียข้อมูลได้ไม่เกิน 1 ชั่วโมง ดังนั้นต้องมีการสำรองข้อมูล (backup) อย่างน้อยทุก 1 ชั่วโมง เพื่อให้แน่ใจว่าหากเกิดเหตุขัดข้อง ข้อมูลที่สูญหายจะไม่เกินกรอบเวลาที่กำหนดไว้",
    "question_th": "RPO ของบริษัทคือ 1 ชั่วโมง สิ่งนี้หมายความว่าอย่างไรต่อกลยุทธ์การสำรองข้อมูลขององค์กร?",
    "options_th": [
      "ต้องสำรองข้อมูลอย่างน้อยทุกชั่วโมง เพื่อไม่ให้สูญเสียข้อมูลเกิน 1 ชั่วโมง",
      "ต้องกู้คืนระบบภายใน 1 ชั่วโมงหลังเกิดเหตุขัดข้อง",
      "ต้องฝึกอบรมพนักงานเกี่ยวกับขั้นตอนการกู้คืนภายใน 1 ชั่วโมง",
      "บริษัทสามารถทนต่อการหยุดทำงานได้สูงสุด 1 ชั่วโมงต่อปี"
    ],
    "explanation_th": "RPO 1 ชั่วโมง หมายความว่าองค์กรยอมรับการสูญเสียข้อมูลได้ไม่เกิน 1 ชั่วโมง ดังนั้นต้องมีการสำรองข้อมูล (backup) อย่างน้อยทุก 1 ชั่วโมง"
  },
  {
    "id": 499,
    "dom": 2,
    "question": "Which disaster recovery site option has hardware and network connectivity pre-installed but requires data to be restored and systems configured before becoming operational?",
    "options": [
      "Mobile site",
      "Warm site",
      "Cold site",
      "Hot site"
    ],
    "correct_idx": 1,
    "explanation": "A Warm site has hardware and network connectivity pre-installed, but data must still be restored and systems configured before it becomes fully operational.",
    "short_explanation_en": "Warm Site คือศูนย์สำรองที่มีการติดตั้งฮาร์ดแวร์และการเชื่อมต่อเครือข่ายไว้ล่วงหน้าแล้ว แต่ยังต้องกู้คืนข้อมูลและตั้งค่าระบบก่อนจึงจะใช้งานได้จริง ต่างจาก Hot Site ที่พร้อมใช้งานทันที และ Cold Site...",
    "question_th": "ตัวเลือกไซต์ Disaster Recovery ใดที่มีฮาร์ดแวร์และการเชื่อมต่อเครือข่ายติดตั้งไว้ล่วงหน้า แต่ยังต้องกู้คืนข้อมูลและตั้งค่าระบบก่อนจึงจะใช้งานได้?",
    "options_th": [
      "Mobile site",
      "Warm site",
      "Cold site",
      "Hot site"
    ],
    "explanation_th": "Warm Site คือศูนย์สำรองที่มีการติดตั้งฮาร์ดแวร์และการเชื่อมต่อเครือข่ายไว้ล่วงหน้าแล้ว แต่ยังต้องกู้คืนข้อมูลและตั้งค่าระบบก่อนจึงจะใช้งานได้จริง"
  },
  {
    "id": 500,
    "dom": 2,
    "question": "During an active security incident, which phase of the incident response process focuses on limiting the scope and impact of the incident?",
    "options": [
      "Preparation",
      "Lessons Learned",
      "Identification",
      "Containment (Mitigation)"
    ],
    "correct_idx": 3,
    "explanation": "The Containment (Mitigation) phase focuses on limiting the scope and impact of an active incident, such as disconnecting an infected machine from the network.",
    "short_explanation_en": "ขั้นตอน Containment หรือ Mitigation คือการจำกัดขอบเขตและผลกระทบของเหตุการณ์ไม่ให้ลุกลามต่อไป เช่น การตัดการเชื่อมต่อเครื่องที่ติดมัลแวร์ออกจากเครือข่าย ซึ่งเกิดขึ้นหลังจากตรวจพบเหตุการณ์ (Identification) แต่ก่อนขั้นตอนการกำจัดสาเหตุ...",
    "question_th": "ในระหว่างเหตุการณ์ความปลอดภัยที่กำลังเกิดขึ้น ขั้นตอนใดของกระบวนการตอบสนองต่อเหตุการณ์ที่เน้นการจำกัดขอบเขตและผลกระทบของเหตุการณ์?",
    "options_th": [
      "Preparation",
      "Lessons Learned",
      "Identification",
      "Containment (Mitigation)"
    ],
    "explanation_th": "ขั้นตอน Containment หรือ Mitigation คือการจำกัดขอบเขตและผลกระทบของเหตุการณ์ไม่ให้ลุกลามต่อไป เช่น การตัดการเชื่อมต่อเครื่องที่ติดมัลแวร์ออกจากเครือข่าย"
  },
  {
    "id": 501,
    "dom": 2,
    "question": "After an incident has been fully resolved and systems restored, which activity helps the organization improve its future response capability?",
    "options": [
      "Immediately deleting all incident-related logs",
      "Disabling the incident response team",
      "Conducting a lessons-learned (post-incident) review",
      "Notifying only senior executives"
    ],
    "correct_idx": 2,
    "explanation": "Conducting a lessons-learned (post-incident) review is the final step of incident response, where the team analyzes what happened and how to improve future response.",
    "short_explanation_en": "การทบทวนบทเรียนหลังเหตุการณ์ (Lessons Learned / Post-Incident Review) เป็นขั้นตอนสุดท้ายของกระบวนการตอบสนองเหตุการณ์ โดยทีมงานจะวิเคราะห์ว่าเกิดอะไรขึ้น รับมืออย่างไร และจะปรับปรุงกระบวนการอย่างไรในอนาคต...",
    "question_th": "หลังจากเหตุการณ์ได้รับการแก้ไขอย่างสมบูรณ์และระบบถูกกู้คืนแล้ว กิจกรรมใดช่วยให้องค์กรพัฒนาความสามารถในการตอบสนองในอนาคต?",
    "options_th": [
      "ลบบันทึกที่เกี่ยวข้องกับเหตุการณ์ทั้งหมดทันที",
      "ยุบทีมตอบสนองต่อเหตุการณ์",
      "ทำการทบทวนบทเรียนที่ได้ (post-incident review)",
      "แจ้งเฉพาะผู้บริหารระดับสูงเท่านั้น"
    ],
    "explanation_th": "การทบทวนบทเรียนหลังเหตุการณ์ (Lessons Learned / Post-Incident Review) เป็นขั้นตอนสุดท้ายของกระบวนการตอบสนองเหตุการณ์ โดยทีมงานจะวิเคราะห์ว่าเกิดอะไรขึ้นและจะปรับปรุงการตอบสนองในอนาคตอย่างไร"
  }
];

export default questions;
