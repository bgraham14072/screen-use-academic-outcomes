# Screen Use & Academic Outcomes

A source-linked research dashboard for comparing intentional educational technology use, passive viewing, and broader screen exposure. It brings together primary-school academic outcomes, umbrella-review findings, and observational PISA analyses.

**Open the dashboard:** [Screen Use & Academic Outcomes](https://bgraham14072.github.io/screen-use-academic-outcomes/)

## Dashboard

- Independent comparison panels with filters for use category, intervention or exposure, age, outcome, effect-size scale, and numeric bounds.
- Sortable evidence register with sample scope, country context, reported methodological quality, and confidence intervals.
- Research presets for primary school, PISA context, umbrella findings, and the full collection.
- Source-detail dialogs with original report links and interpretation limits.
- CSV export of the filtered findings, including citations and methodological notes.
- Responsive desktop and mobile layouts.

The current snapshot contains 29 estimates from nine source groups, accessed on 16 November 2026. This is a curated collection, not an exhaustive systematic review.

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
```

Filters are held in memory and reset on reload. The app does not store student records or require user sign-in.
