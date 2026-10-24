import { element, button, languageControls } from './learning/dom.js';

export function renderLearningDomain(container, { domain, language = 'en', focusId, onBack = () => {}, onLanguage = () => {}, onLaunch = () => {}, onInfo = () => {} }) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  const root = element(doc, 'section', 'learning-screen learning-course-screen');
  const nav = element(doc, 'header', 'learning-course-nav'); nav.append(button(doc, '← Learning Center', 'en', onBack, signal, 'learning-back-link'), languageControls(doc, language, onLanguage, signal));
  const heading = element(doc, 'div', 'learning-course-heading');
  heading.append(element(doc, 'p', 'learning-eyebrow', `DOMAIN ${String(domain.id).padStart(2, '0')} · ${domain.weight} EXAM WEIGHT`), element(doc, 'h1', '', domain.name.en), element(doc, 'p', 'learning-course-description', domain.introduction));
  const h1 = heading.querySelector('h1'); h1.tabIndex = -1;
  heading.append(element(doc, 'p', 'learning-progress-label', domain.pending ? 'Checking availability…' : domain.total ? `${domain.total} ${domain.total === 1 ? 'lesson' : 'lessons'} available · ${domain.completed} completed` : domain.failed ? 'Lesson availability could not be checked.' : 'Lessons are being prepared for this domain.'));
  root.append(nav, heading);
  for (const o of domain.objectives) {
    const section = element(doc, 'section', 'learning-objective'); section.id = `learning-objective-${o.id.replace('.', '-')}`;
    const title = element(doc, 'h2'); title.append(element(doc, 'span', 'learning-objective-code', o.id), element(doc, 'span', '', o.title.en)); section.append(title);
    if (!o.lessons.length) section.append(element(doc, 'p', 'learning-course-status', 'Coming Soon'));
    for (const entry of o.lessons) {
      const { summary, lesson, progress, availability } = entry;
      const card = element(doc, 'article', 'learning-domain-lesson');
      card.append(element(doc, 'h3', '', summary.title.en), element(doc, 'p', 'learning-domain-description', summary.synopsis.en));
      const status = availability === 'available' ? progress.status === 'completed' ? 'Completed' : progress.status === 'in-progress' ? 'In progress' : 'Not started' : availability === 'pending' ? 'Checking availability…' : availability === 'failed' ? 'Availability could not be checked' : 'Coming Soon';
      card.append(element(doc, 'p', 'learning-progress-label', `Objective ${o.id} · ${status}${lesson ? ` · ${progress.visitedSlideIds.length} of ${lesson.slides.length} slides viewed` : ''}`));
      if (availability === 'available') {
        const actions = element(doc, 'div', 'learning-lesson-actions');
        const intent = progress.status === 'not-started' ? 'start' : progress.status === 'completed' ? 'review' : 'resume';
        const label = intent === 'start' ? 'Start Lesson' : intent === 'review' ? 'Review Lesson' : 'Resume Lesson';
        const action = button(doc, `${label} →`, 'en', () => onLaunch(summary.id, intent, o.id), signal, 'btn btn-primary'); action.id = `learning-lesson-${summary.id}-${o.id.replace('.', '-')}`; action.setAttribute('data-lesson-id', summary.id);
        const info = button(doc, 'Lesson Info', 'en', () => onInfo(lesson), signal, 'learning-back-link'); info.setAttribute('aria-label', `Lesson Info: ${summary.title.en}`);
        actions.append(action, info); card.append(actions);
      }
      section.append(card);
    }
    root.append(section);
  }
  container.replaceChildren(root); (focusId && root.querySelector(`#${focusId}`) || h1).focus({ preventScroll: !!focusId });
  return () => abort.abort();
}
