# Acceptance and QA inventory

## Seven-study update: 18 November 2026

Local acceptance checks passed against baseline `a688b1d04cc95fa828c9b2d1d7f4aa1f480bb9e2`. Hosted verification and the preserved release revision are recorded in the session and Project storage provenance.

- Both `tests/questions.test.mjs` and `tests/study-additions.test.mjs` pass. The protected data.js hash, all original records and earlier supplementary records are unchanged. Ran M1 is the sole added numerical estimate.
- Requested question citations, all seven study cold-load/reload fragments, the disability-exception link, M1 detail and its contextual-card link work through normal browser clicks.
- All eight primary navigation groups and four educator views work. Existing preset counts remain 10 for primary, nine for PISA and seven for umbrella; all evidence now contains 35. The reporting-concern filter changes 35 to 34 and back.
- Both panels' categorical filters, invalid numeric bounds, clear/reset, empty search, all column sort directions, expanded plots, modal close/Escape and actual CSV download pass. Downloaded M1 retains g 0.23, CI 0.19–0.27, review sample 54,988 and source/limitation fields.
- Practice focus choices, reading filters, reference transfer, note retention, reflection/explanation downloads, stale-draft blocking, cancel clearing and confirm clearing pass. Synthetic notes were cleared after testing.
- Desktop, 375px, short-desktop and desktop/mobile/desktop checks found no page-wide overflow. New cards, expanded question, register dialog, footers and limits were visually inspected. Long evidence prose remains scrollable, not clamped.
- Back/Forward, unknown-fragment recovery and an actual original-source popup pass. No JavaScript page errors were captured.
- Source metadata, result locators and withheld discrepancies are documented in `site/study-additions-audit.md`. This is not an independent replication of the publications or a formal quality grade.

## Essential Questions: 18 November 2026

Acceptance inventory:
- Exact 16 questions and five headings, main-list order and fixed answer-field matrix; plain-language short answers, allowed labels, date and draft status on every answer.
- Root opens Start with a question. Eight primary tabs remain; policymakers summary is linked, category menu works, and Most asked exposes only Q6/Q8/Q11.
- Every question opens and closes by pointer/keyboard; direct fragments, reload, repeat activation and Back/Forward work. Draft notice remains visible for direct-answer arrivals.
- Each evidence link reaches the named record, narrative card or explicitly labeled planning tool. Reading targets recover from conflicting filters.
- Methods defines labels once and links back. No new external sources or research numbers. Original data, both Wellbeing narratives and brief remain intact.
- Existing main flows in site.FLOWS.md remain in scope: filters, sorting, downloads, educator forms, note retention, clearing and source navigation.
- Visual checks: root, expanded answer, two-column evidence, Methods, 375px stack, long question, short desktop and responsive roundtrip.
- Off-happy paths: unknown fragment/record, closed current-hash answer, filtered-out reading citation, empty filters and rapid category/question navigation.

Local verification completed:
- `node tests/questions.test.mjs` passes exact wording, order, headings, required fields, allowed labels, short-answer sentence counts, and absence of new external sources or research numbers.
- All 16 direct question fragments survived reload. All 62 per-answer evidence links were clicked and reached visible destinations. All questions passed pointer, Enter and Space open/close cycles.
- Topic menu, Most asked repeat-link reopening, Methods return, policymaker link, Back/Forward, unknown fragments and unknown records passed. A reading-card deep link cleared a conflicting study-design filter.
- Existing navigation, evidence presets, reporting-concern exclusion, search empty/reset, seven-column sorting, details/Escape and CSV download passed. Practice focus selection, reflection handoff/note retention/download/clear-cancel, reading reference handoff, and explanation generation/download/clear-cancel passed.
- Desktop entry view, expanded two-column answer, 1280×520 short desktop, and expanded long answers/references at 375×812 were visually inspected. All existing views had no page-level horizontal overflow at 375px. Evidence columns stack on mobile and return to two columns on desktop.
- Question metadata, label, guidance and topic-link colors were measured against their resolved backgrounds; all tested small-text combinations exceed 4.5:1. No browser page errors were observed.
- The first long browser-test batch timed out. Smaller batches were rerun successfully; the timed-out run is not used as signoff evidence.
- `site/data.js` retains SHA-256 `6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12`. No evidence data, existing narrative prose, source URLs or policy-brief files changed. This is not a new full-text source audit.
- Hosted verification is recorded separately after publication; no co-author approval has been inferred.

## Digital equity card: 18 November 2026

