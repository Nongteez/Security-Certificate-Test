from pathlib import Path
import re,json
q=Path('artifacts/qa/reading-notes-phase3f');md=Path('content/isc2-cc-2026/reading/domain-1.md');raw=md.read_bytes();s=raw.decode('utf8');pairs=[]
def change(a,b):
 global s
 assert s.count(a)==1,(a,s.count(a));pairs.append({'before':a,'after':b});s=s.replace(a,b)
change('โดยต้องยึดถือตาม **ลำดับความสำคัญก่อนหลัง (Strict Order of Precedence)**:', 'โดยพิจารณาหน้าที่ทั้งสี่ร่วมกับข้อเท็จจริงและใช้ดุลยพินิจทางวิชาชีพ:')
change('ประมวลจริยธรรม 4 ข้อตามลำดับความสำคัญก่อนหลัง (Strict Order of Precedence):','ประมวลจริยธรรม 4 ข้อ (The Four Canons):')
change('<strong>กฎลำดับความสำคัญ (Strict Order of Precedence):</strong> ข้อ 1 ถึง 4 เรียงตามลำดับความสำคัญจากสูงสุดลงไปอย่างเคร่งครัด หากเกิดความขัดแย้งทางหน้าที่ ผลประโยชน์ หรือคำสั่งของผู้ว่าจ้าง <em>Canon ลำดับก่อนหน้าจะมีความสำคัญเหนือกว่าเสมอ</em>','<strong>การใช้ประมวลจริยธรรม (Applying the Canons):</strong> พิจารณาหน้าที่ตาม Canon ทั้งสี่ร่วมกับข้อเท็จจริงและบริบท หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันอัลกอริทึมตัดสินความขัดแย้งแบบตายตัว <em>Use professional ethical judgment; numbering alone does not establish a universal conflict-resolution algorithm.</em>')
change('เป็นข้อที่มีลำดับความสำคัญสูงสุดเหนือกฎข้ออื่นทั้งหมด หากผลประโยชน์ขององค์กรหรือคำสั่งของผู้ว่าจ้างขัดแย้งกับความปลอดภัยของสาธารณะ ต้องเลือกความปลอดภัยของสังคมเป็นอันดับแรกเสมอ','พิจารณาความปลอดภัยของสังคมและประโยชน์ส่วนรวมเมื่อประเมินผลกระทบของการกระทำ รวมถึงเมื่อมีแรงกดดันจากผลประโยชน์องค์กรหรือคำสั่งผู้ว่าจ้าง')
change('Priority 1 (สำคัญสูงสุด)','Canon 1')
for n in [2,3,4]:change(f'Priority {n}',f'Canon {n}')
md.write_bytes(s.encode('utf8'))
p=Path('js/core/diagram-generator.js');raw=p.read_bytes();s=raw.decode('utf8');a=s.index('  ethicsCanons:');z=s.index('  // 2.1.1',a);old=s[a:z];h=old;dp=[]
def dc(a,b,count=1):
 global h
 assert h.count(a)==count,(a,h.count(a));dp.append({'before':a,'after':b});h=h.replace(a,b)
