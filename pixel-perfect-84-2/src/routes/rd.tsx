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
import { calcRD } from "@/lib/calculators";

export const Route = createFileRoute("/rd")({
  head: () => ({
    meta: [
      { title: "RD Calculator — Instant calculators" },
      {
        name: "description",
        content: "Recurring deposit maturity with year-by-year interest and balance.",
      },
    ],
  }),
  component: RDPage,
});

function RDPage() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const r = useMemo(() => calcRD(monthly, rate, years), [monthly, rate, years]);

  const schedule = useMemo(() => {
    const mr = rate / 12 / 100;
    const rows: { year: number; Deposited: number; Interest: number; Value: number }[] = [];
    let value = 0,
      invested = 0,
      prev = 0;
    for (let m = 1; m <= years * 12; m++) {
      value = (value + monthly) * (1 + mr);
      invested += monthly;
      if (m % 12 === 0) {
        rows.push({
          year: m / 12,
          Deposited: invested,
          Interest: Math.round(value - prev - monthly * 12),
          Value: Math.round(value),
        });
        prev = value;
      }
    }
    return rows;
  }, [monthly, rate, years]);

  return (
    <CalculatorShell
      title="RD Calculator"
      description="Disciplined monthly savings — see the maturity and how interest builds up each year."
      article={<RDArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Monthly deposit"
              suffix="₹"
              value={monthly}
              onChange={setMonthly}
              min={100}
              max={100000}
              step={100}
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
            <NumberField
              label="Tenure"
              suffix="yrs"
              value={years}
              onChange={setYears}
              min={1}
              max={10}
              step={1}
            />
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Maturity value" value={formatINR(r.maturity)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Deposited" value={formatINR(r.invested)} />
            <ResultTile label="Interest" value={formatINR(r.interest)} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Deposited", value: r.invested },
            { name: "Interest", value: r.interest },
          ]}
        />
        <YearlyBars
          title="Deposits vs interest each year"
          data={schedule}
          stacked={false}
          keys={[
            { key: "Deposited", label: "Total deposited", color: "rgba(245,242,232,0.35)" },
            { key: "Value", label: "Balance", color: CHART_COLORS.accent },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Year-by-year schedule"
          columns={[
            { key: "year", label: "Year" },
            { key: "Deposited", label: "Total deposited" },
            { key: "Interest", label: "Interest this year", tone: "accent" },
            { key: "Value", label: "Balance", tone: "muted" },
          ]}
          rows={schedule}
        />
      </div>
    </CalculatorShell>
  );
}

function RDArticle() {
  return (
    <>
      <h2>About the RD (Recurring Deposit) Calculator</h2>
      <p className="lead">
        A Recurring Deposit (RD) is a highly popular term deposit offered by Indian banks and post
        offices. It is designed to help salaried individuals build a corpus by depositing a fixed
        amount of money every month over a specified tenure, earning a guaranteed interest rate
        similar to a Fixed Deposit (FD).
      </p>

      <h2>How is RD Interest Calculated?</h2>
      <p>
        RD interest is slightly more complex than FD interest because the principal increases every
        month. The interest is typically compounded quarterly.
      </p>
      <p>
        The formula used for RD maturity calculation is:
        <br />
        <code>M = R × [(1 + i)ⁿ - 1] / [1 - (1 + i)^(-1/3)]</code>
      </p>
      <p>
        Where:
        <br />
        <strong>M</strong> is the Maturity value.
        <br />
        <strong>R</strong> is the monthly instalment.
        <br />
        <strong>n</strong> is the number of quarters.
        <br />
        <strong>i</strong> is the interest rate per quarter.
      </p>

      <h2>Key Features of Recurring Deposits</h2>
      <ul>
        <li>
          <strong>Systematic Savings:</strong> Encourages financial discipline through mandatory
          monthly deposits via auto-debit.
        </li>
        <li>
          <strong>Fixed Returns:</strong> The interest rate is locked in at the time of opening the
          RD, shielding you from subsequent rate cuts.
        </li>
        <li>
          <strong>Low Entry Barrier:</strong> You can start an RD with an amount as small as ₹100
          per month (varies by bank).
        </li>
        <li>
          <strong>Flexible Tenure:</strong> Tenures generally range from 6 months to 10 years.
        </li>
        <li>
          <strong>Safety:</strong> Bank RDs are insured up to ₹5 lakh by DICGC, making them
          virtually risk-free.
        </li>
      </ul>

      <h2>When should you choose an RD?</h2>
      <ul>
        <li>
          <strong>Short-Term Goals:</strong> Ideal for saving up for a down payment, a vacation, or
          buying an expensive gadget within the next 1 to 3 years.
        </li>
        <li>
          <strong>No Lumpsum Available:</strong> When you don't have a large amount to invest in an
          FD but want to earn similar interest rates through monthly savings.
        </li>
        <li>
          <strong>Risk-Averse Investors:</strong> Perfect for those who prefer guaranteed returns
          over the volatility of equity mutual funds (SIPs).
        </li>
      </ul>

      <h2>Taxation on RD Interest</h2>
      <ul>
        <li>
          The interest earned on a Recurring Deposit is fully taxable as per your applicable income
          tax slab.
        </li>
        <li>
          Banks deduct TDS (Tax Deducted at Source) at 10% if the total interest earned from all FDs
          and RDs across all branches of the bank exceeds ₹40,000 in a financial year (₹50,000 for
          senior citizens).
        </li>
        <li>
          You can submit Form 15G or 15H to avoid TDS if your total income is below the basic
          exemption limit.
        </li>
      </ul>

      <h2>Why use Instant calculators's RD Calculator?</h2>
      <p>
        Our RD calculator accurately models the quarterly compounding mechanism used by Indian
        banks. It instantly shows you the total amount you will invest, the exact interest you will
        earn, and the final maturity value. This precision is crucial for planning your short-term
        financial goals effectively.
      </p>
    </>
  );
}
