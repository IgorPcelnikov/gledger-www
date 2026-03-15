import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GLedger.ai",
  description: "GLedger.ai privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-gradient-to-b from-primary-light/30 via-white to-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-4 text-text-secondary">
          Last updated: March 15, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="text-lg font-semibold text-foreground">
              1. Introduction
            </h2>
            <p className="mt-3">
              GLedger.ai (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
              is committed to protecting your personal data and respecting your
              privacy. This policy explains how we collect, use, store, and
              protect your information when you use our website
              (www.gledger.ai) and our accounting platform
              (portal.gledger.ai).
            </p>
            <p className="mt-2">
              We comply with the EU General Data Protection Regulation (GDPR),
              the UK GDPR, and other applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              2. Data Controller
            </h2>
            <p className="mt-3">
              The data controller responsible for your personal data is
              GLedger.ai. For any privacy inquiries, contact us at{" "}
              <a
                href="mailto:privacy@gledger.ai"
                className="font-medium text-primary hover:text-primary-dark"
              >
                privacy@gledger.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              3. Data We Collect
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <h3 className="font-medium text-foreground">
                  3.1 Information you provide
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Account information (name, email address)</li>
                  <li>Company and financial data you enter into the platform</li>
                  <li>Contact form submissions</li>
                  <li>Billing and payment information</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-foreground">
                  3.2 Information collected automatically
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Usage data (pages visited, features used)</li>
                  <li>Device and browser information</li>
                  <li>IP address and approximate location</li>
                  <li>Cookies and similar technologies (see Section 7)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              4. How We Use Your Data
            </h2>
            <p className="mt-3">We process your personal data to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Provide and maintain the GLedger platform</li>
              <li>Process your transactions and manage your account</li>
              <li>Send service-related communications</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
              <li>Respond to your inquiries and support requests</li>
            </ul>
            <p className="mt-3">
              <strong className="text-foreground">Legal bases (GDPR):</strong>{" "}
              We process data based on contractual necessity (to deliver our
              service), legitimate interests (to improve our platform), consent
              (for analytics cookies), and legal obligations (tax/regulatory
              compliance).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              5. Data Storage & Security
            </h2>
            <p className="mt-3">
              Your data is hosted on Google Cloud Platform (GCP) infrastructure
              with data centers in the United States. We implement
              enterprise-grade security measures including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Encryption at rest and in transit (TLS 1.3)</li>
              <li>Role-based access control</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Automated backups with point-in-time recovery</li>
              <li>Audit logging for all data access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              6. Your Rights (GDPR)
            </h2>
            <p className="mt-3">
              Under the GDPR, you have the following rights regarding your
              personal data:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Right of access</strong> —
                request a copy of your personal data
              </li>
              <li>
                <strong className="text-foreground">Right to rectification</strong> —
                correct inaccurate data
              </li>
              <li>
                <strong className="text-foreground">Right to erasure</strong> —
                request deletion of your data (&quot;right to be
                forgotten&quot;)
              </li>
              <li>
                <strong className="text-foreground">
                  Right to restrict processing
                </strong>{" "}
                — limit how we use your data
              </li>
              <li>
                <strong className="text-foreground">
                  Right to data portability
                </strong>{" "}
                — receive your data in a structured, machine-readable format
              </li>
              <li>
                <strong className="text-foreground">Right to object</strong> —
                object to processing based on legitimate interests
              </li>
              <li>
                <strong className="text-foreground">
                  Right to withdraw consent
                </strong>{" "}
                — withdraw consent at any time for consent-based processing
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@gledger.ai"
                className="font-medium text-primary hover:text-primary-dark"
              >
                privacy@gledger.ai
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              7. Cookies
            </h2>
            <p className="mt-3">We use the following types of cookies:</p>
            <div className="mt-3 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-surface">
                  <tr>
                    <th className="px-4 py-3 font-medium text-foreground">
                      Type
                    </th>
                    <th className="px-4 py-3 font-medium text-foreground">
                      Purpose
                    </th>
                    <th className="px-4 py-3 font-medium text-foreground">
                      Required
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3">Essential</td>
                    <td className="px-4 py-3">
                      Authentication, security, basic functionality
                    </td>
                    <td className="px-4 py-3 text-green">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Analytics</td>
                    <td className="px-4 py-3">
                      Understanding usage patterns to improve the product
                    </td>
                    <td className="px-4 py-3 text-text-secondary">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Preferences</td>
                    <td className="px-4 py-3">
                      Remembering your settings and preferences
                    </td>
                    <td className="px-4 py-3 text-text-secondary">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              You can manage cookie preferences through the consent banner
              displayed on your first visit, or by adjusting your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              8. Data Retention
            </h2>
            <p className="mt-3">
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy. Account data is
              retained while your account is active and for 90 days after
              deletion. Financial data may be retained longer to comply with
              legal and regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              9. International Transfers
            </h2>
            <p className="mt-3">
              Your data may be transferred to and processed in the United
              States where our cloud infrastructure is located. We ensure
              appropriate safeguards are in place, including Standard
              Contractual Clauses (SCCs) approved by the European Commission,
              to protect your data during international transfers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              10. Third-Party Services
            </h2>
            <p className="mt-3">We use the following third-party services:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Google Cloud Platform</strong> —
                infrastructure and data hosting
              </li>
              <li>
                <strong className="text-foreground">Google Gemini AI</strong> —
                AI features (data processed per Google Cloud terms)
              </li>
              <li>
                <strong className="text-foreground">Cloudflare</strong> — DNS,
                security, and bot protection (Turnstile)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              11. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              GLedger is not intended for use by individuals under the age of
              16. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              12. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this privacy policy from time to time. We will
              notify you of significant changes via email or a prominent notice
              on our website. We encourage you to review this policy
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">
              13. Contact & Complaints
            </h2>
            <p className="mt-3">
              If you have questions about this policy or wish to exercise your
              rights, contact us at{" "}
              <a
                href="mailto:privacy@gledger.ai"
                className="font-medium text-primary hover:text-primary-dark"
              >
                privacy@gledger.ai
              </a>
              .
            </p>
            <p className="mt-2">
              If you believe your data protection rights have been violated,
              you have the right to lodge a complaint with your local data
              protection authority.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
