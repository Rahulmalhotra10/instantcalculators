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
import { calcFD } from "@/lib/calculators";

export const Route = createFileRoute("/fd")({
  head: () => ({
    meta: [
      { title: "FD Calculator — Instant calculators" },
      {
        name: "description",
        content: "Fixed deposit maturity, interest earned, and a year-by-year schedule.",
      },
    ],
  }),
  component: FDPage,
});

function FDPage() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const r = useMemo(() => calcFD(amount, rate, years), [amount, rate, years]);

  const schedule = useMemo(() => {
    const rows: { year: number; Deposit: number; Interest: number; Value: number }[] = [];
    let prev = amount;
    for (let y = 1; y <= years; y++) {
      const value = amount * Math.pow(1 + rate / 400, 4 * y);
      rows.push({
        year: y,
        Deposit: amount,
        Interest: Math.round(value - prev),
        Value: Math.round(value),
      });
      prev = value;
    }
    return rows;
  }, [amount, rate, years]);

  return (
    <CalculatorShell
      title="FD Calculator"
      description="Fixed deposit maturity, compounded quarterly, with a full yearly breakdown."
      article={<FDArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Deposit amount"
              suffix="₹"
              value={amount}
              onChange={setAmount}
              min={1000}
              max={10000000}
              step={1000}
            />
            <NumberField
              label="Interest rate"
              suffix="% p.a."
              value={rate}
              onChange={setRate}
              min={1}
              max={15}
              step={0.1}
            />
            <NumberField
              label="Tenure"
              suffix="yrs"
              value={years}
              onChange={setYears}
              min={1}
              max={20}
              step={1}
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
            { name: "Deposit", value: r.invested },
            { name: "Interest", value: r.interest },
          ]}
        />
        <YearlyBars
          title="Deposit vs interest each year"
          data={schedule}
          keys={[
            { key: "Deposit", label: "Deposit", color: "rgba(245,242,232,0.35)" },
            { key: "Interest", label: "Interest earned", color: CHART_COLORS.accent },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Year-by-year schedule"
          subtitle="Interest is compounded quarterly and shown as the amount earned each year."
          columns={[
            { key: "year", label: "Year" },
            { key: "Deposit", label: "Principal" },
            { key: "Interest", label: "Interest this year", tone: "accent" },
            { key: "Value", label: "Balance", tone: "muted" },
          ]}
          rows={schedule}
        />
      </div>
    </CalculatorShell>
  );
}

function FDArticle() {
  return (
    <>
      <h2>About the FD Calculator</h2>
      <p className="lead">
        A Fixed Deposit (FD) locks a lump sum amount with a bank or non-banking financial company
        (NBFC) for a chosen tenure at a guaranteed interest rate. It is one of the most secure and
        popular investment options in India, offering assured returns unaffected by market
        volatility. Interest is usually compounded quarterly and paid out at maturity for cumulative
        FDs.
      </p>

      <h3>How is FD Interest Calculated?</h3>
      <p>
        The maturity amount for a cumulative Fixed Deposit is calculated using the compound interest
        formula:
      </p>
      <p>
        <code>A = P × (1 + r/n)^(n·t)</code>
      </p>
      <p>
        Where:
        <br />
        <strong>A</strong> is the maturity amount.
        <br />
        <strong>P</strong> is the principal amount deposited.
        <br />
        <strong>r</strong> is the annual interest rate (in decimal).
        <br />
        <strong>n</strong> is the number of times interest is compounded in a year (typically 4 for
        quarterly compounding in India).
        <br />
        <strong>t</strong> is the tenure in years.
      </p>

      <h2>Benefits of Investing in Fixed Deposits</h2>
      <ul>
        <li>
          <strong>Guaranteed Returns:</strong> Unlike equity investments, FD returns are fixed at
          the time of booking and do not fluctuate with the market.
        </li>
        <li>
          <strong>Capital Safety:</strong> Deposits in scheduled commercial banks are insured up to
          ₹5 lakh by DICGC, making them highly secure.
        </li>
        <li>
          <strong>Flexible Tenure:</strong> You can choose a tenure ranging from a few days (e.g., 7
          days) to 10 years, matching your financial goals.
        </li>
        <li>
          <strong>Loan against FD:</strong> In case of an emergency, you can take a loan or
          overdraft against your FD, typically up to 90% of the deposit amount, usually at an
          interest rate slightly higher than the FD rate.
        </li>
        <li>
          <strong>Senior Citizen Benefits:</strong> Banks typically offer an additional 0.50% to
          0.75% interest rate to senior citizens (aged 60 and above).
        </li>
      </ul>

      <h2>Types of Fixed Deposits</h2>
      <ul>
        <li>
          <strong>Cumulative FDs:</strong> Interest is compounded quarterly and reinvested, paying
          the total principal and interest at maturity. Best for wealth creation.
        </li>
        <li>
          <strong>Non-Cumulative FDs:</strong> Interest is paid out regularly (monthly, quarterly,
          half-yearly, or annually). Ideal for those seeking regular income.
        </li>
        <li>
          <strong>Tax-Saving FDs:</strong> Comes with a lock-in period of 5 years. The principal
          amount (up to ₹1.5 lakh) is eligible for tax deduction under Section 80C.
        </li>
      </ul>

      <h2>Taxation on FD Interest</h2>
      <ul>
        <li>
          The interest earned on an FD is fully taxable as "Income from Other Sources" according to
          your income tax slab rate.
        </li>
        <li>
          Banks deduct TDS (Tax Deducted at Source) at 10% if the annual interest income across all
          branches exceeds ₹40,000 (₹50,000 for senior citizens).
        </li>
        <li>
          If your total income is below the taxable limit, you can submit Form 15G (or Form 15H for
          senior citizens) to the bank to request non-deduction of TDS.
        </li>
      </ul>

      <h2>Why use Instant calculators's FD Calculator?</h2>
      <p>
        Our Fixed Deposit calculator gives you an accurate projection of your maturity amount and
        total interest earned, helping you plan your investments better. By assuming standard
        quarterly compounding, it mirrors the calculations used by major Indian banks.
      </p>
    </>
  );
}
