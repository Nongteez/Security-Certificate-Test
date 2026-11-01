"""Auditable content-only replacement plan; no writes without --apply."""
from pathlib import Path
import hashlib, json, sys
ROOT = Path(__file__).resolve().parents[3]
OUT = Path(__file__).resolve().parent
base = json.loads((OUT/'baseline.json').read_text(encoding='utf-8-sig'))
changes = []
def edit(id, file, old, new, count=1):
    changes.append(dict(id=id, file=file, before=old, after=new, count=count))
def md(d): return f'content/isc2-cc-2026/reading/domain-{d}.md'
G='js/core/diagram-generator.js'
edit('D1-F03',md(1),'Threat คือสิ่งภายนอกหรืออันตรายที่เข้ามา (เช่น Hacker, Flood)', 'Threat คือบุคคล สิ่ง หรือเหตุการณ์ที่อาจก่อความเสียหาย ทั้งจากภายในและภายนอกองค์กร (เช่น พนักงานประสงค์ร้าย, Hacker, Flood)')
edit('D1-F03',md(1),'สิ่งภายนอก/เหตุการณ์ที่อาจก่ออันตราย (Hacker, Malware, Flood)', 'บุคคล สิ่ง หรือเหตุการณ์ภายในหรือภายนอกที่อาจก่ออันตราย (Insider, Hacker, Malware, Flood)')
edit('D1-F04',md(1),'จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือการควบคุม ที่เปิดโอกาสให้ Threat ถูกใช้ประโยชน์','จุดอ่อนหรือข้อบกพร่องในระบบ กระบวนการ หรือมาตรการควบคุม ที่ผู้ก่อภัยคุกคามอาจใช้ประโยชน์ หรือเหตุการณ์คุกคามอาจกระตุ้นให้เกิดความเสียหาย')
edit('D1-F05',md(1),'กฎหมายคุ้มครองข้อมูลส่วนบุคคลของสหภาพยุโรป เน้นสิทธิของ Data Subject และข้อบังคับสำหรับ Controller/Processor ทั่วโลกที่มีการประมวลผลข้อมูลพลเมืองสหภาพยุโรป','GDPR คุ้มครองข้อมูลส่วนบุคคลตามขอบเขตการใช้บังคับของกฎหมาย เช่น การประมวลผลในบริบทกิจกรรมของสถานประกอบการในสหภาพยุโรป หรือการเสนอสินค้า/บริการแก่บุคคลที่อยู่ในสหภาพยุโรปหรือเฝ้าติดตามพฤติกรรมของบุคคลที่เกิดขึ้นที่นั่นตามเงื่อนไข Article 3 การมีสัญชาติ EU เพียงอย่างเดียวไม่ใช่เกณฑ์ตัดสิน')
edit('D1-N05',md(1),'การจัดเก็บ (Collection)','การเก็บรวบรวมข้อมูล (Collection)')
edit('D1-N05',md(1),'นิติบุคคลหรือองค์กรที่เป็นผู้ตัดสินใจว่า','บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า')
edit('D1-N05',G,'องค์กรที่มีอำนาจตัดสินใจว่า <em>เก็บข้อมูลไปทำไม และใช้อย่างไร</em>','บุคคลธรรมดา นิติบุคคล หน่วยงาน หรือองค์กรที่กำหนดโดยลำพังหรือร่วมกับผู้อื่นว่า <em>เก็บข้อมูลไปทำไม และใช้อย่างไร</em>')
edit('D1-N10','js/core/content-components.js','ประตูกลักกันคนเดินตาม (Mantraps)','ประตูควบคุมการผ่านเข้าออกสองชั้น (Mantrap/Access Control Vestibule)')
edit('D2-02',md(2),'ก่อนจะเกิดความเสียหายที่ไม่อาจฟื้นคืนได้','ก่อนเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้')
edit('D2-02',md(2),'องค์กรจะล่มสลายก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น','อาจเกิดผลกระทบเกินระดับที่องค์กรยอมรับได้ก่อนที่ระบบ IT จะกู้คืนเสร็จสิ้น โดยไม่ได้หมายความว่าองค์กรจะล่มสลายหรือเกิดความเสียหายที่ฟื้นคืนไม่ได้เสมอไป')
edit('D2-04',md(2),'"Raw measurable value", "Quantifiable data", "Measurement base" | ค่าดิบเชิงปริมาณที่ใช้เป็นฐานข้อมูลในการประเมินผล','"Defined measurable value", "Count, percentage, ratio or average" | ค่าที่กำหนดและวัดอย่างสม่ำเสมอเพื่อประเมินการดำเนินงานหรือความเสี่ยง รวมถึง KPI และ KRI ที่เลือกใช้ตามวัตถุประสงค์')
edit('D2-04',md(2),'<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>','Metric อาจเป็นจำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย KPI และ KRI เป็น Metric ที่เลือกใช้ตามวัตถุประสงค์: KPI ติดตามผลงานเทียบเป้าหมาย ส่วน KRI เฝ้าระวังแนวโน้มความเสี่ยง Dashboard, scorecard และ report เป็นรูปแบบนำเสนอที่อาจใช้ร่วมกันได้ ภาพต่อไปนี้เป็นตัวอย่างการจัดระบบการวัดผล ไม่ใช่ลำดับขั้นที่ทุกองค์กรต้องใช้\n\n<div class="reading-semantic-diagram" data-diagram="effectivenessHierarchy"></div>')
edit('D2-04',G,'ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ซึ่งเป็นรากฐานข้อมูลของการวัดผลทุกระดับ','ค่าที่วัดได้: จำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย รวมถึง KPI และ KRI')
edit('D2-04',G,'ค่าดิบที่วัดได้เชิงปริมาณ (Quantifiable Raw Value) ประเมินประสิทธิผลตามคุณสมบัติ Relevant, Measurable และ Consistent','ค่าที่วัดได้: จำนวน ร้อยละ อัตราส่วน หรือค่าเฉลี่ย รวมถึง KPI และ KRI ที่เลือกใช้ตามวัตถุประสงค์ โดยควร Relevant, Measurable และ Consistent')
edit('D2-06',G,'DISASTER RECOVERY (DR) — แผนกู้คืนระบบเทคโนโลยีสารสนเทศ','DISASTER RECOVERY (DR) — การกู้คืนระบบเทคโนโลยีสารสนเทศ')
edit('D2-06',G,'แผนกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล','การกู้คืนระบบ IT โครงสร้างพื้นฐาน และข้อมูล')
for file,count in [(md(2),6),('content/isc2-cc-2026/reading/domain-2-scenarios.js',4)]:
    edit('D2-08',file,'เมทริกซ์','ตัวชี้วัด',count)
