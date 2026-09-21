import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Database,
  FileText,
  Terminal,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const skills = [
  {
    title: "Revenue & Sales Operations",
    description:
      "Supporting Revenue Systems, lead management, GTM Rules of Engagement, ownership, lifecycle stages, opportunity pipelines, forecasting, account follow-up and governed revenue operations workflows.",
    icon: TrendingUp,
  },
  {
    title: "CRM & Data Operations",
    description:
      "Managing Salesforce and HubSpot CRM records, Salesforce Data Governance, lifecycle stages, permissions, duplicate controls, data quality, system adoption, pipeline information and reporting.",
    icon: Database,
  },
  {
    title: "Operations & Project Coordination",
    description:
      "Organizing projects, tasks, priorities, deadlines, dependencies, status updates, follow-up actions and client delivery workflows.",
    icon: ClipboardList,
  },
  {
    title: "Executive & Administrative Operations",
    description:
      "Coordinating schedules, correspondence, meetings, action items, documentation, email and calendar activities for organized day-to-day execution.",
    icon: CalendarDays,
  },
  {
    title: "Reporting & Analytics",
    description:
      "Using Power BI, DAX, CRM reports, pipeline aging, weighted pipeline, forecast-vs-target analysis, pipeline coverage, sales velocity, stage conversion and KPI tracking to improve operational visibility.",
    icon: BarChart3,
  },
  {
    title: "SOP & Process Documentation",
    description:
      "Creating SOPs, process maps, business-requirements documentation, Rules of Engagement, UAT traceability, user guides, handoff documentation and reusable operating processes.",
    icon: FileText,
  },
  {
    title: "Workflow & AI Automation",
    description:
      "Building connected workflows with n8n, Make.com, Zapier, AI services, APIs and webhooks for routing, follow-up, synchronization and repetitive work.",
    icon: Workflow,
  },
  {
    title: "Technical Systems",
    description:
      "Working across Git/GitHub, Linux, cloud infrastructure, web development and technical integrations to support business and automation systems.",
    icon: Terminal,
  },
];
