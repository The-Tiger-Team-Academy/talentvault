"use client"

import { useState, useEffect } from "react"

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("solution-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution-section" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-space-grotesk mb-6">
            Unlocking the power of digital credentials
          </h2>
          <p className="text-xl text-muted-foreground font-dm-sans max-w-4xl mx-auto leading-relaxed">
            SmartResume places digitally verifiable credentials into the hands of the job seeker, empowering them to
            provide trusted data to employers about their skills, capabilities and credentials in a certified talent
            marketplace.
          </p>
        </div>

        {/* Wave Separator */}
        <div className="relative mb-16">
          <svg className="w-full h-16 text-primary/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
