import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";
import {execFileSync} from "node:child_process";

const read=p=>fs.readFileSync(new URL(`../${p}`,import.meta.url),"utf8");
const priorCommit="95aace602d104be4df56e8722f2ccce1f53bab82";
const prior=p=>execFileSync("git",["show",`${priorCommit}:${p}`],{encoding:"utf8"});
const evaluate=(text,expr)=>JSON.parse(vm.runInNewContext(text+`;JSON.stringify(${expr})`));

// 1. Register & data immutability
assert.equal(crypto.createHash("sha256").update(read("site/data.js")).digest("hex"),"6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12");
const recs=evaluate(read("site/data.js")+"\n"+read("site/policy-data.js")+"\n"+read("site/personalized-data.js"),"records");
assert.equal(recs.length,36);

// 2. Full Essential Questions invariants AFTER nov19-sources.js runs
const full=evaluate(
 ["site/pulling-back.js","site/study-additions.js","site/questions.js","site/personalized-studies.js","site/nov19-sources.js"].map(read).join("\n"),
 "{q:essentialQuestions,ev:questionEvidence,targets:questionCardTargets,studies:addedStudies,nov19:nov19ContextStudies}"
);
assert.equal(full.nov19.length,2);
const apa=full.nov19.find(c=>c.id==="study-apa-2026");
const ip=full.nov19.find(c=>c.id==="study-instruction-partners");
assert.equal(apa.category,"Professional-association evidence synthesis");
assert(ip.category.includes("Qualitative classroom observation by a nonprofit")&&ip.category.includes("not outcome evidence"));
assert.equal(full.studies.filter(c=>c.register).length,2,"No new numerical register rows");

assert.equal(full.q.length,13);
for(const q of full.q){
 const sentences=q.short.trim().split(/(?<=[.!?])\s+/);
 assert(sentences.length>=2&&sentences.length<=3,`Question ${q.n} short answer must be 2–3 sentences`);
 for(const key of ["short","shows","doesnt","classroom","change"]){
  assert(q[key].length>20,`Question ${q.n} ${key} non-empty`);
  const stripped=q[key].replace(/K–12|K-12|1:1/g,"");
  if([1,10,11,12,13].includes(q.n)){
   assert(!/https?:\/\//.test(q[key]),`Question ${q.n} ${key} must not contain external URLs`);
   assert(!/\d/.test(stripped)||key==="shows"&&/49|nine|fourth|seventh/.test(q[key]),`Question ${q.n} ${key} unexpected digits`);
  }
 }
 for(const r of q.refs)assert(full.ev[r],`Missing questionEvidence entry ${r} in Q${q.n}`);
}
// Verify our newly appended prose in nov19-sources.js is 100% digit-free, URL-free and dash-free
const nov19ProseBlock=read("site/nov19-sources.js").split("const q1=essentialQuestions")[1];
assert(!/https?:\/\//.test(nov19ProseBlock),"No external URLs in nov19 question prose");
assert(!/—|\s–\s/.test(nov19ProseBlock),"Dash-free prose in nov19 question updates");
assert(full.q.find(q=>q.n===1).refs.includes("study-apa-2026"));
assert(full.q.find(q=>q.n===10).refs.includes("study-apa-2026"));
assert(full.q.find(q=>q.n===13).refs.includes("study-apa-2026"));
for(const n of [10,12,13])assert(full.q.find(q=>q.n===n).refs.includes("study-instruction-partners"));

// 3. Instructional Added Value tool ("show-me" transfer test)
const readingJs=read("site/reading.js");
assert(readingJs.includes('["transfer","“Show-me” transfer test (after the app is closed)"'));
assert(readingJs.includes("remember, explain and apply"));
assert(readingJs.includes("https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf"));

// 4. Policy, federal disagreement, NYC fall 2026, 3 polls, crosswalk, About disclosure, Methods
const policyJs=read("site/policy.js");
const integJs=read("site/nov19-integration.js");

assert(integJs.includes("Federal agencies currently disagree"));
assert(integJs.includes("https://www.ed.gov/media/document/guidance-education-technology-and-screentime-schools-114386.pdf"));
assert(integJs.includes("https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use.pdf"));
assert(integJs.includes("https://www.legis.iowa.gov/docs/publications/LGE/91/HF2676.pdf"));
assert(integJs.includes("https://www.schools.nyc.gov/about-us/policies/guidance-on-artificial-intelligence"));
assert(integJs.includes("Grades 2K–2")&&integJs.includes("30 minutes per day")&&integJs.includes("45 minutes per day"));

// Polls & EdChoice sponsor label + income split on both For Policymakers and Digital Divide
assert(integJs.includes('renderPublicOpinionBlock("public-opinion-policy","policy")'));
assert(integJs.includes('renderPublicOpinionBlock("public-opinion-equity","equity")'));
assert(integJs.includes("school-choice advocacy group"));
assert(integJs.includes("<td>48%</td><td>34%</td>"));
assert(integJs.includes("<td>52%</td><td>35%</td>"));
assert(integJs.includes("<td>54%</td><td>38%</td>"));
assert(integJs.includes("https://tcf.org/content/report/americans-are-united-against-the-tech-takeover-of-public-schools/"));

// Crosswalk: two neutral, product-free rows + educational question note
assert(policyJs.includes("§31 vs §33 · Targeted exclusions versus a blanket elementary ban"));
assert(policyJs.includes("§31 & §37(2) · K–5 screening and diagnostic assessment"));
assert(policyJs.includes("computer-adaptive universal screening and diagnostic assessment in K–5"));
assert(policyJs.includes("This is an educational question, not legal advice."));
assert(!/i-Ready|Curriculum Associates|NWEA MAP|Renaissance|Star Assessments|IXL|Khanmigo|Amira/i.test(policyJs.split("const crosswalk=")[1].split("const bios=")[0]),"Crosswalk must remain product-free");

// Verbatim About-page disclosure
assert(policyJs.includes("Organizations, including an education technology company, suggested sources for this dashboard. Every source was independently verified against the original, and no vendor reviewed or approved the content."));

// Methods page APA engagement != learning & independent validation
assert(integJs.includes('id="apa-synthesis-methods"'));
assert(integJs.includes("behavioral engagement is not learning"));
assert(integJs.includes("independent, third-party validation"));

// Zero news-clip or vendor packet citations in Nov. 19 files
for(const f of ["site/nov19-sources.js","site/nov19-integration.js","site/nov19-source-audit.md"]){
 const txt=read(f);
 assert(!/edweek\.org|chalkbeat\.org|the74million\.org|nytimes\.com|washingtonpost\.com|axios\.com|politico\.com|k12dive\.com|eschoolnews\.com|curriculumassociates\.com/i.test(txt),`No news or vendor links in ${f}`);
}

// Append-only ledger check against commit 95aace6
const ledgerNow=read("site/new-values-ledger.csv");
const ledgerBefore=prior("site/new-values-ledger.csv");
assert(ledgerNow.startsWith(ledgerBefore),"Ledger must remain strictly append-only");
assert.equal(ledgerNow.trim().split("\n").length,ledgerBefore.trim().split("\n").length+12,"12 verified Nov 19 primary-source rows appended");

console.log("PASS: all 7 November 19, 2026 primary-source additions, non-register labels, product-free crosswalk, verbatim disclosure, append-only ledger and zero news/vendor links verified.");
