// Original-source additions from the November 2026 AI Tutoring & Screen Use packet, verified 23 November 2026.
// Pure data; no DOM or network access. Numerical register entries M3-M6 live in ai-tutoring-packet-data.js.
const aiTutoringPacketStudies=[
{
 id:"study-outhwaite",view:"explorer",verified:"23 November 2026",
 registers:[["M3","Inspect M3 (supplemental arm: d = +0.31, 95% CI [+0.06, +0.55])"],["M4","Inspect M4 (time-equivalent replacement arm: d = +0.21, 95% CI [-0.03, +0.46])"]],
 label:"Outhwaite, Faulder, Gulliford & Pitchford · 2019 (online 2018)",
 title:"Raising Early Achievement in Math With Interactive Apps: A Randomized Control Trial",
 authors:"Laura A. Outhwaite, Marc Faulder, Anthea Gulliford and Nicola J. Pitchford",
 venue:"Journal of Educational Psychology, 111(2), 284-297 (advance online June 25, 2018)",
 category:"Peer-reviewed journal article",
 design:"Three-arm pupil-level randomized controlled trial across 12 weeks comparing supplemental app use, time-equivalent app replacement and standard classroom mathematics practice.",
 url:"https://doi.org/10.1037/edu0000286",
 full:"https://discovery.ucl.ac.uk/id/eprint/10058087/1/Raising%20early%20achievement%20in%20math%20with%20interactive%20apps.pdf",
 funder:"Economic and Social Research Council (grant ES/J500100/1) and University of Nottingham; nonprofit developer onebillion donated the apps free of charge, and the authors report no financial interest.",
 population:"United Kingdom early years: 389 posttested children aged 4-5 across 11 schools (126 supplemental, 131 time-equivalent replacement, 132 standard-practice control), from 461 randomized across 12 schools and 452 pretested.",
 context:"Thirty minutes daily of child-centered touchscreen math apps (onebillion Maths 3-5 and Maths 4-6 with headphones and teacher supervision), either added atop regular math instruction (Group 1) or replacing one daily small-group teacher-led math activity without increasing total math time (Group 2), measured on the paper-based Progress Test in Maths 5.",
 finding:"Children in the supplemental app arm made larger paper-based math gains than standard-practice controls (d = 0.31, 95% CI [0.06, 0.55], t(256) = 2.46, p = 0.015). In the time-equivalent replacement arm, gains over control were smaller (d = 0.21, 95% CI [-0.03, 0.46], t(261) = 1.74), reaching significance only under the authors’ directional one-tailed test (p = 0.042) while the printed two-tailed 95% confidence interval crossed zero. Direct comparison between the supplemental and time-equivalent app arms was not statistically significant (d = 0.08, 95% CI [-0.17, 0.33], t(255) = 0.64, p = 0.525), gains did not differ systematically by socioeconomic status, and children with weaker short-term or working memory gained more in the supplemental arm.",
 limits:"Group 1 confounded interactive app instruction with 30 extra minutes of daily mathematics, while Group 2’s time-equivalent advantage crossed zero on a two-tailed 95% interval. Sixty-three of 452 pretested pupils missed posttesting (including 30 on a school field trip). This trial is already included inside Dorris et al. (2024) in records D1 and D2, and M3 and M4 share the same 132-pupil control group, so participant totals must never be summed across rows. It tests structured early-years math apps, not generative AI, literacy software or full-day 1:1 device programs.",
 locator:"pp. 284-297 (journal pagination; packet citation printed 284-298); pp. 287-289 Method and sample flow (461 randomized, 452 pretested, 389 posttested across 11 schools); p. 291 Results and Table 2 (Group 1 vs 3 d = 0.31 [0.06, 0.55]; Group 2 vs 3 d = 0.21 [-0.03, 0.46], one-tailed p = 0.042; Group 1 vs 2 d = 0.08 [-0.17, 0.33]); pp. 291-293 SES and memory moderators; p. 284 funding and conflict note.",
 values:"389 posttested (126; 131; 132) of 461 randomized: pp. 287-289 | d = 0.31 [0.06, 0.55] and d = 0.21 [-0.03, 0.46] and d = 0.08 [-0.17, 0.33]: p. 291",
 placements:"M3 and M4 in numerical register; Evidence explorer instructional context; Q1, Q3, Q8, Q13."
},
{
 id:"study-ma-its",view:"explorer",verified:"23 November 2026",
 registers:[["M5","Inspect M5 (overall random-effects g = +0.41, 95% CI [+0.34, +0.48])"],["M6","Inspect M6 (versus individual human tutoring: g = -0.11, 95% CI [-0.31, +0.10])"]],
 label:"Ma, Adesope, Nesbit & Liu · 2014",
 title:"Intelligent Tutoring Systems and Learning Outcomes: A Meta-Analysis",
 authors:"Wenting Ma, Olusola O. Adesope, John C. Nesbit and Qing Liu",
 venue:"Journal of Educational Psychology, 106(4), 901-918",
 category:"Review/meta-analysis · peer-reviewed",
 design:"Random-effects and fixed-effect meta-analysis of controlled experimental and quasi-experimental evaluations comparing step-based or model-tracing intelligent tutoring systems with non-ITS instruction.",
 url:"https://doi.org/10.1037/a0037123",
 full:"https://www.apa.org/pubs/journals/features/edu-a0037123.pdf",
 funder:"Social Sciences and Humanities Research Council of Canada (SSHRC) and Washington State University.",
 population:"107 independent effect sizes involving 14,321 learners from elementary school through postsecondary education (60 of 107 effect sizes are postsecondary, N = 6,767; elementary K-5 accounts for 19 effect sizes, N = 1,496, g = 0.31, 95% CI [0.16, 0.47]; middle school k = 10, N = 810, g = 0.41 [0.15, 0.66]; high school k = 14, N = 4,355, g = 0.40 [0.21, 0.59]).",
 context:"Domain-specific, pre-generative-AI intelligent tutoring systems across STEM, mathematics and accounting (k = 35, g = 0.35 [0.24, 0.45]), and humanities and language/literacy (k = 14, N = 1,075, g = 0.34 [0.12, 0.56]), evaluated against five distinct comparison conditions.",
 finding:"Across all 107 evaluations, the overall random-effects mean was Hedges’ g = 0.41 (95% CI [0.34, 0.48]; fixed-effect g = 0.36 [0.32, 0.39], I-squared = 73%). Gains depended heavily on the comparison group in Table 1: intelligent tutoring outperformed large-group human instruction (random-effects g = 0.44 [0.35, 0.53], k = 66, N = 11,296), non-ITS computer-based instruction (g = 0.57 [0.34, 0.79], k = 15, N = 1,034), and textbooks or workbooks (g = 0.36 [0.18, 0.53], k = 17, N = 1,403), whereas differences were not statistically significant against small-group human instruction (g = 0.05 [-0.50, 0.61], k = 4, N = 184) or individual human tutoring (g = -0.11 [-0.31, 0.10], k = 5, N = 404).",
 limits:"More than half of included comparisons (60 of 107) come from postsecondary courses, and every included system predates modern large language models. Researcher-developed tests yielded larger average estimates (g = 0.43 [0.36, 0.51], k = 94) than standardized tests (g = 0.27 [0.09, 0.45], k = 13). Note an internal reporting discrepancy in the original article: the abstract on p. 901 prints .42 for large-group instruction and .35 for textbooks/workbooks (matching fixed-effect values), whereas the Results narrative on p. 906 and Table 1 on p. 907 report random-effects g = 0.44 and g = 0.36. Overlaps Kulik and Fletcher (2016) and Steenbergen-Hu and Cooper (2013); never sum samples across reviews.",
 locator:"p. 901 Abstract (107 effects, N = 14,321; note .42 and .35 discrepancy); pp. 906-907 and Table 1 (overall random-effects g = 0.41 [0.34, 0.48], I-squared = 73%, and all five comparator subgroups including human tutoring g = -0.11 [-0.31, 0.10]); Table 2 p. 908 (standardized vs researcher tests); Table 3 p. 909 (grade levels and subject domains).",
 values:"107 effects; N = 14,321; overall g = 0.41 [0.34, 0.48]; comparators 0.44, 0.57, 0.36, 0.05, -0.11: Table 1 p. 907 | K-5 k = 19, N = 1,496, g = 0.31 [0.16, 0.47]: Table 3 p. 909",
 placements:"M5 and M6 in numerical register; Evidence explorer instructional context; Policy summary; Q1, Q10, Q11, Q12, Q13."
},
{
 id:"study-bastani-guardrails",view:"emerging",verified:"23 November 2026",
 label:"Bastani, Bastani, Sungu, Ge, Kabakcı & Mariman · 2025",
 title:"Generative AI without guardrails can harm learning: Evidence from high school mathematics",
 authors:"Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı and Rei Mariman",
 venue:"Proceedings of the National Academy of Sciences (PNAS), 122(26), e2422633122",
 category:"Peer-reviewed journal article · high-school classroom RCT",
 design:"Preregistered three-arm classroom-cluster randomized controlled trial across four 90-minute mathematics sessions pairing assisted practice with a subsequent closed-book, closed-laptop paper exam.",
 url:"https://doi.org/10.1073/pnas.2422633122",
 full:"https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/",
 funder:"Wharton AI and Analytics Initiative, Fishman-Davidson Center and Wharton Global Initiatives at the University of Pennsylvania; the authors declare no competing interest.",
 population:"Nearly 1,000 high-school mathematics students across roughly 50 regular classes in grades 9-11 at a private high school in Turkey during fall 2023 (2,848 student-session observations).",
 context:"Following a standard teacher review, students worked on math practice problems using textbooks and notes alone (control), an unguarded ChatGPT-like GPT-4 chat interface (GPT Base), or a teacher-primed GPT-4 tutor supplied with worked solutions and common error hints that refused to give away answers (GPT Tutor), followed immediately by a closed-book paper exam on parallel problems.",
 finding:"During assisted practice, both AI arms sharply raised normalized 0-to-1 scores relative to textbook-and-notes control (mean 0.284): GPT Base gained +0.137 (SE = 0.031, +48%) and GPT Tutor gained +0.361 (SE = 0.032, +127%). Once AI was removed on the closed-book exam, however, GPT Base students scored statistically significantly worse than control by -0.054 (SE = 0.022, p < 0.05, a 17% reduction below the 0.321 control mean), whereas GPT Tutor eliminated the harm without outperforming standard instruction (-0.004, SE = 0.013, null). GPT Base solved practice items accurately only 51% of the time (42% logical errors, 8% arithmetic errors), 67% of first interactions across Session 1 problems in GPT Base asked superficially for answers versus 37% in GPT Tutor, and student surveys failed to detect the unaided learning loss.",
 limits:"High-school mathematics study across four sessions in a single Turkish school during fall 2023, not an elementary, reading or full-year curriculum evaluation. Regression estimates are reported in normalized 0-to-1 exam units with classroom-clustered standard errors rather than reported Cohen’s d or Hedges’ g confidence intervals, so this study remains a narrative card rather than a numerical register row. An August 20, 2025 PNAS correction (e2518204122) updated one coauthor affiliation without altering any data or results.",
 locator:"Abstract and Main Results pp. 1-4; Table 1 (2,848 observations; practice +0.137 SE 0.031 and +0.361 SE 0.032 vs 0.284 control; exam -0.054 SE 0.022 and -0.004 SE 0.013 vs 0.321 control); Potential Mechanism (51% GPT Base accuracy, 42% logical and 8% arithmetic errors; 67% vs 37% superficial first queries); Student Perception; Acknowledgments and Competing Interests.",
 companions:[["https://doi.org/10.1073/pnas.2518204122","PNAS affiliation correction (Aug. 20, 2025; results unchanged)"]],
 values:"2,848 student-session observations; practice +0.137 (SE 0.031, +48%) and +0.361 (SE 0.032, +127%) vs 0.284 control; unaided exam -0.054 (SE 0.022, -17%) and -0.004 (SE 0.013) vs 0.321 control: Table 1 | 51% GPT Base accuracy (42% logical, 8% arithmetic) and 67% vs 37% superficial queries: Mechanism section",
 placements:"NY Research & FOCUS Act AI field-trials section; Policy cautions; Instructional Added Value reference; Q1, Q8, Q10, Q12, Q13."
},
{
 id:"study-kestin-harvard",view:"emerging",verified:"23 November 2026",
 label:"Kestin, Miller, Klales, Milbourne & Ponti · 2025 · Higher education",
 title:"AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting",
 authors:"Greg Kestin, Kelly Miller, Anna Klales, Timothy Milbourne and Gregorio Ponti",
 venue:"Scientific Reports, 15, 17458 (published June 3, 2025)",
 category:"Peer-reviewed journal article · higher education (Harvard undergraduates)",
 design:"Two-lesson peer-group-randomized crossover trial comparing an asynchronous, instructor-engineered GPT-4 physics tutor at home against live in-class active learning with peer instruction.",
 url:"https://doi.org/10.1038/s41598-025-97652-6",
 full:"https://www.nature.com/articles/s41598-025-97652-6",
 funder:"Harvard University internal instructional and studio support (Department of Physics, School of Engineering and Applied Sciences, Derek Bok Center Learning Lab); external grant sponsor NR, and the authors declare no competing interests.",
 population:"HIGHER EDUCATION SAMPLE (not K-12): 194 eligible Harvard University undergraduates (out of 233 enrolled in Physical Sciences 2 during fall 2023) who consented and completed both crossover lessons and all pre- and post-tests.",
 context:"Two consecutive weekly introductory physics lessons (surface tension and fluid flow) using identical worksheets and recorded vs live activity introductions; the custom GPT-4 platform (PS2 Pal) enforced step-by-step problem sequencing, managed cognitive load, withheld direct answers and embedded instructor-written step-by-step solutions to prevent hallucinations.",
 finding:"On immediate post-tests relative to a combined pre-test median of 2.75 (N = 316), students using the scaffolded AI tutor achieved a median score of 4.5 (N = 142) compared with 3.5 (N = 174) in the active-learning classroom (Mann-Whitney z = -5.6, p < 10^-8), while spending a median of 49 minutes on task (70% under 60 minutes) versus the 60-minute class lesson. Controlling for prior physics proficiency, ChatGPT familiarity, topic, test form and time on task, linear regression estimated 0.63 SD and ceiling-adjusted quantile regressions estimated 0.73 to 1.3 SD (95% CIs NR in main text). Students rated engagement (4.1 vs 3.6, p < 0.0001) and motivation (3.4 vs 3.1, p < 0.001) higher with the AI tutor, with no significant difference in enjoyment or growth mindset.",
 limits:"Higher-education sample of Harvard undergraduates across just two lessons with immediate post-tests that carried participation credit rather than course-grade stakes and no delayed retention test. Requires months of custom platform engineering plus instructor-authored step-by-step solutions for every problem part. Because 95% confidence intervals are NR in the main article and the population is university physics, this study is kept out of the K-12 numerical register and cannot justify K-5 screen or chatbot claims.",
 locator:"Abstract; Results pp. 2-4 (median post-score 4.5, N = 142 vs 3.5, N = 174; baseline 2.75, N = 316; z = -5.6; median 49 minutes, 70% < 60 min; OLS 0.63 SD and quantile 0.73 to 1.3 SD; engagement 4.1 vs 3.6 and motivation 3.4 vs 3.1); Methods pp. 6-8 (233 enrolled, 194 eligible, peer-group crossover, IRB23-0797, Competing interests).",
 values:"N = 194 eligible of 233 enrolled: Methods | Medians 4.5 (N = 142) vs 3.5 (N = 174) from 2.75 (N = 316), z = -5.6: Results | Median 49 min vs 60 min (70% < 60 min): Time on task | OLS 0.63 SD; quantile 0.73-1.3 SD (95% CI NR): Linear regression",
 placements:"NY Research & FOCUS Act AI field-trials section; Policy summary; Q1, Q12."
},
{
 id:"study-oreopoulos-khanmigo",view:"emerging",verified:"23 November 2026",
 label:"Oreopoulos & Low · Aug. 2026 · NBER Working Paper",
 title:"One Click Away: AI Tutoring with Khanmigo in a Two-Year School Experiment",
 authors:"Philip Oreopoulos and Nina Low",
 venue:"National Bureau of Economic Research Working Paper 35620, August 2026",
 category:"Working paper (not peer-reviewed) · middle-school cluster RCT",
 design:"Preregistered (AEARCTR-0013519) two-year grade-within-school cluster randomized controlled trial across five school terms (2024-25 and 2025-26), assigning one or two remedial mathematics grades per school to Khan Academy paired with Khanmigo.",
 url:"https://www.nber.org/papers/w35620",
 full:"https://www.nber.org/system/files/working_papers/w35620/w35620.pdf",
 funder:"Smith Richardson Foundation, Social Sciences and Humanities Research Council of Canada (SSHRC), Natural Sciences and Engineering Research Council of Canada (NSERC) and Abdul Latif Jameel Poverty Action Lab (J-PAL). Khan Academy assisted with rostering and data-sharing logistics; note from a separate March 2026 PNAS disclosure (10.1073/pnas.2604984123) that Oreopoulos previously served uncompensated on Khan Academy’s informal research advisory committee from 2021 to 2024.",
 population:"18 public middle schools (53 grade-within-school clusters: 28 treated, 25 control) in Hamilton County, Tennessee, covering 6,902 student-term observations across five terms and 2,759 student-year observations across two school years (1,214 in Year 1; 1,545 in Year 2) in Response to Intervention mathematics blocks.",
 context:"Daily remedial middle-school math blocks (~$15 per student per year) where assigned grades used Khan Academy mastery exercises with embedded Khanmigo GPT-based coaching prompts configured to guide rather than give answers, substituting for other remedial activities without lengthening RTI attendance (94% in both arms).",
 finding:"Pooled across five terms (Table 5), grade assignment raised end-of-term NWEA MAP math scores by +1.264 national percentile ranks per term (SE = 0.597; +1.216, SE = 0.568 with full controls; abstract rounds to 1.3), +0.758 RIT points (SE = 0.379), or +0.040 population SD per term (SE = 0.019; +0.050 control SD, SE = 0.023). Across school years (Table 7), stacked annual intent-to-treat gains were +0.062 population SD (SE = 0.035, p < 0.10; +0.066 RTI control SD, SE = 0.043), driven by a null Year 1 (+0.020 population SD, SE = 0.035) and a positive Year 2 (+0.084 population SD, SE = 0.041, p < 0.05; +0.116 RTI control SD, SE = 0.053), with an implied non-experimental effect of +0.142 population SD (0.14 in abstract) for active Year 2 participation (rate 0.61). Crucially, student use of the AI chatbot was sparse: 96% tried Khanmigo once, yet the median student messaged it on only one-third of active practice days, opened it in only 17% of exercise sessions containing a mistake (averaging 1.7 chats per week overall), and included a math question or reasoning step in just 14.5% of messages.",
 limits:"Working paper circulated for comment, not yet peer-reviewed, and tables report clustered standard errors rather than printed 95% confidence intervals, so it stays narrative-only. Because the trial bundled Khan Academy mastery practice with Khanmigo in a single treatment arm, it cannot isolate an AI-chatbot benefit from standard Khan Academy practice, and the authors conclude that gains likely operated primarily through structured practice (~30 minutes and 4.3 skills per week) rather than AI dialogue. Middle-school remedial math setting, not elementary or early-reading instruction.",
 locator:"Title page and acknowledgments (NBER 35620, Aug. 2026, funders, AEARCTR-0013519); Abstract and pp. 3-4 (96% tried once, 1/3 of practice days, 17% of mistake sessions, 14.5% math reasoning/questions, ~$15/student/year); Table 3 p. 17 (30.2 min/wk practice, 1.7 chats/wk, 94% RTI attendance); Table 5 p. 22 (6,902 student-terms, 53 clusters, +1.264 NPR, +0.040 pop. SD/term); Table 7 p. 24 (2,759 student-years, Year 1 +0.020, Year 2 +0.084 pop. SD / +0.116 control SD, stacked +0.062, implied participant +0.142).",
 companions:[["https://www.socialscienceregistry.org/trials/13519","AEA RCT Registry AEARCTR-0013519"]],
 values:"18 schools; 53 clusters; 6,902 student-terms; 2,759 student-years; +1.264 NPR/term (SE 0.597); +0.040 pop. SD/term (SE 0.019): Table 5 | Year 1 +0.020 (SE 0.035), Year 2 +0.084 (SE 0.041), stacked +0.062 (SE 0.035), implied participant +0.142: Table 7 | 96%, 1/3 days, 17% mistake sessions, 14.5% math reasoning: Abstract & pp. 3-4",
 placements:"NY Research & FOCUS Act AI field-trials section; Policy cautions; Q1, Q10, Q12, Q13."
},
{
 id:"study-tutor-copilot",view:"emerging",verified:"23 November 2026",
 label:"Wang, Ribeiro, Robinson, Loeb & Demszky · Nov. 2025 · Working Paper",
 title:"Tutor CoPilot: A Human-AI Approach for Scaling Real-Time Expertise",
 authors:"Rose E. Wang, Ana T. Ribeiro, Carly D. Robinson, Susanna Loeb and Dora Demszky",
 venue:"Annenberg Institute EdWorkingPaper 24-1056, November 2025 version (PDF header prints 24-1054 v2)",
 category:"Working paper (not peer-reviewed) · educator-facing AI tutor RCT",
 design:"Preregistered (osf.io/8d6ha) seven-week tutor-level randomized controlled trial testing real-time GPT-4 pedagogical suggestions for human virtual math tutors.",
 url:"https://doi.org/10.26300/81nh-8262",
 full:"https://edworkingpapers.com/sites/default/files/ai24_1054_v2.pdf",
 funder:"Stanford Human-Centered AI Hoffman-Yee Grant and Stanford Accelerator for Learning / National Student Support Accelerator; Competing Interests note on p. 17 discloses that first author Rose E. Wang worked part-time with tutoring provider FEV Tutor to integrate Tutor CoPilot into its platform, while the other four university coauthors declare no competing interests.",
 population:"November 2025 working-paper analytic sample: 783 active virtual math tutors (388 treatment, 395 control, from 900 initially randomized and 872 pre-survey respondents) working with 1,013 participating below-grade-level elementary and middle-school students (of 1,534 eligible in grades 3-6 across 9 Title I public schools in a southern U.S. district) across 4,136 sessions and 350,000+ chat messages.",
 context:"Tutor-facing only (students never interacted directly with AI): during live virtual text-based math remediation on FEV Tutor from March 27 to May 17, 2024, tutors could click a button to view and edit expert-modeled response suggestions encouraging probing questions instead of generic praise or giving away answers, at an estimated API cost of about $20 per tutor per year.",
 finding:"Students assigned to human tutors with Tutor CoPilot access were 4 percentage points more likely to pass their end-of-session math exit ticket unconditionally (+0.040, SE = 0.015, Romano-Wolf adjusted p = 0.010, rising from roughly 61.7% to 65.7% across 4,136 sessions; conditional exit-ticket pass +3.1 percentage points, SE = 0.014, Romano-Wolf p = 0.040). Gains were concentrated among initially less-effective tutors: +9 percentage points for lower-rated tutors (56% to 65%) and +7 percentage points for less-experienced tutors (61% to 68%). Classifier analysis of 241,005 tutor messages showed higher odds of prompting students to explain reasoning (OR = 1.100, Romano-Wolf p = 0.010) and asking guiding questions (OR = 1.060, p = 0.020) and lower odds of generic encouragement (OR = 0.907, p = 0.010), while session participation points and all five student survey ratings were statistically null.",
 limits:"Working paper rather than a peer-reviewed journal publication, with outcomes reported in session exit-ticket percentage points and standard errors rather than standardized achievement confidence intervals. The study was not powered or designed to estimate direct end-of-year NWEA MAP math gains (the 0.024 SD annual figure on p. 2 is a non-experimental back-of-the-envelope projection). Disclose two version/numbering discrepancies across public records: the official Annenberg DOI record is 24-1056 whereas the posted November 2025 PDF header prints 24-1054_v2, and an earlier October 2024 arXiv preprint (2410.03017) cited the initially randomized pool (900 tutors and ~1,800 students) rather than the active analytic sample (783 tutors and 1,013 students). Also note first author part-time integration work with FEV Tutor.",
 locator:"Abstract and pp. 2-5 (783 active tutors, 1,013 students, 4,136 sessions, +4 pp overall p < 0.01, +9 pp lower-rated tutors, +7 pp less-experienced tutors, $20/tutor/year, 0.024 SD non-experimental MAP projection); Table 1 pp. 4 & 16 (exit-ticket ITT +0.040 SE 0.015 RW p = 0.010; conditional +0.031 SE 0.014; null participation and student surveys); Figure 2 p. 5 (56% to 65% and 61% to 68%); Methods p. 12 (900 randomized -> 872 surveyed -> 783 active: 388 treatment, 395 control); Competing Interests p. 17; Table 3 p. 17 (241,005 messages).",
 companions:[
  ["https://nssa.stanford.edu/studies/tutor-copilot-human-ai-approach-scaling-real-time-expertise","Stanford NSSA study summary"],
  ["https://osf.io/8d6ha","OSF preregistration (osf.io/8d6ha)"]
 ],
 values:"783 active tutors (388 T, 395 C of 900 randomized); 1,013 students; 4,136 sessions; +4 pp (+0.040, SE 0.015, RW p = 0.010); +9 pp lower-rated (56%->65%); +7 pp less-experienced (61%->68%); $20/tutor/year: Abstract, Table 1, Fig. 2, Methods p. 12",
 placements:"NY Research & FOCUS Act AI field-trials section; Policy summary; Q1, Q8, Q10, Q11, Q12, Q13."
}
];

