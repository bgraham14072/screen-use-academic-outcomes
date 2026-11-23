// Mechanical builder for November 19, 2026 primary-source audit, exact-value ledger rows, and updated question review exports.
import fs from "node:fs";
import vm from "node:vm";

const read=p=>fs.readFileSync(p,"utf8");
const quote=s=>'"'+String(s??"NR").replaceAll('"','""')+'"';
const line=xs=>xs.map(quote).join(",")+"\n";

const ctx=JSON.parse(vm.runInNewContext(
 ["site/pulling-back.js","site/study-additions.js","site/questions.js","site/personalized-studies.js","site/nov19-sources.js"]
  .map(read).join("\n")+";JSON.stringify({allStudies:addedStudies,personalized:personalizedStudies,nov19:nov19ContextStudies,questions:essentialQuestions,groups:questionGroups,evidence:questionEvidence})"
));

// 1. Append every new value from Nov. 19 primary sources to site/new-values-ledger.csv (append-only)
const newLedgerRows=[
 [
  "NOV19-APA-SYNTHESIS",
  "APA Expert Report on Children’s and Adolescents’ Learning With Educational Technology",
  "Expert evidence synthesis and practice/policy recommendations; not a single randomized trial or pooled meta-analysis.",
  "Synthesis structure and retention standard",
  "Sept. 3, 2026 release | 6 overarching conclusions: p. 3 | 10 recommendations: pp. 1, 4–12 | 15 expert authors: p. 13 | at least 1 week retention/skill-transfer independent validation benchmark and off-screen “show me” moments: Rec. 2, p. 5",
  "NR","NR",
  "6 conclusions; 10 recommendations",
  "NR",
  "Early childhood, K–12 and home learning contexts; combined participant N NR",
  "Professional-association evidence synthesis",
  "https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf",
  "pp. 1, 3 (6 conclusions, 10 recommendations); pp. 4–5 Recs. 1–2 (engagement vs learning, “show me” moments, >=1 week independent validation); pp. 5–6 Rec. 3 (displacement); pp. 7–12 Recs. 4–10; p. 13 (authors); release date verified at https://www.apa.org/news/press/releases/2026/09/education-technology-engagement",
  "Professional-association synthesis, not a quantitative meta-analysis or product certification. Report prints unhyphenated “show me” moments and orders verbs “explain, remember, and apply” on p. 5."
 ],
 [
  "NOV19-USED-DCL",
  "U.S. Department of Education OESE Dear Colleague Letter on Education Technology and Screentime in Schools",
  "Federal agency policy guidance (non-binding considerations); not empirical outcome evidence.",
  "Policy document metadata",
  "Aug. 20, 2026; 6 pages; signed by Assistant Secretary Kirsten Baesler",
  "NR","NR",
  "1 federal guidance letter",
  "NR",
  "State and local educational agencies nationwide",
  "Government policy guidance (not outcome evidence)",
  "https://www.ed.gov/media/document/guidance-education-technology-and-screentime-schools-114386.pdf",
  "pp. 1–2 (recreational vs instructional distinction; non-binding considerations; quality/outcomes over screen time alone); p. 4 (state contracting models establishing shared performance measures and accountability); pp. 3–5 (RCT/effectiveness evidence in procurement and renewal)",
  "Policy context only, not outcome evidence. Uses “contracting models that establish shared performance measures ... and shared accountability” (p. 4) rather than the exact phrase “outcomes-based contracting.”"
 ],
 [
  "NOV19-HHS-SG-ADVISORY",
  "Surgeon General’s Warning on the Harms of Screen Use (Advisory and School Action Toolkit)",
  "Federal public-health precautionary advisory; explicitly notes on p. 7 it is not a formal systematic review.",
  "Policy document metadata",
  "May 20, 2026; 45-page Advisory; 19-page Toolkit",
  "NR","NR",
  "1 federal public-health advisory + toolkit",
  "NR",
  "U.S. children, adolescents, families and K–12 schools",
  "Government public-health advisory (not outcome evidence)",
  "https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use.pdf",
  "Advisory pp. 2–4 (issuance), p. 7 (not a formal systematic review), pp. 28–29 (“Schools can” recommendations: limit screen use with IEP/504/health/emergency exceptions, bell-to-bell phone policy, make individually-accessible devices available in a computer lab, physical textbooks and pen-and-paper curricula); Toolkit p. 11",
  "Policy context only, not outcome evidence. Says “Make individually-accessible devices available in a computer lab” (p. 28) rather than the literal phrase “replace 1:1 programs”; issued under HHS Secretary and Acting Deputy Surgeon General."
 ],
 [
  "NOV19-IOWA-HF2676",
  "Iowa House File 2676, Division VIII (enacting Iowa Code § 279.89)",
  "Enacted state statute and state education agency implementation FAQ; not empirical outcome evidence.",
  "Daily K–5 digital instruction statutory cap (minutes per school day)",
  "60",
  "NR","NR",
  "Grades K–5 in Iowa public and charter schools (signed May 20, 2026)",
  "NR",
  "Statewide Iowa K–5 public and charter school pupils; K–12 1:1 board review checklist",
  "State statute (not outcome evidence)",
  "https://www.legis.iowa.gov/docs/publications/LGE/91/HF2676.pdf",
  "Enrolled HF 2676 Division VIII pp. 12–14 (§ 279.89(2)(a) 60-minute K–5 daily cap; § 279.89(2)(b)(1)–(5) exemptions for IEP/504, assistive/adaptive tech, teacher-directed projector/smartboard demonstrations, 1:1 screening/progress-monitoring/diagnostic/state assessments, and computer science/technology curriculum); Iowa Dept. of Education FAQ pp. 1–3 (https://educate.iowa.gov/media/13274/download)",
  "Statutory context only; newly enacted 2026 law has not been evaluated for student achievement or equity outcomes."
 ],
 [
  "NOV19-IP-TOUR-SCOPE",
  "Instruction Partners AI in Action Learning Tour: Initial Findings",
  "Qualitative classroom observation and interview field study plus public evidence scan; not outcome evidence.",
  "Products; classroom observations; school systems; states; interview counts",
  "20 products; 32 observations; 16 school systems; 7 states; 50+ teachers; 25+ leaders; 100+ students (13 targeted instructional products observed in classrooms; 7 platforms/chatbots studied via interviews)",
  "NR","NR",
  "20 student-facing AI products across 16 systems",
  "NR",
  "2025–2026 school year field inquiry across 7 U.S. states, published September 2026",
  "Qualitative classroom observation by a nonprofit (not outcome evidence)",
  "https://ailearningtour.instructionpartners.org/about-the-tour",
  "About the Tour page (20 products, 32 classroom observations, 16 systems, 7 states, 50+ teachers, 25+ leaders, 100+ students, 13 observed vs 7 interview-only); Overall Takeaways; Trends in Use; Subject-Specific Takeaways (isolated skill drills and text releveling)",
  "Qualitative field observation, not causal outcome evidence. Literacy section uses “Text releveling” (lowering core text complexity) rather than the exact word “permanent” re-leveling."
 ],
 [
  "NOV19-IP-TOUR-SUBGROUPS",
  "Instruction Partners AI in Action Learning Tour: Product Categories and Subgroup Evidence Scan",
  "Public research-availability scan of studied AI products; not a pooled effect estimate.",
  "Product categories and independent U.S. subgroup achievement study counts",
  "3 general-purpose chatbots; 5 multipurpose platforms; 13 targeted instructional tools (Google Classroom/Gemini spans categories) | 16 completed product profiles at Sept. 2026 release (of 20 tour products): 7 with independent U.S. subgroup achievement studies, 2 outside U.S., 4 external studies underway, 3 internal data only",
  "NR","NR",
  "16 completed profiles out of 20 studied products",
  "NR",
  "Student-facing AI products examined by Instruction Partners as of September 2026",
  "Qualitative classroom observation by a nonprofit (not outcome evidence)",
  "https://ailearningtour.instructionpartners.org/insights/how-products-vary",
  "How Products Vary page: Three Product Categories section and Research on Student Outcomes section (explicitly noting counts cover the 16 products with complete profiles as of Sept. 2026 out of 20 studied)",
  "Availability count of third-party subgroup studies, not a dashboard endorsement of any profiled product; individual vendor profiles are not cited as efficacy proof."
 ],
 [
  "NOV19-NYCPS-2026",
  "New York City Public Schools 2026–2027 Screen Time and Generative AI Guidance",
  "Official municipal school-district administrative policy; not empirical outcome evidence.",
  "Daily 1:1 classroom screen-time ceilings by grade band",
  "Grades 2K–2: 0 minutes (no 1:1 screen time) | Grades 3–5: recommended max 30 minutes/day 1:1 | Grades 6–8: recommended max 45 minutes/day 1:1 | Grades 2K–8: student-facing generative AI prohibited",
  "NR","NR",
  "NYC Public Schools 2026–2027 school year policy",
  "NR",
  "New York City Public Schools grades 2K–12",
  "Official district policy (not outcome evidence)",
  "https://www.schools.nyc.gov/about-us/policies/guidance-on-artificial-intelligence",
  "Official NYCPS Guidance on Artificial Intelligence and Screen Time table (2K–2, 3–5, 6–8, 9–12 rules and exceptions); confirmed in Sept. 10, 2026 NYCPS Morning Bell (https://www.schools.nyc.gov/about-us/news/morning-bell/contentdetails/morning-bell/2026/09/10/nyc-schools-to-remain-distraction-free-in-2026-27)",
  "Exempts IEP/504 assistive tech and ELL tools, assessments (screeners and diagnostics), remote instruction days, centrally approved digital instruction (e-books, robotics, coding, simulations) and teacher-led group displays. Policy context only."
 ],
 [
  "NOV19-POLL-NPU-MAY2026",
  "National Parents Union / Echelon Insights May–June 2026 K–12 Public School Parent Poll",
  "Cross-sectional public-opinion survey; context only, not learning-outcome evidence.",
  "Weighted parent survey percentages and margin of error",
  "N = 1,527; MoE ±2.7 pp (May 28–June 1, 2026) | Q19 school computer/tablet amount: 74% about right, 17% too much, 6% not enough | Q21 favor daily learning screen-time limit: 75% yes, 17% no, 8% unsure | Q22 preferred daily limit (among n = 1,146 favoring a limit): 1% no screen time at all",
  "NR","NR",
  "1,527 K–12 public school parents",
  "1527",
  "U.S. K–12 public school parents (sponsor: National Parents Union)",
  "Public-opinion poll (context only; not outcome evidence)",
  "https://nationalparentsunion.org/wp-content/uploads/2026/06/National-Parents-Union-May-2026-Survey-Topline.pdf",
  "Header p. 1 (field dates May 28–June 1, 2026, N = 1,527, MoE ±2.7 pp); Q19, Q21, Q22 (n = 1,146)",
  "Opinion context only; excluded from evidence register and participant totals."
 ],
 [
  "NOV19-POLL-NPU-SEPT2026",
  "National Parents Union / Echelon Insights September 2026 K–12 Public School Parent Poll",
  "Cross-sectional public-opinion survey; context only, not learning-outcome evidence.",
  "Weighted parent survey percentages and margin of error",
  "N = 1,528; MoE ±2.6 pp (Sept. 7–11, 2026) | Q19 school laptops: 58% classroom carts for set times vs 38% at desks all day | Q20 K–2 learning screen time: 78% limit without banning, 11% ban, 7% unlimited | Q23 support: 86% ban data harvesting, 85% low-income home broadband, 85% teach AI safety, 81% bar unproven tech purchases, 77% teach effective AI use, 71% ban school-day student AI chatbots",
  "NR","NR",
  "1,528 K–12 public school parents",
  "1528",
  "U.S. K–12 public school parents (sponsor: National Parents Union)",
  "Public-opinion poll (context only; not outcome evidence)",
  "https://nationalparentsunion.org/wp-content/uploads/2026/09/National-Parents-Union-September-2026-Survey-Topline.pdf",
  "Header p. 1 (field dates Sept. 7–11, 2026, N = 1,528, MoE ±2.6 pp); Q19–Q20, Q23",
  "Opinion context only; excluded from evidence register and participant totals."
 ],
 [
  "NOV19-POLL-EDCHOICE-2026",
  "EdChoice / Morning Consult Spring 2026 School Parent Survey and Household-Income Crosstabs",
  "Cross-sectional public-opinion tracking survey; context only, not learning-outcome evidence.",
  "Weighted parent support percentages overall and by household income",
  "Overall classroom support (March–May 2026 report p. 48; April 2026 N = 1,374): laptops 86% (51% strongly, 35% somewhat), online platforms 84% (49% strongly, 35% somewhat), tablets 80%, learning games 80%, AI programs 60%, cell phones 50%; high AI learning concern 33% (p. 50) | April 2026 classroom laptop support by income (Table EC265_2, p. 288, N = 1,374): <$50k (n = 538) 48% strongly / 34% somewhat / 5% somewhat oppose / 6% strongly oppose / 7% don’t know; $50k–$100k (n = 440) 52% / 35% / 7% / 5% / 2%; $100k+ (n = 396) 54% / 38% / 4% / 3% / 1% | March 2026 wave (Table EC265_2, p. 283, N = 1,305): <$50k (n = 513) 48% / 32% / 12% don’t know; $50k–$100k (n = 446) 50% / 37% / 2%; $100k+ (n = 346) 47% / 46% / 1%",
  "NR","NR",
  "April 2026 N = 1,374 school parents; March 2026 N = 1,305 school parents",
  "1374",
  "Nationally representative U.S. school parents (sponsor: EdChoice, a school-choice advocacy group)",
  "Public-opinion poll (context only; not outcome evidence)",
  "https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_April_2026.pdf",
  "April 2026 Parent Crosstabs Table EC265_2 p. 288; March 2026 Parent Crosstabs Table EC265_2 p. 283 (https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_March_2026.pdf); March–May 2026 Report pp. 47–51 (https://edchoice.mcdatahub.com/edchoice/Reports/Adults_Mar26_May26.pdf); June 9, 2026 summary (https://www.edchoice.org/2026-parents-divided-on-technology-and-student-preparation-for-life-after-graduation/)",
  "Sponsor EdChoice is identified as a school-choice advocacy group. Slide 48 of Adults_Mar26_May26.pdf carries a footer typo (“March 11-12, 2025”) while reporting the 2026 wave matching April 2026 Table EC265_2; exact printed Strongly/Somewhat columns are displayed rather than summing rounded cells."
 ],
 [
  "NOV19-POLL-TCF-MAY2026",
  "The Century Foundation / Morning Consult May 2026 Registered Voter Poll",
  "Cross-sectional registered-voter opinion survey; context only, not learning-outcome evidence.",
  "Weighted registered-voter survey percentages",
  "Fielded May 21–24, 2026; published Aug. 25, 2026; N = 2,002 registered voters (split sample n = 987 and n = 1,015, note 48) | 77% want clear government rules/standards (49% keep classroom tech/AI to a minimum with clear rules; 28% embrace proven tools with government rules/standards; 23% no new government rules) | 85% concerned (60% very) about AI completing work without learning; 84% concerned about companies profiting from student data; 81% concerned about pressure to use unproven tech; 73% view K–12 tech/screens as a problem",
  "NR","NR",
  "2,002 U.S. registered voters",
  "2002",
  "U.S. registered voters (sponsor: The Century Foundation)",
  "Public-opinion poll (context only; not outcome evidence)",
  "https://tcf.org/content/report/americans-are-united-against-the-tech-takeover-of-public-schools/",
  "Report sections “Key Takeaways,” “Voters Favor Strong Public Oversight of EdTech and AI,” and methodology note 48",
  "Opinion context only; excluded from evidence register and participant totals."
 ],
 [
  "NOV19-S10685-CROSSWALK",
  "New York Senate Bill S10685 (FOCUS Act) §§ 31, 33 and 37(2) Operative Text",
  "Proposed state legislation; educational policy crosswalk, not legal advice or empirical evidence.",
  "Bill section references",
  "§ 31(1) p. 3 (PK–5 school-issued device ban and on-campus electronic/internet-enabled device restriction) | § 33(1)(a)–(g) pp. 4–5 (bars social media, gaming, messaging, AI companions, generative AI, conversational AI preserving disability assistive tech, and cameras) | § 37(2) p. 7 (“inherent to the learning objective of an activity, assignment, assessment or task”)",
  "NR","NR",
  "Proposed NY Senate Bill S10685 (introduced Aug. 21, 2026)",
  "NR",
  "Proposed New York State public school statutory framework",
  "Proposed state legislation (educational analysis, not legal advice)",
  "https://legislation.nysenate.gov/pdf/bills/2025/S10685",
  "Official bill PDF: § 31(1) p. 3; § 33(1)–(2) pp. 4–5; § 37(2)–(3) p. 7 (also at https://www.nysenate.gov/legislation/bills/2025/S10685)",
  "Neutral, product-free educational questions added to crosswalk; explicitly labeled not legal advice. Exact § 37(2) wording includes four nouns (“activity, assignment, assessment or task”)."
 ]
];

