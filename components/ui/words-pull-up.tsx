"use client"

import { motion } from "framer-motion"

interface WordsPullUpProps {
  text: string
  className?: string
  wordClassName?: string
}

export function WordsPullUp({ text, className, wordClassName }: WordsPullUpProps) {
  return (
    <motion.div className={className} style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          style={{ marginRight: "0.4em" }}
          className={wordClassName}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
