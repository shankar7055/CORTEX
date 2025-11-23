"use client";

import React from "react";

const card = "flex flex-col gap-1 p-4 rounded-lg border border-border-subtle bg-background/60";

export default function CompetitorsPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Competitors / Market Intelligence</h3>
      <div className="flex flex-wrap gap-3 mb-4">
        <button className="btn btn-primary">Start Scrape</button>
        <button className="btn btn-secondary">Schedule</button>
        <button className="btn">Upload SKUs</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={card}>
          <span className="text-label">Competitor Product</span>
          <span className="text-body">ACME Pencil</span>
          <span className="text-label">Price: ₹49 vs ₹44</span>
        </div>
        <div className={card}>
          <span className="text-label">SKU Analysis</span>
          <button className="btn mt-2">Open Recommendation</button>
        </div>
      </div>
    </section>
  );
}

