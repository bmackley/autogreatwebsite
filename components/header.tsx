"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-light tracking-tight">
            AutoGreat <span className="text-accent font-normal">Consultants</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
            className="text-foreground/70 hover:text-foreground transition-colors"
          >
            Testimonials
          </button>
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  )
}
