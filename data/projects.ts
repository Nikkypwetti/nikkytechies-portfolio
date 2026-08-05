import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio",

   category: "CRM",

  description:
    "Designed an AI-powered CRM that automates lead capture, qualification, and follow-up using Airtable, HubSpot, Make.com, Groq AI, and Slack.",

  overview: [
    "Built an AI-powered CRM automation that removes manual lead processing.",
    "Integrated Google Sheets, Make.com, Groq AI, Airtable, Slack and Gmail.",
    "Automatically qualifies every lead using AI scoring.",
    "Routes leads based on priority and business rules.",
    "Provides a real-time dashboard for sales visibility.",
 ],

  problem:
    "Sales teams manually copied leads between forms, spreadsheets, and CRM systems, causing delays and inconsistent follow-up.",

  solution:
    "Built an automated pipeline that captures leads, enriches them with AI, assigns a qualification score, recommends services, notifies Slack, and stores everything in Airtable and HubSpot.",

  architecture: [
  "Google Form submission",
  "Google Sheets trigger starts the automation",
  "Create Airtable CRM record",
  "Clean and normalize lead data",
  "Groq AI analyzes the lead",
  "Generate AI score, pain point, package recommendation and next action",
  "Update Airtable with AI insights",
  "Router checks AI qualification status",
  "Hot Lead → Slack notification",
  "Qualified → Slack notification",
  "Needs Discovery → Slack notification",
  "Not Fit → Email follow-up",
],

 workflow: [
  "Google Form",
  "Google Sheets",
  "Make.com",
  "Groq AI",
  "Airtable CRM",
  "Slack & Email",
],

automation: [
  {
    title: "Google Form",
    description: "Lead submits request",
    icon: "form",
  },
  {
    title: "Google Sheets",
    description: "Trigger starts",
    icon: "sheet",
  },
  {
    title: "Make.com",
    description: "Automation runs",
    icon: "bot",
  },
  {
    title: "Groq AI",
    description: "Scores the lead",
    icon: "bot",
  },
  {
    title: "Airtable",
    description: "Updates CRM",
    icon: "database",
  },
  {
    title: "Slack",
    description: "Sales notified",
    icon: "slack",
  },
],


heroImage: "/images/projects/growagency/hero.png",

automationImage:
"/images/projects/growagency/make-workflow.png",

gallery: [
  {
    image: "/images/projects/growagency/dashboard.png",
    title: "Airtable CRM Dashboard",
    description:
      "Real-time dashboard showing AI scores, lead status, sales pipeline and CRM metrics.",
  },

  {
    image: "/images/projects/growagency/make-workflow.png",
    title: "Make.com Automation",
    description:
      "Complete automation that receives leads, processes them with AI, updates Airtable and routes notifications.",
  },

  {
    image: "/images/projects/growagency/slack-alert.png",
    title: "Slack Notification",
    description:
      "Automatic notification sent to the sales team whenever a qualified lead is detected.",
  },
],

  results: [
    "Saved approximately 10 hours per week",
    "Reduced manual work by about 80%",
    "Standardized lead qualification",
    "Improved response speed",
  ],

  technologies: [
    technologies.airtable,
    technologies.make,
    technologies.hubspot,
    technologies.groq,
    technologies.slack,
  ],

  metrics: [
    "80% less manual work",
    "10+ hours saved weekly",
    "AI-powered qualification",
  ],

  stats: [
  {
    value: 80,
    suffix: "%",
    label: "Less Manual Work",
  },
  {
    value: 10,
    suffix: "+ hrs",
    label: "Saved Per Week",
  },
  {
    value: 5,
    suffix: " min",
    label: "Average Response Time",
  },
],

  before: [
  "Manual lead qualification",
  "Copying data between spreadsheets",
  "No centralized CRM",
  "Slow response times",
],

after: [
  "AI-qualified leads",
  "Automatic CRM updates",
  "Slack notifications",
  "80% less manual work",
],

},

