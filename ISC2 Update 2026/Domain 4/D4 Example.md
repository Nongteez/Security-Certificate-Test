# ISC2 CC 2026 — Domain 4 ฉบับครบ + ตัวอย่างประกอบทุกหัวข้อ

> **เอกสารฉบับขยาย:** รวมเนื้อหาจาก Master Notes เดิมทั้งหมดและเพิ่มตัวอย่างปฏิบัติแยกตามหัวข้อ 4.1–4.3 (หัวข้อในเอกสารใช้เลขบท 2.x, 3.x, 4.x)
> **สถานะตัวอย่าง:** ตัวอย่างที่เพิ่มเป็นสถานการณ์สมมุติสำหรับอธิบาย ไม่ใช่ข้อสอบจริงหรือข้อความจากสไลด์โดยตรง
> **หมายเหตุ:** Data Masking เป็นตัวอย่างเสริมในหัวข้อ Cloud Data Protection ไม่ใช่การอ้างว่าเป็นหัวข้อหลักที่เรียนใน Domain 4

---

# ISC2 Certified in Cybersecurity (CC) 2026 — Domain 4
## Network & Cloud Security Concepts | ฉบับละเอียด + เนื้อหาเสริม + ตัวอย่างข้อสอบ

> **วิธีอ่าน:** ส่วน **[จากสไลด์]** สรุปหัวข้อที่ปรากฏในสไลด์ที่ส่งในบทสนทนา ส่วน **[เสริม]** เพิ่มความเข้าใจเชิงปฏิบัติและประเด็นที่เกี่ยวข้องสำหรับเตรียมสอบ ไม่ใช่ข้อความอ้างตรงจากสไลด์หรือข้อสอบจริงของ ISC2  
> **ขอบเขต:** ครอบคลุม Objective 4.1 พื้นฐานเครือข่าย, 4.2 สถาปัตยกรรมความปลอดภัยเครือข่าย และ 4.3 Cloud Security โดย 4.1 เติมรายละเอียดเชิงพื้นฐานเพื่อให้ชุดโน้ตสมบูรณ์ เนื่องจากสไลด์ที่มองเห็นในบทสนทนานี้เน้นช่วง Applications/Embedded/ICS/IoT, 4.2 และ 4.3

---

# สารบัญ
1. ภาพรวมและวิธีคิดสำหรับข้อสอบ
2. Objective 4.1 — Network Concepts และพื้นฐานการสื่อสาร
3. Objective 4.2 — Network Security Architecture
4. Objective 4.3 — Cloud Security
5. ตารางจำเร็วและจุดที่มักสับสน
6. สถานการณ์ฝึกคิดพร้อมเฉลย
7. Checklist ทบทวนก่อนสอบ

---

# 1. ภาพรวมและวิธีคิดสำหรับข้อสอบ

**Domain 4** เชื่อมโยงว่าอุปกรณ์ส่งข้อมูลถึงกันอย่างไร, ออกแบบเครือข่ายให้ลดโอกาสโจมตีและจำกัดความเสียหายอย่างไร, และเมื่อใช้ Cloud ใครต้องรับผิดชอบความปลอดภัยส่วนใด

- **Confidentiality:** ไม่ให้ผู้ไม่มีสิทธิ์อ่านข้อมูล เช่น TLS, VPN, ACL, IAM
- **Integrity:** ป้องกัน/ตรวจจับการเปลี่ยนข้อมูลโดยไม่ได้รับอนุญาต เช่น hash, digital signature
- **Availability:** ระบบพร้อมใช้งาน เช่น redundancy, failover, monitoring, DDoS protection
- **Least privilege:** อนุญาตเท่าที่จำเป็น
- **Defense in depth:** มีการควบคุมหลายชั้น ไม่พึ่งพากลไกเดียว
- **Segmentation:** แบ่งเครือข่ายเพื่อลด lateral movement และ blast radius
- **Shared responsibility:** ใช้บริการ Cloud ไม่ได้หมายความว่าผู้ให้บริการรับผิดชอบทุกอย่าง

**วิธีตอบโจทย์:** ระบุสินทรัพย์ → ระบุภัยคุกคาม → ดูว่าโจทย์เน้น CIA ด้านใด → เลือกมาตรการที่ลดความเสี่ยงได้ตรงที่สุดโดยไม่ขัดความต้องการทางธุรกิจ/ความปลอดภัยของชีวิต

---

# 2. Objective 4.1 — Network Concepts [เสริมพื้นฐาน]

## 2.1 Network, LAN, WAN, Internet และ Intranet

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** สำนักงานมี PC 20 เครื่องต่อ Switch เป็น LAN; สำนักงานกรุงเทพฯ ติดต่อสาขาเชียงใหม่ผ่าน WAN; `intranet.company.local` ใช้ภายใน ขณะที่ `www.company.example` เปิดสู่ Internet
>
> **🎯 จุดจำสำหรับสอบ:** LAN ไม่ใช่ Internet; VPN เป็นวิธีเชื่อมต่ออย่างปลอดภัย ไม่ใช่ชนิดระยะทางเครือข่าย


**Network** คือการเชื่อมอุปกรณ์เพื่อแลกเปลี่ยนข้อมูล/ใช้ทรัพยากรร่วมกัน; **LAN** คือเครือข่ายภายในพื้นที่จำกัด เช่น สำนักงาน; **WAN** เชื่อมระยะไกลหลายสถานที่; **Internet** คือเครือข่ายสาธารณะระดับโลก; **Intranet** เป็นบริการ/เครือข่ายภายในองค์กรที่ใช้เทคโนโลยีอินเทอร์เน็ต; **Extranet** เปิดบริการบางส่วนแก่คู่ค้าหรือผู้ได้รับอนุญาต

- **Bandwidth:** ความสามารถรองรับปริมาณข้อมูลต่อหน่วยเวลา (เช่น Mbps)
- **Throughput:** ปริมาณข้อมูลที่ส่งสำเร็จจริง
- **Latency:** ระยะเวลาหน่วง
- **Jitter:** ความแปรปรวนของ latency
- **Packet loss:** แพ็กเก็ตสูญหาย

ตัวอย่าง: วิดีโอคอลอาจมี bandwidth มากแต่เสียงกระตุกเพราะ jitter/packet loss สูง

## 2.2 OSI Model — 7 Layers

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** เปิด `https://example.com`: L7 HTTP request → L4 TCP segment → L3 IP packet → L2 Ethernet frame → L1 bits; ฝั่งรับถอดห่อกลับขึ้นมา (decapsulation)
>
> **🎯 จุดจำสำหรับสอบ:** จำ Layer 2 = MAC/Switch, Layer 3 = IP/Router, Layer 4 = TCP/UDP


| ชั้น | ชื่อ | หน้าที่หลัก | ตัวอย่าง |
|---|---|---|---|
| 7 | Application | บริการเครือข่ายแก่แอป | HTTP, DNS, SMTP |
| 6 | Presentation | รูปแบบ/เข้ารหัส/แปลงข้อมูล | การเข้ารหัสและ encoding ในเชิงแนวคิด |
| 5 | Session | จัดการ session การสื่อสาร | การเริ่ม/รักษา/สิ้นสุด session |
| 4 | Transport | สื่อสารระหว่าง process, ports | TCP, UDP |
| 3 | Network | IP addressing, routing | IP, router, ICMP |
| 2 | Data Link | Frame, MAC, สื่อสารในลิงก์ | Ethernet, switch, VLAN |
| 1 | Physical | สัญญาณและสื่อส่ง | สายทองแดง, fiber, radio |

**จำลำดับบนลงล่าง:** All People Seem To Need Data Processing.  
**PDU:** L4 segment (TCP) / datagram (UDP), L3 packet, L2 frame, L1 bits.

**ตัวอย่างเว็บ:** Browser สร้าง HTTP request (L7) → TCP หรือ QUIC/UDP (L4) → IP (L3) → Ethernet/Wi-Fi (L2/L1). หมายเหตุ HTTP/3 ใช้ QUIC บน UDP ไม่ใช่ TCP เสมอไป

## 2.3 TCP/IP Model

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ส่งข้อความผ่านเว็บ: Application = HTTPS; Transport = TCP; Internet = IP; Link = Ethernet/Wi-Fi
>
> **🎯 จุดจำสำหรับสอบ:** OSI เป็นแบบจำลอง 7 ชั้น ส่วน TCP/IP มักอธิบายเป็น 4 ชั้น


| TCP/IP | เทียบ OSI โดยประมาณ |
|---|---|
| Application | 5–7 |
| Transport | 4 |
| Internet | 3 |
| Link/Network Access | 1–2 |

