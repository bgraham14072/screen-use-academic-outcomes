// Original-publication verification: 18 November 2026.
// These cards do not add numerical records. Ran's sole estimate is in policy-data.js.
const addedStudies=[
 {
 id:"study-allcott",view:"wellbeing",label:"Allcott et al. · 2026",
 title:"The Effects of School Phone Bans: National Evidence from Lockable Pouches",
 authors:"Hunt Allcott, E. Jason Baron, Thomas Dee, Angela L. Duckworth, Matthew Gentzkow and Brian Jacob",
 venue:"NBER Working Paper 35132; April 2026, revised September 2026",
 category:"Working paper (not peer-reviewed)",
 design:"Staggered difference-in-differences (quasi-experimental); not a randomized controlled trial.",
 url:"https://www.nber.org/papers/w35132",
 full:"https://www.nber.org/system/files/working_papers/w35132/w35132.pdf",
 population:"U.S. public middle and high schools. Purchasing records cover 4,608 schools; the GPS dataset covers 40,542 schools. These are distinct data-source counts, not a common analytic sample or student total. Unique combined student N: NR.",
 context:"Nationwide teacher survey, GPS pings, standardized test scores, school administrative records and student surveys, linked with sales/adoption records from Yondr, the largest pouch provider. This evaluates restrictions on personal phones, not instructional devices.",
 finding:"Pouch adoption substantially reduced phone use. Disciplinary incidents rose in the first year, then the effect faded. Wellbeing showed suggestive first-year declines, then recovered and appeared positive in later years. Average test-score effects were close to zero, with modest positive high-school effects, especially in mathematics, and small negative middle-school effects. There was little evidence of attendance effects and no clear improvement in self-reported classroom attention or perceived online bullying.",
 limits:"Identification depends on conditional parallel trends, not random assignment. GPS includes adults, teacher reports can be retrospective, and later-year wellbeing patterns may reflect cohort differences. Attention and bullying pre-trends warrant caution. The overall school-level difference was not statistically significant, although the mathematics difference was. Numerical confidence-interval endpoints for a compatible register comparison were not verified; none are calculated.",
 locator:"Title/abstract pages; findings and caveats pp. 1–4; purchasing records p. 8; GPS p. 9; school scope pp. 10–14; estimates Tables II–III, pp. 34–35."
 },
 {
 id:"study-bettinger",view:"explorer",label:"Bettinger et al. · 2023",
 title:"Diminishing Marginal Returns to Computer-Assisted Learning",
 authors:"Eric Bettinger, Robert Fairlie, Anastasia Kapuza, Elena Kardanova, Prashant Loyalka and Andrey Zakharov",
 venue:"Journal of Policy Analysis and Management; published successor to NBER Working Paper 26967",
 category:"Peer-reviewed journal article",
 design:"Cluster-randomized controlled experiment with no-CAL, lower-dose and higher-dose homework arms.",
 url:"https://onlinelibrary.wiley.com/doi/full/10.1002/pam.22442",
 full:"http://rfairlie.sites.luskin.ucla.edu/wp-content/uploads/sites/32/2023/08/jpam-2023-marginal-returns-to-cal.pdf",
 population:"6,253 third-grade students sampled from 343 schools, with one class per school, in Altai Krai and Novosibirsk, Russia. These are recruitment counts, not the outcome-specific analysis Ns.",
 context:"Computer-assisted learning replaced traditional pencil-and-paper homework. The lower-dose arm received 10 items per subject weekly; the higher-dose arm received 20. This was not a trial of total daily school screen time.",
 finding:"Both doses improved mathematics relative to no CAL, but doubling the assigned dose did not produce additional mathematics gains. Language findings were less consistent: the lower dose was favorable in some tests, while the higher dose had no statistically clear benefit over control. The higher-versus-lower language contrast was less favorable; it does not establish that the higher dose harmed language achievement relative to control.",
 limits:"One grade and regional setting limit transfer to other learners and classroom activities. Actual platform use could not be fully verified. The final journal article reports standard errors, not numerical confidence-interval endpoints for the mean achievement estimates; no interval is calculated and no numerical register row is added.",
 locator:"Final journal article p. 552 (metadata); pp. 554–556 (sample, setting and homework); Table 4 and notes, p. 561 (dosage, mixed/null achievement results)."
 },
 {
 id:"study-ran",view:"explorer",label:"Ran, Kim & Secada · 2022",
 title:"A meta-analysis on the effects of technology's functions and roles on students' mathematics achievement in K-12 classrooms",
 authors:"Hua Ran, Nam Ju Kim and Walter G. Secada",
 venue:"Journal of Computer Assisted Learning",
 category:"Review/meta-analysis · peer-reviewed",
 design:"Random-effects meta-analysis of randomized and quasi-experimental technology interventions.",
 url:"https://doi.org/10.1111/jcal.12611",
 full:"https://onlinelibrary.wiley.com/doi/epdf/10.1111/jcal.12611",
 population:"77 studies, 151 effect sizes and 54,988 students in K–12 mathematics classrooms. The review concerns general education and excludes studies focused on learning disabilities. An aggregate country count is NR.",
 context:"Technology-supported mathematics compared with instruction without the technology intervention. Multiple outcomes can come from the same study; samples must not be added to those of overlapping reviews.",
 finding:"The overall Hedges’ g is 0.23, with a reported 95% CI [0.19, 0.27]. Heterogeneity is substantial: I² = 68.5 as reported. Collaborative/communicative use, problem-solving, conceptual development and adaptive practice were associated with larger effects than delivering materials or monitoring/assessment alone. The monitoring/assessment estimate was not statistically different from zero.",
 limits:"Moderator comparisons are not randomized head-to-head tests of technology functions. Publication source, study design, intervention duration and testing instrument mattered; longer interventions had smaller estimates, and post-test-only quasi-experiments and curriculum-based tests had uncertain effects. Post-hoc contrasts for publication year, sample size and grade were not significant. Some function groups were sparse, and demographic detail was insufficient. Several moderator-table counts and publication-bias statistics have reporting inconsistencies; those figures are withheld.",
 locator:"p. 258 and §6.2 p. 263 (77 studies, 151 effects); p. 269 (54,988 students); §7.1 p. 266 (g, CI and I²); Tables 3–10 pp. 266–269 (moderators); limitations p. 271.",
 register:"M1"
 },
 {
 id:"study-letourneau",view:"explorer",label:"Létourneau et al. · 2025",
 title:"A systematic review of AI-driven intelligent tutoring systems (ITS) in K-12 education",
 authors:"Angélique Létourneau, Marion Deslandes Martineau, Patrick Charland, John Alexander Karran, Jared Boasen and Pierre Majorique Léger",
 venue:"npj Science of Learning",
 category:"Review/meta-analysis · peer-reviewed",
 design:"Systematic review with narrative synthesis; mostly quasi-experimental studies, not a pooled meta-analysis.",
 url:"https://doi.org/10.1038/s41539-025-00320-7",
 full:"https://www.nature.com/articles/s41539-025-00320-7.pdf",
 population:"28 studies from 26 articles, involving 4,597 students in formal K–12 schooling across multiple countries. Four studies involved elementary pupils; none involved preschool groups. Most evidence concerns middle and high school.",
 context:"Intelligent tutoring systems across school subjects, mainly STEM. This is not evidence specifically about early-literacy AI for young children, AIRE or teacher replacement.",
 finding:"Findings were generally positive against traditional teaching, but weaker and mixed against non-intelligent tutoring systems, including null comparisons. Comparisons among different intelligent systems also varied. The review does not report a pooled effect or confidence interval.",
 limits:"The authors caution about heterogeneous designs, short interventions, limited samples, database/language selection and possible publication/reporting bias. They call for longer studies and larger, more diverse samples. Formal risk-of-bias grading: NR; the review was not registered and no protocol was prepared. Inconsistent country and comparator counts and an incompatible study-level effect/interval pairing are withheld.",
 locator:"p. 1 (28 studies, 4,597 students); pp. 2 and 11 (26 articles/records); p. 3 (four elementary studies, no preschool); pp. 6–9 (mixed results/limits); pp. 10–11 and 13 (methods, registration)."
 },
 {
 id:"study-fernandez",view:"explorer",label:"Fernández-Batanero et al. · 2022",
 title:"Assistive technology for the inclusion of students with disabilities: a systematic review",
 authors:"José María Fernández-Batanero, Marta Montenegro-Rueda, José Fernández-Cerero and Inmaculada García-Martínez",
 venue:"Educational Technology Research and Development",
 category:"Review/meta-analysis · peer-reviewed",
 design:"Descriptive systematic/bibliographic review, predominantly qualitative; not a pooled meta-analysis.",
 url:"https://doi.org/10.1007/s11423-022-10127-7",
 full:"https://link.springer.com/content/pdf/10.1007/s11423-022-10127-7.pdf",
 population:"The authors report 31 included articles published during 2009–2020. Settings include early-childhood, primary, secondary and university education across countries. Aggregate participant N and a common grade range: NR.",
 context:"Assistive technologies for students with disabilities, including digital tools and accessibility supports. This is inclusion/access evidence, not an evaluation of the FOCUS Act or a universal product-efficacy trial.",
 finding:"The review describes benefits for access, inclusion, autonomy and participation, alongside barriers involving teacher preparation, cost, information and access. It supplies no pooled causal achievement effect or confidence interval. A lack of quantified null results is not evidence that every tool works.",
 limits:"The synthesis is descriptive and heterogeneous; formal risk-of-bias grading is NR. The reported final article count is retained as the authors’ statement, but search-flow counts conflict and appendix enumeration is inconsistent. Those unresolved flow totals, percentages and study-by-study counts are not reproduced.",
 locator:"p. 1911 (reported 31 articles and 2009–2020 scope); p. 1917 (educational settings/designs); pp. 1919–1923 (benefits, barriers, limitations); pp. 1914–1916 and appendix (reporting concerns)."
 },
 {
 id:"study-vuorre",view:"wellbeing",label:"Vuorre & Przybylski · 2024",
 title:"Global Well-Being and Mental Health in the Internet Age",
 authors:"Matti Vuorre and Andrew K. Przybylski",
 venue:"Clinical Psychological Science; 2024 journal issue, first online 2023",
 category:"Peer-reviewed journal article",
 design:"Population-level observational/ecological analysis with Bayesian hierarchical models.",
 url:"https://doi.org/10.1177/21677026231207791",
 full:"https://ora.ox.ac.uk/objects/uuid:f89a1517-7585-4404-9da3-43f96ff846b6/files/r76537263k",
 population:"Gallup World Poll: 2,434,203 people aged 15–89 across 168 countries, 2005–2022, aggregated into country/year/age/sex groups. Mental-health analyses use IHME Global Burden of Disease estimates for 2000–2019; an internally inconsistent mental-health country total is withheld. This is not a school-grade sample.",
 context:"ITU internet adoption and mobile-broadband measures linked with Gallup wellbeing and modeled anxiety, depression and self-harm prevalence. Country-level internet adoption is not an individual child’s exposure or classroom device use.",
 finding:"Within-country associations between internet adoption and wellbeing or mental health were mostly small or null, with mixed patterns across outcomes and countries. Between-country patterns were different and cannot be treated as within-person changes. These findings sit alongside, rather than rebut, research on specific harms and vulnerable groups.",
 limits:"The authors explicitly describe associations, not identified causal effects. Aggregation, modeled prevalence and unaddressed confounding prevent inference about effects on individual children, particular content or school instruction. Regression estimates and Bayesian credible intervals are not compatible with the register’s intervention comparisons.",
 locator:"p. 917 (metadata); p. 918 (Gallup sample, ages, countries and years); p. 925 (GBD years); pp. 918 and 925 (unresolved country-count discrepancy); pp. 919–931 (design, findings and limits)."
 },
 {
 id:"study-odgers",view:"wellbeing",label:"Odgers & Jensen · 2020",
 title:"Annual Research Review: Adolescent mental health in the digital age: facts, fears, and future directions",
 authors:"Candice L. Odgers and Michaeline R. Jensen",
 venue:"Journal of Child Psychology and Psychiatry",
 category:"Review/meta-analysis · peer-reviewed",
 design:"Narrative annual research review of reviews, preregistered cohorts and intensive longitudinal studies; no new meta-analysis.",
 url:"https://doi.org/10.1111/jcpp.13190",
 full:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8221420/",
 population:"Adolescent mental-health literature; much underlying research also concerned adults. Unique combined participant N and a common school-grade range: NR.",
 context:"Digital media and adolescent depression, anxiety and wellbeing, largely outside classroom instruction. Reviews and primary studies may overlap; their samples are not added.",
 finding:"The review reports conflicting small positive, negative and null associations rather than a uniform harm or benefit. More rigorous large-scale studies generally found small average associations that could not separate cause from effect. Individual vulnerability, online experiences, cyberbullying and access to support remain important.",
 limits:"Mostly correlational and self-reported evidence cannot establish causality or rule out serious harm for particular young people. Average associations do not establish harmlessness, and this is not a trial of classroom technology. No new pooled effect or compatible confidence interval is reported.",
 locator:"Original author manuscript: Abstract; The current review; review synthesis and Table 1; Implications and future directions."
 }
];
// Bounded editorial update to the authorized third comparison row only.
const updatedPullingBackCard=pullingBackCard
 .replace('<li><strong>Restrictions do reduce phone time.</strong> An English study of 30 schools found students at restrictive schools used phones about 40 minutes less during the school day (−0.67 hours). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11984610/" target="_blank" rel="noopener">Goodyear et al., Lancet Regional Health – Europe 2025</a></li>',
 '<li><strong>National U.S. evidence shows restrictions reduce phone use.</strong> Allcott and colleagues find substantial reductions after lockable-pouch adoption using staggered difference-in-differences, not random assignment. <a href="https://www.nber.org/papers/w35132" target="_blank" rel="noopener">Allcott et al., NBER working paper, 2026; not peer-reviewed</a></li>')
 .replace('<li><strong>Phone-restriction outcomes are mixed.</strong> The same English study found no association between restrictive policies and better mental wellbeing. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11984610/" target="_blank" rel="noopener">Goodyear et al., original cross-sectional study</a></li>',
 '<li><strong>Average academic effects are near zero and vary by school level.</strong> The U.S. pouch study reports modest positive high-school effects, especially in mathematics, and small negative middle-school effects. <a href="#study-allcott">Allcott study, design and limits</a> It evaluates restrictions on personal phones, not instructional devices. <a href="https://www.nber.org/papers/w35132" target="_blank" rel="noopener">Original working paper</a></li><li><strong>Wellbeing and other outcomes remain mixed.</strong> The U.S. study reports initial disciplinary increases that faded, suggestive initial wellbeing declines followed by recovery, little attendance effect, and no clear improvement in classroom attention or perceived online bullying. <a href="#study-allcott">Allcott study</a> The English cross-sectional study found no association between restrictive policies and better mental wellbeing. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11984610/" target="_blank" rel="noopener">Goodyear et al., original study</a></li>')
 .replace('<li><strong>New York’s law is one year old.</strong> Evaluating its effects would inform the FOCUS Act more directly than any other study could.</li>',
 '<li><strong>New York-specific evaluation is still needed.</strong> National pouch-adoption evidence does not directly evaluate New York’s law or the effects of extending restrictions to school-issued instructional devices. <a href="#study-allcott">Study scope and limits</a></li>');
