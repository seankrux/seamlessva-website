import type { Metadata } from "next";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { testimonials } from "@/lib/site-data";

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
          body="The live site had proof, but it was buried. This page gives reviews and trust language a dedicated surface so buyers can evaluate fit faster."
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
          <div className="content-copy mt-4 space-y-4 text-sm">
            <p>
              For a service business, credibility is built through consistency,
              clarity, and proof that support can be trusted with real operating
              work.
            </p>
            <p>
              This rebuild deliberately avoids inflated counters and vague
              authority claims. Instead, it leans on concrete service scope,
              named workflows, and client stories that explain how the work
              helped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
