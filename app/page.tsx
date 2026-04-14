import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import {
  caseStudies,
  company,
  faqs,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";

export default function Home() {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="pb-12 pt-10 md:pb-18 md:pt-20">
        <div className="section-shell grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="fade-rise flex flex-col gap-7">
            <span className="eyebrow">Operator-led support for growing teams</span>
            <div className="space-y-6">
              <h1 className="section-title max-w-4xl">
                Professional support that keeps your business moving when your
                calendar is already full.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--color-slate)] md:text-xl">
                Seamless VA combines executive support, bookkeeping discipline,
                and revenue-side execution so founders can stay focused on
                decisions, sales, and delivery instead of operational sprawl.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[var(--color-teal)] px-6 py-3 text-center font-semibold text-white shadow-[0_20px_50px_rgba(31,107,104,0.2)]"
              >
                Book a strategy call
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-[rgba(31,44,45,0.14)] bg-white px-6 py-3 text-center font-semibold text-[var(--color-ink)]"
              >
                Explore services
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Direct founder collaboration from kickoff to handoff",
                "Operational coverage across admin, finance, and marketing",
                "Clean onboarding process designed for fast delegation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[rgba(31,44,45,0.08)] bg-[rgba(255,253,248,0.84)] px-5 py-4 text-sm leading-6 text-[var(--color-slate)] shadow-[0_12px_30px_rgba(31,44,45,0.05)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="fade-rise section-card metric-panel rounded-[2rem] p-6 md:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  Why teams switch
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                  Less juggling. More forward motion.
                </h2>
              </div>
              <span className="rounded-full bg-[rgba(214,179,101,0.18)] px-4 py-2 text-sm font-semibold text-[var(--color-teal-dark)]">
                First call is free
              </span>
            </div>
            <div className="space-y-5">
              {company.positioningPoints.map((point) => (
                <div
                  key={point.title}
                  className="rounded-[1.4rem] border border-[rgba(31,44,45,0.08)] bg-white px-5 py-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                    {point.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-slate)]">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="section-shell section-card rounded-[2rem] px-6 py-8 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal-dark)]">
            Tools and workflows we support
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-[var(--color-slate)]">
            {company.toolStack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[rgba(31,44,45,0.1)] bg-white px-4 py-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Core services"
            title="A lean support model built around the work that actually steals your week."
            body="The live site had the right service categories but buried them under repeated copy. This version puts the offer structure, outcomes, and next action above the fold."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="section-card rounded-[1.8rem] p-6 fade-rise"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                  {service.shortLabel}
                </p>
                <h3 className="mt-3 section-subtitle text-[2rem]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--color-slate)]">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-teal)]"
                >
                  View service details <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="section-card rounded-[2rem] p-7">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-5 section-subtitle">
              A three-step onboarding flow that makes delegation feel controlled
              instead of risky.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
              The live site had the right sequence. This version makes each step
              concrete, expectation-setting, and easier to buy into.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="section-card rounded-[1.8rem] p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-[rgba(31,107,104,0.1)] px-4 py-2 text-sm font-semibold text-[var(--color-teal-dark)]">
                    {step.badge}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Client spotlight"
            title="Proof translated into cleaner case studies."
            body="The existing site names strong client stories but makes them hard to scan. These pages turn them into clearer proof assets for both trust and conversion."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="section-card rounded-[1.8rem] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  {study.industry}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-ink)]">
                  {study.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                  {study.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-[var(--color-slate)]">
                  {study.outcomes.slice(0, 3).map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-teal)]"
                >
                  Read case study <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-card rounded-[2rem] p-7">
            <SectionHeading
              eyebrow="Reviews and trust"
              title="Support that feels like part of the team, not a black box."
              body="Better E-E-A-T starts with clear claims, visible operating principles, and testimonials that explain how the work actually felt."
            />
          </div>
          <div className="grid gap-4">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="section-card rounded-[1.6rem] p-6"
              >
                <p className="text-base leading-8 text-[var(--color-slate)]">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-5 flex flex-col gap-1">
                  <span className="font-semibold text-[var(--color-ink)]">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-[var(--color-slate)]">
                    {testimonial.role}
                  </span>
                </footer>
              </blockquote>
            ))}
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 px-1 font-semibold text-[var(--color-teal)]"
            >
              View the full proof page <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="section-shell grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="section-card rounded-[2rem] p-7">
            <SectionHeading
              eyebrow="Frequently asked"
              title="The questions buyers ask before they hand work over."
              body="Answering scope, communication, and onboarding questions early removes friction from the first conversation."
            />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="section-card rounded-[1.5rem] p-5 open:border-[rgba(31,107,104,0.28)]"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--color-ink)]">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="rounded-[2.25rem] bg-[linear-gradient(135deg,#1f6b68,#20494a)] px-7 py-9 text-white shadow-[0_25px_80px_rgba(20,72,70,0.3)] md:px-10 md:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.74)]">
              Ready to get started
            </p>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <h2 className="section-subtitle text-white">
                  Bring the messy tasks, the half-built process, and the overflow.
                  We’ll help turn it into a cleaner operating rhythm.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[rgba(255,255,255,0.78)]">
                  Start with a 30-minute consultation, outline the work you need
                  off your plate, and leave with a practical next step instead of
                  another vague promise.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[var(--color-teal-dark)]"
                >
                  Contact Seamless VA
                </Link>
                <a
                  href={`tel:${company.phone}`}
                  className="rounded-full border border-[rgba(255,255,255,0.2)] px-6 py-3 text-center font-semibold text-white"
                >
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
