"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, MoreHorizontal } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  subtitle: string
  change: string
  isPositive: boolean
  isDark?: boolean
}

function MetricCard({ title, value, subtitle, change, isPositive, isDark = false }: MetricCardProps) {
  return (
    <Card className={`${isDark ? "bg-card text-card-foreground" : "bg-card text-card-foreground"} overflow-hidden`}>
      <CardContent className="p-6 overflow-hidden">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`text-sm font-medium mb-1 text-text-secondary`}>
              {title}
            </div>
            <div className={`text-xs text-text-secondary`}>
              {subtitle}
            </div>
          </div>
          <button className={`p-1 rounded transition-colors hover:bg-muted`}>
            <MoreHorizontal className={`w-5 h-5 text-muted-foreground`} />
          </button>
        </div>
        
        <div className="min-w-0">
          <div className="text-2xl md:text-3xl font-bold text-text-primary">{value}</div>
          <div className="mt-2 flex justify-end">
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
                isPositive
                  ? "bg-accent text-accent-foreground"
                  : "bg-destructive text-destructive-foreground"
              } whitespace-nowrap`}
            >
              {isPositive ? (
                <ArrowUp className="w-3 h-3" />
              ) : (
                <ArrowDown className="w-3 h-3" />
              )}
              {change}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MetricCards() {
  const metrics = [
    {
      title: "Orders Created",
      value: "$134,970",
      subtitle: "Oct 16 / 21 - Nov 14 / 21",
      change: "+12.98%",
      isPositive: true,
      isDark: false,
    },
    {
      title: "Total Sales",
      value: "$2,145,132.80",
      subtitle: "Oct 16 / 21 - Nov 14 / 21",
      change: "+4.98%",
      isPositive: false,
      isDark: false,
    },
    {
      title: "PPC Sales",
      value: "$890.07",
      subtitle: "Oct 16 / 21 - Nov 14 / 21",
      change: "+0.17%",
      isPositive: true,
      isDark: false,
    },
    {
      title: "Units Sales",
      value: "$151,740",
      subtitle: "Oct 16 / 21 - Nov 14 / 21",
      change: "=",
      isPositive: true,
      isDark: false,
    },
    {
      title: "Organic Sales Ra...",
      value: "100.00%",
      subtitle: "Oct 16 / 21 - Nov 14 / 21",
      change: "+0.12%",
      isPositive: true,
      isDark: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  )
}
