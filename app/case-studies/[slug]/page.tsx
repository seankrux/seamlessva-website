import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
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

  return createPageMetadata({
    title: study.title,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#0d1328,#121c40_58%,#1a2856)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(10,15,35,0.28)] md:px-9 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.76)]">
                {study.industry}
              </span>
              <h1 className="mt-5 section-title text-white">{study.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(234,238,255,0.76)] md:text-lg md:leading-9">
                {study.summary}
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.62)]">
                Outcome snapshot
              </p>
              <div className="mt-4 grid gap-3">
                {study.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-[1.2rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-[rgba(240,243,255,0.84)]"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] bg-[linear-gradient(160deg,#0f1631,#17244f)] p-6 text-white shadow-[0_32px_80px_rgba(10,15,35,0.24)] md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.62)]">
              The challenge
            </p>
            <p className="mt-4 text-sm leading-8 text-[rgba(240,243,255,0.82)] md:text-base">
              {study.challenge}
            </p>
          </article>

          <article className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              The approach
            </p>
            <div className="mt-5 grid gap-4">
              {study.approach.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-coral)]">
                    Move {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="section-card rounded-[2rem] p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
                The outcome
              </p>
              <h2 className="mt-3 section-subtitle text-[2.2rem]">
                What improved after the support layer was stabilized.
              </h2>
            </div>
            <Link href="/contact" className="btn-primary justify-center md:justify-start">
              Talk through a similar engagement
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-[1.5rem] border border-[rgba(17,24,49,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)] shadow-[0_16px_40px_rgba(10,15,35,0.05)]"
              >
                {outcome}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              What this proves
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-slate)] md:text-base">
              The value of support is not just fewer tasks on leadership’s plate. It is clearer ownership, steadier operating rhythm, and better continuity between recurring work and actual business momentum.
            </p>
          </div>
          <article className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
              Related services
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-full border border-[rgba(17,24,49,0.1)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-slate)]"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
