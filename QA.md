# Acceptance and QA inventory

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

## Verification completed

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
