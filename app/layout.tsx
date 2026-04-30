import type { Metadata, Viewport } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./brand-overrides.css";
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
  themeColor: "#f6fff9",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Seamless VA | Virtual Assistant & Operations Support",
    template: "%s | Seamless VA",
  },
  description:
    "Seamless VA helps founders and lean teams offload admin, bookkeeping, and growth operations with structured virtual assistant support.",
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  keywords: [
    "virtual assistant services",
    "VA services",
    "bookkeeping support",
    "operations support",
    "executive assistant support",
    "digital marketing support",
    "remote admin support",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Seamless VA | Virtual Assistant & Operations Support",
    description:
      "Structured virtual assistant, bookkeeping, operations, and growth execution support for founders and lean teams.",
    url: "/",
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/seamlessva-logo.svg",
        width: 1200,
        height: 630,
        alt: "Seamless VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seamless VA | Virtual Assistant & Operations Support",
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
      lang="en"
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
