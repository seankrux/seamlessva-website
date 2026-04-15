import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-3 py-4 md:px-5">
      <div className="section-shell glass-nav rounded-full px-5 py-3 shadow-[0_22px_50px_rgba(10,15,35,0.18)]">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1.1rem] border border-white/12 bg-white/6 shadow-[0_14px_30px_rgba(99,91,255,0.22)]">
              <Image
                src="/seamlessva-emblem.svg"
                alt="Seamless VA emblem"
                width={44}
                height={44}
                className="h-11 w-11"
                priority
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.92)]">
                {company.name}
              </p>
              <p className="hidden text-sm text-[rgba(234,238,255,0.72)] sm:block">
                {company.miniTagline}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link-pill">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={`tel:${company.phone}`} className="call-pill hidden lg:inline-flex">
              {company.phone}
            </a>
            <Link href="/contact" className="btn-primary hidden lg:inline-flex">
              Book a fit call
            </Link>

            <details className="relative lg:hidden">
              <summary className="menu-summary">Menu</summary>
              <div className="mobile-menu-panel absolute right-0 top-full mt-3 w-[min(18rem,calc(100vw-2rem))] p-3">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="mobile-menu-link">
                      {link.label}
                    </Link>
                  ))}
                  <a href={`tel:${company.phone}`} className="mobile-menu-link mt-2">
                    Call {company.phone}
                  </a>
                  <Link href="/contact" className="btn-primary justify-center text-center">
                    Book a fit call
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

type FooterProps = {
  company: typeof company;
};

export function SiteFooter({ company }: FooterProps) {
  return (
    <footer className="mt-10 px-3 pb-8 pt-10 md:px-5 md:pb-10">
      <div className="section-shell rounded-[2rem] bg-[linear-gradient(135deg,#0b1020_0%,#121933_54%,#182149_100%)] px-6 py-8 text-white shadow-[0_35px_90px_rgba(10,15,35,0.32)] md:px-9 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.2rem] border border-white/12 bg-white/6">
                <Image
                  src="/seamlessva-emblem.svg"
                  alt="Seamless VA emblem"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
              </span>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.78)]">
                {company.name}
              </span>
            </div>
            <h2 className="section-subtitle max-w-2xl text-white">
              Premium operating support for teams that need momentum without more internal drag.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(232,236,255,0.72)] md:text-base">
              Seamless VA helps founder-led teams offload the recurring admin, bookkeeping,
              follow-through, and execution work that steals strategic attention.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center sm:justify-start">
                Start the conversation
              </Link>
              <a href={`tel:${company.phone}`} className="btn-secondary justify-center text-white sm:justify-start">
                Call {company.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="footer-label">Explore</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(232,236,255,0.72)]">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
                <Link href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="footer-link">
                  Terms of Use
                </Link>
              </div>
            </div>

            <div>
              <p className="footer-label">Contact</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(232,236,255,0.72)]">
                <a href={`mailto:${company.email}`} className="footer-link">
                  {company.email}
                </a>
                <a href={`tel:${company.phone}`} className="footer-link">
                  {company.phone}
                </a>
                <p>{company.location}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {company.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-pill"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 section-subtitle">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-slate)] md:text-base md:leading-8">
        {body}
      </p>
    </div>
  );
}
