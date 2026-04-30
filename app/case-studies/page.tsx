import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how Seamless VA supports growing teams with cleaner operations, stronger follow-through, and better execution rhythm.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const proofPoints = ["Real service outcomes", "Visible workflow gains", "Better follow-through"];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">Case Studies</span>
              <h1 className="mt-5 section-title max-w-[760px]">
                <span className="block text-[var(--color-ink)]">Case Studies</span>
                <span className="block text-[var(--color-brand-green)]">See Results Before You Commit</span>
              </h1>
              <p className="hero-copy">
                Explore how lean teams reduced admin drag and improved follow-through with Seamless VA.
              </p>
              <div className="check-list mt-8">
                {proofPoints.map((item) => <div key={item} className="check-item">{item}</div>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact#intake-form" className="template-btn">
                  <span>Start Project</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
                <Link href="/contact#intake-form" className="template-btn-soft">
                  <span>Load Intake Form</span>
                  <span className="template-btn-icon" aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
            <HeroScene variant="case-studies" />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">{study.industry}</p>
              <h2 className="mb-3 font-[var(--font-display)] text-[1.6rem] font-[800] text-[var(--color-ink)]">{study.title}</h2>
              <p className="mb-5 text-sm leading-7 text-[var(--color-slate)]">{study.summary}</p>
              <div className="space-y-3 text-sm leading-7 text-[var(--color-slate)]">
                {study.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-[16px] border border-[rgba(36,242,178,0.16)] bg-[rgba(36,242,178,0.055)] px-4 py-3">{outcome}</div>
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
