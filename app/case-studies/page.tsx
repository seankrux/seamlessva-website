import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
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
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Case studies"
          title="Client stories rewritten to show challenge, approach, and outcome without the clutter."
          body="The original site had strong proof seeds. These case-study pages turn them into more credible, easier-to-scan trust assets."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.slug} className="section-card rounded-[1.8rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                {study.industry}
              </p>
              <h2 className="mt-3 section-subtitle text-[2rem]">{study.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">
                {study.summary}
              </p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--color-teal)]"
              >
                Open case study <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
