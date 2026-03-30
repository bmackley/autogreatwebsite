"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const caseStudies = [
  {
    type: "Career Development Platform",
    name: "Serable",
    description:
      "A career advancement platform combining educational courses, job placement services, and professional coaching to help professionals land roles at high-growth companies.",
    features: [
      "Step-by-step career courses",
      "Job placement at top startups",
      "One-on-one professional coaching",
      "Resume & interview preparation",
    ],
    partners: ["Stripe", "Snap", "T-Mobile", "Zoom"],
    url: "https://serable.com",
  },
  {
    type: "AI Sales Platform",
    name: "ServeSwift",
    description:
      "An AI-powered sales platform that streamlines the entire deal cycle — from first call to signed contract — by combining CRM, AI proposals, contract management, and a client portal in one place.",
    features: [
      "AI proposals from call transcripts",
      "Reusable contract templates",
      "Magic-link client portal",
      "Unified CRM & activity tracking",
    ],
    integrations: ["Gmail", "Outlook", "Dropbox Sign", "DocuSign", "Zoom"],
    url: "https://serveswift.ai",
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Our <span className="font-normal">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Products and platforms we've helped bring to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 group"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-medium text-accent">{study.type}</span>
                  <h3 className="text-3xl font-normal mt-1">{study.name}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{study.description}</p>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Key Features</h4>
                  <ul className="space-y-2">
                    {study.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1.5 text-xs">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {"partners" in study && (
                  <div className="flex flex-wrap gap-2">
                    {study.partners.map((partner, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                )}

                {"integrations" in study && (
                  <div className="flex flex-wrap gap-2">
                    {study.integrations.map((integration, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {integration}
                      </span>
                    ))}
                  </div>
                )}

                <a href={study.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full mt-2 group/btn"
                  >
                    Visit {study.name}
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