OSI เป็นแบบจำลองอธิบายแนวคิด; TCP/IP เป็นชุดโปรโตคอลที่ใช้งานจริง ความเทียบกันไม่ใช่ 1:1 ทุกกรณี

## 2.4 TCP vs UDP

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** โหลดไฟล์ 10 MB ผ่าน HTTPS/TCP ต้องการข้อมูลครบและเรียงลำดับ; วิดีโอคอลผ่าน UDP อาจยอมเสียบาง packet เพื่อให้เสียงไม่หน่วง
>
> **🎯 จุดจำสำหรับสอบ:** UDP ไม่ได้แปลว่าเร็วกว่าเสมอ และ DNS ใช้ทั้ง UDP/TCP


| TCP | UDP |
|---|---|
| Connection-oriented, ใช้ handshake | Connectionless |
| มี sequence, acknowledgment, retransmission | ไม่มีการรับประกันส่งถึงในตัวโปรโตคอล |
| ควบคุมลำดับและความน่าเชื่อถือ | overhead ต่ำ เหมาะกับงานที่ยอมรับ loss/จัดการเองได้ |
| SSH, SMTP, HTTPS over HTTP/1.1/2 | DNS ส่วนใหญ่, VoIP, streaming บางชนิด, QUIC |

**TCP three-way handshake:** SYN → SYN-ACK → ACK. **UDP ไม่เท่ากับไม่ปลอดภัย** เพราะความปลอดภัยขึ้นกับโปรโตคอลชั้นบนด้วย เช่น QUIC ใช้ TLS 1.3

## 2.5 IP Addressing, IPv4, IPv6

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** PC `192.168.10.25` ติดต่อ Server `192.168.10.50`; IPv6 ตัวอย่าง `2001:db8::10` (ที่อยู่สำหรับเอกสาร)
>
> **🎯 จุดจำสำหรับสอบ:** `192.168.x.x` เป็น IPv4 private; `2001:db8::/32` เป็นช่วงตัวอย่าง ไม่ใช่ public address สำหรับใช้งานจริง


IPv4 ยาว 32 บิต เช่น `192.168.10.25`; IPv6 ยาว 128 บิต เช่น `2001:db8::1` (ตัวอย่างเอกสาร)

**IPv4 private ranges (RFC 1918):**
- `10.0.0.0/8`
- `172.16.0.0/12` (172.16–172.31)
- `192.168.0.0/16`

**Loopback:** `127.0.0.1` (IPv4), `::1` (IPv6); **IPv4 link-local/APIPA:** `169.254.0.0/16`; **IPv6 link-local:** `fe80::/10`.

**Public IP** ใช้สำหรับการกำหนดเส้นทางบนอินเทอร์เน็ตได้ตามนโยบายและการจัดสรร; **private IP** ไม่ถูก route บนอินเทอร์เน็ตสาธารณะโดยตรง

## 2.6 Subnet Mask และ CIDR [เสริมที่เคยถาม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** `192.168.10.0/24` มี 256 addresses โดยทั่วไปใช้ host ได้ 254; `192.168.10.0/26` มี 64 addresses ใช้ host ได้ 62: Network `.0`, hosts `.1–.62`, Broadcast `.63`
>
> **🎯 จุดจำสำหรับสอบ:** /26 มี subnet mask `255.255.255.192`; อย่าสับสนจำนวน address ทั้งหมดกับจำนวน usable hosts


`/24` หมายถึง 24 บิตแรกเป็น network prefix → mask `255.255.255.0`. IPv4 เหลือ 8 host bits → 256 addresses และโดยทั่วไป 254 usable hosts ใน subnet แบบปกติ (ข้อยกเว้น /31, /32)

| CIDR | Subnet mask | ที่อยู่ทั้งหมด | Usable โดยทั่วไป |
|---|---|---:|---:|
| /8 | 255.0.0.0 | 16,777,216 | 16,777,214 |
| /16 | 255.255.0.0 | 65,536 | 65,534 |
| /24 | 255.255.255.0 | 256 | 254 |
| /25 | 255.255.255.128 | 128 | 126 |
| /26 | 255.255.255.192 | 64 | 62 |
| /27 | 255.255.255.224 | 32 | 30 |
| /28 | 255.255.255.240 | 16 | 14 |
| /30 | 255.255.255.252 | 4 | 2 |

**สูตร:** จำนวน IP = `2^(32-prefix)`; usable โดยทั่วไป = `2^(32-prefix)-2`.  
**ตัวอย่าง:** `192.168.1.70/26` → ช่วง block ขนาด 64: network `192.168.1.64`, broadcast `.127`, host `.65–.126`.

## 2.7 MAC, ARP, Routing, Switching

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** PC A รู้ IP ของ Gateway `192.168.1.1` แต่ไม่รู้ MAC จึงส่ง ARP Request; Switch เรียนรู้ Source MAC และส่ง Frame ไปพอร์ตที่เหมาะสม; Router ส่งต่อไป Network อื่น
>
> **🎯 จุดจำสำหรับสอบ:** ARP ใช้จับคู่ IPv4 กับ MAC ในเครือข่ายท้องถิ่น; IPv6 ใช้ Neighbor Discovery แทน


- **MAC address:** ที่อยู่ของอินเทอร์เฟซที่ใช้บนลิงก์ L2; ไม่ใช่ตัวแทน identity ที่เชื่อถือได้เสมอไป (spoof ได้)
- **ARP:** หา MAC จาก IPv4 ในเครือข่ายท้องถิ่น; **ARP spoofing/poisoning** ทำให้ส่งข้อมูลผิดปลายทางได้
- **Switch:** ส่ง frame ตาม MAC table ภายใน L2; VLAN แยก broadcast domains
- **Router:** ส่ง IP packet ระหว่าง subnet/เครือข่ายที่ต่างกัน
- **Default gateway:** เราเตอร์ที่ host ใช้ส่งข้อมูลไปนอก subnet
- **ICMP:** ส่งข้อความควบคุม/วินิจฉัย เช่น ping, traceroute (ขึ้นกับ implementation)

## 2.8 NAT และ PAT [เสริมที่เคยถาม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** PAT ตัวอย่างสองเครื่องออก Internet ผ่าน Public IP เดียว:
> ```text
> 192.168.1.10:50001 → 203.0.113.10:40001
> 192.168.1.11:50002 → 203.0.113.10:40002
> ```
> Router ใช้ Translation Table แยกการตอบกลับแต่ละเครื่อง
>
> **🎯 จุดจำสำหรับสอบ:** NAT แปลที่อยู่ IP; PAT แปล IP ร่วมกับ Port; PAT ไม่ใช่ Firewall และไม่แทน Access Control


**NAT (Network Address Translation)** แปลง IP address ระหว่างเครือข่าย เช่น private ↔ public. **PAT (Port Address Translation)** หรือ NAT overload แปลง IP และ port เพื่อให้หลายเครื่องแชร์ public IP เดียวได้

ตัวอย่าง PAT:

```text
192.168.1.10:50001 ─┐
                    ├── Router PAT ── 203.0.113.5:40001 → Internet
192.168.1.20:50002 ─┘              203.0.113.5:40002 → Internet
```

เราเตอร์ใช้ mapping table เพื่อส่ง response กลับเครื่องต้นทางให้ถูกต้อง. **NAT/PAT ไม่ใช่ firewall โดยตัวมันเอง** และไม่ได้แทนการบังคับ policy/ตรวจสอบ traffic

## 2.9 Network Devices

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** PC → Switch → Router → Internet; Firewall อนุญาต TCP 443 และบล็อก TCP 23; IDS แจ้งเตือนเมื่อพบ Traffic น่าสงสัย ส่วน IPS ที่อยู่ในเส้นทางอาจบล็อกได้
>
> **🎯 จุดจำสำหรับสอบ:** Hub กระจาย Frame ไม่เหมือน Switch; IDS ตรวจจับ ส่วน IPS มีความสามารถป้องกัน


| อุปกรณ์ | ทำหน้าที่ | จุดจำสอบ |
|---|---|---|
| Hub | ส่งสัญญาณออกทุกพอร์ต (รุ่นเก่า) | ไม่มีการเรียนรู้ MAC |
| Switch | ส่ง frame ใน LAN | L2, VLAN, MAC table |
| Router | ส่ง packet ข้าม network | L3, IP routing |
| Firewall | อนุญาต/ปฏิเสธตามนโยบาย | Rule, zone, state |
| Wireless AP | เชื่อม Wi-Fi เข้ากับ LAN | WPA2/WPA3, SSID |
| Proxy | ตัวกลางรับ/ส่ง request | Filtering, logging, caching |
| Load balancer | กระจายคำขอไป backend | Availability, scaling |
| IDS | ตรวจจับ/แจ้งเตือน | ไม่จำเป็นต้อง block |
| IPS | ตรวจจับและป้องกัน inline | สามารถ block traffic |
| VPN gateway | สร้าง tunnel เข้ารหัส | Remote/site-to-site access |

