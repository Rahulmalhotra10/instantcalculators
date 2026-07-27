/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { Link } from "@tanstack/react-router";
import { ChevronDown, Download, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";
import { MobileNav, CALCULATORS } from "./Nav";
import { RelatedCalculators } from "./RelatedCalculators";
import { RelatedBlogs } from "./RelatedBlogs";
import { SiteFooter } from "./SiteFooter";
import { motion, AnimatePresence } from "framer-motion";
import GradientText from "./GradientText";

import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  Cell,
  Area,
  AreaChart,
  PieChart,
  Pie,
} from "recharts";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/* ---------------- Layout shell ---------------- */

export function CalculatorShell({
  title,
  description,
  children,
  article,
  hideRelated = false,
  hideBadge = false,
}: {
  title: string;
  description: string;
  children: ReactNode;
  article?: ReactNode;
  hideRelated?: boolean;
  hideBadge?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white text-stone-900 font-['Manrope'] antialiased selection:bg-[#172c46]/20">
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pb-6 lg:pb-10 pt-[25px]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex items-center justify-center mb-8 mt-0"
        >
          <div className="absolute left-0">
            <Link
              to="/"
              className="flex items-center gap-2 font-black font-['Manrope'] tracking-tight text-stone-900"
              style={{ fontSize: "22px" }}
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

        <header className="mt-12 sm:mt-20 max-w-2xl">
          {!hideBadge && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <span className="inline-flex items-center rounded-full border border-[#172c46]/15 bg-[#172c46]/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[#172c46] font-bold">
                Calculator
              </span>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-5 font-['Bricolage_Grotesque'] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-stone-900"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-5 text-[#7c7979] text-[14px] leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-12 sm:mt-16"
        >
          {children}
        </motion.div>

        {article && (
          <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mt-24 pb-24 max-w-3xl prose-custom"
          >
            <div className="h-px w-24 bg-white/10 mb-12"></div>
            {article}
          </motion.article>
        )}
      </div>
      <style>{`
        .prose-custom h2 { font-family: 'Bricolage Grotesque', serif; font-size: 1.7rem; font-weight: 600; margin-top: 2.5rem; margin-bottom: 1rem; color: #1c1917; letter-spacing: -0.02em; }
        .prose-custom h3 { font-family: 'Bricolage Grotesque', serif; font-size: 13px; font-weight: 600; margin-top: 2rem; margin-bottom: 0.75rem; color: #1c1917; }
        .prose-custom p, .prose-custom li { color: #57534e; line-height: 1.8; margin-top: 0.75rem; font-size: 13px; }
        .prose-custom ul { font-size: 14px; }
        .prose-custom .lead { font-size: 1.15rem; color: #44403c; line-height: 1.6; }
        .prose-custom ul { list-style: disc; padding-left: 1.5rem; margin-top: 1rem; }
        .prose-custom code { background: #f5f5f4; color: #1c1917; padding: 0.2rem 0.4rem; border-radius: 0.375rem; font-size: 0.9em; border: 1px solid #e7e5e4; }
        .prose-custom strong { color: #1c1917; font-weight: 600; }
        
        /* Custom range slider styling */
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05);
          margin-top: -8px;
          transition: transform 0.1s ease;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        input[type=range]::-webkit-slider-thumb:active {
          transform: scale(0.95);
          background: #f0f4f8;
        }
        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          background: #e7e5e4;
          border-radius: 9999px;
        }
      `}</style>
      {!hideRelated && (
        <>
          <RelatedCalculators />
          <RelatedBlogs />
        </>
      )}
      <SiteFooter />
    </div>
  );
}

/* ---------------- Inputs ---------------- */

export function NumberField({
  label,
  suffix,
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  label: string;
  suffix?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  const display = Number.isFinite(value) ? value.toLocaleString("en-IN") : "0";
  // Calculate percentage for gradient track
  const percentage = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <label className="text-[15px] font-bold text-white/80 pt-0 mt-[20px] ml-0">{label}</label>
        <div className="flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 border border-white/20 shadow-sm transition-colors focus-within:border-[#172c46]/50 focus-within:ring-2 focus-within:ring-[#172c46]/10">
          <input
            type="text"
            inputMode="decimal"
            value={display}
            onChange={(e) => {
              const raw = e.target.value.replace(/,/g, "");
              const n = parseFloat(raw);
              onChange(Number.isFinite(n) ? n : 0);
            }}
            className="w-28 bg-transparent text-right text-white outline-none font-bold font-['Bricolage_Grotesque'] text-[17px]"
          />
          {suffix && <span className="text-[13px] font-medium text-white/60">{suffix}</span>}
        </div>
      </div>
      <div className="relative pt-1 pb-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full appearance-none bg-transparent relative z-10"
          style={{
            background: `linear-gradient(to right, #172c46 0%, #172c46 ${percentage}%, transparent ${percentage}%, transparent 100%)`,
          }}
        />
        <div className="absolute top-[10px] left-0 right-0 h-[6px] bg-white/10 rounded-full z-0 pointer-events-none overflow-hidden">
          <div className="h-full bg-[#172c46] rounded-full" style={{ width: `${percentage}%` }} />
        </div>
      </div>
      <div className="flex justify-between text-[13px] -mt-5 font-medium text-white/50 relative z-0 pointer-events-none px-1">
        <span>
          {min.toLocaleString("en-IN")}
          {suffix ? ` ${suffix}` : ""}
        </span>
        <span>
          {max.toLocaleString("en-IN")}
          {suffix ? ` ${suffix}` : ""}
        </span>
      </div>
    </div>
  );
}

export function ResultTile({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: string;
  tone?: "default" | "accent";
}) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-[28px] p-6 sm:p-7 bg-[#E5F0F3] border border-[#172c46]/10 shadow-sm"
    >
      <div className="text-[11px] uppercase tracking-[0.15em] font-medium text-black">{label}</div>
      <div className="mt-2 text-2xl sm:text-[32px] font-bold break-words font-['Bricolage_Grotesque'] tracking-tight">
        <GradientText
          colors={["#184a99", "#4e8bf1", "#184a99"]}
          animationSpeed={4}
          className="!m-0 !max-w-full !justify-start"
        >
          {value}
        </GradientText>
      </div>
    </motion.div>
  );
}

export function formatINR(n: number) {
  if (!Number.isFinite(n)) return "₹ 0";
  return "₹ " + Math.round(n).toLocaleString("en-IN");
}

function formatCompact(n: number) {
  if (!Number.isFinite(n)) return "0";
  const abs = Math.abs(n);
  if (abs >= 10000000) return (n / 10000000).toFixed(1) + "Cr";
  if (abs >= 100000) return (n / 100000).toFixed(1) + "L";
  if (abs >= 1000) return (n / 1000).toFixed(1) + "k";
  return String(Math.round(n));
}

export function InputCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[32px] border border-[#2d5386]/30 bg-gradient-to-br from-[#172c46] to-[#0c1826] text-white shadow-xl shadow-[#172c46]/20 p-6 sm:p-8 space-y-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
      {children}
    </div>
  );
}

