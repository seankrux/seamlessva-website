import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies, services } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const serviceHeroContent: Record<string, {
  eyebrow: string;
  heading: string;
  body: string;
  painPoints: string[];
  proofTitle: string;
  proofItems: string[];
}> = {
  "virtual-assistant": {
    eyebrow: "Virtual Assistant Services",
    heading: "Drowning in inbox, scheduling, and daily admin? Get a virtual assistant who keeps operations on track.",
    body: "For founders, consultants, agencies, and busy operators who need reliable help with inbox management, calendar coordination, task follow-up, and daily admin support.",
    painPoints: [
      "Missed follow-ups hurt momentum",
      "Calendar conflicts waste time",
      "Repetitive admin keeps pulling you off real work",
    ],
    proofTitle: "Daily admin support",
    proofItems: ["Inbox management", "Calendar coordination", "Task follow-up"],
  },
  "bookkeeping-accounting": {
    eyebrow: "Bookkeeping Support",
    heading: "Messy books and late reconciliations slowing decisions? Get bookkeeping support that keeps your numbers clean.",
    body: "For founders and small business teams that need consistent bookkeeping follow-through, cleaner records, reporting prep, and less financial admin piling up each month.",
    painPoints: [
      "Expenses and records are hard to track",
      "Reconciliations keep getting delayed",
      "Reporting prep takes too much time",
    ],
    proofTitle: "Consistent monthly bookkeeping",
    proofItems: ["Expense tracking", "Reconciliation support", "Reporting prep"],
  },
  "automation-digital-marketing": {
    eyebrow: "Automation & Marketing Support",
    heading: "Leads falling through and campaign tasks stalling? Get automation and marketing support that keeps growth moving.",
    body: "For founders, service businesses, and lean teams that need better lead handling, smoother campaign execution, and less manual follow-up in their growth workflow.",
    painPoints: [
      "Lead follow-up is too slow",
      "Campaign tasks stall without ownership",
      "Manual reporting and repeat work waste time",
    ],
    proofTitle: "Growth execution support",
    proofItems: ["Lead management", "Campaign execution", "Automation workflows"],
  },
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const hero = serviceHeroContent[service.slug];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-12">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">{hero.eyebrow}</span>
              <h1 className="mt-5 section-title max-w-[820px] text-[clamp(2.5rem,5vw,4.7rem)]">
                {hero.heading}
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-8 text-[var(--color-slate)] md:text-lg">
                {hero.body}
              </p>
              <div className="check-list mt-8">
                {hero.painPoints.map((point) => (
                  <div key={point} className="check-item">{point}</div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-purple)]">What gets handled</p>
                  <h2 className="font-[var(--font-display)] text-[1.55rem] font-[800] text-[var(--color-ink)]">{hero.proofTitle}</h2>
                  <div className="mt-5 grid gap-3">
                    {hero.proofItems.map((item) => (
                      <div key={item} className="rounded-[1rem] border border-[rgba(99,91,255,0.12)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bezel-shell">
                <div className="hero-proof-summary template-card">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.05em] text-[var(--color-brand-orange)]">Free 30-minute consultation</p>
                  <p className="text-sm leading-7 text-[var(--color-slate)]">
                    Map the bottlenecks, clarify the first handoff, and decide what needs support before the work begins.
                  </p>
                  <Link href="/contact#intake-form" className="template-btn mt-5 w-full justify-center">
                    <span>Load Intake Form</span>
                    <span className="template-btn-icon" aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <SectionHeading
              eyebrow="What’s included"
              title="Support you can hand over with clear expectations."
              body="This is built around practical workload coverage rather than vague assistance promises."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-brand-orange)]" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="section-card rounded-[1.8rem] p-6">
            <SectionHeading
              eyebrow="Expected outcomes"
              title="The operational lift this service is meant to create."
              body="We focus on smoother operating flow, stronger follow-through, and less leadership time trapped in detail."
            />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--color-slate)]">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-brand-purple)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="section-card rounded-[1.8rem] p-6">
          <SectionHeading
            eyebrow="Related proof"
            title="Case studies that show how support translates into business momentum."
            body="The same support model shows up differently across industries, but the pattern is consistent: cleaner processes, steadier execution, and less drag on senior people."
          />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="rounded-[1.4rem] border border-[rgba(99,91,255,0.1)] bg-white p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">
                  {study.industry}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  {study.summary}
                </p>
              </Link>
            ))}
          </div>
        </article>

        <article className="section-card rounded-[1.8rem] p-6">
          <SectionHeading
            eyebrow="FAQ"
            title="The questions that usually come up before work starts."
            body="Clear scope and communication expectations are part of the service, not an afterthought."
          />
          <div className="mt-7 grid gap-4">
            {service.faq.map((item) => (
              <div key={item.question} className="rounded-[1.4rem] border border-[rgba(99,91,255,0.1)] bg-white p-5">
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
