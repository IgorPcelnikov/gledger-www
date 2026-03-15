import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI That Understands Accounting",
    description:
      "Describe what you need in plain English. GLedger creates journal entries, classifies transactions, and explains your financial position — no jargon required.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Reports & Built-in BI",
    description:
      "Generate balance sheets, income statements, and trial balances instantly. Looker-powered dashboards give you real-time insight into trends and KPIs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Up and Running in Minutes",
    description:
      "No complex setup or training. Import your chart of accounts or start from a template — GLedger adapts to how you work, not the other way around.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption, full audit trails, and SOC 2 compliance — all running on Google Cloud infrastructure. Your data never leaves your control.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Multi-Entity & Team Ready",
    description:
      "Manage multiple companies from one workspace. Role-based access, real-time collaboration, and consolidated reporting across entities.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: "Extensible by Design",
    description:
      "Industry extensions, third-party integrations, and an open marketplace. Tailor GLedger to your vertical without switching platforms.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your workspace",
    description: "Sign up with Google and set up your first company in under a minute.",
  },
  {
    number: "02",
    title: "Set up your accounts",
    description: "Use an industry template or let AI suggest a chart of accounts for you.",
  },
  {
    number: "03",
    title: "Start recording",
    description: "Create journal entries manually or describe transactions in plain English.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-light/25 via-white to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-br from-primary/4 via-transparent to-green/4 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 sm:pt-36 lg:pt-44">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up">
              <span className="section-overline inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-1.5 text-primary shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2">
                  <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
                AI-Powered Platform
              </span>
            </div>

            <h1 className="animate-fade-in-up-delay-1 mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
              Modern accounting
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-dark to-green bg-clip-text text-transparent animate-gradient">
                without the complexity
              </span>
            </h1>

            <p className="animate-fade-in-up-delay-2 mx-auto mt-7 max-w-xl text-lg leading-relaxed text-text-secondary">
              GLedger gives you the power of a full ERP with the simplicity of
              a modern app. AI handles the bookkeeping — you focus on your
              business.
            </p>

            <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://portal.gledger.ai"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                Start Free
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 text-sm font-semibold text-text-secondary transition-all hover:border-primary/20 hover:text-foreground"
              >
                View Plans
              </Link>
            </div>

            <p className="mt-5 text-xs tracking-wide text-text-secondary/70">
              Free tier included &middot; No credit card required
            </p>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-2xl shadow-black/5">
              <div className="flex items-center gap-2 border-b border-border bg-surface/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red/50" />
                <div className="h-3 w-3 rounded-full bg-yellow/50" />
                <div className="h-3 w-3 rounded-full bg-green/50" />
                <div className="ml-3 h-5 w-px bg-border" />
                <span className="ml-3 text-xs font-medium text-text-secondary/60">
                  GLedger &mdash; AI Workspace
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="border-r border-border/60 bg-surface/40 p-5 md:col-span-1">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 rounded-lg bg-primary/8 px-3 py-2.5 text-sm font-medium text-primary-dark">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                      AI Workspace
                    </div>
                    {["Journal Entries", "Reports", "Accounts"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-text-secondary/70">
                        <div className="h-4 w-4 rounded bg-border/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:col-span-2">
                  <div className="mb-4 rounded-lg bg-surface/60 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-wider text-text-secondary/50">Your prompt</p>
                    <p className="mt-1.5 text-sm text-foreground">
                      &quot;Record the $2,400 annual insurance payment we made today&quot;
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/10 bg-primary/[0.02] p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark">
                        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-white" stroke="currentColor" strokeWidth="2">
                          <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                        </svg>
                      </div>
                      <p className="text-xs font-semibold text-foreground">
                        GLedger AI
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">
                      Created a journal entry for prepaid insurance:
                    </p>
                    <div className="mt-3 overflow-hidden rounded-lg border border-border/60 bg-white">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-border/60 bg-surface/50 text-xs font-medium text-text-secondary/70">
                          <tr>
                            <th className="px-3 py-2">Account</th>
                            <th className="px-3 py-2 text-right">Debit</th>
                            <th className="px-3 py-2 text-right">Credit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40 text-sm">
                          <tr>
                            <td className="px-3 py-2.5 font-medium text-foreground">1400 Prepaid Insurance</td>
                            <td className="px-3 py-2.5 text-right font-mono text-green">2,400.00</td>
                            <td className="px-3 py-2.5 text-right text-text-secondary/40">&mdash;</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2.5 font-medium text-foreground">1000 Cash</td>
                            <td className="px-3 py-2.5 text-right text-text-secondary/40">&mdash;</td>
                            <td className="px-3 py-2.5 text-right font-mono text-red">2,400.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="rounded-lg bg-primary px-3.5 py-1.5 text-xs font-semibold text-white">
                        Post Entry
                      </button>
                      <button className="rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-text-secondary">
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-surface/50 py-28 noise-bg">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-overline text-primary">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need — nothing you don&apos;t
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              A modern alternative to legacy accounting software, designed so
              anyone on your team can use it from day one.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group relative rounded-2xl border border-border/80 bg-white p-7 transition-all hover:border-primary/15 hover:shadow-lg hover:shadow-primary/4 ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="inline-flex rounded-lg border border-border/60 bg-surface/50 p-2.5 text-primary transition-colors group-hover:border-primary/20 group-hover:bg-primary-light/40">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-overline text-green">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Three steps to clarity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              No onboarding calls. No certification. Just sign up and go.
            </p>
          </div>

          <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-7 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent sm:block" />
                )}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface">
                  <span className="text-sm font-bold tracking-wider text-primary">{step.number}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-y border-border/60 bg-surface/30 py-20 noise-bg">
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {[
              { value: "5 min", label: "Average setup time" },
              { value: "10x", label: "Faster than manual bookkeeping" },
              { value: "99.9%", label: "Uptime on Google Cloud" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-8 py-10 text-center">
                <div className="text-3xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-foreground py-24 noise-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green/10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="section-overline text-primary-light/60">Get Started</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your books?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/50">
            Join growing businesses that trust GLedger for their financial
            operations. Start free — upgrade when you&apos;re ready.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://portal.gledger.ai"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-semibold text-foreground shadow-lg transition-all hover:bg-primary-light"
            >
              Start Free
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 px-8 text-sm font-semibold text-white/70 transition-all hover:border-white/25 hover:text-white"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
