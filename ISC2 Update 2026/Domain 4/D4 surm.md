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

**Network** คือการเชื่อมอุปกรณ์เพื่อแลกเปลี่ยนข้อมูล/ใช้ทรัพยากรร่วมกัน; **LAN** คือเครือข่ายภายในพื้นที่จำกัด เช่น สำนักงาน; **WAN** เชื่อมระยะไกลหลายสถานที่; **Internet** คือเครือข่ายสาธารณะระดับโลก; **Intranet** เป็นบริการ/เครือข่ายภายในองค์กรที่ใช้เทคโนโลยีอินเทอร์เน็ต; **Extranet** เปิดบริการบางส่วนแก่คู่ค้าหรือผู้ได้รับอนุญาต

- **Bandwidth:** ความสามารถรองรับปริมาณข้อมูลต่อหน่วยเวลา (เช่น Mbps)
- **Throughput:** ปริมาณข้อมูลที่ส่งสำเร็จจริง
- **Latency:** ระยะเวลาหน่วง
- **Jitter:** ความแปรปรวนของ latency
- **Packet loss:** แพ็กเก็ตสูญหาย

ตัวอย่าง: วิดีโอคอลอาจมี bandwidth มากแต่เสียงกระตุกเพราะ jitter/packet loss สูง

## 2.2 OSI Model — 7 Layers

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

| TCP/IP | เทียบ OSI โดยประมาณ |
|---|---|
| Application | 5–7 |
| Transport | 4 |
| Internet | 3 |
| Link/Network Access | 1–2 |

OSI เป็นแบบจำลองอธิบายแนวคิด; TCP/IP เป็นชุดโปรโตคอลที่ใช้งานจริง ความเทียบกันไม่ใช่ 1:1 ทุกกรณี

## 2.4 TCP vs UDP

| TCP | UDP |
|---|---|
| Connection-oriented, ใช้ handshake | Connectionless |
| มี sequence, acknowledgment, retransmission | ไม่มีการรับประกันส่งถึงในตัวโปรโตคอล |
| ควบคุมลำดับและความน่าเชื่อถือ | overhead ต่ำ เหมาะกับงานที่ยอมรับ loss/จัดการเองได้ |
| SSH, SMTP, HTTPS over HTTP/1.1/2 | DNS ส่วนใหญ่, VoIP, streaming บางชนิด, QUIC |

**TCP three-way handshake:** SYN → SYN-ACK → ACK. **UDP ไม่เท่ากับไม่ปลอดภัย** เพราะความปลอดภัยขึ้นกับโปรโตคอลชั้นบนด้วย เช่น QUIC ใช้ TLS 1.3

## 2.5 IP Addressing, IPv4, IPv6

IPv4 ยาว 32 บิต เช่น `192.168.10.25`; IPv6 ยาว 128 บิต เช่น `2001:db8::1` (ตัวอย่างเอกสาร)

**IPv4 private ranges (RFC 1918):**
- `10.0.0.0/8`
- `172.16.0.0/12` (172.16–172.31)
- `192.168.0.0/16`

**Loopback:** `127.0.0.1` (IPv4), `::1` (IPv6); **IPv4 link-local/APIPA:** `169.254.0.0/16`; **IPv6 link-local:** `fe80::/10`.

**Public IP** ใช้สำหรับการกำหนดเส้นทางบนอินเทอร์เน็ตได้ตามนโยบายและการจัดสรร; **private IP** ไม่ถูก route บนอินเทอร์เน็ตสาธารณะโดยตรง

## 2.6 Subnet Mask และ CIDR [เสริมที่เคยถาม]

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

- **MAC address:** ที่อยู่ของอินเทอร์เฟซที่ใช้บนลิงก์ L2; ไม่ใช่ตัวแทน identity ที่เชื่อถือได้เสมอไป (spoof ได้)
- **ARP:** หา MAC จาก IPv4 ในเครือข่ายท้องถิ่น; **ARP spoofing/poisoning** ทำให้ส่งข้อมูลผิดปลายทางได้
- **Switch:** ส่ง frame ตาม MAC table ภายใน L2; VLAN แยก broadcast domains
- **Router:** ส่ง IP packet ระหว่าง subnet/เครือข่ายที่ต่างกัน
- **Default gateway:** เราเตอร์ที่ host ใช้ส่งข้อมูลไปนอก subnet
- **ICMP:** ส่งข้อความควบคุม/วินิจฉัย เช่น ping, traceroute (ขึ้นกับ implementation)

