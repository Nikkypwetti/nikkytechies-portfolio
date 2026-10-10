import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const aiBusinessOsProject: Project = {
  slug: "ai-business-os-multi-agent-operations",
  title: "AI Business OS — Governed Revenue Operations & Business Systems Platform",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  platforms: [
    "n8n",
    "PostgreSQL",
    "HubSpot",
    "Salesforce",
    "Gmail",
    "Google Calendar",
    "Groq",
    "Gemini",
    "Docker",
  ],
  category: "Business Systems",

  description:
    "Designed and implemented a reusable, production-style Revenue Operations and Business Systems platform that coordinates 8 specialist agents while keeping CRM changes, communications, approvals and recovery behind deterministic controls. The platform now includes a CRM-first sales operating path where inbound leads are qualified, routed, projected to the configured CRM, assigned to verified owners, surfaced to reps through notifications and held for human deal approval before commercial progression.",

  recruiterSummary: {
    headline:
      "End-to-end Revenue Systems ownership: governed lead-to-CRM operations, multi-agent orchestration, human approvals, provider integrations, security and incident recovery.",
    valueProposition:
      "This project demonstrates how I approach Revenue Operations and Business Systems work as an operating-model problem, not just an automation task. I designed the process, data contracts, CRM ownership model, approval controls, provider integrations, monitoring, security and recovery architecture, then validated the system with controlled live CRM and notification paths. Sales reps can work primarily in the CRM while the Business OS handles orchestration, governance, SLA monitoring, exception handling and auditability behind the scenes.",
    ownership: [
      "Defined the operating model across lead intake, qualification, routing, CRM projection, human deal approval, onboarding, projects, communications, customer success, finance and RevOps analytics.",
      "Designed and built the n8n orchestration layer, PostgreSQL system-of-record model, provider-neutral gateways, specialist-agent boundaries and local Control Center.",
      "Implemented deterministic permissions, approval rules, idempotency, tenant isolation, owner mapping, monitoring and fail-closed recovery instead of allowing AI to mutate business systems directly.",
      "Connected and validated HubSpot, Salesforce, Gmail and Google Calendar through governed provider adapters, with CRM-specific configuration kept separate from the reusable Business OS core.",
      "Built the CRM-first Sales Ops path so lead ownership, CRM records, rep notifications, SLA state and deal-approval exceptions can be managed as one operating process.",
      "Ran controlled production-style tests, diagnosed real integration failures, preserved incident/DLQ evidence, remediated root causes and verified successful recovery without deleting the audit trail.",
    ],
    liveProof: [
      "A controlled Google Form lead intake was normalized into the canonical PostgreSQL lead model, scored 75/100, classified qualified, routed to the configured sales owner and assigned a 24-hour follow-up SLA.",
      "Lead-assignment and deal-approval notifications were delivered while the material deal action remained behind a human approval gate; no deal was created without approval.",
      "The repaired HubSpot CRM projection created and independently read back contact 880647909565 with verified owner and qualification context; the same provider ID was then recorded in PostgreSQL integration evidence, completing the provider → CRM readback → audit chain.",
      "Two named HubSpot incidents in the verified remediation chain (HTTP method and unique lead_score property configuration) were marked RESOLVED with remediation evidence preserved. Separate provider/MCP incidents remained OPEN or ESCALATED in the later database review, so this does not mean every incident is resolved.",
      "The last fully verified core release passed 21/21 agent-access security checks, 11/11 RBAC and tenant-isolation checks, and 22/22 local production-readiness checks.",
      "The architecture keeps PostgreSQL authoritative and CRM providers replaceable, allowing the same operating model to support HubSpot, Salesforce or another client CRM through configuration and adapters.",
    ],
    roleFit: [
      "Revenue Operations",
      "Revenue Systems",
      "CRM Operations",
      "Business Systems",
      "Sales Operations",
      "GTM Operations",
      "Operations Coordination",
      "Workflow Automation",
    ],
  },

  overview: [
    "Owned the system architecture end to end — from event routing and specialist-agent responsibilities to CRM controls, approval policies, integration contracts, error handling, recovery and production-readiness validation.",
    "Built a last fully verified core bundle of 54 governed production workflows / 646 documented nodes spanning Sales CRM, Client Operations, Project Operations, Communications, Customer Success, Finance & Billing, RevOps Analytics, security, monitoring, approvals, integrations and recovery.",
    "Designed one Supervisor plus seven domain specialists so each business function has a clear operating boundary instead of relying on one unrestricted AI agent.",
    "Created a governed execution layer where state-changing actions must pass deterministic permission, required-field, risk, approval and business-rule checks before they can change CRM, communication or operational data.",
    "Implemented replay-safe automation using idempotency keys, durable action evidence and deterministic post-action evaluation so retries and repeated events do not silently create duplicate business side effects.",
    "Validated Groq as the primary reasoning provider with Google Gemini as an independent fallback across all eight reasoning workflows, reducing dependence on a single AI provider.",
    "Built and validated provider adapters for HubSpot, Salesforce, Gmail and Google Calendar; kept CRM routing provider-neutral so the system can change providers without rebuilding the entire operating model.",
    "Completed a controlled local core cutover with PRODUCTION_READY=true, 21/21 agent-access security, 11/11 RBAC & tenant-isolation checks and 22/22 readiness checks while keeping public VPS/domain/TLS deployment explicitly separate until hosting is available.",
    "Extended the platform into a CRM-first Sales Ops operating model so sales reps can work primarily in the configured CRM while the Business OS handles qualification, routing, owner verification, SLA monitoring, notifications, approvals and exception handling.",
    "Validated a controlled intake-to-CRM path through Google Form → canonical PostgreSQL lead → qualification → routing → HubSpot contact projection → independent provider readback → rep notification → protected deal-approval state, with provider failures recovered through the same incident and DLQ architecture.",
  ],

  problem:
    "Revenue and operations teams often accumulate disconnected automations across CRM, email, calendars, onboarding and project delivery. That creates duplicated work, inconsistent handoffs, fragile integrations and poor visibility. Adding AI can make the risk worse if an agent can write directly to business systems, retry mutations blindly or continue after ambiguous failures. I wanted to design a reusable operating layer that could coordinate multiple business functions while keeping important actions controlled, traceable and recoverable.",

  solution:
    "I designed the project as a business operating system rather than a collection of point-to-point automations. A central Supervisor classifies each event and routes it to the right domain specialist. Specialists can reason and plan, but business mutations remain behind bounded tool gateways and deterministic guardrails. High-risk actions pause for human approval, successful mutations are protected by idempotency, results are verified before completion, and failures enter a controlled recovery path with exact-match handlers and human escalation. I also separated CRM/provider logic from the operating model, allowing PostgreSQL, HubSpot and Salesforce to sit behind the same governed execution architecture.",

  architecture: [
    "Business event → normalized event envelope with correlation, risk and idempotency context",
    "Supervisor → classifies intent and routes work to the correct domain specialist",
    "Domain specialist → produces a bounded operational decision instead of direct unrestricted mutation",
    "Provider-neutral tool gateway → converts the decision into an approved business action contract",
    "CRM-first sales execution → resolves the logical owner, projects the record to the configured CRM, creates the CRM work context and notifies the assigned rep",
    "Guardrail engine → checks permissions, required inputs, risk, approvals and business rules",
    "Human approval → pauses high-risk actions and resumes only the exact stored request",
    "Idempotent action layer → executes business or provider action without duplicate replay",
    "Deterministic evaluation → verifies the result before marking the operation completed",
    "Recovery layer → routes technical failures through exact-match retry/repair contracts or human review",
    "Operations status layer → exposes agent, integration, approval, recovery, error and DLQ health",
  ],

  workflow: [
    "Receive & Normalize Business Event",
    "Classify Intent, Risk & Operating Context",
    "Route to the Correct Specialist Agent",
    "Create a Bounded Business Action Request",
    "Validate Permissions & Required Inputs",
    "Apply Risk, Approval & Business Rules",
    "Pause for Human Approval When Required",
    "Execute the Idempotent Business/Provider Action",
    "Verify the Outcome Deterministically",
    "Persist Audit & Operational Evidence",
    "Recover Safely or Escalate When Evidence Is Insufficient",
    "Return Final Business Status",
  ],

  automation: [
    {
      title: "Revenue & Operations Orchestration",
      description:
        "Coordinates CRM, onboarding, project delivery, communications, customer success, finance and analytics through one governed operating model instead of disconnected automations.",
      icon: "bot",
    },
    {
      title: "CRM Governance & Provider Portability",
      description:
        "Keeps CRM execution behind a provider-neutral gateway so PostgreSQL, HubSpot and Salesforce can follow the same business rules, approvals and audit controls.",
      icon: "crm",
    },
    {
      title: "Human-in-the-Loop Controls",
      description:
        "High-risk outreach and state-changing operations pause for durable approval and resume only the exact approved request rather than regenerating a new one.",
      icon: "workspace",
    },
    {
      title: "Replay-Safe Automation",
      description:
        "Uses stable idempotency keys and durable provider evidence to prevent duplicate CRM, calendar or communication side effects during retries and workflow replay.",
      icon: "database",
    },
    {
      title: "AI Provider Resilience",
      description:
        "Uses Groq as the primary model and a separately configured Gemini fallback across all eight reasoning agents so one provider failure does not stop the operating layer.",
      icon: "bot",
    },
    {
      title: "Operational Monitoring & Recovery",
      description:
        "Tracks integrations, agent health, approvals, errors, recovery jobs and DLQ state while exact-match recovery handlers prevent unsafe generic mutation replay.",
      icon: "sheet",
    },
  ],

  governance: [
    {
      title: "Least-Privilege AI Execution",
      description:
        "Agents reason and recommend actions but do not receive unrestricted database or provider mutation authority. State changes remain behind bounded tool contracts.",
    },
    {
      title: "Deterministic Business Controls",
      description:
        "Permissions, required inputs, risk, approval rules and business rules are evaluated deterministically instead of being left to model judgment.",
    },
    {
      title: "Approval Before High-Risk Actions",
      description:
        "Approval-required operations persist their request, pause safely and resume from the approved state without inventing or regenerating the action.",
    },
    {
      title: "Idempotency & Auditability",
      description:
        "Successful business and provider actions retain stable evidence so repeated events can reuse prior results instead of causing duplicate side effects.",
    },
    {
      title: "Fail-Closed Recovery",
      description:
        "Technical recovery only runs when the exact handler, durable evidence and replay contract exist. Missing, stale or ambiguous evidence escalates to human review.",
    },
    {
      title: "Controlled Specialist Authority",
      description:
        "Finance & Billing, Customer Success and RevOps Analytics are intentionally advisory-only until separate mutation contracts are designed and validated.",
    },
  ],

  heroImage: "/images/projects/ai-business-os/00-control-center-hero.webp",

  gallery: [
    {
      image: "/images/projects/ai-business-os/01-control-center.webp",
      title: "AI Business OS — Local Production Control Center",
      description:
        "Recruiter-facing control center evidence from the earlier verified release; the current documented core has since advanced to 54 governed workflows / 646 nodes, 22/22 readiness, 21/21 agent-access security and 11/11 RBAC/tenant isolation.",
    },
    {
      image: "/images/projects/ai-business-os/02-production-readiness.webp",
      title: "Production-Readiness Validation Evidence",
      description:
        "Production-readiness evidence from the local validation sequence; the latest fully verified core release reports PRODUCTION_READY=true with 22/22 readiness checks plus separate agent-access and RBAC/tenant-security validators.",
    },
    {
      image: "/images/projects/ai-business-os/03-supervisor.webp",
      title: "Supervisor Orchestration with Cross-Provider AI Fallback",
      description:
        "AGENT-00 receives and validates a business event, loads authoritative configuration, routes through the Supervisor, validates the structured decision, persists the result and uses Groq as the primary model with Gemini as an independent fallback.",
    },
    {
      image: "/images/projects/ai-business-os/04-crm-gateway.webp",
      title: "Governed CRM Tool Gateway",
      description:
        "Provider-neutral CRM execution layer that normalizes the request, checks least-privilege permissions, separates allowed, blocked and approval-required actions, executes the approved PostgreSQL CRM path and routes runtime failures through centralized error handling.",
    },
    {
      image: "/images/projects/ai-business-os/05-human-approval-gateway.webp",
      title: "Human Approval Gateway",
      description:
        "Reusable approval workflow that normalizes a guarded action, persists the exact approval request in PostgreSQL, returns a stable approval state and routes persistence failures through the canonical Business OS error path.",
    },
    {
      image: "/images/projects/ai-business-os/11-approval-decision-resume.webp",
      title: "Approval Decision & Exact Action Resume",
      description:
        "Published approval-resume workflow that applies a human decision, reconstructs the exact stored action, validates the approved tool dispatch, routes communications, finance and CRM actions through bounded replay paths, evaluates the result, finalizes durable state in PostgreSQL and sends failures through the canonical error path.",
    },
    {
      image: "/images/projects/ai-business-os/06-recovery-worker.webp",
      title: "Bounded Recovery Queue Worker",
      description:
        "Recovery worker that claims due work, validates the registered recovery contract, executes only approved handlers, normalizes handler success or failure, finalizes the attempt and escalates unsupported or unresolved recovery work to human review.",
    },
    {
      image: "/images/projects/ai-business-os/07-idempotent-retry.webp",
      title: "Idempotent Tool Adapter Retry",
      description:
        "Exact-match retry handler that validates the technical retry contract, retries only a previously evidenced durable tool adapter operation and returns a bounded result instead of replaying arbitrary state-changing work.",
    },
    {
      image: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
      title: "Governed HubSpot CRM Adapter",
      description:
        "HubSpot CRM v3 adapter with request normalization, integration gating, idempotency reuse, routed contact/deal operations, durable success logging and centralized provider-error handling. The latest verified CRM-first run also proved provider readback, integration-audit persistence and incident/DLQ remediation.",
    },
    {
      image: "/images/projects/ai-business-os/09-calendar-adapter.webp",
      title: "Replay-Safe Google Calendar Integration",
      description:
        "Google Calendar adapter that checks prior idempotency evidence before creating an approved event, reuses prior success instead of duplicating it, enforces the write gate and routes provider failures through the Business OS error path.",
    },
    {
      image: "/images/projects/ai-business-os/10-revops-analytics.webp",
      title: "RevOps Analytics Advisory Agent",
      description:
        "Dedicated RevOps analytics specialist with validated structured output, Groq primary reasoning, Gemini fallback and an advisory-only authority boundary that prevents direct mutation of operational systems.",
    },
  ],

  results: [
    "Built a last fully verified core bundle of 54 governed production workflows / 646 documented nodes covering Revenue Operations and Business Operations execution, governance, integrations, security, monitoring and recovery.",
    "Passed the last fully verified core release with PRODUCTION_READY=true, 21/21 agent-access security, 11/11 RBAC & tenant-isolation checks, and 22/22 production-readiness checks.",
    "Validated all 8 reasoning agents with Groq primary and Google Gemini cross-provider fallback.",
    "Validated 4 external providers — HubSpot, Salesforce, Gmail and Google Calendar — through controlled staging-write evidence and replay/idempotency checks.",
    "Validated 8 exact-match recovery registrations for bounded retry/repair behavior instead of generic state-changing replay.",
    "A historical core-cutover snapshot recorded 0 open recovery jobs, 0 unresolved errors and 0 unresolved DLQ items at that time; a later database review showed separate OPEN/ESCALATED provider and MCP exceptions, so the snapshot is not a claim of current all-clear health.",
    "Verified that the cutover/readiness validation itself created 0 new provider deliveries and 0 new integration actions.",
    "Kept CRM architecture provider-neutral: required local HubSpot controls are enabled while the main CRM gateway remains on postgres_dev and optional Salesforce writes remain disabled.",
    "Maintained pre-cutover and post-cutover rollback backups, plus an isolated PostgreSQL restore proof covering 41 Business OS tables.",
    "Validated the CRM-first sales path with a canonical qualified lead, verified owner routing, a 24-hour SLA, delivered rep/approval notifications and a protected pending deal decision.",
    "Recovered a failed HubSpot projection without creating a duplicate canonical lead: the same lead was successfully projected as HubSpot contact 880647909565, independently read back from HubSpot and logged as SUCCESS in the integration action ledger.",
    "Preserved the HTTP-method and unique-property HubSpot failures as audit evidence and resolved those two named incidents after successful remediation; separate provider/MCP incidents remained OPEN or ESCALATED in the later database review.",
  ],

  documentation: [
    {
      title: "AI Business OS Technical Case Study",
      description:
        "Architecture, governance, integration, recovery, local production validation and recruiter-facing implementation evidence.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-business-os/README.md",
      status: "Completed",
    },
    {
      title: "Verified Evidence Matrix & Claim Boundaries",
      description:
        "Separates committed screenshots, persisted provider/audit evidence, historical readiness snapshots, recovery tests, and current incident-state limitations.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-business-os/EVIDENCE-MATRIX.md",
      status: "Completed",
    },
    {
      title: "Client Implementation Checklist",
      description:
        "Reusable checklist for adapting owners, providers, policies, credentials, approval rules and operational controls to a real client environment.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-business-os/CLIENT-IMPLEMENTATION-CHECKLIST.md",
      status: "Completed",
    },
    {
      title: "UAT Checklist",
      description:
        "Structured validation checklist for core business paths, governance, integration behavior, recovery and handover readiness.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-business-os/UAT-CHECKLIST.md",
      status: "Completed",
    },
  ],

  interviewTalkingPoints: [
    {
      question: "Give me the 30-second overview.",
      answer:
        "I designed and built a governed Revenue Operations and Business Systems platform in n8n and PostgreSQL. It coordinates specialist AI agents, but AI is not allowed to directly control business systems. Deterministic permissions, human approvals, idempotency, CRM owner mapping, provider adapters, monitoring and recovery control the actual operations. I also implemented a CRM-first sales path so reps can work in HubSpot or another CRM while the Business OS handles routing, SLA, notifications, approvals and auditability behind the scenes.",
    },
    {
      question: "What business problem were you solving?",
      answer:
        "The problem was fragmented revenue and operations workflows. Lead intake, CRM ownership, follow-up, approvals, communications, onboarding and reporting often become separate automations with inconsistent rules and weak failure handling. I designed one reusable operating layer so those processes share the same state, governance, audit trail and exception model.",
    },
    {
      question: "What did you personally own?",
      answer:
        "I owned the architecture, workflow design, PostgreSQL data model, specialist-agent boundaries, CRM integration strategy, approval model, owner mapping, security controls, monitoring, recovery design, controlled testing and handover documentation. I treated the automation as part of a broader Revenue Systems implementation rather than the final product by itself.",
    },
    {
      question: "How does the CRM-first sales workflow work?",
      answer:
        "An inbound lead is normalized into the canonical lead model, qualified, routed to a logical sales owner, projected to the configured CRM with a verified provider owner, and surfaced to the rep through a notification and CRM work context. The Business OS tracks SLA and exceptions in the background. If the lead is commercially eligible, deal creation still pauses for a human decision before any material CRM deal write.",
    },
    {
      question: "How do you stop AI from becoming a security or data-governance risk?",
      answer:
        "AI can interpret and recommend, but it does not receive unrestricted provider or database authority. State-changing actions use bounded tool contracts, deterministic permission and business-rule checks, tenant-aware identity, approval gates and idempotency. Unsupported or ambiguous recovery fails closed and escalates instead of letting the model improvise.",
    },
    {
      question: "Tell me about a real failure you handled.",
      answer:
        "During the HubSpot CRM-first validation, the provider write failed first because the HTTP action was not explicitly stored as POST, then because an existing custom lead-score field had been configured as unique even though scores can repeat. Both failures entered the incident and dead-letter path. I corrected the adapter and field mapping, retried the same canonical lead idempotently, verified the HubSpot contact and PostgreSQL action log, then marked the original incidents resolved without deleting their history.",
    },
    {
      question: "Why is this relevant to Revenue Operations or Business Systems?",
      answer:
        "The project demonstrates the work behind a reliable revenue operating system: process design, CRM ownership, lead routing, approvals, data governance, integration architecture, rep workflow, SLA monitoring, exception handling, auditability and handover. AI and automation support the process, but the core value is designing a business system that people can actually operate and trust.",
    },
  ],

  technologies: [
    technologies.n8n,
    technologies.postgresql,
    technologies.hubspot,
    technologies.salesforce,
    technologies.gmail,
    technologies.groq,
    technologies.gemini,
    technologies.docker,
  ],

  metrics: [
    "54 governed production workflows / 646 documented nodes",
    "22/22 local production-readiness checks passed",
    "8 specialist reasoning agents with cross-provider fallback",
    "4 external integrations staging-write validated",
    "8 exact-match bounded recovery handlers",
  ],

  stats: [
    { value: 54, suffix: " workflows", label: "Verified Core Bundle" },
    { value: 8, suffix: " agents", label: "Specialist AI System" },
    { value: 22, suffix: "/22", label: "Production Readiness" },
  ],

  before: [
    "CRM, communications, onboarding and project workflows can become disconnected as automation grows.",
    "A single unrestricted AI agent creates unclear ownership and unnecessary mutation risk.",
    "Point-to-point integrations make CRM/provider changes expensive and tightly coupled.",
    "Blind retries can duplicate emails, calendar events or CRM mutations.",
    "Single-model dependency creates an avoidable failure point for AI-assisted operations.",
    "Failures without durable evidence are difficult to recover safely or audit afterward.",
  ],

  after: [
    "One operating layer coordinates seven business domains through clearly bounded specialist ownership.",
    "AI reasoning is separated from deterministic business-system execution and approval controls.",
    "CRM and external providers sit behind governed adapters instead of being hard-coded into every workflow.",
    "Idempotency and durable provider evidence make critical automations replay-safe.",
    "All eight reasoning agents have validated Groq → Gemini provider fallback.",
    "Exact-match recovery handlers, DLQ and human escalation create a controlled failure path.",
    "A live read-only control dashboard exposes agent, integration, approval and recovery health.",
    "The last fully verified core release reached 22/22 local production readiness with separate 21/21 agent-access and 11/11 RBAC/tenant-security validation, without overstating public/VPS deployment.",
  ],

  automationImage: "/images/projects/ai-business-os/04-crm-gateway.webp",
  github: "https://github.com/Nikkypwetti/nikkytechies-portfolio/tree/main/docs/ai-business-os",
  demo: "",
};
