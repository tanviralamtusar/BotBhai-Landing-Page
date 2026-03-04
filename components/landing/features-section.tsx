"use client"

import { motion } from "framer-motion"
import { TextSpotlight } from "@/components/ui/text-spotlight"
import { Zap, MessageSquare, Clock, Brain, ImageIcon, Mic, MessageCircle, ShoppingCart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "তৎক্ষণাৎ রিপ্লাই",
    description: "কাস্টমার মেসেজ বা কমেন্ট করলেই সাথে সাথে উত্তর পায়।",
  },
  {
    icon: MessageSquare,
    title: "আপনার ব্র্যান্ডের মতো কথা বলে",
    description: "আপনার ভাষা, টোন আর মুড শিখে ফেলে — মজার, ভদ্র বা স্মার্ট যেটাই চান।",
  },
  {
    icon: Clock,
    title: "24 ঘণ্টা বিক্রি চালু রাখে",
    description: "রাতে ঘুমের মধ্যে কাস্টমার এলে, BotBhai ডিল ক্লোজ করে দেয়।",
  },
  {
    icon: Brain,
    title: "ভাই এর চেয়ে স্মার্ট কেউ নাই",
    description: "কারণ ভাই শুধু রিপ্লাই দেয় না, বিক্রিও বাড়ায়।",
  },
  {
    icon: ImageIcon,
    title: "Accurate Image Recognition",
    description: "Product images সনাক্ত করে সঠিক তথ্য দেয়।",
  },
  {
    icon: Mic,
    title: "Advance Voice Recognition",
    description: "আপনার গ্রাহকদের ভয়েস মেসেজ তাৎক্ষণিক বুঝে।",
  },
  {
    icon: MessageCircle,
    title: "Comment Reply",
    description: "গ্রাহকদের সাথে যুক্ত থাকুন, কোনো লিড মিস হবে না।",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    description: "অর্ডার ট্র্যাক, আপডেট ও ম্যানেজ করে।",
  },
]

export function FeaturesSection() {
  return (
    <section className="px-4 py-20" id="features">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextSpotlight
            text="ভাই এর চেয়ে স্মার্ট কেউ নাই"
            textClassName="text-4xl font-bold md:text-5xl font-bengali"
            spotlightSize={300}
          />
          <p className="mt-4 text-xl text-muted-foreground font-bengali">কারণ ভাই শুধু রিপ্লাই দেয় না, বিক্রিও বাড়ায়</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <feature.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground font-bengali">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-bengali">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
