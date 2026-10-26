import {scene,pair} from './shared.js';
export function recap(host,context){
 const s=scene(host,context,'recap',pair('Identify the harm. Choose the security goal.','แยกความเสียหายให้ชัด แล้วเลือกเป้าหมาย'),'CIA TRIAD / RECAP');
 const rows=[
  ['C','Confidentiality',pair('Disclosure','การเปิดเผย'),pair('AES / TLS · ACLs\nNeed-to-know · Classification','AES / TLS · ACLs\nNeed-to-know · จัดชั้นความลับ'),pair('Encryption does not prevent deletion.','การเข้ารหัสไม่ได้ป้องกันการลบข้อมูล')],
  ['I','Integrity',pair('Modification','การดัดแปลง'),pair('SHA-256 · Digital signatures\nFIM · Change control','SHA-256 · Digital signatures\nFIM · ควบคุมการเปลี่ยนแปลง'),pair('Viewing and altering are different harms.','การเปิดอ่านกับการแก้ไข เป็นคนละผลกระทบ')],
  ['A','Availability',pair('Loss of access','การเข้าถึงไม่ได้'),pair('Redundancy · UPS\nBackups · DR · DDoS defense','ระบบสำรอง · UPS\nแบ็กอัป · DR · ป้องกัน DDoS'),pair('Backups alone do not ensure secrecy.','แบ็กอัปเพียงอย่างเดียวไม่คุ้มครองความลับ')]
 ];
 const table=s.doc.createElement('div');table.className='v3-recap-table';table.setAttribute('role','table');table.setAttribute('aria-label','CIA diagnostic recap');
 const headers=s.doc.createElement('div');headers.className='v3-recap-head';headers.setAttribute('role','row');for(const p of [pair('Goal','เป้าหมาย'),pair('Look for this harm','พิจารณาความเสียหาย'),pair('Supporting controls','มาตรการสนับสนุน'),pair('Keep the distinction','แยกให้ออก')]){const n=s.put('div','',p);n.setAttribute('role','columnheader');headers.append(n);}table.append(headers);
 for(const [i,row]of rows.entries()){const r=s.doc.createElement('div');r.className=`v3-recap-row v3-recap-${i}`;r.setAttribute('role','row');const goal=s.doc.createElement('div');goal.className='v3-recap-goal';goal.setAttribute('role','cell');goal.append(s.put('strong','v3-recap-letter',row[0]),s.put('h4','v3-term',row[1]));r.append(goal);for(const[j,p]of row.slice(2).entries()){const cell=s.put('p',['v3-recap-harm','v3-recap-controls','v3-recap-trap'][j],p);cell.setAttribute('role','cell');r.append(cell);}table.append(r);}
 s.main.append(table);s.footer.append(s.put('p','v3-copy',pair('A single incident may harm more than one goal. Focus on the specific act or consequence in the question.','เหตุเดียวอาจกระทบหลายเป้าหมาย ให้พิจารณาการกระทำหรือผลกระทบที่โจทย์ถาม')));return{destroy(){}};
}
