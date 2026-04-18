import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="hero-surface hero-surface-compact mx-auto max-w-[880px] px-6 py-10 md:px-10 md:py-12">
          <div className="max-w-[760px]">
            <span className="template-badge">Proof & Reviews</span>
            <h1 className="mt-5 section-title max-w-[760px]">
              Trust signals built around process quality, not empty superlatives.
            </h1>
            <p className="mt-5 max-w-[560px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
              Buyers want proof that support will be dependable, easy to work with,
              and strong enough to reduce founder cleanup.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="template-card">
              <p className="text-base leading-8 text-[var(--color-slate)]">“{testimonial.quote}”</p>
              <footer className="mt-5 flex flex-col gap-1">
                <span className="font-semibold text-[var(--color-ink)]">{testimonial.name}</span>
                <span className="text-sm text-[var(--color-slate)]">{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {reviewThemes.map((theme) => (
            <div key={theme.title} className="template-card">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-teal)]">{theme.title}</p>
              <p className="text-sm leading-7 text-[var(--color-slate)]">{theme.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact#intake-form" className="template-btn">
            <span>Talk Through Fit</span>
            <span className="template-btn-icon" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
