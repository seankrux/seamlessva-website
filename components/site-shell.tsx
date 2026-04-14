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
      <div className="section-shell glass-nav rounded-full border border-[rgba(31,44,45,0.08)] px-5 py-3 shadow-[0_12px_32px_rgba(31,44,45,0.05)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-teal)] font-display text-lg font-semibold text-white">
                SV
              </span>
              <div>
                <p className="font-semibold tracking-[0.2em] text-[var(--color-teal-dark)] uppercase text-xs">
                  {company.name}
                </p>
                <p className="text-sm text-[var(--color-slate)]">
                  {company.miniTagline}
                </p>
              </div>
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="hidden rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-white md:inline-flex"
            >
              {company.phone}
            </a>
          </div>

          <nav className="flex flex-wrap items-center gap-2 md:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-slate)] hover:bg-white hover:text-[var(--color-ink)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-coral)] px-4 py-2 text-sm font-semibold text-white"
            >
              Get started
            </Link>
          </nav>
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
    <footer className="border-t border-[rgba(31,44,45,0.08)] pb-10 pt-12">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal-dark)]">
            {company.name}
          </p>
          <h2 className="section-subtitle max-w-xl text-[2.35rem]">
            Cleaner systems, calmer operations, and support that does not need
            babysitting.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-slate)]">
            Built for founders, operators, and service teams that need back-office
            help, better execution rhythm, and a clearer path from intake to done.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-slate)]">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[var(--color-ink)]">
                  {link.label}
                </Link>
              ))}
              <Link href="/privacy-policy" className="hover:text-[var(--color-ink)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--color-ink)]">
                Terms of Use
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-slate)]">
              <a href={`mailto:${company.email}`} className="hover:text-[var(--color-ink)]">
                {company.email}
              </a>
              <a href={`tel:${company.phone}`} className="hover:text-[var(--color-ink)]">
                {company.phone}
              </a>
              <p>{company.location}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {company.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-[rgba(31,44,45,0.1)] px-3 py-2 hover:bg-white hover:text-[var(--color-ink)]"
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
      <p className="mt-4 text-sm leading-7 text-[var(--color-slate)] md:text-base">
        {body}
      </p>
    </div>
  );
}