dc('ISC2 Code of Ethics 4 Canons Numbered Precedence Hierarchy','ISC2 Code of Ethics four mandatory canons and professional judgment',2)
dc('Ethics Hierarchy','Ethics Canons')
dc('The 4 Canons of the ISC2 Code of Ethics (Strict Order of Precedence)','The Four Canons of the ISC2 Code of Ethics')
dc('Order of precedence: 01 Society, 02 Honor, 03 Principals, 04 Profession','Four mandatory canons: Society, Honor, Principals, Profession; apply professional ethical judgment')
dc('Order of Precedence: Canon 01 supersedes 02 &middot; 02 supersedes 03 &middot; 03 supersedes 04 (In case of conflict)','Four mandatory canons; apply professional ethical judgment to the situation.')
dc('PRIORITY 1 (HIGHEST)','CANON 1')
for n in [2,3,4]:dc(f'PRIORITY {n}',f'CANON {n}',2)
dc('PRIORITY 1 (สูงสุด)','CANON 1')
dc('STRICT ORDER OF PRECEDENCE','THE FOUR CANONS')
dc('จรรยาบรรณวิชาชีพ ISC2 มี 4 ข้อ เรียงตามลำดับความสำคัญเด็ดขาด: หากเกิดข้อขัดแย้ง ข้อก่อนหน้าจะมีอำนาจเหนือกว่าข้อถัดไปเสมอ (Canon 01 &gt; 02 &gt; 03 &gt; 04)','จรรยาบรรณ ISC2 ทั้งสี่ข้อเป็นหน้าที่ที่ต้องยึดถือร่วมกัน พิจารณาข้อเท็จจริง บริบท และดุลยพินิจทางวิชาชีพ หมายเลขใช้สำหรับอ้างอิงข้อ ไม่ได้ยืนยันกฎตัดสินความขัดแย้งแบบตายตัว')
dc('(หากขัดแย้งกับคำสั่งองค์กร ให้ยึดถือสังคมก่อนเสมอ)','(พิจารณาผลกระทบต่อสังคมควบคู่กับหน้าที่อื่นตามบริบท)')
# Remove only the three unsupported supersedes connectors; original card definitions remain.
for m in list(re.finditer(r'      <div class="reading-mob-step-connector">[\s\S]*?</div>\s*<span[\s\S]*?</span>\s*<div[^>]*></div>\s*</div>',h))[::-1]:
 if 'Supersedes' in m[0]:dp.append({'before':m[0],'after':''});h=h[:m.start()]+h[m.end():]
assert 'Supersedes' not in h
p.write_bytes((s[:a]+h+s[z:]).encode('utf8'))
ledger={'id':'D1-N08','verdict':'Requires additional authoritative current-course evidence; not proved false','authorization':'Master Phase 3F explicitly requests neutral wording if unresolved','sources':['https://www.isc2.org/ethics','https://www.isc2.org/exams/exam-agreement','ISC2 Update 2026/Domain 1/D1 sum.md:1540-1619','ISC2 Update 2026/Domain 1/Domain 1.md:263-273'],'supported':'Four mandatory canons, public welfare/professional duties and professional ethical judgment','unverified':'Universal strict earlier-canon-wins algorithm in current CC 2026 authorized teaching','readingReplacements':pairs,'diagramReplacements':dp,'canonicalEnglishCanonsPreserved':True}
Path('tools/fixtures/reading-phase3f-approved-clarifications.json').write_text(json.dumps(ledger,indent=2,ensure_ascii=False),encoding='utf8');(q/'academic-exception.json').write_text(json.dumps(ledger,indent=2,ensure_ascii=False),encoding='utf8')
# Language metadata only; no text substitution, routing or storage changes.
p=Path('js/ui/screen-reading.js');raw=p.read_bytes();needle=b'  function setupScrollSpy() {';assert raw.count(needle)==1
func='''  function applyReadingLanguageMetadata() {
    const article = container.querySelector('.reading-article');
    if (!article) return;
    article.querySelector('.reading-article-markdown')?.setAttribute('lang', 'th');
    for (const element of article.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,dt,dd,figcaption,blockquote,em,.reading-diagram-tag')) {
      const text = element.textContent;
      if (/[A-Za-z]/.test(text) && !/[\\u0e00-\\u0e7f]/.test(text) && !element.closest('svg,.katex,code')) element.setAttribute('lang', 'en');
    }
  }

''';p.write_bytes(raw.replace(needle,func.encode()+needle+b'\n    applyReadingLanguageMetadata();'))
p=Path('css/reading.css');raw=p.read_bytes();mark=b'/* Phase 3E:';i=raw.index(mark);block='''/* Phase 3F: keep the scroll control in the existing Reading outer gutter. */
.reading-screen .reading-scroll-nav { right: 12px; }
.reading-screen .reading-scroll-nav:focus-visible { outline-offset: -3px; }
.reading-screen:has(.reading-structured-objective) { padding-bottom: max(80px, calc(env(safe-area-inset-bottom) + 64px)); }
@media (max-width: 840px) {
  .reading-screen .reading-scroll-nav { right: 0; width: 24px; height: 44px; }
}
/* End Phase 3F Reading accessibility. */

''';p.write_bytes(raw[:i]+block.encode()+raw[i:])
print('Applied bounded ethics clarifications, Reading-only language metadata and gutter correction.')
