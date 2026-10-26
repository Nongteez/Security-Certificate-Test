import {scene,pair,icon,safeguards} from './shared.js';
export function confidentiality(host,context){
 const s=scene(host,context,'confidentiality',pair('Viewed without permission. Still a breach.','เห็นข้อมูลโดยไม่มีสิทธิ์ ก็ละเมิดความลับ'),'CONFIDENTIALITY / C');
 const diagram=s.doc.createElement('figure');diagram.className='v3-access-diagram';
 const allowed=s.doc.createElement('div');allowed.className='v3-access-person';allowed.append(icon(s.doc,'person'),s.put('p','v3-copy',pair('Authorized user','ผู้มีสิทธิ์')),s.put('strong','v3-access-ok',pair('Permitted access','เข้าถึงตามสิทธิ์')));
 const document=s.doc.createElement('div');document.className='v3-payroll-document';document.append(icon(s.doc,'file'),s.put('h4','v3-term',pair('Executive compensation','เงินเดือนผู้บริหาร')));
 for(let i=0;i<3;i++){const line=s.doc.createElement('div');line.className='v3-document-line';document.append(line);}
 const intern=s.doc.createElement('div');intern.className='v3-access-person v3-access-intern';intern.append(icon(s.doc,'eye'),s.put('p','v3-copy',pair('Unauthorized intern','ผู้ฝึกงานไม่มีสิทธิ์')),s.put('strong','v3-access-breach',pair('Viewed the file','เปิดอ่านข้อมูลแล้ว')));
 diagram.append(allowed,s.put('span','v3-access-arrow','→'),document,s.put('span','v3-access-arrow v3-access-breach','→'),intern);
 const lesson=s.doc.createElement('div');lesson.className='v3-confidentiality-message';lesson.append(s.put('p','v3-big-statement',pair('No changes.\nNo deletion.\nSecrecy lost.','ไม่แก้ไข\nไม่ลบข้อมูล\nแต่ความลับรั่วไหล')),s.put('p','v3-copy',pair('The intern viewed an unencrypted salary spreadsheet. Unauthorized viewing is the harm.','ผู้ฝึกงานเปิดอ่านไฟล์เงินเดือนที่ไม่ได้เข้ารหัส การเปิดอ่านโดยไม่มีสิทธิ์คือความเสียหาย')));
 s.main.append(diagram,lesson);s.footer.append(safeguards(s,[pair('Encryption · AES / TLS','การเข้ารหัส · AES / TLS'),pair('Least Privilege · RBAC','จำกัดสิทธิ์ · Least Privilege / RBAC'),pair('Classification · policies · NDA','จัดชั้นความลับ · นโยบาย · NDA')]));return{destroy(){}};
}
