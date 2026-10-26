import { element, button, uiLabel, languageControls, localize } from './learning/dom.js';
import { createThemeToggleButton } from './components/theme-toggle.js';
import { resolveObjectiveLearningState } from '../core/learning-course.js';

export function renderLearningDomain(container, {
  domain,
  language = 'en',
  focusId,
  selectedObjectiveId,
  onBack = () => {},
  onLanguage = () => {},
  onLaunch = () => {},
  onInfo = () => {}
}) {
  const doc = container.ownerDocument, abort = new AbortController(), signal = abort.signal;
  const root = element(doc, 'section', 'learning-screen learning-course-screen');
  const nav = element(doc, 'header', 'start-top-bar learning-course-nav');
  const back = button(doc, '← Learning Center', 'en', onBack, signal, 'btn btn-secondary btn-back-home');
  back.id = 'btn-domain-back';
  const actions = element(doc, 'div', 'start-top-actions');
  actions.append(
    languageControls(doc, language, onLanguage, signal),
    createThemeToggleButton(doc, 'domain-theme-toggle', null, signal)
  );
  nav.append(back, actions);

  const heading = element(doc, 'div', 'learning-course-heading');
  heading.append(
    element(doc, 'p', 'learning-eyebrow', `DOMAIN ${String(domain.id).padStart(2, '0')} · ${domain.weight} EXAM WEIGHT`),
    element(doc, 'h1', '', domain.name.en),
    element(doc, 'p', 'learning-course-description', domain.introduction)
  );
  const h1 = heading.querySelector('h1');
  h1.tabIndex = -1;

  if (domain.failed) {
    heading.append(element(doc, 'p', 'learning-status learning-error-label', 'Lesson availability could not be checked.'));
  } else if (domain.pending) {
    heading.append(element(doc, 'p', 'learning-status', 'Checking availability…'));
  }
  root.append(nav, heading);

  // Objectives model resolution
  const objectivesWithState = domain.objectives.map(o => {
    const state = resolveObjectiveLearningState(o);
    const isAvailable = !!state;
    const isFailed = (o.lessons || []).some(e => e?.availability === 'failed');
    return { objective: o, state, isAvailable, isFailed };
  });

  const availableItems = objectivesWithState.filter(item => item.isAvailable);

  // Initial selection resolution
  let currentSelected = null;
  if (selectedObjectiveId) {
    currentSelected = objectivesWithState.find(item => item.isAvailable && item.objective.id === selectedObjectiveId) || null;
  }
  if (!currentSelected && focusId) {
    currentSelected = objectivesWithState.find(item => item.isAvailable && (`learning-objective-${item.objective.id.replace('.', '-')}` === focusId || focusId.includes(item.objective.id.replace('.', '-')))) || null;
  }
  if (!currentSelected) {
    currentSelected = availableItems[0] || null;
  }

  // Objective list container
  const list = element(doc, 'div', 'learning-objective-list');
  list.setAttribute('role', 'radiogroup');
  list.setAttribute('aria-label', `${domain.name.en} Objectives`);

  const rows = new Map();

  for (const item of objectivesWithState) {
    const { objective: o, isAvailable, isFailed } = item;
    const row = element(doc, 'div', `learning-objective learning-objective-item ${isAvailable ? 'is-available' : 'is-unavailable'}`);
    row.id = `learning-objective-${o.id.replace('.', '-')}`;
    row.setAttribute('role', 'radio');
    row.setAttribute('data-objective-id', o.id);

    // Radio indicator
    const radio = element(doc, 'div', 'objective-radio-indicator');
    radio.setAttribute('aria-hidden', 'true');
    const dot = element(doc, 'div', 'objective-radio-dot');
    radio.append(dot);

    // Row content: code — title
    const content = element(doc, 'div', 'objective-item-content');
    const code = element(doc, 'span', 'learning-objective-code objective-item-code', o.id);
    const sep = element(doc, 'span', 'objective-item-sep', '—');
    const title = element(doc, 'span', 'objective-item-title');
    localize(title, o.title, language);
    content.append(code, sep, title);

    if (!isAvailable) {
      row.setAttribute('aria-disabled', 'true');
      row.tabIndex = -1;
      const badge = element(doc, 'span', 'objective-status-badge', isFailed ? 'Availability could not be checked' : 'Coming Soon');
      row.append(radio, content, badge);
    } else {
      row.append(radio, content);
      row.addEventListener('click', () => {
        updateSelection(item, false);
      }, { signal });

      row.addEventListener('keydown', e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          updateSelection(item, true);
        } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          e.preventDefault();
          const idx = availableItems.indexOf(item);
          const next = availableItems[(idx + 1) % availableItems.length];
          if (next) updateSelection(next, true);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const idx = availableItems.indexOf(item);
          const prev = availableItems[(idx - 1 + availableItems.length) % availableItems.length];
          if (prev) updateSelection(prev, true);
        }
      }, { signal });
    }

    rows.set(o.id, row);
    list.append(row);
  }

  // Bottom action bar
  const bottomActions = element(doc, 'div', 'learning-domain-bottom-actions');
  const startBtn = element(doc, 'button', 'btn btn-primary btn-start-learning');
  startBtn.id = 'btn-start-learning';
  startBtn.type = 'button';

  const infoBtn = element(doc, 'button', 'learning-back-link btn-domain-info');
  infoBtn.id = 'btn-domain-lesson-info';
  infoBtn.type = 'button';
  uiLabel(infoBtn, 'Lesson Info');

  let selectedItem = currentSelected;
  const selectedLessons = new Map();
  const lessonChoice = element(doc, 'div', 'learning-objective-lesson-choice');
  const lessonLabel = element(doc, 'label', '', 'Lesson');
  lessonLabel.setAttribute('for', 'learning-objective-lesson');
  const lessonSelect = element(doc, 'select'); lessonSelect.id = 'learning-objective-lesson';
  lessonSelect.setAttribute('aria-label', 'Lesson');
  lessonChoice.append(lessonLabel, lessonSelect);
  lessonSelect.addEventListener('change', () => {
    if (!selectedItem) return;
    const entry = selectedItem.objective.lessons.find(e => e.availability === 'available' && e.lesson && e.summary.id === lessonSelect.value);
    if (!entry) return;
    selectedLessons.set(selectedItem.objective.id, entry.summary.id);
    updateSelection(selectedItem, false);
  }, { signal });

  function updateSelection(itemToSelect, shouldFocus = false) {
    if (itemToSelect && !itemToSelect.isAvailable) return;
    selectedItem = itemToSelect;
    if (selectedItem) {
      const entries = selectedItem.objective.lessons.filter(e => e.availability === 'available' && e.lesson && e.progress);
      const chosen = entries.find(e => e.summary.id === selectedLessons.get(selectedItem.objective.id));
      selectedItem.state = resolveObjectiveLearningState(chosen ? { ...selectedItem.objective, lessons: [chosen] } : selectedItem.objective);
      lessonChoice.hidden = entries.length < 2;
      lessonSelect.replaceChildren();
      for (const entry of entries) {
        const option = element(doc, 'option', '', entry.summary.title.en);
        option.value = entry.summary.id; option.setAttribute('value', entry.summary.id);
        lessonSelect.append(option);
      }
      lessonSelect.value = selectedItem.state?.summary.id || '';
    } else {
      lessonChoice.hidden = true; lessonSelect.replaceChildren();
    }

    for (const [id, r] of rows.entries()) {
      const isCurrent = selectedItem && selectedItem.objective.id === id;
      const itemData = objectivesWithState.find(it => it.objective.id === id);
      r.setAttribute('aria-checked', String(isCurrent));
      if (isCurrent) {
        r.classList.add('is-selected');
        r.tabIndex = 0;
        if (shouldFocus) r.focus();
      } else {
        r.classList.remove('is-selected');
        r.tabIndex = itemData?.isAvailable ? -1 : -1;
      }
    }

    if (selectedItem && selectedItem.state) {
      const { summary, lesson } = selectedItem.state;
      startBtn.disabled = false;
      startBtn.removeAttribute('aria-disabled');
      uiLabel(startBtn, 'Start Learning →');
      startBtn.setAttribute('data-lesson-id', summary.id);
      if (lesson) {
        infoBtn.hidden = false;
        infoBtn.setAttribute('aria-label', `Lesson Info: ${summary.title.en}`);
      } else {
        infoBtn.hidden = true;
      }
    } else {
      startBtn.disabled = true;
      startBtn.setAttribute('aria-disabled', 'true');
      uiLabel(startBtn, 'Start Learning →');
      startBtn.removeAttribute('data-lesson-id');
      infoBtn.hidden = true;
    }
  }

  startBtn.addEventListener('click', () => {
    if (!selectedItem || !selectedItem.state) return;
    const { summary, intent } = selectedItem.state;
    onLaunch(summary.id, intent, selectedItem.objective.id);
  }, { signal });

  infoBtn.addEventListener('click', () => {
    if (!selectedItem || !selectedItem.state?.lesson) return;
    onInfo(selectedItem.state.lesson);
  }, { signal });

  updateSelection(currentSelected, false);

  bottomActions.append(startBtn, infoBtn);
  root.append(list, lessonChoice, bottomActions);
  container.replaceChildren(root);

  // Focus restoration
  let focusTarget = null;
  if (focusId) {
    focusTarget = root.querySelector(`#${focusId}`);
    if (!focusTarget && (focusId.startsWith('learning-lesson-') || focusId === 'btn-start-learning')) {
      focusTarget = startBtn;
    }
  }
  if (!focusTarget && currentSelected) {
    focusTarget = h1;
  }
  (focusTarget || h1).focus({ preventScroll: !!focusId });

  return () => abort.abort();
}
