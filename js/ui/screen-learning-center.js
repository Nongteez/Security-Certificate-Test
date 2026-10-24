import { element, button, languageControls } from './learning/dom.js';
import { buildLearningCourseModel } from '../core/learning-course.js';

export function renderLearningCenter(container, { catalog, course = buildLearningCourseModel({ catalog }), language = 'en', focusId, onBack = () => {}, onLanguage = () => {}, onDomain = () => {}, onLaunch = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  const root = element(doc, 'section', 'learning-screen learning-course-screen');
  const header = element(doc, 'header', 'learning-course-nav');
  header.append(button(doc, '← Back to Versions', 'en', onBack, signal, 'learning-back-link'), languageControls(doc, language, onLanguage, signal));
  const intro = element(doc, 'div', 'learning-course-heading');
  intro.append(element(doc, 'p', 'learning-eyebrow', 'ISC2 CERTIFIED IN CYBERSECURITY · 2026'), element(doc, 'h1', '', 'Learning Center'), element(doc, 'p', 'learning-course-description', 'Build your understanding through visual explanations, realistic scenarios, and structured lessons.'));
  intro.querySelector('h1').tabIndex = -1;
  root.append(header, intro);
  const continueRegion = element(doc, 'section', 'learning-continue');
  if (course.resume) {
    const { lesson, summary, progress } = course.resume;
    const ordered = lesson.slideOrder || lesson.slides.map(s => s.id);
    const context = element(doc, 'div', 'learning-continue-copy');
    context.append(element(doc, 'p', 'learning-eyebrow', 'CONTINUE LEARNING'), element(doc, 'h2', '', summary.title.en),
      element(doc, 'p', 'learning-course-description', `Domain ${summary.domainId} · Objective ${summary.primaryObjectiveId} · Last viewed: Slide ${ordered.indexOf(progress.lastSlideId) + 1} of ${ordered.length}`),
      element(doc, 'p', 'learning-progress-label', `${progress.visitedSlideIds.length} of ${ordered.length} slides viewed`));
    const resume = button(doc, 'Resume Lesson →', 'en', () => onLaunch(summary.id, 'resume'), signal, 'btn btn-primary'); resume.setAttribute('data-action', 'continue-learning');
    continueRegion.append(context, resume);
  } else {
    continueRegion.classList.add('learning-start-intro');
    continueRegion.append(element(doc, 'h2', '', course.total && course.completed === course.total ? 'Ready for another look?' : 'Your learning path starts here'),
      element(doc, 'p', '', course.pending ? 'Checking lesson availability…' : course.failed ? 'Some lesson availability could not be checked. You can explore the domains below.' : course.total && course.completed === course.total ? 'You have completed all currently available lessons. Open a domain to review what you learned.' : 'Choose a domain below to explore its objectives and available lessons.'));
  }
  root.append(continueRegion);
  const sectionHead = element(doc, 'div', 'learning-section-heading'); sectionHead.append(element(doc, 'h2', '', 'Explore Domains'));
  if (!course.pending && course.total) sectionHead.append(element(doc, 'p', 'learning-progress-label', `${course.completed} of ${course.total} available lessons completed`));
  root.append(sectionHead);
  const grid = element(doc, 'div', 'learning-domain-grid');
  for (const d of course.domains) {
    const card = element(doc, 'article', 'learning-domain-card'), top = element(doc, 'div', 'learning-domain-card-meta');
    top.append(element(doc, 'span', 'learning-domain-index', String(d.id).padStart(2, '0')), element(doc, 'span', 'learning-weight', `${d.weight} exam weight`));
    card.append(top, element(doc, 'h3', '', d.name.en), element(doc, 'p', 'learning-domain-description', d.introduction));
    const status = d.pending ? 'Checking availability…' : d.total ? `${d.total} ${d.total === 1 ? 'lesson' : 'lessons'} available` : d.failed ? 'Availability could not be checked' : 'Coming Soon';
    card.append(element(doc, 'p', `learning-course-status ${d.total ? 'is-available' : ''}`, status));
    if (d.total && !d.pending) card.append(element(doc, 'p', 'learning-progress-label', `${d.completed} of ${d.total} available lessons completed`));
    const action = button(doc, 'Explore Domain →', 'en', () => onDomain(d.id), signal, 'learning-domain-link');
    action.id = `learning-domain-${d.id}`; action.setAttribute('data-domain-id', d.id); action.setAttribute('aria-label', `Explore Domain ${d.id}: ${d.name.en}`); card.append(action); grid.append(card);
  }
  root.append(grid, element(doc, 'p', 'learning-coverage-note', 'More lessons are being prepared. Progress reflects available lessons, not full exam readiness.'));
  container.replaceChildren(root);
  (focusId && root.querySelector(`#${focusId}`) || intro.querySelector('h1')).focus({ preventScroll: !!focusId });
  return () => abort.abort();
}
