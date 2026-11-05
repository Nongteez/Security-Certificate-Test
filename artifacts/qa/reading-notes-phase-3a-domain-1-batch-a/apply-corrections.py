from pathlib import Path
import json,difflib
ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
p=ROOT/'content/isc2-cc-2026/reading/domain-1.md'
before=(OUT/'before-domain-1.md').read_bytes().decode('utf-8')
assert p.read_bytes().decode('utf-8')==before,'Refusing to overwrite intervening edits'
changes=[]
def replace(old,new,finding):
    global before
    assert before.count(old)==1,(finding,old)
    changes.append({'finding':finding,'before':old,'after':new})
    before=before.replace(old,new,1)
replace('องค์กรยังคงต้องเคารพสิทธิและความยินยอมของ Data Subject เสมอ','องค์กรต้องเคารพสิทธิของ Data Subject ตามกฎหมายที่ใช้บังคับ และขอความยินยอมเมื่อใช้ฐานความยินยอม <em>Respect data-subject rights under applicable law; obtain consent when relying on consent as the legal basis.</em>','ACC-D1-01')
replace('| **มาตรการควบคุมหลัก** | Encryption, Access Control, Need to Know, Firewalls | Consent, Data Retention, Purpose Limitation, Right to be Forgotten |','| **มาตรการควบคุมหลัก** | Encryption, Access Control, Need to Know, Firewalls | Lawful Basis (เช่น Consent เมื่อเหมาะสม), Transparency, Data Retention, Purpose Limitation, Right to be Forgotten |','ACC-D1-01')
replace('| **จุดลวงในข้อสอบ** | การเข้ารหัสข้อมูล (Encryption) ตอบสนอง Confidentiality แต่ *ไม่ได้แปลว่าปฏิบัติตาม Privacy ครบถ้วน* หากเก็บข้อมูลโดยไม่ได้รับความยินยอม! | ข้อสอบมักถามว่า "การเก็บข้อมูลลูกค้าโดยเข้ารหัสอย่างดีแต่ไม่แจ้งวัตถุประสงค์ ผิดหลักการใด?" คำตอบคือ **Privacy Violation** |','| **ตัวอย่างวิเคราะห์ (Illustrative example)** | Encryption จำกัดการเข้าถึง แต่เพียงอย่างเดียวยังไม่ยืนยันว่าปฏิบัติตาม Privacy ครบถ้วน / Encryption restricts access; it alone does not establish privacy compliance. | ต้องพิจารณาวัตถุประสงค์ ฐานกฎหมาย และหน้าที่ด้านความโปร่งใสตามกฎหมายที่ใช้บังคับ; ตาม GDPR ความยินยอมเป็นฐานหนึ่ง / Check purpose, lawful basis and applicable transparency duties; under GDPR, consent is one possible basis. |','ACC-D1-01')
replace('### 1.4.1 Security Control Categories\n','### 1.4.1 Security Control Categories\n\n**คำศัพท์ในโครงร่างสอบ (Outline terminology):** โครงร่างสอบ CC ที่มีผล 1 กันยายน 2026 ระบุหมวด Technical, Administrative และ Physical; บทเรียนนี้แยกงานบริหาร (Managerial) และงานประจำวันโดยบุคลากร (Operational) เพื่อช่วยอธิบายด้าน Administrative / The CC outline effective 1 September 2026 names Technical, Administrative and Physical controls; this course explains administrative work through managerial and day-to-day operational activities.\n','ENR-D1-04')
replace('  <p><strong>ข้อสรุปเด็ดขาดสำหรับห้องสอบ:</strong> สมาชิก ISC2 ต้องยึดถือประโยชน์และความปลอดภัยของสังคมส่วนรวม (<strong>Canon 1</strong>) เป็นอันดับสูงสุดเสมอ และ <strong>Canon 1 อยู่เหนือผลประโยชน์ของนายจ้างหรือลูกค้า (Canon 3) อย่างไม่มีข้อยกเว้น</strong></p>','  <p><strong>แนวทางใช้ดุลยพินิจ (Professional judgment):</strong> คำนึงถึงความปลอดภัยของสาธารณะ เก็บรักษาหลักฐานที่เกี่ยวข้อง และขอคำแนะนำผ่านช่องทางที่มีอำนาจ เช่น ผู้รับผิดชอบด้านความปลอดภัยหรือฝ่ายกฎหมาย โดยพิจารณาหน้าที่ทั้งสี่ร่วมกับข้อเท็จจริง ไม่อนุมานว่ามีสิทธิปกปิด เปิดเผยข้อมูลต่อสาธารณะโดยพลการ หรือทำผิดกฎหมาย / Protect public welfare, preserve relevant evidence and seek guidance through authorized channels, such as security leadership or legal counsel, considering all four duties and the facts. Do not infer permission to conceal, disclose publicly without authorization or act illegally.</p>','VER-D1-01')
p.write_bytes(before.encode('utf-8'))
(OUT/'exact-changes.json').write_bytes((json.dumps(changes,ensure_ascii=False,indent=2)+'\n').encode())
(OUT/'production-diff.txt').write_bytes(''.join(difflib.unified_diff((OUT/'before-domain-1.md').read_bytes().decode().splitlines(True),before.splitlines(True),fromfile='entry/domain-1.md',tofile='after/domain-1.md')).encode())
print('Applied',len(changes),'bounded changes in domain-1.md')
