import { createFileRoute } from "@tanstack/react-router";
import { CalculatorShell } from "@/components/CalculatorShell";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <CalculatorShell
      title="Contact Us"
      description="We'd love to hear from you. Get in touch with the Instant calculators team."
      hideRelated={true}
      hideBadge={true}
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <div>
          <div className="prose-custom">
            <p className="lead mb-8">
              Whether you have a question about our calculators, want to suggest a new feature, or
              need support, our team is here to help.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#172c46]/10 p-3 rounded-full text-[#172c46]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#172c46] text-lg">Email Us</h3>
                <p className="text-gray-600 mt-1">Our friendly team is here to help.</p>
                <a
                  href="mailto:support@instantcalculators.com"
                  className="text-[#184a99] font-semibold mt-1 inline-block hover:underline"
                >
                  support@instantcalculators.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#172c46]/10 p-3 rounded-full text-[#172c46]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#172c46] text-lg">Visit Us</h3>
                <p className="text-gray-600 mt-1">Come say hello at our office HQ.</p>
                <p className="text-[#184a99] font-medium mt-1">
                  100 Financial Way
                  <br />
                  Suite 400
                  <br />
                  Tech District, TD 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#172c46]/10 p-3 rounded-full text-[#172c46]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#172c46] text-lg">Call Us</h3>
                <p className="text-gray-600 mt-1">Mon-Fri from 8am to 5pm.</p>
                <a
                  href="tel:+15551234567"
                  className="text-[#184a99] font-semibold mt-1 inline-block hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-sm">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#172c46]/20 focus:border-[#172c46]/50 transition-colors bg-white"
                placeholder="Jane"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#172c46]/20 focus:border-[#172c46]/50 transition-colors bg-white"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#172c46]/20 focus:border-[#172c46]/50 transition-colors bg-white resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#172c46] hover:bg-[#0c1826] text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </CalculatorShell>
  );
}
