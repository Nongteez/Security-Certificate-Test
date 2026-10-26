import {scene,pair,icon,safeguards} from './shared.js';
export function integrity(host,context){
 const s=scene(host,context,'integrity',pair('The payment ran. The destination was wrong.','ระบบโอนเงินได้ แต่ปลายทางถูกเปลี่ยน'),'INTEGRITY / I');
 const comparison=s.doc.createElement('div');comparison.className='v3-transfer-comparison';
 for(const changed of [false,true]){const sheet=s.doc.createElement('section');sheet.className=`v3-transfer-sheet ${changed?'v3-transfer-altered':''}`;sheet.append(s.put('p','v3-record-label',changed?pair('AFTER UNAUTHORIZED MODIFICATION','หลังถูกแก้ไขโดยมิชอบ'):pair('ORIGINAL INSTRUCTION','คำสั่งโอนเงินเดิม')),icon(s.doc,'file'),s.put('h4','v3-term',pair('Beneficiary','บัญชีผู้รับเงิน')),s.put('p','v3-transfer-value',changed?pair("Attacker’s account",'บัญชีของผู้โจมตี'):pair('Intended recipient','ผู้รับเงินที่ระบุไว้')));comparison.append(sheet);if(!changed)comparison.append(s.put('div','v3-change-arrow','→'));}
 s.main.append(comparison,s.put('p','v3-integrity-conclusion',pair('On-time processing cannot make falsified instructions trustworthy.','การประมวลผลตรงเวลา ไม่ได้ทำให้คำสั่งที่ถูกปลอมแปลงเชื่อถือได้')));
 s.footer.append(safeguards(s,[pair('SHA-256 · detect changes','SHA-256 · ตรวจพบการเปลี่ยนแปลง'),pair('Digital signatures · verify integrity','Digital signatures · ตรวจสอบ Integrity'),pair('FIM · monitor critical files','FIM · เฝ้าระวังไฟล์สำคัญ')]));return{destroy(){}};
}
