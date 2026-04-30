import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeroScene } from "@/components/hero-scene";
import { SectionHeading } from "@/components/site-shell";
import { createPageMetadata } from "@/lib/metadata";
import { caseStudies, services } from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

const serviceHeroContent: Record<string, {
  eyebrow: string;
  heading: string;
  subheading: string;
  body: string;
  painPoints: string[];
  variant: "virtual-assistant" | "bookkeeping" | "automation";
}> = {
  "virtual-assistant": {
    eyebrow: "Virtual Assistant",
    heading: "Book Support That Keeps Work Moving",
    subheading: "Virtual Assistant Services",
    body: "Inbox, scheduling, follow-ups, and daily admin handled with clear ownership for founders and lean teams.",
    painPoints: ["Inbox management", "Calendar coordination", "Task follow-up"],
    variant: "virtual-assistant",
  },
  "bookkeeping-accounting": {
    eyebrow: "Bookkeeping",
    heading: "Get Cleaner Books Faster",
    subheading: "Bookkeeping Support",
    body: "Transaction tracking, reconciliations, and reporting prep that help founders and small teams keep numbers clean.",
    painPoints: ["Expense tracking", "Reconciliation support", "Reporting prep"],
    variant: "bookkeeping",
  },
  "automation-digital-marketing": {
    eyebrow: "Automation & Marketing",
    heading: "Get Growth Work Moving",
    subheading: "Automation & Marketing Support",
    body: "Lead handling, campaign execution, and smart workflows that cut repeat manual work for lean teams.",
    painPoints: ["Lead management", "Campaign execution", "Workflow automation"],
    variant: "automation",
  },
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const hero = serviceHeroContent[service.slug];

  return (
    <section className="pb-20 pt-6 md:pt-10">
      <div className="section-shell space-y-12">
        <div className="hero-surface px-6 py-10 md:px-10 md:py-12">
          <div className="hero-grid section-shell !w-full">
            <div className="min-w-0">
              <span className="template-badge">{hero.eyebrow}</span>
              <h1 className="mt-5 section-title max-w-[760px]">
                <span className="block text-[var(--color-ink)]">{hero.subheading}</span>
                <span className="block text-[var(--color-brand-green)]">{hero.heading}</span>
              </h1>
              <p className="hero-copy">{hero.body}</p>
              <div className="check-list mt-8">
                {hero.painPoints.map((point) => <div key={point} className="check-item">{point}</div>)}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
            <HeroScene variant={hero.variant} />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="section-card rounded-[1.8rem] p-6">
            <SectionHeading eyebrow="Included" title="Clear Workload Coverage" body="Practical support coverage without vague assistance promises." />
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
            <SectionHeading eyebrow="Outcomes" title="Less Drag, More Follow-Through" body="Support designed for smoother flow, clearer ownership, and less leadership cleanup." />
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
          <SectionHeading eyebrow="Proof" title="Related Case Studies" body="See how cleaner support workflows translate into better operating rhythm." />
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="rounded-[1.4rem] border border-[rgba(36,242,178,0.16)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-purple)]">{study.industry}</p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-slate)]">{study.summary}</p>
              </Link>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
