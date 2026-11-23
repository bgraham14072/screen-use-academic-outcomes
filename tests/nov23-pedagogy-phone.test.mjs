import assert from "node:assert/strict";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const sha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel))).digest("hex");

// 1. Protected files and 40-record numerical register remain completely unchanged
assert.equal(sha("site/data.js"), "6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12");
for (const protectedFile of [
  "site/data.js",
  "site/pulling-back.js",
  "site/digital-divide.js",
  "site/study-additions.js",
  "site/brief.js",
  "site/questions.js",
]) {
  const diff = execFileSync("git", ["diff", "--", protectedFile], { cwd: root, encoding: "utf8" });
  assert.equal(diff, "", `${protectedFile} must remain untouched`);
}

// 2. Append-only verification for site/new-values-ledger.csv
const ledgerPrev = execFileSync("git", ["show", "HEAD:site/new-values-ledger.csv"], { cwd: root, encoding: "utf8" });
const ledgerNow = read("site/new-values-ledger.csv");
assert.ok(ledgerNow.startsWith(ledgerPrev), "new-values-ledger.csv must be strictly append-only");
for (const ledgerId of [
  '"NOV23-CEPR-PHONES-2026"',
  '"NOV23-CRISTIA-2017"',
  '"NOV23-UNESCO-GEM-2023"',
  '"NOV23-CHEUNG-SLAVIN-2013"',
  '"NOV23-WITHHELD-SUBRAMONYAM-SUBSTACK-2026"',
]) {
  assert.ok(ledgerNow.includes(ledgerId), `Missing ${ledgerId} in new-values-ledger.csv`);
}

// 3. Evaluate full data + study + Essential Questions pipeline in VM
const ctx = { console };
vm.createContext(ctx);
for (const f of [
  "site/data.js",
  "site/policy-data.js",
  "site/personalized-data.js",
  "site/ai-tutoring-packet-data.js",
  "site/pulling-back.js",
  "site/digital-divide.js",
  "site/study-additions.js",
  "site/questions.js",
  "site/personalized-studies.js",
  "site/nov19-sources.js",
  "site/ai-tutoring-packet-studies.js",
  "site/nov23-pedagogy-phone-studies.js",
]) {
  vm.runInContext(read(f), ctx, { filename: f });
}

const out = vm.runInContext(
  "({records, addedStudies, nov23PedagogyPhoneStudies, essentialQuestions, questionEvidence, questionCardTargets})",
  ctx,
);

// Numerical register count remains 40 (no new numerical rows added)
assert.equal(out.records.length, 40);
assert.equal(out.nov23PedagogyPhoneStudies.length, 4);

const ids = Array.from(out.nov23PedagogyPhoneStudies, (s) => s.id);
assert.deepEqual(ids, [
  "study-cepr-phones-2026",
  "study-cristia-peru-olpc",
  "study-unesco-gem-2023",
  "study-cheung-slavin-2013",
]);

for (const s of out.nov23PedagogyPhoneStudies) {
  assert.ok(out.addedStudies.some((x) => x.id === s.id), `Missing ${s.id} in addedStudies`);
  assert.ok(out.questionEvidence[s.id], `Missing ${s.id} in questionEvidence`);
  assert.ok(out.questionCardTargets[s.id], `Missing ${s.id} in questionCardTargets`);
  assert.match(s.url, /^https:\/\//);
  assert.ok(!s.url.includes("subramonyam.substack.com"), "Substack commentary URL must not be used as study card source");
  // Dash-free prose check across narrative fields
  for (const field of ["title", "design", "funder", "population", "context", "finding", "limits"]) {
    assert.ok(!s[field].includes("—"), `Em dash found in ${s.id}.${field}`);
    assert.ok(!s[field].includes(" – "), `Spaced en dash found in ${s.id}.${field}`);
  }
}

// Verify source-category labels match required taxonomy
const byId = Object.fromEntries(out.nov23PedagogyPhoneStudies.map((s) => [s.id, s]));
assert.match(byId["study-cepr-phones-2026"].category, /Commissioned review.*not peer-reviewed/i);
assert.equal(byId["study-cristia-peru-olpc"].category, "Peer-reviewed journal article");
assert.equal(byId["study-unesco-gem-2023"].category, "Government/intergovernmental report");
assert.equal(byId["study-cheung-slavin-2013"].category, "Review/meta-analysis · peer-reviewed");

// Verify exact key numbers in narrative cards
assert.match(byId["study-cepr-phones-2026"].finding, /\+0\.0087 SD/);
assert.match(byId["study-cepr-phones-2026"].finding, /\+0\.0172 SD/);
assert.match(byId["study-cristia-peru-olpc"].finding, /318/);
assert.match(byId["study-cristia-peru-olpc"].finding, /0\.12 to 1\.18/);
assert.match(byId["study-cristia-peru-olpc"].limits, /NR/);
assert.match(byId["study-unesco-gem-2023"].finding, /500 million/);
assert.match(byId["study-unesco-gem-2023"].limits, /NR/);
assert.match(byId["study-cheung-slavin-2013"].population, /56,886/);
assert.match(byId["study-cheung-slavin-2013"].finding, /\+0\.16/);
assert.match(byId["study-cheung-slavin-2013"].finding, /\+0\.08/);

// Verify Essential Questions invariants (13 questions, zero digits outside K-12 compound, zero external URLs, dash-free prose)
assert.equal(out.essentialQuestions.length, 13);
for (const q of out.essentialQuestions) {
  const sentences = q.short.trim().split(/(?<=[.!?])\s+/);
  assert.ok(sentences.length >= 2 && sentences.length <= 3, `${q.id} short sentence count ${sentences.length}`);
  assert.ok(!/\d/.test(q.short), `Digit found in ${q.id}.short: ${q.short}`);
  for (const field of ["question", "short", "shows", "doesnt", "classroom", "change"]) {
    const cleaned = q[field].replace(/K[–-]12/g, "");
    assert.ok(!/\d/.test(cleaned), `Digit found in ${q.id}.${field}: ${q[field]}`);
    assert.ok(!/https?:\/\//.test(q[field]), `URL found in ${q.id}.${field}`);
    assert.ok(!q[field].includes("—"), `Em dash found in ${q.id}.${field}`);
    assert.ok(!q[field].includes(" – "), `Spaced en dash found in ${q.id}.${field}`);
  }
  for (const ref of q.refs) {
    assert.ok(out.questionEvidence[ref], `Unmapped ref ${ref} in ${q.id}`);
  }
}

// Verify new scripts are wired into site/index.html
const html = read("site/index.html");
assert.ok(html.includes('nov23-pedagogy-phone-studies.js'));
assert.ok(html.includes('nov23-pedagogy-phone-integration.js'));

console.log("nov23-pedagogy-phone.test.mjs passed: 4 narrative cards, 40-record register intact, and all prose invariants verified.");
