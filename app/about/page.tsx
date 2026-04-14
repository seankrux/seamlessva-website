import type { Metadata } from "next";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { company } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Seamless VA approaches client support, process design, and operational execution for growing businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell space-y-8">
        <SectionHeading
          eyebrow="About Seamless VA"
          title="Support designed for businesses that need a steadier operating rhythm."
          body="The strongest E-E-A-T improvement here is simple: explain how the team works, what they value, and what a client can actually expect after they say yes."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              What we believe
            </h2>
            <div className="content-copy mt-4 space-y-4 text-sm">
              <p>
                Businesses rarely need more noise. They need better operating
                coverage, cleaner communication, and support that can think in
                workflows instead of disconnected tasks.
              </p>
              <p>
                Seamless VA is built around that idea. The goal is not just to
                check items off a list, but to make the business easier to run as
                demands increase.
              </p>
            </div>
          </article>
          <article className="section-card rounded-[1.8rem] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
              What clients should expect
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              <li>• Clear onboarding and communication expectations</li>
              <li>• Support scoped around real business priorities</li>
              <li>• Process improvement where it will reduce friction fast</li>
              <li>• Visibility into what is owned, what is pending, and what comes next</li>
            </ul>
          </article>
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-coral)]">
            Reach us
          </p>
          <div className="mt-4 grid gap-3 text-sm text-[var(--color-slate)] md:grid-cols-3">
            <a href={`mailto:${company.email}`} className="link-accent">
              {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="link-accent">
              {company.phone}
            </a>
            <p>{company.location}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
