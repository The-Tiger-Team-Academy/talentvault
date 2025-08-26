"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, Handshake, Building2, Users } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
                ผลิตภัณฑ์
              </Link>
              <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                กลุ่มลูกค้า
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                เกี่ยวกับเรา
              </Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                ทรัพยากร
              </Link>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  เข้าสู่ระบบ
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Back Button */}
          <div className="text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Hero Section */}
                      <h1 className="text-4xl font-bold text-foreground mb-6">เริ่มต้นใช้งาน</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            TalentVault เป็นตลาดความสามารถออนไลน์แบบสามฝ่ายแห่งแรกของโลก ที่ให้บริการผู้หางาน นายจ้าง และสถาบันการศึกษา เลือกตัวเลือกด้านล่างเพื่อเริ่มต้นใช้งาน TalentVault วันนี้!
          </p>

          {/* User Type Selection Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Jobseeker Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Jobseeker</CardTitle>
                <CardDescription>
                  ค้นหาและเปิดใช้งาน TalentVault ของคุณวันนี้
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/job-seeker-login">
                  <Button className="w-full" variant="default">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Employer Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Employer</CardTitle>
                <CardDescription>
                  สร้างบัญชีวันนี้หรือนัดหมายการสาธิตกับตัวแทน TalentVault
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/employer-login">
                  <Button className="w-full" variant="default">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Institution Card */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Institution</CardTitle>
                <CardDescription>
                  เรียนรู้ว่า TalentVault สร้างความแตกต่างให้กับนักศึกษาอย่างไร
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/institution-login">
                  <Button className="w-full" variant="default">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>


        </div>
      </main>
    </div>
  )
}
