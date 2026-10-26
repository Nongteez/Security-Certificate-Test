import { element, button } from './dom.js';
import { renderThumbnail } from './renderers.js';

/** Optional bounded overview. No live slide/interaction/media instances are mounted. */
export function openSlideOverview(host, { slides, activeSlideId, onSelect, onClose = () => {} }) {
  const doc = host.ownerDocument, abort = new AbortController(), opener = doc.activeElement;
  const overlay = element(doc, 'div', 'viewer-slides-overlay'), dialog = element(doc, 'section', 'viewer-slides-dialog');
  dialog.setAttribute('role', 'dialog'); dialog.setAttribute('aria-modal', 'true'); dialog.setAttribute('aria-labelledby', 'viewer-slides-title');
  const header = element(doc, 'header'), title = element(doc, 'h2', '', 'Slides'); title.id = 'viewer-slides-title';
  const closeButton = button(doc, 'Close', 'en', () => destroy(), abort.signal, 'viewer-control'); header.append(title, closeButton);
  const grid = element(doc, 'div', 'viewer-slides-grid'), paging = element(doc, 'nav', 'viewer-slides-paging'); paging.setAttribute('aria-label', 'Slide overview pages');
  let focusIndex = Math.max(0, slides.findIndex(s => s.id === activeSlideId)), page = Math.floor(focusIndex / 25), destroyed = false;
  const prevPage = button(doc, 'Previous page', 'en', () => jump(Math.max(0, (page - 1) * 25)), abort.signal, 'viewer-control');
  const nextPage = button(doc, 'Next page', 'en', () => jump(Math.min(slides.length - 1, (page + 1) * 25)), abort.signal, 'viewer-control');
  const pageLabel = element(doc, 'span'); paging.append(prevPage, pageLabel, nextPage); dialog.append(header, grid, paging); overlay.append(dialog); host.append(overlay);
  const background = [];
  for (let node = overlay; node.parentElement; node = node.parentElement) {
    for (const sibling of node.parentElement.children) if (sibling !== node) { background.push([sibling, !!sibling.inert]); sibling.inert = true; }
    if (node.parentElement === doc.body) break;
  }
  const overflow = doc.body.style.overflow; doc.body.style.overflow = 'hidden';
  function destroy() { if (destroyed) return; destroyed = true; abort.abort(); overlay.parentElement?.removeChild(overlay); for (const [n, inert] of background) n.inert = inert; doc.body.style.overflow = overflow; if (opener?.isConnected) opener.focus(); onClose(); }
  function paint() {
    grid.replaceChildren(); const start = page * 25, end = Math.min(slides.length, start + 25);
    for (let i = start; i < end; i++) {
      const slide = slides[i], b = element(doc, 'button', 'viewer-slide-poster'); b.type = 'button'; b.tabIndex = i === focusIndex ? 0 : -1;
      b.setAttribute('data-slide-id', slide.id); b.setAttribute('aria-label', `${i + 1}. ${slide.title.en}`); if (slide.id === activeSlideId) b.setAttribute('aria-current', 'true');
      const preview = element(doc, 'span', 'viewer-poster-art'); preview.setAttribute('aria-hidden', 'true'); renderThumbnail(preview, slide, 'en');
      b.append(preview, element(doc, 'span', 'viewer-poster-label', `${i + 1}. ${slide.title.en}`));
      b.addEventListener('click', () => { if (!destroyed) { destroy(); onSelect(slide.id); } }); grid.append(b);
    }
    paging.hidden = slides.length <= 25; prevPage.disabled = page === 0; nextPage.disabled = (page + 1) * 25 >= slides.length;
    pageLabel.textContent = `Page ${page + 1} of ${Math.ceil(slides.length / 25)}`;
  }
  function jump(index) { focusIndex = Math.max(0, Math.min(slides.length - 1, index)); page = Math.floor(focusIndex / 25); paint(); grid.querySelector(`[data-slide-id="${slides[focusIndex].id}"]`)?.focus(); }
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); destroy(); return; }
    const columns = (doc.defaultView?.innerWidth || 1440) < 720 ? 2 : 4;
    if (event.target?.closest?.('[data-slide-id]')) {
      const actual = slides.findIndex(s => s.id === event.target.closest('[data-slide-id]').getAttribute('data-slide-id')); if (actual >= 0) focusIndex = actual;
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : event.key === 'ArrowLeft' ? focusIndex - 1 : event.key === 'ArrowRight' ? focusIndex + 1 : event.key === 'ArrowUp' ? focusIndex - columns : event.key === 'ArrowDown' ? focusIndex + columns : null;
      if (index !== null) { event.preventDefault(); jump(index); }
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); const id = slides[focusIndex].id; destroy(); onSelect(id); }
    }
    if (event.key === 'Tab') {
      const focusable = [closeButton, ...grid.children].filter(n => !n.disabled && n.tabIndex !== -1);
      if (!paging.hidden) focusable.push(...[prevPage, nextPage].filter(n => !n.disabled));
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && (doc.activeElement === first || !dialog.contains(doc.activeElement))) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (doc.activeElement === last || !dialog.contains(doc.activeElement))) { event.preventDefault(); first.focus(); }
    }
  }, { signal: abort.signal });
  overlay.addEventListener('click', event => { if (event.target === overlay) destroy(); }, { signal: abort.signal });
  paint(); grid.querySelector('[aria-current="true"]')?.focus(); return { destroy };
}
