"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedBorderButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function AnimatedBorderButton({ children, className, onClick }: AnimatedBorderButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
      className={cn("relative overflow-hidden rounded-full px-6 py-2.5 font-medium", className)}
    >
      {/* Animated rotating border - slower animation */}
      <span className="absolute inset-[-2px] overflow-hidden rounded-full">
        <span
          className="absolute inset-[-200%]"
          style={{
            backgroundImage: "conic-gradient(from 0deg, transparent 0 340deg, #FE6E58 360deg)",
            animation: "spin 4s linear infinite",
          }}
        />
      </span>
      {/* Inner background */}
      <span className="absolute inset-[1px] rounded-full bg-[#0B1332]" />
      {/* Content */}
      <span className="relative z-10 text-white/90">{children}</span>
    </motion.button>
  )
}