Acceptance inventory:
- Exact requested title in Wellbeing, after the unchanged pulling-back card. Topic links and #digital-divide route select and focus the correct card.
- Three divides; explicit no-direct-policy-test statement; mixed home-computer evidence; proposed §§31–33 interpreted with §37 exceptions.
- Seven requested journal sources and the Quello/RAND reports only, with the official bill used for statutory text. All ten source entries identify source type/design and original verification scope.
- No new numerical estimates. Existing register, source metadata, exact values, brief PDF and pulling-back narrative remain unchanged.
- Expand/collapse original-source details with pointer and keyboard. Activate representative journal, report and bill links; confirm destinations.
- Desktop, mobile and short-height layout, source-details expanded state, mobile-to-desktop roundtrip and existing navigation/explorer/educator controls.
- Off-happy-path checks: reload a deep link; Back/Forward between narrative anchors; unknown-record recovery; repeated same-anchor activation.

Local verification:
- Exact title, required caveat and ten source-design entries verified in rendered DOM. Original publisher abstract/preview directly checked for Hohlfeld, Malamud and Fairlie; full-article verification is not claimed for them. Other cited original texts/reports checked.
- Pointer, Enter and Space expand/collapse the disclosure. Actual journal, RAND and bill link clicks reached their expected hosts; the Senate host displayed a human-check page in the test browser. External access restrictions are not controlled by this dashboard.
- All eight main navigation groups and four educator tools tested. Educator notes persisted across navigation. Narrative links, same-anchor repeat, Back/Forward and deep-link reload passed.
- Explorer presets remained primary 10, PISA 9, umbrella 7 and all 34. Empty-state recovery and unknown-record recovery passed. Runtime comparison of the original 29 records passed.
- `site/data.js` retains SHA-256 `6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12`. No changes to policy-data.js, app.js, practice.js, reading.js, pulling-back.js, brief or PDF.
- Desktop card top, evidence balance, statutory implications and expanded source details visually inspected. Mobile 375px top and source details inspected, plus 1440×520 short desktop and mobile-to-desktop return. No page-wide horizontal overflow or captured JavaScript errors.
- New small labels and links checked using computed colors: muted labels on white 6.38:1, source links on pale panels 6.23:1, topic label on page background 6.02:1. These checks do not establish full accessibility conformance.
- `node --check` passed for the new narrative module and updated router; `git diff --check` passed.

Hosted verification is recorded in the release completion message after publication.

## OECD headline and public-report revision: 17 November 2026

- P7 reproduces OECD's published +49 adjusted mathematics-point contrast for school leisure use up to one hour versus five to seven hours. Its original-source link opens the December 2023 OECD press release; confidence interval and analytic N remain NR.
- The policy view and brief describe the broader time-band pattern and retain the one-to-five-hour learning statement as narrative. Adjusted contrasts are distinguished from unadjusted Figure II.5.14 means; neither is described as a causal dose.
- Collection contains 34 rows; PISA preset shows nine; reporting-concern exclusion returns 33. The original data.js SHA-256 remains `6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12`.
- PISA labels show whole points: P5 −14, P6 +8 and P7 +49. CSV keeps P5 −13.58600513267465 and P6 8.103342643669569. Numeric bounds −13.7 to −13.5 still select P5, demonstrating that filtering uses exact stored values.
- Other scales retain their precision, including D1's 0.0707 lower interval and C1's 8.93 coefficient.
- Methods report download tested through an actual download event. Source Verification Report and legacy evidence-audit.md contain identical clean content; About no longer contains the requesting-contributor sentence.
- axe-core checks report no violations in policy, explorer, methods and About. Automated checks do not establish full accessibility conformance.
- Desktop and mobile policy screenshots inspected. No captured JavaScript errors. Final brief has two letter-sized pages, passes qpdf, and both pages were visually inspected after the final URL update.
- All eleven tabs and both directions of all seven table sorts rechecked. Preset counts: primary 10, PISA nine, umbrella seven, all 34. Runtime original-register snapshot comparison passes.
- GitHub Pages deployment of `8ca4a55` completed successfully in Actions run `44109137690`. Fresh browser checks passed P7 details and actual OECD source navigation, whole-point labels, exact CSV download, clean About, report download and mobile layout.
- Ten checked GitHub assets, including all changed runtime files, the PDF, both report URLs, the ledger and original data.js, match local bytes. Eight non-HTML preview assets also match; preview checks passed P7, register count, whole points, empty-state recovery and clean About.
- The Perplexity preview opens the Markdown report as a readable page despite the download attribute; GitHub Pages delivers the expected download. The public distribution destination remains GitHub Pages.

