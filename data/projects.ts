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
  slug: "business-operations-client-project-system",

  title: "Business Operations & Client Delivery System",

  year: "2026",

  type: "Portfolio",

  category: "Operations",

  description:
    "Designed a centralized operations system for managing clients, projects, tasks, deadlines, SOPs, documentation and client delivery across Notion and Airtable, with structured dashboards and dedicated client workspaces.",

  overview: [
    "Designed a centralized business operating system for managing client delivery.",
    "Organized projects, clients, tasks, deadlines, priorities and project status.",
    "Created structured dashboards for monitoring active and completed work.",
    "Built dedicated client workspaces for project communication and delivery.",
    "Centralized meeting notes, project updates, files and deliverables.",
    "Documented repeatable project kickoff, onboarding and delivery processes.",
    "Created reusable project structures to support consistent project execution.",
  ],

  problem:
    "Client information, tasks, deadlines, project updates, files and documentation can easily become scattered across spreadsheets, emails, documents and messaging tools. This makes it difficult to understand project status, track responsibilities and maintain a consistent client delivery process.",

  solution:
    "Designed a connected operations system using Notion and Airtable. The system centralizes projects, clients, tasks, deadlines, priorities, documentation and project progress while providing structured client workspaces for project status, deliverables, meeting notes and updates. SOPs and reusable project processes help standardize client onboarding, project kickoff and delivery.",

  architecture: [
    "Centralize client records",
    "Create and track projects",
    "Link projects to the correct clients",
    "Organize tasks by project",
    "Track task priorities and deadlines",
    "Monitor project status and progress",
    "Use structured project delivery phases",
    "Create dedicated client project workspaces",
    "Centralize meeting notes and project updates",
    "Organize files and project deliverables",
    "Document project kickoff procedures",
    "Document client onboarding procedures",
    "Document project delivery procedures",
  ],

  workflow: [
    "Client",
    "Project",
    "Tasks",
    "Priority",
    "Deadline",
    "Project Status",
    "Client Workspace",
    "Meeting Notes",
    "Deliverables",
    "SOP Library",
    "Project Tracking",
  ],

  automation: [
    {
      title: "Client Records",
      description:
        "Client information and project relationships are centralized.",
      icon: "database",
    },
    {
      title: "Project Tracking",
      description:
        "Projects are organized by status, priority, deadline and progress.",
      icon: "workspace",
    },
    {
      title: "Task Coordination",
      description:
        "Tasks are linked to projects and tracked by deadline and priority.",
      icon: "form",
    },
    {
      title: "Client Workspace",
      description:
        "Each client has a structured workspace for project delivery.",
      icon: "workspace",
    },
    {
      title: "Documentation",
      description:
        "Meeting notes, updates, files and deliverables are centralized.",
      icon: "sheet",
    },
    {
      title: "SOP Library",
      description:
        "Kickoff, onboarding and project delivery processes are documented.",
      icon: "sheet",
    },
  ],

  heroImage:
    "/images/projects/business-os/hero.png",

  automationImage:
    "/images/projects/business-os/workspace.png",

  gallery: [
  {
    image: "/images/projects/business-os/dashboard.png",
    title: "Business Operations Dashboard",
    description:
      "Centralized workspace for accessing projects, CRM information, documentation, team resources and client delivery systems.",
  },
  {
    image: "/images/projects/business-os/projects.png",
    title: "Project Tracking System",
    description:
      "Projects are tracked by client, status, priority, start date, deadline, tasks and overall progress.",
  },
  {
    image: "/images/projects/business-os/tasks.png",
    title: "Task & Deadline Coordination",
    description:
      "Centralized task tracking helps organize responsibilities, priorities, due dates and project-related work.",
  },
  {
    image: "/images/projects/business-os/client-workspace.png",
    title: "Client Project Workspace",
    description:
      "Client-facing workspace centralizing project status, tasks, deliverables, meeting notes, files, updates and communication.",
  },
  {
    image: "/images/projects/business-os/sop-library.png",
    title: "SOP & Process Library",
    description:
      "Documented repeatable processes for project kickoff, client onboarding and project delivery to support consistent execution.",
  },
],

  results: [
    "Centralized client and project information",
    "Improved visibility into project status and deadlines",
    "Structured task and priority tracking",
    "Centralized project documentation and meeting notes",
    "Created dedicated client delivery workspaces",
    "Documented repeatable operating procedures",
    "Standardized project coordination and handoff",
  ],

  technologies: [
    technologies.airtable,
    technologies.notion,
  ],

  metrics: [
    "Centralized project operations",
    "Structured task & deadline tracking",
    "Documented project processes",
  ],

  stats: [
    {
      value: 1,
      suffix: " hub",
      label: "Operations System",
    },
    {
      value: 6,
      suffix: " areas",
      label: "Operations Managed",
    },
    {
      value: 3,
      suffix: " SOPs",
      label: "Core Processes",
    },
  ],

  before: [
    "Client information scattered across different tools",
    "Tasks and deadlines difficult to monitor",
    "Project documentation stored separately",
    "Limited project status visibility",
    "Project processes repeated without documented procedures",
  ],

  after: [
    "Centralized client operations",
    "Structured project and task tracking",
    "Clear deadlines and priorities",
    "Dedicated client project workspaces",
    "Organized documentation and meeting notes",
    "Documented kickoff, onboarding and delivery procedures",
    "Clear project status and delivery visibility",
  ],

  github: "",

  demo: "",
},

