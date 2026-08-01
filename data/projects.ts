import { technologies } from "./technologies";

export const projects = [
  {
    slug: "growagency-crm-ai-pipeline",

    title: "GrowAgency CRM + AI Pipeline",

    year: "2026",

    type: "Portfolio Project",

    description:
      "Designed an AI-powered CRM that automated lead qualification, meeting summaries, and pipeline management.",

    technologies: [
      technologies.airtable,
      technologies.make,
      technologies.hubspot,
      technologies.groq,
    ],

    metrics: [
      "Reduced manual work by 80%",
      "Saved 10+ hours/week",
      "Automated CRM updates",
    ],
  },

  {
    slug: "coachpro-notion-os",

    title: "CoachPro Notion OS",

    year: "2026",

    type: "Practice Project",

    description:
      "Created a client workspace for coaching businesses with dashboards, SOPs, and task management.",

    technologies: [
      technologies.notion,
      technologies.zapier,
      technologies.googleSheets,
    ],

    metrics: [
      "Centralized operations",
      "Improved client onboarding",
      "Automated reminders",
    ],
  },

  {
    slug: "hubspot-clientflow",

    title: "HubSpot ClientFlow CRM",

    year: "2026",

    type: "Practice Project",

    description:
      "Built automated lead nurturing workflows with HubSpot, AI summaries, and sales pipeline tracking.",

    technologies: [
      technologies.hubspot,
      technologies.make,
      technologies.slack,
      technologies.claude,
    ],

    metrics: [
      "Automated follow-up emails",
      "AI lead scoring",
      "Sales pipeline dashboard",
    ],
  },
];