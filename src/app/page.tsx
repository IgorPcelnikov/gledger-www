import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: "AI That Understands Accounting",
    description:
      "Ask questions in plain English. GLedger's AI workspace helps you create journal entries, run reports, and understand your financials — no jargon required.",
    color: "text-primary",
    bg: "bg-gradient-to-br from-primary-light to-blue-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "Beautiful Financial Reports",
    description:
      "Generate balance sheets, income statements, and trial balances instantly. Export to PDF or share with your team — always up to date.",
    color: "text-green",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: "Get Started in Minutes",
    description:
      "No complex setup. No training needed. Import your chart of accounts or start fresh — GLedger adapts to how you work, not the other way around.",
    color: "text-primary-dark",
    bg: "bg-gradient-to-br from-primary-light/60 to-green-50/60",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Enterprise-Grade Security",
    description:
      "Your financial data is protected with bank-level encryption, SOC 2 compliance, and runs on Google Cloud infrastructure. Data never leaves your control.",
    color: "text-green-dark",
    bg: "bg-gradient-to-br from-green-50 to-primary-light/30",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Built for Teams",
    description:
      "Multi-company support, role-based access, and real-time collaboration. Everyone sees the same numbers, always in sync.",
    color: "text-primary",
    bg: "bg-gradient-to-br from-primary-light to-indigo-50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Real-Time Posting",
    description:
      "Post journal entries and see your financial position update instantly. Period management, fiscal year close, and audit trails built in.",
    color: "text-green",
    bg: "bg-gradient-to-br from-green-50 to-teal-50",
  },
];

const steps = [
  {
    number: "1",
    title: "Create your workspace",
    description: "Sign up with Google and set up your first company in under a minute.",
  },
  {
    number: "2",
    title: "Set up your chart of accounts",
    description: "Use a template or let AI suggest one based on your industry.",
  },
  {
    number: "3",
    title: "Start recording transactions",
    description: "Create journal entries manually or let AI do it from plain English descriptions.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-green-50/60" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-green/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-green/5 to-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-32 lg:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-light to-green-50 px-4 py-1.5 text-sm font-medium text-primary-dark ring-1 ring-primary/10">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                  <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
                Powered by AI
              </span>
            </div>

            <h1 className="animate-fade-in-up-delay-1 mt-8 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Accounting that{" "}
              <span className="bg-gradient-to-r from-primary via-primary-dark to-green bg-clip-text text-transparent animate-gradient">
                works for you
              </span>
            </h1>

            <p className="animate-fade-in-up-delay-2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              GLedger is an AI-powered accounting platform that makes financial
              management accessible to everyone. No accounting degree required —
              just describe what you need in plain English.
            </p>

            <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://portal.gledger.ai"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-base font-medium text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Get Started Free
              </a>
              <Link
                href="/pricing"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 text-base font-medium text-text-secondary transition-all hover:border-primary/30 hover:bg-primary-light hover:text-primary-dark"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-5 text-sm text-text-secondary">
              Free tier available &middot; No credit card required
            </p>
          </div>

          {/* Hero visual */}
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/10">
              <div className="flex items-center gap-2 border-b border-border bg-gradient-to-r from-surface to-surface-alt px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red/60" />
                <div className="h-3 w-3 rounded-full bg-yellow/60" />
                <div className="h-3 w-3 rounded-full bg-green/60" />
                <span className="ml-3 text-xs text-text-secondary">
                  GLedger AI Workspace
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="border-r border-border bg-gradient-to-b from-surface-alt/50 to-surface/30 p-6 md:col-span-1">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary-light to-blue-50 px-3 py-2 text-sm font-medium text-primary-dark">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                      AI Workspace
                    </div>
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                      </svg>
                      Journal Entries
                    </div>
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                      </svg>
                      Reports
                    </div>
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-text-secondary hover:bg-surface">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                      Accounts
                    </div>
                  </div>
                </div>
                <div className="p-6 md:col-span-2">
                  <div className="mb-4 rounded-xl bg-gradient-to-r from-surface to-surface-alt/50 p-4">
                    <p className="text-sm text-text-secondary">You asked:</p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      &quot;Record the $2,400 annual insurance payment we made today&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary-light/30 to-green-50/20 p-4">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                      </svg>
                      <p className="text-sm font-medium text-primary-dark">
                        GLedger AI
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-foreground">
                      I&apos;ll create a journal entry for the prepaid insurance:
                    </p>
                    <div className="mt-3 overflow-hidden rounded-lg border border-border bg-white">
                      <table className="w-full text-left text-sm">
                        <thead className="border-b border-border bg-gradient-to-r from-surface to-surface-alt/50 text-xs text-text-secondary">
                          <tr>
                            <th className="px-3 py-2">Account</th>
                            <th className="px-3 py-2 text-right">Debit</th>
                            <th className="px-3 py-2 text-right">Credit</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr>
                            <td className="px-3 py-2 font-medium">1400 · Prepaid Insurance</td>
                            <td className="px-3 py-2 text-right text-green">$2,400.00</td>
                            <td className="px-3 py-2 text-right">—</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 font-medium">1000 · Cash</td>
                            <td className="px-3 py-2 text-right">—</td>
                            <td className="px-3 py-2 text-right text-red">$2,400.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="rounded-lg bg-gradient-to-r from-primary to-primary-dark px-3 py-1.5 text-xs font-medium text-white">
                        Post Entry
                      </button>
                      <button className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-text-secondary">
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
      <section id="features" className="bg-gradient-to-b from-surface via-surface to-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to manage your finances
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Professional accounting tools powered by AI, designed so anyone
              can use them confidently from day one.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`inline-flex rounded-xl ${feature.bg} p-3 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
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
      <section className="bg-gradient-to-b from-white via-white to-primary-light/20 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Up and running in three steps
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              No lengthy onboarding. No training sessions. Just sign up and start.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-xl font-bold text-white shadow-lg shadow-primary/20">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
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

      {/* Social proof */}
      <section className="bg-gradient-to-b from-primary-light/20 via-surface to-surface py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for the way businesses actually work
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Whether you&apos;re a freelancer tracking expenses or a growing
              company managing multiple entities, GLedger scales with you.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-primary-light/20 p-8 text-center">
              <div className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-4xl font-bold text-transparent">
                5 min
              </div>
              <p className="mt-2 text-sm text-text-secondary">
                Average setup time
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-green-50/60 p-8 text-center">
              <div className="bg-gradient-to-r from-green to-green-dark bg-clip-text text-4xl font-bold text-transparent">
                10x
              </div>
              <p className="mt-2 text-sm text-text-secondary">
                Faster than manual bookkeeping
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-primary-light/20 p-8 text-center">
              <div className="bg-gradient-to-r from-primary to-green bg-clip-text text-4xl font-bold text-transparent">
                99.9%
              </div>
              <p className="mt-2 text-sm text-text-secondary">
                Uptime on Google Cloud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-green-dark py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to simplify your accounting?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join businesses that use GLedger to manage their finances with
            confidence. Start free — no credit card required.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://portal.gledger.ai"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-base font-medium text-primary-dark shadow-lg transition-all hover:bg-primary-light"
            >
              Get Started Free
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/30 px-8 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
