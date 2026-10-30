"""Scoped editorial correction; source provenance stays in the final coverage report."""
import json
from pathlib import Path
for state in ['published','staged']:
    root=Path(f'content/isc2-cc-2026/learning/{state}/lessons')
    p=root/'lesson-d3-04-least-privilege-sod.json'; l=json.loads(p.read_text(encoding='utf8')); s=l['slides'][3]
    t=s['blocks'][2]['text']
    t['en']=t['en'].split(' The original financial text and picture')[0]+' Define the incompatible responsibilities for the actual workflow, assign independent authorized control, and verify that the effective permissions block the prohibited combination. A fixed number of account names or people is not the rule.'
    t['th']=t['th'].split(' ข้อความกับภาพการเงินต้นฉบับ')[0]+' ให้ระบุหน้าที่ที่ขัดกันในกระบวนงานจริง มอบการควบคุมแก่ผู้มีอำนาจที่เป็นอิสระ และตรวจว่าสิทธิ์ที่มีผลจริงปิดการรวมอำนาจที่ห้าม จำนวนชื่อบัญชีหรือจำนวนคนตายตัวไม่ใช่กฎ'
    s['blocks'][4]['text']={'en':'Enforce independent approval in the actual permissions.','th':'บังคับการอนุมัติที่เป็นอิสระด้วยสิทธิ์ที่มีผลจริง'}
    p.write_text(json.dumps(l,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    p=root/'lesson-d3-05-access-control-models.json'; l=json.loads(p.read_text(encoding='utf8'))
    t=l['slides'][4]['blocks'][2]['text'];t['en']=t['en'].split(' The detailed teaching comes from N/U')[0];t['th']=t['th'].split(' รายละเอียดมาจาก N/U')[0]
    t['en']=t['en'].replace('The user notes include department/job information','Relevant attributes include department/job information');t['th']=t['th'].replace('Notes ของผู้ใช้มีแผนก/ข้อมูลงาน','Attributes ที่เกี่ยวข้องมีแผนก/ข้อมูลงาน')
    t=l['slides'][6]['blocks'][2]['text'];old='The notes do not supply an original ABAC advantages/disadvantages lecture; the additional policy/data caveat here is explicitly technical supporting explanation.';assert old in t['en'];t['en']=t['en'].replace(old,'ABAC also needs trustworthy relevant attributes and defined handling of missing data.')
    old='Notes ไม่มีบทบรรยายข้อดีข้อเสีย ABAC โดยตรง ข้อควรระวังเรื่องนโยบายและข้อมูลที่เพิ่มนี้จึงเป็นคำอธิบายทางเทคนิคเสริม';assert old in t['th'];t['th']=t['th'].replace(old,'ABAC ยังต้องใช้ Attributes ที่เกี่ยวข้องและน่าเชื่อถือ พร้อมกำหนดวิธีจัดการข้อมูลที่ขาด')
    p.write_text(json.dumps(l,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
    p=root/'lesson-d3-06-mfa-authentication-signals.json';l=json.loads(p.read_text(encoding='utf8'));t=l['slides'][2]['blocks'][2]['text']
    t['en']=t['en'].split(' This teaching is an explicit official ISC2 AI application')[0];t['th']=t['th'].split(' เนื้อหานี้เป็นการประยุกต์ AI ที่ ISC2')[0]
    p.write_text(json.dumps(l,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
