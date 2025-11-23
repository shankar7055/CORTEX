"use client";

import React, { useMemo } from "react";

export default function FinancialsPage() {
  const pAndL = useMemo(
    () => [
      { name: "Revenue", amount: 125000 },
      { name: "COGS", amount: 72000 },
      { name: "Gross Profit", amount: 53000 },
      { name: "Operating Expenses", amount: 28000 },
      { name: "Net Profit", amount: 25000 },
    ],
    []
  );

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify({ pAndL }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "financials.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const header = "Metric,Amount\n";
    const rows = pAndL.map((r) => `${r.name},${r.amount}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "financials.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Financials</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-label text-text-secondary">
              <th className="py-2">Metric</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {pAndL.map((row) => (
              <tr key={row.name} className="border-t border-border-subtle">
                <td className="py-2">{row.name}</td>
                <td className="py-2">₹{row.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex gap-3">
        <button className="btn btn-secondary" onClick={exportCSV}>Download CSV</button>
        <button className="btn btn-secondary" onClick={exportJSON}>Download JSON</button>
      </div>
    </section>
  );
}

