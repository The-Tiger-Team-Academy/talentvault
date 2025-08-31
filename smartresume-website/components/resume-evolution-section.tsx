"use client"

import { useState, useEffect } from "react"

const ResumeEvolutionSection = () => {
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

    const element = document.getElementById("resume-evolution")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="resume-evolution" className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground font-space-grotesk leading-tight">
                Resumes haven't evolved in hundreds of years
              </h2>
              <p className="text-xl text-primary-foreground/90 font-dm-sans leading-relaxed">
                Paper resumes lack the data required in a digital world to empower employers to discover, recruit, and
                hire the talent they need to thrive.
              </p>
              <div className="text-center py-8">
                <h3 className="text-3xl font-bold text-primary-foreground font-space-grotesk">...Until now!</h3>
              </div>
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative">
            <div
              className={`transition-all duration-1500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              {/* Animated Resume Transformation */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Old Resume */}
                <div
                  className={`absolute inset-0 bg-white rounded-lg shadow-2xl p-6 transition-all duration-2000 ${isVisible ? "opacity-30 rotate-12 scale-90" : "opacity-100 rotate-0 scale-100"}`}
                >
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="space-y-2 mt-6">
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>

                {/* New SmartResume */}
                <div
                  className={`relative bg-gradient-to-br from-card to-muted rounded-2xl shadow-2xl p-6 border-2 border-primary/20 transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-12 scale-110"}`}
                >
                  <div className="space-y-6">
                    {/* Header with verification badge */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-4 bg-primary/20 rounded w-32"></div>
                        <div className="h-3 bg-muted-foreground/20 rounded w-24"></div>
                      </div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>

                    {/* Verified sections */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🎓</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-primary/20 rounded w-full"></div>
                          <div className="h-2 bg-muted-foreground/20 rounded w-3/4 mt-1"></div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🏆</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-secondary/20 rounded w-5/6"></div>
                          <div className="h-2 bg-muted-foreground/20 rounded w-2/3 mt-1"></div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">🎯</span>
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-accent/20 rounded w-4/5"></div>
                          <div className="h-2 bg-muted-foreground/20 rounded w-1/2 mt-1"></div>
                        </div>
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                    </div>

                    {/* Blockchain verification indicator */}
                    <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
                      <div className="w-4 h-4 bg-primary rounded-sm"></div>
                      <span className="text-xs text-muted-foreground">Blockchain Verified</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div
                  className={`absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 animate-bounce" : "opacity-0"}`}
                >
                  <span className="text-white text-sm">🔒</span>
                </div>
                <div
                  className={`absolute -bottom-4 -left-4 w-10 h-10 bg-secondary rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 animate-pulse" : "opacity-0"}`}
                >
                  <span className="text-white text-xs">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeEvolutionSection
