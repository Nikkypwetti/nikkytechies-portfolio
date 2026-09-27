import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const aiBusinessOsProject: Project = {
  slug: "ai-business-os-multi-agent-operations",
  title: "AI Business OS — Multi-Agent Revenue & Operations Automation",
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
    "Built and production-hardened a local AI Business OS that coordinates Revenue Operations and Business Operations through bounded specialist agents, deterministic guardrails, human approvals, idempotency, cross-provider model fallback, audited integrations and recovery controls. The verified local production gate passes 20/20 checks.",

  overview: [
    "Designed one Supervisor plus seven domain specialists covering Sales CRM, Client Operations, Project Operations, Communications, Finance & Billing, Customer Success and RevOps Analytics.",
    "Kept execution bounded: agents plan and reason, while mutations pass through provider-neutral tool gateways, deterministic permission/risk checks, required-input validation, approval rules and business rules.",
    "Implemented stable idempotency keys, deterministic post-action evaluation, centralized node/workflow error handling, dead-letter handling and exact-match recovery handlers instead of generic mutation replay.",
    "Configured Groq as the primary reasoning provider with Google Gemini as the validated cross-provider fallback across all eight reasoning workflows.",
    "Built guarded integration adapters for HubSpot, Gmail, Google Calendar, Airtable and Salesforce. HubSpot, Gmail, Google Calendar and Salesforce completed controlled staging validation with durable evidence.",
    "Completed a deliberate local production cutover: the production profile and required HubSpot, Gmail and Google Calendar gates are enabled, while the CRM gateway still defaults to postgres_dev and optional Salesforce/Airtable writes remain disabled.",
    "Reached PRODUCTION_READY=true with 20/20 local readiness checks while keeping the internet-facing VPS/domain/TLS deployment explicitly out of scope until hosting is available.",
  ],

  problem:
    "Operational automation becomes risky when AI can mutate CRM, communications or delivery systems without deterministic controls. The project needed to coordinate multiple business functions while preventing duplicate side effects, unsafe provider writes, silent model failures and unbounded recovery.",

  solution:
    "Built a reusable n8n + PostgreSQL operating layer where a Supervisor routes work to bounded specialist agents. Each state-changing action moves through a stable tool contract, guardrail engine, approval policy, idempotency barrier and deterministic evaluation. Provider failures are normalized centrally, recoverable operations use exact-match bounded handlers, and all reasoning agents have a distinct Gemini fallback behind Groq. Production integrations are gated independently so local production can be validated without pretending the system is already deployed to a public VPS.",

  architecture: [
    "Business event → normalized event envelope with correlation and idempotency keys",
    "AGENT-00 Supervisor → routes to exactly one approved specialist",
    "Specialist agent → bounded planning and structured decision output",
    "MCP / internal adapter → provider-neutral tool contract",
    "Tool Gateway → action normalization and permission boundary",
    "SYS-02 Guardrail Engine → permissions, required inputs, risk, approval and business rules",
    "Approved action → idempotent business mutation or provider adapter",
    "SYS-03 Evaluation Engine → deterministic verification before COMPLETED",
    "SYS-01 / SYS-04 / SYS-06 → normalized errors, recovery directives and exact-match bounded recovery",
    "Audit + operational status → persistent execution, approval, evaluation, integration and recovery evidence",
  ],

  workflow: [
    "Receive Business Event",
    "Normalize Event & Establish Correlation",
    "Route Through Supervisor",
    "Invoke Domain Specialist",
    "Prepare Bounded Tool Request",
    "Run Deterministic Guardrails",
    "Pause for Human Approval When Required",
    "Execute Idempotent Business/Provider Action",
    "Run Deterministic Post-Action Evaluation",
    "Persist Audit Evidence",
    "Route Failures to Recovery or Human Review",
    "Return Final Operational Status",
  ],

  automation: [
    {
      title: "Supervisor Routing",
      description:
        "Routes normalized business events to one bounded specialist while preserving risk, confidence, correlation and execution context.",
      icon: "bot",
    },
    {
      title: "Guarded Tool Execution",
      description:
        "Moves mutations through permission, required-input, risk, approval and business-rule checks before any state-changing action can execute.",
      icon: "database",
    },
    {
      title: "CRM Provider Gateway",
      description:
        "Supports provider-neutral CRM execution with PostgreSQL as the current primary route and validated HubSpot/Salesforce adapters behind explicit write gates.",
      icon: "crm",
    },
    {
      title: "Approval-Gated Communications",
      description:
        "Requires durable human approval before external communication and uses provider delivery evidence plus replay controls.",
      icon: "email",
    },
    {
      title: "Bounded Recovery",
      description:
        "Uses exact-match recovery registrations, durable failed-tool evidence, bounded attempts and fail-closed human escalation instead of blind mutation replay.",
      icon: "workspace",
    },
    {
      title: "Operational Monitoring",
      description:
        "Exposes read-only health and readiness evidence across agents, integrations, approvals, recovery queues, errors and DLQ state.",
      icon: "sheet",
    },
  ],

  governance: [
    {
      title: "No unrestricted agent mutation",
      description:
        "Agents do not receive raw unrestricted database mutation authority. Business changes flow through bounded gateways and deterministic guardrails.",
    },
    {
      title: "Human approval for high-risk actions",
      description:
        "Approval-required operations persist their exact request and resume only from the stored approved state.",
    },
    {
      title: "Replay-safe execution",
      description:
        "Stable idempotency keys and provider evidence prevent successful mutations from being executed again when workflows are replayed.",
    },
    {
      title: "No generic mutation recovery",
      description:
        "Recovery is registered by exact policy and operation. Missing, stale or ambiguous evidence fails closed to human review.",
    },
    {
      title: "Advisory-only specialist boundary",
      description:
        "Finance & Billing, Customer Success and RevOps Analytics are active for reasoning but retain zero mutation authority until separate contracts are audited.",
    },
    {
      title: "Honest deployment boundary",
      description:
        "The project is documented as local production-ready, not as an internet-facing deployment. VPS, domain and TLS rollout are intentionally deferred.",
    },
  ],

  gallery: [],

  results: [
    "Passed the final local production-readiness validator with PRODUCTION_READY=true and 20/20 checks.",
    "Validated eight reasoning agents with Groq primary and Google Gemini cross-provider fallback.",
    "Validated eight exact-match autonomous recovery registrations while keeping the SYS-06 automatic schedule deliberately disabled for the future public rollout.",
    "Kept recovery queue, unresolved error set and unresolved DLQ at zero during cutover verification.",
    "Validated controlled staging writes for HubSpot, Salesforce, Gmail and Google Calendar with durable provider evidence and idempotency controls.",
    "Enabled required local-production gates for HubSpot, Gmail and Google Calendar without switching the CRM gateway away from postgres_dev.",
    "Kept optional Salesforce and Airtable permanent write gates disabled; Airtable remains constrained by its provider API billing limit.",
    "Verified that the cutover/readiness validation itself created zero new provider deliveries and zero new integration actions.",
    "Maintained rollback coverage with pre-cutover and compact post-cutover backups.",
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
    "20/20 local production-readiness checks passed",
    "8 reasoning agents with cross-provider fallback",
    "8 exact-match bounded recovery handlers",
    "4 external integrations staging-write validated",
    "0 open recovery, error or DLQ items at cutover",
  ],

  stats: [
    { value: 20, suffix: "/20", label: "Local Production Readiness" },
    { value: 8, suffix: " agents", label: "Reasoning Workflows" },
    { value: 4, suffix: " integrations", label: "Staging-Write Validated" },
  ],

  before: [
    "Business operations and provider actions could be fragmented across separate CRM, communications and delivery workflows.",
    "AI-assisted execution needs stronger controls than prompt instructions alone.",
    "Retries can duplicate mutations when idempotency and durable evidence are not enforced.",
    "Provider/model failure can become a single point of failure without an independent fallback path.",
    "Recovery can become unsafe when it blindly replays failed state-changing work.",
  ],

  after: [
    "One Supervisor routes work across seven bounded domain specialists.",
    "Mutations pass through deterministic guardrails, approvals, idempotency and evaluation.",
    "Provider adapters retain independent readiness/write gates and durable action evidence.",
    "All eight reasoning workflows use validated Groq → Gemini fallback.",
    "Recovery uses exact-match handlers, bounded attempts and fail-closed human escalation.",
    "The local production gate is green at 20/20 while public VPS deployment remains explicitly deferred.",
  ],

  automationImage: "",
};
