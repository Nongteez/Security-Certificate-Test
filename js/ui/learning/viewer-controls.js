import { element, button, languageControls } from './dom.js';
import { createThemeToggleButton } from '../components/theme-toggle.js';

function getCompactLessonTitle(titleObj) {
  if (!titleObj) return '';
  const en = typeof titleObj === 'string' ? titleObj : titleObj.en || '';
  if (!en) return '';
  let compact = en;
  if (compact.includes(':')) {
    compact = compact.split(':')[0].trim();
  } else if (compact.includes('—')) {
    compact = compact.split('—')[0].trim();
  } else if (compact.includes(' - ')) {
    compact = compact.split(' - ')[0].trim();
  }
  compact = compact.replace(/^The\s+/i, '').trim();
  return compact || en;
}

function createBackIcon(doc) {
  const icon = doc.createElementNS?.('http://www.w3.org/2000/svg', 'svg') || doc.createElement('svg');
  icon.setAttribute('width', '18');
  icon.setAttribute('height', '18');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('stroke-width', '2.2');
  icon.setAttribute('stroke-linecap', 'round');
  icon.setAttribute('stroke-linejoin', 'round');
  icon.setAttribute('aria-hidden', 'true');
  const path = doc.createElementNS?.('http://www.w3.org/2000/svg', 'path') || doc.createElement('path');
  path.setAttribute('d', 'M19 12H5M12 19l-7-7 7-7');
  icon.append(path);
  return icon;
}

function createKeyboardIcon(doc) {
  const icon = doc.createElementNS?.('http://www.w3.org/2000/svg', 'svg') || doc.createElement('svg');
  icon.setAttribute('width', '18');
  icon.setAttribute('height', '18');
  icon.setAttribute('viewBox', '0 0 24 24');
  icon.setAttribute('fill', 'none');
  icon.setAttribute('stroke', 'currentColor');
  icon.setAttribute('stroke-width', '2');
  icon.setAttribute('stroke-linecap', 'round');
  icon.setAttribute('stroke-linejoin', 'round');
  icon.setAttribute('aria-hidden', 'true');
  const rect = doc.createElementNS?.('http://www.w3.org/2000/svg', 'rect') || doc.createElement('rect');
  rect.setAttribute('x', '2');
  rect.setAttribute('y', '4');
  rect.setAttribute('width', '20');
  rect.setAttribute('height', '16');
  rect.setAttribute('rx', '2');
  rect.setAttribute('ry', '2');
  const path = doc.createElementNS?.('http://www.w3.org/2000/svg', 'path') || doc.createElement('path');
  path.setAttribute('d', 'M6 8h.001M10 8h.001M14 8h.001M18 8h.001M6 12h.001M10 12h.001M14 12h.001M18 12h.001M8 16h8');
  icon.append(rect, path);
  return icon;
}

