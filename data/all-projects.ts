import { aiBusinessOsProject } from "./ai-business-os-project";
import { flowbridgeRevopsProject } from "./flowbridge-revops-project";
import { hubspotProject } from "./hubspot-project";
import { hubspotBusinessOsImplementation } from "./hubspot-business-os-implementation";
import { manusRevopsProject } from "./manus-revops-project";
import { projects } from "./projects";

export const allProjects = [
  aiBusinessOsProject,
  hubspotBusinessOsImplementation,
  flowbridgeRevopsProject,
  manusRevopsProject,
  hubspotProject,
  ...projects,
];
