import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elenavance.design";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
