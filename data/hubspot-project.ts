import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const hubspotProject: Project = {
  slug: "hubspot-clientflow-crm",
  title: "HubSpot ClientFlow CRM",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  category: "CRM",
  platforms: ["HubSpot Sales Hub", "Deals", "Workflows", "Tasks", "Reporting"],

  description:
    "Configured a HubSpot Sales Hub CRM workflow and reporting system for lead ownership, deal creation, task follow-up, pipeline visibility and revenue reporting.",

  overview: [
    "Configured 2 HubSpot workflows covering lead status, ownership, deal creation, task creation and follow-up.",
    "Built 8 reports covering pipeline, forecasting, deal stages, ownership, outcomes, tasks and revenue visibility.",
    "Structured deal, task and follow-up visibility to support consistent sales operations.",
    "Resolved CRM record-association and workflow issues during testing and configuration.",
  ],

  problem:
    "Sales follow-up becomes difficult when lead ownership, deal creation, tasks and reporting are handled inconsistently. The project focused on creating a clearer CRM operating flow so lead activity, next actions and pipeline reporting could be managed from one system.",

  solution:
    "Configured HubSpot Sales Hub around a structured lead-to-deal process. Workflows update lead status and ownership, create the required deal and task records, support proposal follow-up, and provide internal visibility. Reporting was organized around pipeline, forecasting, stages, ownership, outcomes, tasks and revenue.",

  architecture: [
    "HubSpot contact and lead records",
    "Lead status and ownership rules",
    "Deal pipeline and deal stages",
    "Task creation and follow-up",
    "Workflow automation",
    "Internal sales visibility",
    "Pipeline and forecast reporting",
    "Revenue and outcome reporting",
  ],

  workflow: [
    "Lead enters HubSpot",
    "Update lead status",
    "Assign record owner",
    "Create or associate deal",
    "Create follow-up task",
    "Notify internal owner",
    "Track proposal-stage follow-up",
    "Update pipeline and reporting views",
  ],

  automation: [
    {
      title: "Lead Intake",
      description:
        "New lead activity enters a structured HubSpot process so status, ownership and next actions remain visible.",
      icon: "crm",
    },
    {
      title: "Lead Status",
      description:
        "Workflow logic updates lead status as the record enters the sales process.",
      icon: "crm",
    },
    {
      title: "Ownership",
      description:
        "The process assigns ownership so responsibility for follow-up is clear.",
      icon: "crm",
    },
    {
      title: "Deal Creation",
      description:
        "Qualified sales activity is connected to a deal record for pipeline tracking.",
      icon: "database",
    },
    {
      title: "Task Follow-up",
      description:
        "Tasks are created to keep required sales follow-up and next actions visible.",
      icon: "workspace",
    },
    {
      title: "Internal Notification",
      description:
        "Internal notifications support timely awareness of assigned sales actions.",
      icon: "slack",
    },
    {
      title: "Proposal Follow-up",
      description:
        "A second workflow supports follow-up when deals remain at the proposal stage.",
      icon: "crm",
    },
    {
      title: "Reporting",
      description:
        "Eight HubSpot reports provide pipeline, forecast, stage, ownership, task, outcome and revenue visibility.",
      icon: "sheet",
    },
  ],

  gallery: [],

  results: [
    "Configured 2 HubSpot sales workflows",
    "Built 8 pipeline, forecast, task, ownership, outcome and revenue reports",
    "Structured lead ownership, deal creation and follow-up visibility",
    "Resolved CRM record-association and workflow configuration issues",
    "Documented a repeatable CRM operating flow for sales follow-up",
  ],

  technologies: [technologies.hubspot],

  metrics: [
    "2 HubSpot workflows configured",
    "8 HubSpot reports built",
    "Lead-to-deal follow-up process structured",
  ],

  stats: [
    {
      value: 2,
      suffix: " workflows",
      label: "HubSpot Automation",
    },
    {
      value: 8,
      suffix: " reports",
      label: "Sales & Revenue Visibility",
    },
    {
      value: 1,
      suffix: " CRM",
      label: "Sales Operations System",
    },
  ],

  before: [
    "Lead ownership and follow-up are difficult to track consistently",
    "Deal creation and task management can depend on manual action",
    "Pipeline and activity reporting are fragmented",
    "Record-association issues can reduce CRM reliability",
  ],

  after: [
    "Lead status, ownership and next actions follow a structured CRM process",
    "Deal and task creation support consistent sales follow-up",
    "Eight reports provide clearer pipeline and revenue visibility",
    "Record associations and workflow behavior were tested and corrected",
  ],

  automationImage: "",
  demo: "",
};
