import { createFileRoute } from "@tanstack/react-router";
import { CalculatorShell } from "@/components/CalculatorShell";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <CalculatorShell
      title="About Us"
      description="Learn more about Instant calculators and our mission to simplify personal finance."
      hideRelated={true}
      hideBadge={true}
    >
      <div className="prose-custom max-w-3xl">
        <p className="lead">
          At Instant calculators, we believe that personal finance should be accessible,
          transparent, and easy to understand for everyone. Our mission is to provide powerful,
          free, and private financial tools that help you make informed decisions about your money.
        </p>
        <h2>Our Story</h2>
        <p>
          Instant calculators started with a simple idea: why are financial calculators either too
          basic or hidden behind sign-up walls? We wanted to create a suite of tools that are both
          comprehensive and completely open. Whether you are calculating your retirement corpus,
          planning your retirement, or optimizing your tax strategy, Instant calculators gives you
          the clarity you need without compromising your privacy.
        </p>
        <h2>Privacy First</h2>
        <p>
          We know that your financial data is personal. That's why Instant calculators is built to
          be a <strong>privacy-first</strong> platform. All calculations happen entirely within your
          browser. We do not store, track, or share your financial numbers. There are no accounts to
          create, no passwords to remember, and absolutely no hidden fees.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Transparency:</strong> No hidden terms, no confusing jargon.
          </li>
          <li>
            <strong>Empowerment:</strong> Giving you the knowledge to take control of your finances.
          </li>
          <li>
            <strong>Privacy:</strong> Your data stays on your device, period.
          </li>
          <li>
            <strong>Simplicity:</strong> Clean, intuitive designs that make complex calculations
            easy.
          </li>
        </ul>
        <h2>Get in Touch</h2>
        <p>
          We are constantly working to improve Instant calculators and add new tools. If you have
          any feedback, suggestions, or just want to say hello, feel free to visit our{" "}
          <a href="/contact" className="text-[#184a99] font-semibold hover:underline">
            Contact Us
          </a>{" "}
          page.
        </p>
      </div>
    </CalculatorShell>
  );
}
