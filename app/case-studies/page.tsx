import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how SeamlessVA Philippines supports growing teams with cleaner operations, stronger follow-through, and better execution rhythm.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const proofPoints = [
    "Real service outcomes",
    "Workflow improvements you can see",
    "Better follow-through without extra hiring overhead",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">Case Studies</span>
              <h1 className="mt-5 section-title max-w-[860px]">
                Need proof before you commit? See how lean teams reduced admin drag and improved follow-through.
              </h1>
              <p className="mt-5 max-w-[620px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
                Explore real support examples showing how founders and lean teams used SeamlessVA Philippines to create clearer ownership, smoother workflows, and better operating rhythm.
              </p>
              <div className="check-list mt-8">
                {proofPoints.map((item) => (
                  <div key={item} className="check-item">{item}</div>
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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Case Study Overview</p>
                  <h2 className="font-[var(--font-display)] text-[1.45rem] font-[800] text-[var(--color-ink)]">Cleaner handoffs, faster follow-up, and less admin drag.</h2>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-[1rem] bg-[rgba(99,91,255,0.08)] px-3 py-4"><strong className="block text-xl text-[var(--color-brand-purple)]">32%</strong><span className="text-xs text-[var(--color-slate)]">less admin time</span></div>
                    <div className="rounded-[1rem] bg-[rgba(255,138,91,0.1)] px-3 py-4"><strong className="block text-xl text-[var(--color-brand-orange)]">45%</strong><span className="text-xs text-[var(--color-slate)]">faster follow-up</span></div>
                    <div className="rounded-[1rem] bg-[rgba(99,91,255,0.08)] px-3 py-4"><strong className="block text-xl text-[var(--color-brand-purple)]">2.3x</strong><span className="text-xs text-[var(--color-slate)]">tasks completed</span></div>
                  </div>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-orange)]">Operational wins</p>
                  <p className="text-sm leading-7 text-[var(--color-slate)]">Better follow-through, fewer delays, and stronger business momentum once recurring work has a clear owner.</p>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
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
                  <div key={outcome} className="rounded-[16px] border border-[rgba(99,91,255,0.1)] bg-[rgba(99,91,255,0.045)] px-4 py-3">{outcome}</div>
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
