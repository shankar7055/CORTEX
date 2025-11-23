"use client";

import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container space-y-10">{children}</div>
      </main>
    </div>
  );
}
