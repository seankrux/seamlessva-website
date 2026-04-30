import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntakeForm } from "@/components/intake-form";
import { createPageMetadata } from "@/lib/metadata";
import { company, processSteps } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Load the SeamlessVA Philippines intake form to discuss admin support, bookkeeping, growth execution, and onboarding needs.",
  path: "/contact",
});

export default function ContactPage() {
  const fitSignals = [
    "Free 30-minute consultation",
    "Fast and simple intake",
    "Clear next-step recommendation",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div>
              <span className="template-badge">Contact</span>
              <h1 className="mt-5 section-title max-w-[820px]">
                Ready to stop carrying the work alone? Tell us what is breaking and we will map the first fix.
              </h1>
              <p className="mt-5 max-w-[620px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
                For founders and lean teams ready to reduce admin overload, clean up support gaps, and start with a clear next step through a simple consultation process.
              </p>
              <div className="check-list mt-8">
                {fitSignals.map((item) => (
                  <div key={item} className="check-item">{item}</div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#intake-form" className="template-btn">
                  <span>Start A Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <div className="template-card overflow-hidden p-0">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src="/images/cro/asian-va-portrait-2026.jpg"
                    alt="Professional virtual assistant portrait"
                    fill
                    sizes="(max-width: 900px) 100vw, 28vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-4 font-[var(--font-display)] text-[1.8rem] font-[800] text-[var(--color-ink)]">Book A Consultation</h2>
                  <div className="space-y-4 text-sm text-[var(--color-slate)]">
                    <p>Let us talk about your challenges and map your first fix together.</p>
                    <a href={`mailto:${company.email}`} className="link-accent block">{company.email}</a>
                    <a href={`tel:${company.phone}`} className="link-accent block">{company.phone}</a>
                    <p>{company.location}</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <Link href="#intake-form" className="template-btn w-full justify-center">Submit Intake</Link>
                    <a href={`tel:${company.phone}`} className="template-btn-soft w-full justify-center">Call {company.phone}</a>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    </section>
  );
}
