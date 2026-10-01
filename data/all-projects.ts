import { aiBusinessOsProject } from "./ai-business-os-project";
import { flowbridgeRevopsProject } from "./flowbridge-revops-project";
import { hubspotProject } from "./hubspot-project";
import { hubspotBusinessOsImplementation } from "./hubspot-business-os-implementation";
import { manusRevopsProject } from "./manus-revops-project";
import { projects } from "./projects";

function getProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Portfolio project not found: ${slug}`);
  }

  return project;
}

export const allProjects = [
  aiBusinessOsProject,
  getProject("ai-revenue-intelligence-reporting-agent"),
  getProject("asternova-salesforce-revops-system"),
  hubspotBusinessOsImplementation,
  getProject("growagency-crm-ai-pipeline"),
  getProject("revenue-intelligence-production-simulation"),
  hubspotProject,
  flowbridgeRevopsProject,
  manusRevopsProject,
  getProject("client-onboarding-automation"),
  getProject("clickup-operations-growops-agency"),
  getProject("business-operations-client-project-system"),
  getProject("ai-meeting-notes-crm-sync"),
];
