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
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">{study.industry} Case Study</span>
              <h1 className="mt-5 section-title max-w-[860px]">
                Need proof before you hand off operations? See how this team reduced drag and improved follow-through.
              </h1>
              <p className="mt-5 max-w-[640px] text-base leading-8 text-[var(--color-slate)] md:text-lg">
                {study.summary}
              </p>
              <div className="check-list mt-8">
                {study.outcomes.map((outcome) => (
                  <div key={outcome} className="check-item">{outcome}</div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact#intake-form" className="template-btn">
                  <span>Start A Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="/contact#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="hero-visual-shell">
              <div className="bezel-shell">
                <div className="hero-proof-card template-card">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">
                    Results at a glance
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1rem] bg-[rgba(99,91,255,0.08)] px-3 py-4 text-center">
                      <strong className="block text-xl text-[var(--color-brand-purple)]">32%</strong>
                      <span className="text-xs text-[var(--color-slate)]">less admin time</span>
                    </div>
                    <div className="rounded-[1rem] bg-[rgba(255,138,91,0.1)] px-3 py-4 text-center">
                      <strong className="block text-xl text-[var(--color-brand-orange)]">45%</strong>
                      <span className="text-xs text-[var(--color-slate)]">faster follow-up</span>
                    </div>
                    <div className="rounded-[1rem] bg-[rgba(99,91,255,0.08)] px-3 py-4 text-center">
                      <strong className="block text-xl text-[var(--color-brand-purple)]">2.3x</strong>
                      <span className="text-xs text-[var(--color-slate)]">tasks completed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
                    Client snapshot
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                    A busy team needed cleaner ownership, fewer loose ends, and a steadier support rhythm without adding internal hiring overhead.
                  </p>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
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
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">
              The approach
            </p>
            <div className="mt-5 grid gap-4">
              {study.approach.map((item, index) => (
                <div key={item} className="rounded-[1.4rem] border border-[rgba(99,91,255,0.1)] bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-orange)]">
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">
                The outcome
              </p>
              <h2 className="mt-3 section-subtitle text-[2.2rem]">
                What improved after the support layer was stabilized.
              </h2>
            </div>
            <Link href="/contact#intake-form" className="btn-primary justify-center md:justify-start">
              Load Intake Form
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {study.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-[1.5rem] border border-[rgba(99,91,255,0.1)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)] shadow-[0_16px_40px_rgba(10,15,35,0.05)]">
                {outcome}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">
              What this proves
            </p>
            <p className="mt-4 text-sm leading-8 text-[var(--color-slate)] md:text-base">
              The value of support is not just fewer tasks on leadership’s plate. It is clearer ownership, steadier operating rhythm, and better continuity between recurring work and actual business momentum.
            </p>
          </div>
          <article className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">
              Related services
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-full border border-[rgba(99,91,255,0.12)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-slate)]">
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