## 2.10 Wireless Security [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Wi-Fi สำหรับพนักงานใช้ WPA3-Enterprise และบัญชีเฉพาะคน; Guest SSID แยก VLAN 20 และห้ามเข้าถึง Server VLAN 30
>
> **🎯 จุดจำสำหรับสอบ:** เปลี่ยน Default Password และปิด WPS เมื่อไม่จำเป็น; การซ่อน SSID ไม่ใช่มาตรการป้องกันหลัก


- **SSID** คือชื่อเครือข่าย ไม่ใช่กลไกความปลอดภัย
- **WPA2-AES** และ **WPA3** ใช้ปกป้องการสื่อสารไร้สาย; หลีกเลี่ยง WEP/WPA รุ่นเก่า
- **WPA2/WPA3-Personal** ใช้ shared credential; **Enterprise** ใช้ 802.1X/EAP และระบบยืนยันตัวตน เช่น RADIUS
- **Evil twin:** AP ปลอมชื่อคล้ายของจริง; **Rogue AP:** AP ที่ไม่ได้รับอนุญาต
- แยก Guest Wi-Fi จาก internal network, อัปเดต firmware และปิด WPS เมื่อไม่จำเป็น

## 2.11 Applications และ Protocols [จากสไลด์ + เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Browser เรียก `https://shop.example` ผ่าน TCP 443; Admin ใช้ SSH TCP 22; DNS ค้นชื่อผ่าน UDP/TCP 53; Mail Server ส่ง SMTP TCP 25
>
> **🎯 จุดจำสำหรับสอบ:** Port เป็นค่าทั่วไป ไม่ใช่หลักประกันว่าข้อมูลปลอดภัย; HTTPS ใช้ TLS


**[จากสไลด์]** Application layer (OSI L7) ให้บริการผู้ใช้/อุปกรณ์; สถาปัตยกรรมอาจเป็น client-server หรือ peer-to-peer; อาศัย TCP/UDP ด้านล่าง

| งาน | Protocol | Default port | ประเด็น |
|---|---|---|---|
| Web | HTTP | TCP 80 | ไม่เข้ารหัสโดยตัวมันเอง |
| Secure web | HTTPS | TCP 443; HTTP/3 UDP 443 | TLS ปกป้องการสื่อสาร |
| ส่งเมล server-to-server | SMTP | TCP 25 | อาจใช้ STARTTLS |
| ส่งเมลจาก client | SMTP submission | TCP 587 | มักใช้ STARTTLS |
| ส่งเมลแบบ implicit TLS | SMTPS/submissions | TCP 465 | TLS ตั้งแต่เริ่มเชื่อมต่อ |
| รับเมล | POP3 | TCP 110 | POP3S 995 |
| รับ/ซิงก์เมล | IMAP | TCP 143 | IMAPS 993 |
| File transfer | FTP | TCP 21 control | FTP ปกติไม่เข้ารหัส; data channel แยก |
| Secure file transfer | SFTP | TCP 22 | ใช้ SSH; **ไม่ใช่ FTPS** |
| FTP over TLS | FTPS | TCP 990 (implicit control) | Explicit FTPS มักเริ่ม TCP 21 |
| Remote administration | SSH | TCP 22 | encrypted remote shell/tunneling |
| Remote desktop | RDP | TCP/UDP 3389 | ควรจำกัดการเข้าถึง |
| Name resolution | DNS | UDP/TCP 53 | TCP ใช้ได้หลายกรณี เช่น zone transfer/large responses |
| Address assignment | DHCPv4 | UDP 67/68 | ให้ IP, mask, gateway, DNS |
| Network management | SNMP | UDP 161/162 | เลือก SNMPv3 สำหรับ auth/encryption |
| Time sync | NTP | UDP 123 | สำคัญต่อ logs และการตรวจสอบเหตุการณ์ |
| Directory | LDAP | TCP/UDP 389 | LDAPS TCP 636 |
| File sharing | SMB | TCP 445 | จำกัด exposure; hardening |
| Authentication | Kerberos | TCP/UDP 88 | ใช้ ticket |

**ข้อควรระวัง:** port เป็นค่า default ไม่ใช่หลักฐานว่าทราฟฟิกนั้นปลอดภัยหรือเป็นแอปนั้นจริง; ตรวจสอบ protocol/configuration เพิ่มเติม

## 2.12 DNS และ DHCP [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** DHCP แจก `192.168.1.25/24`, Gateway `192.168.1.1`, DNS `192.168.1.53`; เมื่อผู้ใช้เปิด `portal.example` DNS ตอบ `198.51.100.20`
>
> **🎯 จุดจำสำหรับสอบ:** DHCP = แจกการตั้งค่า IP; DNS = แปลงชื่อเป็นข้อมูลระเบียน เช่น IP


DNS แปลงชื่อ domain เป็น IP (และ record อื่น ๆ). Record สำคัญ: `A` IPv4, `AAAA` IPv6, `CNAME` alias, `MX` mail routing, `TXT` text/policy, `NS` authoritative nameserver, `PTR` reverse lookup. **DNS poisoning** ทำให้ได้คำตอบผิด; DNSSEC ช่วยยืนยันความถูกต้อง/แหล่งที่มาของข้อมูล DNS แต่ไม่ได้เข้ารหัส query โดยตัวมันเอง

DHCPv4 ขั้นตอน **DORA:** Discover → Offer → Request → Acknowledge. Rogue DHCP อาจแจก gateway/DNS ปลอมได้; ป้องกันด้วย DHCP snooping และการควบคุมพอร์ตสวิตช์

---

# 3. Objective 4.2 — Network Security Architecture

## 3.1 Network Segmentation [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** เครื่องบัญชี `10.10.10.15` ถูกมัลแวร์ แต่ ACL ปฏิเสธการเชื่อมต่อไปฐานข้อมูล HR `10.10.30.10:5432` จึงช่วยลด lateral movement
>
> **🎯 จุดจำสำหรับสอบ:** Segmentation ต้องมีกฎบังคับจริง มิฉะนั้นแค่แบ่ง Subnet อาจยังสื่อสารข้ามกันได้


แบ่งเครือข่ายเป็นส่วนย่อยที่แยกกันเพื่อ **จำกัดการแพร่กระจายการโจมตี, ควบคุม traffic, ลด lateral movement, จำกัด blast radius, และจัด policy เฉพาะแต่ละส่วน**. บางรูปแบบช่วยลด broadcast และเพิ่มประสิทธิภาพ

ตัวอย่าง:

```text
Internet
   │
Firewall
   ├── DMZ (public web)
   ├── VLAN 10 Employees
   ├── VLAN 20 Guests ── Internet only
   ├── VLAN 30 Servers
   └── VLAN 40 IoT ── only allowed to management service
```

**หลักสำคัญ:** แยก network อย่างเดียวไม่พอ ต้องมี **enforcement** เช่น ACL, firewall, security group; การ routing แบบ unrestricted ทำให้แยก VLAN แล้วแต่ยังเข้าถึงกันได้

## 3.2 Firewall Zones [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Outside → DMZ อนุญาต TCP 443; DMZ → Inside อนุญาตเฉพาะ App Server TCP 8443; Outside → Inside ปฏิเสธทั้งหมด
>
> **🎯 จุดจำสำหรับสอบ:** Zone คือการจัดกลุ่มตาม Trust/Policy ไม่ได้แปลว่าภายในปลอดภัยเสมอ


Zone คือการจัดกลุ่ม interfaces/systems/traffic ตาม **trust level** และความต้องการด้าน security. Firewall บังคับ policy ระหว่าง zones

- **Outside/Untrusted:** Internet/เครือข่ายสาธารณะ
- **Inside/Trusted:** เครือข่ายภายในองค์กร (แต่ไม่ควรเชื่อถือทุกเครื่องโดยอัตโนมัติ)
- **DMZ:** เครือข่ายที่รองรับบริการ public-facing
- **Management:** สำหรับบริหารอุปกรณ์/ระบบ แยกจากทราฟฟิกผู้ใช้

