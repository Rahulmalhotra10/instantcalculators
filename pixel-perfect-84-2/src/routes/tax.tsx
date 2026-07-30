import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CalculatorShell,
  NumberField,
  ResultTile,
  formatINR,
  InputCard,
  CompareBar,
} from "@/components/CalculatorShell";
import { calcTaxNewRegime, calcTaxOldRegime } from "@/lib/calculators";

export const Route = createFileRoute("/tax")({
  head: () => ({
    meta: [
      { title: "Income Tax Calculator — Instant calculators" },
      { name: "description", content: "Compare old vs new tax regimes for FY 2024-25 (India)." },
    ],
  }),
  component: TaxPage,
});

function TaxPage() {
  const [income, setIncome] = useState(1200000);
  const [deductions, setDeductions] = useState(150000);
  const nu = useMemo(() => calcTaxNewRegime(income), [income]);
  const old = useMemo(() => calcTaxOldRegime(income, deductions), [income, deductions]);
  const better = nu.tax <= old.tax ? "New" : "Old";
  const saving = Math.abs(nu.tax - old.tax);

  return (
    <CalculatorShell
      title="Income Tax Calculator"
      description="Compare old vs new regime for FY 2024-25 and see which one costs you less."
      article={<TaxArticle />}
    >
      <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
        <div className="grid gap-6 content-start">
          <InputCard>
            <NumberField
              label="Annual income"
              suffix="₹"
              value={income}
              onChange={setIncome}
              min={100000}
              max={10000000}
              step={10000}
            />
            <NumberField
              label="Deductions (80C, HRA, etc.)"
              suffix="₹"
              value={deductions}
              onChange={setDeductions}
              min={0}
              max={500000}
              step={5000}
            />
            <p className="text-xs text-black/50">
              Includes 4% health &amp; education cess. Standard deduction applied to old regime.
            </p>
          </InputCard>
        </div>
        <div className="grid gap-4 content-start">
          <ResultTile
            tone="accent"
            label={`Better regime: ${better}`}
            value={formatINR(Math.min(nu.tax, old.tax))}
          />
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="New regime tax" value={formatINR(nu.tax)} />
            <ResultTile label="Old regime tax" value={formatINR(old.tax)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ResultTile label="New — effective" value={`${nu.effective.toFixed(2)}%`} />
            <ResultTile label="Old — effective" value={`${old.effective.toFixed(2)}%`} />
          </div>
          <ResultTile label={`Yearly saving with ${better} regime`} value={formatINR(saving)} />
        </div>
      </div>

      <div className="mt-8">
        <CompareBar
          title="Old vs new regime"
          data={[
            { name: "New regime", value: Math.round(nu.tax) },
            { name: "Old regime", value: Math.round(old.tax) },
          ]}
        />
      </div>
    </CalculatorShell>
  );
}

function TaxArticle() {
  return (
    <>
      <h2>About the Income Tax Calculator (Old vs New Regime)</h2>
      <p className="lead">
        Salaried individuals and HUFs in India have the option to choose between two tax regimes
        every financial year: the Old Tax Regime and the New Tax Regime (introduced in Budget 2020
        and revised subsequently). This calculator helps you compare your tax liability under both
        regimes to make an informed, tax-saving decision.
      </p>

      <h2>The New Tax Regime (Default Regime)</h2>
      <p>
        The New Tax Regime offers lower tax rates across multiple income slabs but eliminates most
        of the traditional tax exemptions and deductions (like 80C, 80D, HRA, LTA, etc.). As of FY
        2023-24 (AY 2024-25), it is the default tax regime. Standard deduction of ₹50,000 has been
        extended to the new regime for salaried taxpayers.
      </p>
      <h3>New Regime Slabs (FY 2024-25 / AY 2025-26)</h3>
      <ul>
        <li>Up to ₹3,00,000 — Nil</li>
        <li>₹3,00,001 – ₹7,00,000 — 5%</li>
        <li>₹7,00,001 – ₹10,00,000 — 10%</li>
        <li>₹10,00,001 – ₹12,00,000 — 15%</li>
        <li>₹12,00,001 – ₹15,00,000 — 20%</li>
        <li>Above ₹15,00,000 — 30%</li>
      </ul>
      <p>
        <em>
          Note: A full tax rebate under section 87A is available if the taxable income is up to
          ₹7,00,000, effectively making the tax liability zero.
        </em>
      </p>

      <h2>The Old Tax Regime</h2>
      <p>
        The Old Tax Regime has higher tax rates but allows you to claim over 70 deductions and
        exemptions. This is highly beneficial if you make significant tax-saving investments or pay
        rent/home loan EMIs.
      </p>
      <h3>Old Regime Slabs (For Individuals below 60 years)</h3>
      <ul>
        <li>Up to ₹2,50,000 — Nil</li>
        <li>₹2,50,001 – ₹5,00,000 — 5%</li>
        <li>₹5,00,001 – ₹10,00,000 — 20%</li>
        <li>Above ₹10,00,000 — 30%</li>
      </ul>
      <p>
        <em>
          Note: A full tax rebate under section 87A is available if the taxable income is up to
          ₹5,00,000.
        </em>
      </p>

      <h2>Common Deductions Available in Old Regime</h2>
      <ul>
        <li>
          <strong>Standard Deduction:</strong> ₹50,000 straight deduction from salary income.
        </li>
        <li>
          <strong>Section 80C:</strong> Up to ₹1.5 Lakh (EPF, PPF, ELSS, LIC, Home Loan Principal,
          etc.).
        </li>
        <li>
          <strong>Section 80D:</strong> Up to ₹25,000 for self/family and ₹50,000 for senior citizen
          parents (Medical Insurance Premium).
        </li>
        <li>
          <strong>Section 24(b):</strong> Up to ₹2 Lakh on Home Loan Interest.
        </li>
        <li>
          <strong>HRA Exemption:</strong> Based on rent paid, basic salary, and city of residence.
        </li>
      </ul>

      <h2>Which regime should you pick?</h2>
      <p>
        There is no single "best" regime. The choice depends entirely on your gross income and the
        total deductions you can claim:
      </p>
      <ul>
        <li>
          <strong>Choose the New Regime if:</strong> You have fewer tax-saving investments, no home
          loan, and don't pay rent (or don't receive HRA). It offers a simpler tax filing process
          with higher liquidity in hand.
        </li>
        <li>
          <strong>Choose the Old Regime if:</strong> You fully utilize the ₹1.5 Lakh 80C limit, pay
          health insurance premiums (80D), claim HRA, or have a home loan interest deduction
          (Section 24).
        </li>
      </ul>
      <p>
        The break-even point typically lies around ₹1.5 Lakh to ₹3.75 Lakh in total deductions
        (depending on your income slab). Our calculator does the exact math for you instantly.
      </p>
    </>
  );
}
