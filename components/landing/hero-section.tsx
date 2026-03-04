"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BGPattern } from "@/components/ui/bg-pattern"
import { ShineButton } from "@/components/ui/shine-button"

export function HeroSection() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo")
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      className="relative flex min-h-screen flex-col items-center pt-32 pb-0 px-4 text-center overflow-hidden"
    >
      {/* Background Pattern */}
      <BGPattern 
        variant="grid" 
        size={80} 
        fill="rgba(255,255,255,0.05)" 
        mask="fade-bottom" 
        className="opacity-100"
      />

      {/* Badge */}
      <motion.div
        className="mb-8 flex items-center gap-2 rounded-full border border-white/10 bg-[#111]/80 px-2 py-1.5 text-sm backdrop-blur-sm cursor-pointer hover:bg-white/5 transition-colors"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="rounded-full border border-white/10 bg-transparent px-2.5 py-0.5 text-xs font-medium text-white/90">New feature</span>
        <span className="text-white/70 text-sm px-1">Two Integrations</span>
        <ArrowRight className="h-3.5 w-3.5 text-white/70 mr-1" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="mb-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Your #1 AI Sales Agent on{" "}
        <span className="text-[#38bdf8]">Facebook</span>,{" "}
        <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Instagram</span>
        {" "}&{" "}
        <span className="text-[#4ade80]">WhatsApp</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mb-10 max-w-2xl text-lg text-white/60 leading-relaxed"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Let BotBhai talk to your customers, take orders, and close sales; so you can
        finally focus on growing your business.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col gap-4 sm:flex-row mb-20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button 
          variant="outline" 
          size="lg" 
          onClick={scrollToDemo}
          className="gap-2 rounded-lg border-white/10 bg-[#111] text-white hover:bg-white/10 hover:text-white h-12 px-6"
        >
          <Play className="h-4 w-4" />
          Watch Demo
        </Button>
        <ShineButton 
          onClick={scrollToPricing}
          className="h-12 px-8 text-base rounded-lg"
        >
          Book a live demo
        </ShineButton>
      </motion.div>

      {/* Dashboard Image */}
      <motion.div
        className="relative mx-auto w-full max-w-5xl px-4 md:px-8 mt-auto"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {/* Animated Glow behind image */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%] bg-primary/40 rounded-full blur-[120px] -z-10"
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="rounded-t-2xl border border-white/10 border-b-0 bg-[#111]/50 p-2 pb-0 backdrop-blur-sm shadow-2xl">
          <div className="overflow-hidden rounded-t-xl border border-white/10 border-b-0 bg-[#0A0A0A]">
            <Image
              src="/dashboard.png"
              alt="BotBhai Dashboard"
              width={1200}
              height={800}
              className="w-full object-cover object-top"
              priority
            />
          </div>
        </div>
        
        {/* Bottom fade for image */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </motion.div>
    </section>
  )
}
