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
      "Supporting lead management, customer journeys, pipeline processes, account follow-up, sales activity and revenue operations workflows.",
    icon: TrendingUp,
  },
  {
    title: "CRM & Data Operations",
    description:
      "Managing customer, lead and project records, lifecycle stages, data quality, pipeline information and reporting using HubSpot and Airtable.",
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
      "Using spreadsheets, dashboards, data validation, CRM reporting and KPI tracking to improve visibility into sales and operational performance.",
    icon: BarChart3,
  },
  {
    title: "SOP & Process Documentation",
    description:
      "Creating SOPs, workflow maps, checklists, meeting notes, handoff documentation and reusable operating processes.",
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
