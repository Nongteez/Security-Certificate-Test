/** Original practice questions; Sep2026 scope. Review/source metadata is kept in content/isc2-cc-2026/sources/domain-5/production. */
const questions = [
  {
    "id": 1001,
    "dom": 5,
    "question": "A data owner assigns a report to the Restricted category. An analyst then adds a Restricted metadata tag to the file. Which statement correctly distinguishes these actions?",
    "options": [
      "The owner labels the data; the analyst classifies it",
      "Both actions enforce the file’s access permissions",
      "Both actions classify the report at different levels of detail",
      "The owner classifies the data; the analyst labels it"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Classification determines the category; labeling communicates the category already assigned. Option A is incorrect: This reverses assignment of the category and attachment of its indicator. Option B is incorrect: A category or tag can guide enforcement, but neither described action establishes permissions by itself. Option C is incorrect: The analyst applies the existing category indicator rather than making a second category decision.",
    "short_explanation_en": "Classification determines the category; labeling communicates the category already assigned.",
    "question_th": "เจ้าของข้อมูลจัดรายงานเป็นประเภท Restricted จากนั้นนักวิเคราะห์เพิ่มป้าย Metadata ว่า Restricted ให้ไฟล์ ข้อใดแยกสองการกระทำนี้ได้ถูกต้อง?",
    "options_th": [
      "เจ้าของติดป้าย ส่วนนักวิเคราะห์จัดประเภท",
      "ทั้งสองการกระทำบังคับสิทธิ์เข้าถึงไฟล์",
      "ทั้งสองการกระทำจัดประเภทรายงานด้วยระดับรายละเอียดต่างกัน",
      "เจ้าของจัดประเภทข้อมูล ส่วนนักวิเคราะห์ติดป้าย"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: Classification กำหนดประเภท ส่วน Labeling แสดงประเภทที่กำหนดไว้แล้ว\n- ข้อ A ไม่ถูกต้อง: ข้อนี้สลับการกำหนดประเภทกับการติดตัวบ่งชี้ประเภท\n- ข้อ B ไม่ถูกต้อง: ประเภทและป้ายอาจช่วยกำหนดการควบคุม แต่การกระทำที่ระบุไม่ได้ตั้งสิทธิ์โดยตัวมันเอง\n- ข้อ C ไม่ถูกต้อง: นักวิเคราะห์ติดตัวบ่งชี้ประเภทที่กำหนดแล้ว ไม่ได้ตัดสินประเภทอีกครั้ง",
    "explanation_detail": {
      "correct": {
        "en": "Classification determines the category; labeling communicates the category already assigned.",
        "th": "Classification กำหนดประเภท ส่วน Labeling แสดงประเภทที่กำหนดไว้แล้ว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This reverses assignment of the category and attachment of its indicator.",
          "text_th": "ข้อนี้สลับการกำหนดประเภทกับการติดตัวบ่งชี้ประเภท"
        },
        {
          "letter": "B",
          "text_en": "A category or tag can guide enforcement, but neither described action establishes permissions by itself.",
          "text_th": "ประเภทและป้ายอาจช่วยกำหนดการควบคุม แต่การกระทำที่ระบุไม่ได้ตั้งสิทธิ์โดยตัวมันเอง"
        },
        {
          "letter": "C",
          "text_en": "The analyst applies the existing category indicator rather than making a second category decision.",
          "text_th": "นักวิเคราะห์ติดตัวบ่งชี้ประเภทที่กำหนดแล้ว ไม่ได้ตัดสินประเภทอีกครั้ง"
        }
      ]
    }
  },
  {
    "id": 1002,
    "dom": 5,
    "question": "Policy defines Internal data as employee-only and Restricted data as accessible only to named project members. A draft contains both types, and policy requires mixed documents to follow the more restrictive category. How should the analyst handle the draft?",
    "options": [
      "Apply separate labels while leaving the whole file employee-accessible",
      "Apply the category covering the larger portion of the draft",
      "Apply Restricted handling to the complete draft",
      "Apply Internal handling because both parts are corporate data"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The supplied mixed-document rule requires the more restrictive category for this draft. Option A is incorrect: Labels alone do not satisfy the document-wide handling rule or limit access. Option B is incorrect: The stated rule is based on the more restrictive content, not its proportion. Option D is incorrect: Employee-wide access would exceed the named-project restriction on part of the document.",
    "short_explanation_en": "The supplied mixed-document rule requires the more restrictive category for this draft.",
    "question_th": "นโยบายกำหนดว่า Internal ใช้ได้เฉพาะพนักงาน ส่วน Restricted ใช้ได้เฉพาะสมาชิกโครงการที่ระบุชื่อ ร่างเอกสารมีทั้งสองประเภทและนโยบายให้ใช้ประเภทที่เข้มงวดกว่า นักวิเคราะห์ควรจัดการอย่างไร?",
    "options_th": [
      "ติดป้ายแต่ละส่วนโดยให้พนักงานทั้งหมดเข้าถึงไฟล์ได้",
      "ใช้ประเภทของข้อมูลที่มีสัดส่วนมากกว่าในร่าง",
      "ใช้ข้อกำหนด Restricted กับร่างทั้งหมด",
      "ใช้ข้อกำหนด Internal เพราะทั้งสองส่วนเป็นข้อมูลบริษัท"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: กฎสำหรับเอกสารผสมที่ระบุให้ใช้ประเภทที่เข้มงวดกว่าสำหรับร่างนี้\n- ข้อ A ไม่ถูกต้อง: ป้ายเพียงอย่างเดียวไม่ทำให้เป็นไปตามกฎจัดการทั้งเอกสารหรือจำกัดการเข้าถึง\n- ข้อ B ไม่ถูกต้อง: กฎที่ระบุพิจารณาเนื้อหาที่จำกัดกว่า ไม่ใช่สัดส่วนของเนื้อหา\n- ข้อ D ไม่ถูกต้อง: การให้พนักงานทั่วไปเข้าถึงเกินขอบเขตสมาชิกโครงการที่กำหนดไว้ในข้อมูลบางส่วน",
    "explanation_detail": {
      "correct": {
        "en": "The supplied mixed-document rule requires the more restrictive category for this draft.",
        "th": "กฎสำหรับเอกสารผสมที่ระบุให้ใช้ประเภทที่เข้มงวดกว่าสำหรับร่างนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Labels alone do not satisfy the document-wide handling rule or limit access.",
          "text_th": "ป้ายเพียงอย่างเดียวไม่ทำให้เป็นไปตามกฎจัดการทั้งเอกสารหรือจำกัดการเข้าถึง"
        },
        {
          "letter": "B",
          "text_en": "The stated rule is based on the more restrictive content, not its proportion.",
          "text_th": "กฎที่ระบุพิจารณาเนื้อหาที่จำกัดกว่า ไม่ใช่สัดส่วนของเนื้อหา"
        },
        {
          "letter": "D",
          "text_en": "Employee-wide access would exceed the named-project restriction on part of the document.",
          "text_th": "การให้พนักงานทั่วไปเข้าถึงเกินขอบเขตสมาชิกโครงการที่กำหนดไว้ในข้อมูลบางส่วน"
        }
      ]
    }
  },
  {
    "id": 1004,
    "dom": 5,
    "question": "An approved AI service may receive support examples only after all customer identifiers are removed. An analyst masks the customer-number column, but names remain in free-text comments. What should the analyst do before submission?",
    "options": [
      "Encrypt the upload and leave the comments unchanged",
      "Submit because the structured identifier column is masked",
      "Replace the customer numbers with stable codes and submit",
      "Review the comments and remove the remaining identifiers"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The rule covers all identifiers, including free text; masking one column does not meet it. Option A is incorrect: Transport protection does not remove identifiers that the receiving service can read. Option B is incorrect: Names in comments still violate the stated condition for submitting examples. Option C is incorrect: Changing the identifier column again does not address the remaining names in free text.",
    "short_explanation_en": "The rule covers all identifiers, including free text; masking one column does not meet it.",
    "question_th": "บริการ AI ที่อนุมัติรับตัวอย่างงานสนับสนุนได้หลังลบข้อมูลระบุตัวลูกค้าทั้งหมดแล้ว นักวิเคราะห์ปกปิดคอลัมน์เลขลูกค้า แต่ยังมีชื่อในความคิดเห็นแบบ Free text ควรทำอะไรก่อนส่ง?",
    "options_th": [
      "เข้ารหัสการส่งโดยคงความคิดเห็นเดิม",
      "ส่งได้เพราะคอลัมน์ระบุตัวแบบมีโครงสร้างถูกปกปิดแล้ว",
      "แทนเลขลูกค้าด้วยรหัสคงที่แล้วส่ง",
      "ตรวจความคิดเห็นและลบข้อมูลระบุตัวที่ยังเหลือ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: กฎครอบคลุมข้อมูลระบุตัวทั้งหมดรวม Free text การปกปิดคอลัมน์เดียวจึงยังไม่พอ\n- ข้อ A ไม่ถูกต้อง: การป้องกันระหว่างส่งไม่ได้ลบข้อมูลระบุตัวที่บริการปลายทางอ่านได้\n- ข้อ B ไม่ถูกต้อง: ชื่อในความคิดเห็นยังละเมิดเงื่อนไขการส่งตัวอย่างที่ระบุ\n- ข้อ C ไม่ถูกต้อง: การแก้คอลัมน์เลขลูกค้าอีกครั้งไม่จัดการชื่อที่เหลือใน Free text",
    "explanation_detail": {
      "correct": {
        "en": "The rule covers all identifiers, including free text; masking one column does not meet it.",
        "th": "กฎครอบคลุมข้อมูลระบุตัวทั้งหมดรวม Free text การปกปิดคอลัมน์เดียวจึงยังไม่พอ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Transport protection does not remove identifiers that the receiving service can read.",
          "text_th": "การป้องกันระหว่างส่งไม่ได้ลบข้อมูลระบุตัวที่บริการปลายทางอ่านได้"
        },
        {
          "letter": "B",
          "text_en": "Names in comments still violate the stated condition for submitting examples.",
          "text_th": "ชื่อในความคิดเห็นยังละเมิดเงื่อนไขการส่งตัวอย่างที่ระบุ"
        },
        {
          "letter": "C",
          "text_en": "Changing the identifier column again does not address the remaining names in free text.",
          "text_th": "การแก้คอลัมน์เลขลูกค้าอีกครั้งไม่จัดการชื่อที่เหลือใน Free text"
        }
      ]
    }
  },
  {
    "id": 1005,
    "dom": 5,
    "question": "An SSD containing confidential files will be reused internally. Policy requires a validated purge method that preserves reuse. The device supports an approved sanitize operation. Which handling plan meets the requirement?",
    "options": [
      "Delete the confidential files and perform a normal file search",
      "Run the approved operation and validate its recorded outcome",
      "Physically destroy the storage chips and document destruction",
      "Quick-format the drive and confirm the old folders are hidden"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The supported purge operation and outcome validation address both sanitization and reuse requirements. Option A is incorrect: Ordinary deletion and search do not demonstrate that the required sanitization method completed. Option C is incorrect: Destruction prevents the intended reuse, so it fails one of the stated requirements. Option D is incorrect: A missing directory listing does not establish the required purge of recoverable data.",
    "short_explanation_en": "The supported purge operation and outcome validation address both sanitization and reuse requirements.",
    "question_th": "SSD ที่มีไฟล์ลับจะนำกลับมาใช้ภายใน นโยบายกำหนดให้ใช้วิธี Purge ที่ตรวจยืนยันประสิทธิผลและยังใช้สื่อซ้ำได้ อุปกรณ์รองรับคำสั่ง Sanitize ที่อนุมัติแล้ว แผนใดตรงข้อกำหนด?",
    "options_th": [
      "ลบไฟล์ลับแล้วค้นหาไฟล์ตามปกติ",
      "เรียกคำสั่งที่อนุมัติและตรวจยืนยันประสิทธิผลจากผลที่บันทึก",
      "ทำลายชิปเก็บข้อมูลและบันทึกการทำลาย",
      "Quick format แล้วตรวจว่าไม่เห็นโฟลเดอร์เดิม"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: คำสั่ง Purge ที่รองรับพร้อมการตรวจผลตอบทั้งข้อกำหนด Sanitization และการใช้ซ้ำ\n- ข้อ A ไม่ถูกต้อง: การลบและค้นหาปกติไม่ได้พิสูจน์ว่าวิธี Sanitization ที่กำหนดเสร็จสมบูรณ์\n- ข้อ C ไม่ถูกต้อง: การทำลายทำให้ใช้สื่อซ้ำตามแผนไม่ได้ จึงไม่ตรงข้อกำหนดหนึ่งของโจทย์\n- ข้อ D ไม่ถูกต้อง: การไม่เห็นรายการโฟลเดอร์ไม่ได้ยืนยันว่า Purge ข้อมูลที่กู้คืนได้ตามที่ต้องการ",
    "explanation_detail": {
      "correct": {
        "en": "The supported purge operation and outcome validation address both sanitization and reuse requirements.",
        "th": "คำสั่ง Purge ที่รองรับพร้อมการตรวจผลตอบทั้งข้อกำหนด Sanitization และการใช้ซ้ำ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Ordinary deletion and search do not demonstrate that the required sanitization method completed.",
          "text_th": "การลบและค้นหาปกติไม่ได้พิสูจน์ว่าวิธี Sanitization ที่กำหนดเสร็จสมบูรณ์"
        },
        {
          "letter": "C",
          "text_en": "Destruction prevents the intended reuse, so it fails one of the stated requirements.",
          "text_th": "การทำลายทำให้ใช้สื่อซ้ำตามแผนไม่ได้ จึงไม่ตรงข้อกำหนดหนึ่งของโจทย์"
        },
        {
          "letter": "D",
          "text_en": "A missing directory listing does not establish the required purge of recoverable data.",
          "text_th": "การไม่เห็นรายการโฟลเดอร์ไม่ได้ยืนยันว่า Purge ข้อมูลที่กู้คืนได้ตามที่ต้องการ"
        }
      ]
    }
  },
  {
    "id": 1006,
    "dom": 5,
    "question": "A drive was encrypted before sensitive data was stored. Its data-encryption key is removed from the drive, but a recoverable copy remains in an escrow system. Has cryptographic erase been established?",
    "options": [
      "No; the retained key copy can still enable decryption",
      "No; cryptographic erase requires destruction of the drive itself",
      "Yes; removing the local key is sufficient for encrypted media",
      "Yes; encryption before storage makes later key retention irrelevant"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Cryptographic erase must address recoverable copies of relevant keys; the escrow copy preserves a decryption path. Option B is incorrect: Cryptographic erase depends on key sanitization, not a universal requirement to physically destroy the drive. Option C is incorrect: Local removal alone does not eliminate the recoverable escrowed copy. Option D is incorrect: Prior encryption is necessary context, but a surviving usable key can still recover plaintext.",
    "short_explanation_en": "Cryptographic erase must address recoverable copies of relevant keys; the escrow copy preserves a decryption path.",
    "question_th": "ไดรฟ์ถูกเข้ารหัสก่อนเก็บข้อมูลสำคัญ กุญแจเข้ารหัสข้อมูลถูกลบออกจากไดรฟ์ แต่ยังมีสำเนาที่กู้คืนได้ในระบบ Escrow ยืนยันว่าเกิด Cryptographic erase แล้วได้หรือไม่?",
    "options_th": [
      "ยังไม่ได้ เพราะสำเนากุญแจที่เก็บไว้ยังอาจถอดรหัสได้",
      "ยังไม่ได้ เพราะ Cryptographic erase ต้องทำลายไดรฟ์ด้วย",
      "ได้ เพราะลบกุญแจในสื่อที่เข้ารหัสแล้วก็พอ",
      "ได้ เพราะเข้ารหัสก่อนเก็บแล้วจึงไม่ต้องสนใจกุญแจที่เก็บไว้"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Cryptographic erase ต้องจัดการสำเนากุญแจที่เกี่ยวข้องซึ่งกู้คืนได้ สำเนา Escrow ยังเป็นช่องทางถอดรหัส\n- ข้อ B ไม่ถูกต้อง: Cryptographic erase อาศัยการ Sanitization กุญแจ ไม่ได้บังคับให้ทำลายไดรฟ์ทางกายภาพเสมอ\n- ข้อ C ไม่ถูกต้อง: การลบเฉพาะในไดรฟ์ไม่ได้กำจัดสำเนา Escrow ที่กู้คืนได้\n- ข้อ D ไม่ถูกต้อง: การเข้ารหัสก่อนเก็บเป็นเงื่อนไขสำคัญ แต่กุญแจที่ยังใช้ได้อาจกู้ Plaintext ได้",
    "explanation_detail": {
      "correct": {
        "en": "Cryptographic erase must address recoverable copies of relevant keys; the escrow copy preserves a decryption path.",
        "th": "Cryptographic erase ต้องจัดการสำเนากุญแจที่เกี่ยวข้องซึ่งกู้คืนได้ สำเนา Escrow ยังเป็นช่องทางถอดรหัส"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Cryptographic erase depends on key sanitization, not a universal requirement to physically destroy the drive.",
          "text_th": "Cryptographic erase อาศัยการ Sanitization กุญแจ ไม่ได้บังคับให้ทำลายไดรฟ์ทางกายภาพเสมอ"
        },
        {
          "letter": "C",
          "text_en": "Local removal alone does not eliminate the recoverable escrowed copy.",
          "text_th": "การลบเฉพาะในไดรฟ์ไม่ได้กำจัดสำเนา Escrow ที่กู้คืนได้"
        },
        {
          "letter": "D",
          "text_en": "Prior encryption is necessary context, but a surviving usable key can still recover plaintext.",
          "text_th": "การเข้ารหัสก่อนเก็บเป็นเงื่อนไขสำคัญ แต่กุญแจที่ยังใช้ได้อาจกู้ Plaintext ได้"
        }
      ]
    }
  },
  {
    "id": 1007,
    "dom": 5,
    "question": "A sender must encrypt a short message so only the intended recipient can decrypt it using a public-key encryption scheme. Which key should the sender use to encrypt the message?",
    "options": [
      "The recipient’s private decryption key",
      "The recipient’s public encryption key",
      "The sender’s private signing key",
      "The sender’s public encryption key"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The matching recipient private key performs decryption and remains protected by the recipient. Option A is incorrect: The sender should not obtain the recipient’s secret private key to encrypt this message. Option C is incorrect: Signing supports verification of origin and integrity; it does not provide recipient-only message confidentiality. Option D is incorrect: That key would protect content for the sender’s private key, rather than the intended recipient’s key.",
    "short_explanation_en": "The matching recipient private key performs decryption and remains protected by the recipient.",
    "question_th": "ผู้ส่งต้องเข้ารหัสข้อความสั้นด้วย Public-key encryption เพื่อให้ผู้รับที่ตั้งใจไว้เท่านั้นถอดรหัสได้ ผู้ส่งควรใช้กุญแจใดเข้ารหัส?",
    "options_th": [
      "Private decryption key ของผู้รับ",
      "Public encryption key ของผู้รับ",
      "Private signing key ของผู้ส่ง",
      "Public encryption key ของผู้ส่ง"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Private Key ที่สอดคล้องกันของผู้รับใช้ถอดรหัสและต้องได้รับการป้องกันโดยผู้รับ\n- ข้อ A ไม่ถูกต้อง: ผู้ส่งไม่ควรขอ Private Key ลับของผู้รับเพื่อเข้ารหัสข้อความนี้\n- ข้อ C ไม่ถูกต้อง: การลงนามช่วยตรวจที่มาและ Integrity ไม่ได้ทำให้มีเพียงผู้รับเท่านั้นที่อ่านข้อความได้\n- ข้อ D ไม่ถูกต้อง: กุญแจนี้ปกป้องข้อความสำหรับ Private Key ของผู้ส่ง แทนที่จะเป็นของผู้รับที่ตั้งใจไว้",
    "explanation_detail": {
      "correct": {
        "en": "The matching recipient private key performs decryption and remains protected by the recipient.",
        "th": "Private Key ที่สอดคล้องกันของผู้รับใช้ถอดรหัสและต้องได้รับการป้องกันโดยผู้รับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The sender should not obtain the recipient’s secret private key to encrypt this message.",
          "text_th": "ผู้ส่งไม่ควรขอ Private Key ลับของผู้รับเพื่อเข้ารหัสข้อความนี้"
        },
        {
          "letter": "C",
          "text_en": "Signing supports verification of origin and integrity; it does not provide recipient-only message confidentiality.",
          "text_th": "การลงนามช่วยตรวจที่มาและ Integrity ไม่ได้ทำให้มีเพียงผู้รับเท่านั้นที่อ่านข้อความได้"
        },
        {
          "letter": "D",
          "text_en": "That key would protect content for the sender’s private key, rather than the intended recipient’s key.",
          "text_th": "กุญแจนี้ปกป้องข้อความสำหรับ Private Key ของผู้ส่ง แทนที่จะเป็นของผู้รับที่ตั้งใจไว้"
        }
      ]
    }
  },
  {
    "id": 1008,
    "dom": 5,
    "question": "An analyst compares a downloaded file with a SHA-256 digest obtained through the publisher’s authenticated channel. The digests differ. Which conclusion is supported by this evidence alone?",
    "options": [
      "SHA-256 has produced a collision for these two files",
      "The downloaded file does not match the referenced content",
      "The publisher’s private signing key has been compromised",
      "The file was deliberately modified by an external attacker"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. A trusted-reference mismatch establishes a content difference, but not its cause or the actor responsible. Option A is incorrect: A collision would involve equal digests for different inputs; this observation is unequal digests. Option C is incorrect: The comparison does not establish any compromise of a signing key. Option D is incorrect: Mismatch alone does not distinguish malicious modification from corruption or a different version.",
    "short_explanation_en": "A trusted-reference mismatch establishes a content difference, but not its cause or the actor responsible.",
    "question_th": "นักวิเคราะห์เปรียบเทียบไฟล์ที่ดาวน์โหลดกับ SHA-256 digest ที่ได้รับผ่านช่องทางยืนยันตัวตนของผู้เผยแพร่ ค่า Digest ไม่ตรงกัน หลักฐานนี้เพียงอย่างเดียวสนับสนุนข้อสรุปใด?",
    "options_th": [
      "SHA-256 เกิด Collision สำหรับไฟล์สองชุดนี้",
      "ไฟล์ที่ดาวน์โหลดไม่ตรงกับเนื้อหาที่ใช้อ้างอิง",
      "Private signing key ของผู้เผยแพร่ถูกยึดครองแล้ว",
      "ผู้โจมตีภายนอกจงใจแก้ไขไฟล์"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ค่าที่ไม่ตรงกับแหล่งอ้างอิงที่เชื่อถือได้บอกว่าเนื้อหาต่างกัน แต่ยังไม่บอกสาเหตุหรือผู้กระทำ\n- ข้อ A ไม่ถูกต้อง: Collision คือข้อมูลต่างกันให้ Digest เท่ากัน แต่สิ่งที่พบคือ Digest ไม่เท่ากัน\n- ข้อ C ไม่ถูกต้อง: การเปรียบเทียบนี้ไม่ได้พิสูจน์ว่า Signing Key ถูกยึดครอง\n- ข้อ D ไม่ถูกต้อง: ค่าไม่ตรงกันอย่างเดียวแยกการแก้ไขโดยเจตนาร้ายออกจากความเสียหายหรือคนละเวอร์ชันไม่ได้",
    "explanation_detail": {
      "correct": {
        "en": "A trusted-reference mismatch establishes a content difference, but not its cause or the actor responsible.",
        "th": "ค่าที่ไม่ตรงกับแหล่งอ้างอิงที่เชื่อถือได้บอกว่าเนื้อหาต่างกัน แต่ยังไม่บอกสาเหตุหรือผู้กระทำ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A collision would involve equal digests for different inputs; this observation is unequal digests.",
          "text_th": "Collision คือข้อมูลต่างกันให้ Digest เท่ากัน แต่สิ่งที่พบคือ Digest ไม่เท่ากัน"
        },
        {
          "letter": "C",
          "text_en": "The comparison does not establish any compromise of a signing key.",
          "text_th": "การเปรียบเทียบนี้ไม่ได้พิสูจน์ว่า Signing Key ถูกยึดครอง"
        },
        {
          "letter": "D",
          "text_en": "Mismatch alone does not distinguish malicious modification from corruption or a different version.",
          "text_th": "ค่าไม่ตรงกันอย่างเดียวแยกการแก้ไขโดยเจตนาร้ายออกจากความเสียหายหรือคนละเวอร์ชันไม่ได้"
        }
      ]
    }
  },
  {
    "id": 1009,
    "dom": 5,
    "question": "What is the purpose of post-quantum cryptography in protecting organizational systems?",
    "options": [
      "Distribute keys over quantum channels to reveal interception",
      "Increase the length of existing RSA keys as the long-term quantum defense",
      "Use stronger password hashing to protect public-key exchanges from quantum attacks",
      "Use cryptographic methods designed to resist quantum-capable attacks"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. PQC addresses quantum threats through resistant cryptographic schemes, including key establishment and signatures. Option A is incorrect: This describes a quantum key distribution goal, not the purpose of post-quantum cryptographic algorithms. Option B is incorrect: Larger RSA keys do not remove the underlying vulnerability to a sufficiently capable quantum computer. Option C is incorrect: Password hashing addresses stored password protection; it does not replace quantum-vulnerable public-key algorithms.",
    "short_explanation_en": "PQC addresses quantum threats through resistant cryptographic schemes, including key establishment and signatures.",
    "question_th": "Post-quantum cryptography มีวัตถุประสงค์ใดในการปกป้องระบบขององค์กร?",
    "options_th": [
      "แจกจ่ายกุญแจผ่านช่องทางควอนตัมเพื่อตรวจพบการดักรับ",
      "เพิ่มความยาวกุญแจ RSA เดิมเพื่อเป็นการป้องกันควอนตัมระยะยาว",
      "ใช้การแฮชรหัสผ่านที่แข็งแกร่งขึ้นเพื่อป้องกันการแลกเปลี่ยนกุญแจสาธารณะจากควอนตัม",
      "ใช้วิธี Cryptography ที่ออกแบบให้ต้านทานการโจมตีด้วยคอมพิวเตอร์ควอนตัม"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: PQC รับมือภัยควอนตัมด้วยกลไกที่ต้านทาน เช่น การสร้างกุญแจร่วมและลายเซ็น\n- ข้อ A ไม่ถูกต้อง: ข้อนี้อธิบายเป้าหมายของ Quantum key distribution ไม่ใช่จุดประสงค์ของอัลกอริทึม Post-quantum\n- ข้อ B ไม่ถูกต้อง: กุญแจ RSA ที่ยาวขึ้นไม่ได้ขจัดจุดอ่อนพื้นฐานต่อคอมพิวเตอร์ควอนตัมที่มีความสามารถเพียงพอ\n- ข้อ C ไม่ถูกต้อง: การแฮชรหัสผ่านปกป้องรหัสผ่านที่จัดเก็บ ไม่ได้ทดแทนอัลกอริทึมกุญแจสาธารณะที่เสี่ยงต่อควอนตัม",
    "explanation_detail": {
      "correct": {
        "en": "PQC addresses quantum threats through resistant cryptographic schemes, including key establishment and signatures.",
        "th": "PQC รับมือภัยควอนตัมด้วยกลไกที่ต้านทาน เช่น การสร้างกุญแจร่วมและลายเซ็น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This describes a quantum key distribution goal, not the purpose of post-quantum cryptographic algorithms.",
          "text_th": "ข้อนี้อธิบายเป้าหมายของ Quantum key distribution ไม่ใช่จุดประสงค์ของอัลกอริทึม Post-quantum"
        },
        {
          "letter": "B",
          "text_en": "Larger RSA keys do not remove the underlying vulnerability to a sufficiently capable quantum computer.",
          "text_th": "กุญแจ RSA ที่ยาวขึ้นไม่ได้ขจัดจุดอ่อนพื้นฐานต่อคอมพิวเตอร์ควอนตัมที่มีความสามารถเพียงพอ"
        },
        {
          "letter": "C",
          "text_en": "Password hashing addresses stored password protection; it does not replace quantum-vulnerable public-key algorithms.",
          "text_th": "การแฮชรหัสผ่านปกป้องรหัสผ่านที่จัดเก็บ ไม่ได้ทดแทนอัลกอริทึมกุญแจสาธารณะที่เสี่ยงต่อควอนตัม"
        }
      ]
    }
  },
  {
    "id": 1010,
    "dom": 5,
    "question": "A company stores records that must remain confidential for many years. Its bulk encryption uses AES, but its key-establishment process uses a quantum-vulnerable public-key scheme. What should its migration assessment include?",
    "options": [
      "Identify the vulnerable key-establishment dependency and assess approved replacements",
      "Limit the review to whether the existing keys are stored securely",
      "Replace the bulk cipher while keeping the vulnerable public-key process",
      "Treat the use of AES as evidence that the whole system is quantum-resistant"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The public-key dependency remains relevant even when bulk data uses a symmetric cipher. Option B is incorrect: Secure storage matters, but does not remove the algorithmic quantum vulnerability described. Option C is incorrect: Changing only bulk encryption leaves the identified vulnerable dependency unaddressed. Option D is incorrect: The bulk cipher does not establish resistance of the separate key-establishment mechanism.",
    "short_explanation_en": "The public-key dependency remains relevant even when bulk data uses a symmetric cipher.",
    "question_th": "บริษัทเก็บบันทึกที่ต้องเป็นความลับอีกหลายปี โดยเข้ารหัสข้อมูลจำนวนมากด้วย AES แต่กระบวนการสร้างหรือจัดตั้งกุญแจร่วมใช้ Public-key scheme ที่เสี่ยงต่อควอนตัม การประเมินการย้ายระบบควรรวมอะไร?",
    "options_th": [
      "ระบุส่วนจัดตั้งกุญแจร่วมที่มีความเสี่ยงและประเมินวิธีทดแทนที่อนุมัติ",
      "จำกัดการทบทวนเฉพาะการเก็บกุญแจเดิมว่าปลอดภัยหรือไม่",
      "เปลี่ยนตัวเข้ารหัสข้อมูลโดยคงกระบวนการ Public-key ที่มีความเสี่ยง",
      "ถือว่าการใช้ AES พิสูจน์ว่าระบบทั้งหมดต้านทานควอนตัมแล้ว"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: ส่วน Public-key ยังต้องได้รับการประเมินแม้ข้อมูลจำนวนมากใช้ Symmetric cipher\n- ข้อ B ไม่ถูกต้อง: การเก็บอย่างปลอดภัยสำคัญ แต่ไม่ลบความเสี่ยงควอนตัมของอัลกอริทึมที่โจทย์ระบุ\n- ข้อ C ไม่ถูกต้อง: การเปลี่ยนเฉพาะการเข้ารหัสข้อมูลยังไม่จัดการส่วนที่ระบุว่ามีความเสี่ยง\n- ข้อ D ไม่ถูกต้อง: อัลกอริทึมเข้ารหัสข้อมูลไม่ได้พิสูจน์ความต้านทานของกลไกจัดตั้งกุญแจร่วมที่แยกกัน",
    "explanation_detail": {
      "correct": {
        "en": "The public-key dependency remains relevant even when bulk data uses a symmetric cipher.",
        "th": "ส่วน Public-key ยังต้องได้รับการประเมินแม้ข้อมูลจำนวนมากใช้ Symmetric cipher"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Secure storage matters, but does not remove the algorithmic quantum vulnerability described.",
          "text_th": "การเก็บอย่างปลอดภัยสำคัญ แต่ไม่ลบความเสี่ยงควอนตัมของอัลกอริทึมที่โจทย์ระบุ"
        },
        {
          "letter": "C",
          "text_en": "Changing only bulk encryption leaves the identified vulnerable dependency unaddressed.",
          "text_th": "การเปลี่ยนเฉพาะการเข้ารหัสข้อมูลยังไม่จัดการส่วนที่ระบุว่ามีความเสี่ยง"
        },
        {
          "letter": "D",
          "text_en": "The bulk cipher does not establish resistance of the separate key-establishment mechanism.",
          "text_th": "อัลกอริทึมเข้ารหัสข้อมูลไม่ได้พิสูจน์ความต้านทานของกลไกจัดตั้งกุญแจร่วมที่แยกกัน"
        }
      ]
    }
  },
  {
    "id": 1011,
    "dom": 5,
    "question": "Which activity is monitoring rather than simply logging security events?",
    "options": [
      "Copying application records into central storage",
      "Keeping archived records for the required retention period",
      "Evaluating recorded activity for patterns requiring attention",
      "Writing authentication outcomes to a system record"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Monitoring evaluates observations; recording events alone does not establish that evaluation occurred. Option A is incorrect: Central collection supports monitoring, but collection alone is not analysis. Option B is incorrect: Retention preserves records for later use; it does not establish active evaluation. Option D is incorrect: This creates log records, but does not by itself evaluate their security meaning.",
    "short_explanation_en": "Monitoring evaluates observations; recording events alone does not establish that evaluation occurred.",
    "question_th": "กิจกรรมใดเป็น Monitoring ไม่ใช่เพียง Logging เหตุการณ์ความปลอดภัย?",
    "options_th": [
      "คัดลอกบันทึกแอปไปเก็บส่วนกลาง",
      "เก็บบันทึกใน Archive ตามระยะเวลาที่กำหนด",
      "ประเมินกิจกรรมที่บันทึกไว้เพื่อหารูปแบบที่ต้องตรวจสอบ",
      "เขียนผลการยืนยันตัวตนลงบันทึกระบบ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: Monitoring ประเมินสิ่งที่สังเกตได้ การบันทึกอย่างเดียวไม่ได้ยืนยันว่ามีการประเมิน\n- ข้อ A ไม่ถูกต้อง: การรวมบันทึกช่วย Monitoring แต่การรวบรวมอย่างเดียวยังไม่ใช่การวิเคราะห์\n- ข้อ B ไม่ถูกต้อง: Retention เก็บบันทึกไว้ใช้ภายหลัง ไม่ได้แสดงว่ามีการประเมินอยู่\n- ข้อ D ไม่ถูกต้อง: การกระทำนี้สร้าง Log แต่ยังไม่ได้ประเมินความหมายด้านความปลอดภัย",
    "explanation_detail": {
      "correct": {
        "en": "Monitoring evaluates observations; recording events alone does not establish that evaluation occurred.",
        "th": "Monitoring ประเมินสิ่งที่สังเกตได้ การบันทึกอย่างเดียวไม่ได้ยืนยันว่ามีการประเมิน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Central collection supports monitoring, but collection alone is not analysis.",
          "text_th": "การรวมบันทึกช่วย Monitoring แต่การรวบรวมอย่างเดียวยังไม่ใช่การวิเคราะห์"
        },
        {
          "letter": "B",
          "text_en": "Retention preserves records for later use; it does not establish active evaluation.",
          "text_th": "Retention เก็บบันทึกไว้ใช้ภายหลัง ไม่ได้แสดงว่ามีการประเมินอยู่"
        },
        {
          "letter": "D",
          "text_en": "This creates log records, but does not by itself evaluate their security meaning.",
          "text_th": "การกระทำนี้สร้าง Log แต่ยังไม่ได้ประเมินความหมายด้านความปลอดภัย"
        }
      ]
    }
  },
  {
    "id": 1012,
    "dom": 5,
    "question": "A detection rule must relate application exports to the accounts that requested them. Authentication logs reach the SIEM, but the application’s export audit records are not collected. Which change MOST directly addresses the visibility gap?",
    "options": [
      "Increase retention of the existing authentication records",
      "Correlate the existing sign-in records by account and source address",
      "Collect export records with account identifiers and timestamps",
      "Lower the threshold for failed-authentication alerts"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The missing source provides the export activity and context needed to relate it to authentication records. Option A is incorrect: Longer retention does not add the missing export activity. Option B is incorrect: This relates sign-ins but cannot identify export requests that the collected records do not contain. Option D is incorrect: A more sensitive login rule does not reveal which accounts exported application data.",
    "short_explanation_en": "The missing source provides the export activity and context needed to relate it to authentication records.",
    "question_th": "กฎตรวจจับต้องเชื่อมการส่งออกข้อมูลจากแอปกับบัญชีที่สั่งงาน มี Authentication logs เข้า SIEM แล้ว แต่ยังไม่เก็บ Export audit records ของแอป การเปลี่ยนแปลงใดแก้ช่องว่างการมองเห็นได้ตรงที่สุด?",
    "options_th": [
      "เพิ่มระยะเวลาเก็บ Authentication records ที่มีอยู่",
      "เชื่อมโยงบันทึกลงชื่อเข้าใช้เดิมตามบัญชีและที่อยู่ต้นทาง",
      "เก็บบันทึกการส่งออกพร้อมรหัสบัญชีและเวลา",
      "ลดเกณฑ์แจ้งเตือนการยืนยันตัวตนล้มเหลว"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: แหล่งข้อมูลที่ขาดให้กิจกรรมส่งออกและบริบทที่จำเป็นต่อการเชื่อมกับบันทึกยืนยันตัวตน\n- ข้อ A ไม่ถูกต้อง: การเก็บนานขึ้นไม่ได้เพิ่มข้อมูลกิจกรรมส่งออกที่ขาดอยู่\n- ข้อ B ไม่ถูกต้อง: ข้อนี้เชื่อมโยงการลงชื่อเข้าใช้ แต่ไม่ระบุคำขอส่งออกที่ไม่มีในบันทึกที่เก็บ\n- ข้อ D ไม่ถูกต้อง: กฎ Login ที่ไวขึ้นไม่ได้บอกว่าบัญชีใดส่งออกข้อมูลแอป",
    "explanation_detail": {
      "correct": {
        "en": "The missing source provides the export activity and context needed to relate it to authentication records.",
        "th": "แหล่งข้อมูลที่ขาดให้กิจกรรมส่งออกและบริบทที่จำเป็นต่อการเชื่อมกับบันทึกยืนยันตัวตน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Longer retention does not add the missing export activity.",
          "text_th": "การเก็บนานขึ้นไม่ได้เพิ่มข้อมูลกิจกรรมส่งออกที่ขาดอยู่"
        },
        {
          "letter": "B",
          "text_en": "This relates sign-ins but cannot identify export requests that the collected records do not contain.",
          "text_th": "ข้อนี้เชื่อมโยงการลงชื่อเข้าใช้ แต่ไม่ระบุคำขอส่งออกที่ไม่มีในบันทึกที่เก็บ"
        },
        {
          "letter": "D",
          "text_en": "A more sensitive login rule does not reveal which accounts exported application data.",
          "text_th": "กฎ Login ที่ไวขึ้นไม่ได้บอกว่าบัญชีใดส่งออกข้อมูลแอป"
        }
      ]
    }
  },
  {
    "id": 1013,
    "dom": 5,
    "question": "Two validated alerts await triage. One shows ongoing unauthorized changes to a critical payment service. The other records many blocked probes against an isolated training host, with no signs of access. Policy prioritizes active business impact. Which alert has the higher priority?",
    "options": [
      "The training-host alert because it contains more attempts",
      "Both alerts equally because both involve unauthorized activity",
      "The payment-service alert because harmful activity is ongoing",
      "The training-host alert because repeated probes may precede a compromise"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Active unauthorized changes to a critical service meet the stated priority criterion more strongly than blocked probes. Option A is incorrect: Attempt volume does not outweigh the supplied evidence of active critical-service impact under this policy. Option B is incorrect: The policy requires differentiating actual business impact rather than treating all unauthorized activity alike. Option D is incorrect: Possible later compromise merits investigation, but the stated rule gives ongoing critical business harm higher priority.",
    "short_explanation_en": "Active unauthorized changes to a critical service meet the stated priority criterion more strongly than blocked probes.",
    "question_th": "มี Alert ที่ตรวจสอบแล้วสองรายการ รายการแรกพบการแก้ไขโดยไม่มีสิทธิ์ที่กำลังเกิดกับบริการชำระเงินสำคัญ อีกอันเป็นการ Probe จำนวนมากที่ถูกบล็อกบนเครื่องฝึกแยกส่วนโดยไม่พบการเข้าถึง นโยบายให้ความสำคัญกับผลกระทบต่อธุรกิจที่เกิดอยู่ ควรจัดลำดับใดสูงกว่า?",
    "options_th": [
      "Alert เครื่องฝึก เพราะมีความพยายามจำนวนมากกว่า",
      "ให้เท่ากัน เพราะทั้งคู่เกี่ยวข้องกับกิจกรรมที่ไม่มีสิทธิ์",
      "Alert บริการชำระเงิน เพราะกำลังเกิดกิจกรรมที่เป็นอันตราย",
      "แจ้งเตือนเครื่องฝึกอบรม เพราะการสแกนซ้ำอาจนำไปสู่การบุกรุก"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การแก้ไขที่ไม่มีสิทธิ์บนบริการสำคัญตรงเกณฑ์ผลกระทบที่เกิดอยู่มากกว่า Probe ที่ถูกบล็อก\n- ข้อ A ไม่ถูกต้อง: จำนวนครั้งไม่ได้เหนือกว่าหลักฐานผลกระทบที่กำลังเกิดกับบริการสำคัญตามนโยบายนี้\n- ข้อ B ไม่ถูกต้อง: นโยบายต้องแยกผลกระทบจริงต่อธุรกิจ ไม่ใช่จัดกิจกรรมที่ไม่มีสิทธิ์ทุกอย่างเท่ากัน\n- ข้อ D ไม่ถูกต้อง: โอกาสถูกบุกรุกภายหลังควรตรวจสอบ แต่กฎที่ระบุให้ความเสียหายต่อธุรกิจสำคัญที่กำลังเกิดมีลำดับสูงกว่า",
    "explanation_detail": {
      "correct": {
        "en": "Active unauthorized changes to a critical service meet the stated priority criterion more strongly than blocked probes.",
        "th": "การแก้ไขที่ไม่มีสิทธิ์บนบริการสำคัญตรงเกณฑ์ผลกระทบที่เกิดอยู่มากกว่า Probe ที่ถูกบล็อก"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Attempt volume does not outweigh the supplied evidence of active critical-service impact under this policy.",
          "text_th": "จำนวนครั้งไม่ได้เหนือกว่าหลักฐานผลกระทบที่กำลังเกิดกับบริการสำคัญตามนโยบายนี้"
        },
        {
          "letter": "B",
          "text_en": "The policy requires differentiating actual business impact rather than treating all unauthorized activity alike.",
          "text_th": "นโยบายต้องแยกผลกระทบจริงต่อธุรกิจ ไม่ใช่จัดกิจกรรมที่ไม่มีสิทธิ์ทุกอย่างเท่ากัน"
        },
        {
          "letter": "D",
          "text_en": "Possible later compromise merits investigation, but the stated rule gives ongoing critical business harm higher priority.",
          "text_th": "โอกาสถูกบุกรุกภายหลังควรตรวจสอบ แต่กฎที่ระบุให้ความเสียหายต่อธุรกิจสำคัญที่กำลังเกิดมีลำดับสูงกว่า"
        }
      ]
    }
  },
  {
    "id": 1014,
    "dom": 5,
    "question": "A junior analyst validates suspicious activity involving a privileged account. The playbook requires the incident lead to approve any account restriction; the analyst may collect records and escalate. No approval has been issued. What is the MOST appropriate next action?",
    "options": [
      "Collect another day of account activity before notifying the incident lead",
      "Escalate the evidence to the incident lead for a response decision",
      "Restrict the account and request retrospective approval",
      "Ask the account owner to approve restricting their own account"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Escalation follows the stated authority boundary and supplies the decision maker with validated evidence. Option A is incorrect: More evidence can be collected, but validated privileged-account activity should already be escalated to the decision-maker. Option C is incorrect: The stated playbook requires approval before this action; no emergency exception is provided. Option D is incorrect: The playbook assigns restriction approval to the incident lead, not to the account owner.",
    "short_explanation_en": "Escalation follows the stated authority boundary and supplies the decision maker with validated evidence.",
    "question_th": "นักวิเคราะห์ระดับเริ่มต้นตรวจสอบกิจกรรมน่าสงสัยของบัญชีสิทธิ์สูงแล้ว Playbook กำหนดให้ Incident lead อนุมัติก่อนจำกัดบัญชี โดยนักวิเคราะห์เก็บบันทึกและ Escalate ได้ ขณะนี้ยังไม่มีการอนุมัติ ควรทำอะไรต่ออย่างเหมาะสมที่สุด?",
    "options_th": [
      "เก็บกิจกรรมบัญชีเพิ่มอีกหนึ่งวันก่อนแจ้งหัวหน้าเหตุการณ์",
      "ส่งหลักฐานให้ Incident lead เพื่อพิจารณาการตอบสนอง",
      "จำกัดบัญชีก่อนแล้วขออนุมัติย้อนหลัง",
      "ขอให้เจ้าของบัญชีอนุมัติการจำกัดบัญชีของตน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การ Escalate เป็นไปตามขอบเขตอำนาจและให้หลักฐานที่ตรวจสอบแล้วแก่ผู้ตัดสินใจ\n- ข้อ A ไม่ถูกต้อง: เก็บหลักฐานเพิ่มได้ แต่ควรยกระดับกิจกรรมบัญชีสิทธิ์สูงที่ตรวจสอบแล้วให้ผู้มีอำนาจตัดสินใจ\n- ข้อ C ไม่ถูกต้อง: Playbook ที่ระบุต้องอนุมัติก่อน และโจทย์ไม่ได้ให้ข้อยกเว้นฉุกเฉิน\n- ข้อ D ไม่ถูกต้อง: คู่มือกำหนดให้หัวหน้าเหตุการณ์อนุมัติการจำกัด ไม่ใช่เจ้าของบัญชี",
    "explanation_detail": {
      "correct": {
        "en": "Escalation follows the stated authority boundary and supplies the decision maker with validated evidence.",
        "th": "การ Escalate เป็นไปตามขอบเขตอำนาจและให้หลักฐานที่ตรวจสอบแล้วแก่ผู้ตัดสินใจ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "More evidence can be collected, but validated privileged-account activity should already be escalated to the decision-maker.",
          "text_th": "เก็บหลักฐานเพิ่มได้ แต่ควรยกระดับกิจกรรมบัญชีสิทธิ์สูงที่ตรวจสอบแล้วให้ผู้มีอำนาจตัดสินใจ"
        },
        {
          "letter": "C",
          "text_en": "The stated playbook requires approval before this action; no emergency exception is provided.",
          "text_th": "Playbook ที่ระบุต้องอนุมัติก่อน และโจทย์ไม่ได้ให้ข้อยกเว้นฉุกเฉิน"
        },
        {
          "letter": "D",
          "text_en": "The playbook assigns restriction approval to the incident lead, not to the account owner.",
          "text_th": "คู่มือกำหนดให้หัวหน้าเหตุการณ์อนุมัติการจำกัด ไม่ใช่เจ้าของบัญชี"
        }
      ]
    }
  },
  {
    "id": 1015,
    "dom": 5,
    "question": "A rule is intended to detect unauthorized privileged scans. It flags a scan outside its usual window. Investigation confirms the scan was approved under a documented exception and no unauthorized activity occurred. Relative to the intended detection purpose, how is this alert classified?",
    "options": [
      "False negative",
      "True negative",
      "True positive",
      "False positive"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The detector signaled suspicious activity, but investigation established an authorized benign exception. Option A is incorrect: A false negative requires a relevant harmful condition that the detector missed; this detector did alert. Option B is incorrect: A true negative would involve no alert for the benign activity; an alert was produced here. Option C is incorrect: The investigation did not establish the unauthorized condition the rule was intended to detect.",
    "short_explanation_en": "The detector signaled suspicious activity, but investigation established an authorized benign exception.",
    "question_th": "กฎมีเป้าหมายตรวจจับ Privileged scan ที่ไม่ได้รับอนุญาต และแจ้ง Scan นอกช่วงปกติ การตรวจสอบยืนยันว่า Scan อนุมัติตามข้อยกเว้นที่บันทึกไว้และไม่มีกิจกรรมที่ไม่มีสิทธิ์ เมื่อเทียบกับเป้าหมายตรวจจับ Alert นี้จัดเป็นประเภทใด?",
    "options_th": [
      "ผลลบลวง (False negative)",
      "ผลลบจริง (True negative)",
      "ผลบวกจริง (True positive)",
      "ผลบวกลวง (False positive)"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ระบบแจ้งกิจกรรมน่าสงสัย แต่การตรวจยืนยันว่าเป็นข้อยกเว้นที่อนุมัติและไม่เป็นอันตราย\n- ข้อ A ไม่ถูกต้อง: False negative ต้องมีภาวะอันตรายที่ระบบพลาด แต่กรณีนี้ระบบแจ้งเตือน\n- ข้อ B ไม่ถูกต้อง: True negative คือไม่แจ้งสำหรับกิจกรรมที่ไม่เป็นภัย แต่กรณีนี้มี Alert\n- ข้อ C ไม่ถูกต้อง: การตรวจสอบไม่ได้พบเงื่อนไขที่ไม่มีสิทธิ์ซึ่งกฎตั้งใจตรวจจับ",
    "explanation_detail": {
      "correct": {
        "en": "The detector signaled suspicious activity, but investigation established an authorized benign exception.",
        "th": "ระบบแจ้งกิจกรรมน่าสงสัย แต่การตรวจยืนยันว่าเป็นข้อยกเว้นที่อนุมัติและไม่เป็นอันตราย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A false negative requires a relevant harmful condition that the detector missed; this detector did alert.",
          "text_th": "False negative ต้องมีภาวะอันตรายที่ระบบพลาด แต่กรณีนี้ระบบแจ้งเตือน"
        },
        {
          "letter": "B",
          "text_en": "A true negative would involve no alert for the benign activity; an alert was produced here.",
          "text_th": "True negative คือไม่แจ้งสำหรับกิจกรรมที่ไม่เป็นภัย แต่กรณีนี้มี Alert"
        },
        {
          "letter": "C",
          "text_en": "The investigation did not establish the unauthorized condition the rule was intended to detect.",
          "text_th": "การตรวจสอบไม่ได้พบเงื่อนไขที่ไม่มีสิทธิ์ซึ่งกฎตั้งใจตรวจจับ"
        }
      ]
    }
  },
  {
    "id": 1016,
    "dom": 5,
    "question": "An AI-assisted SIEM summary links a suspicious sign-in to a later data export. The source records show different accounts, and the summary provides no host or session link. Which conclusion is MOST justified?",
    "options": [
      "Different account names prove the activities are unrelated",
      "The later export confirms that the suspicious sign-in succeeded",
      "The proposed link needs corroboration before treating the events as one attack",
      "The AI-generated narrative is sufficient evidence of account compromise"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Temporal proximity and an automated narrative do not establish a shared actor or session. Option A is incorrect: Different accounts weaken this link but do not prove that a broader attack could not involve both. Option B is incorrect: The records lack the connection needed to attribute the export to that sign-in. Option D is incorrect: An automated explanation must be assessed against its source evidence, especially when linking context is missing.",
    "short_explanation_en": "Temporal proximity and an automated narrative do not establish a shared actor or session.",
    "question_th": "สรุปจาก SIEM ที่ใช้ AI เชื่อม Sign-in น่าสงสัยกับการส่งออกข้อมูลภายหลัง แต่ Source records แสดงคนละบัญชีและสรุปไม่ระบุความเชื่อมโยงของ Host หรือ Session ข้อสรุปใดมีเหตุผลรองรับมากที่สุด?",
    "options_th": [
      "ชื่อบัญชีต่างกันพิสูจน์ว่าสองกิจกรรมไม่เกี่ยวกัน",
      "การส่งออกภายหลังยืนยันว่า Sign-in น่าสงสัยสำเร็จ",
      "ต้องหาหลักฐานสนับสนุนก่อนถือว่าสองเหตุการณ์เป็นการโจมตีเดียวกัน",
      "เรื่องราวที่ AI สร้างเป็นหลักฐานเพียงพอว่าบัญชีถูกยึดครอง"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: เวลาใกล้กันและเรื่องราวจากระบบอัตโนมัติไม่ได้ยืนยันผู้กระทำหรือ Session ร่วมกัน\n- ข้อ A ไม่ถูกต้อง: บัญชีต่างกันทำให้ข้อเชื่อมโยงนี้อ่อนลง แต่ไม่พิสูจน์ว่าการโจมตีวงกว้างจะไม่เกี่ยวกับทั้งสอง\n- ข้อ B ไม่ถูกต้อง: บันทึกยังขาดความเชื่อมโยงที่จะระบุว่าการส่งออกมาจาก Sign-in นั้น\n- ข้อ D ไม่ถูกต้อง: ต้องประเมินคำอธิบายอัตโนมัติเทียบหลักฐานต้นทาง โดยเฉพาะเมื่อขาดบริบทเชื่อมโยง",
    "explanation_detail": {
      "correct": {
        "en": "Temporal proximity and an automated narrative do not establish a shared actor or session.",
        "th": "เวลาใกล้กันและเรื่องราวจากระบบอัตโนมัติไม่ได้ยืนยันผู้กระทำหรือ Session ร่วมกัน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Different accounts weaken this link but do not prove that a broader attack could not involve both.",
          "text_th": "บัญชีต่างกันทำให้ข้อเชื่อมโยงนี้อ่อนลง แต่ไม่พิสูจน์ว่าการโจมตีวงกว้างจะไม่เกี่ยวกับทั้งสอง"
        },
        {
          "letter": "B",
          "text_en": "The records lack the connection needed to attribute the export to that sign-in.",
          "text_th": "บันทึกยังขาดความเชื่อมโยงที่จะระบุว่าการส่งออกมาจาก Sign-in นั้น"
        },
        {
          "letter": "D",
          "text_en": "An automated explanation must be assessed against its source evidence, especially when linking context is missing.",
          "text_th": "ต้องประเมินคำอธิบายอัตโนมัติเทียบหลักฐานต้นทาง โดยเฉพาะเมื่อขาดบริบทเชื่อมโยง"
        }
      ]
    }
  },
  {
    "id": 1017,
    "dom": 5,
    "question": "One employee deliberately sells customer records for personal profit. Another accidentally sends a report to the wrong recipient. Which assessment correctly describes these insider situations?",
    "options": [
      "Only the first is an insider situation; the second is an external disclosure because the recipient is outside",
      "Both are malicious insider actions because protected data was disclosed",
      "Only the first creates insider risk because the second was accidental",
      "Both create insider risk, but only the first action is deliberately malicious"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Insider threats include intentional and unintentional harm; the supplied intent distinguishes these cases. Option A is incorrect: The employee’s internal access is the source of both situations; an outside recipient does not turn the accidental insider action into an externally originated event. Option B is incorrect: Disclosure establishes possible harm, not malicious intent in the accidental case. Option C is incorrect: Accidental misuse of authorized access can also create insider risk.",
    "short_explanation_en": "Insider threats include intentional and unintentional harm; the supplied intent distinguishes these cases.",
    "question_th": "พนักงานคนหนึ่งจงใจขายข้อมูลลูกค้าเพื่อประโยชน์ส่วนตัว อีกคนส่งรายงานผิดผู้รับโดยไม่ตั้งใจ ข้อใดอธิบายเหตุจากบุคคลภายในสองกรณีนี้ได้ถูกต้อง?",
    "options_th": [
      "เฉพาะกรณีแรกเป็นเหตุจากบุคคลภายใน กรณีที่สองเป็นเหตุจากภายนอกเพราะผู้รับอยู่นอกองค์กร",
      "ทั้งสองเป็นการกระทำมุ่งร้าย เพราะมีการเปิดเผยข้อมูลที่ต้องปกป้อง",
      "มีเพียงกรณีแรกเป็น Insider risk เพราะกรณีที่สองไม่ตั้งใจ",
      "ทั้งสองสร้าง Insider risk แต่มีเพียงการกระทำแรกที่จงใจมุ่งร้าย"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: Insider threats รวมความเสียหายทั้งที่ตั้งใจและไม่ตั้งใจ เจตนาที่โจทย์ให้แยกสองกรณีนี้\n- ข้อ A ไม่ถูกต้อง: ทั้งสองกรณีมีต้นทางจากสิทธิ์ภายในของพนักงาน ผู้รับภายนอกไม่ได้ทำให้การกระทำโดยพลาดของคนในกลายเป็นเหตุที่มีต้นทางภายนอก\n- ข้อ B ไม่ถูกต้อง: การเปิดเผยบอกถึงความเสียหายที่อาจเกิด ไม่ได้ยืนยันเจตนาร้ายในกรณีผิดพลาด\n- ข้อ C ไม่ถูกต้อง: การใช้สิทธิ์ที่มีอยู่ผิดพลาดโดยไม่ตั้งใจก็สร้าง Insider risk ได้",
    "explanation_detail": {
      "correct": {
        "en": "Insider threats include intentional and unintentional harm; the supplied intent distinguishes these cases.",
        "th": "Insider threats รวมความเสียหายทั้งที่ตั้งใจและไม่ตั้งใจ เจตนาที่โจทย์ให้แยกสองกรณีนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The employee’s internal access is the source of both situations; an outside recipient does not turn the accidental insider action into an externally originated event.",
          "text_th": "ทั้งสองกรณีมีต้นทางจากสิทธิ์ภายในของพนักงาน ผู้รับภายนอกไม่ได้ทำให้การกระทำโดยพลาดของคนในกลายเป็นเหตุที่มีต้นทางภายนอก"
        },
        {
          "letter": "B",
          "text_en": "Disclosure establishes possible harm, not malicious intent in the accidental case.",
          "text_th": "การเปิดเผยบอกถึงความเสียหายที่อาจเกิด ไม่ได้ยืนยันเจตนาร้ายในกรณีผิดพลาด"
        },
        {
          "letter": "C",
          "text_en": "Accidental misuse of authorized access can also create insider risk.",
          "text_th": "การใช้สิทธิ์ที่มีอยู่ผิดพลาดโดยไม่ตั้งใจก็สร้าง Insider risk ได้"
        }
      ]
    }
  },
  {
    "id": 1018,
    "dom": 5,
    "question": "A trusted threat report identifies a malicious file hash and the period when a campaign was active. An analyst wants to determine whether relevant endpoints encountered that file. Which use of the report is MOST appropriate?",
    "options": [
      "Treat a missing hash match as proof that no related activity occurred",
      "Search relevant endpoint records for the hash during the stated period",
      "Search current login failures instead of the reported file evidence",
      "Classify every endpoint as compromised before checking its records"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The indicator and time context support a focused retrospective search; matching evidence can then be investigated. Option A is incorrect: Record coverage and retention may be incomplete; absence of a match is not complete proof of absence. Option C is incorrect: That search does not directly answer whether endpoints encountered the specified file. Option D is incorrect: A report about a campaign does not establish that every endpoint encountered the file.",
    "short_explanation_en": "The indicator and time context support a focused retrospective search; matching evidence can then be investigated.",
    "question_th": "รายงานภัยคุกคามที่เชื่อถือได้ระบุ Hash ไฟล์อันตรายและช่วงที่ Campaign ทำงาน นักวิเคราะห์ต้องการทราบว่า Endpoint ที่เกี่ยวข้องเคยพบไฟล์นั้นหรือไม่ การใช้รายงานในข้อใดเหมาะสมที่สุด?",
    "options_th": [
      "ถือว่าการไม่พบ Hash พิสูจน์ว่าไม่มีกิจกรรมที่เกี่ยวข้อง",
      "ค้นบันทึก Endpoint ที่เกี่ยวข้องตาม Hash ในช่วงเวลาที่ระบุ",
      "ค้นการ Login ล้มเหลวปัจจุบันแทนหลักฐานไฟล์ที่รายงาน",
      "จัด Endpoint ทุกเครื่องว่าถูกยึดครองก่อนตรวจบันทึก"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Indicator และช่วงเวลาช่วยค้นย้อนหลังอย่างมีเป้าหมาย แล้วจึงตรวจหลักฐานที่พบต่อ\n- ข้อ A ไม่ถูกต้อง: ขอบเขตและระยะเวลาเก็บบันทึกอาจไม่ครบ การไม่พบจึงไม่พิสูจน์ว่าไม่มีทั้งหมด\n- ข้อ C ไม่ถูกต้อง: การค้นเช่นนั้นไม่ตอบตรงว่า Endpoint พบไฟล์ที่ระบุหรือไม่\n- ข้อ D ไม่ถูกต้อง: รายงาน Campaign ไม่ได้ยืนยันว่า Endpoint ทุกเครื่องพบไฟล์",
    "explanation_detail": {
      "correct": {
        "en": "The indicator and time context support a focused retrospective search; matching evidence can then be investigated.",
        "th": "Indicator และช่วงเวลาช่วยค้นย้อนหลังอย่างมีเป้าหมาย แล้วจึงตรวจหลักฐานที่พบต่อ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Record coverage and retention may be incomplete; absence of a match is not complete proof of absence.",
          "text_th": "ขอบเขตและระยะเวลาเก็บบันทึกอาจไม่ครบ การไม่พบจึงไม่พิสูจน์ว่าไม่มีทั้งหมด"
        },
        {
          "letter": "C",
          "text_en": "That search does not directly answer whether endpoints encountered the specified file.",
          "text_th": "การค้นเช่นนั้นไม่ตอบตรงว่า Endpoint พบไฟล์ที่ระบุหรือไม่"
        },
        {
          "letter": "D",
          "text_en": "A report about a campaign does not establish that every endpoint encountered the file.",
          "text_th": "รายงาน Campaign ไม่ได้ยืนยันว่า Endpoint ทุกเครื่องพบไฟล์"
        }
      ]
    }
  },
  {
    "id": 1019,
    "dom": 5,
    "question": "An old feed labels an IP address as malicious. Current provider information shows the address now belongs to a shared business service, and internal logs show only recent connections. What does the feed entry establish about those recent connections?",
    "options": [
      "It requires blocking the address regardless of operational context",
      "It is a lead to validate, not sufficient proof of current malicious activity",
      "It proves that the shared business service is fully trustworthy",
      "It confirms that the recent connections are part of the old campaign"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The indicator’s age and changed/shared use limit what can be inferred about current traffic. Option A is incorrect: The feed alone supplies no such authority or rule and may affect legitimate shared-service traffic. Option C is incorrect: A changed context weakens an old indicator; it does not prove the entire service is safe. Option D is incorrect: A historical address association does not establish continuity of ownership or malicious use.",
    "short_explanation_en": "The indicator’s age and changed/shared use limit what can be inferred about current traffic.",
    "question_th": "Feed เก่าระบุว่า IP หนึ่งเป็นอันตราย ข้อมูลผู้ให้บริการปัจจุบันแสดงว่า IP นี้เป็นบริการธุรกิจที่ใช้ร่วมกัน และ Log ภายในพบเฉพาะการเชื่อมต่อไม่นานมานี้ Feed ดังกล่าวยืนยันอะไรเกี่ยวกับการเชื่อมต่อล่าสุด?",
    "options_th": [
      "กำหนดให้ต้องบล็อก IP โดยไม่พิจารณาบริบทการใช้งาน",
      "เป็นข้อมูลนำให้ตรวจต่อ ยังไม่พอพิสูจน์กิจกรรมอันตรายในปัจจุบัน",
      "พิสูจน์ว่าบริการธุรกิจที่ใช้ร่วมกันน่าเชื่อถือทั้งหมด",
      "ยืนยันว่าการเชื่อมต่อล่าสุดเป็นส่วนหนึ่งของ Campaign เก่า"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: อายุ Indicator และการใช้งานที่เปลี่ยนหรือใช้ร่วมกันจำกัดข้อสรุปเกี่ยวกับ Traffic ปัจจุบัน\n- ข้อ A ไม่ถูกต้อง: Feed เพียงอย่างเดียวไม่ได้ให้อำนาจหรือกฎดังกล่าว และอาจกระทบการใช้บริการที่ถูกต้อง\n- ข้อ C ไม่ถูกต้อง: บริบทที่เปลี่ยนทำให้ Indicator เก่าอ่อนลง แต่ไม่พิสูจน์ว่าบริการทั้งหมดปลอดภัย\n- ข้อ D ไม่ถูกต้อง: ความเกี่ยวข้องกับ IP ในอดีตไม่ยืนยันว่าเจ้าของหรือการใช้อันตรายยังต่อเนื่อง",
    "explanation_detail": {
      "correct": {
        "en": "The indicator’s age and changed/shared use limit what can be inferred about current traffic.",
        "th": "อายุ Indicator และการใช้งานที่เปลี่ยนหรือใช้ร่วมกันจำกัดข้อสรุปเกี่ยวกับ Traffic ปัจจุบัน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The feed alone supplies no such authority or rule and may affect legitimate shared-service traffic.",
          "text_th": "Feed เพียงอย่างเดียวไม่ได้ให้อำนาจหรือกฎดังกล่าว และอาจกระทบการใช้บริการที่ถูกต้อง"
        },
        {
          "letter": "C",
          "text_en": "A changed context weakens an old indicator; it does not prove the entire service is safe.",
          "text_th": "บริบทที่เปลี่ยนทำให้ Indicator เก่าอ่อนลง แต่ไม่พิสูจน์ว่าบริการทั้งหมดปลอดภัย"
        },
        {
          "letter": "D",
          "text_en": "A historical address association does not establish continuity of ownership or malicious use.",
          "text_th": "ความเกี่ยวข้องกับ IP ในอดีตไม่ยืนยันว่าเจ้าของหรือการใช้อันตรายยังต่อเนื่อง"
        }
      ]
    }
  },
  {
    "id": 1020,
    "dom": 5,
    "question": "In MITRE ATT&CK, what does a tactic describe?",
    "options": [
      "The specific method used to achieve the adversary’s goal",
      "The exact implementation observed in one intrusion",
      "The adversary’s tactical goal for performing an action",
      "The defensive rule that automatically blocks the behavior"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. A tactic expresses why an adversary acts; a technique describes how the goal is pursued. Option A is incorrect: This describes a technique rather than the tactic’s goal. Option B is incorrect: A particular implementation is a procedure example, not the general tactical goal. Option D is incorrect: ATT&CK describes adversary behavior; its tactics are not automatic enforcement rules.",
    "short_explanation_en": "A tactic expresses why an adversary acts; a technique describes how the goal is pursued.",
    "question_th": "ใน MITRE ATT&CK คำว่า Tactic อธิบายอะไร?",
    "options_th": [
      "วิธีเฉพาะที่ใช้บรรลุเป้าหมายของผู้โจมตี",
      "วิธีลงมือเฉพาะที่สังเกตพบในการบุกรุกครั้งหนึ่ง",
      "เป้าหมายเชิงยุทธวิธีของผู้โจมตีในการกระทำหนึ่ง",
      "กฎป้องกันที่บล็อกพฤติกรรมโดยอัตโนมัติ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: Tactic อธิบายว่าทำไปเพื่ออะไร ส่วน Technique อธิบายวิธีบรรลุเป้าหมายนั้น\n- ข้อ A ไม่ถูกต้อง: นี่อธิบาย Technique แทนที่จะเป็นเป้าหมายของ Tactic\n- ข้อ B ไม่ถูกต้อง: การลงมือในกรณีเฉพาะเป็นตัวอย่าง Procedure ไม่ใช่เป้าหมายเชิงยุทธวิธีทั่วไป\n- ข้อ D ไม่ถูกต้อง: ATT&CK อธิบายพฤติกรรมผู้โจมตี Tactic ไม่ใช่กฎบังคับใช้ที่ทำงานอัตโนมัติ",
    "explanation_detail": {
      "correct": {
        "en": "A tactic expresses why an adversary acts; a technique describes how the goal is pursued.",
        "th": "Tactic อธิบายว่าทำไปเพื่ออะไร ส่วน Technique อธิบายวิธีบรรลุเป้าหมายนั้น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This describes a technique rather than the tactic’s goal.",
          "text_th": "นี่อธิบาย Technique แทนที่จะเป็นเป้าหมายของ Tactic"
        },
        {
          "letter": "B",
          "text_en": "A particular implementation is a procedure example, not the general tactical goal.",
          "text_th": "การลงมือในกรณีเฉพาะเป็นตัวอย่าง Procedure ไม่ใช่เป้าหมายเชิงยุทธวิธีทั่วไป"
        },
        {
          "letter": "D",
          "text_en": "ATT&CK describes adversary behavior; its tactics are not automatic enforcement rules.",
          "text_th": "ATT&CK อธิบายพฤติกรรมผู้โจมตี Tactic ไม่ใช่กฎบังคับใช้ที่ทำงานอัตโนมัติ"
        }
      ]
    }
  },
  {
    "id": 1021,
    "dom": 5,
    "question": "An external responder requests an incident log containing employee details. Policy permits sharing only relevant records with approved responders through the secure case portal. The responder is approved. What should the analyst provide?",
    "options": [
      "The complete archive through the secure case portal",
      "The relevant records through the secure case portal",
      "A summary including this incident and unrelated employee incidents through the secure case portal",
      "The relevant records through an ordinary personal email account"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. This meets the stated recipient, relevance and transfer-channel requirements together. Option A is incorrect: An approved recipient and channel do not remove the restriction to relevant records. Option C is incorrect: The secure channel satisfies only the transfer requirement; unrelated employee incidents exceed the relevant-records limit. Option D is incorrect: Selecting relevant data does not satisfy the required secure transfer channel.",
    "short_explanation_en": "This meets the stated recipient, relevance and transfer-channel requirements together.",
    "question_th": "ผู้ตอบสนองภายนอกขอ Incident log ที่มีข้อมูลพนักงาน นโยบายให้แชร์เฉพาะบันทึกที่เกี่ยวข้องแก่ผู้ตอบสนองที่อนุมัติผ่าน Secure case portal และผู้ขอนี้ได้รับอนุมัติแล้ว นักวิเคราะห์ควรให้อะไร?",
    "options_th": [
      "Archive ทั้งหมดผ่าน Secure case portal",
      "บันทึกที่เกี่ยวข้องผ่าน Secure case portal",
      "สรุปเหตุการณ์นี้รวมกับเหตุการณ์พนักงานที่ไม่เกี่ยวข้องผ่าน Secure case portal",
      "บันทึกที่เกี่ยวข้องผ่านบัญชีอีเมลส่วนตัวทั่วไป"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การกระทำนี้ตรงทั้งผู้รับที่อนุมัติ ความเกี่ยวข้อง และช่องทางส่งที่นโยบายกำหนด\n- ข้อ A ไม่ถูกต้อง: ผู้รับและช่องทางที่อนุมัติไม่ได้ยกเลิกข้อจำกัดให้ส่งเฉพาะบันทึกที่เกี่ยวข้อง\n- ข้อ C ไม่ถูกต้อง: ช่องทางปลอดภัยตอบข้อกำหนดการส่งเท่านั้น เหตุการณ์พนักงานที่ไม่เกี่ยวข้องเกินขอบเขตบันทึกที่อนุญาต\n- ข้อ D ไม่ถูกต้อง: การเลือกข้อมูลที่เกี่ยวข้องไม่ได้ทำให้เป็นไปตามช่องทางส่งที่ปลอดภัยตามข้อกำหนด",
    "explanation_detail": {
      "correct": {
        "en": "This meets the stated recipient, relevance and transfer-channel requirements together.",
        "th": "การกระทำนี้ตรงทั้งผู้รับที่อนุมัติ ความเกี่ยวข้อง และช่องทางส่งที่นโยบายกำหนด"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "An approved recipient and channel do not remove the restriction to relevant records.",
          "text_th": "ผู้รับและช่องทางที่อนุมัติไม่ได้ยกเลิกข้อจำกัดให้ส่งเฉพาะบันทึกที่เกี่ยวข้อง"
        },
        {
          "letter": "C",
          "text_en": "The secure channel satisfies only the transfer requirement; unrelated employee incidents exceed the relevant-records limit.",
          "text_th": "ช่องทางปลอดภัยตอบข้อกำหนดการส่งเท่านั้น เหตุการณ์พนักงานที่ไม่เกี่ยวข้องเกินขอบเขตบันทึกที่อนุญาต"
        },
        {
          "letter": "D",
          "text_en": "Selecting relevant data does not satisfy the required secure transfer channel.",
          "text_th": "การเลือกข้อมูลที่เกี่ยวข้องไม่ได้ทำให้เป็นไปตามช่องทางส่งที่ปลอดภัยตามข้อกำหนด"
        }
      ]
    }
  },
  {
    "id": 1022,
    "dom": 5,
    "question": "Incident records reach their routine deletion date. A documented preservation hold requires those records to remain available until the incident lead releases it. The hold is still active. What is the BEST action?",
    "options": [
      "Suspend routine deletion for the held records and preserve protected access",
      "Remove identifiers from the originals and then apply routine deletion",
      "Export the held records to the case folder, then delete the originals before checking the export",
      "Delete the records because the standard retention date has arrived"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The explicit hold overrides routine disposal for these records while their protection requirements continue. Option B is incorrect: Altering and deleting the held originals would defeat their required preservation. Option C is incorrect: An unchecked export does not establish that the held records remain complete and available; preserve the controlled records under the hold. Option D is incorrect: The active preservation instruction is a stated exception to the routine deletion schedule.",
    "short_explanation_en": "The explicit hold overrides routine disposal for these records while their protection requirements continue.",
    "question_th": "Incident records ถึงวันที่ลบตามรอบ แต่มี Preservation hold ที่บันทึกไว้ให้เก็บจนกว่า Incident lead จะยกเลิก และ Hold ยังมีผลอยู่ ควรทำอะไรจึงเหมาะสมที่สุด?",
    "options_th": [
      "ระงับการลบตามรอบสำหรับบันทึกที่ถูก Hold และคงการเข้าถึงอย่างมีการป้องกัน",
      "ลบข้อมูลระบุตัวจากต้นฉบับแล้วลบตามรอบ",
      "ส่งออกบันทึกที่ถูกระงับการลบไปโฟลเดอร์คดี แล้วลบต้นฉบับก่อนตรวจสอบไฟล์ส่งออก",
      "ลบบันทึกเพราะถึงวันครบกำหนดเก็บปกติแล้ว"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Hold ที่ระบุยกเว้นการกำจัดตามรอบสำหรับบันทึกเหล่านี้ โดยยังต้องป้องกันข้อมูลต่อ\n- ข้อ B ไม่ถูกต้อง: การแก้ไขแล้วลบต้นฉบับที่ถูก Hold ขัดกับการเก็บรักษาที่กำหนด\n- ข้อ C ไม่ถูกต้อง: ไฟล์ส่งออกที่ยังไม่ตรวจสอบไม่ยืนยันว่าบันทึกครบและพร้อมใช้ ควรเก็บบันทึกที่ควบคุมไว้ตามคำสั่ง\n- ข้อ D ไม่ถูกต้อง: คำสั่งเก็บรักษาที่ยังมีผลเป็นข้อยกเว้นที่โจทย์ระบุสำหรับรอบลบปกติ",
    "explanation_detail": {
      "correct": {
        "en": "The explicit hold overrides routine disposal for these records while their protection requirements continue.",
        "th": "Hold ที่ระบุยกเว้นการกำจัดตามรอบสำหรับบันทึกเหล่านี้ โดยยังต้องป้องกันข้อมูลต่อ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Altering and deleting the held originals would defeat their required preservation.",
          "text_th": "การแก้ไขแล้วลบต้นฉบับที่ถูก Hold ขัดกับการเก็บรักษาที่กำหนด"
        },
        {
          "letter": "C",
          "text_en": "An unchecked export does not establish that the held records remain complete and available; preserve the controlled records under the hold.",
          "text_th": "ไฟล์ส่งออกที่ยังไม่ตรวจสอบไม่ยืนยันว่าบันทึกครบและพร้อมใช้ ควรเก็บบันทึกที่ควบคุมไว้ตามคำสั่ง"
        },
        {
          "letter": "D",
          "text_en": "The active preservation instruction is a stated exception to the routine deletion schedule.",
          "text_th": "คำสั่งเก็บรักษาที่ยังมีผลเป็นข้อยกเว้นที่โจทย์ระบุสำหรับรอบลบปกติ"
        }
      ]
    }
  },
  {
    "id": 1023,
    "dom": 5,
    "question": "An authorized responder confirms that malware is spreading from a workstation. The playbook permits network isolation, and the workstation has no safety-critical role. The immediate goal is to stop further spread while retaining the device for investigation. Which action BEST meets that goal?",
    "options": [
      "Restore the workstation’s business files before restricting its network",
      "Delete suspicious files while leaving network connections active",
      "Continue observing until the attacker’s identity is established",
      "Isolate the workstation using the approved containment mechanism"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Authorized network isolation limits spread while preserving the device for the planned investigation. Option A is incorrect: Restoration does not first address the confirmed ongoing network spread described in this case. Option B is incorrect: Partial file removal does not reliably limit the active spread and may alter investigation artifacts. Option C is incorrect: Attribution is not a prerequisite for the explicitly authorized containment of confirmed spread.",
    "short_explanation_en": "Authorized network isolation limits spread while preserving the device for the planned investigation.",
    "question_th": "ผู้ตอบสนองที่มีอำนาจยืนยันว่า Malware กำลังแพร่จาก Workstation โดย Playbook อนุญาตให้แยกเครือข่ายและเครื่องนี้ไม่เกี่ยวกับความปลอดภัยต่อชีวิต เป้าหมายทันทีคือหยุดการแพร่โดยเก็บเครื่องไว้ตรวจสอบ การกระทำใดเหมาะสมที่สุด?",
    "options_th": [
      "กู้ไฟล์งานของเครื่องก่อนจำกัดเครือข่าย",
      "ลบไฟล์น่าสงสัยโดยปล่อยการเชื่อมต่อเครือข่ายไว้",
      "สังเกตต่อจนกว่าจะระบุตัวผู้โจมตีได้",
      "แยก Workstation ด้วยกลไก Containment ที่อนุมัติ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การแยกเครือข่ายที่มีอำนาจอนุญาตจำกัดการแพร่โดยยังเก็บอุปกรณ์ไว้ตรวจสอบ\n- ข้อ A ไม่ถูกต้อง: การกู้ไฟล์ยังไม่จัดการการแพร่ทางเครือข่ายที่ยืนยันว่ากำลังเกิดในกรณีนี้\n- ข้อ B ไม่ถูกต้อง: การลบไฟล์บางส่วนไม่จำกัดการแพร่ที่กำลังเกิดอย่างน่าเชื่อถือและอาจเปลี่ยนหลักฐาน\n- ข้อ C ไม่ถูกต้อง: การระบุตัวผู้โจมตีไม่ใช่เงื่อนไขก่อน Containment ที่ได้รับอนุญาตเมื่อยืนยันการแพร่แล้ว",
    "explanation_detail": {
      "correct": {
        "en": "Authorized network isolation limits spread while preserving the device for the planned investigation.",
        "th": "การแยกเครือข่ายที่มีอำนาจอนุญาตจำกัดการแพร่โดยยังเก็บอุปกรณ์ไว้ตรวจสอบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Restoration does not first address the confirmed ongoing network spread described in this case.",
          "text_th": "การกู้ไฟล์ยังไม่จัดการการแพร่ทางเครือข่ายที่ยืนยันว่ากำลังเกิดในกรณีนี้"
        },
        {
          "letter": "B",
          "text_en": "Partial file removal does not reliably limit the active spread and may alter investigation artifacts.",
          "text_th": "การลบไฟล์บางส่วนไม่จำกัดการแพร่ที่กำลังเกิดอย่างน่าเชื่อถือและอาจเปลี่ยนหลักฐาน"
        },
        {
          "letter": "C",
          "text_en": "Attribution is not a prerequisite for the explicitly authorized containment of confirmed spread.",
          "text_th": "การระบุตัวผู้โจมตีไม่ใช่เงื่อนไขก่อน Containment ที่ได้รับอนุญาตเมื่อยืนยันการแพร่แล้ว"
        }
      ]
    }
  },
  {
    "id": 1024,
    "dom": 5,
    "question": "Responders have removed a backdoor and corrected its entry path. They now rebuild the affected service from a clean image, validate it, and return it to approved use. Which response purpose do these current activities primarily serve?",
    "options": [
      "Recovery of safe service operation",
      "Post-incident review of response performance",
      "Eradication of the identified backdoor",
      "Containment of the initial spread"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Rebuilding, validating and returning service to use address safe restoration after the malicious cause was removed. Option B is incorrect: Review assesses lessons and improvements; rebuilding and returning service are operational restoration activities. Option C is incorrect: The stem says removal and entry-path correction are already completed, rather than the current restoration task. Option D is incorrect: Containment limits ongoing impact; the described current work is restoring approved operation.",
    "short_explanation_en": "Rebuilding, validating and returning service to use address safe restoration after the malicious cause was removed.",
    "question_th": "ทีมตอบสนองกำจัด Backdoor และแก้ช่องทางเข้าแล้ว ขณะนี้สร้างบริการใหม่จาก Clean image ตรวจยืนยัน และคืนให้ใช้งานตามที่อนุมัติ กิจกรรมปัจจุบันมีเป้าหมายหลักใด?",
    "options_th": [
      "Recovery เพื่อคืนการทำงานของบริการอย่างปลอดภัย",
      "Post-incident review เพื่อทบทวนผลการตอบสนอง",
      "Eradication เพื่อกำจัด Backdoor ที่ระบุ",
      "Containment เพื่อจำกัดการแพร่เริ่มต้น"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การสร้างใหม่ ตรวจผล และคืนบริการมุ่งฟื้นการทำงานอย่างปลอดภัยหลังนำสาเหตุอันตรายออกแล้ว\n- ข้อ B ไม่ถูกต้อง: Review ประเมินบทเรียนและสิ่งที่ควรปรับ ส่วนการสร้างใหม่และคืนบริการเป็นการฟื้นการทำงาน\n- ข้อ C ไม่ถูกต้อง: โจทย์ระบุว่ากำจัดและแก้ทางเข้าแล้ว ไม่ใช่งานคืนบริการที่กำลังทำ\n- ข้อ D ไม่ถูกต้อง: Containment จำกัดผลกระทบที่กำลังเกิด แต่งานปัจจุบันคือคืนการทำงานที่อนุมัติ",
    "explanation_detail": {
      "correct": {
        "en": "Rebuilding, validating and returning service to use address safe restoration after the malicious cause was removed.",
        "th": "การสร้างใหม่ ตรวจผล และคืนบริการมุ่งฟื้นการทำงานอย่างปลอดภัยหลังนำสาเหตุอันตรายออกแล้ว"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Review assesses lessons and improvements; rebuilding and returning service are operational restoration activities.",
          "text_th": "Review ประเมินบทเรียนและสิ่งที่ควรปรับ ส่วนการสร้างใหม่และคืนบริการเป็นการฟื้นการทำงาน"
        },
        {
          "letter": "C",
          "text_en": "The stem says removal and entry-path correction are already completed, rather than the current restoration task.",
          "text_th": "โจทย์ระบุว่ากำจัดและแก้ทางเข้าแล้ว ไม่ใช่งานคืนบริการที่กำลังทำ"
        },
        {
          "letter": "D",
          "text_en": "Containment limits ongoing impact; the described current work is restoring approved operation.",
          "text_th": "Containment จำกัดผลกระทบที่กำลังเกิด แต่งานปัจจุบันคือคืนการทำงานที่อนุมัติ"
        }
      ]
    }
  },
  {
    "id": 1026,
    "dom": 5,
    "question": "A tabletop reveals uncertainty about whether the on-call team can use the isolation tool. A controlled exercise is authorized on a lab endpoint. Which result would demonstrate the missing technical capability rather than repeat the discussion?",
    "options": [
      "The on-call team operates the tool and confirms the lab endpoint is isolated",
      "The team confirms that the tool appears in the endpoint software inventory",
      "The incident lead signs the written isolation procedure",
      "The team explains which isolation button it would select"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Performing and verifying the authorized action provides functional evidence of the team’s tool capability. Option B is incorrect: Installed software does not demonstrate that the on-call team can operate it successfully. Option C is incorrect: Approval of a procedure does not demonstrate that the on-call team can execute it successfully. Option D is incorrect: Describing an intended action still tests discussion rather than actual use of the tool.",
    "short_explanation_en": "Performing and verifying the authorized action provides functional evidence of the team’s tool capability.",
    "question_th": "Tabletop พบว่ายังไม่แน่ใจว่าทีม On-call ใช้เครื่องมือแยกเครื่องได้หรือไม่ จึงอนุมัติแบบฝึกที่ควบคุมบน Lab endpoint ผลใดแสดงความสามารถทางเทคนิคที่ขาด แทนที่จะอภิปรายซ้ำ?",
    "options_th": [
      "ทีม On-call สั่งเครื่องมือและตรวจยืนยันว่า Lab endpoint ถูกแยกแล้ว",
      "ทีมยืนยันว่ามีเครื่องมือในบัญชีซอฟต์แวร์ของเครื่องปลายทาง",
      "Incident lead ลงนามในขั้นตอนแยกเครื่องที่เขียนไว้",
      "ทีมอธิบายว่าจะเลือกปุ่มแยกเครื่องปุ่มใด"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การลงมือและตรวจผลการกระทำที่อนุมัติให้หลักฐานเชิงหน้าที่ว่าทีมใช้เครื่องมือได้\n- ข้อ B ไม่ถูกต้อง: การติดตั้งซอฟต์แวร์ไม่ได้แสดงว่าทีมเวรใช้เครื่องมือนั้นได้สำเร็จ\n- ข้อ C ไม่ถูกต้อง: การอนุมัติขั้นตอนไม่ได้แสดงว่าทีม On-call ปฏิบัติได้สำเร็จ\n- ข้อ D ไม่ถูกต้อง: การอธิบายสิ่งที่จะทำยังทดสอบการอภิปราย ไม่ใช่การใช้เครื่องมือจริง",
    "explanation_detail": {
      "correct": {
        "en": "Performing and verifying the authorized action provides functional evidence of the team’s tool capability.",
        "th": "การลงมือและตรวจผลการกระทำที่อนุมัติให้หลักฐานเชิงหน้าที่ว่าทีมใช้เครื่องมือได้"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Installed software does not demonstrate that the on-call team can operate it successfully.",
          "text_th": "การติดตั้งซอฟต์แวร์ไม่ได้แสดงว่าทีมเวรใช้เครื่องมือนั้นได้สำเร็จ"
        },
        {
          "letter": "C",
          "text_en": "Approval of a procedure does not demonstrate that the on-call team can execute it successfully.",
          "text_th": "การอนุมัติขั้นตอนไม่ได้แสดงว่าทีม On-call ปฏิบัติได้สำเร็จ"
        },
        {
          "letter": "D",
          "text_en": "Describing an intended action still tests discussion rather than actual use of the tool.",
          "text_th": "การอธิบายสิ่งที่จะทำยังทดสอบการอภิปราย ไม่ใช่การใช้เครื่องมือจริง"
        }
      ]
    }
  },
  {
    "id": 1027,
    "dom": 5,
    "question": "A laptop is being retired. Its owner and serial number are recorded, but the storage still contains company data. The disposal procedure requires verified sanitization before transfer. What should the asset team do before marking the transfer complete?",
    "options": [
      "Complete and record the required sanitization before releasing the laptop",
      "Remove the laptop from inventory because its owner is already recorded",
      "Label the laptop Retired and transfer it with its current storage",
      "Disable the former owner’s login and record the transfer as complete"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Lifecycle closure must include the required data-handling exit condition, not only an inventory record. Option B is incorrect: Removing the record does not satisfy the outstanding sanitization condition before transfer. Option C is incorrect: A retirement label identifies status but does not prevent recovery of the company data. Option D is incorrect: Disabling an account does not sanitize data remaining on the transferred storage.",
    "short_explanation_en": "Lifecycle closure must include the required data-handling exit condition, not only an inventory record.",
    "question_th": "กำลังปลดระวาง Laptop ซึ่งบันทึกเจ้าของและ Serial number แล้ว แต่สื่อยังมีข้อมูลบริษัท ขั้นตอนกำจัดกำหนดให้ Sanitization ที่ตรวจผลแล้วก่อนส่งต่อ ทีมทรัพย์สินควรทำอะไรก่อนระบุว่าส่งต่อเสร็จ?",
    "options_th": [
      "ทำ Sanitization ตามข้อกำหนดและบันทึกผลก่อนส่งมอบ Laptop",
      "ลบ Laptop จาก Inventory เพราะบันทึกเจ้าของไว้แล้ว",
      "ติดป้าย Retired แล้วส่งต่อพร้อมสื่อในสภาพปัจจุบัน",
      "ปิด Login ของเจ้าของเดิมแล้วระบุว่าการส่งต่อเสร็จแล้ว"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การปิดวงจรทรัพย์สินต้องรวมเงื่อนไขจัดการข้อมูลก่อนออก ไม่ใช่เพียงบันทึก Inventory\n- ข้อ B ไม่ถูกต้อง: การลบรายการไม่ได้ทำให้ผ่านเงื่อนไข Sanitization ที่ยังไม่เสร็จก่อนส่งต่อ\n- ข้อ C ไม่ถูกต้อง: ป้ายปลดระวางบอกสถานะ แต่ไม่ป้องกันการกู้ข้อมูลบริษัท\n- ข้อ D ไม่ถูกต้อง: การปิดบัญชีไม่ได้ Sanitization ข้อมูลที่ยังเหลือบนสื่อที่ส่งต่อ",
    "explanation_detail": {
      "correct": {
        "en": "Lifecycle closure must include the required data-handling exit condition, not only an inventory record.",
        "th": "การปิดวงจรทรัพย์สินต้องรวมเงื่อนไขจัดการข้อมูลก่อนออก ไม่ใช่เพียงบันทึก Inventory"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Removing the record does not satisfy the outstanding sanitization condition before transfer.",
          "text_th": "การลบรายการไม่ได้ทำให้ผ่านเงื่อนไข Sanitization ที่ยังไม่เสร็จก่อนส่งต่อ"
        },
        {
          "letter": "C",
          "text_en": "A retirement label identifies status but does not prevent recovery of the company data.",
          "text_th": "ป้ายปลดระวางบอกสถานะ แต่ไม่ป้องกันการกู้ข้อมูลบริษัท"
        },
        {
          "letter": "D",
          "text_en": "Disabling an account does not sanitize data remaining on the transferred storage.",
          "text_th": "การปิดบัญชีไม่ได้ Sanitization ข้อมูลที่ยังเหลือบนสื่อที่ส่งต่อ"
        }
      ]
    }
  },
  {
    "id": 1028,
    "dom": 5,
    "question": "A vendor states that a server platform will receive no further security fixes after its support date. The server still runs its application normally. Which security conclusion is supported?",
    "options": [
      "Application compatibility confirms that security updates will continue",
      "New vulnerabilities may remain without vendor fixes despite continued operation",
      "The absence of current outages shows that lifecycle risk is negligible",
      "The vendor statement proves that the server is already compromised"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Functional availability and ongoing vendor remediation are different properties; continued operation does not establish patch support. Option A is incorrect: Application function does not override the vendor’s explicit end-of-fixes statement. Option C is incorrect: Current uptime does not address future vulnerabilities that the vendor will not fix. Option D is incorrect: Loss of support increases exposure but is not evidence that exploitation has occurred.",
    "short_explanation_en": "Functional availability and ongoing vendor remediation are different properties; continued operation does not establish patch support.",
    "question_th": "ผู้ผลิตระบุว่าจะไม่มี Security fixes สำหรับแพลตฟอร์ม Server หลังวันสิ้นสุด Support แม้ Server ยังรันแอปตามปกติ ข้อสรุปด้านความปลอดภัยใดมีหลักฐานรองรับ?",
    "options_th": [
      "แอปยังเข้ากันได้จึงยืนยันว่าจะมี Security updates ต่อ",
      "ช่องโหว่ใหม่อาจไม่มี Fix จากผู้ผลิตแม้ระบบยังทำงานได้",
      "การไม่เกิด Outage ตอนนี้แสดงว่าความเสี่ยงวงจรชีวิตต่ำมาก",
      "คำประกาศผู้ผลิตพิสูจน์ว่า Server ถูกยึดครองแล้ว"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ความสามารถทำงานกับการแก้ไขจากผู้ผลิตเป็นคนละเรื่อง การยังทำงานไม่ได้ยืนยันการสนับสนุน Patch\n- ข้อ A ไม่ถูกต้อง: การทำงานของแอปไม่เปลี่ยนคำประกาศชัดเจนของผู้ผลิตว่าจะหยุด Fix\n- ข้อ C ไม่ถูกต้อง: การทำงานต่อเนื่องปัจจุบันไม่จัดการช่องโหว่ในอนาคตที่ผู้ผลิตไม่แก้\n- ข้อ D ไม่ถูกต้อง: การไม่มี Support เพิ่มความเสี่ยง แต่ไม่ใช่หลักฐานว่าเกิด Exploitation แล้ว",
    "explanation_detail": {
      "correct": {
        "en": "Functional availability and ongoing vendor remediation are different properties; continued operation does not establish patch support.",
        "th": "ความสามารถทำงานกับการแก้ไขจากผู้ผลิตเป็นคนละเรื่อง การยังทำงานไม่ได้ยืนยันการสนับสนุน Patch"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Application function does not override the vendor’s explicit end-of-fixes statement.",
          "text_th": "การทำงานของแอปไม่เปลี่ยนคำประกาศชัดเจนของผู้ผลิตว่าจะหยุด Fix"
        },
        {
          "letter": "C",
          "text_en": "Current uptime does not address future vulnerabilities that the vendor will not fix.",
          "text_th": "การทำงานต่อเนื่องปัจจุบันไม่จัดการช่องโหว่ในอนาคตที่ผู้ผลิตไม่แก้"
        },
        {
          "letter": "D",
          "text_en": "Loss of support increases exposure but is not evidence that exploitation has occurred.",
          "text_th": "การไม่มี Support เพิ่มความเสี่ยง แต่ไม่ใช่หลักฐานว่าเกิด Exploitation แล้ว"
        }
      ]
    }
  },
  {
    "id": 1029,
    "dom": 5,
    "question": "An unsupported service cannot be replaced this month. It must remain reachable only by two named application servers. The team needs interim exposure reduction while an approved migration proceeds. Which plan BEST meets these constraints?",
    "options": [
      "Retain current connectivity and increase backup frequency",
      "Keep broad connectivity and rely on reviewing alerts each morning",
      "Permit only the required server paths, monitor activity, and track migration",
      "Move the service to another segment without changing access rules"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Restricted connectivity reduces exposure while maintaining the required service and an accountable path to replacement. Option A is incorrect: More backups can support recovery, but do not restrict exposure to the two permitted servers. Option B is incorrect: Monitoring alone leaves the unnecessary access paths available despite the stated restriction. Option D is incorrect: A different segment alone does not enforce the named-server restriction without effective access controls.",
    "short_explanation_en": "Restricted connectivity reduces exposure while maintaining the required service and an accountable path to replacement.",
    "question_th": "บริการที่หมด Support ยังเปลี่ยนไม่ได้ในเดือนนี้ และต้องเข้าถึงได้เฉพาะ Application server สองเครื่องที่ระบุ ทีมต้องลด Exposure ระหว่างดำเนินแผนย้ายที่อนุมัติ แผนใดเหมาะสมที่สุด?",
    "options_th": [
      "คงการเชื่อมต่อเดิมและเพิ่มความถี่ Backup",
      "คงการเชื่อมต่อกว้างแล้วอาศัยทบทวน Alert ทุกเช้า",
      "อนุญาตเฉพาะเส้นทางจาก Server ที่จำเป็น เฝ้าติดตาม และติดตามแผนย้าย",
      "ย้ายบริการไปอีก Segment โดยไม่เปลี่ยน Access rules"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การจำกัดการเชื่อมต่อลด Exposure โดยยังให้บริการที่จำเป็นและมีแผนทดแทนที่ติดตามได้\n- ข้อ A ไม่ถูกต้อง: Backup เพิ่มช่วย Recovery แต่ไม่ได้จำกัด Exposure ให้เหลือ Server สองเครื่องตามข้อกำหนด\n- ข้อ B ไม่ถูกต้อง: Monitoring อย่างเดียวยังเปิดทางเข้าที่ไม่จำเป็นทั้งที่ระบุให้จำกัดไว้\n- ข้อ D ไม่ถูกต้อง: การอยู่คนละ Segment อย่างเดียวไม่บังคับข้อจำกัด Server ที่ระบุหากไม่มี Access control ที่มีผล",
    "explanation_detail": {
      "correct": {
        "en": "Restricted connectivity reduces exposure while maintaining the required service and an accountable path to replacement.",
        "th": "การจำกัดการเชื่อมต่อลด Exposure โดยยังให้บริการที่จำเป็นและมีแผนทดแทนที่ติดตามได้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "More backups can support recovery, but do not restrict exposure to the two permitted servers.",
          "text_th": "Backup เพิ่มช่วย Recovery แต่ไม่ได้จำกัด Exposure ให้เหลือ Server สองเครื่องตามข้อกำหนด"
        },
        {
          "letter": "B",
          "text_en": "Monitoring alone leaves the unnecessary access paths available despite the stated restriction.",
          "text_th": "Monitoring อย่างเดียวยังเปิดทางเข้าที่ไม่จำเป็นทั้งที่ระบุให้จำกัดไว้"
        },
        {
          "letter": "D",
          "text_en": "A different segment alone does not enforce the named-server restriction without effective access controls.",
          "text_th": "การอยู่คนละ Segment อย่างเดียวไม่บังคับข้อจำกัด Server ที่ระบุหากไม่มี Access control ที่มีผล"
        }
      ]
    }
  },
  {
    "id": 1030,
    "dom": 5,
    "question": "A configuration audit finds a server setting differs from the standard baseline. The change register contains a current, approved exception for that exact server and setting. What is the BEST interpretation?",
    "options": [
      "Remove the server from future configuration audits",
      "Treat every baseline difference as an unauthorized change",
      "Replace the organization-wide baseline with this server’s setting",
      "Assess the setting against the approved exception as well as the baseline"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The exception is relevant authorization evidence; difference from the standard alone does not establish an unauthorized change. Option A is incorrect: An exception defines what to assess; it does not remove the need to monitor the approved state. Option B is incorrect: This ignores the explicitly current and applicable approved exception. Option C is incorrect: A server-specific exception does not authorize changing the baseline for all systems.",
    "short_explanation_en": "The exception is relevant authorization evidence; difference from the standard alone does not establish an unauthorized change.",
    "question_th": "Configuration audit พบค่าตั้ง Server ต่างจาก Baseline ปกติ แต่ Change register มีข้อยกเว้นที่อนุมัติและยังมีผลสำหรับ Server และค่านั้นพอดี ควรตีความอย่างไรจึงเหมาะสมที่สุด?",
    "options_th": [
      "นำ Server ออกจากการตรวจ Configuration ในอนาคต",
      "ถือว่าความต่างจาก Baseline ทุกกรณีเป็นการเปลี่ยนที่ไม่มีสิทธิ์",
      "แทน Baseline ทั้งองค์กรด้วยค่าตั้งของ Server นี้",
      "ประเมินค่าตั้งเทียบข้อยกเว้นที่อนุมัติร่วมกับ Baseline"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ข้อยกเว้นเป็นหลักฐานการอนุมัติที่เกี่ยวข้อง ความต่างจากมาตรฐานอย่างเดียวไม่ยืนยันว่าเปลี่ยนโดยไม่มีสิทธิ์\n- ข้อ A ไม่ถูกต้อง: ข้อยกเว้นกำหนดสิ่งที่ต้องประเมิน ไม่ได้ยกเลิกความจำเป็นในการติดตามสถานะที่อนุมัติ\n- ข้อ B ไม่ถูกต้อง: ข้อนี้ละเลยข้อยกเว้นที่อนุมัติซึ่งโจทย์ระบุว่ายังใช้ได้และตรงกรณี\n- ข้อ C ไม่ถูกต้อง: ข้อยกเว้นเฉพาะ Server ไม่ได้อนุญาตให้เปลี่ยน Baseline สำหรับทุกระบบ",
    "explanation_detail": {
      "correct": {
        "en": "The exception is relevant authorization evidence; difference from the standard alone does not establish an unauthorized change.",
        "th": "ข้อยกเว้นเป็นหลักฐานการอนุมัติที่เกี่ยวข้อง ความต่างจากมาตรฐานอย่างเดียวไม่ยืนยันว่าเปลี่ยนโดยไม่มีสิทธิ์"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "An exception defines what to assess; it does not remove the need to monitor the approved state.",
          "text_th": "ข้อยกเว้นกำหนดสิ่งที่ต้องประเมิน ไม่ได้ยกเลิกความจำเป็นในการติดตามสถานะที่อนุมัติ"
        },
        {
          "letter": "B",
          "text_en": "This ignores the explicitly current and applicable approved exception.",
          "text_th": "ข้อนี้ละเลยข้อยกเว้นที่อนุมัติซึ่งโจทย์ระบุว่ายังใช้ได้และตรงกรณี"
        },
        {
          "letter": "C",
          "text_en": "A server-specific exception does not authorize changing the baseline for all systems.",
          "text_th": "ข้อยกเว้นเฉพาะ Server ไม่ได้อนุญาตให้เปลี่ยน Baseline สำหรับทุกระบบ"
        }
      ]
    }
  },
  {
    "id": 1031,
    "dom": 5,
    "question": "A patch deployment tool reports success. The change record also requires confirming the installed version and testing the application’s critical transaction. Which verification satisfies the record?",
    "options": [
      "Accept the deployment tool’s success message as complete verification",
      "Check the installed version and execute the defined transaction test",
      "Check the new version and omit the application test",
      "Run the transaction test and leave the installed version unconfirmed"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. This verifies both the intended installation and the required application behavior rather than relying on tool status alone. Option A is incorrect: The record explicitly requires version and application checks beyond the deployment message. Option C is incorrect: A version check does not satisfy the separate critical-transaction requirement. Option D is incorrect: Application function alone does not establish that the intended patch version was installed.",
    "short_explanation_en": "This verifies both the intended installation and the required application behavior rather than relying on tool status alone.",
    "question_th": "เครื่องมือ Deploy patch รายงานว่าสำเร็จ แต่ Change record กำหนดให้ยืนยันเวอร์ชันที่ติดตั้งและทดสอบธุรกรรมสำคัญของแอปด้วย การตรวจใดตรงข้อกำหนด?",
    "options_th": [
      "ถือข้อความสำเร็จของเครื่องมือเป็นการตรวจครบแล้ว",
      "ตรวจเวอร์ชันที่ติดตั้งและรันการทดสอบธุรกรรมที่กำหนด",
      "ตรวจเวอร์ชันใหม่แล้วไม่ต้องทดสอบแอป",
      "ทดสอบธุรกรรมโดยไม่ยืนยันเวอร์ชันที่ติดตั้ง"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การตรวจนี้ยืนยันทั้งการติดตั้งที่ต้องการและพฤติกรรมแอปตามข้อกำหนด แทนการเชื่อสถานะเครื่องมืออย่างเดียว\n- ข้อ A ไม่ถูกต้อง: บันทึกกำหนดชัดว่าต้องตรวจเวอร์ชันและแอปเพิ่มเติมจากข้อความ Deploy\n- ข้อ C ไม่ถูกต้อง: การตรวจเวอร์ชันไม่ทำให้ผ่านข้อกำหนดทดสอบธุรกรรมสำคัญที่แยกต่างหาก\n- ข้อ D ไม่ถูกต้อง: แอปทำงานได้อย่างเดียวไม่ได้ยืนยันว่าติดตั้ง Patch เวอร์ชันที่ต้องการ",
    "explanation_detail": {
      "correct": {
        "en": "This verifies both the intended installation and the required application behavior rather than relying on tool status alone.",
        "th": "การตรวจนี้ยืนยันทั้งการติดตั้งที่ต้องการและพฤติกรรมแอปตามข้อกำหนด แทนการเชื่อสถานะเครื่องมืออย่างเดียว"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The record explicitly requires version and application checks beyond the deployment message.",
          "text_th": "บันทึกกำหนดชัดว่าต้องตรวจเวอร์ชันและแอปเพิ่มเติมจากข้อความ Deploy"
        },
        {
          "letter": "C",
          "text_en": "A version check does not satisfy the separate critical-transaction requirement.",
          "text_th": "การตรวจเวอร์ชันไม่ทำให้ผ่านข้อกำหนดทดสอบธุรกรรมสำคัญที่แยกต่างหาก"
        },
        {
          "letter": "D",
          "text_en": "Application function alone does not establish that the intended patch version was installed.",
          "text_th": "แอปทำงานได้อย่างเดียวไม่ได้ยืนยันว่าติดตั้ง Patch เวอร์ชันที่ต้องการ"
        }
      ]
    }
  },
  {
    "id": 1032,
    "dom": 5,
    "question": "An approved maintenance change fails its required health check. The change plan requires the documented rollback when that health check fails. Which next action BEST follows the plan?",
    "options": [
      "Execute the documented rollback and verify the restored service",
      "Troubleshoot the failed change in place before starting the documented rollback",
      "Request a second approval before using the documented rollback",
      "Keep the change active and defer the health check to the next review"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The failure condition activates the already authorized rollback path; verifying restoration checks the result. Option B is incorrect: In-place troubleshooting delays the authorized response to the failed health check specified in this plan. Option C is incorrect: The stated plan already authorizes this rollback for the observed result; no additional approval requirement is given. Option D is incorrect: The check has already failed and the plan defines what to do for that result.",
    "short_explanation_en": "The failure condition activates the already authorized rollback path; verifying restoration checks the result.",
    "question_th": "การเปลี่ยนแปลงระบบที่อนุมัติไม่ผ่านการตรวจสุขภาพที่กำหนด แผนการเปลี่ยนแปลงกำหนดให้ย้อนกลับตามเอกสารเมื่อการตรวจนี้ล้มเหลว การกระทำถัดไปใดสอดคล้องกับแผนมากที่สุด?",
    "options_th": [
      "ทำ Rollback ที่ระบุและตรวจบริการหลังคืนสภาพ",
      "แก้ปัญหาการเปลี่ยนแปลงที่ล้มเหลวก่อนเริ่มย้อนกลับตามเอกสาร",
      "ขออนุมัติครั้งที่สองก่อนย้อนกลับตามเอกสาร",
      "คง Change ไว้แล้วเลื่อน Health check ไปการทบทวนครั้งหน้า"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: เงื่อนไขล้มเหลวทำให้ใช้เส้นทาง Rollback ที่อนุมัติไว้แล้ว การตรวจบริการยืนยันผลการคืนสภาพ\n- ข้อ B ไม่ถูกต้อง: การแก้ปัญหาในระบบที่เปลี่ยนแล้วทำให้การตอบสนองที่อนุมัติไว้สำหรับผลตรวจล้มเหลวล่าช้า\n- ข้อ C ไม่ถูกต้อง: แผนที่ระบุอนุมัติการย้อนกลับสำหรับผลนี้แล้ว ไม่มีเงื่อนไขให้ขออนุมัติเพิ่ม\n- ข้อ D ไม่ถูกต้อง: Health check ล้มเหลวแล้ว และแผนกำหนดสิ่งที่ต้องทำสำหรับผลนี้",
    "explanation_detail": {
      "correct": {
        "en": "The failure condition activates the already authorized rollback path; verifying restoration checks the result.",
        "th": "เงื่อนไขล้มเหลวทำให้ใช้เส้นทาง Rollback ที่อนุมัติไว้แล้ว การตรวจบริการยืนยันผลการคืนสภาพ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "In-place troubleshooting delays the authorized response to the failed health check specified in this plan.",
          "text_th": "การแก้ปัญหาในระบบที่เปลี่ยนแล้วทำให้การตอบสนองที่อนุมัติไว้สำหรับผลตรวจล้มเหลวล่าช้า"
        },
        {
          "letter": "C",
          "text_en": "The stated plan already authorizes this rollback for the observed result; no additional approval requirement is given.",
          "text_th": "แผนที่ระบุอนุมัติการย้อนกลับสำหรับผลนี้แล้ว ไม่มีเงื่อนไขให้ขออนุมัติเพิ่ม"
        },
        {
          "letter": "D",
          "text_en": "The check has already failed and the plan defines what to do for that result.",
          "text_th": "Health check ล้มเหลวแล้ว และแผนกำหนดสิ่งที่ต้องทำสำหรับผลนี้"
        }
      ]
    }
  },
  {
    "id": 1033,
    "dom": 5,
    "question": "During an authorized readiness exercise, attackers explain their simulated steps to defenders. Both groups examine missed detections, improve rules, and repeat the test. Which approach does this illustrate?",
    "options": [
      "A purple-team approach",
      "An independent red-team assessment without defender collaboration",
      "A tabletop that discusses how proposed attacks might be detected",
      "A blue-team review of detections using stored attack records"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The defining feature is collaborative attack-and-defense improvement with feedback and retesting. Option B is incorrect: That description omits the deliberate joint analysis and improvement stated in the exercise. Option C is incorrect: A discussion can consider detection, but this exercise executes simulations, changes rules and retests their effect. Option D is incorrect: A defensive record review does not capture the active attacker-defender collaboration and repeated simulations described.",
    "short_explanation_en": "The defining feature is collaborative attack-and-defense improvement with feedback and retesting.",
    "question_th": "ใน Readiness exercise ที่อนุมัติ ฝ่ายจำลองผู้โจมตีอธิบายขั้นตอนแก่ฝ่ายป้องกัน ทั้งสองร่วมตรวจจุดที่ตรวจจับพลาด ปรับกฎ และทดสอบซ้ำ เป็นแนวทางใด?",
    "options_th": [
      "แนวทาง Purple teaming",
      "การประเมิน Red team อิสระโดยไม่ร่วมกับฝ่ายป้องกัน",
      "Tabletop ที่อภิปรายว่าจะตรวจพบการโจมตีที่เสนอได้อย่างไร",
      "การทบทวนการตรวจจับของ Blue team โดยใช้บันทึกการโจมตีที่จัดเก็บ"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: จุดสำคัญคือร่วมปรับปรุงระหว่างฝ่ายโจมตีและป้องกันโดยมี Feedback และทดสอบซ้ำ\n- ข้อ B ไม่ถูกต้อง: คำอธิบายนี้ขาดการวิเคราะห์และปรับปรุงร่วมกันที่โจทย์ระบุ\n- ข้อ C ไม่ถูกต้อง: การอภิปรายพิจารณาการตรวจจับได้ แต่โจทย์ดำเนินการจำลอง ปรับกฎ และทดสอบผลซ้ำ\n- ข้อ D ไม่ถูกต้อง: การทบทวนบันทึกฝ่ายป้องกันไม่ครอบคลุมความร่วมมือของฝ่ายโจมตีและป้องกัน รวมถึงการจำลองซ้ำตามโจทย์",
    "explanation_detail": {
      "correct": {
        "en": "The defining feature is collaborative attack-and-defense improvement with feedback and retesting.",
        "th": "จุดสำคัญคือร่วมปรับปรุงระหว่างฝ่ายโจมตีและป้องกันโดยมี Feedback และทดสอบซ้ำ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "That description omits the deliberate joint analysis and improvement stated in the exercise.",
          "text_th": "คำอธิบายนี้ขาดการวิเคราะห์และปรับปรุงร่วมกันที่โจทย์ระบุ"
        },
        {
          "letter": "C",
          "text_en": "A discussion can consider detection, but this exercise executes simulations, changes rules and retests their effect.",
          "text_th": "การอภิปรายพิจารณาการตรวจจับได้ แต่โจทย์ดำเนินการจำลอง ปรับกฎ และทดสอบผลซ้ำ"
        },
        {
          "letter": "D",
          "text_en": "A defensive record review does not capture the active attacker-defender collaboration and repeated simulations described.",
          "text_th": "การทบทวนบันทึกฝ่ายป้องกันไม่ครอบคลุมความร่วมมือของฝ่ายโจมตีและป้องกัน รวมถึงการจำลองซ้ำตามโจทย์"
        }
      ]
    }
  },
  {
    "id": 1034,
    "dom": 5,
    "question": "A controlled attack simulation produces the expected endpoint records, but those records never reach the SIEM. The purple-team goal is to close this detection gap and demonstrate improvement. What should the teams do?",
    "options": [
      "Document the attack steps and finish the exercise without retesting",
      "Lower an existing alert threshold without checking record delivery",
      "Repair record forwarding and repeat the simulation to verify detection",
      "Repeat the same simulation before correcting record forwarding"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The observed failure is missing telemetry at the SIEM; repair plus retest addresses and validates that gap. Option A is incorrect: Documentation is useful but does not establish that the detection gap was corrected. Option B is incorrect: A rule cannot evaluate missing records merely because its threshold is lower. Option D is incorrect: Repeating without addressing the established delivery failure does not demonstrate improved detection.",
    "short_explanation_en": "The observed failure is missing telemetry at the SIEM; repair plus retest addresses and validates that gap.",
    "question_th": "การจำลองโจมตีที่ควบคุมสร้าง Endpoint records ได้ตามคาด แต่บันทึกไม่เข้า SIEM เป้าหมาย Purple team คือปิดช่องว่างตรวจจับและแสดงว่าดีขึ้น ทีมควรทำอะไร?",
    "options_th": [
      "บันทึกขั้นตอนโจมตีแล้วจบแบบฝึกโดยไม่ทดสอบซ้ำ",
      "ลดเกณฑ์ Alert เดิมโดยไม่ตรวจการส่งบันทึก",
      "แก้การส่งบันทึกแล้วจำลองซ้ำเพื่อตรวจยืนยันการตรวจจับ",
      "จำลองแบบเดิมซ้ำก่อนแก้การส่งบันทึก"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: สิ่งที่พบคือ Telemetry ไม่ถึง SIEM การแก้และทดสอบซ้ำจึงจัดการและยืนยันช่องว่างนี้\n- ข้อ A ไม่ถูกต้อง: เอกสารมีประโยชน์ แต่ยังไม่พิสูจน์ว่าแก้ช่องว่างตรวจจับแล้ว\n- ข้อ B ไม่ถูกต้อง: กฎไม่สามารถประเมินบันทึกที่ไม่มาถึงเพียงเพราะลด Threshold\n- ข้อ D ไม่ถูกต้อง: การทำซ้ำโดยไม่แก้การส่งที่ยืนยันว่าล้มเหลวไม่ได้แสดงว่าตรวจจับดีขึ้น",
    "explanation_detail": {
      "correct": {
        "en": "The observed failure is missing telemetry at the SIEM; repair plus retest addresses and validates that gap.",
        "th": "สิ่งที่พบคือ Telemetry ไม่ถึง SIEM การแก้และทดสอบซ้ำจึงจัดการและยืนยันช่องว่างนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Documentation is useful but does not establish that the detection gap was corrected.",
          "text_th": "เอกสารมีประโยชน์ แต่ยังไม่พิสูจน์ว่าแก้ช่องว่างตรวจจับแล้ว"
        },
        {
          "letter": "B",
          "text_en": "A rule cannot evaluate missing records merely because its threshold is lower.",
          "text_th": "กฎไม่สามารถประเมินบันทึกที่ไม่มาถึงเพียงเพราะลด Threshold"
        },
        {
          "letter": "D",
          "text_en": "Repeating without addressing the established delivery failure does not demonstrate improved detection.",
          "text_th": "การทำซ้ำโดยไม่แก้การส่งที่ยืนยันว่าล้มเหลวไม่ได้แสดงว่าตรวจจับดีขึ้น"
        }
      ]
    }
  },
  {
    "id": 1035,
    "dom": 5,
    "question": "A scheduled scan finds no known-version vulnerabilities in the web servers it checked. The scan did not test application workflows or authenticated business functions. Which statement accurately describes the result?",
    "options": [
      "The result establishes that authenticated functions have no security flaws",
      "The result supports postponing authenticated testing until a version vulnerability is found",
      "The result is limited to the checks performed and does not establish workflow security",
      "The result proves that the application design resists all relevant threats"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. A clean result within one scan’s scope is not evidence that untested application behavior is secure. Option A is incorrect: Those functions were explicitly outside the performed checks. Option B is incorrect: The scan has not assessed those functions, so its clean result supplies no evidence for postponing their assessment. Option D is incorrect: Known-version scanning does not comprehensively evaluate design threats or application logic.",
    "short_explanation_en": "A clean result within one scan’s scope is not evidence that untested application behavior is secure.",
    "question_th": "Scan ตามรอบไม่พบช่องโหว่จากเวอร์ชันที่รู้จักใน Web server ที่ตรวจ โดยไม่ได้ทดสอบ Workflow หรือฟังก์ชันธุรกิจที่ต้อง Login ข้อใดอธิบายผลได้ถูกต้อง?",
    "options_th": [
      "ผลยืนยันว่าฟังก์ชันที่ต้อง Login ไม่มีข้อบกพร่องความปลอดภัย",
      "ผลนี้สนับสนุนให้เลื่อนการทดสอบแบบยืนยันตัวตนจนกว่าจะพบช่องโหว่เวอร์ชัน",
      "ผลจำกัดตามสิ่งที่ตรวจ และไม่ได้ยืนยันความปลอดภัยของ Workflow",
      "ผลพิสูจน์ว่า Design ของแอปต้านภัยคุกคามที่เกี่ยวข้องทั้งหมด"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: ผลไม่พบปัญหาภายในขอบเขต Scan หนึ่งไม่ได้พิสูจน์ว่าพฤติกรรมแอปที่ไม่ทดสอบปลอดภัย\n- ข้อ A ไม่ถูกต้อง: ฟังก์ชันเหล่านั้นอยู่นอกสิ่งที่ตรวจตามที่โจทย์ระบุ\n- ข้อ B ไม่ถูกต้อง: การสแกนยังไม่ได้ประเมินฟังก์ชันเหล่านั้น ผลที่ไม่พบปัญหาจึงไม่ใช่หลักฐานให้เลื่อนการประเมิน\n- ข้อ D ไม่ถูกต้อง: การ Scan เวอร์ชันไม่ได้ประเมินภัยระดับ Design หรือ Logic แอปอย่างครบถ้วน",
    "explanation_detail": {
      "correct": {
        "en": "A clean result within one scan’s scope is not evidence that untested application behavior is secure.",
        "th": "ผลไม่พบปัญหาภายในขอบเขต Scan หนึ่งไม่ได้พิสูจน์ว่าพฤติกรรมแอปที่ไม่ทดสอบปลอดภัย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Those functions were explicitly outside the performed checks.",
          "text_th": "ฟังก์ชันเหล่านั้นอยู่นอกสิ่งที่ตรวจตามที่โจทย์ระบุ"
        },
        {
          "letter": "B",
          "text_en": "The scan has not assessed those functions, so its clean result supplies no evidence for postponing their assessment.",
          "text_th": "การสแกนยังไม่ได้ประเมินฟังก์ชันเหล่านั้น ผลที่ไม่พบปัญหาจึงไม่ใช่หลักฐานให้เลื่อนการประเมิน"
        },
        {
          "letter": "D",
          "text_en": "Known-version scanning does not comprehensively evaluate design threats or application logic.",
          "text_th": "การ Scan เวอร์ชันไม่ได้ประเมินภัยระดับ Design หรือ Logic แอปอย่างครบถ้วน"
        }
      ]
    }
  },
  {
    "id": 1036,
    "dom": 5,
    "question": "A team analyzes application source code and compiled artifacts without executing the application. Which testing description fits this activity?",
    "options": [
      "Static Application Security Testing (SAST)",
      "Vulnerability scanning of deployed service versions",
      "Threat modeling of application data flows",
      "Dynamic testing of application input responses"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Static analysis examines code artifacts without requiring the application to run. Option B is incorrect: Checking deployed versions differs from examining source or compiled code without execution. Option C is incorrect: Threat modeling assesses threats and design context rather than inspecting source/compiled code as this task describes. Option D is incorrect: Testing input responses requires executing behavior, whereas this task does not execute the application.",
    "short_explanation_en": "Static analysis examines code artifacts without requiring the application to run.",
    "question_th": "ทีมวิเคราะห์ Source code และ Compiled artifacts โดยไม่รันแอป คำอธิบายการทดสอบใดตรงกับกิจกรรมนี้?",
    "options_th": [
      "การทดสอบความปลอดภัยแอปแบบ Static (SAST)",
      "Vulnerability scanning เวอร์ชันบริการที่ Deploy แล้ว",
      "Threat modeling ของ Data flows ในแอป",
      "การทดสอบ Dynamic ต่อผลตอบสนองของ Input ในแอป"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Static analysis ตรวจ Code artifacts โดยไม่ต้องให้แอปทำงาน\n- ข้อ B ไม่ถูกต้อง: การตรวจเวอร์ชันที่ Deploy แล้วต่างจากวิเคราะห์ Source หรือ Compiled code โดยไม่รัน\n- ข้อ C ไม่ถูกต้อง: Threat modeling ประเมินภัยและบริบท Design แทนการตรวจ Source หรือ Compiled code ตามงานนี้\n- ข้อ D ไม่ถูกต้อง: การทดสอบผลตอบสนองของ Input ต้องให้พฤติกรรมทำงาน แต่งานนี้ไม่รันแอป",
    "explanation_detail": {
      "correct": {
        "en": "Static analysis examines code artifacts without requiring the application to run.",
        "th": "Static analysis ตรวจ Code artifacts โดยไม่ต้องให้แอปทำงาน"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Checking deployed versions differs from examining source or compiled code without execution.",
          "text_th": "การตรวจเวอร์ชันที่ Deploy แล้วต่างจากวิเคราะห์ Source หรือ Compiled code โดยไม่รัน"
        },
        {
          "letter": "C",
          "text_en": "Threat modeling assesses threats and design context rather than inspecting source/compiled code as this task describes.",
          "text_th": "Threat modeling ประเมินภัยและบริบท Design แทนการตรวจ Source หรือ Compiled code ตามงานนี้"
        },
        {
          "letter": "D",
          "text_en": "Testing input responses requires executing behavior, whereas this task does not execute the application.",
          "text_th": "การทดสอบผลตอบสนองของ Input ต้องให้พฤติกรรมทำงาน แต่งานนี้ไม่รันแอป"
        }
      ]
    }
  },
  {
    "id": 1037,
    "dom": 5,
    "question": "A tester must determine whether a deployed application still accepts a session token after logout. The application is available in an authorized test environment. Which activity MOST directly answers this question?",
    "options": [
      "Review a design diagram of the intended logout process",
      "Inspect source-code comments describing session expiration",
      "Interact with the running application using the token before and after logout",
      "Scan the server’s software-version inventory for known issues"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. This dynamic test observes the actual session behavior the requirement asks about. Option A is incorrect: A design description does not establish how the deployed application actually handles that token. Option B is incorrect: Comments state intent and cannot substitute for observing the running application’s result. Option D is incorrect: Version findings do not directly measure this application’s session invalidation behavior.",
    "short_explanation_en": "This dynamic test observes the actual session behavior the requirement asks about.",
    "question_th": "ผู้ทดสอบต้องตรวจว่าแอปที่ Deploy แล้วยังรับ Session token หลัง Logout หรือไม่ โดยมีแอปในสภาพแวดล้อมทดสอบที่อนุญาต กิจกรรมใดตอบคำถามได้ตรงที่สุด?",
    "options_th": [
      "ตรวจแผนภาพ Design ของกระบวนการ Logout ที่ตั้งใจไว้",
      "ตรวจ Comment ใน Source code ที่อธิบาย Session expiration",
      "โต้ตอบกับแอปที่ทำงานโดยใช้ Token ก่อนและหลัง Logout",
      "Scan รายการเวอร์ชันซอฟต์แวร์ของ Server เพื่อหาปัญหาที่รู้จัก"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: การทดสอบแบบ Dynamic นี้สังเกตพฤติกรรม Session จริงที่ข้อกำหนดต้องการทราบ\n- ข้อ A ไม่ถูกต้อง: คำอธิบาย Design ไม่ได้ยืนยันว่าแอปที่ Deploy จัดการ Token จริงอย่างไร\n- ข้อ B ไม่ถูกต้อง: Comment ระบุเจตนาและไม่แทนการสังเกตผลจากแอปที่ทำงานจริง\n- ข้อ D ไม่ถูกต้อง: ผลตรวจเวอร์ชันไม่ได้วัดพฤติกรรมยกเลิก Session ของแอปนี้โดยตรง",
    "explanation_detail": {
      "correct": {
        "en": "This dynamic test observes the actual session behavior the requirement asks about.",
        "th": "การทดสอบแบบ Dynamic นี้สังเกตพฤติกรรม Session จริงที่ข้อกำหนดต้องการทราบ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A design description does not establish how the deployed application actually handles that token.",
          "text_th": "คำอธิบาย Design ไม่ได้ยืนยันว่าแอปที่ Deploy จัดการ Token จริงอย่างไร"
        },
        {
          "letter": "B",
          "text_en": "Comments state intent and cannot substitute for observing the running application’s result.",
          "text_th": "Comment ระบุเจตนาและไม่แทนการสังเกตผลจากแอปที่ทำงานจริง"
        },
        {
          "letter": "D",
          "text_en": "Version findings do not directly measure this application’s session invalidation behavior.",
          "text_th": "ผลตรวจเวอร์ชันไม่ได้วัดพฤติกรรมยกเลิก Session ของแอปนี้โดยตรง"
        }
      ]
    }
  },
  {
    "id": 1038,
    "dom": 5,
    "question": "A design change will allow a new external partner to upload documents into an internal workflow. Before choosing additional controls, the team needs to identify new assets, trust boundaries and possible attack paths. Which activity is MOST appropriate?",
    "options": [
      "Run a version-only vulnerability scan of the unchanged servers",
      "Revisit the threat model for the changed workflow",
      "Repeat the previous penetration test against the existing internal interface",
      "Review the new partner’s security certification and accepted contract terms"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Threat modeling evaluates threats and mitigations in system context and should reflect changed assumptions and boundaries. Option A is incorrect: A version scan does not identify all new design-level paths introduced by the partner workflow. Option C is incorrect: Testing the previous interface does not first identify the new partner boundary and changed attack paths needed for control selection. Option D is incorrect: Supplier assurance can inform risk decisions, but it does not map assets, boundaries and attack paths in the changed workflow.",
    "short_explanation_en": "Threat modeling evaluates threats and mitigations in system context and should reflect changed assumptions and boundaries.",
    "question_th": "การเปลี่ยน Design จะให้คู่ค้าภายนอกรายใหม่ Upload เอกสารเข้ากระบวนงานภายใน ก่อนเลือกมาตรการเพิ่ม ทีมต้องระบุ Assets, Trust boundaries และเส้นทางโจมตีใหม่ กิจกรรมใดเหมาะสมที่สุด?",
    "options_th": [
      "Scan ช่องโหว่เฉพาะเวอร์ชันบน Server ที่ไม่เปลี่ยน",
      "ทบทวน Threat model ของ Workflow ที่เปลี่ยน",
      "ทดสอบเจาะระบบซ้ำที่อินเทอร์เฟซภายในเดิม",
      "ตรวจสอบใบรับรองความปลอดภัยและเงื่อนไขสัญญาที่ตกลงกับคู่ค้าใหม่"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Threat modeling ประเมินภัยและมาตรการในบริบทระบบ จึงต้องสะท้อนสมมติฐานและขอบเขตที่เปลี่ยน\n- ข้อ A ไม่ถูกต้อง: การ Scan เวอร์ชันไม่ได้ระบุเส้นทางระดับ Design ใหม่ทั้งหมดที่ Workflow คู่ค้านำเข้ามา\n- ข้อ C ไม่ถูกต้อง: การทดสอบอินเทอร์เฟซเดิมไม่ได้เริ่มจากระบุขอบเขตคู่ค้าใหม่และเส้นทางโจมตีที่เปลี่ยนสำหรับเลือกมาตรการ\n- ข้อ D ไม่ถูกต้อง: การประเมินคู่ค้าช่วยตัดสินความเสี่ยงได้ แต่ไม่ได้วิเคราะห์ทรัพย์สิน ขอบเขต และเส้นทางโจมตีในงานที่เปลี่ยน",
    "explanation_detail": {
      "correct": {
        "en": "Threat modeling evaluates threats and mitigations in system context and should reflect changed assumptions and boundaries.",
        "th": "Threat modeling ประเมินภัยและมาตรการในบริบทระบบ จึงต้องสะท้อนสมมติฐานและขอบเขตที่เปลี่ยน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A version scan does not identify all new design-level paths introduced by the partner workflow.",
          "text_th": "การ Scan เวอร์ชันไม่ได้ระบุเส้นทางระดับ Design ใหม่ทั้งหมดที่ Workflow คู่ค้านำเข้ามา"
        },
        {
          "letter": "C",
          "text_en": "Testing the previous interface does not first identify the new partner boundary and changed attack paths needed for control selection.",
          "text_th": "การทดสอบอินเทอร์เฟซเดิมไม่ได้เริ่มจากระบุขอบเขตคู่ค้าใหม่และเส้นทางโจมตีที่เปลี่ยนสำหรับเลือกมาตรการ"
        },
        {
          "letter": "D",
          "text_en": "Supplier assurance can inform risk decisions, but it does not map assets, boundaries and attack paths in the changed workflow.",
          "text_th": "การประเมินคู่ค้าช่วยตัดสินความเสี่ยงได้ แต่ไม่ได้วิเคราะห์ทรัพย์สิน ขอบเขต และเส้นทางโจมตีในงานที่เปลี่ยน"
        }
      ]
    }
  },
  {
    "id": 1039,
    "dom": 5,
    "question": "An authorized test includes three actions: (1) sending a deceptive login-link email, (2) following a badged employee through a controlled door, and (3) claiming to be an IT technician to request access. Which mapping is correct?",
    "options": [
      "(1) Phishing; (2) tailgating; (3) impersonation",
      "(1) Phishing; (2) impersonation; (3) tailgating",
      "(1) Impersonation; (2) phishing; (3) tailgating",
      "(1) Tailgating; (2) impersonation; (3) phishing"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The mappings distinguish deceptive communication, following through a physical boundary, and a false identity claim. Option B is incorrect: The email mapping is right, but the door-following and technician-claim mappings are reversed. Option C is incorrect: Following through a door is not phishing, and a false technician claim is not itself following an authorized entrant. Option D is incorrect: The email is not physical following; the second action does not describe a false identity claim.",
    "short_explanation_en": "The mappings distinguish deceptive communication, following through a physical boundary, and a false identity claim.",
    "question_th": "การทดสอบที่อนุญาตมีสามการกระทำ คือ (1) ส่งอีเมลลวงพร้อมลิงก์ Login (2) เดินตามพนักงานที่ใช้บัตรผ่านประตูควบคุม (3) อ้างว่าเป็นช่าง IT เพื่อขอเข้าถึง การจับคู่ใดถูกต้อง?",
    "options_th": [
      "ข้อหนึ่ง Phishing ข้อสอง Tailgating ข้อสาม Impersonation",
      "ข้อหนึ่ง Phishing ข้อสอง Impersonation ข้อสาม Tailgating",
      "ข้อหนึ่ง Impersonation ข้อสอง Phishing ข้อสาม Tailgating",
      "ข้อหนึ่ง Tailgating ข้อสอง Impersonation ข้อสาม Phishing"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การจับคู่แยกการสื่อสารลวง การตามผ่านขอบเขตกายภาพ และการอ้างตัวตนเท็จ\n- ข้อ B ไม่ถูกต้อง: อีเมลจับคู่ถูก แต่การเดินตามประตูกับการอ้างเป็นช่างจับคู่สลับกัน\n- ข้อ C ไม่ถูกต้อง: การตามผ่านประตูไม่ใช่ Phishing และการอ้างเป็นช่างไม่ได้หมายถึงการตามผู้มีสิทธิ์เข้าไป\n- ข้อ D ไม่ถูกต้อง: อีเมลไม่ใช่การเดินตาม และการกระทำที่สองไม่ได้ระบุการอ้างตัวตนเท็จ",
    "explanation_detail": {
      "correct": {
        "en": "The mappings distinguish deceptive communication, following through a physical boundary, and a false identity claim.",
        "th": "การจับคู่แยกการสื่อสารลวง การตามผ่านขอบเขตกายภาพ และการอ้างตัวตนเท็จ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "The email mapping is right, but the door-following and technician-claim mappings are reversed.",
          "text_th": "อีเมลจับคู่ถูก แต่การเดินตามประตูกับการอ้างเป็นช่างจับคู่สลับกัน"
        },
        {
          "letter": "C",
          "text_en": "Following through a door is not phishing, and a false technician claim is not itself following an authorized entrant.",
          "text_th": "การตามผ่านประตูไม่ใช่ Phishing และการอ้างเป็นช่างไม่ได้หมายถึงการตามผู้มีสิทธิ์เข้าไป"
        },
        {
          "letter": "D",
          "text_en": "The email is not physical following; the second action does not describe a false identity claim.",
          "text_th": "อีเมลไม่ใช่การเดินตาม และการกระทำที่สองไม่ได้ระบุการอ้างตัวตนเท็จ"
        }
      ]
    }
  },
  {
    "id": 1040,
    "dom": 5,
    "question": "During a controlled physical-security test, a person claiming to be a technician requests entry to a server room. Procedure requires staff to verify work orders through the established service desk before granting entry. No verification has occurred. What should the employee do?",
    "options": [
      "Grant entry while asking the person to email a work order later",
      "Escort the person inside instead of checking the work order",
      "Verify the claim by calling a number supplied only by the visitor",
      "Keep entry pending while verifying the work order through the service desk"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The prescribed independent verification must occur before entry; a claimed role does not satisfy it. Option A is incorrect: Later paperwork bypasses the explicit requirement to verify before entry. Option B is incorrect: Escorting does not replace a prerequisite that the procedure explicitly requires before granting access. Option C is incorrect: A visitor-supplied contact does not meet the established service-desk verification route.",
    "short_explanation_en": "The prescribed independent verification must occur before entry; a claimed role does not satisfy it.",
    "question_th": "ระหว่างการทดสอบ Physical security ที่ควบคุม บุคคลอ้างเป็นช่างขอเข้าห้อง Server ขั้นตอนให้ตรวจ Work order ผ่าน Service desk ที่กำหนดก่อนอนุญาตเข้า และยังไม่ได้ตรวจ พนักงานควรทำอะไร?",
    "options_th": [
      "ให้เข้าก่อนแล้วขอให้ส่ง Work order ทางอีเมลภายหลัง",
      "พาบุคคลเข้าไปแทนการตรวจ Work order",
      "ตรวจคำอ้างโดยโทรหมายเลขที่ผู้มาติดต่อให้เพียงฝ่ายเดียว",
      "รออนุญาตเข้าจนกว่าจะตรวจ Work order ผ่าน Service desk"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ต้องตรวจยืนยันตามช่องทางอิสระที่กำหนดก่อนเข้า การอ้างบทบาทยังไม่ผ่านเงื่อนไข\n- ข้อ A ไม่ถูกต้อง: เอกสารภายหลังข้ามข้อกำหนดชัดเจนว่าต้องตรวจก่อนเข้า\n- ข้อ B ไม่ถูกต้อง: การพาเข้าไม่แทนเงื่อนไขก่อนให้สิทธิ์ซึ่งขั้นตอนกำหนดไว้อย่างชัดเจน\n- ข้อ C ไม่ถูกต้อง: ผู้ติดต่อที่ผู้มาเยือนให้เองไม่ตรงช่องทาง Service desk ที่กำหนดไว้",
    "explanation_detail": {
      "correct": {
        "en": "The prescribed independent verification must occur before entry; a claimed role does not satisfy it.",
        "th": "ต้องตรวจยืนยันตามช่องทางอิสระที่กำหนดก่อนเข้า การอ้างบทบาทยังไม่ผ่านเงื่อนไข"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Later paperwork bypasses the explicit requirement to verify before entry.",
          "text_th": "เอกสารภายหลังข้ามข้อกำหนดชัดเจนว่าต้องตรวจก่อนเข้า"
        },
        {
          "letter": "B",
          "text_en": "Escorting does not replace a prerequisite that the procedure explicitly requires before granting access.",
          "text_th": "การพาเข้าไม่แทนเงื่อนไขก่อนให้สิทธิ์ซึ่งขั้นตอนกำหนดไว้อย่างชัดเจน"
        },
        {
          "letter": "C",
          "text_en": "A visitor-supplied contact does not meet the established service-desk verification route.",
          "text_th": "ผู้ติดต่อที่ผู้มาเยือนให้เองไม่ตรงช่องทาง Service desk ที่กำหนดไว้"
        }
      ]
    }
  },
  {
    "id": 1082,
    "dom": 5,
    "question": "Two endpoints have already established and protected a shared session key. They now need to encrypt a large stream for confidentiality. Key establishment and signing are outside this decision. Which mechanism best fits the bulk-protection role?",
    "options": [
      "Symmetric encryption using the established session key",
      "A hash of each block without encrypting its contents",
      "A digital signature on each unencrypted block",
      "Public-key encryption of a newly generated session key"
    ],
    "correct_idx": 0,
    "explanation": "Symmetric encryption is suited to bulk confidentiality using the shared key. This choice does not replace key protection or any separately needed integrity mechanism.\n\nB: Hashing can support content comparison but does not conceal the plaintext stream.\nC: Signatures support origin/integrity evidence, not confidentiality of exposed block contents.\nD: That addresses key establishment, which is already completed and outside the requested bulk-protection role.",
    "short_explanation_en": "Symmetric encryption is suited to bulk confidentiality using the shared key. This choice does not replace key protection or any separately needed integrity mechanism.",
    "question_th": "เครื่องปลายทางสองฝั่งสร้างและปกป้องกุญแจเซสชันร่วมกันแล้ว จากนี้ต้องเข้ารหัสสตรีมข้อมูลขนาดใหญ่เพื่อรักษาความลับ การสร้างกุญแจและการลงนามอยู่นอกการตัดสินใจนี้ กลไกใดตรงหน้าที่ปกป้องข้อมูลปริมาณมากที่สุด?",
    "options_th": [
      "การเข้ารหัสแบบสมมาตรด้วยกุญแจเซสชันที่สร้างไว้",
      "แฮชแต่ละบล็อกโดยไม่เข้ารหัสเนื้อหา",
      "ลงลายมือชื่อดิจิทัลแต่ละบล็อกที่ไม่เข้ารหัส",
      "เข้ารหัสกุญแจเซสชันที่สร้างใหม่ด้วยกุญแจสาธารณะ"
    ],
    "explanation_th": "การเข้ารหัสสมมาตรเหมาะกับการรักษาความลับของข้อมูลปริมาณมากด้วยกุญแจร่วม ทางเลือกนี้ไม่ได้แทนการปกป้องกุญแจหรือกลไกตรวจความถูกต้องครบถ้วนที่อาจต้องมีแยก\n\nB: แฮชช่วยเปรียบเทียบเนื้อหาได้ แต่ไม่ได้ซ่อนสตรีมข้อความต้นฉบับ\nC: ลายมือชื่อช่วยเป็นหลักฐานแหล่งที่มาและความถูกต้องครบถ้วน ไม่ได้รักษาความลับของเนื้อหาที่เปิดอยู่\nD: เป็นการสร้างกุญแจซึ่งทำเสร็จแล้วและอยู่นอกหน้าที่ปกป้องข้อมูลปริมาณมากที่ถาม",
    "explanation_detail": {
      "correct": {
        "en": "Symmetric encryption is suited to bulk confidentiality using the shared key. This choice does not replace key protection or any separately needed integrity mechanism.",
        "th": "การเข้ารหัสสมมาตรเหมาะกับการรักษาความลับของข้อมูลปริมาณมากด้วยกุญแจร่วม ทางเลือกนี้ไม่ได้แทนการปกป้องกุญแจหรือกลไกตรวจความถูกต้องครบถ้วนที่อาจต้องมีแยก"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Hashing can support content comparison but does not conceal the plaintext stream.",
          "text_th": "แฮชช่วยเปรียบเทียบเนื้อหาได้ แต่ไม่ได้ซ่อนสตรีมข้อความต้นฉบับ"
        },
        {
          "letter": "C",
          "text_en": "Signatures support origin/integrity evidence, not confidentiality of exposed block contents.",
          "text_th": "ลายมือชื่อช่วยเป็นหลักฐานแหล่งที่มาและความถูกต้องครบถ้วน ไม่ได้รักษาความลับของเนื้อหาที่เปิดอยู่"
        },
        {
          "letter": "D",
          "text_en": "That addresses key establishment, which is already completed and outside the requested bulk-protection role.",
          "text_th": "เป็นการสร้างกุญแจซึ่งทำเสร็จแล้วและอยู่นอกหน้าที่ปกป้องข้อมูลปริมาณมากที่ถาม"
        }
      ]
    }
  },
  {
    "id": 1083,
    "dom": 5,
    "question": "A release team distributes a software package with a digital signature. The publisher keeps its signing private key secret, and recipients obtain an authenticated copy of the publisher's public key. Which key use allows recipients to check the signature?",
    "options": [
      "Verify with each recipient's private key",
      "Obtain and use the publisher's private key",
      "Verify with a shared encryption key selected by the recipient",
      "Verify with the publisher's public key"
    ],
    "correct_idx": 3,
    "explanation": "The corresponding authenticated public key verifies a signature made with the publisher's private signing key. Verification is not decryption of confidential package content.\n\nA: A recipient's private key is not the public verification key corresponding to the publisher's signature.\nB: Recipients do not need the secret signing key; distributing it would compromise signing control.\nC: An unrelated symmetric key does not verify the publisher's public-key signature.",
    "short_explanation_en": "The corresponding authenticated public key verifies a signature made with the publisher's private signing key. Verification is not decryption of confidential package content.",
    "question_th": "ทีมเผยแพร่แจกจ่ายชุดซอฟต์แวร์พร้อมลายมือชื่อดิจิทัล ผู้เผยแพร่เก็บกุญแจส่วนตัวสำหรับลงนามเป็นความลับ และผู้รับได้สำเนากุญแจสาธารณะของผู้เผยแพร่ที่ตรวจสอบความแท้จริงแล้ว การใช้กุญแจแบบใดให้ผู้รับตรวจสอบลายมือชื่อได้?",
    "options_th": [
      "ตรวจสอบด้วยกุญแจส่วนตัวของผู้รับแต่ละคน",
      "ขอและใช้กุญแจส่วนตัวของผู้เผยแพร่",
      "ตรวจสอบด้วยกุญแจเข้ารหัสร่วมที่ผู้รับเลือก",
      "ตรวจสอบด้วยกุญแจสาธารณะของผู้เผยแพร่"
    ],
    "explanation_th": "กุญแจสาธารณะที่สัมพันธ์กันและตรวจสอบความแท้จริงแล้วใช้ตรวจลายมือชื่อที่สร้างด้วยกุญแจส่วนตัวของผู้เผยแพร่ การตรวจไม่ใช่การถอดเนื้อหาชุดซอฟต์แวร์ที่เป็นความลับ\n\nA: กุญแจส่วนตัวของผู้รับไม่ใช่กุญแจตรวจสอบสาธารณะที่สัมพันธ์กับลายมือชื่อของผู้เผยแพร่\nB: ผู้รับไม่ต้องใช้กุญแจลงนามลับ การแจกกุญแจนั้นจะทำให้การควบคุมการลงนามเสียหาย\nC: กุญแจสมมาตรที่ไม่เกี่ยวข้องตรวจลายมือชื่อแบบกุญแจสาธารณะของผู้เผยแพร่ไม่ได้",
    "explanation_detail": {
      "correct": {
        "en": "The corresponding authenticated public key verifies a signature made with the publisher's private signing key. Verification is not decryption of confidential package content.",
        "th": "กุญแจสาธารณะที่สัมพันธ์กันและตรวจสอบความแท้จริงแล้วใช้ตรวจลายมือชื่อที่สร้างด้วยกุญแจส่วนตัวของผู้เผยแพร่ การตรวจไม่ใช่การถอดเนื้อหาชุดซอฟต์แวร์ที่เป็นความลับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A recipient's private key is not the public verification key corresponding to the publisher's signature.",
          "text_th": "กุญแจส่วนตัวของผู้รับไม่ใช่กุญแจตรวจสอบสาธารณะที่สัมพันธ์กับลายมือชื่อของผู้เผยแพร่"
        },
        {
          "letter": "B",
          "text_en": "Recipients do not need the secret signing key; distributing it would compromise signing control.",
          "text_th": "ผู้รับไม่ต้องใช้กุญแจลงนามลับ การแจกกุญแจนั้นจะทำให้การควบคุมการลงนามเสียหาย"
        },
        {
          "letter": "C",
          "text_en": "An unrelated symmetric key does not verify the publisher's public-key signature.",
          "text_th": "กุญแจสมมาตรที่ไม่เกี่ยวข้องตรวจลายมือชื่อแบบกุญแจสาธารณะของผู้เผยแพร่ไม่ได้"
        }
      ]
    }
  }
];

export default questions;