/** A professional three-zone toolbar serving desktop, tablet, mobile and fullscreen modes. */
export function createViewerControls(doc, { lesson, language, signal, onBack, onPrevious, onNext, onSlides, onInfo, onFullscreen, onExitFullscreen, onLanguage, onHelp, onComplete }) {
  const bar = element(doc, 'nav', 'learning-toolbar viewer-toolbar');
  bar.setAttribute('aria-label', 'Presentation controls');

  const action = (label, id, fn, className = 'viewer-control') => {
    const b = button(doc, label, 'en', fn, signal, className);
    b.setAttribute('data-action', id);
    b.setAttribute('aria-label', label);
    b.title = label;
    return b;
  };

  // ZONE 1: LEFT — Lesson Context (Icon Back + Divider + Eyebrow & Title)
  const zoneLeft = element(doc, 'div', 'viewer-zone viewer-zone-left viewer-normal-only');
  const back = action('', 'back-domain', onBack, 'viewer-control viewer-back-btn viewer-normal-only');
  back.setAttribute('aria-label', 'Back to Domain');
  back.title = 'Back to Domain';
  back.replaceChildren(createBackIcon(doc));

  const dividerLeft = element(doc, 'span', 'viewer-divider viewer-normal-only');
  dividerLeft.setAttribute('aria-hidden', 'true');

  const fullLessonTitle = lesson.title?.en || (typeof lesson.title === 'string' ? lesson.title : '');
  const compactTitle = lesson.shortTitle?.en || getCompactLessonTitle(lesson.title);
  const domainNum = lesson.domainId ?? 1;
  const objCode = lesson.primaryObjectiveId || lesson.objectiveIds?.[0] || '1.1';
  const kickerText = `DOMAIN ${domainNum} · OBJECTIVE ${objCode}`;

  const context = element(doc, 'div', 'viewer-lesson-context viewer-normal-only');
  context.title = fullLessonTitle;
  context.setAttribute('aria-label', fullLessonTitle);

  const kicker = element(doc, 'span', 'viewer-lesson-kicker', kickerText);
  kicker.setAttribute('aria-hidden', 'true');

  const title = element(doc, 'h1', 'learning-lesson-title viewer-lesson-heading', compactTitle);
  title.title = fullLessonTitle;
  title.setAttribute('aria-label', fullLessonTitle);

  context.append(kicker, title);
  zoneLeft.append(back, dividerLeft, context);

  // ZONE 2: CENTER — Slide Navigation (‹ 1 / 8 › / Finish Lesson / Exit Fullscreen)
  const navigation = element(doc, 'div', 'learning-controls viewer-navigation viewer-zone viewer-zone-center');
  navigation.setAttribute('role', 'group');
  navigation.setAttribute('aria-label', 'Slide navigation');

  const previous = action('‹', 'previous', onPrevious, 'viewer-control viewer-nav-btn');
  previous.setAttribute('aria-label', 'Previous slide');
  previous.title = 'Previous slide';

  const counter = element(doc, 'span', 'learning-counter');
  counter.setAttribute('aria-live', 'off');

  const next = action('›', 'next', onNext, 'viewer-control viewer-nav-btn');
  next.setAttribute('aria-label', 'Next slide');
  next.title = 'Next slide';

  const complete = action('Finish Lesson', 'complete', onComplete, 'viewer-control viewer-complete-btn');
  complete.hidden = true;

  const exit = action('Exit Fullscreen', 'exit-fullscreen', onExitFullscreen, 'viewer-control viewer-exit-btn');
  exit.hidden = true;

  navigation.append(previous, counter, next, complete, exit);

  // ZONE 3: RIGHT — Presentation Tools (EN/TH/EN+TH | Slides Info Keyboard Fullscreen Theme)
  const zoneRight = element(doc, 'div', 'viewer-zone viewer-zone-right viewer-normal-only');

  const utilities = element(doc, 'div', 'start-top-actions viewer-utilities');
  const initialLang = language === 'en' ? 'en' : 'th';
  const languages = languageControls(doc, initialLang, onLanguage, signal, ['th', 'en']);

  const dividerRight = element(doc, 'span', 'viewer-divider');
  dividerRight.setAttribute('aria-hidden', 'true');

  const slides = action('Slides', 'slides', onSlides, 'viewer-control viewer-btn-tool');
  slides.setAttribute('aria-expanded', 'false');

  const info = action('Info', 'lesson-info', onInfo, 'viewer-control viewer-btn-tool');
  info.setAttribute('aria-label', 'Lesson Info');

  const help = action('', 'help', onHelp, 'viewer-control viewer-btn-tool viewer-btn-icon');
  help.setAttribute('aria-label', 'Keyboard shortcuts');
  help.title = 'Keyboard shortcuts';
  help.setAttribute('aria-expanded', 'false');
  help.replaceChildren(createKeyboardIcon(doc));

  const full = action('⛶', 'fullscreen', onFullscreen, 'viewer-control viewer-btn-tool viewer-btn-icon');
  full.setAttribute('aria-label', 'Fullscreen');
  full.title = 'Fullscreen';

  const themeToggle = createThemeToggleButton(doc, 'viewer-theme-toggle', null, signal);

  utilities.append(languages, dividerRight, slides, info, help, full, themeToggle);
  zoneRight.append(utilities);

  bar.append(zoneLeft, navigation, zoneRight);

  return {
    bar, slides, full, help,
    update({ index, count, mode, completed, canComplete, fullscreen }) {
      previous.disabled = index === 0;
      next.disabled = index === count - 1;
      counter.textContent = `${index + 1} / ${count}`;
      complete.hidden = index !== count - 1;
      complete.disabled = completed || !canComplete;
      complete.children[0].textContent = completed ? 'Completed' : 'Finish Lesson';
      complete.title = canComplete ? 'Acknowledge reading completion' : 'Visit every slide before finishing this lesson';
      next.hidden = index === count - 1;
      exit.hidden = !fullscreen;
      Array.from(languages.children).forEach((b) => {
        const lang = b.getAttribute('data-lang');
        const active = lang === mode;
        b.classList.toggle('active', active);
        b.setAttribute('aria-pressed', String(active));
      });
    }
  };
}
