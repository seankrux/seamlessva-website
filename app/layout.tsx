import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { company } from "@/lib/site-data";

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8f8ff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "SeamlessVA Philippines | Virtual Assistant & Operations Support",
    template: "%s | SeamlessVA Philippines",
  },
  description:
    "SeamlessVA Philippines helps founders and lean teams offload admin, bookkeeping, and growth operations with structured virtual assistant support.",
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "virtual assistant Philippines",
    "Philippines VA services",
    "bookkeeping support",
    "operations support",
    "executive assistant support",
    "digital marketing support",
    "remote admin support",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SeamlessVA Philippines | Virtual Assistant & Operations Support",
    description:
      "Structured virtual assistant, bookkeeping, operations, and growth execution support for founders and lean teams.",
    url: "/",
    siteName: company.name,
    locale: "en_PH",
    type: "website",
    images: [
      {
        url: "/seamlessva-logo.svg",
        width: 1200,
        height: 630,
        alt: "SeamlessVA Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SeamlessVA Philippines | Virtual Assistant & Operations Support",
    description:
      "Structured virtual assistant, bookkeeping, operations, and growth execution support for founders and lean teams.",
    images: ["/seamlessva-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PH"
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-cream)] text-[var(--color-ink)]">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="site-bg" />
        <div className="relative flex min-h-full flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">{children}</main>
          <SiteFooter company={company} />
        </div>
      </body>
    </html>
  );
}
