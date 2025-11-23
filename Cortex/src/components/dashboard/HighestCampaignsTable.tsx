"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"

export default function HighestCampaignsTable() {
  const campaigns = [
    { name: "BO8NY9N3MT", spend: "$30.25", sales: "$149.85", acos: "$149.85", badge: "A" },
    { name: "Campaign - 3...", spend: "$40.00", sales: "$134.00", acos: "$134.50", badge: "A" },
    { name: "Research - Ac...", spend: "$43.55", sales: "$129.75", acos: "$125.00", badge: "M" },
    { name: "BO87C75QQJ", spend: "$45.85", sales: "$113.00", acos: "$119.45", badge: "M" },
    { name: "House Numbe...", spend: "$54.00", sales: "$99.55", acos: "$85.00", badge: "A" },
  ]

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-menu text-text-primary">Highest ACoS campaigns</CardTitle>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-1 overflow-x-auto">
          <div className="hidden md:grid md:grid-cols-4 gap-4 text-xs text-text-secondary font-medium pb-3 border-b border-border-subtle">
            <div>Campaign</div>
            <div className="text-right">Spend</div>
            <div className="text-right">Sales</div>
            <div className="text-right">ACoS</div>
          </div>

          {campaigns.map((campaign, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-3 py-3 border-b border-border-subtle last:border-0 hover:bg-muted transition-colors">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-semibold ${
                  campaign.badge === "A" ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
                }`}>
                  {campaign.badge}
                </span>
                <span className="text-sm font-medium text-text-primary truncate">{campaign.name}</span>
              </div>
              <div className="hidden md:block text-sm text-right text-text-primary whitespace-nowrap">{campaign.spend}</div>
              <div className="hidden md:block text-sm text-right text-text-primary whitespace-nowrap">{campaign.sales}</div>
              <div className="hidden md:block text-sm text-right font-semibold text-text-primary whitespace-nowrap">{campaign.acos}</div>

              <div className="md:hidden flex items-center justify-between text-xs text-text-secondary mt-1">
                <span className="whitespace-nowrap">Spend {campaign.spend}</span>
                <span className="whitespace-nowrap">Sales {campaign.sales}</span>
                <span className="whitespace-nowrap font-semibold">ACoS {campaign.acos}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
