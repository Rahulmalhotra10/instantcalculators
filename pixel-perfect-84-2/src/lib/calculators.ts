// Pure financial calculation utilities.

export function calcEMI(principal: number, annualRate: number, years: number) {
  const n = years * 12;
  const r = annualRate / 12 / 100;
  if (principal <= 0 || n <= 0) return { emi: 0, total: 0, interest: 0 };
  const emi =
    r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = emi * n;
  return { emi, total, interest: total - principal };
}

export function calcSIP(monthly: number, annualRate: number, years: number) {
  const n = years * 12;
  const r = annualRate / 12 / 100;
  const invested = monthly * n;
  const maturity = r === 0 ? invested : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  return { invested, maturity, gains: maturity - invested };
}

export function calcLumpsum(principal: number, annualRate: number, years: number) {
  const maturity = principal * Math.pow(1 + annualRate / 100, years);
  return { invested: principal, maturity, gains: maturity - principal };
}

export function calcFD(principal: number, annualRate: number, years: number, freq = 4) {
  // Compounded quarterly by default
  const maturity = principal * Math.pow(1 + annualRate / (freq * 100), freq * years);
  return { invested: principal, maturity, interest: maturity - principal };
}

export function calcRD(monthly: number, annualRate: number, years: number) {
  // Compounded quarterly (standard Indian RD formula)
  const n = years * 4;
  const i = annualRate / 400;
  // Approximation using monthly deposit
  const months = years * 12;
  const r = annualRate / 12 / 100;
  const invested = monthly * months;
  const maturity = r === 0 ? invested : monthly * ((Math.pow(1 + r, months) - 1) / r);
  return { invested, maturity, interest: maturity - invested, _n: n, _i: i };
}

export function calcPPF(yearly: number, years: number, rate = 7.1) {
  let balance = 0;
  for (let y = 0; y < years; y++) {
    balance = (balance + yearly) * (1 + rate / 100);
  }
  return { invested: yearly * years, maturity: balance, interest: balance - yearly * years };
}

// Simple India-style income tax estimator (new regime FY 2024-25 slabs)
export function calcTaxNewRegime(income: number) {
  const slabs = [
    { upto: 300000, rate: 0 },
    { upto: 700000, rate: 5 },
    { upto: 1000000, rate: 10 },
    { upto: 1200000, rate: 15 },
    { upto: 1500000, rate: 20 },
    { upto: Infinity, rate: 30 },
  ];
  let tax = 0;
  let prev = 0;
  for (const s of slabs) {
    if (income > s.upto) {
      tax += ((s.upto - prev) * s.rate) / 100;
      prev = s.upto;
    } else {
      tax += ((income - prev) * s.rate) / 100;
      break;
    }
  }
  // Rebate u/s 87A for income up to 7L
  if (income <= 700000) tax = 0;
  const cess = tax * 0.04;
  return { tax: tax + cess, effective: income > 0 ? ((tax + cess) / income) * 100 : 0 };
}

export function calcTaxOldRegime(income: number, deductions: number) {
  const taxable = Math.max(0, income - deductions - 50000); // standard deduction
  const slabs = [
    { upto: 250000, rate: 0 },
    { upto: 500000, rate: 5 },
    { upto: 1000000, rate: 20 },
    { upto: Infinity, rate: 30 },
  ];
  let tax = 0;
  let prev = 0;
  for (const s of slabs) {
    if (taxable > s.upto) {
      tax += ((s.upto - prev) * s.rate) / 100;
      prev = s.upto;
    } else {
      tax += ((taxable - prev) * s.rate) / 100;
      break;
    }
  }
  if (taxable <= 500000) tax = 0;
  const cess = tax * 0.04;
  return { tax: tax + cess, taxable, effective: income > 0 ? ((tax + cess) / income) * 100 : 0 };
}

/* ---------- Advanced loan schedule (prepayment + step-up EMI) ---------- */

export type LoanAdvancedOpts = {
  monthlyPrepay?: number; // extra rupees paid every month
  yearlyPrepay?: number; // lump-sum paid at end of each 12th month
  stepUpPct?: number; // EMI increases this % after every 12 months
};

