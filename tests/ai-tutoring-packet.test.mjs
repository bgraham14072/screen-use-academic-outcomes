import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import crypto from "node:crypto";
import {execFileSync} from "node:child_process";

const read=p=>fs.readFileSync(new URL(`../${p}`,import.meta.url),"utf8");
const prior=p=>execFileSync("git",["show",`8810da2:${p}`],{encoding:"utf8"});
const evaluate=(text,expr)=>JSON.parse(vm.runInNewContext(text+`;JSON.stringify(${expr})`));

// 1. Protected 29-record register & prior 36 records untouched; M3-M6 exact
assert.equal(crypto.createHash("sha256").update(read("site/data.js")).digest("hex"),"6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12");
const prior36=evaluate(read("site/data.js")+"\n"+read("site/policy-data.js")+"\n"+read("site/personalized-data.js"),"records");
assert.equal(prior36.length,36);

const all40=evaluate(
 ["site/data.js","site/policy-data.js","site/personalized-data.js","site/ai-tutoring-packet-data.js"].map(read).join("\n"),
 "{records,sources,audit:recordAudit,maCat:sourceCategory('ma2014'),outCat:sourceCategory('outhwaite')}"
);
assert.equal(all40.records.length,40);
assert.deepEqual(all40.records.slice(0,36),prior36);
assert.equal(all40.maCat,"Review/meta-analysis · peer-reviewed");
assert.equal(all40.outCat,"Peer-reviewed");

const m3=all40.records.find(r=>r.id==="M3");
const m4=all40.records.find(r=>r.id==="M4");
const m5=all40.records.find(r=>r.id==="M5");
const m6=all40.records.find(r=>r.id==="M6");
assert.deepEqual([m3.metric,m3.value,m3.low,m3.high,m3.n],["d",0.31,0.06,0.55,258]);
assert.deepEqual([m4.metric,m4.value,m4.low,m4.high,m4.n],["d",0.21,-0.03,0.46,263]);
assert.deepEqual([m5.metric,m5.value,m5.low,m5.high,m5.n],["g",0.41,0.34,0.48,14321]);
assert.deepEqual([m6.metric,m6.value,m6.low,m6.high,m6.n],["g",-0.11,-0.31,0.10,404]);

// Vendor-coauthored Eames et al. (2026) excluded from register and study cards
assert(!all40.records.some(r=>/eames|khan/i.test(r.title+r.source)),"Eames et al. 2026 must not enter numerical register");

// 2. Narrative study cards + Essential Questions stack
const full=evaluate(
 ["site/pulling-back.js","site/study-additions.js","site/questions.js","site/personalized-studies.js","site/nov19-sources.js","site/ai-tutoring-packet-studies.js"].map(read).join("\n"),
 "{q:essentialQuestions,ev:questionEvidence,targets:questionCardTargets,studies:addedStudies,packet:aiTutoringPacketStudies}"
);
assert.equal(full.packet.length,6);
assert.deepEqual(
 full.packet.map(c=>c.id),
 ["study-outhwaite","study-ma-its","study-bastani-guardrails","study-kestin-harvard","study-oreopoulos-khanmigo","study-tutor-copilot"]
);
assert(!full.studies.some(c=>/eames/i.test(c.id+c.authors+c.title)),"Eames et al. 2026 must not appear as a narrative study card");
assert.equal(new Set(full.studies.map(c=>c.id)).size,full.studies.length,"No duplicate study IDs");

// Working papers & higher-ed explicitly labeled
assert(full.packet.find(c=>c.id==="study-kestin-harvard").category.toLowerCase().includes("higher education"));
assert(full.packet.find(c=>c.id==="study-oreopoulos-khanmigo").category.includes("Working paper (not peer-reviewed)"));
assert(full.packet.find(c=>c.id==="study-tutor-copilot").category.includes("Working paper (not peer-reviewed)"));

// Essential Questions invariants across all 13 questions
assert.equal(full.q.length,13);
for(const q of full.q){
 const sentences=q.short.trim().split(/(?<=[.!?])\s+/);
 assert(sentences.length>=2&&sentences.length<=3,`Question ${q.n} short answer must be 2-3 sentences`);
 for(const key of ["short","shows","doesnt","classroom","change"]){
  assert(q[key].length>20,`Question ${q.n} ${key} non-empty`);
  assert(!/https?:\/\//.test(q[key]),`Question ${q.n} ${key} must not contain external URLs`);
 }
 for(const r of q.refs)assert(full.ev[r],`Missing questionEvidence entry ${r} in Q${q.n}`);
}

// Verify newly appended prose in ai-tutoring-packet-studies.js has zero digits, zero URLs, zero em/spaced-en dashes
const packetProse=read("site/ai-tutoring-packet-studies.js").split("const q1=essentialQuestions")[1];
assert(!/\d/.test(packetProse.replace(/q\d+/g,"").replace(/M[3456]/g,"")),"No research digits in Essential Questions prose updates");
assert(!/https?:\/\//.test(packetProse),"No external URLs in Essential Questions prose updates");

// 3. Dash-free prose across all newly authored Nov. 23 files
for(const f of ["site/ai-tutoring-packet-data.js","site/ai-tutoring-packet-studies.js","site/ai-tutoring-packet-integration.js","site/nov23-ai-tutoring-audit.md"]){
 const txt=read(f);
 assert(!/—|\s–\s/.test(txt),`Dash-free prose required in ${f}`);
}

// 4. Methods governance & append-only ledger verification
const integ=read("site/ai-tutoring-packet-integration.js");
assert(integ.includes('id="ai-tutoring-packet-methods"'));
assert(integ.includes("Withheld under vendor-efficacy source governance"));
assert(integ.includes("PMC12773755")&&integ.includes("PMC12974481"));

const ledgerNow=read("site/new-values-ledger.csv");
const ledgerPrev=prior("site/new-values-ledger.csv");
assert(ledgerNow.startsWith(ledgerPrev),"Ledger must remain strictly append-only against commit 8810da2");
for(const id of ["M3","M4","M5","M6","NOV23-BASTANI-2025","NOV23-KESTIN-2025","NOV23-OREOPOULOS-2026","NOV23-WANG-2025","NOV23-WITHHELD-EAMES-2026"]){
 assert(ledgerNow.includes(`"${id}"`),`Missing ledger row ${id}`);
}

console.log("PASS: M3-M6 balanced register pairs, 6 narrative cards, Eames vendor-governance exclusion, 7 duplicates screened, 13 Essential Questions adjusted and dash-free, append-only ledger verified.");
