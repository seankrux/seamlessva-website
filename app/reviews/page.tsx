import type { Metadata } from "next";
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
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell space-y-8">
        <SectionHeading
          eyebrow="Proof and reviews"
          title="Trust signals built around process quality, not empty superlatives."
          body="Buyers usually want proof that support will be dependable, easy to work with, and strong enough to reduce founder cleanup. This page is built for that conversation."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="section-card rounded-[1.8rem] p-6"
            >
              <p className="text-base leading-8 text-[var(--color-slate)]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-5 flex flex-col gap-1">
                <span className="font-semibold text-[var(--color-ink)]">
                  {testimonial.name}
                </span>
                <span className="text-sm text-[var(--color-slate)]">
                  {testimonial.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
            Why this matters
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {reviewThemes.map((theme) => (
              <div
                key={theme.title}
                className="rounded-[1.4rem] border border-[rgba(31,44,45,0.08)] bg-white p-5"
              >
                <h2 className="text-lg font-semibold text-[var(--color-ink)]">
                  {theme.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  {theme.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
