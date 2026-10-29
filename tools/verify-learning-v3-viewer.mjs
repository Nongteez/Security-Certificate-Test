import assert from 'node:assert/strict';
import {test} from 'node:test';
import fs from 'node:fs';
import {TestDocument,fire} from './fixtures/learning/dom.mjs';
import {mountLearningViewer} from '../js/ui/learning/viewer.js';
const lesson=JSON.parse(fs.readFileSync(new URL('../content/isc2-cc-2026/learning/published/lessons/lesson-d1-01-cia-triad.json',import.meta.url)));
const text=n=>[n.textContent||'',...n.children.map(text)].join(' ');
function mount(l=lesson){const doc=new TestDocument(),root=doc.createElement('div');doc.body.append(root);const saved=[];const h=mountLearningViewer(root,{lesson:l,language:'both',onProgress:p=>saved.push(p)});return{doc,root,h,saved};}
test('one toolbar replaces permanent filmstrip/select with a closed-by-default Slides overview',()=>{
 const {root,h}=mount();try{assert.equal(root.querySelectorAll('.learning-toolbar').length,1);assert.equal(!!root.querySelector('select'),false);assert.equal(!!root.querySelector('.learning-filmstrip'),false);assert.equal(!!root.querySelector('[role="dialog"]'),false);assert.ok(root.querySelector('[data-action="slides"]'));assert.equal(root.classList.contains('learning-viewer-host'),true);}finally{h.destroy();assert.equal(root.classList.contains('learning-viewer-host'),false);}
});
test('Slides offers bounded accessible previews, selects a specific slide, closes and preserves focus',()=>{
 const {root,doc,h}=mount();try{const open=root.querySelector('[data-action="slides"]');assert.ok(open);open.focus();fire(open,'click');const dialog=root.querySelector('[role="dialog"]');assert.ok(dialog);assert.equal(dialog.querySelectorAll('[data-slide-id]').length,lesson.slides.length);assert.ok(dialog.querySelector('[aria-current="true"]'));const target=dialog.querySelector('[data-slide-id="slide-06-compound-impact"]');fire(target,'click');assert.equal(h.currentSlideId,'slide-06-compound-impact');assert.equal(root.querySelector('[role="dialog"]'),null);assert.ok(root.contains(doc.activeElement));}finally{h.destroy();}
});
test('long decks overview navigates to End without mounting hundreds of live previews',()=>{
 const l=structuredClone(lesson);l.slides=Array.from({length:500},(_,i)=>({...l.slides[i%8],id:`slide-${i}`}));const{root,h}=mount(l);try{const open=root.querySelector('[data-action="slides"]');assert.ok(open);fire(open,'click');let dialog=root.querySelector('[role="dialog"]');assert.ok(dialog.querySelectorAll('[data-slide-id]').length<=25);fire(dialog,'keydown',{key:'End',target:dialog.querySelector('[data-slide-id]')});const last=dialog.querySelector('[data-slide-id="slide-499"]');assert.ok(last);fire(last,'click');assert.equal(h.currentSlideId,'slide-499');}finally{h.destroy();}
});
test('fullscreen exit restores the exact scenario selection without rebuilding its DOM',async()=>{
 const{root,doc,h}=mount();try{h.goToSlide('slide-07-scenario-reflection');const choice=root.querySelectorAll('[data-option-key]')[1];fire(choice,'click');const workspace=root.querySelector('.learning-presentation');workspace.requestFullscreen=async()=>{doc.fullscreenElement=workspace;doc.dispatchEvent(new Event('fullscreenchange'));};const full=root.querySelector('[data-action="fullscreen"]');assert.ok(full);fire(full,'click');await Promise.resolve();assert.equal(root.querySelectorAll('[data-option-key]')[1]===choice,true);assert.equal(choice.getAttribute('aria-pressed'),'true');assert.ok(root.querySelector('[data-action="exit-fullscreen"]'));await doc.exitFullscreen();assert.equal(h.currentSlideId,'slide-07-scenario-reflection');assert.equal(root.querySelectorAll('[data-option-key]')[1]===choice,true);assert.equal(choice.getAttribute('aria-pressed'),'true');}finally{h.destroy();}
});
test('scenario state survives language and Text View transitions, without writing interaction data into progress',()=>{
 const{root,h,saved}=mount();try{h.goToSlide('slide-07-scenario-reflection');fire(root.querySelectorAll('[data-option-key]')[1],'click');h.setLanguage('th');assert.equal(root.querySelectorAll('[data-option-key]')[1].getAttribute('aria-pressed'),'true');const read=root.querySelector('[data-action="reading"]');assert.ok(read);fire(read,'click');assert.ok(root.querySelector('.learning-slide-body').querySelector('p'));fire(read,'click');assert.equal(root.querySelectorAll('[data-option-key]')[1].getAttribute('aria-pressed'),'true');assert.equal(saved.at(-1).status,'in-progress');assert.equal('interactionState' in saved.at(-1),false);}finally{h.destroy();}
});
test('controls stay English, slide educational text stays bilingual, and only explicit completion finishes',()=>{
 const{root,h,saved}=mount();try{assert.equal(/[\u0e00-\u0e7f]/.test(text(root.querySelector('.learning-toolbar'))),false);assert.ok(root.querySelector('.learning-slide').querySelector('[lang="th"]'));h.goToSlide('slide-08-takeaways');assert.notEqual(saved.at(-1).status,'completed');for(const s of lesson.slides)h.goToSlide(s.id);const finish=root.querySelector('[data-action="complete"]');assert.ok(finish);assert.equal(finish.disabled,false);fire(finish,'click');assert.equal(saved.at(-1).status,'completed');}finally{h.destroy();}
});

