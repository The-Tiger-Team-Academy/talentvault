"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Star, Users, CheckCircle, Eye, Sparkles } from "lucide-react"

interface Slide {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  image: string
  features: string[]
}

const ContentSlidesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides: Slide[] = [
    {
      id: 1,
      title: "Trustworthy Credentials",
      description:
        "With SmartResume, institutions can stand behind individuals. Via blockchain certified digital credentials job seekers can carry their degrees, certifications and other credentials with them for life. These credentials protect institutions from falsified records that can harm their reputation, and allow employers to verify important records in real time.",
      icon: <Shield className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Trustworthy+Credentials",
      features: ["Blockchain Verification", "Real-time Validation", "Lifetime Portability", "Institution Protection"],
    },
    {
      id: 2,
      title: "We make it easy to stand out",
      description:
        "Every SmartResume starts with high quality resume content provided by institutions. We take care of the formatting, walk you through creating a comprehensive resume, and provide a machine readable format so SmartResumes can be used anywhere one looks for work. SmartResumes can be updated by institutions over time to keep academic and professional records fresh. And they look amazing.",
      icon: <Star className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Stand+Out+Resume",
      features: ["Professional Formatting", "Machine Readable", "Auto Updates", "Beautiful Design"],
    },
    {
      id: 3,
      title: "Discover Hidden Talent",
      description:
        "Job seekers and employers are protected from hiring bias in the certified talent marketplace. SmartResumes are anonymized so they can be evaluated by employers without any information on a job seeker's appearance, race, gender or ethnicity.",
      icon: <Eye className="h-8 w-8" />,
      image: "/placeholder.svg?height=400&width=600&text=Discover+Talent",
      features: ["Bias-Free Hiring", "Anonymous Evaluation", "Skill-Based Matching", "Fair Assessment"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("content-slides")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isVisible, slides.length])

  const currentSlide = slides[activeSlide]

  return (
    <section id="content-slides" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  {currentSlide.icon}
                </div>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeSlide ? "bg-primary scale-125" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-space-grotesk leading-tight">
                {currentSlide.title}
              </h2>

              <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed">{currentSlide.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {currentSlide.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={`flex items-center space-x-3 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground font-dm-sans">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="group">
                Get Started
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              {/* Main Image */}
              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src={currentSlide.image || "/placeholder.svg"}
                  alt={currentSlide.title}
                  className="w-full h-96 object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold font-space-grotesk mb-2">{currentSlide.title}</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-sm opacity-90">Live Demo Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {activeSlide === 0 && (
                <>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </>
              )}

              {activeSlide === 1 && (
                <>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center animate-pulse">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </>
              )}

              {activeSlide === 2 && (
                <>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full shadow-lg flex items-center justify-center animate-bounce">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center animate-pulse">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentSlidesSection
