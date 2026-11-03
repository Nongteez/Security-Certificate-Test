import json
from pathlib import Path
p=Path('content/isc2-cc-2026/sources/domain-5/production')
ds=json.loads((p/'drafts.json').read_text(encoding='utf8'))
by={d['id']:d for d in ds}
def option(q,i,en,th,why,why_th): by[q]['choices'][i]=[en,th,why,why_th]
option(1001,2,'Both actions classify the report at different levels of detail','ทั้งสองการกระทำจัดประเภทรายงานด้วยระดับรายละเอียดต่างกัน','The analyst applies the existing category indicator rather than making a second category decision.','นักวิเคราะห์ติดตัวบ่งชี้ประเภทที่กำหนดแล้ว ไม่ได้ตัดสินประเภทอีกครั้ง')
option(1009,0,'Distribute keys over quantum channels to reveal interception','แจกจ่ายกุญแจผ่านช่องทางควอนตัมเพื่อตรวจพบการดักรับ','This describes a quantum key distribution goal, not the purpose of post-quantum cryptographic algorithms.','ข้อนี้อธิบายเป้าหมายของ Quantum key distribution ไม่ใช่จุดประสงค์ของอัลกอริทึม Post-quantum')
option(1009,1,'Increase the length of existing RSA keys as the long-term quantum defense','เพิ่มความยาวกุญแจ RSA เดิมเพื่อเป็นการป้องกันควอนตัมระยะยาว','Larger RSA keys do not remove the underlying vulnerability to a sufficiently capable quantum computer.','กุญแจ RSA ที่ยาวขึ้นไม่ได้ขจัดจุดอ่อนพื้นฐานต่อคอมพิวเตอร์ควอนตัมที่มีความสามารถเพียงพอ')
option(1009,2,'Use stronger password hashing to protect public-key exchanges from quantum attacks','ใช้การแฮชรหัสผ่านที่แข็งแกร่งขึ้นเพื่อป้องกันการแลกเปลี่ยนกุญแจสาธารณะจากควอนตัม','Password hashing addresses stored password protection; it does not replace quantum-vulnerable public-key algorithms.','การแฮชรหัสผ่านปกป้องรหัสผ่านที่จัดเก็บ ไม่ได้ทดแทนอัลกอริทึมกุญแจสาธารณะที่เสี่ยงต่อควอนตัม')
option(1012,1,'Correlate the existing sign-in records by account and source address','เชื่อมโยงบันทึกลงชื่อเข้าใช้เดิมตามบัญชีและที่อยู่ต้นทาง','This relates sign-ins but cannot identify export requests that the collected records do not contain.','ข้อนี้เชื่อมโยงการลงชื่อเข้าใช้ แต่ไม่ระบุคำขอส่งออกที่ไม่มีในบันทึกที่เก็บ')
option(1013,3,'The training-host alert because repeated probes may precede a compromise','แจ้งเตือนเครื่องฝึกอบรม เพราะการสแกนซ้ำอาจนำไปสู่การบุกรุก','Possible later compromise merits investigation, but the stated rule gives ongoing critical business harm higher priority.','โอกาสถูกบุกรุกภายหลังควรตรวจสอบ แต่กฎที่ระบุให้ความเสียหายต่อธุรกิจสำคัญที่กำลังเกิดมีลำดับสูงกว่า')
option(1014,0,'Collect another day of account activity before notifying the incident lead','เก็บกิจกรรมบัญชีเพิ่มอีกหนึ่งวันก่อนแจ้งหัวหน้าเหตุการณ์','More evidence can be collected, but validated privileged-account activity should already be escalated to the decision-maker.','เก็บหลักฐานเพิ่มได้ แต่ควรยกระดับกิจกรรมบัญชีสิทธิ์สูงที่ตรวจสอบแล้วให้ผู้มีอำนาจตัดสินใจ')
option(1014,3,'Ask the account owner to approve restricting their own account','ขอให้เจ้าของบัญชีอนุมัติการจำกัดบัญชีของตน','The playbook assigns restriction approval to the incident lead, not to the account owner.','คู่มือกำหนดให้หัวหน้าเหตุการณ์อนุมัติการจำกัด ไม่ใช่เจ้าของบัญชี')
option(1017,0,'Both are accidental insider actions because the recipients are outside the organization','ทั้งสองเป็นการกระทำโดยไม่ตั้งใจจากบุคคลภายใน เพราะผู้รับอยู่นอกองค์กร','Recipient location does not remove the first employee’s deliberate financial motive.','ตำแหน่งของผู้รับไม่ได้ลบเจตนาหาประโยชน์ทางการเงินของพนักงานคนแรก')
option(1021,2,'A summary of the full archive through the secure case portal','สรุปคลังบันทึกทั้งหมดผ่าน Secure case portal','A summary of the full archive can still include irrelevant employee details; relevance limits apply as well as the channel.','สรุปคลังทั้งหมดอาจยังมีรายละเอียดพนักงานที่ไม่เกี่ยวข้อง ต้องจำกัดความเกี่ยวข้องควบคู่กับช่องทาง')
option(1022,2,'Export the held records to the case folder, then delete the originals before checking the export','ส่งออกบันทึกที่ถูกระงับการลบไปโฟลเดอร์คดี แล้วลบต้นฉบับก่อนตรวจสอบไฟล์ส่งออก','An unchecked export does not establish that the held records remain complete and available; preserve the controlled records under the hold.','ไฟล์ส่งออกที่ยังไม่ตรวจสอบไม่ยืนยันว่าบันทึกครบและพร้อมใช้ ควรเก็บบันทึกที่ควบคุมไว้ตามคำสั่ง')
option(1026,1,'The team confirms that the tool appears in the endpoint software inventory','ทีมยืนยันว่ามีเครื่องมือในบัญชีซอฟต์แวร์ของเครื่องปลายทาง','Installed software does not demonstrate that the on-call team can operate it successfully.','การติดตั้งซอฟต์แวร์ไม่ได้แสดงว่าทีมเวรใช้เครื่องมือนั้นได้สำเร็จ')
option(1032,1,'Troubleshoot the failed change in place before starting the documented rollback','แก้ปัญหาการเปลี่ยนแปลงที่ล้มเหลวก่อนเริ่มย้อนกลับตามเอกสาร','In-place troubleshooting delays the authorized response to the failed health check specified in this plan.','การแก้ปัญหาในระบบที่เปลี่ยนแล้วทำให้การตอบสนองที่อนุมัติไว้สำหรับผลตรวจล้มเหลวล่าช้า')
option(1032,2,'Request a second approval before using the documented rollback','ขออนุมัติครั้งที่สองก่อนย้อนกลับตามเอกสาร','The stated plan already authorizes this rollback for the observed result; no additional approval requirement is given.','แผนที่ระบุอนุมัติการย้อนกลับสำหรับผลนี้แล้ว ไม่มีเงื่อนไขให้ขออนุมัติเพิ่ม')
option(1033,2,'A tabletop that discusses how proposed attacks might be detected','Tabletop ที่อภิปรายว่าจะตรวจพบการโจมตีที่เสนอได้อย่างไร','A discussion can consider detection, but this exercise executes simulations, changes rules and retests their effect.','การอภิปรายพิจารณาการตรวจจับได้ แต่โจทย์ดำเนินการจำลอง ปรับกฎ และทดสอบผลซ้ำ')
option(1033,3,'A blue-team review of detections using stored attack records','การทบทวนการตรวจจับของ Blue team โดยใช้บันทึกการโจมตีที่จัดเก็บ','A defensive record review does not capture the active attacker-defender collaboration and repeated simulations described.','การทบทวนบันทึกฝ่ายป้องกันไม่ครอบคลุมความร่วมมือของฝ่ายโจมตีและป้องกัน รวมถึงการจำลองซ้ำตามโจทย์')
option(1035,1,'The result supports postponing authenticated testing until a version vulnerability is found','ผลนี้สนับสนุนให้เลื่อนการทดสอบแบบยืนยันตัวตนจนกว่าจะพบช่องโหว่เวอร์ชัน','The scan has not assessed those functions, so its clean result supplies no evidence for postponing their assessment.','การสแกนยังไม่ได้ประเมินฟังก์ชันเหล่านั้น ผลที่ไม่พบปัญหาจึงไม่ใช่หลักฐานให้เลื่อนการประเมิน')
option(1038,2,'Repeat the previous penetration test against the existing internal interface','ทดสอบเจาะระบบซ้ำที่อินเทอร์เฟซภายในเดิม','Testing the previous interface does not first identify the new partner boundary and changed attack paths needed for control selection.','การทดสอบอินเทอร์เฟซเดิมไม่ได้เริ่มจากระบุขอบเขตคู่ค้าใหม่และเส้นทางโจมตีที่เปลี่ยนสำหรับเลือกมาตรการ')
option(1038,3,'Review the new partner’s security certification and accepted contract terms','ตรวจสอบใบรับรองความปลอดภัยและเงื่อนไขสัญญาที่ตกลงกับคู่ค้าใหม่','Supplier assurance can inform risk decisions, but it does not map assets, boundaries and attack paths in the changed workflow.','การประเมินคู่ค้าช่วยตัดสินความเสี่ยงได้ แต่ไม่ได้วิเคราะห์ทรัพย์สิน ขอบเขต และเส้นทางโจมตีในงานที่เปลี่ยน')
for q,c in {1006:'D',1007:'B',1013:'C',1022:'C',1029:'C',1032:'C',1036:'B',1038:'C'}.items(): by[q]['cognitive']=c
by[1007]['difficulty']='foundational'
by[1033]['cognitive']='B'
for q in [1007,1036]:by[q]['stemType']='conceptual'
by[1010]['choices']=[ [s.replace('กลไกสร้างกุญแจ','กลไกจัดตั้งกุญแจร่วม') for s in c] for c in by[1010]['choices'] ]
newrefs={
 'R26':dict(title='RFC8017 PKCS#1 RSA v2.2',url='https://www.rfc-editor.org/rfc/rfc8017.html',location='5.1.1 RSAEP public-key encryption;5.1.2 RSADP private-key decryption',checked='2026-11-03',**{'class':'technical-primary'}),
 'R27':dict(title='Microsoft Service Assurance incident preparation',url='https://learn.microsoft.com/en-us/compliance/assurance/assurance-sim-preparation',location='Joint red/blue operations; high-bandwidth information sharing and partnership in purple exercises',checked='2026-11-03',**{'class':'technical-primary'}),
 'R28':dict(title='NIST SP800-84',url='https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-84.pdf',location='Section5 functional exercises: hands-on practice executing functions',checked='2026-11-03',**{'class':'technical-primary'})}
k=json.loads((p/'knowledge.json').read_text(encoding='utf8'));k['references'].update(newrefs)
for q,r in [(1007,'R26'),(1033,'R27'),(1034,'R27'),(1026,'R28')]:
 by[q]['references']=list(dict.fromkeys(by[q]['references']+[r]))
 concept=next(c for c in k['concepts'] if c['id']==by[q]['knowledge']);concept['references']=list(dict.fromkeys(concept['references']+[r]))
for d in ds:
 if d['status']!='REJECTED':d['revision']=3
(p/'drafts.json').write_text(json.dumps(ds,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
(p/'knowledge.json').write_text(json.dumps(k,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
bp=json.loads((p/'blueprint.json').read_text(encoding='utf8'))
for b in bp:
 for f in ['cognitive','difficulty','stemType','references']:b[f]=by[b['id']][f]
(p/'blueprint.json').write_text(json.dumps(bp,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
print('Revision3: distractors, conservative cognitive labels and direct references repaired; keys unchanged.')
