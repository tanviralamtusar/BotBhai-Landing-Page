"use client"

import { TextSpotlight } from "@/components/ui/text-spotlight"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "BotBhai বাংলা বলতে পারে?",
    answer: "পারে ভাই, একদম খাঁটি ঢাকাই টোনেও পারে 😎",
  },
  {
    question: "একাধিক পেজ কানেক্ট করা যায়?",
    answer: "হ্যাঁ, Custom Bhai প্যাকেজে পারবেন।",
  },
  {
    question: "ট্রায়াল আসলে ফ্রি?",
    answer: "একদম, কোনো লুকানো চার্জ নেই।",
  },
  {
    question: "আমার পেইজ কি ব্যান হবে?",
    answer: "না, একদমই না। আমরা মেটা (Facebook) ভেরিফাইড অফিসিয়াল এপিআই ব্যবহার করি। এটি ১০০% সেইফ এবং ফেসবুকের পলিসি মেনে চলে।",
  },
  {
    question: "সেটআপ করতে কতক্ষণ লাগে?",
    answer: "মাত্র ২ মিনিট! জাস্ট 'Login with Facebook' এ ক্লিক করবেন, আর আপনার পেইজ সিলেক্ট করবেন। বাকি সব কাজ আমাদের সিস্টেম করে নিবে।",
  },
  {
    question: "বট কি ভুল রিপ্লাই দেয়?",
    answer: "বট নিজে থেকে কিছু বানায় না। আপনার প্রোডাক্টের দাম এবং ইনফরমেশন যা দিবেন, সেটাই বলবে। আর কোন উত্তর না জানলে সে আপনাকে নোটিফিকেশন দিবে।",
  },
  {
    question: "পেমেন্ট মেথড কি কি আছে?",
    answer: "বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার সব চলে।",
  },
  {
    question: "কাস্টম ফিচার রিকোয়েস্ট করা যাবে?",
    answer: "অবশ্যই! Custom Bhai প্যাকেজে আপনার যা দরকার সব বানিয়ে দেওয়া হবে।",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold md:text-5xl font-bengali">
            সচরাচর <span className="text-primary">জিজ্ঞাসিত প্রশ্ন</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SpotlightCard
              key={index}
              className="cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground font-bengali">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-primary transition-transform duration-300",
                    openIndex === index && "rotate-180",
                  )}
                />
              </div>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  openIndex === index ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground font-bengali">{faq.answer}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
