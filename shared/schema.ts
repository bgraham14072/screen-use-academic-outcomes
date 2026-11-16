export type Evidence = {
  id: string; source: string; title: string; outcome: string; subjects: string[];
  use: "Intentional" | "Passive" | "Mixed" | "Perception";
  intervention: string; age: string; ageLabel: string; design: string;
  metric: string; value: number; low: number | null; high: number | null;
  k: string; n: number | null; sample: string; context: string;
  quality: string; qualityNote: string; note: string; status: string;
  observed_at: string;
};
