"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Infinity } from "lucide-react"
import { motion } from "framer-motion"

export default function ACosVsTACosChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-menu text-text-primary">ACoS vs TACoS</CardTitle>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-6 text-sm">
          <div className="text-text-secondary">Aug 21 - Sep 21</div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--chart-1)" }}></div>
              <span className="text-text-primary">Coasts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--chart-2)" }}></div>
              <span className="text-text-primary">Sell</span>
            </div>
            <div className="flex items-center gap-2">
              <Infinity className="w-4 h-4 text-gray-600" />
              <span className="text-text-primary">Sell</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-64">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="400" y2="40" stroke="var(--border)" strokeWidth="1" />
            <line x1="0" y1="100" x2="400" y2="100" stroke="var(--border)" strokeWidth="1" />
            <line x1="0" y1="160" x2="400" y2="160" stroke="var(--border)" strokeWidth="1" />
            
            {/* Bar chart - First group */}
            <motion.rect x="80" y="50" width="80" height="110" fill="var(--chart-1)" rx="8" style={{ transformOrigin: "bottom" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6 }} />
            <motion.rect x="80" y="80" width="80" height="80" fill="var(--chart-2)" rx="8" style={{ transformOrigin: "bottom" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.7 }} />
            
            {/* Bar chart - Second group */}
            <motion.rect x="240" y="80" width="80" height="80" fill="var(--chart-1)" rx="8" style={{ transformOrigin: "bottom" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6 }} />
            <motion.rect x="240" y="100" width="80" height="60" fill="var(--chart-2)" rx="8" style={{ transformOrigin: "bottom" }} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.7 }} />
            
            {/* Line connecting points */}
            <motion.line x1="120" y1="80" x2="280" y2="100" stroke="var(--foreground)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
            <circle cx="120" cy="80" r="6" fill="white" stroke="#374151" strokeWidth="2" />
            <circle cx="280" cy="100" r="6" fill="white" stroke="#374151" strokeWidth="2" />
            
            {/* Labels */}
            <text x="120" y="70" fontSize="14" fontWeight="600" textAnchor="middle" fill="var(--background)">8.15%</text>
            <text x="280" y="90" fontSize="14" fontWeight="600" textAnchor="middle" fill="var(--background)">75.25%</text>
          </svg>
          
          {/* X-axis labels */}
          <div className="flex justify-around text-sm text-text-secondary mt-2">
            <span>31 Aug</span>
            <span>21 Sep</span>
          </div>
          
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 flex flex-col justify-between h-full text-xs text-text-secondary -translate-x-8">
            <span>8</span>
            <span>6</span>
            <span>4</span>
            <span>2</span>
            <span>0</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
