"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 py-2 text-sm">
            <span className="text-muted-foreground">Are you a...</span>
            <Link href="/jobseekers" className="text-foreground hover:text-primary transition-colors">
              Job Seeker
            </Link>
            <Link href="/employers" className="text-foreground hover:text-primary transition-colors">
              Employer
            </Link>
            <Link href="/institutions" className="text-foreground hover:text-primary transition-colors">
              Institution
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary font-space-grotesk">SmartResume</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/product" className="text-foreground hover:text-primary transition-colors">
                Product
              </Link>

              {/* Who We Serve Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("who-we-serve")}
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  Who we serve
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "who-we-serve" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg p-4">
                    <div className="space-y-4">
                      <Link
                        href="/jobseekers"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">👤</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Job seekers</h4>
                          <p className="text-sm text-muted-foreground">
                            Showcase your verified credentials and stand out to employers.
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/employers"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🤝</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Employers</h4>
                          <p className="text-sm text-muted-foreground">
                            Discover and verify talent based on real credentials.
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/institutions"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🏛️</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Institutions</h4>
                          <p className="text-sm text-muted-foreground">
                            Issue verified digital credentials to your learners.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  About
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg p-4">
                    <div className="space-y-4">
                      <Link
                        href="/about"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">ℹ️</div>
                        <div>
                          <h4 className="font-semibold text-foreground">About Us</h4>
                          <p className="text-sm text-muted-foreground">Learn about our mission and vision.</p>
                        </div>
                      </Link>
                      <Link
                        href="/team"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">👥</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Our Team</h4>
                          <p className="text-sm text-muted-foreground">Meet the people behind SmartResume.</p>
                        </div>
                      </Link>
                      <Link
                        href="/ecosystem"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">🔗</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Digital Credential Ecosystem</h4>
                          <p className="text-sm text-muted-foreground">Explore the future of digital credentials.</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center text-foreground hover:text-primary transition-colors"
                >
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === "resources" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg p-4">
                    <div className="space-y-4">
                      <Link
                        href="/blog"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">📝</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Blog</h4>
                          <p className="text-sm text-muted-foreground">Latest insights and industry news.</p>
                        </div>
                      </Link>
                      <Link
                        href="/ecosystem-map"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">📊</div>
                        <div>
                          <h4 className="font-semibold text-foreground">Ecosystem Map</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive industry overview.</p>
                        </div>
                      </Link>
                      <Link
                        href="/faq"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">❓</div>
                        <div>
                          <h4 className="font-semibold text-foreground">FAQ</h4>
                          <p className="text-sm text-muted-foreground">Frequently asked questions.</p>
                        </div>
                      </Link>
                      <Link
                        href="/news"
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">📰</div>
                        <div>
                          <h4 className="font-semibold text-foreground">News & Press</h4>
                          <p className="text-sm text-muted-foreground">Latest company news and press releases.</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="default" size="sm">
                Get Started
              </Button>
              <Button variant="outline" size="sm">
                Login
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <Link href="/product" className="block text-foreground hover:text-primary transition-colors">
                Product
              </Link>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Who we serve</div>
                <Link
                  href="/jobseekers"
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  Job seekers
                </Link>
                <Link
                  href="/employers"
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  Employers
                </Link>
                <Link
                  href="/institutions"
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  Institutions
                </Link>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">About</div>
                <Link href="/about" className="block pl-4 text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/team" className="block pl-4 text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
                <Link
                  href="/ecosystem"
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Credential Ecosystem
                </Link>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-foreground">Resources</div>
                <Link href="/blog" className="block pl-4 text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link
                  href="/ecosystem-map"
                  className="block pl-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  Ecosystem Map
                </Link>
                <Link href="/faq" className="block pl-4 text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
                <Link href="/news" className="block pl-4 text-muted-foreground hover:text-primary transition-colors">
                  News & Press
                </Link>
              </div>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="default" size="sm">
                  Get Started
                </Button>
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
