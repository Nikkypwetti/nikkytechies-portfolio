import { aiBusinessOsProject } from "./ai-business-os-project";
import { flowbridgeRevopsProject } from "./flowbridge-revops-project";
import { hubspotProject } from "./hubspot-project";
import { hubspotBusinessOsImplementation } from "./hubspot-business-os-implementation";
import { manusRevopsProject } from "./manus-revops-project";
import { projects } from "./projects";

const projectOrder = [
  "ai-revenue-intelligence-reporting-agent",
  "asternova-salesforce-revops-system",
  "growagency-crm-ai-pipeline",
  "revenue-intelligence-production-simulation",
  "hubspot-clientflow-crm",
  "client-onboarding-automation",
  "clickup-operations-growops-agency",
  "business-operations-client-project-system",
  "ai-meeting-notes-crm-sync",
];

const orderedProjects = projectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export const allProjects = [
  aiBusinessOsProject,
  ...orderedProjects.slice(0, 1),
  orderedProjects.find((project) => project.slug === "asternova-salesforce-revops-system"),
  hubspotBusinessOsImplementation,
  orderedProjects.find((project) => project.slug === "growagency-crm-ai-pipeline"),
  orderedProjects.find((project) => project.slug === "revenue-intelligence-production-simulation"),
  hubspotProject,
  flowbridgeRevopsProject,
  manusRevopsProject,
  orderedProjects.find((project) => project.slug === "client-onboarding-automation"),
  orderedProjects.find((project) => project.slug === "clickup-operations-growops-agency"),
  orderedProjects.find((project) => project.slug === "business-operations-client-project-system"),
  orderedProjects.find((project) => project.slug === "ai-meeting-notes-crm-sync"),
].filter(Boolean);
