// Narrative evidence and proposed applications are not quantitative register rows.
const practiceSources = {
  campbell: {
    id: "campbell", label: "Dorris et al. · 2024",
    title: sources.campbell.title, url: sources.campbell.url,
    type: "Existing register · systematic review & meta-analysis",
    scope: "18 randomized studies; 11,126 pupils aged 4–12. UK, Malawi, USA, Netherlands, Turkey and Cambodia.",
    finding: "Mobile literacy and numeracy interventions showed a small average benefit compared with usual activities or alternative devices; the sensitivity estimate after removing high-risk studies had a confidence interval including zero.",
    limits: "RoB 2: 13 studies with some concerns and five at high risk. This is a joint literacy/numeracy result, not a separate math effect. Different interventions and comparators do not isolate a device-only contribution.",
    accessed: "17 November 2026"
  },
  furenes: {
    id: "furenes", label: "Furenes, Kucirkova & Bus · 2021",
    title: "A Comparison of Children’s Reading on Paper Versus Screen: A Meta-Analysis",
    url: "https://journals.sagepub.com/doi/full/10.3102/0034654321998074",
    type: "Additional research · meta-analysis",
    scope: "39 studies in 30 articles; 1,812 children aged 1–8. Includes preschool as well as early primary ages; not primary-only. Country breakdown not extracted.",
    finding: "Simple digitization was associated with lower story comprehension than paper, while story-congruent enhancements favored digital books. Adult-mediated print reading outperformed independently read enhanced digital books. Dictionary features could help vocabulary without helping story comprehension.",
    limits: "Results depend on the outcome, book features and adult support in the comparison. They do not establish that every digital book is better or worse. No formal review-quality rating was extracted; none is assigned here.",
    accessed: "17 November 2026"
  },
  eef: {
    id: "eef", label: "EEF / OpenDevEd · 2025",
    title: "Harnessing the potential of EdTech: a new review on the How",
    url: "https://educationendowmentfoundation.org.uk/news/effectiveness-of-edtech-reflections-from-new-review",
    type: "Additional research · commissioned evidence-review summary",
    scope: "Mixed-method review: systematic review and meta-analysis plus practitioner input. Phase 2 mapped 189 studies. Participant total, country distribution and age-specific effects are not supplied in the accessed summary.",
    finding: "The review identifies mechanisms that may contribute to effectiveness, including grounding technology in pedagogy, dynamic feedback, adaptive teaching, inclusion and collaborative learning. Average effects for disadvantaged pupils were lower, with a smaller evidence base.",
    limits: "Mechanism groups combine research and practitioner interpretation, not isolated causal tests of each feature. This is the EEF summary, not an independently appraised full-review extraction. No new quality grade or writing-specific effect is assigned.",
    accessed: "17 November 2026"
  },
  oecd2025: {
    id: "oecd2025", label: "Forsström et al. / OECD · 2025",
    title: "The impact of digital technologies on students’ learning: Results from a literature review",
    url: "https://www.oecd.org/en/publications/the-impact-of-digital-technologies-on-students-learning_9997e7b3-en.html",
    type: "Additional research · literature-review working paper",
    scope: "Synthesis drawing on systematic reviews, meta-analyses and empirical studies across digital tools. No single participant total or primary-only pooled effect is given in the accessed abstract.",
    finding: "Access to technology alone does not guarantee educational gain; successful digitalisation requires pedagogical as well as technical solutions.",
    limits: "Used for framing, not as an independent effect estimate. This entry summarizes the publisher abstract, not a full methodological appraisal. It does not identify an optimal screen-time dose.",
    accessed: "17 November 2026"
  },
  worner: {
    id: "worner", label: "Wörner, Kuhn & Scheiter · 2022",
    title: "The Best of Two Worlds: A Systematic Review on Combining Real and Virtual Experiments in Science Education",
    url: "https://journals.sagepub.com/doi/pdf/10.3102/00346543221079417",
    type: "Additional research · systematic review",
    scope: "42 experimental studies; elementary through university/postgraduate settings. Total participant N and country breakdown not extracted.",
    finding: "In most cases, combining real and virtual experiments supported conceptual understanding better than one experiment type alone. The review found no evidence that one sequence was consistently superior.",
    limits: "A narrative synthesis, not a pooled effect size. Mixed educational levels do not establish a primary-only effect. Conceptual understanding is not a complete measure of laboratory skill; no formal risk-of-bias grade was extracted.",
    accessed: "17 November 2026"
  },
  putica: {
    id: "putica", label: "Putica & Stanišić · 2026",
    title: "Impact of virtual and hands-on laboratory experimentation on the acquisition of conceptual science knowledge: a meta-analysis",
    url: "https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1869632/full",
    type: "Additional research · meta-analysis",
    scope: "43 studies from 2005–2025: three elementary, 20 secondary and 20 university. Europe, Asia, North America and Africa; participant total not extracted.",
    finding: "The pooled comparison favored virtual over hands-on laboratories for conceptual science knowledge. This review did not pool blended virtual-plus-hands-on instruction.",
    limits: "High heterogeneity (I² ≈ 88%); 41 potentially eligible full texts could not be retrieved. Authors used a JBI checklist and identified limitations in 14 studies. Only three elementary studies; conceptual outcomes cannot establish superiority for practical skills or all primary classrooms.",
    accessed: "17 November 2026"
  }
};

