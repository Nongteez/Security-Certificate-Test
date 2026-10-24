import { element, localize, button } from './dom.js';

/** Optional metadata; owns modal focus/inert state and never reads or writes progress. */
export function renderLessonInfo(host, { lesson, language = 'en', onClose = () => {}, onNavigateTextView }) {
  const doc = host.ownerDocument, abort = new AbortController(), opener = doc.activeElement;
  const overlay = element(doc, 'div', 'learning-info-overlay');
  const panel = element(doc, 'section', 'learning-info-panel'); panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true'); panel.setAttribute('aria-labelledby', 'learning-info-title');
  let destroyed = false;
  const header = element(doc, 'header', 'learning-info-header'), title = element(doc, 'h2', '', 'Lesson Info'); title.id = 'learning-info-title';
  const close = button(doc, 'Close', 'en', () => destroy(), abort.signal); close.setAttribute('data-action', 'close-info'); header.append(title, close); panel.append(header, element(doc, 'h3', '', lesson.title.en));
  for (const [key, label] of [['outcomes', 'Learning outcomes'], ['prerequisites', 'Before you begin']]) {
    if (!lesson[key]?.length) continue;
    panel.append(element(doc, 'h3', '', label)); const list = element(doc, 'ul', 'learning-content'); for (const item of lesson[key]) list.append(localize(element(doc, 'li'), item, language)); panel.append(list);
  }
  panel.append(element(doc, 'h3', '', `Slide outline · ${lesson.slides.length} slides`));
  const outline = element(doc, 'ol', 'learning-info-outline'), ids = lesson.slideOrder || lesson.slides.map(s => s.id);
  for (const id of ids) outline.append(element(doc, 'li', '', lesson.slides.find(s => s.id === id).title.en)); panel.append(outline);
  if (onNavigateTextView) panel.append(button(doc, 'Open Text View', 'en', () => { destroy(); onNavigateTextView(); }, abort.signal));
  panel.append(element(doc, 'h3', '', 'Sources'));
  for (const ref of lesson.references || []) {
    const p = element(doc, 'p'); if (ref.url?.startsWith('https://')) { const a = element(doc, 'a', '', ref.title); a.href = ref.url; a.rel = 'noopener noreferrer'; p.append(a); } else p.append(element(doc, 'span', '', ref.title));
    p.append(element(doc, 'span', '', ` — ${ref.locator}`)); panel.append(p);
  }
  panel.append(element(doc, 'p', 'learning-progress-label', `Content version: ${lesson.revision}`));
  const review = element(doc, 'details', 'learning-info-review'); review.append(element(doc, 'summary', '', 'Review details'));
  for (const kind of ['technical', 'bilingual', 'rights']) { const r = lesson.review?.[kind]; review.append(element(doc, 'p', '', `${kind}: ${r?.status || 'pending'} · ${r?.reviewer || '—'} · ${r?.reviewedAt || '—'}`)); }
  review.append(element(doc, 'p', '', `Review evidence: ${lesson.review?.evidencePath || 'Not provided'}`)); panel.append(review); overlay.append(panel); host.append(overlay);
  const background = [];
  for (let node = overlay; node.parentElement; node = node.parentElement) {
    for (const sibling of node.parentElement.children) if (sibling !== node) { background.push([sibling, !!sibling.inert]); sibling.inert = true; }
    if (node.parentElement === doc.body) break;
  }
  const overflow = doc.body.style.overflow; doc.body.style.overflow = 'hidden';
  function destroy() {
    if (destroyed) return; destroyed = true; abort.abort(); overlay.parentElement?.removeChild(overlay);
    for (const [node, inert] of background) node.inert = inert; doc.body.style.overflow = overflow;
    if (opener?.isConnected) opener.focus(); onClose();
  }
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); destroy(); }
    if (event.key === 'Tab') {
      const controls = Array.from(panel.querySelectorAll('button, a, input, select, textarea, summary, [tabindex]')).filter(n => !n.disabled && !n.hidden && n.tabIndex !== -1);
      const first = controls[0] || close, last = controls.at(-1) || close;
      if (event.shiftKey && (doc.activeElement === first || !panel.contains(doc.activeElement))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (doc.activeElement === last || !panel.contains(doc.activeElement))) { event.preventDefault(); first.focus(); }
    }
  }, { signal: abort.signal });
  overlay.addEventListener('click', event => { if (event.target === overlay) destroy(); }, { signal: abort.signal });
  close.focus(); return { destroy };
}
