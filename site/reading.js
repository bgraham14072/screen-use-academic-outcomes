// Curated narrative evidence. Never pooled with the numerical evidence register.
const earlyReading = [
  {
    source: "furenes", design: "synthesis", outcomes: ["comprehension", "vocabulary"],
    comparison: "Digital versus paper storybooks, with analyses of design features, dictionaries and adult support. Support conditions differ across comparisons.",
    features: "Simple digitization, story-congruent enhancements and embedded dictionaries are distinct conditions.",
    adult: "Adult-mediated print reading versus independent enhanced digital reading is not a matched-adult-support comparison.",
    takeaway: "The feature and the outcome change the answer.",
    caution: "Dictionary support benefited vocabulary but did not benefit story comprehension. Do not transfer a vocabulary finding to comprehension.",
    application: "For comprehension, consider whether an enhancement clarifies the story. For vocabulary, evaluate word learning separately and preserve conversation.",
    reviewed: "Publisher article and abstract checked. Review of Educational Research, 2021. No independent formal quality appraisal."
  },
  {
    source: "takacs", design: "synthesis", outcomes: ["comprehension", "vocabulary"],
    comparison: "Technology-enhanced stories versus more traditional story presentations. This is broader than today's tablet e-books alone.",
    features: "Multimedia, such as animated pictures and sound, is distinguished from interactive hotspots, games and dictionary functions.",
    adult: "Traditional comparison conditions vary in adult support. The pooled contrast does not hold adult instruction constant.",
    takeaway: "Multimedia and interactivity are not interchangeable.",
    caution: "Individual feature effects and how well features fit the story could not be isolated reliably. An overall benefit is not a product endorsement.",
    application: "Preview the exact book. Ask which feature serves understanding, and remove interruptions rather than assuming every interactive element helps.",
    reviewed: "Publisher PDF abstract and available findings/limitations excerpts checked. Review of Educational Research, 2015. No independent formal quality appraisal."
  },
  {
    source: "segal", design: "primary", outcomes: ["word-reading", "print-concepts", "phonological"],
    comparison: "Four randomized groups: independent e-book, adult-instructed e-book, adult-instructed print and regular kindergarten. Each reading intervention had four sessions.",
    features: "A particular educational e-book plus instruction. The study does not isolate one digital feature from the instructional package.",
    adult: "Both digital and print adult-instructed groups were included. The abstract does not establish equivalent instructional quality or fidelity across formats.",
    takeaway: "A digital-plus-adult approach can be worth testing.",
    caution: "Advantages over adult-instructed print were reported for word reading and concepts about print, not for every measured skill. Long-term transfer is not established.",
    application: "Compare adult-supported digital and print approaches to the same skill. Check learning outside the tool, not just successful screen interaction.",
    reviewed: "Publisher abstract only. Reading and Writing, 2010 (online 2009). Full methods and risk of bias have not been appraised here."
  },
  {
    source: "munzer", design: "primary", outcomes: ["interaction"],
    comparison: "The same 37 parent–toddler pairs read print, basic electronic and enhanced electronic books in counterbalanced orders, five minutes per condition.",
    features: "Specific commercial tablet books, including sound/hotspot enhancements. Automatic story narration was disabled.",
    adult: "Parents participated in every condition. Format-related talk and dialogic interaction were observed, not inferred from adult presence alone.",
    takeaway: "A device can get in the way of shared reading.",
    caution: "These are interaction and collaboration outcomes in toddlers, not long-term achievement effects or evidence about all kindergarten e-books.",
    application: "Watch what the adult and child actually do together. If managing the interface displaces story talk, simplify the format or use print.",
    reviewed: "Open-access article: abstract and methods checked. Pediatrics, 2019. No independent formal risk-of-bias rating."
  }
];
const readingOutcomes = {
  comprehension: "Story comprehension", vocabulary: "Vocabulary",
  "word-reading": "Word reading", "print-concepts": "Concepts about print",
  phonological: "Phonological awareness", interaction: "Adult–child interaction"
};
const readingLink = (id, place) => `<a data-testid="link-reading-${place}-${id}" href="${esc(practiceSources[id].url)}" target="_blank" rel="noopener">${esc(practiceSources[id].label)} ↗</a>`;
$("#reading").innerHTML = `<div class="practice-top"><div class="eyebrow">FEATURES · ADULT SUPPORT · OUTCOMES</div><h2 id="reading-heading" tabindex="-1">Balanced Early-Reading Evidence</h2><p>Four peer-reviewed publications explore when digital features help, when print performs better and how adult support changes the comparison. Read the comparator before applying a result.</p></div>
<aside class="caution"><span class="caution-title">Not a verdict on screens</span><span>This is a purposive collection, not a systematic review. Studies may overlap across reviews. Do not add participant totals, count these as four independent replications, or treat interaction measures as achievement scores.</span></aside>
<div class="reading-filterbar">
<label class="filter" for="reading-outcome">Learning outcome<select id="reading-outcome" data-testid="select-reading-outcome"><option value="">All outcomes</option>${Object.entries(readingOutcomes).map(([id,label])=>`<option value="${id}">${label}</option>`).join("")}</select></label>
<label class="filter" for="reading-design">Study design<select id="reading-design" data-testid="select-reading-design"><option value="">All designs</option><option value="synthesis">Meta-analyses</option><option value="primary">Primary studies</option></select></label>
<button class="outlined" id="reset-reading" data-testid="button-reset-reading">Reset collection filters</button></div>
<p id="reading-count" class="small muted" role="status"></p><div id="reading-results"></div>
<div class="reflection-foundation"><h3>Adult mediation means more than presence</h3><p>Look for questions, explanations, turn-taking and feedback rather than simply recording that an adult was nearby. Munzer et al. observed different interactions even when parents participated in every reading condition. ${readingLink("munzer","mediation")}</p><p class="small muted">Research collection checked 17 November 2026. No new effect estimates or quality grades are added to the original register. The guidance labeled “Planning implication” is our interpretation, not a tested lesson.</p></div>`;

