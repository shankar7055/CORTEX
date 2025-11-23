"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Mail, Settings, Zap, Plus, ChevronRight, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function OperationsPage() {
  const [purchaseId, setPurchaseId] = useState("")
  const [invoice, setInvoice] = useState<any | null>(null)
  const [loading, setLoading] = useState(false)
  const fetchInvoice = async () => {
    if (!purchaseId) return
    setLoading(true)
    setInvoice(null)
    try {
      const res = await fetch(`/api/invoice/${encodeURIComponent(purchaseId)}`)
      const data = await res.json()
      setInvoice(data)
    } catch {
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container space-y-10">
          {/* Page Header */}
          <motion.div className="flex items-center justify-between" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <div>
              <h1 className="h2 text-text-primary">Operations</h1>
              <p className="text-body text-text-secondary mt-1">Invoice generation, automation workflows, and email management</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                <Settings className="w-4 h-4" />
                Automation Rules
              </button>
              <button className="px-4 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium"><Plus className="w-4 h-4" />Create Workflow</button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">1,245</div>
                <div className="text-sm text-text-secondary">Invoices Generated</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">24</div>
                <div className="text-sm text-text-secondary">Active Workflows</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">3,567</div>
                <div className="text-sm text-text-secondary">Emails Sent</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">98.2%</div>
                <div className="text-sm text-text-secondary">Automation Success Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Invoice Generation */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text-primary">
                <FileText className="w-5 h-5 text-accent-primary" />
                Invoice Generation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-xl border border-border-subtle">
                  <h4 className="font-semibold text-text-primary mb-4">Generate New Invoice</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Customer</label>
                      <div className="lg:hidden">
                        <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="">Select customer...</option>
                          <option value="jennifer">Jennifer Smith</option>
                          <option value="michael">Michael Johnson</option>
                          <option value="sarah">Sarah Williams</option>
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <Select defaultValue="">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select customer..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="jennifer">Jennifer Smith</SelectItem>
                            <SelectItem value="michael">Michael Johnson</SelectItem>
                            <SelectItem value="sarah">Sarah Williams</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Invoice Template</label>
                      <div className="lg:hidden">
                        <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                          <option value="standard">Standard Invoice</option>
                          <option value="detailed">Detailed Invoice</option>
                          <option value="commercial">Commercial Invoice</option>
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <Select defaultValue="standard">
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select template..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Invoice</SelectItem>
                            <SelectItem value="detailed">Detailed Invoice</SelectItem>
                            <SelectItem value="commercial">Commercial Invoice</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-1">Purchase ID</label>
                      <input value={purchaseId} onChange={e=>setPurchaseId(e.target.value)} className="w-full px-4 py-2 bg-background border border-border-subtle rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Enter purchase ID (e.g., ORD-8901)" />
                    </div>
                    <button onClick={fetchInvoice} className="w-full px-4 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-all font-medium">Fetch Invoice</button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Recent Invoices</h4>
                  <motion.div className="space-y-2" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                    {[
                      { id: "INV-2024-1245", customer: "Jennifer Smith", amount: "$1,245.00", status: "Paid", date: "Dec 15" },
                      { id: "INV-2024-1244", customer: "Michael Johnson", amount: "$890.50", status: "Paid", date: "Dec 14" },
                      { id: "INV-2024-1243", customer: "Sarah Williams", amount: "$2,100.00", status: "Pending", date: "Dec 13" },
                      { id: "INV-2024-1242", customer: "David Brown", amount: "$675.25", status: "Paid", date: "Dec 12" },
                    ].map((invoice, idx) => (
                      <motion.div key={idx} className="p-3 bg-muted rounded-xl transition-colors cursor-pointer" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-mono text-xs text-text-secondary">{invoice.id}</div>
                            <div className="font-semibold text-sm">{invoice.customer}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-text-primary">{invoice.amount}</div>
                            <span className={`text-xs px-2 py-1 rounded-lg ${
                              invoice.status === "Paid" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                            }`}>
                              {invoice.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                <div className="p-6 bg-background rounded-xl border border-border-subtle">
                  <h4 className="font-semibold text-text-primary mb-3">Invoice Details</h4>
                  {loading ? (
                    <div className="text-sm text-text-secondary">Loading...</div>
                  ) : invoice ? (
                    <div className="text-sm whitespace-pre-wrap break-words">
                      {typeof invoice === "string" ? invoice : JSON.stringify(invoice, null, 2)}
                    </div>
                  ) : (
                    <div className="text-sm text-text-secondary">Enter a purchase ID and fetch to view details</div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Automated Workflows */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text-primary">
                <Zap className="w-5 h-5 text-accent-primary" />
                Automated Workflows
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    name: "Low Stock Alert → Email Supplier",
                    trigger: "Inventory < Safety Threshold",
                    action: "Send restock request email",
                    status: "Active",
                    runs: "12 times today",
                  },
                  {
                    name: "New Order → Invoice Generation",
                    trigger: "Order Status = Completed",
                    action: "Generate and send invoice",
                    status: "Active",
                    runs: "45 times today",
                  },
                  {
                    name: "Payment Received → Thank You Email",
                    trigger: "Payment Confirmed",
                    action: "Send thank you email with receipt",
                    status: "Active",
                    runs: "38 times today",
                  },
                  {
                    name: "Price Drop Alert → Customer Email",
                    trigger: "Competitor Price < Your Price",
                    action: "Notify customers of price match",
                    status: "Paused",
                    runs: "0 times today",
                  },
                  {
                    name: "Weekly P&L Report → Email CEO",
                    trigger: "Every Monday 9:00 AM",
                    action: "Generate and send P&L summary",
                    status: "Active",
                    runs: "1 time this week",
                  },
                ].map((workflow, idx) => (
                  <div key={idx} className="p-4 bg-muted rounded-xl border border-border-subtle transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="font-semibold text-text-primary mb-1">{workflow.name}</div>
                        <div className="text-xs text-text-secondary mb-2">
                          <span className="font-medium">Trigger:</span> {workflow.trigger}
                        </div>
                        <div className="text-xs text-text-secondary">
                          <span className="font-medium">Action:</span> {workflow.action}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          workflow.status === "Active" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                        }`}>
                          {workflow.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xs text-text-secondary">{workflow.runs}</span>
                      <button className="text-xs text-text-primary hover:opacity-80 font-medium flex items-center gap-1">
                        Edit Workflow <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Outgoing Email Log */}
          <Card className="bg-card text-card-foreground">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-text-primary">
                <Mail className="w-5 h-5 text-accent-primary" />
                Outgoing Email Log
              </CardTitle>
              <button className="text-sm text-text-primary hover:opacity-80 font-medium flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 overflow-x-auto">
                <div className="grid grid-cols-6 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                  <div>Timestamp</div>
                  <div>Recipient</div>
                  <div>Subject</div>
                  <div>Type</div>
                  <div className="text-center">Status</div>
                  <div className="text-center">Action</div>
                </div>

                {[
                  { time: "Dec 15, 2:45 PM", recipient: "john@techsupply.com", subject: "Restock Request - SKU B07M", type: "Supplier", status: "Sent" },
                  { time: "Dec 15, 2:30 PM", recipient: "jennifer.s@email.com", subject: "Invoice #INV-2024-1245", type: "Invoice", status: "Sent" },
                  { time: "Dec 15, 1:15 PM", recipient: "sarah@globalelec.com", subject: "Low Stock Alert - Multiple SKUs", type: "Supplier", status: "Sent" },
                  { time: "Dec 15, 12:00 PM", recipient: "mjohnson@email.com", subject: "Thank You for Your Purchase", type: "Customer", status: "Sent" },
                  { time: "Dec 15, 11:45 AM", recipient: "emily.davis@email.com", subject: "Order Confirmation #ORD-8901", type: "Customer", status: "Delivered" },
                ].map((email, idx) => (
                  <div key={idx} className="grid grid-cols-6 gap-4 py-3 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors text-sm items-center">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{email.time}</span>
                    </div>
                    <div className="text-text-primary text-xs">{email.recipient}</div>
                    <div className="font-medium text-text-primary truncate">{email.subject}</div>
                    <div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        email.type === "Supplier" ? "bg-accent text-accent-foreground" :
                        email.type === "Invoice" ? "bg-secondary text-secondary-foreground" :
                        "bg-accent text-accent-foreground"
                      }`}>
                        {email.type}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        email.status === "Delivered" ? "bg-secondary text-secondary-foreground" : "bg-accent text-accent-foreground"
                      }`}>
                        {email.status}
                      </span>
                    </div>
                    <div className="text-center">
                      <button className="text-xs text-text-primary hover:opacity-80 font-medium">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Automation Rules Settings */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-text-primary">
                <Settings className="w-5 h-5 text-text-primary" />
                Automation Rules Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { rule: "Auto-send invoices on order completion", enabled: true },
                  { rule: "Weekly P&L reports to stakeholders", enabled: true },
                  { rule: "Low stock alerts to suppliers", enabled: true },
                  { rule: "Customer follow-up emails (7 days)", enabled: false },
                  { rule: "Price drop notifications", enabled: false },
                  { rule: "Automated procurement requests", enabled: true },
                ].map((setting, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-background rounded-xl border border-border-subtle">
                    <span className="text-sm font-medium text-text-primary">{setting.rule}</span>
                    <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.enabled ? "bg-accent" : "bg-secondary"
                    }`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                        setting.enabled ? "translate-x-6" : "translate-x-1"
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
