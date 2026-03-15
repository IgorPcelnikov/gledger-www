"use client";

import { useState, useRef, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const topics = [
    { value: "general", label: "General inquiry" },
    { value: "pricing", label: "Pricing & plans" },
    { value: "enterprise", label: "Enterprise sales" },
    { value: "support", label: "Technical support" },
    { value: "partnership", label: "Partnership" },
  ];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to API (SendGrid / Resend / Google Cloud Functions)
    // TODO: validate Turnstile token server-side
    setSubmitted(true);
  }

  function handleTopicSelect(value: string) {
    setSelectedTopic(value);
    setSelectOpen(false);
  }

  const selectedLabel =
    topics.find((t) => t.value === selectedTopic)?.label ?? "";

  return (
    <section className="bg-gradient-to-b from-primary-light/30 via-white to-white py-24">
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
            <div className="rounded-2xl border border-green/30 bg-gradient-to-br from-green-50 to-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green to-green-dark">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7 text-white"
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

              {/* Custom styled select */}
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="hidden"
                  name="subject"
                  value={selectedTopic}
                  required
                />
                <div className="relative mt-2" ref={selectRef}>
                  <button
                    type="button"
                    onClick={() => setSelectOpen(!selectOpen)}
                    className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition-colors ${
                      selectOpen
                        ? "border-primary ring-2 ring-primary/10"
                        : "border-border"
                    } ${selectedTopic ? "text-foreground" : "text-text-secondary/50"}`}
                  >
                    <span>{selectedLabel || "Select a topic"}</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-5 w-5 text-text-secondary transition-transform ${
                        selectOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {selectOpen && (
                    <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-border bg-white shadow-lg shadow-primary/5">
                      {topics.map((topic) => (
                        <button
                          key={topic.value}
                          type="button"
                          onClick={() => handleTopicSelect(topic.value)}
                          className={`flex w-full items-center px-4 py-3 text-left text-sm transition-colors hover:bg-primary-light/50 ${
                            selectedTopic === topic.value
                              ? "bg-primary-light font-medium text-primary-dark"
                              : "text-foreground"
                          }`}
                        >
                          {selectedTopic === topic.value && (
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="mr-2 h-4 w-4 text-primary"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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

              {/* Cloudflare Turnstile */}
              <div
                className="cf-turnstile"
                data-sitekey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAACrO3ywEyUEn0cuo"
                }
                data-theme="light"
              />

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-text-secondary">
                We typically respond within one business day. Protected by
                Cloudflare Turnstile.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
