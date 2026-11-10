import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';

const root = path.resolve('.'), out = path.join(root, 'artifacts/qa/study-answers-ui-refinement');
const port = 5276, debug = 9376;
fs.mkdirSync(out, { recursive: true });
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const file = path.resolve(root, '.' + (url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': (mime[path.extname(file)] || 'application/octet-stream') + '; charset=utf-8' });
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(port, '127.0.0.1', resolve));
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'study-answers-chrome-'));
const launchLog = fs.openSync(path.join(out, 'chrome-launch.txt'), 'w');
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-background-networking',
  `--remote-debugging-port=${debug}`, `--user-data-dir=${profile}`, 'about:blank'
], { windowsHide: true, stdio: ['ignore', launchLog, launchLog] });
chrome.on('error', error => fs.appendFileSync(path.join(out, 'chrome-launch.txt'), String(error)));
let ws, id = 0;
const pending = new Map(), exceptions = [], consoleErrors = [], checks = [], matrix = [];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const check = (name, result) => { checks.push({ name, passed: !!result }); assert.ok(result, name); };
try {
  let target;
  for (let i = 0; i < 60; i++) {
    try { target = (await (await fetch(`http://127.0.0.1:${debug}/json`)).json()).find(t => t.type === 'page'); } catch {}
    if (target) break;
    await sleep(100);
  }
  assert.ok(target, 'Chrome debugging target');
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params);
    if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') consoleErrors.push(message.params.args.map(a => a.value || a.description).join(' '));
    if (message.id && pending.has(message.id)) {
      const p = pending.get(message.id); pending.delete(message.id); clearTimeout(p.timer);
      message.error ? p.reject(Error(message.error.message)) : p.resolve(message.result);
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const next = ++id, timer = setTimeout(() => reject(Error('CDP timeout: ' + method)), 20000);
    pending.set(next, { resolve, reject, timer }); ws.send(JSON.stringify({ id: next, method, params }));
  });
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) throw Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    return result.result.value;
  };
  const waitFor = async expression => {
    for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await sleep(50); }
    throw Error('Mount timeout: ' + expression);
  };
  const click = async selector => { await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`); };
  const capture = async name => {
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    fs.writeFileSync(path.join(out, name + '.png'), Buffer.from(shot.data, 'base64'));
  };
  await send('Page.enable'); await send('Runtime.enable');
  await send('Page.navigate', { url: `http://127.0.0.1:${port}/` });
  await waitFor("!!document.querySelector('#app .cert-card')");
  await evaluate(`(async()=>{
    window.appState=(await import('/js/core/state.js')).state;
    window.render=(await import('/js/ui/renderer.js')).renderApp;
    window.certs=(await import('/data/certifications.js')).default;
    window.study=(await import('/js/core/study-answers.js')).studyAnswers;
    window.loader=await import('/js/core/question-loader.js');
    window.engine=await import('/js/core/quiz-engine.js');
    window.setConfig=async(version='next-bank')=>{appState.selectedCertification=certs[0];appState.selectedExamVersion=version;appState.screen='cert-start';await render();};
    await setConfig();
  })()`);
  await waitFor("!!document.querySelector('#btn-study-answers')");
  check('button immediately below primary action', await evaluate(`document.querySelector('#btn-start-quiz').parentElement.nextElementSibling.querySelector('#btn-study-answers') !== null`));
  await evaluate(`setConfig('2026')`);
  check('legacy setup has primary action and no Study Answers', await evaluate(`!!document.querySelector('#btn-start-quiz') && !document.querySelector('#btn-study-answers')`));
  await evaluate(`(async()=>{appState.selectedCertification={id:'other',vendorId:'other',certId:'other'};appState.selectedExamVersion='next-bank';const {renderCertStartScreen}=await import('/js/ui/screen-start.js');renderCertStartScreen(document.querySelector('#app'),appState.selectedCertification,'next-bank',()=>{},await loader.loadExamConfig('isc2','cc','next-bank'),()=>{});})()`);
  check('other certification cannot expose Study Answers', await evaluate(`!document.querySelector('#btn-study-answers')`));
  await evaluate(`setConfig()`);
  await click('#btn-clear-all');
  check('empty domains disable both practice and study', await evaluate(`document.querySelector('#btn-study-answers').disabled && document.querySelector('#btn-start-quiz').disabled`));
  await click('[data-domain-id="1"]');
  await evaluate(`document.querySelector('#question-count-input').value='2';document.querySelector('#question-count-input').dispatchEvent(new Event('change'));`);
  // Preserve a real unfinished legacy attempt while studying the updated bank.
  await evaluate(`(async()=>{const bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'2026',domainIds:[1]});appState.selectedExamVersion='2026';engine.startQuizSession({mode:'practice',questions:bank[1].slice(0,2)});engine.recordAnswer({questionIndex:0,selectedIndex:bank[1][0].correct_idx});appState.selectedExamVersion='next-bank';appState.screen='cert-start';window.quizBefore=JSON.stringify(appState.quiz);window.storageBefore=JSON.stringify({...localStorage});window.preferencesBefore=JSON.stringify({...appState.setup.practice,selectedDomains:[...appState.setup.practice.selectedDomains]});await render();})()`);
  await click('#btn-study-answers');
  await waitFor("!!document.querySelector('.study-answers')");
  check('selected domain and count respected; answers shown immediately', await evaluate(`study.questions.length===2 && study.questions.every(q=>q.dom===1) && !!document.querySelector('.study-options .correct') && document.querySelector('.explanation-box').innerText.length>100`));
  check('previous boundary disabled', await evaluate(`document.querySelector('#study-previous').disabled`));
  await click('#study-next');
  check('next navigates and final boundary disabled', await evaluate(`study.index===1 && document.querySelector('#study-next').disabled && document.activeElement.id==='study-question'`));
  await click('#study-previous');
  check('previous restores original first question', await evaluate(`study.index===0 && document.querySelector('#study-question').innerText===study.questions[0].question`));
  for (const [width, height] of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width === 390 });
    for (const theme of ['light','dark']) {
      await evaluate(`document.documentElement.dataset.theme='${theme}'`);
      for (const language of ['en','th','both']) {
        await click('#study-lang-' + language);
        await evaluate('document.fonts.ready'); await sleep(350);
        const result = await evaluate(`(()=>{
          const q=study.questions[study.index], e=document.querySelector('#study-question'), opts=[...document.querySelectorAll('.study-options li')];
          const expected=${JSON.stringify(language)}==='en'?q.question:${JSON.stringify(language)}==='th'?(q.question_th||q.question):q.question+'\\n'+(q.question_th||q.question);
          const correct=opts[q.correct_idx];
          return {overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),questionMatches:e.innerText===expected,correct:correct.classList.contains('correct')&&!correct.innerText.includes('✓ Correct answer'),choices:opts.length===q.options.length,readonly:!document.querySelector('.study-options button'),reasoning:document.querySelector('.explanation-box').innerText.includes(${JSON.stringify(language)}==='en'?q.explanation_detail.correct.en:q.explanation_detail.correct.th),focus:document.activeElement.id==='study-lang-${language}',font:getComputedStyle(e).fontFamily};
        })()`);
        matrix.push({ width, height, theme, language, ...result });
        check(`layout/content ${width} ${theme} ${language}`, result.overflow===0 && result.questionMatches && result.correct && result.choices && result.readonly && result.reasoning && result.focus);
        await evaluate('scrollTo(0,0)');
        await capture(`study-${width}x${height}-${theme}-${language}`);
        if (language === 'both') {
          await evaluate("document.querySelector('.explanation-box').scrollIntoView()");
          await capture(`explanation-${width}x${height}-${theme}`);
        }
      }
    }
  }
  check('quiz and localStorage byte-identical after studying', await evaluate(`JSON.stringify(appState.quiz)===quizBefore && JSON.stringify({...localStorage})===storageBefore`));
  await click('#study-back'); await waitFor("!!document.querySelector('#btn-study-answers')");
  check('back preserves setup', await evaluate(`JSON.stringify({...appState.setup.practice,selectedDomains:[...appState.setup.practice.selectedDomains]})===preferencesBefore`));
  await evaluate('history.forward()'); await waitFor("!!document.querySelector('.study-answers')");
  check('browser forward retains exact selection', await evaluate(`study.questions[0].id===584 && study.questions.length===2 && study.index===0`));
  await evaluate("document.querySelector('#study-next').focus()");
  await send('Input.dispatchKeyEvent', { type:'keyDown', key:'Enter', code:'Enter', text:'\r', windowsVirtualKeyCode:13 });
  await send('Input.dispatchKeyEvent', { type:'keyUp', key:'Enter', code:'Enter', windowsVirtualKeyCode:13 });
  check('keyboard activates next and transfers focus', await evaluate(`study.index===1 && document.activeElement.id==='study-question'`));
  await evaluate('history.back()'); await waitFor("!!document.querySelector('#btn-study-answers')");
  await click('#mode-card-exam'); await click('#btn-study-answers'); await waitFor("!!document.querySelector('.study-answers')");
  check('exam toggle does not affect study selection or run timer', await evaluate(`study.questions.length===2 && study.questions[0].id===584 && JSON.stringify(appState.quiz)===quizBefore && !document.querySelector('.quiz-timer-badge')`));
  await click('#study-back');await waitFor("!!document.querySelector('#btn-study-answers')");
  await click('#mode-card-practice');await click('#order-card-random');await click('#btn-study-answers');
  await waitFor("!!document.querySelector('.study-answers')");
  const randomIds=await evaluate(`study.questions.map(q=>q.id)`);
  await click('#study-next');await click('#study-previous');
  check('random ordering remains stable through navigation',await evaluate(`JSON.stringify(study.questions.map(q=>q.id))===${JSON.stringify(JSON.stringify(randomIds))}&&study.questions.length===2`));
  await evaluate("document.querySelector('#study-back').focus()");
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
  check('keyboard Tab reaches language control with visible focus',await evaluate(`document.activeElement.id==='study-lang-en'&&getComputedStyle(document.activeElement).outlineStyle!=='none'`));
  // Check every actual bank question in all languages, including general explanations.
  const allContent = await evaluate(`(async()=>{
    const bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
    const {renderStudyAnswersScreen}=await import('/js/ui/screen-study-answers.js');
    const original=[...study.questions], oldIndex=study.index, oldLanguage=appState.setup.language;
    study.questions=Object.values(bank).flat();let count=0;
    for(let i=0;i<study.questions.length;i++)for(const lang of ['en','th','both']){
      study.index=i;appState.setup.language=lang;renderStudyAnswersScreen(document.querySelector('#app'),render);
      const q=study.questions[i], items=[...document.querySelectorAll('.study-options li')];
      if(!items[q.correct_idx].classList.contains('correct'))throw Error('Wrong answer '+q.id);
      const explanation=document.querySelector('.explanation-box').innerText;
      const reason=q.explanation_detail?.correct?.[lang==='en'?'en':'th'] || (lang==='en'?q.explanation:q.explanation_th||q.explanation);
      if(!explanation.includes(reason))throw Error('Wrong explanation '+q.id);
      if(!document.querySelector('#study-question').textContent.includes(lang==='en'?q.question:q.question_th||q.question))throw Error('Wrong language '+q.id);
      count++;
    }
    study.questions=original;study.index=oldIndex;appState.setup.language=oldLanguage;renderStudyAnswersScreen(document.querySelector('#app'),render);
    return count;
  })()`);
  check('all 157 questions match bank answers and explanations in three languages', allContent===471);
  // Actual bank representatives exercise all correct-answer positions and visual variants.
  const refinementCases = [];
  for (const [width,height] of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for (const theme of ['light','dark']) for (const lang of ['en','th','both']) for (const position of [0,1,2,3]) {
      const result = await evaluate(`(async()=>{
        const bank=await loader.loadQuestionsForDomains({vendorId:'isc2',certId:'cc',version:'next-bank',domainIds:[1,2,3,4,5]});
        const q=Object.values(bank).flat().find(q=>q.correct_idx===${position});
        study.questions=[q];study.index=0;appState.setup.language='${lang}';document.documentElement.dataset.theme='${theme}';
        const {renderStudyAnswersScreen}=await import('/js/ui/screen-study-answers.js');renderStudyAnswersScreen(document.querySelector('#app'),render);
        const rows=[...document.querySelectorAll('.study-options li')], correct=rows[q.correct_idx], explanation=document.querySelector('.explanation-box');
        const styles=rows.map(e=>getComputedStyle(e)), exp=getComputedStyle(explanation);
        const metadata=document.querySelector('.study-metadata'), title=metadata.querySelector('.study-language');
        const left=rows.map(e=>e.querySelector('.option-letter').getBoundingClientRect().left);
        const expected=document.createElement('div');expected.innerHTML=(await import('/js/ui/components/explanation-2026.js')).renderExplanation2026Content(q,'${lang}');
        return {id:q.id,position:q.correct_idx,labelRemoved:!document.querySelector('.study-correct-label')&&!document.querySelector('.study-options').innerText.includes('Correct answer'),
          incorrectClean:styles.every((s,i)=>i===q.correct_idx||(parseFloat(s.borderTopWidth)===0&&s.backgroundColor==='rgba(0, 0, 0, 0)')),
          correctHighlighted:styles[q.correct_idx].borderTopWidth==='1px'&&styles[q.correct_idx].backgroundColor!=='rgba(0, 0, 0, 0)',
          aligned:Math.max(...left)-Math.min(...left)<1,
          neutralExplanation:exp.borderLeftWidth==='0px'&&exp.backgroundColor==='rgba(0, 0, 0, 0)',
          domainInline:getComputedStyle(title).display==='inline',
          completeExplanation:explanation.textContent.trim().endsWith(expected.textContent.trim()),
          overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth)};
      })()`);
      refinementCases.push({width,height,theme,lang,...result});
      if(Object.values(result).includes(false))console.log('Refinement diagnostic:',result);
      check(`refinement ${width} ${theme} ${lang} answer ${String.fromCharCode(65+position)}`,result.labelRemoved&&result.incorrectClean&&result.correctHighlighted&&result.aligned&&result.neutralExplanation&&result.domainInline&&result.completeExplanation&&result.overflow===0);
      if(lang==='both'&&((width===1440&&theme==='dark')||(width===390&&theme==='light'))) {
        await evaluate('document.fonts.ready');await sleep(350);await evaluate('scrollTo(0,0)');
        await capture(`refined-${width}-${theme}-answer-${String.fromCharCode(65+position)}`);
      }
    }
  }
  await send('Page.reload'); await waitFor("!!document.querySelector('#btn-study-answers')");
  check('refresh safely returns to updated configuration', await evaluate(`document.querySelector('.study-answers')===null && location.hash==='#isc2-cc-next-bank-config'`));
  await send('Page.navigate', {url:`http://127.0.0.1:${port}/#isc2-cc-next-bank-study`});
  await waitFor("!!document.querySelector('#btn-study-answers')");
  check('direct navigation safely returns to configuration', await evaluate(`!document.querySelector('.study-answers')`));
  // Configuration action alignment for all requested viewports and themes.
  for(const [width,height] of [[1440,900],[1920,1080],[390,844]]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width===390});
    for(const theme of ['light','dark']) {
      const alignment=await evaluate(`(()=>{document.documentElement.dataset.theme='${theme}';const a=document.querySelector('#btn-start-quiz').getBoundingClientRect(),b=document.querySelector('#btn-study-answers').getBoundingClientRect();return a.x===b.x&&a.width===b.width&&b.y>=a.bottom&&document.documentElement.scrollWidth<=innerWidth;})()`);
      check(`configuration alignment ${width} ${theme}`,alignment);
      await evaluate("document.querySelector('#btn-study-answers').scrollIntoView({block:'center'})");await capture(`configuration-${width}x${height}-${theme}`);
    }
  }
  // Existing primary actions: replace-confirmation still required for an unfinished attempt.
  await evaluate(`(async()=>{window.appState=(await import('/js/core/state.js')).state;window.render=(await import('/js/ui/renderer.js')).renderApp;window.certs=(await import('/data/certifications.js')).default;window.setConfig=async()=>{appState.selectedCertification=certs[0];appState.selectedExamVersion='next-bank';appState.screen='cert-start';await render();};})()`);
  await click('#btn-start-quiz');
  check('existing attempt still requires primary replacement confirmation',await evaluate(`document.querySelector('#confirm-start-new-modal').style.display==='flex'`));
  await click('#btn-confirm-start-cancel');
  // Use the actual exported storage key rather than assuming its name.
  await evaluate(`(async()=>{const storage=await import('/js/core/storage.js');storage.clearActiveQuizSession();})()`);
  await click('#btn-start-quiz');await waitFor("!!document.querySelector('.quiz-container:not(.study-answers)')");
  check('practice primary still starts a real quiz',await evaluate(`appState.quiz.active&&appState.quiz.mode==='practice'`));
  await evaluate(`(async()=>{const storage=await import('/js/core/storage.js');storage.clearActiveQuizSession();appState.setup.studyMode='exam';await setConfig();})()`);
  await click('#btn-start-quiz');await waitFor("!!document.querySelector('.quiz-container:not(.study-answers)')");
  check('exam primary preserves existing 117-question allocation and 7200-second timer',await evaluate(`appState.quiz.mode==='exam'&&appState.quiz.questions.length===117&&appState.quiz.timeRemainingSeconds===7200`));
  await evaluate('history.back()');await sleep(100);
  check('study browser history does not hijack an active exam',await evaluate(`appState.screen==='quiz'&&!document.querySelector('.study-answers')`));
  check('no uncaught exceptions or application console errors',exceptions.length===0&&consoleErrors.length===0);
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({browser:'Chrome headless via CDP',checks,matrix,refinementCases,exceptions,consoleErrors,contentCases:allContent},null,2));
  console.log(`PASS: ${checks.length} checks; ${allContent} bank/language cases; ${matrix.length} layout states; no application errors.`);
} catch(error) {
  fs.writeFileSync(path.join(out,'browser-results.json'),JSON.stringify({checks,matrix,exceptions,consoleErrors,error:String(error.stack)},null,2));
  console.error(error);process.exitCode=1;
} finally {
  if(ws)ws.close();chrome.kill();server.close();
}
