/**
 * ISC2 CC 2026 Outline - Domain 3: Identity and Access Management Concepts.
 * Original practice items; 23 accepted after assistant academic/bilingual QA.
 * Independent human academic and bilingual approval: pending.
 * Provenance: content/isc2-cc-2026/questions/domain-3-draft.mjs
 * Review: ISC2 Update 2026/Domain 3/question-bank-review.md
 */

const questions = [
  {
    "id": 647,
    "dom": 3,
    "question": "A new procurement employee needs access today. The access policy requires the application owner to approve the purchasing role before the service desk assigns it. The employee submits a valid account request, but the role approval is missing. What should the service desk do FIRST?",
    "options": [
      "Assign the standard purchasing role and request retrospective approval",
      "Obtain the application owner's approval for the requested role",
      "Copy an experienced buyer's permissions to provide a working baseline",
      "Schedule the role assignment for the next periodic access review"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The request is valid, but the stated prerequisite for assigning access is missing. Obtaining approval respects the defined authority and workflow. Option A is incorrect: A standard role still requires the approval explicitly required before assignment. Option C is incorrect: Another employee may have additional rights, and copying them bypasses the required approval. Option D is incorrect: A periodic review evaluates existing access; it is not a substitute for processing the initial approval now.",
    "short_explanation_en": "A valid account request does not replace the required approval for access.",
    "question_th": "พนักงานจัดซื้อคนใหม่ต้องใช้ระบบวันนี้ นโยบายกำหนดให้เจ้าของแอปพลิเคชันอนุมัติบทบาทจัดซื้อก่อนที่ฝ่ายบริการไอทีจะกำหนดบทบาทนั้น พนักงานส่งคำขอสร้างบัญชีที่ถูกต้อง แต่ยังไม่มีการอนุมัติบทบาท ฝ่ายบริการไอทีควรทำอะไรเป็นอันดับแรก?",
    "options_th": [
      "กำหนดบทบาทจัดซื้อมาตรฐาน แล้วขออนุมัติย้อนหลัง",
      "ขออนุมัติบทบาทที่ร้องขอจากเจ้าของแอปพลิเคชัน",
      "คัดลอกสิทธิ์ของเจ้าหน้าที่จัดซื้อที่มีประสบการณ์มาเป็นชุดเริ่มต้น",
      "เลื่อนการกำหนดบทบาทไปยังการทบทวนสิทธิ์ตามรอบครั้งหน้า"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: คำขอถูกต้อง แต่ยังขาดเงื่อนไขก่อนให้สิทธิ์ การขออนุมัติเป็นไปตามอำนาจและขั้นตอนที่กำหนด\n- ข้อ A ไม่ถูกต้อง: แม้เป็นบทบาทมาตรฐาน ก็ยังต้องได้รับการอนุมัติก่อนกำหนดตามนโยบาย\n- ข้อ C ไม่ถูกต้อง: พนักงานอีกคนอาจมีสิทธิ์เพิ่มเติม และการคัดลอกยังข้ามการอนุมัติที่กำหนด\n- ข้อ D ไม่ถูกต้อง: การทบทวนตามรอบประเมินสิทธิ์ที่มีอยู่ ไม่ใช่สิ่งทดแทนการขออนุมัติเริ่มต้นในขณะนี้",
    "explanation_detail": {
      "correct": {
        "en": "The request is valid, but the stated prerequisite for assigning access is missing. Obtaining approval respects the defined authority and workflow.",
        "th": "คำขอถูกต้อง แต่ยังขาดเงื่อนไขก่อนให้สิทธิ์ การขออนุมัติเป็นไปตามอำนาจและขั้นตอนที่กำหนด"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A standard role still requires the approval explicitly required before assignment.",
          "text_th": "แม้เป็นบทบาทมาตรฐาน ก็ยังต้องได้รับการอนุมัติก่อนกำหนดตามนโยบาย"
        },
        {
          "letter": "C",
          "text_en": "Another employee may have additional rights, and copying them bypasses the required approval.",
          "text_th": "พนักงานอีกคนอาจมีสิทธิ์เพิ่มเติม และการคัดลอกยังข้ามการอนุมัติที่กำหนด"
        },
        {
          "letter": "D",
          "text_en": "A periodic review evaluates existing access; it is not a substitute for processing the initial approval now.",
          "text_th": "การทบทวนตามรอบประเมินสิทธิ์ที่มีอยู่ ไม่ใช่สิ่งทดแทนการขออนุมัติเริ่มต้นในขณะนี้"
        }
      ]
    }
  },
  {
    "id": 648,
    "dom": 3,
    "question": "An employee moves from inventory purchasing to customer support. The new role has been approved, and both managers confirm that the employee no longer handles purchase orders. A review shows that the account still permits purchase-order approval. Which action BEST addresses the finding?",
    "options": [
      "Keep the old permissions until the employee stops using them",
      "Disable the entire account until the next scheduled review",
      "Ask the employee to avoid purchase orders while leaving permissions unchanged",
      "Revoke purchase-order approval and retain the approved support permissions"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The confirmed role change removes the justification for the old right. Targeted revocation corrects privilege accumulation without disrupting authorized new duties. Option A is incorrect: Continued use does not establish a legitimate current business need after the managers have confirmed the duty ended. Option B is incorrect: This unnecessarily removes approved customer-support access instead of correcting the obsolete entitlement. Option C is incorrect: An instruction alone leaves the obsolete authorization available for misuse or account compromise.",
    "short_explanation_en": "A role change requires removing obsolete rights as well as adding new ones.",
    "question_th": "พนักงานย้ายจากงานจัดซื้อสินค้าคงคลังไปยังงานบริการลูกค้า บทบาทใหม่ได้รับอนุมัติแล้ว และผู้จัดการทั้งสองฝ่ายยืนยันว่าพนักงานไม่เกี่ยวข้องกับใบสั่งซื้ออีกต่อไป การทบทวนพบว่าบัญชียังอนุมัติใบสั่งซื้อได้ การดำเนินการใดเหมาะสมที่สุด?",
    "options_th": [
      "คงสิทธิ์เดิมจนกว่าพนักงานจะหยุดใช้งาน",
      "ระงับบัญชีทั้งหมดจนถึงการทบทวนตามรอบครั้งหน้า",
      "ขอให้พนักงานงดใช้ระบบใบสั่งซื้อโดยคงสิทธิ์ไว้เหมือนเดิม",
      "ถอนสิทธิ์อนุมัติใบสั่งซื้อ และคงสิทธิ์บริการลูกค้าที่ได้รับอนุมัติ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การเปลี่ยนหน้าที่ที่ยืนยันแล้วทำให้สิทธิ์เดิมไม่มีเหตุผลรองรับ การถอนเฉพาะสิทธิ์นั้นแก้การสะสมสิทธิ์โดยไม่กระทบงานใหม่ที่ได้รับอนุญาต\n- ข้อ A ไม่ถูกต้อง: การยังใช้งานอยู่ไม่ได้แสดงความจำเป็นทางธุรกิจปัจจุบัน เมื่อผู้จัดการยืนยันว่าหน้าที่สิ้นสุดแล้ว\n- ข้อ B ไม่ถูกต้อง: วิธีนี้ถอนสิทธิ์งานบริการลูกค้าที่อนุมัติแล้วโดยไม่จำเป็น แทนที่จะแก้ไขสิทธิ์ที่หมดความจำเป็น\n- ข้อ C ไม่ถูกต้อง: คำสั่งเพียงอย่างเดียวยังคงสิทธิ์เก่าไว้ให้ถูกใช้ผิดวัตถุประสงค์หรือถูกใช้เมื่อบัญชีถูกยึด",
    "explanation_detail": {
      "correct": {
        "en": "The confirmed role change removes the justification for the old right. Targeted revocation corrects privilege accumulation without disrupting authorized new duties.",
        "th": "การเปลี่ยนหน้าที่ที่ยืนยันแล้วทำให้สิทธิ์เดิมไม่มีเหตุผลรองรับ การถอนเฉพาะสิทธิ์นั้นแก้การสะสมสิทธิ์โดยไม่กระทบงานใหม่ที่ได้รับอนุญาต"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Continued use does not establish a legitimate current business need after the managers have confirmed the duty ended.",
          "text_th": "การยังใช้งานอยู่ไม่ได้แสดงความจำเป็นทางธุรกิจปัจจุบัน เมื่อผู้จัดการยืนยันว่าหน้าที่สิ้นสุดแล้ว"
        },
        {
          "letter": "B",
          "text_en": "This unnecessarily removes approved customer-support access instead of correcting the obsolete entitlement.",
          "text_th": "วิธีนี้ถอนสิทธิ์งานบริการลูกค้าที่อนุมัติแล้วโดยไม่จำเป็น แทนที่จะแก้ไขสิทธิ์ที่หมดความจำเป็น"
        },
        {
          "letter": "C",
          "text_en": "An instruction alone leaves the obsolete authorization available for misuse or account compromise.",
          "text_th": "คำสั่งเพียงอย่างเดียวยังคงสิทธิ์เก่าไว้ให้ถูกใช้ผิดวัตถุประสงค์หรือถูกใช้เมื่อบัญชีถูกยึด"
        }
      ]
    }
  },
  {
    "id": 649,
    "dom": 3,
    "question": "An application owner finishes an access review and marks several contractor permissions for removal. The review tool records the decisions but does not apply them automatically. The contractors can still use those permissions. Which action MOST directly completes this review's security purpose?",
    "options": [
      "Apply the approved removals and verify the effective permissions",
      "Archive the signed review report as evidence that the review is complete",
      "Bring forward the next access review to identify the permissions again",
      "Reset the contractors' authentication credentials without changing permissions"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Recording a decision is not enforcement. Applying and checking the removals ensures access reflects the review outcome. Option B is incorrect: The report preserves the decision but leaves the rejected permissions active. Option C is incorrect: The current decisions are already known; another review does not implement them. Option D is incorrect: A credential reset changes authentication material, not the entitlements rejected by the review.",
    "short_explanation_en": "Access review findings must be applied and verified, not merely documented.",
    "question_th": "เจ้าของแอปพลิเคชันทบทวนสิทธิ์เสร็จและระบุให้ถอนสิทธิ์บางรายการของผู้รับเหมา เครื่องมือบันทึกผลแต่ไม่ได้ดำเนินการให้อัตโนมัติ ผู้รับเหมายังใช้สิทธิ์เหล่านั้นได้ การกระทำใดทำให้บรรลุวัตถุประสงค์ด้านความปลอดภัยของการทบทวนได้ตรงที่สุด?",
    "options_th": [
      "ดำเนินการถอนสิทธิ์ตามผลอนุมัติ และตรวจสอบสิทธิ์ที่มีผลจริง",
      "เก็บรายงานทบทวนที่ลงนามแล้วเป็นหลักฐานว่าทบทวนเสร็จ",
      "เลื่อนการทบทวนครั้งถัดไปให้เร็วขึ้นเพื่อระบุสิทธิ์เดิมอีกครั้ง",
      "เปลี่ยนสิ่งที่ใช้ยืนยันตัวตนของผู้รับเหมาโดยไม่แก้ไขสิทธิ์"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การบันทึกผลไม่ใช่การบังคับใช้ การถอนและตรวจสอบทำให้สิทธิ์ตรงกับผลทบทวน\n- ข้อ B ไม่ถูกต้อง: รายงานเก็บหลักฐานการตัดสินใจ แต่สิทธิ์ที่ควรถอนยังคงใช้งานได้\n- ข้อ C ไม่ถูกต้อง: ทราบผลตัดสินใจแล้ว การทบทวนอีกรอบไม่ได้ทำให้ผลนั้นมีผลจริง\n- ข้อ D ไม่ถูกต้อง: การเปลี่ยนสิ่งที่ใช้ยืนยันตัวตนไม่ได้ถอนสิทธิ์ที่ถูกปฏิเสธจากการทบทวน",
    "explanation_detail": {
      "correct": {
        "en": "Recording a decision is not enforcement. Applying and checking the removals ensures access reflects the review outcome.",
        "th": "การบันทึกผลไม่ใช่การบังคับใช้ การถอนและตรวจสอบทำให้สิทธิ์ตรงกับผลทบทวน"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The report preserves the decision but leaves the rejected permissions active.",
          "text_th": "รายงานเก็บหลักฐานการตัดสินใจ แต่สิทธิ์ที่ควรถอนยังคงใช้งานได้"
        },
        {
          "letter": "C",
          "text_en": "The current decisions are already known; another review does not implement them.",
          "text_th": "ทราบผลตัดสินใจแล้ว การทบทวนอีกรอบไม่ได้ทำให้ผลนั้นมีผลจริง"
        },
        {
          "letter": "D",
          "text_en": "A credential reset changes authentication material, not the entitlements rejected by the review.",
          "text_th": "การเปลี่ยนสิ่งที่ใช้ยืนยันตัวตนไม่ได้ถอนสิทธิ์ที่ถูกปฏิเสธจากการทบทวน"
        }
      ]
    }
  },
  {
    "id": 650,
    "dom": 3,
    "question": "An account inventory finds two accounts. Account X has not been used recently, but has an assigned owner and an approved recovery purpose. Account Y is used daily by a scheduled job, but has no current owner or responsible team. Which assessment is MOST accurate?",
    "options": [
      "Both accounts are orphaned because neither represents an interactive employee",
      "X is orphaned because it is inactive; Y is governed because it is active",
      "X shows inactivity to assess; Y has an ownership gap despite active use",
      "Neither needs review because recovery accounts and scheduled jobs are operational exceptions"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The evidence concerns different dimensions: recent use and accountable ownership. X needs context-aware assessment; Y has an orphan-account governance problem. Option A is incorrect: Non-interactive use does not itself establish orphaning; X has a documented owner and purpose. Option B is incorrect: This confuses activity with ownership. An actively used account can lack accountable management. Option D is incorrect: Operational purpose does not remove the need to verify ownership, permissions and continuing justification.",
    "short_explanation_en": "Account activity and responsible ownership are separate review criteria.",
    "question_th": "การสำรวจบัญชีพบว่า บัญชี X ไม่มีการใช้งานเมื่อเร็วๆ นี้ แต่มีผู้รับผิดชอบและมีวัตถุประสงค์เพื่อกู้คืนระบบที่ได้รับอนุมัติ ส่วนบัญชี Y ถูกใช้งานทุกวันโดยงานตามกำหนดเวลา แต่ไม่มีเจ้าของหรือทีมรับผิดชอบปัจจุบัน การประเมินใดถูกต้องที่สุด?",
    "options_th": [
      "ทั้งสองเป็นบัญชีที่ขาดผู้รับผิดชอบ เพราะไม่ใช่บัญชีพนักงานที่เข้าใช้แบบโต้ตอบ",
      "X ขาดผู้รับผิดชอบเพราะไม่ได้ใช้งาน ส่วน Y มีการกำกับดูแลเพราะยังใช้งานอยู่",
      "X มีการไม่เคลื่อนไหวที่ต้องประเมิน ส่วน Y ขาดผู้รับผิดชอบแม้ยังถูกใช้งาน",
      "ไม่ต้องทบทวนทั้งคู่ เพราะบัญชีกู้คืนและงานตามกำหนดเวลาเป็นข้อยกเว้นด้านปฏิบัติการ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: หลักฐานแสดงคนละด้าน คือการใช้งานล่าสุดกับผู้รับผิดชอบ X ต้องประเมินตามบริบท ส่วน Y มีปัญหาการกำกับบัญชีที่ขาดผู้รับผิดชอบ\n- ข้อ A ไม่ถูกต้อง: การใช้งานแบบไม่โต้ตอบไม่ได้แปลว่าขาดผู้รับผิดชอบ บัญชี X มีเจ้าของและวัตถุประสงค์ที่บันทึกไว้\n- ข้อ B ไม่ถูกต้อง: วิธีนี้สับสนระหว่างการใช้งานกับเจ้าของ บัญชีที่ยังถูกใช้อาจขาดการจัดการที่มีผู้รับผิดชอบได้\n- ข้อ D ไม่ถูกต้อง: วัตถุประสงค์ด้านปฏิบัติการไม่ได้ยกเว้นการตรวจสอบผู้รับผิดชอบ สิทธิ์ และความจำเป็นต่อเนื่อง",
    "explanation_detail": {
      "correct": {
        "en": "The evidence concerns different dimensions: recent use and accountable ownership. X needs context-aware assessment; Y has an orphan-account governance problem.",
        "th": "หลักฐานแสดงคนละด้าน คือการใช้งานล่าสุดกับผู้รับผิดชอบ X ต้องประเมินตามบริบท ส่วน Y มีปัญหาการกำกับบัญชีที่ขาดผู้รับผิดชอบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Non-interactive use does not itself establish orphaning; X has a documented owner and purpose.",
          "text_th": "การใช้งานแบบไม่โต้ตอบไม่ได้แปลว่าขาดผู้รับผิดชอบ บัญชี X มีเจ้าของและวัตถุประสงค์ที่บันทึกไว้"
        },
        {
          "letter": "B",
          "text_en": "This confuses activity with ownership. An actively used account can lack accountable management.",
          "text_th": "วิธีนี้สับสนระหว่างการใช้งานกับเจ้าของ บัญชีที่ยังถูกใช้อาจขาดการจัดการที่มีผู้รับผิดชอบได้"
        },
        {
          "letter": "D",
          "text_en": "Operational purpose does not remove the need to verify ownership, permissions and continuing justification.",
          "text_th": "วัตถุประสงค์ด้านปฏิบัติการไม่ได้ยกเว้นการตรวจสอบผู้รับผิดชอบ สิทธิ์ และความจำเป็นต่อเนื่อง"
        }
      ]
    }
  },
  {
    "id": 651,
    "dom": 3,
    "question": "At a confirmed contract end, an administrator disables the contractor's central identity account. A connected document application maintains its own sessions, and its audit log shows the contractor's existing session is still active. The offboarding procedure requires ending all access. What is the BEST next action?",
    "options": [
      "Revoke the remaining application access and session, then verify termination",
      "Record the central disablement as completion and let the session expire normally",
      "Reset only the central account password to invalidate every application session",
      "Remove the contractor from the staff directory listing without changing the application"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The application session is independent of the central account. Its supported revocation controls must be used and the result verified to meet the stated offboarding requirement. Option B is incorrect: The observed active session contradicts the requirement to end all access at offboarding. Option C is incorrect: A central password change is not evidence that independently managed application sessions are revoked. Option D is incorrect: Removing a directory listing does not enforce termination of the active application session.",
    "short_explanation_en": "Central account disablement does not prove that every application session has ended.",
    "question_th": "เมื่อสัญญาสิ้นสุดตามที่ยืนยันแล้ว ผู้ดูแลระบบระงับบัญชีอัตลักษณ์กลางของผู้รับเหมา แอปพลิเคชันเอกสารที่เชื่อมต่อดูแลเซสชันของตนเอง และบันทึกตรวจสอบแสดงว่าเซสชันเดิมของผู้รับเหมายังทำงานอยู่ ขั้นตอนออกจากงานกำหนดให้ยุติการเข้าถึงทั้งหมด ควรทำอะไรต่อไปจึงเหมาะสมที่สุด?",
    "options_th": [
      "เพิกถอนสิทธิ์และเซสชันแอปพลิเคชันที่เหลือ แล้วตรวจสอบว่ายุติแล้ว",
      "บันทึกว่าการระงับบัญชีกลางเป็นการดำเนินการครบแล้ว และรอเซสชันหมดอายุตามปกติ",
      "เปลี่ยนเฉพาะรหัสผ่านบัญชีกลางเพื่อทำให้ทุกเซสชันแอปพลิเคชันใช้ไม่ได้",
      "นำชื่อผู้รับเหมาออกจากรายชื่อบุคลากรโดยไม่แก้ไขแอปพลิเคชัน"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: เซสชันแอปพลิเคชันเป็นอิสระจากบัญชีกลาง ต้องใช้กลไกเพิกถอนที่รองรับและตรวจสอบผลเพื่อให้ตรงตามข้อกำหนดออกจากงาน\n- ข้อ B ไม่ถูกต้อง: เซสชันที่ยังทำงานอยู่ขัดกับข้อกำหนดให้ยุติการเข้าถึงทั้งหมดเมื่อออกจากงาน\n- ข้อ C ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านกลางไม่ได้พิสูจน์ว่าเซสชันแอปพลิเคชันที่จัดการแยกกันถูกเพิกถอน\n- ข้อ D ไม่ถูกต้อง: การนำชื่อออกจากรายชื่อไม่ได้บังคับให้เซสชันแอปพลิเคชันที่ทำงานอยู่สิ้นสุด",
    "explanation_detail": {
      "correct": {
        "en": "The application session is independent of the central account. Its supported revocation controls must be used and the result verified to meet the stated offboarding requirement.",
        "th": "เซสชันแอปพลิเคชันเป็นอิสระจากบัญชีกลาง ต้องใช้กลไกเพิกถอนที่รองรับและตรวจสอบผลเพื่อให้ตรงตามข้อกำหนดออกจากงาน"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The observed active session contradicts the requirement to end all access at offboarding.",
          "text_th": "เซสชันที่ยังทำงานอยู่ขัดกับข้อกำหนดให้ยุติการเข้าถึงทั้งหมดเมื่อออกจากงาน"
        },
        {
          "letter": "C",
          "text_en": "A central password change is not evidence that independently managed application sessions are revoked.",
          "text_th": "การเปลี่ยนรหัสผ่านกลางไม่ได้พิสูจน์ว่าเซสชันแอปพลิเคชันที่จัดการแยกกันถูกเพิกถอน"
        },
        {
          "letter": "D",
          "text_en": "Removing a directory listing does not enforce termination of the active application session.",
          "text_th": "การนำชื่อออกจากรายชื่อไม่ได้บังคับให้เซสชันแอปพลิเคชันที่ทำงานอยู่สิ้นสุด"
        }
      ]
    }
  },
  {
    "id": 652,
    "dom": 3,
    "question": "An employee has left the organization. The approved procedure requires immediate withdrawal of access and retention of the account's approval and activity records for an ongoing audit. Which action BEST satisfies both requirements?",
    "options": [
      "Keep the account enabled and ask the former employee not to sign in",
      "Remove the audit records and keep a disabled account with no history",
      "Delay deprovisioning until the auditors have completed their review",
      "Disable access and preserve the required records under the retention procedure"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Access withdrawal and record disposal are different decisions. Disabling access while preserving required evidence meets both stated requirements. Option A is incorrect: A request not to sign in leaves access available and fails the withdrawal requirement. Option B is incorrect: This preserves a disabled account but destroys records explicitly required for the audit. Option C is incorrect: Auditors need retained records, not continuing login rights for the former employee.",
    "short_explanation_en": "Deprovisioning can end access without destroying records that must be retained.",
    "question_th": "พนักงานออกจากองค์กรแล้ว ขั้นตอนที่อนุมัติกำหนดให้ถอนสิทธิ์ทันที และเก็บระเบียนการอนุมัติกับกิจกรรมของบัญชีไว้เพื่อการตรวจสอบที่กำลังดำเนินอยู่ การกระทำใดตอบสนองทั้งสองข้อกำหนดได้เหมาะสมที่สุด?",
    "options_th": [
      "เปิดใช้บัญชีต่อไป และขอให้อดีตพนักงานไม่ลงชื่อเข้าใช้",
      "ลบระเบียนตรวจสอบ และเก็บบัญชีที่ระงับไว้โดยไม่มีประวัติ",
      "ชะลอการถอนสิทธิ์จนกว่าผู้ตรวจสอบจะทบทวนเสร็จ",
      "ระงับสิทธิ์เข้าถึงและรักษาระเบียนที่ต้องเก็บตามขั้นตอนการเก็บรักษา"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การถอนสิทธิ์กับการทำลายระเบียนเป็นคนละการตัดสินใจ การระงับสิทธิ์พร้อมเก็บหลักฐานที่กำหนดทำให้ตรงตามข้อกำหนดทั้งสอง\n- ข้อ A ไม่ถูกต้อง: การขอไม่ให้เข้าใช้ยังเปิดทางให้เข้าถึงและไม่เป็นไปตามข้อกำหนดถอนสิทธิ์\n- ข้อ B ไม่ถูกต้อง: วิธีนี้เก็บบัญชีที่ระงับไว้แต่ทำลายระเบียนที่กำหนดชัดเจนว่าต้องเก็บเพื่อตรวจสอบ\n- ข้อ C ไม่ถูกต้อง: ผู้ตรวจสอบต้องใช้ระเบียนที่เก็บไว้ ไม่ใช่สิทธิ์เข้าใช้ต่อเนื่องของอดีตพนักงาน",
    "explanation_detail": {
      "correct": {
        "en": "Access withdrawal and record disposal are different decisions. Disabling access while preserving required evidence meets both stated requirements.",
        "th": "การถอนสิทธิ์กับการทำลายระเบียนเป็นคนละการตัดสินใจ การระงับสิทธิ์พร้อมเก็บหลักฐานที่กำหนดทำให้ตรงตามข้อกำหนดทั้งสอง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A request not to sign in leaves access available and fails the withdrawal requirement.",
          "text_th": "การขอไม่ให้เข้าใช้ยังเปิดทางให้เข้าถึงและไม่เป็นไปตามข้อกำหนดถอนสิทธิ์"
        },
        {
          "letter": "B",
          "text_en": "This preserves a disabled account but destroys records explicitly required for the audit.",
          "text_th": "วิธีนี้เก็บบัญชีที่ระงับไว้แต่ทำลายระเบียนที่กำหนดชัดเจนว่าต้องเก็บเพื่อตรวจสอบ"
        },
        {
          "letter": "C",
          "text_en": "Auditors need retained records, not continuing login rights for the former employee.",
          "text_th": "ผู้ตรวจสอบต้องใช้ระเบียนที่เก็บไว้ ไม่ใช่สิทธิ์เข้าใช้ต่อเนื่องของอดีตพนักงาน"
        }
      ]
    }
  },
  {
    "id": 653,
    "dom": 3,
    "question": "Several internal applications need a consistent place to look up employee account attributes and group membership. The immediate requirement is to store and retrieve those structured records, rather than run access-review approvals or issue federated login assertions. Which IAM component BEST fits this requirement?",
    "options": [
      "An identity governance workflow for approving entitlement reviews",
      "An access enforcement component that allows or denies resource requests",
      "A directory service holding account attributes and group records",
      "An identity provider function that supplies authentication assertions"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. A directory service provides structured identity and object data for authorized lookup. Platforms may combine functions, but this requirement concerns directory records. Option A is incorrect: Review workflows govern access decisions but are not the directory data-store responsibility described. Option B is incorrect: Enforcement evaluates access requests; the immediate need is structured identity-data storage and lookup. Option D is incorrect: Supplying a federated authentication assertion is distinct from the requested storage-and-lookup function.",
    "short_explanation_en": "Directory services provide structured identity and group data; related IAM functions may be combined in a platform.",
    "question_th": "แอปพลิเคชันภายในหลายระบบต้องมีแหล่งค้นหาคุณลักษณะบัญชีพนักงานและสมาชิกกลุ่มที่สอดคล้องกัน ความต้องการขณะนี้คือจัดเก็บและเรียกใช้ระเบียนที่เป็นโครงสร้าง ไม่ใช่ดำเนินการอนุมัติทบทวนสิทธิ์หรือออกข้อความยืนยันการเข้าสู่ระบบระหว่างระบบ องค์ประกอบ IAM ใดเหมาะสมที่สุด?",
    "options_th": [
      "กระบวนงานกำกับอัตลักษณ์เพื่ออนุมัติการทบทวนสิทธิ์",
      "องค์ประกอบบังคับใช้สิทธิ์ที่อนุญาตหรือปฏิเสธคำขอทรัพยากร",
      "บริการไดเรกทอรีที่เก็บคุณลักษณะบัญชีและระเบียนกลุ่ม",
      "หน้าที่ของ IdP ที่ส่งข้อความยืนยันการยืนยันตัวตน"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: บริการไดเรกทอรีให้ข้อมูลอัตลักษณ์และวัตถุที่มีโครงสร้างเพื่อการค้นหาที่ได้รับอนุญาต แม้แพลตฟอร์มอาจรวมหลายหน้าที่ แต่ความต้องการนี้เกี่ยวกับระเบียนไดเรกทอรี\n- ข้อ A ไม่ถูกต้อง: กระบวนงานทบทวนกำกับการตัดสินใจเรื่องสิทธิ์ แต่ไม่ใช่หน้าที่จัดเก็บข้อมูลไดเรกทอรีตามที่ระบุ\n- ข้อ B ไม่ถูกต้อง: การบังคับใช้ประเมินคำขอเข้าถึง แต่ความต้องการขณะนี้คือการจัดเก็บและค้นหาข้อมูลอัตลักษณ์อย่างเป็นโครงสร้าง\n- ข้อ D ไม่ถูกต้อง: การส่งข้อความยืนยันการยืนยันตัวตนระหว่างระบบเป็นคนละหน้าที่กับการจัดเก็บและค้นหาที่ต้องการ",
    "explanation_detail": {
      "correct": {
        "en": "A directory service provides structured identity and object data for authorized lookup. Platforms may combine functions, but this requirement concerns directory records.",
        "th": "บริการไดเรกทอรีให้ข้อมูลอัตลักษณ์และวัตถุที่มีโครงสร้างเพื่อการค้นหาที่ได้รับอนุญาต แม้แพลตฟอร์มอาจรวมหลายหน้าที่ แต่ความต้องการนี้เกี่ยวกับระเบียนไดเรกทอรี"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Review workflows govern access decisions but are not the directory data-store responsibility described.",
          "text_th": "กระบวนงานทบทวนกำกับการตัดสินใจเรื่องสิทธิ์ แต่ไม่ใช่หน้าที่จัดเก็บข้อมูลไดเรกทอรีตามที่ระบุ"
        },
        {
          "letter": "B",
          "text_en": "Enforcement evaluates access requests; the immediate need is structured identity-data storage and lookup.",
          "text_th": "การบังคับใช้ประเมินคำขอเข้าถึง แต่ความต้องการขณะนี้คือการจัดเก็บและค้นหาข้อมูลอัตลักษณ์อย่างเป็นโครงสร้าง"
        },
        {
          "letter": "D",
          "text_en": "Supplying a federated authentication assertion is distinct from the requested storage-and-lookup function.",
          "text_th": "การส่งข้อความยืนยันการยืนยันตัวตนระหว่างระบบเป็นคนละหน้าที่กับการจัดเก็บและค้นหาที่ต้องการ"
        }
      ]
    }
  },
  {
    "id": 654,
    "dom": 3,
    "question": "A company is connecting three applications to a central sign-in service. Each application will validate a trusted assertion about the employee's authentication instead of checking the employee's password itself. Which component is responsible for creating that assertion?",
    "options": [
      "The application owner approving the employee's business permissions",
      "The identity provider serving the federated applications",
      "The access-review process recertifying existing entitlements",
      "The directory lookup function returning employee contact attributes"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The IdP creates a verifiable assertion representing the authentication event. Each relying application validates it and applies its own access rules. Option A is incorrect: The owner authorizes business access; that approval is not the IdP's authentication assertion. Option C is incorrect: Recertification addresses continuing access need, not creation of a login assertion. Option D is incorrect: Directory attributes may support the IdP, but returning contact records alone does not create an authentication assertion.",
    "short_explanation_en": "In federation, the IdP supplies authentication assertions for relying applications to validate.",
    "question_th": "บริษัทกำลังเชื่อมสามแอปพลิเคชันกับบริการลงชื่อเข้าใช้กลาง แต่ละแอปพลิเคชันจะตรวจสอบข้อความยืนยันจากแหล่งที่เชื่อถือได้เกี่ยวกับการยืนยันตัวตนของพนักงาน แทนที่จะตรวจรหัสผ่านเอง องค์ประกอบใดรับผิดชอบสร้างข้อความยืนยันนั้น?",
    "options_th": [
      "เจ้าของแอปพลิเคชันที่อนุมัติสิทธิ์ตามความจำเป็นทางธุรกิจ",
      "ผู้ให้บริการอัตลักษณ์หรือ IdP ที่ให้บริการแก่แอปพลิเคชันที่เชื่อมโยงกัน",
      "กระบวนการทบทวนสิทธิ์ที่รับรองสิทธิ์เดิมซ้ำ",
      "หน้าที่ค้นหาไดเรกทอรีที่ส่งคืนคุณลักษณะข้อมูลติดต่อพนักงาน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: IdP สร้างข้อความยืนยันที่ตรวจสอบได้เพื่อแทนเหตุการณ์ยืนยันตัวตน แต่ละแอปพลิเคชันที่อาศัยข้อมูลนั้นตรวจสอบข้อความและใช้กฎสิทธิ์ของตน\n- ข้อ A ไม่ถูกต้อง: เจ้าของอนุมัติสิทธิ์ทางธุรกิจ การอนุมัตินั้นไม่ใช่ข้อความยืนยันการยืนยันตัวตนจาก IdP\n- ข้อ C ไม่ถูกต้อง: การรับรองสิทธิ์ซ้ำพิจารณาความจำเป็นต่อเนื่อง ไม่ใช่การสร้างข้อความยืนยันการลงชื่อเข้าใช้\n- ข้อ D ไม่ถูกต้อง: คุณลักษณะในไดเรกทอรีอาจสนับสนุน IdP แต่การส่งระเบียนข้อมูลติดต่อเพียงอย่างเดียวไม่ได้สร้างข้อความยืนยันการยืนยันตัวตน",
    "explanation_detail": {
      "correct": {
        "en": "The IdP creates a verifiable assertion representing the authentication event. Each relying application validates it and applies its own access rules.",
        "th": "IdP สร้างข้อความยืนยันที่ตรวจสอบได้เพื่อแทนเหตุการณ์ยืนยันตัวตน แต่ละแอปพลิเคชันที่อาศัยข้อมูลนั้นตรวจสอบข้อความและใช้กฎสิทธิ์ของตน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The owner authorizes business access; that approval is not the IdP's authentication assertion.",
          "text_th": "เจ้าของอนุมัติสิทธิ์ทางธุรกิจ การอนุมัตินั้นไม่ใช่ข้อความยืนยันการยืนยันตัวตนจาก IdP"
        },
        {
          "letter": "C",
          "text_en": "Recertification addresses continuing access need, not creation of a login assertion.",
          "text_th": "การรับรองสิทธิ์ซ้ำพิจารณาความจำเป็นต่อเนื่อง ไม่ใช่การสร้างข้อความยืนยันการลงชื่อเข้าใช้"
        },
        {
          "letter": "D",
          "text_en": "Directory attributes may support the IdP, but returning contact records alone does not create an authentication assertion.",
          "text_th": "คุณลักษณะในไดเรกทอรีอาจสนับสนุน IdP แต่การส่งระเบียนข้อมูลติดต่อเพียงอย่างเดียวไม่ได้สร้างข้อความยืนยันการยืนยันตัวตน"
        }
      ]
    }
  },
  {
    "id": 655,
    "dom": 3,
    "question": "An IAM team already has an enterprise risk framework. It now needs NIST guidance specifically addressing identity proofing, authentication and federation for an online service. Which reference MOST directly addresses that combined scope?",
    "options": [
      "The NIST Cybersecurity Framework, organizing enterprise cybersecurity outcomes",
      "NIST role-based access control material, defining role assignments and constraints",
      "The NIST SP 800-63 Digital Identity Guidelines series",
      "NIST SP 800-162, explaining attribute-based authorization decisions"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The SP 800-63 series directly covers identity proofing, authentication and federation. It guides digital identity services rather than supplying an IAM software implementation. Option A is incorrect: CSF includes identity-related outcomes, but it is broader than the dedicated digital identity guidance requested. Option B is incorrect: RBAC material addresses role-based authorization, not the combined proofing, authentication and federation scope. Option D is incorrect: SP 800-162 focuses on ABAC; it is not the dedicated series for all three requested digital identity functions.",
    "short_explanation_en": "SP 800-63 addresses proofing, authentication and federation; frameworks and tools have different purposes.",
    "question_th": "ทีม IAM มีกรอบบริหารความเสี่ยงระดับองค์กรอยู่แล้ว ขณะนี้ต้องการแนวทาง NIST ที่มุ่งเรื่องการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และการเชื่อมโยงอัตลักษณ์ระหว่างระบบสำหรับบริการออนไลน์ เอกสารอ้างอิงใดตรงกับขอบเขตรวมนี้มากที่สุด?",
    "options_th": [
      "NIST Cybersecurity Framework ซึ่งจัดหมวดผลลัพธ์ความมั่นคงปลอดภัยระดับองค์กร",
      "เอกสาร RBAC ของ NIST ที่กำหนดการมอบหมายบทบาทและข้อจำกัด",
      "ชุดแนวทางอัตลักษณ์ดิจิทัล NIST SP 800-63",
      "NIST SP 800-162 ซึ่งอธิบายการตัดสินสิทธิ์ตามคุณลักษณะ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: ชุด SP 800-63 ครอบคลุมการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และ federation โดยตรง เป็นแนวทางบริการอัตลักษณ์ดิจิทัล ไม่ใช่ซอฟต์แวร์ IAM ที่พร้อมใช้งาน\n- ข้อ A ไม่ถูกต้อง: CSF มีผลลัพธ์ที่เกี่ยวกับอัตลักษณ์ แต่กว้างกว่าแนวทางเฉพาะด้านอัตลักษณ์ดิจิทัลที่ต้องการ\n- ข้อ B ไม่ถูกต้อง: เอกสาร RBAC เน้นการอนุญาตตามบทบาท ไม่ครอบคลุมขอบเขตรวมด้านพิสูจน์อัตลักษณ์ ยืนยันตัวตน และ federation ที่ระบุ\n- ข้อ D ไม่ถูกต้อง: SP 800-162 มุ่ง ABAC ไม่ใช่ชุดแนวทางเฉพาะสำหรับหน้าที่อัตลักษณ์ดิจิทัลทั้งสามที่ต้องการ",
    "explanation_detail": {
      "correct": {
        "en": "The SP 800-63 series directly covers identity proofing, authentication and federation. It guides digital identity services rather than supplying an IAM software implementation.",
        "th": "ชุด SP 800-63 ครอบคลุมการพิสูจน์อัตลักษณ์ การยืนยันตัวตน และ federation โดยตรง เป็นแนวทางบริการอัตลักษณ์ดิจิทัล ไม่ใช่ซอฟต์แวร์ IAM ที่พร้อมใช้งาน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "CSF includes identity-related outcomes, but it is broader than the dedicated digital identity guidance requested.",
          "text_th": "CSF มีผลลัพธ์ที่เกี่ยวกับอัตลักษณ์ แต่กว้างกว่าแนวทางเฉพาะด้านอัตลักษณ์ดิจิทัลที่ต้องการ"
        },
        {
          "letter": "B",
          "text_en": "RBAC material addresses role-based authorization, not the combined proofing, authentication and federation scope.",
          "text_th": "เอกสาร RBAC เน้นการอนุญาตตามบทบาท ไม่ครอบคลุมขอบเขตรวมด้านพิสูจน์อัตลักษณ์ ยืนยันตัวตน และ federation ที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "SP 800-162 focuses on ABAC; it is not the dedicated series for all three requested digital identity functions.",
          "text_th": "SP 800-162 มุ่ง ABAC ไม่ใช่ชุดแนวทางเฉพาะสำหรับหน้าที่อัตลักษณ์ดิจิทัลทั้งสามที่ต้องการ"
        }
      ]
    }
  },
  {
    "id": 656,
    "dom": 3,
    "question": "A team will deploy a nightly bot that reads a shipping database and writes a summary report. It must continue operating when individual employees change jobs. Which provisioning approach BEST supports secure operation and lifecycle management?",
    "options": [
      "Use a dedicated workload identity with a responsible owner, task-scoped permissions and review arrangements",
      "Use the developer's personal account and transfer its password whenever the developer changes roles",
      "Use a shared administrator account and record the bot name in the reporting schedule",
      "Use a dedicated identity with broad database rights and review it only if report generation fails"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. A dedicated, owned identity separates automation from personal accounts and supports permission review and retirement. Its authentication method must suit an unattended workload. Option B is incorrect: This couples automation to a personal identity and obscures accountability and lifecycle control. Option C is incorrect: A schedule entry does not justify administrative permissions or distinguish the bot's activity from other users of the shared account. Option D is incorrect: Broad rights exceed the stated task, and application failure is not a substitute for continuing access review.",
    "short_explanation_en": "Automated workloads need their own accountable, appropriately scoped identity lifecycle.",
    "question_th": "ทีมจะติดตั้งบอตทำงานทุกคืนเพื่ออ่านฐานข้อมูลการจัดส่งและเขียนรายงานสรุป บอตต้องทำงานต่อได้เมื่อพนักงานแต่ละคนเปลี่ยนงาน แนวทางจัดเตรียมสิทธิ์ใดสนับสนุนการทำงานที่ปลอดภัยและการจัดการวงจรชีวิตได้เหมาะสมที่สุด?",
    "options_th": [
      "ใช้ตัวตนสำหรับภาระงานโดยเฉพาะ กำหนดผู้รับผิดชอบ สิทธิ์ตามงาน และแนวทางทบทวน",
      "ใช้บัญชีส่วนตัวของผู้พัฒนาและโอนรหัสผ่านเมื่อผู้พัฒนาเปลี่ยนบทบาท",
      "ใช้บัญชีผู้ดูแลร่วมกัน และบันทึกชื่อบอตในตารางรายงาน",
      "ใช้ตัวตนเฉพาะที่มีสิทธิ์ฐานข้อมูลกว้าง และทบทวนเมื่อสร้างรายงานล้มเหลวเท่านั้น"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: ตัวตนเฉพาะที่มีผู้รับผิดชอบแยกงานอัตโนมัติจากบัญชีบุคคล และสนับสนุนการทบทวนสิทธิ์กับเลิกใช้งาน วิธียืนยันตัวตนต้องเหมาะกับงานที่ไม่มีคนคอยตอบ\n- ข้อ B ไม่ถูกต้อง: วิธีนี้ผูกงานอัตโนมัติกับตัวตนส่วนบุคคล และทำให้ความรับผิดชอบกับการควบคุมวงจรชีวิตไม่ชัดเจน\n- ข้อ C ไม่ถูกต้อง: การบันทึกในตารางไม่ได้เป็นเหตุผลให้สิทธิ์ผู้ดูแล หรือแยกกิจกรรมบอตจากผู้ใช้อื่นของบัญชีร่วม\n- ข้อ D ไม่ถูกต้อง: สิทธิ์กว้างเกินงานที่ระบุ และการรอระบบล้มเหลวไม่ใช่สิ่งทดแทนการทบทวนความจำเป็นของสิทธิ์อย่างต่อเนื่อง",
    "explanation_detail": {
      "correct": {
        "en": "A dedicated, owned identity separates automation from personal accounts and supports permission review and retirement. Its authentication method must suit an unattended workload.",
        "th": "ตัวตนเฉพาะที่มีผู้รับผิดชอบแยกงานอัตโนมัติจากบัญชีบุคคล และสนับสนุนการทบทวนสิทธิ์กับเลิกใช้งาน วิธียืนยันตัวตนต้องเหมาะกับงานที่ไม่มีคนคอยตอบ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "This couples automation to a personal identity and obscures accountability and lifecycle control.",
          "text_th": "วิธีนี้ผูกงานอัตโนมัติกับตัวตนส่วนบุคคล และทำให้ความรับผิดชอบกับการควบคุมวงจรชีวิตไม่ชัดเจน"
        },
        {
          "letter": "C",
          "text_en": "A schedule entry does not justify administrative permissions or distinguish the bot's activity from other users of the shared account.",
          "text_th": "การบันทึกในตารางไม่ได้เป็นเหตุผลให้สิทธิ์ผู้ดูแล หรือแยกกิจกรรมบอตจากผู้ใช้อื่นของบัญชีร่วม"
        },
        {
          "letter": "D",
          "text_en": "Broad rights exceed the stated task, and application failure is not a substitute for continuing access review.",
          "text_th": "สิทธิ์กว้างเกินงานที่ระบุ และการรอระบบล้มเหลวไม่ใช่สิ่งทดแทนการทบทวนความจำเป็นของสิทธิ์อย่างต่อเนื่อง"
        }
      ]
    }
  },
  {
    "id": 657,
    "dom": 3,
    "question": "A remote onboarding service lets an applicant choose a username and password. Before issuing an employee account, organizational policy requires checking that the applicant is the person named in the approved hiring record. Which additional activity addresses this requirement?",
    "options": [
      "Assign a standard role and use its permissions as evidence of the applicant's identity",
      "Ask the applicant to enter the newly chosen password a second time",
      "Enable an access review after the account has received its initial permissions",
      "Perform identity proofing using the organization's approved evidence-checking process"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Identity proofing establishes the required relationship between the applicant and the claimed person. Authenticating a chosen password alone cannot establish that relationship. Option A is incorrect: Role assignment establishes access scope, not a verified link to the person in the hiring record. Option B is incorrect: Repeating a self-selected secret shows control of that secret, not the claimed real-life identity. Option C is incorrect: Reviewing entitlements later does not perform the required identity check before issuance.",
    "short_explanation_en": "Identity proofing establishes who an applicant is; later authentication demonstrates control of an authenticator.",
    "question_th": "บริการรับพนักงานทางไกลให้ผู้สมัครเลือกชื่อผู้ใช้และรหัสผ่าน ก่อนออกบัญชีพนักงาน นโยบายกำหนดให้ตรวจสอบว่าผู้สมัครเป็นบุคคลที่มีชื่อในระเบียนการจ้างที่อนุมัติ กิจกรรมเพิ่มเติมใดตอบสนองข้อกำหนดนี้?",
    "options_th": [
      "กำหนดบทบาทมาตรฐานและใช้สิทธิ์ของบทบาทเป็นหลักฐานตัวตนผู้สมัคร",
      "ให้ผู้สมัครกรอกรหัสผ่านที่เพิ่งเลือกอีกครั้ง",
      "เปิดการทบทวนสิทธิ์หลังบัญชีได้รับสิทธิ์เริ่มต้นแล้ว",
      "ดำเนินการพิสูจน์อัตลักษณ์ด้วยกระบวนการตรวจหลักฐานที่องค์กรอนุมัติ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การพิสูจน์อัตลักษณ์สร้างความเชื่อมโยงที่ต้องการระหว่างผู้สมัครกับบุคคลที่อ้าง การตรวจรหัสผ่านที่เลือกไว้เพียงอย่างเดียวทำเช่นนั้นไม่ได้\n- ข้อ A ไม่ถูกต้อง: การกำหนดบทบาทกำหนดขอบเขตสิทธิ์ ไม่ได้ตรวจสอบความเชื่อมโยงกับบุคคลในระเบียนการจ้าง\n- ข้อ B ไม่ถูกต้อง: การกรอกความลับที่เลือกเองซ้ำแสดงการควบคุมความลับนั้น ไม่ใช่พิสูจน์ตัวตนจริงที่อ้าง\n- ข้อ C ไม่ถูกต้อง: การทบทวนสิทธิ์ภายหลังไม่ได้ตรวจตัวตนตามที่กำหนดก่อนออกบัญชี",
    "explanation_detail": {
      "correct": {
        "en": "Identity proofing establishes the required relationship between the applicant and the claimed person. Authenticating a chosen password alone cannot establish that relationship.",
        "th": "การพิสูจน์อัตลักษณ์สร้างความเชื่อมโยงที่ต้องการระหว่างผู้สมัครกับบุคคลที่อ้าง การตรวจรหัสผ่านที่เลือกไว้เพียงอย่างเดียวทำเช่นนั้นไม่ได้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Role assignment establishes access scope, not a verified link to the person in the hiring record.",
          "text_th": "การกำหนดบทบาทกำหนดขอบเขตสิทธิ์ ไม่ได้ตรวจสอบความเชื่อมโยงกับบุคคลในระเบียนการจ้าง"
        },
        {
          "letter": "B",
          "text_en": "Repeating a self-selected secret shows control of that secret, not the claimed real-life identity.",
          "text_th": "การกรอกความลับที่เลือกเองซ้ำแสดงการควบคุมความลับนั้น ไม่ใช่พิสูจน์ตัวตนจริงที่อ้าง"
        },
        {
          "letter": "C",
          "text_en": "Reviewing entitlements later does not perform the required identity check before issuance.",
          "text_th": "การทบทวนสิทธิ์ภายหลังไม่ได้ตรวจตัวตนตามที่กำหนดก่อนออกบัญชี"
        }
      ]
    }
  },
  {
    "id": 658,
    "dom": 3,
    "question": "A support analyst must read current equipment records to answer customer inquiries. The approved job description does not include changing records, creating accounts or maintaining the application. Which permission set BEST applies least privilege?",
    "options": [
      "Read and modify equipment records, with no account-management permission",
      "Read the required equipment records, without modification or administrative rights",
      "Administer the application using a separate account while handling inquiries",
      "Use an older exported report with no access to the current records"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. These permissions satisfy the confirmed task while excluding unnecessary actions. Least privilege is based on required work, not the broadest convenient role. Option A is incorrect: Removing account administration is useful, but write access still exceeds the stated read-only duty. Option C is incorrect: A separate account does not justify granting administration to someone whose job does not require it. Option D is incorrect: This avoids granting access but fails the legitimate requirement for current equipment information.",
    "short_explanation_en": "Least privilege grants enough access for the actual task while excluding unnecessary actions.",
    "question_th": "นักวิเคราะห์ฝ่ายสนับสนุนต้องอ่านระเบียนอุปกรณ์ปัจจุบันเพื่อตอบลูกค้า หน้าที่ที่อนุมัติไม่รวมการแก้ไขระเบียน สร้างบัญชี หรือดูแลแอปพลิเคชัน ชุดสิทธิ์ใดใช้หลักให้สิทธิ์เท่าที่จำเป็นได้เหมาะสมที่สุด?",
    "options_th": [
      "อ่านและแก้ไขระเบียนอุปกรณ์ได้ แต่ไม่มีสิทธิ์จัดการบัญชี",
      "อ่านระเบียนอุปกรณ์ที่จำเป็นได้ โดยไม่มีสิทธิ์แก้ไขหรือดูแลระบบ",
      "ดูแลแอปพลิเคชันด้วยบัญชีแยกขณะตอบคำถามลูกค้า",
      "ใช้รายงานส่งออกเก่าโดยไม่มีสิทธิ์เข้าถึงระเบียนปัจจุบัน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: สิทธิ์นี้รองรับงานที่ยืนยันแล้วและไม่รวมการกระทำที่ไม่จำเป็น หลักสิทธิ์เท่าที่จำเป็นอิงงานที่ต้องทำ ไม่ใช่บทบาทกว้างที่สุดที่สะดวก\n- ข้อ A ไม่ถูกต้อง: การไม่มีสิทธิ์จัดการบัญชีเป็นประโยชน์ แต่สิทธิ์แก้ไขยังเกินหน้าที่ที่ต้องอ่านเท่านั้น\n- ข้อ C ไม่ถูกต้อง: การใช้บัญชีแยกไม่ได้เป็นเหตุผลให้สิทธิ์ดูแลระบบแก่ผู้ที่ไม่ต้องใช้ตามหน้าที่\n- ข้อ D ไม่ถูกต้อง: วิธีนี้ไม่ให้สิทธิ์เข้าถึง แต่ไม่ตอบสนองความต้องการข้อมูลอุปกรณ์ปัจจุบันที่ชอบด้วยหน้าที่",
    "explanation_detail": {
      "correct": {
        "en": "These permissions satisfy the confirmed task while excluding unnecessary actions. Least privilege is based on required work, not the broadest convenient role.",
        "th": "สิทธิ์นี้รองรับงานที่ยืนยันแล้วและไม่รวมการกระทำที่ไม่จำเป็น หลักสิทธิ์เท่าที่จำเป็นอิงงานที่ต้องทำ ไม่ใช่บทบาทกว้างที่สุดที่สะดวก"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Removing account administration is useful, but write access still exceeds the stated read-only duty.",
          "text_th": "การไม่มีสิทธิ์จัดการบัญชีเป็นประโยชน์ แต่สิทธิ์แก้ไขยังเกินหน้าที่ที่ต้องอ่านเท่านั้น"
        },
        {
          "letter": "C",
          "text_en": "A separate account does not justify granting administration to someone whose job does not require it.",
          "text_th": "การใช้บัญชีแยกไม่ได้เป็นเหตุผลให้สิทธิ์ดูแลระบบแก่ผู้ที่ไม่ต้องใช้ตามหน้าที่"
        },
        {
          "letter": "D",
          "text_en": "This avoids granting access but fails the legitimate requirement for current equipment information.",
          "text_th": "วิธีนี้ไม่ให้สิทธิ์เข้าถึง แต่ไม่ตอบสนองความต้องการข้อมูลอุปกรณ์ปัจจุบันที่ชอบด้วยหน้าที่"
        }
      ]
    }
  },
  {
    "id": 659,
    "dom": 3,
    "question": "A purchasing bot creates supplier-account change requests. Its identity can also approve those same requests, so a faulty bot action could change payment details without another decision maker. Policy requires independent approval of each change. Which adjustment BEST enforces that requirement?",
    "options": [
      "Keep both permissions and send the bot's daily activity report to its owner",
      "Require two credentials for the bot while keeping both request and approval permissions",
      "Remove the bot's approval right, retain its request right, and assign approval outside its control",
      "Put request and approval in separate roles but assign both roles to the bot"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Removing the bot's approval right and separating approval from its control enforces independence. A second identity that the bot can control would not establish this separation. Option A is incorrect: Logging supports oversight after actions, but does not require an independent approval before the change. Option B is incorrect: Changing authentication does not separate the conflicting authorizations held by the same identity. Option D is incorrect: Two role names do not enforce independence when the same identity retains both effective permissions.",
    "short_explanation_en": "SoD separates conflicting effective permissions, including those granted to bots.",
    "question_th": "บอตจัดซื้อสร้างคำขอเปลี่ยนบัญชีผู้ขาย ตัวตนของบอตยังอนุมัติคำขอเดียวกันได้ จึงอาจเปลี่ยนรายละเอียดชำระเงินจากการทำงานผิดพลาดโดยไม่มีผู้ตัดสินใจอื่น นโยบายกำหนดให้ทุกการเปลี่ยนแปลงได้รับการอนุมัติอย่างอิสระ การปรับใดบังคับใช้ข้อกำหนดนี้ได้เหมาะสมที่สุด?",
    "options_th": [
      "คงสิทธิ์ทั้งสอง และส่งรายงานกิจกรรมรายวันให้ผู้รับผิดชอบบอต",
      "ให้บอตใช้สิ่งรับรองสองรายการ โดยคงสิทธิ์ร้องขอและอนุมัติทั้งคู่",
      "ถอนสิทธิ์อนุมัติของบอต คงสิทธิ์ร้องขอ และกำหนดผู้อนุมัติที่มีอำนาจนอกการควบคุมของบอต",
      "แยกสิทธิ์ร้องขอกับอนุมัติเป็นคนละบทบาท แต่กำหนดทั้งสองให้บอต"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การถอนสิทธิ์อนุมัติของบอตและแยกการอนุมัติออกจากการควบคุมของบอตบังคับให้เป็นอิสระ ตัวตนที่สองที่บอตควบคุมได้ไม่สร้างการแยกดังกล่าว\n- ข้อ A ไม่ถูกต้อง: การบันทึกช่วยกำกับภายหลัง แต่ไม่ได้บังคับให้มีการอนุมัติอิสระก่อนเปลี่ยนแปลง\n- ข้อ B ไม่ถูกต้อง: การเปลี่ยนการยืนยันตัวตนไม่ได้แยกสิทธิ์ที่ขัดกันซึ่งอยู่ในตัวตนเดียว\n- ข้อ D ไม่ถูกต้อง: ชื่อบทบาทสองชื่อไม่ได้สร้างความเป็นอิสระ เมื่อตัวตนเดียวยังมีสิทธิ์ทั้งสองจริง",
    "explanation_detail": {
      "correct": {
        "en": "Removing the bot's approval right and separating approval from its control enforces independence. A second identity that the bot can control would not establish this separation.",
        "th": "การถอนสิทธิ์อนุมัติของบอตและแยกการอนุมัติออกจากการควบคุมของบอตบังคับให้เป็นอิสระ ตัวตนที่สองที่บอตควบคุมได้ไม่สร้างการแยกดังกล่าว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Logging supports oversight after actions, but does not require an independent approval before the change.",
          "text_th": "การบันทึกช่วยกำกับภายหลัง แต่ไม่ได้บังคับให้มีการอนุมัติอิสระก่อนเปลี่ยนแปลง"
        },
        {
          "letter": "B",
          "text_en": "Changing authentication does not separate the conflicting authorizations held by the same identity.",
          "text_th": "การเปลี่ยนการยืนยันตัวตนไม่ได้แยกสิทธิ์ที่ขัดกันซึ่งอยู่ในตัวตนเดียว"
        },
        {
          "letter": "D",
          "text_en": "Two role names do not enforce independence when the same identity retains both effective permissions.",
          "text_th": "ชื่อบทบาทสองชื่อไม่ได้สร้างความเป็นอิสระ เมื่อตัวตนเดียวยังมีสิทธิ์ทั้งสองจริง"
        }
      ]
    }
  },
  {
    "id": 660,
    "dom": 3,
    "question": "A software team requires one person to submit a release and a different authorized person to approve it. Permissions prevent either person from completing both steps alone. A manager states that this design makes a malicious release impossible. Which response is MOST accurate?",
    "options": [
      "It reduces unilateral abuse, but collusion or other control failures can still permit harm",
      "It removes malicious-release risk because two different people must participate",
      "It only counts as separation of duties when a third person performs another approval",
      "It adds no security value because authorized users can still make mistakes"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. SoD limits a single person's control over sensitive steps. It does not guarantee that participants cannot collude or that every supporting control will work. Option B is incorrect: Different participants reduce unilateral abuse, but the number of people is not a guarantee against collusion. Option C is incorrect: There is no universal three-person requirement; the relevant issue is separation of incompatible duties in the stated workflow. Option D is incorrect: Residual risk does not mean the control has no value; preventing one person from controlling both steps is a meaningful reduction.",
    "short_explanation_en": "SoD reduces unilateral abuse; it does not eliminate collusion or all other risks.",
    "question_th": "ทีมซอฟต์แวร์กำหนดให้คนหนึ่งส่งคำขอเผยแพร่ และอีกคนที่ได้รับอนุญาตเป็นผู้อนุมัติ สิทธิ์ป้องกันไม่ให้คนใดทำครบสองขั้นตอนโดยลำพัง ผู้จัดการกล่าวว่าการออกแบบนี้ทำให้การเผยแพร่ที่ประสงค์ร้ายเป็นไปไม่ได้ คำตอบใดถูกต้องที่สุด?",
    "options_th": [
      "ช่วยลดการกระทำมิชอบโดยลำพัง แต่การสมรู้ร่วมคิดหรือมาตรการอื่นล้มเหลวยังอาจก่อความเสียหาย",
      "กำจัดความเสี่ยงการเผยแพร่ที่ประสงค์ร้าย เพราะต้องมีคนสองคน",
      "จะถือเป็นการแบ่งแยกหน้าที่ได้ก็ต่อเมื่อมีคนที่สามอนุมัติอีกครั้ง",
      "ไม่เพิ่มประโยชน์ด้านความปลอดภัย เพราะผู้มีสิทธิ์ยังทำผิดพลาดได้"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: SoD จำกัดการควบคุมขั้นตอนสำคัญโดยคนเดียว แต่ไม่ได้รับประกันว่าผู้เกี่ยวข้องจะไม่สมรู้ร่วมคิด หรือมาตรการสนับสนุนทุกอย่างจะทำงานสำเร็จ\n- ข้อ B ไม่ถูกต้อง: ผู้เกี่ยวข้องต่างคนช่วยลดการกระทำโดยลำพัง แต่จำนวนคนไม่ได้รับประกันการป้องกันการสมรู้ร่วมคิด\n- ข้อ C ไม่ถูกต้อง: ไม่มีข้อกำหนดสากลว่าต้องมีสามคน ประเด็นคือการแยกหน้าที่ที่ขัดกันในกระบวนการที่ระบุ\n- ข้อ D ไม่ถูกต้อง: การมีความเสี่ยงหลงเหลือไม่ได้แปลว่ามาตรการไร้ประโยชน์ การป้องกันคนเดียวควบคุมสองขั้นตอนลดความเสี่ยงได้จริง",
    "explanation_detail": {
      "correct": {
        "en": "SoD limits a single person's control over sensitive steps. It does not guarantee that participants cannot collude or that every supporting control will work.",
        "th": "SoD จำกัดการควบคุมขั้นตอนสำคัญโดยคนเดียว แต่ไม่ได้รับประกันว่าผู้เกี่ยวข้องจะไม่สมรู้ร่วมคิด หรือมาตรการสนับสนุนทุกอย่างจะทำงานสำเร็จ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Different participants reduce unilateral abuse, but the number of people is not a guarantee against collusion.",
          "text_th": "ผู้เกี่ยวข้องต่างคนช่วยลดการกระทำโดยลำพัง แต่จำนวนคนไม่ได้รับประกันการป้องกันการสมรู้ร่วมคิด"
        },
        {
          "letter": "C",
          "text_en": "There is no universal three-person requirement; the relevant issue is separation of incompatible duties in the stated workflow.",
          "text_th": "ไม่มีข้อกำหนดสากลว่าต้องมีสามคน ประเด็นคือการแยกหน้าที่ที่ขัดกันในกระบวนการที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "Residual risk does not mean the control has no value; preventing one person from controlling both steps is a meaningful reduction.",
          "text_th": "การมีความเสี่ยงหลงเหลือไม่ได้แปลว่ามาตรการไร้ประโยชน์ การป้องกันคนเดียวควบคุมสองขั้นตอนลดความเสี่ยงได้จริง"
        }
      ]
    }
  },
  {
    "id": 661,
    "dom": 3,
    "question": "An engineering file service lets each file owner choose which colleagues may read or edit that file. The service enforces the permissions chosen by the owner, and no mandatory classification policy overrides that choice in this scenario. Which access control model is illustrated?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "Attribute-Based Access Control (ABAC)",
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. DAC delegates access choices to the owner or another authorized controller. System enforcement of those choices is fully consistent with DAC. Option A is incorrect: The deciding fact is the individual owner's discretion, not permission assignment through predefined job roles. Option B is incorrect: The scenario does not describe a policy evaluating subject, resource and contextual attributes; it specifies owner-directed grants. Option C is incorrect: MAC limits an ordinary owner's ability to override centrally established policy, unlike the discretion specified here.",
    "short_explanation_en": "DAC concerns delegated permission-setting authority, not an absence of system enforcement.",
    "question_th": "บริการไฟล์ฝ่ายวิศวกรรมให้เจ้าของไฟล์แต่ละรายเลือกได้ว่าเพื่อนร่วมงานคนใดอ่านหรือแก้ไขไฟล์นั้นได้ บริการบังคับใช้สิทธิ์ที่เจ้าของเลือก และในกรณีนี้ไม่มีนโยบายจำแนกข้อมูลแบบบังคับที่อยู่เหนือการเลือกนั้น กรณีนี้แสดงแบบจำลองควบคุมการเข้าถึงใด?",
    "options_th": [
      "การควบคุมการเข้าถึงตามบทบาท (RBAC)",
      "การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)",
      "การควบคุมการเข้าถึงแบบบังคับ (MAC)",
      "การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: DAC ให้อำนาจเลือกสิทธิ์แก่เจ้าของหรือผู้ควบคุมที่ได้รับอนุญาต การที่ระบบบังคับใช้สิทธิ์เหล่านั้นสอดคล้องกับ DAC\n- ข้อ A ไม่ถูกต้อง: ข้อเท็จจริงสำคัญคือดุลยพินิจเจ้าของแต่ละราย ไม่ใช่การให้สิทธิ์ผ่านบทบาทงานที่กำหนดไว้\n- ข้อ B ไม่ถูกต้อง: กรณีนี้ไม่ได้ระบุนโยบายประเมินคุณลักษณะผู้ร้องขอ ทรัพยากร และบริบท แต่ระบุการให้สิทธิ์โดยเจ้าของ\n- ข้อ C ไม่ถูกต้อง: MAC จำกัดการที่เจ้าของทั่วไปจะข้ามนโยบายส่วนกลาง ต่างจากดุลยพินิจที่ระบุในกรณีนี้",
    "explanation_detail": {
      "correct": {
        "en": "DAC delegates access choices to the owner or another authorized controller. System enforcement of those choices is fully consistent with DAC.",
        "th": "DAC ให้อำนาจเลือกสิทธิ์แก่เจ้าของหรือผู้ควบคุมที่ได้รับอนุญาต การที่ระบบบังคับใช้สิทธิ์เหล่านั้นสอดคล้องกับ DAC"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The deciding fact is the individual owner's discretion, not permission assignment through predefined job roles.",
          "text_th": "ข้อเท็จจริงสำคัญคือดุลยพินิจเจ้าของแต่ละราย ไม่ใช่การให้สิทธิ์ผ่านบทบาทงานที่กำหนดไว้"
        },
        {
          "letter": "B",
          "text_en": "The scenario does not describe a policy evaluating subject, resource and contextual attributes; it specifies owner-directed grants.",
          "text_th": "กรณีนี้ไม่ได้ระบุนโยบายประเมินคุณลักษณะผู้ร้องขอ ทรัพยากร และบริบท แต่ระบุการให้สิทธิ์โดยเจ้าของ"
        },
        {
          "letter": "C",
          "text_en": "MAC limits an ordinary owner's ability to override centrally established policy, unlike the discretion specified here.",
          "text_th": "MAC จำกัดการที่เจ้าของทั่วไปจะข้ามนโยบายส่วนกลาง ต่างจากดุลยพินิจที่ระบุในกรณีนี้"
        }
      ]
    }
  },
  {
    "id": 662,
    "dom": 3,
    "question": "A classified research system enforces centrally assigned labels. Policy requires both suitable clearance and a documented project need before a user may read a document. A researcher has the required clearance but is not assigned to the project. How should the access request be handled?",
    "options": [
      "Grant read access because the clearance satisfies the document's classification level",
      "Deny access unless the required project need is established through the authorized process",
      "Let the document owner bypass the project condition by adding the researcher to a sharing list",
      "Grant temporary read access and review the project need after the researcher finishes"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Mandatory policy must enforce both conditions. Appropriate clearance alone does not establish need-to-know or authorize this project resource. Option A is incorrect: Clearance satisfies only one of the two explicit policy conditions; the project need is still absent. Option C is incorrect: An ordinary owner cannot use discretionary sharing to override the mandatory condition in the scenario. Option D is incorrect: Temporary access still violates the requirement to establish project need before reading.",
    "short_explanation_en": "Clearance and need-to-know are separate access conditions when required by mandatory policy.",
    "question_th": "ระบบวิจัยข้อมูลลับบังคับใช้ป้ายกำกับที่กำหนดจากส่วนกลาง นโยบายกำหนดว่าก่อนอ่านเอกสาร ผู้ใช้ต้องมีทั้งระดับอนุญาตด้านความลับที่เหมาะสมและความจำเป็นต่องานโครงการที่บันทึกไว้ นักวิจัยมีระดับอนุญาตตามที่ต้องการ แต่ไม่ได้รับมอบหมายให้ทำโครงการ ควรจัดการคำขอเข้าถึงอย่างไร?",
    "options_th": [
      "ให้สิทธิ์อ่าน เพราะระดับอนุญาตตรงกับชั้นความลับของเอกสาร",
      "ปฏิเสธสิทธิ์จนกว่าความจำเป็นต่องานโครงการจะได้รับการยืนยันผ่านกระบวนการที่มีอำนาจ",
      "ให้เจ้าของเอกสารข้ามเงื่อนไขโครงการโดยเพิ่มนักวิจัยในรายการแบ่งปัน",
      "ให้สิทธิ์อ่านชั่วคราว และทบทวนความจำเป็นหลังนักวิจัยอ่านเสร็จ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: นโยบายแบบบังคับต้องใช้ทั้งสองเงื่อนไข ระดับอนุญาตที่เหมาะสมเพียงอย่างเดียวไม่ได้สร้างความจำเป็นต้องรู้หรือให้สิทธิ์ทรัพยากรโครงการนี้\n- ข้อ A ไม่ถูกต้อง: ระดับอนุญาตตรงตามเงื่อนไขเพียงข้อเดียวจากสองข้อ ยังไม่มีความจำเป็นต่องานโครงการ\n- ข้อ C ไม่ถูกต้อง: เจ้าของทั่วไปใช้การแบ่งปันตามดุลยพินิจข้ามเงื่อนไขแบบบังคับในกรณีนี้ไม่ได้\n- ข้อ D ไม่ถูกต้อง: การให้สิทธิ์ชั่วคราวยังละเมิดข้อกำหนดให้ยืนยันความจำเป็นต่อโครงการก่อนอ่าน",
    "explanation_detail": {
      "correct": {
        "en": "Mandatory policy must enforce both conditions. Appropriate clearance alone does not establish need-to-know or authorize this project resource.",
        "th": "นโยบายแบบบังคับต้องใช้ทั้งสองเงื่อนไข ระดับอนุญาตที่เหมาะสมเพียงอย่างเดียวไม่ได้สร้างความจำเป็นต้องรู้หรือให้สิทธิ์ทรัพยากรโครงการนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Clearance satisfies only one of the two explicit policy conditions; the project need is still absent.",
          "text_th": "ระดับอนุญาตตรงตามเงื่อนไขเพียงข้อเดียวจากสองข้อ ยังไม่มีความจำเป็นต่องานโครงการ"
        },
        {
          "letter": "C",
          "text_en": "An ordinary owner cannot use discretionary sharing to override the mandatory condition in the scenario.",
          "text_th": "เจ้าของทั่วไปใช้การแบ่งปันตามดุลยพินิจข้ามเงื่อนไขแบบบังคับในกรณีนี้ไม่ได้"
        },
        {
          "letter": "D",
          "text_en": "Temporary access still violates the requirement to establish project need before reading.",
          "text_th": "การให้สิทธิ์ชั่วคราวยังละเมิดข้อกำหนดให้ยืนยันความจำเป็นต่อโครงการก่อนอ่าน"
        }
      ]
    }
  },
  {
    "id": 663,
    "dom": 3,
    "question": "A service company has hundreds of dispatchers. Management wants one approved set of permissions for the dispatcher job, with employees assigned to that set when they join the function. Changes to the job's permissions should be managed through the defined role rather than individual grants. Which model MOST directly supports this design?",
    "options": [
      "Role-Based Access Control (RBAC)",
      "Discretionary Access Control (DAC)",
      "Mandatory Access Control (MAC)",
      "Attribute-Based Access Control (ABAC)"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. RBAC associates permissions with a role and assigns users to that role. This supports consistent administration for the defined job function. Option B is incorrect: Owner-directed individual sharing does not most directly express the requested reusable job-role design. Option C is incorrect: The scenario specifies job-role permission assignment, not mandatory sensitivity labels and subject authorizations. Option D is incorrect: ABAC can use job attributes, but the design explicitly calls for permissions assigned to reusable roles, which is RBAC's direct organizing mechanism.",
    "short_explanation_en": "RBAC organizes permission assignment through defined roles and authorized role membership.",
    "question_th": "บริษัทบริการมีเจ้าหน้าที่จัดส่งหลายร้อยคน ผู้บริหารต้องการชุดสิทธิ์ที่อนุมัติหนึ่งชุดสำหรับงานจัดส่ง โดยกำหนดพนักงานให้ใช้ชุดนั้นเมื่อเข้าทำหน้าที่ การเปลี่ยนสิทธิ์ของงานควรจัดการผ่านบทบาทที่กำหนด แทนการให้สิทธิ์รายคน แบบจำลองใดสนับสนุนการออกแบบนี้ได้ตรงที่สุด?",
    "options_th": [
      "การควบคุมการเข้าถึงตามบทบาท (RBAC)",
      "การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)",
      "การควบคุมการเข้าถึงแบบบังคับ (MAC)",
      "การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: RBAC ผูกสิทธิ์กับบทบาทและกำหนดผู้ใช้ให้มีบทบาทนั้น จึงสนับสนุนการบริหารที่สอดคล้องกันสำหรับหน้าที่งานที่กำหนด\n- ข้อ B ไม่ถูกต้อง: การแบ่งปันรายคนตามดุลยพินิจเจ้าของไม่ได้แสดงการออกแบบที่นำบทบาทงานกลับมาใช้ซ้ำได้ตรงที่สุด\n- ข้อ C ไม่ถูกต้อง: กรณีนี้ระบุการให้สิทธิ์ตามบทบาทงาน ไม่ใช่ป้ายกำกับความอ่อนไหวแบบบังคับและการอนุญาตผู้เข้าถึง\n- ข้อ D ไม่ถูกต้อง: ABAC ใช้คุณลักษณะงานได้ แต่การออกแบบระบุชัดให้ผูกสิทธิ์กับบทบาทที่ใช้ซ้ำ ซึ่งเป็นกลไกจัดระเบียบโดยตรงของ RBAC",
    "explanation_detail": {
      "correct": {
        "en": "RBAC associates permissions with a role and assigns users to that role. This supports consistent administration for the defined job function.",
        "th": "RBAC ผูกสิทธิ์กับบทบาทและกำหนดผู้ใช้ให้มีบทบาทนั้น จึงสนับสนุนการบริหารที่สอดคล้องกันสำหรับหน้าที่งานที่กำหนด"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Owner-directed individual sharing does not most directly express the requested reusable job-role design.",
          "text_th": "การแบ่งปันรายคนตามดุลยพินิจเจ้าของไม่ได้แสดงการออกแบบที่นำบทบาทงานกลับมาใช้ซ้ำได้ตรงที่สุด"
        },
        {
          "letter": "C",
          "text_en": "The scenario specifies job-role permission assignment, not mandatory sensitivity labels and subject authorizations.",
          "text_th": "กรณีนี้ระบุการให้สิทธิ์ตามบทบาทงาน ไม่ใช่ป้ายกำกับความอ่อนไหวแบบบังคับและการอนุญาตผู้เข้าถึง"
        },
        {
          "letter": "D",
          "text_en": "ABAC can use job attributes, but the design explicitly calls for permissions assigned to reusable roles, which is RBAC's direct organizing mechanism.",
          "text_th": "ABAC ใช้คุณลักษณะงานได้ แต่การออกแบบระบุชัดให้ผูกสิทธิ์กับบทบาทที่ใช้ซ้ำ ซึ่งเป็นกลไกจัดระเบียบโดยตรงของ RBAC"
        }
      ]
    }
  },
  {
    "id": 664,
    "dom": 3,
    "question": "A document service evaluates each read request using the employee's project assignment, the document's project tag, the device's approval status and the permitted access hours. Access is allowed only when the required attribute conditions match policy. Which model BEST describes this decision process?",
    "options": [
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC) based only on the employee's job role",
      "Attribute-Based Access Control (ABAC)",
      "Mandatory Access Control (MAC) based only on clearance and classification level"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. ABAC evaluates subject and resource attributes, the requested operation and relevant environment conditions against policy. The combined project, device and time criteria fit that approach. Option A is incorrect: The decision evaluates policy conditions for each request rather than an owner choosing an individual sharing list. Option B is incorrect: A job role alone does not express the required resource, device and access-hour conditions. Option D is incorrect: A classification-only comparison would not evaluate the additional contextual conditions explicitly required here.",
    "short_explanation_en": "ABAC evaluates policy conditions using attributes of subjects, resources, operations and relevant context.",
    "question_th": "บริการเอกสารประเมินคำขออ่านแต่ละครั้งจากโครงการที่พนักงานได้รับมอบหมาย ป้ายโครงการของเอกสาร สถานะอนุมัติอุปกรณ์ และช่วงเวลาที่อนุญาตให้เข้าถึง ระบบให้สิทธิ์เมื่อเงื่อนไขคุณลักษณะที่กำหนดตรงกับนโยบายเท่านั้น แบบจำลองใดอธิบายกระบวนการตัดสินใจนี้ได้เหมาะสมที่สุด?",
    "options_th": [
      "การควบคุมการเข้าถึงตามดุลยพินิจ (DAC)",
      "การควบคุมตามบทบาท (RBAC) โดยอาศัยบทบาทงานของพนักงานเพียงอย่างเดียว",
      "การควบคุมการเข้าถึงตามคุณลักษณะ (ABAC)",
      "การควบคุมแบบบังคับ (MAC) โดยอาศัยระดับอนุญาตและชั้นความลับเพียงอย่างเดียว"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: ABAC ประเมินคุณลักษณะผู้ร้องขอและทรัพยากร การกระทำที่ขอ และสภาพแวดล้อมที่เกี่ยวข้องเทียบกับนโยบาย เกณฑ์โครงการ อุปกรณ์ และเวลาร่วมกันตรงกับแนวทางนี้\n- ข้อ A ไม่ถูกต้อง: การตัดสินใจประเมินเงื่อนไขนโยบายต่อคำขอ ไม่ใช่เจ้าของเลือกรายการแบ่งปันรายคน\n- ข้อ B ไม่ถูกต้อง: บทบาทงานเพียงอย่างเดียวไม่แสดงเงื่อนไขทรัพยากร อุปกรณ์ และช่วงเวลาที่กำหนด\n- ข้อ D ไม่ถูกต้อง: การเทียบชั้นความลับเพียงอย่างเดียวไม่ได้ประเมินเงื่อนไขตามบริบทเพิ่มเติมที่กำหนดชัดเจน",
    "explanation_detail": {
      "correct": {
        "en": "ABAC evaluates subject and resource attributes, the requested operation and relevant environment conditions against policy. The combined project, device and time criteria fit that approach.",
        "th": "ABAC ประเมินคุณลักษณะผู้ร้องขอและทรัพยากร การกระทำที่ขอ และสภาพแวดล้อมที่เกี่ยวข้องเทียบกับนโยบาย เกณฑ์โครงการ อุปกรณ์ และเวลาร่วมกันตรงกับแนวทางนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The decision evaluates policy conditions for each request rather than an owner choosing an individual sharing list.",
          "text_th": "การตัดสินใจประเมินเงื่อนไขนโยบายต่อคำขอ ไม่ใช่เจ้าของเลือกรายการแบ่งปันรายคน"
        },
        {
          "letter": "B",
          "text_en": "A job role alone does not express the required resource, device and access-hour conditions.",
          "text_th": "บทบาทงานเพียงอย่างเดียวไม่แสดงเงื่อนไขทรัพยากร อุปกรณ์ และช่วงเวลาที่กำหนด"
        },
        {
          "letter": "D",
          "text_en": "A classification-only comparison would not evaluate the additional contextual conditions explicitly required here.",
          "text_th": "การเทียบชั้นความลับเพียงอย่างเดียวไม่ได้ประเมินเงื่อนไขตามบริบทเพิ่มเติมที่กำหนดชัดเจน"
        }
      ]
    }
  },
  {
    "id": 665,
    "dom": 3,
    "question": "Two employees have the same approved analyst role. One also has a separately approved maintenance role. A review finds that only the second employee can change system settings, as intended by the maintenance role. Which conclusion is BEST supported?",
    "options": [
      "RBAC has failed because a shared role must produce identical total access",
      "The additional role can explain the difference; assess the combined rights against current need",
      "Both employees should receive the maintenance role to restore consistent analyst access",
      "The additional role proves that least privilege is satisfied without any further review"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. RBAC permits multiple authorized role assignments. The observed difference is consistent with the additional role, while least privilege still requires checking the combined permissions. Option A is incorrect: A shared role provides its associated permissions, but additional authorized roles can change total effective access. Option C is incorrect: Consistency does not justify granting a role that the first employee has no stated need or approval to hold. Option D is incorrect: Role assignment is a mechanism, not proof that the combined permissions remain minimal and appropriate.",
    "short_explanation_en": "Evaluate all authorized role assignments and constraints when assessing effective access.",
    "question_th": "พนักงานสองคนมีบทบาทนักวิเคราะห์ที่ได้รับอนุมัติเหมือนกัน คนหนึ่งมีบทบาทบำรุงรักษาที่ได้รับอนุมัติแยกเพิ่มเติมด้วย การทบทวนพบว่าเฉพาะคนที่สองเปลี่ยนการตั้งค่าระบบได้ตามสิทธิ์ของบทบาทบำรุงรักษา ข้อสรุปใดมีหลักฐานรองรับเหมาะสมที่สุด?",
    "options_th": [
      "RBAC ล้มเหลว เพราะการมีบทบาทเดียวกันต้องทำให้สิทธิ์รวมเหมือนกัน",
      "บทบาทเพิ่มเติมอธิบายความต่างได้ และควรประเมินสิทธิ์รวมเทียบกับความจำเป็นปัจจุบัน",
      "ควรให้บทบาทบำรุงรักษาแก่ทั้งสองคนเพื่อให้สิทธิ์นักวิเคราะห์สอดคล้องกัน",
      "บทบาทเพิ่มเติมพิสูจน์ว่าเป็นไปตามสิทธิ์เท่าที่จำเป็นแล้วโดยไม่ต้องทบทวนต่อ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: RBAC อนุญาตให้มีหลายบทบาทที่ได้รับอนุญาต ความต่างที่พบสอดคล้องกับบทบาทเพิ่มเติม แต่หลักสิทธิ์เท่าที่จำเป็นยังต้องประเมินสิทธิ์รวม\n- ข้อ A ไม่ถูกต้อง: บทบาทที่มีร่วมกันให้สิทธิ์ของบทบาทนั้น แต่บทบาทอื่นที่ได้รับอนุญาตอาจเปลี่ยนสิทธิ์รวมที่มีผลจริง\n- ข้อ C ไม่ถูกต้อง: ความสอดคล้องไม่ได้เป็นเหตุผลให้บทบาทที่พนักงานคนแรกไม่มีความจำเป็นหรือการอนุมัติตามที่ระบุ\n- ข้อ D ไม่ถูกต้อง: การกำหนดบทบาทเป็นกลไก ไม่ใช่หลักฐานว่าสิทธิ์รวมยังน้อยที่สุดและเหมาะสม",
    "explanation_detail": {
      "correct": {
        "en": "RBAC permits multiple authorized role assignments. The observed difference is consistent with the additional role, while least privilege still requires checking the combined permissions.",
        "th": "RBAC อนุญาตให้มีหลายบทบาทที่ได้รับอนุญาต ความต่างที่พบสอดคล้องกับบทบาทเพิ่มเติม แต่หลักสิทธิ์เท่าที่จำเป็นยังต้องประเมินสิทธิ์รวม"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A shared role provides its associated permissions, but additional authorized roles can change total effective access.",
          "text_th": "บทบาทที่มีร่วมกันให้สิทธิ์ของบทบาทนั้น แต่บทบาทอื่นที่ได้รับอนุญาตอาจเปลี่ยนสิทธิ์รวมที่มีผลจริง"
        },
        {
          "letter": "C",
          "text_en": "Consistency does not justify granting a role that the first employee has no stated need or approval to hold.",
          "text_th": "ความสอดคล้องไม่ได้เป็นเหตุผลให้บทบาทที่พนักงานคนแรกไม่มีความจำเป็นหรือการอนุมัติตามที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "Role assignment is a mechanism, not proof that the combined permissions remain minimal and appropriate.",
          "text_th": "การกำหนดบทบาทเป็นกลไก ไม่ใช่หลักฐานว่าสิทธิ์รวมยังน้อยที่สุดและเหมาะสม"
        }
      ]
    }
  },
  {
    "id": 666,
    "dom": 3,
    "question": "A project-sharing service uses owner-managed permissions with system enforcement. A consultant recommends replacing it with MAC solely because \"MAC is always more secure than DAC.\" No classification or access-policy requirement has yet been identified for the change. Which response is MOST appropriate?",
    "options": [
      "Approve the change because centrally defined policy removes the need to evaluate permissions",
      "Reject the change because DAC is always safer when users need to share files",
      "Approve the change because enforcing permissions in software makes a system MAC",
      "Compare the required access policy and risks with each model's authority and enforcement arrangements"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Neither model is universally most secure. A defensible choice depends on the required policy, delegated authority and effective implementation. Option A is incorrect: Central policy still requires appropriate design, administration and enforcement; the model label is not a substitute for evaluation. Option B is incorrect: This reverses the unsupported universal ranking instead of examining the actual policy and risk requirements. Option C is incorrect: DAC permissions can also be enforced by software. The distinction concerns policy authority and discretion, not whether software is used.",
    "short_explanation_en": "Choose access models for policy and risk requirements, not an unconditional DAC-versus-MAC ranking.",
    "question_th": "บริการแบ่งปันงานโครงการใช้สิทธิ์ที่เจ้าของจัดการและระบบบังคับใช้ ที่ปรึกษาเสนอให้เปลี่ยนเป็น MAC เพียงเพราะว่า \"MAC ปลอดภัยกว่า DAC เสมอ\" แต่ยังไม่ได้ระบุข้อกำหนดชั้นความลับหรือนโยบายเข้าถึงที่ต้องเปลี่ยน ควรตอบสนองอย่างไรจึงเหมาะสมที่สุด?",
    "options_th": [
      "อนุมัติการเปลี่ยน เพราะนโยบายส่วนกลางทำให้ไม่ต้องประเมินสิทธิ์",
      "ปฏิเสธการเปลี่ยน เพราะ DAC ปลอดภัยกว่าเสมอเมื่อผู้ใช้ต้องแบ่งปันไฟล์",
      "อนุมัติการเปลี่ยน เพราะการบังคับสิทธิ์ด้วยซอฟต์แวร์ทำให้ระบบเป็น MAC",
      "เปรียบเทียบนโยบายเข้าถึงและความเสี่ยงที่ต้องรองรับกับอำนาจกำหนดสิทธิ์และการบังคับใช้ของแต่ละแบบ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ไม่มีแบบใดปลอดภัยที่สุดในทุกกรณี การเลือกที่อธิบายได้ต้องอิงนโยบายที่ต้องการ อำนาจที่มอบหมาย และการนำไปบังคับใช้จริง\n- ข้อ A ไม่ถูกต้อง: นโยบายส่วนกลางยังต้องออกแบบ บริหาร และบังคับใช้อย่างเหมาะสม ชื่อแบบจำลองไม่ได้ทดแทนการประเมิน\n- ข้อ B ไม่ถูกต้อง: วิธีนี้กลับด้านคำกล่าวเหมารวมที่ไม่มีหลักฐาน แทนที่จะตรวจข้อกำหนดนโยบายและความเสี่ยงจริง\n- ข้อ C ไม่ถูกต้อง: สิทธิ์ DAC บังคับใช้ด้วยซอฟต์แวร์ได้เช่นกัน ความต่างคืออำนาจนโยบายและดุลยพินิจ ไม่ใช่การมีซอฟต์แวร์",
    "explanation_detail": {
      "correct": {
        "en": "Neither model is universally most secure. A defensible choice depends on the required policy, delegated authority and effective implementation.",
        "th": "ไม่มีแบบใดปลอดภัยที่สุดในทุกกรณี การเลือกที่อธิบายได้ต้องอิงนโยบายที่ต้องการ อำนาจที่มอบหมาย และการนำไปบังคับใช้จริง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Central policy still requires appropriate design, administration and enforcement; the model label is not a substitute for evaluation.",
          "text_th": "นโยบายส่วนกลางยังต้องออกแบบ บริหาร และบังคับใช้อย่างเหมาะสม ชื่อแบบจำลองไม่ได้ทดแทนการประเมิน"
        },
        {
          "letter": "B",
          "text_en": "This reverses the unsupported universal ranking instead of examining the actual policy and risk requirements.",
          "text_th": "วิธีนี้กลับด้านคำกล่าวเหมารวมที่ไม่มีหลักฐาน แทนที่จะตรวจข้อกำหนดนโยบายและความเสี่ยงจริง"
        },
        {
          "letter": "C",
          "text_en": "DAC permissions can also be enforced by software. The distinction concerns policy authority and discretion, not whether software is used.",
          "text_th": "สิทธิ์ DAC บังคับใช้ด้วยซอฟต์แวร์ได้เช่นกัน ความต่างคืออำนาจนโยบายและดุลยพินิจ ไม่ใช่การมีซอฟต์แวร์"
        }
      ]
    }
  },
  {
    "id": 667,
    "dom": 3,
    "question": "An employee signs in using a cryptographic security key. The key proves possession only after it verifies a local PIN known to the employee; the key and PIN are both required for each authentication. No separate account password is entered. Which assessment is MOST accurate?",
    "options": [
      "It uses possession and knowledge factors even though one physical authenticator is involved",
      "It is single-factor authentication because only one physical device is used",
      "It is single-factor authentication because a local PIN cannot contribute a knowledge factor",
      "It uses three factors because the device, its cryptographic key and the PIN count separately"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. MFA requires different factor types, not separate physical devices. The stated key proves possession and requires a knowledge factor to activate authentication. Option B is incorrect: A single authenticator can implement more than one factor when each required factor is verified as described. Option C is incorrect: A locally verified activation PIN can provide the knowledge factor for a multi-factor cryptographic authenticator. Option D is incorrect: The device and its protected key support possession in this scenario; counting components does not create another independent factor type.",
    "short_explanation_en": "MFA counts distinct factor types, not the number of devices, screens or authentication components.",
    "question_th": "พนักงานลงชื่อเข้าใช้ด้วยกุญแจความปลอดภัยแบบเข้ารหัส กุญแจจะพิสูจน์การครอบครองได้หลังตรวจ PIN ภายในอุปกรณ์ซึ่งพนักงานทราบเท่านั้น และต้องใช้ทั้งกุญแจและ PIN ในการยืนยันตัวตนแต่ละครั้ง โดยไม่กรอกรหัสผ่านบัญชีแยก การประเมินใดถูกต้องที่สุด?",
    "options_th": [
      "ใช้ปัจจัยการครอบครองและความรู้ แม้ใช้อุปกรณ์ยืนยันตัวตนทางกายภาพเพียงชิ้นเดียว",
      "เป็นการยืนยันตัวตนปัจจัยเดียว เพราะใช้อุปกรณ์ทางกายภาพเพียงชิ้นเดียว",
      "เป็นการยืนยันตัวตนปัจจัยเดียว เพราะ PIN ภายในอุปกรณ์ไม่อาจเป็นปัจจัยความรู้",
      "ใช้สามปัจจัย เพราะอุปกรณ์ กุญแจเข้ารหัส และ PIN นับแยกกัน"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: MFA ต้องใช้ปัจจัยต่างประเภท ไม่ใช่อุปกรณ์ทางกายภาพคนละชิ้น กุญแจตามที่ระบุพิสูจน์การครอบครองและต้องใช้ปัจจัยความรู้เพื่อเปิดใช้งานการยืนยันตัวตน\n- ข้อ B ไม่ถูกต้อง: อุปกรณ์ยืนยันตัวตนหนึ่งชิ้นรองรับหลายปัจจัยได้ เมื่อมีการตรวจแต่ละปัจจัยที่จำเป็นตามที่ระบุ\n- ข้อ C ไม่ถูกต้อง: PIN เปิดใช้งานที่ตรวจภายในอุปกรณ์เป็นปัจจัยความรู้ของอุปกรณ์ยืนยันตัวตนแบบเข้ารหัสหลายปัจจัยได้\n- ข้อ D ไม่ถูกต้อง: ในกรณีนี้อุปกรณ์กับกุญแจที่ปกป้องอยู่รองรับการครอบครอง การนับชิ้นส่วนไม่ได้เพิ่มประเภทปัจจัยที่เป็นอิสระ",
    "explanation_detail": {
      "correct": {
        "en": "MFA requires different factor types, not separate physical devices. The stated key proves possession and requires a knowledge factor to activate authentication.",
        "th": "MFA ต้องใช้ปัจจัยต่างประเภท ไม่ใช่อุปกรณ์ทางกายภาพคนละชิ้น กุญแจตามที่ระบุพิสูจน์การครอบครองและต้องใช้ปัจจัยความรู้เพื่อเปิดใช้งานการยืนยันตัวตน"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A single authenticator can implement more than one factor when each required factor is verified as described.",
          "text_th": "อุปกรณ์ยืนยันตัวตนหนึ่งชิ้นรองรับหลายปัจจัยได้ เมื่อมีการตรวจแต่ละปัจจัยที่จำเป็นตามที่ระบุ"
        },
        {
          "letter": "C",
          "text_en": "A locally verified activation PIN can provide the knowledge factor for a multi-factor cryptographic authenticator.",
          "text_th": "PIN เปิดใช้งานที่ตรวจภายในอุปกรณ์เป็นปัจจัยความรู้ของอุปกรณ์ยืนยันตัวตนแบบเข้ารหัสหลายปัจจัยได้"
        },
        {
          "letter": "D",
          "text_en": "The device and its protected key support possession in this scenario; counting components does not create another independent factor type.",
          "text_th": "ในกรณีนี้อุปกรณ์กับกุญแจที่ปกป้องอยู่รองรับการครอบครอง การนับชิ้นส่วนไม่ได้เพิ่มประเภทปัจจัยที่เป็นอิสระ"
        }
      ]
    }
  },
  {
    "id": 668,
    "dom": 3,
    "question": "An AI-assisted identity tool flags two sign-ins from distant locations within a few minutes. The alert has low confidence, there are no corroborating indicators, and the analyst's procedure calls for validating sign-in context before choosing a response. Which action is MOST appropriate?",
    "options": [
      "Require a password reset and close the alert without reviewing the flagged sign-ins",
      "Wait for another alert before recording or investigating this event",
      "Review the timestamps, network context and related logs, then follow the authorized response process",
      "Close the alert solely on the employee's confirmation that the sign-ins are familiar"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Behavioral analytics supplies evidence to assess, not a conclusive verdict. Validating context supports a proportionate response under the stated procedure. Option A is incorrect: A reset alone does not validate what triggered the alert or satisfy the stated investigation procedure. It may be part of a response after assessment. Option B is incorrect: Lack of corroboration limits certainty but does not justify ignoring the prescribed validation of the current alert. Option D is incorrect: The employee's account is useful context, but the procedure still requires validating sign-in evidence rather than treating the reply alone as verification.",
    "short_explanation_en": "AI-assisted risk signals require contextual assessment and do not themselves constitute an MFA factor.",
    "question_th": "เครื่องมืออัตลักษณ์ที่ใช้ AI ช่วยแจ้งเตือนการลงชื่อเข้าใช้สองครั้งจากสถานที่ห่างกันในเวลาไม่กี่นาที การแจ้งเตือนมีความเชื่อมั่นต่ำ ไม่มีตัวบ่งชี้อื่นสนับสนุน และขั้นตอนของนักวิเคราะห์กำหนดให้ตรวจสอบบริบทการเข้าใช้ก่อนเลือกวิธีตอบสนอง การกระทำใดเหมาะสมที่สุด?",
    "options_th": [
      "บังคับเปลี่ยนรหัสผ่าน และปิดการแจ้งเตือนโดยไม่ตรวจเหตุการณ์ลงชื่อเข้าใช้ที่ถูกแจ้ง",
      "รอการแจ้งเตือนอีกครั้งก่อนบันทึกหรือตรวจสอบเหตุการณ์นี้",
      "ทบทวนเวลา บริบทเครือข่าย และบันทึกที่เกี่ยวข้อง แล้วดำเนินการตอบสนองตามอำนาจที่กำหนด",
      "ปิดการแจ้งเตือนโดยอาศัยเพียงคำยืนยันของพนักงานว่าคุ้นเคยกับการลงชื่อเข้าใช้เหล่านั้น"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การวิเคราะห์พฤติกรรมให้หลักฐานเพื่อประเมิน ไม่ใช่ข้อสรุปเด็ดขาด การตรวจบริบทช่วยเลือกการตอบสนองที่เหมาะสมตามขั้นตอนที่ระบุ\n- ข้อ A ไม่ถูกต้อง: การเปลี่ยนรหัสผ่านเพียงอย่างเดียวไม่ได้ตรวจสอบสาเหตุการแจ้งเตือนหรือทำตามขั้นตอนสืบหาที่ระบุ แต่อาจเป็นส่วนหนึ่งของการตอบสนองหลังประเมิน\n- ข้อ B ไม่ถูกต้อง: การไม่มีหลักฐานอื่นสนับสนุนจำกัดความแน่นอน แต่ไม่ได้เป็นเหตุให้งดตรวจสอบการแจ้งเตือนปัจจุบันตามขั้นตอน\n- ข้อ D ไม่ถูกต้อง: คำชี้แจงของพนักงานเป็นบริบทที่มีประโยชน์ แต่ขั้นตอนยังต้องตรวจหลักฐานการเข้าใช้ ไม่ใช่ถือคำตอบเพียงอย่างเดียวว่าเป็นการตรวจสอบแล้ว",
    "explanation_detail": {
      "correct": {
        "en": "Behavioral analytics supplies evidence to assess, not a conclusive verdict. Validating context supports a proportionate response under the stated procedure.",
        "th": "การวิเคราะห์พฤติกรรมให้หลักฐานเพื่อประเมิน ไม่ใช่ข้อสรุปเด็ดขาด การตรวจบริบทช่วยเลือกการตอบสนองที่เหมาะสมตามขั้นตอนที่ระบุ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A reset alone does not validate what triggered the alert or satisfy the stated investigation procedure. It may be part of a response after assessment.",
          "text_th": "การเปลี่ยนรหัสผ่านเพียงอย่างเดียวไม่ได้ตรวจสอบสาเหตุการแจ้งเตือนหรือทำตามขั้นตอนสืบหาที่ระบุ แต่อาจเป็นส่วนหนึ่งของการตอบสนองหลังประเมิน"
        },
        {
          "letter": "B",
          "text_en": "Lack of corroboration limits certainty but does not justify ignoring the prescribed validation of the current alert.",
          "text_th": "การไม่มีหลักฐานอื่นสนับสนุนจำกัดความแน่นอน แต่ไม่ได้เป็นเหตุให้งดตรวจสอบการแจ้งเตือนปัจจุบันตามขั้นตอน"
        },
        {
          "letter": "D",
          "text_en": "The employee's account is useful context, but the procedure still requires validating sign-in evidence rather than treating the reply alone as verification.",
          "text_th": "คำชี้แจงของพนักงานเป็นบริบทที่มีประโยชน์ แต่ขั้นตอนยังต้องตรวจหลักฐานการเข้าใช้ ไม่ใช่ถือคำตอบเพียงอย่างเดียวว่าเป็นการตรวจสอบแล้ว"
        }
      ]
    }
  },
  {
    "id": 669,
    "dom": 3,
    "question": "An administrator has approved ordinary-user and privileged accounts in the same management system. The IAM team needs to keep the accounts distinct while showing that both belong to the same employee. Which record design BEST supports this requirement?",
    "options": [
      "Combine the two accounts into one privileged account used for all work",
      "Maintain the accounts as unrelated identities with no employee linkage",
      "Replace the privileged account with a team account shared by all administrators",
      "Give each account a distinct identifier and link both records to the employee's verified identity"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. An identity, an account and its identifier are distinct concepts. Separate account identifiers with a verified employee linkage preserve both separation and accountability. Option A is incorrect: Combining them removes the required distinction between ordinary and privileged accounts. Option B is incorrect: This preserves distinct records but fails to establish the required common responsible employee. Option C is incorrect: A shared team identity obscures the individual linkage the requirement is trying to preserve.",
    "short_explanation_en": "Distinct accounts can link to one responsible identity without sharing an account identifier.",
    "question_th": "ผู้ดูแลระบบได้รับอนุมัติให้มีบัญชีผู้ใช้ทั่วไปและบัญชีสิทธิ์สูงในระบบจัดการเดียวกัน ทีม IAM ต้องแยกสองบัญชีให้ชัด แต่แสดงว่าทั้งคู่เป็นของพนักงานคนเดียว การออกแบบระเบียนใดเหมาะสมที่สุด?",
    "options_th": [
      "รวมสองบัญชีเป็นบัญชีสิทธิ์สูงบัญชีเดียวเพื่อใช้ทุกงาน",
      "เก็บสองบัญชีเป็นอัตลักษณ์ที่ไม่เกี่ยวข้องกันโดยไม่เชื่อมกับพนักงาน",
      "แทนบัญชีสิทธิ์สูงด้วยบัญชีทีมที่ผู้ดูแลทุกคนใช้ร่วมกัน",
      "กำหนดตัวระบุแยกให้แต่ละบัญชี และเชื่อมทั้งสองระเบียนกับอัตลักษณ์พนักงานที่ตรวจสอบแล้ว"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: อัตลักษณ์ บัญชี และตัวระบุเป็นคนละแนวคิด การแยกตัวระบุบัญชีพร้อมเชื่อมกับพนักงานที่ตรวจสอบแล้วรักษาทั้งการแยกบัญชีและความรับผิดชอบ\n- ข้อ A ไม่ถูกต้อง: การรวมบัญชีทำให้ไม่สามารถแยกบัญชีทั่วไปกับบัญชีสิทธิ์สูงได้ตามที่ต้องการ\n- ข้อ B ไม่ถูกต้อง: วิธีนี้แยกระเบียนได้ แต่ไม่แสดงพนักงานผู้รับผิดชอบร่วมกันตามที่ต้องการ\n- ข้อ C ไม่ถูกต้อง: ตัวตนทีมร่วมทำให้ความเชื่อมโยงถึงบุคคลที่ต้องการรักษาไม่ชัดเจน",
    "explanation_detail": {
      "correct": {
        "en": "An identity, an account and its identifier are distinct concepts. Separate account identifiers with a verified employee linkage preserve both separation and accountability.",
        "th": "อัตลักษณ์ บัญชี และตัวระบุเป็นคนละแนวคิด การแยกตัวระบุบัญชีพร้อมเชื่อมกับพนักงานที่ตรวจสอบแล้วรักษาทั้งการแยกบัญชีและความรับผิดชอบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Combining them removes the required distinction between ordinary and privileged accounts.",
          "text_th": "การรวมบัญชีทำให้ไม่สามารถแยกบัญชีทั่วไปกับบัญชีสิทธิ์สูงได้ตามที่ต้องการ"
        },
        {
          "letter": "B",
          "text_en": "This preserves distinct records but fails to establish the required common responsible employee.",
          "text_th": "วิธีนี้แยกระเบียนได้ แต่ไม่แสดงพนักงานผู้รับผิดชอบร่วมกันตามที่ต้องการ"
        },
        {
          "letter": "C",
          "text_en": "A shared team identity obscures the individual linkage the requirement is trying to preserve.",
          "text_th": "ตัวตนทีมร่วมทำให้ความเชื่อมโยงถึงบุคคลที่ต้องการรักษาไม่ชัดเจน"
        }
      ]
    }
  }
];

export default questions;
