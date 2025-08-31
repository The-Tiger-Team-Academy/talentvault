"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo and Contact */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href="/" className="flex items-center">
                  <div className="text-2xl font-bold text-primary font-space-grotesk">SmartResume</div>
                </Link>
                <p className="mt-4 text-muted-foreground font-dm-sans leading-relaxed">
                  The world's first certified talent network bringing together job seekers, employers, and certifying
                  institutions.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <div>417 Main Street</div>
                    <div>Little Rock, AR 72201</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-lg font-semibold">(855) IDATAFY</div>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/product" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Our Product
                  </Link>
                </li>
              </ul>
            </div>

            {/* Who We Serve */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Who We Serve</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/jobseekers"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Job seekers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Employers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/institutions"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Institutions
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">About Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ecosystem"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Digital Credential Ecosystem
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Legal */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      News and Press
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accessibility"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Web Accessibility Statement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/diversity"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      Diversity Statement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link
                href="https://facebook.com/smartresumehq"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com/smartresumeco"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://twitter.com/SmartResumeco"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/smartresumeco"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://youtube.com/@smartresumeco"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>

            {/* Certification Badges */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">1Ed</span>
                </div>
                <span className="text-xs text-muted-foreground">1EdTech Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-secondary/10 rounded flex items-center justify-center">
                  <span className="text-secondary font-bold text-xs">T</span>
                </div>
                <span className="text-xs text-muted-foreground">TrustEd Apps</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">P</span>
                </div>
                <span className="text-xs text-muted-foreground">Pledge Endorsed</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground">© {currentYear} IDATAFY. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
