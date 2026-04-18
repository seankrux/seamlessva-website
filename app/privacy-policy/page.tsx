import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { company } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Seamless VA privacy policy covering inquiry information, communications, and site usage.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="pb-20 pt-10 md:pt-16">
      <div className="section-shell">
        <article className="section-card content-copy rounded-[2rem] p-7 md:p-10">
          <span className="eyebrow">Legal</span>
          <h1 className="section-subtitle mt-5">Privacy Policy</h1>
          <div className="mt-6 space-y-4 text-sm">
            <p>
              Seamless VA collects contact information you choose to provide when
              you email, call, or request a consultation through the site.
            </p>
            <p>
              We use that information to respond to inquiries, discuss potential
              services, and maintain the communication needed to deliver support.
            </p>
            <p>
              We do not sell personal information. Operational and marketing tools
              may process data on our behalf in the normal course of running the
              business.
            </p>
            <p>
              If you want your information updated or removed, contact{" "}
              <a href={`mailto:${company.email}`} className="link-accent">
                {company.email}
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
