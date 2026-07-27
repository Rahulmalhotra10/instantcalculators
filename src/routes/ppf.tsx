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
  CHART_COLORS,
} from "@/components/CalculatorShell";
import { calcPPF } from "@/lib/calculators";

export const Route = createFileRoute("/ppf")({
  head: () => ({
    meta: [
      { title: "PPF Calculator — Instant calculators" },
      {
        name: "description",
        content: "Long-term PPF growth with a full yearly contribution and interest schedule.",
      },
    ],
  }),
  component: PPFPage,
});

function PPFPage() {
  const [yearly, setYearly] = useState(150000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(7.1);
  const r = useMemo(() => calcPPF(yearly, years, rate), [yearly, years, rate]);

  const schedule = useMemo(() => {
    const rows: { year: number; Deposited: number; Interest: number; Balance: number }[] = [];
    let balance = 0;
    for (let y = 1; y <= years; y++) {
      const open = balance + yearly;
      balance = open * (1 + rate / 100);
      rows.push({
        year: y,
        Deposited: yearly * y,
        Interest: Math.round(balance - open),
        Balance: Math.round(balance),
      });
    }
    return rows;
  }, [yearly, years, rate]);

  return (
    <CalculatorShell
      title="PPF Calculator"
      description="Public Provident Fund growth with yearly contributions — every year charted and tabled."
      article={<PPFArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Yearly investment"
              suffix="₹"
              value={yearly}
              onChange={setYearly}
              min={500}
              max={150000}
              step={500}
            />
            <NumberField
              label="Tenure"
              suffix="yrs"
              value={years}
              onChange={setYears}
              min={15}
              max={30}
              step={1}
            />
            <NumberField
              label="Interest rate"
              suffix="% p.a."
              value={rate}
              onChange={setRate}
              min={1}
              max={12}
              step={0.1}
            />
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Maturity value" value={formatINR(r.maturity)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Invested" value={formatINR(r.invested)} />
            <ResultTile label="Interest" value={formatINR(r.interest)} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Invested", value: r.invested },
            { name: "Interest", value: r.interest },
          ]}
        />
        <YearlyBars
          title="Deposits vs balance each year"
          data={schedule}
          stacked={false}
          keys={[
            { key: "Deposited", label: "Cumulative invested", color: "rgba(245,242,232,0.35)" },
            { key: "Balance", label: "Balance", color: CHART_COLORS.accent },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Year-by-year schedule"
          subtitle="Contributions credit at the start of the year; interest is credited at year end."
          columns={[
            { key: "year", label: "Year" },
            { key: "Deposited", label: "Total invested" },
            { key: "Interest", label: "Interest this year", tone: "accent" },
            { key: "Balance", label: "Balance", tone: "muted" },
          ]}
          rows={schedule}
        />
      </div>
    </CalculatorShell>
  );
}

function PPFArticle() {
  return (
    <>
      <h2>About the PPF Calculator</h2>
      <p className="lead">
        The Public Provident Fund (PPF) is a popular, 15-year, government-backed savings scheme in
        India. It is highly favored for its combination of safety, guaranteed returns, and
        exceptional tax benefits (EEE status).
      </p>

      <h2>Key Features of PPF</h2>
      <ul>
        <li>
          <strong>Tenure:</strong> The minimum lock-in period is 15 years. After maturity, you can
          extend the account in blocks of 5 years, with or without making further contributions.
        </li>
        <li>
          <strong>Investment Limits:</strong> You must deposit a minimum of ₹500 per financial year
          to keep the account active. The maximum deposit allowed is ₹1.5 Lakh per financial year.
        </li>
        <li>
          <strong>Interest Rate:</strong> The interest rate is guaranteed by the Government of India
          and is reviewed and declared quarterly by the Ministry of Finance.
        </li>
        <li>
          <strong>Interest Calculation:</strong> Interest is calculated monthly on the lowest
          balance between the 5th and the last day of the month. However, it is credited to the
          account annually at the end of the financial year.{" "}
          <em>Tip: Invest before the 5th of the month to maximize interest!</em>
        </li>
      </ul>

      <h2>Tax Benefits (EEE Status)</h2>
      <p>
        PPF falls under the coveted "Exempt-Exempt-Exempt" (EEE) tax category, making it one of the
        most tax-efficient investment vehicles:
      </p>
      <ul>
        <li>
          <strong>Exempt 1 (Investment):</strong> Your annual contributions up to ₹1.5 Lakh are
          eligible for tax deduction under Section 80C of the Income Tax Act.
        </li>
        <li>
          <strong>Exempt 2 (Accumulation):</strong> The interest earned every year is completely
          exempt from income tax.
        </li>
        <li>
          <strong>Exempt 3 (Maturity):</strong> The entire maturity corpus (principal + accumulated
          interest) withdrawn after 15 years is absolutely tax-free.
        </li>
      </ul>

      <h2>Withdrawals and Loans</h2>
      <ul>
        <li>
          <strong>Loans:</strong> You can avail a loan against your PPF balance between the 3rd and
          6th financial year from the year the account was opened.
        </li>
        <li>
          <strong>Partial Withdrawals:</strong> Allowed from the 7th financial year onwards, subject
          to specific limits and conditions.
        </li>
        <li>
          <strong>Premature Closure:</strong> Allowed only after 5 years for specific reasons like
          treating a life-threatening disease or higher education of children, but it comes with a
          1% penalty on the interest rate.
        </li>
      </ul>

      <h2>Why use Instant calculators's PPF Calculator?</h2>
      <p>
        Since PPF is a 15-year commitment, predicting the final corpus can be tricky without the
        right tools. Our PPF calculator lets you model your annual contributions and projects your
        exact tax-free maturity amount. The visual charts help you see the dramatic effect of
        compounding, especially in the later years of the 15-year tenure.
      </p>
    </>
  );
}
