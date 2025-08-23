"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Building2,
  Star,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function InstitutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              TalentVault
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                สำหรับนายจ้าง
              </Link>
              <Link href="/profiles" className="text-muted-foreground hover:text-foreground transition-colors">
                ดูผู้มีความสามารถ
              </Link>
              <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                เข้าสู่ระบบ
              </Link>
              <Button asChild variant="default">
                <Link href="/signup">เริ่มต้นใช้งาน</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              สำหรับสถาบันการศึกษา
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              เพิ่มพลังให้บัณฑิตและผู้เรียน{" "}
              <span className="text-primary">
                ตลอดชีวิต
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              เชื่อมช่องว่างระหว่างการศึกษาและการจ้างงานด้วยแพลตฟอร์มที่ครอบคลุมของเราที่แสดงข้อมูลประจำตัวที่ยืนยันแล้วและเชื่อมต่อบัณฑิตของคุณกับนายจ้างชั้นนำ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="px-8 py-4 text-lg">
                จองการสาธิต
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                เรียนรู้เพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">สองโซลูชันที่ทรงพลัง</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              เครื่องมือที่ครอบคลุมเพื่อแสดงข้อมูลประจำตัวและเชื่อมต่อผู้เรียนกับโอกาส
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SmartResume Builder */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">SmartResume Builder</CardTitle>
                    <CardDescription className="text-lg">สำหรับผู้ถือข้อมูลประจำตัว</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  เปิดใช้งานผู้ถือข้อมูลประจำตัวให้แสดงข้อมูลประจำตัวที่ยืนยันแล้วบนเรซูเม่แบบไดนามิกที่แชร์ได้ที่มากกว่าข้อจำกัดแบบดั้งเดิม
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">ข้อมูลประจำตัวที่ยืนยันแล้ว</h4>
                      <p className="text-muted-foreground">ใบรับรองและความสำเร็จที่ยืนยันด้วย blockchain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">โปรไฟล์แบบไดนามิก</h4>
                      <p className="text-muted-foreground">เรซูเม่ที่อุดมสมบูรณ์และโต้ตอบได้ด้วยเนื้อหาที่ไม่จำกัด</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">การอัปเดตแบบเรียลไทม์</h4>
                      <p className="text-muted-foreground">การอัปเดตข้อมูลประจำตัวอัตโนมัติและการติดตามทักษะ</p>
                    </div>
                  </div>
                </div>

                <Button variant="default" className="w-full" size="lg">
                  สำรวจ SmartResume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Talent Community */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-foreground">ชุมชนผู้มีความสามารถ</CardTitle>
                    <CardDescription className="text-lg">สำหรับสถาบัน</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  สร้างสะพานที่ทรงพลังระหว่างผู้เรียนที่คุณสนับสนุนและนายจ้างที่ต้องการจ้างพวกเขาผ่านแพลตฟอร์มชุมชนผู้มีความสามารถที่ครอบคลุมของเรา
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">เครือข่ายนายจ้าง</h4>
                      <p className="text-muted-foreground">การเชื่อมต่อโดยตรงกับพันธมิตรการจ้างงาน</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">การติดตามบัณฑิต</h4>
                      <p className="text-muted-foreground">ติดตามผลลัพธ์อาชีพและเมตริกความสำเร็จ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">แดชบอร์ดการวิเคราะห์</h4>
                      <p className="text-muted-foreground">ข้อมูลเชิงลึกที่ครอบคลุมและข้อมูลการจัดตำแหน่ง</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full" size="lg">
                  ค้นพบชุมชน
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">ทำไมสถาบันชั้นนำเลือกเรา</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              เปลี่ยนแปลงวิธีที่บัณฑิตของคุณเชื่อมต่อกับโอกาสทางอาชีพ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">อัตราการจัดตำแหน่งที่ปรับปรุง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  เพิ่มอัตราการจ้างงานบัณฑิต 40% ผ่านการจับคู่นายจ้างที่ตรงเป้าหมายและการแสดงข้อมูลประจำตัวที่ยืนยันแล้ว
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-secondary/10 rounded-xl w-fit mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">การยืนยันข้อมูลประจำตัว</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  การยืนยันข้อมูลประจำตัวที่ปลอดภัยด้วย blockchain สร้างความไว้วางใจกับนายจ้างและพันธมิตรในอุตสาหกรรม
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">ข้อมูลเชิงลึกที่ขับเคลื่อนด้วยข้อมูล</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  การวิเคราะห์ที่ครอบคลุมเกี่ยวกับผลลัพธ์บัณฑิต การมีส่วนร่วมของนายจ้าง และประสิทธิผลของโปรแกรมสำหรับการปรับปรุงอย่างต่อเนื่อง
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">พันธมิตรนายจ้าง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  สร้างความสัมพันธ์ที่ยั่งยืนกับนายจ้างชั้นนำผ่านเครือข่ายที่กว้างขวางและความสามารถในการจับคู่ผู้มีความสามารถที่ตรงเป้าหมาย
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-secondary/10 rounded-xl w-fit mb-4">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">การรวมเข้ากันอย่างราบรื่น</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  การรวมเข้ากันอย่างง่ายกับระบบข้อมูลนักศึกษาที่มีอยู่และแพลตฟอร์มการจัดการการเรียนรู้สำหรับการดำเนินงานที่ราบรื่น
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-accent/10 rounded-xl w-fit mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">การสนับสนุนอย่างต่อเนื่อง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ทีมสนับสนุนที่ทุ่มเทและทรัพยากรการฝึกอบรมเพื่อให้แน่ใจว่าการใช้งานที่ประสบความสำเร็จและการใช้ประโยชน์จากแพลตฟอร์มสูงสุด
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">เชื่อถือโดยสถาบันชั้นนำ</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              เข้าร่วมกับสถาบันการศึกษาหลายร้อยแห่งที่เปลี่ยนแปลงผลลัพธ์บัณฑิตของพวกเขาแล้ว
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">สถาบันพันธมิตร</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-primary-foreground/80">โปรไฟล์บัณฑิต</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-primary-foreground/80">การเพิ่มขึ้นของอัตราการจัดตำแหน่ง</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">พันธมิตรนายจ้าง</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">พร้อมที่จะเปลี่ยนแปลงผลลัพธ์บัณฑิตของคุณ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            เข้าร่วมกับสถาบันชั้นนำในการเพิ่มพลังให้บัณฑิตด้วยข้อมูลประจำตัวที่ยืนยันแล้วและการเชื่อมต่อนายจ้างโดยตรง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="px-8 py-4 text-lg">
              จองการสาธิต
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              ติดต่อฝ่ายขาย
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TalentVault</h3>
              <p className="text-primary-foreground/80">
                เชื่อมต่อผู้มีความสามารถกับโอกาสผ่านข้อมูลประจำตัวที่ยืนยันแล้วและการจับคู่ตามทักษะ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">สำหรับสถาบัน</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    SmartResume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    ชุมชนผู้มีความสามารถ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    แดชบอร์ดการวิเคราะห์
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ทรัพยากร</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    กรณีศึกษา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    คู่มือการรวม
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    ศูนย์สนับสนุน
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">บริษัท</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary-foreground transition-colors">
                    ติดต่อ
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
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; 2024 TalentVault สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
