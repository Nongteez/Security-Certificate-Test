/** Display-only information. Outline details supplied by the user; never used by the quiz engine. */
import existingOutline from './certs/isc2/cc/versions/2026/exam.config.js';

const text = (en, th, children = []) => ({ en, th, ...(children.length ? { children } : {}) });
const objective = (code, en, th, topics) => ({ code, title: text(en, th), topics });

export const informationLabels = {
  view: { en: 'View exam version information', th: 'ดูข้อมูลเวอร์ชันข้อสอบ' },
  close: { en: 'Close', th: 'ปิด' },
  topics: text('Updated outline topics include', 'หัวข้อในโครงร่างข้อสอบฉบับปรับปรุง'),
  overview: text('Version Overview', 'ภาพรวมเวอร์ชัน'),
  bankSummary: text('Question Bank Summary', 'สรุปคลังคำถาม'),
  counts: text('Domain Question Counts', 'จำนวนคำถามแยกตามโดเมน'),
  notes: text('Version Notes', 'หมายเหตุเกี่ยวกับเวอร์ชัน'),
  weights: text('Domain Overview and Weights', 'ภาพรวมโดเมนและน้ำหนัก'),
  details: text('Detailed Learning Objectives', 'วัตถุประสงค์การเรียนรู้โดยละเอียด'),
  ai: text('AI Security Across Domains', 'ความปลอดภัยของ AI ในทุกโดเมน'),
  exam: text('Official Exam Information', 'ข้อมูลการสอบอย่างเป็นทางการ'),
  source: text('Source and Disclaimer', 'แหล่งข้อมูลและข้อจำกัด'),
  domain: text('Domain', 'โดเมน'),
  name: text('Domain Name', 'ชื่อโดเมน'),
  practiceQuestions: text('Practice Questions', 'จำนวนข้อสอบฝึกหัด'),
  weight: text('Weight', 'น้ำหนัก'),
  total: text('Total', 'รวม'),
  officialTotal: text('Total (officially stated)', 'รวมตามที่ระบุอย่างเป็นทางการ'),
  coverage: text('Confirmed Topic Coverage', 'หัวข้อที่ยืนยันจากเอกสารอ้างอิง'),
  aiCoverage: text('AI-related Coverage', 'เนื้อหาที่เกี่ยวข้องกับ AI'),
  item: text('Item', 'รายการ'),
  value: text('Value', 'รายละเอียด'),
  available: text('Available', 'พร้อมใช้งาน')
};

