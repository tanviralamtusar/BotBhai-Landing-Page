"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const logos = [
  { src: "/pathao.webp", alt: "Pathao" },
  { src: "/redx1.png", alt: "REDX" },
  { src: "/steadfast.webp", alt: "Steadfast" },
  { src: "/nagad.webp", alt: "Nagad" },
  { src: "/bkash.webp", alt: "bKash" },
  { src: "/rocket.webp", alt: "Rocket" },
  { src: "/payment-cards.webp", alt: "Payment Cards" },
  { src: "/Woocommerce.png", alt: "Woocommerce" },
]

export function IntegrationSection() {
  return (
    <section className="py-16 bg-background/30 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h4 className="text-center text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-muted-foreground/60">
          Seamless Integrations
        </h4>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex items-center w-max"
          animate={{
            x: ["0%", "-25%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Multiply the logos array to create a truly seamless loop on all screen sizes */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-12 md:px-16">
              <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.alt === "Payment Cards" ? 140 : 120} 
                height={50} 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}



