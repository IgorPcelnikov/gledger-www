"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-white">G</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-foreground">
            GLedger<span className="text-primary">.ai</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="https://help.gledger.ai"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://portal.gledger.ai"
            className="rounded-lg px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
          >
            Sign In
          </a>
          <a
            href="https://portal.gledger.ai"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Get Started Free
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-surface md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/#features"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://help.gledger.ai"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <hr className="border-border" />
            <a
              href="https://portal.gledger.ai"
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface"
            >
              Sign In
            </a>
            <a
              href="https://portal.gledger.ai"
              className="rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-white"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
