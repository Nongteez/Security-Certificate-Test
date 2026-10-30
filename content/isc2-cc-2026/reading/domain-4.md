<p class="reading-lead">สรุปและเรียบเรียงเนื้อหาฉบับสมบูรณ์สำหรับเตรียมสอบ ISC2 Certified in Cybersecurity (CC) ฉบับปรับปรุงปี 2026 ใน Domain 4: Network Security (น้ำหนักข้อสอบ 21.3%) ครอบคลุมพื้นฐานเครือข่ายและแบบจำลองอ้างอิง (OSI 7-Layer, TCP/IP 4-Layer, IPv4/IPv6, CIDR, NAT, TCP vs. UDP, พอร์ตบริการหลักและอุปกรณ์เครือข่าย), ความมั่นคงปลอดภัยไร้สาย (Wi-Fi 802.11, WPA2/WPA3, VPN), สถาปัตยกรรมความปลอดภัยเครือข่าย (Network Segmentation, DMZ, VLANs, Micro-Segmentation, Defense in Depth, Zero Trust Architecture), และความมั่นคงปลอดภัยบนระบบคลาวด์ (NIST SP 800-145 5 Characteristics, Service Models IaaS/PaaS/SaaS/FaaS, Shared Responsibility Model, Deployment Models Hybrid vs. Multi-Cloud, Cloud Network Controls)</p>

<section class="reading-objective-section" id="obj-4-1">

## Objective 4.1: Understand Network Security

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>เครือข่ายคอมพิวเตอร์เป็นช่องทางหลักในการสื่อสารข้อมูล แต่ก็เป็นช่องทางหลักที่ผู้ไม่หวังดีใช้ในการโจมตีระบบ การทำความเข้าใจโครงสร้างและโพรโทคอลพื้นฐานจึงเป็นหัวใจสำคัญของความมั่นคงปลอดภัย:</p>

<h3 id="topic-4-1-fundamentals-topologies">4.1.1 Network Fundamentals &amp; Topologies: พื้นฐานเครือข่ายและขอบเขต</h3>

**Computer Network (เครือข่ายคอมพิวเตอร์)** คือกลุ่มของอุปกรณ์คอมพิวเตอร์ (Nodes หรือ Hosts) สองเครื่องขึ้นไปที่เชื่อมต่อถึงกันผ่านสื่อกลางในการสื่อสาร (Transmission Media) ทั้งแบบใช้สาย (Wired เช่น สายทองแดง UTP, ใยแก้วนำแสง Fiber Optic) หรือไร้สาย (Wireless เช่น คลื่นวิทยุ Radio Frequencies) เพื่อวัตถุประสงค์ในการแลกเปลี่ยนข้อมูลและแบ่งปันทรัพยากรร่วมกัน

ขอบเขตทางภูมิศาสตร์ของระบบเครือข่าย (Network Scope):
- **LAN (Local Area Network):** เครือข่ายท้องถิ่นในขอบเขตจำกัด เช่น ภายในห้องทำงาน อาคารเดี่ยว หรือวิทยาเขตขนาดเล็ก มีความเร็วสูงและอัตราความผิดพลาดต่ำ
- **WAN (Wide Area Network):** เครือข่ายบริเวณกว้างที่เชื่อมต่อข้ามเมือง ประเทศ หรือข้ามทวีป โดยมีอินเทอร์เน็ต (Internet) เป็นตัวอย่างของ WAN ที่ใหญ่ที่สุดในโลก
- **WLAN (Wireless Local Area Network):** เครือข่ายท้องถิ่นแบบไร้สายตามมาตรฐาน IEEE 802.11 (Wi-Fi)
- **PAN (Personal Area Network):** เครือข่ายส่วนบุคคลระยะใกล้มาก (ประมาณ 10 เมตร) เช่น การเชื่อมต่อผ่าน Bluetooth ระหว่างสมาร์ตโฟนกับหูฟังไร้สาย
- **VPN (Virtual Private Network):** เครือข่ายเสมือนส่วนตัวที่สร้างช่องทางเข้ารหัสข้อมูล (Encrypted Tunnel) ผ่านเครือข่ายสาธารณะที่ไม่ปลอดภัยอย่างอินเทอร์เน็ต

การแบ่งขอบเขตการชนกันและการแพร่กระจายสัญญาณ (Collision &amp; Broadcast Domains):
- **Collision Domain (ขอบเขตการชนกันของสัญญาณ):** พื้นที่ทางตรรกะในเครือข่ายที่หากมีอุปกรณ์สองเครื่องส่งข้อมูลออกมาพร้อมกัน สัญญาณจะชนกัน (Collision) ทำให้อุปกรณ์อื่นต้องรอ อุปกรณ์อย่าง Hub สร้างเพียง 1 Collision Domain รวมกันทั้งหมด ในขณะที่ Switch แยกแต่ละพอร์ตออกเป็น 1 Collision Domain อิสระ
- **Broadcast Domain (ขอบเขตการแพร่สัญญาณ):** พื้นที่ในเครือข่ายที่เมื่ออุปกรณ์ส่งแพ็กเก็ตแบบ Broadcast (FF:FF:FF:FF:FF:FF หรือ x.x.x.255) อุปกรณ์ทุกตัวในขอบเขตนั้นจะได้รับข้อมูล Hub และ Switch ปกติไม่สามารถกั้น Broadcast Domain ได้ มีเพียง **Router** หรือการแบ่ง **VLAN** เท่านั้นที่สามารถแบ่งแยก Broadcast Domain ออกจากกัน

ขอบเขตการเข้าถึงทางสถาปัตยกรรม:
- **Intranet:** เครือข่ายภายในองค์กรที่จำกัดให้เข้าถึงได้เฉพาะพนักงานขององค์กรเท่านั้น
- **Extranet:** เครือข่ายภายในที่เปิดให้คู่ค้า พันธมิตรทางธุรกิจ หรือลูกค้าที่ได้รับอนุญาตสามารถเข้าถึงได้บางส่วนผ่านการยืนยันตัวตนที่ปลอดภัย
- **Internet:** เครือข่ายสาธารณะทั่วโลกที่เชื่อมต่อเครือข่ายนับล้านเข้าด้วยกัน และไม่มีหน่วยงานใดหน่วยงานหนึ่งเป็นเจ้าของแต่เพียงผู้เดียว

<h3 id="topic-4-1-osi-model">4.1.2 OSI 7-Layer Reference Model: แบบจำลองอ้างอิง 7 ชั้น</h3>

ในปี 1984 องค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) ได้กำหนดมาตรฐาน **OSI 7-Layer Reference Model (Open Systems Interconnection)** ขึ้น เพื่อเป็นกรอบแนวคิดเชิงตรรกะสำหรับการออกแบบและทำความเข้าใจกระบวนการสื่อสารระหว่างระบบคอมพิวเตอร์ที่หลากหลาย

หลักการจำลำดับชั้นของแบบจำลอง OSI จากชั้นล่างสุด (Layer 1) ไปสู่ชั้นบนสุด (Layer 7):
<span class="reading-math-formula">Please Do Not Throw Sausage Pizza Away (Layer 1 → Layer 7)</span>

รายละเอียดของแบบจำลองทั้ง 7 ชั้น:

1. **Layer 7 — Application Layer (ชั้นการประยุกต์):**
   - ทำหน้าที่เป็นจุดเชื่อมต่อระหว่างผู้ใช้งานหรือโปรแกรมประยุกต์กับบริการเครือข่าย
   - โพรโทคอลสำคัญ: HTTP, HTTPS, DNS, SSH, FTP, SFTP, SMTP, DHCP, Telnet
   - หน่วยข้อมูล (PDU): Data / Messages

2. **Layer 6 — Presentation Layer (ชั้นการนำเสนอข้อมูล):**
   - ทำหน้าที่จัดรูปแบบ แปลงรหัสข้อมูล (Data Formatting), การบีบอัดข้อมูล (Compression) และการเข้ารหัส/ถอดรหัสความปลอดภัย (Encryption / Decryption)
   - มาตรฐานสำคัญ: TLS/SSL, ASCII, Unicode, JSON, XML, JPEG, MP4
   - หน่วยข้อมูล (PDU): Data

3. **Layer 5 — Session Layer (ชั้นเซสชัน):**
   - ทำหน้าที่สร้าง (Establish), บริหารจัดการ (Maintain) และยกเลิกการเชื่อมต่อเซสชัน (Terminate) ระหว่างสองแอปพลิเคชัน
   - โพรโทคอลสำคัญ: RPC (Remote Procedure Call), NetBIOS, Sockets
   - หน่วยข้อมูล (PDU): Data

4. **Layer 4 — Transport Layer (ชั้นการขนส่งข้อมูล):**
   - ทำหน้าที่ส่งข้อมูลแบบจุดต่อจุดระหว่างโฮสต์ (Host-to-Host End-to-End Communication), ควบคุมการไหลของข้อมูล (Flow Control), ตรวจจับข้อผิดพลาด และกำหนดหมายเลขพอร์ต (Port Numbers)
   - โพรโทคอลสำคัญ: TCP (เน้นความน่าเชื่อถือ ตรวจสอบข้อมูล) และ UDP (เน้นความรวดเร็ว ไม่มีการจับมือ)
   - หน่วยข้อมูล (PDU): **Segment** (สำหรับ TCP) หรือ **Datagram** (สำหรับ UDP)

5. **Layer 3 — Network Layer (ชั้นเครือข่าย):**
   - ทำหน้าที่กำหนดหมายเลขที่อยู่เชิงตรรกะ (Logical IP Addressing) และเลือกเส้นทางการส่งข้อมูลข้ามเครือข่าย (Routing)
   - โพรโทคอลและอุปกรณ์: IPv4, IPv6, ICMP, IPsec, Routers, Layer 3 Switches
   - หน่วยข้อมูล (PDU): **Packet**

6. **Layer 2 — Data Link Layer (ชั้นเชื่อมโยงข้อมูล):**
   - ทำหน้าที่ควบคุมการเข้าถึงสื่อกลาง (Media Access Control: MAC), กำหนดหมายเลขที่อยู่ทางกายภาพ (Physical MAC Address), ตรวจจับข้อผิดพลาดในระดับเฟรม
   - โพรโทคอลและอุปกรณ์: Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), Switches, Bridges, Network Interface Cards (NIC)
   - แบ่งออกเป็น 2 ชั้นย่อย: LLC (Logical Link Control) และ MAC (Media Access Control)
   - หน่วยข้อมูล (PDU): **Frame**

7. **Layer 1 — Physical Layer (ชั้นกายภาพ):**
   - ทำหน้าที่แปลงข้อมูลดิจิทัลให้เป็นสัญญาณทางกายภาพ (ไฟฟ้า, แสง, คลื่นวิทยุ) เพื่อส่งผ่านตัวกลาง
   - อุปกรณ์และสื่อกลาง: สายทองแดง UTP (RJ45), ใยแก้วนำแสง (Fiber Optic), Hubs, Repeaters, เสาสัญญาณไร้สาย
   - หน่วยข้อมูล (PDU): **Bits** (0 และ 1)

กระบวนการห่อหุ้มและการแกะข้อมูล (Encapsulation &amp; Decapsulation):
- **Encapsulation (จากบนลงล่าง):** เมื่อส่งข้อมูล ข้อมูลดิบจากแอปพลิเคชัน (Data) จะถูกเติมส่วนหัว (Header) ในแต่ละชั้น: Data → Segments (เติม TCP/UDP Header ที่มี Port) → Packets (เติม IP Header ที่มี Source/Dest IP) → Frames (เติม MAC Header และ FCS Trailer) → Bits (แปลงเป็นสัญญาณไฟฟ้าส่งออกไป)
- **Decapsulation (จากล่างขึ้นบน):** เมื่อฝั่งรับได้รับสัญญาณ จะทำการถอดส่วนหัวออกทีละชั้นย้อนกลับขึ้นไปจนถึงระดับแอปพลิเคชัน

<h3 id="topic-4-1-tcp-ip-mapping">4.1.3 TCP/IP 4-Layer Architecture Mapping: แบบจำลอง TCP/IP ในทางปฏิบัติ</h3>

ในขณะที่แบบจำลอง OSI ถูกสร้างขึ้นเพื่อเป็นมาตรฐานอ้างอิงทางทฤษฎี เครือข่ายอินเทอร์เน็ตที่ใช้งานจริงทั่วโลกนั้นสร้างขึ้นบนสถาปัตยกรรมของกระทรวงกลาโหมสหรัฐฯ (DoD / DARPA) เรียกว่า **TCP/IP Model (Internet Protocol Suite)** ซึ่งยุบรวมชั้นสื่อสารเหลือเพียง 4 ชั้นหลัก

<div class="reading-semantic-diagram" data-diagram="osiVsTcpIpModel"></div>

ตารางเปรียบเทียบความสัมพันธ์ระหว่างแบบจำลอง OSI และ TCP/IP:

| <div class="reading-bilingual-term"><span class="reading-term-en">**OSI 7-Layer Model**</span><span class="reading-term-th">(แบบจำลองทางทฤษฎี)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**TCP/IP 4-Layer Model**</span><span class="reading-term-th">(สถาปัตยกรรมใช้งานจริง)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Data Unit (PDU)**</span><span class="reading-term-th">(หน่วยข้อมูล)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Key Protocols**</span><span class="reading-term-th">(โพรโทคอลหลัก)</span></div> |
| :--- | :--- | :--- | :--- |
| **Layer 7: Application**<br>**Layer 6: Presentation**<br>**Layer 5: Session** | **Application Layer (L4)** | Data / Messages | HTTP, HTTPS, DNS, SSH, FTP, SMTP, DHCP |
| **Layer 4: Transport** | **Transport Layer (L3)** | Segment / Datagram | TCP, UDP |
| **Layer 3: Network** | **Internet Layer (L2)** | Packet | IPv4, IPv6, ICMP, IPsec, ARP |
| **Layer 2: Data Link**<br>**Layer 1: Physical** | **Network Access / Link Layer (L1)** | Frame / Bits | Ethernet, 802.11 Wi-Fi, MAC, สื่อทางกายภาพ |

<h3 id="topic-4-1-ipv4-cidr-nat">4.1.4 IPv4 Addressing, Subnetting, Classes &amp; NAT: ระบบหมายเลขไอพีเวอร์ชัน 4</h3>

