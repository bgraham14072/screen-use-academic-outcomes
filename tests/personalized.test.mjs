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
assert.equal(all.q.length,16);
assert.equal(all.c.length,11);
assert.equal(all.a.filter(x=>x.id==="study-letourneau").length,1);
assert.equal(new Set(all.a.map(x=>x.id)).size,all.a.length);
for(const q of all.q){
 assert.equal(q.question,b[q.n-1].question);
 assert.equal(q.certainty,b[q.n-1].certainty);
 if(![1,6,11,13,15,16].includes(q.n))assert.deepEqual(q,b[q.n-1]);
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
assert(read("questions-1-and-16-review.md").includes(all.q[15].short));
assert(read("personalized-integration.js").includes("No new interval is calculated"));
console.log("PASS: protected 35 prior rows, M2 reported g/CI, 11 balanced cards, no duplicate ITS review, scoped questions, exact review excerpts, append-only ledger and untouched protected source content.");
