const $=s=>document.querySelector(s), esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=(v,metric)=>{const shown=metric==="PISA points"?Math.round(v):v;return(shown>0?"+":"")+String(shown)}, ci=r=>r.low==null?"CI: NR":`[${fmt(r.low,r.metric)}, ${fmt(r.high,r.metric)}]`;
const family=r=>r.metric;
const families=["d","g","SMD","r","PISA points","PISA b","Reported ES"], familyLabel={d:"Cohen’s d",g:"Hedges’ g",SMD:"SMD (as reported)",r:"Correlation / harmonized r","PISA points":"PISA adjusted score differences","PISA b":"PISA regression coefficients","Reported ES":"Reported ES: scale unconfirmed"};
const useOptions=["All","Intentional","Passive","Mixed","Perception"], useNames={All:"All use types",Intentional:"Intentional / supported",Passive:"Passive viewing",Mixed:"Mixed / leisure / exposure",Perception:"Learner perceptions"};
const base=()=>({use:"All",age:"All",subject:"All",intervention:"All",metric:"All",min:"",max:"",umbrella:false,expanded:false});
let state={A:base(),B:base()},query="",exclude=false,sort={key:"title",dir:1},activePreset="primary";
let currentRows=[], panelRows={A:[],B:[]};
const titles={A:"Goal-directed & supported use",B:"Passive & broader exposure"};
function options(vals,selected,labels={}){return vals.map(v=>`<option value="${esc(v)}" ${v===selected?"selected":""}>${esc(labels[v]||v)}</option>`).join("")}
function field(id,key,label,vals,labels={}){return `<label class="filter" for="${id}-${key}">${label}<select id="${id}-${key}" data-testid="select-${id}-${key}" data-panel="${id}" data-key="${key}">${options(vals,state[id][key],labels)}</select></label>`}
function buildPanel(id){
 const s=state[id], interventions=["All",...new Set(records.filter(r=>s.use==="All"||r.use===s.use).map(r=>r.intervention))].sort((a,b)=>a==="All"?-1:b==="All"?1:a.localeCompare(b));
 $(`#panel-${id}`).innerHTML=`<div class="panelheader"><div class="panelname"><span class="letter">${id}</span><h2>${s.use==="Intentional"?"Goal-directed & supported use":s.use==="Passive"?"Passive viewing":useNames[s.use]}</h2></div><span class="small" id="${id}-count"></span></div>
 <div class="filtergrid">
 ${field(id,"use","Use category",useOptions,useNames)}
 ${field(id,"age","Age group",["All","Primary","Adolescent","Mixed ages"],{All:"All age groups",Primary:"Primary / childhood",Adolescent:"Adolescent / PISA"})}
 ${field(id,"subject","Academic outcome",["All","Math","Reading","Science","Language","General learning"],{All:"All outcomes",Language:"Language (not reading-only)"})}
 ${field(id,"intervention","Intervention / exposure",interventions,{All:"All interventions"})}
 ${field(id,"metric","Effect-size scale",["All",...families],{All:"All scales (separate)",d:"Cohen’s d",g:"Hedges’ g",SMD:"SMD (as reported)",r:"Correlation / harmonized r","PISA b":"PISA b per index unit"})}
 <label class="filter">Effect-size range<div class="rangebox"><input type="number" step="0.01" id="${id}-min" aria-label="Panel ${id} minimum effect size" data-panel="${id}" data-key="min" placeholder="Min" value="${esc(s.min)}" ${s.metric==="All"?"disabled":""}><span>to</span><input type="number" step="0.01" id="${id}-max" aria-label="Panel ${id} maximum effect size" data-panel="${id}" data-key="max" placeholder="Max" value="${esc(s.max)}" ${s.metric==="All"?"disabled":""}></div></label></div>
 <div class="filterhint" id="${id}-hint"></div><div class="plotarea" id="${id}-plot"></div>`;
 $(`#panel-${id}`).querySelectorAll("select,input").forEach(el=>el.addEventListener("change",()=>{
   s[el.dataset.key]=el.value;s.expanded=false;
   if(el.dataset.key==="use")s.intervention="All";
   if(el.dataset.key==="metric"){s.min="";s.max=""}
   activePreset="";updatePresets();
   if(el.tagName==="SELECT")buildPanel(id);
   render();
 }));
}
function invalid(s){return s.min!==""&&s.max!==""&&Number(s.min)>Number(s.max)}
function matches(r,s){return !invalid(s)&&(s.use==="All"||r.use===s.use)&&(s.age==="All"||r.age===s.age)&&(s.subject==="All"||r.subjects.includes(s.subject))&&(s.intervention==="All"||r.intervention===s.intervention)&&(s.metric==="All"||family(r)===s.metric)&&(!s.umbrella||r.source==="sanders")&&(s.metric==="All"||((s.min===""||r.value>=Number(s.min))&&(s.max===""||r.value<=Number(s.max))))&&(!exclude||r.status!=="Reporting concerns")&&(!query||[r.title,r.outcome,r.context,sources[r.source].label,r.note,r.intervention].join(" ").toLowerCase().includes(query))}
function preset(name){
 state={A:base(),B:base()};activePreset=name;query="";exclude=false;$("#search").value="";$("#exclude").checked=false;
 if(name==="primary"){Object.assign(state.A,{use:"Intentional",age:"Primary"});Object.assign(state.B,{use:"Passive",age:"Primary"})}
 if(name==="pisa"){Object.assign(state.A,{age:"Adolescent",metric:"PISA points"});Object.assign(state.B,{age:"Adolescent",metric:"PISA b",use:"Perception"})}
 if(name==="umbrella"){Object.assign(state.A,{use:"Intentional",metric:"r",umbrella:true});Object.assign(state.B,{metric:"r",umbrella:true,use:"Mixed"})}
 if(name==="all"){state.A.use="Intentional"}
 ["A","B"].forEach(buildPanel);updatePresets();render();
}
function updatePresets(){document.querySelectorAll("[data-preset]").forEach(b=>{b.classList.toggle("active",b.dataset.preset===activePreset);b.setAttribute("aria-pressed",String(b.dataset.preset===activePreset))})}
function drawPanel(id,rows){
 const s=state[id], color=id==="A"?"#176657":"#9b4c23";
 $(`#${id}-count`).textContent=`${rows.length} ${rows.length===1?"estimate":"estimates"}`;
 $(`#${id}-hint`).innerHTML=invalid(s)?`<span class="error">Minimum must be less than or equal to maximum.</span>`:s.metric==="All"?"Select one scale to enable numeric bounds. Mixed-age studies are not primary-only evidence.":`${esc(familyLabel[s.metric])}. Bounds apply to point estimates, not confidence limits.${s.umbrella?" Umbrella review only.":""}`;
 if(!rows.length){$(`#${id}-plot`).innerHTML=`<div class="empty"><strong>${invalid(s)?"Check the effect-size range":"No matching estimates"}</strong>${invalid(s)?"Correct the bounds to restore this panel.":"Try another age, outcome or scale. Missing evidence is not a zero effect."}<br><button data-clear="${id}">Clear panel ${id} filters</button></div>`;return}
 let html=`<div class="plotheading"><strong>Effect estimates</strong><span>Point + 95% CI where available</span></div>`;
 let groups=[];
 for(const f of families)for(const d of ["Intervention","Association"]){const arr=rows.filter(r=>family(r)===f&&r.design===d).sort((a,b)=>b.value-a.value);if(arr.length)groups.push({f,d,arr})}
 for(const {f,d,arr} of groups){
   const allForAxis=records.filter(r=>family(r)===f), vals=allForAxis.flatMap(r=>[r.low??r.value,r.high??r.value]);
   const lo=Math.min(0,...vals),hi=Math.max(.1,...vals), pad=(hi-lo)*.08, min=lo-pad,max=hi+pad;
   const x=v=>Math.max(0,Math.min(100,(v-min)/(max-min)*100));
   const shown=s.expanded?arr:arr.slice(0,4);
   html+=`<div class="plotgroup"><div class="grouplabel">${esc(familyLabel[f])} · ${d==="Intervention"?"intervention":"association"}</div><div class="axis"><span></span><span class="ticks">${[...new Set([lo,0,hi])].map(v=>`<span style="left:${x(v)}%">${fmt(v,f)}</span>`).join("")}</span><span></span></div>`;
   for(const r of shown)html+=`<button class="plotrow" data-detail="${r.id}" aria-label="${esc(r.title)}, ${esc(r.metric)} ${fmt(r.value,r.metric)}, ${esc(ci(r))}. Open evidence details"><span class="plotlabel">${esc(r.title)}${r.status!=="Source verified"?`<small>${esc(r.status)}</small>`:""}</span><svg viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true"><line x1="${x(0)}" x2="${x(0)}" y1="0" y2="24" stroke="#aebac2" stroke-dasharray="2 2" vector-effect="non-scaling-stroke"/>${r.low!=null?`<line x1="${x(r.low)}" x2="${x(r.high)}" y1="12" y2="12" stroke="${color}" stroke-width="2" vector-effect="non-scaling-stroke"/><line x1="${x(r.low)}" x2="${x(r.low)}" y1="8" y2="16" stroke="${color}"/><line x1="${x(r.high)}" x2="${x(r.high)}" y1="8" y2="16" stroke="${color}"/>`:""}<circle cx="${x(r.value)}" cy="12" r="3" fill="${color}"/></svg><span class="value">${fmt(r.value,r.metric)}</span></button>`;
   html+="</div>";
 }
 if(groups.some(g=>g.arr.length>4)||s.expanded)html+=`<button class="more" data-expand="${id}">${s.expanded?"Show fewer estimates":"Show all estimates in this panel"} ${s.expanded?"↑":"↓"}</button>`;
 html+=`<div class="plotnote">Same scale across panels within each metric. No pooled average.<br>Dots without whiskers have no extracted CI. Click a row for limitations.</div>`;
 $(`#${id}-plot`).innerHTML=html;
}
const columns=[["title","Finding / source"],["outcome","Outcome"],["value","Effect / 95% CI"],["age","Age group"],["n","Sample / scope"],["quality","Methodological quality"],["context","Country context"]];
function render(){
 panelRows={A:records.filter(r=>matches(r,state.A)),B:records.filter(r=>matches(r,state.B))};
 for(const id of ["A","B"])drawPanel(id,panelRows[id]);
 const ids=new Set([...panelRows.A,...panelRows.B].map(r=>r.id));
 currentRows=records.filter(r=>ids.has(r.id));
 currentRows.sort((a,b)=>{
   if(sort.key==="value"){const c=families.indexOf(family(a))-families.indexOf(family(b))||a.design.localeCompare(b.design);if(c)return c;return (a.value-b.value)*sort.dir}
   if(sort.key==="n"){if(a.n==null)return b.n==null?0:1;if(b.n==null)return -1;return (a.n-b.n)*sort.dir}
   return String(a[sort.key]).localeCompare(String(b[sort.key]))*sort.dir;
 });
 $("#row-count").textContent=currentRows.length;
 $("#table-head").innerHTML=columns.map(([key,label])=>`<th scope="col" aria-sort="${sort.key===key?(sort.dir===1?"ascending":"descending"):"none"}"><button data-sort="${key}" data-testid="sort-${key}">${label} <span aria-hidden="true">${sort.key===key?(sort.dir===1?"↑":"↓"):"↕"}</span></button></th>`).join("");
 $("#table-body").innerHTML=currentRows.length?currentRows.map(r=>`<tr data-testid="row-${r.id}"><td class="finding"><button data-detail="${r.id}">${esc(r.title)} ↗</button><span class="ref">${esc(sources[r.source].label)}</span><div class="badges">${["A","B"].filter(id=>panelRows[id].some(v=>v.id===r.id)).map(id=>`<span class="badge ${id}">${id}</span>`).join("")}<span class="badge">${r.design}</span></div></td><td>${esc(r.outcome)}</td><td><span class="estimate">${esc(r.metric)} ${fmt(r.value,r.metric)}</span><span class="ci">${esc(ci(r))}</span></td><td>${esc(r.ageLabel)}</td><td class="samplecell">${r.n==null?"N: NR":`N = ${r.n.toLocaleString()}`}<small>${esc(r.k)}</small><small>${esc(r.sample)}</small></td><td><span class="quality ${r.status==="Reporting concerns"?"flag":""}">${esc(r.quality)}</span></td><td class="contextcell">${esc(r.context)}</td></tr>`).join(""):`<tr><td colspan="7"><div class="empty"><strong>No findings match your filters.</strong>Clear your search or reset the filters to return to the evidence.</div></td></tr>`;
 $("#table-status").textContent=sort.key==="value"?`${currentRows.length} findings · effect sorting is within metric and design only`:`${currentRows.length} findings · ${new Set(currentRows.map(r=>r.source)).size} sources · samples may overlap`;
}
function detail(id){
 const r=records.find(r=>r.id===id);if(!r)return;
 const s=sources[r.source];
 $("#detail-content").innerHTML=`<div class="detailhead"><div><span class="eyebrow">${esc(s.label)} · ${esc(r.status)}</span><h2>${esc(r.title)}</h2></div><button class="close" aria-label="Close evidence details" data-testid="button-close">×</button></div><div class="detailbody">
 <div class="detail-number">${esc(r.metric)} ${fmt(r.value,r.metric)} <span>${esc(ci(r))}${r.low!=null?" · 95%":""}</span></div>
 <p>${esc(r.design)} · ${esc(r.outcome)} · ${esc(r.ageLabel)}</p><p class="small">${esc(sourceCategory(r.source))} · Record ${esc(r.id)}</p>${recordAudit[r.id]?`<aside class="audit-notice">${recordAudit[r.id]}</aside>`:""}
 <dl class="detailgrid"><div><dt>Sample for this row</dt><dd>${esc(r.sample)}</dd></div><div><dt>Evidence units</dt><dd>${esc(r.k)}</dd></div><div><dt>Country context</dt><dd>${esc(r.context)}</dd></div><div><dt>Classification</dt><dd>${esc(r.use)} · ${esc(r.intervention)}</dd></div></dl>
 <div class="detailnote">${esc(r.note)}</div><h3>Methodological quality: ${esc(r.quality)}</h3><p>${esc(r.qualityNote)}</p><h3>Review scope & reported appraisal</h3><p>${esc(s.scope)}</p><p>${esc(s.quality)}</p><h3>Source context</h3><p>${esc(s.context)}</p>
 <div class="detail-links"><a href="${r.sourceUrl||s.url}" target="_blank" rel="noopener" data-testid="link-original">Open original source ↗</a>${r.supportingUrl||s.extra?`<a href="${r.supportingUrl||s.extra}" target="_blank" rel="noopener">Open supporting full text ↗</a>`:""}${s.sampleUrl?`<a href="${s.sampleUrl}" target="_blank" rel="noopener">PISA sample context ↗</a>`:""}</div><p class="small">Accessed ${esc(r.observed_at)}. “Not reported” means unavailable in the accessed material, not a zero sample or zero effect. PISA score differences are displayed as whole points; CSV values retain source precision.</p></div>`;
 $("#detail").showModal();document.body.style.overflow="hidden";
 $("#detail .close").addEventListener("click",()=>$("#detail").close());
}
$("#detail").addEventListener("close",()=>{document.body.style.overflow=""});
document.addEventListener("click",e=>{
 const d=e.target.closest("[data-detail]");if(d)detail(d.dataset.detail);
 const sortButton=e.target.closest("[data-sort]");if(sortButton){const key=sortButton.dataset.sort;sort={key,dir:sort.key===key?-sort.dir:key==="value"||key==="n"?-1:1};render()}
 const exp=e.target.closest("[data-expand]");if(exp){const id=exp.dataset.expand;state[id].expanded=!state[id].expanded;render()}
 const clear=e.target.closest("[data-clear]");if(clear){const id=clear.dataset.clear;state[id]=base();activePreset="";buildPanel(id);updatePresets();render()}
 const pre=e.target.closest("[data-preset]");if(pre)preset(pre.dataset.preset);
});
$("#search").addEventListener("input",e=>{query=e.target.value.trim().toLowerCase();render()});
$("#exclude").addEventListener("change",e=>{exclude=e.target.checked;render()});
$("#reset").addEventListener("click",()=>preset("primary"));
function setTab(which){
 viewNames.forEach(t=>{
   $(`#${t}`).hidden=t!==which;
   const b=$(`#tab-${t}`);b.classList.toggle("selected",t===which);b.setAttribute("aria-pressed",String(t===which));
 });
 document.body.dataset.view=which;
}
viewNames.forEach(t=>$(`#tab-${t}`).addEventListener("click",()=>{setTab(t);history.replaceState(null,"",`#${t}`)}));
$("#inventory").innerHTML=`<div><strong>${records.length}</strong><span>estimates</span></div><div><strong>${Object.keys(sources).length}</strong><span>estimate sources</span></div><div><strong>3</strong><span>core subjects</span></div>`;
$("#methods").innerHTML=`<div class="methods-top"><div class="eyebrow">READING THE EVIDENCE</div><h2>A comparison tool, not a causal leaderboard.</h2><p>This is a purposive, source-checked collection of reviews and PISA analyses accessed on 16 November 2026, not an exhaustive systematic review. It emphasizes primary-school learning, adolescent assessment, and the difference between educational purpose and screen exposure. Values are transcribed from the linked sources; missing values stay missing.</p></div>
 <div class="method-grid">
 <div><h3>What “intentional” means here</h3><p>An educational intervention, a stated learning purpose, or adult-supported content. These are dashboard classifications, not standardized research constructs. Educational viewing can be intentional without being cognitively active. Recreational gaming, leisure use and distraction are not automatically labeled passive. ICT autonomy is a perception, kept separate from actual use.</p><p>“Primary / childhood” includes primary-school reviews and the 4–11.9-year television subgroup. K–12, youth-wide and age-unspecified estimates remain “Mixed ages”; a primary filter does not silently include them.</p></div>
 <div><h3>Keep the measurement scales separate</h3><ul><li><b>d, g and SMD:</b> standardized differences. Displayed in one standardized family, with original metrics preserved; intervention and exposure designs stay separate.</li><li><b>r:</b> correlations or umbrella-harmonized effect sizes. Harmonized intervention r is not necessarily a raw observational correlation.</li><li><b>PISA points:</b> adjusted differences between exposure groups.</li><li><b>PISA b:</b> score-point differences per index unit, not the same contrast as PISA points.</li><li><b>Reported ES:</b> original scale unconfirmed; excluded from standardized ranking.</li></ul></div>
 <div><h3>Quality ratings are not interchangeable</h3><p>The register shows the authors’ reported assessment or clearly marks its absence. RoB 2 rates primary trials; NHLBI tools can assess primary observational studies or reviews themselves. A rigorous review can synthesize weak causal evidence. No new AMSTAR or GRADE rating has been invented.</p><p>“Review-level concerns” identifies the umbrella review’s appraisal context; an exact effect-specific rating is shown only when extracted. PRISMA reporting alone is not a quality grade.</p></div>
 <div><h3>Sample sizes, uncertainty & overlap</h3><p>N refers to participants only when known for the displayed estimate or explicitly labeled analytic sample. k may denote studies, effects or measures, as stated. Full-review totals are not substituted for missing subgroup samples. Samples are never summed across rows.</p><p>Sensitivity analyses, subject subgroups and umbrella estimates can share studies and participants. Confidence intervals describe within-estimate uncertainty, not the uncertainty of differences between unrelated reviews. No significance claim is made where a CI was not extracted.</p></div>
 <div><h3>Where the evidence is incomplete</h3><p>Primary-school science is represented by an older Taiwan estimate from a secondary review and a STEM composite with reporting concerns. The game-based review's conflicting math/science subgroup numbers were not entered. PISA math and science estimates are included; this collection does not contain a verified numeric PISA reading contrast.</p><p>Language and general-learning outcomes remain distinct from reading scores. Country lists are review-level where outcome-specific contexts are unavailable. This evidence does not establish effects of current generative AI tools.</p></div>
 <div><h3>How to assess “strongest gains”</h3><p>Choose the same outcome, age, scale and design before sorting by effect. Inspect quality and sample scope, then examine sensitivity estimates and confidence intervals. A large estimate from a small or inconsistent review is not automatically a stronger basis for a decision.</p><p>Within the included reading review, subgroup differences were not statistically significant; larger phonics point estimates should not be treated as proof of superiority. <a href="${sources.literacy.url}" target="_blank" rel="noopener">Dahl-Leonard et al.</a> </p></div>
 </div><h2>Source register</h2><p class="small muted">Open the original reports for definitions, methods and complete tables.</p><div class="source-list">${Object.entries(sources).map(([id,s])=>`<article class="source-item"><div class="source-label">${esc(s.label)}<span>${esc(s.type)}</span></div><div><h3>${esc(s.title)}</h3><p>${esc(s.scope)} <a href="${s.url}" target="_blank" rel="noopener">Original report ↗</a></p><p>${esc(s.quality)} <a href="${s.extra||s.url}" target="_blank" rel="noopener">Appraisal context ↗</a></p><p>${esc(s.context)} <a href="${s.extra||s.url}" target="_blank" rel="noopener">Study context ↗</a></p></div></article>`).join("")}</div>`;
