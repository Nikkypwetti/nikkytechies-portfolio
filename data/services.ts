import {
  ClipboardList,
  Database,
  Users,
  FileText,
  BarChart3,
  Workflow,
} from "lucide-react";

export const services = [
  {
    title: "Project Coordination",
    description:
      "Organize projects, tasks, deadlines, priorities, dependencies and team follow-ups to keep client delivery moving.",
    icon: ClipboardList,
  },
  {
    title: "CRM & Revenue Operations",
    description:
      "Support lead pipelines, CRM governance, lifecycle stages, duplicate controls, forecasting, reporting and sales operations using Salesforce, HubSpot and Airtable.",
    icon: Database,
  },
  {
    title: "Client Onboarding & Delivery",
    description:
      "Build structured onboarding workflows that coordinate client information, project setup, tasks, communication and delivery milestones.",
    icon: Users,
  },
  {
    title: "SOP & Process Documentation",
    description:
      "Document repeatable workflows, responsibilities, project procedures and operating processes so teams can work consistently.",
    icon: FileText,
  },
  {
    title: "Reporting & Data Operations",
    description:
      "Organize CRM and operational data into dashboards, pipeline-aging views, weighted forecasts and quality reports that improve management visibility.",
    icon: BarChart3,
  },
  {
    title: "Workflow & AI Automation",
    description:
      "Connect business tools and automate repetitive processes using Make.com, n8n, Zapier, Airtable, Notion and AI workflows.",
    icon: Workflow,
  },
];