"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="BotBhai Logo" width={120} height={40} className="h-8 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} BotBhai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
