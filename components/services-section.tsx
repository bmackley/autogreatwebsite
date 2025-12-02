"use client"

import { Card } from "@/components/ui/card"
import { Code2, Zap, Database, Smartphone, Blocks, Workflow } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "No-Code Development",
    description:
      "Build powerful applications without writing traditional code. Perfect for rapid prototyping and MVPs.",
  },
  {
    icon: Zap,
    title: "Low-Code Solutions",
    description: "Combine visual development with custom code for maximum flexibility and performance.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Expert setup and optimization with Supabase, Airtable, and other modern data platforms.",
  },
  {
    icon: Smartphone,
    title: "Custom App Development",
    description: "Tailored applications built with V0, React, and Noloco that perfectly fit your workflow.",
  },
  {
    icon: Blocks,
    title: "System Integration",
    description: "Connect your tools and automate workflows across your entire tech stack.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Eliminate repetitive tasks and streamline operations with intelligent automation.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Our <span className="font-normal">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-normal">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">Technologies we specialize in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-foreground/60">
            <span className="text-2xl font-light">V0</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Supabase</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">React</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Airtable</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Noloco</span>
          </div>
        </div>
      </div>
    </section>
  )
}
