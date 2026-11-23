import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
import {execFileSync} from "node:child_process";
import crypto from "node:crypto";
const read=p=>fs.readFileSync("site/"+p,"utf8");
const baseline="8868ecb7f483533fe5e345bce94983fbe1d33864";
const prior=p=>execFileSync("git",["show",`${baseline}:site/${p}`],{encoding:"utf8"});
const evaluate=(s,e)=>JSON.parse(vm.runInNewContext(s+";JSON.stringify("+e+")"));
assert.equal(crypto.createHash("sha256").update(read("data.js")).digest("hex"),"6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12");
const before=evaluate(prior("data.js")+prior("policy-data.js"),"records");
const after=evaluate(read("data.js")+read("policy-data.js")+read("personalized-data.js"),"records");
assert.equal(after.length,36);
assert.deepEqual(after.filter(r=>r.id!=="M2"),before);
assert.deepEqual(after.find(r=>r.id==="M2").value,.22);
assert.deepEqual([after.at(-1).metric,after.at(-1).low,after.at(-1).high],["g",.15,.30]);
const b=evaluate(prior("questions.js"),"essentialQuestions");
const all=evaluate(["pulling-back.js","study-additions.js","questions.js","personalized-studies.js"].map(read).join("\n"),"{q:essentialQuestions,c:personalizedStudies,a:addedStudies,e:questionEvidence,t:questionCardTargets}");
assert.equal(all.q.length,13);
assert.equal(all.c.length,11);
assert.equal(all.a.filter(x=>x.id==="study-letourneau").length,1);
assert.equal(new Set(all.a.map(x=>x.id)).size,all.a.length);
const oldIdx={1:0,2:4,3:5,4:6,5:7,6:8,7:9,8:10,9:11,10:12,11:13,12:14,13:15};
for(const q of all.q){
 const prev=b[oldIdx[q.n]];
 if(![10,11].includes(q.n))assert.equal(q.question,prev.question);
 assert.equal(q.certainty,prev.certainty);
 if(![1,3,8,10,11,12,13].includes(q.n)){
  const {n:_n1,id:_id1,...restNow}=q;
  const {n:_n0,id:_id0,...restPrev}=prev;
  assert.deepEqual(restNow,restPrev);
 }
 for(const k of q.refs)assert(all.e[k],`Missing citation ${k}`);
 assert(q.short.split(/(?<=[.!?])\s+/).length<=3);
}
for(const c of all.c){
 for(const k of ["title","authors","venue","category","design","funder","population","context","finding","limits","locator","values","placements"])assert(c[k],`${c.id}:${k}`);
 assert(all.t[c.id]);
}
assert.equal(read("pulling-back.js"),prior("pulling-back.js"));
assert.equal(read("digital-divide.js"),prior("digital-divide.js"));
assert.equal(read("study-additions.js"),prior("study-additions.js"));
assert(read("new-values-ledger.csv").startsWith(prior("new-values-ledger.csv")));
assert(read("questions-1-and-16-review.md").includes(all.q[0].short));
assert(read("questions-1-and-16-review.md").includes(all.q[12].short));
assert(read("personalized-integration.js").includes("No new interval is calculated"));
console.log("PASS: protected 35 prior rows, M2 reported g/CI, 11 balanced cards, no duplicate ITS review, scoped questions, exact review excerpts, append-only ledger and untouched protected source content.");
