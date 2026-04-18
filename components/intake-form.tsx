"use client";

import { useState } from "react";
import { company, services } from "@/lib/site-data";

const serviceOptions = services.map((service) => ({
  value: service.slug,
  label: service.title,
}));

function buildMailtoUrl(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const companyName = String(formData.get("company") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  const subjectParts = ["Seamless VA Intake", companyName || name].filter(Boolean);
  const body = [
    "New intake request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${companyName || "Not provided"}`,
    `Service Needed: ${service || "Not selected"}`,
    `Timeline: ${timeline || "Not provided"}`,
    "",
    "What needs support:",
    details,
  ].join("\n");

  return `mailto:${company.email}?subject=${encodeURIComponent(subjectParts.join(" - "))}&body=${encodeURIComponent(body)}`;
}

export function IntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  return (
    <section id="intake-form" className="section-card rounded-[2rem] p-7 md:p-10 scroll-mt-32">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <span className="template-badge">Project Intake</span>
          <h2 className="section-subtitle mt-5 max-w-[20rem]">Tell us what needs to move off your plate first.</h2>
          <p className="mt-4 text-sm leading-7 text-[var(--color-slate)] md:text-base md:leading-8">
            This form opens an email draft to <a href={`mailto:${company.email}`} className="link-accent">{company.email}</a> with your intake details prefilled.
          </p>
        </div>

        <form
          className="grid gap-5"
          onSubmit={(event) => {
            event.preventDefault();
            setIsSubmitting(true);
            setStatusMessage(`Opening your email app for ${company.email}…`);
            const form = event.currentTarget;
            window.location.href = buildMailtoUrl(new FormData(form));
            setTimeout(() => {
              setIsSubmitting(false);
            }, 800);
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Name</span>
              <input
                className="rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Jane Smith…"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Work Email</span>
              <input
                className="rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                spellCheck={false}
                placeholder="jane@company.com…"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Company</span>
              <input
                className="rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Your company…"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
              <span>Support Lane</span>
              <select
                className="rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a service lane…
                </option>
                {serviceOptions.map((service) => (
                  <option key={service.value} value={service.label}>
                    {service.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
            <span>Timeline</span>
            <input
              className="rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
              type="text"
              name="timeline"
              autoComplete="off"
              placeholder="Example: Need support within 2 weeks…"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-[var(--color-ink)]">
            <span>What needs support?</span>
            <textarea
              className="min-h-[180px] rounded-[1rem] border border-[rgba(11,143,132,0.12)] bg-white px-4 py-3 text-[var(--color-ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-[border-color,box-shadow] duration-300 focus-visible:border-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[rgba(11,143,132,0.14)]"
              name="details"
              autoComplete="off"
              placeholder="Describe the bottlenecks, recurring tasks, or operating drag you want offloaded…"
              required
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-[var(--color-slate)]">
              Submitting opens your default email app with the intake details filled in.
            </p>
            <button type="submit" className="template-btn justify-center" disabled={isSubmitting}>
              <span>{isSubmitting ? "Opening Email…" : "Send Intake"}</span>
              <span className="template-btn-icon" aria-hidden="true">↗</span>
            </button>
          </div>
          <p aria-live="polite" className="text-sm text-[var(--color-slate)]">
            {statusMessage}
          </p>
        </form>
      </div>
    </section>
  );
}
