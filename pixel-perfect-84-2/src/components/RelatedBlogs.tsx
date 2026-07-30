import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const ARTICLES = [
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

export function RelatedBlogs() {
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = scroller.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.max(260, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="blogs" className="bg-white w-full pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] text-[#11241C]/50 uppercase tracking-[0.18em] font-bold">
              Latest updates
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl text-black font-semibold tracking-tight font-['Bricolage_Grotesque']">
              From the blog
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/blogs"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-[#172c46] hover:opacity-70 transition-opacity mr-2"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              aria-label="Scroll blogs left"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#172c46] shadow-sm transition-all hover:bg-[#172c46] hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#172c46]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll blogs right"
              onClick={() => scrollBy(1)}
              disabled={atEnd}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#172c46] shadow-sm transition-all hover:bg-[#172c46] hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#172c46]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-8">
          <div
            ref={scroller}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-1 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {ARTICLES.map((a, i) => (
              <Link
                key={i}
                to={a.href}
                className="group snap-start shrink-0 w-[250px] sm:w-[280px] flex flex-col rounded-2xl bg-white border border-[#11241C]/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="font-bold text-[#172c46]">{a.category}</span>
                  <span className="text-[#11241C]/20">•</span>
                  <span className="text-[#11241C]/45">{a.date}</span>
                </div>
                <h3 className="mt-3 text-[15px] font-semibold text-black leading-snug line-clamp-2">
                  {a.title}
                </h3>
                <p className="mt-2 text-[12px] text-[#11241C]/55 leading-relaxed line-clamp-2">
                  {a.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[12px] font-bold text-[#172c46]">
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
          <div
            className={`pointer-events-none absolute top-0 bottom-4 right-0 w-16 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${atEnd ? "opacity-0" : "opacity-100"}`}
          />
          <div
            className={`pointer-events-none absolute top-0 bottom-4 left-0 w-16 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 ${atStart ? "opacity-0" : "opacity-100"}`}
          />
        </div>
      </div>
    </section>
  );
}

export default RelatedBlogs;
