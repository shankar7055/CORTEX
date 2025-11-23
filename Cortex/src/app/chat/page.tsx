"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard/Sidebar"
import Header from "@/components/dashboard/Header"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Paperclip, Download, Bot, BarChart3, Package } from "lucide-react"

export default function ChatPage() {
  const [message, setMessage] = useState("")
  const [dynamic, setDynamic] = useState<{ role: "user" | "assistant"; content: string; timestamp: string }[]>([])
  const send = async () => {
    const ts = new Date().toLocaleTimeString()
    setDynamic(prev => [...prev, { role: "user", content: message, timestamp: ts }])
    try {
      const res = await fetch("/ai/chatbot", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ query: message }) })
      const data = await res.json()
      const text = typeof data?.response === "string" ? data.response : JSON.stringify(data)
      setDynamic(prev => [...prev, { role: "assistant", content: text, timestamp: new Date().toLocaleTimeString() }])
    } catch {
      setDynamic(prev => [...prev, { role: "assistant", content: "Error contacting AI backend", timestamp: new Date().toLocaleTimeString() }])
    }
    setMessage("")
  }

  const conversations = [
    {
      role: "user",
      content: "Show me the P&L for Q4 2024",
      timestamp: "2:45 PM"
    },
    {
      role: "assistant",
      content: "Here's your Q4 2024 P&L summary:\n\n**Revenue:** $2,145,132\n**COGS:** $677,000\n**Gross Profit:** $1,468,132 (68.4%)\n**Operating Expenses:** $325,000\n**Net Profit:** $1,143,132 (53.3%)\n\nYour net profit increased by 19.1% compared to Q3. Would you like me to drill down into any specific category?",
      timestamp: "2:45 PM"
    },
    {
      role: "user",
      content: "What are my top 3 best-selling products?",
      timestamp: "2:47 PM"
    },
    {
      role: "assistant",
      content: "Your top 3 best-selling products in Q4 2024 are:\n\n1. **Smart Watch Series 5** (SKU-A12X45ZT)\n   - Units sold: 1,245\n   - Revenue: $373,499\n   \n2. **Premium Wireless Headphones** (SKU-B07MCGRY7M)\n   - Units sold: 2,890\n   - Revenue: $259,971\n   \n3. **Bluetooth Speaker Pro** (SKU-D45TYU89)\n   - Units sold: 1,678\n   - Revenue: $218,072\n\nWould you like to see inventory levels or restock recommendations for these items?",
      timestamp: "2:47 PM"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-0 lg:ml-20 pt-48 md:pt-40">
        <div className="container max-w-[1400px]">
          <Card className="h-[calc(100vh-200px)] flex flex-col">
            {/* Chat Header */}
            <div className="p-6 border-b border-border-subtle bg-background">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h2 className="text-menu text-text-primary">AI Assistant</h2>
                  <p className="text-sm text-text-secondary">Ask anything about your business data</p>
                </div>
              </div>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {[...conversations, ...dynamic].map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] ${msg.role === "user" ? "order-2" : "order-1"}`}>
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                          <Bot className="w-4 h-4 text-accent-primary" />
                        </div>
                        <span className="text-sm font-medium text-text-secondary">AI Assistant</span>
                      </div>
                    )}
                    <div className={`rounded-2xl p-4 ${
                      msg.role === "user" 
                        ? "bg-foreground text-background" 
                        : "bg-muted text-text-primary"
                    }`}>
                      <div className="text-sm whitespace-pre-line">{msg.content}</div>
                      <div className={`text-xs mt-2 ${msg.role === "user" ? "text-background/70" : "text-text-secondary"}`}>
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Context Anchors Display */}
              <div className="flex gap-2 flex-wrap">
                <div className="px-3 py-2 bg-muted border border-border-subtle rounded-lg text-xs font-medium text-text-primary flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" /> P&L Context Attached
                </div>
                <div className="px-3 py-2 bg-muted border border-border-subtle rounded-lg text-xs font-medium text-text-primary flex items-center gap-2">
                  <Package className="w-4 h-4" /> SKU Data Attached
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border-subtle bg-background">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-muted rounded-lg transition-colors" title="Attach Context">
                  <Paperclip className="w-5 h-5 text-text-secondary" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about your business..."
                  className="flex-1 px-4 py-3 bg-background border border-border-subtle rounded-xl focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                <button onClick={send} className="px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-all flex items-center gap-2 font-medium">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 mt-3 flex-wrap">
                <button className="px-3 py-1.5 bg-muted hover:opacity-90 rounded-lg text-xs font-medium text-text-primary transition-colors">
                  Show revenue trends
                </button>
                <button className="px-3 py-1.5 bg-muted hover:opacity-90 rounded-lg text-xs font-medium text-text-primary transition-colors">
                  List low-stock items
                </button>
                <button className="px-3 py-1.5 bg-muted hover:opacity-90 rounded-lg text-xs font-medium text-text-primary transition-colors">
                  Top customers this month
                </button>
                <button className="px-3 py-1.5 bg-muted hover:opacity-90 rounded-lg text-xs font-medium text-text-primary transition-colors">
                  Competitor price analysis
                </button>
                <button className="p-1.5 hover:bg-muted rounded-lg transition-colors" title="Export Conversation">
                  <Download className="w-4 h-4 text-text-primary" />
                </button>
              </div>
            </div>
          </Card>

          {/* Conversation History Sidebar */}
          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Conversations</h3>
              <div className="space-y-2">
                {[
                  { title: "Q4 2024 P&L Analysis", date: "Today, 2:45 PM", messages: 8 },
                  { title: "Inventory Restock Planning", date: "Yesterday, 4:30 PM", messages: 12 },
                  { title: "Customer Segmentation Analysis", date: "Dec 14, 10:15 AM", messages: 15 },
                  { title: "Competitor Price Tracking", date: "Dec 13, 2:00 PM", messages: 6 },
                ].map((conv, idx) => (
                  <div key={idx} className="p-3 bg-muted rounded-xl hover:opacity-90 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm text-text-primary">{conv.title}</div>
                        <div className="text-xs text-text-secondary">{conv.date}</div>
                      </div>
                      <div className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-lg font-medium">
                        {conv.messages} msgs
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
