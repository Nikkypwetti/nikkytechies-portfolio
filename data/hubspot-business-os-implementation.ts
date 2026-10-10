import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const hubspotBusinessOsImplementation: Project = {
  slug: "hubspot-revenue-operations-business-os",
  title: "HubSpot Revenue Operations & CRM Systems Implementation — Business OS",
  year: "2026",
  type: "Implementation Case Study",
  status: "Completed",
  category: "Revenue Operations",
  platforms: [
    "HubSpot",
    "n8n",
    "PostgreSQL",
    "CRM Operations",
    "Human Approval",
    "Incident Recovery",
  ],

  description:
    "Designed and validated the HubSpot CRM operating layer connected to the AI Business OS: governed lead projection, verified ownership, CRM-first rep workflow, qualification context, replay-safe writes, provider readback, incident recovery and human-controlled deal progression.",

  recruiterSummary: {
    headline:
      "HubSpot Revenue Operations implementation with CRM ownership, lead routing, data governance, human deal control, idempotency, provider verification and production-style incident recovery.",
    valueProposition:
      "This case study shows that I can work beyond HubSpot configuration alone. I connected CRM administration to the wider Revenue Operations process: authoritative lead state, qualification, routing, owner mapping, rep notification, CRM projection, deal-approval governance, provider verification and failure recovery. The result is a reusable HubSpot operating pattern that keeps reps working in CRM while business rules and audit controls remain governed outside the provider.",
    ownership: [
      "Designed the HubSpot projection contract and kept PostgreSQL as the authoritative Business OS state rather than duplicating business policy inside provider-specific workflows.",
      "Mapped logical sales ownership to a verified HubSpot owner before assigning records and built the CRM-first path around the rep's actual CRM workspace.",
      "Implemented the CRM v3 contact batch-upsert path keyed by email, qualification-property mapping, provider readback and integration action logging.",
      "Kept material deal creation behind a human approval boundary. The latest CRM-first validation stopped before deal creation; approval-ledger PENDING requests had expiry dates and are historical evidence, not necessarily actionable now.",
      "Diagnosed and remediated two real provider failures: an HTTP-method configuration defect and a CRM schema problem caused by an incorrectly unique lead-score field.",
      "Preserved incident and dead-letter evidence and verified the repaired contact in HubSpot and PostgreSQL. The two named HubSpot incidents in this remediation chain were resolved; separate provider/MCP incidents remained OPEN or ESCALATED in the later database review.",
    ],
    liveProof: [
      "Controlled CRM-first validation projected the canonical qualified lead into HubSpot as contact 880647909565.",
      "HubSpot readback confirmed the expected company, owner, qualification status/reason, budget, primary need, phone and lifecycle context.",
      "PostgreSQL integration_action_log recorded the same contact ID with SUCCESS and audit action a44ae785-58bf-44cc-abcb-d11d7d42b0d3.",
      "The numeric score of 75 remained authoritative in Business OS/PostgreSQL and in the qualification explanation after the existing HubSpot lead_score property was found to be incorrectly constrained as unique.",
      "The HTTP-method incident (INC-17060-1790799416723) and unique-property incident (INC-17143-1790801414476) were marked RESOLVED with remediation evidence. Separate provider/MCP incidents remained OPEN or ESCALATED in the later review.",
      "The final retry used the same canonical lead and idempotency key, proving recovery against the intended business operation rather than creating a new local lead.",
      "The current clean CRM-first path intentionally stops at human deal approval; no deal was created without a sales decision.",
    ],
    roleFit: [
      "HubSpot Administration",
      "CRM Operations",
      "Revenue Operations",
      "Sales Operations",
      "Revenue Systems",
      "Business Systems",
      "GTM Operations",
    ],
  },

  overview: [
    "Implemented HubSpot as the sales-facing CRM projection while PostgreSQL remains the authoritative Business OS state.",
    "Connected the CRM-first sales path from canonical lead qualification and routing through verified HubSpot owner mapping, contact projection, provider readback and rep work context.",
    "Mapped qualification status, qualification reason, budget confirmation, budget range, primary need and need details into HubSpot for practical sales visibility.",
    "Kept the numeric lead score authoritative in PostgreSQL after discovering that the existing HubSpot lead_score property had been configured as unique and therefore could not safely represent repeated scores.",
    "Protected successful provider writes with stable idempotency evidence so a retry can reuse or reconcile the same business operation rather than creating duplicate CRM state.",
    "Kept material deal creation behind the Business OS human-approval boundary; the current clean lead remains a protected pending commercial decision.",
    "Validated production-style failure handling by preserving provider errors in incident and dead-letter records, correcting the root causes, verifying the repaired CRM write and closing the incidents without deleting history.",
    "Completed a three-layer verification chain: HubSpot provider SUCCESS, independent HubSpot readback, and PostgreSQL integration audit with the matching provider object ID.",
  ],

  problem:
    "A HubSpot implementation becomes fragile when qualification, routing, ownership, approval and recovery logic are scattered across provider-specific workflows. That creates wrong-owner risk, duplicate writes, inconsistent CRM fields and weak auditability. The goal was to make HubSpot useful as the rep workspace while keeping the underlying Revenue Operations policy reusable, governed and recoverable.",

  solution:
    "I implemented HubSpot behind the Business OS provider-neutral CRM projection layer. Canonical lead state is qualified and routed before provider execution, the logical sales identity is resolved to a verified HubSpot owner, the contact is upserted through a bounded provider action, the response is normalized and written to the integration audit ledger, and material deal creation remains human-controlled. When the provider failed, the same architecture preserved the incident, allowed root-cause remediation and supported a controlled retry against the same canonical lead.",

  architecture: [
    "Inbound lead → canonical Business OS lead in PostgreSQL",
    "Deterministic qualification and routing",
    "Logical sales owner → verified HubSpot owner mapping",
    "Provider-neutral CRM projection decision",
    "HubSpot CRM v3 batch upsert keyed by email",
    "Provider response normalization and CRM record URL",
    "Integration action log with provider object ID",
    "Rep notification / CRM-first work context",
    "Human deal-eligibility decision",
    "Approved deal creation path only after human decision",
    "Provider error → incident → dead letter → remediation → verified retry → resolved audit trail",
  ],

  workflow: [
    "Normalize Canonical Lead State",
    "Qualify and Route Lead",
    "Resolve Verified HubSpot Owner",
    "Check Integration and Write Gates",
    "Check Idempotency Evidence",
    "Upsert HubSpot Contact",
    "Normalize Provider Result",
    "Persist Integration Audit",
    "Notify Assigned Rep",
    "Hold Deal Progression for Human Approval",
    "Recover Provider Failure Without Duplicating Canonical State",
  ],

  automation: [
    {
      title: "CRM-First Contact Projection",
      description:
        "Projects the approved canonical lead into HubSpot so the sales rep receives a usable CRM record without moving business authority into provider-specific workflow logic.",
      icon: "crm",
    },
    {
      title: "Verified Owner Resolution",
      description:
        "Maps the logical Business OS sales owner to a verified HubSpot owner ID before CRM assignment and fails closed when a required mapping is unavailable.",
      icon: "database",
    },
    {
      title: "Human Deal Approval",
      description:
        "Keeps commercial deal eligibility as a human-controlled decision; the current clean test intentionally stops at PENDING approval with no unauthorized deal creation.",
      icon: "workspace",
    },
    {
      title: "Replay-Safe Provider Writes",
      description:
        "Uses stable idempotency and durable integration evidence so recovery targets the same business action instead of creating duplicate provider records.",
      icon: "database",
    },
    {
      title: "Provider Readback & Audit",
      description:
        "Normalizes the HubSpot response, captures the provider object ID and record URL, and persists the success in PostgreSQL for traceability.",
      icon: "crm",
    },
    {
      title: "Incident & DLQ Recovery",
      description:
        "Routes provider failures into centralized incident and dead-letter handling, preserves the failure evidence, and closes the records only after the repaired action is verified.",
      icon: "database",
    },
  ],

  governance: [
    {
      title: "Authoritative-State Boundary",
      description:
        "PostgreSQL remains authoritative for Business OS lead state; HubSpot is the governed sales-facing projection.",
    },
    {
      title: "Verified Owner Mapping",
      description:
        "Provider ownership is resolved through explicit CRM owner mappings rather than display-name guessing or arbitrary assignment.",
    },
    {
      title: "Human Commercial Control",
      description:
        "Contact visibility can be automated, but material deal creation remains subject to the Business OS approval policy.",
    },
    {
      title: "CRM Field Governance",
      description:
        "Provider fields are treated as governed implementation details. When the existing HubSpot lead_score field proved unsafe because it enforced uniqueness, the integration stopped projecting that numeric field rather than corrupting CRM data.",
    },
    {
      title: "Replay Safety & Evidence",
      description:
        "Stable idempotency keys, provider object IDs and integration logs make retries traceable and protect against duplicate business side effects.",
    },
    {
      title: "Audit-Preserving Recovery",
      description:
        "Failed executions, incidents and dead-letter records are retained as evidence and moved to RESOLVED only after the remediation is verified.",
    },
  ],

  heroImage: "/images/projects/ai-business-os/08-hubspot-adapter.webp",

  gallery: [
    {
      image: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
      title: "Governed HubSpot CRM Adapter",
      description:
        "HubSpot CRM v3 adapter with request normalization, integration gating, idempotency checks, provider action routing, normalized results, durable success logging and centralized provider-error handling. The final verified path created the CRM contact, returned the provider record ID and passed independent HubSpot readback.",
    },
    {
      image: "/images/projects/ai-business-os/07-idempotent-retry.webp",
      title: "Replay-Safe Recovery Pattern",
      description:
        "The same Business OS recovery pattern used during the HubSpot remediation: preserve the original operation, repair the root cause, replay the intended canonical action and verify the provider result instead of creating a replacement test record.",
    },
    {
      image: "/images/projects/ai-business-os/05-human-approval-gateway.webp",
      title: "Human Commercial Approval Boundary",
      description:
        "Protected approval architecture keeps material deal creation separate from contact projection. The final CRM-first validation stopped before deal creation; approval-ledger PENDING rows had expired by the later review and are not presented as currently actionable.",
    },
    {
      image: "/images/projects/ai-business-os/04-crm-gateway.webp",
      title: "Provider-Neutral CRM Gateway",
      description:
        "Business OS CRM gateway separating canonical lead state and governance from provider-specific HubSpot execution, allowing the same operating model to support multiple CRM providers.",
    },
  ],

  results: [
    "Projected the current CRM-first qualified lead into HubSpot as contact 880647909565 and independently verified the record by email readback.",
    "Verified HubSpot ownership, company, phone, qualification status/reason, budget context, primary need and lifecycle-stage data on the created contact.",
    "Recorded the successful upsert in PostgreSQL integration_action_log with provider_object_id 880647909565 and audit action a44ae785-58bf-44cc-abcb-d11d7d42b0d3.",
    "Kept the lead's numeric score of 75 authoritative in Business OS/PostgreSQL after identifying that the existing HubSpot lead_score field was incorrectly configured as unique; the qualification explanation still preserves the scoring rationale for sales context.",
    "Captured the first failed retry as an incident when the HTTP Request node had not persisted POST, corrected the method, and preserved the failure record rather than deleting it.",
    "Captured the second provider failure when HubSpot rejected the repeated lead_score value, diagnosed the CRM schema issue, removed the unsafe provider field from the projection and retried the same canonical lead successfully.",
    "Moved the two related error_events and dead_letter_queue records for the HTTP-method and unique-property failures to RESOLVED with remediation notes; other provider/MCP incidents remained OPEN or ESCALATED in the later review.",
    "Maintained the protected commercial boundary: the current clean lead remains at human deal approval and no deal was created without authorization.",
    "Earlier controlled implementation tests separately validated approved HubSpot deal creation and contact–deal association; the current CRM-first proof deliberately demonstrates the governed pre-deal operating path.",
  ],

  interviewTalkingPoints: [
    {
      question: "Give me the 30-second overview.",
      answer:
        "I implemented HubSpot as the sales-facing CRM layer of a governed Revenue Operations system. Leads are qualified and routed in the Business OS, mapped to a verified HubSpot owner, projected into HubSpot through a replay-safe adapter, and then worked by the rep in CRM. The system keeps deal creation behind human approval and preserves provider failures through incident and dead-letter handling instead of hiding them.",
    },
    {
      question: "Why did you keep PostgreSQL authoritative instead of making HubSpot the source of truth?",
      answer:
        "The operating rules need to remain reusable across CRM providers. Qualification, routing, approvals, idempotency and recovery belong to the Business OS, while HubSpot represents the sales-facing CRM state. That separation lets the same operating model support a different client CRM without rebuilding the core process.",
    },
    {
      question: "How did you handle CRM ownership?",
      answer:
        "The Business OS routes to a logical sales identity first. Before the HubSpot write, that identity is resolved to a verified HubSpot owner ID. If the mapping is missing, the integration can fail closed instead of assigning the record to the wrong user.",
    },
    {
      question: "What went wrong during validation and how did you fix it?",
      answer:
        "The first provider retry failed because the HTTP Request node had not persisted POST. After fixing that, HubSpot rejected the contact because the existing lead_score property had been configured as unique, so another contact already owned the value 75. I removed that unsafe field from the provider projection, kept the score authoritative in PostgreSQL, retried the same canonical lead and verified the successful contact and audit record.",
    },
    {
      question: "How did you avoid turning the retry into a duplicate-record problem?",
      answer:
        "The retry used the same canonical lead and stable idempotency key. The repaired operation was verified against the returned HubSpot object ID and logged in the integration action ledger, so the recovery story is tied to one business entity rather than a new test record for every failure.",
    },
    {
      question: "Why didn't you create the deal during the final test?",
      answer:
        "Because the design intentionally separates contact visibility from a commercial decision. The qualified lead can be routed and made available to the rep, but deal eligibility remains a human approval. Preserving the pending approval demonstrates the control boundary more accurately than forcing a deal just to make the demo look successful.",
    },
    {
      question: "What does this show for a HubSpot or RevOps role?",
      answer:
        "It shows CRM administration in context: owner mapping, field governance, lead qualification visibility, sales workflow design, provider integration, idempotency, human approvals, incident recovery and auditability. The focus is making the CRM reliable for the sales process, not simply connecting an automation tool to HubSpot.",
    },
  ],

  documentation: [
    {
      title: "HubSpot Revenue Operations Implementation",
      description:
        "Business-facing and technical implementation summary covering the CRM-first operating model, provider controls, current proof and incident remediation.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/hubspot-business-os-implementation.md",
      status: "Completed",
    },
    {
      title: "Verified HubSpot Evidence Matrix & Claim Boundaries",
      description:
        "Provider action/readback identifiers, the two resolved remediation incidents, remaining open/escalated exceptions, approval expiry caveats, and evidence that should not be overstated.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/hubspot-business-os-implementation/EVIDENCE-MATRIX.md",
      status: "Completed",
    },
    {
      title: "AI Business OS Technical Case Study",
      description:
        "Parent architecture and governance documentation for the reusable Business OS that owns qualification, routing, approvals, provider controls and recovery.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/ai-business-os/README.md",
      status: "Completed",
    },
  ],

  technologies: [
    technologies.hubspot,
    technologies.n8n,
    technologies.postgresql,
  ],

  metrics: [
    "CRM-first HubSpot contact projection + live provider readback verified",
    "Verified owner mapping and governed qualification context",
    "2 named HubSpot incidents resolved; separate provider/MCP exceptions remain open/escalated",
    "Human deal approval preserved with no unauthorized deal creation",
  ],

  stats: [
    { value: 1, suffix: " contact", label: "Current CRM-First Projection" },
    { value: 2, suffix: " incidents", label: "Named HubSpot Incidents Resolved" },
    { value: 1, suffix: " gate", label: "Human Deal Approval" },
  ],

  before: [
    "CRM provider logic risked becoming tightly coupled to qualification, routing and approval policy.",
    "Owner assignment could be unsafe if logical sales identities were not mapped to verified CRM users.",
    "A provider failure could be hidden by simply rerunning a workflow with a new test record.",
    "A misconfigured CRM field could block otherwise valid sales records or corrupt downstream data.",
    "Material deal creation should not be delegated to an unrestricted automation or AI decision.",
  ],

  after: [
    "HubSpot operates as the sales-facing projection of authoritative Business OS lead state.",
    "Verified owner mapping controls downstream CRM assignment.",
    "The same canonical lead can be recovered through stable idempotency and provider evidence instead of creating throwaway duplicates.",
    "CRM field-model defects are surfaced as governance issues and corrected at the integration boundary rather than silently forcing bad data.",
    "The two named HubSpot remediation incidents were retained and then resolved after verification; separate provider/MCP exceptions remained open or escalated in the later review.",
    "Human deal approval remains part of the commercial control path while reps can work the qualified contact in HubSpot.",
  ],

  automationImage: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
  github:
    "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/hubspot-business-os-implementation.md",
  demo: "",
};
