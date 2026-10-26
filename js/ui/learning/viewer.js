import { reconcileProgress, visitSlide, completeReading } from '../../core/learning-progress.js';
import { element, button } from './dom.js';
import { renderLessonInfo } from './lesson-info.js';
import { renderSlide } from './renderers.js';
import { createFullscreenController } from './fullscreen.js';
import { createViewerControls } from './viewer-controls.js';
import { createPresentationStage } from './presentation-stage.js';
import { openSlideOverview } from './slide-overview.js';
import { openKeyboardHelp } from './keyboard-help.js';
const MODES = ['th', 'en'];
const INTERACTIVE = 'button, a, input, textarea, select, summary, details, audio, video, [contenteditable], [data-slide-interactive], [role="button"], [role="slider"]';
export function keyboardDelta(event) { if (event.ctrlKey || event.altKey || event.metaKey || event.isComposing || event.target?.closest?.(INTERACTIVE)) return 0; return ['ArrowLeft', '<'].includes(event.key) ? -1 : ['ArrowRight', '>'].includes(event.key) ? 1 : 0; }
export function createSlideController(lesson, { language = 'th', slideId } = {}) {
  const ordered = lesson.slideOrder ? lesson.slideOrder.map(id => lesson.slides.find(s => s.id === id)) : lesson.slides;
  let index = Math.max(0, ordered.findIndex(s => s.id === slideId));
  // TH is the preferred default for Learning Slides; safely map 'both' to 'th'
  let mode = language === 'en' ? 'en' : 'th';
  return { get index() { return index; }, get language() { return mode; }, get slides() { return ordered; }, current: () => ordered[index],
    move(delta) { index = Math.max(0, Math.min(ordered.length - 1, index + delta)); },
    goToSlide(id) { const target = ordered.findIndex(s => s.id === id); if (target >= 0) index = target; },
    setLanguage(value) { mode = value === 'en' ? 'en' : 'th'; }
  };
}

