import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const manusRevopsProject: Project = {
  slug: "manus-revops-crm-audit-lead-qualification",
  title: "RevOps CRM Audit & Lead Qualification Agent Skill",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  platforms: ["Manus Agent Skills", "CSV/XLSX", "CRM exports"],
  category: "AI",
  description:
    "Designed, packaged and validated a reusable Manus Agent Skill that applies deterministic lead scoring, business-rule overrides and CRM data-quality checks to CSV/XLSX exports.",
  overview: [
    "Built a reusable Agent Skill for Revenue Operations lead qualification and CRM audit workflows.",
    "Uses a deterministic 0–100 scoring model across budget, business need, authority, timeline and data/engagement instead of opaque AI-only scoring.",
    "Applies explicit business overrides, including a missing-timeline discovery rule and a low-budget classification cap.",
    "Audits ownership, overdue follow-ups, qualification gaps, stale opportunities and conditional deal-stage/deal-value requirements.",
    "Validated the installed Skill with a five-record synthetic CRM dataset and a short invocation prompt to confirm the rules were stored in the Skill.",
  ],
  problem:
    "Lead qualification and CRM audits can become inconsistent when teams rely on subjective judgment, incomplete records or one-off AI prompts. The goal was to create a reusable workflow that produces auditable scores, applies clear business rules and surfaces CRM hygiene issues without inventing missing values.",
  solution:
    "Designed a deterministic scoring rubric, classification thresholds and override rules, tested them against synthetic CRM data, then packaged the validated workflow as a Manus Skill. The Skill accepts CSV/XLSX exports, preserves input records, handles missing columns explicitly and returns a structured executive summary, lead qualification table, CRM/data-quality issues, pipeline audit and up to five priority actions.",
  architecture: [
    "CRM export (CSV/XLSX) → Manus Agent Skill",
    "Input validation → required-column and missing-value checks",
    "Deterministic scoring → Budget 25 + Need 25 + Authority 20 + Timeline 15 + Data/Engagement 15",
    "Base classification → hot_lead / qualified / needs_discovery / nurture / not_fit",
    "Business-rule overrides → missing timeline and confirmed-low-budget controls",
    "CRM audit → ownership, follow-up, qualification, staleness and conditional deal validation",
    "Structured output → executive summary + qualification + data quality + pipeline + priority actions",
  ],
  workflow: [
    "Upload CRM Export",
    "Validate Available Fields",
    "Score Each Lead",
    "Apply Base Classification",
    "Apply Business-Rule Overrides",
    "Audit CRM Data Quality",
    "Audit Pipeline Controls",
    "Generate Prioritized RevOps Output",
  ],
  automation: [
    {
      title: "Deterministic Lead Scoring",
      description:
        "Scores every lead on a documented 100-point rubric so each result can be explained and reviewed.",
      icon: "bot",
    },
    {
      title: "Classification Overrides",
      description:
        "Applies operational guardrails after scoring, including missing-timeline and confirmed-low-budget rules.",
      icon: "crm",
    },
    {
      title: "CRM Data-Quality Audit",
      description:
        "Flags missing ownership, overdue follow-ups, qualification gaps and other actionable record-quality issues.",
      icon: "database",
    },
    {
      title: "Structured RevOps Summary",
      description:
        "Returns consistent qualification, audit and priority-action sections for faster operational review.",
      icon: "workspace",
    },
  ],
  gallery: [],
  results: [
    "Packaged and enabled the reusable revops-crm-audit-lead-qualification Manus Skill.",
    "Validated all five synthetic test records through the installed Skill.",
    "Confirmed the missing-timeline override: Grace Mensah scored 72 and remained needs_discovery.",
    "Confirmed the low-budget cap: Mary Okafor scored 85 but was correctly capped at qualified.",
    "Confirmed deterministic high-fit results: John Ade and Sarah Bello each scored 100 and were classified hot_lead.",
    "Detected a missing owner and an overdue follow-up on the synthetic test data.",
    "Documented a remaining design limitation: pipeline value needs stricter deal-existence logic so lead potential value is not conflated with created-deal pipeline.",
  ],
  technologies: [technologies.manus],
  metrics: [
    "5 synthetic CRM records validated",
    "100-point deterministic scoring model",
    "5 qualification states",
    "2 business-rule overrides validated",
    "CSV and XLSX input support",
  ],
  stats: [
    { value: 5, suffix: " leads", label: "Synthetic Records Validated" },
    { value: 100, suffix: " pts", label: "Deterministic Scoring Model" },
    { value: 2, suffix: " overrides", label: "Business Rules Validated" },
  ],
  before: [
    "Lead qualification depended on one-off reasoning rather than a reusable scoring standard.",
    "CRM audit checks were not packaged into a repeatable agent workflow.",
    "Missing qualification fields could lead to inconsistent prioritization.",
  ],
  after: [
    "Reusable Agent Skill applies the same documented scoring model to each CRM export.",
    "Business-rule overrides prevent raw scores from bypassing qualification controls.",
    "CRM hygiene issues and priority actions are surfaced in a consistent RevOps report.",
  ],
  automationImage: "",
};
