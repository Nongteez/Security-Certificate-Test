from pathlib import Path
import re,json
root=Path.cwd();q=root/'artifacts/qa/reading-notes-visual-remediation'
p=root/'js/core/diagram-generator.js';source=p.read_text(encoding='utf8');start=source.index('  threatChain: `');end=source.index('`,',start)+2;old=source[start:end]
descs=re.findall(r'<p class="reading-mob-tier-desc">([\s\S]*?)</p>',old);subtitles=re.findall(r'<span class="reading-mob-tier-action">([\s\S]*?)</span>',old)
assert len(descs)==len(subtitles)==5
titles=['Asset · ทรัพย์สินมีคุณค่า','Vulnerability · จุดอ่อน / ช่องโหว่','Threat Actor &amp; Exploit · ผู้ก่อภัยคุกคาม','Impact &amp; Risk · ความเสียหายและความเสี่ยง','Safeguards &amp; Controls · มาตรการควบคุม']
ids=['asset','vulnerability','threat-actor','impact','controls']
def node(i,kind='section',extra=''):
 return f'''<{kind} class="reading-threat-concept {extra}" data-threat-concept="{ids[i]}">
      <h5>{titles[i]}</h5>
      <span class="reading-threat-subtitle">{subtitles[i]}</span>
      <p>{descs[i]}</p>
    </{kind}>'''
def edge(source,target,label):
 return f'''<div class="reading-threat-edge" data-from="{source}" data-to="{target}">
      <span class="reading-threat-edge-label">{label}</span>
      <svg class="reading-threat-arrow-horizontal" viewBox="0 0 96 12" aria-hidden="true" focusable="false"><path d="M1 6H93m-5-4 5 4-5 4"/></svg>
      <svg class="reading-threat-arrow-vertical" viewBox="0 0 12 40" aria-hidden="true" focusable="false"><path d="M6 1V37m-4-5 4 5 4-5"/></svg>
    </div>'''
