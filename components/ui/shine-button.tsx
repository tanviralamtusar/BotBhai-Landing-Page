"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ShineButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function ShineButton({ children, className, onClick }: ShineButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative px-6 py-2.5 rounded-full font-medium text-white overflow-hidden",
        "animate-[shine_3s_linear_infinite]",
        className,
      )}
      style={{
        backgroundImage: "linear-gradient(110deg, #FE6E58 45%, #ff8a7a 55%, #FE6E58)",
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.button>
  )
}
