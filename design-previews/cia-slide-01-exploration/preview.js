// No app modules, routing, storage, fullscreen or progress APIs are used here.
const view = new URLSearchParams(location.search).get('view');
if (['a', 'b', 'c'].includes(view)) {
  document.body.classList.add('focus');
  document.getElementById(`concept-${view}`).classList.add('selected');
  document.title = `Concept ${view.toUpperCase()} · Slide 1 exploration`;
}
const make = (tag, text) => { const node = document.createElement(tag); if (text) node.textContent = text; return node; };
try {
  const response = await fetch('./source-context.json');
  if (!response.ok) throw Error(`Source snapshot HTTP ${response.status}`);
  const context = await response.json(), host = document.getElementById('source-content');
  for (const language of ['th', 'en']) {
    const details = make('details'), summary = make('summary', language === 'th' ? 'Full explanation — Thai' : 'Full explanation — English');
    if (language === 'th') details.open = true;
    details.append(summary);
    const content = make('div'); content.lang = language;
    content.append(make('h3', context.slide.title[language]));
    for (const block of context.slide.blocks) {
      if (block.kind === 'text') content.append(make('p', block.text[language]));
      if (block.kind === 'list') { const list = make('ul'); for (const item of block.items) list.append(make('li', item[language])); content.append(list); }
    }
    details.append(content); host.append(details);
  }
  const sources = make('details'); sources.append(make('summary', 'Learning outcome & source record'));
  sources.append(make('p', 'Slide 1 outcome: explain how Confidentiality, Integrity and Availability support protection of critical information so an organization can achieve its mission. Concise canvas wording is experimental editorial copy, not newly approved academic text.'));
  sources.append(make('p', `Lesson ${context.lessonId} · revision ${context.revision} · ${context.slide.id}`));
  const code = make('code', `${context.sourcePath} · SHA-256 ${context.sha256}`); sources.append(code);
  const list = make('ul'); for (const reference of context.references) list.append(make('li', `${reference.title} — ${reference.locator}`)); sources.append(list); host.append(sources);
  document.getElementById('source-status').textContent = 'Complete Slide 1 source snapshot loaded. Canvas summaries do not replace the source explanation.';
} catch (error) {
  document.getElementById('source-status').textContent = 'Source snapshot could not load. Serve this folder over local HTTP; see README.md. The source-context.json file contains the complete explanation.';
}
