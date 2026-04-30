import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { company, operatingPrinciples } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About Seamless VA",
  description:
    "Learn how Seamless VA approaches client support, process design, and operational execution for founders and lean teams.",
  path: "/about",
});

export default function AboutPage() {
  const trustSignals = ["Founder-friendly support", "Clear handoffs", "Reliable day-to-day execution"];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">About</span>
              <h1 className="mt-5 section-title max-w-[760px]">
                <span className="block text-[var(--color-ink)]">About Seamless VA</span>
                <span className="block text-[var(--color-brand-green)]">Meet Your Support Team</span>
              </h1>
              <p className="hero-copy">
                See the people, process, and support style behind a smoother day-to-day operation.
              </p>
              <div className="check-list mt-8">
                {trustSignals.map((item) => <div key={item} className="check-item">{item}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact#intake-form" className="template-btn">
                  <span>Start Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="/contact#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <HeroScene variant="about" />
          </div>
        </div>

        <SectionHeading
          eyebrow="How We Work"
          title="Support Built Around Process"
          body="Seamless VA supports founder-led teams that need cleaner communication, steadier execution, and a better way to hand work over."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">What We Believe</h2>
            <div className="content-copy mt-4 space-y-4 text-sm">
              <p>Businesses need better operating coverage, cleaner communication, and support that can think in workflows instead of disconnected tasks.</p>
              <p>Seamless VA is built to make the business easier to run as demand increases.</p>
            </div>
          </article>
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">What To Expect</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              <li>Clear onboarding and communication expectations</li>
              <li>Support scoped around real business priorities</li>
              <li>Process improvement where it reduces friction fast</li>
              <li>Visibility into what is owned, pending, and next</li>
            </ul>
          </article>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {operatingPrinciples.map((principle) => (
            <article key={principle.title} className="section-card rounded-[1.8rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">How We Work</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">{principle.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">{principle.body}</p>
            </article>
          ))}
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">Reach Us</p>
          <div className="mt-4 grid gap-3 text-sm text-[var(--color-slate)] md:grid-cols-3">
            <a href={`mailto:${company.email}`} className="link-accent">{company.email}</a>
            <a href={`tel:${company.phone}`} className="link-accent">{company.phone}</a>
            <p>{company.location}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
