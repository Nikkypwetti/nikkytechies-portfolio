import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const hubspotProject: Project = {
  slug: "hubspot-clientflow-crm",
  title: "HubSpot ClientFlow CRM",
  year: "2026",
  type: "Portfolio",
  status: "Completed",
  category: "CRM",
  platforms: ["HubSpot Sales Hub", "Make.com", "Slack", "Gmail", "Google Sheets", "Deals", "Workflows", "Reporting"],

  description:
    "Configured a HubSpot Sales Hub CRM and connected lead-processing workflow for contact, company and deal management, sales follow-up, pipeline visibility, notifications and revenue reporting.",

  recruiterSummary: {
    headline:
      "Hands-on HubSpot CRM administration: pipeline structure, workflows, follow-up controls, reporting and connected lead processing.",
    valueProposition:
      "This case study demonstrates practical HubSpot Sales Hub administration in a sales-operations context. I configured the CRM structure, deal pipeline, workflow automation, follow-up controls, reporting and the Make.com lead-processing path, then used screenshots as implementation evidence. The project is a portfolio test environment, so its figures are configuration/test outputs rather than client revenue results.",
    ownership: [
      "Configured contact, company and deal structures and organized associations so sales activity could be managed through a connected CRM model.",
      "Configured 3 HubSpot workflows covering lead status/ownership, proposal follow-up and overdue-deal follow-up.",
      "Built 8 HubSpot reports covering pipeline, forecast, stages, ownership, tasks, outcomes and revenue visibility.",
      "Designed the Make.com integration path across Google Sheets → HubSpot → Gmail → HubSpot Tasks → Slack → Google Sheets.",
      "Resolved CRM record-association and workflow configuration issues during implementation and testing.",
      "Documented the CRM operating flow so a recruiter can see the relationship between administration, sales process, automation and reporting.",
    ],
    liveProof: [
      "HubSpot dashboard evidence shows deal creation/closure visibility, closed-deal value by owner, deal status, funnel progression and average time to close for the test dataset.",
      "Deal-pipeline evidence shows New Lead, Discovery Call Scheduled, Proposal Sent, Negotiating, Deal Won and Deal Lost stages.",
      "Proposal follow-up evidence shows a 3-business-day delay, Proposal Sent branch logic and creation of a scheduled call task.",
      "Overdue-deal evidence excludes Closed Won/Closed Lost and creates an owner follow-up task for open deals past the close date.",
      "Contact and company screenshots show structured CRM records and associations.",
      "Make.com evidence shows the connected lead-processing scenario, while Slack evidence shows the internal processing handoff.",
    ],
    roleFit: [
      "HubSpot Administration",
      "CRM Administration",
      "Sales Operations",
      "Revenue Operations",
      "GTM Operations",
      "Business Systems",
    ],
  },

  evidenceInventory: [
    {
      title: "Sales & Revenue Dashboard",
      description:
        "Screenshot evidence of HubSpot deal counts, closed-deal value by owner, status mix, funnel progression and average time to close.",
      status: "Verified",
    },
    {
      title: "Deal Pipeline Board",
      description:
        "Screenshot evidence of the configured six-stage sales pipeline and deal-level ownership/value context.",
      status: "Verified",
    },
    {
      title: "Proposal Follow-Up Workflow",
      description:
        "Screenshot evidence of delay, stage branch and follow-up task creation logic.",
      status: "Verified",
    },
    {
      title: "Overdue Deal Alert Workflow",
      description:
        "Screenshot evidence of close-date logic, Won/Lost exclusions and owner follow-up task creation.",
      status: "Verified",
    },
    {
      title: "CRM Records & Associations",
      description:
        "Screenshot evidence of contact, company and deal relationships plus structured contact/company views.",
      status: "Verified",
    },
    {
      title: "Make.com Lead-Processing Integration",
      description:
        "Screenshot evidence of the connected Google Sheets, HubSpot, Gmail, HubSpot Task and Slack automation path.",
      status: "Verified",
    },
  ],

  overview: [
    "Configured 3 HubSpot workflows covering lead status, ownership, deal creation, proposal follow-up and overdue-deal follow-up.",
    "Built 8 reports covering pipeline, forecasting, deal stages, ownership, outcomes, tasks and revenue visibility.",
    "Connected Google Sheets, HubSpot, Gmail and Slack through Make.com for lead processing and internal follow-up visibility.",
    "Structured contact, company and deal records to support clearer CRM associations and pipeline management.",
    "Resolved CRM record-association and workflow issues during testing and configuration.",
  ],

  problem:
    "Sales follow-up becomes difficult when lead ownership, deal creation, tasks, record associations and reporting are handled inconsistently. The project focused on creating a clearer CRM operating flow so lead activity, next actions, pipeline movement and reporting could be managed from one connected process.",

  solution:
    "Configured HubSpot Sales Hub around a structured lead-to-deal process. HubSpot workflows update lead status and ownership, create or associate deal and task records, support proposal and overdue follow-up, and provide internal visibility. A Make.com scenario connects Google Sheets, HubSpot, Gmail and Slack for lead processing, while reporting is organized around pipeline, forecasting, stages, ownership, outcomes, tasks and revenue.",

  architecture: [
    "Google Sheets lead intake",
    "Make.com integration workflow",
    "HubSpot contact and company records",
    "Lead status and ownership rules",
    "Deal pipeline and deal stages",
    "Task creation and follow-up",
    "HubSpot workflow automation",
    "Gmail welcome email",
    "Slack internal lead notification",
    "Pipeline and forecast reporting",
    "Revenue and outcome reporting",
  ],

  workflow: [
    "Lead enters the intake process",
    "Create or update HubSpot contact",
    "Create or associate deal",
    "Update lead status and ownership",
    "Send welcome email",
    "Create follow-up task",
    "Notify internal team in Slack",
    "Track proposal-stage follow-up",
    "Flag overdue open deals",
    "Update pipeline and reporting views",
  ],

  automation: [
    {
      title: "Lead Intake",
      description:
        "New lead activity enters a structured CRM process so contact data, status, ownership and next actions remain visible.",
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
        "Slack notifications confirm lead processing and surface the required follow-up action to the internal team.",
      icon: "slack",
    },
    {
      title: "Proposal Follow-up",
      description:
        "A workflow supports follow-up when deals remain at the Proposal Sent stage after the configured delay.",
      icon: "crm",
    },
    {
      title: "Overdue Deal Follow-up",
      description:
        "Open deals past their close date are identified while Closed Won and Closed Lost deals are excluded, then an overdue follow-up task is created.",
      icon: "crm",
    },
    {
      title: "Reporting",
      description:
        "Eight HubSpot reports provide pipeline, forecast, stage, ownership, task, outcome and revenue visibility.",
      icon: "sheet",
    },
  ],

  heroImage: "/images/projects/hubspot-clientflow/04-sales-dashboard.webp",

  gallery: [
    {
      image: "/images/projects/hubspot-clientflow/04-sales-dashboard.webp",
      title: "HubSpot Sales & Revenue Dashboard",
      description:
        "HubSpot reporting dashboard showing deal counts, closed-deal value by owner, deal status mix, sales-funnel progression, and average time to close for the portfolio test dataset.",
    },
    {
      image: "/images/projects/hubspot-clientflow/09-deal-pipeline-board.webp",
      title: "HubSpot Deal Pipeline Board",
      description:
        "Pipeline view showing New Lead, Discovery Call Scheduled, Proposal Sent, Negotiating, Deal Won and Deal Lost stages with deal value, ownership, close-date context and saved sales views.",
    },
    {
      image: "/images/projects/hubspot-clientflow/01-proposal-follow-up.webp",
      title: "Proposal Follow-Up Sequence",
      description:
        "Workflow evidence showing a 3-business-day delay, branch logic for deals still at Proposal Sent, and creation of a scheduled call follow-up task.",
    },
    {
      image: "/images/projects/hubspot-clientflow/02-overdue-deal-alert.webp",
      title: "Overdue Deal Alert Workflow",
      description:
        "Workflow evidence enrolling open deals whose close date is before today while excluding Closed Won and Closed Lost, then creating an overdue follow-up task assigned to the deal owner.",
    },
    {
      image: "/images/projects/hubspot-clientflow/03-contact-record.webp",
      title: "Contact, Company & Deal Association",
      description:
        "HubSpot contact record used to verify CRM associations, activity context, company linkage, and visibility into an associated deal in the ClientFlow test setup.",
    },
    {
      image: "/images/projects/hubspot-clientflow/06-contact-database.webp",
      title: "Structured HubSpot Contact Database",
      description:
        "Contact view demonstrating standardized CRM records with names, emails, phone numbers, job titles, ownership/activity filters, and saved contact views.",
    },
    {
      image: "/images/projects/hubspot-clientflow/08-company-database.webp",
      title: "Structured HubSpot Company Database",
      description:
        "Company records view demonstrating standardized account records, ownership, create dates, recent activity and saved company views used alongside contacts and deals.",
    },
    {
      image: "/images/projects/hubspot-clientflow/07-slack-lead-notification.webp",
      title: "Slack Lead Processing Notification",
      description:
        "Internal Slack confirmation showing a processed lead, HubSpot contact creation or update, associated deal creation, welcome-email delivery and a clear 24-hour follow-up action.",
    },
    {
      image: "/images/projects/hubspot-clientflow/05-make-automation.webp",
      title: "ClientFlow CRM Integration in Make.com",
      description:
        "Make.com scenario connecting Google Sheets, HubSpot contact and deal creation, Gmail, HubSpot task creation, Slack notification, and a final Google Sheets update.",
    },
  ],

  results: [
    "Configured 3 HubSpot sales workflows",
    "Built 8 pipeline, forecast, task, ownership, outcome and revenue reports",
    "Structured contact, company, deal and follow-up visibility",
    "Connected Google Sheets, HubSpot, Gmail and Slack through Make.com",
    "Resolved CRM record-association and workflow configuration issues",
    "Documented a repeatable CRM operating flow for sales follow-up",
  ],

  technologies: [technologies.hubspot],

  metrics: [
    "3 HubSpot workflows configured",
    "8 HubSpot reports built",
    "Lead-to-deal follow-up process structured",
  ],

  stats: [
    {
      value: 3,
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
    "Contact, company and deal associations can become inconsistent",
    "Pipeline and activity reporting are fragmented",
    "Internal teams may lack a clear confirmation that new leads were processed",
  ],

  after: [
    "Lead status, ownership and next actions follow a structured CRM process",
    "Contact, company and deal records are organized around a connected sales flow",
    "Deal and task creation support consistent sales follow-up",
    "Proposal-stage and overdue-deal follow-up are handled with workflow logic",
    "Eight reports provide clearer pipeline and revenue visibility",
    "Slack notifications provide internal confirmation and a clear next action after lead processing",
  ],

  automationImage: "/images/projects/hubspot-clientflow/01-proposal-follow-up.webp",
  demo: "",
};
