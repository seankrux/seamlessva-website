import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { reviewThemes, testimonials } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Reviews",
  description:
    "Read how clients describe SeamlessVA Philippines support, onboarding clarity, and the practical lift created by cleaner operations.",
  path: "/reviews",
});

export default function ReviewsPage() {
  const proofPoints = [
    "Real client feedback",
    "Clear communication and dependable support",
    "Confidence before you book the call",
  ];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-8">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">Proof & Reviews</span>
              <h1 className="mt-5 section-title max-w-[820px]">
                Still unsure who to trust with your operations? Read what clients say about working with SeamlessVA Philippines.
              </h1>
              <p className="mt-5 max-w-[620px] text-[1.05rem] leading-8 text-[var(--color-slate)]">
                See how founders and lean teams describe the support experience, communication, and follow-through they received while working with SeamlessVA Philippines.
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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">Trusted Support</p>
                  <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">“They quickly became an extension of our team.”</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">Founder, growing service brand</p>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-orange)]">5-star experience</p>
                  <h2 className="font-[var(--font-display)] text-[1.35rem] font-[800] text-[var(--color-ink)]">Reliable, proactive, and detail-oriented.</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-slate)]">Clients value clear communication, dependable execution, and fewer loose ends.</p>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
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
