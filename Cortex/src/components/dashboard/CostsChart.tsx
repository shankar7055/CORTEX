"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export default function CostsChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-menu text-text-primary">Costs</CardTitle>
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
              <span className="text-text-primary">Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--chart-2)" }}></div>
              <span className="text-text-primary">Exps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--chart-3)" }}></div>
              <span className="text-text-primary">Odds</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-64">
          <svg viewBox="0 0 600 200" className="w-full h-full">
            {/* Grid lines */}
            <line x1="0" y1="25" x2="600" y2="25" stroke="var(--border)" strokeWidth="1" />
            <line x1="0" y1="75" x2="600" y2="75" stroke="var(--border)" strokeWidth="1" />
            <line x1="0" y1="125" x2="600" y2="125" stroke="var(--border)" strokeWidth="1" />
            <line x1="0" y1="175" x2="600" y2="175" stroke="var(--border)" strokeWidth="1" />
            
            {/* Purple costs line */}
            <motion.path
              d="M 0,60 Q 50,40 100,50 T 200,45 T 300,35 T 400,40 T 500,60 T 600,50"
              fill="none"
              stroke="var(--chart-1)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Green expenses line */}
            <motion.path
              d="M 0,80 Q 50,65 100,75 T 200,70 T 300,60 T 400,65 T 500,85 T 600,75"
              fill="none"
              stroke="var(--chart-2)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            
            {/* Yellow odds line */}
            <motion.path
              d="M 0,100 Q 50,85 100,95 T 200,90 T 300,110 T 400,100 T 500,120 T 600,110"
              fill="none"
              stroke="var(--chart-3)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            
            {/* Data point indicator */}
            <circle cx="400" cy="40" r="4" fill="var(--chart-1)" />
            <text x="410" y="35" fontSize="12" fill="var(--chart-1)" fontWeight="600">4.25%</text>
          </svg>
          
          {/* X-axis labels */}
          <div className="flex justify-between text-xs text-text-secondary mt-2">
            <span>24 Aug</span>
            <span>31 Aug</span>
            <span>7 Sep</span>
            <span>14 Sep</span>
            <span>21 Sep</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