**ตัวอย่าง policy:** Internet → DMZ TCP 443 อนุญาต; Internet → Internal database ปฏิเสธ; Admin subnet → Management ผ่าน SSH พร้อม MFA/jump host อนุญาตเฉพาะผู้มีสิทธิ์

## 3.3 DMZ (Demilitarized Zone) [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ```text
> Internet → Firewall → [DMZ: Web 10.0.20.10] → Firewall → [Inside: DB 10.0.30.10]
> ```
> Internet เข้าถึง Web TCP 443 แต่ไม่สามารถเชื่อมตรง DB TCP 5432
>
> **🎯 จุดจำสำหรับสอบ:** DMZ ลดการเปิดเผย Internal Network; Web Server ถูกยึดก็ยังต้องพึ่ง Policy ป้องกันการลุกลาม


DMZ แยกบริการที่ผู้ใช้ภายนอกต้องเข้าถึง (web server, email gateway, reverse proxy) จากระบบภายใน ช่วยลดความเสี่ยงเมื่อ public-facing server ถูก compromise

**แนวคิดสองชั้น:**

```text
Internet → External firewall → DMZ → Internal firewall → Internal network
```

สามารถใช้ firewall ตัวเดียวหลาย interface/zone ได้เช่นกัน; สไลด์อธิบาย external/internal firewall ในเชิงแนวคิด ไม่ได้บังคับว่าต้องมีสองอุปกรณ์เสมอไป

**โจทย์:** ต้องเปิดเว็บสาธารณะ แต่ห้ามเข้าฐานข้อมูลภายในโดยตรง → วาง web/reverse proxy ใน DMZ และอนุญาตเฉพาะ backend flow ที่จำเป็น

## 3.4 VLAN (Virtual LAN) [จากสไลด์ + เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** VLAN 10 Employees `192.168.10.0/24`; VLAN 20 Guests `192.168.20.0/24`; VLAN 30 Servers `192.168.30.0/24`; Router/Layer 3 Switch ต้องทำ Inter-VLAN Routing ก่อนข้าม VLAN
>
> **🎯 จุดจำสำหรับสอบ:** VLAN เป็น Logical Separation ไม่ใช่ Firewall; ใช้ ACL คุมการข้าม VLAN


VLAN แบ่งเครือข่าย Layer 2 เชิงตรรกะบนอุปกรณ์กายภาพร่วมกัน โดยทั่วไปแต่ละ VLAN เป็น **broadcast domain** แยกกัน

- VLAN 10 Employees
- VLAN 20 Guests
- VLAN 30 Servers

**Access port:** ปกติรับส่ง traffic ของ VLAN เดียวแบบ untagged. **Trunk port:** ส่งหลาย VLAN โดยใช้ 802.1Q tagging. **Inter-VLAN routing:** ต้องใช้ L3 switch/router; ควบคุมการเข้าถึงด้วย ACL/firewall

**ARP broadcast** ปกติไม่ข้าม VLAN; **VLAN ไม่ได้เข้ารหัส traffic** และไม่ใช่ security boundary ที่สมบูรณ์หาก config ผิด

## 3.5 Micro-segmentation [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Web `10.0.1.10` → App `10.0.2.10:8443` อนุญาต; App → DB `10.0.3.10:5432` อนุญาต; Web → DB ปฏิเสธ
>
> **🎯 จุดจำสำหรับสอบ:** Micro-segmentation คุมละเอียดระดับ Workload/Device ไม่ใช่แค่แยกแผนก


แบ่งละเอียดถึงระดับ workload, VM, container, host หรือ application แม้เครื่องอยู่ subnet เดียวกันก็จำกัด traffic ระหว่างกันได้ โดยอาศัย host firewall, SDN, distributed firewall หรือ policy ตาม identity/workload

**ตัวอย่าง:** Web workload คุยกับ App ได้เฉพาะ TCP 8443; App คุยกับ DB ได้เฉพาะ TCP 5432; Web คุยกับ DB โดยตรงไม่ได้

**Segmentation vs Micro-segmentation:** อย่างแรกแบ่งเป็นกลุ่มเครือข่ายใหญ่; อย่างหลังควบคุมระดับ workload/เครื่องได้ละเอียดกว่า

## 3.6 Zero Trust [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** พนักงานล็อกอินถูกต้อง แต่ Laptop ไม่มี Security Patch จึงถูกปฏิเสธการเข้าถึงระบบการเงินจนกว่าจะผ่าน Device Compliance
>
> **🎯 จุดจำสำหรับสอบ:** Zero Trust = ตรวจสอบ Identity, Device, Context และอนุญาตเท่าที่จำเป็น ไม่ใช่ “ไม่ไว้ใจใครเลย” แบบไร้หลักเกณฑ์


หลักคือ **อย่าให้ความเชื่อถือเพียงเพราะอยู่ภายใน network**; ประเมิน identity, device posture, application, resource, location, context และให้สิทธิ์ตามความจำเป็น

- Verify explicitly: ตรวจสอบ identity และ context
- Least privilege: สิทธิ์ขั้นต่ำและจำกัดขอบเขต
- Assume breach: ออกแบบเผื่อถูกบุกรุกแล้ว เช่น segmentation, monitoring

**ตัวอย่าง:** พนักงานอยู่ในสำนักงานแต่ใช้เครื่องไม่ compliant → อาจถูกปฏิเสธเข้าถึงระบบสำคัญ; ผู้ใช้อยู่ภายนอกแต่ผ่าน MFA/อุปกรณ์ compliant → อาจได้รับสิทธิ์ที่จำเป็น

**ข้อควรระวัง:** Zero Trust ไม่ใช่สินค้าเดียว ไม่ใช่แค่ VPN หรือ MFA และไม่แปลว่าไม่เชื่อใครเลยจนทำงานไม่ได้

## 3.7 Defense in Depth [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Phishing ผ่าน Email Filter ได้ แต่ MFA ป้องกันการใช้รหัสผ่านที่ขโมยมา; หากเครื่องติดมัลแวร์ EDR และ Network Segmentation ช่วยตรวจจับ/จำกัดผลกระทบ
>
> **🎯 จุดจำสำหรับสอบ:** หลายชั้นต้องเสริมกัน ไม่ใช่ติด Firewall สองตัวแล้วถือว่าครบ


หลายชั้นควบคู่กันเพื่อไม่ให้มาตรการเดียวล้มเหลวแล้วข้อมูลถูกเจาะทันที

| ชั้น | ตัวอย่าง control |
|---|---|
| Perimeter | Firewall, IDS/IPS |
| Network | VLAN, DMZ, ACL, micro-segmentation |
| Endpoint | EDR/anti-malware, patching, hardening |
| Application | Secure coding, WAF, authentication |
| Data | Encryption, backup, access control |
| Identity/People [เสริม] | MFA, awareness, least privilege |
| Monitoring [เสริม] | Logs, SIEM, incident response |

**WAF** ป้องกันโจมตีระดับเว็บแอป เช่นบางรูปแบบของ SQL injection/XSS แต่ไม่แทน secure coding. **IDS** แจ้งเตือน; **IPS** สามารถบล็อก; **EDR** ตรวจจับ/ตอบสนองที่ endpoint

## 3.8 Firewalls และ NGFW [เสริมที่เคยถาม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Traditional Firewall อนุญาต TCP 443; NGFW เพิ่ม App Awareness เช่นตรวจว่าเป็น Web Browsing หรือการใช้แอปที่ต้องจำกัด และอาจมี IPS/Threat Intelligence
>
> **🎯 จุดจำสำหรับสอบ:** NGFW ไม่สามารถมองเห็น Payload ที่เข้ารหัสได้เสมอ ต้องพิจารณานโยบาย TLS Inspection


- **Packet-filtering firewall:** พิจารณา IP, port, protocol ตามกฎ
- **Stateful firewall:** ติดตามสถานะ connection และอนุญาต response ตาม state
- **Application-aware/NGFW:** รู้จักแอป/ผู้ใช้ และอาจมี IPS, URL filtering, malware inspection, TLS inspection ตามฟีเจอร์/การตั้งค่า
- **Host-based firewall:** บังคับนโยบายบนเครื่องปลายทาง
- **Network firewall:** บังคับนโยบายระหว่างเครือข่าย

**NGFW ไม่ใช่คำรับประกันว่าป้องกันได้ทุกภัย**; การตรวจ TLS ต้องออกแบบด้าน privacy, certificate และผลกระทบต่อระบบ

**Default deny:** ปฏิเสธ traffic ที่ไม่มีกฎอนุญาตอย่างชัดเจน. ระวัง rule กว้างเกินไป เช่น `any → any allow`

## 3.9 ACL, Least Privilege, East-West / North-South [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ```text
> ALLOW 10.10.10.0/24 → 10.10.30.10 TCP/443
> DENY  10.10.20.0/24 → 10.10.30.10 ANY
> DENY  ANY → ANY (default)
> ```
> Traffic จาก Internet เข้าศูนย์ข้อมูล = North-South; Server ไป Server = East-West
>
> **🎯 จุดจำสำหรับสอบ:** Rule Order และ Default Deny สำคัญ; อย่าเปิด ANY/ANY โดยไม่จำเป็น


ACL เป็นชุดกฎ allow/deny ตาม address, protocol, port, direction ฯลฯ; rule ordering มีผลในหลายระบบ

- **North-South:** เข้า/ออกขอบเครือข่าย เช่น Internet ↔ data center
- **East-West:** ระหว่าง workload/servers ภายใน
- **Lateral movement:** ผู้โจมตีเคลื่อนจากระบบที่ยึดได้ไปยังระบบอื่น
- **Blast radius:** ขอบเขตผลกระทบเมื่อเกิด breach

## 3.10 VPN, TLS, IPsec [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Remote Worker ใช้ VPN/IPsec เชื่อมเข้าองค์กร; Browser ใช้ TLS กับ `https://portal.example`; ผู้ดักจับเห็น Packet แต่ไม่ควรอ่าน Plaintext ได้เมื่อเข้ารหัสถูกต้อง
>
> **🎯 จุดจำสำหรับสอบ:** VPN/TLS ช่วยปกป้องข้อมูลระหว่างส่ง ไม่ได้การันตีว่า Endpoint ไม่มีมัลแวร์


