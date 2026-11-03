<section class="reading-structure-pilot">

<h3 id="topic-4-1-fundamentals-topologies">4.1.1 Network Fundamentals &amp; Topologies: พื้นฐานเครือข่ายและขอบเขต</h3>

**Computer Network (เครือข่ายคอมพิวเตอร์)** คือกลุ่มของอุปกรณ์คอมพิวเตอร์ (Nodes หรือ Hosts) สองเครื่องขึ้นไปที่เชื่อมต่อถึงกันผ่านสื่อกลางในการสื่อสาร (Transmission Media) ทั้งแบบใช้สาย (Wired เช่น สายทองแดง UTP, ใยแก้วนำแสง Fiber Optic) หรือไร้สาย (Wireless เช่น คลื่นวิทยุ Radio Frequencies) เพื่อวัตถุประสงค์ในการแลกเปลี่ยนข้อมูลและแบ่งปันทรัพยากรร่วมกัน

<h4 class="reading-concept-group-title">ขอบเขตทางภูมิศาสตร์ของระบบเครือข่าย (Network Scope):</h4>

<section class="reading-definition-unit">
<h5>LAN (Local Area Network):</h5>

เครือข่ายท้องถิ่นในขอบเขตจำกัด เช่น ภายในห้องทำงาน อาคารเดี่ยว หรือวิทยาเขตขนาดเล็ก มีความเร็วสูงและอัตราความผิดพลาดต่ำ

</section>

<section class="reading-definition-unit">
<h5>WAN (Wide Area Network):</h5>

เครือข่ายบริเวณกว้างที่เชื่อมต่อข้ามเมือง ประเทศ หรือข้ามทวีป โดยมีอินเทอร์เน็ต (Internet) เป็นตัวอย่างของ WAN ที่ใหญ่ที่สุดในโลก

</section>

<section class="reading-definition-unit">
<h5>WLAN (Wireless Local Area Network):</h5>

เครือข่ายท้องถิ่นแบบไร้สายตามมาตรฐาน IEEE 802.11 (Wi-Fi)

</section>

<section class="reading-definition-unit">
<h5>PAN (Personal Area Network):</h5>

เครือข่ายส่วนบุคคลระยะใกล้มาก (ประมาณ 10 เมตร) เช่น การเชื่อมต่อผ่าน Bluetooth ระหว่างสมาร์ตโฟนกับหูฟังไร้สาย

</section>

<section class="reading-definition-unit">
<h5>VPN (Virtual Private Network):</h5>

เครือข่ายเสมือนส่วนตัวที่สร้างช่องทางเข้ารหัสข้อมูล (Encrypted Tunnel) ผ่านเครือข่ายสาธารณะที่ไม่ปลอดภัยอย่างอินเทอร์เน็ต

</section>


<h4 class="reading-concept-group-title">การแบ่งขอบเขตการชนกันและการแพร่กระจายสัญญาณ (Collision &amp; Broadcast Domains):</h4>

<section class="reading-definition-unit">
<h5>Collision Domain (ขอบเขตการชนกันของสัญญาณ):</h5>

พื้นที่ทางตรรกะในเครือข่ายที่หากมีอุปกรณ์สองเครื่องส่งข้อมูลออกมาพร้อมกัน สัญญาณจะชนกัน (Collision) ทำให้อุปกรณ์อื่นต้องรอ อุปกรณ์อย่าง Hub สร้างเพียง 1 Collision Domain รวมกันทั้งหมด ในขณะที่ Switch แยกแต่ละพอร์ตออกเป็น 1 Collision Domain อิสระ

</section>

<section class="reading-definition-unit">
<h5>Broadcast Domain (ขอบเขตการแพร่สัญญาณ):</h5>

