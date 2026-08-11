import {
  ClipboardList,
  Users,
  Database,
  FileText,
  LayoutDashboard,
  Workflow,
} from "lucide-react";

export const skills = [
  {
    title: "Project Coordination",
    description:
      "Organizing projects, tasks, priorities, deadlines, status updates and follow-up actions to keep work moving.",
    icon: ClipboardList,
  },
  {
    title: "Client Onboarding & Delivery",
    description:
      "Coordinating client onboarding, project setup, communication, deliverables and handoff processes.",
    icon: Users,
  },
  {
    title: "CRM & Data Operations",
    description:
      "Managing structured client, lead and project information using Airtable, HubSpot and connected business systems.",
    icon: Database,
  },
  {
    title: "SOP & Documentation",
    description:
      "Creating clear SOPs, project documentation, meeting notes and repeatable processes for consistent execution.",
    icon: FileText,
  },
  {
    title: "Notion & Workspace Systems",
    description:
      "Building organized workspaces for project management, client portals, documentation, tasks and knowledge management.",
    icon: LayoutDashboard,
  },
  {
    title: "Workflow & AI Automation",
    description:
      "Building automated workflows with Make.com, n8n, Zapier and AI to reduce repetitive administrative work.",
    icon: Workflow,
  },
];