const information = {
  '2026': {
    titleTh: 'ISC2 CC — โครงร่างข้อสอบก่อนปี 2026',
    description: {
      en: 'This is the existing SEC CERT TEST practice question bank based on the previous ISC2 CC exam domain structure, before the September 1, 2026 update.',
      th: 'นี่คือคลังคำถามฝึกหัด SEC CERT TEST ที่มีอยู่เดิม ซึ่งอ้างอิงโครงสร้างโดเมนข้อสอบ ISC2 CC ฉบับก่อนการปรับปรุงวันที่ 1 กันยายน 2026'
    },
    domainHeading: { en: 'SEC CERT TEST practice-question counts', th: 'จำนวนข้อสอบฝึกหัดในคลัง SEC CERT TEST' },
    // Read existing metadata without changing its counts, translations or domain mapping.
    domains: existingOutline.domains.map(domain => ({ id: domain.id, name: domain.name, questionCount: domain.questionCount })),
    totalQuestions: existingOutline.totalQuestions,
    bankSummary: text('This bank remains available for practicing the previous exam structure.', 'คลังนี้ยังพร้อมให้ใช้ฝึกฝนตามโครงสร้างข้อสอบฉบับก่อนหน้า'),
    notice: {
      en: 'These counts represent questions available in SEC CERT TEST, not official ISC2 exam domain weights. This bank follows the previous exam outline and has not been updated to the September 2026 domain structure. It is not presented as the current official ISC2 exam outline.',
      th: 'จำนวนเหล่านี้คือคำถามที่มีให้ฝึกฝนใน SEC CERT TEST ไม่ใช่น้ำหนักโดเมนข้อสอบอย่างเป็นทางการของ ISC2 คลังนี้อ้างอิงโครงร่างข้อสอบฉบับก่อนหน้าและยังไม่ได้ปรับปรุงตามโครงสร้างโดเมนเดือนกันยายน 2026 จึงไม่ได้นำเสนอว่าเป็นโครงร่างข้อสอบอย่างเป็นทางการฉบับปัจจุบัน'
    }
  },
  'next-bank': {
    titleTh: 'ISC2 CC — โครงร่างข้อสอบปี 2026',
    effectiveDate: { en: 'Effective date: September 1, 2026', th: 'มีผลบังคับใช้: 1 กันยายน 2026' },
    description: {
      en: 'This version follows the updated ISC2 Certified in Cybersecurity exam outline effective September 1, 2026. The revised outline reorganizes the five domains and integrates foundational AI security concepts across all domains.',
      th: 'เวอร์ชันนี้อ้างอิงโครงร่างข้อสอบ ISC2 Certified in Cybersecurity ฉบับปรับปรุงที่มีผลวันที่ 1 กันยายน 2026 โดยจัดโครงสร้างทั้งห้าโดเมนใหม่และบูรณาการแนวคิดพื้นฐานด้านความปลอดภัยของ AI ในทุกโดเมน'
    },
    domainHeading: { en: 'Official exam domains and weights', th: 'โดเมนข้อสอบและน้ำหนักอย่างเป็นทางการ' },
    domains: [
      { name: { en: 'Security Principles', th: 'หลักการความปลอดภัย' }, weight: '24%' },
      { name: { en: 'Security Governance', th: 'การกำกับดูแลด้านความปลอดภัย' }, weight: '17.3%' },
      { name: { en: 'Identity and Access Management (IAM) Concepts', th: 'แนวคิดการจัดการตัวตนและการเข้าถึง (IAM)' }, weight: '20%' },
      { name: { en: 'Networking and Cloud Security Concepts', th: 'แนวคิดความปลอดภัยของเครือข่ายและคลาวด์' }, weight: '21.3%' },
      { name: { en: 'Security Operations and Incident Response', th: 'การปฏิบัติการด้านความปลอดภัยและการตอบสนองต่อเหตุการณ์' }, weight: '17.3%' }
    ].map((domain, index) => ({ id: index + 1, ...domain })),
    bankNotice: text('The SEC CERT TEST question bank for this version has not yet been imported.', 'คลังคำถาม SEC CERT TEST สำหรับเวอร์ชันนี้ยังไม่ได้ถูกนำเข้า'),
    roundingNote: text('Individual displayed weights are rounded and sum to 99.9%; the officially stated total is 100%. These are official exam content weights, not question bank counts. Published values are retained without adjustment.', 'น้ำหนักแต่ละโดเมนที่แสดงเป็นค่าปัดเศษและรวมกันได้ 99.9% โดยยอดรวมที่ระบุอย่างเป็นทางการคือ 100% ตัวเลขนี้คือน้ำหนักเนื้อหาข้อสอบ ไม่ใช่จำนวนคำถามในคลัง และคงค่าที่เผยแพร่ไว้โดยไม่ปรับแก้'),
    details: [
      { id: 1, objectives: [
        objective('1.1', 'Understand cybersecurity concepts', 'เข้าใจแนวคิดด้านความมั่นคงปลอดภัยไซเบอร์', [
          text('Confidentiality', 'การรักษาความลับ'), text('Integrity', 'ความถูกต้องครบถ้วน'), text('Availability', 'ความพร้อมใช้งาน'),
          text('Authentication, Authorization, Accounting (AAA)', 'การยืนยันตัวตน การกำหนดสิทธิ์ และการบันทึกการใช้งาน (AAA)'), text('Non-repudiation', 'การปฏิเสธความรับผิดไม่ได้'), text('Privacy', 'ความเป็นส่วนตัว')
        ]),
        objective('1.2', 'Understand risk management concepts', 'เข้าใจแนวคิดการบริหารความเสี่ยง', [text('Risk management lifecycle', 'วงจรชีวิตการบริหารความเสี่ยง'), text('Risk management processes', 'กระบวนการบริหารความเสี่ยง')]),
        objective('1.3', 'Understand governance concepts', 'เข้าใจแนวคิดการกำกับดูแล', [text('Regulations and laws', 'ข้อบังคับและกฎหมาย'), text('Frameworks and guidelines', 'กรอบการดำเนินงานและแนวทาง'), text('Policies, standards (ISO, CIS), procedures', 'นโยบาย มาตรฐาน (ISO, CIS) และขั้นตอนปฏิบัติ')]),
        objective('1.4', 'Understand cybersecurity controls', 'เข้าใจมาตรการควบคุมความปลอดภัยไซเบอร์', [text('Technical controls', 'มาตรการควบคุมทางเทคนิค'), text('Administrative controls', 'มาตรการควบคุมด้านการบริหาร'), text('Physical controls', 'มาตรการควบคุมทางกายภาพ')]),
        objective('1.5', 'Maintain professional and ethical conduct', 'รักษาการปฏิบัติตนตามวิชาชีพและจริยธรรม', [text('Professional code of conduct', 'จรรยาบรรณวิชาชีพ'), text('Due care and due diligence', 'ความระมัดระวังและการตรวจสอบอย่างรอบคอบ (Due care / Due diligence)'), text('ISC2 Code of Ethics', 'ประมวลจริยธรรมของ ISC2')])
      ] },
      { id: 2, objectives: [
        objective('2.1', 'Plan Governance, Risk, and Compliance (GRC)', 'วางแผนการกำกับดูแล ความเสี่ยง และการปฏิบัติตามข้อกำหนด (GRC)', [text('Purpose', 'วัตถุประสงค์'), text('Importance', 'ความสำคัญ'), text('Frameworks and tools', 'กรอบการดำเนินงานและเครื่องมือ')]),
        objective('2.2', 'Understand redundancy', 'เข้าใจการจัดให้มีระบบหรือทรัพยากรสำรอง', [text('Business Continuity (BC)', 'ความต่อเนื่องทางธุรกิจ (BC)'), text('Disaster Recovery (DR)', 'การกู้คืนจากภัยพิบัติ (DR)')]),
        objective('2.3', 'Understand security awareness', 'เข้าใจความตระหนักด้านความปลอดภัย', [text('Organizational culture (security leadership, importance of security)', 'วัฒนธรรมองค์กร (ภาวะผู้นำและความสำคัญด้านความปลอดภัย)'), text('Social engineering', 'วิศวกรรมสังคม'), text('Password protection', 'การปกป้องรหัสผ่าน'), text('Phishing', 'การหลอกลวงแบบฟิชชิง')]),
        objective('2.4', 'Measure cybersecurity effectiveness', 'วัดประสิทธิผลของความปลอดภัยไซเบอร์', [text('Key metrics', 'ตัวชี้วัดสำคัญ'), text('Key Risk Indicators (KRI)', 'ตัวชี้วัดความเสี่ยงสำคัญ (KRI)'), text('Dashboards', 'แดชบอร์ด'), text('Scorecards', 'ตารางสรุปผลการประเมิน'), text('Reports', 'รายงาน')])
      ] },
      { id: 3, objectives: [
        objective('3.1', 'Understand identity life cycle management', 'เข้าใจการจัดการวงจรชีวิตของตัวตน', [text('Roles definition', 'การกำหนดบทบาท'), text('Provision', 'การจัดเตรียมบัญชีและสิทธิ์'), text('Review', 'การทบทวน'), text('Deprovision', 'การยกเลิกบัญชีและสิทธิ์'), text('Frameworks and tools', 'กรอบการดำเนินงานและเครื่องมือ')]),
        objective('3.2', 'Understand logical access controls', 'เข้าใจการควบคุมการเข้าถึงเชิงตรรกะ', [text('Principle of Least Privilege (PoLP)', 'หลักการให้สิทธิ์เท่าที่จำเป็น (PoLP)'), text('Separation of Duties (SoD)', 'การแบ่งแยกหน้าที่ (SoD)'), text('Access control models', 'แบบจำลองการควบคุมการเข้าถึง')])
      ] },
      { id: 4, coverage: [
        text('Computer Networking', 'เครือข่ายคอมพิวเตอร์', [text('OSI Model', 'แบบจำลอง OSI'), text('TCP/IP Model', 'แบบจำลอง TCP/IP'), text('IPv4 / IPv6', 'IPv4 / IPv6'), text('VPN', 'VPN')]),
        text('Network Threats and Prevention', 'ภัยคุกคามเครือข่ายและการป้องกัน', [text('Firewalls', 'ไฟร์วอลล์'), text('Intrusion Detection Systems (IDS)', 'ระบบตรวจจับการบุกรุก (IDS)'), text('Network Traffic Monitoring', 'การเฝ้าระวังทราฟฟิกเครือข่าย')]),
        text('Network Security Architecture', 'สถาปัตยกรรมความปลอดภัยเครือข่าย', [text('Network Segmentation', 'การแบ่งส่วนเครือข่าย'), text('VLAN', 'VLAN'), text('Micro-segmentation', 'การแบ่งส่วนเครือข่ายแบบละเอียด (Micro-segmentation)'), text('Defense in Depth', 'การป้องกันหลายชั้น'), text('Zero Trust', 'Zero Trust')]),
        text('Wireless Networks', 'เครือข่ายไร้สาย'),
        text('Embedded Systems', 'ระบบฝังตัว', [text('Internet of Things (IoT)', 'อินเทอร์เน็ตของสรรพสิ่ง (IoT)'), text('Industrial Control Systems (ICS)', 'ระบบควบคุมอุตสาหกรรม (ICS)')]),
        text('Cloud Security', 'ความปลอดภัยของคลาวด์', [text('Cloud Characteristics', 'คุณลักษณะของคลาวด์'), text('Cloud Service Models', 'รูปแบบบริการคลาวด์'), text('Cloud Deployment Models', 'รูปแบบการติดตั้งใช้งานคลาวด์'), text('Shared Responsibility Model', 'แบบจำลองความรับผิดชอบร่วมกัน')])
      ], note: text('Complete official Objective 4.x numbering has not been verified from the supplied reference. This section summarizes confirmed coverage rather than claiming a complete numbered objective list.', 'ยังไม่ได้ตรวจสอบรายการเลขวัตถุประสงค์ 4.x อย่างเป็นทางการให้ครบถ้วนจากเอกสารอ้างอิงที่ให้มา ส่วนนี้สรุปเฉพาะหัวข้อที่ยืนยันแล้ว ไม่ได้อ้างว่าเป็นรายการวัตถุประสงค์ที่มีหมายเลขครบถ้วน') },
      { id: 5, objectives: [
        objective('5.1', 'Understand data security', 'เข้าใจความปลอดภัยของข้อมูล', [
          text('Data handling', 'การจัดการข้อมูล', [text('Classification', 'การจำแนกประเภท'), text('Labeling', 'การติดป้ายกำกับ'), text('Masking', 'การปิดบังข้อมูล'), text('Sanitization', 'การทำให้ข้อมูลไม่สามารถกู้คืนได้')]),
          text('Encryption', 'การเข้ารหัส', [text('Symmetric', 'แบบสมมาตร'), text('Asymmetric', 'แบบอสมมาตร'), text('Hashing', 'การแฮช'), text('Quantum-resistant cryptography', 'วิทยาการเข้ารหัสที่ต้านทานการโจมตีด้วยคอมพิวเตอร์ควอนตัม')])
        ]),
        objective('5.2', 'Understand security operations', 'เข้าใจการปฏิบัติการด้านความปลอดภัย', [
          text('Logging and monitoring security events', 'การบันทึกและเฝ้าระวังเหตุการณ์ด้านความปลอดภัย'),
          text('Security event triage', 'การคัดแยกเหตุการณ์ด้านความปลอดภัย', [text('Incident use cases', 'กรณีใช้งานเกี่ยวกับเหตุการณ์'), text('Prioritization', 'การจัดลำดับความสำคัญ'), text('Correlation', 'การเชื่อมโยงความสัมพันธ์')]),
          text('Threat actors', 'ผู้ก่อภัยคุกคาม', [text('Types', 'ประเภท'), text('Motivations', 'แรงจูงใจ')]), text('Cyber threat intelligence', 'ข่าวกรองภัยคุกคามไซเบอร์'), text('Threat frameworks', 'กรอบแนวคิดด้านภัยคุกคาม')
        ]),
        objective('5.3', 'Understand Incident Response (IR)', 'เข้าใจการตอบสนองต่อเหตุการณ์ (IR)', [text('Data handling policy implementing Incident Response Plan (IRP)', 'นโยบายการจัดการข้อมูลเพื่อดำเนินการตามแผนตอบสนองต่อเหตุการณ์ (IRP)'), text('Incident Response exercises', 'การฝึกซ้อมตอบสนองต่อเหตุการณ์', [text('Testing', 'การทดสอบ'), text('Tabletop', 'การฝึกซ้อมบนโต๊ะ (Tabletop)')])]),
        objective('5.4', 'Understand asset protection', 'เข้าใจการปกป้องทรัพย์สิน', [text('Asset lifecycle management', 'การจัดการวงจรชีวิตทรัพย์สิน', [text('End of Life (EOL) software and devices', 'ซอฟต์แวร์และอุปกรณ์ที่สิ้นสุดอายุการใช้งาน (EOL)')]), text('Configuration and change management', 'การจัดการการกำหนดค่าและการเปลี่ยนแปลง')]),
        objective('5.5', 'Understand security testing', 'เข้าใจการทดสอบความปลอดภัย', [
          text('Security readiness testing', 'การทดสอบความพร้อมด้านความปลอดภัย', [text('Blue Teaming', 'การทดสอบโดยทีมป้องกัน (Blue Teaming)'), text('Purple Teaming', 'การทดสอบร่วมระหว่างทีมโจมตีและทีมป้องกัน (Purple Teaming)'), text('Red Teaming', 'การทดสอบโดยทีมจำลองผู้โจมตี (Red Teaming)')]),
          text('Application testing', 'การทดสอบแอปพลิเคชัน', [text('Vulnerability scanning', 'การสแกนช่องโหว่'), text('Static analysis', 'การวิเคราะห์แบบสถิต'), text('Dynamic analysis', 'การวิเคราะห์ขณะทำงาน'), text('Threat modeling', 'การสร้างแบบจำลองภัยคุกคาม')]),
          text('Physical penetration testing', 'การทดสอบเจาะระบบทางกายภาพ', [text('Phishing', 'การหลอกลวงแบบฟิชชิง'), text('Tailgating', 'การแอบตามผู้มีสิทธิ์ผ่านจุดควบคุมการเข้าออก'), text('Impersonation', 'การสวมรอย')])
        ])
      ] }
    ],
    aiDescription: text('AI Security is integrated throughout the five ISC2 CC domains and is not a separate sixth domain.', 'ความปลอดภัยของ AI บูรณาการอยู่ในทั้งห้าโดเมนของ ISC2 CC ไม่ใช่โดเมนที่หกแยกต่างหาก'),
    aiDomains: [
      text('AI Data Integrity, Model Poisoning, Privacy, Ethics', 'ความถูกต้องครบถ้วนของข้อมูล AI การวางยาพิษโมเดล ความเป็นส่วนตัว และจริยธรรม'),
      text('AI-driven Threats, Model Drift, AI-related GRC and KRI', 'ภัยคุกคามที่ขับเคลื่อนด้วย AI การเปลี่ยนแปลงพฤติกรรมโมเดล (Model Drift) และ GRC / KRI ที่เกี่ยวกับ AI'),
      text('AI Bots, Service Accounts, MFA, Behavioral Analysis', 'บอต AI บัญชีบริการ การยืนยันตัวตนหลายปัจจัย (MFA) และการวิเคราะห์พฤติกรรม'),
      text('AI-powered Firewalls/IDS, AI Network Monitoring, Segmentation', 'ไฟร์วอลล์/IDS ที่ใช้ AI การเฝ้าระวังเครือข่ายด้วย AI และการแบ่งส่วนเครือข่าย'),
      text('AI-assisted SIEM, Alert Fatigue, Data Leakage, AI Security Testing', 'SIEM ที่ใช้ AI ช่วย ความล้าจากการแจ้งเตือน ข้อมูลรั่วไหล และการทดสอบความปลอดภัยของ AI')
    ],
    aiNotice: text('These topics describe how AI concepts are incorporated into the exam outline. They do not guarantee that every topic will appear in an individual exam.', 'หัวข้อเหล่านี้อธิบายการรวมแนวคิด AI ไว้ในโครงร่างข้อสอบ ไม่ได้รับประกันว่าทุกหัวข้อจะปรากฏในการสอบแต่ละครั้ง'),
    examFacts: [
      { label: text('Exam', 'การสอบ'), value: text('ISC2 Certified in Cybersecurity (CC)', 'ISC2 Certified in Cybersecurity (CC)') },
      { label: text('Effective Date', 'วันที่มีผล'), value: text('September 1, 2026', '1 กันยายน 2026') },
      { label: text('Delivery Format', 'รูปแบบการจัดสอบ'), value: text('Computerized Adaptive Testing (CAT)', 'การสอบแบบปรับระดับด้วยคอมพิวเตอร์ (CAT)') },
      { label: text('Duration', 'ระยะเวลา'), number: '2', unit: text('hours', 'ชั่วโมง') },
      { label: text('Number of Items', 'จำนวนข้อสอบ'), number: '100–125' },
      { label: text('Item Types', 'ประเภทข้อสอบ'), value: text('Multiple Choice and Advanced Item Types', 'ข้อสอบปรนัยและข้อสอบรูปแบบขั้นสูง') },
      { label: text('Passing Score', 'คะแนนผ่าน'), number: '700 / 1,000' },
      { label: text('Languages', 'ภาษาที่ใช้สอบ'), value: text('English, Chinese, Japanese, German, Spanish', 'อังกฤษ จีน ญี่ปุ่น เยอรมัน สเปน') },
      { label: text('Testing Center', 'ศูนย์สอบ'), value: text('Pearson Testing Center', 'ศูนย์สอบ Pearson') }
    ],
    simulationNotice: text('This official exam information is distinct from SEC CERT TEST Practice and Exam simulation modes. The SEC CERT TEST quiz engine does not reproduce official CAT behavior.', 'ข้อมูลการสอบอย่างเป็นทางการนี้แตกต่างจากโหมดฝึกฝนและโหมดจำลองการสอบของ SEC CERT TEST ระบบแบบทดสอบ SEC CERT TEST ไม่ได้จำลองพฤติกรรม CAT ของการสอบอย่างเป็นทางการ'),
    topics: [
      { en: 'Governance, Risk and Compliance (GRC)', th: 'การกำกับดูแล ความเสี่ยง และการปฏิบัติตามข้อกำหนด (GRC)' },
      { en: 'Identity lifecycle management', th: 'การจัดการวงจรชีวิตของตัวตน' },
      { en: 'Cloud security concepts', th: 'แนวคิดด้านความปลอดภัยของคลาวด์' },
      { en: 'Incident response and security operations', th: 'การตอบสนองต่อเหตุการณ์และการปฏิบัติการด้านความปลอดภัย' },
      { en: 'AI-related security risks and controls', th: 'ความเสี่ยงและมาตรการควบคุมด้านความปลอดภัยที่เกี่ยวข้องกับ AI' },
      { en: 'AI service accounts and access management', th: 'บัญชีบริการ AI และการจัดการการเข้าถึง' },
      { en: 'AI-assisted threat detection and monitoring', th: 'การตรวจจับภัยคุกคามและการเฝ้าระวังโดยใช้ AI ช่วย' },
      { en: 'AI data protection and governance', th: 'การปกป้องข้อมูลและการกำกับดูแลข้อมูลของ AI' }
    ],
    notice: {
      en: 'Exam-domain information is based on the user-provided ISC2 CC 2026 Exam Outline reference. These percentages are exam-domain weights, not SEC CERT TEST practice-question counts. The new question bank has not been supplied; no practice-question count is available yet.',
      th: 'ข้อมูลโดเมนข้อสอบอ้างอิงเอกสาร ISC2 CC 2026 Exam Outline ที่ผู้ใช้ให้มา เปอร์เซ็นต์เหล่านี้คือน้ำหนักโดเมนข้อสอบ ไม่ใช่จำนวนคำถามฝึกหัดใน SEC CERT TEST ขณะนี้ยังไม่ได้รับคลังคำถามใหม่ จึงยังไม่มีจำนวนข้อสอบฝึกหัดที่ยืนยันแล้ว'
    },
    bankStatus: { en: 'Question Bank Status: Coming Soon', th: 'สถานะคลังคำถาม: เร็ว ๆ นี้' }
  }
};