พื้นที่ในเครือข่ายที่เมื่ออุปกรณ์ส่งแพ็กเก็ตแบบ Broadcast (Ethernet ใช้ FF:FF:FF:FF:FF:FF; IPv4 subnet-directed broadcast มีบิตส่วน host เป็น 1 ทั้งหมด เช่น 192.168.1.255 สำหรับ 192.168.1.0/24 ต้องดู subnet mask ไม่ใช่ .255 เพียงอย่างเดียว) อุปกรณ์ทุกตัวในขอบเขตนั้นจะได้รับข้อมูล Hub และ Switch ปกติไม่สามารถกั้น Broadcast Domain ได้ มีเพียง **Router** หรือการแบ่ง **VLAN** เท่านั้นที่สามารถแบ่งแยก Broadcast Domain ออกจากกัน

</section>


<h4 class="reading-concept-group-title">ขอบเขตการเข้าถึงทางสถาปัตยกรรม:</h4>

<section class="reading-definition-unit">
<h5>Intranet:</h5>

เครือข่ายภายในองค์กรที่จำกัดให้เข้าถึงได้เฉพาะพนักงานขององค์กรเท่านั้น

</section>

<section class="reading-definition-unit">
<h5>Extranet:</h5>

เครือข่ายภายในที่เปิดให้คู่ค้า พันธมิตรทางธุรกิจ หรือลูกค้าที่ได้รับอนุญาตสามารถเข้าถึงได้บางส่วนผ่านการยืนยันตัวตนที่ปลอดภัย

</section>

<section class="reading-definition-unit">
<h5>Internet:</h5>

เครือข่ายสาธารณะทั่วโลกที่เชื่อมต่อเครือข่ายนับล้านเข้าด้วยกัน และไม่มีหน่วยงานใดหน่วยงานหนึ่งเป็นเจ้าของแต่เพียงผู้เดียว

</section>

</section>

<section class="reading-structure-pilot">

<h3 id="topic-4-1-osi-model">4.1.2 OSI 7-Layer Reference Model: แบบจำลองอ้างอิง 7 ชั้น</h3>

ในปี 1984 องค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) ได้กำหนดมาตรฐาน **OSI 7-Layer Reference Model (Open Systems Interconnection)** ขึ้น เพื่อเป็นกรอบแนวคิดเชิงตรรกะสำหรับการออกแบบและทำความเข้าใจกระบวนการสื่อสารระหว่างระบบคอมพิวเตอร์ที่หลากหลาย

หลักการจำลำดับชั้นของแบบจำลอง OSI จากชั้นล่างสุด (Layer 1) ไปสู่ชั้นบนสุด (Layer 7):
<span class="reading-math-formula">Please Do Not Throw Sausage Pizza Away (Layer 1 → Layer 7)</span>

รายละเอียดของแบบจำลองทั้ง 7 ชั้น:

<section class="reading-layer-unit">
<h4>Layer 7 — Application Layer (ชั้นการประยุกต์):</h4>

- ทำหน้าที่เป็นจุดเชื่อมต่อระหว่างผู้ใช้งานหรือโปรแกรมประยุกต์กับบริการเครือข่าย
- โพรโทคอลสำคัญ: HTTP, HTTPS, DNS, SSH, FTP, SFTP, SMTP, DHCP, Telnet
- หน่วยข้อมูล (PDU): Data / Messages

</section>

<section class="reading-layer-unit">
<h4>Layer 6 — Presentation Layer (ชั้นการนำเสนอข้อมูล):</h4>

- ทำหน้าที่จัดรูปแบบ แปลงรหัสข้อมูล (Data Formatting), การบีบอัดข้อมูล (Compression) และการเข้ารหัส/ถอดรหัสความปลอดภัย (Encryption / Decryption)
- มาตรฐานสำคัญ: TLS/SSL, ASCII, Unicode, JSON, XML, JPEG, MP4
- หน่วยข้อมูล (PDU): Data

</section>

<section class="reading-layer-unit">
<h4>Layer 5 — Session Layer (ชั้นเซสชัน):</h4>

