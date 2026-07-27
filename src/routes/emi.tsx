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
import { calcLoanSchedule } from "@/lib/calculators";

export const Route = createFileRoute("/emi")({
  head: () => ({
    meta: [
      { title: "EMI Calculator — Instant calculators" },
      {
        name: "description",
        content:
          "Calculate monthly EMI, model prepayments and step-up EMIs, and see the interest you save.",
      },
    ],
  }),
  component: EMIPage,
});

function EMIPage() {
  const [amount, setAmount] = useState(2000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(10);

  const [advanced, setAdvanced] = useState(false);
  const [monthlyPrepay, setMonthlyPrepay] = useState(5000);
  const [yearlyPrepay, setYearlyPrepay] = useState(50000);
  const [stepUp, setStepUp] = useState(5);

  const base = useMemo(() => calcLoanSchedule(amount, rate, years), [amount, rate, years]);
  const adv = useMemo(
    () =>
      calcLoanSchedule(amount, rate, years, {
        monthlyPrepay: advanced ? monthlyPrepay : 0,
        yearlyPrepay: advanced ? yearlyPrepay : 0,
        stepUpPct: advanced ? stepUp : 0,
      }),
    [amount, rate, years, advanced, monthlyPrepay, yearlyPrepay, stepUp],
  );

  const active = advanced ? adv : base;
  const interestSaved = Math.max(0, base.totalInterest - adv.totalInterest);
  const monthsSaved = Math.max(0, base.months - adv.months);
  const yearsSaved = Math.floor(monthsSaved / 12);
  const remMonths = monthsSaved % 12;
  const tenureLabel =
    monthsSaved === 0
      ? "No change"
      : `${yearsSaved > 0 ? `${yearsSaved}y ` : ""}${remMonths}m earlier`;

  return (
    <CalculatorShell
      title="EMI Calculator"
      description="Estimate monthly instalments, then layer prepayments or step-up EMIs and see exactly how much interest you save."
      article={<EMIArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Loan amount"
              suffix="₹"
              value={amount}
              onChange={setAmount}
              min={10000}
              max={20000000}
              step={10000}
            />
            <NumberField
              label="Interest rate"
              suffix="% p.a."
              value={rate}
              onChange={setRate}
              min={1}
              max={30}
              step={0.1}
            />
            <NumberField
              label="Tenure"
              suffix="yrs"
              value={years}
              onChange={setYears}
              min={1}
              max={30}
              step={1}
            />
            <AdvancedPanel
              enabled={advanced}
              onToggle={setAdvanced}
              title="Prepayments & step-up EMI"
              hint="Add extra payments or grow your EMI over time to cut interest and finish the loan sooner."
            >
              <NumberField
                label="Extra prepayment every month"
                suffix="₹"
                value={monthlyPrepay}
                onChange={setMonthlyPrepay}
                min={0}
                max={200000}
                step={500}
              />
              <NumberField
                label="Lump-sum prepayment every year"
                suffix="₹"
                value={yearlyPrepay}
                onChange={setYearlyPrepay}
                min={0}
                max={2000000}
                step={5000}
              />
              <NumberField
                label="Annual EMI step-up"
                suffix="%"
                value={stepUp}
                onChange={setStepUp}
                min={0}
                max={25}
                step={0.5}
              />
            </AdvancedPanel>
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile tone="accent" label="Monthly EMI" value={formatINR(base.emi)} />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="Total interest" value={formatINR(active.totalInterest)} />
            <ResultTile label="Total payable" value={formatINR(active.totalPaid)} />
          </div>
          <ResultTile label="Principal" value={formatINR(amount)} />
          {advanced && (
            <div className="mt-2">
              <SavingsCallout
                headline={
                  interestSaved > 0
                    ? `You save ${formatINR(interestSaved)} in interest`
                    : "Adjust prepayments to see savings"
                }
                metrics={[
                  { label: "Interest saved", value: formatINR(interestSaved), highlight: true },
                  { label: "Loan closes", value: tenureLabel, highlight: monthsSaved > 0 },
                  { label: "Baseline interest", value: formatINR(base.totalInterest) },
                ]}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-2">
        <BreakdownPie
          data={[
            { name: "Principal", value: amount },
            { name: "Interest", value: active.totalInterest },
          ]}
        />
        <YearlyBars
          title="Principal vs interest each year"
          data={active.rows}
          keys={[
            { key: "Principal", label: "Principal", color: CHART_COLORS.accent },
            { key: "Interest", label: "Interest", color: CHART_COLORS.warn },
            ...(advanced
              ? [{ key: "Prepaid", label: "Prepaid", color: CHART_COLORS.accentDeep }]
              : []),
          ]}
        />
      </div>

      <div className="mt-8">
        <AmortisationTable
          title="Amortisation schedule"
          subtitle="How much of each year's EMIs is principal vs interest, and what's left to pay."
          columns={[
            { key: "year", label: "Year" },
            { key: "Principal", label: "Principal paid", tone: "accent" },
            { key: "Interest", label: "Interest paid" },
            ...(advanced ? [{ key: "Prepaid", label: "Prepaid" } as const] : []),
            { key: "Balance", label: "Balance", tone: "muted" as const },
          ]}
          rows={active.rows}
        />
      </div>
    </CalculatorShell>
  );
}

function EMIArticle() {
  return (
    <>
      <h2>About the EMI Calculator</h2>
      <p className="lead">
        An EMI (Equated Monthly Instalment) is the fixed amount you pay to a lender every month
        until the loan is fully repaid. Each EMI is a mix of principal and interest — early on it is
        mostly interest, and towards the end it is mostly principal. Use our advanced EMI calculator
        to plan your finances for a home loan, car loan, or personal loan.
      </p>

      <h3>How EMI is calculated</h3>
      <p>
        The standard formula used by every Indian bank is:
        <br />
        <code>EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ − 1)</code>
      </p>
      <p>
        Where:
        <br />
        <strong>P</strong> is the principal loan amount.
        <br />
        <strong>r</strong> is the monthly interest rate (annual rate divided by 12 and expressed as
        a decimal).
        <br />
        <strong>n</strong> is the loan duration in months.
      </p>

      <h2>What is an Amortisation Schedule?</h2>
      <p>
        An amortisation schedule is a complete table of periodic loan payments, showing the amount
        of principal and the amount of interest that comprise each payment until the loan is paid
        off at the end of its term. Early in the schedule, the majority of each payment is directed
        toward interest; later in the schedule, the majority goes toward the principal. This helps
        you understand how your loan balance decreases over time.
      </p>

      <h2>Prepayments & step-up EMIs</h2>
      <p>
        Any extra rupee you pay goes straight to principal — which means the interest on every
        future month is smaller. Turn on Advanced options above to model a monthly extra, an annual
        bonus lump-sum, or an EMI that grows a few percent each year alongside your salary. The
        savings callout shows exactly how much interest disappears and how many months earlier the
        loan closes. Prepayments are one of the most effective ways to become debt-free faster.
      </p>

      <h2>Tips to reduce interest on your loans</h2>
      <ul>
        <li>
          <strong>Make part-prepayments:</strong> Even a single extra EMI per year can shorten your
          tenure significantly. Use bonuses or tax refunds to prepay.
        </li>
        <li>
          <strong>Choose a shorter tenure:</strong> While it increases your EMI, a shorter tenure
          drastically reduces the total interest outgo.
        </li>
        <li>
          <strong>Balance transfer:</strong> Switch lenders if a competing bank offers a
          significantly lower interest rate (usually 50+ basis points lower). Be mindful of
          processing fees.
        </li>
        <li>
          <strong>Step-up EMIs:</strong> As your income increases, voluntarily increase your EMI
          amount every year. This will accelerate your principal repayment.
        </li>
      </ul>

      <h2>Why use Instant calculators's EMI Calculator?</h2>
      <p>
        Our EMI calculator goes beyond basic calculations. It allows you to model real-world
        scenarios like step-up EMIs (increasing EMIs over time) and regular prepayments. This
        comprehensive approach gives you a clearer picture of your loan repayment journey and helps
        you make informed financial decisions. The data is entirely private and calculated locally
        on your device.
      </p>
    </>
  );
}
