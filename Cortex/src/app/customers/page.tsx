"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, TrendingUp, Download, Eye, Mail, ChevronRight, Medal, Hash } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomersPage() {
  const [topCustomers, setTopCustomers] = useState<{ name: string; total_spent: number }[]>([])
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/customers/loyalty")
        const data = await res.json()
        const list = Array.isArray(data?.top_customers) ? data.top_customers : []
        setTopCustomers(list)
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
          <motion.div className="flex items-center justify-between" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div>
              <h1 className="h2 text-text-primary">Customer Analytics</h1>
              <p className="text-body text-text-secondary mt-1">Top customers, cohort analysis, and lifetime value insights</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                <Download className="w-4 h-4" />
                Export Customer Data
              </button>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>8,456</motion.div>
                <div className="text-sm text-text-secondary">Total Customers</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>$1,245</motion.div>
                <div className="text-sm text-text-secondary">Avg Customer LTV</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>3.4</motion.div>
                <div className="text-sm text-text-secondary">Avg Orders per Customer</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>1,234</motion.div>
                <div className="text-sm text-text-secondary">New This Month</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Lifetime Value by Cohort</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
              {[
                { cohort: "Q4 2024", customers: 1234, ltv: "$1,450", color: "bg-accent", width: "100%" },
                { cohort: "Q3 2024", customers: 2156, ltv: "$1,320", color: "bg-accent", width: "91%" },
                { cohort: "Q2 2024", customers: 1890, ltv: "$1,180", color: "bg-accent", width: "81%" },
                { cohort: "Q1 2024", customers: 1678, ltv: "$1,050", color: "bg-accent", width: "72%" },
                { cohort: "Q4 2023", customers: 1445, ltv: "$980", color: "bg-accent", width: "68%" },
              ].map((cohort, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-text-primary">{cohort.cohort}</span>
                          <span className="text-sm text-text-secondary">{cohort.customers} customers</span>
                        </div>
                        <span className="font-bold text-lg text-text-primary">{cohort.ltv}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className={`${cohort.color} h-3 rounded-full transition-all duration-500`} style={{ width: cohort.width }}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="text-menu text-text-primary">Top 5 Customers</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                  {(topCustomers.length ? topCustomers : [
                    { name: "Jennifer Smith", total_spent: 12450 },
                    { name: "Michael Johnson", total_spent: 9870 },
                    { name: "Sarah Williams", total_spent: 8560 },
                    { name: "David Brown", total_spent: 7230 },
                    { name: "Emily Davis", total_spent: 6890 },
                  ]).map((customer: any, idx: number) => (
                    <motion.div key={idx} className="p-3 bg-muted rounded-xl border border-border-subtle transition-all" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {idx < 3 ? (
                            <Medal className="w-4 h-4 text-accent-primary" />
                          ) : (
                            <span className="flex items-center gap-1 text-xs text-text-secondary">
                              <Hash className="w-3 h-3" />
                              {idx + 1}
                            </span>
                          )}
                          <span className="font-semibold text-sm">{customer.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-text-secondary">Top Customer</span>
                        <span className="font-bold text-text-primary">${Number(customer.total_spent).toLocaleString()}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Cohort Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-left py-3 px-4 font-semibold text-text-primary">Cohort</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 0</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 1</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 2</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 3</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 4</th>
                    <th className="text-center py-3 px-4 font-semibold text-text-secondary">Month 5</th>
                  </tr>
                  </thead>
                  <tbody>
                    {[
                      { cohort: "Oct 2024", values: ["100%", "68%", "54%", "45%", "38%", "-"] , colors: ["bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-muted"] },
                      { cohort: "Sep 2024", values: ["100%", "72%", "58%", "48%", "41%", "35%"], colors: ["bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent"] },
                      { cohort: "Aug 2024", values: ["100%", "65%", "51%", "42%", "36%", "31%"], colors: ["bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent"] },
                      { cohort: "Jul 2024", values: ["100%", "70%", "56%", "46%", "39%", "33%"], colors: ["bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent", "bg-accent"] },
                    ].map((row, idx) => (
                      <motion.tr key={idx} className="border-b border-border-subtle hover:bg-muted" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <td className="py-3 px-4 font-semibold text-text-primary">{row.cohort}</td>
                        {row.values.map((value, vidx) => (
                          <td key={vidx} className="text-center py-3 px-4">
                            <div className={`${row.colors[vidx]} text-accent-foreground font-semibold py-2 px-3 rounded-lg inline-block min-w-[60px]`}>
                              {value}
                            </div>
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-menu text-text-primary">Customer Directory</CardTitle>
                <button className="text-sm text-text-primary hover:opacity-80 font-medium flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 overflow-x-auto">
                  <div className="grid grid-cols-7 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                    <div>Customer Name</div>
                    <div>Email</div>
                    <div className="text-center">Total Orders</div>
                    <div className="text-right">Total Spent</div>
                    <div className="text-right">LTV</div>
                    <div className="text-center">Last Order</div>
                    <div className="text-center">Actions</div>
                  </div>

                  {[
                  { name: "Jennifer Smith", email: "jennifer.s@email.com", orders: 45, spent: "$12,450", ltv: "$15,600", lastOrder: "Dec 15, 2024" },
                  { name: "Michael Johnson", email: "mjohnson@email.com", orders: 38, spent: "$9,870", ltv: "$12,300", lastOrder: "Dec 14, 2024" },
                  { name: "Sarah Williams", email: "sarah.w@email.com", orders: 32, spent: "$8,560", ltv: "$10,800", lastOrder: "Dec 13, 2024" },
                  { name: "David Brown", email: "dbrown@email.com", orders: 28, spent: "$7,230", ltv: "$9,500", lastOrder: "Dec 12, 2024" },
                  { name: "Emily Davis", email: "emily.davis@email.com", orders: 25, spent: "$6,890", ltv: "$8,900", lastOrder: "Dec 11, 2024" },
                ].map((customer, idx) => (
                  <motion.div key={idx} className="grid grid-cols-7 gap-4 py-3 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors text-sm items-center" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="font-medium text-text-primary">{customer.name}</div>
                    <div className="text-text-secondary text-xs">{customer.email}</div>
                    <div className="text-center font-semibold text-text-primary">{customer.orders}</div>
                    <div className="text-right font-semibold text-text-primary">{customer.spent}</div>
                    <div className="text-right font-bold text-text-primary">{customer.ltv}</div>
                    <div className="text-center text-text-secondary text-xs">{customer.lastOrder}</div>
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="View Orders">
                        <Eye className="w-4 h-4 text-text-primary" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Send Email">
                        <Mail className="w-4 h-4 text-text-primary" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Export">
                        <Download className="w-4 h-4 text-text-primary" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              </CardContent>
            </Card>
        </div>
      </main>
    </div>
  )
}
