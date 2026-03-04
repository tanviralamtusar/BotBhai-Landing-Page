"use client"

import { TextSpotlight } from "@/components/ui/text-spotlight"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Link2, Coffee } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect your page",
    description: "Don't worry we will handle this part",
  },
  {
    number: "02",
    icon: Coffee,
    title: "Relax",
    description: "That's it!!",
  },
]

export function HowItWorksSection() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <TextSpotlight
            text="ভাইকে কিভাবে কাজে লাগাবেন?"
            textClassName="text-4xl font-bold md:text-5xl"
            spotlightSize={300}
          />
          <p className="mt-4 text-xl text-muted-foreground">একেবারে সহজ</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <SpotlightCard key={index} className="relative overflow-visible">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg">
                {step.number}
              </div>
              <div className="pt-6">
                <step.icon className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
