import type { MetadataRoute } from "next";
import { company, caseStudies, services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/reviews",
    "/services",
    "/case-studies",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${company.siteUrl}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${company.siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...caseStudies.map((study) => ({
      url: `${company.siteUrl}/case-studies/${study.slug}`,
      lastModified: new Date(),
    })),
  ];
}