information['isc2-cc-vocabulary'] = {
  type: 'vocabulary',
  titleTh: 'ISC2 CC — คำศัพท์สำหรับเตรียมสอบ',
  viewLabel: text('View vocabulary information', 'ดูข้อมูลชุดคำศัพท์'),
  subtitle: text('ISC2 Certified in Cybersecurity Vocabulary Practice', 'ฝึกคำศัพท์สำหรับ ISC2 Certified in Cybersecurity'),
  description: text(
    'This collection is designed to help learners understand and practice English cybersecurity terminology relevant to the ISC2 Certified in Cybersecurity (CC) examination. It focuses on technical terms, definitions, and Thai meanings used when studying the certification domains.',
    'ชุดคำศัพท์นี้ออกแบบมาเพื่อช่วยผู้เรียนทำความเข้าใจและฝึกฝนคำศัพท์ภาษาอังกฤษด้าน Cybersecurity ที่เกี่ยวข้องกับการสอบ ISC2 Certified in Cybersecurity (CC) โดยเน้นคำศัพท์ทางเทคนิค คำจำกัดความ และความหมายภาษาไทยที่ใช้ในการศึกษาเนื้อหาของแต่ละ Domain'
  ),
  headings: {
    overview: text('Overview', 'ภาพรวม'),
    information: text('Vocabulary Information', 'ข้อมูลชุดคำศัพท์'),
    coverage: text('Domain Coverage', 'ขอบเขตโดเมน'),
    goals: text('Learning Objectives', 'วัตถุประสงค์การเรียนรู้'),
    plans: text('Future Practice Features', 'ความสามารถในการฝึกฝนที่วางแผนไว้'),
    notice: text('Important Notice', 'ข้อควรทราบ'),
    field: text('Field', 'หัวข้อ'),
    topic: text('Topic', 'เนื้อหา')
  },
  facts: [
    { label: text('Certification', 'การรับรอง'), value: text('ISC2 Certified in Cybersecurity (CC)', 'ISC2 Certified in Cybersecurity (CC)') },
    { label: text('Content Type', 'ประเภทเนื้อหา'), value: text('Exam Vocabulary', 'คำศัพท์สำหรับเตรียมสอบ') },
    { label: text('Focus', 'เนื้อหาที่มุ่งเน้น'), value: text('ISC2 CC Terminology', 'คำศัพท์ที่เกี่ยวข้องกับ ISC2 CC') },
    { label: text('Languages', 'ภาษา'), value: text('English / Thai', 'อังกฤษ / ไทย') },
    { label: text('Organization', 'การจัดหมวดหมู่'), value: text('ISC2 CC Domains', 'โดเมนของ ISC2 CC') },
    { label: text('Learning Content', 'เนื้อหาการเรียนรู้'), value: text('Terms, Definitions, Thai Meanings', 'คำศัพท์ คำจำกัดความ และความหมายภาษาไทย') },
    { label: text('Availability', 'สถานะ'), value: text('Coming Soon', 'เร็ว ๆ นี้') }
  ],
  // Intended categories only; share names, without importing counts, weights or question content.
  domains: information['next-bank'].domains.map(({ id, name }) => ({ id, name })),
  coverageNotice: text(
    'The collection is intended to cover the five domains of the updated ISC2 CC 2026 Exam Outline. These are intended vocabulary categories, not claims that vocabulary entries have already been imported.',
    'ชุดคำศัพท์นี้มีเป้าหมายให้ครอบคลุมทั้งห้าโดเมนของโครงร่างข้อสอบ ISC2 CC ปี 2026 ฉบับปรับปรุง รายการนี้เป็นหมวดหมู่คำศัพท์ที่ตั้งใจจัดทำ ไม่ได้หมายความว่ามีการนำเข้าคำศัพท์แล้ว'
  ),
  goalsNotice: text('These are learning goals, not currently implemented application features.', 'รายการนี้คือเป้าหมายการเรียนรู้ ไม่ใช่ความสามารถของแอปที่พัฒนาเสร็จแล้ว'),
  goals: [
    text('Recognize important English cybersecurity terminology.', 'จดจำคำศัพท์ภาษาอังกฤษด้านความปลอดภัยไซเบอร์ที่สำคัญ'),
    text('Understand technical definitions.', 'เข้าใจคำจำกัดความทางเทคนิค'),
    text('Learn Thai meanings of ISC2 CC-related terminology.', 'เรียนรู้ความหมายภาษาไทยของคำศัพท์ที่เกี่ยวข้องกับ ISC2 CC'),
    text('Become familiar with terms appearing in ISC2 CC study materials.', 'คุ้นเคยกับคำศัพท์ที่พบในสื่อการเรียนรู้ ISC2 CC'),
    text('Improve comprehension of English-language certification questions.', 'พัฒนาความเข้าใจคำถามภาษาอังกฤษในการเตรียมสอบการรับรอง')
  ],
  plansNotice: text('The following are planned capabilities only and are not currently available.', 'รายการต่อไปนี้เป็นเพียงความสามารถที่วางแผนไว้ และยังไม่พร้อมใช้งานในขณะนี้'),
  plans: [
    text('Vocabulary learning.', 'การเรียนรู้คำศัพท์'),
    text('English-to-Thai terminology practice.', 'การฝึกคำศัพท์จากภาษาอังกฤษเป็นภาษาไทย'),
    text('Definition recognition.', 'การจดจำคำจำกัดความ'),
    text('Domain-based vocabulary filtering.', 'การกรองคำศัพท์ตามโดเมน'),
    text('Vocabulary-focused quizzes.', 'แบบทดสอบที่เน้นคำศัพท์'),
    text('Learning progress tracking.', 'การติดตามความก้าวหน้าในการเรียนรู้')
  ],
  notice: text(
    'This is an independent ISC2 CC preparation resource developed for SEC CERT TEST. It is not a separate official ISC2 examination or exam-outline version.',
    'ชุดคำศัพท์นี้เป็นสื่อการเรียนรู้สำหรับเตรียมสอบ ISC2 CC ที่พัฒนาขึ้นสำหรับ SEC CERT TEST ไม่ใช่การสอบหรือ Exam Outline Version อย่างเป็นทางการที่แยกออกมาจาก ISC2'
  ),
  comingSoon: text('Vocabulary content is coming soon.', 'เนื้อหาคำศัพท์จะพร้อมให้ใช้งานในอนาคต'),
  statusLabel: text('Coming Soon', 'เร็ว ๆ นี้')
};

export default information;
