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
  themeColor: "#f6faf8",
  colorScheme: "light",
};

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
  alternates: { canonical: "/" },
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
