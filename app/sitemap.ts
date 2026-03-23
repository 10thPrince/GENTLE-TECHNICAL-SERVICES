import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gentletechnical.com/",
      lastModified: new Date(),
    },
    {
      url: "https://gentletechnical.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://gentletechnical.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://gentletechnical.com/contact",
      lastModified: new Date(),
    },
  ];
}
