"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

export default function TopProductsChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-menu text-text-primary">Top 5 products by spend</CardTitle>
        <button className="p-1 hover:bg-muted rounded transition-colors">
          <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
        </button>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="text-mono-label text-text-secondary mb-2">Total score</div>
        <div className="text-4xl font-bold mb-6">2,985</div>
        
        <div className="relative w-full max-w-[16rem] aspect-square">
          <svg viewBox="0 0 200 200" className="w-full h-full transform -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--border)"
              strokeWidth="40"
            />
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--chart-1)"
              strokeWidth="40"
              strokeDasharray="251.2 251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 62.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--chart-2)"
              strokeWidth="40"
              strokeDasharray="125.6 376.8"
              initial={{ strokeDashoffset: 376.8 }}
              animate={{ strokeDashoffset: -188.4 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="var(--chart-3)"
              strokeWidth="40"
              strokeDasharray="62.8 439.6"
              initial={{ strokeDashoffset: 439.6 }}
              animate={{ strokeDashoffset: -314 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
          
          <motion.div className="absolute inset-0 flex items-center justify-center flex-col" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
            <div className="text-2xl font-bold">$1,815.67</div>
            <div className="text-xs text-text-secondary">B07MCGRY7M</div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
