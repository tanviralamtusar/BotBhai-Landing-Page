"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MorphyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg"
  asChild?: boolean
  dotClassName?: string
  animate?: "normal" | "reverse"
}

const MorphyButton = React.forwardRef<HTMLButtonElement, MorphyButtonProps>(
  ({ className, size = "default", asChild = false, dotClassName, animate = "normal", children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [isHovered, setIsHovered] = React.useState(false)

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Comp
          ref={ref}
          className={cn(
            "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25",
            sizeClasses[size],
            className,
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <motion.span
            className={cn(
              "absolute h-2 w-2 rounded-full bg-primary-foreground",
              animate === "normal" ? "right-4" : "left-4",
              dotClassName,
            )}
            initial={{ opacity: 0 }}
            animate={{
              scale: isHovered ? 15 : 1,
              opacity: isHovered ? 0.2 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </Comp>
      </motion.div>
    )
  },
)
MorphyButton.displayName = "MorphyButton"

export { MorphyButton }