$("#export").addEventListener("click",()=>{
 const fields=["id","panel","source","finding","outcome","use","intervention","age","design","metric","effect","ci_low","ci_high","evidence_units","participants","sample_scope","country_context","quality_label","quality_note","limitations","verification","accessed","source_url","supporting_url","source_category","separate_audit_notice"];
 const quote=v=>'"'+String(v??"").replace(/"/g,'""')+'"';
 const rows=currentRows.map(r=>[r.id,["A","B"].filter(id=>panelRows[id].some(v=>v.id===r.id)).join("+"),sources[r.source].label,r.title,r.outcome,r.use,r.intervention,r.ageLabel,r.design,r.metric,r.value,r.low,r.high,r.k,r.n,r.sample,r.context,r.quality,r.qualityNote,r.note,r.status,r.observed_at,r.sourceUrl||sources[r.source].url,r.supportingUrl||sources[r.source].extra||"",sourceCategory(r.source),(recordAudit[r.id]||"").replace(/<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,"$2 ($1)").replace(/<[^>]+>/g,"")]);
 const csv="\uFEFF"+[fields,...rows].map(row=>row.map(quote).join(",")).join("\r\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
 a.href=url;a.download="screen-use-academic-evidence.csv";a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
 $("#toast").textContent=`CSV prepared: ${rows.length} findings with source URLs and limitations.`;$("#toast").style.display="block";setTimeout(()=>$("#toast").style.display="none",4500);
});
preset("primary");
