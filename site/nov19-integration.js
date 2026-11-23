// Verified primary-source policy, municipal, public-opinion and methods context, 19 November 2026.
// None of these sections enter the numerical evidence register or mix opinion/policy guidance with outcome estimates.
(()=>{
 const ext=(url,label)=>`<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
 const urls={
  apaPdf:"https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf",
  apaPage:"https://www.apa.org/pubs/reports/children-adolescent-learning-educational-technology",
  apaRelease:"https://www.apa.org/news/press/releases/2026/09/education-technology-engagement",
  edDcl:"https://www.ed.gov/media/document/guidance-education-technology-and-screentime-schools-114386.pdf",
  hhsAdv:"https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use.pdf",
  hhsToolkit:"https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use-toolkit.pdf",
  iowaBill:"https://www.legis.iowa.gov/docs/publications/LGE/91/HF2676.pdf",
  iowaFaq:"https://educate.iowa.gov/media/13274/download",
  nycPolicy:"https://www.schools.nyc.gov/about-us/policies/guidance-on-artificial-intelligence",
  nycBell:"https://www.schools.nyc.gov/about-us/news/morning-bell/contentdetails/morning-bell/2026/09/10/nyc-schools-to-remain-distraction-free-in-2026-27",
  npuMay:"https://nationalparentsunion.org/wp-content/uploads/2026/06/National-Parents-Union-May-2026-Survey-Topline.pdf",
  npuSept:"https://nationalparentsunion.org/wp-content/uploads/2026/09/National-Parents-Union-September-2026-Survey-Topline.pdf",
  edchoicePost:"https://www.edchoice.org/2026-parents-divided-on-technology-and-student-preparation-for-life-after-graduation/",
  edchoiceReport:"https://edchoice.mcdatahub.com/edchoice/Reports/Adults_Mar26_May26.pdf",
  edchoiceApr:"https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_April_2026.pdf",
  edchoiceMar:"https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_March_2026.pdf",
  tcf:"https://tcf.org/content/report/americans-are-united-against-the-tech-takeover-of-public-schools/"
 };

 // 1. Federal policy disagreement + Iowa statutory context on NY Research & FOCUS Act (#emerging)
 const federalCard=`<article id="federal-policy-context" class="context-narrative-card" tabindex="-1" data-testid="federal-policy-context" aria-labelledby="federal-policy-title">
  <div class="eyebrow">FEDERAL &amp; STATE POLICY CONTEXT · NOT OUTCOME EVIDENCE</div>
  <h3 id="federal-policy-title">Federal agencies currently disagree on classroom screens.</h3>
  <p>Federal agencies currently disagree on how schools should govern classroom devices and digital instruction, while states have begun enacting statutory limits of their own. Neither federal document below is an empirical study or a binding federal mandate, and none of the three items enters the dashboard’s evidence register.</p>
  <div class="context-grid-3">
   <section>
    <span class="context-sponsor">U.S. Department of Education · Aug. 20, 2026</span>
    <h4>Quality of use over screen minutes</h4>
    <p>An Office of Elementary and Secondary Education “Dear Colleague” letter signed by Assistant Secretary Kirsten Baesler offers non-binding considerations leaving decisions to states and local districts with parent and teacher input. It separates recreational screen exposure from instructional technology and urges judging tools by instructional quality and demonstrated student learning outcomes rather than screen minutes alone. ${ext(urls.edDcl,"U.S. Dept. of Education Dear Colleague letter (pp. 1–5)")}</p>
    <p>The letter highlights state contracting models built around shared performance measures and shared accountability rather than adoption or usage counts alone, and encourages tying procurement and contract renewals to independent effectiveness evidence, including randomized controlled trials. ${ext(urls.edDcl,"Dear Colleague letter (pp. 3–5)")}</p>
   </section>
   <section>
    <span class="context-sponsor">HHS / Office of the Surgeon General · May 20, 2026</span>
    <h4>Precautionary screen reduction and computer labs</h4>
    <p>Issued three months earlier, the 45-page public-health advisory and school toolkit recommend limiting classroom screen time to support distraction-free teaching (with IEP, Section 504, health-monitoring and emergency exceptions) and adopting bell-to-bell cell phone restrictions. Rather than routine individual classroom devices, the advisory recommends making individually accessible devices available in a shared computer lab, investing in physical textbooks, prioritizing pen-and-paper curricula and hands-on learning across all grade levels, and assigning work in books or on paper whenever possible. ${ext(urls.hhsAdv,"HHS / Surgeon General Advisory (pp. 28–29)")} · ${ext(urls.hhsToolkit,"School Action Toolkit (p. 11)")}</p>
    <p>The advisory notes explicitly that it is not a formal systematic review. ${ext(urls.hhsAdv,"Advisory methodology note (p. 7)")}</p>
   </section>
   <section>
    <span class="context-sponsor">State Statute · Iowa HF 2676 (Iowa Code § 279.89) · Signed May 20, 2026</span>
    <h4>60-minute elementary daily cap with statutory carve-outs</h4>
    <p>Iowa enacted a binding 60-minute cumulative daily cap on K–5 digital instruction in public and charter schools, prohibited device use during recess, and required school-board review checklists before adopting or renewing 1:1 device programs across grades K–12. ${ext(urls.iowaBill,"Iowa HF 2676 enrolled bill (pp. 12–14)")} · ${ext(urls.iowaFaq,"Iowa Dept. of Education FAQ")}</p>
    <p>Unlike a blanket ban, Iowa Code § 279.89(2)(b) exempts IEP and Section 504 uses, assistive or adaptive accessibility technology, teacher-directed projector or smartboard demonstrations where pupils are not operating individual devices, state and local screening, progress-monitoring and diagnostic assessments requiring a 1:1 device, and dedicated computer science or technology curricula. ${ext(urls.iowaBill,"§ 279.89(2)(b)(1)–(5)")}</p>
   </section>
  </div>
  <p class="source-line">Policy and statutory context only, verified 19 November 2026. Federal disagreement reflects contrasting agency priorities (instructional utility and performance-focused procurement at ED versus precautionary screen reduction at HHS), and Iowa’s 2026 cap has not yet been evaluated for student achievement or equity effects.</p>
 </article>`;

 // 2. NYC Public Schools fall 2026 classroom screen-time restrictions (#emerging)
 const nycCard=`<article id="nyc-screen-policy" class="context-narrative-card" tabindex="-1" data-testid="nyc-screen-policy" aria-labelledby="nyc-policy-title">
  <div class="eyebrow">NEW YORK POLICY CONTEXT · OFFICIAL NYC PUBLIC SCHOOLS GUIDANCE · NOT OUTCOME EVIDENCE</div>
  <h3 id="nyc-policy-title">New York City Public Schools restricted younger students’ 1:1 screen time in fall 2026.</h3>
  <p>Official New York City Public Schools guidance for the 2026–27 school year pairs the state’s bell-to-bell personal-device ban with grade-banded limits on school-assigned 1:1 screen time and a K–8 moratorium on student-facing generative AI. ${ext(urls.nycPolicy,"NYC Public Schools 2026–27 Screen Time & AI Guidance")} · ${ext(urls.nycBell,"NYCPS Sept. 10, 2026 announcement")}</p>
  <div class="nyc-band-grid">
   <div><h4>Grades 2K–2</h4><p>No 1:1 student screen time. Student-facing generative AI prohibited.</p></div>
   <div><h4>Grades 3–5</h4><p>Recommended maximum of 30 minutes per day of 1:1 screen time. Student-facing generative AI prohibited.</p></div>
   <div><h4>Grades 6–8</h4><p>Recommended maximum of 45 minutes per day of 1:1 screen time. Student-facing generative AI prohibited.</p></div>
   <div><h4>Grades 9–12</h4><p>Screen time varies by school and course. Student-facing generative AI restricted to centrally approved literacy modules, career courses and vetted pilots.</p></div>
  </div>
  <p><strong>Explicit NYCPS exceptions across all grades:</strong> assistive technologies and necessary tools for students with disabilities (IEP and Section 504) and English Language Learners; assessments including screeners and diagnostics; remote-instruction days; centrally approved digital instruction (such as e-books, robotics, coding and simulations); and teacher-led whole-group or small-group instruction using computers, tablets or interactive boards. AI remains barred across all grades for grading, behavior monitoring and placement, promotion or graduation decisions. ${ext(urls.nycPolicy,"Official NYCPS exceptions and AI guardrails")}</p>
  <p class="source-line">Municipal policy context only, verified 19 November 2026 from official NYC Public Schools publications. Unlike proposed S10685’s statutory pre-K–5 device prohibition, NYC’s administrative framework eliminates routine 1:1 use in grades 2K–2, sets daily ceilings in grades 3–8 and explicitly exempts screeners, diagnostics and centrally approved instruction; its academic effects have not yet been evaluated.</p>
 </article>`;

 const crosswalkHeading=[...document.querySelectorAll("#emerging h2")].find(h=>h.textContent.includes("FOCUS Act crosswalk"));
 if(crosswalkHeading){
  crosswalkHeading.id="focus-crosswalk";
  crosswalkHeading.insertAdjacentHTML("beforebegin",federalCard+nycCard);
 }

 // Cross-link from For Policymakers (#policy) to federal disagreement + NYC policy context
 const policyAside=document.querySelector("#policy .policy-limits");
 if(policyAside){
  policyAside.insertAdjacentHTML("beforeend",`<p class="small" style="margin-top:var(--s2)">Federal agencies currently disagree on school screen policy, and New York City restricted younger students’ 1:1 classroom screen time in fall 2026; <a href="#federal-policy-context">compare the U.S. Department of Education, HHS / Surgeon General, Iowa and NYC frameworks</a>.</p>`);
 }

 // 3. Public opinion context (3 polls together with sponsors + EdChoice income split) on For Policymakers AND Digital Divide
 function renderPublicOpinionBlock(id,variant){
  const equityNote=variant==="equity"
   ?"In the digital-divide debate, opinion surveys show that lower-, middle- and higher-income parents all express high overall support for classroom laptops in the EdChoice / Morning Consult survey (with slightly higher uncertain responses among lower-income households), while majorities in the National Parents Union and Century Foundation surveys simultaneously want daily caps, cart-based routines, home broadband for low-income families and guardrails on data and unproven AI."
   :"Across three 2026 national polls with different sponsors, respondent universes and question framing, parents and voters generally reject both unrestricted screen access and total elementary bans: majorities support classroom laptops alongside daily caps, shared carts, data privacy rules and independent proof before purchase.";
  return `<section id="${id}" class="${variant==="equity"?"equity-section":"context-narrative-card"}" tabindex="-1" data-testid="${id}" aria-labelledby="${id}-title">
   <div class="eyebrow">PUBLIC OPINION CONTEXT · THREE 2026 POLLS WITH SPONSORS · NOT OUTCOME EVIDENCE</div>
   <h3 id="${id}-title">What parents and voters tell pollsters in 2026</h3>
   <p>${equityNote} Public-opinion polls measure preferences and concerns; they are not evidence of what improves student learning or narrows achievement gaps.</p>
   <div class="context-grid-3">
    <section>
     <span class="context-sponsor">Sponsor: National Parents Union · Echelon Insights (May–June &amp; Sept. 2026)</span>
     <h4>Caps and shared carts over total bans</h4>
     <p>Among K–12 public school parents, 78% in September 2026 (N = 1,528, MoE ±2.6 pp) favored limiting K–2 classroom learning screen time without banning it, 11% favored a ban and 7% favored unlimited use; 58% preferred storing classroom laptops on carts for set times versus 38% at desks all day. Majorities backed banning data harvesting (86%), home high-speed internet for low-income families (85%), AI safety instruction (85%), barring unproven tech purchases (81%), teaching effective AI use (77%) and banning school-day student AI chatbots (71%). ${ext(urls.npuSept,"NPU Sept. 2026 topline (Q19–Q23)")}</p>
     <p>In the May 28–June 1, 2026 wave (N = 1,527, MoE ±2.7 pp), 74% said schools used computers or tablets about the right amount (17% too much, 6% not enough), while 75% favored a daily learning screen-time cap and 1% of cap supporters (n = 1,146) chose zero screen time. ${ext(urls.npuMay,"NPU May 2026 topline (Q19, Q21–Q22)")}</p>
    </section>
    <section>
     <span class="context-sponsor">Sponsor: EdChoice (school-choice advocacy group) · Morning Consult (Spring 2026)</span>
     <h4>High laptop support across household income groups</h4>
     <p>Sponsored by EdChoice, a school-choice advocacy group, Morning Consult’s spring 2026 parent tracking surveys reported 86% overall parent support for classroom laptops (51% strongly, 35% somewhat) and 84% for online learning platforms, compared with 60% for AI programs and 50% for cell phones, alongside 33% expressing high concern about AI’s impact on learning. ${ext(urls.edchoicePost,"EdChoice June 9, 2026 release")} · ${ext(urls.edchoiceReport,"March–May 2026 report (pp. 47–51)")}</p>
     <div class="tablewrap" tabindex="0" aria-label="EdChoice Morning Consult classroom laptop support by household income">
      <table class="poll-income-table">
       <thead><tr><th scope="col">Income (Apr. 2026)</th><th scope="col">Strongly</th><th scope="col">Somewhat</th><th scope="col">Oppose</th><th scope="col">Don’t know</th></tr></thead>
       <tbody>
        <tr><th scope="row">Under $50k (n=538)</th><td>48%</td><td>34%</td><td>5% / 6%</td><td>7%</td></tr>
        <tr><th scope="row">$50k–$100k (n=440)</th><td>52%</td><td>35%</td><td>7% / 5%</td><td>2%</td></tr>
        <tr><th scope="row">$100k+ (n=396)</th><td>54%</td><td>38%</td><td>4% / 3%</td><td>1%</td></tr>
       </tbody>
      </table>
     </div>
     <p class="source-line">Exact printed subgroup columns from ${ext(urls.edchoiceApr,"April 2026 Parent Crosstabs, Table EC265_2, p. 288")} (March 2026 wave, N = 1,305, shows 48%/32% under $50k, 50%/37% at $50k–$100k and 47%/46% at $100k+: ${ext(urls.edchoiceMar,"March 2026 Crosstabs, p. 283")}).</p>
    </section>
    <section>
     <span class="context-sponsor">Sponsor: The Century Foundation · Morning Consult (May 2026; pub. Aug. 25, 2026)</span>
     <h4>Voters want clear public rules and data guardrails</h4>
     <p>In a May 21–24, 2026 survey of N = 2,002 registered voters (split sample n = 987 and n = 1,015), 77% wanted clear government rules and standards for classroom technology and AI: 49% said classroom tech and AI should be kept to a minimum with clear government rules, and 28% favored embracing proven tools with government rules and standards, versus 23% favoring no new rules. ${ext(urls.tcf,"The Century Foundation / Morning Consult report (Aug. 25, 2026)")}</p>
     <p>Registered voters voiced broad concern about students using AI to complete assignments without learning (85% concerned; 60% very concerned), companies profiting from student data (84% concerned), and pressure on teachers to use unproven tools (81% concerned); 73% called K–12 screens and tech a problem. ${ext(urls.tcf,"TCF voter findings and note 48")}</p>
    </section>
   </div>
   <p class="source-line">Context only; excluded from evidence plots, counts and CSV. Sponsor orientation, question wording and respondent populations (public school parents vs all school parents vs registered voters) shape survey results.</p>
  </section>`;
 }

 const policyScopeNote=document.querySelector("#policy .scope-note");
 if(policyScopeNote){
  policyScopeNote.insertAdjacentHTML("beforebegin",renderPublicOpinionBlock("public-opinion-policy","policy"));
 }

 const equitySources=document.querySelector("#digital-divide .equity-sources");
 if(equitySources){
  equitySources.insertAdjacentHTML("beforebegin",renderPublicOpinionBlock("public-opinion-equity","equity"));
  const equitySourceList=equitySources.querySelector(".equity-source-list");
  if(equitySourceList){
   equitySourceList.insertAdjacentHTML("beforeend",`
    <section><h4>${ext(urls.npuSept,"National Parents Union / Echelon Insights (May & Sept. 2026)")}</h4><p class="source-line">Public-opinion poll · National Parents Union (parent advocacy organization)</p><p>May 28–June 1, 2026 (N = 1,527, MoE ±2.7 pp, ${ext(urls.npuMay,"May topline PDF")}) and Sept. 7–11, 2026 (N = 1,528, MoE ±2.6 pp, ${ext(urls.npuSept,"Sept. topline PDF")}) online surveys of K–12 public school parents. Opinion context only; not learning-outcome evidence.</p></section>
    <section><h4>${ext(urls.edchoiceApr,"EdChoice / Morning Consult (Spring 2026)")}</h4><p class="source-line">Public-opinion poll · EdChoice (school-choice advocacy group)</p><p>Spring 2026 school-parent surveys (${ext(urls.edchoiceReport,"March–May 2026 report, pp. 47–51")}; ${ext(urls.edchoiceApr,"April 2026 Parent Crosstabs, Table EC265_2, p. 288, N = 1,374")}; ${ext(urls.edchoiceMar,"March 2026 Parent Crosstabs, p. 283, N = 1,305")}). Slide 48 carries a footer typo (“2025”) while reporting the 2026 tracking wave; exact crosstab columns are reported directly without summing rounded cells.</p></section>
    <section><h4>${ext(urls.tcf,"The Century Foundation / Morning Consult (May 2026)")}</h4><p class="source-line">Public-opinion poll · The Century Foundation (public-policy think tank)</p><p>May 21–24, 2026 survey of N = 2,002 registered voters (split sample n = 987 and n = 1,015, report note 48), published August 25, 2026. Voter attitude context only; not classroom outcome evidence.</p></section>`);
  }
 }

 // 4. Methods page (#methods): APA engagement != learning & independent validation standard + Nov 19 audit link
 const methodsTarget=document.querySelector("#methods");
 if(methodsTarget){
  methodsTarget.insertAdjacentHTML("beforeend",`<section class="about-block" id="apa-synthesis-methods" tabindex="-1" data-testid="apa-synthesis-methods">
   <h2>Engagement is not learning, and claims need independent validation</h2>
   <p>A professional-association evidence synthesis from the American Psychological Association (released September 3, 2026; 10 evidence-based recommendations) reinforces two methodological rules used across this dashboard. First, behavioral engagement is not learning: enjoyment ratings, click streaks, time logged and in-app task completion do not establish that students understand, retain or can transfer knowledge once the digital scaffold is removed. ${ext(urls.apaPdf,"APA Expert Report (Sept. 3, 2026, pp. 3–5)")} · ${ext(urls.apaPage,"APA report overview")}</p>
   <p>Second, procurement and renewal claims warrant independent, third-party validation rather than vendor usage reports or unverified self-attestations. Recommendation 2 advises testing whether learning and skill transfer persist outside the platform at least one week after use, while Recommendations 8 and 10 call for disaggregating effects across learner subgroups and pairing adoption with ongoing teacher support and independent research. ${ext(urls.apaPdf,"APA Recommendations 1–2, 8 & 10 (pp. 4–5, 10–12)")} · <a href="#study-apa-2026">Inspect the APA synthesis context card</a></p>
   <p><a href="nov19-source-audit.md">Read the November 19, 2026 primary-source verification audit and flags</a> · <a href="new-values-ledger.csv" download>Download the updated exact-value ledger</a></p>
  </section>`);
 }

 // Update Essential Questions draft banner and modified question dates
 const draftNote=document.querySelector("#questions .questions-draft p");
 if(draftNote){
  draftNote.textContent=draftNote.textContent.replace("November 18, 2026","November 23, 2026");
 }
 for(const qid of ["q1-learning","q12-ai-evidence-gaps","q13-worth-it"]){
  const timeEl=document.querySelector(`#${qid} .question-meta time`);
  if(timeEl){
   timeEl.setAttribute("datetime","2026-11-19");
   timeEl.textContent="November 19, 2026";
  }
 }
 for(const qid of ["q10-ai-reading","q11-screening-and-learning"]){
  const timeEl=document.querySelector(`#${qid} .question-meta time`);
  if(timeEl){
   timeEl.setAttribute("datetime","2026-11-23");
   timeEl.textContent="November 23, 2026";
  }
 }

 // Re-run route() if cold-loaded on one of the newly injected deep-link fragments
 if(["#federal-policy-context","#nyc-screen-policy","#public-opinion-policy","#public-opinion-equity","#apa-synthesis-methods"].includes(location.hash)){
  route();
 }
})();
