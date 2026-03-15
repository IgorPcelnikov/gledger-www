"use client";

import { useState, type FormEvent } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API (SendGrid / Resend / Google Cloud Functions)
    setSubmitted(true);
  }

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Have a question about GLedger? Want to discuss enterprise pricing?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          {submitted ? (
            <div className="rounded-2xl border border-green/30 bg-green-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-green"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-foreground">
                Message sent!
              </h2>
              <p className="mt-2 text-text-secondary">
                Thanks for reaching out. We&apos;ll get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company
                  <span className="ml-1 text-text-secondary">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="general">General inquiry</option>
                  <option value="pricing">Pricing & plans</option>
                  <option value="enterprise">Enterprise sales</option>
                  <option value="support">Technical support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder-text-secondary/50 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-text-secondary">
                We typically respond within one business day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
