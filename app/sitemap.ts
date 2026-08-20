import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nikkytechies-portfolio.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/projects`, priority: 0.9 },
    { url: `${baseUrl}/resume`, priority: 0.8 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
