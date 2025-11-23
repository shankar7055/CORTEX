"use client";

import React from "react";

const kpiClass = "flex flex-col gap-1 p-4 rounded-lg border border-border-subtle bg-background/60";

export default function InventoryPage() {
  return (
    <section className="rounded-xl border border-border-subtle bg-background/60 p-6">
      <h3 className="text-menu text-text-primary mb-4">Inventory</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["SKU-ACME-42", "SKU-ZETA-19", "SKU-OMEGA-03"].map((sku) => (
          <div key={sku} className={kpiClass}>
            <span className="text-label text-text-secondary">{sku}</span>
            <span className="text-body">Stock: 18</span>
            <button className="btn mt-2">Draft Restock Email</button>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button className="btn btn-primary">Bulk Restock</button>
        <button className="btn">Manage Suppliers</button>
      </div>
    </section>
  );
}

