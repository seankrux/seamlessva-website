import type { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { company, processSteps } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Seamless VA to discuss operational support, bookkeeping, growth execution, and onboarding needs.",
  path: "/contact",
});

export default function ContactPage() {
  const fitSignals = [
    "Founder time keeps disappearing into coordination work",
    "Back-office cleanup is happening too late",
    "Leads or client follow-up need a steadier owner",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div>
              <span className="template-badge">Contact</span>
              <h1 className="mt-5 section-title max-w-[780px]">
                Start with a practical conversation about what needs to move off your plate first.
              </h1>
              <p className="mt-5 max-w-[560px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
                We use the first call to clarify scope, surface the bottlenecks,
                and decide whether you need support, systems cleanup, or both.
              </p>
              <div className="check-list mt-8">
                {fitSignals.map((item) => (
                  <div key={item} className="check-item">{item}</div>
                ))}
              </div>
            </div>
            <div className="template-card overflow-hidden p-0">
              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[320px]">
                  <Image
                    src="/images/cro/asian-va-portrait.jpg"
                    alt="Professional virtual assistant portrait"
                    fill
                    sizes="(max-width: 900px) 100vw, 28vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mb-4 font-[var(--font-display)] text-[1.8rem] font-[800] text-[var(--color-ink)]">Reach Seamless VA</h2>
                  <div className="space-y-4 text-sm text-[var(--color-slate)]">
                    <a href={`mailto:${company.email}`} className="link-accent">{company.email}</a>
                    <a href={`tel:${company.phone}`} className="link-accent">{company.phone}</a>
                    <p>{company.location}</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a href={`mailto:${company.email}?subject=Seamless%20VA%20consultation`} className="template-btn w-full justify-center">Email the team</a>
                    <a href={`tel:${company.phone}`} className="template-btn-soft w-full justify-center">Call {company.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step.title} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">Step {index + 1}</p>
              <h3 className="mb-3 font-[var(--font-display)] text-[1.4rem] font-[800] text-[var(--color-ink)]">{step.title}</h3>
              <p className="text-sm leading-7 text-[var(--color-slate)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
