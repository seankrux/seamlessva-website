"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, services } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const menuLinks = navLinks.filter((link) => link.href !== "/");

const serviceNavLinks = services.map((service) => ({
  href: `/services/${service.slug}`,
  eyebrow: service.shortLabel,
  label:
    service.slug === "virtual-assistant"
      ? "Virtual Assistant"
      : service.slug === "bookkeeping-accounting"
        ? "Bookkeeping Support"
        : "Automation & Marketing",
  description: service.summary,
}));

export function SiteHeader() {
  const pathname = usePathname();
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  const closeMenus = () => {
    servicesMenuRef.current?.removeAttribute("open");
    mobileMenuRef.current?.removeAttribute("open");
  };

  useEffect(() => {
    closeMenus();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 py-4 md:px-5">
      <div className="section-shell glass-nav rounded-[1.9rem] px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeMenus}>
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-[1.15rem] border border-[rgba(99,91,255,0.14)] bg-[#0f1631] shadow-[0_16px_38px_rgba(15,22,49,0.16)]">
              <Image
                src="/seamlessva-emblem.svg"
                alt="SeamlessVA Philippines emblem"
                width={44}
                height={44}
                className="h-11 w-11"
                priority
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.98rem] font-extrabold tracking-[-0.02em] text-[var(--color-brand-purple)]">
                SeamlessVA <span className="text-[var(--color-brand-orange)]">Philippines</span>
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <details ref={servicesMenuRef} className="nav-services relative">
              <summary className="nav-services-trigger">
                <span>Services</span>
                <span className="nav-services-caret" aria-hidden="true" />
              </summary>
              <div className="nav-services-panel">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="nav-services-label">Support Lanes</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-slate)]">
                      Choose the lane that matches the current bottleneck.
                    </p>
                  </div>
                  <Link href="/services" className="nav-services-viewall" onClick={closeMenus}>
                    View all
                  </Link>
                </div>
                <div className="nav-services-grid">
                  {serviceNavLinks.map((service) => (
                    <Link key={service.href} href={service.href} className="nav-service-card" onClick={closeMenus}>
                      <span className="nav-service-eyebrow">{service.eyebrow}</span>
                      <span className="nav-service-title">{service.label}</span>
                      <span className="nav-service-copy">{service.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </details>
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link-pill" onClick={closeMenus}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              <a href={`tel:${company.phone}`} className="call-pill">
                {company.phone}
              </a>
              <Link href="/contact#intake-form" className="header-cta" onClick={closeMenus}>
                Start A Project
              </Link>
            </div>

            <details ref={mobileMenuRef} className="menu-shell relative lg:hidden">
              <summary className="menu-summary" aria-label="Open navigation menu">
                <span className="menu-burger" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
              </summary>
              <div className="mobile-menu-backdrop" aria-hidden="true" onClick={closeMenus} />
              <div className="mobile-menu-panel p-3">
                <nav className="flex flex-col gap-1">
                  <p className="mobile-menu-label">Navigation</p>
                  <div className="mobile-menu-section">
                    <p className="mobile-menu-label">Services</p>
                    <div className="mt-2 space-y-2">
                      {serviceNavLinks.map((service) => (
                        <Link key={service.href} href={service.href} className="mobile-service-link" onClick={closeMenus}>
                          <span className="mobile-service-eyebrow">{service.eyebrow}</span>
                          <span className="mobile-service-title">{service.label}</span>
                        </Link>
                      ))}
                      <Link href="/services" className="mobile-menu-link" onClick={closeMenus}>
                        All Services
                      </Link>
                    </div>
                  </div>
                  {menuLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="mobile-menu-link" onClick={closeMenus}>
                      {link.label}
                    </Link>
                  ))}
                  <a href={`tel:${company.phone}`} className="mobile-menu-link mt-2">
                    Call {company.phone}
                  </a>
                  <Link href="/contact#intake-form" className="header-cta justify-center text-center" onClick={closeMenus}>
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
      <div className="section-shell rounded-[2rem] bg-[linear-gradient(135deg,#0f1631,#635bff_58%,#ff8a5b)] px-6 py-8 text-white shadow-[0_18px_60px_rgba(15,22,49,0.24)] md:px-9 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/15">
                <Image src="/seamlessva-emblem.svg" alt="SeamlessVA Philippines emblem" width={48} height={48} className="h-12 w-12" />
              </span>
              <span className="template-badge !bg-white/15 !text-white">SeamlessVA Philippines</span>
            </div>
            <h2 className="section-subtitle max-w-2xl text-white">
              Clean systems. Calmer operations. Better follow-through.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.86)] md:text-base">
              SeamlessVA Philippines helps founder-led teams offload recurring admin, bookkeeping,
              and execution work that keeps dragging leadership back into the weeds.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact#intake-form" className="btn-secondary justify-center bg-white text-[var(--color-brand-purple)] sm:justify-start">
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
                {menuLinks.map((link) => (
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
