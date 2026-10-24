export const LEARNING_PROGRESS_KEY = 'sec_cert_learning_progress_v1';
const modes = ['en', 'th', 'both'];
export function reconcileProgress(lesson, saved) {
  const ids = lesson.slideOrder || lesson.slides.map(s => s.id), valid = saved && saved.lessonId === lesson.id;
  const visited = valid && Array.isArray(saved.visitedSlideIds) ? [...new Set(saved.visitedSlideIds.filter(id => ids.includes(id)))] : [];
  const same = valid && saved.contentRevision === lesson.revision;
  const completed = same && saved.status === 'completed' && ids.length > 0 && ids.every(id => visited.includes(id)) && typeof saved.completedAt === 'string';
  return { lessonId: lesson.id, contentRevision: lesson.revision, lastSlideId: valid && ids.includes(saved.lastSlideId) ? saved.lastSlideId : ids[0] || null, visitedSlideIds: visited, status: completed ? 'completed' : visited.length ? 'in-progress' : 'not-started', completedAt: completed ? saved.completedAt : null, updatedAt: valid && typeof saved.updatedAt === 'string' ? saved.updatedAt : null, language: valid && modes.includes(saved.language) ? saved.language : 'en' };
}
export function visitSlide(lesson, progress, slideId, language = progress?.language || 'en') {
  const next = reconcileProgress(lesson, progress); if (!lesson.slides.some(s => s.id === slideId)) return next;
  next.lastSlideId = slideId; next.visitedSlideIds = [...new Set([...next.visitedSlideIds, slideId])]; next.status = next.status === 'completed' ? 'completed' : 'in-progress'; next.language = modes.includes(language) ? language : 'en'; next.updatedAt = new Date().toISOString(); return next;
}
export function completeReading(lesson, progress) {
  const next = reconcileProgress(lesson, progress); if (lesson.slides.length && next.visitedSlideIds.length === lesson.slides.length) { next.status = 'completed'; next.completedAt = new Date().toISOString(); } return next;
}
export function createProgressStore(providedStorage) {
  let data = { schemaVersion: 1, lessons: {} }, storage = providedStorage, writable = true;
  try {
    if (!storage) storage = globalThis.localStorage;
    const raw = storage?.getItem(LEARNING_PROGRESS_KEY);
    if (raw) { const parsed = raw.length < 1000000 ? JSON.parse(raw) : null;
      if (parsed?.schemaVersion !== 1 || !parsed.lessons || typeof parsed.lessons !== 'object' || Array.isArray(parsed.lessons)) writable = false;
      else data = { schemaVersion: 1, lessons: Object.assign(Object.create(null), parsed.lessons) };
    }
  } catch { writable = false; }
  return {
    read: lesson => reconcileProgress(lesson, Object.hasOwn(data.lessons, lesson.id) ? data.lessons[lesson.id] : null),
    summary: id => Object.hasOwn(data.lessons, id) ? data.lessons[id] : null,
    save(lesson, progress) { const next = reconcileProgress(lesson, progress); data.lessons[lesson.id] = next;
      try { if (!writable || !storage) return { persisted: false }; storage.setItem(LEARNING_PROGRESS_KEY, JSON.stringify(data)); return { persisted: true }; } catch { return { persisted: false }; }
    }
  };
}
