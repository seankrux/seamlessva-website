import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { reviewThemes, testimonials } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Reviews",
  description:
    "Read how clients describe Seamless VA support, onboarding clarity, and the practical lift created by cleaner operations.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#0e1430,#121c40_56%,#1a2856)] px-6 py-8 text-white shadow-[0_34px_90px_rgba(10,15,35,0.28)] md:px-9 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
            <div>
              <span className="eyebrow border-white/10 bg-white/6 text-[rgba(255,255,255,0.76)]">
                Proof and reviews
              </span>
              <h1 className="mt-5 section-title text-white">
                Trust signals built around process quality, not empty superlatives.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(234,238,255,0.76)] md:text-lg md:leading-9">
                Buyers want proof that support will be dependable, easy to work with, and
                strong enough to reduce founder cleanup. This page is built for that conversation.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {reviewThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.6)]">
                    {theme.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(240,243,255,0.82)]">
                    {theme.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              className={`rounded-[1.9rem] p-6 ${
                index === 0
                  ? "bg-[linear-gradient(160deg,#0f1631,#17244f)] text-white shadow-[0_30px_80px_rgba(10,15,35,0.24)]"
                  : "section-card"
              }`}
            >
              <p
                className={`text-base leading-8 ${
                  index === 0 ? "text-[rgba(240,243,255,0.84)]" : "text-[var(--color-slate)]"
                }`}
              >
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 flex flex-col gap-1">
                <span className={`font-semibold ${index === 0 ? "text-white" : "text-[var(--color-ink)]"}`}>
                  {testimonial.name}
                </span>
                <span className={`text-sm ${index === 0 ? "text-[rgba(240,243,255,0.64)]" : "text-[var(--color-slate)]"}`}>
                  {testimonial.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="light-panel rounded-[2rem] px-6 py-7 md:px-8 md:py-8">
            <SectionHeading
              eyebrow="What reviews should prove"
              title="The work should feel clearer, calmer, and easier to trust as soon as the handoff begins."
              body="Strong reviews are usually about ownership, communication, and reduced cleanup — because those are the things buyers are really nervous about before they delegate."
            />
          </div>
          <div className="section-card rounded-[2rem] p-6 md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
              What buyers are actually screening for
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  Reliability
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  Will the work stay done, documented, and visible — or will it boomerang back to leadership in a week?
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  Fit
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  Does the support feel like another generic VA arrangement, or like a real operating partner who understands handoffs?
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  Communication
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  Buyers want proof that the work stays close enough to trust without requiring constant supervision.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-[rgba(17,24,49,0.08)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-teal-dark)]">
                  Operational lift
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  The payoff should be a steadier business rhythm, not just a longer task list with a different owner.
                </p>
              </div>
            </div>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--color-teal)]">
              Talk through fit and next steps <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
