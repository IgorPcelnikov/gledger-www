import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — GLedger.ai",
  description:
    "Simple, transparent pricing. Start free and scale as you grow.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with core accounting features at no cost.",
    cta: "Get Started Free",
    ctaStyle:
      "border border-border text-foreground hover:bg-surface hover:border-primary/30",
    features: [
      "1 company",
      "Up to 500 transactions / month",
      "Basic chart of accounts",
      "Balance sheet & income statement",
      "AI workspace (10 queries / day)",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per user / month",
    description:
      "The full platform for growing businesses with industry-specific tools and analytics.",
    cta: "Start Free Trial",
    ctaStyle:
      "bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:shadow-primary/30 shadow-md shadow-primary/20",
    popular: true,
    features: [
      "Up to 5 companies",
      "Unlimited transactions",
      "Custom chart of accounts",
      "All financial reports",
      "AI workspace (unlimited)",
      "Multi-user access & roles",
      "Extensions Marketplace access",
      "Industry extensions for your vertical",
      "Third-party system integrations",
      "Looker dashboards & built-in BI",
      "Period management & fiscal year close",
      "Data export (CSV, PDF)",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For organizations that need advanced compliance, analytics, and dedicated infrastructure.",
    cta: "Contact Sales",
    ctaHref: "/contact",
    ctaStyle:
      "border border-border text-foreground hover:bg-surface hover:border-primary/30",
    features: [
      "Unlimited companies",
      "Unlimited transactions",
      "Everything in Pro",
      "SSO / SAML authentication",
      "Audit log & compliance tools",
      "Custom & private extensions",
      "BigQuery data export for your own BI",
      "Deployable on your GCP infrastructure",
      "Dedicated account manager",
      "SLA & uptime guarantees",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative bg-white py-24 noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-overline text-primary">Pricing</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Plans that grow with you
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-text-secondary">
              Start free. Upgrade when you&apos;re ready. No hidden fees, no
              lock-in, cancel anytime.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                  plan.popular
                    ? "border-primary/40 bg-gradient-to-b from-white via-white to-primary-light/15 shadow-xl shadow-primary/8 ring-1 ring-primary/30"
                    : "border-border bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md shadow-primary/20">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-5xl font-extrabold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-medium text-text-secondary">
                        / {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-8">
                  {plan.ctaHref ? (
                    <Link
                      href={plan.ctaHref}
                      className={`flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all ${plan.ctaStyle}`}
                    >
                      {plan.cta}
                    </Link>
                  ) : (
                    <a
                      href="https://portal.gledger.ai"
                      className={`flex h-12 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all ${plan.ctaStyle}`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>

                <div className="mt-8 border-t border-border pt-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="mt-0.5 h-4.5 w-4.5 shrink-0 text-green"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="text-sm leading-snug text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Extensions callout */}
          <div className="mx-auto mt-24 max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-8 sm:p-12">
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-primary/5 to-green/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-green/5 to-primary/5 blur-2xl" />
              <div className="relative text-center">
                <p className="section-overline text-green">Coming Soon</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">
                  Extensions Marketplace
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-secondary">
                  Extend GLedger with industry-specific modules and third-party
                  system integrations. Connect your existing tools, automate
                  data flows, and tailor the platform to your vertical — from
                  e-commerce and SaaS to professional services and beyond.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                  {[
                    "Retail & E-commerce",
                    "SaaS & Subscriptions",
                    "Professional Services",
                    "Healthcare",
                    "Construction",
                    "Hospitality",
                    "Bank Feeds",
                    "Payment Processors",
                    "ERP Connectors",
                  ].map((ext) => (
                    <span
                      key={ext}
                      className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-primary/20 hover:text-foreground"
                    >
                      {ext}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Data & BI callout */}
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-primary-light to-blue-50 p-3 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                  </svg>
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">
                  Built-in BI with Looker
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Pro plans include Looker-powered dashboards for real-time
                  financial insights, trend analysis, and custom reporting
                  without leaving GLedger.
                </p>
                <p className="mt-3 text-xs font-medium text-primary">
                  Included in Pro
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-white p-8">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-3 text-green">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <h4 className="mt-4 text-base font-semibold text-foreground">
                  BigQuery Data Export
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Enterprise customers can push financial data to BigQuery for
                  advanced analytics, custom dashboards, and integration with
                  your existing BI stack.
                </p>
                <p className="mt-3 text-xs font-medium text-green">
                  Enterprise plan
                </p>
              </div>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className="mx-auto mt-24 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Not sure which plan fits?
            </h2>
            <p className="mt-4 text-text-secondary">
              <Link
                href="/contact"
                className="font-medium text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary hover:text-primary-dark transition-colors"
              >
                Talk to our team
              </Link>{" "}
              — we&apos;ll help you find the right setup for your business.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
