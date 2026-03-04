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
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-4 py-20" id="faq">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <TextSpotlight
            text="You might want to know"
            textClassName="text-4xl font-bold md:text-5xl"
            spotlightSize={300}
          />
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
