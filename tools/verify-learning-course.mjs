import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { createProgressStore, visitSlide, completeReading } from '../js/core/learning-progress.js';
const api = await import('../js/core/learning-course.js').catch(() => ({}));
const catalog = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url)));
const lesson = JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json', import.meta.url)));
function build(overrides = {}) {
  assert.equal(typeof api.buildLearningCourseModel, 'function', 'course model must derive honest availability and resume');
  return api.buildLearningCourseModel({ catalog, lessonsById: new Map([[lesson.id, lesson]]), availabilityById: new Map([[lesson.id, 'available']]), progressStore: createProgressStore({ getItem: () => null, setItem() {} }), ...overrides });
}
function saved(records) { return createProgressStore({ getItem: () => JSON.stringify({ schemaVersion: 1, lessons: records }), setItem() {} }); }
test('course shows five weighted domains and only genuinely validated lessons in totals', () => {
  const m = build(); assert.deepEqual(m.domains.map(d => d.weight), ['24%', '17.3%', '20%', '21.3%', '17.3%']);
  assert.equal(m.total, 1); assert.equal(m.completed, 0); assert.equal(m.resume, null);
  assert.deepEqual(m.domains.map(d => d.total), [1, 0, 0, 0, 0]); assert.equal(m.domains[0].objectives.length, 5);
});
test('resume preserves saved slide and counts actual visits without mutating V1 data', () => {
  const p = { ...visitSlide(lesson, null, 'slide-04-integrity', 'th'), updatedAt: '2026-10-24T12:00:00.000Z' };
  const store = saved({ [lesson.id]: p }); const before = JSON.stringify(store.summary(lesson.id));
  const m = build({ progressStore: store }); assert.equal(m.resume.lesson.id, 'lesson-d1-01-cia-triad');
  assert.equal(m.resume.progress.lastSlideId, 'slide-04-integrity'); assert.equal(m.resume.progress.visitedSlideIds.length, 1);
  assert.equal(m.resume.progress.language, 'th'); assert.equal(JSON.stringify(store.summary(lesson.id)), before);
});
test('unavailable and pending lesson bodies never expose resume or fabricated completion totals', () => {
  const p = visitSlide(lesson, null, 'slide-06-compound-impact');
  const pending = build({ lessonsById: new Map(), availabilityById: new Map(), progressStore: saved({ [lesson.id]: p }) });
  assert.equal(pending.pending, 1); assert.equal(pending.total, 0); assert.equal(pending.resume, null);
  const failed = build({ lessonsById: new Map(), availabilityById: new Map([[lesson.id, 'failed']]), progressStore: saved({ [lesson.id]: p }) });
  assert.equal(failed.failed, 1); assert.equal(failed.pending, 0); assert.equal(failed.resume, null);
});
test('stale saved slide falls back to first authored slide and unpublished records remain unlaunched', () => {
  const p = { lessonId: lesson.id, contentRevision: '1', lastSlideId: 'deleted', visitedSlideIds: ['slide-03-confidentiality'], status: 'in-progress' };
  const m = build({ progressStore: saved({ [lesson.id]: p, removed: { ...p, lessonId: 'removed', updatedAt: '2030-01-01T00:00:00.000Z' } }) });
  assert.equal(m.resume.progress.lastSlideId, 'slide-01-orientation'); assert.equal(m.total, 1);
});
test('completed lessons remain completed and offer review rather than a false continue action', () => {
  let p; for (const s of lesson.slides) p = visitSlide(lesson, p, s.id); p = completeReading(lesson, p);
  const m = build({ progressStore: saved({ [lesson.id]: p }) }); assert.equal(m.completed, 1); assert.equal(m.resume, null);
  assert.equal(m.availableLessons[0].progress.status, 'completed');
});
test('related objectives do not duplicate available lessons or domain completion', () => {
  const c = structuredClone(catalog), l = structuredClone(lesson); l.objectiveIds.push('1.2');
  c.domains[0].objectives[0].lessons[0].objectiveIds.push('1.2'); c.domains[0].objectives[1].relatedLessonIds.push(l.id);
  const m = build({ catalog: c, lessonsById: new Map([[l.id, l]]) });
  assert.equal(m.total, 1); assert.equal(m.domains[0].objectives[1].lessons[0].summary.id, l.id);
});
test('newest valid progress timestamp wins and malformed dates cannot steal Continue Learning', () => {
  const c = structuredClone(catalog), second = { ...structuredClone(lesson), id: 'second-lesson' };
  c.domains[0].objectives[0].lessons.push({ ...structuredClone(c.domains[0].objectives[0].lessons[0]), id: second.id, lessonPath: 'lessons/second-lesson.json' });
  const a = { ...visitSlide(lesson, null, 'slide-03-confidentiality'), updatedAt: '2026-10-24T12:00:00.000Z' };
  const b = { ...visitSlide(second, null, 'slide-05-availability'), updatedAt: '2026-10-25T12:00:00.000Z' };
  const inputs = { catalog: c, lessonsById: new Map([[lesson.id, lesson], [second.id, second]]), availabilityById: new Map([[lesson.id, 'available'], [second.id, 'available']]) };
  assert.equal(build({ ...inputs, progressStore: saved({ [lesson.id]: a, [second.id]: b }) }).resume.lesson.id, 'second-lesson');
  b.updatedAt = 'not-a-date'; assert.equal(build({ ...inputs, progressStore: saved({ [lesson.id]: a, [second.id]: b }) }).resume.lesson.id, lesson.id);
});
test('wrong revision or malformed published body is unavailable even when availability was claimed', () => {
  const m = build({ lessonsById: new Map([[lesson.id, { ...lesson, revision: 'wrong' }]]) });
  assert.equal(m.total, 0); assert.equal(m.failed, 1); assert.equal(m.resume, null);
});
