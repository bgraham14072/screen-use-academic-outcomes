// Editorial answers drawn ONLY from evidence already on the dashboard.
// Separate from the numerical register. Approval status is intentionally static.
const questionGroups=[
 {id:"questions-learning-reading",title:"LEARNING AND READING"},
 {id:"questions-wellbeing",title:"WELLBEING AND THE BIGGER PICTURE"},
 {id:"questions-equity",title:"EQUITY AND ACCESS"},
 {id:"questions-ai",title:"AI AND YOUNG LEARNERS"},
 {id:"questions-decisions",title:"MAKING DECISIONS"}
];
const questionEvidence={
 ran:["study-ran","Ran et al. · Mathematics functions, moderators and M1"],
 bettinger:["study-bettinger","Bettinger et al. · Randomized homework dosage"],
 allcott:["study-allcott","Allcott et al. · Quasi-experimental phone-pouch study"],
 letourneau:["study-letourneau","Létourneau et al. · K–12 intelligent tutoring review"],
 fernandez:["study-fernandez","Fernández-Batanero et al. · Assistive technology and inclusion"],
 vuorre:["study-vuorre","Vuorre & Przybylski · Population-level internet associations"],
 odgers:["study-odgers","Odgers & Jensen · Adolescent mental-health review"],
 D1:["record-D1","D1 · Mobile literacy & numeracy lessons"],
 D2:["record-D2","D2 · Higher-risk-study sensitivity check"],
 L1:["record-L1","L1 · Technology-delivered literacy instruction"],
 N1:["record-N1","N1 · Elementary second-language reading"],
 N4:["record-N4","N4 · Randomized reading-technology studies"],
 S6:["record-S6","S6 · Parent co-viewing and language"],
 P1:["record-P1","P1 · Limited school learning use"],
 P2:["record-P2","P2 · Limited school leisure use"],
 P3:["record-P3","P3 · Distraction by classmates’ devices"],
 P4:["record-P4","P4 · Heavier school learning use"],
 P6:["record-P6","P6 · Very high school leisure use"],
 P7:["record-P7","P7 · Limited versus heavy school leisure use"],
 R1:["record-R1","R1 · Paper versus screen comprehension"],
 furenes:["reading-furenes","Furenes et al. · Reading features and adult support"],
 takacs:["reading-takacs","Takacs et al. · Multimedia and interactive features"],
 segal:["reading-segal","Segal-Drori et al. · Adult-instructed e-book reading"],
 munzer:["reading-munzer","Munzer et al. · Parent–toddler reading interactions"],
 paper:["paper-delgado","Delgado et al. · Comparable reading texts"],
 clinton:["paper-clinton","Clinton · Paper reading and genre limits"],
 longhand:["notes-original","Mueller & Oppenheimer · Original longhand finding"],
 replication:["notes-replication","Morehead et al. · Note-taking replication"],
 synthesis:["notes-synthesis","Flanigan et al. · Note-taking synthesis"],
 eeg:["notes-eeg","Van der Weel & Van der Meer · EEG, not achievement"],
 sleep:["wellbeing-sleep","Dibben et al. · Sleep"],
 attention:["wellbeing-attention","Thorell et al. · Attention"],
 mental:["wellbeing-mental-health","Sanders et al. · Mental health"],
 social:["wellbeing-social-media","Surgeon General · Social-media advisory"],
 movement:["wellbeing-movement","WHO · Sedentary behaviour and movement"],
 development:["wellbeing-development","Norwegian Institute of Public Health · Development"],
 pulling:["pulling-back","The strongest case for pulling back, and what the evidence says about it."],
 equity:["digital-divide","Could limiting school technology widen the digital divide?"],
 aire:["research-aire","CELaRAI and AIRE · Beginning reading"],
 screener:["research-screener","AI4ExceptionalEd · Screening and individualized support"],
 law:["focus-crosswalk","FOCUS Act crosswalk · Requirements and exceptions"],
 safeguards:["research-safeguards","Safeguards and possible unintended effects"],
 added:["added","Instructional Added Value · Planning tool, not a validated test"],
 reflection:["reflection","Added Value & Opportunity Cost · Planning tool"],
 policy:["policy","For Policymakers · Evidence summary"]
};
const essentialQuestions=[
 {n:1,id:"q1-learning",group:0,
 question:"Does technology help children learn, and does it matter how it's used?",
 short:"Some digital lessons improve learning, but the results are mixed. A device alone does not guarantee a better lesson. The studies test teaching approaches with tools, not screens on their own.",
 certainty:"mixed",
 shows:"Reviews of planned literacy and numeracy lessons report average learning gains, with uncertainty in stronger-study checks. Ran’s mathematics review found a small average benefit, substantial variation, and larger estimates for collaborative use, problem-solving, conceptual development and adaptive practice than for materials delivery or assessment alone. Assessment without follow-up had an uncertain effect; these function comparisons were not randomized head-to-head tests.",
 doesnt:"These findings do not prove that every product works, that more device use is better, or that the device caused the gain apart from the teaching.",
 classroom:"Choose the learning goal first, then compare the digital lesson with a strong non-digital option.",
 change:"Independent trials of the same lessons with and without the digital feature, with comparable teaching and lasting learning measured outside the tool.",
 refs:["D1","D2","L1","N4","ran"],thin:"Mixed findings, not an evidence gap; no confident claim about every tool. Ran combines randomized and quasi-experimental interventions and does not establish a causal ranking of functions."},
 {n:2,id:"q2-handwritten-notes",group:0,
 question:"Should students take notes by hand?",
 short:"There is no clear rule that all students should take notes by hand. Studies with college students often favor handwriting, but some repeat studies find little or no difference. These results do not settle what works best for younger children.",
 certainty:"mixed",
 shows:"The original experiments and a broader synthesis favor longhand on some learning outcomes. Direct replications are less consistent, and studying the notes can change the comparison.",
 doesnt:"College lecture findings do not establish a rule for younger pupils or students who need accessible alternatives. Different brain-activity patterns are not proof of better learning.",
 classroom:"Match the note-taking method to the learner and task, and teach students to select, explain and review ideas.",
 change:"Replicated school-age trials comparing note methods, with accessible options, equivalent note review and later tests of understanding.",
 refs:["longhand","replication","synthesis","eeg"],thin:"Thin for younger pupils and accessibility needs; college findings are mixed."},
 {n:3,id:"q3-school-screen-time",group:1,
 question:"How much screen time at school is too much?",
 short:"The research here does not set a safe daily screen-time limit for school. Heavier use and distraction are often linked with lower scores, but those links do not show that screen time caused the difference. Purpose and what the activity replaces also need attention.",
 certainty:"limited",
 shows:"PISA reports mixed observational patterns for learning, leisure and distraction. Bettinger’s randomized homework experiment found mathematics gains from a lower computer-assisted dose, but no additional mathematics gain from doubling it; language findings were less consistent, with no clear higher-dose benefit over control. Wellbeing guidance also calls for protecting movement.",
 doesnt:"PISA is observational, while Bettinger tests homework substitution in a particular grade and setting. Neither establishes a safe daily school screen-time limit for an individual child.",
 classroom:"Review the purpose and length of each activity, protect movement and non-digital work, and respond when attention or learning suffers.",
 change:"School-based trials of different time limits with comparable teaching, tracking learning and wellbeing by age, purpose and out-of-school use.",
 refs:["P1","P2","P3","P4","P6","P7","movement","bettinger"],thin:"Thin for a causal, age-specific school-day limit. The randomized homework-dose study is not a trial of total daily school screen time."},
 {n:4,id:"q4-wellbeing",group:1,
 question:"Does screen use affect sleep, attention or mental health? Is school use different from home use?",
 short:"Some screen-use patterns are linked with poorer sleep, attention and mental health, but results vary. Much of this research concerns leisure use or social media, not teacher-led lessons. It does not show that school and home use have the same effects.",
 certainty:"mixed",
 shows:"Problematic use is more consistently linked with poor sleep and attention symptoms than duration alone. Odgers and Jensen report small, conflicting positive, negative and null mental-health associations; Vuorre and Przybylski find mostly small or null population-level internet associations. Allcott’s quasi-experimental phone-pouch study finds suggestive initial wellbeing declines followed by recovery, but no clear improvement in classroom attention or perceived online bullying.",
 doesnt:"Population-level internet patterns cannot establish effects on individual children or classroom use, and small averages do not refute specific harms or vulnerable groups’ experiences. Most associations cannot settle causality; the phone-pouch study is not a matched school-versus-home comparison or an instructional-device trial.",
 classroom:"Watch the child’s sleep, attention and wellbeing, and review the content, timing and purpose of use rather than only the minutes.",
 change:"Studies separating school instruction from home leisure, with repeated measures and stronger causal designs that account for prior wellbeing and family circumstances.",
 refs:["sleep","attention","mental","social","development","allcott","vuorre","odgers"],thin:"Thin for a direct school-versus-home causal comparison. Ecological associations, adolescent reviews and quasi-experimental personal-phone restrictions answer different questions."},
 {n:5,id:"q5-test-score-declines",group:1,
 question:"Are test scores falling because of classroom technology?",
 short:"The evidence here does not show that classroom technology caused falling test scores. Changes happening at the same time are not proof of cause and effect. Some planned digital lessons have improved learning, while other uses are linked with poorer results.",
 certainty:"not yet studied",
 shows:"The pulling-back card presents the argument about national trends and distinguishes it from causal evidence. PISA links distraction and some heavier-use patterns with lower scores, while instructional trials show a different, mixed pattern.",
 doesnt:"No study in this collection directly tests whether classroom technology caused the national declines discussed in the card. These sources also do not prove that removing it would reverse those declines.",
 classroom:"Investigate specific practices and learning problems instead of treating a national trend as a verdict on every classroom tool.",
 change:"Credible policy or rollout comparisons that isolate changes in classroom technology from other changes and track achievement before and after.",
 refs:["pulling","P3","P4","D1","D2"],thin:"No direct test in the dashboard of the causal explanation for national score declines."},
 {n:6,id:"q6-sweden",group:1,
 question:"What did Sweden do, and has it worked?",
 short:"Sweden moved toward more printed books, reading time and less screen use, especially for younger children. The dashboard documents those policy changes but does not show that they improved learning. A policy announcement is not an evaluation of its results.",
 certainty:"not yet studied",
 shows:"The pulling-back card links the original reporting and Swedish government material on books, reading and screen policy. Its discussion separates the change in policy from evidence of success.",
 doesnt:"The existing sources do not establish a causal effect of the changes on achievement, wellbeing or equity. An earlier score decline cannot show whether a later policy worked.",
 classroom:"Track Sweden’s results, but do not treat its policy change as proof of what will work locally.",
 change:"An independent evaluation of implemented Swedish policies, with comparison groups and learning, wellbeing and equity outcomes over time.",
 refs:["pulling"],thin:"No evaluation of the Swedish policy’s effects is included in the dashboard."},
 {n:7,id:"q7-phones-and-school-devices",group:1,
 question:"If New York banned phones, should the same rules apply to school devices?",
 short:"Not automatically: personal phones and school devices can serve different purposes. New York’s phone-free rules exclude school-issued devices. The research here does not show that extending the same rules would improve learning or wellbeing.",
 certainty:"limited",
 shows:"Allcott’s national quasi-experimental working paper finds that lockable pouches reduced phone use, but average academic effects were near zero, with modest positive high-school effects, especially in mathematics, and small negative middle-school effects. Discipline initially worsened before the effect faded; wellbeing initially declined suggestively before recovering. Attendance, classroom attention and perceived online bullying did not clearly improve.",
 doesnt:"A phone policy is not a trial of removing teacher-guided instructional devices. The dashboard does not establish the effects of extending New York’s rules or resolve every legal application.",
 classroom:"Set clear limits on distraction while reviewing the learning purpose and access needs of school-device use separately.",
 change:"Evaluations of New York’s phone policy and separate school-device policies, with comparable schools and measures of learning, wellbeing and access.",
 refs:["pulling","P3","law","allcott"],thin:"Thin for transferring phone-policy effects to school-issued instructional devices. Allcott is not an RCT or a peer-reviewed journal article."},
 {n:8,id:"q8-digital-divide",group:2,
 question:"Could limiting school technology widen the digital divide?",
 short:"It could, but no study cited here directly tests the equity effects of removing school technology. Students differ in access, skills and the help they receive. At the same time, providing a home computer alone has not reliably improved school results.",
 certainty:"not yet studied",
 shows:"The digital-divide card documents gaps in skills, kinds of use and teacher AI training. It also separates observational gaps from home-computer experiments and quasi-experiments, whose academic results were null or negative despite some skill benefits.",
 doesnt:"Neither unequal access nor a home-computer study tells us what removing school technology would do. Greater screen exposure is not the same as better learning opportunity, and reports are not peer-reviewed journal studies.",
 classroom:"Check whether restrictions preserve supported digital learning and accessible alternatives for students with fewer resources outside school.",
 change:"Comparative evaluations of actual school restrictions, measuring access, digital skills, learning and wellbeing across income groups and existing home resources.",
 refs:["equity"],thin:"No direct study in the cited set tests the equity effects of removing school technology."},
 {n:9,id:"q9-access-needs",group:2,
 question:"What about students with disabilities and English learners?",
 short:"These students’ needs cannot be settled by average results for all students. The research here is too limited to say which tools work for each disability or language need. Any change must consider access supports and translation, not just screen use.",
 certainty:"limited",
 shows:"The assistive-technology review describes access, inclusion, autonomy and participation benefits alongside training, cost and access barriers; it does not supply a pooled causal achievement effect. The crosswalk describes proposed disability-access and translation protections. Second-language reading findings and New York research aims provide separate, limited evidence.",
 doesnt:"A legal exception is not proof of a tool’s learning benefit. Second-language findings from a particular setting do not establish effects for all English learners, and research plans are not completed efficacy trials.",
 classroom:"Review each learner’s access and language needs with the relevant specialists before changing a tool or its alternative.",
 change:"Accessible, independently evaluated studies of specific tools for clearly described disability and language groups, measuring learning, participation and unintended barriers.",
 refs:["N1","law","screener","aire","equity","fernandez"],thin:"Thin for tool-specific causal effects for particular disability and language groups. The descriptive assistive-technology review has reporting inconsistencies and does not determine legal eligibility."},
 {n:10,id:"q10-ai-reading",group:3,
 question:"Can AI help teachers differentiate or personalize reading instruction in early grades?",
 short:"AI may eventually help teachers tailor reading practice and feedback, but the dashboard does not yet include completed trials proving reading gains from AI differentiation in early grades. Current university projects are designed to assist teacher-led reading instruction rather than automate differentiation on their own. Findings from older reading software and secondary-grade tutoring systems do not establish that today’s AI tools improve early reading.",
 certainty:"not yet studied",
 shows:"The AIRE project describes planned tools to generate personalized text, analyze oral reading and help early-grade teachers tailor phonics, fluency, word recognition and comprehension support, with a planned classroom pilot. Elementary literacy-technology syntheses and adult-instructed e-book studies examine pre-generative tools with mixed-to-positive findings and smaller randomized subsets, while Létourneau’s school-age intelligent-tutoring review reports generally positive results against traditional teaching alongside mixed results against non-intelligent tutoring, concentrated in older grades and STEM.",
 doesnt:"No completed classroom-achievement trial of AI-assisted reading differentiation in early grades was located in the official sources reviewed for this dashboard. Planned capabilities, technical papers and results from older literacy software or secondary mathematics tutoring do not prove early-grade reading gains, subgroup fairness or safety.",
 classroom:"Keep teachers in charge of grouping, text selection and feedback, avoid routine text releveling that lowers core text complexity, and treat early-grade AI reading tools as pilot-stage supports checked with off-screen reading tasks.",
 change:"Independent early-grade classroom trials comparing teacher-led reading differentiation with a defined AI tool against equally supported teacher differentiation without it, measuring lasting off-screen reading growth across learner subgroups.",
 refs:["aire","safeguards","L1","N4","segal","furenes","letourneau"],thin:"No completed classroom-achievement trial of early-grade AI reading differentiation is included. General intelligent-tutoring and pre-generative digital-reading findings do not validate current early-literacy AI."},
 {n:11,id:"q11-screening-and-learning",group:3,
 question:"If an AI tool can spot reading difficulties in young children will that support targeted reading instruction?",
 short:"Early identification can support targeted reading instruction only when accurate screening is paired with educator review and effective follow-up teaching, not automatically on its own. In the evidence reviewed here, researchers validated an automated language-screening score on archival recordings rather than testing whether AI flags improve classroom instruction or children’s reading. Spotting a possible difficulty is a starting point for diagnostic confirmation, not proof that an automated recommendation helps a child read better.",
 certainty:"limited",
 shows:"The screening card describes a proposed universal early screener and an orchestrator intended to help teachers and specialists coordinate individualized support, alongside a peer-reviewed study validating automated scoring from recorded sentence recall. In broader K-to-secondary mathematics syntheses, digital monitoring or assessment alone had an uncertain average effect, whereas diagnostic information paired with teacher preparation and instructional follow-through produced clearer gains.",
 doesnt:"Validating a scoring measure on archival recordings does not test live classroom screening across diverse speech and language backgrounds, validate the proposed instructional orchestrator, or show that AI flags lead to better targeted reading instruction or reading achievement. Missed cases, false alarms, subgroup fairness, privacy and statutory limits on universal early screening still require review.",
 classroom:"Treat any validated screening flag as a prompt for teacher and specialist review, diagnostic confirmation and evidence-based reading instruction rather than automated placement or standalone app assignment.",
 change:"Classroom studies that validate early-reading detection across diverse young learners and compare targeted instruction and reading outcomes when educators use the AI screening results versus standard screening and support.",
 refs:["screener","aire","ran","law","safeguards"],thin:"Thin for the full pathway from AI detection to better targeted reading instruction and reading gains; archival scoring validation is not a classroom intervention trial."},
 {n:12,id:"q12-ai-evidence-gaps",group:3,
 question:"What don't we know yet about AI and young learners, and what evidence should a pilot require?",
 short:"We still do not know enough about lasting reading gains, safety or how well AI works for different children. A pilot should test a named tool against a strong teaching option, not just show that children use it. It also needs clear privacy checks and rules for stopping.",
 certainty:"limited",
 shows:"The New York cards distinguish intended capabilities and technical validation from completed classroom-achievement trials. Létourneau’s general intelligent-tutoring review identifies short interventions, varied designs and limited samples, with weaker and mixed results against non-intelligent tutoring. It calls for longer and more diverse studies; this is not early-literacy AI evidence.",
 doesnt:"The dashboard does not establish long-term benefit, safety or equal performance across disability, speech and language backgrounds. It also does not validate a single checklist that guarantees a safe or effective pilot.",
 classroom:"Before starting, specify the learning outcome, comparison, adult role, data safeguards, subgroup checks and stopping rules.",
 change:"Independent, replicated studies of the actual tool and version, with longer follow-up, reading transfer, subgroup results, harms reporting and privacy audits.",
 refs:["aire","screener","safeguards","law","letourneau"],thin:"Thin for current AI implementations’ lasting benefit, safety and subgroup performance. The general tutoring review reports no formal risk-of-bias grade or pooled estimate; pilot requirements are proposed safeguards."},
 {n:13,id:"q13-worth-it",group:4,
 question:"How can a school tell whether a digital activity is worth it, and when should it scale back or stop?",
 short:"There is no proven checklist here that tells a school when a digital activity is worth it. Compare learning with a strong non-digital option, and watch what the activity replaces. Set review and stopping rules before the pilot starts.",
 certainty:"limited",
 shows:"The evidence summary and reflection tools separate learning goals, digital contribution, adult support and opportunity cost. Bettinger’s randomized homework experiment found that doubling a beneficial mathematics dose did not add gains, with less consistent language findings. More use is therefore not automatically more value, but this experiment does not validate a universal stopping rule.",
 doesnt:"These planning tools are not validated measures or automatic product recommendations. The dashboard supplies no universal cut-off for learning benefit, acceptable disruption or when to stop.",
 classroom:"Scale back or stop if agreed learning goals are not met, important activities are displaced, or access, safety or privacy problems cannot be resolved.",
 change:"Independent evaluations showing that specific decision and stopping rules reliably improve learning and wellbeing compared with ordinary school review.",
 refs:["policy","D1","D2","added","reflection","bettinger"],thin:"Thin for a validated decision or stopping rule; the practical line is proposed guidance, not a tested algorithm."}
];

