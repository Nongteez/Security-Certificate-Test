import { state, updateSetup, selectLearningScreen } from '../../core/state.js';
import { loadLearningCatalog, loadPublishedLesson, publishedLessons } from '../../core/learning-loader.js';
import { createProgressStore } from '../../core/learning-progress.js';
import { buildLearningCourseModel } from '../../core/learning-course.js';
import { renderLearningCenter } from '../screen-learning-center.js';
import { renderLearningDomain } from '../screen-learning-domain.js';
import { mountLearningViewer } from './viewer.js';
import { renderLessonInfo } from './lesson-info.js';
import { element, button } from './dom.js';

let disposeActive = () => {};
const defaultProgressStore = createProgressStore(), defaultLessonCache = new Map();
const returnContext = { centerY: 0, domainY: 0, focusId: null };
export function disposeLearningRoute() { disposeActive(); disposeActive = () => {}; }

/** Optional dependencies support the isolated preview and Node tests; public defaults always validate. */
export function renderLearningRoute(container, renderApp, { loadCatalog = loadLearningCatalog, loadLesson = loadPublishedLesson, progressStore = defaultProgressStore, lessonCache = defaultLessonCache } = {}) {
  const abort = new AbortController(), doc = container.ownerDocument;
  let disposeScreen = () => {}, info, alive = true;
  const dispose = () => { if (!alive) return; alive = false; abort.abort(); info?.destroy(); disposeScreen(); };
  disposeActive = dispose;
  const language = state.setup.language, route = state.screen, selected = { ...state.learning };
  const navigate = (screen, selection = {}) => { if (!alive) return; selectLearningScreen(screen, selection); renderApp(); };
  const rememberScroll = key => { returnContext[key] = doc.defaultView?.scrollY || 0; };
  const restoreScroll = key => { doc.defaultView?.scrollTo?.({ top: returnContext[key], behavior: 'auto' }); };
  const onLanguage = mode => {
    returnContext.focusId = `learning-language-${mode}`; updateSetup({ language: mode }); renderApp();
  };
  const loading = element(doc, 'p', 'learning-screen', 'Loading learning content…'); loading.setAttribute('role', 'status'); container.replaceChildren(loading);
  async function mount() {
    let catalog;
    try {
      catalog = await loadCatalog({ signal: abort.signal }); if (!alive) return;
      const lessonsById = new Map(), availabilityById = new Map();
      async function getLesson(id) {
        const summary = publishedLessons(catalog).find(l => l.id === id);
        if (!summary) throw Error('This lesson is not published');
        const cacheKey = `${catalog.outlineId}:${catalog.revision}:${summary.id}:${summary.revision}:${summary.lessonPath}`;
        const lesson = lessonCache.get(cacheKey) || await loadLesson(catalog, id, { signal: abort.signal });
        if (!alive) throw Error('Route disposed');
        // Cached bodies are rechecked by the pure course model; only the public loader fetches paths.
        lessonCache.set(cacheKey, lesson); lessonsById.set(id, lesson); availabilityById.set(id, 'available'); return lesson;
      }
      const courseModel = () => buildLearningCourseModel({ catalog, lessonsById, availabilityById, progressStore });
      const launch = (id, intent = 'resume', objectiveId) => {
        const entry = courseModel().availableLessons.find(e => e.summary.id === id); if (!entry) return;
        const { lesson, summary, progress } = entry;
        const objective = summary.objectiveIds.includes(objectiveId) ? objectiveId : summary.primaryObjectiveId;
        if (state.screen === 'learning-domain') rememberScroll('domainY');
        else { rememberScroll('centerY'); returnContext.domainY = 0; }
        returnContext.focusId = `learning-lesson-${id}-${objective.replace('.', '-')}`;
        const slideId = intent === 'start' ? (lesson.slideOrder?.[0] || lesson.slides[0].id) : progress.lastSlideId;
        navigate('learning-viewer', { lessonId: id, domainId: summary.domainId, objectiveId: objective, slideId });
      };
      const openInfo = lesson => { info?.destroy(); info = renderLessonInfo(container.querySelector('.learning-screen') || container, { lesson, language }); };
      if (route === 'learning-center' || route === 'learning-domain') {
        const paint = () => {
          const course = courseModel(), focusId = returnContext.focusId; disposeScreen();
          if (route === 'learning-domain') {
            const domain = course.domains.find(d => d.id === selected.domainId);
            if (!domain) { navigate('learning-center', { domainId: null }); return; }
            disposeScreen = renderLearningDomain(container, { domain, language, focusId, onLanguage, onLaunch: launch, onInfo: openInfo,
              onBack: () => { rememberScroll('domainY'); returnContext.focusId = `learning-domain-${domain.id}`; navigate('learning-center'); } });
            restoreScroll('domainY');
          } else {
            disposeScreen = renderLearningCenter(container, { catalog, course, language, focusId, onLanguage, onLaunch: launch,
              onBack: () => { state.screen = 'exam-versions'; renderApp(); },
              onDomain: domainId => { rememberScroll('centerY'); returnContext.domainY = 0; returnContext.focusId = null; navigate('learning-domain', { domainId }); } });
            restoreScroll('centerY');
          }
        };
        // Show honest pending states immediately; availability requests are bounded and abortable.
        paint();
        const queue = publishedLessons(catalog).filter(s => route === 'learning-center' || s.domainId === selected.domainId);
        await Promise.all(Array.from({ length: Math.min(4, queue.length) }, async () => {
          while (queue.length && alive) { const summary = queue.shift(); try { await getLesson(summary.id); } catch { if (alive) availabilityById.set(summary.id, 'failed'); } }
        }));
        if (alive) {
          const active = doc.activeElement; if (container.contains(active)) returnContext.focusId = active.id || returnContext.focusId;
          paint();
        }
        return;
      }
      await getLesson(selected.lessonId); if (!alive) return;
      const entry = courseModel().availableLessons.find(e => e.summary.id === selected.lessonId);
      if (!entry) throw Error('Invalid lesson');
      const { lesson, summary, progress } = entry;
      // Compatibility route ignores stale route slide state and resumes the saved V1 position.
      if (route !== 'learning-lesson' && selected.slideId && lesson.slides.some(s => s.id === selected.slideId)) progress.lastSlideId = selected.slideId;
      const objectiveId = summary.objectiveIds.includes(selected.objectiveId) ? selected.objectiveId : summary.primaryObjectiveId;
      selectLearningScreen('learning-viewer', { lessonId: lesson.id, domainId: lesson.domainId, objectiveId, slideId: progress.lastSlideId });
      const handle = mountLearningViewer(container, { lesson, language, progress,
        onBack: () => { returnContext.focusId = `learning-lesson-${lesson.id}-${objectiveId.replace('.', '-')}`; navigate('learning-domain', { domainId: lesson.domainId, objectiveId }); },
        onLanguage: mode => updateSetup({ language: mode }),
        onProgress: p => { state.learning.slideId = p.lastSlideId; return progressStore.save(lesson, p); } });
      disposeScreen = () => handle.destroy();
    } catch {
      if (!alive) return;
      const root = element(doc, 'section', 'learning-screen'); root.append(element(doc, 'p', '', 'Learning content could not be loaded.'),
        button(doc, 'Retry', 'en', () => { lessonCache.clear(); renderApp(); }, abort.signal),
        button(doc, 'Back to Learning Center', 'en', () => navigate('learning-center'), abort.signal));
      if (catalog?.domains.some(d => d.id === selected.domainId)) root.append(button(doc, 'Back to Domain', 'en', () => navigate('learning-domain', { domainId: selected.domainId }), abort.signal));
      container.replaceChildren(root);
    }
  }
  dispose.ready = mount(); return dispose;
}
