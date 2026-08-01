import type { Technology } from "./technology";

export interface Project {
  slug: string;

  title: string;

  year: string;

  type: string;

  description: string;

  problem: string;

  solution: string;

  architecture: string[];

  results: string[];

  technologies: Technology[];

  metrics: string[];

  heroImage?: string;

  github?: string;

  demo?: string;
}