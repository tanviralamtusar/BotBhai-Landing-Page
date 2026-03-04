"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number // Positive = slower than scroll, Negative = faster than scroll
  className?: string
  offset?: ["start" | "end" | "center", "start" | "end" | "center"]
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = "",
  offset = ["start", "end"],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${offset[0]} end`, `${offset[1]} start`],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

interface ParallaxContainerProps {
  children: ReactNode
  className?: string
}

export function ParallaxContainer({ children, className = "" }: ParallaxContainerProps) {
  return <div className={`relative overflow-hidden ${className}`}>{children}</div>
}