const practiceCases = [
  {
    id: "reading", subject: "Reading", title: "Choose features that serve the story", age: "Early childhood / early primary",
    research: [
      {source: "furenes", text: "In a meta-analysis of children aged 1–8, simple digitization favored paper for story comprehension, while story-congruent digital enhancements favored digital books."},
      {source: "furenes", text: "Adult-mediated print reading outperformed enhanced digital books read independently; vocabulary and comprehension did not respond identically to dictionary features."}
    ],
    caveat: "These are comparisons of specific book features and support conditions. They are not proof that screens inherently harm reading, nor a primary-only estimate.",
    goal: "Explain a story’s events, character motives and meaning.",
    strategy: "Shared reading with purposeful pauses, questions and a retelling.",
    contribution: "A relevant animation or explanation could make a difficult story event clearer. Select it for that purpose rather than for novelty.",
    teacher: "Preview the book, remove distracting features where possible, guide discussion and check what the child understood.",
    alternative: "Read the same story in print, use illustrations or props, and provide comparable adult questions and explanations.",
    protect: "Keep sustained reading and adult-child conversation. Do not let tapping or vocabulary pop-ups fragment the story.",
    observe: "Ask for an independent retelling and an explanation of a character’s action; check vocabulary separately."
  },
  {
    id: "math", subject: "Math", title: "Connect practice, feedback and explanation", age: "Primary school · ages 4–12",
    research: [
      {source: "campbell", text: "The primary-school mobile-device review reported a small combined literacy/numeracy benefit over usual activities or alternative devices; after high-risk studies were removed, the confidence interval included zero."},
      {source: "eef", text: "The EEF review identifies adaptive teaching and dynamic feedback as mechanisms that may contribute to effective educational technology use."}
    ],
    caveat: "The mobile review does not isolate a math-only effect or prove that adaptive feedback caused the pooled benefit. The example here is a proposed application, not one of its validated intervention packages.",
    goal: "Explain a mathematical relationship and apply it to a new problem.",
    strategy: "Targeted practice followed by error analysis, explanation and a transfer task.",
    contribution: "A well-matched tool could supply timely feedback and reveal recurring errors for the teacher to investigate.",
    teacher: "Choose the target skill, review errors, ask students to explain their reasoning and reteach misconceptions.",
    alternative: "Use manipulatives, paper problems and teacher-led small-group feedback on the same learning goal.",
    protect: "Retain mathematical talk, written reasoning and concrete representations. Avoid replacing the whole lesson with answer-entry practice.",
    observe: "Use a new problem outside the app and ask students to explain why their method works, then revisit the skill later."
  },
  {
    id: "science", subject: "Science", title: "Give simulations and hands-on work distinct jobs", age: "Mixed school and higher-education evidence",
    research: [
      {source: "worner", text: "A review of 42 experimental studies found that combining real and virtual experiments usually supported conceptual understanding better than one type alone, with no consistently superior sequence."},
      {source: "putica", text: "A 2026 meta-analysis favored virtual over hands-on laboratories for conceptual science knowledge, but included only three elementary studies and did not pool blended instruction."}
    ],
    caveat: "The reviews answer different questions, and their studies may overlap. Neither establishes that simulations replace every purpose of practical work or identifies the best approach for every primary classroom.",
    goal: "Explain how changing a variable changes an observed phenomenon.",
    strategy: "Predict, investigate, compare observations and explain using evidence.",
    contribution: "A simulation could make an invisible process visible or allow repeated changes to one variable.",
    teacher: "Connect the model to the real phenomenon, explain where the model simplifies reality and guide evidence-based discussion.",
    alternative: "Use a safe physical investigation, teacher demonstration, diagrams and a comparable prediction-and-explanation task.",
    protect: "Reserve time for handling materials, observing real variation, recording results and discussing evidence when those are learning goals.",
    observe: "Assess the explanation separately from practical competence. If using both modes, ask what each contributed."
  },
  {
    id: "feedback", subject: "Across subjects", title: "Keep feedback in the teacher’s instructional cycle", age: "School-level guidance · not a writing-specific effect",
    research: [
      {source: "eef", text: "The EEF synthesis highlights pedagogy, feedback, adaptive teaching, collaboration and inclusion as potentially important mechanisms, while noting less certain evidence for disadvantaged learners."},
      {source: "oecd2025", text: "The OECD literature review concludes that technology access alone does not guarantee educational gains; pedagogical solutions are also needed."}
    ],
    caveat: "These syntheses inform design questions. They do not validate the writing example below or establish that a particular feedback tool improves writing.",
    goal: "Revise an explanation or argument and explain why the revision is stronger.",
    strategy: "Use clear success criteria, actionable feedback, student revision and teacher conferencing.",
    contribution: "A digital tool could help organize drafts or make feedback available between conferences, if its feedback is accurate and useful.",
    teacher: "Check feedback quality, model revision, maintain authorship and provide targeted human feedback.",
    alternative: "Use paper drafts, a focused rubric, peer response and a teacher conference.",
    protect: "Keep substantial student writing, dialogue and productive thinking. Do not substitute automated completion for the work being learned.",
    observe: "Compare original and revised work, ask the student to explain changes, and assess a later independent task."
  }
];
const sourceLink = id => `<a href="${esc(practiceSources[id].url)}" target="_blank" rel="noopener" data-testid="link-practice-${id}">${esc(practiceSources[id].label)} ↗</a>`;
function sourceEntry(s) {
  return `<article class="source-item"><div class="source-label">${esc(s.label)}<span>${esc(s.type)}</span></div><div><h3>${esc(s.title)}</h3>
  <p>${esc(s.scope)} ${sourceLink(s.id)}</p><p>${esc(s.finding)} ${sourceLink(s.id)}</p>
  <p><b>Limits / appraisal:</b> ${esc(s.limits)} ${sourceLink(s.id)}</p><p class="small">Accessed ${esc(s.accessed)}. Narrative context, not an added numerical estimate.</p></div></article>`;
}
$("#practice").innerHTML = `<div class="practice-top"><div class="eyebrow">FROM EVIDENCE TO INSTRUCTION</div><h2>Research to Classroom Practice</h2>
<p>Start with the learning goal, then ask what the technology contributes. The findings are source-reported; the classroom applications are illustrative suggestions, not tested lesson packages.</p></div>
<div class="practice-toolbar"><label class="filter" for="practice-focus">Learning focus<select id="practice-focus" data-testid="select-practice-focus">${practiceCases.map(c=>`<option value="${c.id}">${esc(c.subject)} · ${esc(c.title)}</option>`).join("")}</select></label><span class="small muted">Four practice lenses · five additional research sources</span></div>
<div id="practice-case" aria-live="polite"></div>
<details class="research-context"><summary data-testid="button-practice-sources">Supporting research and interpretation limits</summary><p class="small muted">This purposive update was checked on 17 November 2026, not conducted as an exhaustive systematic review. Sources may overlap with one another or with existing umbrella reviews. They are not pooled or ranked. Original estimate counts and CSV remain unchanged.</p><div class="source-list">${Object.values(practiceSources).map(sourceEntry).join("")}</div></details>`;

