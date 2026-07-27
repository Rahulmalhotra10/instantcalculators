import { createFileRoute } from "@tanstack/react-router";
import { CalculatorShell } from "@/components/CalculatorShell";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <CalculatorShell
      title="Terms & Conditions"
      description="The rules and guidelines for using Instant calculators."
      hideRelated={true}
      hideBadge={true}
    >
      <div className="prose-custom max-w-3xl">
        <p className="lead">Last Updated: July 2026</p>
        <p>
          Welcome to Instant calculators. By accessing or using our website and tools, you agree to
          be bound by these Terms and Conditions. Please read them carefully.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Instant calculators, you accept and agree to be bound by the terms
          and provision of this agreement. If you do not agree to abide by these terms, please do
          not use this service.
        </p>
        <h2>2. Educational and Informational Purposes Only</h2>
        <p>
          The calculators, articles, and other content provided on Instant calculators are for{" "}
          <strong>educational and informational purposes only</strong>. They do not constitute
          financial, legal, or tax advice.
        </p>
        <p>
          While we strive to keep the information and calculations accurate and up-to-date, Instant
          calculators makes no representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability, or availability with respect to the
          website or the information, products, services, or related graphics contained on the
          website for any purpose. Any reliance you place on such information is therefore strictly
          at your own risk.
        </p>
        <h2>3. No Professional Relationship</h2>
        <p>
          Your use of Instant calculators does not create a professional-client relationship between
          you and Instant calculators or any of its authors or developers. You should always consult
          with a qualified financial advisor, tax professional, or legal counsel before making any
          significant financial decisions.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          The website and its original content, features, and functionality are owned by Instant
          calculators and are protected by international copyright, trademark, patent, trade secret,
          and other intellectual property or proprietary rights laws.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall Instant calculators, nor its directors, employees, partners, agents,
          suppliers, or affiliates, be liable for any indirect, incidental, special, consequential
          or punitive damages, including without limitation, loss of profits, data, use, goodwill,
          or other intangible losses, resulting from (i) your access to or use of or inability to
          access or use the Service; (ii) any conduct or content of any third party on the Service;
          (iii) any content obtained from the Service; and (iv) unauthorized access, use or
          alteration of your transmissions or content, whether based on warranty, contract, tort
          (including negligence) or any other legal theory.
        </p>
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any
          time. What constitutes a material change will be determined at our sole discretion. By
          continuing to access or use our Service after those revisions become effective, you agree
          to be bound by the revised terms.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a
            href="mailto:legal@instantcalculators.com"
            className="text-[#184a99] font-semibold hover:underline"
          >
            legal@instantcalculators.com
          </a>
          .
        </p>
      </div>
    </CalculatorShell>
  );
}
