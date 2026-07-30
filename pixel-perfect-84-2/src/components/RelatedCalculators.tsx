import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CALCULATORS } from "./Nav";

export function RelatedCalculators() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const items = CALCULATORS.filter((c) => c.to !== pathname);

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
    el.scrollBy({ left: dir * Math.max(240, el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="calculators" className="bg-white w-full pt-[30px] pb-16 sm:pb-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] text-[#11241C]/50 uppercase tracking-[0.18em] font-bold">
              Explore more
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl text-black font-semibold tracking-tight font-['Bricolage_Grotesque']">
              Other calculators you may like
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              disabled={atStart}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#172c46] shadow-sm transition-all hover:bg-[#172c46] hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#172c46]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
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
            {items.map((it, i) => (
              <Link
                key={i}
                to={it.to}
                className="group relative snap-start shrink-0 w-[210px] sm:w-[230px] rounded-2xl bg-[#172c46] p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[4px_4px_0px_0px_rgba(23,44,70,0.35)] hover:shadow-[7px_7px_0px_0px_rgba(23,44,70,0.55)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 group-hover:bg-white/20 text-white transition-all duration-300 group-hover:scale-110">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{it.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-relaxed text-white/55 line-clamp-2">
                    {it.desc}
                  </p>
                </div>
                <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
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

export default RelatedCalculators;
