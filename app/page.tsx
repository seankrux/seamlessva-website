import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import {
  caseStudies,
  company,
  faqs,
  goodFitSignals,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Seamless VA helps founders and lean teams offload admin, bookkeeping, and growth operations with a conversion-focused support model.",
});

export default function Home() {
  const proofStats = [
    {
      value: `${services.length}`,
      label: "service lanes covering operations, bookkeeping, and growth execution",
    },
    {
      value: `${processSteps.length}`,
      label: "step onboarding flow designed to make delegation feel controlled",
    },
    {
      value: "CA + US",
      label: "support footprint for North American founder-led teams",
    },
    {
      value: `${company.toolStack.length}+`,
      label: "common tools already inside the operating stack",
    },
  ];

  const heroSignals = [
    "Free 30-minute fit call",
    "Mississauga-based support partner",
    "Built for founder-led service teams",
  ];

  const operatorBoard = [
    {
      label: "Ops triage",
      title: "Inbox, calendar, and recurring admin stop boomeranging back to leadership.",
    },
    {
      label: "Finance hygiene",
      title: "Bookkeeping upkeep and reporting prep move into a steadier monthly rhythm.",
    },
    {
      label: "Revenue follow-through",
      title: "Campaign support, lead handoffs, and coordination stay visible instead of drifting.",
    },
  ];

  const proofNotes = [
    "Clear next-owner visibility",
    "Process-first support model",
    "Built around your existing stack",
  ];

  const featuredStudy = caseStudies[0];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mississauga",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },
    sameAs: company.socials.map((social) => social.href),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "268 Hillside Dr",
      addressLocality: "Mississauga",
      addressRegion: "Ontario",
      addressCountry: "Canada",
    },
    areaServed: ["Canada", "United States"],
    serviceType: services.map((service) => service.title),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            professionalServiceSchema,
            faqSchema,
          ]),
        }}
      />

      <section className="home-hero">
        <div className="section-shell">
          <div className="hero-shell px-6 py-8 md:px-10 md:py-11">
            <div className="hero-grid grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className="fade-rise flex flex-col gap-7">
                <span className="eyebrow border-white/10 bg-white/8 text-[rgba(255,255,255,0.78)]">
                  Operator-led support for growth-stage teams
                </span>
                <div className="space-y-6">
                  <h1 className="hero-title max-w-5xl">
                    Premium operational support that makes the business feel lighter,
                    tighter, and easier to scale.
                  </h1>
                  <p className="hero-copy max-w-2xl text-lg leading-8 md:text-xl md:leading-9">
                    Seamless VA combines executive support, bookkeeping discipline, and
                    growth-side execution so founders can stop living in follow-up,
                    cleanup, and coordination drag.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact" className="btn-primary justify-center sm:justify-start">
                    Book a fit call
                  </Link>
                  <Link href="/services" className="btn-secondary justify-center text-white/90 sm:justify-start sm:bg-white/10 sm:border-white/12 sm:text-white">
                    Explore services
                  </Link>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  {heroSignals.map((signal) => (
                    <span key={signal} className="proof-pill">
                      {signal}
                    </span>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {proofStats.map((stat) => (
                    <div key={stat.label} className="metric-stat">
                      <p className="metric-value text-white">{stat.value}</p>
                      <p className="metric-label mt-3 text-sm leading-6">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-rise" style={{ animationDelay: "90ms" }}>
                <div className="hero-board">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.64)]">
                        Seamless VA operator system
                      </p>
                      <h2 className="hero-board-title mt-2 text-[1.85rem] font-semibold leading-tight">
                        Less juggling. More controlled execution.
                      </h2>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.72)]">
                      Founder-safe handoff
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4">
                    {operatorBoard.map((item, index) => (
                      <article
                        key={item.title}
                        className="hero-list-item"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.52)]">
                          {item.label}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(240,243,255,0.84)] md:text-base">
                          {item.title}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="hero-data-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.52)]">
                        Coverage model
                      </p>
                      <p className="mt-3 text-base font-semibold text-white">
                        Admin, bookkeeping, and growth support inside one operating lane.
                      </p>
                      <p className="hero-board-copy mt-3 text-sm leading-7">
                        The work stays connected across inboxes, reporting prep, CRM updates,
                        campaign support, and recurring follow-through.
                      </p>
                    </div>
                    <div className="hero-data-card">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.52)]">
                        Buyer confidence
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        {proofNotes.map((note) => (
                          <span key={note} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[rgba(240,243,255,0.82)]">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell">
          <div className="trust-band grid gap-5 rounded-[1.8rem] bg-[linear-gradient(135deg,#0f1631,#141d40)] px-5 py-5 text-white md:grid-cols-[0.9fr_1.1fr] md:px-7">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.62)]">
                Built to work inside the tools your team already uses
              </p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-[2rem]">
                The support model fits into real operating environments, not theory.
              </h2>
            </div>
            <div className="flex flex-wrap content-start gap-3 text-sm text-[rgba(255,255,255,0.82)]">
              {company.toolStack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow="Where support pays off fastest"
              title="The strongest fit is a team with real demand and too much recurring work landing back on senior people."
              body="This is built for founder-led businesses that want better follow-through, calmer operations, and a support layer that feels measured instead of messy."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {goodFitSignals.map((signal, index) => (
              <article
                key={signal.title}
                className="section-card fade-rise rounded-[1.8rem] p-6"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                  Good fit signal
                </p>
                <h2 className="mt-3 text-[1.55rem] font-semibold leading-tight text-[var(--color-ink)]">
                  {signal.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                  {signal.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell space-y-8">
          <SectionHeading
            eyebrow="Core services"
            title="A premium support layer designed around the work that actually steals your week."
            body="Each lane is scoped to reduce interruption, tighten handoffs, and give leadership back the time required for decisions, sales, and delivery."
          />

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className={`rounded-[2rem] p-6 ${index === 0 ? "bg-[linear-gradient(160deg,#0e1530,#17244f)] text-white shadow-[0_32px_80px_rgba(10,15,35,0.28)]" : "section-card"}`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                    index === 0 ? "text-[rgba(255,255,255,0.62)]" : "text-[var(--color-coral)]"
                  }`}
                >
                  {service.shortLabel}
                </p>
                <h3
                  className={`mt-3 section-subtitle text-[2.25rem] ${
                    index === 0 ? "text-white" : "text-[var(--color-ink)]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0 ? "text-[rgba(235,239,255,0.76)]" : "text-[var(--color-slate)]"
                  }`}
                >
                  {service.summary}
                </p>
                <ul
                  className={`mt-5 space-y-3 text-sm leading-6 ${
                    index === 0 ? "text-[rgba(240,243,255,0.84)]" : "text-[var(--color-slate)]"
                  }`}
                >
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${
                          index === 0 ? "bg-white" : "bg-[var(--color-gold)]"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={`mt-7 inline-flex items-center gap-2 font-semibold ${
                    index === 0 ? "text-white" : "text-[var(--color-teal)]"
                  }`}
                >
                  View service details <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#10193b,#121d43)] px-6 py-7 text-white shadow-[0_32px_80px_rgba(10,15,35,0.24)] md:px-8 md:py-8">
            <SectionHeading
              eyebrow="How handoff stays controlled"
              title="A three-step operating model that makes delegation feel safe, not vague."
              body="The goal is not just to absorb tasks. It is to create ownership, communication rules, and a steadier rhythm before the work scales up again."
            />
            <div className="accent-divider mt-8" />
            <div className="mt-6 space-y-4 text-sm leading-7 text-[rgba(234,238,255,0.72)]">
              <p>
                Buyers of operational support care about trust, visibility, and repeatability.
                That is why the process is framed as discovery, workflow alignment, and then
                execution — in that order.
              </p>
              <p>
                Every step is designed to reduce the fear that support will create more cleanup
                or more management overhead.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="section-card rounded-[1.8rem] p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-[1.8rem] font-semibold leading-tight text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[rgba(99,91,255,0.08)] px-4 py-2 text-sm font-semibold text-[var(--color-teal)]">
                    {step.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)] md:text-base md:leading-8">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] bg-[linear-gradient(135deg,#0a0f23,#121b3c)] px-6 py-7 text-white shadow-[0_32px_80px_rgba(10,15,35,0.28)] md:px-8 md:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.62)]">
              Featured proof
            </p>
            <h2 className="mt-4 section-subtitle text-white">
              {featuredStudy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(234,238,255,0.74)] md:text-base md:leading-8">
              {featuredStudy.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[rgba(255,255,255,0.82)]">
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                {featuredStudy.industry}
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                Process cleanup + support coverage
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                Founder-capacity recovery focus
              </span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {featuredStudy.outcomes.map((outcome) => (
                <div key={outcome} className="operator-lane">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.52)]">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(240,243,255,0.86)]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
            <Link href={`/case-studies/${featuredStudy.slug}`} className="mt-8 inline-flex items-center gap-2 font-semibold text-white">
              Read the case study <span aria-hidden>→</span>
            </Link>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {caseStudies.slice(1).map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="rounded-[1.3rem] border border-white/10 bg-white/6 px-4 py-4 text-sm text-[rgba(240,243,255,0.84)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.56)]">
                    {study.industry}
                  </p>
                  <p className="mt-2 font-semibold text-white">{study.title}</p>
                </Link>
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.name}
                className={`rounded-[1.7rem] p-6 ${index === 0 ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.76))] shadow-[0_26px_70px_rgba(10,15,35,0.1)]" : "section-card"}`}
              >
                <p className="text-base leading-8 text-[var(--color-slate)] md:text-[1.05rem]">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-5 flex flex-col gap-1">
                  <span className="font-semibold text-[var(--color-ink)]">{testimonial.name}</span>
                  <span className="text-sm text-[var(--color-slate)]">{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
            <Link href="/reviews" className="inline-flex items-center gap-2 px-1 font-semibold text-[var(--color-teal)]">
              View the full proof page <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section-gap">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow="Frequently asked"
              title="The questions buyers ask before they hand the work over."
              body="Answering scope, visibility, and onboarding questions early removes friction from the first conversation and makes the service easier to evaluate seriously."
            />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="section-card rounded-[1.5rem] p-5 open:border-[rgba(99,91,255,0.22)]"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-ink)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)] md:text-base md:leading-8">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="rounded-[2.4rem] bg-[linear-gradient(135deg,#635bff_0%,#3a4dbe_52%,#121d43_100%)] px-7 py-9 text-white shadow-[0_35px_90px_rgba(12,18,40,0.26)] md:px-10 md:py-12">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.7)]">
                  Ready to get started
                </p>
                <h2 className="mt-4 section-subtitle text-white">
                  Bring the overflow, the half-built process, and the tasks nobody wants
                  to keep owning. We’ll help turn it into a cleaner operating rhythm.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(235,239,255,0.78)] md:text-base md:leading-8">
                  Start with a free 30-minute consultation, map what is dragging the team
                  backward, and leave with a clear recommendation for support, systems
                  cleanup, or both.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href="/contact" className="btn-secondary justify-center bg-white text-[var(--color-teal-dark)] sm:justify-start">
                  Contact Seamless VA
                </Link>
                <a href={`tel:${company.phone}`} className="btn-secondary justify-center border-white/16 bg-white/8 text-white sm:justify-start">
                  Call {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