{
  slug: "client-onboarding-automation",

  title: "Client Onboarding Automation System",

  year: "2026",

  type: "Portfolio",

  category: "Automation",

  description:
    "Built a professional client onboarding system that turns approved Airtable requests into linked projects, package-specific tasks, AI-generated Notion workspaces, welcome emails, and internal Slack notifications.",

  overview: [
    "Built a complete client onboarding operating system for agencies.",
    "Processes approved onboarding requests from Airtable automatically.",
    "Creates projects linked to the correct client and service package.",
    "Generates project tasks dynamically from reusable task templates.",
    "Uses AI to create personalized workspace content.",
    "Creates and populates dedicated Notion client workspaces.",
    "Keeps clients and internal teams informed automatically.",
  ],

  problem:
    "Client onboarding was handled manually using emails, spreadsheets, and separate project tools, leading to inconsistent processes, duplicated work, manually created tasks, scattered documentation, and delayed project kickoff.",

  solution:
    "Built a scalable onboarding pipeline using Airtable, Make.com, Make AI Toolkit, Notion, Gmail, and Slack. The system watches approved onboarding requests, retrieves the linked client and package, creates the project, generates package-specific tasks, produces structured workspace content with AI, creates the Notion workspace, synchronizes the workspace URL back to Airtable, and sends automated notifications.",

  architecture: [
    "Approve the onboarding request in Airtable",
    "Watch the Ready for Onboarding view",
    "Mark the request as Processing",
    "Retrieve the linked client record",
    "Retrieve the selected package record",
    "Create and link the Airtable project",
    "Link the project back to the onboarding request",
    "Search active task templates for the selected package",
    "Create project tasks with calculated due dates",
    "Aggregate all created task records",
    "Generate structured workspace content with AI",
    "Parse the AI response into JSON fields",
    "Create the Notion client workspace",
    "Append the AI-generated workspace content",
    "Update the Airtable project with the Notion URL",
    "Send the client welcome email",
    "Send the internal Slack notification",
    "Mark the onboarding request as Completed",
  ],

  workflow: [
    "Approved Request",
    "Airtable Trigger",
    "Request Processing",
    "Client Lookup",
    "Package Lookup",
    "Project Creation",
    "Task Template Search",
    "Dynamic Task Creation",
    "Task Aggregation",
    "AI Content Generator",
    "JSON Parser",
    "Notion Workspace",
    "Airtable Sync",
    "Gmail",
    "Slack",
    "Completed",
  ],

  automation: [
    {
      title: "Approved Request",
      description:
        "Airtable detects an approved request in the Ready for Onboarding view.",
      icon: "form",
    },
    {
      title: "Client & Package",
      description:
        "The workflow retrieves the linked client and selected package records.",
      icon: "database",
    },
    {
      title: "Project Creation",
      description:
        "A new Airtable project is created and linked to the original request.",
      icon: "database",
    },
    {
      title: "Dynamic Tasks",
      description:
        "Package-specific task templates are converted into project tasks.",
      icon: "database",
    },
    {
      title: "AI Generator",
      description:
        "Make AI Toolkit creates structured, personalized workspace content.",
      icon: "bot",
    },
    {
      title: "Notion Workspace",
      description:
        "A dedicated workspace is created and populated with AI-generated content.",
      icon: "workspace",
    },
    {
      title: "Airtable Sync",
      description:
        "The workspace URL is saved and the project status changes to In Progress.",
      icon: "database",
    },
    {
      title: "Notifications",
      description:
        "Gmail welcomes the client and Slack alerts the internal delivery team.",
      icon: "email",
    },
    {
      title: "Completed",
      description:
        "The onboarding request is marked Completed after every step succeeds.",
      icon: "form",
    },
  ],

  heroImage:
    "/images/projects/client-portal/hero.png",

  automationImage:
    "/images/projects/client-portal/make-workflow.png",

  gallery: [
    {
      image:
        "/images/projects/client-portal/airtable-dashboard.png",

      title: "Client Operations Dashboard",

      description:
        "Airtable dashboard showing clients, onboarding requests, automation status, linked projects, project phases, tasks, and delivery progress.",
    },

    {
      image:
        "/images/projects/client-portal/notion-workspace.png",

      title: "AI-Generated Notion Workspace",

      description:
        "Automatically created workspace containing a personalized welcome message, project overview, objectives, deliverables, milestones, communication plan, and kickoff checklist.",
    },

    {
      image:
        "/images/projects/client-portal/make-workflow.png",

      title: "Professional Onboarding Workflow",

      description:
        "Complete Make.com scenario responsible for request processing, record lookups, project creation, dynamic task generation, AI content generation, Notion workspace creation, synchronization, and notifications.",
    },

    {
      image:
        "/images/projects/client-portal/client-portal.png",

      title: "Client Project Workspace",

      description:
        "Client-facing Notion workspace providing centralized project information, deliverables, milestones, communication guidance, and onboarding actions.",
    },

    {
      image:
        "/images/projects/client-portal/slack-notification.png",

      title: "Slack Team Notification",

      description:
        "Automatic Slack notification informing the internal team that client onboarding has completed and providing the project and workspace details.",
    },
  ],

  results: [
    "Reduced onboarding time by approximately 85%",
    "Centralized client and project documentation",
    "Created package-specific project tasks automatically",
    "Improved visibility across onboarding and delivery",
    "Reduced repetitive administrative work",
  ],

  technologies: [
    technologies.airtable,
    technologies.notion,
    technologies.make,
    technologies.gmail,
    technologies.slack,
  ],

  metrics: [
    "85% faster onboarding",
    "100% centralized documentation",
    "Dynamic package-based task creation",
  ],

  stats: [
    {
      value: 85,
      suffix: "%",
      label: "Faster Onboarding",
    },
    {
      value: 100,
      suffix: "%",
      label: "Centralized Documentation",
    },
    {
      value: 18,
      suffix: " steps",
      label: "Automated Workflow",
    },
  ],

  before: [
    "Manual client onboarding",
    "Project information stored across separate tools",
    "Tasks created individually for every project",
    "Workspaces prepared manually",
    "Repeated client and team updates",
  ],

  after: [
    "Approved requests processed automatically",
    "Projects linked to clients and packages",
    "Tasks generated dynamically from templates",
    "AI-generated Notion workspaces",
    "Real-time Airtable project synchronization",
    "Automatic Gmail and Slack notifications",
  ],

  github:
    "https://github.com/yourusername/client-onboarding-automation",

  demo:
    "https://your-demo-link.com",
},