- Compare independent A/B filters: use, intervention, age, subject, metric, numeric bounds.
- Presets: primary-school default; PISA; umbrella; all evidence. Reset restores default.
- Charts show estimates and intervals without combining scales or designs; missing CIs disclosed.
- Table sorts finding, outcome, effect within scale/design, age, sample, quality and country.
- Show source-level quality, exact/subgroup sample distinction, country context and source links in details.
- Quality exclusions, search, table result counts and CSV follow selected rows.
- Empty state and invalid numeric interval are visible, recoverable and do not change opposite panel.
- Methods tab, sources and drawer accessible; Escape closes drawer; source link opens destination.
- Desktop, 375px, short desktop and desktop-mobile-desktop fit; table scroll stays contained.
- Hosted preview: filters, detail source link and export tested.
- Curated review not exhaustive; no causal ranking, no sum of overlapping samples, no invented ratings.

## Policy revision verification: 17 November 2026

- Original data.js SHA-256 remains `6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12`. Runtime original-object comparison passes.
- Current collection: 33 rows, consisting of the preserved 29 plus P4, P5, P6 and R1. Presets return primary 10, PISA 8, umbrella 7 and all 33; reporting-concern exclusion returns 32.
- All eleven views, header/footer About navigation, valid and unknown record links, filters, sorting, invalid bounds and empty-state recovery tested.
- Added-value explanation build, stale-draft protection, downloads and clear/cancel cycles passed. Early-reading filter/reset and reflection preservation/download/clear passed.
- CSV retains exact precision and adds source category and separate audit notices without rewriting original evidence fields.
- axe-core WCAG 2 A/AA and 2.1 AA scan: no violations reported in any of the eleven desktop views or the mobile policy view. Automated scanning does not establish complete accessibility conformance.
- Keyboard skip link focuses main; detail dismissal by Escape works. Desktop 1440px, 375px mobile, 1440×500 short viewport, and 720px reflow checked. No page-level horizontal overflow or captured JavaScript errors; wide tables and the mobile navigation intentionally scroll within their containers.
- New views inspected visually on desktop/mobile. Original-source link clicked and resulting destination confirmed.
- Final PDF has two pages; qpdf reports no syntax/stream errors; Lato regular/bold are embedded. Both pages visually inspected for clipping and readability. QR decoded to the public GitHub Pages URL.
- Source access restrictions, numerical discrepancies, synthesis limits and the two-sided policy balance review are documented in site/evidence-audit.md.
- GitHub Pages deployment succeeded. Fresh preview and GitHub contexts passed default policy view, new-view navigation, all-evidence count and actual narrative/detail source-link clicks.
- All eighteen GitHub assets match local bytes; sixteen non-HTML preview assets match as well. Preview HTML includes host-injected editor and email-protection scripts. Rendered new-view/Methods text and complete brief text match; decoded email destination matches.

## Earlier baseline verification

- 29 distinct records, nine source groups. All extracted CIs bracket point estimates.
- Primary default: 10 rows; updated PISA preset: five rows including science autonomy.
- Independent filters, numeric thresholds, invalid ranges, empty states and recovery passed.
- All seven table sort controls tested in both directions. Null participant counts stay last.
- Reporting-concern exclusion changes full collection from 29 to 28 rows.
- Country search, zero-result search, show-more/show-less, source detail and Escape passed.
- Original-source link activated and target URL confirmed.
- CSV downloaded with 29 data rows, source URLs, sample scope and limitations.
- Desktop 1440px, mobile 375px, short desktop 720px, and responsive roundtrip checked.
- Main labels meet 4.5:1 contrast: muted 6.38, active 6.26, passive 5.62, caution 7.23.
- No page-level horizontal overflow or JavaScript errors observed.
- Table intentionally scrolls horizontally on narrow screens; panel comparisons stack.
- Primary science evidence limitations and absence of a numeric PISA reading contrast are disclosed.

## Classroom-practice update: 17 November 2026

- All original presets rechecked: Primary 10, PISA 5, Umbrella 7, All 29.
- Both panels' filter controls, numeric bounds, invalid-range recovery, search, seven sorts, quality exclusion, plot expansion, detail dialogs and CSV rechecked using browser inputs.
- Original source link opened its destination; one publisher presented a verification wall. External publisher access is not guaranteed by dashboard availability.
- All four practice focuses render the five requested application fields and separate research/application provenance labels.
- Math practice opens its existing Dorris estimate; new narrative sources do not alter the 29-row register or CSV.
- Supporting research includes six entries (one existing and five additional); Methods contains the five additional entries.
- Source links and EEF navigation activated in browser. Sources are summaries, with scope, missing sample/context information and appraisal limitations explicit.
- Reflection focus handoff, nine note fields, tab persistence, focus changes without note loss, Markdown download and blank-template download passed.
- Multiline notes, angle brackets, quotation marks and a formula-like string exported as text; leading/trailing whitespace is trimmed.
- Clear cancellation preserves notes; confirmation clears notes and focus. Reload clears notes as disclosed.
- Desktop 1440×900, short desktop 1440×520, mobile 375×812 and responsive roundtrip checked.
- Mobile opening views, research/application separation, all five application fields, preservation prompts and filled reflection controls visually inspected.
- No page-level horizontal overflow or browser JavaScript errors observed.
- New-label contrast checked: muted text on white 6.38:1, green on pale green 6.26:1, white button text on green 6.83:1.
- Keyboard traversal from download to clear and focus movement into reflection checked.

