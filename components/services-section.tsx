"use client"

import { Card } from "@/components/ui/card"
import { Brain, Search, Workflow, Blocks, Code2, Database } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Implementations",
    description:
      "Custom AI solutions including chatbots, document processing, natural language processing, and content generation tailored to your business needs.",
  },
  {
    icon: Search,
    title: "AI-Powered Knowledge Bases",
    description:
      "Intelligent search and retrieval systems (RAG) that let your AI draw from your own documents and data to deliver accurate, context-aware answers.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks and streamline operations with intelligent automation that connects your tools and processes end-to-end.",
  },
  {
    icon: Blocks,
    title: "Integrations",
    description:
      "Seamlessly connect Zoom, Google Workspace, Merge.dev, N8N, and more to unify your tech stack and keep data flowing.",
  },
  {
    icon: Code2,
    title: "No-Code & Low-Code Development",
    description:
      "Build powerful applications without traditional code. Perfect for rapid prototyping, MVPs, and internal tools.",
  },
  {
    icon: Database,
    title: "Database & Backend",
    description:
      "Expert architecture and optimization with Supabase, Airtable, and other modern data platforms to power your applications.",
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
            AI-powered solutions designed to accelerate your digital transformation
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
            <span className="text-2xl font-normal text-foreground/80">N8N</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-normal text-foreground/80">Claude</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-normal text-foreground/80">LangChain</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">V0</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Supabase</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Airtable</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">React</span>
            <span className="text-2xl">•</span>
            <span className="text-2xl font-light">Noloco</span>
          </div>
        </div>
      </div>
    </section>
  )
}