{
  slug: "ai-meeting-notes-crm-sync",

  title: "AI Meeting Notes & CRM Sync",

  year: "2026",

  type: "Portfolio",

  category: "AI",

  description:
    "An AI workflow that converts meeting recordings into structured summaries, extracts action items, updates the CRM automatically, and notifies the team.",

  overview: [
    "Automatically processes meeting transcripts using AI.",
    "Generates structured meeting summaries.",
    "Extracts action items and decisions.",
    "Updates Airtable CRM records automatically.",
    "Creates follow-up tasks inside Notion.",
  ],

  problem:
    "Teams spent hours manually writing meeting notes, creating tasks, and updating CRM records after every client call.",

  solution:
    "Built an AI-powered workflow that summarizes meetings, extracts decisions and tasks, updates Airtable, creates Notion tasks, and sends Slack notifications.",

  architecture: [
    "Meeting recording",
    "Transcript generated",
    "n8n automation",
    "Groq AI summarizes conversation",
    "Extract action items",
    "Update Airtable CRM",
    "Create Notion tasks",
    "Slack notification",
  ],

  workflow: [
    "Meeting Ends",
    "Transcript",
    "Groq AI",
    "Airtable",
    "Notion",
    "Slack",
  ],

  automation: [
  {
    title: "HubSpot",
    description: "Deal updated",
    icon: "crm",
  },
  {
    title: "Make.com",
    description: "Automation triggered",
    icon: "bot",
  },
  {
    title: "Airtable",
    description: "Invoice record created",
    icon: "database",
  },
  {
    title: "Slack",
    description: "Finance notified",
    icon: "slack",
  },
  {
    title: "Email",
    description: "Invoice delivered",
    icon: "email",
  },
],

  heroImage:
    "/images/projects/meeting-ai/hero.png",

  automationImage:
    "/images/projects/meeting-ai/workflow.png",

  gallery: [
    {
      image:
        "/images/projects/meeting-ai/workflow.png",
      title: "n8n Workflow",
      description:
        "Automation that processes transcripts, summarizes meetings and updates business systems.",
    },

    {
      image:
        "/images/projects/meeting-ai/airtable.png",
      title: "Airtable CRM",
      description:
        "CRM updated automatically with meeting summaries and follow-up information.",
    },

    {
      image:
        "/images/projects/meeting-ai/notion.png",
      title: "Notion Tasks",
      description:
        "AI-generated action items automatically become project tasks.",
    },
  ],

  results: [
    "Reduced meeting documentation time by 90%",
    "Automatic CRM updates",
    "Action items never missed",
    "Consistent meeting documentation",
  ],

  technologies: [
    technologies.n8n,
    technologies.groq,
    technologies.airtable,
    technologies.notion,
    technologies.slack,
  ],

  metrics: [
    "90% less manual documentation",
    "Automatic CRM updates",
    "AI-generated meeting summaries",
  ],

  stats: [
    {
      value: 90,
      suffix: "%",
      label: "Less Documentation",
    },
    {
      value: 100,
      suffix: "%",
      label: "Meeting Coverage",
    },
    {
      value: 5,
      suffix: " min",
      label: "Average Processing Time",
    },
  ],

  before: [
    "Manual note taking",
    "Forgotten action items",
    "CRM updated later",
    "Scattered meeting records",
  ],

  after: [
    "AI-generated summaries",
    "Automatic CRM updates",
    "Instant task creation",
    "Centralized meeting history",
  ],

  github:
    "https://github.com/yourusername/ai-meeting-sync",

  demo:
    "https://your-demo-link.com",
},
];