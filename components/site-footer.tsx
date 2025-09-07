"use client"

import Link from "next/link"
import { MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
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
                  <div className="text-2xl font-bold text-primary">skillbridge</div>
                </Link>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  เครือข่ายผู้มีความสามารถที่ได้รับการรับรองแห่งแรกของโลก ที่รวมผู้หางาน นายจ้าง และสถาบันที่รับรองเข้าด้วยกัน
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div className="text-sm">
                    <div>524 M.15 Baan Suan Thanaporn</div>
                    <div>The Tiger Team Academy, 30280</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-lg font-semibold">+6681-234-5678</div>
                </div>
              </div>
            </div>

            {/* Product */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ผลิตภัณฑ์</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/getting-started" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    ผลิตภัณฑ์ของเรา
                  </Link>
                </li>
              </ul>
            </div>

            {/* Who We Serve */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ผู้ที่เราให้บริการ</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/job-seeker-login" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    ผู้หางาน
                  </Link>
                </li>
                <li>
                  <Link href="/employer-login" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    นายจ้าง
                  </Link>
                </li>
                <li>
                  <Link href="/institution-login" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    สถาบัน
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">บริษัท</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    เกี่ยวกับเรา
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link href="https://www.facebook.com/thetigerteamacademy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/ttta_2021?igsh=cWd1czZvbzZwZHFk" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://th.linkedin.com/in/the-tiger-team-academy-5ba021300" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.youtube.com/@TheTigerTeamAcademy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
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
            <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} TheTigerTeamFoundationTechnology สงวนลิขสิทธิ์ทั้งหมด</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
