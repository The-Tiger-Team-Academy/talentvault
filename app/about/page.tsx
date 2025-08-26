"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, Clock, Scale, Users, Target, TrendingUp, CheckCircle, Star, Building2, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              TalentVault
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/getting-started" className="text-muted-foreground hover:text-foreground transition-colors">
                ผลิตภัณฑ์
              </Link>
              <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                กลุ่มลูกค้า
              </Link>
              <Link href="/about" className="text-foreground border-b-2 border-primary pb-1">
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
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Hero Section */}
          <section className="text-center mb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>
            
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-8 px-6 py-3 text-base font-medium bg-primary/10 text-primary border-primary/20">
                เกี่ยวกับเรา
              </Badge>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-8 leading-tight">
                เทคโนโลยีสำหรับอนาคตของความสามารถ
              </h1>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                โดยการนำทุกฝ่ายของตลาดความสามารถมารวมกัน เราจะช่วยลดช่องว่างของความสามารถร่วมกัน
              </p>
            </div>
          </section>

          {/* Our Principles Section */}
          <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white/20 to-transparent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>
            
            <div className="relative max-w-6xl mx-auto text-center z-10">
              <Badge variant="secondary" className="mb-8 px-6 py-3 text-base font-medium bg-white/20 text-white border-white/30 backdrop-blur-sm">
                หลักการของเรา
              </Badge>
              <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                หลักการของเรา
              </h2>
              
              <div className="grid md:grid-cols-3 gap-12">
                {/* First Principle */}
                <div className="text-center group">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20">
                    <Eye className="w-12 h-12 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-white/90 transition-colors duration-300">ความประทับใจแรกสำคัญ</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    ความประทับใจแรกของนายจ้างต่อผู้หางานควรขึ้นอยู่กับคุณสมบัติ ไม่ใช่สิ่งที่พวกเขาดูเหมือน มาจากไหน หรือความสัมพันธ์ทางสังคม
                  </p>
                </div>

                {/* Second Principle */}
                <div className="text-center group">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20">
                    <Clock className="w-12 h-12 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-white/90 transition-colors duration-300">ข้อมูลควรทำให้ชีวิตดีขึ้น</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    มาตรฐานข้อมูลใหม่ เช่น Comprehensive Learner Record มีพลังในการเปลี่ยนแปลงวิธีที่นายจ้างระบุความสามารถ และวิธีที่ผู้คนให้คุณค่าและเข้าใจความสามารถและคุณค่าของตนเอง
                  </p>
                </div>

                {/* Third Principle */}
                <div className="text-center group">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-white/20">
                    <Scale className="w-12 h-12 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6 group-hover:text-white/90 transition-colors duration-300">เรซูเม่ต้องมีความเท่าเทียมมากขึ้น</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    คุณภาพของเรซูเม่ไม่ควรมาจากการเข้าถึงการโค้ชอาชีพ แต่ควรมาจากความลึกซึ้งของความสามารถ ข้อมูลประจำตัวดิจิทัลมีพลังในการปลดล็อกอนาคตที่เท่าเทียมมากขึ้น
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background backdrop-blur-sm" />
            <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>
            
            <div className="relative max-w-6xl mx-auto z-10">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <Badge variant="secondary" className="px-6 py-3 text-base font-medium bg-primary/10 text-primary border-primary/20">
                    ภารกิจของเรา
                  </Badge>
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
                    ปฏิวัติวิธีที่โลกค้นพบความสามารถ
                  </h2>
                  <div className="space-y-6">
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      TalentVault ถูกสร้างขึ้นเพื่อปฏิวัติวิธีที่ผู้คนแสดงความสามารถและเชื่อมต่อกับโอกาสทางอาชีพ เราเชื่อว่าทุกคนสมควรได้รับโอกาสในการแสดงศักยภาพเต็มที่ของตนเอง
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      โดยการนำเทคโนโลยีล่าสุดมาใช้ เราได้สร้างแพลตฟอร์มที่ช่วยให้ผู้หางาน นายจ้าง และสถาบันการศึกษาสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพมากขึ้น
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mx-auto relative shadow-2xl">
                    <div className="absolute inset-0 bg-grid-white/20 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-xl border border-primary/20">
                        <Users className="w-24 h-24 text-primary" />
                      </div>
                    </div>
                    <div className="absolute top-8 left-8 w-24 h-16 bg-white rounded-xl shadow-lg p-3 text-sm border border-primary/10">
                      <div className="font-semibold text-primary text-center">ความสามารถ</div>
                    </div>
                    <div className="absolute bottom-8 right-8 w-28 h-20 bg-white rounded-xl shadow-lg p-3 text-sm border border-primary/10">
                      <div className="font-semibold text-primary text-center">โอกาส</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-32 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card/50 to-card/80 backdrop-blur-sm" />
            <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-5 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>
            
            <div className="relative max-w-6xl mx-auto z-10">
              <div className="text-center mb-20">
                <Badge variant="secondary" className="mb-8 px-6 py-3 text-base font-medium bg-primary/10 text-primary border-primary/20">
                  ค่านิยมหลัก
                </Badge>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
                  ค่านิยมหลัก
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  หลักการที่ชี้นำการทำงานของเราและความสัมพันธ์กับลูกค้า
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card className="relative group border-0 shadow-xl bg-card/95 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="text-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                      <Target className="w-10 h-10 text-primary relative animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">ความมุ่งมั่น</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      เรามุ่งมั่นที่จะสร้างผลกระทบเชิงบวกต่อชีวิตของผู้คนผ่านเทคโนโลยีที่ก้าวหน้า
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative group border-0 shadow-xl bg-card/95 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="text-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-secondary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                      <TrendingUp className="w-10 h-10 text-secondary relative animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-secondary transition-colors duration-300">นวัตกรรม</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      เราไม่หยุดนิ่งในการพัฒนาโซลูชันใหม่ที่ตอบสนองความต้องการที่เปลี่ยนแปลงไป
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="relative group border-0 shadow-xl bg-card/95 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="text-center">
                    <div className="relative w-20 h-20 bg-gradient-to-br from-accent/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                      <CheckCircle className="w-10 h-10 text-accent relative animate-pulse" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">คุณภาพ</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      เรามุ่งมั่นที่จะให้บริการที่มีคุณภาพสูงสุดและประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="absolute -inset-x-40 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
            </div>
            
            <div className="relative max-w-4xl mx-auto z-10">
              <Badge variant="secondary" className="mb-8 px-6 py-3 text-base font-medium bg-primary/10 text-primary border-primary/20">
                เริ่มต้นใช้งาน
              </Badge>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
                พร้อมที่จะเริ่มต้นหรือยัง?
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
                เข้าร่วมกับเราในการปฏิวัติวิธีที่โลกค้นพบและพัฒนาความสามารถ
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/job-seeker-login">
                  <Button size="lg" className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                    เริ่มต้นใช้งาน
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-10 py-6 text-xl border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300" asChild>
                  <Link href="/contact">ติดต่อเรา</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#B81D24] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#B81D24]" />
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
