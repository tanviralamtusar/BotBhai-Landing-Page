"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { FloatingTabs } from "@/components/ui/floating-tabs"
import { ShineButton } from "@/components/ui/shine-button"
import { cn } from "@/lib/utils"

const navTabs = [
  { label: "Home", id: "home" },
  { label: "Demo", id: "demo" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navTabs.forEach((tab) => {
      const element = document.getElementById(tab.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveTab("home")
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveTab(id)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="BotBhai Logo" width={120} height={40} className="h-8 w-auto" />
        </div>

        <div className="hidden md:block">
          <FloatingTabs tabs={navTabs} activeTabId={activeTab} onTabClick={scrollToSection} />
        </div>

        <div className="hidden md:block">
          <ShineButton onClick={() => scrollToSection("demo")}>Start Free</ShineButton>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Menu - also removed border-t */}
      {isMobileMenuOpen && (
        <div className="bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={cn(
                  "text-left transition-colors hover:text-primary",
                  activeTab === tab.id ? "text-primary font-semibold" : "text-muted-foreground",
                )}
              >
                {tab.label}
              </button>
            ))}
            <ShineButton className="mt-2 w-full" onClick={() => scrollToSection("demo")}>
              Start Free Trial
            </ShineButton>
          </div>
        </div>
      )}
    </nav>
  )
}
