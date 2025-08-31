"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Handshake, Building2, Users } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          

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
      <SiteFooter />
    </div>
  )
}
