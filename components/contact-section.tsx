"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to an API
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="px-6 py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight">
            Let's <span className="font-normal">talk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business? Schedule a free consultation and discover what's possible.
          </p>
        </div>
{/* 
        <Card className="p-8 md:p-12 bg-card border-border/50 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-normal">Thank you!</h3>
              <p className="text-muted-foreground">
                We've received your message and will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company *
                </label>
                <Input
                  id="company"
                  name="company"
                  required
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project and what you're looking to achieve..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-32 bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 rounded-full group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}
        </Card> */}
        <div className="flex justify-center">

        <a 
    href="https://calendar.app.google/uX26b81f1vPw6MLV7" 
    target="_blank" 
    rel="noopener noreferrer"
  > <Button
                type="button"
                size="sm"
                className="mx-auto bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 rounded-full group cursor-pointer"
              >
                Schedule a Consultation
                
              </Button>
              </a>
              </div>
      </div>
    </section>
  )
}
