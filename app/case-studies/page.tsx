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
  const featuredStudy = caseStudies[0];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#0d1328,#121c40_58%,#182552)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(10,15,35,0.28)] md:px-9 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.76)]">
                Case studies
              </span>
              <h1 className="mt-5 section-title text-white">
                Client stories rewritten to show challenge, approach, and outcome without the clutter.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(234,238,255,0.76)] md:text-lg md:leading-9">
                These stories help buyers see what Seamless VA actually improves: cleaner workflows,
                steadier follow-through, and more room for leadership to stay focused.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.62)]">
                Featured spotlight
              </p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-white">
                {featuredStudy.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[rgba(240,243,255,0.82)]">
                {featuredStudy.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredStudy.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-[rgba(240,243,255,0.78)]"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
              <Link href={`/case-studies/${featuredStudy.slug}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-white">
                Open featured case study <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <article
              key={study.slug}
              className={`rounded-[2rem] p-6 ${
                index === 0
                  ? "bg-[linear-gradient(160deg,#0f1631,#17244f)] text-white shadow-[0_32px_80px_rgba(10,15,35,0.24)]"
                  : "section-card"
              }`}
            >
              <p
                className={`text-sm font-semibold uppercase tracking-[0.16em] ${
                  index === 0 ? "text-[rgba(255,255,255,0.6)]" : "text-[var(--color-teal-dark)]"
                }`}
              >
                {study.industry}
              </p>
              <h2 className={`mt-3 section-subtitle text-[2rem] ${index === 0 ? "text-white" : "text-[var(--color-ink)]"}`}>
                {study.title}
              </h2>
              <p className={`mt-4 text-sm leading-7 ${index === 0 ? "text-[rgba(240,243,255,0.82)]" : "text-[var(--color-slate)]"}`}>
                {study.summary}
              </p>
              <div className="mt-6 accent-divider" />
              <div className="mt-6 grid gap-3">
                {study.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className={`rounded-[1.3rem] px-4 py-4 text-sm leading-7 ${
                      index === 0
                        ? "border border-white/10 bg-white/6 text-[rgba(240,243,255,0.82)]"
                        : "border border-[rgba(17,24,49,0.08)] bg-white text-[var(--color-slate)]"
                    }`}
                  >
                    {outcome}
                  </div>
                ))}
              </div>
              <Link
                href={`/case-studies/${study.slug}`}
                className={`mt-6 inline-flex items-center gap-2 font-semibold ${index === 0 ? "text-white" : "text-[var(--color-teal)]"}`}
              >
                Open case study <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow="How to read the proof"
              title="The point is not hype. It is to show where process, ownership, and support change the operating rhythm of the business."
              body="Strong case studies make it easier for buyers to imagine the handoff clearly: what was messy, what changed, and what got lighter for leadership as a result."
            />
          </div>
          <div className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
              What buyers can infer from these stories
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)]">
                Seamless VA fits into live operating environments without needing a ground-up rebuild.
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)]">
                The work improves communication and ownership, not just task completion.
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)]">
                The value shows up as cleaner execution rhythm, less drift, and less founder cleanup.
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5 text-sm leading-7 text-[var(--color-slate)]">
                Different industries still produce the same pattern: steadier operations and more usable leadership capacity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
