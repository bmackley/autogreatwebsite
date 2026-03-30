import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for AutoGreat Consultants
  title: "AutoGreat Consultants | AI Implementations, RAG & Workflow Automation",
  description:
    "Expert AI implementations, RAG architectures, workflow automation, and integrations. We help growing businesses harness AI with N8N, Claude, LangChain, and more.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/Autogreat Logo.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