export function ChartCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[32px] border border-[#2d5386]/30 bg-gradient-to-br from-[#172c46] to-[#0c1826] text-white shadow-xl shadow-[#172c46]/20 p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.15em]">{title}</h3>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {children as any}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ---------------- Charts ---------------- */

export function BreakdownPie({ data }: { data: { name: string; value: number }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const palette = ["#F43F5E", "#3B82F6", "#8ac8e2", "#c2b9ca", "#e28ac8"];
  const fmt = (v: number) => "₹ " + Math.round(v).toLocaleString("en-IN");

  return (
    <ChartCard title="Breakdown">
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius="60%"
          outerRadius="85%"
          paddingAngle={3}
          stroke="none"
          cornerRadius={6}
        >
          {data.map((_, i) => (
            <Cell key={`cell-${i}`} fill={palette[i % palette.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(v: number, n: string) => [fmt(v), n]}
          contentStyle={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.95)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            color: "#ffffff",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
          }}
          itemStyle={{ color: "#ffffff" }}
        />
        <Legend
          verticalAlign="bottom"
          iconType="circle"
          formatter={(_, entry: any) => {
            const pct = ((entry?.payload?.value ?? 0) / total) * 100;
            return (
              <span style={{ color: "#ffffff", fontWeight: 500, fontSize: "0.85rem" }}>
                {entry?.payload?.name} ({pct.toFixed(1)}%)
              </span>
            );
          }}
        />
      </PieChart>
    </ChartCard>
  );
}

export function GrowthArea({
  data,
  title = "Growth over time",
  keys,
}: {
  data: any[];
  title?: string;
  keys: { key: string; label: string; color: string }[];
}) {
  return (
    <ChartCard title={title}>
      <AreaChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <defs>
          {keys.map((k) => (
            <linearGradient key={k.key} id={`g-${k.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={k.color} stopOpacity={0.6} />
              <stop offset="100%" stopColor={k.color} stopOpacity={0.05} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.1)" vertical={false} />
        <XAxis
          dataKey="year"
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          dy={10}
        />
        <YAxis
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickFormatter={(v) => formatCompact(v)}
          dx={-10}
        />
        <Tooltip
          formatter={(v: number) => "₹ " + Math.round(v).toLocaleString("en-IN")}
          contentStyle={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.95)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            color: "#ffffff",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
          }}
          labelStyle={{ color: "#78716c", marginBottom: 4 }}
          labelFormatter={(l) => `Year ${l}`}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(_, entry: any) => {
            const meta = keys.find((k) => k.key === entry.dataKey);
            return (
              <span style={{ color: "#ffffff", fontWeight: 500, fontSize: "0.85rem" }}>
                {meta?.label ?? _}
              </span>
            );
          }}
        />
        {keys.map((k) => (
          <Area
            key={k.key}
            type="monotone"
            dataKey={k.key}
            stroke={k.color}
            strokeWidth={3}
            fill={`url(#g-${k.key})`}
            activeDot={{ r: 6, strokeWidth: 0, fill: k.color }}
          />
        ))}
      </AreaChart>
    </ChartCard>
  );
}

/** Simple yet effective yearly bar chart. */
export function YearlyBars({
  data,
  title = "Year-by-year",
  keys,
  stacked = true,
}: {
  data: any[];
  title?: string;
  keys: { key: string; label: string; color: string }[];
  stacked?: boolean;
}) {
  return (
    <ChartCard title={title}>
      <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.1)" vertical={false} />
        <XAxis
          dataKey="year"
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          dy={10}
        />
        <YAxis
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickFormatter={(v) => formatCompact(v)}
          dx={-10}
        />
        <Tooltip
          cursor={{ fill: "rgba(255,255,255,0.05)" }}
          formatter={(v: number) => "₹ " + Math.round(v).toLocaleString("en-IN")}
          contentStyle={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.95)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            color: "#ffffff",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
          }}
          labelStyle={{ color: "#78716c", marginBottom: 4 }}
          labelFormatter={(l) => `Year ${l}`}
        />
        <Legend
          iconType="circle"
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(_, entry: any) => {
            const meta = keys.find((k) => k.key === entry.dataKey);
            return (
              <span style={{ color: "#ffffff", fontWeight: 500, fontSize: "0.85rem" }}>
                {meta?.label ?? _}
              </span>
            );
          }}
        />
        {keys.map((k) => (
          <Bar
            key={k.key}
            dataKey={k.key}
            stackId={stacked ? "s" : undefined}
            fill={k.color}
            radius={stacked ? [0, 0, 0, 0] : [6, 6, 0, 0]}
          />
        ))}
      </BarChart>
    </ChartCard>
  );
}

/* ---------------- Amortisation / yearly schedule ---------------- */

export type ScheduleColumn = {
  key: string;
  label: string;
  align?: "left" | "right";
  tone?: "default" | "accent" | "muted";
};

export function AmortisationTable({
  title = "Year-by-year schedule",
  subtitle,
  columns,
  rows,
  initiallyExpanded = false,
}: {
  title?: string;
  subtitle?: string;
  columns: ScheduleColumn[];
  rows: Record<string, number | string>[];
  initiallyExpanded?: boolean;
}) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const cutoff = 6;
  const showAll = expanded || rows.length <= cutoff;
  const visible = showAll ? rows : rows.slice(0, cutoff);

  const fmt = (v: number | string, colKey: string) =>
    typeof v === "number"
      ? colKey === "year"
        ? String(Math.round(v))
        : "₹ " + Math.round(v).toLocaleString("en-IN")
      : v;

  const handleDownloadPdf = () => {
    const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
    doc.setFontSize(16);
    doc.text(title, 40, 48);
    if (subtitle) {
      doc.setFontSize(10);
      doc.setTextColor(120);
      doc.text(subtitle, 40, 66);
      doc.setTextColor(0);
    }
    autoTable(doc, {
      startY: subtitle ? 84 : 68,
      head: [columns.map((c) => c.label)],
      body: rows.map((row) =>
        columns.map((c) => {
          const v = row[c.key];
          if (typeof v === "number") {
            return c.key === "year" ? String(Math.round(v)) : Math.round(v).toLocaleString("en-IN");
          }
          return String(v ?? "");
        }),
      ),
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [23, 44, 70], textColor: 255, halign: "left" },
      alternateRowStyles: { fillColor: [245, 245, 245] },
      columnStyles: columns.reduce(
        (acc, c, i) => {
          const align = (c.align ?? (c.key === "year" ? "left" : "right")) as "left" | "right";
          acc[i] = { halign: align };
          return acc;
        },
        {} as Record<number, { halign: "left" | "right" }>,
      ),
      margin: { left: 40, right: 40 },
    });
    const safeName = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    doc.save(`${safeName || "schedule"}.pdf`);
  };

  return (
    <div className="rounded-[32px] border border-[#2d5386]/30 bg-gradient-to-br from-[#172c46] to-[#0c1826] text-white shadow-xl shadow-[#172c46]/20 p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            <h3 className="text-[12px] font-bold text-white uppercase tracking-[0.15em]">
              {title}
            </h3>
          </div>
          {subtitle && <p className="mt-2 text-[13px] font-medium text-white/60">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[14px] font-bold text-stone-900 bg-white px-3 py-1 rounded-full">
            {rows.length} years
          </span>
          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-all shadow-sm active:scale-95"
          >
            <Download className="h-3.5 w-3.5" />
            PDF
          </button>
        </div>
      </div>
      <div className="overflow-x-auto -mx-2 sm:mx-0 pb-4">
        <table className="w-full min-w-[520px] text-sm">
          <thead>
            <tr className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 border-b-2 border-white/10">
              {columns.map((c) => (
                <th
                  key={c.key}
                  className={`py-4 px-3 ${
                    (c.align ?? (c.key === "year" ? "left" : "right")) === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <AnimatePresence initial={false}>
              {visible.map((row, i) => (
                <motion.tr
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  key={i}
                  className="hover:bg-white/5 transition-colors group"
                >
                  {columns.map((c) => {
                    const align =
                      (c.align ?? (c.key === "year" ? "left" : "right")) === "right"
                        ? "text-right"
                        : "text-left";
                    const toneCls =
                      c.tone === "accent"
                        ? "text-white font-bold"
                        : c.tone === "muted"
                          ? "text-white/50 font-medium"
                          : "text-white/90 font-medium";
                    return (
                      <td key={c.key} className={`py-3.5 px-3 ${align} ${toneCls}`}>
                        {fmt(row[c.key], c.key)}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {rows.length > cutoff && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-white/20 transition-all shadow-sm active:scale-95"
          >
            {expanded ? "Collapse schedule" : `View all ${rows.length} years`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  );
}

/* Color tokens re-exported for routes */
export const CHART_COLORS = {
  accent: "#8ac8e2",
  accentDeep: "#5885B4",
  neutral: "#ffffff",
  neutralMuted: "rgba(255,255,255,0.2)",
  warn: "#e8a87c",
};

/** Two-bar comparison (e.g. old vs new tax regime). */
export function CompareBar({
  data,
  title = "Comparison",
}: {
  data: { name: string; value: number }[];
  title?: string;
}) {
  const winnerIdx = data.reduce((best, cur, i) => (cur.value < data[best].value ? i : best), 0);
  return (
    <ChartCard title={title}>
      <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 0 }}>
        <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.1)" vertical={false} />
        <XAxis
          dataKey="name"
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          dy={10}
        />
        <YAxis
          stroke="#a8a29e"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickFormatter={(v) => formatCompact(v)}
          dx={-10}
        />
        <Tooltip
          cursor={{ fill: "rgba(255,255,255,0.05)" }}
          formatter={(v: number) => "₹ " + Math.round(v).toLocaleString("en-IN")}
          contentStyle={{
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.95)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            color: "#ffffff",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
          }}
        />
        <Bar dataKey="value" radius={[8, 8, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === winnerIdx ? CHART_COLORS.accent : "rgba(255,255,255,0.2)"} />
          ))}
        </Bar>
      </BarChart>
    </ChartCard>
  );
}

/* ---------------- Advanced options panel ---------------- */

export function AdvancedPanel({
  enabled,
  onToggle,
  children,
  title = "Advanced options",
  hint,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
  children: ReactNode;
  title?: string;
  hint?: string;
}) {
  return (
    <div className="pt-8 border-t border-white/10 mt-4 relative">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-full p-2 border transition-colors bg-[#513434] text-white border-transparent">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-white">{title}</h3>
            {hint && (
              <p className="mt-1 text-[12px] font-medium text-white/60 leading-relaxed max-w-sm">
                {hint}
              </p>
            )}
          </div>
        </div>
        <button
          role="switch"
          aria-checked={enabled}
          onClick={() => onToggle(!enabled)}
          className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors duration-300 ${
            enabled ? "bg-[#513434]" : "bg-white/10"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
              enabled ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {enabled && (
          <motion.div
            initial={{ opacity: 0, height: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
            exit={{ opacity: 0, height: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-8 space-y-7">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Callout that shows how much a user saved/gained with advanced options. */
export function SavingsCallout({
  headline,
  metrics,
  tone = "positive",
}: {
  headline: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  tone?: "positive" | "neutral";
}) {
  const isPositive = tone === "positive";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={
        isPositive
          ? "relative overflow-hidden rounded-[28px] p-6 sm:p-8 bg-[#E5F0F3] border border-[#172c46]/10 shadow-sm"
          : "rounded-[28px] p-6 sm:p-8 bg-white border border-white/10 shadow-sm"
      }
    >
      <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#172c46]">
        <Sparkles className="h-3.5 w-3.5" />
        With advanced options
      </div>
      <div className="mt-3">
        <div className="font-['Bricolage_Grotesque'] leading-tight tracking-tight pb-1 font-bold text-[35px]">
          <GradientText
            colors={["#184a99", "#4e8bf1", "#184a99"]}
            animationSpeed={4}
            className="!m-0 !max-w-full !justify-start"
          >
            {headline}
          </GradientText>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 relative z-10">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-black mb-1.5">
              {m.label}
            </div>
            <div className={`text-xl font-bold font-['Bricolage_Grotesque'] tracking-tight`}>
              <GradientText
                colors={["#184a99", "#4e8bf1", "#184a99"]}
                animationSpeed={4}
                className="!m-0 !max-w-full !justify-start"
              >
                {m.value}
              </GradientText>
            </div>
          </div>
        ))}
      </div>

      {isPositive && (
        <>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#172c46]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-[#172c46]/5 rounded-full blur-3xl pointer-events-none" />
        </>
      )}
    </motion.div>
  );
}
