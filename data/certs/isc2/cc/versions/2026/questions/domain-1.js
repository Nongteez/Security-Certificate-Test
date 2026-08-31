/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 1: Security Principles
 * Question Count: 142
 */

const questions = [
  {
    "id": 1,
    "dom": 1,
    "question": "What is information assurance?",
    "options": [
      "A law",
      "An objective",
      "Confidentiality",
      "A technical control"
    ],
    "correct_idx": 1,
    "explanation": "Information assurance is the overarching objective of implementing security measures to protect information and systems, encompassing confidentiality, integrity, and availability.",
    "short_explanation_en": "Information assurance is the overarching objective of implementing security measures to protect information and systems, encompassing confidentiality, integrity, and availability.",
    "question_th": "Information assurance คืออะไร?",
    "options_th": [
      "กฎหมาย",
      "วัตถุประสงค์",
      "ความลับ (Confidentiality)",
      "การควบคุมทางเทคนิค"
    ],
    "explanation_th": "Information assurance คือวัตถุประสงค์โดยรวมของการนำมาตรการความปลอดภัยมาใช้เพื่อปกป้องข้อมูลและระบบ ครอบคลุมทั้งความลับ ความถูกต้อง และความพร้อมใช้งาน"
  },
  {
    "id": 2,
    "dom": 1,
    "question": "Information assurance is to provide which of the following?",
    "options": [
      "A guarantee of availability only",
      "Risk assessment",
      "A guarantee of data security",
      "None of these answers are correct."
    ],
    "correct_idx": 2,
    "explanation": "Information assurance guarantees data security broadly, not just one property like availability.",
    "short_explanation_en": "Information assurance guarantees data security broadly, not just one property like availability.",
    "question_th": "Information assurance ให้การรับประกันในข้อใด?",
    "options_th": [
      "การรับประกันเฉพาะความพร้อมใช้งานเท่านั้น",
      "การประเมินความเสี่ยง",
      "การรับประกันความปลอดภัยของข้อมูลโดยรวม",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "Information assurance รับประกันความปลอดภัยของข้อมูลอย่างครอบคลุม ไม่ใช่เพียงคุณสมบัติเดียว เช่น ความพร้อมใช้งาน"
  },
  {
    "id": 3,
    "dom": 1,
    "question": "What is confidentiality?",
    "options": [
      "Data secrecy",
      "Restricting access to data",
      "Preventing unauthorized disclosures",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Confidentiality covers data secrecy, restricting access, and preventing unauthorized disclosures — all three describe the same core concept from different angles.",
    "short_explanation_en": "Confidentiality covers data secrecy, restricting access, and preventing unauthorized disclosures — all three describe the same core concept from different angles.",
    "question_th": "Confidentiality คืออะไร?",
    "options_th": [
      "ความลับของข้อมูล",
      "การจำกัดการเข้าถึงข้อมูล",
      "การป้องกันการเปิดเผยโดยไม่ได้รับอนุญาต",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Confidentiality ครอบคลุมทั้งความลับของข้อมูล การจำกัดการเข้าถึง และการป้องกันการเปิดเผยโดยไม่ได้รับอนุญาต — ทั้งสามข้อล้วนอธิบายแนวคิดหลักเดียวกันจากมุมมองที่ต่างกัน"
  },
  {
    "id": 4,
    "dom": 1,
    "question": "What is integrity?",
    "options": [
      "Preventing data from being corrupted",
      "Not allowing unauthorized changes",
      "Tracking and logging file access",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Integrity means data hasn't been improperly altered, which covers preventing corruption, blocking unauthorized changes, and tracking access via logs.",
    "short_explanation_en": "Integrity means data hasn't been improperly altered, which covers preventing corruption, blocking unauthorized changes, and tracking access via logs.",
    "question_th": "Integrity คืออะไร?",
    "options_th": [
      "การป้องกันไม่ให้ข้อมูลถูกทำลาย",
      "การไม่อนุญาตให้มีการเปลี่ยนแปลงโดยไม่ได้รับอนุญาต",
      "การติดตามและบันทึกการเข้าถึงไฟล์",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Integrity หมายถึงข้อมูลที่ไม่ได้ถูกแก้ไขอย่างไม่เหมาะสม ซึ่งครอบคลุมการป้องกันความเสียหาย การบล็อกการเปลี่ยนแปลงที่ไม่ได้รับอนุญาต และการติดตามการเข้าถึงผ่าน log"
  },
  {
    "id": 5,
    "dom": 1,
    "question": "What is availability?",
    "options": [
      "Timely access to data",
      "Reliable functionality of information systems",
      "Uninterrupted data flows",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Availability means authorized users can reliably and promptly access data and systems whenever needed, without interruption.",
    "short_explanation_en": "Availability means authorized users can reliably and promptly access data and systems whenever needed, without interruption.",
    "question_th": "Availability คืออะไร?",
    "options_th": [
      "การเข้าถึงข้อมูลได้ทันเวลา",
      "การทำงานที่เชื่อถือได้ของระบบสารสนเทศ",
      "การไหลของข้อมูลอย่างต่อเนื่องไม่หยุดชะงัก",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Availability หมายถึงผู้ใช้ที่ได้รับอนุญาตสามารถเข้าถึงข้อมูลและระบบได้อย่างเชื่อถือได้และรวดเร็วเมื่อต้องการ โดยไม่มีการหยุดชะงัก"
  },
  {
    "id": 6,
    "dom": 1,
    "question": "Privacy is ____________________.",
    "options": [
      "A fancy name for confidentiality",
      "The control, possession, and secrecy of a person’s or group’s data",
      "A purely technical control",
      "Something made up by lawyers and politicians"
    ],
    "correct_idx": 1,
    "explanation": "Privacy concerns a person's or group's ability to control, possess, and keep their own data secret — distinct from (though related to) confidentiality.",
    "short_explanation_en": "Privacy concerns a person's or group's ability to control, possess, and keep their own data secret — distinct from (though related to) confidentiality.",
    "question_th": "Privacy คือ ____________________.",
    "options_th": [
      "ชื่อเรียกอีกอย่างของ confidentiality",
      "การควบคุม การครอบครอง และความลับของข้อมูลของบุคคลหรือกลุ่ม",
      "การควบคุมทางเทคนิคล้วน ๆ",
      "สิ่งที่ทนายความและนักการเมืองสร้างขึ้น"
    ],
    "explanation_th": "Privacy เกี่ยวข้องกับความสามารถของบุคคลหรือกลุ่มในการควบคุม ครอบครอง และรักษาความลับของข้อมูลของตนเอง ซึ่งแตกต่างจาก (แม้จะเกี่ยวข้องกับ) confidentiality"
  },
  {
    "id": 7,
    "dom": 1,
    "question": "Which of these isn’t part of one of the four canons of the ISC2 Code of Ethics?",
    "options": [
      "Maintaining a perfect track record of preventing security incidents",
      "Protecting society and the common good",
      "Protecting the profession",
      "Acting with honor and honesty"
    ],
    "correct_idx": 0,
    "explanation": "The four ISC2 Code of Ethics canons are about protecting society, protecting the profession, and acting honorably — not guaranteeing a flawless security record, which is unrealistic.",
    "short_explanation_en": "The four ISC2 Code of Ethics canons are about protecting society, protecting the profession, and acting honorably — not guaranteeing a flawless security record, which is unrealistic.",
    "question_th": "ข้อใดไม่ใช่ส่วนหนึ่งของจรรยาบรรณ (ISC)² Code of Ethics ทั้งสี่ข้อ?",
    "options_th": [
      "การรักษาสถิติที่สมบูรณ์แบบในการป้องกันเหตุการณ์ด้านความปลอดภัย",
      "การปกป้องสังคมและผลประโยชน์ส่วนรวม",
      "การปกป้องวิชาชีพ",
      "การกระทำอย่างมีเกียรติและซื่อสัตย์"
    ],
    "explanation_th": "จรรยาบรรณทั้งสี่ข้อของ ISC2 เกี่ยวกับการปกป้องสังคม การปกป้องวิชาชีพ และการกระทำอย่างมีเกียรติ — ไม่ใช่การรับประกันสถิติความปลอดภัยที่ไร้ที่ติซึ่งเป็นไปไม่ได้ในทางปฏิบัติ"
  },
  {
    "id": 8,
    "dom": 1,
    "question": "What is risk management?",
    "options": [
      "The source of rationale behind cybersecurity controls",
      "Planning for future emergencies",
      "A lot of administrative work",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Risk management underlies why controls exist, requires planning for future events, and involves significant administrative documentation and process work.",
    "short_explanation_en": "Risk management underlies why controls exist, requires planning for future events, and involves significant administrative documentation and process work.",
    "question_th": "Risk management คืออะไร?",
    "options_th": [
      "แหล่งที่มาของเหตุผลเบื้องหลังการควบคุมความปลอดภัยไซเบอร์",
      "การวางแผนสำหรับเหตุฉุกเฉินในอนาคต",
      "งานด้านการบริหารจัดการจำนวนมาก",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Risk management เป็นรากฐานว่าทำไมการควบคุมจึงมีอยู่ ต้องมีการวางแผนสำหรับเหตุการณ์ในอนาคต และเกี่ยวข้องกับงานเอกสารและกระบวนการบริหารจัดการจำนวนมาก"
  },
  {
    "id": 9,
    "dom": 1,
    "question": "Which of the following is a source of danger to information systems?",
    "options": [
      "Risk",
      "Threat",
      "Vulnerability",
      "All of these answers are correct."
    ],
    "correct_idx": 1,
    "explanation": "A threat is a potential danger or circumstance that could exploit a vulnerability and cause harm to a system.",
    "short_explanation_en": "A threat is a potential danger or circumstance that could exploit a vulnerability and cause harm to a system.",
    "question_th": "ข้อใดคือแหล่งที่มาของอันตรายต่อระบบสารสนเทศ?",
    "options_th": [
      "Risk",
      "Threat",
      "Vulnerability",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Threat คืออันตรายหรือสถานการณ์ที่อาจใช้ประโยชน์จากช่องโหว่และก่อให้เกิดความเสียหายต่อระบบ"
  },
  {
    "id": 10,
    "dom": 1,
    "question": "Which of the following is a weakness in information systems?",
    "options": [
      "Risk",
      "Threat",
      "Vulnerability",
      "All of these answers are correct."
    ],
    "correct_idx": 2,
    "explanation": "A vulnerability is a weakness or gap in a system's defenses that a threat could exploit.",
    "short_explanation_en": "A vulnerability is a weakness or gap in a system's defenses that a threat could exploit.",
    "question_th": "ข้อใดคือจุดอ่อนในระบบสารสนเทศ?",
    "options_th": [
      "Risk",
      "Threat",
      "Vulnerability",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Vulnerability คือจุดอ่อนหรือช่องโหว่ในการป้องกันของระบบที่ Threat อาจใช้ประโยชน์ได้"
  },
  {
    "id": 11,
    "dom": 1,
    "question": "Which of the following are two components to risk?",
    "options": [
      "Threat and vulnerability",
      "Treatment and assessment",
      "Priorities and tolerance",
      "Likelihood and impact"
    ],
    "correct_idx": 3,
    "explanation": "Risk is calculated from likelihood (probability a threat exploits a vulnerability) and impact (the resulting harm).",
    "short_explanation_en": "Risk is calculated from likelihood (probability a threat exploits a vulnerability) and impact (the resulting harm).",
    "question_th": "องค์ประกอบสองประการของความเสี่ยง (Risk) คืออะไร?",
    "options_th": [
      "Threat และ vulnerability",
      "Treatment และ assessment",
      "Priorities และ tolerance",
      "Likelihood และ impact"
    ],
    "explanation_th": "Risk คำนวณจาก likelihood (ความน่าจะเป็นที่ threat จะใช้ประโยชน์จาก vulnerability) และ impact (ความเสียหายที่เกิดขึ้น)"
  },
  {
    "id": 12,
    "dom": 1,
    "question": "How are risk priorities determined?",
    "options": [
      "Through the calculation of likelihood and impact",
      "Based on the analyst’s whim",
      "Based on what an organization can afford to address",
      "All risks are given equal priority"
    ],
    "correct_idx": 0,
    "explanation": "Risk priorities come from scoring each risk's likelihood and impact, then ranking them so the highest-risk items get addressed first.",
    "short_explanation_en": "Risk priorities come from scoring each risk's likelihood and impact, then ranking them so the highest-risk items get addressed first.",
    "question_th": "ลำดับความสำคัญของความเสี่ยง (Risk priorities) ถูกกำหนดอย่างไร?",
    "options_th": [
      "ผ่านการคำนวณ likelihood และ impact",
      "ตามความพอใจของนักวิเคราะห์",
      "ตามสิ่งที่องค์กรสามารถจ่ายได้เพื่อจัดการ",
      "ความเสี่ยงทั้งหมดได้รับความสำคัญเท่ากัน"
    ],
    "explanation_th": "ลำดับความสำคัญของความเสี่ยงมาจากการให้คะแนน likelihood และ impact ของแต่ละความเสี่ยง แล้วจัดลำดับเพื่อจัดการรายการที่มีความเสี่ยงสูงสุดก่อน"
  },
  {
    "id": 13,
    "dom": 1,
    "question": "What does it mean to determine the scope of a risk assessment?",
    "options": [
      "Looking at the company offices through a telescope",
      "Determining what the risk analyst has time to assess",
      "Determining whether the assessment covers one system, multiple systems, or the whole organization",
      "Risk assessments should cover every part of the organization."
    ],
    "correct_idx": 2,
    "explanation": "Scoping a risk assessment means defining its boundaries — whether it covers a single system, several systems, or the entire organization.",
    "short_explanation_en": "Scoping a risk assessment means defining its boundaries — whether it covers a single system, several systems, or the entire organization.",
    "question_th": "การกำหนดขอบเขต (Scope) ของการประเมินความเสี่ยงหมายถึงอะไร?",
    "options_th": [
      "การมองสำนักงานบริษัทผ่านกล้องส่องทางไกล",
      "การกำหนดสิ่งที่นักวิเคราะห์ความเสี่ยงมีเวลาประเมิน",
      "การกำหนดว่าการประเมินครอบคลุมระบบเดียว หลายระบบ หรือทั้งองค์กร",
      "การประเมินความเสี่ยงควรครอบคลุมทุกส่วนขององค์กร"
    ],
    "explanation_th": "การกำหนดขอบเขตของการประเมินความเสี่ยงหมายถึงการกำหนดขอบเขตของมัน — ไม่ว่าจะครอบคลุมระบบเดียว หลายระบบ หรือทั้งองค์กร"
  },
  {
    "id": 14,
    "dom": 1,
    "question": "How many steps are there in risk management?",
    "options": [
      "Three",
      "Five",
      "Six",
      "There are various models, so all these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Different risk management frameworks (NIST, ISO, etc.) define different numbers of steps, so there's no single universal count.",
    "short_explanation_en": "Different risk management frameworks (NIST, ISO, etc.) define different numbers of steps, so there's no single universal count.",
    "question_th": "การบริหารความเสี่ยง (Risk management) มีกี่ขั้นตอน?",
    "options_th": [
      "สาม",
      "ห้า",
      "หก",
      "มีหลายโมเดล ดังนั้นถูกทุกข้อ"
    ],
    "explanation_th": "กรอบการบริหารความเสี่ยงที่แตกต่างกัน (NIST, ISO ฯลฯ) กำหนดจำนวนขั้นตอนที่แตกต่างกัน จึงไม่มีจำนวนที่เป็นสากลเพียงหนึ่งเดียว"
  },
  {
    "id": 15,
    "dom": 1,
    "question": "What types of risks should be considered in a risk assessment?",
    "options": [
      "Only technical risks",
      "Only business risks",
      "Only legal and regulatory risks",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "A thorough risk assessment considers technical, business, and legal/regulatory risks together, since they all affect the organization.",
    "short_explanation_en": "A thorough risk assessment considers technical, business, and legal/regulatory risks together, since they all affect the organization.",
    "question_th": "ควรพิจารณาความเสี่ยงประเภทใดในการประเมินความเสี่ยง?",
    "options_th": [
      "เฉพาะความเสี่ยงทางเทคนิคเท่านั้น",
      "เฉพาะความเสี่ยงทางธุรกิจเท่านั้น",
      "เฉพาะความเสี่ยงทางกฎหมายและกฎระเบียบเท่านั้น",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "การประเมินความเสี่ยงที่ครอบคลุมควรพิจารณาความเสี่ยงทางเทคนิค ธุรกิจ และกฎหมาย/กฎระเบียบร่วมกัน เนื่องจากทั้งหมดส่งผลกระทบต่อองค์กร"
  },
  {
    "id": 16,
    "dom": 1,
    "question": "How should risks be identified?",
    "options": [
      "By reading industry articles, journals, and reports",
      "By evaluating the current state of the organization’s systems",
      "Using professional experience and judgment",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Risks can be identified through industry research, evaluating current systems, and applying professional judgment — all valid identification methods.",
    "short_explanation_en": "Risks can be identified through industry research, evaluating current systems, and applying professional judgment — all valid identification methods.",
    "question_th": "ควรระบุความเสี่ยงอย่างไร?",
    "options_th": [
      "โดยการอ่านบทความ วารสาร และรายงานอุตสาหกรรม",
      "โดยการประเมินสถานะปัจจุบันของระบบขององค์กร",
      "โดยใช้ประสบการณ์และวิจารณญาณทางวิชาชีพ",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "ความเสี่ยงสามารถระบุได้ผ่านการวิจัยอุตสาหกรรม การประเมินระบบปัจจุบัน และการใช้วิจารณญาณทางวิชาชีพ — ล้วนเป็นวิธีการระบุที่ถูกต้อง"
  },
  {
    "id": 17,
    "dom": 1,
    "question": "What happens in a risk assessment?",
    "options": [
      "Based on risk identification and prioritization, scoring risks, evaluating scores, and choosing a response",
      "Treating risks based on what’s best for the organization",
      "Brainstorming possible emergencies",
      "Creating large and annoying matrices"
    ],
    "correct_idx": 0,
    "explanation": "A risk assessment involves identifying and prioritizing risks, scoring them, evaluating those scores, and selecting an appropriate response.",
    "short_explanation_en": "A risk assessment involves identifying and prioritizing risks, scoring them, evaluating those scores, and selecting an appropriate response.",
    "question_th": "เกิดอะไรขึ้นในการประเมินความเสี่ยง (Risk assessment)?",
    "options_th": [
      "จากการระบุและจัดลำดับความสำคัญของความเสี่ยง การให้คะแนน การประเมินคะแนน และการเลือกการตอบสนอง",
      "การจัดการความเสี่ยงตามสิ่งที่ดีที่สุดสำหรับองค์กร",
      "การระดมความคิดเกี่ยวกับเหตุฉุกเฉินที่เป็นไปได้",
      "การสร้างเมทริกซ์ขนาดใหญ่ที่น่ารำคาญ"
    ],
    "explanation_th": "การประเมินความเสี่ยงประกอบด้วยการระบุและจัดลำดับความสำคัญของความเสี่ยง การให้คะแนน การประเมินคะแนนเหล่านั้น และการเลือกการตอบสนองที่เหมาะสม"
  },
  {
    "id": 18,
    "dom": 1,
    "question": "What are the four types of responses to risks?",
    "options": [
      "Mitigate, remediate, ameliorate, reduce",
      "Avoid, accept, reduce, transfer",
      "Deny, transfer, reduce, ignore",
      "Tolerate, treat, transfer, accept"
    ],
    "correct_idx": 1,
    "explanation": "The four standard risk responses are: avoid (eliminate the activity), accept (take no action), reduce/mitigate (lower likelihood or impact), and transfer (shift risk, e.g. via insurance).",
    "short_explanation_en": "The four standard risk responses are: avoid (eliminate the activity), accept (take no action), reduce/mitigate (lower likelihood or impact), and transfer (shift risk, e.g. via insurance).",
    "question_th": "การตอบสนองต่อความเสี่ยงสี่ประเภทคืออะไร?",
    "options_th": [
      "Mitigate, remediate, ameliorate, reduce",
      "Avoid, accept, reduce, transfer",
      "Deny, transfer, reduce, ignore",
      "Tolerate, treat, transfer, accept"
    ],
    "explanation_th": "การตอบสนองต่อความเสี่ยงมาตรฐานสี่ประเภทคือ: avoid (หลีกเลี่ยง — ยกเลิกกิจกรรม), accept (ยอมรับ — ไม่ดำเนินการ), reduce/mitigate (ลด — ลด likelihood หรือ impact) และ transfer (โอนย้าย — เช่น ผ่านการทำประกัน)"
  },
  {
    "id": 19,
    "dom": 1,
    "question": "What is risk tolerance?",
    "options": [
      "How risk-averse an organization is",
      "The measuring stick by which we choose our risk responses",
      "The result of a variety of factors, such as organization type and leadership",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "Risk tolerance reflects how much risk an organization is willing to accept, shaped by factors like industry, leadership, and organization type, and it guides which risk response is chosen.",
    "short_explanation_en": "Risk tolerance reflects how much risk an organization is willing to accept, shaped by factors like industry, leadership, and organization type, and it guides which risk response is chosen.",
    "question_th": "Risk tolerance คืออะไร?",
    "options_th": [
      "ความระมัดระวังต่อความเสี่ยงขององค์กร",
      "เกณฑ์มาตรฐานที่ใช้เลือกการตอบสนองต่อความเสี่ยง",
      "ผลลัพธ์ของปัจจัยหลากหลาย เช่น ประเภทองค์กรและผู้บริหาร",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Risk tolerance สะท้อนถึงระดับความเสี่ยงที่องค์กรเต็มใจยอมรับ ซึ่งได้รับอิทธิพลจากปัจจัยต่าง ๆ เช่น อุตสาหกรรม ผู้บริหาร และประเภทองค์กร และเป็นตัวกำหนดการตอบสนองต่อความเสี่ยงที่จะเลือก"
  },
  {
    "id": 20,
    "dom": 1,
    "question": "Which of the following is the risk that will remain after a treatment plan is implemented?",
    "options": [
      "Mitigated risk",
      "Risk tolerance",
      "Business risk",
      "Residual risk"
    ],
    "correct_idx": 3,
    "explanation": "Residual risk is what remains after controls and treatments have been applied — no treatment eliminates risk entirely.",
    "short_explanation_en": "Residual risk is what remains after controls and treatments have been applied — no treatment eliminates risk entirely.",
    "question_th": "ข้อใดคือความเสี่ยงที่จะยังคงเหลืออยู่หลังจากนำแผนการจัดการมาใช้?",
    "options_th": [
      "Mitigated risk",
      "Risk tolerance",
      "Business risk",
      "Residual risk"
    ],
    "explanation_th": "Residual risk คือความเสี่ยงที่ยังคงเหลืออยู่หลังจากมีการนำมาตรการควบคุมและการจัดการมาใช้แล้ว — ไม่มีการจัดการใดที่สามารถขจัดความเสี่ยงได้ทั้งหมด"
  },
  {
    "id": 21,
    "dom": 1,
    "question": "What are the three parts to risk treatment?",
    "options": [
      "Mapping out a plan, assigning a control owner, and regular monitoring and review",
      "Assigning ratings, assessing the organization, and regular monitoring and review",
      "Mapping out a plan, planning a meeting, and holding said meeting",
      "One part: deciding how risk will be treated"
    ],
    "correct_idx": 0,
    "explanation": "Risk treatment involves creating a plan, assigning an owner responsible for the control, and continuously monitoring and reviewing its effectiveness.",
    "short_explanation_en": "Risk treatment involves creating a plan, assigning an owner responsible for the control, and continuously monitoring and reviewing its effectiveness.",
    "question_th": "องค์ประกอบสามส่วนของการจัดการความเสี่ยง (Risk treatment) คืออะไร?",
    "options_th": [
      "การวางแผน การมอบหมายเจ้าของการควบคุม และการเฝ้าติดตามและทบทวนอย่างสม่ำเสมอ",
      "การให้คะแนน การประเมินองค์กร และการเฝ้าติดตามและทบทวนอย่างสม่ำเสมอ",
      "การวางแผน การวางแผนประชุม และการจัดประชุมดังกล่าว",
      "หนึ่งส่วนเท่านั้น: การตัดสินใจว่าจะจัดการความเสี่ยงอย่างไร"
    ],
    "explanation_th": "การจัดการความเสี่ยงเกี่ยวข้องกับการสร้างแผน การมอบหมายเจ้าของที่รับผิดชอบการควบคุม และการเฝ้าติดตามและทบทวนประสิทธิภาพอย่างต่อเนื่อง"
  },
  {
    "id": 22,
    "dom": 1,
    "question": "How are security controls related to risk management?",
    "options": [
      "They are not related.",
      "Each control addresses a risk, whether directly defined or not.",
      "They are a type of risk management.",
      "They are the defined and documented risk treatment plans."
    ],
    "correct_idx": 1,
    "explanation": "Every security control exists to address some identified risk, even if that link isn't always explicitly documented.",
    "short_explanation_en": "Every security control exists to address some identified risk, even if that link isn't always explicitly documented.",
    "question_th": "การควบคุมความปลอดภัย (Security controls) เกี่ยวข้องกับการจัดการความเสี่ยงอย่างไร?",
    "options_th": [
      "ไม่เกี่ยวข้องกัน",
      "แต่ละการควบคุมจัดการกับความเสี่ยงหนึ่งอย่าง ไม่ว่าจะถูกกำหนดไว้โดยตรงหรือไม่",
      "เป็นรูปแบบหนึ่งของการจัดการความเสี่ยง",
      "เป็นแผนการจัดการความเสี่ยงที่ถูกกำหนดและบันทึกไว้"
    ],
    "explanation_th": "การควบคุมความปลอดภัยทุกตัวมีอยู่เพื่อจัดการกับความเสี่ยงที่ระบุไว้บางอย่าง แม้ว่าความเชื่อมโยงนั้นจะไม่ได้ถูกบันทึกไว้อย่างชัดเจนเสมอไป"
  },
  {
    "id": 23,
    "dom": 1,
    "question": "What are the three types of security controls?",
    "options": [
      "Written, technical, and managerial",
      "Penetrating testing, vulnerability scanning, and cryptography",
      "Administrative, technical, and physical",
      "Risk management, access control, and network security"
    ],
    "correct_idx": 2,
    "explanation": "The three categories of security controls are administrative (policies/procedures), technical (technology-based), and physical (tangible barriers).",
    "short_explanation_en": "The three categories of security controls are administrative (policies/procedures), technical (technology-based), and physical (tangible barriers).",
    "question_th": "การควบคุมความปลอดภัยสามประเภทคืออะไร?",
    "options_th": [
      "ลายลักษณ์อักษร ทางเทคนิค และการบริหารจัดการ",
      "การทดสอบเจาะระบบ การสแกนช่องโหว่ และการเข้ารหัส",
      "การบริหาร (Administrative) ทางเทคนิค (Technical) และทางกายภาพ (Physical)",
      "การบริหารความเสี่ยง การควบคุมการเข้าถึง และความปลอดภัยเครือข่าย"
    ],
    "explanation_th": "สามประเภทของการควบคุมความปลอดภัยคือ administrative (นโยบาย/ขั้นตอน) technical (ใช้เทคโนโลยี) และ physical (สิ่งกีดขวางที่จับต้องได้)"
  },
  {
    "id": 24,
    "dom": 1,
    "question": "What is governance documentation? (Choose all that apply.)",
    "options": [
      "Unnecessary, boring things to read",
      "Documentation based on regulations and laws",
      "Part of every control in a well-developed information security program",
      "Documentation used only by the human resources department"
    ],
    "correct_idx": 1,
    "explanation": "Governance documentation is grounded in laws/regulations, is a foundational part of a mature security program, and is used organization-wide — not just by HR.",
    "short_explanation_en": "Governance documentation is grounded in laws/regulations, is a foundational part of a mature security program, and is used organization-wide — not just by HR.",
    "question_th": "เอกสารด้านการกำกับดูแล (Governance documentation) คืออะไร? (เลือกทุกข้อที่ถูกต้อง)",
    "options_th": [
      "สิ่งที่น่าเบื่อและไม่จำเป็นต้องอ่าน",
      "เอกสารที่อิงตามกฎระเบียบและกฎหมาย",
      "เป็นส่วนหนึ่งของทุกการควบคุมในโปรแกรมความปลอดภัยสารสนเทศที่พัฒนาอย่างดี",
      "เอกสารที่ใช้เฉพาะโดยฝ่ายทรัพยากรบุคคลเท่านั้น"
    ],
    "explanation_th": "เอกสารด้านการกำกับดูแลอิงตามกฎหมาย/กฎระเบียบ เป็นรากฐานของโปรแกรมความปลอดภัยที่เติบโตเต็มที่ และถูกใช้ทั่วทั้งองค์กร — ไม่ใช่เพียงโดยฝ่ายทรัพยากรบุคคล"
  },
  {
    "id": 25,
    "dom": 1,
    "question": "What is a threat in cybersecurity?",
    "options": [
      "A strategy to prevent data theft",
      "An event that leads to data destruction only",
      "Any circumstance or event with the potential to impact operations, assets, or individuals through unauthorized access, destruction, disclosure, or modification of information",
      "A way to reduce the time that it takes to investigate security issues"
    ],
    "correct_idx": 2,
    "explanation": "A threat is any circumstance or event capable of adversely impacting operations, assets, or individuals through unauthorized access, disclosure, destruction, or modification of information.",
    "short_explanation_en": "A threat is any circumstance or event capable of adversely impacting operations, assets, or individuals through unauthorized access, disclosure, destruction, or modification of information.",
    "question_th": "Threat ในบริบทความปลอดภัยไซเบอร์คืออะไร?",
    "options_th": [
      "กลยุทธ์ป้องกันการขโมยข้อมูล",
      "เหตุการณ์ที่นำไปสู่การทำลายข้อมูลเท่านั้น",
      "สถานการณ์หรือเหตุการณ์ใด ๆ ที่มีศักยภาพส่งผลกระทบต่อการดำเนินงาน ทรัพย์สิน หรือบุคคลผ่านการเข้าถึง การทำลาย การเปิดเผย หรือการดัดแปลงข้อมูลโดยไม่ได้รับอนุญาต",
      "วิธีการลดเวลาที่ใช้ในการสืบสวนปัญหาความปลอดภัย"
    ],
    "explanation_th": "Threat คือสถานการณ์หรือเหตุการณ์ใด ๆ ที่มีศักยภาพส่งผลกระทบเชิงลบต่อการดำเนินงาน ทรัพย์สิน หรือบุคคล ผ่านการเข้าถึงโดยไม่ได้รับอนุญาต การเปิดเผย การทำลาย หรือการดัดแปลงข้อมูล"
  },
  {
    "id": 26,
    "dom": 1,
    "question": "How can cybersecurity professionals prepare to defend against threats?",
    "options": [
      "By ignoring the latest news in the cybersecurity world",
      "By sharing information with peer organizations",
      "By ensuring all systems and devices have no vulnerabilities",
      "By allowing unauthorized access to information and systems"
    ],
    "correct_idx": 1,
    "explanation": "Sharing threat information with peer organizations (threat intelligence sharing) helps professionals anticipate and defend against emerging attacks.",
    "short_explanation_en": "Sharing threat information with peer organizations (threat intelligence sharing) helps professionals anticipate and defend against emerging attacks.",
    "question_th": "ผู้เชี่ยวชาญด้านความปลอดภัยไซเบอร์สามารถเตรียมตัวป้องกันภัยคุกคามได้อย่างไร?",
    "options_th": [
      "โดยการเพิกเฉยต่อข่าวล่าสุดในโลกความปลอดภัยไซเบอร์",
      "โดยการแบ่งปันข้อมูลกับองค์กรพันธมิตร",
      "โดยการรับประกันว่าระบบและอุปกรณ์ทั้งหมดไม่มีช่องโหว่",
      "โดยการอนุญาตให้เข้าถึงข้อมูลและระบบโดยไม่ได้รับอนุญาต"
    ],
    "explanation_th": "การแบ่งปันข้อมูลภัยคุกคามกับองค์กรพันธมิตร (threat intelligence sharing) ช่วยให้ผู้เชี่ยวชาญคาดการณ์และป้องกันการโจมตีที่เกิดขึ้นใหม่ได้"
  },
  {
    "id": 27,
    "dom": 1,
    "question": "What is the purpose of threat intelligence?",
    "options": [
      "To encourage data theft and destruction",
      "To help cybersecurity professionals and executives make decisions about potential threats",
      "To slow down the investigation of security issues",
      "To keep emerging technology concerns around IoT, AI, and some aspects of the cloud a secret"
    ],
    "correct_idx": 1,
    "explanation": "Threat intelligence gives cybersecurity professionals and executives the context needed to make informed decisions about which threats matter most and how to respond.",
    "short_explanation_en": "Threat intelligence gives cybersecurity professionals and executives the context needed to make informed decisions about which threats matter most and how to respond.",
    "question_th": "วัตถุประสงค์ของ threat intelligence คืออะไร?",
    "options_th": [
      "เพื่อส่งเสริมการขโมยและทำลายข้อมูล",
      "เพื่อช่วยผู้เชี่ยวชาญความปลอดภัยไซเบอร์และผู้บริหารตัดสินใจเกี่ยวกับภัยคุกคามที่อาจเกิดขึ้น",
      "เพื่อทำให้การสืบสวนปัญหาความปลอดภัยช้าลง",
      "เพื่อเก็บความกังวลด้านเทคโนโลยีใหม่ เช่น IoT, AI และคลาวด์เป็นความลับ"
    ],
    "explanation_th": "Threat intelligence ให้บริบทที่ผู้เชี่ยวชาญความปลอดภัยไซเบอร์และผู้บริหารต้องการเพื่อตัดสินใจอย่างมีข้อมูลว่าภัยคุกคามใดสำคัญที่สุดและควรตอบสนองอย่างไร"
  },
  {
    "id": 28,
    "dom": 1,
    "question": "What is ransomware?",
    "options": [
      "Code that runs on computer systems without the user’s knowledge",
      "Malicious software designed to disrupt, damage, or gain unauthorized access to a computer system",
      "Standalone, self-replicating malware that causes damage to systems",
      "Malicious software that encrypts your data to block access in exchange for a ransom payment"
    ],
    "correct_idx": 3,
    "explanation": "Ransomware specifically encrypts a victim's data and demands payment in exchange for the decryption key.",
    "short_explanation_en": "Ransomware specifically encrypts a victim's data and demands payment in exchange for the decryption key.",
    "question_th": "Ransomware คืออะไร?",
    "options_th": [
      "โค้ดที่ทำงานบนระบบคอมพิวเตอร์โดยที่ผู้ใช้ไม่รู้ตัว",
      "ซอฟต์แวร์ที่เป็นอันตรายซึ่งออกแบบมาเพื่อรบกวน ทำลาย หรือเข้าถึงระบบคอมพิวเตอร์โดยไม่ได้รับอนุญาต",
      "มัลแวร์ที่แพร่กระจายตัวเองแบบสแตนด์อโลนที่ทำให้เกิดความเสียหายต่อระบบ",
      "ซอฟต์แวร์ที่เป็นอันตรายที่เข้ารหัสข้อมูลของคุณเพื่อบล็อกการเข้าถึงจนกว่าจะจ่ายค่าไถ่"
    ],
    "explanation_th": "Ransomware เข้ารหัสข้อมูลของเหยื่อโดยเฉพาะและเรียกร้องการชำระเงินเพื่อแลกกับกุญแจถอดรหัส"
  },
  {
    "id": 29,
    "dom": 1,
    "question": "What is the main difference between viruses and worms?",
    "options": [
      "Viruses can self-replicate, while worms need a human to execute them on a system.",
      "Viruses spread through the Internet, while worms spread through LANs.",
      "Viruses are malware that slows down systems, while worms cause extensive damage to systems.",
      "Viruses need human interaction to be successful, while worms can selfreplicate and spread without human interaction."
    ],
    "correct_idx": 3,
    "explanation": "Viruses require a human to execute an infected file or program to spread, while worms can self-replicate and propagate across networks without any human action.",
    "short_explanation_en": "Viruses require a human to execute an infected file or program to spread, while worms can self-replicate and propagate across networks without any human action.",
    "question_th": "ความแตกต่างหลักระหว่างไวรัสและเวิร์ม (Viruses และ Worms) คืออะไร?",
    "options_th": [
      "ไวรัสสามารถแพร่กระจายตัวเองได้ ในขณะที่เวิร์มต้องอาศัยมนุษย์ในการรัน",
      "ไวรัสแพร่กระจายผ่านอินเทอร์เน็ต ในขณะที่เวิร์มแพร่กระจายผ่าน LAN",
      "ไวรัสคือมัลแวร์ที่ทำให้ระบบช้าลง ในขณะที่เวิร์มก่อให้เกิดความเสียหายอย่างมากต่อระบบ",
      "ไวรัสต้องการปฏิสัมพันธ์จากมนุษย์ในการทำงาน ในขณะที่เวิร์มสามารถแพร่กระจายตัวเองได้โดยไม่ต้องมีปฏิสัมพันธ์จากมนุษย์"
    ],
    "explanation_th": "ไวรัสต้องการให้มนุษย์รันไฟล์หรือโปรแกรมที่ติดเชื้อเพื่อแพร่กระจาย ในขณะที่เวิร์มสามารถแพร่กระจายตัวเองและกระจายไปทั่วเครือข่ายได้โดยไม่ต้องมีการกระทำใด ๆ จากมนุษย์"
  },
  {
    "id": 30,
    "dom": 1,
    "question": "What is the main difference between a DDoS attack and a regular DoS attack?",
    "options": [
      "A DDoS attack floods a system with traffic to multiple compromised devices, while a regular DoS attack floods one system with traffic to exhaust resources.",
      "A DDoS attack targets routers, switches, and servers, while a regular DoS attack targets individual devices.",
      "A DDoS attack alters data between communicating parties, while a regular DoS attack intercepts data between communicating parties.",
      "A DDoS attack requires physical access to a system, while a DoS attack is executed remotely."
    ],
    "correct_idx": 0,
    "explanation": "A DDoS attack uses many compromised devices (a botnet) to flood a target, while a standard DoS attack comes from a single source overwhelming the target's resources.",
    "short_explanation_en": "A DDoS attack uses many compromised devices (a botnet) to flood a target, while a standard DoS attack comes from a single source overwhelming the target's resources.",
    "question_th": "ความแตกต่างหลักระหว่างการโจมตีแบบ DDoS และ DoS ปกติคืออะไร?",
    "options_th": [
      "การโจมตีแบบ DDoS ท่วมระบบด้วยทราฟฟิกจากอุปกรณ์ที่ถูกบุกรุกหลายเครื่อง ในขณะที่ DoS ปกติท่วมระบบเดียวด้วยทราฟฟิกเพื่อทำให้ทรัพยากรหมด",
      "DDoS โจมตีเราเตอร์ สวิตช์ และเซิร์ฟเวอร์ ในขณะที่ DoS ปกติโจมตีอุปกรณ์แต่ละเครื่อง",
      "DDoS เปลี่ยนแปลงข้อมูลระหว่างคู่สื่อสาร ในขณะที่ DoS ปกติดักจับข้อมูลระหว่างคู่สื่อสาร",
      "DDoS ต้องการการเข้าถึงทางกายภาพต่อระบบ ในขณะที่ DoS ถูกดำเนินการจากระยะไกล"
    ],
    "explanation_th": "การโจมตีแบบ DDoS ใช้อุปกรณ์ที่ถูกบุกรุกจำนวนมาก (botnet) เพื่อท่วมเป้าหมาย ในขณะที่ DoS มาตรฐานมาจากแหล่งเดียวที่ท่วมทรัพยากรของเป้าหมาย"
  },
  {
    "id": 31,
    "dom": 1,
    "question": "Where are man-in-the-middle (MITM) attacks typically executed?",
    "options": [
      "Secure and encrypted networks",
      "Government organizations and military networks",
      "In places with insecure Wi-Fi, such as coffee shops or hotels",
      "Internal networks within an organization"
    ],
    "correct_idx": 2,
    "explanation": "MITM attacks are especially common on insecure public Wi-Fi (cafes, hotels, airports) where attackers can intercept traffic between a victim and the network.",
    "short_explanation_en": "MITM attacks are especially common on insecure public Wi-Fi (cafes, hotels, airports) where attackers can intercept traffic between a victim and the network.",
    "question_th": "การโจมตีแบบ man-in-the-middle (MITM) มักถูกดำเนินการที่ใด?",
    "options_th": [
      "เครือข่ายที่ปลอดภัยและเข้ารหัส",
      "องค์กรภาครัฐและเครือข่ายทางทหาร",
      "สถานที่ที่มี Wi-Fi ที่ไม่ปลอดภัย เช่น ร้านกาแฟหรือโรงแรม",
      "เครือข่ายภายในองค์กร"
    ],
    "explanation_th": "การโจมตีแบบ MITM พบได้บ่อยเป็นพิเศษบน Wi-Fi สาธารณะที่ไม่ปลอดภัย (ร้านกาแฟ โรงแรม สนามบิน) ซึ่งผู้โจมตีสามารถดักจับทราฟฟิกระหว่างเหยื่อและเครือข่ายได้"
  },
  {
    "id": 32,
    "dom": 1,
    "question": "How do side-channel attacks exploit system vulnerabilities?",
    "options": [
      "By intercepting and altering data between communicating parties",
      "By flooding a system with traffic through coordinated efforts",
      "By analyzing unintended information leaked by a system’s physical implementation",
      "By gaining physical access to a system’s hardware components"
    ],
    "correct_idx": 2,
    "explanation": "Side-channel attacks extract sensitive information from unintended physical leakage — such as power consumption, timing, or electromagnetic emissions — rather than exploiting software flaws directly.",
    "short_explanation_en": "Side-channel attacks extract sensitive information from unintended physical leakage — such as power consumption, timing, or electromagnetic emissions — rather than exploiting software flaws directly.",
    "question_th": "การโจมตีแบบ Side-channel ใช้ประโยชน์จากช่องโหว่ของระบบอย่างไร?",
    "options_th": [
      "โดยการดักจับและเปลี่ยนแปลงข้อมูลระหว่างคู่สื่อสาร",
      "โดยการท่วมระบบด้วยทราฟฟิกผ่านความพยายามที่ประสานงานกัน",
      "โดยการวิเคราะห์ข้อมูลที่รั่วไหลโดยไม่ตั้งใจจากการติดตั้งทางกายภาพของระบบ",
      "โดยการเข้าถึงทางกายภาพต่อส่วนประกอบฮาร์ดแวร์ของระบบ"
    ],
    "explanation_th": "การโจมตีแบบ Side-channel ดึงข้อมูลที่อ่อนไหวจากการรั่วไหลทางกายภาพที่ไม่ได้ตั้งใจ เช่น การใช้พลังงาน จังหวะเวลา หรือคลื่นแม่เหล็กไฟฟ้า มากกว่าการใช้ประโยชน์จากข้อบกพร่องซอฟต์แวร์โดยตรง"
  },
  {
    "id": 33,
    "dom": 1,
    "question": "What are the two categories of firewalls?",
    "options": [
      "Stateful and stateless",
      "Network-based and host-based",
      "Proxy and packet filtering",
      "Next-generation and web application"
    ],
    "correct_idx": 1,
    "explanation": "Firewalls are broadly categorized as network-based (protecting an entire network segment) or host-based (protecting an individual device).",
    "short_explanation_en": "Firewalls are broadly categorized as network-based (protecting an entire network segment) or host-based (protecting an individual device).",
    "question_th": "สองประเภทของไฟร์วอลล์คืออะไร?",
    "options_th": [
      "Stateful และ stateless",
      "Network-based และ host-based",
      "Proxy และ packet filtering",
      "Next-generation และ web application"
    ],
    "explanation_th": "ไฟร์วอลล์ถูกจัดประเภทโดยทั่วไปเป็น network-based (ปกป้องส่วนเครือข่ายทั้งหมด) หรือ host-based (ปกป้องอุปกรณ์แต่ละเครื่อง)"
  },
  {
    "id": 34,
    "dom": 1,
    "question": "What is the main difference between packet filtering firewalls and web application firewalls?",
    "options": [
      "Packet filtering firewalls inspect data packets based on payload content, while web application firewalls monitor IP information.",
      "Packet filtering firewalls authenticate clients and forward requests to servers, while web application firewalls authenticate servers and forward requests to clients.",
      "Packet filtering firewalls analyze surface-level data such as IP addresses and ports, while web application firewalls inspect HTTP traffic and protect against web-based attacks.",
      "Packet filtering firewalls utilize machine learning and behavior analytics, while web application firewalls conduct deep packet inspection."
    ],
    "correct_idx": 2,
    "explanation": "Packet filtering firewalls inspect basic surface-level data like IP addresses and ports, while web application firewalls go deeper, inspecting HTTP traffic to catch web-specific attacks like SQL injection or XSS.",
    "short_explanation_en": "Packet filtering firewalls inspect basic surface-level data like IP addresses and ports, while web application firewalls go deeper, inspecting HTTP traffic to catch web-specific attacks like SQL injection or XSS.",
    "question_th": "ความแตกต่างหลักระหว่าง packet filtering firewalls และ web application firewalls คืออะไร?",
    "options_th": [
      "Packet filtering firewalls ตรวจสอบแพ็กเก็ตข้อมูลตามเนื้อหา payload ในขณะที่ web application firewalls เฝ้าติดตามข้อมูล IP",
      "Packet filtering firewalls ยืนยันตัวตนไคลเอนต์และส่งต่อคำขอไปยังเซิร์ฟเวอร์ ในขณะที่ web application firewalls ยืนยันตัวตนเซิร์ฟเวอร์และส่งต่อคำขอไปยังไคลเอนต์",
      "Packet filtering firewalls วิเคราะห์ข้อมูลระดับพื้นผิว เช่น IP address และพอร์ต ในขณะที่ web application firewalls ตรวจสอบทราฟฟิก HTTP และป้องกันการโจมตีบนเว็บ",
      "Packet filtering firewalls ใช้ machine learning และการวิเคราะห์พฤติกรรม ในขณะที่ web application firewalls ทำการตรวจสอบแพ็กเก็ตเชิงลึก"
    ],
    "explanation_th": "Packet filtering firewalls ตรวจสอบข้อมูลระดับพื้นผิวพื้นฐาน เช่น IP address และพอร์ต ในขณะที่ web application firewalls ตรวจสอบลึกกว่า โดยตรวจสอบทราฟฟิก HTTP เพื่อจับการโจมตีเฉพาะเว็บ เช่น SQL injection หรือ XSS"
  },
  {
    "id": 35,
    "dom": 1,
    "question": "What is the purpose of vulnerability scanning in cybersecurity?",
    "options": [
      "To exploit vulnerabilities found in an organization’s environment",
      "To analyze behaviors on specific endpoints and respond to issues",
      "To determine what vulnerabilities an organization has, to prioritize remediation efforts, and to track progress",
      "To apply patches to software to fix vulnerabilities"
    ],
    "correct_idx": 2,
    "explanation": "Vulnerability scanning identifies what weaknesses exist in an environment so teams can prioritize remediation and track progress over time — it does not exploit them.",
    "short_explanation_en": "Vulnerability scanning identifies what weaknesses exist in an environment so teams can prioritize remediation and track progress over time — it does not exploit them.",
    "question_th": "วัตถุประสงค์ของการสแกนช่องโหว่ (Vulnerability scanning) ในความปลอดภัยไซเบอร์คืออะไร?",
    "options_th": [
      "เพื่อใช้ประโยชน์จากช่องโหว่ที่พบในสภาพแวดล้อมขององค์กร",
      "เพื่อวิเคราะห์พฤติกรรมบน endpoint เฉพาะและตอบสนองต่อปัญหา",
      "เพื่อกำหนดว่าองค์กรมีช่องโหว่ใด เพื่อจัดลำดับความสำคัญในการแก้ไข และเพื่อติดตามความคืบหน้า",
      "เพื่อนำแพตช์มาใช้กับซอฟต์แวร์เพื่อแก้ไขช่องโหว่"
    ],
    "explanation_th": "การสแกนช่องโหว่ระบุจุดอ่อนที่มีอยู่ในสภาพแวดล้อม เพื่อให้ทีมงานสามารถจัดลำดับความสำคัญในการแก้ไขและติดตามความคืบหน้าเมื่อเวลาผ่านไป — ไม่ใช้ประโยชน์จากช่องโหว่เหล่านั้น"
  },
  {
    "id": 36,
    "dom": 1,
    "question": "What is the difference between vulnerability scanning and pentesting?",
    "options": [
      "Vulnerability scanning is used to exploit vulnerabilities, while pentesting analyzes behaviors on specific endpoints.",
      "Vulnerability scanning doesn’t exploit the vulnerabilities, while pentesting aims to find and exploit vulnerabilities.",
      "Vulnerability scanning allows teams to test incident response and detection processes, while pentesting prioritizes remediation efforts.",
      "Vulnerability scanning gives a continuous look at what is going on in an organization, while pentesting is conducted with open-source tools."
    ],
    "correct_idx": 1,
    "explanation": "Vulnerability scanning only identifies weaknesses without exploiting them, while penetration testing actively attempts to exploit vulnerabilities to prove real-world impact.",
    "short_explanation_en": "Vulnerability scanning only identifies weaknesses without exploiting them, while penetration testing actively attempts to exploit vulnerabilities to prove real-world impact.",
    "question_th": "ความแตกต่างระหว่างการสแกนช่องโหว่และการทดสอบเจาะระบบ (Pentesting) คืออะไร?",
    "options_th": [
      "การสแกนช่องโหว่ใช้เพื่อใช้ประโยชน์จากช่องโหว่ ในขณะที่ pentesting วิเคราะห์พฤติกรรมบน endpoint เฉพาะ",
      "การสแกนช่องโหว่ไม่ใช้ประโยชน์จากช่องโหว่ ในขณะที่ pentesting มุ่งค้นหาและใช้ประโยชน์จากช่องโหว่",
      "การสแกนช่องโหว่ช่วยให้ทีมทดสอบกระบวนการตอบสนองต่อเหตุการณ์และการตรวจจับ ในขณะที่ pentesting จัดลำดับความสำคัญในการแก้ไข",
      "การสแกนช่องโหว่ให้มุมมองต่อเนื่องของสิ่งที่เกิดขึ้นในองค์กร ในขณะที่ pentesting ดำเนินการด้วยเครื่องมือโอเพนซอร์ส"
    ],
    "explanation_th": "การสแกนช่องโหว่ระบุจุดอ่อนโดยไม่ใช้ประโยชน์จากมัน ในขณะที่การทดสอบเจาะระบบพยายามใช้ประโยชน์จากช่องโหว่เหล่านั้นอย่างแข็งขันเพื่อพิสูจน์ผลกระทบในโลกจริง"
  },
  {
    "id": 37,
    "dom": 1,
    "question": "What is the purpose of regularly updating and patching systems in cybersecurity?",
    "options": [
      "To analyze behaviors on specific endpoints and respond to issues",
      "To detect and protect against threats using predictive analytics",
      "To gain unauthorized access to systems and data",
      "To apply security fixes for vulnerabilities found in the software"
    ],
    "correct_idx": 3,
    "explanation": "Patching and updating systems closes known security gaps in software, directly fixing the vulnerabilities that attackers could otherwise exploit.",
    "short_explanation_en": "Patching and updating systems closes known security gaps in software, directly fixing the vulnerabilities that attackers could otherwise exploit.",
    "question_th": "วัตถุประสงค์ของการอัปเดตและแพตช์ระบบอย่างสม่ำเสมอในความปลอดภัยไซเบอร์คืออะไร?",
    "options_th": [
      "เพื่อวิเคราะห์พฤติกรรมบน endpoint เฉพาะและตอบสนองต่อปัญหา",
      "เพื่อตรวจจับและป้องกันภัยคุกคามโดยใช้การวิเคราะห์เชิงคาดการณ์",
      "เพื่อเข้าถึงระบบและข้อมูลโดยไม่ได้รับอนุญาต",
      "เพื่อนำการแก้ไขความปลอดภัยมาใช้สำหรับช่องโหว่ที่พบในซอฟต์แวร์"
    ],
    "explanation_th": "การแพตช์และอัปเดตระบบปิดช่องโหว่ความปลอดภัยที่ทราบแล้วในซอฟต์แวร์ โดยแก้ไขช่องโหว่ที่ผู้โจมตีอาจใช้ประโยชน์ได้โดยตรง"
  },
  {
    "id": 120,
    "dom": 1,
    "question": "A cyberattacker changes the website of a pharmacy so it displays incorrect information about COVID testing. This is an example of what kind of compromise?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Nonrepudiation"
    ],
    "correct_idx": 1,
    "explanation": "Changing data without proper authorization is a compromise of integrity.",
    "short_explanation_en": "Changing data without proper authorization is a compromise of integrity.",
    "question_th": "ผู้โจมตีทางไซเบอร์แก้ไขเว็บไซต์ของร้านขายยาให้แสดงข้อมูลที่ไม่ถูกต้องเกี่ยวกับการตรวจ COVID นี่เป็นตัวอย่างของการถูกบุกรุกประเภทใด?",
    "options_th": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Nonrepudiation"
    ],
    "explanation_th": "การเปลี่ยนแปลงข้อมูลโดยไม่ได้รับอนุญาตอย่างเหมาะสมเป็นการถูกบุกรุกด้าน Integrity"
  },
  {
    "id": 121,
    "dom": 1,
    "question": "The function of a computer system that verifies the identity of a user is called _________.",
    "options": [
      "Authentication",
      "Authorization",
      "Authenticity",
      "Availability"
    ],
    "correct_idx": 0,
    "explanation": "Authentication is the function of verifying a user’s identity.",
    "short_explanation_en": "Authentication is the function of verifying a user’s identity.",
    "question_th": "ฟังก์ชันของระบบคอมพิวเตอร์ที่ตรวจสอบยืนยันตัวตนของผู้ใช้เรียกว่า _________.",
    "options_th": [
      "Authentication",
      "Authorization",
      "Authenticity",
      "Availability"
    ],
    "explanation_th": "Authentication คือฟังก์ชันของการตรวจสอบยืนยันตัวตนของผู้ใช้"
  },
  {
    "id": 122,
    "dom": 1,
    "question": "Jane received an electronic message from Fred that was digitally signed proving it came from him. However, Fred said he never sent it. This is an example of what message integrity characteristic?",
    "options": [
      "Nonreputation",
      "Nonrefutability",
      "Nonrepudiation",
      "Authenticity"
    ],
    "correct_idx": 2,
    "explanation": "Nonrepudiation technologies are used to guarantee that a sender of a message cannot later deny that they sent the message.",
    "short_explanation_en": "Nonrepudiation technologies are used to guarantee that a sender of a message cannot later deny that they sent the message.",
    "question_th": "เจนได้รับข้อความอิเล็กทรอนิกส์จากเฟร็ดที่ลงลายเซ็นดิจิทัลซึ่งพิสูจน์ว่ามาจากเขา อย่างไรก็ตาม เฟร็ดบอกว่าเขาไม่เคยส่งข้อความนั้น นี่เป็นตัวอย่างของคุณสมบัติความถูกต้องครบถ้วนของข้อความ (Message integrity) ประเภทใด?",
    "options_th": [
      "Nonreputation",
      "Nonrefutability",
      "Nonrepudiation",
      "Authenticity"
    ],
    "explanation_th": "เทคโนโลยี Nonrepudiation ถูกใช้เพื่อรับประกันว่าผู้ส่งข้อความไม่สามารถปฏิเสธในภายหลังว่าตนได้ส่งข้อความนั้น"
  },
  {
    "id": 123,
    "dom": 1,
    "question": "Which of the following elements do not apply to privacy?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "None of the above"
    ],
    "correct_idx": 3,
    "explanation": "All of the items listed apply to privacy.",
    "short_explanation_en": "All of the items listed apply to privacy.",
    "question_th": "องค์ประกอบใดต่อไปนี้ไม่เกี่ยวข้องกับความเป็นส่วนตัว (Privacy)?",
    "options_th": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "รายการทั้งหมดที่ระบุล้วนเกี่ยวข้องกับความเป็นส่วนตัว"
  },
  {
    "id": 124,
    "dom": 1,
    "question": "Information assurance refers to the ____________ of information security.",
    "options": [
      "Quality",
      "Confidentiality",
      "Ethics",
      "Measurement"
    ],
    "correct_idx": 3,
    "explanation": "Information assurance is the measurement of the security controls an organization has put into place.",
    "short_explanation_en": "Information assurance is the measurement of the security controls an organization has put into place.",
    "question_th": "Information assurance หมายถึง ____________ ของความปลอดภัยสารสนเทศ",
    "options_th": [
      "คุณภาพ",
      "ความลับ",
      "จริยธรรม",
      "การวัดผล"
    ],
    "explanation_th": "Information assurance คือการวัดผลของการควบคุมความปลอดภัยที่องค์กรได้นำมาใช้"
  },
  {
    "id": 125,
    "dom": 1,
    "question": "What is the first thing a cyberattacker would want to do to launch an attack against an organization?",
    "options": [
      "Learn about the organization’s vulnerabilities.",
      "Learn about the organization’s business, including domain names, corporate information, facilities, names of employees, etc.",
      "Deploy malware.",
      "Steal data."
    ],
    "correct_idx": 1,
    "explanation": "While learning about vulnerabilities might seem like a good answer, the best answer is learning about the organization’s business details because that will provide the basic information the cyberattacker can use to launch the attack.",
    "short_explanation_en": "While learning about vulnerabilities might seem like a good answer, the best answer is learning about the organization’s business details because that will provide the basic information the cyberattacker can use to launch the attack.",
    "question_th": "สิ่งแรกที่ผู้โจมตีทางไซเบอร์ต้องการทำเพื่อเริ่มการโจมตีต่อองค์กรคืออะไร?",
    "options_th": [
      "เรียนรู้เกี่ยวกับช่องโหว่ขององค์กร",
      "เรียนรู้เกี่ยวกับธุรกิจขององค์กร รวมถึงชื่อโดเมน ข้อมูลบริษัท สถานที่ ชื่อพนักงาน ฯลฯ",
      "ติดตั้งมัลแวร์",
      "ขโมยข้อมูล"
    ],
    "explanation_th": "แม้การเรียนรู้เกี่ยวกับช่องโหว่จะดูเหมือนคำตอบที่ดี แต่คำตอบที่ดีที่สุดคือการเรียนรู้รายละเอียดธุรกิจขององค์กร เพราะจะให้ข้อมูลพื้นฐานที่ผู้โจมตีสามารถใช้เพื่อเริ่มการโจมตีได้"
  },
  {
    "id": 126,
    "dom": 1,
    "question": "Which of the following statements is most correct?",
    "options": [
      "Security should be done the same way regardless of the situation.",
      "Security should be tailored based on the situation.",
      "It’s always best to mitigate risks rather than transfer them.",
      "Risk avoidance trumps security controls every time."
    ],
    "correct_idx": 1,
    "explanation": "Answers A, C, and D all contain absolute statements about applying security. But security is never absolute; it is tailored based on the situation and the organization’s tolerance for risk, so the best answer is B.",
    "short_explanation_en": "Answers A, C, and D all contain absolute statements about applying security.",
    "question_th": "ข้อความใดถูกต้องที่สุด?",
    "options_th": [
      "ความปลอดภัยควรทำในลักษณะเดียวกันโดยไม่คำนึงถึงสถานการณ์",
      "ความปลอดภัยควรปรับให้เหมาะสมตามสถานการณ์",
      "การลดความเสี่ยงดีกว่าการโอนความเสี่ยงเสมอ",
      "การหลีกเลี่ยงความเสี่ยงสำคัญกว่าการควบคุมความปลอดภัยเสมอ"
    ],
    "explanation_th": "คำตอบ A, C และ D ล้วนมีข้อความสัมบูรณ์เกี่ยวกับการประยุกต์ใช้ความปลอดภัย แต่ความปลอดภัยไม่เคยเป็นสัมบูรณ์ มันถูกปรับให้เหมาะสมตามสถานการณ์และระดับความเสี่ยงที่องค์กรยอมรับได้ ดังนั้นคำตอบที่ดีที่สุดคือ B"
  },
  {
    "id": 127,
    "dom": 1,
    "question": "You are asked to perform a risk assessment of an information system for the purpose of recommending the most appropriate security controls. You have a short amount of time to do this. You have information about how each asset in the system is used and its importance to the business, but you have no financial information about the assets or the information systems. Which is the most appropriate method to use for this assessment?",
    "options": [
      "Qualitative",
      "Threat modeling",
      "Quantitative",
      "Delphi"
    ],
    "correct_idx": 0,
    "explanation": "Since you have no financial data, a quantitative assessment is not possible, but since you have information about how each asset in the system is used and its importance to the business, you have what you need to do a qualitative analysis.",
    "short_explanation_en": "Since you have no financial data, a quantitative assessment is not possible, but since you have information about how each asset in the system is used and its importance to the business, you have what you need to do a qualitative analysis.",
    "question_th": "คุณถูกขอให้ทำการประเมินความเสี่ยงของระบบสารสนเทศเพื่อวัตถุประสงค์ในการแนะนำการควบคุมความปลอดภัยที่เหมาะสมที่สุด คุณมีเวลาสั้น ๆ ในการทำสิ่งนี้ คุณมีข้อมูลเกี่ยวกับวิธีที่แต่ละทรัพย์สินในระบบถูกใช้งานและความสำคัญต่อธุรกิจ แต่คุณไม่มีข้อมูลทางการเงินเกี่ยวกับทรัพย์สินหรือระบบสารสนเทศ วิธีใดเหมาะสมที่สุดสำหรับการประเมินนี้?",
    "options_th": [
      "Qualitative",
      "Threat modeling",
      "Quantitative",
      "Delphi"
    ],
    "explanation_th": "เนื่องจากคุณไม่มีข้อมูลทางการเงิน การประเมินแบบ quantitative จึงเป็นไปไม่ได้ แต่เนื่องจากคุณมีข้อมูลเกี่ยวกับวิธีที่แต่ละทรัพย์สินถูกใช้งานและความสำคัญต่อธุรกิจ คุณจึงมีสิ่งที่จำเป็นสำหรับการวิเคราะห์แบบ qualitative"
  },
  {
    "id": 128,
    "dom": 1,
    "question": "You are asked to implement a risk treatment in which your IT department is removing a server from the environment that it deems is too risky due to having too many vulnerabilities in it. You have just practiced which type of risk treatment?",
    "options": [
      "Risk transfer",
      "Risk avoidance",
      "Risk acceptance",
      "Risk mitigation"
    ],
    "correct_idx": 2,
    "explanation": "Risk avoidance is the best answer because by removing the risky server altogether, you are avoiding the risk. Answer D may have been considered because vulnerability mitigation is a type of risk treatment, but that usually involves addressing specific vulnerabilities, not removing entire systems or services.",
    "short_explanation_en": "Risk avoidance is the best answer because by removing the risky server altogether, you are avoiding the risk.",
    "question_th": "คุณถูกขอให้นำการจัดการความเสี่ยง (Risk treatment) มาใช้ โดยฝ่าย IT ของคุณกำลังนำเซิร์ฟเวอร์ออกจากสภาพแวดล้อมเพราะเห็นว่ามีความเสี่ยงสูงเกินไปเนื่องจากมีช่องโหว่จำนวนมาก คุณเพิ่งปฏิบัติตามการจัดการความเสี่ยงประเภทใด?",
    "options_th": [
      "Risk transfer",
      "Risk avoidance",
      "Risk acceptance",
      "Risk mitigation"
    ],
    "explanation_th": "Risk avoidance คือคำตอบที่ดีที่สุด เพราะการนำเซิร์ฟเวอร์ที่มีความเสี่ยงออกทั้งหมด คือการหลีกเลี่ยงความเสี่ยง คำตอบ D อาจถูกพิจารณาเพราะการลดช่องโหว่เป็นประเภทหนึ่งของการจัดการความเสี่ยง แต่โดยปกติเกี่ยวข้องกับการแก้ไขช่องโหว่เฉพาะ ไม่ใช่การนำระบบหรือบริการทั้งหมดออก"
  },
  {
    "id": 129,
    "dom": 1,
    "question": "A security engineer is performing a review of an organization’s datacenter security controls. They document that the datacenter lacks security cameras for monitoring the facilities. What type of control does this represent?",
    "options": [
      "Administrative",
      "Technical",
      "Physical",
      "Logical"
    ],
    "correct_idx": 2,
    "explanation": "Security cameras used for monitoring facilities are an example of physical security controls. Administrative controls are managementoriented controls such as documentation, policies, procedures, and training. Technical or logical controls are hardware or software components implemented by computer systems or network devices.",
    "short_explanation_en": "Security cameras used for monitoring facilities are an example of physical security controls.",
    "question_th": "วิศวกรความปลอดภัยกำลังทบทวนการควบคุมความปลอดภัยของศูนย์ข้อมูลขององค์กร พวกเขาบันทึกว่าศูนย์ข้อมูลขาดกล้องวงจรปิดสำหรับเฝ้าติดตามสถานที่ นี่แสดงถึงการควบคุมประเภทใด?",
    "options_th": [
      "Administrative",
      "Technical",
      "Physical",
      "Logical"
    ],
    "explanation_th": "กล้องวงจรปิดที่ใช้เฝ้าติดตามสถานที่เป็นตัวอย่างของการควบคุมความปลอดภัยทางกายภาพ การควบคุมเชิงบริหารเป็นการควบคุมที่เน้นการจัดการ เช่น เอกสาร นโยบาย ขั้นตอน และการฝึกอบรม การควบคุมทางเทคนิคหรือทางตรรกะเป็นส่วนประกอบฮาร์ดแวร์หรือซอฟต์แวร์ที่นำไปใช้โดยระบบคอมพิวเตอร์หรืออุปกรณ์เครือข่าย"
  },
  {
    "id": 130,
    "dom": 1,
    "question": "The senior security engineer is creating a document that provides stepby-step instructions on how to launch a vulnerability scan utilizing the organization’s vulnerability scanning tool that all security engineers will be required to follow. Which of the following governance elements is this an example of?",
    "options": [
      "Policy",
      "Procedure",
      "Guideline",
      "Law"
    ],
    "correct_idx": 1,
    "explanation": "A document containing step-by-step instructions on how to perform a vulnerability scanning is an example of a procedure. Policies are high-level management statements providing directives to the organization but do not prescribe exact steps. Guidelines serve as best practice references but are not required to be followed. While following the procedure may be a requirement of the business, the proc",
    "short_explanation_en": "A document containing step-by-step instructions on how to perform a vulnerability scanning is an example of a procedure.",
    "question_th": "วิศวกรความปลอดภัยอาวุโสกำลังสร้างเอกสารที่ให้คำแนะนำทีละขั้นตอนเกี่ยวกับวิธีเปิดใช้การสแกนช่องโหว่โดยใช้เครื่องมือสแกนช่องโหว่ขององค์กร ซึ่งวิศวกรความปลอดภัยทุกคนจะต้องปฏิบัติตาม ข้อใดคือองค์ประกอบด้านการกำกับดูแล (Governance) ที่นี่เป็นตัวอย่าง?",
    "options_th": [
      "Policy",
      "Procedure",
      "Guideline",
      "Law"
    ],
    "explanation_th": "เอกสารที่มีคำแนะนำทีละขั้นตอนเกี่ยวกับวิธีการสแกนช่องโหว่เป็นตัวอย่างของ procedure นโยบาย (Policy) เป็นข้อความระดับบริหารระดับสูงที่ให้แนวทางแก่องค์กร แต่ไม่ได้กำหนดขั้นตอนที่แน่นอน แนวทาง (Guideline) ทำหน้าที่เป็นข้อมูลอ้างอิงแนวปฏิบัติที่ดี แต่ไม่จำเป็นต้องปฏิบัติตาม"
  },
  {
    "id": 131,
    "dom": 1,
    "question": "An information security policy is an example of which of the following types of controls?",
    "options": [
      "Administrative",
      "Technical",
      "Logical",
      "Physical"
    ],
    "correct_idx": 0,
    "explanation": "A policy is an example of an administrative control. Administrative controls are management-oriented controls that provide directives and instruction aimed at people within the organization, such as documentation, training, and other personnel management practices. Technical controls, also known as logical controls, are hardware or software components that protect virtual resources. Physical contr",
    "short_explanation_en": "A policy is an example of an administrative control. Administrative controls are management-oriented controls that provide directives and instruction aimed at people within the organization, such as documentation, training, and other...",
    "question_th": "นโยบายความปลอดภัยสารสนเทศเป็นตัวอย่างของการควบคุมประเภทใด?",
    "options_th": [
      "Administrative",
      "Technical",
      "Logical",
      "Physical"
    ],
    "explanation_th": "นโยบายเป็นตัวอย่างของการควบคุมเชิงบริหาร การควบคุมเชิงบริหารเป็นการควบคุมที่เน้นการจัดการซึ่งให้คำแนะนำและข้อบังคับต่อบุคคลภายในองค์กร เช่น เอกสาร การฝึกอบรม และแนวปฏิบัติการจัดการบุคลากรอื่น ๆ การควบคุมทางเทคนิค หรือที่เรียกว่าการควบคุมทางตรรกะ เป็นส่วนประกอบฮาร์ดแวร์หรือซอฟต์แวร์ที่ปกป้องทรัพยากรเสมือน"
  },
  {
    "id": 132,
    "dom": 1,
    "question": "Sarah is a security engineer for a Software as a Service (SaaS) organization. Her friend Kyle is a systems administrator for the organization and helped her get the job by serving as a reference. While reviewing some system logs, Sarah discovered that Kyle is running a crypto-mining program on a company server for his own financial gain. How should Sarah respond to this situation?",
    "options": [
      "Ask Kyle to stop",
      "Ask Kyle to share the profits with her",
      "Mind her own business",
      "Escalate to senior management"
    ],
    "correct_idx": 3,
    "explanation": "Sarah should immediately escalate this to senior leadership in accordance with the organization’s policies and procedures. This would be the ethical response to this situation. CHAPTER 2 Access Controls Concepts This chapter discusses the following topics: • Access control fundamentals • Logical access controls • Physical access controls In Chapter 1 we introduced the concept of security controls,",
    "short_explanation_en": "Sarah should immediately escalate this to senior leadership in accordance with the organization’s policies and procedures.",
    "question_th": "ซาร่าห์เป็นวิศวกรความปลอดภัยขององค์กร Software as a Service (SaaS) เพื่อนของเธอ ไคล์ เป็นผู้ดูแลระบบขององค์กรและช่วยให้เธอได้งานโดยเป็นผู้อ้างอิง ขณะที่ทบทวนบันทึกระบบ ซาร่าห์พบว่าไคล์กำลังรันโปรแกรมขุดคริปโตบนเซิร์ฟเวอร์ของบริษัทเพื่อประโยชน์ทางการเงินของตนเอง ซาร่าห์ควรตอบสนองต่อสถานการณ์นี้อย่างไร?",
    "options_th": [
      "ขอให้ไคล์หยุด",
      "ขอให้ไคล์แบ่งกำไรให้เธอ",
      "ไม่ยุ่งเกี่ยวกับเรื่องนี้",
      "แจ้งไปยังผู้บริหารระดับสูง"
    ],
    "explanation_th": "ซาร่าห์ควรแจ้งเรื่องนี้ไปยังผู้บริหารระดับสูงทันทีตามนโยบายและขั้นตอนขององค์กร นี่จะเป็นการตอบสนองที่ถูกต้องตามหลักจริยธรรมต่อสถานการณ์นี้"
  },
  {
    "id": 181,
    "dom": 1,
    "question": "Which of the following canons is found in the ISC2 code of ethics?",
    "options": [
      "Advance and promote the profession",
      "Protect society, the common good, and the infrastructure",
      "Provide diligent and competent service to principals",
      "Act honorably, honestly, safely and legally"
    ],
    "correct_idx": 2,
    "explanation": "Only \"Provide diligent and competent service to principals\" contains the accurate text of the ISC2 code of ethics. Although a security professional should discourage unsafe practices, no direct reference to acting safely exists in the canons. Aside from society, the common good and infrastructure, security professionals are expected to protect public trust and confidence. Finally, they are expected to protect the profession, and not just advance and promote it.",
    "short_explanation_en": "Only \"Provide diligent and competent service to principals\" contains the accurate text of the ISC2 code of ethics.",
    "question_th": "ข้อใดคือหนึ่งในจรรยาบรรณที่พบใน ISC2 code of ethics?",
    "options_th": [
      "Advance and promote the profession",
      "Protect society, the common good, and the infrastructure",
      "Provide diligent and competent service to principals",
      "Act honorably, honestly, safely and legally"
    ],
    "explanation_th": "มีเพียง 'Provide diligent and competent service to principals' เท่านั้นที่มีข้อความที่ถูกต้องตรงตาม ISC2 code of ethics แม้ผู้เชี่ยวชาญด้านความปลอดภัยควรห้ามปรามการปฏิบัติที่ไม่ปลอดภัย แต่ไม่มีการอ้างอิงถึงการกระทำอย่างปลอดภัยโดยตรงในจรรยาบรรณ นอกเหนือจากสังคม ผลประโยชน์ส่วนรวม และโครงสร้างพื้นฐาน ผู้เชี่ยวชาญความปลอดภัยยังต้องปกป้องความไว้วางใจและความเชื่อมั่นของสาธารณะด้วย"
  },
  {
    "id": 182,
    "dom": 1,
    "question": "Which of the following is NOT an ethical canon of the ISC2?",
    "options": [
      "Advance and protect the profession",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Act honorably, honestly, justly, responsibly and legally",
      "Provide active and qualified service to principal"
    ],
    "correct_idx": 3,
    "explanation": "In the code of ethics, we read \"Provide diligent and competent service to principals\", and not \"Provide active and qualified service to principals.\"; all the other options are valid canons of the code of ethics (see ISC2 Study Guide Chapter 1, Module 5).",
    "short_explanation_en": "In the code of ethics, we read \"Provide diligent and competent service to principals\", and not \"Provide active and qualified service to principals.\"; all the other options are valid canons of the code of ethics (see ISC2 Study Guide...",
    "question_th": "ข้อใดไม่ใช่จรรยาบรรณของ ISC2?",
    "options_th": [
      "Advance and protect the profession",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Act honorably, honestly, justly, responsibly and legally",
      "Provide active and qualified service to principal"
    ],
    "explanation_th": "ในจรรยาบรรณ เราอ่านว่า 'Provide diligent and competent service to principals' ไม่ใช่ 'Provide active and qualified service to principals' ตัวเลือกอื่น ๆ ทั้งหมดเป็นจรรยาบรรณที่ถูกต้อง"
  },
  {
    "id": 187,
    "dom": 1,
    "question": "Which concept describes an information security strategy that integrates people, technology and operations in order to establish security controls across multiple layers of the organization?",
    "options": [
      "Least Privilege",
      "Defense in Depth",
      "Separation of Duties",
      "Privileged Accounts"
    ],
    "correct_idx": 1,
    "explanation": "Defense in depth describes a cybersecurity approach that uses multiple layers of security for holistic protection (see ISC2 Study Guide Chapter 1, Module 3). According to the principle of Separation of Duties, no user should ever be given enough privileges to misuse the system on their own. The principle of Least Privilege dictates that users should be given only those privileges required to complete their specific tasks. Privileged Accounts are a class of accounts that have permissions exceedin",
    "short_explanation_en": "Defense in depth describes a cybersecurity approach that uses multiple layers of security for holistic protection (see ISC2 Study Guide Chapter 1, Module 3).",
    "question_th": "แนวคิดใดอธิบายกลยุทธ์ความปลอดภัยสารสนเทศที่ผสานผู้คน เทคโนโลยี และการดำเนินงาน เพื่อสร้างการควบคุมความปลอดภัยในหลายชั้นขององค์กร?",
    "options_th": [
      "Least Privilege",
      "Defense in Depth",
      "Separation of Duties",
      "Privileged Accounts"
    ],
    "explanation_th": "Defense in depth อธิบายแนวทางความปลอดภัยไซเบอร์ที่ใช้ความปลอดภัยหลายชั้นเพื่อการป้องกันแบบองค์รวม ตามหลัก Separation of Duties ไม่ควรให้ผู้ใช้คนใดมีสิทธิ์เพียงพอที่จะใช้ระบบในทางที่ผิดได้ด้วยตัวเอง หลักการ Least Privilege กำหนดว่าผู้ใช้ควรได้รับสิทธิ์เท่าที่จำเป็นต่อการทำงานเท่านั้น"
  },
  {
    "id": 189,
    "dom": 1,
    "question": "Which of the following is a detection control?",
    "options": [
      "Turnstiles",
      "Smoke sensors",
      "Bollards",
      "Firewalls"
    ],
    "correct_idx": 1,
    "explanation": "By definition, smoke detectors are fire protection devices employed for the early detection of fire. Firewalls are devicesthat filter incoming traffic, and are a type of logical preventive control. Bollards and turnstiles are types of physical preventive controls.",
    "short_explanation_en": "By definition, smoke detectors are fire protection devices employed for the early detection of fire.",
    "question_th": "ข้อใดคือการควบคุมแบบตรวจจับ (Detection control)?",
    "options_th": [
      "Turnstiles",
      "Smoke sensors",
      "Bollards",
      "Firewalls"
    ],
    "explanation_th": "โดยนิยาม เครื่องตรวจจับควันเป็นอุปกรณ์ป้องกันอัคคีภัยที่ใช้เพื่อตรวจจับไฟไหม้ในระยะเริ่มต้น ไฟร์วอลล์เป็นอุปกรณ์ที่กรองทราฟฟิกขาเข้า และเป็นการควบคุมแบบป้องกันเชิงตรรกะ Bollards และ turnstiles เป็นการควบคุมแบบป้องกันทางกายภาพ"
  },
  {
    "id": 192,
    "dom": 1,
    "question": "When a company hires an insurance company to mitigate risk, which risk management technique is being applied?",
    "options": [
      "Risk avoidance",
      "Risk transfer",
      "Risk mitigation",
      "Risk tolerance"
    ],
    "correct_idx": 1,
    "explanation": "Risk transfer is a risk management strategy that contractually shifts a pure risk from one party to another (in this case, to an insurance company). Risk avoidance consists in stopping activities and exposures that can negatively affect an organization and its assets. Risk mitigation consists of mechanisms to reduce the risk. Finally, risk tolerance is the degree of risk that an investor is willing to endure.",
    "short_explanation_en": "Risk transfer is a risk management strategy that contractually shifts a pure risk from one party to another (in this case, to an insurance company). Risk avoidance consists in stopping activities and exposures that can negatively affect an organization and its assets. Risk mitigation consists of mechanisms to reduce the risk. Finally, risk tolerance is the degree of risk that an investor is willing to endure.",
    "question_th": "เมื่อบริษัทจ้างบริษัทประกันเพื่อลดความเสี่ยง เทคนิคการบริหารความเสี่ยงใดที่ถูกนำมาใช้?",
    "options_th": [
      "Risk avoidance",
      "Risk transfer",
      "Risk mitigation",
      "Risk tolerance"
    ],
    "explanation_th": "Risk transfer เป็นกลยุทธ์การบริหารความเสี่ยงที่โอนความเสี่ยงบริสุทธิ์จากฝ่ายหนึ่งไปยังอีกฝ่ายหนึ่งตามสัญญา (ในกรณีนี้คือบริษัทประกัน) Risk avoidance คือการหยุดกิจกรรมและการเปิดเผยที่อาจส่งผลกระทบเชิงลบต่อองค์กร Risk mitigation คือกลไกในการลดความเสี่ยง"
  },
  {
    "id": 194,
    "dom": 1,
    "question": "The process of verifying or proving the user's identification is known as:",
    "options": [
      "Confidentiality",
      "Integrity",
      "Authentication",
      "Authorization"
    ],
    "correct_idx": 2,
    "explanation": "Authentication is the verification of the identity of a user, process or device, as a prerequisite to allowing access to the resources in a given system. In contrast, authorization refers to the permission granted to users, processes or devices to access specific assets. Confidentiality and integrity are properties of information and systems, not processes.",
    "short_explanation_en": "Authentication is the verification of the identity of a user, process or device, as a prerequisite to allowing access to the resources in a given system.",
    "question_th": "กระบวนการยืนยันหรือพิสูจน์ตัวตนของผู้ใช้เรียกว่า:",
    "options_th": [
      "Confidentiality",
      "Integrity",
      "Authentication",
      "Authorization"
    ],
    "explanation_th": "Authentication คือการยืนยันตัวตนของผู้ใช้ กระบวนการ หรืออุปกรณ์ ในฐานะเงื่อนไขเบื้องต้นก่อนที่จะอนุญาตให้เข้าถึงทรัพยากรในระบบที่กำหนด ในทางตรงกันข้าม authorization หมายถึงสิทธิ์ที่มอบให้กับผู้ใช้ กระบวนการ หรืออุปกรณ์เพื่อเข้าถึงทรัพย์สินที่เฉพาะเจาะจง"
  },
  {
    "id": 201,
    "dom": 1,
    "question": "Which of the following is NOT an example of a physical security control?",
    "options": [
      "Firewalls",
      "Biometric access controls",
      "Remote control electronic locks",
      "Security cameras"
    ],
    "correct_idx": 0,
    "explanation": "Firewalls are a type of electronic equipment which connects to a network that filters inbound traffic arriving from the Internet, and, thus are a type of technical security controls. Security cameras, biometric access control and electronic locks, though connected to a network, control access to physical facilities, and thus are types of physical security controls. (ISC2 Study Guide, Chapter 1, Module 3)",
    "short_explanation_en": "Firewalls are a type of electronic equipment which connects to a network that filters inbound traffic arriving from the Internet, and, thus are a type of technical security controls.",
    "question_th": "ข้อใดไม่ใช่ตัวอย่างของการควบคุมความปลอดภัยทางกายภาพ?",
    "options_th": [
      "Firewalls",
      "Biometric access controls",
      "Remote control electronic locks",
      "Security cameras"
    ],
    "explanation_th": "ไฟร์วอลล์เป็นอุปกรณ์อิเล็กทรอนิกส์ที่เชื่อมต่อกับเครือข่ายเพื่อกรองทราฟฟิกขาเข้าจากอินเทอร์เน็ต จึงเป็นการควบคุมความปลอดภัยทางเทคนิค กล้องวงจรปิด การควบคุมการเข้าถึงด้วยไบโอเมตริกซ์ และล็อกอิเล็กทรอนิกส์ แม้จะเชื่อมต่อกับเครือข่าย แต่ควบคุมการเข้าถึงสถานที่ทางกายภาพ จึงเป็นการควบคุมความปลอดภัยทางกายภาพ"
  },
  {
    "id": 206,
    "dom": 1,
    "question": "A biometric reader that grants access to a computer system in a data center is a:",
    "options": [
      "Administrative Control",
      "Physical Control",
      "Authorization Control",
      "Technical Control"
    ],
    "correct_idx": 3,
    "explanation": "Physical controls have to do with the architectural features of buildings and facilities. Administrative controls are connected to the actions of people within the organization. Technical controls are implemented inside of computer systems. Authorization controls relate to the assets to which a user is granted access inside a particular computer system (see ISC2 Study Guide Chapter 1, Module 3).",
    "short_explanation_en": "Physical controls have to do with the architectural features of buildings and facilities.",
    "question_th": "เครื่องอ่านไบโอเมตริกซ์ที่ให้สิทธิ์เข้าถึงระบบคอมพิวเตอร์ในศูนย์ข้อมูลคือ:",
    "options_th": [
      "Administrative Control",
      "Physical Control",
      "Authorization Control",
      "Technical Control"
    ],
    "explanation_th": "การควบคุมทางกายภาพเกี่ยวข้องกับคุณลักษณะทางสถาปัตยกรรมของอาคารและสถานที่ การควบคุมเชิงบริหารเกี่ยวข้องกับการกระทำของบุคคลภายในองค์กร การควบคุมทางเทคนิคถูกนำไปใช้ภายในระบบคอมพิวเตอร์ การควบคุมด้านการอนุญาตเกี่ยวข้องกับทรัพย์สินที่ผู้ใช้ได้รับอนุญาตให้เข้าถึงภายในระบบคอมพิวเตอร์เฉพาะ"
  },
  {
    "id": 211,
    "dom": 1,
    "question": "The detailed steps to complete tasks supporting departmental or organizational policies are typically documented in:",
    "options": [
      "Regulations",
      "Standards",
      "Policies",
      "Procedures"
    ],
    "correct_idx": 3,
    "explanation": "Policies are high-level documents that frame all ongoing activities of an organization to ensure that it complies with industry standards and regulations. Regulations are usually devised by governments. Standards are created by governing or professional bodies to support regulations. Both regulations and standards are created outside of the organization (see ISC2 Study Guide Chapter 1, Module 4).",
    "short_explanation_en": "Policies are high-level documents that frame all ongoing activities of an organization to ensure that it complies with industry standards and regulations. Regulations are usually devised by governments. Standards are created by governing or professional bodies to support regulations. Both regulations and standards are created outside of the organization (see ISC2 Study Guide Chapter 1, Module 4).",
    "question_th": "ขั้นตอนโดยละเอียดในการทำงานให้เสร็จสมบูรณ์เพื่อสนับสนุนนโยบายของหน่วยงานหรือองค์กร มักถูกบันทึกไว้ใน:",
    "options_th": [
      "Regulations",
      "Standards",
      "Policies",
      "Procedures"
    ],
    "explanation_th": "นโยบาย (Policies) เป็นเอกสารระดับสูงที่กำหนดกรอบกิจกรรมต่อเนื่องทั้งหมดขององค์กรเพื่อให้มั่นใจว่าสอดคล้องกับมาตรฐานอุตสาหกรรมและกฎระเบียบ กฎระเบียบมักถูกกำหนดโดยรัฐบาล มาตรฐานถูกสร้างขึ้นโดยหน่วยงานกำกับดูแลหรือวิชาชีพเพื่อสนับสนุนกฎระเบียบ"
  },
  {
    "id": 214,
    "dom": 1,
    "question": "A Security safeguard is the same as a:",
    "options": [
      "Safety control",
      "Privacy control",
      "Security control",
      "Security principle"
    ],
    "correct_idx": 2,
    "explanation": "Security safeguards are approved security measures taken to protect computational resources by eliminating or reducing the risk to a system. These can be measures like hardware and software mechanisms, policies, procedures, and physical controls (see NIST SP 800-28 Version 2, under safeguard). This definition matches the definition of security control as the means of managing risk, including policies, procedures, guidelines, practices, or organizational structures, which can be of an administrat",
    "short_explanation_en": "Security safeguards are approved security measures taken to protect computational resources by eliminating or reducing the risk to a system.",
    "question_th": "Security safeguard เหมือนกับ:",
    "options_th": [
      "Safety control",
      "Privacy control",
      "Security control",
      "Security principle"
    ],
    "explanation_th": "Security safeguards คือมาตรการความปลอดภัยที่ได้รับการอนุมัติเพื่อปกป้องทรัพยากรคอมพิวเตอร์โดยการขจัดหรือลดความเสี่ยงต่อระบบ ซึ่งอาจเป็นมาตรการต่าง ๆ เช่น กลไกฮาร์ดแวร์และซอฟต์แวร์ นโยบาย ขั้นตอน และการควบคุมทางกายภาพ นิยามนี้ตรงกับนิยามของ security control ในฐานะวิธีการจัดการความเสี่ยง"
  },
  {
    "id": 218,
    "dom": 1,
    "question": "Which of the following are NOT types of security controls?",
    "options": [
      "Common controls",
      "Hybrid controls",
      "System-specific controls",
      "Storage controls"
    ],
    "correct_idx": 3,
    "explanation": "Storage controls are not a type of security control. Security controls are safeguards or countermeasures that an organization can employ to avoid, counteract or minimize security risks. System-specific controls are security controls that provide security capability for only one specific information system. Common controls are security controls that provide security capability for multiple information systems. Hybrid controls have characteristics of both system-specific and common controls.",
    "short_explanation_en": "Storage controls are not a type of security control. Security controls are safeguards or countermeasures that an organization can employ to avoid, counteract or minimize security risks.",
    "question_th": "ข้อใดไม่ใช่ประเภทของการควบคุมความปลอดภัย?",
    "options_th": [
      "Common controls",
      "Hybrid controls",
      "System-specific controls",
      "Storage controls"
    ],
    "explanation_th": "Storage controls ไม่ใช่ประเภทของการควบคุมความปลอดภัย การควบคุมความปลอดภัยคือมาตรการป้องกันหรือมาตรการตอบโต้ที่องค์กรสามารถใช้เพื่อหลีกเลี่ยง ตอบโต้ หรือลดความเสี่ยงด้านความปลอดภัย System-specific controls เป็นการควบคุมที่ให้ความสามารถด้านความปลอดภัยสำหรับระบบสารสนเทศเฉพาะระบบเดียว Common controls ให้ความสามารถด้านความปลอดภัยสำหรับหลายระบบ"
  },
  {
    "id": 220,
    "dom": 1,
    "question": "The magnitude of the harm expected as a result of the consequences of an unauthorized disclosure, modification, destruction, or loss of information, is known as the:",
    "options": [
      "Vulnerability",
      "Threat",
      "Impact",
      "Likelihood"
    ],
    "correct_idx": 2,
    "explanation": "The sentence matches the definition of the concept of impact (see NIST SP 800-60 Vol. 1 Rev. 1 under Impact). Furthermore, the ISC2 Study Guide, chapter 1, defines likelihood as the probability that a potential vulnerability may be exploited. A threat is defined as a circumstance or event that can adversely impact organizational operations. A vulnerability is a weakness that a threat can exploit.",
    "short_explanation_en": "The sentence matches the definition of the concept of impact (see NIST SP 800-60 Vol.",
    "question_th": "ขนาดของความเสียหายที่คาดว่าจะเกิดขึ้นจากผลของการเปิดเผย การดัดแปลง การทำลาย หรือการสูญเสียข้อมูลโดยไม่ได้รับอนุญาต เรียกว่า:",
    "options_th": [
      "Vulnerability",
      "Threat",
      "Impact",
      "Likelihood"
    ],
    "explanation_th": "ประโยคนี้ตรงกับนิยามของแนวคิด impact นอกจากนี้ ISC2 Study Guide บทที่ 1 นิยาม likelihood ว่าเป็นความน่าจะเป็นที่ช่องโหว่ที่มีศักยภาพอาจถูกใช้ประโยชน์ Threat ถูกนิยามว่าเป็นสถานการณ์หรือเหตุการณ์ที่สามารถส่งผลกระทบเชิงลบต่อการดำเนินงานขององค์กร Vulnerability คือจุดอ่อนที่ Threat สามารถใช้ประโยชน์ได้"
  },
  {
    "id": 221,
    "dom": 1,
    "question": "The implementation of Security Controls is a form of:",
    "options": [
      "Risk reduction",
      "Risk acceptance",
      "Risk avoidance",
      "Risk transference"
    ],
    "correct_idx": 0,
    "explanation": "The implementation of Security Controls involves taking actions to mitigate risk, and thus is a form of risk reduction. Risk acceptance will take no action, risk avoidance will modify operations in order to avoid risk entirely, and risk transference will transfer the risk to another party.",
    "short_explanation_en": "The implementation of Security Controls involves taking actions to mitigate risk, and thus is a form of risk reduction.",
    "question_th": "การนำการควบคุมความปลอดภัย (Security Controls) มาใช้เป็นรูปแบบหนึ่งของ:",
    "options_th": [
      "Risk reduction",
      "Risk acceptance",
      "Risk avoidance",
      "Risk transference"
    ],
    "explanation_th": "การนำการควบคุมความปลอดภัยมาใช้เกี่ยวข้องกับการดำเนินการเพื่อลดความเสี่ยง จึงเป็นรูปแบบหนึ่งของ risk reduction Risk acceptance คือการไม่ดำเนินการใด ๆ risk avoidance คือการปรับเปลี่ยนการดำเนินงานเพื่อหลีกเลี่ยงความเสี่ยงทั้งหมด และ risk transference คือการโอนความเสี่ยงไปยังฝ่ายอื่น"
  },
  {
    "id": 223,
    "dom": 1,
    "question": "Which of the following is an example of an administrative security control?",
    "options": [
      "Access Control Lists",
      "Acceptable Use Policies",
      "Badge Readers",
      "No entry signs"
    ],
    "correct_idx": 1,
    "explanation": "Policies are a type of administrative security controls. An access control list is a type of technical security control. A badge reader and a 'No entry' sign are types of physical security controls (see ISC2 Study Guide, Chapter 1, Module 3).",
    "short_explanation_en": "Policies are a type of administrative security controls. An access control list is a type of technical security control.",
    "question_th": "ข้อใดเป็นตัวอย่างของการควบคุมความปลอดภัยเชิงบริหาร (Administrative security control)?",
    "options_th": [
      "Access Control Lists",
      "Acceptable Use Policies",
      "Badge Readers",
      "No entry signs"
    ],
    "explanation_th": "นโยบายเป็นประเภทหนึ่งของการควบคุมความปลอดภัยเชิงบริหาร รายการควบคุมการเข้าถึง (Access control list) เป็นการควบคุมความปลอดภัยทางเทคนิค เครื่องอ่านบัตรและป้าย 'ห้ามเข้า' เป็นการควบคุมความปลอดภัยทางกายภาพ"
  },
  {
    "id": 232,
    "dom": 1,
    "question": "Sensitivity is a measure of the …:",
    "options": [
      "… protection and timeliness assigned to information by its owner, or the purpose of representing its need for urgency.",
      "… urgency and protection assigned to information by its owner.",
      "… importance assigned to information by its owner, or the purpose of representing its need for protection.",
      "… pertinence assigned to information by its owner, or the purpose of representing its need for urgency."
    ],
    "correct_idx": 2,
    "explanation": "Sensitivity is also defined as the measure of the importance assigned to information by its owner, or the purpose of representing its need for protection (see the ISC2 study guide, module 1, under CIA Deep Dive).",
    "short_explanation_en": "Sensitivity is also defined as the measure of the importance assigned to information by its owner, or the purpose of representing its need for protection (see the ISC2 study guide, module 1, under CIA Deep Dive).",
    "question_th": "ความอ่อนไหว (Sensitivity) เป็นการวัด …:",
    "options_th": [
      "… การป้องกันและความทันเวลาที่กำหนดให้กับข้อมูลโดยเจ้าของ หรือวัตถุประสงค์ในการแสดงถึงความจำเป็นด้านความเร่งด่วน",
      "… ความเร่งด่วนและการป้องกันที่กำหนดให้กับข้อมูลโดยเจ้าของ",
      "… ความสำคัญที่กำหนดให้กับข้อมูลโดยเจ้าของ หรือวัตถุประสงค์ในการแสดงถึงความจำเป็นด้านการป้องกัน",
      "… ความเกี่ยวข้องที่กำหนดให้กับข้อมูลโดยเจ้าของ หรือวัตถุประสงค์ในการแสดงถึงความจำเป็นด้านความเร่งด่วน"
    ],
    "explanation_th": "Sensitivity ยังถูกนิยามว่าเป็นการวัดความสำคัญที่กำหนดให้กับข้อมูลโดยเจ้าของ หรือวัตถุประสงค์ในการแสดงถึงความจำเป็นในการป้องกัน"
  },
  {
    "id": 235,
    "dom": 1,
    "question": "Which of these types of user is LESS likely to have a privileged account?",
    "options": [
      "System Administrator",
      "Security Analyst",
      "Help Desk",
      "External Worker"
    ],
    "correct_idx": 3,
    "explanation": "Typically, external workers should not have access to privileged accounts, due to the possibility of misuse. The Help Desk (or IT Support Staff) may have to view or manipulate endpoints, servers and applications platforms using privileged or restricted operations. Security analysts may require fast access to the IT infrastructure, systems, endpoints and data environment. By definition, systems administrators require privileged accounts, since they are responsible for operating systems, deploying",
    "short_explanation_en": "Typically, external workers should not have access to privileged accounts, due to the possibility of misuse.",
    "question_th": "ผู้ใช้ประเภทใดต่อไปนี้มีโอกาสน้อยที่สุดที่จะมีบัญชีสิทธิพิเศษ (Privileged account)?",
    "options_th": [
      "System Administrator",
      "Security Analyst",
      "Help Desk",
      "External Worker"
    ],
    "explanation_th": "โดยทั่วไป พนักงานภายนอกไม่ควรมีสิทธิ์เข้าถึงบัญชีสิทธิพิเศษ เนื่องจากความเป็นไปได้ในการใช้ในทางที่ผิด ฝ่าย Help Desk อาจต้องดูหรือจัดการ endpoint เซิร์ฟเวอร์ และแพลตฟอร์มแอปพลิเคชันโดยใช้การดำเนินการที่มีสิทธิพิเศษหรือถูกจำกัด นักวิเคราะห์ความปลอดภัยอาจต้องการการเข้าถึงโครงสร้างพื้นฐาน IT อย่างรวดเร็ว โดยนิยาม ผู้ดูแลระบบต้องการบัญชีสิทธิพิเศษเนื่องจากรับผิดชอบระบบปฏิบัติการ"
  },
  {
    "id": 250,
    "dom": 1,
    "question": "An entity that acts to exploit a target organization’s system vulnerabilities is a:",
    "options": [
      "Threat Vector",
      "Threat Actor",
      "Threat",
      "Attacker"
    ],
    "correct_idx": 1,
    "explanation": "A Threat Actor is defined as an individual or a group posing a threat (according to NIST SP 800-150 under Threat Actor). A Threat Vector is a means by which a Threat Actor gains access to systems (for example: phishing, trojans, baiting, etc.). An Attacker is always an individual, but a Threat Actor can be either a group or an entity. A Threat is a circumstance or event that can adversely impact organizational operations that a Threat Actor can potentially explore through a Threat Vector.",
    "short_explanation_en": "A Threat Actor is defined as an individual or a group posing a threat (according to NIST SP 800-150 under Threat Actor).",
    "question_th": "หน่วยงานที่กระทำการเพื่อใช้ประโยชน์จากช่องโหว่ของระบบขององค์กรเป้าหมายคือ:",
    "options_th": [
      "Threat Vector",
      "Threat Actor",
      "Threat",
      "Attacker"
    ],
    "explanation_th": "Threat Actor ถูกนิยามว่าเป็นบุคคลหรือกลุ่มที่ก่อให้เกิดภัยคุกคาม (ตาม NIST SP 800-150) Threat Vector คือวิธีการที่ Threat Actor ใช้เข้าถึงระบบ (เช่น ฟิชชิ่ง โทรจัน การล่อลวง) ผู้โจมตี (Attacker) มักเป็นบุคคลเสมอ แต่ Threat Actor สามารถเป็นได้ทั้งกลุ่มหรือหน่วยงาน"
  },
  {
    "id": 256,
    "dom": 1,
    "question": "An exploitable weakness or flaw in a system or component is a:",
    "options": [
      "Threat",
      "Bug",
      "Vulnerability",
      "Risk"
    ],
    "correct_idx": 2,
    "explanation": "A Vulnerability is a weakness in an information system, system security procedures, internal controls or implementationthat could be exploited by a Threat source (NIST SP 800-30 Rev 1). The Threat is the circumstance or event that can adversely impact operations. A Risk is a possible event that can negatively impact the organization. A Bug is a flaw causing an application to produce an unintended or unexpected result that may be exploitable.",
    "short_explanation_en": "A Vulnerability is a weakness in an information system, system security procedures, internal controls or implementationthat could be exploited by a Threat source (NIST SP 800-30 Rev 1).",
    "question_th": "จุดอ่อนหรือข้อบกพร่องที่สามารถใช้ประโยชน์ได้ในระบบหรือส่วนประกอบคือ:",
    "options_th": [
      "Threat",
      "Bug",
      "Vulnerability",
      "Risk"
    ],
    "explanation_th": "Vulnerability คือจุดอ่อนในระบบสารสนเทศ ขั้นตอนความปลอดภัยของระบบ การควบคุมภายใน หรือการดำเนินการ ที่อาจถูกใช้ประโยชน์โดยแหล่งที่มาของ Threat (NIST SP 800-30 Rev 1) Threat คือสถานการณ์หรือเหตุการณ์ที่สามารถส่งผลกระทบเชิงลบต่อการดำเนินงาน Risk คือเหตุการณ์ที่เป็นไปได้ซึ่งอาจส่งผลกระทบเชิงลบต่อองค์กร Bug คือข้อบกพร่องที่ทำให้แอปพลิเคชันสร้างผลลัพธ์ที่ไม่ได้ตั้งใจซึ่งอาจถูกใช้ประโยชน์ได้"
  },
  {
    "id": 258,
    "dom": 1,
    "question": "Risk Management is:",
    "options": [
      "The assessment of the potential impact of a threat.",
      "The creation of an incident response team.",
      "The impact and likelihood of a threat.",
      "The identification, evaluation and prioritization of risks."
    ],
    "correct_idx": 3,
    "explanation": "Risk Management is the process of identifying, assessing and mitigating risks (ISC2 Study Guide, chapter 1, module 2). \"Impact and likelihood of a threat\" is a definition of risk. \"Creating an incident response team\" and \"assessing the potential impact of a threat\" can be considered Risk Management actions, but are not in themselves Risk Management.",
    "short_explanation_en": "Risk Management is the process of identifying, assessing and mitigating risks (ISC2 Study Guide, chapter 1, module 2).",
    "question_th": "Risk Management คือ:",
    "options_th": [
      "การประเมินผลกระทบที่อาจเกิดขึ้นของภัยคุกคาม",
      "การสร้างทีมตอบสนองต่อเหตุการณ์",
      "ผลกระทบและความน่าจะเป็นของภัยคุกคาม",
      "การระบุ ประเมิน และจัดลำดับความสำคัญของความเสี่ยง"
    ],
    "explanation_th": "Risk Management คือกระบวนการระบุ ประเมิน และลดความเสี่ยง (ISC2 Study Guide บทที่ 1 โมดูล 2) 'ผลกระทบและความน่าจะเป็นของภัยคุกคาม' เป็นนิยามของ risk 'การสร้างทีมตอบสนองต่อเหตุการณ์' และ 'การประเมินผลกระทบที่อาจเกิดขึ้นของภัยคุกคาม' อาจถือเป็นกิจกรรมของ Risk Management แต่ไม่ใช่ Risk Management ในตัวมันเอง"
  },
  {
    "id": 259,
    "dom": 1,
    "question": "Which of the following documents contains elements that are NOT mandatory?",
    "options": [
      "Policies",
      "Guidelines",
      "Regulations",
      "Procedures"
    ],
    "correct_idx": 1,
    "explanation": "Only guidelines contain elements that may not be mandatory. Compliance with policies, procedures and regulations is mandatory (see ISC2 Study Guide Chapter 1, Module 4).",
    "short_explanation_en": "Only guidelines contain elements that may not be mandatory. Compliance with policies, procedures and regulations is mandatory (see ISC2 Study Guide Chapter 1, Module 4).",
    "question_th": "เอกสารใดต่อไปนี้มีองค์ประกอบที่ไม่บังคับ?",
    "options_th": [
      "Policies",
      "Guidelines",
      "Regulations",
      "Procedures"
    ],
    "explanation_th": "มีเพียง guidelines เท่านั้นที่มีองค์ประกอบที่อาจไม่บังคับ การปฏิบัติตามนโยบาย ขั้นตอน และกฎระเบียบเป็นสิ่งบังคับ"
  },
  {
    "id": 261,
    "dom": 1,
    "question": "Which security principle states that a user should only have the necessary permission to execute a task?",
    "options": [
      "Privileged Accounts",
      "Separation of Duties",
      "Least Privilege",
      "Defense in Depth"
    ],
    "correct_idx": 2,
    "explanation": "The principle of Defense in Depth refers to using multiple layers of security. The principle of Least Privilege states that subjects should be given only those privileges required to complete their specific tasks (ISC2 Study Guide Chapter 1, Module 3). Separation of Duties states that no user should ever be given enough privileges to misuse the system. Finally, Privileged Accounts are accounts with permissions beyond those of regular users, such as manager and administrator accounts.",
    "short_explanation_en": "The principle of Defense in Depth refers to using multiple layers of security.",
    "question_th": "หลักการความปลอดภัยใดที่ระบุว่าผู้ใช้ควรมีเพียงสิทธิ์ที่จำเป็นในการปฏิบัติงานเท่านั้น?",
    "options_th": [
      "Privileged Accounts",
      "Separation of Duties",
      "Least Privilege",
      "Defense in Depth"
    ],
    "explanation_th": "หลักการ Defense in Depth หมายถึงการใช้ความปลอดภัยหลายชั้น หลักการ Least Privilege ระบุว่าผู้ใช้ควรได้รับเพียงสิทธิ์ที่จำเป็นต่อการทำงานเฉพาะของตนเท่านั้น Separation of Duties ระบุว่าไม่ควรให้ผู้ใช้คนใดมีสิทธิ์เพียงพอที่จะใช้ระบบในทางที่ผิด และ Privileged Accounts คือบัญชีที่มีสิทธิ์เกินกว่าผู้ใช้ทั่วไป เช่น บัญชีผู้จัดการและผู้ดูแลระบบ"
  },
  {
    "id": 263,
    "dom": 1,
    "question": "In risk management, the highest priority is given to a risk where:",
    "options": [
      "The frequency of occurrence is low, and the expected impact value is high",
      "The expected probability of occurrence is low, and the potential impact is low",
      "The expected probability of occurrence is high, and the potential impact is low",
      "The frequency of occurrence is high, and the expected impact value is low"
    ],
    "correct_idx": 0,
    "explanation": "The highest priority is given to risks estimated to have high impact and low probability over high probability and low impact value (ISC2 Study Guide, Chapter 1, Module 2). In qualitative risk analysis, the 'expected probability of occurrence' and the 'frequency of occurrence' refer to the same thing. The same goes for the concepts of expected impact value (NIST SP 800-30 Rev. 1 under Impact Value) and potential impact (NIST SP 800-60 Vol. 1 Rev. 1 under Potential Impact).",
    "short_explanation_en": "The highest priority is given to risks estimated to have high impact and low probability over high probability and low impact value (ISC2 Study Guide, Chapter 1, Module 2).",
    "question_th": "ในการบริหารความเสี่ยง ความสำคัญสูงสุดจะให้กับความเสี่ยงที่:",
    "options_th": [
      "ความถี่ในการเกิดขึ้นต่ำ และค่าผลกระทบที่คาดว่าจะเกิดขึ้นสูง",
      "ความน่าจะเป็นที่คาดว่าจะเกิดขึ้นต่ำ และผลกระทบที่อาจเกิดขึ้นต่ำ",
      "ความน่าจะเป็นที่คาดว่าจะเกิดขึ้นสูง และผลกระทบที่อาจเกิดขึ้นต่ำ",
      "ความถี่ในการเกิดขึ้นสูง และค่าผลกระทบที่คาดว่าจะเกิดขึ้นต่ำ"
    ],
    "explanation_th": "ความสำคัญสูงสุดให้กับความเสี่ยงที่ประเมินว่ามีผลกระทบสูงและความน่าจะเป็นต่ำ มากกว่าความน่าจะเป็นสูงและผลกระทบต่ำ ในการวิเคราะห์ความเสี่ยงเชิงคุณภาพ 'ความน่าจะเป็นที่คาดว่าจะเกิดขึ้น' และ 'ความถี่ในการเกิดขึ้น' หมายถึงสิ่งเดียวกัน"
  },
  {
    "id": 264,
    "dom": 1,
    "question": "Which of the following areas is connected to PII?",
    "options": [
      "Non-Repudiation",
      "Authentication",
      "Integrity",
      "Confidentiality"
    ],
    "correct_idx": 3,
    "explanation": "Confidentiality is the most distinctive property of personally identifiable information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to the access to information.",
    "short_explanation_en": "Confidentiality is the most distinctive property of personally identifiable information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to the access to information.",
    "question_th": "พื้นที่ใดต่อไปนี้เกี่ยวข้องกับ PII?",
    "options_th": [
      "Non-Repudiation",
      "Authentication",
      "Integrity",
      "Confidentiality"
    ],
    "explanation_th": "Confidentiality เป็นคุณสมบัติที่โดดเด่นที่สุดของข้อมูลที่สามารถระบุตัวตนบุคคลได้ (PII) ตัวเลือกที่เหลือใช้กับข้อมูลทุกประเภท ข้อมูลทั้งหมดต้องการ integrity เพื่อให้ใช้งานได้ Non-repudiation หมายถึงการไม่สามารถปฏิเสธการผลิต การอนุมัติ หรือการส่งข้อมูล Authentication หมายถึงการเข้าถึงข้อมูล"
  },
  {
    "id": 265,
    "dom": 1,
    "question": "According to the canon \"Provide diligent and competent service to principals\", ISC2 professionals are to:",
    "options": [
      "Take care not to tarnish the reputation of other professionals through malice or indifference.",
      "Treat all members fairly and,when resolving conflicts, consider public safety and duties to principals, individuals and the profession, in that order.",
      "Avoid apparent or actual conflicts of interest.",
      "Promote the understanding and acceptance of prudent information security measures."
    ],
    "correct_idx": 2,
    "explanation": "The direction for applying the ethical principles of ISC2 states that avoiding conflicts of interest or the appearance thereof is a consequence of providing diligent and competent service to principals (see ISC2 Code of Ethics). The other options are consequences of the remaining three ethical principles.",
    "short_explanation_en": "The direction for applying the ethical principles of ISC2 states that avoiding conflicts of interest or the appearance thereof is a consequence of providing diligent and competent service to principals (see ISC2 Code of Ethics). The other options are consequences of the remaining three ethical principles.",
    "question_th": "ตามจรรยาบรรณ 'Provide diligent and competent service to principals' ผู้เชี่ยวชาญ ISC2 ต้อง:",
    "options_th": [
      "ระมัดระวังไม่ทำให้ชื่อเสียงของผู้เชี่ยวชาญคนอื่นเสียหายด้วยความมุ่งร้ายหรือความเฉยเมย",
      "ปฏิบัติต่อสมาชิกทุกคนอย่างเป็นธรรม และเมื่อแก้ไขข้อขัดแย้ง ให้พิจารณาความปลอดภัยสาธารณะและหน้าที่ต่อผู้ว่าจ้าง บุคคล และวิชาชีพ ตามลำดับ",
      "หลีกเลี่ยงความขัดแย้งทางผลประโยชน์ที่ปรากฏหรือเกิดขึ้นจริง",
      "ส่งเสริมความเข้าใจและการยอมรับมาตรการความปลอดภัยสารสนเทศที่รอบคอบ"
    ],
    "explanation_th": "แนวทางสำหรับการประยุกต์ใช้หลักจริยธรรมของ ISC2 ระบุว่าการหลีกเลี่ยงความขัดแย้งทางผลประโยชน์หรือลักษณะที่ปรากฏของมันเป็นผลมาจากการให้บริการอย่างขยันขันแข็งและมีความสามารถต่อผู้ว่าจ้าง ตัวเลือกอื่น ๆ เป็นผลมาจากหลักจริยธรรมอีกสามข้อที่เหลือ"
  },
  {
    "id": 267,
    "dom": 1,
    "question": "Governments can impose financial penalties as a consequence of breaking a:",
    "options": [
      "Regulation",
      "Standard",
      "Policy",
      "Procedure"
    ],
    "correct_idx": 0,
    "explanation": "Standards are created by governing or professional bodies (not by governments themselves). Policies and procedures are created by organizations, and are therefore not subject to financial penalties (see ISC2 Study Guide Chapter 1, Module 4)",
    "short_explanation_en": "Standards are created by governing or professional bodies (not by governments themselves).",
    "question_th": "รัฐบาลสามารถกำหนดบทลงโทษทางการเงินเป็นผลจากการฝ่าฝืน:",
    "options_th": [
      "Regulation",
      "Standard",
      "Policy",
      "Procedure"
    ],
    "explanation_th": "มาตรฐาน (Standards) ถูกสร้างขึ้นโดยหน่วยงานกำกับดูแลหรือวิชาชีพ (ไม่ใช่โดยรัฐบาลเอง) นโยบายและขั้นตอนถูกสร้างขึ้นโดยองค์กร จึงไม่อยู่ภายใต้บทลงโทษทางการเงิน"
  },
  {
    "id": 273,
    "dom": 1,
    "question": "Which of the following principles aims primarily at fraud detection?",
    "options": [
      "Privileged Accounts",
      "Defense in Depth",
      "Least Privilege",
      "Separation of Duties"
    ],
    "correct_idx": 3,
    "explanation": "According to the principle of Separation of Duties, operations on objects are to be segmented (often referred to as 'transactions'), requiring distinct users and authorizations. The involvement of multiple users guarantees that no single user can perpetrate and conceal errors or fraud in their duties. To the extent that users have to review the work of other users, Separation of Duties can also be considered a mechanism of fraud detection (see ISC2 Study Guide Chapter 1, Module 3). The principle",
    "short_explanation_en": "According to the principle of Separation of Duties, operations on objects are to be segmented (often referred to as 'transactions'), requiring distinct users and authorizations.",
    "question_th": "หลักการใดมุ่งเน้นการตรวจจับการทุจริตเป็นหลัก?",
    "options_th": [
      "Privileged Accounts",
      "Defense in Depth",
      "Least Privilege",
      "Separation of Duties"
    ],
    "explanation_th": "ตามหลักการ Separation of Duties การดำเนินการกับวัตถุจะถูกแบ่งส่วน (มักเรียกว่า 'ธุรกรรม') โดยต้องการผู้ใช้และการอนุญาตที่แตกต่างกัน การเกี่ยวข้องของผู้ใช้หลายคนรับประกันว่าไม่มีผู้ใช้คนใดสามารถกระทำและปกปิดข้อผิดพลาดหรือการทุจริตในหน้าที่ของตนได้เพียงลำพัง"
  },
  {
    "id": 275,
    "dom": 1,
    "question": "Which of the following is an example of a technical security control?",
    "options": [
      "Access control lists",
      "Turnstiles",
      "Fences",
      "Bollards"
    ],
    "correct_idx": 0,
    "explanation": "An access control list is a type of technical security control. Bollards, fences and turnstiles control access to physical facilities, and thus are types of physical security controls. (ISC2 Study Guide, Chapter 1, Module 3)",
    "short_explanation_en": "An access control list is a type of technical security control.",
    "question_th": "ข้อใดเป็นตัวอย่างของการควบคุมความปลอดภัยทางเทคนิค (Technical security control)?",
    "options_th": [
      "Access control lists",
      "Turnstiles",
      "Fences",
      "Bollards"
    ],
    "explanation_th": "รายการควบคุมการเข้าถึง (Access control list) เป็นประเภทหนึ่งของการควบคุมความปลอดภัยทางเทคนิค Bollards รั้ว และ turnstiles ควบคุมการเข้าถึงสถานที่ทางกายภาพ จึงเป็นประเภทของการควบคุมความปลอดภัยทางกายภาพ"
  },
  {
    "id": 277,
    "dom": 1,
    "question": "Which of the following areas is the most distinctive property of PHI?",
    "options": [
      "Integrity",
      "Confidentiality",
      "Non-Repudiation",
      "Authentication"
    ],
    "correct_idx": 1,
    "explanation": "The correct answer is B. Confidentiality is the most distinctive property of protected health information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to guaranteeing that systems and information are accessed by persons and systems that are who they claim to be.",
    "short_explanation_en": "The correct answer is B. Confidentiality is the most distinctive property of protected health information (see ISC2 Study Guide, Module 1, under CIA Deep Dive). The remaining options apply to all types of data. All data requires integrity to be usable. Non-repudiation refers to the inability to deny the production, approval, or transmission of information. Authentication refers to guaranteeing that systems and information are accessed by persons and systems that are who they claim to be.",
    "question_th": "พื้นที่ใดต่อไปนี้เป็นคุณสมบัติที่โดดเด่นที่สุดของ PHI?",
    "options_th": [
      "Integrity",
      "Confidentiality",
      "Non-Repudiation",
      "Authentication"
    ],
    "explanation_th": "คำตอบที่ถูกต้องคือ B Confidentiality เป็นคุณสมบัติที่โดดเด่นที่สุดของข้อมูลสุขภาพที่ได้รับการคุ้มครอง (PHI) ตัวเลือกที่เหลือใช้กับข้อมูลทุกประเภท ข้อมูลทั้งหมดต้องการ integrity เพื่อให้ใช้งานได้ Non-repudiation หมายถึงการไม่สามารถปฏิเสธการผลิต การอนุมัติ หรือการส่งข้อมูล"
  },
  {
    "id": 279,
    "dom": 1,
    "question": "Which of the following Cybersecurity concepts guarantees that information is accessible only to those authorized to access it?",
    "options": [
      "Confidentiality",
      "Non-repudiation",
      "Authentication",
      "Accessibility"
    ],
    "correct_idx": 0,
    "explanation": "Confidentiality, Integrity and Availability are known as the CIA triad, from the model that guides policies for information security. Confidentiality is the property of data or information not being made available or disclosed, which leads to sensitive information being protected from unauthorized access. Integrity refers to the preservation of the consistency, accuracy and trustworthiness of data. Availability is the property of data being consistently and readily accessible to the parties auth",
    "short_explanation_en": "Confidentiality, Integrity and Availability are known as the CIA triad, from the model that guides policies for information security.",
    "question_th": "แนวคิดความปลอดภัยไซเบอร์ใดต่อไปนี้รับประกันว่าข้อมูลสามารถเข้าถึงได้เฉพาะผู้ที่ได้รับอนุญาตเท่านั้น?",
    "options_th": [
      "Confidentiality",
      "Non-repudiation",
      "Authentication",
      "Accessibility"
    ],
    "explanation_th": "Confidentiality, Integrity และ Availability เรียกว่า CIA triad ซึ่งเป็นโมเดลที่ชี้นำนโยบายด้านความปลอดภัยสารสนเทศ Confidentiality คือคุณสมบัติของข้อมูลที่ไม่ถูกเปิดเผยหรือทำให้พร้อมใช้งานโดยไม่ได้รับอนุญาต ซึ่งนำไปสู่การปกป้องข้อมูลที่อ่อนไหวจากการเข้าถึงโดยไม่ได้รับอนุญาต"
  },
  {
    "id": 281,
    "dom": 1,
    "question": "A security professional should report violations of a company's security policy to:",
    "options": [
      "The ISC Ethics Committee",
      "Company management",
      "National authorities",
      "A court of law"
    ],
    "correct_idx": 1,
    "explanation": "The code of ethics requires security professionals to be honest, but not necessarily \"law enforcers\". A violation of a company's security policy should be reported and handled within the company itself (usually involving the human resources, legal, or management departments). Only individuals can be reported to the ISC2 ethics committee (i.e. not companies). National authorities only deal with violations of laws and regulations.",
    "short_explanation_en": "The code of ethics requires security professionals to be honest, but not necessarily \"law enforcers\". A violation of a company's security policy should be reported and handled within the company itself (usually involving the human resources, legal, or management departments). Only individuals can be reported to the ISC2 ethics committee (i.e. not companies). National authorities only deal with violations of laws and regulations.",
    "question_th": "ผู้เชี่ยวชาญด้านความปลอดภัยควรรายงานการฝ่าฝืนนโยบายความปลอดภัยของบริษัทไปยัง:",
    "options_th": [
      "The ISC Ethics Committee",
      "Company management",
      "National authorities",
      "A court of law"
    ],
    "explanation_th": "จรรยาบรรณกำหนดให้ผู้เชี่ยวชาญความปลอดภัยต้องซื่อสัตย์ แต่ไม่จำเป็นต้องเป็น 'ผู้บังคับใช้กฎหมาย' การฝ่าฝืนนโยบายความปลอดภัยของบริษัทควรได้รับการรายงานและจัดการภายในบริษัทเอง (โดยปกติเกี่ยวข้องกับฝ่ายทรัพยากรบุคคล กฎหมาย หรือฝ่ายบริหาร) มีเพียงบุคคลเท่านั้นที่สามารถถูกรายงานไปยังคณะกรรมการจรรยาบรรณ ISC2 (ไม่ใช่บริษัท)"
  },
  {
    "id": 284,
    "dom": 1,
    "question": "What is the most important difference between MAC and DAC?",
    "options": [
      "In MAC, security administrators set the roles for the users; in DAC, roles are set at the object owner’s discretion",
      "In MAC, security administrators assign access permissions; in DAC, security administrators set user roles",
      "In MAC, security administrators assign access permissions; in DAC, access permissions are set at the object owner’s discretion",
      "In MAC, access permissions are set at the object owner’s discretion; in DAC, it is up to security administrators to assign access permissions"
    ],
    "correct_idx": 2,
    "explanation": "In Mandatory Access Control (MAC), security administrators assign access permissions. In contrast, with Discretionary Access Control (MAC), it is up to the object owner’s discretion to set object permissions (see ISC2 Study Guide chapter 1, module 3, under Understand Logical Access Controls).",
    "short_explanation_en": "In Mandatory Access Control (MAC), security administrators assign access permissions.",
    "question_th": "ความแตกต่างที่สำคัญที่สุดระหว่าง MAC และ DAC คืออะไร?",
    "options_th": [
      "ใน MAC ผู้ดูแลความปลอดภัยกำหนดบทบาทให้ผู้ใช้ ใน DAC บทบาทถูกกำหนดตามดุลยพินิจของเจ้าของวัตถุ",
      "ใน MAC ผู้ดูแลความปลอดภัยกำหนดสิทธิ์การเข้าถึง ใน DAC ผู้ดูแลความปลอดภัยกำหนดบทบาทของผู้ใช้",
      "ใน MAC ผู้ดูแลความปลอดภัยกำหนดสิทธิ์การเข้าถึง ใน DAC สิทธิ์การเข้าถึงถูกกำหนดตามดุลยพินิจของเจ้าของวัตถุ",
      "ใน MAC สิทธิ์การเข้าถึงถูกกำหนดตามดุลยพินิจของเจ้าของวัตถุ ใน DAC ผู้ดูแลความปลอดภัยเป็นผู้กำหนดสิทธิ์การเข้าถึง"
    ],
    "explanation_th": "ใน Mandatory Access Control (MAC) ผู้ดูแลความปลอดภัยเป็นผู้กำหนดสิทธิ์การเข้าถึง ในทางตรงกันข้าม ใน Discretionary Access Control (DAC) การกำหนดสิทธิ์วัตถุขึ้นอยู่กับดุลยพินิจของเจ้าของวัตถุ"
  },
  {
    "id": 287,
    "dom": 1,
    "question": "Which of the following is NOT a best practice in access management?",
    "options": [
      "Give only the right amount of permission",
      "Periodically assess if user permissions still apply",
      "Request a justification when upgrading permission",
      "Trust but verify"
    ],
    "correct_idx": 3,
    "explanation": "The “Trust but verify” model is a method of threat protection wherein privileged accounts are trusted (but always verified) and allowed access to the network and other resources. Over time, the “Trust but verify” model has been found to expose organizations to multiple security threats, and is therefore being progressively abandoned in favor of the Zero Trust model. The remaining options are all good practices of access management.",
    "short_explanation_en": "The “Trust but verify” model is a method of threat protection wherein privileged accounts are trusted (but always verified) and allowed access to the network and other resources. Over time, the “Trust but verify” model has been found to expose organizations to multiple security threats, and is therefore being progressively abandoned in favor of the Zero Trust model. The remaining options are all good practices of access management.",
    "question_th": "ข้อใดไม่ใช่แนวปฏิบัติที่ดีในการจัดการการเข้าถึง (Access management)?",
    "options_th": [
      "ให้สิทธิ์เท่าที่จำเป็นเท่านั้น",
      "ประเมินเป็นระยะว่าสิทธิ์ของผู้ใช้ยังคงเหมาะสมหรือไม่",
      "ขอเหตุผลเมื่อมีการอัปเกรดสิทธิ์",
      "Trust but verify"
    ],
    "explanation_th": "โมเดล 'Trust but verify' เป็นวิธีการป้องกันภัยคุกคามที่บัญชีสิทธิพิเศษได้รับความไว้วางใจ (แต่มีการตรวจสอบเสมอ) และได้รับอนุญาตให้เข้าถึงเครือข่ายและทรัพยากรอื่น ๆ เมื่อเวลาผ่านไป โมเดล 'Trust but verify' พบว่าเปิดโอกาสให้องค์กรเผชิญภัยคุกคามด้านความปลอดภัยหลายประการ และกำลังถูกยกเลิกเพื่อหันไปใช้โมเดล Zero Trust แทน"
  },
  {
    "id": 293,
    "dom": 1,
    "question": "As an (ISC)² member, you are expected to perform with due care. What does 'due care' specifically mean?",
    "options": [
      "Do what is right in each situation you encounter on the job",
      "Give continuity to the legacy of security practices of your company",
      "Apply patches annually",
      "Researching and acquiring the knowledge to do your job right"
    ],
    "correct_idx": 0,
    "explanation": "The concept of 'due Care' (also known as 'the prudent person rule') refers to what a prudent person would do in a given situation. In cybersecurity, 'due care' means taking reasonable steps to secure and protect the organization's assets, reputation and finances. The concept is holistic and includes, among other things: implementing the appropriate security standards, policies and procedures; ensuring proper cybersecurity awareness training; and promoting the continuous improvement of monitoring",
    "short_explanation_en": "The concept of 'due Care' (also known as 'the prudent person rule') refers to what a prudent person would do in a given situation.",
    "question_th": "ในฐานะสมาชิก (ISC)² คุณคาดว่าจะปฏิบัติงานด้วยความระมัดระวัง (Due care) คำว่า 'due care' หมายถึงอะไรโดยเฉพาะ?",
    "options_th": [
      "ทำสิ่งที่ถูกต้องในทุกสถานการณ์ที่คุณพบในงาน",
      "สืบทอดมรดกของแนวปฏิบัติด้านความปลอดภัยของบริษัทของคุณ",
      "นำแพตช์มาใช้ทุกปี",
      "วิจัยและได้มาซึ่งความรู้เพื่อทำงานของคุณให้ถูกต้อง"
    ],
    "explanation_th": "แนวคิดของ 'due care' (หรือเรียกว่า 'the prudent person rule') หมายถึงสิ่งที่บุคคลที่รอบคอบจะทำในสถานการณ์ที่กำหนด ในความปลอดภัยไซเบอร์ 'due care' หมายถึงการดำเนินขั้นตอนที่สมเหตุสมผลเพื่อรักษาความปลอดภัยและปกป้องทรัพย์สิน ชื่อเสียง และการเงินขององค์กร"
  },
  {
    "id": 294,
    "dom": 1,
    "question": "Which type of security governance document provides recommended advice or best practices that are discretionary rather than mandatory?",
    "options": [
      "Policy",
      "Guideline",
      "Standard",
      "Procedure"
    ],
    "correct_idx": 1,
    "explanation": "A Guideline contains recommendations and best practices that are discretionary (optional), providing flexible advice for implementation. In contrast, Policies, Standards, and Procedures are mandatory governance documents.",
    "short_explanation_en": "A Guideline contains recommendations and best practices that are discretionary (optional), providing flexible advice for implementation.",
    "question_th": "เอกสารการกำกับดูแลความปลอดภัยประเภทใดที่ให้คำแนะนำหรือแนวปฏิบัติที่ดีที่สุดซึ่งเป็นไปตามดุลยพินิจมากกว่าการบังคับใช้?",
    "options_th": [
      "Policy (นโยบาย)",
      "Guideline (แนวทางปฏิบัติ)",
      "Standard (มาตรฐาน)",
      "Procedure (ขั้นตอนการปฏิบัติงาน)"
    ],
    "explanation_th": "Guideline (แนวทางปฏิบัติ) ประกอบด้วยข้อเสนอแนะและแนวปฏิบัติที่ดีที่สุดซึ่งเป็นไปตามดุลยพินิจ (ไม่บังคับ) เพื่อให้คำแนะนำที่ยืดหยุ่นในการนำไปปฏิบัติ ในทางตรงกันข้าม Policy, Standard และ Procedure เป็นเอกสารการกำกับดูแลที่บังคับใช้"
  },
  {
    "id": 301,
    "dom": 1,
    "question": "Acting ethically is mandatory for (ISC)² members. Which of these is NOT considered unethical?",
    "options": [
      "Disrupting the intended use of the internet",
      "Seeking to gain unauthorized access to resources on thae internet",
      "Compromising the privacy of users",
      "Having fake social media profiles and accounts"
    ],
    "correct_idx": 3,
    "explanation": "Having fake social media profiles and accounts can be socially objectionable, but does not violate the (ISC)² Ethics Canons (see ISC2 Study Guide, chapter 1, module 5). That being said, seeking to gain unauthorized access to resources on the internet, compromising the privacy of users, and disrupting the intended use of the internet are all considered unethical behaviors by (ISC)², as well as by other similar professional organizations. Aside from being violations of professional codes of conduc",
    "short_explanation_en": "Having fake social media profiles and accounts can be socially objectionable, but does not violate the (ISC)² Ethics Canons (see ISC2 Study Guide, chapter 1, module 5).",
    "question_th": "การกระทำอย่างมีจริยธรรมเป็นสิ่งบังคับสำหรับสมาชิก (ISC)² ข้อใดไม่ถือว่าผิดจริยธรรม?",
    "options_th": [
      "การรบกวนการใช้งานอินเทอร์เน็ตตามที่ตั้งใจ",
      "การพยายามเข้าถึงทรัพยากรบนอินเทอร์เน็ตโดยไม่ได้รับอนุญาต",
      "การละเมิดความเป็นส่วนตัวของผู้ใช้",
      "การมีโปรไฟล์และบัญชีโซเชียลมีเดียปลอม"
    ],
    "explanation_th": "การมีโปรไฟล์และบัญชีโซเชียลมีเดียปลอมอาจน่ารังเกียจในทางสังคม แต่ไม่ได้ละเมิดจรรยาบรรณของ (ISC)² อย่างไรก็ตาม การพยายามเข้าถึงทรัพยากรบนอินเทอร์เน็ตโดยไม่ได้รับอนุญาต การละเมิดความเป็นส่วนตัวของผู้ใช้ และการรบกวนการใช้งานอินเทอร์เน็ตตามที่ตั้งใจ ล้วนถือเป็นพฤติกรรมที่ผิดจริยธรรมโดย (ISC)²"
  },
  {
    "id": 304,
    "dom": 1,
    "question": "Which of these is NOT a security principle?",
    "options": [
      "Security in Depth (SID)",
      "Zero Trust model",
      "Least Privilege",
      "Separation of Duties"
    ],
    "correct_idx": 0,
    "explanation": "Security in Depth (SID) is not a security principle, but a security model that involves implementing multiple layers of security controls, so as to protect against threats and reduce the risk of a successful attack. In Security in Depth, the idea is to create a multi-layered defense system that includes both technical controls (such as firewalls and intrusion detection systems) and administrative controls (such as policies and procedures).",
    "short_explanation_en": "Security in Depth (SID) is not a security principle, but a security model that involves implementing multiple layers of security controls, so as to protect against threats and reduce the risk of a successful attack. In Security in Depth, the idea is to create a multi-layered defense system that includes both technical controls (such as firewalls and intrusion detection systems) and administrative controls (such as policies and procedures).",
    "question_th": "ข้อใดไม่ใช่หลักการความปลอดภัย?",
    "options_th": [
      "Security in Depth (SID)",
      "Zero Trust model",
      "Least Privilege",
      "Separation of Duties"
    ],
    "explanation_th": "Security in Depth (SID) ไม่ใช่หลักการความปลอดภัย แต่เป็นโมเดลความปลอดภัยที่เกี่ยวข้องกับการนำการควบคุมความปลอดภัยหลายชั้นมาใช้ เพื่อป้องกันภัยคุกคามและลดความเสี่ยงของการโจมตีที่สำเร็จ"
  },
  {
    "id": 305,
    "dom": 1,
    "question": "Which of these is not a common goal of a cybersecurity attacker?",
    "options": [
      "Allocation",
      "Alteration",
      "Disclosure",
      "Denial"
    ],
    "correct_idx": 0,
    "explanation": "The three most common goals of cybersecurity attackers are disclosure, alteration, and denial (DAD), which correspond directly to to the cybersecurity triad: confidentiality, integrity, and availability (CIA) (see ISC2 Study Guide, chapter 1, module 1). Allocation means assigning controls to specific system elements responsible for providing a security or privacy capability (e.g., access control systems, routers, servers, etc.), and therefore is not a common goal of a cybersecurity attacker.",
    "short_explanation_en": "The three most common goals of cybersecurity attackers are disclosure, alteration, and denial (DAD), which correspond directly to to the cybersecurity triad: confidentiality, integrity, and availability (CIA) (see ISC2 Study Guide,...",
    "question_th": "ข้อใดไม่ใช่เป้าหมายทั่วไปของผู้โจมตีความปลอดภัยไซเบอร์?",
    "options_th": [
      "Allocation",
      "Alteration",
      "Disclosure",
      "Denial"
    ],
    "explanation_th": "เป้าหมายทั่วไปสามประการของผู้โจมตีความปลอดภัยไซเบอร์คือ disclosure, alteration และ denial (DAD) ซึ่งสอดคล้องโดยตรงกับสามเสาหลักของความปลอดภัยไซเบอร์: confidentiality, integrity และ availability (CIA) Allocation หมายถึงการกำหนดการควบคุมให้กับองค์ประกอบระบบเฉพาะที่รับผิดชอบในการให้ความสามารถด้านความปลอดภัยหรือความเป็นส่วนตัว จึงไม่ใช่เป้าหมายทั่วไปของผู้โจมตี"
  },
  {
    "id": 308,
    "dom": 1,
    "question": "In the context of risk management, which information does ALE outline?",
    "options": [
      "The expected cost per year of not performing a given risk-mitigating action",
      "The business impact of a risk",
      "The percentage of Asset Lost Efficiency",
      "The probability of a risk coming to pass in a given year"
    ],
    "correct_idx": 0,
    "explanation": "The Annualized Loss Expectancy (ALE) is a standard metric of risk exposure that refers to the expected cost per year of a given risk if it is not mitigated. The business impact of a risk is technically considered a loss, and is better captured by a metric called Single Loss Expectancy (see ISC2 Study Guide, chapter 1, module 2). The probability of a risk coming to pass in a given year is best captured by a metric called Annualized Rate of Occurrence (ARO). Asset Lost Efficiency is a misleading t",
    "short_explanation_en": "The Annualized Loss Expectancy (ALE) is a standard metric of risk exposure that refers to the expected cost per year of a given risk if it is not mitigated.",
    "question_th": "ในบริบทของการบริหารความเสี่ยง ALE ให้ข้อมูลใด?",
    "options_th": [
      "ต้นทุนที่คาดว่าจะเกิดขึ้นต่อปีของการไม่ดำเนินการลดความเสี่ยงที่กำหนด",
      "ผลกระทบทางธุรกิจของความเสี่ยง",
      "เปอร์เซ็นต์ของ Asset Lost Efficiency",
      "ความน่าจะเป็นที่ความเสี่ยงจะเกิดขึ้นในปีที่กำหนด"
    ],
    "explanation_th": "Annualized Loss Expectancy (ALE) เป็นตัวชี้วัดมาตรฐานของการเปิดรับความเสี่ยงที่หมายถึงต้นทุนที่คาดว่าจะเกิดขึ้นต่อปีของความเสี่ยงที่กำหนดหากไม่ได้รับการลด ผลกระทบทางธุรกิจของความเสี่ยงถือเป็นการสูญเสียทางเทคนิค และถูกจับได้ดีกว่าด้วยตัวชี้วัดที่เรียกว่า Single Loss Expectancy"
  },
  {
    "id": 309,
    "dom": 1,
    "question": "Which of these techniques is PRIMARILY used to ensure data integrity?",
    "options": [
      "Message Digest",
      "Content Encryption",
      "Backups",
      "Hashing"
    ],
    "correct_idx": 0,
    "explanation": "Data integrity means that a message has not been tampered with or altered. A Message Digest ensures the integrity of any message data that is transmitted over an insecure channel (since a channel that may alter the message's content) (see ISC2 Study Guide, chapter 1, module 1). Cryptographic hash functions (like MD5 or SHA-256) create a fixed-length digital fingerprint of the message data called the Message Digest. If the Message Digest does not match, then the message's integrity has been compr",
    "short_explanation_en": "Data integrity means that a message has not been tampered with or altered.",
    "question_th": "เทคนิคใดถูกใช้เป็นหลักเพื่อรับประกันความถูกต้องครบถ้วนของข้อมูล (Data integrity)?",
    "options_th": [
      "Message Digest",
      "Content Encryption",
      "Backups",
      "Hashing"
    ],
    "explanation_th": "ความถูกต้องครบถ้วนของข้อมูลหมายความว่าข้อความไม่ถูกดัดแปลงหรือเปลี่ยนแปลง Message Digest รับประกันความถูกต้องครบถ้วนของข้อมูลข้อความใด ๆ ที่ถูกส่งผ่านช่องทางที่ไม่ปลอดภัย ฟังก์ชันแฮชเข้ารหัส (เช่น MD5 หรือ SHA-256) สร้างลายนิ้วมือดิจิทัลความยาวคงที่ของข้อมูลข้อความที่เรียกว่า Message Digest"
  },
  {
    "id": 313,
    "dom": 1,
    "question": "When looking for cybersecurity insurance, which of these is the MOST IMPORTANT objective?",
    "options": [
      "Risk acceptance",
      "Risk transference",
      "Risk avoidance",
      "Risk spreading"
    ],
    "correct_idx": 1,
    "explanation": "The purpose of any insurance is to transfer risk from one party to another. The insurer is obligated to indemnify the insured for a loss caused by an unexpected event, over the course of a definite and mutually-agreed period of time. Risk avoidance consists in avoiding or eliminating the actions and conditions that give rise to the risk. Risk spreading consists in spreading a significant amount of risk over a larger part of the organization or activity, namely by manipulating the sequence or siz",
    "short_explanation_en": "The purpose of any insurance is to transfer risk from one party to another.",
    "question_th": "เมื่อมองหาประกันภัยความปลอดภัยไซเบอร์ ข้อใดคือวัตถุประสงค์ที่สำคัญที่สุด?",
    "options_th": [
      "Risk acceptance",
      "Risk transference",
      "Risk avoidance",
      "Risk spreading"
    ],
    "explanation_th": "วัตถุประสงค์ของการประกันภัยใด ๆ คือการโอนความเสี่ยงจากฝ่ายหนึ่งไปยังอีกฝ่ายหนึ่ง ผู้รับประกันมีหน้าที่ชดเชยผู้เอาประกันสำหรับความสูญเสียที่เกิดจากเหตุการณ์ที่ไม่คาดคิดตลอดระยะเวลาที่กำหนดและตกลงร่วมกัน Risk avoidance คือการหลีกเลี่ยงหรือขจัดการกระทำและเงื่อนไขที่ก่อให้เกิดความเสี่ยง"
  },
  {
    "id": 317,
    "dom": 1,
    "question": "(★) Which of these properties is NOT guaranteed by a Message Authentication Code (MAC)?",
    "options": [
      "Authenticity",
      "Anonymity",
      "Integrity",
      "Non-repudiation"
    ],
    "correct_idx": 1,
    "explanation": "A Message Authentication Code (MAC) does not guarantee anonymity. MAC is a cryptographic function that guarantees a message's integrity, authenticity, and non-repudiation. In particular: Integrity is the ability of the MAC to detect any changes that may have occurred to a message during either transmission or storage. A MAC provides this by generating a unique code for the message based on its contents, as well as a secret key that is shared between the sender and the receiver. If any changes ar",
    "short_explanation_en": "A Message Authentication Code (MAC) does not guarantee anonymity.",
    "question_th": "คุณสมบัติใดที่ Message Authentication Code (MAC) ไม่ได้รับประกัน?",
    "options_th": [
      "Authenticity",
      "Anonymity",
      "Integrity",
      "Non-repudiation"
    ],
    "explanation_th": "Message Authentication Code (MAC) ไม่รับประกันความไม่เปิดเผยตัวตน (Anonymity) MAC เป็นฟังก์ชันการเข้ารหัสที่รับประกันความถูกต้องครบถ้วน ความแท้จริง และการไม่ปฏิเสธของข้อความ Integrity คือความสามารถของ MAC ในการตรวจจับการเปลี่ยนแปลงใด ๆ ที่อาจเกิดขึ้นกับข้อความระหว่างการส่งหรือการจัดเก็บ"
  },
  {
    "id": 319,
    "dom": 1,
    "question": "Which of these is part of the canons (ISC)² code of ethics?",
    "options": [
      "Provide diligent and competent services to stakeholders",
      "Advance and protect the profession",
      "Prevent and detect unauthorized use of digital assets in a society",
      "Act always in the best interest of your client"
    ],
    "correct_idx": 1,
    "explanation": "The four canons of ISC2 are (see ISC2 Study Guide, chapter 1, module 5): Advance and protect the profession; Act honorably, honestly, justly, responsibly and legally; Provide diligent and competent service to principals; Protect society, the common good, necessary public trust and confidence and the infrastructure. Although some options seem right, only 'Advance and protect the profession' is correct.",
    "short_explanation_en": "The four canons of ISC2 are (see ISC2 Study Guide, chapter 1, module 5): Advance and protect the profession; Act honorably, honestly, justly, responsibly and legally; Provide diligent and competent service to principals; Protect society, the common good, necessary public trust and confidence and the infrastructure. Although some options seem right, only 'Advance and protect the profession' is correct.",
    "question_th": "ข้อใดเป็นส่วนหนึ่งของจรรยาบรรณ (ISC)² code of ethics?",
    "options_th": [
      "Provide diligent and competent services to stakeholders",
      "Advance and protect the profession",
      "Prevent and detect unauthorized use of digital assets in a society",
      "Act always in the best interest of your client"
    ],
    "explanation_th": "จรรยาบรรณสี่ข้อของ ISC2 คือ: การปกป้องและส่งเสริมวิชาชีพ (Advance and protect the profession); การกระทำอย่างมีเกียรติ ซื่อสัตย์ ยุติธรรม รับผิดชอบ และถูกกฎหมาย; การให้บริการอย่างขยันขันแข็งและมีความสามารถต่อผู้ว่าจ้าง; การปกป้องสังคม ผลประโยชน์ส่วนรวม ความไว้วางใจสาธารณะ และโครงสร้างพื้นฐาน แม้ตัวเลือกบางข้อจะดูเหมือนถูกต้อง แต่มีเพียง 'Advance and protect the profession' เท่านั้นที่ถูกต้อง"
  },
  {
    "id": 320,
    "dom": 1,
    "question": "Which of these is NOT one of the (ISC)² ethics canons?",
    "options": [
      "Act honorably, honestly, justly, responsibly, and legally",
      "Consider the social consequences of the systems you are designing",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Provide diligent and competent service to principals"
    ],
    "correct_idx": 1,
    "explanation": "Considering the social consequences of the systems you are designing is a valid concern, since the professional must abide by the canon of their protecting society, the common good, necessary public trust and confidence, and the infrastructure. However, this is not in itself a canon. The four canons of (ISC)² are: Protect society, the common good, necessary public trust and confidence, and the infrastructure; Act honorably, honestly, justly, responsibly, and legally; Provide diligent and compete",
    "short_explanation_en": "Considering the social consequences of the systems you are designing is a valid concern, since the professional must abide by the canon of their protecting society, the common good, necessary public trust and confidence, and the...",
    "question_th": "ข้อใดไม่ใช่หนึ่งในจรรยาบรรณของ (ISC)²?",
    "options_th": [
      "Act honorably, honestly, justly, responsibly, and legally",
      "Consider the social consequences of the systems you are designing",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Provide diligent and competent service to principals"
    ],
    "explanation_th": "การพิจารณาผลกระทบทางสังคมของระบบที่คุณกำลังออกแบบเป็นข้อกังวลที่ถูกต้อง เนื่องจากผู้เชี่ยวชาญต้องปฏิบัติตามจรรยาบรรณของการปกป้องสังคม ผลประโยชน์ส่วนรวม ความไว้วางใจสาธารณะ และโครงสร้างพื้นฐาน อย่างไรก็ตาม สิ่งนี้ไม่ใช่จรรยาบรรณในตัวมันเอง จรรยาบรรณทั้งสี่ของ (ISC)² คือ: การปกป้องสังคม, การกระทำอย่างมีเกียรติ, การให้บริการอย่างขยันขันแข็ง, และการปกป้องวิชาชีพ"
  },
  {
    "id": 321,
    "dom": 1,
    "question": "(★) Which of these is the PRIMARY objective of the PCI-DSS standard?",
    "options": [
      "Personally Identifiable Information (PII)",
      "Change Management",
      "Secure Credit Cards Payments",
      "Protected Health Information (PHI)"
    ],
    "correct_idx": 2,
    "explanation": "PCI-DSS (Payment Card Industry Data Security Standard) is a standard used in the payment card industry. Protected Health Information (PHI) is any individually identifiable health information that is created, used or disclosed while providing healthcare services. The Health Insurance Portability and Accountability Act (HIPAA) is a United States law aimed at protecting PHI. Personally Identifiable Information (PII) is any information that is capable of identifying an individual. PII is protected b",
    "short_explanation_en": "PCI-DSS (Payment Card Industry Data Security Standard) is a standard used in the payment card industry.",
    "question_th": "ข้อใดคือวัตถุประสงค์หลักของมาตรฐาน PCI-DSS?",
    "options_th": [
      "Personally Identifiable Information (PII)",
      "Change Management",
      "Secure Credit Cards Payments",
      "Protected Health Information (PHI)"
    ],
    "explanation_th": "PCI-DSS (Payment Card Industry Data Security Standard) เป็นมาตรฐานที่ใช้ในอุตสาหกรรมบัตรชำระเงิน Protected Health Information (PHI) คือข้อมูลสุขภาพที่สามารถระบุตัวบุคคลได้ ซึ่งถูกสร้าง ใช้ หรือเปิดเผยขณะให้บริการด้านการดูแลสุขภาพ HIPAA เป็นกฎหมายของสหรัฐอเมริกาที่มุ่งปกป้อง PHI"
  },
  {
    "id": 327,
    "dom": 1,
    "question": "Which of these entities is responsible for signing an organization's policies?",
    "options": [
      "Human Resources",
      "Security engineer",
      "Financial Department",
      "Senior management"
    ],
    "correct_idx": 3,
    "explanation": "Senior management is typically responsible for setting the organization's overall direction and strategy, and for ensuring that policies and procedures are in place to support that strategy. Therefore, it is the senior management's responsibilityto sign the organization's policies. Although other departments and stakeholders may be called in to develop and draft policies, it is ultimately the responsibility of senior management to sign off on the policies, indicating their approval and support.",
    "short_explanation_en": "Senior management is typically responsible for setting the organization's overall direction and strategy, and for ensuring that policies and procedures are in place to support that strategy.",
    "question_th": "หน่วยงานใดต่อไปนี้รับผิดชอบในการลงนามนโยบายขององค์กร?",
    "options_th": [
      "Human Resources",
      "Security engineer",
      "Financial Department",
      "Senior management"
    ],
    "explanation_th": "ผู้บริหารระดับสูงมักรับผิดชอบในการกำหนดทิศทางและกลยุทธ์โดยรวมขององค์กร และรับประกันว่ามีนโยบายและขั้นตอนเพื่อสนับสนุนกลยุทธ์นั้น ดังนั้น ผู้บริหารระดับสูงจึงมีความรับผิดชอบในการลงนามนโยบายขององค์กร"
  },
  {
    "id": 328,
    "dom": 1,
    "question": "Which of these terms refers to threats with unusually high technical and operational sophistication, spanning months or even years?",
    "options": [
      "Rootkit",
      "APT",
      "Side-channel",
      "Ping of death"
    ],
    "correct_idx": 1,
    "explanation": "An Advanced Persistent Threat is a threat with unusually high technical and operational sophistication. APTs can be difficult to detect and defend against, as the attackers often use sophisticated techniques to evade detection, and to remain stealthy for extended periods of time. APTs are typically carried out by highly skilled and well-funded attackers (such as nation-state actors or well-organized criminal groups), and often target specific organizations or individuals with the goal of stealin",
    "short_explanation_en": "An Advanced Persistent Threat is a threat with unusually high technical and operational sophistication.",
    "question_th": "คำใดหมายถึงภัยคุกคามที่มีความซับซ้อนทางเทคนิคและการปฏิบัติการที่สูงผิดปกติ กินระยะเวลาหลายเดือนหรือหลายปี?",
    "options_th": [
      "Rootkit",
      "APT",
      "Side-channel",
      "Ping of death"
    ],
    "explanation_th": "Advanced Persistent Threat คือภัยคุกคามที่มีความซับซ้อนทางเทคนิคและการปฏิบัติการที่สูงผิดปกติ APT อาจตรวจจับและป้องกันได้ยาก เนื่องจากผู้โจมตีมักใช้เทคนิคที่ซับซ้อนเพื่อหลบเลี่ยงการตรวจจับและคงอยู่อย่างลับ ๆ เป็นเวลานาน"
  },
  {
    "id": 333,
    "dom": 1,
    "question": "In the event of non-compliance, which of these can have considerable financial consequences for an organization?",
    "options": [
      "Policies",
      "Regulations",
      "Guidelines",
      "Standards"
    ],
    "correct_idx": 1,
    "explanation": "Regulations are created by governments or national authorities, and often lead to financial fines for infringement. For example, the EU's GDPR prescribes penalties of up to 2% of annual revenue. Standards are created by governing or professional bodies (not by governments), and thus are not legally enforceable. Regulations are mandatory, while standards are voluntary. Policies and guidelines are internal to organizations, and are therefore not subject to financial penalties (see ISC2 Study Guide",
    "short_explanation_en": "Regulations are created by governments or national authorities, and often lead to financial fines for infringement.",
    "question_th": "ในกรณีที่ไม่ปฏิบัติตาม ข้อใดสามารถส่งผลกระทบทางการเงินอย่างมากต่อองค์กร?",
    "options_th": [
      "Policies",
      "Regulations",
      "Guidelines",
      "Standards"
    ],
    "explanation_th": "กฎระเบียบ (Regulations) ถูกสร้างขึ้นโดยรัฐบาลหรือหน่วยงานระดับชาติ และมักนำไปสู่บทลงโทษทางการเงินสำหรับการฝ่าฝืน ตัวอย่างเช่น GDPR ของ EU กำหนดบทลงโทษสูงถึง 2% ของรายได้ต่อปี มาตรฐาน (Standards) ถูกสร้างขึ้นโดยหน่วยงานกำกับดูแลหรือวิชาชีพ (ไม่ใช่โดยรัฐบาล) จึงไม่มีผลบังคับใช้ทางกฎหมาย"
  },
  {
    "id": 338,
    "dom": 1,
    "question": "(★) Which is the PRIMARY focus of the ISO 27002 standard?",
    "options": [
      "Health Insurance Portability and Accountability Act (HIPAA)",
      "Information Security Management System (ISMS)",
      "Risk Management",
      "Application Security"
    ],
    "correct_idx": 1,
    "explanation": "ISO 27002 is a supplementary standard aimed at guiding implementation controls in order to maintain security controls for Information Security Management Systems (ISMS), as defined in ISO 27001. Among many other aspects, these security controls comprise application security. Risk management is an activity that is touched on in this standard, but is not its primary focus (it is the focus of the ISO 31000 standard). HIPAA is the United States law that governs the privacy of health information.",
    "short_explanation_en": "ISO 27002 is a supplementary standard aimed at guiding implementation controls in order to maintain security controls for Information Security Management Systems (ISMS), as defined in ISO 27001. Among many other aspects, these security controls comprise application security. Risk management is an activity that is touched on in this standard, but is not its primary focus (it is the focus of the ISO 31000 standard). HIPAA is the United States law that governs the privacy of health information.",
    "question_th": "ข้อใดคือจุดเน้นหลักของมาตรฐาน ISO 27002?",
    "options_th": [
      "Health Insurance Portability and Accountability Act (HIPAA)",
      "Information Security Management System (ISMS)",
      "Risk Management",
      "Application Security"
    ],
    "explanation_th": "ISO 27002 เป็นมาตรฐานเสริมที่มุ่งให้แนวทางการนำการควบคุมมาใช้เพื่อรักษาความปลอดภัยของ Information Security Management Systems (ISMS) ตามที่กำหนดใน ISO 27001 การบริหารความเสี่ยงเป็นกิจกรรมที่ถูกกล่าวถึงในมาตรฐานนี้ แต่ไม่ใช่จุดเน้นหลัก (ซึ่งเป็นจุดเน้นของมาตรฐาน ISO 31000)"
  },
  {
    "id": 341,
    "dom": 1,
    "question": "Which of these is a type of detective access control?",
    "options": [
      "Bollards",
      "Movement Sensors",
      "Turnstiles",
      "Firewalls"
    ],
    "correct_idx": 1,
    "explanation": "Detective controls alert us to security problems by constantly monitoring activity and recording information, so as to take immediate action in the event of a security control failure (such as bollards or turnstiles). Therefore, a movement sensor is considered a detective control, and is complementary to physical controls. Firewalls are network devices used to filter network traffic, and are thus considered technical controls. Logging and monitoring tools, such as Security Information and Event",
    "short_explanation_en": "Detective controls alert us to security problems by constantly monitoring activity and recording information, so as to take immediate action in the event of a security control failure (such as bollards or turnstiles).",
    "question_th": "ข้อใดเป็นประเภทหนึ่งของการควบคุมแบบตรวจจับการเข้าถึง (Detective access control)?",
    "options_th": [
      "Bollards",
      "Movement Sensors",
      "Turnstiles",
      "Firewalls"
    ],
    "explanation_th": "การควบคุมแบบตรวจจับ (Detective controls) แจ้งเตือนเราถึงปัญหาความปลอดภัยโดยการเฝ้าติดตามกิจกรรมอย่างต่อเนื่องและบันทึกข้อมูล เพื่อดำเนินการทันทีในกรณีที่การควบคุมความปลอดภัยล้มเหลว เซนเซอร์การเคลื่อนไหวจึงถือเป็นการควบคุมแบบตรวจจับ และเสริมการควบคุมทางกายภาพ"
  },
  {
    "id": 350,
    "dom": 1,
    "question": "Which part of the CIA Triad will be PRIMARILY jeopardized in a Distributed Denial Of Service (DDOS) attack?",
    "options": [
      "Accountability",
      "Availability",
      "Integrity",
      "Confidentiality"
    ],
    "correct_idx": 1,
    "explanation": "Distributed Denial-of-Service (DDoS) attacks are malicious attempts to block businesses from their traffic by flooding a target server, service or network with malicious coordinated traffic generated by a wide number of systems on the internet. The goal of DDoS attacks is to compromise availability (see ISC2 Study Guide, chapter 1, module 1 and also chapter 4, module 3) . A DDoS attack does not target confidentiality, but it may accidentally compromise integrity. Accountability is the property t",
    "short_explanation_en": "Distributed Denial-of-Service (DDoS) attacks are malicious attempts to block businesses from their traffic by flooding a target server, service or network with malicious coordinated traffic generated by a wide number of systems on the...",
    "question_th": "ส่วนใดของ CIA Triad จะถูกคุกคามหลักในการโจมตีแบบ Distributed Denial Of Service (DDOS)?",
    "options_th": [
      "Accountability",
      "Availability",
      "Integrity",
      "Confidentiality"
    ],
    "explanation_th": "การโจมตีแบบ Distributed Denial-of-Service (DDoS) คือความพยายามที่เป็นอันตรายในการปิดกั้นธุรกิจจากทราฟฟิกของตน โดยการท่วมเซิร์ฟเวอร์ บริการ หรือเครือข่ายเป้าหมายด้วยทราฟฟิกที่เป็นอันตรายที่ประสานงานกันจากระบบจำนวนมากบนอินเทอร์เน็ต เป้าหมายของการโจมตี DDoS คือการคุกคาม availability"
  },
  {
    "id": 367,
    "dom": 1,
    "question": "A security consultant hired to design the security policies for the PHI within an organization will be primarily handling:",
    "options": [
      "Personal Health information",
      "Public Health information",
      "Procedural Health information",
      "Protected Health information"
    ],
    "correct_idx": 3,
    "explanation": "PHI is an acronym that stands for Protected Health Information (see ISC2 Study Guide, chapter 1, module 1). The remaining options are incorrect.",
    "short_explanation_en": "PHI is an acronym that stands for Protected Health Information (see ISC2 Study Guide, chapter 1, module 1).",
    "question_th": "ที่ปรึกษาด้านความปลอดภัยที่ถูกจ้างให้ออกแบบนโยบายความปลอดภัยสำหรับ PHI ภายในองค์กร จะจัดการกับ:",
    "options_th": [
      "Personal Health information",
      "Public Health information",
      "Procedural Health information",
      "Protected Health information"
    ],
    "explanation_th": "PHI เป็นตัวย่อของ Protected Health Information (ISC2 Study Guide บทที่ 1 โมดูล 1) ตัวเลือกที่เหลือไม่ถูกต้อง"
  },
  {
    "id": 372,
    "dom": 1,
    "question": "An organization deploys security guards at the facility entrance, requires badge access at internal doors, and enforces multi-factor authentication on servers. Which security strategy is being demonstrated?",
    "options": [
      "Single Point of Failure",
      "Defense in Depth",
      "Security through Obscurity",
      "Separation of Duties"
    ],
    "correct_idx": 1,
    "explanation": "Defense in Depth (layered security) uses multiple independent defensive layers across administrative, physical, and technical domains so that if one control fails, subsequent controls prevent a compromise.",
    "short_explanation_en": "Defense in Depth uses multiple independent defensive layers across administrative, physical, and technical domains.",
    "question_th": "องค์กรจัดวางเจ้าหน้าที่รักษาความปลอดภัยที่ทางเข้าอาคาร กำหนดให้ใช้บัตรแตะผ่านประตูภายใน และบังคับใช้การยืนยันตัวตนแบบหลายปัจจัยบนเซิร์ฟเวอร์ กลยุทธ์ความปลอดภัยใดกำลังถูกนำมาใช้?",
    "options_th": [
      "Single Point of Failure (จุดล้มเหลวเพียงจุดเดียว)",
      "Defense in Depth (การป้องกันเชิงลึก)",
      "Security through Obscurity (ความปลอดภัยโดยการปกปิด)",
      "Separation of Duties (การแบ่งแยกหน้าที่)"
    ],
    "explanation_th": "Defense in Depth (การป้องกันเชิงลึกหรือการรักษาความปลอดภัยแบบหลายชั้น) ใช้การควบคุมอิสระหลายชั้นครอบคลุมด้านการบริหารจัดการ กายภาพ และทางเทคนิค เพื่อให้หากการควบคุมชั้นใดชั้นหนึ่งล้มเหลว การควบคุมในชั้นถัดไปยังคงป้องกันการถูกบุกรุกได้"
  },
  {
    "id": 373,
    "dom": 1,
    "question": "(★) When analyzing risks, which of these activities is required?",
    "options": [
      "Accepting all evaluated risks",
      "Identifying risks associated with loss of confidentiality",
      "Determining the likelihood of occurrence of a set of risks",
      "Selecting the appropriate controls"
    ],
    "correct_idx": 2,
    "explanation": "Determining the likelihood of occurrence of a set of risks involves estimating the likelihood that the identified risks will occur, along with the potential impact it could have on the organization. Once the likelihood of occurrence has been determined, the next step is to select the appropriate controls to mitigate those risks, such as encryption, access controls, or administrative controls (like policies and procedures). Identifying the risks associated with loss of confidentiality (such as un",
    "short_explanation_en": "Determining the likelihood of occurrence of a set of risks involves estimating the likelihood that the identified risks will occur, along with the potential impact it could have on the organization.",
    "question_th": "เมื่อวิเคราะห์ความเสี่ยง กิจกรรมใดต่อไปนี้จำเป็นต้องทำ?",
    "options_th": [
      "ยอมรับความเสี่ยงที่ประเมินแล้วทั้งหมด",
      "ระบุความเสี่ยงที่เกี่ยวข้องกับการสูญเสีย confidentiality",
      "กำหนดความน่าจะเป็นในการเกิดขึ้นของชุดความเสี่ยง",
      "เลือกการควบคุมที่เหมาะสม"
    ],
    "explanation_th": "การกำหนดความน่าจะเป็นในการเกิดขึ้นของชุดความเสี่ยงเกี่ยวข้องกับการประมาณความน่าจะเป็นที่ความเสี่ยงที่ระบุจะเกิดขึ้น พร้อมกับผลกระทบที่อาจเกิดขึ้นต่อองค์กร เมื่อกำหนดความน่าจะเป็นแล้ว ขั้นตอนถัดไปคือการเลือกการควบคุมที่เหมาะสมเพื่อลดความเสี่ยงเหล่านั้น"
  },
  {
    "id": 375,
    "dom": 1,
    "question": "(★) Which of these types of documents is usually THE LEAST formal?",
    "options": [
      "Standards",
      "Guidelines",
      "Policies",
      "Regulations"
    ],
    "correct_idx": 1,
    "explanation": "Of the document types listed above, guidelines are generally the least formal. Guidelines provide recommendations or suggestions for achieving a particular goal or objective. They are often less formal than standards and policies, and are used to specify best practices or recommended approaches. Standards are generally more formal than guidelines, and describe the requirements, specifications or characteristics that a product, service or system should possess. Policies are usually more formal th",
    "short_explanation_en": "Of the document types listed above, guidelines are generally the least formal.",
    "question_th": "เอกสารประเภทใดต่อไปนี้มักเป็นทางการน้อยที่สุด?",
    "options_th": [
      "Standards",
      "Guidelines",
      "Policies",
      "Regulations"
    ],
    "explanation_th": "ในบรรดาประเภทเอกสารที่ระบุข้างต้น แนวทาง (Guidelines) โดยทั่วไปเป็นทางการน้อยที่สุด แนวทางให้คำแนะนำหรือข้อเสนอแนะเพื่อบรรลุเป้าหมายหรือวัตถุประสงค์เฉพาะ มักเป็นทางการน้อยกว่ามาตรฐานและนโยบาย และใช้เพื่อระบุแนวปฏิบัติที่ดีที่สุดหรือแนวทางที่แนะนำ"
  },
  {
    "id": 384,
    "dom": 1,
    "question": "Which of the following is NOT part of the CIA Triad?",
    "options": [
      "Confidentiality",
      "Availability",
      "Authentication",
      "Integrity"
    ],
    "correct_idx": 2,
    "explanation": "The CIA Triad consists only of Confidentiality, Integrity, and Availability. Authentication is a supporting mechanism for CIA but is not one of the three core pillars.",
    "short_explanation_en": "The CIA Triad consists only of Confidentiality, Integrity, and Availability. Authentication is a supporting mechanism for CIA but is not one of the three core pillars.",
    "question_th": "องค์ประกอบใดไม่ใช่ส่วนหนึ่งของ CIA Triad?",
    "options_th": [
      "Confidentiality",
      "Availability",
      "Authentication",
      "Integrity"
    ],
    "explanation_th": "CIA Triad ประกอบด้วย Confidentiality (การรักษาความลับ), Integrity (ความถูกต้องครบถ้วน) และ Availability (ความพร้อมใช้งาน) เท่านั้น ส่วน Authentication เป็นกลไกที่สนับสนุน CIA แต่ไม่ใช่หนึ่งในสามเสาหลัก"
  },
  {
    "id": 385,
    "dom": 1,
    "question": "Data being altered without authorization during transmission is a violation of which principle?",
    "options": [
      "Availability",
      "Non-repudiation",
      "Confidentiality",
      "Integrity"
    ],
    "correct_idx": 3,
    "explanation": "Integrity refers to the accuracy and completeness of data. Unauthorized modification of data is a direct violation of Integrity.",
    "short_explanation_en": "Integrity refers to the accuracy and completeness of data. Unauthorized modification of data is a direct violation of Integrity.",
    "question_th": "การที่ข้อมูลถูกแก้ไขโดยไม่ได้รับอนุญาตระหว่างการส่ง ถือเป็นการละเมิดหลักการใด?",
    "options_th": [
      "Availability",
      "Non-repudiation",
      "Confidentiality",
      "Integrity"
    ],
    "explanation_th": "Integrity หมายถึงความถูกต้องครบถ้วนของข้อมูล การแก้ไขข้อมูลโดยไม่ได้รับอนุญาตคือการละเมิด Integrity โดยตรง"
  },
  {
    "id": 386,
    "dom": 1,
    "question": "A server is hit by a DDoS attack, preventing users from accessing the service. Which principle is being violated?",
    "options": [
      "Availability",
      "Confidentiality",
      "Integrity",
      "Accountability"
    ],
    "correct_idx": 0,
    "explanation": "DDoS prevents the system from providing normal service, which is a violation of the Availability principle.",
    "short_explanation_en": "DDoS prevents the system from providing normal service, which is a violation of the Availability principle.",
    "question_th": "เซิร์ฟเวอร์ถูกโจมตีแบบ DDoS จนผู้ใช้ไม่สามารถเข้าถึงบริการได้ นี่คือการละเมิดหลักการใด?",
    "options_th": [
      "Availability",
      "Confidentiality",
      "Integrity",
      "Accountability"
    ],
    "explanation_th": "DDoS ทำให้ระบบไม่สามารถให้บริการได้ตามปกติ จึงเป็นการละเมิดหลักการ Availability (ความพร้อมใช้งาน)"
  },
  {
    "id": 387,
    "dom": 1,
    "question": "What does IAAA stand for in the context of information security?",
    "options": [
      "Identification, Authentication, Authorization, Accountability",
      "Integrity, Access, Audit, Availability",
      "Identification, Access, Audit, Authentication",
      "Integration, Authentication, Authorization, Availability"
    ],
    "correct_idx": 0,
    "explanation": "IAAA is a foundational access control concept consisting of: Identification, Authentication, Authorization, and Accountability.",
    "short_explanation_en": "IAAA is a foundational access control concept consisting of: Identification, Authentication, Authorization, and Accountability.",
    "question_th": "IAAA ในบริบทความปลอดภัยสารสนเทศย่อมาจากอะไร?",
    "options_th": [
      "Identification, Authentication, Authorization, Accountability",
      "Integrity, Access, Audit, Availability",
      "Identification, Access, Audit, Authentication",
      "Integration, Authentication, Authorization, Availability"
    ],
    "explanation_th": "IAAA คือแนวคิดพื้นฐานของการควบคุมการเข้าถึง ได้แก่ Identification (ระบุตัวตน), Authentication (ยืนยันตัวตน), Authorization (กำหนดสิทธิ์) และ Accountability (ความรับผิดชอบตรวจสอบย้อนกลับได้)"
  },
  {
    "id": 388,
    "dom": 1,
    "question": "Which is the correct description of 'Non-repudiation'?",
    "options": [
      "Encrypting data during transmission",
      "Preventing a sender from denying they sent a message",
      "Restricting access rights based on role",
      "Backing up data for availability"
    ],
    "correct_idx": 1,
    "explanation": "Non-repudiation is a property that prevents a sender or actor from denying their actions — for example, through the use of digital signatures.",
    "short_explanation_en": "Non-repudiation is a property that prevents a sender or actor from denying their actions — for example, through the use of digital signatures.",
    "question_th": "ข้อใดคือคำอธิบายที่ถูกต้องของ 'Non-repudiation'?",
    "options_th": [
      "การเข้ารหัสข้อมูลระหว่างการส่ง",
      "การป้องกันไม่ให้ผู้ส่งปฏิเสธว่าไม่ได้ส่งข้อความ",
      "การจำกัดสิทธิ์การเข้าถึงตามบทบาท",
      "การสำรองข้อมูลเพื่อความพร้อมใช้งาน"
    ],
    "explanation_th": "Non-repudiation คือคุณสมบัติที่ทำให้ผู้ส่งหรือผู้กระทำการไม่สามารถปฏิเสธการกระทำของตนได้ เช่น การใช้ลายเซ็นดิจิทัล"
  },
  {
    "id": 389,
    "dom": 1,
    "question": "What is the purpose of a 'Preventive' security control category?",
    "options": [
      "Detecting events after they occur",
      "Stopping undesirable events before they happen",
      "Restoring systems after an incident",
      "Deterring attackers psychologically"
    ],
    "correct_idx": 1,
    "explanation": "Preventive controls aim to stop undesirable events from occurring in the first place, such as firewalls and encryption.",
    "short_explanation_en": "Preventive controls aim to stop undesirable events from occurring in the first place, such as firewalls and encryption.",
    "question_th": "การจัดประเภทควบคุมความปลอดภัยแบบ 'Preventive' มีวัตถุประสงค์เพื่ออะไร?",
    "options_th": [
      "ตรวจจับเหตุการณ์หลังเกิดขึ้น",
      "หยุดยั้งเหตุการณ์ไม่พึงประสงค์ก่อนเกิดขึ้น",
      "ฟื้นฟูระบบหลังเกิดเหตุ",
      "ยับยั้งผู้โจมตีทางจิตวิทยา"
    ],
    "explanation_th": "Preventive control มีเป้าหมายเพื่อป้องกันไม่ให้เหตุการณ์ไม่พึงประสงค์เกิดขึ้นตั้งแต่แรก เช่น ไฟร์วอลล์ การเข้ารหัส"
  },
  {
    "id": 390,
    "dom": 1,
    "question": "CCTV cameras installed to record abnormal events are primarily classified as which type of control?",
    "options": [
      "Corrective",
      "Detective",
      "Preventive",
      "Compensating"
    ],
    "correct_idx": 1,
    "explanation": "CCTV is used to detect and record events as they happen, making it a Detective control, though it may also have a secondary deterrent effect.",
    "short_explanation_en": "CCTV is used to detect and record events as they happen, making it a Detective control, though it may also have a secondary deterrent effect.",
    "question_th": "กล้องวงจรปิด (CCTV) ที่ติดตั้งเพื่อบันทึกเหตุการณ์ผิดปกติ จัดเป็นการควบคุมประเภทใดเป็นหลัก?",
    "options_th": [
      "Corrective",
      "Detective",
      "Preventive",
      "Compensating"
    ],
    "explanation_th": "CCTV ใช้สำหรับตรวจจับและบันทึกเหตุการณ์ที่เกิดขึ้น จึงจัดเป็น Detective control แม้บางครั้งอาจมีผลยับยั้งทางจิตวิทยาด้วย"
  },
  {
    "id": 391,
    "dom": 1,
    "question": "A warning sign reading 'This area is under CCTV surveillance', intended to discourage wrongdoers from entering, is classified as which type of control?",
    "options": [
      "Deterrent",
      "Detective",
      "Corrective",
      "Recovery"
    ],
    "correct_idx": 0,
    "explanation": "A Deterrent control aims to discourage or make a wrongdoer hesitant to act, rather than providing direct technical prevention.",
    "short_explanation_en": "A Deterrent control aims to discourage or make a wrongdoer hesitant to act, rather than providing direct technical prevention.",
    "question_th": "ป้ายเตือน 'พื้นที่มีกล้องวงจรปิด' ที่ติดไว้เพื่อไม่ให้ผู้ไม่หวังดีเข้ามา จัดเป็นการควบคุมประเภทใด?",
    "options_th": [
      "Deterrent",
      "Detective",
      "Corrective",
      "Recovery"
    ],
    "explanation_th": "Deterrent control มีเป้าหมายเพื่อยับยั้งหรือทำให้ผู้ไม่หวังดีลังเลที่จะกระทำการ ไม่ใช่การป้องกันทางเทคนิคโดยตรง"
  },
  {
    "id": 392,
    "dom": 1,
    "question": "Restoring a system from backup after a ransomware attack is classified as which type of control?",
    "options": [
      "Preventive",
      "Detective",
      "Corrective",
      "Deterrent"
    ],
    "correct_idx": 2,
    "explanation": "A Corrective control's role is to fix and restore a system to its normal state after an undesirable event has occurred.",
    "short_explanation_en": "A Corrective control's role is to fix and restore a system to its normal state after an undesirable event has occurred.",
    "question_th": "การกู้คืนระบบจากแบ็กอัพหลังถูกแรนซัมแวร์โจมตี จัดเป็นการควบคุมประเภทใด?",
    "options_th": [
      "Preventive",
      "Detective",
      "Corrective",
      "Deterrent"
    ],
    "explanation_th": "Corrective control มีหน้าที่แก้ไขและฟื้นฟูระบบให้กลับสู่สภาวะปกติหลังเกิดเหตุการณ์ไม่พึงประสงค์"
  },
  {
    "id": 393,
    "dom": 1,
    "question": "How does a security Policy differ from a Procedure?",
    "options": [
      "Policy is specific technical instructions, while Procedure is a broad concept",
      "Policy sets high-level direction and mandatory requirements, while Procedure specifies detailed operational steps",
      "Both are the same document and are interchangeable",
      "Policy applies only to IT, while Procedure applies organization-wide"
    ],
    "correct_idx": 1,
    "explanation": "A Policy is a high-level document defining an organization's intent and mandatory requirements, while a Procedure provides detailed step-by-step instructions to achieve that Policy.",
    "short_explanation_en": "A Policy is a high-level document defining an organization's intent and mandatory requirements, while a Procedure provides detailed step-by-step instructions to achieve that Policy.",
    "question_th": "นโยบายรักษาความปลอดภัย (Policy) แตกต่างจากขั้นตอนปฏิบัติ (Procedure) อย่างไร?",
    "options_th": [
      "Policy เป็นคำสั่งทางเทคนิคเฉพาะ ส่วน Procedure เป็นแนวคิดกว้าง",
      "Policy กำหนดทิศทางระดับสูงและข้อบังคับ ส่วน Procedure ระบุขั้นตอนปฏิบัติโดยละเอียด",
      "ทั้งสองอย่างเป็นเอกสารเดียวกัน ใช้แทนกันได้",
      "Policy ใช้เฉพาะฝ่าย IT ส่วน Procedure ใช้ทั้งองค์กร"
    ],
    "explanation_th": "Policy คือเอกสารระดับสูงที่กำหนดเจตนารมณ์และข้อบังคับขององค์กร ส่วน Procedure คือคำแนะนำแบบเป็นขั้นตอนที่ละเอียดเพื่อให้บรรลุ Policy นั้น"
  },
  {
    "id": 394,
    "dom": 1,
    "question": "What type of document provides 'should-do' recommendations but is not mandatory like a Policy?",
    "options": [
      "Standard",
      "Guideline",
      "Procedure",
      "Baseline"
    ],
    "correct_idx": 1,
    "explanation": "A Guideline is flexible, non-mandatory advice unlike a Standard or Policy, but provides good practice direction.",
    "short_explanation_en": "A Guideline is flexible, non-mandatory advice unlike a Standard or Policy, but provides good practice direction.",
    "question_th": "เอกสารประเภทใดที่ให้คำแนะนำแบบ 'ควรทำ' แต่ไม่ได้บังคับเหมือน Policy?",
    "options_th": [
      "Standard",
      "Guideline",
      "Procedure",
      "Baseline"
    ],
    "explanation_th": "Guideline คือคำแนะนำที่ยืดหยุ่น ไม่บังคับเคร่งครัดเหมือน Standard หรือ Policy แต่ให้แนวทางปฏิบัติที่ดี"
  },
  {
    "id": 395,
    "dom": 1,
    "question": "What characterizes a 'Standard' in the security document hierarchy?",
    "options": [
      "A mandatory requirement specifying particular details to support a Policy",
      "A broad executive-level concept",
      "Optional advice one may or may not follow",
      "A post-incident record"
    ],
    "correct_idx": 0,
    "explanation": "A Standard is a mandatory requirement that specifies particular details — such as requiring a minimum password length of 12 characters — to support compliance with a Policy.",
    "short_explanation_en": "A Standard is a mandatory requirement that specifies particular details — such as requiring a minimum password length of 12 characters — to support compliance with a Policy.",
    "question_th": "'Standard' ในลำดับชั้นเอกสารด้านความปลอดภัยมีลักษณะอย่างไร?",
    "options_th": [
      "เป็นข้อกำหนดบังคับที่ระบุรายละเอียดเฉพาะเจาะจงเพื่อสนับสนุน Policy",
      "เป็นแนวคิดกว้างระดับผู้บริหาร",
      "เป็นคำแนะนำที่เลือกทำหรือไม่ทำก็ได้",
      "เป็นบันทึกเหตุการณ์หลังเกิดปัญหา"
    ],
    "explanation_th": "Standard คือข้อกำหนดที่บังคับใช้และระบุรายละเอียดเฉพาะ เช่น ต้องใช้รหัสผ่านความยาวขั้นต่ำ 12 ตัวอักษร เพื่อให้สอดคล้องกับ Policy"
  },
  {
    "id": 396,
    "dom": 1,
    "question": "What does the 'Least Privilege' principle mean?",
    "options": [
      "Giving all users equal permissions",
      "Giving only the permissions necessary to perform a job function",
      "Giving maximum privileges to all administrators",
      "Restricting permissions only during daytime hours"
    ],
    "correct_idx": 1,
    "explanation": "Least Privilege means granting access only to the extent necessary for a person's job duties, reducing risk if an account is compromised or misused.",
    "short_explanation_en": "Least Privilege means granting access only to the extent necessary for a person's job duties, reducing risk if an account is compromised or misused.",
    "question_th": "หลักการ 'Least Privilege' หมายถึงอะไร?",
    "options_th": [
      "ให้สิทธิ์ผู้ใช้ทุกคนเท่ากันหมด",
      "ให้สิทธิ์เท่าที่จำเป็นต่อการปฏิบัติหน้าที่เท่านั้น",
      "ให้สิทธิ์สูงสุดแก่ผู้ดูแลระบบทุกคน",
      "จำกัดสิทธิ์เฉพาะช่วงเวลากลางวัน"
    ],
    "explanation_th": "Least Privilege คือการให้สิทธิ์การเข้าถึงเท่าที่จำเป็นต่อการทำงานเท่านั้น เพื่อลดความเสี่ยงหากบัญชีถูกโจมตีหรือใช้งานผิดวัตถุประสงค์"
  },
  {
    "id": 397,
    "dom": 1,
    "question": "What is the primary goal of the 'Separation of Duties' principle?",
    "options": [
      "Reduce operational costs",
      "Prevent fraud by dividing critical tasks among multiple people",
      "Speed up work approvals",
      "Allow employees to perform multiple duties simultaneously"
    ],
    "correct_idx": 1,
    "explanation": "Separation of Duties splits high-risk or critical tasks among different people so no single individual has full control over a process, reducing the chance of fraud or error.",
    "short_explanation_en": "Separation of Duties splits high-risk or critical tasks among different people so no single individual has full control over a process, reducing the chance of fraud or error.",
    "question_th": "หลักการ 'Separation of Duties' มีเป้าหมายหลักเพื่ออะไร?",
    "options_th": [
      "ลดต้นทุนการดำเนินงาน",
      "ป้องกันการทุจริตโดยแบ่งงานสำคัญให้หลายคนรับผิดชอบ",
      "เพิ่มความเร็วในการอนุมัติงาน",
      "ให้พนักงานทำงานได้หลายหน้าที่พร้อมกัน"
    ],
    "explanation_th": "Separation of Duties แบ่งงานที่มีความเสี่ยงสูงหรือสำคัญออกเป็นหลายส่วนให้คนละคนรับผิดชอบ เพื่อไม่ให้บุคคลเดียวมีอำนาจควบคุมกระบวนการทั้งหมด ลดโอกาสทุจริตหรือความผิดพลาด"
  },
  {
    "id": 398,
    "dom": 1,
    "question": "What concept does 'Defense in Depth' represent?",
    "options": [
      "Using a single strongest layer of security",
      "Using multiple layered security measures for holistic protection",
      "Encrypting all types of data",
      "Outsourcing security to a third party"
    ],
    "correct_idx": 1,
    "explanation": "Defense in Depth involves layering multiple protective measures (physical, technical, and administrative) so the system doesn't fail entirely if one layer is breached.",
    "short_explanation_en": "Defense in Depth involves layering multiple protective measures (physical, technical, and administrative) so the system doesn't fail entirely if one layer is breached.",
    "question_th": "'Defense in Depth' คือแนวคิดใด?",
    "options_th": [
      "การใช้มาตรการรักษาความปลอดภัยเพียงชั้นเดียวที่แข็งแกร่งที่สุด",
      "การใช้มาตรการรักษาความปลอดภัยหลายชั้นซ้อนกันเพื่อสร้างความปลอดภัยแบบองค์รวม",
      "การเข้ารหัสข้อมูลทุกประเภท",
      "การจ้างบุคคลภายนอกดูแลความปลอดภัย"
    ],
    "explanation_th": "Defense in Depth คือการวางมาตรการป้องกันหลายชั้น (เช่น กายภาพ เทคนิค และการบริหารจัดการ) เพื่อไม่ให้ระบบล้มเหลวทั้งหมดหากชั้นใดชั้นหนึ่งถูกทะลุผ่าน"
  },
  {
    "id": 399,
    "dom": 1,
    "question": "What is the best definition of 'Risk' in an information security context?",
    "options": [
      "An unresolved system weakness",
      "A source of danger that may cause harm",
      "The likelihood that a threat will exploit a vulnerability and cause harm",
      "A measure used to reduce the impact of a threat"
    ],
    "correct_idx": 2,
    "explanation": "Risk is the combination of likelihood — that a Threat will exploit a Vulnerability — and the resulting Impact that could occur.",
    "short_explanation_en": "Risk is the combination of likelihood — that a Threat will exploit a Vulnerability — and the resulting Impact that could occur.",
    "question_th": "'Risk' ในบริบทความปลอดภัยสารสนเทศ นิยามได้ดีที่สุดว่าอย่างไร?",
    "options_th": [
      "จุดอ่อนของระบบที่ยังไม่ได้แก้ไข",
      "แหล่งที่มาของอันตรายที่อาจก่อความเสียหาย",
      "ความน่าจะเป็นที่ภัยคุกคามจะใช้ประโยชน์จากช่องโหว่และก่อให้เกิดความเสียหาย",
      "มาตรการที่ใช้ลดผลกระทบจากภัยคุกคาม"
    ],
    "explanation_th": "Risk คือการรวมกันของความน่าจะเป็น (Likelihood) ที่ Threat จะใช้ประโยชน์จาก Vulnerability และผลกระทบ (Impact) ที่อาจเกิดขึ้น"
  },
  {
    "id": 400,
    "dom": 1,
    "question": "What does 'Vulnerability' mean?",
    "options": [
      "A malicious attacker",
      "A weakness or flaw in a system that could be exploited",
      "Financial damage that has already occurred",
      "A control used to prevent threats"
    ],
    "correct_idx": 1,
    "explanation": "A Vulnerability is a weakness or gap in a system, process, or control that a Threat could exploit to cause harm.",
    "short_explanation_en": "A Vulnerability is a weakness or gap in a system, process, or control that a Threat could exploit to cause harm.",
    "question_th": "'Vulnerability' หมายถึงอะไร?",
    "options_th": [
      "ผู้โจมตีที่มีเจตนาร้าย",
      "จุดอ่อนหรือช่องโหว่ในระบบที่อาจถูกใช้ประโยชน์",
      "ความเสียหายทางการเงินที่เกิดขึ้นแล้ว",
      "มาตรการควบคุมที่ใช้ป้องกันภัยคุกคาม"
    ],
    "explanation_th": "Vulnerability คือจุดอ่อนหรือช่องโหว่ในระบบ กระบวนการ หรือการควบคุม ที่อาจถูก Threat ใช้ประโยชน์เพื่อก่อความเสียหาย"
  },
  {
    "id": 401,
    "dom": 1,
    "question": "Which of these is NOT one of the four main risk treatment approaches?",
    "options": [
      "Risk Avoidance",
      "Risk Transfer",
      "Risk Acceptance",
      "Risk Elimination"
    ],
    "correct_idx": 3,
    "explanation": "The four main risk treatment approaches are Avoid, Transfer (e.g., via insurance), Mitigate (reduce risk), and Accept. 'Risk Elimination' isn't a standard term, since no risk can ever be reduced to 100% zero.",
    "short_explanation_en": "The four main risk treatment approaches are Avoid, Transfer (e.g., via insurance), Mitigate (reduce risk), and Accept. 'Risk Elimination' isn't a standard term, since no risk can ever be reduced to 100% zero.",
    "question_th": "แนวทางการจัดการความเสี่ยง (Risk Treatment) ข้อใด 'ไม่ใช่' หนึ่งในสี่แนวทางหลัก?",
    "options_th": [
      "Risk Avoidance",
      "Risk Transfer",
      "Risk Acceptance",
      "Risk Elimination"
    ],
    "explanation_th": "แนวทางหลักในการจัดการความเสี่ยงมี 4 อย่างคือ Avoid (หลีกเลี่ยง), Transfer (โอนย้าย เช่น ทำประกัน), Mitigate (ลดความเสี่ยง) และ Accept (ยอมรับ) ส่วน 'Risk Elimination' ไม่ใช่คำศัพท์มาตรฐานเพราะไม่มีความเสี่ยงใดถูกกำจัดได้ 100%"
  },
  {
    "id": 402,
    "dom": 1,
    "question": "How do 'Due Diligence' and 'Due Care' differ?",
    "options": [
      "The two terms mean exactly the same thing",
      "Due Diligence is researching and assessing risk before a decision, while Due Care is continuously acting on reasonable standards afterward",
      "Due Diligence applies only to finance, Due Care only to IT",
      "Due Care always happens before Due Diligence"
    ],
    "correct_idx": 1,
    "explanation": "Due Diligence is the process of researching, analyzing, and assessing risk before making a decision, while Due Care is continuously following reasonable measures afterward to prevent harm.",
    "short_explanation_en": "Due Diligence is the process of researching, analyzing, and assessing risk before making a decision, while Due Care is continuously following reasonable measures afterward to prevent harm.",
    "question_th": "'Due Diligence' และ 'Due Care' แตกต่างกันอย่างไร?",
    "options_th": [
      "ทั้งสองคำมีความหมายเหมือนกันทุกประการ",
      "Due Diligence คือการค้นคว้าและประเมินความเสี่ยงก่อนตัดสินใจ ส่วน Due Care คือการลงมือปฏิบัติตามมาตรฐานที่เหมาะสมอย่างต่อเนื่อง",
      "Due Diligence ใช้เฉพาะด้านการเงิน ส่วน Due Care ใช้เฉพาะด้าน IT",
      "Due Care เกิดขึ้นก่อน Due Diligence เสมอ"
    ],
    "explanation_th": "Due Diligence คือขั้นตอนการค้นคว้า วิเคราะห์ และประเมินความเสี่ยงก่อนตัดสินใจ ส่วน Due Care คือการปฏิบัติตามมาตรการที่สมเหตุสมผลอย่างต่อเนื่องเพื่อป้องกันความเสียหาย"
  },
  {
    "id": 403,
    "dom": 1,
    "question": "According to the (ISC)² Code of Ethics, what is the very first canon that members must uphold?",
    "options": [
      "Protect the employer's interests above all else",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure",
      "Continuously advance one's own technical knowledge",
      "Strictly maintain organizational confidentiality"
    ],
    "correct_idx": 1,
    "explanation": "The first canon of the (ISC)² Code of Ethics is 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' — considered the highest priority.",
    "short_explanation_en": "The first canon of the (ISC)² Code of Ethics is 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' — considered the highest priority.",
    "question_th": "ตามหลัก (ISC)² Code of Ethics ข้อบังคับข้อแรกสุดที่สมาชิกต้องยึดถือคืออะไร?",
    "options_th": [
      "ปกป้องผลประโยชน์ของนายจ้างเป็นอันดับแรก",
      "ปกป้องสังคม สาธารณประโยชน์ ความไว้วางใจของสาธารณะ และโครงสร้างพื้นฐาน",
      "เพิ่มพูนความรู้ทางเทคนิคของตนเองอย่างต่อเนื่อง",
      "รักษาความลับขององค์กรอย่างเคร่งครัด"
    ],
    "explanation_th": "Canon แรกของ (ISC)² Code of Ethics คือ 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' ซึ่งถือเป็นลำดับความสำคัญสูงสุด"
  },
  {
    "id": 404,
    "dom": 1,
    "question": "What is the fundamental concept behind the 'Zero Trust' principle?",
    "options": [
      "Automatically trust users within the organization's network",
      "Trust nothing implicitly — verify everything every time, inside or outside the network",
      "Allow full access after the initial login",
      "Applies only to devices connected via VPN"
    ],
    "correct_idx": 1,
    "explanation": "Zero Trust follows the principle of 'Never trust, always verify' — no user or device is automatically trusted, and identity/authorization must be continuously verified for every resource request.",
    "short_explanation_en": "Zero Trust follows the principle of 'Never trust, always verify' — no user or device is automatically trusted, and identity/authorization must be continuously verified for every resource request.",
    "question_th": "หลักการ 'Zero Trust' มีแนวคิดพื้นฐานอย่างไร?",
    "options_th": [
      "เชื่อถือผู้ใช้ภายในเครือข่ายองค์กรโดยอัตโนมัติ",
      "ไม่เชื่อถือสิ่งใดโดยปริยาย ต้องตรวจสอบยืนยันทุกครั้งไม่ว่าจะอยู่ในหรือนอกเครือข่าย",
      "อนุญาตการเข้าถึงทั้งหมดหลังผ่านการล็อกอินครั้งแรก",
      "ใช้เฉพาะกับอุปกรณ์ที่เชื่อมต่อ VPN เท่านั้น"
    ],
    "explanation_th": "Zero Trust ยึดหลัก 'Never trust, always verify' คือไม่ไว้วางใจผู้ใช้หรืออุปกรณ์ใดโดยอัตโนมัติ ต้องมีการยืนยันตัวตนและตรวจสอบสิทธิ์อย่างต่อเนื่องทุกครั้งที่มีการร้องขอเข้าถึงทรัพยากร"
  },
  {
    "id": 405,
    "dom": 1,
    "question": "What is the primary purpose of Data Classification?",
    "options": [
      "Increase data processing speed",
      "Set an appropriate protection level based on data's importance and sensitivity",
      "Reduce file size",
      "Make data accessible from anywhere"
    ],
    "correct_idx": 1,
    "explanation": "Data classification helps an organization set appropriate controls — such as encryption or access restriction — based on data sensitivity levels like Public, Internal, Confidential, or Restricted.",
    "short_explanation_en": "Data classification helps an organization set appropriate controls — such as encryption or access restriction — based on data sensitivity levels like Public, Internal, Confidential, or Restricted.",
    "question_th": "การจัดประเภทข้อมูล (Data Classification) มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options_th": [
      "เพิ่มความเร็วในการประมวลผลข้อมูล",
      "กำหนดระดับการป้องกันที่เหมาะสมตามความสำคัญและความอ่อนไหวของข้อมูล",
      "ลดขนาดไฟล์ข้อมูล",
      "ทำให้ข้อมูลสามารถเข้าถึงได้จากทุกที่"
    ],
    "explanation_th": "การจัดประเภทข้อมูลช่วยให้องค์กรกำหนดมาตรการควบคุมที่เหมาะสม เช่น การเข้ารหัสหรือการจำกัดสิทธิ์ ตามระดับความอ่อนไหวของข้อมูล เช่น Public, Internal, Confidential, Restricted"
  },
  {
    "id": 406,
    "dom": 1,
    "question": "Which is the best description of 'Insider Threat'?",
    "options": [
      "An external attacker using malware",
      "A person within the organization, such as an employee, who may cause harm intentionally or unintentionally",
      "Software installed without authorization",
      "An unpatched vulnerability"
    ],
    "correct_idx": 1,
    "explanation": "An Insider Threat comes from someone within the organization who already has legitimate access, whether from negligence, dissatisfaction, or malicious intent.",
    "short_explanation_en": "An Insider Threat comes from someone within the organization who already has legitimate access, whether from negligence, dissatisfaction, or malicious intent.",
    "question_th": "ข้อใดอธิบาย 'Insider Threat' ได้ถูกต้องที่สุด?",
    "options_th": [
      "ผู้โจมตีจากภายนอกที่ใช้มัลแวร์",
      "บุคคลภายในองค์กร เช่น พนักงาน ที่อาจก่อความเสียหายโดยตั้งใจหรือไม่ตั้งใจ",
      "ซอฟต์แวร์ที่ติดตั้งโดยไม่ได้รับอนุญาต",
      "ช่องโหว่ที่ยังไม่มีแพตช์แก้ไข"
    ],
    "explanation_th": "Insider Threat คือภัยคุกคามที่มาจากบุคคลภายในองค์กรซึ่งมีสิทธิ์การเข้าถึงอยู่แล้ว อาจเกิดจากความประมาท ความไม่พอใจ หรือเจตนาร้าย"
  },
  {
    "id": 407,
    "dom": 1,
    "question": "What does 'Governance' mean in the context of information security?",
    "options": [
      "Encrypting all data across the organization",
      "An oversight framework that sets direction, policy, and accountability to achieve the organization's security goals",
      "Installing antivirus software",
      "A daily data backup process"
    ],
    "correct_idx": 1,
    "explanation": "Governance is the high-level oversight structure that defines policy, direction, and responsibility to ensure the organization operates in line with security goals and requirements.",
    "short_explanation_en": "Governance is the high-level oversight structure that defines policy, direction, and responsibility to ensure the organization operates in line with security goals and requirements.",
    "question_th": "'Governance' ในบริบทความปลอดภัยสารสนเทศหมายถึงอะไร?",
    "options_th": [
      "การเข้ารหัสข้อมูลทั้งหมดในองค์กร",
      "กรอบการกำกับดูแล กำหนดทิศทาง นโยบาย และความรับผิดชอบเพื่อให้บรรลุเป้าหมายด้านความปลอดภัยขององค์กร",
      "การติดตั้งซอฟต์แวร์ป้องกันไวรัส",
      "กระบวนการสำรองข้อมูลรายวัน"
    ],
    "explanation_th": "Governance คือโครงสร้างการกำกับดูแลระดับสูงที่กำหนดนโยบาย ทิศทาง และความรับผิดชอบ เพื่อให้มั่นใจว่าองค์กรดำเนินงานสอดคล้องกับเป้าหมายและข้อกำหนดด้านความปลอดภัย"
  },
  {
    "id": 408,
    "dom": 1,
    "question": "Which of the following is an example of an 'Administrative Control'?",
    "options": [
      "Firewalls",
      "CCTV cameras",
      "Security policies and procedures",
      "Perimeter fencing"
    ],
    "correct_idx": 2,
    "explanation": "Administrative (or Managerial) controls relate to policies, procedures, guidelines, and training — distinct from Technical controls (e.g., firewalls) and Physical controls (e.g., fences, cameras).",
    "short_explanation_en": "Administrative (or Managerial) controls relate to policies, procedures, guidelines, and training — distinct from Technical controls (e.g., firewalls) and Physical controls (e.g., fences, cameras).",
    "question_th": "ข้อใดคือตัวอย่างของ 'Administrative Control'?",
    "options_th": [
      "ไฟร์วอลล์",
      "กล้องวงจรปิด",
      "นโยบายและขั้นตอนปฏิบัติงานด้านความปลอดภัย",
      "รั้วรอบอาคาร"
    ],
    "explanation_th": "Administrative control (หรือ Managerial control) คือมาตรการที่เกี่ยวข้องกับนโยบาย ขั้นตอน แนวทางปฏิบัติ และการฝึกอบรม ต่างจาก Technical control (เช่นไฟร์วอลล์) และ Physical control (เช่นรั้ว กล้อง)"
  },
  {
    "id": 409,
    "dom": 1,
    "question": "In what situation is a 'Compensating Control' used?",
    "options": [
      "When the appropriate primary control cannot be implemented, so an alternative measure is used to reduce risk to an acceptable level",
      "When an organization wants to cut all security costs",
      "When there is no risk at all in a system",
      "When wanting to eliminate all existing controls"
    ],
    "correct_idx": 0,
    "explanation": "A Compensating Control is an alternative measure used in place of a standard control when that standard control cannot practically be implemented, in order to still achieve an acceptable level of security.",
    "short_explanation_en": "A Compensating Control is an alternative measure used in place of a standard control when that standard control cannot practically be implemented, in order to still achieve an acceptable level of security.",
    "question_th": "'Compensating Control' ถูกนำมาใช้ในสถานการณ์ใด?",
    "options_th": [
      "เมื่อไม่สามารถใช้มาตรการควบคุมหลักที่เหมาะสมได้ จึงใช้มาตรการทดแทนเพื่อลดความเสี่ยงในระดับที่ยอมรับได้",
      "เมื่อองค์กรต้องการลดต้นทุนความปลอดภัยทั้งหมด",
      "เมื่อไม่มีความเสี่ยงใดๆ ในระบบ",
      "เมื่อต้องการยกเลิกมาตรการควบคุมเดิมทั้งหมด"
    ],
    "explanation_th": "Compensating control คือมาตรการทางเลือกที่ใช้แทนมาตรการควบคุมมาตรฐานเมื่อไม่สามารถนำมาตรการนั้นมาใช้ได้จริง เพื่อให้ยังคงบรรลุวัตถุประสงค์ด้านความปลอดภัยในระดับที่ยอมรับได้"
  },
  {
    "id": 484,
    "dom": 1,
    "question": "A company encrypts customer records so that only authorized staff can read them. Which principle of the CIA Triad does this MOST directly protect?",
    "options": [
      "Availability",
      "Integrity",
      "Non-repudiation",
      "Confidentiality"
    ],
    "correct_idx": 3,
    "explanation": "Encrypting data so unauthorized parties cannot read it directly protects Confidentiality, one of the three pillars of the CIA Triad. Integrity relates to data accuracy, and Availability relates to timely access.",
    "short_explanation_en": "Encrypting data so unauthorized parties cannot read it directly protects Confidentiality, one of the three pillars of the CIA Triad. Integrity relates to data accuracy, and Availability relates to timely access.",
    "question_th": "บริษัทเข้ารหัสข้อมูลลูกค้าเพื่อให้เฉพาะพนักงานที่ได้รับอนุญาตเท่านั้นที่สามารถอ่านได้ การกระทำนี้ปกป้องหลักการใดของ CIA Triad โดยตรงที่สุด?",
    "options_th": [
      "Availability",
      "Integrity",
      "Non-repudiation",
      "Confidentiality"
    ],
    "explanation_th": "การเข้ารหัสข้อมูลเพื่อไม่ให้ผู้ที่ไม่ได้รับอนุญาตอ่านได้ เป็นการปกป้อง Confidentiality (การรักษาความลับ) ซึ่งเป็นหนึ่งในสามเสาหลักของ CIA Triad โดยตรง ส่วน Integrity เกี่ยวกับความถูกต้องครบถ้วนของข้อมูล และ Availability เกี่ยวกับความพร้อมใช้งาน"
  },
  {
    "id": 485,
    "dom": 1,
    "question": "A hospital's patient record system must remain accessible to doctors during an emergency, even during a power outage. Which CIA Triad principle is the hospital primarily addressing by installing backup generators?",
    "options": [
      "Accountability",
      "Integrity",
      "Availability",
      "Confidentiality"
    ],
    "correct_idx": 2,
    "explanation": "The system's ability to continue providing service despite a disruption, such as a power outage, addresses Availability. Backup generators are a measure specifically designed to maintain system availability.",
    "short_explanation_en": "The system's ability to continue providing service despite a disruption, such as a power outage, addresses Availability. Backup generators are a measure specifically designed to maintain system availability.",
    "question_th": "ระบบเวชระเบียนของโรงพยาบาลต้องพร้อมให้แพทย์เข้าถึงได้ในกรณีฉุกเฉิน แม้ในระหว่างไฟฟ้าดับ การติดตั้งเครื่องปั่นไฟสำรองของโรงพยาบาลเป็นการมุ่งเน้นหลักการใดของ CIA Triad เป็นหลัก?",
    "options_th": [
      "Accountability",
      "Integrity",
      "Availability",
      "Confidentiality"
    ],
    "explanation_th": "ความสามารถของระบบในการให้บริการได้อย่างต่อเนื่องแม้เกิดเหตุขัดข้อง เช่น ไฟฟ้าดับ คือหลัก Availability (ความพร้อมใช้งาน) เครื่องปั่นไฟสำรองเป็นมาตรการที่ออกแบบมาเพื่อรักษาความพร้อมใช้งานของระบบโดยเฉพาะ"
  },
  {
    "id": 486,
    "dom": 1,
    "question": "A file's hash value is checked before and after transmission to ensure it was not altered in transit. This process supports which security principle?",
    "options": [
      "Confidentiality",
      "Authorization",
      "Availability",
      "Integrity"
    ],
    "correct_idx": 3,
    "explanation": "Checking a hash value before and after transmission to confirm data wasn't altered protects Integrity. A changed hash value indicates the data was tampered with.",
    "short_explanation_en": "Checking a hash value before and after transmission to confirm data wasn't altered protects Integrity. A changed hash value indicates the data was tampered with.",
    "question_th": "ค่าแฮชของไฟล์ถูกตรวจสอบก่อนและหลังการส่งข้อมูล เพื่อรับประกันว่าไม่ถูกแก้ไขระหว่างทาง กระบวนการนี้สนับสนุนหลักการความปลอดภัยใด?",
    "options_th": [
      "Confidentiality",
      "Authorization",
      "Availability",
      "Integrity"
    ],
    "explanation_th": "การตรวจสอบค่าแฮชก่อนและหลังการส่งข้อมูลเพื่อยืนยันว่าข้อมูลไม่ถูกแก้ไขระหว่างทาง เป็นการปกป้อง Integrity (ความถูกต้องครบถ้วนของข้อมูล) ค่าแฮชที่เปลี่ยนไปจะบ่งชี้ว่าข้อมูลถูกดัดแปลง"
  },
  {
    "id": 487,
    "dom": 1,
    "question": "Which term BEST describes a weakness in a system that could be exploited by a threat actor?",
    "options": [
      "Risk",
      "Threat",
      "Vulnerability",
      "Exposure"
    ],
    "correct_idx": 2,
    "explanation": "A Vulnerability is a weakness in a system that could be exploited by a bad actor. A Threat is the potential source of harm (e.g., a hacker), and Risk is the likelihood a Threat will exploit a Vulnerability and cause damage.",
    "short_explanation_en": "A Vulnerability is a weakness in a system that could be exploited by a bad actor. A Threat is the potential source of harm (e.g., a hacker), and Risk is the likelihood a Threat will exploit a Vulnerability and cause damage.",
    "question_th": "คำใดอธิบายจุดอ่อนในระบบที่อาจถูกผู้ไม่หวังดีใช้ประโยชน์ได้ดีที่สุด?",
    "options_th": [
      "Risk",
      "Threat",
      "Vulnerability",
      "Exposure"
    ],
    "explanation_th": "Vulnerability (ช่องโหว่) คือจุดอ่อนในระบบที่อาจถูกผู้ไม่หวังดีใช้ประโยชน์ ส่วน Threat คือสิ่งที่อาจก่อให้เกิดอันตราย (เช่น แฮกเกอร์) และ Risk คือความเป็นไปได้ที่ Threat จะใช้ประโยชน์จาก Vulnerability จนเกิดความเสียหาย"
  },
  {
    "id": 488,
    "dom": 1,
    "question": "An organization decides that the cost of protecting a low-value asset exceeds the potential loss, and therefore takes no further action against a minor risk. Which risk treatment strategy is this?",
    "options": [
      "Risk avoidance",
      "Risk transference",
      "Risk mitigation",
      "Risk acceptance"
    ],
    "correct_idx": 3,
    "explanation": "Taking no further action because the cost of protection exceeds the potential loss is Risk Acceptance, distinct from Mitigation (reducing risk) or Transference (shifting risk to a third party, e.g. via insurance).",
    "short_explanation_en": "Taking no further action because the cost of protection exceeds the potential loss is Risk Acceptance, distinct from Mitigation (reducing risk) or Transference (shifting risk to a third party, e.g. via insurance).",
    "question_th": "องค์กรตัดสินใจว่าค่าใช้จ่ายในการปกป้องทรัพย์สินที่มีมูลค่าต่ำสูงกว่าความเสียหายที่อาจเกิดขึ้น จึงไม่ดำเนินการเพิ่มเติมกับความเสี่ยงเล็กน้อยนี้ นี่คือกลยุทธ์การจัดการความเสี่ยงแบบใด?",
    "options_th": [
      "Risk avoidance",
      "Risk transference",
      "Risk mitigation",
      "Risk acceptance"
    ],
    "explanation_th": "การยอมรับความเสี่ยงโดยไม่ดำเนินการเพิ่มเติม เพราะต้นทุนในการป้องกันสูงกว่ามูลค่าความเสียหายที่อาจเกิดขึ้น คือ Risk Acceptance (การยอมรับความเสี่ยง) ต่างจาก Mitigation ที่ลดความเสี่ยง หรือ Transference ที่โอนความเสี่ยงไปยังบุคคลที่สาม เช่น การซื้อประกันภัย"
  },
  {
    "id": 489,
    "dom": 1,
    "question": "A company purchases cybersecurity insurance to help cover the cost of a potential data breach. Which risk treatment strategy does this represent?",
    "options": [
      "Risk avoidance",
      "Risk mitigation",
      "Risk acceptance",
      "Risk transference"
    ],
    "correct_idx": 3,
    "explanation": "Purchasing insurance transfers the financial burden of a risk to a third party (the insurer), making this Risk Transference. The organization still bears the risk, but some of the financial impact is shifted away.",
    "short_explanation_en": "Purchasing insurance transfers the financial burden of a risk to a third party (the insurer), making this Risk Transference. The organization still bears the risk, but some of the financial impact is shifted away.",
    "question_th": "บริษัทซื้อประกันภัยไซเบอร์เพื่อช่วยครอบคลุมค่าใช้จ่ายจากการรั่วไหลของข้อมูลที่อาจเกิดขึ้น นี่คือกลยุทธ์การจัดการความเสี่ยงแบบใด?",
    "options_th": [
      "Risk avoidance",
      "Risk mitigation",
      "Risk acceptance",
      "Risk transference"
    ],
    "explanation_th": "การซื้อประกันภัยเป็นการโอนภาระทางการเงินของความเสี่ยงไปให้บุคคลที่สาม (บริษัทประกัน) จึงเป็น Risk Transference (การโอนความเสี่ยง) องค์กรยังคงมีความเสี่ยงอยู่ แต่ผลกระทบทางการเงินบางส่วนถูกโอนออกไป"
  },
  {
    "id": 490,
    "dom": 1,
    "question": "Which type of security control is a security awareness training program considered?",
    "options": [
      "Physical control",
      "Technical control",
      "Administrative control",
      "Corrective control"
    ],
    "correct_idx": 2,
    "explanation": "Security awareness training is a policy/process an organization establishes to guide employee behavior, making it an Administrative Control — distinct from Technical Controls (e.g., firewalls) or Physical Controls (e.g., cameras).",
    "short_explanation_en": "Security awareness training is a policy/process an organization establishes to guide employee behavior, making it an Administrative Control — distinct from Technical Controls (e.g., firewalls) or Physical Controls (e.g., cameras).",
    "question_th": "โปรแกรมฝึกอบรมสร้างความตระหนักด้านความปลอดภัยถือเป็นการควบคุมความปลอดภัยประเภทใด?",
    "options_th": [
      "Physical control",
      "Technical control",
      "Administrative control",
      "Corrective control"
    ],
    "explanation_th": "การฝึกอบรมสร้างความตระหนักด้านความปลอดภัยเป็นนโยบายและกระบวนการที่องค์กรกำหนดขึ้นเพื่อกำกับพฤติกรรมของพนักงาน จึงจัดเป็น Administrative Control (การควบคุมเชิงบริหาร) ต่างจาก Technical Control ซึ่งเป็นเทคโนโลยี เช่น ไฟร์วอลล์ หรือ Physical Control เช่น กล้องวงจรปิด"
  },
  {
    "id": 491,
    "dom": 1,
    "question": "A security guard checking ID badges at a building entrance is an example of which type of control?",
    "options": [
      "Technical control",
      "Detective control",
      "Physical control",
      "Administrative control"
    ],
    "correct_idx": 2,
    "explanation": "A security guard physically checking ID badges at a building entrance is a tangible physical measure, making it a Physical Control used to prevent unauthorized entry.",
    "short_explanation_en": "A security guard physically checking ID badges at a building entrance is a tangible physical measure, making it a Physical Control used to prevent unauthorized entry.",
    "question_th": "เจ้าหน้าที่รักษาความปลอดภัยที่ตรวจบัตรพนักงานที่ทางเข้าอาคารเป็นตัวอย่างของการควบคุมประเภทใด?",
    "options_th": [
      "Technical control",
      "Detective control",
      "Physical control",
      "Administrative control"
    ],
    "explanation_th": "การ์ดรักษาความปลอดภัยที่ตรวจบัตรพนักงานที่ทางเข้าอาคารเป็นมาตรการที่จับต้องได้ทางกายภาพ จึงจัดเป็น Physical Control (การควบคุมทางกายภาพ) ซึ่งใช้ป้องกันการเข้าถึงสถานที่โดยไม่ได้รับอนุญาต"
  },
  {
    "id": 492,
    "dom": 1,
    "question": "Which document provides high-level, mandatory statements of management intent regarding security, without specifying technical detail?",
    "options": [
      "Policy",
      "Procedure",
      "Standard",
      "Guideline"
    ],
    "correct_idx": 0,
    "explanation": "A Policy is a high-level document expressing management's intent and is mandatory, but does not specify technical detail. A Standard sets specific practical rules, a Procedure gives step-by-step instructions, and a Guideline is non-mandatory advice.",
    "short_explanation_en": "A Policy is a high-level document expressing management's intent and is mandatory, but does not specify technical detail. A Standard sets specific practical rules, a Procedure gives step-by-step instructions, and a Guideline is non-mandatory advice.",
    "question_th": "เอกสารประเภทใดที่ให้คำแถลงระดับสูงและมีข้อบังคับเกี่ยวกับเจตนารมณ์ของฝ่ายบริหารด้านความปลอดภัย โดยไม่ระบุรายละเอียดทางเทคนิค?",
    "options_th": [
      "Policy",
      "Procedure",
      "Standard",
      "Guideline"
    ],
    "explanation_th": "Policy (นโยบาย) คือเอกสารระดับสูงที่ระบุเจตนารมณ์ของฝ่ายบริหารและเป็นข้อบังคับ แต่ไม่ได้ลงรายละเอียดทางเทคนิค ส่วน Standard กำหนดกฎเกณฑ์เชิงปฏิบัติที่ชัดเจน และ Procedure ให้ขั้นตอนทำทีละขั้น ในขณะที่ Guideline เป็นเพียงคำแนะนำที่ไม่บังคับ"
  },
  {
    "id": 493,
    "dom": 1,
    "question": "An organization takes reasonable steps to investigate and understand risks before making a business decision. This concept is known as:",
    "options": [
      "Risk acceptance",
      "Negligence",
      "Due diligence",
      "Due care"
    ],
    "correct_idx": 2,
    "explanation": "Due Diligence is the careful investigation and study of risks before making a decision, such as assessing risk before an investment or contract. Due Care is the continuous action taken to maintain appropriate security standards after risks are known.",
    "short_explanation_en": "Due Diligence is the careful investigation and study of risks before making a decision, such as assessing risk before an investment or contract. Due Care is the continuous action taken to maintain appropriate security standards after risks are known.",
    "question_th": "องค์กรดำเนินการตามขั้นตอนที่สมเหตุสมผลเพื่อตรวจสอบและทำความเข้าใจความเสี่ยงก่อนตัดสินใจทางธุรกิจ แนวคิดนี้เรียกว่าอะไร?",
    "options_th": [
      "Risk acceptance",
      "Negligence",
      "Due diligence",
      "Due care"
    ],
    "explanation_th": "Due Diligence คือการตรวจสอบและศึกษาความเสี่ยงอย่างรอบคอบก่อนตัดสินใจ เช่น การประเมินความเสี่ยงก่อนลงทุนหรือทำสัญญา ส่วน Due Care คือการดำเนินการอย่างต่อเนื่องเพื่อรักษามาตรฐานความปลอดภัยที่เหมาะสมหลังจากรู้ถึงความเสี่ยงแล้ว"
  },
  {
    "id": 494,
    "dom": 1,
    "question": "According to the (ISC)² Code of Ethics, which canon takes the HIGHEST priority when in conflict with other canons?",
    "options": [
      "Provide diligent and competent service to principals",
      "Act honorably, honestly, justly, responsibly, and legally",
      "Advance and protect the profession",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure"
    ],
    "correct_idx": 3,
    "explanation": "The (ISC)² Code of Ethics has four canons ranked in priority order. The first — 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' — always takes highest priority when in conflict with the others, since societal impact outweighs any individual or organizational interest.",
    "short_explanation_en": "The (ISC)² Code of Ethics has four canons ranked in priority order. The first — 'Protect society, the common good, necessary public trust and confidence, and the infrastructure' — always takes highest priority when in conflict with the others, since societal impact outweighs any individual or organizational interest.",
    "question_th": "ตามหลัก (ISC)² Code of Ethics ข้อบังคับใดมีความสำคัญสูงสุดเมื่อเกิดความขัดแย้งกับข้อบังคับอื่น?",
    "options_th": [
      "Provide diligent and competent service to principals",
      "Act honorably, honestly, justly, responsibly, and legally",
      "Advance and protect the profession",
      "Protect society, the common good, necessary public trust and confidence, and the infrastructure"
    ],
    "explanation_th": "จรรยาบรรณของ (ISC)² มี 4 ข้อ (Canon) โดยเรียงลำดับความสำคัญจากบนลงล่าง ข้อแรก 'ปกป้องสังคม ผลประโยชน์ส่วนรวม ความไว้วางใจสาธารณะ และโครงสร้างพื้นฐาน' มีความสำคัญสูงสุดเสมอเมื่อเกิดความขัดแย้งกับข้ออื่น เนื่องจากผลกระทบต่อสังคมโดยรวมสำคัญกว่าผลประโยชน์ของบุคคลหรือองค์กรใดองค์กรหนึ่ง"
  },
  {
    "id": 495,
    "dom": 1,
    "question": "Which of the following is an example of a deterrent control?",
    "options": [
      "A backup restoring lost data after an incident",
      "A firewall that blocks unauthorized traffic",
      "An intrusion detection system that logs an attack",
      "A visible warning sign stating the area is under video surveillance"
    ],
    "correct_idx": 3,
    "explanation": "A Deterrent Control aims to discourage a bad actor from acting in the first place. A visible CCTV warning sign is a clear example — it doesn't directly prevent access technically but makes a would-be wrongdoer hesitant, unlike a firewall which is a Preventive Control.",
    "short_explanation_en": "A Deterrent Control aims to discourage a bad actor from acting in the first place. A visible CCTV warning sign is a clear example — it doesn't directly prevent access technically but makes a would-be wrongdoer hesitant, unlike a firewall which is a Preventive Control.",
    "question_th": "ข้อใดเป็นตัวอย่างของ deterrent control?",
    "options_th": [
      "การกู้คืนข้อมูลที่สูญหายจากแบ็กอัพหลังเกิดเหตุการณ์",
      "ไฟร์วอลล์ที่บล็อกทราฟฟิกที่ไม่ได้รับอนุญาต",
      "ระบบตรวจจับการบุกรุกที่บันทึกการโจมตี",
      "ป้ายเตือนที่มองเห็นได้ชัดเจนระบุว่าพื้นที่นี้อยู่ภายใต้การเฝ้าระวังด้วยกล้องวงจรปิด"
    ],
    "explanation_th": "Deterrent Control (การควบคุมเชิงยับยั้ง) มีจุดประสงค์เพื่อทำให้ผู้ไม่หวังดีเปลี่ยนใจไม่ก่อเหตุตั้งแต่แรก ป้ายเตือนว่ามีกล้องวงจรปิดเป็นตัวอย่างที่ชัดเจน เพราะไม่ได้ป้องกันทางเทคนิคโดยตรงแต่ทำให้ผู้ประสงค์ร้ายลังเลที่จะกระทำผิด ต่างจากไฟร์วอลล์ซึ่งเป็น Preventive Control"
  }
];

export default questions;
