from repair_helpers import *
p='content/isc2-cc-2026/reading/domain-2.md'
change(p,'เป็นองค์ประกอบย่อยด้านเทคนิคของ BC (<strong class="reading-math-formula">DR ⊂ BC</strong>)','ช่วยกู้คืน IT ที่สนับสนุนความต่อเนื่อง โดยต้องประสานแผนทั้งสอง (DR supports BC; coordinate their plans)','Replace universal mathematical subset claim with coordinated teaching scope.')
change(p,'ตัวอย่างเปรียบเทียบในข้อสอบ: ระบบล่มในวันพฤหัสบดี (ทำ Full ทุกวันอาทิตย์)','ตัวอย่างสมมติ: ระบบล่มวันพฤหัสบดีก่อน Backup รอบถัดไป (Full วันอาทิตย์; ชุดล่าสุดวันพุธ)','State exact backup cut-off assumed by the existing two-set/four-set restore example.')
needle='| **Full Backup**<br>'
s=(ROOT/p).read_text(encoding='utf-8');line=next(l for l in s.splitlines()if l.startswith(needle));change(p,line,line.replace('**ช้าที่สุด** (ใช้เวลานานที่สุด)','โดยทั่วไปงานต่อรอบมากกว่าเมื่อข้อมูลทั้งหมดมีขนาดใหญ่').replace('**มากที่สุด** (กินพื้นที่สูงสุด)','เก็บข้อมูลทั้งหมดต่อชุด').replace('**เร็วที่สุด** (กู้คืนได้เร็วมาก)','ใช้ชุดเดียว; เวลาจริงต้องทดสอบ'),'Qualify backup workload/performance rather than promise universal speed rankings.')
s=(ROOT/p).read_text(encoding='utf-8');line=next(l for l in s.splitlines()if l.startswith('| **Differential Backup**<br>'));change(p,line,line.replace('**เร็วปานกลาง** (ง่ายกว่า Incremental)','ใช้ Full และชุดส่วนต่างล่าสุด; เวลาจริงขึ้นกับระบบ'),'Separate backup-set dependency from guaranteed elapsed recovery time.')
s=(ROOT/p).read_text(encoding='utf-8');line=next(l for l in s.splitlines()if l.startswith('| **Incremental Backup**<br>'));change(p,line,line.replace('**เร็วที่สุด** (สำรองเฉพาะสิ่งที่เพิ่งเปลี่ยน)','โดยทั่วไปต่อรอบน้อยลงหากข้อมูลเปลี่ยนน้อย').replace('**น้อยที่สุด** (ประหยัดพื้นที่สูงสุด)','ขึ้นกับข้อมูลที่เปลี่ยนและการเก็บแต่ละชุด').replace('**ช้าที่สุด** (ต้องกู้ทีละชุดตามลำดับ)','ต้องมีทุกชุดที่พึ่งพากัน; เวลาจริงต้องทดสอบ'),'Retain restore chain dependency without a universal fastest/slowest guarantee.')
change(p,'| **5. Full Interruption / Cutover** | **ปิดระบบหลักทั้งหมด** และสลับให้ศูนย์สำรองรับภาระงานจริง 100%','| **5. Full Interruption / Cutover** | ในขอบเขตที่อนุมัติ ให้หยุดระบบหลักที่ร่วมทดสอบและสลับภาระงานจริงไปศูนย์สำรอง','Scope interruption testing to the approved exercise rather than mandatory total organization shutdown.')
def scope(s):
 before=s
 header='''  bcVsDrScope: `
<div class="reading-diagram-card" data-diagram="bcVsDrScope" data-relationship="supporting-scopes" role="region" aria-label="Coordinated business continuity and IT recovery scopes">
 <div class="reading-diagram-header"><span class="reading-diagram-tag">Coordinated scopes</span><h4 class="reading-diagram-title">BC and DR — different focus, coordinated plans</h4></div>
 <div class="reading-diagram-svg-wrap reading-diag-desktop"><svg viewBox="0 0 840 270" class="reading-diagram-svg" role="img" aria-label="Business continuity and disaster recovery support one another; not universal subset notation">
 <rect x="15" y="15" width="395" height="230" rx="8" class="diag-box diag-box-blue"/>
 <text x="35" y="48" class="diag-text-title">Business Continuity (BC)</text>
 <text x="35" y="77" class="diag-text-sub">รักษากิจกรรมธุรกิจที่สำคัญระหว่างเหตุขัดข้อง</text>
 <text x="35" y="108" class="diag-text-label">People · Processes · Facilities</text>
 <text x="35" y="132" class="diag-text-label">Suppliers · Technology</text>
 <text x="35" y="173" class="diag-text-sub">ตัวอย่าง: ย้ายสถานที่ทำงาน / วิธีทำงานสำรอง</text>
 <text x="35" y="201" class="diag-text-sub">เป้าหมาย: รักษาบริการธุรกิจตามลำดับความสำคัญ</text>
 <rect x="430" y="15" width="395" height="230" rx="8" class="diag-box diag-box-banner"/>
 <text x="450" y="48" class="diag-text-title">Disaster Recovery (DR)</text>
 <text x="450" y="77" class="diag-text-sub">กู้คืนระบบ IT และข้อมูลที่ธุรกิจต้องใช้</text>
 <text x="450" y="108" class="diag-text-label">Data · Virtual Machines · Network Recovery</text>
 <text x="450" y="132" class="diag-text-label">Hot Site · Warm Site · Cold Site</text>
 <text x="450" y="173" class="diag-text-sub">ตัวอย่าง: กู้ฐานข้อมูล / สลับศูนย์สำรอง</text>
 <text x="450" y="201" class="diag-text-sub">เป้าหมาย: คืนความสามารถ IT ตามเป้าหมายที่ทดสอบ</text>
 </svg></div>
 <div class="reading-diag-mobile reading-mobile-stack"><div class="reading-mob-tier-card"><h5>Business Continuity (BC)</h5><p>รักษากิจกรรมธุรกิจสำคัญระหว่างเหตุขัดข้อง ครอบคลุม People, Processes, Facilities, Suppliers และ Technology เช่น ย้ายสถานที่ทำงานหรือใช้วิธีทำงานสำรอง / Keep priority business activities operating using coordinated people, process, facility, supplier and technology arrangements.</p></div><div class="reading-mob-tier-card"><h5>Disaster Recovery (DR)</h5><p>กู้คืน IT และข้อมูล เช่น ฐานข้อมูล, Virtual Machines, Network Recovery และ Hot Site / Warm Site / Cold Site โดยทดสอบเทียบเป้าหมาย / Restore IT capabilities and data against tested recovery objectives.</p></div></div>
 <p class="reading-semantic-note">DR supports business continuity. Coordinate technical recovery with business priorities; this is a scope comparison, not a universal set equation. / ประสานการกู้คืน IT กับความต้องการธุรกิจ ไม่ใช้สัญลักษณ์เซตแทนความสัมพันธ์ทุกองค์กร</p>
</div>
`,'''
 return header
