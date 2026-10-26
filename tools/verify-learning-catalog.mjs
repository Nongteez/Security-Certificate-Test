import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { createFixture, reviewedTestInput } from './fixtures/learning/fixture.mjs';
const core = await import('../js/core/learning-loader.js').catch(() => ({}));
const catalog = () => JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/catalog.json', import.meta.url), 'utf8'));
function populated(lesson = reviewedTestInput()) { const c = catalog(); c.domains[0].objectives[0].lessons.push({ id: lesson.id, domainId: 1, primaryObjectiveId: '1.1', objectiveIds: ['1.1'], title: lesson.title, synopsis: lesson.synopsis, status: 'published', revision: lesson.revision, lessonPath: `lessons/${lesson.id}.json` }); return c; }
test('public catalog has five correct Domains, all official objectives and four reviewed Objective 1.1 lessons and two Objective 1.2 lessons', () => {
  assert.equal(typeof core.validateCatalog, 'function', 'catalog validation must be implemented');
  const c = catalog(); assert.equal(core.validateCatalog(c).valid, true);
  assert.deepEqual(c.domains.map(d => d.objectives.length), [5, 4, 2, 3, 5]);
  const published = core.publishedLessons(c);
  assert.deepEqual(published.map(l => l.id), ['lesson-d1-01-cia-triad', 'lesson-d1-02-aaa-mfa', 'lesson-d1-03-non-repudiation', 'lesson-d1-04-privacy', 'lesson-d1-05-risk-foundations', 'lesson-d1-06-assessment']);
  for (const summary of published) {
    const body = JSON.parse(fs.readFileSync(new URL(`../content/isc2-cc-2026/learning/published/${summary.lessonPath}`, import.meta.url), 'utf8'));
    assert.equal(core.validateLesson(body).valid, true, summary.id);
  }
  assert.equal(published[0].id, 'lesson-d1-01-cia-triad');
  assert.equal(published[0].domainId, 1);
  assert.equal(published[0].primaryObjectiveId, '1.1');
  const lessonPath = new URL(`../content/isc2-cc-2026/learning/published/${published[0].lessonPath}`, import.meta.url);
  assert.ok(fs.existsSync(lessonPath), 'published lesson file must exist');
  const lessonData = JSON.parse(fs.readFileSync(lessonPath, 'utf8'));
  const lessonValidation = core.validateLesson(lessonData);
  assert.equal(lessonValidation.valid, true, `Lesson errors: ${lessonValidation.errors?.join('; ')}`);
  assert.equal(lessonValidation.errors.length, 0);
  assert.equal(lessonData.slides.length, 8, 'CIA Triad pilot must have exactly 8 slides');
});
test('duplicates, cross-domain relations, invalid statuses and unsafe lesson paths cannot publish', () => {
  for (const mutate of [c => c.domains.push(c.domains[0]), c => c.domains[0].objectives[0].lessons.push(c.domains[0].objectives[0].lessons[0]), c => c.domains[0].objectives[0].lessons[0].objectiveIds = ['2.1'], c => c.domains[0].objectives[0].lessons[0].status = 'available', c => c.domains[0].objectives[0].lessons[0].lessonPath = '../tools/fixture.json', c => c.domains[0].objectives[1].relatedLessonIds.push('missing')]) {
    const c = populated(); mutate(c); assert.equal(core.validateCatalog(c).valid, false);
  }
});
test('draft omissions are warnings; published missing Thai, unsupported renderer, duplicate/order and asset failures are errors', () => {
  const draft = createFixture(); delete draft.slides[0].blocks[0].text.th;
  assert.equal(core.validateLesson(draft).valid, true); assert.ok(core.validateLesson(draft).warnings.length);
  assert.equal(core.validateLesson(reviewedTestInput()).valid, true);
  for (const mutate of [l => delete l.slides[0].blocks[0].text.th, l => l.slides[0].rendererId = 'remote-script', l => l.slides.push(l.slides[0]), l => l.slideOrder = ['missing'], l => l.slides[0].blocks.push({ kind: 'media', assetId: 'missing' }), l => l.review.reviewedRevision = 'old', l => l.slides[0].referenceIds = ['missing'], l => l.slides[0].review.status = 'pending']) {
    const l = reviewedTestInput(); mutate(l); assert.equal(core.validateLesson(l).valid, false);
  }
});
test('public loader refuses fixtures/unpublished IDs before fetching and validates fetched identity/review', async () => {
  let calls = 0; const fetchJSON = async () => { calls++; return createFixture(); };
  await assert.rejects(() => core.loadPublishedLesson(catalog(), 'technical-layout-fixture', { fetchJSON })); assert.equal(calls, 0);
  const c = populated(); await assert.rejects(() => core.loadPublishedLesson(c, 'technical-layout-fixture', { fetchJSON }));
  const good = await core.loadPublishedLesson(c, 'technical-layout-fixture', { fetchJSON: async () => reviewedTestInput() }); assert.equal(good.status, 'published');
});
test('availability is based on successfully loaded reviewed content, never registry status alone', async () => {
  const fetchReal = async (url) => JSON.parse(fs.readFileSync(url, 'utf8'));
  assert.equal(await core.hasPublishedLearning({ catalog: catalog(), fetchJSON: fetchReal }), true);
  assert.equal(await core.hasPublishedLearning({ catalog: catalog(), fetchJSON: async () => createFixture() }), false);
  assert.equal(await core.hasPublishedLearning({ catalog: populated(), fetchJSON: async () => createFixture() }), false);
  assert.equal(await core.hasPublishedLearning({ catalog: populated(), fetchJSON: async () => reviewedTestInput() }), true);
});
test('asset traversal, executable URLs and incomplete alternative descriptions are rejected', () => {
  for (const badPath of ['../private.png', 'https://example.com/image.png', 'x.svg', '%2e%2e/x.png', 'x.png?script=1']) {
    const l = reviewedTestInput(); l.assets = [{ id: 'art', path: badPath, type: 'image', alt: { en: 'Art', th: 'ภาพ' }, license: 'test', creator: 'test', rightsEvidencePath: 'docs/test-rights.md' }]; assert.equal(core.validateLesson(l).valid, false);
  }
});
test('non-string source URLs cannot pass published validation and crash the overview', () => {
  const l = reviewedTestInput(); l.references[0].url = ['https://example.com/source']; assert.equal(core.validateLesson(l).valid, false);
});
test('unpausable GIFs cannot publish through the ordinary image adapter', () => {
  const l = reviewedTestInput(); l.assets = [{ id: 'art', path: 'assets/learning/isc2-cc-2026/fixture/animation.gif', type: 'image', alt: { en: 'Art', th: 'ภาพ' }, license: 'test', creator: 'test', rightsEvidencePath: 'docs/test-rights.md' }]; assert.equal(core.validateLesson(l).valid, false);
});
test('malformed nested objects produce validation errors instead of crashing the validator', () => {
  for (const change of [c => c.domains[0] = null, c => c.domains[0].objectives[0] = null, c => c.domains[0].objectives[0].lessons.push(null)]) {
    const c = catalog(); change(c); assert.equal(core.validateCatalog(c).valid, false);
  }
  for (const change of [l => l.slides[0] = null, l => l.slides[0].blocks.push(null), l => l.references.push(null), l => l.assets.push(null)]) {
    const l = reviewedTestInput(); change(l); assert.equal(core.validateLesson(l).valid, false);
  }
});
export { populated };
