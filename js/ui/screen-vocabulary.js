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
    default: return 'badge-default';
  }
}

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
    data = await loadVocabularyData(1);
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
  let selectedCategory = 'all';
  let selectedObjective = 'all';
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

  function getFilteredEntries() {
    return allEntries.filter(entry => {
      if (selectedCategory !== 'all' && entry.category !== selectedCategory) {
        return false;
      }
      if (selectedObjective !== 'all' && entry.objective !== selectedObjective) {
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
    const focusedCategory = focused?.getAttribute('data-cat');
    const focusedObjective = focused?.getAttribute('data-obj');
    const filterScroll = [...container.querySelectorAll('.vocab-filter-pills')].map(el => el.scrollLeft);
    const filtered = getFilteredEntries();
    const activeDeck = getActiveDeck();
    const totalCount = allEntries.length;
    const filteredCount = filtered.length;

    // Boundary check for flashcardIndex
    if (flashcardIndex >= activeDeck.length) {
      flashcardIndex = Math.max(0, activeDeck.length - 1);
      isCardFlipped = false;
    }

    // Dynamic category counts
    const counts = {
      all: totalCount,
      core_term: allEntries.filter(e => e.category === 'core_term').length,
      acronym: allEntries.filter(e => e.category === 'acronym').length,
      scenario_vocabulary: allEntries.filter(e => e.category === 'scenario_vocabulary').length,
      exam_language: allEntries.filter(e => e.category === 'exam_language').length
    };

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
              <span class="meta-badge meta-badge-outline">Domain 1 · Security Principles</span>
              <span class="meta-badge meta-badge-count">${totalCount} Terms</span>
            </div>
            <h1 class="vocab-hero-title">ISC2 CC — Exam Vocabulary</h1>
            <p class="vocab-hero-desc">
              English–Thai cybersecurity dictionary & memorization tool. Quickly recognize, understand, and master essential certification terminology, acronyms, and exam qualifiers.
            </p>
          </div>
        </div>

        <!-- Controls & Filter Toolbar -->
        <div class="vocab-toolbar-panel">
          <!-- Mode Tabs & Search Row -->
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

            <div class="vocab-search-wrap">
              <svg class="vocab-search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" class="vocab-search-input" id="vocab-search-input" placeholder="Search English term, acronym, or Thai meaning..." value="${escapeHtml(searchQuery)}" autocomplete="off" spellcheck="false" aria-label="Search vocabulary">
              ${searchQuery ? `<button type="button" class="vocab-search-clear" id="btn-clear-search" title="Clear search" aria-label="Clear search">✕</button>` : ''}
            </div>
          </div>

          <!-- Category Filters -->
          <div class="vocab-filter-group">
            <span class="vocab-filter-label">Category:</span>
            <div class="vocab-filter-pills" role="group" aria-label="Filter by category">
              <button type="button" class="vocab-pill ${selectedCategory === 'all' ? 'active' : ''}" data-cat="all">All (${counts.all})</button>
              <button type="button" class="vocab-pill ${selectedCategory === 'core_term' ? 'active' : ''}" data-cat="core_term">Core Terms (${counts.core_term})</button>
              <button type="button" class="vocab-pill ${selectedCategory === 'acronym' ? 'active' : ''}" data-cat="acronym">Acronyms (${counts.acronym})</button>
              <button type="button" class="vocab-pill ${selectedCategory === 'scenario_vocabulary' ? 'active' : ''}" data-cat="scenario_vocabulary">Scenario Vocab (${counts.scenario_vocabulary})</button>
              <button type="button" class="vocab-pill ${selectedCategory === 'exam_language' ? 'active' : ''}" data-cat="exam_language">Exam Language (${counts.exam_language})</button>
            </div>
          </div>

          <!-- Objective Filters -->
          <div class="vocab-filter-group">
            <span class="vocab-filter-label">Objective:</span>
            <div class="vocab-filter-pills" role="group" aria-label="Filter by objective">
              <button type="button" class="vocab-pill ${selectedObjective === 'all' ? 'active' : ''}" data-obj="all">All Objectives</button>
              <button type="button" class="vocab-pill ${selectedObjective === '1.1' ? 'active' : ''}" data-obj="1.1">1.1 Security Concepts</button>
              <button type="button" class="vocab-pill ${selectedObjective === '1.2' ? 'active' : ''}" data-obj="1.2">1.2 Physical Security</button>
              <button type="button" class="vocab-pill ${selectedObjective === '1.3' ? 'active' : ''}" data-obj="1.3">1.3 Access Controls</button>
              <button type="button" class="vocab-pill ${selectedObjective === '1.4' ? 'active' : ''}" data-obj="1.4">1.4 Governance & Risk</button>
              <button type="button" class="vocab-pill ${selectedObjective === '1.5' ? 'active' : ''}" data-obj="1.5">1.5 Incident & BCP/DR</button>
              <button type="button" class="vocab-pill ${selectedObjective === 'exam_strategy' ? 'active' : ''}" data-obj="exam_strategy">Exam Strategy</button>
            </div>
          </div>

          <!-- Meta Result Count -->
          <div class="vocab-results-bar">
            <span class="vocab-count-indicator">Showing <strong>${filteredCount}</strong> of <strong>${totalCount}</strong> vocabulary terms</span>
            ${(searchQuery || selectedCategory !== 'all' || selectedObjective !== 'all') ? `
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
                <button type="button" class="btn btn-secondary vocab-modal-nav-btn" id="btn-modal-prev">← Previous Term</button>
                <span class="vocab-modal-counter" id="vocab-modal-counter"></span>
                <button type="button" class="btn btn-secondary vocab-modal-nav-btn" id="btn-modal-next">Next Term →</button>
              </div>
              <button type="button" class="btn btn-secondary" id="btn-modal-done">Close</button>
            </footer>
          </div>
        </div>
      </div>
    `;

    attachEventHandlers(filtered, activeDeck);
    container.querySelectorAll('.vocab-filter-pills').forEach((el, i) => { el.scrollLeft = filterScroll[i] || 0; });
    if (focusedId || focusedCategory != null || focusedObjective != null) {
      const nextFocus = focusedId ? container.querySelector(`#${focusedId}`)
        : [...container.querySelectorAll('.vocab-pill')].find(el => focusedCategory != null
          ? el.getAttribute('data-cat') === focusedCategory : el.getAttribute('data-obj') === focusedObjective);
      const fallback = container.querySelector('#flashcard-card') || container.querySelector('#btn-card-shuffle');
      (nextFocus && !nextFocus.disabled ? nextFocus : fallback)?.focus({ preventScroll: true });
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
      selectedCategory = 'all';
      selectedObjective = 'all';
      shuffledEntries = null;
      flashcardIndex = 0;
      isCardFlipped = false;
      renderMain();
    });

    // Category pills
    container.querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedCategory = btn.getAttribute('data-cat');
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });
    });

    // Objective pills
    container.querySelectorAll('[data-obj]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedObjective = btn.getAttribute('data-obj');
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
      });
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
    const doneBtn = modal.querySelector('#btn-modal-done');
    const closeModal = closeDetailModal;

    closeBtn.onclick = closeModal;
    doneBtn.onclick = closeModal;
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

    const catClass = categoryBadgeClass(entry.category);
    const catText = categoryLabel(entry.category);

    badgesContainer.innerHTML = `
      <span class="vocab-badge ${catClass}">${escapeHtml(catText)}</span>
      <span class="vocab-badge badge-obj">Obj ${escapeHtml(entry.objective || '1.1')}</span>
      ${entry.acronym ? `<span class="vocab-acronym-tag">${escapeHtml(entry.acronym)}</span>` : ''}
    `;

    titleEl.textContent = entry.term;

    bodyEl.innerHTML = `
      ${entry.full_form ? `
        <div class="modal-fullform-row">
          <span class="modal-label-dim">Full Form:</span>
          <span class="modal-fullform-val">${escapeHtml(entry.full_form)}</span>
        </div>
      ` : ''}

      <!-- Thai Meaning Banner -->
      <div class="modal-thai-banner">
        <span class="modal-section-eyebrow">Thai Meaning</span>
        <h3 class="modal-thai-title">${escapeHtml(entry.thai_meaning)}</h3>
      </div>

      <!-- English Definition -->
      <div class="modal-detail-section">
        <h4 class="modal-section-heading">English Definition</h4>
        <p class="modal-def-text">${escapeHtml(entry.definition_en)}</p>
      </div>

      <!-- Thai Explanation -->
      <div class="modal-detail-section">
        <h4 class="modal-section-heading">Detailed Thai Explanation</h4>
        <p class="modal-exp-th-text">${escapeHtml(entry.explanation_th)}</p>
      </div>

      <!-- Examples -->
      ${(entry.example_en || entry.example_th) ? `
        <div class="modal-example-card">
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

      <!-- Exam Relevance & Strategy Tips -->
      ${entry.exam_relevance ? `
        <div class="modal-relevance-box">
          <div class="modal-relevance-header">
            <span class="modal-relevance-bulb" aria-hidden="true">💡</span>
            <span class="modal-relevance-title">Exam Relevance & Strategy</span>
          </div>
          <p class="modal-relevance-text">${escapeHtml(entry.exam_relevance)}</p>
        </div>
      ` : ''}

      <!-- Commonly Confused With -->
      ${(entry.confused_with && entry.confused_with.length > 0) ? `
        <div class="modal-confused-box">
          <span class="modal-confused-title">Commonly Confused With:</span>
          <div class="modal-confused-tags">
            ${entry.confused_with.map(item => `
              <button type="button" class="modal-confused-tag-btn" data-modal-search="${escapeHtml(item)}" title="Search for '${escapeHtml(item)}'">
                <span>${escapeHtml(item)}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Keywords / Tags -->
      ${(entry.keywords && entry.keywords.length > 0) ? `
        <div class="modal-keywords-box">
          <span class="modal-kw-label">Keywords:</span>
          <div class="modal-keywords-list">
            ${entry.keywords.map(kw => `<span class="vocab-kw-item">${escapeHtml(kw)}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Metadata Reference -->
      <div class="modal-meta-line">
        <span>ID: <code>${escapeHtml(entry.id)}</code></span>
        <span>·</span>
        <span>Domain ${escapeHtml(String(entry.domain))}</span>
        <span>·</span>
        <span>Objective ${escapeHtml(String(entry.objective))}</span>
      </div>
    `;

    // Click on confused term searches for that term
    bodyEl.querySelectorAll('[data-modal-search]').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-modal-search');
        closeDetailModal();
        searchQuery = query;
        shuffledEntries = null;
        flashcardIndex = 0;
        isCardFlipped = false;
        renderMain();
        container.querySelector('#vocab-search-input')?.focus();
      });
    });

    counterEl.textContent = `Term ${index + 1} of ${list.length}`;
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
            <header class="dict-card-header">
              <div class="dict-card-title-group">
                <h3 class="dict-card-term">${escapeHtml(entry.term)}</h3>
                ${entry.acronym && entry.acronym !== entry.term ? `
                  <span class="vocab-acronym-tag">${escapeHtml(entry.acronym)}</span>
                ` : ''}
              </div>
            </header>

            ${entry.full_form ? `
              <div class="dict-fullform-row">
                <span class="dict-fullform-label">Full Form:</span>
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