## 2.8 NAT และ PAT [เสริมที่เคยถาม]

**NAT (Network Address Translation)** แปลง IP address ระหว่างเครือข่าย เช่น private ↔ public. **PAT (Port Address Translation)** หรือ NAT overload แปลง IP และ port เพื่อให้หลายเครื่องแชร์ public IP เดียวได้

ตัวอย่าง PAT:

```text
192.168.1.10:50001 ─┐
                    ├── Router PAT ── 203.0.113.5:40001 → Internet
192.168.1.20:50002 ─┘              203.0.113.5:40002 → Internet
```

เราเตอร์ใช้ mapping table เพื่อส่ง response กลับเครื่องต้นทางให้ถูกต้อง. **NAT/PAT ไม่ใช่ firewall โดยตัวมันเอง** และไม่ได้แทนการบังคับ policy/ตรวจสอบ traffic

## 2.9 Network Devices

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

- **SSID** คือชื่อเครือข่าย ไม่ใช่กลไกความปลอดภัย
- **WPA2-AES** และ **WPA3** ใช้ปกป้องการสื่อสารไร้สาย; หลีกเลี่ยง WEP/WPA รุ่นเก่า
- **WPA2/WPA3-Personal** ใช้ shared credential; **Enterprise** ใช้ 802.1X/EAP และระบบยืนยันตัวตน เช่น RADIUS
- **Evil twin:** AP ปลอมชื่อคล้ายของจริง; **Rogue AP:** AP ที่ไม่ได้รับอนุญาต
- แยก Guest Wi-Fi จาก internal network, อัปเดต firmware และปิด WPS เมื่อไม่จำเป็น

## 2.11 Applications และ Protocols [จากสไลด์ + เสริม]

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

DNS แปลงชื่อ domain เป็น IP (และ record อื่น ๆ). Record สำคัญ: `A` IPv4, `AAAA` IPv6, `CNAME` alias, `MX` mail routing, `TXT` text/policy, `NS` authoritative nameserver, `PTR` reverse lookup. **DNS poisoning** ทำให้ได้คำตอบผิด; DNSSEC ช่วยยืนยันความถูกต้อง/แหล่งที่มาของข้อมูล DNS แต่ไม่ได้เข้ารหัส query โดยตัวมันเอง

DHCPv4 ขั้นตอน **DORA:** Discover → Offer → Request → Acknowledge. Rogue DHCP อาจแจก gateway/DNS ปลอมได้; ป้องกันด้วย DHCP snooping และการควบคุมพอร์ตสวิตช์

---

# 3. Objective 4.2 — Network Security Architecture

## 3.1 Network Segmentation [จากสไลด์]

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

Zone คือการจัดกลุ่ม interfaces/systems/traffic ตาม **trust level** และความต้องการด้าน security. Firewall บังคับ policy ระหว่าง zones

- **Outside/Untrusted:** Internet/เครือข่ายสาธารณะ
- **Inside/Trusted:** เครือข่ายภายในองค์กร (แต่ไม่ควรเชื่อถือทุกเครื่องโดยอัตโนมัติ)
- **DMZ:** เครือข่ายที่รองรับบริการ public-facing
- **Management:** สำหรับบริหารอุปกรณ์/ระบบ แยกจากทราฟฟิกผู้ใช้

**ตัวอย่าง policy:** Internet → DMZ TCP 443 อนุญาต; Internet → Internal database ปฏิเสธ; Admin subnet → Management ผ่าน SSH พร้อม MFA/jump host อนุญาตเฉพาะผู้มีสิทธิ์

## 3.3 DMZ (Demilitarized Zone) [จากสไลด์]

DMZ แยกบริการที่ผู้ใช้ภายนอกต้องเข้าถึง (web server, email gateway, reverse proxy) จากระบบภายใน ช่วยลดความเสี่ยงเมื่อ public-facing server ถูก compromise

**แนวคิดสองชั้น:**

```text
Internet → External firewall → DMZ → Internal firewall → Internal network
```