function renderPractice() {
  const c = practiceCases.find(c=>c.id===$("#practice-focus").value);
  $("#practice-case").innerHTML = `<div class="practice-title"><span class="micro">${esc(c.age)}</span><h3>${esc(c.title)}</h3></div>
  <div class="practice-grid">
  <article class="reported"><div class="provenance">REPORTED RESEARCH</div><h3>What the researchers found</h3>${c.research.map(r=>`<p>${esc(r.text)} ${sourceLink(r.source)}</p>`).join("")}<div class="practice-limit"><h4>What this does not establish</h4><p>${esc(c.caveat)}</p></div>${c.id==="math"?'<button class="outlined" data-detail="D1" data-testid="button-practice-estimate">Inspect original estimate</button>':""}</article>
  <article class="application"><div class="provenance">ILLUSTRATIVE APPLICATION · NOT TESTED HERE</div><h3>A possible classroom approach</h3><dl class="practice-fields">${[["Learning goal","goal"],["Instructional strategy","strategy"],["Possible contribution of technology","contribution"],["Teacher’s role","teacher"],["Reasonable alternative without technology","alternative"]].map(([label,key])=>`<div><dt>${label}</dt><dd>${esc(c[key])}</dd></div>`).join("")}</dl></article></div>
  <div class="practice-bridge"><div><h3>What to preserve</h3><p>${esc(c.protect)}</p></div><div><h3>What to look for</h3><p>${esc(c.observe)}</p></div></div>
  <div class="practice-action"><button class="primary-action" id="use-practice" data-testid="button-use-practice">Use this focus in the reflection check →</button><p class="small muted">Carries the focus and its references, not a score or a prescribed answer. Existing notes stay intact.</p></div>`;
  $("#use-practice").addEventListener("click",()=>{
    reflectionFocus=c.id;
    $("#check-focus").textContent=`Selected focus: ${c.subject} · ${c.title}`;
    $("#reflection-status").textContent="Focus updated. Your notes have not been changed.";
    setTab("reflection");$("#reflection-heading").focus();
  });
}
$("#practice-focus").addEventListener("change",renderPractice);
renderPractice();

