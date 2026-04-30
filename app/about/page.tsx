import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { company, operatingPrinciples } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how SeamlessVA Philippines approaches client support, process design, and operational execution for founders and lean teams.",
  path: "/about",
});

export default function AboutPage() {
  const trustSignals = [
    "Founder-friendly support model",
    "Clear communication and ownership",
    "Documented systems that keep work moving",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">About SeamlessVA Philippines</span>
              <h1 className="mt-5 section-title max-w-[820px]">
                Need a support partner who understands lean teams? Meet the people and process behind SeamlessVA Philippines.
              </h1>
              <p className="mt-5 max-w-[620px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
                Learn how SeamlessVA Philippines helps founders and growing teams through clear communication, structured handoffs, and a reliable support process built to reduce daily workload drag.
              </p>
              <div className="check-list mt-8">
                {trustSignals.map((item) => (
                  <div key={item} className="check-item">{item}</div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact#intake-form" className="template-btn">
                  <span>Start A Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="/contact#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="hero-visual-shell">
              <div className="bezel-shell">
                <div className="hero-proof-card template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Structured Process</p>
                  <h2 className="font-[var(--font-display)] text-[1.45rem] font-[800] text-[var(--color-ink)]">Clear handoffs and documented workflows.</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                    Support is scoped around ownership, communication rules, and work rhythms your team can actually maintain.
                  </p>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-orange)]">Reliable Support</p>
                  <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">People plus systems.</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                    Skilled VA support backed by systems built to help your team move faster with fewer loose ends.
                  </p>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionHeading
          eyebrow="How We Work"
          title="Support designed for businesses that need a steadier operating rhythm."
          body="SeamlessVA Philippines supports founder-led teams that need steadier execution, cleaner communication, and a more reliable way to hand work over."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              What we believe
            </h2>
            <div className="content-copy mt-4 space-y-4 text-sm">
              <p>
                Businesses rarely need more noise. They need better operating coverage, cleaner communication, and support that can think in workflows instead of disconnected tasks.
              </p>
              <p>
                SeamlessVA Philippines is built around that idea. The goal is not just to check items off a list, but to make the business easier to run as demands increase.
              </p>
            </div>
          </article>
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              What clients should expect
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              <li>Clear onboarding and communication expectations</li>
              <li>Support scoped around real business priorities</li>
              <li>Process improvement where it will reduce friction fast</li>
              <li>Visibility into what is owned, pending, and next</li>
            </ul>
          </article>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {operatingPrinciples.map((principle) => (
            <article key={principle.title} className="section-card rounded-[1.8rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
                How we work
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                {principle.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                {principle.body}
              </p>
            </article>
          ))}
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
            Reach us
          </p>
          <div className="mt-4 grid gap-3 text-sm text-[var(--color-slate)] md:grid-cols-3">
            <a href={`mailto:${company.email}`} className="link-accent">
              {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="link-accent">
              {company.phone}
            </a>
            <p>{company.location}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
