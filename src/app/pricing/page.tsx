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
    description: "Perfect for freelancers and small projects getting started.",
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
    period: "per month",
    description:
      "For growing businesses that need more power and flexibility.",
    cta: "Start Free Trial",
    ctaStyle: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25",
    popular: true,
    features: [
      "Up to 5 companies",
      "Unlimited transactions",
      "Custom chart of accounts",
      "All financial reports",
      "AI workspace (unlimited)",
      "Multi-user access & roles",
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
      "For organizations with advanced needs and compliance requirements.",
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
      "Custom integrations",
      "Dedicated account manager",
      "SLA & uptime guarantees",
      "On-premise deployment option",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-text-secondary">
            Start free. Upgrade when you&apos;re ready. No hidden fees, no
            surprises.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-primary bg-white shadow-xl shadow-primary/10 ring-1 ring-primary"
                  : "border-border bg-white hover:border-primary/20 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-text-secondary">
                      / {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-text-secondary">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8">
                {plan.ctaHref ? (
                  <Link
                    href={plan.ctaHref}
                    className={`flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium transition-all ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <a
                    href="https://portal.gledger.ai"
                    className={`flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium transition-all ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 h-5 w-5 shrink-0 text-green"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Questions? We&apos;re here to help.
          </h2>
          <p className="mt-4 text-text-secondary">
            Not sure which plan is right for you?{" "}
            <Link
              href="/contact"
              className="font-medium text-primary hover:text-primary-dark"
            >
              Get in touch
            </Link>{" "}
            and we&apos;ll help you find the perfect fit.
          </p>
        </div>
      </div>
    </section>
  );
}
