"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedTextGenerateProps {
  text: string
  className?: string
  textClassName?: string
  blurEffect?: boolean
  speed?: number
  highlightWords?: string[]
  highlightClassName?: string
  linkWords?: string[]
  linkHrefs?: string[]
  linkClassNames?: string[]
}

export function AnimatedTextGenerate({
  text,
  className,
  textClassName,
  blurEffect = true,
  speed = 0.05,
  highlightWords = [],
  highlightClassName = "text-primary",
  linkWords = [],
  linkHrefs = [],
  linkClassNames = [],
}: AnimatedTextGenerateProps) {
  const words = text.split(" ")

  return (
    <div className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word.replace(/[.,!?]/g, ""))
        const linkIndex = linkWords.indexOf(word.replace(/[.,!?]/g, ""))
        const isLink = linkIndex !== -1

        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, filter: blurEffect ? "blur(10px)" : "none" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: i * speed, duration: 0.4 }}
            className={cn(
              "mr-1.5",
              textClassName,
              isHighlight && highlightClassName,
              isLink && linkClassNames[linkIndex],
            )}
          >
            {isLink ? (
              <a href={linkHrefs[linkIndex]} className="underline">
                {word}
              </a>
            ) : (
              word
            )}
          </motion.span>
        )
      })}
    </div>
  )
}
