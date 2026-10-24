import { reconcileProgress, visitSlide, completeReading } from '../../core/learning-progress.js';
import { LABELS as L, pair, element, uiLabel, button, languageControls } from './dom.js';
import { renderLessonInfo } from './lesson-info.js';
import { renderSlide, renderThumbnail } from './renderers.js';
import { createFullscreenController } from './fullscreen.js';
const MODES = ['en', 'th', 'both'];
const INTERACTIVE = 'button, a, input, textarea, select, summary, details, audio, video, [contenteditable], [data-slide-interactive], [role="button"], [role="slider"]';
export function keyboardDelta(event) { if (event.ctrlKey || event.altKey || event.metaKey || event.isComposing || event.target?.closest?.(INTERACTIVE)) return 0; return ['ArrowLeft', '<'].includes(event.key) ? -1 : ['ArrowRight', '>'].includes(event.key) ? 1 : 0; }
export function createSlideController(lesson, { language = 'en', slideId } = {}) {
  const ordered = lesson.slideOrder ? lesson.slideOrder.map(id => lesson.slides.find(s => s.id === id)) : lesson.slides;
  let index = Math.max(0, ordered.findIndex(s => s.id === slideId)), mode = MODES.includes(language) ? language : 'en';
  return { get index() { return index; }, get language() { return mode; }, get slides() { return ordered; }, current: () => ordered[index],
    move(delta) { index = Math.max(0, Math.min(ordered.length - 1, index + delta)); },
    goToSlide(id) { const target = ordered.findIndex(s => s.id === id); if (target >= 0) index = target; },
    setLanguage(value) { if (MODES.includes(value)) mode = value; }
  };
}
export function mountLearningViewer(container, { lesson, language = 'en', progress, onProgress = () => {}, onBack = () => {}, onLanguage = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  let saved = reconcileProgress(lesson, progress), slideHandle, infoHandle, destroyed = false, reading = false, pointer, exitTimer;
  const controller = createSlideController(lesson, { language, slideId: saved.lastSlideId });
  const root = element(doc, 'section', 'learning-screen learning-viewer'), header = element(doc, 'header', 'learning-toolbar');
  const back = button(doc, 'Back to Domain', language, onBack, signal), title = element(doc, 'h1', 'learning-lesson-title'), languages = element(doc, 'div'); back.setAttribute('data-action', 'back-domain'); header.append(back, title, languages);
  const controls = element(doc, 'nav', 'learning-controls'); controls.setAttribute('aria-label', 'Slide navigation');
  const previous = button(doc, L.previous, language, () => move(-1), signal), indicator = element(doc, 'span', 'learning-counter'), next = button(doc, L.next, language, () => move(1), signal);
  previous.setAttribute('data-action', 'previous'); next.setAttribute('data-action', 'next');
  const readingButton = button(doc, L.reading, language, () => { reading = !reading; paint(); }, signal);
  const fullButton = button(doc, L.fullscreen, language, () => fullscreen.enter(), signal);
  const complete = button(doc, L.complete, language, () => { saved = completeReading(lesson, saved); emit(); paintLabels(); }, signal);
  const infoButton = button(doc, 'Lesson Info', 'en', async () => {
    if (fullscreen.active) await fullscreen.exit(); if (destroyed) return;
    infoHandle?.destroy();
    root.querySelectorAll('audio, video').forEach(media => media.pause?.());
    infoHandle = renderLessonInfo(root, { lesson, language: controller.language, onNavigateTextView: () => { reading = true; paint(); } });
  }, signal); infoButton.setAttribute('data-action', 'lesson-info');
  controls.append(previous, indicator, next, readingButton, fullButton, complete, infoButton);
  const notice = element(doc, 'p', 'learning-notice'); notice.setAttribute('role', 'status');
  const surface = element(doc, 'div', 'learning-presentation'); surface.tabIndex = 0; surface.setAttribute('role', 'region');
  const stage = element(doc, 'article', 'learning-slide'), help = element(doc, 'div', 'learning-presentation-help'); help.hidden = true; help.setAttribute('data-slide-interactive', '');
  const hint = element(doc, 'p'), exit = button(doc, L.exit, language, () => fullscreen.exit(), signal); help.append(hint, exit); surface.append(stage, help);
  const filmstrip = element(doc, 'nav', 'learning-filmstrip'); filmstrip.setAttribute('aria-label', 'Slide thumbnails');
  const track = element(doc, 'div', 'learning-filmstrip-track'); track.style.width = `${controller.slides.length * 156}px`; filmstrip.append(track);
  const jump = element(doc, 'select', 'learning-slide-picker'); jump.setAttribute('aria-label', 'Go to slide');
  controller.slides.forEach((s, i) => { const o = element(doc, 'option', '', `${i + 1}. ${s.title.en}`); o.value = s.id; jump.append(o); });
  jump.addEventListener('change', () => goToSlide(jump.value), { signal });
  const announcement = element(doc, 'p', 'learning-sr-only'); announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true');
  root.append(header, controls, notice, surface, filmstrip, jump, announcement); container.replaceChildren(root);
  const fullscreen = createFullscreenController(surface, { onChange(active) { help.hidden = true; root.classList.toggle('learning-is-fullscreen', active); paint(); }, onError() { uiLabel(notice, L.unsupported); } });
  function emit() { if (destroyed) return; const outcome = onProgress(saved); if (outcome?.persisted === false) uiLabel(notice, L.storage); }
  function paintLabels() {
    const mode = controller.language; uiLabel(title, lesson.title); uiLabel(back, 'Back to Domain'); uiLabel(previous, L.previous); uiLabel(next, L.next); uiLabel(fullButton, L.fullscreen); uiLabel(readingButton, reading ? L.presentation : L.reading); uiLabel(complete, saved.status === 'completed' ? L.completed : L.complete); uiLabel(hint, L.hint); uiLabel(exit, L.exit);
    indicator.textContent = `${controller.index + 1} / ${controller.slides.length}`; previous.disabled = controller.index === 0; next.disabled = controller.index === controller.slides.length - 1;
    complete.disabled = saved.status === 'completed' || saved.visitedSlideIds.length !== controller.slides.length;
    jump.value = controller.current().id; controller.slides.forEach((s, i) => { jump.children[i].textContent = `${i + 1}. ${s.title.en}`; });
    if (!languages.children.length) languages.append(languageControls(doc, mode, setLanguage, signal));
    Array.from(languages.children[0].children).forEach((control, index) => { const active = MODES[index] === mode; control.classList.toggle('active', active); control.setAttribute('aria-pressed', String(active)); });
    surface.setAttribute('aria-label', `${controller.current().title.en} (${controller.index + 1}/${controller.slides.length})`);
  }
  function paintThumbnails() {
    const focused = track.contains(doc.activeElement); track.replaceChildren();
    const first = Math.max(0, Math.floor(filmstrip.scrollLeft / 156) - 3), last = Math.min(controller.slides.length, first + Math.min(25, Math.ceil((filmstrip.clientWidth || 800) / 156) + 7));
    for (let i = first; i < last; i++) {
      const s = controller.slides[i], b = element(doc, 'button', 'learning-thumbnail'); b.type = 'button'; b.style.left = `${i * 156}px`; b.tabIndex = i === controller.index ? 0 : -1;
      b.setAttribute('aria-label', `${i + 1}. ${s.title.en}`); if (i === controller.index) b.setAttribute('aria-current', 'true');
      renderThumbnail(b, s, 'en');
      // Removed thumbnails release their handlers with their DOM; no global listener per thumbnail.
      b.addEventListener('click', () => { if (!destroyed) goToSlide(s.id); });
      b.addEventListener('keydown', event => { const target = event.key === 'Home' ? 0 : event.key === 'End' ? controller.slides.length - 1 : event.key === 'ArrowLeft' ? controller.index - 1 : event.key === 'ArrowRight' ? controller.index + 1 : null; if (target !== null) { event.preventDefault(); move(target - controller.index); track.querySelector('[aria-current="true"]')?.focus(); } });
      track.append(b);
    }
    if (focused) track.querySelector('[aria-current="true"]')?.focus();
  }
  function paint() {
    if (destroyed) return; slideHandle?.destroy();
    const activeReading = reading && !fullscreen.active; root.classList.toggle('learning-reading-mode', activeReading);
    slideHandle = renderSlide(stage, { slide: controller.current(), lesson, language: controller.language, mode: activeReading ? 'reading' : 'presentation' });
    saved = visitSlide(lesson, saved, controller.current().id, controller.language);
    paintLabels();
    const left = controller.index * 156, width = filmstrip.clientWidth || 800;
    if (left < filmstrip.scrollLeft || left + 148 > filmstrip.scrollLeft + width) filmstrip.scrollTo({ left: Math.max(0, left - width / 2 + 74), behavior: 'auto' });
    paintThumbnails(); emit();
    announcement.textContent = surface.getAttribute('aria-label');
  }
  function goToSlide(id) { if (!destroyed) { controller.goToSlide(id); paint(); } }
  function move(delta) { if (!destroyed) { controller.move(delta); paint(); } }
  function setLanguage(mode) { if (!destroyed && MODES.includes(mode)) { controller.setLanguage(mode); onLanguage(mode); paint(); } }
  filmstrip.addEventListener('scroll', paintThumbnails, { signal, passive: true });
  surface.addEventListener('keydown', event => {
    if (event.key === 'Escape' && fullscreen.active) { fullscreen.exit(); return; }
    if (event.key === '?' && !event.target.closest?.(INTERACTIVE)) { help.hidden = !help.hidden; return; }
    const delta = keyboardDelta(event); if (delta) { event.preventDefault(); move(delta); }
  }, { signal });
  surface.addEventListener('pointerdown', event => { if (!fullscreen.active || event.target.closest?.(INTERACTIVE) || event.isPrimary === false || event.button > 0) return;
    pointer = { x: event.clientX, y: event.clientY, drag: false, suppress: false }; clearTimeout(exitTimer);
    exitTimer = setTimeout(() => { if (pointer && !pointer.drag) { pointer.suppress = true; help.hidden = false; exit.focus(); } }, 650);
  }, { signal });
  surface.addEventListener('pointermove', event => { if (pointer && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) > 10) { pointer.drag = true; clearTimeout(exitTimer); } }, { signal, passive: true });
  surface.addEventListener('pointerup', () => clearTimeout(exitTimer), { signal });
  surface.addEventListener('pointercancel', () => { clearTimeout(exitTimer); if (pointer) pointer.suppress = true; }, { signal });
  surface.addEventListener('click', event => {
    const suppress = pointer?.drag || pointer?.suppress; pointer = null;
    if (!fullscreen.active || suppress || event.target.closest?.(INTERACTIVE) || doc.getSelection?.().toString() || event.detail === 0) return;
    const box = stage.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.left + box.width || event.clientY < box.top || event.clientY > box.top + box.height) return;
    move(event.clientX - box.left < box.width / 2 ? -1 : 1);
  }, { signal });
  doc.defaultView?.addEventListener('pagehide', emit, { signal });
  paint(); surface.focus();
  return { get currentSlideId() { return controller.current().id; }, goToSlide, setLanguage,
    destroy() { if (destroyed) return; emit(); destroyed = true; infoHandle?.destroy(); clearTimeout(exitTimer); abort.abort(); fullscreen.destroy(); slideHandle?.destroy(); }
  };
}
