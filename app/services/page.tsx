import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { HeroScene } from "@/components/hero-scene";
import { createPageMetadata } from "@/lib/metadata";
import { company, services, processSteps, type Service } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "VA Services",
  description:
    "Explore Seamless VA services across virtual assistance, bookkeeping support, and automation-led marketing operations.",
  path: "/services",
});

const SERVICE_ICONS: Record<Service["slug"], string> = {
  "virtual-assistant": "📥",
  "bookkeeping-accounting": "🧾",
  "automation-digital-marketing": "📈",
};

const FALLBACK_ICON = "⚙️";

type ServiceCardProps = { service: Service };

const ServiceCard = React.memo(function ServiceCard({ service }: ServiceCardProps) {
  const icon = SERVICE_ICONS[service.slug] ?? FALLBACK_ICON;

  return (
    <article className="template-card relative overflow-hidden">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[rgba(36,242,178,0.08)]" aria-hidden="true" />
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
      <Link href={`/services/${service.slug}`} className="template-btn-soft !px-5 !py-3">
        <span>View Service</span>
        <span className="template-btn-icon" aria-hidden="true">↗</span>
      </Link>
    </article>
  );
});

type ProcessStepCardProps = { step: typeof processSteps[number]; index: number };

const ProcessStepCard = React.memo(function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <div className="template-card relative">
      <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00b884,#24f2b2)] text-lg font-bold text-white shadow-lg" aria-label={`Step ${index + 1}`}>
        {index + 1}
      </div>
      <span className="mb-3 mt-2 inline-block rounded-full bg-[rgba(36,242,178,0.12)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-purple)]">
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
              <span className="template-badge fade-rise">VA Services</span>
              <h1 className="mt-5 section-title max-w-[720px] fade-rise" style={{ animationDelay: "0.1s" }}>
                Find The Right Support Fast
              </h1>
              <p className="hero-copy fade-rise" style={{ animationDelay: "0.2s" }}>
                Choose the support lane that removes the biggest drag in admin, bookkeeping, or growth work.
              </p>
              <div className="check-list mt-7">
                <div className="check-item">Clear delegation</div>
                <div className="check-item">Less admin pile-up</div>
                <div className="check-item">Stronger task ownership</div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 fade-rise" style={{ animationDelay: "0.3s" }}>
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
            <HeroScene variant="services" />
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
              From intake to steady execution.
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#07162a,#00b884_58%,#24f2b2)] px-8 py-12 text-center text-white shadow-[0_18px_60px_rgba(0,184,132,0.22)] md:px-12" role="complementary" aria-label="Call to action">
          <h2 className="section-subtitle mb-4 text-white">Ready To Hand Off The Drag?</h2>
          <p className="mx-auto mb-8 max-w-[560px] text-base leading-7 text-[rgba(255,255,255,0.9)]">
            Load the intake form so we can see what is stuck and which lane should start first.
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
