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
      <div className="section-shell glass-nav rounded-full px-5 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#0d9488,#14b8a6)] shadow-[0_12px_35px_rgba(13,148,136,0.28)]">
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
              <p className="truncate text-[0.95rem] font-extrabold text-[var(--color-teal)]">
                Seamless<span className="text-[var(--color-ink)]">VA</span>
              </p>
              <p className="hidden text-sm text-[var(--color-slate)] sm:block">
                Operational support for founders and lean teams
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
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
              Start A Project
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
                    Start A Project
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

type FooterProps = { company: typeof company };

export function SiteFooter({ company }: FooterProps) {
  return (
    <footer className="mt-10 px-3 pb-8 pt-10 md:px-5 md:pb-10">
      <div className="section-shell rounded-[2rem] bg-[linear-gradient(135deg,#0d9488,#14b8a6)] px-6 py-8 text-white shadow-[0_18px_60px_rgba(13,148,136,0.22)] md:px-9 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/15">
                <Image src="/seamlessva-emblem.svg" alt="Seamless VA emblem" width={48} height={48} className="h-12 w-12" />
              </span>
              <span className="template-badge !bg-white/15 !text-white">Seamless VA</span>
            </div>
            <h2 className="section-subtitle max-w-2xl text-white">
              Clean systems. Calmer operations. Better follow-through.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.86)] md:text-base">
              Seamless VA helps founder-led teams offload recurring admin, bookkeeping,
              and execution work that keeps dragging leadership back into the weeds.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-secondary justify-center bg-white text-[var(--color-teal)] sm:justify-start">
                Book a free consultation
              </Link>
              <a href={`tel:${company.phone}`} className="btn-secondary justify-center border-white/30 bg-white/10 text-white sm:justify-start">
                Call {company.phone}
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="footer-label">Company</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(255,255,255,0.88)]">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ))}
                <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link href="/terms" className="footer-link">Terms of Use</Link>
              </div>
            </div>
            <div>
              <p className="footer-label">Contact</p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-[rgba(255,255,255,0.88)]">
                <a href={`mailto:${company.email}`} className="footer-link">{company.email}</a>
                <a href={`tel:${company.phone}`} className="footer-link">{company.phone}</a>
                <p>{company.location}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {company.socials.map((social) => (
                    <a key={social.label} href={social.href} className="social-pill" target="_blank" rel="noreferrer">
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

type SectionHeadingProps = { eyebrow: string; title: string; body: string };

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
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
