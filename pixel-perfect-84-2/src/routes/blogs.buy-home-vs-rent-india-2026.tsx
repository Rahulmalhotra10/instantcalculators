import { Link, createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/blogs/buy-home-vs-rent-india-2026")({
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
              Buy a Home or Keep Renting?{" "}
              <span className="text-[#fbbf24]">India's Biggest Financial Decision</span> — Answered
              for 2026
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/70">
              <span className="flex items-center gap-2">🗓 July 30, 2026</span>
              <span className="flex items-center gap-2">⏱ 15 min read</span>
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
                <a href="#intro" className="hover:text-[#172c46] hover:underline transition-all">
                  The Question Every Indian Asks at 30
                </a>
              </li>
              <li>
                <a
                  href="#real-cost-buying"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  The Real, Full Cost of Buying a Home in India
                </a>
              </li>
              <li>
                <a
                  href="#rent-math"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  The True Cost of Renting (It's Not Just the Rent)
                </a>
              </li>
              <li>
                <a
                  href="#emi-deep-dive"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  EMI Deep Dive: What Your Monthly Payment Really Means
                </a>
              </li>
              <li>
                <a
                  href="#tax-benefits"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Tax Benefits of a Home Loan: How Much Do You Really Save?
                </a>
              </li>
              <li>
                <a
                  href="#opportunity-cost"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  The Opportunity Cost: What If You Invested the Down Payment?
                </a>
              </li>
              <li>
                <a
                  href="#property-appreciation"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Does Indian Property Actually Appreciate Enough to Justify Buying?
                </a>
              </li>
              <li>
                <a
                  href="#city-comparison"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  Buy vs Rent in Different Indian Cities: Mumbai, Delhi, Bengaluru &amp; More
                </a>
              </li>
              <li>
                <a
                  href="#when-to-buy"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  When Does Buying Finally Make Sense?
                </a>
              </li>
              <li>
                <a
                  href="#checklist"
                  className="hover:text-[#172c46] hover:underline transition-all"
                >
                  The Complete Home-Buying Readiness Checklist
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
                  Final Verdict + Free Calculators
                </a>
              </li>
            </ol>
          </nav>
          <article className="prose prose-lg max-w-none prose-headings:font-['Bricolage_Grotesque'] prose-headings:text-black prose-a:text-[#2563eb] prose-a:no-underline hover:prose-a:underline">
            <h2
              id="intro"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              The Question Every Indian Asks at 30
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Somewhere around your late twenties or early thirties, a specific kind of pressure
              builds. Your parents ask about it. Your colleagues start discussing it. Property
              developers flood your Instagram. Relatives at every family gathering ask:{" "}
              <em>"Beta, ghar kab le rahe ho?"</em>
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The cultural default in India has always been that buying a home is the pinnacle of
              adult financial responsibility. But in 2026, with property prices in major cities at
              historic highs, home loan rates hovering around 8–9%, and SIP returns delivering
              12–14% over the long term — the calculus is no longer so simple.
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              This guide will not tell you what to do. It will give you the complete financial
              picture — every cost, every benefit, every hidden number — so you can make this
              decision with clarity rather than social pressure.
            </p>

            <div className="callout amber my-8 rounded-2xl border p-6 border-amber-200 bg-amber-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                ⚠️ The starting point
              </div>
              A 2BR flat in Bengaluru's Whitefield area costs approximately ₹80–1.2 crore in 2026.
              At 8.5% for 20 years with 20% down payment, the EMI on a ₹90L loan is approximately{" "}
              <strong>₹78,000/month</strong>. The same flat rents for ₹28,000–35,000/month. That's
              the gap we need to understand.
            </div>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                🏠 Calculate Your Home Loan EMI Instantly
              </h3>
              <p className="mb-8 text-white/80">
                Enter any loan amount, rate, and tenure — get your monthly EMI, total interest
                payable, and full amortisation schedule. Free, instant, no sign-up.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/emi"
                >
                  Open EMI Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/sip"
                >
                  SIP Calculator →
                </a>
              </div>
            </div>

            <h2
              id="real-cost-buying"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              The Real, Full Cost of Buying a Home in India
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Most people focus only on the property price and EMI. But the true cost of buying a
              home in India includes several other significant expenses that often come as a shock
              to first-time buyers.
            </p>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              One-Time Upfront Costs
            </h3>

            <div className="big-example">
              <h4>🏗 Example: ₹1 crore flat in a Tier-1 city</h4>
              <div className="row">
                <span>Property Price</span>
                <span>₹1,00,00,000</span>
              </div>
              <div className="row">
                <span>Stamp Duty (5–7% depending on state)</span>
                <span>₹6,00,000</span>
              </div>
              <div className="row">
                <span>Registration Charges (1%)</span>
                <span>₹1,00,000</span>
              </div>
              <div className="row">
                <span>GST (5% on under-construction; Nil on ready-to-move)</span>
                <span>₹0 – ₹5,00,000</span>
              </div>
              <div className="row">
                <span>Home Loan Processing Fee (0.5–1%)</span>
                <span>₹40,000</span>
              </div>
              <div className="row">
                <span>Legal / Documentation Fees</span>
                <span>₹30,000</span>
              </div>
              <div className="row">
                <span>Interior &amp; Modular Kitchen (Tier-1 city)</span>
                <span>₹8,00,000 – ₹15,00,000</span>
              </div>
              <div className="row">
                <span>Down Payment (20% of property value)</span>
                <span>₹20,00,000</span>
              </div>
              <div className="row">
                <span>
                  <strong>Total Cash Required on Day 1</strong>
                </span>
                <span>
                  <strong>₹35–40 lakh</strong>
                </span>
              </div>
            </div>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              Recurring Annual Costs (Often Forgotten)
            </h3>
            <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
              <li>
                <strong>Society Maintenance Charges:</strong> ₹3,000–10,000/month in most gated
                communities
              </li>
              <li>
                <strong>Property Tax:</strong> ₹5,000–30,000/year depending on city and property
                size
              </li>
              <li>
                <strong>Home Insurance:</strong> ₹5,000–15,000/year for structure and contents
              </li>
              <li>
                <strong>Repair &amp; Maintenance Reserve:</strong> Budget 1% of property value per
                year (₹1 lakh for a ₹1 crore home)
              </li>
              <li>
                <strong>Lift &amp; parking charges:</strong> ₹1,000–3,000/month in many societies
              </li>
            </ul>

            <div className="callout red my-8 rounded-2xl border p-6 border-red-200 bg-red-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-red-700">
                🔴 Often ignored
              </div>
              Over a 20-year ownership period, recurring costs (maintenance, property tax, repairs,
              insurance) on a ₹1 crore home can easily add up to <strong>₹30–50 lakh</strong> — a
              full 30–50% of the original purchase price. These are not factored into most "buy vs
              rent" comparisons people do casually.
            </div>

            <h2
              id="rent-math"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              The True Cost of Renting
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Renting is often dismissed with the phrase "you're throwing money away." But this
              popular wisdom doesn't hold up to scrutiny. When you rent, you're not wasting money —
              you're paying for housing, flexibility, and the freedom to invest the difference
              elsewhere.
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              That said, renting has its own set of real costs and considerations:
            </p>

            <div className="two-col my-8 grid gap-4 sm:grid-cols-2">
              <div className="col-card rent rounded-2xl border border-[#11241C]/10 bg-white p-6">
                <h4 className="text-xl font-bold mb-4">📦 Real Costs of Renting</h4>
                <ul>
                  <li>Monthly rent (rises ~5–8% per year in most cities)</li>
                  <li>Broker fee (1–2 months' rent when changing)</li>
                  <li>Security deposit (2–3 months; locked for lease duration)</li>
                  <li>Shifting costs every few years</li>
                  <li>No control over landlord decisions or rent hikes</li>
                  <li>Potential instability — forced to move</li>
                </ul>
              </div>
              <div className="col-card buy rounded-2xl border border-[#11241C]/10 bg-white p-6">
                <h4 className="text-xl font-bold mb-4">🏡 Hidden Advantages of Renting</h4>
                <ul>
                  <li>No down payment locking up ₹20–30 lakh</li>
                  <li>No EMI obligation — flexibility if income drops</li>
                  <li>No maintenance, repair, or society cost burden</li>
                  <li>Freedom to live near work; no commute trade-off</li>
                  <li>Ability to invest the difference in wealth-building assets</li>
                  <li>Geographic flexibility for career growth</li>
                </ul>
              </div>
            </div>

            <div className="callout blue my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                💡 The rent yield reality
              </div>
              In most Tier-1 Indian cities, rental yield (annual rent ÷ property price) is only{" "}
              <strong>2–3%</strong>. This means if a property costs ₹1 crore and rents for
              ₹25,000/month (₹3 lakh/year), the owner's yield is 3%. Compare this to an FD at 7% or
              equity SIP at 12%+. From a pure investment angle, real estate in India's major cities
              is expensive relative to the income it generates.
            </div>

            <h2
              id="emi-deep-dive"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              EMI Deep Dive: What Your Monthly Payment Really Means
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Let's break down exactly what happens when you take a ₹80 lakh home loan at 8.5% for
              20 years:
            </p>

            <div className="card-grid my-8 grid gap-4 sm:grid-cols-3">
              <div className="card rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-blue-600">₹69,426</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Monthly EMI you pay for 20 years
                </div>
              </div>
              <div className="card red rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-red-600">₹86.6L</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Total interest paid over 20 years
                </div>
              </div>
              <div className="card amber rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-amber-600">₹1.67Cr</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Total amount paid (loan + interest)
                </div>
              </div>
              <div className="card green rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-emerald-600">Year 7</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  When you finally own 50% of your home's value
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              That last number is the most sobering. In the first 7 years of a 20-year loan, you've
              paid <strong>84 EMIs totalling ₹58 lakh</strong> — yet still owe roughly half the
              loan. This is because early EMIs are heavily skewed toward interest, not principal
              reduction.
            </p>

            <div className="pullquote">
              Buying a home with a 20-year loan means the bank owns most of your home for the first
              decade. Ownership is earned gradually, one payment at a time.
            </div>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              How Prepayment Changes Everything
            </h3>
            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              One powerful strategy for homeowners: make a single lump-sum prepayment of{" "}
              <strong>₹5 lakh at the end of Year 3</strong> on an ₹80L loan at 8.5%. This single
              action:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
              <li>
                Reduces your loan tenure by approximately <strong>2.5 years</strong>
              </li>
              <li>
                Saves approximately <strong>₹12–15 lakh in interest</strong> over the remaining
                tenure
              </li>
              <li>
                Gives you a guaranteed, risk-free "return" equivalent to your loan interest rate
              </li>
            </ul>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                📊 Calculate Your Exact EMI &amp; Amortisation
              </h3>
              <p className="mb-8 text-white/80">
                See year-by-year how much of each EMI goes to principal vs interest — and model the
                impact of prepayments.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/emi"
                >
                  Open EMI Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/fd"
                >
                  FD Calculator →
                </a>
              </div>
            </div>

            <h2
              id="tax-benefits"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Tax Benefits of a Home Loan: How Much Do You Really Save?
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              A home loan comes with real and significant tax benefits under the{" "}
              <strong>old tax regime</strong>. Here's what you can claim:
            </p>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">Benefit</th>
                    <th className="p-4 font-bold">Section</th>
                    <th className="p-4 font-bold">Maximum Deduction</th>
                    <th className="p-4 font-bold">Regime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Home Loan Principal Repayment</td>
                    <td className="p-4">80C</td>
                    <td className="p-4">₹1,50,000/year</td>
                    <td className="p-4">Old regime only</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Home Loan Interest (self-occupied)</td>
                    <td className="p-4">24(b)</td>
                    <td className="p-4">₹2,00,000/year</td>
                    <td className="p-4">Old regime only</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">
                      Additional interest for first-time buyers (affordable housing)
                    </td>
                    <td className="p-4">80EEA</td>
                    <td className="p-4">₹1,50,000/year (if eligible)</td>
                    <td className="p-4">Old regime only</td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Stamp Duty &amp; Registration (Year 1 only)</td>
                    <td className="p-4">80C</td>
                    <td className="p-4">Within ₹1.5L limit</td>
                    <td className="p-4">Old regime only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              For a person in the <strong>30% tax bracket</strong> who claims both 80C (principal)
              and 24(b) (interest), the annual tax saving can be:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3 text-[#11241C]/80">
              <li>
                ₹1.5L (80C) × 30% = <strong>₹45,000</strong>
              </li>
              <li>
                ₹2L (24b interest) × 30% = <strong>₹60,000</strong>
              </li>
              <li>
                Total annual tax saving: <strong>₹1.05 lakh</strong>
              </li>
            </ul>

            <div className="callout amber my-8 rounded-2xl border p-6 border-amber-200 bg-amber-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                ⚠️ New Regime Caution
              </div>
              If you're in the new tax regime,{" "}
              <strong>none of these home loan deductions apply</strong>. This is a major factor to
              consider when comparing tax regimes. A homeowner with a loan almost always benefits
              from switching to the old regime. Use our <a href="/tax">tax calculator</a> to check
              your exact numbers.
            </div>

            <h2
              id="opportunity-cost"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              The Opportunity Cost: What If You Invested the Down Payment?
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              This is the most important (and most ignored) part of the buy vs rent debate. When you
              buy a ₹1 crore home, you deploy ₹20 lakh as a down payment — cash that is now tied up
              in an illiquid asset. What would happen if you didn't buy and instead invested that
              ₹20 lakh, plus the monthly EMI-rent difference, in a SIP?
            </p>

            <h3 className="mt-10 mb-4 font-['Bricolage_Grotesque'] text-xl font-bold text-[#1e3a8a]">
              The Numbers (20-year horizon)
            </h3>

            <div className="big-example">
              <h4>📐 Scenario: ₹1 crore flat, 20% down payment, 20-year view</h4>
              <div className="row">
                <span>Down Payment deployed</span>
                <span>₹20,00,000</span>
              </div>
              <div className="row">
                <span>Monthly EMI (₹80L @ 8.5%, 20yr)</span>
                <span>₹69,426</span>
              </div>
              <div className="row">
                <span>Monthly rent for same flat</span>
                <span>₹28,000</span>
              </div>
              <div className="row">
                <span>Monthly surplus (EMI – Rent)</span>
                <span>₹41,426</span>
              </div>
              <div className="row">
                <span>₹20L lumpsum @ 12% for 20 years</span>
                <span>₹1.93 crore</span>
              </div>
              <div className="row">
                <span>₹41,426 SIP @ 12% for 20 years</span>
                <span>₹3.84 crore</span>
              </div>
              <div className="row">
                <span>
                  <strong>Total investment corpus after 20 years (Rent scenario)</strong>
                </span>
                <span>
                  <strong>₹5.77 crore</strong>
                </span>
              </div>
            </div>

            <div className="big-example" style={{ marginTop: 0 }}>
              <h4>🏠 Same ₹1 crore flat — Value after 20 years @ 6% annual appreciation</h4>
              <div className="row">
                <span>Property value after 20 years (6% p.a.)</span>
                <span>₹3.21 crore</span>
              </div>
              <div className="row">
                <span>Less: Total interest paid over loan tenure</span>
                <span>– ₹86.6 lakh</span>
              </div>
              <div className="row">
                <span>Less: Recurring costs (maintenance, tax, repairs) over 20 years</span>
                <span>– ₹30 lakh</span>
              </div>
              <div className="row">
                <span>
                  <strong>Net effective value of owning</strong>
                </span>
                <span>
                  <strong>~₹2.04 crore</strong>
                </span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              On paper, renting and investing the difference produces{" "}
              <strong>₹5.77 crore vs ₹2.04 crore</strong> over 20 years. But there's an important
              caveat: this assumes you actually invest the surplus with discipline every single
              month for 20 years — which most people won't do without the EMI "forcing function."
            </p>

            <div className="callout my-8 rounded-2xl border p-6 border-blue-200 bg-blue-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                💡 The behavioural reality
              </div>
              Home loan EMI is a <em>forced savings mechanism</em>. For most Indians, the discipline
              of paying EMI every month — under penalty of credit score damage — results in more
              wealth than the "invest the difference" plan, which requires extraordinary
              self-discipline to maintain for decades. This is the strongest financial argument for
              buying a home that pure numbers often miss.
            </div>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                📈 See How Your SIP Would Grow vs Home Equity
              </h3>
              <p className="mb-8 text-white/80">
                Model both scenarios with our free calculators — no spreadsheets, no guesswork.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/sip"
                >
                  SIP Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/lumpsum"
                >
                  Lumpsum Calculator →
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/emi"
                >
                  EMI Calculator →
                </a>
              </div>
            </div>

            <h2
              id="property-appreciation"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Does Indian Property Actually Appreciate Enough to Justify Buying?
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Many people buy property assuming it will "always go up." The reality in India is more
              nuanced. Property appreciation varies enormously by city, locality, and timing.
            </p>

            <div className="table-wrap my-8 overflow-x-auto rounded-2xl border border-[#11241C]/10 bg-white">
              <table className="w-full text-left text-sm text-[#11241C]">
                <thead className="bg-[#172c46] text-white">
                  <tr className="hover:bg-black/5">
                    <th className="p-4 font-bold">City / Area</th>
                    <th className="p-4 font-bold">5-Year Price Appreciation (Approx)</th>
                    <th className="p-4 font-bold">Annual Rate</th>
                    <th className="p-4 font-bold">Outlook 2026</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#11241C]/10">
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Mumbai (Bandra, Juhu)</td>
                    <td className="p-4">30–40%</td>
                    <td className="p-4">6–7%</td>
                    <td className="p-4">
                      <span className="tag-mid">Stable</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Bengaluru (Whitefield, Sarjapur)</td>
                    <td className="p-4">50–70%</td>
                    <td className="p-4">9–11%</td>
                    <td className="p-4">
                      <span className="tag-good">Strong</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Delhi NCR (Gurgaon, Noida)</td>
                    <td className="p-4">40–60%</td>
                    <td className="p-4">7–10%</td>
                    <td className="p-4">
                      <span className="tag-good">Strong</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Hyderabad (HITECH City)</td>
                    <td className="p-4">45–65%</td>
                    <td className="p-4">8–10%</td>
                    <td className="p-4">
                      <span className="tag-good">Strong</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Pune (Hinjewadi, Wakad)</td>
                    <td className="p-4">35–50%</td>
                    <td className="p-4">6–8%</td>
                    <td className="p-4">
                      <span className="tag-mid">Moderate</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Tier-2 Cities (Lucknow, Jaipur)</td>
                    <td className="p-4">20–35%</td>
                    <td className="p-4">4–6%</td>
                    <td className="p-4">
                      <span className="tag-mid">Moderate</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-black/5">
                    <td className="p-4">Peripheral suburbs / outskirts</td>
                    <td className="p-4">5–20%</td>
                    <td className="p-4">1–4%</td>
                    <td className="p-4">
                      <span className="tag-low">Slow</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The key insight here: property appreciation in India's tech corridors (Bengaluru,
              Hyderabad, Gurgaon) has been strong enough to genuinely compete with equity returns
              over the last 5 years. However, peripheral areas — where affordability pushes many
              first-time buyers — have often appreciated far below inflation.
            </p>

            <div className="callout green my-8 rounded-2xl border p-6 border-green-200 bg-green-50">
              <div className="callout-label mb-2 text-xs font-bold uppercase tracking-wider text-green-700">
                ✅ Location is everything
              </div>
              A ₹60 lakh flat in a well-connected, employment-dense area will outperform a ₹80 lakh
              flat in a distant suburb in both appreciation and rental yield. When buying, location
              quality matters far more than size or amenities.
            </div>

            <h2
              id="city-comparison"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Buy vs Rent in Different Indian Cities
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The price-to-rent ratio (property price ÷ annual rent) tells you how many years of
              rent would equal the property price. A ratio above 20 generally favours renting; below
              15 favours buying.
            </p>

            <div className="card-grid my-8 grid gap-4 sm:grid-cols-3">
              <div className="card red rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-red-600">40–50x</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Mumbai South / Bandra
                  <br />
                  <small>Strongly favour renting</small>
                </div>
              </div>
              <div className="card amber rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-amber-600">25–35x</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Bengaluru / Gurgaon
                  <br />
                  <small>Lean towards renting</small>
                </div>
              </div>
              <div className="card amber rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-amber-600">20–28x</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Pune / Hyderabad
                  <br />
                  <small>Borderline; depends on specifics</small>
                </div>
              </div>
              <div className="card green rounded-2xl border border-[#11241C]/10 bg-white p-6 text-center shadow-sm">
                <div className="num text-3xl font-black text-emerald-600">12–18x</div>
                <div className="label mt-2 text-sm text-[#11241C]/60 font-medium">
                  Tier-2 Cities
                  <br />
                  <small>May favour buying</small>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              In Mumbai and Bengaluru's prime areas, the price-to-rent ratio makes buying a{" "}
              <em>financially suboptimal</em> decision compared to renting and investing — unless
              you have a 15+ year horizon and expect continued strong appreciation, or unless the
              emotional and stability value of ownership matters greatly to you.
            </p>

            <h2
              id="when-to-buy"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              When Does Buying Finally Make Sense?
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Despite all the numbers above, there are clear situations where buying a home makes
              strong sense — both financially and personally:
            </p>

            <div className="timeline">
              <div className="timeline-item">
                <strong>✅ You plan to stay in the same city for 10+ years</strong>
                Transaction costs (stamp duty, registration, brokerage) mean you need at least 7–10
                years of ownership to break even vs renting. If you're mobile for career reasons,
                renting is financially smarter.
              </div>
              <div className="timeline-item">
                <strong>✅ Your EMI is less than 40% of your take-home pay</strong>
                This is the classic affordability rule. At 40%+ EMI-to-income, you have no financial
                cushion for emergencies, investments, or lifestyle. Wait until your income grows or
                buy a smaller/cheaper property.
              </div>
              <div className="timeline-item">
                <strong>✅ You have a 20% down payment without liquidating all savings</strong>
                After the down payment, you should still have 6 months of expenses as emergency
                fund, plus funds for interior fit-out. Don't drain every rupee to buy a home.
              </div>
              <div className="timeline-item">
                <strong>✅ The property is in a high-demand locality with good fundamentals</strong>
                Employment hubs, good connectivity, reputed developer, clear title — these are
                non-negotiables. A wrong location will underperform even FD returns.
              </div>
              <div className="timeline-item">
                <strong>✅ You have strong emotional reasons</strong>
                Security, children's school stability, personalisation, freedom from landlord
                decisions — these are real and valid reasons to buy, even if the pure math slightly
                favours renting. Don't dismiss them.
              </div>
            </div>

            <h2
              id="checklist"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              The Complete Home-Buying Readiness Checklist
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              Before you sign any agreement, run through this checklist honestly:
            </p>

            <ol className="steps mb-6 space-y-6 text-[#11241C]/80 list-none pl-0">
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <strong>Emergency Fund:</strong> Do you have 6 months of expenses in a liquid FD
                  or savings account? If not, build this first before any down payment.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <strong>Down Payment Readiness:</strong> Can you pay 20% down payment without
                  selling mutual funds, breaking PPF, or borrowing from family? If you need to
                  scramble, you may not be ready.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <strong>EMI Affordability:</strong> Will your EMI be under 40% of your take-home
                  salary? Use our <a href="/emi">EMI calculator</a> to verify.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  4
                </div>
                <div>
                  <strong>Job Stability:</strong> Is your income stable and likely to grow? A home
                  loan is a 20-year commitment. Entrepreneurship or contract work needs extra
                  caution.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  5
                </div>
                <div>
                  <strong>Location Research:</strong> Have you researched infrastructure projects,
                  connectivity plans, and comparable transactions in the area? Don't rely on the
                  builder's brochure.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  6
                </div>
                <div>
                  <strong>Legal Due Diligence:</strong> Is the property RERA-registered? Is the
                  title clear? Are there any encumbrances? Hire an independent lawyer — don't depend
                  on the builder's legal team.
                </div>
              </li>
              <li className="flex gap-4">
                <div className="step-num flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                  7
                </div>
                <div>
                  <strong>Tax Regime Check:</strong> If you're in the new tax regime, you won't get
                  80C or 24(b) benefits. Calculate whether switching to old regime makes sense once
                  you have a home loan. Use our <a href="/tax">tax calculator</a>.
                </div>
              </li>
            </ol>

            <h2
              id="faq"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Frequently Asked Questions
            </h2>

            <div className="faq space-y-4 my-8">
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Is renting really "throwing money away" in India?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  This is one of the most persistent financial myths in India. Rent buys you housing
                  — the same way buying petrol for your car isn't "wasting money." The key question
                  is whether renting and investing the difference builds more wealth than buying. In
                  most Tier-1 Indian cities at current valuations, the answer is yes — if you invest
                  the surplus with discipline. The real waste is paying high EMI on a property in a
                  poor location that doesn't appreciate.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  What is the ideal home loan tenure — 15 years or 20 years?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  Shorter tenure = higher EMI but far less total interest paid. A 15-year loan vs
                  20-year loan on ₹80 lakh at 8.5% increases your EMI by about ₹11,000/month — but
                  saves approximately ₹28 lakh in total interest. If your budget allows, a 15-year
                  tenure is significantly more efficient. Use our <a href="/emi">EMI calculator</a>{" "}
                  to compare both options instantly.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Should I buy an under-construction or ready-to-move property?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  Ready-to-move properties are generally less risky — you see what you're getting,
                  there's no GST (on resale), and you can move in immediately (or rent it out).
                  Under-construction properties are cheaper but carry completion risk, and you pay
                  both EMI and rent simultaneously during the construction period, which creates
                  significant cash flow pressure. For first-time buyers, ready-to-move is almost
                  always the safer choice.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Can I rent out my property and let the rent cover the EMI?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  In most Tier-1 Indian cities, this doesn't work. Rental yields are 2–3%, while
                  loan EMI represents an effective cost of 8.5%+. You'd collect ₹25,000–30,000 in
                  rent on a property with a ₹70,000+ EMI. Rent from a second property can supplement
                  income, but it rarely covers the full EMI on a Tier-1 city property at current
                  valuations.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  How does a home loan affect my ability to get other loans?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  A home loan significantly increases your total fixed obligations, reducing your
                  FOIR (Fixed Obligation to Income Ratio) headroom. Most banks allow a maximum FOIR
                  of 50–55%. If your home loan EMI is already 35–40% of income, you'll have very
                  limited ability to take a car loan or personal loan without straining your
                  finances.
                </div>
              </div>
              <div className="faq-item rounded-xl border border-[#11241C]/10 overflow-hidden">
                <div className="faq-q bg-gray-50 p-4 font-bold text-[#11241C]">
                  Is it better to buy a smaller flat now or wait and buy a bigger one later?
                </div>
                <div className="faq-a p-4 text-[#11241C]/80 border-t border-[#11241C]/10">
                  In a rising property market, "buy what you can afford now" is generally better
                  than "wait for the perfect property." Property prices in good Indian localities
                  have historically risen 6–10% per year — every year you wait, the goal moves
                  further away. However, don't stretch so far that the EMI compromises your
                  emergency fund or investment capacity.
                </div>
              </div>
            </div>

            <h2
              id="conclusion"
              className="mt-16 mb-6 font-['Bricolage_Grotesque'] text-3xl font-bold tracking-tight text-black border-t border-[#11241C]/10 pt-10"
            >
              Final Verdict + Free Calculators
            </h2>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              After running all the numbers, here is an honest summary:
            </p>

            <div className="two-col my-8 grid gap-4 sm:grid-cols-2">
              <div className="col-card rent rounded-2xl border border-[#11241C]/10 bg-white p-6">
                <h4 className="text-xl font-bold mb-4">📦 Renting Makes More Sense If...</h4>
                <ul>
                  <li>You're in a Tier-1 city with high price-to-rent ratios (20x+)</li>
                  <li>Your career requires geographic flexibility</li>
                  <li>You have under 10 years planning horizon in that city</li>
                  <li>Your EMI would exceed 40% of take-home pay</li>
                  <li>You can genuinely discipline yourself to invest the surplus</li>
                </ul>
              </div>
              <div className="col-card buy rounded-2xl border border-[#11241C]/10 bg-white p-6">
                <h4 className="text-xl font-bold mb-4">🏡 Buying Makes More Sense If...</h4>
                <ul>
                  <li>You're settled in a city for 10+ years</li>
                  <li>EMI is under 40% of take-home and you have the down payment</li>
                  <li>You want the forced savings discipline of an EMI</li>
                  <li>You're in a strong appreciation locality</li>
                  <li>Emotional stability, security, and personalisation matter to you</li>
                </ul>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              The truth is that buying a home is not just a financial decision. Stability,
              belonging, freedom to renovate, not dealing with landlords, and building something
              permanent for your family — these are real human values that numbers can't fully
              capture. If buying fits your finances without stretching them dangerously, the
              non-financial case for ownership is strong.
            </p>

            <p className="text-lg leading-relaxed text-[#11241C]/80 mb-6">
              But if you're buying out of social pressure, FOMO, or the belief that "property always
              goes up" — pause, run the numbers, and make sure the EMI fits comfortably in your
              actual financial life, not a best-case projection.
            </p>

            <div className="cta-box mt-10 mb-8 rounded-[32px] bg-gradient-to-br from-[#172c46] to-[#0c1826] p-8 sm:p-10 text-center text-white shadow-xl">
              <h3 className="mt-10 mb-6 font-['Bricolage_Grotesque'] text-2xl font-bold text-white">
                🎯 Run Your Numbers Before You Decide
              </h3>
              <p className="mb-8 text-white/80">
                All calculators are free, instant, and private. Your numbers never leave your
                browser.
              </p>
              <div className="cta-row flex flex-wrap justify-center gap-3">
                <a
                  className="cta-btn primary rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-[#fbbf24] text-[#1e1b4b] hover:opacity-90"
                  href="/emi"
                >
                  EMI Calculator
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/sip"
                >
                  SIP Calculator
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/tax"
                >
                  Tax Calculator
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/fd"
                >
                  FD Calculator
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/ppf"
                >
                  PPF Calculator
                </a>
                <a
                  className="cta-btn outline rounded-full px-6 py-3 text-sm font-bold transition-opacity bg-transparent border-2 border-white/50 text-white hover:opacity-90"
                  href="/nps"
                >
                  NPS Calculator
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
