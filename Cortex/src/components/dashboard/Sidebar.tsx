"use client"

import { LayoutGrid, Package, Users, TrendingUp, BarChart3, Cog, MessageSquare, DollarSign } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
  const pathname = usePathname()
  
  const navItems = [
    { icon: LayoutGrid, href: "/dashboard", label: "Dashboard" },
    { icon: DollarSign, href: "/financials", label: "Financials" },
    { icon: Package, href: "/inventory", label: "Inventory" },
    { icon: Users, href: "/customers", label: "Customers" },
    { icon: TrendingUp, href: "/competitors", label: "Competitors" },
    { icon: BarChart3, href: "/growth", label: "Growth" },
    { icon: Cog, href: "/operations", label: "Operations" },
  ]
  
  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-20 bg-background border-r border-border-subtle hidden lg:flex flex-col items-center py-6 gap-6 z-50">
        <div className="w-12 h-12 rounded-full border border-border-subtle flex items-center justify-center text-text-primary font-semibold text-xl">
          S
        </div>
        <nav className="flex flex-col gap-3 items-center flex-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group relative ${
                  isActive 
                    ? "border border-accent-primary text-accent-primary bg-background" 
                    : "border border-transparent text-text-primary hover:bg-muted"
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                <span className="absolute left-full ml-4 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
              </Link>
            )
          })}
        </nav>
        <Link
          href="/chat"
          prefetch
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group relative ${
            pathname === "/chat"
              ? "border border-accent-primary text-accent-primary bg-background"
              : "border border-transparent text-text-primary hover:bg-muted"
          }`}
          title="Chat Assistant"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="absolute left-full ml-4 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat Assistant
          </span>
        </Link>
      </aside>
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border-subtle lg:hidden z-50">
        <div className="flex items-center justify-around px-2 py-2">
          {[
            ...navItems,
            { icon: MessageSquare, href: "/chat", label: "Chat" },
          ].map((item) => {
            const Icon = item.icon as any
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={`flex flex-col items-center justify-center px-3 py-1 rounded-md ${
                  isActive ? "text-accent-primary" : "text-text-primary"
                } hover:bg-muted`}
                title={item.label}
                aria-label={item.label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
