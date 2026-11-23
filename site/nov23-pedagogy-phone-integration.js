// Narrow DOM integrations for the four verified narrative sources added 23 November 2026.
// Preserves all 40 numerical-register rows, protected files and product-free FOCUS Act crosswalk rows.
(()=>{
 const ext=(url,label)=>`<a href="${url}" target="_blank" rel="noopener">${label}</a>`;

 // 1. Symmetric Policy summary cards (#policy left = where technology or distraction limits help; right = where caution is warranted)
 const policyColumns=document.querySelectorAll("#policy .policy-column");
 if(policyColumns.length>=2){
  policyColumns[0].insertAdjacentHTML("beforeend",
   finding(
    "Lockable personal-phone pouches modestly lift annual growth, and supplemental math tools offer modest help.",
    "Across roughly 3.3 million Grade 3-10 students in 4,600 U.S. schools, schools adopting lockable personal-phone pouches cut in-school phone pings by 11% to 20% and gained +0.0087 SD per year in pooled math and reading growth (roughly one to two weeks of instruction), with stronger protection at the 10th percentile of reading growth (+0.0172 SD). Separately, across 74 K-12 mathematics studies (56,886 students), supplemental math technology produced modest average gains (ES = +0.16 overall; +0.19 for supplemental CAI).",
    '<a href="#study-cepr-phones-2026">Burland et al. Nov. 2026: Harvard CEPR report</a> · <a href="#study-cheung-slavin-2013">Cheung &amp; Slavin 2013: peer-reviewed meta-analysis</a>'
   )
  );
  policyColumns[1].insertAdjacentHTML("beforeend",
   finding(
    "Hardware rollouts and digital substitution without pedagogical change yield null or shrinking gains.",
    "In 318 rural Peruvian primary schools, One Laptop per Child raised computers per student from 0.12 to 1.18 without improving math or language scores. UNESCO’s 2023 global synthesis similarly found classroom hardware such as UK interactive whiteboards often replaced blackboards without changing teaching while more than one in three ICILS teachers reported classroom ICT distraction. In Cheung & Slavin’s math review, true randomized trials averaged half the overall effect (+0.08), and in Harvard CEPR’s phone report, 2025-26 statewide bans could not be interpreted causally because of pre-existing state trend differences.",
    '<a href="#study-cristia-peru-olpc">Cristia et al. 2017: peer-reviewed RCT</a> · <a href="#study-unesco-gem-2023">UNESCO 2023 GEM Report: intergovernmental</a> · <a href="#study-cheung-slavin-2013">Cheung &amp; Slavin 2013: RCT subset</a> · <a href="#study-cepr-phones-2026">Harvard CEPR 2026: state-ban pre-trends</a>'
   )
  );
 }

 // 2. Balanced DOM update to Row 3 (New York's phone law) on #pulling-back without touching protected pulling-back.js
 const pbRows=document.querySelectorAll("#pulling-back table.weigh tbody tr");
 if(pbRows.length>=3){
  const agreeUl=pbRows[2].querySelector("td.agree ul");
  const differUl=pbRows[2].querySelector("td.differ ul");
  if(agreeUl){
   agreeUl.insertAdjacentHTML("beforeend",
    '<li><strong>Student-level U.S. growth data show small annual pouch gains.</strong> Analyzing ~3.3 million Grade 3-10 students across 4,600 schools (2021-22 to 2025-26), Harvard CEPR researchers found lockable pouches cut in-school phone pings 11% to 20% and raised annual growth by +0.0087 SD (about one to two weeks of instruction), while reducing large bottom-tail reading losses (+0.0172 SD at the 10th percentile). <a href="#study-cepr-phones-2026">Burland, Kane, Staiger et al. Nov. 2026 · commissioned/foundation-supported report</a></li>'
   );
  }
  if(differUl){
   differUl.insertAdjacentHTML("beforeend",
    '<li><strong>Statewide 2025-26 bans showed confounding pre-trends and test personal phones, not classroom computers.</strong> In the same Harvard CEPR report, 2025-26 statewide bell-to-bell bans (including New York) and instructional-time bans showed no differential drop in mobile geolocation pings and could not be interpreted causally because adopting states had different 2020-21 in-person schooling rates and pre-ban growth trajectories. <a href="#study-cepr-phones-2026">Harvard CEPR state-ban limits</a></li>'
   );
  }
 }

 // 3. Methods & Source Governance documentation (#methods)
 const methodsEl=document.querySelector("#methods");
 if(methodsEl){
  methodsEl.insertAdjacentHTML("beforeend",`<section class="about-block" id="subramonyam-sources-methods" tabindex="-1" data-testid="subramonyam-sources-methods">
   <h2>Pedagogical design and phone-ban intake: four primary/official narrative cards and commentary exclusion</h2>
   <p><strong>Commentary essay excluded as outcome evidence:</strong> Hari Subramonyam’s November 20, 2026 Substack essay (<em>The Problem With Ed Tech Isn’t Screen Time</em>) is excluded from the dashboard’s evidence base because opinion commentary is not primary empirical research, a systematic review or an official report. Instead, the four empirical and intergovernmental works cited inside that essay were independently retrieved and verified against their original publications.</p>
   <p><strong>Why all four verified sources enter as narrative cards:</strong> Under the numerical-register gate, <a href="#study-cepr-phones-2026">Burland, Kane, Staiger et al. (Nov. 17, 2026, Harvard CEPR)</a> is a non-peer-reviewed foundation-supported report whose main tables (Tables 2 and 3) print school-clustered standard errors rather than 95% confidence intervals; <a href="#study-cristia-peru-olpc">Cristia et al. (2017, AEJ: Applied Economics)</a> has paywalled journal tables (with 95% CIs NR in the official AEA abstract and school-clustered standard errors in the open-access 2012 IDB working paper); <a href="#study-unesco-gem-2023">UNESCO’s 2023 Global Education Monitoring Report</a> is a narrative intergovernmental synthesis without a pooled effect size (${ext("https://unesdoc.unesco.org/ark:/48223/pf0000385723","UNESDOC full report")}); and <a href="#study-cheung-slavin-2013">Cheung &amp; Slavin (2013, Educational Research Review)</a> labels its covariate-adjusted standardized metric simply ES without confirming Cohen’s d versus Hedges’ g while substantially overlapping <a href="#record-M1">Ran, Kim &amp; Secada (2022) in M1</a> across K&#8209;12 mathematics studies, so keeping it as a narrative card avoids mixing unlabeled scales or double-counting overlapping samples.</p>
   <p><a href="nov23-pedagogy-phone-audit.md">Read the November 23, 2026 pedagogical and phone-ban source verification audit</a> · <a href="new-values-ledger.csv" download>Download the updated exact-value ledger</a></p>
  </section>`);
 }

 // 4. Update modified Essential Questions timestamps to November 23, 2026
 for(const qid of ["q1-learning","q4-wellbeing","q7-phones-and-school-devices","q8-digital-divide","q13-worth-it"]){
  const timeEl=document.querySelector(`#${qid} .question-meta time`);
  if(timeEl){
   timeEl.setAttribute("datetime","2026-11-23");
   timeEl.textContent="November 23, 2026";
  }
 }

 // 5. Support cold hash navigation to #subramonyam-sources-methods and new study cards
 questionCardTargets["subramonyam-sources-methods"]={view:"methods",selector:"#subramonyam-sources-methods",index:0};
 const newHashes=["#subramonyam-sources-methods","#study-cepr-phones-2026","#study-cristia-peru-olpc","#study-unesco-gem-2023","#study-cheung-slavin-2013"];
 if(newHashes.includes(location.hash)){
  route();
 }
})();