{
  slug: "ai-meeting-notes-crm-sync",

  title: "AI Meeting Notes & CRM Sync",

  year: "2026",

  type: "Portfolio",

  category: "AI",

  description:
    "Built an AI-powered meeting intelligence workflow that analyzes client meeting notes from Notion, generates structured insights with Groq AI, logs meeting history in HubSpot, updates active Airtable projects, creates follow-up tasks, and notifies the internal team through Slack.",

  overview: [
    "Monitors new client meeting notes created in Notion.",
    "Retrieves the existing Airtable project and linked client automatically.",
    "Uses Groq AI to analyze meeting notes and return structured JSON.",
    "Extracts meeting summary, sentiment, next action, key topics, buying signals, concerns, and follow-up timing.",
    "Logs the meeting against the existing HubSpot contact and Closed Won deal.",
    "Updates the active Airtable project with the latest meeting context.",
    "Creates a follow-up task automatically and links it to the correct project phase.",
    "Sends a structured meeting summary to the internal team through Slack.",
    "Tracks processing, synchronization, completion, and failures inside Notion.",
  ],

  problem:
    "After client meetings, project information had to be manually summarized, copied into CRM records, converted into follow-up tasks, and shared with the delivery team. This created repetitive administrative work and increased the risk of missing important actions, concerns, or client decisions.",

  solution:
    "Built a Make.com automation that watches a Notion Sales Meeting Notes database, retrieves the linked Airtable project and client, analyzes the raw meeting notes with Groq AI, parses the response into structured data, saves the AI insights back to Notion, creates a HubSpot meeting note, updates the existing Airtable project, resolves the correct project phase, creates a follow-up task, sends a Slack summary, and marks the meeting synchronization as completed.",

  architecture: [
    "Watch new Sales Meeting Notes in Notion",
    "Validate that the meeting is ready for processing",
    "Mark the meeting as Processing",
    "Retrieve the existing Airtable project",
    "Retrieve the client linked to the project",
    "Analyze meeting notes with Groq AI",
    "Parse the structured JSON response",
    "Save AI meeting insights back to Notion",
    "Create a HubSpot note linked to the existing contact and Closed Won deal",
    "Update the existing Airtable project",
    "Resolve the project's linked Project Phase record",
    "Create a follow-up task linked to the project and phase",
    "Send the meeting summary to Slack",
    "Mark the Notion meeting as Completed and synced",
  ],

  workflow: [
    "Notion Meeting Notes",
    "Validation",
    "Airtable Project",
    "Airtable Client",
    "Groq AI",
    "JSON Parser",
    "Notion AI Results",
    "HubSpot Note",
    "Airtable Project Update",
    "Project Phase Lookup",
    "Follow-up Task",
    "Slack",
    "Sync Complete",
  ],

  automation: [
  {
    title: "Notion Trigger",
    description: "New client meeting notes trigger the workflow",
    icon: "workspace",
  },
  {
    title: "Airtable Lookup",
    description: "Existing project and client context retrieved",
    icon: "database",
  },
  {
    title: "Groq AI",
    description: "Meeting notes analyzed into structured insights",
    icon: "bot",
  },
  {
    title: "HubSpot",
    description: "Meeting note added to existing CRM records",
    icon: "crm",
  },
  {
    title: "Airtable Update",
    description: "Project updated and follow-up task created",
    icon: "database",
  },
  {
    title: "Slack",
    description: "Structured meeting summary sent to the team",
    icon: "slack",
  },
  {
    title: "Notion Sync",
    description: "Meeting marked completed and synchronized",
    icon: "workspace",
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

      title: "AI Meeting Automation Workflow",

      description:
        "Complete Make.com scenario connecting Notion, Airtable, Groq AI, HubSpot, and Slack with processing status tracking and error handling.",
    },

    {
      image:
        "/images/projects/meeting-ai/notion.png",

      title: "Sales Meeting Notes",

      description:
        "Notion database used to capture raw client meeting notes and store AI-generated summaries, sentiment, next actions, topics, buying signals, concerns, follow-up dates, and synchronization status.",
    },

    {
      image:
        "/images/projects/meeting-ai/airtable.png",

      title: "Automated Project Updates",

      description:
        "Existing Airtable projects are updated automatically with the latest meeting summary, client sentiment, next action, and meeting date.",
    },

    {
      image:
        "/images/projects/meeting-ai/hubspot.png",

      title: "HubSpot Meeting History",

      description:
        "AI-generated meeting intelligence is logged as a HubSpot note associated with the existing client contact and Closed Won deal.",
    },

    {
      image:
        "/images/projects/meeting-ai/task.png",

      title: "Automatic Follow-up Tasks",

      description:
        "The workflow resolves the project's linked phase and creates a follow-up task with the AI-generated next action and calculated due date.",
    },

    {
      image:
        "/images/projects/meeting-ai/slack.png",

      title: "Slack Meeting Summary",

      description:
        "The delivery team receives an automated summary containing the client, project, sentiment, key topics, concerns, next action, and follow-up date.",
    },
  ],

  results: [
    "Removed repetitive meeting-summary and project-update work",
    "Centralized AI-generated meeting intelligence in Notion",
    "Automatically logged client meeting history in HubSpot",
    "Kept active Airtable projects synchronized with meeting outcomes",
    "Created follow-up tasks automatically from AI next actions",
    "Improved visibility for the internal team through Slack summaries",
    "Added processing and failure tracking for more reliable automation",
  ],

  technologies: [
    technologies.make,
    technologies.groq,
    technologies.airtable,
    technologies.notion,
    technologies.hubspot,
    technologies.slack,
  ],

  metrics: [
    "14-step automated workflow",
    "7 structured AI meeting insights",
    "4 business systems synchronized",
  ],

  stats: [
    {
      value: 14,
      suffix: " steps",
      label: "Automated Workflow",
    },
    {
      value: 7,
      suffix: " insights",
      label: "AI Fields Extracted",
    },
    {
      value: 4,
      suffix: " systems",
      label: "Systems Synchronized",
    },
  ],

  before: [
    "Meeting notes reviewed manually",
    "Project records updated manually after calls",
    "Follow-up actions created manually",
    "Meeting context scattered across different tools",
    "Internal teams depended on manual meeting updates",
    "Automation failures were difficult to track",
  ],

  after: [
    "AI-generated structured meeting summaries",
    "Automatic Airtable project updates",
    "Automatic HubSpot meeting history",
    "AI-generated follow-up task creation",
    "Automatic project phase resolution",
    "Instant Slack meeting summaries",
    "Centralized Notion meeting intelligence",
    "Processing and error status tracking",
  ],

  github:
    "https://github.com/yourusername/ai-meeting-sync",

  demo:
    "https://your-demo-link.com",
},
];