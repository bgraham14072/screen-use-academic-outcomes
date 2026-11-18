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
 {n:2,id:"q2-paper-reading",group:0,
 question:"Is reading on paper better than reading on a screen? When is print the better choice?",
 short:"Paper often helps readers understand the same text better, especially for fact-based reading or under time pressure. That does not mean print is best for every reader, story or task.",
 certainty:"fairly consistent",
 shows:"Reviews of comparable texts generally favor paper for comprehension, with clearer advantages for informational text than stories. Young children’s results also depend on digital features and adult support.",
 doesnt:"This is not proof that print beats every enhanced e-book, that all ages respond alike, or that a paper advantage in comprehension also applies to vocabulary.",
 classroom:"Consider print for demanding informational reading, while preserving needed access supports and checking the actual task.",
 change:"Well-controlled comparisons of current formats, with matched adult support and accessibility, showing different results for the same readers, texts and learning goals.",
 refs:["R1","paper","clinton","furenes"],thin:"The scoped comprehension finding is fairly consistent; universal format rules are not supported."},
 {n:3,id:"q3-reading-features",group:0,
 question:"Which e-book and reading-app features help, and which get in the way?",
 short:"Features that support the story can help, while extra games and taps can get in the way. A feature that helps children learn words may not help them understand the story. The evidence does not tell us which current app is best.",
 certainty:"mixed",
 shows:"The storybook reviews distinguish useful story-related multimedia from distracting interactions. Dictionary support can help vocabulary without helping story comprehension; some tested electronic books also reduced story-related talk.",
 doesnt:"The reviews cannot cleanly isolate every feature, and a category-level finding does not validate a particular app. A vocabulary gain is not the same as better comprehension.",
 classroom:"Preview the exact book and keep only features that serve the intended reading goal.",
 change:"Trials that turn individual features on or off in otherwise identical books and measure comprehension, word learning and adult–child talk separately.",
 refs:["furenes","takacs","munzer"],thin:"Mixed feature findings; existing evidence cannot rank individual current apps."},
 {n:4,id:"q4-adult-support",group:0,
 question:"How much does a teacher's or parent's involvement matter?",
 short:"Adult support can help, but being nearby is not the same as teaching. The studies do not give a clear answer about how much it helps across ages and tools. What adults and children do together matters.",
 certainty:"mixed",
 shows:"A kindergarten experiment favored an adult-instructed e-book approach on some reading skills. Other comparisons vary in adult support, and parent–toddler studies observe different kinds of talk even when adults are present in every condition. Co-viewing is linked with language outcomes in observational evidence.",
 doesnt:"The co-viewing link does not prove cause and effect. Unequal teaching across formats cannot isolate the device’s contribution, and adult presence alone is not a measure of instructional quality.",
 classroom:"Plan questions, explanations and feedback rather than simply putting an adult next to the device.",
 change:"Trials that vary the type of adult instruction while holding the book and teaching time constant, with follow-up across age groups.",
 refs:["S6","furenes","segal","munzer"],thin:"Thin for the size of the adult-support contribution across ages and tools; comparisons are not consistently matched."},
 {n:5,id:"q5-handwritten-notes",group:0,
 question:"Should students take notes by hand?",
 short:"There is no clear rule that all students should take notes by hand. Studies with college students often favor handwriting, but some repeat studies find little or no difference. These results do not settle what works best for younger children.",
 certainty:"mixed",
 shows:"The original experiments and a broader synthesis favor longhand on some learning outcomes. Direct replications are less consistent, and studying the notes can change the comparison.",
 doesnt:"College lecture findings do not establish a rule for younger pupils or students who need accessible alternatives. Different brain-activity patterns are not proof of better learning.",
 classroom:"Match the note-taking method to the learner and task, and teach students to select, explain and review ideas.",
 change:"Replicated school-age trials comparing note methods, with accessible options, equivalent note review and later tests of understanding.",
 refs:["longhand","replication","synthesis","eeg"],thin:"Thin for younger pupils and accessibility needs; college findings are mixed."},
 {n:6,id:"q6-school-screen-time",group:1,
 question:"How much screen time at school is too much?",
 short:"The research here does not set a safe daily screen-time limit for school. Heavier use and distraction are often linked with lower scores, but those links do not show that screen time caused the difference. Purpose and what the activity replaces also need attention.",
 certainty:"limited",
 shows:"PISA reports mixed observational patterns for learning, leisure and distraction. Bettinger’s randomized homework experiment found mathematics gains from a lower computer-assisted dose, but no additional mathematics gain from doubling it; language findings were less consistent, with no clear higher-dose benefit over control. Wellbeing guidance also calls for protecting movement.",
 doesnt:"PISA is observational, while Bettinger tests homework substitution in a particular grade and setting. Neither establishes a safe daily school screen-time limit for an individual child.",
 classroom:"Review the purpose and length of each activity, protect movement and non-digital work, and respond when attention or learning suffers.",
 change:"School-based trials of different time limits with comparable teaching, tracking learning and wellbeing by age, purpose and out-of-school use.",
 refs:["P1","P2","P3","P4","P6","P7","movement","bettinger"],thin:"Thin for a causal, age-specific school-day limit. The randomized homework-dose study is not a trial of total daily school screen time."},
 {n:7,id:"q7-wellbeing",group:1,
 question:"Does screen use affect sleep, attention or mental health? Is school use different from home use?",
 short:"Some screen-use patterns are linked with poorer sleep, attention and mental health, but results vary. Much of this research concerns leisure use or social media, not teacher-led lessons. It does not show that school and home use have the same effects.",
 certainty:"mixed",
 shows:"Problematic use is more consistently linked with poor sleep and attention symptoms than duration alone. Odgers and Jensen report small, conflicting positive, negative and null mental-health associations; Vuorre and Przybylski find mostly small or null population-level internet associations. Allcott’s quasi-experimental phone-pouch study finds suggestive initial wellbeing declines followed by recovery, but no clear improvement in classroom attention or perceived online bullying.",
 doesnt:"Population-level internet patterns cannot establish effects on individual children or classroom use, and small averages do not refute specific harms or vulnerable groups’ experiences. Most associations cannot settle causality; the phone-pouch study is not a matched school-versus-home comparison or an instructional-device trial.",
 classroom:"Watch the child’s sleep, attention and wellbeing, and review the content, timing and purpose of use rather than only the minutes.",
 change:"Studies separating school instruction from home leisure, with repeated measures and stronger causal designs that account for prior wellbeing and family circumstances.",
 refs:["sleep","attention","mental","social","development","allcott","vuorre","odgers"],thin:"Thin for a direct school-versus-home causal comparison. Ecological associations, adolescent reviews and quasi-experimental personal-phone restrictions answer different questions."},
 {n:8,id:"q8-test-score-declines",group:1,
 question:"Are test scores falling because of classroom technology?",
 short:"The evidence here does not show that classroom technology caused falling test scores. Changes happening at the same time are not proof of cause and effect. Some planned digital lessons have improved learning, while other uses are linked with poorer results.",
 certainty:"not yet studied",
 shows:"The pulling-back card presents the argument about national trends and distinguishes it from causal evidence. PISA links distraction and some heavier-use patterns with lower scores, while instructional trials show a different, mixed pattern.",
 doesnt:"No study in this collection directly tests whether classroom technology caused the national declines discussed in the card. These sources also do not prove that removing it would reverse those declines.",
 classroom:"Investigate specific practices and learning problems instead of treating a national trend as a verdict on every classroom tool.",
 change:"Credible policy or rollout comparisons that isolate changes in classroom technology from other changes and track achievement before and after.",
 refs:["pulling","P3","P4","D1","D2"],thin:"No direct test in the dashboard of the causal explanation for national score declines."},
 {n:9,id:"q9-sweden",group:1,
 question:"What did Sweden do, and has it worked?",
 short:"Sweden moved toward more printed books, reading time and less screen use, especially for younger children. The dashboard documents those policy changes but does not show that they improved learning. A policy announcement is not an evaluation of its results.",
 certainty:"not yet studied",
 shows:"The pulling-back card links the original reporting and Swedish government material on books, reading and screen policy. Its discussion separates the change in policy from evidence of success.",
 doesnt:"The existing sources do not establish a causal effect of the changes on achievement, wellbeing or equity. An earlier score decline cannot show whether a later policy worked.",
 classroom:"Track Sweden’s results, but do not treat its policy change as proof of what will work locally.",
 change:"An independent evaluation of implemented Swedish policies, with comparison groups and learning, wellbeing and equity outcomes over time.",
 refs:["pulling"],thin:"No evaluation of the Swedish policy’s effects is included in the dashboard."},
 {n:10,id:"q10-phones-and-school-devices",group:1,
 question:"If New York banned phones, should the same rules apply to school devices?",
 short:"Not automatically: personal phones and school devices can serve different purposes. New York’s phone-free rules exclude school-issued devices. The research here does not show that extending the same rules would improve learning or wellbeing.",
 certainty:"limited",
 shows:"Allcott’s national quasi-experimental working paper finds that lockable pouches reduced phone use, but average academic effects were near zero, with modest positive high-school effects, especially in mathematics, and small negative middle-school effects. Discipline initially worsened before the effect faded; wellbeing initially declined suggestively before recovering. Attendance, classroom attention and perceived online bullying did not clearly improve.",
 doesnt:"A phone policy is not a trial of removing teacher-guided instructional devices. The dashboard does not establish the effects of extending New York’s rules or resolve every legal application.",
 classroom:"Set clear limits on distraction while reviewing the learning purpose and access needs of school-device use separately.",
 change:"Evaluations of New York’s phone policy and separate school-device policies, with comparable schools and measures of learning, wellbeing and access.",
 refs:["pulling","P3","law","allcott"],thin:"Thin for transferring phone-policy effects to school-issued instructional devices. Allcott is not an RCT or a peer-reviewed journal article."},
 {n:11,id:"q11-digital-divide",group:2,
 question:"Could limiting school technology widen the digital divide?",
 short:"It could, but no study cited here directly tests the equity effects of removing school technology. Students differ in access, skills and the help they receive. At the same time, providing a home computer alone has not reliably improved school results.",
 certainty:"not yet studied",
 shows:"The digital-divide card documents gaps in skills, kinds of use and teacher AI training. It also separates observational gaps from home-computer experiments and quasi-experiments, whose academic results were null or negative despite some skill benefits.",
 doesnt:"Neither unequal access nor a home-computer study tells us what removing school technology would do. Greater screen exposure is not the same as better learning opportunity, and reports are not peer-reviewed journal studies.",
 classroom:"Check whether restrictions preserve supported digital learning and accessible alternatives for students with fewer resources outside school.",
 change:"Comparative evaluations of actual school restrictions, measuring access, digital skills, learning and wellbeing across income groups and existing home resources.",
 refs:["equity"],thin:"No direct study in the cited set tests the equity effects of removing school technology."},
 {n:12,id:"q12-access-needs",group:2,
 question:"What about students with disabilities and English learners?",
 short:"These students’ needs cannot be settled by average results for all students. The research here is too limited to say which tools work for each disability or language need. Any change must consider access supports and translation, not just screen use.",
 certainty:"limited",
 shows:"The assistive-technology review describes access, inclusion, autonomy and participation benefits alongside training, cost and access barriers; it does not supply a pooled causal achievement effect. The crosswalk describes proposed disability-access and translation protections. Second-language reading findings and New York research aims provide separate, limited evidence.",
 doesnt:"A legal exception is not proof of a tool’s learning benefit. Second-language findings from a particular setting do not establish effects for all English learners, and research plans are not completed efficacy trials.",
 classroom:"Review each learner’s access and language needs with the relevant specialists before changing a tool or its alternative.",
 change:"Accessible, independently evaluated studies of specific tools for clearly described disability and language groups, measuring learning, participation and unintended barriers.",
 refs:["N1","law","screener","aire","equity","fernandez"],thin:"Thin for tool-specific causal effects for particular disability and language groups. The descriptive assistive-technology review has reporting inconsistencies and does not determine legal eligibility."},
 {n:13,id:"q13-ai-reading",group:3,
 question:"Can AI help young children learn to read without replacing the teacher?",
 short:"It may be possible, but the dashboard does not yet show that the proposed AI tools improve children’s reading. The projects aim to support teachers, not prove that teachers can be replaced. Gains from older digital reading lessons do not show that today’s AI tools work.",
 certainty:"not yet studied",
 shows:"The AIRE project describes planned personalized reading support and a pilot. Létourneau’s school-age intelligent-tutoring review reports generally positive results against traditional teaching, but weaker and mixed results against non-intelligent tutoring systems. Its evidence is concentrated in older pupils and STEM, not early-literacy AI for young children.",
 doesnt:"No completed classroom-achievement trial of the proposed AIRE implementation was located in the official sources reviewed for this dashboard. Planned capabilities, technical papers and general digital-reading results do not prove AI efficacy or safety.",
 classroom:"Keep the teacher responsible for instruction and treat the proposed AI reading tools as research-stage tools needing evaluation.",
 change:"Independent classroom trials of a defined AI tool plus teacher instruction versus equally supported instruction without it, with lasting reading outcomes and safety checks.",
 refs:["aire","safeguards","L1","segal","letourneau"],thin:"No completed classroom-achievement trial for the proposed implementation is included. General intelligent-tutoring findings are not early-literacy AI validation."},
 {n:14,id:"q14-screening-and-learning",group:3,
 question:"If an AI tool can spot reading difficulties, does that mean it improves reading?",
 short:"No. A tool can flag a possible difficulty without helping a child read better. It still needs testing to show that using its results leads to better teaching and reading.",
 certainty:"limited",
 shows:"The screening card describes proposed early screening and a related study validating automated scores from recorded sentence recall. That is evidence about a screening-related measure, not about gains from a classroom reading program.",
 doesnt:"It does not validate every part of the proposed Screener or Orchestrator, establish reading-difficulty detection in every group, or show that screening leads to better reading. Missed cases, false alarms and follow-up support still need review.",
 classroom:"Require professional review and a clear route from a screening result to assessment and instruction.",
 change:"Studies that validate detection in the intended learners and compare reading outcomes when teachers use the results versus usual assessment and support.",
 refs:["screener","law","safeguards"],thin:"Thin for the proposed tools’ detection-to-learning pathway; validation of a measure is not an achievement trial."},
 {n:15,id:"q15-ai-evidence-gaps",group:3,
 question:"What don't we know yet about AI and young learners, and what evidence should a pilot require?",
 short:"We still do not know enough about lasting reading gains, safety or how well AI works for different children. A pilot should test a named tool against a strong teaching option, not just show that children use it. It also needs clear privacy checks and rules for stopping.",
 certainty:"limited",
 shows:"The New York cards distinguish intended capabilities and technical validation from completed classroom-achievement trials. Létourneau’s general intelligent-tutoring review identifies short interventions, varied designs and limited samples, with weaker and mixed results against non-intelligent tutoring. It calls for longer and more diverse studies; this is not early-literacy AI evidence.",
 doesnt:"The dashboard does not establish long-term benefit, safety or equal performance across disability, speech and language backgrounds. It also does not validate a single checklist that guarantees a safe or effective pilot.",
 classroom:"Before starting, specify the learning outcome, comparison, adult role, data safeguards, subgroup checks and stopping rules.",
 change:"Independent, replicated studies of the actual tool and version, with longer follow-up, reading transfer, subgroup results, harms reporting and privacy audits.",
 refs:["aire","screener","safeguards","law","letourneau"],thin:"Thin for current AI implementations’ lasting benefit, safety and subgroup performance. The general tutoring review reports no formal risk-of-bias grade or pooled estimate; pilot requirements are proposed safeguards."},
 {n:16,id:"q16-worth-it",group:4,
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
 <div class="questions-heading"><div><div class="eyebrow">ESSENTIAL QUESTIONS</div><h2>Start with a question</h2><p>Explore what the research supports, where it is uncertain, and what that means for a classroom.</p></div><a class="questions-policy-link" href="#policy" data-view="policy">For Policymakers summary →</a></div>
 <aside class="questions-draft"><strong>Draft for co-author review</strong><p>These answers are proposed wording, not a final statement approved by all five authors. This label remains until all five authors approve the final wording.</p></aside>
 <nav class="questions-most" aria-label="Most asked questions"><h3>Most asked</h3><div>${[6,8,11].map(n=>{const q=essentialQuestions[n-1];return `<a href="#${q.id}"><span class="question-number">${n}.</span><span>${esc(q.question)}</span></a>`}).join("")}</div></nav>
 <div class="questions-layout"><nav class="questions-menu" aria-label="Essential Questions topics"><span class="eyebrow">BROWSE BY TOPIC</span>${questionGroups.map(g=>`<a href="#${g.id}">${g.title}</a>`).join("")}<a class="question-methods" href="#answer-confidence">How to read the research labels</a></nav>
 <div class="questions-list">${questionGroups.map((g,i)=>`<section class="question-group" id="${g.id}" tabindex="-1" aria-labelledby="${g.id}-title"><h3 id="${g.id}-title">${g.title}</h3>${essentialQuestions.filter(q=>q.group===i).map(q=>`
 <details class="question-answer" id="${q.id}" data-question="${q.n}">
 <summary><span class="question-number">${q.n}.</span><span class="question-text">${esc(q.question)}</span><span class="question-toggle" aria-hidden="true">+</span></summary>
 <div class="question-body">
 <div class="question-meta"><span>Draft for co-author review</span><span>Updated <time datetime="2026-11-18">November 18, 2026</time></span><a href="#${q.id}">Link to this question</a></div>
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
function routeEssentialQuestion(hash){
 const q=essentialQuestions.find(q=>q.id===hash);
 const group=questionGroups.find(g=>g.id===hash);
 if(q||group){
  setTab("questions");
  const el=document.getElementById(hash);
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