let ledger=read("site/new-values-ledger.csv");
if(!ledger.includes('"NOV19-APA-SYNTHESIS"')){
 for(const row of newLedgerRows)ledger+=line(row);
 fs.writeFileSync("site/new-values-ledger.csv",ledger);
}

// 2. Build site/nov19-source-audit.md
const auditMd=`# Primary-Source Verification Audit: November 19, 2026 Additions

Updated November 19, 2026. Every addition below was verified directly against the original publication, agency document, statute, official school-system guidance or pollster topline/crosstab file. No vendor press-clip packet, news article or vendor-commissioned product efficacy study is cited anywhere in the dashboard or this audit. None of these additions alters the preserved 29-record baseline register or the two prior compatible numerical additions (\`M1\` and \`M2\`; 36 numerical rows total).

## Summary of Additions and Primary Sources

| Item | Dashboard label & role | Dashboard placements | Verified primary source(s) |
|---|---|---|---|
| **1. American Psychological Association (released Sept. 3, 2026)** | Professional-association evidence synthesis (not a numerical register entry) | Essential Questions \`#1\`, \`#10\` and \`#13\`; Instructional Added Value off-screen “show-me” transfer test (\`#added\`); Methods (\`#apa-synthesis-methods\`); Evidence context card (\`#study-apa-2026\`) | [APA Expert Report PDF](https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf); [APA Report Landing Page](https://www.apa.org/pubs/reports/children-adolescent-learning-educational-technology); [APA Sept. 3, 2026 Release Record](https://www.apa.org/news/press/releases/2026/09/education-technology-engagement) |
| **2. Federal policy disagreement + Iowa’s 2026 law** | Federal & state policy context, not outcome evidence | Single narrative card (\`#federal-policy-context\`) on NY Research & FOCUS Act (\`#emerging\`), with cross-link on For Policymakers (\`#policy\`) | [U.S. Dept. of Education Dear Colleague Letter (Aug. 20, 2026)](https://www.ed.gov/media/document/guidance-education-technology-and-screentime-schools-114386.pdf); [HHS / Surgeon General Advisory (May 20, 2026)](https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use.pdf); [HHS School Action Toolkit](https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use-toolkit.pdf); [Iowa HF 2676 Enrolled Bill (§ 279.89)](https://www.legis.iowa.gov/docs/publications/LGE/91/HF2676.pdf); [Iowa Dept. of Education FAQ](https://educate.iowa.gov/media/13274/download) |
| **3. Instruction Partners “AI in Action Learning Tour” (Sept. 2026)** | Qualitative classroom observation by a nonprofit (not outcome evidence) | Essential Questions \`#10\`, \`#12\` and \`#13\`; Evidence context card (\`#study-instruction-partners\`) | [Overall Takeaways](https://ailearningtour.instructionpartners.org/insights/overall-takeaways); [About the Tour](https://ailearningtour.instructionpartners.org/about-the-tour); [How Products Vary](https://ailearningtour.instructionpartners.org/insights/how-products-vary); [Trends in Use](https://ailearningtour.instructionpartners.org/insights/trends-in-use); [Subject-Specific Takeaways](https://ailearningtour.instructionpartners.org/insights/subject-specific-takeaways) |
| **4. NYC Public Schools fall 2026 screen-time policy** | Official municipal district policy, not outcome evidence | NY policy context card (\`#nyc-screen-policy\`) on NY Research & FOCUS Act (\`#emerging\`) | [NYCPS 2026–27 AI & Screen Time Guidance](https://www.schools.nyc.gov/about-us/policies/guidance-on-artificial-intelligence); [NYCPS Sept. 10, 2026 Morning Bell](https://www.schools.nyc.gov/about-us/news/morning-bell/contentdetails/morning-bell/2026/09/10/nyc-schools-to-remain-distraction-free-in-2026-27) |
| **5. Three 2026 public-opinion polls** | Public opinion context only, not outcome evidence | Shown together with sponsors and EdChoice household-income laptop split on For Policymakers (\`#public-opinion-policy\`) and Digital Divide (\`#public-opinion-equity\`) | [NPU May 2026 Topline PDF](https://nationalparentsunion.org/wp-content/uploads/2026/06/National-Parents-Union-May-2026-Survey-Topline.pdf); [NPU Sept. 2026 Topline PDF](https://nationalparentsunion.org/wp-content/uploads/2026/09/National-Parents-Union-September-2026-Survey-Topline.pdf); [EdChoice June 9, 2026 Summary](https://www.edchoice.org/2026-parents-divided-on-technology-and-student-preparation-for-life-after-graduation/); [EdChoice March–May 2026 Report PDF](https://edchoice.mcdatahub.com/edchoice/Reports/Adults_Mar26_May26.pdf); [EdChoice April 2026 Parent Crosstabs PDF](https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_April_2026.pdf); [EdChoice March 2026 Parent Crosstabs PDF](https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_March_2026.pdf); [The Century Foundation / Morning Consult Report (Aug. 25, 2026)](https://tcf.org/content/report/americans-are-united-against-the-tech-takeover-of-public-schools/) |
| **6. FOCUS Act crosswalk: §31 vs §33 and K–5 assessment** | Educational policy questions, not legal advice | Two neutral, product-free rows in the S10685 crosswalk table on NY Research & FOCUS Act (\`#emerging\`) | [NY Senate Bill S10685 Status & Text](https://www.nysenate.gov/legislation/bills/2025/S10685); [Official Bill PDF](https://legislation.nysenate.gov/pdf/bills/2025/S10685) |
| **7. About-page source-suggestion disclosure** | Editorial independence disclosure | About (\`#about\`) under Disclosure | Verbatim statement added as requested |

## Verification Flags and Exact Source Wordings

1. **U.S. Department of Education contracting wording (Aug. 20, 2026 Dear Colleague letter):** Assistant Secretary Kirsten Baesler’s 6-page letter does not use the exact phrase \`"outcomes-based contracting"\`. On page 4, it highlights states (Louisiana, Arkansas, Indiana, Michigan and Texas) \`"exploring contracting models that establish shared performance measures between educational institutions and technology providers—promoting alignment on goals, transparency around progress, and shared accountability rather than relying solely on product adoption or usage metrics,"\` and on page 5 it urges incorporating independent effectiveness evidence into procurement and contract renewal decisions. The dashboard uses the original document’s exact shared-performance-measures description. ([Dear Colleague letter, pp. 4–5](https://www.ed.gov/media/document/guidance-education-technology-and-screentime-schools-114386.pdf))
2. **HHS / Office of the Surgeon General computer-lab wording and authorship (May 20, 2026 Advisory):** Under \`"Schools can"\` (pages 28–29), the advisory’s exact phrasing is \`"Make individually-accessible devices available in a computer lab,"\` \`"Invest in physical textbooks and prioritize pen-and-paper curricula, hands-on activities, and social activities for all grade levels,"\` and \`"Limit screen use by assigning work in books or on paper whenever possible"\` rather than the literal words \`"replace 1:1 programs"\`. Page 7 also states that the advisory is not a formal systematic review, and the document was issued under HHS Secretary Robert F. Kennedy, Jr. and Acting Deputy Surgeon General RADM Paul Jung while no confirmed Surgeon General was in office. ([Advisory PDF, pp. 2–4, 7, 28–29](https://www.hhs.gov/sites/default/files/us-surgeon-generals-advisory-warning-on-the-harms-of-screen-use.pdf))
3. **Instruction Partners subgroup-study denominator and re-leveling phrasing (Sept. 2026):** While the tour studied **20 products** across **32 classroom observations in 16 school systems** (13 observed in classrooms and 7 examined through user interviews), the [How Products Vary](https://ailearningtour.instructionpartners.org/insights/how-products-vary) page explicitly notes that its outcome-research tally covers the **16 products with completed profiles at September 2026 publication**: **7 of those 16 profiled products** (out of 20 studied overall) had independent U.S. reviews examining student achievement across priority student groups (2 had non-U.S. studies, 4 had external studies underway and 3 relied on internal data only). In addition, [Subject-Specific Takeaways](https://ailearningtour.instructionpartners.org/insights/subject-specific-takeaways) warns against \`"Text releveling"\` that lowers core text complexity and limits long-term growth rather than using the literal word \`"permanent"\`. Both nuances are stated transparently on the card.
4. **EdChoice / Morning Consult slide footer date typo and unrounded income columns:** Slide 48 of [Adults_Mar26_May26.pdf](https://edchoice.mcdatahub.com/edchoice/Reports/Adults_Mar26_May26.pdf) carries a footer typo reading \`"March 11-12, 2025"\`, whereas slide 47 states the March–May 2026 survey window and the \`51%\` strongly / \`35%\` somewhat classroom-laptop figures match Table \`EC265_2\` (p. 288) of [Parents_April_2026.pdf](https://edchoice.mcdatahub.com/edchoice/Crosstabs/Parents_April_2026.pdf) (fielded April 10–13, 2026, \`N = 1,374\`). Because Morning Consult’s income crosstab prints \`Strongly support\` and \`Somewhat support\` columns without a summed net column, the dashboard displays the exact printed columns directly (\`<$50k\`: \`48%\` / \`34%\`; \`$50k–$100k\`: \`52%\` / \`35%\`; \`$100k+\`: \`54%\` / \`38%\`) rather than adding rounded percentages.
5. **APA “show me” punctuation and S10685 §37(2) four-noun list:** On page 5 of the [APA report](https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf), Recommendation 2 prints unhyphenated \`"show me" moments\` and orders the transfer verbs \`"explain, remember, and apply"\` (alongside retention/transfer persisting \`"at least one week after use"\`). In [NY Senate Bill S10685](https://legislation.nysenate.gov/pdf/bills/2025/S10685), \`§ 37(2)\` (p. 7) reads verbatim \`"inherent to the learning objective of an activity, assignment, assessment or task"\` (four nouns). The crosswalk quotes the verbatim statutory clause.
`;
fs.writeFileSync("site/nov19-source-audit.md",auditMd);