- ทำหน้าที่สร้าง (Establish), บริหารจัดการ (Maintain) และยกเลิกการเชื่อมต่อเซสชัน (Terminate) ระหว่างสองแอปพลิเคชัน
- โพรโทคอลที่มักใช้เป็นตัวอย่าง: RPC (Remote Procedure Call), NetBIOS
- Session Layer เป็นแนวคิดการสร้าง บริหาร และยุติเซสชันระหว่างแอปพลิเคชัน ส่วน sockets เป็น API/นามธรรมของจุดปลายการสื่อสารที่แอปใช้เรียกบริการเครือข่าย ไม่ใช่โพรโทคอลประจำ Session Layer
- หน่วยข้อมูล (PDU): Data

</section>

<section class="reading-layer-unit">
<h4>Layer 4 — Transport Layer (ชั้นการขนส่งข้อมูล):</h4>

- ทำหน้าที่ส่งข้อมูลแบบจุดต่อจุดระหว่างโฮสต์ (Host-to-Host End-to-End Communication), ควบคุมการไหลของข้อมูล (Flow Control), ตรวจจับข้อผิดพลาด และกำหนดหมายเลขพอร์ต (Port Numbers)
- โพรโทคอลสำคัญ: TCP (เน้นความน่าเชื่อถือ ตรวจสอบข้อมูล) และ UDP (เน้นความรวดเร็ว ไม่มีการจับมือ)
- หน่วยข้อมูล (PDU): **Segment** (สำหรับ TCP) หรือ **Datagram** (สำหรับ UDP)

</section>

<section class="reading-layer-unit">
<h4>Layer 3 — Network Layer (ชั้นเครือข่าย):</h4>

- ทำหน้าที่กำหนดหมายเลขที่อยู่เชิงตรรกะ (Logical IP Addressing) และเลือกเส้นทางการส่งข้อมูลข้ามเครือข่าย (Routing)
- โพรโทคอลและอุปกรณ์: IPv4, IPv6, ICMP, IPsec, Routers, Layer 3 Switches
- หน่วยข้อมูล (PDU): **Packet**

</section>

<section class="reading-layer-unit">
<h4>Layer 2 — Data Link Layer (ชั้นเชื่อมโยงข้อมูล):</h4>

- ทำหน้าที่ควบคุมการเข้าถึงสื่อกลาง (Media Access Control: MAC), กำหนดหมายเลขที่อยู่ทางกายภาพ (Physical MAC Address), ตรวจจับข้อผิดพลาดในระดับเฟรม
- โพรโทคอลและอุปกรณ์: Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), Switches, Bridges, Network Interface Cards (NIC)
- แบ่งออกเป็น 2 ชั้นย่อย: LLC (Logical Link Control) และ MAC (Media Access Control)
- หน่วยข้อมูล (PDU): **Frame**

</section>

<section class="reading-layer-unit">
<h4>Layer 1 — Physical Layer (ชั้นกายภาพ):</h4>

- ทำหน้าที่แปลงข้อมูลดิจิทัลให้เป็นสัญญาณทางกายภาพ (ไฟฟ้า, แสง, คลื่นวิทยุ) เพื่อส่งผ่านตัวกลาง
- อุปกรณ์และสื่อกลาง: สายทองแดง UTP (RJ45), ใยแก้วนำแสง (Fiber Optic), Hubs, Repeaters, เสาสัญญาณไร้สาย
- หน่วยข้อมูล (PDU): **Bits** (0 และ 1)

</section>

<h4 class="reading-concept-group-title">กระบวนการห่อหุ้มและการแกะข้อมูล (Encapsulation &amp; Decapsulation):</h4>

- **Encapsulation (จากบนลงล่าง):** เมื่อส่งข้อมูล ข้อมูลดิบจากแอปพลิเคชัน (Data) จะถูกเติมส่วนหัว (Header) ในแต่ละชั้น: Data → Segments (เติม TCP/UDP Header ที่มี Port) → Packets (เติม IP Header ที่มี Source/Dest IP) → Frames (เติม MAC Header และ FCS Trailer) → Bits (แปลงเป็นสัญญาณไฟฟ้าส่งออกไป)
- **Decapsulation (จากล่างขึ้นบน):** เมื่อฝั่งรับได้รับสัญญาณ จะทำการถอดส่วนหัวออกทีละชั้นย้อนกลับขึ้นไปจนถึงระดับแอปพลิเคชัน

</section>

