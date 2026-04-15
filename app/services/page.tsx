import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Seamless VA services across virtual assistance, bookkeeping support, and automation-led marketing operations.",
  path: "/services",
});

export default function ServicesPage() {
  const operatingPromises = [
    "Clear ownership and communication expectations",
    "Support embedded into your existing tool stack",
    "A model built to reduce founder interruption fast",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#0c1229,#121c40_56%,#18244f)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(10,15,35,0.28)] md:px-9 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.76)]">
                Service catalogue
              </span>
              <h1 className="mt-5 section-title text-white">
                Support lanes designed around the work founders keep carrying for too long.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(234,238,255,0.76)] md:text-lg md:leading-9">
                Use this page to compare where Seamless VA creates the fastest lift: daily
                operations, bookkeeping upkeep, or growth execution support.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-secondary justify-center bg-white text-[var(--color-teal-dark)] sm:justify-start">
                  Book a fit call
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary justify-center border-white/16 bg-white/8 text-white sm:justify-start">
                  Call {company.phone}
                </a>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.62)]">
                What every engagement is built to deliver
              </p>
              <div className="mt-5 grid gap-3">
                {operatingPromises.map((promise) => (
                  <div
                    key={promise}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-[rgba(240,243,255,0.84)]"
                  >
                    {promise}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1.06fr_0.97fr_0.97fr]">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`rounded-[2rem] p-6 ${
                index === 0
                  ? "bg-[linear-gradient(155deg,#0f1631,#17244f)] text-white shadow-[0_32px_80px_rgba(10,15,35,0.26)]"
                  : "section-card"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                      index === 0 ? "text-[rgba(255,255,255,0.6)]" : "text-[var(--color-coral)]"
                    }`}
                  >
                    {service.shortLabel}
                  </p>
                  <h2
                    className={`mt-3 section-subtitle text-[2.15rem] ${
                      index === 0 ? "text-white" : "text-[var(--color-ink)]"
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>
                <span
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] ${
                    index === 0
                      ? "border border-white/10 bg-white/8 text-[rgba(255,255,255,0.76)]"
                      : "bg-[rgba(99,91,255,0.08)] text-[var(--color-teal)]"
                  }`}
                >
                  Core lane
                </span>
              </div>

              <p
                className={`mt-5 text-sm leading-7 ${
                  index === 0 ? "text-[rgba(236,240,255,0.78)]" : "text-[var(--color-slate)]"
                }`}
              >
                {service.summary}
              </p>

              <div className="mt-6 accent-divider" />

              <div className="mt-6 grid gap-6">
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      index === 0 ? "text-[rgba(255,255,255,0.52)]" : "text-[var(--color-teal-dark)]"
                    }`}
                  >
                    Deliverables
                  </p>
                  <ul
                    className={`mt-3 space-y-3 text-sm leading-6 ${
                      index === 0 ? "text-[rgba(240,243,255,0.84)]" : "text-[var(--color-slate)]"
                    }`}
                  >
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3">
                        <span
                          className={`mt-2 h-2.5 w-2.5 rounded-full ${
                            index === 0 ? "bg-white" : "bg-[var(--color-gold)]"
                          }`}
                        />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                      index === 0 ? "text-[rgba(255,255,255,0.52)]" : "text-[var(--color-teal-dark)]"
                    }`}
                  >
                    Intended lift
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.outcomes.map((outcome) => (
                      <span
                        key={outcome}
                        className={`rounded-full px-3 py-2 text-xs leading-5 ${
                          index === 0
                            ? "border border-white/10 bg-white/6 text-[rgba(240,243,255,0.8)]"
                            : "border border-[rgba(17,24,49,0.08)] bg-white text-[var(--color-slate)]"
                        }`}
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className={`mt-7 inline-flex items-center gap-2 font-semibold ${
                  index === 0 ? "text-white" : "text-[var(--color-teal)]"
                }`}
              >
                Read the full service page <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow="How to choose"
              title="Pick the lane where the business is leaking the most leadership attention first."
              body="Most teams do not need everything at once. They need the highest-friction workload mapped clearly, handed off safely, and stabilized before more complexity stacks on top."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="section-card rounded-[1.6rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                Start with ops
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                Best when inboxes, scheduling, follow-up, and coordination are constantly stealing attention from sales or delivery.
              </p>
            </div>
            <div className="section-card rounded-[1.6rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                Start with finance hygiene
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                Best when records, reconciliations, and reporting prep keep turning into reactive cleanup at month-end.
              </p>
            </div>
            <div className="section-card rounded-[1.6rem] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                Start with growth execution
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                Best when leads, campaign tasks, and cross-functional handoffs need steadier follow-through without adding headcount first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
