"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

const HeroSection = () => {
  const [currentHero, setCurrentHero] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Hero variations with different animated elements
  const heroVariations = [
    {
      id: 1,
      badges: [
        { type: "skills", position: "top-20 left-10", delay: "delay-300" },
        { type: "projects", position: "top-32 right-16", delay: "delay-500" },
        { type: "complete", position: "bottom-24 left-20", delay: "delay-700" },
      ],
      elements: [
        { type: "experience", position: "top-40 right-8", delay: "delay-900" },
        { type: "degrees", position: "bottom-16 right-12", delay: "delay-1100" },
      ],
    },
    {
      id: 2,
      badges: [
        { type: "degrees", position: "top-16 left-8", delay: "delay-300" },
        { type: "honor", position: "top-28 right-20", delay: "delay-500" },
        { type: "complete", position: "bottom-20 left-16", delay: "delay-700" },
      ],
      elements: [{ type: "skills", position: "top-36 right-4", delay: "delay-900" }],
    },
    {
      id: 3,
      badges: [
        { type: "complete", position: "top-24 left-12", delay: "delay-300" },
        { type: "degrees", position: "top-20 right-24", delay: "delay-500" },
        { type: "skills", position: "bottom-28 left-8", delay: "delay-700" },
      ],
      elements: [{ type: "skills-panel", position: "bottom-12 right-8", delay: "delay-900" }],
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    // Randomly select a hero variation
    setCurrentHero(Math.floor(Math.random() * heroVariations.length))
  }, [])

  const currentVariation = heroVariations[currentHero]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground font-space-grotesk leading-tight text-balance">
                Empowering Careers with <span className="text-primary">Verified Credentials</span>
              </h1>
              <p className="text-xl text-muted-foreground font-dm-sans leading-relaxed max-w-2xl">
                Credentialing programs play a pivotal role in preparing the workforce, but ensuring your learners and
                professionals stand out in the job market is a growing challenge. SmartResume is here to help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                See how it works
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Get started
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Base Resume/Profile Image */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <div className="w-full h-full bg-card border border-border rounded-2xl shadow-2xl p-8 flex flex-col">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-24"></div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-6 flex-1">
                  <div>
                    <div className="h-3 bg-muted rounded w-20 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-4/5"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>

                  <div>
                    <div className="h-3 bg-muted rounded w-24 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-5/6"></div>
                    </div>
                  </div>

                  <div>
                    <div className="h-3 bg-muted rounded w-16 mb-3"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-2 bg-muted rounded"></div>
                      <div className="h-2 bg-muted rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Badges and Elements */}
            {currentVariation.badges.map((badge, index) => (
              <div
                key={`badge-${index}`}
                className={`absolute w-12 h-12 bg-primary rounded-full shadow-lg animate-bounce ${badge.position} ${badge.delay} ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                style={{ animationDuration: "3s", animationDelay: `${index * 0.5}s` }}
              >
                <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                  {badge.type === "skills" && "🎯"}
                  {badge.type === "projects" && "📁"}
                  {badge.type === "complete" && "✓"}
                  {badge.type === "degrees" && "🎓"}
                  {badge.type === "honor" && "🏆"}
                </div>
              </div>
            ))}

            {currentVariation.elements.map((element, index) => (
              <div
                key={`element-${index}`}
                className={`absolute bg-card border border-border rounded-lg shadow-lg p-3 ${element.position} ${element.delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000`}
              >
                {element.type === "experience" && (
                  <div className="w-32">
                    <div className="text-xs font-semibold text-foreground mb-1">Experience</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                )}
                {element.type === "degrees" && (
                  <div className="w-36">
                    <div className="text-xs font-semibold text-foreground mb-1">Education</div>
                    <div className="space-y-1">
                      <div className="h-2 bg-muted rounded w-full"></div>
                      <div className="h-2 bg-muted rounded w-4/5"></div>
                    </div>
                  </div>
                )}
                {element.type === "skills" && (
                  <div className="w-28">
                    <div className="text-xs font-semibold text-foreground mb-1">Skills</div>
                    <div className="flex flex-wrap gap-1">
                      <div className="h-2 bg-primary rounded w-8"></div>
                      <div className="h-2 bg-secondary rounded w-6"></div>
                      <div className="h-2 bg-accent rounded w-10"></div>
                    </div>
                  </div>
                )}
                {element.type === "skills-panel" && (
                  <div className="w-40">
                    <div className="text-xs font-semibold text-foreground mb-2">Verified Skills</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-primary/10 border border-primary/20 rounded flex items-center justify-center">
                        <span className="text-xs text-primary">React</span>
                      </div>
                      <div className="h-6 bg-secondary/10 border border-secondary/20 rounded flex items-center justify-center">
                        <span className="text-xs text-secondary">Python</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Floating Verification Checkmarks */}
            <div
              className={`absolute top-8 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 delay-1500`}
            >
              <span className="text-white text-sm">✓</span>
            </div>
            <div
              className={`absolute bottom-8 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 delay-1700`}
            >
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
