/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Landmark,
  Wallet,
  TrendingUp,
  PiggyBank,
  Building2,
  LineChart,
  Percent,
  Calculator,
} from "lucide-react";

export const CALCULATORS = [
  {
    icon: Landmark,
    title: "EMI Calculator",
    desc: "Easily estimate your monthly instalments for home, car, and personal loans. Use our advanced EMI calculator to plan your finances, analyze amortization schedules, and make informed borrowing decisions.",
    to: "/emi" as const,
  },
  {
    icon: Wallet,
    title: "NPS Calculator",
    desc: "Estimate your retirement corpus and monthly pension with the National Pension System (NPS).",
    to: "/nps" as const,
  },
  {
    icon: TrendingUp,
    title: "SIP Calculator",
    desc: "Project your mutual fund wealth growth from monthly SIP contributions. Understand the power of compounding and visualize your investment returns over time.",
    to: "/sip" as const,
  },
  {
    icon: PiggyBank,
    title: "Lumpsum Calculator",
    desc: "Calculate the future value of your one-time investments. See how your lumpsum investments grow and compound over your chosen financial horizon.",
    to: "/lumpsum" as const,
  },
  {
    icon: Building2,
    title: "FD Calculator",
    desc: "Accurately compute maturity values and interest earned on fixed deposits (FD). Plan your secure investments with our precise FD interest calculator.",
    to: "/fd" as const,
  },
  {
    icon: LineChart,
    title: "RD Calculator",
    desc: "Plan your recurring deposits (RD) with instant maturity and interest breakdowns. Achieve your savings goals efficiently with our RD calculator.",
    to: "/rd" as const,
  },
  {
    icon: Percent,
    title: "Tax Calculator",
    desc: "Estimate your income tax liability across old and new tax regimes. Incorporate all applicable deductions and exemptions to optimize your tax planning.",
    to: "/tax" as const,
  },
  {
    icon: Calculator,
    title: "PPF Calculator",
    desc: "Track long-term Public Provident Fund (PPF) growth. Forecast your corpus with annual contributions, compounding interest, and tax-free returns.",
    to: "/ppf" as const,
  },
];

/** Shared hamburger + slide-down panel used on every page below the md breakpoint. */
export function MobileNav({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`grid h-11 w-11 place-items-center rounded-full border transition-colors ${
          tone === "dark"
            ? "border-white/20 bg-white/10 text-white"
            : "border-black/10 bg-black/5 text-[#172c46]"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={open ? "close" : "open"}
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.div>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              aria-label="Close menu"
              onClick={close}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden backdrop-blur-sm cursor-default"
            />
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(92vw,400px)] max-h-[calc(100dvh-120px)] overflow-y-auto overscroll-contain rounded-2xl border border-black/5 bg-white p-4 sm:p-5 text-black shadow-2xl origin-top-right ring-1 ring-black/5 flex flex-col"
            >
              <div className="flex flex-col text-[15px] sm:text-[16px] font-medium">
                <Link
                  to="/"
                  onClick={close}
                  className="py-2 sm:py-2.5 px-2 hover:bg-black/5 rounded-lg transition-colors"
                  activeProps={{}}
                >
                  Home
                </Link>
                <a
                  href="/#calculators"
                  onClick={close}
                  className="py-2 sm:py-2.5 px-2 hover:bg-black/5 rounded-lg transition-colors"
                >
                  All calculators
                </a>
              </div>
              <div className="mt-2 sm:mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-1.5 border-t border-black/5 pt-3 sm:pt-4">
                {CALCULATORS.map((calc, i) => (
                  <Link
                    key={i}
                    to={calc.to}
                    activeProps={{}}
                    onClick={close}
                    className="flex items-center gap-2.5 sm:gap-3 rounded-xl p-2 sm:p-2.5 transition-colors hover:bg-black/5 active:bg-black/10"
                  >
                    <calc.icon className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-[#172c46]" />
                    <span className="truncate text-[14px] sm:text-[15px] font-medium">
                      {calc.title}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-2 sm:mt-3 flex flex-col border-t border-black/5 pt-3 sm:pt-4 text-[15px] sm:text-[16px] font-medium">
                <Link
                  to="/blogs"
                  activeProps={{}}
                  onClick={close}
                  className="py-2 sm:py-2.5 px-2 hover:bg-black/5 rounded-lg transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  onClick={close}
                  className="py-2 sm:py-2.5 px-2 hover:bg-black/5 rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={close}
                  className="py-2 sm:py-2.5 px-2 hover:bg-black/5 rounded-lg transition-colors"
                >
                  Contact
                </Link>
              </div>
              <a
                href="/#calculators"
                onClick={close}
                className="mt-4 sm:mt-5 flex shrink-0 h-11 sm:h-12 items-center justify-center rounded-xl bg-[#172c46] text-[15px] sm:text-[16px] font-semibold text-white shadow-md active:scale-[0.98] transition-transform hover:bg-[#172c46]/90"
              >
                Get started
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-white" : "text-black";
  const hoverColor = variant === "dark" ? "hover:text-white/70" : "hover:text-black/70";
  const ctaBg =
    variant === "dark"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-[#172c46] text-white hover:bg-[#172c46]/90";

  return (
    <nav
      className={`sticky top-0 z-50 mx-auto max-w-[1400px] flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-transparent ${textColor}`}
      style={{
        borderColor: variant === "dark" ? "#dcdcdc" : "#11241C10",
        borderWidth: "0px",
        paddingTop: "25px",
        paddingBottom: "15px",
      }}
    >
      <Link
        to="/"
        className={`flex items-center gap-2 font-black font-['Manrope'] tracking-tight ${textColor}`}
        style={{ fontSize: "22px" }}
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          className={variant === "light" ? "text-[#172c46]" : ""}
        >
          <path d="M4 22L13 4L22 22L13 16L4 22Z" fill="currentColor" />
        </svg>
        Instant calculators
      </Link>
      <div
        className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full bg-transparent px-[55px] py-2.5 font-medium ml-0`}
        style={{ fontSize: "16px" }}
      >
        <Link
          to="/"
          activeProps={{}}
          className={`${hoverColor} transition-all hover:scale-110 duration-300 inline-block`}
        >
          Home
        </Link>
        <div className="relative group">
          <a
            href="/#calculators"
            className={`${hoverColor} transition-all hover:scale-110 duration-300 inline-block py-2`}
          >
            Calculators
          </a>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="bg-white rounded-2xl p-4 shadow-xl text-black w-[400px] grid grid-cols-2 gap-2 border border-black/5 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
              {CALCULATORS.map((calc, i) => (
                <Link
                  key={i}
                  to={calc.to}
                  activeProps={{}}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-black/5 transition-colors"
                >
                  <calc.icon className="h-5 w-5 text-[#172c46]" />
                  <span className="text-sm font-medium">{calc.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link
          to="/blogs"
          activeProps={{}}
          className={`${hoverColor} transition-all hover:scale-110 duration-300 inline-block`}
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className={`${hoverColor} transition-all hover:scale-110 duration-300 inline-block`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`${hoverColor} transition-all hover:scale-110 duration-300 inline-block`}
        >
          Contact
        </Link>
      </div>
      <div className="relative flex items-center gap-2">
        <a
          href="/#calculators"
          className={`hidden sm:inline-flex items-center justify-center rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-[15px] font-medium transition-all hover:scale-105 duration-300 ${ctaBg}`}
        >
          Get started
        </a>
        <MobileNav tone={variant} />
      </div>
    </nav>
  );
}