## Research handling for this update

- Furenes et al. (2021): publisher article and abstract used for book-design, adult-support and outcome distinctions.
- EEF/OpenDevEd (2025): explicitly labeled commissioned-review summary; no full-review quality appraisal claimed.
- Forsström et al./OECD (2025): publisher abstract used for framing; not an independent quantitative estimate.
- Wörner et al. (2022): original PDF confirms title, 42 studies, combination findings and lack of a superior sequence. Mixed-level scope remains explicit.
- Putica & Stanišić (2026): full text checked for 43 studies, elementary/secondary/university distribution, conceptual outcome, high heterogeneity, missing full texts and authors' JBI appraisal.
- Dorris et al. (2024): existing register retained, with its sensitivity limitation and joint literacy/numeracy outcome made visible in the math application.
- No universal displacement penalty, causal mechanism score, primary-only science effect or writing-specific effect was invented.

## Hosted verification for the practice update

- GitHub Pages deployment of `e2ff19c` completed successfully in Actions run `44080810343`.
- Fresh signed-out browser context returned HTTP 200 from the existing public dashboard URL and displayed both new views.
- All four practice selections, five application fields, focus handoff, note persistence across tabs, downloaded Markdown content, clear cancellation/confirmation and five additional source entries passed on GitHub Pages.
- Existing All evidence count and country search passed on the published site; 375px checks found no page-level horizontal overflow.
- The same existing Perplexity preview was updated in place. New practice views, reflection download, source navigation, Methods additions and original evidence count passed in a fresh preview context.
- No JavaScript errors observed in either hosted context. Source links reached publisher URLs; some publishers requested browser verification. The dashboard cannot guarantee access through publisher restrictions or workplace network policies.

## Instructional added value and early reading: local verification

- Two new views: Instructional Added Value and Early Reading Evidence. Existing four views remain available.
- Four early-reading publications: Furenes (existing), Takacs, Segal-Drori and Munzer. Two meta-analyses and two primary studies; no sum of overlapping participants or new pooled estimates.
- Three new narrative references bring additional sources to eight. The original numerical data file is unchanged.
- All six outcome choices, both study-design categories, incompatible-filter empty state and reset checked with browser inputs.
- All four comparison/adult-support/appraisal disclosures open and close.
- Reference handoff preserves existing explanation notes and invalidates any outdated draft.
- All eight note fields, descriptive role and source selection tested. Filled and incomplete templates, escaped HTML-like text, multiline notes and source-linked Markdown download passed.
- Editing after generation disables downloading until the draft is rebuilt. Clearing requires in-page confirmation; cancel preserves notes.
- Original presets, independent A/B controls, bounds errors and recovery, search, quality exclusion, all seven sorts, plot expansion, table/plot details and CSV regression checks passed.
- Four practice focuses, the five application fields, math estimate dialog, all reflection fields, context handoff, tab persistence, reflection export and clearing rechecked.
- Munzer source navigation reached the PMC article. Bill navigation reached the Senate URL; a publisher/site verification challenge may appear.
- New views inspected at 1440×900, 1440×520 and 375×812, including filled explanation and expanded reading detail. Six views show no page-level horizontal overflow at 375px; form state survives a responsive roundtrip.
- Research safeguards: Segal-Drori is an abstract-based summary, not a full appraisal; its phonological-awareness finding is not represented as an advantage over adult-instructed print. Munzer interaction outcomes are not achievement outcomes. Takacs covers broader story media and does not isolate individual feature effects.
- Missing age/country details and unperformed formal quality assessments remain explicit. Source-reported findings, editorial planning implications and user-entered claims remain distinct.
- No numerical score, legal eligibility badge, inferred effectiveness verdict, AI call, database or browser persistence added.
- Reload clears explanation notes as disclosed; keyboard activation builds the draft. New muted/status/provenance text colors tested at 6.02:1 or better on their actual resolved backgrounds.
- No browser JavaScript errors observed during local checks.