สามารถใช้ firewall ตัวเดียวหลาย interface/zone ได้เช่นกัน; สไลด์อธิบาย external/internal firewall ในเชิงแนวคิด ไม่ได้บังคับว่าต้องมีสองอุปกรณ์เสมอไป

**โจทย์:** ต้องเปิดเว็บสาธารณะ แต่ห้ามเข้าฐานข้อมูลภายในโดยตรง → วาง web/reverse proxy ใน DMZ และอนุญาตเฉพาะ backend flow ที่จำเป็น

## 3.4 VLAN (Virtual LAN) [จากสไลด์ + เสริม]

VLAN แบ่งเครือข่าย Layer 2 เชิงตรรกะบนอุปกรณ์กายภาพร่วมกัน โดยทั่วไปแต่ละ VLAN เป็น **broadcast domain** แยกกัน

- VLAN 10 Employees
- VLAN 20 Guests
- VLAN 30 Servers

**Access port:** ปกติรับส่ง traffic ของ VLAN เดียวแบบ untagged. **Trunk port:** ส่งหลาย VLAN โดยใช้ 802.1Q tagging. **Inter-VLAN routing:** ต้องใช้ L3 switch/router; ควบคุมการเข้าถึงด้วย ACL/firewall

**ARP broadcast** ปกติไม่ข้าม VLAN; **VLAN ไม่ได้เข้ารหัส traffic** และไม่ใช่ security boundary ที่สมบูรณ์หาก config ผิด

## 3.5 Micro-segmentation [จากสไลด์]

แบ่งละเอียดถึงระดับ workload, VM, container, host หรือ application แม้เครื่องอยู่ subnet เดียวกันก็จำกัด traffic ระหว่างกันได้ โดยอาศัย host firewall, SDN, distributed firewall หรือ policy ตาม identity/workload

**ตัวอย่าง:** Web workload คุยกับ App ได้เฉพาะ TCP 8443; App คุยกับ DB ได้เฉพาะ TCP 5432; Web คุยกับ DB โดยตรงไม่ได้

**Segmentation vs Micro-segmentation:** อย่างแรกแบ่งเป็นกลุ่มเครือข่ายใหญ่; อย่างหลังควบคุมระดับ workload/เครื่องได้ละเอียดกว่า

## 3.6 Zero Trust [จากสไลด์]

หลักคือ **อย่าให้ความเชื่อถือเพียงเพราะอยู่ภายใน network**; ประเมิน identity, device posture, application, resource, location, context และให้สิทธิ์ตามความจำเป็น

- Verify explicitly: ตรวจสอบ identity และ context
- Least privilege: สิทธิ์ขั้นต่ำและจำกัดขอบเขต
- Assume breach: ออกแบบเผื่อถูกบุกรุกแล้ว เช่น segmentation, monitoring

**ตัวอย่าง:** พนักงานอยู่ในสำนักงานแต่ใช้เครื่องไม่ compliant → อาจถูกปฏิเสธเข้าถึงระบบสำคัญ; ผู้ใช้อยู่ภายนอกแต่ผ่าน MFA/อุปกรณ์ compliant → อาจได้รับสิทธิ์ที่จำเป็น

**ข้อควรระวัง:** Zero Trust ไม่ใช่สินค้าเดียว ไม่ใช่แค่ VPN หรือ MFA และไม่แปลว่าไม่เชื่อใครเลยจนทำงานไม่ได้

## 3.7 Defense in Depth [จากสไลด์]

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

- **Packet-filtering firewall:** พิจารณา IP, port, protocol ตามกฎ
- **Stateful firewall:** ติดตามสถานะ connection และอนุญาต response ตาม state
- **Application-aware/NGFW:** รู้จักแอป/ผู้ใช้ และอาจมี IPS, URL filtering, malware inspection, TLS inspection ตามฟีเจอร์/การตั้งค่า
- **Host-based firewall:** บังคับนโยบายบนเครื่องปลายทาง
- **Network firewall:** บังคับนโยบายระหว่างเครือข่าย

**NGFW ไม่ใช่คำรับประกันว่าป้องกันได้ทุกภัย**; การตรวจ TLS ต้องออกแบบด้าน privacy, certificate และผลกระทบต่อระบบ

**Default deny:** ปฏิเสธ traffic ที่ไม่มีกฎอนุญาตอย่างชัดเจน. ระวัง rule กว้างเกินไป เช่น `any → any allow`

