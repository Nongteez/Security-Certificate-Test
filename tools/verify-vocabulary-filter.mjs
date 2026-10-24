import assert from 'node:assert/strict';
import fs from 'node:fs';

// Load vocabulary data
const d1 = JSON.parse(fs.readFileSync('content/isc2-cc-2026/vocabulary/domain-1.json', 'utf8'));
const d2 = JSON.parse(fs.readFileSync('content/isc2-cc-2026/vocabulary/domain-2.json', 'utf8'));
const d3 = JSON.parse(fs.readFileSync('content/isc2-cc-2026/vocabulary/domain-3.json', 'utf8'));
const allEntries = [...d1.entries, ...d2.entries, ...d3.entries];

console.log('--- Test 1: Entry Count and Integrity ---');
assert.equal(allEntries.length, 313, 'Total vocabulary entries must be exactly 313');
assert.equal(d1.entries.length, 110, 'Domain 1 count must be 110');
assert.equal(d2.entries.length, 101, 'Domain 2 count must be 101');
assert.equal(d3.entries.length, 102, 'Domain 3 count must be 102');
console.log('PASS: All 313 entries intact (110 + 101 + 102).');

// Verify categories and objectives in screen-vocabulary.js
const screenCode = fs.readFileSync('js/ui/screen-vocabulary.js', 'utf8');

console.log('--- Test 2: Source Code Elements & Markup ---');
assert.ok(screenCode.includes('id="vocab-domain-select"'), 'vocab-domain-select must exist');
assert.ok(screenCode.includes('id="btn-toggle-filters"'), 'btn-toggle-filters button must exist');
assert.ok(screenCode.includes('id="vocab-filters-collapse"'), 'vocab-filters-collapse panel must exist');
assert.ok(screenCode.includes('data-cat-check='), 'Category checkboxes must exist');
assert.ok(screenCode.includes('data-obj-check='), 'Objective checkboxes must exist');
assert.ok(screenCode.includes('btn-clear-categories'), 'Clear categories link must exist');
assert.ok(screenCode.includes('btn-clear-objectives'), 'Clear objectives link must exist');
assert.ok(screenCode.includes('btn-reset-filters'), 'Reset filters button must exist');
assert.ok(screenCode.includes('Domain 4 — Coming Soon'), 'Domain 4 Coming Soon disabled option must exist');
assert.ok(screenCode.includes('Domain 5 — Coming Soon'), 'Domain 5 Coming Soon disabled option must exist');
assert.ok(screenCode.includes('selectedCategories = new Set()'), 'selectedCategories must be a Set');
assert.ok(screenCode.includes('selectedObjectives = new Set()'), 'selectedObjectives must be a Set');
console.log('PASS: All required UI controls and state variables present in screen-vocabulary.js.');

console.log('--- Test 3: CSS Stylesheet Integration ---');
const cssContent = fs.readFileSync('css/vocabulary.css', 'utf8');
assert.ok(cssContent.includes('.vocab-controls-row'), '.vocab-controls-row exists in CSS');
assert.ok(cssContent.includes('.vocab-select'), '.vocab-select exists in CSS');
assert.ok(cssContent.includes('.vocab-btn-more-filters'), '.vocab-btn-more-filters exists in CSS');
assert.ok(cssContent.includes('.vocab-filters-collapse'), '.vocab-filters-collapse exists in CSS');
assert.ok(cssContent.includes('.vocab-checkbox-grid'), '.vocab-checkbox-grid exists in CSS');
assert.ok(cssContent.includes('.vocab-search-fullwidth'), '.vocab-search-fullwidth exists in CSS');
assert.ok(cssContent.includes('gap: 35px;'), 'User uncommitted flashcard back body gap: 35px preserved');
console.log('PASS: CSS rules verified and user uncommitted change preserved.');

console.log('--- Test 4: Multi-Select Filtering Logic Simulation ---');