## Hosted verification for added value and early reading

- Site commit `ab90e21` deployed successfully through [GitHub Actions run 44087834286](https://github.com/bgraham14072/screen-use-academic-outcomes/actions/runs/44087834286).
- A fresh signed-out context received HTTP 200 from the existing GitHub Pages URL and showed both new views.
- The same existing Perplexity preview asset, `180499ca-dd8c-4471-a122-65ceff3dc331`, was updated in place and opened in a fresh browser context.
- Both hosted destinations passed collection count, all four disclosures, outcome/design filtering, empty-state recovery, reference handoff, complete notes, generation, downloaded Markdown contents, stale-draft prevention and clear/cancel tests.
- Original All evidence count (29), country search and eight additional narrative-source entries passed on both hosts.
- Practice navigation into both new views, the opportunity-cost link and preservation of existing reflection notes passed.
- Munzer's source link was activated on both hosts and reached the PMC article.
- Hosted mobile checks at 375×812 found no page-level horizontal overflow in either new view. Hosted mobile collection and desktop explanation screenshots were visually inspected.
- No JavaScript errors observed in either hosted context. Notes are ephemeral and must be downloaded before reload or closing.
# Navigation grouping: November 18, 2026

- Reduced the primary navigation from eleven choices to the eight requested labels and order. Four existing educator tools now share a secondary navigation within For Educators.
- Local browser checks passed for all primary and secondary choices, selected states, keyboard activation, educator-view memory, legacy tool fragments, record P7, unknown-fragment recovery, and browser Back/Forward.
- Regression checks passed for evidence presets (10 primary, 9 PISA, 7 umbrella and 34 all-evidence rows), search empty state/reset, seven-column sorting, details/Escape and CSV download.
- Educator checks passed for all four practice focuses, practice-to-reflection transfer, note retention across primary navigation, reflection download and clear/cancel, explanation generation/download, reading outcome filters/reset and reference transfer without overwriting notes.
- Responsive checks covered desktop, 375px, desktop/mobile/desktop transitions, and a 1280-by-600 short viewport. No page-wide horizontal overflow or new JavaScript page errors were observed.
- Research data, content, source URLs and downloadable policy documents were not edited or newly reverified in this navigation-only change.
# Pulling-back narrative addition, 18 November 2026

- Compared 34 narrative blocks (headings, paragraphs and table items) against the user-supplied Claude artifact. All match after excluding citation labels; no narrative wording was changed.
- The official Senate Commerce hearing transcript verifies the Horvath quotation: https://www.congress.gov/event/119th-congress/senate-event/LC75728/text.
- Replaced Sweden syndications with the original September 2023 AP report: https://apnews.com/article/sweden-digital-education-backlash-reading-writing-1dd964c628f76361c43dbf3964f7dbf4.
- Added a separately dated Swedish government policy update: https://www.government.se/articles/2024/02/government-investing-in-more-reading-time-and-less-screen-time. The original draft describes the 2023 announcement. The later government account specifies 658m SEK in 2024 and 755m SEK in 2025, with analog-only tools for under-twos and greatly restricted digital tools for other preschool children from July 2025. Do not read the preserved announcement as a complete description of the later adopted policy.
- Added NYSED funding guidance, https://stateaid.nysed.gov/payment/htm_docs/Distraction-Free%20School%20Guidance.html, and the state implementation guidance it links to, https://www.ny.gov/programs/phone-free-schools-implementation-resources. The latter directly states the educational school-issued-device exclusion. Retained the Pine Plains example citation because the general state guidance does not substantiate that named district example.
- Replaced the broken Frisch link with the original PNAS paper: https://www.pnas.org/doi/full/10.1073/pnas.1718793115.
- Replaced the rehosted English study and commentary with the original study: https://pmc.ncbi.nlm.nih.gov/articles/PMC11984610/. This is observational and cross-sectional. The draft's heading “Restrictions do reduce phone time” was preserved at the user's exact-copy direction, not independently upgraded to a causal finding.
- The original data.js SHA-256 remains 6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12. Runtime register remains 34 estimates; no records were added.
- All eight navigation groups, educator subnavigation, evidence presets (34/10/9/7), reporting-concern exclusion (33), search/empty/reset, seven-column sorting, details/Escape, CSV, practice selection/transfer, reflection retention/download/cancel/clear passed.
- Updated PDF has two Letter pages, embedded Lato regular/bold, correct metadata and a clickable page-2 card link. Page-1 extracted text matches the previous PDF exactly. Both pages rendered and inspected; qpdf check passed.
