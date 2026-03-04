"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TextSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  textClassName?: string
  spotlightSize?: number
}

const TextSpotlight = React.forwardRef<HTMLDivElement, TextSpotlightProps>(
  ({ text, className, textClassName, spotlightSize, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <span className={cn("text-foreground", textClassName)}>{text}</span>
      </div>
    )
  },
)
TextSpotlight.displayName = "TextSpotlight"

export { TextSpotlight }
