"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface BorderGlideProps extends React.HTMLAttributes<HTMLDivElement> {
  borderDuration?: number
  borderColor?: string
  borderWidth?: string
  borderHeight?: string
  borderOpacity?: number
}

const BorderGlide = React.forwardRef<HTMLDivElement, BorderGlideProps>(
  (
    {
      className,
      borderDuration = 3000,
      borderColor = "#FE6E58",
      borderWidth = "6rem",
      borderHeight = "6rem",
      borderOpacity = 0.8,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn("group relative overflow-hidden rounded-xl bg-card p-[1px]", className)} {...props}>
        <div
          className="absolute -inset-[100%] animate-spin"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${borderColor}, transparent)`,
            animationDuration: `${borderDuration}ms`,
            opacity: borderOpacity,
          }}
        />
        <div className="relative rounded-xl bg-card">{children}</div>
      </div>
    )
  },
)
BorderGlide.displayName = "BorderGlide"

const BorderGlideCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />,
)
BorderGlideCard.displayName = "BorderGlideCard"

const BorderGlideHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props} />,
)
BorderGlideHeader.displayName = "BorderGlideHeader"

const BorderGlideTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
)
BorderGlideTitle.displayName = "BorderGlideTitle"

const BorderGlideDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
)
BorderGlideDescription.displayName = "BorderGlideDescription"

const BorderGlideContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pt-4", className)} {...props} />,
)
BorderGlideContent.displayName = "BorderGlideContent"

const BorderGlideFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />,
)
BorderGlideFooter.displayName = "BorderGlideFooter"

export {
  BorderGlide,
  BorderGlideCard,
  BorderGlideHeader,
  BorderGlideTitle,
  BorderGlideDescription,
  BorderGlideContent,
  BorderGlideFooter,
}
