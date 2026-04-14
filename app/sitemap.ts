import type { MetadataRoute } from "next";
import { caseStudies, services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seamlessva.com";
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
      url: `${base}${route}`,
      lastModified: new Date(),
    })),
    ...services.map((service) => ({
      url: `${base}/services/${service.slug}`,
      lastModified: new Date(),
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/case-studies/${study.slug}`,
      lastModified: new Date(),
    })),
  ];
}
