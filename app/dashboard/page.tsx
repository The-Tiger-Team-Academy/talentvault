"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, FileText, Eye, MessageCircle, LogOut, Plus, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function DashboardPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    } else if (user && user.type === "employer") {
      router.push("/employer-dashboard")
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

  if (!user || user.type !== "job_seeker") {
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
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">TalentVault</span>
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
          <p className="text-slate-600">จัดการโปรไฟล์มืออาชีพและติดตามโอกาสของคุณ</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">127</p>
                  <p className="text-sm text-slate-600">การดูโปรไฟล์</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">8</p>
                  <p className="text-sm text-slate-600">ข้อความ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">23</p>
                  <p className="text-sm text-slate-600">การเชื่อมต่อ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">92%</p>
                  <p className="text-sm text-slate-600">คะแนนโปรไฟล์</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm border border-slate-200/50">
            <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
            <TabsTrigger value="profile">โปรไฟล์</TabsTrigger>
            <TabsTrigger value="messages">ข้อความ</TabsTrigger>
            <TabsTrigger value="settings">การตั้งค่า</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Recent Activity */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>กิจกรรมล่าสุด</CardTitle>
                    <CardDescription>การโต้ตอบและอัปเดตโปรไฟล์ล่าสุดของคุณ</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-b-0 border-slate-200">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`}>
                            <activity.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-900 font-medium">{activity.title}</p>
                            <p className="text-sm text-slate-600">{activity.description}</p>
                            <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Profile Completion */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>ความสมบูรณ์ของโปรไฟล์</CardTitle>
                    <CardDescription>ทำให้โปรไฟล์ของคุณสมบูรณ์เพื่อเพิ่มการมองเห็น</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">ความคืบหน้าทั้งหมด</span>
                        <span className="text-slate-900 font-semibold">92%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <div className="space-y-2">
                        {profileTasks.map((task, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <div
                                className={`w-4 h-4 rounded-full ${task.completed ? "bg-green-500" : "bg-slate-300"}`}
                              ></div>
                              <span className={task.completed ? "text-slate-700" : "text-slate-500"}>{task.name}</span>
                            </div>
                            {!task.completed && (
                              <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50">
                                ทำให้เสร็จ
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>การดำเนินการด่วน</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/create-profile">
                      <Button className="w-full justify-start bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                        <Plus className="w-4 h-4 mr-2" />
                        แก้ไขโปรไฟล์
                      </Button>
                    </Link>
                    <Link href="/profiles">
                      <Button variant="outline" className="w-full justify-start bg-transparent border-slate-200 hover:bg-slate-50">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูโปรไฟล์สาธารณะ
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start bg-transparent border-slate-200 hover:bg-slate-50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      ข้อความ
                    </Button>
                  </CardContent>
                </Card>

                {/* Profile Insights */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>ข้อมูลเชิงลึกโปรไฟล์</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-slate-900">127</p>
                        <p className="text-sm text-slate-600">การดูโปรไฟล์เดือนนี้</p>
                        <p className="text-xs text-green-600 mt-1">↑ 23% จากเดือนที่แล้ว</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">การปรากฏในการค้นหา</span>
                          <span className="text-slate-900 font-medium">89</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">การคลิกโปรไฟล์</span>
                          <span className="text-slate-900 font-medium">34</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">คำขอติดต่อ</span>
                          <span className="text-slate-900 font-medium">8</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>การจัดการโปรไฟล์</CardTitle>
                <CardDescription>อัปเดตและจัดการโปรไฟล์มืออาชีพของคุณ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">จัดการโปรไฟล์ของคุณ</h3>
                  <p className="text-slate-600 mb-4">อัปเดตประสบการณ์ ทักษะ และข้อมูลประจำตัวของคุณ</p>
                  <Link href="/create-profile">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      แก้ไขโปรไฟล์
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ข้อความ</CardTitle>
                <CardDescription>สื่อสารกับนายจ้างที่มีศักยภาพ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">ยังไม่มีข้อความ</h3>
                  <p className="text-slate-600">ข้อความจากนายจ้างจะปรากฏที่นี่</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>การตั้งค่าบัญชี</CardTitle>
                <CardDescription>จัดการการตั้งค่าบัญชีของคุณ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">ข้อมูลบัญชี</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">ชื่อ:</span>
                        <span className="text-slate-900">{user.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">อีเมล:</span>
                        <span className="text-slate-900">{user.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">ประเภทบัญชี:</span>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-700">ผู้หางาน</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <Button variant="outline" onClick={handleLogout} className="border-slate-200 hover:bg-slate-50">
                      <LogOut className="w-4 h-4 mr-2" />
                      ออกจากระบบ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

const recentActivity = [
  {
    icon: Eye,
    title: "โปรไฟล์ถูกดู",
    description: "โปรไฟล์ของคุณถูกดูโดย Tech Corp",
    time: "2 ชั่วโมงที่แล้ว",
    color: "bg-blue-500",
  },
  {
    icon: MessageCircle,
    title: "ข้อความใหม่",
    description: "ข้อความจาก StartupXYZ เกี่ยวกับตำแหน่งนักพัฒนาอาวุโส",
    time: "1 วันที่แล้ว",
    color: "bg-green-500",
  },
  {
    icon: User,
    title: "โปรไฟล์อัปเดต",
    description: "คุณอัปเดตส่วนทักษะของคุณ",
    time: "3 วันที่แล้ว",
    color: "bg-purple-500",
  },
  {
    icon: TrendingUp,
    title: "อันดับการค้นหาปรับปรุง",
    description: "โปรไฟล์ของคุณมีอันดับสูงขึ้นสำหรับ 'React Developer'",
    time: "1 สัปดาห์ที่แล้ว",
    color: "bg-orange-500",
  },
]

const profileTasks = [
  { name: "เพิ่มสรุปมืออาชีพ", completed: true },
  { name: "อัปโหลดรูปโปรไฟล์", completed: false },
  { name: "เพิ่มประสบการณ์การทำงาน", completed: true },
  { name: "ระบุทักษะและความเชี่ยวชาญ", completed: true },
  { name: "เพิ่มใบรับรอง", completed: true },
  { name: "รวมโปรเจคพอร์ตโฟลิโอ", completed: false },
]