## 3.9 ACL, Least Privilege, East-West / North-South [เสริม]

ACL เป็นชุดกฎ allow/deny ตาม address, protocol, port, direction ฯลฯ; rule ordering มีผลในหลายระบบ

- **North-South:** เข้า/ออกขอบเครือข่าย เช่น Internet ↔ data center
- **East-West:** ระหว่าง workload/servers ภายใน
- **Lateral movement:** ผู้โจมตีเคลื่อนจากระบบที่ยึดได้ไปยังระบบอื่น
- **Blast radius:** ขอบเขตผลกระทบเมื่อเกิด breach

## 3.10 VPN, TLS, IPsec [เสริม]

VPN สร้างการเชื่อมต่อผ่านเครือข่ายที่ไม่เชื่อถือได้; **remote-access VPN** สำหรับผู้ใช้, **site-to-site VPN** เชื่อมสำนักงาน. **IPsec** มักใช้ระดับ IP; **TLS** ปกป้องข้อมูลระหว่างแอป เช่น HTTPS. VPN ไม่ได้ทำให้ endpoint ที่ติด malware ปลอดภัยโดยอัตโนมัติ

## 3.11 Embedded Systems [จากสไลด์]

Embedded system คือระบบคอมพิวเตอร์ที่ออกแบบมาทำหน้าที่เฉพาะภายในอุปกรณ์หรือระบบใหญ่ เช่น industrial controller, medical device, automotive system, smart appliance; มักมี CPU/RAM/storage จำกัด

**ความท้าทาย:** อายุใช้งานยาว, compute จำกัด, patch ยาก, legacy software, security capability จำกัด, physical exposure.  
**แนวทาง [เสริม]:** asset inventory, secure configuration, firmware signing, network isolation, allowlisting, controlled maintenance window, physical security, monitoring ตามข้อจำกัดของอุปกรณ์

## 3.12 Industrial Control Systems (ICS) [จากสไลด์]

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

IoT คืออุปกรณ์ทางกายภาพที่เชื่อมต่อเครือข่ายและแลกเปลี่ยนข้อมูล เช่น smart camera, thermostat, wearable, smart appliance

**ความเสี่ยง:** default passwords, weak authentication, unpatched firmware, insecure communications

**มาตรการ:** เปลี่ยน default credentials; ใช้ strong authentication; update firmware; encryption เมื่อเหมาะสม; แยก IoT จาก critical systems; ปิดบริการที่ไม่จำเป็น; ทำ inventory; เปลี่ยนอุปกรณ์ที่หมดการสนับสนุน

**ตัวอย่าง:** กล้อง IP ควรอยู่ใน IoT VLAN และอนุญาตเฉพาะเส้นทางที่จำเป็นไปยัง NVR/management ไม่ควรเข้าถึงฐานข้อมูลการเงิน

## 3.14 Segmentation สำหรับ Embedded, IoT และ ICS [จากสไลด์ + เสริม]

- แยก IoT/OT ออกจาก enterprise user network
- ใช้ VLAN, firewall zone, micro-segmentation ตามความเหมาะสม
- จำกัด traffic ด้วย allowlist; monitor flows และ logs
- จำกัด remote administration ผ่าน jump host/MFA เมื่อระบบรองรับ
- วางแผน patch/maintenance โดยประเมิน safety และ availability
- สำหรับ ICS ต้องมีการอนุมัติจากเจ้าของกระบวนการและวิศวกร OT ก่อนเปลี่ยนแปลงที่อาจกระทบการทำงาน

---

# 4. Objective 4.3 — Cloud Security

## 4.1 Cloud Computing คืออะไร [จากสไลด์]

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

**Hypervisor** ช่วยให้ physical host รันหลาย VM ที่แยกกัน; **Type 1** ทำงานบน hardware โดยตรง, **Type 2** ทำงานบน host OS. **Containers** แชร์ kernel ของ host (ตามแพลตฟอร์ม) และแยกกระบวนการ/ทรัพยากรด้วยกลไก OS

**Multi-tenancy** หมายถึงลูกค้าหลายรายใช้ infrastructure/service ร่วมกันโดยมี logical isolation; ต้องมี controls ป้องกัน tenant หนึ่งเข้าถึงข้อมูลอีก tenant

## 4.3 Cloud Service Models [จากสไลด์]

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
