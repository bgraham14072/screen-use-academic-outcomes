# Dashboard flows and practice additions

## Navigation simplification, November 18, 2026
- Primary navigation contains exactly eight groups, in this order: For Policymakers, Evidence, Wellbeing, Paper & Notes, NY Research & FOCUS Act, For Educators, Methods, About.
- For Policymakers remains the default. All existing content and evidence data remain unchanged.
- For Educators reveals four secondary choices: Research to Classroom Practice, Instructional Added Value, Early Reading Evidence, Added Value & Opportunity Cost.
- Educator secondary navigation appears only within the educator group. Returning to For Educators remembers the last educator tool for this page session.
- Existing tool fragments, record links, About links, cross-tool actions and browser navigation select the correct primary group and secondary choice. Unknown fragments recover to For Policymakers.
- Test all eight primary buttons and four educator buttons by mouse and keyboard. Check note retention when moving between tools and primary groups.
- Check the evidence presets, search/empty/reset, sorting, detail dialog and CSV; practice focus choices; reading filters and reference transfer; explanation generation/download; reflection download/clear; policy downloads and source links.
- Inspect primary navigation and educator navigation at desktop, 375px, and short-desktop sizes. Check visible active states, no page-wide overflow, and no new console errors.
- Recheck changed navigation and an evidence flow in fresh contexts after deployment; preserve the updated source in Project storage.

## Policy revision acceptance inventory
- P7 is the published +49 adjusted leisure contrast, up to one hour versus five to seven hours at school, with CI/N NR and direct press-release provenance.
- Policy and brief distinguish the figure's unadjusted time-band pattern from the adjusted headline contrast. The one-to-five-hour learning statement remains narrative, with no derived numerical effect.
- Public Source Verification Report and its legacy audit URL contain no build-process notes; About omits the requesting-contributor sentence.
- Default to For Policymakers, followed by Explorer. No statistical notation in the policy view; five balanced, source-linked findings and explicit limits.
- Header and footer About links work from every view; About includes supplied biographies, purpose, disclosure, contact and citation.
- Deep links select a tab or open a register record, including after a reload. Unknown fragments recover to the policy view.
- Preserve the original data.js SHA-256 6d6798992562ee89aeecd8304fd732c543209f4f195cf8db0fda442496dddf12 and original 29 records. Explicitly requested additions are separate.
- Display PISA point differences as whole points, retain exact values in CSV/filtering/sorting, and keep all other scales at source precision; each original effect-size scale and design has a separate plot and sort group.
- New PISA contrasts retain reported comparison groups, adjustment, missing sample/CI and noncausal warnings.
- Wellbeing, analog-learning and emerging-research narratives remain outside the numerical register unless an explicitly authorized estimate has been verified.
- Policy crosswalk cites operative S10685 sections and distinguishes evidence from implementation questions and legal conclusions.
- Two-page print view and PDF match, include source URLs, public GitHub QR, contact, disclosure and no statistical notation.
- Verify desktop, 375px, short viewport and print. Test keyboard focus, About links, source links, CSV, each tab and evidence deep links.
- Off-happy paths: unknown record/hash and filtered empty state; back navigation from a record to the landing view.
- Open all source URLs and report access limits; audit original and new numerical fields without silently correcting preserved records.
- Compare deployed GitHub and preview assets, and distribute only the GitHub URL to policymakers.
- Read final content from both a skeptical NYSUT perspective and an enthusiastic technology-policy perspective; document balance fixes.

## Existing evidence explorer
- Open the public dashboard. Primary school starts with 10 rows.
- Choose PISA context, Umbrella findings, All evidence, and Primary school; each changes the comparison and register. All evidence shows 34 rows, including the preserved original 29.
- Change each A/B use, age, outcome, intervention, and scale filter. The opposite panel stays independent.
- Set numeric bounds after choosing one scale. Reversed bounds show an error; clear panel recovers.
- Search for a country and a nonexistent term; reset restores the default.
- Hide reporting-concern estimates in All evidence; count changes from 34 to 33 and back.
- Sort all seven columns in both directions. Effect sorting stays within metric and design.
- Expand and collapse a plot group. Open plot and table details, follow an original source, close by button and Escape.
- Export CSV; downloaded rows match the current register and include sources and caveats.
- Open Methods & sources and return; evidence filters remain unchanged.

## Research to Classroom Practice
- Open the new tab; selected findings show reported research separately from illustrative applications.
- Each practice entry includes learning goal, instructional strategy, possible technology contribution, teacher role, and a non-digital alternative.
- Select reading, math, science and cross-subject entries. Check contextual limits and original source links.
- Supporting research has source dates, scope, comparison/limitations and no fabricated quality rating.
- New narrative sources are not added to numerical estimate counts or CSV as if they were independent estimates.
- Open the reflection check from a practice entry. Its selected context appears, without overwriting notes.

## Added Value and Opportunity Cost
- Open the new check; all five requested questions are present.
- Enter notes about the proposed use, strengthened activity, alternative activity, preserved experiences, and learning evidence.
- Switch tabs and return; notes persist until reload, with a clear in-memory-only notice.
- Download reflection notes; verify text, context and source links. No score or recommendation is generated.
- Clear notes with an in-page confirmation; cancel preserves notes, confirm clears them.
- Off-happy paths: blank download works as a template; long text and punctuation export intact.

## Visual and deployment checks
- Inspect all views at desktop and 375px, plus a short desktop and a desktop-mobile-desktop transition.
- No page-level horizontal overflow. Table horizontal scrolling stays contained.
- Check console errors, keyboard focus and active navigation states.
- After deployment, open fresh contexts for GitHub Pages and the existing preview. Test new tabs, reflection, source links and one evidence regression flow.

## Instructional added-value update
- Open Instructional Added Value. Distinguish technology as the objective, a possible support for another objective, and convenience without demonstrated benefit. No legal classification or numerical rating.
- Enter goal, learners, feature, adult role, equivalent non-digital instruction, protected experiences, local evidence and review plan. Choose a research source and descriptive technology role.
- Build an explanation. User claims, source-reported evidence, limitations and unresolved questions remain separate. Missing fields are explicitly marked, not invented.
- Edit a field after building; the old draft is marked outdated and cannot be downloaded until rebuilt.
- Download Markdown with entered text, research URLs and legal caveat. Cancel clearing preserves notes; confirm clears both draft and inputs.
- Switch tabs; notes persist. Reload clears notes as disclosed.
- Read the illustrative example; it is not labeled as a tested lesson.

## Balanced early-reading collection
- Open Early Reading Evidence: four peer-reviewed publications, two syntheses and two primary studies, including benefit and caution findings.
- Filter by outcome and study design; zero matches show a reset action. Reset restores four records. No total participant count across potentially overlapping studies.
- Inspect population, sample, adult support, comparison, feature, findings, limitations, review depth and source URL for each publication.
- Keep word reading, comprehension, vocabulary and interaction outcomes distinct; adult mediation is not merely adult presence.
- Select a study for the explanation panel; only the reference changes, existing notes remain. A draft must be rebuilt after changing reference.
- Original numerical register stays at 29 estimates and nine sources; narrative references become eight additions, with no fabricated quality grades.
- Test blank template, long text/HTML-like input, filter empty state, source navigation and Markdown contents on localhost and hosted destinations.
