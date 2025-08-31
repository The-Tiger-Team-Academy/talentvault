"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users, Award } from "lucide-react"

const FinalCTASection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("final-cta")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="final-cta"
      className="py-20 bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 bg-primary-foreground/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary-foreground/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full">
                <span className="text-primary-foreground text-sm font-semibold">A NEW WAY TO HIRE (OR BE HIRED)</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground font-space-grotesk leading-tight">
                Start using SmartResume today
              </h2>

              <p className="text-xl text-primary-foreground/90 font-dm-sans leading-relaxed">
                Join thousands of professionals and organizations who are already transforming their hiring process with
                verified digital credentials.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">10K+</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">500+</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-foreground font-space-grotesk">99%</div>
                  <div className="text-primary-foreground/80 text-sm font-dm-sans">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 bg-transparent"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-primary-foreground/80 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {/* Scout/Rocket Illustration */}
              <div className="relative w-full max-w-lg mx-auto">
                <img
                  src="/placeholder.svg?height=500&width=400&text=Rocket+Launch"
                  alt="SmartResume Launch"
                  className="w-full h-auto"
                />

                {/* Floating Icons */}
                <div
                  className={`absolute top-16 left-8 w-12 h-12 bg-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 animate-bounce" : "opacity-0"}`}
                >
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div
                  className={`absolute top-32 right-12 w-12 h-12 bg-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 animate-bounce" : "opacity-0"}`}
                >
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div
                  className={`absolute bottom-24 left-16 w-12 h-12 bg-primary-foreground rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 animate-bounce" : "opacity-0"}`}
                >
                  <Rocket className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection
