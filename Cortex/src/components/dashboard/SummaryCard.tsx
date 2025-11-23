"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

export default function SummaryCard() {
  const items = [
    { label: "Overview", value: "1,552", color: "bg-accent text-accent-foreground" },
    { label: "Campaigns", value: "1,552", color: "bg-accent text-accent-foreground" },
    { label: "Ad Group", value: "1,552", color: "bg-accent text-accent-foreground" },
    { label: "Keywords", value: "1,552", color: "bg-accent text-accent-foreground" },
  ]

  return (
    <Card className="h-full bg-card text-card-foreground">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-menu text-text-primary">Summary</CardTitle>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl ${item.color}`}
          >
            <span className="text-text-primary font-medium">{item.label}</span>
            <span className="text-text-primary font-semibold">{item.value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
