"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Award, Briefcase } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function HomePage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/profiles" className="text-muted-foreground hover:text-foreground transition-colors">
                ดูผู้มีความสามารถ
              </Link>
              <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                สำหรับนายจ้าง
              </Link>
              <Link href="/institutions" className="text-muted-foreground hover:text-foreground transition-colors">
                สำหรับสถาบัน
              </Link>
              {user ? (
                <div className="flex items-center gap-3">
                  {user.type === "job_seeker" && !user.hasProfile && (
                    <Link href="/create-profile">
                      <Button variant="default">
                        สร้างโปรไฟล์
                      </Button>
                    </Link>
                  )}
                  <Link href={user.type === "employer" ? "/employer-dashboard" : "/dashboard"}>
                    <Button variant="outline" size="sm">
                      แดชบอร์ด
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-foreground font-medium">{user.name.split(" ")[0]}</span>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm">
                      เข้าสู่ระบบ
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" variant="default">
                      เริ่มต้นใช้งาน
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">มากกว่าเรซูเม่หน้าเดียว</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              แสดงเรื่องราวมืออาชีพที่สมบูรณ์ของคุณ เก็บประสบการณ์ ทักษะ และข้อมูลประจำตัวโดยไม่มีข้อจำกัด เชื่อมต่อกับนายจ้างที่กำลังมองหาความเชี่ยวชาญเฉพาะของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                user.type === "job_seeker" && !user.hasProfile ? (
                  <Link href="/create-profile">
                    <Button size="lg" variant="default">
                      สร้างโปรไฟล์ของคุณ
                    </Button>
                  </Link>
                ) : (
                  <Link href="/dashboard">
                    <Button size="lg" variant="default">
                      ไปที่แดชบอร์ด
                    </Button>
                  </Link>
                )
              ) : (
                <Link href="/login">
                  <Button size="lg" variant="default">
                    เริ่มต้นใช้งาน
                  </Button>
                </Link>
              )}
              <Link href="/employers">
                <Button variant="outline" size="lg">
                  สำหรับนายจ้าง
                </Button>
              </Link>
              <Link href="/institutions">
                <Button variant="outline" size="lg">
                  สำหรับสถาบัน
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">โปรไฟล์มืออาชีพโดยไม่มีข้อจำกัด</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>ประสบการณ์ที่ครอบคลุม</CardTitle>
                  <CardDescription>
                    เอกสารทุกโปรเจค บทบาท และความสำเร็จด้วยรายละเอียดและบริบทที่ไม่จำกัด
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle>การค้นหาขั้นสูง</CardTitle>
                  <CardDescription>
                    นายจ้างสามารถหาผู้สมัครที่มีทักษะเฉพาะและข้อมูลประจำตัวที่หาได้ยาก
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle>เครือข่ายมืออาชีพ</CardTitle>
                  <CardDescription>
                    เชื่อมต่อกับนายจ้างและแสดงความเชี่ยวชาญของคุณเกินรูปแบบดั้งเดิม
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#B81D24] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#B81D24]" />
            </div>
            <span className="text-xl font-semibold">TalentVault</span>
          </div>
          <p className="text-white/80 mb-6">เชื่อมต่อผู้มีความสามารถพิเศษกับนายจ้างที่มีวิสัยทัศน์ก้าวหน้า</p>
          <div className="flex justify-center gap-6 text-sm text-white/80">
            <Link href="/about" className="hover:text-white transition-colors">
              เกี่ยวกับเรา
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              ความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              เงื่อนไข
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              ติดต่อ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}