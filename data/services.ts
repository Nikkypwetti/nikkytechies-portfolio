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
      "Support lead pipelines, CRM data, lifecycle stages, follow-up processes and sales operations using tools such as Airtable and HubSpot.",
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
      "Organize CRM and operational data into dashboards and reports that improve visibility into projects, pipelines, tasks and performance.",
    icon: BarChart3,
  },
  {
    title: "Workflow & AI Automation",
    description:
      "Connect business tools and automate repetitive processes using Make.com, n8n, Zapier, Airtable, Notion and AI workflows.",
    icon: Workflow,
  },
];