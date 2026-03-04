"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { TextSpotlight } from "@/components/ui/text-spotlight"
import { Send, Bot, User, Check, X, Zap, Wifi } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

const manualIssues = [
  "সকাল 11টায় আসে, দুপুরে চা খায়, 5টার পর অফলাইনে",
  '"একটু দেখি ভাই..." বলে হারিয়ে যায়',
  '"এই প্রোডাক্টের দাম কত ছিল যেন?"',
  "দুইজন কাস্টমার এলে মাথা গরম",
  "মাসে ফুল বেতন, ওভারটাইমে বাড়তি টাকা",
  "স্টক শেষ, কাস্টমার অর্ডার করার পর জানতে পারে",
  "পেমেন্ট মিলাতে মেসেজ ঘেঁটে সময় নষ্ট",
  "পুরনো কাস্টমারের কোনো ডেটা থাকে না",
  "একই প্রশ্নের উত্তর বারবার দিতে হয়",
]

const botBhaiFeatures = [
  "24 ঘণ্টা অনলাইন, ঘুমায় না, শুধু কাজ করে",
  "0.5 সেকেন্ডে ঝটপট রিপ্লাই",
  "একবার শেখালে কখনো ভুলে না",
  "একসাথে 100+ জনের সাথে আরামে কথা বলে",
  "একদম 1/3 খরচে ফুলটাইম কাজ",
  "অটোমেটিক ইনভেন্টরি আপডেট, স্টক নিখুঁত হিসাব",
  "অটোমেটিক পেমেন্ট ভেরিফিকেশন, কোনো ভুল নয়",
  "স্মার্ট ডেটাবেসে সব কাস্টমারের তথ্য সংরক্ষণ",
  "স্মার্ট অটো-রিপ্লাইয়ে সময় বাঁচান",
]