test('three-zone toolbar layout has distinct left context, centered navigation, and right presentation tools', () => {
  const { root, doc, h } = mount();
  try {
    const toolbar = root.querySelector('.learning-toolbar');
    assert.ok(toolbar);

    // Left zone: Lesson Context
    const left = toolbar.querySelector('.viewer-zone-left');
    assert.ok(left, 'viewer-zone-left must exist');
    const back = left.querySelector('[data-action="back-domain"]');
    assert.ok(back, 'Back to Domain button must exist in left zone');
    assert.equal(back.getAttribute('aria-label'), 'Back to Domain');
    assert.equal(back.title, 'Back to Domain');
    assert.ok(back.querySelector('svg'), 'Back button must contain SVG icon');

    const leftDivider = left.querySelector('.viewer-divider');
    assert.ok(leftDivider, 'Divider must exist between Back and title');

    const kicker = left.querySelector('.viewer-lesson-kicker');
    assert.ok(kicker, 'Kicker metadata must exist in left zone');
    assert.equal(kicker.textContent, 'DOMAIN 1 · OBJECTIVE 1.1');

    const title = left.querySelector('.learning-lesson-title');
    assert.ok(title, 'Lesson title must exist in left zone');
    assert.equal(title.textContent, 'CIA Triad', 'Title should be compact in toolbar');
    assert.equal(title.title, 'The CIA Triad: Core Information Security Goals', 'Full title preserved in tooltip');
    assert.equal(title.getAttribute('aria-label'), 'The CIA Triad: Core Information Security Goals', 'Full title in aria-label');

    // Center zone: Slide Navigation
    const center = toolbar.querySelector('.viewer-zone-center');
    assert.ok(center, 'viewer-zone-center must exist');
    assert.equal(center.getAttribute('role'), 'group');
    assert.equal(center.getAttribute('aria-label'), 'Slide navigation');

    const prev = center.querySelector('[data-action="previous"]');
    const next = center.querySelector('[data-action="next"]');
    const counter = center.querySelector('.learning-counter');
    assert.ok(prev && next && counter);
    assert.equal(prev.disabled, true, 'Previous disabled on first slide');
    assert.equal(counter.textContent, `1 / ${lesson.slides.length}`);

    // Right zone: Presentation Tools
    const right = toolbar.querySelector('.viewer-zone-right');
    assert.ok(right, 'viewer-zone-right must exist');
    const utilities = right.querySelector('.viewer-utilities');
    assert.ok(utilities, 'viewer-utilities must exist in right zone');
    assert.ok(utilities.querySelector('.lang-toggle'), 'Language toggle must exist in right zone');
    assert.ok(utilities.querySelector('.viewer-divider'), 'Divider must exist after language toggle');
    assert.ok(utilities.querySelector('[data-action="slides"]'), 'Slides button must exist in right tools');
    assert.ok(utilities.querySelector('[data-action="lesson-info"]'), 'Info button must exist in right tools');
    assert.ok(utilities.querySelector('[data-action="help"]'), 'Keyboard Help button must exist in right tools');
    assert.ok(utilities.querySelector('[data-action="fullscreen"]'), 'Fullscreen button must exist in right tools');
    assert.ok(utilities.querySelector('#viewer-theme-toggle'), 'Theme toggle must exist in right tools');
    assert.equal(utilities.querySelector('[data-action="more"]'), null, 'Redundant more menu must be removed');

    // Test keyboard help button and dialog
    const helpBtn = utilities.querySelector('[data-action="help"]');
    assert.ok(helpBtn, 'Keyboard shortcuts button must exist');
    assert.equal(helpBtn.getAttribute('aria-label'), 'Keyboard shortcuts');
    fire(helpBtn, 'click');
    const dialog = root.querySelector('.viewer-help-dialog');
    assert.ok(dialog, 'Keyboard shortcuts dialog must open');
    assert.equal(dialog.getAttribute('role'), 'dialog');
    assert.equal(dialog.getAttribute('aria-modal'), 'true');
    assert.ok(dialog.querySelector('#keyboard-help-title'));
    assert.ok(dialog.querySelectorAll('.viewer-shortcut-row').length >= 4);

    // Escape closes help dialog
    fire(dialog, 'keydown', { key: 'Escape' });
    assert.equal(root.querySelector('.viewer-help-dialog'), null, 'Escape must close help dialog');
  } finally {
    h.destroy();
  }
});

