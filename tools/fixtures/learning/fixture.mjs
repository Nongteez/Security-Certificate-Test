// Technical fixtures only. No cybersecurity teaching, publication or academic approval.
const pair = (en, th = en) => ({ en, th });
export function createFixture() {
  const slides = [
    { id: 'type', rendererId: 'text', title: pair('Typography preview', 'ทดสอบการแสดงข้อความ'), blocks: [{ kind: 'text', text: pair('This is a technical layout fixture. It is not a reviewed lesson.', 'นี่คือข้อมูลทดสอบการจัดหน้า ไม่ใช่บทเรียนที่ผ่านการตรวจสอบ') }] },
    { id: 'languages', rendererId: 'text', title: pair('Paired language content', 'เนื้อหาสองภาษา'), blocks: [{ kind: 'list', items: [pair('A short English sentence.', 'ประโยคภาษาไทยสำหรับทดสอบระยะบรรทัดและการตัดคำ'), pair('Change the language without changing the slide.', 'เปลี่ยนภาษาโดยยังอยู่ที่สไลด์เดิม')] }] },
    { id: 'compare', rendererId: 'comparison', title: pair('Comparison preview', 'ทดสอบตารางเปรียบเทียบ'), blocks: [{ kind: 'table', caption: pair('Layout choices', 'รูปแบบการจัดหน้า'), columns: [pair('Presentation', 'การนำเสนอ'), pair('Reading', 'การอ่าน')], rows: [[pair('16:9 stage', 'พื้นที่สัดส่วน 16:9'), pair('Reflowing text', 'ข้อความปรับตามหน้าจอ')], [pair('Filmstrip', 'แถบภาพย่อ'), pair('Same content', 'ใช้เนื้อหาเดียวกัน')]] }] },
    { id: 'diagram', rendererId: 'diagram', title: pair('Diagram preview', 'ทดสอบแผนภาพ'), blocks: [{ kind: 'diagram', description: pair('Three labeled steps in reading order.', 'สามขั้นตอนเรียงตามลำดับการอ่าน'), steps: [pair('Start', 'เริ่ม'), pair('Inspect', 'ตรวจดู'), pair('Return', 'กลับ')] }] },
    { id: 'interact', rendererId: 'interactive', title: pair('Interaction preview', 'ทดสอบการโต้ตอบ'), blocks: [{ kind: 'reveal', label: pair('Show explanation', 'แสดงคำอธิบาย'), text: pair('Opening this explanation must not advance the slide.', 'การเปิดคำอธิบายนี้ต้องไม่ทำให้เปลี่ยนสไลด์') }, { kind: 'text', text: pair('Technical verification only; no score or academic claim.', 'สำหรับทดสอบระบบเท่านั้น ไม่มีคะแนนหรือการรับรองเนื้อหา') }] }
  ].map(s => ({ ...s, layoutId: s.rendererId, referenceIds: [], review: { status: 'pending' } }));
  return { schemaVersion: 1, id: 'technical-layout-fixture', outlineId: 'isc2-cc-2026-09-01', domainId: 1, primaryObjectiveId: '1.1', objectiveIds: ['1.1'], status: 'in-preparation', revision: 'fixture-1', title: pair('Technical fixtures — not a lesson', 'ข้อมูลทดสอบระบบ — ไม่ใช่บทเรียน'), synopsis: pair('Unreviewed layout and interaction fixtures.', 'ข้อมูลทดสอบรูปแบบและการโต้ตอบที่ยังไม่ผ่านการตรวจสอบ'), outcomes: [], prerequisites: [], references: [], assets: [], review: { reviewedRevision: null, technical: { status: 'pending' }, bilingual: { status: 'pending' }, rights: { status: 'pending' } }, slides };
}
export function reviewedTestInput() {
  const lesson = createFixture();
  lesson.status = 'published';
  lesson.review.reviewedRevision = lesson.revision;
  lesson.review.evidencePath = 'docs/test-review.md';
  for (const key of ['technical', 'bilingual', 'rights']) lesson.review[key] = { status: 'approved', reviewer: 'Automated test input only', reviewedAt: '2026-10-24' };
  lesson.references = [{ id: 'test-reference', title: 'Technical fixture provenance', authority: 'editorial', locator: 'fixture', repositoryPath: 'tools/fixtures/learning/fixture.mjs' }];
  for (const slide of lesson.slides) { slide.referenceIds = ['test-reference']; slide.review = { status: 'approved', reviewedRevision: lesson.revision }; }
  return lesson;
}
