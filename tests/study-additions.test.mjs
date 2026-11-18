import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";
import {execFileSync} from "node:child_process";
const read=p=>fs.readFileSync(new URL(`../${p}`,import.meta.url),"utf8");
const baseline="a688b1d04cc95fa828c9b2d1d7f4aa1f480bb9e2";
const prior=p=>execFileSync("git",["show",`${baseline}:${p}`],{encoding:"utf8"});
const evaluate=(text,expression)=>JSON.parse(vm.runInNewContext(text+`;JSON.stringify(${expression})`));
assert.equal(crypto.createHash("sha256").update(read("site/data.js")).digest("hex"),"6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12");
const before=evaluate(prior("site/data.js")+prior("site/policy-data.js"),"records");
const after=evaluate(read("site/data.js")+read("site/policy-data.js"),"records");
assert.equal(after.length,before.length+1);
assert.deepEqual(after.filter(r=>r.id!=="M1"),before);
assert.equal(new Set(after.map(r=>r.id)).size,after.length);
const m=after.find(r=>r.id==="M1");
assert.deepEqual([m.metric,m.design,m.value,m.low,m.high,m.n],["g","Intervention",.23,.19,.27,54988]);
const studyData=evaluate(read("site/pulling-back.js")+read("site/study-additions.js"),"{studies:addedStudies,old:pullingBackCard,updated:updatedPullingBackCard}");
assert.equal(studyData.studies.length,7);
assert.equal(studyData.studies.filter(s=>s.register).length,1);
assert.equal(new Set(studyData.studies.map(s=>s.id)).size,7);
assert(studyData.studies.find(s=>s.id==="study-allcott").design.includes("not a randomized"));
assert.equal(studyData.studies.find(s=>s.id==="study-allcott").category,"Working paper (not peer-reviewed)");
const split=s=>s.split('    <th scope="row">3 · New York’s phone law</th>');
assert.equal(split(studyData.old)[0],split(studyData.updated)[0],"Only comparison row 3 may change");
assert.equal(studyData.old.split("  </tbody>")[1],studyData.updated.split("  </tbody>")[1]);
assert(studyData.updated.includes("National U.S. evidence"));
assert(studyData.updated.includes("Average academic effects are near zero"));
assert(!studyData.updated.includes("New York’s law is one year old"));
const qs=evaluate(read("site/questions.js"),"essentialQuestions");
const oldQs=evaluate(prior("site/questions.js"),"essentialQuestions");
for(const q of qs){
 assert.equal(q.question,oldQs[q.n-1].question);
 if(![1,6,7,10,12,13,15,16].includes(q.n))assert.deepEqual(q,oldQs[q.n-1]);
}
for(const [n,refs] of [[1,["ran"]],[6,["bettinger"]],[7,["allcott","vuorre","odgers"]],[10,["allcott"]],[12,["fernandez"]],[13,["letourneau"]],[15,["letourneau"]],[16,["bettinger"]]]){
 for(const r of refs)assert(qs[n-1].refs.includes(r));
}
assert(read("site/new-values-ledger.csv").startsWith(prior("site/new-values-ledger.csv")),"Ledger is append-only");
assert.equal(read("site/brief.js"),prior("site/brief.js"));
assert.equal(read("site/leave-behind.html"),prior("site/leave-behind.html"));
assert.equal(read("site/digital-divide.js"),prior("site/digital-divide.js"));
assert(!/EdTech Leaders Alliance|Balanced Screen Time/i.test(read("site/study-additions.js")));
console.log("PASS: original and prior supplemental records, single g addition, seven distinct studies, exact requested question placements, row-3-only narrative update, append-only ledger, unchanged brief and equity card.");