edit('D34-01',md(3),'หัวข้อการควบคุมการเข้าถึง (PR.AC)','หมวด Identity Management, Authentication, and Access Control (PR.AA)')
edit('D34-03',md(4),'| Packet | IPv4, IPv6, ICMP, IPsec, ARP |','| Packet | IPv4, IPv6, ICMP, IPsec |')
edit('D34-03',md(4),'| Frame / Bits | Ethernet, 802.11 Wi-Fi, MAC, สื่อทางกายภาพ |','| Frame / Bits | Ethernet, 802.11 Wi-Fi, ARP, MAC, สื่อทางกายภาพ |\n\nในแบบจำลอง TCP/IP 4 ชั้นนี้ ARP อยู่ในชั้น Link / Network Access ทำหน้าที่หา Link-layer address ของปลายทางหรือ next hop บนลิงก์ IPv4 เดียวกัน')
edit('D34-04',md(4),'อุปกรณ์สามารถกำหนดหมายเลขไอพีให้ตัวเองได้อัตโนมัติ โดยส่งคำขอไปยังเราเตอร์ (Router Solicitation) และนำ Prefix ที่ได้มารวมกับ MAC Address ของตนเองโดยไม่ต้องพึ่งพา DHCP Server เสมอไป','SLAAC สร้างที่อยู่ IPv6 โดยใช้ prefix ที่เราเตอร์ประกาศร่วมกับ Interface Identifier (IID) ของอินเทอร์เฟซ วิธีสร้าง IID ไม่จำเป็นต้องใช้ MAC Address; EUI-64 ที่อาศัย MAC เป็นเพียงวิธีหนึ่งในอดีต')
edit('D34-07',md(4),'หากต้องการออกไปดาวน์โหลดแพตช์ภายนอก ต้องผ่าน **NAT Gateway** เท่านั้น','การออกไปยังอินเทอร์เน็ตต้องใช้เส้นทางและกลไกที่เหมาะสม เช่น **NAT Gateway** สำหรับ IPv4; อาจใช้ NAT instance หรือสำหรับ IPv6 ใช้ egress-only Internet Gateway ตามสถาปัตยกรรมและนโยบาย')
for d,old,new,thai in [(3,'Access Controls','Identity and Access Management (IAM) Concepts','แนวคิดการบริหารตัวตนและการเข้าถึง'),(4,'Network Security','Networking and Cloud Security Concepts','แนวคิดความมั่นคงปลอดภัยเครือข่ายและคลาวด์')]:
    edit('D34-08',f'content/isc2-cc-2026/reading/domain-{d}.js',f"title: 'Domain {d}: {old}'",f"title: 'Domain {d}: {new}'")
    edit('D34-08',md(d),f'ใน Domain {d}: {old} (น้ำหนัก',f'ใน Domain {d}: {new} — {thai} (น้ำหนัก')
