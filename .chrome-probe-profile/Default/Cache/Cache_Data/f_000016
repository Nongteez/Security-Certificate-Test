/**
 * Domain 4: Network Security — Review Scenarios Data Module
 *
 * 12 Grounded Educational Practice Scenarios reflecting core Domain 4 syllabus targets:
 * - 01: Lateral Movement Prevention & Blast Radius (Network Segmentation)
 * - 02: Public Web Service Isolation & DMZ Architecture (Demilitarized Zone)
 * - 03: Workload-to-Workload East-West Control (Micro-Segmentation)
 * - 04: Multi-Layered Threat Mitigation (Defense in Depth)
 * - 05: Context-Based Verification & Perimeter Elimination (Zero Trust Architecture)
 * - 06: Infrastructure as a Service (IaaS) OS Patching Responsibility
 * - 07: Platform as a Service (PaaS) Application Security Responsibility
 * - 08: Customer Data & Access Responsibility Across All Cloud Models (Shared Responsibility)
 * - 09: Dedicated Private Infrastructure with Public Cloud Bursting (Hybrid Cloud)
 * - 10: Multi-Organization Regulatory & Compliance Sharing (Community Cloud)
 * - 11: Vendor Lock-In Mitigation via Multiple Cloud Providers (Multi-Cloud)
 * - 12: Smart Device & Operational Technology Isolation (IoT/OT Segmentation)
 */

