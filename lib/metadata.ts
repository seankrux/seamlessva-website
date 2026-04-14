import type { Metadata } from "next";
import { company } from "@/lib/site-data";

const defaultTitle = `${company.name} | Operational support that keeps growth moving`;

type PageMetadataOptions = {
  description: string;
  path: string;
  title?: string;
};

export function createPageMetadata({
  description,
  path,
  title,
}: PageMetadataOptions): Metadata {
  const openGraphTitle = title ? `${title} | ${company.name}` : defaultTitle;

  return {
    title: title ? title : { absolute: defaultTitle },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: openGraphTitle,
      description,
      url: path,
      siteName: company.name,
      locale: "en_CA",
      type: "website",
    },
  };
}