function filterEntries({ selectedDomain = 'all', selectedCategories = new Set(), selectedObjectives = new Set(), searchQuery = '' }) {
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

// Case 4.1: No filters
const resAll = filterEntries({});
assert.equal(resAll.length, 313, 'No filter returns 313 entries');

// Case 4.2: Domain 1 only
const resD1 = filterEntries({ selectedDomain: '1' });
assert.equal(resD1.length, 110, 'Domain 1 filter returns 110 entries');

// Case 4.3: Domain 2 only
const resD2 = filterEntries({ selectedDomain: '2' });
assert.equal(resD2.length, 101, 'Domain 2 filter returns 101 entries');

// Case 4.4: Domain 3 only
const resD3 = filterEntries({ selectedDomain: '3' });
assert.equal(resD3.length, 102, 'Domain 3 filter returns 102 entries');

// Case 4.5: Multi-select category OR logic (acronym OR confusing_term)
const resCatOr = filterEntries({ selectedCategories: new Set(['acronym', 'confusing_term']) });
const expectedCatOr = allEntries.filter(e => e.category === 'acronym' || e.category === 'confusing_term').length;
assert.equal(resCatOr.length, expectedCatOr, 'Multi-select category uses OR');
assert.ok(resCatOr.some(e => e.category === 'acronym'));
assert.ok(resCatOr.some(e => e.category === 'confusing_term'));
assert.ok(!resCatOr.some(e => e.category === 'core_term'));

// Case 4.6: Multi-select objectives OR logic across Domain 1 & Domain 2
const resObjOr = filterEntries({ selectedObjectives: new Set(['1.1', '2.1']) });
const expectedObjOr = allEntries.filter(e => e.objective === '1.1' || e.objective === '2.1').length;
assert.equal(resObjOr.length, expectedObjOr, 'Multi-select objectives uses OR');

// Case 4.7: AND between Domain and Category
const resD2Acronym = filterEntries({ selectedDomain: '2', selectedCategories: new Set(['acronym']) });
assert.equal(resD2Acronym.every(e => e.domain === 2 && e.category === 'acronym'), true);
const actualD2AcronymCount = allEntries.filter(e => e.domain === 2 && e.category === 'acronym').length;
assert.equal(resD2Acronym.length, actualD2AcronymCount);

// Case 4.8: AND between Domain, Category, Objective, and Search
const resSearch = filterEntries({
  selectedDomain: '2',
  selectedCategories: new Set(['core_term']),
  selectedObjectives: new Set(['2.1']),
  searchQuery: 'governance'
});
assert.ok(resSearch.length > 0);
assert.ok(resSearch.every(e => e.domain === 2 && e.category === 'core_term' && e.objective === '2.1'));

console.log('PASS: All multi-select OR and cross-filter AND combinations pass.');

console.log('--- Test 5: Incompatible Objective Pruning Logic ---');
function pruneIncompatibleObjectives(selectedObjectives, newDomain) {
  if (newDomain === 'all') return;
  for (const objId of selectedObjectives) {
    if (objId !== 'exam_strategy' && !objId.startsWith(`${newDomain}.`)) {
      selectedObjectives.delete(objId);
    }
  }
}

const testObjs = new Set(['1.1', '1.2', '2.1', '3.1', 'exam_strategy']);
pruneIncompatibleObjectives(testObjs, '2');
assert.deepEqual([...testObjs].sort(), ['2.1', 'exam_strategy'].sort(), 'Pruning for Domain 2 retains only 2.x and exam_strategy');

const testObjs2 = new Set(['1.1', '2.1', '3.1', 'exam_strategy']);
pruneIncompatibleObjectives(testObjs2, '3');
assert.deepEqual([...testObjs2].sort(), ['3.1', 'exam_strategy'].sort(), 'Pruning for Domain 3 retains only 3.x and exam_strategy');

const testObjs3 = new Set(['1.1', '2.1', '3.1', 'exam_strategy']);
pruneIncompatibleObjectives(testObjs3, 'all');
assert.deepEqual([...testObjs3].sort(), ['1.1', '2.1', '3.1', 'exam_strategy'].sort(), 'Pruning for all domains retains everything');

console.log('PASS: Pruning logic verified for all domain transitions.');

console.log('\n=============================================');
console.log('ALL VOCABULARY FILTER REDESIGN TESTS PASSED!');
console.log('=============================================');
