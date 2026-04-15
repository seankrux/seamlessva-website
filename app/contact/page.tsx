import type { Metadata } from "next";
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

  const fitSignals = [
    "Founder time keeps disappearing into coordination work",
    "Back-office cleanup is happening too late",
    "Leads or client follow-up need a steadier owner",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#0d1328,#131d42_58%,#1a2856)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(10,15,35,0.28)] md:px-9 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.76)]">
                Contact
              </span>
              <h1 className="mt-5 section-title text-white">
                Start with a practical conversation about what needs to move off your plate first.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(234,238,255,0.76)] md:text-lg md:leading-9">
                The first call is built to clarify scope, surface the real bottlenecks,
                and decide whether you need support, systems cleanup, or both.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.6)]">
                Best fit indicators
              </p>
              <div className="mt-4 grid gap-3">
                {fitSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-[rgba(240,243,255,0.84)]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-[2rem] bg-[linear-gradient(165deg,#fffefb,#f7f4ee)] p-6 shadow-[0_24px_70px_rgba(10,15,35,0.08)]">
            <h2 className="text-[2rem] font-semibold leading-tight text-[var(--color-ink)]">
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
                className="btn-primary w-full justify-center text-center"
              >
                Email the team
              </a>
              <a
                href={`tel:${company.phone}`}
                className="btn-secondary w-full justify-center text-center"
              >
                Call {company.phone}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {consultationHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[rgba(17,24,49,0.08)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-slate)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[1.5rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal-dark)]">
                What happens after you reach out
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                We use the first conversation to understand where the drag is, what a safe
                handoff would require, and whether the right first move is support coverage,
                systems cleanup, or a staged combination of both.
              </p>
            </div>
          </article>

          <article className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
              What the first call covers
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm leading-7 text-[var(--color-slate)]">
                  Where your team is losing time to operational spillover, what work needs
                  immediate support, and what expectations would matter most in the first 30 days.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm leading-7 text-[var(--color-slate)]">
                  Which tools, communication rules, and visibility checkpoints will make the
                  handoff feel clean rather than risky.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 text-[1.35rem] font-semibold leading-tight text-[var(--color-ink)]">
                        {step.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-[rgba(99,91,255,0.08)] px-4 py-2 text-sm font-semibold text-[var(--color-teal)]">
                      {step.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
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
