import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nikkytechies.com";

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
    },
  ];
}