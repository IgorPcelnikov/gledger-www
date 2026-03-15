import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — GLedger.ai",
  description:
    "We're building the future of accounting — powered by AI, designed for humans.",
};

const values = [
  {
    title: "Simplicity first",
    description:
      "Accounting software shouldn't require a certification to use. We strip away the complexity so you can focus on your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "AI as a teammate",
    description:
      "We don't use AI as a gimmick. Our AI workspace genuinely understands accounting and works alongside you to get things done faster.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    title: "Trust & transparency",
    description:
      "Your financial data is sacred. We build with enterprise-grade security, full audit trails, and zero compromises on data privacy.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-light/40 via-green-50/20 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Accounting should be{" "}
              <span className="bg-gradient-to-r from-primary to-green bg-clip-text text-transparent">
                accessible
              </span>{" "}
              to everyone
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              GLedger was born from a simple frustration: why does accounting
              software still feel like it was built for CPAs in the 1990s? We
              set out to build something different — a modern platform where AI
              handles the complexity so you don&apos;t have to.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our story
              </h2>
              <div className="mt-6 space-y-4 text-text-secondary">
                <p>
                  We&apos;re a team of engineers and product thinkers who
                  believe that financial tools should work for people, not
                  against them.
                </p>
                <p>
                  Too many small businesses struggle with accounting — not
                  because the concepts are hard, but because the software makes
                  it hard. We saw an opportunity to use modern AI to bridge the
                  gap between &quot;I need to record this expense&quot; and a
                  proper double-entry journal entry.
                </p>
                <p>
                  GLedger is built on Google Cloud, powered by Gemini AI, and
                  designed from the ground up to be fast, intuitive, and
                  reliable. Whether you&apos;re a solo founder or a finance team
                  managing multiple entities, we&apos;ve got you covered.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-primary-light/20 p-6 text-center">
                <div className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-3xl font-bold text-transparent">
                  2026
                </div>
                <p className="mt-1 text-sm text-text-secondary">Founded</p>
              </div>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-green-50/40 p-6 text-center">
                <div className="bg-gradient-to-r from-green to-green-dark bg-clip-text text-3xl font-bold text-transparent">
                  AI-First
                </div>
                <p className="mt-1 text-sm text-text-secondary">Architecture</p>
              </div>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-primary-light/30 p-6 text-center">
                <div className="bg-gradient-to-r from-primary to-green bg-clip-text text-3xl font-bold text-transparent">
                  Cloud
                </div>
                <p className="mt-1 text-sm text-text-secondary">
                  Native Infrastructure
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-gradient-to-br from-surface to-green-50/30 p-6 text-center">
                <div className="bg-gradient-to-r from-green to-primary bg-clip-text text-3xl font-bold text-transparent">
                  Go + Next
                </div>
                <p className="mt-1 text-sm text-text-secondary">Tech Stack</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-b from-surface via-surface to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What we believe
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-border bg-white p-8"
              >
                <div className="inline-flex rounded-xl bg-gradient-to-br from-primary-light to-green-50/50 p-3 text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Want to learn more?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-text-secondary">
            We&apos;d love to show you what GLedger can do for your business.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://portal.gledger.ai"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl"
            >
              Try GLedger Free
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 text-base font-medium text-text-secondary transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary-dark"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
