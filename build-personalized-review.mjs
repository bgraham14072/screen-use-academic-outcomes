// Mechanical exports from the same source-audited content rendered in the draft.
import fs from "node:fs";
import vm from "node:vm";
const read=p=>fs.readFileSync("site/"+p,"utf8");
const d=JSON.parse(vm.runInNewContext(["pulling-back.js","study-additions.js","questions.js","personalized-studies.js"].map(read).join("\n")+";JSON.stringify({studies:personalizedStudies,allStudies:addedStudies,questions:essentialQuestions,evidence:questionEvidence})"));
const quote=s=>'"'+String(s??"NR").replaceAll('"','""')+'"';
const line=xs=>xs.map(quote).join(",")+"\n";
const esc=s=>String(s).replaceAll("|"," / ").replaceAll("\n"," ");
let audit="# Personalized Instruction: Source Audit and Placement Table\n\nPublic dashboard update, November 18, 2026. The original register and all prior numerical additions are preserved; the new Maine row is a single reanalysis of an existing trial family, not another independent trial.\n\n";
audit+="## Admission and balance\n\nThe draft adds one compatible numerical row, M2, using the reported Maine Hedges’ g and confidence interval. Mindspark remains narrative because its primary effects use baseline-test SD units rather than the existing g/d scales; North Carolina remains narrative because its reported error is on the raw-point scale and no reported g interval was verified. The latest instructions permit computed intervals, but none are calculated in this draft. No new point estimate is calculated or rounded. Narrative placement is not a quality downgrade.\n\nFavorable, mixed and null findings use the same card component, typography, field order and source disclosures. RAND reports appear together in chronological sequence. Review findings are not averaged with primary trials, matched comparisons are not relabeled randomized, and overlapping student samples are never summed.\n\n";
for(const c of d.studies){
 audit+=`### ${c.label}: ${c.title}\n\n`;
 audit+=`| Audit field | Verified content |\n|---|---|\n`;
 const fields=[
 ["Decision",c.register?`Numerical register ${c.register}, with contextual card; no second Maine record`:"Narrative only"],
 ["Authors / venue",c.authors+". "+c.venue],
 ["Design / source type",c.design+" "+c.category],
 ["Funder",c.funder],
 ["Setting / grades / sample",c.population],
 ["Duration / comparison / intervention",c.context],
 ["Findings, including nulls",c.finding],
 ["Limits / verification depth",c.limits],
 ["Every new research value and location",c.values],
 ["Source locations",c.locator],
 ["Every site placement",c.placements],
 ["Original sources",`[Publication](${c.url}); [original full text or author report](${c.full})${(c.companions||[]).map(([u,l])=>`; [${l}](${u})`).join("")}`]
 ];
 const auditCites=[[c.full,"Original publication"],...(c.companions||[])].map(([u,l])=>`[${l}](${u})`).join("; ");
 for(const [k,v]of fields) audit+=`| ${k} | ${esc(v)}${!["Original sources","Decision","Every site placement"].includes(k)?` (${auditCites})`:""} |\n`;
 audit+="\n";
}
audit+="### Létourneau et al. (2025): existing card reused\n\n| Audit field | Verified content |\n|---|---|\n| Decision | Existing narrative card #study-letourneau is linked, not re-added. |\n| Design / type | Systematic review with narrative synthesis; peer-reviewed npj Science of Learning article. [Original](https://pmc.ncbi.nlm.nih.gov/articles/PMC12078640/). |\n| Scope / comparison | K–12, mainly older pupils and STEM; generally favorable against traditional instruction, smaller and mixed against non-intelligent digital comparators. Varying durations, no common duration or pooled estimate. [Original, Abstract and Results](https://pmc.ncbi.nlm.nih.gov/articles/PMC12078640/). |\n| Funder | IVADO, Strategic Research Funding Program, PRF-2021-05. [Original, Acknowledgements](https://pmc.ncbi.nlm.nih.gov/articles/PMC12078640/). |\n| Placement | Existing Evidence card; existing Q10/Q12 links preserved; Methods explicitly links the original card. No duplicated participants or new numerical effect. |\n\n";
audit+="## Withheld or not fully verified\n\n";
audit+="- **Cognitive Tutor school total:** the supplied 147-school claim and exact grade range were not verified in the accessible original article abstract and full author addendum. They are not displayed as verified numbers. The card labels this verification limit; the author addendum supplies the analytical student samples, and the government review supplies the adjustment explanation. [Article](https://doi.org/10.3102/0162373713507480); [author addendum](https://www.rand.org/content/dam/rand/pubs/working_papers/WR1000/WR1050/RAND_WR1050.pdf).\n";
audit+="- **North Carolina 2025 journal details:** the successor exists, but its full methods and numerical tables were inaccessible. No new finding is attributed to that full article. The card’s numbers come from the original 2024 WestEd technical report; the journal link is identified as pending full-text verification. [Journal record](https://onlinelibrary.wiley.com/doi/10.1111/bjet.13579).\n";
audit+="- **Maine lower-performer numerical contrast:** the original text and table disagree (13.35 versus 14.35 points). Both numbers are withheld from the dashboard; the qualitative interaction is retained. [Roschelle 2016, p. 8](https://files.eric.ed.gov/fulltext/EJ1194398.pdf).\n";
audit+="- **Kulik military/college split:** the source explicitly tabulates school versus postsecondary settings, but not a separate military-versus-college total. No inferred count is displayed. Conflicting nonconventional-control summaries are not reproduced. [Original article, Tables 2–5](https://www.ida.org/assets/2026/06/18023241/D-8391.pdf).\n";
audit+="- **Federal superlative and aggregate N:** “largest federal” was not established; inconsistent or analysis-specific sample counts are not combined. No such superlative or combined total is displayed. [First report](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pdf/20074005.pdf); [follow-on](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pubs/20094041/pdf/20094041.pdf).\n";
audit+="- **RAND district declines:** a universal claim that district schools declined in the later evaluation was not established. The draft retains verified variation and grade confounding, not that broader claim. [RAND 2017, pp. 37–38](https://www.rand.org/content/dam/rand/pubs/research_reports/RR2000/RR2042/RAND_RR2042.pdf).\n";
audit+="- **Component causality and young-child AI:** no causal explanation that teacher involvement alone accounts for cross-study differences, no proven universal time limit, and no direct young-child generative-AI efficacy inference is added. [Escueta 2020, pp. 983–985](https://pubs.aeaweb.org/doi/pdf/10.1257/jel.20191507).\n\n";
audit+="## Corrections to the research leads\n\n- **Mindspark attendance:** 58% is mean attendance among voucher winners, not a take-up percentage; the intervention included instructor-supported study. [Accepted manuscript, pp. 7–9](https://econweb.ucsd.edu/~kamuralidharan/papers/Published%20Articles/Disrupting_education_AER.pdf).\n- **Murphy 2020:** this is a reanalysis of the Maine trial, not a separate long-term follow-up. [Original, p. 255](https://files.eric.ed.gov/fulltext/ED657283.pdf).\n- **LeapTrack:** the significant exception is in the pooled product analysis, not a significant second-year-only estimate. [Federal 2009, pp. 53–55](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pubs/20094041/pdf/20094041.pdf).\n- **Software time:** the first federal report’s fourth-grade association and the follow-on report’s null change-in-usage analysis concern different analyses; neither is a randomized dose test. [Federal 2007, pp. 47–49](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pdf/20074005.pdf); [Federal 2009, executive summary](https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pubs/20094041/pdf/20094041.pdf).\n- **WWC discrepancy:** the 2026 Cognitive Tutor page’s domain heading conflicts with its nonsignificant outcome rows; the earlier government report documents a multiple-comparison adjustment. The draft discloses both rather than selecting the favorable heading. [2026 review](https://ies.ed.gov/ncee/wwc/study/82101); [2016 report, pp. 30–31](https://files.eric.ed.gov/fulltext/ED566735.pdf).\n\n";
audit+="## Unresolved items\n\nMissing or conflicting items stay withheld until verified in original sources.\n";
fs.writeFileSync("site/personalized-learning-audit.md",audit);
let review="# Essential Questions 1 and 13: Full Answer Text\n\nNovember 23, 2026. Full answer text from the public dashboard. These are editorial summaries, not new pooled research results.\n\n";
const reviewSources={
 1:[["mindspark","assistments-maine"],["mindspark","assistments-maine"],["assistments-nc"],["steenbergen","federal2007","federal2009","rand2015","rand2017"],["kulik"],["ran"]],
 13:[["mindspark","assistments-maine"],[],["kulik"],["rand2017","federal2007","federal2009"],["bettinger"]]
};
function reviewProse(q,key){
 if(key!=="shows")return q[key];
 return q[key].split(/(?<=[.!?]) (?=[A-Z])/).map((s,i)=>{
  const refs=(reviewSources[q.n][i]||[]).flatMap(id=>{
   const c=d.allStudies.find(c=>c.id==="study-"+id);
   if(!c)throw new Error("Missing review source "+id);
   return [[c.full,c.label],...(id==="assistments-nc"?(c.companions||[]).slice(0,1):[])];
  });
  return s+(refs.length?" ("+refs.map(([u,l])=>`[${l}](${u})`).join("; ")+")":"");
 }).join(" ");
}
for(const n of [1,13]){
 const q=d.questions.find(q=>q.n===n);
 review+=`## Question ${n}: ${q.question}\n\n`;
 for(const [key,label]of [["short","Short answer"],["certainty","How sure is the research?"],["shows","What the research shows"],["doesnt","What it doesn't show"],["classroom","What this means in a classroom"],["change","What would change this answer"]])review+=`### ${label}\n\n${reviewProse(q,key)}\n\n`;
 review+="### Evidence linked in the answer\n\n"+q.refs.map(k=>{const c=d.studies.find(c=>c.id===k);return c?`- **${c.label}:** [Original publication](${c.url}); [full text or author report](${c.full}).`:`- **${d.evidence[k][1]}:** existing dashboard evidence anchor #${d.evidence[k][0]}.`;}).join("\n")+"\n\n";
}
fs.writeFileSync("site/questions-1-and-16-review.md",review.trimEnd()+"\n");
let ledger=fs.readFileSync("site/new-values-ledger.csv","utf8");
if(!ledger.includes('"PI-mindspark"')){
 for(const c of d.studies)ledger+=line(["PI-"+c.id.replace("study-",""),c.title,c.design,"Narrative audit; no pooled/ranked scale",c.values,"NR","NR","See source-specific scope","NR",c.population,c.category,c.full,c.locator,c.limits]);
 ledger+=line(["M2","Maine ASSISTments reanalysis","School-cluster randomized controlled trial","Hedges’ g","0.22","0.15","0.30","43 schools","2769","Same Maine trial as Roschelle 2016; do not add overlapping samples","Peer-reviewed journal article","https://files.eric.ed.gov/fulltext/ED657283.pdf","Table 4 (N); p. 255, Main Effect of Intervention (reported g and 95% CI)","Reported interval; no calculation; original trial g=0.18 is narrative only."]);
 fs.writeFileSync("site/new-values-ledger.csv",ledger);
}
console.log("Built audit, Q1/Q16 review and append-only ledger.");
