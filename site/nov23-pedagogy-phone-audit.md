# Source Verification and Governance Audit: Pedagogical Design & Phone-Ban Sources (November 23, 2026)

## Scope and Intake Governance

On November 23, 2026, Hari Subramonyam's Substack essay (*The Problem With Ed Tech Isn't Screen Time*, published November 20, 2026, <https://subramonyam.substack.com/p/the-problem-with-ed-tech-isnt-screen>) was reviewed for candidate evidence. Under the dashboard's standing source-governance rules:

1. **Secondary opinion commentary excluded as outcome evidence:** The Substack essay itself is excluded from both the 40-record numerical register and the narrative study cards because opinion essays do not establish empirical outcomes.
2. **Original publications retrieved and verified:** Outbound links in the essay were extracted and matched against the dashboard's existing sources. OECD's *PISA 2022 Results (Volume II)* and Bastani et al. (2025, *PNAS*) were already represented (`P1` through `P7` and `study-bastani-2025`). Four remaining primary, meta-analytic, research-organization, and intergovernmental publications were verified directly against original documents and added as equal-prominence **verified narrative cards**, leaving the 40-record numerical register (`data.js` + `policy-data.js` + `personalized-data.js` + `ai-tutoring-packet-data.js`) untouched.

---

## Verified Narrative Study Cards Added

### 1. Burland, Carminucci, Cullum, Dewey, Kane, Morton & Staiger (Nov. 17, 2026) · `study-cepr-phones-2026`
- **Source category:** Commissioned review / research-organization report (not peer-reviewed); funded by Overdeck Family Foundation and Walton Family Foundation (p. 1). For-profit vendor Yondr supplied school purchase records rather than funding.
- **Original links:** Overview <https://cepr.harvard.edu/resource/phone-free-schools-report> · Full report PDF <https://cepr.harvard.edu/sites/g/files/omnuum9881/files/2026-11/Phone-Free%20Schools%20and%20Achievement%20Growth_1.pdf> · Project FAQ <https://cepr.harvard.edu/phone-free-schools>.
- **Exact verified numbers and locators:**
  - **Sample:** Approximately `3.3 million` Grade 3-10 students across `4,600` U.S. public and charter schools in 49 states and D.C., `2021-22` through `2025-26` (p. 2 Abstract; Table 2 p. 21 reports `9,941,182` pooled student-year observations: `4,688,902` in math and `5,252,280` in reading; Table 1 p. 18 math sample compares `677` Yondr-adopting schools [`868,706` student-years; `15.25%` elementary, `72.00%` middle, `12.75%` high school] with `3,347` comparison schools [`3,911,876` student-years]).
  - **Phone activity (Advan geolocation pings):** Hourly in-school visits per student fell roughly `11%` in Year 1 and `20%` in Year 2+ (Figure 5, p. 19).
  - **Student achievement growth (Table 2, p. 21):** Current-year Yondr adoption raised fall-to-spring NWEA MAP growth by `+0.0087 SD` pooled (`SE 0.0043`, `p < 0.05`), `+0.0079 SD` in math (`SE 0.0049`, `p >= 0.10`), and `+0.0095 SD` in reading (`SE 0.0052`, `p < 0.10`), summarized in text as roughly `0.01 SD` per year or one to two weeks of additional instruction (about half the `2013-2019` pre-pandemic annual NAEP decline of `0.016 SD` in Grade 8 reading and `0.010 SD` in Grade 8 math, pp. 2-5). By exposure year: Year 1 pooled `+0.0086 SD` (`SE 0.0046`), Year 2+ pooled `+0.0091 SD` (`SE 0.0063`), reading Year 2+ `+0.0141 SD` (`SE 0.0069`, `p < 0.05`).
  - **Reading quantile regression (Table 3, p. 26):** 10th percentile `+0.0172 SD` (`SE 0.0066`, `p < 0.01`) versus 90th percentile `+0.0022 SD` (`SE 0.0049`; 10th-vs-90th difference `p = 0.001`).
  - **Statewide 2025-26 phone bans (pp. 4-5, 27-32):** Across `16` bell-to-bell jurisdictions (including New York) and `7` instructional-time states versus `22` comparison states, models estimated `+0.015 SD` reading growth in bell-to-bell states and `+0.019 SD` math growth in instructional-time states, which the authors caution **not to interpret as causal** because propensity weighting remained imbalanced on `6` of `23` characteristics (`71.44%` 2020-21 in-person schooling in bell-to-bell states versus `21.15%` unweighted and `60.06%` weighted in comparison states, `p = 0.001`), event studies showed diverging pre-trends, and geolocation pings showed no differential drop.
- **Register gate check:** Narrative card only (non-peer-reviewed report; Tables 2 and 3 print school-clustered SEs rather than 95% CIs, so 95% CIs are `NR` in main tables).

