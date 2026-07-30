import { createFileRoute } from "@tanstack/react-router";
import { CalculatorShell } from "@/components/CalculatorShell";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <CalculatorShell
      title="Privacy Policy"
      description="How we protect your data and respect your privacy."
      hideRelated={true}
      hideBadge={true}
    >
      <div className="prose-custom max-w-3xl">
        <p className="lead">Last Updated: July 2026</p>
        <p>
          At Instant calculators, we take your privacy seriously. This Privacy Policy explains how
          we collect, use, and protect your information when you use our website and calculators.
        </p>
        <h2>Data Collection and Usage</h2>
        <p>
          Instant calculators is designed as a privacy-first platform. All calculations performed
          using our tools (such as the EMI calculator, SIP calculator, etc.) are executed{" "}
          <strong>locally in your browser</strong>.
        </p>
        <ul>
          <li>
            We do <strong>not</strong> collect, transmit, or store any of the financial numbers you
            enter into our calculators.
          </li>
          <li>
            We do <strong>not</strong> require you to create an account or provide personal
            information to use our core tools.
          </li>
          <li>Your financial data never leaves your device.</li>
        </ul>
        <h2>Analytics and Cookies</h2>
        <p>
          We use standard, privacy-respecting analytics tools to understand how our website is used
          (e.g., measuring page views and identifying which calculators are most popular). These
          tools may use cookies or similar technologies. The data collected is aggregated and
          anonymized, and cannot be used to identify you personally or see the financial data you
          input.
        </p>
        <h2>Third-Party Links</h2>
        <p>
          Our website, particularly in our blog section, may contain links to third-party websites.
          Please note that we are not responsible for the privacy practices of such other sites. We
          encourage our users to be aware when they leave our site and to read the privacy
          statements of each and every website that collects personally identifiable information.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated "Last Updated" date. We encourage you to review this Privacy Policy
          periodically for any changes.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please contact us at{" "}
          <a
            href="mailto:privacy@instantcalculators.com"
            className="text-[#184a99] font-semibold hover:underline"
          >
            privacy@instantcalculators.com
          </a>{" "}
          or visit our{" "}
          <a href="/contact" className="text-[#184a99] font-semibold hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </div>
    </CalculatorShell>
  );
}