function renderReading() {
  const outcome=$("#reading-outcome").value, design=$("#reading-design").value;
  const records=earlyReading.filter(r=>(!outcome||r.outcomes.includes(outcome))&&(!design||r.design===design));
  $("#reading-count").textContent=`${records.length} of ${earlyReading.length} publications shown · Samples are not summed`;
  $("#reading-results").innerHTML=records.length?records.map(r=>{
    const s=practiceSources[r.source];
    return `<article class="reading-record" id="reading-${r.source}" tabindex="-1" data-testid="reading-record-${r.source}">
      <div class="reading-record-head"><div><div class="provenance">${r.design==="synthesis"?"META-ANALYSIS":"PRIMARY STUDY"} · PEER-REVIEWED</div><h3>${esc(s.label)}</h3><p class="small muted">${esc(s.title)}</p></div>${readingLink(r.source,"record")}</div>
      <p class="reading-takeaway">${esc(r.takeaway)}</p>
      <p class="small"><b>Population and scope:</b> ${esc(s.scope)} ${readingLink(r.source,"scope")}</p>
      <p class="small muted">Outcomes: ${r.outcomes.map(o=>readingOutcomes[o]).join(" · ")}</p>
      <div class="reading-comparison"><div><h4>Reported findings</h4><p>${esc(s.finding)} ${readingLink(r.source,"findings")}</p></div><div class="reading-caution"><h4>Keep the limits in view</h4><p>${esc(r.caution)} ${readingLink(r.source,"caution")}</p></div></div>
      <details class="research-context"><summary data-testid="button-reading-detail-${r.source}">Comparison, adult support and appraisal</summary><div class="reading-comparison"><div><h4>What was compared?</h4><p>${esc(r.comparison)} ${readingLink(r.source,"compare")}</p><h4>Digital features</h4><p>${esc(r.features)} ${readingLink(r.source,"features")}</p></div><div><h4>Adult support</h4><p>${esc(r.adult)} ${readingLink(r.source,"adult")}</p><h4>Appraisal limits</h4><p>${esc(s.limits)} ${readingLink(r.source,"limits")}</p></div></div><p class="small muted">Review depth: ${esc(r.reviewed)}</p></details>
      <div class="reading-application"><span class="provenance">PLANNING IMPLICATION · NOT A TESTED LESSON</span><p>${esc(r.application)}</p><button class="outlined" data-testid="button-use-reading-${r.source}" data-reading-source="${r.source}">Use this reference in an explanation →</button></div>
    </article>`;
  }).join(""):`<div class="empty"><strong>No publications match both filters.</strong><p>Try another outcome or include both study designs.</p><button data-testid="button-empty-reading-reset" id="empty-reading-reset">Reset collection filters</button></div>`;
  $("#empty-reading-reset")?.addEventListener("click",resetReading);
  document.querySelectorAll("[data-reading-source]").forEach(b=>b.addEventListener("click",()=>{
    $("#added-source").value=b.dataset.readingSource;invalidateExplanation();
    $("#added-status").textContent="Reference selected. Your notes are unchanged. Build the explanation to include it.";
    setTab("added");$("#added-heading").focus();
  }));
}
function resetReading() {$("#reading-outcome").value="";$("#reading-design").value="";renderReading();}
$("#reading-outcome").addEventListener("change",renderReading);
$("#reading-design").addEventListener("change",renderReading);
$("#reset-reading").addEventListener("click",resetReading);

