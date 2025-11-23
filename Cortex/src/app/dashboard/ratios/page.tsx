"use client";

import React, { useEffect, useState } from "react";

const kpiClass = "flex flex-col gap-1 p-4 rounded-lg border border-border-subtle bg-background/60";

export default function RatiosPage() {
  const [gp, setGp] = useState<number | null>(null)
  const [np, setNp] = useState<number | null>(null)
  const [aov, setAov] = useState<number | null>(null)
  useEffect(() => {
    const load = async () => {
      try {
        const ins = await fetch("/api/financials/insights").then(r=>r.json())
        const raw = ins?.raw_financial_data || {}
        const tr = typeof raw?.TotalRevenue === "number" ? raw.TotalRevenue : null
        const gpv = typeof raw?.GrossProfit === "number" ? raw.GrossProfit : null
        const npv = typeof raw?.NetProfit === "number" ? raw.NetProfit : null
        setGp(tr && gpv ? Math.round((gpv / tr) * 100) : null)
        setNp(tr && npv ? Math.round((npv / tr) * 100) : null)
        const summary = ins?.financial_summary || {}
        const a = typeof summary?.AverageOrderValue === "number" ? summary.AverageOrderValue : null
        setAov(a)
      } catch {}
    }
    load()
  }, [])
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Ratios</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className={kpiClass}><span className="text-label text-text-secondary">Gross Profit %</span><span className="h3">{gp != null ? `${gp}%` : "42%"}</span></div>
        <div className={kpiClass}><span className="text-label text-text-secondary">Net Profit %</span><span className="h3">{np != null ? `${np}%` : "20%"}</span></div>
        <div className={kpiClass}><span className="text-label text-text-secondary">Return Rate</span><span className="h3">3.1%</span></div>
        <div className={kpiClass}><span className="text-label text-text-secondary">AOV</span><span className="h3">{aov != null ? `₹${aov}` : "₹3650"}</span></div>
      </div>
      <div className="mt-6 flex items-center gap-6">
        <PieChart values={[gp ?? 42, np ?? 20, (gp != null ? Math.max(0, 100 - gp) : 38)]} centerText={gp != null ? `${gp}%` : "42%"} />
        <div className="text-label text-text-secondary">
          <div>Gross Profit</div>
          <div>Net Profit</div>
          <div>Other</div>
        </div>
      </div>
    </section>
  );
}
import PieChart from "@/components/charts/PieChart";
