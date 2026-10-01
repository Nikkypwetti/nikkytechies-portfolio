import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [

{
  slug: "asternova-salesforce-revops-system",
  title: "AsterNova Salesforce Revenue Operations System",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  platforms: [
    "Salesforce Sales Cloud",
    "n8n",
    "Google Forms",
    "Google Sheets",
    "Web-to-Lead",
  ],
  category: "Revenue Operations",

  description:
    "Built a Salesforce Revenue Systems, Sales Operations and CRM governance environment for a simulated B2B SaaS company, translating business requirements and GTM policy controls into capacity-aware Lead routing, lifecycle automation, opportunity governance, exception handling, escalation paths, reporting and structured User Acceptance Testing.",

  overview: [
    "Built in Salesforce Developer Edition using live configuration, test users and test data.",
    "Connected two inbound channels: a production-style HTML Web-to-Lead form and a Google Form → Google Sheets → n8n → Salesforce workflow.",
    "Translated simulated business requirements into Salesforce decision rules, process maps and GTM Rules of Engagement for routing, qualification, lifecycle, opportunity stages and handoffs.",
    "Kept routing, capacity, lifecycle, validation, permissions and opportunity governance centralized in Salesforce instead of duplicating CRM logic in n8n.",
    "Implemented capacity-aware territory routing, enterprise qualification, least-loaded owner selection, inbound-queue exception handling, Nurture and Qualified lifecycle automation, proposal controls, manager escalation, Closed Won handoff and Closed Lost governance.",
    "Added Salesforce Data Governance with baseline Lead import, exact-email duplicate detection, controlled duplicate review and merge, Lead data-quality reporting, a CRM data dictionary and a sales user guide for system adoption.",
    "Built 11 Salesforce reports covering pipeline, Closed Won revenue, losses, tasks, Lead data quality, Lead conversion, pipeline aging, probability-weighted forecast and rep performance.",
    "Expanded the formal UAT matrix to 41 passed scenarios: 37 live tests and 4 Salesforce Flow Debug validations.",
  ],

  problem:
    "AsterNova needed a governed Revenue Systems operating model that could translate simulated business requirements into clear GTM Rules of Engagement for multi-source inbound leads, territory and capacity-based ownership, enterprise eligibility, qualification handoff, opportunity-stage governance, least-privilege sales access and management reporting. The system also needed explicit exception handling when no rep was eligible, an escalation path for high-value opportunities and auditable integration without moving core business logic outside Salesforce.",

  solution:
    "Mapped the Lead-to-Closed-Won process, defined decision rules and configured Salesforce Sales Cloud with custom fields, a private sharing model, role hierarchy, profiles, additive permission sets, validation rules, record-triggered and autolaunched Flows, capacity-aware Lead routing, Lead conversion field mapping, proposal follow-up, Closed Won onboarding and Closed Lost controls. Added Salesforce Data Governance through Lead import, exact-email matching and duplicate warnings, controlled duplicate cleanup and data-quality reporting. Created a CRM data dictionary, sales user guide, GTM Rules of Engagement matrix and requirements-to-UAT traceability documentation to support system adoption. Built 11 supporting reports plus a reconciled Sales & Revenue Operations dashboard, while Google Forms, Google Sheets and n8n provide the external intake layer and Salesforce remains the system of record.",

  architecture: [
    "Production-style HTML form → Salesforce Web-to-Lead",
    "Google Form → Google Sheets → n8n validation and normalization → Salesforce Web-to-Lead",
    "Business requirements → process mapping → Salesforce GTM decision rules",
    "Salesforce Lead → Enterprise or Standard routing decision",
    "Rules of Engagement checks: active, available, has capacity, territory match and enterprise qualification",
    "Least-loaded eligible rep assignment with AsterNova Inbound Queue exception path",
    "Lead lifecycle: New → Working → Qualified / Nurture / Disqualified",
    "Lead duplicate and data-quality governance: exact-email warning → review / merge → quality cleanup",
    "Qualified → Account + Contact + Opportunity through Salesforce standard conversion",
    "Opportunity lifecycle: Discovery → Technical Review → Proposal Sent → Negotiation → Closed Won / Closed Lost",
    "Private sharing + role hierarchy + profiles + permission sets",
    "AsterNova reporting layer: pipeline, conversion, aging, forecast, rep performance, data quality and dashboard views",
  ],

  workflow: [
    "Inbound Lead Capture",
    "Validate and Normalize External Data",
    "Create Salesforce Lead",
    "Check Duplicate / Data Quality Controls",
    "Evaluate Territory, Availability and Capacity",
    "Assign Eligible Rep or Inbound Queue",
    "Work Lead",
    "Nurture Follow-Up or Qualified Conversion",
    "Create Account, Contact and Opportunity",
    "Progress Opportunity",
    "Proposal Follow-Up and High-Value Escalation",
    "Closed Won Onboarding or Closed Lost Governance",
    "Report and Review",
    "Requirements-to-UAT Traceability Review",
  ],

  governance: [
    {
      title: "Business Requirements & Process Mapping",
      description:
        "Translated the simulated B2B SaaS operating requirements into a documented Lead-to-Closed-Won process map covering intake, routing, qualification, conversion, opportunity progression, handoff and reporting.",
    },
    {
      title: "GTM Policy & Rules of Engagement",
      description:
        "Converted simulated GTM policy into explicit Salesforce decision rules for territory, enterprise eligibility, rep availability, capacity, least-loaded assignment, qualification and stage progression.",
    },
    {
      title: "Capacity-Based Routing & Exception Handling",
      description:
        "Routes Leads only to eligible reps with available capacity and sends no-eligible-rep cases to the AsterNova Inbound Queue so exceptions remain visible instead of being silently misrouted.",
    },
    {
      title: "Escalation Path & Opportunity Controls",
      description:
        "Scheduled Proposal Sent follow-up creates owner tasks and escalates qualifying high-value opportunities to the owner's manager, while validation rules control required commercial data at key stages.",
    },
    {
      title: "Salesforce Data Governance",
      description:
        "Uses controlled imports, exact-email Matching and Duplicate Rules, validation rules, role-based access, permission sets, data-quality reporting and structured duplicate review and merge.",
    },
    {
      title: "User Acceptance Testing",
      description:
        "Maintained a formal UAT register with 41 passed scenarios: 37 validated live and 4 scheduled-path scenarios validated with Salesforce Flow Debug.",
    },
    {
      title: "System Adoption & User Documentation",
      description:
        "Created a CRM data dictionary, sales user guide, governance matrix and requirements-to-UAT traceability artifacts so users can understand fields, ownership rules, exceptions and expected process behavior.",
    },
  ],

  interviewTalkingPoints: [
    {
      question: "Give me the 30-second overview.",
      answer:
        "I built a production-style Salesforce Revenue Operations system for a simulated B2B SaaS company. I translated sales and GTM requirements into governed lead routing, capacity controls, lifecycle automation, opportunity-stage rules, data-quality controls, reporting and UAT. The key design choice was to keep the core sales rules in Salesforce while using n8n only for external intake, so the CRM remained the system of record.",
    },
    {
      question: "What business problem were you solving?",
      answer:
        "The problem was not simply capturing leads. The sales process needed consistent ownership, capacity-aware routing, qualification rules, clean conversion into opportunities, stage governance, manager escalation and trustworthy reporting. I designed the system so exceptions such as no eligible rep, duplicate records or missing commercial data stay visible instead of being silently ignored.",
    },
    {
      question: "What did you personally own?",
      answer:
        "I owned the requirements translation, process mapping, Salesforce configuration, routing and lifecycle logic, role and permission design, validation rules, n8n intake integration, data-quality controls, reports, dashboard, documentation and the UAT matrix. I also tested both normal paths and exception paths so the case study shows how the system behaves when conditions are not ideal.",
    },
    {
      question: "How did the capacity-aware routing work?",
      answer:
        "A lead is evaluated against territory, availability, active workload, capacity and enterprise eligibility. The system selects the least-loaded eligible rep. If nobody qualifies, the lead is sent to the inbound queue so Sales Ops can see and resolve the exception instead of overloading a rep or losing the lead.",
    },
    {
      question: "How did you handle CRM data quality?",
      answer:
        "I combined required-field controls, validation rules, exact-email duplicate detection, controlled duplicate review and merge, data-quality reporting and a documented field dictionary. I also tested imports and post-cleanup reporting so data governance was part of the operating process rather than a one-time cleanup task.",
    },
    {
      question: "How did you validate the system?",
      answer:
        "I maintained a formal UAT register with 41 passed scenarios: 37 live tests and 4 scheduled-path validations using Salesforce Flow Debug. The tests covered routing, queue fallback, lifecycle changes, capacity recalculation, conversion, proposal follow-up, Closed Won and Closed Lost controls, security visibility and reporting reconciliation.",
    },
    {
      question: "Why is this relevant to a Revenue Operations or CRM role?",
      answer:
        "The project demonstrates the work behind a reliable sales system: translating business rules into CRM configuration, designing ownership and lifecycle controls, improving data quality, supporting sales users, building management reporting and validating the process end to end. The automation is part of the solution, but the main focus is the operating model and CRM governance.",
    },
  ],

  automation: [
    {
      title: "Capacity-Aware Lead Routing",
      description:
        "Routes Enterprise and Standard Leads using territory, availability, capacity and enterprise-qualification checks, selecting the least-loaded eligible rep and falling back to the inbound queue.",
      icon: "crm",
    },
    {
      title: "Active Lead Capacity Maintenance",
      description:
        "Recalculates current and previous owners when Lead ownership or lifecycle changes affect active workload.",
      icon: "database",
    },
    {
      title: "External Lead Intake",
      description:
        "Google Forms and Google Sheets feed n8n, which prevents reprocessing, validates required data, normalizes fields and submits Leads to Salesforce Web-to-Lead.",
      icon: "form",
    },
    {
      title: "Nurture Follow-Up",
      description:
        "When a Lead enters Nurture, Salesforce stamps a 30-day follow-up date and creates an owner-assigned re-engagement task.",
      icon: "crm",
    },
    {
      title: "Qualified Conversion Prep",
      description:
        "When a Lead enters Qualified, Salesforce creates a high-priority conversion task while preserving human control over Account and Contact matching.",
      icon: "crm",
    },
    {
      title: "Proposal Follow-Up",
      description:
        "A scheduled path checks Proposal Sent deals after three days, creates a follow-up task and escalates high-value opportunities to the owner's manager.",
      icon: "workspace",
    },
    {
      title: "Closed Won Handoff",
      description:
        "Stamps Won Date and creates structured onboarding tasks for the Opportunity owner and assigned Customer Success Owner.",
      icon: "workspace",
    },
    {
      title: "Closed Lost Governance",
      description:
        "Requires Lost Reason and automatically stamps Lost Date for structured loss analysis.",
      icon: "database",
    },
    {
      title: "CRM Data Governance",
      description:
        "Uses baseline import, exact-email matching and duplicate warnings, controlled duplicate merge, and a Lead data-quality report to detect, clean and revalidate CRM records.",
      icon: "database",
    },
  ],

  gallery: [],

  results: [
    "Completed 41 documented UAT scenarios with 41 passed and 0 failed",
    "Validated 37 scenarios live and 4 scheduled-path scenarios with Salesforce Flow Debug",
    "Proved both eligible-rep assignment and inbound-queue fallback",
    "Verified user-to-queue, queue-to-user and lifecycle-driven capacity recalculation",
    "Connected Google Forms, Google Sheets and n8n to Salesforce with validation and sync-status tracking",
    "Validated direct website Web-to-Lead intake and Account Executive routing",
    "Validated baseline Lead import, exact-email duplicate warning, controlled duplicate cleanup and post-cleanup data quality",
    "Mapped Lead Primary Need into the converted Opportunity",
    "Verified Nurture follow-up, Qualified conversion prep, Closed Won handoff and Closed Lost date stamping",
    "Confirmed manager visibility and lower-role restrictions under private sharing",
    "Reconciled $40K Discovery plus $25K Proposal Sent to $65K simulated open pipeline",
    "Verified a $23K probability-weighted Expected Revenue forecast from the $65K simulated open pipeline",
    "Built 11 Salesforce reports, including Lead Conversion, Pipeline Aging, Sales Forecast and Rep Performance reporting",
    "Documented GTM Rules of Engagement, Revenue Systems business requirements and requirements-to-UAT traceability",
    "Created user-facing CRM documentation to support consistent system adoption and process execution",
  ],

  documentation: [
    {
      title: "GTM Rules of Engagement & Salesforce Governance Matrix",
      description:
        "Maps ownership, routing, qualification, exception, escalation, lifecycle and opportunity-stage rules to the Salesforce control that enforces each rule.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/asternova-salesforce-revops-system/gtm-rules-of-engagement.md",
      status: "Completed",
    },
    {
      title: "Revenue Systems Business Requirements",
      description:
        "Defines the simulated business requirements, rationale, Salesforce implementation approach, exception behavior and validation expectations for the AsterNova Revenue Systems build.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/asternova-salesforce-revops-system/revenue-systems-business-requirements.md",
      status: "Completed",
    },
    {
      title: "Requirements-to-UAT Traceability",
      description:
        "Connects key business requirements to implementation controls and the UAT evidence used to validate routing, governance, lifecycle, permissions and reporting behavior.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/asternova-salesforce-revops-system/uat-requirements-traceability.md",
      status: "Completed",
    },
    {
      title: "Source Attribution Reporting Extension",
      description:
        "Design specification for connecting Lead Source to conversion, pipeline and Closed Won reporting. This extension is documented as planned and is not presented as implemented evidence.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/asternova-salesforce-revops-system/source-attribution-reporting-design.md",
      status: "Planned",
    },
  ],

  technologies: [
    technologies.salesforce,
    technologies.n8n,
    technologies.googleForms,
    technologies.googleSheets,
  ],

  metrics: [
    "41 documented UAT scenarios passed",
    "37 live + 4 Flow Debug tests",
    "2 inbound Lead capture channels validated",
    "$65K simulated open pipeline reconciled",
    "$23K simulated probability-weighted Expected Revenue",
    "$75K simulated Closed Won revenue reporting",
    "11 AsterNova Salesforce reports",
  ],

  stats: [
    {
      value: 41,
      suffix: " UAT",
      label: "Documented Scenarios Passed",
    },
    {
      value: 2,
      suffix: " channels",
      label: "Inbound Lead Capture",
    },
    {
      value: 11,
      suffix: " reports",
      label: "Sales & RevOps Reporting",
    },
  ],

  before: [
    "Inbound Lead handling depended on manual entry or disconnected intake sources",
    "No capacity-aware routing model for balancing eligible sales reps",
    "No explicit enterprise qualification or queue fallback behavior",
    "Qualification context could be lost between Lead and Opportunity",
    "Late-stage opportunities could advance without required commercial data",
    "Sales and manager permissions were not yet structured around least privilege",
    "Pipeline reporting could be contaminated by unrelated Salesforce sample data",
    "No documented duplicate-control and data-quality cleanup loop for imported Lead records",
    "No dedicated conversion, aging, weighted forecast or rep-performance reporting",
    "Business requirements, GTM rules and test evidence were not yet connected through a formal governance and traceability layer",
  ],

  after: [
    "Two tested inbound channels feed Salesforce while CRM logic remains centralized",
    "Enterprise and Standard Leads route by eligibility, territory and active workload",
    "No-eligible-rep scenarios fall back safely to the AsterNova Inbound Queue",
    "Nurture and Qualified lifecycle paths create controlled follow-up work",
    "Primary Need survives Lead conversion into the Opportunity",
    "Proposal, Closed Won and Closed Lost stages have explicit validation and automation controls",
    "Private sharing, role hierarchy and additive permission sets enforce least privilege",
    "Exact-email duplicate detection, controlled merge and data-quality cleanup add CRM governance controls",
    "Lead Conversion, Pipeline Aging, Sales Forecast and Rep Performance reports extend the reporting layer",
    "AsterNova-only reports and dashboard reconcile to the underlying test data",
    "Business requirements, Rules of Engagement, Salesforce controls and UAT evidence are documented in a traceable governance layer",
    "CRM data dictionary and sales user guide support consistent system adoption and process execution",
  ],

  heroImage: "/images/projects/asternova/01-dashboard-overview.webp",
  automationImage: "/images/projects/asternova/03-n8n-inbound-workflow.webp",
  github: "https://github.com/Nikkypwetti/nikkytechies-portfolio/tree/main/docs/asternova-salesforce-revops-system",
  demo: "",
},


{
  slug: "revenue-intelligence-production-simulation",
  title: "Revenue Intelligence Production Simulation — Lumora Cloud",
  year: "2026",
  type: "Portfolio",
  category: "Revenue Operations",

  description:
    "Built a production-style Revenue Operations intelligence simulation for the fictional B2B SaaS company Lumora Cloud, connecting CRM, marketing, billing and planning data to governed reporting, resilient n8n orchestration and Power BI executive dashboards.",

  overview: [
    "Designed a production-style Revenue Operations and Business Systems environment for a fictional B2B SaaS company.",
    "Synchronized 10 CRM, marketing, billing and planning entities through reusable incremental n8n workflows.",
    "Used composite checkpoints based on source_updated_at plus primary key so syncs can resume safely and replay idempotently.",
    "Separated source read, ingestion write, transformation, reporting read and governance permissions with dedicated PostgreSQL roles.",
    "Connected the reporting layer to the governed AI Revenue Intelligence Agent for manager questions through Slack, Form and REST API.",
    "Built four verified Power BI pages covering executive revenue, pipeline performance, Revenue Operations health, and Sales Forecasting & GTM Metrics.",
    "Lumora Cloud is fictional and all figures shown are verified simulation outputs rather than client results.",
  ],

  problem:
    "Revenue teams often rely on disconnected CRM, billing, marketing and planning data. That fragmentation can create stale pipeline views, inconsistent reporting, weak data quality, repeated manual exports and risky automation patterns that are difficult to recover when a sync fails.",

  solution:
    "Built a controlled production simulation with separate source-system and warehouse databases, incremental composite-cursor synchronization, checkpoint ownership, idempotent upserts, failure recovery, transactional reporting refresh, least-privilege PostgreSQL roles and a governed management-reporting layer. Power BI consumes a governed reporting snapshot rather than raw operational tables.",

  architecture: [
    "Lumora CRM, marketing, billing and planning source systems",
    "Read-only source-system access",
    "n8n incremental multi-entity synchronization",
    "Composite cursor: source_updated_at plus primary key",
    "Owner-aware checkpoints and recovery controls",
    "PostgreSQL raw ingestion layer",
    "Fixed transactional reporting transformation",
    "Governed reporting schema",
    "AI Revenue Intelligence manager-request layer",
    "Slack, authenticated Form and REST API delivery",
    "Power BI executive, Revenue Operations, forecasting and GTM dashboards",
  ],

  workflow: [
    "Source Systems",
    "Approved Entity Batch",
    "Load Composite Checkpoint",
    "Claim Checkpoint",
    "Extract Changed Rows",
    "Idempotent Raw Upsert",
    "Advance or Release Checkpoint",
    "Verify Batch Completion",
    "Refresh Reporting Once",
    "Reporting RO Verification",
    "Governed Revenue Intelligence",
    "Power BI / Slack / Form / API",
  ],

  automation: [
    {
      title: "Multi-Entity Orchestrator",
      description:
        "A parent n8n workflow processes an approved batch of 10 source entities and waits for each reusable worker execution to complete.",
      icon: "workspace",
    },
    {
      title: "Composite Checkpoint",
      description:
        "Each entity tracks source_updated_at plus its primary key so equal-timestamp records are processed deterministically.",
      icon: "database",
    },
    {
      title: "Read-Only Extraction",
      description:
        "Dedicated source credentials can read approved operational schemas but cannot modify the simulated source systems.",
      icon: "database",
    },
    {
      title: "Idempotent Upsert",
      description:
        "Changed records are written to raw warehouse tables before the authoritative checkpoint can advance.",
      icon: "database",
    },
    {
      title: "Failure Recovery",
      description:
        "Checkpoint ownership, run metadata and recovery logic prevent abandoned running states and support deterministic replay.",
      icon: "workspace",
    },
    {
      title: "Reporting Refresh",
      description:
        "A fixed SECURITY DEFINER transformation procedure refreshes governed reporting without granting broad table-write privileges to n8n.",
      icon: "database",
    },
    {
      title: "Governed AI Reporting",
      description:
        "AI interprets manager intent while deterministic controls authorize metrics and approved SQL templates.",
      icon: "bot",
    },
    {
      title: "Power BI Management View",
      description:
        "Four verified dashboard pages convert the governed reporting snapshot into executive, pipeline, operations-health, forecasting and GTM decision views.",
      icon: "sheet",
    },
  ],

  heroImage:
    "/images/projects/lumora/01-executive-revenue-overview.png",

  automationImage:
    "/images/projects/lumora/02-pipeline-sales-performance.png",

  gallery: [
    {
      image: "/images/projects/lumora/01-executive-revenue-overview.png",
      title: "Executive Revenue Overview",
      description:
        "Power BI executive view showing simulated Closed Won Revenue of $3.31M, Open Pipeline of $2.90M, 190 open deals and a 54.9% win rate.",
    },
    {
      image: "/images/projects/lumora/02-pipeline-sales-performance.png",
      title: "Pipeline & Sales Performance",
      description:
        "Pipeline analysis by stage, sales representative and expected close month, with 45 stale open deals identified for action.",
    },
    {
      image: "/images/projects/lumora/03-revenue-operations-health.png",
      title: "Revenue Operations Health",
      description:
        "Operational health dashboard surfacing 45 stale deals, 114 overdue follow-ups, 72 SLA breaches and 185 closed-lost deals.",
    },
  ],

  results: [
    "Generalized one production callable entity worker across 10 approved source entities",
    "Verified full multi-entity orchestration with all checkpoints released and no active runs remaining",
    "Kept source read, ingestion write, transformation and reporting-read permissions separated",
    "Preserved reporting consistency with a single refresh after the full entity batch",
    "Connected governed reporting to Slack, Form and REST API manager-request channels",
    "Built four verified Power BI pages from the governed reporting snapshot, including Sales Forecasting & GTM Metrics",
    "Published six canonical n8n workflow exports with a clean secret-pattern scan",
    "Documented the simulation explicitly so verified figures are not presented as client outcomes",
  ],

  technologies: [
    technologies.n8n,
    technologies.postgresql,
    technologies.powerbi,
    technologies.docker,
    technologies.groq,
    technologies.slack,
  ],

  metrics: [
    "10 source entities synchronized",
    "600 simulated deals",
    "$3.31M simulated closed-won revenue",
    "$2.90M simulated open pipeline",
    "190 simulated open deals",
    "54.9% simulated historical win rate",
    "$1.35M simulated weighted open pipeline",
    "96.1% August 2026 forecast attainment",
    "1.83x August 2026 pipeline coverage",
    "45 stale open deals identified",
    "114 overdue follow-ups identified",
    "72 SLA breaches identified",
  ],

  stats: [
    {
      value: 10,
      suffix: " entities",
      label: "Incremental Source Sync",
    },
    {
      value: 600,
      suffix: " deals",
      label: "Simulated Revenue Dataset",
    },
    {
      value: 4,
      suffix: " pages",
      label: "Verified Power BI Dashboard",
    },
  ],

  before: [
    "Revenue data split across CRM, marketing, billing and planning systems",
    "Manual or disconnected management reporting",
    "No reusable incremental sync contract across source entities",
    "Weak recovery when an ingestion run fails after claiming work",
    "Broad database permissions can blur source, ingestion and reporting responsibilities",
    "Operational risks such as stale deals and overdue follow-ups are hard to prioritize",
  ],

  after: [
    "10 source entities processed through a reusable governed sync design",
    "Composite checkpoints support safe incremental extraction and deterministic replay",
    "Raw persistence is verified before checkpoint advancement",
    "Failure recovery releases abandoned ownership and preserves authoritative cursors",
    "Least-privilege PostgreSQL roles separate operational responsibilities",
    "Governed reporting feeds manager requests and Power BI decision views",
    "Revenue Operations health metrics expose stale pipeline, overdue follow-ups and SLA breaches",
    "Sales Forecasting & GTM metrics add weighted pipeline, forecast attainment, pipeline coverage, stage conversion and rep-level forecasting",
  ],

  github:
    "https://github.com/Nikkypwetti/lumora-revenue-intelligence-simulation",

  demo: "",
},



{
  slug: "ai-revenue-intelligence-reporting-agent",
  title: "AI Revenue Intelligence & Revenue Systems Agent V2",
  year: "2026",
  type: "Portfolio",
  status: "In Progress",
  category: "Revenue Operations",

  platforms: [
    "n8n",
    "PostgreSQL",
    "Docker",
    "Groq",
    "HubSpot",
    "Salesforce",
    "Airtable",
    "Gmail",
    "Slack",
  ],

  description:
    "Designed and implemented a production-style Revenue Intelligence and Revenue Systems platform that turns manager questions into governed KPI answers, unifies CRM data through reusable adapters, enforces identity and least-privilege controls, delivers reports through trusted channels, and exposes live reliability and connector health through a read-only Control Center.",

  recruiterSummary: {
    headline:
      "End-to-end Revenue Systems ownership: CRM integration, KPI governance, AI-assisted reporting, security, reliability and operational handover.",
    valueProposition:
      "This project demonstrates how I approach Revenue Operations and Business Systems work beyond basic automation. I translated management reporting needs into a reusable operating architecture, separated AI interpretation from business authority, normalized CRM data into a controlled reporting model, added access controls and failure handling, validated the system with live integrations, and documented it for handover. The result is a working local production-style platform rather than a standalone chatbot or one-off n8n workflow.",
    ownership: [
      "Defined the business problem, reporting requirements, KPI governance model and reusable per-client architecture.",
      "Designed and built the Agent V2 workflows in n8n, the PostgreSQL governance/reporting layer, Docker deployment and operational Control Center.",
      "Implemented identity binding, role/data-scope authorization, approved KPI/query controls and least-privilege database boundaries.",
      "Integrated and validated Groq, HubSpot, Gmail and authenticated REST ingestion; built guarded Salesforce and Airtable adapters for controlled activation.",
      "Implemented retries, circuit breakers, dead letters, observability, audit traceability, deployment guards and CI verification.",
      "Ran live tests, investigated incidents, recovered degraded runtime state, documented handover procedures and preserved evidence for recruiter/client review.",
    ],
    liveProof: [
      "Live Control Center reached HEALTHY with 37 governed KPI contracts, 6 active managed components, 0 open dead letters and 0 recent failures.",
      "A live authenticated manager question returned governed open pipeline of $1,200 USD; the same fact was delivered successfully through Gmail.",
      "Groq executed both structured reporting-intent interpretation and grounded management-summary generation without controlling SQL or authorization.",
      "Unauthenticated report requests return HTTP 403, and a caller-supplied fake admin identity was overwritten by the server-bound service:report-api principal.",
      "The active read-only HubSpot adapter feeds canonical reporting data; current evidence shows 3 HubSpot deal rows in the governed reporting layer.",
      "Salesforce, Airtable and Slack remain intentionally safe-disabled until their least-privilege/client activation conditions are satisfied.",
    ],
    roleFit: [
      "Revenue Operations",
      "Revenue Systems",
      "CRM Operations",
      "Business Systems",
      "Sales Operations",
      "GTM Operations",
      "Workflow Automation",
    ],
  },

  overview: [
    "Re-architected the original Revenue Intelligence workflow into a reusable Agent V2 with isolated local deployment, modular sub-workflows, PostgreSQL governance and explicit security boundaries.",
    "Implemented a governed Revenue Question Pack with 37 KPI contracts across pipeline, revenue, forecast, velocity, performance, activity/SLA, CRM quality, funnel and retention use cases.",
    "Activated a dedicated Groq intelligence adapter for structured intent interpretation and grounded management summaries while preserving deterministic fallback when the model is unavailable or returns invalid output.",
    "Enforced identity, role, KPI, dimension, filter and data-scope authorization before report execution, with own, department and all-business access models.",
    "Validated governed Gmail delivery end to end, including trusted server-side recipient resolution, audit events, request/correlation traceability and healthy delivery/reporting circuits.",
    "Validated a live read-only HubSpot source and added guarded Salesforce and Airtable Opportunity adapters that remain fail-closed until their client-specific activation checks pass.",
    "Implemented retries, circuit breakers, dead-letter handling, observability snapshots, bounded alerts, backup/recovery controls, upgrade/rollback tooling and static CI verification.",
    "Added a local read-only Control Center that surfaces KPI count, CRM connector state, runtime health, circuit status, failures, dead letters and observability alerts without exposing mutation controls.",
    "Passed the complete chained local regression covering runtime isolation, database security, semantic governance, identity/RBAC, REST ingestion, scheduled intelligence, reliability, observability and deployment health.",
  ],

  problem:
    "Revenue and operations managers need fast answers about pipeline, revenue, sales performance, CRM quality and follow-up risk, but ad-hoc reporting and unrestricted AI-to-database patterns create inconsistent KPI definitions, weak authorization, unsafe SQL generation, fragmented CRM data, poor failure recovery and limited operational visibility.",

  solution:
    "Built Agent V2 as a governed reporting and Revenue Systems platform. AI is limited to interpreting the business question and summarizing already-approved facts; deterministic PostgreSQL functions, KPI policies, RBAC and query templates decide what can execute. CRM adapters normalize source records into a canonical contract, reliability controls protect repeated failures, delivery adapters resolve trusted destinations server-side, and a local read-only Control Center presents operational state without creating a privileged browser administration path.",

  architecture: [
    "Manager request through authenticated API, Slack, Gmail delivery path or SSO-ready manager form",
    "Server-bound caller identity and tenant-aware principal resolution",
    "Groq structured-intent adapter with deterministic fallback",
    "37-KPI semantic catalogue with governed dimensions, filters, periods and data-domain readiness",
    "RBAC and own / department / all-business data-scope authorization",
    "Approved deterministic query templates and bounded PostgreSQL execution",
    "Canonical CRM deal contract shared by HubSpot, Salesforce, Airtable and REST ingestion",
    "Dedicated Reporting Reader, Connector Writer and Audit Writer database boundaries",
    "Management-summary and KPI-card / table / chart presentation layer",
    "Governed Gmail and Slack delivery adapters with server-side destination policy",
    "Reliability core: bounded retry, circuit breaker, dead letter and idempotent audit handling",
    "Observability core: component status, runtime status, alert-ready rows and snapshot history",
    "Local read-only Control Center for runtime, connectors, KPI coverage and alert visibility",
    "Docker-isolated Agent V2 runtime on port 5681, separated from the protected legacy n8n environment",
  ],

  workflow: [
    "Receive Manager Question",
    "Bind Authenticated Principal",
    "Interpret Structured Intent",
    "Validate KPI / Dimension / Filter / Period",
    "Authorize Role & Data Scope",
    "Execute Approved Governed Metric",
    "Build Grounded Management Summary",
    "Create KPI Card / Table / Chart Artifact",
    "Route API / Slack / Gmail Delivery",
    "Write Bounded Audit Events",
    "Observe Reliability / Circuit / Dead-Letter State",
    "Inspect System Through Local Control Center",
  ],

  governance: [
    {
      title: "AI / Authorization Separation",
      description:
        "The model can interpret intent and summarize governed facts, but it cannot choose credentials, roles, SQL, tables, tenants, recipients or authorization outcomes.",
    },
    {
      title: "37-KPI Semantic Governance",
      description:
        "Approved KPI definitions, dimensions, filters, formulas, periods and query mappings are resolved deterministically before any reporting query executes.",
    },
    {
      title: "Least-Privilege Database Roles",
      description:
        "Reporting Reader, Connector Writer and Audit Writer responsibilities are separated so no runtime credential receives unrestricted reporting and governance authority.",
    },
    {
      title: "Fail-Closed CRM Activation",
      description:
        "HubSpot, Salesforce and Airtable use reusable source-neutral contracts, explicit activation gates and connector-specific validation rather than assuming every client CRM is ready.",
    },
    {
      title: "Reliability & Incident Controls",
      description:
        "Bounded retries, circuit breakers, dead-letter persistence, conflict-safe audit writes and alert-ready observability surfaces make failure behavior visible and recoverable.",
    },
    {
      title: "Read-Only Control Center",
      description:
        "The local dashboard uses Reporting RO only and exposes operational state without browser-side workflow mutation, credential access, arbitrary SQL or connector-write authority.",
    },
    {
      title: "Deployment Isolation & Change Control",
      description:
        "Agent V2 is isolated from the protected legacy n8n deployment, uses explicit deployment confirmations and is covered by static GitHub Actions verification before merge.",
    },
  ],

  automation: [
    {
      title: "Governed Manager Request",
      description:
        "Authenticated manager questions enter one reusable Agent Core where identity and scope are bound before AI interpretation.",
      icon: "form",
    },
    {
      title: "Groq Intent & Summary Adapter",
      description:
        "Dedicated AI sub-workflow interprets structured reporting intent and summarizes approved facts with deterministic fallback on provider failure.",
      icon: "bot",
    },
    {
      title: "Semantic KPI Authorization",
      description:
        "The system validates 37 approved KPIs, dimensions, filters and data readiness before resolving a deterministic query path.",
      icon: "database",
    },
    {
      title: "CRM Source Adapters",
      description:
        "HubSpot, Salesforce, Airtable and REST paths normalize source records into one canonical deal contract with governed stage mapping and cursor controls.",
      icon: "crm",
    },
    {
      title: "Governed Multi-Channel Delivery",
      description:
        "Reports can return through API, Slack or Gmail while destinations and recipients remain server-controlled rather than caller- or AI-controlled.",
      icon: "email",
    },
    {
      title: "Reliability & Observability",
      description:
        "Retries, circuits, dead letters, runtime snapshots and bounded alerts provide operational resilience and failure visibility.",
      icon: "workspace",
    },
    {
      title: "Local Operations Control Center",
      description:
        "A read-only dashboard presents business configuration, KPI coverage, connector state, component health and active alerts from governed PostgreSQL surfaces.",
      icon: "workspace",
    },
    {
      title: "Backup / Upgrade / Rollback Tooling",
      description:
        "Guarded scripts support verified backups, restore drills, PostgreSQL upgrade rehearsal, immutable-image checkpoints and rollback validation.",
      icon: "database",
    },
  ],

  heroImage:
    "/images/projects/revenue-intelligence/revint-system-architecture.png",

  automationImage:
    "/images/projects/revenue-intelligence/revint-01-main-orchestrator-overview.webp",

  gallery: [
    {
      image:
        "/images/projects/revenue-intelligence/revint-system-architecture.png",
      title: "Governed Revenue Intelligence Architecture",
      description:
        "Architecture showing structured AI interpretation, KPI governance, approved execution, database security boundaries, delivery, observability and centralized reliability controls.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-02-approved-api-report.png",
      title: "Approved API Revenue Report",
      description:
        "Verified governed API request returning an approved KPI result after identity, semantic and query controls.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-03-safe-rejection.png",
      title: "Safe Unsupported-Request Rejection",
      description:
        "Unsupported reporting intent is rejected safely rather than becoming unrestricted SQL or an unauthorized database operation.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-09-audit-traceability.png",
      title: "Request Audit Traceability",
      description:
        "A governed request traced through request, execution and delivery stages using consistent request and correlation identifiers.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-10-error-handler.png",
      title: "Centralized Error Handler",
      description:
        "Reliability workflow for error normalization, retry policy, circuit handling, dead-letter persistence, escalation and final auditing.",
    },
  ],

  results: [
    "Expanded the governed reporting catalogue from the original 12 metrics to 37 KPI contracts across nine Revenue Operations packs",
    "Validated live Groq intent interpretation and management-summary generation with deterministic fail-soft fallback",
    "Completed a real Agent Core → governed KPI → Gmail delivery → audit → reliability end-to-end production test",
    "Validated a live read-only HubSpot connector and documented real source-data quality exceptions rather than treating missing values as zero",
    "Implemented guarded Salesforce and Airtable Opportunity adapters with dedicated credential boundaries and fail-closed activation",
    "Passed the full local regression chain covering runtime isolation, database security, semantic governance, RBAC, REST ingestion, scheduled intelligence, reliability and observability",
    "Preserved protected legacy n8n on port 5678 while Agent V2 runs in an isolated Docker deployment on port 5681",
    "Validated the live read-only Control Center in HEALTHY state with 37 governed KPIs, 6 active managed components, 0 open dead letters, 0 recent failures, HubSpot/REST active, and Salesforce/Airtable safely disabled",
    "Added GitHub Actions static verification for connector contracts, deployment guards, JSON validity, shell syntax and secret-like committed files",
    "Documented reusable implementation, security, CRM rollout, handover and local production-hardening procedures for future client deployments",
  ],

  documentation: [
    {
      title: "Revenue Question Pack V2",
      description:
        "Documents the 37 governed KPI contracts, reusable data domains, supported reporting modes and data-readiness rules.",
      href: "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent/blob/main/docs/revenue-question-pack-v2.md",
      status: "Completed",
    },
    {
      title: "Reusable Security Gateway",
      description:
        "Documents caller identity binding, SSO/service-principal boundaries, edge controls and reusable security assumptions.",
      href: "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent/blob/main/docs/security-gateway.md",
      status: "Completed",
    },
    {
      title: "Local Control Dashboard",
      description:
        "Documents the read-only Agent V2 operations Control Center, its data surfaces, deployment guard and public-exposure restrictions.",
      href: "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent/blob/main/docs/control-dashboard-v2.md",
      status: "Completed",
    },
    {
      title: "First Client Implementation",
      description:
        "Maps the reusable Agent V2 core to the real HubSpot, AsterNova Salesforce and Airtable client stack with explicit source and activation boundaries.",
      href: "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent/blob/main/docs/first-client-implementation.md",
      status: "Completed",
    },
    {
      title: "Local Production Hardening",
      description:
        "Covers PostgreSQL upgrade rehearsal, bounded load testing, encrypted off-device backup strategy and local production-readiness criteria.",
      href: "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent/blob/main/docs/local-production-hardening.md",
      status: "Completed",
    },
    {
      title: "Recruiter & Interview Guide",
      description:
        "A recruiter-facing explanation of the business problem, architecture, personal ownership, live proof, interview story, design trade-offs and next-step client implementation plan.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-revenue-intelligence-agent-v2/recruiter-interview-guide.md",
      status: "Completed",
    },
  ],

  technologies: [
    technologies.n8n,
    technologies.postgresql,
    technologies.docker,
    technologies.groq,
    technologies.hubspot,
    technologies.salesforce,
    technologies.airtable,
    technologies.gmail,
    technologies.slack,
    technologies.powerbi,
  ],

  metrics: [
    "37 governed KPI contracts",
    "Full chained local regression passed",
    "Governed Gmail end-to-end delivery verified",
    "Live read-only HubSpot source validated",
    "3 reusable CRM adapter paths",
    "2 governed AI functions: intent + summary",
    "Live Control Center: HEALTHY · 6 managed components · 0 dead letters",
  ],

  stats: [
    {
      value: 37,
      suffix: " KPIs",
      label: "Governed Revenue Metrics",
    },
    {
      value: 3,
      suffix: " CRM paths",
      label: "Reusable Source Adapters",
    },
    {
      value: 2,
      suffix: " AI modes",
      label: "Intent & Grounded Summary",
    },
  ],

  before: [
    "Manager reporting depended on ad-hoc queries, scattered dashboards or manual CRM interpretation",
    "The original large workflow concentrated too many responsibilities in one reporting orchestration",
    "AI-to-database designs risked arbitrary SQL, unsupported metrics and weak authorization boundaries",
    "CRM-specific field and stage differences could leak directly into reporting logic",
    "Missing data could be misread as zero without explicit data-readiness policy",
    "Failures lacked a unified retry, circuit, dead-letter and observability model",
    "Delivery destinations could become tightly coupled to workflow logic",
    "Operational state was distributed across n8n, PostgreSQL and connector configuration with no single read-only control surface",
  ],

  after: [
    "Agent V2 separates identity, AI interpretation, semantic authorization, execution, presentation, delivery, reliability and observability into reusable governed layers",
    "Thirty-seven KPI contracts provide one controlled semantic reporting layer across nine Revenue Operations packs",
    "AI interprets and summarizes, while deterministic controls authorize every executable reporting path",
    "HubSpot, Salesforce, Airtable and REST ingestion map into a shared canonical deal contract instead of CRM-specific KPI logic",
    "Unavailable source domains and missing required data return governed unavailable or rejected states rather than invented zero values",
    "Retries, circuit breakers, dead letters and alert-ready observability make terminal failures visible and bounded",
    "Gmail and Slack destinations are resolved server-side through governance instead of caller or AI input",
    "A local read-only Control Center gives one operational view of KPI coverage, connectors, component health, circuits, failures and alerts",
    "GitHub CI and explicit deployment guards support safer reusable client implementation and handover",
  ],

  github:
    "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent",

  demo: "",
},




{
  slug: "client-onboarding-automation",

  title: "Client Onboarding Automation System",

  year: "2026",

  type: "Portfolio",

  status: "Completed",

  platforms: [
    "Airtable",
    "Make.com",
    "Make AI Toolkit",
    "Notion",
    "Gmail",
    "Slack",
  ],

  category: "Automation",

  description:
    "Built a professional client onboarding system that turns approved Airtable onboarding requests into linked projects, package-specific delivery tasks, and dedicated Notion client workspaces through a structured Make.com workflow.",

  overview: [
    "Built a complete client onboarding operating system for agencies.",
    "Processes approved onboarding requests from Airtable automatically.",
    "Creates projects linked to the correct client and service package.",
    "Generates project tasks dynamically from reusable task templates.",
    "Uses AI to prepare personalized workspace content.",
    "Creates and populates dedicated Notion client workspaces.",
    "Keeps the Airtable project and Notion workspace linked through shared project context.",
  ],

  problem:
    "Client onboarding was handled manually using emails, spreadsheets, and separate project tools, leading to inconsistent processes, duplicated work, manually created tasks, scattered documentation, and delayed project kickoff.",

  solution:
    "Built a scalable onboarding pipeline using Airtable, Make.com, Make AI Toolkit and Notion. The workflow watches approved onboarding requests, retrieves the linked client and package, creates the project, generates package-specific tasks, prepares structured workspace content, creates the Notion workspace, and synchronizes the workspace URL back to Airtable.",

  architecture: [
    "Approve the onboarding request in Airtable",
    "Watch the Ready for Onboarding view",
    "Mark the request as Processing",
    "Retrieve the linked client record",
    "Retrieve the selected package record",
    "Create and link the Airtable project",
    "Link the project back to the onboarding request",
    "Search active task templates for the selected package",
    "Create project tasks with calculated due dates",
    "Aggregate the created task records",
    "Generate structured workspace content with AI",
    "Parse the AI response into JSON fields",
    "Create the Notion client workspace",
    "Append the generated workspace content",
    "Update the Airtable project with the Notion URL",
    "Mark the onboarding request as Completed",
  ],

  workflow: [
    "Approved Request",
    "Airtable Trigger",
    "Request Processing",
    "Client Lookup",
    "Package Lookup",
    "Project Creation",
    "Task Template Search",
    "Dynamic Task Creation",
    "Task Aggregation",
    "AI Content Generator",
    "JSON Parser",
    "Notion Workspace",
    "Airtable Sync",
    "Completed",
  ],

  automation: [
    {
      title: "Approved Request",
      description:
        "Airtable detects an approved request in the Ready for Onboarding view.",
      icon: "form",
    },
    {
      title: "Client & Package",
      description:
        "The workflow retrieves the linked client and selected package records.",
      icon: "database",
    },
    {
      title: "Project Creation",
      description:
        "A new Airtable project is created and linked to the original onboarding request.",
      icon: "database",
    },
    {
      title: "Dynamic Tasks",
      description:
        "Package-specific task templates are converted into project delivery tasks.",
      icon: "database",
    },
    {
      title: "AI Generator",
      description:
        "Make AI Toolkit prepares structured, personalized workspace content.",
      icon: "bot",
    },
    {
      title: "Notion Workspace",
      description:
        "A dedicated workspace is created and populated with the project context.",
      icon: "workspace",
    },
    {
      title: "Airtable Sync",
      description:
        "The generated workspace URL is saved back to the Airtable project.",
      icon: "database",
    },
    {
      title: "Completed",
      description:
        "The onboarding request is marked Completed after the validated setup path succeeds.",
      icon: "form",
    },
  ],

  heroImage:
    "/images/projects/client-portal/hero.png",

  automationImage:
    "/images/projects/client-portal/make-workflow.png",

  gallery: [
    {
      image:
        "/images/projects/client-portal/airtable-dashboard.png",

      title: "Client Operations Hub",

      description:
        "Airtable Client Operations Hub showing onboarding requests, linked projects, task planning, packages, project phases and delivery-state tracking.",
    },

    {
      image:
        "/images/projects/client-portal/notion-workspace.png",

      title: "Generated Notion Client Workspace",

      description:
        "Automatically created client workspace carrying the project name, client, package, start date, deadline, status and Airtable project identifiers into the delivery environment.",
    },

    {
      image:
        "/images/projects/client-portal/make-workflow.png",

      title: "Professional Client Onboarding Workflow",

      description:
        "Full Make.com scenario coordinating Airtable onboarding data, project creation, template-driven task generation, AI/JSON preparation, Notion workspace creation and Airtable synchronization.",
    },

    {
      image:
        "/images/projects/client-portal/client-portal.png",

      title: "Client Project Workspace",

      description:
        "Client-facing Notion workspace centralizing the project overview, onboarding context and delivery information after the approved request has been processed.",
    },
  ],

  results: [
    "Created projects automatically from approved onboarding requests",
    "Generated package-specific project tasks from reusable templates",
    "Centralized client and project documentation",
    "Created dedicated Notion client workspaces automatically",
    "Synchronized project and workspace information back to Airtable",
    "Preserved linked client, package and onboarding-request context through the delivery setup",
  ],

  technologies: [
    technologies.airtable,
    technologies.notion,
    technologies.make,
    technologies.gmail,
    technologies.slack,
  ],

  metrics: [
    "Approved onboarding request → linked project → delivery tasks → Notion workspace",
    "Package-based task generation",
    "Airtable + Make.com + Notion delivery workflow",
  ],

  stats: [
    {
      value: 1,
      suffix: " workflow",
      label: "Client Onboarding System",
    },
    {
      value: 4,
      suffix: " tasks",
      label: "Validated Standard CRM Plan",
    },
    {
      value: 3,
      suffix: " systems",
      label: "Core Delivery Stack",
    },
  ],

  before: [
    "Manual client onboarding",
    "Project information stored across separate tools",
    "Tasks created individually for every project",
    "Workspaces prepared manually",
    "Onboarding context difficult to carry into delivery consistently",
  ],

  after: [
    "Approved requests processed into linked projects",
    "Tasks generated dynamically from reusable templates",
    "Project and onboarding relationships preserved in Airtable",
    "Dedicated Notion client workspaces created automatically",
    "Workspace links synchronized back to project records",
    "Client delivery setup standardized across the onboarding workflow",
  ],

  recruiterSummary: {
    headline:
      "A separate Client Operations system that turns an approved onboarding request into a structured delivery setup.",
    valueProposition:
      "This case study focuses specifically on client onboarding and delivery operations. It is downstream from revenue/sales systems such as GrowAgency, but it remains a separate operating system with its own data model, automation and evidence.",
    ownership: [
      "Designed the Airtable Client Operations structure for onboarding requests, projects, tasks, packages, templates and phases.",
      "Built the Make.com onboarding scenario that creates the project and delivery tasks from approved request context.",
      "Built the Notion workspace creation path and Airtable-to-Notion project linkage.",
      "Used reusable package/task-template logic instead of hard-coding one checklist.",
    ],
    liveProof: [
      "Client Workspaces evidence shows the generated Standard CRM project with client, package, start date, deadline and In progress status.",
      "The generated Notion workspace carries the Airtable Client ID, Airtable Project ID, client email, package, start date, deadline and project status.",
      "The Make.com scenario shows the complete onboarding orchestration from Airtable records through task generation, AI/JSON preparation, Notion creation and synchronization.",
    ],
    roleFit: [
      "Client Operations",
      "Project Operations",
      "Business Systems",
      "Operations Coordination",
    ],
  },

  interviewTalkingPoints: [
    {
      question: "How is this project different from GrowAgency?",
      answer:
        "GrowAgency is the Revenue Operations system that manages the lead-to-Closed-Won and client-handoff process. This project is the separate Client Operations Hub that takes an approved onboarding request and prepares delivery by creating the project, task plan and Notion workspace. They are connected through the handoff, but they are intentionally separate systems.",
    },
    {
      question: "What does the Make.com workflow do?",
      answer:
        "It takes the approved onboarding context from Airtable, loads the client and package, creates the linked project, generates tasks from reusable templates, prepares structured workspace content, creates the Notion workspace and writes the workspace link back to the Airtable project.",
    },
    {
      question: "What did you personally build?",
      answer:
        "I designed the Client Operations data structure, built the Make.com orchestration, created the reusable package/task-template logic and built the Notion workspace generation and Airtable synchronization path.",
    },
    {
      question: "What proves the workflow worked?",
      answer:
        "The evidence shows the generated client workspace record, the actual Notion project workspace with the matching client/package/timeline context, and the full Make.com scenario that performs the onboarding orchestration.",
    },
  ],

  github: "",
  demo: "",
},

{
  slug: "clickup-operations-growops-agency",
  title: "ClickUp Operations Build — GrowOps Agency",
  year: "2026",
  type: "Portfolio Build",
  status: "In Progress",
  category: "Business Systems",

  platforms: ["ClickUp", "HubSpot", "n8n", "Slack", "Notion"],

  description:
    "In-progress operations-system simulation for a 12-person B2B services agency, designing ClickUp as the source of truth for work execution while HubSpot remains the CRM source of truth. The integration layer is being built with n8n.",

  overview: [
    "Designing a full ClickUp workspace for the fictional GrowOps Agency, a 12-person B2B services team.",
    "Separating revenue/customer relationship data in HubSpot from delivery execution in ClickUp.",
    "Planning four operational Spaces: Sales, Delivery, Account Management and Operations.",
    "Designing 12 Lists with team-specific statuses, custom fields, saved views and management visibility.",
    "Building automation handoffs with n8n rather than Make.com.",
    "Documenting SOPs, adoption guidance, rollout planning and automation architecture as part of the operating-system build.",
    "This project is in progress; scope figures below describe the designed build target unless explicitly marked verified later.",
  ],

  problem:
    "GrowOps Agency is modeled as a B2B services team managing client work across WhatsApp, spreadsheets and email. That creates fragmented task ownership, weak project visibility, repeated onboarding work, inconsistent status tracking and no single operating view for leadership.",

  solution:
    "Design a connected ClickUp operating system with separate Spaces for Sales, Delivery, Account Management and Operations. HubSpot remains the source of truth for customer relationships, ClickUp becomes the source of truth for work execution, and n8n handles governed handoffs such as Closed Won to delivery-project creation, delivery completion back to CRM, and Slack team notifications.",

  architecture: [
    "HubSpot: CRM source of truth for leads, deals, contacts and customer history",
    "n8n: integration and automation orchestration layer",
    "ClickUp Sales Space: structured sales execution tasks and handoffs",
    "ClickUp Delivery Space: client projects, templates, deadlines and work execution",
    "ClickUp Account Management Space: client health, renewals and follow-up",
    "ClickUp Operations Space: SOPs, company-wide tasks and operating controls",
    "Notion: supporting documentation and adoption materials",
    "Slack: internal status and handoff notifications",
    "Client guest view: limited project-progress visibility without internal-data exposure",
  ],

  workflow: [
    "HubSpot Qualified Lead",
    "n8n Handoff",
    "ClickUp Sales Task",
    "HubSpot Closed Won",
    "n8n Delivery Provisioning",
    "ClickUp Client Project",
    "Template Tasks",
    "Delivery Execution",
    "Status / Capacity Tracking",
    "Delivered",
    "n8n CRM Update",
    "HubSpot Post-Delivery Follow-up",
    "Slack Notifications",
  ],

  automation: [
    {
      title: "Qualified Lead Handoff",
      description:
        "Design target: when a lead reaches the approved HubSpot qualification point, n8n creates the required ClickUp sales action with owner and due date.",
      icon: "crm",
    },
    {
      title: "Closed Won → Delivery",
      description:
        "Design target: a Closed Won deal triggers n8n to create the client-delivery project and standardized delivery tasks in ClickUp.",
      icon: "database",
    },
    {
      title: "Delivery → CRM",
      description:
        "Design target: delivery completion updates HubSpot with the delivery event and creates the post-delivery testimonial follow-up task.",
      icon: "crm",
    },
    {
      title: "Status Notifications",
      description:
        "Relevant operational status changes send structured Slack notifications so teams see handoffs without relying on manual messages.",
      icon: "slack",
    },
    {
      title: "Renewal Handoff",
      description:
        "Planned n8n automation creates the renewal action in ClickUp from the governed HubSpot renewal date and account ownership.",
      icon: "workspace",
    },
    {
      title: "Adoption Controls",
      description:
        "SOPs, day-in-the-life guidance, status definitions, rollout planning and weekly adoption tracking support consistent team usage.",
      icon: "sheet",
    },
  ],

  gallery: [],

  results: [
    "In progress — workspace architecture and operating model are being built as a portfolio simulation",
    "Target scope: 4 ClickUp Spaces and 12 structured Lists",
    "Target scope: custom status workflows and saved operational views by team",
    "Target scope: 8 n8n automation handoffs across CRM, delivery and notifications",
    "Target scope: 3 management dashboards for pipeline, delivery and operational visibility",
    "Target scope: SOP library, rollout plan and adoption toolkit",
    "Target scope: guest-safe client project visibility",
    "Outcome metrics such as onboarding-time reduction will be published only after the workflow is actually built and verified",
  ],

  technologies: [
    technologies.n8n,
    technologies.slack,
    technologies.notion,
  ],

  metrics: [
    "4 ClickUp Spaces planned",
    "12 operational Lists planned",
    "8 n8n automations planned",
    "3 management dashboards planned",
    "3 SOPs planned",
    "12-person B2B agency simulation",
  ],

  stats: [
    { value: 4, suffix: " spaces", label: "ClickUp Architecture" },
    { value: 12, suffix: " lists", label: "Operational Structure" },
    { value: 8, suffix: " automations", label: "n8n Design Target" },
  ],

  before: [
    "Client work split across WhatsApp, spreadsheets and email",
    "No single view of delivery status or team ownership",
    "Onboarding repeated manually for each new client",
    "Sales and delivery handoffs depend on people remembering the next step",
    "Project capacity and overdue work are difficult to see",
    "Operating procedures and status definitions are not centralized",
  ],

  after: [
    "Planned: ClickUp becomes the structured work-execution system",
    "Planned: HubSpot remains the customer and revenue source of truth",
    "Planned: n8n connects the CRM-to-delivery handoff without duplicate entry",
    "Planned: management dashboards expose workload, project status and risk",
    "Planned: reusable templates standardize onboarding and delivery",
    "Planned: SOPs and adoption controls support consistent team usage",
  ],

  automationImage: "",
  github: "",
  demo: "",
},

{
  slug: "business-operations-client-project-system",

  title: "Business Operations & Client Delivery System",

  year: "2026",

  type: "Portfolio",

  category: "Operations",

  description:
    "Designed a centralized operations system for managing clients, projects, tasks, deadlines, SOPs, documentation and client delivery across Notion and Airtable, with structured dashboards and dedicated client workspaces.",

  overview: [
    "Designed a centralized business operating system for managing client delivery.",
    "Organized projects, clients, tasks, deadlines, priorities and project status.",
    "Created structured dashboards for monitoring active and completed work.",
    "Built dedicated client workspaces for project communication and delivery.",
    "Centralized meeting notes, project updates, files and deliverables.",
    "Documented repeatable project kickoff, onboarding and delivery processes.",
    "Created reusable project structures to support consistent project execution.",
  ],

  problem:
    "Client information, tasks, deadlines, project updates, files and documentation can easily become scattered across spreadsheets, emails, documents and messaging tools. This makes it difficult to understand project status, track responsibilities and maintain a consistent client delivery process.",

  solution:
    "Designed a connected operations system using Notion and Airtable. The system centralizes projects, clients, tasks, deadlines, priorities, documentation and project progress while providing structured client workspaces for project status, deliverables, meeting notes and updates. SOPs and reusable project processes help standardize client onboarding, project kickoff and delivery.",

  architecture: [
    "Centralize client records",
    "Create and track projects",
    "Link projects to the correct clients",
    "Organize tasks by project",
    "Track task priorities and deadlines",
    "Monitor project status and progress",
    "Use structured project delivery phases",
    "Create dedicated client project workspaces",
    "Centralize meeting notes and project updates",
    "Organize files and project deliverables",
    "Document project kickoff procedures",
    "Document client onboarding procedures",
    "Document project delivery procedures",
  ],

  workflow: [
    "Client",
    "Project",
    "Tasks",
    "Priority",
    "Deadline",
    "Project Status",
    "Client Workspace",
    "Meeting Notes",
    "Deliverables",
    "SOP Library",
    "Project Tracking",
  ],

  automation: [
    {
      title: "Client Records",
      description:
        "Client information and project relationships are centralized.",
      icon: "database",
    },
    {
      title: "Project Tracking",
      description:
        "Projects are organized by status, priority, deadline and progress.",
      icon: "workspace",
    },
    {
      title: "Task Coordination",
      description:
        "Tasks are linked to projects and tracked by deadline and priority.",
      icon: "form",
    },
    {
      title: "Client Workspace",
      description:
        "Each client has a structured workspace for project delivery.",
      icon: "workspace",
    },
    {
      title: "Documentation",
      description:
        "Meeting notes, updates, files and deliverables are centralized.",
      icon: "sheet",
    },
    {
      title: "SOP Library",
      description:
        "Kickoff, onboarding and project delivery processes are documented.",
      icon: "sheet",
    },
  ],

  heroImage:
    "/images/projects/business-os/hero.png",

  automationImage:
    "/images/projects/business-os/workspace.png",

  gallery: [
  {
    image: "/images/projects/business-os/dashboard.png",
    title: "Business Operations Dashboard",
    description:
      "Centralized workspace for accessing projects, CRM information, documentation, team resources and client delivery systems.",
  },
  {
    image: "/images/projects/business-os/projects.png",
    title: "Project Tracking System",
    description:
      "Projects are tracked by client, status, priority, start date, deadline, tasks and overall progress.",
  },
  {
    image: "/images/projects/business-os/tasks.png",
    title: "Task & Deadline Coordination",
    description:
      "Centralized task tracking helps organize responsibilities, priorities, due dates and project-related work.",
  },
  {
    image: "/images/projects/business-os/client-workspace.png",
    title: "Client Project Workspace",
    description:
      "Client-facing workspace centralizing project status, tasks, deliverables, meeting notes, files, updates and communication.",
  },
  {
    image: "/images/projects/business-os/sop-library.png",
    title: "SOP & Process Library",
    description:
      "Documented repeatable processes for project kickoff, client onboarding and project delivery to support consistent execution.",
  },
],

  results: [
    "Centralized client and project information",
    "Improved visibility into project status and deadlines",
    "Structured task and priority tracking",
    "Centralized project documentation and meeting notes",
    "Created dedicated client delivery workspaces",
    "Documented repeatable operating procedures",
    "Standardized project coordination and handoff",
  ],

  technologies: [
    technologies.airtable,
    technologies.notion,
  ],

  metrics: [
    "Centralized project operations",
    "Structured task & deadline tracking",
    "Documented project processes",
  ],

  stats: [
    {
      value: 1,
      suffix: " hub",
      label: "Operations System",
    },
    {
      value: 6,
      suffix: " areas",
      label: "Operations Managed",
    },
    {
      value: 3,
      suffix: " SOPs",
      label: "Core Processes",
    },
  ],

  before: [
    "Client information scattered across different tools",
    "Tasks and deadlines difficult to monitor",
    "Project documentation stored separately",
    "Limited project status visibility",
    "Project processes repeated without documented procedures",
  ],

  after: [
    "Centralized client operations",
    "Structured project and task tracking",
    "Clear deadlines and priorities",
    "Dedicated client project workspaces",
    "Organized documentation and meeting notes",
    "Documented kickoff, onboarding and delivery procedures",
    "Clear project status and delivery visibility",
  ],

  github: "",

  demo: "",
},

{
  slug: "ai-meeting-notes-crm-sync",

  title: "AI Meeting Notes & CRM Sync",

  year: "2026",

  type: "Portfolio",

  category: "AI",

  description:
    "Built an AI-powered meeting intelligence workflow that analyzes client meeting notes from Notion, generates structured insights with Groq AI, logs meeting history in HubSpot, updates active Airtable projects, creates follow-up tasks, and notifies the internal team through Slack.",

  overview: [
    "Monitors new client meeting notes created in Notion.",
    "Retrieves the existing Airtable project and linked client automatically.",
    "Uses Groq AI to analyze meeting notes and return structured JSON.",
    "Extracts meeting summary, sentiment, next action, key topics, buying signals, concerns, and follow-up timing.",
    "Logs the meeting against the existing HubSpot contact and Closed Won deal.",
    "Updates the active Airtable project with the latest meeting context.",
    "Creates a follow-up task automatically and links it to the correct project phase.",
    "Sends a structured meeting summary to the internal team through Slack.",
    "Tracks processing, synchronization, completion, and failures inside Notion.",
  ],

  problem:
    "After client meetings, project information had to be manually summarized, copied into CRM records, converted into follow-up tasks, and shared with the delivery team. This created repetitive administrative work and increased the risk of missing important actions, concerns, or client decisions.",

  solution:
    "Built a Make.com automation that watches a Notion Sales Meeting Notes database, retrieves the linked Airtable project and client, analyzes the raw meeting notes with Groq AI, parses the response into structured data, saves the AI insights back to Notion, creates a HubSpot meeting note, updates the existing Airtable project, resolves the correct project phase, creates a follow-up task, sends a Slack summary, and marks the meeting synchronization as completed.",

  architecture: [
    "Watch new Sales Meeting Notes in Notion",
    "Validate that the meeting is ready for processing",
    "Mark the meeting as Processing",
    "Retrieve the existing Airtable project",
    "Retrieve the client linked to the project",
    "Analyze meeting notes with Groq AI",
    "Parse the structured JSON response",
    "Save AI meeting insights back to Notion",
    "Create a HubSpot note linked to the existing contact and Closed Won deal",
    "Update the existing Airtable project",
    "Resolve the project's linked Project Phase record",
    "Create a follow-up task linked to the project and phase",
    "Send the meeting summary to Slack",
    "Mark the Notion meeting as Completed and synced",
  ],

  workflow: [
    "Notion Meeting Notes",
    "Validation",
    "Airtable Project",
    "Airtable Client",
    "Groq AI",
    "JSON Parser",
    "Notion AI Results",
    "HubSpot Note",
    "Airtable Project Update",
    "Project Phase Lookup",
    "Follow-up Task",
    "Slack",
    "Sync Complete",
  ],

  automation: [
  {
    title: "Notion Trigger",
    description: "New client meeting notes trigger the workflow",
    icon: "workspace",
  },
  {
    title: "Airtable Lookup",
    description: "Existing project and client context retrieved",
    icon: "database",
  },
  {
    title: "Groq AI",
    description: "Meeting notes analyzed into structured insights",
    icon: "bot",
  },
  {
    title: "HubSpot",
    description: "Meeting note added to existing CRM records",
    icon: "crm",
  },
  {
    title: "Airtable Update",
    description: "Project updated and follow-up task created",
    icon: "database",
  },
  {
    title: "Slack",
    description: "Structured meeting summary sent to the team",
    icon: "slack",
  },
  {
    title: "Notion Sync",
    description: "Meeting marked completed and synchronized",
    icon: "workspace",
  },
],

  heroImage:
    "/images/projects/meeting-ai/hero.png",

  automationImage:
    "/images/projects/meeting-ai/workflow.png",

  gallery: [
    {
      image:
        "/images/projects/meeting-ai/workflow.png",

      title: "AI Meeting Automation Workflow",

      description:
        "Complete Make.com scenario connecting Notion, Airtable, Groq AI, HubSpot, and Slack with processing status tracking and error handling.",
    },

    {
      image:
        "/images/projects/meeting-ai/notion.png",

      title: "Sales Meeting Notes",

      description:
        "Notion database used to capture raw client meeting notes and store AI-generated summaries, sentiment, next actions, topics, buying signals, concerns, follow-up dates, and synchronization status.",
    },

    {
      image:
        "/images/projects/meeting-ai/airtable.png",

      title: "Automated Project Updates",

      description:
        "Existing Airtable projects are updated automatically with the latest meeting summary, client sentiment, next action, and meeting date.",
    },

    {
      image:
        "/images/projects/meeting-ai/hubspot.png",

      title: "HubSpot Meeting History",

      description:
        "AI-generated meeting intelligence is logged as a HubSpot note associated with the existing client contact and Closed Won deal.",
    },

    {
      image:
        "/images/projects/meeting-ai/task.png",

      title: "Automatic Follow-up Tasks",

      description:
        "The workflow resolves the project's linked phase and creates a follow-up task with the AI-generated next action and calculated due date.",
    },

    {
      image:
        "/images/projects/meeting-ai/slack.png",

      title: "Slack Meeting Summary",

      description:
        "The delivery team receives an automated summary containing the client, project, sentiment, key topics, concerns, next action, and follow-up date.",
    },
  ],

  results: [
    "Removed repetitive meeting-summary and project-update work",
    "Centralized AI-generated meeting intelligence in Notion",
    "Automatically logged client meeting history in HubSpot",
    "Kept active Airtable projects synchronized with meeting outcomes",
    "Created follow-up tasks automatically from AI next actions",
    "Improved visibility for the internal team through Slack summaries",
    "Added processing and failure tracking for more reliable automation",
  ],

  technologies: [
    technologies.make,
    technologies.groq,
    technologies.airtable,
    technologies.notion,
    technologies.hubspot,
    technologies.slack,
  ],

  metrics: [
    "14-step automated workflow",
    "7 structured AI meeting insights",
    "4 business systems synchronized",
  ],

  stats: [
    {
      value: 14,
      suffix: " steps",
      label: "Automated Workflow",
    },
    {
      value: 7,
      suffix: " insights",
      label: "AI Fields Extracted",
    },
    {
      value: 4,
      suffix: " systems",
      label: "Systems Synchronized",
    },
  ],

  before: [
    "Meeting notes reviewed manually",
    "Project records updated manually after calls",
    "Follow-up actions created manually",
    "Meeting context scattered across different tools",
    "Internal teams depended on manual meeting updates",
    "Automation failures were difficult to track",
  ],

  after: [
    "AI-generated structured meeting summaries",
    "Automatic Airtable project updates",
    "Automatic HubSpot meeting history",
    "AI-generated follow-up task creation",
    "Automatic project phase resolution",
    "Instant Slack meeting summaries",
    "Centralized Notion meeting intelligence",
    "Processing and error status tracking",
  ],

  github: "",
  demo: "",
},

{
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency Lead-to-Client Revenue Operations System",

  year: "2026",

  type: "Revenue Operations Case Study",

  status: "Completed",

  platforms: [
    "Airtable",
    "n8n",
    "Google Forms",
    "Google Sheets",
    "Groq AI",
    "Slack",
    "Gmail",
    "Google Calendar",
    "Make.com",
    "Notion",
  ],

  category: "Revenue Operations",

  description:
    "Designed and built a production-style Lead-to-Client Revenue Operations system for an agency workflow, covering lead intake, AI-assisted qualification, human sales decisions, governed opportunity creation, stage-based sales operations, payment-controlled client handoff and automated onboarding across Airtable, n8n, Make.com, Notion, Slack and Gmail.",

  recruiterSummary: {
    headline:
      "A full revenue lifecycle case study: from inbound lead to governed opportunity, sales execution, Closed Won handoff and client onboarding.",
    valueProposition:
      "This project shows how I translate business process requirements into CRM structure, sales controls, human decision points, operational automation and reliable handoffs. AI supports qualification, but commercial decisions and sensitive CRM changes remain governed by people and deterministic workflow rules.",
    ownership: [
      "Mapped the end-to-end lead, opportunity, sales-operations and client-handoff process.",
      "Designed the Airtable CRM data model, qualification fields, Processing Log, opportunity governance and Client Operations handoff.",
      "Built and hardened the n8n workflows for intake, qualification, sales notifications, opportunity conversion, CRM review, stage operations and Closed Won handoff.",
      "Designed human decision gates for opportunity eligibility and sensitive CRM field changes.",
      "Validated idempotency, batch approval handling, stage-entry behavior and payment-controlled handoff through controlled end-to-end tests.",
      "Integrated the existing Make.com onboarding system rather than duplicating it in n8n.",
    ],
    liveProof: [
      "Fresh Google Form submission successfully produced a qualified CRM lead with an AI score of 85 and structured sales context.",
      "Sales Ops notifications were verified with populated lead details after correcting the Airtable record-shape issue.",
      "Two sensitive CRM approvals were approved simultaneously and both applied in the same execution after batch-hardening the approval workflow.",
      "Proposal Sent, Negotiation and Closed Won stage transitions were verified with the expected Sales Ops actions.",
      "Closed Won without Payment Confirmed created no client records; after payment confirmation the handoff created exactly one client, one Client Operations client and one onboarding request.",
      "A second handoff scan created no duplicates, proving the completed handoff path was idempotent.",
      "The existing Make.com onboarding scenario was previously validated from approved Airtable request through project creation, four package tasks and a Notion workspace. Gmail/Slack onboarding delivery should be treated as unverified until fresh evidence is captured.",
    ],
    roleFit: [
      "Revenue Operations",
      "Sales Operations",
      "CRM Administration",
      "Business Systems",
      "GTM Operations",
      "Operations Coordination",
    ],
  },

  overview: [
    "Built the revenue process as a connected operating system rather than a collection of isolated automations.",
    "Captured inbound enquiries through Google Forms and Google Sheets, then normalized and qualified them with Groq AI before writing structured records to Airtable.",
    "Separated AI recommendations from human commercial decisions: the system can score and recommend, but a human chooses Create Opportunity, Nurture or Not Fit.",
    "Governed eight Opportunity fields through a CRM Change Review layer, with sensitive qualification changes requiring human approval.",
    "Hardened simultaneous approval handling so multiple approved changes are processed independently instead of collapsing a batch into one item.",
    "Automated stage-aware Sales Operations for New Lead, Discovery, Proposal Sent, Negotiation, Closed Won and Closed Lost.",
    "Protected the client handoff with a Payment Confirmed gate and idempotent searches so the same Closed Won opportunity cannot create duplicate client or onboarding records.",
    "Kept professional onboarding in the existing Make.com system: approved Airtable requests create the project, package-specific tasks, Notion workspace, Gmail welcome message, Slack notification and final onboarding status.",
  ],

  problem:
    "The original process could qualify leads and trigger follow-up actions, but a real Revenue Operations workflow needs much more than lead scoring. Sales teams need clear ownership of commercial decisions, controlled opportunity creation, governed CRM changes, stage-specific actions, protection against duplicate processing, reliable Closed Won handoff and a structured transition into client delivery. The goal was to turn the early lead automation into a complete, auditable lead-to-client operating process.",

  solution:
    "I evolved GrowAgency into an end-to-end Revenue Operations system. Lead intake and AI qualification feed a structured Airtable CRM, while human Sales Decision controls whether an opportunity is created. Opportunity conversion generates a governed review set for important CRM fields; safe fields can progress automatically while Qualification Status and AI Qualified require human approval. Stage-aware n8n workflows create the appropriate Sales Ops actions and notifications as the opportunity moves through the pipeline. Closed Won is not treated as permission to onboard: Payment Confirmed must also be true before the system creates the client and onboarding request, and idempotent searches prevent duplicate handoffs. Once the onboarding request is approved, the existing Make.com scenario handles project creation, package tasks and Notion workspace creation. Onboarding-channel notifications are not claimed here until separately verified.",

  architecture: [
    "Google Form → Google Sheets lead intake",
    "n8n Lead Intake → validation, normalization and Groq AI qualification",
    "Airtable Lead + Processing Log → structured source of operational context",
    "Sales Operations → Slack / Gmail / Calendar / task actions",
    "Human Sales Decision → Create Opportunity / Nurture / Not Fit",
    "Opportunity Conversion → Airtable Opportunity + CRM governance review set",
    "CRM Change Review → safe auto-apply fields + human approval for sensitive qualification changes",
    "Opportunity Sales Operations → stage-aware actions across six pipeline stages",
    "Closed Won + Payment Confirmed → idempotent Client Operations handoff",
    "Pending Onboarding Request → human approval",
    "Make.com → Airtable Project + package tasks + Notion workspace",
    "Completed onboarding → active client delivery workspace",
  ],

  workflow: [
    "Capture Inbound Lead",
    "Validate & Normalize Lead Data",
    "AI-Assisted Qualification",
    "Create CRM Lead & Processing Record",
    "Notify Sales Operations",
    "Human Sales Decision",
    "Create Governed Opportunity",
    "Review Sensitive CRM Changes",
    "Execute Stage-Based Sales Operations",
    "Confirm Closed Won",
    "Verify Payment Confirmed",
    "Create Client & Onboarding Request",
    "Human Onboarding Approval",
    "Create Project & Package Tasks in Make.com",
    "Create Notion Workspace",
    "Update Onboarding & Delivery State",
    "Activate Client Delivery",
  ],

  governance: [
    {
      title: "Human Commercial Decision",
      description:
        "AI can recommend qualification and next action, but a human Sales Decision controls whether the lead becomes an opportunity, is nurtured or is marked not fit.",
    },
    {
      title: "Sensitive CRM Change Approval",
      description:
        "Eight governed Opportunity fields are reviewed. Qualification Status and AI Qualified require human approval while lower-risk enrichment fields can follow the safe automation path.",
    },
    {
      title: "Batch-Safe Approval Processing",
      description:
        "The approval workflow was hardened so simultaneous CRM review decisions are processed per item; a two-approval regression test confirmed both changes applied in one execution.",
    },
    {
      title: "Stage-Aware Sales Operations",
      description:
        "Sales activity is tied to actual pipeline stage changes, with dedupe fields preventing repeated stage actions and delayed follow-ups separated from immediate stage-entry work.",
    },
    {
      title: "Payment-Controlled Client Handoff",
      description:
        "Closed Won alone cannot create a client. The handoff requires Payment Confirmed and reuses existing client/onboarding records when present.",
    },
    {
      title: "Human Onboarding Approval",
      description:
        "Client delivery automation begins only after the Airtable onboarding request is explicitly approved, preserving a clear handoff between sales and delivery.",
    },
    {
      title: "Separation of Automation Responsibilities",
      description:
        "n8n owns revenue and CRM workflow orchestration while the already-built Make.com scenario owns the client onboarding implementation, avoiding duplicate automation paths.",
    },
  ],

  automation: [
    {
      title: "Lead Intake & Qualification",
      description:
        "Inbound form data is validated, normalized, AI-qualified and stored as structured CRM context.",
      icon: "form",
    },
    {
      title: "Sales Decision Gate",
      description:
        "A human decides whether the qualified lead should become an opportunity, enter nurture or be marked not fit.",
      icon: "workspace",
    },
    {
      title: "CRM Governance",
      description:
        "Opportunity fields are evaluated through a controlled review layer with human approval for sensitive qualification changes.",
      icon: "crm",
    },
    {
      title: "Stage-Based Sales Operations",
      description:
        "Pipeline stage changes drive Slack notifications, calendar events, follow-up tasks and stage-specific sales actions.",
      icon: "slack",
    },
    {
      title: "Payment-Gated Handoff",
      description:
        "Closed Won opportunities enter Client Operations only after Payment Confirmed, with idempotent client and onboarding creation.",
      icon: "database",
    },
    {
      title: "Professional Client Onboarding",
      description:
        "Approved onboarding requests flow through Make.com to create the project, package tasks and Notion workspace, with Airtable retaining the onboarding/delivery state.",
      icon: "workspace",
    },
  ],

  heroImage:
    "/images/projects/growagency/hero.png",

  automationImage:
    "/images/projects/growagency/workflow-2.png",

  evidenceInventory: [
    {
      title: "Lead Intake & AI Qualification",
      description:
        "The supplied n8n workflow evidence shows the inbound lead intake, validation/normalization and AI qualification path that feeds the CRM process.",
      status: "Verified",
    },
    {
      title: "Airtable Processing Log",
      description:
        "The supplied Airtable evidence shows qualified lead context, Sales Decision state, notification status and conversion state.",
      status: "Verified",
    },
    {
      title: "Qualified Intake — Slack",
      description:
        "The supplied Slack evidence shows the qualification notification with lead details, score, package, pain point and recommended next action.",
      status: "Verified",
    },
    {
      title: "CRM Change Review — Proposed & Applied",
      description:
        "The supplied Airtable evidence shows the governed Opportunity change set, including eight fields, proposed values, evidence and the resulting Applied state.",
      status: "Verified",
    },
    {
      title: "Closed Won Opportunity",
      description:
        "The supplied Opportunity evidence shows the Qualified state, AI score of 85, Standard package and Closed Won progression.",
      status: "Verified",
    },
    {
      title: "Payment Confirmed + CRM Relationships",
      description:
        "The supplied Airtable evidence shows Payment Confirmed together with the linked Processing Log and CRM Change Review records.",
      status: "Verified",
    },
    {
      title: "Closed Won → Client Operations Handoff",
      description:
        "The supplied n8n evidence shows the successful handoff workflow and its transition from Sales into Client Operations.",
      status: "Verified",
    },
    {
      title: "Completed Client Operations Handoff",
      description:
        "The supplied Airtable evidence shows a completed handoff with the linked GrowAgency Client, Client Operations Client and Onboarding Request.",
      status: "Verified",
    },
    {
      title: "Onboarding Request Approval Boundary",
      description:
        "The supplied Airtable evidence shows the downstream onboarding request remaining under human approval control, including Pending Approval state.",
      status: "Verified",
    },
    {
      title: "Project & Package Task Provisioning",
      description:
        "The supplied Client Operations evidence shows the generated project and four package-specific onboarding tasks.",
      status: "Verified",
    },
    {
      title: "Notion Client Workspace",
      description:
        "The supplied evidence shows the generated client delivery workspace created by the validated onboarding path.",
      status: "Verified",
    },
    {
      title: "Professional Client Onboarding — Make.com",
      description:
        "The supplied Make.com evidence shows the existing onboarding automation architecture connecting Airtable, Notion, Gmail and Slack.",
      status: "Verified",
    },
    {
      title: "AI Business OS Control Center",
      description:
        "The supplied control-center evidence shows the reusable revenue-operations operating layer, readiness controls, integration state, human approval boundary and local production monitoring surface.",
      status: "Verified",
    },
    {
      title: "Sales Operations Monitor",
      description:
        "The supplied Sales Operations monitor shows assigned leads, routed volume, SLA/alert state, CRM sync health, owner mapping health and the sales-rep inbox.",
      status: "Verified",
    },
    {
      title: "Reusable Sales Rep Router — ROUTE-01",
      description:
        "The supplied n8n evidence shows the reusable sales-rep routing workflow with routing context, capacity-aware assignment, assignment audit and notification handoff.",
      status: "Verified",
    },
    {
      title: "Reusable Lead Intake — ING-01",
      description:
        "The supplied n8n evidence shows the reusable intake path from external form submission through validation, qualification, CRM projection, sales routing and CRM-aware notification preparation.",
      status: "Verified",
    },
    {
      title: "Human Approval Decision & Resume — SYS-05B",
      description:
        "The supplied n8n evidence shows the governed approval-decision workflow that validates authority, applies approved actions and handles rejected paths.",
      status: "Verified",
    },
    {
      title: "CRM Change Review Evidence",
      description:
        "The supplied CRM evidence shows governed change records with proposed values, evidence and review state across the Opportunity governance layer.",
      status: "Verified",
    },
    {
      title: "HubSpot Live Contact Projection",
      description:
        "The supplied HubSpot evidence shows the reusable CRM adapter successfully projecting Business OS test contacts into a live HubSpot Contacts view.",
      status: "Verified",
    },
    {
      title: "Sales Rep Notification — Slack",
      description:
        "The supplied Slack evidence shows lead-assignment and deal-approval notifications delivered to the sales workflow with owner, qualification, need and follow-up context.",
      status: "Verified",
    },
    {
      title: "CRM Approval Batch Regression — Execution 3321",
      description:
        "The development test result verified that two simultaneous CRM approvals were successfully processed after batch hardening. The execution screenshot could not be resent because the later n8n publish warning and file-upload limit prevented it.",
      status: "Verified — screenshot unavailable",
    },
    {
      title: "NEW CLIENT ONBOARDING COMPLETED Slack Message",
      description:
        "This specific delivery message was not captured and is deliberately not presented as verified evidence.",
      status: "Not claimed",
    },
  ],

  gallery: [
    {
      image: "/images/projects/growagency/dashboard.png",
      title: "Airtable Revenue Operations CRM",
      description:
        "Centralized operational CRM for lead context, AI qualification, sales decisions, opportunity state, follow-up information and pipeline visibility.",
    },
    {
      image: "/images/projects/growagency/workflow-1.png",
      title: "Lead Intake & AI Qualification",
      description:
        "n8n intake flow that turns inbound Google Sheets records into validated, AI-assisted qualification context and structured Airtable CRM records.",
    },
    {
      image: "/images/projects/growagency/workflow-2.png",
      title: "Sales Operations Routing & Follow-Up",
      description:
        "Revenue Operations workflow that searches actionable CRM records, evaluates status and routes notifications, follow-up activity and CRM updates.",
    },
    {
      image: "/images/projects/growagency/slack-alert.png",
      title: "Sales Operations Notification",
      description:
        "Structured Slack evidence showing actionable lead context delivered to the sales workflow instead of relying on manual monitoring.",
    },
    {
      image: "/images/projects/growagency/evidence/business-os-control-center.svg",
      title: "AI Business OS Control Center",
      description:
        "Reusable revenue-operations control surface showing production-readiness state, integration health, human approval controls and governed operating boundaries.",
    },
    {
      image: "/images/projects/growagency/evidence/sales-operations-monitor.svg",
      title: "Sales Operations Monitor",
      description:
        "Operational monitoring view showing routed leads, SLA breaches, alerts, CRM sync health, owner mappings and the sales-rep inbox.",
    },
    {
      image: "/images/projects/growagency/evidence/lead-intake-reusable.svg",
      title: "Reusable Lead Intake — ING-01",
      description:
        "Reusable intake orchestration connecting external lead capture, qualification, CRM projection, sales routing and CRM-aware notification preparation.",
    },
    {
      image: "/images/projects/growagency/evidence/sales-rep-routing.svg",
      title: "Reusable Sales Rep Router — ROUTE-01",
      description:
        "Capacity-aware sales assignment workflow with routing context, assignment application, audit evidence and notification handoff.",
    },
    {
      image: "/images/projects/growagency/evidence/sales-rep-slack-notification.svg",
      title: "Sales Rep Notification — Slack",
      description:
        "Internal notification evidence showing assigned-lead and deal-approval messages with owner, qualification, need and follow-up context.",
    },
    {
      image: "/images/projects/growagency/evidence/crm-change-review.svg",
      title: "CRM Change Review",
      description:
        "Governed CRM evidence showing proposed values, supporting evidence and review state for controlled Opportunity changes.",
    },
    {
      image: "/images/projects/growagency/evidence/approval-decision-resume.svg",
      title: "Human Approval Decision & Resume — SYS-05B",
      description:
        "Governed approval workflow evidence showing authority validation, approved-action execution and rejected-path handling.",
    },
    {
      image: "/images/projects/growagency/evidence/hubspot-live-contact-sync.svg",
      title: "HubSpot Live Contact Projection",
      description:
        "Live HubSpot Contacts evidence showing reusable CRM adapter output from the Business OS integration layer.",
    },
  ],

  results: [
    "Validated an end-to-end lead intake test that created a qualified CRM lead with structured AI score, qualification, package, priority, pain point, reason and next action.",
    "Verified populated Sales Ops Slack messages after diagnosing and fixing the flat Airtable record-shape mapping issue.",
    "Governed eight Opportunity fields with separate safe-change and human-approval paths.",
    "Fixed and regression-tested simultaneous CRM approvals so both sensitive changes applied in one execution.",
    "Validated stage-entry behavior through Proposal Sent, Negotiation and Closed Won with the expected Sales Operations actions.",
    "Proved the payment safeguard by confirming Closed Won with Payment Confirmed false created zero client/onboarding records.",
    "After payment confirmation, created exactly one GrowAgency Client, one Client Operations Client and one Onboarding Request.",
    "Verified a subsequent handoff scan created no duplicate client or onboarding records.",
    "Validated the existing Make.com onboarding flow through completed request, Airtable project creation, four tasks and a Notion workspace.",
    "Preserved human control at both opportunity eligibility and onboarding approval instead of allowing AI or automation to make unchecked commercial decisions.",
  ],

  technologies: [
    technologies.googleForms,
    technologies.googleSheets,
    technologies.n8n,
    technologies.groq,
    technologies.airtable,
    technologies.slack,
    technologies.gmail,
    technologies.make,
    technologies.notion,
  ],

  metrics: [
    "8 governed Opportunity fields",
    "6 stage-aware Sales Operations routes",
    "2 explicit human decision gates",
    "Payment-gated, idempotent client handoff",
    "Lead-to-client lifecycle validated end to end",
  ],

  stats: [
    {
      value: 8,
      suffix: " fields",
      label: "Governed CRM Changes",
    },
    {
      value: 6,
      suffix: " stages",
      label: "Sales Operations Lifecycle",
    },
    {
      value: 2,
      suffix: " gates",
      label: "Human Decisions",
    },
  ],

  before: [
    "Lead qualification and follow-up were the main automated focus.",
    "Commercial eligibility could be separated from qualification more clearly.",
    "Opportunity field changes needed stronger governance.",
    "Pipeline-stage actions needed consistent operating rules.",
    "Closed Won needed a payment safeguard before client creation.",
    "Sales-to-delivery handoff needed duplicate protection and a clear approval boundary.",
  ],

  after: [
    "Structured inbound lead intake with AI-assisted qualification.",
    "Human-controlled opportunity eligibility and onboarding approval.",
    "Governed Opportunity changes with sensitive-field approval.",
    "Stage-aware Sales Operations across the full pipeline.",
    "Payment-confirmed Closed Won handoff.",
    "Idempotent client and onboarding creation.",
    "Existing Make.com onboarding integrated as the delivery automation layer.",
    "Airtable and Notion synchronized across the validated client-onboarding path.",
  ],

  interviewTalkingPoints: [
    {
      question: "Give me the 30-second overview.",
      answer:
        "GrowAgency started as a lead qualification automation, and I evolved it into a full lead-to-client Revenue Operations system. An inbound lead is validated and AI-qualified, but a human still decides whether the lead becomes an opportunity. Important CRM changes are governed, opportunity stages trigger the right Sales Ops actions, and Closed Won cannot create a client until payment is confirmed. The handoff is idempotent, and once onboarding is approved my existing Make.com workflow creates the project, package tasks and Notion workspace.",
    },
    {
      question: "What business problem were you solving?",
      answer:
        "The problem was the operational gap between capturing a lead and actually running a controlled sales-to-delivery process. A business needs consistent qualification, human commercial judgment, clean opportunity data, reliable stage actions, protection against duplicate processing and a controlled handoff after revenue is actually confirmed. I designed the workflows around those operating requirements rather than simply automating every step.",
    },
    {
      question: "What did you personally own?",
      answer:
        "I owned the process design, Airtable CRM structure, n8n architecture, AI qualification contract, sales decision flow, opportunity governance, Sales Ops stage automations, client-handoff logic, testing and debugging. I also designed the boundary with the existing Make.com onboarding system so I did not rebuild functionality that was already working.",
    },
    {
      question: "Where did you use AI, and where did you deliberately not use it?",
      answer:
        "I use AI to structure qualification context such as score, pain point, suggested package, reason and next action. I do not let AI make the final commercial decision to create an opportunity, approve sensitive qualification changes or approve onboarding. Those remain human-controlled because they have business consequences.",
    },
    {
      question: "How did you make the CRM changes safer?",
      answer:
        "Opportunity creation generates a review set for eight governed fields. Lower-risk enrichment fields can follow the safe path, while Qualification Status and AI Qualified require explicit human approval. I also found a batch-processing defect where simultaneous approvals could collapse into one item, changed the affected code nodes to process each item independently and proved both approvals applied in one regression execution.",
    },
    {
      question: "How did you prevent duplicate client handoffs?",
      answer:
        "The Closed Won handoff searches for existing GrowAgency and Client Operations records before creating anything, and the opportunity stores handoff status plus downstream IDs. I tested the same completed opportunity on a later scan and the record counts stayed at one, which showed the workflow reused completed state instead of creating duplicates.",
    },
    {
      question: "Why are both n8n and Make.com used?",
      answer:
        "They have different responsibilities. n8n handles the Revenue Operations and CRM orchestration: qualification, human decisions, governance, stage operations and Closed Won handoff. My existing Make.com scenario already handled the validated onboarding core: project and task creation plus the Notion workspace. I keep notification-channel claims separate until they are verified. I kept that working system instead of duplicating the same onboarding logic in n8n.",
    },
    {
      question: "Tell me about a problem you found during testing.",
      answer:
        "I found two useful production-style defects. One was an Airtable response-shape issue that caused Slack fields to be blank even though the workflow succeeded. I traced the runtime JSON and corrected the expressions. The other was the simultaneous approval batch issue, where a code node processed all items but returned only one. I changed the execution mode and regression-tested two approvals arriving together. Those tests reinforced that workflow success is not enough; I verify the downstream business state.",
    },
    {
      question: "What does this project demonstrate for a RevOps or CRM role?",
      answer:
        "It demonstrates process design, CRM administration, data governance, sales-stage operations, human approval design, cross-system integration, debugging, idempotency and handoff design. The automation tools are supporting technology; the main work is building a sales and client-operations process that people can trust and operate.",
    },
  ],

  github: "https://github.com/Nikkypwetti/nikkytechies-portfolio/tree/main/docs/growagency-lead-to-client-revenue-operations-system",

  demo: "",
},

];