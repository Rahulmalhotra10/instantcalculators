import { Link, createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/blogs/old-vs-new-tax-regime-2026-complete-guide")({
  component: BlogPost,
});

function BlogPost() {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-['Manrope'] antialiased">
      <div className="relative z-10 bg-white">
        <div className="hero-shell relative bg-[#172c46] overflow-hidden rounded-[50px] mx-[40px] px-0 mt-[15px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />

          <Nav variant="dark" />

          <div className="relative mx-auto max-w-4xl px-6 py-20 text-center text-white">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm border border-white/20">
              Personal Finance
            </div>

            <h1 className="mb-6 font-['Bricolage_Grotesque'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Old vs New Tax Regime 2026: <span className="text-[#fbbf24]">The Complete Guide</span>{" "}
              for Salaried Indians
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/70">
              <span className="flex items-center gap-2">🗓 July 30, 2026</span>
              <span className="flex items-center gap-2">⏱ 13 min read</span>
              <span className="flex items-center gap-2">✍️ Instant Calculators Team</span>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-3xl px-6 py-16">
          <nav className="mb-12 rounded-3xl border border-[#172c46]/10 bg-[#f8fafc] p-8">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#172c46]">
              📋 Table of Contents
            </h3>
            <ol className="space-y-3 text-[#11241C] list-decimal pl-5 marker:font-bold marker:text-[#172c46]/50">
              <li>
                <a
                  href="#why-it-matters"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Why This Decision Matters More Than Ever in 2026
                </a>
              </li>
              <li>
                <a
                  href="#new-regime-slabs"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  New Tax Regime: Slabs, Rates &amp; What Changed in 2026
                </a>
              </li>
              <li>
                <a
                  href="#old-regime-slabs"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Old Tax Regime: Slabs, Deductions &amp; Who Benefits
                </a>
              </li>
              <li>
                <a
                  href="#key-deductions"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Every Major Deduction Explained (80C, HRA, NPS &amp; More)
                </a>
              </li>
              <li>
                <a
                  href="#comparison-table"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Side-by-Side Regime Comparison Table
                </a>
              </li>
              <li>
                <a
                  href="#real-examples"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Real Salary Examples: ₹6L, ₹10L, ₹15L, ₹25L &amp; ₹50L
                </a>
              </li>
              <li>
                <a
                  href="#who-should"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Who Should Choose Which Regime?
                </a>
              </li>
              <li>
                <a href="#mistakes" className="hover:text-[#172c46] hover:underline transition-all">
                  5 Tax Planning Mistakes That Cost Indians Lakhs
                </a>
              </li>
              <li>
                <a
                  href="#how-to-switch"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  How to Switch Between Regimes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#172c46] hover:underline transition-all">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#conclusion"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Final Decision Framework + Free Calculator
                </a>
              </li>
            </ol>
          </nav>
          <article className="prose prose-lg max-w-none prose-headings:font-['Bricolage_Grotesque'] prose-headings:text-black prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline">
            <h2
              id="why-it-matters"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Why This Decision Matters More Than Ever in 2026
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Every year when the financial year begins, millions of Indian salaried employees face
              the same form from their HR department:{" "}
              <em>"Please declare your tax regime for FY 2026–27."</em> For most people, it's a
              confusing checkbox they tick without fully understanding the financial consequences.
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Here's why this matters so much: choosing the wrong tax regime could cost you anywhere
              between <strong>₹10,000 to ₹1,50,000 in extra taxes per year</strong> — depending on
              your income and deductions. Over a 10-year career, that's lakhs of rupees lost to
              unnecessary taxes simply because you didn't compare properly.
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The good news: once you understand the simple logic behind each regime, the right
              choice becomes obvious for your situation. This guide will walk you through everything
              — and our <a href="/tax">free tax calculator</a> will give you your personalised
              answer in under 60 seconds.
            </p>

            <div className="callout my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                💡 Key context
              </div>
              The new tax regime became the <strong>default regime</strong> from FY 2023-24 onwards.
              If you don't actively choose a regime, your employer will tax you under the new
              regime. However, you can always switch to the old regime by declaring it with your
              employer at the start of the financial year, or at the time of filing your ITR.
            </div>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                🧮 Know Your Tax in 60 Seconds
              </h3>
              <p className="mb-8 text-white/80">
                Enter your salary and deductions and instantly see how much tax you owe under both
                regimes — and which one saves you more.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/tax"
                >
                  Open Free Tax Calculator →
                </a>
              </div>
            </div>

            <h2
              id="new-regime-slabs"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              New Tax Regime: Slabs, Rates &amp; What Changed in 2026
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The new tax regime was introduced in Budget 2020 and has been progressively made more
              attractive. The government's stated goal is to simplify tax filing by eliminating most
              exemptions and deductions in exchange for lower flat rates. In Budget 2025,
              significant changes were made to the slabs, making the new regime the preferred choice
              for a larger number of taxpayers.
            </p>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              New Regime Tax Slabs for FY 2026-27
            </h3>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">Annual Income</th>
                    <th className="p-4 font-bold">Tax Rate (New Regime)</th>
                    <th className="p-4 font-bold">Tax Payable on This Slab</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Up to ₹4,00,000</td>
                    <td className="p-4">NIL</td>
                    <td className="p-4">₹0</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹4,00,001 – ₹8,00,000</td>
                    <td className="p-4">5%</td>
                    <td className="p-4">Up to ₹20,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹8,00,001 – ₹12,00,000</td>
                    <td className="p-4">10%</td>
                    <td className="p-4">Up to ₹40,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹12,00,001 – ₹16,00,000</td>
                    <td className="p-4">15%</td>
                    <td className="p-4">Up to ₹60,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹16,00,001 – ₹20,00,000</td>
                    <td className="p-4">20%</td>
                    <td className="p-4">Up to ₹80,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹20,00,001 – ₹24,00,000</td>
                    <td className="p-4">25%</td>
                    <td className="p-4">Up to ₹1,00,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Above ₹24,00,000</td>
                    <td className="p-4">30%</td>
                    <td className="p-4">30% on income above ₹24L</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout blue my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                🎯 Important Benefit
              </div>
              Under the new regime, <strong>income up to ₹12 lakh is effectively tax-free</strong>{" "}
              for resident individuals, thanks to the Section 87A tax rebate of ₹60,000. For
              salaried individuals, the standard deduction of ₹75,000 pushes this to{" "}
              <strong>₹12.75 lakh effectively tax-free</strong>. This is a massive improvement from
              previous years and the single biggest reason many salaried people now benefit from the
              new regime.
            </div>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              What Deductions Are Available in the New Regime?
            </h3>
            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The new regime is largely a "no deductions" regime — but a few key benefits remain:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
              <li>
                <strong>Standard Deduction:</strong> ₹75,000 for salaried individuals
              </li>
              <li>
                <strong>NPS Employer Contribution:</strong> Deduction under Section 80CCD(2) up to
                14% of basic salary
              </li>
              <li>
                <strong>Agniveer Corpus Contribution:</strong> Exempt under Section 80CCH
              </li>
              <li>
                <strong>Family pension standard deduction:</strong> ₹25,000 or one-third of pension,
                whichever is lower
              </li>
            </ul>
            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Everything else — 80C, HRA, LTA, home loan interest, 80D health insurance — is{" "}
              <strong>not available</strong> in the new regime.
            </p>

            <h2
              id="old-regime-slabs"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Old Tax Regime: Slabs, Deductions &amp; Who Benefits
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The old (or "existing") tax regime has been the foundation of Indian income tax since
              decades. It has higher tax rates than the new regime, but compensates with a rich
              ecosystem of deductions and exemptions that can significantly reduce your taxable
              income if you use them well.
            </p>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              Old Regime Tax Slabs for FY 2026-27
            </h3>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">Annual Income</th>
                    <th className="p-4 font-bold">Tax Rate (Old Regime)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Up to ₹2,50,000</td>
                    <td className="p-4">NIL</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹2,50,001 – ₹5,00,000</td>
                    <td className="p-4">5%</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">₹5,00,001 – ₹10,00,000</td>
                    <td className="p-4">20%</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Above ₹10,00,000</td>
                    <td className="p-4">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              At first glance, the old regime looks far more expensive — 20% kicks in at ₹5 lakh vs
              10% at ₹8 lakh in the new regime. But the old regime's deductions can dramatically
              reduce your <em>taxable</em> income, often making it cheaper for people who invest and
              plan actively.
            </p>

            <div className="pullquote">
              The old regime rewards tax planning. The new regime rewards simplicity. Your lifestyle
              determines which reward matters more.
            </div>

            <h2
              id="key-deductions"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Every Major Deduction Explained
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              If you're considering the old regime, here are the deductions you need to understand
              and claim:
            </p>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">Deduction</th>
                    <th className="p-4 font-bold">Section</th>
                    <th className="p-4 font-bold">Max Amount</th>
                    <th className="p-4 font-bold">Available in New Regime?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Standard Deduction (Salaried)</td>
                    <td className="p-4">—</td>
                    <td className="p-4">₹50,000</td>
                    <td className="p-4">
                      <span className="tag-good">Yes (₹75,000)</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      PPF, ELSS, Life Insurance, EPF, Tuition Fees, Home Loan Principal
                    </td>
                    <td className="p-4">80C</td>
                    <td className="p-4">₹1,50,000</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">NPS (Self contribution)</td>
                    <td className="p-4">80CCD(1B)</td>
                    <td className="p-4">₹50,000 extra</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">NPS (Employer contribution)</td>
                    <td className="p-4">80CCD(2)</td>
                    <td className="p-4">14% of basic salary</td>
                    <td className="p-4">
                      <span className="tag-good">Yes</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Health Insurance Premium</td>
                    <td className="p-4">80D</td>
                    <td className="p-4">₹25,000 (self); ₹50,000 (parents senior)</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">House Rent Allowance (HRA)</td>
                    <td className="p-4">10(13A)</td>
                    <td className="p-4">Varies by city &amp; salary</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Home Loan Interest</td>
                    <td className="p-4">24(b)</td>
                    <td className="p-4">₹2,00,000</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Leave Travel Allowance (LTA)</td>
                    <td className="p-4">10(5)</td>
                    <td className="p-4">Actual travel cost</td>
                    <td className="p-4">
                      <span className="tag-low">No</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Section 87A Rebate</td>
                    <td className="p-4">87A</td>
                    <td className="p-4">Up to ₹12,500 (income ≤ ₹5L)</td>
                    <td className="p-4">
                      <span className="tag-good">Yes (₹60,000 for income ≤ ₹12L)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="callout my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                💡 Total potential old regime deductions
              </div>
              A well-planned salaried individual can claim: ₹50,000 (standard deduction) + ₹1,50,000
              (80C) + ₹50,000 (NPS 80CCD1B) + ₹25,000 (80D self) + ₹50,000 (80D parents) + ₹2,00,000
              (home loan interest 24b) = <strong>₹5,25,000 in deductions</strong>. This
              significantly reduces taxable income before calculating tax.
            </div>

            <h2
              id="comparison-table"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Side-by-Side Regime Comparison Table
            </h2>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">Parameter</th>
                    <th className="p-4 font-bold">Old Regime</th>
                    <th className="p-4 font-bold">New Regime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Tax Slabs</strong>
                    </td>
                    <td className="p-4">5%, 20%, 30%</td>
                    <td className="p-4">5%, 10%, 15%, 20%, 25%, 30%</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Standard Deduction</strong>
                    </td>
                    <td className="p-4">₹50,000</td>
                    <td className="p-4">₹75,000</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>80C Investments</strong>
                    </td>
                    <td className="p-4">✅ Up to ₹1.5L</td>
                    <td className="p-4">❌ Not available</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>HRA Exemption</strong>
                    </td>
                    <td className="p-4">✅ Available</td>
                    <td className="p-4">❌ Not available</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Home Loan Interest (24b)</strong>
                    </td>
                    <td className="p-4">✅ Up to ₹2L</td>
                    <td className="p-4">❌ Not available</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>NPS Self (80CCD1B)</strong>
                    </td>
                    <td className="p-4">✅ ₹50,000 extra</td>
                    <td className="p-4">❌ Not available</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>NPS Employer (80CCD2)</strong>
                    </td>
                    <td className="p-4">✅ Available</td>
                    <td className="p-4">✅ Available (14% of basic)</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Health Insurance (80D)</strong>
                    </td>
                    <td className="p-4">✅ Up to ₹75,000</td>
                    <td className="p-4">❌ Not available</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Tax-free income threshold</strong>
                    </td>
                    <td className="p-4">₹5L (with 87A rebate)</td>
                    <td className="p-4">₹12L (with 87A rebate)</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Complexity</strong>
                    </td>
                    <td className="p-4">Higher (many declarations)</td>
                    <td className="p-4">Lower (fewer declarations)</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>ITR filing</strong>
                    </td>
                    <td className="p-4">More paperwork</td>
                    <td className="p-4">Simpler filing</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      <strong>Best for</strong>
                    </td>
                    <td className="p-4">High deduction claimants</td>
                    <td className="p-4">Simpler tax situations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2
              id="real-examples"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Real Salary Examples: ₹6L, ₹10L, ₹15L, ₹25L &amp; ₹50L
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Enough theory — let's look at real numbers. We'll calculate tax under both regimes at
              various income levels, assuming a "well-planned" taxpayer who maximises available
              deductions in the old regime.
            </p>

            <div className="scenario-box">
              <div className="scenario-head">📌 Example 1: Annual CTC ₹6,00,000</div>
              <div className="scenario-body">
                <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
                  <strong>Assumptions:</strong> Standard deduction only. No home loan. Paying rent
                  of ₹8,000/month (HRA = ₹15,000/yr). PPF investment ₹50,000/yr.
                </p>
                <div
                  className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white"
                  style={{ margin: "16px 0" }}
                >
                  <table className="w-full text-left text-sm text-[#11241C]">
                    <thead className="bg-[#172c46] text-white">
                      <tr className="hover:bg-black/5">
                        <th className="p-4 font-bold">Item</th>
                        <th className="p-4 font-bold">Old Regime</th>
                        <th className="p-4 font-bold">New Regime</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#11241C]/10">
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Gross Income</td>
                        <td className="p-4">₹6,00,000</td>
                        <td className="p-4">₹6,00,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Standard Deduction</td>
                        <td className="p-4">– ₹50,000</td>
                        <td className="p-4">– ₹75,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">80C (PPF)</td>
                        <td className="p-4">– ₹50,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">HRA Exemption</td>
                        <td className="p-4">– ₹15,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Taxable Income</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹4,85,000</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹5,25,000</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Tax Payable</strong>
                        </td>
                        <td className="win-new p-4">
                          <strong>₹0 (87A rebate)</strong>
                        </td>
                        <td className="win-old p-4">
                          <strong>₹13,000 (approx)</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="winner-banner old">
                  🏆 Old Regime Wins at ₹6L — saves ~₹13,000 for those with even basic deductions
                </div>
              </div>
            </div>

            <div className="scenario-box">
              <div className="scenario-head">📌 Example 2: Annual CTC ₹10,00,000</div>
              <div className="scenario-body">
                <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
                  <strong>Assumptions:</strong> 80C fully used (₹1.5L), NPS ₹50,000, health
                  insurance ₹25,000, HRA ₹80,000/yr.
                </p>
                <div
                  className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white"
                  style={{ margin: "16px 0" }}
                >
                  <table className="w-full text-left text-sm text-[#11241C]">
                    <thead className="bg-[#172c46] text-white">
                      <tr className="hover:bg-black/5">
                        <th className="p-4 font-bold">Item</th>
                        <th className="p-4 font-bold">Old Regime</th>
                        <th className="p-4 font-bold">New Regime</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#11241C]/10">
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Gross Income</td>
                        <td className="p-4">₹10,00,000</td>
                        <td className="p-4">₹10,00,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Standard Deduction</td>
                        <td className="p-4">– ₹50,000</td>
                        <td className="p-4">– ₹75,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">80C</td>
                        <td className="p-4">– ₹1,50,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">NPS 80CCD(1B)</td>
                        <td className="p-4">– ₹50,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">80D (Health)</td>
                        <td className="p-4">– ₹25,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">HRA</td>
                        <td className="p-4">– ₹80,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Taxable Income</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹6,45,000</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹9,25,000</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Tax Payable</strong>
                        </td>
                        <td className="win-new p-4">
                          <strong>~₹39,000</strong>
                        </td>
                        <td className="win-old p-4">
                          <strong>~₹54,500</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="winner-banner old">
                  🏆 Old Regime Wins at ₹10L with full deductions — saves ~₹15,500/year
                </div>
              </div>
            </div>

            <div className="scenario-box">
              <div className="scenario-head">📌 Example 3: Annual CTC ₹15,00,000</div>
              <div className="scenario-body">
                <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
                  <strong>Assumptions:</strong> 80C ₹1.5L, NPS ₹50,000, health insurance ₹25,000,
                  home loan interest ₹1.5L/yr, HRA not applicable (own house).
                </p>
                <div
                  className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white"
                  style={{ margin: "16px 0" }}
                >
                  <table className="w-full text-left text-sm text-[#11241C]">
                    <thead className="bg-[#172c46] text-white">
                      <tr className="hover:bg-black/5">
                        <th className="p-4 font-bold">Item</th>
                        <th className="p-4 font-bold">Old Regime</th>
                        <th className="p-4 font-bold">New Regime</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#11241C]/10">
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Gross Income</td>
                        <td className="p-4">₹15,00,000</td>
                        <td className="p-4">₹15,00,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Standard Deduction</td>
                        <td className="p-4">– ₹50,000</td>
                        <td className="p-4">– ₹75,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">80C + NPS + 80D</td>
                        <td className="p-4">– ₹2,25,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Home Loan Interest</td>
                        <td className="p-4">– ₹1,50,000</td>
                        <td className="p-4">—</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Taxable Income</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹10,75,000</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹14,25,000</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Tax Payable</strong>
                        </td>
                        <td className="win-new p-4">
                          <strong>~₹1,17,000</strong>
                        </td>
                        <td className="win-old p-4">
                          <strong>~₹1,50,000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="winner-banner old">
                  🏆 Old Regime Wins at ₹15L with home loan + deductions — saves ~₹33,000/year
                </div>
              </div>
            </div>

            <div className="scenario-box">
              <div className="scenario-head">📌 Example 4: Annual CTC ₹25,00,000</div>
              <div className="scenario-body">
                <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
                  <strong>Assumptions:</strong> All major deductions claimed. 80C ₹1.5L, NPS ₹50K,
                  80D ₹50K (parents senior), home loan interest ₹2L, HRA ₹1.2L.
                </p>
                <div
                  className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white"
                  style={{ margin: "16px 0" }}
                >
                  <table className="w-full text-left text-sm text-[#11241C]">
                    <thead className="bg-[#172c46] text-white">
                      <tr className="hover:bg-black/5">
                        <th className="p-4 font-bold">Item</th>
                        <th className="p-4 font-bold">Old Regime</th>
                        <th className="p-4 font-bold">New Regime</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#11241C]/10">
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Gross Income</td>
                        <td className="p-4">₹25,00,000</td>
                        <td className="p-4">₹25,00,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">Total Deductions</td>
                        <td className="p-4">– ₹5,70,000</td>
                        <td className="p-4">– ₹75,000</td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Taxable Income</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹19,30,000</strong>
                        </td>
                        <td className="p-4">
                          <strong>₹24,25,000</strong>
                        </td>
                      </tr>
                      <tr className="hover:bg-black/5">
                        <td className="p-4">
                          <strong>Tax Payable</strong>
                        </td>
                        <td className="win-new p-4">
                          <strong>~₹4,00,000</strong>
                        </td>
                        <td className="win-old p-4">
                          <strong>~₹4,65,000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="winner-banner old">
                  🏆 Old Regime Wins at ₹25L with maximum deductions — saves ~₹65,000/year
                </div>
              </div>
            </div>

            <div className="scenario-box">
              <div className="scenario-head">📌 Example 5: Annual CTC ₹50,00,000+</div>
              <div className="scenario-body">
                <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
                  At very high income levels (₹50L+), the 30% tax rate applies in both regimes on
                  most income. The fixed deduction benefit of ₹5–6L in the old regime becomes
                  proportionally smaller relative to total income. Many high earners at this level
                  find the new regime's simplicity attractive — though careful analysis may still
                  slightly favour the old regime for those with maximum deductions.
                </p>
                <div
                  className="callout my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50"
                  style={{ margin: "16px 0" }}
                >
                  <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                    💡 Rule of thumb at ₹50L+
                  </div>
                  If your combined deductions (80C + NPS + HRA + home loan) exceed ₹4.5 lakh, old
                  regime likely saves more. If they're under ₹3 lakh, new regime is simpler and
                  equally effective. Always calculate with our{" "}
                  <a href="/tax">free tax calculator</a> for exact numbers.
                </div>
              </div>
            </div>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                🧮 Calculate Your Exact Tax Savings Right Now
              </h3>
              <p className="mb-8 text-white/80">
                Don't guess — enter your salary and deductions and see precisely which regime saves
                you more in FY 2026-27.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/tax"
                >
                  Open Tax Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/nps"
                >
                  NPS Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/ppf"
                >
                  PPF Calculator →
                </a>
              </div>
            </div>

            <h2
              id="who-should"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Who Should Choose Which Regime?
            </h2>

            <div className="verdict-grid">
              <div className="verdict-card old">
                <h4>🟡 Choose Old Regime If...</h4>
                <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
                  <li>You have a home loan with significant interest payments</li>
                  <li>You pay high rent in a metro and claim HRA</li>
                  <li>You fully utilise 80C through ELSS, PPF, or life insurance</li>
                  <li>You invest in NPS and claim the extra ₹50,000 deduction</li>
                  <li>You pay health insurance premiums for yourself and senior parents</li>
                  <li>Your total deductions exceed ₹3.5–4 lakh</li>
                </ul>
              </div>
              <div className="verdict-card new">
                <h4>🟢 Choose New Regime If...</h4>
                <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
                  <li>Your income is below ₹12.75 lakh (effectively zero tax)</li>
                  <li>You have few deductions or investments</li>
                  <li>You live in a company-provided accommodation (no HRA)</li>
                  <li>You don't have a home loan</li>
                  <li>You prefer simple, no-paperwork tax filing</li>
                  <li>You're just starting your career with minimal investments</li>
                </ul>
              </div>
            </div>

            <div className="callout my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                💡 The Break-Even Point
              </div>
              Research shows the old regime becomes beneficial when your{" "}
              <strong>total deductions exceed approximately ₹3.75 lakh</strong> for a ₹10L income,
              or ₹5.25 lakh for a ₹15L income. Below these thresholds, the new regime's lower rates
              win. Calculate your exact break-even with our <a href="/tax">tax calculator</a>.
            </div>

            <h2
              id="mistakes"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              5 Tax Planning Mistakes That Cost Indians Lakhs
            </h2>

            <ol className="steps mb-6 space-y-6 text-[#11241C]/80 list-none pl-0">
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <strong>Defaulting to the new regime without calculating:</strong> Because the new
                  regime is now default, many people pay more tax without realising it. Always
                  compare before the financial year begins.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <strong>Not claiming HRA properly:</strong> HRA is one of the biggest tax savers
                  for salaried people in rented accommodation. Many people don't submit rent
                  receipts or don't know how to calculate the exact exempt amount. For HRA above ₹1
                  lakh/year, your landlord's PAN is mandatory.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <strong>Ignoring the NPS additional deduction:</strong> The extra ₹50,000
                  deduction under 80CCD(1B) is one of the most underutilised tax benefits in India.
                  Even in the old regime, this is a deduction over and above the ₹1.5 lakh 80C
                  limit.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <strong>Buying life insurance only for tax saving:</strong> Traditional life
                  insurance policies offer poor returns (4–5%) and are a terrible investment. Buy
                  term insurance for protection and use ELSS mutual funds for your 80C tax saving
                  instead — better returns, same deduction.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  5
                </div>
                <div>
                  <strong>Not planning 80C at the start of the year:</strong> Many people rush to
                  invest in PPF or ELSS in March. If you had invested in April instead via monthly
                  SIP, the same ₹1.5L would have stayed invested longer and compounded more —
                  improving your actual returns while getting the same tax deduction.
                </div>
              </li>
            </ol>

            <h2
              id="how-to-switch"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              How to Switch Between Regimes
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The good news is that switching regimes is not permanent. Here's how it works:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
              <li>
                <strong>Salaried employees</strong> can switch regime every financial year by
                informing their employer at the beginning of the year. Once chosen, it's locked for
                that year's TDS. You can switch again when filing your ITR.
              </li>
              <li>
                <strong>Business owners and self-employed individuals</strong> have more restricted
                switching — once you opt out of the new regime, you can only switch back once in
                your lifetime. So business owners need to be more careful with this decision.
              </li>
              <li>
                <strong>At ITR filing time:</strong> Even if you made one choice with your employer,
                you can switch regime when filing your tax return — whichever saves you more tax.
                This is your final opportunity to optimise for that financial year.
              </li>
            </ul>

            <div className="callout blue my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                📅 Key Deadline
              </div>
              To choose the old regime with your employer (and avoid higher TDS all year), you need
              to submit your declaration{" "}
              <strong>at the beginning of the financial year (April)</strong>. If you miss this,
              your employer defaults to the new regime for TDS, but you can still claim a refund by
              choosing the old regime at ITR filing time.
            </div>

            <h2
              id="faq"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Frequently Asked Questions
            </h2>

            <div className="faq space-y-4 my-8">
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Is income up to ₹12 lakh really tax-free in the new regime?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  For resident individuals with income up to ₹12 lakh, the Section 87A rebate
                  (₹60,000) eliminates the tax liability completely under the new regime. Add the
                  ₹75,000 standard deduction for salaried employees, and your CTC can be up to
                  ₹12.75 lakh with zero tax. However, this applies only to regular income — capital
                  gains, speculative income, and certain other incomes are calculated separately and
                  may still attract tax.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Can I claim HRA in the new tax regime?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  No. HRA exemption is not available under the new tax regime. If you pay
                  significant rent and receive HRA as part of your salary, this alone can make the
                  old regime more beneficial. Use our <a href="/tax">tax calculator</a> to see the
                  exact impact of your HRA on your tax liability.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  What happens to my 80C investments if I choose the new regime?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  Your investments (PPF, ELSS, EPF, etc.) continue to exist and grow — you just
                  don't get the tax deduction for them. The investments themselves are not affected.
                  However, if you're investing primarily for the tax benefit (like a tax-saving FD),
                  you might reconsider since the deduction won't apply in the new regime.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Is NPS a good investment in the new tax regime?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  Yes, especially because the employer's NPS contribution (80CCD2) deduction is
                  still available in the new regime — up to 14% of basic salary. If your employer
                  offers NPS contribution as a salary restructuring option, this remains one of the
                  few tax-saving tools available under the new regime. Use our{" "}
                  <a href="/nps">NPS calculator</a> to see your projected retirement corpus.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Which regime is better for someone with a home loan?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  Almost always the old regime, thanks to the Section 24(b) deduction of up to ₹2
                  lakh on home loan interest — one of the biggest deductions available. Combined
                  with 80C (principal repayment counts), a homeowner with a loan can easily claim
                  ₹3.5L+ in deductions, making the old regime significantly more beneficial.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  I'm a fresher earning ₹5 lakh. Which regime should I choose?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  At ₹5 lakh in the new regime, your taxable income after the ₹75,000 standard
                  deduction is ₹4.25 lakh — well under the ₹12L threshold for zero tax. You'll pay
                  zero tax in the new regime. The old regime might save a small amount if you have
                  deductions, but the simplicity of the new regime is ideal for freshers. Start
                  investing in PPF and NPS as habits, even if you're in the new regime — the wealth
                  creation matters more at this stage than the deduction.
                </div>
              </div>
            </div>

            <h2
              id="conclusion"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Final Decision Framework + Free Calculator
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Here is the simplest rule to follow:{" "}
              <strong>add up all your legitimate deductions</strong> — 80C investments, NPS, health
              insurance, HRA, and home loan interest. If the total exceeds ₹3.75 lakh, the old
              regime very likely saves you more. Below that threshold, go with the new regime and
              enjoy the simplicity.
            </p>

            <div className="card-grid my-8 grid gap-4 sm:grid-cols-3">
              <div className="card rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-blue-600">₹3.75L</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Minimum deductions needed for old regime to win at ₹10L income
                </div>
              </div>
              <div className="card amber rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-amber-600">₹12.75L</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Effective zero-tax income under new regime (salaried, FY 2026-27)
                </div>
              </div>
              <div className="card purple rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-blue-600">₹50,000</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Extra NPS deduction still available in old regime (80CCD1B)
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              But the most important thing is to{" "}
              <strong>stop guessing and start calculating</strong>. Our free tax calculator at
              Instant Calculators lets you enter your exact salary, HRA, deductions, and investments
              — and shows you the precise tax liability under both regimes side by side, so the
              decision is crystal clear.
            </p>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                🎯 Find Your Answer in 60 Seconds — Free
              </h3>
              <p className="mb-8 text-white/80">
                No sign-up. No data stored. Your numbers are private and calculated entirely in your
                browser.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/tax"
                >
                  Open Income Tax Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/nps"
                >
                  NPS Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/ppf"
                >
                  PPF Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/sip"
                >
                  SIP Calculator →
                </a>
              </div>
            </div>
          </article>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