export function mountLearningViewer(container, { lesson, language = 'en', progress, onProgress = () => {}, onBack = () => {}, onLanguage = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  const hadHostClass = container.classList.contains('learning-viewer-host'); container.classList.add('learning-viewer-host');
  const root = element(doc, 'section', 'learning-screen learning-viewer');
  const workspace = element(doc, 'div', 'learning-presentation presentation-workspace'); workspace.tabIndex = 0; workspace.setAttribute('role', 'region'); workspace.setAttribute('data-view', 'presentation');
  const slot = element(doc, 'div', 'presentation-stage-slot'), stage = element(doc, 'article', 'learning-slide presentation-canvas');
  slot.append(stage);
  const notice = element(doc, 'p', 'viewer-notice'); notice.setAttribute('role', 'status'); notice.hidden = true;
  const announcement = element(doc, 'p', 'learning-sr-only'); announcement.setAttribute('aria-live', 'polite'); announcement.setAttribute('aria-atomic', 'true');
  let saved = reconcileProgress(lesson, progress), destroyed = false, slideHandle, infoHandle, overviewHandle, helpHandle, pointer, longPressTimer, chromeTimer;
  const initialLang = language === 'en' ? 'en' : 'th';
  const states = new Map(), controller = createSlideController(lesson, { language: initialLang, slideId: saved.lastSlideId });
  function notify(message) { if (!destroyed) { notice.textContent = message; notice.hidden = !message; stageEngine.refresh(); } }
  function emit() { if (!destroyed && onProgress(saved)?.persisted === false) notify('Progress is available for this visit only because local storage is unavailable or unreadable.'); }
  function pauseMedia() { stage.querySelectorAll('audio, video').forEach(m => m.pause?.()); }
  async function normalMode() { if (fullscreen.active) await fullscreen.exit(); return !destroyed && !fullscreen.active; }
  async function showInfo() {
    if (fullscreen.active && !await normalMode()) return;
    if (destroyed) return;
    overviewHandle?.destroy(); infoHandle?.destroy(); helpHandle?.destroy(); pauseMedia();
    infoHandle = renderLessonInfo(root, { lesson, language: controller.language });
  }
  async function showSlides() {
    // Synchronous in normal mode so an activated button opens its dialog immediately.
    if (fullscreen.active) { if (!await normalMode()) return; }
    if (destroyed) return; infoHandle?.destroy(); overviewHandle?.destroy(); helpHandle?.destroy(); pauseMedia();
    controls.slides.setAttribute('aria-expanded', 'true');
    overviewHandle = openSlideOverview(root, { slides: controller.slides, activeSlideId: controller.current().id,
      onClose: () => controls.slides.setAttribute('aria-expanded', 'false'),
      onSelect: id => { goToSlide(id); workspace.focus(); } });
  }
  async function showHelp() {
    if (fullscreen.active && !await normalMode()) return;
    if (destroyed) return; infoHandle?.destroy(); overviewHandle?.destroy(); helpHandle?.destroy(); pauseMedia();
    controls.help?.setAttribute?.('aria-expanded', 'true');
    helpHandle = openKeyboardHelp(root, {
      onClose: () => controls.help?.setAttribute?.('aria-expanded', 'false')
    });
  }
  const controls = createViewerControls(doc, { lesson, language: controller.language, signal,
    onBack, onPrevious: () => move(-1), onNext: () => move(1), onSlides: showSlides, onInfo: showInfo,
    onFullscreen: () => fullscreen.enter(), onExitFullscreen: () => fullscreen.exit(), onLanguage: setLanguage,
    onComplete: () => { saved = completeReading(lesson, saved); emit(); updateControls(); },
    onHelp: showHelp });
  const readingToggle = button(doc, 'Toggle reading layout', 'en', () => stageEngine.setReading(stageEngine.mode !== 'reading'), signal, 'learning-sr-only');
  readingToggle.setAttribute('data-action', 'reading');
  const showControls = button(doc, 'Show controls', 'en', () => { wakeControls(); controls.bar.querySelector('[data-action="exit-fullscreen"]')?.focus(); }, signal, 'viewer-show-controls'); showControls.setAttribute('data-action', 'show-controls'); showControls.hidden = true;
  workspace.append(slot, readingToggle, showControls);
  root.append(controls.bar, notice, workspace, announcement);
  container.replaceChildren(root);
  const fullscreen = createFullscreenController(workspace, {
    onChange(active) {
      root.classList.toggle('learning-is-fullscreen', active);
      showControls.hidden = !active;
      if (active) {
        workspace.prepend(controls.bar);
      } else {
        root.insertBefore(controls.bar, notice);
      }
      wakeControls();
      updateControls();
      stageEngine.refresh();
    },
    onError() { notify('Fullscreen is unavailable. Continue in the normal presentation.'); }
  });
  const stageEngine = createPresentationStage(workspace, stage, controls.bar, {
    notice,
    onModeChange(mode) {
      root.classList.toggle('learning-reading-mode', mode === 'reading');
      announcement.textContent = mode === 'reading' ? 'Readable slide view' : 'Presentation view';
      paintSlide(false);
    }
  });
  function updateControls() {
    controls.update({ index: controller.index, count: controller.slides.length, mode: controller.language,
      completed: saved.status === 'completed', canComplete: saved.visitedSlideIds.length === controller.slides.length, fullscreen: fullscreen.active });
    workspace.setAttribute('aria-label', `${controller.current().title.en} (${controller.index + 1}/${controller.slides.length})`);
  }
  function paintSlide(visit = true) {
    if (destroyed) return;
    slideHandle?.destroy();
    const current = controller.current();
    if (!states.has(current.id)) states.set(current.id, {});
    slideHandle = renderSlide(stage, { slide: current, lesson, language: controller.language,
      mode: stageEngine.mode === 'reading' ? 'reading' : 'presentation', interactionState: states.get(current.id) });
    stageEngine.setContent({ key: `${current.id}:${controller.language}`, ready: slideHandle.ready });
    if (visit) { saved = visitSlide(lesson, saved, current.id, controller.language); emit(); }
    updateControls(); announcement.textContent = workspace.getAttribute('aria-label');
  }
  function goToSlide(id) {
    if (destroyed || !controller.slides.some(s => s.id === id) || id === controller.current().id) return;
    controller.goToSlide(id); paintSlide(); wakeControls();
    if (stageEngine.mode === 'reading') doc.defaultView?.scrollTo?.({ top: 0, behavior: 'auto' });
  }
  function move(delta) { if (!destroyed) { const target = Math.max(0, Math.min(controller.slides.length - 1, controller.index + delta)); goToSlide(controller.slides[target].id); } }
  function setLanguage(mode) {
    if (destroyed) return;
    const safeMode = mode === 'en' ? 'en' : 'th';
    if (controller.language === safeMode) return;
    controller.setLanguage(safeMode);
    onLanguage(safeMode);
    paintSlide(false);
  }
  function wakeControls() {
    if (destroyed) return; clearTimeout(chromeTimer); workspace.removeAttribute('data-controls-hidden'); controls.bar.inert = false; controls.bar.removeAttribute('aria-hidden');
    if (fullscreen.active) chromeTimer = setTimeout(() => {
      if (destroyed || controls.bar.contains(doc.activeElement) || showControls === doc.activeElement) return;
      workspace.setAttribute('data-controls-hidden', 'true'); controls.bar.inert = true; controls.bar.setAttribute('aria-hidden', 'true');
    }, 2500);
  }
  workspace.addEventListener('focusin', wakeControls, { signal });
  workspace.addEventListener('pointermove', wakeControls, { signal, passive: true });
  workspace.addEventListener('keydown', event => {
    wakeControls();
    if (event.key === 'Escape') {
      if (helpHandle) { helpHandle.destroy(); helpHandle = null; return; }
      if (fullscreen.active) { fullscreen.exit(); return; }
    }
    if (event.key === '?' && !event.target.closest?.(INTERACTIVE)) {
      event.preventDefault();
      showHelp();
      return;
    }
    if ((event.key === 'f' || event.key === 'F') && !event.ctrlKey && !event.altKey && !event.metaKey && !event.target.closest?.(INTERACTIVE)) {
      event.preventDefault();
      if (fullscreen.active) fullscreen.exit(); else fullscreen.enter();
      return;
    }
    const delta = keyboardDelta(event); if (delta) { event.preventDefault(); move(delta); }
  }, { signal });
  workspace.addEventListener('pointerdown', event => {
    if (!fullscreen.active || event.target.closest?.(INTERACTIVE) || event.isPrimary === false || event.button > 0) return;
    pointer = { x: event.clientX, y: event.clientY, drag: false, suppress: false };
    clearTimeout(longPressTimer); longPressTimer = setTimeout(() => { if (pointer && !pointer.drag) { pointer.suppress = true; wakeControls(); showControls.focus(); } }, 650);
  }, { signal });
  workspace.addEventListener('pointermove', event => { if (pointer && Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y) > 10) { pointer.drag = true; clearTimeout(longPressTimer); } }, { signal, passive: true });
  workspace.addEventListener('pointerup', () => clearTimeout(longPressTimer), { signal });
  workspace.addEventListener('pointercancel', () => { clearTimeout(longPressTimer); if (pointer) pointer.suppress = true; }, { signal });
  workspace.addEventListener('click', event => {
    const suppress = pointer?.drag || pointer?.suppress; pointer = null;
    if (!fullscreen.active || suppress || event.target.closest?.(INTERACTIVE) || doc.getSelection?.().toString() || event.detail === 0) return;
    const box = stage.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.left + box.width || event.clientY < box.top || event.clientY > box.top + box.height) return;
    move(event.clientX - box.left < box.width / 2 ? -1 : 1);
  }, { signal });
  doc.defaultView?.addEventListener?.('pagehide', emit, { signal });
  paintSlide(); workspace.focus();
  return { get currentSlideId() { return controller.current().id; }, goToSlide, setLanguage,
    setReading(value) { stageEngine.setReading(value); },
    destroy() {
      if (destroyed) return; emit(); destroyed = true; infoHandle?.destroy(); overviewHandle?.destroy(); helpHandle?.destroy();
      clearTimeout(chromeTimer); clearTimeout(longPressTimer); abort.abort(); stageEngine.destroy(); fullscreen.destroy(); slideHandle?.destroy();
      if (!hadHostClass) container.classList.remove('learning-viewer-host');
    }
  };
}
