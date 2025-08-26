"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Award, Briefcase, ArrowRight } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export default function HomePage() {
  const { user } = useAuth()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            <span>คุณเป็น...</span>
            <Link href="/login?type=job_seeker" className="hover:text-primary-foreground/80 transition-colors">
              ผู้หางาน
            </Link>
            <Link href="/login?type=employer" className="hover:text-primary-foreground/80 transition-colors">
              นายจ้าง
            </Link>
            <Link href="/login?type=institution" className="hover:text-primary-foreground/80 transition-colors">
              สถาบันการศึกษา
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
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
                  <Link href="/getting-started">
                    <Button size="sm" variant="default">
                      เริ่มต้นใช้งาน
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline" size="sm">
                      เข้าสู่ระบบ
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
                  สร้างอาชีพด้วยข้อมูลประจำตัวที่ได้รับการยืนยัน
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  โปรแกรมการรับรองคุณวุฒิมีบทบาทสำคัญในการเตรียมกำลังแรงงาน แต่การทำให้ผู้เรียนและผู้เชี่ยวชาญของคุณโดดเด่นในตลาดงานเป็นความท้าทายที่เพิ่มขึ้น TalentVault พร้อมช่วยเหลือ
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/job-seeker-login">
                  <Button size="lg" className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                    เริ่มต้นใช้งาน
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Visual Graphic */}
            <div className="relative">
              <div className="w-[420px] h-[420px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mx-auto relative shadow-2xl">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-grid-white/20 rounded-full" />
                
                {/* Professional figure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-20 h-20 text-primary" />
                  </div>
                </div>

                {/* Credential cards with better positioning and styling */}
                <div className="absolute top-12 left-12 w-28 h-20 bg-white rounded-xl shadow-xl p-3 text-xs border border-primary/10">
                  <div className="font-semibold text-primary text-center">ใบอนุญาต</div>
                </div>
                
                <div className="absolute bottom-12 left-12 w-28 h-20 bg-white rounded-xl shadow-xl p-3 text-xs border border-primary/10">
                  <div className="font-semibold text-primary text-center">การจ้างงาน</div>
                </div>
                
                <div className="absolute bottom-12 right-12 w-40 h-28 bg-white rounded-xl shadow-xl p-3 text-xs border border-primary/10">
                  <div className="font-semibold text-primary mb-1 text-center">การศึกษา</div>
                  <div className="text-muted-foreground text-xs leading-tight">ได้รับเมื่อ: 15/12/2023</div>
                  <div className="text-muted-foreground text-xs leading-tight">วิทยาการคอมพิวเตอร์</div>
                  <div className="text-muted-foreground text-xs leading-tight">(วิทยาศาสตรบัณฑิต)</div>
                </div>

   
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background backdrop-blur-sm" />
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="text-center mb-20">
            
              <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-10 relative z-10">
              <br />
                โปรไฟล์มืออาชีพโดยไม่มีข้อจำกัด
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10">
                สร้างโปรไฟล์ที่โดดเด่นด้วยข้อมูลที่ครบถ้วนและน่าเชื่อถือ
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
                         <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           <CardHeader className="text-center">
                             <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                               <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                               <Award className="w-10 h-10 text-primary relative animate-pulse" />
                             </div>
                             <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">ประสบการณ์ที่ครอบคลุม</CardTitle>
                             <CardDescription className="text-base leading-relaxed">
                               เอกสารทุกโปรเจค บทบาท และความสำเร็จด้วยรายละเอียดและบริบทที่ไม่จำกัด
                             </CardDescription>
                           </CardHeader>
                         </Card>

              <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <Search className="w-10 h-10 text-primary relative animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">การค้นหาขั้นสูง</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    นายจ้างสามารถหาผู้สมัครที่มีทักษะเฉพาะและข้อมูลประจำตัวที่หาได้ยาก
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <Users className="w-10 h-10 text-primary relative animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">เครือข่ายมืออาชีพ</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
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