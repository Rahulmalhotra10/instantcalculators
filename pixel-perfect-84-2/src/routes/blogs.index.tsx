import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { motion } from "motion/react";
import { CALCULATORS, MobileNav } from "@/components/Nav";

export const Route = createFileRoute("/blogs/")({
  component: BlogsPage,
});

function BlogsPage() {
  const articles = [
    {
      title: "Buy a Home or Keep Renting? India's Biggest Financial Decision — Answered for 2026",
      desc: "Real numbers. Hidden costs. Tax math. Investment alternatives. Everything you need to make this decision wisely.",
      date: "Jul 30, 2026",
      category: "Real Estate",
      readTime: "15 min read",
      href: "/blogs/buy-home-vs-rent-india-2026",
    },
    {
      title: "Old vs New Tax Regime 2026: The Complete Guide for Salaried Indians",
      desc: "Stop guessing your taxes. A complete mathematical breakdown of India's tax regimes with real salary examples and a free calculator.",
      date: "Jul 30, 2026",
      category: "Tax Planning",
      readTime: "12 min read",
      href: "/blogs/old-vs-new-tax-regime-2026-complete-guide",
    },
    {
      title: "SIP vs EMI vs FD: Which Financial Decision is Right for You in 2026?",
      desc: "A complete, no-jargon guide to India's three most searched financial terms — with real numbers, tax implications, and free calculators.",
      date: "Jul 30, 2026",
      category: "Personal Finance",
      readTime: "14 min read",
      href: "/blogs/sip-vs-emi-vs-fd",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex items-center justify-center -mt-10 mb-8 h-[50px] px-0 mx-[15px]"
          >
            <div className="absolute left-0">
              <Link
                to="/"
                className="flex items-center gap-2 font-black font-['Manrope'] tracking-tight text-[#11241C]"
                style={{ fontSize: "32px" }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  className="text-[#172c46]"
                >
                  <path d="M4 22L13 4L22 22L13 16L4 22Z" fill="currentColor" />
                </svg>
                Instant calculators
              </Link>
            </div>
            <div
              className="hidden lg:flex items-center gap-6 lg:gap-8 rounded-[32px] border border-[#2d5386]/30 bg-gradient-to-br from-[#172c46] to-[#0c1826] text-white shadow-xl shadow-[#172c46]/20 font-medium ml-0"
              style={{
                fontSize: "16px",
                height: "50px",
                width: "517.84375px",
                paddingLeft: "54px",
                paddingRight: "0px",
              }}
            >
              <Link
                to="/"
                activeProps={{}}
                className="hover:text-white/70 transition-all hover:scale-110 duration-300 inline-block"
              >
                Home
              </Link>
              <div className="relative group">
                <a
                  href="/#calculators"
                  className="hover:text-white/70 transition-all hover:scale-110 duration-300 inline-block py-2"
                >
                  Calculators
                </a>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
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
                className="hover:text-white/70 transition-all hover:scale-110 duration-300 inline-block"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="hover:text-white/70 transition-all hover:scale-110 duration-300 inline-block"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-white/70 transition-all hover:scale-110 duration-300 inline-block"
              >
                Contact
              </Link>
            </div>
            <div className="absolute right-0">
              <MobileNav tone="light" />
            </div>
          </motion.div>

          <div className="mt-[3px] mb-[44px] pt-[45px] px-[15px]">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#11241C] tracking-tight">
              Blogs
            </h1>
            <p className="mt-4 text-lg text-[#11241C]/70 max-w-2xl">
              Stay updated with the latest insights on personal finance, tax planning, and
              investment strategies.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {articles.map((a, i) => {
              const CardContent = (
                <article className="group flex flex-col h-full rounded-[32px] bg-white border border-[#11241C]/5 p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-bold text-[#11241C]">{a.category}</span>
                    <span className="text-[#11241C]/20">•</span>
                    <span className="text-[#11241C]/50">{a.date}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-[#11241C] leading-snug group-hover:text-black transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-[15px] text-[#11241C]/60 leading-relaxed line-clamp-3 flex-grow">
                    {a.desc}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#11241C]/40">{a.readTime}</span>
                    <div className="flex items-center gap-2 text-[15px] font-bold text-[#11241C] group-hover:text-black transition-colors">
                      Read article{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );

              return a.href ? (
                <Link key={i} to={a.href} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={i} className="block h-full cursor-not-allowed opacity-80">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
