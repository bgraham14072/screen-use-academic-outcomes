# Screen Use & Academic Outcomes

A source-linked research dashboard for comparing intentional educational technology use, passive viewing, and broader screen exposure. It brings together primary-school academic outcomes, umbrella-review findings, and observational PISA analyses.

**Open the dashboard:** [Screen Use & Academic Outcomes](https://bgraham14072.github.io/screen-use-academic-outcomes/)

## Dashboard

Primary navigation has eight groups: For Policymakers, Evidence, Wellbeing, Paper & Notes, NY Research & FOCUS Act, For Educators, Methods, and About. For Educators contains Research to Classroom Practice, Instructional Added Value, Early Reading Evidence, and Added Value & Opportunity Cost. Existing section fragments remain supported, including `#practice`, `#added`, `#reading`, and `#reflection`; `#educators` opens the educator group.

- Independent comparison panels with filters for use category, intervention or exposure, age, outcome, effect-size scale, and numeric bounds.
- Sortable evidence register with sample scope, country context, reported methodological quality, and confidence intervals.
- Research presets for primary school, PISA context, umbrella findings, and the full collection.
- Source-detail dialogs with original report links and interpretation limits.
- CSV export of the filtered findings, including citations and methodological notes.
- Responsive desktop and mobile layouts.
- Research to Classroom Practice: four learning-focus views distinguish source-reported findings from illustrative learning goals, strategies, technology contributions, teacher roles and non-digital alternatives.
- Instructional Added Value: an explanation panel distinguishes technology as the objective, support for another objective and convenience. User notes, attributed research, limitations and unanswered questions are combined into a downloadable Markdown planning rationale, not a legal verdict or effectiveness rating.
- Early Reading Evidence: a balanced, filterable collection of four peer-reviewed publications, with outcomes, comparisons, adult support, study limitations and review depth. References can be carried into the explanation panel without overwriting notes.
- Added Value and Opportunity Cost: an unscored reflection worksheet with downloadable Markdown notes, a learning-evidence prompt and explicit attention to reading, writing, discussion, teacher interaction and hands-on work.

The current snapshot contains 29 estimates from nine source groups, accessed on 16 November 2026. This is a curated collection, not an exhaustive systematic review.

The updates checked on 17 November 2026 add eight narrative research sources without changing the numerical register. The first five are Furenes et al. (2021), Wörner et al. (2022), EEF/OpenDevEd (2025), Forsström et al./OECD (2025), and Putica & Stanišić (2026). Three further peer-reviewed publications join Furenes in the balanced early-reading collection: [Takacs et al. (2015)](https://journals.sagepub.com/doi/pdf/10.3102/0034654314566989), [Segal-Drori et al. (2010)](https://doi.org/10.1007/s11145-009-9182-x), and [Munzer et al. (2019)](https://www.ncbi.nlm.nih.gov/pmc/articles/6564071). Full source links, scope and limitations appear in the practice view and Methods & sources. These are not additional independent quantitative estimates or a new pooled analysis. Suggested classroom applications are not tested lesson packages.

## Run locally

This is a static application. It has no build step, package dependencies, backend, database, or API-key requirement.

With Python 3 installed, run from the repository root:

```sh
python3 -m http.server 3000 --directory site
```

Open `http://localhost:3000` in your browser.

The application loads the Satoshi font from Fontshare and falls back to a system font if unavailable. The research data and application logic are included in the repository.

## Files

```text
site/
  index.html       Page structure
  style.css        Responsive styling
  app.js           Filters, comparison plots, sorting, details, and export
  data.js          Research records and source metadata
  practice.js      Narrative research, classroom applications and reflection tool
  reading.js       Balanced early-reading collection and added-value explanation panel
shared/
  schema.ts        Documentation of the evidence-record shape
QA.md              Acceptance criteria and verification notes
```

`shared/schema.ts` documents the data model; it is not a compiled dependency. `site/data.js` holds the actual research records.

## Deployment

GitHub Pages publishes the contents of `site/` through `.github/workflows/pages.yml`. The workflow checks JavaScript syntax, uploads only the static dashboard folder, and deploys it to GitHub Pages.

Changes to `site/` or the publishing workflow on the `master` branch automatically trigger deployment. You can also run **Deploy dashboard to GitHub Pages** manually from the repository's **Actions** tab. No build command, backend, database, or deployment secret is required.

Share the [GitHub Pages dashboard](https://bgraham14072.github.io/screen-use-academic-outcomes/) with people who want to use the tool. Share the [repository](https://github.com/bgraham14072/screen-use-academic-outcomes) with people who want to inspect the source. Both are public.

The existing [Perplexity dashboard preview](https://www.perplexity.ai/computer/a/screen-use-academic-outcomes-GASZyt2MRHGhImXO_z3DMQ) is separate. GitHub commits update GitHub Pages when the workflow succeeds, but do not automatically update that preview.

## Research safeguards

- Intervention effects and observational associations remain distinct.
- Standardized effects, harmonized correlations, PISA point differences, regression coefficients, and unconfirmed effect-size scales are not combined into one ranking.
- Quality labels reflect the accessed reports or explicitly identify missing formal ratings; they are not newly assigned AMSTAR or GRADE scores.
- Missing subgroup sample sizes are not replaced with full-review totals.
- Overlapping samples, sensitivity analyses, and outcome subgroups must not be summed.
- Language and general-learning outcomes are not relabeled as reading achievement.
- Primary-school science coverage is limited, and this collection does not contain a verified numeric PISA reading contrast.
- A larger point estimate is not, by itself, evidence that an intervention is superior.

Each record includes original source links and limitations in the dashboard and CSV export. Source material remains subject to the rights of its respective authors and publishers.

## Validation

`QA.md` records the checks completed during development. JavaScript syntax can also be checked with Node.js:

```sh
node --check site/app.js
node --check site/data.js
node --check site/practice.js
```

Filters are held in memory and reset on reload. The app does not store student records or require user sign-in.

Reflection notes also remain only in the open page and are not submitted to a server. Switching tabs preserves notes; reloading or closing clears them. Users can download notes before leaving and should not enter student names or confidential information. Clearing notes requires an in-page confirmation. There is no localStorage, scoring algorithm or generated effectiveness verdict.
