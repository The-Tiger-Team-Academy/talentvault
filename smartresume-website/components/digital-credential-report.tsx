"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

const DigitalCredentialReport = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Report Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <img
                src="/2025-digital-credential-ecosystem-report-cover.png"
                alt="2025 Digital Credential Ecosystem Report"
                className="w-full max-w-xs mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full">
                  <span className="text-primary-foreground text-sm font-semibold">NEW RELEASE</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground font-space-grotesk leading-tight">
                  Introducing the 2025 Digital Credential Ecosystem Report
                </h2>
                <p className="text-xl text-primary-foreground/90 font-dm-sans leading-relaxed max-w-2xl">
                  Comprehensive insights into the evolving landscape of digital credentials, featuring industry trends,
                  adoption rates, and future predictions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Report
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">500+</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">2M+</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Credentials Issued</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">95%</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Verification Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalCredentialReport
