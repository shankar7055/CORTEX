"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, AlertTriangle, TrendingUp, Mail, Search, Filter, Plus, Edit, Trash2 } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function InventoryPage() {
  const [lowCount, setLowCount] = useState<number | null>(null)
  const [lowStock, setLowStock] = useState<any[]>([])
  const [productId, setProductId] = useState("P001")
  const [trends, setTrends] = useState<any | null>(null)
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/inventory/automation")
        const data = await res.json()
        const list = data?.low_stock_report || []
        setLowStock(Array.isArray(list) ? list : [])
        setLowCount(Array.isArray(list) ? list.length : 0)
      } catch {}
    }
    load()
  }, [])
  const sendRestockEmail = async () => {
    try {
      const payload = { to: "owner@example.com", subject: "Restock", body: "Please restock low items." }
      const res = await fetch("/api/email/restock", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) })
      if (res.ok) toast.success("Restock email queued")
      else toast.error("Failed to queue email")
    } catch { toast.error("Network error") }
  }
  const loadTrends = async () => {
    try {
      const res = await fetch(`/api/inventory/trends?product_id=${encodeURIComponent(productId)}&days=30`)
      const data = await res.json()
      setTrends(data)
    } catch {}
  }
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container space-y-10">
          <motion.div className="flex items-center justify-between" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div>
              <h1 className="h2 text-text-primary">Inventory Management</h1>
              <p className="text-body text-text-secondary mt-1">Product grid, safety thresholds, and supplier management</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={sendRestockEmail} className="px-4 py-2 bg-background border border-border-subtle rounded-xl hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                <Mail className="w-4 h-4" />
                Bulk Restock Email
              </button>
              <button className="px-4 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center gap-2 text-sm font-medium"><Plus className="w-4 h-4" />Add Product</button>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>1,284</motion.div>
                <div className="text-sm text-text-secondary">Total Products</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{lowCount != null ? lowCount : 12}</motion.div>
                <div className="text-sm text-text-secondary">Low Stock Alerts</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>$2.4M</motion.div>
                <div className="text-sm text-text-secondary">Total Inventory Value</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Package className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>45</motion.div>
                <div className="text-sm text-text-secondary">Active Suppliers</div>
              </CardContent>
            </Card>
          </motion.div>

          
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent-primary" />
                Low Stock Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                {(lowStock.length ? lowStock : [
                  { product_id: "SKU-B07MCGRY7M", name: "Premium Wireless Headphones", current_stock: 12, dynamic_threshold: 50 },
                  { product_id: "SKU-A12X45ZT", name: "Smart Watch Series 5", current_stock: 8, dynamic_threshold: 30 },
                  { product_id: "SKU-C99ZXY01", name: "USB-C Charging Cable", current_stock: 25, dynamic_threshold: 100 },
                ]).map((item: any, idx: number) => (
                  <motion.div key={idx} className="p-4 bg-background rounded-xl shadow-sm border border-border-subtle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1">{item.name}</div>
                        <div className="text-xs text-text-secondary font-mono">{item.product_id}</div>
                      </div>
                      <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-lg font-medium">Low</span>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div>
                        <div className="text-xs text-text-secondary">Current</div>
                        <div className="text-lg font-bold text-text-primary">{item.current_stock}</div>
                      </div>
                      <div className="text-text-secondary">/</div>
                      <div>
                        <div className="text-xs text-text-secondary">Threshold</div>
                        <div className="text-lg font-bold text-text-primary">{item.dynamic_threshold}</div>
                      </div>
                    </div>
                    <button className="w-full mt-3 px-3 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-colors text-sm font-medium">
                      Restock Now
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Inventory</CardTitle>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="pl-10 pr-4 py-2 bg-background border border-border-subtle rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <button className="px-3 py-2 bg-background border border-border-subtle rounded-lg hover:bg-muted transition-colors flex items-center gap-2 text-sm font-medium">
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 overflow-x-auto">
                <div className="grid grid-cols-8 gap-4 text-xs font-semibold text-text-secondary pb-3 border-b border-border-subtle">
                  <div>SKU</div>
                  <div className="col-span-2">Product Name</div>
                  <div className="text-center">Stock</div>
                  <div className="text-center">Safety Threshold</div>
                  <div className="text-right">Unit Price</div>
                  <div className="text-center">Status</div>
                  <div className="text-center">Actions</div>
                </div>

                {[
                  { sku: "B07MCGRY7M", name: "Premium Wireless Headphones", stock: 12, threshold: 50, price: "$89.99", status: "Low", trend: "line-down" },
                  { sku: "A12X45ZT", name: "Smart Watch Series 5", stock: 145, threshold: 30, price: "$299.99", status: "Good", trend: "line-up" },
                  { sku: "C99ZXY01", name: "USB-C Charging Cable", stock: 25, threshold: 100, price: "$12.99", status: "Low", trend: "line-down" },
                  { sku: "D45TYU89", name: "Bluetooth Speaker Pro", stock: 67, threshold: 40, price: "$129.99", status: "Good", trend: "line-up" },
                  { sku: "E78QWE23", name: "Laptop Stand Aluminum", stock: 234, threshold: 50, price: "$45.99", status: "Good", trend: "line-up" },
                  { sku: "F12POI56", name: "Wireless Mouse Elite", stock: 8, threshold: 60, price: "$34.99", status: "Critical", trend: "line-down" },
                  { sku: "G90LKJ34", name: "USB Hub 7-Port", stock: 189, threshold: 80, price: "$24.99", status: "Good", trend: "line-up" },
                  { sku: "H23MNB67", name: "HDMI Cable 4K 6ft", stock: 456, threshold: 200, price: "$15.99", status: "Good", trend: "line-up" },
                ].map((product, idx) => (
                  <motion.div key={idx} className="grid grid-cols-8 gap-4 py-3 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors text-sm items-center" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25, ease: "easeOut" }}>
                    <div className="font-mono text-xs text-text-secondary">{product.sku}</div>
                    <div className="col-span-2 font-medium text-text-primary">{product.name}</div>
                    <div className="text-center">
                      <span className={`font-semibold text-text-primary`}>
                        {product.stock}
                      </span>
                    </div>
                    <div className="text-center text-text-secondary">{product.threshold}</div>
                    <div className="text-right font-semibold text-text-primary">{product.price}</div>
                    <div className="text-center">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        product.status === "Critical" ? "bg-destructive text-destructive-foreground" :
                        product.status === "Low" ? "bg-secondary text-secondary-foreground" :
                        "bg-accent text-accent-foreground"
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-1 hover:bg-muted rounded transition-colors" title="Edit">
                        <Edit className="w-4 h-4 text-text-secondary" />
                      </button>
                      <button className="p-1 hover:bg-muted rounded transition-colors" title="Delete">
                        <Trash2 className="w-4 h-4 text-text-primary" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          
          <Card>
            <CardHeader>
              <CardTitle>Inventory Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <input value={productId} onChange={e=>setProductId(e.target.value)} className="px-3 py-2 bg-background border border-border-subtle rounded-lg text-sm" />
                <button onClick={loadTrends} className="px-3 py-2 bg-foreground text-background rounded-lg text-sm font-medium">Load Trends</button>
              </div>
              <div className="text-sm whitespace-pre-wrap break-words">
                {trends ? (typeof trends === "string" ? trends : JSON.stringify(trends, null, 2)) : "Select a product and load trends"}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supplier Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                {[
                  { name: "TechSupply Co.", contact: "John Smith", email: "john@techsupply.com", phone: "+1 (555) 123-4567", products: 234 },
                  { name: "Global Electronics", contact: "Sarah Johnson", email: "sarah@globalelec.com", phone: "+1 (555) 234-5678", products: 156 },
                  { name: "Premium Accessories", contact: "Mike Chen", email: "mike@premiumacc.com", phone: "+1 (555) 345-6789", products: 89 },
                ].map((supplier, idx) => (
                  <motion.div key={idx} className="p-4 bg-background rounded-xl border border-border-subtle" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-text-primary">{supplier.name}</div>
                        <div className="text-xs text-text-secondary">{supplier.products} products</div>
                      </div>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Mail className="w-4 h-4 text-text-secondary" />
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-text-secondary text-xs">Contact:</span>
                        <span className="text-text-primary">{supplier.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-secondary text-xs">Email:</span>
                        <span className="text-text-primary text-xs">{supplier.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-secondary text-xs">Phone:</span>
                        <span className="text-text-primary text-xs">{supplier.phone}</span>
                      </div>
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
