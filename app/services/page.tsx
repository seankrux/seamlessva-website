import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Seamless VA services across virtual assistance, bookkeeping support, and automation-led marketing operations.",
};

export default function ServicesPage() {
  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Service catalogue"
          title="Support designed around the work founders keep carrying for too long."
          body="These pages turn the original service menu into a cleaner buying path, with clearer scope, stronger outcomes, and better internal linking."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="section-card rounded-[1.8rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                {service.shortLabel}
              </p>
              <h2 className="mt-3 section-subtitle text-[2rem]">{service.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                {service.summary}
              </p>
              <div className="mt-5 space-y-2 text-sm text-[var(--color-slate)]">
                {service.deliverables.map((deliverable) => (
                  <p key={deliverable}>• {deliverable}</p>
                ))}
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-teal)]"
              >
                Read more <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
