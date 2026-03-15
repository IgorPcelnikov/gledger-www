"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gl-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("gl-cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("gl-cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-foreground">
            We value your privacy
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            We use essential cookies to make GLedger work. We&apos;d also like
            to set analytics cookies to understand how you use our site so we
            can improve it. For more details, see our{" "}
            <Link
              href="/privacy"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={decline}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