test('presentation CSS defines three-zone grid, deep slate theme tokens, and responsive dock', () => {
  const css = fs.readFileSync(new URL('../css/learning-presentation.css', import.meta.url), 'utf8');

  // Three-zone grid layout
  assert.match(css, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*auto\s*minmax\(0,\s*1fr\)/, 'Toolbar must use three-zone grid');

  // Theme tokens
  assert.match(css, /--viewer-bg:\s*#0d1117/, 'Dark theme must use deep slate background');
  assert.match(css, /--viewer-toolbar-bg:\s*#161b22/, 'Dark theme must provide tonal separation for toolbar');
  assert.match(css, /--viewer-slide-border:/, 'Slide border token must exist');
  assert.match(css, /--viewer-slide-shadow:/, 'Slide shadow token must exist');
  assert.match(css, /html\[data-theme="light"\][^{]*\{[^}]*--viewer-bg:\s*#edf1f7/, 'Light theme must use soft cool slate');

  // Slide canvas styling
  assert.match(css, /\.learning-viewer\s+\.learning-slide\s*\{[^}]*border:\s*1px\s*solid/, 'Slide must have subtle border');
  assert.match(css, /\.learning-viewer\s+\.learning-slide\s*\{[^}]*border-radius:/, 'Slide must have border-radius');
  assert.match(css, /\.learning-viewer\s+\.learning-slide\s*\{[^}]*box-shadow:/, 'Slide must have box-shadow');

  // Breakpoints
  assert.match(css, /@media\s*\(max-width:\s*1099px\)/, 'Tablet breakpoint must be defined');
  assert.match(css, /@media\s*\(max-width:\s*719px\)/, 'Mobile breakpoint must be defined');
  assert.match(css, /\.learning-viewer\s+\.viewer-navigation\s*\{[^}]*position:\s*fixed/, 'Mobile must dock navigation at bottom');
});

test('layout architecture: toolbar and workspace are strictly siblings, preventing canvas overlap', () => {
  const { root, h } = mount();
  try {
    const toolbar = root.querySelector('.learning-toolbar');
    const workspace = root.querySelector('.presentation-workspace');
    const slot = root.querySelector('.presentation-stage-slot');
    const slide = root.querySelector('.learning-slide');

    assert.ok(toolbar, 'Toolbar must exist');
    assert.ok(workspace, 'Presentation workspace must exist');
    assert.ok(slot, 'Stage slot must exist');
    assert.ok(slide, 'Slide canvas must exist');

    // Sibling hierarchy check: toolbar and workspace must both be direct children of the viewer screen
    const viewerScreen = root.querySelector('.learning-viewer');
    assert.ok(viewerScreen, 'Viewer screen container must exist');
    assert.equal(toolbar.parentElement, viewerScreen, 'Toolbar must be a direct child of the learning viewer root');
    assert.equal(workspace.parentElement, viewerScreen, 'Workspace must be a direct child of the learning viewer root');
    assert.equal(workspace.contains(toolbar), false, 'Toolbar must NOT be inside the presentation workspace');
    assert.equal(toolbar.contains(workspace), false, 'Workspace must NOT be inside the toolbar');

    // Stage containment: slide is strictly inside stage slot inside workspace
    assert.equal(slot.parentElement, workspace, 'Stage slot must be inside presentation workspace');
    assert.equal(slot.contains(slide), true, 'Slide canvas must be inside stage slot');
    assert.equal(toolbar.contains(slide), false, 'Slide canvas must NOT be inside toolbar');
    assert.equal(slide.contains(toolbar), false, 'Toolbar must NOT be inside slide canvas');

    // Three toolbar zones share the exact same toolbar parent
    const leftZone = toolbar.querySelector('.viewer-zone-left');
    const centerZone = toolbar.querySelector('.viewer-zone-center');
    const rightZone = toolbar.querySelector('.viewer-zone-right');
    assert.ok(leftZone && centerZone && rightZone, 'All three zones must exist');
    assert.equal(leftZone.parentElement, toolbar, 'Left zone parent must be toolbar');
    assert.equal(centerZone.parentElement, toolbar, 'Center zone parent must be toolbar');
    assert.equal(rightZone.parentElement, toolbar, 'Right zone parent must be toolbar');

    // Back button must not carry legacy margin-bottom class
    const backBtn = leftZone.querySelector('[data-action="back-domain"]');
    assert.ok(backBtn);
    assert.equal(backBtn.classList.contains('btn-back-home'), false, 'Back button must not use btn-back-home to avoid layout detachment');
    assert.equal(backBtn.classList.contains('viewer-back-btn'), true, 'Back button must use viewer-back-btn');

    // CSS file checks: verify legacy rules are strictly scoped
    const learningCss = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
    assert.match(learningCss, /\.learning-toolbar:not\(\.viewer-toolbar\)/, 'Legacy learning-toolbar must be scoped');
    assert.match(learningCss, /\.learning-controls:not\(\.viewer-navigation\)/, 'Legacy learning-controls must be scoped');

    // Presentation CSS checks: single horizontal row guarantee
    const presCss = fs.readFileSync(new URL('../css/learning-presentation.css', import.meta.url), 'utf8');
    assert.match(presCss, /\.learning-screen\.learning-viewer\s*\{[^}]*display:\s*flex/, 'Viewer screen must be flex column');
    assert.match(presCss, /\.learning-viewer\s+\.viewer-toolbar\s*\{[^}]*flex-wrap:\s*nowrap/, 'Toolbar must enforce flex-wrap nowrap');
    assert.match(presCss, /\.learning-viewer\s+\.viewer-toolbar\s*\{[^}]*height:\s*56px/, 'Toolbar height must be fixed 56px');
    assert.match(presCss, /\.learning-viewer\s+\.presentation-workspace\s*\{[^}]*background:\s*transparent/, 'Workspace background must be transparent');
  } finally {
    h.destroy();
  }
});

test('Gate B corrections: TH | EN language toggle, mobile touch targets, and natural mobile slide height', () => {
  const { root, h } = mount();
  try {
    const langToggle = root.querySelector('.lang-toggle');
    assert.ok(langToggle, 'Language toggle must exist');
    const buttons = Array.from(langToggle.querySelectorAll('.lang-btn'));
    assert.equal(buttons.length, 2, 'Learning viewer must expose exactly 2 buttons: TH and EN');
    assert.equal(buttons[0].getAttribute('data-lang'), 'th', 'First button must be TH');
    assert.equal(buttons[1].getAttribute('data-lang'), 'en', 'Second button must be EN');
    assert.equal(text(buttons[0]).trim(), 'TH', 'First button text must be TH');
    assert.equal(text(buttons[1]).trim(), 'EN', 'Second button text must be EN');
    assert.equal(buttons[0].classList.contains('active'), true, 'TH must be active by default when initialized with both or default');

    // Switching to EN
    h.setLanguage('en');
    assert.equal(buttons[1].classList.contains('active'), true, 'EN must become active');
    assert.equal(buttons[0].classList.contains('active'), false);

    // CSS architecture verification for Gate B
    const learningCss = fs.readFileSync(new URL('../css/learning.css', import.meta.url), 'utf8');
    assert.match(learningCss, /\.learning-presentation:not\(:fullscreen\):not\(\.presentation-workspace\)\s+\.learning-slide/, 'Legacy 250px mobile slide rule must be scoped away from presentation-workspace');

    const presCss = fs.readFileSync(new URL('../css/learning-presentation.css', import.meta.url), 'utf8');
    assert.match(presCss, /\[data-action="help"\][^{]*\[data-action="fullscreen"\]\s*\{[^}]*display:\s*none/, 'Mobile CSS must hide desktop help and fullscreen buttons');
    assert.match(presCss, /\.learning-viewer\s+\.viewer-back-btn\s*\{[^}]*min-width:\s*44px/, 'Back button must have min 44px touch target on mobile');
    assert.match(presCss, /\[data-layout="summary-grid"\][^{]*\.learning-table-scroll\s+th[^{]*\{[^}]*padding:\s*8px\s*14px/, 'Table cell padding must be optimized to prevent 14px vertical overflow');
  } finally {
    h.destroy();
  }
});


