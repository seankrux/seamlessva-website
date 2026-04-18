import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how Seamless VA supports growing teams with cleaner operations, stronger follow-through, and better execution rhythm.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface hero-surface-compact mx-auto max-w-[920px] px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-[800px]">
            <span className="template-badge">Case Studies</span>
            <h1 className="mt-5 section-title max-w-[800px]">
              Client stories that show challenge, approach, and the lift created after the handoff.
            </h1>
            <p className="mt-5 max-w-[560px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
              These stories show what actually improves when support gets tighter:
              cleaner workflows, steadier follow-through, and less drag on leadership.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">{study.industry}</p>
              <h2 className="mb-3 font-[var(--font-display)] text-[1.6rem] font-[800] text-[var(--color-ink)]">{study.title}</h2>
              <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">{study.summary}</p>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-slate)]">
                {study.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[16px] border border-[rgba(13,148,136,0.08)] bg-[rgba(13,148,136,0.04)] px-4 py-3">{outcome}</div>
                ))}
              </div>
              <Link href={`/case-studies/${study.slug}`} className="template-btn mt-6">
                <span>Open Case Study</span>
                <span className="template-btn-icon" aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
