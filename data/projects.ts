import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio",

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

  type: "Portfolio",

  category: "Automation",

  description:
    "Designed an automated client onboarding system that creates CRM records, generates Notion workspaces, assigns project tasks, and keeps both the internal team and clients informed automatically.",

  overview: [
    "Designed a complete client operating system for agencies.",
    "Automatically creates new client records.",
    "Generates dedicated Notion project workspaces.",
    "Assigns onboarding tasks automatically.",
    "Keeps internal teams and clients informed through automated notifications.",
  ],

  problem:
    "Client onboarding was handled manually using emails, spreadsheets, and separate project tools, leading to inconsistent processes, duplicated work, and delayed project kickoff.",

  solution:
    "Built an automation pipeline using Airtable, Notion, Make.com, Gmail, and Slack that instantly creates CRM records, generates project workspaces, assigns tasks, and sends onboarding notifications.",

  architecture: [
    "Client signs agreement",
    "Make.com automation starts",
    "Create Airtable client record",
    "Generate Notion workspace",
    "Create onboarding tasks",
    "Assign internal team",
    "Send Slack notification",
    "Send client welcome email",
  ],

  workflow: [
    "Agreement Signed",
    "Make.com",
    "Airtable CRM",
    "Notion Workspace",
    "Task Assignment",
    "Slack",
    "Gmail",
  ],

  automation: [
  {
    title: "Agreement",
    description: "Client signs proposal",
    icon: "form",
  },
  {
    title: "Make.com",
    description: "Workflow starts",
    icon: "bot",
  },
  {
    title: "Airtable",
    description: "Creates client record",
    icon: "database",
  },
  {
    title: "Notion",
    description: "Creates workspace",
    icon: "workspace",
  },
  {
    title: "Slack",
    description: "Team notified",
    icon: "slack",
  },
  {
    title: "Email",
    description: "Welcome email sent",
    icon: "email",
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

      title: "Client CRM Dashboard",

      description:
        "Airtable dashboard showing every client, onboarding status, assigned manager, project phase, and delivery progress.",
    },

    {
      image:
        "/images/projects/client-portal/notion-workspace.png",

      title: "Generated Notion Workspace",

      description:
        "Automatically created project workspace containing documentation, milestones, meeting notes, and deliverables.",
    },

    {
      image:
        "/images/projects/client-portal/make-workflow.png",

      title: "Automation Workflow",

      description:
        "Complete Make.com workflow responsible for creating CRM records, project workspaces, notifications, and onboarding tasks.",
    },

    {
      image:
        "/images/projects/client-portal/client-portal.png",

      title: "Client Portal",

      description:
        "Client-facing workspace providing project visibility, documentation, files, and progress updates.",
    },

    {
      image:
        "/images/projects/client-portal/slack-notification.png",

      title: "Slack Notification",

      description:
        "Automatic Slack notification informing the delivery team that a new client has completed onboarding.",
    },
  ],

  results: [
    "Reduced onboarding time by approximately 85%",
    "Centralized all client information",
    "Improved project visibility",
    "Reduced missed deadlines",
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
    "Automatic task creation",
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
      value: 7,
      suffix: " steps",
      label: "Automated Workflow",
    },
  ],

  before: [
    "Manual client onboarding",
    "Project files scattered",
    "Repeated status requests",
    "Tasks created manually",
  ],

  after: [
    "Automatic onboarding",
    "Centralized workspace",
    "Real-time project tracking",
    "Automatic notifications",
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