/**
 * ISC2 CC Exam Vocabulary Screen.
 * Redesigned as a modern Cybersecurity English–Thai Dictionary & Flashcard Learning App.
 *
 * Core Features:
 * - Minimal, compact dictionary-style study cards (English Term, Thai Meaning, Short Definition, Example, Full Form)
 * - Complete detail view modal preserving all rich explanations, exam strategy tips, confused terms, and keywords
 * - Minimal flashcard mode optimized for memorization:
 *     Front: English Term / Acronym ONLY
 *     Back: Thai Meaning, Full Form (if applicable), and Short English Definition
 * - Real-time search across English, Thai, acronym, and definitions
 * - Category and Objective filter pills
 * - Responsive, clean typography adhering to dark/light design tokens
 * - Strictly English application UI labels with Thai as learning content
 */

import { loadVocabularyData } from '../core/vocabulary-loader.js';
import { renderThemeToggle, attachThemeToggle } from './components/theme-toggle.js';

function escapeHtml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function categoryLabel(cat) {
  switch (cat) {
    case 'core_term': return 'Core';
    case 'acronym': return 'Acronym';
    case 'scenario_vocabulary': return 'Scenario';
    case 'exam_language': return 'Exam Qualifier';
    case 'confusing_term': return 'Confusing Term';
    default: return cat;
  }
}

function categoryBadgeClass(cat) {
  switch (cat) {
    case 'core_term': return 'badge-core';
    case 'acronym': return 'badge-acronym';
    case 'scenario_vocabulary': return 'badge-scenario';
    case 'exam_language': return 'badge-strategy';
    case 'confusing_term': return 'badge-confusing';
    default: return 'badge-default';
  }
}

const VOCAB_CATEGORIES = [
  { id: 'core_term', label: 'Core Terms' },
  { id: 'acronym', label: 'Acronyms' },
  { id: 'confusing_term', label: 'Confusing Terms' },
  { id: 'scenario_vocabulary', label: 'Scenario Vocab' },
  { id: 'exam_language', label: 'Exam Language' }
];

const OBJECTIVES_MAP = [
  { id: '1.1', domain: '1', label: '1.1 Security Concepts' },
  { id: '1.2', domain: '1', label: '1.2 Physical Security' },
  { id: '1.3', domain: '1', label: '1.3 Access Controls' },
  { id: '1.4', domain: '1', label: '1.4 Governance & Risk' },
  { id: '1.5', domain: '1', label: '1.5 Incident & BCP/DR' },
  { id: '2.1', domain: '2', label: '2.1 Security Governance' },
  { id: '2.2', domain: '2', label: '2.2 Business Continuity & DR' },
  { id: '2.3', domain: '2', label: '2.3 Security Awareness & Culture' },
  { id: '2.4', domain: '2', label: '2.4 Security Metrics & Reporting' },
  { id: '3.1', domain: '3', label: '3.1 Identity Lifecycle' },
  { id: '3.2', domain: '3', label: '3.2 Access Controls' },
  { id: 'exam_strategy', domain: 'all', label: 'Exam Strategy' }
];

/**
 * Derives a concise, punchy definition at the presentation layer without altering technical meaning.
 * If definition contains multiple sentences, extracts the first complete sentence.
 */
function getShortDefinition(def) {
  if (!def) return '';
  const trimmed = def.trim();
  const firstSentenceMatch = trimmed.match(/^([^.!?]+[.!?])/);
  if (firstSentenceMatch && trimmed.length > 130) {
    return firstSentenceMatch[1].trim();
  }
  return trimmed;
}

/**
 * Derives a short, easy-to-understand example for the dictionary card.
 */
function getShortExample(entry) {
  if (entry.example_en) {
    return entry.example_en.trim();
  }
  if (entry.example_th) {
    return entry.example_th.trim();
  }
  return '';
}

/**
 * Renders the Exam Vocabulary screen into the provided container.
 * @param {HTMLElement} container - Root application element
 * @param {Function} onBack - Callback when user navigates back
 */
