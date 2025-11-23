"use client";

import React from "react";

const card = "flex flex-col gap-1 p-4 rounded-lg border border-border-subtle bg-background/60";

export default function CustomersPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Customers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={card}><span className="text-label">Top Customer</span><span className="h3">Rahul Mehta</span></div>
        <div className={card}><span className="text-label">Cohort 30D</span><span className="h3">Retained 64%</span></div>
        <div className={card}><span className="text-label">LTV</span><span className="h3">₹18,400</span></div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-menu">Customer List</p>
          <button className="btn btn-secondary">Export</button>
        </div>
        <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          {["Alex Johnson", "Michael Carter", "Rahul Mehta"].map((c) => (
            <li key={c} className="flex items-center justify-between p-3 rounded-md border border-border-subtle">
              <span className="text-body">{c}</span>
              <div className="flex gap-2">
                <button className="btn btn-secondary">View Orders</button>
                <button className="btn">Export</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

