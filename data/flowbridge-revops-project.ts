import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const flowbridgeRevopsProject: Project = {
  slug: "flowbridge-revops-crm-audit-agent",
  title: "FlowBridge RevOps CRM Audit & Lead Qualification Agent",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  platforms: ["Manus Agent Skills", "CSV/XLSX", "CRM audit", "Lead qualification"],
  category: "Revenue Operations",
  description:
    "Translated fictional company requirements into a lifecycle-aware RevOps Agent Skill, then blind-tested the finished rules against 16 synthetic CRM records and validated 24 rule-defined CRM issues.",
  overview: [
    "Started with business requirements discovery rather than prompting first: qualification stages, budget thresholds, authority rules, timeline rules, lifecycle controls and CRM data-quality requirements.",
    "Designed a deterministic 100-point model weighted across Budget 30, Need 20, Authority 30 and Timeline 20, with explicit override precedence.",
    "Separated lead qualification from CRM/process health so a strong prospect can still surface execution risks such as missing ownership, overdue follow-up, stale opportunity activity or incomplete Closed Won data.",
    "Added lifecycle-aware validation to prevent false positives, including valid Customer Onboarding activity after Closed Won and stage-specific requirements for Lost Reason, Close Date and Deal Amount.",
    "Blind-tested the updated Skill against a spreadsheet that contained no expected-status column or answer-key sheet.",
    "Validated 16 synthetic records, 24 rule-defined CRM issues and the expected qualification distribution without changing the source workbook.",
  ],
  problem:
    "A reusable RevOps agent can still fail if it treats scores as decisions, ignores lifecycle context or invents policies that the business never defined. FlowBridge needed a specification that converted sales-process requirements into deterministic qualification logic, CRM validation rules, severity levels and actions that could be tested independently.",
  solution:
    "Built the FlowBridge specification from the business rules upward: field definitions, controlled values, scoring, override precedence, conditional validation, date logic, opportunity-state checks, severity rules and lifecycle-aware recommended actions. Edge cases were tested manually first, then the final instructions were packaged as a Manus Skill and validated on a separate blind-test workbook.",
  architecture: [
    "Business requirements → qualification criteria, CRM controls and lifecycle policy",
    "Data dictionary → Budget, Need, Authority, Timeline, Owner, Opportunity Status, Deal Amount, Close Date, Lost Reason, activity and follow-up fields",
    "Deterministic score → Budget 30 + Need 20 + Authority 30 + Timeline 20",
    "Override precedence → below-minimum budget → missing critical data → influencer authority → long timeline",
    "Qualification output → hot_lead / qualified / needs_discovery / nurture / not_fit",
    "CRM audit → ownership, proposal follow-up, deal value, Closed Won/Closed Lost validation, overdue follow-up, stale opportunities and activity-state consistency",
    "Severity → Critical / High / Medium / Low",
    "Action engine → qualification-aware and issue-aware next actions",
    "Blind validation → 16 synthetic records with no embedded expected answers",
  ],
  workflow: [
    "Gather FlowBridge Business Requirements",
    "Define Qualification Stages and Thresholds",
    "Design Scoring and Override Precedence",
    "Build CRM Data Dictionary",
    "Translate Requirements into Decision Logic",
    "Add Conditional and Date-Based Validation",
    "Test Edge Cases and False Positives",
    "Package the Manus Agent Skill",
    "Run Blind Spreadsheet Validation",
    "Refine Rules and Re-Test",
  ],
  automation: [
    {
      title: "Deterministic Qualification",
      description:
        "Scores budget, need, authority and timeline on a documented 100-point model, then applies business-rule overrides before final classification.",
      icon: "bot",
    },
    {
      title: "Lifecycle-Aware CRM Audit",
      description:
        "Checks ownership, tasks, deal value, stale opportunities, Closed Won/Closed Lost requirements and activity-state consistency without inventing missing values.",
      icon: "crm",
    },
    {
      title: "Severity & Priority Logic",
      description:
        "Separates Critical revenue-integrity problems from High execution risks and Medium process/data-quality issues.",
      icon: "database",
    },
    {
      title: "Action Recommendations",
      description:
        "Produces next actions that account for final qualification status, overrides and every Critical or High CRM issue.",
      icon: "workspace",
    },
  ],
  governance: [
    {
      title: "No invented CRM values",
      description:
        "Unknown or missing fields remain unknown. The agent reports incomplete data instead of silently filling values.",
    },
    {
      title: "Budget is not pipeline",
      description:
        "Lead buying capacity is kept separate from actual opportunity Deal Amount so potential value is not counted as created pipeline.",
    },
    {
      title: "Lifecycle-specific validation",
      description:
        "Rules only apply when the relevant stage or opportunity state requires them, reducing false positives.",
    },
    {
      title: "Synthetic validation only",
      description:
        "All metrics and records used in this case study are synthetic portfolio data and do not represent client revenue or production business results.",
    },
  ],
  heroImage: "/images/projects/flowbridge-revops-agent/flowbridge-validation.svg",
  gallery: [
    {
      image: "/images/projects/flowbridge-revops-agent/flowbridge-validation.svg",
      title: "FlowBridge Agent Design & Blind-Test Outcome",
      description:
        "Portfolio visual showing the requirements-to-validation workflow and the final blind-test totals: 16 synthetic CRM records and 24 rule-defined CRM issues.",
    },
    {
      image: "/images/projects/flowbridge-revops-agent/validation-matrix.svg",
      title: "Blind Validation Matrix",
      description:
        "Key edge cases used to validate overdue follow-up logic, authority overrides, below-minimum budget handling and Closed Won duplicate-alert suppression.",
    },
  ],
  results: [
    "Blind-tested 16 synthetic CRM records using September 20, 2026 as the audit date.",
    "Produced the expected qualification distribution: 5 hot_lead, 6 qualified, 2 needs_discovery, 1 nurture and 2 not_fit.",
    "Detected 24 rule-defined CRM issues: 2 Critical, 12 High and 10 Medium.",
    "Validated overdue-follow-up logic when task status is Open, None or blank, as long as the follow-up date is past due and not Completed.",
    "Validated influencer-authority handling: Grace Bello remained needs_discovery and received an action to identify and involve the decision maker.",
    "Validated below-minimum budget handling: Daniel Smith remained not_fit with a do-not-advance/disqualify action.",
    "Validated Closed Won duplicate-alert suppression: Ibrahim Musa received the specific Critical Closed Won amount/close-date issues without the generic Missing Deal Value alert.",
    "Preserved valid post-sale activity: Customer Onboarding after Closed Won is not automatically treated as an error.",
    "Documented one minor future refinement: closed-opportunity action wording should avoid generic 'progress opportunity' language.",
  ],
  technologies: [technologies.manus],
  metrics: [
    "16 synthetic CRM records blind-tested",
    "24 rule-defined CRM issues validated",
    "5 qualification states with explicit override precedence",
    "100-point deterministic scoring model",
    "2 Critical · 12 High · 10 Medium findings",
  ],
  stats: [
    { value: 16, suffix: " records", label: "Blind-Test Dataset" },
    { value: 24, suffix: " issues", label: "CRM Findings Validated" },
    { value: 100, suffix: " pts", label: "Deterministic Scoring Model" },
  ],
  before: [
    "Qualification logic risked being score-led rather than policy-led.",
    "Lifecycle-dependent fields could be flagged outside the stages where they are actually required.",
    "Missing tasks and overdue follow-up dates were not consistently separated.",
    "Generic and stage-specific CRM rules could create duplicate alerts.",
    "Recommended actions could ignore the final qualification override or only address the first CRM issue.",
  ],
  after: [
    "Override precedence determines final qualification before score-based conclusions.",
    "Stage-aware validation reduces false positives and preserves valid post-sale activity.",
    "Past-due follow-up dates are flagged even when the related task is None/blank, unless completed.",
    "Specific Closed Won rules suppress duplicate generic deal-value alerts.",
    "Recommended actions reflect qualification status plus every Critical or High finding.",
    "Blind testing verifies behavior independently of an embedded answer key.",
  ],
  automationImage: "/images/projects/flowbridge-revops-agent/validation-matrix.svg",
};
