import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Star,
  Eye,
  Calculator,
  PieChart,
  Landmark,
  Wallet,
  PiggyBank,
  LineChart,
  Percent,
  Building2,
  Menu,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

import { Nav, CALCULATORS } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";

function Index() {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
      <div className="w-full relative z-10 bg-white pt-0">
        <div className="hero-shell relative bg-[#172c46] overflow-hidden rounded-[50px] mx-[40px] px-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
          <Nav />
          <Hero />
          <LogoMarquee />
        </div>
      </div>
      <div className="relative z-10 bg-white">
        <Calculators />
        <Stats />
        <Blogs />
        <FAQ />
        <CTA />
        <SiteFooter />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      className="hero-section relative mx-auto max-w-[1400px] px-6 lg:px-8 bg-transparent"
      style={{
        paddingTop: "27px",
        paddingBottom: "25px",
        height: "473px",
        width: "1374px",
        marginTop: "15px",
        marginBottom: "15px",
      }}
    >
      {/* EMI card top-left */}
      <FloatingCard
        className="hidden xl:block absolute -left-4 lg:-left-2 xl:left-4 top-12 w-[280px] animate-tilt-left animate-float"
        style={{ ["--r" as string]: "0deg" }}
        innerClassName=""
        innerStyle={{
          width: "250px",
          paddingLeft: "10px",
          paddingRight: "10px",
          height: "170px",
          paddingTop: "11px",
          marginTop: "-31px",
          paddingBottom: "10px",
          marginRight: "0px",
          marginLeft: "-13px",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-card-foreground/60">
            <span className="h-5 w-5 rounded-full bg-[#5885B4] grid place-items-center text-[10px] text-white">
              ₹
            </span>
            EMI Calculator
          </div>
          <Landmark className="h-4 w-4 text-card-foreground/50" />
        </div>
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-wider text-card-foreground/50">
            Monthly EMI
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="text-2xl font-semibold text-card-foreground">₹ 24,959</div>
            <Eye className="h-4 w-4 text-card-foreground/40" />
          </div>
        </div>
        <div className="mt-6 flex justify-between text-[10px] uppercase tracking-wider text-card-foreground/50">
          <div>
            <div>Principal</div>
            <div className="mt-1 text-card-foreground font-medium normal-case tracking-normal">
              ₹ 20L
            </div>
          </div>
          <div>
            <div>Tenure</div>
            <div className="mt-1 text-card-foreground font-medium normal-case tracking-normal">
              10 yrs
            </div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden xl:block absolute left-4 xl:left-8 bottom-8 w-[260px] animate-tilt-left animate-float-slower delay-200"
        style={{ ["--r" as string]: "0deg" }}
        innerStyle={{
          marginBottom: "0px",
          marginTop: "0px",
          paddingTop: "25px",
          paddingBottom: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginLeft: "-21px",
          marginRight: "30px",
        }}
      >
        <div className="text-[10px] uppercase tracking-wider text-card-foreground/50">
          Lumpsum Growth
        </div>
        <div className="mt-2 text-xl font-semibold text-card-foreground">₹ 8,42,000</div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[12px] text-card-foreground/70">
            <PieChart className="h-4 w-4" /> Equity Fund
          </div>
          <div className="text-[11px] text-card-foreground">12% p.a.</div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-card-foreground/10 overflow-hidden">
          <div className="h-full w-3/5 rounded-full bg-[#5885B4]" />
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden xl:block absolute -right-4 lg:-right-2 xl:right-4 top-12 w-[260px] animate-tilt-right animate-float delay-100"
        style={{ ["--r" as string]: "0deg" }}
        innerStyle={{
          width: "250px",
          marginTop: "-20px",
          height: "124px",
        }}
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#5885B4] text-white grid place-items-center">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-card-foreground/50">
              SIP Maturity
            </div>
            <div className="text-lg font-semibold text-card-foreground">₹ 23,23,391</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-card-foreground/60">₹ 10,000 / month · 10 yrs</div>
        <div className="mt-2 flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full ${i <= 4 ? "bg-[#5885B4]" : "bg-card-foreground/10"}`}
            />
          ))}
        </div>
      </FloatingCard>

      <FloatingCard
        className="hidden xl:block absolute right-4 xl:right-12 bottom-4 w-[300px] animate-tilt-right animate-float-slower delay-300"
        style={{ ["--r" as string]: "0deg" }}
        innerStyle={{
          height: "164px",
          width: "250px",
          paddingTop: "18px",
          paddingLeft: "18px",
          paddingRight: "21px",
          marginLeft: "50px",
          marginRight: "0px",
          marginTop: "0px",
          marginBottom: "13px",
        }}
      >
        <div className="flex items-center justify-between text-xs text-card-foreground/60">
          <span>FD Interest Growth</span>
          <span className="rounded-full bg-card-foreground/10 px-2 py-0.5 text-card-foreground">
            7.1%
          </span>
        </div>
        <div className="mt-2 text-3xl font-semibold text-card-foreground">₹ 1,41,478</div>
        <svg viewBox="0 0 200 60" className="mt-2 w-full h-14">
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#5885B4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5885B4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 C30,42 45,35 70,30 C95,25 110,18 140,15 C170,12 185,10 200,8 L200,60 L0,60 Z"
            fill="url(#g1)"
          />
          <path
            d="M0,45 C30,42 45,35 70,30 C95,25 110,18 140,15 C170,12 185,10 200,8"
            fill="none"
            stroke="#5885B4"
            strokeWidth="2"
          />
        </svg>
        <div className="text-[11px] uppercase tracking-wider text-card-foreground/50">
          5-year maturity
        </div>
      </FloatingCard>

      {/* Center content */}
      <div
        className="hero-content relative z-10 mx-auto max-w-3xl text-center pt-6 bg-transparent"
        style={{
          marginLeft: "264px",
          width: "769px",
          height: "420px",
          paddingTop: "17px",
          paddingBottom: "50px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div
          className="hero-badge inline-flex items-center gap-2 rounded-full bg-[#ececec] px-3 sm:px-4 py-1.5 text-xs sm:text-sm animate-fade-up text-black border border-black"
          style={{
            fontSize: "12px",
            marginTop: "-20px",
            paddingTop: "7px",
            marginBottom: "-2px",
            height: "34px",
          }}
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#5e8837]">
            <Star className="h-3 w-3 fill-white text-white" />
          </span>
          Trusted by 50,000+ investors
        </div>
        <h1
          className="hero-title mt-[34px] sm:mt-[34px] px-[6px] text-[40px] sm:text-[73px] leading-[1.1] font-semibold text-white animate-fade-up delay-100 mb-4 sm:mb-6"
          style={{ width: "100%", maxWidth: "775px", marginTop: "15px" }}
        >
          Smart Calculators for
          <br />
          Every Money Decision
        </h1>
        <p className="hero-sub mx-auto max-w-xl text-[14px] sm:text-[16px] text-white/90 animate-fade-up delay-200 px-4 mt-0 mb-8 sm:mb-[25px]">
          Plan retirement, investments and savings with a full suite of accurate financial
          calculators — EMI, SIP, Lumpsum, FD and more. Free, instant, and beautifully simple.
        </p>
        <div
          className="hero-actions flex flex-wrap justify-center gap-3 animate-fade-up delay-300 my-[15px]"
          style={{
            marginTop: "19px",
            marginBottom: "0px",
            paddingTop: "25px",
            paddingBottom: "0px",
            height: "auto",
            minHeight: "75px",
          }}
        >
          <a
            href="#calculators"
            className="group flex items-center justify-center gap-2 rounded-full bg-white px-0 mx-[50px] sm:px-6 sm:mx-0 text-[14px] sm:text-[15px] font-medium text-black hover:bg-gray-200 transition-all hover:scale-105 duration-300 h-[50px] w-full sm:w-[187.76px]"
          >
            Try calculators
            <span className="grid h-7 w-7 place-items-center rounded-full bg-black text-white group-hover:rotate-45 transition-transform">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </a>
          <Link
            to="/emi"
            className="rounded-full border flex items-center justify-center border-[#11241C]/30 px-5 sm:px-6 text-[14px] sm:text-[15px] w-full max-w-[321px] mx-[50px] sm:w-auto sm:max-w-none sm:mx-0 font-medium text-black bg-white hover:bg-gray-200 transition-all hover:scale-105 duration-300 h-[50px]"
          >
            Open EMI calculator
          </Link>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  children,
  className = "",
  style,
  innerClassName = "p-5",
  innerStyle,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  innerClassName?: string;
  innerStyle?: React.CSSProperties;
}) {
  return (
    <div className={`card-3d ${className}`} style={style}>
      <div
        className={`card-3d-inner rounded-2xl bg-card shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/5 ${innerClassName}`}
        style={innerStyle}
      >
        {children}
      </div>
    </div>
  );
}

function LogoMarquee() {
  const logos = ["EMI", "SIP", "Lumpsum", "FD", "RD", "PPF", "NPS", "Home Loan", "Car Loan", "Tax"];
  return (
    <div
      className="marquee-strip relative border-t border-border/40 overflow-hidden bg-transparent py-[16px]"
      style={{
        color: "#682c2c",
        fontSize: "6px",
        borderColor: "#505050",
        borderWidth: "1px",
        paddingLeft: "32px",
        paddingRight: "32px",
        paddingTop: "25px",
        paddingBottom: "15px",
      }}
    >
      <div
        className="flex gap-10 sm:gap-16 animate-marquee w-max"
        style={{ color: "#dbdbdb", fontSize: "9px" }}
      >
        {[...logos, ...logos].map((l, i) => (
          <div
            key={i}
            className="text-base sm:text-xl font-semibold whitespace-nowrap flex items-center gap-2"
            style={
              i === 0
                ? { fontSize: "10px", color: "lightgrey" }
                : i === 7
                  ? { fontSize: "15px", color: "#f5f6f5" }
                  : { fontSize: "15px" }
            }
          >
            <span
              className="h-2 w-2 rounded-full bg-current opacity-30"
              style={i === 4 ? { fontSize: "22px" } : undefined}
            />{" "}
            {l} Calculator
          </div>
        ))}
      </div>
    </div>
  );
}

export function Calculators() {
  return (
    <section
      id="calculators"
      className="bg-white w-full pt-[30px] pb-20 sm:pb-32"
      style={{ borderWidth: "0px", borderColor: "#fff9f9" }}
    >
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mt-[40px]">
          <div className="text-sm text-[#11241C]/60 uppercase tracking-widest font-semibold">
            Calculators
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[46px] lg:text-[55px] text-black font-semibold tracking-tight leading-[1.05]">
            Every calculator you need to plan your money.
          </h2>
        </div>
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24 max-w-7xl mx-auto">
          {CALCULATORS.map((it, i) => (
            <div key={i} className="flex flex-col items-center md:items-start w-full">
              <div className="w-full mb-8">
                <Link
                  to={it.to}
                  activeProps={{}}
                  className="group block relative w-full h-[280px] sm:h-[320px] rounded-3xl border-2 border-transparent bg-[#172c46] p-8 pt-[48px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(23,44,70,1)] shadow-[8px_8px_0px_0px_rgba(23,44,70,0.5)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
                  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <div className="grid h-20 w-20 sm:h-24 sm:w-24 place-items-center rounded-3xl bg-white/10 group-hover:bg-white/20 text-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm group-hover:shadow-lg">
                      <it.icon className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl text-white font-semibold transition-colors duration-500">
                      {it.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 sm:h-8 sm:w-8 text-white/40 group-hover:text-white group-hover:rotate-45 group-hover:scale-125 transition-all duration-500" />
                </Link>
              </div>
              <div className="w-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-2 sm:px-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4">{it.title}</h3>
                <p className="text-[16px] font-normal text-black/60 leading-relaxed mb-[31px] w-full">
                  {it.desc}
                </p>
                <div>
                  <Link
                    to={it.to}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#172c46] px-8 text-sm font-medium text-white transition-colors hover:bg-[#172c46]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      Calculate Now <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    {
      v: "8+",
      l: "Calculators",
      desc: "From simple EMIs to complex tax planning, we have got you covered.",
    },
    {
      v: "100%",
      l: "Free forever",
      desc: "No subscriptions, no paywalls, and absolutely no annoying ads.",
    },
    {
      v: "Zero",
      l: "Data Stored",
      desc: "Your financial data never leaves your browser. Privacy guaranteed.",
    },
  ];
  return (
    <section className="bg-white w-full pb-[100px]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 -mt-[7px] mb-0 rounded-[50px]">
        <div className="stats-panel relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 px-6 sm:px-8 md:px-[32px] py-10 md:py-12 lg:py-16 bg-[#172c46] rounded-[32px] sm:rounded-[50px] border border-transparent w-full max-w-[1360px] mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
          {stats.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col">
              <div className="text-5xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white underline decoration-white/30">
                {s.v}
              </div>
              <h3 className="mt-4 lg:mt-6 text-lg lg:text-xl font-bold text-white">{s.l}</h3>
              <p className="mt-2 lg:mt-3 text-gray-400 leading-relaxed text-sm lg:text-[15px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Blogs() {
  const articles = [
    {
      title: "Buy a Home or Keep Renting? India's Biggest Financial Decision — Answered for 2026",
      desc: "Real numbers. Hidden costs. Tax math. Investment alternatives. Everything you need to make this decision wisely.",
      date: "Jul 30, 2026",
      category: "Real Estate",
      href: "/blogs/buy-home-vs-rent-india-2026",
    },
    {
      title: "Old vs New Tax Regime 2026: The Complete Guide for Salaried Indians",
      desc: "Stop guessing your taxes. A complete mathematical breakdown of India's tax regimes with real salary examples and a free calculator.",
      date: "Jul 30, 2026",
      category: "Tax Planning",
      href: "/blogs/old-vs-new-tax-regime-2026-complete-guide",
    },
    {
      title: "SIP vs EMI vs FD: Which Financial Decision is Right for You in 2026?",
      desc: "A complete, no-jargon guide to India's three most searched financial terms — with real numbers, tax implications, and free calculators.",
      date: "Jul 30, 2026",
      category: "Personal Finance",
      href: "/blogs/sip-vs-emi-vs-fd",
    },
  ];

  return (
    <section id="blogs" className="bg-white w-full pb-[100px]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mx-[15px]">
          <div>
            <div className="text-sm text-[#11241C]/60 uppercase tracking-widest font-semibold">
              Latest Updates
            </div>
            <h2 className="mt-2 text-3xl sm:text-5xl md:text-6xl text-black font-semibold tracking-tight">
              Blogs
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden sm:inline-flex items-center gap-2 text-[15px] font-medium text-[#11241C] hover:text-[#11241C]/70 transition-colors pb-2"
          >
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3 mx-[15px]">
          {articles.map((a, i) => (
            <Link
              key={i}
              to={a.href}
              className="group flex flex-col rounded-[32px] bg-white border border-[#11241C]/5 p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm">
                <span className="font-bold text-black">{a.category}</span>
                <span className="text-[#11241C]/20">•</span>
                <span className="text-[#11241C]/50">{a.date}</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-black leading-snug group-hover:text-black/80 transition-colors">
                {a.title}
              </h3>
              <p className="mt-4 text-[15px] text-[#11241C]/60 leading-relaxed line-clamp-3">
                {a.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-[15px] font-bold text-black group-hover:text-black/80 transition-colors mt-auto pt-4">
                Read article{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/blogs"
          className="sm:hidden mt-8 inline-flex items-center justify-center w-full gap-2 text-[15px] font-medium text-[#11241C] bg-white border border-[#11241C]/10 rounded-full py-4 hover:bg-black/5 transition-colors"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white w-full pb-[80px]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] bg-accent text-accent-foreground p-8 sm:p-16 text-center mx-[15px]">
          <div className="absolute inset-0 grid-bg opacity-20 mx-[15px]" />
          <div className="relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl max-w-2xl mx-auto">
              Make smarter money decisions today.
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg opacity-70 max-w-lg mx-auto">
              Free calculators for retirement, investments and savings. No sign-up, no fees.
            </p>
            <a
              href="#calculators"
              className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3.5 text-[15px] font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Start calculating
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "What is an NPS Calculator?",
      a: "An NPS Calculator helps you estimate your retirement corpus and the monthly pension you might receive based on your monthly contributions to the National Pension System.",
    },
    {
      q: "Are these calculators free to use?",
      a: "Yes! All calculators on Instant calculators are 100% free forever. No sign-up, no hidden fees, and no ads.",
    },
    {
      q: "Is my financial data secure?",
      a: "Absolutely. All calculations happen entirely in your browser. We never store, transmit, or share your financial data.",
    },
    {
      q: "How accurate are the results?",
      a: "Our calculators use standard financial formulas to provide highly accurate estimates. However, actual bank or market rates may vary slightly based on specific terms and conditions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white w-full pb-[80px]">
      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center sm:text-left sm:mx-0">
          <div className="text-sm text-[#11241C]/60 uppercase tracking-widest font-semibold">
            FAQ
          </div>
          <h2 className="mt-4 text-[34px] sm:text-[46px] text-black font-semibold tracking-tight">
            Common questions
          </h2>
        </div>
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto sm:mx-0 grid gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#11241C]/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-black pr-4">{faq.q}</span>
                <span
                  className={`transition-transform duration-300 flex-shrink-0 ${openIndex === i ? "rotate-[-90deg]" : "rotate-90"}`}
                >
                  <ArrowRight className="h-5 w-5 text-black/50" />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-[16px] text-black/70 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