export async function renderVocabularyScreen(container, onBack) {
  container.innerHTML = `
    <div class="vocab-screen">
      <div class="start-top-bar">
        <button type="button" class="btn btn-secondary" id="btn-vocab-back">← Back to Exam Versions</button>
        <div class="start-top-actions">
          ${renderThemeToggle('vocab-theme-toggle')}
        </div>
      </div>
      <div class="vocab-loading" id="vocab-loading">
        <div class="vocab-spinner"></div>
        <p>Loading Vocabulary Database...</p>
      </div>
    </div>
  `;

  attachThemeToggle(container, 'vocab-theme-toggle');
  container.querySelector('#btn-vocab-back')?.addEventListener('click', onBack);

  let data;
  try {
    data = await loadVocabularyData('all');
  } catch (err) {
    console.error('Failed to load vocabulary data:', err);
    container.innerHTML = `
      <div class="vocab-screen">
        <div class="start-top-bar">
          <button type="button" class="btn btn-secondary" id="btn-vocab-back-err">← Back to Exam Versions</button>
        </div>
        <div class="vocab-error-card">
          <h2>Unable to Load Vocabulary</h2>
          <p>${escapeHtml(err.message || 'Error fetching vocabulary content.')}</p>
          <button type="button" class="btn btn-primary" id="btn-vocab-retry">Retry</button>
        </div>
      </div>
    `;
    container.querySelector('#btn-vocab-back-err')?.addEventListener('click', onBack);
    container.querySelector('#btn-vocab-retry')?.addEventListener('click', () => {
      renderVocabularyScreen(container, onBack);
    });
    return;
  }

  const allEntries = data.entries || [];

  // Local state
  let currentTab = 'cards'; // 'cards' | 'flashcards'
  let searchQuery = '';
  let selectedDomain = 'all'; // 'all' | '1' | '2' | '3'
  const selectedCategories = new Set(); // Multi-select Set (empty = no restriction)
  const selectedObjectives = new Set(); // Multi-select Set (empty = no restriction)
  let isFiltersExpanded = false; // Collapsed by default
  let flashcardIndex = 0;
  let isCardFlipped = false;
  let isShuffled = false;
  let shuffledEntries = null;
  let activeDetailIndex = -1; // Index within getFilteredEntries() when modal is open
  let keydownHandler = null;
  let modalTrigger = null;
  let previousBodyOverflow = '';
  let previousRootOverflow = '';
  let answerResizeObserver = null;

  function closeDetailModal() {
    const modal = container.querySelector('#vocab-detail-modal');
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modal.classList.remove('is-open');
    [...modal.parentElement.children].forEach(el => { el.inert = false; });
    document.body.style.overflow = previousBodyOverflow;
    document.documentElement.style.overflow = previousRootOverflow;
    activeDetailIndex = -1;
    if (modalTrigger?.isConnected) modalTrigger.focus({ preventScroll: true });
  }

  function pruneIncompatibleObjectives(newDomain) {
    if (newDomain === 'all') return;
    for (const objId of selectedObjectives) {
      if (objId !== 'exam_strategy' && !objId.startsWith(`${newDomain}.`)) {
        selectedObjectives.delete(objId);
      }
    }
  }

  function getFilteredEntries() {
    return allEntries.filter(entry => {
      if (selectedDomain !== 'all' && String(entry.domain) !== String(selectedDomain)) {
        return false;
      }
      if (selectedCategories.size > 0 && !selectedCategories.has(entry.category)) {
        return false;
      }
      if (selectedObjectives.size > 0 && !selectedObjectives.has(entry.objective)) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchTerm = (entry.term || '').toLowerCase().includes(q);
        const matchAcronym = (entry.acronym || '').toLowerCase().includes(q);
        const matchFullForm = (entry.full_form || '').toLowerCase().includes(q);
        const matchThai = (entry.thai_meaning || '').toLowerCase().includes(q);
        const matchDefEn = (entry.definition_en || '').toLowerCase().includes(q);
        const matchExpTh = (entry.explanation_th || '').toLowerCase().includes(q);
        const matchKeywords = Array.isArray(entry.keywords) && entry.keywords.some(k => k.toLowerCase().includes(q));
        if (!matchTerm && !matchAcronym && !matchFullForm && !matchThai && !matchDefEn && !matchExpTh && !matchKeywords) {
          return false;
        }
      }
      return true;
    });
  }

  function getActiveDeck() {
    const filtered = getFilteredEntries();
    if (!isShuffled) return filtered;
    if (shuffledEntries && shuffledEntries.length === filtered.length) {
      return shuffledEntries;
    }
    const copy = [...filtered];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    shuffledEntries = copy;
    return shuffledEntries;
  }

  function renderMain() {
    const focused = container.contains(document.activeElement) ? document.activeElement : null;
    const focusedId = focused?.id;
    const focusedCatCheck = focused?.getAttribute('data-cat-check');
    const focusedObjCheck = focused?.getAttribute('data-obj-check');
    const filtered = getFilteredEntries();
    const activeDeck = getActiveDeck();
    const totalCount = allEntries.length;
    const filteredCount = filtered.length;

    // Entries in selected domain pool (for category & objective counts)
    const domainPool = selectedDomain === 'all'
      ? allEntries
      : allEntries.filter(e => String(e.domain) === String(selectedDomain));

    // Dynamic domain counts
    const domainCounts = {
      all: totalCount,
      1: allEntries.filter(e => String(e.domain) === '1').length,
      2: allEntries.filter(e => String(e.domain) === '2').length,
      3: allEntries.filter(e => String(e.domain) === '3').length
    };

    // Boundary check for flashcardIndex
    if (flashcardIndex >= activeDeck.length) {
      flashcardIndex = Math.max(0, activeDeck.length - 1);
      isCardFlipped = false;
    }

    // Active filter badge count on "More Filters" button
    const activeFilterCount = selectedCategories.size + selectedObjectives.size;
    const hasActiveFilters = Boolean(searchQuery || selectedDomain !== 'all' || selectedCategories.size > 0 || selectedObjectives.size > 0);

    // Objectives relevant to selected domain
    const relevantObjectives = selectedDomain === 'all'
      ? OBJECTIVES_MAP
      : OBJECTIVES_MAP.filter(obj => obj.domain === selectedDomain || obj.id === 'exam_strategy');

    // Domain hero badge label
    let domainBadgeLabel = 'All Domains (D1, D2 & D3)';
    if (selectedDomain === '1') {
      domainBadgeLabel = 'Domain 1 · Security Principles';
    } else if (selectedDomain === '2') {
      domainBadgeLabel = 'Domain 2 · Security Governance';
    } else if (selectedDomain === '3') {
      domainBadgeLabel = 'Domain 3 · IAM Concepts';
    }

    container.innerHTML = `
      <div class="vocab-screen">
        <!-- Top Navigation -->
        <div class="start-top-bar">
          <button type="button" class="btn btn-secondary" id="btn-vocab-back">← Back to Exam Versions</button>
          <div class="start-top-actions">
            ${renderThemeToggle('vocab-theme-toggle')}
          </div>
        </div>

        <!-- Dictionary & Learning Hero -->
        <div class="vocab-hero-card">
          <div class="vocab-hero-content">
            <div class="vocab-hero-badge-row">
              <span class="meta-badge meta-badge-vendor">ISC2 CC 2026</span>
              <span class="meta-badge meta-badge-outline">${escapeHtml(domainBadgeLabel)}</span>
              <span class="meta-badge meta-badge-count">${domainPool.length} Terms</span>
            </div>
            <h1 class="vocab-hero-title">ISC2 CC — Exam Vocabulary</h1>
            <p class="vocab-hero-desc">
              English–Thai cybersecurity dictionary & memorization tool. Quickly recognize, understand, and master essential certification terminology, acronyms, and exam qualifiers.
            </p>
          </div>
        </div>

        <!-- Controls & Filter Toolbar -->
        <div class="vocab-toolbar-panel">
          <!-- Top Row: Mode Tabs & Compact Domain Select / More Filters -->
          <div class="vocab-toolbar-top">
            <div class="vocab-mode-tabs" role="tablist" aria-label="Vocabulary view mode">
              <button type="button" class="vocab-mode-tab ${currentTab === 'cards' ? 'active' : ''}" id="tab-cards" role="tab" aria-selected="${currentTab === 'cards'}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                <span>Study Cards</span>
              </button>
              <button type="button" class="vocab-mode-tab ${currentTab === 'flashcards' ? 'active' : ''}" id="tab-flashcards" role="tab" aria-selected="${currentTab === 'flashcards'}">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <span>Flashcards</span>
              </button>
            </div>

            <div class="vocab-controls-row">
              <div class="vocab-select-wrap">
                <label for="vocab-domain-select" class="vocab-control-label">Domain:</label>
                <select id="vocab-domain-select" class="vocab-select" aria-label="Filter by domain">
                  <option value="all" ${selectedDomain === 'all' ? 'selected' : ''}>All Domains (${domainCounts.all})</option>
                  <option value="1" ${selectedDomain === '1' ? 'selected' : ''}>Domain 1 (${domainCounts['1']})</option>
                  <option value="2" ${selectedDomain === '2' ? 'selected' : ''}>Domain 2 (${domainCounts['2']})</option>
                  <option value="3" ${selectedDomain === '3' ? 'selected' : ''}>Domain 3 (${domainCounts['3']})</option>
                  <option value="4" disabled>Domain 4 — Coming Soon</option>
                  <option value="5" disabled>Domain 5 — Coming Soon</option>
                </select>
              </div>

              <button type="button" class="vocab-btn-more-filters ${isFiltersExpanded ? 'active' : ''} ${activeFilterCount > 0 ? 'has-active' : ''}" id="btn-toggle-filters" aria-expanded="${isFiltersExpanded}" aria-controls="vocab-filters-collapse">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
                <span>More Filters</span>
                ${activeFilterCount > 0 ? `<span class="vocab-filter-active-count">${activeFilterCount}</span>` : ''}
                <svg class="vocab-chevron-icon ${isFiltersExpanded ? 'open' : ''}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>
          </div>

          <!-- Collapsible Filters: Category & Learning Objectives -->
          <div class="vocab-filters-collapse" id="vocab-filters-collapse" ${!isFiltersExpanded ? 'hidden' : ''}>
            <!-- Category Group -->
            <div class="vocab-collapse-group">
              <div class="vocab-collapse-header">
                <span class="vocab-collapse-title">Category</span>
                ${selectedCategories.size > 0 ? `<button type="button" class="vocab-link-btn" id="btn-clear-categories">Clear</button>` : ''}
              </div>
              <div class="vocab-checkbox-grid" role="group" aria-label="Filter by category">
                ${VOCAB_CATEGORIES.map(cat => {
                  const isChecked = selectedCategories.has(cat.id);
                  const count = domainPool.filter(e => e.category === cat.id).length;
                  return `
                    <label class="vocab-checkbox-label ${isChecked ? 'checked' : ''}">
                      <input type="checkbox" class="vocab-checkbox" data-cat-check="${cat.id}" ${isChecked ? 'checked' : ''}>
                      <span class="vocab-checkbox-text">${escapeHtml(cat.label)}</span>
                      <span class="vocab-checkbox-count">(${count})</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Learning Objectives Group -->
            <div class="vocab-collapse-group">
              <div class="vocab-collapse-header">
                <span class="vocab-collapse-title">Learning Objectives</span>
                ${selectedObjectives.size > 0 ? `<button type="button" class="vocab-link-btn" id="btn-clear-objectives">Clear</button>` : ''}
              </div>
              <div class="vocab-checkbox-grid-objs" role="group" aria-label="Filter by learning objective">
                ${relevantObjectives.map(obj => {
                  const isChecked = selectedObjectives.has(obj.id);
                  const count = domainPool.filter(e => e.objective === obj.id).length;
                  return `
                    <label class="vocab-checkbox-label ${isChecked ? 'checked' : ''}">
                      <input type="checkbox" class="vocab-checkbox" data-obj-check="${obj.id}" ${isChecked ? 'checked' : ''}>
                      <span class="vocab-checkbox-text">${escapeHtml(obj.label)}</span>
                      <span class="vocab-checkbox-count">(${count})</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Search Input moved to bottom of filter section -->
          <div class="vocab-search-wrap vocab-search-fullwidth">
            <svg class="vocab-search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" class="vocab-search-input" id="vocab-search-input" placeholder="Search English term, acronym, or Thai meaning..." value="${escapeHtml(searchQuery)}" autocomplete="off" spellcheck="false" aria-label="Search vocabulary">
            ${searchQuery ? `<button type="button" class="vocab-search-clear" id="btn-clear-search" title="Clear search" aria-label="Clear search">✕</button>` : ''}
          </div>

          <!-- Results Bar: Live Result Count & Reset Filters -->
          <div class="vocab-results-bar">
            <span class="vocab-count-indicator">Showing <strong>${filteredCount}</strong> of <strong>${totalCount}</strong> vocabulary terms</span>
            ${hasActiveFilters ? `
              <button type="button" class="vocab-reset-filters-btn" id="btn-reset-filters">Reset Filters</button>
            ` : ''}
          </div>
        </div>

        <!-- Main Content View -->
        <main class="vocab-main-content">
          ${currentTab === 'cards' ? renderCardsView(filtered) : renderFlashcardsView(activeDeck, flashcardIndex, isCardFlipped, isShuffled)}
        </main>

        <!-- Vocabulary Detail Modal (Hidden by default) -->
        <div class="vocab-modal-backdrop" id="vocab-detail-modal" hidden>
          <div class="vocab-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="vocab-modal-title">
            <header class="vocab-modal-header">
              <div class="vocab-modal-header-main">
                <div class="vocab-modal-badges" id="vocab-modal-badges"></div>
                <h2 class="vocab-modal-title" id="vocab-modal-title"></h2>
              </div>
              <button type="button" class="vocab-modal-close" id="btn-vocab-modal-close" aria-label="Close detail modal">✕</button>
            </header>
            <div class="vocab-modal-body" id="vocab-modal-body" tabindex="0" role="region" aria-label="Vocabulary details"></div>
            <footer class="vocab-modal-footer">
              <div class="vocab-modal-nav">
                <button type="button" class="vocab-modal-nav-btn" id="btn-modal-prev" aria-label="Previous Term" title="Previous Term (←)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                <span class="vocab-modal-counter" id="vocab-modal-counter"></span>
                <button type="button" class="vocab-modal-nav-btn" id="btn-modal-next" aria-label="Next Term" title="Next Term (→)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    `;

    attachEventHandlers(filtered, activeDeck);
    if (focusedId) {
      const nextFocus = container.querySelector(`#${focusedId}`);
      (nextFocus && !nextFocus.disabled ? nextFocus : null)?.focus({ preventScroll: true });
    } else if (focusedCatCheck) {
      container.querySelector(`[data-cat-check="${focusedCatCheck}"]`)?.focus({ preventScroll: true });
    } else if (focusedObjCheck) {
      container.querySelector(`[data-obj-check="${focusedObjCheck}"]`)?.focus({ preventScroll: true });
    }
  }

  function attachEventHandlers(filtered, activeDeck) {
    // Theme toggle & Back button
    attachThemeToggle(container, 'vocab-theme-toggle');
    container.querySelector('#btn-vocab-back')?.addEventListener('click', () => {
      cleanupListeners();
      onBack();
    });

    // Tab buttons
    container.querySelector('#tab-cards')?.addEventListener('click', () => {
      if (currentTab !== 'cards') {
        currentTab = 'cards';
        cleanupListeners();
        renderMain();
      }
    });

    container.querySelector('#tab-flashcards')?.addEventListener('click', () => {
      if (currentTab !== 'flashcards') {
        currentTab = 'flashcards';
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      }
    });

    // Domain select
    const domainSelect = container.querySelector('#vocab-domain-select');
    domainSelect?.addEventListener('change', (e) => {
      selectedDomain = e.target.value;
      pruneIncompatibleObjectives(selectedDomain);
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    // Toggle More Filters button
    container.querySelector('#btn-toggle-filters')?.addEventListener('click', () => {
      isFiltersExpanded = !isFiltersExpanded;
      renderMain();
    });

    // Clear Category Filters link
    container.querySelector('#btn-clear-categories')?.addEventListener('click', () => {
      selectedCategories.clear();
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    // Clear Objective Filters link
    container.querySelector('#btn-clear-objectives')?.addEventListener('click', () => {
      selectedObjectives.clear();
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    // Category checkboxes
    container.querySelectorAll('[data-cat-check]').forEach(input => {
      input.addEventListener('change', () => {
        const catId = input.getAttribute('data-cat-check');
        if (input.checked) {
          selectedCategories.add(catId);
        } else {
          selectedCategories.delete(catId);
        }
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });
    });

    // Objective checkboxes
    container.querySelectorAll('[data-obj-check]').forEach(input => {
      input.addEventListener('change', () => {
        const objId = input.getAttribute('data-obj-check');
        if (input.checked) {
          selectedObjectives.add(objId);
        } else {
          selectedObjectives.delete(objId);
        }
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });
    });

    // Search input
    const searchInput = container.querySelector('#vocab-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
        const nextInput = container.querySelector('#vocab-search-input');
        if (nextInput) {
          nextInput.focus();
          nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
        }
      });
    }

    container.querySelector('#btn-clear-search')?.addEventListener('click', () => {
      searchQuery = '';
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    container.querySelector('#btn-reset-filters')?.addEventListener('click', () => {
      searchQuery = '';
      selectedDomain = 'all';
      selectedCategories.clear();
      selectedObjectives.clear();
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    // Entire Study Card click & keyboard interaction (Enter / Space)
    container.querySelectorAll('.vocab-dict-card').forEach(card => {
      const entryId = card.getAttribute('data-card-id');
      const handleOpen = () => {
        const index = filtered.findIndex(item => item.id === entryId);
        if (index !== -1) {
          openDetailModal(filtered, index);
        }
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          handleOpen();
        }
      });
    });

    // Flashcard "View Full Details →" link on back of flashcard
    container.querySelectorAll('.flashcard-btn-view-details[data-open-detail]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const entryId = btn.getAttribute('data-open-detail');
        const index = activeDeck.findIndex(item => item.id === entryId);
        if (index !== -1) {
          openDetailModal(activeDeck, index);
        }
      });
    });

    // Flashcard controls
    if (currentTab === 'flashcards' && activeDeck.length > 0) {
      const cardContainer = container.querySelector('#flashcard-card');
      const flipBtn = container.querySelector('#btn-card-flip');
      const prevBtn = container.querySelector('#btn-card-prev');
      const nextBtn = container.querySelector('#btn-card-next');
      const shuffleBtn = container.querySelector('#btn-card-shuffle');
      const resetOrderBtn = container.querySelector('#btn-card-reset-order');

      const doFlip = () => {
        isCardFlipped = !isCardFlipped;
        const cardElem = container.querySelector('#flashcard-card');
        if (cardElem) {
          cardElem.classList.toggle('is-flipped', isCardFlipped);
          cardElem.setAttribute('aria-label', `Flashcard: ${activeDeck[flashcardIndex].term}. ${isCardFlipped ? 'Back' : 'Front'} side. Press Enter or Space to flip.`);
          cardElem.querySelector('.flashcard-front').inert = isCardFlipped;
          cardElem.querySelector('.flashcard-back').inert = !isCardFlipped;
          if (cardElem.querySelector('[inert]')?.contains(document.activeElement)) cardElem.focus({ preventScroll: true });
        }
      };

      cardContainer?.addEventListener('click', (e) => {
        // Avoid flip if clicking the "View Details" button on back face
        if (e.target.closest('[data-open-detail]')) return;
        doFlip();
      });
      cardContainer?.addEventListener('keydown', e => {
        if (e.target === cardContainer && (e.key === 'Enter' || e.code === 'Space')) {
          e.preventDefault();
          doFlip();
        }
      });
      flipBtn?.addEventListener('click', doFlip);

      prevBtn?.addEventListener('click', () => {
        if (flashcardIndex > 0) {
          flashcardIndex--;
          isCardFlipped = false;
          renderMain();
        }
      });

      nextBtn?.addEventListener('click', () => {
        if (flashcardIndex < activeDeck.length - 1) {
          flashcardIndex++;
          isCardFlipped = false;
          renderMain();
        }
      });

      shuffleBtn?.addEventListener('click', () => {
        isShuffled = !isShuffled;
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });

      resetOrderBtn?.addEventListener('click', () => {
        isShuffled = false;
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });

      setupKeyboardNav(activeDeck.length, doFlip);
      const answer = container.querySelector('.flashcard-back-body');
      const scrollHint = container.querySelector('.flashcard-scroll-hint');
      answerResizeObserver = new ResizeObserver(() => {
        scrollHint.hidden = answer.scrollHeight <= answer.clientHeight + 1;
      });
      answerResizeObserver.observe(answer);
    } else {
      setupModalKeyboardNav();
    }
  }

  /**
   * Detail Modal Open and Management.
   */
  function openDetailModal(list, index) {
    activeDetailIndex = index;
    const modal = container.querySelector('#vocab-detail-modal');
    if (!modal) return;

    modalTrigger = document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    previousRootOverflow = document.documentElement.style.overflow;
    modal.hidden = false;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    renderModalContent(list, index);
    [...modal.parentElement.children].forEach(el => { if (el !== modal) el.inert = true; });

    // Close handlers
    const closeBtn = modal.querySelector('#btn-vocab-modal-close');
    const closeModal = closeDetailModal;

    closeBtn.onclick = closeModal;
    closeBtn.focus({ preventScroll: true });
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };

    // Prev / Next inside modal
    const prevBtn = modal.querySelector('#btn-modal-prev');
    const nextBtn = modal.querySelector('#btn-modal-next');

    prevBtn.onclick = () => {
      if (activeDetailIndex > 0) {
        activeDetailIndex--;
        renderModalContent(list, activeDetailIndex);
      }
    };

    nextBtn.onclick = () => {
      if (activeDetailIndex < list.length - 1) {
        activeDetailIndex++;
        renderModalContent(list, activeDetailIndex);
      }
    };
  }

  function renderModalContent(list, index) {
    const entry = list[index];
    if (!entry) return;

    const modal = container.querySelector('#vocab-detail-modal');
    if (!modal) return;

    const badgesContainer = modal.querySelector('#vocab-modal-badges');
    const titleEl = modal.querySelector('#vocab-modal-title');
    const bodyEl = modal.querySelector('#vocab-modal-body');
    const counterEl = modal.querySelector('#vocab-modal-counter');
    const prevBtn = modal.querySelector('#btn-modal-prev');
    const nextBtn = modal.querySelector('#btn-modal-next');

    // Hide category and domain/objective badges from modal UI per requirement
    badgesContainer.innerHTML = '';

    // Main heading with optional acronym tag
    titleEl.innerHTML = `
      ${escapeHtml(entry.term)}
      ${entry.acronym && entry.acronym !== entry.term ? `
        <span class="vocab-acronym-tag">${escapeHtml(entry.acronym)}</span>
      ` : ''}
    `;

    bodyEl.innerHTML = `
      <!-- Optional Full Form Subtitle -->
      ${entry.full_form ? `
        <div class="modal-fullform-row">
          <span class="modal-label-dim">Full Form:</span>
          <span class="modal-fullform-val">${escapeHtml(entry.full_form)}</span>
        </div>
      ` : ''}

      <!-- 1. Thai Meaning (Prominent Translation) -->
      <div class="modal-thai-banner">
        <span class="modal-section-eyebrow">Thai Meaning</span>
        <h3 class="modal-thai-title">${escapeHtml(entry.thai_meaning)}</h3>
      </div>

      <!-- 2. English Definition -->
      <div class="modal-detail-section">
        <h4 class="modal-section-heading">English Definition</h4>
        <p class="modal-def-text">${escapeHtml(entry.definition_en)}</p>
      </div>

      <!-- 3. Detailed Thai Explanation -->
      <div class="modal-detail-section">
        <h4 class="modal-section-heading">Detailed Thai Explanation</h4>
        <p class="modal-exp-th-text">${escapeHtml(entry.explanation_th)}</p>
      </div>

      <!-- 4. Example Scenario in English & Thai -->
      ${(entry.example_en || entry.example_th) ? `
        <div class="modal-detail-section modal-example-card">
          <h4 class="modal-section-heading">Example Scenario</h4>
          ${entry.example_en ? `
            <div class="modal-example-row">
              <span class="vocab-lang-pill">EN</span>
              <p class="modal-example-text">${escapeHtml(entry.example_en)}</p>
            </div>
          ` : ''}
          ${entry.example_th ? `
            <div class="modal-example-row">
              <span class="vocab-lang-pill">TH</span>
              <p class="modal-example-text modal-thai-font">${escapeHtml(entry.example_th)}</p>
            </div>
          ` : ''}
        </div>
      ` : ''}

      <!-- 5. Exam Relevance & Strategy Guidance -->
      ${entry.exam_relevance ? `
        <div class="modal-detail-section modal-relevance-box">
          <h4 class="modal-section-heading">Exam Guidance & Relevance</h4>
          <div class="modal-relevance-content">
            <p class="modal-relevance-text">${escapeHtml(entry.exam_relevance)}</p>
            ${(entry.exam_relevance_th && entry.exam_relevance_th.trim()) ? `
              <p class="modal-relevance-text modal-thai-font">${escapeHtml(entry.exam_relevance_th.trim())}</p>
            ` : ''}
          </div>
        </div>
      ` : ''}
    `;

    counterEl.textContent = `${index + 1} / ${list.length}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === list.length - 1;

    // Reset scroll to top
    bodyEl.scrollTop = 0;
  }

  function setupKeyboardNav(deckLength, doFlip) {
    cleanupListeners();
    keydownHandler = (e) => {
      if (e.defaultPrevented) return;
      const modal = container.querySelector('#vocab-detail-modal');
      const isModalOpen = modal && !modal.hidden;

      if (isModalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          closeDetailModal();
        } else if (e.key === 'Tab') {
          const stops = [...modal.querySelectorAll('button:not(:disabled), [tabindex="0"]')];
          const first = stops[0];
          const last = stops[stops.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          modal.querySelector('#btn-modal-prev')?.click();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          modal.querySelector('#btn-modal-next')?.click();
        }
        return;
      }

      if (currentTab !== 'flashcards' || deckLength === 0) return;
      // Native controls keep Space/Enter activation; scroll regions keep arrow scrolling.
      if (e.target?.closest('input, textarea, select, button, [role="region"], [contenteditable="true"]')) return;

      if (e.code === 'Space') {
        e.preventDefault();
        doFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (flashcardIndex < deckLength - 1) {
          flashcardIndex++;
          isCardFlipped = false;
          renderMain();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (flashcardIndex > 0) {
          flashcardIndex--;
          isCardFlipped = false;
          renderMain();
        }
      }
    };
    window.addEventListener('keydown', keydownHandler);
  }

  function setupModalKeyboardNav() {
    setupKeyboardNav(0, () => {});
  }

  function cleanupListeners() {
    answerResizeObserver?.disconnect();
    answerResizeObserver = null;
    if (keydownHandler) {
      window.removeEventListener('keydown', keydownHandler);
      keydownHandler = null;
    }
  }

  // Initial render
  renderMain();
}

/**
 * Renders the Study Cards Grid view with compact dictionary-style cards.
 */
function renderCardsView(entries) {
  if (entries.length === 0) {
    return `
      <div class="vocab-empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        <h3>No matching vocabulary terms found</h3>
        <p>Try clearing your search query or selecting a different category or objective filter.</p>
      </div>
    `;
  }

  return `
    <div class="vocab-grid">
      ${entries.map(entry => {
        const shortDef = getShortDefinition(entry.definition_en);
        const exampleTh = (entry.example_th || '').trim();

        return `
          <article class="vocab-dict-card" id="${escapeHtml(entry.id)}" data-card-id="${escapeHtml(entry.id)}" role="button" tabindex="0" aria-label="${escapeHtml(entry.term)}: View details">
            <div class="dict-card-body">
              <header class="dict-card-header">
                <div class="dict-card-title-group">
                  <h3 class="dict-card-term">${escapeHtml(entry.term)}</h3>
                  ${entry.acronym && entry.acronym !== entry.term ? `
                    <span class="vocab-acronym-tag">${escapeHtml(entry.acronym)}</span>
                  ` : ''}
                </div>
                <span class="vocab-badge badge-obj">D${escapeHtml(String(entry.domain))} · ${escapeHtml(entry.objective || '')}</span>
              </header>

              ${entry.full_form ? `
                <div class="dict-fullform-row">
                  <span class="dict-fullform-val">${escapeHtml(entry.full_form)}</span>
                </div>
              ` : ''}

              <!-- Thai Meaning (Clear Headline) -->
              <div class="dict-thai-box">
                <span class="dict-thai-text">${escapeHtml(entry.thai_meaning)}</span>
              </div>

              <!-- Short English Definition -->
              <div class="dict-def-box">
                <p class="dict-def-text">${escapeHtml(shortDef)}</p>
              </div>
            </div>

            <!-- Thai Example -->
            ${exampleTh ? `
              <div class="dict-example-box">
                <span class="dict-example-lead">Example</span>
                <p class="dict-example-text">${escapeHtml(exampleTh)}</p>
              </div>
            ` : ''}
          </article>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Renders the Interactive Flashcard Mode view optimized for rapid memorization.
 * Front: English Term or Acronym ONLY.
 * Back: Thai Meaning, Full Form (if applicable), and Short English Definition.
 */
function renderFlashcardsView(activeDeck, currentIndex, isFlipped, isShuffled) {
  if (activeDeck.length === 0) {
    return `
      <div class="vocab-empty-state">
        <h3>No vocabulary terms available</h3>
        <p>Please adjust your filters or clear your search term to load cards into the flashcard deck.</p>
      </div>
    `;
  }

  const currentItem = activeDeck[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / activeDeck.length) * 100);
  const catClass = categoryBadgeClass(currentItem.category);
  const catText = categoryLabel(currentItem.category);
  const shortDef = getShortDefinition(currentItem.definition_en);

  return `
    <div class="flashcard-deck-layout">
      <!-- Deck Toolbar -->
      <div class="flashcard-deck-header">
        <div class="flashcard-progress-group">
          <span class="flashcard-counter">Card <strong>${currentIndex + 1}</strong> of <strong>${activeDeck.length}</strong></span>
          <div class="flashcard-progress-bar" role="progressbar" aria-label="Flashcard progress" aria-valuenow="${currentIndex + 1}" aria-valuemin="1" aria-valuemax="${activeDeck.length}">
            <div class="flashcard-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
        </div>

        <div class="flashcard-actions">
          <button type="button" class="btn btn-secondary flashcard-btn-action ${isShuffled ? 'active' : ''}" id="btn-card-shuffle" title="Shuffle Deck">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
            <span>${isShuffled ? 'Shuffled' : 'Shuffle'}</span>
          </button>
          ${isShuffled ? `
            <button type="button" class="btn btn-secondary flashcard-btn-action" id="btn-card-reset-order">Reset Order</button>
          ` : ''}
        </div>
      </div>

      <!-- 3D Flip Card Container -->
      <div class="flashcard-viewport">
        <div class="flashcard-card ${isFlipped ? 'is-flipped' : ''}" id="flashcard-card" role="group" tabindex="0" aria-keyshortcuts="Enter Space" aria-label="Flashcard: ${escapeHtml(currentItem.term)}. ${isFlipped ? 'Back' : 'Front'} side. Press Enter or Space to flip.">
          
          <!-- Front Face: English Term / Acronym ONLY -->
          <div class="flashcard-face flashcard-front" ${isFlipped ? 'inert' : ''}>
            <div class="flashcard-face-top">
              <span class="vocab-badge ${catClass}">${escapeHtml(catText)}</span>
              <span class="vocab-badge badge-obj">D${escapeHtml(String(currentItem.domain))} · ${escapeHtml(currentItem.objective || '')}</span>
            </div>

            <div class="flashcard-face-center">
              <h2 class="flashcard-front-term">${escapeHtml(currentItem.term)}</h2>
              ${currentItem.acronym && currentItem.acronym !== currentItem.term ? `
                <div class="flashcard-front-acronym">[ ${escapeHtml(currentItem.acronym)} ]</div>
              ` : ''}
            </div>

            <div class="flashcard-face-bottom">
              <span class="flashcard-hint-text">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                Click to flip
              </span>
            </div>
          </div>

          <!-- Back Face: Thai Meaning, Full Form (if applicable), and Short English Definition + Thai Translation -->
          <div class="flashcard-face flashcard-back" ${!isFlipped ? 'inert' : ''}>
            <div class="flashcard-face-top">
              <span class="flashcard-back-term-small">${escapeHtml(currentItem.term)}</span>
              <span class="vocab-badge badge-obj">D${escapeHtml(String(currentItem.domain))} · ${escapeHtml(currentItem.objective || '')}</span>
            </div>

            <div class="flashcard-face-center flashcard-back-body" tabindex="0" role="region" aria-label="Flashcard answer; scroll for more">
              <!-- Thai Meaning -->
              <div class="flashcard-back-thai-wrap">
                <span class="flashcard-section-label">Thai Meaning</span>
                <h3 class="flashcard-back-thai-val">${escapeHtml(currentItem.thai_meaning)}</h3>
              </div>

              <!-- Full Form if acronym -->
              ${currentItem.full_form ? `
                <div class="flashcard-back-fullform-wrap">
                  <span class="flashcard-section-label">Full Form</span>
                  <div class="flashcard-back-fullform-val">${escapeHtml(currentItem.full_form)}</div>
                </div>
              ` : ''}

              <!-- Short English Definition -->
              <div class="flashcard-back-def-wrap">
                <span class="flashcard-section-label">Short Definition</span>
                <p class="flashcard-back-def-val">${escapeHtml(shortDef)}</p>
              </div>

              <!-- Thai Translation -->
              ${currentItem.explanation_th ? `
                <div class="flashcard-back-trans-wrap">
                  <span class="flashcard-section-label">Thai Translation</span>
                  <p class="flashcard-back-def-th">${escapeHtml(currentItem.explanation_th)}</p>
                </div>
              ` : ''}
            </div>

            <div class="flashcard-face-bottom flashcard-back-bottom">
              <span class="flashcard-scroll-hint" hidden>Scroll for more ↕</span>
              <button type="button" class="flashcard-btn-view-details" data-open-detail="${escapeHtml(currentItem.id)}" title="Open complete details modal">
                <span>View Full Details →</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <!-- Navigation Bar Below Card -->
      <div class="flashcard-nav-controls">
        <button type="button" class="btn btn-secondary flashcard-nav-btn" id="btn-card-prev" ${currentIndex === 0 ? 'disabled' : ''}>
          ← Previous
        </button>
        <button type="button" class="btn btn-primary flashcard-flip-btn" id="btn-card-flip">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
          <span>Flip Card</span>
        </button>
        <button type="button" class="btn btn-secondary flashcard-nav-btn" id="btn-card-next" ${currentIndex === activeDeck.length - 1 ? 'disabled' : ''}>
          Next →
        </button>
      </div>
    </div>
  `;
}
