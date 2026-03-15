import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — GLedger.ai",
  description:
    "We're building the future of accounting — powered by AI, designed for humans.",
};

const values = [
  {
    title: "Simplicity over ceremony",
    description:
      "Accounting software shouldn't require a certification. We eliminate friction so you spend less time on the tool and more time on your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "AI that earns its place",
    description:
      "Our AI workspace genuinely understands double-entry accounting. It's not a chatbot bolted on — it's the core of how GLedger works.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    title: "Your data, your control",
    description:
      "Enterprise-grade encryption, complete audit trails, and GDPR compliance. Financial data is sacred — we treat it that way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white py-24 noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/25 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-overline text-primary">About GLedger</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Accounting should be{" "}
              <span className="bg-gradient-to-r from-primary to-green bg-clip-text text-transparent">
                accessible
              </span>{" "}
              to everyone
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              We started GLedger because accounting software still feels like
              it was built for CPAs in the 1990s. We believe AI can bridge the
              gap between &quot;I need to record this&quot; and a proper
              double-entry journal entry.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-border/60 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-overline text-text-secondary">Our story</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
                Built by engineers who needed better tools
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-text-secondary">
                <p>
                  Too many small businesses struggle with accounting — not
                  because the concepts are hard, but because the software makes
                  it hard. We saw an opportunity to use modern AI to make
                  professional-grade financial management available to everyone.
                </p>
                <p>
                  GLedger runs on Google Cloud, uses Gemini for its AI
                  workspace, and is designed from the ground up to be fast,
                  reliable, and intuitive. Whether you&apos;re a solo founder
                  or a finance team managing multiple entities, the platform
                  scales with you.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "2026", label: "Founded" },
                { value: "AI-native", label: "Architecture" },
                { value: "Google Cloud", label: "Infrastructure" },
                { value: "Go + Next.js", label: "Tech Stack" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/80 bg-surface/50 p-5 text-center"
                >
                  <div className="text-lg font-bold text-foreground">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border/60 bg-surface/30 py-24 noise-bg">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-overline text-primary">Principles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              What we believe
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border/80 bg-white p-7"
              >
                <div className="inline-flex rounded-lg border border-border/60 bg-surface/50 p-2.5 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            See it in action
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">
            Start with the free tier or reach out to learn how GLedger
            fits your workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://portal.gledger.ai"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl"
            >
              Try GLedger Free
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 text-sm font-semibold text-text-secondary transition-all hover:border-primary/20 hover:text-foreground"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
