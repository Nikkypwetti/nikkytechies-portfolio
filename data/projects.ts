import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio Project",

  description:
    "Designed an AI-powered CRM that automates lead capture, qualification, and follow-up using Airtable, HubSpot, Make.com, Groq AI, and Slack.",

  problem:
    "Sales teams manually copied leads between forms, spreadsheets, and CRM systems, causing delays and inconsistent follow-up.",

  solution:
    "Built an automated pipeline that captures leads, enriches them with AI, assigns a qualification score, recommends services, notifies Slack, and stores everything in Airtable and HubSpot.",

  architecture: [
    "Lead submits Typeform",
    "Make.com receives webhook",
    "Groq AI qualifies the lead",
    "Airtable stores CRM record",
    "HubSpot creates contact",
    "Slack notifies the sales team",
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

  heroImage: "/images/projects/growagency-cover.png",
}

//   {
//     slug: "coachpro-notion-os",

//     title: "CoachPro Notion OS",

//     year: "2026",

//     type: "Practice Project",

//     description:
//       "Created a client workspace for coaching businesses with dashboards, SOPs, and task management.",

//       problem:
//   "Growing agencies were spending hours manually qualifying leads and updating CRM records.",

// solution:
//   "Designed an Airtable CRM integrated with Make.com, HubSpot, Groq AI, and Slack to automate lead qualification and pipeline management.",

// results: [
//   "Reduced manual work by 80%",
//   "Saved approximately 10 hours each week",
//   "Improved lead response consistency",
// ],

//     technologies: [
//       technologies.notion,
//       technologies.zapier,
//       technologies.googleSheets,
//     ],

//     metrics: [
//       "Centralized operations",
//       "Improved client onboarding",
//       "Automated reminders",
//     ],
//   },

//   {
//     slug: "hubspot-clientflow",

//     title: "HubSpot ClientFlow CRM",

//     year: "2026",

//     type: "Practice Project",

//     description:
//       "Built automated lead nurturing workflows with HubSpot, AI summaries, and sales pipeline tracking.",

//       problem:
//   "Growing agencies were spending hours manually qualifying leads and updating CRM records.",

// solution:
//   "Designed an Airtable CRM integrated with Make.com, HubSpot, Groq AI, and Slack to automate lead qualification and pipeline management.",

// results: [
//   "Reduced manual work by 80%",
//   "Saved approximately 10 hours each week",
//   "Improved lead response consistency",
// ],

//     technologies: [
//       technologies.hubspot,
//       technologies.make,
//       technologies.slack,
//       technologies.claude,
//     ],

//     metrics: [
//       "Automated follow-up emails",
//       "AI lead scoring",
//       "Sales pipeline dashboard",
//     ],
//   },
];