import type { Project } from "@/types/project";

type ProjectEvidenceOverride = Pick<
  Project,
  "heroImage" | "automationImage" | "gallery"
>;

const REVINT_EVIDENCE_BASE =
  "https://raw.githubusercontent.com/Nikkypwetti/ai-revenue-intelligence-agent/main/docs/images";

const projectEvidenceOverrides: Record<string, ProjectEvidenceOverride> = {
  "revenue-intelligence-production-simulation": {
    heroImage: "/images/projects/lumora/04-manager-request-orchestrator.png",
    automationImage: "/images/projects/lumora/05-multi-entity-sync-orchestrator.png",
    gallery: [
      {
        image: "/images/projects/lumora/04-manager-request-orchestrator.png",
        title: "LUMORA-REVINT-01 — Manager Request Orchestrator",
        description:
          "Flagship n8n workflow for governed Revenue Intelligence requests. It normalizes manager questions, establishes request context and auditability, uses AI for structured intent interpretation, applies deterministic KPI and query controls, executes approved reporting through read-only PostgreSQL access, validates results, and routes the management response back to the originating channel.",
      },
      {
        image: "/images/projects/lumora/05-multi-entity-sync-orchestrator.png",
        title: "LUMORA-SYNC-03 — Full Multi-Entity Sync Orchestrator",
        description:
          "Parent n8n orchestration layer for the approved multi-entity ingestion batch. It coordinates reusable entity workers, verifies batch completion, and keeps the reporting refresh separate from individual extraction runs.",
      },
      {
        image: "/images/projects/lumora/06-entity-sync-worker.png",
        title: "LUMORA-SYNC-02 — Entity Sync Worker",
        description:
          "Reusable production-callable worker implementing composite checkpoints, read-only extraction, idempotent persistence, checkpoint advancement, and recovery controls across approved source entities.",
      },
      {
        image: "/images/projects/lumora/07-error-handler.png",
        title: "LUMORA-REVINT-SYS-01 — Error Handler",
        description:
          "Centralized reliability workflow that normalizes failures, creates incident context, classifies recoverability, routes recovery or escalation, supports alerting and dead-letter handling, and preserves final auditability.",
      },
      {
        image: "/images/projects/lumora/08-slack-manager-report.png",
        title: "Slack Manager Report",
        description:
          "Manager-facing Slack output showing the governed request-to-report experience after the Revenue Intelligence workflow validates, executes, and prepares an approved management response.",
      },
      {
        image: "/images/projects/lumora/09-manager-form-result.png",
        title: "Authenticated Manager Form Result",
        description:
          "Browser-facing result from the authenticated Manager Form Gateway, demonstrating a second non-technical request channel using the same governed Revenue Intelligence orchestration and bounded return contract.",
      },
      {
        image: "/images/projects/lumora/01-executive-revenue-overview.png",
        title: "Power BI — Executive Revenue Overview",
        description:
          "Executive reporting view built from the governed Lumora simulation dataset, showing simulated Closed Won Revenue of $3.31M, Open Pipeline of $2.90M, 190 open deals, and a 54.9% win rate.",
      },
      {
        image: "/images/projects/lumora/02-pipeline-sales-performance.png",
        title: "Power BI — Pipeline & Sales Performance",
        description:
          "Pipeline analysis by stage, sales representative, and expected close month, including 45 stale simulated open deals identified for action.",
      },
      {
        image: "/images/projects/lumora/03-revenue-operations-health.png",
        title: "Power BI — Revenue Operations Health",
        description:
          "Revenue Operations health view surfacing 45 stale simulated deals, 114 overdue follow-ups, 72 SLA breaches, and 185 closed-lost deals in the portfolio dataset.",
      },
    ],
  },

  "ai-revenue-intelligence-reporting-agent": {
    heroImage:
      "/images/projects/revenue-intelligence/revint-system-architecture.png",
    automationImage:
      "/images/projects/revenue-intelligence/revint-01-main-orchestrator-overview.webp",
    gallery: [
      {
        image:
          "/images/projects/revenue-intelligence/revint-01-main-orchestrator-overview.webp",
        title: "REVINT-01 — Full Manager Request Orchestrator",
        description:
          "Full-canvas view of the original REVINT-01 n8n workflow, showing the complete governed request path from manager intake through request context, AI intent interpretation, deterministic KPI and query controls, read-only PostgreSQL execution, result validation, multi-channel delivery, and lifecycle auditing.",
      },
      {
        image:
          "/images/projects/revenue-intelligence/revint-02-approved-api-report.png",
        title: "Approved API Revenue Report",
        description:
          "Successful governed API request returning closed-won revenue of 20,500 across two closed-won deals after passing reporting authorization and query controls.",
      },
      {
        image:
          "/images/projects/revenue-intelligence/revint-03-safe-rejection.png",
        title: "Safe Unsupported-Request Rejection",
        description:
          "Unsupported reporting intent is rejected safely rather than being converted into unrestricted SQL or an unauthorized database operation.",
      },
      {
        image: `${REVINT_EVIDENCE_BASE}/revint-04-postgres-security.png`,
        title: "PostgreSQL Security Boundary",
        description:
          "Verified least-privilege PostgreSQL controls separating reporting, control, and privileged database responsibilities so approved reporting executes through the intended read-only boundary.",
      },
      {
        image: `${REVINT_EVIDENCE_BASE}/revint-05-kpi-catalogue.png`,
        title: "Governed KPI Catalogue",
        description:
          "Evidence of the governed KPI catalogue used to resolve approved metrics and prevent unsupported reporting requests from becoming arbitrary database queries.",
      },
      {
        image: `${REVINT_EVIDENCE_BASE}/revint-06-slack-report.png`,
        title: "Slack Manager Report",
        description:
          "Manager-facing Slack delivery showing an approved Revenue Intelligence request returned through the governed reporting workflow.",
      },
      {
        image: `${REVINT_EVIDENCE_BASE}/revint-07-form-report.png`,
        title: "Manager Form Report",
        description:
          "Authenticated manager-form result demonstrating a second request channel using the same governed Revenue Intelligence orchestration and bounded reporting contract.",
      },
      {
        image:
          "/images/projects/revenue-intelligence/revint-08-powerbi-dashboard.png",
        title: "Revenue Intelligence Power BI Dashboard",
        description:
          "Management dashboard presenting closed-won revenue, open pipeline, closed-won deals, win rate, sales-rep pipeline, lead-source revenue, deal stages, and open opportunities.",
      },
      {
        image:
          "/images/projects/revenue-intelligence/revint-09-audit-traceability.png",
        title: "Request Audit Traceability",
        description:
          "A single manager request traced across request received, intent parsed, governance approved, and delivery succeeded events using consistent request and correlation identifiers.",
      },
      {
        image:
          "/images/projects/revenue-intelligence/revint-10-error-handler.png",
        title: "Centralized Error Handler",
        description:
          "Dedicated n8n reliability workflow handling error normalization, incident identification, classification, recovery decisions, escalation, alerting, dead-letter persistence, and final auditing.",
      },
    ],
  },
};

export function applyProjectEvidenceOverride(project: Project): Project {
  const override = projectEvidenceOverrides[project.slug];

  return override
    ? {
        ...project,
        ...override,
      }
    : project;
}
