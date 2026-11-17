export type Evidence = {
  id: string; source: string; title: string; outcome: string; subjects: string[];
  use: "Intentional" | "Passive" | "Mixed" | "Perception";
  intervention: string; age: string; ageLabel: string; design: string;
  metric: string; value: number; low: number | null; high: number | null;
  k: string; n: number | null; sample: string; context: string;
  quality: string; qualityNote: string; note: string; status: string;
  observed_at: string;
};

// Narrative interpretation is deliberately separate from quantitative Evidence.
export type PracticeSource = {
  id: string; label: string; title: string; url: string; type: string;
  scope: string; finding: string; limits: string; accessed: string;
};
export type PracticeCase = {
  id: string; subject: string; title: string; age: string;
  research: { text: string; source: string }[];
  caveat: string; goal: string; strategy: string; contribution: string;
  teacher: string; alternative: string; protect: string; observe: string;
};
// Reflection is unscored and held only in the current page's form controls.
