/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 2: Security Governance
 * Question Count: 39
 * Version: next-bank (ISC2 CC 2026 Exam Outline)
 */

const questions = [
  {
    "id": 608,
    "dom": 2,
    "question": "A multinational enterprise is developing a customer-facing cloud portal. The cybersecurity team is criticized by product leaders for imposing disconnected compliance checklists that delay the product launch. The Chief Information Security Officer (CISO) must restructure the security program under an integrated Governance, Risk, and Compliance (GRC) framework. Which of the following actions BEST demonstrates an integrated GRC approach?",
    "options": [
      "Mandating the maximum possible technical encryption and air-gapping controls regardless of application latency or user experience",
      "Halting all cloud portal development until external compliance auditors complete an independent 500-point security checklist",
      "Collaborating with business stakeholders to align security risk tolerances and regulatory obligations directly with product launch objectives",
      "Purchasing an off-the-shelf automated GRC platform and delegating all risk decision-making to the software vendor"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Collaborating with business stakeholders to align security risk tolerances and regulatory obligations directly with product launch objectives demonstrates genuine GRC integration, ensuring cybersecurity enables business goals rather than acting as an isolated obstruction. Option A is incorrect: Mandating maximum technical controls without assessing business latency or functionality illustrates the zero-risk fallacy and directly contradicts risk-based governance balancing security with business utility. Option B is incorrect: Halting all development until an external 500-point audit checklist is completed represents a siloed, bureaucratic compliance mentality that treats compliance as an end in itself rather than a business enabler. Option D is incorrect: Purchasing software tools cannot substitute for organizational governance direction, and governance accountability for risk decisions can never be delegated to an external software vendor.",
    "short_explanation_en": "Integrated GRC aligns security oversight, risk management, and regulatory compliance directly with business objectives.",
    "question_th": "องค์กรข้ามชาติกำลังพัฒนาพอร์ทัลบนคลาวด์สำหรับให้บริการลูกค้า แต่ทีมความมั่นคงปลอดภัยไซเบอร์ถูกตำหนิจากผู้นำฝ่ายผลิตภัณฑ์ว่ากำหนดรายการตรวจสอบการปฏิบัติตามกฎเกณฑ์ (Compliance checklists) ที่ตัดขาดจากความเป็นจริงจนทำให้การเปิดตัวล่าช้า CISO จึงต้องปรับโครงสร้างโปรแกรมความปลอดภัยภายใต้กรอบ GRC แบบบูรณาการ การกระทำใดต่อไปนี้แสดงถึงแนวทาง GRC แบบบูรณาการได้เหมาะสมที่สุด?",
    "options_th": [
      "บังคับใช้มาตรการเข้ารหัสระดับสูงสุดและการแยกเครือข่ายอย่างเด็ดขาดโดยไม่คำนึงถึงความล่าช้าของแอปพลิเคชันหรือประสบการณ์ใช้งานของลูกค้า",
      "ระงับการพัฒนาพอร์ทัลคลาวด์ทั้งหมดไว้ก่อนจนกว่าผู้ตรวจสอบภายนอกจะทำรายการตรวจสอบความปลอดภัย 500 ข้อเสร็จสิ้น",
      "ร่วมมือกับผู้มีส่วนได้ส่วนเสียทางธุรกิจเพื่อปรับระดับความเสี่ยงที่ยอมรับได้และข้อกำหนดการปฏิบัติตามกฎเกณฑ์ให้สอดคล้องกับเป้าหมายการเปิดตัวผลิตภัณฑ์",
      "จัดซื้อแพลตฟอร์ม GRC อัตโนมัติสำเร็จรูปและมอบหมายอำนาจการตัดสินใจด้านความเสี่ยงทั้งหมดให้กับผู้ให้บริการซอฟต์แวร์ภายนอก"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การร่วมมือกับผู้มีส่วนได้ส่วนเสียทางธุรกิจเพื่อปรับระดับความเสี่ยงที่ยอมรับได้และข้อกำหนดกฎหมายให้ตรงกับเป้าหมายการเปิดตัว แสดงถึงการบูรณาการ GRC ที่แท้จริง ซึ่งช่วยขับเคลื่อนธุรกิจให้บรรลุเป้าหมายได้อย่างมั่นคงปลอดภัย\n- ข้อ A ไม่ถูกต้อง: การบังคับใช้มาตรการทางเทคนิคสูงสุดโดยไม่คำนึงถึงความเร็วหรือฟังก์ชันการใช้งานขัดแย้งกับหลักการกำกับดูแลที่ต้องสร้างสมดุลระหว่างความปลอดภัยและการดำเนินงาน\n- ข้อ B ไม่ถูกต้อง: การสั่งระงับการพัฒนาทั้งหมดเพื่อรอรายการตรวจ 500 ข้อ เป็นวิธีคิดแบบแยกส่วนที่มองการปฏิบัติตามกฎเกณฑ์เป็นเป้าหมายสูงสุด แทนที่จะเป็นเครื่องมือสนับสนุนธุรกิจ\n- ข้อ D ไม่ถูกต้อง: การซื้อซอฟต์แวร์ไม่สามารถทดแทนการกำกับดูแลของฝ่ายบริหารได้ และความรับผิดชอบต่อการตัดสินใจด้านความเสี่ยงไม่อาจมอบหมายให้ผู้ขายภายนอกได้",
    "explanation_detail": {
      "correct": {
        "en": "Collaborating with business stakeholders to align security risk tolerances and regulatory obligations directly with product launch objectives demonstrates genuine GRC integration, ensuring cybersecurity enables business goals rather than acting as an isolated obstruction.",
        "th": "การร่วมมือกับผู้มีส่วนได้ส่วนเสียทางธุรกิจเพื่อปรับระดับความเสี่ยงที่ยอมรับได้และข้อกำหนดกฎหมายให้ตรงกับเป้าหมายการเปิดตัว แสดงถึงการบูรณาการ GRC ที่แท้จริง ซึ่งช่วยขับเคลื่อนธุรกิจให้บรรลุเป้าหมายได้อย่างมั่นคงปลอดภัย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Mandating maximum technical controls without assessing business latency or functionality illustrates the zero-risk fallacy and directly contradicts risk-based governance balancing security with business utility.",
          "text_th": "การบังคับใช้มาตรการทางเทคนิคสูงสุดโดยไม่คำนึงถึงความเร็วหรือฟังก์ชันการใช้งานขัดแย้งกับหลักการกำกับดูแลที่ต้องสร้างสมดุลระหว่างความปลอดภัยและการดำเนินงาน"
        },
        {
          "letter": "B",
          "text_en": "Halting all development until an external 500-point audit checklist is completed represents a siloed, bureaucratic compliance mentality that treats compliance as an end in itself rather than a business enabler.",
          "text_th": "การสั่งระงับการพัฒนาทั้งหมดเพื่อรอรายการตรวจ 500 ข้อ เป็นวิธีคิดแบบแยกส่วนที่มองการปฏิบัติตามกฎเกณฑ์เป็นเป้าหมายสูงสุด แทนที่จะเป็นเครื่องมือสนับสนุนธุรกิจ"
        },
        {
          "letter": "D",
          "text_en": "Purchasing software tools cannot substitute for organizational governance direction, and governance accountability for risk decisions can never be delegated to an external software vendor.",
          "text_th": "การซื้อซอฟต์แวร์ไม่สามารถทดแทนการกำกับดูแลของฝ่ายบริหารได้ และความรับผิดชอบต่อการตัดสินใจด้านความเสี่ยงไม่อาจมอบหมายให้ผู้ขายภายนอกได้"
        }
      ],
      "example": {
        "en": "An integrated GRC committee reviews proposed cloud architecture early in Agile work. Identified privacy or compliance constraints inform user stories and may require design or delivery-plan changes.",
        "th": "คณะกรรมการ GRC ทบทวนสถาปัตยกรรม Cloud ที่เสนอตั้งแต่ต้นงาน Agile ข้อจำกัดด้านความเป็นส่วนตัวหรือการปฏิบัติตามข้อกำหนดที่พบใช้ประกอบ User story และอาจทำให้ต้องปรับ Design หรือแผนส่งมอบ"
      },
      "exam_tip": {
        "en": "On the ISC2 CC exam, remember that cybersecurity governance exists to support and enable organizational objectives, not to enforce isolated technical purity at the expense of business operations.",
        "th": "ในการสอบ ISC2 CC พึงระลึกเสมอว่าการกำกับดูแลความมั่นคงปลอดภัยไซเบอร์มีไว้เพื่อสนับสนุนเป้าหมายทางธุรกิจขององค์กร ไม่ใช่การบังคับใช้ความปลอดภัยจนธุรกิจดำเนินงานไม่ได้"
      }
    }
  },
  {
    "id": 609,
    "dom": 2,
    "question": "An organization implements an automated enterprise GRC software platform to track security findings, compliance assessments, and third-party vendor risks. Following a critical data breach at a cloud vendor, the Board of Directors reviews the program. What is the PRIMARY responsibility of organizational governance regarding automated GRC systems?",
    "options": [
      "Transferring legal and regulatory compliance liabilities to the external software vendor hosting the GRC platform",
      "Retaining strategic oversight and ultimate accountability for risk decisions while using software platforms as supporting tools",
      "Delegating final risk acceptance decisions to the automated scoring algorithms programmed into the GRC platform",
      "Conducting annual formal performance appraisals and salary reviews for all department managers"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The organization retains strategic oversight and accountability for its cybersecurity decisions. GRC tools can support evidence, reporting and workflows, but buying software does not replace assigned governance roles or decision authority. Option A is incorrect: Buying software does not itself transfer or remove the organization’s applicable legal, regulatory or contractual obligations. Those duties must be assessed under the relevant requirements. Option C is incorrect: The scenario assigns no final business-risk acceptance authority to the algorithm. Acceptance must follow the organization’s designated decision authority and limits. Option D is incorrect: Conducting routine employee performance reviews and department salary appraisals is an operational human resources management function, not a strategic board oversight responsibility.",
    "short_explanation_en": "Governance tools provide operational support, but organizational leadership retains ultimate accountability for risk decisions.",
    "question_th": "องค์กรแห่งหนึ่งติดตั้งแพลตฟอร์มซอฟต์แวร์ GRC อัตโนมัติเพื่อติดตามข้อตรวจพบด้านความปลอดภัย การประเมินความสอดคล้อง และความเสี่ยงของคู่ค้าภายนอก หลังเกิดเหตุข้อมูลรั่วไหลที่ผู้ให้บริการคลาวด์รายหนึ่ง คณะกรรมการบริหารได้เข้าตรวจสอบโครงการ หน้าที่หลักของการกำกับดูแลองค์กร (Organizational Governance) ที่มีต่อระบบ GRC อัตโนมัติคือข้อใด?",
    "options_th": [
      "การโอนความรับผิดทางกฎหมายและข้อบังคับในการปฏิบัติตามกฎเกณฑ์ไปยังผู้ขายซอฟต์แวร์ภายนอกที่ให้บริการแพลตฟอร์ม GRC",
      "การคงไว้ซึ่งการกำกับดูแลเชิงกลยุทธ์และความรับผิดชอบสูงสุดต่อการตัดสินใจด้านความเสี่ยง โดยใช้แพลตฟอร์มซอฟต์แวร์เป็นเพียงเครื่องมือสนับสนุน",
      "การมอบหมายการตัดสินใจยอมรับความเสี่ยงขั้นสุดท้ายให้อัลกอริทึมการคำนวณคะแนนอัตโนมัติในแพลตฟอร์ม GRC ทำหน้าที่แทน",
      "การจัดทำการประเมินผลการปฏิบัติงานประจำปีและการพิจารณาปรับเงินเดือนสำหรับผู้จัดการแผนกทุกคน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: องค์กรยังต้องกำกับดูแลเชิงกลยุทธ์และรับผิดชอบต่อการตัดสินใจด้านความปลอดภัยของตน เครื่องมือ GRC ช่วยจัดการหลักฐาน รายงาน และกระบวนงานได้ แต่การซื้อซอฟต์แวร์ไม่ได้แทนบทบาทกำกับดูแลหรืออำนาจตัดสินใจที่ได้รับมอบหมาย\n- ข้อ A ไม่ถูกต้อง: การซื้อซอฟต์แวร์ไม่ได้ถ่ายโอนหรือยกเลิกหน้าที่ตามกฎหมาย กฎกำกับ หรือสัญญาที่ใช้กับองค์กรด้วยตัวเอง ต้องประเมินหน้าที่เหล่านั้นตามข้อกำหนดที่เกี่ยวข้อง\n- ข้อ C ไม่ถูกต้อง: โจทย์ไม่ได้มอบอำนาจยอมรับความเสี่ยงทางธุรกิจขั้นสุดท้ายให้อัลกอริทึม การยอมรับต้องเป็นไปตามผู้มีอำนาจและขอบเขตที่องค์กรกำหนด\n- ข้อ D ไม่ถูกต้อง: การประเมินผลการทำงานและการปรับเงินเดือนเป็นหน้าที่บริหารจัดการทรัพยากรบุคคลระดับปฏิบัติการ ไม่ใช่หน้าที่การกำกับดูแลเชิงกลยุทธ์ของคณะกรรมการบริหาร",
    "explanation_detail": {
      "correct": {
        "en": "The organization retains strategic oversight and accountability for its cybersecurity decisions. GRC tools can support evidence, reporting and workflows, but buying software does not replace assigned governance roles or decision authority.",
        "th": "องค์กรยังต้องกำกับดูแลเชิงกลยุทธ์และรับผิดชอบต่อการตัดสินใจด้านความปลอดภัยของตน เครื่องมือ GRC ช่วยจัดการหลักฐาน รายงาน และกระบวนงานได้ แต่การซื้อซอฟต์แวร์ไม่ได้แทนบทบาทกำกับดูแลหรืออำนาจตัดสินใจที่ได้รับมอบหมาย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Buying software does not itself transfer or remove the organization’s applicable legal, regulatory or contractual obligations. Those duties must be assessed under the relevant requirements.",
          "text_th": "การซื้อซอฟต์แวร์ไม่ได้ถ่ายโอนหรือยกเลิกหน้าที่ตามกฎหมาย กฎกำกับ หรือสัญญาที่ใช้กับองค์กรด้วยตัวเอง ต้องประเมินหน้าที่เหล่านั้นตามข้อกำหนดที่เกี่ยวข้อง"
        },
        {
          "letter": "C",
          "text_en": "The scenario assigns no final business-risk acceptance authority to the algorithm. Acceptance must follow the organization’s designated decision authority and limits.",
          "text_th": "โจทย์ไม่ได้มอบอำนาจยอมรับความเสี่ยงทางธุรกิจขั้นสุดท้ายให้อัลกอริทึม การยอมรับต้องเป็นไปตามผู้มีอำนาจและขอบเขตที่องค์กรกำหนด"
        },
        {
          "letter": "D",
          "text_en": "Conducting routine employee performance reviews and department salary appraisals is an operational human resources management function, not a strategic board oversight responsibility.",
          "text_th": "การประเมินผลการทำงานและการปรับเงินเดือนเป็นหน้าที่บริหารจัดการทรัพยากรบุคคลระดับปฏิบัติการ ไม่ใช่หน้าที่การกำกับดูแลเชิงกลยุทธ์ของคณะกรรมการบริหาร"
        }
      ],
      "example": {
        "en": "An enterprise uses ServiceNow GRC to score third-party vendors, but the executive risk committee reviews and signs off on every high-risk vendor onboarding exception.",
        "th": "องค์กรใช้ระบบ GRC คำนวณคะแนนความเสี่ยงของคู่ค้า แต่คณะกรรมการความเสี่ยงของผู้บริหารจะเป็นผู้พิจารณาอนุมัติข้อยกเว้นสำหรับคู่ค้าที่มีความเสี่ยงสูงทุกราย"
      },
      "exam_tip": {
        "en": "Check the assigned governance and decision roles. Automation can support their work; procurement alone does not remove organizational oversight.",
        "th": "ตรวจบทบาทกำกับดูแลและอำนาจตัดสินใจที่ได้รับมอบหมาย ระบบอัตโนมัติช่วยงานได้ แต่การจัดซื้อเพียงอย่างเดียวไม่ได้ยกเลิกการกำกับดูแลขององค์กร"
      }
    }
  },
  {
    "id": 610,
    "dom": 2,
    "question": "A commercial retail corporation successfully passes an annual Payment Card Industry Data Security Standard (PCI DSS) compliance audit with zero non-conformities across its payment processing network. Two months later, an external threat actor exfiltrates proprietary product blueprints and executive email communications from an unpatched internal engineering server. Which statement BEST explains why the breach occurred despite achieving full compliance?",
    "options": [
      "The external compliance auditors committed professional malpractice by failing to impose mandatory criminal penalties on the engineering department",
      "Compliance audits automatically guarantee complete security across every organizational system, but internal employees failed to report the breach",
      "Compliance standards replace the necessity for internal security policies by legally mandating technical configurations for all corporate data",
      "Compliance frameworks define mandatory baseline controls for specific scoped environments, whereas risk management evaluates threats across all enterprise assets"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Compliance defines a bounded baseline for specific regulated data, but comprehensive risk management is necessary to identify and protect all critical organizational assets against active threats. Option A is incorrect: Auditors verify evidence against standard controls; they do not enforce criminal law or penalize internal corporate departments. Option B is incorrect: Passing a compliance audit never guarantees absolute security, and audits only assess systems within the formally defined compliance scope. Option C is incorrect: Compliance mandates inform internal policy creation but never replace internal policies or eliminate the need for broader risk assessments.",
    "short_explanation_en": "Compliance mandates specific scoped baselines, whereas comprehensive risk management addresses all organizational assets and threats.",
    "question_th": "บริษัทค้าปลีกแห่งหนึ่งผ่านการตรวจสอบการปฏิบัติตามมาตรฐาน PCI DSS ประจำปีโดยไม่มีข้อบกพร่องใดๆ ในเครือข่ายประมวลผลการชำระเงิน แต่ในอีกสองเดือนต่อมา ผู้โจมตีภายนอกได้ขโมยพิมพ์เขียวผลิตภัณฑ์ที่เป็นความลับทางการค้าและอีเมลของผู้บริหารไปจากเซิร์ฟเวอร์ฝ่ายวิศวกรรมภายในที่ไม่ได้ลงแพตช์ ข้อความใดต่อไปนี้อธิบายได้เหมาะสมที่สุดว่าเหตุใดการรั่วไหลจึงเกิดขึ้นได้แม้จะผ่านการตรวจสอบตามกฎเกณฑ์อย่างสมบูรณ์?",
    "options_th": [
      "ผู้ตรวจสอบภายนอกกระทำผิดจรรยาบรรณวิชาชีพโดยไม่บังคับใช้บทลงโทษทางอาญากับฝ่ายวิศวกรรมในระหว่างการตรวจสอบ",
      "การตรวจสอบความสอดคล้องรับประกันความปลอดภัยของทุกระบบในองค์กรโดยอัตโนมัติ แต่พนักงานภายในละเลยการรายงานเหตุการณ์ผิดปกติ",
      "มาตรฐานการปฏิบัติตามกฎเกณฑ์เข้ามาแทนที่ความจำเป็นในการมีนโยบายความปลอดภัยภายใน โดยบังคับใช้การตั้งค่าทางเทคนิคกับข้อมูลทุกประเภท",
      "กรอบการปฏิบัติตามกฎเกณฑ์กำหนดมาตรการควบคุมขั้นต่ำสำหรับขอบเขตเฉพาะ แต่การบริหารความเสี่ยงต้องประเมินภัยคุกคามในทรัพย์สินทั้งหมดขององค์กร"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การปฏิบัติตามกฎเกณฑ์กำหนดเพียงเกณฑ์ขั้นต่ำในขอบเขตที่ระเบียบระบุไว้ แต่การบริหารความเสี่ยงอย่างครอบคลุมมีความจำเป็นในการปกป้องทรัพย์สินสำคัญทั้งหมดขององค์กร\n- ข้อ A ไม่ถูกต้อง: ผู้ตรวจสอบมีหน้าที่ตรวจหลักฐานเทียบกับข้อกำหนดมาตรฐาน ไม่ได้มีอำนาจดำเนินคดีทางอาญาหรือลงโทษแผนกภายใน\n- ข้อ B ไม่ถูกต้อง: การผ่านการตรวจสอบไม่ได้รับประกันความมั่นคงปลอดภัยอย่างสมบูรณ์ และการตรวจจะจำกัดอยู่เฉพาะระบบในขอบเขตที่ตกลงไว้เท่านั้น\n- ข้อ C ไม่ถูกต้อง: ข้อบังคับตามกฎเกณฑ์ช่วยชี้นำการร่างนโยบาย แต่ไม่สามารถทดแทนนโยบายภายในหรือขจัดความจำเป็นในการประเมินความเสี่ยงได้",
    "explanation_detail": {
      "correct": {
        "en": "Compliance defines a bounded baseline for specific regulated data, but comprehensive risk management is necessary to identify and protect all critical organizational assets against active threats.",
        "th": "การปฏิบัติตามกฎเกณฑ์กำหนดเพียงเกณฑ์ขั้นต่ำในขอบเขตที่ระเบียบระบุไว้ แต่การบริหารความเสี่ยงอย่างครอบคลุมมีความจำเป็นในการปกป้องทรัพย์สินสำคัญทั้งหมดขององค์กร"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Auditors verify evidence against standard controls; they do not enforce criminal law or penalize internal corporate departments.",
          "text_th": "ผู้ตรวจสอบมีหน้าที่ตรวจหลักฐานเทียบกับข้อกำหนดมาตรฐาน ไม่ได้มีอำนาจดำเนินคดีทางอาญาหรือลงโทษแผนกภายใน"
        },
        {
          "letter": "B",
          "text_en": "Passing a compliance audit never guarantees absolute security, and audits only assess systems within the formally defined compliance scope.",
          "text_th": "การผ่านการตรวจสอบไม่ได้รับประกันความมั่นคงปลอดภัยอย่างสมบูรณ์ และการตรวจจะจำกัดอยู่เฉพาะระบบในขอบเขตที่ตกลงไว้เท่านั้น"
        },
        {
          "letter": "C",
          "text_en": "Compliance mandates inform internal policy creation but never replace internal policies or eliminate the need for broader risk assessments.",
          "text_th": "ข้อบังคับตามกฎเกณฑ์ช่วยชี้นำการร่างนโยบาย แต่ไม่สามารถทดแทนนโยบายภายในหรือขจัดความจำเป็นในการประเมินความเสี่ยงได้"
        }
      ],
      "example": {
        "en": "A defined assessment checks access-review evidence for one patient-record service. A separate warehouse application outside that assessment suffers an outage. The scoped result did not establish the security of the unassessed application.",
        "th": "การประเมินที่กำหนดขอบเขตตรวจหลักฐานทบทวนสิทธิ์ของบริการเวชระเบียนหนึ่งระบบ แอปคลังสินค้าที่อยู่นอกการประเมินนั้นหยุดทำงาน ผลตรวจในขอบเขตไม่ได้ยืนยันความปลอดภัยของแอปที่ไม่ได้ประเมิน"
      },
      "exam_tip": {
        "en": "Core mantra for ISC2 exams: 'Compliance is not security.' Compliance is a bounded snapshot of minimum requirements; risk management is an ongoing enterprise discipline.",
        "th": "หัวใจสำคัญสำหรับการสอบ ISC2: 'การผ่านเกณฑ์กฎหมายไม่ได้แปลว่าปลอดภัย' การปฏิบัติตามกฎเกณฑ์เป็นเพียงภาพสะท้อนเกณฑ์ขั้นต่ำเฉพาะจุด แต่การบริหารความเสี่ยงต้องทำต่อเนื่องทั่วทั้งองค์กร"
      }
    }
  },
  {
    "id": 611,
    "dom": 2,
    "question": "An enterprise seeks to adopt an established cybersecurity framework to structure its program. The Chief Information Security Officer (CISO) requires a framework that provides an internationally recognized, third-party certifiable Information Security Management System (ISMS) standard. Which of the following frameworks BEST satisfies this requirement?",
    "options": [
      "ISO/IEC 27001",
      "NIST Cybersecurity Framework (NIST CSF 2.0)",
      "COBIT 2019",
      "NIST SP 800-30 Rev. 1"
    ],
    "correct_idx": 0,
    "explanation": "ISO/IEC 27001 specifies requirements for an Information Security Management System (ISMS) against which an organization can obtain independent third-party certification. Accreditation concerns the competence of a certification body; it is not accreditation of the standard itself.\nB: NIST CSF 2.0 organizes cybersecurity outcomes and risk-management guidance; NIST does not offer an organizational ISMS certification through the CSF.\nC: COBIT 2019 focuses on broad enterprise governance and management of IT processes, not on providing accredited certification of an organizational ISMS.\nD: NIST SP 800-30 Rev. 1 guides the conduct of risk assessments. It is not a set of certifiable ISMS requirements like ISO/IEC 27001.",
    "short_explanation_en": "ISO/IEC 27001 provides formal, certifiable requirements for an Information Security Management System (ISMS).",
    "question_th": "องค์กรแห่งหนึ่งต้องการนำกรอบการทำงานด้านความมั่นคงปลอดภัยไซเบอร์ที่เป็นที่ยอมรับมาใช้เพื่อจัดโครงสร้างโปรแกรมของตน CISO ต้องการกรอบการทำงานที่มอบมาตรฐานระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่เป็นที่ยอมรับในระดับสากลและสามารถตรวจรับรองโดยหน่วยงานภายนอกได้ กรอบการทำงานใดต่อไปนี้ตอบโจทย์ความต้องการนี้ได้เหมาะสมที่สุด (BEST)?",
    "options_th": [
      "ISO/IEC 27001",
      "NIST Cybersecurity Framework (NIST CSF 2.0)",
      "COBIT 2019",
      "NIST SP 800-30 Rev. 1"
    ],
    "explanation_th": "ISO/IEC 27001 กำหนดข้อกำหนดสำหรับระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่องค์กรสามารถขอรับการตรวจรับรองจากหน่วยงานภายนอกได้ Accreditation เป็นการรับรองความสามารถของหน่วยงานตรวจรับรอง ไม่ใช่การรับรองตัวมาตรฐาน\nB: NIST CSF 2.0 จัดหมวดผลลัพธ์และแนวทางบริหารความเสี่ยงด้านความมั่นคงปลอดภัย โดย NIST ไม่ได้จัดให้มีการตรวจรับรอง ISMS ขององค์กรผ่าน CSF\nC: COBIT 2019 เน้นการกำกับดูแลกระบวนการทางไอทีในระดับองค์กร ไม่ใช่มาตรฐานในการรับรองระบบความปลอดภัยสารสนเทศ\nD: NIST SP 800-30 Rev. 1 ให้แนวทางการประเมินความเสี่ยง ไม่ใช่ชุดข้อกำหนด ISMS สำหรับการตรวจรับรองแบบ ISO/IEC 27001",
    "explanation_detail": {
      "correct": {
        "en": "ISO/IEC 27001 specifies requirements for an Information Security Management System (ISMS) against which an organization can obtain independent third-party certification. Accreditation concerns the competence of a certification body; it is not accreditation of the standard itself.",
        "th": "ISO/IEC 27001 กำหนดข้อกำหนดสำหรับระบบบริหารจัดการความมั่นคงปลอดภัยสารสนเทศ (ISMS) ที่องค์กรสามารถขอรับการตรวจรับรองจากหน่วยงานภายนอกได้ Accreditation เป็นการรับรองความสามารถของหน่วยงานตรวจรับรอง ไม่ใช่การรับรองตัวมาตรฐาน"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "NIST CSF 2.0 organizes cybersecurity outcomes and risk-management guidance; NIST does not offer an organizational ISMS certification through the CSF.",
          "text_th": "NIST CSF 2.0 จัดหมวดผลลัพธ์และแนวทางบริหารความเสี่ยงด้านความมั่นคงปลอดภัย โดย NIST ไม่ได้จัดให้มีการตรวจรับรอง ISMS ขององค์กรผ่าน CSF"
        },
        {
          "letter": "C",
          "text_en": "COBIT 2019 focuses on broad enterprise governance and management of IT processes, not on providing accredited certification of an organizational ISMS.",
          "text_th": "COBIT 2019 เน้นการกำกับดูแลกระบวนการทางไอทีในระดับองค์กร ไม่ใช่มาตรฐานในการรับรองระบบความปลอดภัยสารสนเทศ"
        },
        {
          "letter": "D",
          "text_en": "NIST SP 800-30 Rev. 1 guides the conduct of risk assessments. It is not a set of certifiable ISMS requirements like ISO/IEC 27001.",
          "text_th": "NIST SP 800-30 Rev. 1 ให้แนวทางการประเมินความเสี่ยง ไม่ใช่ชุดข้อกำหนด ISMS สำหรับการตรวจรับรองแบบ ISO/IEC 27001"
        }
      ],
      "example": {
        "en": "An organization may use its ISO/IEC 27001 certificate, including its scope and validity, as one input to a customer’s supplier assessment. Certification does not replace assessment of the customer’s specific risks.",
        "th": "องค์กรอาจใช้ใบรับรอง ISO/IEC 27001 พร้อมขอบเขตและระยะเวลาที่มีผล เป็นข้อมูลส่วนหนึ่งในการประเมินผู้ให้บริการของลูกค้า การมีใบรับรองไม่ได้ทดแทนการประเมินความเสี่ยงเฉพาะของลูกค้า"
      },
      "exam_tip": {
        "en": "Differentiate frameworks vs standards: ISO 27001 = certifiable ISMS requirements standard; NIST CSF = voluntary flexible framework; COBIT = enterprise IT governance.",
        "th": "แยกแยะความต่างให้ชัดเจน: ISO 27001 = มาตรฐานข้อกำหนด ISMS ที่ตรวจรับรองได้; NIST CSF = กรอบแนวปฏิบัติแบบยืดหยุ่น; COBIT = การกำกับดูแลไอทีองค์กร"
      }
    }
  },
  {
    "id": 612,
    "dom": 2,
    "question": "A security vulnerability assessment identifies critical remote code execution flaws in an enterprise payroll database server. Mitigating the vulnerability requires applying an operating system kernel patch that necessitates a 12-hour server outage during fiscal month-end processing. Who is the BEST individual to serve as the Risk Owner and decide whether to accept the temporary security risk or approve the operational outage?",
    "options": [
      "The external compliance auditor who evaluates the company's financial records during annual reviews",
      "The junior cybersecurity analyst who executed the vulnerability scanning tool and documented the flaw",
      "The designated business asset owner who manages the payroll department and understands business impact",
      "The database software vendor's customer support engineer who published the vulnerability advisory"
    ],
    "correct_idx": 2,
    "explanation": "The designated business asset owner is the best choice among these options because the decision balances payroll business impact and security exposure. Authority to accept risk or approve downtime must be assigned by organizational governance; decisions beyond that authority require escalation.\nA: External auditors must maintain strict independence; assuming risk ownership or making operational management decisions creates an immediate conflict of interest.\nB: The analyst can provide vulnerability evidence and recommendations, but the scenario does not assign the analyst authority over payroll business-risk acceptance or downtime.\nD: The vendor engineer can advise on the flaw and remediation. Publishing an advisory does not confer authority to accept the customer’s business risk or approve its outage.",
    "short_explanation_en": "Risk decisions require designated authority and knowledge of the affected business process; authority is assigned by governance.",
    "question_th": "การประเมินช่องโหว่ความปลอดภัยพบจุดบกพร่องร้ายแรงที่ยอมให้รันโค้ดจากระยะไกลบนเซิร์ฟเวอร์ฐานข้อมูลระบบจ่ายเงินเดือน การแก้ไขจำเป็นต้องลงแพตช์เคอร์เนลของระบบปฏิบัติการซึ่งต้องปิดระบบนาน 12 ชั่วโมงในช่วงประมวลผลปิดงวดบัญชีสิ้นเดือน ใครคือบุคคลที่เหมาะสมที่สุดในการทำหน้าที่เป็น เจ้าของความเสี่ยง (Risk Owner) เพื่อตัดสินใจว่าจะยอมรับความเสี่ยงชั่วคราวหรืออนุมัติให้ปิดระบบเพื่อลงแพตช์?",
    "options_th": [
      "ผู้ตรวจสอบการปฏิบัติตามกฎเกณฑ์ภายนอกที่ทำหน้าที่ประเมินหลักฐานทางบัญชีประจำปี",
      "นักวิเคราะห์ความปลอดภัยไซเบอร์ระดับปฏิบัติการที่รันเครื่องมือสแกนช่องโหว่และจัดทำรายงาน",
      "เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายให้กำกับดูแลฝ่ายจ่ายเงินเดือนและเข้าใจผลกระทบต่อธุรกิจอย่างแท้จริง",
      "วิศวกรสนับสนุนด้านเทคนิคของผู้ขายซอฟต์แวร์ฐานข้อมูลที่ออกประกาศเตือนช่องโหว่"
    ],
    "explanation_th": "เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายเหมาะสมที่สุดในบรรดาตัวเลือก เพราะต้องชั่งน้ำหนักผลกระทบต่องานเงินเดือนกับความเสี่ยงด้านความปลอดภัย อำนาจยอมรับความเสี่ยงหรืออนุมัติการหยุดระบบต้องได้รับการกำหนดโดยการกำกับดูแลองค์กร และต้องส่งต่อเมื่อเกินอำนาจนั้น\nA: ผู้ตรวจสอบภายนอกต้องรักษาความเป็นอิสระ การเข้ามารับผิดชอบความเสี่ยงหรือตัดสินใจในการดำเนินงานจะทำให้เกิดผลประโยชน์ทับซ้อนทันที\nB: นักวิเคราะห์สามารถให้หลักฐานช่องโหว่และข้อเสนอแนะได้ แต่โจทย์ไม่ได้มอบอำนาจตัดสินใจยอมรับความเสี่ยงทางธุรกิจหรือหยุดระบบเงินเดือนให้แก่นักวิเคราะห์\nD: วิศวกรของผู้ขายสามารถให้คำแนะนำเรื่องช่องโหว่และการแก้ไขได้ การเผยแพร่คำแนะนำไม่ได้ทำให้มีอำนาจยอมรับความเสี่ยงทางธุรกิจหรืออนุมัติการหยุดระบบของลูกค้า",
    "explanation_detail": {
      "correct": {
        "en": "The designated business asset owner is the best choice among these options because the decision balances payroll business impact and security exposure. Authority to accept risk or approve downtime must be assigned by organizational governance; decisions beyond that authority require escalation.",
        "th": "เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายเหมาะสมที่สุดในบรรดาตัวเลือก เพราะต้องชั่งน้ำหนักผลกระทบต่องานเงินเดือนกับความเสี่ยงด้านความปลอดภัย อำนาจยอมรับความเสี่ยงหรืออนุมัติการหยุดระบบต้องได้รับการกำหนดโดยการกำกับดูแลองค์กร และต้องส่งต่อเมื่อเกินอำนาจนั้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "External auditors must maintain strict independence; assuming risk ownership or making operational management decisions creates an immediate conflict of interest.",
          "text_th": "ผู้ตรวจสอบภายนอกต้องรักษาความเป็นอิสระ การเข้ามารับผิดชอบความเสี่ยงหรือตัดสินใจในการดำเนินงานจะทำให้เกิดผลประโยชน์ทับซ้อนทันที"
        },
        {
          "letter": "B",
          "text_en": "The analyst can provide vulnerability evidence and recommendations, but the scenario does not assign the analyst authority over payroll business-risk acceptance or downtime.",
          "text_th": "นักวิเคราะห์สามารถให้หลักฐานช่องโหว่และข้อเสนอแนะได้ แต่โจทย์ไม่ได้มอบอำนาจตัดสินใจยอมรับความเสี่ยงทางธุรกิจหรือหยุดระบบเงินเดือนให้แก่นักวิเคราะห์"
        },
        {
          "letter": "D",
          "text_en": "The vendor engineer can advise on the flaw and remediation. Publishing an advisory does not confer authority to accept the customer’s business risk or approve its outage.",
          "text_th": "วิศวกรของผู้ขายสามารถให้คำแนะนำเรื่องช่องโหว่และการแก้ไขได้ การเผยแพร่คำแนะนำไม่ได้ทำให้มีอำนาจยอมรับความเสี่ยงทางธุรกิจหรืออนุมัติการหยุดระบบของลูกค้า"
        }
      ],
      "example": {
        "en": "If a hospital designates its Pharmacy Director as the risk owner, that person evaluates pharmacy impacts and makes or escalates the decision within the assigned authority.",
        "th": "หากโรงพยาบาลมอบหมายให้หัวหน้าฝ่ายเภสัชกรรมเป็นเจ้าของความเสี่ยง บุคคลนั้นจะประเมินผลกระทบต่องานเภสัชกรรมและตัดสินใจหรือส่งต่อภายในขอบเขตอำนาจที่ได้รับ"
      },
      "exam_tip": {
        "en": "Check the designated decision authority and business impact. A job title alone does not establish permission to accept risk.",
        "th": "ตรวจสอบผู้มีอำนาจตัดสินใจที่ได้รับมอบหมายและผลกระทบทางธุรกิจ ชื่อตำแหน่งเพียงอย่างเดียวไม่ได้ทำให้มีอำนาจยอมรับความเสี่ยง"
      }
    }
  },
  {
    "id": 613,
    "dom": 2,
    "question": "A regional hospital evaluates a legacy diagnostic scanning device operating on an unsupported, obsolete operating system. A remote code execution vulnerability is discovered for which the defunct manufacturer will release no patch. Network segmentation cannot sufficiently isolate the device due to technical limitations, and the risk of patient record corruption exceeds the hospital's risk appetite. Executive leadership decides to decommission the device permanently and retire the associated diagnostic service. Which risk treatment strategy is BEST illustrated by this decision?",
    "options": [
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transfer",
      "Risk Acceptance"
    ],
    "correct_idx": 1,
    "explanation": "Permanently retiring the vulnerable device and its diagnostic service stops the specified risk-bearing activity, illustrating Risk Avoidance. Record the disposition and any remaining transition risks rather than assuming that risk-register history disappears.\nA: Risk Mitigation applies technical or procedural safeguards to reduce risk to acceptable levels while keeping the operational process active.\nC: Risk transfer or sharing allocates covered financial exposure through arrangements such as insurance or contractual indemnification. Outsourcing operations alone does not establish that allocation, and transfer does not itself retire the asset.\nD: Risk Acceptance acknowledges and retains residual risk without implementing additional countermeasures or retiring the business function.",
    "short_explanation_en": "Risk Avoidance eliminates exposure by discontinuing the risk-bearing activity or decommissioning the vulnerable asset.",
    "question_th": "โรงพยาบาลประเมินความเสี่ยงของเครื่องสแกนเพื่อการวินิจฉัยรุ่นเก่าที่ทำงานบนระบบปฏิบัติการที่หมดอายุการสนับสนุน มีการค้นพบช่องโหว่ร้ายแรงที่ผู้ผลิตที่ปิดกิจการไปแล้วจะไม่มีวันออกแพตช์แก้ไข การแยกเซกเมนต์เครือข่ายไม่สามารถลดการเปิดรับความเสี่ยงได้เพียงพอเนื่องจากข้อจำกัดทางเทคนิค และความเสี่ยงต่อความถูกต้องของข้อมูลผู้ป่วยสูงเกินกว่าระดับที่โรงพยาบาลยอมรับได้ ผู้บริหารจึงตัดสินใจปลดระวางอุปกรณ์นี้อย่างถาวรและยกเลิกบริการตรวจวินิจฉัยดังกล่าว กลยุทธ์การจัดการความเสี่ยงในข้อใดอธิบายการตัดสินใจนี้ได้เหมาะสมที่สุด?",
    "options_th": [
      "การลดความเสี่ยง (Risk Mitigation)",
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การถ่ายโอนความเสี่ยง (Risk Transfer)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    "explanation_th": "การเลิกใช้อุปกรณ์ที่มีช่องโหว่และยุติบริการตรวจวินิจฉัยนั้นอย่างถาวรเป็นการหยุดกิจกรรมที่ก่อความเสี่ยง จึงเป็น Risk Avoidance ควรบันทึกผลการจัดการและความเสี่ยงช่วงเปลี่ยนผ่านที่ยังเหลือ ไม่ใช่ถือว่าประวัติในทะเบียนความเสี่ยงหายไปเอง\nA: การลดความเสี่ยงคือการใส่มาตรการป้องกันเพื่อลดระดับความเสี่ยงให้อยู่ในเกณฑ์ยอมรับได้ แต่ยังคงดำเนินงานระบบนั้นต่อไป\nC: การถ่ายโอนความเสี่ยงคือการส่งต่อภาระทางการเงินให้บุคคลอื่น เช่น การทำประกันภัย แต่ตัวระบบยังคงทำงานอยู่\nD: การยอมรับความเสี่ยงคือการรับทราบและยอมรับระดับความเสี่ยงคงเหลือโดยไม่ทำมาตรการเพิ่มเติมและไม่ยกเลิกระบบ",
    "explanation_detail": {
      "correct": {
        "en": "Permanently retiring the vulnerable device and its diagnostic service stops the specified risk-bearing activity, illustrating Risk Avoidance. Record the disposition and any remaining transition risks rather than assuming that risk-register history disappears.",
        "th": "การเลิกใช้อุปกรณ์ที่มีช่องโหว่และยุติบริการตรวจวินิจฉัยนั้นอย่างถาวรเป็นการหยุดกิจกรรมที่ก่อความเสี่ยง จึงเป็น Risk Avoidance ควรบันทึกผลการจัดการและความเสี่ยงช่วงเปลี่ยนผ่านที่ยังเหลือ ไม่ใช่ถือว่าประวัติในทะเบียนความเสี่ยงหายไปเอง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Risk Mitigation applies technical or procedural safeguards to reduce risk to acceptable levels while keeping the operational process active.",
          "text_th": "การลดความเสี่ยงคือการใส่มาตรการป้องกันเพื่อลดระดับความเสี่ยงให้อยู่ในเกณฑ์ยอมรับได้ แต่ยังคงดำเนินงานระบบนั้นต่อไป"
        },
        {
          "letter": "C",
          "text_en": "Risk transfer or sharing allocates covered financial exposure through arrangements such as insurance or contractual indemnification. Outsourcing operations alone does not establish that allocation, and transfer does not itself retire the asset.",
          "text_th": "การถ่ายโอนความเสี่ยงคือการส่งต่อภาระทางการเงินให้บุคคลอื่น เช่น การทำประกันภัย แต่ตัวระบบยังคงทำงานอยู่"
        },
        {
          "letter": "D",
          "text_en": "Risk Acceptance acknowledges and retains residual risk without implementing additional countermeasures or retiring the business function.",
          "text_th": "การยอมรับความเสี่ยงคือการรับทราบและยอมรับระดับความเสี่ยงคงเหลือโดยไม่ทำมาตรการเพิ่มเติมและไม่ยกเลิกระบบ"
        }
      ],
      "example": {
        "en": "The hospital retires the unsupported device and ends the associated service rather than continuing to operate it with additional controls. Other hospital risks still require management.",
        "th": "โรงพยาบาลเลิกใช้อุปกรณ์ที่หมดการสนับสนุนและยุติบริการที่เกี่ยวข้อง แทนการใช้งานต่อพร้อมเพิ่มมาตรการควบคุม ความเสี่ยงอื่นของโรงพยาบาลยังต้องได้รับการจัดการ"
      },
      "exam_tip": {
        "en": "Avoidance stops the specified activity. Mitigation reduces its risk while the activity continues; transfer and acceptance do not by themselves stop it.",
        "th": "Avoidance หยุดกิจกรรมที่ระบุ ส่วน Mitigation ลดความเสี่ยงขณะยังดำเนินกิจกรรมต่อ และ Transfer กับ Acceptance ไม่ได้หยุดกิจกรรมนั้นโดยตัวมันเอง"
      }
    }
  },
  {
    "id": 614,
    "dom": 2,
    "question": "A cybersecurity steering committee assesses risk using a standardized 5x5 matrix where likelihood is ranked from 1 (Rare) to 5 (Almost Certain) and impact is ranked from 1 (Insignificant) to 5 (Catastrophic). The risk team multiplies the likelihood score by the impact score to assign each vulnerability a total rating from 1 to 25. A committee member asserts that because multiplication is used, the report provides a quantitative financial risk analysis. Which statement MOST accurately characterizes this risk rating methodology?",
    "options": [
      "It represents an Annualized Loss Expectancy (ALE) calculation by measuring the frequency of threat occurrences directly",
      "It is a true quantitative risk analysis because mathematical multiplication is executed to produce numerical values",
      "It is a qualitative assessment that violates international standards because numbers must never be displayed in risk matrices",
      "It is a semi-quantitative risk assessment because ordinal ranking numbers represent relative severity tiers without monetary values or empirical units"
    ],
    "correct_idx": 3,
    "explanation": "Assigning ordinal numeric scores to qualitative bins produces a semi-quantitative risk assessment, prioritizing risks by rank order without measuring cardinal monetary losses.\nA: Annualized Loss Expectancy (ALE) requires multiplying Single Loss Expectancy (SLE in dollars) by Annualized Rate of Occurrence (ARO); it cannot be derived from arbitrary 1-5 scales.\nB: Performing arithmetic on subjective ordinal scores does not convert qualitative tiers into quantitative data; quantitative analysis requires measurable empirical units (e.g., dollars, hours).\nC: NIST SP 800-30 recognizes semi-quantitative scales. Using numbers is not itself a violation; whether the method is appropriate depends on the defined scales, assumptions and assessment context.",
    "short_explanation_en": "Ordinal risk scales support semi-quantitative ranking; arithmetic alone does not establish quantitative measurement.",
    "question_th": "คณะกรรมการกำกับดูแลความมั่นคงปลอดภัยไซเบอร์ประเมินความเสี่ยงโดยใช้ตารางเมทริกซ์ 5x5 โดยกำหนดโอกาสเกิดตั้งแต่ 1 (เกิดยากมาก) ถึง 5 (เกิดเกือบแน่นอน) และผลกระทบตั้งแต่ 1 (เล็กน้อย) ถึง 5 (รุนแรงมาก) ทีมประเมินนำคะแนนโอกาสเกิดมาคูณกับผลกระทบเพื่อให้ได้คะแนนรวมตั้งแต่ 1 ถึง 25 สมาชิกคณะกรรมการท่านหนึ่งกล่าวว่าเนื่องจากมีการคูณตัวเลข รายงานนี้จึงเป็นการวิเคราะห์ความเสี่ยงเชิงปริมาณทางการเงิน ข้อความใดต่อไปนี้ประเมินวิธีการจัดอันดับความเสี่ยงนี้ได้ถูกต้องมากที่สุด?",
    "options_th": [
      "เป็นการคำนวณหาค่าความเสียหายรายปีที่คาดว่าจะเกิดขึ้น (ALE) โดยตรง ผ่านการวัดความถี่ในการเกิดภัยคุกคาม",
      "เป็นการวิเคราะห์ความเสี่ยงเชิงปริมาณ (Quantitative) ที่แท้จริง เนื่องจากมีการใช้การคำนวณทางคณิตศาสตร์ด้วยการคูณเพื่อให้ได้ตัวเลขสรุป",
      "เป็นการประเมินเชิงคุณภาพที่ละเมิดมาตรฐานสากล เนื่องจากมาตรฐานห้ามใช้ตัวเลขในตารางประเมินความเสี่ยงโดยเด็ดขาด",
      "เป็นวิธีการประเมินความเสี่ยงแบบกึ่งเชิงปริมาณ (Semi-Quantitative) เนื่องจากตัวเลขเป็นเพียงลำดับความสำคัญเปรียบเทียบ โดยไม่มีหน่วยทางการเงินหรือหน่วยวัดเชิงประจักษ์"
    ],
    "explanation_th": "การใส่ตัวเลขลำดับในเกณฑ์เชิงคุณภาพจัดเป็นการประเมินแบบกึ่งเชิงปริมาณ ซึ่งใช้จัดอันดับความสำคัญเปรียบเทียบ แต่ไม่ได้วัดมูลค่าความเสียหายเป็นตัวเงินจริง\nA: การคำนวณ ALE ต้องใช้การคูณความเสียหายต่อครั้งเป็นตัวเงิน (SLE) กับอัตราการเกิดในรอบปี (ARO) ไม่สามารถสรุปจากสเกล 1-5 ได้\nB: การนำตัวเลขลำดับมาคำนวณไม่ได้เปลี่ยนข้อมูลเชิงคุณภาพเป็นเชิงปริมาณ การประเมินเชิงปริมาณต้องใช้หน่วยวัดเชิงประจักษ์จริง (เช่น มูลค่าเงิน, ชั่วโมง)\nC: NIST SP 800-30 ยอมรับการใช้มาตราส่วนกึ่งเชิงปริมาณ การใช้ตัวเลขไม่ได้เป็นการละเมิดโดยตัวมันเอง ส่วนวิธีการเหมาะสมหรือไม่ขึ้นกับนิยามมาตราส่วน สมมติฐาน และบริบทการประเมิน",
    "explanation_detail": {
      "correct": {
        "en": "Assigning ordinal numeric scores to qualitative bins produces a semi-quantitative risk assessment, prioritizing risks by rank order without measuring cardinal monetary losses.",
        "th": "การใส่ตัวเลขลำดับในเกณฑ์เชิงคุณภาพจัดเป็นการประเมินแบบกึ่งเชิงปริมาณ ซึ่งใช้จัดอันดับความสำคัญเปรียบเทียบ แต่ไม่ได้วัดมูลค่าความเสียหายเป็นตัวเงินจริง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Annualized Loss Expectancy (ALE) requires multiplying Single Loss Expectancy (SLE in dollars) by Annualized Rate of Occurrence (ARO); it cannot be derived from arbitrary 1-5 scales.",
          "text_th": "การคำนวณ ALE ต้องใช้การคูณความเสียหายต่อครั้งเป็นตัวเงิน (SLE) กับอัตราการเกิดในรอบปี (ARO) ไม่สามารถสรุปจากสเกล 1-5 ได้"
        },
        {
          "letter": "B",
          "text_en": "Performing arithmetic on subjective ordinal scores does not convert qualitative tiers into quantitative data; quantitative analysis requires measurable empirical units (e.g., dollars, hours).",
          "text_th": "การนำตัวเลขลำดับมาคำนวณไม่ได้เปลี่ยนข้อมูลเชิงคุณภาพเป็นเชิงปริมาณ การประเมินเชิงปริมาณต้องใช้หน่วยวัดเชิงประจักษ์จริง (เช่น มูลค่าเงิน, ชั่วโมง)"
        },
        {
          "letter": "C",
          "text_en": "NIST SP 800-30 recognizes semi-quantitative scales. Using numbers is not itself a violation; whether the method is appropriate depends on the defined scales, assumptions and assessment context.",
          "text_th": "NIST SP 800-30 ยอมรับการใช้มาตราส่วนกึ่งเชิงปริมาณ การใช้ตัวเลขไม่ได้เป็นการละเมิดโดยตัวมันเอง ส่วนวิธีการเหมาะสมหรือไม่ขึ้นกับนิยามมาตราส่วน สมมติฐาน และบริบทการประเมิน"
        }
      ],
      "example": {
        "en": "An organization rates risk as 4 (Likelihood) x 3 (Impact) = 12. This is semi-quantitative. If they calculate that a server outage costs $50,000 per incident and occurs twice a year (ALE = $100,000), that is quantitative.",
        "th": "องค์กรประเมินความเสี่ยงได้ 4 x 3 = 12 นี่คือกึ่งเชิงปริมาณ แต่หากคำนวณว่าเซิร์ฟเวอร์ล่มจะเสียหายครั้งละ 50,000 ดอลลาร์ และเกิดขึ้นปีละ 2 ครั้ง (ALE = 100,000 ดอลลาร์) นี่จึงเป็นเชิงปริมาณ"
      },
      "exam_tip": {
        "en": "Distinguish descriptive categories, ordinal ranking scales and numerical estimates with meaningful units. Financial estimates are examples of quantitative analysis, not its only form.",
        "th": "แยกระดับเชิงพรรณนา มาตราส่วนจัดอันดับ และค่าประมาณตัวเลขที่มีหน่วยมีความหมาย การประมาณทางการเงินเป็นตัวอย่างการวิเคราะห์เชิงปริมาณ ไม่ใช่รูปแบบเดียว"
      }
    }
  },
  {
    "id": 615,
    "dom": 2,
    "question": "Following a catastrophic regional power grid failure and electrical fire at corporate headquarters, the enterprise crisis team activates contingency operations. One team deploys mobile laptops, establishes alternate customer service call routing, and activates manual order-taking procedures. Meanwhile, a technical team provisions cloud virtual machines and restores database backups. Which of the following represents the PRIMARY objective of the Business Continuity Plan (BCP) rather than the Disaster Recovery Plan (DRP)?",
    "options": [
      "Reconfiguring border firewall routing and virtual local area network (VLAN) security boundaries",
      "Restoring database schemas and transaction logs from offsite storage to alternate cloud virtual servers",
      "Ensuring vital enterprise operations and customer-facing business services continue functioning during the disruption",
      "Performing forensic log analysis on the uninterruptible power supply (UPS) to identify the electrical failure source"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Ensuring vital enterprise operations and customer services continue functioning during a disaster is the core mandate of Business Continuity (BCP), focusing on people, processes, and business survival. Option A is incorrect: Reconfiguring network infrastructure, firewalls, and switches addresses technical communication recovery, falling directly within Disaster Recovery (DRP) procedures. Option B is incorrect: Restoring databases and operating systems is the offered technical recovery task. It can support the broader business-continuity objective, but C most directly describes continuing essential customer operations. Option D is incorrect: Investigating why equipment failed can inform corrective action, but does not itself maintain the customer operations asked about.",
    "short_explanation_en": "BCP focuses on maintaining critical operational business processes and people workflows, while DRP focuses on restoring technical IT infrastructure and data.",
    "question_th": "หลังจากเกิดเหตุไฟฟ้าดับระดับภูมิภาคและเพลิงไหม้ห้องไฟฟ้าที่สำนักงานใหญ่ ทีมบริหารภาวะวิกฤตได้เปิดใช้งานแผนฉุกเฉิน โดยทีมหนึ่งแจกจ่ายแล็ปท็อป จัดระบบโอนสายบริการลูกค้าไปยังศูนย์สำรอง และเริ่มใช้ขั้นตอนการบันทึกคำสั่งซื้อด้วยมือ (Manual process) ขณะที่ทีมเทคนิคทำการติดตั้งเซิร์ฟเวอร์เสมือนบนคลาวด์และกู้คืนฐานข้อมูลจากข้อมูลสำรอง การกระทำใดต่อไปนี้เป็นเป้าหมายหลักของแผนความต่อเนื่องทางธุรกิจ (BCP) มากกว่าแผนกู้คืนระบบจากภัยพิบัติ (DRP)?",
    "options_th": [
      "การปรับแต่งเส้นทางการกำหนดเส้นทางของไฟร์วอลล์และขอบเขตความปลอดภัยของเครือข่ายเสมือน (VLAN)",
      "การกู้คืนโครงสร้างฐานข้อมูลและบันทึกธุรกรรมจากแหล่งจัดเก็บสำรองนอกสถานที่ไปยังคลาวด์เซิร์ฟเวอร์สำรอง",
      "การทำให้การดำเนินงานที่สำคัญขององค์กรและบริการลูกค้ายังคงดำเนินต่อไปได้ในระหว่างเกิดภัยพิบัติ",
      "การตรวจวิเคราะห์ทางนิติวิทยาศาสตร์ต่อบันทึกข้อมูลของเครื่องสำรองไฟฟ้า (UPS) เพื่อหาสาเหตุการลัดวงจร"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การทำให้การดำเนินงานและบริการลูกค้ายังคงขับเคลื่อนต่อไปได้คือเป้าหมายหลักของ BCP ซึ่งเน้นที่คน กระบวนการ และความอยู่รอดของธุรกิจโดยรวม\n- ข้อ A ไม่ถูกต้อง: การปรับแต่งระบบเครือข่ายและไฟร์วอลล์เป็นการกู้คืนระบบเทคโนโลยี ซึ่งจัดเป็นขั้นตอนของแผน DRP โดยตรง\n- ข้อ B ไม่ถูกต้อง: การกู้ฐานข้อมูลและระบบปฏิบัติการเป็นงานกู้คืนทางเทคนิคที่เสนอ ซึ่งสนับสนุนความต่อเนื่องทางธุรกิจได้ แต่ข้อ C อธิบายการคงงานบริการลูกค้าที่จำเป็นได้ตรงที่สุด\n- ข้อ D ไม่ถูกต้อง: การสืบหาสาเหตุที่อุปกรณ์ล้มเหลวช่วยวางแผนแก้ไขได้ แต่ไม่ได้รักษาการดำเนินงานบริการลูกค้าที่โจทย์ถามด้วยตัวเอง",
    "explanation_detail": {
      "correct": {
        "en": "Ensuring vital enterprise operations and customer services continue functioning during a disaster is the core mandate of Business Continuity (BCP), focusing on people, processes, and business survival.",
        "th": "การทำให้การดำเนินงานและบริการลูกค้ายังคงขับเคลื่อนต่อไปได้คือเป้าหมายหลักของ BCP ซึ่งเน้นที่คน กระบวนการ และความอยู่รอดของธุรกิจโดยรวม"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Reconfiguring network infrastructure, firewalls, and switches addresses technical communication recovery, falling directly within Disaster Recovery (DRP) procedures.",
          "text_th": "การปรับแต่งระบบเครือข่ายและไฟร์วอลล์เป็นการกู้คืนระบบเทคโนโลยี ซึ่งจัดเป็นขั้นตอนของแผน DRP โดยตรง"
        },
        {
          "letter": "B",
          "text_en": "Restoring databases and operating systems is the offered technical recovery task. It can support the broader business-continuity objective, but C most directly describes continuing essential customer operations.",
          "text_th": "การกู้ฐานข้อมูลและระบบปฏิบัติการเป็นงานกู้คืนทางเทคนิคที่เสนอ ซึ่งสนับสนุนความต่อเนื่องทางธุรกิจได้ แต่ข้อ C อธิบายการคงงานบริการลูกค้าที่จำเป็นได้ตรงที่สุด"
        },
        {
          "letter": "D",
          "text_en": "Investigating why equipment failed can inform corrective action, but does not itself maintain the customer operations asked about.",
          "text_th": "การสืบหาสาเหตุที่อุปกรณ์ล้มเหลวช่วยวางแผนแก้ไขได้ แต่ไม่ได้รักษาการดำเนินงานบริการลูกค้าที่โจทย์ถามด้วยตัวเอง"
        }
      ],
      "example": {
        "en": "Following an earthquake, a bank uses approved temporary teller stations and manual transaction records to continue permitted cash withdrawals, while its DRP restores the required banking technology.",
        "th": "หลังแผ่นดินไหว ธนาคารใช้จุดบริการชั่วคราวและบันทึกธุรกรรมด้วยมือที่อนุมัติเพื่อให้บริการถอนเงินที่อนุญาตต่อไป ขณะที่แผน DRP กู้คืนเทคโนโลยีธนาคารที่จำเป็น"
      },
      "exam_tip": {
        "en": "ISC2 Key Distinction: BCP is about keeping the BUSINESS and PEOPLE running (operational continuity); DRP is about getting the TECHNOLOGY and DATA back up (technical recovery).",
        "th": "หลักจำสำคัญของ ISC2: BCP คือการทำให้ 'ธุรกิจและคน' ทำงานต่อไปได้ (ความต่อเนื่อง); DRP คือการนำ 'เทคโนโลยีและข้อมูล' กลับคืนมา (การกู้คืนระบบ)"
      }
    }
  },
  {
    "id": 616,
    "dom": 2,
    "question": "An organization is overhauling its disaster recovery and business continuity program. During executive planning sessions, business department heads disagree strongly on recovery sequencing, with the marketing, sales, and logistics leaders each demanding that their specific application be restored first. Which of the following processes should the organization conduct FIRST to objectively determine system recovery priorities and resource allocation?",
    "options": [
      "Negotiate and sign a commercial contract with an external alternate hot site data center facility",
      "Conduct a formal Business Impact Analysis (BIA) to identify critical functions and evaluate downtime loss over time",
      "Execute an unannounced full-scale disaster simulation failover exercise across all enterprise systems",
      "Implement automated continuous data replication software across all corporate production databases"
    ],
    "correct_idx": 1,
    "explanation": "Because recovery priorities have not been established in this scenario, a BIA should identify critical functions, downtime impacts and dependencies before selecting recovery resources. This supports an evidence-based resolution of the departments’ competing requests.\nA: Selecting a site before identifying recovery priorities does not resolve the competing business needs. A hot-site label alone establishes neither required nor achievable recovery time.\nC: A full-scale failover exercise does not substitute for establishing these missing business priorities and dependencies. Such an exercise needs approved objectives and safety arrangements; this is not a universal prohibition on testing existing plans.\nD: Blanket replication selects a technical solution before establishing which recovery needs and dependencies it must satisfy. The stem supplies no cost evidence proving that every such investment is wasteful.",
    "short_explanation_en": "Here, a BIA establishes business recovery needs before recovery resources are selected.",
    "question_th": "องค์กรแห่งหนึ่งกำลังยกเครื่องโปรแกรมการกู้คืนระบบจากภัยพิบัติและความต่อเนื่องทางธุรกิจ ในระหว่างการประชุม หัวหน้าแผนกต่างๆ มีความคิดเห็นขัดแย้งกันอย่างรุนแรงเรื่องลำดับความสำคัญในการกู้คืนระบบ โดยฝ่ายการตลาด ฝ่ายขาย และฝ่ายโลจิสติกส์ต่างเรียกร้องให้กู้คืนระบบของตนก่อนเป็นลำดับแรก กระบวนการใดต่อไปนี้ที่องค์กรควรดำเนินการเป็นลำดับแรก (FIRST) เพื่อกำหนดลำดับความสำคัญของการกู้คืนระบบและการจัดสรรทรัพยากรอย่างเป็นกลางและมีหลักฐานรองรับ?",
    "options_th": [
      "เจรจาและลงนามในสัญญาว่าจ้างศูนย์ข้อมูลสำรองแบบไซต์พร้อมใช้งานทันที (Hot site) กับผู้ให้บริการภายนอก",
      "ดำเนินการวิเคราะห์ผลกระทบทางธุรกิจ (BIA) เพื่อระบุหน้าที่การทำงานที่สำคัญและประเมินความเสียหายจากการหยุดชะงักตามช่วงเวลา",
      "ดำเนินการฝึกซ้อมแผนกู้คืนระบบเสมือนจริงเต็มรูปแบบ (Full-scale simulation) โดยไม่แจ้งล่วงหน้ากับทุกระบบขององค์กร",
      "ติดตั้งซอฟต์แวร์จำลองข้อมูลอย่างต่อเนื่องแบบอัตโนมัติ (Replication software) ไปยังฐานข้อมูลทั้งหมดขององค์กร"
    ],
    "explanation_th": "ในสถานการณ์นี้ยังไม่ได้กำหนดลำดับความสำคัญในการกู้คืน จึงควรทำ BIA เพื่อระบุหน้าที่สำคัญ ผลกระทบจากการหยุดทำงาน และการพึ่งพาระหว่างระบบ ก่อนเลือกทรัพยากรกู้คืน เพื่อใช้หลักฐานตัดสินคำขอที่ขัดแย้งกันของแต่ละฝ่าย\nA: การเลือกสถานที่ก่อนระบุลำดับกู้คืนไม่ได้ตัดสินความต้องการธุรกิจที่ขัดกัน ชื่อ Hot site เพียงอย่างเดียวไม่ยืนยันเวลาที่ต้องการหรือเวลาที่ทำได้จริง\nC: การฝึก Failover เต็มรูปแบบไม่ได้แทนการกำหนดลำดับธุรกิจและความพึ่งพาที่ขาดอยู่ การฝึกต้องมีวัตถุประสงค์และการจัดการความปลอดภัยที่อนุมัติ ไม่ใช่ข้อห้ามสากลในการทดสอบแผนที่มีอยู่\nD: การทำ Replication ทุกระบบเป็นการเลือกเทคโนโลยีก่อนกำหนดความต้องการกู้คืนและความพึ่งพาที่ต้องตอบ โจทย์ไม่มีข้อมูลต้นทุนที่พิสูจน์ว่าการลงทุนทุกกรณีสิ้นเปลือง",
    "explanation_detail": {
      "correct": {
        "en": "Because recovery priorities have not been established in this scenario, a BIA should identify critical functions, downtime impacts and dependencies before selecting recovery resources. This supports an evidence-based resolution of the departments’ competing requests.",
        "th": "ในสถานการณ์นี้ยังไม่ได้กำหนดลำดับความสำคัญในการกู้คืน จึงควรทำ BIA เพื่อระบุหน้าที่สำคัญ ผลกระทบจากการหยุดทำงาน และการพึ่งพาระหว่างระบบ ก่อนเลือกทรัพยากรกู้คืน เพื่อใช้หลักฐานตัดสินคำขอที่ขัดแย้งกันของแต่ละฝ่าย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Selecting a site before identifying recovery priorities does not resolve the competing business needs. A hot-site label alone establishes neither required nor achievable recovery time.",
          "text_th": "การเลือกสถานที่ก่อนระบุลำดับกู้คืนไม่ได้ตัดสินความต้องการธุรกิจที่ขัดกัน ชื่อ Hot site เพียงอย่างเดียวไม่ยืนยันเวลาที่ต้องการหรือเวลาที่ทำได้จริง"
        },
        {
          "letter": "C",
          "text_en": "A full-scale failover exercise does not substitute for establishing these missing business priorities and dependencies. Such an exercise needs approved objectives and safety arrangements; this is not a universal prohibition on testing existing plans.",
          "text_th": "การฝึก Failover เต็มรูปแบบไม่ได้แทนการกำหนดลำดับธุรกิจและความพึ่งพาที่ขาดอยู่ การฝึกต้องมีวัตถุประสงค์และการจัดการความปลอดภัยที่อนุมัติ ไม่ใช่ข้อห้ามสากลในการทดสอบแผนที่มีอยู่"
        },
        {
          "letter": "D",
          "text_en": "Blanket replication selects a technical solution before establishing which recovery needs and dependencies it must satisfy. The stem supplies no cost evidence proving that every such investment is wasteful.",
          "text_th": "การทำ Replication ทุกระบบเป็นการเลือกเทคโนโลยีก่อนกำหนดความต้องการกู้คืนและความพึ่งพาที่ต้องตอบ โจทย์ไม่มีข้อมูลต้นทุนที่พิสูจน์ว่าการลงทุนทุกกรณีสิ้นเปลือง"
        }
      ],
      "example": {
        "en": "A BIA identifies the impact of losing emergency telemetry and cafeteria inventory, including dependencies needed to recover each function. That evidence informs recovery priorities.",
        "th": "BIA ระบุผลกระทบจากการสูญเสียระบบติดตามสัญญาณชีพฉุกเฉินและระบบสต็อกโรงอาหาร รวมถึงระบบที่แต่ละหน้าที่ต้องพึ่งพาในการกู้คืน หลักฐานนี้ใช้ประกอบการจัดลำดับความสำคัญ"
      },
      "exam_tip": {
        "en": "For this scenario, determine business recovery needs before purchasing a site or deploying recovery technology. Do not treat BIA as the first action in every possible continuity-planning workflow.",
        "th": "ในโจทย์นี้ต้องกำหนดความต้องการกู้คืนทางธุรกิจก่อนซื้อบริการสถานที่สำรองหรือติดตั้งเทคโนโลยี อย่าเหมารวมว่า BIA เป็นขั้นตอนแรกของกระบวนการวางแผนความต่อเนื่องทุกกรณี"
      }
    }
  },
  {
    "id": 617,
    "dom": 2,
    "question": "An enterprise e-commerce platform establishes a Service Level Agreement (SLA) with the following contingency targets: a maximum allowable system downtime of 4 hours, and a maximum acceptable transaction data loss of 2 hours. At 14:00 on a Tuesday, a storage area network failure crashes the primary database. The engineering team rebuilds the server cluster and restores database availability by 16:30. However, upon auditing the data, the team discovers that the most recent valid database backup completed at 02:00 that morning, resulting in the loss of 12 hours of completed customer transactions. Which of the following statements BEST describes the outcome relative to contingency metrics?",
    "options": [
      "The Recovery Time Objective (RTO) was achieved, but the Recovery Point Objective (RPO) was violated",
      "The Recovery Point Objective (RPO) was achieved, but the Recovery Time Objective (RTO) was violated",
      "Both the Recovery Time Objective (RTO) and the Recovery Point Objective (RPO) were violated",
      "Neither the Recovery Time Objective (RTO) nor the Recovery Point Objective (RPO) was violated because service was restored within the same business day"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The system was restored in 2.5 hours, satisfying the 4-hour downtime limit (RTO met); however, 12 hours of transaction data was lost, exceeding the 2-hour acceptable data loss threshold (RPO violated). Option B is incorrect: This inverts the definitions; RTO measures downtime duration (which was met), while RPO measures data loss age (which was breached). Option C is incorrect: RTO was not violated because 2.5 hours is well within the 4-hour SLA downtime threshold. Option D is incorrect: This SLA specifies a 4-hour RTO and a 2-hour RPO. Meeting a calendar business-day boundary does not satisfy those particular limits.",
    "short_explanation_en": "RTO (system downtime limit: 2.5h < 4h) was achieved, but RPO (acceptable data loss: 12h lost > 2h limit) was violated.",
    "question_th": "แพลตฟอร์มอีคอมเมิร์ซขององค์กรกำหนดเป้าหมายในข้อตกลงระดับการให้บริการ (SLA) สำหรับแผนฉุกเฉินไว้ดังนี้: ระบบหยุดทำงานได้สูงสุดไม่เกิน 4 ชั่วโมง และยอมรับการสูญหายของข้อมูลธุรกรรมได้สูงสุดไม่เกิน 2 ชั่วโมง ในวันอังคารเวลา 14:00 น. ระบบเครือข่ายจัดเก็บข้อมูลขัดข้องทำให้ฐานข้อมูลหลักล่ม ทีมวิศวกรสามารถสร้างคลัสเตอร์เซิร์ฟเวอร์ขึ้นมาใหม่และกู้คืนความพร้อมใช้งานของระบบได้สำเร็จในเวลา 16:30 น. อย่างไรก็ตาม เมื่อตรวจสอบข้อมูลพบว่าการสำรองข้อมูลที่สมบูรณ์ครั้งล่าสุดทำไว้เมื่อเวลา 02:00 น. ของเช้าวันนั้น ทำให้ข้อมูลธุรกรรมของลูกค้าตลอด 12 ชั่วโมงสูญหายไป ข้อความใดต่อไปนี้อธิบายผลลัพธ์ที่เกิดขึ้นเมื่อเปรียบเทียบกับตัวชี้วัดแผนฉุกเฉินได้ถูกต้องที่สุด?",
    "options_th": [
      "บรรลุเป้าหมายระยะเวลาการฟื้นฟูระบบ (RTO) แต่ละเมิดเป้าหมายจุดฟื้นฟูข้อมูล (RPO)",
      "บรรลุเป้าหมายจุดฟื้นฟูข้อมูล (RPO) แต่ละเมิดเป้าหมายระยะเวลาการฟื้นฟูระบบ (RTO)",
      "ละเมิดทั้งเป้าหมายระยะเวลาการฟื้นฟูระบบ (RTO) และเป้าหมายจุดฟื้นฟูข้อมูล (RPO)",
      "ไม่มีตัวชี้วัดใดถูกละเมิด เนื่องจากสามารถกู้คืนระบบกลับมาให้บริการได้ภายในวันทำการเดียวกัน"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: ระบบกู้คืนเสร็จใน 2.5 ชั่วโมง จึงผ่านเกณฑ์หยุดทำงานไม่เกิน 4 ชั่วโมง (RTO สำเร็จ) แต่ข้อมูลสูญหายไปถึง 12 ชั่วโมง ซึ่งเกินเกณฑ์ยอมรับได้ 2 ชั่วโมง (RPO ล้มเหลว)\n- ข้อ B ไม่ถูกต้อง: ข้อนี้สลับนิยามกัน โดย RTO วัดเวลาที่ระบบล่ม (ซึ่งทำได้ตามเป้า) ส่วน RPO วัดอายุข้อมูลที่สูญหาย (ซึ่งเกินเกณฑ์ที่ยอมรับได้)\n- ข้อ C ไม่ถูกต้อง: RTO ไม่ได้ถูกละเมิด เพราะเวลา 2.5 ชั่วโมงยังอยู่ในกรอบ 4 ชั่วโมงที่กำหนดไว้ใน SLA\n- ข้อ D ไม่ถูกต้อง: SLA นี้กำหนด RTO 4 ชั่วโมงและ RPO 2 ชั่วโมง การกู้ได้ภายในวันทำการไม่ได้ทำให้ผ่านขีดจำกัดเฉพาะสองค่านี้",
    "explanation_detail": {
      "correct": {
        "en": "The system was restored in 2.5 hours, satisfying the 4-hour downtime limit (RTO met); however, 12 hours of transaction data was lost, exceeding the 2-hour acceptable data loss threshold (RPO violated).",
        "th": "ระบบกู้คืนเสร็จใน 2.5 ชั่วโมง จึงผ่านเกณฑ์หยุดทำงานไม่เกิน 4 ชั่วโมง (RTO สำเร็จ) แต่ข้อมูลสูญหายไปถึง 12 ชั่วโมง ซึ่งเกินเกณฑ์ยอมรับได้ 2 ชั่วโมง (RPO ล้มเหลว)"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "This inverts the definitions; RTO measures downtime duration (which was met), while RPO measures data loss age (which was breached).",
          "text_th": "ข้อนี้สลับนิยามกัน โดย RTO วัดเวลาที่ระบบล่ม (ซึ่งทำได้ตามเป้า) ส่วน RPO วัดอายุข้อมูลที่สูญหาย (ซึ่งเกินเกณฑ์ที่ยอมรับได้)"
        },
        {
          "letter": "C",
          "text_en": "RTO was not violated because 2.5 hours is well within the 4-hour SLA downtime threshold.",
          "text_th": "RTO ไม่ได้ถูกละเมิด เพราะเวลา 2.5 ชั่วโมงยังอยู่ในกรอบ 4 ชั่วโมงที่กำหนดไว้ใน SLA"
        },
        {
          "letter": "D",
          "text_en": "This SLA specifies a 4-hour RTO and a 2-hour RPO. Meeting a calendar business-day boundary does not satisfy those particular limits.",
          "text_th": "SLA นี้กำหนด RTO 4 ชั่วโมงและ RPO 2 ชั่วโมง การกู้ได้ภายในวันทำการไม่ได้ทำให้ผ่านขีดจำกัดเฉพาะสองค่านี้"
        }
      ],
      "example": {
        "en": "Think of RTO as a stopwatch running forward (how long until the servers are running again?) and RPO as a calendar looking backward (how far back do we have to recreate lost data?).",
        "th": "เปรียบ RTO เหมือนนาฬิกาจับเวลาเดินหน้า (อีกกี่ชั่วโมงระบบถึงจะเปิด?) และ RPO เหมือนปฏิทินมองย้อนหลัง (ข้อมูลย้อนหลังหายไปกี่ชั่วโมงที่ต้องคีย์ใหม่?)"
      },
      "exam_tip": {
        "en": "RTO is the target recovery duration; RPO specifies the target recoverable point or maximum acceptable data-loss window. Compare actual recovery and retained data against those targets.",
        "th": "RTO คือระยะเวลากู้คืนเป้าหมาย ส่วน RPO คือจุดเวลาข้อมูลที่ต้องกู้กลับได้หรือช่วงข้อมูลสูญหายสูงสุดที่ยอมรับได้ เปรียบเทียบผลกู้คืนและข้อมูลที่เหลือจริงกับเป้าหมายเหล่านี้"
      }
    }
  },
  {
    "id": 618,
    "dom": 2,
    "question": "A regional healthcare provider maintains automated hourly data backups for its electronic health record (EHR) database. To ensure rapid recovery, the IT team writes backups to a high-speed Network Attached Storage (NAS) appliance physically installed in the same server room rack as the production database servers. During an overnight severe winter storm, an overhead heating pipe ruptures, pouring pressurized water directly into the server racks and completely destroying both the production servers and the NAS backup appliance. Which of the following represents the PRIMARY architectural flaw in this organization's backup strategy?",
    "options": [
      "Relying exclusively on daily differential backups rather than maintaining independent full backup baselines",
      "Using an automated hourly backup schedule instead of a continuous transaction journaling solution",
      "Storing backups on magnetic disk media rather than physical magnetic tape cartridges",
      "Lack of geographic separation between primary systems and backup storage, creating a single physical fault domain"
    ],
    "correct_idx": 3,
    "explanation": "In the stated flood scenario, production and co-located backups share a physical failure domain. Backup frequency alone does not protect recovery data from an event that can damage both copies; the recovery strategy must address that common hazard.\nA: Backup type selection (full vs differential) determines data recovery speed, but does not solve physical destruction when primary and backup storage share the same flooded room.\nB: Hourly copying does not protect copies from the shared physical hazard. Whether that interval meets data-loss needs requires the recovery requirements; the demonstrated failure is co-location.\nC: Changing the medium alone does not remove the shared flood exposure. Tape in an unprotected location can also be damaged; actual protection and recovery usability need assessment.",
    "short_explanation_en": "Co-located production and backup copies may share the same disaster exposure; backup frequency alone does not address that hazard.",
    "question_th": "ผู้ให้บริการสาธารณสุขระดับภูมิภาคแห่งหนึ่งจัดให้มีการสำรองข้อมูลระบบเวชระเบียนอิเล็กทรอนิกส์ (EHR) โดยอัตโนมัติทุกๆ หนึ่งชั่วโมง เพื่อให้กู้คืนข้อมูลได้อย่างรวดเร็ว ทีมไอทีจึงกำหนดให้บันทึกข้อมูลสำรองลงบนอุปกรณ์จัดเก็บข้อมูลบนเครือข่ายความเร็วสูง (NAS) ซึ่งติดตั้งอยู่ในตู้แร็กเดียวกับเซิร์ฟเวอร์ฐานข้อมูลหลักในห้องเซิร์ฟเวอร์ ในช่วงพายุฤดูหนาว ท่อทำความร้อนเหนือเพดานแตก ส่งผลให้น้ำไหลทะลักเข้าตู้แร็กโดยตรงและทำลายทั้งเซิร์ฟเวอร์หลักและอุปกรณ์ NAS จนเสียหายสิ้นเชิง ข้อใดต่อไปนี้คือข้อบกพร่องทางสถาปัตยกรรมหลัก (PRIMARY flaw) ในกลยุทธ์การสำรองข้อมูลขององค์กรนี้?",
    "options_th": [
      "การพึ่งพาการสำรองข้อมูลแบบผลต่างรายวัน (Differential backup) เพียงอย่างเดียว โดยไม่มีการจัดทำชุดข้อมูลสำรองแบบเต็มชุดที่เป็นอิสระ",
      "การใช้รอบเวลาการสำรองข้อมูลอัตโนมัติทุกหนึ่งชั่วโมง แทนที่จะใช้โซลูชันบันทึกธุรกรรมอย่างต่อเนื่อง",
      "การเลือกจัดเก็บข้อมูลสำรองไว้บนฮาร์ดดิสก์แบบแม่เหล็ก แทนการใช้ตลับเทปแม่เหล็กสำหรับเก็บถาวร",
      "การขาดการแยกแหล่งจัดเก็บข้อมูลทางภูมิศาสตร์ (Lack of geographic separation) ทำให้ระบบหลักและระบบสำรองอยู่ในจุดเสี่ยงเดียวกัน"
    ],
    "explanation_th": "ในสถานการณ์น้ำท่วมตามโจทย์ ระบบหลักและข้อมูลสำรองที่อยู่ร่วมสถานที่มีจุดเสี่ยงต่อเหตุทางกายภาพร่วมกัน ความถี่ในการสำรองเพียงอย่างเดียวไม่ได้ป้องกันข้อมูลสำหรับกู้คืนจากเหตุที่อาจทำลายทั้งสองชุด แผนกู้คืนจึงต้องจัดการภัยร่วมดังกล่าว\nA: การเลือกประเภทการสำรองข้อมูล (Full vs Differential) ส่งผลต่อความเร็วในการกู้ข้อมูล แต่ไม่ช่วยแก้ปัญหาการถูกทำลายทางกายภาพเมื่อระบบจริงและระบบสำรองอยู่ในห้องเดียวกัน\nB: การสำรองทุกชั่วโมงไม่ได้ปกป้องสำเนาจากภัยทางกายภาพร่วม ความเหมาะสมของช่วงเวลาต้องเทียบข้อกำหนดการสูญหายของข้อมูล ส่วนปัญหาที่โจทย์แสดงคือการเก็บร่วมสถานที่\nC: การเปลี่ยนสื่อเพียงอย่างเดียวไม่ลบความเสี่ยงน้ำท่วมร่วม เทปในที่ที่ไม่มีการป้องกันก็เสียหายได้ ต้องประเมินการป้องกันจริงและความสามารถนำกลับมากู้คืน",
    "explanation_detail": {
      "correct": {
        "en": "In the stated flood scenario, production and co-located backups share a physical failure domain. Backup frequency alone does not protect recovery data from an event that can damage both copies; the recovery strategy must address that common hazard.",
        "th": "ในสถานการณ์น้ำท่วมตามโจทย์ ระบบหลักและข้อมูลสำรองที่อยู่ร่วมสถานที่มีจุดเสี่ยงต่อเหตุทางกายภาพร่วมกัน ความถี่ในการสำรองเพียงอย่างเดียวไม่ได้ป้องกันข้อมูลสำหรับกู้คืนจากเหตุที่อาจทำลายทั้งสองชุด แผนกู้คืนจึงต้องจัดการภัยร่วมดังกล่าว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Backup type selection (full vs differential) determines data recovery speed, but does not solve physical destruction when primary and backup storage share the same flooded room.",
          "text_th": "การเลือกประเภทการสำรองข้อมูล (Full vs Differential) ส่งผลต่อความเร็วในการกู้ข้อมูล แต่ไม่ช่วยแก้ปัญหาการถูกทำลายทางกายภาพเมื่อระบบจริงและระบบสำรองอยู่ในห้องเดียวกัน"
        },
        {
          "letter": "B",
          "text_en": "Hourly copying does not protect copies from the shared physical hazard. Whether that interval meets data-loss needs requires the recovery requirements; the demonstrated failure is co-location.",
          "text_th": "การสำรองทุกชั่วโมงไม่ได้ปกป้องสำเนาจากภัยทางกายภาพร่วม ความเหมาะสมของช่วงเวลาต้องเทียบข้อกำหนดการสูญหายของข้อมูล ส่วนปัญหาที่โจทย์แสดงคือการเก็บร่วมสถานที่"
        },
        {
          "letter": "C",
          "text_en": "Changing the medium alone does not remove the shared flood exposure. Tape in an unprotected location can also be damaged; actual protection and recovery usability need assessment.",
          "text_th": "การเปลี่ยนสื่อเพียงอย่างเดียวไม่ลบความเสี่ยงน้ำท่วมร่วม เทปในที่ที่ไม่มีการป้องกันก็เสียหายได้ ต้องประเมินการป้องกันจริงและความสามารถนำกลับมากู้คืน"
        }
      ],
      "example": {
        "en": "A recovery plan considers whether flooding could affect both the production room and its backup storage, then provides protected recovery copies outside that common hazard where needed.",
        "th": "แผนกู้คืนพิจารณาว่าน้ำท่วมอาจกระทบทั้งห้องระบบหลักและที่เก็บข้อมูลสำรองหรือไม่ แล้วจัดให้มีชุดข้อมูลกู้คืนที่ได้รับการปกป้องอยู่นอกภัยร่วมดังกล่าวตามความจำเป็น"
      },
      "exam_tip": {
        "en": "Assess common hazards affecting production and backups, and verify that the recovery copies remain accessible and usable under the planned disaster conditions.",
        "th": "ประเมินภัยร่วมที่อาจกระทบทั้งระบบหลักและข้อมูลสำรอง และตรวจว่าชุดข้อมูลกู้คืนยังเข้าถึงและใช้งานได้ภายใต้เงื่อนไขภัยพิบัติที่วางแผนไว้"
      }
    }
  },
  {
    "id": 619,
    "dom": 2,
    "question": "A global manufacturing company completes a Business Impact Analysis (BIA) and establishes a Recovery Time Objective (RTO) of 5 business days for its core Enterprise Resource Planning (ERP) platform. The Chief Financial Officer mandates that the alternate site strategy must minimize ongoing operational lease and maintenance expenditures. However, the facility must have pre-installed raised flooring, redundant electrical power feeds, industrial air conditioning, and physical telecom circuits already terminated so that replacement servers can be rapidly delivered, racked, and configured if headquarters is destroyed. Which alternate processing site model is the MOST cost-effective choice that satisfies these requirements?",
    "options": [
      "Warm site",
      "Hot site",
      "Cold site",
      "Mobile site"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. A Cold site provides the physical data center facility (HVAC, power, raised floors, cabling) without pre-installed computer equipment, providing the lowest recurring cost while comfortably meeting a 5-day RTO. Option A is incorrect: A Warm site contains pre-installed server hardware waiting for data restoration, incurring recurring equipment depreciation and lease costs unnecessary for a 5-day window. Option B is incorrect: A Hot site has active redundant hardware and synchronized live data ready for immediate failover within hours, resulting in massive recurring expenditures unjustified for a 5-day downtime tolerance. Option D is incorrect: A Mobile site consists of modular trailers or transportable pods deployed during field emergencies, rather than a contracted permanent commercial recovery facility with pre-installed raised floors.",
    "short_explanation_en": "A Cold Site provides facility infrastructure (power, HVAC, wiring) without servers, making it the most cost-effective option for a 5-day RTO.",
    "question_th": "บริษัทผู้ผลิตระดับโลกได้ทำการวิเคราะห์ผลกระทบทางธุรกิจ (BIA) และกำหนดเป้าหมายระยะเวลาการฟื้นฟูระบบ (RTO) ไว้ที่ 5 วันทำการ สำหรับระบบวางแผนทรัพยากรองค์กร (ERP) ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO) กำหนดว่ากลยุทธ์ศูนย์สำรองต้องประหยัดค่าใช้จ่ายในการเช่าและการบำรุงรักษาต่อเนื่องให้ได้มากที่สุด อย่างไรก็ตาม ศูนย์ดังกล่าวจะต้องมีพื้นยก ระบบไฟฟ้าสำรอง ระบบปรับอากาศ และสายสัญญาณสื่อสารติดตั้งรอไว้ล่วงหน้า เพื่อให้สามารถสั่งซื้อ นำส่ง ติดตั้ง และตั้งค่าเซิร์ฟเวอร์ทดแทนได้อย่างรวดเร็วหากสำนักงานใหญ่ถูกทำลาย ศูนย์ประมวลผลสำรองรูปแบบใดเป็นทางเลือกที่คุ้มค่าที่สุด (MOST cost-effective) ที่ตอบโจทย์ความต้องการเหล่านี้?",
    "options_th": [
      "ศูนย์สำรองแบบ Warm site",
      "ศูนย์สำรองแบบ Hot site",
      "ศูนย์สำรองแบบ Cold site",
      "ศูนย์สำรองแบบ Mobile site"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: Cold site จัดเตรียมอาคารสถานที่และระบบสนับสนุน (แอร์ ไฟฟ้า พื้นยก สายสัญญาณ) ไว้พร้อม แต่ไม่มีเครื่องเซิร์ฟเวอร์ จึงมีค่าใช้จ่ายต่ำสุดและตอบโจทย์กรอบเวลา 5 วันได้อย่างลงตัว\n- ข้อ A ไม่ถูกต้อง: Warm site มีเครื่องเซิร์ฟเวอร์ติดตั้งรอไว้บางส่วน ทำให้มีต้นทุนค่าเสื่อมและค่าเช่าสูงกว่า Cold site โดยไม่จำเป็นสำหรับระยะเวลาฟื้นฟู 5 วัน\n- ข้อ B ไม่ถูกต้อง: Hot site มีฮาร์ดแวร์ทำงานคู่ขนานและซิงค์ข้อมูลตลอดเวลาสำหรับสลับระบบในหลักนาทีถึงชั่วโมง ซึ่งมีค่าใช้จ่ายสูงมากเกินความจำเป็นสำหรับระบบที่รอได้ 5 วัน\n- ข้อ D ไม่ถูกต้อง: Mobile site เป็นตู้คอนเทนเนอร์หรือรถโมบายล์เคลื่อนที่สำหรับกรณีฉุกเฉินเฉพาะกิจ ไม่ใช่การเช่าพื้นที่ศูนย์ข้อมูลมาตรฐานที่มีพื้นยกถาวร",
    "explanation_detail": {
      "correct": {
        "en": "A Cold site provides the physical data center facility (HVAC, power, raised floors, cabling) without pre-installed computer equipment, providing the lowest recurring cost while comfortably meeting a 5-day RTO.",
        "th": "Cold site จัดเตรียมอาคารสถานที่และระบบสนับสนุน (แอร์ ไฟฟ้า พื้นยก สายสัญญาณ) ไว้พร้อม แต่ไม่มีเครื่องเซิร์ฟเวอร์ จึงมีค่าใช้จ่ายต่ำสุดและตอบโจทย์กรอบเวลา 5 วันได้อย่างลงตัว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A Warm site contains pre-installed server hardware waiting for data restoration, incurring recurring equipment depreciation and lease costs unnecessary for a 5-day window.",
          "text_th": "Warm site มีเครื่องเซิร์ฟเวอร์ติดตั้งรอไว้บางส่วน ทำให้มีต้นทุนค่าเสื่อมและค่าเช่าสูงกว่า Cold site โดยไม่จำเป็นสำหรับระยะเวลาฟื้นฟู 5 วัน"
        },
        {
          "letter": "B",
          "text_en": "A Hot site has active redundant hardware and synchronized live data ready for immediate failover within hours, resulting in massive recurring expenditures unjustified for a 5-day downtime tolerance.",
          "text_th": "Hot site มีฮาร์ดแวร์ทำงานคู่ขนานและซิงค์ข้อมูลตลอดเวลาสำหรับสลับระบบในหลักนาทีถึงชั่วโมง ซึ่งมีค่าใช้จ่ายสูงมากเกินความจำเป็นสำหรับระบบที่รอได้ 5 วัน"
        },
        {
          "letter": "D",
          "text_en": "A Mobile site consists of modular trailers or transportable pods deployed during field emergencies, rather than a contracted permanent commercial recovery facility with pre-installed raised floors.",
          "text_th": "Mobile site เป็นตู้คอนเทนเนอร์หรือรถโมบายล์เคลื่อนที่สำหรับกรณีฉุกเฉินเฉพาะกิจ ไม่ใช่การเช่าพื้นที่ศูนย์ข้อมูลมาตรฐานที่มีพื้นยกถาวร"
        }
      ],
      "example": {
        "en": "An organization leases space in a disaster recovery bunker that has backup diesel generators and fiber connections ready, but only ships replacement servers from their hardware vendor when a catastrophe occurs.",
        "th": "องค์กรเช่าพื้นที่ในศูนย์กู้คืนที่มีเครื่องปั่นไฟและสายไฟเบอร์รอไว้ แต่จะสั่งให้ผู้ขายส่งเซิร์ฟเวอร์เครื่องใหม่เข้ามาติดตั้งเมื่อเกิดเหตุวินาศภัยเท่านั้น"
      },
      "exam_tip": {
        "en": "Phase 3.5 Revalidated concept: Cold site is NOT an empty dirt field. It HAS power, cooling, and network jacks, but NO servers or preloaded data. Hot = hours; Warm = 1-2 days; Cold = days to a week.",
        "th": "ความเข้าใจที่ถูกต้องตาม NIST: Cold site ไม่ใช่ห้องเปล่าที่ไม่มีอะไรเลย แต่มีไฟฟ้า แอร์ และสายเน็ตพร้อม แค่ไม่มีเครื่องคอมพิวเตอร์และข้อมูล Hot = หลักชั่วโมง, Warm = 1-2 วัน, Cold = หลายวันถึงสัปดาห์"
      }
    }
  },
  {
    "id": 620,
    "dom": 2,
    "question": "During an annual governance and compliance audit, the external cybersecurity auditor inspects the organization's Disaster Recovery Plan (DRP). The IT systems manager presents approved, signed disaster recovery runbooks along with daily automated software reports showing 100% successful backup completion statuses across all enterprise databases for the past twelve months. However, the auditor discovers that the IT department has never attempted to restore the backup media to alternate hardware, nor conducted a tabletop or failover drill. Which of the following represents the auditor's BEST finding?",
    "options": [
      "The disaster recovery plan is fully validated because the enterprise backup software verified all daily data write operations without errors",
      "Backup software success reports confirm write operations but do not validate data restorability, system compatibility, or plan viability",
      "The organization must immediately terminate its contract with the backup software vendor for failing to perform automatic live system restores",
      "The IT manager must be formally cited for regulatory fraud because written plans are legally void without annual live datacenter cutover drills"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The reports show reported backup-job completion, not demonstrated restoration of the required service and its dependencies. Restore tests and plan exercises provide additional evidence of recoverability under the tested conditions. Option A is incorrect: Backup status alone does not validate the recovery plan. Corruption, unavailable keys or missing dependencies can prevent restoration unless addressed and tested. Option C is incorrect: Some products support automated recovery tests, but no vendor obligation or performed validation is established here. Product capability does not replace evidence that this organization can recover. Option D is incorrect: The supplied facts establish missing recovery validation, not the legal elements of criminal fraud or automatic invalidation of policies.",
    "short_explanation_en": "Reported backup completion does not demonstrate service recovery; verify restoration and required dependencies through appropriate tests.",
    "question_th": "ในการตรวจสอบการกำกับดูแลและการปฏิบัติตามกฎเกณฑ์ประจำปี ผู้ตรวจสอบความมั่นคงปลอดภัยภายนอกได้เข้าตรวจแผนกู้คืนระบบจากภัยพิบัติ (DRP) ขององค์กร ผู้จัดการฝ่ายระบบไอทีได้แสดงคู่มือปฏิบัติการกู้ภัยพิบัติที่ได้รับการอนุมัติอย่างเป็นทางการ พร้อมรายงานอัตโนมัติจากซอฟต์แวร์สำรองข้อมูลที่แสดงสถานะสำเร็จ 100% ของฐานข้อมูลทั้งหมดตลอด 12 เดือนที่ผ่านมา อย่างไรก็ตาม ผู้ตรวจสอบพบว่าฝ่ายไอทีไม่เคยทำการทดสอบกู้คืนข้อมูลสำรอง (Restore test) ไปยังฮาร์ดแวร์อื่นเลย และไม่เคยจัดซ้อมแผนกู้คืนระบบ ข้อใดต่อไปนี้เป็นข้อสรุปจากการตรวจสอบที่ดีที่สุด (BEST finding)?",
    "options_th": [
      "แผนกู้คืนระบบได้รับการพิสูจน์ความถูกต้องอย่างสมบูรณ์แล้ว เนื่องจากซอฟต์แวร์สำรองข้อมูลยืนยันการเขียนข้อมูลทุกวันโดยไม่มีข้อผิดพลาด",
      "รายงานความสำเร็จของซอฟต์แวร์สำรองข้อมูลยืนยันเพียงการเขียนข้อมูลสำเร็จ แต่ไม่ได้รับประกันว่าข้อมูลจะสามารถกู้คืนได้จริง หรือแผนจะใช้งานได้จริงเมื่อเกิดเหตุ",
      "องค์กรควรยกเลิกสัญญากับผู้ให้บริการซอฟต์แวร์สำรองข้อมูลทันที เนื่องจากระบบไม่ยอมทำการทดสอบกู้คืนระบบเสมือนจริงให้โดยอัตโนมัติ",
      "ผู้จัดการฝ่ายไอทีต้องถูกดำเนินคดีฐานฉ้อฉลต่อหน่วยงานกำกับดูแล เนื่องจากแผนฉุกเฉินที่เป็นลายลักษณ์อักษรจะถือเป็นโมฆะหากไม่มีการซ้อมสลับระบบศูนย์ข้อมูลจริงประจำปี"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: รายงานแสดงสถานะเสร็จของงานสำรอง ไม่ได้แสดงการกู้บริการและส่วนที่พึ่งพากลับมาใช้งานจริง การทดสอบ Restore และซ้อมแผนให้หลักฐานเพิ่มเติมเรื่องความสามารถกู้คืนภายใต้เงื่อนไขที่ทดสอบ\n- ข้อ A ไม่ถูกต้อง: สถานะสำรองเพียงอย่างเดียวไม่ยืนยันว่าแผนกู้คืนใช้ได้ ข้อมูลเสีย กุญแจที่ไม่พร้อม หรือส่วนที่พึ่งพาซึ่งขาดไปอาจทำให้กู้ไม่สำเร็จหากไม่จัดการและทดสอบ\n- ข้อ C ไม่ถูกต้อง: ผลิตภัณฑ์บางชนิดทดสอบกู้คืนอัตโนมัติได้ แต่โจทย์ไม่ได้กำหนดหน้าที่ผู้ขายหรือยืนยันว่าได้ทดสอบแล้ว ความสามารถผลิตภัณฑ์ไม่แทนหลักฐานว่าองค์กรนี้กู้คืนได้\n- ข้อ D ไม่ถูกต้อง: ข้อเท็จจริงที่ให้มายืนยันว่าขาดการตรวจยืนยันการกู้คืน ไม่ได้ยืนยันองค์ประกอบความผิดฉ้อฉลหรือทำให้นโยบายเป็นโมฆะโดยอัตโนมัติ",
    "explanation_detail": {
      "correct": {
        "en": "The reports show reported backup-job completion, not demonstrated restoration of the required service and its dependencies. Restore tests and plan exercises provide additional evidence of recoverability under the tested conditions.",
        "th": "รายงานแสดงสถานะเสร็จของงานสำรอง ไม่ได้แสดงการกู้บริการและส่วนที่พึ่งพากลับมาใช้งานจริง การทดสอบ Restore และซ้อมแผนให้หลักฐานเพิ่มเติมเรื่องความสามารถกู้คืนภายใต้เงื่อนไขที่ทดสอบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Backup status alone does not validate the recovery plan. Corruption, unavailable keys or missing dependencies can prevent restoration unless addressed and tested.",
          "text_th": "สถานะสำรองเพียงอย่างเดียวไม่ยืนยันว่าแผนกู้คืนใช้ได้ ข้อมูลเสีย กุญแจที่ไม่พร้อม หรือส่วนที่พึ่งพาซึ่งขาดไปอาจทำให้กู้ไม่สำเร็จหากไม่จัดการและทดสอบ"
        },
        {
          "letter": "C",
          "text_en": "Some products support automated recovery tests, but no vendor obligation or performed validation is established here. Product capability does not replace evidence that this organization can recover.",
          "text_th": "ผลิตภัณฑ์บางชนิดทดสอบกู้คืนอัตโนมัติได้ แต่โจทย์ไม่ได้กำหนดหน้าที่ผู้ขายหรือยืนยันว่าได้ทดสอบแล้ว ความสามารถผลิตภัณฑ์ไม่แทนหลักฐานว่าองค์กรนี้กู้คืนได้"
        },
        {
          "letter": "D",
          "text_en": "The supplied facts establish missing recovery validation, not the legal elements of criminal fraud or automatic invalidation of policies.",
          "text_th": "ข้อเท็จจริงที่ให้มายืนยันว่าขาดการตรวจยืนยันการกู้คืน ไม่ได้ยืนยันองค์ประกอบความผิดฉ้อฉลหรือทำให้นโยบายเป็นโมฆะโดยอัตโนมัติ"
        }
      ],
      "example": {
        "en": "An enterprise backed up its financial databases flawlessly every night for three years, but when ransomware hit, they discovered the backup encryption key had been lost six months prior, rendering every backup completely unrecoverable.",
        "th": "บริษัทแห่งหนึ่งสำรองข้อมูลการเงินสำเร็จ 100% ทุกคืนเป็นเวลา 3 ปี แต่เมื่อถูกแรนซัมแวร์โจมตีกลับพบว่าทำคีย์ถอดรหัสหายไปเมื่อ 6 เดือนก่อน ทำให้ไฟล์สำรองทั้งหมดไม่สามารถกู้คืนกลับมาได้เลย"
      },
      "exam_tip": {
        "en": "An untested backup may exist, but its recoverability has not been demonstrated. Test restoration, keys and dependencies under relevant recovery conditions.",
        "th": "สำเนาสำรองที่ยังไม่ทดสอบอาจมีอยู่จริง แต่ยังไม่แสดงว่ากู้คืนได้ ควรทดสอบการ Restore กุญแจ และส่วนที่พึ่งพาภายใต้เงื่อนไขกู้คืนที่เกี่ยวข้อง"
      }
    }
  },
  {
    "id": 621,
    "dom": 2,
    "question": "A multinational financial services firm mandates annual computer-based security awareness training, successfully achieving a 99% employee completion rate. However, internal security assessments reveal widespread policy non-compliance: employees routinely bypass multi-factor authentication, share administrative credentials, and ignore suspicious email reporting procedures. Interviews indicate staff observe senior executives openly demanding exemptions from authentication rules and publicly ridiculing security protocols. Which of the following initiatives would BEST foster a resilient, sustainable security culture across this organization?",
    "options": [
      "Executive leadership visibly modeling and adhering to corporate security policies while eliminating executive exemptions",
      "Increasing the mandatory awareness training frequency from once per year to once per quarter for all employees",
      "Instituting immediate disciplinary suspensions and financial salary penalties for any staff failing simulated phishing exercises",
      "Procuring employee monitoring surveillance software to secretly record keystrokes and browser histories across all workstations"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Visible executive commitment and active compliance ('tone at the top') establishes security as a shared cultural imperative that employees respect and emulate. Option B is incorrect: More modules alone do not directly address the demonstrated executive bypass and ridicule of security rules; visible leadership compliance addresses that cause. Option C is incorrect: Punitive sanctions for failing training simulations foster fear and paranoia, driving employees to hide mistakes and avoid reporting genuine security incidents. Option D is incorrect: Deploying covert surveillance tools creates an adversarial workplace environment and treats employees as suspects rather than empowering them as the frontline defense.",
    "short_explanation_en": "Executive leadership modeling compliant behavior ('tone at the top') is the primary catalyst for transforming formal awareness into genuine security culture.",
    "question_th": "สถาบันการเงินข้ามชาติแห่งหนึ่งกำหนดให้พนักงานทุกคนต้องผ่านการฝึกอบรมความตระหนักรู้ด้านความปลอดภัย (Awareness training) ประจำปี และบรรลุอัตราการเรียนจบการอบรมสูงถึง 99% อย่างไรก็ตาม การประเมินภายในพบว่ายังคงมีการละเมิดนโยบายอย่างแพร่หลาย พนักงานมักข้ามการยืนยันตัวตนแบบหลายปัจจัย (MFA) แบ่งปันข้อมูลยืนยันตัวตนของบัญชีผู้ดูแล และไม่รายงานอีเมลที่น่าสงสัย จากการสัมภาษณ์พบว่าพนักงานเห็นผู้บริหารระดับสูงเรียกร้องขอยกเว้นการปฏิบัติตามกฎและมักกล่าวเยาะเย้ยขั้นตอนความปลอดภัย การริเริ่มใดต่อไปนี้ที่จะช่วยสร้างวัฒนธรรมความปลอดภัย (Security culture) ที่เข้มแข็งและยั่งยืนได้ดีที่สุด (BEST)?",
    "options_th": [
      "ผู้บริหารระดับสูงปฏิบัติตามนโยบายความมั่นคงปลอดภัยให้เห็นเป็นแบบอย่างและยกเลิกข้อยกเว้นพิเศษสำหรับผู้บริหาร",
      "การเพิ่มความถี่ในการบังคับอบรมความตระหนักรู้ทางออนไลน์จากปีละหนึ่งครั้งเป็นทุกไตรมาสสำหรับพนักงานทุกคน",
      "การกำหนดบทลงโทษทางวินัยโดยการสั่งพักงานทันทีและตัดเงินเดือนสำหรับพนักงานที่หลงคลิกลิงก์ทดสอบฟิชชิงจำลอง",
      "การจัดซื้อซอฟต์แวร์สอดแนมเพื่อแอบบันทึกการกดแป้นพิมพ์และประวัติการเข้าเว็บของพนักงานทุกคน"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การที่ผู้บริหารระดับสูงปฏิบัติตามกฎให้เห็นเป็นแบบอย่าง (Tone at the top) จะช่วยสร้างวัฒนธรรมความปลอดภัยร่วมกันที่พนักงานให้ความเคารพและปฏิบัติตาม\n- ข้อ B ไม่ถูกต้อง: การเพิ่มบทเรียนเพียงอย่างเดียวไม่แก้พฤติกรรมผู้บริหารที่ข้ามและล้อเลียนกฎตามโจทย์ การปฏิบัติตามให้เห็นเป็นแบบอย่างแก้สาเหตุนั้นได้ตรงกว่า\n- ข้อ C ไม่ถูกต้อง: การลงโทษพนักงานที่หลงกลฟิชชิงจะสร้างความกลัว ทำให้พนักงานปกปิดความผิดและไม่กล้าแจ้งเมื่อเกิดเหตุการณ์จริง\n- ข้อ D ไม่ถูกต้อง: การติดตั้งระบบสอดแนมสร้างบรรยากาศของความไม่ไว้วางใจ และมองพนักงานเป็นผู้ต้องสงสัยแทนที่จะเป็นแนวป้องกันด่านหน้า",
    "explanation_detail": {
      "correct": {
        "en": "Visible executive commitment and active compliance ('tone at the top') establishes security as a shared cultural imperative that employees respect and emulate.",
        "th": "การที่ผู้บริหารระดับสูงปฏิบัติตามกฎให้เห็นเป็นแบบอย่าง (Tone at the top) จะช่วยสร้างวัฒนธรรมความปลอดภัยร่วมกันที่พนักงานให้ความเคารพและปฏิบัติตาม"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "More modules alone do not directly address the demonstrated executive bypass and ridicule of security rules; visible leadership compliance addresses that cause.",
          "text_th": "การเพิ่มบทเรียนเพียงอย่างเดียวไม่แก้พฤติกรรมผู้บริหารที่ข้ามและล้อเลียนกฎตามโจทย์ การปฏิบัติตามให้เห็นเป็นแบบอย่างแก้สาเหตุนั้นได้ตรงกว่า"
        },
        {
          "letter": "C",
          "text_en": "Punitive sanctions for failing training simulations foster fear and paranoia, driving employees to hide mistakes and avoid reporting genuine security incidents.",
          "text_th": "การลงโทษพนักงานที่หลงกลฟิชชิงจะสร้างความกลัว ทำให้พนักงานปกปิดความผิดและไม่กล้าแจ้งเมื่อเกิดเหตุการณ์จริง"
        },
        {
          "letter": "D",
          "text_en": "Deploying covert surveillance tools creates an adversarial workplace environment and treats employees as suspects rather than empowering them as the frontline defense.",
          "text_th": "การติดตั้งระบบสอดแนมสร้างบรรยากาศของความไม่ไว้วางใจ และมองพนักงานเป็นผู้ต้องสงสัยแทนที่จะเป็นแนวป้องกันด่านหน้า"
        }
      ],
      "example": {
        "en": "A CEO visibly follows the applicable badge and MFA requirements and supports appropriate identity checks. This can reinforce expected employee behavior rather than guarantee identical conduct.",
        "th": "ซีอีโอปฏิบัติตามข้อกำหนดบัตรและ MFA ที่ใช้กับตนให้เห็น และสนับสนุนการตรวจตัวตนที่เหมาะสม สิ่งนี้ช่วยเสริมพฤติกรรมที่คาดหวังได้ แต่ไม่รับประกันว่าพนักงานทุกคนจะทำเหมือนกัน"
      },
      "exam_tip": {
        "en": "ISC2 distinction: Awareness = what employees KNOW; Culture = what employees DO when nobody is watching. Culture is driven by leadership behavior, not training certificates.",
        "th": "ข้อสอบ ISC2: ความตระหนักรู้ (Awareness) คือสิ่งที่พนักงาน 'รู้'; วัฒนธรรม (Culture) คือสิ่งที่พนักงาน 'ทำ' ตอนไม่มีใครมอง ซึ่งขึ้นอยู่กับแบบอย่างของผู้นำ"
      }
    }
  },
  {
    "id": 622,
    "dom": 2,
    "question": "An administrative assistant in the executive suite receives an email marked 'HIGH IMPORTANCE & CONFIDENTIAL' appearing to come directly from the Chief Executive Officer (CEO). The email states: 'I am currently in an emergency closed-door board meeting and cannot take calls. We will lose our exclusive international distribution rights unless you wire a $45,000 earnest deposit to the vendor account specified below within the next 30 minutes. Do not discuss this with anyone in finance as it violates regulatory non-disclosure.' Which pair of psychological triggers is the attacker primarily manipulating to deceive the employee?",
    "options": [
      "Reciprocity and Consensus",
      "Curiosity and Greed",
      "Sympathy and Complacency",
      "Authority and Urgency"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The attacker leverages executive status (Authority) to demand compliance and an artificial 30-minute time constraint (Urgency) to suppress careful cognitive deliberation. Option A is incorrect: Reciprocity exploits a feeling of owing someone a favor, and consensus exploits social peer pressure ('everyone else already approved this'). Option B is incorrect: Curiosity and greed manipulate personal desires for secret information or financial windfall, which does not match a corporate wire directive. Option C is incorrect: Sympathy leverages emotional pity for personal suffering or disaster relief, whereas complacency relies on habitual inattention.",
    "short_explanation_en": "The attacker combines executive impersonation (Authority) with a fabricated 30-minute deadline (Urgency) to compel compliance.",
    "question_th": "ผู้ช่วยฝ่ายบริหารในสำนักงานผู้บริหารได้รับอีเมลระบุสถานะ 'สำคัญสูงสุดและเป็นความลับ' ซึ่งส่งมาจากชื่อของประธานเจ้าหน้าที่บริหาร (CEO) ข้อความระบุว่า: 'ผมกำลังติดประชุมบอร์ดแบบปิดเป็นการด่วนและไม่สามารถรับโทรศัพท์ได้ บริษัทเราจะสูญเสียสิทธิ์การจัดจำหน่ายสินค้าระหว่างประเทศ หากคุณไม่โอนเงินมัดจำ 45,000 ดอลลาร์ไปยังบัญชีคู่ค้าตามรายละเอียดด้านล่างนี้ภายใน 30 นาที ห้ามปรึกษาเรื่องนี้กับฝ่ายการเงินเด็ดขาดโดยอ้างว่าการพูดคุยนั้นละเมิดข้อกำหนดไม่เปิดเผยข้อมูลของหน่วยงานกำกับ' ตัวกระตุ้นทางจิตวิทยาคู่ใดที่ผู้โจมตีใช้หลอกลวงพนักงานเป็นหลัก (PRIMARY)?",
    "options_th": [
      "การตอบแทนซึ่งกันและกันและความสอดคล้องกับคนส่วนใหญ่ (Reciprocity and Consensus)",
      "ความอยากรู้อยากเห็นและความโลภ (Curiosity and Greed)",
      "ความเห็นอกเห็นใจและความประมาทเลินเล่อ (Sympathy and Complacency)",
      "อำนาจหน้าที่และความเร่งด่วน (Authority and Urgency)"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ผู้โจมตีอาศัยตำแหน่งซีอีโอ (อำนาจหน้าที่) เพื่อบังคับให้ทำตาม และสร้างเส้นตาย 30 นาที (ความเร่งด่วน) เพื่อกดดันไม่ให้เหยื่อมีเวลาหยุดคิดและตรวจสอบ\n- ข้อ A ไม่ถูกต้อง: การตอบแทนใช้ความรู้สึกอยากตอบแทนบุญคุณ และความสอดคล้องกับคนส่วนใหญ่คือการอ้างว่าทุกคนในแผนกอื่นก็ทำตามหมดแล้ว\n- ข้อ B ไม่ถูกต้อง: ความอยากรู้อยากเห็นและความโลภใช้หลอกล่อด้วยผลประโยชน์ส่วนตัว เช่น หุ้นฟรีหรือข้อมูลลับ ซึ่งไม่ตรงกับสถานการณ์สั่งโอนเงินบริษัท\n- ข้อ C ไม่ถูกต้อง: ความเห็นอกเห็นใจใช้หลอกด้วยเรื่องน่าสงสาร เช่น ญาติป่วย ส่วนความชะล่าใจคือการไม่ระมัดระวังตัวในการทำงานประจำวัน",
    "explanation_detail": {
      "correct": {
        "en": "The attacker leverages executive status (Authority) to demand compliance and an artificial 30-minute time constraint (Urgency) to suppress careful cognitive deliberation.",
        "th": "ผู้โจมตีอาศัยตำแหน่งซีอีโอ (อำนาจหน้าที่) เพื่อบังคับให้ทำตาม และสร้างเส้นตาย 30 นาที (ความเร่งด่วน) เพื่อกดดันไม่ให้เหยื่อมีเวลาหยุดคิดและตรวจสอบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Reciprocity exploits a feeling of owing someone a favor, and consensus exploits social peer pressure ('everyone else already approved this').",
          "text_th": "การตอบแทนใช้ความรู้สึกอยากตอบแทนบุญคุณ และความสอดคล้องกับคนส่วนใหญ่คือการอ้างว่าทุกคนในแผนกอื่นก็ทำตามหมดแล้ว"
        },
        {
          "letter": "B",
          "text_en": "Curiosity and greed manipulate personal desires for secret information or financial windfall, which does not match a corporate wire directive.",
          "text_th": "ความอยากรู้อยากเห็นและความโลภใช้หลอกล่อด้วยผลประโยชน์ส่วนตัว เช่น หุ้นฟรีหรือข้อมูลลับ ซึ่งไม่ตรงกับสถานการณ์สั่งโอนเงินบริษัท"
        },
        {
          "letter": "C",
          "text_en": "Sympathy leverages emotional pity for personal suffering or disaster relief, whereas complacency relies on habitual inattention.",
          "text_th": "ความเห็นอกเห็นใจใช้หลอกด้วยเรื่องน่าสงสาร เช่น ญาติป่วย ส่วนความชะล่าใจคือการไม่ระมัดระวังตัวในการทำงานประจำวัน"
        }
      ],
      "example": {
        "en": "A fake email from 'The President' stating 'Wire this payment immediately before 5 PM or our merger collapses' is a textbook Authority + Urgency attack.",
        "th": "อีเมลปลอมจากผู้บริหารสั่งว่า 'โอนเงินนี้ด่วนภายใน 5 โมงเย็น ไม่อย่างนั้นดีลจะล่ม' คือตัวอย่างคลาสสิกของการใช้ อำนาจ + ความเร่งด่วน"
      },
      "exam_tip": {
        "en": "Identify the mechanism in the facts: the claimed executive position supplies authority pressure, and the short deadline supplies urgency. Do not infer an answer from an alleged exam frequency.",
        "th": "พิจารณากลไกจากข้อเท็จจริง ตำแหน่งผู้บริหารที่อ้างสร้างแรงกดดันด้านอำนาจ ส่วนเส้นตายสั้นสร้างความเร่งด่วน ไม่ควรเลือกคำตอบจากการอ้างความถี่ของข้อสอบ"
      }
    }
  },
  {
    "id": 623,
    "dom": 2,
    "question": "A cyber adversary conducts extensive Open-Source Intelligence (OSINT) gathering on the Chief Financial Officer (CFO) of a publicly traded aerospace contractor. The adversary identifies upcoming confidential mergers-and-acquisitions discussions from executive flight logs and social media metadata. The attacker then crafts a bespoke email directed specifically to the CFO, utilizing the actual project codenames, authentic legal disclosure boilerplate, and spoofed headers from the company's external auditing firm, demanding urgent confirmation of banking wire credentials. Which of the following terms MOST accurately classifies this specific cyber attack?",
    "options": [
      "Watering hole attack",
      "General phishing",
      "Whaling",
      "Vishing"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Whaling is the precise cybersecurity term for spear phishing directed specifically against high-profile senior corporate executives, such as a Chief Financial Officer. Option A is incorrect: A watering hole attack infects trusted third-party websites commonly visited by an organization's employees to distribute malware, rather than sending tailored executive emails. Option B is incorrect: Phishing is the broader family and can include targeted attacks. For the explicitly personalized senior-executive target, whaling is the most specific offered description. Option D is incorrect: Vishing (voice phishing) conducts social engineering through voice telephone calls or automated interactive voice response systems, not written email communications.",
    "short_explanation_en": "Whaling is a highly customized spear phishing attack targeted specifically at high-profile corporate executives such as the CFO.",
    "question_th": "ผู้ไม่ประสงค์ดีทางไซเบอร์ได้ทำการรวบรวมข้อมูลข่าวกรองจากแหล่งเปิด (OSINT) เกี่ยวกับประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO) ของบริษัทคู่สัญญาด้านการบินและอวกาศ โดยตรวจสอบบันทึกเที่ยวบินของผู้บริหารและข้อมูลเมทาดาตาบนโซเชียลมีเดียจนทราบว่ากำลังมีการเจรจาควบรวมกิจการที่เป็นความลับ จากนั้นผู้โจมตีได้สร้างอีเมลที่ปรับแต่งขึ้นเป็นพิเศษส่งตรงถึง CFO โดยเฉพาะ โดยใช้ชื่อรหัสโครงการจริง ใช้ข้อความทางกฎหมายที่สมจริง และปลอมแปลงส่วนหัวอีเมลให้ดูเหมือนส่งมาจากสำนักงานตรวจสอบบัญชีภายนอก เพื่อสั่งให้ยืนยันข้อมูลบัญชีธนาคารอย่างเร่งด่วน คำศัพท์ใดต่อไปนี้จัดประเภทการโจมตีทางไซเบอร์นี้ได้ถูกต้องที่สุด (MOST accurately)?",
    "options_th": [
      "การโจมตีแบบบ่อน้ำ (Watering hole attack)",
      "ฟิชชิงทั่วไป (General phishing)",
      "เวลลิ่ง (Whaling)",
      "วิชชิง (Vishing)"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: Whaling เป็นศัพท์เฉพาะทางความปลอดภัยที่ใช้เรียกการทำ Spear phishing พุ่งเป้าไปที่ผู้บริหารระดับสูง เช่น CFO โดยเฉพาะ\n- ข้อ A ไม่ถูกต้อง: การโจมตีแบบบ่อน้ำ (Watering hole) จะไปแฮกเว็บไซต์ภายนอกที่พนักงานชอบเข้าเพื่อฝังมัลแวร์ ไม่ใช่การส่งอีเมลตรงหาผู้บริหาร\n- ข้อ B ไม่ถูกต้อง: Phishing เป็นกลุ่มกว้างที่รวมการโจมตีเจาะจงเป้าหมายได้ สำหรับการปรับข้อความเจาะจงผู้บริหารระดับสูงตามโจทย์ Whaling เป็นคำอธิบายที่เฉพาะที่สุดในตัวเลือก\n- ข้อ D ไม่ถูกต้อง: วิชชิง (Vishing) เป็นการหลอกลวงผ่านการพูดคุยทางโทรศัพท์ ไม่ใช่การส่งอีเมล",
    "explanation_detail": {
      "correct": {
        "en": "Whaling is the precise cybersecurity term for spear phishing directed specifically against high-profile senior corporate executives, such as a Chief Financial Officer.",
        "th": "Whaling เป็นศัพท์เฉพาะทางความปลอดภัยที่ใช้เรียกการทำ Spear phishing พุ่งเป้าไปที่ผู้บริหารระดับสูง เช่น CFO โดยเฉพาะ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A watering hole attack infects trusted third-party websites commonly visited by an organization's employees to distribute malware, rather than sending tailored executive emails.",
          "text_th": "การโจมตีแบบบ่อน้ำ (Watering hole) จะไปแฮกเว็บไซต์ภายนอกที่พนักงานชอบเข้าเพื่อฝังมัลแวร์ ไม่ใช่การส่งอีเมลตรงหาผู้บริหาร"
        },
        {
          "letter": "B",
          "text_en": "Phishing is the broader family and can include targeted attacks. For the explicitly personalized senior-executive target, whaling is the most specific offered description.",
          "text_th": "Phishing เป็นกลุ่มกว้างที่รวมการโจมตีเจาะจงเป้าหมายได้ สำหรับการปรับข้อความเจาะจงผู้บริหารระดับสูงตามโจทย์ Whaling เป็นคำอธิบายที่เฉพาะที่สุดในตัวเลือก"
        },
        {
          "letter": "D",
          "text_en": "Vishing (voice phishing) conducts social engineering through voice telephone calls or automated interactive voice response systems, not written email communications.",
          "text_th": "วิชชิง (Vishing) เป็นการหลอกลวงผ่านการพูดคุยทางโทรศัพท์ ไม่ใช่การส่งอีเมล"
        }
      ],
      "example": {
        "en": "Phishing: 'Dear customer, your bank account is locked.' Spear Phishing: 'Dear Alice, your marketing budget for Q3 is attached.' Whaling: 'Dear CFO Robert, please approve the confidential Project Titan escrow funds.'",
        "th": "ฟิชชิง: 'เรียนลูกค้า บัญชีของคุณถูกระงับ' | สเปียร์ฟิชชิง: 'เรียนคุณอลิซ ส่งงบการตลาด Q3 มาให้ตรวจค่ะ' | เวลลิ่ง: 'เรียนท่าน CFO ขอให้อนุมัติเงินค้ำประกันโครงการลับไททันด่วนครับ'"
      },
      "exam_tip": {
        "en": "Distinguish specificity: phishing is the broader family, spear phishing is targeted, and whaling targets high-profile senior executives. Channel and target are separate features.",
        "th": "แยกระดับความเฉพาะ Phishing เป็นกลุ่มกว้าง Spear phishing เจาะจงเป้าหมาย และ Whaling เจาะผู้บริหารระดับสูง ช่องทางและกลุ่มเป้าหมายเป็นคนละคุณลักษณะ"
      }
    }
  },
  {
    "id": 624,
    "dom": 2,
    "question": "An employee in human resources receives an incoming telephone call on their office desk phone. The caller claims to be a senior network engineer from the corporate IT service desk conducting an emergency overnight migration of the employee self-service portal. The caller speaks with technical jargon, mentions real internal IT supervisor names, and urgently requests the employee to read back the temporary six-digit one-time password (OTP) that was just sent to the employee's corporate mobile phone. Which of the following BEST describes the transmission channel and the deception mechanism utilized by the attacker?",
    "options": [
      "SMS phishing (Smishing) using an executive authority pretext",
      "Voice phishing (Vishing) using a technical support impersonation pretext",
      "Spear phishing using an automated watering-hole redirection",
      "Baiting attack using a malicious USB media delivery pretext"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The attack channel is telephone voice communication (Vishing), while the manipulative narrative mechanism of adopting a fake IT persona is Pretexting. Option A is incorrect: Smishing specifically relies on SMS text messages delivered to mobile phones, not interactive voice conversations over office desk phones. Option C is incorrect: Spear phishing can use different channels, including voice. This offered pair also specifies watering-hole redirection, which is absent; the stated voice call and false IT role match vishing and pretexting. Option D is incorrect: Baiting can involve different lures. This option specifically requires a USB-media lure, which the telephone scenario does not contain.",
    "short_explanation_en": "The attack utilizes voice telephone communication (Vishing) combined with an invented IT support technician persona (Pretexting).",
    "question_th": "พนักงานฝ่ายทรัพยากรบุคคลได้รับสายโทรศัพท์เข้ามายังโต๊ะทำงาน ผู้โทรอ้างว่าเป็นวิศวกรเครือข่ายอาวุโสจากฝ่ายบริการไอทีขององค์กร ซึ่งกำลังดำเนินการย้ายระบบพอร์ทัลบริการพนักงานอย่างเร่งด่วนในเวลากลางคืน ผู้โทรใช้ศัพท์เทคนิคไอที อ้างชื่อหัวหน้าฝ่ายไอทีที่มีอยู่จริง และขอร้องอย่างเร่งด่วนให้พนักงานอ่านรหัสผ่านแบบใช้ครั้งเดียว (OTP) 6 หลักที่เพิ่งถูกส่งเข้าไปยังโทรศัพท์มือถือของพนักงานให้ฟัง ข้อใดต่อไปนี้อธิบายช่องทางการสื่อสารและกลไกการหลอกลวงที่ผู้โจมตีใช้ได้ถูกต้องที่สุด (BEST)?",
    "options_th": [
      "การหลอกลวงผ่านข้อความสั้น (Smishing) โดยใช้เรื่องแต่งหลอกลวงเพื่อแอบอ้างอำนาจผู้บริหาร",
      "การหลอกลวงด้วยเสียงทางโทรศัพท์ (Vishing) โดยใช้เรื่องแต่งหลอกลวง (Pretext) แอบอ้างเป็นฝ่ายสนับสนุนด้านไอที",
      "การทำสเปียร์ฟิชชิงทางอีเมลโดยใช้การเปลี่ยนเส้นทางไปยังเว็บไซต์ดักจับข้อมูล (Watering-hole)",
      "การโจมตีแบบล่อลวง (Baiting) โดยใช้เรื่องแต่งการส่งมอบสื่อบันทึกข้อมูล USB ที่ฝังมัลแวร์"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ช่องทางการสื่อสารคือการใช้เสียงโทรศัพท์ (Vishing) ขณะที่กลไกการผูกเรื่องราวสร้างตัวตนช่างไอทีปลอมขึ้นมาหลอกลวงคือ Pretexting\n- ข้อ A ไม่ถูกต้อง: Smishing เป็นการหลอกผ่านข้อความสั้น SMS ไม่ใช่การพูดคุยผ่านสายโทรศัพท์ตั้งโต๊ะ\n- ข้อ C ไม่ถูกต้อง: Spear phishing ใช้ได้หลายช่องทางรวมถึงเสียง แต่ตัวเลือกคู่นี้ยังระบุการชักนำผ่าน Watering hole ซึ่งไม่มีในโจทย์ การโทรเสียงและอ้างบทบาท IT ปลอมตรงกับ Vishing และ Pretexting\n- ข้อ D ไม่ถูกต้อง: Baiting ใช้สิ่งล่อได้หลายแบบ แต่ตัวเลือกนี้ระบุสิ่งล่อผ่านสื่อ USB โดยเฉพาะ ซึ่งไม่มีในสถานการณ์โทรศัพท์นี้",
    "explanation_detail": {
      "correct": {
        "en": "The attack channel is telephone voice communication (Vishing), while the manipulative narrative mechanism of adopting a fake IT persona is Pretexting.",
        "th": "ช่องทางการสื่อสารคือการใช้เสียงโทรศัพท์ (Vishing) ขณะที่กลไกการผูกเรื่องราวสร้างตัวตนช่างไอทีปลอมขึ้นมาหลอกลวงคือ Pretexting"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Smishing specifically relies on SMS text messages delivered to mobile phones, not interactive voice conversations over office desk phones.",
          "text_th": "Smishing เป็นการหลอกผ่านข้อความสั้น SMS ไม่ใช่การพูดคุยผ่านสายโทรศัพท์ตั้งโต๊ะ"
        },
        {
          "letter": "C",
          "text_en": "Spear phishing can use different channels, including voice. This offered pair also specifies watering-hole redirection, which is absent; the stated voice call and false IT role match vishing and pretexting.",
          "text_th": "Spear phishing ใช้ได้หลายช่องทางรวมถึงเสียง แต่ตัวเลือกคู่นี้ยังระบุการชักนำผ่าน Watering hole ซึ่งไม่มีในโจทย์ การโทรเสียงและอ้างบทบาท IT ปลอมตรงกับ Vishing และ Pretexting"
        },
        {
          "letter": "D",
          "text_en": "Baiting can involve different lures. This option specifically requires a USB-media lure, which the telephone scenario does not contain.",
          "text_th": "Baiting ใช้สิ่งล่อได้หลายแบบ แต่ตัวเลือกนี้ระบุสิ่งล่อผ่านสื่อ USB โดยเฉพาะ ซึ่งไม่มีในสถานการณ์โทรศัพท์นี้"
        }
      ],
      "example": {
        "en": "Vishing with pretexting: a caller falsely claims to be Officer Smith from fraud prevention and asks for a verification code. Smishing: a deceptive SMS claims a bank card is suspended and supplies a link.",
        "th": "Vishing ร่วมกับ Pretexting: ผู้โทรอ้างเท็จว่าเป็นเจ้าหน้าที่ Smith ฝ่ายป้องกันการฉ้อโกงและขอรหัสยืนยัน ส่วน Smishing คือ SMS ลวงว่าบัตรธนาคารถูกระงับพร้อมส่งลิงก์"
      },
      "exam_tip": {
        "en": "Separate channel, targeting and pretext: voice phishing is vishing, SMS phishing is smishing, targeted phishing is spear phishing, and a fabricated role or story can supply pretexting.",
        "th": "แยกช่องทาง กลุ่มเป้าหมาย และเรื่องอ้าง การหลอกผ่านเสียงคือ Vishing ผ่าน SMS คือ Smishing การเจาะจงเป้าหมายคือ Spear phishing และบทบาทหรือเรื่องราวที่แต่งขึ้นใช้เป็น Pretexting ได้"
      }
    }
  },
  {
    "id": 625,
    "dom": 2,
    "question": "An enterprise enforces a stringent password policy requiring employees to create complex passwords containing at least 16 characters with uppercase letters, numbers, and symbols. Despite this policy, external threat actors successfully breach multiple corporate email accounts using automated credential stuffing attacks, leveraging usernames and passwords exposed in a third-party commercial data breach where employees had reused their corporate passwords for personal services. Which of the following technical controls is the BEST solution to prevent future account takeovers resulting from credential stuffing?",
    "options": [
      "Enforcing multi-factor authentication (MFA) across all enterprise authentication gateways",
      "Mandating that all employees change their corporate passwords every 30 calendar days",
      "Increasing the minimum password length requirement from 16 characters to 24 characters",
      "Prohibiting employees from accessing enterprise services using mobile devices and remote laptops"
    ],
    "correct_idx": 0,
    "explanation": "MFA requires an additional distinct factor, so the stolen username/password pair alone is insufficient when MFA is correctly enforced. It reduces credential-stuffing exposure but is not a guarantee against every takeover; factor strength and resistance to phishing or approval abuse matter.\nB: Arbitrary calendar-based rotation does not itself prevent reuse of compromised credentials. NIST distinguishes such periodic changes from required changes when compromise is evidenced.\nC: A longer password that is still reused and obtained by the attacker remains replayable. Replacing a compromised secret is important, but length alone does not add the distinct factor asked about.\nD: Banning remote work is an extreme operational disruption that fails to solve the root problem of single-factor authentication vulnerability.",
    "short_explanation_en": "Correctly enforced MFA makes stolen passwords alone insufficient and reduces credential-stuffing risk.",
    "question_th": "องค์กรแห่งหนึ่งบังคับใช้นโยบายรหัสผ่านที่เข้มงวด โดยกำหนดให้พนักงานสร้างรหัสผ่านที่มีความซับซ้อนอย่างน้อย 16 ตัวอักษร ประกอบด้วยตัวพิมพ์ใหญ่ ตัวเลข และอักขระพิเศษ อย่างไรก็ตาม ผู้โจมตีภายนอกยังคงสามารถเจาะเข้าบัญชีอีเมลขององค์กรได้สำเร็จหลายบัญชีผ่านการโจมตีแบบ Credential Stuffing โดยใช้ชื่อผู้ใช้และรหัสผ่านที่หลุดมาจากเหตุการณ์ข้อมูลรั่วไหลของเว็บไซต์ภายนอก เนื่องจากพนักงานนำรหัสผ่านขององค์กรไปใช้ซ้ำกับบริการส่วนบุคคล มาตรการควบคุมทางเทคนิคใดต่อไปนี้เป็นแนวทางที่ดีที่สุด (BEST) ในการป้องกันการถูกยึดบัญชีจากการโจมตีแบบ Credential Stuffing ในอนาคต?",
    "options_th": [
      "การบังคับใช้การยืนยันตัวตนแบบหลายปัจจัย (MFA) ในทุกช่องทางการเข้าสู่ระบบขององค์กร",
      "การบังคับให้พนักงานทุกคนต้องเปลี่ยนรหัสผ่านใหม่ทุกๆ 30 วันตามปฏิทิน",
      "การเพิ่มเกณฑ์ความยาวขั้นต่ำของรหัสผ่านจาก 16 ตัวอักษร เป็น 24 ตัวอักษร",
      "การห้ามพนักงานเข้าถึงบริการขององค์กรผ่านอุปกรณ์พกพาและแล็ปท็อปสำหรับการทำงานระยะไกล"
    ],
    "explanation_th": "MFA ต้องใช้ปัจจัยต่างประเภทเพิ่มเติม ทำให้คู่ชื่อผู้ใช้และรหัสผ่านที่ถูกขโมยเพียงอย่างเดียวไม่เพียงพอเมื่อบังคับใช้ MFA อย่างถูกต้อง วิธีนี้ลดความเสี่ยงจาก Credential stuffing แต่ไม่ได้รับประกันว่าจะป้องกันการยึดบัญชีได้ทุกกรณี ความแข็งแรงของปัจจัยและความต้านทานต่อ Phishing หรือการหลอกให้อนุมัติยังมีความสำคัญ\nB: การเปลี่ยนตามปฏิทินโดยไม่มีเหตุไม่ได้ป้องกันการใช้ข้อมูลที่รั่วซ้ำด้วยตัวเอง NIST แยกการเปลี่ยนตามรอบออกจากการเปลี่ยนที่ต้องทำเมื่อมีหลักฐานว่าถูกเปิดเผย\nC: รหัสผ่านที่ยาวขึ้นแต่ยังใช้ซ้ำและตกถึงผู้โจมตียังถูกนำมาใช้ซ้ำได้ การเปลี่ยนความลับที่รั่วสำคัญ แต่ความยาวเพียงอย่างเดียวไม่ได้เพิ่มปัจจัยต่างประเภทที่โจทย์ต้องการ\nD: การห้ามทำงานนอกสถานที่เป็นการรบกวนธุรกิจอย่างรุนแรงและแก้ปัญหาไม่ตรงจุดเรื่องการพึ่งพารหัสผ่านเพียงอย่างเดียว",
    "explanation_detail": {
      "correct": {
        "en": "MFA requires an additional distinct factor, so the stolen username/password pair alone is insufficient when MFA is correctly enforced. It reduces credential-stuffing exposure but is not a guarantee against every takeover; factor strength and resistance to phishing or approval abuse matter.",
        "th": "MFA ต้องใช้ปัจจัยต่างประเภทเพิ่มเติม ทำให้คู่ชื่อผู้ใช้และรหัสผ่านที่ถูกขโมยเพียงอย่างเดียวไม่เพียงพอเมื่อบังคับใช้ MFA อย่างถูกต้อง วิธีนี้ลดความเสี่ยงจาก Credential stuffing แต่ไม่ได้รับประกันว่าจะป้องกันการยึดบัญชีได้ทุกกรณี ความแข็งแรงของปัจจัยและความต้านทานต่อ Phishing หรือการหลอกให้อนุมัติยังมีความสำคัญ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Arbitrary calendar-based rotation does not itself prevent reuse of compromised credentials. NIST distinguishes such periodic changes from required changes when compromise is evidenced.",
          "text_th": "การเปลี่ยนตามปฏิทินโดยไม่มีเหตุไม่ได้ป้องกันการใช้ข้อมูลที่รั่วซ้ำด้วยตัวเอง NIST แยกการเปลี่ยนตามรอบออกจากการเปลี่ยนที่ต้องทำเมื่อมีหลักฐานว่าถูกเปิดเผย"
        },
        {
          "letter": "C",
          "text_en": "A longer password that is still reused and obtained by the attacker remains replayable. Replacing a compromised secret is important, but length alone does not add the distinct factor asked about.",
          "text_th": "รหัสผ่านที่ยาวขึ้นแต่ยังใช้ซ้ำและตกถึงผู้โจมตียังถูกนำมาใช้ซ้ำได้ การเปลี่ยนความลับที่รั่วสำคัญ แต่ความยาวเพียงอย่างเดียวไม่ได้เพิ่มปัจจัยต่างประเภทที่โจทย์ต้องการ"
        },
        {
          "letter": "D",
          "text_en": "Banning remote work is an extreme operational disruption that fails to solve the root problem of single-factor authentication vulnerability.",
          "text_th": "การห้ามทำงานนอกสถานที่เป็นการรบกวนธุรกิจอย่างรุนแรงและแก้ปัญหาไม่ตรงจุดเรื่องการพึ่งพารหัสผ่านเพียงอย่างเดียว"
        }
      ],
      "example": {
        "en": "An employee reuses the same long password on a personal service and corporate email. With the distinct additional factor enforced, replaying that password alone is rejected; this does not establish protection against an attacker who also defeats that factor.",
        "th": "พนักงานใช้รหัสผ่านยาวเดียวกันกับบริการส่วนตัวและอีเมลองค์กร เมื่อบังคับใช้ปัจจัยต่างประเภทเพิ่มเติม การนำรหัสผ่านนั้นมาใช้ซ้ำเพียงอย่างเดียวจะถูกปฏิเสธ แต่ไม่ได้แสดงว่าป้องกันผู้โจมตีที่เอาชนะปัจจัยเพิ่มเติมได้ด้วย"
      },
      "exam_tip": {
        "en": "NIST distinguishes arbitrary periodic expiry from changes required on evidence of compromise. Use distinct-factor authentication where required and screen new passwords against known compromised values.",
        "th": "NIST แยกการหมดอายุตามรอบโดยไม่มีเหตุออกจากการเปลี่ยนเมื่อมีหลักฐานว่ารั่ว ใช้การพิสูจน์ด้วยปัจจัยต่างประเภทตามข้อกำหนดและตรวจรหัสผ่านใหม่เทียบค่าที่ทราบว่ารั่ว"
      }
    }
  },
  {
    "id": 626,
    "dom": 2,
    "question": "A financial payroll specialist opens an email attachment disguised as an invoice from an unfamiliar vendor. Immediately upon extraction, a black command prompt window flashes rapidly on the screen, several desktop icons disappear, and a pop-up window demands $5,000 in cryptocurrency to decrypt company spreadsheets. According to standard enterprise security procedures and the foundational 'recognize and report' duty, what is the FIRST action the employee should take?",
    "options": [
      "Reply directly to the email sender to demand the decryption key and negotiate the ransom fee down",
      "Download a free third-party malware removal tool from the internet to scan and clean the infected workstation",
      "Quickly power off the workstation by physically pulling the electrical power cord from the wall outlet",
      "Immediately report the incident to the designated cybersecurity incident response team or IT helpdesk following established procedures"
    ],
    "correct_idx": 3,
    "explanation": "Following the stated recognize-and-report duty, the employee should promptly contact the designated response team or helpdesk using established procedures. Reporting enables authorized responders to assess containment and evidence needs; it does not by itself guarantee either outcome.\nA: Negotiating with the sender is not the stated reporting duty and can expose the employee to further manipulation. Ransom decisions belong to the organization’s authorized process.\nB: Installing an unapproved removal tool can alter evidence or introduce further risk. The employee should follow the reporting procedure rather than attempt an unauthorized cleanup.\nC: Abrupt power removal can lose volatile evidence. In this recognize-and-report scenario it is not the prescribed first action; shutdown or isolation decisions should follow the response procedure and any urgent safety needs.",
    "short_explanation_en": "The primary duty of an end user upon recognizing a security incident is to immediately report it through established escalation channels.",
    "question_th": "เจ้าหน้าที่ฝ่ายบัญชีเงินเดือนได้เปิดไฟล์แนบในอีเมลซึ่งปลอมแปลงเป็นใบแจ้งหนี้จากคู่ค้าที่ไม่คุ้นเคย ทันทีที่แตกไฟล์ หน้าต่าง Command Prompt สีดำได้กะพริบขึ้นมาบนหน้าจอ ไอคอนบนเดสก์ท็อปหลายตัวเริ่มหายไป และมีหน้าต่างป็อปอัปปรากฏขึ้นเรียกร้องเงินค่าไถ่ 5,000 ดอลลาร์เป็นสกุลเงินคริปโตเพื่อปลดล็อกไฟล์ ตามขั้นตอนความมั่นคงปลอดภัยมาตรฐานขององค์กรและหน้าที่พื้นฐาน 'การสังเกตและรายงาน' (Recognize and Report) การกระทำใดต่อไปนี้ที่พนักงานควรทำเป็นลำดับแรก (FIRST)?",
    "options_th": [
      "ตอบกลับอีเมลของผู้ส่งทันทีเพื่อเรียกร้องขอรับคีย์ถอดรหัสและต่อรองลดจำนวนเงินค่าไถ่",
      "ดาวน์โหลดโปรแกรมกำจัดมัลแวร์ฟรีจากอินเทอร์เน็ตมาทำการสแกนและล้างเครื่องคอมพิวเตอร์ที่ติดมัลแวร์ด้วยตนเอง",
      "ปิดเครื่องคอมพิวเตอร์อย่างรวดเร็วโดยการกระชากปลั๊กไฟออกจากเต้ารับที่ผนังห้องทันที",
      "รายงานเหตุการณ์ไปยังทีมตอบสนองต่อเหตุการณ์ความมั่นคงปลอดภัย (CSIRT) หรือฝ่ายบริการไอทีทันทีตามขั้นตอนที่กำหนดไว้"
    ],
    "explanation_th": "ตามหน้าที่ Recognize and report ที่ระบุในโจทย์ พนักงานควรติดต่อทีมตอบสนองหรือ Helpdesk ที่กำหนดโดยเร็วตามขั้นตอนองค์กร การรายงานช่วยให้ผู้ตอบสนองที่มีอำนาจประเมินการจำกัดผลกระทบและการเก็บหลักฐาน แต่ไม่ได้รับประกันผลลัพธ์ทั้งสองโดยตัวมันเอง\nA: การต่อรองกับผู้ส่งไม่ใช่หน้าที่รายงานที่ระบุ และอาจเปิดทางให้พนักงานถูกหลอกเพิ่มเติม การตัดสินใจเรื่องค่าไถ่ต้องเป็นไปตามกระบวนการของผู้มีอำนาจในองค์กร\nB: การติดตั้งเครื่องมือลบมัลแวร์ที่ไม่ได้รับอนุมัติอาจเปลี่ยนแปลงหลักฐานหรือเพิ่มความเสี่ยง พนักงานควรทำตามขั้นตอนรายงานแทนการพยายามกำจัดมัลแวร์โดยไม่มีอำนาจ\nC: การตัดไฟทันทีอาจทำให้หลักฐานในหน่วยความจำชั่วคราวสูญหาย ในโจทย์ที่กำหนดหน้าที่ Recognize and report จึงไม่ใช่การกระทำแรกตามขั้นตอน การปิดเครื่องหรือแยกเครือข่ายต้องเป็นไปตามกระบวนการตอบสนองและความจำเป็นเร่งด่วนด้านความปลอดภัย",
    "explanation_detail": {
      "correct": {
        "en": "Following the stated recognize-and-report duty, the employee should promptly contact the designated response team or helpdesk using established procedures. Reporting enables authorized responders to assess containment and evidence needs; it does not by itself guarantee either outcome.",
        "th": "ตามหน้าที่ Recognize and report ที่ระบุในโจทย์ พนักงานควรติดต่อทีมตอบสนองหรือ Helpdesk ที่กำหนดโดยเร็วตามขั้นตอนองค์กร การรายงานช่วยให้ผู้ตอบสนองที่มีอำนาจประเมินการจำกัดผลกระทบและการเก็บหลักฐาน แต่ไม่ได้รับประกันผลลัพธ์ทั้งสองโดยตัวมันเอง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Negotiating with the sender is not the stated reporting duty and can expose the employee to further manipulation. Ransom decisions belong to the organization’s authorized process.",
          "text_th": "การต่อรองกับผู้ส่งไม่ใช่หน้าที่รายงานที่ระบุ และอาจเปิดทางให้พนักงานถูกหลอกเพิ่มเติม การตัดสินใจเรื่องค่าไถ่ต้องเป็นไปตามกระบวนการของผู้มีอำนาจในองค์กร"
        },
        {
          "letter": "B",
          "text_en": "Installing an unapproved removal tool can alter evidence or introduce further risk. The employee should follow the reporting procedure rather than attempt an unauthorized cleanup.",
          "text_th": "การติดตั้งเครื่องมือลบมัลแวร์ที่ไม่ได้รับอนุมัติอาจเปลี่ยนแปลงหลักฐานหรือเพิ่มความเสี่ยง พนักงานควรทำตามขั้นตอนรายงานแทนการพยายามกำจัดมัลแวร์โดยไม่มีอำนาจ"
        },
        {
          "letter": "C",
          "text_en": "Abrupt power removal can lose volatile evidence. In this recognize-and-report scenario it is not the prescribed first action; shutdown or isolation decisions should follow the response procedure and any urgent safety needs.",
          "text_th": "การตัดไฟทันทีอาจทำให้หลักฐานในหน่วยความจำชั่วคราวสูญหาย ในโจทย์ที่กำหนดหน้าที่ Recognize and report จึงไม่ใช่การกระทำแรกตามขั้นตอน การปิดเครื่องหรือแยกเครือข่ายต้องเป็นไปตามกระบวนการตอบสนองและความจำเป็นเร่งด่วนด้านความปลอดภัย"
        }
      ],
      "example": {
        "en": "The employee uses the established helpdesk contact to report the ransom message. Authorized responders then assess containment and evidence handling under the incident procedure.",
        "th": "พนักงานใช้ช่องทาง Helpdesk ที่กำหนดเพื่อรายงานข้อความเรียกค่าไถ่ จากนั้นผู้ตอบสนองที่มีอำนาจจะประเมินการจำกัดผลกระทบและจัดการหลักฐานตามขั้นตอนเหตุการณ์"
      },
      "exam_tip": {
        "en": "Read the employee’s stated role and reporting procedure. Authorized containment and evidence handling depend on the incident and safety context.",
        "th": "อ่านบทบาทพนักงานและขั้นตอนรายงานที่โจทย์กำหนด การจำกัดผลกระทบและจัดการหลักฐานโดยผู้มีอำนาจขึ้นกับบริบทเหตุการณ์และความปลอดภัย"
      }
    }
  },
  {
    "id": 627,
    "dom": 2,
    "question": "A newly appointed Chief Information Security Officer (CISO) reviews the monthly security briefing prepared for the corporate Board of Directors. The primary slide highlights: 'Over 14 million inbound port scans blocked by perimeter firewalls this month.' The CISO rejects this slide and requests the metrics team replace it with control effectiveness and risk trend indicators. Which of the following represents the PRIMARY reason raw firewall block counts are considered an ineffective governance metric?",
    "options": [
      "Firewalls operate exclusively at Layer 2 of the OSI model and therefore cannot produce valid cybersecurity measurement data",
      "Perimeter firewall log statistics are classified as proprietary trade secrets that cannot legally be disclosed to corporate board members",
      "They represent an uncontextualized activity count that reflects ambient internet background noise rather than internal security posture or actionable risk",
      "Raw count metrics are only mathematically valid if they are multiplied by the total number of physical server processors in the datacenter"
    ],
    "correct_idx": 2,
    "explanation": "The count alone does not show whether important assets are protected or business risk is improving. In this board briefing it needs context such as scope, trends, exposure and control objectives; counts can still be useful when linked to a defined decision.\nA: Firewalls typically operate at Layers 3, 4, and 7 (application firewalls), not exclusively at Layer 2 (data link layer).\nB: The scenario supplies no legal rule forbidding this disclosure to the board. The stated problem is lack of decision-relevant context, not a blanket prohibition on board access to firewall statistics.\nD: Multiplying by processor count has no defined relationship to the stated control-effectiveness or risk objective. Such a calculation needs a justified measurement model, not an invented formula.",
    "short_explanation_en": "A raw firewall count needs business and control context to support the board’s decision.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) ที่ได้รับการแต่งตั้งใหม่ ได้ตรวจสอบรายงานความปลอดภัยประจำเดือนที่เตรียมไว้สำหรับคณะกรรมการบริหาร (Board of Directors) สไลด์หลักระบุว่า: 'ไฟร์วอลล์สามารถบล็อกการสแกนพอร์ตจากภายนอกได้มากกว่า 14 ล้านครั้งในเดือนนี้' CISO ปฏิเสธสไลด์นี้และสั่งให้ทีมงานแทนที่ด้วยตัวชี้วัดประสิทธิผลของการควบคุมและแนวโน้มความเสี่ยง ข้อใดต่อไปนี้เป็นเหตุผลหลัก (PRIMARY reason) ที่ทำให้จำนวนการบล็อกของไฟร์วอลล์ถือเป็นตัวชี้วัดการกำกับดูแลที่ไร้ประสิทธิภาพ?",
    "options_th": [
      "ไฟร์วอลล์ทำงานอยู่ที่ระดับ Layer 2 ของ OSI Model เท่านั้น จึงไม่สามารถสร้างข้อมูลการวัดผลความมั่นคงปลอดภัยไซเบอร์ที่ถูกต้องได้",
      "สถิติบันทึกการทำงานของไฟร์วอลล์ถูกจัดเป็นความลับทางการค้าตามกฎหมาย ซึ่งห้ามนำไปเปิดเผยต่อคณะกรรมการบริหารของบริษัท",
      "เป็นตัวเลขนับกิจกรรมที่ขาดบริบท ซึ่งสะท้อนเพียงสัญญาณรบกวนทั่วไปบนอินเทอร์เน็ต มากกว่าจะสะท้อนระดับความปลอดภัยภายในหรือความเสี่ยงที่นำไปใช้ตัดสินใจได้",
      "ตัวชี้วัดจำนวนนับจะมีผลสมบูรณ์ทางคณิตศาสตร์ก็ต่อเมื่อนำไปคูณกับจำนวนหน่วยประมวลผล (CPU) ของเซิร์ฟเวอร์ทั้งหมดในศูนย์ข้อมูลเท่านั้น"
    ],
    "explanation_th": "จำนวนครั้งเพียงอย่างเดียวไม่ได้แสดงว่าทรัพย์สินสำคัญได้รับการปกป้องหรือความเสี่ยงทางธุรกิจดีขึ้น ในรายงานต่อคณะกรรมการนี้ต้องมีบริบท เช่น ขอบเขต แนวโน้ม ความเสี่ยง และวัตถุประสงค์ของมาตรการ จำนวนครั้งยังมีประโยชน์ได้เมื่อเชื่อมโยงกับการตัดสินใจที่กำหนดไว้\nA: ไฟร์วอลล์ทำงานที่เลเยอร์ 3, 4 และ 7 (Next-Gen Firewall) ไม่ได้จำกัดอยู่ที่เลเยอร์ 2\nB: โจทย์ไม่ได้ระบุกฎหมายที่ห้ามเปิดเผยสถิตินี้ต่อคณะกรรมการ ปัญหาคือขาดบริบทที่ช่วยตัดสินใจ ไม่ใช่ข้อห้ามทั่วไปไม่ให้คณะกรรมการเข้าถึงสถิติไฟร์วอลล์\nD: การคูณจำนวนหน่วยประมวลผลไม่ได้มีความสัมพันธ์ที่กำหนดไว้กับเป้าหมายประสิทธิผลของมาตรการหรือความเสี่ยงตามโจทย์ การคำนวณต้องมีแบบจำลองการวัดที่อธิบายได้ ไม่ใช่สูตรที่สมมติขึ้น",
    "explanation_detail": {
      "correct": {
        "en": "The count alone does not show whether important assets are protected or business risk is improving. In this board briefing it needs context such as scope, trends, exposure and control objectives; counts can still be useful when linked to a defined decision.",
        "th": "จำนวนครั้งเพียงอย่างเดียวไม่ได้แสดงว่าทรัพย์สินสำคัญได้รับการปกป้องหรือความเสี่ยงทางธุรกิจดีขึ้น ในรายงานต่อคณะกรรมการนี้ต้องมีบริบท เช่น ขอบเขต แนวโน้ม ความเสี่ยง และวัตถุประสงค์ของมาตรการ จำนวนครั้งยังมีประโยชน์ได้เมื่อเชื่อมโยงกับการตัดสินใจที่กำหนดไว้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Firewalls typically operate at Layers 3, 4, and 7 (application firewalls), not exclusively at Layer 2 (data link layer).",
          "text_th": "ไฟร์วอลล์ทำงานที่เลเยอร์ 3, 4 และ 7 (Next-Gen Firewall) ไม่ได้จำกัดอยู่ที่เลเยอร์ 2"
        },
        {
          "letter": "B",
          "text_en": "The scenario supplies no legal rule forbidding this disclosure to the board. The stated problem is lack of decision-relevant context, not a blanket prohibition on board access to firewall statistics.",
          "text_th": "โจทย์ไม่ได้ระบุกฎหมายที่ห้ามเปิดเผยสถิตินี้ต่อคณะกรรมการ ปัญหาคือขาดบริบทที่ช่วยตัดสินใจ ไม่ใช่ข้อห้ามทั่วไปไม่ให้คณะกรรมการเข้าถึงสถิติไฟร์วอลล์"
        },
        {
          "letter": "D",
          "text_en": "Multiplying by processor count has no defined relationship to the stated control-effectiveness or risk objective. Such a calculation needs a justified measurement model, not an invented formula.",
          "text_th": "การคูณจำนวนหน่วยประมวลผลไม่ได้มีความสัมพันธ์ที่กำหนดไว้กับเป้าหมายประสิทธิผลของมาตรการหรือความเสี่ยงตามโจทย์ การคำนวณต้องมีแบบจำลองการวัดที่อธิบายได้ ไม่ใช่สูตรที่สมมติขึ้น"
        }
      ],
      "example": {
        "en": "A board report can relate blocked traffic trends to the monitored scope, exposed critical services and identified control gaps, explaining the limits of what the counts demonstrate.",
        "th": "รายงานต่อคณะกรรมการอาจเชื่อมแนวโน้มทราฟฟิกที่ถูกบล็อกกับขอบเขตที่เฝ้าระวัง บริการสำคัญที่เปิดรับการเชื่อมต่อ และช่องว่างของมาตรการ พร้อมอธิบายข้อจำกัดของสิ่งที่ตัวเลขแสดงได้"
      },
      "exam_tip": {
        "en": "Choose measures that support the intended audience’s decision. Counts, rates, percentages and trends all require defined scope and interpretation.",
        "th": "เลือกตัวชี้วัดที่สนับสนุนการตัดสินใจของกลุ่มเป้าหมาย จำนวนครั้ง อัตรา ร้อยละ และแนวโน้มล้วนต้องกำหนดขอบเขตและวิธีตีความ"
      }
    }
  },
  {
    "id": 628,
    "dom": 2,
    "question": "A digital forensics and incident response team completes a post-incident timeline reconstruction following an intrusion. The investigation confirms the following milestones: \n- 08:00: An attacker successfully compromises an internet-facing web application via an SQL injection exploit.\n- 10:00: The Security Information and Event Management (SIEM) system correlates anomalous database queries and triggers a High-Severity security alert.\n- 10:45: A SOC Tier 1 analyst reviews the queue and completes initial alert triage.\n- 11:30: Incident responders isolate the affected web server from the corporate network.\nWhich of the following time intervals represents the Time to Detect (TTD) for this specific incident?",
    "options": [
      "3.5 hours (from initial system compromise at 08:00 to network isolation containment at 11:30)",
      "2 hours (from initial system compromise at 08:00 to automated alert detection at 10:00)",
      "45 minutes (from automated alert detection at 10:00 to completion of initial alert triage at 10:45)",
      "1.5 hours (from automated alert detection at 10:00 to network isolation containment at 11:30)"
    ],
    "correct_idx": 1,
    "explanation": "For this incident, using the supplied 10:00 detection milestone, TTD is 10:00 minus 08:00, or 2 hours. A mean time to detect would require averaging defined detection intervals over a set of incidents.\nA: Measuring from initial compromise to server isolation encompasses both detection and active incident response containment, conflating TTD with total incident dwell-and-containment time.\nC: The 45 minutes run from alert generation to completion of initial triage, including any queueing and processing time; they are not compromise-to-detection time.\nD: The 1.5-hour interval runs from the detection alert to host isolation. It is a detection-to-containment interval, not the compromise-to-detection interval asked for; a response metric needs its own defined endpoints.",
    "short_explanation_en": "Time to Detect spans from initial compromise (08:00) to detection alert generation (10:00), equaling 2 hours.",
    "question_th": "ทีมตรวจสอบทางนิติวิทยาศาสตร์ดิจิทัลและการตอบสนองต่อเหตุการณ์ได้จัดทำลำดับเหตุการณ์ (Timeline) ภายหลังเกิดการบุกรุกระบบสำเร็จ ผลการสอบสวนยืนยันจุดเวลาสำคัญดังนี้:\n- 08:00 น.: ผู้โจมตีเจาะระบบเว็บแอปพลิเคชันที่เชื่อมต่ออินเทอร์เน็ตสำเร็จผ่านช่องโหว่ SQL Injection\n- 10:00 น.: ระบบ SIEM ตรวจพบความผิดปกติในการสืบค้นฐานข้อมูลและสร้างการแจ้งเตือนความรุนแรงสูง (High-Severity Alert)\n- 10:45 น.: นักวิเคราะห์ SOC ระดับ 1 เปิดดูคิวงานและคัดกรองการแจ้งเตือนเบื้องต้นเสร็จสิ้น\n- 11:30 น.: ทีมตอบสนองต่อเหตุการณ์ตัดการเชื่อมต่อเครือข่ายของเว็บเซิร์ฟเวอร์ที่ได้รับผลกระทบ\nช่วงเวลาใดต่อไปนี้แสดงค่าระยะเวลาในการตรวจจับ (Time to Detect - TTD) สำหรับเหตุการณ์นี้ได้อย่างถูกต้องที่สุด?",
    "options_th": [
      "3.5 ชั่วโมง (นับจากการบุกรุกระบบสำเร็จเวลา 08:00 น. จนถึงเวลาที่ตัดการเชื่อมต่อเครือข่ายสำเร็จเวลา 11:30 น.)",
      "2 ชั่วโมง (นับจากการบุกรุกระบบสำเร็จเวลา 08:00 น. จนถึงเวลาที่ระบบแจ้งเตือนการตรวจจับเวลา 10:00 น.)",
      "45 นาที (นับจากเวลาที่ระบบแจ้งเตือนเวลา 10:00 น. จนถึงเวลาที่นักวิเคราะห์คัดกรองการแจ้งเตือนเบื้องต้นเสร็จสิ้นเวลา 10:45 น.)",
      "1.5 ชั่วโมง (นับจากเวลาที่ระบบแจ้งเตือนเวลา 10:00 น. จนถึงเวลาที่ตัดการเชื่อมต่อเครือข่ายสำเร็จเวลา 11:30 น.)"
    ],
    "explanation_th": "สำหรับเหตุการณ์นี้ เมื่อใช้จุดตรวจพบเวลา 10:00 ตามข้อมูลในโจทย์ TTD คือ 10:00 ลบ 08:00 เท่ากับ 2 ชั่วโมง ส่วน Mean time to detect ต้องคำนวณค่าเฉลี่ยของช่วงเวลาตรวจพบที่กำหนดไว้จากหลายเหตุการณ์\nA: การนับตั้งแต่เจาะระบบจนตัดเน็ต เป็นการรวมทั้งช่วงตรวจจับและการเข้าควบคุมเหตุการณ์เข้าด้วยกัน ซึ่งเป็นการปนกันระหว่าง TTD กับเวลาควบคุมเหตุการณ์ทั้งหมด\nC: ช่วง 45 นาทีเริ่มจากการสร้างแจ้งเตือนจนคัดกรองเบื้องต้นเสร็จสิ้น รวมเวลารอและเวลาปฏิบัติงานที่เกิดขึ้น ไม่ใช่ช่วงเวลาจากการถูกเจาะถึงตรวจพบ\nD: ช่วง 1.5 ชั่วโมงนับจากการแจ้งเตือนตรวจพบถึงการแยกเครื่อง เป็นช่วงเวลาจากตรวจพบถึงจำกัดผลกระทบ ไม่ใช่จากเริ่มถูกเจาะถึงตรวจพบที่โจทย์ถาม และตัวชี้วัดการตอบสนองต้องกำหนดจุดเริ่มและจุดสิ้นสุดของตนเอง",
    "explanation_detail": {
      "correct": {
        "en": "For this incident, using the supplied 10:00 detection milestone, TTD is 10:00 minus 08:00, or 2 hours. A mean time to detect would require averaging defined detection intervals over a set of incidents.",
        "th": "สำหรับเหตุการณ์นี้ เมื่อใช้จุดตรวจพบเวลา 10:00 ตามข้อมูลในโจทย์ TTD คือ 10:00 ลบ 08:00 เท่ากับ 2 ชั่วโมง ส่วน Mean time to detect ต้องคำนวณค่าเฉลี่ยของช่วงเวลาตรวจพบที่กำหนดไว้จากหลายเหตุการณ์"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Measuring from initial compromise to server isolation encompasses both detection and active incident response containment, conflating TTD with total incident dwell-and-containment time.",
          "text_th": "การนับตั้งแต่เจาะระบบจนตัดเน็ต เป็นการรวมทั้งช่วงตรวจจับและการเข้าควบคุมเหตุการณ์เข้าด้วยกัน ซึ่งเป็นการปนกันระหว่าง TTD กับเวลาควบคุมเหตุการณ์ทั้งหมด"
        },
        {
          "letter": "C",
          "text_en": "The 45 minutes run from alert generation to completion of initial triage, including any queueing and processing time; they are not compromise-to-detection time.",
          "text_th": "ช่วง 45 นาทีเริ่มจากการสร้างแจ้งเตือนจนคัดกรองเบื้องต้นเสร็จสิ้น รวมเวลารอและเวลาปฏิบัติงานที่เกิดขึ้น ไม่ใช่ช่วงเวลาจากการถูกเจาะถึงตรวจพบ"
        },
        {
          "letter": "D",
          "text_en": "The 1.5-hour interval runs from the detection alert to host isolation. It is a detection-to-containment interval, not the compromise-to-detection interval asked for; a response metric needs its own defined endpoints.",
          "text_th": "ช่วง 1.5 ชั่วโมงนับจากการแจ้งเตือนตรวจพบถึงการแยกเครื่อง เป็นช่วงเวลาจากตรวจพบถึงจำกัดผลกระทบ ไม่ใช่จากเริ่มถูกเจาะถึงตรวจพบที่โจทย์ถาม และตัวชี้วัดการตอบสนองต้องกำหนดจุดเริ่มและจุดสิ้นสุดของตนเอง"
        }
      ],
      "example": {
        "en": "If a burglar picks a lock at 2:00 AM and trips the motion alarm at 2:15 AM, the Time to Detect is 15 minutes. Police arriving at 2:30 AM to arrest the burglar represents response time.",
        "th": "ถ้าขโมยสะเดาะกลอนเข้าบ้านตอน 02:00 น. แล้วสัญญาณเตือนภัยดังตอน 02:15 น. ค่า Time to Detect คือ 15 นาที ส่วนตำรวจมาถึงบ้านตอน 02:30 น. เพื่อจับกุม นั่นคือเวลาตอบสนอง (Response time)"
      },
      "exam_tip": {
        "en": "Use the stated milestones and units. TTD describes this incident; MTTD is an average over an explicitly defined incident set.",
        "th": "ใช้จุดเวลาและหน่วยที่โจทย์ระบุ TTD อธิบายเหตุการณ์นี้ ส่วน MTTD เป็นค่าเฉลี่ยของกลุ่มเหตุการณ์ที่กำหนดไว้อย่างชัดเจน"
      }
    }
  },
  {
    "id": 629,
    "dom": 2,
    "question": "A Chief Information Security Officer (CISO) establishes an operational Service Level Agreement (SLA) for the Security Operations Center (SOC) requiring a Mean Time to Respond (MTTR) of under 20 minutes for critical endpoint ransomware alerts. During an executive review, a board member asks what specific operational action signifies that the 'Respond' phase has been successfully completed. In the context of cybersecurity incident response metrics, which of the following milestones BEST marks the completion of the Mean Time to Respond metric?",
    "options": [
      "The execution of active containment actions, such as isolating the affected host or terminating malicious processes",
      "The complete restoration of all damaged file shares and user directories from verified offsite backups",
      "The physical replacement of damaged server chassis and solid-state storage drives by hardware maintenance technicians",
      "The official publication of an audited software security update by the operating system vendor following its scheduled release cycle"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Executing active containment (such as isolating an infected host via EDR) halts the adversary's progression, successfully marking the conclusion of the incident response milestone. Option B is incorrect: Restoring corrupted files from backups and restoring business services defines Mean Time to Recover (part of disaster recovery), not operational incident response time. Option C is incorrect: Physically swapping out damaged electronics defines Mean Time to Repair in hardware maintenance engineering, confusing physical repair with cyber incident containment. Option D is incorrect: A third-party vendor publishing an update measures external patch release velocity, which is outside the control and operational measurement of internal SOC response.",
    "short_explanation_en": "In SOC operations, Mean Time to Respond is completed upon active containment action (e.g., host isolation) to halt attack spread.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) ได้กำหนดข้อตกลงระดับการให้บริการ (SLA) สำหรับศูนย์ปฏิบัติการความปลอดภัย (SOC) โดยกำหนดให้มีค่าเฉลี่ยระยะเวลาในการตอบสนอง (Mean Time to Respond - MTTR) ต่ำกว่า 20 นาที สำหรับการแจ้งเตือนแรนซัมแวร์ที่มีความสำคัญระดับวิกฤต ในระหว่างการประชุม คณะกรรมการได้สอบถามว่าการกระทำใดในทางปฏิบัติที่แสดงว่าขั้นตอน 'การตอบสนอง' (Respond) ได้เสร็จสิ้นลงแล้วอย่างเป็นทางการ ในบริบทของการวัดผลการตอบสนองต่อเหตุการณ์ทางไซเบอร์ จุดเวลาสำคัญ (Milestone) ใดต่อไปนี้เป็นจุดสิ้นสุดของตัวชี้วัด Mean Time to Respond ได้ดีที่สุด (BEST)?",
    "options_th": [
      "การลงมือกักกันความเสียหาย (Active containment) เช่น การสั่งตัดการเชื่อมต่อเครือข่ายของเครื่อง หรือการสั่งยุติโพรเซสอันตราย",
      "การกู้คืนไฟล์ข้อมูลและโฟลเดอร์ผู้ใช้งานทั้งหมดที่ได้รับความเสียหายกลับคืนมาจากข้อมูลสำรองนอกสถานที่ที่ผ่านการตรวจสอบแล้ว",
      "การเปลี่ยนชิ้นส่วนฮาร์ดแวร์เซิร์ฟเวอร์และฮาร์ดดิสก์ที่ชำรุดเสียหายทางกายภาพโดยช่างเทคนิคซ่อมบำรุง",
      "การเผยแพร่ตัวอัปเดตความปลอดภัยของซอฟต์แวร์อย่างเป็นทางการโดยบริษัทผู้พัฒนาระบบปฏิบัติการตามรอบเวลาที่กำหนด"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การลงมือกักกันความเสียหาย (เช่น การสั่งตัดเน็ตเครื่องที่ติดเชื้อผ่านระบบ EDR) เป็นการหยุดยั้งการโจมตี ซึ่งถือเป็นจุดสิ้นสุดของมาตรวัดเวลาตอบสนอง\n- ข้อ B ไม่ถูกต้อง: การกู้คืนไฟล์ที่เสียหายจากระบบสำรองข้อมูลเพื่อเปิดระบบใหม่จัดเป็น Mean Time to Recover (การฟื้นฟูระบบ) ไม่ใช่เวลาตอบสนองเหตุการณ์เฉพาะหน้า\n- ข้อ C ไม่ถูกต้อง: การเปลี่ยนฮาร์ดแวร์ที่พังทางกายภาพคือ Mean Time to Repair ทางวิศวกรรม ซึ่งคนละความหมายกับการระงับเหตุการณ์ภัยคุกคามไซเบอร์\n- ข้อ D ไม่ถูกต้อง: การที่บริษัทภายนอกออกแพตช์แก้ไขเป็นเรื่องความเร็วของผู้ผลิตซอฟต์แวร์ ไม่ใช่สิ่งที่ใช้วัดประสิทธิภาพการตอบสนองของทีม SOC ภายในองค์กร",
    "explanation_detail": {
      "correct": {
        "en": "Executing active containment (such as isolating an infected host via EDR) halts the adversary's progression, successfully marking the conclusion of the incident response milestone.",
        "th": "การลงมือกักกันความเสียหาย (เช่น การสั่งตัดเน็ตเครื่องที่ติดเชื้อผ่านระบบ EDR) เป็นการหยุดยั้งการโจมตี ซึ่งถือเป็นจุดสิ้นสุดของมาตรวัดเวลาตอบสนอง"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Restoring corrupted files from backups and restoring business services defines Mean Time to Recover (part of disaster recovery), not operational incident response time.",
          "text_th": "การกู้คืนไฟล์ที่เสียหายจากระบบสำรองข้อมูลเพื่อเปิดระบบใหม่จัดเป็น Mean Time to Recover (การฟื้นฟูระบบ) ไม่ใช่เวลาตอบสนองเหตุการณ์เฉพาะหน้า"
        },
        {
          "letter": "C",
          "text_en": "Physically swapping out damaged electronics defines Mean Time to Repair in hardware maintenance engineering, confusing physical repair with cyber incident containment.",
          "text_th": "การเปลี่ยนฮาร์ดแวร์ที่พังทางกายภาพคือ Mean Time to Repair ทางวิศวกรรม ซึ่งคนละความหมายกับการระงับเหตุการณ์ภัยคุกคามไซเบอร์"
        },
        {
          "letter": "D",
          "text_en": "A third-party vendor publishing an update measures external patch release velocity, which is outside the control and operational measurement of internal SOC response.",
          "text_th": "การที่บริษัทภายนอกออกแพตช์แก้ไขเป็นเรื่องความเร็วของผู้ผลิตซอฟต์แวร์ ไม่ใช่สิ่งที่ใช้วัดประสิทธิภาพการตอบสนองของทีม SOC ภายในองค์กร"
        }
      ],
      "example": {
        "en": "A ransomware alert fires at 14:00. The analyst isolates the laptop from the WiFi network at 14:12. The MTTR is 12 minutes, successfully stopping the malware before it encrypted shared drives.",
        "th": "ระบบแจ้งเตือนแรนซัมแวร์ตอน 14:00 น. นักวิเคราะห์สั่งตัดสัญญาณ WiFi ของเครื่องนั้นทันทีตอน 14:12 น. ค่า MTTR จึงเท่ากับ 12 นาที ซึ่งหยุดมัลแวร์ได้ทันก่อนลามไปไดรฟ์ส่วนกลาง"
      },
      "exam_tip": {
        "en": "MTTR disambiguation: In SOC operations, R = Respond / React / Contain. In hardware engineering, R = Repair (fix hardware). In disaster recovery, R = Recover (bring data back).",
        "th": "เทคนิคแยกแยะตัว R ใน MTTR: ในงาน SOC, R = Respond (ตอบสนอง/กักกัน); ในงานช่างฮาร์ดแวร์, R = Repair (ซ่อมเครื่อง); ในงานกู้ภัยพิบัติ, R = Recover (กู้ข้อมูลกลับมา)"
      }
    }
  },
  {
    "id": 630,
    "dom": 2,
    "question": "An enterprise vulnerability management program publishes a monthly operational scorecard displaying two key metrics:\n- Metric X: 'Endpoint Patch Compliance Rate = 92%' (measured as 9,200 out of 10,000 corporate workstations currently running the approved monthly operating system patch build).\n- Metric Y: 'Critical Vulnerability Remediation Velocity = 84%' (measured as 84 out of 100 critical Common Vulnerabilities and Exposures [CVEs] remediated within the mandated 15-day SLA window).\nWhich of the following PRIMARY distinguishes Metric X from Metric Y?",
    "options": [
      "The two metrics are identical mathematical measures that differ only in how the presentation software labels the graphic display",
      "Metric X measures zero-day exploit weaponization, while Metric Y measures static code analysis findings",
      "Metric X evaluates boundary network segmentation, while Metric Y evaluates runtime container security",
      "Metric X is an asset-centric compliance metric measuring fleet configuration state, whereas Metric Y is a vulnerability-centric velocity metric measuring remediation speed against SLA targets"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Metric X assesses managed endpoint inventory against a configuration baseline, whereas Metric Y measures vulnerability remediation timeliness against organizational SLAs. Option A is incorrect: The mathematical denominators are fundamentally distinct: Metric X divides patched systems by total systems, while Metric Y divides remediated CVEs by total identified CVEs. Option B is incorrect: Zero-day weaponization and static analysis address exploit capability and source code flaws, not endpoint baseline patching or CVE remediation SLA speed. Option C is incorrect: Network segmentation and container security are architectural isolation controls, completely unrelated to enterprise patch deployment metrics.",
    "short_explanation_en": "Metric X measures asset configuration compliance across endpoints, while Metric Y measures vulnerability remediation speed against time-bound SLAs.",
    "question_th": "โปรแกรมการจัดการช่องโหว่ขององค์กรได้เผยแพร่รายงานการประเมินประจำเดือนที่แสดงตัวชี้วัดหลัก 2 ตัว ได้แก่:\n- ตัวชี้วัด X: 'อัตราการปฏิบัติตามการแพตช์ของอุปกรณ์ปลายทาง = 92%' (วัดจากเครื่องคอมพิวเตอร์พนักงาน 9,200 เครื่อง จากทั้งหมด 10,000 เครื่อง ที่ติดตั้งระบบปฏิบัติการเวอร์ชันแพตช์ประจำเดือนที่กำหนด)\n- ตัวชี้วัด Y: 'ความเร็วในการแก้ไขช่องโหว่ระดับวิกฤต = 84%' (วัดจากช่องโหว่รหัส CVE ระดับวิกฤต 84 รายการ จากทั้งหมด 100 รายการ ที่ได้รับการแก้ไขภายในกรอบเวลา SLA 15 วัน)\nข้อใดต่อไปนี้ระบุความแตกต่างหลัก (PRIMARY distinguishes) ระหว่างตัวชี้วัด X และตัวชี้วัด Y ได้ถูกต้องที่สุด?",
    "options_th": [
      "ตัวชี้วัดทั้งสองตัวมีค่าทางคณิตศาสตร์เหมือนกันทุกประการ เพียงแต่ซอฟต์แวร์ที่ใช้ทำรายงานแสดงชื่อหัวข้อกราฟิกแตกต่างกันเท่านั้น",
      "ตัวชี้วัด X ประเมินการติดอาวุธของช่องโหว่ซีโร่เดย์ ขณะที่ตัวชี้วัด Y ประเมินผลการตรวจวิเคราะห์โค้ดแบบสถิต",
      "ตัวชี้วัด X ประเมินการแบ่งส่วนเครือข่ายขอบเขต ขณะที่ตัวชี้วัด Y ประเมินความมั่นคงปลอดภัยของคอนเทนเนอร์ขณะทำงาน",
      "ตัวชี้วัด X เป็นตัวชี้วัดความสอดคล้องตามเกณฑ์ที่เน้นอุปกรณ์ (Asset-centric) เพื่อตรวจสถานะเครื่องปลายทาง ขณะที่ตัวชี้วัด Y เป็นตัวชี้วัดความเร็วที่เน้นช่องโหว่ (Vulnerability-centric) เพื่อวัดความเร็วในการแก้ไขตาม SLA"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ตัวชี้วัด X ตรวจสอบจำนวนเครื่องปลายทางเทียบกับมาตรฐานคอนฟิก ขณะที่ตัวชี้วัด Y วัดความเร็วในการปิดช่องโหว่เทียบกับกรอบเวลา SLA ขององค์กร\n- ข้อ A ไม่ถูกต้อง: ตัวส่วนทางคณิตศาสตร์ต่างกันสิ้นเชิง: ตัวชี้วัด X หารด้วยจำนวนเครื่องทั้งหมด ส่วนตัวชี้วัด Y หารด้วยจำนวนช่องโหว่ทั้งหมดที่ตรวจพบ\n- ข้อ B ไม่ถูกต้อง: การติดอาวุธซีโร่เดย์และการตรวจโค้ดเป็นเรื่องขีดความสามารถการโจมตีและการเขียนโปรแกรม ไม่เกี่ยวกับการตรวจแพตช์เครื่องหรือความเร็ว SLA\n- ข้อ C ไม่ถูกต้อง: การแบ่งส่วนเน็ตเวิร์กและความปลอดภัยคอนเทนเนอร์เป็นการควบคุมทางสถาปัตยกรรม ไม่ใช่ตัวชี้วัดการติดตั้งแพตช์",
    "explanation_detail": {
      "correct": {
        "en": "Metric X assesses managed endpoint inventory against a configuration baseline, whereas Metric Y measures vulnerability remediation timeliness against organizational SLAs.",
        "th": "ตัวชี้วัด X ตรวจสอบจำนวนเครื่องปลายทางเทียบกับมาตรฐานคอนฟิก ขณะที่ตัวชี้วัด Y วัดความเร็วในการปิดช่องโหว่เทียบกับกรอบเวลา SLA ขององค์กร"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The mathematical denominators are fundamentally distinct: Metric X divides patched systems by total systems, while Metric Y divides remediated CVEs by total identified CVEs.",
          "text_th": "ตัวส่วนทางคณิตศาสตร์ต่างกันสิ้นเชิง: ตัวชี้วัด X หารด้วยจำนวนเครื่องทั้งหมด ส่วนตัวชี้วัด Y หารด้วยจำนวนช่องโหว่ทั้งหมดที่ตรวจพบ"
        },
        {
          "letter": "B",
          "text_en": "Zero-day weaponization and static analysis address exploit capability and source code flaws, not endpoint baseline patching or CVE remediation SLA speed.",
          "text_th": "การติดอาวุธซีโร่เดย์และการตรวจโค้ดเป็นเรื่องขีดความสามารถการโจมตีและการเขียนโปรแกรม ไม่เกี่ยวกับการตรวจแพตช์เครื่องหรือความเร็ว SLA"
        },
        {
          "letter": "C",
          "text_en": "Network segmentation and container security are architectural isolation controls, completely unrelated to enterprise patch deployment metrics.",
          "text_th": "การแบ่งส่วนเน็ตเวิร์กและความปลอดภัยคอนเทนเนอร์เป็นการควบคุมทางสถาปัตยกรรม ไม่ใช่ตัวชี้วัดการติดตั้งแพตช์"
        }
      ],
      "example": {
        "en": "An organization has 9,900 of 10,000 laptops patched (99% asset compliance), but the 100 unpatched laptops contain a zero-day exploit that has remained unaddressed for 90 days (poor remediation velocity).",
        "th": "องค์กรอัปเดตแล็ปท็อปไป 9,900 จาก 10,000 เครื่อง (Asset compliance สูงถึง 99%) แต่เครื่องที่เหลือ 100 เครื่องกลับมีช่องโหว่ร้ายแรงที่ปล่อยทิ้งไว้นานถึง 90 วันโดยไม่ยอมแก้ไข (Remediation velocity ต่ำมาก)"
      },
      "exam_tip": {
        "en": "Exam distinction: Asset metrics count COMPUTERS / DEVICES (Are our endpoints up to date?). Remediation metrics count VULNERABILITIES / DAYS (How fast do we fix critical bugs?).",
        "th": "จุดสังเกตในข้อสอบ: Asset metric ให้นับ 'เครื่องคอมพิวเตอร์' (เครื่องในระบบอัปเดตหรือยัง?); Remediation velocity ให้นับ 'จำนวนช่องโหว่และวัน' (เราอุดรูรั่วสำคัญได้เร็วแค่ไหน?)"
      }
    }
  },
  {
    "id": 631,
    "dom": 2,
    "question": "An enterprise cybersecurity scorecard presented to the executive risk committee highlights that 98% of corporate employees successfully completed the mandatory annual security awareness training curriculum, exceeding the organizational target of 95%. However, an unannounced simulated phishing assessment conducted three weeks later reveals that 38% of employees clicked a malicious link, and 22% entered corporate credentials into a fake login portal. Which of the following conclusions BEST explains the operational relationship between these two metrics?",
    "options": [
      "The organization should immediately eliminate all security awareness training and rely exclusively on automated email filtering gateways",
      "The simulated phishing assessment results were technically invalid because the test was administered within thirty days of training completion",
      "Training completion measures administrative program participation, which does not guarantee behavioral competence or operational resilience against social engineering",
      "High training completion rates guarantee that real-world phishing susceptibility will drop to zero within thirty days of course completion"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Training completion measures compliance activity, whereas simulation click rates measure behavioral effectiveness; passing a course does not inherently change human reflexive habits. Option A is incorrect: Eliminating training removes a complementary human safeguard. Technical filtering can miss deceptive messages; its presence does not demonstrate that employees can respond safely. Option B is incorrect: Conducting a phishing simulation shortly after training completion does not invalidate the test results; simulations evaluate retention and instinctive behavior under realistic conditions. Option D is incorrect: No cybersecurity control or educational program can reduce human error to zero; claiming zero risk represents an unachievable fallacy.",
    "short_explanation_en": "Training completion measures administrative compliance and attendance, while simulation results measure actual behavioral effectiveness and risk.",
    "question_th": "รายงานประเมินผลความมั่นคงปลอดภัยไซเบอร์ที่นำเสนอต่อคณะกรรมการความเสี่ยงระดับบริหาร ระบุว่าพนักงาน 98% ได้ผ่านหลักสูตรการฝึกอบรมความตระหนักรู้ด้านความปลอดภัยประจำปีครบถ้วน ซึ่งสูงกว่าเป้าหมายที่ตั้งไว้ 95% อย่างไรก็ตาม การทดสอบส่งอีเมลฟิชชิงจำลองแบบไม่แจ้งล่วงหน้าในอีก 3 สัปดาห์ต่อมา พบว่ามีพนักงานถึง 38% ที่คลิกลิงก์อันตราย และมี 22% ที่กรอกรหัสผ่านองค์กรลงในหน้าล็อกอินปลอม ข้อสรุปใดต่อไปนี้อธิบายความสัมพันธ์ในการดำเนินงานระหว่างตัวชี้วัดทั้งสองตัวนี้ได้ดีที่สุด (BEST)?",
    "options_th": [
      "องค์กรควรยกเลิกการฝึกอบรมความตระหนักรู้ทั้งหมดทันที และหันไปพึ่งพาระบบกรองอีเมลอัตโนมัติเพียงอย่างเดียว",
      "ผลการทดสอบฟิชชิงจำลองไม่ถูกต้องตามหลักการ เนื่องจากเป็นการทดสอบที่จัดขึ้นภายในสามสิบวันหลังจากที่พนักงานเพิ่งผ่านการอบรม",
      "การผ่านการอบรมวัดเพียงการเข้าร่วมตามระเบียบ แต่ไม่ได้รับประกันความสามารถทางพฤติกรรมหรือภูมิคุ้มกันในการป้องกันการโจมตีทางสังคม",
      "อัตราการผ่านการอบรมที่สูงเป็นสิ่งรับประกันว่าโอกาสที่พนักงานจะหลงกลฟิชชิงในโลกแห่งความเป็นจริงจะลดลงเหลือศูนย์ภายในสามสิบวันหลังเรียนจบ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การผ่านการอบรมวัดเพียงการทำตามกฎระเบียบ ขณะที่ผลการทดสอบจำลองวัดพฤติกรรมจริง การนั่งเรียนจบไม่ได้แปลว่าพฤติกรรมตอบสนองต่อสิ่งล่อลวงจะเปลี่ยนไปโดยอัตโนมัติ\n- ข้อ A ไม่ถูกต้อง: การยกเลิกการอบรมตัดมาตรการด้านคนที่ช่วยเสริมกัน ตัวกรองอาจพลาดข้อความลวงได้ และการมีตัวกรองไม่ได้แสดงว่าพนักงานตอบสนองได้อย่างปลอดภัย\n- ข้อ B ไม่ถูกต้อง: การจัดส่งฟิชชิงจำลองหลังอบรมไม่ได้ทำให้ผลทดสอบเป็นโมฆะ แต่เป็นการวัดการจดจำและพฤติกรรมตอบสนองตามสัญชาตญาณในสถานการณ์จริง\n- ข้อ D ไม่ถูกต้อง: ไม่มีการอบรมใดในโลกที่ทำให้ความเสี่ยงจากมนุษย์ลดเหลือศูนย์ได้ การอ้างว่าจะเหลือศูนย์เป็นแนวคิดที่ไม่สอดคล้องกับความเป็นจริง",
    "explanation_detail": {
      "correct": {
        "en": "Training completion measures compliance activity, whereas simulation click rates measure behavioral effectiveness; passing a course does not inherently change human reflexive habits.",
        "th": "การผ่านการอบรมวัดเพียงการทำตามกฎระเบียบ ขณะที่ผลการทดสอบจำลองวัดพฤติกรรมจริง การนั่งเรียนจบไม่ได้แปลว่าพฤติกรรมตอบสนองต่อสิ่งล่อลวงจะเปลี่ยนไปโดยอัตโนมัติ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Eliminating training removes a complementary human safeguard. Technical filtering can miss deceptive messages; its presence does not demonstrate that employees can respond safely.",
          "text_th": "การยกเลิกการอบรมตัดมาตรการด้านคนที่ช่วยเสริมกัน ตัวกรองอาจพลาดข้อความลวงได้ และการมีตัวกรองไม่ได้แสดงว่าพนักงานตอบสนองได้อย่างปลอดภัย"
        },
        {
          "letter": "B",
          "text_en": "Conducting a phishing simulation shortly after training completion does not invalidate the test results; simulations evaluate retention and instinctive behavior under realistic conditions.",
          "text_th": "การจัดส่งฟิชชิงจำลองหลังอบรมไม่ได้ทำให้ผลทดสอบเป็นโมฆะ แต่เป็นการวัดการจดจำและพฤติกรรมตอบสนองตามสัญชาตญาณในสถานการณ์จริง"
        },
        {
          "letter": "D",
          "text_en": "No cybersecurity control or educational program can reduce human error to zero; claiming zero risk represents an unachievable fallacy.",
          "text_th": "ไม่มีการอบรมใดในโลกที่ทำให้ความเสี่ยงจากมนุษย์ลดเหลือศูนย์ได้ การอ้างว่าจะเหลือศูนย์เป็นแนวคิดที่ไม่สอดคล้องกับความเป็นจริง"
        }
      ],
      "example": {
        "en": "A driver completes a four-hour online safety course with full attendance, yet becomes distracted by a smartphone message while driving the next week. Attendance alone did not demonstrate safe behavior.",
        "th": "คนขับเรียนหลักสูตรความปลอดภัยออนไลน์สี่ชั่วโมงครบทุกช่วง แต่สัปดาห์ถัดมาวอกแวกเพราะข้อความมือถือขณะขับรถ การเข้าเรียนครบไม่ได้ยืนยันพฤติกรรมปลอดภัยด้วยตัวเอง"
      },
      "exam_tip": {
        "en": "Core governance lesson: Never confuse Activity Metrics (did we do the training?) with Outcome Metrics (did employee security behavior actually improve?).",
        "th": "บทเรียนสำคัญด้านการกำกับดูแล: อย่าสับสนระหว่าง 'ตัวชี้วัดกิจกรรม' (เราจัดอบรมหรือยัง?) กับ 'ตัวชี้วัดผลลัพธ์' (พฤติกรรมความปลอดภัยของคนดีขึ้นจริงหรือไม่?)"
      }
    }
  },
  {
    "id": 632,
    "dom": 2,
    "question": "A Chief Information Security Officer (CISO) establishes an executive governance tracking dashboard utilizing two specialized operational metrics:\n- Metric 1: 'Percentage of critical enterprise servers patched within 14 calendar days of vendor security advisory release' (Target: > 95%).\n- Metric 2: 'Number of external internet-facing legacy servers operating on unsupported, end-of-life (EOL) operating systems lacking security updates' (Threshold: 0).\nWhich of the following BEST classifies Metric 1 and Metric 2 within a security governance framework?",
    "options": [
      "Metric 1 is a Key Risk Indicator (KRI) predicting regulatory fines, while Metric 2 is a Key Performance Indicator (KPI) evaluating IT staff productivity",
      "Metric 1 is a Key Performance Indicator (KPI) evaluating operational process execution, while Metric 2 is a Key Risk Indicator (KRI) providing early warning of elevated risk exposure",
      "Both metrics are lagging indicators designed exclusively to quantify historical financial losses following completed data breaches",
      "Metric 1 is an unmeasurable qualitative descriptor, while Metric 2 is a purely technical metric that cannot be used in risk governance"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Metric 1 assesses operational process delivery against SLA targets (KPI), while Metric 2 monitors exposure conditions that elevate the probability of exploitation (KRI). Option A is incorrect: This inverts the classifications; patch SLA adherence measures operational performance (KPI), not regulatory fines. Option C is incorrect: Neither metric tracks historical monetary losses; Metric 1 is an operational performance metric and Metric 2 is a forward-looking risk indicator. Option D is incorrect: Both metrics are quantifiable (percentages and asset counts) and directly serve risk governance decision-making.",
    "short_explanation_en": "Metric 1 is a KPI measuring operational patching execution, while Metric 2 is a KRI providing an early warning signal of elevated risk exposure.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) ได้จัดทำแดชบอร์ดการกำกับดูแลระดับบริหาร โดยใช้ตัวชี้วัดเฉพาะทาง 2 ตัว ได้แก่:\n- ตัวชี้วัดที่ 1: 'ร้อยละของเซิร์ฟเวอร์หลักขององค์กรที่ได้รับการติดตั้งแพตช์ภายใน 14 วันหลังผู้ผลิตประกาศเตือนความปลอดภัย' (เป้าหมาย: > 95%)\n- ตัวชี้วัดที่ 2: 'จำนวนเซิร์ฟเวอร์รุ่นเก่าที่เปิดเชื่อมต่ออินเทอร์เน็ตภายนอกซึ่งทำงานอยู่บนระบบปฏิบัติการที่หมดอายุการสนับสนุน (End-of-Life) และไม่มีการอัปเดตความปลอดภัย' (เกณฑ์จำกัด: 0 เครื่อง)\nข้อใดต่อไปนี้จัดประเภทตัวชี้วัดที่ 1 และตัวชี้วัดที่ 2 ในกรอบการกำกับดูแลความมั่นคงปลอดภัยได้ถูกต้องที่สุด (BEST)?",
    "options_th": [
      "ตัวชี้วัดที่ 1 คือ Key Risk Indicator (KRI) ที่ใช้คาดการณ์ค่าปรับทางกฎหมาย ส่วนตัวชี้วัดที่ 2 คือ Key Performance Indicator (KPI) ที่ใช้วัดผลิตภาพของทีมงานไอที",
      "ตัวชี้วัดที่ 1 คือ Key Performance Indicator (KPI) ที่วัดประสิทธิภาพการปฏิบัติงาน ส่วนตัวชี้วัดที่ 2 คือ Key Risk Indicator (KRI) ที่ส่งสัญญาณเตือนภัยล่วงหน้าถึงระดับความเสี่ยงที่เพิ่มสูงขึ้น",
      "ตัวชี้วัดทั้งสองตัวเป็นตัวชี้วัดตามหลัง (Lagging indicators) ที่ออกแบบมาเพื่อวัดมูลค่าความเสียหายทางการเงินในอดีตหลังจากถูกแฮกแล้วเท่านั้น",
      "ตัวชี้วัดที่ 1 เป็นคำบรรยายเชิงคุณภาพที่ไม่สามารถวัดค่าได้ ส่วนตัวชี้วัดที่ 2 เป็นตัวเลขทางเทคนิคที่ไม่สามารถนำมาใช้ในการกำกับดูแลความเสี่ยงได้"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ตัวชี้วัดที่ 1 วัดการบรรลุเป้าหมายตามกระบวนการทำงาน (KPI) ส่วนตัวชี้วัดที่ 2 ตรวจจับสภาวะที่เพิ่มความน่าจะเป็นในการถูกโจมตีทางไซเบอร์ (KRI)\n- ข้อ A ไม่ถูกต้อง: ข้อนี้สลับนิยามกัน โดยการลงแพตช์ตามกำหนดเวลาเป็นการวัดผลงานการปฏิบัติการ (KPI) ไม่ใช่การทำนายค่าปรับ\n- ข้อ C ไม่ถูกต้อง: ไม่มีตัวชี้วัดใดที่วัดการสูญเสียเงินในอดีต ตัวชี้วัดที่ 1 เป็นการวัดผลงาน และตัวชี้วัดที่ 2 เป็นการมองไปข้างหน้าเพื่อเตือนความเสี่ยง\n- ข้อ D ไม่ถูกต้อง: ทั้งสองตัวชี้วัดมีหน่วยวัดเชิงปริมาณที่ชัดเจน (ร้อยละ และจำนวนเครื่อง) และมีความสำคัญยิ่งต่อการตัดสินใจของฝ่ายกำกับดูแล",
    "explanation_detail": {
      "correct": {
        "en": "Metric 1 assesses operational process delivery against SLA targets (KPI), while Metric 2 monitors exposure conditions that elevate the probability of exploitation (KRI).",
        "th": "ตัวชี้วัดที่ 1 วัดการบรรลุเป้าหมายตามกระบวนการทำงาน (KPI) ส่วนตัวชี้วัดที่ 2 ตรวจจับสภาวะที่เพิ่มความน่าจะเป็นในการถูกโจมตีทางไซเบอร์ (KRI)"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This inverts the classifications; patch SLA adherence measures operational performance (KPI), not regulatory fines.",
          "text_th": "ข้อนี้สลับนิยามกัน โดยการลงแพตช์ตามกำหนดเวลาเป็นการวัดผลงานการปฏิบัติการ (KPI) ไม่ใช่การทำนายค่าปรับ"
        },
        {
          "letter": "C",
          "text_en": "Neither metric tracks historical monetary losses; Metric 1 is an operational performance metric and Metric 2 is a forward-looking risk indicator.",
          "text_th": "ไม่มีตัวชี้วัดใดที่วัดการสูญเสียเงินในอดีต ตัวชี้วัดที่ 1 เป็นการวัดผลงาน และตัวชี้วัดที่ 2 เป็นการมองไปข้างหน้าเพื่อเตือนความเสี่ยง"
        },
        {
          "letter": "D",
          "text_en": "Both metrics are quantifiable (percentages and asset counts) and directly serve risk governance decision-making.",
          "text_th": "ทั้งสองตัวชี้วัดมีหน่วยวัดเชิงปริมาณที่ชัดเจน (ร้อยละ และจำนวนเครื่อง) และมีความสำคัญยิ่งต่อการตัดสินใจของฝ่ายกำกับดูแล"
        }
      ],
      "example": {
        "en": "Speed relative to an agreed travel target can illustrate a performance measure. A low-fuel indication can warn of a possible later stall if no action is taken; neither instrument is intrinsically a KPI or KRI without its decision context.",
        "th": "ความเร็วเทียบเป้าหมายการเดินทางที่ตกลงไว้อธิบายตัวชี้วัดผลงานได้ ส่วนระดับน้ำมันต่ำเตือนโอกาสเครื่องหยุดในภายหลังหากไม่ดำเนินการ เครื่องมือใดจะเป็น KPI หรือ KRI ขึ้นกับบริบทการตัดสินใจ"
      },
      "exam_tip": {
        "en": "Memory anchor: KPI = Performance (How well are we working?); KRI = Risk (Are we approaching a danger zone?).",
        "th": "เทคนิคการจำ: KPI = ประสิทธิภาพ (เราทำงานได้ดีตามเป้าหรือไม่?); KRI = ความเสี่ยง (เรากำลังเดินเข้าใกล้จุดอันตรายแล้วหรือยัง?)"
      }
    }
  },
  {
    "id": 633,
    "dom": 2,
    "question": "The Board of Directors of an international logistics conglomerate requests a formal quarterly briefing from the Chief Information Security Officer (CISO). The board's stated goal is to review multi-year enterprise risk trends, assess progress on strategic security initiatives, evaluate regulatory compliance status across international operating regions, and approve capital budget allocations for next fiscal year's cloud security transformation. Which of the following communication formats is BEST suited for presenting this information to the Board of Directors?",
    "options": [
      "A formal Executive Cybersecurity Report featuring executive summaries, strategic trend analysis, control maturity progress, and business risk impact narratives",
      "A dynamic real-time Security Operations Center (SOC) dashboard displaying streaming firewall packet drops and live intrusion sensor alerts",
      "An unedited raw CSV export containing 250,000 vulnerability scanner finding records and associated Common Vulnerability Scoring System (CVSS) vectors",
      "An automated instant messaging alerting channel that sends real-time push notifications to board members whenever an individual employee endpoint triggers an antivirus detection"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. An Executive Report synthesizes technical telemetry into strategic, business-aligned narratives that support governance, risk oversight, and fiduciary capital allocation decisions. Option B is incorrect: The offered minute-by-minute operational telemetry does not by itself provide the prioritized business-impact and capital-planning synthesis requested for this briefing. Option C is incorrect: Exporting raw technical scanner findings dumps operational work tickets on governance directors without providing executive analysis, prioritization, or business context. Option D is incorrect: Individual malware alerts alone do not supply the requested quarterly strategic synthesis. Appropriate major-incident escalation can still be part of board oversight.",
    "short_explanation_en": "A business-aligned executive report fits the strategic decision needs stated in this scenario.",
    "question_th": "คณะกรรมการบริหาร (Board of Directors) ของกลุ่มบริษัทโลจิสติกส์ระหว่างประเทศ ได้ขอให้ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) นำเสนอรายงานสรุปประจำไตรมาส โดยมีเป้าหมายเพื่อทบทวนแนวโน้มความเสี่ยงขององค์กรในระยะหลายปี ประเมินความคืบหน้าของโครงการริเริ่มเชิงกลยุทธ์ ตรวจสอบสถานะการปฏิบัติตามกฎหมายในแต่ละภูมิภาคทั่วโลก และพิจารณาอนุมัติงบประมาณการลงทุนสำหรับการย้ายระบบสู่คลาวด์อย่างปลอดภัยในปีงบประมาณถัดไป รูปแบบการสื่อสารใดต่อไปนี้เหมาะสมที่สุด (BEST suited) สำหรับการนำเสนอข้อมูลต่อคณะกรรมการบริหาร?",
    "options_th": [
      "รายงานความมั่นคงปลอดภัยไซเบอร์ระดับบริหารอย่างเป็นทางการ (Executive Report) ที่มีบทสรุปผู้บริหาร การวิเคราะห์แนวโน้มเชิงกลยุทธ์ ความคืบหน้าของระดับวุฒิภาวะ และคำอธิบายผลกระทบต่อความเสี่ยงทางธุรกิจ",
      "แดชบอร์ดของศูนย์ปฏิบัติการ SOC แบบเรียลไทม์ที่แสดงข้อมูลการทิ้งแพ็กเก็ตของไฟร์วอลล์และสัญญาณเตือนการบุกรุกแบบสดๆ ตลอดเวลา",
      "ไฟล์สเปรดชีต CSV ดิบที่ไม่ได้ผ่านการแก้ไข ซึ่งบรรจุผลการสแกนช่องโหว่ 250,000 รายการพร้อมค่าคะแนน CVSS ทางเทคนิคทั้งหมด",
      "ช่องทางการแจ้งเตือนผ่านแอปแช็ตอัตโนมัติที่จะส่งข้อความแจ้งเตือนบอร์ดบริหารแบบเรียลไทม์ทุกครั้งที่มีคอมพิวเตอร์ของพนักงานเกิดสัญญาณเตือนจากโปรแกรมแอนติไวรัส"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: รายงานระดับบริหารทำหน้าที่กลั่นกรองข้อมูลทางเทคนิคให้เป็นข้อความเชิงกลยุทธ์ที่เข้าใจง่าย เพื่อสนับสนุนการกำกับดูแลความเสี่ยงและการอนุมัติงบประมาณขององค์กร\n- ข้อ B ไม่ถูกต้อง: Telemetry ปฏิบัติการรายนาทีที่เสนอยังไม่ได้สังเคราะห์ลำดับผลกระทบธุรกิจและการวางแผนลงทุนที่การบรรยายสรุปนี้ต้องการด้วยตัวเอง\n- ข้อ C ไม่ถูกต้อง: การส่งไฟล์ช่องโหว่ดิบหลายแสนรายการเป็นการโยนภาระงานเทคนิคให้ผู้บริหาร โดยไม่มีการวิเคราะห์จัดลำดับความสำคัญหรือบอกผลกระทบทางธุรกิจ\n- ข้อ D ไม่ถูกต้อง: การแจ้งมัลแวร์รายเหตุเพียงอย่างเดียวไม่ได้ให้ภาพสรุปเชิงกลยุทธ์รายไตรมาสที่ต้องการ การส่งต่อเหตุร้ายแรงที่เหมาะสมยังเป็นส่วนหนึ่งของการกำกับดูแลของบอร์ดได้",
    "explanation_detail": {
      "correct": {
        "en": "An Executive Report synthesizes technical telemetry into strategic, business-aligned narratives that support governance, risk oversight, and fiduciary capital allocation decisions.",
        "th": "รายงานระดับบริหารทำหน้าที่กลั่นกรองข้อมูลทางเทคนิคให้เป็นข้อความเชิงกลยุทธ์ที่เข้าใจง่าย เพื่อสนับสนุนการกำกับดูแลความเสี่ยงและการอนุมัติงบประมาณขององค์กร"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The offered minute-by-minute operational telemetry does not by itself provide the prioritized business-impact and capital-planning synthesis requested for this briefing.",
          "text_th": "Telemetry ปฏิบัติการรายนาทีที่เสนอยังไม่ได้สังเคราะห์ลำดับผลกระทบธุรกิจและการวางแผนลงทุนที่การบรรยายสรุปนี้ต้องการด้วยตัวเอง"
        },
        {
          "letter": "C",
          "text_en": "Exporting raw technical scanner findings dumps operational work tickets on governance directors without providing executive analysis, prioritization, or business context.",
          "text_th": "การส่งไฟล์ช่องโหว่ดิบหลายแสนรายการเป็นการโยนภาระงานเทคนิคให้ผู้บริหาร โดยไม่มีการวิเคราะห์จัดลำดับความสำคัญหรือบอกผลกระทบทางธุรกิจ"
        },
        {
          "letter": "D",
          "text_en": "Individual malware alerts alone do not supply the requested quarterly strategic synthesis. Appropriate major-incident escalation can still be part of board oversight.",
          "text_th": "การแจ้งมัลแวร์รายเหตุเพียงอย่างเดียวไม่ได้ให้ภาพสรุปเชิงกลยุทธ์รายไตรมาสที่ต้องการ การส่งต่อเหตุร้ายแรงที่เหมาะสมยังเป็นส่วนหนึ่งของการกำกับดูแลของบอร์ดได้"
        }
      ],
      "example": {
        "en": "A CISO presents a 10-page quarterly report to the board with charts showing risk reducing from Red to Yellow following a cloud migration, justifying next year's $2M budget request.",
        "th": "CISO นำเสนอรายงานประจำไตรมาส 10 หน้า พร้อมกราฟแสดงความเสี่ยงที่ลดลงจากสีแดงเป็นสีเหลืองหลังย้ายขึ้นคลาวด์ เพื่อสนับสนุนการของบประมาณ 2 ล้านดอลลาร์ในปีหน้า"
      },
      "exam_tip": {
        "en": "Match the information, level of detail and format to the decision and audience. A strategic report fits this scenario; boards can also use suitable scorecards or dashboards.",
        "th": "จับคู่ข้อมูล ระดับรายละเอียด และรูปแบบกับการตัดสินใจและกลุ่มเป้าหมาย รายงานเชิงกลยุทธ์เหมาะกับโจทย์นี้ แต่คณะกรรมการอาจใช้ Scorecard หรือ Dashboard ที่เหมาะสมได้เช่นกัน"
      }
    }
  },
  {
    "id": 634,
    "dom": 2,
    "question": "An organization is updating its enterprise cybersecurity architecture to align with the NIST Cybersecurity Framework (CSF) 2.0. Executive leadership wants to establish cybersecurity roles, organizational risk tolerances, supply chain risk management policies, and board oversight mechanisms before directing technical defenses. Which NIST CSF 2.0 Function establishes these overarching organizational direction and governance expectations?",
    "options": [
      "Govern (GV)",
      "Identify (ID)",
      "Protect (PR)",
      "Respond (RS)"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. In NIST CSF 2.0, the Govern (GV) Function was introduced as a core overarching pillar that establishes organizational context, strategy, governance policies, roles and responsibilities, and oversight to direct and monitor cybersecurity risk management across all other functions (Identify, Protect, Detect, Respond, Recover). Option B is incorrect because Identify focuses on understanding the organizational assets, data, systems, and capabilities to determine risk, rather than setting governance oversight and strategy. Option C is incorrect because Protect implements technical, administrative, and physical safeguards to prevent cyber events. Option D is incorrect because Respond focuses on executing containment, mitigation, and analysis actions once an incident occurs.",
    "short_explanation_en": "The Govern (GV) Function in NIST CSF 2.0 establishes organizational context, risk strategy, and governance oversight.",
    "question_th": "องค์กรแห่งหนึ่งกำลังปรับปรุงสถาปัตยกรรมความมั่นคงปลอดภัยไซเบอร์ให้สอดคล้องกับกรอบ NIST Cybersecurity Framework (CSF) 2.0 โดยผู้บริหารระดับสูงต้องการกำหนดบทบาทหน้าที่ด้านความปลอดภัย ระดับความเสี่ยงที่ยอมรับได้ นโยบายจัดการความเสี่ยงในห่วงโซ่อุปทาน และกลไกการกำกับดูแลของคณะกรรมการบริหาร ก่อนเริ่มบังคับใช้มาตรการทางเทคนิค ฟังก์ชัน (Function) ใดใน NIST CSF 2.0 ที่ทำหน้าที่กำหนดทิศทางองค์กรและการกำกับดูแลภาพรวมเหล่านี้?",
    "options_th": [
      "การกำกับดูแล (Govern - GV)",
      "การระบุและประเมิน (Identify - ID)",
      "การป้องกัน (Protect - PR)",
      "การตอบสนอง (Respond - RS)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: ในกรอบ NIST CSF 2.0 มีการเพิ่มฟังก์ชัน Govern (GV) เป็นเสาหลักในการกำกับดูแลภาพรวม ทำหน้าที่กำหนดบริบทองค์กร กลยุทธ์ความเสี่ยง นโยบายความปลอดภัย การมอบหมายบทบาทหน้าที่ และการกำกับติดตาม เพื่อชี้นำการบริหารความเสี่ยงในฟังก์ชันอื่นๆ (Identify, Protect, Detect, Respond, Recover)\n- ข้อ B ไม่ถูกต้อง: Identify มุ่งเน้นการค้นหาและทำความเข้าใจทรัพย์สิน ข้อมูล ระบบ และความเสี่ยง ไม่ได้กำหนดกลยุทธ์การกำกับดูแลระดับบริหาร\n- ข้อ C ไม่ถูกต้อง: Protect มุ่งเน้นการวางมาตรการควบคุมเพื่อป้องกันภัยคุกคาม\n- ข้อ D ไม่ถูกต้อง: Respond มุ่งเน้นการลงมือยับยั้งและรับมือเมื่อเกิดเหตุการณ์ความมั่นคงปลอดภัย",
    "explanation_detail": {
      "correct": {
        "en": "In NIST CSF 2.0, the Govern (GV) Function was introduced as a core overarching pillar that establishes organizational context, strategy, governance policies, roles and responsibilities, and oversight to direct and monitor cybersecurity risk management across all other functions (Identify, Protect, Detect, Respond, Recover).",
        "th": "ในกรอบ NIST CSF 2.0 มีการเพิ่มฟังก์ชัน Govern (GV) เป็นเสาหลักในการกำกับดูแลภาพรวม ทำหน้าที่กำหนดบริบทองค์กร กลยุทธ์ความเสี่ยง นโยบายความปลอดภัย การมอบหมายบทบาทหน้าที่ และการกำกับติดตาม เพื่อชี้นำการบริหารความเสี่ยงในฟังก์ชันอื่นๆ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Identify focuses on understanding the organizational assets, data, systems, and capabilities to determine risk, rather than setting governance oversight and strategy.",
          "text_th": "Identify มุ่งเน้นการค้นหาและทำความเข้าใจทรัพย์สิน ข้อมูล ระบบ และความเสี่ยง ไม่ได้กำหนดกลยุทธ์การกำกับดูแลระดับบริหาร"
        },
        {
          "letter": "C",
          "text_en": "Protect implements technical, administrative, and physical safeguards to prevent cyber events.",
          "text_th": "Protect มุ่งเน้นการวางมาตรการควบคุมเพื่อป้องกันภัยคุกคาม"
        },
        {
          "letter": "D",
          "text_en": "Respond focuses on executing containment, mitigation, and analysis actions once an incident occurs.",
          "text_th": "Respond มุ่งเน้นการลงมือยับยั้งและรับมือเมื่อเกิดเหตุการณ์ความมั่นคงปลอดภัย"
        }
      ],
      "example": {
        "en": "A CISO uses the Govern function to establish an enterprise cybersecurity steering committee and draft supply chain risk management policies before engineering teams implement firewall controls.",
        "th": "CISO นำฟังก์ชัน Govern มาใช้จัดตั้งคณะกรรมการกำกับดูแลความปลอดภัยไซเบอร์และกำหนดนโยบายความเสี่ยงซัพพลายเชน ก่อนที่ทีมวิศวกรจะเริ่มติดตั้งไฟร์วอลล์"
      },
      "exam_tip": {
        "en": "On the 2026 ISC2 CC exam, remember that NIST CSF 2.0 has SIX functions, with 'Govern' sitting at the center to direct Identify, Protect, Detect, Respond, and Recover.",
        "th": "ในการสอบ ISC2 CC ปี 2026 พึงระลึกว่า NIST CSF 2.0 มีทั้งหมด 6 ฟังก์ชัน โดยมี 'Govern' เป็นฟังก์ชันใหม่ที่เป็นศูนย์กลางชี้นำ Identify, Protect, Detect, Respond และ Recover"
      }
    }
  },
  {
    "id": 635,
    "dom": 2,
    "question": "A cloud software provider conducts a risk assessment and determines that a catastrophic distributed denial-of-service (DDoS) attack or major data center outage could result in severe, multi-million-dollar financial losses exceeding their financial reserves. The executive committee purchases an enterprise cyber insurance policy covering catastrophic business disruption expenses and indemnifying client claims. Which risk treatment strategy is PRIMARILY being implemented through this insurance policy?",
    "options": [
      "Risk Avoidance",
      "Risk Transference (Sharing)",
      "Risk Mitigation (Reduction)",
      "Risk Acceptance"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Risk transfer or sharing allocates covered financial exposure to another party, for example through insurance or contractual indemnification. Coverage and exclusions matter; applicable organizational duties do not disappear merely because a policy is bought. Option A is incorrect because Risk Avoidance involves completely eliminating the risk by terminating or not engaging in the high-risk business activity or technology. Option C is incorrect because Mitigation applies controls to reduce the likelihood or impact of the assessed risk. The stated insurance purchase instead shares covered financial exposure. Option D is incorrect because Acceptance is informed, authorized retention of exposure and can coexist with safeguards or insurance. It does not name the financial-sharing action described here.",
    "short_explanation_en": "Risk Transference shifts financial consequences of a loss to an external third party, such as via cyber insurance.",
    "question_th": "ผู้ให้บริการคลาวด์ซอฟต์แวร์ประเมินความเสี่ยงและพบว่าการถูกโจมตีแบบ DDoS รุนแรงหรือศูนย์ข้อมูลล่มอาจสร้างความเสียหายทางการเงินหลายล้านดอลลาร์ซึ่งเกินกว่าเงินทุนสำรองของบริษัท คณะกรรมการบริหารจึงตัดสินใจจัดซื้อกรมธรรม์ประกันภัยไซเบอร์ (Cyber Insurance) เพื่อคุ้มครองค่าใช้จ่ายจากธุรกิจหยุดชะงักและชดเชยค่าเสียหายให้ลูกค้า กลยุทธ์การจัดการความเสี่ยงข้อใดเป็นสิ่งที่ดำเนินการเป็นหลักผ่านการซื้อประกันภัยนี้?",
    "options_th": [
      "การหลีกเลี่ยงความเสี่ยง (Risk Avoidance)",
      "การถ่ายโอนความเสี่ยง (Risk Transference หรือ Sharing)",
      "การบรรเทาหรือลดทอนความเสี่ยง (Risk Mitigation หรือ Reduction)",
      "การยอมรับความเสี่ยง (Risk Acceptance)"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Risk Transfer หรือ Sharing แบ่งภาระความเสียหายทางการเงินตามความคุ้มครองให้ผู้อื่น เช่น ผ่านประกันหรือข้อสัญญาชดเชย ต้องดูความคุ้มครองและข้อยกเว้น หน้าที่ที่ใช้กับองค์กรไม่ได้หายไปเพียงเพราะซื้อกรมธรรม์\n- ข้อ A ไม่ถูกต้อง: การหลีกเลี่ยงความเสี่ยงคือการยกเลิกการดำเนินกิจกรรมหรือบริการนั้นๆ โดยสิ้นเชิงเพื่อไม่ให้เกิดความเสี่ยง\n- ข้อ C ไม่ถูกต้อง: Mitigation ใช้มาตรการลดโอกาสหรือผลกระทบของความเสี่ยงที่ประเมิน ส่วนการซื้อประกันตามโจทย์แบ่งภาระความเสียหายทางการเงินที่คุ้มครอง\n- ข้อ D ไม่ถูกต้อง: การยอมรับความเสี่ยงคือการตัดสินใจแบกรับความเสี่ยงไว้เองเมื่อความเสี่ยงอยู่ในระดับที่องค์กรยอมรับได้",
    "explanation_detail": {
      "correct": {
        "en": "Risk transfer or sharing allocates covered financial exposure to another party, for example through insurance or contractual indemnification. Coverage and exclusions matter; applicable organizational duties do not disappear merely because a policy is bought.",
        "th": "Risk Transfer หรือ Sharing แบ่งภาระความเสียหายทางการเงินตามความคุ้มครองให้ผู้อื่น เช่น ผ่านประกันหรือข้อสัญญาชดเชย ต้องดูความคุ้มครองและข้อยกเว้น หน้าที่ที่ใช้กับองค์กรไม่ได้หายไปเพียงเพราะซื้อกรมธรรม์"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Risk Avoidance involves completely eliminating the risk by terminating or not engaging in the high-risk business activity or technology.",
          "text_th": "การหลีกเลี่ยงความเสี่ยงคือการยกเลิกการดำเนินกิจกรรมหรือบริการนั้นๆ โดยสิ้นเชิงเพื่อไม่ให้เกิดความเสี่ยง"
        },
        {
          "letter": "C",
          "text_en": "Mitigation applies controls to reduce the likelihood or impact of the assessed risk. The stated insurance purchase instead shares covered financial exposure.",
          "text_th": "Mitigation ใช้มาตรการลดโอกาสหรือผลกระทบของความเสี่ยงที่ประเมิน ส่วนการซื้อประกันตามโจทย์แบ่งภาระความเสียหายทางการเงินที่คุ้มครอง"
        },
        {
          "letter": "D",
          "text_en": "Acceptance is informed, authorized retention of exposure and can coexist with safeguards or insurance. It does not name the financial-sharing action described here.",
          "text_th": "Acceptance คือการรับความเสี่ยงไว้อย่างมีข้อมูลและมีอำนาจ ซึ่งใช้ร่วมกับมาตรการหรือประกันได้ ไม่ใช่ชื่อของการแบ่งภาระทางการเงินที่โจทย์ระบุ"
        }
      ],
      "example": {
        "en": "An e-commerce company mitigates DDoS attacks with cloud scrubbers, but purchases a $10M cyber insurance policy to transfer catastrophic financial disruption risks.",
        "th": "บริษัทอีคอมเมิร์ซติดตั้งระบบป้องกัน DDoS แต่ซื้อประกันภัยไซเบอร์วงเงิน 10 ล้านดอลลาร์เพื่อถ่ายโอนความเสี่ยงจากผลกระทบทางการเงินหากระบบล่ม"
      },
      "exam_tip": {
        "en": "Distinguish sharing covered financial losses from reducing technical exposure or accepting remaining risk. Check contractual coverage and retained organizational responsibilities.",
        "th": "แยกการแบ่งภาระความเสียหายที่คุ้มครองออกจากการลดการเปิดรับทางเทคนิคหรือยอมรับความเสี่ยงคงเหลือ ตรวจความคุ้มครองตามสัญญาและหน้าที่ที่องค์กรยังมี"
      }
    }
  },
  {
    "id": 636,
    "dom": 2,
    "question": "A healthcare enterprise implements multi-factor authentication, endpoint detection and response (EDR), and network segmentation around a specialized medical imaging database. After all planned safeguards are applied, a formal assessment reveals that some risk of zero-day exploitation remains, though it falls within the hospital's approved risk threshold. What is the REQUIRED governance step before approving the system for production clinical use?",
    "options": [
      "Continuing to implement technical security controls until all residual risk is reduced to absolute zero",
      "Delegating risk sign-off to the junior IT systems administrator who deployed the firewall rules",
      "Documenting the residual risk in the risk register and obtaining formal risk acceptance from the designated business asset owner",
      "Purchasing redundant firewall appliances to automatically eliminate any need for administrative risk acceptance"
    ],
    "correct_idx": 2,
    "explanation": "The residual risk should be documented and referred to the designated risk-acceptance authority. Among these options, the designated business asset owner best matches that governance responsibility; the organization must define the owner’s authority and escalation limits.\nA: Absolute zero risk is an unachievable fallacy; attempting to eliminate all risk paralyzes business operations.\nB: Deploying firewall rules does not itself authorize an administrator to accept the organization’s business risk. The scenario identifies no such delegation to the junior administrator.\nD: Technical controls can reduce risk, but they cannot eliminate residual risk or bypass governance sign-off requirements.",
    "short_explanation_en": "Residual risk should be documented and accepted through the designated organizational authority.",
    "question_th": "องค์กรโรงพยาบาลได้ติดตั้งระบบยืนยันตัวตนหลายปัจจัย (MFA) ระบบตรวจจับภัยคุกคามที่เครื่องลูกข่าย (EDR) และการแบ่งแยกเครือข่ายสำหรับฐานข้อมูลภาพถ่ายทางการแพทย์ หลังจากนำมาตรการทั้งหมดมาใช้แล้ว ผลการประเมินพบว่ายังคงมีความเสี่ยงจากการโจมตีแบบ Zero-day หลงเหลืออยู่ แต่ระดับความเสี่ยงนี้อยู่ในเกณฑ์ที่โรงพยาบาลยอมรับได้ ขั้นตอนการกำกับดูแลข้อใดที่จำเป็นต้องทำก่อนอนุมัติให้ระบบเปิดใช้งานจริง?",
    "options_th": [
      "ดำเนินการติดตั้งมาตรการควบคุมทางเทคนิคต่อไปจนกว่าความเสี่ยงคงเหลือทั้งหมดจะลดลงเหลือศูนย์อย่างแท้จริง",
      "มอบหมายอำนาจการลงนามอนุมัติความเสี่ยงให้แก่เจ้าหน้าที่ดูแลระบบไอทีระดับปฏิบัติการที่เป็นผู้ติดตั้งไฟร์วอลล์",
      "บันทึกความเสี่ยงคงเหลือ (Residual Risk) ลงในทะเบียนความเสี่ยง และให้เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายลงนามยอมรับความเสี่ยงอย่างเป็นทางการ",
      "จัดซื้ออุปกรณ์ไฟร์วอลล์สำรองเพื่อขจัดความจำเป็นในการลงนามยอมรับความเสี่ยงของฝ่ายบริหารโดยอัตโนมัติ"
    ],
    "explanation_th": "ควรบันทึกความเสี่ยงที่เหลือและเสนอให้ผู้มีอำนาจยอมรับความเสี่ยงที่ได้รับมอบหมาย ในบรรดาตัวเลือก เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายตรงกับความรับผิดชอบด้านการกำกับดูแลมากที่สุด โดยองค์กรต้องกำหนดอำนาจและขอบเขตการส่งต่อของเจ้าของนั้น\nA: แนวคิดลดความเสี่ยงเป็นศูนย์เป็นสิ่งที่เป็นไปไม่ได้ในทางปฏิบัติ และจะทำให้องค์กรไม่สามารถดำเนินงานได้\nB: การติดตั้งกฎไฟร์วอลล์ไม่ได้ให้อำนาจผู้ดูแลระบบยอมรับความเสี่ยงทางธุรกิจขององค์กรโดยตัวมันเอง และโจทย์ไม่ได้ระบุการมอบอำนาจดังกล่าวแก่ผู้ดูแลระบบระดับต้น\nD: การซื้ออุปกรณ์เพิ่มไม่สามารถขจัดความเสี่ยงคงเหลือให้หมดไป และไม่สามารถทดแทนการอนุมัติยอมรับความเสี่ยงได้",
    "explanation_detail": {
      "correct": {
        "en": "The residual risk should be documented and referred to the designated risk-acceptance authority. Among these options, the designated business asset owner best matches that governance responsibility; the organization must define the owner’s authority and escalation limits.",
        "th": "ควรบันทึกความเสี่ยงที่เหลือและเสนอให้ผู้มีอำนาจยอมรับความเสี่ยงที่ได้รับมอบหมาย ในบรรดาตัวเลือก เจ้าของทรัพย์สินทางธุรกิจที่ได้รับมอบหมายตรงกับความรับผิดชอบด้านการกำกับดูแลมากที่สุด โดยองค์กรต้องกำหนดอำนาจและขอบเขตการส่งต่อของเจ้าของนั้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Absolute zero risk is an unachievable fallacy; attempting to eliminate all risk paralyzes business operations.",
          "text_th": "แนวคิดลดความเสี่ยงเป็นศูนย์เป็นสิ่งที่เป็นไปไม่ได้ในทางปฏิบัติ และจะทำให้องค์กรไม่สามารถดำเนินงานได้"
        },
        {
          "letter": "B",
          "text_en": "Deploying firewall rules does not itself authorize an administrator to accept the organization’s business risk. The scenario identifies no such delegation to the junior administrator.",
          "text_th": "การติดตั้งกฎไฟร์วอลล์ไม่ได้ให้อำนาจผู้ดูแลระบบยอมรับความเสี่ยงทางธุรกิจขององค์กรโดยตัวมันเอง และโจทย์ไม่ได้ระบุการมอบอำนาจดังกล่าวแก่ผู้ดูแลระบบระดับต้น"
        },
        {
          "letter": "D",
          "text_en": "Technical controls can reduce risk, but they cannot eliminate residual risk or bypass governance sign-off requirements.",
          "text_th": "การซื้ออุปกรณ์เพิ่มไม่สามารถขจัดความเสี่ยงคงเหลือให้หมดไป และไม่สามารถทดแทนการอนุมัติยอมรับความเสี่ยงได้"
        }
      ],
      "example": {
        "en": "If authorized under the hospital’s risk-governance rules, a radiology head can accept documented low-likelihood zero-day exposure on an encrypted PACS server after verified MFA and EDR, or escalate if outside the assigned limit.",
        "th": "หากได้รับอำนาจตามกฎกำกับความเสี่ยงของโรงพยาบาล หัวหน้ารังสีวิทยายอมรับความเสี่ยง Zero-day ที่มีโอกาสเกิดต่ำซึ่งบันทึกไว้บน PACS ที่เข้ารหัสหลังตรวจ MFA และ EDR แล้วได้ หรือต้องส่งต่อหากเกินขอบเขตอำนาจ"
      },
      "exam_tip": {
        "en": "Check that residual risk is documented and accepted through the organization’s designated authority. Technical implementation alone is not risk-acceptance authorization.",
        "th": "ตรวจว่าความเสี่ยงที่เหลือได้รับการบันทึกและยอมรับผ่านผู้มีอำนาจที่องค์กรกำหนด การนำมาตรการทางเทคนิคไปใช้เพียงอย่างเดียวไม่ใช่การมอบอำนาจยอมรับความเสี่ยง"
      }
    }
  },
  {
    "id": 637,
    "dom": 2,
    "question": "A central stock exchange processes millions of financial transactions per minute and operates under strict financial regulatory mandates. The organization's Business Impact Analysis (BIA) specifies a Recovery Time Objective (RTO) of under 15 minutes and a Recovery Point Objective (RPO) of zero data loss. Which alternate recovery site strategy is MANDATORY to satisfy these stringent disaster recovery requirements?",
    "options": [
      "A cold site equipped with basic power and cooling requiring hardware procurement following a disaster",
      "A warm site with pre-installed server hardware requiring manual tape restoration and software configuration",
      "A mobile recovery trailer equipped with desktop computers dispatched to the primary site after an incident",
      "A hot site configured with redundant hardware, live telecommunications, and real-time continuous data mirroring"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. A Hot Site is a fully equipped, continuously operating alternate data center with mirrored hardware, active network connections, and real-time data replication. It enables near-instantaneous automated or manual failover, making it the only recovery site model capable of achieving an RTO under 15 minutes and an RPO of near zero. Option A is incorrect because a cold site lacks hardware, telecommunications, and data, requiring days or weeks to become operational. Option B is incorrect because a warm site has hardware installed but requires hours to days to load current data backups and configure software, which violates a 15-minute RTO. Option C is incorrect because a mobile recovery unit takes hours or days to deploy, connect, and restore.",
    "short_explanation_en": "A Hot Site provides mirrored hardware, live connectivity, and real-time replication for near-zero RTO and RPO.",
    "question_th": "ตลาดหลักทรัพย์แห่งหนึ่งประมวลผลธุรกรรมทางการเงินหลายล้านรายการต่อนาทีภายใต้กฎระเบียบที่เข้มงวด ผลการวิเคราะห์ผลกระทบทางธุรกิจ (BIA) กำหนดเป้าหมายระยะเวลาการกู้คืนระบบ (RTO) ไม่เกิน 15 นาที และเป้าหมายจุดกู้คืนข้อมูล (RPO) ต้องไม่มีข้อมูลสูญหาย (Zero Data Loss) กลยุทธ์ศูนย์สำรองข้อมูลข้อใดจำเป็นต้องนำมาใช้เพื่อตอบสนองข้อกำหนดการกู้คืนที่เข้มงวดนี้?",
    "options_th": [
      "ศูนย์สำรองข้อมูลแบบ Cold Site ที่มีเพียงระบบไฟฟ้าและระบบทำความเย็นพื้นฐาน โดยต้องจัดซื้อฮาร์ดแวร์ใหม่หลังเกิดภัยพิบัติ",
      "ศูนย์สำรองข้อมูลแบบ Warm Site ที่ติดตั้งเซิร์ฟเวอร์ไว้ล่วงหน้า แต่ต้องกู้คืนข้อมูลจากเทปและตั้งค่าซอฟต์แวร์ด้วยตนเอง",
      "รถเทรลเลอร์ศูนย์ปฏิบัติการเคลื่อนที่ที่ติดตั้งคอมพิวเตอร์และส่งไปยังศูนย์ข้อมูลหลักหลังเกิดเหตุฉุกเฉิน",
      "ศูนย์สำรองข้อมูลแบบ Hot Site ที่ติดตั้งฮาร์ดแวร์สำรอง ระบบเครือข่ายพร้อมใช้งาน และระบบทำสำเนาข้อมูลแบบเรียลไทม์อย่างต่อเนื่อง"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ศูนย์สำรองข้อมูลแบบ Hot Site คือศูนย์ข้อมูลสำรองที่มีอุปกรณ์ฮาร์ดแวร์ ระบบเครือข่าย และระบบจำลองข้อมูลแบบเรียลไทม์พร้อมทำงานตลอดเวลา ทำให้สามารถสลับการทำงานได้ทันที จึงเป็นทางเลือกเดียวที่สามารถตอบโจทย์ RTO ต่ำกว่า 15 นาที และ RPO เท่ากับศูนย์\n- ข้อ A ไม่ถูกต้อง: Cold Site มีเพียงอาคารและระบบไฟฟ้า ไม่มีฮาร์ดแวร์และข้อมูล ต้องใช้เวลาหลายวันหรือหลายสัปดาห์ในการจัดซื้อและติดตั้ง\n- ข้อ B ไม่ถูกต้อง: Warm Site มีฮาร์ดแวร์แต่ไม่มีข้อมูลล่าสุด ต้องใช้เวลาหลายชั่วโมงในการกู้ข้อมูลจากเทปสำรอง ซึ่งไม่ทันเกณฑ์ 15 นาที\n- ข้อ C ไม่ถูกต้อง: รถกู้ภัยเคลื่อนที่ต้องใช้เวลาเดินทางและเชื่อมต่อระบบหลายชั่วโมง ไม่เหมาะกับระบบที่หยุดทำงานไม่ได้",
    "explanation_detail": {
      "correct": {
        "en": "A Hot Site is a fully equipped, continuously operating alternate data center with mirrored hardware, active network connections, and real-time data replication. It enables near-instantaneous automated or manual failover, making it the only recovery site model capable of achieving an RTO under 15 minutes and an RPO of near zero.",
        "th": "ศูนย์สำรองข้อมูลแบบ Hot Site มีความพร้อมสมบูรณ์ทั้งฮาร์ดแวร์ ระบบเครือข่าย และข้อมูลจำลองแบบเรียลไทม์ ทำให้สามารถสลับการทำงานได้ทันที จึงเป็นทางเลือกเดียวที่ตอบสนอง RTO ต่ำกว่า 15 นาที และ RPO เท่ากับศูนย์"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A cold site lacks hardware, telecommunications, and data, requiring days or weeks to become operational.",
          "text_th": "Cold Site มีเพียงพื้นที่และระบบไฟฟ้า ต้องใช้เวลาจัดซื้อและติดตั้งฮาร์ดแวร์นานหลายวันหรือหลายสัปดาห์"
        },
        {
          "letter": "B",
          "text_en": "A warm site has hardware installed but requires hours to days to load current data backups and configure software, violating a 15-minute RTO.",
          "text_th": "Warm Site ต้องใช้เวลากู้คืนข้อมูลและติดตั้งซอฟต์แวร์หลายชั่วโมง ซึ่งเกินกว่าเกณฑ์ 15 นาที"
        },
        {
          "letter": "C",
          "text_en": "A mobile recovery unit takes hours or days to deploy, connect, and restore.",
          "text_th": "รถปฏิบัติการเคลื่อนที่ต้องใช้เวลาเดินทางและเชื่อมต่อระบบนาน ไม่สามารถกู้คืนได้ใน 15 นาที"
        }
      ],
      "example": {
        "en": "A primary financial exchange in New York uses a synchronized hot site in New Jersey with active-active transaction mirroring to achieve near-instantaneous failover.",
        "th": "ตลาดหุ้นในนิวยอร์กใช้ศูนย์ Hot Site คู่ขนานในรัฐนิวเจอร์ซีย์ที่มีการจำลองข้อมูลแบบเรียลไทม์ ทำให้สามารถสลับการทำงานได้ทันทีโดยไม่มีข้อมูลสูญหาย"
      },
      "exam_tip": {
        "en": "Remember site trade-offs for the CC exam: Hot site = Highest cost, fastest recovery (minutes); Warm site = Moderate cost/time (hours/days); Cold site = Lowest cost, slowest recovery (weeks).",
        "th": "หลักการจำเปรียบเทียบศูนย์สำรอง: Hot site = ค่าใช้จ่ายสูงสุด กู้คืนเร็วสุด (นาที); Warm site = ค่าใช้จ่ายปานกลาง (ชั่วโมง/วัน); Cold site = ค่าใช้จ่ายต่ำสุด กู้คืนช้าสุด (หลายสัปดาห์)"
      }
    }
  },
  {
    "id": 638,
    "dom": 2,
    "question": "A financial services institution recently drafted its first formal Disaster Recovery Plan (DRP). The Chief Information Officer (CIO) wants the crisis management team and business unit leaders to review their emergency roles, validate recovery procedures, and resolve interdepartmental communication gaps without disrupting live customer transactions or incurring significant operational expenses. Which disaster recovery test method should the organization conduct FIRST?",
    "options": [
      "A tabletop exercise (structured walkthrough) conducted in a conference room setting",
      "A full-interruption test involving shutting down primary power to the corporate data center",
      "A parallel test requiring the secondary hot site to fully process live transactions for 48 hours",
      "An unannounced evacuation drill initiated during peak retail banking hours"
    ],
    "correct_idx": 0,
    "explanation": "A discussion-based tabletop exercise fits the stated goal of reviewing roles, recovery procedures and communications without intentionally interrupting production. It can expose procedural gaps, but does not demonstrate that technical recovery or failover will work.\nB: The offered full-interruption test intentionally stops primary operations, contrary to this initial low-disruption discussion objective. Exercise choice and safeguards depend on approved goals and risk.\nC: The proposed 48-hour parallel processing test requires recovery resources and operational coordination beyond the low-cost discussion sought here. Exercise selection depends on objectives and risk, not a universal sequence.\nD: An unannounced evacuation disrupts customer service and does not evaluate IT system recovery procedures.",
    "short_explanation_en": "A tabletop can review roles and procedures without intentionally interrupting production; it does not prove technical recovery.",
    "question_th": "สถาบันการเงินแห่งหนึ่งเพิ่งจัดทำแผนกู้คืนระบบจากภัยพิบัติ (DRP) ฉบับแรกเสร็จสมบูรณ์ ประธานเจ้าหน้าที่ฝ่ายสารสนเทศ (CIO) ต้องการให้ทีมจัดการภาวะวิกฤตและผู้นำฝ่ายธุรกิจซักซ้อมบทบาทหน้าที่ ตรวจสอบความถูกต้องของขั้นตอนการกู้คืน และแก้ไขจุดบกพร่องด้านการประสานงาน โดยไม่รบกวนการทำธุรกรรมของลูกค้าและไม่สร้างภาระค่าใช้จ่ายสูง องค์กรควรดำเนินการทดสอบแผน DRP ด้วยวิธีใดเป็นอันดับแรก?",
    "options_th": [
      "การฝึกซ้อมบนโต๊ะ (Tabletop exercise หรือ Structured walkthrough) ที่จัดขึ้นในห้องประชุม",
      "การทดสอบแบบตัดระบบการทำงานจริงทั้งหมด (Full-interruption test) โดยการปิดสวิตช์ไฟฟ้าหลักของศูนย์ข้อมูล",
      "การทดสอบแบบคู่ขนาน (Parallel test) โดยให้ศูนย์สำรองประมวลผลธุรกรรมจริงของลูกค้าทั้งหมดเป็นเวลา 48 ชั่วโมง",
      "การซ้อมอพยพฉุกเฉินแบบไม่แจ้งล่วงหน้าในระหว่างช่วงเวลาที่มีการทำธุรกรรมของธนาคารสูงสุด"
    ],
    "explanation_th": "การฝึกซ้อม Tabletop แบบอภิปรายเหมาะกับเป้าหมายทบทวนบทบาท ขั้นตอนกู้คืน และการสื่อสาร โดยไม่จงใจหยุดระบบจริง สามารถช่วยพบช่องว่างของกระบวนการ แต่ไม่ได้พิสูจน์ว่าการกู้คืนทางเทคนิคหรือ Failover จะทำงานได้\nB: การทดสอบตัดระบบจริงที่เสนอจงใจหยุดงานหลัก จึงไม่ตรงเป้าหมายการอภิปรายเริ่มต้นที่กระทบน้อยในโจทย์ การเลือกการฝึกและมาตรการป้องกันขึ้นกับเป้าหมายและความเสี่ยงที่อนุมัติ\nC: การทดสอบประมวลผลคู่ขนาน 48 ชั่วโมงที่เสนอต้องใช้ทรัพยากรกู้คืนและการประสานงานเกินกว่าการอภิปรายต้นทุนต่ำที่ต้องการในโจทย์ การเลือกแบบฝึกขึ้นกับวัตถุประสงค์และความเสี่ยง ไม่ใช่ลำดับเดียวที่ใช้ทุกกรณี\nD: การซ้อมอพยพกะทันหันรบกวนลูกค้าและไม่ได้ประเมินขั้นตอนการกู้คืนระบบไอที",
    "explanation_detail": {
      "correct": {
        "en": "A discussion-based tabletop exercise fits the stated goal of reviewing roles, recovery procedures and communications without intentionally interrupting production. It can expose procedural gaps, but does not demonstrate that technical recovery or failover will work.",
        "th": "การฝึกซ้อม Tabletop แบบอภิปรายเหมาะกับเป้าหมายทบทวนบทบาท ขั้นตอนกู้คืน และการสื่อสาร โดยไม่จงใจหยุดระบบจริง สามารถช่วยพบช่องว่างของกระบวนการ แต่ไม่ได้พิสูจน์ว่าการกู้คืนทางเทคนิคหรือ Failover จะทำงานได้"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The offered full-interruption test intentionally stops primary operations, contrary to this initial low-disruption discussion objective. Exercise choice and safeguards depend on approved goals and risk.",
          "text_th": "การทดสอบตัดระบบจริงที่เสนอจงใจหยุดงานหลัก จึงไม่ตรงเป้าหมายการอภิปรายเริ่มต้นที่กระทบน้อยในโจทย์ การเลือกการฝึกและมาตรการป้องกันขึ้นกับเป้าหมายและความเสี่ยงที่อนุมัติ"
        },
        {
          "letter": "C",
          "text_en": "The proposed 48-hour parallel processing test requires recovery resources and operational coordination beyond the low-cost discussion sought here. Exercise selection depends on objectives and risk, not a universal sequence.",
          "text_th": "การทดสอบประมวลผลคู่ขนาน 48 ชั่วโมงที่เสนอต้องใช้ทรัพยากรกู้คืนและการประสานงานเกินกว่าการอภิปรายต้นทุนต่ำที่ต้องการในโจทย์ การเลือกแบบฝึกขึ้นกับวัตถุประสงค์และความเสี่ยง ไม่ใช่ลำดับเดียวที่ใช้ทุกกรณี"
        },
        {
          "letter": "D",
          "text_en": "An unannounced evacuation disrupts customer service and does not evaluate IT system recovery procedures.",
          "text_th": "การซ้อมอพยพกะทันหันรบกวนลูกค้าและไม่ได้ประเมินขั้นตอนการกู้คืนระบบไอที"
        }
      ],
      "example": {
        "en": "Before testing failover servers, a bank's CISO hosts a 3-hour tabletop walkthrough with department heads to confirm everyone understands who declares a disaster and contacts the DR site.",
        "th": "ก่อนการทดสอบสลับระบบจริง CISO ของธนาคารจัดประชุม Tabletop นาน 3 ชั่วโมงกับหัวหน้าแผนกเพื่อซักซ้อมว่าใครเป็นผู้ประกาศภาวะภัยพิบัติและใครต้องประสานงานกับศูนย์สำรอง"
      },
      "exam_tip": {
        "en": "Choose the exercise that tests the stated objective within the disruption and resource constraints. Discussion and technical execution provide different evidence; terminology and progression may vary by program.",
        "th": "เลือกการฝึกที่ตรวจสอบวัตถุประสงค์ตามข้อจำกัดเรื่องผลกระทบและทรัพยากร การอภิปรายและการลงมือทดสอบทางเทคนิคให้หลักฐานต่างกัน และชื่อหรือขั้นตอนการฝึกอาจแตกต่างตามโปรแกรม"
      }
    }
  },
  {
    "id": 639,
    "dom": 2,
    "question": "Severe urban flooding simultaneously disables an enterprise's physical server facility, taking four critical business systems offline: the Customer Emergency Dispatch System (MTD = 2 hours), the Enterprise Resource Planning (ERP) System (MTD = 24 hours), the Employee Payroll Processing System (MTD = 72 hours), and the Public Marketing Website (MTD = 120 hours). With limited engineering staff and emergency power available, which system must the incident commander order to be restored FIRST?",
    "options": [
      "The Employee Payroll Processing System, to prevent internal workforce dissatisfaction",
      "The Customer Emergency Dispatch System, because its 2-hour MTD represents the greatest imminent threat to organizational viability and safety",
      "The Public Marketing Website, because it presents the highest external brand visibility to general web consumers",
      "The system with the smallest storage footprint, to ensure an easy initial restoration milestone"
    ],
    "correct_idx": 1,
    "explanation": "Among the listed choices, emergency dispatch has the stated safety-critical function and the shortest downtime tolerance, so it is the best recovery priority on the supplied facts. An actual recovery sequence must also account for the BIA’s dependencies, prerequisites and approved recovery objectives.\nA: Payroll has an MTD of 72 hours, allowing substantial time for restoration compared to emergency dispatch.\nC: Marketing visibility is non-critical compared to emergency dispatch operations.\nD: Recovery sequencing is governed by business criticality and MTD thresholds, not by data storage size or technical convenience.",
    "short_explanation_en": "Recovery priorities consider business criticality, downtime tolerances and system dependencies.",
    "question_th": "เหตุอุทกภัยรุนแรงในเขตเมืองส่งผลให้ศูนย์ข้อมูลหลักขององค์กรไม่สามารถใช้งานได้ ทำให้ระบบงานสำคัญ 4 ระบบหยุดทำงานพร้อมกัน ได้แก่ ระบบประสานงานเหตุฉุกเฉินของลูกค้า (MTD = 2 ชั่วโมง), ระบบวางแผนทรัพยากรองค์กร ERP (MTD = 24 ชั่วโมง), ระบบประมวลผลเงินเดือนพนักงาน (MTD = 72 ชั่วโมง) และเว็บไซต์การตลาดสาธารณะ (MTD = 120 ชั่วโมง) ในสถานการณ์ที่ทีมวิศวกรและพลังงานสำรองมีจำกัด ผู้บัญชาการเหตุการณ์ต้องสั่งการให้กู้คืนระบบใดเป็นอันดับแรก?",
    "options_th": [
      "ระบบประมวลผลเงินเดือนพนักงาน เพื่อป้องกันความไม่พึงพอใจของบุคลากรภายในองค์กร",
      "ระบบประสานงานเหตุฉุกเฉินของลูกค้า เนื่องจากมีค่า MTD 2 ชั่วโมง ซึ่งส่งผลกระทบต่อความอยู่รอดและความปลอดภัยสูงสุดหากล่าช้า",
      "เว็บไซต์การตลาดสาธารณะ เนื่องจากเป็นจุดที่ผู้บริโภคทั่วไปมองเห็นและสร้างภาพลักษณ์ภายนอกสูงสุด",
      "ระบบที่มีขนาดพื้นที่จัดเก็บข้อมูลน้อยที่สุด เพื่อให้ทีมงานบรรลุความสำเร็จในการกู้คืนระบบแรกได้โดยง่าย"
    ],
    "explanation_th": "ในบรรดาตัวเลือก ระบบ Emergency dispatch มีหน้าที่สำคัญต่อความปลอดภัยตามโจทย์และมีระยะเวลาที่ทนต่อการหยุดทำงานสั้นที่สุด จึงควรได้รับความสำคัญในการกู้คืนจากข้อมูลที่ให้มา ส่วนลำดับกู้คืนจริงต้องพิจารณาระบบที่พึ่งพากัน เงื่อนไขก่อนดำเนินการ และเป้าหมายกู้คืนที่อนุมัติใน BIA ด้วย\nA: ระบบเงินเดือนมี MTD นานถึง 72 ชั่วโมง ยังมีเวลากู้คืนได้หลังจากระบบวิกฤติได้รับการดูแลแล้ว\nC: เว็บไซต์การตลาดมีความสำคัญรองลงมาอย่างมากเมื่อเทียบกับระบบฉุกเฉินที่กระทบความปลอดภัย\nD: ลำดับการกู้คืนต้องพิจารณาจากผลกระทบทางธุรกิจและค่า MTD ไม่ใช่ความสะดวกหรือขนาดพื้นที่ข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "Among the listed choices, emergency dispatch has the stated safety-critical function and the shortest downtime tolerance, so it is the best recovery priority on the supplied facts. An actual recovery sequence must also account for the BIA’s dependencies, prerequisites and approved recovery objectives.",
        "th": "ในบรรดาตัวเลือก ระบบ Emergency dispatch มีหน้าที่สำคัญต่อความปลอดภัยตามโจทย์และมีระยะเวลาที่ทนต่อการหยุดทำงานสั้นที่สุด จึงควรได้รับความสำคัญในการกู้คืนจากข้อมูลที่ให้มา ส่วนลำดับกู้คืนจริงต้องพิจารณาระบบที่พึ่งพากัน เงื่อนไขก่อนดำเนินการ และเป้าหมายกู้คืนที่อนุมัติใน BIA ด้วย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Payroll has an MTD of 72 hours, allowing substantial time for restoration compared to emergency dispatch.",
          "text_th": "ระบบเงินเดือนมี MTD นานถึง 72 ชั่วโมง ยังมีเวลากู้คืนได้หลังจากระบบวิกฤติได้รับการดูแลแล้ว"
        },
        {
          "letter": "C",
          "text_en": "Marketing visibility is non-critical compared to emergency dispatch operations.",
          "text_th": "เว็บไซต์การตลาดมีความสำคัญรองลงมาอย่างมากเมื่อเทียบกับระบบฉุกเฉินที่กระทบความปลอดภัย"
        },
        {
          "letter": "D",
          "text_en": "Recovery sequencing is governed by business criticality and MTD thresholds, not by data storage size or technical convenience.",
          "text_th": "ลำดับการกู้คืนต้องพิจารณาจากผลกระทบทางธุรกิจและค่า MTD ไม่ใช่ความสะดวกหรือขนาดพื้นที่ข้อมูล"
        }
      ],
      "example": {
        "en": "A hospital disaster response team restores the patient life-support telemetry network (MTD = 30 min) before recovering billing servers (MTD = 48 hrs).",
        "th": "ทีมกู้คืนระบบของโรงพยาบาลจะกู้คืนระบบมอนิเตอร์สัญญาณชีพออนไลน์ (MTD = 30 นาที) ก่อนเซิร์ฟเวอร์ระบบออกใบแจ้งหนี้ (MTD = 48 ชั่วโมง)"
      },
      "exam_tip": {
        "en": "Remember for the CC exam: MTD (Maximum Tolerable Downtime) is the overall business tolerance limit; RTO (Recovery Time Objective) must always be set shorter than or equal to MTD.",
        "th": "ข้อควรจำสำหรับการสอบ CC: ค่า MTD คือขีดจำกัดสูงสุดที่ธุรกิจจะทนได้ ส่วน RTO คือเป้าหมายเวลาในการกู้คืนระบบ ซึ่งจะต้องสั้นกว่าหรือเท่ากับ MTD เสมอ"
      }
    }
  },
  {
    "id": 640,
    "dom": 2,
    "question": "A field sales representative receives an SMS text message on their corporate smartphone stating: 'URGENT: Your pending equipment shipment #94218 will be returned to sender within 2 hours. Click https://corp-logistics-track.cc/verify to confirm your corporate credentials and delivery address.' The link leads to an unauthenticated webpage that harvests single sign-on (SSO) credentials. Which form of social engineering is being executed?",
    "options": [
      "Voice Phishing (Vishing)",
      "Watering Hole Attack",
      "SMS Phishing (Smishing)",
      "Shoulder Surfing"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Smishing (SMS Phishing) is a social engineering attack conducted via Short Message Service (SMS) or mobile text messaging that deceives targets into clicking malicious hyperlinks, revealing sensitive credentials, or downloading malware. Option A is incorrect because Vishing uses voice communications or telephone calls, not text messages. Option B is incorrect because a Watering Hole attack compromises legitimate third-party websites frequently visited by a target group rather than sending direct text messages. Option D is incorrect because Shoulder Surfing involves physical observation of someone typing passwords or sensitive information over their shoulder.",
    "short_explanation_en": "Smishing is social engineering delivered through mobile SMS or text messaging.",
    "question_th": "ตัวแทนฝ่ายขายภาคสนามได้รับข้อความ SMS ทางสมาร์ตโฟนของบริษัท ระบุว่า: 'ด่วน: พัสดุอุปกรณ์หมายเลข #94218 ของคุณจะถูกส่งคืนต้นทางภายใน 2 ชั่วโมง โปรดคลิก https://corp-logistics-track.cc/verify เพื่อยืนยันรหัสผ่านบริษัทและที่อยู่จัดส่ง' เมื่อคลิกลิงก์จะนำไปยังหน้าเว็บปลอมที่ดักจับข้อมูลบัญชี Single Sign-On (SSO) พฤติการณ์นี้จัดเป็นวิศวกรรมสังคม (Social Engineering) รูปแบบใด?",
    "options_th": [
      "การหลอกลวงผ่านการสนทนาทางโทรศัพท์ (Vishing)",
      "การโจมตีแบบแหล่งน้ำ (Watering Hole Attack)",
      "การหลอกลวงผ่านข้อความสั้นบนโทรศัพท์มือถือ (Smishing)",
      "การแอบมองข้ามไหล่ (Shoulder Surfing)"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: Smishing (SMS Phishing) คือการหลอกลวงทางวิศวกรรมสังคมที่ส่งผ่านข้อความสั้น (SMS) บนโทรศัพท์มือถือ โดยมักใช้ข้อความเร่งด่วนกระตุ้นให้เหยื่อคลิกลิงก์ปลอมเพื่อขโมยรหัสผ่านหรือติดตั้งมัลแวร์\n- ข้อ A ไม่ถูกต้อง: Vishing คือการโทรศัพท์มาหลอกลวงด้วยเสียงพูด ไม่ใช่การส่งข้อความตัวอักษร\n- ข้อ B ไม่ถูกต้อง: Watering Hole Attack คือการดักฝังมัลแวร์บนเว็บไซต์ที่กลุ่มเป้าหมายเข้าใช้งานเป็นประจำ\n- ข้อ D ไม่ถูกต้อง: Shoulder Surfing คือการแอบมองหน้าจอหรือแป้นพิมพ์ขณะที่ผู้อื่นกำลังพิมพ์รหัสผ่าน",
    "explanation_detail": {
      "correct": {
        "en": "Smishing (SMS Phishing) is a social engineering attack conducted via Short Message Service (SMS) or mobile text messaging that deceives targets into clicking malicious hyperlinks, revealing sensitive credentials, or downloading malware.",
        "th": "Smishing (SMS Phishing) คือการหลอกลวงทางวิศวกรรมสังคมผ่านข้อความสั้น (SMS) บนมือถือเพื่อลวงให้เหยื่อคลิกลิงก์หรือเปิดเผยข้อมูลสำคัญ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Vishing uses voice communications or telephone calls, not text messages.",
          "text_th": "Vishing คือการหลอกลวงด้วยเสียงผ่านการโทรศัพท์ ไม่ใช่ข้อความ SMS"
        },
        {
          "letter": "B",
          "text_en": "A Watering Hole attack compromises legitimate third-party websites frequently visited by a target group.",
          "text_th": "Watering Hole Attack คือการดักโจมตีผ่านเว็บไซต์ที่เหยื่อเข้าใช้งานเป็นประจำ"
        },
        {
          "letter": "D",
          "text_en": "Shoulder Surfing involves physical observation of someone typing passwords or sensitive data.",
          "text_th": "Shoulder Surfing คือการแอบมองข้ามไหล่ขณะเหยื่อพิมพ์ข้อมูล"
        }
      ],
      "example": {
        "en": "An employee receives a text claiming their corporate bank account is locked with a link to an illegitimate domain, which is a classic smishing scam.",
        "th": "พนักงานได้รับข้อความ SMS อ้างว่าบัญชีธนาคารของบริษัทถูกระงับพร้อมแนบลิงก์ไปยังเว็บปลอม เป็นตัวอย่างที่ชัดเจนของ Smishing"
      },
      "exam_tip": {
        "en": "Phishing is a broader family: voice delivery is vishing and SMS delivery is smishing; spear phishing is targeted and whaling targets senior executives. Describe the channel and target actually stated.",
        "th": "Phishing เป็นกลุ่มกว้าง การส่งผ่านเสียงคือ Vishing และผ่าน SMS คือ Smishing ส่วน Spear phishing เจาะจงเป้าหมาย และ Whaling เจาะผู้บริหารระดับสูง พิจารณาช่องทางและเป้าหมายที่โจทย์ระบุจริง"
      }
    }
  },
  {
    "id": 641,
    "dom": 2,
    "question": "An attacker identifies a senior procurement specialist at a defense manufacturing firm through professional networking profiles. The attacker crafts a targeted email referencing the specialist's recent government request for proposal (RFP), addressing the specialist by name, and attaching a file named 'Project_Alpha_Subcontractor_Bid_Amendment.pdf.exe'. How does this attack PRIMARILY differ from a standard, generic phishing campaign?",
    "options": [
      "It utilizes automated voice response systems rather than email communications",
      "It specifically targets high-ranking C-suite executives exclusively through physical postal mail",
      "It attempts to intercept wireless network traffic between the employee workstation and corporate access points",
      "It customizes contextual intelligence to target a specific individual or organization rather than broadcasting generic lures en masse"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Spear phishing tailors deceptive communications to a particular individual, team or organization. The researched, personalized email in this scenario fits that targeted form of phishing; not all phishing is generic bulk mail.\nOption A is incorrect. Voice attacks can also be targeted. This offered description specifies automated voice interaction, whereas the stated attack uses a personalized email.\nOption B is incorrect. Whaling targets executives via electronic communications, not physical postal mail.\nOption C is incorrect. Wireless traffic interception is a technical network attack, not social engineering.",
    "short_explanation_en": "Spear phishing uses customized contextual research to target specific individuals, unlike generic broadcast phishing.",
    "question_th": "ผู้โจมตีสืบค้นข้อมูลจนระบุตัวผู้เชี่ยวชาญฝ่ายจัดซื้อของบริษัทผลิตอุปกรณ์ป้องกันประเทศผ่านเครือข่ายสังคมวิชาชีพ จากนั้นได้ส่งอีเมลที่ระบุชื่อผู้เชี่ยวชาญโดยตรง อ้างอิงถึงโครงการยื่นข้อเสนอต่อภาครัฐ (RFP) ที่กำลังดำเนินการอยู่ และแนบไฟล์ 'Project_Alpha_Subcontractor_Bid_Amendment.pdf.exe' การโจมตีนี้แตกต่างจากการหลอกลวงทางอีเมลแบบทั่วไป (Standard Phishing) อย่างไร?",
    "options_th": [
      "ใช้ระบบตอบรับอัตโนมัติด้วยเสียงผ่านโทรศัพท์แทนที่จะส่งอีเมล",
      "มุ่งเป้าหมายเฉพาะผู้บริหารระดับสูง (C-suite) ผ่านทางไปรษณีย์แบบกระดาษเท่านั้น",
      "มุ่งดักจับทราฟฟิกเครือข่ายไร้สายระหว่างเครื่องของพนักงานกับจุดเชื่อมต่อสัญญาณภายในองค์กร",
      "มีการปรับแต่งบริบทข้อมูลให้ตรงกับบุคคลหรือองค์กรเป้าหมายเฉพาะเจาะจง แทนที่จะเป็นการส่งอีเมลหลอกลวงทั่วไปแบบเหวี่ยงแห"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: Spear phishing ปรับการสื่อสารลวงให้เข้ากับบุคคล ทีม หรือองค์กรเฉพาะ อีเมลที่สืบข้อมูลและปรับให้ตรงผู้รับในโจทย์จึงตรงกับ Phishing แบบเจาะจง ไม่ใช่ว่า Phishing ทุกชนิดต้องเป็นอีเมลหว่านแห\n- ข้อ A ไม่ถูกต้อง: การโจมตีเสียงก็เจาะจงเป้าหมายได้ แต่คำอธิบายในตัวเลือกนี้ระบุการโต้ตอบด้วยเสียงอัตโนมัติ ส่วนโจทย์เป็นอีเมลที่ปรับเฉพาะผู้รับ\n- ข้อ B ไม่ถูกต้อง: Whaling มุ่งเป้าผู้บริหารระดับสูงผ่านช่องทางอิเล็กทรอนิกส์ ไม่ใช่ไปรษณีย์กระดาษ\n- ข้อ C ไม่ถูกต้อง: การดักจับข้อมูลไร้สายเป็นการโจมตีเครือข่ายทางเทคนิค ไม่ใช่วิศวกรรมสังคม",
    "explanation_detail": {
      "correct": {
        "en": "Spear phishing tailors deceptive communications to a particular individual, team or organization. The researched, personalized email in this scenario fits that targeted form of phishing; not all phishing is generic bulk mail.",
        "th": "Spear phishing ปรับการสื่อสารลวงให้เข้ากับบุคคล ทีม หรือองค์กรเฉพาะ อีเมลที่สืบข้อมูลและปรับให้ตรงผู้รับในโจทย์จึงตรงกับ Phishing แบบเจาะจง ไม่ใช่ว่า Phishing ทุกชนิดต้องเป็นอีเมลหว่านแห"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Voice attacks can also be targeted. This offered description specifies automated voice interaction, whereas the stated attack uses a personalized email.",
          "text_th": "การโจมตีเสียงก็เจาะจงเป้าหมายได้ แต่คำอธิบายในตัวเลือกนี้ระบุการโต้ตอบด้วยเสียงอัตโนมัติ ส่วนโจทย์เป็นอีเมลที่ปรับเฉพาะผู้รับ"
        },
        {
          "letter": "B",
          "text_en": "Whaling targets executives via electronic communications, not physical postal mail.",
          "text_th": "Whaling มุ่งเป้าผู้บริหารระดับสูงผ่านช่องทางอิเล็กทรอนิกส์ ไม่ใช่ไปรษณีย์กระดาษ"
        },
        {
          "letter": "C",
          "text_en": "Wireless traffic interception is a technical network attack, not social engineering.",
          "text_th": "การดักจับข้อมูลไร้สายเป็นการโจมตีเครือข่ายทางเทคนิค ไม่ใช่วิศวกรรมสังคม"
        }
      ],
      "example": {
        "en": "An attacker researches a school accountant’s vendor contact and sends an email impersonating that vendor with an updated invoice. The researched targeting makes this spear phishing.",
        "th": "ผู้โจมตีสืบค้นคู่ค้าที่เจ้าหน้าที่บัญชีโรงเรียนติดต่อ แล้วส่งอีเมลสวมรอยคู่ค้าพร้อมใบแจ้งหนี้ที่ปรับปรุงใหม่ การสืบข้อมูลเพื่อเจาะเป้าหมายนี้เป็น Spear phishing"
      },
      "exam_tip": {
        "en": "Use the stated targeting and channel evidence. Spear phishing is personalized targeting within the broader phishing family; whaling is the senior-executive subtype.",
        "th": "ใช้หลักฐานเรื่องเป้าหมายและช่องทางตามโจทย์ Spear phishing เป็นการปรับข้อความเจาะเป้าหมายในกลุ่ม Phishing ส่วน Whaling เป็นชนิดที่เจาะผู้บริหารระดับสูง"
      }
    }
  },
  {
    "id": 642,
    "dom": 2,
    "question": "An unauthorized intruder wearing high-visibility workwear and carrying a branded clipboard arrives at an enterprise corporate office lobby. The individual approaches the receptionist, presents a counterfeit work order, and claims: 'I am here from Metro Water Authority for mandatory emergency backflow valve testing in your basement data center before city lines are flushed at noon.' Which social engineering technique is the intruder utilizing to gain physical access?",
    "options": [
      "Pretexting",
      "Piggybacking (Tailgating)",
      "Dumpster Diving",
      "Credential Stuffing"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Pretexting is a social engineering technique where an attacker invents a fabricated scenario, background story, and persona (the 'pretext')—such as an emergency utility inspector or IT technician—to manipulate victims into complying with unauthorized requests or granting physical access to restricted areas. Option B is incorrect because Piggybacking (Tailgating) involves physically following an authorized person through a secure doorway without their knowledge or without presenting credentials, rather than inventing an elaborate backstory to deceive the receptionist. Option C is incorrect because Dumpster Diving involves rummaging through trash for discarded confidential papers or media. Option D is incorrect because Credential Stuffing is an automated cyberattack testing stolen username/password pairs against online login interfaces.",
    "short_explanation_en": "Pretexting invents a fabricated identity and scenario to manipulate targets into granting access or information.",
    "question_th": "บุคคลภายนอกที่ไม่ได้รับอนุญาตสวมเสื้อกั๊กสะท้อนแสงและถือคลิปบอร์ดเดินเข้ามาในล็อบบี้สำนักงานใหญ่ของบริษัท บุคคลดังกล่าวตรงเข้าไปหาพนักงานต้อนรับ แสดงใบสั่งงานปลอม และแจ้งว่า: 'ผมมาจากสำนักงานการประปา มีคำสั่งด่วนให้มาทดสอบวาล์วน้ำในศูนย์ข้อมูลชั้นใต้ดินก่อนที่จะเริ่มล้างท่อเมืองตอนเที่ยง' บุคคลนี้กำลังใช้เทคนิควิศวกรรมสังคมข้อใดเพื่อเข้าสู่อาคาร?",
    "options_th": [
      "การสร้างเรื่องราวหลอกลวง (Pretexting)",
      "การเดินตามหลังเข้าประตูโดยไม่แตะบัตร (Piggybacking หรือ Tailgating)",
      "การคุ้ยหาข้อมูลในถังขยะ (Dumpster Diving)",
      "การสวมรอยใช้ชุดข้อมูลเข้าสู่ระบบที่รั่วไหล (Credential Stuffing)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Pretexting คือการแต่งเรื่องราว สถานการณ์ หรือสร้างตัวตนสมมติขึ้นมา (เช่น ช่างซ่อมประปา เจ้าหน้าที่ดับเพลิง หรือผู้ตรวจการ) เพื่อหลอกล่อให้เหยื่อหลงเชื่อจนยอมอนุญาตให้เข้าถึงพื้นที่หวงห้ามหรือมอบข้อมูลให้\n- ข้อ B ไม่ถูกต้อง: Piggybacking (Tailgating) คือการเดินตามหลังผู้มีสิทธิ์เข้าไปในประตูควบคุมโดยตรงโดยไม่ได้แตะบัตร ซึ่งต่างจากการแต่งเรื่องราวมาหลอกพนักงานต้อนรับ\n- ข้อ C ไม่ถูกต้อง: Dumpster Diving คือการคุ้ยหาข้อมูลความลับจากถังขยะ\n- ข้อ D ไม่ถูกต้อง: Credential Stuffing คือการนำคู่ชื่อผู้ใช้และรหัสผ่านที่รั่วไหลมาทดลองใช้กับบริการออนไลน์อื่น ไม่ใช่การสุ่มเดารหัสผ่านใหม่",
    "explanation_detail": {
      "correct": {
        "en": "Pretexting is a social engineering technique where an attacker invents a fabricated scenario, background story, and persona to manipulate victims into complying with unauthorized requests or granting access to restricted areas.",
        "th": "Pretexting คือการสร้างตัวตนและสถานการณ์สมมติขึ้นมาเพื่อหลอกล่อให้เป้าหมายหลงเชื่อและยินยอมให้เข้าถึงพื้นที่หวงห้ามหรือข้อมูลลับ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Piggybacking (Tailgating) involves physically following an authorized person through a secure door without presenting credentials.",
          "text_th": "Piggybacking (Tailgating) คือการเดินตามหลังผู้มีสิทธิ์เข้าประตูโดยไม่แตะบัตร ไม่ได้เป็นการแต่งเรื่องราวหลอกลวง"
        },
        {
          "letter": "C",
          "text_en": "Dumpster Diving involves searching through refuse containers for discarded sensitive data or media.",
          "text_th": "Dumpster Diving คือการคุ้ยถังขยะเพื่อหาเอกสารสำคัญหรือรหัสผ่าน"
        },
        {
          "letter": "D",
          "text_en": "Credential Stuffing is an automated online attack using leaked username/password databases.",
          "text_th": "Credential Stuffing คือการนำคู่ชื่อผู้ใช้และรหัสผ่านที่รั่วไหลมาทดลองใช้กับบริการออนไลน์อื่น ไม่ใช่การสุ่มเดารหัสผ่านใหม่"
        }
      ],
      "example": {
        "en": "An attacker poses as an air conditioning repair technician with fake company credentials and a work order to gain entry to a corporate server room.",
        "th": "ผู้โจมตีแกล้งทำตัวเป็นช่างแอร์พร้อมป้ายชื่อปลอมและเอกสารแจ้งซ่อมเพื่อขอให้ รปภ. เปิดประตูห้องเซิร์ฟเวอร์ให้เข้าไปทำงาน"
      },
      "exam_tip": {
        "en": "Pretexting always involves an invented scenario or false persona. Tailgating involves slipping in through a door behind someone. Both are social engineering risks to physical security.",
        "th": "Pretexting ต้องมี 'การสร้างเรื่องราว/บทบาทสมมติ' เสมอ ส่วน Tailgating คือ 'การเดินตามหลังเข้าประตู' ทั้งสองเป็นภัยคุกคามด้านความมั่นคงปลอดภัยทางกายภาพ"
      }
    }
  },
  {
    "id": 643,
    "dom": 2,
    "question": "An employee uses the same complex, 14-character passphrase for their personal online food delivery account and their corporate enterprise VPN account. Several months later, the food delivery company suffers a database breach that leaks plaintext credentials on the dark web. Shortly after, an adversary successfully logs into the employee's corporate VPN. What security awareness principle would have directly prevented this breach?",
    "options": [
      "Writing passwords on sticky notes attached beneath the keyboard to prevent memory lapses",
      "Never reusing corporate passwords across personal accounts and utilizing an approved enterprise password manager for unique credentials",
      "Mandating that employees manually change their passwords every 14 days to keep them unpredictable",
      "Sharing account passwords with trusted departmental peers to ensure continuous operational redundancy"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Password reuse across personal and corporate platforms is a primary vector for credential stuffing attacks; when a third-party site is breached, attackers use automated bots to test the exposed credentials against corporate services. Security awareness programs must educate employees never to reuse corporate passwords on external sites and to use an approved password manager to maintain unique, robust credentials for every service. Option A is incorrect because physical notes compromise confidentiality. Option C is incorrect because frequent, arbitrary password changes (e.g. every 14 days) encourage users to adopt predictable incrementing patterns, which NIST SP 800-63B advises against. Option D is incorrect because password sharing violates accountability and confidentiality principles.",
    "short_explanation_en": "Distinct passwords limit replay of a breached password across services; an approved password manager can support this practice.",
    "question_th": "พนักงานคนหนึ่งใช้รหัสผ่านชุดเดียวกัน (ความยาว 14 ตัวอักษรที่มีความซับซ้อน) สำหรับบัญชีสั่งอาหารออนไลน์ส่วนตัวและบัญชี VPN ของบริษัท หลายเดือนต่อมา บริษัทสั่งอาหารประสบเหตุข้อมูลรั่วไหลจนรหัสผ่านหลุดไปสู่ดาร์กเว็บ ไม่นานหลังจากนั้นผู้โจมตีสามารถใช้รหัสผ่านดังกล่าวล็อกอินเข้าสู่ VPN ของบริษัทได้สำเร็จ หลักการตระหนักรู้ด้านความปลอดภัยข้อใดสามารถป้องกันเหตุการณ์นี้ได้โดยตรง?",
    "options_th": [
      "การจดรหัสผ่านลงในกระดาษโน้ตแล้วติดไว้ใต้แป้นพิมพ์เพื่อป้องกันการลืม",
      "การไม่ใช้รหัสผ่านขององค์กรร่วมกับบัญชีส่วนตัว และการใช้โปรแกรมจัดการรหัสผ่านที่ได้รับอนุมัติเพื่อสร้างรหัสผ่านที่แตกต่างกันในทุกบัญชี",
      "การบังคับให้พนักงานเปลี่ยนรหัสผ่านด้วยตนเองทุกๆ 14 วันเพื่อให้คาดเดาได้ยาก",
      "การแบ่งปันรหัสผ่านบัญชีให้แก่เพื่อนร่วมงานในแผนกที่ไว้ใจได้เพื่อความต่อเนื่องในการปฏิบัติงาน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การใช้รหัสผ่านซ้ำกันระหว่างบัญชีส่วนตัวกับบัญชีองค์กรเป็นช่องโหว่สำคัญที่ทำให้เกิดการโจมตีแบบ Credential Stuffing เมื่อบริการภายนอกถูกแฮก ข้อมูลล็อกอินจะถูกนำมาทดลองเข้าสู่ระบบขององค์กรทันที การฝึกอบรมจึงต้องเน้นย้ำว่าห้ามใช้รหัสผ่านซ้ำกันเด็ดขาด และควรใช้โปรแกรมจัดการรหัสผ่าน (Password Manager) เพื่อสร้างรหัสผ่านที่ไม่ซ้ำกันในแต่ละระบบ\n- ข้อ A ไม่ถูกต้อง: การจดรหัสผ่านไว้ใต้คีย์บอร์ดทำให้ใครก็ตามที่เข้าถึงโต๊ะทำงานสามารถขโมยรหัสผ่านได้\n- ข้อ C ไม่ถูกต้อง: การบังคับเปลี่ยนรหัสผ่านบ่อยเกินไป (เช่น ทุก 14 วัน) ทำให้ผู้ใช้หันไปตั้งรหัสผ่านแบบเพิ่มตัวเลขท้ายที่เดาง่าย ซึ่งมาตรฐาน NIST SP 800-63B ไม่แนะนำ\n- ข้อ D ไม่ถูกต้อง: การแบ่งปันรหัสผ่านขัดต่อหลักความรับผิดชอบที่ตรวจสอบผู้กระทำได้ (Accountability) และความลับของข้อมูล",
    "explanation_detail": {
      "correct": {
        "en": "Password reuse across personal and corporate platforms allows credentials leaked from external breaches to be weaponized in credential stuffing attacks. Employees must maintain unique credentials for every account using approved password managers.",
        "th": "การใช้รหัสผ่านซ้ำกันทำให้ข้อมูลที่รั่วไหลจากภายนอกถูกนำมาแฮกระบบองค์กรได้ พนักงานจึงต้องไม่ใช้รหัสผ่านซ้ำและควรใช้ Password Manager สร้างรหัสผ่านที่แตกต่างกันในทุกบัญชี"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Writing passwords on physical notes creates severe physical exposure risks.",
          "text_th": "การจดรหัสผ่านใส่กระดาษโน้ตสร้างความเสี่ยงต่อการถูกแอบดูและขโมย"
        },
        {
          "letter": "C",
          "text_en": "Frequent mandatory password expirations encourage predictable patterns, which modern NIST guidelines discourage.",
          "text_th": "การบังคับเปลี่ยนรหัสผ่านบ่อยเกินไปทำให้ผู้ใช้หันไปตั้งรหัสผ่านตามรูปแบบที่คาดเดาได้ง่าย"
        },
        {
          "letter": "D",
          "text_en": "Password sharing destroys accountability and individual authentication integrity.",
          "text_th": "การแบ่งปันรหัสผ่านทำลายการตรวจสอบตัวตนและความรับผิดชอบเฉพาะบุคคล"
        }
      ],
      "example": {
        "en": "An employee uses an approved manager to generate distinct random 20-character passwords for personal social media and corporate email. A stolen password from one service then does not supply the other service’s password; other takeover paths still require controls.",
        "th": "พนักงานใช้ตัวจัดการที่อนุมัติสร้างรหัสผ่านสุ่ม 20 ตัวอักษรต่างกันสำหรับโซเชียลส่วนตัวและอีเมลบริษัท รหัสที่ขโมยจากบริการหนึ่งจึงไม่ใช่รหัสของอีกบริการ แต่ช่องทางยึดบัญชีแบบอื่นยังต้องมีมาตรการ"
      },
      "exam_tip": {
        "en": "NIST password guidance distinguishes arbitrary periodic changes from changes required on compromise and supports distinct passwords across services. A password manager can help manage those secrets.",
        "th": "แนวทางรหัสผ่านของ NIST แยกการเปลี่ยนตามรอบโดยไม่มีเหตุออกจากการเปลี่ยนเมื่อรั่ว และสนับสนุนรหัสผ่านต่างกันระหว่างบริการ ตัวจัดการรหัสผ่านช่วยดูแลความลับเหล่านี้ได้"
      }
    }
  },
  {
    "id": 644,
    "dom": 2,
    "question": "A Chief Information Security Officer (CISO) establishes a cybersecurity risk monitoring dashboard for the Board of Directors. The board specifically requests a forward-looking metric that serves as an early warning signal of increasing vulnerability exposure before an exploit or security incident occurs. Which of the following metrics BEST functions as a Key Risk Indicator (KRI)?",
    "options": [
      "The total monetary damages incurred from resolved ransomware incidents over the previous fiscal quarter",
      "The number of hours spent by the cybersecurity team conducting quarterly compliance audits last year",
      "The percentage of internet-facing server assets with critical unpatched vulnerabilities exceeding the 14-day remediation SLA",
      "The historical count of employee terminations resulting from acceptable use policy violations"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. KRIs communicate risk exposure and can be leading, current or lagging depending on use. This question specifically asks for forward-looking warning: increasing overdue critical flaws on exposed systems is the offered condition relevant to possible exploitation, not proof that compromise is imminent.\nOption A is incorrect. Past losses are historical outcomes. They can inform risk analysis, but this offered total does not directly show the current exposed condition requested here.\nOption B is incorrect. Audit hours spent measure operational effort, not forward-looking risk exposure.\nOption D is incorrect. Past administrative actions can inform analysis, but this offered count alone does not provide the forward-looking technical-exposure signal requested.",
    "short_explanation_en": "For this forward-warning objective, exposed overdue critical flaws indicate a condition to assess; KRI classification is contextual rather than universally leading.",
    "question_th": "ประธานเจ้าหน้าที่ฝ่ายความมั่นคงปลอดภัยสารสนเทศ (CISO) จัดทำแดชบอร์ดติดตามความเสี่ยงด้านไซเบอร์สำหรับคณะกรรมการบริหาร โดยคณะกรรมการขอให้เน้นตัวชี้วัดที่เป็นสัญญาณเตือนล่วงหน้า (Forward-looking metric) ซึ่งบ่งชี้ว่าระดับความเสี่ยงขององค์กรกำลังเพิ่มสูงขึ้นก่อนที่จะเกิดเหตุการณ์ความปลอดภัยจริง ตัวชี้วัดข้อใดทำหน้าที่เป็นดัชนีชี้วัดความเสี่ยงหลัก (Key Risk Indicator - KRI) ได้เหมาะสมที่สุด?",
    "options_th": [
      "มูลค่าความเสียหายทางการเงินทั้งหมดจากเหตุการณ์มัลแวร์เรียกค่าไถ่ที่ได้รับการแก้ไขแล้วในไตรมาสที่ผ่านมา",
      "จำนวนชั่วโมงการทำงานที่ทีมความมั่นคงปลอดภัยใช้ในการตรวจสอบการปฏิบัติตามกฎเกณฑ์ประจำปีที่ผ่านมา",
      "สัดส่วนของเครื่องเซิร์ฟเวอร์ที่เชื่อมต่อกับอินเทอร์เน็ตซึ่งมีช่องโหว่ระดับวิกฤตที่ยังไม่ได้รับการแพตช์เกินกว่าระยะเวลา SLA 14 วัน",
      "สถิติจำนวนพนักงานในอดีตที่ถูกเลิกจ้างอันเนื่องมาจากการละเมิดนโยบายการใช้งานระบบ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: KRI สื่อสภาวะความเสี่ยงและเป็นแบบล่วงหน้า ปัจจุบัน หรือย้อนหลังได้ตามการใช้ โจทย์นี้ขอสัญญาณเตือนมองไปข้างหน้าโดยเฉพาะ สัดส่วนช่องโหว่วิกฤตที่ค้างบนระบบเปิดรับเป็นเงื่อนไขที่เกี่ยวข้องกับโอกาสถูกใช้โจมตี ไม่ใช่หลักฐานว่าจะถูกบุกรุกทันที\n- ข้อ A ไม่ถูกต้อง: ความสูญเสียในอดีตเป็นผลย้อนหลังที่ช่วยวิเคราะห์ความเสี่ยงได้ แต่ยอดที่เสนอไม่ได้แสดงสภาวะเปิดรับปัจจุบันที่โจทย์ต้องการโดยตรง\n- ข้อ B ไม่ถูกต้อง: ชั่วโมงการตรวจประเมินเป็นตัววัดปริมาณงาน ไม่ใช่ตัวชี้วัดความเสี่ยงในอนาคต\n- ข้อ D ไม่ถูกต้อง: การดำเนินการทางบุคลากรในอดีตช่วยวิเคราะห์ได้ แต่จำนวนที่เสนอเพียงอย่างเดียวไม่ได้ให้สัญญาณการเปิดรับทางเทคนิคที่มองไปข้างหน้าตามคำถาม",
    "explanation_detail": {
      "correct": {
        "en": "KRIs communicate risk exposure and can be leading, current or lagging depending on use. This question specifically asks for forward-looking warning: increasing overdue critical flaws on exposed systems is the offered condition relevant to possible exploitation, not proof that compromise is imminent.",
        "th": "KRI สื่อสภาวะความเสี่ยงและเป็นแบบล่วงหน้า ปัจจุบัน หรือย้อนหลังได้ตามการใช้ โจทย์นี้ขอสัญญาณเตือนมองไปข้างหน้าโดยเฉพาะ สัดส่วนช่องโหว่วิกฤตที่ค้างบนระบบเปิดรับเป็นเงื่อนไขที่เกี่ยวข้องกับโอกาสถูกใช้โจมตี ไม่ใช่หลักฐานว่าจะถูกบุกรุกทันที"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Past losses are historical outcomes. They can inform risk analysis, but this offered total does not directly show the current exposed condition requested here.",
          "text_th": "ความสูญเสียในอดีตเป็นผลย้อนหลังที่ช่วยวิเคราะห์ความเสี่ยงได้ แต่ยอดที่เสนอไม่ได้แสดงสภาวะเปิดรับปัจจุบันที่โจทย์ต้องการโดยตรง"
        },
        {
          "letter": "B",
          "text_en": "Audit hours spent measure operational effort, not forward-looking risk exposure.",
          "text_th": "ชั่วโมงการตรวจประเมินเป็นตัววัดปริมาณงาน ไม่ใช่ตัวชี้วัดความเสี่ยงในอนาคต"
        },
        {
          "letter": "D",
          "text_en": "Past administrative actions can inform analysis, but this offered count alone does not provide the forward-looking technical-exposure signal requested.",
          "text_th": "การดำเนินการทางบุคลากรในอดีตช่วยวิเคราะห์ได้ แต่จำนวนที่เสนอเพียงอย่างเดียวไม่ได้ให้สัญญาณการเปิดรับทางเทคนิคที่มองไปข้างหน้าตามคำถาม"
        }
      ],
      "example": {
        "en": "An unexpected increase in failed MFA attempts can prompt investigation of a possible campaign. It is not by itself proof of credential stuffing, and legitimate changes or errors must also be considered.",
        "th": "ความพยายาม MFA ที่ล้มเหลวเพิ่มผิดปกติอาจนำไปตรวจ Campaign ที่เป็นไปได้ แต่ยังไม่พิสูจน์ว่าเป็น Credential stuffing ด้วยตัวเอง ต้องพิจารณาการเปลี่ยนแปลงที่ถูกต้องหรือข้อผิดพลาดด้วย"
      },
      "exam_tip": {
        "en": "Classify indicators by the decision they support: KPI concerns performance against objectives; KRI concerns risk exposure. Either may use historical observations; not every KRI is a leading predictor.",
        "th": "จัดประเภทตามการตัดสินใจที่สนับสนุน KPI เกี่ยวกับผลงานเทียบเป้าหมาย KRI เกี่ยวกับสภาวะความเสี่ยง ทั้งสองใช้ข้อมูลย้อนหลังได้ และ KRI ไม่จำเป็นต้องเป็นตัวทำนายล่วงหน้าทุกตัว"
      }
    }
  },
  {
    "id": 645,
    "dom": 2,
    "question": "An enterprise cybersecurity program must present security telemetry to two distinct groups: (1) the Security Operations Center (SOC) engineers who require continuous, real-time tactical visualization of active alerts and network traffic anomalies; and (2) the executive Audit & Risk Committee who require monthly comparative compliance ratings and letter grades evaluating how well individual business units adhere to corporate security policies. Which reporting mechanisms are MOST appropriate for these two respective audiences?",
    "options": [
      "A static PDF annual report for the SOC engineers, and an hourly terminal log stream for the Audit Committee",
      "An unencrypted spreadsheet for both audiences to ensure maximum manual data editing flexibility",
      "A security scorecard for the SOC engineers, and an unparsed syslog feed for the Audit Committee",
      "A real-time security dashboard for the SOC engineers, and a periodic security scorecard for the Audit Committee"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. For the stated needs, a live security dashboard supports operational monitoring and a periodic scorecard supports comparison against governance targets. These are suitable uses, not exclusive formats reserved for particular job titles.\nOption A is incorrect. Static annual reports fail frontline operational needs, and terminal logs overwhelm executive committees.\nOption B is incorrect. The offered unencrypted spreadsheets do not establish the requested live monitoring and periodic target-based reporting, and their handling needs appropriate protection. Spreadsheets are not inherently incapable of automation or live data.\nOption C is incorrect. Periodic scores alone do not supply the requested live incident view, and raw syslog alone lacks the requested governance synthesis. The issue is the decision format, not an assumption about directors’ technical literacy.",
    "short_explanation_en": "For these stated requirements, use a live operational dashboard and a periodic target-based scorecard; select formats by the decisions they support.",
    "question_th": "โปรแกรมความมั่นคงปลอดภัยขององค์กรจำเป็นต้องนำเสนอข้อมูลด้านความปลอดภัยให้แก่ผู้รับสาร 2 กลุ่มที่แตกต่างกัน ได้แก่: (1) วิศวกรประจำศูนย์ปฏิบัติการความปลอดภัย (SOC) ซึ่งต้องการดูข้อมูลเชิงปฏิบัติการแบบเรียลไทม์อย่างต่อเนื่องเกี่ยวกับแจ้งเตือนภัยคุกคามและทราฟฟิกเครือข่ายที่ผิดปกติ และ (2) คณะกรรมการตรวจสอบและบริหารความเสี่ยงระดับบริหาร ซึ่งต้องการดูรายงานประเมินผลการปฏิบัติตามนโยบายความปลอดภัยของแต่ละหน่วยธุรกิจเป็นเกรดหรือระดับคะแนนประจำเดือน รูปแบบการรายงานข้อใดเหมาะสมกับกลุ่มเป้าหมายทั้งสองกลุ่มมากที่สุด?",
    "options_th": [
      "รายงานประจำปีแบบเอกสาร PDF สำหรับวิศวกร SOC และบันทึกข้อความเทอร์มินัลรายชั่วโมงสำหรับคณะกรรมการตรวจสอบ",
      "ไฟล์สเปรดชีตที่ไม่ได้เข้ารหัสสำหรับทั้งสองกลุ่ม เพื่อให้แก้ไขข้อมูลด้วยตนเองได้อย่างคล่องตัวสูงสุด",
      "สกอร์การ์ดประเมินผลสำหรับวิศวกร SOC และกระแสข้อมูลล็อก (syslog) ที่ยังไม่ได้ประมวลผลสำหรับคณะกรรมการตรวจสอบ",
      "แดชบอร์ดแสดงผลแบบเรียลไทม์สำหรับวิศวกร SOC และสกอร์การ์ดสรุปผลการดำเนินงานเป็นงวดๆ สำหรับคณะกรรมการตรวจสอบ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: สำหรับความต้องการที่ระบุ Dashboard แบบสดช่วยเฝ้าระวังงานปฏิบัติการ และ Scorecard ตามรอบช่วยเปรียบเทียบกับเป้าหมายกำกับดูแล เป็นการใช้ที่เหมาะสม ไม่ใช่รูปแบบที่สงวนเฉพาะชื่อตำแหน่ง\n- ข้อ A ไม่ถูกต้อง: รายงานประจำปีไม่ตอบสนองงานปฏิบัติการสด และข้อมูลล็อกเทอร์มินัลไม่เหมาะกับผู้บริหาร\n- ข้อ B ไม่ถูกต้อง: สเปรดชีตที่ไม่เข้ารหัสตามตัวเลือกยังไม่แสดงว่าจะตอบการเฝ้าระวังสดและรายงานเทียบเป้าหมายตามรอบที่ต้องการ และต้องป้องกันการจัดการข้อมูลอย่างเหมาะสม ไม่ใช่ว่าสเปรดชีตทำงานอัตโนมัติหรือใช้ข้อมูลสดไม่ได้โดยธรรมชาติ\n- ข้อ C ไม่ถูกต้อง: คะแนนตามรอบเพียงอย่างเดียวไม่ให้ภาพเหตุการณ์สดที่ต้องการ และ Syslog ดิบเพียงอย่างเดียวขาดภาพสรุปกำกับดูแลที่ขอ ปัญหาคือรูปแบบเพื่อการตัดสินใจ ไม่ใช่การสมมติว่ากรรมการอ่านเทคนิคไม่เป็น",
    "explanation_detail": {
      "correct": {
        "en": "For the stated needs, a live security dashboard supports operational monitoring and a periodic scorecard supports comparison against governance targets. These are suitable uses, not exclusive formats reserved for particular job titles.",
        "th": "สำหรับความต้องการที่ระบุ Dashboard แบบสดช่วยเฝ้าระวังงานปฏิบัติการ และ Scorecard ตามรอบช่วยเปรียบเทียบกับเป้าหมายกำกับดูแล เป็นการใช้ที่เหมาะสม ไม่ใช่รูปแบบที่สงวนเฉพาะชื่อตำแหน่ง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Static annual reports fail frontline operational needs, and terminal logs overwhelm executive committees.",
          "text_th": "รายงานประจำปีไม่ตอบสนองงานปฏิบัติการสด และข้อมูลล็อกเทอร์มินัลไม่เหมาะกับผู้บริหาร"
        },
        {
          "letter": "B",
          "text_en": "The offered unencrypted spreadsheets do not establish the requested live monitoring and periodic target-based reporting, and their handling needs appropriate protection. Spreadsheets are not inherently incapable of automation or live data.",
          "text_th": "สเปรดชีตที่ไม่เข้ารหัสตามตัวเลือกยังไม่แสดงว่าจะตอบการเฝ้าระวังสดและรายงานเทียบเป้าหมายตามรอบที่ต้องการ และต้องป้องกันการจัดการข้อมูลอย่างเหมาะสม ไม่ใช่ว่าสเปรดชีตทำงานอัตโนมัติหรือใช้ข้อมูลสดไม่ได้โดยธรรมชาติ"
        },
        {
          "letter": "C",
          "text_en": "Periodic scores alone do not supply the requested live incident view, and raw syslog alone lacks the requested governance synthesis. The issue is the decision format, not an assumption about directors’ technical literacy.",
          "text_th": "คะแนนตามรอบเพียงอย่างเดียวไม่ให้ภาพเหตุการณ์สดที่ต้องการ และ Syslog ดิบเพียงอย่างเดียวขาดภาพสรุปกำกับดูแลที่ขอ ปัญหาคือรูปแบบเพื่อการตัดสินใจ ไม่ใช่การสมมติว่ากรรมการอ่านเทคนิคไม่เป็น"
        }
      ],
      "example": {
        "en": "A SIEM dashboard displays flashing real-time alerts on SOC monitors, while the CISO sends a monthly color-coded scorecard to the board showing which departments remediated vulnerabilities on time.",
        "th": "จอภาพในห้อง SOC แสดงแดชบอร์ดของระบบ SIEM แบบเรียลไทม์ ในขณะที่ CISO ส่งสกอร์การ์ดสีเขียว-เหลือง-แดงให้บอร์ดบริหารทุกสิ้นเดือนเพื่อรายงานว่าแผนกใดปิดช่องโหว่ได้ตามกำหนด"
      },
      "exam_tip": {
        "en": "In this scenario, a live dashboard fits SOC monitoring and a periodic scorecard fits target-based review. Select formats by the audience’s actual decisions, not by an exclusive job-title rule.",
        "th": "ในโจทย์นี้ Dashboard แบบสดเหมาะกับการเฝ้าระวังของ SOC และ Scorecard เป็นระยะเหมาะกับการทบทวนตามเป้าหมาย เลือกรูปแบบตามการตัดสินใจจริงของกลุ่มเป้าหมาย ไม่ใช่กฎที่ผูกตายตัวกับชื่อตำแหน่ง"
      }
    }
  },
  {
    "id": 646,
    "dom": 2,
    "question": "During a quarterly executive board meeting, the Chief Human Resources Officer highlights that '100% of employees completed the annual mandatory security awareness web module.' However, the Chief Information Security Officer (CISO) points out that employee credentials were still compromised in a recent targeted spear phishing test. To measure whether security education is genuinely producing proactive defensive behavior in daily operations, which metric should the security team track?",
    "options": [
      "The percentage and speed with which employees actively report simulated phishing emails to the security operations team using the designated reporting tool",
      "The total number of slides viewed by employees during the annual compliance training course",
      "The total number of spam emails blocked by the perimeter email filtering gateway each week",
      "The average test score achieved by employees on a multiple-choice quiz taken immediately following the training video"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Reporting rate and latency directly observe employee responses in the simulation, making A the closest measure of the requested practical behavior. A single result alone does not prove improvement, a durable culture or that training caused a change; comparable repeated observations and context are needed.\nOption B is incorrect. Slide completion numbers measure administrative compliance attendance, not operational vigilance.\nOption C is incorrect. Spam-block counts describe a technical filtering result rather than directly observing employee reporting behavior. The filtering service need not be a physical hardware appliance.\nOption D is incorrect. A multiple-choice assessment can test knowledge or judgment, but its immediate score does not directly demonstrate sustained behavior when handling messages at work.",
    "short_explanation_en": "Reporting rate and latency observe behavior in a simulation; comparable evidence is needed before claiming improvement or lasting culture change.",
    "question_th": "ในระหว่างการประชุมคณะกรรมการบริหาร ประธานเจ้าหน้าที่ฝ่ายทรัพยากรบุคคลรายงานว่า 'พนักงาน 100% ผ่านการอบรมหลักสูตรความตระหนักรู้ด้านความปลอดภัยทางออนไลน์ประจำปีครบถ้วนแล้ว' อย่างไรก็ตาม CISO ชี้แจงว่าในการทดสอบส่งอีเมลลวง (Phishing Simulation) ล่าสุด ยังคงมีรหัสผ่านของพนักงานรั่วไหล หากต้องการวัดผลว่าการอบรมสามารถสร้าง 'พฤติกรรมการป้องกันเชิงรุก' ในการทำงานจริงได้หรือไม่ ทีมความปลอดภัยควรติดตามตัวชี้วัดใด?",
    "options_th": [
      "สัดส่วนและความเร็วที่พนักงานกดรายงานอีเมลหลอกลวงจำลองไปยังทีมความมั่นคงปลอดภัยผ่านเครื่องมือแจ้งเตือนที่กำหนด",
      "จำนวนสไลด์ทั้งหมดที่พนักงานเปิดดูในระหว่างการอบรมหลักสูตรการปฏิบัติตามกฎเกณฑ์ประจำปี",
      "จำนวนอีเมลสแปมทั้งหมดที่อุปกรณ์เกตเวย์กรองอีเมลภายนอกสกัดกั้นได้ในแต่ละสัปดาห์",
      "คะแนนเฉลี่ยที่พนักงานทำได้ในแบบทดสอบปรนัยทันทีหลังจากชมวิดีโอแนะนำจบ"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: อัตราและระยะเวลารายงานสังเกตการตอบสนองของพนักงานในสถานการณ์จำลองโดยตรง จึงทำให้ A ใกล้พฤติกรรมปฏิบัติที่ถามที่สุด ผลครั้งเดียวไม่ได้พิสูจน์ว่าดีขึ้น วัฒนธรรมยั่งยืน หรือการอบรมเป็นเหตุให้เปลี่ยน ต้องมีข้อมูลซ้ำที่เทียบกันได้และบริบท\n- ข้อ B ไม่ถูกต้อง: จำนวนสไลด์ที่เปิดดูวัดได้เพียงการเข้าอบรมตามระเบียบ ไม่ได้สะท้อนการเฝ้าระวังจริง\n- ข้อ C ไม่ถูกต้อง: จำนวนสแปมที่บล็อกอธิบายผลการกรองทางเทคนิค ไม่ใช่การสังเกตพฤติกรรมรายงานของพนักงานโดยตรง และบริการกรองไม่จำเป็นต้องเป็นอุปกรณ์ Hardware\n- ข้อ D ไม่ถูกต้อง: ข้อสอบปรนัยทดสอบความรู้หรือการตัดสินใจได้ แต่คะแนนทันทีไม่ได้แสดงพฤติกรรมต่อเนื่องในการจัดการข้อความขณะทำงานโดยตรง",
    "explanation_detail": {
      "correct": {
        "en": "Reporting rate and latency directly observe employee responses in the simulation, making A the closest measure of the requested practical behavior. A single result alone does not prove improvement, a durable culture or that training caused a change; comparable repeated observations and context are needed.",
        "th": "อัตราและระยะเวลารายงานสังเกตการตอบสนองของพนักงานในสถานการณ์จำลองโดยตรง จึงทำให้ A ใกล้พฤติกรรมปฏิบัติที่ถามที่สุด ผลครั้งเดียวไม่ได้พิสูจน์ว่าดีขึ้น วัฒนธรรมยั่งยืน หรือการอบรมเป็นเหตุให้เปลี่ยน ต้องมีข้อมูลซ้ำที่เทียบกันได้และบริบท"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Slide completion numbers measure administrative compliance attendance, not operational vigilance.",
          "text_th": "จำนวนสไลด์ที่เปิดดูวัดได้เพียงการเข้าอบรมตามระเบียบ ไม่ได้สะท้อนการเฝ้าระวังจริง"
        },
        {
          "letter": "C",
          "text_en": "Spam-block counts describe a technical filtering result rather than directly observing employee reporting behavior. The filtering service need not be a physical hardware appliance.",
          "text_th": "จำนวนสแปมที่บล็อกอธิบายผลการกรองทางเทคนิค ไม่ใช่การสังเกตพฤติกรรมรายงานของพนักงานโดยตรง และบริการกรองไม่จำเป็นต้องเป็นอุปกรณ์ Hardware"
        },
        {
          "letter": "D",
          "text_en": "A multiple-choice assessment can test knowledge or judgment, but its immediate score does not directly demonstrate sustained behavior when handling messages at work.",
          "text_th": "ข้อสอบปรนัยทดสอบความรู้หรือการตัดสินใจได้ แต่คะแนนทันทีไม่ได้แสดงพฤติกรรมต่อเนื่องในการจัดการข้อความขณะทำงานโดยตรง"
        }
      ],
      "example": {
        "en": "A CISO compares reporting within ten minutes across repeated simulations with comparable populations and difficulty, checking response rates and context before describing a trend. A single percentage is not proof of improvement.",
        "th": "CISO เปรียบเทียบการรายงานภายในสิบนาทีจากการจำลองหลายครั้งที่กลุ่มและความยากเทียบกันได้ พร้อมตรวจอัตราตอบสนองและบริบทก่อนอธิบายแนวโน้ม ร้อยละครั้งเดียวไม่พิสูจน์ว่าดีขึ้น"
      },
      "exam_tip": {
        "en": "Match a measure to its intended question. Completion measures implementation; observed reporting measures behavior in the test. Both can be useful, but neither alone proves risk reduction or training causality.",
        "th": "เลือกตัววัดให้ตรงคำถาม การเรียนจบวัดการดำเนินกิจกรรม ส่วนการรายงานที่สังเกตวัดพฤติกรรมในการทดสอบ ทั้งสองมีประโยชน์ได้ แต่ไม่มีตัวใดพิสูจน์การลดความเสี่ยงหรือเหตุจากการอบรมเพียงลำพัง"
      }
    }
  },
  {
    "id": 1065,
    "dom": 2,
    "question": "A dashboard shows on-time remediation rising from 80% in June to 95% in July. June counted all critical findings due that month. July counted only critical findings that had already been closed, excluding overdue open findings. Before concluding performance improved, what should the analyst do?",
    "options": [
      "Accept the increase because both measures are percentages",
      "Average 80% and 95% to obtain the improvement rate",
      "Recalculate both months using the same due-in-month inclusion rule",
      "Compare only the absolute number of closed findings in each month"
    ],
    "correct_idx": 2,
    "explanation": "The changed denominator excludes failures in July. Comparable cohorts and definitions are needed before interpreting the trend.\n\nA: A common display unit does not make different inclusion rules comparable.\nB: Averaging the displayed percentages does not repair the changed populations.\nD: Closed counts alone still omit the due population and overdue open findings.",
    "short_explanation_en": "The changed denominator excludes failures in July. Comparable cohorts and definitions are needed before interpreting the trend.",
    "question_th": "แดชบอร์ดแสดงการแก้ไขทันกำหนดเพิ่มจาก 80% ในเดือนมิถุนายนเป็น 95% ในเดือนกรกฎาคม มิถุนายนรวมข้อค้นพบระดับวิกฤตทั้งหมดที่ครบกำหนดในเดือนนั้น แต่กรกฎาคมรวมเฉพาะข้อค้นพบระดับวิกฤตที่ปิดแล้ว โดยไม่นับรายการเปิดที่เกินกำหนด ก่อนสรุปว่าผลงานดีขึ้น นักวิเคราะห์ควรทำอะไร?",
    "options_th": [
      "ยอมรับว่าเพิ่มขึ้นเพราะทั้งสองค่าเป็นร้อยละ",
      "เฉลี่ย 80% กับ 95% เพื่อหาอัตราการปรับปรุง",
      "คำนวณทั้งสองเดือนใหม่โดยใช้เกณฑ์เดียวกัน คือรวมรายการที่ครบกำหนดในเดือนที่รายงาน",
      "เปรียบเทียบเฉพาะจำนวนข้อค้นพบที่ปิดในแต่ละเดือน"
    ],
    "explanation_th": "ตัวส่วนที่เปลี่ยนไปตัดรายการที่ไม่ผ่านออกจากกรกฎาคม ต้องใช้กลุ่มและนิยามที่เทียบเคียงกันได้ก่อนตีความแนวโน้ม\n\nA: หน่วยแสดงผลเหมือนกันไม่ได้ทำให้เกณฑ์รวมรายการที่ต่างกันเทียบเคียงกันได้\nB: การเฉลี่ยร้อยละที่แสดงไม่ได้แก้ประชากรที่วัดซึ่งเปลี่ยนไป\nD: จำนวนที่ปิดเพียงอย่างเดียวยังไม่รวมประชากรที่ครบกำหนดและรายการเปิดที่เกินกำหนด",
    "explanation_detail": {
      "correct": {
        "en": "The changed denominator excludes failures in July. Comparable cohorts and definitions are needed before interpreting the trend.",
        "th": "ตัวส่วนที่เปลี่ยนไปตัดรายการที่ไม่ผ่านออกจากกรกฎาคม ต้องใช้กลุ่มและนิยามที่เทียบเคียงกันได้ก่อนตีความแนวโน้ม"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A common display unit does not make different inclusion rules comparable.",
          "text_th": "หน่วยแสดงผลเหมือนกันไม่ได้ทำให้เกณฑ์รวมรายการที่ต่างกันเทียบเคียงกันได้"
        },
        {
          "letter": "B",
          "text_en": "Averaging the displayed percentages does not repair the changed populations.",
          "text_th": "การเฉลี่ยร้อยละที่แสดงไม่ได้แก้ประชากรที่วัดซึ่งเปลี่ยนไป"
        },
        {
          "letter": "D",
          "text_en": "Closed counts alone still omit the due population and overdue open findings.",
          "text_th": "จำนวนที่ปิดเพียงอย่างเดียวยังไม่รวมประชากรที่ครบกำหนดและรายการเปิดที่เกินกำหนด"
        }
      ]
    }
  }
];

export default questions;
