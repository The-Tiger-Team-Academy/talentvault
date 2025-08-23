"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  GraduationCap,
  Building2,
  TrendingUp,
  LogOut,
  Upload,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  Plus,
  Search,
  MessageCircle,
  Calendar as CalendarIcon,
} from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function InstitutionDashboardPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/institution-login")
    } else if (user && user.type !== "institution") {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg font-medium">กำลังโหลด...</p>
          <p className="text-muted-foreground text-sm mt-2">กรุณารอสักครู่</p>
        </div>
      </div>
    )
  }

  if (!user || user.type !== "institution") {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/institution-dashboard/messages">
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  ข้อความ
                </Button>
              </Link>
              <Link href="/institution-dashboard/schedule-call">
                <Button variant="outline" size="sm">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  จองการโทร
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-foreground font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ยินดีต้อนรับกลับ, {user.name.split(" ")[0]}!</h1>
          <p className="text-muted-foreground">จัดการข้อมูลนักศึกษาและติดตามความคืบหน้าของพวกเขา</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,547</p>
                  <p className="text-sm text-muted-foreground">นักศึกษาทั้งหมด</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">ภาควิชา</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,892</p>
                  <p className="text-sm text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">อัตราการมีงานทำ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-card/80 backdrop-blur-sm border border-border">
            <TabsTrigger value="students">นักศึกษา</TabsTrigger>
            <TabsTrigger value="departments">ภาควิชา</TabsTrigger>
            <TabsTrigger value="verification">การยืนยัน</TabsTrigger>
            <TabsTrigger value="analytics">การวิเคราะห์</TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">จัดการข้อมูลนักศึกษา</h2>
              <div className="flex gap-2">
                <Link href="/institution-dashboard/students">
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    ค้นหานักศึกษา
                  </Button>
                </Link>
                <Link href="/institution-dashboard/students/export">
                  <Button variant="outline">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    ดาวน์โหลด CSV
                  </Button>
                </Link>
                <Link href="/institution-dashboard/upload">
                  <Button variant="default">
                    <Upload className="w-4 h-4 mr-2" />
                    อัพโหลดข้อมูล
                  </Button>
                </Link>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>อัพเดตล่าสุด</CardTitle>
                <CardDescription>การเปลี่ยนแปลงข้อมูลนักศึกษาล่าสุด</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-b-0 border-border">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${update.color}`}>
                        <update.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{update.title}</p>
                        <p className="text-sm text-muted-foreground">{update.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{update.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">จัดการภาควิชา</h2>
              <Link href="/institution-dashboard/departments/new">
                <Button variant="default">
                  <Plus className="w-4 h-4 mr-2" />
                  เพิ่มภาควิชา
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{dept.name}</CardTitle>
                        <CardDescription>{dept.head}</CardDescription>
                      </div>
                      <Badge variant={dept.status === "active" ? "default" : "secondary"}>
                        {dept.status === "active" ? "ใช้งาน" : "ไม่ใช้งาน"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">จำนวนนักศึกษา</span>
                        <span className="font-medium text-foreground">{dept.studentCount}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">อัตราการมีงานทำ</span>
                        <span className="font-medium text-foreground">{dept.employmentRate}%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</span>
                        <span className="font-medium text-foreground">{dept.verifiedCount}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/institution-dashboard/departments/${dept.name}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            ดูรายละเอียด
                          </Button>
                        </Link>
                        <Link href={`/institution-dashboard/departments/${dept.name}/edit`} className="flex-1">
                          <Button variant="default" className="w-full">
                            จัดการ
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-foreground">การยืนยันข้อมูลประจำตัว</h2>
              <div className="flex gap-2">
                <Link href="/institution-dashboard/verification">
                <Button variant="outline">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  รอการยืนยัน (24)
                </Button>
              </Link>
              <Link href="/institution-dashboard/verification">
                <Button variant="default">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  ยืนยันทั้งหมด
                </Button>
              </Link>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>คำขอยืนยันล่าสุด</CardTitle>
                <CardDescription>รายการข้อมูลประจำตัวที่รอการยืนยัน</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {verificationRequests.map((request, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-b-0 border-border">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {request.student.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-foreground">{request.student}</p>
                            <p className="text-sm text-muted-foreground">{request.credential}</p>
                          </div>
                          <Badge variant={request.status === "pending" ? "outline" : "default"}>
                            {request.status === "pending" ? "รอการยืนยัน" : "ยืนยันแล้ว"}
                          </Badge>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <Link href="/institution-dashboard/verification" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            ดูเอกสาร
                          </Button>
                        </Link>
                        <Button variant="default" size="sm" className="flex-1">
                          ยืนยัน
                        </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">ข้อมูลเชิงลึก</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    อัตราการมีงานทำตามภาควิชา
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departmentStats.map((dept, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground">{dept.name}</span>
                          <span className="font-medium text-foreground">{dept.employmentRate}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${dept.employmentRate}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>สถิติการยืนยันข้อมูล</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ข้อมูลทั้งหมด</span>
                      <span className="font-semibold text-foreground">2,547</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ยืนยันแล้ว</span>
                      <span className="font-semibold text-foreground">1,892</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">รอการยืนยัน</span>
                      <span className="font-semibold text-foreground">655</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">อัตราการยืนยัน</span>
                      <span className="font-semibold text-foreground">74.3%</span>
                    </div>
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

const recentUpdates = [
  {
    icon: Upload,
    title: "อัพโหลดข้อมูลสำเร็จ",
    description: "อัพโหลดข้อมูลนักศึกษาใหม่ 150 คนสำเร็จ",
    time: "2 ชั่วโมงที่แล้ว",
    color: "primary",
  },
  {
    icon: CheckCircle,
    title: "ยืนยันข้อมูลประจำตัว",
    description: "ยืนยันข้อมูลประจำตัวนักศึกษา 25 คน",
    time: "1 วันที่แล้ว",
    color: "secondary",
  },
  {
    icon: Users,
    title: "อัพเดตข้อมูลภาควิชา",
    description: "อัพเดตข้อมูลภาควิชาวิศวกรรมคอมพิวเตอร์",
    time: "2 วันที่แล้ว",
    color: "accent",
  },
]

const departments = [
  {
    name: "วิศวกรรมคอมพิวเตอร์",
    head: "ดร. สมชาย ใจดี",
    status: "active",
    studentCount: 450,
    employmentRate: 95,
    verifiedCount: 425,
  },
  {
    name: "วิศวกรรมไฟฟ้า",
    head: "ดร. สมหญิง รักดี",
    status: "active",
    studentCount: 380,
    employmentRate: 92,
    verifiedCount: 350,
  },
  {
    name: "วิศวกรรมเครื่องกล",
    head: "ดร. มานะ ทำดี",
    status: "active",
    studentCount: 420,
    employmentRate: 88,
    verifiedCount: 380,
  },
  {
    name: "วิศวกรรมโยธา",
    head: "ดร. สมศักดิ์ ศักดิ์ศรี",
    status: "active",
    studentCount: 350,
    employmentRate: 85,
    verifiedCount: 320,
  },
]

const verificationRequests = [
  {
    student: "นายธนกร รักเรียน",
    credential: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
    status: "pending",
  },
  {
    student: "นางสาวสมหญิง ใจดี",
    credential: "ประกาศนียบัตร Python Programming",
    status: "pending",
  },
  {
    student: "นายสมชาย มานะ",
    credential: "ใบรับรองการฝึกงาน บริษัท Tech Corp",
    status: "verified",
  },
]

const departmentStats = [
  { name: "วิศวกรรมคอมพิวเตอร์", employmentRate: 95 },
  { name: "วิศวกรรมไฟฟ้า", employmentRate: 92 },
  { name: "วิศวกรรมเครื่องกล", employmentRate: 88 },
  { name: "วิศวกรรมโยธา", employmentRate: 85 },
  { name: "วิศวกรรมอุตสาหการ", employmentRate: 82 },
]
