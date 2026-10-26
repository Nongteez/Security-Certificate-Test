export const pair = (en, th) => ({ en, th });
export const LABELS = {
  back: pair('Back', 'กลับ'), center: pair('Learning Center', 'ศูนย์การเรียนรู้'), contents: pair('Lesson contents', 'สารบัญบทเรียน'),
  soon: pair('Coming Soon', 'เร็ว ๆ นี้'), preparation: pair('Under preparation', 'กำลังจัดเตรียม'), available: pair('Available', 'พร้อมเรียน'),
  previous: pair('Previous', 'ก่อนหน้า'), next: pair('Next', 'ถัดไป'), fullscreen: pair('Fullscreen', 'เต็มหน้าจอ'),
  exit: pair('Exit presentation', 'ออกจากการนำเสนอ'), reading: pair('Reading layout', 'รูปแบบสำหรับอ่าน'), presentation: pair('Slide layout', 'รูปแบบสไลด์'),
  resume: pair('Resume lesson', 'เรียนต่อ'), start: pair('Start lesson', 'เริ่มบทเรียน'), complete: pair('Mark as read', 'ทำเครื่องหมายว่าอ่านแล้ว'),
  'not-started': pair('Not started', 'ยังไม่เริ่ม'), 'in-progress': pair('In progress', 'กำลังอ่าน'), completed: pair('Completed', 'อ่านครบแล้ว'),
  retry: pair('Retry', 'ลองอีกครั้ง'), error: pair('Learning content could not be loaded.', 'ไม่สามารถโหลดเนื้อหาการเรียนได้'),
  empty: pair('Reviewed lessons are being prepared. No lessons are published yet.', 'กำลังจัดเตรียมบทเรียนที่ผ่านการตรวจสอบ ขณะนี้ยังไม่มีบทเรียนเผยแพร่'),
  help: pair('Presentation help', 'วิธีใช้งานการนำเสนอ'), hint: pair('Use ← / → or < / >. Tap the left/right half to navigate. Escape exits. Long-press for exit controls.', 'ใช้ ← / → หรือ < / > หรือแตะครึ่งซ้าย/ขวาเพื่อเปลี่ยนสไลด์ กด Escape เพื่อออก หรือแตะค้างเพื่อแสดงปุ่มออก'),
  storage: pair('Progress is available for this visit only; local storage is unavailable or contains unreadable data.', 'เก็บความคืบหน้าได้เฉพาะครั้งนี้ เนื่องจากพื้นที่จัดเก็บไม่พร้อมใช้งานหรือข้อมูลเดิมอ่านไม่ได้'),
  updated: pair('This lesson has changed. Reading completion has been reset.', 'บทเรียนมีการปรับปรุง จึงเริ่มสถานะการอ่านครบใหม่'),
  unsupported: pair('Fullscreen is unavailable. Continue in the normal reader.', 'ไม่สามารถใช้โหมดเต็มหน้าจอได้ กรุณาอ่านในโหมดปกติ'),
  slide: pair('Slide', 'สไลด์'), sources: pair('Sources and review', 'แหล่งอ้างอิงและการตรวจสอบ')
};
export function element(doc, tag, className = '', text) { const node = doc.createElement(tag); if (className) node.className = className; if (text !== undefined) node.textContent = text; return node; }
export function localize(node, value, mode = 'en') {
  node.replaceChildren(); const doc = node.ownerDocument;
  for (const lang of mode === 'both' ? ['en', 'th'] : [mode === 'th' ? 'th' : 'en']) {
    const span = element(doc, 'span', 'learning-language', value?.[lang] || value?.en || ''); span.setAttribute('lang', lang); node.append(span);
  } return node;
}
export function button(doc, label, mode, action, signal, className = 'btn btn-secondary') {
  const node = uiLabel(element(doc, 'button', className), label); node.type = 'button';
  if (action) node.addEventListener('click', action, { signal }); return node;
}
/** Application chrome always uses English; localize() is for educational content only. */
export function uiLabel(node, label) { return localize(node, { en: typeof label === 'string' ? label : label?.en || '' }, 'en'); }
export function languageControls(doc, mode, onChange, signal, modes = ['en', 'th', 'both']) {
  const group = element(doc, 'div', 'lang-toggle'); group.setAttribute('role', 'group'); group.setAttribute('aria-label', 'Content language');
  for (const lang of modes) {
    const label = lang === 'both' ? 'EN+TH' : lang.toUpperCase();
    const b = button(doc, pair(label, label), 'en', () => onChange(lang), signal, `lang-btn ${lang === mode ? 'active' : ''}`);
    b.setAttribute('aria-pressed', String(lang === mode));
    b.setAttribute('data-lang', lang);
    b.id = `learning-language-${lang}`;
    group.append(b);
  }
  return group;
}
