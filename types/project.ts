import type { Technology } from "./technology";

export interface Project {
  slug: string;

  title: string;

  year: string;

  type: string;

  category:
  | "CRM"
  | "Automation"
  | "AI"
  | "Notion";

  description: string;

  overview: string[];

  problem: string;

  solution: string;

  architecture: string[];

  workflow: string[];

  automation: {
  title: string;
  description: string;
  icon:
    | "form"
    | "sheet"
    | "bot"
    | "database"
    | "crm"
    | "workspace"
    | "slack"
    | "email";
  }[];

  gallery: {
    image: string;
    title: string;
    description: string;
  }[];

  results: string[];

  technologies: Technology[];

  metrics: string[];

  stats: {
    value: number;
    suffix?: string;
    label: string;
  }[];

  before: string[];

  after: string[];

  heroImage?: string;

  automationImage: string;

  github?: string;

  demo?: string;

}