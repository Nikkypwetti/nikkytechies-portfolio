import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [


{
  slug: "ai-revenue-intelligence-reporting-agent",

  title: "AI Revenue Intelligence & Reporting Agent",

  year: "2026",

  type: "Portfolio",

  category: "Operations",

  description:
    "Built a governed revenue intelligence system that turns manager questions into validated KPI requests, executes only approved parameterized SQL through read-only PostgreSQL access, and delivers auditable insights across Slack, web forms, REST API, and Power BI.",

  overview: [
    "Built a governed self-service reporting system for Revenue Operations and business managers.",
    "Accepts natural-language reporting questions through Slack, a manager form, and REST API.",
    "Uses AI only for structured intent interpretation rather than unrestricted SQL generation.",
    "Validates requested metrics, dimensions, filters, and reporting context against an approved KPI catalogue.",
    "Maps approved requests to controlled SQL templates with safe runtime parameters.",
    "Executes reporting queries through a least-privilege read-only PostgreSQL credential.",
    "Routes approved results into management summaries, channel responses, Power BI reporting, and a traceable audit trail.",
    "Centralizes error classification, recovery, escalation, alerting, and dead-letter handling.",
  ],

  problem:
    "Revenue and operations managers often need quick answers about revenue, pipeline, sales performance, deal stages, and lead sources. Manual reporting creates delays, while unrestricted AI-to-database approaches can introduce inconsistent KPI definitions, unsupported filters, arbitrary SQL execution, weak access controls, and poor auditability.",

  solution:
    "Designed a governed reporting architecture in n8n where AI interprets a manager's request into structured intent, deterministic controls authorize the requested KPI and filters, an approved query resolver selects a predefined parameterized SQL template, and PostgreSQL permissions enforce the final data-access boundary. Results are validated, summarized, delivered through Slack, Form, or API, and logged with request and correlation identifiers for operational traceability.",

  architecture: [
    "Manager request received through Slack, Form, or REST API",
    "Normalize request into a common reporting contract",
    "Create request and correlation context",
    "Write initial request audit event",
    "Interpret natural-language intent using structured AI output",
    "Resolve requested metric against the governed KPI catalogue",
    "Validate metric, filters, dimensions, dates, and reporting rules",
    "Resolve an approved query key",
    "Load the approved parameterized SQL template",
    "Build deterministic runtime query parameters",
    "Execute through the read-only PostgreSQL reporting role",
    "Validate database results before presentation",
    "Analyze and route the approved report",
    "Generate a management-facing summary",
    "Deliver through Slack, Form, or API",
    "Write success and lifecycle audit events",
    "Route operational failures into the centralized error-handling workflow",
  ],

  workflow: [
    "Manager Request",
    "Request Gateway",
    "Normalize & Validate",
    "Request Context",
    "AI Intent Parser",
    "KPI Catalogue",
    "Governance Validation",
    "Approved Query Resolver",
    "Runtime Parameters",
    "Approved SQL Template",
    "Read-Only PostgreSQL",
    "Result Validation",
    "Management Analysis",
    "Report Router",
    "Slack / Form / API",
    "Audit Trail",
  ],

  automation: [
    {
      title: "Manager Request",
      description:
        "Managers submit reporting questions through Slack, an authenticated web form, or REST API.",
      icon: "form",
    },
    {
      title: "AI Intent Parser",
      description:
        "AI converts the natural-language question into structured reporting intent without generating executable SQL.",
      icon: "bot",
    },
    {
      title: "KPI Governance",
      description:
        "Deterministic controls validate requested metrics, filters, dimensions, reporting dates, and approved query mappings.",
      icon: "database",
    },
    {
      title: "Approved Query",
      description:
        "The workflow resolves an approved SQL template and builds parameterized runtime values instead of accepting arbitrary database queries.",
      icon: "database",
    },
    {
      title: "PostgreSQL Boundary",
      description:
        "A dedicated read-only reporting credential executes approved queries while control and audit operations use separate permission boundaries.",
      icon: "database",
    },
    {
      title: "Management Reporting",
      description:
        "Validated results are analyzed and transformed into clear management-facing reporting outputs.",
      icon: "bot",
    },
    {
      title: "Multi-Channel Delivery",
      description:
        "Approved reports are delivered through Slack, the manager form, or API response depending on the originating channel.",
      icon: "slack",
    },
    {
      title: "Audit & Reliability",
      description:
        "Request IDs, correlation IDs, lifecycle events, centralized error handling, recovery, escalation, and dead-letter logging provide traceability.",
      icon: "database",
    },
  ],

  heroImage:
    "/images/projects/revenue-intelligence/revint-system-architecture.png",

  automationImage:
    "/images/projects/revenue-intelligence/revint-system-architecture.png",

  gallery: [
    {
      image:
        "/images/projects/revenue-intelligence/revint-system-architecture.png",
      title: "Governed Revenue Intelligence Architecture",
      description:
        "Recruiter-facing architecture showing manager request channels, structured AI interpretation, KPI governance, approved query execution, PostgreSQL security boundaries, reporting delivery, auditing, and centralized error handling.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-02-approved-api-report.png",
      title: "Approved API Revenue Report",
      description:
        "Successful governed API request returning closed-won revenue of 20,500 across two closed-won deals after passing reporting authorization and query controls.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-03-safe-rejection.png",
      title: "Safe Unsupported-Request Rejection",
      description:
        "Unsupported reporting intent is rejected safely rather than being converted into unrestricted SQL or an unauthorized database operation.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-08-powerbi-dashboard.png",
      title: "Revenue Intelligence Power BI Dashboard",
      description:
        "Management dashboard presenting closed-won revenue, open pipeline, closed-won deals, win rate, sales-rep pipeline, lead-source revenue, deal stages, and open opportunities.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-09-audit-traceability.png",
      title: "Request Audit Traceability",
      description:
        "A single manager request traced across request received, intent parsed, governance approved, and delivery succeeded events using consistent request and correlation identifiers.",
    },
    {
      image:
        "/images/projects/revenue-intelligence/revint-10-error-handler.png",
      title: "Centralized Error Handler",
      description:
        "Dedicated n8n reliability workflow handling error normalization, incident identification, classification, recovery decisions, escalation, alerting, dead-letter persistence, and final auditing.",
    },
  ],

  results: [
    "Created governed self-service revenue reporting across Slack, web form, and REST API channels",
    "Separated AI intent interpretation from query authorization and privileged database execution",
    "Implemented a governed catalogue covering 12 revenue and pipeline KPI definitions",
    "Restricted report execution to approved parameterized SQL templates",
    "Enforced least-privilege PostgreSQL access through a dedicated read-only reporting role",
    "Safely rejected unsupported and unauthorized reporting requests",
    "Built Power BI reporting for revenue, pipeline, win rate, deal stages, lead sources, sales reps, and open opportunities",
    "Added request and correlation IDs for end-to-end operational traceability",
    "Implemented centralized error classification, recovery, escalation, alerting, and dead-letter handling",
    "Published sanitized n8n workflow exports and verified implementation evidence in GitHub",
  ],

  technologies: [
    technologies.n8n,
    technologies.postgresql,
    technologies.powerbi,
    technologies.docker,
    technologies.groq,
    technologies.slack,
  ],

  metrics: [
    "12 governed KPI definitions",
    "3 manager request channels",
    "3 published core n8n workflows",
    "20,500 verified closed-won revenue",
    "55,000 verified open pipeline",
    "60.0% verified current-quarter win rate",
  ],

  stats: [
    {
      value: 12,
      suffix: " KPIs",
      label: "Governed Metrics",
    },
    {
      value: 3,
      suffix: " channels",
      label: "Manager Interfaces",
    },
    {
      value: 3,
      suffix: " workflows",
      label: "Published Core Workflows",
    },
  ],

  before: [
    "Managers depend on manual or ad-hoc revenue reporting",
    "KPI definitions can vary between requests",
    "Natural-language reporting can create unsafe AI-to-database patterns",
    "Unsupported filters may reach reporting logic without clear governance",
    "Database privileges may be broader than reporting requires",
    "Operational failures are difficult to trace across workflows",
    "Reporting evidence is scattered across separate tools",
  ],

  after: [
    "Managers can request governed reports through three channels",
    "KPI definitions are controlled through a reporting catalogue",
    "AI interprets intent but cannot authorize or execute arbitrary SQL",
    "Only approved query templates and validated parameters reach PostgreSQL",
    "Read-only database permissions enforce the final reporting boundary",
    "Request and correlation IDs provide end-to-end audit traceability",
    "Power BI provides reusable management reporting views",
    "Centralized error handling supports recovery, escalation, alerting, and dead-letter workflows",
  ],

  github:
    "https://github.com/Nikkypwetti/ai-revenue-intelligence-agent",

  demo: "",
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
  "Created projects automatically from approved onboarding requests",
  "Generated package-specific project tasks from reusable templates",
  "Centralized client and project documentation",
  "Created dedicated Notion client workspaces automatically",
  "Synchronized project and workspace information back to Airtable",
  "Automated client and internal team notifications",
],

  technologies: [
    technologies.airtable,
    technologies.notion,
    technologies.make,
    technologies.gmail,
    technologies.slack,
  ],

  metrics: [
  "18-step automated workflow",
  "5 service packages supported",
  "Package-based task generation",
],

stats: [
  {
    value: 18,
    suffix: " steps",
    label: "Automated Workflow",
  },
  {
    value: 5,
    suffix: " packages",
    label: "Service Packages",
  },
  {
    value: 4,
    suffix: " systems",
    label: "Core Systems Connected",
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

  github: "",
  demo: "",
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

  github: "",
  demo: "",
},

{
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio",

  category: "CRM",

  description:
    "Built a two-workflow AI-powered lead operations system that captures leads from Google Sheets, qualifies them with Groq AI, stores structured CRM records in Airtable, and automatically routes follow-up actions through Slack, Gmail, Google Calendar, and task creation workflows using n8n.",

  overview: [
    "Built a two-workflow lead operations system for lead capture, AI qualification, CRM management and follow-up.",
    "Workflow 1 captures new leads from Google Sheets and sends them to Groq AI for analysis.",
    "Parses the AI response and creates structured lead records automatically in Airtable.",
    "Workflow 2 searches CRM records and routes leads based on qualification status.",
    "Automates Slack notifications, Gmail follow-ups, calendar events and follow-up tasks.",
    "Keeps lead qualification, follow-up actions and CRM status synchronized in Airtable.",
  ],

  problem:
    "Lead processing required manually reviewing submissions, deciding which leads needed attention, updating CRM records, creating follow-up activities and notifying the team across separate tools. This made lead handling repetitive and made it harder to maintain a consistent follow-up process.",

  solution:
    "Built two connected n8n workflows. The first workflow captures new lead submissions from Google Sheets, sends the lead information to Groq AI for qualification, parses the structured AI response and creates the lead record in Airtable. The second workflow runs on a schedule, searches Airtable for leads requiring action, loops through the records, routes each lead by qualification status and automatically triggers the appropriate Slack notification, Gmail follow-up, Google Calendar event, follow-up task and Airtable update.",

  architecture: [
    "Lead submits information through the lead intake process",
    "Google Sheets stores the new lead submission",
    "Workflow 1 starts from the Google Sheets trigger",
    "Lead information is sent to Groq AI through an HTTP request",
    "Groq AI analyzes the lead information",
    "AI generates structured lead qualification insights",
    "JavaScript parses and prepares the AI response",
    "Airtable CRM record is created with the lead information and AI results",
    "Workflow 2 runs on a scheduled trigger",
    "Airtable records requiring follow-up are searched",
    "Records are processed through a loop",
    "Switch logic routes leads by qualification status",
    "Hot Lead → Slack notification and follow-up actions",
    "Qualified → Slack notification and follow-up actions",
    "Needs Discovery → Slack notification and follow-up actions",
    "Nurture → Gmail follow-up",
    "Not Fit → Gmail follow-up",
    "Google Calendar events are created where follow-up is required",
    "Follow-up tasks are created for actionable leads",
    "Airtable records are updated after each action",
  ],

  workflow: [
    "Google Sheets",
    "n8n Workflow 1",
    "Groq AI",
    "JavaScript",
    "Airtable CRM",
    "Scheduled Processing",
    "n8n Workflow 2",
    "Lead Status Routing",
    "Slack",
    "Gmail",
    "Google Calendar",
    "Google Tasks",
    "Airtable Update",
  ],

  automation: [
    {
      title: "Lead Intake",
      description:
        "Google Sheets detects a new lead submission and starts the first workflow.",
      icon: "sheet",
    },
    {
      title: "AI Qualification",
      description:
        "Groq AI analyzes the lead and generates structured qualification insights.",
      icon: "bot",
    },
    {
      title: "CRM Creation",
      description:
        "JavaScript prepares the AI output and creates the structured lead record in Airtable.",
      icon: "database",
    },
    {
      title: "Scheduled Processing",
      description:
        "The second workflow runs on a schedule and searches Airtable for leads requiring follow-up.",
      icon: "bot",
    },
    {
      title: "Lead Routing",
      description:
        "Switch logic routes Hot Lead, Qualified, Needs Discovery, Nurture and Not Fit leads into different actions.",
      icon: "form",
    },
    {
      title: "Slack Alerts",
      description:
        "Hot, qualified and discovery leads trigger structured internal Slack notifications.",
      icon: "slack",
    },
    {
      title: "Follow-up Actions",
      description:
        "Google Calendar events and follow-up tasks are created when the lead requires action.",
      icon: "form",
    },
    {
      title: "Email Follow-up",
      description:
        "Gmail handles email-based follow-up for nurture and not-fit lead routes.",
      icon: "email",
    },
    {
      title: "CRM Update",
      description:
        "Airtable is updated after the follow-up action so the CRM reflects the latest lead status.",
      icon: "database",
    },
  ],

  heroImage:
    "/images/projects/growagency/hero.png",

  automationImage:
    "/images/projects/growagency/workflow-2.png",

  gallery: [
  {
    image: "/images/projects/growagency/dashboard.png",
    title: "Airtable CRM Dashboard",
    description:
      "Centralized CRM dashboard showing lead records, AI qualification results, lead status, follow-up information and sales pipeline visibility.",
  },
  {
    image: "/images/projects/growagency/workflow-1.png",
    title: "Workflow 1 — Lead Intake & AI Qualification",
    description:
      "New Google Sheets submissions are sent to Groq AI for qualification, processed with JavaScript and converted into structured Airtable CRM records.",
  },
  {
    image: "/images/projects/growagency/workflow-2.png",
    title: "Workflow 2 — Lead Routing & Follow-up",
    description:
      "A scheduled n8n workflow searches Airtable, processes leads through qualification-based routing and triggers Slack, Gmail, calendar, task and CRM update actions.",
  },
  {
    image: "/images/projects/growagency/slack-alert.png",
    title: "Slack Lead Notification",
    description:
      "Automatic Slack notifications provide the team with lead qualification and follow-up information when a lead requires attention.",
  },
],

  results: [
    "Automated lead intake from Google Sheets into Airtable CRM",
    "Standardized AI-assisted lead qualification using Groq AI",
    "Created rule-based routing for five lead qualification outcomes",
    "Automated Slack notifications for actionable leads",
    "Created calendar events and follow-up tasks automatically",
    "Automated email follow-up for selected lead outcomes",
    "Kept CRM records synchronized with follow-up actions",
    "Reduced repetitive lead-processing and administrative steps",
  ],

  technologies: [
    technologies.googleSheets,
    technologies.n8n,
    technologies.groq,
    technologies.airtable,
    technologies.slack,
    technologies.gmail,
  ],

  metrics: [
    "2 connected n8n workflows",
    "5 qualification routes",
    "AI-powered lead qualification",
  ],

  stats: [
    {
      value: 2,
      suffix: " workflows",
      label: "Connected Automations",
    },
    {
      value: 5,
      suffix: " routes",
      label: "Lead Outcomes",
    },
    {
      value: 8,
      suffix: " tools",
      label: "Systems Used",
    },
  ],

  before: [
    "Lead submissions reviewed manually",
    "Manual lead qualification",
    "CRM records created manually",
    "Follow-up decisions handled individually",
    "Calendar follow-ups created manually",
    "Team notifications sent manually",
    "Lead status updates spread across separate tools",
  ],

  after: [
    "Automatic lead intake",
    "AI-assisted lead qualification",
    "Automatic Airtable CRM record creation",
    "Five rule-based qualification routes",
    "Automatic Slack notifications",
    "Automatic Gmail follow-up",
    "Automatic calendar events and follow-up tasks",
    "CRM records updated after follow-up actions",
  ],

  github: "",

  demo: "",
},
];