**IPv4 (Internet Protocol version 4)** เป็นระบบระบุตำแหน่งเชิงตรรกะขนาด 32 บิต แบ่งออกเป็น 4 ส่วนย่อยเรียกว่า อ็อกเท็ต (Octets) โดยแต่ละอ็อกเท็ตมีขนาด 8 บิต เขียนคั่นด้วยจุดในรูปแบบตัวเลขฐานสิบ (Dotted-Decimal Notation เช่น 192.168.1.1) ทำให้มีหมายเลขไอพีทั้งหมด 2<sup>32</sup> หรือประมาณ 4.3 พันล้านหมายเลข

โครงสร้างของหมายเลขไอพีแบ่งออกเป็น 2 ส่วนหลักเสมอ:
- **Network ID:** ระบุว่าอุปกรณ์อยู่ในเครือข่ายย่อย (Subnet) ใด
- **Host ID:** ระบุตัวตนเฉพาะของเครื่องอุปกรณ์ภายในเครือข่ายย่อยนั้น

การจัดหมวดหมู่ไอพีแบบคลาส (Classful Addressing):
- **Class A:** 1.0.0.0 – 126.255.255.255 (Default Subnet Mask: 255.0.0.0 หรือ /8) — สำหรับองค์กรขนาดใหญ่มาก
- **Class B:** 128.0.0.0 – 191.255.255.255 (Default Subnet Mask: 255.255.0.0 หรือ /16) — สำหรับองค์กรขนาดกลาง
- **Class C:** 192.0.0.0 – 223.255.255.255 (Default Subnet Mask: 255.255.255.0 หรือ /24) — สำหรับเครือข่ายขนาดเล็ก
- **Class D:** 224.0.0.0 – 239.255.255.255 — สงวนไว้สำหรับการส่งข้อมูลแบบกลุ่มเฉพาะ (Multicast)
- **Class E:** 240.0.0.0 – 255.255.255.255 — สงวนไว้สำหรับการทดลองและการวิจัย (Experimental)
- *หมายเหตุ:* ช่วง 127.0.0.0/8 ถูกสงวนไว้สำหรับการทดสอบย้อนกลับภายในเครื่อง (Loopback Testing) โดยมี 127.0.0.1 หมายถึง Localhost

ช่วงหมายเลขไอพีส่วนตัวตามมาตรฐาน RFC 1918 (Private IP Addresses):
หมายเลขเหล่านี้ไม่สามารถนำไปใช้งานหรือจัดเส้นทางบนอินเทอร์เน็ตสาธารณะได้โดยตรง และสงวนไว้ใช้งานภายในองค์กร:
- **Class A Private:** 10.0.0.0 – 10.255.255.255 (ช่วง 10.0.0.0/8)
- **Class B Private:** 172.16.0.0 – 172.31.255.255 (ช่วง 172.16.0.0/12)
- **Class C Private:** 192.168.0.0 – 192.168.255.255 (ช่วง 192.168.0.0/16)
- **APIPA (Automatic Private IP Addressing):** 169.254.0.0 – 169.254.255.255 (ช่วง 169.254.0.0/16) ระบบปฏิบัติการจะจ่ายให้ตัวเองอัตโนมัติเมื่อไม่สามารถติดต่อขอไอพีจาก DHCP Server ได้

**CIDR (Classless Inter-Domain Routing):**
เพื่อแก้ปัญหาการสูญเสียหมายเลขไอพีในระบบคลาส จึงมีการใช้เครื่องหมายทับระบุจำนวนบิตของเน็ตเวิร์ก (Slash Notation) เช่น /24 หมายถึงมี Subnet Mask เป็น 255.255.255.0 มีบิตของโฮสต์เหลือ 8 บิต รองรับหมายเลขไอพีได้ 2<sup>8</sup> = 256 หมายเลข (ใช้งานได้จริง 254 โฮสต์ เนื่องจากหัก Network Address และ Broadcast Address ออกไป)

**NAT (Network Address Translation):**
กระบวนการแปลงหมายเลข Private IP ของอุปกรณ์ภายในเครือข่ายให้เป็น Public IP เพียงหนึ่งหรือสองหมายเลขเมื่อส่งข้อมูลออกสู่อินเทอร์เน็ต โดยรูปแบบที่นิยมที่สุดคือ **PAT (Port Address Translation หรือ NAT Overload)** ซึ่งใช้พอร์ตในการแยกแยะทราฟฟิกของแต่ละเครื่อง

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>จุดสังเกตสำหรับห้องสอบ: NAT ไม่ใช่ระบบเข้ารหัส</span>
  </div>
  <p>แม้ว่า NAT จะช่วยซ่อนโครงสร้างหมายเลขไอพีภายในองค์กร (Topology Hiding) แต่ <strong>NAT ไม่ใช่ระบบรักษาความปลอดภัย ไม่ใช่ระบบเข้ารหัสข้อมูล และไม่สามารถทดแทนไฟร์วอลล์ได้</strong> ข้อมูลที่ส่งผ่าน NAT ยังคงเดินทางในรูปแบบ Plaintext เว้นแต่จะมีการเข้ารหัสด้วย TLS หรือ IPsec เสริม</p>
</div>

<h3 id="topic-4-1-ipv6-architecture">4.1.5 IPv6 Architecture, SLAAC &amp; Dual-Stack: การขยายขีดความสามารถสู่ IPv6</h3>