edit('D34-10',md(4),'- **APIPA (Automatic Private IP Addressing):** 169.254.0.0 – 169.254.255.255 (ช่วง 169.254.0.0/16) ระบบปฏิบัติการจะจ่ายให้ตัวเองอัตโนมัติเมื่อไม่สามารถติดต่อขอไอพีจาก DHCP Server ได้','\n**IPv4 Link-local / APIPA — แยกจาก RFC 1918:**\n\nสงวนบล็อก 169.254.0.0/16 สำหรับสื่อสารบนลิงก์เดียวกัน การเลือกที่อยู่อัตโนมัติตาม RFC 3927 ใช้ 169.254.1.0–169.254.254.255 โดยไม่ใช้ /24 แรกและสุดท้าย และเราเตอร์ไม่ส่งต่อทราฟฟิกนี้ออกนอกลิงก์ APIPA อาจถูกใช้เมื่อไม่สามารถรับที่อยู่จาก DHCP Server ได้')
edit('D34-11',md(3),'เป็นโมเดลการควบคุมการเข้าถึงที่มีความเข้มงวดและปลอดภัยสูงสุด','เป็นโมเดลการควบคุมการเข้าถึงที่บังคับใช้นโยบายส่วนกลาง')
edit('D34-11',md(3),'ความมั่นคงปลอดภัยระดับสูงสุด ป้องกันข้อมูลรั่วไหลได้อย่างเด็ดขาด','ช่วยจำกัดการเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต แต่ไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี')
edit('D34-11',md(3),'ป้องกันข้อมูลความลับรั่วไหลในระดับสูงสุด | ระบบทหารอนุญาตให้อ่านเอกสารลับเฉพาะผู้มี Clearance','บังคับใช้นโยบายส่วนกลางเพื่อจำกัดการเปิดเผยข้อมูล | ระบบทหารตรวจ Clearance, Need-to-Know และนโยบายที่เกี่ยวข้องก่อนอนุญาตให้อ่านเอกสารลับ')
for file in [md(3),'content/isc2-cc-2026/reading/domain-3-scenarios.js']:
    edit('D34-11',file,'ของเอกสารเท่านั้น โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ','ของเอกสาร และต้องมี Need-to-Know พร้อมผ่านนโยบายที่เกี่ยวข้องด้วย โดยผู้ใช้ไม่มีสิทธิ์เปลี่ยนแปลงป้ายกำกับ')
    edit('D34-11',file,'เป็นโมเดลการควบคุมที่มีความเข้มงวดสูงสุด','เป็นโมเดลการควบคุมที่บังคับใช้นโยบายส่วนกลาง')
