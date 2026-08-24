/**
 * ISC2 Certified in Cybersecurity (CC) - 2026 Outline
 * Domain 4: Network Security
 * Question Count: 156
 */

const questions = [
  {
    "id": 56,
    "dom": 4,
    "question": "Which type of network is typically limited in range from a few centimeters to a few meters and connects devices within an individual’s workspace?",
    "options": [
      "Local-area network",
      "Wide-area network",
      "Personal-area network",
      "Metropolitan-area network"
    ],
    "correct_idx": 2,
    "explanation": "A Personal-Area Network (PAN) has a very short range — typically centimeters to a few meters — connecting devices close to one individual (e.g., Bluetooth devices).",
    "short_explanation_en": "A Personal-Area Network (PAN) has a very short range — typically centimeters to a few meters — connecting devices close to one individual (e.g., Bluetooth devices).",
    "question_th": "เครือข่ายประเภทใดที่โดยทั่วไปมีระยะจำกัดตั้งแต่ไม่กี่เซนติเมตรถึงไม่กี่เมตร และเชื่อมต่ออุปกรณ์ภายในพื้นที่ทำงานของบุคคลคนเดียว?",
    "options_th": [
      "Local-area network",
      "Wide-area network",
      "Personal-area network",
      "Metropolitan-area network"
    ],
    "explanation_th": "Personal-Area Network (PAN) มีระยะที่สั้นมาก — โดยทั่วไปตั้งแต่เซนติเมตรถึงไม่กี่เมตร — เชื่อมต่ออุปกรณ์ที่อยู่ใกล้บุคคลคนเดียว (เช่น อุปกรณ์บลูทูธ)"
  },
  {
    "id": 57,
    "dom": 4,
    "question": "Which networking device transmits data packets between connected devices on the LAN?",
    "options": [
      "Modem",
      "Network interface card",
      "Wireless access point",
      "Switch"
    ],
    "correct_idx": 3,
    "explanation": "A switch forwards data packets between devices connected within the same local-area network based on their MAC addresses.",
    "short_explanation_en": "A switch forwards data packets between devices connected within the same local-area network based on their MAC addresses.",
    "question_th": "อุปกรณ์เครือข่ายใดที่ส่งแพ็กเก็ตข้อมูลระหว่างอุปกรณ์ที่เชื่อมต่อกันบน LAN?",
    "options_th": [
      "Modem",
      "Network interface card",
      "Wireless access point",
      "Switch"
    ],
    "explanation_th": "Switch ส่งต่อแพ็กเก็ตข้อมูลระหว่างอุปกรณ์ที่เชื่อมต่อกันภายในเครือข่ายท้องถิ่นเดียวกัน โดยอ้างอิงจาก MAC address"
  },
  {
    "id": 58,
    "dom": 4,
    "question": "Which type of network provides local wireless connectivity and is commonly found in settings like cafes, airports, and public spaces?",
    "options": [
      "Wide-area network",
      "Wireless local-area network",
      "Metropolitan-area network",
      "Personal-area network"
    ],
    "correct_idx": 1,
    "explanation": "A Wireless Local-Area Network (WLAN) provides local wireless connectivity, commonly used in cafes, airports, and other public spaces.",
    "short_explanation_en": "A Wireless Local-Area Network (WLAN) provides local wireless connectivity, commonly used in cafes, airports, and other public spaces.",
    "question_th": "เครือข่ายประเภทใดที่ให้การเชื่อมต่อไร้สายในพื้นที่ท้องถิ่น และมักพบในสถานที่ เช่น ร้านกาแฟ สนามบิน และพื้นที่สาธารณะ?",
    "options_th": [
      "Wide-area network",
      "Wireless local-area network",
      "Metropolitan-area network",
      "Personal-area network"
    ],
    "explanation_th": "Wireless Local-Area Network (WLAN) ให้การเชื่อมต่อไร้สายในพื้นที่ท้องถิ่น มักใช้ในร้านกาแฟ สนามบิน และพื้นที่สาธารณะอื่น ๆ"
  },
  {
    "id": 59,
    "dom": 4,
    "question": "What is the purpose of a metropolitan-area network?",
    "options": [
      "Connect multiple LANs across a city or large area",
      "Provide local wireless connectivity",
      "Connect devices within an individual’s workspace",
      "Connect multiple WANs via radio waves or telephone lines"
    ],
    "correct_idx": 0,
    "explanation": "A Metropolitan-Area Network (MAN) connects multiple LANs across a city or a similarly large geographic area.",
    "short_explanation_en": "A Metropolitan-Area Network (MAN) connects multiple LANs across a city or a similarly large geographic area.",
    "question_th": "วัตถุประสงค์ของ metropolitan-area network คืออะไร?",
    "options_th": [
      "เชื่อมต่อหลาย LAN ทั่วเมืองหรือพื้นที่ขนาดใหญ่",
      "ให้การเชื่อมต่อไร้สายในพื้นที่ท้องถิ่น",
      "เชื่อมต่ออุปกรณ์ภายในพื้นที่ทำงานของบุคคลคนเดียว",
      "เชื่อมต่อหลาย WAN ผ่านคลื่นวิทยุหรือสายโทรศัพท์"
    ],
    "explanation_th": "Metropolitan-Area Network (MAN) เชื่อมต่อหลาย LAN ทั่วเมืองหรือพื้นที่ทางภูมิศาสตร์ขนาดใหญ่ที่คล้ายกัน"
  },
  {
    "id": 60,
    "dom": 4,
    "question": "Which ports range from 0 to 1023 and are used for common services in network communications?",
    "options": [
      "Dynamic ports",
      "Registered ports",
      "Well-known ports",
      "Virtual ports"
    ],
    "correct_idx": 2,
    "explanation": "Well-known ports (0–1023) are reserved for standard, widely used network services like HTTP (80) and HTTPS (443).",
    "short_explanation_en": "Well-known ports (0–1023) are reserved for standard, widely used network services like HTTP (80) and HTTPS (443).",
    "question_th": "พอร์ตใดที่มีช่วงตั้งแต่ 0 ถึง 1023 และใช้สำหรับบริการทั่วไปในการสื่อสารเครือข่าย?",
    "options_th": [
      "Dynamic ports",
      "Registered ports",
      "Well-known ports",
      "Virtual ports"
    ],
    "explanation_th": "Well-known ports (0–1023) ถูกสงวนไว้สำหรับบริการเครือข่ายมาตรฐานที่ใช้กันอย่างแพร่หลาย เช่น HTTP (80) และ HTTPS (443)"
  },
  {
    "id": 61,
    "dom": 4,
    "question": "What is the main advantage of using fiber-optic cables in a wide-area network?",
    "options": [
      "Ability to connect devices within an individual’s workspace",
      "Wireless connectivity for local network access",
      "High-speed data transmission over long distances",
      "Cost-effectiveness for small to medium-sized networks"
    ],
    "correct_idx": 2,
    "explanation": "Fiber-optic cable's main advantage in WANs is enabling very high-speed data transmission reliably over long distances.",
    "short_explanation_en": "Fiber-optic cable's main advantage in WANs is enabling very high-speed data transmission reliably over long distances.",
    "question_th": "ข้อได้เปรียบหลักของการใช้สายไฟเบอร์ออปติกใน wide-area network คืออะไร?",
    "options_th": [
      "ความสามารถในการเชื่อมต่ออุปกรณ์ภายในพื้นที่ทำงานของบุคคลคนเดียว",
      "การเชื่อมต่อไร้สายสำหรับการเข้าถึงเครือข่ายท้องถิ่น",
      "การส่งข้อมูลความเร็วสูงในระยะทางไกล",
      "ความคุ้มค่าสำหรับเครือข่ายขนาดเล็กถึงขนาดกลาง"
    ],
    "explanation_th": "ข้อได้เปรียบหลักของสายไฟเบอร์ออปติกใน WAN คือการทำให้เกิดการส่งข้อมูลความเร็วสูงอย่างเชื่อถือได้ในระยะทางไกล"
  },
  {
    "id": 62,
    "dom": 4,
    "question": "Which transport layer protocol ensures reliable, ordered, and error-checked data transfer?",
    "options": [
      "TCP",
      "UDP",
      "SMTP",
      "HTTP"
    ],
    "correct_idx": 0,
    "explanation": "TCP (Transmission Control Protocol) guarantees reliable, ordered, and error-checked delivery of data between devices.",
    "short_explanation_en": "TCP (Transmission Control Protocol) guarantees reliable, ordered, and error-checked delivery of data between devices.",
    "question_th": "โปรโตคอลชั้น Transport ใดที่รับประกันการส่งข้อมูลที่เชื่อถือได้ เรียงลำดับ และตรวจสอบข้อผิดพลาด?",
    "options_th": [
      "TCP",
      "UDP",
      "SMTP",
      "HTTP"
    ],
    "explanation_th": "TCP (Transmission Control Protocol) รับประกันการส่งข้อมูลที่เชื่อถือได้ เรียงลำดับ และตรวจสอบข้อผิดพลาดระหว่างอุปกรณ์"
  },
  {
    "id": 63,
    "dom": 4,
    "question": "Which transport layer protocol is commonly used in multimedia applications that require real-time transmission and are prone to occasional packet loss?",
    "options": [
      "TCP",
      "UDP",
      "FTP",
      "SNMP"
    ],
    "correct_idx": 1,
    "explanation": "UDP (User Datagram Protocol) favors speed over reliability, making it well-suited for real-time multimedia where occasional packet loss is tolerable.",
    "short_explanation_en": "UDP (User Datagram Protocol) favors speed over reliability, making it well-suited for real-time multimedia where occasional packet loss is tolerable.",
    "question_th": "โปรโตคอลชั้น Transport ใดที่มักใช้ในแอปพลิเคชันมัลติมีเดียที่ต้องการการส่งข้อมูลแบบเรียลไทม์และยอมรับการสูญเสียแพ็กเก็ตเป็นครั้งคราวได้?",
    "options_th": [
      "TCP",
      "UDP",
      "FTP",
      "SNMP"
    ],
    "explanation_th": "UDP (User Datagram Protocol) ให้ความสำคัญกับความเร็วมากกว่าความน่าเชื่อถือ ทำให้เหมาะสมกับมัลติมีเดียแบบเรียลไทม์ที่สามารถทนต่อการสูญเสียแพ็กเก็ตเป็นครั้งคราวได้"
  },
  {
    "id": 64,
    "dom": 4,
    "question": "Which layer in the OSI model is responsible for data delivery between networks?",
    "options": [
      "Physical layer",
      "Transport layer",
      "Network layer",
      "Application layer"
    ],
    "correct_idx": 1,
    "explanation": "The Transport layer (Layer 4 of the OSI model) is responsible for reliable end-to-end data delivery between networked systems.",
    "short_explanation_en": "The Transport layer (Layer 4 of the OSI model) is responsible for reliable end-to-end data delivery between networked systems.",
    "question_th": "เลเยอร์ใดในโมเดล OSI ที่รับผิดชอบการส่งข้อมูลระหว่างเครือข่าย?",
    "options_th": [
      "Physical layer",
      "Transport layer",
      "Network layer",
      "Application layer"
    ],
    "explanation_th": "Transport layer (Layer 4 ของโมเดล OSI) รับผิดชอบการส่งข้อมูลแบบ end-to-end ที่เชื่อถือได้ระหว่างระบบที่เชื่อมต่อเครือข่าย"
  },
  {
    "id": 65,
    "dom": 4,
    "question": "Which technique is used to conserve IPv4 address space by assigning a single public IP address to a device within a network?",
    "options": [
      "NAT",
      "DHCP",
      "IPsec",
      "SNMP"
    ],
    "correct_idx": 0,
    "explanation": "NAT (Network Address Translation) conserves scarce public IPv4 addresses by letting many internal devices share one public IP address.",
    "short_explanation_en": "NAT (Network Address Translation) conserves scarce public IPv4 addresses by letting many internal devices share one public IP address.",
    "question_th": "เทคนิคใดที่ใช้เพื่อประหยัดพื้นที่ IPv4 address โดยกำหนด public IP address เดียวให้กับอุปกรณ์ในเครือข่าย?",
    "options_th": [
      "NAT",
      "DHCP",
      "IPsec",
      "SNMP"
    ],
    "explanation_th": "NAT (Network Address Translation) ประหยัด public IPv4 address ที่มีจำกัด โดยให้อุปกรณ์ภายในหลายเครื่องแชร์ public IP address เดียวกัน"
  },
  {
    "id": 66,
    "dom": 4,
    "question": "Which sublayer of the data link layer is responsible for flow control and handles communication between the MAC and network layers?",
    "options": [
      "Logical Link Control (LLC)",
      "Media Access Control (MAC)",
      "Physical layer (PHY)",
      "Transport layer (TCP/UDP)"
    ],
    "correct_idx": 0,
    "explanation": "The Logical Link Control (LLC) sublayer of the Data Link layer manages flow control and mediates communication between the MAC sublayer and the Network layer.",
    "short_explanation_en": "The Logical Link Control (LLC) sublayer of the Data Link layer manages flow control and mediates communication between the MAC sublayer and the Network layer.",
    "question_th": "sublayer ใดของ data link layer ที่รับผิดชอบการควบคุมการไหลของข้อมูลและจัดการการสื่อสารระหว่าง MAC layer กับ network layer?",
    "options_th": [
      "Logical Link Control (LLC)",
      "Media Access Control (MAC)",
      "Physical layer (PHY)",
      "Transport layer (TCP/UDP)"
    ],
    "explanation_th": "Logical Link Control (LLC) sublayer ของ Data Link layer จัดการการควบคุมการไหลของข้อมูลและเป็นตัวกลางการสื่อสารระหว่าง MAC sublayer กับ Network layer"
  },
  {
    "id": 67,
    "dom": 4,
    "question": "Which wireless encryption standard is considered obsolete?",
    "options": [
      "WPA",
      "WPA2",
      "WPA3",
      "WEP"
    ],
    "correct_idx": 3,
    "explanation": "WEP (Wired Equivalent Privacy) has well-documented cryptographic weaknesses and is considered obsolete, having been replaced by WPA, WPA2, and WPA3.",
    "short_explanation_en": "WEP (Wired Equivalent Privacy) has well-documented cryptographic weaknesses and is considered obsolete, having been replaced by WPA, WPA2, and WPA3.",
    "question_th": "มาตรฐานการเข้ารหัสไร้สายใดที่ถือว่าล้าสมัยแล้ว?",
    "options_th": [
      "WPA",
      "WPA2",
      "WPA3",
      "WEP"
    ],
    "explanation_th": "WEP (Wired Equivalent Privacy) มีจุดอ่อนด้านการเข้ารหัสที่เป็นที่รู้จักดี และถือว่าล้าสมัย โดยถูกแทนที่ด้วย WPA, WPA2 และ WPA3"
  },
  {
    "id": 68,
    "dom": 4,
    "question": "Which layer in the TCP/IP model combines the physical and data link layers of the OSI model?",
    "options": [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network access layer"
    ],
    "correct_idx": 3,
    "explanation": "The TCP/IP model's Network Access layer combines the functions of the OSI model's Physical and Data Link layers.",
    "short_explanation_en": "The TCP/IP model's Network Access layer combines the functions of the OSI model's Physical and Data Link layers.",
    "question_th": "เลเยอร์ใดในโมเดล TCP/IP ที่รวมทั้ง physical layer และ data link layer ของโมเดล OSI เข้าด้วยกัน?",
    "options_th": [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network access layer"
    ],
    "explanation_th": "Network Access layer ของโมเดล TCP/IP รวมฟังก์ชันของ Physical layer และ Data Link layer ของโมเดล OSI เข้าด้วยกัน"
  },
  {
    "id": 69,
    "dom": 4,
    "question": "Which type of fire suppression system is commonly used in data centers, industrial settings, or other locations where water or foam-based systems would damage sensitive equipment or materials?",
    "options": [
      "Sprinkler systems",
      "Gas-based systems",
      "Foam systems",
      "Wet and dry chemical systems"
    ],
    "correct_idx": 1,
    "explanation": "Gas-based fire suppression systems are used in data centers and similar environments because they extinguish fires without damaging sensitive electronic equipment, unlike water or foam.",
    "short_explanation_en": "Gas-based fire suppression systems are used in data centers and similar environments because they extinguish fires without damaging sensitive electronic equipment, unlike water or foam.",
    "question_th": "ระบบดับเพลิงประเภทใดที่มักใช้ในศูนย์ข้อมูล สถานที่อุตสาหกรรม หรือสถานที่อื่นที่ระบบใช้น้ำหรือโฟมอาจสร้างความเสียหายต่ออุปกรณ์หรือวัสดุที่อ่อนไหว?",
    "options_th": [
      "ระบบสปริงเกอร์",
      "ระบบแบบใช้แก๊ส",
      "ระบบโฟม",
      "ระบบสารเคมีแบบเปียกและแห้ง"
    ],
    "explanation_th": "ระบบดับเพลิงแบบใช้แก๊สถูกใช้ในศูนย์ข้อมูลและสภาพแวดล้อมที่คล้ายกัน เนื่องจากสามารถดับไฟได้โดยไม่สร้างความเสียหายต่ออุปกรณ์อิเล็กทรอนิกส์ที่อ่อนไหว ต่างจากระบบน้ำหรือโฟม"
  },
  {
    "id": 70,
    "dom": 4,
    "question": "Which of the following is not a characteristic of a memorandum of understanding (MOU)?",
    "options": [
      "To establish a legally binding contract between parties",
      "To outline the intended actions and responsibilities of the parties involved",
      "To resolve disputes that may arise during a partnership or collaboration",
      "To specify the timeline and deliverables for completing tasks or achieving goals"
    ],
    "correct_idx": 0,
    "explanation": "An MOU outlines intended actions, responsibilities, timelines, and dispute resolution between parties, but unlike a formal contract, it is generally not legally binding.",
    "short_explanation_en": "An MOU outlines intended actions, responsibilities, timelines, and dispute resolution between parties, but unlike a formal contract, it is generally not legally binding.",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่คุณลักษณะของ memorandum of understanding (MOU)?",
    "options_th": [
      "เพื่อสร้างสัญญาที่มีผลผูกพันทางกฎหมายระหว่างคู่สัญญา",
      "เพื่อระบุการกระทำและความรับผิดชอบที่ตั้งใจของคู่สัญญาที่เกี่ยวข้อง",
      "เพื่อแก้ไขข้อพิพาทที่อาจเกิดขึ้นระหว่างความร่วมมือหรือการทำงานร่วมกัน",
      "เพื่อระบุกรอบเวลาและผลงานส่งมอบสำหรับการทำงานให้เสร็จหรือบรรลุเป้าหมาย"
    ],
    "explanation_th": "MOU ระบุการกระทำ ความรับผิดชอบ กรอบเวลา และการแก้ไขข้อพิพาทระหว่างคู่สัญญา แต่ต่างจากสัญญาที่เป็นทางการ โดยทั่วไปแล้ว MOU ไม่มีผลผูกพันทางกฎหมาย"
  },
  {
    "id": 71,
    "dom": 4,
    "question": "Which security strategy involves implementing multiple layers of security measures, such as firewalls, intrusion detection/prevention systems, and endpoint protection, to provide comprehensive data protection and impede threat actors?",
    "options": [
      "Network segmentation",
      "Defense-in-depth",
      "Microsegmentation",
      "Virtual Private Networks"
    ],
    "correct_idx": 1,
    "explanation": "Defense-in-depth layers multiple security measures (firewalls, IDS/IPS, endpoint protection, etc.) so that if one layer fails, others still provide protection.",
    "short_explanation_en": "Defense-in-depth layers multiple security measures (firewalls, IDS/IPS, endpoint protection, etc.) so that if one layer fails, others still provide protection.",
    "question_th": "กลยุทธ์ความปลอดภัยใดที่เกี่ยวข้องกับการนำมาตรการความปลอดภัยหลายชั้นมาใช้ เช่น ไฟร์วอลล์ ระบบตรวจจับ/ป้องกันการบุกรุก และการป้องกัน endpoint เพื่อให้การปกป้องข้อมูลอย่างครอบคลุมและขัดขวางผู้โจมตี?",
    "options_th": [
      "Network segmentation",
      "Defense-in-depth",
      "Microsegmentation",
      "Virtual Private Networks"
    ],
    "explanation_th": "Defense-in-depth วางมาตรการความปลอดภัยหลายชั้น (ไฟร์วอลล์ IDS/IPS การป้องกัน endpoint ฯลฯ) เพื่อให้หากชั้นหนึ่งล้มเหลว ชั้นอื่นยังคงให้การป้องกันอยู่"
  },
  {
    "id": 72,
    "dom": 4,
    "question": "Which network security technique provides enhanced protection by implementing security controls between workloads within a network",
    "options": [
      "Network segmentation",
      "Defense-in-depth",
      "Microsegmentation",
      "Virtual private networks"
    ],
    "correct_idx": 2,
    "explanation": "Microsegmentation applies granular security controls between individual workloads within a network, offering more precise protection than broader network segmentation.",
    "short_explanation_en": "Microsegmentation applies granular security controls between individual workloads within a network, offering more precise protection than broader network segmentation.",
    "question_th": "เทคนิคความปลอดภัยเครือข่ายใดที่ให้การป้องกันที่เพิ่มขึ้นโดยนำการควบคุมความปลอดภัยมาใช้ระหว่าง workload ภายในเครือข่าย?",
    "options_th": [
      "Network segmentation",
      "Defense-in-depth",
      "Microsegmentation",
      "Virtual private networks"
    ],
    "explanation_th": "Microsegmentation นำการควบคุมความปลอดภัยแบบละเอียดมาใช้ระหว่าง workload แต่ละอย่างภายในเครือข่าย ให้การป้องกันที่แม่นยำกว่าการแบ่งเครือข่ายแบบกว้าง (network segmentation)"
  },
  {
    "id": 73,
    "dom": 4,
    "question": "What is the purpose of a demilitarized zone (DMZ)?",
    "options": [
      "To provide a logical division within a physical network",
      "To establish secure connections between multiple networks",
      "To act as a buffer zone between an organization’s internal network and the external network",
      "To ensure privacy and data protection for mobile users"
    ],
    "correct_idx": 2,
    "explanation": "A DMZ acts as a buffer network zone that separates and protects an organization's internal network from direct exposure to the external/public network.",
    "short_explanation_en": "A DMZ acts as a buffer network zone that separates and protects an organization's internal network from direct exposure to the external/public network.",
    "question_th": "วัตถุประสงค์ของ demilitarized zone (DMZ) คืออะไร?",
    "options_th": [
      "เพื่อให้การแบ่งแยกทางตรรกะภายในเครือข่ายทางกายภาพ",
      "เพื่อสร้างการเชื่อมต่อที่ปลอดภัยระหว่างหลายเครือข่าย",
      "เพื่อทำหน้าที่เป็นเขตกันชนระหว่างเครือข่ายภายในขององค์กรกับเครือข่ายภายนอก",
      "เพื่อรับประกันความเป็นส่วนตัวและการปกป้องข้อมูลสำหรับผู้ใช้มือถือ"
    ],
    "explanation_th": "DMZ ทำหน้าที่เป็นเขตเครือข่ายกันชนที่แยกและปกป้องเครือข่ายภายในขององค์กรจากการเปิดเผยโดยตรงต่อเครือข่ายภายนอก/สาธารณะ"
  },
  {
    "id": 74,
    "dom": 4,
    "question": "What is the function of switches in implementing virtual local area networks?",
    "options": [
      "VLANs segment, manage, and control virtual networks.",
      "VLANs provide encryption for secure network connections.",
      "VLANs enforce security policies and controls for mobile devices.",
      "VLANs act as a buffer zone between an organization’s internal network and the external network."
    ],
    "correct_idx": 0,
    "explanation": "VLANs (Virtual LANs), implemented via switches, logically segment, manage, and control traffic within virtual network groupings.",
    "short_explanation_en": "VLANs (Virtual LANs), implemented via switches, logically segment, manage, and control traffic within virtual network groupings.",
    "question_th": "หน้าที่ของสวิตช์ในการนำ virtual local area network มาใช้คืออะไร?",
    "options_th": [
      "VLAN แบ่งส่วน จัดการ และควบคุมเครือข่ายเสมือน",
      "VLAN ให้การเข้ารหัสสำหรับการเชื่อมต่อเครือข่ายที่ปลอดภัย",
      "VLAN บังคับใช้นโยบายความปลอดภัยและการควบคุมสำหรับอุปกรณ์มือถือ",
      "VLAN ทำหน้าที่เป็นเขตกันชนระหว่างเครือข่ายภายในขององค์กรกับเครือข่ายภายนอก"
    ],
    "explanation_th": "VLAN (Virtual LAN) ที่นำมาใช้ผ่านสวิตช์ แบ่งส่วนทางตรรกะ จัดการ และควบคุมทราฟฟิกภายในกลุ่มเครือข่ายเสมือน"
  },
  {
    "id": 75,
    "dom": 4,
    "question": "What is the difference between the public cloud and a private cloud?",
    "options": [
      "The public cloud is more secure than a private cloud.",
      "Unlike the public cloud, a private cloud is only accessible through the Internet.",
      "A private cloud is deployed for a specific organization and allows for tailored hardware and software.",
      "A public cloud allows for greater control and flexibility over assets."
    ],
    "correct_idx": 2,
    "explanation": "A private cloud is dedicated to a single organization, allowing it to tailor the underlying hardware and software to its specific needs, unlike the shared public cloud.",
    "short_explanation_en": "A private cloud is dedicated to a single organization, allowing it to tailor the underlying hardware and software to its specific needs, unlike the shared public cloud.",
    "question_th": "ความแตกต่างระหว่าง public cloud กับ private cloud คืออะไร?",
    "options_th": [
      "Public cloud ปลอดภัยกว่า private cloud",
      "Private cloud เข้าถึงได้เฉพาะผ่านอินเทอร์เน็ตเท่านั้น ต่างจาก public cloud",
      "Private cloud ถูกปรับใช้สำหรับองค์กรเฉพาะ และสามารถปรับแต่งฮาร์ดแวร์และซอฟต์แวร์ได้",
      "Public cloud ให้การควบคุมและความยืดหยุ่นต่อทรัพย์สินมากกว่า"
    ],
    "explanation_th": "Private cloud ถูกอุทิศให้กับองค์กรเดียว ทำให้สามารถปรับแต่งฮาร์ดแวร์และซอฟต์แวร์พื้นฐานให้เหมาะกับความต้องการเฉพาะได้ ต่างจาก public cloud ที่ใช้ร่วมกัน"
  },
  {
    "id": 76,
    "dom": 4,
    "question": "Which cloud deployment model offers a collaborative, secure, costeffective solution for organizations with shared needs?",
    "options": [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    "correct_idx": 3,
    "explanation": "A community cloud is shared by organizations with common needs (e.g., compliance requirements), offering a collaborative yet more secure and cost-effective option than a fully public cloud.",
    "short_explanation_en": "A community cloud is shared by organizations with common needs (e.g., compliance requirements), offering a collaborative yet more secure and cost-effective option than a fully public cloud.",
    "question_th": "โมเดลการปรับใช้คลาวด์ใดที่นำเสนอโซลูชันแบบร่วมมือ ปลอดภัย และคุ้มค่าสำหรับองค์กรที่มีความต้องการร่วมกัน?",
    "options_th": [
      "Public cloud",
      "Private cloud",
      "Hybrid cloud",
      "Community cloud"
    ],
    "explanation_th": "Community cloud ถูกใช้ร่วมกันโดยองค์กรที่มีความต้องการร่วมกัน (เช่น ข้อกำหนดด้านการปฏิบัติตามกฎระเบียบ) นำเสนอตัวเลือกที่ร่วมมือกันได้ ปลอดภัย และคุ้มค่ากว่า public cloud เต็มรูปแบบ"
  },
  {
    "id": 77,
    "dom": 4,
    "question": "In which cloud service model is the CSP responsible for providing virtualized resources and services that can be accessed over the Internet, allowing organizations to free themselves from purchasing expensive hardware?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "None of these answers are correct."
    ],
    "correct_idx": 0,
    "explanation": "In IaaS (Infrastructure as a Service), the cloud provider supplies virtualized computing resources over the internet, letting organizations avoid purchasing physical hardware.",
    "short_explanation_en": "In IaaS (Infrastructure as a Service), the cloud provider supplies virtualized computing resources over the internet, letting organizations avoid purchasing physical hardware.",
    "question_th": "ในโมเดลบริการคลาวด์ใดที่ CSP รับผิดชอบในการจัดหาทรัพยากรและบริการเสมือนที่สามารถเข้าถึงได้ผ่านอินเทอร์เน็ต ทำให้องค์กรไม่ต้องซื้อฮาร์ดแวร์ราคาแพง?",
    "options_th": [
      "IaaS",
      "PaaS",
      "SaaS",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "ใน IaaS (Infrastructure as a Service) ผู้ให้บริการคลาวด์จัดหาทรัพยากรคอมพิวเตอร์เสมือนผ่านอินเทอร์เน็ต ทำให้องค์กรไม่ต้องซื้อฮาร์ดแวร์ทางกายภาพ"
  },
  {
    "id": 78,
    "dom": 4,
    "question": "In which cloud service model is the CSP responsible for maintaining and updating all the components necessary to run the application, while the organization is only responsible for how the application will be used and who needs access?",
    "options": [
      "IaaS",
      "PaaS",
      "SaaS",
      "None of these answers are correct"
    ],
    "correct_idx": 2,
    "explanation": "In SaaS (Software as a Service), the provider manages and maintains the entire application, while the customer organization only controls how it's used and who has access.",
    "short_explanation_en": "In SaaS (Software as a Service), the provider manages and maintains the entire application, while the customer organization only controls how it's used and who has access.",
    "question_th": "ในโมเดลบริการคลาวด์ใดที่ CSP รับผิดชอบในการดูแลรักษาและอัปเดตองค์ประกอบทั้งหมดที่จำเป็นในการรันแอปพลิเคชัน ในขณะที่องค์กรรับผิดชอบเพียงวิธีการใช้แอปพลิเคชันและใครต้องการการเข้าถึง?",
    "options_th": [
      "IaaS",
      "PaaS",
      "SaaS",
      "ไม่มีข้อใดถูกต้อง"
    ],
    "explanation_th": "ใน SaaS (Software as a Service) ผู้ให้บริการจัดการและดูแลรักษาแอปพลิเคชันทั้งหมด ในขณะที่องค์กรลูกค้าควบคุมเพียงวิธีการใช้งานและใครมีสิทธิ์เข้าถึง"
  },
  {
    "id": 79,
    "dom": 4,
    "question": "Which type of SLA allows customers to select different levels of service based on their requirements and budget?",
    "options": [
      "Customer SLA",
      "Internal SLA",
      "Multilevel SLA",
      "Managed service provider SLA"
    ],
    "correct_idx": 2,
    "explanation": "A multilevel SLA lets customers choose among different tiers of service based on their specific needs and budget.",
    "short_explanation_en": "A multilevel SLA lets customers choose among different tiers of service based on their specific needs and budget.",
    "question_th": "SLA ประเภทใดที่ให้ลูกค้าเลือกระดับบริการที่แตกต่างกันตามความต้องการและงบประมาณของตน?",
    "options_th": [
      "Customer SLA",
      "Internal SLA",
      "Multilevel SLA",
      "Managed service provider SLA"
    ],
    "explanation_th": "Multilevel SLA ให้ลูกค้าเลือกระหว่างระดับบริการที่แตกต่างกันตามความต้องการและงบประมาณเฉพาะของตน"
  },
  {
    "id": 80,
    "dom": 4,
    "question": "What is the purpose of a managed service provider?",
    "options": [
      "To provide security services to organizations",
      "To monitor customers’ environment for issues and concerns",
      "To provide business continuity solutions",
      "All of these answers are correct."
    ],
    "correct_idx": 3,
    "explanation": "A Managed Service Provider can offer security services, ongoing environment monitoring, and business continuity support — all of these are typical MSP functions.",
    "short_explanation_en": "A Managed Service Provider can offer security services, ongoing environment monitoring, and business continuity support — all of these are typical MSP functions.",
    "question_th": "วัตถุประสงค์ของ managed service provider คืออะไร?",
    "options_th": [
      "เพื่อให้บริการความปลอดภัยแก่องค์กร",
      "เพื่อเฝ้าติดตามสภาพแวดล้อมของลูกค้าเพื่อหาปัญหาและข้อกังวล",
      "เพื่อให้โซลูชันความต่อเนื่องทางธุรกิจ",
      "ถูกทุกข้อ"
    ],
    "explanation_th": "Managed Service Provider สามารถให้บริการความปลอดภัย เฝ้าติดตามสภาพแวดล้อมอย่างต่อเนื่อง และสนับสนุนความต่อเนื่องทางธุรกิจ — ล้วนเป็นหน้าที่ทั่วไปของ MSP"
  },
  {
    "id": 146,
    "dom": 4,
    "question": "Which of the following is referred to as a physical address in computer networking?",
    "options": [
      "IPv4 address",
      "IPv6 address",
      "MAC address",
      "Loopback address"
    ],
    "correct_idx": 2,
    "explanation": "Media access control (MAC) addresses are often referred to as a physical address or hardware address since they are assigned to the device’s physical hardware. Internet Protocol (IP) addresses are known as logical addresses. A loopback address is a special type of IP address.",
    "short_explanation_en": "Media access control (MAC) addresses are often referred to as a physical address or hardware address since they are assigned to the device’s physical hardware.",
    "question_th": "ข้อใดต่อไปนี้ถูกเรียกว่า physical address ในระบบเครือข่ายคอมพิวเตอร์?",
    "options_th": [
      "IPv4 address",
      "IPv6 address",
      "MAC address",
      "Loopback address"
    ],
    "explanation_th": "Media access control (MAC) address มักถูกเรียกว่า physical address หรือ hardware address เนื่องจากถูกกำหนดให้กับฮาร์ดแวร์ทางกายภาพของอุปกรณ์ ในขณะที่ IP address รู้จักกันในชื่อ logical address"
  },
  {
    "id": 147,
    "dom": 4,
    "question": "How many layers are there in the OSI model?",
    "options": [
      "8",
      "7",
      "6",
      "5"
    ],
    "correct_idx": 1,
    "explanation": "There are seven layers in the OSI model. These Include Application, Presentation, Session, Transport, Network, Data, and Physical.",
    "short_explanation_en": "There are seven layers in the OSI model. These Include Application, Presentation, Session, Transport, Network, Data, and Physical.",
    "question_th": "โมเดล OSI มีกี่เลเยอร์?",
    "options_th": [
      "8",
      "7",
      "6",
      "5"
    ],
    "explanation_th": "โมเดล OSI มี 7 เลเยอร์ ได้แก่ Application, Presentation, Session, Transport, Network, Data และ Physical"
  },
  {
    "id": 148,
    "dom": 4,
    "question": "Which of the following terms best describes a computer that provides content to other computers such as a website or an application?",
    "options": [
      "Client",
      "Server",
      "Endpoint",
      "Router"
    ],
    "correct_idx": 1,
    "explanation": "Server is a term that describes a computer that serves content or provides a service to another computer on a network. A client is a computer that accesses or uses the content or service provided by the server. An endpoint is a computing device on a network, which could include a server but is not the best answer. A router is a network device that routes traffic on a network.",
    "short_explanation_en": "Server is a term that describes a computer that serves content or provides a service to another computer on a network.",
    "question_th": "คำใดต่อไปนี้อธิบายคอมพิวเตอร์ที่ให้เนื้อหาแก่คอมพิวเตอร์อื่น เช่น เว็บไซต์หรือแอปพลิเคชันได้ดีที่สุด?",
    "options_th": [
      "Client",
      "Server",
      "Endpoint",
      "Router"
    ],
    "explanation_th": "Server คือคำที่อธิบายคอมพิวเตอร์ที่ให้เนื้อหาหรือบริการแก่คอมพิวเตอร์อื่นบนเครือข่าย Client คือคอมพิวเตอร์ที่เข้าถึงหรือใช้เนื้อหาหรือบริการที่ server จัดหาให้"
  },
  {
    "id": 149,
    "dom": 4,
    "question": "What is the name of the seventh layer of the OSI model?",
    "options": [
      "Application",
      "Session",
      "Presentation",
      "Network"
    ],
    "correct_idx": 0,
    "explanation": "The Application Layer is Layer 7 (the uppermost layer) of the OSI model. The order of the layers from top (Layer 7) to bottom (Layer 1) are Application, Presentation, Session, Transport, Network, Data Link, and Physical.",
    "short_explanation_en": "The Application Layer is Layer 7 (the uppermost layer) of the OSI model.",
    "question_th": "ชื่อของเลเยอร์ที่เจ็ดของโมเดล OSI คืออะไร?",
    "options_th": [
      "Application",
      "Session",
      "Presentation",
      "Network"
    ],
    "explanation_th": "Application Layer คือ Layer 7 (เลเยอร์บนสุด) ของโมเดล OSI ลำดับเลเยอร์จากบน (Layer 7) ถึงล่าง (Layer 1) คือ Application, Presentation, Session, Transport, Network, Data Link และ Physical"
  },
  {
    "id": 150,
    "dom": 4,
    "question": "Which of the following attacks are most likely to be carried out by a botnet?",
    "options": [
      "Advanced persistent threat attack",
      "DDoS attack",
      "Trojan horse attack",
      "Backdoor attack"
    ],
    "correct_idx": 1,
    "explanation": "A botnet is a group of computers under the control of an attacker, most often for a coordinated attacker such as a DDoS attack. Advanced persistent threat and backdoors are not specific types of attacks, but rather features of attacks. A trojan horse is a type of attack but unlikely to be carried out by a botnet.",
    "short_explanation_en": "A botnet is a group of computers under the control of an attacker, most often for a coordinated attacker such as a DDoS attack.",
    "question_th": "การโจมตีใดต่อไปนี้มีแนวโน้มที่จะถูกดำเนินการโดย botnet มากที่สุด?",
    "options_th": [
      "การโจมตีแบบ Advanced persistent threat",
      "การโจมตีแบบ DDoS",
      "การโจมตีแบบ Trojan horse",
      "การโจมตีแบบ Backdoor"
    ],
    "explanation_th": "Botnet คือกลุ่มคอมพิวเตอร์ที่อยู่ภายใต้การควบคุมของผู้โจมตี มักใช้เพื่อการโจมตีที่ประสานงานกัน เช่น DDoS Advanced persistent threat และ backdoor ไม่ใช่ประเภทการโจมตีเฉพาะ แต่เป็นคุณลักษณะของการโจมตี"
  },
  {
    "id": 151,
    "dom": 4,
    "question": "What is the best description of the difference between a phishing email and a spear phishing e-mail?",
    "options": [
      "A phishing e-mail is sent to a specific person; a spear phishing email is sent to an entire company.",
      "A phishing e-mail is sent to random recipients; a spear phishing email is sent to specific recipients.",
      "A phishing e-mail is sent to an entire company; a spear phishing email is sent to a specific person.",
      "A spear phishing e-mail is sent to random recipients; a phishing email is sent to specific recipients."
    ],
    "correct_idx": 1,
    "explanation": "A phishing e-mail is sent to random recipients; a spear phishing email is sent to specific recipients. A phishing e-mail is literally like going fishing—you cast a wide net randomly and you see what you get. Conversely spear phishing is literally like spearfishing—you have a specific target in mind, and you shoot the spear directly at it. A spear phishing e-mail is sent to a specific person or spe",
    "short_explanation_en": "A phishing e-mail is sent to random recipients; a spear phishing email is sent to specific recipients.",
    "question_th": "คำอธิบายที่ดีที่สุดถึงความแตกต่างระหว่างอีเมล phishing และอีเมล spear phishing คืออะไร?",
    "options_th": [
      "อีเมล phishing ถูกส่งไปยังบุคคลเฉพาะ; อีเมล spear phishing ถูกส่งไปยังทั้งบริษัท",
      "อีเมล phishing ถูกส่งไปยังผู้รับแบบสุ่ม; อีเมล spear phishing ถูกส่งไปยังผู้รับเฉพาะ",
      "อีเมล phishing ถูกส่งไปยังทั้งบริษัท; อีเมล spear phishing ถูกส่งไปยังบุคคลเฉพาะ",
      "อีเมล spear phishing ถูกส่งไปยังผู้รับแบบสุ่ม; อีเมล phishing ถูกส่งไปยังผู้รับเฉพาะ"
    ],
    "explanation_th": "อีเมล phishing ถูกส่งไปยังผู้รับแบบสุ่ม เปรียบเสมือนการตกปลาแบบกว้าง ๆ ในขณะที่ spear phishing เป็นการมุ่งเป้าหมายเฉพาะเจาะจงเหมือนการแทงหอกไปยังเป้าหมายที่กำหนดไว้แล้ว"
  },
  {
    "id": 152,
    "dom": 4,
    "question": "Which of the following is not a true statement about a worm?",
    "options": [
      "It can replicate itself.",
      "It is a type of malware.",
      "It is a type of botnet.",
      "It does not require a host program to infect and deliver it to the victim system."
    ],
    "correct_idx": 2,
    "explanation": "A worm is not a type of botnet. A worm can replicate itself and is a type of malware, but since it isn’t a virus, it does not require a host program to infect and serve as the delivery mechanism.",
    "short_explanation_en": "A worm is not a type of botnet. A worm can replicate itself and is a type of malware, but since it isn’t a virus, it does not require a host program to infect and serve as the delivery mechanism.",
    "question_th": "ข้อความใดต่อไปนี้ไม่เป็นความจริงเกี่ยวกับ worm?",
    "options_th": [
      "สามารถแพร่กระจายตัวเองได้",
      "เป็นมัลแวร์ประเภทหนึ่ง",
      "เป็นประเภทหนึ่งของ botnet",
      "ไม่ต้องการโปรแกรมโฮสต์เพื่อติดเชื้อและส่งไปยังระบบเหยื่อ"
    ],
    "explanation_th": "Worm ไม่ใช่ประเภทหนึ่งของ botnet Worm สามารถแพร่กระจายตัวเองได้และเป็นมัลแวร์ประเภทหนึ่ง แต่เนื่องจากไม่ใช่ไวรัส จึงไม่ต้องการโปรแกรมโฮสต์เพื่อติดเชื้อและเป็นกลไกในการส่ง"
  },
  {
    "id": 153,
    "dom": 4,
    "question": "What is the primary difference between an IDS and an IPS?",
    "options": [
      "They both do the same thing.",
      "An IDS detects malicious activity, whereas an IPS prevents the activity from happening in the first place.",
      "An IDS detects malicious activity, whereas an IPS monitors system performance.",
      "An IDS detects malicious activity, whereas an IPS detects malicious activity and takes action on it."
    ],
    "correct_idx": 3,
    "explanation": "An IDS, which stands for intrusion detection system, detects malicious activity, whereas an IPS, which stands for intrusion prevention system, detects malicious activity and takes action on it.",
    "short_explanation_en": "An IDS, which stands for intrusion detection system, detects malicious activity, whereas an IPS, which stands for intrusion prevention system, detects malicious activity and takes action on it.",
    "question_th": "ความแตกต่างหลักระหว่าง IDS และ IPS คืออะไร?",
    "options_th": [
      "ทั้งสองทำสิ่งเดียวกัน",
      "IDS ตรวจจับกิจกรรมที่เป็นอันตราย ในขณะที่ IPS ป้องกันไม่ให้กิจกรรมนั้นเกิดขึ้นตั้งแต่แรก",
      "IDS ตรวจจับกิจกรรมที่เป็นอันตราย ในขณะที่ IPS เฝ้าติดตามประสิทธิภาพของระบบ",
      "IDS ตรวจจับกิจกรรมที่เป็นอันตราย ในขณะที่ IPS ตรวจจับกิจกรรมที่เป็นอันตรายและดำเนินการกับมัน"
    ],
    "explanation_th": "IDS ซึ่งย่อมาจาก intrusion detection system ตรวจจับกิจกรรมที่เป็นอันตราย ในขณะที่ IPS ซึ่งย่อมาจาก intrusion prevention system ตรวจจับกิจกรรมที่เป็นอันตรายและดำเนินการกับมัน"
  },
  {
    "id": 154,
    "dom": 4,
    "question": "Joe is a cyber criminal who has targeted a web server for a potential cyberattack. Joe wants to know if the server has any unpatched vulnerabilities he might be able to exploit. Which of the following actions is Joe most likely to take?",
    "options": [
      "Launch a smurf attack against the target server.",
      "Run a vulnerability scan against the target server.",
      "Send a phishing e-mail to the target server.",
      "Send a spear phishing e-mail to the target server."
    ],
    "correct_idx": 1,
    "explanation": "The answer is to run a vulnerability scan, as that is the only one of the choices that will reveal vulnerabilities on the server.",
    "short_explanation_en": "The answer is to run a vulnerability scan, as that is the only one of the choices that will reveal vulnerabilities on the server.",
    "question_th": "โจเป็นอาชญากรไซเบอร์ที่กำหนดเป้าหมายเว็บเซิร์ฟเวอร์สำหรับการโจมตีทางไซเบอร์ที่อาจเกิดขึ้น โจต้องการทราบว่าเซิร์ฟเวอร์มีช่องโหว่ที่ยังไม่ได้แพตช์ซึ่งเขาอาจใช้ประโยชน์ได้หรือไม่ ข้อใดต่อไปนี้เป็นการกระทำที่โจน่าจะทำมากที่สุด?",
    "options_th": [
      "เปิดการโจมตีแบบ smurf กับเซิร์ฟเวอร์เป้าหมาย",
      "รันการสแกนช่องโหว่กับเซิร์ฟเวอร์เป้าหมาย",
      "ส่งอีเมล phishing ไปยังเซิร์ฟเวอร์เป้าหมาย",
      "ส่งอีเมล spear phishing ไปยังเซิร์ฟเวอร์เป้าหมาย"
    ],
    "explanation_th": "คำตอบคือการรันการสแกนช่องโหว่ เนื่องจากเป็นตัวเลือกเดียวที่จะเปิดเผยช่องโหว่บนเซิร์ฟเวอร์"
  },
  {
    "id": 155,
    "dom": 4,
    "question": "Most cyber criminals would agree that _________________ are the weakest link in cybersecurity.",
    "options": [
      "Passwords",
      "Backdoors",
      "Laws",
      "People"
    ],
    "correct_idx": 3,
    "explanation": "It is widely acknowledged that people are the weakest link in cybersecurity. Despite extensive progress in technical tools and controls, deliberate or accidental acts by people lead to the largest number of and most damaging security breaches.",
    "short_explanation_en": "It is widely acknowledged that people are the weakest link in cybersecurity.",
    "question_th": "อาชญากรไซเบอร์ส่วนใหญ่จะเห็นด้วยว่า _________________ คือจุดอ่อนที่สุดในความปลอดภัยไซเบอร์",
    "options_th": [
      "รหัสผ่าน",
      "Backdoors",
      "กฎหมาย",
      "ผู้คน"
    ],
    "explanation_th": "เป็นที่ยอมรับกันอย่างกว้างขวางว่าผู้คนคือจุดอ่อนที่สุดในความปลอดภัยไซเบอร์ แม้จะมีความก้าวหน้าอย่างมากในเครื่องมือและการควบคุมทางเทคนิค แต่การกระทำโดยเจตนาหรือโดยบังเอิญของผู้คนนำไปสู่การละเมิดความปลอดภัยที่มากที่สุดและสร้างความเสียหายมากที่สุด"
  },
  {
    "id": 156,
    "dom": 4,
    "question": "A hacker uses a phishing attack to obtain a user’s credentials, access their company’s database, and steal proprietary information. This is an example of _______________.",
    "options": [
      "Denial of service",
      "Advanced persistent threat",
      "Extortion",
      "Data exfiltration"
    ],
    "correct_idx": 3,
    "explanation": "The correct answer is data exfiltration, which is the unauthorized transfer of data from a computer or network.",
    "short_explanation_en": "The correct answer is data exfiltration, which is the unauthorized transfer of data from a computer or network.",
    "question_th": "แฮกเกอร์ใช้การโจมตีแบบ phishing เพื่อได้ข้อมูลรับรองของผู้ใช้ เข้าถึงฐานข้อมูลของบริษัท และขโมยข้อมูลที่เป็นกรรมสิทธิ์ นี่เป็นตัวอย่างของ _______________.",
    "options_th": [
      "Denial of service",
      "Advanced persistent threat",
      "Extortion",
      "Data exfiltration"
    ],
    "explanation_th": "คำตอบที่ถูกต้องคือ data exfiltration ซึ่งคือการถ่ายโอนข้อมูลโดยไม่ได้รับอนุญาตออกจากคอมพิวเตอร์หรือเครือข่าย"
  },
  {
    "id": 157,
    "dom": 4,
    "question": "A sophisticated cyber criminal gains access to a financial institution’s e-mail server, installs malware, and then over a period of weeks, moves to other servers and systems on the company’s network, installing other malware and tools, finding other credentials, stealing data, and scrubbing logs to cover her tracks. Which term best describes this type of activity?",
    "options": [
      "Denial of service attack",
      "Advanced persistent threat attack",
      "Extortion attack",
      "Website defacement attack"
    ],
    "correct_idx": 1,
    "explanation": "During an advanced persistent threat attack, there is a sophisticated cyber criminal seeking to expand the attack over time, probing the network, finding more systems with vulnerabilities, exploiting them, and gaining unauthorized access to more and more systems and data, all the while doing things to cover their tracks.",
    "short_explanation_en": "During an advanced persistent threat attack, there is a sophisticated cyber criminal seeking to expand the attack over time, probing the network, finding more systems with vulnerabilities, exploiting them, and gaining unauthorized...",
    "question_th": "อาชญากรไซเบอร์ที่มีความซับซ้อนเข้าถึงเซิร์ฟเวอร์อีเมลของสถาบันการเงิน ติดตั้งมัลแวร์ และตลอดระยะเวลาหลายสัปดาห์ ย้ายไปยังเซิร์ฟเวอร์และระบบอื่น ๆ ในเครือข่ายของบริษัท ติดตั้งมัลแวร์และเครื่องมืออื่น ๆ ค้นหาข้อมูลรับรองอื่น ๆ ขโมยข้อมูล และลบ log เพื่อปกปิดร่องรอย คำใดอธิบายกิจกรรมประเภทนี้ได้ดีที่สุด?",
    "options_th": [
      "การโจมตีแบบ Denial of service",
      "การโจมตีแบบ Advanced persistent threat",
      "การโจมตีแบบ Extortion",
      "การโจมตีแบบ Website defacement"
    ],
    "explanation_th": "ระหว่างการโจมตีแบบ advanced persistent threat มีอาชญากรไซเบอร์ที่มีความซับซ้อนซึ่งพยายามขยายการโจมตีเมื่อเวลาผ่านไป สำรวจเครือข่าย ค้นหาระบบที่มีช่องโหว่เพิ่มเติม ใช้ประโยชน์จากช่องโหว่ และเข้าถึงระบบและข้อมูลมากขึ้นเรื่อย ๆ โดยปกปิดร่องรอยไปพร้อมกัน"
  },
  {
    "id": 158,
    "dom": 4,
    "question": "Antivirus software vendors use ______________ to keep up with the latest information about viruses and threats.",
    "options": [
      "Google",
      "National Vulnerability Database",
      "Threat intelligence",
      "National Security Agency"
    ],
    "correct_idx": 2,
    "explanation": "Organizations and product vendors use threat intelligence from a variety of sources. By collecting and studying data about threats, vendors can prepare for and defend against them.",
    "short_explanation_en": "Organizations and product vendors use threat intelligence from a variety of sources.",
    "question_th": "ผู้จำหน่ายซอฟต์แวร์แอนตี้ไวรัสใช้ ______________ เพื่อติดตามข้อมูลล่าสุดเกี่ยวกับไวรัสและภัยคุกคาม",
    "options_th": [
      "Google",
      "National Vulnerability Database",
      "Threat intelligence",
      "National Security Agency"
    ],
    "explanation_th": "องค์กรและผู้จำหน่ายผลิตภัณฑ์ใช้ threat intelligence จากแหล่งต่าง ๆ โดยการรวบรวมและศึกษาข้อมูลเกี่ยวกับภัยคุกคาม ผู้จำหน่ายสามารถเตรียมพร้อมและป้องกันภัยคุกคามเหล่านั้นได้"
  },
  {
    "id": 159,
    "dom": 4,
    "question": "When leveraging a third-party cloud service provider, which of the following is always the responsibility of the provider?",
    "options": [
      "Data security",
      "Physical security of the datacenter",
      "Identity and access management controls",
      "Endpoint protection"
    ],
    "correct_idx": 1,
    "explanation": "Physical security of the datacenter is always the responsibility of the cloud service provider.",
    "short_explanation_en": "Physical security of the datacenter is always the responsibility of the cloud service provider.",
    "question_th": "เมื่อใช้ผู้ให้บริการคลาวด์บุคคลที่สาม ข้อใดต่อไปนี้เป็นความรับผิดชอบของผู้ให้บริการเสมอ?",
    "options_th": [
      "ความปลอดภัยของข้อมูล",
      "ความปลอดภัยทางกายภาพของศูนย์ข้อมูล",
      "การควบคุมการบริหารจัดการตัวตนและการเข้าถึง",
      "การป้องกัน Endpoint"
    ],
    "explanation_th": "ความปลอดภัยทางกายภาพของศูนย์ข้อมูลเป็นความรับผิดชอบของผู้ให้บริการคลาวด์เสมอ"
  },
  {
    "id": 160,
    "dom": 4,
    "question": "An organization has built out a cloud environment in their own datacenter for exclusive use by their employees to allow other teams to provision and manage virtual resources. Which of the following cloud deployment models is this an example of?",
    "options": [
      "Public",
      "Private",
      "Community",
      "Hybrid"
    ],
    "correct_idx": 1,
    "explanation": "A private cloud deployment model consists of computing infrastructure and resources that are dedicated for use by a single organization.",
    "short_explanation_en": "A private cloud deployment model consists of computing infrastructure and resources that are dedicated for use by a single organization.",
    "question_th": "องค์กรได้สร้างสภาพแวดล้อมคลาวด์ในศูนย์ข้อมูลของตนเองเพื่อการใช้งานเฉพาะโดยพนักงานของตน เพื่อให้ทีมอื่น ๆ สามารถจัดสรรและจัดการทรัพยากรเสมือนได้ ข้อใดต่อไปนี้เป็นตัวอย่างของโมเดลการปรับใช้คลาวด์นี้?",
    "options_th": [
      "Public",
      "Private",
      "Community",
      "Hybrid"
    ],
    "explanation_th": "โมเดลการปรับใช้ private cloud ประกอบด้วยโครงสร้างพื้นฐานและทรัพยากรคอมพิวเตอร์ที่อุทิศให้กับการใช้งานโดยองค์กรเดียว"
  },
  {
    "id": 161,
    "dom": 4,
    "question": "An organization is hosting applications in a private cloud environment and also making use of Amazon Web Services (AWS) to load-balance the traffic for applications if there is a spike in demand. Which of the following cloud deployment models is this an example of?",
    "options": [
      "Public",
      "Private",
      "Community",
      "Hybrid"
    ],
    "correct_idx": 3,
    "explanation": "A hybrid cloud deployment model is a mix of the other models (such as a public and private model).",
    "short_explanation_en": "A hybrid cloud deployment model is a mix of the other models (such as a public and private model).",
    "question_th": "องค์กรกำลังโฮสต์แอปพลิเคชันในสภาพแวดล้อม private cloud และยังใช้ Amazon Web Services (AWS) เพื่อทำ load-balance ทราฟฟิกสำหรับแอปพลิเคชันหากมีความต้องการเพิ่มขึ้นกะทันหัน ข้อใดต่อไปนี้เป็นตัวอย่างของโมเดลการปรับใช้คลาวด์นี้?",
    "options_th": [
      "Public",
      "Private",
      "Community",
      "Hybrid"
    ],
    "explanation_th": "โมเดลการปรับใช้ hybrid cloud คือส่วนผสมของโมเดลอื่น ๆ (เช่น โมเดล public และ private)"
  },
  {
    "id": 162,
    "dom": 4,
    "question": "An organization is utilizing Google Mail (Gmail) as their e-mail service provider. Which of the following types of cloud service models is being utilized?",
    "options": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-premises"
    ],
    "correct_idx": 0,
    "explanation": "Software as a service (SaaS) provides customers with access to an application hosted by the cloud service provider (such as an e-mail service). CHAPTER 4 Security Operations This chapter discusses the following topics: • Data security • System hardening • Best practice security policies • Security awareness training This chapter covers the Certified in Cybersecurity Domain 5. Like Chapter 3, this",
    "short_explanation_en": "Software as a service (SaaS) provides customers with access to an application hosted by the cloud service provider (such as an e-mail service).",
    "question_th": "องค์กรใช้ Google Mail (Gmail) เป็นผู้ให้บริการอีเมล ข้อใดต่อไปนี้เป็นประเภทของโมเดลบริการคลาวด์ที่กำลังถูกใช้งาน?",
    "options_th": [
      "SaaS",
      "PaaS",
      "IaaS",
      "On-premises"
    ],
    "explanation_th": "Software as a service (SaaS) ให้ลูกค้าเข้าถึงแอปพลิเคชันที่โฮสต์โดยผู้ให้บริการคลาวด์ (เช่น บริการอีเมล)"
  },
  {
    "id": 180,
    "dom": 4,
    "question": "The address 8be2:4382:8d84:7ce2:ec0f:3908:d29a:903a is an:",
    "options": [
      "Web address",
      "IPv4 address",
      "IPv6 address",
      "Mac address"
    ],
    "correct_idx": 2,
    "explanation": "An IPv6 address is a 128-bit address represented as a sequence of eight groups of 16-bit hexadecimal values. An IPv4 address is a 32-bit address represented as a sequence of four 8-bit integers. A Mac address is a 48-bit address represented as six groups of 8 bits values in hexadecimal. A web address consists of a protocol name, a server address, and a resource path (see ISC2 Study Guide, chapter 4, module 1 - Understand Computer Networking).",
    "short_explanation_en": "An IPv6 address is a 128-bit address represented as a sequence of eight groups of 16-bit hexadecimal values.",
    "question_th": "ที่อยู่ 8be2:4382:8d84:7ce2:ec0f:3908:d29a:903a คือ:",
    "options_th": [
      "ที่อยู่เว็บ",
      "IPv4 address",
      "IPv6 address",
      "Mac address"
    ],
    "explanation_th": "IPv6 address คือที่อยู่ขนาด 128 บิต แสดงเป็นลำดับแปดกลุ่มของค่าเลขฐานสิบหก 16 บิต IPv4 address คือที่อยู่ขนาด 32 บิต แสดงเป็นลำดับสี่จำนวนเต็ม 8 บิต"
  },
  {
    "id": 183,
    "dom": 4,
    "question": "The cloud deployment model where a company has resources on-premise and in the cloud is known as:",
    "options": [
      "Hybrid cloud",
      "Multi-tenant",
      "Private cloud",
      "Community cloud"
    ],
    "correct_idx": 0,
    "explanation": "A hybrid cloud is a model that combines (i.e. orchestrates) on-premise infrastructure, private cloud services, and a public cloud to handle storage and service. A community cloud is an infrastructure where multiple organizations share resources and services based on common technological and regulatory necessities. Multi-tenancy refers to a context where several of a cloud vendor's customers share the same computing resources. A private cloud is a cloud computing model where the cloud infrastruct",
    "short_explanation_en": "A hybrid cloud is a model that combines (i.e. orchestrates) on-premise infrastructure, private cloud services, and a public cloud to handle storage and service.",
    "question_th": "โมเดลการปรับใช้คลาวด์ที่บริษัทมีทรัพยากรทั้งแบบ on-premise และในคลาวด์ เรียกว่า:",
    "options_th": [
      "Hybrid cloud",
      "Multi-tenant",
      "Private cloud",
      "Community cloud"
    ],
    "explanation_th": "Hybrid cloud คือโมเดลที่ผสมผสาน (ประสาน) โครงสร้างพื้นฐาน on-premise บริการ private cloud และ public cloud เพื่อจัดการการจัดเก็บและบริการ"
  },
  {
    "id": 184,
    "dom": 4,
    "question": "Which of the following is a public IP?",
    "options": [
      "13.16.123.1",
      "192.168.123.1",
      "172.16.123.1",
      "10.221.123.1"
    ],
    "correct_idx": 0,
    "explanation": "The ranges of IP addresses 10.0.0.0 to 10.255.255.254, 172.16.0.0 to 172.31.255.254, and 192.168.0.0 to 192.168.255.254 are reserved for private use (see ISC2 Study Guide, chapter 4, module 1, under Internet Protocol - IPv4 and IPv6). Therefore, the IP address 13.16.123.1 is the only address in a public range.",
    "short_explanation_en": "The ranges of IP addresses 10.0.0.0 to 10.255.255.254, 172.16.0.0 to 172.31.255.254, and 192.168.0.0 to 192.168.255.254 are reserved for private use (see ISC2 Study Guide, chapter 4, module 1, under Internet Protocol - IPv4 and IPv6).",
    "question_th": "ข้อใดต่อไปนี้เป็น public IP?",
    "options_th": [
      "13.16.123.1",
      "192.168.123.1",
      "172.16.123.1",
      "10.221.123.1"
    ],
    "explanation_th": "ช่วง IP address 10.0.0.0 ถึง 10.255.255.254, 172.16.0.0 ถึง 172.31.255.254 และ 192.168.0.0 ถึง 192.168.255.254 ถูกสงวนไว้สำหรับการใช้งานส่วนตัว ดังนั้น 13.16.123.1 จึงเป็น IP address เดียวในช่วงสาธารณะ"
  },
  {
    "id": 186,
    "dom": 4,
    "question": "Which devices would be more effective in detecting an intrusion into a network?",
    "options": [
      "Routers",
      "HIDS",
      "Firewalls",
      "NIDS"
    ],
    "correct_idx": 3,
    "explanation": "Network intrusion detection systems (NIDS) are network devices that detect malicious traffic on a network. Host intrusion detection systems (HIDS) are applications that monitor computer systems for intrusion. Typically, HIDS are not concerned with network devices. A firewall is a device that filters incoming Internet traffic. Routers receive and forward traffic, but (typically) do not analyze it.",
    "short_explanation_en": "Network intrusion detection systems (NIDS) are network devices that detect malicious traffic on a network.",
    "question_th": "อุปกรณ์ใดจะมีประสิทธิภาพมากกว่าในการตรวจจับการบุกรุกเข้าสู่เครือข่าย?",
    "options_th": [
      "Routers",
      "HIDS",
      "Firewalls",
      "NIDS"
    ],
    "explanation_th": "Network intrusion detection systems (NIDS) คืออุปกรณ์เครือข่ายที่ตรวจจับทราฟฟิกที่เป็นอันตรายบนเครือข่าย Host intrusion detection systems (HIDS) คือแอปพลิเคชันที่เฝ้าติดตามระบบคอมพิวเตอร์เพื่อการบุกรุก"
  },
  {
    "id": 190,
    "dom": 4,
    "question": "Which type of attack has the PRIMARY objective controlling the system from outside?",
    "options": [
      "Backdoors",
      "Rootkits",
      "Cross-Site Scripting",
      "Trojans"
    ],
    "correct_idx": 0,
    "explanation": "Trojans and Rootkits are often used to install backdoors. A backdoor is a malicious feature that listens for commands on a specific logical port (TCP or UDP) and executes them on the attacked system or device, thereby giving direct control of the system or device to a malicious outside entity (or program). Cross-Site Scripting can execute code with the same github.com/ayemunhossain permissions as the scripts generated by the target website, compromising the confidentiality and integrity of data",
    "short_explanation_en": "Trojans and Rootkits are often used to install backdoors. A backdoor is a malicious feature that listens for commands on a specific logical port (TCP or UDP) and executes them on the attacked system or device, thereby giving direct...",
    "question_th": "การโจมตีประเภทใดที่มีวัตถุประสงค์หลักในการควบคุมระบบจากภายนอก?",
    "options_th": [
      "Backdoors",
      "Rootkits",
      "Cross-Site Scripting",
      "Trojans"
    ],
    "explanation_th": "Trojans และ Rootkits มักถูกใช้เพื่อติดตั้ง backdoors Backdoor คือคุณสมบัติที่เป็นอันตรายซึ่งรอฟังคำสั่งบนพอร์ตตรรกะเฉพาะ (TCP หรือ UDP) และดำเนินการบนระบบหรืออุปกรณ์ที่ถูกโจมตี ทำให้หน่วยงานภายนอกที่เป็นอันตรายสามารถควบคุมระบบหรืออุปกรณ์ได้โดยตรง"
  },
  {
    "id": 191,
    "dom": 4,
    "question": "Which of the following is not a protocol of the OSI Level 3?",
    "options": [
      "SNMP",
      "ICMP",
      "IGMP",
      "IP"
    ],
    "correct_idx": 0,
    "explanation": "Internet Protocol (IP) is known to be a level 3 protocol. Internet Control Message Protocol (ICMP) and Internet Group Management Protocol (IGMP) are also level 3 protocols. Simple Network Management Protocol (SNMP) is a protocol used to configure and monitor devices attached to networks. It is an application-level protocol (level 7), and therefore the only option that is not from level 3.",
    "short_explanation_en": "Internet Protocol (IP) is known to be a level 3 protocol. Internet Control Message Protocol (ICMP) and Internet Group Management Protocol (IGMP) are also level 3 protocols.",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่โปรโตคอลของ OSI Level 3?",
    "options_th": [
      "SNMP",
      "ICMP",
      "IGMP",
      "IP"
    ],
    "explanation_th": "Internet Protocol (IP) เป็นโปรโตคอลระดับ 3 ที่รู้จักกันดี Internet Control Message Protocol (ICMP) และ Internet Group Management Protocol (IGMP) ก็เป็นโปรโตคอลระดับ 3 เช่นกัน Simple Network Management Protocol (SNMP) เป็นโปรโตคอลระดับแอปพลิเคชัน (level 7)"
  },
  {
    "id": 193,
    "dom": 4,
    "question": "The SMTP protocol operates at OSI Level:",
    "options": [
      "7",
      "25",
      "3",
      "23"
    ],
    "correct_idx": 0,
    "explanation": "Simple Mail Transport Protocol (SNMP) is an application layer protocol that operates at level 7. Level 3 corresponds to the network layer. There are no OSI layers above level 7. The number 25 presumably refers to the TCP/IP port of the SMTP protocol. The number 23, in turn, refers to the TCP/IP port of the Telnet protocol.",
    "short_explanation_en": "Simple Mail Transport Protocol (SNMP) is an application layer protocol that operates at level 7.",
    "question_th": "โปรโตคอล SMTP ทำงานที่ OSI Level:",
    "options_th": [
      "7",
      "25",
      "3",
      "23"
    ],
    "explanation_th": "Simple Mail Transport Protocol (SMTP) เป็นโปรโตคอลชั้นแอปพลิเคชันที่ทำงานที่ level 7 Level 3 สอดคล้องกับ network layer หมายเลข 25 หมายถึงพอร์ต TCP/IP ของโปรโตคอล SMTP"
  },
  {
    "id": 202,
    "dom": 4,
    "question": "Which type of attack will most effectively maintain remote access and control over the victim's computer?",
    "options": [
      "Trojans",
      "Phishing",
      "Cross-Site Scripting",
      "Rootkits"
    ],
    "correct_idx": 3,
    "explanation": "A rootkit tries to maintain root-level access while concealing malicious activity. It typically creates a backdoor and attempts to remain undetected by anti-malware software. A rootkit is active while the system is running. Trojans can also create backdoors but are only active while a specific application is running, and thus are not as effective as a rootkit. Phishing is used to initiate attacks by redirecting the user to fake websites. Cross-Site Scripting is used to attack websites.",
    "short_explanation_en": "A rootkit tries to maintain root-level access while concealing malicious activity.",
    "question_th": "การโจมตีประเภทใดที่มีประสิทธิภาพมากที่สุดในการรักษาการเข้าถึงและควบคุมคอมพิวเตอร์ของเหยื่อจากระยะไกล?",
    "options_th": [
      "Trojans",
      "Phishing",
      "Cross-Site Scripting",
      "Rootkits"
    ],
    "explanation_th": "Rootkit พยายามรักษาการเข้าถึงระดับ root ในขณะที่ปกปิดกิจกรรมที่เป็นอันตราย มักสร้าง backdoor และพยายามหลบเลี่ยงการตรวจจับจากซอฟต์แวร์แอนตี้มัลแวร์ Rootkit ทำงานอยู่ตลอดเวลาที่ระบบทำงาน"
  },
  {
    "id": 207,
    "dom": 4,
    "question": "Which type of attack PRIMARILY aims to make a resource inaccessible to its intended users?",
    "options": [
      "Denials of Service",
      "Phishing",
      "Trojans",
      "Cross-Site Scripting"
    ],
    "correct_idx": 0,
    "explanation": "A denial of service attack (DoS) consists in compromising the availability of a system or service through a malicious overload of requests, which causes the activation of safety mechanisms that delay or limit the availability of that system or service. Due to this, systems or services are rendered inaccessible to their intended users. Trojans, phishing, and cross-site scripting attacks try to covertly gain access to the system or data, and therefore do not primarily aim at github.com/ayemunhossa",
    "short_explanation_en": "A denial of service attack (DoS) consists in compromising the availability of a system or service through a malicious overload of requests, which causes the activation of safety mechanisms that delay or limit the availability of that...",
    "question_th": "การโจมตีประเภทใดที่มีวัตถุประสงค์หลักในการทำให้ทรัพยากรไม่สามารถเข้าถึงได้สำหรับผู้ใช้ที่ตั้งใจไว้?",
    "options_th": [
      "Denials of Service",
      "Phishing",
      "Trojans",
      "Cross-Site Scripting"
    ],
    "explanation_th": "การโจมตีแบบ denial of service (DoS) เกี่ยวข้องกับการทำให้ availability ของระบบหรือบริการถูกบุกรุกผ่านการท่วมคำขอที่เป็นอันตราย ซึ่งก่อให้เกิดการเปิดใช้กลไกความปลอดภัยที่ทำให้ availability ของระบบหรือบริการล่าช้าหรือจำกัด"
  },
  {
    "id": 208,
    "dom": 4,
    "question": "Which type of attack embeds malicious payload inside a reputable or trusted software?",
    "options": [
      "Trojans",
      "Phishing",
      "Rootkits",
      "Cross-Site Scripting"
    ],
    "correct_idx": 0,
    "explanation": "Trojans are a type of software that appears legitimate but has hidden malicious functions that evade security mechanisms, typically by exploiting legitimate authorizations of the user that invokes the program. Rootkits try to maintain privilege-level access while concealing malicious activity. They often replace system files, so they are activated when the system is restarted. Trojans often install Rootkits, but Rootkits are not the Trojans themselves). Phishing typically tries to redirect the u",
    "short_explanation_en": "Trojans are a type of software that appears legitimate but has hidden malicious functions that evade security mechanisms, typically by exploiting legitimate authorizations of the user that invokes the program.",
    "question_th": "การโจมตีประเภทใดที่ฝัง payload ที่เป็นอันตรายไว้ในซอฟต์แวร์ที่มีชื่อเสียงหรือเชื่อถือได้?",
    "options_th": [
      "Trojans",
      "Phishing",
      "Rootkits",
      "Cross-Site Scripting"
    ],
    "explanation_th": "Trojans คือซอฟต์แวร์ประเภทหนึ่งที่ดูเหมือนถูกต้องตามกฎหมายแต่มีฟังก์ชันที่เป็นอันตรายซ่อนอยู่ซึ่งหลบเลี่ยงกลไกความปลอดภัย โดยปกติจะใช้ประโยชน์จากการอนุญาตที่ถูกต้องของผู้ใช้ที่เรียกใช้โปรแกรม"
  },
  {
    "id": 209,
    "dom": 4,
    "question": "Which tool is commonly used to sniff network traffic? (★)",
    "options": [
      "Burp Suite",
      "John the Ripper",
      "Wireshark",
      "Nslookup"
    ],
    "correct_idx": 2,
    "explanation": "Wireshark is the world's most widely-used and complete network protocol analyzer that, informally speaking, is the \"microscope\" of network traffic. John the Ripper is a famous Open Source password security auditing and password recovery tool. Nslookup is a network administration command-line tool for querying the Domain Name System that obtains the mapping between the domain name, IP address, or other DNS records. Finally, Burp Suite is a set of well- github.com/ayemunhossain known vulnerability",
    "short_explanation_en": "Wireshark is the world's most widely-used and complete network protocol analyzer that, informally speaking, is the \"microscope\" of network traffic.",
    "question_th": "เครื่องมือใดที่มักใช้ในการดักฟังทราฟฟิกเครือข่าย?",
    "options_th": [
      "Burp Suite",
      "John the Ripper",
      "Wireshark",
      "Nslookup"
    ],
    "explanation_th": "Wireshark คือเครื่องมือวิเคราะห์โปรโตคอลเครือข่ายที่ใช้กันอย่างแพร่หลายและครบถ้วนที่สุดในโลก ซึ่งเปรียบเสมือน 'กล้องจุลทรรศน์' ของทราฟฟิกเครือข่าย"
  },
  {
    "id": 210,
    "dom": 4,
    "question": "Which of these is not an attack against an IP network?",
    "options": [
      "Side-channel Attack",
      "Man-in-the-middle Attack",
      "Fragmented Packet Attack",
      "Oversized Packet Attack"
    ],
    "correct_idx": 0,
    "explanation": "Man-in-the-middle Attacks, Oversized Packet Attacks, and Fragmented Packet Attacks are typical IP network attacks (see ISC2 Study Guide, Chapter 4, Module 1, under Security of the Network). Side Channel Attacks are non-invasive attacks that extract information from devices (typically devices running cryptographic algorithms), and therefore do not aim at IP networks.",
    "short_explanation_en": "Man-in-the-middle Attacks, Oversized Packet Attacks, and Fragmented Packet Attacks are typical IP network attacks (see ISC2 Study Guide, Chapter 4, Module 1, under Security of the Network).",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่การโจมตีต่อเครือข่าย IP?",
    "options_th": [
      "Side-channel Attack",
      "Man-in-the-middle Attack",
      "Fragmented Packet Attack",
      "Oversized Packet Attack"
    ],
    "explanation_th": "Man-in-the-middle Attacks, Oversized Packet Attacks และ Fragmented Packet Attacks เป็นการโจมตีเครือข่าย IP ทั่วไป Side Channel Attacks เป็นการโจมตีแบบไม่รุกล้ำที่ดึงข้อมูลจากอุปกรณ์ (โดยทั่วไปคืออุปกรณ์ที่รันอัลกอริทึมการเข้ารหัส) จึงไม่ได้มุ่งเป้าไปที่เครือข่าย IP"
  },
  {
    "id": 212,
    "dom": 4,
    "question": "Which device is used to connect a LAN to the Internet?",
    "options": [
      "SIEM",
      "HIDS",
      "Router",
      "Firewall"
    ],
    "correct_idx": 2,
    "explanation": "A router is a device that acts as a gateway between two or more networks by relaying and directing data packets between them. A firewall is a device that filters traffic coming from the Internet but does not seek to distribute traffic. Neither Security Information and Event Management (SIEM) systems nor Host Intrusion Detection Systems (HIDS) are monitoring devices nor applications that aim at inter-network connectivity.",
    "short_explanation_en": "A router is a device that acts as a gateway between two or more networks by relaying and directing data packets between them.",
    "question_th": "อุปกรณ์ใดใช้เพื่อเชื่อมต่อ LAN กับอินเทอร์เน็ต?",
    "options_th": [
      "SIEM",
      "HIDS",
      "Router",
      "Firewall"
    ],
    "explanation_th": "Router คืออุปกรณ์ที่ทำหน้าที่เป็นเกตเวย์ระหว่างสองเครือข่ายขึ้นไป โดยส่งต่อและกำหนดเส้นทางแพ็กเก็ตข้อมูลระหว่างกัน Firewall เป็นอุปกรณ์ที่กรองทราฟฟิกจากอินเทอร์เน็ตแต่ไม่ได้มุ่งกระจายทราฟฟิก"
  },
  {
    "id": 216,
    "dom": 4,
    "question": "Which port is used to secure communication over the web (HTTPS)?",
    "options": [
      "69",
      "80 github.com/ayemunhossain",
      "25",
      "443"
    ],
    "correct_idx": 3,
    "explanation": "All options show examples of logical communication ports. Port 80 is reserved for plain HTTP connections, port 69 for TFTP protocol; and port 25 for SMTP protocol. Port 443 is the one reserved for HTTPS connections.",
    "short_explanation_en": "All options show examples of logical communication ports. Port 80 is reserved for plain HTTP connections, port 69 for TFTP protocol; and port 25 for SMTP protocol.",
    "question_th": "พอร์ตใดที่ใช้เพื่อการสื่อสารที่ปลอดภัยบนเว็บ (HTTPS)?",
    "options_th": [
      "69",
      "80",
      "25",
      "443"
    ],
    "explanation_th": "ตัวเลือกทั้งหมดแสดงตัวอย่างของพอร์ตการสื่อสารเชิงตรรกะ พอร์ต 80 สงวนไว้สำหรับการเชื่อมต่อ HTTP แบบธรรมดา พอร์ต 69 สำหรับโปรโตคอล TFTP และพอร์ต 25 สำหรับโปรโตคอล SMTP พอร์ต 443 คือพอร์ตที่สงวนไว้สำหรับการเชื่อมต่อ HTTPS"
  },
  {
    "id": 222,
    "dom": 4,
    "question": "Which of the following attacks take advantage of poor input validation in websites?",
    "options": [
      "Trojans",
      "Cross-Site Scripting",
      "Phishing",
      "Rootkits"
    ],
    "correct_idx": 1,
    "explanation": "Cross-Site Scripting (XSS) is a type of attack where malicious executable scripts are injected into the code of an otherwise benign website (or web application). Websites are vulnerable to XSS when they display data originating from requests or forms without validating it (and further sanitizing it, so that it is not executable). Trojans and phishing are github.com/ayemunhossain attacks where software applications and messages try to appear legitimate but have hidden malicious functions, not nec",
    "short_explanation_en": "Cross-Site Scripting (XSS) is a type of attack where malicious executable scripts are injected into the code of an otherwise benign website (or web application).",
    "question_th": "การโจมตีใดต่อไปนี้ใช้ประโยชน์จากการตรวจสอบข้อมูลนำเข้าที่ไม่ดีในเว็บไซต์?",
    "options_th": [
      "Trojans",
      "Cross-Site Scripting",
      "Phishing",
      "Rootkits"
    ],
    "explanation_th": "Cross-Site Scripting (XSS) คือการโจมตีที่สคริปต์ที่สามารถรันได้ซึ่งเป็นอันตรายถูกแทรกเข้าไปในโค้ดของเว็บไซต์ที่ไม่มีอันตราย เว็บไซต์มีความเสี่ยงต่อ XSS เมื่อแสดงข้อมูลที่มาจากคำขอหรือแบบฟอร์มโดยไม่ได้ตรวจสอบความถูกต้อง"
  },
  {
    "id": 230,
    "dom": 4,
    "question": "Which of the following types of devices inspect packet header information to either allow or deny network traffic?",
    "options": [
      "Hubs",
      "Firewalls",
      "Routers",
      "Switches"
    ],
    "correct_idx": 1,
    "explanation": "Standard firewalls examine IP packet headers and flags in order to block or allow traffic from predefined rules. More recently, firewalls with Intrusion Detection Capability (IDS) also analyze each individual packet, looking for specific patterns known to be malicious, and then blocking traffic whenever such patterns are found. Routers, Switches, and Hubs have limited packet filtering capabilities, or none at all. A Router is a device that acts as a gateway between two or more networks by relayi",
    "short_explanation_en": "Standard firewalls examine IP packet headers and flags in order to block or allow traffic from predefined rules.",
    "question_th": "อุปกรณ์ประเภทใดต่อไปนี้ที่ตรวจสอบข้อมูล header ของแพ็กเก็ตเพื่ออนุญาตหรือปฏิเสธทราฟฟิกเครือข่าย?",
    "options_th": [
      "Hubs",
      "Firewalls",
      "Routers",
      "Switches"
    ],
    "explanation_th": "ไฟร์วอลล์มาตรฐานตรวจสอบ header และ flag ของแพ็กเก็ต IP เพื่อบล็อกหรืออนุญาตทราฟฟิกตามกฎที่กำหนดไว้ล่วงหน้า Routers, Switches และ Hubs มีความสามารถในการกรองแพ็กเก็ตที่จำกัดหรือไม่มีเลย"
  },
  {
    "id": 231,
    "dom": 4,
    "question": "A web server that accepts requests from external clients should be placed in which network?",
    "options": [
      "Intranet github.com/ayemunhossain",
      "DMZ",
      "Internal Network",
      "VPN"
    ],
    "correct_idx": 1,
    "explanation": "In Cybersecurity, a DMZ (demilitarized zone) is a physical or logical subnetwork that contains and exposes external-facing services (such as web services). An Internal Network is an organization-controlled network that is isolated from external access. An Intranet is itself an internal network that supports similar protocols and services to the Internet, but only for the organization's internal use. A Virtual Private Network (VPN) creates a secure tunnel between endpoints (whether between networ",
    "short_explanation_en": "In Cybersecurity, a DMZ (demilitarized zone) is a physical or logical subnetwork that contains and exposes external-facing services (such as web services).",
    "question_th": "เว็บเซิร์ฟเวอร์ที่รับคำขอจากไคลเอนต์ภายนอกควรถูกวางไว้ในเครือข่ายใด?",
    "options_th": [
      "Intranet",
      "DMZ",
      "Internal Network",
      "VPN"
    ],
    "explanation_th": "ในความปลอดภัยไซเบอร์ DMZ (demilitarized zone) คือเครือข่ายย่อยทางกายภาพหรือทางตรรกะที่มีและเปิดเผยบริการที่หันหน้าออกสู่ภายนอก (เช่น บริการเว็บ) Internal Network คือเครือข่ายที่องค์กรควบคุมซึ่งแยกออกจากการเข้าถึงจากภายนอก"
  },
  {
    "id": 241,
    "dom": 4,
    "question": "Which are the three packets used on the TCP connection handshake? (★)",
    "options": [
      "Offer → Request → ACK",
      "SYN → SYN/ACK → ACK",
      "SYN → ACK → FIN",
      "Discover → Offer → Request"
    ],
    "correct_idx": 1,
    "explanation": "TCP uses a three-way handshake to establish a reliable connection by exchanging three packets with the SYN, SYN/ACK and ACK flags. Although SYN, ACK and FIN are valid TCP packet flags, the sequence SYN → ACK → FIN is not the TCP handshake. Both the sequences Discover → Offer → Request and Offer → Request → ACK are used in DHCP (but are still incomplete, since DHCP is a four-way handshake).",
    "short_explanation_en": "TCP uses a three-way handshake to establish a reliable connection by exchanging three packets with the SYN, SYN/ACK and ACK flags.",
    "question_th": "แพ็กเก็ตสามตัวที่ใช้ในการ handshake การเชื่อมต่อ TCP คือ?",
    "options_th": [
      "Offer → Request → ACK",
      "SYN → SYN/ACK → ACK",
      "SYN → ACK → FIN",
      "Discover → Offer → Request"
    ],
    "explanation_th": "TCP ใช้ three-way handshake เพื่อสร้างการเชื่อมต่อที่เชื่อถือได้โดยการแลกเปลี่ยนแพ็กเก็ตสามตัวด้วย flag SYN, SYN/ACK และ ACK แม้ SYN, ACK และ FIN จะเป็น TCP packet flag ที่ถูกต้อง แต่ลำดับ SYN → ACK → FIN ไม่ใช่ TCP handshake"
  },
  {
    "id": 243,
    "dom": 4,
    "question": "What is the consequence of a Denial Of Service attack?",
    "options": [
      "Exhaustion of device resources",
      "Malware Infection",
      "Increase in the availability of resources",
      "Remote control of a device"
    ],
    "correct_idx": 0,
    "explanation": "A denial of service attack (DoS) consists in a malicious overload of requests which will eventually lead to the exhaustion of resources, rendering the service unavailable, as well as causing the activation of safety mechanisms that delay or limit the availability of that system or service. This type of attack seeks to compromise service availability, but not to control a device nor to install malware.",
    "short_explanation_en": "A denial of service attack (DoS) consists in a malicious overload of requests which will eventually lead to the exhaustion of resources, rendering the service unavailable, as well as causing the activation of safety mechanisms that...",
    "question_th": "ผลที่ตามมาของการโจมตีแบบ Denial Of Service คืออะไร?",
    "options_th": [
      "การทำให้ทรัพยากรของอุปกรณ์หมดสิ้น",
      "การติดเชื้อมัลแวร์",
      "การเพิ่มความพร้อมใช้งานของทรัพยากร",
      "การควบคุมอุปกรณ์จากระยะไกล"
    ],
    "explanation_th": "การโจมตีแบบ denial of service (DoS) เกี่ยวข้องกับการท่วมคำขอที่เป็นอันตรายซึ่งในที่สุดจะนำไปสู่การหมดสิ้นของทรัพยากร ทำให้บริการไม่พร้อมใช้งาน รวมถึงก่อให้เกิดการเปิดใช้กลไกความปลอดภัยที่ทำให้ availability ของระบบหรือบริการล่าช้าหรือจำกัด"
  },
  {
    "id": 246,
    "dom": 4,
    "question": "Which of these tools is commonly used to crack passwords? (★)",
    "options": [
      "Burp Suite",
      "Nslookup github.com/ayemunhossain",
      "John the Ripper",
      "Wireshark"
    ],
    "correct_idx": 2,
    "explanation": "John the Ripper is a famous Open Source password security auditing and password recovery tool. Burp Suite is a well- known set of tools for vulnerability scanning, penetration testing, and web app security (not for cracking passwords). The remaining options are both network analysis tools. Wireshark is the most used network protocol analyzer in the world. Nslookup is a network administration command-line tool for querying the Domain Name System to obtain the mapping between the domain name, IP a",
    "short_explanation_en": "John the Ripper is a famous Open Source password security auditing and password recovery tool.",
    "question_th": "เครื่องมือใดต่อไปนี้มักใช้ในการเจาะรหัสผ่าน?",
    "options_th": [
      "Burp Suite",
      "Nslookup",
      "John the Ripper",
      "Wireshark"
    ],
    "explanation_th": "John the Ripper คือเครื่องมือตรวจสอบความปลอดภัยรหัสผ่านและกู้คืนรหัสผ่านแบบ Open Source ที่มีชื่อเสียง Burp Suite เป็นชุดเครื่องมือที่รู้จักกันดีสำหรับการสแกนช่องโหว่ การทดสอบเจาะระบบ และความปลอดภัยของเว็บแอป (ไม่ใช่สำหรับเจาะรหัสผ่าน)"
  },
  {
    "id": 248,
    "dom": 4,
    "question": "In which cloud deployment model do companies share resources and infrastructure on the cloud?",
    "options": [
      "Hybrid cloud",
      "Multi-tenant github.com/ayemunhossain",
      "Private cloud",
      "Community cloud"
    ],
    "correct_idx": 3,
    "explanation": "A private cloud is a cloud computing model where the cloud infrastructure is dedicated to a single organization (and never shared with others). Multitenancy means that multiple cloud vendor customers (i.e. tenants) share the same computing resources. A community cloud is an infrastructure where multiple organizations share resources and infrastructure based on common needs (that can be technological or regulatory). Finally, a hybrid cloud refers to a model that combines (i.e. orchestrates) on-pr",
    "short_explanation_en": "A private cloud is a cloud computing model where the cloud infrastructure is dedicated to a single organization (and never shared with others).",
    "question_th": "ในโมเดลการปรับใช้คลาวด์ใดที่บริษัทแชร์ทรัพยากรและโครงสร้างพื้นฐานบนคลาวด์?",
    "options_th": [
      "Hybrid cloud",
      "Multi-tenant",
      "Private cloud",
      "Community cloud"
    ],
    "explanation_th": "Private cloud คือโมเดลคลาวด์คอมพิวติ้งที่โครงสร้างพื้นฐานคลาวด์อุทิศให้กับองค์กรเดียว (และไม่เคยแชร์กับผู้อื่น) Multitenancy หมายความว่าลูกค้าของผู้จำหน่ายคลาวด์หลายรายแชร์ทรัพยากรคอมพิวเตอร์เดียวกัน Community cloud คือโครงสร้างพื้นฐานที่หลายองค์กรแชร์ทรัพยากรและโครงสร้างพื้นฐานตามความต้องการร่วมกัน"
  },
  {
    "id": 252,
    "dom": 4,
    "question": "Which of these would be the best option if a network administrator needs to control access to a network?",
    "options": [
      "HIDS",
      "IDS",
      "SIEM github.com/ayemunhossain",
      "NAC"
    ],
    "correct_idx": 3,
    "explanation": "Network Access Control (NAC) refers to a class of mechanisms that prevent access to a network until a user (or the user's device) either presents the relevant credentials, or passes the results of health checks performed on the client device. Security Information and Event Management (SIEM), Host Intrusion Detection Systems (HIDS), and Intrusion Detection Systems (IDS) are all monitoring systems.",
    "short_explanation_en": "Network Access Control (NAC) refers to a class of mechanisms that prevent access to a network until a user (or the user's device) either presents the relevant credentials, or passes the results of health checks performed on the client...",
    "question_th": "ตัวเลือกใดต่อไปนี้ดีที่สุดหากผู้ดูแลระบบเครือข่ายต้องการควบคุมการเข้าถึงเครือข่าย?",
    "options_th": [
      "HIDS",
      "IDS",
      "SIEM",
      "NAC"
    ],
    "explanation_th": "Network Access Control (NAC) หมายถึงกลไกประเภทหนึ่งที่ป้องกันการเข้าถึงเครือข่ายจนกว่าผู้ใช้ (หรืออุปกรณ์ของผู้ใช้) จะนำเสนอข้อมูลรับรองที่เกี่ยวข้อง หรือผ่านผลการตรวจสอบสุขภาพที่ดำเนินการบนอุปกรณ์ไคลเอนต์"
  },
  {
    "id": 255,
    "dom": 4,
    "question": "If there is no time constraint, which protocol should be employed to establish a reliable connection between two devices?",
    "options": [
      "TCP",
      "DHCP",
      "SNMP",
      "UDP"
    ],
    "correct_idx": 0,
    "explanation": "TCP is used for connection-oriented communication, verifies data delivery, and is known to favor reliability. In a congested network, TCP delays data transmission, and thus cannot guarantee delivery under time constraints. UDP favors speed and efficiency over reliability, and thus cannot ensure a reliable connection. DHCP and SNMP are (respectively) a device configuration and a device management protocol, which means that neither aims to establish connections between devices.",
    "short_explanation_en": "TCP is used for connection-oriented communication, verifies data delivery, and is known to favor reliability.",
    "question_th": "หากไม่มีข้อจำกัดด้านเวลา โปรโตคอลใดควรถูกใช้เพื่อสร้างการเชื่อมต่อที่เชื่อถือได้ระหว่างสองอุปกรณ์?",
    "options_th": [
      "TCP",
      "DHCP",
      "SNMP",
      "UDP"
    ],
    "explanation_th": "TCP ใช้สำหรับการสื่อสารแบบ connection-oriented ตรวจสอบการส่งข้อมูล และเป็นที่รู้จักกันดีว่าให้ความสำคัญกับความน่าเชื่อถือ ในเครือข่ายที่มีความคับคั่ง TCP จะทำให้การส่งข้อมูลล่าช้า จึงไม่สามารถรับประกันการส่งภายใต้ข้อจำกัดด้านเวลาได้"
  },
  {
    "id": 257,
    "dom": 4,
    "question": "In which cloud model does the cloud customer have LESS responsibility over the infrastructure? (★)",
    "options": [
      "IaaS",
      "FaaS",
      "PaaS",
      "SaaS"
    ],
    "correct_idx": 3,
    "explanation": "In Software as a Service (SaaS), consumers may control user-specific application configuration settings, but neither the underlying application logic nor the infrastructure. In the Function as a Service (FaaS) model, cloud customers deploy application-level functionality (typically as microservices) and are charged only when this functionality is executed. In Platform as a Service (PaaS), the cloud customer does not manage or control the underlying cloud infrastructure (wnich includes the networ",
    "short_explanation_en": "In Software as a Service (SaaS), consumers may control user-specific application configuration settings, but neither the underlying application logic nor the infrastructure.",
    "question_th": "ในโมเดลคลาวด์ใดที่ลูกค้าคลาวด์มีความรับผิดชอบน้อยกว่าต่อโครงสร้างพื้นฐาน?",
    "options_th": [
      "IaaS",
      "FaaS",
      "PaaS",
      "SaaS"
    ],
    "explanation_th": "ใน Software as a Service (SaaS) ผู้บริโภคอาจควบคุมการตั้งค่าคอนฟิกแอปพลิเคชันเฉพาะผู้ใช้ แต่ไม่ใช่ตรรกะแอปพลิเคชันพื้นฐานหรือโครงสร้างพื้นฐาน ในโมเดล Function as a Service (FaaS) ลูกค้าคลาวด์ปรับใช้ฟังก์ชันระดับแอปพลิเคชัน"
  },
  {
    "id": 266,
    "dom": 4,
    "question": "Malicious emails that aim to attack company executives are an example of:",
    "options": [
      "Trojans",
      "Whaling",
      "Phishing",
      "Rootkits"
    ],
    "correct_idx": 1,
    "explanation": "Phishing is a digital social engineering attack that uses authentic-looking (but counterfeit) e-mail messages to request information from users, or to get them to unknowingly execute an action that will make way for the attacker. Whaling attacks are phishing attacks that target high-ranking members of organizations. After gaining root-level access to a host, rootkits are used by an attacker to conceal malicious activities while keeping root-level access. Trojans are a type of software that appea",
    "short_explanation_en": "Phishing is a digital social engineering attack that uses authentic-looking (but counterfeit) e-mail messages to request information from users, or to get them to unknowingly execute an action that will make way for the attacker.",
    "question_th": "อีเมลที่เป็นอันตรายที่มุ่งเป้าโจมตีผู้บริหารของบริษัทเป็นตัวอย่างของ:",
    "options_th": [
      "Trojans",
      "Whaling",
      "Phishing",
      "Rootkits"
    ],
    "explanation_th": "Phishing คือการโจมตีทางวิศวกรรมสังคมทางดิจิทัลที่ใช้ข้อความอีเมลที่ดูน่าเชื่อถือ (แต่ปลอมแปลง) เพื่อขอข้อมูลจากผู้ใช้ Whaling คือการโจมตีแบบ phishing ที่มุ่งเป้าไปที่สมาชิกระดับสูงขององค์กร"
  },
  {
    "id": 268,
    "dom": 4,
    "question": "Which type of attack attempts to trick the user into revealing personal information by sending a fraudulent message?",
    "options": [
      "Phishing",
      "Cross-Site Scripting",
      "Denials of Service",
      "Trojans"
    ],
    "correct_idx": 0,
    "explanation": "A phishing attack emails a fraudulent message to trick the recipient into disclosing sensitive information to the attacker.A Cross-Site Scripting attack tries to execute code on another website. Trojans are software that appear legitimate, but that have hidden malicious functions. Trojans may be sent in a message, but are not the message themselves. A denial of service attack (DoS) consists in compromising the availability of a system or service through a malicious overload of requests, which ca",
    "short_explanation_en": "A phishing attack emails a fraudulent message to trick the recipient into disclosing sensitive information to the attacker.A Cross-Site Scripting attack tries to execute code on another website.",
    "question_th": "การโจมตีประเภทใดที่พยายามหลอกให้ผู้ใช้เปิดเผยข้อมูลส่วนบุคคลโดยการส่งข้อความหลอกลวง?",
    "options_th": [
      "Phishing",
      "Cross-Site Scripting",
      "Denials of Service",
      "Trojans"
    ],
    "explanation_th": "การโจมตีแบบ phishing ส่งข้อความหลอกลวงทางอีเมลเพื่อหลอกให้ผู้รับเปิดเผยข้อมูลที่ละเอียดอ่อนต่อผู้โจมตี Cross-Site Scripting พยายามรันโค้ดบนเว็บไซต์อื่น"
  },
  {
    "id": 270,
    "dom": 4,
    "question": "Which type of attack has the PRIMARY objective of encrypting devices and their data, and then demanding a ransom payment for the decryption key?",
    "options": [
      "Ransomware",
      "Trojan",
      "Cross-Site Scripting",
      "Phishing"
    ],
    "correct_idx": 0,
    "explanation": "Ransomware is malware designed to deny a user or organization access to files on their computer, by encrypting them and demanding a ransom payment for the decryption key. Trojans and phishing can be used to install ransomware on a system or device, but are not themselves the ransomware attack.",
    "short_explanation_en": "Ransomware is malware designed to deny a user or organization access to files on their computer, by encrypting them and demanding a ransom payment for the decryption key.",
    "question_th": "การโจมตีประเภทใดที่มีวัตถุประสงค์หลักในการเข้ารหัสอุปกรณ์และข้อมูลของอุปกรณ์นั้น แล้วเรียกร้องค่าไถ่เพื่อแลกกับกุญแจถอดรหัส?",
    "options_th": [
      "Ransomware",
      "Trojan",
      "Cross-Site Scripting",
      "Phishing"
    ],
    "explanation_th": "Ransomware คือมัลแวร์ที่ออกแบบมาเพื่อปฏิเสธการเข้าถึงไฟล์บนคอมพิวเตอร์ของผู้ใช้หรือองค์กร โดยการเข้ารหัสไฟล์เหล่านั้นและเรียกร้องการชำระเงินค่าไถ่เพื่อแลกกับกุญแจถอดรหัส"
  },
  {
    "id": 271,
    "dom": 4,
    "question": "Which of the following cloud models allows access to fundamental computer resources? (★)",
    "options": [
      "SaaS",
      "FaaS",
      "PaaS github.com/ayemunhossain",
      "IaaS"
    ],
    "correct_idx": 3,
    "explanation": "Infrastructure as a Service (IaaS) provides the capability to provision processing, storage, networks, and other fundamental computing resources. Platform as a Service (PaaS) enables the provisioning of applications, programming libraries, services, and tools that the provider supports. Unlike IaaS, consumers do not control their underlying cloud infrastructure (including operating systems and storage). Both Software as a Service (SaaS) and Function as a Service (FaaS) models abstract away from",
    "short_explanation_en": "Infrastructure as a Service (IaaS) provides the capability to provision processing, storage, networks, and other fundamental computing resources.",
    "question_th": "โมเดลคลาวด์ใดต่อไปนี้ที่ให้การเข้าถึงทรัพยากรคอมพิวเตอร์พื้นฐาน?",
    "options_th": [
      "SaaS",
      "FaaS",
      "PaaS",
      "IaaS"
    ],
    "explanation_th": "Infrastructure as a Service (IaaS) ให้ความสามารถในการจัดสรรการประมวลผล การจัดเก็บ เครือข่าย และทรัพยากรคอมพิวเตอร์พื้นฐานอื่น ๆ Platform as a Service (PaaS) ช่วยให้สามารถจัดสรรแอปพลิเคชัน ไลบรารีการเขียนโปรแกรม บริการ และเครื่องมือที่ผู้ให้บริการสนับสนุน"
  },
  {
    "id": 272,
    "dom": 4,
    "question": "How many layers does the OSI model have?",
    "options": [
      "7",
      "4",
      "6",
      "5"
    ],
    "correct_idx": 0,
    "explanation": "The OSI model organizes communicating systems according to 7 layers: Physical layer, Data Link layer, Network layer, Transport layer, Session layer, Presentation layer, and Application layer (see Chapter 4 - Module 1 under Open Systems Interconnection).",
    "short_explanation_en": "The OSI model organizes communicating systems according to 7 layers: Physical layer, Data Link layer, Network layer, Transport layer, Session layer, Presentation layer, and Application layer (see Chapter 4 - Module 1 under Open Systems...",
    "question_th": "โมเดล OSI มีกี่เลเยอร์?",
    "options_th": [
      "7",
      "4",
      "6",
      "5"
    ],
    "explanation_th": "โมเดล OSI จัดระบบระบบสื่อสารตาม 7 เลเยอร์: Physical layer, Data Link layer, Network layer, Transport layer, Session layer, Presentation layer และ Application layer"
  },
  {
    "id": 274,
    "dom": 4,
    "question": "Which protocol uses a three-way handshake to establish a reliable connection?",
    "options": [
      "TCP",
      "SMTP",
      "UDP",
      "SNMP"
    ],
    "correct_idx": 0,
    "explanation": "TCP uses a three-way handshake to establish a reliable connection by exchanging three packets with theSYN, SYN/ACK, and ACK flags. SMTP uses a two-way handshake. Neither UDP nor SNMP require a handshake phase.",
    "short_explanation_en": "TCP uses a three-way handshake to establish a reliable connection by exchanging three packets with theSYN, SYN/ACK, and ACK flags.",
    "question_th": "โปรโตคอลใดที่ใช้ three-way handshake เพื่อสร้างการเชื่อมต่อที่เชื่อถือได้?",
    "options_th": [
      "TCP",
      "SMTP",
      "UDP",
      "SNMP"
    ],
    "explanation_th": "TCP ใช้ three-way handshake เพื่อสร้างการเชื่อมต่อที่เชื่อถือได้โดยการแลกเปลี่ยนแพ็กเก็ตสามตัวด้วย flag SYN, SYN/ACK และ ACK SMTP ใช้ two-way handshake ในขณะที่ UDP และ SNMP ไม่ต้องการขั้นตอน handshake เลย"
  },
  {
    "id": 276,
    "dom": 4,
    "question": "Which type of attack attempts to gain information by observing the device's power consumption? (★)",
    "options": [
      "Side Channels",
      "Trojans",
      "Cross Site Scripting",
      "Denials of Service"
    ],
    "correct_idx": 0,
    "explanation": "A side-channel attack is a passive and non-invasive attack aiming to extract information from a running system, by using special-purpose hardware to perform power monitoring, as well as timing and fault analysis attacks. The remaining are software-based attacks.",
    "short_explanation_en": "A side-channel attack is a passive and non-invasive attack aiming to extract information from a running system, by using special-purpose hardware to perform power monitoring, as well as timing and fault analysis attacks.",
    "question_th": "การโจมตีประเภทใดที่พยายามได้รับข้อมูลโดยการสังเกตการใช้พลังงานของอุปกรณ์?",
    "options_th": [
      "Side Channels",
      "Trojans",
      "Cross Site Scripting",
      "Denials of Service"
    ],
    "explanation_th": "การโจมตีแบบ side-channel เป็นการโจมตีแบบไม่รุกล้ำ (passive) ที่มุ่งดึงข้อมูลจากระบบที่กำลังทำงาน โดยใช้ฮาร์ดแวร์เฉพาะทางเพื่อทำการตรวจสอบพลังงาน รวมถึงการวิเคราะห์จังหวะเวลาและข้อผิดพลาด"
  },
  {
    "id": 289,
    "dom": 4,
    "question": "Which of these is LEAST likely to be installed by an infection?",
    "options": [
      "Logic Bomb",
      "Keylogger",
      "Trojan",
      "Backdoor"
    ],
    "correct_idx": 0,
    "explanation": "A logic bomb is a piece of code intentionally inserted into software that will activate after specific conditions are met (see ISC2 Study Guide, chapter 4, module 2). Logic bombs are typically embedded in legitimate software. Trojans are a type of malware used to install keyloggers and backdoors. Keyloggers capture keystrokes and user input, but typically require malware to install the keylogger. A backdoor is a malicious feature that listens for commands on a specific logical port (TCP or UDP)",
    "short_explanation_en": "A logic bomb is a piece of code intentionally inserted into software that will activate after specific conditions are met (see ISC2 Study Guide, chapter 4, module 2).",
    "question_th": "ข้อใดมีโอกาสน้อยที่สุดที่จะถูกติดตั้งโดยการติดเชื้อ?",
    "options_th": [
      "Logic Bomb",
      "Keylogger",
      "Trojan",
      "Backdoor"
    ],
    "explanation_th": "Logic bomb คือโค้ดที่ถูกแทรกเข้าไปในซอฟต์แวร์โดยเจตนา ซึ่งจะเปิดใช้งานหลังจากเงื่อนไขเฉพาะได้รับการตอบสนอง Logic bombs มักถูกฝังอยู่ในซอฟต์แวร์ที่ถูกต้องตามกฎหมาย Trojans เป็นมัลแวร์ประเภทหนึ่งที่ใช้ติดตั้ง keyloggers และ backdoors"
  },
  {
    "id": 290,
    "dom": 4,
    "question": "(★) The best defense method to stop a 'Replay Attack' is to:",
    "options": [
      "Use an IPSec VPN",
      "Use a Firewall",
      "Use password authentication",
      "Use message digesting"
    ],
    "correct_idx": 0,
    "explanation": "A replay attack is when an attacker captures and resends (i.e. \"replays\") authenticated messages (see ISC2 Study Guide, chapter 4, module 2). An IPSec VPN can prevent a replay attack because it tracks packet sequencing and includes the sender's signature on all packets; therefore preventing forged packages. Message digesting is ineffective in preventing resends (and thus also replay attacks), since it doesn't matter whether the attacker can read or decipher the original message and key (all they",
    "short_explanation_en": "A replay attack is when an attacker captures and resends (i.e.",
    "question_th": "วิธีการป้องกันที่ดีที่สุดในการหยุด 'Replay Attack' คือ:",
    "options_th": [
      "ใช้ IPSec VPN",
      "ใช้ไฟร์วอลล์",
      "ใช้การยืนยันตัวตนด้วยรหัสผ่าน",
      "ใช้ message digesting"
    ],
    "explanation_th": "Replay attack คือเมื่อผู้โจมตีดักจับและส่งข้อความที่ผ่านการยืนยันตัวตนซ้ำ (คือ 'replay') IPSec VPN สามารถป้องกัน replay attack ได้เนื่องจากติดตามลำดับของแพ็กเก็ตและรวมลายเซ็นของผู้ส่งไว้ในทุกแพ็กเก็ต จึงป้องกันแพ็กเก็ตปลอมได้"
  },
  {
    "id": 291,
    "dom": 4,
    "question": "Which of these devices has the PRIMARILY objective of determining the most efficient path for the traffic to flow across the networks?",
    "options": [
      "Hubs",
      "Firewalls",
      "Routers",
      "Switches"
    ],
    "correct_idx": 2,
    "explanation": "A router is a networking device whose primary objective is to determine the most efficient path for traffic to flow across a network. Routers connect two or more networks and forward data packets between them according to their destination address (see ISC2 Study Guide, chapter 4, module 1). When a router receives a data packet, it checks the destination address and determines the best route on which to forward the packet, based on its routing table. The routing table is a github.com/ayemunhossa",
    "short_explanation_en": "A router is a networking device whose primary objective is to determine the most efficient path for traffic to flow across a network.",
    "question_th": "อุปกรณ์ใดต่อไปนี้มีวัตถุประสงค์หลักในการกำหนดเส้นทางที่มีประสิทธิภาพมากที่สุดสำหรับทราฟฟิกที่จะไหลผ่านเครือข่าย?",
    "options_th": [
      "Hubs",
      "Firewalls",
      "Routers",
      "Switches"
    ],
    "explanation_th": "Router คืออุปกรณ์เครือข่ายที่มีวัตถุประสงค์หลักในการกำหนดเส้นทางที่มีประสิทธิภาพมากที่สุดสำหรับทราฟฟิกที่จะไหลผ่านเครือข่าย Router เชื่อมต่อสองเครือข่ายขึ้นไปและส่งต่อแพ็กเก็ตข้อมูลระหว่างกันตามที่อยู่ปลายทาง"
  },
  {
    "id": 292,
    "dom": 4,
    "question": "Which of these types of malware self-replicates without the need for human intervention?",
    "options": [
      "Worm",
      "Trojan",
      "Virus",
      "Rootkits"
    ],
    "correct_idx": 0,
    "explanation": "A worm is a type of malware designed to replicate itself and spread to other computers without human intervention. Worms exploit operating systems, network servers and other software vulnerabilities in order to propagate themselves. They can cause various damaging effects, including disrupting network performance, consuming bandwidth, and stealing sensitive information (see ISC2 Study Guide, chapter 4, module 2). Some worms can also perform directly malicious actions, such as installing rootkits",
    "short_explanation_en": "A worm is a type of malware designed to replicate itself and spread to other computers without human intervention.",
    "question_th": "มัลแวร์ประเภทใดต่อไปนี้ที่แพร่กระจายตัวเองได้โดยไม่ต้องอาศัยการกระทำของมนุษย์?",
    "options_th": [
      "Worm",
      "Trojan",
      "Virus",
      "Rootkits"
    ],
    "explanation_th": "Worm คือมัลแวร์ประเภทหนึ่งที่ออกแบบมาเพื่อแพร่กระจายตัวเองไปยังคอมพิวเตอร์อื่นโดยไม่ต้องอาศัยการกระทำของมนุษย์ Worm ใช้ประโยชน์จากระบบปฏิบัติการ เซิร์ฟเวอร์เครือข่าย และช่องโหว่ของซอฟต์แวร์อื่น ๆ เพื่อแพร่กระจายตัวเอง"
  },
  {
    "id": 297,
    "dom": 4,
    "question": "What does the term 'data remanence' refer?",
    "options": [
      "Data in use that can't be encrypted",
      "Files saved locally that can't be remoted accessed",
      "Data left over after routine removal and deletion",
      "All of the data in a system"
    ],
    "correct_idx": 2,
    "explanation": "Data Remanence refers to data left over after routine removal and deletion of data from a storage device (see ISC2 Study Guide, chapter 4, module 3). When digital data is deleted, instead of being erased from the storage media, it is often only marked deleted, and the corresponding space is then made available to be overwritten later on. Consequently, deleted data can still be present on the storage media, and can be recovered using the proper media analysis and recovery tools. Data remanence is",
    "short_explanation_en": "Data Remanence refers to data left over after routine removal and deletion of data from a storage device (see ISC2 Study Guide, chapter 4, module 3).",
    "question_th": "คำว่า 'data remanence' หมายถึงอะไร?",
    "options_th": [
      "ข้อมูลที่กำลังใช้งานซึ่งไม่สามารถเข้ารหัสได้",
      "ไฟล์ที่บันทึกในเครื่องซึ่งไม่สามารถเข้าถึงระยะไกลได้",
      "ข้อมูลที่หลงเหลืออยู่หลังการลบและกำจัดตามปกติ",
      "ข้อมูลทั้งหมดในระบบ"
    ],
    "explanation_th": "Data Remanence หมายถึงข้อมูลที่หลงเหลืออยู่หลังการลบและกำจัดข้อมูลตามปกติออกจากอุปกรณ์จัดเก็บข้อมูล เมื่อข้อมูลดิจิทัลถูกลบ แทนที่จะถูกลบออกจากสื่อจัดเก็บ มักจะถูกทำเครื่องหมายว่าถูกลบเท่านั้น และพื้นที่ที่สอดคล้องกันจะถูกทำให้พร้อมสำหรับการเขียนทับในภายหลัง"
  },
  {
    "id": 299,
    "dom": 4,
    "question": "Which of these is NOT a characteristic of an MSP implementation?",
    "options": [
      "Manage all in-house company infrastructure",
      "Monitor and respond to security incidents",
      "Mediate, execute and decide top-level decisions",
      "Utilize expertise for the implementation of a product or service"
    ],
    "correct_idx": 0,
    "explanation": "Manage all-in-house company infrastructure is not a characteristic of an MSP (Managed Service Provider) implementation. MSPs provide an outsourced IT service to manage a company's IT infrastructure and endpoints, rather than managing it all in-house. Some characteristics of an MSP implementation include the following (see ISC2 Study Guide, chapter 4, module 3): Utilizing expertise for the implementation of a product or serviceMonitoring and responding to security incidents Mediating, executing a",
    "short_explanation_en": "Manage all-in-house company infrastructure is not a characteristic of an MSP (Managed Service Provider) implementation.",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่ลักษณะของการนำ MSP มาใช้?",
    "options_th": [
      "จัดการโครงสร้างพื้นฐานทั้งหมดภายในบริษัทเอง",
      "เฝ้าติดตามและตอบสนองต่อเหตุการณ์ความปลอดภัย",
      "เป็นตัวกลาง ดำเนินการ และตัดสินใจในระดับสูงสุด",
      "ใช้ความเชี่ยวชาญสำหรับการนำผลิตภัณฑ์หรือบริการไปใช้"
    ],
    "explanation_th": "การจัดการโครงสร้างพื้นฐานทั้งหมดภายในบริษัทไม่ใช่ลักษณะของการนำ MSP (Managed Service Provider) มาใช้ MSP ให้บริการ IT แบบ outsource เพื่อจัดการโครงสร้างพื้นฐาน IT และ endpoint ของบริษัท แทนที่จะจัดการทั้งหมดภายในบริษัทเอง"
  },
  {
    "id": 306,
    "dom": 4,
    "question": "Which of these types of layers is NOT part of the TCP/IP model?",
    "options": [
      "Application",
      "Physical",
      "Internet",
      "Transport"
    ],
    "correct_idx": 1,
    "explanation": "The physical layer exists in the OSI model, but not in the TCP/IP model. The TCP/IP Protocol Architecture Layers are: [1] Application (Determines the protocols for the Transport layer); [2] Transport (Allows for data to move among devices); [3] Internet (Creates and inserts packets); [4] Network Interface (Governs how data will move through the network) (for more on this, see ISC2 Study Guide, Chapter 4, Module 1).",
    "short_explanation_en": "The physical layer exists in the OSI model, but not in the TCP/IP model.",
    "question_th": "เลเยอร์ประเภทใดต่อไปนี้ไม่ใช่ส่วนหนึ่งของโมเดล TCP/IP?",
    "options_th": [
      "Application",
      "Physical",
      "Internet",
      "Transport"
    ],
    "explanation_th": "Physical layer มีอยู่ในโมเดล OSI แต่ไม่มีในโมเดล TCP/IP เลเยอร์สถาปัตยกรรมโปรโตคอล TCP/IP คือ: [1] Application; [2] Transport; [3] Internet; [4] Network Interface"
  },
  {
    "id": 311,
    "dom": 4,
    "question": "Which of these terms refers to a collection of fixes?",
    "options": [
      "Downgrade",
      "Patch",
      "Service Pack",
      "Hotfix"
    ],
    "correct_idx": 2,
    "explanation": "A service pack comprises a collection of updates, fixes or enhancements to a software program delivered as a single installable package. A hotfix (or quick-fix) engineering update is a cumulative package which includes information that will be used to address a problem in a software product. A software patch is a quick-repair job for a piece of programming, and is designed to resolve functionality issues, improve security and/or add new features.",
    "short_explanation_en": "A service pack comprises a collection of updates, fixes or enhancements to a software program delivered as a single installable package.",
    "question_th": "คำใดต่อไปนี้หมายถึงการรวมของการแก้ไข (fixes)?",
    "options_th": [
      "Downgrade",
      "Patch",
      "Service Pack",
      "Hotfix"
    ],
    "explanation_th": "Service pack ประกอบด้วยชุดอัปเดต การแก้ไข หรือการปรับปรุงโปรแกรมซอฟต์แวร์ที่ส่งมอบเป็นแพ็กเกจติดตั้งเดียว Hotfix (หรือ quick-fix) คือแพ็กเกจสะสมที่รวมข้อมูลที่ใช้แก้ไขปัญหาในผลิตภัณฑ์ซอฟต์แวร์"
  },
  {
    "id": 314,
    "dom": 4,
    "question": "Which of these documents is MORE directly related to what can be done with a system or with its information?",
    "options": [
      "SLA",
      "MOA",
      "MOU",
      "ROE"
    ],
    "correct_idx": 2,
    "explanation": "A Memorandum of Understanding (MOU) outlines the terms and conditions for collaboration, including eventual restrictions on the use of information (see ISC2 Study Guide, chapter 4, module 3). A Memorandum of Agreement (MOA) is similar to an MOU, but is both more formal and legally binding. A Service Level Agreement (SLA) is a contract between a service provider and a customer which specifies service-related guarantees or warranties. In Cybersecurity, Rules of Engagement (ROE) are guidelines and",
    "short_explanation_en": "A Memorandum of Understanding (MOU) outlines the terms and conditions for collaboration, including eventual restrictions on the use of information (see ISC2 Study Guide, chapter 4, module 3).",
    "question_th": "เอกสารใดต่อไปนี้เกี่ยวข้องโดยตรงกับสิ่งที่สามารถทำได้กับระบบหรือข้อมูลของระบบ?",
    "options_th": [
      "SLA",
      "MOA",
      "MOU",
      "ROE"
    ],
    "explanation_th": "Memorandum of Understanding (MOU) ระบุข้อกำหนดและเงื่อนไขสำหรับความร่วมมือ รวมถึงข้อจำกัดในการใช้ข้อมูลในที่สุด Memorandum of Agreement (MOA) คล้ายกับ MOU แต่เป็นทางการและมีผลผูกพันทางกฎหมายมากกว่า"
  },
  {
    "id": 316,
    "dom": 4,
    "question": "Which of these social engineering attacks sends emails that target specific individuals?",
    "options": [
      "Pharming",
      "Whaling",
      "Vishing",
      "Spear phishing"
    ],
    "correct_idx": 3,
    "explanation": "Spear phishing is a highly targeted phishing attack (and not just random spam) which aims to get specific individuals to reveal confidential information. The particularity of spear phishing is that these attacks are sent with prior knowledge about the target (person or company), so as to increase its chance of success. Whaling is a phishing attack targeted at a group (typically an organization's executives) (see ISC2 Study Guide, chapter 4, module 3). A pharming attack corrupts an infrastructure",
    "short_explanation_en": "Spear phishing is a highly targeted phishing attack (and not just random spam) which aims to get specific individuals to reveal confidential information.",
    "question_th": "การโจมตีทางวิศวกรรมสังคมใดที่ส่งอีเมลมุ่งเป้าไปที่บุคคลเฉพาะ?",
    "options_th": [
      "Pharming",
      "Whaling",
      "Vishing",
      "Spear phishing"
    ],
    "explanation_th": "Spear phishing คือการโจมตีแบบ phishing ที่มุ่งเป้าไปสูงมาก (ไม่ใช่แค่สแปมแบบสุ่ม) ซึ่งมีเป้าหมายให้บุคคลเฉพาะเปิดเผยข้อมูลลับ ลักษณะเฉพาะของ spear phishing คือการโจมตีเหล่านี้ถูกส่งโดยมีความรู้ล่วงหน้าเกี่ยวกับเป้าหมาย"
  },
  {
    "id": 322,
    "dom": 4,
    "question": "Which of these is an attack that encrypts the organization's information, and then demands payment for the decryption code?",
    "options": [
      "Phishing",
      "DDoS",
      "Spoofing",
      "Ransomware"
    ],
    "correct_idx": 3,
    "explanation": "Ransomware is an attack that encrypts an organization's information (thereby rendering it inaccessible or unusable) and then demands payment in exchange for the decryption code (see ISC2 Study Guide, chapter 4, module 2). A distributed denial-of-service (DDoS) attack is a type of attack in which a large amount of malicious traffic is directed at a specific target (such as a website or server), so as to overwhelm it, thus making it unavailable to users. Phishing is an attack in which attackers se",
    "short_explanation_en": "Ransomware is an attack that encrypts an organization's information (thereby rendering it inaccessible or unusable) and then demands payment in exchange for the decryption code (see ISC2 Study Guide, chapter 4, module 2).",
    "question_th": "ข้อใดคือการโจมตีที่เข้ารหัสข้อมูลขององค์กร แล้วเรียกร้องการชำระเงินเพื่อแลกกับรหัสถอดรหัส?",
    "options_th": [
      "Phishing",
      "DDoS",
      "Spoofing",
      "Ransomware"
    ],
    "explanation_th": "Ransomware คือการโจมตีที่เข้ารหัสข้อมูลขององค์กร (ทำให้ไม่สามารถเข้าถึงหรือใช้งานได้) แล้วเรียกร้องการชำระเงินเพื่อแลกกับรหัสถอดรหัส การโจมตีแบบ distributed denial-of-service (DDoS) เป็นการโจมตีที่ส่งทราฟฟิกที่เป็นอันตรายจำนวนมากไปยังเป้าหมายเฉพาะ"
  },
  {
    "id": 324,
    "dom": 4,
    "question": "Which of these is an attack whose PRIMARY goal is to gain access to a target system through falsified identity?",
    "options": [
      "Ransomware",
      "Amplification",
      "Spoofing",
      "DDoS"
    ],
    "correct_idx": 2,
    "explanation": "Spoofing is an attack whose primary goal is to gain access to a target system through a falsified identity. In a spoofing attack, the attacker creates or manipulates a digital identity or communication, so as to deceive the target into believing that the attacker is someone or something else. There are many different types of spoofing attacks, including email spoofing, IP spoofing, and URL spoofing. Such attacks are used to gain unauthorized access to systems or networks, steal sensitive informa",
    "short_explanation_en": "Spoofing is an attack whose primary goal is to gain access to a target system through a falsified identity.",
    "question_th": "ข้อใดคือการโจมตีที่มีเป้าหมายหลักในการเข้าถึงระบบเป้าหมายผ่านตัวตนที่ปลอมแปลง?",
    "options_th": [
      "Ransomware",
      "Amplification",
      "Spoofing",
      "DDoS"
    ],
    "explanation_th": "Spoofing คือการโจมตีที่มีเป้าหมายหลักในการเข้าถึงระบบเป้าหมายผ่านตัวตนที่ปลอมแปลง ในการโจมตีแบบ spoofing ผู้โจมตีสร้างหรือจัดการตัวตนดิจิทัลหรือการสื่อสาร เพื่อหลอกให้เป้าหมายเชื่อว่าผู้โจมตีเป็นบุคคลหรือสิ่งอื่น"
  },
  {
    "id": 330,
    "dom": 4,
    "question": "Which of these attacks take advantage of inadequate input validation in websites?",
    "options": [
      "Phishing",
      "Trojans",
      "Cross-Site Scripting",
      "Rootkits"
    ],
    "correct_idx": 2,
    "explanation": "Cross-Site Scripting (XSS) is an attack where malicious executable scripts are injected into an otherwise benign website (or web application) code. Websites are vulnerable to XSS when they display data originating from requests or forms without validating it (and further sanitizing it, so that it is not executable) (see ISC2 Study Guide, chapter 4, module 2). Trojans and phishing are attacks where software applications and messages try to appear legitimate, but have hidden malicious functions. T",
    "short_explanation_en": "Cross-Site Scripting (XSS) is an attack where malicious executable scripts are injected into an otherwise benign website (or web application) code.",
    "question_th": "การโจมตีใดต่อไปนี้ใช้ประโยชน์จากการตรวจสอบข้อมูลนำเข้าที่ไม่เพียงพอในเว็บไซต์?",
    "options_th": [
      "Phishing",
      "Trojans",
      "Cross-Site Scripting",
      "Rootkits"
    ],
    "explanation_th": "Cross-Site Scripting (XSS) คือการโจมตีที่สคริปต์ที่สามารถรันได้ซึ่งเป็นอันตรายถูกแทรกเข้าไปในโค้ดของเว็บไซต์ที่ไม่มีอันตราย เว็บไซต์มีความเสี่ยงต่อ XSS เมื่อแสดงข้อมูลที่มาจากคำขอหรือแบบฟอร์มโดยไม่ได้ตรวจสอบความถูกต้อง"
  },
  {
    "id": 331,
    "dom": 4,
    "question": "An organization needs a network security tool that detects and acts in the event of malicious activity. Which of these tools will BEST meet their needs?",
    "options": [
      "Router github.com/ayemunhossain",
      "IPS",
      "IDS",
      "Firewall"
    ],
    "correct_idx": 1,
    "explanation": "An intrusion prevention system (IPS) is designed to monitor network traffic in real-time, identifying patterns or behaviors that may indicate an attempted intrusion or other malicious activity. Whenever an IPS detects suspicious activity, it can also act to protect the network (such as by blocking suspicious traffic, alerting the network administrator, or initiating a response to contain the threat) (see ISC2 Study Guide, chapter 4, module 2). Another type of network security tool is an intrusio",
    "short_explanation_en": "An intrusion prevention system (IPS) is designed to monitor network traffic in real-time, identifying patterns or behaviors that may indicate an attempted intrusion or other malicious activity.",
    "question_th": "องค์กรต้องการเครื่องมือความปลอดภัยเครือข่ายที่ตรวจจับและดำเนินการเมื่อเกิดกิจกรรมที่เป็นอันตราย ข้อใดต่อไปนี้จะตอบสนองความต้องการของพวกเขาได้ดีที่สุด?",
    "options_th": [
      "Router",
      "IPS",
      "IDS",
      "Firewall"
    ],
    "explanation_th": "Intrusion prevention system (IPS) ถูกออกแบบมาเพื่อเฝ้าติดตามทราฟฟิกเครือข่ายแบบเรียลไทม์ ระบุรูปแบบหรือพฤติกรรมที่อาจบ่งชี้ถึงความพยายามบุกรุกหรือกิจกรรมที่เป็นอันตรายอื่น ๆ เมื่อ IPS ตรวจพบกิจกรรมที่น่าสงสัย มันสามารถดำเนินการเพื่อปกป้องเครือข่ายได้เช่นกัน"
  },
  {
    "id": 334,
    "dom": 4,
    "question": "What does the term LAN refer to?",
    "options": [
      "A tool to manage and control network traffic, as well as to protect a network.",
      "A network on a building or limited geographical area",
      "A device that connects multiple other devices in a network",
      "A long-distance connection between geographically-distant networks"
    ],
    "correct_idx": 1,
    "explanation": "A local area network (LAN) typically covers a single floor or building. Long-distance connections between geographically- distant networks form something called a wide area network (WAN). Multiple devices in a network are connected through hubs or switches. The management and control of network traffic and protection is achieved by specialized equipment, such as firewalls and intrusion prevention systems (ISC2 Study Guide, Chapter 4, Module 1)",
    "short_explanation_en": "A local area network (LAN) typically covers a single floor or building.",
    "question_th": "คำว่า LAN หมายถึงอะไร?",
    "options_th": [
      "เครื่องมือในการจัดการและควบคุมทราฟฟิกเครือข่าย รวมถึงการปกป้องเครือข่าย",
      "เครือข่ายในอาคารหรือพื้นที่ทางภูมิศาสตร์ที่จำกัด",
      "อุปกรณ์ที่เชื่อมต่ออุปกรณ์อื่น ๆ หลายเครื่องในเครือข่าย",
      "การเชื่อมต่อระยะไกลระหว่างเครือข่ายที่ห่างไกลทางภูมิศาสตร์"
    ],
    "explanation_th": "Local area network (LAN) โดยทั่วไปครอบคลุมชั้นเดียวหรืออาคารเดียว การเชื่อมต่อระยะไกลระหว่างเครือข่ายที่ห่างไกลทางภูมิศาสตร์เรียกว่า wide area network (WAN)"
  },
  {
    "id": 336,
    "dom": 4,
    "question": "Which of these enables point-to-point online communication over an untrusted network?",
    "options": [
      "VLAN",
      "Firewall",
      "Router",
      "VPN"
    ],
    "correct_idx": 3,
    "explanation": "A VPN is a type of network technology that creates a secure encrypted connection between a device and a network. This connection allows users to communicate with each other and access network resources as if they were on the same local network, even if they are in different locations (see ISC2 Study Guide, chapter 4, module 3). A VLAN (Virtual Local Area Network) is a network segmentation technology that allows devices on a network to be logically grouped, even if they are in different locations",
    "short_explanation_en": "A VPN is a type of network technology that creates a secure encrypted connection between a device and a network.",
    "question_th": "เทคโนโลยีใดที่ช่วยให้การสื่อสารออนไลน์แบบ point-to-point ผ่านเครือข่ายที่ไม่น่าเชื่อถือได้?",
    "options_th": [
      "VLAN",
      "Firewall",
      "Router",
      "VPN"
    ],
    "explanation_th": "VPN คือเทคโนโลยีเครือข่ายประเภทหนึ่งที่สร้างการเชื่อมต่อที่เข้ารหัสและปลอดภัยระหว่างอุปกรณ์กับเครือข่าย การเชื่อมต่อนี้ทำให้ผู้ใช้สามารถสื่อสารกันและเข้าถึงทรัพยากรเครือข่ายได้ราวกับอยู่ในเครือข่ายท้องถิ่นเดียวกัน แม้จะอยู่คนละสถานที่"
  },
  {
    "id": 337,
    "dom": 4,
    "question": "At which of the OSI layers do TCP and UDP work?",
    "options": [
      "Transport Layer",
      "Session Layer",
      "Application Layer",
      "Physical Layer"
    ],
    "correct_idx": 0,
    "explanation": "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols, which operate at the fourth layer of the OSI (Open Systems Interconnection) model (see ISC2 Study Guide, chapter 4, module 1). The transport layer (also known as \"Layer 4\") ensures that data is delivered reliably and efficiently between different devices on a network. TCP is a connection-oriented protocol which establishes a dedicated end-to-end connection. UDP is a connectionless protocol, a",
    "short_explanation_en": "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are both transport layer protocols, which operate at the fourth layer of the OSI (Open Systems Interconnection) model (see ISC2 Study Guide, chapter 4, module 1).",
    "question_th": "TCP และ UDP ทำงานที่เลเยอร์ใดของ OSI?",
    "options_th": [
      "Transport Layer",
      "Session Layer",
      "Application Layer",
      "Physical Layer"
    ],
    "explanation_th": "TCP (Transmission Control Protocol) และ UDP (User Datagram Protocol) ต่างเป็นโปรโตคอลชั้น transport ซึ่งทำงานที่เลเยอร์ที่สี่ของโมเดล OSI (Open Systems Interconnection) Transport layer (หรือเรียกว่า 'Layer 4') รับประกันว่าข้อมูลถูกส่งอย่างเชื่อถือได้และมีประสิทธิภาพระหว่างอุปกรณ์ต่าง ๆ บนเครือข่าย"
  },
  {
    "id": 339,
    "dom": 4,
    "question": "(★) Which of these different sub-masks will allow 30 hosts?",
    "options": [
      "/26",
      "/30",
      "/27",
      "/29"
    ],
    "correct_idx": 2,
    "explanation": "A subnet mask is a number that distinguishes between the network address and the host address. Subnetting divides a network into two or more subnets (see ISC2 Study Guide, chapter 4, module 1). To allow 30 hosts + 2 addresses for broadcast and network addresses. Thus, we are looking for the mask 255.255.255.224, or /27 using CIDR (Classless Inter- Domain Routing) notation. For 32 addresses, we need 5 bits and the mask /32 - log2(32) = /32 - 5 = /27. As for the remaining masks, /26 would result i",
    "short_explanation_en": "A subnet mask is a number that distinguishes between the network address and the host address.",
    "question_th": "sub-mask ใดต่อไปนี้ที่อนุญาตให้มี 30 hosts?",
    "options_th": [
      "/26",
      "/30",
      "/27",
      "/29"
    ],
    "explanation_th": "Subnet mask คือตัวเลขที่แยกความแตกต่างระหว่างที่อยู่เครือข่ายและที่อยู่โฮสต์ Subnetting แบ่งเครือข่ายออกเป็นสองหรือมากกว่า subnets เพื่ออนุญาต 30 hosts + 2 addresses สำหรับ broadcast และ network addresses เราจึงต้องการ mask 255.255.255.224 หรือ /27"
  },
  {
    "id": 340,
    "dom": 4,
    "question": "(★) Which of these statements about the security implications of IPv6 is NOT true?",
    "options": [
      "Rules based on static IPv6 addresses may not work",
      "IPv6's NAT implementation is insecure",
      "IPv6 traffic may bypass existing security controls",
      "IPv6 reputation services may not be mature and useful"
    ],
    "correct_idx": 1,
    "explanation": "IPv6 does not include network address translation (NAT), since many IP addresses are available. As a result, there is no NAT implementation, and so IPv6 can't actually have an insecure version. Rules based on static IPv6 addresses may not work, since IPv6 addresses are often dynamically assigned. Thus, certain security controls that rely on static address rules (such as firewalls or access controls) may not work in all cases. Reputation services are still relatively rare, and also somewhat less",
    "short_explanation_en": "IPv6 does not include network address translation (NAT), since many IP addresses are available.",
    "question_th": "ข้อความใดต่อไปนี้เกี่ยวกับผลกระทบด้านความปลอดภัยของ IPv6 ไม่เป็นความจริง?",
    "options_th": [
      "กฎที่อิงตาม static IPv6 addresses อาจไม่ทำงาน",
      "การนำ NAT ของ IPv6 มาใช้ไม่ปลอดภัย",
      "ทราฟฟิก IPv6 อาจข้ามการควบคุมความปลอดภัยที่มีอยู่",
      "บริการ reputation ของ IPv6 อาจยังไม่สมบูรณ์และเป็นประโยชน์"
    ],
    "explanation_th": "IPv6 ไม่มี network address translation (NAT) เนื่องจากมี IP address จำนวนมากให้ใช้งาน ดังนั้นจึงไม่มีการนำ NAT มาใช้ และ IPv6 จึงไม่สามารถมีเวอร์ชันที่ไม่ปลอดภัยได้จริง กฎที่อิงตาม static IPv6 addresses อาจไม่ทำงาน เนื่องจาก IPv6 addresses มักถูกกำหนดแบบไดนามิก"
  },
  {
    "id": 343,
    "dom": 4,
    "question": "Which cloud service model provides the most suitable environment for customers who want to install their custom operating system?",
    "options": [
      "SaaS",
      "SLA",
      "IaaS",
      "PaaS"
    ],
    "correct_idx": 2,
    "explanation": "Infrastructure as a Service (IaaS) is a cloud service model that allows the customer to manage the computing resources (including the operating systems). Software as a Service (SaaS) is a model that provides customers with access to software applications (typically on a subscription-based or pay-per-use model) but does not allow them to access the underlying infrastructure. Platform as a Service (PaaS) is a service model that provides a platform for building, deploying and managing applications;",
    "short_explanation_en": "Infrastructure as a Service (IaaS) is a cloud service model that allows the customer to manage the computing resources (including the operating systems).",
    "question_th": "โมเดลบริการคลาวด์ใดที่ให้สภาพแวดล้อมที่เหมาะสมที่สุดสำหรับลูกค้าที่ต้องการติดตั้งระบบปฏิบัติการที่กำหนดเอง?",
    "options_th": [
      "SaaS",
      "SLA",
      "IaaS",
      "PaaS"
    ],
    "explanation_th": "Infrastructure as a Service (IaaS) คือโมเดลบริการคลาวด์ที่ให้ลูกค้าจัดการทรัพยากรคอมพิวเตอร์ได้ (รวมถึงระบบปฏิบัติการ) Software as a Service (SaaS) คือโมเดลที่ให้ลูกค้าเข้าถึงแอปพลิเคชันซอฟต์แวร์ แต่ไม่อนุญาตให้เข้าถึงโครงสร้างพื้นฐานพื้นฐาน"
  },
  {
    "id": 345,
    "dom": 4,
    "question": "Which of these addresses is commonly reserved specifically for broadcasting?",
    "options": [
      "192.299.121.254",
      "192.299.121.0",
      "192.299.121.14",
      "192.299.121.255"
    ],
    "correct_idx": 3,
    "explanation": "IPv4 addresses are 32-bits represented as a sequence of four 8-bit integers separated by a dot. Addresses ending with 0 are reserved to specifically signify the network itself (and not a specific device on that network). In contrast, addresses ending in 255 are generally reserved for broadcasting to all devices on that network (see ISC2 Study Guide, chapter 4, module 1).",
    "short_explanation_en": "IPv4 addresses are 32-bits represented as a sequence of four 8-bit integers separated by a dot.",
    "question_th": "ที่อยู่ใดต่อไปนี้มักถูกสงวนไว้เฉพาะสำหรับการ broadcast?",
    "options_th": [
      "192.299.121.254",
      "192.299.121.0",
      "192.299.121.14",
      "192.299.121.255"
    ],
    "explanation_th": "IPv4 addresses มีขนาด 32 บิต แสดงเป็นลำดับของจำนวนเต็ม 8 บิตสี่ตัวคั่นด้วยจุด ที่อยู่ที่ลงท้ายด้วย 0 ถูกสงวนไว้เพื่อระบุเครือข่ายเอง (ไม่ใช่อุปกรณ์เฉพาะบนเครือข่ายนั้น) ในทางตรงกันข้าม ที่อยู่ที่ลงท้ายด้วย 255 โดยทั่วไปถูกสงวนไว้สำหรับการ broadcast ไปยังอุปกรณ์ทั้งหมดบนเครือข่ายนั้น"
  },
  {
    "id": 348,
    "dom": 4,
    "question": "Which method is COMMONLY used to map live hosts in the network?",
    "options": [
      "Geolocation",
      "Traceroute",
      "Ping sweep",
      "Wireshark"
    ],
    "correct_idx": 2,
    "explanation": "A ping sweep is a commonly used method to map live hosts in a network. A ping sweep involves sending a series of ping messages (ICMP Echo Request packets) to a range of IP addresses on a network so as to determine which hosts are currently online. Hosts that are online will respond with a reply message when a ping is sent to them. Collecting the replies makes it possible to map which hosts are currently online on the network (see ISC2 Study Guide, chapter 4, module 3). The remaining options are",
    "short_explanation_en": "A ping sweep is a commonly used method to map live hosts in a network.",
    "question_th": "วิธีการใดที่ใช้กันทั่วไปในการทำแผนที่ live hosts ในเครือข่าย?",
    "options_th": [
      "Geolocation",
      "Traceroute",
      "Ping sweep",
      "Wireshark"
    ],
    "explanation_th": "Ping sweep คือวิธีการที่ใช้กันทั่วไปในการทำแผนที่ live hosts ในเครือข่าย โดยเกี่ยวข้องกับการส่งชุดข้อความ ping (ICMP Echo Request packets) ไปยังช่วงของ IP addresses บนเครือข่าย เพื่อกำหนดว่า hosts ใดออนไลน์อยู่ในปัจจุบัน"
  },
  {
    "id": 352,
    "dom": 4,
    "question": "An organization that uses a layered approach when designing its security architecture is using which of these security approaches?",
    "options": [
      "Zero trust",
      "Defense in depth",
      "Network Layers",
      "Network Control Access"
    ],
    "correct_idx": 1,
    "explanation": "An organization that uses a layered approach when designing its security architecture is using a defense in-depth approach. In a defense in-depth approach, different layers of security controls may be implemented at different levels of the organization, such as at the network, application and user levels (see ISC2 Study Guide, chapter 4, module 3). Network control access refers to the process of controlling access to a network. Network layers refer to the different levels of a computer network,",
    "short_explanation_en": "An organization that uses a layered approach when designing its security architecture is using a defense in-depth approach.",
    "question_th": "องค์กรที่ใช้แนวทางแบบเป็นชั้นในการออกแบบสถาปัตยกรรมความปลอดภัยกำลังใช้แนวทางความปลอดภัยใดต่อไปนี้?",
    "options_th": [
      "Zero trust",
      "Defense in depth",
      "Network Layers",
      "Network Control Access"
    ],
    "explanation_th": "องค์กรที่ใช้แนวทางแบบเป็นชั้นในการออกแบบสถาปัตยกรรมความปลอดภัยกำลังใช้แนวทาง defense in-depth ในแนวทาง defense in-depth ชั้นการควบคุมความปลอดภัยที่แตกต่างกันอาจถูกนำมาใช้ในระดับที่แตกต่างกันขององค์กร เช่น ระดับเครือข่าย แอปพลิเคชัน และผู้ใช้"
  },
  {
    "id": 355,
    "dom": 4,
    "question": "Suppose that an organization wants to implement measures to strengthen its detective access controls. Which one of these tools should they implement?",
    "options": [
      "Patches",
      "Encryption",
      "IDS",
      "Backups"
    ],
    "correct_idx": 2,
    "explanation": "Detective controls are a crucial component of a cybersecurity program, since they provide visibility into malicious activity, breaches and attacks on an organization's IT environment. An intrusion detection system (IDS) is a device or software application which monitors a network or systems for malicious activity or policy violations (meaning that it's a detective control) (see ISC2 Study Guide, chapter 4, module 1). Patches are corrective controls. Backups are compensating controls, since they",
    "short_explanation_en": "Detective controls are a crucial component of a cybersecurity program, since they provide visibility into malicious activity, breaches and attacks on an organization's IT environment.",
    "question_th": "สมมติว่าองค์กรต้องการนำมาตรการมาใช้เพื่อเสริมความแข็งแกร่งให้กับการควบคุมการเข้าถึงแบบตรวจจับ (Detective access controls) เครื่องมือใดต่อไปนี้ที่พวกเขาควรนำมาใช้?",
    "options_th": [
      "Patches",
      "Encryption",
      "IDS",
      "Backups"
    ],
    "explanation_th": "การควบคุมแบบตรวจจับเป็นองค์ประกอบสำคัญของโปรแกรมความปลอดภัยไซเบอร์ เนื่องจากให้ทัศนวิสัยต่อกิจกรรมที่เป็นอันตราย การละเมิด และการโจมตีต่อสภาพแวดล้อม IT ขององค์กร Intrusion detection system (IDS) คืออุปกรณ์หรือแอปพลิเคชันซอฟต์แวร์ที่เฝ้าติดตามเครือข่ายหรือระบบเพื่อหากิจกรรมที่เป็นอันตราย"
  },
  {
    "id": 356,
    "dom": 4,
    "question": "(★) Which of these is an example of a MAC address?",
    "options": [
      "00-51-02-1F-58-F6",
      "0051021f58",
      "10.23.19.49",
      "2001 : db8: 3333 : 4444 : 5555 : 6666 : 7777 : 8888"
    ],
    "correct_idx": 0,
    "explanation": "All network devices have a 48-bit Media Access Control (MAC) address, represented as six groups of 8 bits values in github.com/ayemunhossain hexadecimal (see ISC2 Study Guide, chapter 4, module 1 - Understand Computer Networking). An example of a MAC address would be 00-51-02-1F-58-F6. An IPv4 address is a 32-bit address represented as a sequence of four 8-bit integers, an example of which would be 10.23.19.49. An IPv6 address is a 128-bit address represented as a sequence of eight groups of 16-",
    "short_explanation_en": "All network devices have a 48-bit Media Access Control (MAC) address, represented as six groups of 8 bits values in github.com/ayemunhossain hexadecimal (see ISC2 Study Guide, chapter 4, module 1 - Understand Computer Networking).",
    "question_th": "ข้อใดต่อไปนี้เป็นตัวอย่างของ MAC address?",
    "options_th": [
      "00-51-02-1F-58-F6",
      "0051021f58",
      "10.23.19.49",
      "2001 : db8: 3333 : 4444 : 5555 : 6666 : 7777 : 8888"
    ],
    "explanation_th": "อุปกรณ์เครือข่ายทั้งหมดมี Media Access Control (MAC) address ขนาด 48 บิต แสดงเป็นหกกลุ่มของค่า 8 บิตในเลขฐานสิบหก ตัวอย่างของ MAC address คือ 00-51-02-1F-58-F6 IPv4 address คือที่อยู่ขนาด 32 บิต แสดงเป็นลำดับของจำนวนเต็ม 8 บิตสี่ตัว เช่น 10.23.19.49"
  },
  {
    "id": 359,
    "dom": 4,
    "question": "Which of these is NOT an effective way to protect an organization from cybercriminals?",
    "options": [
      "Removing or disabling unneeded services and protocols",
      "Using firewalls",
      "Using out-dated anti-malware software",
      "Using intrusion detection and prevention systems"
    ],
    "correct_idx": 2,
    "explanation": "Using out-dated anti-malware software is NOT an effective way to protect an organization from cybercriminals. Anti- malware software (such as antivirus programs) are designed to detect and remove malware from computer systems and networks. To be effective, it is vital, instead, to ensure that running software is kept up-to-date with the latest security updates and definitions. Other effective ways to protect an organization from cybercriminals are: Removing or disabling unneeded services and pro",
    "short_explanation_en": "Using out-dated anti-malware software is NOT an effective way to protect an organization from cybercriminals.",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่วิธีที่มีประสิทธิภาพในการปกป้ององค์กรจากอาชญากรไซเบอร์?",
    "options_th": [
      "การลบหรือปิดใช้งานบริการและโปรโตคอลที่ไม่จำเป็น",
      "การใช้ไฟร์วอลล์",
      "การใช้ซอฟต์แวร์แอนตี้มัลแวร์ที่ล้าสมัย",
      "การใช้ระบบตรวจจับและป้องกันการบุกรุก"
    ],
    "explanation_th": "การใช้ซอฟต์แวร์แอนตี้มัลแวร์ที่ล้าสมัยไม่ใช่วิธีที่มีประสิทธิภาพในการปกป้ององค์กรจากอาชญากรไซเบอร์ ซอฟต์แวร์แอนตี้มัลแวร์ (เช่น โปรแกรมแอนตี้ไวรัส) ถูกออกแบบมาเพื่อตรวจจับและลบมัลแวร์ออกจากระบบคอมพิวเตอร์และเครือข่าย เพื่อให้มีประสิทธิภาพ จำเป็นอย่างยิ่งที่จะต้องรักษาซอฟต์แวร์ที่กำลังทำงานให้ทันสมัยด้วยการอัปเดตและคำจำกัดความความปลอดภัยล่าสุด"
  },
  {
    "id": 362,
    "dom": 4,
    "question": "Which port number corresponds to the Simple Mail Transfer Protocol (SMTP)?",
    "options": [
      "161",
      "69",
      "25",
      "22"
    ],
    "correct_idx": 2,
    "explanation": "The Simple Mail Transfer Protocol (SMTP) is well-known for accepting connections on port 25, so as to receive unencrypted email messages. The more secure alternative is to use port 587 for SMTP by using Transport Layer Security (TLS), which encrypts the data between the mail client and the server (see ISC2 Study Guide, chapter 4, module 1)",
    "short_explanation_en": "The Simple Mail Transfer Protocol (SMTP) is well-known for accepting connections on port 25, so as to receive unencrypted email messages.",
    "question_th": "หมายเลขพอร์ตใดที่สอดคล้องกับ Simple Mail Transfer Protocol (SMTP)?",
    "options_th": [
      "161",
      "69",
      "25",
      "22"
    ],
    "explanation_th": "Simple Mail Transfer Protocol (SMTP) เป็นที่รู้จักกันดีในการยอมรับการเชื่อมต่อบนพอร์ต 25 เพื่อรับข้อความอีเมลที่ไม่ได้เข้ารหัส ทางเลือกที่ปลอดภัยกว่าคือการใช้พอร์ต 587 สำหรับ SMTP โดยใช้ Transport Layer Security (TLS) ซึ่งเข้ารหัสข้อมูลระหว่างไคลเอนต์อีเมลกับเซิร์ฟเวอร์"
  },
  {
    "id": 363,
    "dom": 4,
    "question": "Which type of attack attempts to mislead the user into exposing personal information by sending fraudulent emails?",
    "options": [
      "Cross-Site Scripting",
      "Denial of Service",
      "Trojans",
      "Phishing"
    ],
    "correct_idx": 3,
    "explanation": "A phishing attack emails a fraudulent message with the goal of tricking the recipient into disclosing sensitive informationto the attacker (see ISC2 Study Guide, chapter 4, module 2). A Cross-Site Scripting attack tries to execute code on another website. Trojans are software that seem legitimate, but has hidden malicious functions. Trojans may be sent in a message, but are not themselves the message. A denial of service attack (DoS) compromises the availability of a system or service through a",
    "short_explanation_en": "A phishing attack emails a fraudulent message with the goal of tricking the recipient into disclosing sensitive informationto the attacker (see ISC2 Study Guide, chapter 4, module 2).",
    "question_th": "การโจมตีประเภทใดที่พยายามหลอกลวงผู้ใช้ให้เปิดเผยข้อมูลส่วนบุคคลโดยการส่งอีเมลหลอกลวง?",
    "options_th": [
      "Cross-Site Scripting",
      "Denial of Service",
      "Trojans",
      "Phishing"
    ],
    "explanation_th": "การโจมตีแบบ phishing ส่งข้อความหลอกลวงทางอีเมลโดยมีเป้าหมายเพื่อหลอกให้ผู้รับเปิดเผยข้อมูลที่ละเอียดอ่อนต่อผู้โจมตี Cross-Site Scripting พยายามรันโค้ดบนเว็บไซต์อื่น Trojans เป็นซอฟต์แวร์ที่ดูเหมือนถูกต้องตามกฎหมาย แต่มีฟังก์ชันที่เป็นอันตรายซ่อนอยู่"
  },
  {
    "id": 364,
    "dom": 4,
    "question": "Which of these is NOT a characteristic of the cloud?",
    "options": [
      "Zero Customer Responsibility",
      "Broad Network Access",
      "Measured Service",
      "Rapid Elasticity"
    ],
    "correct_idx": 0,
    "explanation": "The characteristics of the cloud, also known as the \"five essential characteristics\" of cloud computing, are (see ISC2 github.com/ayemunhossain Study Guide, chapter 4, module 3): Broad network access: Cloud resources, such as the internet, can be accessed over a network; Rapid elasticity: Cloud resources can be scaled up or down quickly and automatically to meet changing demand; Measured service: Cloud providers track and measure the use of resources, and users are typically charged based on the",
    "short_explanation_en": "The characteristics of the cloud, also known as the \"five essential characteristics\" of cloud computing, are (see ISC2 github.com/ayemunhossain Study Guide, chapter 4, module 3): Broad network access: Cloud resources, such as the...",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่ลักษณะของคลาวด์?",
    "options_th": [
      "Zero Customer Responsibility",
      "Broad Network Access",
      "Measured Service",
      "Rapid Elasticity"
    ],
    "explanation_th": "ลักษณะของคลาวด์ หรือที่รู้จักกันในชื่อ 'ห้าคุณลักษณะสำคัญ' ของคลาวด์คอมพิวติ้ง คือ: Broad network access (ทรัพยากรคลาวด์สามารถเข้าถึงได้ผ่านเครือข่าย); Rapid elasticity (ทรัพยากรคลาวด์สามารถปรับขนาดขึ้นหรือลงได้อย่างรวดเร็วและอัตโนมัติ); Measured service (ผู้ให้บริการคลาวด์ติดตามและวัดการใช้ทรัพยากร)"
  },
  {
    "id": 368,
    "dom": 4,
    "question": "Which of these cloud deployment models is a combination of public and private cloud storage?",
    "options": [
      "Community",
      "Private",
      "Hybrid",
      "Public"
    ],
    "correct_idx": 2,
    "explanation": "A hybrid cloud deployment model combines public and private cloud storage. For example: an organization might use private cloud storage for sensitive or proprietary data that needs to be kept confidential, while at the same time using github.com/ayemunhossain public cloud storage for less sensitive data or workloads, which are more suited to a shared infrastructure. This allows the organization to tailor its cloud storage strategy to meet the specific needs of its workloads, while at the same ti",
    "short_explanation_en": "A hybrid cloud deployment model combines public and private cloud storage.",
    "question_th": "โมเดลการปรับใช้คลาวด์ใดต่อไปนี้เป็นการรวมกันของการจัดเก็บแบบ public และ private cloud?",
    "options_th": [
      "Community",
      "Private",
      "Hybrid",
      "Public"
    ],
    "explanation_th": "โมเดลการปรับใช้ hybrid cloud รวมการจัดเก็บแบบ public และ private cloud เข้าด้วยกัน ตัวอย่างเช่น องค์กรอาจใช้การจัดเก็บแบบ private cloud สำหรับข้อมูลที่อ่อนไหวหรือเป็นกรรมสิทธิ์ที่ต้องเก็บเป็นความลับ ในขณะเดียวกันก็ใช้การจัดเก็บแบบ public cloud สำหรับข้อมูลที่มีความอ่อนไหวน้อยกว่า"
  },
  {
    "id": 377,
    "dom": 4,
    "question": "A high-level executive of an organization receives a malicious email that tries to trick him. Which attack is the perpetrator using?",
    "options": [
      "DDOS",
      "Whaling",
      "Phishing",
      "Spear phishing"
    ],
    "correct_idx": 1,
    "explanation": "When executives receive malicious emails that try to trick them, the attackers are likely attempting a whaling attack (see ISC2 Study Guide, chapter 4, module 2). Whaling is a type of spear phishing, and, in turn, spear phishing is a type of phishing. Whaling is a spear phishing attack targeted at a group of high-level executives, or at other influential individuals inside the organization. Spear phishing is a targeted attack in which the attacker uses email or other digital communication to tri",
    "short_explanation_en": "When executives receive malicious emails that try to trick them, the attackers are likely attempting a whaling attack (see ISC2 Study Guide, chapter 4, module 2).",
    "question_th": "ผู้บริหารระดับสูงขององค์กรได้รับอีเมลที่เป็นอันตรายซึ่งพยายามหลอกลวงเขา ผู้กระทำผิดกำลังใช้การโจมตีใด?",
    "options_th": [
      "DDOS",
      "Whaling",
      "Phishing",
      "Spear phishing"
    ],
    "explanation_th": "เมื่อผู้บริหารได้รับอีเมลที่เป็นอันตรายซึ่งพยายามหลอกลวงพวกเขา ผู้โจมตีมักกำลังพยายามทำการโจมตีแบบ whaling Whaling เป็นประเภทหนึ่งของ spear phishing และในทางกลับกัน spear phishing ก็เป็นประเภทหนึ่งของ phishing"
  },
  {
    "id": 378,
    "dom": 4,
    "question": "What does redundancy mean in the context of cybersecurity?",
    "options": [
      "Designing systems with robust components, so that the organization has more attack resilience",
      "Conceiving systems with only the most necessary components, so that the organization has just the necessary risks. github.com/ayemunhossain",
      "Conceiving systems with less attack surface, so that the attacker has less chance of success",
      "Conceiving systems with duplicate components so that, if a failure occurs, there will be a backup"
    ],
    "correct_idx": 3,
    "explanation": "In cybersecurity, redundancy refers to conceiving systems for resilience with duplicate components so that, if a failure occurs, the redundant component will take over and maintain operations, thereby helping to prevent outages or other disruptions (see ISC2 Study Guide, chapter 4, module 3). Examples of this are redundant servers, redundant network links, and redundant power supplies. Redundancy is also effective against attacks, since the attacked nodes can be quarantined and then replaced by",
    "short_explanation_en": "In cybersecurity, redundancy refers to conceiving systems for resilience with duplicate components so that, if a failure occurs, the redundant component will take over and maintain operations, thereby helping to prevent outages or other...",
    "question_th": "คำว่า redundancy หมายถึงอะไรในบริบทของความปลอดภัยไซเบอร์?",
    "options_th": [
      "การออกแบบระบบด้วยองค์ประกอบที่แข็งแกร่ง เพื่อให้องค์กรมีความยืดหยุ่นต่อการโจมตีมากขึ้น",
      "การสร้างระบบด้วยองค์ประกอบที่จำเป็นที่สุดเท่านั้น เพื่อให้องค์กรมีความเสี่ยงเท่าที่จำเป็นเท่านั้น",
      "การสร้างระบบด้วยพื้นผิวการโจมตีที่น้อยลง เพื่อให้ผู้โจมตีมีโอกาสประสบความสำเร็จน้อยลง",
      "การสร้างระบบด้วยองค์ประกอบที่ซ้ำกัน เพื่อให้หากเกิดความล้มเหลว จะมีระบบสำรอง"
    ],
    "explanation_th": "ในความปลอดภัยไซเบอร์ redundancy หมายถึงการสร้างระบบเพื่อความยืดหยุ่นด้วยองค์ประกอบที่ซ้ำกัน เพื่อให้หากเกิดความล้มเหลว องค์ประกอบสำรองจะเข้ามาแทนที่และรักษาการดำเนินงานต่อไป ช่วยป้องกันการหยุดทำงานหรือการหยุดชะงักอื่น ๆ"
  },
  {
    "id": 380,
    "dom": 4,
    "question": "Which type of attack PRIMARILY aims to consume all the available resources, thereby making an organization's service inaccessible to its intended users?",
    "options": [
      "Trojans",
      "Cross-Site Scripting github.com/ayemunhossain",
      "Denial of Service",
      "Phishing"
    ],
    "correct_idx": 2,
    "explanation": "A denial of service attack (DoS) compromises the availability of a system or service through a malicious overload of requests, thereby activating safety mechanisms that delay or limit the availability of that system or service. As a result, systems or services become temporarily inaccessible to their intended users (see ISC2 Study Guide, chapter 4, module 2). Trojans, phishing and cross-site scripting attacks try to gain access to the system or data covertly, and therefore do not primarily aim a",
    "short_explanation_en": "A denial of service attack (DoS) compromises the availability of a system or service through a malicious overload of requests, thereby activating safety mechanisms that delay or limit the availability of that system or service.",
    "question_th": "การโจมตีประเภทใดที่มีเป้าหมายหลักในการใช้ทรัพยากรที่มีอยู่ทั้งหมด ทำให้บริการขององค์กรไม่สามารถเข้าถึงได้สำหรับผู้ใช้ที่ตั้งใจไว้?",
    "options_th": [
      "Trojans",
      "Cross-Site Scripting",
      "Denial of Service",
      "Phishing"
    ],
    "explanation_th": "การโจมตีแบบ denial of service (DoS) เกี่ยวข้องกับการทำให้ availability ของระบบหรือบริการถูกบุกรุกผ่านการท่วมคำขอที่เป็นอันตราย ก่อให้เกิดการเปิดใช้กลไกความปลอดภัยที่ทำให้ availability ของระบบหรือบริการล่าช้าหรือจำกัด"
  },
  {
    "id": 381,
    "dom": 4,
    "question": "Which one of these tools is MOST likely to detect an XSS vulnerability?",
    "options": [
      "Network vulnerability scanner",
      "Static application test",
      "Intrusion detection system",
      "Web application vulnerability scanner"
    ],
    "correct_idx": 3,
    "explanation": "Intrusion detection systems are designed to detect attacks, not vulnerabilities. The remaining three tools could all possibly discover cross-site scripting (XSS) vulnerabilities. However, a web application vulnerability scanner is the one that's most likely to detect it, since it is specifically designed to test web applications (see ISC2 Study Guide, chapter 4, module 3).",
    "short_explanation_en": "Intrusion detection systems are designed to detect attacks, not vulnerabilities.",
    "question_th": "เครื่องมือใดต่อไปนี้มีแนวโน้มมากที่สุดที่จะตรวจจับช่องโหว่ XSS?",
    "options_th": [
      "Network vulnerability scanner",
      "Static application test",
      "Intrusion detection system",
      "Web application vulnerability scanner"
    ],
    "explanation_th": "Intrusion detection systems ถูกออกแบบมาเพื่อตรวจจับการโจมตี ไม่ใช่ช่องโหว่ เครื่องมืออีกสามชนิดที่เหลือทั้งหมดสามารถค้นพบช่องโหว่ cross-site scripting (XSS) ได้ อย่างไรก็ตาม web application vulnerability scanner เป็นเครื่องมือที่มีแนวโน้มมากที่สุดที่จะตรวจจับได้ เนื่องจากถูกออกแบบมาโดยเฉพาะเพื่อทดสอบเว็บแอปพลิเคชัน"
  },
  {
    "id": 383,
    "dom": 4,
    "question": "Which of these is NOT a type of malware?",
    "options": [
      "Trojan",
      "Worm",
      "Spoofing",
      "Rootkit"
    ],
    "correct_idx": 2,
    "explanation": "Spoofing is not a type of malware. Spoofing is an attack whose primary goal is to gain access to a target system through a falsified identity (see ISC2 Study Guide, chapter 4, module 2). Trojans, rootkits and worms are all different types of malware. A Trojan is a type of malware that disguises itself as a legitimate program or file. A Rootkit is a type of malware that hides itself to go unnoticed in the compromised system, or in the victim's computer. A Worm is a type of malware designed to rep",
    "short_explanation_en": "Spoofing is not a type of malware. Spoofing is an attack whose primary goal is to gain access to a target system through a falsified identity (see ISC2 Study Guide, chapter 4, module 2).",
    "question_th": "ข้อใดต่อไปนี้ไม่ใช่ประเภทของมัลแวร์?",
    "options_th": [
      "Trojan",
      "Worm",
      "Spoofing",
      "Rootkit"
    ],
    "explanation_th": "Spoofing ไม่ใช่ประเภทของมัลแวร์ Spoofing คือการโจมตีที่มีเป้าหมายหลักในการเข้าถึงระบบเป้าหมายผ่านตัวตนที่ปลอมแปลง Trojans, rootkits และ worms ล้วนเป็นมัลแวร์ประเภทต่าง ๆ"
  },
  {
    "id": 442,
    "dom": 4,
    "question": "How many layers does the OSI model have in total?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correct_idx": 2,
    "explanation": "The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    "short_explanation_en": "The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
    "question_th": "โมเดล OSI มีทั้งหมดกี่เลเยอร์?",
    "options_th": [
      "5",
      "6",
      "7",
      "8"
    ],
    "explanation_th": "โมเดล OSI (Open Systems Interconnection) มี 7 เลเยอร์ ได้แก่ Physical, Data Link, Network, Transport, Session, Presentation และ Application"
  },
  {
    "id": 443,
    "dom": 4,
    "question": "At which layer of the OSI Model does a Packet Filtering firewall primarily operate?",
    "options": [
      "Application Layer",
      "Network Layer",
      "Session Layer",
      "Physical Layer"
    ],
    "correct_idx": 1,
    "explanation": "A Packet Filtering Firewall operates at the Network Layer (Layer 3), inspecting header data such as IP address and port to decide whether to allow or deny traffic.",
    "short_explanation_en": "A Packet Filtering Firewall operates at the Network Layer (Layer 3), inspecting header data such as IP address and port to decide whether to allow or deny traffic.",
    "question_th": "เลเยอร์ใดใน OSI Model ที่ไฟร์วอลล์แบบ Packet Filtering ทำงานอยู่เป็นหลัก?",
    "options_th": [
      "Application Layer",
      "Network Layer",
      "Session Layer",
      "Physical Layer"
    ],
    "explanation_th": "Packet Filtering Firewall ทำงานที่ Network Layer (Layer 3) โดยตรวจสอบข้อมูลใน Header เช่น IP Address และ Port เพื่อตัดสินใจอนุญาตหรือปฏิเสธการรับส่งข้อมูล"
  },
  {
    "id": 444,
    "dom": 4,
    "question": "At which layer of the OSI Model does a 'Switch' primarily operate?",
    "options": [
      "Physical Layer (Layer 1)",
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)"
    ],
    "correct_idx": 1,
    "explanation": "A Switch operates at the Data Link Layer (Layer 2), using MAC addresses to forward data to the correct port (some Layer 3 switches can also operate at the Network Layer, but a basic switch works at Layer 2).",
    "short_explanation_en": "A Switch operates at the Data Link Layer (Layer 2), using MAC addresses to forward data to the correct port (some Layer 3 switches can also operate at the Network Layer, but a basic switch works at Layer 2).",
    "question_th": "อุปกรณ์ 'Switch' ทำงานหลักอยู่ที่เลเยอร์ใดของ OSI Model?",
    "options_th": [
      "Physical Layer (Layer 1)",
      "Data Link Layer (Layer 2)",
      "Network Layer (Layer 3)",
      "Transport Layer (Layer 4)"
    ],
    "explanation_th": "Switch ทำงานที่ Data Link Layer (Layer 2) โดยใช้ MAC Address ในการส่งข้อมูลไปยังพอร์ตที่ถูกต้อง (บาง Layer 3 Switch สามารถทำงานที่ Network Layer ได้เช่นกัน แต่ Switch พื้นฐานทำงานที่ Layer 2)"
  },
  {
    "id": 445,
    "dom": 4,
    "question": "What is the primary function of a 'Router'?",
    "options": [
      "Encrypting data during transmission",
      "Routing data between different networks using IP addresses",
      "Creating new MAC addresses",
      "Scanning for network vulnerabilities"
    ],
    "correct_idx": 1,
    "explanation": "A Router operates at the Network Layer (Layer 3) and is responsible for routing data between different networks using IP addresses.",
    "short_explanation_en": "A Router operates at the Network Layer (Layer 3) and is responsible for routing data between different networks using IP addresses.",
    "question_th": "'Router' มีหน้าที่หลักคืออะไร?",
    "options_th": [
      "เข้ารหัสข้อมูลระหว่างการส่ง",
      "กำหนดเส้นทาง (Route) การส่งข้อมูลระหว่างเครือข่ายที่แตกต่างกันโดยใช้ IP Address",
      "สร้างที่อยู่ MAC Address ใหม่",
      "สแกนหาช่องโหว่ในเครือข่าย"
    ],
    "explanation_th": "Router ทำงานที่ Network Layer (Layer 3) มีหน้าที่กำหนดเส้นทางการส่งข้อมูลระหว่างเครือข่ายต่างๆ โดยใช้ IP Address"
  },
  {
    "id": 446,
    "dom": 4,
    "question": "How does a 'Stateful Inspection' firewall differ from 'Packet Filtering'?",
    "options": [
      "Stateful only inspects the source IP",
      "Stateful tracks connection state to decide whether to allow traffic belonging to a valid session, not just inspecting isolated packets",
      "Stateful only operates at the Physical Layer",
      "Both work exactly the same way"
    ],
    "correct_idx": 1,
    "explanation": "A Stateful Inspection Firewall tracks connection state (e.g., a TCP handshake) and decides whether to allow traffic by considering the full session context — unlike Packet Filtering, which inspects each packet in isolation without context.",
    "short_explanation_en": "A Stateful Inspection Firewall tracks connection state (e.g., a TCP handshake) and decides whether to allow traffic by considering the full session context — unlike Packet Filtering, which inspects each packet in isolation without context.",
    "question_th": "ไฟร์วอลล์ประเภท 'Stateful Inspection' แตกต่างจาก 'Packet Filtering' อย่างไร?",
    "options_th": [
      "Stateful ตรวจสอบเฉพาะ Source IP เท่านั้น",
      "Stateful ติดตามสถานะของการเชื่อมต่อ (Connection State) เพื่อตัดสินใจอนุญาตทราฟฟิกที่เกี่ยวข้องกับ Session ที่ถูกต้อง ไม่ใช่แค่ตรวจสอบแพ็กเก็ตแบบแยกส่วน",
      "Stateful ทำงานที่ Physical Layer เท่านั้น",
      "ทั้งสองแบบทำงานเหมือนกันทุกประการ"
    ],
    "explanation_th": "Stateful Inspection Firewall จะติดตามสถานะของการเชื่อมต่อ (เช่น TCP handshake) และตัดสินใจอนุญาตทราฟฟิกโดยพิจารณาบริบทของ Session ทั้งหมด ต่างจาก Packet Filtering ที่ตรวจสอบแต่ละแพ็กเก็ตแยกกันโดยไม่มีบริบท"
  },
  {
    "id": 447,
    "dom": 4,
    "question": "How do 'IDS (Intrusion Detection System)' and 'IPS (Intrusion Prevention System)' differ?",
    "options": [
      "IDS only detects and alerts on abnormal events, while IPS can detect and block attacks in real time",
      "IDS and IPS are exactly the same system",
      "IDS is used only on wireless networks",
      "IPS only operates at the Physical Layer"
    ],
    "correct_idx": 0,
    "explanation": "IDS is a detective system that alerts when it finds abnormal behavior but doesn't block it, while IPS is a preventive system that can immediately block or stop malicious traffic.",
    "short_explanation_en": "IDS is a detective system that alerts when it finds abnormal behavior but doesn't block it, while IPS is a preventive system that can immediately block or stop malicious traffic.",
    "question_th": "'IDS (Intrusion Detection System)' และ 'IPS (Intrusion Prevention System)' แตกต่างกันอย่างไร?",
    "options_th": [
      "IDS ตรวจจับและแจ้งเตือนเหตุการณ์ผิดปกติเท่านั้น ส่วน IPS สามารถตรวจจับและบล็อกการโจมตีได้แบบเรียลไทม์",
      "IDS และ IPS เป็นระบบเดียวกันทุกประการ",
      "IDS ใช้เฉพาะในเครือข่ายไร้สาย",
      "IPS ทำงานที่ Physical Layer เท่านั้น"
    ],
    "explanation_th": "IDS เป็นระบบตรวจจับ (Detective) ที่แจ้งเตือนเมื่อพบพฤติกรรมผิดปกติแต่ไม่บล็อก ส่วน IPS เป็นระบบป้องกัน (Preventive) ที่สามารถบล็อกหรือหยุดยั้งทราฟฟิกที่เป็นอันตรายได้ทันที"
  },
  {
    "id": 448,
    "dom": 4,
    "question": "What is the primary purpose of a VPN (Virtual Private Network)?",
    "options": [
      "Increase internet speed",
      "Create an encrypted, secure communication channel over a public network",
      "Distribute IP addresses to network devices",
      "Translate domain names into IP addresses"
    ],
    "correct_idx": 1,
    "explanation": "A VPN creates an encrypted tunnel so communication between two points over a public network, such as the internet, is secure and private as if on a private network.",
    "short_explanation_en": "A VPN creates an encrypted tunnel so communication between two points over a public network, such as the internet, is secure and private as if on a private network.",
    "question_th": "VPN (Virtual Private Network) มีวัตถุประสงค์หลักเพื่ออะไร?",
    "options_th": [
      "เพิ่มความเร็วอินเทอร์เน็ต",
      "สร้างช่องทางสื่อสารที่เข้ารหัสและปลอดภัยผ่านเครือข่ายสาธารณะ",
      "แจกจ่าย IP Address ให้อุปกรณ์ในเครือข่าย",
      "แปลงชื่อโดเมนเป็น IP Address"
    ],
    "explanation_th": "VPN สร้างอุโมงค์ (Tunnel) ที่เข้ารหัสข้อมูลเพื่อให้การสื่อสารระหว่างจุดสองจุดผ่านเครือข่ายสาธารณะ เช่น อินเทอร์เน็ต มีความปลอดภัยและเป็นส่วนตัวเสมือนอยู่ในเครือข่ายส่วนตัว"
  },
  {
    "id": 449,
    "dom": 4,
    "question": "How does 'Network Segmentation' help improve security?",
    "options": [
      "It puts all devices on the same network for convenience",
      "It divides the network into smaller sections to limit the scope of damage if one section is attacked, preventing it from spreading to the whole network",
      "It only increases data transmission speed",
      "It reduces the number of network devices needed"
    ],
    "correct_idx": 1,
    "explanation": "Network Segmentation divides a network into smaller zones (e.g., VLANs) to limit an attacker's lateral movement. If one segment is compromised, the damage doesn't spread to the entire network.",
    "short_explanation_en": "Network Segmentation divides a network into smaller zones (e.g., VLANs) to limit an attacker's lateral movement. If one segment is compromised, the damage doesn't spread to the entire network.",
    "question_th": "'Network Segmentation' ช่วยเพิ่มความปลอดภัยได้อย่างไร?",
    "options_th": [
      "ทำให้ทุกอุปกรณ์อยู่ในเครือข่ายเดียวกันเพื่อความสะดวก",
      "แบ่งเครือข่ายออกเป็นส่วนย่อยเพื่อจำกัดขอบเขตความเสียหายหากส่วนใดถูกโจมตี ไม่ให้ลุกลามไปทั้งเครือข่าย",
      "เพิ่มความเร็วในการส่งข้อมูลเท่านั้น",
      "ลดจำนวนอุปกรณ์เครือข่ายที่ต้องใช้"
    ],
    "explanation_th": "Network Segmentation แบ่งเครือข่ายออกเป็นโซนย่อยๆ (เช่น VLAN) เพื่อจำกัดการเคลื่อนที่ของผู้โจมตี (Lateral Movement) หากส่วนใดส่วนหนึ่งถูกบุกรุก ความเสียหายจะไม่ลุกลามไปยังทั้งเครือข่าย"
  },
  {
    "id": 450,
    "dom": 4,
    "question": "What is the purpose of a 'DMZ (Demilitarized Zone)' in network architecture?",
    "options": [
      "The most important area for storing backup data",
      "A buffer network that hosts servers requiring access from the external internet, separated from the more critical internal network",
      "A wireless network for guests",
      "The primary data encryption system"
    ],
    "correct_idx": 1,
    "explanation": "A DMZ is a buffer network that hosts systems needing external access, such as a web server or mail server, to reduce risk if attacked — preventing attackers from directly reaching the more critical internal network.",
    "short_explanation_en": "A DMZ is a buffer network that hosts systems needing external access, such as a web server or mail server, to reduce risk if attacked — preventing attackers from directly reaching the more critical internal network.",
    "question_th": "'DMZ (Demilitarized Zone)' ในสถาปัตยกรรมเครือข่ายมีวัตถุประสงค์อะไร?",
    "options_th": [
      "เป็นพื้นที่เก็บข้อมูลสำรองสำคัญที่สุด",
      "เป็นเครือข่ายกันชนที่วางเซิร์ฟเวอร์ที่ต้องเข้าถึงได้จากอินเทอร์เน็ตภายนอก แยกออกจากเครือข่ายภายในที่สำคัญกว่า",
      "เป็นเครือข่ายไร้สายสำหรับแขก",
      "เป็นระบบเข้ารหัสข้อมูลหลัก"
    ],
    "explanation_th": "DMZ คือเครือข่ายกันชนที่วางระบบซึ่งจำเป็นต้องเปิดให้เข้าถึงจากภายนอก เช่น Web Server หรือ Mail Server เพื่อลดความเสี่ยงหากถูกโจมตี ไม่ให้ผู้โจมตีสามารถเข้าถึงเครือข่ายภายในที่สำคัญกว่าได้โดยตรง"
  },
  {
    "id": 451,
    "dom": 4,
    "question": "Which protocol encrypts website communication instead of using unencrypted HTTP?",
    "options": [
      "FTP",
      "HTTPS",
      "Telnet",
      "SNMP v1"
    ],
    "correct_idx": 1,
    "explanation": "HTTPS (HTTP Secure) uses TLS/SSL to encrypt data between a web browser and server, unlike HTTP, which sends data unencrypted.",
    "short_explanation_en": "HTTPS (HTTP Secure) uses TLS/SSL to encrypt data between a web browser and server, unlike HTTP, which sends data unencrypted.",
    "question_th": "โปรโตคอลใดที่ใช้เข้ารหัสการสื่อสารเว็บไซต์แทน HTTP แบบไม่เข้ารหัส?",
    "options_th": [
      "FTP",
      "HTTPS",
      "Telnet",
      "SNMP v1"
    ],
    "explanation_th": "HTTPS (HTTP Secure) ใช้ TLS/SSL ในการเข้ารหัสข้อมูลระหว่างเว็บเบราว์เซอร์กับเซิร์ฟเวอร์ ต่างจาก HTTP ที่ส่งข้อมูลแบบไม่เข้ารหัส"
  },
  {
    "id": 452,
    "dom": 4,
    "question": "Which of the following protocols is considered 'insecure' because it transmits data, including passwords, in plaintext?",
    "options": [
      "SSH",
      "Telnet",
      "HTTPS",
      "SFTP"
    ],
    "correct_idx": 1,
    "explanation": "Telnet transmits all data, including usernames and passwords, in plaintext, making it vulnerable to sniffing — SSH should be used instead for secure remote access.",
    "short_explanation_en": "Telnet transmits all data, including usernames and passwords, in plaintext, making it vulnerable to sniffing — SSH should be used instead for secure remote access.",
    "question_th": "โปรโตคอลใดต่อไปนี้ถือว่า 'ไม่ปลอดภัย' เนื่องจากส่งข้อมูล รวมถึงรหัสผ่าน แบบไม่เข้ารหัส (Plaintext)?",
    "options_th": [
      "SSH",
      "Telnet",
      "HTTPS",
      "SFTP"
    ],
    "explanation_th": "Telnet ส่งข้อมูลทั้งหมดรวมถึงชื่อผู้ใช้และรหัสผ่านแบบ Plaintext ทำให้เสี่ยงต่อการดักฟัง (Sniffing) จึงควรใช้ SSH แทนสำหรับการเข้าถึงระยะไกลที่ปลอดภัย"
  },
  {
    "id": 453,
    "dom": 4,
    "question": "What characterizes a 'Man-in-the-Middle (MITM)' attack?",
    "options": [
      "The attacker sends mass fraudulent emails",
      "The attacker inserts themselves between two communicating parties to eavesdrop or alter data without either party knowing",
      "The attacker sends massive traffic to crash a system",
      "The attacker repeatedly guesses passwords"
    ],
    "correct_idx": 1,
    "explanation": "MITM is an attack where the attacker positions themselves between two communicating parties, able to eavesdrop, alter, or steal data without the victim knowing they're being attacked.",
    "short_explanation_en": "MITM is an attack where the attacker positions themselves between two communicating parties, able to eavesdrop, alter, or steal data without the victim knowing they're being attacked.",
    "question_th": "การโจมตีแบบ 'Man-in-the-Middle (MITM)' มีลักษณะอย่างไร?",
    "options_th": [
      "ผู้โจมตีส่งอีเมลหลอกลวงจำนวนมาก",
      "ผู้โจมตีแทรกตัวอยู่ระหว่างการสื่อสารของสองฝ่ายเพื่อดักฟังหรือแก้ไขข้อมูลโดยที่ทั้งสองฝ่ายไม่รู้ตัว",
      "ผู้โจมตีส่งทราฟฟิกจำนวนมากเพื่อทำให้ระบบล่ม",
      "ผู้โจมตีเดารหัสผ่านซ้ำๆ"
    ],
    "explanation_th": "MITM คือการโจมตีที่ผู้โจมตีแทรกตัวอยู่ระหว่างการสื่อสารของสองฝ่าย สามารถดักฟัง แก้ไข หรือขโมยข้อมูลได้โดยที่เหยื่อไม่รู้ตัวว่ากำลังถูกโจมตี"
  },
  {
    "id": 454,
    "dom": 4,
    "question": "What is the primary goal of a DoS (Denial of Service) attack?",
    "options": [
      "Steal confidential data",
      "Make a system or service unable to function normally by exhausting or overwhelming system resources",
      "Modify data in a database",
      "Escalate user privileges"
    ],
    "correct_idx": 1,
    "explanation": "DoS aims to compromise Availability by sending more requests than the system can handle, preventing legitimate users from accessing the service.",
    "short_explanation_en": "DoS aims to compromise Availability by sending more requests than the system can handle, preventing legitimate users from accessing the service.",
    "question_th": "การโจมตีแบบ DoS (Denial of Service) มีเป้าหมายหลักเพื่ออะไร?",
    "options_th": [
      "ขโมยข้อมูลความลับ",
      "ทำให้ระบบหรือบริการไม่สามารถให้บริการได้ตามปกติโดยการทำให้ทรัพยากรระบบหมดหรือล้น",
      "แก้ไขข้อมูลในฐานข้อมูล",
      "ยกระดับสิทธิ์ผู้ใช้"
    ],
    "explanation_th": "DoS มีเป้าหมายเพื่อทำให้ระบบ Availability ล้มเหลว โดยการส่งคำขอจำนวนมากเกินกว่าที่ระบบจะรองรับได้ ทำให้ผู้ใช้ที่ถูกต้องไม่สามารถเข้าใช้บริการได้"
  },
  {
    "id": 455,
    "dom": 4,
    "question": "How does 'DDoS' differ from 'DoS'?",
    "options": [
      "DDoS uses a single attacking machine, while DoS uses multiple",
      "DDoS comes from multiple sources simultaneously (Distributed), often via a botnet, while DoS comes from a single source",
      "Both are exactly the same",
      "DDoS applies only to websites"
    ],
    "correct_idx": 1,
    "explanation": "DDoS (Distributed Denial of Service) is an attack that comes from multiple sources simultaneously, often through a botnet network, making it much harder to defend against than a standard single-source DoS attack.",
    "short_explanation_en": "DDoS (Distributed Denial of Service) is an attack that comes from multiple sources simultaneously, often through a botnet network, making it much harder to defend against than a standard single-source DoS attack.",
    "question_th": "'DDoS' แตกต่างจาก 'DoS' อย่างไร?",
    "options_th": [
      "DDoS ใช้เครื่องโจมตีเพียงเครื่องเดียว ส่วน DoS ใช้หลายเครื่อง",
      "DDoS มาจากหลายแหล่งพร้อมกัน (Distributed) มักผ่านเครือข่าย Botnet ส่วน DoS มาจากแหล่งเดียว",
      "ทั้งสองแบบเหมือนกันทุกประการ",
      "DDoS ใช้เฉพาะกับเว็บไซต์เท่านั้น"
    ],
    "explanation_th": "DDoS (Distributed Denial of Service) คือการโจมตีที่มาจากหลายแหล่งพร้อมกัน มักผ่านเครือข่าย Botnet ทำให้ยากต่อการป้องกันมากกว่า DoS ทั่วไปที่มาจากแหล่งเดียว"
  },
  {
    "id": 456,
    "dom": 4,
    "question": "Which Wi-Fi encryption protocol is currently the most secure and should be used for wireless networks?",
    "options": [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    "correct_idx": 3,
    "explanation": "WPA3 is the latest and most secure Wi-Fi encryption standard currently available. WEP is obsolete and highly insecure, while WPA and WPA2 have known vulnerabilities discovered later.",
    "short_explanation_en": "WPA3 is the latest and most secure Wi-Fi encryption standard currently available. WEP is obsolete and highly insecure, while WPA and WPA2 have known vulnerabilities discovered later.",
    "question_th": "เครือข่ายไร้สาย (Wi-Fi) ควรใช้โปรโตคอลการเข้ารหัสใดที่ปลอดภัยที่สุดในปัจจุบัน?",
    "options_th": [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    "explanation_th": "WPA3 เป็นมาตรฐานการเข้ารหัส Wi-Fi ล่าสุดที่ปลอดภัยที่สุดในปัจจุบัน ส่วน WEP ล้าสมัยและไม่ปลอดภัยอย่างมาก ในขณะที่ WPA และ WPA2 มีช่องโหว่ที่ถูกค้นพบในภายหลัง"
  },
  {
    "id": 457,
    "dom": 4,
    "question": "Why is 'WEP (Wired Equivalent Privacy)' considered insecure and unsuitable for use today?",
    "options": [
      "WEP is too slow",
      "WEP has weaknesses in its encryption algorithm that make it easy to crack with common tools",
      "WEP only works on wired networks",
      "WEP doesn't support mobile devices"
    ],
    "correct_idx": 1,
    "explanation": "WEP has design weaknesses in its encryption algorithm (RC4 with too-short IVs), allowing attackers to crack the key quickly with widely available tools, which is why it was replaced by WPA and WPA2/3.",
    "short_explanation_en": "WEP has design weaknesses in its encryption algorithm (RC4 with too-short IVs), allowing attackers to crack the key quickly with widely available tools, which is why it was replaced by WPA and WPA2/3.",
    "question_th": "เหตุใด 'WEP (Wired Equivalent Privacy)' จึงถือว่าไม่ปลอดภัยและไม่ควรใช้งานในปัจจุบัน?",
    "options_th": [
      "WEP มีความเร็วช้าเกินไป",
      "WEP มีช่องโหว่ในอัลกอริทึมการเข้ารหัสที่ทำให้สามารถถูกถอดรหัสได้ง่ายด้วยเครื่องมือทั่วไป",
      "WEP ใช้ได้เฉพาะเครือข่ายแบบมีสายเท่านั้น",
      "WEP ไม่รองรับอุปกรณ์มือถือ"
    ],
    "explanation_th": "WEP มีจุดอ่อนในการออกแบบอัลกอริทึมเข้ารหัส (RC4 กับ IV ที่สั้นเกินไป) ทำให้ผู้โจมตีสามารถถอดรหัสคีย์ได้ภายในเวลาอันสั้นด้วยเครื่องมือที่หาได้ทั่วไป จึงถูกแทนที่ด้วย WPA และ WPA2/3"
  },
  {
    "id": 458,
    "dom": 4,
    "question": "What is the primary security benefit of 'Network Address Translation (NAT)'?",
    "options": [
      "Encrypts all data sent across the network",
      "Hides internal IP addresses from external networks, making it harder to attack directly from the internet",
      "Increases internet speed",
      "Prevents email viruses"
    ],
    "correct_idx": 1,
    "explanation": "NAT translates internal organizational IP addresses into a public IP address when communicating with the internet, hiding the internal network structure from outside and making direct attacks more difficult.",
    "short_explanation_en": "NAT translates internal organizational IP addresses into a public IP address when communicating with the internet, hiding the internal network structure from outside and making direct attacks more difficult.",
    "question_th": "'Network Address Translation (NAT)' มีประโยชน์หลักอย่างไรต่อความปลอดภัย?",
    "options_th": [
      "เข้ารหัสข้อมูลทั้งหมดที่ส่งผ่านเครือข่าย",
      "ซ่อน IP Address ภายในจากเครือข่ายภายนอก ทำให้ยากต่อการโจมตีโดยตรงจากอินเทอร์เน็ต",
      "เพิ่มความเร็วอินเทอร์เน็ต",
      "ป้องกันไวรัสในอีเมล"
    ],
    "explanation_th": "NAT แปลง IP Address ภายในองค์กรให้เป็น IP Address สาธารณะเมื่อสื่อสารกับอินเทอร์เน็ต ทำให้โครงสร้างเครือข่ายภายในถูกซ่อนจากภายนอก เพิ่มความยากในการโจมตีโดยตรง"
  },
  {
    "id": 459,
    "dom": 4,
    "question": "How does 'VLAN (Virtual LAN)' help improve network security?",
    "options": [
      "It logically separates device groups even if connected to the same switch, limiting communication and broadcast traffic between unrelated groups",
      "It only increases network speed",
      "It encrypts all data on the network",
      "It automatically removes malware"
    ],
    "correct_idx": 0,
    "explanation": "A VLAN logically divides a network into subgroups even though devices are connected to the same physical switch, limiting the scope of communication and reducing the broadcast domain, improving both security and manageability.",
    "short_explanation_en": "A VLAN logically divides a network into subgroups even though devices are connected to the same physical switch, limiting the scope of communication and reducing the broadcast domain, improving both security and manageability.",
    "question_th": "'VLAN (Virtual LAN)' ช่วยเพิ่มความปลอดภัยของเครือข่ายอย่างไร?",
    "options_th": [
      "แยกกลุ่มอุปกรณ์ทางตรรกะออกจากกันแม้จะเชื่อมต่อกับสวิตช์เดียวกัน ทำให้จำกัดการสื่อสารและ Broadcast Traffic ระหว่างกลุ่มที่ไม่เกี่ยวข้อง",
      "เพิ่มความเร็วเครือข่ายเท่านั้น",
      "เข้ารหัสข้อมูลทั้งหมดในเครือข่าย",
      "ลบมัลแวร์อัตโนมัติ"
    ],
    "explanation_th": "VLAN แบ่งเครือข่ายทางตรรกะ (Logical) ออกเป็นกลุ่มย่อย แม้อุปกรณ์จะเชื่อมต่อกับสวิตช์ทางกายภาพเดียวกัน ช่วยจำกัดขอบเขตการสื่อสารและลด Broadcast Domain ทำให้เพิ่มความปลอดภัยและง่ายต่อการบริหารจัดการ"
  },
  {
    "id": 460,
    "dom": 4,
    "question": "In which Cloud Computing model does the provider manage only the underlying Infrastructure, while the user must manage the operating system and applications themselves?",
    "options": [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "DaaS (Desktop as a Service)"
    ],
    "correct_idx": 2,
    "explanation": "IaaS provides only infrastructure, such as servers, storage, and networking, while the customer must install and manage the operating system, middleware, and applications themselves — unlike PaaS, which provides a ready-to-use platform, or SaaS, which provides fully ready-to-use software.",
    "short_explanation_en": "IaaS provides only infrastructure, such as servers, storage, and networking, while the customer must install and manage the operating system, middleware, and applications themselves — unlike PaaS, which provides a ready-to-use platform, or SaaS, which provides fully ready-to-use software.",
    "question_th": "'Cloud Computing' รูปแบบใดที่ผู้ให้บริการดูแลเฉพาะโครงสร้างพื้นฐาน (Infrastructure) ส่วนผู้ใช้ต้องจัดการระบบปฏิบัติการและแอปพลิเคชันเอง?",
    "options_th": [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "DaaS (Desktop as a Service)"
    ],
    "explanation_th": "IaaS ให้บริการเฉพาะโครงสร้างพื้นฐาน เช่น เซิร์ฟเวอร์ สตอเรจ และเครือข่าย ส่วนผู้ใช้ต้องติดตั้งและจัดการระบบปฏิบัติการ มิดเดิลแวร์ และแอปพลิเคชันเอง ต่างจาก PaaS ที่มีแพลตฟอร์มพร้อมใช้ และ SaaS ที่มีซอฟต์แวร์พร้อมใช้งานครบถ้วน"
  },
  {
    "id": 461,
    "dom": 4,
    "question": "What does 'Virtualization' mean in the context of network security?",
    "options": [
      "Creating virtual computer systems (Virtual Machines) that run separately on the same hardware, helping isolate environments and limit impact if one machine is attacked",
      "Encrypting data in the cloud",
      "Automatic data backup",
      "Real-time malware detection"
    ],
    "correct_idx": 0,
    "explanation": "Virtualization allows multiple Virtual Machines to run separately on a single physical hardware, which helps isolate environments and limit the impact if one VM is attacked, preventing it from spreading to others.",
    "short_explanation_en": "Virtualization allows multiple Virtual Machines to run separately on a single physical hardware, which helps isolate environments and limit the impact if one VM is attacked, preventing it from spreading to others.",
    "question_th": "'Virtualization' ในบริบทความปลอดภัยเครือข่ายหมายถึงอะไร?",
    "options_th": [
      "การสร้างระบบคอมพิวเตอร์เสมือน (Virtual Machine) ที่ทำงานแยกจากกันบนฮาร์ดแวร์เดียวกัน ช่วยแยกสภาพแวดล้อมและจำกัดผลกระทบหากเครื่องใดถูกโจมตี",
      "การเข้ารหัสข้อมูลบนคลาวด์",
      "การสำรองข้อมูลอัตโนมัติ",
      "การตรวจจับมัลแวร์แบบเรียลไทม์"
    ],
    "explanation_th": "Virtualization ช่วยให้สามารถรัน Virtual Machine หลายเครื่องแยกกันบนฮาร์ดแวร์กายภาพเดียว ซึ่งช่วยแยกสภาพแวดล้อม (Isolation) และจำกัดผลกระทบหาก VM ใดเครื่องหนึ่งถูกโจมตีไม่ให้ลามไปยังเครื่องอื่น"
  },
  {
    "id": 462,
    "dom": 4,
    "question": "What is the purpose of 'Port Security' on a switch?",
    "options": [
      "Increase network port speed",
      "Restrict or control which devices can connect to a given port, based on MAC address, to prevent unauthorized devices",
      "Encrypt data transmitted through the port",
      "Automatically close all ports"
    ],
    "correct_idx": 1,
    "explanation": "Port Security limits the number or identifies the specific MAC addresses of devices allowed to connect to each switch port, preventing rogue devices from connecting to the network without authorization.",
    "short_explanation_en": "Port Security limits the number or identifies the specific MAC addresses of devices allowed to connect to each switch port, preventing rogue devices from connecting to the network without authorization.",
    "question_th": "'Port Security' บนสวิตช์มีจุดประสงค์อะไร?",
    "options_th": [
      "เพิ่มความเร็วของพอร์ตเครือข่าย",
      "จำกัดหรือควบคุมอุปกรณ์ที่สามารถเชื่อมต่อกับพอร์ตนั้นๆ โดยอิงจาก MAC Address เพื่อป้องกันอุปกรณ์ที่ไม่ได้รับอนุญาต",
      "เข้ารหัสข้อมูลที่ส่งผ่านพอร์ต",
      "ปิดพอร์ตทั้งหมดโดยอัตโนมัติ"
    ],
    "explanation_th": "Port Security ช่วยจำกัดจำนวนหรือระบุ MAC Address ของอุปกรณ์ที่ได้รับอนุญาตให้เชื่อมต่อกับพอร์ตสวิตช์แต่ละพอร์ต เพื่อป้องกันอุปกรณ์แปลกปลอมเชื่อมต่อเข้าเครือข่ายโดยไม่ได้รับอนุญาต"
  },
  {
    "id": 463,
    "dom": 4,
    "question": "What role does a 'Proxy Server' play in a network?",
    "options": [
      "Only encrypts data between two parties",
      "Acts as an intermediary relaying requests between clients and destination servers, and can filter content, hide IP addresses, and cache data",
      "Distributes IP addresses to devices",
      "Automatically creates VLANs"
    ],
    "correct_idx": 1,
    "explanation": "A Proxy Server acts as an intermediary between users and destination servers, and can be used to filter content, log activity, hide the real user's IP address, and improve speed through caching.",
    "short_explanation_en": "A Proxy Server acts as an intermediary between users and destination servers, and can be used to filter content, log activity, hide the real user's IP address, and improve speed through caching.",
    "question_th": "'Proxy Server' ทำหน้าที่อะไรในเครือข่าย?",
    "options_th": [
      "เข้ารหัสข้อมูลระหว่างสองฝ่ายเท่านั้น",
      "ทำหน้าที่เป็นตัวกลางรับส่งคำขอระหว่างไคลเอนต์กับเซิร์ฟเวอร์ปลายทาง สามารถกรองเนื้อหา ซ่อน IP และแคชข้อมูลได้",
      "แจกจ่าย IP Address ให้อุปกรณ์",
      "สร้าง VLAN อัตโนมัติ"
    ],
    "explanation_th": "Proxy Server ทำหน้าที่เป็นตัวกลาง (Intermediary) ระหว่างผู้ใช้และเซิร์ฟเวอร์ปลายทาง สามารถใช้กรองเนื้อหา บันทึก Log ซ่อน IP Address ของผู้ใช้จริง และช่วยเพิ่มความเร็วผ่านการแคช"
  },
  {
    "id": 464,
    "dom": 4,
    "question": "What impact does an 'ARP Spoofing' attack have on a network?",
    "options": [
      "Crashes a website with massive traffic",
      "The attacker forges MAC addresses to intercept or redirect traffic on a local network, often leading to a MITM attack",
      "Encrypts all files on a machine",
      "Steals passwords via fraudulent emails"
    ],
    "correct_idx": 1,
    "explanation": "ARP Spoofing forges ARP messages to associate the attacker's MAC address with the target's IP address, causing traffic to route through the attacker's machine — commonly used as a step in a Man-in-the-Middle attack on a local network.",
    "short_explanation_en": "ARP Spoofing forges ARP messages to associate the attacker's MAC address with the target's IP address, causing traffic to route through the attacker's machine — commonly used as a step in a Man-in-the-Middle attack on a local network.",
    "question_th": "การโจมตีแบบ 'ARP Spoofing' มีผลกระทบอย่างไรต่อเครือข่าย?",
    "options_th": [
      "ทำให้เว็บไซต์ล่มจากทราฟฟิกมหาศาล",
      "ผู้โจมตีปลอมแปลง MAC Address เพื่อดักจับหรือเปลี่ยนเส้นทางทราฟฟิกในเครือข่ายท้องถิ่น ซึ่งมักนำไปสู่การโจมตีแบบ MITM",
      "เข้ารหัสไฟล์ทั้งหมดในเครื่อง",
      "ขโมยรหัสผ่านผ่านอีเมลหลอกลวง"
    ],
    "explanation_th": "ARP Spoofing คือการปลอมแปลงข้อความ ARP เพื่อเชื่อมโยง MAC Address ของผู้โจมตีเข้ากับ IP Address ของเป้าหมาย ทำให้ทราฟฟิกถูกส่งผ่านเครื่องผู้โจมตี ซึ่งมักถูกใช้เป็นขั้นตอนหนึ่งในการโจมตีแบบ Man-in-the-Middle บนเครือข่ายท้องถิ่น"
  },
  {
    "id": 465,
    "dom": 4,
    "question": "Why is 'Segmentation' between IT (Information Technology) and OT (Operational Technology) networks important in industrial systems?",
    "options": [
      "It's unnecessary since both systems are the same",
      "It prevents attacks spreading from the IT network from reaching production control systems or critical infrastructure that could cause physical damage",
      "It increases the factory's internet speed",
      "It reduces electricity costs"
    ],
    "correct_idx": 1,
    "explanation": "Separating IT and OT networks prevents threats that spread within the IT network (such as malware) from reaching industrial control systems (ICS/SCADA), which could cause far more severe physical damage.",
    "short_explanation_en": "Separating IT and OT networks prevents threats that spread within the IT network (such as malware) from reaching industrial control systems (ICS/SCADA), which could cause far more severe physical damage.",
    "question_th": "'Segmentation' ระหว่างเครือข่าย IT (Information Technology) และ OT (Operational Technology) ในระบบอุตสาหกรรมมีความสำคัญอย่างไร?",
    "options_th": [
      "ไม่มีความจำเป็นเพราะทั้งสองระบบเหมือนกัน",
      "ป้องกันไม่ให้การโจมตีจากเครือข่าย IT ลุกลามไปยังระบบควบคุมการผลิตหรือโครงสร้างพื้นฐานสำคัญที่อาจก่อความเสียหายทางกายภาพ",
      "เพิ่มความเร็วอินเทอร์เน็ตของโรงงาน",
      "ลดต้นทุนไฟฟ้า"
    ],
    "explanation_th": "การแยกเครือข่าย IT และ OT ช่วยป้องกันไม่ให้ภัยคุกคามที่แพร่กระจายในเครือข่าย IT (เช่น มัลแวร์) ลุกลามไปยังระบบควบคุมอุตสาหกรรม (ICS/SCADA) ซึ่งอาจก่อให้เกิดความเสียหายทางกายภาพที่ร้ายแรงกว่า"
  },
  {
    "id": 524,
    "dom": 4,
    "question": "Which OSI layer is responsible for routing packets between different networks based on IP addresses?",
    "options": [
      "Layer 7 - Application",
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport"
    ],
    "correct_idx": 2,
    "explanation": "Layer 3 (Network Layer) is responsible for routing data between different networks using IP addresses — distinct from Layer 2, which operates via MAC address within the same network, and Layer 4, which handles end-to-end delivery like TCP/UDP.",
    "short_explanation_en": "Layer 3 (Network Layer) is responsible for routing data between different networks using IP addresses — distinct from Layer 2, which operates via MAC address within the same network, and Layer 4, which handles end-to-end delivery like TCP/UDP.",
    "question_th": "OSI Layer ใดที่รับผิดชอบการจัดเส้นทาง (routing) แพ็กเก็ตระหว่างเครือข่ายต่าง ๆ โดยใช้ IP address?",
    "options_th": [
      "Layer 7 - Application",
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport"
    ],
    "explanation_th": "Layer 3 (Network Layer) มีหน้าที่กำหนดเส้นทางการส่งข้อมูล (routing) ระหว่างเครือข่ายต่าง ๆ โดยใช้ IP address เป็นตัวระบุ ต่างจาก Layer 2 ซึ่งทำงานด้วย MAC address ภายในเครือข่ายเดียวกัน และ Layer 4 ซึ่งจัดการการส่งข้อมูลแบบ end-to-end เช่น TCP/UDP"
  },
  {
    "id": 525,
    "dom": 4,
    "question": "A network device that filters traffic based on IP address, port number, and protocol, sitting at the network perimeter, is called a:",
    "options": [
      "Hub",
      "Switch",
      "Firewall",
      "Repeater"
    ],
    "correct_idx": 2,
    "explanation": "A Firewall is a device or software that filters network traffic based on defined rules — such as IP address, port, and protocol — typically installed at the network perimeter to control what traffic can enter or leave the network.",
    "short_explanation_en": "A Firewall is a device or software that filters network traffic based on defined rules — such as IP address, port, and protocol — typically installed at the network perimeter to control what traffic can enter or leave the network.",
    "question_th": "อุปกรณ์เครือข่ายที่กรองทราฟฟิกตาม IP address หมายเลขพอร์ต และโปรโตคอล ซึ่งวางอยู่ที่ขอบเขตเครือข่าย เรียกว่าอะไร?",
    "options_th": [
      "Hub",
      "Switch",
      "Firewall",
      "Repeater"
    ],
    "explanation_th": "ไฟร์วอลล์ (Firewall) เป็นอุปกรณ์หรือซอฟต์แวร์ที่กรองทราฟฟิกเครือข่ายตามกฎที่กำหนด เช่น IP address พอร์ต และโปรโตคอล มักติดตั้งที่ขอบเขตเครือข่าย (perimeter) เพื่อควบคุมว่าทราฟฟิกใดสามารถเข้าหรือออกจากเครือข่ายได้"
  },
  {
    "id": 526,
    "dom": 4,
    "question": "Which network security device monitors traffic for suspicious activity and can automatically block or drop malicious packets in real time?",
    "options": [
      "Proxy cache server",
      "Intrusion Detection System (IDS)",
      "Network hub",
      "Intrusion Prevention System (IPS)"
    ],
    "correct_idx": 3,
    "explanation": "An Intrusion Prevention System (IPS) not only detects suspicious activity but can also automatically block or drop malicious packets in real time — unlike an Intrusion Detection System (IDS), which can only detect and alert, not stop an attack on its own.",
    "short_explanation_en": "An Intrusion Prevention System (IPS) not only detects suspicious activity but can also automatically block or drop malicious packets in real time — unlike an Intrusion Detection System (IDS), which can only detect and alert, not stop an attack on its own.",
    "question_th": "อุปกรณ์ความปลอดภัยเครือข่ายใดที่เฝ้าติดตามทราฟฟิกเพื่อหากิจกรรมที่น่าสงสัย และสามารถบล็อกหรือทิ้งแพ็กเก็ตที่เป็นอันตรายได้แบบเรียลไทม์โดยอัตโนมัติ?",
    "options_th": [
      "Proxy cache server",
      "Intrusion Detection System (IDS)",
      "Network hub",
      "Intrusion Prevention System (IPS)"
    ],
    "explanation_th": "Intrusion Prevention System (IPS) ไม่เพียงตรวจจับกิจกรรมที่น่าสงสัย แต่ยังสามารถบล็อกหรือทิ้งแพ็กเก็ตที่เป็นอันตรายได้แบบ real-time โดยอัตโนมัติ ต่างจาก Intrusion Detection System (IDS) ซึ่งทำได้เพียงตรวจจับและแจ้งเตือนเท่านั้น ไม่สามารถสกัดกั้นการโจมตีได้เอง"
  },
  {
    "id": 527,
    "dom": 4,
    "question": "A network segment positioned between the internal network and the internet, used to host public-facing servers like a web server, is called a:",
    "options": [
      "Extranet",
      "Demilitarized Zone (DMZ)",
      "Intranet",
      "Virtual Private Network (VPN)"
    ],
    "correct_idx": 1,
    "explanation": "A Demilitarized Zone (DMZ) is a subnetwork positioned between an organization's internal network and the internet, used to host servers that must be accessible to outsiders, such as a web server, without directly exposing the more critical internal network.",
    "short_explanation_en": "A Demilitarized Zone (DMZ) is a subnetwork positioned between an organization's internal network and the internet, used to host servers that must be accessible to outsiders, such as a web server, without directly exposing the more critical internal network.",
    "question_th": "ส่วนของเครือข่ายที่วางอยู่ระหว่างเครือข่ายภายในและอินเทอร์เน็ต ใช้เพื่อโฮสต์เซิร์ฟเวอร์ที่ต้องเปิดให้สาธารณะเข้าถึง เช่น เว็บเซิร์ฟเวอร์ เรียกว่าอะไร?",
    "options_th": [
      "Extranet",
      "Demilitarized Zone (DMZ)",
      "Intranet",
      "Virtual Private Network (VPN)"
    ],
    "explanation_th": "Demilitarized Zone (DMZ) คือเครือข่ายย่อยที่แยกอยู่ระหว่างเครือข่ายภายในองค์กรกับอินเทอร์เน็ต ใช้วางเซิร์ฟเวอร์ที่ต้องเปิดให้บุคคลภายนอกเข้าถึงได้ เช่น เว็บเซิร์ฟเวอร์ โดยไม่ทำให้เครือข่ายภายในที่สำคัญกว่าถูกเปิดเผยโดยตรง"
  },
  {
    "id": 528,
    "dom": 4,
    "question": "Which technology allows multiple devices on a private network to share a single public IP address when accessing the internet?",
    "options": [
      "Domain Name System (DNS)",
      "Network Address Translation (NAT)",
      "Virtual Local Area Network (VLAN)",
      "Dynamic Host Configuration Protocol (DHCP)"
    ],
    "correct_idx": 1,
    "explanation": "Network Address Translation (NAT) translates internal private IP addresses into a single shared public IP address when accessing the internet, conserving the number of public IPs needed and improving security by hiding internal IPs from outside.",
    "short_explanation_en": "Network Address Translation (NAT) translates internal private IP addresses into a single shared public IP address when accessing the internet, conserving the number of public IPs needed and improving security by hiding internal IPs from outside.",
    "question_th": "เทคโนโลยีใดที่ช่วยให้อุปกรณ์หลายเครื่องในเครือข่ายส่วนตัวสามารถแชร์ public IP address เดียวกันเมื่อเข้าถึงอินเทอร์เน็ต?",
    "options_th": [
      "Domain Name System (DNS)",
      "Network Address Translation (NAT)",
      "Virtual Local Area Network (VLAN)",
      "Dynamic Host Configuration Protocol (DHCP)"
    ],
    "explanation_th": "Network Address Translation (NAT) ทำหน้าที่แปลง IP address ภายในเครือข่ายส่วนตัว (private) ให้กลายเป็น IP address สาธารณะ (public) เดียวกันเมื่อออกสู่อินเทอร์เน็ต ช่วยประหยัดจำนวน public IP ที่ต้องใช้ และเพิ่มความปลอดภัยด้วยการซ่อน IP ภายในจากภายนอก"
  },
  {
    "id": 529,
    "dom": 4,
    "question": "Which technology logically separates devices on the same physical network switch into distinct broadcast domains for security and traffic management?",
    "options": [
      "Domain Name System (DNS)",
      "Virtual Local Area Network (VLAN)",
      "Address Resolution Protocol (ARP)",
      "Network Address Translation (NAT)"
    ],
    "correct_idx": 1,
    "explanation": "A VLAN (Virtual Local Area Network) divides devices connected to the same physical switch into multiple logical subnetworks, separating them at the broadcast domain level — improving security and traffic management without needing separate physical cabling.",
    "short_explanation_en": "A VLAN (Virtual Local Area Network) divides devices connected to the same physical switch into multiple logical subnetworks, separating them at the broadcast domain level — improving security and traffic management without needing separate physical cabling.",
    "question_th": "เทคโนโลยีใดที่แยกอุปกรณ์บนสวิตช์เครือข่ายทางกายภาพเดียวกันออกเป็น broadcast domain ที่แยกจากกันทางตรรกะ เพื่อความปลอดภัยและการจัดการทราฟฟิก?",
    "options_th": [
      "Domain Name System (DNS)",
      "Virtual Local Area Network (VLAN)",
      "Address Resolution Protocol (ARP)",
      "Network Address Translation (NAT)"
    ],
    "explanation_th": "VLAN (Virtual Local Area Network) ช่วยแบ่งอุปกรณ์ที่เชื่อมต่อกับสวิตช์ทางกายภาพเดียวกันออกเป็นเครือข่ายย่อยแบบตรรกะ (logical) หลายเครือข่าย ทำให้แต่ละกลุ่มแยกขาดจากกันในระดับ broadcast domain ช่วยเพิ่มความปลอดภัยและจัดการทราฟฟิกได้ดีขึ้นโดยไม่ต้องเดินสายแยกทางกายภาพ"
  },
  {
    "id": 530,
    "dom": 4,
    "question": "Which wireless security protocol is considered the CURRENT strongest standard, offering improved encryption over its predecessor?",
    "options": [
      "Open (no encryption)",
      "WEP",
      "WPA",
      "WPA3"
    ],
    "correct_idx": 3,
    "explanation": "WPA3 (Wi-Fi Protected Access 3) is currently the strongest wireless security standard, offering better encryption than the previous WPA2 and improved protection against brute-force password attacks, while WEP is an old, insecure standard that should no longer be used.",
    "short_explanation_en": "WPA3 (Wi-Fi Protected Access 3) is currently the strongest wireless security standard, offering better encryption than the previous WPA2 and improved protection against brute-force password attacks, while WEP is an old, insecure standard that should no longer be used.",
    "question_th": "โปรโตคอลความปลอดภัยเครือข่ายไร้สายใดที่ถือเป็นมาตรฐานที่แข็งแกร่งที่สุดในปัจจุบัน โดยให้การเข้ารหัสที่ดีกว่ารุ่นก่อนหน้า?",
    "options_th": [
      "Open (ไม่เข้ารหัส)",
      "WEP",
      "WPA",
      "WPA3"
    ],
    "explanation_th": "WPA3 (Wi-Fi Protected Access 3) เป็นมาตรฐานความปลอดภัยเครือข่ายไร้สายที่แข็งแกร่งที่สุดในปัจจุบัน ให้การเข้ารหัสที่ดีกว่า WPA2 รุ่นก่อนหน้า และป้องกันการโจมตีแบบเดารหัสผ่าน (brute-force) ได้ดีขึ้น ในขณะที่ WEP เป็นมาตรฐานเก่าที่ไม่ปลอดภัยและไม่ควรใช้งานแล้ว"
  },
  {
    "id": 531,
    "dom": 4,
    "question": "Which protocol provides encrypted remote command-line access to a server, replacing the insecure Telnet protocol?",
    "options": [
      "FTP",
      "HTTP",
      "SSH (Secure Shell)",
      "SNMP"
    ],
    "correct_idx": 2,
    "explanation": "SSH (Secure Shell) provides encrypted command-line access to a remote server, protecting against eavesdropping — a key weakness of Telnet, which transmits data including passwords in plaintext.",
    "short_explanation_en": "SSH (Secure Shell) provides encrypted command-line access to a remote server, protecting against eavesdropping — a key weakness of Telnet, which transmits data including passwords in plaintext.",
    "question_th": "โปรโตคอลใดที่ให้การเข้าถึงบรรทัดคำสั่งของเซิร์ฟเวอร์ระยะไกลแบบเข้ารหัส เข้ามาแทนที่โปรโตคอล Telnet ที่ไม่ปลอดภัย?",
    "options_th": [
      "FTP",
      "HTTP",
      "SSH (Secure Shell)",
      "SNMP"
    ],
    "explanation_th": "SSH (Secure Shell) ให้การเข้าถึงเครื่องเซิร์ฟเวอร์ระยะไกลผ่านคำสั่ง (command-line) แบบเข้ารหัส ช่วยป้องกันการดักฟังข้อมูล (eavesdropping) ซึ่งเป็นจุดอ่อนสำคัญของ Telnet ที่ส่งข้อมูลรวมถึงรหัสผ่านแบบไม่เข้ารหัส (plaintext)"
  },
  {
    "id": 532,
    "dom": 4,
    "question": "Which port number is commonly associated with HTTPS traffic?",
    "options": [
      "25",
      "443",
      "80",
      "22"
    ],
    "correct_idx": 1,
    "explanation": "Port 443 is the standard port used for HTTPS (HTTP encrypted with TLS/SSL). Port 80 is used for unencrypted HTTP, port 22 is used for SSH, and port 25 is used for SMTP email transmission.",
    "short_explanation_en": "Port 443 is the standard port used for HTTPS (HTTP encrypted with TLS/SSL). Port 80 is used for unencrypted HTTP, port 22 is used for SSH, and port 25 is used for SMTP email transmission.",
    "question_th": "หมายเลขพอร์ตใดที่มักเกี่ยวข้องกับทราฟฟิก HTTPS?",
    "options_th": [
      "25",
      "443",
      "80",
      "22"
    ],
    "explanation_th": "พอร์ต 443 เป็นพอร์ตมาตรฐานที่ใช้สำหรับ HTTPS (HTTP ที่เข้ารหัสด้วย TLS/SSL) ส่วนพอร์ต 80 ใช้สำหรับ HTTP แบบไม่เข้ารหัส พอร์ต 22 ใช้สำหรับ SSH และพอร์ต 25 ใช้สำหรับ SMTP ในการรับส่งอีเมล"
  },
  {
    "id": 533,
    "dom": 4,
    "question": "Which technology creates an encrypted tunnel over a public network, allowing a remote user to securely access an organization's internal network?",
    "options": [
      "Domain Name System (DNS)",
      "Network Address Translation (NAT)",
      "Simple Network Management Protocol (SNMP)",
      "Virtual Private Network (VPN)"
    ],
    "correct_idx": 3,
    "explanation": "A VPN (Virtual Private Network) creates an encrypted tunnel over a public network, such as the internet, allowing a remote user to securely access an organization's internal network as if they were physically connected in the office.",
    "short_explanation_en": "A VPN (Virtual Private Network) creates an encrypted tunnel over a public network, such as the internet, allowing a remote user to securely access an organization's internal network as if they were physically connected in the office.",
    "question_th": "เทคโนโลยีใดที่สร้างอุโมงค์เข้ารหัสผ่านเครือข่ายสาธารณะ ช่วยให้ผู้ใช้ระยะไกลเข้าถึงเครือข่ายภายในองค์กรได้อย่างปลอดภัย?",
    "options_th": [
      "Domain Name System (DNS)",
      "Network Address Translation (NAT)",
      "Simple Network Management Protocol (SNMP)",
      "Virtual Private Network (VPN)"
    ],
    "explanation_th": "VPN (Virtual Private Network) สร้างอุโมงค์ (tunnel) ที่เข้ารหัสข้อมูลผ่านเครือข่ายสาธารณะ เช่น อินเทอร์เน็ต ทำให้ผู้ใช้งานระยะไกลสามารถเข้าถึงเครือข่ายภายในองค์กรได้อย่างปลอดภัยเสมือนเชื่อมต่ออยู่ในสำนักงานจริง โดยข้อมูลที่ส่งผ่านจะถูกป้องกันจากการดักฟังระหว่างทาง"
  },
  {
    "id": 534,
    "dom": 4,
    "question": "In the cloud shared responsibility model, under Infrastructure as a Service (IaaS), who is TYPICALLY responsible for securing the guest operating system and installed applications?",
    "options": [
      "A third-party auditor",
      "The cloud service provider (CSP) only",
      "Neither party — it is unmanaged",
      "The customer"
    ],
    "correct_idx": 3,
    "explanation": "In the IaaS model, the cloud service provider (CSP) is responsible only for the physical infrastructure, network, and virtualization layer, while the customer is responsible for securing the operating system, applications, and data installed on their own virtual machines.",
    "short_explanation_en": "In the IaaS model, the cloud service provider (CSP) is responsible only for the physical infrastructure, network, and virtualization layer, while the customer is responsible for securing the operating system, applications, and data installed on their own virtual machines.",
    "question_th": "ในโมเดลความรับผิดชอบร่วมกันของคลาวด์ (Shared Responsibility Model) ภายใต้ Infrastructure as a Service (IaaS) โดยทั่วไปใครเป็นผู้รับผิดชอบในการรักษาความปลอดภัยของระบบปฏิบัติการ (guest OS) และแอปพลิเคชันที่ติดตั้งไว้?",
    "options_th": [
      "ผู้ตรวจสอบบุคคลที่สาม",
      "ผู้ให้บริการคลาวด์ (CSP) เท่านั้น",
      "ไม่มีฝ่ายใดรับผิดชอบ — ไม่มีการจัดการ",
      "ลูกค้า"
    ],
    "explanation_th": "ในรูปแบบ IaaS ผู้ให้บริการคลาวด์ (CSP) รับผิดชอบโครงสร้างพื้นฐานทางกายภาพ เครือข่าย และ virtualization layer เท่านั้น ส่วนลูกค้าต้องรับผิดชอบการดูแลความปลอดภัยของระบบปฏิบัติการ (OS) แอปพลิเคชัน และข้อมูลที่ติดตั้งอยู่บนเครื่องเสมือนของตนเองทั้งหมด"
  },
  {
    "id": 535,
    "dom": 4,
    "question": "Which cloud deployment model involves infrastructure shared exclusively among several organizations with common concerns, such as regulatory compliance requirements?",
    "options": [
      "Public cloud",
      "Hybrid cloud",
      "Private cloud",
      "Community cloud"
    ],
    "correct_idx": 3,
    "explanation": "A Community Cloud is a cloud model where infrastructure is shared among several organizations with common needs or requirements, such as government agencies subject to the same regulations — distinct from Public Cloud, which is open to the general public, and Private Cloud, used by a single organization only.",
    "short_explanation_en": "A Community Cloud is a cloud model where infrastructure is shared among several organizations with common needs or requirements, such as government agencies subject to the same regulations — distinct from Public Cloud, which is open to the general public, and Private Cloud, used by a single organization only.",
    "question_th": "โมเดลการปรับใช้คลาวด์ใดที่โครงสร้างพื้นฐานถูกใช้ร่วมกันเฉพาะโดยหลายองค์กรที่มีข้อกังวลร่วมกัน เช่น ข้อกำหนดด้านการปฏิบัติตามกฎระเบียบ?",
    "options_th": [
      "Public cloud",
      "Hybrid cloud",
      "Private cloud",
      "Community cloud"
    ],
    "explanation_th": "Community Cloud คือรูปแบบคลาวด์ที่โครงสร้างพื้นฐานถูกใช้งานร่วมกันโดยองค์กรหลายแห่งที่มีความต้องการหรือข้อกำหนดร่วมกัน เช่น หน่วยงานราชการที่ต้องปฏิบัติตามกฎระเบียบเดียวกัน ต่างจาก Public Cloud ที่เปิดให้บุคคลทั่วไปใช้งาน และ Private Cloud ที่ใช้เฉพาะองค์กรเดียว"
  },
  {
    "id": 536,
    "dom": 4,
    "question": "Which security model operates on the principle of 'never trust, always verify', requiring continuous authentication and authorization for every access request regardless of network location?",
    "options": [
      "Zero Trust",
      "Discretionary Access Control",
      "Perimeter security",
      "Defense in Depth"
    ],
    "correct_idx": 0,
    "explanation": "Zero Trust is a security concept based on 'never trust, always verify' — no device or user is automatically trusted even within the organization's network. Every access request must go through continuous authentication and authorization, unlike traditional perimeter-focused security.",
    "short_explanation_en": "Zero Trust is a security concept based on 'never trust, always verify' — no device or user is automatically trusted even within the organization's network. Every access request must go through continuous authentication and authorization, unlike traditional perimeter-focused security.",
    "question_th": "โมเดลความปลอดภัยใดที่ทำงานตามหลักการ 'อย่าไว้ใจ ต้องตรวจสอบเสมอ' โดยกำหนดให้ต้องมีการยืนยันตัวตนและตรวจสอบสิทธิ์อย่างต่อเนื่องสำหรับทุกคำขอเข้าถึง ไม่ว่าจะอยู่ที่ตำแหน่งใดในเครือข่าย?",
    "options_th": [
      "Zero Trust",
      "Discretionary Access Control",
      "Perimeter security",
      "Defense in Depth"
    ],
    "explanation_th": "Zero Trust เป็นแนวคิดด้านความปลอดภัยที่ยึดหลัก 'อย่าไว้ใจ ต้องตรวจสอบเสมอ' โดยไม่มีการไว้วางใจอุปกรณ์หรือผู้ใช้โดยอัตโนมัติแม้จะอยู่ภายในเครือข่ายองค์กรก็ตาม ทุกคำขอเข้าถึงต้องผ่านการยืนยันตัวตนและตรวจสอบสิทธิ์อย่างต่อเนื่อง ต่างจากแนวคิดความปลอดภัยแบบเดิมที่เน้นป้องกันเฉพาะขอบเขตเครือข่าย (perimeter)"
  },
  {
    "id": 537,
    "dom": 4,
    "question": "An attacker floods a web server with an overwhelming volume of traffic from thousands of compromised devices, making the service unavailable to legitimate users. This is an example of a:",
    "options": [
      "Distributed Denial of Service (DDoS) attack",
      "SQL injection attack",
      "Phishing attack",
      "Man-in-the-Middle (MITM) attack"
    ],
    "correct_idx": 0,
    "explanation": "A Distributed Denial of Service (DDoS) attack uses a large number of compromised devices (a botnet) to send massive traffic to a target simultaneously, overwhelming the system so legitimate users cannot access the service — impacting Availability.",
    "short_explanation_en": "A Distributed Denial of Service (DDoS) attack uses a large number of compromised devices (a botnet) to send massive traffic to a target simultaneously, overwhelming the system so legitimate users cannot access the service — impacting Availability.",
    "question_th": "ผู้โจมตีท่วมเว็บเซิร์ฟเวอร์ด้วยปริมาณทราฟฟิกมหาศาลจากอุปกรณ์ที่ถูกยึดครองนับพันเครื่อง ทำให้บริการไม่พร้อมใช้งานสำหรับผู้ใช้ที่ถูกต้องตามกฎหมาย นี่เป็นตัวอย่างของ:",
    "options_th": [
      "การโจมตีแบบ Distributed Denial of Service (DDoS)",
      "การโจมตีแบบ SQL injection",
      "การโจมตีแบบ Phishing",
      "การโจมตีแบบ Man-in-the-Middle (MITM)"
    ],
    "explanation_th": "การโจมตีแบบ Distributed Denial of Service (DDoS) ใช้อุปกรณ์จำนวนมากที่ถูกยึดครอง (บอตเน็ต) ส่งทราฟฟิกจำนวนมหาศาลไปยังเป้าหมายพร้อมกัน จนระบบไม่สามารถรองรับผู้ใช้งานที่ถูกต้องตามกฎหมายได้ ส่งผลให้บริการไม่พร้อมใช้งาน (Availability ถูกกระทบ)"
  },
  {
    "id": 538,
    "dom": 4,
    "question": "An attacker intercepts communication between two parties who believe they are communicating directly with each other, potentially altering the data in transit. This is known as a:",
    "options": [
      "Rainbow table attack",
      "Man-in-the-Middle (MITM) attack",
      "Brute-force attack",
      "Denial of Service (DoS) attack"
    ],
    "correct_idx": 1,
    "explanation": "Man-in-the-Middle (MITM) is an attack where a bad actor inserts themselves between two communicating parties without either party knowing, allowing them to eavesdrop or even alter data in transit. Strong encryption, such as TLS, helps reduce this risk.",
    "short_explanation_en": "Man-in-the-Middle (MITM) is an attack where a bad actor inserts themselves between two communicating parties without either party knowing, allowing them to eavesdrop or even alter data in transit. Strong encryption, such as TLS, helps reduce this risk.",
    "question_th": "ผู้โจมตีดักจับการสื่อสารระหว่างสองฝ่ายที่เชื่อว่ากำลังสื่อสารกันโดยตรง และอาจแก้ไขข้อมูลระหว่างทาง นี่เรียกว่า:",
    "options_th": [
      "การโจมตีแบบ Rainbow table",
      "การโจมตีแบบ Man-in-the-Middle (MITM)",
      "การโจมตีแบบ Brute-force",
      "การโจมตีแบบ Denial of Service (DoS)"
    ],
    "explanation_th": "Man-in-the-Middle (MITM) คือการโจมตีที่ผู้ไม่หวังดีแทรกตัวอยู่ระหว่างการสื่อสารของสองฝ่ายโดยที่ทั้งสองฝ่ายไม่รู้ตัว ทำให้สามารถดักอ่านหรือแม้แต่แก้ไขข้อมูลระหว่างทางได้ การใช้การเข้ารหัสที่แข็งแรง เช่น TLS ช่วยลดความเสี่ยงจากการโจมตีประเภทนี้ได้"
  },
  {
    "id": 539,
    "dom": 4,
    "question": "Which type of attack involves sending fraudulent emails that appear to come from a trusted source, in order to trick users into revealing sensitive information?",
    "options": [
      "Phishing",
      "ARP spoofing",
      "DDoS",
      "SQL injection"
    ],
    "correct_idx": 0,
    "explanation": "Phishing is a social engineering attack that sends fraudulent emails or messages appearing to come from a trustworthy source, tricking victims into revealing sensitive information, such as passwords, or clicking a malicious link.",
    "short_explanation_en": "Phishing is a social engineering attack that sends fraudulent emails or messages appearing to come from a trustworthy source, tricking victims into revealing sensitive information, such as passwords, or clicking a malicious link.",
    "question_th": "การโจมตีประเภทใดที่เกี่ยวข้องกับการส่งอีเมลหลอกลวงที่ดูเหมือนมาจากแหล่งที่น่าเชื่อถือ เพื่อหลอกให้ผู้ใช้เปิดเผยข้อมูลที่อ่อนไหว?",
    "options_th": [
      "Phishing",
      "ARP spoofing",
      "DDoS",
      "SQL injection"
    ],
    "explanation_th": "Phishing คือการโจมตีทางวิศวกรรมสังคม (social engineering) โดยการส่งอีเมลหรือข้อความหลอกลวงที่ดูเหมือนมาจากแหล่งที่น่าเชื่อถือ เพื่อหลอกให้เหยื่อเปิดเผยข้อมูลที่ละเอียดอ่อน เช่น รหัสผ่าน หรือคลิกลิงก์ที่เป็นอันตราย"
  },
  {
    "id": 540,
    "dom": 4,
    "question": "Which server sits between clients and the internet, forwarding requests on behalf of clients and potentially caching content or filtering traffic?",
    "options": [
      "Proxy server",
      "DNS server",
      "DHCP server",
      "Domain controller"
    ],
    "correct_idx": 0,
    "explanation": "A Proxy Server acts as an intermediary between client machines and the internet, forwarding requests on the client's behalf. It may be used to cache content for faster loading, filter inappropriate traffic, or hide the organization's internal IP addresses from outside.",
    "short_explanation_en": "A Proxy Server acts as an intermediary between client machines and the internet, forwarding requests on the client's behalf. It may be used to cache content for faster loading, filter inappropriate traffic, or hide the organization's internal IP addresses from outside.",
    "question_th": "เซิร์ฟเวอร์ใดที่วางอยู่ระหว่างไคลเอนต์กับอินเทอร์เน็ต ส่งต่อคำขอในนามของไคลเอนต์ และอาจแคชเนื้อหาหรือกรองทราฟฟิก?",
    "options_th": [
      "Proxy server",
      "DNS server",
      "DHCP server",
      "Domain controller"
    ],
    "explanation_th": "Proxy Server ทำหน้าที่เป็นตัวกลางระหว่างเครื่องไคลเอนต์กับอินเทอร์เน็ต โดยส่งต่อคำขอแทนไคลเอนต์ อาจใช้เพื่อแคชเนื้อหาให้โหลดเร็วขึ้น กรองทราฟฟิกที่ไม่เหมาะสม หรือซ่อน IP address ภายในองค์กรจากภายนอก ช่วยเพิ่มทั้งประสิทธิภาพและความปลอดภัย"
  },
  {
    "id": 541,
    "dom": 4,
    "question": "Which protocol translates human-readable domain names (like example.com) into IP addresses that computers use to locate each other on a network?",
    "options": [
      "Dynamic Host Configuration Protocol (DHCP)",
      "Simple Mail Transfer Protocol (SMTP)",
      "Address Resolution Protocol (ARP)",
      "Domain Name System (DNS)"
    ],
    "correct_idx": 3,
    "explanation": "DNS (Domain Name System) translates human-readable domain names, such as example.com, into the IP addresses computers use to locate and connect to each other on a network. Without DNS, users would need to memorize IP numbers instead of website names.",
    "short_explanation_en": "DNS (Domain Name System) translates human-readable domain names, such as example.com, into the IP addresses computers use to locate and connect to each other on a network. Without DNS, users would need to memorize IP numbers instead of website names.",
    "question_th": "โปรโตคอลใดที่แปลงชื่อโดเมนที่มนุษย์อ่านเข้าใจง่าย (เช่น example.com) ให้เป็น IP address ที่คอมพิวเตอร์ใช้ค้นหากันบนเครือข่าย?",
    "options_th": [
      "Dynamic Host Configuration Protocol (DHCP)",
      "Simple Mail Transfer Protocol (SMTP)",
      "Address Resolution Protocol (ARP)",
      "Domain Name System (DNS)"
    ],
    "explanation_th": "DNS (Domain Name System) ทำหน้าที่แปลงชื่อโดเมนที่มนุษย์อ่านเข้าใจง่าย เช่น example.com ให้กลายเป็นหมายเลข IP address ที่คอมพิวเตอร์ใช้ในการค้นหาและเชื่อมต่อกันบนเครือข่าย หากปราศจาก DNS ผู้ใช้จะต้องจดจำหมายเลข IP แทนชื่อเว็บไซต์"
  },
  {
    "id": 542,
    "dom": 4,
    "question": "Which network design principle involves dividing a network into smaller, isolated subnetworks to limit the spread of an attack if one segment is compromised?",
    "options": [
      "Load balancing",
      "Port forwarding",
      "Network Address Translation",
      "Network segmentation"
    ],
    "correct_idx": 3,
    "explanation": "Network Segmentation divides a large network into smaller, isolated subnetworks to limit the scope of damage if one segment is compromised. An attacker who breaches one segment cannot easily spread to others, limiting impact and containing threat propagation.",
    "short_explanation_en": "Network Segmentation divides a large network into smaller, isolated subnetworks to limit the scope of damage if one segment is compromised. An attacker who breaches one segment cannot easily spread to others, limiting impact and containing threat propagation.",
    "question_th": "หลักการออกแบบเครือข่ายใดที่เกี่ยวข้องกับการแบ่งเครือข่ายออกเป็นเครือข่ายย่อยที่เล็กกว่าและแยกจากกัน เพื่อจำกัดการแพร่กระจายของการโจมตีหากส่วนใดถูกบุกรุก?",
    "options_th": [
      "Load balancing",
      "Port forwarding",
      "Network Address Translation",
      "Network segmentation"
    ],
    "explanation_th": "Network Segmentation คือการแบ่งเครือข่ายใหญ่ออกเป็นเครือข่ายย่อยที่แยกจากกัน เพื่อจำกัดขอบเขตความเสียหายหากส่วนใดส่วนหนึ่งถูกโจมตี ผู้โจมตีที่เจาะเข้าไปในเครือข่ายย่อยหนึ่งจะไม่สามารถแพร่กระจายไปยังส่วนอื่นได้โดยง่าย ช่วยจำกัดผลกระทบและควบคุมการแพร่ระบาดของภัยคุกคาม"
  },
  {
    "id": 543,
    "dom": 4,
    "question": "Which device distributes incoming network traffic across multiple servers to improve performance and ensure availability?",
    "options": [
      "Repeater",
      "Load balancer",
      "Switch",
      "Firewall"
    ],
    "correct_idx": 1,
    "explanation": "A Load Balancer distributes incoming traffic across multiple servers so no single server bears too much load, improving performance, reducing latency, and increasing overall system Availability. If one server fails, traffic is redirected to others.",
    "short_explanation_en": "A Load Balancer distributes incoming traffic across multiple servers so no single server bears too much load, improving performance, reducing latency, and increasing overall system Availability. If one server fails, traffic is redirected to others.",
    "question_th": "อุปกรณ์ใดที่กระจายทราฟฟิกเครือข่ายขาเข้าไปยังเซิร์ฟเวอร์หลายเครื่อง เพื่อปรับปรุงประสิทธิภาพและรับประกันความพร้อมใช้งาน?",
    "options_th": [
      "Repeater",
      "Load balancer",
      "Switch",
      "Firewall"
    ],
    "explanation_th": "Load Balancer ทำหน้าที่กระจายทราฟฟิกที่เข้ามายังเซิร์ฟเวอร์หลายเครื่อง เพื่อไม่ให้เซิร์ฟเวอร์เครื่องใดเครื่องหนึ่งรับภาระมากเกินไป ช่วยเพิ่มประสิทธิภาพการทำงาน ลดความหน่วง และเพิ่มความพร้อมใช้งาน (Availability) ของระบบโดยรวม หากเซิร์ฟเวอร์หนึ่งล้มเหลว ทราฟฟิกจะถูกส่งไปยังเซิร์ฟเวอร์อื่นแทน"
  },
  {
    "id": 544,
    "dom": 4,
    "question": "Which of the following describes 'Software as a Service' (SaaS) in cloud computing?",
    "options": [
      "A platform providing tools for customers to develop and deploy their own applications",
      "Raw computing infrastructure such as virtual machines and storage",
      "A private data center owned entirely by the customer",
      "A fully managed application accessed via a web browser, such as webmail or online office suites"
    ],
    "correct_idx": 3,
    "explanation": "Software as a Service (SaaS) is a cloud model where the provider manages the entire application, and users simply access it through a web browser without installing or maintaining the system themselves — such as webmail or online office suites, unlike IaaS (infrastructure only) or PaaS (a platform for building applications).",
    "short_explanation_en": "Software as a Service (SaaS) is a cloud model where the provider manages the entire application, and users simply access it through a web browser without installing or maintaining the system themselves — such as webmail or online office suites, unlike IaaS (infrastructure only) or PaaS (a platform for building applications).",
    "question_th": "ข้อใดอธิบาย 'Software as a Service' (SaaS) ในระบบคลาวด์คอมพิวติ้ง?",
    "options_th": [
      "แพลตฟอร์มที่ให้เครื่องมือสำหรับลูกค้าในการพัฒนาและปรับใช้แอปพลิเคชันของตนเอง",
      "โครงสร้างพื้นฐานคอมพิวเตอร์ดิบ เช่น เครื่องเสมือนและพื้นที่จัดเก็บ",
      "ศูนย์ข้อมูลส่วนตัวที่เป็นเจ้าของทั้งหมดโดยลูกค้า",
      "แอปพลิเคชันที่ได้รับการจัดการอย่างสมบูรณ์ที่เข้าถึงผ่านเว็บเบราว์เซอร์ เช่น เว็บเมลหรือชุดโปรแกรมสำนักงานออนไลน์"
    ],
    "explanation_th": "Software as a Service (SaaS) คือรูปแบบคลาวด์ที่ผู้ให้บริการจัดการแอปพลิเคชันทั้งหมดให้ ผู้ใช้เพียงเข้าถึงผ่านเว็บเบราว์เซอร์โดยไม่ต้องติดตั้งหรือดูแลรักษาระบบเอง เช่น เว็บเมลหรือโปรแกรมสำนักงานออนไลน์ ต่างจาก IaaS ที่ให้เพียงโครงสร้างพื้นฐาน หรือ PaaS ที่ให้แพลตฟอร์มสำหรับพัฒนาแอปพลิเคชัน"
  },
  {
    "id": 545,
    "dom": 4,
    "question": "An attacker sends forged ARP messages to associate their own MAC address with the IP address of a legitimate device on the local network, intercepting traffic intended for that device. This attack is known as:",
    "options": [
      "Buffer overflow",
      "SQL injection",
      "ARP spoofing (ARP poisoning)",
      "DNS spoofing"
    ],
    "correct_idx": 2,
    "explanation": "ARP Spoofing (or ARP Poisoning) forges ARP messages to associate the attacker's MAC address with the IP address of a legitimate device on the local network, causing traffic intended for that device to be routed to the attacker instead — commonly used as the first step of a Man-in-the-Middle attack.",
    "short_explanation_en": "ARP Spoofing (or ARP Poisoning) forges ARP messages to associate the attacker's MAC address with the IP address of a legitimate device on the local network, causing traffic intended for that device to be routed to the attacker instead — commonly used as the first step of a Man-in-the-Middle attack.",
    "question_th": "ผู้โจมตีส่งข้อความ ARP ปลอมเพื่อเชื่อมโยง MAC address ของตนเองเข้ากับ IP address ของอุปกรณ์ที่ถูกต้องในเครือข่ายท้องถิ่น เพื่อดักจับทราฟฟิกที่มุ่งหมายไปยังอุปกรณ์นั้น การโจมตีนี้เรียกว่า:",
    "options_th": [
      "Buffer overflow",
      "SQL injection",
      "ARP spoofing (ARP poisoning)",
      "DNS spoofing"
    ],
    "explanation_th": "ARP Spoofing (หรือ ARP Poisoning) คือการปลอมแปลงข้อความ ARP เพื่อเชื่อมโยง MAC address ของผู้โจมตีเข้ากับ IP address ของอุปกรณ์ที่ถูกต้องในเครือข่ายท้องถิ่น ทำให้ทราฟฟิกที่ควรจะส่งไปยังอุปกรณ์นั้นถูกส่งมาที่ผู้โจมตีแทน ซึ่งมักใช้เป็นขั้นตอนแรกของการโจมตีแบบ Man-in-the-Middle"
  },
  {
    "id": 546,
    "dom": 4,
    "question": "Which security architecture principle involves implementing multiple, overlapping layers of security controls so that if one layer fails, others still provide protection?",
    "options": [
      "Least Privilege",
      "Zero Trust",
      "Defense in Depth",
      "Single point of failure"
    ],
    "correct_idx": 2,
    "explanation": "Defense in Depth involves layering multiple overlapping security measures — such as firewalls, intrusion detection, encryption, and access control — so that if one layer fails, others continue to provide protection, increasing the difficulty and cost for an attacker to succeed.",
    "short_explanation_en": "Defense in Depth involves layering multiple overlapping security measures — such as firewalls, intrusion detection, encryption, and access control — so that if one layer fails, others continue to provide protection, increasing the difficulty and cost for an attacker to succeed.",
    "question_th": "หลักการสถาปัตยกรรมความปลอดภัยใดที่เกี่ยวข้องกับการนำมาตรการควบคุมความปลอดภัยหลายชั้นที่ซ้อนทับกันมาใช้ เพื่อให้หากชั้นหนึ่งล้มเหลว ชั้นอื่นยังคงให้การป้องกันอยู่?",
    "options_th": [
      "Least Privilege",
      "Zero Trust",
      "Defense in Depth",
      "Single point of failure"
    ],
    "explanation_th": "Defense in Depth คือแนวคิดการวางมาตรการความปลอดภัยหลายชั้นซ้อนกัน เช่น ไฟร์วอลล์ ระบบตรวจจับการบุกรุก การเข้ารหัส และการควบคุมการเข้าถึง เพื่อให้หากชั้นป้องกันหนึ่งล้มเหลว ยังมีชั้นอื่นคอยป้องกันอยู่ ช่วยเพิ่มความยากและต้นทุนที่ผู้โจมตีต้องใช้ในการเจาะระบบให้สำเร็จ"
  },
  {
    "id": 547,
    "dom": 4,
    "question": "Which type of firewall makes filtering decisions based on the state and context of active connections, rather than examining each packet in isolation?",
    "options": [
      "Stateful inspection firewall",
      "Packet-filtering firewall",
      "Circuit-level gateway only",
      "Proxy-only firewall"
    ],
    "correct_idx": 0,
    "explanation": "A Stateful Inspection Firewall tracks the state of active connections (such as a TCP handshake) and uses that context to make filtering decisions, making it more accurate and secure than a basic packet-filtering firewall, which examines each packet in isolation without context.",
    "short_explanation_en": "A Stateful Inspection Firewall tracks the state of active connections (such as a TCP handshake) and uses that context to make filtering decisions, making it more accurate and secure than a basic packet-filtering firewall, which examines each packet in isolation without context.",
    "question_th": "ไฟร์วอลล์ประเภทใดที่ตัดสินใจกรองทราฟฟิกตามสถานะและบริบทของการเชื่อมต่อที่กำลังดำเนินอยู่ แทนที่จะตรวจสอบแต่ละแพ็กเก็ตแยกจากกัน?",
    "options_th": [
      "Stateful inspection firewall",
      "Packet-filtering firewall",
      "Circuit-level gateway เท่านั้น",
      "Proxy-only firewall"
    ],
    "explanation_th": "Stateful Inspection Firewall ติดตามสถานะของการเชื่อมต่อที่กำลังดำเนินอยู่ (เช่น การจับมือ TCP) และใช้บริบทนั้นในการตัดสินใจกรองทราฟฟิก ทำให้แม่นยำและปลอดภัยกว่าไฟร์วอลล์แบบกรองแพ็กเก็ตพื้นฐาน (packet-filtering) ที่พิจารณาแต่ละแพ็กเก็ตแยกจากกันโดยไม่มีบริบท"
  }
];

export default questions;
