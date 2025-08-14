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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              TalentVault
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/employers" className="text-slate-600 hover:text-slate-900 transition-colors">
                สำหรับนายจ้าง
              </Link>
              <Link href="/profiles" className="text-slate-600 hover:text-slate-900 transition-colors">
                ดูผู้มีความสามารถ
              </Link>
              <Link href="/login" className="text-slate-600 hover:text-slate-900 transition-colors">
                เข้าสู่ระบบ
              </Link>
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
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
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-slate-100 text-slate-700">
              สำหรับสถาบันการศึกษา
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              เพิ่มพลังให้บัณฑิตและผู้เรียน{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ตลอดชีวิต
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              เชื่อมช่องว่างระหว่างการศึกษาและการจ้างงานด้วยแพลตฟอร์มที่ครอบคลุมของเราที่แสดงข้อมูลประจำตัวที่ยืนยันแล้วและเชื่อมต่อบัณฑิตของคุณกับนายจ้างชั้นนำ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                จองการสาธิต
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent border-slate-200 hover:bg-slate-50">
                เรียนรู้เพิ่มเติม
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">สองโซลูชันที่ทรงพลัง</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              เครื่องมือที่ครอบคลุมเพื่อแสดงข้อมูลประจำตัวและเชื่อมต่อผู้เรียนกับโอกาส
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SmartResume Builder */}
            <Card className="border-2 border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900">SmartResume Builder</CardTitle>
                    <CardDescription className="text-lg">สำหรับผู้ถือข้อมูลประจำตัว</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  เปิดใช้งานผู้ถือข้อมูลประจำตัวให้แสดงข้อมูลประจำตัวที่ยืนยันแล้วบนเรซูเม่แบบไดนามิกที่แชร์ได้ที่มากกว่าข้อจำกัดแบบดั้งเดิม
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">ข้อมูลประจำตัวที่ยืนยันแล้ว</h4>
                      <p className="text-slate-600">ใบรับรองและความสำเร็จที่ยืนยันด้วย blockchain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">โปรไฟล์แบบไดนามิก</h4>
                      <p className="text-slate-600">เรซูเม่ที่อุดมสมบูรณ์และโต้ตอบได้ด้วยเนื้อหาที่ไม่จำกัด</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">การอัปเดตแบบเรียลไทม์</h4>
                      <p className="text-slate-600">การอัปเดตข้อมูลประจำตัวอัตโนมัติและการติดตามทักษะ</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg" size="lg">
                  สำรวจ SmartResume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Talent Community */}
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-slate-900">ชุมชนผู้มีความสามารถ</CardTitle>
                    <CardDescription className="text-lg">สำหรับสถาบัน</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  สร้างสะพานที่ทรงพลังระหว่างผู้เรียนที่คุณสนับสนุนและนายจ้างที่ต้องการจ้างพวกเขาผ่านแพลตฟอร์มชุมชนผู้มีความสามารถที่ครอบคลุมของเรา
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">เครือข่ายนายจ้าง</h4>
                      <p className="text-slate-600">การเชื่อมต่อโดยตรงกับพันธมิตรการจ้างงาน</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">การติดตามบัณฑิต</h4>
                      <p className="text-slate-600">ติดตามผลลัพธ์อาชีพและเมตริกความสำเร็จ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">แดชบอร์ดการวิเคราะห์</h4>
                      <p className="text-slate-600">ข้อมูลเชิงลึกที่ครอบคลุมและข้อมูลการจัดตำแหน่ง</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-transparent border-slate-200 hover:bg-slate-50" size="lg" variant="outline">
                  ค้นพบชุมชน
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">ทำไมสถาบันชั้นนำเลือกเรา</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              เปลี่ยนแปลงวิธีที่บัณฑิตของคุณเชื่อมต่อกับโอกาสทางอาชีพ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl w-fit mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">อัตราการจัดตำแหน่งที่ปรับปรุง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  เพิ่มอัตราการจ้างงานบัณฑิต 40% ผ่านการจับคู่นายจ้างที่ตรงเป้าหมายและการแสดงข้อมูลประจำตัวที่ยืนยันแล้ว
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl w-fit mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">การยืนยันข้อมูลประจำตัว</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  การยืนยันข้อมูลประจำตัวที่ปลอดภัยด้วย blockchain สร้างความไว้วางใจกับนายจ้างและพันธมิตรในอุตสาหกรรม
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">ข้อมูลเชิงลึกที่ขับเคลื่อนด้วยข้อมูล</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  การวิเคราะห์ที่ครอบคลุมเกี่ยวกับผลลัพธ์บัณฑิต การมีส่วนร่วมของนายจ้าง และประสิทธิผลของโปรแกรมสำหรับการปรับปรุงอย่างต่อเนื่อง
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl w-fit mb-4">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">พันธมิตรนายจ้าง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  สร้างความสัมพันธ์ที่ยั่งยืนกับนายจ้างชั้นนำผ่านเครือข่ายที่กว้างขวางและความสามารถในการจับคู่ผู้มีความสามารถที่ตรงเป้าหมาย
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl w-fit mb-4">
                  <Zap className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">การรวมเข้ากันอย่างราบรื่น</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  การรวมเข้ากันอย่างง่ายกับระบบข้อมูลนักศึกษาที่มีอยู่และแพลตฟอร์มการจัดการการเรียนรู้สำหรับการดำเนินงานที่ราบรื่น
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl w-fit mb-4">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-xl">การสนับสนุนอย่างต่อเนื่อง</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  ทีมสนับสนุนที่ทุ่มเทและทรัพยากรการฝึกอบรมเพื่อให้แน่ใจว่าการใช้งานที่ประสบความสำเร็จและการใช้ประโยชน์จากแพลตฟอร์มสูงสุด
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">เชื่อถือโดยสถาบันชั้นนำ</h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              เข้าร่วมกับสถาบันการศึกษาหลายร้อยแห่งที่เปลี่ยนแปลงผลลัพธ์บัณฑิตของพวกเขาแล้ว
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">สถาบันพันธมิตร</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-indigo-100">โปรไฟล์บัณฑิต</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-indigo-100">การเพิ่มขึ้นของอัตราการจัดตำแหน่ง</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-indigo-100">พันธมิตรนายจ้าง</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">พร้อมที่จะเปลี่ยนแปลงผลลัพธ์บัณฑิตของคุณ?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            เข้าร่วมกับสถาบันชั้นนำในการเพิ่มพลังให้บัณฑิตด้วยข้อมูลประจำตัวที่ยืนยันแล้วและการเชื่อมต่อนายจ้างโดยตรง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              จองการสาธิต
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent border-slate-200 hover:bg-slate-50">
              ติดต่อฝ่ายขาย
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">TalentVault</h3>
              <p className="text-slate-400">
                เชื่อมต่อผู้มีความสามารถกับโอกาสผ่านข้อมูลประจำตัวที่ยืนยันแล้วและการจับคู่ตามทักษะ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">สำหรับสถาบัน</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SmartResume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ชุมชนผู้มีความสามารถ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    แดชบอร์ดการวิเคราะห์
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">ทรัพยากร</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    กรณีศึกษา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    คู่มือการรวม
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ศูนย์สนับสนุน
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">บริษัท</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ติดต่อ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TalentVault สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
