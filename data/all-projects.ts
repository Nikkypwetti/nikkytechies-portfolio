import { aiBusinessOsProject } from "./ai-business-os-project";
import { flowbridgeRevopsProject } from "./flowbridge-revops-project";
import { hubspotProject } from "./hubspot-project";
import { manusRevopsProject } from "./manus-revops-project";
import { projects } from "./projects";

export const allProjects = [
  aiBusinessOsProject,
  flowbridgeRevopsProject,
  manusRevopsProject,
  hubspotProject,
  ...projects,
];
