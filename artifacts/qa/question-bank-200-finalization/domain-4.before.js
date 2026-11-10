/**
 * ISC2 CC September 2026 - Domain 4: Networking and Cloud Security Concepts
 * Original bilingual practice questions: 33 (Q670-Q702).
 * Built from content/isc2-cc-2026/questions/domain-4-draft.mjs after assistant academic/bilingual review.
 * These are not actual ISC2 examination questions.
 */

const questions = [
  {
    "id": 670,
    "dom": 4,
    "question": "A training diagram labels IP forwarding as OSI Layer 3 and as the Internet layer in a four-layer TCP/IP model. A reviewer says one label must be wrong because the layer numbers do not match. Which response is MOST accurate?",
    "options": [
      "Compare the described functions within each named model",
      "The different labels indicate that IP forwarding changes the application data format",
      "The TCP/IP diagram must add separate session and presentation layers",
      "Both models must number IP forwarding as Layer 3"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The models group communication functions differently. IP forwarding can be described consistently without requiring identical layer numbers or a one-to-one mapping. Option B is incorrect: Routing packets between networks is distinct from representing application data; different labels do not change the function. Option C is incorrect: This would impose the OSI structure on a different reference model rather than explain its grouping. Option D is incorrect: Layer numbering belongs to the named model; matching numbers are not required for comparable functions.",
    "short_explanation_en": "Compare layer functions in the named model rather than assuming layer numbers are interchangeable.",
    "question_th": "แผนภาพฝึกอบรมระบุการส่งต่อ IP ว่าอยู่ที่ OSI Layer 3 และอยู่ที่ Internet Layer ในแบบจำลอง TCP/IP สี่ชั้น ผู้ทบทวนบอกว่าป้ายหนึ่งต้องผิดเพราะเลขชั้นไม่ตรงกัน คำอธิบายใดถูกต้องที่สุด?",
    "options_th": [
      "เปรียบเทียบหน้าที่ที่อธิบายภายในแบบจำลองแต่ละแบบ",
      "ป้ายที่ต่างกันแสดงว่าการส่งต่อ IP เปลี่ยนรูปแบบข้อมูลของแอป",
      "แผนภาพ TCP/IP ต้องเพิ่ม Session และ Presentation แยกเป็นชั้น",
      "ทั้งสองแบบจำลองต้องกำหนดการส่งต่อ IP เป็นชั้นที่ 3"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: แบบจำลองจัดกลุ่มหน้าที่การสื่อสารต่างกัน จึงอธิบายการส่งต่อ IP ได้สอดคล้องกันโดยไม่ต้องมีเลขชั้นตรงกันหรือเทียบแบบหนึ่งต่อหนึ่ง\n- ข้อ B ไม่ถูกต้อง: การส่ง Packet ระหว่างเครือข่ายต่างจากการจัดรูปแบบข้อมูลแอป ป้ายที่ต่างกันไม่ได้เปลี่ยนหน้าที่จริง\n- ข้อ C ไม่ถูกต้อง: การเพิ่มเช่นนี้เป็นการบังคับโครงสร้าง OSI ให้แบบจำลองอื่น แทนที่จะอธิบายการจัดกลุ่มของแบบจำลองนั้น\n- ข้อ D ไม่ถูกต้อง: เลขชั้นขึ้นกับแบบจำลองที่ระบุ หน้าที่ที่เทียบกันได้ไม่จำเป็นต้องมีเลขตรงกัน",
    "explanation_detail": {
      "correct": {
        "en": "The models group communication functions differently. IP forwarding can be described consistently without requiring identical layer numbers or a one-to-one mapping.",
        "th": "แบบจำลองจัดกลุ่มหน้าที่การสื่อสารต่างกัน จึงอธิบายการส่งต่อ IP ได้สอดคล้องกันโดยไม่ต้องมีเลขชั้นตรงกันหรือเทียบแบบหนึ่งต่อหนึ่ง"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Routing packets between networks is distinct from representing application data; different labels do not change the function.",
          "text_th": "การส่ง Packet ระหว่างเครือข่ายต่างจากการจัดรูปแบบข้อมูลแอป ป้ายที่ต่างกันไม่ได้เปลี่ยนหน้าที่จริง"
        },
        {
          "letter": "C",
          "text_en": "This would impose the OSI structure on a different reference model rather than explain its grouping.",
          "text_th": "การเพิ่มเช่นนี้เป็นการบังคับโครงสร้าง OSI ให้แบบจำลองอื่น แทนที่จะอธิบายการจัดกลุ่มของแบบจำลองนั้น"
        },
        {
          "letter": "D",
          "text_en": "Layer numbering belongs to the named model; matching numbers are not required for comparable functions.",
          "text_th": "เลขชั้นขึ้นกับแบบจำลองที่ระบุ หน้าที่ที่เทียบกันได้ไม่จำเป็นต้องมีเลขตรงกัน"
        }
      ]
    }
  },
  {
    "id": 671,
    "dom": 4,
    "question": "A test capture shows a TCP application retransmitting lost data and delivering it in order. The test contains no TLS or other encryption, and the application payload is readable in the capture. Which conclusion is supported?",
    "options": [
      "The capture demonstrates transport reliability but not payload confidentiality",
      "Ordered delivery demonstrates that the application authorized every recipient",
      "Switching to UDP would provide the confidentiality missing from TCP",
      "The retransmissions demonstrate that TCP encrypted the original payload"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Retransmission and ordering demonstrate TCP behavior. Readable unencrypted content shows that this reliability mechanism does not itself provide confidentiality. Option B is incorrect: Transport ordering does not establish application authorization or whether each recipient should see the data. Option C is incorrect: UDP supplies datagram transport, not native payload encryption. A suitable secure channel is a separate requirement. Option D is incorrect: Retransmission addresses loss, not encryption; the stated capture exposes the payload.",
    "short_explanation_en": "Reliable transport and confidential communication require different evidence.",
    "question_th": "ข้อมูลจับ Packet ระหว่างทดสอบแสดงว่าแอป TCP ส่งข้อมูลที่สูญหายซ้ำและส่งถึงตามลำดับ การทดสอบไม่มี TLS หรือการเข้ารหัสอื่น และอ่าน Payload ของแอปได้ ข้อสรุปใดมีหลักฐานรองรับ?",
    "options_th": [
      "ข้อมูลจับ Packet แสดงความเชื่อถือได้ระดับ Transport แต่ไม่แสดงความลับของ Payload",
      "การส่งถึงตามลำดับแสดงว่าแอปอนุญาตผู้รับทุกรายอย่างถูกต้อง",
      "การเปลี่ยนเป็น UDP จะให้ความลับที่ TCP ขาด",
      "การส่งซ้ำแสดงว่า TCP เข้ารหัส Payload เดิม"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การส่งซ้ำและเรียงลำดับแสดงพฤติกรรม TCP ส่วนเนื้อหาที่อ่านได้และไม่เข้ารหัสแสดงว่ากลไกความเชื่อถือได้นี้ไม่ได้ให้ Confidentiality ในตัว\n- ข้อ B ไม่ถูกต้อง: ลำดับข้อมูลระดับ Transport ไม่ได้ยืนยัน Authorization ของแอปหรือสิทธิ์ที่ผู้รับควรมี\n- ข้อ C ไม่ถูกต้อง: UDP ให้การส่ง Datagram ไม่ได้เข้ารหัส Payload ในตัว ช่องทางที่ปลอดภัยเป็นความต้องการอีกส่วนหนึ่ง\n- ข้อ D ไม่ถูกต้อง: การส่งซ้ำจัดการข้อมูลสูญหาย ไม่ใช่เข้ารหัส และข้อมูลที่จับได้ยังเปิดเผย Payload",
    "explanation_detail": {
      "correct": {
        "en": "Retransmission and ordering demonstrate TCP behavior. Readable unencrypted content shows that this reliability mechanism does not itself provide confidentiality.",
        "th": "การส่งซ้ำและเรียงลำดับแสดงพฤติกรรม TCP ส่วนเนื้อหาที่อ่านได้และไม่เข้ารหัสแสดงว่ากลไกความเชื่อถือได้นี้ไม่ได้ให้ Confidentiality ในตัว"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Transport ordering does not establish application authorization or whether each recipient should see the data.",
          "text_th": "ลำดับข้อมูลระดับ Transport ไม่ได้ยืนยัน Authorization ของแอปหรือสิทธิ์ที่ผู้รับควรมี"
        },
        {
          "letter": "C",
          "text_en": "UDP supplies datagram transport, not native payload encryption. A suitable secure channel is a separate requirement.",
          "text_th": "UDP ให้การส่ง Datagram ไม่ได้เข้ารหัส Payload ในตัว ช่องทางที่ปลอดภัยเป็นความต้องการอีกส่วนหนึ่ง"
        },
        {
          "letter": "D",
          "text_en": "Retransmission addresses loss, not encryption; the stated capture exposes the payload.",
          "text_th": "การส่งซ้ำจัดการข้อมูลสูญหาย ไม่ใช่เข้ารหัส และข้อมูลที่จับได้ยังเปิดเผย Payload"
        }
      ]
    }
  },
  {
    "id": 672,
    "dom": 4,
    "question": "A dual-stack server denies an external test connection over IPv4 but accepts the same unauthorized service connection over IPv6. The IPv4 firewall rule is correct. Which change BEST addresses the demonstrated gap while retaining approved dual-stack service?",
    "options": [
      "Add another IPv4 deny rule for the same service",
      "Treat IPv6 IPsec capability as evidence that the accepted connection is authorized",
      "Remove the public IPv6 DNS record while leaving the IPv6 service rules unchanged",
      "Apply the approved service restrictions to IPv6 and test allowed and denied paths"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Both enabled address families need effective policy. Correcting and testing the IPv6 rules closes the observed path without removing the required dual-stack service. Option A is incorrect: The working IPv4 restriction does not address the demonstrated IPv6 path. Option B is incorrect: Implementation support does not establish IPsec use or service authorization, and IPv6 does not automatically protect this connection. Option C is incorrect: Removing a DNS record does not enforce the service restriction against a party that knows or discovers the address.",
    "short_explanation_en": "Secure and verify every enabled address-family path; IPv6 support is not automatic protection.",
    "question_th": "เซิร์ฟเวอร์ Dual Stack ปฏิเสธการทดสอบเชื่อมต่อจากภายนอกผ่าน IPv4 แต่ยอมรับการเชื่อมต่อบริการเดียวกันที่ไม่ได้รับอนุญาตผ่าน IPv6 กฎ Firewall ของ IPv4 ถูกต้อง การเปลี่ยนใดแก้ช่องว่างที่พบได้เหมาะสมที่สุดโดยคงบริการ Dual Stack ที่อนุมัติ?",
    "options_th": [
      "เพิ่มกฎปฏิเสธ IPv4 อีกข้อสำหรับบริการเดิม",
      "ใช้ความสามารถ IPsec ของ IPv6 เป็นหลักฐานว่าการเชื่อมต่อนั้นได้รับอนุญาต",
      "ลบระเบียน DNS สาธารณะของ IPv6 โดยคงกฎบริการ IPv6 ไว้เดิม",
      "บังคับข้อจำกัดบริการที่อนุมัติกับ IPv6 และทดสอบทั้งเส้นทางที่อนุญาตและปฏิเสธ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ทั้งสอง Address Family ที่เปิดใช้งานต้องมีนโยบายที่มีผลจริง การแก้และทดสอบกฎ IPv6 ปิดช่องทางที่พบโดยไม่ยกเลิกบริการ Dual Stack ที่จำเป็น\n- ข้อ A ไม่ถูกต้อง: ข้อจำกัด IPv4 ทำงานแล้ว แต่ไม่ได้แก้เส้นทาง IPv6 ที่ตรวจพบ\n- ข้อ B ไม่ถูกต้อง: การรองรับไม่ได้ยืนยันการใช้ IPsec หรือสิทธิ์ใช้บริการ และ IPv6 ไม่ได้ป้องกันการเชื่อมต่อนี้โดยอัตโนมัติ\n- ข้อ C ไม่ถูกต้อง: การลบระเบียน DNS ไม่ได้บังคับข้อจำกัดบริการต่อผู้ที่รู้หรือค้นพบที่อยู่แล้ว",
    "explanation_detail": {
      "correct": {
        "en": "Both enabled address families need effective policy. Correcting and testing the IPv6 rules closes the observed path without removing the required dual-stack service.",
        "th": "ทั้งสอง Address Family ที่เปิดใช้งานต้องมีนโยบายที่มีผลจริง การแก้และทดสอบกฎ IPv6 ปิดช่องทางที่พบโดยไม่ยกเลิกบริการ Dual Stack ที่จำเป็น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The working IPv4 restriction does not address the demonstrated IPv6 path.",
          "text_th": "ข้อจำกัด IPv4 ทำงานแล้ว แต่ไม่ได้แก้เส้นทาง IPv6 ที่ตรวจพบ"
        },
        {
          "letter": "B",
          "text_en": "Implementation support does not establish IPsec use or service authorization, and IPv6 does not automatically protect this connection.",
          "text_th": "การรองรับไม่ได้ยืนยันการใช้ IPsec หรือสิทธิ์ใช้บริการ และ IPv6 ไม่ได้ป้องกันการเชื่อมต่อนี้โดยอัตโนมัติ"
        },
        {
          "letter": "C",
          "text_en": "Removing a DNS record does not enforce the service restriction against a party that knows or discovers the address.",
          "text_th": "การลบระเบียน DNS ไม่ได้บังคับข้อจำกัดบริการต่อผู้ที่รู้หรือค้นพบที่อยู่แล้ว"
        }
      ]
    }
  },
  {
    "id": 673,
    "dom": 4,
    "question": "A remote employee's encrypted VPN terminates at the corporate gateway. From that gateway to a payroll server, the application uses an unencrypted connection across a separately administered network. The requirement is confidentiality on both network segments. Which proposal BEST meets it?",
    "options": [
      "Add approved encrypted protection covering the gateway-to-server segment",
      "Assign a private address to the payroll server instead of protecting the second segment",
      "Increase VPN encryption strength while leaving the second segment unchanged",
      "Restrict VPN use to payroll staff while retaining the unencrypted second segment"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The current tunnel protects only its stated path. An appropriate additional protected channel must cover the exposed segment to satisfy confidentiality on both paths. Option B is incorrect: Private addressing does not encrypt traffic crossing the separately administered network. Option C is incorrect: Stronger protection inside the existing tunnel does not extend its endpoint to the payroll server. Option D is incorrect: Restricting users can be useful but does not satisfy the explicit network-confidentiality requirement on that segment.",
    "short_explanation_en": "Evaluate where a VPN terminates and protect any additional network segment required by the data policy.",
    "question_th": "VPN ที่เข้ารหัสของพนักงานระยะไกลสิ้นสุดที่ Gateway องค์กร จาก Gateway ไปเซิร์ฟเวอร์เงินเดือน แอปใช้การเชื่อมต่อที่ไม่เข้ารหัสผ่านเครือข่ายที่บริหารแยกกัน ข้อกำหนดต้องรักษาความลับทั้งสองช่วงเครือข่าย ข้อเสนอใดเหมาะสมที่สุด?",
    "options_th": [
      "เพิ่มการป้องกันแบบเข้ารหัสที่อนุมัติให้ครอบคลุมช่วง Gateway ถึงเซิร์ฟเวอร์",
      "กำหนด Private Address ให้เซิร์ฟเวอร์เงินเดือนแทนการป้องกันช่วงที่สอง",
      "เพิ่มความแข็งแกร่งการเข้ารหัส VPN โดยคงช่วงที่สองไว้เดิม",
      "จำกัด VPN ให้เฉพาะเจ้าหน้าที่เงินเดือนโดยคงช่วงที่สองที่ไม่เข้ารหัส"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Tunnel ปัจจุบันป้องกันเฉพาะเส้นทางที่ระบุ ต้องมีช่องทางป้องกันเพิ่มเติมที่เหมาะสมครอบคลุมช่วงที่เปิดเผยจึงรักษาความลับได้ทั้งสองช่วง\n- ข้อ B ไม่ถูกต้อง: Private Address ไม่ได้เข้ารหัสทราฟฟิกที่ผ่านเครือข่ายที่บริหารแยกกัน\n- ข้อ C ไม่ถูกต้อง: การป้องกันที่แข็งแกร่งขึ้นใน Tunnel เดิมไม่ได้ขยายปลายทางไปถึงเซิร์ฟเวอร์เงินเดือน\n- ข้อ D ไม่ถูกต้อง: การจำกัดผู้ใช้มีประโยชน์ แต่ไม่ทำให้ช่วงเครือข่ายนั้นมี Confidentiality ตามข้อกำหนด",
    "explanation_detail": {
      "correct": {
        "en": "The current tunnel protects only its stated path. An appropriate additional protected channel must cover the exposed segment to satisfy confidentiality on both paths.",
        "th": "Tunnel ปัจจุบันป้องกันเฉพาะเส้นทางที่ระบุ ต้องมีช่องทางป้องกันเพิ่มเติมที่เหมาะสมครอบคลุมช่วงที่เปิดเผยจึงรักษาความลับได้ทั้งสองช่วง"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Private addressing does not encrypt traffic crossing the separately administered network.",
          "text_th": "Private Address ไม่ได้เข้ารหัสทราฟฟิกที่ผ่านเครือข่ายที่บริหารแยกกัน"
        },
        {
          "letter": "C",
          "text_en": "Stronger protection inside the existing tunnel does not extend its endpoint to the payroll server.",
          "text_th": "การป้องกันที่แข็งแกร่งขึ้นใน Tunnel เดิมไม่ได้ขยายปลายทางไปถึงเซิร์ฟเวอร์เงินเดือน"
        },
        {
          "letter": "D",
          "text_en": "Restricting users can be useful but does not satisfy the explicit network-confidentiality requirement on that segment.",
          "text_th": "การจำกัดผู้ใช้มีประโยชน์ แต่ไม่ทำให้ช่วงเครือข่ายนั้นมี Confidentiality ตามข้อกำหนด"
        }
      ]
    }
  },
  {
    "id": 674,
    "dom": 4,
    "question": "A stateful firewall permits a workstation to initiate TCP connections to an approved web server on destination port 443. It permits established replies and denies other new inbound connections. The workstation uses source port 51514. Which incoming traffic does this policy permit?",
    "options": [
      "A new connection from any server to workstation port 51514",
      "A new connection from the approved server to any high-numbered workstation port",
      "A new connection from the approved web server to workstation port 443",
      "A reply matching the tracked connection from server port 443 to workstation port 51514"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. The reverse endpoint relationship and tracked connection state satisfy the stated established-reply rule. This does not open that destination port to unrelated initiations. Option A is incorrect: A matching destination port alone does not make a new initiation an established reply. Option B is incorrect: An ephemeral-port range does not grant inbound permission; the policy requires matching established state. Option C is incorrect: Approving outbound web access does not authorize the server to initiate an unrelated inbound connection.",
    "short_explanation_en": "An established reply is permitted by connection context, not by opening every ephemeral port.",
    "question_th": "Stateful Firewall อนุญาตให้เครื่องทำงานเริ่ม TCP ไปยังเว็บเซิร์ฟเวอร์ที่อนุมัติที่ Destination Port 443 อนุญาตข้อมูลตอบกลับของการเชื่อมต่อที่มีอยู่ และปฏิเสธการเริ่มเชื่อมต่อขาเข้าอื่น เครื่องทำงานใช้ Source Port 51514 นโยบายนี้อนุญาตทราฟฟิกขาเข้าใด?",
    "options_th": [
      "การเชื่อมต่อใหม่จากเซิร์ฟเวอร์ใดก็ได้ไปยัง Port 51514 ของเครื่องทำงาน",
      "การเชื่อมต่อใหม่จากเซิร์ฟเวอร์ที่อนุมัติไปยัง Port หมายเลขสูงใดก็ได้ของเครื่องทำงาน",
      "การเชื่อมต่อใหม่จากเว็บเซิร์ฟเวอร์ที่อนุมัติไปยัง Port 443 ของเครื่องทำงาน",
      "ข้อมูลตอบกลับที่ตรงกับการเชื่อมต่อที่ติดตาม จาก Port 443 ของเซิร์ฟเวอร์ไปยัง Port 51514 ของเครื่องทำงาน"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: คู่ปลายทางที่สลับด้านและสถานะที่ติดตามตรงกับกฎตอบกลับที่ระบุ ไม่ได้เปิด Destination Port นี้ให้การเริ่มเชื่อมต่ออื่น\n- ข้อ A ไม่ถูกต้อง: Destination Port ที่ตรงกันอย่างเดียวไม่ได้ทำให้การเริ่มเชื่อมต่อใหม่เป็นข้อมูลตอบกลับที่มีสถานะ\n- ข้อ B ไม่ถูกต้อง: ช่วง Ephemeral Port ไม่ได้ให้สิทธิ์ขาเข้า นโยบายต้องการสถานะการเชื่อมต่อที่ตรงกัน\n- ข้อ C ไม่ถูกต้อง: การอนุมัติให้เข้าถึงเว็บขาออกไม่ได้อนุญาตให้เซิร์ฟเวอร์เริ่มการเชื่อมต่อขาเข้าอื่น",
    "explanation_detail": {
      "correct": {
        "en": "The reverse endpoint relationship and tracked connection state satisfy the stated established-reply rule. This does not open that destination port to unrelated initiations.",
        "th": "คู่ปลายทางที่สลับด้านและสถานะที่ติดตามตรงกับกฎตอบกลับที่ระบุ ไม่ได้เปิด Destination Port นี้ให้การเริ่มเชื่อมต่ออื่น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A matching destination port alone does not make a new initiation an established reply.",
          "text_th": "Destination Port ที่ตรงกันอย่างเดียวไม่ได้ทำให้การเริ่มเชื่อมต่อใหม่เป็นข้อมูลตอบกลับที่มีสถานะ"
        },
        {
          "letter": "B",
          "text_en": "An ephemeral-port range does not grant inbound permission; the policy requires matching established state.",
          "text_th": "ช่วง Ephemeral Port ไม่ได้ให้สิทธิ์ขาเข้า นโยบายต้องการสถานะการเชื่อมต่อที่ตรงกัน"
        },
        {
          "letter": "C",
          "text_en": "Approving outbound web access does not authorize the server to initiate an unrelated inbound connection.",
          "text_th": "การอนุมัติให้เข้าถึงเว็บขาออกไม่ได้อนุญาตให้เซิร์ฟเวอร์เริ่มการเชื่อมต่อขาเข้าอื่น"
        }
      ]
    }
  },
  {
    "id": 675,
    "dom": 4,
    "question": "A gateway permits TCP port 443 to a customer portal. It checks packet headers and connection state but does not decrypt application traffic. A manager asks whether this proves that uploaded application requests contain no malicious instructions. What is the BEST response?",
    "options": [
      "Changing the allowed port to an uncommon number would provide the missing inspection",
      "It establishes an allowed path, but content assurance needs suitable application-layer controls",
      "It proves the content is safe if the connection completes its TCP handshake",
      "It proves the content is safe because port 443 is assigned to HTTPS"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Header/state checks do not inspect the stated encrypted content. Authorized application-layer inspection or endpoint/application validation is needed for that separate assurance goal. Option A is incorrect: A port-number change does not give the gateway visibility into encrypted application content. Option C is incorrect: A completed handshake establishes transport state, not whether application instructions are malicious. Option D is incorrect: A registered port does not prove the actual application content or its safety.",
    "short_explanation_en": "Allowed ports and established state do not establish the safety of encrypted application content.",
    "question_th": "Gateway อนุญาต TCP Port 443 ไปยัง Portal ลูกค้า โดยตรวจ Header และสถานะการเชื่อมต่อ แต่ไม่ถอดรหัสทราฟฟิกแอป ผู้จัดการถามว่าสิ่งนี้พิสูจน์หรือไม่ว่าคำขออัปโหลดของแอปไม่มีคำสั่งอันตราย คำตอบใดเหมาะสมที่สุด?",
    "options_th": [
      "การเปลี่ยน Port ที่อนุญาตเป็นเลขที่ไม่ค่อยใช้จะให้การตรวจที่ขาดอยู่",
      "ยืนยันเส้นทางที่อนุญาต แต่การประเมินเนื้อหาต้องใช้มาตรการระดับแอปที่เหมาะสม",
      "พิสูจน์ว่าเนื้อหาปลอดภัยหาก TCP Handshake สำเร็จ",
      "พิสูจน์ว่าเนื้อหาปลอดภัย เพราะ Port 443 กำหนดให้ HTTPS"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การตรวจ Header/State ไม่ได้ตรวจเนื้อหาเข้ารหัสที่ระบุ ต้องมีการตรวจระดับแอปที่ได้รับอนุมัติหรือการตรวจที่ Endpoint/แอปสำหรับเป้าหมายการประเมินเนื้อหาอีกส่วนนี้\n- ข้อ A ไม่ถูกต้อง: การเปลี่ยนหมายเลข Port ไม่ได้ทำให้ Gateway มองเห็นเนื้อหาแอปที่เข้ารหัส\n- ข้อ C ไม่ถูกต้อง: Handshake ที่สำเร็จแสดงสถานะ Transport ไม่ได้บอกว่าคำสั่งในแอปเป็นอันตรายหรือไม่\n- ข้อ D ไม่ถูกต้อง: Port ที่จดทะเบียนไม่ได้พิสูจน์เนื้อหาจริงของแอปหรือความปลอดภัยของเนื้อหา",
    "explanation_detail": {
      "correct": {
        "en": "Header/state checks do not inspect the stated encrypted content. Authorized application-layer inspection or endpoint/application validation is needed for that separate assurance goal.",
        "th": "การตรวจ Header/State ไม่ได้ตรวจเนื้อหาเข้ารหัสที่ระบุ ต้องมีการตรวจระดับแอปที่ได้รับอนุมัติหรือการตรวจที่ Endpoint/แอปสำหรับเป้าหมายการประเมินเนื้อหาอีกส่วนนี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A port-number change does not give the gateway visibility into encrypted application content.",
          "text_th": "การเปลี่ยนหมายเลข Port ไม่ได้ทำให้ Gateway มองเห็นเนื้อหาแอปที่เข้ารหัส"
        },
        {
          "letter": "C",
          "text_en": "A completed handshake establishes transport state, not whether application instructions are malicious.",
          "text_th": "Handshake ที่สำเร็จแสดงสถานะ Transport ไม่ได้บอกว่าคำสั่งในแอปเป็นอันตรายหรือไม่"
        },
        {
          "letter": "D",
          "text_en": "A registered port does not prove the actual application content or its safety.",
          "text_th": "Port ที่จดทะเบียนไม่ได้พิสูจน์เนื้อหาจริงของแอปหรือความปลอดภัยของเนื้อหา"
        }
      ]
    }
  },
  {
    "id": 676,
    "dom": 4,
    "question": "A partner endpoint accepts FTP upgraded with TLS using an AUTH command on its normal FTP control connection. A deployment team tries an SFTP-only client, which expects SSH transport. Which change addresses the protocol mismatch?",
    "options": [
      "Disable TLS on the partner endpoint and transfer the files in plain FTP",
      "Keep the SFTP-only client and change only its destination port",
      "Use an approved client supporting the endpoint's FTP-with-TLS negotiation",
      "Treat FTPS and SFTP as interchangeable names for the same transport"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The server explicitly uses FTP/TLS negotiation rather than SSH. A client speaking that protocol addresses the mismatch; a port change alone cannot convert SFTP into FTPS. Option A is incorrect: This removes the stated protected-transfer mechanism instead of providing a compatible secure client. Option B is incorrect: Changing the port does not make an SSH-based client speak FTP with TLS negotiation. Option D is incorrect: FTPS adds TLS to FTP; SFTP uses SSH. Similar purposes do not imply wire-protocol compatibility.",
    "short_explanation_en": "Choose compatible secure-transfer protocols; FTPS and SFTP are different even when both protect files in transit.",
    "question_th": "ปลายทางของคู่ค้ารองรับ FTP ที่ยกระดับเป็น TLS ด้วยคำสั่ง AUTH บนการเชื่อมต่อควบคุม FTP ปกติ ทีมติดตั้งใช้ Client ที่รองรับเฉพาะ SFTP ซึ่งคาดหวัง SSH Transport การเปลี่ยนใดแก้ความไม่ตรงกันของ Protocol?",
    "options_th": [
      "ปิด TLS ของปลายทางคู่ค้าแล้วส่งไฟล์ด้วย FTP ที่ไม่เข้ารหัส",
      "คง Client ที่รองรับเฉพาะ SFTP แล้วเปลี่ยนเฉพาะ Destination Port",
      "ใช้ Client ที่อนุมัติและรองรับการเจรจา FTP พร้อม TLS ของปลายทาง",
      "ถือว่า FTPS และ SFTP เป็นชื่อที่ใช้แทนกันของ Transport เดียวกัน"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: เซิร์ฟเวอร์ระบุการเจรจา FTP/TLS แทน SSH การใช้ Client ที่สื่อสาร Protocol นั้นแก้ความไม่ตรงกันได้ การเปลี่ยน Port อย่างเดียวแปลง SFTP เป็น FTPS ไม่ได้\n- ข้อ A ไม่ถูกต้อง: วิธีนี้ยกเลิกการป้องกันที่ระบุ แทนที่จะใช้ Client ที่รองรับการส่งอย่างปลอดภัย\n- ข้อ B ไม่ถูกต้อง: การเปลี่ยน Port ไม่ทำให้ Client ที่ใช้ SSH สื่อสารแบบ FTP พร้อมเจรจา TLS ได้\n- ข้อ D ไม่ถูกต้อง: FTPS เพิ่ม TLS ให้ FTP ส่วน SFTP ใช้ SSH วัตถุประสงค์คล้ายกันไม่ได้แปลว่า Protocol ที่ใช้สื่อสารเข้ากันได้",
    "explanation_detail": {
      "correct": {
        "en": "The server explicitly uses FTP/TLS negotiation rather than SSH. A client speaking that protocol addresses the mismatch; a port change alone cannot convert SFTP into FTPS.",
        "th": "เซิร์ฟเวอร์ระบุการเจรจา FTP/TLS แทน SSH การใช้ Client ที่สื่อสาร Protocol นั้นแก้ความไม่ตรงกันได้ การเปลี่ยน Port อย่างเดียวแปลง SFTP เป็น FTPS ไม่ได้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This removes the stated protected-transfer mechanism instead of providing a compatible secure client.",
          "text_th": "วิธีนี้ยกเลิกการป้องกันที่ระบุ แทนที่จะใช้ Client ที่รองรับการส่งอย่างปลอดภัย"
        },
        {
          "letter": "B",
          "text_en": "Changing the port does not make an SSH-based client speak FTP with TLS negotiation.",
          "text_th": "การเปลี่ยน Port ไม่ทำให้ Client ที่ใช้ SSH สื่อสารแบบ FTP พร้อมเจรจา TLS ได้"
        },
        {
          "letter": "D",
          "text_en": "FTPS adds TLS to FTP; SFTP uses SSH. Similar purposes do not imply wire-protocol compatibility.",
          "text_th": "FTPS เพิ่ม TLS ให้ FTP ส่วน SFTP ใช้ SSH วัตถุประสงค์คล้ายกันไม่ได้แปลว่า Protocol ที่ใช้สื่อสารเข้ากันได้"
        }
      ]
    }
  },
  {
    "id": 677,
    "dom": 4,
    "question": "An inventory scanner finds a listener on TCP port 3389 on a server that should provide only an internal web application. The scanner labels it RDP using the port number alone. What should the review conclude before deciding whether the exposure is justified?",
    "options": [
      "Retain the listener because registered service ports are approved by default",
      "Approve the listener once the server is patched, without checking its service purpose",
      "Confirm the listening process and business need; the port is a clue rather than proof",
      "Record a successful RDP compromise because the port accepts connections"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. 3389 is a conventional RDP assignment, but services can use custom ports. Process/configuration evidence and authorized need determine the finding and required restriction. Option A is incorrect: Registration identifies conventional use, not this organization's business authorization. Option B is incorrect: Patching reduces known vulnerabilities but does not establish that this listener is needed or authorized. Option D is incorrect: A listener does not establish a vulnerability, authentication bypass or successful compromise.",
    "short_explanation_en": "Confirm service identity and business need; a registered port alone proves neither safety nor compromise.",
    "question_th": "เครื่องมือสำรวจพบ Listener บน TCP Port 3389 ของเซิร์ฟเวอร์ที่ควรให้บริการเพียงเว็บแอปภายใน เครื่องมือติดป้ายว่า RDP จากเลข Port อย่างเดียว การทบทวนควรสรุปอย่างไรก่อนตัดสินว่าการเปิดบริการนี้มีเหตุผลรองรับหรือไม่?",
    "options_th": [
      "คง Listener ไว้เพราะ Port ที่จดทะเบียนได้รับอนุมัติโดยปริยาย",
      "อนุมัติ Listener เมื่อ Patch เซิร์ฟเวอร์แล้วโดยไม่ตรวจวัตถุประสงค์บริการ",
      "ตรวจ Process ที่เปิดรับและความจำเป็นทางธุรกิจ เลข Port เป็นเบาะแสไม่ใช่ข้อพิสูจน์",
      "บันทึกว่า RDP ถูกบุกรุกสำเร็จเพราะ Port รับการเชื่อมต่อ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: 3389 เป็น Port ที่กำหนดให้ RDP ตามปกติ แต่บริการอาจใช้ Port ที่เปลี่ยนได้ ต้องมีหลักฐาน Process/การตั้งค่าและความจำเป็นที่อนุมัติเพื่อตัดสินผลกับข้อจำกัดที่ต้องใช้\n- ข้อ A ไม่ถูกต้อง: การจดทะเบียนบอกการใช้ตามปกติ ไม่ใช่การอนุมัติงานขององค์กรนี้\n- ข้อ B ไม่ถูกต้อง: การ Patch ลดช่องโหว่ที่รู้จัก แต่ไม่ได้ยืนยันว่า Listener นี้จำเป็นหรือได้รับอนุญาต\n- ข้อ D ไม่ถูกต้อง: การมี Listener ไม่ได้ยืนยันช่องโหว่ การข้ามการยืนยันตัวตน หรือการบุกรุกสำเร็จ",
    "explanation_detail": {
      "correct": {
        "en": "3389 is a conventional RDP assignment, but services can use custom ports. Process/configuration evidence and authorized need determine the finding and required restriction.",
        "th": "3389 เป็น Port ที่กำหนดให้ RDP ตามปกติ แต่บริการอาจใช้ Port ที่เปลี่ยนได้ ต้องมีหลักฐาน Process/การตั้งค่าและความจำเป็นที่อนุมัติเพื่อตัดสินผลกับข้อจำกัดที่ต้องใช้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Registration identifies conventional use, not this organization's business authorization.",
          "text_th": "การจดทะเบียนบอกการใช้ตามปกติ ไม่ใช่การอนุมัติงานขององค์กรนี้"
        },
        {
          "letter": "B",
          "text_en": "Patching reduces known vulnerabilities but does not establish that this listener is needed or authorized.",
          "text_th": "การ Patch ลดช่องโหว่ที่รู้จัก แต่ไม่ได้ยืนยันว่า Listener นี้จำเป็นหรือได้รับอนุญาต"
        },
        {
          "letter": "D",
          "text_en": "A listener does not establish a vulnerability, authentication bypass or successful compromise.",
          "text_th": "การมี Listener ไม่ได้ยืนยันช่องโหว่ การข้ามการยืนยันตัวตน หรือการบุกรุกสำเร็จ"
        }
      ]
    }
  },
  {
    "id": 678,
    "dom": 4,
    "question": "Company workstations support the approved WPA3 configuration. One required scanner supports only an approved WPA2 mode and needs access only to its scanning gateway. Policy permits a restricted compatibility network. Which proposal BEST preserves the requirement with limited exposure?",
    "options": [
      "Switch the workstation network to open access and hide its SSID",
      "Place the scanner on the production network with the same broad access as every workstation",
      "Use the approved restricted WPA2 network for the scanner and retain WPA3 for workstations",
      "Add the scanner's MAC address to the workstation network and disable encryption"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. This meets the explicitly approved compatibility exception while limiting the scanner to its required gateway and retaining stronger supported settings for workstations. Option A is incorrect: Hiding an SSID does not replace encryption/authentication and would weaken all workstation access. Option B is incorrect: The stated business need is only the scanning gateway; broad production access is unnecessary under the allowed restricted design. Option D is incorrect: MAC filtering is not a replacement for the supported security modes and unnecessarily exposes the wider network.",
    "short_explanation_en": "Handle authorized wireless compatibility with supported protection and scoped access rather than weakening the whole network.",
    "question_th": "เครื่องทำงานองค์กรรองรับการตั้งค่า WPA3 ที่อนุมัติ แต่เครื่องสแกนที่จำเป็นรองรับเฉพาะโหมด WPA2 ที่อนุมัติและต้องติดต่อเพียง Scanning Gateway นโยบายอนุญาตเครือข่ายรองรับอุปกรณ์เก่าที่จำกัดสิทธิ์ ข้อเสนอใดรักษาความต้องการนี้และจำกัดการเปิดเผยได้เหมาะสมที่สุด?",
    "options_th": [
      "เปลี่ยนเครือข่ายเครื่องทำงานเป็นแบบเปิดและซ่อน SSID",
      "วางเครื่องสแกนบนเครือข่าย Production พร้อมสิทธิ์กว้างเท่าเครื่องทำงานทุกเครื่อง",
      "ใช้เครือข่าย WPA2 ที่อนุมัติและจำกัดสำหรับเครื่องสแกน และคง WPA3 ให้เครื่องทำงาน",
      "เพิ่ม MAC Address ของเครื่องสแกนในเครือข่ายเครื่องทำงานแล้วปิดการเข้ารหัส"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: วิธีนี้ทำตามข้อยกเว้นความเข้ากันได้ที่อนุมัติ จำกัดเครื่องสแกนให้ถึง Gateway ที่จำเป็น และคงการตั้งค่าที่แข็งแกร่งกว่าซึ่งเครื่องทำงานรองรับ\n- ข้อ A ไม่ถูกต้อง: การซ่อน SSID ไม่ทดแทนการเข้ารหัส/ยืนยันตัวตน และจะทำให้เครื่องทำงานทั้งหมดมีการป้องกันลดลง\n- ข้อ B ไม่ถูกต้อง: ความจำเป็นที่ระบุคือ Scanning Gateway เท่านั้น การเข้าถึง Production แบบกว้างไม่จำเป็นเมื่ออนุญาตแบบจำกัดแล้ว\n- ข้อ D ไม่ถูกต้อง: การกรอง MAC ไม่ทดแทนโหมดความปลอดภัยที่รองรับ และเปิดเผยเครือข่ายหลักโดยไม่จำเป็น",
    "explanation_detail": {
      "correct": {
        "en": "This meets the explicitly approved compatibility exception while limiting the scanner to its required gateway and retaining stronger supported settings for workstations.",
        "th": "วิธีนี้ทำตามข้อยกเว้นความเข้ากันได้ที่อนุมัติ จำกัดเครื่องสแกนให้ถึง Gateway ที่จำเป็น และคงการตั้งค่าที่แข็งแกร่งกว่าซึ่งเครื่องทำงานรองรับ"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Hiding an SSID does not replace encryption/authentication and would weaken all workstation access.",
          "text_th": "การซ่อน SSID ไม่ทดแทนการเข้ารหัส/ยืนยันตัวตน และจะทำให้เครื่องทำงานทั้งหมดมีการป้องกันลดลง"
        },
        {
          "letter": "B",
          "text_en": "The stated business need is only the scanning gateway; broad production access is unnecessary under the allowed restricted design.",
          "text_th": "ความจำเป็นที่ระบุคือ Scanning Gateway เท่านั้น การเข้าถึง Production แบบกว้างไม่จำเป็นเมื่ออนุญาตแบบจำกัดแล้ว"
        },
        {
          "letter": "D",
          "text_en": "MAC filtering is not a replacement for the supported security modes and unnecessarily exposes the wider network.",
          "text_th": "การกรอง MAC ไม่ทดแทนโหมดความปลอดภัยที่รองรับ และเปิดเผยเครือข่ายหลักโดยไม่จำเป็น"
        }
      ]
    }
  },
  {
    "id": 679,
    "dom": 4,
    "question": "A procurement report says an access point is secure because it supports a recent Wi-Fi generation, hides its network name, and allows a list of MAC addresses. Which additional evidence is MOST relevant to evaluating protection of the wireless connection?",
    "options": [
      "The advertised maximum data rate",
      "The number of client entries in the MAC allowlist",
      "A successful connectivity test from an approved client to its gateway",
      "The actual supported authentication/encryption mode and maintained firmware"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Wireless protection depends on actual security configuration and implementation maintenance. Generation, SSID visibility and MAC restrictions do not substitute for those controls. Option A is incorrect: A nominal throughput capability does not establish authentication or encryption settings. Option B is incorrect: The size of an allowlist does not overcome the limits of using observable/copyable MAC identifiers. Option C is incorrect: Connectivity demonstrates a working path but does not establish which authentication/encryption mode protects it or whether the implementation is maintained.",
    "short_explanation_en": "Wi-Fi generation and network-name hiding do not establish the configured authentication and encryption.",
    "question_th": "รายงานจัดซื้อระบุว่า Access Point ปลอดภัยเพราะรองรับ Wi-Fi รุ่นใหม่ ซ่อนชื่อเครือข่าย และอนุญาตตามรายชื่อ MAC Address หลักฐานเพิ่มเติมใดเกี่ยวข้องที่สุดกับการประเมินการป้องกันการเชื่อมต่อไร้สาย?",
    "options_th": [
      "อัตรารับส่งข้อมูลสูงสุดที่โฆษณา",
      "จำนวน Client ในรายชื่อ MAC ที่อนุญาต",
      "ผลทดสอบเชื่อมต่อจาก Client ที่อนุมัติไปยัง Gateway ได้สำเร็จ",
      "โหมดการยืนยันตัวตน/เข้ารหัสที่ใช้จริงและรองรับ พร้อม Firmware ที่ดูแลอัปเดต"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การป้องกันไร้สายขึ้นกับการตั้งค่าความปลอดภัยจริงและการดูแลซอฟต์แวร์ รุ่น Wi-Fi การมองเห็น SSID และการกรอง MAC ไม่ทดแทนมาตรการเหล่านี้\n- ข้อ A ไม่ถูกต้อง: ความสามารถรับส่งตามที่ระบุไม่ได้ยืนยันการตั้งค่ายืนยันตัวตนหรือการเข้ารหัส\n- ข้อ B ไม่ถูกต้อง: ขนาดรายชื่อที่อนุญาตไม่ได้แก้ข้อจำกัดของ MAC ซึ่งสังเกตและคัดลอกได้\n- ข้อ C ไม่ถูกต้อง: การเชื่อมต่อสำเร็จแสดงว่าเส้นทางทำงาน แต่ไม่ยืนยันโหมดยืนยันตัวตน/เข้ารหัสที่ป้องกันเส้นทางหรือการดูแลซอฟต์แวร์",
    "explanation_detail": {
      "correct": {
        "en": "Wireless protection depends on actual security configuration and implementation maintenance. Generation, SSID visibility and MAC restrictions do not substitute for those controls.",
        "th": "การป้องกันไร้สายขึ้นกับการตั้งค่าความปลอดภัยจริงและการดูแลซอฟต์แวร์ รุ่น Wi-Fi การมองเห็น SSID และการกรอง MAC ไม่ทดแทนมาตรการเหล่านี้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A nominal throughput capability does not establish authentication or encryption settings.",
          "text_th": "ความสามารถรับส่งตามที่ระบุไม่ได้ยืนยันการตั้งค่ายืนยันตัวตนหรือการเข้ารหัส"
        },
        {
          "letter": "B",
          "text_en": "The size of an allowlist does not overcome the limits of using observable/copyable MAC identifiers.",
          "text_th": "ขนาดรายชื่อที่อนุญาตไม่ได้แก้ข้อจำกัดของ MAC ซึ่งสังเกตและคัดลอกได้"
        },
        {
          "letter": "C",
          "text_en": "Connectivity demonstrates a working path but does not establish which authentication/encryption mode protects it or whether the implementation is maintained.",
          "text_th": "การเชื่อมต่อสำเร็จแสดงว่าเส้นทางทำงาน แต่ไม่ยืนยันโหมดยืนยันตัวตน/เข้ารหัสที่ป้องกันเส้นทางหรือการดูแลซอฟต์แวร์"
        }
      ]
    }
  },
  {
    "id": 680,
    "dom": 4,
    "question": "Two approved Bluetooth devices support both a Just Works method without man-in-the-middle protection and an authenticated numeric-comparison method. Policy requires verifying the intended peer during pairing. Staff can compare the displayed values. Which setup meets that requirement?",
    "options": [
      "Use either method once the device name matches the inventory name",
      "Use Just Works and rely on encryption after pairing to verify the peer",
      "Use numeric comparison and verify matching values on the intended devices",
      "Use Just Works with reduced discovery time instead of comparing displayed values"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. The supported authenticated method and actual comparison provide the required intended-peer verification. This answer depends on the capabilities and method properties explicitly supplied. Option A is incorrect: A recognizable name is not cryptographic assurance of the intended peer and does not satisfy the required verification. Option B is incorrect: Post-pairing encryption does not supply the peer-authentication protection missing from the stated association method. Option D is incorrect: Reducing discovery exposure is useful but does not add the missing authenticated-pairing property.",
    "short_explanation_en": "Encrypted Bluetooth communication and authenticated pairing are different properties; use the method required by policy.",
    "question_th": "อุปกรณ์ Bluetooth ที่อนุมัติสองเครื่องรองรับทั้ง Just Works ที่ไม่มีการป้องกัน Man-in-the-Middle และ Numeric Comparison แบบยืนยันตัวตน นโยบายกำหนดให้ตรวจสอบอุปกรณ์ที่ต้องการขณะจับคู่ เจ้าหน้าที่สามารถเทียบค่าที่แสดงได้ การตั้งค่าใดตรงตามข้อกำหนด?",
    "options_th": [
      "ใช้วิธีใดก็ได้เมื่อชื่ออุปกรณ์ตรงกับทะเบียน",
      "ใช้ Just Works แล้วอาศัยการเข้ารหัสหลังจับคู่เพื่อยืนยันอุปกรณ์",
      "ใช้ Numeric Comparison และตรวจว่าค่าบนอุปกรณ์ที่ต้องการตรงกัน",
      "ใช้ Just Works โดยลดเวลาที่เปิดให้ค้นพบแทนการเทียบค่าบนจอ"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: วิธียืนยันตัวตนที่รองรับร่วมกับการเทียบค่าจริงให้การตรวจอุปกรณ์ตามข้อกำหนด คำตอบขึ้นกับความสามารถและคุณสมบัติวิธีที่โจทย์ระบุชัด\n- ข้อ A ไม่ถูกต้อง: ชื่อที่รู้จักไม่ใช่หลักฐานยืนยันอุปกรณ์เชิงเข้ารหัส และไม่ทำตามการตรวจที่กำหนด\n- ข้อ B ไม่ถูกต้อง: การเข้ารหัสหลังจับคู่ไม่ได้เพิ่มการยืนยันอุปกรณ์ที่วิธีจับคู่ตามโจทย์ขาดอยู่\n- ข้อ D ไม่ถูกต้อง: การลดเวลาค้นพบช่วยลดการเปิดเผย แต่ไม่เพิ่มคุณสมบัติยืนยันตัวตนที่ขาดอยู่ขณะจับคู่",
    "explanation_detail": {
      "correct": {
        "en": "The supported authenticated method and actual comparison provide the required intended-peer verification. This answer depends on the capabilities and method properties explicitly supplied.",
        "th": "วิธียืนยันตัวตนที่รองรับร่วมกับการเทียบค่าจริงให้การตรวจอุปกรณ์ตามข้อกำหนด คำตอบขึ้นกับความสามารถและคุณสมบัติวิธีที่โจทย์ระบุชัด"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A recognizable name is not cryptographic assurance of the intended peer and does not satisfy the required verification.",
          "text_th": "ชื่อที่รู้จักไม่ใช่หลักฐานยืนยันอุปกรณ์เชิงเข้ารหัส และไม่ทำตามการตรวจที่กำหนด"
        },
        {
          "letter": "B",
          "text_en": "Post-pairing encryption does not supply the peer-authentication protection missing from the stated association method.",
          "text_th": "การเข้ารหัสหลังจับคู่ไม่ได้เพิ่มการยืนยันอุปกรณ์ที่วิธีจับคู่ตามโจทย์ขาดอยู่"
        },
        {
          "letter": "D",
          "text_en": "Reducing discovery exposure is useful but does not add the missing authenticated-pairing property.",
          "text_th": "การลดเวลาค้นพบช่วยลดการเปิดเผย แต่ไม่เพิ่มคุณสมบัติยืนยันตัวตนที่ขาดอยู่ขณะจับคู่"
        }
      ]
    }
  },
  {
    "id": 681,
    "dom": 4,
    "question": "A managed workstation must continue using two approved Bluetooth peripherals. A third peripheral has been transferred outside the organization, but its pairing remains stored on the workstation. Which action MOST directly removes the obsolete device trust while preserving required use?",
    "options": [
      "Remove the transferred peripheral's stored pairing under the device-management procedure",
      "Change the workstation's display name while retaining all pairings",
      "Disable the Bluetooth radio throughout working hours",
      "Turn off discoverability but retain the transferred peripheral's pairing"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Removing the obsolete association withdraws that stored pairing relationship without disrupting the two approved peripherals still required. Option B is incorrect: A display-name change does not revoke the stored trust association with the transferred device. Option C is incorrect: This stops the two required peripherals as well and does not provide the targeted removal requested. Option D is incorrect: Discoverability concerns discovery; changing it does not itself remove an existing stored pairing.",
    "short_explanation_en": "Discovery settings and removal of an existing Bluetooth pairing address different exposure conditions.",
    "question_th": "เครื่องทำงานที่บริหารจัดการยังต้องใช้ Bluetooth Peripheral ที่อนุมัติสองเครื่อง ส่วนเครื่องที่สามถูกส่งต่อออกนอกองค์กรแล้วแต่ยังเก็บการจับคู่ไว้บนเครื่องทำงาน การกระทำใดถอนความเชื่อถือของอุปกรณ์ที่หมดความจำเป็นได้ตรงที่สุดโดยคงการใช้งานที่ต้องมี?",
    "options_th": [
      "ลบการจับคู่ที่เก็บไว้ของ Peripheral ที่ส่งต่อ ตามขั้นตอนจัดการอุปกรณ์",
      "เปลี่ยนชื่อที่แสดงของเครื่องทำงานโดยคงการจับคู่ทั้งหมด",
      "ปิดวิทยุ Bluetooth ตลอดเวลาทำงาน",
      "ปิดการเปิดให้ค้นพบแต่เก็บการจับคู่ของ Peripheral ที่ส่งต่อไว้"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การถอน Association ที่หมดความจำเป็นยกเลิกความสัมพันธ์การจับคู่ที่เก็บไว้ โดยไม่กระทบ Peripheral อีกสองเครื่องที่ยังจำเป็น\n- ข้อ B ไม่ถูกต้อง: การเปลี่ยนชื่อที่แสดงไม่ได้ถอนความสัมพันธ์ความเชื่อถือที่เก็บไว้กับอุปกรณ์ที่ส่งต่อ\n- ข้อ C ไม่ถูกต้อง: วิธีนี้หยุด Peripheral ที่จำเป็นอีกสองเครื่องด้วย และไม่ได้ถอนเฉพาะความสัมพันธ์ตามที่ต้องการ\n- ข้อ D ไม่ถูกต้อง: Discoverability เกี่ยวกับการค้นพบ การเปลี่ยนค่านี้ไม่ได้ลบการจับคู่ที่เก็บอยู่",
    "explanation_detail": {
      "correct": {
        "en": "Removing the obsolete association withdraws that stored pairing relationship without disrupting the two approved peripherals still required.",
        "th": "การถอน Association ที่หมดความจำเป็นยกเลิกความสัมพันธ์การจับคู่ที่เก็บไว้ โดยไม่กระทบ Peripheral อีกสองเครื่องที่ยังจำเป็น"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A display-name change does not revoke the stored trust association with the transferred device.",
          "text_th": "การเปลี่ยนชื่อที่แสดงไม่ได้ถอนความสัมพันธ์ความเชื่อถือที่เก็บไว้กับอุปกรณ์ที่ส่งต่อ"
        },
        {
          "letter": "C",
          "text_en": "This stops the two required peripherals as well and does not provide the targeted removal requested.",
          "text_th": "วิธีนี้หยุด Peripheral ที่จำเป็นอีกสองเครื่องด้วย และไม่ได้ถอนเฉพาะความสัมพันธ์ตามที่ต้องการ"
        },
        {
          "letter": "D",
          "text_en": "Discoverability concerns discovery; changing it does not itself remove an existing stored pairing.",
          "text_th": "Discoverability เกี่ยวกับการค้นพบ การเปลี่ยนค่านี้ไม่ได้ลบการจับคู่ที่เก็บอยู่"
        }
      ]
    }
  },
  {
    "id": 682,
    "dom": 4,
    "question": "A production controller has a known vulnerability. An immediate restart would interrupt a safety-critical process. The operations owner authorizes a tested update during the next safe maintenance window and permits temporary network restrictions now. Which interim plan BEST follows those constraints?",
    "options": [
      "Restart immediately because network-connected controllers follow the same update schedule as laptops",
      "Restrict unnecessary paths, monitor the controller, and track the owner and scheduled update",
      "Keep current connectivity and defer assigning remediation responsibility until the maintenance window",
      "Close the vulnerability finding once a separate VLAN is assigned"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Authorized compensating controls reduce exposure while the vulnerability remains owned and tracked for tested remediation within the safe operational window. Option A is incorrect: This ignores the stated physical-process consequence and the authorized safe-maintenance plan. Option C is incorrect: The approved temporary restrictions are available now; leaving exposure and ownership unaddressed wastes that permitted risk reduction. Option D is incorrect: Segmentation can reduce exposure but does not repair vulnerable controller software; remediation must remain tracked.",
    "short_explanation_en": "OT compensating measures reduce exposure while safe, owned and tested remediation remains necessary.",
    "question_th": "ตัวควบคุม Production มีช่องโหว่ที่ทราบแล้ว การ Restart ทันทีจะขัดจังหวะกระบวนการสำคัญต่อความปลอดภัย เจ้าของงานอนุมัติให้อัปเดตที่ทดสอบแล้วในช่วงบำรุงรักษาที่ปลอดภัยถัดไป และอนุญาตข้อจำกัดเครือข่ายชั่วคราวขณะนี้ แผนระหว่างรอใดเหมาะสมที่สุดตามเงื่อนไข?",
    "options_th": [
      "Restart ทันทีเพราะ Controller ที่เชื่อมเครือข่ายใช้กำหนดอัปเดตเดียวกับ Laptop",
      "จำกัดเส้นทางที่ไม่จำเป็น ติดตาม Controller และบันทึกผู้รับผิดชอบกับกำหนดอัปเดต",
      "คงการเชื่อมต่อเดิมและรอกำหนดผู้รับผิดชอบเมื่อถึงช่วงบำรุงรักษา",
      "ปิดผลตรวจช่องโหว่เมื่อกำหนด VLAN แยกแล้ว"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: มาตรการชดเชยที่อนุมัติลดการเปิดเผยระหว่างที่ยังมีช่องโหว่ โดยมีผู้รับผิดชอบและติดตามการแก้ไขที่ทดสอบแล้วในช่วงปฏิบัติการที่ปลอดภัย\n- ข้อ A ไม่ถูกต้อง: วิธีนี้ละเลยผลต่อกระบวนการกายภาพที่ระบุและแผนบำรุงรักษาปลอดภัยที่อนุมัติ\n- ข้อ C ไม่ถูกต้อง: สามารถจำกัดชั่วคราวตามอนุมัติได้แล้ว การปล่อยการเปิดเผยและผู้รับผิดชอบค้างไว้ทำให้ไม่ได้ลดความเสี่ยงที่ทำได้\n- ข้อ D ไม่ถูกต้อง: Segmentation ลดการเปิดเผยได้ แต่ไม่ได้แก้ซอฟต์แวร์ Controller ที่มีช่องโหว่ จึงต้องติดตามการแก้ไขต่อ",
    "explanation_detail": {
      "correct": {
        "en": "Authorized compensating controls reduce exposure while the vulnerability remains owned and tracked for tested remediation within the safe operational window.",
        "th": "มาตรการชดเชยที่อนุมัติลดการเปิดเผยระหว่างที่ยังมีช่องโหว่ โดยมีผู้รับผิดชอบและติดตามการแก้ไขที่ทดสอบแล้วในช่วงปฏิบัติการที่ปลอดภัย"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This ignores the stated physical-process consequence and the authorized safe-maintenance plan.",
          "text_th": "วิธีนี้ละเลยผลต่อกระบวนการกายภาพที่ระบุและแผนบำรุงรักษาปลอดภัยที่อนุมัติ"
        },
        {
          "letter": "C",
          "text_en": "The approved temporary restrictions are available now; leaving exposure and ownership unaddressed wastes that permitted risk reduction.",
          "text_th": "สามารถจำกัดชั่วคราวตามอนุมัติได้แล้ว การปล่อยการเปิดเผยและผู้รับผิดชอบค้างไว้ทำให้ไม่ได้ลดความเสี่ยงที่ทำได้"
        },
        {
          "letter": "D",
          "text_en": "Segmentation can reduce exposure but does not repair vulnerable controller software; remediation must remain tracked.",
          "text_th": "Segmentation ลดการเปิดเผยได้ แต่ไม่ได้แก้ซอฟต์แวร์ Controller ที่มีช่องโหว่ จึงต้องติดตามการแก้ไขต่อ"
        }
      ]
    }
  },
  {
    "id": 683,
    "dom": 4,
    "question": "A camera sends recordings to an internal recorder, obtains time from an approved time server, and receives signed updates through a managed update gateway. It needs no direct Internet access. Testing finds it can also contact finance servers. Which policy BEST matches its documented functions?",
    "options": [
      "Permit recording traffic but block both time and update services",
      "Permit only the recorder, approved time and update services; deny unrelated paths",
      "Block all camera communications until the device can run workstation antivirus",
      "Permit access to the entire internal network because the camera has signed firmware"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. This preserves every stated operational and maintenance dependency while removing unnecessary reachability, including finance and direct Internet paths. Option A is incorrect: Those services are explicit required dependencies. Removing them unnecessarily undermines operation and supported maintenance. Option C is incorrect: This breaks required recording and maintenance without using the available scoped network control; constrained-device protection need not copy workstation tooling. Option D is incorrect: Signed software updates do not establish a business need for finance-server access.",
    "short_explanation_en": "IoT flow restrictions should preserve documented operation and maintenance while excluding unnecessary destinations.",
    "question_th": "กล้องส่งภาพบันทึกไปยัง Recorder ภายใน รับเวลาจาก Time Server ที่อนุมัติ และรับ Signed Update ผ่าน Managed Update Gateway โดยไม่ต้องเข้า Internet โดยตรง การทดสอบพบว่ายังติดต่อเซิร์ฟเวอร์การเงินได้ นโยบายใดตรงกับหน้าที่ที่บันทึกไว้ที่สุด?",
    "options_th": [
      "อนุญาตการบันทึก แต่ปิดทั้งบริการเวลาและอัปเดต",
      "อนุญาตเฉพาะ Recorder บริการเวลาและอัปเดตที่อนุมัติ และปฏิเสธเส้นทางอื่น",
      "ปิดการสื่อสารกล้องทั้งหมดจนกว่าจะติดตั้ง Antivirus แบบเครื่องทำงานได้",
      "อนุญาตทั้งเครือข่ายภายในเพราะกล้องใช้ Firmware ที่ลงนาม"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: วิธีนี้คงความพึ่งพาด้านงานและบำรุงรักษาที่ระบุทั้งหมด พร้อมถอนการเข้าถึงที่ไม่จำเป็น รวมถึงการเงินและ Internet โดยตรง\n- ข้อ A ไม่ถูกต้อง: บริการเหล่านั้นเป็นความพึ่งพาที่โจทย์ระบุว่าจำเป็น การตัดออกกระทบการทำงานและการบำรุงรักษาโดยไม่จำเป็น\n- ข้อ C ไม่ถูกต้อง: วิธีนี้ทำให้งานบันทึกและบำรุงรักษาหยุด โดยไม่ใช้การควบคุมเครือข่ายแบบจำกัดที่มีอยู่ การป้องกันอุปกรณ์จำกัดทรัพยากรไม่ต้องใช้เครื่องมือเหมือนเครื่องทำงาน\n- ข้อ D ไม่ถูกต้อง: การอัปเดตซอฟต์แวร์ที่ลงนามไม่ได้ยืนยันความจำเป็นให้เข้าถึงเซิร์ฟเวอร์การเงิน",
    "explanation_detail": {
      "correct": {
        "en": "This preserves every stated operational and maintenance dependency while removing unnecessary reachability, including finance and direct Internet paths.",
        "th": "วิธีนี้คงความพึ่งพาด้านงานและบำรุงรักษาที่ระบุทั้งหมด พร้อมถอนการเข้าถึงที่ไม่จำเป็น รวมถึงการเงินและ Internet โดยตรง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Those services are explicit required dependencies. Removing them unnecessarily undermines operation and supported maintenance.",
          "text_th": "บริการเหล่านั้นเป็นความพึ่งพาที่โจทย์ระบุว่าจำเป็น การตัดออกกระทบการทำงานและการบำรุงรักษาโดยไม่จำเป็น"
        },
        {
          "letter": "C",
          "text_en": "This breaks required recording and maintenance without using the available scoped network control; constrained-device protection need not copy workstation tooling.",
          "text_th": "วิธีนี้ทำให้งานบันทึกและบำรุงรักษาหยุด โดยไม่ใช้การควบคุมเครือข่ายแบบจำกัดที่มีอยู่ การป้องกันอุปกรณ์จำกัดทรัพยากรไม่ต้องใช้เครื่องมือเหมือนเครื่องทำงาน"
        },
        {
          "letter": "D",
          "text_en": "Signed software updates do not establish a business need for finance-server access.",
          "text_th": "การอัปเดตซอฟต์แวร์ที่ลงนามไม่ได้ยืนยันความจำเป็นให้เข้าถึงเซิร์ฟเวอร์การเงิน"
        }
      ]
    }
  },
  {
    "id": 684,
    "dom": 4,
    "question": "A proposed design uses one multi-interface firewall with separate Internet, DMZ, and internal interfaces. Rules allow public HTTPS to the DMZ web server and deny direct Internet access to the internal database. A reviewer rejects it solely because a DMZ must use two firewall appliances. Which assessment is MOST accurate?",
    "options": [
      "Move the database into the DMZ so the firewall no longer needs an internal boundary",
      "Reject it because using a single appliance makes all three zones one broadcast domain",
      "Accept it as fully resilient because three interfaces provide three independent firewalls",
      "A single-appliance DMZ can implement the boundaries; verify policy and assess resilience separately"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. A multi-interface firewall is a valid DMZ architecture. Effective restrictions need verification, while common-appliance failure and availability are separate design considerations. Option A is incorrect: This changes the stated separation goal rather than evaluating whether the proposed boundaries enforce it. Option B is incorrect: One firewall can have distinct interfaces/zones; appliance count does not determine that all networks share one broadcast domain. Option C is incorrect: Separate interfaces do not create independent appliances or prove high availability.",
    "short_explanation_en": "Judge DMZ policy boundaries and resilience explicitly; two firewall appliances are not a universal definition.",
    "question_th": "แบบเครือข่ายใช้ Firewall หลาย Interface ตัวเดียว แยก Internet, DMZ และภายใน กฎอนุญาต HTTPS สาธารณะไปยังเว็บใน DMZ และห้าม Internet เข้าฐานข้อมูลภายในโดยตรง ผู้ทบทวนปฏิเสธเพียงเพราะ DMZ ต้องมี Firewall สองเครื่อง การประเมินใดถูกต้องที่สุด?",
    "options_th": [
      "ย้ายฐานข้อมูลเข้า DMZ เพื่อไม่ต้องมีขอบเขตภายในที่ Firewall",
      "ปฏิเสธเพราะใช้เครื่องเดียวทำให้ทั้งสาม Zone เป็น Broadcast Domain เดียว",
      "ยอมรับว่าทนต่อความล้มเหลวครบถ้วนเพราะสาม Interface คือ Firewall อิสระสามตัว",
      "DMZ แบบเครื่องเดียวทำขอบเขตได้ ควรตรวจกฎและประเมินความทนต่อความล้มเหลวแยกกัน"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: Firewall หลาย Interface เป็นสถาปัตยกรรม DMZ ที่ใช้ได้ ต้องตรวจข้อจำกัดที่มีผลจริง ส่วนความล้มเหลวของเครื่องร่วมและ Availability เป็นประเด็นออกแบบอีกด้าน\n- ข้อ A ไม่ถูกต้อง: วิธีนี้เปลี่ยนเป้าหมายการแยกที่กำหนด แทนที่จะประเมินว่าขอบเขตที่เสนอทำตามเป้าหมายหรือไม่\n- ข้อ B ไม่ถูกต้อง: Firewall ตัวเดียวมี Interface/Zone แยกได้ จำนวนเครื่องไม่ได้กำหนดว่าทุกเครือข่ายต้องมี Broadcast Domain เดียว\n- ข้อ C ไม่ถูกต้อง: Interface แยกไม่ได้สร้างอุปกรณ์อิสระหรือพิสูจน์ High Availability",
    "explanation_detail": {
      "correct": {
        "en": "A multi-interface firewall is a valid DMZ architecture. Effective restrictions need verification, while common-appliance failure and availability are separate design considerations.",
        "th": "Firewall หลาย Interface เป็นสถาปัตยกรรม DMZ ที่ใช้ได้ ต้องตรวจข้อจำกัดที่มีผลจริง ส่วนความล้มเหลวของเครื่องร่วมและ Availability เป็นประเด็นออกแบบอีกด้าน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This changes the stated separation goal rather than evaluating whether the proposed boundaries enforce it.",
          "text_th": "วิธีนี้เปลี่ยนเป้าหมายการแยกที่กำหนด แทนที่จะประเมินว่าขอบเขตที่เสนอทำตามเป้าหมายหรือไม่"
        },
        {
          "letter": "B",
          "text_en": "One firewall can have distinct interfaces/zones; appliance count does not determine that all networks share one broadcast domain.",
          "text_th": "Firewall ตัวเดียวมี Interface/Zone แยกได้ จำนวนเครื่องไม่ได้กำหนดว่าทุกเครือข่ายต้องมี Broadcast Domain เดียว"
        },
        {
          "letter": "C",
          "text_en": "Separate interfaces do not create independent appliances or prove high availability.",
          "text_th": "Interface แยกไม่ได้สร้างอุปกรณ์อิสระหรือพิสูจน์ High Availability"
        }
      ]
    }
  },
  {
    "id": 685,
    "dom": 4,
    "question": "A DMZ web service may send required requests to an internal application, which may query a database. All other new connections between these zones are denied. The team confirms that the rules match this policy. Which assessment of the remaining protection needs is MOST appropriate?",
    "options": [
      "Encrypting the inter-zone connections would remove the need for application-request validation",
      "Default denial of other connections also validates requests carried on the permitted paths",
      "A clean known-signature scan at the perimeter would establish authorization for internal calls",
      "An attack could abuse the permitted application path if application controls fail"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Segmentation constrains paths but does not establish that every permitted request is authorized or safe. Application/data controls and monitoring remain relevant on required paths. Option A is incorrect: Encryption protects communication in transit but can also carry a malicious request; application-level validation and authorization remain separate needs. Option B is incorrect: A network permission decision does not itself validate the content or resource authorization of each application request. Option C is incorrect: Recognizing known attack patterns does not establish that each permitted internal call is authorized, nor exclude unfamiliar abuse.",
    "short_explanation_en": "Segmentation limits reachability; application controls still protect requests on necessary paths.",
    "question_th": "เว็บใน DMZ ส่งคำขอที่จำเป็นไปยังแอปภายในได้ และแอป Query ฐานข้อมูลได้ การเริ่มเชื่อมต่ออื่นระหว่าง Zone ถูกปฏิเสธ ทีมตรวจแล้วว่ากฎตรงตามนโยบายนี้ การประเมินความต้องการป้องกันที่เหลือใดเหมาะสมที่สุด?",
    "options_th": [
      "การเข้ารหัสระหว่าง Zone จะทำให้ไม่ต้องตรวจยืนยันคำขอของแอป",
      "การปฏิเสธการเชื่อมต่ออื่นโดยปริยายตรวจยืนยันคำขอบนเส้นทางที่อนุญาตด้วย",
      "ผลตรวจ Signature ที่ขอบเครือข่ายซึ่งไม่พบการโจมตีจะยืนยันสิทธิ์ของคำขอภายใน",
      "การโจมตีอาจใช้เส้นทางแอปที่อนุญาตหากมาตรการของแอปล้มเหลว"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: Segmentation จำกัดเส้นทาง แต่ไม่ได้ยืนยันว่าทุกคำขอที่ผ่านได้รับอนุญาตหรือปลอดภัย มาตรการแอป/ข้อมูลและการติดตามยังจำเป็นบนเส้นทางที่ต้องใช้\n- ข้อ A ไม่ถูกต้อง: การเข้ารหัสป้องกันการสื่อสารระหว่างทางแต่ยังส่งคำขออันตรายได้ การตรวจคำขอและ Authorization ระดับแอปยังเป็นความต้องการแยกต่างหาก\n- ข้อ B ไม่ถูกต้อง: การตัดสินอนุญาตระดับเครือข่ายไม่ได้ตรวจเนื้อหาหรือสิทธิ์ทรัพยากรของทุกคำขอในแอปในตัว\n- ข้อ C ไม่ถูกต้อง: การตรวจรูปแบบโจมตีที่รู้จักไม่ได้ยืนยันว่าทุกคำขอภายในที่ผ่านได้รับอนุญาต หรือขจัดการใช้ผิดที่ไม่เคยรู้จัก",
    "explanation_detail": {
      "correct": {
        "en": "Segmentation constrains paths but does not establish that every permitted request is authorized or safe. Application/data controls and monitoring remain relevant on required paths.",
        "th": "Segmentation จำกัดเส้นทาง แต่ไม่ได้ยืนยันว่าทุกคำขอที่ผ่านได้รับอนุญาตหรือปลอดภัย มาตรการแอป/ข้อมูลและการติดตามยังจำเป็นบนเส้นทางที่ต้องใช้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Encryption protects communication in transit but can also carry a malicious request; application-level validation and authorization remain separate needs.",
          "text_th": "การเข้ารหัสป้องกันการสื่อสารระหว่างทางแต่ยังส่งคำขออันตรายได้ การตรวจคำขอและ Authorization ระดับแอปยังเป็นความต้องการแยกต่างหาก"
        },
        {
          "letter": "B",
          "text_en": "A network permission decision does not itself validate the content or resource authorization of each application request.",
          "text_th": "การตัดสินอนุญาตระดับเครือข่ายไม่ได้ตรวจเนื้อหาหรือสิทธิ์ทรัพยากรของทุกคำขอในแอปในตัว"
        },
        {
          "letter": "C",
          "text_en": "Recognizing known attack patterns does not establish that each permitted internal call is authorized, nor exclude unfamiliar abuse.",
          "text_th": "การตรวจรูปแบบโจมตีที่รู้จักไม่ได้ยืนยันว่าทุกคำขอภายในที่ผ่านได้รับอนุญาต หรือขจัดการใช้ผิดที่ไม่เคยรู้จัก"
        }
      ]
    }
  },
  {
    "id": 686,
    "dom": 4,
    "question": "Guest devices are in VLAN 20 and payroll servers are in VLAN 30. A router forwards traffic between them using a permit-all policy. An authorized test from the guest VLAN reaches the payroll service, although guests have no business need for it. Which change MOST directly corrects this exposure?",
    "options": [
      "Create an additional guest subnet with the same unrestricted forwarding policy",
      "Change the guest VLAN identifier while retaining permit-all routing",
      "Replace the permit-all rule with the approved inter-VLAN traffic restrictions",
      "Rename the payroll VLAN as a protected zone without changing forwarding"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. Different VLANs already provide Layer 2 separation. The demonstrated exposure is the permissive routed path, so enforcing the required Layer 3 policy directly addresses it. Option A is incorrect: Another subnet does not fix an overbroad Layer 3 access policy. Option B is incorrect: Renumbering does not restrict the routed path that caused the exposure. Option D is incorrect: A zone label cannot enforce a restriction while the effective policy still permits the traffic.",
    "short_explanation_en": "VLAN separation needs appropriate enforcement on any routed path between the VLANs.",
    "question_th": "อุปกรณ์ Guest อยู่ VLAN 20 และเซิร์ฟเวอร์เงินเดือนอยู่ VLAN 30 Router ส่งทราฟฟิกระหว่างกันด้วยนโยบายอนุญาตทั้งหมด การทดสอบที่ได้รับอนุมัติจาก Guest เข้าบริการเงินเดือนได้ ทั้งที่ไม่มีความจำเป็นทางธุรกิจ การเปลี่ยนใดแก้การเปิดเผยนี้ได้ตรงที่สุด?",
    "options_th": [
      "สร้าง Subnet Guest เพิ่มโดยใช้ Forwarding ที่ไม่จำกัดเช่นเดิม",
      "เปลี่ยนเลข VLAN ของ Guest แต่คง Routing ที่อนุญาตทั้งหมด",
      "แทนกฎอนุญาตทั้งหมดด้วยข้อจำกัดทราฟฟิกระหว่าง VLAN ที่อนุมัติ",
      "เปลี่ยนชื่อ VLAN เงินเดือนเป็น Protected Zone โดยไม่แก้ Forwarding"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: VLAN ต่างกันแยกระดับ Layer 2 แล้ว การเปิดเผยเกิดจากเส้นทาง Routing ที่อนุญาตกว้าง จึงต้องบังคับนโยบาย Layer 3 ที่จำเป็นเพื่อแก้ตรงจุด\n- ข้อ A ไม่ถูกต้อง: Subnet เพิ่มไม่ได้แก้นโยบายเข้าถึงระดับ Layer 3 ที่กว้างเกินไป\n- ข้อ B ไม่ถูกต้อง: การเปลี่ยนเลขไม่ได้จำกัดเส้นทาง Routing ที่ทำให้เข้าถึงได้\n- ข้อ D ไม่ถูกต้อง: ป้ายชื่อ Zone บังคับข้อจำกัดไม่ได้เมื่อนโยบายที่มีผลยังอนุญาตทราฟฟิก",
    "explanation_detail": {
      "correct": {
        "en": "Different VLANs already provide Layer 2 separation. The demonstrated exposure is the permissive routed path, so enforcing the required Layer 3 policy directly addresses it.",
        "th": "VLAN ต่างกันแยกระดับ Layer 2 แล้ว การเปิดเผยเกิดจากเส้นทาง Routing ที่อนุญาตกว้าง จึงต้องบังคับนโยบาย Layer 3 ที่จำเป็นเพื่อแก้ตรงจุด"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Another subnet does not fix an overbroad Layer 3 access policy.",
          "text_th": "Subnet เพิ่มไม่ได้แก้นโยบายเข้าถึงระดับ Layer 3 ที่กว้างเกินไป"
        },
        {
          "letter": "B",
          "text_en": "Renumbering does not restrict the routed path that caused the exposure.",
          "text_th": "การเปลี่ยนเลขไม่ได้จำกัดเส้นทาง Routing ที่ทำให้เข้าถึงได้"
        },
        {
          "letter": "D",
          "text_en": "A zone label cannot enforce a restriction while the effective policy still permits the traffic.",
          "text_th": "ป้ายชื่อ Zone บังคับข้อจำกัดไม่ได้เมื่อนโยบายที่มีผลยังอนุญาตทราฟฟิก"
        }
      ]
    }
  },
  {
    "id": 687,
    "dom": 4,
    "question": "Two application workloads share a large server segment. Only workload A needs the database service; workload B must not reach it. Managed host agents can enforce workload-specific rules, but the organization has no software-defined networking platform. Which approach BEST meets the stated need?",
    "options": [
      "Block both workloads from the database so they have identical permissions",
      "Permit the entire segment until a software-defined networking product is purchased",
      "Allow both workloads because sharing a segment establishes a shared business need",
      "Use the managed agents to permit A's required service and deny B's database path"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Granular workload policy can be implemented with endpoint agents/firewalls. The available enforcement can meet the scoped requirement without waiting for a specific product category. Option A is incorrect: This unnecessarily removes workload A's required service; the goal is differentiated permitted flows. Option B is incorrect: The stated host agents already supply an enforcement option; SDN is not the sole prerequisite for granular policy. Option C is incorrect: Network proximity does not establish that B needs the database; the stem explicitly says otherwise.",
    "short_explanation_en": "Micro-segmentation is a granular policy goal with multiple enforcement options, including host agents.",
    "question_th": "Workload แอปสองชุดอยู่ใน Server Segment ขนาดใหญ่เดียวกัน มีเพียง A ที่ต้องใช้บริการฐานข้อมูล ส่วน B ต้องเข้าไม่ได้ Host Agent ที่บริหารจัดการบังคับกฎเฉพาะ Workload ได้ แต่องค์กรไม่มี Platform SDN แนวทางใดตรงตามความต้องการที่สุด?",
    "options_th": [
      "ปิดทั้งสอง Workload ไม่ให้ใช้ฐานข้อมูลเพื่อให้มีสิทธิ์เหมือนกัน",
      "อนุญาตทั้ง Segment จนกว่าจะซื้อ SDN",
      "อนุญาตทั้งสองเพราะอยู่ Segment เดียวกันจึงมีความจำเป็นร่วม",
      "ใช้ Agent ที่บริหารจัดการอนุญาตบริการที่ A ต้องใช้และปฏิเสธเส้นทางฐานข้อมูลของ B"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: นโยบายละเอียดระดับ Workload ทำผ่าน Endpoint Agent/Firewall ได้ กลไกที่มีอยู่ทำตามความต้องการแบบจำกัดได้โดยไม่ต้องรอสินค้าเฉพาะประเภท\n- ข้อ A ไม่ถูกต้อง: วิธีนี้ตัดบริการจำเป็นของ A โดยไม่จำเป็น เป้าหมายคือแยกสิ่งที่อนุญาตตาม Workload\n- ข้อ B ไม่ถูกต้อง: Host Agent ที่ระบุให้ทางเลือกบังคับใช้ได้แล้ว SDN ไม่ใช่เงื่อนไขเดียวสำหรับนโยบายละเอียด\n- ข้อ C ไม่ถูกต้อง: ความใกล้กันในเครือข่ายไม่ยืนยันว่า B ต้องใช้ฐานข้อมูล และโจทย์ระบุว่าไม่ต้องใช้",
    "explanation_detail": {
      "correct": {
        "en": "Granular workload policy can be implemented with endpoint agents/firewalls. The available enforcement can meet the scoped requirement without waiting for a specific product category.",
        "th": "นโยบายละเอียดระดับ Workload ทำผ่าน Endpoint Agent/Firewall ได้ กลไกที่มีอยู่ทำตามความต้องการแบบจำกัดได้โดยไม่ต้องรอสินค้าเฉพาะประเภท"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "This unnecessarily removes workload A's required service; the goal is differentiated permitted flows.",
          "text_th": "วิธีนี้ตัดบริการจำเป็นของ A โดยไม่จำเป็น เป้าหมายคือแยกสิ่งที่อนุญาตตาม Workload"
        },
        {
          "letter": "B",
          "text_en": "The stated host agents already supply an enforcement option; SDN is not the sole prerequisite for granular policy.",
          "text_th": "Host Agent ที่ระบุให้ทางเลือกบังคับใช้ได้แล้ว SDN ไม่ใช่เงื่อนไขเดียวสำหรับนโยบายละเอียด"
        },
        {
          "letter": "C",
          "text_en": "Network proximity does not establish that B needs the database; the stem explicitly says otherwise.",
          "text_th": "ความใกล้กันในเครือข่ายไม่ยืนยันว่า B ต้องใช้ฐานข้อมูล และโจทย์ระบุว่าไม่ต้องใช้"
        }
      ]
    }
  },
  {
    "id": 688,
    "dom": 4,
    "question": "A service has a firewall, endpoint protection, and a monitoring system. A review finds that the same shared administrator credential can disable all three through one management console. Which finding BEST describes the design concern?",
    "options": [
      "Adding a fourth tool under the same unrestricted console would remove the dependency",
      "A common administration compromise could undermine several defensive layers",
      "The controls have become redundant copies because they protect the same service",
      "The presence of three tools establishes high availability despite the shared credential"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Several controls do not prove independent failure boundaries. The stated shared credential/console creates a concrete path that could disable multiple layers. Option A is incorrect: Another layer controlled through the same compromise path does not remove that shared administrative dependency. Option C is incorrect: Different defensive functions can complement each other. The concern is their shared administration dependency, not that they protect one service. Option D is incorrect: Availability and independent management require separate design evidence; counting tools does not establish them.",
    "short_explanation_en": "Layered defenses can share a failure dependency; evaluate administration paths as well as control count.",
    "question_th": "บริการมี Firewall, Endpoint Protection และระบบติดตาม การทบทวนพบว่าข้อมูลยืนยันตัวตนผู้ดูแลแบบใช้ร่วมชุดเดียวปิดทั้งสามได้ผ่าน Management Console เดียว ผลตรวจใดอธิบายข้อกังวลของแบบนี้ได้เหมาะสมที่สุด?",
    "options_th": [
      "เพิ่มเครื่องมือที่สี่ใต้ Console เดิมที่มีสิทธิ์ไม่จำกัดจะลบความพึ่งพานี้",
      "การยึดช่องทางบริหารร่วมอาจทำให้การป้องกันหลายชั้นเสียผลพร้อมกัน",
      "มาตรการกลายเป็นสำเนาซ้ำซ้อนเพราะป้องกันบริการเดียวกัน",
      "การมีสามเครื่องมือยืนยัน High Availability แม้ใช้ Credential ร่วม"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การมีหลายมาตรการไม่ได้พิสูจน์ว่ามีขอบเขตความล้มเหลวอิสระ Credential/Console ร่วมที่ระบุสร้างช่องทางปิดหลายชั้นได้\n- ข้อ A ไม่ถูกต้อง: การเพิ่มชั้นที่ควบคุมผ่านช่องทางถูกยึดเดียวกันไม่ได้ลบความพึ่งพาด้านบริหารร่วม\n- ข้อ C ไม่ถูกต้อง: หน้าที่ป้องกันที่ต่างกันเสริมกันได้ ปัญหาคือความพึ่งพาด้านบริหารร่วม ไม่ใช่การป้องกันบริการเดียวกัน\n- ข้อ D ไม่ถูกต้อง: Availability และการบริหารที่เป็นอิสระต้องมีหลักฐานออกแบบแยก การนับเครื่องมือไม่ยืนยันคุณสมบัตินี้",
    "explanation_detail": {
      "correct": {
        "en": "Several controls do not prove independent failure boundaries. The stated shared credential/console creates a concrete path that could disable multiple layers.",
        "th": "การมีหลายมาตรการไม่ได้พิสูจน์ว่ามีขอบเขตความล้มเหลวอิสระ Credential/Console ร่วมที่ระบุสร้างช่องทางปิดหลายชั้นได้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Another layer controlled through the same compromise path does not remove that shared administrative dependency.",
          "text_th": "การเพิ่มชั้นที่ควบคุมผ่านช่องทางถูกยึดเดียวกันไม่ได้ลบความพึ่งพาด้านบริหารร่วม"
        },
        {
          "letter": "C",
          "text_en": "Different defensive functions can complement each other. The concern is their shared administration dependency, not that they protect one service.",
          "text_th": "หน้าที่ป้องกันที่ต่างกันเสริมกันได้ ปัญหาคือความพึ่งพาด้านบริหารร่วม ไม่ใช่การป้องกันบริการเดียวกัน"
        },
        {
          "letter": "D",
          "text_en": "Availability and independent management require separate design evidence; counting tools does not establish them.",
          "text_th": "Availability และการบริหารที่เป็นอิสระต้องมีหลักฐานออกแบบแยก การนับเครื่องมือไม่ยืนยันคุณสมบัตินี้"
        }
      ]
    }
  },
  {
    "id": 689,
    "dom": 4,
    "question": "A proposed Zero Trust design retains VPNs and network firewalls. It also requires explicit policy decisions for resource sessions using requester and device context, rather than granting access because a device is inside the network. Which assessment is MOST accurate?",
    "options": [
      "The retained VPNs and firewalls can complement the resource-access decisions",
      "Placing a resource in an internal VLAN makes the context checks unnecessary",
      "Zero Trust requires removing both VPNs and firewalls before resource checks are useful",
      "Successful VPN connection should replace the proposed resource-access decisions"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Zero Trust rejects implicit trust from location; it does not require discarding network protections. Those controls can coexist with explicit session/resource authorization. Option B is incorrect: An internal network location is precisely the kind of implicit trust the stated design avoids. Option C is incorrect: There is no such universal removal requirement; resource-centric decisions can supplement existing boundaries. Option D is incorrect: Reachability through a protected tunnel does not itself authorize a session to each resource.",
    "short_explanation_en": "Zero Trust can retain network defenses while refusing to equate network location with resource authorization.",
    "question_th": "แบบ Zero Trust ที่เสนอคง VPN กับ Network Firewall ไว้ และกำหนดให้ตัดสินตามนโยบายสำหรับ Session ที่เข้าทรัพยากรโดยใช้บริบทผู้ร้องขอกับอุปกรณ์ แทนการให้สิทธิ์เพียงเพราะอยู่ภายในเครือข่าย การประเมินใดถูกต้องที่สุด?",
    "options_th": [
      "VPN และ Firewall ที่คงไว้สามารถเสริมการตัดสินสิทธิ์เข้าทรัพยากรได้",
      "การวางทรัพยากรใน VLAN ภายในทำให้ไม่ต้องตรวจบริบท",
      "Zero Trust ต้องถอดทั้ง VPN และ Firewall ก่อนการตรวจทรัพยากรจึงมีประโยชน์",
      "การเชื่อม VPN สำเร็จควรแทนการตัดสินสิทธิ์เข้าทรัพยากรที่เสนอ"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: Zero Trust ไม่ให้ความเชื่อถือโดยปริยายจากตำแหน่ง แต่ไม่ได้กำหนดให้ถอดการป้องกันเครือข่าย มาตรการเหล่านี้ใช้ร่วมกับ Authorization ที่ชัดเจนต่อ Session/ทรัพยากรได้\n- ข้อ B ไม่ถูกต้อง: ตำแหน่งเครือข่ายภายในคือความเชื่อถือโดยปริยายที่แบบนี้ตั้งใจหลีกเลี่ยง\n- ข้อ C ไม่ถูกต้อง: ไม่มีข้อกำหนดสากลให้ถอดเช่นนั้น การตัดสินที่เน้นทรัพยากรเสริมขอบเขตที่มีอยู่ได้\n- ข้อ D ไม่ถูกต้อง: การเข้าถึงผ่าน Tunnel ที่ป้องกันไม่ได้ให้สิทธิ์ Session ต่อทรัพยากรแต่ละรายการในตัว",
    "explanation_detail": {
      "correct": {
        "en": "Zero Trust rejects implicit trust from location; it does not require discarding network protections. Those controls can coexist with explicit session/resource authorization.",
        "th": "Zero Trust ไม่ให้ความเชื่อถือโดยปริยายจากตำแหน่ง แต่ไม่ได้กำหนดให้ถอดการป้องกันเครือข่าย มาตรการเหล่านี้ใช้ร่วมกับ Authorization ที่ชัดเจนต่อ Session/ทรัพยากรได้"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "An internal network location is precisely the kind of implicit trust the stated design avoids.",
          "text_th": "ตำแหน่งเครือข่ายภายในคือความเชื่อถือโดยปริยายที่แบบนี้ตั้งใจหลีกเลี่ยง"
        },
        {
          "letter": "C",
          "text_en": "There is no such universal removal requirement; resource-centric decisions can supplement existing boundaries.",
          "text_th": "ไม่มีข้อกำหนดสากลให้ถอดเช่นนั้น การตัดสินที่เน้นทรัพยากรเสริมขอบเขตที่มีอยู่ได้"
        },
        {
          "letter": "D",
          "text_en": "Reachability through a protected tunnel does not itself authorize a session to each resource.",
          "text_th": "การเข้าถึงผ่าน Tunnel ที่ป้องกันไม่ได้ให้สิทธิ์ Session ต่อทรัพยากรแต่ละรายการในตัว"
        }
      ]
    }
  },
  {
    "id": 690,
    "dom": 4,
    "question": "After an approved firewall change, guest clients should reach the Internet but not an internal reporting service. Server clients should still reach that service. Which validation provides the BEST evidence that the change meets both security and business requirements?",
    "options": [
      "Test guest Internet access, guest denial to reporting, and server access to reporting",
      "Confirm Internet access from a guest client and close the change",
      "Check that the new rule description contains the approved change number",
      "Confirm the reporting service rejects one guest request without testing approved clients"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The three tests check the explicitly permitted and prohibited paths. Together they evaluate effective restriction and preservation of required service. Option B is incorrect: This checks one permitted path but neither the required denial nor continued reporting access from servers. Option C is incorrect: A traceable description is useful documentation but does not demonstrate effective permitted or denied traffic. Option D is incorrect: A denial alone could also result from breaking the service for every client; it does not prove legitimate access remains.",
    "short_explanation_en": "Validate both allowed and denied flows so containment does not silently break required service.",
    "question_th": "หลังเปลี่ยน Firewall ตามอนุมัติ Guest ควรเข้า Internet ได้แต่เข้า Reporting Service ภายในไม่ได้ ส่วน Server Client ต้องยังใช้บริการนี้ได้ การตรวจใดให้หลักฐานดีที่สุดว่าการเปลี่ยนตรงทั้งความปลอดภัยและงานธุรกิจ?",
    "options_th": [
      "ทดสอบ Guest ไป Internet, Guest ถูกปฏิเสธจากรายงาน และ Server เข้ารายงานได้",
      "ยืนยันว่า Guest เข้า Internet ได้แล้วปิดการเปลี่ยนแปลง",
      "ตรวจว่าคำอธิบายกฎใหม่มีเลขการเปลี่ยนแปลงที่อนุมัติ",
      "ยืนยันว่า Reporting Service ปฏิเสธ Guest หนึ่งคำขอโดยไม่ทดสอบ Client ที่อนุมัติ"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: ทั้งสามการทดสอบตรวจเส้นทางอนุญาตและห้ามตามที่ระบุ จึงประเมินทั้งข้อจำกัดที่มีผลจริงและการคงบริการจำเป็น\n- ข้อ B ไม่ถูกต้อง: วิธีนี้ตรวจเส้นทางอนุญาตหนึ่งเส้น แต่ไม่ตรวจสิ่งที่ต้องห้ามหรือการใช้รายงานจาก Server ต่อไป\n- ข้อ C ไม่ถูกต้อง: คำอธิบายที่ตรวจย้อนกลับได้มีประโยชน์ด้านเอกสาร แต่ไม่แสดงการอนุญาตหรือปฏิเสธทราฟฟิกที่มีผลจริง\n- ข้อ D ไม่ถูกต้อง: การปฏิเสธอย่างเดียวอาจเกิดจากบริการเสียสำหรับทุก Client จึงไม่พิสูจน์ว่างานที่ถูกต้องยังใช้ได้",
    "explanation_detail": {
      "correct": {
        "en": "The three tests check the explicitly permitted and prohibited paths. Together they evaluate effective restriction and preservation of required service.",
        "th": "ทั้งสามการทดสอบตรวจเส้นทางอนุญาตและห้ามตามที่ระบุ จึงประเมินทั้งข้อจำกัดที่มีผลจริงและการคงบริการจำเป็น"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "This checks one permitted path but neither the required denial nor continued reporting access from servers.",
          "text_th": "วิธีนี้ตรวจเส้นทางอนุญาตหนึ่งเส้น แต่ไม่ตรวจสิ่งที่ต้องห้ามหรือการใช้รายงานจาก Server ต่อไป"
        },
        {
          "letter": "C",
          "text_en": "A traceable description is useful documentation but does not demonstrate effective permitted or denied traffic.",
          "text_th": "คำอธิบายที่ตรวจย้อนกลับได้มีประโยชน์ด้านเอกสาร แต่ไม่แสดงการอนุญาตหรือปฏิเสธทราฟฟิกที่มีผลจริง"
        },
        {
          "letter": "D",
          "text_en": "A denial alone could also result from breaking the service for every client; it does not prove legitimate access remains.",
          "text_th": "การปฏิเสธอย่างเดียวอาจเกิดจากบริการเสียสำหรับทุก Client จึงไม่พิสูจน์ว่างานที่ถูกต้องยังใช้ได้"
        }
      ]
    }
  },
  {
    "id": 691,
    "dom": 4,
    "question": "A cloud service has two documented capabilities: users provision an approved test environment through a portal without staff handling each request, and the service adds or releases capacity as workload demand changes. Which pairing correctly describes these capabilities?",
    "options": [
      "Measured service for the portal; resource pooling for capacity changes",
      "On-demand self-service for the portal; rapid elasticity for capacity changes",
      "Resource pooling for the portal; measured service for capacity changes",
      "Rapid elasticity for the portal; broad network access for capacity changes"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Consumer provisioning without manual provider handling illustrates self-service. Adding and releasing capacity with demand illustrates elasticity, a separate characteristic. Option A is incorrect: Metering does not establish self-service, and pooling does not specifically describe demand-responsive capacity adjustment. Option C is incorrect: Shared resource allocation and usage measurement do not describe the stated request workflow and demand-responsive capacity behavior. Option D is incorrect: The portal example concerns automated consumer provisioning, while broad network access concerns access mechanisms rather than adding/releasing capacity.",
    "short_explanation_en": "Self-service describes provisioning interaction; elasticity describes capacity changing with demand.",
    "question_th": "บริการ Cloud มีความสามารถสองอย่างที่บันทึกไว้ ผู้ใช้จัดเตรียมสภาพแวดล้อมทดสอบที่อนุมัติผ่าน Portal โดยไม่ต้องให้เจ้าหน้าที่ดำเนินการทุกคำขอ และบริการเพิ่มหรือคืนความจุตามความต้องการ Workload คู่คุณลักษณะใดอธิบายได้ถูกต้อง?",
    "options_th": [
      "Measured Service สำหรับ Portal และ Resource Pooling สำหรับการเปลี่ยนความจุ",
      "On-demand Self-service สำหรับ Portal และ Rapid Elasticity สำหรับการเปลี่ยนความจุ",
      "Resource Pooling สำหรับ Portal และ Measured Service สำหรับการเปลี่ยนความจุ",
      "Rapid Elasticity สำหรับ Portal และ Broad Network Access สำหรับการเปลี่ยนความจุ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ผู้ใช้จัดเตรียมโดยไม่ต้องมีผู้ให้บริการดำเนินการทุกครั้งแสดง Self-service ส่วนการเพิ่ม/คืนความจุตามงานแสดง Elasticity ซึ่งเป็นอีกคุณลักษณะหนึ่ง\n- ข้อ A ไม่ถูกต้อง: การวัดไม่ยืนยัน Self-service และ Pooling ไม่ได้ระบุการปรับความจุตามความต้องการโดยเฉพาะ\n- ข้อ C ไม่ถูกต้อง: การจัดสรรทรัพยากรร่วมกับการวัดการใช้ไม่ได้อธิบายขั้นตอนร้องขอและการเปลี่ยนความจุตามงานที่ระบุ\n- ข้อ D ไม่ถูกต้อง: ตัวอย่าง Portal เกี่ยวกับการจัดเตรียมโดยผู้ใช้อัตโนมัติ ส่วน Broad Network Access เกี่ยวกับกลไกเข้าถึง ไม่ใช่เพิ่ม/คืนความจุ",
    "explanation_detail": {
      "correct": {
        "en": "Consumer provisioning without manual provider handling illustrates self-service. Adding and releasing capacity with demand illustrates elasticity, a separate characteristic.",
        "th": "ผู้ใช้จัดเตรียมโดยไม่ต้องมีผู้ให้บริการดำเนินการทุกครั้งแสดง Self-service ส่วนการเพิ่ม/คืนความจุตามงานแสดง Elasticity ซึ่งเป็นอีกคุณลักษณะหนึ่ง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Metering does not establish self-service, and pooling does not specifically describe demand-responsive capacity adjustment.",
          "text_th": "การวัดไม่ยืนยัน Self-service และ Pooling ไม่ได้ระบุการปรับความจุตามความต้องการโดยเฉพาะ"
        },
        {
          "letter": "C",
          "text_en": "Shared resource allocation and usage measurement do not describe the stated request workflow and demand-responsive capacity behavior.",
          "text_th": "การจัดสรรทรัพยากรร่วมกับการวัดการใช้ไม่ได้อธิบายขั้นตอนร้องขอและการเปลี่ยนความจุตามงานที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "The portal example concerns automated consumer provisioning, while broad network access concerns access mechanisms rather than adding/releasing capacity.",
          "text_th": "ตัวอย่าง Portal เกี่ยวกับการจัดเตรียมโดยผู้ใช้อัตโนมัติ ส่วน Broad Network Access เกี่ยวกับกลไกเข้าถึง ไม่ใช่เพิ่ม/คืนความจุ"
        }
      ]
    }
  },
  {
    "id": 692,
    "dom": 4,
    "question": "A service meters storage and processing use and provides usage reports. An analyst concludes that the definition of measured service rules out subscription commitments, request charges, or other billing dimensions. Which assessment is MOST accurate?",
    "options": [
      "Any subscription commitment means the service cannot have measured usage",
      "Usage measurement supports visibility and control; the actual pricing terms must be examined separately",
      "A usage report proves the bill contains only processing duration",
      "Measured service requires every customer to receive the same effective unit price"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Measured service describes monitoring, controlling and reporting resource use. It does not impose one tariff; provider/plan terms can contain other billing dimensions. Option A is incorrect: A contractual commitment can coexist with usage measurement; these describe different aspects of the service. Option C is incorrect: A report is evidence of measurement, not evidence that every other charge dimension is absent. Option D is incorrect: Usage monitoring and reporting do not require identical commercial terms or rates for every consumer.",
    "short_explanation_en": "Measured service establishes metering and reporting, not a universal price formula.",
    "question_th": "บริการวัดการใช้ Storage และการประมวลผลพร้อมรายงานการใช้ นักวิเคราะห์สรุปว่านิยาม Measured Service ห้ามมีค่าผูกพันแบบ Subscription ค่าคำขอ หรือมิติคิดค่าใช้จ่ายอื่น การประเมินใดถูกต้องที่สุด?",
    "options_th": [
      "การมีข้อผูกพัน Subscription ทำให้บริการวัดการใช้ไม่ได้",
      "การวัดการใช้ช่วยให้เห็นและควบคุมการใช้ ส่วนเงื่อนไขราคาจริงต้องตรวจแยก",
      "รายงานการใช้พิสูจน์ว่าค่าใช้จ่ายมีเพียงเวลาประมวลผล",
      "Measured Service กำหนดให้ลูกค้าทุกรายได้ราคาต่อหน่วยที่มีผลเท่ากัน"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: Measured Service อธิบายการติดตาม ควบคุมและรายงานการใช้ทรัพยากร ไม่ได้บังคับสูตรราคาเดียว เงื่อนไขผู้ให้บริการ/Plan อาจมีมิติคิดค่าใช้จ่ายอื่น\n- ข้อ A ไม่ถูกต้อง: ข้อผูกพันตามสัญญาอยู่ร่วมกับการวัดการใช้ได้ เพราะอธิบายคนละด้านของบริการ\n- ข้อ C ไม่ถูกต้อง: รายงานเป็นหลักฐานการวัด ไม่ใช่หลักฐานว่าไม่มีมิติคิดค่าใช้จ่ายอื่น\n- ข้อ D ไม่ถูกต้อง: การติดตามและรายงานการใช้ไม่ได้กำหนดให้ผู้ใช้ทุกรายมีเงื่อนไขการค้าหรืออัตราเดียวกัน",
    "explanation_detail": {
      "correct": {
        "en": "Measured service describes monitoring, controlling and reporting resource use. It does not impose one tariff; provider/plan terms can contain other billing dimensions.",
        "th": "Measured Service อธิบายการติดตาม ควบคุมและรายงานการใช้ทรัพยากร ไม่ได้บังคับสูตรราคาเดียว เงื่อนไขผู้ให้บริการ/Plan อาจมีมิติคิดค่าใช้จ่ายอื่น"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A contractual commitment can coexist with usage measurement; these describe different aspects of the service.",
          "text_th": "ข้อผูกพันตามสัญญาอยู่ร่วมกับการวัดการใช้ได้ เพราะอธิบายคนละด้านของบริการ"
        },
        {
          "letter": "C",
          "text_en": "A report is evidence of measurement, not evidence that every other charge dimension is absent.",
          "text_th": "รายงานเป็นหลักฐานการวัด ไม่ใช่หลักฐานว่าไม่มีมิติคิดค่าใช้จ่ายอื่น"
        },
        {
          "letter": "D",
          "text_en": "Usage monitoring and reporting do not require identical commercial terms or rates for every consumer.",
          "text_th": "การติดตามและรายงานการใช้ไม่ได้กำหนดให้ผู้ใช้ทุกรายมีเงื่อนไขการค้าหรืออัตราเดียวกัน"
        }
      ]
    }
  },
  {
    "id": 693,
    "dom": 4,
    "question": "A team moves its own application from IaaS virtual machines to a PaaS service. The service agreement assigns host operating-system maintenance to the provider; the team still deploys its application code. Which update BEST reflects the changed security boundary?",
    "options": [
      "Use provider evidence for the managed OS and retain customer code and access-control checks",
      "Classify the application as SaaS solely because the service has a browser console",
      "Remove application-code security checks because the platform is now managed",
      "Continue treating the team as the patch operator for the provider-managed host OS"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. PaaS transfers the stated platform maintenance while retaining customer application/data/access duties. Assurance should follow the actual component responsibilities. Option B is incorrect: A management interface does not determine the service model; the team still deploys its own application onto the platform. Option C is incorrect: Managing the platform does not remove the team's responsibility for the code it deploys. Option D is incorrect: This contradicts the explicit new service boundary; OS assurance needs suitable provider evidence rather than assuming the team operates it.",
    "short_explanation_en": "A service-model change moves some control ownership; remap evidence without discarding retained customer duties.",
    "question_th": "ทีมย้ายแอปที่พัฒนาเองจาก VM แบบ IaaS ไป PaaS ข้อตกลงบริการกำหนดให้ผู้ให้บริการดูแล Host OS แต่ทีมยัง Deploy Code แอปเอง การปรับใดสะท้อนขอบเขตความปลอดภัยที่เปลี่ยนไปได้ดีที่สุด?",
    "options_th": [
      "ใช้หลักฐานผู้ให้บริการสำหรับ OS ที่บริหารให้ และคงการตรวจ Code กับการควบคุมสิทธิ์ของลูกค้า",
      "จัดแอปเป็น SaaS เพียงเพราะบริการมี Browser Console",
      "ยกเลิกการตรวจความปลอดภัย Code แอปเพราะ Platform มีผู้ดูแลแล้ว",
      "คงให้ทีมเป็นผู้ Patch Host OS ที่ผู้ให้บริการบริหาร"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: PaaS โอนการดูแล Platform ตามที่ระบุ แต่ลูกค้ายังดูแลแอป/ข้อมูล/สิทธิ์ การประเมินจึงควรตามหน้าที่จริงของแต่ละส่วนประกอบ\n- ข้อ B ไม่ถูกต้อง: หน้าจอบริหารไม่ได้กำหนด Service Model ทีมยัง Deploy แอปเองบน Platform\n- ข้อ C ไม่ถูกต้อง: การดูแล Platform ไม่ได้ถอนหน้าที่ของทีมต่อ Code ที่ตน Deploy\n- ข้อ D ไม่ถูกต้อง: วิธีนี้ขัดกับขอบเขตบริการใหม่ที่ระบุ การประเมิน OS ต้องใช้หลักฐานผู้ให้บริการที่เหมาะสม ไม่ใช่สรุปว่าทีมเป็นผู้ดำเนินการ",
    "explanation_detail": {
      "correct": {
        "en": "PaaS transfers the stated platform maintenance while retaining customer application/data/access duties. Assurance should follow the actual component responsibilities.",
        "th": "PaaS โอนการดูแล Platform ตามที่ระบุ แต่ลูกค้ายังดูแลแอป/ข้อมูล/สิทธิ์ การประเมินจึงควรตามหน้าที่จริงของแต่ละส่วนประกอบ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "A management interface does not determine the service model; the team still deploys its own application onto the platform.",
          "text_th": "หน้าจอบริหารไม่ได้กำหนด Service Model ทีมยัง Deploy แอปเองบน Platform"
        },
        {
          "letter": "C",
          "text_en": "Managing the platform does not remove the team's responsibility for the code it deploys.",
          "text_th": "การดูแล Platform ไม่ได้ถอนหน้าที่ของทีมต่อ Code ที่ตน Deploy"
        },
        {
          "letter": "D",
          "text_en": "This contradicts the explicit new service boundary; OS assurance needs suitable provider evidence rather than assuming the team operates it.",
          "text_th": "วิธีนี้ขัดกับขอบเขตบริการใหม่ที่ระบุ การประเมิน OS ต้องใช้หลักฐานผู้ให้บริการที่เหมาะสม ไม่ใช่สรุปว่าทีมเป็นผู้ดำเนินการ"
        }
      ]
    }
  },
  {
    "id": 694,
    "dom": 4,
    "question": "An IaaS guest-OS vulnerability ticket is marked resolved after the provider announces a hypervisor patch. The customer administers the guest OS, and no guest update or version check is recorded. Which evidence is needed to substantiate resolution of this specific ticket?",
    "options": [
      "A report showing that the VM's storage remains encrypted",
      "Confirmation that the VM can restart after the hypervisor maintenance",
      "The provider's hypervisor maintenance notice with the VM's account number attached",
      "Verification that the affected guest-OS component has been remediated"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Evidence must concern the affected component, such as a verified guest update/version or validated fix. Provider hypervisor maintenance addresses a different layer and cannot by itself close this guest finding. Option A is incorrect: Storage encryption is a different control and does not demonstrate guest-OS vulnerability remediation. Option B is incorrect: Restart success establishes an operational result, not removal of the specific guest-OS weakness. Option C is incorrect: Identifying the account does not change the layer addressed by the notice; it still does not demonstrate a guest-OS fix.",
    "short_explanation_en": "Remediation evidence must address the affected cloud component; a host-layer patch does not prove a guest-OS fix.",
    "question_th": "Ticket ช่องโหว่ Guest OS ใน IaaS ถูกระบุว่าแก้แล้วหลังผู้ให้บริการประกาศ Patch Hypervisor ลูกค้าบริหาร Guest OS และไม่มีบันทึกอัปเดตหรือตรวจ Version ของ Guest ต้องมีหลักฐานใดเพื่อยืนยันการแก้ไข Ticket นี้?",
    "options_th": [
      "รายงานว่า Storage ของ VM ยังเข้ารหัสอยู่",
      "การยืนยันว่า VM Restart ได้หลังบำรุงรักษา Hypervisor",
      "ประกาศบำรุงรักษา Hypervisor ของผู้ให้บริการพร้อมแนบหมายเลขบัญชี VM",
      "การตรวจยืนยันว่าส่วนประกอบ Guest OS ที่มีปัญหาได้รับการแก้ไข"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: หลักฐานต้องตรงกับส่วนประกอบที่มีปัญหา เช่น ตรวจอัปเดต/Version ของ Guest หรือยืนยันผลแก้ไข การดูแล Hypervisor เป็นอีกชั้นจึงปิดผลตรวจ Guest นี้ด้วยตัวมันเองไม่ได้\n- ข้อ A ไม่ถูกต้อง: การเข้ารหัส Storage เป็นคนละมาตรการและไม่แสดงการแก้ช่องโหว่ Guest OS\n- ข้อ B ไม่ถูกต้อง: การ Restart สำเร็จยืนยันผลด้านการทำงาน ไม่ใช่การแก้จุดอ่อนเฉพาะของ Guest OS\n- ข้อ C ไม่ถูกต้อง: การระบุบัญชีไม่ได้เปลี่ยนชั้นที่ประกาศนั้นแก้ไข จึงยังไม่แสดงการแก้ Guest OS",
    "explanation_detail": {
      "correct": {
        "en": "Evidence must concern the affected component, such as a verified guest update/version or validated fix. Provider hypervisor maintenance addresses a different layer and cannot by itself close this guest finding.",
        "th": "หลักฐานต้องตรงกับส่วนประกอบที่มีปัญหา เช่น ตรวจอัปเดต/Version ของ Guest หรือยืนยันผลแก้ไข การดูแล Hypervisor เป็นอีกชั้นจึงปิดผลตรวจ Guest นี้ด้วยตัวมันเองไม่ได้"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Storage encryption is a different control and does not demonstrate guest-OS vulnerability remediation.",
          "text_th": "การเข้ารหัส Storage เป็นคนละมาตรการและไม่แสดงการแก้ช่องโหว่ Guest OS"
        },
        {
          "letter": "B",
          "text_en": "Restart success establishes an operational result, not removal of the specific guest-OS weakness.",
          "text_th": "การ Restart สำเร็จยืนยันผลด้านการทำงาน ไม่ใช่การแก้จุดอ่อนเฉพาะของ Guest OS"
        },
        {
          "letter": "C",
          "text_en": "Identifying the account does not change the layer addressed by the notice; it still does not demonstrate a guest-OS fix.",
          "text_th": "การระบุบัญชีไม่ได้เปลี่ยนชั้นที่ประกาศนั้นแก้ไข จึงยังไม่แสดงการแก้ Guest OS"
        }
      ]
    }
  },
  {
    "id": 695,
    "dom": 4,
    "question": "A cloud infrastructure is provisioned for the exclusive use of one organization. A third party owns the hardware and operates it off premises. An audit note says it cannot be a private cloud because the organization does not own the data center. Which assessment is correct under the NIST deployment definitions?",
    "options": [
      "The arrangement can be private cloud because exclusive use does not require in-house ownership or location",
      "Third-party ownership makes it community cloud even with one consuming organization",
      "The hardware arrangement makes it hybrid without any second cloud infrastructure",
      "Off-premises operation makes it public regardless of exclusive use"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. NIST permits private infrastructure to be owned/operated by the organization, a third party or a combination and to exist on or off premises. Exclusive use is the relevant stated property. Option B is incorrect: Community cloud involves a specific community with shared concerns, not merely an external operator. Option C is incorrect: Hybrid requires a composition of distinct cloud infrastructures with the relevant integration, not just outsourced ownership. Option D is incorrect: Private cloud can be off premises. Physical location alone does not determine deployment classification.",
    "short_explanation_en": "Private-cloud classification concerns exclusive use; third-party ownership and off-premises operation are permitted.",
    "question_th": "Cloud Infrastructure จัดไว้ให้ใช้งานเฉพาะองค์กรเดียว บุคคลที่สามเป็นเจ้าของ Hardware และดำเนินการนอกสถานที่ บันทึก Audit ระบุว่าเป็น Private Cloud ไม่ได้เพราะองค์กรไม่ได้เป็นเจ้าของ Data Center การประเมินใดถูกต้องตามนิยาม Deployment ของ NIST?",
    "options_th": [
      "รูปแบบนี้เป็น Private Cloud ได้ เพราะการใช้เฉพาะองค์กรไม่บังคับให้เป็นเจ้าของเองหรือตั้งภายใน",
      "การเป็นเจ้าของโดยบุคคลที่สามทำให้เป็น Community แม้มีองค์กรผู้ใช้เพียงรายเดียว",
      "การจัด Hardware แบบนี้ทำให้เป็น Hybrid แม้ไม่มี Cloud Infrastructure ชุดที่สอง",
      "การอยู่นอกสถานที่ทำให้เป็น Public โดยไม่ต้องพิจารณาการใช้เฉพาะองค์กร"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: NIST อนุญาตให้ Private Infrastructure มีองค์กร บุคคลที่สาม หรือร่วมกันเป็นเจ้าของ/ผู้ดำเนินการ และอยู่ภายในหรือภายนอกได้ คุณสมบัติที่เกี่ยวข้องในโจทย์คือการใช้เฉพาะองค์กร\n- ข้อ B ไม่ถูกต้อง: Community Cloud เกี่ยวกับชุมชนเฉพาะที่มีประเด็นร่วม ไม่ใช่เพียงมีผู้ดำเนินการภายนอก\n- ข้อ C ไม่ถูกต้อง: Hybrid ต้องมีองค์ประกอบของ Cloud Infrastructure ที่แยกกันพร้อมการเชื่อมที่เกี่ยวข้อง ไม่ใช่เพียงจ้างภายนอกเป็นเจ้าของ\n- ข้อ D ไม่ถูกต้อง: Private Cloud อยู่นอกสถานที่ได้ ตำแหน่งกายภาพอย่างเดียวไม่ได้กำหนด Deployment",
    "explanation_detail": {
      "correct": {
        "en": "NIST permits private infrastructure to be owned/operated by the organization, a third party or a combination and to exist on or off premises. Exclusive use is the relevant stated property.",
        "th": "NIST อนุญาตให้ Private Infrastructure มีองค์กร บุคคลที่สาม หรือร่วมกันเป็นเจ้าของ/ผู้ดำเนินการ และอยู่ภายในหรือภายนอกได้ คุณสมบัติที่เกี่ยวข้องในโจทย์คือการใช้เฉพาะองค์กร"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Community cloud involves a specific community with shared concerns, not merely an external operator.",
          "text_th": "Community Cloud เกี่ยวกับชุมชนเฉพาะที่มีประเด็นร่วม ไม่ใช่เพียงมีผู้ดำเนินการภายนอก"
        },
        {
          "letter": "C",
          "text_en": "Hybrid requires a composition of distinct cloud infrastructures with the relevant integration, not just outsourced ownership.",
          "text_th": "Hybrid ต้องมีองค์ประกอบของ Cloud Infrastructure ที่แยกกันพร้อมการเชื่อมที่เกี่ยวข้อง ไม่ใช่เพียงจ้างภายนอกเป็นเจ้าของ"
        },
        {
          "letter": "D",
          "text_en": "Private cloud can be off premises. Physical location alone does not determine deployment classification.",
          "text_th": "Private Cloud อยู่นอกสถานที่ได้ ตำแหน่งกายภาพอย่างเดียวไม่ได้กำหนด Deployment"
        }
      ]
    }
  },
  {
    "id": 696,
    "dom": 4,
    "question": "A research organization has its own private cloud. It also uses a separate community cloud reserved for participating research institutions with shared security requirements. The two remain distinct but are linked by technology enabling application and data portability. Which description BEST fits the combined arrangement?",
    "options": [
      "Public cloud because data can move between organizations",
      "Unconnected cloud use because hybrid requires a public/private pair",
      "Hybrid cloud composed of distinct private and community infrastructures",
      "A single private cloud because all participants have security requirements"
    ],
    "correct_idx": 2,
    "explanation": "Option C is correct. NIST hybrid composition can combine distinct private, community or public infrastructures with portability-enabling integration. It need not include a public cloud in every case. Option A is incorrect: The described community is restricted to participants; data portability does not establish open public use. Option B is incorrect: The stem explicitly supplies portability integration, and NIST's definition is broader than the common public/private example. Option D is incorrect: The infrastructures remain distinct and one serves a defined community of organizations, rather than exclusive use by the single research organization.",
    "short_explanation_en": "Hybrid describes integrated distinct cloud infrastructures, not exclusively a public/private pair.",
    "question_th": "องค์กรวิจัยมี Private Cloud ของตนและใช้ Community Cloud อีกชุดที่สงวนให้สถาบันวิจัยสมาชิกซึ่งมีข้อกำหนดความปลอดภัยร่วมกัน ทั้งสองยังแยกกันแต่เชื่อมด้วยเทคโนโลยีให้ย้ายแอปและข้อมูลได้ คำอธิบายใดตรงกับรูปแบบรวมที่สุด?",
    "options_th": [
      "Public Cloud เพราะข้อมูลเคลื่อนระหว่างองค์กรได้",
      "การใช้ Cloud ที่ไม่เชื่อมกัน เพราะ Hybrid ต้องเป็นคู่ Public/Private",
      "Hybrid Cloud ที่ประกอบด้วย Private และ Community Infrastructure ที่แยกกัน",
      "Private Cloud ชุดเดียวเพราะทุกสมาชิกมีข้อกำหนดความปลอดภัย"
    ],
    "explanation_th": "ข้อ C ถูกต้อง: องค์ประกอบ Hybrid ตาม NIST รวม Private, Community หรือ Public ที่แยกกันด้วยการเชื่อมให้ย้ายงานได้ ไม่จำเป็นต้องมี Public Cloud ทุกกรณี\n- ข้อ A ไม่ถูกต้อง: Community ที่ระบุจำกัดเฉพาะสมาชิก การย้ายข้อมูลไม่ได้แสดงว่าเปิดให้สาธารณะใช้\n- ข้อ B ไม่ถูกต้อง: โจทย์ระบุการเชื่อมเพื่อย้ายงานชัดเจน และนิยาม NIST กว้างกว่าตัวอย่าง Public/Private ที่พบบ่อย\n- ข้อ D ไม่ถูกต้อง: Infrastructure ยังแยกกัน และชุดหนึ่งให้บริการชุมชนองค์กรที่กำหนด ไม่ใช่ให้เฉพาะองค์กรวิจัยเดียว",
    "explanation_detail": {
      "correct": {
        "en": "NIST hybrid composition can combine distinct private, community or public infrastructures with portability-enabling integration. It need not include a public cloud in every case.",
        "th": "องค์ประกอบ Hybrid ตาม NIST รวม Private, Community หรือ Public ที่แยกกันด้วยการเชื่อมให้ย้ายงานได้ ไม่จำเป็นต้องมี Public Cloud ทุกกรณี"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "The described community is restricted to participants; data portability does not establish open public use.",
          "text_th": "Community ที่ระบุจำกัดเฉพาะสมาชิก การย้ายข้อมูลไม่ได้แสดงว่าเปิดให้สาธารณะใช้"
        },
        {
          "letter": "B",
          "text_en": "The stem explicitly supplies portability integration, and NIST's definition is broader than the common public/private example.",
          "text_th": "โจทย์ระบุการเชื่อมเพื่อย้ายงานชัดเจน และนิยาม NIST กว้างกว่าตัวอย่าง Public/Private ที่พบบ่อย"
        },
        {
          "letter": "D",
          "text_en": "The infrastructures remain distinct and one serves a defined community of organizations, rather than exclusive use by the single research organization.",
          "text_th": "Infrastructure ยังแยกกัน และชุดหนึ่งให้บริการชุมชนองค์กรที่กำหนด ไม่ใช่ให้เฉพาะองค์กรวิจัยเดียว"
        }
      ]
    }
  },
  {
    "id": 697,
    "dom": 4,
    "question": "A cloud storage service encrypts newly uploaded objects by default. The customer controls an access policy that currently allows unauthenticated reads of a confidential dataset. The provider confirms that encryption is operating as documented. Which response BEST addresses the demonstrated exposure?",
    "options": [
      "Correct the customer-controlled policy and verify that only approved readers can retrieve the data",
      "Ask the provider to enable default encryption and leave the access policy unchanged",
      "Treat provider-managed storage as evidence that customer access configuration is outside scope",
      "Move the dataset to another region while retaining the same anonymous-read policy"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. Encryption at rest does not decide who is authorized to read through the service. Correcting and testing the access policy addresses the retained customer duty and the observed exposure. Option B is incorrect: Encryption is already enabled and does not correct the policy permitting unauthorized reads. Option C is incorrect: The service boundary explicitly leaves the access policy under customer control. Option D is incorrect: A location change does not withdraw the permission that causes the stated disclosure.",
    "short_explanation_en": "Provider encryption and customer access authorization are separate controls; default encryption does not fix public sharing.",
    "question_th": "บริการ Cloud Storage เข้ารหัส Object ที่อัปโหลดใหม่โดยปริยาย ลูกค้าควบคุม Access Policy ที่ขณะนี้อนุญาตให้อ่านชุดข้อมูลลับโดยไม่ยืนยันตัวตน ผู้ให้บริการยืนยันว่าการเข้ารหัสทำงานตามเอกสาร การตอบสนองใดแก้การเปิดเผยที่พบได้ดีที่สุด?",
    "options_th": [
      "แก้นโยบายที่ลูกค้าควบคุมและตรวจว่าเฉพาะผู้อ่านที่อนุมัติเรียกข้อมูลได้",
      "ขอให้ผู้ให้บริการเปิดการเข้ารหัสโดยปริยายและคง Access Policy เดิม",
      "ถือว่าผู้ให้บริการดูแล Storage จึงไม่ต้องพิจารณาการตั้งค่าสิทธิ์ของลูกค้า",
      "ย้ายข้อมูลไปอีก Region โดยคงนโยบายอ่านแบบไม่ยืนยันตัวตน"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: การเข้ารหัสขณะเก็บไม่ได้ตัดสินว่าใครมีสิทธิ์อ่านผ่านบริการ การแก้และทดสอบ Access Policy ตรงกับหน้าที่ที่ลูกค้ายังมีและแก้การเปิดเผยที่พบ\n- ข้อ B ไม่ถูกต้อง: การเข้ารหัสเปิดอยู่แล้ว และไม่ได้แก้นโยบายที่อนุญาตการอ่านโดยไม่มีสิทธิ์\n- ข้อ C ไม่ถูกต้อง: ขอบเขตบริการระบุชัดว่าลูกค้าควบคุม Access Policy\n- ข้อ D ไม่ถูกต้อง: การเปลี่ยนตำแหน่งไม่ได้ถอนสิทธิ์ที่ทำให้เปิดเผยตามโจทย์",
    "explanation_detail": {
      "correct": {
        "en": "Encryption at rest does not decide who is authorized to read through the service. Correcting and testing the access policy addresses the retained customer duty and the observed exposure.",
        "th": "การเข้ารหัสขณะเก็บไม่ได้ตัดสินว่าใครมีสิทธิ์อ่านผ่านบริการ การแก้และทดสอบ Access Policy ตรงกับหน้าที่ที่ลูกค้ายังมีและแก้การเปิดเผยที่พบ"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Encryption is already enabled and does not correct the policy permitting unauthorized reads.",
          "text_th": "การเข้ารหัสเปิดอยู่แล้ว และไม่ได้แก้นโยบายที่อนุญาตการอ่านโดยไม่มีสิทธิ์"
        },
        {
          "letter": "C",
          "text_en": "The service boundary explicitly leaves the access policy under customer control.",
          "text_th": "ขอบเขตบริการระบุชัดว่าลูกค้าควบคุม Access Policy"
        },
        {
          "letter": "D",
          "text_en": "A location change does not withdraw the permission that causes the stated disclosure.",
          "text_th": "การเปลี่ยนตำแหน่งไม่ได้ถอนสิทธิ์ที่ทำให้เปิดเผยตามโจทย์"
        }
      ]
    }
  },
  {
    "id": 698,
    "dom": 4,
    "question": "A public-cloud service supports standard network clients and pools infrastructure among tenants. Its agreement assigns physical-network operation to the provider and tenant inbound-rule configuration to the customer. Which conclusion follows?",
    "options": [
      "Shared security requires provider and customer to configure half of every rule",
      "These cloud characteristics coexist with the customer's responsibility for its inbound rules",
      "Broad network access requires the customer to allow inbound connections from every network",
      "Pooling automatically validates the customer's inbound rules"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. Standard network access and shared allocation do not erase the stated control boundary. The customer must configure its rules despite provider operation of the underlying network. Option A is incorrect: Shared responsibility is allocated by components and controls, not an equal split of each task. Option C is incorrect: Broad network access describes access capabilities, not unrestricted authorization to customer resources. Option D is incorrect: Sharing infrastructure does not establish that tenant-specific rules match the customer's approved traffic policy.",
    "short_explanation_en": "Cloud characteristics do not determine authorization or erase the component-specific responsibility boundary.",
    "question_th": "บริการ Public Cloud รองรับ Network Client มาตรฐานและใช้ Infrastructure ร่วมระหว่าง Tenant ข้อตกลงให้ผู้ให้บริการดูแล Physical Network และลูกค้าตั้งกฎขาเข้าของ Tenant ข้อสรุปใดถูกต้อง?",
    "options_th": [
      "Shared Security ต้องให้ผู้ให้บริการกับลูกค้าตั้งกฎคนละครึ่งทุกข้อ",
      "คุณลักษณะ Cloud เหล่านี้อยู่ร่วมกับหน้าที่ลูกค้าในการตั้งกฎขาเข้าของตน",
      "Broad Network Access กำหนดให้ลูกค้าอนุญาตขาเข้าจากทุกเครือข่าย",
      "Pooling ตรวจยืนยันกฎขาเข้าของลูกค้าโดยอัตโนมัติ"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: การเข้าผ่านเครือข่ายมาตรฐานและการจัดสรรร่วมไม่ได้ลบขอบเขตควบคุมที่ระบุ ลูกค้าต้องตั้งกฎแม้ผู้ให้บริการดูแลเครือข่ายพื้นฐาน\n- ข้อ A ไม่ถูกต้อง: Shared Responsibility แบ่งตามส่วนประกอบและมาตรการ ไม่ใช่แบ่งทุกงานเท่ากัน\n- ข้อ C ไม่ถูกต้อง: Broad Network Access อธิบายความสามารถในการเข้าถึง ไม่ใช่สิทธิ์ไม่จำกัดต่อทรัพยากรลูกค้า\n- ข้อ D ไม่ถูกต้อง: การใช้ Infrastructure ร่วมไม่ได้ยืนยันว่ากฎ Tenant ตรงกับนโยบายทราฟฟิกที่ลูกค้าอนุมัติ",
    "explanation_detail": {
      "correct": {
        "en": "Standard network access and shared allocation do not erase the stated control boundary. The customer must configure its rules despite provider operation of the underlying network.",
        "th": "การเข้าผ่านเครือข่ายมาตรฐานและการจัดสรรร่วมไม่ได้ลบขอบเขตควบคุมที่ระบุ ลูกค้าต้องตั้งกฎแม้ผู้ให้บริการดูแลเครือข่ายพื้นฐาน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Shared responsibility is allocated by components and controls, not an equal split of each task.",
          "text_th": "Shared Responsibility แบ่งตามส่วนประกอบและมาตรการ ไม่ใช่แบ่งทุกงานเท่ากัน"
        },
        {
          "letter": "C",
          "text_en": "Broad network access describes access capabilities, not unrestricted authorization to customer resources.",
          "text_th": "Broad Network Access อธิบายความสามารถในการเข้าถึง ไม่ใช่สิทธิ์ไม่จำกัดต่อทรัพยากรลูกค้า"
        },
        {
          "letter": "D",
          "text_en": "Sharing infrastructure does not establish that tenant-specific rules match the customer's approved traffic policy.",
          "text_th": "การใช้ Infrastructure ร่วมไม่ได้ยืนยันว่ากฎ Tenant ตรงกับนโยบายทราฟฟิกที่ลูกค้าอนุมัติ"
        }
      ]
    }
  },
  {
    "id": 699,
    "dom": 4,
    "question": "A function service manages the underlying servers. Its documented model requires the customer to rebuild and redeploy customer-supplied container images when their bundled libraries need updates. A vulnerable library is found in such an image. Which response BEST follows that boundary?",
    "options": [
      "The customer updates the image, tests it, and redeploys it through the approved process",
      "The customer restricts network access and closes the finding without replacing the library",
      "The customer closes the finding because function services do not expose server administration",
      "The customer waits for physical-server patching to replace the bundled library"
    ],
    "correct_idx": 0,
    "explanation": "Option A is correct. The stated model explicitly leaves the supplied image lifecycle with the customer. Abstracting server management does not transfer this code/dependency responsibility. Option B is incorrect: Network restrictions may reduce exposure but do not remove the vulnerable dependency or complete the stated image-update obligation. Option C is incorrect: A hidden server-management interface does not remove the vulnerable dependency or the explicit update obligation. Option D is incorrect: Patching underlying servers does not replace the library packaged in the customer's supplied image.",
    "short_explanation_en": "Serverless abstraction does not remove documented customer code, dependency or image-lifecycle duties.",
    "question_th": "บริการ Function ดูแล Server พื้นฐานให้ เอกสารกำหนดให้ลูกค้า Rebuild และ Redeploy Container Image ที่ลูกค้าจัดหาเมื่อ Library ภายในต้องอัปเดต มีการพบ Library ที่มีช่องโหว่ใน Image ดังกล่าว การตอบสนองใดตรงกับขอบเขตนี้ที่สุด?",
    "options_th": [
      "ลูกค้าอัปเดต Image ทดสอบและ Redeploy ตามขั้นตอนที่อนุมัติ",
      "ลูกค้าจำกัดเครือข่ายแล้วปิดผลตรวจโดยไม่แทน Library",
      "ลูกค้าปิดผลตรวจเพราะบริการ Function ไม่เปิดให้บริหาร Server",
      "ลูกค้ารอ Patch Physical Server เพื่อให้แทน Library ภายใน Image"
    ],
    "explanation_th": "ข้อ A ถูกต้อง: รูปแบบที่ระบุให้ลูกค้าดูแลวงจร Image ที่จัดหา การซ่อนงานบริหาร Server ไม่ได้โอนหน้าที่ Code/Dependency ส่วนนี้\n- ข้อ B ไม่ถูกต้อง: การจำกัดเครือข่ายลดการเปิดเผยได้ แต่ไม่ลบ Dependency ที่มีช่องโหว่หรือทำหน้าที่อัปเดต Image ตามที่ระบุให้เสร็จ\n- ข้อ C ไม่ถูกต้อง: การไม่เปิดหน้าบริหาร Server ไม่ได้ลบ Dependency ที่มีช่องโหว่หรือหน้าที่อัปเดตที่ระบุ\n- ข้อ D ไม่ถูกต้อง: การ Patch Server พื้นฐานไม่ได้แทน Library ที่บรรจุใน Image ของลูกค้า",
    "explanation_detail": {
      "correct": {
        "en": "The stated model explicitly leaves the supplied image lifecycle with the customer. Abstracting server management does not transfer this code/dependency responsibility.",
        "th": "รูปแบบที่ระบุให้ลูกค้าดูแลวงจร Image ที่จัดหา การซ่อนงานบริหาร Server ไม่ได้โอนหน้าที่ Code/Dependency ส่วนนี้"
      },
      "incorrect": [
        {
          "letter": "B",
          "text_en": "Network restrictions may reduce exposure but do not remove the vulnerable dependency or complete the stated image-update obligation.",
          "text_th": "การจำกัดเครือข่ายลดการเปิดเผยได้ แต่ไม่ลบ Dependency ที่มีช่องโหว่หรือทำหน้าที่อัปเดต Image ตามที่ระบุให้เสร็จ"
        },
        {
          "letter": "C",
          "text_en": "A hidden server-management interface does not remove the vulnerable dependency or the explicit update obligation.",
          "text_th": "การไม่เปิดหน้าบริหาร Server ไม่ได้ลบ Dependency ที่มีช่องโหว่หรือหน้าที่อัปเดตที่ระบุ"
        },
        {
          "letter": "D",
          "text_en": "Patching underlying servers does not replace the library packaged in the customer's supplied image.",
          "text_th": "การ Patch Server พื้นฐานไม่ได้แทน Library ที่บรรจุใน Image ของลูกค้า"
        }
      ]
    }
  },
  {
    "id": 700,
    "dom": 4,
    "question": "An application is deployed at two cloud providers, but both copies depend on one identity service and one database at the first provider. A report claims provider count alone demonstrates automatic failover during that provider's outage. Which evidence is MOST relevant to verifying the claim?",
    "options": [
      "A larger resource reservation at the second provider without changing dependencies",
      "A tested recovery path showing usable identity and data when the first provider is unavailable",
      "Separate logos and account numbers for the two providers",
      "A successful normal-day login through the first provider's identity service"
    ],
    "correct_idx": 1,
    "explanation": "Option B is correct. The claim depends on operational dependencies, not provider count. Testing the stated outage with the necessary identity/data path supplies relevant failover evidence. Option A is incorrect: Additional capacity does not establish access to required identity and data during the stated outage. Option C is incorrect: Different providers confirm multi-provider use, not independence from the named identity/database outage. Option D is incorrect: Normal operation with the dependency available does not demonstrate operation when that dependency fails.",
    "short_explanation_en": "Multiple cloud providers do not prove recovery; verify the dependencies needed during the claimed outage.",
    "question_th": "แอป Deploy ที่ผู้ให้บริการ Cloud สองราย แต่ทั้งสองสำเนาพึ่ง Identity Service เดียวและฐานข้อมูลเดียวที่รายแรก รายงานอ้างว่าจำนวนผู้ให้บริการอย่างเดียวพิสูจน์ Automatic Failover เมื่อรายแรกหยุดทำงาน หลักฐานใดเกี่ยวข้องที่สุดในการตรวจข้ออ้างนี้?",
    "options_th": [
      "การจองทรัพยากรเพิ่มที่รายที่สองโดยไม่แก้ความพึ่งพา",
      "เส้นทางกู้คืนที่ทดสอบแล้วว่าใช้ Identity และข้อมูลได้เมื่อรายแรกไม่พร้อม",
      "Logo และหมายเลขบัญชีแยกกันของผู้ให้บริการสองราย",
      "การ Login สำเร็จในวันปกติผ่าน Identity Service ของรายแรก"
    ],
    "explanation_th": "ข้อ B ถูกต้อง: ข้ออ้างขึ้นกับความพึ่งพาด้านปฏิบัติการ ไม่ใช่จำนวนผู้ให้บริการ การทดสอบเหตุที่ระบุพร้อมเส้นทาง Identity/ข้อมูลที่จำเป็นให้หลักฐาน Failover ที่เกี่ยวข้อง\n- ข้อ A ไม่ถูกต้อง: ความจุเพิ่มไม่ได้ยืนยันว่าจะเข้าถึง Identity กับข้อมูลที่จำเป็นได้เมื่อเกิดการหยุดทำงานตามโจทย์\n- ข้อ C ไม่ถูกต้อง: ผู้ให้บริการต่างกันยืนยันการใช้หลายราย ไม่ได้ยืนยันว่าเป็นอิสระจาก Identity/ฐานข้อมูลที่หยุดทำงาน\n- ข้อ D ไม่ถูกต้อง: การทำงานปกติเมื่อส่วนที่พึ่งพายังพร้อมไม่แสดงการทำงานเมื่อส่วนนั้นล้มเหลว",
    "explanation_detail": {
      "correct": {
        "en": "The claim depends on operational dependencies, not provider count. Testing the stated outage with the necessary identity/data path supplies relevant failover evidence.",
        "th": "ข้ออ้างขึ้นกับความพึ่งพาด้านปฏิบัติการ ไม่ใช่จำนวนผู้ให้บริการ การทดสอบเหตุที่ระบุพร้อมเส้นทาง Identity/ข้อมูลที่จำเป็นให้หลักฐาน Failover ที่เกี่ยวข้อง"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Additional capacity does not establish access to required identity and data during the stated outage.",
          "text_th": "ความจุเพิ่มไม่ได้ยืนยันว่าจะเข้าถึง Identity กับข้อมูลที่จำเป็นได้เมื่อเกิดการหยุดทำงานตามโจทย์"
        },
        {
          "letter": "C",
          "text_en": "Different providers confirm multi-provider use, not independence from the named identity/database outage.",
          "text_th": "ผู้ให้บริการต่างกันยืนยันการใช้หลายราย ไม่ได้ยืนยันว่าเป็นอิสระจาก Identity/ฐานข้อมูลที่หยุดทำงาน"
        },
        {
          "letter": "D",
          "text_en": "Normal operation with the dependency available does not demonstrate operation when that dependency fails.",
          "text_th": "การทำงานปกติเมื่อส่วนที่พึ่งพายังพร้อมไม่แสดงการทำงานเมื่อส่วนนั้นล้มเหลว"
        }
      ]
    }
  },
  {
    "id": 701,
    "dom": 4,
    "question": "A learning-based network monitor alerts because wireless sensors are sending data to a destination not seen in their normal pattern. A separate signature check finds no known attack pattern. Which interpretation is MOST appropriate for the analyst's report?",
    "options": [
      "The missing signature match establishes that the new destination is authorized",
      "The behavioral alert is invalid because security detection requires a matching signature",
      "The new destination alone establishes that every sensor is compromised",
      "The alert shows a baseline deviation that needs context, not a confirmed compromise"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Behavioral analysis can flag activity beyond known signatures. A legitimate change or malicious activity could explain the deviation, so the observed path and approved activity need assessment under procedure. Option A is incorrect: A signature check recognizes known patterns; absence of a match does not validate authorization or exclude unfamiliar threats. Option B is incorrect: Anomaly/learning-based detection can identify deviations without a known signature, although false positives and missed detections remain possible. Option C is incorrect: A deviation is not proof of malicious intent or compromise of every device.",
    "short_explanation_en": "Behavioral and signature evidence are complementary; an unusual flow needs context rather than an automatic compromise conclusion.",
    "question_th": "เครื่องมือติดตามเครือข่ายแบบเรียนรู้แจ้งเตือนเพราะ Wireless Sensor ส่งข้อมูลไปปลายทางที่ไม่เคยพบในรูปแบบปกติ การตรวจ Signature อีกชุดไม่พบรูปแบบโจมตีที่รู้จัก การตีความใดเหมาะสมที่สุดสำหรับรายงานของนักวิเคราะห์?",
    "options_th": [
      "การไม่ตรง Signature ยืนยันว่าปลายทางใหม่ได้รับอนุญาต",
      "การแจ้งพฤติกรรมใช้ไม่ได้เพราะการตรวจภัยต้องตรง Signature",
      "ปลายทางใหม่เพียงอย่างเดียวยืนยันว่า Sensor ทุกตัวถูกบุกรุก",
      "การแจ้งเตือนแสดงความเบี่ยงเบนจากค่าฐานที่ต้องตรวจบริบท ไม่ใช่ยืนยันการบุกรุก"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: การวิเคราะห์พฤติกรรมพบสิ่งที่เกิน Signature ที่รู้จักได้ ความเปลี่ยนแปลงที่ถูกต้องหรือการโจมตีต่างอธิบายความเบี่ยงเบนได้ จึงต้องประเมินเส้นทางที่พบกับงานที่อนุมัติตามขั้นตอน\n- ข้อ A ไม่ถูกต้อง: การตรวจ Signature รู้จักรูปแบบที่กำหนด การไม่ตรงไม่ได้ยืนยันสิทธิ์หรือตัดความเป็นไปได้ของภัยที่ไม่คุ้นเคย\n- ข้อ B ไม่ถูกต้อง: การตรวจ Anomaly/แบบเรียนรู้พบความเบี่ยงเบนโดยไม่มี Signature ที่รู้จักได้ แต่ยังมีการแจ้งผิดและพลาดได้\n- ข้อ C ไม่ถูกต้อง: ความเบี่ยงเบนไม่ใช่หลักฐานเจตนาร้ายหรือการบุกรุกอุปกรณ์ทุกตัว",
    "explanation_detail": {
      "correct": {
        "en": "Behavioral analysis can flag activity beyond known signatures. A legitimate change or malicious activity could explain the deviation, so the observed path and approved activity need assessment under procedure.",
        "th": "การวิเคราะห์พฤติกรรมพบสิ่งที่เกิน Signature ที่รู้จักได้ ความเปลี่ยนแปลงที่ถูกต้องหรือการโจมตีต่างอธิบายความเบี่ยงเบนได้ จึงต้องประเมินเส้นทางที่พบกับงานที่อนุมัติตามขั้นตอน"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "A signature check recognizes known patterns; absence of a match does not validate authorization or exclude unfamiliar threats.",
          "text_th": "การตรวจ Signature รู้จักรูปแบบที่กำหนด การไม่ตรงไม่ได้ยืนยันสิทธิ์หรือตัดความเป็นไปได้ของภัยที่ไม่คุ้นเคย"
        },
        {
          "letter": "B",
          "text_en": "Anomaly/learning-based detection can identify deviations without a known signature, although false positives and missed detections remain possible.",
          "text_th": "การตรวจ Anomaly/แบบเรียนรู้พบความเบี่ยงเบนโดยไม่มี Signature ที่รู้จักได้ แต่ยังมีการแจ้งผิดและพลาดได้"
        },
        {
          "letter": "C",
          "text_en": "A deviation is not proof of malicious intent or compromise of every device.",
          "text_th": "ความเบี่ยงเบนไม่ใช่หลักฐานเจตนาร้ายหรือการบุกรุกอุปกรณ์ทุกตัว"
        }
      ]
    }
  },
  {
    "id": 702,
    "dom": 4,
    "question": "An organization uses a provider-managed cloud platform for AI development. Policy prohibits development workloads from reading sensitive production datasets. The provider manages compute; the organization controls tenant network rules and dataset roles. Development and production are now in separate network zones. Which evidence is still needed to support compliance with the policy?",
    "options": [
      "Provider confirmation of compute maintenance without checking tenant controls",
      "Rapid elasticity tests instead of verification of network and dataset controls",
      "A valid development login as sufficient evidence of production dataset authorization",
      "Verification that effective network and dataset controls prevent development reads of the sensitive production datasets"
    ],
    "correct_idx": 3,
    "explanation": "Option D is correct. Verify the intended isolation and resource permissions, not just zone names. Legitimate cloud API reachability can remain while dataset permissions deny the prohibited reads. Provider-managed compute does not implement these customer-controlled policies. Option A is incorrect: Compute maintenance does not determine the customer's permitted network paths or dataset-role permissions. Option B is incorrect: Capacity scaling does not demonstrate enforcement of the required development/production access boundary. Option C is incorrect: A valid development identity does not grant production data rights and conflicts with the explicit prohibition.",
    "short_explanation_en": "Managed AI infrastructure still needs effective customer network isolation and dataset authorization controls.",
    "question_th": "องค์กรใช้ Cloud Platform ที่ผู้ให้บริการบริหารสำหรับพัฒนา AI นโยบายห้าม Development Workload อ่านชุดข้อมูล Production ที่สำคัญ ผู้ให้บริการดูแล Compute ส่วนองค์กรควบคุมกฎเครือข่าย Tenant และ Dataset Role ขณะนี้แยก Development กับ Production เป็นคนละ Zone แล้ว ยังต้องมีหลักฐานใดเพื่อสนับสนุนว่าทำตามนโยบาย?",
    "options_th": [
      "การยืนยันการดูแล Compute จากผู้ให้บริการโดยไม่ตรวจกฎ Tenant",
      "การทดสอบ Rapid Elasticity แทนการตรวจกฎเครือข่ายและข้อมูล",
      "การ Login Development ที่ถูกต้องเพียงพอยืนยันสิทธิ์ชุดข้อมูล Production",
      "การตรวจว่ามาตรการเครือข่ายและข้อมูลที่มีผลจริงป้องกัน Development อ่านชุดข้อมูล Production ที่สำคัญ"
    ],
    "explanation_th": "ข้อ D ถูกต้อง: ต้องตรวจการแยกและสิทธิ์ทรัพยากรตามที่ตั้งใจ ไม่ใช่เพียงชื่อ Zone เส้นทาง Cloud API ที่จำเป็นอาจยังเปิดได้ขณะที่สิทธิ์ชุดข้อมูลปฏิเสธการอ่านที่ห้าม ผู้ให้บริการดูแล Compute ไม่ได้กำหนดนโยบายเหล่านี้ที่ลูกค้าควบคุมแทนลูกค้า\n- ข้อ A ไม่ถูกต้อง: การดูแล Compute ไม่ได้กำหนดเส้นทางเครือข่ายหรือสิทธิ์ Dataset Role ที่ลูกค้าควบคุม\n- ข้อ B ไม่ถูกต้อง: การขยายความจุไม่ได้แสดงการบังคับขอบเขตสิทธิ์ Development/Production ที่กำหนด\n- ข้อ C ไม่ถูกต้อง: ตัวตน Development ที่ถูกต้องไม่ได้ให้สิทธิ์ข้อมูล Production และขัดกับข้อห้ามที่ระบุ",
    "explanation_detail": {
      "correct": {
        "en": "Verify the intended isolation and resource permissions, not just zone names. Legitimate cloud API reachability can remain while dataset permissions deny the prohibited reads. Provider-managed compute does not implement these customer-controlled policies.",
        "th": "ต้องตรวจการแยกและสิทธิ์ทรัพยากรตามที่ตั้งใจ ไม่ใช่เพียงชื่อ Zone เส้นทาง Cloud API ที่จำเป็นอาจยังเปิดได้ขณะที่สิทธิ์ชุดข้อมูลปฏิเสธการอ่านที่ห้าม ผู้ให้บริการดูแล Compute ไม่ได้กำหนดนโยบายเหล่านี้ที่ลูกค้าควบคุมแทนลูกค้า"
      },
      "incorrect": [
        {
          "letter": "A",
          "text_en": "Compute maintenance does not determine the customer's permitted network paths or dataset-role permissions.",
          "text_th": "การดูแล Compute ไม่ได้กำหนดเส้นทางเครือข่ายหรือสิทธิ์ Dataset Role ที่ลูกค้าควบคุม"
        },
        {
          "letter": "B",
          "text_en": "Capacity scaling does not demonstrate enforcement of the required development/production access boundary.",
          "text_th": "การขยายความจุไม่ได้แสดงการบังคับขอบเขตสิทธิ์ Development/Production ที่กำหนด"
        },
        {
          "letter": "C",
          "text_en": "A valid development identity does not grant production data rights and conflicts with the explicit prohibition.",
          "text_th": "ตัวตน Development ที่ถูกต้องไม่ได้ให้สิทธิ์ข้อมูล Production และขัดกับข้อห้ามที่ระบุ"
        }
      ]
    }
  }
];

export default questions;
