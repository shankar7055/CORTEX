"use client";

import React from "react";

const card = "flex flex-col gap-1 p-4 rounded-lg border border-border-subtle bg-background/60";

export default function GrowthPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Growth & Trends</h3>
      <div className="mb-3 p-3 rounded-md border border-accent-primary/30">
        <p className="text-label">Anomaly detected: Spike in traffic on 12th</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={card}><span className="text-label">Campaign Recommendation</span><span className="text-body">Boost SKU-ACME-42</span></div>
        <div className={card}><span className="text-label">Attribution</span><span className="text-body">Organic 48%, Ads 32%, Direct 20%</span></div>
        <div className={card}><span className="text-label">Experiments</span><span className="text-body">Bundle Offer A/B</span></div>
      </div>
      <div className="mt-6">
        <BarChart values={[[8,12,9,14,17,20,16,22],[6,10,8,12,13,16,14,18]]} labels={["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"]} />
      </div>
    </section>
  );
}
import BarChart from "@/components/charts/BarChart";
