"use client"

import { useEffect, useState } from "react"

const PartnerLogosSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Employer Partners
  const employerPartners = [
    { name: "Walmart", logo: "/placeholder.svg?height=60&width=120&text=Walmart" },
    { name: "Stephens", logo: "/placeholder.svg?height=60&width=120&text=Stephens" },
    { name: "Lennox", logo: "/placeholder.svg?height=60&width=120&text=Lennox" },
    { name: "L'Oreal", logo: "/placeholder.svg?height=60&width=120&text=L'Oreal" },
    { name: "Bank OZK", logo: "/placeholder.svg?height=60&width=120&text=Bank+OZK" },
  ]

  // Media Partners
  const mediaPartners = [
    { name: "University Business", logo: "/placeholder.svg?height=50&width=140&text=University+Business" },
    { name: "MIT Sloan", logo: "/placeholder.svg?height=50&width=120&text=MIT+Sloan" },
    { name: "The Job", logo: "/placeholder.svg?height=50&width=130&text=The+Job" },
    { name: "WSJ", logo: "/placeholder.svg?height=50&width=80&text=WSJ" },
    { name: "Arkansas Trucking", logo: "/placeholder.svg?height=50&width=110&text=Arkansas+Trucking" },
  ]

  // Institution Partners
  const institutionPartners = [
    { name: "Accelerate", logo: "/placeholder.svg?height=50&width=120&text=Accelerate" },
    { name: "ASU", logo: "/placeholder.svg?height=50&width=100&text=ASU" },
    { name: "BCSI", logo: "/placeholder.svg?height=50&width=110&text=BCSI" },
    { name: "Bristol", logo: "/placeholder.svg?height=50&width=120&text=Bristol" },
    { name: "CAEL", logo: "/placeholder.svg?height=50&width=100&text=CAEL" },
    { name: "IBM", logo: "/placeholder.svg?height=50&width=90&text=IBM" },
    { name: "Junior Achievement", logo: "/placeholder.svg?height=50&width=140&text=Junior+Achievement" },
    { name: "SHRM", logo: "/placeholder.svg?height=50&width=100&text=SHRM" },
    { name: "TBR", logo: "/placeholder.svg?height=50&width=90&text=TBR" },
    { name: "University of Arkansas", logo: "/placeholder.svg?height=50&width=130&text=University+of+Arkansas" },
    { name: "WGU", logo: "/placeholder.svg?height=50&width=90&text=WGU" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Employer Partners */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground font-space-grotesk mb-2">Our Employer Partners</h2>
            <p className="text-muted-foreground font-dm-sans">Trusted by leading organizations worldwide</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {employerPartners.map((partner, index) => (
              <div
                key={partner.name}
                className={`transition-all duration-500 hover:scale-110 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground font-space-grotesk mb-2">As seen in...</h2>
            <p className="text-muted-foreground font-dm-sans">Featured in leading industry publications</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {mediaPartners.map((partner, index) => (
              <div
                key={partner.name}
                className={`transition-all duration-500 hover:scale-110 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Institution Partners - Scrolling Banner */}
        <div
          className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-foreground font-space-grotesk mb-2">Our Partners</h2>
            <p className="text-muted-foreground font-dm-sans">
              Collaborating with educational institutions and organizations
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>

            {/* Scrolling container */}
            <div className="flex animate-scroll-left">
              {/* First set */}
              <div className="flex items-center space-x-12 min-w-max">
                {institutionPartners.map((partner) => (
                  <div key={`first-${partner.name}`} className="flex-shrink-0">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-12 min-w-max ml-12">
                {institutionPartners.map((partner) => (
                  <div key={`second-${partner.name}`} className="flex-shrink-0">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-20 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground font-space-grotesk mb-2">Certified & Trusted</h3>
              <p className="text-muted-foreground font-dm-sans">
                Meeting the highest standards for data privacy and security
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">1EdTech</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">1EdTech Certified</div>
                  <div className="text-muted-foreground text-xs">Standards Compliance</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-bold text-xs">TRUST</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">TrustEd Apps</div>
                  <div className="text-muted-foreground text-xs">Data Privacy Certified</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">PLEDGE</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Pledge Endorsed</div>
                  <div className="text-muted-foreground text-xs">Privacy Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerLogosSection
