import type { Metadata } from "next";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { company, processSteps } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Book a consultation with Seamless VA to discuss operational support, bookkeeping, growth execution, and onboarding needs.",
  path: "/contact",
});

export default function ContactPage() {
  const consultationHighlights = [
    "Free 30-minute consultation",
    "Clear first-step recommendation",
    "Admin, bookkeeping, and growth support alignment",
  ];

  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell space-y-8">
        <SectionHeading
          eyebrow="Contact"
          title="Start with a practical conversation about what needs to move off your plate first."
          body="The first call is built to clarify scope, surface the real bottlenecks, and decide whether you need support, systems cleanup, or both."
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              Reach Seamless VA
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-sm text-[var(--color-slate)]">
              <a href={`mailto:${company.email}`} className="link-accent">
                {company.email}
              </a>
              <a href={`tel:${company.phone}`} className="link-accent">
                {company.phone}
              </a>
              <p>{company.location}</p>
            </div>
            <div className="mt-7 space-y-3">
              <a
                href={`mailto:${company.email}?subject=Seamless%20VA%20consultation`}
                className="block rounded-full bg-[var(--color-teal)] px-6 py-3 text-center font-semibold text-white"
              >
                Email the team
              </a>
              <a
                href={`tel:${company.phone}`}
                className="block rounded-full border border-[rgba(31,44,45,0.12)] bg-white px-6 py-3 text-center font-semibold text-[var(--color-ink)]"
              >
                Call {company.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {consultationHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(31,44,45,0.1)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-slate)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="section-card rounded-[1.8rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
              What the first call covers
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-slate)]">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <span>Where your team is losing time to operational spillover</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <span>Which work needs immediate support versus process cleanup first</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <span>The tools, communication expectations, and reporting rhythm that will matter most</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <span>What the first 30 days should accomplish if we move forward</span>
              </li>
            </ul>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.2rem] border border-[rgba(31,44,45,0.08)] bg-white p-4"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-slate)]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
