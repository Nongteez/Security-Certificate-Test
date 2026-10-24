import { validateCatalog, validateLesson, publishedLessons } from './learning-schema.js';
export { validateCatalog, validateLesson, publishedLessons };
export const CATALOG_URL = new URL('../../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url);
async function fetchData(url, signal) {
  const response = await fetch(url, { signal }); if (!response.ok) throw Error(`Learning content could not load (${response.status})`); return response.json();
}
export async function loadLearningCatalog({ signal, fetchJSON = fetchData } = {}) {
  const catalog = await fetchJSON(CATALOG_URL, signal); const validation = validateCatalog(catalog);
  if (!validation.valid) throw Error(`Invalid learning catalog: ${validation.errors.join('; ')}`); return catalog;
}
export async function loadPublishedLesson(catalog, lessonId, { signal, fetchJSON = fetchData } = {}) {
  if (!validateCatalog(catalog).valid) throw Error('Invalid learning catalog');
  const summary = publishedLessons(catalog).find(l => l.id === lessonId);
  if (!summary) throw Error('This lesson is not published');
  const lesson = await fetchJSON(new URL(summary.lessonPath, CATALOG_URL), signal), validation = validateLesson(lesson);
  if (!validation.valid || lesson.status !== 'published' || lesson.id !== summary.id || lesson.revision !== summary.revision || lesson.domainId !== summary.domainId || lesson.primaryObjectiveId !== summary.primaryObjectiveId || JSON.stringify(lesson.objectiveIds) !== JSON.stringify(summary.objectiveIds)) throw Error('Lesson is unavailable or its publication review is invalid');
  return lesson;
}
export async function hasPublishedLearning({ catalog, signal, fetchJSON = fetchData } = {}) {
  try { catalog ||= await loadLearningCatalog({ signal, fetchJSON }); if (!validateCatalog(catalog).valid) return false;
    for (const summary of publishedLessons(catalog)) { try { await loadPublishedLesson(catalog, summary.id, { signal, fetchJSON }); return true; } catch { if (signal?.aborted) return false; } }
  } catch { /* Unavailable catalog never enables the card. */ } return false;
}