edit('D34-11',G,'Highest Security &middot; Need-to-Know','Central Policy &middot; Need-to-Know')
edit('D34-11',G,'นโยบายกลางบังคับใช้ผ่าน Security Labels และ Clearances ปลอดภัยสูงสุด ผู้ใช้แก้เองไม่ได้','นโยบายกลางบังคับใช้ผ่าน Security Labels และ Clearances ร่วมกับ Need-to-Know ผู้ใช้แก้เองไม่ได้ และไม่รับประกันว่าจะป้องกันข้อมูลรั่วไหลได้ทุกกรณี')
edit('D34-12',md(4),'การซ่อน SSID ไม่ได้ช่วยอะไร เพราะชื่อเครือข่ายยังคงถูกส่งออกไปใน Probe Requests และ Beacon Frames เมื่อมีเครื่องเชื่อมต่อ','การซ่อน SSID เพียงละชื่อจากการประกาศเครือข่าย ไม่ได้หยุด Beacon ทั้งหมด และไม่ใช่การเข้ารหัสหรือการพิสูจน์ตัวตน ผู้สังเกตยังอาจทราบชื่อจากการสื่อสารระหว่างการค้นหาและเชื่อมต่อของลูกข่าย จึงควรใช้ WPA2/WPA3 และการตั้งค่าที่เหมาะสม')
edit('D34-13',md(4),'รูปแบบย่อยของ PaaS ที่ลูกค้านำเฉพาะโค้ดของฟังก์ชันสั้น ๆ มาอัปโหลดไว้ โดยระบบจะรันโค้ดเมื่อมีเหตุการณ์เข้ามากระตุ้น (Event-Driven) และสเกลขนาดเป็นศูนย์เมื่อไม่มีการใช้งาน','FaaS รันฟังก์ชันตามเหตุการณ์ (Event-Driven) และให้ผู้ให้บริการบริหารโครงสร้างพื้นฐาน หลายแผนรองรับการ scale-to-zero เมื่อว่าง แต่พฤติกรรมนี้ขึ้นอยู่กับบริการ แผน และการตั้งค่า เช่น การมี always-ready instance')
edit('D34-16',md(4),'โพรโทคอลสำคัญ: RPC (Remote Procedure Call), NetBIOS, Sockets','โพรโทคอลที่มักใช้เป็นตัวอย่าง: RPC (Remote Procedure Call), NetBIOS\n   - Session Layer เป็นแนวคิดการสร้าง บริหาร และยุติเซสชันระหว่างแอปพลิเคชัน ส่วน sockets เป็น API/นามธรรมของจุดปลายการสื่อสารที่แอปใช้เรียกบริการเครือข่าย ไม่ใช่โพรโทคอลประจำ Session Layer')
edit('D34-16',G,'RPC, NetBIOS, Sockets &middot; Session Management','RPC, NetBIOS &middot; Session Management')

texts={}
for c in changes:
    f=c['file']
    if f not in texts:
        raw=(ROOT/f).read_bytes()
        assert hashlib.sha256(raw).hexdigest()==base['hashes'][f], f'Concurrent edit: {f}'
        texts[f]=raw.decode('utf-8')
    s=texts[f]
    assert s.count(c['before'])==c['count'], (c['id'],f,s.count(c['before']),c['count'])
    c['beforeLines']=[s[:i].count('\n')+1 for i in range(len(s)) if s.startswith(c['before'],i)]
    texts[f]=s.replace(c['before'],c['after'])
(OUT/'correction-checklist.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2),encoding='utf-8')
if '--apply' in sys.argv:
    # Check every target again before the first mutation.
    for f in texts:
        assert hashlib.sha256((ROOT/f).read_bytes()).hexdigest()==base['hashes'][f],f
    for f,s in texts.items(): (ROOT/f).write_bytes(s.encode('utf-8'))
print(f'{len(set(c["id"] for c in changes))} findings; {len(changes)} replacement rules; {len(texts)} files; applied={"--apply" in sys.argv}')
