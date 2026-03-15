import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              AI-powered accounting platform that makes financial management
              accessible to everyone.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/#features"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <a
                  href="https://help.gledger.ai"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://portal.gledger.ai"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="https://portal.gledger.ai"
                  className="text-sm text-text-secondary transition-colors hover:text-foreground"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} GLedger.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <a
              href="#"
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
