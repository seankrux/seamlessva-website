import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { company } from "@/lib/site-data";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Seamless VA | Operational support that keeps growth moving",
    template: "%s | Seamless VA",
  },
  description:
    "Seamless VA helps founders and lean teams offload admin, bookkeeping, and growth operations with a conversion-focused support model.",
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "virtual assistant services",
    "bookkeeping support",
    "operations support",
    "executive assistant support",
    "digital marketing support",
    "Mississauga virtual assistant",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seamless VA | Operational support that keeps growth moving",
    description:
      "Seamless VA helps founders and lean teams offload admin, bookkeeping, and growth operations with a conversion-focused support model.",
    url: "/",
    siteName: company.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamless VA | Operational support that keeps growth moving",
    description:
      "Seamless VA helps founders and lean teams offload admin, bookkeeping, and growth operations with a conversion-focused support model.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">
        <div className="site-bg" />
        <div className="relative flex min-h-full flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter company={company} />
        </div>
      </body>
    </html>
  );
}