// Stable links to existing narrative cards; no new research records.
const questionCardTargets={
 "study-allcott":{view:"wellbeing",selector:"#study-allcott",index:0},
 "study-bettinger":{view:"explorer",selector:"#study-bettinger",index:0},
 "study-ran":{view:"explorer",selector:"#study-ran",index:0},
 "study-letourneau":{view:"explorer",selector:"#study-letourneau",index:0},
 "study-fernandez":{view:"explorer",selector:"#study-fernandez",index:0},
 "study-vuorre":{view:"wellbeing",selector:"#study-vuorre",index:0},
 "study-odgers":{view:"wellbeing",selector:"#study-odgers",index:0},
 "wellbeing-sleep":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:0},
 "wellbeing-attention":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:1},
 "wellbeing-mental-health":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:2},
 "wellbeing-social-media":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:3},
 "wellbeing-movement":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:4},
 "wellbeing-development":{view:"wellbeing",selector:"#wellbeing > .evidence-card",index:5},
 "paper-delgado":{view:"analog",selector:"#analog > .evidence-card",index:0},
 "paper-clinton":{view:"analog",selector:"#analog > .evidence-card",index:1},
 "notes-original":{view:"analog",selector:"#analog > .evidence-card",index:2},
 "notes-replication":{view:"analog",selector:"#analog > .evidence-card",index:3},
 "notes-synthesis":{view:"analog",selector:"#analog > .evidence-card",index:4},
 "notes-eeg":{view:"analog",selector:"#analog > .evidence-card",index:5},
 "research-aire":{view:"emerging",selector:"#emerging > .evidence-card",index:0},
 "research-screener":{view:"emerging",selector:"#emerging > .evidence-card",index:1},
 "focus-crosswalk":{view:"emerging",selector:"#emerging > .tablewrap",index:0},
 "research-safeguards":{view:"emerging",selector:"#emerging > .policy-limits",index:0}
};
const questionLink=key=>{
 const [id,label]=questionEvidence[key];
 return `<a href="#${id}">${esc(label)}</a>`;
};
function renderEssentialQuestions(){
 $("#questions").innerHTML=`
 <div class="questions-heading"><div><div class="eyebrow">ESSENTIAL QUESTIONS</div><h2>Browse the 13 essential questions</h2><p>Explore what the research supports, where it is uncertain, and what that means for a classroom.</p></div><a class="questions-policy-link" href="#policy" data-view="policy">For Policymakers summary →</a></div>
 <nav class="questions-most" aria-label="Most asked questions"><h3>Most asked</h3><div>${[3,5,8].map(n=>{const q=essentialQuestions[n-1];return `<a href="#${q.id}"><span class="question-number">${n}.</span><span>${esc(q.question)}</span></a>`}).join("")}</div></nav>
 <div class="questions-layout"><nav class="questions-menu" aria-label="Essential Questions topics"><span class="eyebrow">BROWSE BY TOPIC</span>${questionGroups.map(g=>`<a href="#${g.id}">${g.title}</a>`).join("")}<a class="question-methods" href="#answer-confidence">How to read the research labels</a></nav>
 <div class="questions-list">${questionGroups.map((g,i)=>`<section class="question-group" id="${g.id}" tabindex="-1" aria-labelledby="${g.id}-title"><h3 id="${g.id}-title">${g.title}</h3>${essentialQuestions.filter(q=>q.group===i).map(q=>`
 <details class="question-answer" id="${q.id}" data-question="${q.n}">
 <summary><span class="question-number">${q.n}.</span><span class="question-text">${esc(q.question)}</span><span class="question-toggle" aria-hidden="true">+</span></summary>
 <div class="question-body">
 <div class="question-meta"><span>Updated <time datetime="2026-11-18">November 18, 2026</time></span><a href="#${q.id}">Link to this question</a></div>
 <section class="question-short"><h4>Short answer</h4><p>${esc(q.short)}</p></section>
 <section class="question-certainty"><h4>How sure is the research?</h4><p><span class="question-label">${q.certainty}</span><a href="#answer-confidence">What these labels mean</a></p></section>
 <div class="question-evidence-columns"><section><h4>What the research shows</h4><p>${esc(q.shows)}</p></section><section><h4>What it doesn't show</h4><p>${esc(q.doesnt)}</p></section></div>
 <section><h4>What this means in a classroom</h4><p>${esc(q.classroom)}</p></section>
 <section><h4>What would change this answer</h4><p>${esc(q.change)}</p></section>
 <section class="question-references"><h4>See the evidence</h4><ul>${q.refs.map(key=>`<li>${questionLink(key)}</li>`).join("")}</ul><p class="question-guidance-note">Classroom suggestions are proposed applications, not tested lesson plans or legal advice.</p></section>
 </div></details>`).join("")}</section>`).join("")}</div></div>`;
 $("#methods").insertAdjacentHTML("afterbegin",`<section id="answer-confidence" class="about-block question-definitions" tabindex="-1"><h2>How to read the Essential Questions research labels</h2><p>These are plain-language editorial summaries of the evidence already on this dashboard, not formal quality grades or a new appraisal system. Each label applies to the specific question and scope described in the answer, not to technology as a whole.</p><dl>
 <div><dt>fairly consistent</dt><dd>The relevant findings generally point in the same direction for the stated outcome and setting. This does not remove study limits or establish cause and effect by itself.</dd></div>
 <div><dt>mixed</dt><dd>Findings differ, or the answer changes with the outcome, learners, teaching approach or comparison.</dd></div>
 <div><dt>limited</dt><dd>The evidence for this exact question is narrow, indirect or weakened by study limitations, so a confident general answer is not justified.</dd></div>
 <div><dt>not yet studied</dt><dd>No direct study answering the central claim was identified in the evidence already included here. This is a statement about this collection, not a claim that no such study exists anywhere.</dd></div>
 </dl><p>Intervention findings remain separate from observational associations. These labels do not rank products, combine effect-size scales or add overlapping samples.</p><p><a href="#questions" data-view="questions">Return to Start with a question</a></p></section>`);
 for(const [id,t] of Object.entries(questionCardTargets)){
  const el=document.querySelectorAll(t.selector)[t.index];
  if(!el)throw new Error(`Missing question evidence target: ${id}`);
  el.id=id;el.tabIndex=-1;
 }
 document.querySelectorAll(".question-answer").forEach(el=>el.addEventListener("toggle",()=>{
  if(el.open&&document.body.dataset.view==="questions"&&location.hash!==`#${el.id}`){
   try{history.pushState(null,"",`#${el.id}`)}catch{}
  }
 }));
}
const legacyQuestionHashes={
 "q5-handwritten-notes":"q2-handwritten-notes",
 "q6-school-screen-time":"q3-school-screen-time",
 "q7-wellbeing":"q4-wellbeing",
 "q8-test-score-declines":"q5-test-score-declines",
 "q9-sweden":"q6-sweden",
 "q10-phones-and-school-devices":"q7-phones-and-school-devices",
 "q11-digital-divide":"q8-digital-divide",
 "q12-access-needs":"q9-access-needs",
 "q13-ai-reading":"q10-ai-reading",
 "q14-screening-and-learning":"q11-screening-and-learning",
 "q15-ai-evidence-gaps":"q12-ai-evidence-gaps",
 "q16-worth-it":"q13-worth-it"
};
function routeEssentialQuestion(hash){
 const resolved=legacyQuestionHashes[hash]||hash;
 if(hash==="q2-paper-reading"){setTab("analog");return true;}
 if(hash==="q3-reading-features"||hash==="q4-adult-support"){setTab("reading");resetReading();return true;}
 const q=essentialQuestions.find(q=>q.id===resolved);
 const group=questionGroups.find(g=>g.id===resolved);
 if(q||group){
  setTab("questions");
  const el=document.getElementById(resolved);
  if(q){el.open=true;el.querySelector("summary").focus({preventScroll:true})}
  else el.focus({preventScroll:true});
  el.scrollIntoView({block:"start"});return true;
 }
 if(hash==="answer-confidence"){
  setTab("methods");const el=$("#answer-confidence");el.focus({preventScroll:true});el.scrollIntoView({block:"start"});return true;
 }
 if(questionCardTargets[hash]){
  setTab(questionCardTargets[hash].view);const el=document.getElementById(hash);el.focus({preventScroll:true});el.scrollIntoView({block:"start"});return true;
 }
 if(["reading-furenes","reading-takacs","reading-segal","reading-munzer"].includes(hash)){
  setTab("reading");resetReading();const el=document.getElementById(hash);el.focus({preventScroll:true});el.scrollIntoView({block:"start"});return true;
 }
 return false;
}
