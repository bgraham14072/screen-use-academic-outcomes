// Narrow DOM integrations for the verified AI Tutoring & Screen Use packet additions, 23 November 2026.
// Preserves all protected register rows, product-free FOCUS Act crosswalk rows and non-register boundaries.
(()=>{
 const ext=(url,label)=>`<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

 // 1. Symmetric Policy summary cards (#policy left = favorable structured uses; right = guardrails, comparators & limits)
 const policyColumns=document.querySelectorAll("#policy .policy-column");
 if(policyColumns.length>=2){
  policyColumns[0].insertAdjacentHTML("beforeend",
   finding(
    "Structured math apps, step-based tutoring and adult-facing AI coaching show targeted promise.",
    "In UK ages 4-5, daily interactive math apps improved paper-based math when supplementing regular instruction (d = +0.31), with a smaller, two-tailed-uncertain estimate when replacing a small-group math activity (d = +0.21, 95% CI [-0.03, +0.46]). Pre-LLM intelligent tutoring outperformed large-group instruction and workbooks on average (g = +0.41 overall; majority postsecondary), an instructor-scaffolded Harvard physics AI tutor outperformed active class lectures across two lessons, and real-time AI suggestions for human virtual math tutors in grades 3-6 raised session exit-ticket mastery by 4 percentage points (+9 points for lower-rated tutors).",
    '<a href="#study-outhwaite">Outhwaite et al. 2019: ages 4-5 RCT</a> · <a href="#study-ma-its">Ma et al. 2014: ITS meta-analysis</a> · <a href="#study-kestin-harvard">Kestin et al. 2025: higher-ed RCT</a> · <a href="#study-tutor-copilot">Wang et al. 2025: working paper</a>'
   )
  );
  policyColumns[1].insertAdjacentHTML("beforeend",
   finding(
    "Unguarded chatbots can harm unaided learning, and AI access does not guarantee tutoring dialogue.",
    "High-school math students given an unguarded GPT-4 chatbot scored 48% higher during assisted practice but 17% lower than textbook controls on a subsequent closed-book exam; teacher-primed guardrails prevented the harm without beating standard instruction. Pre-LLM intelligent tutoring did not outperform one-to-one human tutoring (g = -0.11, 95% CI [-0.31, +0.10]), and in a two-year Tennessee middle-school working-paper trial of Khan Academy with Khanmigo, first-year math effects were null, second-year gains were modest (+0.084 population SD), and students messaged the AI coach in only 17% of mistake sessions.",
    '<a href="#study-bastani-guardrails">Bastani et al. 2025: peer-reviewed RCT</a> · <a href="#record-M6">M6: ITS vs human tutoring</a> · <a href="#study-oreopoulos-khanmigo">Oreopoulos &amp; Low 2026: NBER working paper</a>'
   )
  );
 }

 // 2. Cross-reference on Evidence Explorer (#explorer) to the generative-AI & human-AI field trials on #emerging
 const explorerIntro=document.querySelector('#explorer .policy-section[aria-label="Instructional study context"] > p');
 if(explorerIntro){
  explorerIntro.insertAdjacentHTML("afterend",'<p class="small">Four generative-AI and human-AI field trials (high-school math guardrails, Harvard undergraduate physics, Tennessee middle-school math remediation working paper, and grades 3-6 Tutor CoPilot working paper) appear in <a href="#emerging-ai-studies">AI tutoring and human-AI field trials on NY Research &amp; FOCUS Act</a> because their outcome scales or unprinted 95% confidence intervals stay separate from the numerical register.</p>');
 }

 // 3. Methods & Source Governance documentation (#methods)
 const methodsEl=document.querySelector("#methods");
 if(methodsEl){
  methodsEl.insertAdjacentHTML("beforeend",`<section class="about-block" id="ai-tutoring-packet-methods" tabindex="-1" data-testid="ai-tutoring-packet-methods">
   <h2>AI tutoring packet intake: register pairs, working papers, duplicates and vendor-governance exclusion</h2>
   <p><strong>Balanced numerical register pairs (M3-M6):</strong> Two independent peer-reviewed sources from the November 2026 research packet report effect sizes and 95% confidence intervals on existing register scales and enter in symmetric pairs so positive and null or uncertain contrasts carry equal visual weight. Outhwaite et al. (2019) contributes <a href="#record-M3">M3</a> (supplemental early-years math apps vs control, d = +0.31 [0.06, 0.55]) alongside <a href="#record-M4">M4</a> (time-equivalent replacement vs control, d = +0.21 [-0.03, 0.46], one-tailed p = 0.042, two-tailed interval crossing zero); both share a 132-pupil control group and overlap Dorris et al. (2024) in <a href="#record-D1">D1</a>/<a href="#record-D2">D2</a>. Ma et al. (2014) contributes <a href="#record-M5">M5</a> (overall intelligent tutoring random-effects g = +0.41 [0.34, 0.48], 60 of 107 effects postsecondary) alongside <a href="#record-M6">M6</a> (versus individual human tutoring, g = -0.11 [-0.31, 0.10], k = 5); M6 is a comparator subset of M5 and overlaps other tutoring reviews, so participant counts are never summed. ${ext("https://discovery.ucl.ac.uk/id/eprint/10058087/1/Raising%20early%20achievement%20in%20math%20with%20interactive%20apps.pdf","Outhwaite et al. 2019 open PDF (p. 291)")} · ${ext("https://www.apa.org/pubs/journals/features/edu-a0037123.pdf","Ma et al. 2014 open PDF (Table 1, p. 907)")}</p>
   <p><strong>Narrative-only generative-AI trials:</strong> Four controlled generative-AI studies remain narrative cards in <a href="#emerging-ai-studies">AI tutoring and human-AI field trials</a> without interval calculation or scale conversion: <a href="#study-bastani-guardrails">Bastani et al. (2025)</a> reports normalized 0-to-1 exam regressions with classroom-clustered standard errors; <a href="#study-kestin-harvard">Kestin et al. (2025)</a> tests a higher-education Harvard physics sample and omits 95% confidence intervals in the main text; <a href="#study-oreopoulos-khanmigo">Oreopoulos &amp; Low (2026)</a> is a non-peer-reviewed NBER working paper reporting clustered standard errors on bundled Khan Academy plus Khanmigo remediation; and <a href="#study-tutor-copilot">Wang et al. (2025)</a> is a non-peer-reviewed EdWorkingPaper reporting session exit-ticket percentage-point gains for human tutors.</p>
   <p><strong>Withheld under vendor-efficacy source governance:</strong> Eames, Brunskill, Yamkovenko, Weatherholtz and Oreopoulos (2026), <em>Computer-assisted learning in the real world: How Khan Academy influences student math learning</em> (${ext("https://pmc.ncbi.nlm.nih.gov/articles/PMC12773755/","PNAS 123(1), e2507708123")}, three-year within-teacher/within-school longitudinal panel of 203,465 unique grades 3-8 students across 213,907 student-year observations, estimating +0.031 SD at 6.6 annual hours and projecting +0.085 SD at 30 weekly minutes, with 10% meeting recommended usage and 24% logging zero usage), was verified in full and excluded from both the numerical register and narrative study cards. Under this dashboard’s source-governance rule barring vendor-produced or vendor-coauthored product efficacy research, two coauthors (Bogdan Yamkovenko and Kodi Weatherholtz) are Efficacy Research staff at Khan Academy who co-designed the study and hold the proprietary non-public dataset, and a March 4, 2026 PNAS correction (${ext("https://pmc.ncbi.nlm.nih.gov/articles/PMC12974481/","PNAS 123(10), e2604984123")}) adds that two academic coauthors served uncompensated on Khan Academy’s informal research advisory committee from 2021 to 2024.</p>
   <p><strong>Duplicates screened out without re-entry:</strong> Seven packet items already represented on the dashboard were verified and not duplicated: Sanders et al. (2024) (<a href="#record-S1">S1-S7</a>), Dorris et al. (2024) (<a href="#record-D1">D1-D2</a>), OECD PISA 2022 Volume II Chapter 5 (<a href="#record-P1">P1-P7</a>), Roschelle et al. (2016) (<a href="#record-M2">M2</a> and <a href="#study-assistments-maine">Maine ASSISTments card</a>), Kulik &amp; Fletcher (2016) (<a href="#study-kulik">ITS median card</a>), Delgado et al. (2018) (<a href="#record-R1">R1</a> and Paper &amp; Notes), and the August 20, 2026 U.S. Department of Education Dear Colleague letter (<a href="#federal-policy-context">Federal &amp; state policy context</a>).</p>
   <p><a href="nov23-ai-tutoring-audit.md">Read the November 23, 2026 AI tutoring packet audit and verification notes</a> · <a href="new-values-ledger.csv" download>Download the updated exact-value ledger</a></p>
  </section>`);
 }

 // 4. Update modified Essential Questions timestamps to November 23, 2026
 for(const qid of ["q1-learning","q3-school-screen-time","q8-digital-divide","q10-ai-reading","q11-screening-and-learning","q12-ai-evidence-gaps","q13-worth-it"]){
  const timeEl=document.querySelector(`#${qid} .question-meta time`);
  if(timeEl){
   timeEl.setAttribute("datetime","2026-11-23");
   timeEl.textContent="November 23, 2026";
  }
 }

 // 5. Re-run route() if cold-loaded on any newly injected hash target
 const newHashes=["#emerging-ai-studies","#ai-tutoring-packet-methods","#study-outhwaite","#study-ma-its","#study-bastani-guardrails","#study-kestin-harvard","#study-oreopoulos-khanmigo","#study-tutor-copilot","#record-M3","#record-M4","#record-M5","#record-M6"];
 if(newHashes.includes(location.hash)){
  route();
 }
})();