export function calcLoanSchedule(
  principal: number,
  annualRate: number,
  years: number,
  opts: LoanAdvancedOpts = {},
) {
  const monthlyPrepay = opts.monthlyPrepay ?? 0;
  const yearlyPrepay = opts.yearlyPrepay ?? 0;
  const stepUp = (opts.stepUpPct ?? 0) / 100;
  const mr = annualRate / 12 / 100;
  const maxMonths = Math.max(1, Math.round(years * 12));
  const baseEmi =
    mr === 0
      ? principal / maxMonths
      : (principal * mr * Math.pow(1 + mr, maxMonths)) / (Math.pow(1 + mr, maxMonths) - 1);

  let emi = baseEmi;
  let balance = principal;
  let totalInterest = 0;
  let totalPaid = 0;
  let months = 0;
  const rows: {
    year: number;
    Principal: number;
    Interest: number;
    Prepaid: number;
    Balance: number;
  }[] = [];
  let yP = 0,
    yI = 0,
    yPre = 0;
  const hardCap = maxMonths + 12; // safety

  for (let m = 1; m <= hardCap && balance > 0.5; m++) {
    const interest = balance * mr;
    let principalPart = Math.min(balance, emi - interest);
    if (principalPart < 0) principalPart = 0;
    balance -= principalPart;
    const prepayThisMonth = Math.min(balance, monthlyPrepay);
    balance -= prepayThisMonth;
    totalInterest += interest;
    totalPaid += interest + principalPart + prepayThisMonth;
    yI += interest;
    yP += principalPart;
    yPre += prepayThisMonth;
    months = m;

    if (m % 12 === 0 || balance <= 0.5) {
      // yearly lump-sum prepayment at year-end
      if (balance > 0.5 && yearlyPrepay > 0) {
        const lp = Math.min(balance, yearlyPrepay);
        balance -= lp;
        yPre += lp;
        totalPaid += lp;
      }
      rows.push({
        year: Math.ceil(m / 12),
        Principal: Math.round(yP),
        Interest: Math.round(yI),
        Prepaid: Math.round(yPre),
        Balance: Math.round(Math.max(0, balance)),
      });
      yP = 0;
      yI = 0;
      yPre = 0;
      if (balance <= 0.5) break;
      // step-up EMI at each anniversary
      if (stepUp > 0) emi = emi * (1 + stepUp);
    }
  }

  return {
    emi: baseEmi,
    months,
    totalInterest,
    totalPaid,
    rows,
  };
}

/* ---------- Advanced SIP (step-up + yearly lump-sum) ---------- */

export type SipAdvancedOpts = {
  stepUpPct?: number; // annual SIP increase %
  initialLumpsum?: number; // yearly investment added at the start of each year
};

export function calcSIPSchedule(
  monthly: number,
  annualRate: number,
  years: number,
  opts: SipAdvancedOpts = {},
) {
  const stepUp = (opts.stepUpPct ?? 0) / 100;
  const lump = opts.initialLumpsum ?? 0;
  const mr = annualRate / 12 / 100;
  let value = 0;
  let invested = 0;
  let sip = monthly;
  const rows: { year: number; Invested: number; Returns: number; Value: number }[] = [];
  const totalMonths = Math.max(0, Math.round(years * 12));
  for (let m = 1; m <= totalMonths; m++) {
    // Add lumpsum at the start of each year
    if ((m - 1) % 12 === 0) {
      value += lump;
      invested += lump;
    }

    value = (value + sip) * (1 + mr);
    invested += sip;
    if (m % 12 === 0) {
      rows.push({
        year: m / 12,
        Invested: Math.round(invested),
        Returns: Math.round(value - invested),
        Value: Math.round(value),
      });
      if (stepUp > 0) sip = sip * (1 + stepUp);
    }
  }
  return { invested, maturity: value, gains: value - invested, rows };
}

/* ---------- NPS Calculator ---------- */
export type NpsAdvancedOpts = {
  annuityPct?: number; // Minimum 40
  annuityRate?: number; // e.g., 6%
};

export function calcNPS(
  monthly: number,
  annualRate: number,
  currentAge: number,
  opts: NpsAdvancedOpts = {},
) {
  const annuityPct = Math.max(40, opts.annuityPct ?? 40) / 100;
  const annuityRate = (opts.annuityRate ?? 6) / 100;

  const retirementAge = 60;
  const years = Math.max(0, retirementAge - currentAge);

  // Reuse SIP calc for accumulation phase
  const sipResult = calcSIPSchedule(monthly, annualRate, years);

  const corpus = sipResult.maturity;
  const annuityAmount = corpus * annuityPct;
  const lumpsumAmount = corpus - annuityAmount;

  // Monthly pension = (Annuity Amount * Annuity Rate) / 12
  const monthlyPension = (annuityAmount * annuityRate) / 12;

  return {
    invested: sipResult.invested,
    corpus,
    gains: sipResult.gains,
    annuityAmount,
    lumpsumAmount,
    monthlyPension,
    rows: sipResult.rows,
  };
}