addedStudies.push(...aiTutoringPacketStudies);
questionEvidence.M3=["record-M3","M3 · Outhwaite et al. · Early-years math apps (supplemental vs control)"];
questionEvidence.M4=["record-M4","M4 · Outhwaite et al. · Early-years math apps (time-equivalent replacement)"];
questionEvidence.M5=["record-M5","M5 · Ma et al. · Intelligent tutoring systems overall"];
questionEvidence.M6=["record-M6","M6 · Ma et al. · Intelligent tutoring vs individual human tutoring"];
for(const c of aiTutoringPacketStudies){
 questionEvidence[c.id]=[c.id,c.label+" · "+c.category];
 questionCardTargets[c.id]={view:c.view,selector:"#"+c.id,index:0};
}

{
 const q1=essentialQuestions.find(q=>q.id==="q1-learning");
 q1.shows+=" In early-years mathematics, Outhwaite’s randomized trial found clear gains when interactive apps supplemented daily teaching and a smaller, two-tailed-uncertain estimate when apps replaced a daily small-group math activity, while Ma’s broader intelligent-tutoring meta-analysis found positive average gains over large-group teaching, non-intelligent computer instruction and workbooks alongside no clear advantage over small-group or individual human tutoring. Across newer generative-AI field trials, results turn sharply on guardrails and adult roles: an unguarded high-school math chatbot boosted assisted practice yet reduced subsequent closed-book exam scores whereas a teacher-primed version avoided that harm without beating regular teaching, an instructor-scaffolded university physics tutor outperformed active class lectures on immediate post-tests, a multi-year middle-school math platform with an embedded AI coach working paper produced modest later-year gains despite sparse student chatbot dialogue, and real-time AI coaching for human elementary and middle-school tutors raised session mastery.";
 q1.doesnt+=" University physics lessons, secondary math guardrails, middle-school remedial platforms and adult tutor co-pilots still do not prove standalone generative-AI reading gains for young children or show that software outperforms skilled human tutoring.";
 q1.refs.push("M3","M4","M5","M6","study-outhwaite","study-ma-its","study-bastani-guardrails","study-kestin-harvard","study-oreopoulos-khanmigo","study-tutor-copilot");

 const q3=essentialQuestions.find(q=>q.id==="q3-school-screen-time");
 q3.shows+=" In early-years mathematics, Outhwaite’s randomized trial illustrates why added time and substitution must be separated: daily interactive math apps produced a clear gain when added atop regular instruction, whereas substituting the same daily app routine for a teacher-led small-group math activity produced a smaller estimate whose two-tailed interval crossed zero, with no statistically clear difference between the two app arms.";
 q3.refs.push("M3","M4","study-outhwaite");

 const q8=essentialQuestions.find(q=>q.id==="q8-digital-divide");
 q8.shows+=" In early-years mathematics, Outhwaite’s interactive-app gains were similar across socioeconomic backgrounds while helping children with weaker memory skills more in the supplemental arm, and a working-paper trial in underserved elementary and middle schools found that real-time AI suggestions for human virtual math tutors improved session topic mastery most for students paired with lower-rated or less-experienced tutors. Conversely, unguarded high-school chatbot access harmed unaided exam performance while masking gaps only while the tool stayed open.";
 q8.refs.push("study-outhwaite","study-tutor-copilot","study-bastani-guardrails");

 const q10=essentialQuestions.find(q=>q.id==="q10-ai-reading");
 q10.shows+=" Ma’s earlier intelligent-tutoring meta-analysis included literacy and language studies with positive average effects against large-group or workbook instruction alongside null differences against human tutoring, but those pre-generative systems were mostly studied in older learners. Newer generative-AI trials reinforce keeping educators central: real-time AI coaching for human elementary and middle-school math tutors raised session mastery in a working-paper trial, whereas middle-school students given an embedded AI math coach rarely engaged it in substantive dialogue and high-school students given an unguarded math chatbot scored lower on subsequent closed-book tests.";
 q10.doesnt+=" None of these newer generative-AI trials evaluates early-grade reading differentiation, and the school-age AI coach and tutor-copilot studies remain working papers focused on mathematics.";
 q10.refs.push("M5","M6","study-ma-its","study-tutor-copilot","study-oreopoulos-khanmigo","study-bastani-guardrails");

 const q11=essentialQuestions.find(q=>q.id==="q11-screening-and-learning");
 q11.shows+=" In a working-paper trial of virtual elementary and middle-school math remediation, real-time AI guidance routed through human tutors raised session topic mastery and helped lower-rated tutors use more probing questions, illustrating how educator-facing AI can support targeted follow-through when a human instructor remains in the loop, while earlier intelligent-tutoring syntheses found software did not outperform individual human tutoring.";
 q11.doesnt+=" Tutor-facing math coaching still does not validate early-reading risk detection or directly establish end-of-year standardized reading gains.";
 q11.refs.push("study-tutor-copilot","M6");

 const q12=essentialQuestions.find(q=>q.id==="q12-ai-evidence-gaps");
 q12.short="Early trials of generative AI show that results depend on guardrails, learner age and whether AI coaches an adult educator or talks directly to students, while direct evidence for young children’s reading remains absent. Unguarded chatbots have harmed unaided test performance even when assisted practice looked stronger, so pilots must measure independent off-screen transfer rather than in-app completion. A responsible pilot also needs a clear comparison, educator oversight, subgroup checks, privacy protections and rules for stopping.";
 q12.shows+=" Recent generative-AI trials sharpen both the promise and the hazards: in high-school mathematics, an unguarded chatbot improved assisted practice while lowering closed-book exam performance and misleading students about their own learning, whereas a teacher-primed version prevented the harm without beating standard teaching. In higher education, an instructor-engineered physics tutor outperformed active class lectures on immediate post-tests, while school-age working papers found that middle-school students rarely engaged an embedded math chatbot in substantive reasoning and that adult-facing AI coaching for human math tutors improved session mastery without directly measuring year-end test gains.";
 q12.doesnt+=" University physics lessons, secondary math sessions and non-peer-reviewed middle-school or tutor-facing math working papers still do not establish lasting reading gains, delayed retention or safety for young children.";
 q12.refs.push("study-bastani-guardrails","study-kestin-harvard","study-oreopoulos-khanmigo","study-tutor-copilot","study-ma-its","M5","M6");

 const q13Worth=essentialQuestions.find(q=>q.id==="q13-worth-it");
 q13Worth.shows+=" Controlled trials make off-screen transfer and comparator checks concrete: high-school students using an unguarded math chatbot scored higher during assisted work yet lower on a closed-book exam without perceiving the loss, early-years math apps showed clearer gains as supplemental practice than as a time-equivalent replacement, intelligent tutoring beat large-group teaching and workbooks on average without beating human tutoring, and middle-school students given an embedded AI tutor logged far more structured practice than genuine chatbot dialogue.";
 q13Worth.refs.push("M3","M4","M5","M6","study-outhwaite","study-ma-its","study-bastani-guardrails","study-oreopoulos-khanmigo","study-tutor-copilot");
}
