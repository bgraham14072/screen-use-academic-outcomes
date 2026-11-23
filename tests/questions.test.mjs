import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const expected=[
 "Does technology help children learn, and does it matter how it's used?",
 "Should students take notes by hand?",
 "How much screen time at school is too much?",
 "Does screen use affect sleep, attention or mental health? Is school use different from home use?",
 "Are test scores falling because of classroom technology?",
 "What did Sweden do, and has it worked?",
 "If New York banned phones, should the same rules apply to school devices?",
 "Could limiting school technology widen the digital divide?",
 "What about students with disabilities and English learners?",
 "Can AI help teachers differentiate or personalize reading instruction in early grades?",
 "If an AI tool can spot reading difficulties in young children will that support targeted reading instruction?",
 "What don't we know yet about AI and young learners, and what evidence should a pilot require?",
 "How can a school tell whether a digital activity is worth it, and when should it scale back or stop?"
];
const text=fs.readFileSync(new URL("../site/questions.js",import.meta.url),"utf8");
const data=vm.runInNewContext(text+";JSON.stringify({questions:essentialQuestions,groups:questionGroups,evidence:questionEvidence,legacy:legacyQuestionHashes})");
const {questions,groups,evidence,legacy}=JSON.parse(data);
assert.deepEqual(questions.map(q=>q.question),expected);
assert.deepEqual(groups.map(g=>g.title),["LEARNING AND READING","WELLBEING AND THE BIGGER PICTURE","EQUITY AND ACCESS","AI AND YOUNG LEARNERS","MAKING DECISIONS"]);
assert.deepEqual(questions.map(q=>q.n),Array.from({length:13},(_,i)=>i+1));
assert.deepEqual(questions.map(q=>q.group),[0,0,1,1,1,1,1,2,2,3,3,3,4]);
assert.equal(new Set(questions.map(q=>q.id)).size,13);
for(const [oldId,newId] of Object.entries(legacy)){
 assert(questions.some(q=>q.id===newId),`Legacy hash ${oldId} must map to live question ${newId}`);
}
for(const q of questions){
 assert(/^[a-z0-9-]+$/.test(q.id));
 assert(["fairly consistent","mixed","limited","not yet studied"].includes(q.certainty));
 const sentences=q.short.match(/[^.!?]+[.!?]+/g)||[];
 assert(sentences.length>=2&&sentences.length<=3,`Q${q.n}: short-answer sentence count`);
 for(const key of ["short","shows","doesnt","classroom","change"]){
  assert(q[key]?.trim(),`Q${q.n}: missing ${key}`);
  assert(!/\d/.test(q[key]),`Q${q.n}: unexpected number in new answer prose`);
  assert(!/—|\s–\s/.test(q[key]),`Q${q.n}: dash-free prose required`);
 }
 assert(q.refs.length>0);
 for(const key of q.refs)assert(evidence[key],`Q${q.n}: unknown evidence ${key}`);
}
assert(!/https?:\/\//.test(text),"Question module must only link existing dashboard evidence");
console.log("PASS: exact questions/order/groups, all fixed fields, allowed labels, short-answer lengths, no research numbers or external sources.");
