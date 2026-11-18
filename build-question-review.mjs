// Mechanical citation-map export from the same editorial data as the dashboard.
import fs from "node:fs";
import vm from "node:vm";
const {questions,groups,evidence}=JSON.parse(vm.runInNewContext(
 fs.readFileSync("site/questions.js","utf8")+";JSON.stringify({questions:essentialQuestions,groups:questionGroups,evidence:questionEvidence})"
));
const base="https://bgraham14072.github.io/screen-use-academic-outcomes/";
let md="# Essential Questions: Citation Map and Review Flags\n\nDraft for co-author review, updated November 18, 2026. The wording remains proposed until all five authors approve it; no approval is inferred from publication of this dashboard.\n\n";
md+="## Scope of this revision\n\nThe question titles, group order and answer structure are unchanged. Questions 1, 6, 7, 10, 12, 13, 15 and 16 now incorporate the requested original-source additions; the study audit and exact-value ledger document numerical provenance and withheld discrepancies.\n\n";
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
