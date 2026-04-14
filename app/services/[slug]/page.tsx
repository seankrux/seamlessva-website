import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies, services } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell space-y-12">
        <div className="section-card rounded-[2rem] p-7 md:p-10">
          <span className="eyebrow">{service.shortLabel}</span>
          <h1 className="section-title mt-5 text-[clamp(2.5rem,5vw,4.6rem)]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-slate)]">
            {service.summary}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-teal)] px-6 py-3 text-center font-semibold text-white"
            >
              Book a consultation
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-[rgba(31,44,45,0.12)] bg-white px-6 py-3 text-center font-semibold text-[var(--color-ink)]"
            >
              Review case studies
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <SectionHeading
              eyebrow="What’s included"
              title="Support you can hand over with clear expectations."
              body="This is built around practical workload coverage rather than vague assistance promises."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="section-card rounded-[1.8rem] p-6">
            <SectionHeading
              eyebrow="Expected outcomes"
              title="The operational lift this service is meant to create."
              body="We focus on smoother operating flow, stronger follow-through, and less leadership time trapped in detail."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <SectionHeading
            eyebrow="Related proof"
            title="Case studies that show how support translates into business momentum."
            body="The same support model shows up differently across industries, but the pattern is consistent: cleaner processes, steadier execution, and less drag on senior people."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="rounded-[1.4rem] border border-[rgba(31,44,45,0.08)] bg-white p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  {study.industry}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  {study.summary}
                </p>
              </Link>
            ))}
          </div>
        </article>

        <article className="section-card rounded-[1.8rem] p-6">
          <SectionHeading
            eyebrow="FAQ"
            title="The questions that usually come up before work starts."
            body="Clear scope and communication expectations are part of the service, not an afterthought."
          />
          <div className="mt-7 grid gap-4">
            {service.faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.4rem] border border-[rgba(31,44,45,0.08)] bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
