import { OUTLINE_ID, validateLesson } from './learning-schema.js';
import { reconcileProgress } from './learning-progress.js';

// English navigation metadata: ISC2 CC outline effective 2026-09-01, PDF pp. 3–7.
const domainMetadata = {
  1: { weight: '24%', introduction: 'Build a foundation in security goals, risk, governance, controls, and professional conduct.' },
  2: { weight: '17.3%', introduction: 'Explore governance, continuity, security awareness, and measuring cybersecurity effectiveness.' },
  3: { weight: '20%', introduction: 'Explore identity life cycle management and the principles that govern logical access.' },
  4: { weight: '21.3%', introduction: 'Explore network protection, security architecture, and cloud security concepts.' },
  5: { weight: '17.3%', introduction: 'Explore data security, security operations, incident response, asset protection, and testing.' }
};
const value = (source, key) => source instanceof Map ? source.get(key) : source?.[key];
function timestamp(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z$/.test(value)) return -Infinity;
  const parsed = Date.parse(value); return Number.isFinite(parsed) ? parsed : -Infinity;
}
/** Pure view model. Never saves progress or promotes an unvalidated lesson. */
export function buildLearningCourseModel({ catalog, lessonsById = new Map(), availabilityById = new Map(), progressStore }) {
  const entries = new Map(), availableLessons = [];
  let pending = 0, failed = 0;
  for (const domain of catalog.domains) for (const objective of domain.objectives) for (const summary of objective.lessons) {
    const lesson = value(lessonsById, summary.id);
    let availability = summary.status === 'published' ? (value(availabilityById, summary.id) || 'pending') : 'coming-soon';
    if (availability === 'available') {
      const matches = lesson?.status === 'published' && lesson.id === summary.id && lesson.revision === summary.revision && lesson.domainId === summary.domainId && lesson.primaryObjectiveId === summary.primaryObjectiveId && JSON.stringify(lesson.objectiveIds) === JSON.stringify(summary.objectiveIds);
      if (!matches || !validateLesson(lesson).valid) availability = 'failed';
    }
    const progress = availability === 'available' ? reconcileProgress(lesson, progressStore?.summary(summary.id)) : null;
    const entry = { summary, lesson: availability === 'available' ? lesson : null, progress, availability };
    entries.set(summary.id, entry);
    if (availability === 'available') availableLessons.push(entry);
    if (availability === 'pending') pending++;
    if (availability === 'failed') failed++;
  }
  const resume = availableLessons.filter(e => e.progress.status === 'in-progress').sort((a, b) => {
    const at = timestamp(a.progress.updatedAt), bt = timestamp(b.progress.updatedAt);
    if (at !== bt) return at > bt ? -1 : 1;
    return at === -Infinity ? 0 : a.summary.id.localeCompare(b.summary.id);
  })[0] || null;
  const domains = catalog.domains.map(domain => {
    const owned = availableLessons.filter(e => e.summary.domainId === domain.id);
    return { ...domain, ...(catalog.outlineId === OUTLINE_ID ? domainMetadata[domain.id] : {}),
      total: owned.length, completed: owned.filter(e => e.progress.status === 'completed').length,
      pending: [...entries.values()].filter(e => e.summary.domainId === domain.id && e.availability === 'pending').length,
      failed: [...entries.values()].filter(e => e.summary.domainId === domain.id && e.availability === 'failed').length,
      objectives: domain.objectives.map(o => ({ ...o, lessons: [...o.lessons.map(s => entries.get(s.id)), ...o.relatedLessonIds.map(id => entries.get(id))].filter(Boolean) })) };
  });
  return { domains, availableLessons, resume, total: availableLessons.length, completed: availableLessons.filter(e => e.progress.status === 'completed').length, pending, failed };
}

/** Pure helper to resolve the appropriate lesson and action state for an Objective. */
export function resolveObjectiveLearningState(objective) {
  const availableEntries = (objective?.lessons || []).filter(
    e => e && e.availability === 'available' && e.lesson && e.progress
  );
  if (!availableEntries.length) return null;

  // 1. Resume unfinished lesson if valid in-progress progress exists (most recently updated first)
  const inProgress = availableEntries
    .filter(e => e.progress.status === 'in-progress')
    .sort((a, b) => {
      const at = timestamp(a.progress.updatedAt), bt = timestamp(b.progress.updatedAt);
      if (at !== bt) return at > bt ? -1 : 1;
      return a.summary.id.localeCompare(b.summary.id);
    });

  if (inProgress.length > 0) {
    const target = inProgress[0];
    return {
      entry: target,
      lesson: target.lesson,
      summary: target.summary,
      progress: target.progress,
      intent: 'resume',
      status: 'in-progress',
      buttonLabel: 'Start Learning →'
    };
  }

  // 2. Otherwise begin first not-started lesson in catalog order
  const notStarted = availableEntries.find(e => e.progress.status === 'not-started');
  const anyCompleted = availableEntries.some(e => e.progress.status === 'completed');

  if (notStarted) {
    return {
      entry: notStarted,
      lesson: notStarted.lesson,
      summary: notStarted.summary,
      progress: notStarted.progress,
      intent: 'start',
      status: anyCompleted ? 'in-progress' : 'not-started',
      buttonLabel: 'Start Learning →'
    };
  }

  // 3. If all lessons are completed, allow review without resetting completed progress
  const firstCompleted = availableEntries[0];
  return {
    entry: firstCompleted,
    lesson: firstCompleted.lesson,
    summary: firstCompleted.summary,
    progress: firstCompleted.progress,
    intent: 'review',
    status: 'completed',
    buttonLabel: 'Start Learning →'
  };
}