export function DemoComparisonSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "আরে ভাই! আমি BotBhai। আপনার ব্যবসা নিয়ে কিছু জানতে চান? আমাকে জিজ্ঞেস করুন!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentTime, setCurrentTime] = useState("9:41")
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const formattedHours = hours % 12 || 12
      const formattedMinutes = minutes.toString().padStart(2, "0")
      setCurrentTime(`${formattedHours}:${formattedMinutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("https://n8n.botbhai.net/webhook/f5fcd56f-d8fb-4935-9b22-93078bfcbae0/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          sessionId: `demo-${Date.now()}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.output || data.response || data.message || "ভাই একটু সমস্যা হচ্ছে, আবার চেষ্টা করুন!",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "ভাই নেটওয়ার্কে একটু সমস্যা হচ্ছে। একটু পর আবার চেষ্টা করুন!" },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="px-4 py-20" id="demo">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextSpotlight
            text="কেন BotBhai বেছে নিবেন?"
            textClassName="text-4xl font-bold md:text-5xl font-bengali"
            spotlightSize={300}
          />
          <p className="mt-4 text-xl text-muted-foreground font-bengali">ম্যানুয়াল রিপ্লাইয়ের দিন শেষ।</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Side - Comparison Cards */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-0 pt-8 lg:pt-12">
            {/* Manual Card */}
            <motion.div
              className="w-full sm:w-1/2 relative z-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full rounded-2xl sm:rounded-r-none border border-red-500/20 bg-card p-6 sm:pr-8">
                <div className="flex flex-col items-center mb-8">
                  <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Manual Employee</h3>
                  <span className="text-[10px] font-bold text-red-500 tracking-wider">THE OLD SYSTEM</span>
                </div>
                
                <ul className="space-y-4">
                  {manualIssues.map((issue, index) => (
                    <li key={index} className="flex items-center justify-between gap-4 text-sm text-muted-foreground border-b border-border/50 pb-4 last:border-0 font-bengali">
                      <span>{issue}</span>
                      <X className="h-4 w-4 shrink-0 text-red-500/70" />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* BotBhai Card */}
            <motion.div
              className="w-full sm:w-[55%] relative z-10 sm:-ml-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-full rounded-2xl border-2 border-green-500 bg-card p-6 sm:p-8 shadow-2xl shadow-green-500/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
                  RECOMMENDED
                </div>
                <div className="flex flex-col items-center mb-8">
                  <div className="h-14 w-14 rounded-full bg-green-500 flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                    <Zap className="h-7 w-7 text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">BotBhai</h3>
                  <span className="text-[10px] font-bold text-green-500 tracking-wider">THE NEW SYSTEM</span>
                </div>
                
                <ul className="space-y-4">
                  {botBhaiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center justify-between gap-4 text-sm text-foreground border-b border-border/50 pb-4 last:border-0 font-bengali">
                      <span className="font-medium">{feature}</span>
                      <Check className="h-5 w-5 shrink-0 text-green-500" />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[320px]">
              {/* Phone Frame */}
              <div className="relative rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 p-1 shadow-2xl shadow-primary/20">
                {/* Phone Screen */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white">
                  {/* Status Bar */}
                  <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-2 bg-white">
                    <span className="text-xs font-semibold text-gray-800">{currentTime}</span>
                    <div className="flex items-center gap-1">
                      {/* Signal bars */}
                      <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="2" y="16" width="3" height="6" rx="1" />
                        <rect x="7" y="12" width="3" height="10" rx="1" />
                        <rect x="12" y="8" width="3" height="14" rx="1" />
                        <rect x="17" y="4" width="3" height="18" rx="1" />
                      </svg>
                      {/* WiFi */}
                      <Wifi className="w-4 h-4 text-gray-800" />
                      {/* Battery */}
                      <svg className="w-5 h-4 text-gray-800" viewBox="0 0 28 14" fill="currentColor">
                        <rect x="0" y="1" width="24" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                        <rect x="2" y="3" width="18" height="8" rx="1.5" fill="currentColor" />
                        <rect x="25" y="4" width="2" height="6" rx="1" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Dynamic Island */}
                  <div className="absolute left-1/2 top-2 h-6 w-20 -translate-x-1/2 rounded-full bg-gray-800 z-40" />

                  {/* Chat Header */}
                  <div className="relative z-10 flex items-center gap-3 px-4 pb-3 pt-2 bg-white border-b border-gray-100">
                    <div>
                      <Image
                        src="/images/logo-black.png"
                        alt="BotBhai"
                        width={100}
                        height={32}
                        className="h-7 w-auto"
                      />
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-gray-500">Online</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages Area - White Background */}
                  <div ref={chatContainerRef} className="h-[380px] overflow-y-auto bg-gray-50 px-3 py-3">
                    <div className="flex flex-col gap-3">
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div
                            className={cn(
                              "flex max-w-[85%] items-end gap-2",
                              message.role === "user" && "flex-row-reverse",
                            )}
                          >
                            <div
                              className={cn(
                                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                                message.role === "user" ? "bg-primary" : "bg-gray-200",
                              )}
                            >
                              {message.role === "user" ? (
                                <User className="h-3.5 w-3.5 text-white" />
                              ) : (
                                <Bot className="h-3.5 w-3.5 text-primary" />
                              )}
                            </div>
                            <div
                              className={cn(
                                "rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm font-bengali",
                                message.role === "user"
                                  ? "bg-primary text-white rounded-br-sm"
                                  : "bg-white text-gray-800 rounded-bl-sm border border-gray-100",
                              )}
                            >
                              {message.content}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="flex items-end gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
                              <Bot className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm border border-gray-100">
                              <div className="flex gap-1">
                                <span
                                  className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                                  style={{ animationDelay: "0ms" }}
                                />
                                <span
                                  className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                                  style={{ animationDelay: "150ms" }}
                                />
                                <span
                                  className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                                  style={{ animationDelay: "300ms" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Input Area */}
                  <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white p-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="মেসেজ লিখুন..."
                        className="flex-1 rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bengali"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                      >
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>

                  {/* Home Indicator */}
                  <div className="flex justify-center py-2 bg-white">
                    <div className="h-1 w-28 rounded-full bg-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