let reflectionFocus="";
const reflectionFields = [
  ["lesson","Proposed lesson or technology use","Name the learning goal, learners and proposed use. Avoid student names or confidential information."],
  ["strengthen","What learning activity does this use strengthen?","Describe the activity and the specific contribution you expect from technology, not simply that students will be engaged."],
  ["otherwise","What would students otherwise be doing?","Name a realistic alternative using comparable learning time. Would this supplement, replace or reorganize it?"],
  ["reading","Meaningful reading","How will students sustain attention, make meaning and discuss what they read?"],
  ["writing","Meaningful writing","What will students compose, revise or explain themselves?"],
  ["discussion","Discussion","Where will students question, explain and respond to one another?"],
  ["interaction","Teacher interaction","What direct teaching, feedback or conferencing will remain?"],
  ["hands","Hands-on work","What physical exploration or practice will remain when relevant? If not relevant to this goal, say why."],
  ["evidence","What evidence of learning would justify continuing it?","Identify independent work, explanation, transfer or retention to review. Note whose learning to check, when to review it and what would prompt a change."]
];
function noteField(id,label,hint) {
  return `<label class="reflection-field" for="note-${id}"><span>${esc(label)}</span><small id="hint-${id}">${esc(hint)}</small><textarea id="note-${id}" data-testid="input-note-${id}" aria-describedby="hint-${id}" rows="${["lesson","reading","writing","discussion","interaction","hands"].includes(id)?2:3}"></textarea></label>`;
}
$("#reflection").innerHTML=`<div class="practice-top"><div class="eyebrow">A REFLECTION TOOL, NOT A RATING</div><h2 id="reflection-heading" tabindex="-1">Added Value and Opportunity Cost</h2>
<p>Consider what the proposed use adds and what it may replace. Reading, writing and discussion can happen with or without screens; judge the learning experience, not the device alone.</p></div>
<aside class="caution"><span class="caution-title">No score or verdict</span><span>These are planning prompts, not a validated assessment or a quantified estimate of displacement harm. A completed check does not establish effectiveness.</span></aside>
<div class="reflection-context"><p id="check-focus">No practice focus selected. You can reflect on any proposed use.</p><p class="small muted">Notes stay only in this open page. Switching tabs preserves them; reloading or closing clears them. Download a copy before leaving. Notes are not submitted to a server.</p></div>
<form id="reflection-form" autocomplete="off">${reflectionFields.slice(0,3).map(f=>noteField(...f)).join("")}
<fieldset class="preserve"><legend>Does it preserve meaningful learning experiences?</legend><p class="small muted">Describe what stays, what changes and why. Not every experience must occur in every lesson.</p><div class="preserve-grid">${reflectionFields.slice(3,8).map(f=>noteField(...f)).join("")}</div></fieldset>
${noteField(...reflectionFields[8])}
<div class="reflection-actions"><button type="button" class="primary-action" id="download-reflection" data-testid="button-download-reflection">Download reflection notes ↓</button><button type="button" class="outlined" id="clear-reflection" data-testid="button-clear-reflection">Clear notes</button></div>
<div id="clear-prompt" class="clear-prompt" hidden><p>Clear all notes and the selected focus? Download first if you want to keep a copy.</p><button type="button" class="outlined" id="cancel-clear" data-testid="button-cancel-clear">Keep notes</button><button type="button" class="outlined" id="confirm-clear" data-testid="button-confirm-clear">Yes, clear notes</button></div>
<p id="reflection-status" class="small" role="status" aria-live="polite"></p></form>
<div class="reflection-foundation"><h3>Why ask these questions?</h3><p>The EEF synthesis emphasizes pedagogy, feedback and implementation, and the OECD review cautions that access alone does not guarantee gains. ${sourceLink("eef")} ${sourceLink("oecd2025")}</p><p>Book-format comparisons and real/virtual experiment reviews examine specific alternatives, not a universal penalty for screen time. ${sourceLink("furenes")} ${sourceLink("worner")}</p></div>`;
$("#reflection-form").addEventListener("submit",e=>e.preventDefault());
$("#download-reflection").addEventListener("click",()=>{
  const c=practiceCases.find(c=>c.id===reflectionFocus);
  const refs=c?[...new Set(c.research.map(r=>r.source))]:["eef","oecd2025"];
  const text=[
    "# Added Value and Opportunity Cost",
    "Planning reflection only. No score, causal conclusion or validated rating.",
    c?`Practice focus: ${c.subject} | ${c.title}\nClassroom application is illustrative, not a tested lesson package.`:"Practice focus: User-defined.",
    ...reflectionFields.map(([id,label])=>`## ${label}\n\n${$(`#note-${id}`).value.trim()||"[Not yet recorded]"}`),
    "## Research context\n\n"+refs.map(id=>`- [${practiceSources[id].label}](${practiceSources[id].url})\n  ${practiceSources[id].limits}`).join("\n"),
    "Dashboard: https://bgraham14072.github.io/screen-use-academic-outcomes/\nResearch context checked 17 November 2026. Notes are user-entered reflections, not research findings."
  ].join("\n\n");
  const url=URL.createObjectURL(new Blob([text],{type:"text/markdown;charset=utf-8"})),a=document.createElement("a");
  a.href=url;a.download="added-value-opportunity-cost-reflection.md";a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  $("#reflection-status").textContent="Reflection download prepared. Keep the file to preserve your notes.";
});
$("#clear-reflection").addEventListener("click",()=>{$("#clear-prompt").hidden=false;$("#cancel-clear").focus()});
$("#cancel-clear").addEventListener("click",()=>{$("#clear-prompt").hidden=true;$("#clear-reflection").focus()});
$("#confirm-clear").addEventListener("click",()=>{
  $("#reflection-form").reset();reflectionFocus="";
  $("#check-focus").textContent="No practice focus selected. You can reflect on any proposed use.";
  $("#clear-prompt").hidden=true;$("#reflection-status").textContent="Notes and selected focus cleared.";
  $("#note-lesson").focus();
});
$("#methods").insertAdjacentHTML("beforeend",`<section class="practice-methods"><h2>Additional classroom-practice research</h2><p class="small muted">Added 17 November 2026. Five additional narrative sources inform the practice and reflection views. They are separate from the 29 estimates and nine source groups in the original register. No source counts or participant totals are summed across these reviews.</p><div class="source-list">${Object.values(practiceSources).filter(s=>s.id!=="campbell").map(sourceEntry).join("")}</div><p class="small muted">Reported research is attributed inline. Learning goals, strategies, technology contributions, teacher roles, alternatives and observation prompts are editorial applications. They carry no borrowed effect sizes or invented methodological ratings. Evidence does not establish a universal displacement effect or an optimal screen-time dose.</p></section>`);