### 2. Cristia, Ibarrarán, Cueto, Santiago & Severín (2017) · `study-cristia-peru-olpc`
- **Source category:** Peer-reviewed journal article (*American Economic Journal: Applied Economics*, 9(3), 295-320).
- **Original links:** Official AEA journal page <https://www.aeaweb.org/articles?id=10.1257/app.20150385> · DOI <https://doi.org/10.1257/app.20150385> · Open-access 2012 IDB Working Paper (`IDB-WP-304`) <https://publications.iadb.org/publications/english/document/Technology-and-Child-Development-Evidence-from-the-One-Laptop-per-Child-Program.pdf>.
- **Exact verified numbers and locators:**
  - **Official 2017 AEA abstract (p. 295):** Large-scale randomized evaluation across `318` rural primary schools in Peru after `15` months of One Laptop per Child implementation; computers-per-student ratio rose from `0.12` to `1.18`, producing substantial increases in computer use at school and home, **no evidence of effects on math and language test scores**, and some inconclusive positive evidence on general cognitive skills.
  - **Open-access 2012 IDB Working Paper (`IDB-WP-304`, pp. 1-4, 7-8):** Reports `319` rural public schools (`209` treatment, `110` control), weekly computer use rising from `26%` to `82%` at school and from `4%` to `42%` at home, average Math and Language achievement of `+0.003 SD` (`SE 0.055`, null), and cognitive-test composite (Raven's Progressive Matrices, verbal fluency, Coding) of `+0.11 SD` (`p = 0.068`).
- **Unverified / paywalled detail reported transparently:** Full published 2017 *AEJ: Applied Economics* article tables (pp. 295-320) sit behind the American Economic Association paywall, so exact 2017 journal-table point estimates and 95% CIs are marked `NR` rather than assumed identical to the 2012 working-paper regression table.

### 3. UNESCO Global Education Monitoring Report Team (2023) · `study-unesco-gem-2023`
- **Source category:** Government/intergovernmental report (*Global Education Monitoring Report 2023: Technology in Education: A Tool on Whose Terms?*, UNESCO, Paris, DOI `10.54676/UZQV8501`).
- **Original links:** Report text <https://gem-report-2023.unesco.org/technology-in-education/> · UNESDOC full record <https://unesdoc.unesco.org/ark:/48223/pf0000385723>.
- **Exact verified numbers and locators:**
  - **Chapter 2 (Equity):** During COVID-19 school closures, remote learning failed to reach at least `500 million` (`31%`) students worldwide and `72%` of the poorest learners.
  - **Chapter 4 (Teaching and Learning):** Across `50+` systems in PISA 2018, only about `10%` of `15`-year-olds used digital devices for more than one hour per week in mathematics and science; UK interactive whiteboards largely replaced blackboards without altering pedagogy; Peru distributed over `1 million` OLPC laptops without positive learning impacts when pedagogical integration lagged; more than `1` in `3` teachers across `7` ICILS 2018 countries agreed classroom ICT caused distraction; vendor-funded studies can contest independent null evaluations.
  - **Chapter 7 (Access):** `1` in `4` primary schools globally lacked electricity in `2021`.
- **Register gate check:** Narrative synthesis report with no pooled meta-analytic effect size (`ES: NR`, `95% CI: NR`).

### 4. Cheung & Slavin (2013) · `study-cheung-slavin-2013`
- **Source category:** Review/meta-analysis · peer-reviewed (*Educational Research Review*, 9, 88-113).
- **Original links:** DOI <https://doi.org/10.1016/j.edurev.2013.01.001> · ERIC <https://eric.ed.gov/?id=EJ999451> · Full-text PDF <http://sttechnology.pbworks.com/w/file/fetch/67600623/Cheung_(2013)_The%20effectiveness%20of%20ed%20tech%20applications%20in%20K12%20classrooms.pdf>.
- **Exact verified numbers and locators:**
  - **Sample (Abstract p. 88, Table 2 p. 96, Section 7.2.3 p. 98):** `74` qualifying K-12 mathematics studies (`12+` weeks duration, pretest equivalence) involving `56,886` students (`45` elementary studies, `N = 31,555`; `29` secondary studies, `N = 25,331`).
  - **Overall effect (Table 2, p. 96):** Random-effects `ES = +0.16`, `SE = 0.02`, `95% CI [+0.11, +0.20]`, `Q = 345.80, df = 73, p < 0.001` (abstract prints `+0.15`; fixed-effect table row prints `0.10 [0.09, 0.12]`, footnote 1 notes `+0.11`).
  - **Research-design moderator (Table 9, p. 98):** Across `26` true randomized experiments, `ES = +0.08`, `SE = 0.03`, `95% CI [+0.03, +0.14]`, versus `8` randomized quasi-experiments `+0.24 [+0.04, +0.45]`, `20` matched-control studies `+0.20 [+0.12, +0.29]`, and `20` matched post-hoc studies `+0.15 [+0.07, +0.22]`.
  - **Intervention type (Table 3, p. 96):** Supplemental CAI (`k = 55`) `+0.19 [+0.14, +0.24]` (abstract prints `+0.18`), computer-managed learning (`k = 10`) `+0.09 [0.00, 0.18]`, comprehensive models (`k = 9`) `+0.06 [-0.04, +0.15]` (`QB = 7.25, p < 0.03`).
  - **Decade and grade (Table 4 p. 96, Table 5 p. 98):** `1980s` `+0.23`, `1990s` `+0.15`, `2000s+` `+0.12`; elementary `+0.17` vs secondary `+0.14` (`p < 0.51`). External funding sponsor `NR` in accessed article text.
- **Register gate check:** Kept as a narrative card rather than a numerical-register row because Section 6.4 (p. 95) labels its covariate-adjusted standardized difference simply `ES` without confirming Cohen's `d` versus Hedges' `g` (consistent with `T1` handling), and its pre-2012 K-12 math pool substantially overlaps `Ran, Kim & Secada (2022)` (`M1`) and `Steenbergen-Hu & Cooper (2013)`.
