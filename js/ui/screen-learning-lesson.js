import { LABELS as L, pair, element, localize, button, languageControls } from './learning/dom.js';
export function renderLearningLesson(container, { lesson, language = 'en', progress, onBack = () => {}, onStart = () => {}, onLanguage = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal, root = element(doc, 'section', 'learning-screen');
  const header = element(doc, 'header', 'learning-toolbar'); header.append(button(doc, L.center, language, onBack, signal), languageControls(doc, language, onLanguage, signal));
  const title = localize(element(doc, 'h1'), lesson.title, language); title.tabIndex = -1; root.append(header, title, localize(element(doc, 'p', 'learning-intro'), lesson.synopsis, language));
  for (const [key, label] of [['outcomes', pair('Learning outcomes', 'สิ่งที่จะได้เรียนรู้')], ['prerequisites', pair('Before you begin', 'ก่อนเริ่มเรียน')]]) {
    if (!lesson[key]?.length) continue; root.append(localize(element(doc, 'h2'), label, language)); const list = element(doc, 'ul'); for (const item of lesson[key]) list.append(localize(element(doc, 'li'), item, language)); root.append(list);
  }
  if (progress) root.append(localize(element(doc, 'p', 'learning-status'), L[progress.status], language));
  const start = button(doc, progress?.status === 'in-progress' ? L.resume : L.start, language, () => onStart(progress?.lastSlideId), signal, 'btn btn-primary'); root.append(start);
  root.append(localize(element(doc, 'h2'), L.contents, language)); const slides = element(doc, 'ol', 'learning-contents');
  const ordered = lesson.slideOrder ? lesson.slideOrder.map(id => lesson.slides.find(s => s.id === id)) : lesson.slides;
  for (const slide of ordered) { const li = element(doc, 'li'); li.append(button(doc, slide.title, language, () => onStart(slide.id), signal, 'learning-text-button')); slides.append(li); } root.append(slides);
  const sources = element(doc, 'details', 'learning-sources'); sources.append(localize(element(doc, 'summary'), L.sources, language));
  sources.append(localize(element(doc, 'p'), pair(`Content version: ${lesson.revision}`, `เวอร์ชันเนื้อหา: ${lesson.revision}`), language));
  for (const kind of ['technical', 'bilingual', 'rights']) { const r = lesson.review?.[kind]; sources.append(element(doc, 'p', '', `${kind}: ${r?.status || 'pending'} · ${r?.reviewer || '—'} · ${r?.reviewedAt || '—'}`)); }
  for (const r of lesson.references || []) { const p = element(doc, 'p'); if (r.url?.startsWith('https://')) { const a = element(doc, 'a', '', r.title); a.href = r.url; a.rel = 'noopener noreferrer'; p.append(a); } else p.append(element(doc, 'span', '', r.title)); p.append(element(doc, 'span', '', ` — ${r.locator}`)); sources.append(p); }
  root.append(sources); container.replaceChildren(root); title.focus(); return () => abort.abort();
}
