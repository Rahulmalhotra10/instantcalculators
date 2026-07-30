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
  CHART_COLORS,
} from "@/components/CalculatorShell";
import { calcNPS } from "@/lib/calculators";

export const Route = createFileRoute("/nps")({
  head: () => ({
    meta: [
      { title: "NPS Calculator — Instant calculators" },
      {
        name: "description",
        content:
          "Plan your retirement with National Pension System (NPS). Calculate your corpus and monthly pension.",
      },
    ],
  }),
  component: NPSPage,
});

function NPSPage() {
  const [monthly, setMonthly] = useState(5000);
  const [currentAge, setCurrentAge] = useState(30);
  const [rate, setRate] = useState(10);

  const [advanced, setAdvanced] = useState(false);
  const [annuityPct, setAnnuityPct] = useState(40);
  const [annuityRate, setAnnuityRate] = useState(6);

  const active = useMemo(
    () =>
      calcNPS(monthly, rate, currentAge, {
        annuityPct: advanced ? annuityPct : 40,
        annuityRate: advanced ? annuityRate : 6,
      }),
    [monthly, rate, currentAge, advanced, annuityPct, annuityRate],
  );

  return (
    <CalculatorShell
      title="NPS Calculator"
      description="Estimate your retirement corpus and monthly pension with the National Pension System (NPS)."
      article={<NPSArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Investment per month"
              suffix="₹"
              value={monthly}
              onChange={setMonthly}
              min={500}
              max={150000}
              step={500}
            />
            <NumberField
              label="Current age"
              suffix="yrs"
              value={currentAge}
              onChange={setCurrentAge}
              min={18}
              max={60}
              step={1}
            />
            <NumberField
              label="Expected return (till age 60)"
              suffix="% p.a."
              value={rate}
              onChange={setRate}
              min={1}
              max={30}
              step={0.5}
            />
            <AdvancedPanel
              enabled={advanced}
              onToggle={setAdvanced}
              title="Annuity settings"
              hint="Adjust how much of your final corpus goes into a pension annuity plan."
            >
              <NumberField
                label="Percentage into annuity (min 40%)"
                suffix="%"
                value={annuityPct}
                onChange={(val) => setAnnuityPct(Math.max(40, val))}
                min={40}
                max={100}
                step={5}
              />
              <NumberField
                label="Expected annuity rate"
                suffix="% p.a."
                value={annuityRate}
                onChange={setAnnuityRate}
                min={3}
                max={15}
                step={0.5}
              />
            </AdvancedPanel>
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Total Corpus" value={formatINR(active.corpus)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Total invested" value={formatINR(active.invested)} />
            <ResultTile label="Wealth gained" value={formatINR(active.gains)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ResultTile
              tone="accent"
              label="Monthly pension"
              value={formatINR(active.monthlyPension)}
            />
            <ResultTile
              tone="accent"
              label="Lumpsum at 60"
              value={formatINR(active.lumpsumAmount)}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Invested", value: active.invested },
            { name: "Gains", value: active.gains },
          ]}
        />
        <YearlyBars
          title="Corpus growth over time"
          data={active.rows}
          keys={[
            { key: "Invested", label: "Invested", color: CHART_COLORS.accent },
            { key: "Returns", label: "Returns", color: CHART_COLORS.warn },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Wealth accumulation"
          subtitle="Year-by-year split of your contributions and compound returns."
          columns={[
            { key: "year", label: "Year" },
            { key: "Invested", label: "Total Invested" },
            { key: "Returns", label: "Total Returns" },
            { key: "Value", label: "Total Value", tone: "accent" },
          ]}
          rows={active.rows}
        />
      </div>
    </CalculatorShell>
  );
}

function NPSArticle() {
  return (
    <>
      <h2>About National Pension System (NPS)</h2>
      <p className="lead">
        The National Pension System (NPS) is a voluntary, long-term retirement savings scheme
        created by the Government of India and regulated by the Pension Fund Regulatory and
        Development Authority (PFRDA). It is designed to help individuals build a substantial
        retirement corpus through systematic investments during their working life, ensuring
        financial stability in their post-retirement years.
      </p>

      <h2>How NPS works at age 60 (Maturity)</h2>
      <p>When you reach the age of 60, your accumulated NPS corpus is handled in two parts:</p>
      <ul>
        <li>
          <strong>Annuity Purchase (Minimum 40%):</strong> You are mandated to use at least 40% of
          your total corpus to purchase a life annuity from a PFRDA-registered life insurance
          company. This provides you with a guaranteed, regular monthly pension for the rest of your
          life.
        </li>
        <li>
          <strong>Lumpsum Withdrawal (Up to 60%):</strong> You can withdraw up to 60% of your total
          corpus as a lumpsum. The best part is that this 60% withdrawal is completely tax-free
          under current tax laws.
        </li>
      </ul>

      <h2>NPS Tax Benefits Explained</h2>
      <p>
        NPS offers some of the most attractive tax deductions among Indian investment options,
        falling under the Exempt-Exempt-Exempt (EEE) status for the most part.
      </p>
      <ul>
        <li>
          <strong>Under Section 80CCD(1):</strong> Tax deduction on investments up to ₹1.5 Lakh per
          financial year (this is within the overall Section 80C limit).
        </li>
        <li>
          <strong>Under Section 80CCD(1B):</strong> An exclusive, additional tax deduction of up to
          ₹50,000. This makes the total potential tax deduction ₹2 Lakhs per year.
        </li>
        <li>
          <strong>Under Section 80CCD(2):</strong> Employer's contribution to your NPS account (up
          to 10% of Basic Salary + DA) is eligible for tax deduction over and above the ₹2 Lakh
          limit.
        </li>
        <li>
          <strong>Tax-Free Lumpsum:</strong> At age 60, the 60% lumpsum withdrawal is completely
          exempt from income tax.
        </li>
      </ul>

      <h2>Types of NPS Accounts</h2>
      <ul>
        <li>
          <strong>Tier I Account:</strong> This is the mandatory, primary retirement account. It
          comes with tax benefits and has strict withdrawal restrictions until the age of 60.
        </li>
        <li>
          <strong>Tier II Account:</strong> This is an optional, voluntary savings account. You can
          withdraw money from this account at any time, but it does not offer the tax benefits
          available in Tier I (except for Central Government employees under specific conditions).
          You must have an active Tier I account to open a Tier II account.
        </li>
      </ul>

      <h2>Why use Instant calculators's NPS Calculator?</h2>
      <p>
        Planning for retirement requires understanding the power of compounding over decades. Our
        NPS calculator helps you estimate the future value of your monthly contributions, project
        your total corpus at age 60, and calculate your estimated monthly pension based on expected
        annuity rates. By playing with the advanced settings, you can visualize how different
        annuity percentages impact your regular income and lumpsum payout.
      </p>
    </>
  );
}
