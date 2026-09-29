import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const hubspotBusinessOsImplementation: Project = {
  slug: "hubspot-revenue-operations-business-os",
  title: "HubSpot Revenue Operations Implementation — Business OS",
  year: "2026",
  type: "Implementation Case Study",
  status: "Completed",
  category: "Revenue Operations",
  platforms: ["HubSpot", "n8n", "PostgreSQL", "Human Approval", "CRM Integration"],

  description:
    "Implemented HubSpot as a governed downstream CRM projection for the AI Business OS, validating contact and deal operations, qualification fields, verified owner mapping, human deal approval, readback and idempotent replay without hard-coding the operating model into the CRM.",

  overview: [
    "Kept PostgreSQL authoritative while HubSpot receives approved downstream CRM projections.",
    "Validated contact create/update, deal creation, contact–deal association and provider readback through the reusable CRM projection layer.",
    "Mapped Business OS qualification context into HubSpot properties for lead score, qualification status/reason, budget and primary-need visibility.",
    "Resolved the logical sales owner to a verified HubSpot owner before provider writes instead of assigning an arbitrary CRM user.",
    "Protected successful provider actions with idempotency evidence so replay reuses the prior result rather than duplicating CRM records.",
    "Kept material deal creation behind the Business OS human-approval boundary.",
  ],

  problem:
    "A CRM integration becomes brittle when qualification, routing, ownership and approval logic are duplicated inside provider-specific workflows. That also increases the risk of wrong-owner assignments and duplicate records during retries. The goal was to connect HubSpot without turning it into the source of truth for the Business OS operating model.",

  solution:
    "Used the provider-neutral Business OS CRM projection layer to translate approved internal state into HubSpot contact and deal operations. Logical sales ownership is resolved against a verified owner mapping before write execution, provider results are read back and logged, and stable idempotency evidence prevents duplicate replay. This keeps the client-specific HubSpot configuration replaceable while the core Revenue Operations policy remains reusable.",

  architecture: [
    "Lead intake and qualification in Business OS",
    "Capacity-aware logical sales owner",
    "Human decision for deal eligibility",
    "Provider-neutral CRM projection",
    "Verified HubSpot owner resolution",
    "Contact create/update",
    "Approved deal creation",
    "Contact–deal association",
    "Provider readback",
    "Idempotency and integration-action evidence",
  ],

  workflow: [
    "Qualify Lead",
    "Resolve Logical Owner",
    "Notify / Review",
    "Approve Deal Eligibility",
    "Project Contact to HubSpot",
    "Create Approved Deal",
    "Associate Contact & Deal",
    "Read Back Provider State",
    "Persist Integration Evidence",
    "Reuse Prior Success on Replay",
  ],

  automation: [
    { title: "Contact Projection", description: "Creates or updates the approved HubSpot contact representation from authoritative Business OS state.", icon: "crm" },
    { title: "Owner Resolution", description: "Maps the logical sales owner to a verified HubSpot owner and fails closed when a required mapping is unavailable.", icon: "database" },
    { title: "Human Deal Approval", description: "Keeps deal eligibility as a human-controlled commercial decision before the provider deal write.", icon: "workspace" },
    { title: "Idempotent Provider Writes", description: "Reuses durable successful action evidence on replay instead of creating duplicate HubSpot side effects.", icon: "database" },
    { title: "Provider Readback", description: "Verifies the downstream CRM result and records integration evidence for troubleshooting and auditability.", icon: "crm" },
  ],

  governance: [
    { title: "Authoritative-State Boundary", description: "PostgreSQL remains authoritative; HubSpot is a governed downstream projection." },
    { title: "Verified Owner Mapping", description: "Provider ownership is resolved through explicit verified mappings rather than display-name guessing." },
    { title: "Human Commercial Control", description: "Deal creation remains subject to the Business OS approval policy." },
    { title: "Replay Safety", description: "Stable idempotency and provider evidence prevent duplicate success replay." },
  ],

  heroImage: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
  gallery: [
    {
      image: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
      title: "Governed HubSpot CRM Adapter",
      description: "Reusable HubSpot adapter with integration gating, owner resolution, idempotent execution, provider-result handling and centralized error routing.",
    },
  ],

  results: [
    "Validated controlled HubSpot contact create/update and provider readback.",
    "Validated approved deal creation and contact–deal association.",
    "Verified logical owner mapping before provider ownership assignment.",
    "Validated qualification-property mapping for downstream CRM visibility.",
    "Validated idempotent replay so prior provider success is reused rather than duplicated.",
    "Kept the implementation provider-neutral and reusable for future client-specific HubSpot configuration.",
  ],

  documentation: [
    {
      title: "HubSpot Revenue Operations Implementation",
      description: "Technical and business-facing implementation summary for the governed HubSpot projection layer.",
      href: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/hubspot-business-os-implementation.md",
      status: "Completed",
    },
  ],

  technologies: [technologies.hubspot, technologies.n8n, technologies.postgresql],
  metrics: [
    "Controlled contact + deal E2E validated",
    "7 qualification/business fields verified",
    "Verified owner mapping + idempotent replay",
  ],
  stats: [
    { value: 2, suffix: " objects", label: "Contact + Deal E2E" },
    { value: 7, suffix: " fields", label: "Qualification Context" },
    { value: 1, suffix: " gate", label: "Human Deal Approval" },
  ],
  before: [
    "Provider-specific CRM logic could become tightly coupled to the operating process.",
    "Owner assignment is risky when logical sales identities are not mapped to verified CRM users.",
    "Blind retries can create duplicate contact or deal side effects.",
    "Material deal creation should not be delegated to an unrestricted AI decision.",
  ],
  after: [
    "HubSpot operates as a downstream projection of authoritative Business OS state.",
    "Verified owner mapping controls downstream CRM ownership.",
    "Human deal approval remains part of the commercial control path.",
    "Idempotency and provider evidence make successful CRM writes replay-safe.",
    "Client-specific HubSpot fields, owners and stages can be configured without redesigning the Business OS core.",
  ],
  automationImage: "/images/projects/ai-business-os/08-hubspot-adapter.webp",
  github: "https://github.com/Nikkypwetti/nikkytechies-portfolio/blob/main/docs/hubspot-business-os-implementation.md",
  demo: "",
};
