import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gentle-technical-services.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://gentle-technical-services.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://gentle-technical-services.vercel.app/projects",
      lastModified: new Date(),
    },
    {
      url: "https://gentle-technical-services.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