export const domain4Scenarios = [
  {
    id: 1,
    topic: 'Network Segmentation & Blast Radius',
    situation: 'ผู้ดูแลระบบความมั่นคงปลอดภัยพบว่า หากคอมพิวเตอร์ในแผนกต้อนรับ (Reception) ถูกมัลแวร์เรียกค่าไถ่ (Ransomware) โจมตี มัลแวร์จะสามารถแพร่กระจายผ่านระบบเครือข่ายไปยังเซิร์ฟเวอร์ฐานข้อมูลการเงิน (Financial Database) ได้โดยตรงเนื่องจากเครือข่ายทั้งหมดเชื่อมต่อกันเป็นผืนเดียว (Flat Network)',
    question: 'สถาปัตยกรรมความมั่นคงปลอดภัยใดที่องค์กรควรนำมาใช้เพื่อจำกัดการแพร่กระจายของภัยคุกคาม และลดขอบเขตความเสียหาย (Blast Radius)?',
    answer: 'Network Segmentation — การแบ่งส่วนเครือข่าย',
    reasoning: 'Network Segmentation คือการแบ่งระบบเครือข่ายขนาดใหญ่ออกเป็นส่วนย่อย ๆ (Subnetworks หรือ Segments) ที่มีการแยกและควบคุมการไหลเวียนของทราฟฟิกด้วย Access Control Lists (ACLs) หรือไฟร์วอลล์ การแบ่งส่วนเครือข่ายช่วยลดรัศมีความเสียหาย (Blast Radius) และป้องกันไม่ให้ผู้โจมตีสามารถเคลื่อนที่ในแนวราบ (Lateral Movement) ไปยังระบบสำคัญอื่นได้'
  },
  {
    id: 2,
    topic: 'DMZ (Demilitarized Zone) Architecture',
    situation: 'บริษัทต้องการเปิดให้บริการเว็บเซิร์ฟเวอร์สาธารณะ (Public Web Server) แก่ลูกค้าภายนอกบนอินเทอร์เน็ต แต่กังวลว่าหากเว็บเซิร์ฟเวอร์ถูกเจาะระบบ ผู้โจมตีจะสามารถเข้าถึงฐานข้อมูลลูกค้าและระบบงานภายในของบริษัทได้ทันที',
    question: 'องค์กรควรจัดวางเว็บเซิร์ฟเวอร์ที่เปิดสู่สาธารณะไว้ในส่วนใดของสถาปัตยกรรมเครือข่ายเพื่อความปลอดภัยสูงสุด?',
    answer: 'DMZ (Demilitarized Zone) — เขตปลอดทหารหรือเครือข่ายกันชน',
    reasoning: 'DMZ คือเครือข่ายกันชนที่แยกตัวออกจากทั้งอินเทอร์เน็ตภายนอก (Untrusted Zone) และเครือข่ายภายใน (Trusted Internal Network) โดยบริการที่เปิดให้สาธารณะเข้าถึงได้ (เช่น Web Server, DNS, Mail Gateway) จะต้องวางอยู่ใน DMZ เพื่อป้องกันไม่ให้ผู้ใช้งานภายนอกเชื่อมต่อเข้าสู่เครือข่ายภายในโดยตรง'
  },
  {
    id: 3,
    topic: 'Micro-Segmentation & East-West Traffic',
    situation: 'ในศูนย์ข้อมูลคลาวด์ของธนาคาร มีระบบเว็บแอปพลิเคชัน 3-Tier (Web, App, Database) แม้ระบบทั้งหมดจะอยู่ในเครือข่ายภายในเดียวกัน แต่ทีมวิศวกรต้องการบังคับใช้นโยบายความปลอดภัยให้แต่ละเวิร์กโหลดสื่อสารกันได้เฉพาะพอร์ตและโพรโทคอลที่จำเป็นอย่างยิ่งยวดเท่านั้น โดยไม่ให้เซิร์ฟเวอร์ Web สื่อสารกับเซิร์ฟเวอร์ Database โดยตรง',
    question: 'การควบคุมความปลอดภัยระดับเวิร์กโหลดเพื่อจำกัดการจราจรในแนวราบ (East-West Traffic) เช่นนี้ เรียกว่าอะไร?',
    answer: 'Micro-Segmentation — การแบ่งส่วนเครือข่ายระดับย่อย',
    reasoning: 'Micro-Segmentation คือการควบคุมความปลอดภัยในระดับเวิร์กโหลดหรือโฮสต์ (Host-level / Workload-level) โดยอาศัยเทคโนโลยี Software-Defined Networking (SDN) หรือ Host-based Firewalls เพื่อควบคุมทราฟฟิกในแนวราบ (East-West Traffic) ระหว่างเซิร์ฟเวอร์ แม้จะอยู่ในเครือข่ายย่อยเดียวกันก็ตาม'
  },
  {
    id: 4,
    topic: 'Defense in Depth (Layered Defense)',
    situation: 'องค์กรได้ติดตั้งไฟร์วอลล์ที่มีประสิทธิภาพสูงที่ขอบเขตเครือข่ายภายนอกแล้ว แต่ผู้บริหารฝ่ายความมั่นคงปลอดภัยยังสั่งการให้ติดตั้งโปรแกรม EDR บนเครื่องปลายทาง เข้ารหัสข้อมูลในฐานข้อมูล บังคับใช้การยืนยันตัวตนแบบหลายปัจจัย (MFA) และจัดอบรมสร้างความตระหนักรู้แก่พนักงานอย่างต่อเนื่อง',
    question: 'กลยุทธ์การป้องกันความมั่นคงปลอดภัยที่ใช้การควบคุมหลายชั้นซ้อนกัน เพื่อไม่ให้ความล้มเหลวของจุดใดจุดหนึ่งทำให้ระบบพังทลาย เรียกว่าอะไร?',
    answer: 'Defense in Depth — กลยุทธ์การป้องกันแบบเชิงลึกหลายชั้น',
    reasoning: 'Defense in Depth (Layered Defense) คือหลักการวางมาตรการควบคุมความมั่นคงปลอดภัยหลายระดับชั้น (Perimeter, Network, Endpoint, Application, Data) เพื่อให้หากมาตรการชั้นใดชั้นหนึ่งล้มเหลว มาตรการในชั้นถัดไปยังคงสามารถตรวจจับ ป้องกัน และบรรเทาภัยคุกคามได้ ป้องกัน Single Point of Failure'
  },
  {
    id: 5,
    topic: 'Zero Trust Architecture (ZTA)',
    situation: 'พนักงานคนหนึ่งนำแล็ปท็อปของบริษัทมาเชื่อมต่อสาย LAN ในสำนักงานใหญ่ แต่เมื่อพยายามเข้าถึงฐานข้อมูลลูกค้า ระบบยังคงร้องขอให้ยืนยันตัวตนผ่าน MFA ตรวจสอบความสมบูรณ์ของระบบปฏิบัติการ และประเมินพิกัดสถานที่ก่อนจะอนุญาตให้เข้าถึงข้อมูลได้เฉพาะส่วนที่จำเป็น',
    question: 'สถาปัตยกรรมความมั่นคงปลอดภัยที่ยกเลิกแนวคิดความเชื่อถือโดยปริยายจากตำแหน่งที่ตั้งเครือข่าย และยึดหลัก "ไม่เชื่อถือใคร ต้องตรวจสอบทุกครั้งเสมอ" คืออะไร?',
    answer: 'Zero Trust Architecture (ZTA) — สถาปัตยกรรมแบบไม่ไว้วางใจสิ่งใด',
    reasoning: 'Zero Trust Architecture (NIST SP 800-207) มีหลักการพื้นฐานคือ "Never Trust, Always Verify" โดยไม่เชื่อถือผู้ใช้หรืออุปกรณ์ใด ๆ แม้ว่าจะอยู่ภายในเครือข่ายภายในองค์กรก็ตาม ทุกคำขอเข้าถึงทรัพยากรจะต้องได้รับการยืนยันตัวตนและตรวจสอบสิทธิ์ตามบริบท (Context) อย่างเข้มงวดตลอดเวลา'
  },
  {
    id: 6,
    topic: 'IaaS Shared Responsibility (OS Patching)',
    situation: 'บริษัทได้เช่าเครื่อง Virtual Machine (VM) บนระบบคลาวด์แบบ IaaS จากผู้ให้บริการ ต่อมาพบว่าระบบปฏิบัติการ (OS) ของ VM นั้นมีช่องโหว่ร้ายแรงที่ต้องติดตั้ง Security Patch ทันที',
    question: 'ภายใต้โมเดลความรับผิดชอบร่วมบนระบบคลาวด์ (Shared Responsibility Model) หน้าที่ในการติดตั้งและอัปเดตแพตช์ระบบปฏิบัติการของ VM ใน IaaS เป็นของฝ่ายใด?',
    answer: 'Customer (ผู้ใช้บริการคลาวด์)',
    reasoning: 'ในโมเดล Infrastructure as a Service (IaaS) ผู้ให้บริการคลาวด์ (CSP) รับผิดชอบโครงสร้างพื้นฐานทางกายภาพและ Hypervisor เท่านั้น ส่วนระบบปฏิบัติการ (Guest OS), ซอฟต์แวร์แอปพลิเคชัน, ข้อมูล และการตั้งค่าความปลอดภัย เป็นความรับผิดชอบของลูกค้า (Customer) ทั้งหมด'
  },
  {
    id: 7,
    topic: 'PaaS Shared Responsibility (Application Code)',
    situation: 'ทีมนักพัฒนาซอฟต์แวร์เลือกใช้บริการ Platform as a Service (PaaS) ในการรันเว็บแอปพลิเคชัน โดยผู้ให้บริการคลาวด์เป็นผู้ดูแลระบบปฏิบัติการและรันไทม์ (Runtime Environment) ให้ทั้งหมด ต่อมาพบว่าแอปพลิเคชันถูกโจมตีด้วยช่องโหว่ SQL Injection ในซอร์สโค้ด',
    question: 'ฝ่ายใดเป็นผู้รับผิดชอบต่อความมั่นคงปลอดภัยของโค้ดโปรแกรม (Application Code) ภายใต้โมเดล PaaS?',
    answer: 'Customer (ผู้ใช้บริการคลาวด์)',
    reasoning: 'ในโมเดล Platform as a Service (PaaS) ผู้ให้บริการคลาวด์ดูแลฮาร์ดแวร์, เครือข่าย, OS และ Middleware ให้ แต่โค้ดของแอปพลิเคชัน (Source Code), การจัดการข้อมูล (Data) และการกำหนดสิทธิ์ผู้ใช้งาน (User Access) ยังคงเป็นความรับผิดชอบของลูกค้าอย่างเต็มที่'
  },
  {
    id: 8,
    topic: 'Customer Responsibility Across Cloud Models',
    situation: 'องค์กรจัดเก็บข้อมูลความลับของลูกค้าไว้ในบริการคลาวด์แบบ Software as a Service (SaaS) ต่อมาผู้ดูแลระบบขององค์กรได้ตั้งค่าสิทธิ์ให้โฟลเดอร์ดังกล่าวเป็นแบบ "Public Accessible" ส่งผลให้บุคคลภายนอกสามารถดาวน์โหลดข้อมูลความลับออกไปได้',
    question: 'ไม่ว่าจะใช้งานคลาวด์โมเดลใด (IaaS, PaaS หรือ SaaS) หน้าที่ในการจำแนกประเภทข้อมูลและการบริหารจัดการสิทธิ์การเข้าถึง (Data & IAM) เป็นของใครเสมอ?',
    answer: 'Customer (ผู้ใช้บริการคลาวด์เสมอ — ไม่สามารถส่งมอบความรับผิดชอบนี้ให้ CSP ได้)',
    reasoning: 'กฎทองของโมเดลความรับผิดชอบร่วมบนคลาวด์คือ ไม่ว่าองค์กรจะใช้โมเดล IaaS, PaaS หรือ SaaS ก็ตาม ทรัพย์สินที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอคือ "ข้อมูล (Data & Information)" และ "การบริหารจัดการตัวตนและสิทธิ์การเข้าถึง (IAM & Access Control)" ผู้ให้บริการคลาวด์ไม่สามารถรับผิดชอบแทนได้'
  },
  {
    id: 9,
    topic: 'Hybrid Cloud Deployment Model',
    situation: 'สถาบันการเงินแห่งหนึ่งจัดเก็บฐานข้อมูลบัญชีเงินฝากของลูกค้าไว้ในศูนย์ข้อมูลส่วนตัว (Private Data Center) ของตนเองเพื่อปฏิบัติตามกฎหมาย แต่ใช้คลาวด์สาธารณะ (Public Cloud) ในการรันระบบวิเคราะห์ข้อมูลขนาดใหญ่ที่ต้องการพลังประมวลผลสูง โดยมีการเชื่อมต่อเครือข่ายอย่างปลอดภัยระหว่างสองระบบ',
    question: 'รูปแบบการติดตั้งระบบคลาวด์ (Cloud Deployment Model) ที่ผสมผสานระหว่างศูนย์ข้อมูลส่วนตัว (Private) และคลาวด์สาธารณะ (Public) เข้าด้วยกันอย่างแนบแน่น เรียกว่าอะไร?',
    answer: 'Hybrid Cloud — คลาวด์แบบผสมผสาน',
    reasoning: 'Hybrid Cloud คือการผสมผสานและทำงานร่วมกันระหว่าง Public Cloud และ Private Cloud (หรือ On-premises Data Center) โดยข้อมูลและแอปพลิเคชันสามารถถ่ายโอนและแบ่งปันการทำงานร่วมกันได้อย่างราบรื่นและปลอดภัย ช่วยให้องค์กรได้ทั้งความยืดหยุ่นและการปฏิบัติตามกฎระเบียบ'
  },
  {
    id: 10,
    topic: 'Community Cloud Deployment Model',
    situation: 'โรงพยาบาลและคลินิกเฉพาะทาง 5 แห่งในภูมิภาค ร่วมกันลงทุนเช่าโครงสร้างพื้นฐานระบบคลาวด์เพื่อแลกเปลี่ยนข้อมูลประวัติการรักษาของผู้ป่วย โดยระบบคลาวด์นี้จำกัดการเข้าถึงเฉพาะสมาชิกทั้ง 5 แห่งที่มีพันธสัญญาทางกฎหมายและมาตรฐานความปลอดภัยด้านสาธารณสุขเดียวกันเท่านั้น',
    question: 'โมเดลการติดตั้งคลาวด์ที่สร้างขึ้นเพื่อใช้งานร่วมกันเฉพาะกลุ่มองค์กรที่มีภารกิจ กฎหมาย หรือข้อกำหนดความปลอดภัยร่วมกัน เรียกว่าอะไร?',
    answer: 'Community Cloud — คลาวด์สำหรับกลุ่มองค์กรเฉพาะ',
    reasoning: 'Community Cloud คือโครงสร้างพื้นฐานระบบคลาวด์ที่สร้างขึ้นและแชร์กันเฉพาะกลุ่มองค์กร (Community) ที่มีข้อกำหนด วัตถุประสงค์ นโยบาย หรือภาระผูกพันด้านกฎหมายความปลอดภัยร่วมกัน โดยไม่เปิดให้บุคคลภายนอกหรือสาธารณชนทั่วไปเข้าใช้งาน'
  },
  {
    id: 11,
    topic: 'Multi-Cloud Strategy & Risk Mitigation',
    situation: 'บริษัทสตาร์ทอัพด้านเทคโนโลยีเลือกใช้บริการเซิร์ฟเวอร์ประมวลผลจาก Amazon Web Services (AWS) ขณะเดียวกันก็เลือกใช้บริการปัญญาประดิษฐ์จาก Google Cloud Platform (GCP) และใช้บริการจัดการตัวตนจาก Microsoft Azure เพื่อลดความเสี่ยงจากการพึ่งพาผู้ให้บริการรายเดียว',
    question: 'กลยุทธ์การใช้งานผู้ให้บริการคลาวด์มากกว่าหนึ่งรายเพื่อป้องกันการผูกขาด (Vendor Lock-in) และเพิ่มความยืดหยุ่น เรียกว่าอะไร?',
    answer: 'Multi-Cloud — กลยุทธ์การใช้คลาวด์หลายผู้ให้บริการ',
    reasoning: 'Multi-Cloud คือการที่องค์กรเลือกใช้บริการจากผู้ให้บริการคลาวด์ (CSP) ตั้งแต่ 2 รายขึ้นไปพร้อมกัน เพื่อกระจายความเสี่ยง หลีกเลี่ยงการถูกผูกขาดจากผู้ให้บริการรายเดียว (Vendor Lock-in) และสามารถเลือกใช้ฟีเจอร์ที่ดีที่สุดจากแต่ละคลาวด์ได้'
  },
  {
    id: 12,
    topic: 'IoT Security & OT/ICS Segmentation',
    situation: 'ในโรงงานอุตสาหกรรม มีการติดตั้งกล้องวงจรปิดอัจฉริยะ (Smart IP Cameras) และเซ็นเซอร์วัดอุณหภูมิเครื่องจักร (IoT Sensors) จำนวนมาก อุปกรณ์เหล่านี้มีระบบปฏิบัติการขนาดเล็กที่อัปเดตแพตช์ได้ยาก และมักมีรหัสผ่านเริ่มต้นติดมากับโรงงาน',
    question: 'มาตรการความมั่นคงปลอดภัยเครือข่ายที่สำคัญที่สุดในการป้องกันไม่ให้อุปกรณ์ IoT ตกเป็นช่องทางในการโจมตีระบบคอมพิวเตอร์หลักของโรงงานคืออะไร?',
    answer: 'Isolate IoT on a Dedicated VLAN / Segment — การแยกอุปกรณ์ IoT ไว้ในเครือข่ายเฉพาะ',
    reasoning: 'อุปกรณ์ IoT และ Embedded Systems มักมีข้อจำกัดด้านฮาร์ดแวร์ อัปเดตแพตช์ยาก และมีความมั่นคงปลอดภัยต่ำ แนวปฏิบัติที่ดีที่สุด (Best Practice) ตามมาตรฐาน ISC2 คือการแยกอุปกรณ์เหล่านี้ไว้ในเครือข่ายย่อยเฉพาะ (Dedicated IoT VLAN / Isolated Segment) พร้อมทั้งจำกัดการสื่อสารเข้าออกด้วยไฟร์วอลล์อย่างเข้มงวด'
  }
];

