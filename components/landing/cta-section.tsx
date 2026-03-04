"use client"

import { Phone, MapPin, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="px-4 py-20" id="contact">
      <div className="mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-slate-700/50 bg-[#0C1331] p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center relative z-10">
            {/* Left Side */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-white md:text-4xl tracking-tight">
                  যোগাযোগ করুন
                </h2>
                <p className="max-w-md text-base text-slate-400 leading-relaxed">
                  আপনার বিজনেসের জন্য সঠিক এআই সলিউশনটি খুঁজে পেতে আমাদের সাথে আজই কথা বলুন।
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">সরাসরি কল করুন</p>
                    <p className="text-xl font-bold text-white">+8801995909243</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">অফিস ঠিকানা</p>
                    <p className="text-sm font-medium text-slate-300 leading-snug">
                      Mirpur-13, Dhaka-1216, Bangladesh
                    </p>
                  </div>
                  
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-slate-300 leading-snug">
                      info@botbhai.net
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl bg-[#0A0F24] p-6 md:p-8 border border-slate-800 shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">নাম</label>
                    <Input
                      placeholder="আপনার নাম"
                      className="h-11 rounded-xl border-slate-800 bg-slate-900/50 px-4 text-sm text-white placeholder:text-slate-600 focus:bg-slate-900 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">ফোন নম্বর</label>
                    <Input
                      placeholder="০১৯XXXXXXXX"
                      className="h-11 rounded-xl border-slate-800 bg-slate-900/50 px-4 text-sm text-white placeholder:text-slate-600 focus:bg-slate-900 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <Button className="h-12 w-full rounded-xl bg-primary text-base font-bold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    সাবমিট করুন
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
