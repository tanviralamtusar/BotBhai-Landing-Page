"use client"

import { useState } from "react"
import { TextSpotlight } from "@/components/ui/text-spotlight"
import { Check, Star, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const plans = [
  {
    name: "Choto Bhai",
    subtitle: "For small businesses",
    monthlyPrice: "৳3000",
    yearlyPrice: "৳2900",
    period: "mo",
    features: [
      { text: "Auto Message Reply", included: true },
      { text: "5000 Messages", included: true },
      { text: "Comment Reply", included: true },
      { text: "Order Management", included: false },
      { text: "Dashboard Analytics", included: false },
      { text: "Facebook Page only", included: true },
      { text: "Image Recognition", included: false },
      { text: "Voice Recognition", included: false },
      { text: "Instagram & Website", included: false },
      { text: "WhatsApp & Telegram", included: false },
      { text: "No Brand Labeling", included: true },
      { text: "Extra messages can be added", included: true },
    ],
    popular: false,
  },
  {
    name: "Mejho Bhai",
    subtitle: "Growing businesses",
    monthlyPrice: "৳5000",
    yearlyPrice: "৳4850",
    period: "mo",
    features: [
      { text: "Auto Message Reply", included: true },
      { text: "10,000 Messages", included: true },
      { text: "Image Recognition", included: true },
      { text: "Voice Message Recognition", included: true },
      { text: "Comment Reply", included: true },
      { text: "Order Management", included: true },
      { text: "Dashboard Analytics", included: true },
      { text: "Facebook, Instagram and Website", included: true },
      { text: "WhatsApp & Telegram", included: false },
      { text: "No Brand Labeling", included: true },
      { text: "Extra messages can be added", included: true },
    ],
    popular: true,
  },
  {
    name: "Boro Bhai",
    subtitle: "Brands / E-commerce",
    monthlyPrice: "৳8000",
    yearlyPrice: "৳7800",
    period: "mo",
    features: [
      { text: "Auto Message Reply", included: true },
      { text: "20,000 Messages", included: true },
      { text: "Image Recognition", included: true },
      { text: "Voice Message Recognition", included: true },
      { text: "Comment Reply", included: true },
      { text: "Order Management", included: true },
      { text: "Dashboard Analytics", included: true },
      { text: "Facebook, Instagram, WhatsApp, Telegram and Website", included: true },
      { text: "No Brand Labeling", included: true },
      { text: "Extra messages can be added", included: true },
    ],
    popular: false,
  },
  {
    name: "Custom Bhai",
    subtitle: "Make your own plan",
    monthlyPrice: "৳??",
    yearlyPrice: "৳??",
    period: "mo",
    features: [
      { text: "Whatever you desire", included: true },
      { text: "Custom Integrations", included: true },
      { text: "Enterprise SLA", included: true },
    ],
    popular: false,
    isCustom: true,
  },
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <TextSpotlight text="Pricing" textClassName="text-4xl font-bold md:text-5xl" spotlightSize={300} />
          <p className="mt-4 text-xl text-muted-foreground">3 দিনের ফ্রি ট্রায়াল শুরু করুন - কার্ড ব্যবহার ছাড়া</p>
          <p className="mt-2 text-muted-foreground">সেটআপ ও সাপোর্ট একদম ফ্রি।</p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="relative flex p-1 bg-[#0C1331] border border-slate-700/50 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-6 py-2 text-sm font-medium transition-colors rounded-full ${billingCycle === "monthly" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="billing-bg"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`relative px-6 py-2 text-sm font-medium transition-colors rounded-full ${billingCycle === "yearly" ? "text-white" : "text-slate-400 hover:text-slate-200"
                }`}
            >
              {billingCycle === "yearly" && (
                <motion.div
                  layoutId="billing-bg"
                  className="absolute inset-0 bg-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                Yearly
                <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded-full border border-green-500/30">
                  1 Months Free
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative flex flex-col rounded-2xl border p-6 ${plan.popular
                ? "border-primary/50 bg-[#0C1331] ring-1 ring-primary/30 shadow-[0_0_30px_rgba(254,110,88,0.15)]"
                : "border-slate-700/50 bg-[#0C1331]"
                }`}
            >
              {/* Popular Badge - positioned above the card */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, x: "-50%" }}
                  whileInView={{ scale: 1, x: "-50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -top-4 left-1/2"
                >
                  <div className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </div>
                </motion.div>
              )}

              {/* Header - Left Aligned */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.subtitle}</p>
                <div className="mt-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billingCycle}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl font-bold text-primary"
                    >
                      {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-sm text-slate-500"> /{plan.period}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                    )}
                    <span className={`text-sm ${feature.included ? "text-slate-400" : "text-slate-600 line-through decoration-slate-600/50"}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              {plan.popular ? (
                <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
                  Get Started
                </button>
              ) : (
                <button className="w-full rounded-full border-2 border-primary/50 bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/10">
                  {plan.isCustom ? "Contact us" : "Get Started"}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

