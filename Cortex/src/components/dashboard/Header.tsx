"use client"

import { Search, Bell, MessageSquare, Calendar, ChevronDown, FolderOpen, Plus, Home, Users, DollarSign, Package, TrendingUp, BarChart3, Cog } from "lucide-react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const router = useRouter()
  const [localeFlag, setLocaleFlag] = useState("🇺🇸")
  const [activeTab, setActiveTab] = useState<"overview" | "ppc" | "yty" | "customize">("overview")
  const [dateRange, setDateRange] = useState("30 days")
  const notifications = [
    { id: 1, title: "Low stock: SKU-B07M", time: "5m" },
    { id: 2, title: "Price drop: Competitor A", time: "1h" },
    { id: 3, title: "Order spike detected", time: "2h" },
  ]

  return (
    <header className="fixed left-0 lg:left-20 right-0 top-0 bg-background border-b border-border-subtle z-10">
      <div className="flex items-center justify-between px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Go Home" onClick={() => router.push("/")}> 
            <Home className="w-5 h-5 text-text-primary" />
          </button>
          <h1 className="text-2xl font-semibold text-text-primary">Dashboard</h1>
        </div>
        <SearchInput router={router} />
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-2 hover:bg-muted rounded-lg transition-colors flex items-center gap-2">
                <span className="text-2xl">{localeFlag}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setLocaleFlag("🇺🇸")}>English (US)</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLocaleFlag("🇬🇧")}>English (UK)</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setLocaleFlag("🇮🇳")}>Hindi (IN)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-text-primary" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent-primary rounded-full"></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[220px]">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.map((n) => (
                <DropdownMenuItem key={n.id} className="justify-between">
                  <span className="truncate">{n.title}</span>
                  <span className="text-xs text-text-secondary">{n.time}</span>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/operations" prefetch>View all</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="p-2 hover:bg-muted rounded-lg transition-colors" onClick={() => router.push("/chat")}>
            <MessageSquare className="w-5 h-5 text-text-primary" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background font-bold">
                N
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" prefetch>Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/customers" prefetch>Customers</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 lg:px-8 py-3 border-t border-border-subtle">
        <div className="flex items-center gap-2">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "overview" ? "text-text-primary bg-background border-b-2 border-foreground" : "text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => {
              setActiveTab("overview")
              router.push("/dashboard#overview")
            }}
          >
            <span className="text-text-secondary mr-2">01</span> Overview
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "ppc" ? "text-text-primary bg-background border-b-2 border-foreground" : "text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => {
              setActiveTab("ppc")
              router.push("/dashboard#ppc")
            }}
          >
            <span className="text-text-secondary mr-2">02</span> PPC
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "yty" ? "text-text-primary bg-background border-b-2 border-foreground" : "text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => {
              setActiveTab("yty")
              router.push("/dashboard#yty")
            }}
          >
            <span className="text-text-secondary mr-2">03</span> Year to year...
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "customize" ? "text-text-primary bg-background border-b-2 border-foreground" : "text-text-secondary hover:text-text-primary"
            }`}
            onClick={() => {
              setActiveTab("customize")
              router.push("/dashboard#customize")
            }}
          >
            <span className="text-text-secondary mr-2">04</span> Customize
          </button>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 border border-border-subtle rounded-xl text-sm font-medium hover:bg-muted transition-colors flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="font-semibold">{dateRange}</span>
                <span className="text-text-secondary">Oct 16 / 21 – Nov 14 / 21</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => setDateRange("7 days")}>7 days</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setDateRange("30 days")}>30 days</DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setDateRange("90 days")}>90 days</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Custom range…</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <FolderOpen className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/financials" prefetch>Open Reports</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/operations" prefetch>Open Email Log</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/customers" prefetch>Open Customers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-colors">
                <Plus className="w-5 h-5 text-background" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/growth" prefetch>New Campaign</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/customers" prefetch>New Customer</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/operations" prefetch>New Workflow</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

function SearchInput({ router }: { router: ReturnType<typeof useRouter> }) {
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const features = [
    { title: "Dashboard Overview", href: "/dashboard", keywords: ["dashboard", "home", "overview"], icon: Home },
    { title: "Customers", href: "/customers", keywords: ["customers", "customer", "clients", "users"], icon: Users },
    { title: "Financials", href: "/financials", keywords: ["financials", "finance", "reports", "report", "p&l", "profit", "loss"], icon: DollarSign },
    { title: "Inventory", href: "/inventory", keywords: ["inventory", "stock", "sku", "warehouse"], icon: Package },
    { title: "Competitors", href: "/competitors", keywords: ["competitors", "competitor", "price", "pricing", "market"], icon: TrendingUp },
    { title: "Growth", href: "/growth", keywords: ["growth", "campaign", "retention", "marketing"], icon: BarChart3 },
    { title: "Operations", href: "/operations", keywords: ["operations", "workflow", "email", "invoices", "invoice"], icon: Cog },
    { title: "Chat Assistant", href: "/chat", keywords: ["chat", "assistant"], icon: MessageSquare },
  ]

  const results = query
    ? features.filter(f => {
        const q = query.trim().toLowerCase()
        return f.title.toLowerCase().includes(q) || f.keywords.some(k => q.includes(k))
      }).slice(0, 6)
    : []

  function select(index: number) {
    const item = results[index]
    if (item) {
      router.push(item.href)
      return
    }
    const q = query.trim()
    if (q) {
      router.push(`/dashboard?search=${encodeURIComponent(q)}`)
    }
  }

  return (
    <div className="flex-1 max-w-md mx-6 lg:mx-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for anything"
          aria-label="Search"
          className="w-full pl-10 pr-4 py-2.5 bg-muted border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIndex(0) }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, Math.max(results.length - 1, 0))) }
            if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)) }
            if (e.key === "Enter") { e.preventDefault(); select(activeIndex) }
            if (e.key === "Escape") { setQuery("") }
          }}
        />
        {results.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-background border border-border-subtle rounded-xl shadow z-50">
            <ul className="py-1">
              {results.map((item, idx) => {
                const Icon = item.icon as any
                return (
                  <li
                    key={item.href}
                    className={`flex items-center gap-3 px-3 py-2 cursor-pointer ${activeIndex === idx ? "bg-muted" : "hover:bg-muted"}`}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onMouseDown={() => select(idx)}
                  >
                    <Icon className="w-4 h-4 text-text-secondary" />
                    <span className="text-sm font-medium text-text-primary">{item.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
