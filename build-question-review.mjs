// Mechanical citation-map export from the same editorial data as the dashboard.
import fs from "node:fs";
import vm from "node:vm";
const {questions,groups,evidence}=JSON.parse(vm.runInNewContext(
 ["pulling-back.js","study-additions.js","questions.js","personalized-studies.js","nov19-sources.js"].map(p=>fs.readFileSync("site/"+p,"utf8")).join("\n")+";JSON.stringify({questions:essentialQuestions,groups:questionGroups,evidence:questionEvidence})"
));
const base="https://bgraham14072.github.io/screen-use-academic-outcomes/";
let md="# Essential Questions: Citation Map and Review Flags\n\nUpdated November 23, 2026.\n\n";
md+="## Scope of this revision\n\nUpdated November 23, 2026 to focus on 13 Essential Questions (retaining the underlying paper-versus-screen and early-reading evidence in Paper & Notes and Early Reading Evidence) and to revise Questions 10 and 11 around teacher-led early-grades reading differentiation and early reading-difficulty screening.\n\n";
for(let i=0;i<groups.length;i++){
 md+=`## ${groups[i].title}\n\n`;
 for(const q of questions.filter(q=>q.group===i)){
  md+=`### ${q.question}\n\n`;
  md+=`[Open question ${q.n}](${base}#${q.id}). Research label: ${q.certainty}.\n\n`;
  md+=`- **Evidence:** ${q.refs.map(k=>`[${evidence[k][1]}](${base}#${evidence[k][0]})`).join("; ")}.\n`;
  md+=`- **Review flag:** ${q.thin}\n`;
  md+=`- **What could change the answer:** ${q.change}\n\n`;
 }
}
md+="## Editorial safeguards\n\nLabels are plain-language summaries, not formal quality grades. Intervention findings, observational associations and ecological patterns remain distinct, and the new general intelligent-tutoring review does not validate early-literacy AI implementations.\n\n[Read the original-source addition audit]("+base+"study-additions-audit.md). [Download the exact-value ledger]("+base+"new-values-ledger.csv).\n";
fs.writeFileSync("ESSENTIAL-QUESTIONS-REVIEW.md",md);
