import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { createPageMetadata } from "@/lib/metadata";
import { company, services, processSteps, type Service } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore SeamlessVA Philippines services across virtual assistance, bookkeeping support, and automation-led marketing operations.",
  path: "/services",
});

const SERVICE_ICONS: Record<Service["slug"], string> = {
  "virtual-assistant": "📥",
  "bookkeeping-accounting": "🧾",
  "automation-digital-marketing": "📈",
};

const FALLBACK_ICON = "⚙️";

const PROOF_CARDS = {
  lanes: { value: "3 Support Lanes", label: "Virtual assistant, bookkeeping, and growth execution" },
  laneItems: ["Inbox and admin", "Bookkeeping cleanup", "Automation and marketing"],
  speed: [
    { day: "Step 1:", action: "Map the bottlenecks and recurring drag" },
    { day: "Step 2:", action: "Choose the right support lane" },
    { day: "Step 3:", action: "Load the intake form and start the handoff" },
  ],
  stack: { label: "No tool rebuild needed", value: "Pick the lane that removes the biggest drag" },
};

type ServiceCardProps = { service: Service };

const ServiceCard = React.memo(function ServiceCard({ service }: ServiceCardProps) {
  const icon = SERVICE_ICONS[service.slug] ?? FALLBACK_ICON;

  return (
    <article className="template-card relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[rgba(99,91,255,0.07)]" aria-hidden="true" />
      <div className="mb-4 text-[2.2rem]" aria-hidden="true">{icon}</div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">
        {service.shortLabel}
      </p>
      <h2 className="mb-3 font-[var(--font-display)] text-[1.6rem] font-[800] text-[var(--color-ink)]">
        {service.title}
      </h2>
      <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">
        {service.summary}
      </p>
      <ul className="mb-5 space-y-3 text-sm leading-6 text-[var(--color-slate)]">
        {service.deliverables.map((deliverable) => (
          <li key={deliverable} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand-orange)]" aria-hidden="true" />
            {deliverable}
          </li>
        ))}
      </ul>
      <div className="mb-6 flex flex-wrap gap-2">
        {service.outcomes.map((outcome) => (
          <span key={outcome} className="rounded-full bg-[rgba(99,91,255,0.08)] px-3 py-1.5 text-xs text-[var(--color-brand-purple)]">
            {outcome}
          </span>
        ))}
      </div>
      <Link href={`/services/${service.slug}`} className="template-btn-soft !px-5 !py-3">
        <span>Read More</span>
        <span className="template-btn-icon" aria-hidden="true">↗</span>
      </Link>
    </article>
  );
});

type ProcessStepCardProps = { step: typeof processSteps[number]; index: number };

const ProcessStepCard = React.memo(function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <div className="template-card relative">
      <div
        className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#635bff,#ff8a5b)] text-lg font-bold text-white shadow-lg"
        aria-label={`Step ${index + 1}`}
      >
        {index + 1}
      </div>
      <span className="mb-3 mt-2 inline-block rounded-full bg-[rgba(99,91,255,0.1)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-purple)]">
        {step.badge}
      </span>
      <h3 className="mb-3 font-[var(--font-display)] text-[1.25rem] font-[800] text-[var(--color-ink)]">
        {step.title}
      </h3>
      <p className="text-sm leading-6 text-[var(--color-slate)]">{step.body}</p>
    </div>
  );
});

export default function ServicesPage() {
  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge fade-rise">Service Catalogue</span>
              <h1 className="mt-5 section-title max-w-[780px] fade-rise" style={{ animationDelay: "0.1s" }}>
                Too many bottlenecks and no clear delegation plan?
                Choose the support lane that removes the biggest drag.
              </h1>
              <p className="mt-5 max-w-[600px] text-[1.05rem] leading-8 text-[var(--color-slate)] fade-rise" style={{ animationDelay: "0.2s" }}>
                For founders, agencies, healthcare practices, and lean teams that need reliable support across operations, bookkeeping, and growth execution without hiring overhead.
              </p>
              <div className="check-list mt-7">
                <div className="check-item">Unclear delegation slows the team</div>
                <div className="check-item">Admin work keeps piling up</div>
                <div className="check-item">Tasks slip when ownership is weak</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 fade-rise" style={{ animationDelay: "0.3s" }}>
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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">{PROOF_CARDS.lanes.value}</p>
                  <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">{PROOF_CARDS.stack.value}</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{PROOF_CARDS.lanes.label} without a messy scope jump.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROOF_CARDS.laneItems.map((item) => (
                      <span key={item} className="lane-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Find your best-fit lane</p>
                  <div className="space-y-3 text-sm leading-6 text-[var(--color-slate)]">
                    {PROOF_CARDS.speed.map((item) => (
                      <div key={item.day}>
                        <strong className="text-[var(--color-ink)]">{item.day}</strong> {item.action}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="section-shell !w-full">
            <span className="template-badge mb-6">Our Process</span>
            <h2 className="section-subtitle mb-8 max-w-[680px]">
              From first call to steady execution in weeks, not months.
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div
          className="rounded-[2rem] bg-[linear-gradient(135deg,#0f1631,#635bff_58%,#ff8a5b)] px-8 py-12 text-center text-white shadow-[0_18px_60px_rgba(99,91,255,0.22)] md:px-12"
          role="complementary"
          aria-label="Call to action"
        >
          <h2 className="section-subtitle mb-4 text-white">Ready to hand off the drag?</h2>
          <p className="mx-auto mb-8 max-w-[560px] text-base leading-7 text-[rgba(255,255,255,0.9)]">
            Load the intake form so we can see what is breaking, where work is stuck, and which lane should start first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#intake-form" className="template-btn-soft !bg-white !px-5 !py-3 !font-bold">
              <span>Load Intake Form</span>
              <span className="template-btn-icon" aria-hidden="true">↗</span>
            </Link>
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/20">
              Call {company.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
