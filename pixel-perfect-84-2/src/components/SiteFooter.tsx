import { Link } from "@tanstack/react-router";
import { CALCULATORS } from "./Nav";

export function SiteFooter() {
  return (
    <footer className="bg-white w-full">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="rounded-[32px] bg-[#172c46] relative overflow-hidden px-6 sm:px-10 py-10 sm:py-12 text-white mx-[15px]"
          style={{ borderRadius: "32px" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.12)_0%,transparent_100%)] pointer-events-none" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-black tracking-tight text-white"
                style={{ fontSize: "30px" }}
              >
                <div className="bg-white/10 p-1 rounded-md">
                  <svg width="18" height="18" viewBox="0 0 26 26" fill="none">
                    <path d="M4 22L13 4L22 22L13 16L4 22Z" fill="currentColor" />
                  </svg>
                </div>
                Instant calculators
              </Link>
              <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/55">
                Free, private calculators for retirement, investments, savings and taxes. No
                sign-up, no fees, and your numbers never leave your browser.
              </p>
            </div>

            <div>
              <div
                className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/40"
                style={{ fontSize: "15px" }}
              >
                Calculators
              </div>
              <ul className="mt-4 space-y-2.5">
                {CALCULATORS.slice(0, 5).map((c, i) => (
                  <li key={i}>
                    <Link
                      to={c.to}
                      className="text-[13px] text-white/70 hover:text-white transition-colors"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div
                className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/40"
                style={{ fontSize: "15px" }}
              >
                Company
              </div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link
                    to="/"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-[13px] text-white/70 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/45">
            <div>© 2026 Instant calculators. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
