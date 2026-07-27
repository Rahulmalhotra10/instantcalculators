import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CalculatorShell,
  NumberField,
  ResultTile,
  formatINR,
  InputCard,
  BreakdownPie,
  YearlyBars,
  AmortisationTable,
  AdvancedPanel,
  SavingsCallout,
  CHART_COLORS,
} from "@/components/CalculatorShell";
import { calcSIPSchedule } from "@/lib/calculators";

export const Route = createFileRoute("/sip")({
  head: () => ({
    meta: [
      { title: "SIP Calculator — Instant calculators" },
      {
        name: "description",
        content:
          "Project mutual fund wealth with optional annual step-up and a yearly lump-sum boost.",
      },
    ],
  }),
  component: SIPPage,
});

function SIPPage() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const [advanced, setAdvanced] = useState(false);
  const [stepUp, setStepUp] = useState(10);
  const [lumpsum, setLumpsum] = useState(100000);

  const base = useMemo(() => calcSIPSchedule(monthly, rate, years), [monthly, rate, years]);
  const adv = useMemo(
    () =>
      calcSIPSchedule(monthly, rate, years, {
        stepUpPct: advanced ? stepUp : 0,
        initialLumpsum: advanced ? lumpsum : 0,
      }),
    [monthly, rate, years, advanced, stepUp, lumpsum],
  );

  const active = advanced ? adv : base;
  const extraWealth = Math.max(0, adv.maturity - base.maturity);
  const extraInvested = Math.max(0, adv.invested - base.invested);
  const bonusReturns = Math.max(0, extraWealth - extraInvested);

  return (
    <CalculatorShell
      title="SIP Calculator"
      description="See how a monthly SIP compounds — and how a step-up or a yearly lump-sum kicker transforms the finish line."
      article={<SIPArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Monthly investment"
              suffix="₹"
              value={monthly}
              onChange={setMonthly}
              min={500}
              max={200000}
              step={500}
            />
            <NumberField
              label="Expected return"
              suffix="% p.a."
              value={rate}
              onChange={setRate}
              min={1}
              max={30}
              step={0.5}
            />
            <NumberField
              label="Time period"
              suffix="yrs"
              value={years}
              onChange={setYears}
              min={1}
              max={40}
              step={1}
            />
            <AdvancedPanel
              enabled={advanced}
              onToggle={setAdvanced}
              title="Step-up SIP & lump-sum boost"
              hint="Grow your SIP with your income each year and add an optional yearly investment upfront."
            >
              <NumberField
                label="Annual SIP step-up"
                suffix="%"
                value={stepUp}
                onChange={setStepUp}
                min={0}
                max={25}
                step={0.5}
              />
              <NumberField
                label="Yearly lump-sum"
                suffix="₹"
                value={lumpsum}
                onChange={setLumpsum}
                min={0}
                max={5000000}
                step={5000}
              />
            </AdvancedPanel>
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Maturity value" value={formatINR(active.maturity)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Invested" value={formatINR(active.invested)} />
            <ResultTile label="Est. returns" value={formatINR(active.gains)} />
          </div>
          {advanced && (
            <div className="mt-2">
              <SavingsCallout
                headline={
                  extraWealth > 0
                    ? `You build ${formatINR(extraWealth)} more wealth`
                    : "Adjust step-up or lump-sum to see the boost"
                }
                metrics={[
                  { label: "Extra maturity", value: formatINR(extraWealth), highlight: true },
                  {
                    label: "Extra returns earned",
                    value: formatINR(bonusReturns),
                    highlight: bonusReturns > 0,
                  },
                  { label: "Extra invested", value: formatINR(extraInvested) },
                ]}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Invested", value: active.invested },
            { name: "Returns", value: active.gains },
          ]}
        />
        <YearlyBars
          title="Invested vs value each year"
          data={active.rows}
          stacked={false}
          keys={[
            { key: "Invested", label: "Cumulative invested", color: "rgba(245,242,232,0.35)" },
            { key: "Value", label: "Portfolio value", color: CHART_COLORS.accent },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Year-by-year growth"
          subtitle="How your SIP compounds — cumulative contributions, returns earned so far, and portfolio value."
          columns={[
            { key: "year", label: "Year" },
            { key: "Invested", label: "Total invested" },
            { key: "Returns", label: "Total returns", tone: "accent" },
            { key: "Value", label: "Portfolio value", tone: "muted" },
          ]}
          rows={active.rows}
        />
      </div>
    </CalculatorShell>
  );
}

function SIPArticle() {
  return (
    <>
      <h2>About the SIP (Systematic Investment Plan) Calculator</h2>
      <p className="lead">
        A Systematic Investment Plan (SIP) is a disciplined way of investing a fixed amount of money
        at regular intervals (usually monthly) in a mutual fund scheme. It is one of the most
        powerful wealth-creation tools available to retail investors, leveraging the twin benefits
        of rupee cost averaging and the power of compounding over long horizons.
      </p>

      <h3>How does a SIP Calculator work?</h3>
      <p>
        The future value of a SIP investment is calculated using the following mathematical formula:
      </p>
      <p>
        <code>M = P × ((1 + i)ⁿ − 1) / i × (1 + i)</code>
      </p>
      <p>
        Where:
        <br />
        <strong>M</strong> is the estimated maturity amount.
        <br />
        <strong>P</strong> is the monthly SIP amount.
        <br />
        <strong>n</strong> is the total number of months (tenure in years × 12).
        <br />
        <strong>i</strong> is the monthly rate of return (annual expected return / 12 / 100).
      </p>

      <h2>The Power of Step-up SIP & Yearly Lump-sum Boost</h2>
      <p>
        A <strong>Step-up SIP</strong> (or Top-up SIP) allows you to increase your monthly
        contribution by a fixed percentage or amount every year — ideally in line with your annual
        salary hike. This simple habit drastically accelerates wealth creation.
      </p>
      <p>
        Similarly, adding a <strong>Yearly Lump-sum</strong> at the start of each year gives your
        portfolio a consistent boost that compounds over the entire tenure. Toggle the{" "}
        <strong>Advanced</strong> options in our calculator to model these scenarios. You will
        instantly see how a small 10% annual increase in your SIP can potentially double your final
        corpus compared to a flat SIP.
      </p>

      <h2>Why should you invest via SIP?</h2>
      <ul>
        <li>
          <strong>Rupee Cost Averaging:</strong> You buy more units when the market (NAV) is down
          and fewer units when the market is up. This averages out your purchase cost over time,
          protecting you from market volatility.
        </li>
        <li>
          <strong>Financial Discipline:</strong> Auto-debit mandates ensure you invest before you
          spend, building a strong savings habit.
        </li>
        <li>
          <strong>Power of Compounding:</strong> Returns generated on your investments start earning
          returns themselves. The earlier you start, the more pronounced this effect becomes.
        </li>
        <li>
          <strong>Flexibility:</strong> You can start, pause, stop, or modify your SIP amount at any
          time without any penalties.
        </li>
      </ul>

      <h2>Practical Tips for SIP Success</h2>
      <ul>
        <li>
          <strong>Step-Up Annually:</strong> Increase your SIP amount by at least 10% every year to
          beat inflation and reach your financial goals faster.
        </li>
        <li>
          <strong>Stay the Course:</strong> Never stop your SIPs during market crashes. Bear markets
          are when SIPs accumulate the maximum number of units at lower prices, setting you up for
          massive gains when the market recovers.
        </li>
        <li>
          <strong>Align with Goals:</strong> Use equity mutual funds for long-term goals (5+ years)
          and debt or liquid funds for short-term goals.
        </li>
      </ul>

      <h2>Taxation on Mutual Funds (via SIP)</h2>
      <p>
        When you redeem your mutual fund units, you are liable to pay capital gains tax. Each SIP
        installment is treated as a separate investment for calculating the holding period.
      </p>
      <ul>
        <li>
          <strong>Equity Funds:</strong> Short Term Capital Gains (STCG, held for &lt; 1 year) are
          taxed at 20%. Long Term Capital Gains (LTCG, held for &gt; 1 year) are taxed at 12.5% on
          gains exceeding ₹1.25 lakh in a financial year.
        </li>
        <li>
          <strong>Debt Funds:</strong> Gains are added to your taxable income and taxed according to
          your applicable income tax slab rate, regardless of the holding period.
        </li>
      </ul>
    </>
  );
}
