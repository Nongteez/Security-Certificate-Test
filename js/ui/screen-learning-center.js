import { element, button, languageControls } from './learning/dom.js';
import { buildLearningCourseModel } from '../core/learning-course.js';
import { createThemeToggleButton } from './components/theme-toggle.js';

export function renderLearningCenter(container, { catalog, course = buildLearningCourseModel({ catalog }), language = 'en', focusId, onBack = () => {}, onLanguage = () => {}, onDomain = () => {}, onLaunch = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  const root = element(doc, 'section', 'learning-screen learning-course-screen');
  const header = element(doc, 'header', 'start-top-bar learning-course-nav');
  const back = button(doc, '← Back to Versions', 'en', onBack, signal, 'btn btn-secondary btn-back-home');
  back.id = 'btn-learning-back';
  const actions = element(doc, 'div', 'start-top-actions');
  actions.append(
    languageControls(doc, language, onLanguage, signal),
    createThemeToggleButton(doc, 'learning-theme-toggle', null, signal)
  );
  header.append(back, actions);
  const intro = element(doc, 'div', 'learning-course-heading');
  intro.append(element(doc, 'p', 'learning-eyebrow', 'ISC2 CERTIFIED IN CYBERSECURITY · 2026'), element(doc, 'h1', '', 'Learning Center'), element(doc, 'p', 'learning-course-description', 'Build your understanding through visual explanations, realistic scenarios, and structured lessons.'));
  intro.querySelector('h1').tabIndex = -1;
  root.append(header, intro);
  if (course.resume) {
    const continueRegion = element(doc, 'section', 'learning-continue');
    const { lesson, summary, progress } = course.resume;
    const ordered = lesson.slideOrder || lesson.slides.map(s => s.id);
    const context = element(doc, 'div', 'learning-continue-copy');
    context.append(element(doc, 'p', 'learning-eyebrow', 'CONTINUE LEARNING'), element(doc, 'h2', '', summary.title.en),
      element(doc, 'p', 'learning-course-description', `Domain ${summary.domainId} · Objective ${summary.primaryObjectiveId} · Last viewed: Slide ${ordered.indexOf(progress.lastSlideId) + 1} of ${ordered.length}`),
      element(doc, 'p', 'learning-progress-label', `${progress.visitedSlideIds.length} of ${ordered.length} slides viewed`));
    const resume = button(doc, 'Resume Lesson →', 'en', () => onLaunch(summary.id, 'resume'), signal, 'btn btn-primary'); resume.setAttribute('data-action', 'continue-learning');
    continueRegion.append(context, resume);
    root.append(continueRegion);
  }
  const sectionHead = element(doc, 'div', 'learning-section-heading'); sectionHead.append(element(doc, 'h2', '', 'Explore Domains'));
  if (!course.pending && course.total) sectionHead.append(element(doc, 'p', 'learning-progress-label', `${course.completed} of ${course.total} available lessons completed`));
  root.append(sectionHead);
  const grid = element(doc, 'div', 'learning-domain-grid');
  for (const d of course.domains) {
    const card = element(doc, 'article', 'learning-domain-card');
    card.id = `learning-domain-${d.id}`;
    card.setAttribute('data-domain-id', String(d.id));
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', `Domain ${d.id}: ${d.name.en}`);
    card.addEventListener('click', () => onDomain(d.id), { signal });
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onDomain(d.id);
      }
    }, { signal });

    const top = element(doc, 'div', 'learning-domain-card-meta');
    top.append(element(doc, 'span', 'learning-domain-index', `Domain ${d.id}`), element(doc, 'span', 'learning-weight', `${d.weight} exam weight`));
    card.append(top, element(doc, 'h3', '', d.name.en), element(doc, 'p', 'learning-domain-description', d.introduction));
    grid.append(card);
  }
  root.append(grid);
  container.replaceChildren(root);
  (focusId && root.querySelector(`#${focusId}`) || intro.querySelector('h1')).focus({ preventScroll: !!focusId });
  return () => abort.abort();
}
