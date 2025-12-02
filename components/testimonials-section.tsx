"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow Solutions",
    company: "32 employees",
    content:
      "AutoGreat transformed our operations completely. What would have taken our team 6 months to build traditionally was deployed in just 3 weeks. The no-code solution they created has saved us over $200K in development costs.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director, GrowthLabs",
    company: "47 employees",
    content:
      "Their expertise with Supabase and Airtable integration streamlined our entire workflow. We've automated 60% of our manual processes, and our team couldn't be happier. Professional, responsive, and truly experts in their field.",
    rating: 5,
  },
  {
    name: "Jennifer Rodriguez",
    role: "Founder, NextGen Marketing",
    company: "28 employees",
    content:
      "Working with AutoGreat was a game-changer. They built us a custom client portal that our customers love, and the best part? We can easily maintain and update it ourselves. The ROI has been exceptional.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Trusted by <span className="font-normal">innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how we've helped businesses transform their operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground/90 leading-relaxed text-pretty">"{testimonial.content}"</p>

                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
