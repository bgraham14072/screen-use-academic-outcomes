// Original-source audit, 18 November 2026. Pure data; no DOM or network access.
// Values retain source precision. Baseline-SD effects and raw test points are not relabeled g.
const personalizedStudies=[
{
 id:"study-mindspark",view:"explorer",label:"Muralidharan, Singh & Ganimian · 2019",
 title:"Disrupting Education? Experimental Evidence on Technology-Aided Instruction in India",
 authors:"Karthik Muralidharan, Abhijeet Singh and Alejandro J. Ganimian",
 venue:"American Economic Review 109(4):1426–1460",
 category:"Peer-reviewed journal article",design:"Individual randomized controlled trial: voucher lottery; intention-to-treat effect of the offer.",
 url:"https://doi.org/10.1257/aer.20171112",
 full:"https://econweb.ucsd.edu/~kamuralidharan/papers/Published%20Articles/Disrupting_education_AER.pdf",
 funder:"J-PAL Post-Primary Education initiative funded the research. Central Square Foundation, Tech Mahindra Foundation and Porticus funded center operations.",
 population:"619 students in low-income Delhi neighborhoods, mainly grades 6–9. Grade coverage is not exclusively secondary: the manuscript also identifies pupils in grades 4–5 and missing grade data.",
 context:"After-school centers over 4.5 months: 45 minutes of adaptive software plus 45 minutes of instructor-supported small-group study. Controls did not receive center access during the trial. Average attendance among voucher winners was 58%, not the percentage who took up the offer.",
 finding:"The voucher offer increased mathematics scores by 0.37 baseline-test SD and Hindi by 0.23 baseline-test SD. Absolute gains did not significantly differ by initial achievement; relative gains were larger among weaker pupils because their control-group progress was near zero. Mathematics gains were on below-grade-level items, not a demonstrated improvement on grade-level mathematics items.",
 limits:"The experiment evaluates the combined program, not software alone. Large initial learning gaps and the low-income Indian after-school setting limit direct transfer to New York. Narrative only: baseline-normalized regression effects are not Hedges’ g or Cohen’s d. Table 2 reports standard errors, not confidence intervals; no interval or cross-scale ranking is created.",
 locator:"Accepted manuscript dated September 17, 2018: acknowledgments; pp. 7–10 (design, dosage, sample, attendance); pp. 12–14 and Table 2 p. 38 (ITT, scale); Tables 4–5 pp. 40–41 (heterogeneity). Journal metadata: publisher record.",
 values:"619; grades 6–9 and 4–5: manuscript p. 9 and footnote 9 | 4.5 months: abstract and pp. 8–10 | 45+45 minutes: pp. 7–8 | 58%: p. 9 | 0.37 and 0.23 baseline SD: Table 2 p. 38",
 placements:"Q1, Q13, Q15; Evidence explorer; policymaker favorable finding; brief supporting evidence."
},
{
 id:"study-steenbergen",view:"explorer",label:"Steenbergen-Hu & Cooper · 2013",
 title:"A Meta-Analysis of the Effectiveness of Intelligent Tutoring Systems on K–12 Students’ Mathematical Learning",
 authors:"Saiying Steenbergen-Hu and Harris Cooper",venue:"Journal of Educational Psychology 105(4):970–987",
 category:"Peer-reviewed journal article",design:"Meta-analysis of controlled comparisons; not a single randomized trial.",
 url:"https://doi.org/10.1037/a0032447",full:"https://dukespace.lib.duke.edu/bitstreams/f123780d-7d60-48c2-928d-8a4c402366b0/download",
 funder:"NR in the original article.",
 population:"26 reports and 34 independent samples, K–12 mathematics; only three elementary-school studies, from one research team. Unique combined participant N: NR here.",
 context:"Intelligent tutoring, generally alongside classroom instruction, versus regular instruction. Homework and human-tutor comparisons were analyzed separately. Durations ranged from short interventions to a school year or longer; a common duration and country-level sample: NR.",
 finding:"Overall estimates ranged from Hedges’ g = 0.01 to 0.09 across adjusted/unadjusted and fixed/random models. The unadjusted fixed-effect estimate was statistically significant but very small; the random-effects and adjusted results were not statistically clear. Shorter-than-a-school-year interventions had larger effects than longer implementations.",
 limits:"Low-achiever samples had less favorable, negative estimates, contrasting with the lower-performer benefit in Maine ASSISTments. That moderator was significant under fixed effects but not random effects and rested on only three studies. Grade-band differences were not robust across models. These are between-study comparisons, not proof that duration, prior achievement or teacher involvement caused the differences. Reviews may overlap other cards.",
 locator:"pp. 971–975 (reports, samples, comparisons); p. 976 (overall models); Tables 2–3 pp. 977 and 979 (duration, achievement, grades); pp. 978–979 (elementary studies); p. 983 (limitations).",
 values:"26 reports; 34 samples: pp. 971–975 | g 0.01–0.09: p. 976 | three elementary studies: pp. 978–979 | three low-achiever studies: pp. 977–978",
 placements:"Q1, Q6, Q11, Q16; Evidence explorer; digital-divide comparison; Methods."
},
{
 id:"study-assistments-maine",view:"explorer",label:"Roschelle et al. · 2016; Murphy et al. · 2020",
 title:"Online Mathematics Homework Increases Student Achievement",
 authors:"Jeremy Roschelle, Mingyu Feng, Robert F. Murphy and Craig A. Mason; companion reanalysis by Robert Murphy, Jeremy Roschelle, Mingyu Feng and Craig A. Mason",
 venue:"AERA Open 2(4); reanalysis in Journal of Research on Educational Effectiveness 13(2)",
 category:"Peer-reviewed journal article",design:"School-cluster randomized controlled trial; the later publication reanalyzes the same Maine trial.",
 url:"https://doi.org/10.1177/2332858416673968",full:"https://files.eric.ed.gov/fulltext/EJ1194398.pdf",
 funder:"U.S. Department of Education, Institute of Education Sciences, R305A120125.",
 population:"43 Maine public schools; 2,850 seventh graders in the original analysis and 2,769 in the reanalysis. Students had take-home laptops. Do not sum these overlapping samples.",
 context:"One school year of mathematics homework after a teacher warm-up year, versus existing homework practices. Immediate feedback and hints, teacher diagnostic reports, and instructional use of those reports were combined with summer professional development and coaching.",
 finding:"The original analysis reports g = 0.18 on the independent TerraNova mathematics assessment and greater benefits for pupils with lower prior achievement. The three-level reanalysis reports g = 0.22, with a reported 95% CI [0.15, 0.30]; this is the sole Maine register estimate. The WWC rates the original study as meeting standards without reservations.",
 limits:"This is not a test of software without teaching support, and Murphy (2020) is not an independent replication or a longer-term follow-up. The reanalysis did not establish the proposed homework-review practice as a causal mediator. Numerical lower-performer contrasts are withheld because the original text and table disagree.",
 locator:"2016: pp. 1, 4–5 (sample, design, PD); Table 2 p. 8 (g); p. 10 (funder). Murphy 2020: Table 4 (N); p. 255, Main Effect of Intervention (g and CI); p. 265 (funding). WWC study 86375, August 2026.",
 companions:[["https://files.eric.ed.gov/fulltext/ED657283.pdf","Murphy 2020 original reanalysis"],["https://ies.ed.gov/ncee/wwc/study/86375","WWC review of the 2016 publication"]],
 fieldCitations:{
  finding:[["https://files.eric.ed.gov/fulltext/EJ1194398.pdf","Original trial"],["https://files.eric.ed.gov/fulltext/ED657283.pdf","Murphy 2020 reanalysis"],["https://ies.ed.gov/ncee/wwc/study/86375","WWC study review"]],
  population:[["https://files.eric.ed.gov/fulltext/ED657283.pdf","Reanalysis and original-sample comparison"]],
  limits:[["https://files.eric.ed.gov/fulltext/ED657283.pdf","Murphy 2020 reanalysis"],["https://files.eric.ed.gov/fulltext/ED657283.pdf","Mediator analysis"],["https://files.eric.ed.gov/fulltext/EJ1194398.pdf","Original trial"]]
 },
 register:"M2",
 values:"43 schools; 2,850 students; grade 7: 2016 pp. 1, 4–5 | g 0.18: 2016 Table 2 p. 8 | N 2,769: 2020 Table 4 | g 0.22; 95% CI 0.15–0.30: 2020 p. 255, Main Effect of Intervention | one student school year after warm-up: 2016 pp. 4–5",
 placements:"M2 register; Q1, Q11, Q13, Q15, Q16; Evidence explorer; policymaker favorable finding; digital-divide card; §35(2)(h); brief."
},
{
 id:"study-federal2007",view:"explorer",label:"Dynarski et al. · 2007",
 title:"Effectiveness of Reading and Mathematics Software Products: Findings from the First Student Cohort",
 authors:"Mark Dynarski, Roberto Agodini, Sheila Heaviside, Timothy Novak, Nancy Carey, Larissa Campuzano, Barbara Means, Robert Murphy, William Penuel, Hal Javitz, Deborah Emery and Willow Sussex",
 venue:"NCEE 2007-4005, Institute of Education Sciences",
 category:"Government evaluation report",design:"Teacher/classroom-cluster randomized controlled trial within schools; students were not randomly assigned to teachers.",
 url:"https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pdf/20074005.pdf",
 full:"https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pdf/20074005.pdf",
 funder:"U.S. Department of Education, Institute of Education Sciences.",
 population:"U.S. schools: first- and fourth-grade reading, sixth-grade mathematics and Algebra I. Sample counts differ by analysis; a single combined student N is not used.",
 context:"Software products and associated training versus instruction without the selected study product during the 2004–2005 school year. Products, use and comparison practices varied.",
 finding:"The pooled product groups did not significantly improve standardized achievement in any of the four grade/subject groups in the first student cohort. This is a null finding, not proof that every software product or instructional use has no effect.",
 limits:"The products and implementation period are older than current tools. Teacher-reported use time was positively associated with fourth-grade reading effects, but not consistently across other groups; the association does not establish a causal dose-response relationship. This cohort overlaps the later federal report and must not be added to it.",
 locator:"Executive summary and Chapters I–IV (design, setting, first-cohort nulls); Table III.8 pp. 47–49 (fourth-grade use-time association).",
 values:"Grades 1, 4, 6 and Algebra I; 2004–2005; four pooled groups: executive summary and Chapters I–IV",
 placements:"Q1, Q6, Q16; Evidence explorer; policymaker caution; §35(2)(h); brief."
},
{
 id:"study-assistments-nc",view:"explorer",label:"Feng, Huang & Collins · 2024",
 title:"Supporting Middle School Math Learning With a Technology-Based Intervention: Impact, Moderators, and Usage",
 authors:"Mingyu Feng, Chunwei Huang and Kelly Collins",venue:"WestEd technical report, September 2024",
 category:"Research-organization report (not peer-reviewed)",design:"School-cluster randomized controlled trial with a later follow-up of the same student cohort.",
 url:"https://www.wested.org/wp-content/uploads/2024/10/V07_ASSISTments-tech-report_FINAL-ADA.pdf",
 full:"https://www.wested.org/wp-content/uploads/2024/10/V07_ASSISTments-tech-report_FINAL-ADA.pdf",
 funder:"IES R305A170641 supported the replication; Arnold Ventures supported the follow-up.",
 population:"63 North Carolina schools in 41 districts. Grade 7 intervention, grade 8 follow-up; the regular state-test analytic sample was 5,991, not the entire recruited cohort. Advanced-mathematics test takers were analyzed separately.",
 context:"Teacher warm-up in 2018–2019; study cohort in 2019–2020; follow-up in 2021. ASSISTments with teacher support versus business as usual. COVID disrupted implementation and canceled the planned grade 7 state assessment; cancellation is not a null finding.",
 finding:"At grade 8 follow-up the regular state-test group scored 0.80 points higher, SE = 0.315, p = 0.011, reported Hedges’ g = 0.10. Unlike the Maine result, this report did not establish greater benefits for lower-performing pupils. Its finding is specific to this test-taking sample and follow-up.",
 limits:"The reported standard error is in test points, not g; a compatible reported g interval is NR, so this remains narrative rather than assigning the raw-score error to g. A separate immediate-outcome conference paper reports a nonsignificant alternative-test result during COVID disruption; it concerns this trial, not an independent sample. The 2025 journal successor is identified, but its full methods/tables were not accessible and are not substituted for this report.",
 locator:"pp. 3–4 (design, schools, timing); pp. 11–12 (analysis samples); Table 8 p. 15 (effect, SE, p, g); pp. 15–16 (prior-achievement moderator); p. 32 (funding).",
 companions:[["https://files.eric.ed.gov/fulltext/ED631720.pdf","Original 2023 conference paper: immediate null, pp. 9–10; not a journal article"],["https://onlinelibrary.wiley.com/doi/10.1111/bjet.13579","2025 peer-reviewed successor: full-text verification pending"]],
 values:"63 schools; 41 districts; grades 7–8; 2018–2019, 2019–2020, 2021: pp. 3–4 | 5,991: pp. 11–12 | 0.80 points; SE 0.315; p 0.011; g 0.10: Table 8 p. 15",
 placements:"Q1, Q11; Evidence explorer. Same-trial immediate and later outcomes linked, not counted as replications."
},
{
 id:"study-federal2009",view:"explorer",label:"Campuzano et al. · 2009",
 title:"Effectiveness of Reading and Mathematics Software Products: Findings from Two Student Cohorts",
 authors:"Larissa Campuzano, Mark Dynarski, Roberto Agodini and Kristina Rall",venue:"NCEE 2009-4041, Institute of Education Sciences",
 category:"Government evaluation report",design:"Teacher/classroom-cluster randomized controlled trial within schools; follow-on analyses of the federal evaluation.",
 url:"https://ies.ed.gov/ncee/pubs/20094041",
 full:"https://ies.ed.gov/sites/default/files/migrated/nces_pubs/ncee/pubs/20094041/pdf/20094041.pdf",
 funder:"U.S. Department of Education, IES; contract ED-01CO0039/0007.",
 population:"U.S. first- and fourth-grade reading, sixth-grade mathematics and Algebra I. Two student cohorts; product and returning-teacher samples differ. Unique combined N used here: NR.",
 context:"2004–2006 products and classrooms, compared with instruction without the selected study product. The report examines individual products and returning teachers separately; it is not an independent replication of the first federal report.",
 finding:"Nine of ten pooled product estimates were not statistically significant. LeapTrack’s fourth-grade reading effect was significant in the pooled product analysis, ES = 0.09, not in the second-year-only analysis. The returning-teacher analysis also includes a positive second-year Algebra I result and a less favorable sixth-grade year-to-year contrast.",
 limits:"A blanket all-null description would omit these exceptions. Changes in usage were not associated with changes in effects in the returning-teacher analysis; this does not erase the earlier fourth-grade observational association. Older products do not settle efficacy of current systems. Do not sum cohorts or overlapping publications.",
 locator:"Executive summary pp. xix–xxii; product analyses Tables III.1–III.2 pp. 53–55; returning-teacher analyses, Chapter II; funding front matter.",
 values:"Two cohorts; grades 1, 4, 6, Algebra I; 2004–2006: executive summary | nine of ten products; LeapTrack ES 0.09: Tables III.1–III.2 pp. 53–55",
 placements:"Q1, Q6, Q16; Evidence explorer; policymaker caution; §35(2)(h); brief."
},
{
 id:"study-kulik",view:"explorer",label:"Kulik & Fletcher · 2016",
 title:"Effectiveness of Intelligent Tutoring Systems: A Meta-Analytic Review",
 authors:"James A. Kulik and J. D. Fletcher",venue:"Review of Educational Research 86(1):42–78; original article reprinted in IDA D-8391",
 category:"Peer-reviewed journal article",design:"Meta-analysis of controlled evaluations, including randomized and nonrandomized comparisons.",
 url:"https://doi.org/10.3102/0034654315581420",full:"https://www.ida.org/assets/2026/06/18023241/D-8391.pdf",
 funder:"Office of Naval Research.",
 population:"50 controlled evaluations: 23 elementary/high-school and 27 postsecondary evaluations. Settings include colleges and military training. A separate published military-versus-college count and unique participant N are NR.",
 context:"Intelligent tutoring versus conventional instruction; different subjects, settings and intervention lengths. No common duration or grade range beyond the reported education-level groups.",
 finding:"The median effect was 0.66 SD using Glass’s effect size. This is a median of study effects, not the pooled effect, and remains narrative only. Favorable results need to be read alongside much larger effects on local tests than standardized tests.",
 limits:"Weak implementation and unconventional comparison conditions produced smaller results. Local-test alignment can reward learning of taught content without demonstrating broader transfer; independent measures deserve priority when making policy claims. Different tests can measure different constructs, so a local-test benefit is not automatically invalid. Reviews and primary trials may overlap.",
 locator:"Article pp. 42, 49 and 60 (50 evaluations, median and metric); Table 3 p. 61 (23/27 and test types); pp. 63–69 (test alignment, controls, implementation); p. 70 (funder). The 2017 IDA wrapper is not another study.",
 values:"50 evaluations; median 0.66: pp. 49, 60 | 23 elementary/high-school and 27 postsecondary: Table 3 p. 61",
 placements:"Q1, Q16; Evidence explorer; Methods test-alignment explanation."
},
{
 id:"study-cognitive-tutor",view:"explorer",label:"Pane, Griffin, McCaffrey & Karam · 2014",
 title:"Effectiveness of Cognitive Tutor Algebra I at Scale",
 authors:"John F. Pane, Beth Ann Griffin, Daniel F. McCaffrey and Rita T. Karam",
 venue:"Educational Evaluation and Policy Analysis 36(2):127–144; author addendum WR-1050-DEIES",
 category:"Peer-reviewed journal article",design:"School-cluster randomized controlled trial with matched school pairs; two implementation years.",
 url:"https://doi.org/10.3102/0162373713507480",
 full:"https://www.rand.org/content/dam/rand/pubs/working_papers/WR1000/WR1050/RAND_WR1050.pdf",
 funder:"IES R305A070185, as identified in the official IES project-publication record.",
 population:"U.S. middle and high schools in seven states. Author addendum: 11,066 high-school and 5,519 middle-school students across two cohorts. Exact recruited-school total and exact grade range are NR in the original materials fully accessible here.",
 context:"Blended Algebra I curriculum and tutoring software versus schools’ existing algebra curriculum. Each school participated for two implementation years, with successive student cohorts rather than a long-term retest of one cohort.",
 finding:"The article reports no first-year effect and a positive second-year high-school effect; the middle-school estimate was not statistically significant. The author addendum supports the qualified pattern. It does not establish that adding software alone caused a benefit.",
 limits:"Original article abstract and full author addendum were checked; the full journal methods were access-restricted. The WWC’s May 2026 review lists no statistically significant positive findings, despite a conflicting positive domain heading. Its earlier report explains that the high-school second-cohort result did not survive a multiple-comparison adjustment. Reviews differ by cohort and standards; this is not a blanket rejection of the trial.",
 locator:"Journal abstract (design, setting, direction); addendum pp. 4–6, Tables 3–4 (sample and cohort results); WWC 2016 pp. 23–24 and 30–31 (adjustment); WWC study 82101 (May 2026); IES mathematics/science efficacy publication list (grant).",
 companions:[["https://files.eric.ed.gov/fulltext/ED566735.pdf","Official WWC 2016 report"],["https://ies.ed.gov/ncee/wwc/study/82101","WWC May 2026 review: inspect details, not heading alone"],["https://ies.ed.gov/about/national-center-education-research-ncer/performance-measures/intreventions-with-evidence-of-efficacy-of-improving-student-outcomes-in-mathematics-or-science","IES funder and grant record"]],
 values:"Seven states; two implementation years: original article abstract | 11,066 high-school and 5,519 middle-school students, two cohorts: author addendum pp. 4–5 | 147 schools: withheld, not verified",
 placements:"Q1, Q16; Evidence explorer; §35(2)(h) evidence-standard contrast."
},
{
 id:"study-escueta",view:"explorer",label:"Escueta, Nickow, Oreopoulos & Quan · 2020",
 title:"Upgrading Education with Technology: Insights from Experimental Research",
 authors:"Maya Escueta, Andre Joshua Nickow, Philip Oreopoulos and Vincent Quan",venue:"Journal of Economic Literature 58(4):897–996",
 category:"Peer-reviewed journal article",design:"Review of experimental studies: randomized controlled trials and regression-discontinuity designs, not a pooled meta-analysis.",
 url:"https://doi.org/10.1257/jel.20191507",full:"https://pubs.aeaweb.org/doi/pdf/10.1257/jel.20191507",
 funder:"Spencer Foundation.",
 population:"Developed-country evidence across school and postsecondary education, with developing-country examples for context. Not exclusively K–12 or elementary education. A unique combined student N, common grade range and duration are NR.",
 context:"Reviews technology access, computer-assisted learning, technology-enabled behavioral interventions and online learning, with study-specific comparison conditions.",
 finding:"Computer-assisted learning, especially personalized mathematics practice, includes promising findings. Providing devices alone has generally not reliably improved achievement; some online-only courses performed worse than courses with face-to-face teaching. These are different interventions and outcomes, not one common effect.",
 limits:"Implementation quality, suitable learning content and teacher engagement may matter, but the review calls for research to isolate mechanisms and generalizability. Do not infer that a component was causally proven by comparing separate studies. This is mostly pre-generative-AI evidence, not direct evidence for young children using current AI.",
 locator:"p. 897 (title, scope, funder); review tables and sections (designs and populations); pp. 983–985 (balanced synthesis and limitations). Publisher PDF opened and full text checked.",
 values:"No new numerical research effect or participant total displayed.",
 placements:"Q1, Q13, Q15, Q16; Evidence explorer; practical criteria context."
},
{
 id:"study-rand2015",view:"explorer",label:"Pane et al. · RAND 2015",
 title:"Continued Progress: Promising Evidence on Personalized Learning",
 authors:"John F. Pane, Elizabeth D. Steiner, Matthew D. Baird and Laura S. Hamilton",venue:"RAND RR-1365-BMGF",
 category:"Research-organization report (not peer-reviewed)",design:"Matched-comparison (quasi-experimental), using virtual comparison students; not randomized.",
 url:"https://www.rand.org/pubs/research_reports/RR1365.html",full:"https://www.rand.org/content/dam/rand/pubs/research_reports/RR1300/RR1365/RAND_RR1365.pdf",
 funder:"Bill & Melinda Gates Foundation.",
 population:"62 U.S. schools, elementary through high school; mathematics N = 11,217 and reading N = 10,906. These outcome samples overlap and are not summed.",
 context:"Broad personalized-learning models during 2013–2015 versus matched NWEA virtual comparisons. Schools combined technology with varied staffing, scheduling and instructional changes.",
 finding:"The report estimates 0.27 SD in mathematics and 0.19 SD in reading, more favorable than the later RAND evaluation. Results varied across schools; the small district-school group, serving grades 7–12, had mixed outcomes and an aggregate effect near zero.",
 limits:"Matching does not remove unmeasured selection or identify software as the cause. Charter/district comparisons confound school level and other differences. These findings are not a randomized product test, and the two RAND reports must not be treated as independent samples to add together.",
 locator:"Front matter (funder); pp. 4–5 and 38–39 (matching); Chart 1 pp. 7–9 (schools, subject Ns, effects); Chart 7 p. 13 (district variation).",
 values:"62 schools; math N 11,217; reading N 10,906; 0.27 and 0.19 SD: Chart 1 pp. 7–9 | 2013–2015: study description pp. 4–5 | district grades 7–12: p. 13",
 placements:"Q1; Evidence explorer immediately before RAND 2017; balanced personalization sequence."
},
{
 id:"study-rand2017",view:"explorer",label:"Pane et al. · RAND 2017",
 title:"Informing Progress: Insights on Personalized Learning Implementation and Effects",
 authors:"John F. Pane, Elizabeth D. Steiner, Matthew D. Baird, Laura S. Hamilton and Joseph D. Pane",venue:"RAND RR-2042-BMGF",
 category:"Research-organization report (not peer-reviewed)",design:"Matched-comparison (quasi-experimental), using virtual comparison students; not randomized.",
 url:"https://www.rand.org/pubs/research_reports/RR2042.html",full:"https://www.rand.org/content/dam/rand/pubs/research_reports/RR2000/RR2042/RAND_RR2042.pdf",
 funder:"Bill & Melinda Gates Foundation.",
 population:"U.S. elementary through high school; 40 implementation schools and 32 achievement-analysis schools. Mathematics N = 5,539; reading N = 5,474. Outcome samples overlap.",
 context:"One-year 2014–2015 achievement comparison of broad personalized-learning approaches with matched NWEA virtual comparisons; implementation evidence is broader than the achievement sample.",
 finding:"Mathematics improved by 0.09 SD, statistically significant; reading by 0.07 SD, not statistically significant. These estimates were smaller than the earlier RAND report. School outcomes varied; charter/district differences were imprecise and district schools were all middle or high schools.",
 limits:"Popularity and adoption can outpace rigorous evidence. Matching cannot establish that technology caused the differences or separate individual model components. Do not characterize a nonsignificant reading estimate as a proven benefit or assume apparent charter/district differences are causal. Pilot, evaluate independently, and change or scale back uses that fail local goals; that is guidance, not a validated rule.",
 locator:"p. 1 (funder); study overview (40 implementation schools); Figure 15 p. 33 (32 schools, Ns, effects); pp. 37–38 (variation and grade confounding); conclusions (evidence and implementation cautions).",
 values:"40 implementation; 32 achievement schools: overview and Figure 15 p. 33 | math N 5,539; reading N 5,474; 0.09 and 0.07 SD: Figure 15 p. 33 | one year, 2014–2015: achievement-analysis description",
 placements:"Q1, Q16; Evidence explorer after RAND 2015; policymaker caution; brief."
}
];
addedStudies.push(...personalizedStudies);
// Reuse the existing review, without a second card or numerical record.
const existingITSReview=addedStudies.find(c=>c.id==="study-letourneau");
existingITSReview.funder="IVADO, Strategic Research Funding Program, PRF-2021-05; original Acknowledgements.";
existingITSReview.context+=" Intervention durations vary across the included studies; there is no common duration. Comparisons include traditional teaching and non-intelligent digital tutoring.";
for(const c of personalizedStudies){
 questionEvidence[c.id]=[c.id,c.label+" · "+c.design];
 questionCardTargets[c.id]={view:"explorer",selector:"#"+c.id,index:0};
}
const reviseQuestion=(n,patch)=>Object.assign(essentialQuestions.find(q=>q.n===n),patch);
reviseQuestion(1,{
 short:"Technology can help when it provides well-targeted practice and useful feedback within a supported teaching approach, especially in mathematics. Some rigorous trials show meaningful gains, while broad personalization initiatives and generic software have produced modest, mixed or null results. The evidence supports choosing a specific instructional use, not assuming that devices or more screen time improve learning.",
 shows:"Mindspark combined practice at pupils’ actual learning level with instructor-supported study; Maine ASSISTments combined homework feedback, teacher reports and professional development. Both improved learning in randomized trials. North Carolina’s later follow-up was favorable, but its disrupted immediate assessment was not. Alongside these findings, the K–12 tutoring meta-analysis found small or uncertain average effects, federal software evaluations were mostly null with specific exceptions, and RAND’s later matched-comparison gains were smaller than its earlier results. Kulik’s favorable median was larger on local tests than on standardized tests. Ran’s function comparisons also suggest variation, not a causal ranking.",
 doesnt:"These studies do not isolate teacher involvement as the causal explanation for differences across programs. They do not establish a universal benefit, a safe screen-time dose, direct transfer from low-income Delhi to New York, or efficacy of current generative AI for young children.",
 classroom:"Start with a subject-specific learning need and pupils’ actual level. Compare the supported digital approach with strong non-digital teaching and check learning beyond the platform.",
 refs:["D1","D2","L1","N4","ran","study-mindspark","study-assistments-maine","study-assistments-nc","study-steenbergen","study-kulik","study-escueta","study-rand2015","study-rand2017","study-cognitive-tutor","study-federal2007","study-federal2009"],
 thin:"Mixed results across programs, outcomes, designs and settings. Bundled randomized interventions, matched comparisons and review moderators answer different questions."
});
const q6=essentialQuestions.find(q=>q.n===6);
q6.shows+=" The K–12 tutoring review found larger effects in shorter-than-a-school-year interventions, but this between-study moderator does not show that shortening a particular program will help. Federal findings on time using software were inconsistent: the first report found a fourth-grade association, while the follow-on analysis found no link between changes in usage and changes in effects.";
q6.refs.push("study-steenbergen","study-federal2007","study-federal2009");
const q11=essentialQuestions.find(q=>q.n===11);
q11.shows+=" Maine ASSISTments benefited lower-performing pupils more, whereas the K–12 tutoring review found less favorable low-achiever results, with a fragile moderator based on few studies. North Carolina did not establish a greater lower-performer benefit. Personalization may narrow or widen gaps depending on the program and implementation; teacher involvement is not a proven causal explanation for these contrasts.";
q11.refs.push("study-assistments-maine","study-assistments-nc","study-steenbergen");
for(const n of [13,15]){
 const q=essentialQuestions.find(q=>q.n===n);
 q.shows+=" The additional Mindspark and ASSISTments trials mainly concern secondary grades and pre-generative-AI systems. They are not direct evidence for young children’s reading with current AI.";
 q.refs.push("study-mindspark","study-assistments-maine","study-escueta");
}
reviseQuestion(16,{
 short:"Use a small, evaluated pilot rather than treating personalization as a guarantee of better learning. Check whether the activity fits pupils’ actual level, informs teacher action, targets a clear subject need, has implementation support, and improves learning on independent measures. Set review and stopping rules before starting, then scale back if learning goals are not met or important activities are displaced.",
 shows:"The positive Mindspark and ASSISTments trials support examining five practical criteria: fit to actual student level; teachers acting on diagnostic information; a defined subject and learning goal; professional development and implementation support; and assessment independent of the vendor or practice task. These are proposed review criteria, not separately proven causal ingredients. Kulik’s test-alignment findings caution against relying only on local tests. RAND’s later modest or uncertain results and the federal software evaluations justify piloting and checking results rather than assuming broad personalization works. Bettinger shows that more assigned practice need not add benefit.",
 doesnt:"These criteria are not a validated checklist, a product certification or a universal stopping threshold. No cross-study comparison proves that teacher involvement alone explains why one program worked and another did not.",
 classroom:"Specify the comparison, independent learning measure, subgroup checks and review date before the pilot. Adapt, reduce or stop the activity if it fails agreed goals, displaces valuable teaching, or creates unresolved access, safety or privacy problems.",
 refs:["policy","D1","D2","added","reflection","bettinger","study-mindspark","study-assistments-maine","study-kulik","study-steenbergen","study-escueta","study-rand2017","study-cognitive-tutor","study-federal2007","study-federal2009"],
 thin:"Practical guidance informed by contrasting results, not a validated algorithm or legal certification. Preserve independent measures and a fair comparison."
});
