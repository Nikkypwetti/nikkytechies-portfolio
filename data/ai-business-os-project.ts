import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const aiBusinessOsProject: Project = {
  slug: "ai-business-os-multi-agent-operations",
  title: "AI Business OS — Production-Hardened RevOps & Business Systems Platform",
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
    "Designed and built a 40-workflow AI-powered Revenue Operations and Business Systems platform in n8n + PostgreSQL, coordinating 8 specialist agents across CRM, client operations, project delivery, communications, customer success, finance and RevOps analytics. Production-hardened the system with human approvals, idempotency, provider fallback, bounded recovery and guarded HubSpot/Gmail/Calendar/Salesforce integrations, then passed a 20/20 local production-readiness gate.",

  overview: [
    "Owned the system architecture end to end — from event routing and specialist-agent responsibilities to CRM controls, approval policies, integration contracts, error handling, recovery and production-readiness validation.",
    "Built a 40-workflow production bundle spanning Sales CRM, Client Operations, Project Operations, Communications, Customer Success, Finance & Billing, RevOps Analytics, monitoring, approvals, integrations and recovery.",
    "Designed one Supervisor plus seven domain specialists so each business function has a clear operating boundary instead of relying on one unrestricted AI agent.",
    "Created a governed execution layer where state-changing actions must pass deterministic permission, required-field, risk, approval and business-rule checks before they can change CRM, communication or operational data.",
    "Implemented replay-safe automation using idempotency keys, durable action evidence and deterministic post-action evaluation so retries and repeated events do not silently create duplicate business side effects.",
    "Validated Groq as the primary reasoning provider with Google Gemini as an independent fallback across all eight reasoning workflows, reducing dependence on a single AI provider.",
    "Built and validated provider adapters for HubSpot, Salesforce, Gmail and Google Calendar; kept CRM routing provider-neutral so the system can change providers without rebuilding the entire operating model.",
    "Completed a controlled local production cutover with PRODUCTION_READY=true and 20/20 checks while keeping public VPS/domain/TLS deployment explicitly separate until hosting is available.",
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
        "Recruiter-facing control center showing 20/20 local production readiness, 40 governed workflows, 8 specialist AI agents, integration readiness, safety controls, recovery state and the explicit local-production deployment boundary.",
    },
    {
      image: "/images/projects/ai-business-os/02-production-readiness.webp",
      title: "20/20 Production-Readiness Validation",
      description:
        "Canonical production-readiness validator confirming PRODUCTION_READY=true with all 20 checks passing across workflow packaging, provider fallback, integration gates, recovery state, production configuration and deployment safeguards.",
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
        "HubSpot adapter with request normalization, integration gating, idempotency reuse, allowed and blocked branches, routed contact/deal operations, durable success logging and centralized provider-error handling.",
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
    "Built a 40-workflow production bundle covering core Revenue Operations and Business Operations execution, governance, integrations, monitoring and recovery.",
    "Passed the final local production-readiness validator with PRODUCTION_READY=true and 20/20 checks.",
    "Validated all 8 reasoning agents with Groq primary and Google Gemini cross-provider fallback.",
    "Validated 4 external providers — HubSpot, Salesforce, Gmail and Google Calendar — through controlled staging-write evidence and replay/idempotency checks.",
    "Validated 8 exact-match recovery registrations for bounded retry/repair behavior instead of generic state-changing replay.",
    "Completed the local cutover with 0 open recovery jobs, 0 unresolved errors and 0 unresolved DLQ items.",
    "Verified that the cutover/readiness validation itself created 0 new provider deliveries and 0 new integration actions.",
    "Kept CRM architecture provider-neutral: required local HubSpot controls are enabled while the main CRM gateway remains on postgres_dev and optional Salesforce writes remain disabled.",
    "Maintained pre-cutover and post-cutover rollback backups, plus an isolated PostgreSQL restore proof covering 41 Business OS tables.",
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
    "40 production workflows across RevOps & Business Operations",
    "20/20 local production-readiness checks passed",
    "8 specialist reasoning agents with cross-provider fallback",
    "4 external integrations staging-write validated",
    "8 exact-match bounded recovery handlers",
  ],

  stats: [
    { value: 40, suffix: " workflows", label: "Production Bundle" },
    { value: 8, suffix: " agents", label: "Specialist AI System" },
    { value: 20, suffix: "/20", label: "Production Readiness" },
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
    "The system reached a verified 20/20 local production-readiness gate without overstating public/VPS deployment.",
  ],

  automationImage: "/images/projects/ai-business-os/04-crm-gateway.webp",
};
