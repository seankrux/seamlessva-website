import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Seamless VA terms of use for site visitors, consultation requests, and service discussions.",
};

export default function TermsPage() {
  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell">
        <article className="section-card content-copy rounded-[2rem] p-7 md:p-10">
          <span className="eyebrow">Legal</span>
          <h1 className="section-subtitle mt-5">Terms of Use</h1>
          <div className="mt-6 space-y-4 text-sm">
            <p>
              This website is provided to explain Seamless VA services and to make
              it easier for prospective clients to start a conversation.
            </p>
            <p>
              Site content is for informational purposes only and does not create
              a client relationship on its own. Service work begins only after the
              scope, terms, and operating expectations are agreed directly.
            </p>
            <p>
              You may not copy, scrape, or republish site materials for unlawful
              or misleading purposes. If you have questions about service terms,
              email{" "}
              <a href="mailto:sales@seamlessva.com" className="link-accent">
                sales@seamlessva.com
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
