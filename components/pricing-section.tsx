"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const tiers = [
  {
    label: "Hourly",
    price: "$185",
    unit: "/hr",
    description:
      "Perfect for focused projects, prototyping, or when you need expert help on a specific challenge. Pay only for the time you need.",
  },
  {
    label: "Monthly Retainer",
    price: "$5k",
    unit: "/month",
    description:
      "Ongoing partnership for businesses that need consistent AI and automation support. Priority access, dedicated hours, and strategic guidance.",
  },
]

export function PricingSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="px-6 py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Simple <span className="font-normal">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing that scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 group"
            >
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-accent">{tier.label}</h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">Starting at</span>
                </div>
                <div className="flex items-baseline gap-1 -mt-4">
                  <span className="text-5xl font-light">{tier.price}</span>
                  <span className="text-xl text-muted-foreground">{tier.unit}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{tier.description}</p>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full group/btn"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
