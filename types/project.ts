import type { Technology } from "./technology";

export interface Project {
  slug: string;
  title: string;
  year: string;
  type: string;
  description: string;
  technologies: Technology[];
  metrics: string[];
}