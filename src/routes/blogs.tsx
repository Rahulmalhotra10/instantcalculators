import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { CALCULATORS, MobileNav } from "@/components/Nav";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  const articles = [
    {
      title: "Understanding the new tax regime 2026",
      desc: "A comprehensive guide to the latest changes in the tax slabs and how they affect your take-home salary. We dive deep into the deductions available and how you can optimize your tax planning for the upcoming year.",
      date: "Jul 18, 2026",
      category: "Tax Planning",
      readTime: "5 min read",
    },
    {
      title: "Why SIPs are still your best bet against inflation",
      desc: "Inflation is eating into your savings. Learn how systematic investment plans can help you beat it in the long run. Discover the power of compounding and why starting early is crucial.",
      date: "Jul 15, 2026",
      category: "Investing",
      readTime: "4 min read",
    },
    {
      title: "Home loan interest rates expected to drop",
      desc: "With the central bank hinting at rate cuts, here is what prospective homebuyers need to know before taking a loan. Whether to go for fixed or floating rates, and how to negotiate the best deal.",
      date: "Jul 10, 2026",
      category: "Loans",
      readTime: "6 min read",
    },
    {
      title: "Top 5 mutual funds to watch in the next quarter",
      desc: "Our financial analysts break down the top performing mutual funds that have consistently delivered alpha over the market. See which funds align with your risk profile and investment horizon.",
      date: "Jul 5, 2026",
      category: "Investing",
      readTime: "8 min read",
    },
    {
      title: "How to build a robust emergency fund",
      desc: "An emergency fund is the bedrock of a solid financial plan. We cover how much you should save, where you should keep it, and when it's appropriate to tap into these reserves.",
      date: "Jul 1, 2026",
      category: "Savings",
      readTime: "4 min read",
    },
    {
      title: "Decoding the jargon: A beginner's guide to the stock market",
      desc: "Bulls, bears, market cap, P/E ratios... the stock market is full of confusing terms. This guide breaks down the essential concepts every beginner needs to understand before investing their first dollar.",
      date: "Jun 28, 2026",
      category: "Education",
      readTime: "10 min read",
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
            {articles.map((a, i) => (
              <article
                key={i}
                className="group flex flex-col rounded-[32px] bg-white border border-[#11241C]/5 p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
              >
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
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
