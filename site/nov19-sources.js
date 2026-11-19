// Original-source additions, 19 November 2026. Pure data; no DOM or network access.
// Neither addition enters the numerical register; both retain explicit non-register provenance labels.
const nov19ContextStudies=[
{
 id:"study-apa-2026",view:"explorer",verified:"19 November 2026",
 label:"American Psychological Association · Sept. 3, 2026",
 title:"APA Expert Report on Children’s and Adolescents’ Learning With Educational Technology",
 authors:"Elizabeth Barnes, D. Basu Mallick, Julie Evans, Roberta Michnick Golinkoff, Michael M. Grant, Kathy Hirsh-Pasek, M. Irshad, Holly B. Lane, Richard E. Mayer, Barbara Means, Terezinha Nunes, Zachary A. Pardos, Jenny S. Radesky, Kirk Vanacore and Daniel T. Willingham",
 venue:"American Psychological Association, released September 3, 2026 (10 evidence-based recommendations)",
 category:"Professional-association evidence synthesis",
 design:"Expert evidence synthesis and practice/policy recommendations; not a single randomized trial or pooled meta-analysis.",
 url:"https://www.apa.org/pubs/reports/children-adolescent-learning-educational-technology",
 full:"https://www.apa.org/pubs/reports/childrens-adolescents-learning-educational-technology.pdf",
 funder:"American Psychological Association expert panel report; external sponsor NR in the report.",
 population:"Children and adolescents across early childhood, K–12 schooling and home learning contexts. Synthesis across varied research designs; no single combined participant N.",
 context:"Reviews digital learning tools, adaptive practice, multimedia design, classroom and home screen routines, generative AI guardrails, subgroup equity and procurement across 6 overarching conclusions and 10 recommendations.",
 finding:"Educational technology is neither inherently beneficial nor harmful. Tools aligned with learning science, focused feedback and adult involvement can support specific goals, whereas engagement, enjoyment, usage streaks and task completion do not establish learning. Recommendation 2 urges off-screen “show me” checks asking learners to explain, remember and apply concepts with the app closed, and calls on policymakers to tie procurement to independent validation showing retention or skill transfer persisting at least one week after use. Recommendation 3 urges evaluating what technology replaces rather than counting screen minutes alone.",
 limits:"Professional-association synthesis rather than a new quantitative meta-analysis or product evaluation. Recommendations synthesize broader cognitive and educational research, warn against pop-ups, rewards, autoplay, multitasking and unguarded generative AI shortcuts, and note that averages can hide subgroup differences across prior knowledge, disability, language and family resources.",
 locator:"pp. 1, 3 (release framing, 6 conclusions, 10 recommendations); pp. 4–5 Recs. 1–2 (engagement vs learning, “show me” moments, one-week independent validation); pp. 5–6 Rec. 3 (displacement vs screen time); pp. 7–12 Recs. 4–10 (learning science, distraction-free design, generative AI, adult role, equity, data privacy, teacher support); p. 13 (panel authors). Sept. 3, 2026 release date verified in official APA announcement.",
 companions:[["https://www.apa.org/news/press/releases/2026/09/education-technology-engagement","Official APA release date record (Sept. 3, 2026)"]],
 values:"Sept. 3, 2026 release: APA release record | 6 conclusions: p. 3 | 10 recommendations: pp. 1, 4–12 | at least 1 week retention/transfer standard and “show me” moments: Rec. 2, p. 5 | 15 panel authors: p. 13",
 placements:"Q1, Q16; Instructional Added Value show-me transfer test; Methods engagement-versus-learning and independent-validation standards; Evidence explorer context."
},
{
 id:"study-instruction-partners",view:"explorer",verified:"19 November 2026",
 label:"Instruction Partners · Sept. 2026",
 title:"AI in Action Learning Tour: Initial Findings on Student-Facing AI in K–12 Classrooms",
 authors:"Instruction Partners",
 venue:"Instruction Partners Learning Tour report, September 2026",
 category:"Qualitative classroom observation by a nonprofit (not outcome evidence)",
 design:"Qualitative classroom observation and interview field study plus public evidence scan; not a causal outcome study or product efficacy trial.",
 url:"https://ailearningtour.instructionpartners.org/insights/overall-takeaways",
 full:"https://ailearningtour.instructionpartners.org/about-the-tour",
 funder:"Nonprofit field inquiry by Instruction Partners; specific philanthropic grantors NR on the tour methodology page.",
 population:"20 student-facing AI products examined across 16 school systems in 7 states during the 2025–2026 school year: 32 classroom observations, 50+ teacher interviews, 25+ school and system leader interviews and 100+ student interviews.",
 context:"Classroom observations covered the 13 targeted instructional products; user interviews covered 7 multifunctional platforms and general-purpose chatbots. Examined mathematics, English language arts and general classroom workflows across grades K–12.",
 finding:"Targeted instructional tools, especially those with a clear role for the teacher, delivered the most consistent classroom experiences, whereas general-purpose chatbots posed the clearest risk of shortchanging student thinking. Classroom results depended heavily on predictable teacher routines, active monitoring and school-leader expectations; observers saw no product support strong learning without an active teacher role. In literacy, observers flagged isolated skill drills disconnected from rich texts and text releveling that lowers core text complexity. Across 20 tour products, 16 had complete profiles at release and only 7 had independent U.S. outcome studies examining achievement across student subgroups.",
 limits:"Qualitative field observations and user interviews cannot estimate causal learning gains or compare tools on a common achievement test. Subgroup-study counts cover the 16 products with completed September 2026 profiles out of the 20 products studied (7 with independent U.S. subgroup achievement reviews, 2 with non-U.S. studies, 4 with external studies underway and 3 relying on internal data only). Individual vendor profiles are not cited here as product efficacy evidence.",
 locator:"About the Tour (20 products, 32 observations, 16 systems, 7 states, interview counts, 13 observed vs 7 interview-only); Overall Takeaways (teacher centrality, targeted tools, chatbot risk); How Products Vary (3 chatbots, 5 multipurpose platforms, 13 targeted tools; 16 completed profiles; 7 independent U.S. subgroup studies); Trends in Use (teacher routines and leader expectations); Subject-Specific Takeaways (isolated skill drills and text releveling).",
 companions:[
  ["https://ailearningtour.instructionpartners.org/insights/how-products-vary","How Products Vary (categories and subgroup-study counts)"],
  ["https://ailearningtour.instructionpartners.org/insights/trends-in-use","Trends in Use (teacher routines)"],
  ["https://ailearningtour.instructionpartners.org/insights/subject-specific-takeaways","Subject-Specific Takeaways (literacy drills and text releveling)"]
 ],
 values:"20 products; 32 observations; 16 systems; 7 states; 50+ teachers; 25+ leaders; 100+ students; 13 observed and 7 interview-only: About the Tour | 3 chatbots, 5 multipurpose, 13 targeted; 16 profiled; 7 independent U.S. subgroup studies (2 non-U.S., 4 underway, 3 internal): How Products Vary",
 placements:"Q13, Q15, Q16; Evidence explorer qualitative context."
}
];
addedStudies.push(...nov19ContextStudies);
for(const c of nov19ContextStudies){
 questionEvidence[c.id]=[c.id,c.label+" · "+c.category];
 questionCardTargets[c.id]={view:"explorer",selector:"#"+c.id,index:0};
}
{
 const q1=essentialQuestions.find(q=>q.n===1);
 q1.shows+=" A professional-association evidence synthesis from the American Psychological Association likewise concludes that educational technology is neither inherently beneficial nor harmful: focused practice with feedback and adult involvement can support defined goals, whereas engagement, enjoyment and completion metrics are not learning, distracting design features and multitasking impede recall, and what technology replaces matters more than screen time alone.";
 q1.classroom="Start with a subject-specific learning need and pupils’ actual level. Compare the supported digital approach with strong non-digital teaching, and use off-screen show-me checks to verify whether students can remember, explain and apply learning after the app is closed.";
 q1.refs.push("study-apa-2026");

 const q13=essentialQuestions.find(q=>q.n===13);
 q13.shows+=" Qualitative classroom observations by Instruction Partners, a nonprofit field inquiry rather than outcome evidence, found teachers central in every strong classroom observed: targeted instructional tools with a clear teacher role were strongest, general-purpose chatbots posed the sharpest threat to student thinking, results depended on teacher routines, and literacy uses risked drifting into isolated skill practice or text releveling that lowered core text complexity.";
 q13.doesnt+=" Nonprofit classroom observations also cannot establish causal reading gains, and most profiled AI products lacked independent subgroup achievement evaluations.";
 q13.refs.push("study-instruction-partners");

 const q15=essentialQuestions.find(q=>q.n===15);
 q15.shows+=" Qualitative observations and evidence scans from Instruction Partners, which are field observations rather than outcome evidence, found that fewer than half of studied student-facing AI products had independent domestic subgroup achievement studies, results depended on teacher routines and leader expectations, general-purpose chatbots posed the biggest risk to student thinking, and literacy uses warranted caution around isolated skill practice and routine text releveling.";
 q15.classroom="Before starting, specify the learning outcome, comparison, teacher routines, chatbot guardrails, subgroup checks, data protections and stopping rules.";
 q15.refs.push("study-instruction-partners");

 const q16=essentialQuestions.find(q=>q.n===16);
 q16.shows+=" The American Psychological Association’s professional-association evidence synthesis adds that engagement, enjoyment and usage reports do not demonstrate learning; stronger review relies on independent validation and off-screen show-me checks of whether students can remember, explain and apply learning after the app is closed. Qualitative classroom observations from Instruction Partners reinforce that implementation depends on predictable teacher routines, flag risks from general-purpose chatbots, isolated skill drills and routine text releveling, and note how few student-facing AI products have independent subgroup outcome studies.";
 q16.classroom="Specify the comparison, independent learning measure, subgroup checks and review date before the pilot, and ask students to show they can remember, explain and apply learning with the app closed. Adapt, reduce or stop the activity if gains stay confined to the platform, if it displaces valuable teaching, or if access, safety or privacy concerns persist.";
 q16.refs.push("study-apa-2026","study-instruction-partners");
}
