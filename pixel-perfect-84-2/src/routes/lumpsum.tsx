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
import { calcLumpsum } from "@/lib/calculators";

export const Route = createFileRoute("/lumpsum")({
  head: () => ({
    meta: [
      { title: "Lumpsum Calculator — Instant calculators" },
      { name: "description", content: "See how a one-time investment compounds year by year." },
    ],
  }),
  component: LumpsumPage,
});

function LumpsumPage() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const r = useMemo(() => calcLumpsum(amount, rate, years), [amount, rate, years]);

  const schedule = useMemo(() => {
    const rows: { year: number; Principal: number; Returns: number; Value: number }[] = [];
    let prev = amount;
    for (let y = 1; y <= years; y++) {
      const value = amount * Math.pow(1 + rate / 100, y);
      rows.push({
        year: y,
        Principal: amount,
        Returns: Math.round(value - prev),
        Value: Math.round(value),
      });
      prev = value;
    }
    return rows;
  }, [amount, rate, years]);

  return (
    <CalculatorShell
      title="Lumpsum Calculator"
      description="Watch a one-time investment snowball through the years."
      article={<LumpsumArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Investment amount"
              suffix="₹"
              value={amount}
              onChange={setAmount}
              min={1000}
              max={10000000}
              step={1000}
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
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Maturity value" value={formatINR(r.maturity)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Invested" value={formatINR(r.invested)} />
            <ResultTile label="Est. returns" value={formatINR(r.gains)} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Invested", value: r.invested },
            { name: "Returns", value: r.gains },
          ]}
        />
        <YearlyBars
          title="Principal vs returns each year"
          data={schedule}
          keys={[
            { key: "Principal", label: "Principal", color: "rgba(245,242,232,0.35)" },
            { key: "Returns", label: "Returns this year", color: CHART_COLORS.accent },
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Year-by-year growth"
          subtitle="Your principal stays put — the returns column shows what compounding added each year."
          columns={[
            { key: "year", label: "Year" },
            { key: "Principal", label: "Principal" },
            { key: "Returns", label: "Returns this year", tone: "accent" },
            { key: "Value", label: "End value", tone: "muted" },
          ]}
          rows={schedule}
        />
      </div>
    </CalculatorShell>
  );
}

function LumpsumArticle() {
  return (
    <>
      <h2>About the Lumpsum Calculator</h2>
      <p className="lead">
        A lumpsum investment involves putting a single, large amount of money into an investment
        vehicle (like a mutual fund) at one time, and letting the power of compounding grow it over
        the chosen tenure. It is often preferred when you have a sudden influx of cash, such as an
        annual bonus, maturity proceeds from another investment, or an inheritance.
      </p>

      <h3>How is Lumpsum Return Calculated?</h3>
      <p>
        The future value of a lumpsum investment is calculated using the standard compound interest
        formula:
      </p>
      <p>
        <code>A = P × (1 + r)ⁿ</code>
      </p>
      <p>
        Where:
        <br />
        <strong>A</strong> is the estimated maturity amount.
        <br />
        <strong>P</strong> is the principal amount invested.
        <br />
        <strong>r</strong> is the expected annual rate of return (expressed as a decimal).
        <br />
        <strong>n</strong> is the number of years the money stays invested.
      </p>

      <h2>Lumpsum vs SIP (Systematic Investment Plan)</h2>
      <p>
        <strong>Lumpsum</strong> investments mathematically tend to generate higher absolute returns
        over the long term if the market rises steadily, because your entire capital is exposed to
        the market for the full duration.
      </p>
      <p>
        <strong>SIPs</strong>, on the other hand, are better for salaried individuals who want to
        invest a fixed amount every month. SIPs benefit from Rupee Cost Averaging, smoothing out
        market volatility by buying more units when prices are low and fewer when prices are high.
        Most successful investors use a combination of both: SIPs for regular income and lumpsum
        investments when they receive windfall gains.
      </p>

      <h2>Benefits of Lumpsum Investments</h2>
      <ul>
        <li>
          <strong>Maximum Time in the Market:</strong> Your entire capital starts earning returns
          immediately, maximizing the compounding effect over a long horizon.
        </li>
        <li>
          <strong>Convenience:</strong> It's a one-time process. You don't need to track monthly
          deductions from your bank account.
        </li>
        <li>
          <strong>Ideal for Windfalls:</strong> Perfect way to deploy large sums of idle cash
          efficiently.
        </li>
      </ul>

      <h2>Things to Keep in Mind</h2>
      <ul>
        <li>
          <strong>Market Timing Risk:</strong> Investing a lumpsum right before a market correction
          can lead to short-term losses. If you are investing in equity mutual funds, consider
          staggering your lumpsum using a Systematic Transfer Plan (STP).
        </li>
        <li>
          <strong>Long-Term Horizon:</strong> Lumpsum investments in equities should ideally have a
          time horizon of 5-7+ years to ride out market volatility.
        </li>
        <li>
          <strong>Taxes:</strong> Equity investments held for over a year attract Long Term Capital
          Gains (LTCG) tax of 12.5% (on gains above ₹1.25 lakh per financial year), while those held
          for less than a year attract Short Term Capital Gains (STCG) tax of 20%.
        </li>
      </ul>

      <h2>Why use Instant calculators's Lumpsum Calculator?</h2>
      <p>
        Our calculator provides a clear visual breakdown of how your wealth will grow over time. The
        charts instantly show you how much of your final corpus is your own invested capital versus
        the wealth generated through compounding. This helps in setting realistic financial goals
        and retirement planning.
      </p>
    </>
  );
}