VPN สร้างการเชื่อมต่อผ่านเครือข่ายที่ไม่เชื่อถือได้; **remote-access VPN** สำหรับผู้ใช้, **site-to-site VPN** เชื่อมสำนักงาน. **IPsec** มักใช้ระดับ IP; **TLS** ปกป้องข้อมูลระหว่างแอป เช่น HTTPS. VPN ไม่ได้ทำให้ endpoint ที่ติด malware ปลอดภัยโดยอัตโนมัติ

## 3.11 Embedded Systems [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** เครื่องพิมพ์อัจฉริยะมี Embedded OS และ Web Admin; ถ้าใช้ `admin/admin` ผู้โจมตีใน LAN อาจเข้าควบคุม จึงต้องเปลี่ยนรหัสผ่านและจำกัด Management Network
>
> **🎯 จุดจำสำหรับสอบ:** Embedded System อาจอัปเดตยากและมีทรัพยากรจำกัด


Embedded system คือระบบคอมพิวเตอร์ที่ออกแบบมาทำหน้าที่เฉพาะภายในอุปกรณ์หรือระบบใหญ่ เช่น industrial controller, medical device, automotive system, smart appliance; มักมี CPU/RAM/storage จำกัด

**ความท้าทาย:** อายุใช้งานยาว, compute จำกัด, patch ยาก, legacy software, security capability จำกัด, physical exposure.  
**แนวทาง [เสริม]:** asset inventory, secure configuration, firmware signing, network isolation, allowlisting, controlled maintenance window, physical security, monitoring ตามข้อจำกัดของอุปกรณ์

## 3.12 Industrial Control Systems (ICS) [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** โรงงานใช้ PLC คุมปั๊มน้ำ; HMI แสดงแรงดัน; SCADA รวบรวมสถานะ หากสั่งปั๊มหยุดผิดเวลาอาจกระทบ Safety และ Availability
>
> **🎯 จุดจำสำหรับสอบ:** ICS/OT เน้นความปลอดภัยทางกายภาพและความต่อเนื่อง; ห้าม Patch/Scan โดยไม่ประเมินผลต่อกระบวนการ


ICS ใช้ **monitor และ control กระบวนการทางอุตสาหกรรม** เช่น โรงไฟฟ้า/การจ่ายไฟ, โรงงาน, ระบบน้ำ, น้ำมันและก๊าซ. เหตุการณ์ความปลอดภัยอาจทำให้ **เกิดอันตรายทางกายภาพและต่อชีวิต** ไม่ใช่เพียงข้อมูลรั่ว

**ความต้องการหลักจากสไลด์:**
1. **Availability:** ต้องทำงานต่อเนื่อง
2. **Safety:** การเปลี่ยนแปลง security ต้องไม่ทำให้สภาวะทางกายภาพไม่ปลอดภัย
3. **Reliability:** การทำงานเสถียรและคาดการณ์ได้
4. **Legacy technology:** อุปกรณ์เก่าและ patch ยาก
5. **Segmentation:** แยก ICS จากเครือข่ายที่เชื่อถือน้อยกว่า

**องค์ประกอบที่ควรรู้ [เสริม]:** OT = Operational Technology; PLC ควบคุมกระบวนการ; HMI เป็นหน้าจอ operator; SCADA ใช้ supervisory monitoring/control; sensors/actuators เชื่อมโลกจริง

**IT vs OT:** IT มักเน้นข้อมูลและการเปลี่ยนแปลงที่คล่องตัว; OT/ICS ต้องพิจารณา safety, uptime, timing และ vendor constraints ก่อน patch, scan หรือ restart

**ตัวอย่าง:** ไม่ควรสั่งสแกนแบบ aggressive กับ PLC ในสายการผลิตโดยไม่ประเมินผลกระทบ เพราะอาจรบกวนการทำงาน

## 3.13 Internet of Things (IoT) [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** กล้อง IP ส่งวิดีโอไป NVR แต่ไม่ควรเข้าถึง Payroll Server; หากกล้องมี Default Password อาจถูกใช้เป็นจุดเริ่มต้นการโจมตี
>
> **🎯 จุดจำสำหรับสอบ:** IoT Inventory, Firmware Updates, Unique Passwords และ Segmentation เป็นพื้นฐาน


IoT คืออุปกรณ์ทางกายภาพที่เชื่อมต่อเครือข่ายและแลกเปลี่ยนข้อมูล เช่น smart camera, thermostat, wearable, smart appliance

**ความเสี่ยง:** default passwords, weak authentication, unpatched firmware, insecure communications

**มาตรการ:** เปลี่ยน default credentials; ใช้ strong authentication; update firmware; encryption เมื่อเหมาะสม; แยก IoT จาก critical systems; ปิดบริการที่ไม่จำเป็น; ทำ inventory; เปลี่ยนอุปกรณ์ที่หมดการสนับสนุน

**ตัวอย่าง:** กล้อง IP ควรอยู่ใน IoT VLAN และอนุญาตเฉพาะเส้นทางที่จำเป็นไปยัง NVR/management ไม่ควรเข้าถึงฐานข้อมูลการเงิน

