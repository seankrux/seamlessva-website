import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { company, faqs, goodFitSignals, processSteps, services, testimonials } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Seamless VA helps founders offload admin, bookkeeping, and growth operations with structured virtual assistant support.",
});

export default function Home() {
  const heroChecks = ["Inbox and calendar overload", "Bookkeeping follow-through slips", "Leads stall without ownership"];

  const stats = [
    { value: `${services.length}`, label: "support lanes" },
    { value: `${processSteps.length}`, label: "handoff steps" },
    { value: `${company.toolStack.length}+`, label: "tools supported" },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    sameAs: company.socials.map((social) => social.href),
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    url: company.siteUrl,
    email: company.email,
    telephone: company.phone,
    areaServed: ["Canada", "United States", "Remote"],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, professionalServiceSchema, faqSchema]) }}
      />

      <section className="home-hero">
        <div className="section-shell">
          <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
            <div className="hero-grid section-shell !w-full">
              <div className="min-w-0">
                <span className="template-badge">Seamless VA</span>
                <h1 className="section-title mt-5 max-w-[760px]">
                  <span className="block text-[var(--color-ink)]">Virtual Assistant Support</span>
                  <span className="block text-[var(--color-brand-green)]">Start With Less Admin Drag</span>
                </h1>
                <p className="hero-copy">
                  For founders and lean teams that need inbox, scheduling, bookkeeping, and growth support without hiring in-house.
                </p>
                <div className="check-list mb-10">
                  {heroChecks.map((item) => <div key={item} className="check-item">{item}</div>)}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact#intake-form" className="template-btn">
                    <span>Start Project</span><span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                  <Link href="/contact#intake-form" className="template-btn-soft">
                    <span>Load Intake Form</span><span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
              <HeroScene variant="home" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-20">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {goodFitSignals.map((signal) => (
            <div key={signal.title} className="template-card">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">Pain Point</p>
              <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">{signal.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{signal.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stat-band px-0 py-16">
        <div className="section-shell grid gap-8 text-center md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-1 font-[var(--font-display)] text-[2.3rem] font-[800]">{stat.value}</div>
              <div className="text-sm opacity-85">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-0 py-20">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <span className="template-badge">Start Where The Drag Is</span>
            <h2 className="section-subtitle mt-5 mb-4">Pick The First Support Lane</h2>
            <p className="max-w-[680px] leading-8 text-[var(--color-slate)]">
              Start with admin, bookkeeping, or growth support. Expand once the first handoff is clean.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="template-card">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">{service.shortLabel}</p>
                <h3 className="mb-3 font-[var(--font-display)] text-[1.5rem] font-[800] text-[var(--color-ink)]">{service.title}</h3>
                <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="template-btn-soft mt-4 !px-5 !py-3">
                  <span>View Service</span><span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-0 py-20 text-center">
        <div className="section-shell">
          <span className="template-badge mb-6 inline-block">Founder Capacity Check</span>
          <h2 className="section-subtitle mb-4">Ready To Hand Off The Drag?</h2>
          <p className="mx-auto mb-8 max-w-[600px] leading-8 text-[var(--color-slate)]">
            Load the form. We map what is breaking and give you a clear first move.
          </p>
          <Link href="/contact#intake-form" className="template-btn">
            <span>Load Intake Form</span><span className="template-btn-icon" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="px-0 pb-20">
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