new=f'''  threatChain: `
<div class="reading-diagram-card reading-threat-diagram" data-diagram="threatChain" data-relationship="causal-example-with-controls" role="region" aria-label="Threats, vulnerabilities, impacts and controls: a causal example" aria-describedby="threatChain-note">
  <div class="reading-diagram-header">
    <span class="reading-diagram-tag">Causal Relationships</span>
    <h4 class="reading-diagram-title">Threats, Vulnerabilities, Impacts and Controls: A Causal Example</h4>
  </div>
  <div class="reading-threat-controls" data-applies-to="scenario-risk">
    {node(4)}
    <p class="reading-threat-control-scope">ลดโอกาสหรือผลกระทบตามความเสี่ยงที่เกี่ยวข้อง<br><span lang="en">Can reduce likelihood or impact where applicable</span></p>
  </div>
  <div class="reading-threat-map">
    {node(2,extra='reading-threat-actor')}
    {edge('threat-actor','vulnerability','อาศัยช่องโหว่<br><span lang="en">Exploits</span>')}
    <div class="reading-threat-asset" data-threat-group="vulnerable-asset">
      {node(0)}
      <p class="reading-threat-has">มี / Has <span aria-hidden="true">↓</span></p>
      {node(1)}
    </div>
    {edge('vulnerable-asset','impact','หากสำเร็จ<br>ก่อให้เกิด<br><span lang="en">Can cause</span>')}
    {node(3,extra='reading-threat-impact')}
  </div>
</div>
<p id="threatChain-note" class="reading-threat-caption"><span lang="th">ความสัมพันธ์เชิงเหตุและผล ไม่ใช่ 5 ขั้นตอนบังคับ; Controls ลดความเสี่ยงได้หลายจุดโดยไม่ต้องรอ Impact.</span> <span lang="en">Causal relationships, not five required steps. Controls can reduce risk where relevant, not a final stage after impact.</span></p>
`,'''
source=source[:start]+new+source[end:];p.write_text(source,encoding='utf8')
(q/'threat-redesign-ledger.json').write_text(json.dumps(dict(before=old,after=new,preservedDefinitions=descs,preservedSubtitles=subtitles,qualification='Two-language causal/nonprocedural and controls-not-terminal qualification retained outside the card',relationship='Actor exploits vulnerability in an asset; successful exploitation can cause impact; controls can reduce likelihood/impact at relevant points'),ensure_ascii=False,indent=2),encoding='utf8')
css='''/* VIS-01–VIS-06: Reading prose rhythm and the single causal threat example. */
.reading-screen:has(.reading-structured-objective) .reading-layout .reading-article {
  max-width: 76rem;
}
.reading-screen .reading-body .reading-structured-objective > p:not(.reading-intro-label) {
  max-width: 100%;
}
.reading-screen:has(.reading-structured-objective) .reading-article-header {
  margin-bottom: 24px;
  padding-bottom: 16px;
}
.reading-screen .reading-body .reading-objective-section {
  margin-top: 44px;
  padding-top: 24px;
}
.reading-screen .reading-body .reading-objective-section:first-of-type {
  margin-top: 16px;
  padding-top: 16px;
}
.reading-screen .reading-body > .reading-lead { margin-bottom: 16px; }
.reading-screen .reading-body .reading-structured-objective > h2 {
  margin-bottom: 12px;
  padding-bottom: 0;
  line-height: 1.4;
}
.reading-screen .reading-body .reading-structured-objective > h3 {
  margin: 28px 0 12px;
}
.reading-screen .reading-body .reading-threat-diagram {
  padding: 24px;
}
.reading-screen .reading-body .reading-threat-diagram .reading-diagram-header { margin-bottom: 20px; }
.reading-screen .reading-body .reading-threat-controls {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
  border-left: 3px solid var(--green, #059669);
  padding: 12px 16px;
  background: var(--panel);
  margin-bottom: 24px;
}
.reading-screen .reading-body .reading-threat-concept { min-width: 0; }
.reading-screen .reading-body .reading-threat-concept h5 {
  font-size: 16px;
  line-height: 1.55;
  margin: 0 0 6px;
  color: var(--text);
}
.reading-screen .reading-body .reading-threat-subtitle {
  display: block;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  color: var(--text-muted);
}
.reading-screen .reading-body .reading-threat-concept p,
.reading-screen .reading-body .reading-threat-control-scope {
  max-width: none;
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  word-break: normal;
  overflow-wrap: break-word;
}
.reading-screen .reading-body .reading-threat-control-scope { align-self: center; }
.reading-screen .reading-body .reading-threat-map {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 16px;
}
.reading-screen .reading-body .reading-threat-asset {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
  background: var(--blue-bg);
}
.reading-screen .reading-body .reading-threat-has {
  margin: 12px 0;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  font-size: 15px;
  line-height: 1.5;
  font-weight: 600;
}
.reading-screen .reading-body .reading-threat-edge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 0 4px;
  text-align: center;
}
.reading-screen .reading-body .reading-threat-edge-label {
  font-size: 15px;
  line-height: 1.5;
  color: var(--text);
  overflow-wrap: normal;
  word-break: normal;
}
.reading-screen .reading-body .reading-threat-edge svg {
  display: block;
  flex: none;
  fill: none;
  stroke: var(--text-muted);
  stroke-width: 1.5;
}
.reading-screen .reading-body .reading-threat-edge .reading-threat-arrow-horizontal { display: none; }
.reading-screen .reading-body .reading-threat-arrow-vertical { width: 12px; height: 40px; }
.reading-screen .reading-body .reading-structured-objective > p.reading-threat-caption {
  margin: 12px 0 24px;
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 15px;
  line-height: 1.7;
}
@container reading-diagram (min-width: 880px) {
  .reading-screen .reading-body .reading-threat-map {
    grid-template-columns: minmax(0, 1fr) 96px minmax(0, 1.2fr) 96px minmax(0, 1fr);
    gap: 12px;
  }
  .reading-screen .reading-body .reading-threat-controls { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 24px; }
  .reading-screen .reading-body .reading-threat-edge .reading-threat-arrow-horizontal { display: block; width: 88px; height: 12px; }
  .reading-screen .reading-body .reading-threat-edge .reading-threat-arrow-vertical { display: none; }
}
@media (max-width: 600px) {
  .reading-screen .reading-body .reading-threat-diagram { padding: 16px; }
}
/* End VIS-01–VIS-06 targeted Reading remediation. */

'''
p=root/'css/reading.css';s=p.read_text(encoding='utf8');marker='/* Phase 3B.2: opt-in textbook prose, independent of tables and diagrams. */';assert s.count(marker)==1;p.write_text(s.replace(marker,css+marker),encoding='utf8')
print('Updated only threatChain and inserted scoped CSS block; all five bilingual definitions/subtitles retained.')
