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
  title: "AI Revenue Intelligence & Reporting Agent V2",
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
    "Built and locally validated a governed AI Revenue Intelligence platform that turns manager questions into authorized KPI analysis, uses deterministic security and query controls, synchronizes CRM data through reusable adapters, delivers reports through governed channels, and exposes a read-only operations Control Center for runtime health and connector status.",

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

  category: "Automation",

  description:
    "Built a professional client onboarding system that turns approved Airtable requests into linked projects, package-specific tasks, AI-generated Notion workspaces, welcome emails, and internal Slack notifications.",

  overview: [
    "Built a complete client onboarding operating system for agencies.",
    "Processes approved onboarding requests from Airtable automatically.",
    "Creates projects linked to the correct client and service package.",
    "Generates project tasks dynamically from reusable task templates.",
    "Uses AI to create personalized workspace content.",
    "Creates and populates dedicated Notion client workspaces.",
    "Keeps clients and internal teams informed automatically.",
  ],

  problem:
    "Client onboarding was handled manually using emails, spreadsheets, and separate project tools, leading to inconsistent processes, duplicated work, manually created tasks, scattered documentation, and delayed project kickoff.",

  solution:
    "Built a scalable onboarding pipeline using Airtable, Make.com, Make AI Toolkit, Notion, Gmail, and Slack. The system watches approved onboarding requests, retrieves the linked client and package, creates the project, generates package-specific tasks, produces structured workspace content with AI, creates the Notion workspace, synchronizes the workspace URL back to Airtable, and sends automated notifications.",

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
    "Aggregate all created task records",
    "Generate structured workspace content with AI",
    "Parse the AI response into JSON fields",
    "Create the Notion client workspace",
    "Append the AI-generated workspace content",
    "Update the Airtable project with the Notion URL",
    "Send the client welcome email",
    "Send the internal Slack notification",
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
    "Gmail",
    "Slack",
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
        "A new Airtable project is created and linked to the original request.",
      icon: "database",
    },
    {
      title: "Dynamic Tasks",
      description:
        "Package-specific task templates are converted into project tasks.",
      icon: "database",
    },
    {
      title: "AI Generator",
      description:
        "Make AI Toolkit creates structured, personalized workspace content.",
      icon: "bot",
    },
    {
      title: "Notion Workspace",
      description:
        "A dedicated workspace is created and populated with AI-generated content.",
      icon: "workspace",
    },
    {
      title: "Airtable Sync",
      description:
        "The workspace URL is saved and the project status changes to In Progress.",
      icon: "database",
    },
    {
      title: "Notifications",
      description:
        "Gmail welcomes the client and Slack alerts the internal delivery team.",
      icon: "email",
    },
    {
      title: "Completed",
      description:
        "The onboarding request is marked Completed after every step succeeds.",
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

      title: "Client Operations Dashboard",

      description:
        "Airtable dashboard showing clients, onboarding requests, automation status, linked projects, project phases, tasks, and delivery progress.",
    },

    {
      image:
        "/images/projects/client-portal/notion-workspace.png",

      title: "AI-Generated Notion Workspace",

      description:
        "Automatically created workspace containing a personalized welcome message, project overview, objectives, deliverables, milestones, communication plan, and kickoff checklist.",
    },

    {
      image:
        "/images/projects/client-portal/make-workflow.png",

      title: "Professional Onboarding Workflow",

      description:
        "Complete Make.com scenario responsible for request processing, record lookups, project creation, dynamic task generation, AI content generation, Notion workspace creation, synchronization, and notifications.",
    },

    {
      image:
        "/images/projects/client-portal/client-portal.png",

      title: "Client Project Workspace",

      description:
        "Client-facing Notion workspace providing centralized project information, deliverables, milestones, communication guidance, and onboarding actions.",
    },

    {
      image:
        "/images/projects/client-portal/slack-notification.png",

      title: "Slack Team Notification",

      description:
        "Automatic Slack notification informing the internal team that client onboarding has completed and providing the project and workspace details.",
    },
  ],

  results: [
  "Created projects automatically from approved onboarding requests",
  "Generated package-specific project tasks from reusable templates",
  "Centralized client and project documentation",
  "Created dedicated Notion client workspaces automatically",
  "Synchronized project and workspace information back to Airtable",
  "Automated client and internal team notifications",
],

  technologies: [
    technologies.airtable,
    technologies.notion,
    technologies.make,
    technologies.gmail,
    technologies.slack,
  ],

  metrics: [
  "18-step automated workflow",
  "5 service packages supported",
  "Package-based task generation",
],

