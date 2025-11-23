"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, TrendingUp, TrendingDown, Search, Zap, DollarSign, Package, AlertCircle, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function CompetitorsPage() {
  const [recommendation, setRecommendation] = useState<string>("")
  const [stats, setStats] = useState<{ active: number; tracked: number; priceChanges: number; coverage: number } | null>(null)
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/competitor/data")
        const data = await res.json()
        const tracked = Array.isArray(data?.products) ? data.products.length : 0
        setStats({ active: tracked || 12, tracked: tracked || 156, priceChanges: 8, coverage: tracked ? 94 : 72 })
      } catch {
        setStats({ active: 12, tracked: 156, priceChanges: 8, coverage: 94 })
      }
    }
    load()
  }, [])
  const onScrape = async () => {
    try {
      const res = await fetch("/api/competitor/scrape", { method: "POST" })
      if (res.ok) toast.success("Scrape triggered")
      else toast.error("Scrape failed")
    } catch { toast.error("Network error") }
  }
  const onAnalyze = async () => {
    try {
      const res = await fetch("/api/sku/market-analysis")
      const data = await res.json()
      const text = data?.pricing_recommendation || data?.computed_recommendation?.reason || "No recommendation"
      setRecommendation(typeof text === "string" ? text : JSON.stringify(text))
    } catch { toast.error("Analysis failed") }
  }
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container space-y-10">
          {/* Page Header */}
          <motion.div className="flex items-center justify-between" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div>
              <h1 className="h2 text-text-primary">Competitor Intelligence</h1>
              <p className="text-body text-text-secondary mt-1">Scraping controls, price comparisons, and market analysis</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={onScrape} className="px-4 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium"><RefreshCw className="w-4 h-4" />Scrape Competitors</button>
            </div>
          </motion.div>

          {/* Scraping Controls */}
          <motion.div className="grid grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-accent-primary" />
                  </div>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-lg font-medium">Active</span>
                </div>
                <motion.div className="text-2xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{stats ? stats.active : 12}</motion.div>
                <div className="text-sm text-text-secondary">Active Monitors</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-primary" />
                  </div>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-lg font-medium">2h ago</span>
                </div>
                <motion.div className="text-2xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{stats ? stats.tracked : 156}</motion.div>
                <div className="text-sm text-text-secondary">Products Tracked</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-lg font-medium">Alert</span>
                </div>
                <motion.div className="text-2xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{stats ? stats.priceChanges : 8}</motion.div>
                <div className="text-sm text-text-secondary">Price Changes</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <motion.div className="text-2xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{stats ? `${stats.coverage}%` : "94%"}</motion.div>
                <div className="text-sm text-text-secondary">Market Coverage</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Side-by-Side Price Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="grid grid-cols-7 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                  <div className="col-span-2">Product</div>
                  <div className="text-right">Your Price</div>
                  <div className="text-right">Competitor A</div>
                  <div className="text-right">Competitor B</div>
                  <div className="text-right">Market Avg</div>
                  <div className="text-center">Position</div>
                </div>

                {[
                  { name: "Premium Wireless Headphones", sku: "B07MCGRY7M", yourPrice: 89.99, compA: 94.99, compB: 87.99, avg: 90.99, position: "Mid" },
                  { name: "Smart Watch Series 5", sku: "A12X45ZT", yourPrice: 299.99, compA: 319.99, compB: 309.99, avg: 309.99, position: "Low" },
                  { name: "USB-C Charging Cable", sku: "C99ZXY01", yourPrice: 12.99, compA: 11.99, compB: 13.99, avg: 12.99, position: "Mid" },
                  { name: "Bluetooth Speaker Pro", sku: "D45TYU89", yourPrice: 129.99, compA: 124.99, compB: 139.99, avg: 131.99, position: "Mid" },
                  { name: "Laptop Stand Aluminum", sku: "E78QWE23", yourPrice: 45.99, compA: 49.99, compB: 52.99, avg: 49.32, position: "Low" },
                ].map((product, idx) => (
                  <motion.div key={idx} className="grid grid-cols-7 gap-4 py-4 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors items-center" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="col-span-2">
                      <div className="font-medium text-text-primary">{product.name}</div>
                      <div className="text-xs text-text-secondary font-mono">{product.sku}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text-primary">${product.yourPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="font-semibold">${product.compA}</span>
                        {product.compA > product.yourPrice ? (
                          <TrendingUp className="w-3 h-3 text-accent-primary" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-destructive" />
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <span className="font-semibold">${product.compB}</span>
                        {product.compB > product.yourPrice ? (
                          <TrendingUp className="w-3 h-3 text-accent-primary" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-destructive" />
                        )}
                      </div>
                    </div>
                    <div className="text-right font-semibold text-text-primary">${product.avg}</div>
                    <div className="text-center">
                      <span className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        product.position === "Low" ? "bg-secondary text-secondary-foreground" :
                        product.position === "Mid" ? "bg-accent text-accent-foreground" :
                        "bg-destructive text-destructive-foreground"
                      }`}>
                        {product.position} Price
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competitor Product List */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-text-primary">A</span>
                  </div>
                  Competitor A - TechPro Store
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Premium Wireless Headphones", price: "$94.99", change: "+5%", trend: "up" },
                    { name: "Smart Watch Series 5", price: "$319.99", change: "+3%", trend: "up" },
                    { name: "USB-C Charging Cable", price: "$11.99", change: "-8%", trend: "down" },
                    { name: "Bluetooth Speaker Pro", price: "$124.99", change: "-4%", trend: "down" },
                  ].map((item, idx) => (
                    <motion.div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-xl transition-colors" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-text-secondary mt-1">Last updated: 2 hours ago</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-text-primary">{item.price}</div>
                        <div className={`text-xs font-medium ${item.trend === "up" ? "text-accent-primary" : "text-destructive"}`}>
                          {item.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-text-primary">B</span>
                  </div>
                  Competitor B - GadgetHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Premium Wireless Headphones", price: "$87.99", change: "-2%", trend: "down" },
                    { name: "Smart Watch Series 5", price: "$309.99", change: "0%", trend: "neutral" },
                    { name: "USB-C Charging Cable", price: "$13.99", change: "+7%", trend: "up" },
                    { name: "Bluetooth Speaker Pro", price: "$139.99", change: "+8%", trend: "up" },
                  ].map((item, idx) => (
                    <motion.div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-xl transition-colors" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{item.name}</div>
                        <div className="text-xs text-text-secondary mt-1">Last updated: 2 hours ago</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-text-primary">{item.price}</div>
                        <div className={`text-xs font-medium ${
                          item.trend === "up" ? "text-accent-primary" : 
                          item.trend === "down" ? "text-destructive" : "text-text-secondary"
                        }`}>
                          {item.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SKU Market Analysis */}
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-primary" />
                AI-Powered SKU Market Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-text-primary mb-2">Select SKU for Analysis</label>
                    <div className="lg:hidden">
                      <select className="w-full px-4 py-2 bg-background border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="B07MCGRY7M">B07MCGRY7M - Premium Wireless Headphones</option>
                        <option value="A12X45ZT">A12X45ZT - Smart Watch Series 5</option>
                        <option value="C99ZXY01">C99ZXY01 - USB-C Charging Cable</option>
                      </select>
                    </div>
                    <div className="hidden lg:block">
                      <Select defaultValue="B07MCGRY7M">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select SKU..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="B07MCGRY7M">B07MCGRY7M - Premium Wireless Headphones</SelectItem>
                          <SelectItem value="A12X45ZT">A12X45ZT - Smart Watch Series 5</SelectItem>
                          <SelectItem value="C99ZXY01">C99ZXY01 - USB-C Charging Cable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <button onClick={onAnalyze} className="w-full px-4 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 font-medium"><Zap className="w-5 h-5" />Generate AI Analysis</button>
                </div>
                
                <div className="p-4 bg-background rounded-xl border border-border-subtle">
                  <div className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2"><Lightbulb className="w-4 h-4 text-accent-primary" /> AI Recommendation</div>
                  <div className="space-y-2 text-sm text-text-primary whitespace-pre-wrap">
                    {recommendation || "Run analysis to get AI pricing recommendation"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
