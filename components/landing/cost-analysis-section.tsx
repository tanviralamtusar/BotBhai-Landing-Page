"use client"

import { motion } from "framer-motion"
import { Check, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function CostAnalysisSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/20 text-primary bg-primary/10 px-4 py-1.5 rounded-full font-medium">
              Cost Analysis
            </Badge>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-foreground leading-tight">
              খরচ বাঁচান <span className="text-primary">৭০% পর্যন্ত!</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              এক জন মডারেটর রাখতে আপনার খরচ হয় মাসে ১০-১২ হাজার টাকা। আর BotBhai আপনাকে দিচ্ছে একই সার্ভিস মাত্র ৩,০০০ টাকায়। তাও আবার ২৪ ঘণ্টা!
            </p>
            
            <ul className="space-y-5">
              {[
                "ঈদ বোনাস বা ছুটির ঝামেলা নেই",
                "কখনো অসুস্থ হবে না বা ফোন বন্ধ রাখবে না",
                "ইন্টারনেট বিল বা লাঞ্চ খরচ দিতে হবে না"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-foreground/80">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-green-500 stroke-[3]" />
                  </div>
                  <span className="text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Comparison Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-card rounded-[32px] p-8 md:p-12 shadow-2xl border border-border"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-2">Monthly Cost Comparison</h3>
              <p className="text-muted-foreground text-base">Human Moderator vs BotBhai</p>
            </div>

            <div className="flex justify-center items-end gap-8 md:gap-16 h-64 relative mt-8">
              {/* Human Bar */}
              <div className="flex flex-col items-center w-24 md:w-32">
                <div className="text-xl md:text-2xl font-bold text-red-500 mb-2">৳10,000</div>
                <div className="w-full bg-red-500/10 rounded-t-2xl relative overflow-hidden h-[200px]">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 bg-red-500 rounded-t-2xl" 
                  />
                </div>
                <div className="mt-4 text-center">
                  <div className="font-bold text-base text-foreground mb-1">Human</div>
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">(Salary + Bonus)</div>
                </div>
              </div>

              {/* BotBhai Bar */}
              <div className="flex flex-col items-center w-24 md:w-32 relative">
                <motion.div 
                  initial={{ rotate: 0, scale: 0 }}
                  whileInView={{ rotate: 15, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute top-9 -right-8 bg-[#FFC107] text-slate-900 font-bold px-4 py-1 rounded-xl shadow-lg z-20 text-xs whitespace-nowrap"
                >
                  Winner!
                </motion.div>
                <div className="text-xl md:text-2xl font-bold text-green-500 mb-2">৳3,000</div>
                <div className="w-full bg-green-500/10 rounded-t-2xl relative overflow-hidden h-[200px]">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-2xl" 
                  />
                </div>
                <div className="mt-4 text-center flex flex-col items-center">
                  <Image src="/images/logo.png" alt="BotBhai Logo" width={80} height={24} className="h-6 w-auto mb-1" />
                  <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">(24/7 Active)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meta Policy Compliant Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card/50 border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12"
        >
          <div className="flex-shrink-0 relative">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-green-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0b1332] flex items-center justify-center">
              <Check className="w-3 h-3 text-white stroke-[4]" />
            </div>
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-xl font-extrabold text-foreground mb-2">Verified Meta Business & Tech Partner</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-medium">
              আমরা ফেসবুকের অফিশিয়াল API ব্যবহার করি এবং ভেরিফাইড মেটা বিজনেস ও টেক পার্টনার। তাই আপনার পেজ রেস্ট্রিকটেড বা ব্যান হওয়ার কোনো ভয় নেই। নিশ্চিন্তে ব্যবহার করুন।
            </p>
          </div>

          <div className="flex-shrink-0 border border-border rounded-lg px-4 py-2 bg-background/50 backdrop-blur-sm text-muted-foreground text-[10px] font-bold tracking-wide uppercase">
            Verified Business & Tech Partner
          </div>
        </motion.div>
      </div>
    </section>
  )
}