stats: [
  {
    value: 18,
    suffix: " steps",
    label: "Automated Workflow",
  },
  {
    value: 5,
    suffix: " packages",
    label: "Service Packages",
  },
  {
    value: 4,
    suffix: " systems",
    label: "Core Systems Connected",
  },
],

  before: [
    "Manual client onboarding",
    "Project information stored across separate tools",
    "Tasks created individually for every project",
    "Workspaces prepared manually",
    "Repeated client and team updates",
  ],

  after: [
    "Approved requests processed automatically",
    "Projects linked to clients and packages",
    "Tasks generated dynamically from templates",
    "AI-generated Notion workspaces",
    "Real-time Airtable project synchronization",
    "Automatic Gmail and Slack notifications",
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

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio",

  category: "CRM",

  description:
    "Built a two-workflow AI-powered lead operations system that captures leads from Google Sheets, qualifies them with Groq AI, stores structured CRM records in Airtable, and automatically routes follow-up actions through Slack, Gmail, Google Calendar, and task creation workflows using n8n.",

  overview: [
    "Built a two-workflow lead operations system for lead capture, AI qualification, CRM management and follow-up.",
    "Workflow 1 captures new leads from Google Sheets and sends them to Groq AI for analysis.",
    "Parses the AI response and creates structured lead records automatically in Airtable.",
    "Workflow 2 searches CRM records and routes leads based on qualification status.",
    "Automates Slack notifications, Gmail follow-ups, calendar events and follow-up tasks.",
    "Keeps lead qualification, follow-up actions and CRM status synchronized in Airtable.",
  ],

  problem:
    "Lead processing required manually reviewing submissions, deciding which leads needed attention, updating CRM records, creating follow-up activities and notifying the team across separate tools. This made lead handling repetitive and made it harder to maintain a consistent follow-up process.",

  solution:
    "Built two connected n8n workflows. The first workflow captures new lead submissions from Google Sheets, sends the lead information to Groq AI for qualification, parses the structured AI response and creates the lead record in Airtable. The second workflow runs on a schedule, searches Airtable for leads requiring action, loops through the records, routes each lead by qualification status and automatically triggers the appropriate Slack notification, Gmail follow-up, Google Calendar event, follow-up task and Airtable update.",

  architecture: [
    "Lead submits information through the lead intake process",
    "Google Sheets stores the new lead submission",
    "Workflow 1 starts from the Google Sheets trigger",
    "Lead information is sent to Groq AI through an HTTP request",
    "Groq AI analyzes the lead information",
    "AI generates structured lead qualification insights",
    "JavaScript parses and prepares the AI response",
    "Airtable CRM record is created with the lead information and AI results",
    "Workflow 2 runs on a scheduled trigger",
    "Airtable records requiring follow-up are searched",
    "Records are processed through a loop",
    "Switch logic routes leads by qualification status",
    "Hot Lead → Slack notification and follow-up actions",
    "Qualified → Slack notification and follow-up actions",
    "Needs Discovery → Slack notification and follow-up actions",
    "Nurture → Gmail follow-up",
    "Not Fit → Gmail follow-up",
    "Google Calendar events are created where follow-up is required",
    "Follow-up tasks are created for actionable leads",
    "Airtable records are updated after each action",
  ],

  workflow: [
    "Google Sheets",
    "n8n Workflow 1",
    "Groq AI",
    "JavaScript",
    "Airtable CRM",
    "Scheduled Processing",
    "n8n Workflow 2",
    "Lead Status Routing",
    "Slack",
    "Gmail",
    "Google Calendar",
    "Google Tasks",
    "Airtable Update",
  ],

  automation: [
    {
      title: "Lead Intake",
      description:
        "Google Sheets detects a new lead submission and starts the first workflow.",
      icon: "sheet",
    },
    {
      title: "AI Qualification",
      description:
        "Groq AI analyzes the lead and generates structured qualification insights.",
      icon: "bot",
    },
    {
      title: "CRM Creation",
      description:
        "JavaScript prepares the AI output and creates the structured lead record in Airtable.",
      icon: "database",
    },
    {
      title: "Scheduled Processing",
      description:
        "The second workflow runs on a schedule and searches Airtable for leads requiring follow-up.",
      icon: "bot",
    },
    {
      title: "Lead Routing",
      description:
        "Switch logic routes Hot Lead, Qualified, Needs Discovery, Nurture and Not Fit leads into different actions.",
      icon: "form",
    },
    {
      title: "Slack Alerts",
      description:
        "Hot, qualified and discovery leads trigger structured internal Slack notifications.",
      icon: "slack",
    },
    {
      title: "Follow-up Actions",
      description:
        "Google Calendar events and follow-up tasks are created when the lead requires action.",
      icon: "form",
    },
    {
      title: "Email Follow-up",
      description:
        "Gmail handles email-based follow-up for nurture and not-fit lead routes.",
      icon: "email",
    },
    {
      title: "CRM Update",
      description:
        "Airtable is updated after the follow-up action so the CRM reflects the latest lead status.",
      icon: "database",
    },
  ],

  heroImage:
    "/images/projects/growagency/hero.png",

  automationImage:
    "/images/projects/growagency/workflow-2.png",

  gallery: [
  {
    image: "/images/projects/growagency/dashboard.png",
    title: "Airtable CRM Dashboard",
    description:
      "Centralized CRM dashboard showing lead records, AI qualification results, lead status, follow-up information and sales pipeline visibility.",
  },
  {
    image: "/images/projects/growagency/workflow-1.png",
    title: "Workflow 1 — Lead Intake & AI Qualification",
    description:
      "New Google Sheets submissions are sent to Groq AI for qualification, processed with JavaScript and converted into structured Airtable CRM records.",
  },
  {
    image: "/images/projects/growagency/workflow-2.png",
    title: "Workflow 2 — Lead Routing & Follow-up",
    description:
      "A scheduled n8n workflow searches Airtable, processes leads through qualification-based routing and triggers Slack, Gmail, calendar, task and CRM update actions.",
  },
  {
    image: "/images/projects/growagency/slack-alert.png",
    title: "Slack Lead Notification",
    description:
      "Automatic Slack notifications provide the team with lead qualification and follow-up information when a lead requires attention.",
  },
],

  results: [
    "Automated lead intake from Google Sheets into Airtable CRM",
    "Standardized AI-assisted lead qualification using Groq AI",
    "Created rule-based routing for five lead qualification outcomes",
    "Automated Slack notifications for actionable leads",
    "Created calendar events and follow-up tasks automatically",
    "Automated email follow-up for selected lead outcomes",
    "Kept CRM records synchronized with follow-up actions",
    "Reduced repetitive lead-processing and administrative steps",
  ],

  technologies: [
    technologies.googleSheets,
    technologies.n8n,
    technologies.groq,
    technologies.airtable,
    technologies.slack,
    technologies.gmail,
  ],

  metrics: [
    "2 connected n8n workflows",
    "5 qualification routes",
    "AI-powered lead qualification",
  ],

  stats: [
    {
      value: 2,
      suffix: " workflows",
      label: "Connected Automations",
    },
    {
      value: 5,
      suffix: " routes",
      label: "Lead Outcomes",
    },
    {
      value: 8,
      suffix: " tools",
      label: "Systems Used",
    },
  ],

  before: [
    "Lead submissions reviewed manually",
    "Manual lead qualification",
    "CRM records created manually",
    "Follow-up decisions handled individually",
    "Calendar follow-ups created manually",
    "Team notifications sent manually",
    "Lead status updates spread across separate tools",
  ],

  after: [
    "Automatic lead intake",
    "AI-assisted lead qualification",
    "Automatic Airtable CRM record creation",
    "Five rule-based qualification routes",
    "Automatic Slack notifications",
    "Automatic Gmail follow-up",
    "Automatic calendar events and follow-up tasks",
    "CRM records updated after follow-up actions",
  ],

  github: "",

  demo: "",
},
];