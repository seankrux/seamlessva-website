import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, services } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell space-y-10">
        <div className="section-card rounded-[2rem] p-7 md:p-10">
          <span className="eyebrow">{study.industry}</span>
          <h1 className="section-title mt-5 text-[clamp(2.4rem,5vw,4.6rem)]">
            {study.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-slate)]">
            {study.summary}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
              The challenge
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
              {study.challenge}
            </p>
          </article>

          <article className="section-card rounded-[1.8rem] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              The approach
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {study.approach.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
            The outcome
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-[1.4rem] border border-[rgba(31,44,45,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)]"
              >
                {outcome}
              </div>
            ))}
          </div>
        </article>

        <article className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
            Related services
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-[rgba(31,44,45,0.1)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-slate)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
