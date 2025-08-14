"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Bookmark, MessageCircle, TrendingUp, ArrowLeft, Plus, LogOut } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function EmployerDashboardPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()
  const [activeSearches, setActiveSearches] = useState(mockSearches)
  const [bookmarkedCandidates, setBookmarkedCandidates] = useState(mockBookmarks)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (user && user.type === "job_seeker") {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg font-medium">กำลังโหลด...</p>
          <p className="text-slate-500 text-sm mt-2">กรุณารอสักครู่</p>
        </div>
      </div>
    )
  }

  if (!user || user.type !== "employer") {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-slate-700 font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                ข้อความ (3)
              </Button>
              <Link href="/profiles">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                  <Search className="w-4 h-4 mr-2" />
                  ค้นหาผู้มีความสามารถ
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout} className="border-slate-200 hover:bg-slate-50">
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">ยินดีต้อนรับกลับ, {user.name.split(" ")[0]}!</h1>
          <p className="text-slate-600">จัดการการค้นหาผู้มีความสามารถและติดตามการติดต่อกับผู้สมัคร</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">12</p>
                  <p className="text-sm text-slate-600">การค้นหาที่ใช้งาน</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">247</p>
                  <p className="text-sm text-slate-600">ผู้สมัครที่พบ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <Bookmark className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">18</p>
                  <p className="text-sm text-slate-600">บุ๊กมาร์ก</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">8</p>
                  <p className="text-sm text-slate-600">ในการสนทนา</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="searches" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-slate-200/50">
            <TabsTrigger value="searches">การค้นหาที่ใช้งาน</TabsTrigger>
            <TabsTrigger value="bookmarks">ผู้สมัครที่บุ๊กมาร์ก</TabsTrigger>
            <TabsTrigger value="messages">ข้อความ</TabsTrigger>
            <TabsTrigger value="analytics">การวิเคราะห์</TabsTrigger>
          </TabsList>

          <TabsContent value="searches" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-900">การค้นหาที่ใช้งานของคุณ</h2>
              <Link href="/profiles">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                  <Plus className="w-4 h-4 mr-2" />
                  การค้นหาใหม่
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeSearches.map((search, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{search.title}</CardTitle>
                        <CardDescription>{search.description}</CardDescription>
                      </div>
                      <Badge variant={search.status === "active" ? "default" : "secondary"} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0">
                        {search.status === "active" ? "ใช้งาน" : "หยุดชั่วคราว"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">เกณฑ์การค้นหา:</p>
                        <div className="flex flex-wrap gap-2">
                          {search.criteria.map((criterion, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-slate-200 bg-slate-50">
                              {criterion}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>พบผู้สมัคร {search.results} คน</span>
                        <span>สร้างเมื่อ {search.created}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent border-slate-200 hover:bg-slate-50">
                          ดูผลลัพธ์
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                          ปรับแต่งการค้นหา
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookmarks" className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">ผู้สมัครที่บุ๊กมาร์ก</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {bookmarkedCandidates.map((candidate, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{candidate.name}</CardTitle>
                        <CardDescription>{candidate.title}</CardDescription>
                        <p className="text-sm text-slate-500 mt-1">{candidate.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-slate-700 mb-2">ทักษะหลัก:</p>
                        <div className="flex flex-wrap gap-2">
                          {candidate.skills.slice(0, 4).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 4 && (
                            <Badge variant="outline" className="text-xs border-slate-200">
                              +{candidate.skills.length - 4} เพิ่มเติม
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>{candidate.experience} ปี ประสบการณ์</span>
                        <span>บุ๊กมาร์กเมื่อ {candidate.bookmarked}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1 bg-transparent border-slate-200 hover:bg-slate-50">
                          ดูโปรไฟล์
                        </Button>
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                          ติดต่อ
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">ข้อความล่าสุด</h2>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">ยังไม่มีข้อความ</h3>
                  <p className="text-slate-600 mb-4">เริ่มการสนทนากับผู้สมัครเพื่อดูข้อความที่นี่</p>
                  <Link href="/profiles">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      ดูผู้สมัคร
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-slate-900">การวิเคราะห์การค้นหา</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    ประสิทธิภาพการค้นหา
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">การค้นหาทั้งหมด</span>
                      <span className="font-semibold">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">ผลลัพธ์เฉลี่ยต่อการค้นหา</span>
                      <span className="font-semibold">18.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">อัตราการติดต่อ</span>
                      <span className="font-semibold">12%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">อัตราการตอบกลับ</span>
                      <span className="font-semibold">68%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>ทักษะที่ค้นหาบ่อยที่สุด</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topSkills.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-700">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-slate-200 rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-slate-600 w-8">{skill.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const mockSearches = [
  {
    title: "นักพัฒนา React อาวุโส",
    description: "กำลังมองหานักพัฒนา React ที่มีประสบการณ์สำหรับสตาร์ทอัพ fintech ของเรา",
    status: "active",
    criteria: ["React", "TypeScript", "Node.js", "5+ ปี", "ซานฟรานซิสโก"],
    results: 23,
    created: "2 วันที่แล้ว",
  },
  {
    title: "วิศวกร ML - Computer Vision",
    description: "ผู้เชี่ยวชาญ computer vision สำหรับโปรเจคยานยนต์อัตโนมัติ",
    status: "active",
    criteria: ["Computer Vision", "PyTorch", "Python", "ปริญญาเอก", "ทำงานจากที่บ้าน"],
    results: 8,
    created: "1 สัปดาห์ที่แล้ว",
  },
  {
    title: "วิศวกร DevOps",
    description: "ผู้เชี่ยวชาญโครงสร้างพื้นฐานคลาวด์และการอัตโนมัติการปรับใช้",
    status: "paused",
    criteria: ["Kubernetes", "AWS", "Terraform", "3+ ปี", "นิวยอร์ก"],
    results: 31,
    created: "2 สัปดาห์ที่แล้ว",
  },
  {
    title: "นักพัฒนา Blockchain",
    description: "นักพัฒนา Solidity สำหรับการพัฒนาพรอโตคอล DeFi",
    status: "active",
    criteria: ["Solidity", "Web3", "DeFi", "Smart Contracts", "ทำงานจากที่บ้าน"],
    results: 12,
    created: "3 วันที่แล้ว",
  },
]

const mockBookmarks = [
  {
    name: "ซาราห์ เฉิน",
    title: "วิศวกร ML อาวุโส",
    location: "ซานฟรานซิสโก, แคลิฟอร์เนีย",
    experience: 8,
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "AWS"],
    bookmarked: "2 วันที่แล้ว",
  },
  {
    name: "มาร์คัส โรดริเกซ",
    title: "สถาปนิก Blockchain",
    location: "ออสติน, เท็กซัส",
    experience: 6,
    skills: ["Solidity", "Web3", "DeFi", "Smart Contracts", "Ethereum"],
    bookmarked: "1 สัปดาห์ที่แล้ว",
  },
  {
    name: "ไอชา ปาเทล",
    title: "ผู้เชี่ยวชาญ DevOps",
    location: "ซีแอตเทิล, วอชิงตัน",
    experience: 7,
    skills: ["Kubernetes", "Docker", "Terraform", "AWS", "CI/CD"],
    bookmarked: "3 วันที่แล้ว",
  },
]

const topSkills = [
  { name: "React", percentage: 85 },
  { name: "Python", percentage: 72 },
  { name: "AWS", percentage: 68 },
  { name: "Node.js", percentage: 61 },
  { name: "TypeScript", percentage: 54 },
]
