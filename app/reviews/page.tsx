import type { Metadata } from "next";
import Link from "next/link";
import { HeroScene } from "@/components/hero-scene";
import { createPageMetadata } from "@/lib/metadata";
import { reviewThemes, testimonials } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Client Reviews",
  description:
    "Read how clients describe Seamless VA support, onboarding clarity, and the practical lift created by cleaner operations.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const proofPoints = ["Real client feedback", "Dependable support", "Clear communication"];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">Reviews</span>
              <h1 className="mt-5 section-title max-w-[760px]">
                <span className="block text-[var(--color-ink)]">Client Reviews</span>
                <span className="block text-[var(--color-brand-green)]">See Why Clients Trust Us</span>
              </h1>
              <p className="hero-copy">
                Read what clients say about communication, reliability, and the support experience they get with Seamless VA.
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
            <HeroScene variant="reviews" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="template-card">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-orange)]">★★★★★</p>
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
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">{theme.title}</p>
              <p className="text-sm leading-7 text-[var(--color-slate)]">{theme.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact#intake-form" className="template-btn">
            <span>Load Intake Form</span>
            <span className="template-btn-icon" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
