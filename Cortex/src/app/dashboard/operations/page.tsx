"use client";

import React from "react";

export default function OperationsPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Operations</h3>
      <div className="flex flex-wrap gap-3">
        <button className="btn btn-primary">Generate Invoices</button>
        <button className="btn btn-secondary">Enable Email Triggers</button>
        <button className="btn">Procurement</button>
      </div>
      <div className="mt-4">
        <p className="text-menu">Outgoing Email Log</p>
        <ul className="mt-2 space-y-2">
          <li className="text-label">12:41 Invoice for Order #5521</li>
          <li className="text-label">09:10 Restock request sent</li>
        </ul>
      </div>
    </section>
  );
}

