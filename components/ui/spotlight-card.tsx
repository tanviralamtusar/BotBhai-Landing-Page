"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(({ className, children, spotlightColor, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-xl border border-border bg-card p-6", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SpotlightCard.displayName = "SpotlightCard"

export { SpotlightCard }