## 3.14 Segmentation สำหรับ Embedded, IoT และ ICS [จากสไลด์ + เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ```text
> IoT VLAN 40 → NVR 10.0.30.20 TCP/554 : ALLOW (ตัวอย่างตามบริการจริง)
> IoT VLAN 40 → Finance VLAN 50       : DENY
> OT PLC Network → Internet           : DENY by default
> ```
>
> **🎯 จุดจำสำหรับสอบ:** ตัวเลข Port เป็นเพียงตัวอย่าง ต้องยืนยันกับอุปกรณ์จริง; สำหรับ ICS ต้องออกแบบตาม Safety/Availability


- แยก IoT/OT ออกจาก enterprise user network
- ใช้ VLAN, firewall zone, micro-segmentation ตามความเหมาะสม
- จำกัด traffic ด้วย allowlist; monitor flows และ logs
- จำกัด remote administration ผ่าน jump host/MFA เมื่อระบบรองรับ
- วางแผน patch/maintenance โดยประเมิน safety และ availability
- สำหรับ ICS ต้องมีการอนุมัติจากเจ้าของกระบวนการและวิศวกร OT ก่อนเปลี่ยนแปลงที่อาจกระทบการทำงาน

---

# 4. Objective 4.3 — Cloud Security

## 4.1 Cloud Computing คืออะไร [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** เว็บขายของเพิ่ม VM จาก 2 เป็น 10 เครื่องช่วง Flash Sale แล้วลดกลับ 2 เครื่อง; Dashboard วัดการใช้งานเพื่อคิดค่าบริการ
>
> **🎯 จุดจำสำหรับสอบ:** Rapid Elasticity = ปรับขนาดรวดเร็ว; Measured Service = ตรวจวัดการใช้งาน


การส่งมอบ compute, storage, networking, applications และบริการผ่านเครือข่าย (มักเป็นอินเทอร์เน็ต) ตามความต้องการ โดยไม่ต้องเป็นเจ้าของ/ดูแล hardware ทั้งหมดเอง

**5 Essential Characteristics:**

| ลักษณะ | ความหมาย | ตัวอย่าง |
|---|---|---|
| On-Demand Self-Service | ขอทรัพยากรเองเมื่อจำเป็น | สร้าง VM ผ่าน portal |
| Broad Network Access | ใช้บริการผ่าน network จากหลายอุปกรณ์ | เข้า SaaS จากมือถือ/โน้ตบุ๊ก |
| Resource Pooling | Provider แชร์ resource pool พร้อม logical isolation | หลาย tenant ใช้ hardware pool |
| Rapid Elasticity | เพิ่ม/ลด resource รวดเร็ว | autoscaling เมื่อ traffic พุ่ง |
| Measured Service | วัดการใช้เพื่อบริหาร/คิดค่าใช้จ่าย | จ่ายตาม compute/storage usage |

**Scalability vs Elasticity [เสริม]:** scalability คือความสามารถรองรับขนาดงานที่มากขึ้น; elasticity คือปรับ resource ขึ้นลงตาม demand โดยอัตโนมัติ/รวดเร็ว

## 4.2 Virtualization และ Multi-Tenancy [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Hypervisor เดียวโฮสต์ VM ของลูกค้า A และ B แต่แยก Virtual Disks/Network Policies; ลูกค้า A ไม่ควรอ่านไฟล์ของ B
>
> **🎯 จุดจำสำหรับสอบ:** Multi-Tenancy ต้องมี Logical Isolation; Shared Hardware ไม่เท่ากับ Shared Data Access


**Hypervisor** ช่วยให้ physical host รันหลาย VM ที่แยกกัน; **Type 1** ทำงานบน hardware โดยตรง, **Type 2** ทำงานบน host OS. **Containers** แชร์ kernel ของ host (ตามแพลตฟอร์ม) และแยกกระบวนการ/ทรัพยากรด้วยกลไก OS

**Multi-tenancy** หมายถึงลูกค้าหลายรายใช้ infrastructure/service ร่วมกันโดยมี logical isolation; ต้องมี controls ป้องกัน tenant หนึ่งเข้าถึงข้อมูลอีก tenant

## 4.3 Cloud Service Models [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** IaaS: เช่า VM แล้วติดตั้ง Ubuntu/Nginx เอง; PaaS: Deploy Python App โดยไม่ดูแล OS; SaaS: ใช้ Gmail ผ่าน Browser; FaaS: อัปโหลดรูปแล้ว Trigger Function ทำ Thumbnail
>
> **🎯 จุดจำสำหรับสอบ:** จำ IaaS=OS, PaaS=App, SaaS=User/Data, FaaS=Code/Trigger


### IaaS — Infrastructure as a Service
ให้ virtual servers, storage, networking เช่น Amazon EC2, Azure Virtual Machines. ลูกค้ามักจัดการ guest OS, middleware, application, data และ access; provider ดูแล physical infrastructure/hypervisor

**ใช้เมื่อ:** ต้องการควบคุม OS/network config สูง แต่ไม่อยากดูแล data center

### PaaS — Platform as a Service
ให้แพลตฟอร์ม develop/test/deploy รวม runtime/framework และบริการที่จำเป็น เช่น Google App Engine, Azure App Service. ลูกค้าจัดการ app code, data, identities และการตั้งค่าที่อยู่ในขอบเขตตน; provider ดูแล OS/runtime/platform ตามบริการ

**ใช้เมื่อ:** ต้องการ deploy app โดยไม่บริหาร guest OS

### SaaS — Software as a Service
ให้แอปสำเร็จรูปผ่านอินเทอร์เน็ต เช่น Gmail, Microsoft 365, Salesforce. Provider ดูแลแอปและ underlying stack; ลูกค้ายังดูแล user access, data handling, configuration และ compliance ในส่วนตน

**ใช้เมื่อ:** ต้องการใช้งาน software ทันที

### FaaS — Function as a Service
รัน function ตาม event โดยไม่จัดการ server โดยตรง เช่น AWS Lambda, Azure Functions. Provider ดูแล runtime/platform scaling; ลูกค้าดูแล code, dependencies, triggers, permissions, secrets และข้อมูล

**ใช้เมื่อ:** งาน event-driven, short-lived processing, automation

**ข้อควรระวัง:** “Serverless” ไม่ได้แปลว่าไม่มี server; แปลว่าลูกค้าไม่ต้องบริหาร server โดยตรง และการคิดค่าบริการไม่ได้จำกัดเพียง execution time เสมอไป

## 4.4 Shared Responsibility Model [จากสไลด์ + ขยาย]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ```text
> เหตุการณ์                              ผู้รับผิดชอบหลัก
> IaaS VM ไม่ Patch Ubuntu             Customer
> PaaS App มี SQL Injection            Customer
> SaaS พนักงานแชร์ไฟล์ผิดสิทธิ์       Customer
> FaaS Function เปิดสิทธิ์ DB กว้าง    Customer
> Physical Server ใน Data Center เสีย   CSP
> ```
>
> **🎯 จุดจำสำหรับสอบ:** หน้าที่จริงขึ้นกับบริการ/สัญญา; Encryption และ IAM อาจเป็น Shared Controls


**หลัก:** Provider ดูแล **security of the cloud** (โครงสร้างพื้นฐานที่ตนให้บริการ); Customer ดูแล **security in the cloud** (ข้อมูล, identity, configuration, workloads ตามโมเดล). ความรับผิดชอบจริงขึ้นกับบริการ, สัญญา และการตั้งค่า

| องค์ประกอบ | IaaS | PaaS | SaaS |
|---|---|---|---|
| Physical facilities/network/hardware | Provider | Provider | Provider |
| Hypervisor/physical virtualization | Provider | Provider | Provider |
| Guest OS | Customer | Provider | Provider |
| Runtime/middleware | Customer | Provider (โดยทั่วไป) | Provider |
| Application code | Customer | Customer | Provider (core app) |
| Identity/access policy | Customer (ร่วมกับ provider สำหรับ service controls) | Customer (ร่วมกัน) | Customer (ร่วมกัน) |
| Data classification/access/usage | Customer | Customer | Customer |
| Service configuration | Customer | Customer | Customer (ส่วนที่ปรับได้) |

**หมายเหตุ:** ตารางเป็นโมเดลทั่วไปเพื่อเรียนรู้; บางบริการมี managed components หรือ responsibility split ต่างออกไป

**ตัวอย่างข้อสอบ:** ลูกค้าตั้ง cloud storage เป็น public โดยไม่ตั้งใจ → โดยทั่วไปเป็นความรับผิดชอบของลูกค้าด้าน configuration/access แม้ provider จะดูแล hardware

### FaaS responsibility
Provider: serverless infrastructure, runtime platform, scaling. Customer: code, dependencies, event triggers, IAM, secrets, data access, application logic. ความปลอดภัย API/integration ต้องร่วมกันตามขอบเขตบริการ

### จุดหลอกสำคัญ
- **SaaS ไม่ได้แปลว่า provider ดูแลการกำหนดสิทธิ์พนักงานทุกคน**
- **IaaS ไม่ได้แปลว่าลูกค้าต้องดูแล physical servers**
- **PaaS ไม่ได้แปลว่าลูกค้าไม่ต้อง secure application**
- **Cloud ไม่ได้แปลว่า compliance ย้ายให้ provider ทั้งหมด**

## 4.5 Cloud Deployment Models [จากสไลด์]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Public: Startup ใช้ AWS; Private: ธนาคารมี Cloud เฉพาะองค์กร; Hybrid: Private DB เชื่อม Public Web; Community: โรงพยาบาลหลายแห่งแชร์ Cloud ตามข้อกำหนด; Multi-Cloud: AWS + Azure
>
> **🎯 จุดจำสำหรับสอบ:** Hybrid เน้นชนิดสภาพแวดล้อมที่เชื่อมกัน; Multi-Cloud เน้นหลาย Provider และเกิดร่วมกันได้


### Public Cloud
ทรัพยากรให้บริการผ่าน provider สู่ลูกค้าหลายรายโดยใช้ shared infrastructure พร้อม isolation. ข้อดี: scaling, cost flexibility, ไม่ต้องดูแล hardware; ข้อควรระวัง: configuration, privacy, residency, shared tenancy, provider dependency. ตัวอย่างบริการจาก AWS, Azure, GCP

### Private Cloud
Cloud infrastructure ใช้เฉพาะองค์กรเดียว อาจอยู่ on-premises หรือ third-party hosting. ข้อดี: control, customization; ข้อจำกัด: ต้นทุน/การดูแลสูงกว่าในหลายกรณี. **Private cloud ไม่ได้ปลอดภัยอัตโนมัติ**

### Hybrid Cloud
เชื่อมสภาพแวดล้อม private/public ให้ data/application/workloads ทำงานร่วมกันตามการออกแบบ. ข้อดี: flexibility, workload placement; ความท้าทาย: integration, identity, networking, policy consistency, monitoring. **Hybrid ≠ Multi-cloud**

### Community Cloud
ใช้ร่วมกันหลายองค์กรที่มีความต้องการ/ข้อกำกับคล้ายกัน เช่น หน่วยงานรัฐหรือกลุ่มสุขภาพ. ข้อดี: cost sharing, tailored controls; ความท้าทาย: governance, ownership, access, compliance coordination

### Multi-Cloud
ใช้บริการ cloud จาก provider มากกว่าหนึ่งราย เช่น AWS + Azure + GCP. เป้าหมาย: ลดการพึ่งพา vendor รายเดียว, เลือกบริการที่เหมาะ, เพิ่มทางเลือกด้าน resilience; ความท้าทาย: policy fragmentation, IAM, logs, data transfer cost, skills. **Multi-cloud ไม่ได้แปลว่ามี failover อัตโนมัติ**

| คำ | จำสั้น ๆ |
|---|---|
| Public | Provider ให้บริการหลายลูกค้า |
| Private | เฉพาะองค์กรเดียว |
| Hybrid | เชื่อม private/public environments |
| Community | หลายองค์กรที่มีความต้องการร่วมกัน |
| Multi-cloud | หลาย cloud providers |

## 4.6 Cloud Security Controls [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** ตัวอย่าง Data Masking (เสริมแนวคิดการปกป้องข้อมูล): หมายเลขบัญชี `123456789999` แสดงแก่ฝ่ายบริการเป็น `********9999` โดยข้อมูลต้นฉบับยังเก็บในระบบที่จำกัดสิทธิ์; Tokenization แทนเลขจริงด้วย `tok_7f2a` ซึ่งต้องมีระบบจับคู่ Token; Encryption แปลงเป็น Ciphertext ที่ถอดคืนได้ด้วย Key
>
> **🎯 จุดจำสำหรับสอบ:** Masking ใช้ซ่อนส่วนที่ไม่จำเป็นต่อผู้ดู; ไม่ใช่ Encryption และไม่ได้แทนการกำหนดสิทธิ์ IAM


### IAM และ MFA
กำหนด roles/permissions ตาม least privilege; ใช้ MFA สำหรับบัญชีที่สำคัญ; หลีกเลี่ยง long-lived access keys; ทบทวนสิทธิ์ service accounts และ machine identities

### Data protection
- **Encryption in transit:** TLS
- **Encryption at rest:** เข้ารหัสข้อมูลที่เก็บใน disk/database/object storage
- **Key management:** ดูแล lifecycle, rotation, access to keys; KMS/HSM ตามความต้องการ
- **Backups:** ทดสอบ restore; ป้องกัน backup ถูกลบ/แก้โดยผู้โจมตี
- **Data classification:** แบ่งระดับความลับก่อนตั้ง policy

### Network controls
Cloud VPC/VNet, subnets, routing, security groups, network ACL, private endpoints, WAF, DDoS protection; ปิด public exposure ที่ไม่จำเป็น

### Visibility และ response
เปิด audit logs, activity logs, flow logs, monitoring/alerts; เก็บ logs ตาม retention และข้อกำกับ; เตรียม incident response runbook และทดสอบ

### Configuration security
ใช้ infrastructure as code (IaC), secure baselines, configuration scanning, vulnerability management, secret management, patching ตาม responsibility split

## 4.7 Cloud Threats [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Cloud Storage Bucket ถูกตั้งค่า Public Read ผิดพลาด → ข้อมูลรั่วไหล; API Key ถูกโพสต์ใน Git → ผู้โจมตีอาจใช้สิทธิ์เรียก Cloud APIs
>
> **🎯 จุดจำสำหรับสอบ:** ตรวจ Config, ใช้ Secret Manager, Rotate Keys, Least Privilege และ Monitoring


- **Misconfiguration:** bucket/storage เปิด public โดยไม่ตั้งใจ
- **Excessive permissions:** account มีสิทธิ์กว้างเกินจำเป็น
- **Compromised credentials/API keys:** attacker ใช้ account เข้าระบบ
- **Insecure APIs:** authentication/authorization หรือ input validation ไม่ดี
- **Unpatched workloads:** OS/app ที่ลูกค้าต้องดูแลยังมีช่องโหว่
- **Data exfiltration:** ข้อมูลถูกส่งออกโดยไม่ได้รับอนุญาต
- **Shadow IT:** ใช้บริการ Cloud โดยไม่ผ่านการอนุมัติ/ควบคุม
- **Vendor dependency/outage:** พึ่งพาบริการเดียวโดยไม่มี continuity plan

**ตัวอย่าง:** VM ใน IaaS เปิด RDP 3389 ให้ `0.0.0.0/0` → เสี่ยง brute-force/exploitation; ลดความเสี่ยงด้วย private access, MFA, jump host, allowlisting, patching

## 4.8 Cloud Availability, Backup, DR [เสริม]

> **🧪 ตัวอย่างปฏิบัติ [เสริม]:** Region A ล่ม: ระบบ Failover ไป Region B (หากออกแบบไว้); Backup ทุก 6 ชั่วโมงมีโอกาสเสียข้อมูลสูงสุดใกล้ 6 ชั่วโมงตามจังหวะ Backup; RPO 1 ชั่วโมง หมายถึงยอมเสียข้อมูลย้อนหลังได้ไม่เกิน 1 ชั่วโมง
>
> **🎯 จุดจำสำหรับสอบ:** Backup ไม่เท่ากับ High Availability; RTO คือเวลาที่ต้องกู้บริการให้กลับมา ส่วน RPO คือจุดข้อมูลที่ยอมสูญเสีย


- **Availability Zone:** ขอบเขตโครงสร้างพื้นฐานที่ออกแบบแยก failure domain ภายใน region (รายละเอียดขึ้นกับ provider)
- **Region:** พื้นที่ทางภูมิศาสตร์ของ cloud provider
- **Redundancy:** มีส่วนสำรอง
- **High availability:** ลด downtime จากความล้มเหลว
- **Failover:** สลับไป resource สำรองเมื่อมีเหตุ
- **RTO:** เวลาสูงสุดเป้าหมายที่ยอมให้บริการหยุดก่อนกู้กลับ
- **RPO:** ปริมาณข้อมูลสูญหายตามเวลาเป้าหมายที่ยอมรับได้

**ตัวอย่าง:** RPO 15 นาที → องค์กรตั้งเป้าสูญเสียข้อมูลย้อนหลังไม่เกิน 15 นาที; RTO 2 ชั่วโมง → ตั้งเป้ากู้บริการภายใน 2 ชั่วโมง

---

# 5. ตารางจำเร็วและจุดที่มักสับสน

## 5.1 เลือกเทคโนโลยีตามโจทย์

| ถ้าโจทย์ถามว่า… | ให้คิดถึง… |
|---|---|
| แยก guest จาก employee | VLAN + ACL/firewall |
| เปิด web สาธารณะโดยแยกจาก DB ภายใน | DMZ |
| ป้องกัน server A เข้าถึง server B โดยไม่จำเป็น | Micro-segmentation |
| จำกัดการลุกลามหลัง breach | Segmentation / least privilege |
| ไม่เชื่อถือผู้ใช้เพียงเพราะอยู่ใน LAN | Zero Trust |
| ลดผลกระทบเมื่อ control หนึ่งล้มเหลว | Defense in depth |
| ตรวจจับ traffic น่าสงสัย | IDS |
| บล็อก traffic น่าสงสัย inline | IPS |
| กรอง HTTP attacks | WAF |
| เข้าระบบ CLI ระยะไกลอย่างปลอดภัย | SSH |
| เข้าหน้าจอเดสก์ท็อประยะไกล | RDP (จำกัดการเข้าถึง) |
| ส่งไฟล์อย่างปลอดภัยบน SSH | SFTP |
| เชื่อมหลายเครื่องออก public IP เดียว | PAT |
| สร้าง VM โดยไม่ซื้อ hardware | IaaS |
| Deploy code โดยไม่ดูแล guest OS | PaaS |
| ใช้ software สำเร็จรูป | SaaS |
| รัน code ตาม event | FaaS |
| ใช้ cloud หลาย provider | Multi-cloud |
| เชื่อม private และ public cloud | Hybrid |

## 5.2 คำคู่ที่ต้องแยก

- **FTP vs SFTP vs FTPS:** FTP ไม่เข้ารหัสโดยค่าเริ่มต้น; SFTP บน SSH; FTPS คือ FTP over TLS
- **IDS vs IPS:** Detect/alert vs detect/prevent
- **VLAN vs subnet:** VLAN เป็น L2 broadcast domain; subnet เป็น L3 IP network; มักจับคู่แต่ไม่ใช่สิ่งเดียวกัน
- **NAT vs PAT:** แปลง address vs แปลง address + port
- **VPN vs TLS:** tunnel ระดับ network/remote access vs secure application transport (ตามโปรโตคอล)
- **IaaS vs PaaS:** จัดการ OS เอง vs provider จัดการ OS/runtime
- **SaaS vs FaaS:** ใช้แอปสำเร็จรูป vs รัน function code
- **Hybrid vs Multi-cloud:** ผสานสภาพแวดล้อม public/private vs หลาย provider
- **Availability vs Confidentiality:** ระบบพร้อมใช้งาน vs ปกปิดข้อมูล; ICS เน้น safety และ availability มากเป็นพิเศษตามบริบท

---

# 6. สถานการณ์ฝึกคิดพร้อมเฉลย (คำถามแต่งเพื่อฝึก ไม่ใช่ข้อสอบจริง)

### Q1
องค์กรต้องการให้ผู้เยี่ยมชมใช้อินเทอร์เน็ต แต่ห้ามเข้าถึงเครื่องพนักงาน ควรเริ่มด้วยอะไร?

**ตอบ:** Guest VLAN แยกจาก internal และกำหนด ACL/firewall deny traffic ไปเครือข่ายภายใน. **เหตุผล:** แยก L2 อย่างเดียวไม่พอถ้ายัง route ถึงกัน

### Q2
Web server ต้องเปิดให้คนทั่วไปใช้ แต่ DB มีข้อมูลลูกค้า ควรวางอย่างไร?

**ตอบ:** Web/reverse proxy ใน DMZ, DB ใน internal restricted segment, allow เฉพาะ application flow ที่จำเป็น. **เหตุผล:** จำกัด blast radius

### Q3
พนักงานล็อกอินจากเครือข่ายสำนักงาน แต่ endpoint ติด malware ควรเชื่อถือเพราะเป็น internal IP หรือไม่?

**ตอบ:** ไม่. Zero Trust ตรวจสอบ identity/device posture/context และให้ least privilege

### Q4
ผู้ใช้ต้องการ remote shell อย่างปลอดภัย เลือกโปรโตคอลใด?

**ตอบ:** SSH TCP 22 (ค่า default)

### Q5
ส่งไฟล์ด้วย protocol ที่อาศัย SSH?

**ตอบ:** SFTP TCP 22; ไม่ใช่ FTPS

### Q6
บริษัทมีอุปกรณ์กล้องเก่าที่ไม่สามารถอัปเดตได้ทันที ควรลดความเสี่ยงอย่างไร?

**ตอบ:** แยก IoT segment, ปิดบริการที่ไม่จำเป็น, จำกัด allowed destinations, monitor และวางแผนเปลี่ยนอุปกรณ์. **เหตุผล:** compensating controls ระหว่างรอ remediation

### Q7
โรงงานมี PLC ที่อาจหยุดการผลิตหาก reboot โดยไม่วางแผน จะ patch ทันทีได้หรือไม่?

**ตอบ:** ไม่ควรโดยพลการ; ประเมิน safety/availability และกำหนด maintenance ร่วมกับ OT operations

### Q8
องค์กรสร้าง VM บน IaaS แล้วไม่ได้ patch guest OS ใครรับผิดชอบโดยทั่วไป?

**ตอบ:** ลูกค้า

### Q9
บริษัทใช้ SaaS แต่ตั้งสิทธิ์แชร์ไฟล์ให้ทุกคนเข้าถึง ใครรับผิดชอบการตั้งค่านี้โดยทั่วไป?

**ตอบ:** ลูกค้า (แม้ provider ดูแล application platform)

### Q10
ต้องการรันโค้ดเมื่อไฟล์ถูกอัปโหลดโดยไม่บริหาร server เลือกอะไร?

**ตอบ:** FaaS เช่น event-triggered function

### Q11
ใช้ AWS และ Azure พร้อมกัน เรียกอะไร?

**ตอบ:** Multi-cloud; ถ้ามีการเชื่อม private/public environment ก็อาจเป็น hybrid ด้วย ทั้งสองคำไม่ได้ขัดกัน

### Q12
การเพิ่ม firewall ตัวเดียวช่วยป้องกันทุกระดับหรือไม่?

**ตอบ:** ไม่; ต้องใช้ defense in depth เช่น segmentation, IAM, endpoint security, app security, data protection, monitoring

### Q13
`192.168.50.130/26` อยู่ subnet ใด?

**ตอบ:** `192.168.50.128/26`; broadcast `.191`; usable `.129–.190`

### Q14
หลายเครื่องภายในใช้งาน Internet ผ่าน public IPv4 เดียวโดยใช้ port mapping เรียกอะไร?

**ตอบ:** PAT / NAT overload

### Q15
แอปต้องมี RPO 30 นาที แต่ backup ทุก 24 ชั่วโมงเพียงพอหรือไม่?

**ตอบ:** ไม่เพียงพอโดยทั่วไป; ต้องออกแบบ backup/replication ให้รองรับเป้าหมายสูญเสียข้อมูลไม่เกิน 30 นาทีและทดสอบกู้คืน

---

# 7. Checklist ทบทวนก่อนสอบ

- [ ] อธิบาย OSI 7 ชั้นและแยก TCP/UDP ได้
- [ ] จำ private IPv4 ranges, CIDR และ subnet เบื้องต้นได้
- [ ] แยก switch/router/firewall/IDS/IPS/WAF ได้
- [ ] จำ port ที่สำคัญ: 21, 22, 25, 53, 80, 110, 143, 443, 3389
- [ ] แยก FTP, SFTP, FTPS ได้
- [ ] อธิบาย DNS, DHCP, NAT, PAT, ARP ได้
- [ ] อธิบาย segmentation, DMZ, VLAN, micro-segmentation ได้
- [ ] แยก firewall zones และเหตุผลของ default deny ได้
- [ ] อธิบาย defense in depth, Zero Trust และ least privilege ได้
- [ ] รู้ความเสี่ยงและการป้องกัน IoT/embedded devices
- [ ] เข้าใจว่า ICS/OT มีผลต่อ physical safety และ availability
- [ ] จำ cloud characteristics ทั้ง 5 ข้อได้
- [ ] แยก IaaS, PaaS, SaaS, FaaS ได้
- [ ] แบ่ง provider/customer responsibility ในแต่ละโมเดลได้
- [ ] แยก public, private, hybrid, community, multi-cloud ได้
- [ ] รู้ cloud misconfiguration, IAM, encryption, monitoring, backup, RTO/RPO

---

# หมายเหตุเรื่องแหล่งเนื้อหาและความถูกต้อง

1. **[จากสไลด์]** หมายถึงเนื้อหาที่ปรากฏในภาพสไลด์ที่ผู้ใช้ส่งมาในบทสนทนา: Applications, Embedded Systems, ICS, IoT, Network Segmentation, Firewall Zones, DMZ, VLAN, Micro-segmentation, Defense in Depth, Zero Trust, Cloud Computing, Cloud Characteristics, Cloud Service Models, Shared Responsibility, Cloud Deployment Models
2. **[เสริม]** เป็นคำอธิบายและตัวอย่างเพิ่มเติมเพื่อเชื่อมโยงความรู้ รวมถึง OSI/TCP-IP, subnetting/CIDR, NAT/PAT, NGFW, DNS/DHCP, cloud controls, DR และโจทย์ฝึกคิด
3. ข้อความบางอย่างในสไลด์เป็นการย่อเพื่อการสอน เช่น “HTTPS 443” และ “FTPS 990” — ในการใช้งานจริงมีหลายรูปแบบตาม protocol/version/configuration จึงอธิบายข้อยกเว้นไว้แล้ว
4. เอกสารนี้เป็น **study notes** ไม่ใช่เอกสารรับรองอย่างเป็นทางการของ ISC2 และไม่อ้างว่าเป็นรายการหัวข้อสอบทุกข้ออย่างเป็นทางการ

**จบเอกสาร — ขอให้ทบทวนแบบเข้าใจสถานการณ์ ไม่ใช่จำแต่คำศัพท์**