const addedFields=[
  ["goal","Learning objective","Describe what students should understand or do, independently of the device."],
  ["learners","Learners and context","Record age, relevant needs and setting. Do not enter names or confidential information."],
  ["feature","Specific contribution to investigate","Name the feature and how it might support the objective. Engagement or convenience alone is not evidence of learning."],
  ["adult","Teacher or adult contribution","Describe explanation, questioning, feedback and interaction. Which parts depend on the adult rather than the technology?"],
  ["alternative","Comparable non-digital instruction","Describe a realistic approach to the same objective, with comparable time, adult support and assessment. Note differences you cannot control."],
  ["preserve","Learning experiences to preserve","Explain what happens to meaningful reading, writing, discussion, teacher interaction and relevant hands-on work."],
  ["local","What is demonstrated here?","Separate observations from assumptions. If no local learning evidence exists, say so. A selected study does not validate your lesson."],
  ["transfer","“Show-me” transfer test (after the app is closed)","Can students remember, explain and apply what they learned without the app open and after time has passed? Describe the off-screen task or check you will use."],
  ["review","Review and stopping criteria","Identify independent learning, retention or transfer to check, who will review it and when. What would lead you to change or discontinue this use?"]
];
const roleOptions={
  objective:"Technology is part of the learning objective",
  support:"A feature may support a non-digital objective",
  convenience:"Convenience without demonstrated learning benefit",
  uncertain:"Role or added value is not yet clear"
};
const personalizationPrompts=[
 ["level","Actual student level","What evidence shows that practice matches current understanding rather than only the enrolled grade?"],
 ["action","Teacher action","What will the teacher do differently in response to the diagnostic information?"],
 ["subject","Subject-specific goal","Which defined knowledge or skill is targeted, and why is this approach suitable for it?"],
 ["support","Implementation support","What preparation, coaching, time and access are needed, and are they available?"],
 ["independent","Independent learning check","What assessment outside the vendor’s platform will check learning, transfer and differences across learners?"]
];
const billUrl="https://www.nysenate.gov/legislation/bills/2025/S10685";
$("#added").innerHTML=`<div class="practice-top"><div class="eyebrow">EXPLAIN THE CHOICE, NOT THE DEVICE</div><h2 id="added-heading" tabindex="-1">Instructional Added Value</h2><p>A goal can be taught without a device and still merit a careful comparison of digital and non-digital approaches. Use this panel to explain a proposed contribution, its evidence and the conditions for continuing it.</p></div>
<div class="role-grid">
<div><h3>Technology as the objective</h3><p>For example, learning to operate a digital tool. Describe the actual skill, not just the presence of a screen.</p></div>
<div><h3>Technology as a support</h3><p>For example, a story feature that may clarify meaning. Ask whether it adds value beyond equivalent instruction without it.</p></div>
<div><h3>Convenience is a separate claim</h3><p>Easier distribution or attractive presentation may be useful. Neither establishes better learning.</p></div></div>
<aside class="caution"><span class="caution-title">Instructional rationale, not legal clearance</span><span>Proposed §37 protects uses “inherent to the learning objective,” along with other specified exceptions. It does not expressly equate that phrase with every learning improvement. <a data-testid="link-added-bill" href="${billUrl}" target="_blank" rel="noopener">S10685, §37 ↗</a> This tool cannot determine eligibility, compliance or effectiveness. Bill context checked 17 November 2026; seek current guidance and counsel.</span></aside>
<aside class="caution"><span class="caution-title">Engagement ≠ transfer: the off-screen “show-me” check</span><span>A professional-association evidence synthesis from the American Psychological Association (released September 3, 2026, Recommendation 2) cautions that enjoyment, streaks and in-app completion do not establish learning. Stronger planning asks for off-screen “show me” checks: can students remember, explain and apply what they learned after the app is closed and after time has passed? <a data-testid="link-added-apa" href="https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf" target="_blank" rel="noopener">APA report (Sept. 3, 2026, p. 5) ↗</a></span></aside>
<details class="research-context"><summary data-testid="button-added-example">See an illustrative early-reading rationale</summary><p class="example-rationale">“Our objective is understanding story events, not operating a tablet. Shared print reading is a reasonable alternative. We propose investigating a story-relevant digital feature alongside adult questioning, not replacing conversation. We will compare the approaches using similar time and adult support, and check understanding through an independent retelling after the app is closed. We will change the approach if the feature distracts students or adds no observable value.”</p><p class="small muted">This is an editorial example, not a tested lesson or a statement of legal protection.</p></details>
<div class="added-workspace"><form id="added-form" autocomplete="off"><h3>Your instructional explanation</h3><p class="small muted">Notes stay in this open page only. Switching tabs preserves them; reloading clears them. Download before leaving. No notes are submitted to a server, and no AI or numerical rating is used.</p>
${addedFields.slice(0,2).map(([id,label,hint])=>addedField(id,label,hint)).join("")}
<label class="reflection-field" for="added-role"><span>How are you using technology?</span><small>Descriptive planning categories, not legal classifications.</small><select id="added-role" data-testid="select-added-role"><option value="">Choose a role</option>${Object.entries(roleOptions).map(([id,label])=>`<option value="${id}">${label}</option>`).join("")}</select></label>
${addedFields.slice(2).map(([id,label,hint])=>addedField(id,label,hint)).join("")}
<label class="reflection-field" for="added-source"><span>Research reference</span><small>Include the selected finding and its limitations. A reference does not prove your proposed approach works.</small><select id="added-source" data-testid="select-added-source"><option value="">No reference selected</option>${[...earlyReading.map(r=>r.source),"apa2026"].map(src=>`<option value="${src}">${esc(practiceSources[src].label)}</option>`).join("")}</select></label>
<details class="personalization-prompts"><summary>Optional: five checks for personalized or differentiated instruction</summary><p>Planning prompts informed by contrasting studies, not a validated checklist or legal certification. <a href="#q16-worth-it">Read Question 16 and its evidence</a>.</p>${personalizationPrompts.map(([id,label,hint])=>addedField("personal-"+id,label+" (optional)",hint)).join("")}</details>
<div class="reflection-actions"><button type="submit" class="primary-action" data-testid="button-build-explanation">Build explanation</button><button type="button" id="clear-added" class="outlined" data-testid="button-clear-added">Clear explanation notes</button></div>
<div class="clear-prompt" id="clear-added-prompt" hidden><p>Clear the inputs, reference and built explanation? Download first to keep a copy.</p><button type="button" class="outlined" data-testid="button-cancel-added" id="cancel-added">Keep notes</button><button type="button" class="outlined" data-testid="button-confirm-added" id="confirm-added">Yes, clear notes</button></div>
<p id="added-status" role="status" class="small"></p></form>
<aside class="explanation-preview"><div class="provenance">YOUR NOTES + ATTRIBUTED EVIDENCE</div><h3>A transparent rationale</h3><p class="small muted">The draft uses your words and the selected research summary. Missing information stays visible; it does not fill gaps or issue a recommendation.</p><div id="explanation-empty" class="empty">Complete the prompts, then build an explanation. You can also build a blank planning template.</div><div id="explanation-output" hidden></div><button class="outlined" id="download-added" data-testid="button-download-added" disabled>Download explanation ↓</button><p class="small muted">Markdown download includes source URLs and limitations.</p><button class="textbutton" data-testid="button-added-reflection" onclick="setTab('reflection')">Open the opportunity-cost check →</button></aside></div>`;
function addedField(id,label,hint) {
  return `<label class="reflection-field" for="added-${id}"><span>${esc(label)}</span><small>${esc(hint)}</small><textarea id="added-${id}" data-testid="input-added-${id}" rows="3"></textarea></label>`;
}
let explanationText="";
function invalidateExplanation() {
  explanationText="";$("#download-added").disabled=true;
  $("#explanation-output").hidden=true;$("#explanation-empty").hidden=false;
  $("#explanation-empty").textContent="Inputs changed. Build the explanation to include the current notes and reference.";
  $("#added-status").textContent="Draft not current. Rebuild before downloading.";
}
$("#added-form").addEventListener("input",invalidateExplanation);
$("#added-form").addEventListener("change",invalidateExplanation);
$("#added-form").addEventListener("submit",e=>{
  e.preventDefault();
  const values=Object.fromEntries(addedFields.map(([id])=>[id,$(`#added-${id}`).value.trim()]));
  const role=roleOptions[$("#added-role").value]||"[Role not yet recorded]";
  const id=$("#added-source").value,s=practiceSources[id];
  const missing=addedFields.filter(([id])=>!values[id]).length+(!$("#added-role").value?1:0)+(!s?1:0);
  const sections=[
    ["Planning status",missing?`Incomplete planning draft: ${missing} field(s) or reference not recorded. This is not an endorsement or an effectiveness finding.`:"Planning draft with all fields populated. Completeness does not establish quality, effectiveness or legal eligibility."],
    ["Instructional rationale · user-entered",`Learning objective: ${values.goal||"[Not yet recorded]"}\nLearners and context: ${values.learners||"[Not yet recorded]"}\nUser-described role: ${role}\nProposed contribution to investigate: ${values.feature||"[Not yet recorded]"}\nAdult contribution: ${values.adult||"[Not yet recorded]"}`],
    ["Fair comparison · user-entered",`Non-digital approach: ${values.alternative||"[Not yet recorded]"}\nLearning experiences to preserve: ${values.preserve||"[Not yet recorded]"}`],
    ["Research context · source-reported",s?`${s.label}\n${s.scope}\n\n${s.finding}\n\nLimits: ${s.limits}\n\nReference: ${s.url}`:"No research reference selected. No research-supported benefit is asserted."],
    ["Local evidence, transfer test and review · user-entered",`What is demonstrated here: ${values.local||"[No local evidence recorded]"}\n“Show-me” transfer test (after the app is closed: remember, explain and apply): ${values.transfer||"[Not yet recorded]"}\nReview and stopping criteria: ${values.review||"[Not yet recorded]"}`],
    ["Unresolved questions","Does the evidence match the learners, feature, adult support and measured outcome? Was the non-digital comparison equally well taught? Could any difference reflect instruction rather than technology? A local observation alone does not establish causation."],
    ["Legal and interpretation boundary",`This is an instructional planning document, not a legal classification, validated rating or proof that the lesson works. Research on possible learning benefits does not determine whether a use is “inherent to the learning objective” under proposed legislation.\nBill context checked 17 November 2026: ${billUrl}\nConsult current guidance and counsel. No legal protection is implied.`]
  ];
  sections.splice(5,0,["Personalization checks · optional user notes",personalizationPrompts.map(([id,label])=>`${label}: ${$(`#added-personal-${id}`).value.trim()||"[Optional; not recorded]"}`).join("\n")]);
  const plainSections=sections.map(([heading,text])=>`## ${heading}\n\n${text}`).join("\n\n");
  explanationText=`# Instructional Added Value\n\n${plainSections}\n\nDashboard: https://bgraham14072.github.io/screen-use-academic-outcomes/\n`;
  $("#explanation-output").innerHTML=sections.map(([heading,text])=>`<section><h4>${esc(heading)}</h4><p>${esc(text)}</p>${heading==="Research context · source-reported"&&s?readingLink(id,"draft"):""}</section>`).join("");
  $("#explanation-output").hidden=false;$("#explanation-empty").hidden=true;$("#download-added").disabled=false;
  $("#added-status").textContent=missing?`Planning template built with ${missing} missing field(s) or reference. Gaps remain marked.`:"Explanation built. Review the claims and limitations before sharing.";
  $("#explanation-output").scrollIntoView({block:"start",behavior:"smooth"});
});
$("#download-added").addEventListener("click",()=>{
  if(!explanationText)return;
  const url=URL.createObjectURL(new Blob([explanationText],{type:"text/markdown;charset=utf-8"})),a=document.createElement("a");
  a.href=url;a.download="instructional-added-value-explanation.md";a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);
  $("#added-status").textContent="Explanation download prepared. Keep the file to preserve your notes.";
});
$("#clear-added").addEventListener("click",()=>{$("#clear-added-prompt").hidden=false;$("#cancel-added").focus();});
$("#cancel-added").addEventListener("click",()=>{$("#clear-added-prompt").hidden=true;$("#clear-added").focus();});
$("#confirm-added").addEventListener("click",()=>{
  $("#added-form").reset();invalidateExplanation();$("#clear-added-prompt").hidden=true;
  $("#explanation-empty").textContent="Complete the prompts, then build an explanation. You can also build a blank planning template.";
  $("#added-status").textContent="Notes, reference and draft cleared.";$("#added-goal").focus();
});
renderReading();
