import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { company, services } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Seamless VA services across virtual assistance, bookkeeping support, and automation-led marketing operations.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="section-shell !w-full">
            <span className="template-badge">Service Catalogue</span>
            <h1 className="mt-5 section-title max-w-[780px]">
              Support lanes designed around the work founders keep carrying for too long.
            </h1>
            <p className="mt-5 max-w-[560px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
              Compare where Seamless VA creates the fastest lift: daily operations,
              bookkeeping upkeep, or growth execution support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="template-btn">Book Fit Call</Link>
              <a href={`tel:${company.phone}`} className="template-btn-soft">Call {company.phone}</a>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">
                {service.shortLabel}
              </p>
              <h2 className="mb-3 font-[var(--font-display)] text-[1.7rem] font-[800] text-[var(--color-ink)]">
                {service.title}
              </h2>
              <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">
                {service.summary}
              </p>
              <div className="mb-5 space-y-3 text-sm leading-6 text-[var(--color-slate)]">
                {service.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" />
                    <span>{deliverable}</span>
                  </div>
                ))}
              </div>
              <div className="mb-6 flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-full bg-[rgba(13,148,136,0.08)] px-3 py-2 text-xs text-[var(--color-teal)]">
                    {outcome}
                  </span>
                ))}
              </div>
              <Link href={`/services/${service.slug}`} className="template-btn-soft !px-5 !py-3">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
