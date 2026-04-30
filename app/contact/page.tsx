import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { IntakeForm } from "@/components/intake-form";
import { createPageMetadata } from "@/lib/metadata";
import { company, processSteps } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Seamless VA",
  description:
    "Load the Seamless VA intake form to discuss admin support, bookkeeping, growth execution, and onboarding needs.",
  path: "/contact",
});

export default function ContactPage() {
  const fitSignals = ["Free consultation", "Fast intake", "Clear next step"];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div>
              <span className="template-badge">Contact</span>
              <h1 className="mt-5 section-title max-w-[760px]">
                <span className="block text-[var(--color-ink)]">Contact Seamless VA</span>
                <span className="block text-[var(--color-brand-green)]">Tell Us What Needs Fixing</span>
              </h1>
              <p className="hero-copy">
                Book a consultation or load the intake form. We will map the first move for your team.
              </p>
              <div className="check-list mt-8">
                {fitSignals.map((item) => <div key={item} className="check-item">{item}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#intake-form" className="template-btn">
                  <span>Start Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <HeroScene variant="contact" />
          </div>
        </div>

        <IntakeForm />

        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Step {index + 1}</p>
              <h3 className="mb-3 font-[var(--font-display)] text-[1.4rem] font-[800] text-[var(--color-ink)]">{step.title}</h3>
              <p className="text-sm leading-7 text-[var(--color-slate)]">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="template-card">
          <h2 className="mb-4 font-[var(--font-display)] text-[1.6rem] font-[800] text-[var(--color-ink)]">Direct Contact</h2>
          <div className="grid gap-3 text-sm text-[var(--color-slate)] md:grid-cols-3">
            <a href={`mailto:${company.email}`} className="link-accent">{company.email}</a>
            <a href={`tel:${company.phone}`} className="link-accent">{company.phone}</a>
            <p>{company.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
