import type { Metadata } from "next";
import Link from "next/link";
import {
  caseStudies,
  company,
  faqs,
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
  const serviceCards = [
    { icon: "📥", title: "Inbox + Calendar Control", price: "Fast Relief", tag: "Stop the daily drag" },
    { icon: "🧾", title: "Bookkeeping Support", price: "Month-End Clarity", tag: "Cleaner records" },
    { icon: "📈", title: "Lead + CRM Follow-Through", price: "Revenue Support", tag: "No more drift" },
    { icon: "⚙️", title: "Workflow Coordination", price: "Daily Ownership", tag: "Keep things moving" },
    { icon: "📣", title: "Marketing Execution", price: "Done-for-you", tag: "Campaign support" },
    { icon: "🚨", title: "Overflow Rescue", price: "Priority First", tag: "When things are messy" },
  ];

  const heroChecks = [
    "Free 30-minute consultation to map the drag first",
    "Admin, bookkeeping, and growth execution under one support lane",
    "Built to work inside your current stack — no giant rebuild needed",
  ];

  const stats = [
    { value: "15,000+", label: "Tasks, touchpoints, and follow-ups handled across client workflows" },
    { value: `${services.length}`, label: "Core service lanes covering ops, finance, and growth support" },
    { value: "98%", label: "Of buyers want less founder cleanup, clearer ownership, and calmer execution" },
    { value: "0", label: "Tolerance for dropped follow-through, invisible ownership, or vague handoffs" },
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
          <div className="template-nav mb-5 rounded-full px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex flex-wrap items-center gap-6 text-[var(--color-slate)]">
                <span className="font-semibold text-[var(--color-teal)]">Seamless VA</span>
                {['Services', 'About', 'Reviews', 'Case Studies'].map((item) => (
                  <span key={item} className="font-medium">{item}</span>
                ))}
              </div>
              <Link href="/contact" className="template-btn">
                📅 Book Fit Call
              </Link>
            </div>
          </div>

          <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
            <div className="hero-grid section-shell !w-full">
              <div>
                <div className="fade-rise mb-6">
                  <span className="template-badge">⭐ Operator-led support for overloaded founders</span>
                </div>
                <h1 className="section-title fade-rise" style={{ animationDelay: '0.1s', maxWidth: 760 }}>
                  The support layer that gives your business back its rhythm.
                </h1>
                <p className="fade-rise" style={{ animationDelay: '0.2s', fontSize: '1.1rem', lineHeight: 1.8, color: '#4a6b65', maxWidth: 520, marginTop: '1.5rem', marginBottom: '2rem', fontWeight: 500 }}>
                  Seamless VA helps founder-led teams stop drowning in inboxes, calendar mess,
                  bookkeeping cleanup, and growth follow-through. We don’t just “help” — we make the
                  business easier to run.
                </p>

                <div className="check-list mb-10">
                  {heroChecks.map((item) => (
                    <div key={item} className="check-item">{item}</div>
                  ))}
                </div>

                <div className="fade-rise flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
                  <Link href="/contact" className="template-btn">Book Free Consultation</Link>
                  <Link href="/services" className="template-btn-soft">See Services</Link>
                </div>
              </div>

              <div className="relative min-h-[420px] md:min-h-[520px]">
                <div className="hero-proof-card top template-card text-center">
                  <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#0d9488' }}>4.9★</div>
                  <div style={{ fontSize: '0.82rem', color: '#4a6b65', marginTop: 4, fontWeight: 600 }}>High-trust support experience</div>
                </div>
                <div className="hero-proof-card bottom template-card text-center">
                  <div style={{ fontSize: '0.8rem', color: '#4a6b65', marginBottom: 6, fontWeight: 600 }}>Fastest first win</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#0d9488', fontSize: '1.1rem' }}>Less founder cleanup</div>
                  <Link href="/contact" className="template-btn mt-4 w-full justify-center !px-4 !py-3 !text-[0.82rem]">Reserve →</Link>
                </div>
                <div className="template-card absolute right-[8%] top-[30%] z-[1] max-w-[320px] bg-white/90 backdrop-blur md:right-[12%]">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">What changes first</p>
                  <div className="space-y-4 text-sm leading-7 text-[var(--color-slate)]">
                    <div><strong className="text-[var(--color-ink)]">Ops triage:</strong> inbox, scheduling, and coordination stop bouncing back uphill.</div>
                    <div><strong className="text-[var(--color-ink)]">Finance hygiene:</strong> transaction organization and reporting prep get steadier.</div>
                    <div><strong className="text-[var(--color-ink)]">Revenue follow-through:</strong> lead handling and campaign execution stop drifting.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-20">
        <div className="section-shell">
          <div className="mb-14 text-center">
            <h2 className="section-subtitle mb-3">Everything your business needs to stop dropping the ball</h2>
            <p className="mx-auto max-w-[580px] text-[var(--color-slate)]">
              From daily admin cleanup to bookkeeping support to growth execution — one service partner, cleaner handoffs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((card) => (
              <div key={card.title} className="template-card text-center">
                <div className="mb-4 text-[2.4rem]">{card.icon}</div>
                <div className="mb-1 font-[var(--font-display)] text-[1.05rem] font-[800] text-[var(--color-ink)]">{card.title}</div>
                <div className="mb-2 font-[var(--font-display)] text-[1.1rem] font-[800] text-[var(--color-teal)]">{card.price}</div>
                <span className="inline-block rounded-full bg-[rgba(13,148,136,0.1)] px-3 py-1 text-[0.75rem] text-[var(--color-teal)]">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stat-band px-0 py-16">
        <div className="section-shell grid gap-8 text-center md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="mb-1 font-[var(--font-display)] text-[2.3rem] font-[800]">{stat.value}</div>
              <div className="text-sm opacity-85">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-0 py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="template-card">
            <span className="template-badge mb-5">Featured proof</span>
            <h2 className="section-subtitle mb-4">{caseStudies[0].title}</h2>
            <p className="mb-6 leading-8 text-[var(--color-slate)]">{caseStudies[0].summary}</p>
            <div className="space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {caseStudies[0].outcomes.map((outcome) => (
                <div key={outcome} className="rounded-[16px] border border-[rgba(13,148,136,0.08)] bg-[rgba(13,148,136,0.04)] px-4 py-3">{outcome}</div>
              ))}
            </div>
            <Link href={`/case-studies/${caseStudies[0].slug}`} className="template-btn mt-6">Read Case Study</Link>
          </div>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="template-card">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">Step {index + 1}</p>
                  <span className="rounded-full bg-[rgba(13,148,136,0.1)] px-3 py-1 text-xs font-semibold text-[var(--color-teal)]">{step.badge}</span>
                </div>
                <h3 className="mb-3 font-[var(--font-display)] text-[1.4rem] font-[800] text-[var(--color-ink)]">{step.title}</h3>
                <p className="text-sm leading-7 text-[var(--color-slate)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-0 py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">{service.shortLabel}</p>
              <h3 className="mb-3 font-[var(--font-display)] text-[1.5rem] font-[800] text-[var(--color-ink)]">{service.title}</h3>
              <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">{service.summary}</p>
              <ul className="space-y-3 text-sm leading-6 text-[var(--color-slate)]">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" />{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-0 py-20 text-center">
        <div className="section-shell">
          <span className="template-badge mb-6 inline-block">Limited founder capacity this week</span>
          <h2 className="section-subtitle mb-4">Your calmer operating rhythm is one call away</h2>
          <p className="mx-auto mb-8 max-w-[600px] leading-8 text-[var(--color-slate)]">
            Book a free 30-minute consultation. We’ll map the drag, show where ownership is leaking, and give you a clear first move — with zero pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="template-btn">Book My Free Consultation →</Link>
            <a href={`tel:${company.phone}`} className="template-btn-soft">Call {company.phone}</a>
          </div>
          <p className="mt-4 text-sm text-[#90ada8]">🔒 No credit card required · Clear next-step recommendation</p>
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
