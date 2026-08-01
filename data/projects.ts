import type { Project } from "@/types/project";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
  slug: "growagency-crm-ai-pipeline",

  title: "GrowAgency CRM + AI Pipeline",

  year: "2026",

  type: "Portfolio",

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

  workflow: [
  "Lead Form",
  "Make.com",
  "Groq AI",
  "Airtable CRM",
  "HubSpot",
  "Slack",
],


gallery: [
  "/images/projects/growagency/airtable.png",
  "/images/projects/growagency/make.png",
  "/images/projects/growagency/hubspot.png",
  "/images/projects/growagency/slack.png",
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

  heroImage: "/images/projects/growagency-cover.png",
},
];