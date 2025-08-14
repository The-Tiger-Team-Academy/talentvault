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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b border-slate-200/50 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">TalentVault</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/profiles" className="text-slate-600 hover:text-slate-900 transition-colors">
                ดูผู้มีความสามารถ
              </Link>
              <Link href="/employers" className="text-slate-600 hover:text-slate-900 transition-colors">
                สำหรับนายจ้าง
              </Link>
              <Link href="/institutions" className="text-slate-600 hover:text-slate-900 transition-colors">
                สำหรับสถาบัน
              </Link>
              <Link href="/create-profile" className="text-slate-600 hover:text-slate-900 transition-colors">
                สร้างโปรไฟล์
              </Link>
              {user ? (
                <div className="flex items-center gap-3">
                  <Link href={user.type === "employer" ? "/employer-dashboard" : "/dashboard"}>
                    <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                      แดชบอร์ด
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-slate-700 font-medium">{user.name.split(" ")[0]}</span>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                      เข้าสู่ระบบ
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                      เริ่มต้นใช้งาน
                    </Button>
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">มากกว่าเรซูเม่หน้าเดียว</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            แสดงเรื่องราวมืออาชีพที่สมบูรณ์ของคุณ เก็บประสบการณ์ ทักษะ และข้อมูลประจำตัวโดยไม่มีข้อจำกัด เชื่อมต่อกับนายจ้างที่กำลังมองหาความเชี่ยวชาญเฉพาะของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              <Link href="/create-profile">สร้างโปรไฟล์ของคุณ</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50">
              <Link href="/employers">สำหรับนายจ้าง</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50">
              <Link href="/institutions">สำหรับสถาบัน</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">โปรไฟล์มืออาชีพโดยไม่มีข้อจำกัด</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>ประสบการณ์ที่ครอบคลุม</CardTitle>
                <CardDescription>
                  เอกสารทุกโปรเจค บทบาท และความสำเร็จด้วยรายละเอียดและบริบทที่ไม่จำกัด
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>การค้นหาขั้นสูง</CardTitle>
                <CardDescription>
                  นายจ้างสามารถหาผู้สมัครที่มีทักษะเฉพาะและข้อมูลประจำตัวที่หาได้ยาก
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
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

      {/* Sample Profiles Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">ผู้เชี่ยวชาญที่โดดเด่น</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProfiles.map((profile, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{profile.name}</CardTitle>
                      <CardDescription>{profile.title}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.slice(0, 3).map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-200">
                        +{profile.skills.length - 3} เพิ่มเติม
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="border-slate-200 hover:bg-slate-50">
              <Link href="/profiles">ดูโปรไฟล์ทั้งหมด</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">TalentVault</span>
          </div>
          <p className="text-slate-400 mb-6">เชื่อมต่อผู้มีความสามารถพิเศษกับนายจ้างที่มีวิสัยทัศน์ก้าวหน้า</p>
          <div className="flex justify-center gap-6 text-sm text-slate-400">
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

const sampleProfiles = [
  {
    name: "ซาราห์ เฉิน",
    title: "วิศวกร ML อาวุโส",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "AWS", "Kubernetes"],
  },
  {
    name: "มาร์คัส โรดริเกซ",
    title: "สถาปนิก Blockchain",
    skills: ["Solidity", "Web3", "DeFi", "Smart Contracts", "Ethereum", "Rust"],
  },
  {
    name: "ไอชา ปาเทล",
    title: "ผู้เชี่ยวชาญ DevOps",
    skills: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS", "Monitoring"],
  },
  {
    name: "เดวิด คิม",
    title: "นักวิจัยคอมพิวเตอร์ควอนตัม",
    skills: ["Qiskit", "Quantum Algorithms", "Python", "Linear Algebra", "Research"],
  },
  {
    name: "เอเลนา วอลคอฟ",
    title: "ผู้เชี่ยวชาญความปลอดภัยไซเบอร์",
    skills: ["Penetration Testing", "CISSP", "Network Security", "Incident Response"],
  },
  {
    name: "เจมส์ ทอมป์สัน",
    title: "นักพัฒนา AR/VR",
    skills: ["Unity", "Unreal Engine", "C#", "3D Modeling", "WebXR", "OpenXR"],
  },
]
