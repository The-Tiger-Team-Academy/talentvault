"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Users, Target, TrendingUp, CheckCircle, Star } from "lucide-react"
import Link from "next/link"

export default function EmployersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              TalentVault
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                เข้าสู่ระบบ
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                <Link href="/signup">เริ่มต้นใช้งาน</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-muted text-muted-foreground">
              สำหรับนายจ้างที่มีวิสัยทัศน์ก้าวหน้า
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
              ค้นพบผู้มีความสามารถใน{" "}
              <span className="text-primary relative">
                วิธีใหม่ทั้งหมด
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              ค้นหาผู้สมัครที่โดดเด่นตามทักษะ ความสามารถ และข้อมูลประจำตัว แทนที่จะเป็นความสัมพันธ์ทางสังคม รูปโปรไฟล์ หรือการสมัครงานที่ยุ่งยาก
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                <Link href="/profiles">
                  เริ่มค้นหาผู้มีความสามารถ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent border-input hover:bg-muted" asChild>
                <Link href="/employer-dashboard">ดูแดชบอร์ดตัวอย่าง</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">ทำไมบริษัทชั้นนำเลือกแพลตฟอร์มของเรา</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ก้าวข้ามข้อจำกัดการจ้างงานแบบดั้งเดิมและค้นพบศักยภาพเต็มที่ของการจ้างงานครั้งต่อไปของคุณ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">การค้นหาตามทักษะเป็นหลัก</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ค้นหาตามทักษะทางเทคนิคเฉพาะ ใบรับรอง และความสามารถ หาผู้สมัครที่สามารถทำงานได้จริง ไม่ใช่แค่พูดถึงมัน
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">โปรไฟล์ผู้มีความสามารถเชิงลึก</h3>
                <p className="text-muted-foreground leading-relaxed">
                  เข้าถึงโปรไฟล์ที่ครอบคลุมที่มากกว่าเรซูเม่หน้าเดียว ดูเรื่องราวเต็มของประสบการณ์และความสำเร็จของแต่ละผู้สมัคร
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">การจับคู่ที่แม่นยำ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ตัวกรองขั้นสูงตามระดับประสบการณ์ อุตสาหกรรม สถานที่ และคุณสมบัติเฉพาะเพื่อหาคู่ที่สมบูรณ์แบบของคุณ
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">ข้อมูลเชิงลึกตลาด</h3>
                <p className="text-muted-foreground leading-relaxed">
                  เข้าใจความพร้อมของผู้มีความสามารถ แนวโน้มเงินเดือน และความต้องการทักษะในอุตสาหกรรมของคุณด้วยการวิเคราะห์ที่ครอบคลุม
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">ข้อมูลประจำตัวที่ยืนยันแล้ว</h3>
                <p className="text-muted-foreground leading-relaxed">
                  เข้าถึงใบรับรอง การศึกษา และประวัติการทำงานที่ยืนยันแล้ว จ้างงานด้วยความมั่นใจโดยรู้ว่าข้อมูลประจำตัวเป็นของแท้
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">คุณภาพมากกว่าปริมาณ</h3>
                <p className="text-muted-foreground leading-relaxed">
                  เชื่อมต่อกับผู้เชี่ยวชาญที่ผ่านการคัดเลือกล่วงหน้าที่จริงจังกับอาชีพของพวกเขา ไม่ใช่แค่ดูกระดานงาน
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">เชื่อถือโดยผู้นำในอุตสาหกรรม</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              เข้าร่วมกับบริษัทหลายพันแห่งที่เปลี่ยนแปลงกระบวนการจ้างงานของพวกเขา
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">ผู้เชี่ยวชาญที่ยืนยันแล้ว</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">2.5K+</div>
              <div className="text-muted-foreground">บริษัทที่กำลังจ้างงาน</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">อัตราความสำเร็จในการจับคู่</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">60%</div>
              <div className="text-muted-foreground">การจ้างงานที่เร็วขึ้น</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">พร้อมที่จะค้นพบผู้มีความสามารถพิเศษ?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            เริ่มหาผู้สมัครที่ตรงกับความต้องการที่แท้จริงของคุณวันนี้ ไม่ต้องคัดแยกใบสมัครที่ไม่เกี่ยวข้องอีกต่อไป
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-card text-primary hover:bg-muted" asChild>
              <Link href="/signup">
                เริ่มทดลองใช้ฟรี
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg border-primary-foreground text-primary-foreground hover:bg-card hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/profiles">ดูผู้มีความสามารถตอนนี้</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-primary-foreground mb-4">TalentVault</div>
              <p className="text-sm leading-relaxed">
                ปฏิวัติวิธีที่นายจ้างค้นพบและเชื่อมต่อกับผู้มีความสามารถพิเศษ
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">สำหรับนายจ้าง</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/profiles" className="hover:text-primary-foreground transition-colors">
                    ดูผู้มีความสามารถ
                  </Link>
                </li>
                <li>
                  <Link href="/employer-dashboard" className="hover:text-primary-foreground transition-colors">
                    แดชบอร์ด
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-primary-foreground transition-colors">
                    เริ่มต้นใช้งาน
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">สำหรับผู้หางาน</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/create-profile" className="hover:text-primary-foreground transition-colors">
                    สร้างโปรไฟล์
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-primary-foreground transition-colors">
                    แดชบอร์ด
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="hover:text-primary-foreground transition-colors">
                    เข้าร่วมตอนนี้
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">การสนับสนุน</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    ศูนย์ช่วยเหลือ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 TalentVault สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
