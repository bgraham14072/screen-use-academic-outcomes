# Screen Use & Academic Outcomes: Evidence and Release Audit

Prepared 17 November 2026 for the policy-facing revision. This report distinguishes verified original-publication values, preserved limitations, new additions and publication checks; it is not an independent systematic review or an attestation that every named contributor personally reviewed every source.

## What changed

- **Policy landing:** Added a default For Policymakers view with five balanced findings drawn only from the original register, a two-column presentation, plain-language limits and four classroom decision questions. Explorer remains second.
- **About:** Added the supplied contributor title, five biographies, exact purpose and disclosure, public professional contact, and suggested APA-style citation. Header and footer links reach About from every view.
- **Wellbeing:** Added seven narrative source cards covering sleep, attention, mental health, physical activity, memory uncertainty and disagreements about evidence certainty. No wellbeing effects enter the academic numerical register.
- **Paper and note-taking:** Added six requested publication summaries, including agreement and replication limits. Only Delgado has a new numerical row; the other five remain narrative because a suitable effect and interval were not both verified, or because the study measures neural connectivity rather than achievement.
- **New York research and policy:** Added official-project summaries and a five-row S10685 crosswalk covering §§31, 32, 33(1)(e)–(g), 35(2)(h) and 37. Research aims, published technical/validation findings and demonstrated classroom achievement remain separate.
- **Print deliverables:** Added a two-page HTML brief and matching PDF, a static QR encoding only the public GitHub Pages address, source footnotes, contact and disclosure.
- **Display safeguards:** Removed three-decimal display rounding; separated d, g and SMD into distinct plot and sort groups; kept intervention and association groups separate; added record deep links and audit notices. Samples are never summed.
- **Existing narrative precision:** Replaced the rounded Putica heterogeneity description with the publication’s exact 88.139%, and clarified Furenes’ “30 articles/reports” and internal age-range inconsistency. These edits do not alter the original numerical register ([Putica & Stanišić](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1869632/full), [Furenes et al.](https://journals.sagepub.com/doi/full/10.3102/0034654321998074)).

Essential Questions were not implemented.

## Preservation boundary

The original `data.js` is unchanged, with SHA-256 `6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12`. A runtime comparison also checks the original 29 objects against their pre-addition snapshot; the new register contains those 29 plus four expressly requested additions.

No missing original interval, sample or age field was silently replaced. This preserves the user’s boundary but leaves known imperfections visible in the original rows, accompanied by separate notices.

## Every new research number

No contrast was inferred by subtracting plotted means. No confidence interval was calculated from a standard error.

| ID | Reported value | Interval / participants | Exact provenance |
|---|---|---|---|
| P4 | −10 adjusted PISA mathematics points; learning use between 5 and 7 hours versus between 3 and 5 hours daily | CI NR; analytic N NR | OECD Volume II, Chapter 5 narrative, “Moderate use of digital devices in school is related to higher performance”; copied at the precision printed in that narrative ([OECD](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-12.html)). |
| P5 | −13.58600513267465 adjusted PISA mathematics points; leisure use more than 3 up to 5 hours versus more than 2 up to 3 hours daily | CI NR; analytic N NR | OECD Annex B1 Chapter 5 workbook, Table II.B1.5.67, OECD-average row 48, cell AC48; exact stored value, not rounded to the workbook’s whole-point display ([OECD workbook](https://stat.link/files/a97db61c-en/pyhr6e.xlsx)). |
| P6 | +8.103342643669569 adjusted PISA mathematics points; leisure use more than 7 hours versus more than 5 up to 7 hours daily | CI NR; analytic N NR | Same table, cell AO48; included because a blanket claim that every higher duration category scores lower would be false ([OECD workbook](https://stat.link/files/a97db61c-en/pyhr6e.xlsx)). |
| R1 | Hedges’ g = −0.21, screen versus paper comprehension; negative favors paper | 95% CI [−0.28, −0.14]; 56 between-participant comparisons; post-outlier analytic N NR | Delgado et al., accepted manuscript §3.2.1, printed p.13, after excluding two potential outliers ([original author manuscript](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf)). |

P4–P6 are observational contrasts adjusted for student and school socioeconomic profiles; they are not effects of assigning screen time, and they do not identify an optimal dose ([OECD chapter](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-12.html)). Extra decimal places in P5/P6 preserve stored data, not greater causal certainty; an ambiguous category-letter ordering in the workbook’s separate 5–7-hour contrast was not used for a new leisure row ([OECD workbook](https://stat.link/files/a97db61c-en/pyhr6e.xlsx)).

The Delgado source description gives 54 studies and 171,055 participants for the full review, not R1’s post-outlier analysis; the initial between-participant sample cannot be substituted for the final analytic N ([Delgado et al.](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf)). The EEG narrative’s 36 university students comes directly from the original abstract and is not an achievement sample or a new numerical effect row ([Van der Weel & Van der Meer](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1219945/full)).

Grant number R305C240046, K–2 scope and the AIRE research aims come from the official award description; no planned enrollment is presented as completed data ([IES](https://ies.ed.gov/use-work/awards/center-early-literacy-and-responsible-ai-celarai-innovating-beginning-reading-instruction-culturally)). Population age ranges in wellbeing cards are review eligibility/scope descriptions, not combined samples or estimated effects; each is linked to its originating review in the source catalog below.

## Original numerical register audit

“Verified” below means the displayed point estimate and, where present, interval match the named originating publication. It does not mean the causal claim is strong, every underlying study is high quality, or every missing field was recovered.

| Record | Point and stored 95% interval | Units / sample check | Original-publication result |
|---|---|---|---|
| D1 | d 0.24 [0.0707, 0.409] | 18 studies; N 11,126; randomized/cluster-randomized | Verified abstract and main results; preserve the abstract’s precision rather than rounded body-text variants ([Dorris](https://onlinelibrary.wiley.com/doi/10.1002/cl2.1417)). |
| D2 | d 0.14 [−0.01, 0.28] | Five high-risk studies removed; sensitivity N NR | Effect/CI verified; stored count 13 is derived from 18 minus five rather than an explicitly printed sensitivity count ([Dorris, sensitivity analysis](https://onlinelibrary.wiley.com/doi/10.1002/cl2.1417)). |
| L1 | g 0.24 [0.15, 0.32] | 53 studies; total N NR; randomized and quasi-experimental | Verified; mean study N 204 is not multiplied into a fabricated total ([Dahl-Leonard](https://link.springer.com/article/10.1007/s11423-024-10354-0)). |
| L2 | g 0.29; stored CI NR | 68 outcome measures, not studies; N NR | Point verified; Table 7 additionally reports [0.20, 0.38], shown only in an audit notice ([publisher PDF](https://link.springer.com/content/pdf/10.1007/s11423-024-10354-0.pdf)). |
| L3 | g 0.12; stored CI NR | 40 outcome measures; N NR | Point verified; Table 7 additionally reports [0.02, 0.23], shown only in an audit notice; domain differences are not statistically significant ([publisher PDF](https://link.springer.com/content/pdf/10.1007/s11423-024-10354-0.pdf)). |
| N1 | d 0.40 [0.25, 0.54] | 13 elementary studies; subgroup N NR | Table 3 verified; predominantly matched-control review, not randomized-only ([Ni](https://pmc.ncbi.nlm.nih.gov/articles/PMC9677114/)). |
| N2 | d 0.60 [0.39, 0.80] | 8 comprehensive-integration studies; N NR | Table 3 verified; K–12, not primary-only ([Ni](https://pmc.ncbi.nlm.nih.gov/articles/PMC9677114/)). |
| N3 | d 0.05 [−0.02, 0.11] | 5 supplementary studies; N NR | Table 3 verified ([Ni](https://pmc.ncbi.nlm.nih.gov/articles/PMC9677114/)). |
| N4 | d 0.12 [−0.10, 0.34] | 2 randomized studies; N NR | Table 3 verified; the full review’s 7,989 learners are not this subgroup’s N ([Ni](https://pmc.ncbi.nlm.nih.gov/articles/PMC9677114/)). |
| S1 | r 0.27 [0.21, 0.33] | 85 pooled effects; N 36,793 | Sanders reanalysis verified; underlying Li review has 46 studies, not 85 ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S2 | r 0.32 [0.21, 0.43] | 25 pooled units; N 2,008 | Sanders reanalysis verified; units must not be relabeled distinct primary studies ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S3 | r 0.21 [0.15, 0.28] | 79 effects; Sanders N 5,810 | Verified as Sanders’ reanalysis, not the original Xie sample; preschool scope and sample discrepancy noted separately ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S4 | r 0.33 [0.25, 0.42] | 15 pooled units; Sanders N 1,474 | Reanalysis value verified; university populations and non-achievement outcomes require a scope warning ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S5 | r −0.14 [−0.20, −0.09] | 38 studies; N 18,318 | Sanders’ observational language reanalysis verified, not the underlying review’s original summary ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S6 | r 0.15 [0.02, 0.28] | 12 studies; N 6,083 | Sanders’ observational co-viewing reanalysis verified ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| S7 | r 0.13 [0.03, 0.23] | 13 studies; N 1,955 | Sanders’ observational educational-content reanalysis verified ([Sanders manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)). |
| J1 | d −0.36 [−0.66, −0.07] | 2 studies; children aged 4–11.9; subgroup N NR | Cross-sectional TV/mathematics association verified ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| J2 | d −0.20 [−0.26, −0.15] | 3 studies; subgroup N NR | Cross-sectional TV/language association verified ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| J3 | d −0.25 [−0.33, −0.16] | Original-source k and outcome N not extracted | All-age TV/mathematics association verified; no secondary count substituted ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| J4 | d −0.21 [−0.26, −0.15] | 5 studies; ages 12–18; subgroup N NR | Cross-sectional association verified; overlaps J3 ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| J5 | d −0.29 [−0.65, 0.08] | k and outcome N not extracted | Overall academic association statistically uncertain; point/CI verified ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| J6 | d −0.15 [−0.22, −0.08] | k and outcome N not extracted | Cross-sectional gaming/academic association verified ([Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/)). |
| P1 | +14 PISA points; CI NR | Analytic N NR; 15-year-olds | Adjusted up-to-one-hour school learning versus none, verified ([OECD Chapter 5](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-12.html)). |
| P2 | +10 PISA points; CI NR | Analytic N NR | Adjusted up-to-one-hour school leisure versus none, verified ([OECD Chapter 5](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-12.html)). |
| P3 | −15 PISA points; CI NR | Analytic N NR | Adjusted classmate distraction at least sometimes versus never/almost never, verified; correct locator is Chapter 3, Table II.B1.3.13 ([OECD Chapter 3](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-10.html)). |
| C1 | b 8.93; CI NR | Full 2018 analytic sample 212,652; 8,261 schools; 49 countries | Adjusted observational coefficient verified, Table 3; sample is not independently added to C2 ([Courtney](https://link.springer.com/article/10.1186/s40536-022-00128-6)). |
| C2 | b 10.20; CI NR | Same full analytic sample as C1 | Verified Table 4; parenthetical test statistics are not standard errors for constructing an interval ([Courtney](https://link.springer.com/article/10.1186/s40536-022-00128-6)). |
| T1 | Reported ES 0.38; CI NR | 11 science studies; science N NR | Not original-publication verified; only the commissioned review supports the science value/count, and the scale remains unconfirmed ([Scottish Government](https://www.gov.scot/publications/literature-review-impact-digital-technology-learning-teaching/pages/4/)). |
| G1 | SMD 0.834; CI NR | 18 studies; N 1,595 | Overall point, units and sample verified; source reports SE 0.123 but no interval was derived ([Behnamnia original PDF](https://revistas.uma.es/index.php/innoeduca/article/download/19694/20777/108443)). |

## Discrepancies and unresolved limits

- **T1:** The science value cannot meet the newly imposed original-publication verification standard; the restricted publisher abstract reports an overall review result but does not expose the science subgroup. The old row remains only because deletion or alteration was not authorized ([Liao publisher page](https://www.tandfonline.com/doi/abs/10.1300/J025v24n03_04)).
- **S3:** Xie’s original review concerns preschool children aged 0–5 and reports N 4,206, versus 5,810 in Sanders’ reanalysis; neither sample was substituted or added to the other ([Xie](https://pmc.ncbi.nlm.nih.gov/articles/PMC6305619/), [Sanders](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)).
- **S4:** The underlying review includes university students and motivation/attitude outcomes, so the old youth label should not be read as child-specific achievement evidence; its reported N 1,560 also differs from Sanders’ N 1,474 ([Tekedere Table 1](https://files.eric.ed.gov/fulltext/EJ1118774.pdf), [Sanders](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download)).
- **L2/L3 and P3:** Missing original CIs and the shared PISA source’s wrong chapter locator were recovered and flagged, not silently changed in the original records ([Dahl-Leonard Table 7](https://link.springer.com/content/pdf/10.1007/s11423-024-10354-0.pdf), [OECD Chapter 3](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-10.html)).
- **G1:** Conflicting science/math subgroup counts and publication-bias reporting remain in the publication; the overall estimate must not become a “best intervention” recommendation ([Behnamnia](https://revistas.uma.es/index.php/innoeduca/article/download/19694/20777/108443)).
- **Publication wording:** The blanket “no outcome data” sentence was not used because published technical, survey and screening-validation outputs exist; none establishes the efficacy of every proposed classroom implementation ([CELaRAI publications](https://earlyliteracyai.org/publications-research/), [AutoRSR original publication](https://doi.org/10.1044/2026_LSHSS-25-00268)).
- **Author attestation:** The supplied claim that all authors checked sources against originals was not asserted as verified. The site instead discloses AI assistance, the documented audit and unconfirmed final review by all contributors.
- **Biographies and relationships:** Contributor biographies, book attribution and the no-vendor-funding statement are contributor-supplied assertions, not independently audited employment or financial disclosures. Public professional contact was verified separately ([Grand Island superintendent’s office](https://www.grandislandschools.org/our-district/superintendents-office)).

## Source access and classifications

All included research and policy URLs were opened using a fetch, original-file retrieval or source-review workflow. A successful abstract page is not counted as full-text access; the tool’s automated paywall flag was not trusted where the visible page said access was restricted.

### Full original text, original manuscript or official report retrieved

- **Peer-reviewed numerical sources:** [Dorris](https://onlinelibrary.wiley.com/doi/10.1002/cl2.1417), [Dahl-Leonard](https://link.springer.com/article/10.1007/s11423-024-10354-0), [Ni](https://pmc.ncbi.nlm.nih.gov/articles/PMC9677114/), [Adelantado-Renau](https://pmc.ncbi.nlm.nih.gov/articles/PMC6764013/), [Courtney](https://link.springer.com/article/10.1186/s40536-022-00128-6), [Behnamnia](https://revistas.uma.es/index.php/innoeduca/article/download/19694/20777/108443), [Delgado author manuscript](https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf), and [Sanders author manuscript](https://jyx.jyu.fi/bitstreams/2742f046-d6a7-45a6-b556-da740ddd8ae4/download).
- **Peer-reviewed existing narratives and scope checks:** [Furenes](https://journals.sagepub.com/doi/full/10.3102/0034654321998074), [Takacs](https://journals.sagepub.com/doi/pdf/10.3102/0034654314566989), [Munzer](https://www.ncbi.nlm.nih.gov/pmc/articles/6564071), [Wörner](https://journals.sagepub.com/doi/pdf/10.3102/00346543221079417), [Putica](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2026.1869632/full), [Xie](https://pmc.ncbi.nlm.nih.gov/articles/PMC6305619/), and [Tekedere](https://files.eric.ed.gov/fulltext/EJ1118774.pdf).
- **Peer-reviewed new narratives:** [Dibben, prospective adolescent sleep review](https://pmc.ncbi.nlm.nih.gov/articles/PMC10909457/), [Thorell, longitudinal attention review](https://link.springer.com/article/10.1007/s00787-022-02130-3), [Stiglic & Viner, review of reviews](https://bmjopen.bmj.com/content/9/1/e023191), and [Van der Weel & Van der Meer, EEG study](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1219945/full).
- **Government/intergovernmental reports:** [OECD PISA Chapter 5](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-12.html), [OECD PISA Chapter 3](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report/component-10.html), [OECD 2025 working paper](https://www.oecd.org/en/publications/the-impact-of-digital-technologies-on-students-learning_9997e7b3-en.html), [Surgeon General advisory](https://www.hhs.gov/sites/default/files/sg-youth-mental-health-social-media-advisory.pdf), [WHO guideline executive summary](https://www.ncbi.nlm.nih.gov/sites/books/n/who336656/ch1/), [NIPH official English summary](https://www.fhi.no/en/publ/2024/Screen-use-and-children-and-adolescents-emotional-cognitive-and-motor-development/), and [IES award description](https://ies.ed.gov/use-work/awards/center-early-literacy-and-responsible-ai-celarai-innovating-beginning-reading-instruction-culturally). The NIPH access claim applies to the English summary, not an English full report.
- **Official legislative source:** [New York Senate S10685](https://www.nysenate.gov/legislation/bills/2025/S10685), categorized with government sources but explicitly identified as proposed legislative text, not a research study.
- **Commissioned reviews / secondary summaries:** [Scottish Government review](https://www.gov.scot/publications/literature-review-impact-digital-technology-learning-teaching/pages/4/) and [EEF blog summarizing its commissioned review](https://educationendowmentfoundation.org.uk/news/effectiveness-of-edtech-reflections-from-new-review).
- **Secondary summaries, official project descriptions:** [CELaRAI](https://earlyliteracyai.org/), [its publications catalog](https://earlyliteracyai.org/publications-research/), and [UB AI4ExceptionalEd](https://www.buffalo.edu/ai4exceptionaled.html); these verify stated aims and affiliations, not efficacy.

### Partial, restricted or machine-access limitations

| Source | Access finding | Consequence |
|---|---|---|
| [Sanders publisher](https://www.nature.com/articles/s41562-023-01712-8) | Abstract/preview with subscription full-text access | Open accepted manuscript used to verify numerical rows. |
| [Liao](https://www.tandfonline.com/doi/abs/10.1300/J025v24n03_04) | Abstract only; full-PDF attempt returned 403 | Science subgroup remains secondary-only. |
| [Segal-Drori](https://doi.org/10.1007/s11145-009-9182-x) | Abstract accessible; full article purchase/access restriction | Existing narrative is explicitly abstract-level; no unverified interval added. |
| [Clinton](https://onlinelibrary.wiley.com/doi/full/10.1111/1467-9817.12269) | Accessible abstract/reference material did not expose the required CI | Qualitative narrative only, no new numeric estimate. |
| [Mueller & Oppenheimer](https://journals.sagepub.com/doi/abs/10.1177/0956797614524581) | Restricted full text; abstract accessible | Narrative original finding paired with replication limits. |
| [Morehead](https://link.springer.com/article/10.1007/s10648-019-09468-2) | Accessible abstract/notes/reference material, not complete methods/results | No compatible effect-plus-CI row added. |
| [Flanigan](https://link.springer.com/article/10.1007/s10648-024-09914-w) | Accessible abstract/reference material; CI not verified in original | Narrative only; secondary-blog CI was deliberately not used. |
| [Delgado publisher](https://www.sciencedirect.com/science/article/pii/S1747938X18300101?via=ihub) | Fetch returned metadata/references rather than full article | Author-hosted accepted manuscript supplies the verified result. |
| [AutoRSR](https://doi.org/10.1044/2026_LSHSS-25-00268) | Abstract accessible; full methods access-restricted | Described as screening validation, not achievement or full-methods verification. |
| [OECD Annex workbook](https://stat.link/files/a97db61c-en/pyhr6e.xlsx) | Text crawler could not parse the spreadsheet; direct original download succeeded and workbook cells were read | Working original file, not a broken source; exact cells recorded above. |
| [OECD full report](https://www.oecd.org/en/publications/pisa-2022-results-volume-ii_a97db61c-en/full-report.html) | Fetch retrieved the report, but a separate direct HTTP request received a 403 browser challenge | Automated or district-network access may vary; chapter links and original workbook provide alternative locators. |

No included source was confirmed to be a dead 404 during the audit. A restriction, publisher preview, or crawler failure is not proof that the public URL is broken; conversely, public access in this environment does not establish access through every district firewall.

## Balance review

- **Skeptical NYSUT analyst:** Risks would be understated if the landing highlighted only learning benefits or treated screen time as the only problem. The revision gives TV, recreational gaming, classmate distraction and broad exposure equal visual weight; adds print/handwriting merits, wellbeing harms and uncertainty; and labels the bottom line a policy judgment rather than a tested statewide-policy effect.
- **Enthusiastic technology legislator:** Benefits would be overstated if awards, pilot plans, EEG connectivity or pooled categories were presented as product efficacy. The revision separates research aims from outcomes, flags null/uncertain replications, explains that product evidence is distinct, and retains adult oversight and opportunity-cost questions.
- **Potential anti-technology overstatement:** A universally declining PISA story would also be one-sided. P6 preserves an exact positive adjacent-category contrast at very high reported leisure use while explicitly warning against interpreting it as a beneficial dose ([OECD workbook](https://stat.link/files/a97db61c-en/pyhr6e.xlsx)).
- **Remaining caution:** The policy synthesis does not settle the correct legal thresholds, privacy rules or implementation exceptions. Universal screening before disability identification remains a question for explicit guidance, not a claimed exemption ([S10685](https://www.nysenate.gov/legislation/bills/2025/S10685)).

## Release checks

Functional, visual, print, accessibility and live-asset checks are recorded in the repository’s QA report. The GitHub Pages deployment succeeded, and fresh browser contexts confirmed the default policy view, new views, the 33-row register and working source-link navigation.

- **Accessibility and layout:** axe-core reported no WCAG 2 A/AA or 2.1 AA violations in the eleven desktop views or mobile policy view. Keyboard skip-to-main and Escape dismissal passed. Desktop, 375px mobile, short-viewport and 720px reflow checks found no page-level overflow or captured JavaScript errors. Automated checks are not a complete accessibility certification.
- **Print:** The final PDF contains two pages, embedded Lato fonts and no qpdf syntax/stream errors. Both rendered pages were inspected. The QR decodes directly to the public GitHub Pages address, with no redirect service.
- **Deployment parity:** All eighteen GitHub assets matched the local release bytes. The sixteen non-HTML preview assets matched too, including the PDF, original data, scripts, styles, ledger and audit. The preview host injects an editor script into HTML and applies email protection to the brief; therefore the served HTML is not byte-identical. Rendered policy, wellbeing, analog, emerging, About, Methods and complete brief text matched, and the preview email link decoded to the same mailto address.
- **Distribution:** Policymakers should receive only https://bgraham14072.github.io/screen-use-academic-outcomes/. Public availability and these tests do not guarantee access through every district network.