diagram('bcVsDrScope',scope,'Redesign the existing nested scope diagram as two coordinated scopes; preserve business pillars and all recovery example terms.')
def measurement(s):
 cards=[('metric','Metric','ค่าที่กำหนดและวัดได้','Defined measurable value'),('kpi','KPI','ติดตามผลงานเทียบเป้าหมาย','Performance against objectives'),('kri','KRI','ติดตามสัญญาณความเสี่ยง','Risk trend / warning measure'),('dashboard','Dashboard','แสดงภาพรวมตามรอบอัปเดต','View with a defined refresh cadence'),('scorecard','Scorecard','เทียบผลจริงกับเป้าหมาย','Actual versus target'),('report','Report','อธิบายผลและข้อเสนอแนะ','Findings and recommended actions')]
 svg=[];mobile=[]
 for i,(key,title,th,en)in enumerate(cards):
  x=20 if i<3 else 430;y=52+(i%3)*98;group='measures'if i<3 else'communication';svg.append(f'<g data-concept="{key}" data-group="{group}"><rect x="{x}" y="{y}" width="390" height="86" rx="6" class="diag-box diag-box-banner"/><text x="{x+16}" y="{y+25}" class="diag-text-title">{title}</text><text x="{x+16}" y="{y+49}" class="diag-text-sub">{th}</text><text x="{x+16}" y="{y+70}" class="diag-text-sub">{en}</text></g>');mobile.append(f'<div class="reading-mob-tier-card" data-concept="{key}" data-group="{group}"><h5>{title}</h5><p>{th} / {en}</p></div>')
 return '''  effectivenessHierarchy: `
<div class="reading-diagram-card reading-measurement-system" data-diagram="effectivenessHierarchy" role="region" aria-label="Six measurement concepts grouped by purpose; a local study aid">
<div class="reading-diagram-header"><span class="reading-diagram-tag">Local study aid</span><h4 class="reading-diagram-title">Measures and communication — grouped by purpose</h4></div>
<div class="reading-diag-desktop reading-diagram-svg-wrap"><svg viewBox="0 0 840 360" class="reading-diagram-svg" role="img" aria-label="Metric KPI KRI are measures; dashboard scorecard report communicate measures; no mandatory sequence"><text x="35" y="30" class="diag-text-title">Measures</text><text x="445" y="30" class="diag-text-title">Communication</text>'''+''.join(svg)+'''</svg></div><div class="reading-diag-mobile reading-mobile-stack">'''+''.join(mobile)+'''</div><p class="reading-semantic-note">A local study aid, not a fixed hierarchy or mandatory sequence. Views can combine multiple measures; rows do not imply one-to-one dependencies. Good measures are Relevant (ตรงประเด็น), Measurable (วัดได้จริง) and Consistent (วัดซ้ำได้ผลสม่ำเสมอ). / แบ่งตามหน้าที่ ไม่ใช่ลำดับขั้นสากล รูปแบบนำเสนอหนึ่งอาจรวมหลายตัวชี้วัดได้</p></div>
`,'''
diagram('effectivenessHierarchy',measurement,'Replace numbered measurement tiers with six distinct, non-ordinal concepts grouped as measures and communication; keep original good-measure properties.')
diagram('backupRestoreChains',lambda s:replacements(s,[('EXACTLY 2 STEPS','2 BACKUP SETS'),('FAST RTO','2 SETS'),('SLOW RTO','4 SETS'),('ขนาดเล็ก สำรองเร็วสุด','ขนาดขึ้นกับข้อมูลที่เปลี่ยน'),('RECOVERY PATH ON THURSDAY','BEFORE NEXT THURSDAY BACKUP')]),'Keep restore-set chains, explicitly bound backup cutoff, and avoid presenting RTO as actual restore speed.')
print('Domain2 repairs applied.')