เนื่องจากหมายเลข IPv4 มีจำกัดและหมดลงแล้ว จึงมีการพัฒนา **IPv6 (Internet Protocol version 6)** ขึ้นมา โดยมีขนาดความยาวถึง **128 บิต** เขียนแทนด้วยเลขฐานสิบหก (Hexadecimal) แบ่งเป็น 8 กลุ่ม กลุ่มละ 16 บิต คั่นด้วยเครื่องหมายโคลอน (Colon เช่น `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)

คุณลักษณะเด่นของ IPv6:
- **มหาศาล:** มีหมายเลขรองรับถึง 2<sup>128</sup> หรือราว 3.4 &times; 10<sup>38</sup> หมายเลข ทำให้ทุกอุปกรณ์บนโลกสามารถมี Public IP ได้โดยไม่ต้องพึ่งพา NAT
- **ความปลอดภัยในตัว:** รองรับมาตรฐานความมั่นคงปลอดภัย **IPsec (IP Security)** ในระดับสถาปัตยกรรมมาตั้งแต่ต้น
- **ยกเลิก Broadcast:** แทนที่ด้วย **Multicast** (ส่งถึงกลุ่มเฉพาะ) และ **Anycast** (ส่งไปยังเครื่องที่ใกล้ที่สุดในกลุ่ม) ช่วยลดสัญญาณรบกวนในเครือข่ายได้อย่างมหาศาล
- **SLAAC (Stateless Address Autoconfiguration):** อุปกรณ์สามารถกำหนดหมายเลขไอพีให้ตัวเองได้อัตโนมัติ โดยส่งคำขอไปยังเราเตอร์ (Router Solicitation) และนำ Prefix ที่ได้มารวมกับ MAC Address ของตนเองโดยไม่ต้องพึ่งพา DHCP Server เสมอไป

กลยุทธ์การเปลี่ยนผ่านจาก IPv4 สู่ IPv6 (Transition Strategies):
1. **Dual-Stack:** อุปกรณ์และเราเตอร์เปิดใช้งานโพรโทคอล IPv4 และ IPv6 ควบคู่กันไปพร้อมกันในระดับการ์ดเครือข่ายและระบบปฏิบัติการ เป็นแนวทางที่แนะนำที่สุด
2. **Tunneling:** การนำแพ็กเก็ต IPv6 มาห่อหุ้มไว้ในแพ็กเก็ต IPv4 เพื่อส่งผ่านเครือข่ายที่ยังรองรับเพียง IPv4 เช่น 6to4 หรือ Teredo
3. **Translation (NAT64 / DNS64):** การแปลงแพ็กเก็ตข้ามไปมาระหว่างอุปกรณ์ที่เป็น IPv6 ล้วนกับบริการที่เป็น IPv4 ล้วน

<h3 id="topic-4-1-tcp-vs-udp">4.1.6 Transport Layer Protocols (TCP vs. UDP): โพรโทคอลในระดับการขนส่ง</h3>

ในระดับ Transport Layer มี 2 โพรโทคอลหลักที่ทำหน้าที่แตกต่างกันอย่างสิ้นเชิง:

1. **TCP (Transmission Control Protocol):**
   - **Connection-Oriented:** ต้องสร้างการเชื่อมต่อก่อนเริ่มส่งข้อมูลเสมอ ผ่านกระบวนการจับมือ 3 ขั้นตอน (**3-Way Handshake: SYN → SYN-ACK → ACK**)
   - **Reliable Delivery:** รับประกันความสมบูรณ์ของข้อมูล มีการตรวจสอบลำดับแพ็กเก็ต (Sequencing) และมีการส่งซ้ำหากข้อมูลสูญหาย (Retransmission)
   - **Flow &amp; Congestion Control:** มีกลไกปรับความเร็วในการส่งข้อมูลเพื่อป้องกันไม่ให้ฝั่งรับล้น (Sliding Window)
   - เหมาะสำหรับงานที่ห้ามข้อมูลผิดพลาดหรือสูญหาย: Web Browsing (HTTP/HTTPS), File Transfer (FTP/SFTP), Remote Terminal (SSH), อีเมล (SMTP/IMAP)

2. **UDP (User Datagram Protocol):**
   - **Connectionless:** ไม่มีการสร้างการเชื่อมต่อล่วงหน้า ไม่มีการจับมือ (No Handshake) สามารถส่งข้อมูลออกไปได้ทันที
   - **Unreliable / Best-Effort:** ไม่รับประกันว่าข้อมูลจะถึงปลายทางหรือไม่ ไม่มีการเรียงลำดับใหม่ และไม่มีการส่งซ้ำ
   - **Low Overhead &amp; High Speed:** ขนาด Header สั้นมาก (เพียง 8 ไบต์ เมื่อเทียบกับ 20 ไบต์ของ TCP) ทำให้ประมวลผลได้รวดเร็วมาก
   - เหมาะสำหรับงานที่ต้องการความเร็วแบบเรียลไทม์ และยอมรับการสูญเสียข้อมูลบางส่วนได้: Video/Audio Streaming, การโทรผ่านอินเทอร์เน็ต (VoIP), เกมออนไลน์, บริการค้นหาชื่อโดเมน (DNS Queries), การแจกไอพี (DHCP), และการตรวจสอบสถานะ (SNMP)

ตารางเปรียบเทียบเชิงลึก TCP vs. UDP:

| <div class="reading-bilingual-term"><span class="reading-term-en">**Feature**</span><span class="reading-term-th">(คุณลักษณะ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**TCP**</span><span class="reading-term-th">(Transmission Control Protocol)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**UDP**</span><span class="reading-term-th">(User Datagram Protocol)</span></div> |
| :--- | :--- | :--- |
| **Connection State** | Connection-Oriented (ต้องเชื่อมต่อก่อน) | Connectionless (ส่งข้อมูลได้ทันที) |
| **Handshake** | 3-Way Handshake (SYN, SYN-ACK, ACK) | ไม่มีกระบวนการ Handshake |
| **Data Reliability** | สูง รับประกันข้อมูลครบถ้วน มีการส่งซ้ำ | ต่ำ แบบ Best-Effort ไม่มีการส่งซ้ำ |
| **Header Size** | 20–60 Bytes (ซับซ้อน มีการควบคุม) | 8 Bytes คงที่ (เรียบง่าย น้ำหนักเบา) |
| **Speed &amp; Latency** | ช้ากว่า มีภาระในการตรวจสอบ | รวดเร็ว มีค่าหน่วงเวลา (Latency) ต่ำ |
| **Typical Use Cases** | เว็บ, อีเมล, การโอนย้ายไฟล์, ฐานข้อมูล | วิดีโอสตรีมมิง, VoIP, DNS, DHCP, เกมออนไลน์ |

<h3 id="topic-4-1-ports-multiplexing">4.1.7 Network Ports, Multiplexing &amp; Core Services: พอร์ตและการระบุบริการ</h3>

**Port Number (หมายเลขพอร์ต)** คือตัวเลขขนาด 16 บิต (มีค่าตั้งแต่ 0 ถึง 65,535) ที่ใช้ระบุกระบวนการทำงานหรือบริการแอปพลิเคชันเฉพาะเจาะจงบนระบบปฏิบัติการ

แนวคิดของ **Socket (ซ็อกเก็ต):**
การจับคู่ระหว่าง `IP Address + Port Number` (เช่น `192.168.1.50:443`) ทำให้คอมพิวเตอร์เครื่องเดียวสามารถเปิดใช้งานหลายโปรแกรมพร้อมกันได้ผ่านการส่งสัญญาณสลับแบบ **Multiplexing**

การแบ่งช่วงของหมายเลขพอร์ต (IANA Classification):
- **Well-Known Ports (0 – 1,023):** สงวนไว้สำหรับบริการหลักของระบบและโพรโทคอลมาตรฐานสากล
- **Registered Ports (1,024 – 49,151):** พอร์ตที่บริษัทหรือผู้พัฒนาซอฟต์แวร์สามารถลงทะเบียนใช้งานเฉพาะ
- **Dynamic / Private / Ephemeral Ports (49,152 – 65,535):** พอร์ตชั่วคราวที่ระบบปฏิบัติการกำหนดให้กับฝั่งเครื่องลูกข่าย (Client) เมื่อส่งคำขอออกไป

ตารางหมายเลขพอร์ตสำคัญที่พบบ่อยในข้อสอบ ISC2 CC:

| <div class="reading-bilingual-term"><span class="reading-term-en">**Port Number**</span><span class="reading-term-th">(หมายเลขพอร์ต)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Protocol Name**</span><span class="reading-term-th">(ชื่อโพรโทคอล)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Transport**</span><span class="reading-term-th">(ระดับการขนส่ง)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Security Evaluation**</span><span class="reading-term-th">(ความปลอดภัยและการใช้งาน)</span></div> |
| :--- | :--- | :--- | :--- |
| **20 / 21** | FTP (File Transfer Protocol) | TCP | **Insecure** ส่งข้อมูลและรหัสผ่านเป็นข้อความธรรมดา (Plaintext) |
| **22** | SSH / SFTP | TCP | **Secure** เข้ารหัสข้อมูลทั้งหมด ใช้แทน Telnet และ FTP |
| **23** | Telnet | TCP | **Insecure** ข้อความธรรมดา ห้ามใช้งานในเครือข่ายปัจจุบัน |
| **25** | SMTP (Simple Mail Transfer) | TCP | รับส่งอีเมลระหว่างเซิร์ฟเวอร์ โดยเริ่มต้นเป็น Plaintext |
| **53** | DNS (Domain Name System) | UDP / TCP | แปลงชื่อโฮสต์เป็นไอพี (UDP สำหรับคำขอทั่วไป, TCP สำหรับ Zone Transfer) |
| **67 / 68** | DHCP (Dynamic Host Config) | UDP | เซิร์ฟเวอร์ (67) และเครื่องลูกข่าย (68) ในการขอรับไอพีอัตโนมัติ |
| **80** | HTTP (Hypertext Transfer) | TCP | **Insecure** เว็บไซต์ที่ไม่มีการเข้ารหัสข้อมูล |
| **110** | POP3 (Post Office Protocol 3) | TCP | **Insecure** ดาวน์โหลดอีเมลลงเครื่องลูกข่าย |
| **143** | IMAP (Internet Message Access) | TCP | **Insecure** ซิงค์อีเมลบนเซิร์ฟเวอร์ |
| **443** | HTTPS (HTTP Secure) | TCP | **Secure** เว็บไซต์ที่มีการเข้ารหัสผ่าน TLS/SSL |
| **990** | FTPS (FTP over TLS) | TCP | **Secure** การส่งไฟล์ FTP ภายใต้การเข้ารหัส TLS |
| **993** | IMAPS | TCP | **Secure** การเข้าถึงอีเมลผ่านการเข้ารหัส TLS |
| **995** | POP3S | TCP | **Secure** การดึงอีเมลผ่านการเข้ารหัส TLS |
| **161 / 162** | SNMP (Network Management) | UDP | จัดการและตรวจสอบอุปกรณ์เครือข่าย (เวอร์ชัน 3 เท่านั้นที่รองรับการเข้ารหัส) |
| **3389** | RDP (Remote Desktop Protocol) | TCP | รีโมตควบคุมหน้าจอ Windows จากระยะไกล |

<h3 id="topic-4-1-network-devices">4.1.8 Network Devices &amp; Security Filtering: อุปกรณ์เครือข่ายและการกรองข้อมูล</h3>

อุปกรณ์ในระบบเครือข่ายทำหน้าที่ในระดับชั้นของแบบจำลอง OSI ที่แตกต่างกัน และมีบทบาทต่อความมั่นคงปลอดภัยไม่เท่ากัน:

1. **Hub (Layer 1):**
   - อุปกรณ์ทวนสัญญาณแบบหลายพอร์ต เมื่อได้รับสัญญาณจากพอร์ตหนึ่งจะส่งกระจาย (Broadcast / Flood) ออกไปยังทุกพอร์ตที่เหลือ
   - เป็น 1 Collision Domain รวมกันทั้งหมด และเป็น 1 Broadcast Domain
   - **ความเสี่ยง:** มีความปลอดภัยต่ำมาก เครื่องใดก็ตามที่ต่อเข้ากับ Hub สามารถดักจับแพ็กเก็ต (Packet Sniffing) ของเครื่องอื่นได้ทั้งหมด

2. **Switch (Layer 2):**
   - อุปกรณ์สลับสัญญาณที่ชาญฉลาด ทำงานโดยการเรียนรู้และจดจำหมายเลขกายภาพลงใน **MAC Address Table (CAM Table)**
   - แยกแต่ละพอร์ตออกเป็น 1 Collision Domain อิสระ ช่วยเพิ่มประสิทธิภาพและป้องกันการดักรับข้อมูลระหว่างเครื่องได้ดีกว่า Hub
   - **ความเสี่ยง:** อาจถูกโจมตีด้วยเทคนิค **MAC Flooding** (ส่ง MAC ปลอมจำนวนมากจนตารางเต็ม ทำให้สวิตช์ลดระดับตัวเองลงไปทำงานคล้าย Hub) หรือ **ARP Spoofing**

3. **Router (Layer 3):**
   - อุปกรณ์กำหนดเส้นทางการส่งแพ็กเก็ตระหว่างเครือข่ายย่อยที่ต่างกัน โดยพิจารณาจาก IP Address และ Routing Table
   - ทำหน้าที่แบ่งแยก **Broadcast Domain** ออกจากกันโดยเด็ดขาด ทำให้การแพร่สัญญาณไม่ล้นข้ามเครือข่าย
   - มักรองรับการสร้างกฎกรองข้อมูลเบื้องต้นผ่าน **Access Control Lists (ACLs)**

4. **Firewall (ไฟร์วอลล์):**
   - อุปกรณ์หรือซอฟต์แวร์ที่ทำหน้าที่เป็นปราการควบคุมการเข้าออกของทราฟฟิกระหว่างเครือข่ายที่มีระดับความเชื่อถือต่างกัน
   - **Packet Filtering Firewall (Stateless):** ตรวจสอบเฉพาะ Source/Dest IP และ Port แต่ละแพ็กเก็ตอย่างอิสระ ไม่จดจำสถานะการเชื่อมต่อ
   - **Stateful Inspection Firewall:** ตรวจสอบและบันทึกสถานะการเชื่อมต่อ (State Table) เช่น หากเป็นการตอบกลับของเซสชันที่เครื่องภายในเริ่มเปิดก่อน จะอนุญาตให้ผ่านได้โดยอัตโนมัติ
   - **Next-Generation Firewall (NGFW):** ไฟร์วอลล์ยุคใหม่ที่ทำงานลึกถึง Layer 7 มีการตรวจสอบแพ็กเก็ตเชิงลึก (Deep Packet Inspection: DPI), ตรวจสอบตัวตนแอปพลิเคชัน (Application Awareness), มีระบบ IPS ฝังในตัว และสามารถถอดรหัส SSL/TLS เพื่อตรวจหามัลแวร์ได้

5. **IDS vs. IPS:**
   - **IDS (Intrusion Detection System):** ทำงานแบบตรวจจับและแจ้งเตือน เชื่อมต่อแบบขนาน (Out-of-band หรือ Tap/SPAN Port) ตรวจพบพฤติกรรมผิดปกติแล้วส่ง Alert หรือ Log ไปยังผู้ดูแล แต่ไม่สามารถสกัดกั้นหรือหยุดยั้งการโจมตีได้ด้วยตัวเอง
   - **IPS (Intrusion Prevention System):** ทำงานแบบสกัดกั้นเชิงรุก เชื่อมต่อแบบขวางทางเดินข้อมูลโดยตรง (In-line) เมื่อตรวจพบภัยคุกคาม จะทำการตัดการเชื่อมต่อ (Reset TCP) หรือทิ้งแพ็กเก็ต (Drop Packet) ทันทีเพื่อปกป้องระบบ

6. **Proxy Server (พร็อกซีเซิร์ฟเวอร์):**
   - **Forward Proxy:** ทำหน้าที่เป็นตัวแทนของเครื่องลูกข่ายภายในในการออกสู่อินเทอร์เน็ตภายนอก ช่วยซ่อนไอพีภายใน กรองเนื้อหาเว็บไซต์ (Content Filtering) และแคชข้อมูล
   - **Reverse Proxy:** ทำหน้าที่เป็นตัวแทนของเซิร์ฟเวอร์ภายในในการรับคำขอจากผู้ใช้บนอินเทอร์เน็ต ช่วยกระจายโหลด (Load Balancing), บีบอัดข้อมูล, และทำหน้าที่ถอดรหัส SSL (SSL Offloading)

<h3 id="topic-4-1-wireless-security">4.1.9 Wireless Security: Wi-Fi, Bluetooth &amp; VPN: ความมั่นคงปลอดภัยไร้สาย</h3>

ระบบเครือข่ายไร้สายส่งผ่านข้อมูลผ่านคลื่นวิทยุในที่โล่ง ทำให้ผู้โจมตีสามารถดักรับสัญญาณได้จากระยะไกลโดยไม่ต้องเข้าถึงสายสัญญาณทางกายภาพ

มาตรฐานเครือข่ายไร้สาย IEEE 802.11:
- ย่านความถี่ **2.4 GHz:** ส่งสัญญาณได้ไกล ทะลุสิ่งกีดขวางได้ดี แต่มีช่องสัญญาณน้อย (Channels 1, 6, 11 เท่านั้นที่ไม่ทับซ้อนกัน) และมีสัญญาณรบกวนสูง
- ย่านความถี่ **5 GHz:** อัตราการรับส่งข้อมูลเร็วกว่า มีช่องสัญญาณมากกว่า แต่ระยะทางส่งสั้นกว่าและทะลุสิ่งกีดขวางได้น้อยกว่า
- ยุคสมัยของมาตรฐาน: 802.11b (11 Mbps) → 802.11g (54 Mbps) → 802.11n (Wi-Fi 4) → 802.11ac (Wi-Fi 5) → 802.11ax (Wi-Fi 6)

วิวัฒนาการของการเข้ารหัสความปลอดภัย Wi-Fi:
1. **WEP (Wired Equivalent Privacy):**
   - ใช้งานรหัสลับ RC4 ร่วมกับค่า Initialization Vector (IV) ขนาดสั้นเพียง 24 บิต ซึ่งส่งแบบไม่เข้ารหัส
   - มีข้อบกพร่องทางคณิตศาสตร์ร้ายแรง สามารถถูกถอดรหัสได้ภายในเวลาไม่กี่นาที **ห้ามใช้งานโดยเด็ดขาด**
2. **WPA (Wi-Fi Protected Access):**
   - พัฒนาขึ้นเป็นมาตรการชั่วคราวเพื่ออุดช่องโหว่ของ WEP โดยนำโปรโตคอล TKIP (Temporal Key Integrity Protocol) มาใช้
   - ถูกยกเลิกและจัดว่าล้าสมัยแล้ว
3. **WPA2 (IEEE 802.11i):**
   - นำมาตรฐานการเข้ารหัสขั้นสูง **AES (Advanced Encryption Standard)** ร่วมกับ **CCMP** (Counter Mode Cipher Block Chaining Message Authentication Code Protocol)
   - เป็นมาตรฐานหลักที่ใช้งานแพร่หลาย มี 2 โหมด: Personal (WPA2-PSK ใช้รหัสผ่านร่วม) และ Enterprise (WPA2-Enterprise ยืนยันตัวตนรายบุคคลผ่าน RADIUS / 802.1X)
4. **WPA3:**
   - มาตรฐานความปลอดภัยสูงสุดในปัจจุบัน
   - ในโหมด Personal ใช้กระบวนการ **SAE (Simultaneous Authentication of Equals)** ป้องกันการโจมตีแบบสุ่มรหัสผ่านออฟไลน์ (Offline Dictionary Attacks) และมีคุณสมบัติ Forward Secrecy
   - ในโหมด Enterprise รองรับการเข้ารหัสความปลอดภัยสูงระดับ 192 บิต

<div class="reading-callout warning">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
    <span>กับดักข้อสอบ: ความเชื่อผิด ๆ ด้านความปลอดภัย Wi-Fi</span>
  </div>
  <p>สองสิ่งต่อไปนี้ <strong>ไม่ใช่มาตรการรักษาความปลอดภัยที่แท้จริง</strong>:<br>
  1. <strong>MAC Address Filtering:</strong> ผู้โจมตีสามารถดักจับสัญญาณเพื่อดูหมายเลข MAC ของเครื่องที่ได้รับอนุญาต และทำการปลอมแปลง (Spoofing) ได้อย่างง่ายดาย<br>
  2. <strong>Disable SSID Broadcast (ซ่อนชื่อ Wi-Fi):</strong> การซ่อน SSID ไม่ได้ช่วยอะไร เพราะชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ</p>
</div>

ความปลอดภัยของระบบ Bluetooth:
- เครือข่ายไร้สายระยะสั้น (PAN) มาตรฐาน IEEE 802.15.1
- **Bluejacking:** การส่งข้อความหรือนามบัตรที่ไม่พึงประสงค์ไปยังอุปกรณ์ที่เปิดบลูทูธไว้โดยไม่ได้รับอนุญาต (ก่อความรำคาญ ไม่ทำให้ข้อมูลรั่วไหล)
- **Bluesnarfing:** การเข้าถึงและขโมยข้อมูลลับจากอุปกรณ์ เช่น รายชื่อผู้ติดต่อ รูปภาพ หรือข้อความ
- **Bluebugging:** การเข้ายึดครองสิทธิ์ควบคุมอุปกรณ์เพื่อสั่งโทรออก ส่งข้อความ หรือดักฟังการสนทนา

เทคโนโลยี VPN (Virtual Private Network):
- **Remote Access VPN:** พนักงานเชื่อมต่อจากภายนอก (Work from Home) ผ่านโปรแกรม Client เข้าสู่เครือข่ายสำนักงาน
- **Site-to-Site VPN:** เชื่อมต่อเครือข่ายของสาขาสองแห่งเข้าด้วยกันอย่างถาวรผ่านเราเตอร์หรือไฟร์วอลล์
- **IPsec (Internet Protocol Security):** โปรโตคอลเข้ารหัสระดับ Layer 3 ประกอบด้วย 2 โปรโตคอลย่อย:
  - **AH (Authentication Header):** ตรวจสอบความถูกต้องและบูรณภาพของข้อมูล (Integrity &amp; Authentication) แต่ *ไม่เข้ารหัสข้อมูล* (No Confidentiality)
  - **ESP (Encapsulating Security Payload):** ให้ทั้งการเข้ารหัสข้อมูล (Confidentiality) และการตรวจสอบบูรณภาพ (Integrity) จึงเป็นที่นิยมใช้งานมากที่สุด

<h3 id="topic-4-1-network-threats-iot">4.1.10 Network Threats, Embedded Systems &amp; IoT Security: ภัยคุกคามและอุปกรณ์อัจฉริยะ</h3>

การจำแนกประเภทภัยคุกคามบนระบบเครือข่าย:
- **DoS / DDoS (Denial of Service):** การโจมตีเพื่อทำให้บริการหรือระบบไม่สามารถใช้งานได้ DoS มาจากแหล่งเดียว แต่ **DDoS (Distributed DoS)** เป็นการระดมโจมตีพร้อมกันจากเครือข่ายเครื่องที่ติดมัลแวร์นับหมื่นนับล้านเครื่องทั่วโลก (**Botnet**) ภายใต้การสั่งการของ **Botmaster / C2 Server**
- **Man-in-the-Middle (MITM):** ผู้โจมตีแทรกตัวอยู่ระหว่างกลางของการสื่อสาร เพื่อดักรับหรือเปลี่ยนแปลงข้อมูล เช่น ผ่านการทำ ARP Poisoning หรือ Rogue DHCP Server
- **Spoofing (การปลอมแปลง):** การปลอมแปลงตัวตน เช่น IP Spoofing (ปลอมไอพีต้นทาง), MAC Spoofing, หรือ Email Spoofing
- **Sniffing (การดักฟังข้อมูล):** การใช้เครื่องมืออย่าง Wireshark เพื่อดักจับแพ็กเก็ตที่วิ่งผ่านเครือข่าย หากไม่มีการเข้ารหัส ข้อมูลความลับจะถูกอ่านได้ทันที
- **Lateral Movement (การเคลื่อนที่ในแนวราบ):** เมื่อผู้โจมตีเจาะระบบเครื่องแรกสำเร็จ (เช่น เครื่องคอมพิวเตอร์พนักงานต้อนรับ) จะใช้เครื่องดังกล่าวเป็นฐานในการสแกนหาช่องโหว่และขยายขอบเขตการควบคุมไปยังเซิร์ฟเวอร์เครื่องอื่นในเครือข่าย

ความมั่นคงปลอดภัยของระบบฝังตัว (Embedded Systems) และระบบควบคุมทางอุตสาหกรรม (OT / ICS / SCADA):
- **ความแตกต่างสำคัญ:** ในขณะที่ระบบสารสนเทศทั่วไป (IT) ให้ความสำคัญสูงสุดกับความลับ (Confidentiality) แต่ระบบอุตสาหกรรม (OT/ICS) ให้ความสำคัญสูงสุดกับ **ความพร้อมใช้งาน (Availability) และความปลอดภัยต่อชีวิตมนุษย์ (Safety)**
- **ข้อจำกัด:** มักเป็นระบบเก่า (Legacy Systems) ที่ทำงานแบบ Real-time ไม่สามารถหยุดการทำงานเพื่อรีบูตหรือติดตั้งแพตช์ได้ง่าย และโพรโทคอลสื่อสารมักไม่มีระบบยืนยันตัวตนในตัว (เช่น Modbus, BACnet)

ความเปราะบางของอุปกรณ์ IoT (Internet of Things):
- อุปกรณ์ขนาดเล็กที่มีเซ็นเซอร์และเชื่อมต่ออินเทอร์เน็ตได้ เช่น กล้องวงจรปิดอัจฉริยะ หลอดไฟอัจฉริยะ หรือเราเตอร์ตามบ้าน
- จุดอ่อนสำคัญ: มักตั้งรหัสผ่านเริ่มต้นมาจากโรงงาน (Default Credentials เช่น admin/admin), ไม่มีหน้าต่างอัปเดตเฟิร์มแวร์, และมักถูกผู้โจมตีแฮกเพื่อนำไปเป็นส่วนหนึ่งของเครือข่าย Botnet (เช่น Mirai Botnet)
- **แนวทางป้องกันที่ดีที่สุด:** ต้องทำการ **แยกอุปกรณ์ IoT และ OT ออกไปไว้ใน VLAN หรือ Network Segment เฉพาะ** และควบคุมการสื่อสารผ่านไฟร์วอลล์อย่างเข้มงวด

</section>

<section class="reading-objective-section" id="obj-4-2">

## Objective 4.2: Understand Network Security Architecture

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>สถาปัตยกรรมความมั่นคงปลอดภัยเครือข่ายคือการวางโครงสร้างและกำหนดเขตแดนเพื่อควบคุมการไหลเวียนของข้อมูล ป้องกันไม่ให้ภัยคุกคามลุกลามเมื่อเกิดการบุกรุก:</p>

<h3 id="topic-4-2-segmentation-blast-radius">4.2.1 Network Segmentation &amp; Blast Radius Reduction: การแบ่งส่วนเครือข่าย</h3>

**Flat Network (เครือข่ายแบบราบเรียบ):**
คือเครือข่ายที่อุปกรณ์ทุกเครื่องเชื่อมต่อถึงกันโดยตรงโดยไม่มีการกั้นส่วน หากเครื่องใดเครื่องหนึ่งติดมัลแวร์หรือถูกแฮก ผู้โจมตีจะสามารถเข้าถึงเครื่องอื่น ๆ ในเครือข่ายได้ทันที

**Network Segmentation (การแบ่งส่วนเครือข่าย):**
คือแนวปฏิบัติในการแบ่งเครือข่ายขนาดใหญ่ออกเป็นเครือข่ายย่อย ๆ (Subnetworks หรือ Segments) ที่แยกจากกันในเชิงตรรกะหรือทางกายภาพ และบังคับใช้การควบคุมทราฟฟิกข้ามเขตด้วยไฟร์วอลล์หรือ Access Control Lists (ACLs)

ประโยชน์หลักของการแบ่งส่วนเครือข่าย:
1. **Reduce Blast Radius (จำกัดรัศมีความเสียหาย):** เมื่อเกิดเหตุการณ์ความมั่นคงปลอดภัย ความเสียหายจะถูกจำกัดอยู่เฉพาะภายในเซกเมนต์นั้น ๆ ไม่ลุกลามไปยังระบบอื่น
2. **Prevent Lateral Movement (หยุดยั้งการเคลื่อนที่ในแนวราบ):** ผู้โจมตีไม่สามารถสแกนหรือส่งมัลแวร์ข้ามไปยังเซิร์ฟเวอร์สำคัญได้โดยตรง
3. **Traffic Isolation &amp; Performance:** ลดปริมาณการแพร่กระจายของ Broadcast ทำให้เครือข่ายมีประสิทธิภาพสูงขึ้น
4. **Compliance &amp; Audit Scope:** ช่วยลดขอบเขตการตรวจสอบมาตรฐานความปลอดภัย (เช่น PCI DSS สำหรับข้อมูลบัตรเครดิต) โดยจำกัดให้ตรวจเฉพาะเซกเมนต์ที่เกี่ยวข้องเท่านั้น

<h3 id="topic-4-2-firewall-zones">4.2.2 Firewall Security Zones &amp; Trust Boundaries: เขตความปลอดภัยและขอบเขตความเชื่อถือ</h3>

ในการออกแบบความมั่นคงปลอดภัยเครือข่าย ไฟร์วอลล์จะแบ่งเครือข่ายออกเป็นโซนความปลอดภัย (Security Zones) โดยกำหนดระดับความเชื่อถือ (Trust Levels) ที่แตกต่างกัน:

- **Untrusted Zone (Outside):** โซนภายนอกที่ไม่มีความน่าเชื่อถือ เช่น เครือข่ายอินเทอร์เน็ตสาธารณะ
- **DMZ (Demilitarized Zone):** โซนกันชนที่มีระดับความน่าเชื่อถือจำกัด (Limited Trust) สำหรับวางระบบที่เปิดให้บริการแก่สาธารณะ
- **Trusted Zone (Inside):** โซนเครือข่ายภายในองค์กรที่มีความน่าเชื่อถือสูง เช่น เครื่องคอมพิวเตอร์พนักงานและเซิร์ฟเวอร์สำนักงาน
- **Restricted / Management Zone:** โซนความมั่นคงปลอดภัยสูงสุดที่มีการควบคุมเข้มงวดที่สุด เช่น เครือข่ายควบคุมระบบ (Out-of-Band Management), Active Directory Domain Controllers และฐานข้อมูลการเงิน

กฎพื้นฐานของการควบคุมทราฟฟิกระหว่างโซน:
- ทราฟฟิกจากโซนที่มีความน่าเชื่อถือสูงไปยังโซนที่มีความน่าเชื่อถือต่ำกว่า จะได้รับอนุญาตตามนโยบาย (และไฟร์วอลล์แบบ Stateful จะอนุญาตให้ข้อมูลตอบกลับวิ่งกลับเข้ามาได้)
- ทราฟฟิกจากโซนที่มีความน่าเชื่อถือต่ำไปยังโซนที่มีความน่าเชื่อถือสูงกว่า **จะถูกปฏิเสธโดยค่าเริ่มต้น (Default Deny)** เว้นแต่จะมีกฎอนุญาตเฉพาะเจาะจงที่จำเป็นอย่างยิ่งยวด

<h3 id="topic-4-2-dmz-architecture">4.2.3 Demilitarized Zone (DMZ) Architecture: เขตปลอดทหารและเครือข่ายกันชน</h3>

**DMZ (Demilitarized Zone)** คือเครือข่ายย่อยที่ถูกออกแบบมาเพื่อเป็น "เขตกันชน" ระหว่างเครือข่ายสาธารณะภายนอก (Internet) และเครือข่ายภายในองค์กร (Internal Private Network)

<div class="reading-semantic-diagram" data-diagram="dmzFirewallArchitecture"></div>

เป้าหมายทางสถาปัตยกรรมของ DMZ:
- วางเฉพาะเซิร์ฟเวอร์ที่จำเป็นต้องเปิดให้สาธารณะภายนอกเข้าถึงได้ไว้ใน DMZ เช่น **Web Server (HTTPS:443), Mail Gateway (SMTP:25), Public DNS Server (Port 53), และ Reverse Proxy / WAF**
- **ป้องกันเครือข่ายภายใน:** หากเว็บเซิร์ฟเวอร์ใน DMZ ถูกเจาะระบบ ผู้โจมตีจะติดอยู่เพียงใน DMZ และไม่สามารถเข้าถึงเครือข่ายภายในหรือฐานข้อมูลหลักได้โดยตรง เนื่องจากมีไฟร์วอลล์ภายใน (Internal Firewall) คอยสกัดกั้นทราฟฟิกขาเข้าจาก DMZ ไว้

รูปแบบการติดตั้ง DMZ:
1. **Single-Firewall DMZ (Three-Homed Firewall):** ใช้ไฟร์วอลล์ 1 ตัวที่มีการ์ดเครือข่ายอย่างน้อย 3 พอร์ต เชื่อมต่อไปยัง Outside, DMZ และ Inside ช่วยประหยัดค่าใช้จ่าย
2. **Dual-Firewall DMZ (Layered / Back-to-Back):** ใช้ไฟร์วอลล์ 2 ตัวกั้นระหว่าง Outside → DMZ (External Firewall) และ DMZ → Inside (Internal Firewall) โดยแนวปฏิบัติที่ดีที่สุดมักใช้ไฟร์วอลล์ต่างยี่ห้อกัน (Different Vendors) เพื่อป้องกันกรณีที่ยี่ห้อใดเกิดช่องโหว่ Zero-Day จะได้ไม่ส่งผลกระทบต่อไฟร์วอลล์ทั้งสองชั้นพร้อมกัน

<h3 id="topic-4-2-vlans-routing">4.2.4 Virtual Local Area Networks (VLANs) &amp; Routing: เครือข่ายเสมือนระดับสวิตช์</h3>

**VLAN (Virtual Local Area Network)** คือเทคโนโลยีในระดับ **Data Link Layer (Layer 2)** ที่ใช้สวิตช์ทางกายภาพเพียงตัวเดียวในการแบ่งแยกพอร์ตออกเป็นเครือข่ายเชิงตรรกะหลายเครือข่ายเสมือนมีสวิตช์แยกต่างหากจากกัน

คุณลักษณะสำคัญของ VLAN:
- **มาตรฐาน IEEE 802.1Q:** สวิตช์จะทำการแท็กหมายเลข VLAN ID (ขนาด 12 บิต รองรับ VLAN ได้ตั้งแต่ 1 ถึง 4,094) ลงใน Ethernet Frame ระหว่างพอร์ตที่เป็น **Trunk Link**
- **แยก Broadcast Domain:** คอมพิวเตอร์ที่อยู่ใน VLAN ต่างกันจะไม่สามารถสื่อสารหากันได้ในระดับ Layer 2 และการส่งสัญญาณ Broadcast จะถูกกักไว้เฉพาะภายใน VLAN ของตนเองเท่านั้น
- **Inter-VLAN Routing:** หากอุปกรณ์ต่าง VLAN ต้องการสื่อสารหากัน จำเป็นต้องส่งข้อมูลขึ้นไปยังอุปกรณ์ระดับ **Layer 3 (Router หรือ Layer 3 Switch)** เพื่อทำการจัดเส้นทาง ซึ่งเป็นจุดที่องค์กรสามารถติดตั้งไฟร์วอลล์หรือ Access Control Lists (ACLs) เพื่อควบคุมความปลอดภัยได้

<h3 id="topic-4-2-microsegmentation">4.2.5 Micro-Segmentation &amp; East-West Traffic Control: การแบ่งส่วนเครือข่ายระดับย่อย</h3>

ในศูนย์ข้อมูลคลาวด์และสถาปัตยกรรมแอปพลิเคชันยุคใหม่ ทราฟฟิกส่วนใหญ่ไม่ได้วิ่งเข้าออกจากภายนอก (North-South Traffic) แต่เป็นการสื่อสารระหว่างเซิร์ฟเวอร์ด้วยกันเองภายในศูนย์ข้อมูล (**East-West Traffic**)

**Micro-Segmentation:**
คือแนวปฏิบัติในการแบ่งส่วนความปลอดภัยลงลึกไปถึงระดับเวิร์กโหลดเดี่ยว (Workload-level), เครื่องเสมือนเดี่ยว (VM-level), หรือคอนเทนเนอร์เดี่ยว (Container-level) โดยอาศัยเทคโนโลยี Software-Defined Networking (SDN) และ Host-Based Firewalls

ประโยชน์ในระบบ Multi-Tier Architecture:
ในระบบเว็บแอปพลิเคชันแบบ 3 ชั้น (Web Tier → Application Tier → Database Tier):
- Web Tier ได้รับอนุญาตให้สื่อสารกับ Application Tier เฉพาะพอร์ต API ที่กำหนดเท่านั้น
- Web Tier **ไม่ได้รับอนุญาตให้เชื่อมต่อไปยัง Database Tier โดยตรง**
- เซิร์ฟเวอร์ใน Web Tier ด้วยกันเองไม่สามารถสื่อสารข้ามหากันได้ (Peer-to-Peer Isolation) ทำให้เมื่อเว็บเซิร์ฟเวอร์เครื่องหนึ่งถูกเจาะระบบ ผู้โจมตีไม่สามารถเคลื่อนที่ในแนวราบไปยังเซิร์ฟเวอร์เครื่องอื่นในระดับเดียวกันได้

<h3 id="topic-4-2-defense-in-depth">4.2.6 Defense in Depth Layered Strategy: การป้องกันแบบเชิงลึกหลายชั้น</h3>

**Defense in Depth (หรือ Layered Defense)** คือปรัชญาและกลยุทธ์การออกแบบความมั่นคงปลอดภัยที่วางมาตรการควบคุมและป้องกันซ้อนกันหลายระดับชั้น เพื่อให้มั่นใจว่า **หากการควบคุมในชั้นใดชั้นหนึ่งล้มเหลวหรือไม่ทำงาน การควบคุมในชั้นถัดไปยังคงสามารถตรวจจับ ป้องกัน และลดทอนผลกระทบของภัยคุกคามได้**

<div class="reading-semantic-diagram" data-diagram="defenseInDepthLayers"></div>

ลำดับชั้นการป้องกัน 5 ระดับ (Concentric Rings of Defense):
1. **Perimeter Security (ชั้นขอบเขตภายนอก):** ปราการด่านแรกคัดกรองภัยคุกคามจากอินเทอร์เน็ต เช่น Edge Firewalls, DDoS Mitigation (Cloudflare/Akamai), Border Routers, และ External IDS/IPS
2. **Network Security (ชั้นเครือข่าย):** ควบคุมและกักบริเวณทราฟฟิกภายใน เช่น การแบ่ง VLAN, สถาปัตยกรรม DMZ, Micro-Segmentation, Inter-VLAN ACLs, และ VPN Enclaves
3. **Endpoint Security (ชั้นเครื่องลูกข่ายและเซิร์ฟเวอร์):** ปกป้องอุปกรณ์ปลายทาง เช่น โปรแกรม Endpoint Detection and Response (EDR), Host-based Firewalls, การอัปเดตระบบปฏิบัติการ (Patch Management), และการปิดฟังก์ชันที่ไม่จำเป็น (System Hardening)
4. **Application Security (ชั้นซอฟต์แวร์ประยุกต์):** ปกป้องโปรแกรมและข้อมูลขณะประมวลผล เช่น Web Application Firewall (WAF), การตรวจสอบข้อมูลนำเข้า (Input Validation), วงจรการพัฒนาซอฟต์แวร์ที่ปลอดภัย (Secure SDLC), และการยืนยันตัวตนแบบหลายปัจจัย (MFA)
5. **Data Security (ชั้นข้อมูล — หัวใจสำคัญที่สุด):** ปกป้องทรัพย์สินสารสนเทศอันมีค่า เช่น การเข้ารหัสข้อมูลขณะพัก (Encryption at Rest) และขณะส่ง (Encryption in Transit), การบริหารจัดการสิทธิ์ขั้นต่ำ (PoLP), และการสำรองข้อมูลที่ไม่สามารถแก้ไขได้ (Immutable Backups)

<h3 id="topic-4-2-zero-trust">4.2.7 Zero Trust Architecture (ZTA) in Networking: สถาปัตยกรรมแบบไม่ไว้วางใจสิ่งใด</h3>

สถาปัตยกรรมแบบเดิมยึดแนวคิด **Perimeter Security ("Castle-and-Moat")** ซึ่งถือว่าผู้ใช้หรืออุปกรณ์ใดก็ตามที่อยู่ "ภายใน" เครือข่ายองค์กร เป็นสิ่งที่ไว้วางใจได้โดยปริยาย (Implicit Trust) แต่เมื่อเครือข่ายขยายตัวสู่คลาวด์และการทำงานจากระยะไกล ขอบเขตแบบเดิมจึงไม่สามารถปกป้องระบบได้อีกต่อไป

**Zero Trust Architecture (ZTA) ตามมาตรฐาน NIST SP 800-207:**
ยึดถือคติพจน์ประจำใจคือ **"Never Trust, Always Verify" (ไม่ไว้วางใจสิ่งใด ต้องตรวจสอบและยืนยันตัวตนทุกครั้งเสมอ)**

หลักการเสาหลักของ Zero Trust:
1. **ไม่มีความไว้วางใจโดยปริยายจากตำแหน่งที่ตั้ง:** การเชื่อมต่อสาย LAN ในสำนักงาน หรือการต่อผ่าน VPN ภายใน ไม่ได้หมายความว่าจะได้รับความไว้วางใจ
2. **ยืนยันตัวตนอย่างชัดเจนตามบริบท (Verify Explicitly):** การอนุญาตให้เข้าถึงทรัพยากรต้องประเมินปัจจัยหลากหลายด้านอย่างไดนามิก เช่น ตัวตนของผู้ใช้ (User Identity), ความสมบูรณ์ของอุปกรณ์ (Device Health), ตำแหน่งที่ตั้ง (Geolocation), และพฤติกรรมการใช้งาน
3. **การเข้าถึงด้วยสิทธิ์ขั้นต่ำเสมอ (Use Least Privileged Access):** กำหนดสิทธิ์แบบ Just-in-Time (JIT) และ Just-Enough-Access (JEA)
4. **สันนิษฐานไว้ก่อนเสมอว่าระบบถูกเจาะแล้ว (Assume Breach):** ออกแบบระบบโดยคิดเสมอว่าผู้โจมตีแฝงตัวอยู่ในเครือข่ายแล้ว เพื่อผลักดันให้เกิดการแบ่งส่วนเครือข่ายย่อย การเข้ารหัสข้อมูลแบบต้นทางถึงปลายทาง และการตรวจสอบบันทึกเหตุการณ์อย่างต่อเนื่อง

</section>

<section class="reading-objective-section" id="obj-4-3">

## Objective 4.3: Understand Cloud Security

<p class="reading-intro-label"><svg class="reading-label-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>การประมวลผลแบบคลาวด์นำมาซึ่งความยืดหยุ่นและการประหยัดต่อขนาด แต่ก็เปลี่ยนโฉมหน้าของความรับผิดชอบด้านความมั่นคงปลอดภัยไปอย่างสิ้นเชิง:</p>

<h3 id="topic-4-3-cloud-characteristics">4.3.1 Cloud Computing Foundations &amp; 5 Characteristics: คุณลักษณะสำคัญ 5 ประการ</h3>

ตามนิยามมาตรฐานของสถาบันมาตรฐานและเทคโนโลยีแห่งชาติสหรัฐฯ (**NIST SP 800-145**) ระบบประมวลผลแบบคลาวด์ (Cloud Computing) จะต้องมีคุณลักษณะจำเป็นพื้นฐานครบทั้ง 5 ประการ ดังนี้:

1. **On-Demand Self-Service (การบริการตนเองตามความต้องการ):**
   - ผู้ใช้บริการสามารถร้องขอ จัดสรร และปรับเปลี่ยนทรัพยากรการประมวลผล (เช่น เวลาเซิร์ฟเวอร์ พื้นที่จัดเก็บข้อมูล) ได้ด้วยตนเองโดยอัตโนมัติผ่านหน้าเว็บหรือ API โดยไม่ต้องรอให้เจ้าหน้าที่ของผู้ให้บริการคลาวด์ดำเนินการให้
2. **Broad Network Access (การเข้าถึงเครือข่ายที่กว้างขวาง):**
   - ทรัพยากรคลาวด์สามารถเข้าถึงได้ผ่านระบบเครือข่ายด้วยกลไกและมาตรฐานสากล รองรับการใช้งานจากอุปกรณ์ที่หลากหลาย เช่น แล็ปท็อป สมาร์ตโฟน แท็บเล็ต หรือเวิร์กสเตชัน
3. **Resource Pooling (การรวมทรัพยากรไว้เป็นกลุ่มก้อน):**
   - ทรัพยากรคอมพิวเตอร์ของผู้ให้บริการ (ฮาร์ดแวร์ พื้นที่เก็บข้อมูล เครือข่าย) ถูกนำมารวมกันเป็นสระรวมเพื่อให้บริการแก่ลูกค้าหลายรายพร้อมกันในรูปแบบ **Multi-Tenancy** โดยมีระบบกั้นแยกในเชิงตรรกะ ลูกค้าจะไม่ทราบตำแหน่งทางกายภาพที่แน่นอนของเซิร์ฟเวอร์
4. **Rapid Elasticity (ความยืดหยุ่นที่รวดเร็ว):**
   - ความสามารถในการเพิ่มขยาย (Scale Up / Scale Out) หรือลดขนาดทรัพยากร (Scale Down / Scale In) ได้อย่างรวดเร็วและเป็นอัตโนมัติตามปริมาณความต้องการใช้งานจริง ทำให้เสมือนว่ามีทรัพยากรไม่จำกัด
5. **Measured Service (บริการที่วัดปริมาณการใช้งานได้):**
   - ระบบคลาวด์มีมิเตอร์วัดและควบคุมปริมาณการใช้ทรัพยากรอย่างโปร่งใส เช่น ปริมาณการประมวลผล พื้นที่จัดเก็บ ปริมาณข้อมูลรับส่ง เพื่อนำไปคิดค่าบริการตามการใช้งานจริง (**Pay-as-you-go**)

<h3 id="topic-4-3-service-models">4.3.2 Cloud Service Models (IaaS, PaaS, SaaS, FaaS): รูปแบบการให้บริการคลาวด์</h3>

บริการคลาวด์แบ่งออกเป็น 4 รูปแบบหลักตามระดับการควบคุมและการบริหารจัดการ:

1. **IaaS (Infrastructure as a Service — บริการโครงสร้างพื้นฐาน):**
   - ผู้ให้บริการคลาวด์ (CSP) รับผิดชอบโครงสร้างพื้นฐานทางกายภาพ ฮาร์ดแวร์ ศูนย์ข้อมูล และระบบเวอร์ชวลไลเซชัน (Hypervisor)
   - ลูกค้า (Customer) เช่าเครื่อง Virtual Machine (VM) และพื้นที่จัดเก็บ โดยลูกค้ามีสิทธิ์ควบคุมและรับผิดชอบตั้งแต่ **ระบบปฏิบัติการ (Guest OS), การติดตั้ง Security Patches, มิดเดิลแวร์, แอปพลิเคชัน, และข้อมูล**
   - ตัวอย่าง: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine (GCE)

2. **PaaS (Platform as a Service — บริการแพลตฟอร์ม):**
   - ผู้ให้บริการคลาวด์ดูแลฮาร์ดแวร์ ระบบเครือข่าย ระบบปฏิบัติการ และซอฟต์แวร์รันไทม์ (Runtime Environment) ให้ทั้งหมด
   - ลูกค้ามีหน้าที่เพียงนำ **โค้ดแอปพลิเคชัน (Application Code) และข้อมูล (Data)** มาติดตั้งและรันงาน
   - ตัวอย่าง: AWS Elastic Beanstalk, Google App Engine, Microsoft Azure App Services

3. **SaaS (Software as a Service — บริการซอฟต์แวร์สำเร็จรูป):**
   - ผู้ให้บริการคลาวด์ดูแลและบริหารจัดการระบบทั้งหมดตั้งแต่ฮาร์ดแวร์ ระบบปฏิบัติการ จนถึงตัวโปรแกรมแอปพลิเคชัน
   - ลูกค้าเข้าใช้งานซอฟต์แวร์สำเร็จรูปผ่านเว็บเบราว์เซอร์ โดยลูกค้ามีหน้าที่ดูแลเฉพาะ **ข้อมูลของตนเอง และการจัดการสิทธิ์การเข้าถึงของผู้ใช้งาน (User Access Management)**
   - ตัวอย่าง: Microsoft 365, Google Workspace, Salesforce, Dropbox

4. **FaaS / Serverless (Function as a Service — บริการฟังก์ชันแบบไร้เซิร์ฟเวอร์):**
   - รูปแบบย่อยของ PaaS ที่ลูกค้านำเฉพาะโค้ดของฟังก์ชันสั้น ๆ มาอัปโหลดไว้ โดยระบบจะรันโค้ดเมื่อมีเหตุการณ์เข้ามากระตุ้น (Event-Driven) และสเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน
   - ตัวอย่าง: AWS Lambda, Google Cloud Functions, Azure Functions

<h3 id="topic-4-3-shared-responsibility">4.3.3 The Shared Responsibility Model: โมเดลความรับผิดชอบร่วม</h3>

ความเข้าใจผิดที่อันตรายที่สุดในระบบคลาวด์คือการคิดว่า *"เมื่อย้ายไประบบคลาวด์แล้ว ผู้ให้บริการจะดูแลความปลอดภัยทั้งหมดให้เรา"*

ในความเป็นจริง ความมั่นคงปลอดภัยบนคลาวด์เป็นพันธสัญญาความรับผิดชอบร่วมกัน (**Shared Responsibility Model**):
- **Security OF the Cloud (ความปลอดภัยของระบบคลาวด์):** เป็นหน้าที่ของผู้ให้บริการคลาวด์ (CSP) ในการดูแลรักษาศูนย์ข้อมูล อุปกรณ์ฮาร์ดแวร์ ระบบไฟฟ้า เครือข่ายแกนหลัก และซอฟต์แวร์ Hypervisor
- **Security IN the Cloud (ความปลอดภัยภายในระบบคลาวด์):** เป็นหน้าที่ของลูกค้า (Customer) ในการปกป้องข้อมูล การตั้งค่าไฟร์วอลล์ การจัดการสิทธิ์ผู้ใช้ และการดูแลแอปพลิเคชัน

<div class="reading-semantic-diagram" data-diagram="cloudSharedResponsibility"></div>

<div class="reading-callout tip">
  <div class="reading-callout-header">
    <svg class="reading-callout-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    <span>กฎทองสำหรับห้องสอบ: สิ่งที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอ</span>
  </div>
  <p>ไม่ว่าองค์กรจะเลือกใช้โมเดลคลาวด์รูปแบบใด (IaaS, PaaS, SaaS หรือ FaaS) สิ่งที่ <strong>ลูกค้า (Customer) ต้องเป็นผู้รับผิดชอบเสมอ 100%</strong> และไม่สามารถส่งมอบความรับผิดชอบนี้ให้แก่ผู้ให้บริการคลาวด์ได้ คือ:<br>
  1. <strong>Data &amp; Information (ข้อมูลสารสนเทศและการจัดชั้นความลับ)</strong><br>
  2. <strong>Identity &amp; Access Management (การบริหารจัดการตัวตน บัญชีผู้ใช้ และสิทธิ์การเข้าถึง)</strong></p>
</div>

<h3 id="topic-4-3-deployment-models">4.3.4 Cloud Deployment Models: รูปแบบการติดตั้งระบบคลาวด์</h3>

ตามมาตรฐาน NIST SP 800-145 รูปแบบการติดตั้งระบบคลาวด์แบ่งออกเป็น 4 รูปแบบหลัก:

1. **Public Cloud (คลาวด์สาธารณะ):**
   - โครงสร้างพื้นฐานคลาวด์ที่เปิดให้บริการแก่สาธารณชนทั่วไปหรือกลุ่มอุตสาหกรรมขนาดใหญ่ เป็นเจ้าของและบริหารจัดการโดยผู้ให้บริการคลาวด์เชิงพาณิชย์ (เช่น AWS, Azure, Google Cloud)
   - ใช้ทรัพยากรร่วมกันหลายองค์กร (Multi-tenant) ประหยัดค่าใช้จ่ายและยืดหยุ่นสูงสุด
2. **Private Cloud (คลาวด์ส่วนตัว):**
   - โครงสร้างพื้นฐานคลาวด์ที่สร้างขึ้นเพื่อใช้งานเฉพาะภายในองค์กรเดียวเท่านั้น (Single-tenant) อาจตั้งอยู่ในศูนย์ข้อมูลขององค์กรเอง (On-Premises) หรือจ้างให้ผู้ให้บริการภายนอกดูแลให้
   - ให้การควบคุม ความเป็นส่วนตัว และความมั่นคงปลอดภัยสูงสุด เหมาะสำหรับหน่วยงานที่มีข้อกำหนดด้านกฎระเบียบเข้มงวด
3. **Hybrid Cloud (คลาวด์แบบผสมผสาน):**
   - การทำงานร่วมกันอย่างแนบแน่นระหว่างโครงสร้างพื้นฐานอย่างน้อยสองรูปแบบที่ต่างกัน (โดยทั่วไปคือ Private Cloud หรือ On-Premises ผสมกับ Public Cloud)
   - ข้อมูลและแอปพลิเคชันสามารถถ่ายโอนข้ามกันได้อย่างราบรื่น ช่วยให้องค์กรเก็บข้อมูลความลับไว้ในศูนย์ข้อมูลส่วนตัว แต่สามารถยืมพลังประมวลผลจากพับลิกคลาวด์เมื่อมีความต้องการสูงขึ้น (**Cloud Bursting**)
4. **Community Cloud (คลาวด์สำหรับกลุ่มองค์กรเฉพาะ):**
   - โครงสร้างพื้นฐานคลาวด์ที่สร้างขึ้นและแชร์กันเฉพาะกลุ่มองค์กรที่มีพันธกิจ กฎหมาย นโยบาย หรือข้อกำหนดความมั่นคงปลอดภัยร่วมกัน
   - ตัวอย่าง: เครือข่ายโรงพยาบาลในภูมิภาคที่แชร์ระบบเวชระเบียนผู้ป่วยร่วมกัน, หรือกลุ่มธนาคารที่ใช้ระบบชำระเงินมาตรฐานเดียวกัน

<h3 id="topic-4-3-hybrid-vs-multicloud">4.3.5 Critical Deployment Distinction: ความแตกต่างระหว่าง Hybrid vs. Multi-Cloud</h3>

ข้อสอบ ISC2 CC มักทดสอบความเข้าใจระหว่างคำสองคำนี้อย่างสม่ำเสมอ:

- **Hybrid Cloud:** มุ่งเน้นไปที่การผสมผสานระหว่าง **สภาพแวดล้อมต่างชนิดกัน (Private + Public)** โดยมีเทคโนโลยีเชื่อมโยงเวิร์กโหลดเข้าด้วยกัน เช่น บริษัทเก็บฐานข้อมูลลูกค้าไว้ในดาต้าเซ็นเตอร์ของตนเอง (Private) แต่รันเว็บหน้าร้านบน AWS (Public)
- **Multi-Cloud:** มุ่งเน้นไปที่การใช้งาน **ผู้ให้บริการคลาวด์สาธารณะหลายรายพร้อมกัน (Multiple CSPs)** เช่น การใช้เซิร์ฟเวอร์ประมวลผลบน AWS ร่วมกับการใช้บริการ AI บน Google Cloud และใช้อีเมลบน Microsoft Azure เพื่อหลีกเลี่ยงการถูกผูกขาดจากผู้ให้บริการรายเดียว (**Vendor Lock-in**) และเพิ่มความทนทานต่อภัยพิบัติ

ตารางเปรียบเทียบ Hybrid Cloud vs. Multi-Cloud:

| <div class="reading-bilingual-term"><span class="reading-term-en">**Dimension**</span><span class="reading-term-th">(มิติการพิจารณา)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Hybrid Cloud**</span><span class="reading-term-th">(คลาวด์แบบผสมผสาน)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Multi-Cloud**</span><span class="reading-term-th">(คลาวด์หลายผู้ให้บริการ)</span></div> |
| :--- | :--- | :--- |
| **Core Architecture** | ผสมผสานระหว่าง **Private Cloud / On-Prem** และ **Public Cloud** | ใช้งาน **Public Cloud หลายราย** พร้อมกัน (เช่น AWS + GCP + Azure) |
| **Primary Goal** | รักษาข้อมูลความลับไว้ในองค์กร แต่ยืมความยืดหยุ่นจากคลาวด์ | หลีกเลี่ยงการผูกขาด (Vendor Lock-in) และเลือกใช้จุดเด่นของแต่ละเจ้า |
| **Integration Level** | เชื่อมต่อข้อมูลและกระบวนการทำงานร่วมกันอย่างแนบแน่น | อาจทำงานแยกจากกันเป็นอิสระ หรือเชื่อมต่อกันผ่าน API |
| **Exam Trigger** | *"On-premises integrated with public cloud", "Sensitive data hosted locally"* | *"Avoiding vendor lock-in", "Using two or more cloud service providers"* |

<h3 id="topic-4-3-cloud-network-controls">4.3.6 Cloud Network Architecture &amp; Security Controls: สถาปัตยกรรมเครือข่ายคลาวด์</h3>

การรักษาความปลอดภัยเครือข่ายบนระบบคลาวด์อาศัยการกำหนดค่าเชิงซอฟต์แวร์ (Software-Defined):

- **Virtual Private Cloud (VPC) / VNet:** เครือข่ายเสมือนส่วนตัวที่แยกเป็นเอกเทศบนระบบคลาวด์ของผู้ให้บริการ ทำให้ลูกค้าสามารถควบคุมการจัดสรรช่วงไอพี (CIDR Block), การสร้างเครือข่ายย่อย (Subnets), และตารางเส้นทาง (Route Tables) ได้เหมือนศูนย์ข้อมูลส่วนตัว
- **Public Subnet vs. Private Subnet:**
  - Public Subnet: เชื่อมต่อไปยัง **Internet Gateway (IGW)** โดยตรง เหมาะสำหรับวาง Load Balancer หรือ Bastion Host
  - Private Subnet: ไม่มีเส้นทางตรงสู่อินเทอร์เน็ต เซิร์ฟเวอร์ฐานข้อมูลต้องอยู่ในนี้ หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน **NAT Gateway** เท่านั้น
- **Security Groups vs. Network ACLs (NACLs):**
  - **Security Group:** ไฟร์วอลล์เสมือนระดับ **Instance / Virtual Machine (Host Level)** มีคุณสมบัติเป็น **Stateful** (หากอนุญาตขาเข้า ขาออกจะได้รับอนุญาตอัตโนมัติ) กำหนดได้เฉพาะกฎ Allow
  - **Network ACL (NACL):** ไฟร์วอลล์เสมือนระดับ **Subnet** มีคุณสมบัติเป็น **Stateless** (ต้องกำหนดกฎทั้งขาเข้าและขาออกแยกกันอย่างชัดเจน) รองรับทั้งกฎ Allow และ Deny เรียงลำดับตามหมายเลข Rule Number

</section>

<section class="reading-objective-section reading-review-section" id="domain-4-review">

## Domain 4 Summary, Key Distinctions &amp; Review Scenarios

ส่วนนี้เป็นชุดเครื่องมือทบทวนและแบบฝึกปฏิบัติสถานการณ์จำลองระดับ Domain-wide เพื่อเสริมสร้างความเข้าใจเชิงลึกสำหรับทั้ง 3 วัตถุประสงค์ใน Domain 4:

<h3 id="topic-4-review-scenarios">Domain 4 Review &amp; Practical Analysis</h3>
<span id="topic-4-review-distinctions" class="reading-topic-anchor" aria-hidden="true"></span>
<span id="topic-4-review-traps" class="reading-topic-anchor" aria-hidden="true"></span>
<span id="topic-4-review-quickref" class="reading-topic-anchor" aria-hidden="true"></span>

#### 1. ตารางเปรียบเทียบคำที่มักสับสนในข้อสอบ (Concept Distinctions)

<div class="reading-distinction-grid">
  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>1. Hub vs. Switch vs. Router vs. Layer 3 Switch</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Hub (L1) &amp; Switch (L2)</strong>
        <div class="reading-distinction-desc">Hub ส่งข้อมูลกระจายทุกพอร์ต (1 Collision Domain) ในขณะที่ Switch แยกพอร์ตตาม MAC Address (แยก Collision Domain) แต่ทั้งคู่กั้น Broadcast ไม่ได้</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Router (L3) &amp; L3 Switch</strong>
        <div class="reading-distinction-desc">Router จัดเส้นทางข้ามเครือข่ายตาม IP Address และทำหน้าที่กั้น Broadcast Domain ออกจากกัน ส่วน L3 Switch ทำงานสวิตชิ่งความเร็วสูงระดับฮาร์ดแวร์ควบคู่การเราต์</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>2. TCP vs. UDP</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">TCP (Transmission Control Protocol)</strong>
        <div class="reading-distinction-desc">Connection-oriented, 3-way handshake, รับประกันความสมบูรณ์ของข้อมูล เหมาะกับเว็บ (HTTP/S), อีเมล, และการโอนย้ายไฟล์</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">UDP (User Datagram Protocol)</strong>
        <div class="reading-distinction-desc">Connectionless, ไม่มีการจับมือ, ส่งข้อมูลรวดเร็วแบบ Best-effort ยอมรับข้อมูลสูญหายได้ เหมาะกับสตรีมมิง, VoIP, DNS, และ DHCP</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>3. IPv4 vs. IPv6</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">IPv4 (32-bit Dotted-Decimal)</strong>
        <div class="reading-distinction-desc">มี 4.3 พันล้านหมายเลข ต้องพึ่งพา Private IP และ NAT เพื่อประหยัดไอพี รองรับการส่งแบบ Broadcast</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">IPv6 (128-bit Hexadecimal)</strong>
        <div class="reading-distinction-desc">มีหมายเลขมหาศาล (3.4 &times; 10<sup>38</sup>), รองรับ IPsec ในตัว, กำหนดไอพีอัตโนมัติด้วย SLAAC และยกเลิก Broadcast โดยแทนที่ด้วย Multicast/Anycast</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>4. Packet Filtering vs. Stateful Inspection vs. NGFW</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Packet Filtering &amp; Stateful</strong>
        <div class="reading-distinction-desc">Packet Filtering ตรวจแค่ IP/Port แบบ Stateless ส่วน Stateful บันทึกสถานะการเชื่อมต่อใน State Table เพื่ออนุญาตทราฟฟิกตอบกลับ</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Next-Generation Firewall (NGFW)</strong>
        <div class="reading-distinction-desc">ตรวจลึกถึงระดับ Layer 7 (DPI), รู้จักตัวตนของแอปพลิเคชัน, มี IPS ฝังในตัว และสามารถถอดรหัสตรวจสอบทราฟฟิก SSL/TLS ได้</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>5. IDS (Detection) vs. IPS (Prevention)</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">IDS (Intrusion Detection System)</strong>
        <div class="reading-distinction-desc">เชื่อมต่อแบบคู่ขนาน (Out-of-band / TAP port) ทำหน้าที่ตรวจจับและแจ้งเตือน (Alert/Log) เท่านั้น ไม่สามารถหยุดยั้งทราฟฟิกได้</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">IPS (Intrusion Prevention System)</strong>
        <div class="reading-distinction-desc">เชื่อมต่อแบบขวางทางเดินข้อมูลโดยตรง (In-line) สามารถสั่งตัดการเชื่อมต่อหรือทิ้งแพ็กเก็ตอันตรายได้ทันทีในเวลาจริง</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>6. Network Segmentation vs. VLAN vs. DMZ vs. Micro-Segmentation</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Segmentation &amp; VLAN</strong>
        <div class="reading-distinction-desc">Segmentation คือหลักการแบ่งเครือข่ายเพื่อลดขอบเขตความเสียหาย ส่วน VLAN คือการแบ่งส่วนในระดับ Layer 2 บนสวิตช์</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">DMZ &amp; Micro-Segmentation</strong>
        <div class="reading-distinction-desc">DMZ คือเขตกันชนสำหรับบริการสาธารณะ ส่วน Micro-Segmentation คือการควบคุมทราฟฟิกแนวราบ (East-West) ลึกถึงระดับเวิร์กโหลด/โฮสต์</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>7. Blast Radius vs. Lateral Movement</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Blast Radius (รัศมีความเสียหาย)</strong>
        <div class="reading-distinction-desc">ขอบเขตหรือความรุนแรงของผลกระทบที่อาจเกิดขึ้นต่อระบบ หากเซกเมนต์หรือส่วนประกอบนั้นถูกเจาะระบบสำเร็จ</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Lateral Movement (การเคลื่อนที่แนวราบ)</strong>
        <div class="reading-distinction-desc">พฤติกรรมของผู้โจมตีในการขยายการควบคุมจากเครื่องเริ่มต้นที่ถูกแฮก ไปยังเครื่องหรือเซิร์ฟเวอร์อื่น ๆ ในเครือข่าย</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>8. Perimeter Security vs. Zero Trust Architecture (ZTA)</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Perimeter Security ("Castle-and-Moat")</strong>
        <div class="reading-distinction-desc">ป้องกันขอบเขตภายนอกอย่างแน่นหนา แต่เชื่อถือผู้ใช้และอุปกรณ์ที่อยู่ภายในเครือข่ายโดยปริยาย (Implicit Trust)</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Zero Trust Architecture (ZTA)</strong>
        <div class="reading-distinction-desc">ยึดหลัก "Never Trust, Always Verify" ยกเลิกความเชื่อถือจากตำแหน่งที่ตั้ง และตรวจสอบตัวตนตามบริบทอย่างเข้มงวดตลอดเวลา</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>9. IaaS vs. PaaS vs. SaaS vs. FaaS</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">IaaS &amp; PaaS</strong>
        <div class="reading-distinction-desc">IaaS ลูกค้าดูแลตั้งแต่ OS, Patching และแอปพลิเคชัน ส่วน PaaS ผู้ให้บริการดูแล OS ให้ ลูกค้าดูแลเฉพาะโค้ดและข้อมูล</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">SaaS &amp; FaaS</strong>
        <div class="reading-distinction-desc">SaaS ผู้ให้บริการดูแลทั้งหมด ลูกค้าดูแลแค่ Data และ User Access ส่วน FaaS ลูกค้าเขียนเฉพาะฟังก์ชันรันตามเหตุการณ์ (Serverless)</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>10. Security OF the Cloud vs. Security IN the Cloud</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Security OF the Cloud (หน้าที่ของ CSP)</strong>
        <div class="reading-distinction-desc">การรักษาความมั่นคงปลอดภัยของโครงสร้างพื้นฐาน ศูนย์ข้อมูล ฮาร์ดแวร์ สายสัญญาณ และ Hypervisor</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Security IN the Cloud (หน้าที่ของลูกค้า)</strong>
        <div class="reading-distinction-desc">การดูแลข้อมูล การกำหนดสิทธิ์การเข้าถึง (IAM) การตั้งค่าไฟร์วอลล์ และการป้องกันระบบปฏิบัติการที่ตนเองเช่าใช้งาน</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>11. Hybrid Cloud vs. Multi-Cloud</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Hybrid Cloud (สถาปัตยกรรมผสม)</strong>
        <div class="reading-distinction-desc">การผสมผสานและทำงานร่วมกันอย่างแนบแน่นระหว่าง Private Cloud / On-Premises และ Public Cloud</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Multi-Cloud (หลายผู้ให้บริการ)</strong>
        <div class="reading-distinction-desc">การเลือกใช้บริการจากผู้ให้บริการคลาวด์สาธารณะ (CSPs) ตั้งแต่ 2 เจ้าขึ้นไปพร้อมกัน เพื่อหลีกเลี่ยงการถูกผูกขาด</div>
      </div>
    </div>
  </div>

  <div class="reading-distinction-card">
    <div class="reading-distinction-header"><span>12. Security Group (Stateful) vs. Network ACL (Stateless)</span></div>
    <div class="reading-distinction-body">
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Security Group (Stateful &middot; VM Level)</strong>
        <div class="reading-distinction-desc">ทำงานระดับเครื่องเสมือน มีคุณสมบัติ Stateful อนุญาตทราฟฟิกขากลับอัตโนมัติ กำหนดได้เฉพาะกฎ Allow</div>
      </div>
      <div class="reading-distinction-point">
        <strong class="reading-distinction-term">Network ACL (Stateless &middot; Subnet Level)</strong>
        <div class="reading-distinction-desc">ทำงานระดับเครือข่ายย่อย มีคุณสมบัติ Stateless ต้องกำหนดกฎขาเข้าและขาออกแยกกัน และมีทั้งกฎ Allow และ Deny</div>
      </div>
    </div>
  </div>
</div>

#### 2. ข้อสังเกตและจุดจำสำคัญสำหรับข้อสอบ (Exam Traps)

1. ถ้าข้อสอบถามถึง **"สิ่งที่ลูกค้าคลาวด์เป็นผู้รับผิดชอบ 100% เสมอในทุกโมเดล (IaaS, PaaS, SaaS)"** → ให้เลือก **Data &amp; Information** หรือ **Identity &amp; Access Management (IAM)**
2. ถ้าข้อสอบถามถึง **"ใครรับผิดชอบการติดตั้ง Security Patch ให้กับระบบปฏิบัติการของ Virtual Machine ใน IaaS"** → ให้เลือก **Customer (ลูกค้าผู้ใช้บริการ)**
3. ถ้าข้อสอบถามถึง **"ใครรับผิดชอบการติดตั้ง Security Patch ให้กับระบบปฏิบัติการใน PaaS หรือ SaaS"** → ให้เลือก **Cloud Service Provider (CSP)**
4. ถ้าข้อสอบถามถึง **"การจัดวางเซิร์ฟเวอร์ที่เปิดให้สาธารณะภายนอกเข้าถึงได้ เพื่อป้องกันเครือข่ายภายใน"** → ให้เลือก **DMZ (Demilitarized Zone)**
5. ถ้าข้อสอบถามถึง **"ห้ามนำสิ่งใดไปวางไว้ใน DMZ โดยเด็ดขาด"** → ให้เลือก **Internal Database** หรือ **Active Directory / Domain Controller**
6. ถ้าข้อสอบถามถึง **"การแบ่งส่วนเครือข่ายเพื่อลดขอบเขตความเสียหายและหยุดยั้งการเคลื่อนที่ในแนวราบ"** → ให้เลือก **Network Segmentation** หรือ **Micro-Segmentation**
7. ถ้าข้อสอบถามถึง **"การควบคุมทราฟฟิกในแนวราบ (East-West Traffic) ระหว่างเซิร์ฟเวอร์ในระดับเวิร์กโหลดเดี่ยว"** → ให้เลือก **Micro-Segmentation**
8. ถ้าข้อสอบถามถึง **"อุปกรณ์ที่ทำหน้าที่แยก Collision Domain แต่ไม่สามารถแยก Broadcast Domain ได้"** → ให้เลือก **Switch (Layer 2)**
9. ถ้าข้อสอบถามถึง **"อุปกรณ์ที่ทำหน้าที่แยก Broadcast Domain ออกจากกันโดยเด็ดขาด"** → ให้เลือก **Router (Layer 3)**
10. ถ้าข้อสอบถามถึง **"โพรโทคอลที่ทำงานแบบ Connection-oriented และมีการทำ 3-Way Handshake"** → ให้เลือก **TCP**
11. ถ้าข้อสอบถามถึง **"โพรโทคอลที่ทำงานแบบ Connectionless น้ำหนักเบา และเหมาะกับการสตรีมวิดีโอหรือ DNS"** → ให้เลือก **UDP**
12. ถ้าข้อสอบถามถึง **"การเข้ารหัส Wi-Fi มาตรฐานสูงสุดที่ใช้กลไก SAE ป้องกันการสุ่มรหัสผ่านออฟไลน์"** → ให้เลือก **WPA3**
13. ถ้าข้อสอบถามถึง **"มาตรการใดต่อไปนี้ไม่ใช่การรักษาความปลอดภัย Wi-Fi ที่แท้จริง"** → ให้เลือก **MAC Filtering** หรือ **Disable SSID Broadcast (ซ่อนชื่อ Wi-Fi)**
14. ถ้าข้อสอบถามถึง **"ความแตกต่างระหว่าง IDS และ IPS"** → ตอบว่า **IDS ทำได้เพียงตรวจจับและแจ้งเตือน (Alert) ส่วน IPS สามารถสกัดกั้นและทิ้งแพ็กเก็ตได้ทันที (Inline Drop/Block)**
15. ถ้าข้อสอบถามถึง **"สถาปัตยกรรมที่ผสมผสานระหว่างศูนย์ข้อมูลส่วนตัว On-Premises เข้ากับ Public Cloud"** → ตอบ **Hybrid Cloud**
16. ถ้าข้อสอบถามถึง **"กลยุทธ์การใช้งานผู้ให้บริการคลาวด์หลายเจ้าพร้อมกันเพื่อป้องกัน Vendor Lock-in"** → ตอบ **Multi-Cloud**

#### 3. ตารางสรุปคำสำคัญบ่งชี้แนวคิด (Keyword-to-Concept Matrix)

| <div class="reading-bilingual-term"><span class="reading-term-en">**Concept**</span><span class="reading-term-th">(แนวคิดสำคัญ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Exam Trigger Keywords**</span><span class="reading-term-th">(คำค้นพบในโจทย์ข้อสอบ)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Core Purpose**</span><span class="reading-term-th">(วัตถุประสงค์หลัก)</span></div> | <div class="reading-bilingual-term"><span class="reading-term-en">**Practical Scenario Example**</span><span class="reading-term-th">(ตัวอย่างสถานการณ์จริง)</span></div> |
| :--- | :--- | :--- | :--- |
| **Segmentation** | "Blast radius", "Lateral movement", "Divide network" | กักบริเวณความเสียหายและหยุดยั้งการแพร่กระจายของภัยคุกคาม | แยกแผนกการเงินออกจากแผนกต้อนรับ |
| **DMZ** | "Public-facing servers", "Buffer zone", "Isolate internal DB" | เป็นกันชนแยกบริการสาธารณะออกจากฐานข้อมูลภายใน | วาง Web Server และ Mail Gateway |
| **Micro-Segmentation** | "East-West traffic", "Workload level", "Host-level firewall" | ควบคุมการสื่อสารระหว่างเซิร์ฟเวอร์ในศูนย์ข้อมูลอย่างละเอียด | กั้นไม่ให้ Web Tier คุยกับ Database ตรง |
| **Defense in Depth** | "Multiple layers", "No single point of failure", "Concentric" | วางมาตรการซ้อนกันหลายชั้นเพื่อให้มีระบบสำรองป้องกันเสมอ | มีทั้ง Perimeter FW, EDR, WAF และการเข้ารหัส |
| **Zero Trust** | "Never trust always verify", "Implicit trust eliminated", "Context" | ไม่เชื่อถือใครจากตำแหน่งที่ตั้ง ตรวจสอบตัวตนทุกครั้ง | เครื่องในออฟฟิศยังคงต้องผ่าน MFA และตรวจความปลอดภัย |
| **IaaS Responsibility** | "Customer patches OS", "Virtual machines", "Infrastructure" | ลูกค้าดูแลตั้งแต่ OS และแอปพลิเคชันขึ้นไป CSP ดูแลฮาร์ดแวร์ | เช่า AWS EC2 แล้วแอดมินต้องอัปเดตแพตช์วินโดวส์เอง |
| **Customer Data Duty** | "Always customer responsibility", "Data classification", "IAM" | ลูกค้าเป็นเจ้าของและรับผิดชอบข้อมูลและการให้สิทธิ์ 100% เสมอ | ย้ายไฟล์ขึ้น SaaS แล้วตั้งค่าสิทธิ์หลวมจนข้อมูลรั่ว |
| **Hybrid Cloud** | "On-premises + public", "Cloud bursting", "Local sensitive data" | ผสมผสานดาต้าเซ็นเตอร์ส่วนตัวเข้ากับคลาวด์สาธารณะ | เก็บข้อมูลบัญชีไว้ที่ตึกตนเอง แต่รันประมวลผลบนคลาวด์ |
| **Community Cloud** | "Shared regulatory requirements", "Specific mission", "Hospitals" | คลาวด์สำหรับกลุ่มองค์กรที่มีข้อกำหนดหรือภารกิจเฉพาะร่วมกัน | กลุ่มโรงพยาบาล 5 แห่งแชร์ระบบประวัติผู้ป่วย |
| **Multi-Cloud** | "Avoid vendor lock-in", "Multiple CSPs", "AWS + Azure" | ใช้คลาวด์สาธารณะมากกว่า 1 เจ้าเพื่อกระจายความเสี่ยง | ใช้เซิร์ฟเวอร์ AWS ร่วมกับระบบ AI ของ Google Cloud |
| **WPA3 SAE** | "Simultaneous Authentication of Equals", "Prevent offline dictionary" | ป้องกันการโจมตีแบบสุ่มรหัสผ่านออฟไลน์ในเครือข่าย Wi-Fi | มาตรฐาน Wi-Fi ยุคใหม่ที่ทนทานต่อการดักจับ Handshake |
| **Security Group** | "Stateful", "Instance level", "Virtual firewall", "Allow only" | ควบคุมทราฟฟิกเข้าออกระดับเครื่องเสมือนบนคลาวด์แบบ Stateful | เปิดพอร์ต 443 ขาเข้า แล้วทราฟฟิกขาออกเปิดให้อัตโนมัติ |

#### 4. สถานการณ์จำลองและแนวคิดการวิเคราะห์ (Review Scenarios)

:::scenario
id: 1
badge: Scenario 01
topic: Network Segmentation & Blast Radius
situation: ผู้ดูแลระบบความมั่นคงปลอดภัยพบว่า หากคอมพิวเตอร์ในแผนกต้อนรับ (Reception) ถูกมัลแวร์เรียกค่าไถ่ (Ransomware) โจมตี มัลแวร์จะสามารถแพร่กระจายผ่านระบบเครือข่ายไปยังเซิร์ฟเวอร์ฐานข้อมูลการเงิน (Financial Database) ได้โดยตรงเนื่องจากเครือข่ายทั้งหมดเชื่อมต่อกันเป็นผืนเดียว (Flat Network)
question: สถาปัตยกรรมความมั่นคงปลอดภัยใดที่องค์กรควรนำมาใช้เพื่อจำกัดการแพร่กระจายของภัยคุกคาม และลดขอบเขตความเสียหาย (Blast Radius)?
answer: Network Segmentation — การแบ่งส่วนเครือข่าย
reasoning: Network Segmentation คือการแบ่งระบบเครือข่ายขนาดใหญ่ออกเป็นส่วนย่อย ๆ (Subnetworks หรือ Segments) ที่มีการแยกและควบคุมการไหลเวียนของทราฟฟิกด้วย Access Control Lists (ACLs) หรือไฟร์วอลล์ การแบ่งส่วนเครือข่ายช่วยลดรัศมีความเสียหาย (Blast Radius) และป้องกันไม่ให้ผู้โจมตีสามารถเคลื่อนที่ในแนวราบ (Lateral Movement) ไปยังระบบสำคัญอื่นได้
:::

:::scenario
id: 2
badge: Scenario 02
topic: DMZ (Demilitarized Zone) Architecture
situation: บริษัทต้องการเปิดให้บริการเว็บเซิร์ฟเวอร์สาธารณะ (Public Web Server) แก่ลูกค้าภายนอกบนอินเทอร์เน็ต แต่กังวลว่าหากเว็บเซิร์ฟเวอร์ถูกเจาะระบบ ผู้โจมตีจะสามารถเข้าถึงฐานข้อมูลลูกค้าและระบบงานภายในของบริษัทได้ทันที
question: องค์กรควรจัดวางเว็บเซิร์ฟเวอร์ที่เปิดสู่สาธารณะไว้ในส่วนใดของสถาปัตยกรรมเครือข่ายเพื่อความปลอดภัยสูงสุด?
answer: DMZ (Demilitarized Zone) — เขตปลอดทหารหรือเครือข่ายกันชน
reasoning: DMZ คือเครือข่ายกันชนที่แยกตัวออกจากทั้งอินเทอร์เน็ตภายนอก (Untrusted Zone) และเครือข่ายภายใน (Trusted Internal Network) โดยบริการที่เปิดให้สาธารณะเข้าถึงได้ (เช่น Web Server, DNS, Mail Gateway) จะต้องวางอยู่ใน DMZ เพื่อป้องกันไม่ให้ผู้ใช้งานภายนอกเชื่อมต่อเข้าสู่เครือข่ายภายในโดยตรง
:::

:::scenario
id: 3
badge: Scenario 03
topic: Micro-Segmentation & East-West Traffic
situation: ในศูนย์ข้อมูลคลาวด์ของธนาคาร มีระบบเว็บแอปพลิเคชัน 3-Tier (Web, App, Database) แม้ระบบทั้งหมดจะอยู่ในเครือข่ายภายในเดียวกัน แต่ทีมวิศวกรต้องการบังคับใช้นโยบายความปลอดภัยให้แต่ละเวิร์กโหลดสื่อสารกันได้เฉพาะพอร์ตและโพรโทคอลที่จำเป็นอย่างยิ่งยวดเท่านั้น โดยไม่ให้เซิร์ฟเวอร์ Web สื่อสารกับเซิร์ฟเวอร์ Database โดยตรง
question: การควบคุมความปลอดภัยระดับเวิร์กโหลดเพื่อจำกัดการจราจรในแนวราบ (East-West Traffic) เช่นนี้ เรียกว่าอะไร?
answer: Micro-Segmentation — การแบ่งส่วนเครือข่ายระดับย่อย
reasoning: Micro-Segmentation คือการควบคุมความปลอดภัยในระดับเวิร์กโหลดหรือโฮสต์ (Host-level / Workload-level) โดยอาศัยเทคโนโลยี Software-Defined Networking (SDN) หรือ Host-based Firewalls เพื่อควบคุมทราฟฟิกในแนวราบ (East-West Traffic) ระหว่างเซิร์ฟเวอร์ แม้จะอยู่ในเครือข่ายย่อยเดียวกันก็ตาม
:::

:::scenario
id: 4
badge: Scenario 04
topic: Defense in Depth (Layered Defense)
situation: องค์กรได้ติดตั้งไฟร์วอลล์ที่มีประสิทธิภาพสูงที่ขอบเขตเครือข่ายภายนอกแล้ว แต่ผู้บริหารฝ่ายความมั่นคงปลอดภัยยังสั่งการให้ติดตั้งโปรแกรม EDR บนเครื่องปลายทาง เข้ารหัสข้อมูลในฐานข้อมูล บังคับใช้การยืนยันตัวตนแบบหลายปัจจัย (MFA) และจัดอบรมสร้างความตระหนักรู้แก่พนักงานอย่างต่อเนื่อง
question: กลยุทธ์การป้องกันความมั่นคงปลอดภัยที่ใช้การควบคุมหลายชั้นซ้อนกัน เพื่อไม่ให้ความล้มเหลวของจุดใดจุดหนึ่งทำให้ระบบพังทลาย เรียกว่าอะไร?
answer: Defense in Depth — กลยุทธ์การป้องกันแบบเชิงลึกหลายชั้น
reasoning: Defense in Depth (Layered Defense) คือหลักการวางมาตรการควบคุมความมั่นคงปลอดภัยหลายระดับชั้น (Perimeter, Network, Endpoint, Application, Data) เพื่อให้หากมาตรการชั้นใดชั้นหนึ่งล้มเหลว มาตรการในชั้นถัดไปยังคงสามารถตรวจจับ ป้องกัน และบรรเทาภัยคุกคามได้ ป้องกัน Single Point of Failure
:::

:::scenario
id: 5
badge: Scenario 05
topic: Zero Trust Architecture (ZTA)
situation: พนักงานคนหนึ่งนำแล็ปท็อปของบริษัทมาเชื่อมต่อสาย LAN ในสำนักงานใหญ่ แต่เมื่อพยายามเข้าถึงฐานข้อมูลลูกค้า ระบบยังคงร้องขอให้ยืนยันตัวตนผ่าน MFA ตรวจสอบความสมบูรณ์ของระบบปฏิบัติการ และประเมินพิกัดสถานที่ก่อนจะอนุญาตให้เข้าถึงข้อมูลได้เฉพาะส่วนที่จำเป็น
question: สถาปัตยกรรมความมั่นคงปลอดภัยที่ยกเลิกแนวคิดความเชื่อถือโดยปริยายจากตำแหน่งที่ตั้งเครือข่าย และยึดหลัก "ไม่เชื่อถือใคร ต้องตรวจสอบทุกครั้งเสมอ" คืออะไร?
answer: Zero Trust Architecture (ZTA) — สถาปัตยกรรมแบบไม่ไว้วางใจสิ่งใด
reasoning: Zero Trust Architecture (NIST SP 800-207) มีหลักการพื้นฐานคือ "Never Trust, Always Verify" โดยไม่เชื่อถือผู้ใช้หรืออุปกรณ์ใด ๆ แม้ว่าจะอยู่ภายในเครือข่ายภายในองค์กรก็ตาม ทุกคำขอเข้าถึงทรัพยากรจะต้องได้รับการยืนยันตัวตนและตรวจสอบสิทธิ์ตามบริบท (Context) อย่างเข้มงวดตลอดเวลา
:::

:::scenario
id: 6
badge: Scenario 06
topic: IaaS Shared Responsibility (OS Patching)
situation: บริษัทได้เช่าเครื่อง Virtual Machine (VM) บนระบบคลาวด์แบบ IaaS จากผู้ให้บริการ ต่อมาพบว่าระบบปฏิบัติการ (OS) ของ VM นั้นมีช่องโหว่ร้ายแรงที่ต้องติดตั้ง Security Patch ทันที
question: ภายใต้โมเดลความรับผิดชอบร่วมบนระบบคลาวด์ (Shared Responsibility Model) หน้าที่ในการติดตั้งและอัปเดตแพตช์ระบบปฏิบัติการของ VM ใน IaaS เป็นของฝ่ายใด?
answer: Customer (ผู้ใช้บริการคลาวด์)
reasoning: ในโมเดล Infrastructure as a Service (IaaS) ผู้ให้บริการคลาวด์ (CSP) รับผิดชอบโครงสร้างพื้นฐานทางกายภาพและ Hypervisor เท่านั้น ส่วนระบบปฏิบัติการ (Guest OS), ซอฟต์แวร์แอปพลิเคชัน, ข้อมูล และการตั้งค่าความปลอดภัย เป็นความรับผิดชอบของลูกค้า (Customer) ทั้งหมด
:::

:::scenario
id: 7
badge: Scenario 07
topic: PaaS Shared Responsibility (Application Code)
situation: ทีมนักพัฒนาซอฟต์แวร์เลือกใช้บริการ Platform as a Service (PaaS) ในการรันเว็บแอปพลิเคชัน โดยผู้ให้บริการคลาวด์เป็นผู้ดูแลระบบปฏิบัติการและรันไทม์ (Runtime Environment) ให้ทั้งหมด ต่อมาพบว่าแอปพลิเคชันถูกโจมตีด้วยช่องโหว่ SQL Injection ในซอร์สโค้ด
question: ฝ่ายใดเป็นผู้รับผิดชอบต่อความมั่นคงปลอดภัยของโค้ดโปรแกรม (Application Code) ภายใต้โมเดล PaaS?
answer: Customer (ผู้ใช้บริการคลาวด์)
reasoning: ในโมเดล Platform as a Service (PaaS) ผู้ให้บริการคลาวด์ดูแลฮาร์ดแวร์, เครือข่าย, OS และ Middleware ให้ แต่โค้ดของแอปพลิเคชัน (Source Code), การจัดการข้อมูล (Data) และการกำหนดสิทธิ์ผู้ใช้งาน (User Access) ยังคงเป็นความรับผิดชอบของลูกค้าอย่างเต็มที่
:::

:::scenario
id: 8
badge: Scenario 08
topic: Customer Responsibility Across Cloud Models
situation: องค์กรจัดเก็บข้อมูลความลับของลูกค้าไว้ในบริการคลาวด์แบบ Software as a Service (SaaS) ต่อมาผู้ดูแลระบบขององค์กรได้ตั้งค่าสิทธิ์ให้โฟลเดอร์ดังกล่าวเป็นแบบ "Public Accessible" ส่งผลให้บุคคลภายนอกสามารถดาวน์โหลดข้อมูลความลับออกไปได้
question: ไม่ว่าจะใช้งานคลาวด์โมเดลใด (IaaS, PaaS หรือ SaaS) หน้าที่ในการจำแนกประเภทข้อมูลและการบริหารจัดการสิทธิ์การเข้าถึง (Data & IAM) เป็นของใครเสมอ?
answer: Customer (ผู้ใช้บริการคลาวด์เสมอ — ไม่สามารถส่งมอบความรับผิดชอบนี้ให้ CSP ได้)
reasoning: กฎทองของโมเดลความรับผิดชอบร่วมบนคลาวด์คือ ไม่ว่าองค์กรจะใช้โมเดล IaaS, PaaS หรือ SaaS ก็ตาม ทรัพย์สินที่ลูกค้าเป็นผู้รับผิดชอบ 100% เสมอคือ "ข้อมูล (Data & Information)" และ "การบริหารจัดการตัวตนและสิทธิ์การเข้าถึง (IAM & Access Control)" ผู้ให้บริการคลาวด์ไม่สามารถรับผิดชอบแทนได้
:::

:::scenario
id: 9
badge: Scenario 09
topic: Hybrid Cloud Deployment Model
situation: สถาบันการเงินแห่งหนึ่งจัดเก็บฐานข้อมูลบัญชีเงินฝากของลูกค้าไว้ในศูนย์ข้อมูลส่วนตัว (Private Data Center) ของตนเองเพื่อปฏิบัติตามกฎหมาย แต่ใช้คลาวด์สาธารณะ (Public Cloud) ในการรันระบบวิเคราะห์ข้อมูลขนาดใหญ่ที่ต้องการพลังประมวลผลสูง โดยมีการเชื่อมต่อเครือข่ายอย่างปลอดภัยระหว่างสองระบบ
question: รูปแบบการติดตั้งระบบคลาวด์ (Cloud Deployment Model) ที่ผสมผสานระหว่างศูนย์ข้อมูลส่วนตัว (Private) และคลาวด์สาธารณะ (Public) เข้าด้วยกันอย่างแนบแน่น เรียกว่าอะไร?
answer: Hybrid Cloud — คลาวด์แบบผสมผสาน
reasoning: Hybrid Cloud คือการผสมผสานและทำงานร่วมกันระหว่าง Public Cloud และ Private Cloud (หรือ On-premises Data Center) โดยข้อมูลและแอปพลิเคชันสามารถถ่ายโอนและแบ่งปันการทำงานร่วมกันได้อย่างราบรื่นและปลอดภัย ช่วยให้องค์กรได้ทั้งความยืดหยุ่นและการปฏิบัติตามกฎระเบียบ
:::

:::scenario
id: 10
badge: Scenario 10
topic: Community Cloud Deployment Model
situation: โรงพยาบาลและคลินิกเฉพาะทาง 5 แห่งในภูมิภาค ร่วมกันลงทุนเช่าโครงสร้างพื้นฐานระบบคลาวด์เพื่อแลกเปลี่ยนข้อมูลประวัติการรักษาของผู้ป่วย โดยระบบคลาวด์นี้จำกัดการเข้าถึงเฉพาะสมาชิกทั้ง 5 แห่งที่มีพันธสัญญาทางกฎหมายและมาตรฐานความปลอดภัยด้านสาธารณสุขเดียวกันเท่านั้น
question: โมเดลการติดตั้งคลาวด์ที่สร้างขึ้นเพื่อใช้งานร่วมกันเฉพาะกลุ่มองค์กรที่มีภารกิจ กฎหมาย หรือข้อกำหนดความปลอดภัยร่วมกัน เรียกว่าอะไร?
answer: Community Cloud — คลาวด์สำหรับกลุ่มองค์กรเฉพาะ
reasoning: Community Cloud คือโครงสร้างพื้นฐานระบบคลาวด์ที่สร้างขึ้นและแชร์กันเฉพาะกลุ่มองค์กร (Community) ที่มีข้อกำหนด วัตถุประสงค์ นโยบาย หรือภาระผูกพันด้านกฎหมายความปลอดภัยร่วมกัน โดยไม่เปิดให้บุคคลภายนอกหรือสาธารณชนทั่วไปเข้าใช้งาน
:::

:::scenario
id: 11
badge: Scenario 11
topic: Multi-Cloud Strategy & Risk Mitigation
situation: บริษัทสตาร์ทอัพด้านเทคโนโลยีเลือกใช้บริการเซิร์ฟเวอร์ประมวลผลจาก Amazon Web Services (AWS) ขณะเดียวกันก็เลือกใช้บริการปัญญาประดิษฐ์จาก Google Cloud Platform (GCP) และใช้บริการจัดการตัวตนจาก Microsoft Azure เพื่อลดความเสี่ยงจากการพึ่งพาผู้ให้บริการรายเดียว
question: กลยุทธ์การใช้งานผู้ให้บริการคลาวด์มากกว่าหนึ่งรายเพื่อป้องกันการผูกขาด (Vendor Lock-in) และเพิ่มความยืดหยุ่น เรียกว่าอะไร?
answer: Multi-Cloud — กลยุทธ์การใช้คลาวด์หลายผู้ให้บริการ
reasoning: Multi-Cloud คือการที่องค์กรเลือกใช้บริการจากผู้ให้บริการคลาวด์ (CSP) ตั้งแต่ 2 รายขึ้นไปพร้อมกัน เพื่อกระจายความเสี่ยง หลีกเลี่ยงการถูกผูกขาดจากผู้ให้บริการรายเดียว (Vendor Lock-in) และสามารถเลือกใช้ฟีเจอร์ที่ดีที่สุดจากแต่ละคลาวด์ได้
:::

:::scenario
id: 12
badge: Scenario 12
topic: IoT Security & OT/ICS Segmentation
situation: ในโรงงานอุตสาหกรรม มีการติดตั้งกล้องวงจรปิดอัจฉริยะ (Smart IP Cameras) และเซ็นเซอร์วัดอุณหภูมิเครื่องจักร (IoT Sensors) จำนวนมาก อุปกรณ์เหล่านี้มีระบบปฏิบัติการขนาดเล็กที่อัปเดตแพตช์ได้ยาก และมักมีรหัสผ่านเริ่มต้นติดมากับโรงงาน
question: มาตรการความมั่นคงปลอดภัยเครือข่ายที่สำคัญที่สุดในการป้องกันไม่ให้อุปกรณ์ IoT ตกเป็นช่องทางในการโจมตีระบบคอมพิวเตอร์หลักของโรงงานคืออะไร?
answer: Isolate IoT on a Dedicated VLAN / Segment — การแยกอุปกรณ์ IoT ไว้ในเครือข่ายเฉพาะ
reasoning: อุปกรณ์ IoT และ Embedded Systems มักมีข้อจำกัดด้านฮาร์ดแวร์ อัปเดตแพตช์ยาก และมีความมั่นคงปลอดภัยต่ำ แนวปฏิบัติที่ดีที่สุด (Best Practice) ตามมาตรฐาน ISC2 คือการแยกอุปกรณ์เหล่านี้ไว้ในเครือข่ายย่อยเฉพาะ (Dedicated IoT VLAN / Isolated Segment) พร้อมทั้งจำกัดการสื่อสารเข้าออกด้วยไฟร์วอลล์อย่างเข้มงวด
:::

</section>
