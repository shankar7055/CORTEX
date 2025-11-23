"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, TrendingUp, TrendingDown, DollarSign, FileText, AlertCircle, ChevronRight, Lightbulb, Calendar, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FinancialsPage() {
  const [totalRevenue, setTotalRevenue] = useState<number | null>(null)
  const [grossProfit, setGrossProfit] = useState<number | null>(null)
  const [netProfit, setNetProfit] = useState<number | null>(null)
  const [caSummary, setCaSummary] = useState<string | null>(null)
  const [taxAdvice, setTaxAdvice] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const [ins, tax] = await Promise.all([
          fetch("/api/financials/insights").then(r => r.json()),
          fetch("/api/financials/tax-advice").then(r => r.json()),
        ])
        const raw = ins?.raw_financial_data || {}
        setTotalRevenue(typeof raw?.TotalRevenue === "number" ? raw.TotalRevenue : null)
        setGrossProfit(typeof raw?.GrossProfit === "number" ? raw.GrossProfit : null)
        setNetProfit(typeof raw?.NetProfit === "number" ? raw.NetProfit : null)
        setCaSummary(typeof ins?.ca_summary_report === "string" ? ins.ca_summary_report : null)
        setTaxAdvice(typeof tax?.tax_deduction_advice === "string" ? tax.tax_deduction_advice : null)
      } catch {}
    }
    load()
  }, [])
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container space-y-10">
          {/* Page Header */}
          <motion.div className="flex items-center justify-between" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div>
              <h1 className="h2 text-text-primary">Financials</h1>
              <p className="text-body text-text-secondary mt-1">Full P&L view, tax advice, and financial analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                Export CSV
              </button>
              <button className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                Export JSON
              </button>
            </div>
          </motion.div>

          {/* Ratio Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+5.2%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>68.4%</motion.div>
                <div className="text-sm text-text-secondary">Gross Profit Margin</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+3.8%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>24.7%</motion.div>
                <div className="text-sm text-text-secondary">Net Profit Margin</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">-2.1%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>15.2%</motion.div>
                <div className="text-sm text-text-secondary">Operating Expense Ratio</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">Q4 2024</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{totalRevenue != null ? `$${totalRevenue.toLocaleString()}` : "$2.1M"}</motion.div>
                <div className="text-sm text-text-secondary">Total Revenue</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CA Executive Summary & Tax Advice */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-primary" />
                  CA Executive Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                  {caSummary && (
                    <div className="p-4 bg-muted rounded-xl border border-border-subtle text-sm">{caSummary}</div>
                  )}
                  <div className="p-4 bg-muted rounded-xl border border-border-subtle">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Revenue Growth Analysis</h4>
                        <p className="text-sm text-text-secondary">Your revenue increased by 12.5% compared to the previous quarter. Primary drivers include increased organic sales and successful PPC campaigns.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-xl border border-border-subtle">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Cost Optimization Opportunities</h4>
                        <p className="text-sm text-text-secondary">Identified $45K in potential savings through supplier negotiation and inventory optimization. Consider bulk purchasing for top 20% of SKUs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-muted rounded-xl border border-border-subtle">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center text-background font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Cash Flow Projection</h4>
                        <p className="text-sm text-text-secondary">Based on current trends, projected positive cash flow of $180K for next quarter. Recommend maintaining current inventory levels.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-accent-primary" />
                  Tax Advice Panel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                  <div className="p-4 bg-background rounded-xl border border-border-subtle">
                    <div className="text-sm font-medium text-text-secondary mb-1">Estimated Tax Liability</div>
                    <div className="text-2xl font-bold text-text-primary">{netProfit != null ? `$${Math.max(0, Math.round(netProfit * 0.15)).toLocaleString()}` : "$124,500"}</div>
                    <div className="text-xs text-text-secondary mt-1">Based on Q4 2024 performance</div>
                  </div>
                  <div className="space-y-2">
                    {taxAdvice && (
                      <div className="p-3 bg-background rounded-lg border border-border-subtle text-sm whitespace-pre-wrap">{taxAdvice}</div>
                    )}
                    <div className="p-3 bg-background rounded-lg border border-border-subtle">
                      <div className="text-sm font-medium mb-1 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-accent-primary" /> Deduction Opportunity</div>
                      <div className="text-xs text-text-secondary">Maximize R&D tax credits - estimated $12K available</div>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-border-subtle">
                      <div className="text-sm font-medium mb-1 flex items-center gap-2"><Calendar className="w-4 h-4 text-accent-primary" /> Upcoming Deadline</div>
                      <div className="text-xs text-text-secondary">Q4 estimated tax due: Jan 15, 2025</div>
                    </div>
                    <div className="p-3 bg-background rounded-lg border border-border-subtle">
                      <div className="text-sm font-medium mb-1 flex items-center gap-2"><Target className="w-4 h-4 text-accent-primary" /> Optimization Tip</div>
                      <div className="text-xs text-text-secondary">Consider accelerating expenses before year-end</div>
                    </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* P&L View */}
          <Card>
            <CardHeader>
              <CardTitle>Profit & Loss Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 overflow-x-auto">
                {/* Header */}
                <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                  <div>Category</div>
                  <div className="text-right">Q3 2024</div>
                  <div className="text-right">Q4 2024</div>
                  <div className="text-right">Change</div>
                </div>

                {/* Revenue Section */}
                <div className="py-4 border-b border-border-subtle">
                  <div className="grid grid-cols-4 gap-4 mb-2">
                    <div className="font-semibold text-text-primary">Revenue</div>
                    <div className="text-right font-semibold">$1,856,420</div>
                    <div className="text-right font-semibold">$2,145,132</div>
                    <div className="text-right font-semibold text-text-primary">+15.6%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-text-secondary ml-4">
                    <div>Product Sales</div>
                    <div className="text-right">$1,650,000</div>
                    <div className="text-right">$1,920,000</div>
                    <div className="text-right">+16.4%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-text-secondary ml-4">
                    <div>Service Revenue</div>
                    <div className="text-right">$206,420</div>
                    <div className="text-right">$225,132</div>
                    <div className="text-right">+9.1%</div>
                  </div>
                </div>

                {/* COGS Section */}
                <div className="py-4 border-b border-border-subtle">
                  <div className="grid grid-cols-4 gap-4 mb-2">
                    <div className="font-semibold text-text-primary">Cost of Goods Sold</div>
                    <div className="text-right font-semibold">$612,000</div>
                    <div className="text-right font-semibold">$677,000</div>
                    <div className="text-right font-semibold text-text-primary">+10.6%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-text-secondary ml-4">
                    <div>Manufacturing</div>
                    <div className="text-right">$450,000</div>
                    <div className="text-right">$495,000</div>
                    <div className="text-right">+10.0%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-text-secondary ml-4">
                    <div>Shipping & Fulfillment</div>
                    <div className="text-right">$162,000</div>
                    <div className="text-right">$182,000</div>
                    <div className="text-right">+12.3%</div>
                  </div>
                </div>

                {/* Gross Profit */}
                <div className="py-4 border-b border-border-subtle bg-muted">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-bold text-text-primary">Gross Profit</div>
                    <div className="text-right font-bold">$1,244,420</div>
                    <div className="text-right font-bold">$1,468,132</div>
                    <div className="text-right font-bold text-green-600">+18.0%</div>
                  </div>
                </div>

                {/* Operating Expenses */}
                <div className="py-4 border-b border-border-subtle">
                  <div className="grid grid-cols-4 gap-4 mb-2">
                    <div className="font-semibold text-text-primary">Operating Expenses</div>
                    <div className="text-right font-semibold">$285,000</div>
                    <div className="text-right font-semibold">$325,000</div>
                    <div className="text-right font-semibold text-red-600">+14.0%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-text-secondary ml-4">
                    <div>Marketing & Advertising</div>
                    <div className="text-right">$120,000</div>
                    <div className="text-right">$145,000</div>
                    <div className="text-right">+20.8%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 ml-4">
                    <div>Salaries & Benefits</div>
                    <div className="text-right">$95,000</div>
                    <div className="text-right">$105,000</div>
                    <div className="text-right">+10.5%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 ml-4">
                    <div>Technology & Software</div>
                    <div className="text-right">$45,000</div>
                    <div className="text-right">$48,000</div>
                    <div className="text-right">+6.7%</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm text-gray-600 ml-4">
                    <div>Other Expenses</div>
                    <div className="text-right">$25,000</div>
                    <div className="text-right">$27,000</div>
                    <div className="text-right">+8.0%</div>
                  </div>
                </div>

                {/* Net Profit */}
                <div className="py-4 bg-muted border-t border-border-subtle">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-bold text-text-primary text-lg">Net Profit</div>
                    <div className="text-right font-bold text-lg">$959,420</div>
                    <div className="text-right font-bold text-lg">$1,143,132</div>
                    <div className="text-right font-bold text-lg text-green-600">+19.1%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Transactions</CardTitle>
              <button className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </CardHeader>
            <CardContent>
              <motion.div className="space-y-1" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}>
                <div className="grid grid-cols-6 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                  <div>Date</div>
                  <div>Transaction ID</div>
                  <div>Category</div>
                  <div>Description</div>
                  <div className="text-right">Amount</div>
                  <div className="text-right">Status</div>
                </div>

                {[
                  { date: "Dec 15, 2024", id: "TXN-1001", category: "Revenue", desc: "Product Sale - SKU-B07M", amount: "$1,245.00", status: "Completed", positive: true },
                  { date: "Dec 15, 2024", id: "TXN-1002", category: "Expense", desc: "Marketing Campaign", amount: "$450.00", status: "Completed", positive: false },
                  { date: "Dec 14, 2024", id: "TXN-1003", category: "Revenue", desc: "Product Sale - SKU-A12X", amount: "$890.50", status: "Completed", positive: true },
                  { date: "Dec 14, 2024", id: "TXN-1004", category: "Expense", desc: "Supplier Payment", amount: "$2,100.00", status: "Pending", positive: false },
                  { date: "Dec 13, 2024", id: "TXN-1005", category: "Revenue", desc: "Product Sale - SKU-C99Z", amount: "$675.25", status: "Completed", positive: true },
                ].map((txn, idx) => (
                  <motion.div key={idx} className="grid grid-cols-6 gap-4 py-3 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors text-sm" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="text-text-secondary">{txn.date}</div>
                    <div className="font-mono text-xs text-text-secondary">{txn.id}</div>
                    <div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        txn.positive ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                      }`}>
                        {txn.category}
                      </span>
                    </div>
                    <div className="text-gray-700">{txn.desc}</div>
                    <div className={`text-right font-semibold ${txn.positive ? "text-text-primary" : "text-text-primary"}`}>
                      {txn.positive ? "+" : "-"}{txn.amount}
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        txn.status === "Completed" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                      }`}>
                        {txn.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
