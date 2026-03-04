"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingTabsProps {
  tabs: { label: string; id: string }[]
  onTabClick: (id: string) => void
  className?: string
}

export function FloatingTabs({ tabs, onTabClick, className }: FloatingTabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (index: number, id: string) => {
    setActiveTab(index)
    onTabClick(id)
  }

  return (
    <div className={cn("flex flex-wrap gap-1 rounded-full bg-secondary/80 p-1.5 backdrop-blur-lg", className)}>
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(index, tab.id)}
        >
          <span
            className={cn(
              "relative z-10 transition-colors",
              activeTab === index ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </span>
          <AnimatePresence>
            {activeTab === index && (
              <motion.div
                layoutId="activeTabBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 rounded-full bg-card"
                style={{ zIndex: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  )
}
