"use client"

import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, AlertTriangle, Zap, Target, BarChart3, PieChart, Mail, Smartphone, Search } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function GrowthPage() {
  const [avgDaily, setAvgDaily] = useState<number | null>(null)
  const [last7Avg, setLast7Avg] = useState<number | null>(null)
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/overview")
        const data = await res.json()
        const m = data?.metrics || {}
        setAvgDaily(typeof m?.AverageDailyRevenue === "number" ? m.AverageDailyRevenue : null)
        setLast7Avg(typeof m?.Last7DayAvg === "number" ? m.Last7DayAvg : null)
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
              <h1 className="h2 text-text-primary">Growth & Trends</h1>
              <p className="text-body text-text-secondary mt-1">Time-series analysis, anomaly detection, and campaign recommendations</p>
            </div>
          </motion.div>

          {/* Anomaly Detection Banner */}
          <Card className="bg-destructive text-destructive-foreground">
            <CardContent className="p-6">
              <motion.div className="flex items-start gap-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Anomaly Detected: Revenue Spike</h3>
                  <p className="opacity-80 mb-4">Unusual 45% increase in revenue detected in the last 2 hours. This is 3.2σ above normal. Investigate potential causes: viral social media post, competitor outage, or pricing error.</p>
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-2 bg-background text-text-primary rounded-lg border border-border-subtle hover:bg-muted transition-colors font-medium text-sm">
                      Investigate Now
                    </button>
                    <button className="px-4 py-2 bg-background/20 text-destructive-foreground rounded-lg hover:bg-background/30 transition-colors font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>

          {/* Growth Metrics */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+24%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{avgDaily != null ? `$${avgDaily.toLocaleString()}` : "$124K"}</motion.div>
                <div className="text-sm text-text-secondary">MoM Revenue Growth</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+18%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{last7Avg != null ? `$${last7Avg.toLocaleString()}` : "4.2%"}</motion.div>
                <div className="text-sm text-text-secondary">Conversion Rate</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+12%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>$67</motion.div>
                <div className="text-sm text-text-secondary">Avg Order Value</div>
              </CardContent>
            </Card>

            <Card className="bg-card text-card-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <PieChart className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent px-2 py-1 rounded-lg">+8%</span>
                </div>
                <motion.div className="text-3xl font-bold mb-1" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>28%</motion.div>
                <div className="text-sm text-text-secondary">Customer Retention</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time Series Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Time-Series Analysis (Last 30 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-80">
                <svg viewBox="0 0 800 300" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="0" y1="50" x2="800" y2="50" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="150" x2="800" y2="150" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="200" x2="800" y2="200" stroke="var(--border)" strokeWidth="1" />
                  <line x1="0" y1="250" x2="800" y2="250" stroke="var(--border)" strokeWidth="1" />
                  
                  {/* Revenue line */}
                  <path
                    d="M 0,180 L 50,170 L 100,160 L 150,155 L 200,165 L 250,150 L 300,145 L 350,140 L 400,135 L 450,130 L 500,125 L 550,115 L 600,110 L 650,100 L 700,80 L 750,60 L 800,50"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--chart-1)" />
                      <stop offset="100%" stopColor="var(--chart-2)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Anomaly spike marker */}
                  <circle cx="750" cy="60" r="8" fill="var(--destructive)" stroke="var(--background)" strokeWidth="2" />
                  <text x="750" y="40" fontSize="12" fill="var(--destructive)" fontWeight="600" textAnchor="middle">Spike!</text>
                  
                  {/* Data points */}
                  <circle cx="750" cy="60" r="4" fill="var(--chart-2)" />
                </svg>
                
                {/* X-axis labels */}
                <div className="flex justify-between text-xs text-text-secondary mt-4">
                  <span>Nov 15</span>
                  <span>Nov 20</span>
                  <span>Nov 25</span>
                  <span>Nov 30</span>
                  <span>Dec 5</span>
                  <span>Dec 10</span>
                  <span>Dec 15</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Campaign Recommendations */}
            <Card className="bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-primary" />
                  AI Campaign Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                {[
                  {
                    title: "Target High-Value Customers",
                    desc: "Launch a retargeting campaign for customers who spent $200+ in the last 3 months. Expected ROI: 340%",
                    priority: "High",
                    impact: "$12K estimated revenue",
                    icon: Target,
                  },
                  {
                    title: "Email Campaign: Abandoned Cart",
                    desc: "Send personalized emails to 1,234 users with abandoned carts. Recovery rate: 18-22%",
                    priority: "High",
                    impact: "$8.5K estimated revenue",
                    icon: Mail,
                  },
                  {
                    title: "Social Media: Product Launch",
                    desc: "Promote new SKU-X123 across Instagram and Facebook. Target similar audiences to top 20% customers",
                    priority: "Medium",
                    impact: "$6K estimated revenue",
                    icon: Smartphone,
                  },
                  {
                    title: "SEO: Long-Tail Keywords",
                    desc: "Optimize for 15 low-competition keywords in electronics category. Estimated traffic increase: 45%",
                    priority: "Medium",
                    impact: "$4.2K estimated revenue",
                    icon: Search,
                  },
                ].map((rec, idx) => (
                  <motion.div key={idx} className="p-4 bg-background rounded-xl border border-border-subtle transition-all" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-semibold text-text-primary flex items-center gap-2">
                        <rec.icon className="w-4 h-4 text-accent-primary" />
                        {rec.title}
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        rec.priority === "High" ? "bg-destructive text-destructive-foreground" : "bg-accent text-accent-foreground"
                      }`}>
                        {rec.priority}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary mb-3">{rec.desc}</p>
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xs font-semibold text-text-primary">{rec.impact}</span>
                      <button className="px-3 py-1 bg-foreground text-background rounded-lg hover:opacity-90 transition-colors text-xs font-medium">Launch Campaign</button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>

          {/* Channel Attribution */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card>
              <CardHeader>
                <CardTitle>Channel Attribution (Last 30 Days)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                {[
                    { channel: "Organic Search", revenue: "$456K", percentage: 38, color: "bg-accent" },
                    { channel: "Paid Ads", revenue: "$342K", percentage: 28, color: "bg-accent" },
                    { channel: "Email Marketing", revenue: "$234K", percentage: 19, color: "bg-accent" },
                    { channel: "Social Media", revenue: "$123K", percentage: 10, color: "bg-accent" },
                    { channel: "Direct", revenue: "$60K", percentage: 5, color: "bg-accent" },
                  ].map((channel, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-text-primary">{channel.channel}</span>
                          <span className="text-sm text-text-secondary">{channel.percentage}%</span>
                        </div>
                        <span className="font-bold text-text-primary">{channel.revenue}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className={`${channel.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${channel.percentage}%` }}></div>
                      </div>
                    </motion.div>
                ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Experiment Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div className="space-y-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                  {[
                    { title: "A/B Test: Product Page Layout", confidence: "85%", duration: "14 days", impact: "Medium" },
                    { title: "Pricing Test: Dynamic Discounts", confidence: "72%", duration: "21 days", impact: "High" },
                    { title: "Checkout: One-Click Purchase", confidence: "91%", duration: "7 days", impact: "High" },
                    { title: "Email: Subject Line Variants", confidence: "68%", duration: "10 days", impact: "Low" },
                    { title: "Landing Page: CTA Button Color", confidence: "79%", duration: "5 days", impact: "Medium" },
                  ].map((exp, idx) => (
                    <motion.div key={idx} className="p-4 bg-muted rounded-xl border border-border-subtle transition-all" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-sm text-text-primary">{exp.title}</div>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          exp.impact === "High" ? "bg-destructive text-destructive-foreground" :
                          exp.impact === "Medium" ? "bg-accent text-accent-foreground" :
                          "bg-secondary text-secondary-foreground"
                        }`}>
                          {exp.impact}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-text-secondary">
                        <span>Confidence: {exp.confidence}</span>
                        <span>Duration: {exp.duration}</span>
                      </div>
                      <button className="w-full mt-3 px-3 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-colors text-xs font-medium">Start Experiment</button>
                    </motion.div>
                ))}
          </motion.div>
                </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
