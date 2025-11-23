"use client"

import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, AlertTriangle, Download, TrendingUp, Package, DollarSign } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import Link from "next/link"
import SummaryCard from "./SummaryCard"
import TopProductsChart from "./TopProductsChart"
import HighestCampaignsTable from "./HighestCampaignsTable"
import MetricCards from "./MetricCards"
import CostsChart from "./CostsChart"
import ACosVsTACosChart from "./ACosVsTACosChart"

export default function DashboardOverview() {
  const [dailyRevenue, setDailyRevenue] = useState<number | null>(null)
  const [lowStockCount, setLowStockCount] = useState<number | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const [ovRes, invRes] = await Promise.all([
          fetch("/api/overview").then(r => r.json()),
          fetch("/api/inventory/automation").then(r => r.json()),
        ])
        const m = ovRes?.metrics || {}
        const v = typeof m?.Last7DayAvg === "number" ? m.Last7DayAvg : m?.AverageDailyRevenue
        setDailyRevenue(typeof v === "number" ? v : null)
        const low = invRes?.low_stock_report?.length
        setLowStockCount(typeof low === "number" ? low : 0)
      } catch {}
    }
    load()
  }, [])

  const onScrape = async () => {
    try {
      const res = await fetch("/api/competitor/scrape", { method: "POST" })
      if (res.ok) {
        toast.success("Competitor scrape started")
      } else {
        toast.error("Scrape failed")
      }
    } catch {
      toast.error("Network error")
    }
  }

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <motion.div id="overview" className="flex items-center justify-between scroll-mt-48 md:scroll-mt-40" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div>
          <h1 className="h2 text-text-primary">Dashboard Overview</h1>
          <p className="text-body text-text-secondary mt-1">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="px-4 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium">
            <RefreshCw className="w-4 h-4" />
            Refresh Data
          </button>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
        <Card className="bg-card text-card-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <span className="text-xs bg-accent px-2 py-1 rounded-lg">Today</span>
            </div>
            <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{dailyRevenue != null ? `$${dailyRevenue.toLocaleString()}` : "$24,567"}</motion.div>
            <div className="text-sm text-text-secondary">Daily Revenue</div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs bg-accent px-2 py-1 rounded-lg">Live</span>
            </div>
            <div className="text-3xl font-bold mb-1">1,284</div>
            <div className="text-sm text-text-secondary">Total Orders</div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs bg-accent px-2 py-1 rounded-lg">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">$45.2K</div>
            <div className="text-sm text-text-secondary">Monthly Growth</div>
          </CardContent>
        </Card>

        <Card className="bg-card text-card-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <span className="text-xs bg-accent px-2 py-1 rounded-lg">Alert</span>
            </div>
            <div className="text-3xl font-bold mb-1">{lowStockCount != null ? lowStockCount : 12}</div>
            <div className="text-sm text-text-secondary">Low Stock Items</div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions & Alerts */}
      <motion.div id="customize" className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-48 md:scroll-mt-40" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Card className="bg-card text-card-foreground">
          <CardContent className="p-6">
            <h3 className="text-menu text-text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button onClick={onScrape} className="w-full px-4 py-3 bg-muted hover:opacity-90 rounded-xl transition-colors flex items-center gap-3 text-left">
                <div className="w-10 h-10 bg-background rounded-lg border border-border-subtle flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-text-primary font-medium">Scrape Competitors</div>
                  <div className="text-xs text-text-secondary">Last run: 2 hours ago</div>
                </div>
              </button>
              <button className="w-full px-4 py-3 bg-muted hover:opacity-90 rounded-xl transition-colors flex items-center gap-3 text-left">
                <div className="w-10 h-10 bg-background rounded-lg border border-border-subtle flex items-center justify-center">
                  <Download className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <div className="text-text-primary font-medium">Export Reports</div>
                  <div className="text-xs text-text-secondary">Generate P&L CSV</div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-card text-card-foreground">
          <CardContent className="p-6">
            <h3 className="text-menu text-text-primary mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent-primary" />
              Recent Alerts
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                  <div>
                    <div className="text-text-primary font-medium text-sm">Low Stock: SKU-B07MCGRY7M</div>
                    <div className="text-xs text-text-secondary">Only 12 units remaining</div>
                  </div>
                </div>
                <span className="text-xs text-text-secondary">5 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                  <div>
                    <div className="text-text-primary font-medium text-sm">Price drop detected: Competitor A</div>
                    <div className="text-xs text-text-secondary">15% reduction on similar products</div>
                  </div>
                </div>
                <span className="text-xs text-text-secondary">1 hour ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                  <div>
                    <div className="text-text-primary font-medium text-sm">New order spike detected</div>
                    <div className="text-xs text-text-secondary">45% increase in last 2 hours</div>
                  </div>
                </div>
                <span className="text-xs text-text-secondary">2 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top row - 3 cards */}
      <motion.div id="ppc" className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-48 md:scroll-mt-40" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <SummaryCard />
        <TopProductsChart />
        <HighestCampaignsTable />
      </motion.div>
      
      {/* Metric cards row */}
      <motion.div id="yty" className="scroll-mt-48 md:scroll-mt-40" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <MetricCards />
      </motion.div>
      
      {/* Bottom row - 2 charts */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <CostsChart />
        <ACosVsTACosChart />
      </motion.div>

      {/* Shortcuts to other pages */}
      <Card className="bg-card text-card-foreground">
        <CardContent className="p-6">
          <h3 className="text-menu text-text-primary mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/financials" prefetch className="p-4 bg-muted rounded-xl hover:opacity-90 transition-all text-center group border border-border-subtle">
              <DollarSign className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Financials</div>
              <div className="text-xs text-text-secondary">P&L & Reports</div>
            </Link>
            <Link href="/inventory" prefetch className="p-4 bg-muted rounded-xl hover:opacity-90 transition-all text-center group border border-border-subtle">
              <Package className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Inventory</div>
              <div className="text-xs text-text-secondary">Stock Management</div>
            </Link>
            <Link href="/customers" prefetch className="p-4 bg-muted rounded-xl hover:opacity-90 transition-all text-center group border border-border-subtle">
              <TrendingUp className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Customers</div>
              <div className="text-xs text-text-secondary">Customer Insights</div>
            </Link>
            <Link href="/growth" prefetch className="p-4 bg-muted rounded-xl hover:opacity-90 transition-all text-center group border border-border-subtle">
              <TrendingUp className="w-8 h-8 text-accent-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-medium text-sm">Growth & Trends</div>
              <div className="text-xs text-text-secondary">Analytics</div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
