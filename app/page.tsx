import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  caseStudies,
  company,
  faqs,
  goodFitSignals,
  operatingPrinciples,
  processSteps,
  services,
  testimonials,
} from "@/lib/site-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "SeamlessVA Philippines provides structured virtual assistant, bookkeeping, operations, and growth support for founders and lean teams.",
});

export default function Home() {
  const audienceTags = [
    "Founder-led teams",
    "Agencies & consultants",
    "Healthcare & wellness",
    "Lean internal teams",
  ];

  const supportLanes = ["Daily operations", "Bookkeeping hygiene", "Growth follow-through"];

  const comparisonRows = [
    {
      label: "How work gets assigned",
      seamless: "Mapped into recurring lanes with clear ownership",
      freelance: "Usually task-by-task and reactive",
      inHouse: "Strong once hired, but slower to build",
    },
    {
      label: "Continuity",
      seamless: "Documented handoffs and visible process ownership",
      freelance: "Often tied to one person",
      inHouse: "Depends on internal documentation discipline",
    },
    {
      label: "Management overhead",
      seamless: "Low. Work plugs into your current stack",
      freelance: "You manage quality and follow-up yourself",
      inHouse: "Higher overhead across hiring and supervision",
    },
    {
      label: "Best fit",
      seamless: "Founders who need relief without a full hiring cycle",
      freelance: "Overflow or one-off support",
      inHouse: "Permanent and specialized roles",
    },
  ];

  const heroChecks = [
    "Free 30-minute consultation to map the workload first",
    "Admin, bookkeeping, and growth execution under one support model",
    "Built to work inside your current stack without a full rebuild",
  ];

  const stats = [
    { value: `${services.length}`, label: "support lanes across operations, finance, and growth" },
    { value: `${processSteps.length}`, label: "handoff stages before recurring work gets owned" },
    { value: "PH + remote", label: "delivery model built for founders and lean teams" },
    { value: `${company.toolStack.length}+`, label: "common tools supported inside the work rhythm" },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Davao City",
      addressCountry: "Philippines",
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
    areaServed: ["Philippines", "Canada", "United States"],
    serviceType: services.map((service) => service.title),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, professionalServiceSchema, faqSchema]),
        }}
      />

      <section className="home-hero">
        <div className="section-shell">
          <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
            <div className="hero-grid section-shell !w-full">
              <div className="min-w-0">
                <div className="fade-rise mb-6">
                  <span className="template-badge">SeamlessVA Philippines</span>
                </div>
                <h1 className="section-title fade-rise" style={{ animationDelay: "0.1s", maxWidth: 760 }}>
                  Virtual assistant support that makes daily operations feel lighter.
                </h1>
                <p className="fade-rise hero-copy" style={{ animationDelay: "0.2s" }}>
                  SeamlessVA Philippines helps founders and lean teams clean up inboxes,
                  calendars, bookkeeping follow-through, admin tasks, and growth execution.
                  The goal is simple: less manual drag, clearer ownership, and a calmer work rhythm.
                </p>

                <div className="check-list mb-10">
                  {heroChecks.map((item) => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div className="fade-rise flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
                  <Link href="/contact#intake-form" className="template-btn">
                    <span>Book Free Consultation</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                  <Link href="/services" className="template-btn-soft">
                    <span>See Services</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {audienceTags.map((tag) => (
                    <span key={tag} className="audience-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hero-visual-shell">
                <div className="bezel-shell">
                  <div className="bezel-core hero-visual-media">
                    <Image
                      src="/images/cro/asian-va-hero-2026.jpg"
                      alt="Professional virtual assistant in a modern workspace"
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(248,248,255,0.18),rgba(248,248,255,0.02))]" />
                  </div>
                </div>
                <div className="bezel-shell">
                  <div className="hero-proof-card template-card">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">3 Service Lanes</p>
                    <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">Support that starts where the work gets heavy.</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {supportLanes.map((lane) => (
                        <span key={lane} className="lane-chip">
                          {lane}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                      Start with one lane, stabilize the workflow, then expand support once the handoff is clear.
                    </p>
                  </div>
                </div>
                <div className="bezel-shell">
                  <div className="hero-proof-summary template-card">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">What changes first</p>
                    <div className="space-y-4 text-sm leading-7 text-[var(--color-slate)]">
                      <div><strong className="text-[var(--color-ink)]">Ops triage:</strong> inbox, scheduling, and coordination stop bouncing back uphill.</div>
                      <div><strong className="text-[var(--color-ink)]">Finance hygiene:</strong> transaction organization and reporting prep get steadier.</div>
                      <div><strong className="text-[var(--color-ink)]">Revenue follow-through:</strong> lead handling and campaign execution stop drifting.</div>
                    </div>
                    <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                      <span>Reserve Fit Call</span>
                      <span className="template-btn-icon" aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-24">
        <div className="section-shell">
          <div className="mb-12 max-w-3xl">
            <span className="template-badge">Managed Support Model</span>
            <h2 className="section-subtitle mt-5 mb-4">Work should feel safer than ad-hoc help and lighter than a full headcount build.</h2>
            <p className="max-w-[720px] text-[var(--color-slate)] leading-8">
              Recurring work should be owned, documented, and visible inside your current stack. That is what makes support feel dependable instead of temporary.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bezel-shell">
              <div className="bezel-core h-full p-6 md:p-8">
                <div className="mb-8 grid gap-4 sm:grid-cols-2">
                  {operatingPrinciples.map((principle) => (
                    <div key={principle.title} className="mini-card">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-purple)]">Operating principle</p>
                      <h3 className="font-[var(--font-display)] text-[1.15rem] font-[800] text-[var(--color-ink)]">{principle.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{principle.body}</p>
                    </div>
                  ))}
                  <div className="mini-card sm:col-span-2">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-purple)]">Common Stack</p>
                    <p className="mb-4 max-w-[520px] text-sm leading-7 text-[var(--color-slate)]">
                      Support plugs into the tools your team already uses so the first win is speed, not migration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {company.toolStack.map((tool) => (
                        <span key={tool} className="lane-chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {goodFitSignals.map((signal) => (
                <div key={signal.title} className="template-card">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-purple)]">Pressure Point</p>
                  <h3 className="font-[var(--font-display)] text-[1.3rem] font-[800] text-[var(--color-ink)]">{signal.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{signal.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="stat-band px-0 py-20">
        <div className="section-shell grid gap-8 text-center md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-1 font-[var(--font-display)] text-[2.3rem] font-[800]">{stat.value}</div>
              <div className="text-sm opacity-85">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-0 py-24">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <span className="template-badge">Why Teams Choose This Model</span>
            <h2 className="section-subtitle mt-5 mb-4">The delivery model should feel dependable before you book the call.</h2>
            <p className="max-w-[760px] leading-8 text-[var(--color-slate)]">
              This comparison makes the decision easier for founders weighing flexibility against stability, speed, and management overhead.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[rgba(99,91,255,0.1)] bg-white shadow-[0_20px_60px_rgba(15,22,49,0.08)]">
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[rgba(99,91,255,0.06)]">
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">Decision point</th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">SeamlessVA Philippines</th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">Generic freelancer</th>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-slate)]">In-house hire</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-white" : "bg-[rgba(99,91,255,0.025)]"}>
                      <th scope="row" className="px-5 py-5 align-top text-sm font-semibold text-[var(--color-ink)]">{row.label}</th>
                      <td className="px-5 py-5 align-top text-sm leading-7 text-[var(--color-ink)]">{row.seamless}</td>
                      <td className="px-5 py-5 align-top text-sm leading-7 text-[var(--color-slate)]">{row.freelance}</td>
                      <td className="px-5 py-5 align-top text-sm leading-7 text-[var(--color-slate)]">{row.inHouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="template-card overflow-hidden p-0">
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/cro/asian-va-work.jpg"
                  alt="Virtual assistant working at a laptop"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                <span className="template-badge mb-5">Featured proof</span>
                <h2 className="section-subtitle mb-4">{caseStudies[0].title}</h2>
                <p className="mb-6 leading-8 text-[var(--color-slate)]">{caseStudies[0].summary}</p>
                <div className="space-y-3 text-sm leading-7 text-[var(--color-slate)]">
                  {caseStudies[0].outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-[16px] border border-[rgba(99,91,255,0.1)] bg-[rgba(99,91,255,0.045)] px-4 py-3">{outcome}</div>
                  ))}
                </div>
                <Link href={`/case-studies/${caseStudies[0].slug}`} className="template-btn mt-6">
                  <span>Read Case Study</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="template-card">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Step {index + 1}</p>
                  <span className="rounded-full bg-[rgba(255,138,91,0.14)] px-3 py-1 text-xs font-semibold text-[var(--color-brand-orange)]">{step.badge}</span>
                </div>
                <h3 className="mb-3 font-[var(--font-display)] text-[1.4rem] font-[800] text-[var(--color-ink)]">{step.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-slate)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-24">
        <div className="section-shell">
          <div className="mb-12 max-w-3xl">
            <span className="template-badge">Start Where The Drag Is</span>
            <h2 className="section-subtitle mt-5 mb-4">Most teams start with one lane, then expand once the first handoff sticks.</h2>
            <p className="max-w-[760px] leading-8 text-[var(--color-slate)]">
              The offer stays grounded in the exact work founders usually need owned first: daily operations, bookkeeping upkeep, or growth execution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="template-card">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">{service.shortLabel}</p>
                <h3 className="mb-3 font-[var(--font-display)] text-[1.5rem] font-[800] text-[var(--color-ink)]">{service.title}</h3>
                <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">{service.summary}</p>
                <ul className="space-y-3 text-sm leading-6 text-[var(--color-slate)]">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-brand-orange)]" />{item}</li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="template-btn-soft mt-6 !px-5 !py-3">
                  <span>Explore Lane</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-0 py-24 text-center">
        <div className="section-shell">
          <span className="template-badge mb-6 inline-block">Founder capacity check</span>
          <h2 className="section-subtitle mb-4">Your calmer operating rhythm is one call away</h2>
          <p className="mx-auto mb-8 max-w-[600px] leading-8 text-[var(--color-slate)]">
            Book a free 30-minute consultation. We map the workload, identify where ownership is leaking, and give you a clear first move with no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact#intake-form" className="template-btn">
              <span>Book My Free Consultation</span>
              <span className="template-btn-icon" aria-hidden="true">↗</span>
            </Link>
            <a href={`tel:${company.phone}`} className="template-btn-soft">Call {company.phone}</a>
          </div>
          <p className="mt-4 text-sm text-[#8b8ca8]">No credit card required · Clear next-step recommendation</p>
        </div>
      </section>

      <section className="px-0 pb-24">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="template-card text-left">
              <p className="text-base leading-8 text-[var(--color-slate)]">“{testimonial.quote}”</p>
              <footer className="mt-5 flex flex-col gap-1">
                <span className="font-semibold text-[var(--color-ink)]">{testimonial.name}</span>
                <span className="text-sm text-[var(--color-slate)]">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
