/**
 * ISC2 CC 2026 — Domain 1 Review Scenarios Data
 *
 * Grounded in ISC2 CC 2026 course summaries:
 * 8 verified educational review scenarios with structured fields.
 */

export const domain1Scenarios = [
  {
    id: 1,
    badge: 'Scenario 1',
    topic: 'CIA Triad',
    situation: 'ผู้โจมตีสามารถแก้ไขตัวเลขเงินเดือนในฐานข้อมูลโดยที่ระบบไม่ส่งสัญญาณเตือนใด ๆ',
    question: 'เหตุการณ์นี้ส่งผลกระทบต่อหลักการใดของ CIA มากที่สุด?',
    answer: 'Integrity',
    reasoning: 'เพราะข้อมูลถูกแก้ไขดัดแปลงให้ผิดเพี้ยนไปจากความจริง'
  },
  {
    id: 2,
    badge: 'Scenario 2',
    topic: 'Access Control',
    situation: 'พนักงานกรอกรหัสผ่านผ่านเรียบร้อยแล้ว แต่เมื่อคลิกเปิดไฟล์โฟลเดอร์การเงิน ระบบแจ้งว่าไม่สามารถเข้าถึงได้',
    question: 'ปัญหานี้เกี่ยวข้องกับขั้นตอนใดของระบบควบคุมการเข้าถึง?',
    answer: 'Authorization',
    reasoning: 'เนื่องจาก Authentication ยืนยันตัวตนผ่านแล้ว แต่สิทธิ์การเข้าถึงไม่อนุญาต'
  },
  {
    id: 3,
    badge: 'Scenario 3',
    topic: 'Risk Management',
    situation: 'บริษัทแห่งหนึ่งตัดสินใจซื้อกรมธรรม์ประกันภัยไซเบอร์ (Cyber Insurance) วงเงิน 50 ล้านบาท เพื่อคุ้มครองกรณีข้อมูลรั่วไหล',
    question: 'จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?',
    answer: 'Risk Transfer (Sharing)',
    reasoning: 'การโอนย้ายภาระทางการเงินไปยังบริษัทประกันภัย'
  },
  {
    id: 4,
    badge: 'Scenario 4',
    topic: 'Professional Conduct',
    situation: 'เจ้าหน้าที่ความปลอดภัยนำโปรแกรม Vulnerability Scanner มาสแกนเซิร์ฟเวอร์ทั้งหมดในองค์กรเพื่อทำรายงานความเสี่ยง',
    question: 'การกระทำนี้สะท้อนถึงหลักการใดระหว่าง Due Care กับ Due Diligence?',
    answer: 'Due Diligence',
    reasoning: 'เนื่องจากเป็นการตรวจสอบ สืบค้น และประเมินความเสี่ยงอย่างรอบคอบ'
  },
  {
    id: 5,
    badge: 'Scenario 5',
    topic: 'Professional Conduct',
    situation: 'เมื่อระบบสแกนพบช่องโหว่ระดับวิกฤต ทีมงานจึงเร่งดาวน์โหลดและติดตั้ง Security Patch ทันที',
    question: 'การลงมือติดตั้ง Patch สะท้อนถึงหลักการใด?',
    answer: 'Due Care',
    reasoning: 'เป็นการลงมือปฏิบัติเพื่อปกป้องทรัพย์สิน'
  },
  {
    id: 6,
    badge: 'Scenario 6',
    topic: 'Risk Analysis',
    situation: 'ผู้บริหารพิจารณาแล้วพบว่า ค่าใช้จ่ายในการซื้ออุปกรณ์ป้องกัน DDoS มูลค่าปีละ 1,000,000 บาท สูงกว่าความเสียหายเฉลี่ยต่อปีที่คาดว่าจะเกิดขึ้น (ALE = 50,000 บาท) ผู้บริหารจึงลงนามอนุมัติไม่ซื้ออุปกรณ์และยอมรับความเสี่ยงนี้',
    question: 'จัดเป็นกลยุทธ์การบริหารความเสี่ยงรูปแบบใด?',
    answer: 'Risk Acceptance',
    reasoning: 'การยอมรับความเสี่ยงอย่างเป็นทางการเมื่อต้นทุนสูงกว่าผลประโยชน์'
  },
  {
    id: 7,
    badge: 'Scenario 7',
    topic: 'Security Architecture',
    situation: 'องค์กรบังคับใช้นโยบายว่า แม้พนักงานจะล็อกอินผ่านคอมพิวเตอร์ที่ต่อสาย LAN ภายในอาคารสำนักงานใหญ่ ทุกคนยังต้องยืนยันตัวตนผ่าน MFA และระบบจะตรวจสอบสุขภาพของเครื่องก่อนอนุญาตให้เข้าถึงคลาวด์',
    question: 'สอดคล้องกับแนวคิดทางสถาปัตยกรรมความปลอดภัยใด?',
    answer: 'Zero Trust Architecture',
    reasoning: 'Never Trust, Always Verify ไม่ให้ความเชื่อถือโดยปริยายเพียงเพราะอยู่ภายในเครือข่าย'
  },
  {
    id: 8,
    badge: 'Scenario 8',
    topic: 'Security Controls',
    situation: 'ป้ายเตือนขนาดใหญ่เขียนว่า *"พื้นที่หวงห้าม บันทึกภาพด้วยกล้องวงจรปิดตลอด 24 ชั่วโมง ผู้บุกรุกจะถูกดำเนินคดีตามกฎหมาย"*',
    question: 'ป้ายเตือนนี้ทำหน้าที่เป็น Security Control ประเภทใด?',
    answer: 'Deterrent Control',
    reasoning: 'มุ่งยับยั้งใจและขัดขวางไม่ให้ผู้ประสงค์ร้ายกล้าลงมือกระทำผิด'
  }
];
