// Copied only into an ignored, locally generated preview. Never imported by the public app.
import { state, updateSetup } from './js/core/state.js';
import { loadLearningCatalog } from './js/core/learning-loader.js';
import { createProgressStore } from './js/core/learning-progress.js';
import { renderLearningCenter } from './js/ui/screen-learning-center.js';
import { renderLearningLesson } from './js/ui/screen-learning-lesson.js';
import { mountLearningViewer } from './js/ui/learning/viewer.js';
import { element, button, pair } from './js/ui/learning/dom.js';
const root = document.getElementById('app'), catalog = await loadLearningCatalog(), fixture = await (await fetch('./preview/fixture.json')).json();
const memory = new Map(), progress = createProgressStore({ getItem: key => memory.get(key), setItem: (key, value) => memory.set(key, value) });
let dispose = () => {}, screen = 'center', slideId;
const banner = element(document, 'aside', 'learning-preview-banner'); banner.setAttribute('role', 'note');
banner.append(element(document, 'strong', '', 'DEVELOPMENT PREVIEW · Unreviewed technical fixtures · Not published learning material'));
banner.append(button(document, pair('Open technical fixtures', 'เปิดข้อมูลทดสอบระบบ'), 'both', () => { screen = 'lesson'; show(); }));
const publicLink = element(document, 'a', '', 'Inspect public app (Coming Soon)'); publicLink.href = './public.html'; banner.append(publicLink); document.body.prepend(banner);
function show() {
  dispose(); const language = state.setup.language;
  const onLanguage = mode => { updateSetup({ language: mode }); show(); };
  if (screen === 'center') dispose = renderLearningCenter(root, { catalog, language, onLanguage, onBack: () => { location.href = './public.html'; }, onLesson() {} });
  else if (screen === 'lesson') dispose = renderLearningLesson(root, { lesson: fixture, language, progress: progress.read(fixture), onLanguage, onBack: () => { screen = 'center'; show(); }, onStart: id => { slideId = id; screen = 'viewer'; show(); } });
  else {
    const saved = progress.read(fixture); if (slideId) saved.lastSlideId = slideId;
    const viewer = mountLearningViewer(root, { lesson: fixture, language, progress: saved, onLanguage: mode => updateSetup({ language: mode }), onProgress: p => { slideId = p.lastSlideId; return progress.save(fixture, p); }, onBack: () => { screen = 'lesson'; show(); } }); dispose = () => viewer.destroy();
  }
}
show();
