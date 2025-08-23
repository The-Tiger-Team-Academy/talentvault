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
    <div className="min-h-screen bg-background">
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
              <Link href="/create-profile" className="text-muted-foreground hover:text-foreground transition-colors">
                สร้างโปรไฟล์
              </Link>
              {user ? (
                <div className="flex items-center gap-3">
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">มากกว่าเรซูเม่หน้าเดียว</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            แสดงเรื่องราวมืออาชีพที่สมบูรณ์ของคุณ เก็บประสบการณ์ ทักษะ และข้อมูลประจำตัวโดยไม่มีข้อจำกัด เชื่อมต่อกับนายจ้างที่กำลังมองหาความเชี่ยวชาญเฉพาะของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              <Link href="/create-profile">สร้างโปรไฟล์ของคุณ</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/employers">สำหรับนายจ้าง</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/institutions">สำหรับสถาบัน</Link>
            </Button>
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

      {/* Sample Profiles Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">ผู้เชี่ยวชาญที่โดดเด่น</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProfiles.map((profile, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
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
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 3 && (
                      <Badge variant="outline">
                        +{profile.skills.length - 3} เพิ่มเติม
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Link href="/profiles">ดูโปรไฟล์ทั้งหมด</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-semibold">TalentVault</span>
          </div>
          <p className="text-primary-foreground/80 mb-6">เชื่อมต่อผู้มีความสามารถพิเศษกับนายจ้างที่มีวิสัยทัศน์ก้าวหน้า</p>
          <div className="flex justify-center gap-6 text-sm text-primary-foreground/80">
            <Link href="/about" className="hover:text-primary-foreground transition-colors">
              เกี่ยวกับเรา
            </Link>
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              ความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              เงื่อนไข
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground transition-colors">
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
