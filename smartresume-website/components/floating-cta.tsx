"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = window.innerHeight * 0.5

      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <div className="bg-primary text-primary-foreground rounded-full shadow-2xl p-4 flex items-center space-x-3 max-w-xs">
        <div className="flex-1">
          <div className="text-sm font-semibold">Get Started</div>
        </div>
        <Button size="sm" variant="secondary" className="rounded-full">
          <ArrowRight className="h-4 w-4" />
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default FloatingCTA
