"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Send, Calendar } from "lucide-react"
import { toast } from "sonner"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: "AutoGreat Website",
          subject: `New inquiry from ${formData.name} at ${formData.company}`,
          ...formData,
        }),
      })

      const result = await response.json()
      if (!result.success) throw new Error()

      setSubmitted(true)
      toast.success("Message sent! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", company: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
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
            Ready to transform your business? Get in touch and discover what's possible.
          </p>
        </div>

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
                disabled={loading}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 rounded-full group"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          )}
        </Card>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-3">Prefer to schedule directly?</p>
          <a
            href="https://calendar.app.google/uX26b81f1vPw6MLV7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="rounded-full group">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