// 3. Rebuild ESSENTIAL-QUESTIONS-REVIEW.md and site/questions-1-and-16-review.md from live data (including nov19-sources.js)
const base="https://bgraham14072.github.io/screen-use-academic-outcomes/";
let qReview="# Essential Questions: Citation Map and Review Flags\n\nUpdated November 23, 2026.\n\n";
qReview+="## Scope of this revision\n\nUpdated November 23, 2026 to focus on 13 Essential Questions (retaining the underlying paper-versus-screen and early-reading evidence in Paper & Notes and Early Reading Evidence) and to revise Questions 10 and 11 around teacher-led early-grades reading differentiation and early reading-difficulty screening.\n\n";
for(let i=0;i<ctx.groups.length;i++){
 qReview+=`## ${ctx.groups[i].title}\n\n`;
 for(const q of ctx.questions.filter(q=>q.group===i)){
  qReview+=`### ${q.question}\n\n`;
  qReview+=`[Open question ${q.n}](${base}#${q.id}). Research label: ${q.certainty}.\n\n`;
  qReview+=`- **Evidence:** ${q.refs.map(k=>`[${ctx.evidence[k][1]}](${base}#${ctx.evidence[k][0]})`).join("; ")}.\n`;
  qReview+=`- **Review flag:** ${q.thin}\n`;
  qReview+=`- **What could change the answer:** ${q.change}\n\n`;
 }
}
qReview+="## Editorial safeguards\n\nLabels are plain-language summaries, not formal quality grades. Intervention findings, observational associations, professional-association syntheses and qualitative nonprofit observations remain distinct, and general tutoring or classroom-observation findings do not validate early-literacy AI implementations.\n\n[Read the November 19, 2026 source audit]("+base+"nov19-source-audit.md). [Read the earlier study audit]("+base+"study-additions-audit.md). [Download the exact-value ledger]("+base+"new-values-ledger.csv).\n";
fs.writeFileSync("ESSENTIAL-QUESTIONS-REVIEW.md",qReview);

const reviewSources={
 1:[["mindspark","assistments-maine"],["mindspark","assistments-maine"],["assistments-nc"],["steenbergen","federal2007","federal2009","rand2015","rand2017"],["kulik"],["ran"],["apa-2026"]],
 13:[["mindspark","assistments-maine"],[],["kulik"],["rand2017","federal2007","federal2009"],["bettinger"],["apa-2026"],["instruction-partners"]]
};
function reviewProse(q,key){
 if(key!=="shows")return q[key];
 return q[key].split(/(?<=[.!?]) (?=[A-Z])/).map((s,i)=>{
  const refs=(reviewSources[q.n][i]||[]).flatMap(id=>{
   const c=ctx.allStudies.find(c=>c.id==="study-"+id);
   if(!c)throw new Error("Missing review source "+id);
   return [[c.full,c.label],...(id==="assistments-nc"?(c.companions||[]).slice(0,1):[])];
  });
  return s+(refs.length?" ("+refs.map(([u,l])=>`[${l}](${u})`).join("; ")+")":"");
 }).join(" ");
}
let q116="# Essential Questions 1 and 13: Full Answer Text\n\nNovember 23, 2026. Full answer text from the public dashboard. These are editorial summaries, not new pooled research results.\n\n";
for(const n of [1,13]){
 const q=ctx.questions.find(q=>q.n===n);
 q116+=`## Question ${n}: ${q.question}\n\n`;
 for(const [key,label]of [["short","Short answer"],["certainty","How sure is the research?"],["shows","What the research shows"],["doesnt","What it doesn't show"],["classroom","What this means in a classroom"],["change","What would change this answer"]])q116+=`### ${label}\n\n${reviewProse(q,key)}\n\n`;
 q116+="### Evidence linked in the answer\n\n"+q.refs.map(k=>{
  const c=[...ctx.personalized,...ctx.nov19].find(c=>c.id===k);
  return c?`- **${c.label} (${c.category}):** [Original publication](${c.url}); [full text or primary report](${c.full}).`:`- **${ctx.evidence[k][1]}:** existing dashboard evidence anchor #${ctx.evidence[k][0]}.`;
 }).join("\n")+"\n\n";
}
fs.writeFileSync("site/questions-1-and-16-review.md",q116.trimEnd()+"\n");
console.log("Built Nov 19 audit, preserved append-only ledger, and updated Q1/Q13 and full Essential Questions review files.");
