"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Target, 
  TrendingUp, 
  BarChart3,
  Search,
  Eye,
  CheckCircle,
  Star,
  ArrowLeft,
  AlertCircle,
  Upload,
  Download,
  FileText,
  Plus,
  ArrowUp,
  Clock,
  Calendar
} from "lucide-react"
import Link from "next/link"

interface Student {
  id: string
  name: string
  studentId: string
  major: string
  year: number
  gpa: number
  skills: string[]
  strengths: string[]
  weaknesses: string[]
  status: "active" | "placed" | "graduated"
  employer?: string
  position?: string
  performance?: number
}

interface Employer {
  id: string
  name: string
  company: string
  industry: string
  location: string
  requirements: string[]
  rating: number
  placementCount: number
}

interface Department {
  id: string
  name: string
  headOfDepartment: string
  studentCount: number
  employmentRate: number
  confirmedData: number
  status: "active" | "inactive"
}

interface RecentActivity {
  id: string
  type: "upload" | "verify" | "update"
  title: string
  description: string
  timestamp: string
  icon: string
}

export default function InstitutionDashboardPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")
  const [students, setStudents] = useState<Student[]>([])
  const [employers, setEmployers] = useState<Employer[]>([])
  const [departments, setDepartments] = useState<Department[]>([])
  const [recentActivities, setRecentActivities] = useState<RecentActivity[]>([])

  useEffect(() => {
    const mockStudents: Student[] = [
      {
        id: "1",
        name: "สมชาย ใจดี",
        studentId: "6401234567",
        major: "วิทยาการคอมพิวเตอร์",
        year: 4,
        gpa: 3.85,
        skills: ["React", "Node.js", "Python", "SQL"],
        strengths: ["การเขียนโค้ด", "การแก้ปัญหา", "การทำงานเป็นทีม"],
        weaknesses: ["การนำเสนอ", "การจัดการเวลา"],
        status: "placed",
        employer: "TechCorp Co., Ltd.",
        position: "Junior Software Developer",
        performance: 4.2
      },
      {
        id: "2",
        name: "สมหญิง สมบูรณ์",
        studentId: "6401234568",
        major: "การออกแบบกราฟิก",
        year: 3,
        gpa: 3.92,
        skills: ["Adobe Creative Suite", "Figma", "UI/UX Design"],
        strengths: ["ความคิดสร้างสรรค์", "การออกแบบ", "การสื่อสาร"],
        weaknesses: ["การเขียนโค้ด", "การวิเคราะห์ข้อมูล"],
        status: "active"
      }
    ]

    const mockEmployers: Employer[] = [
      {
        id: "1",
        name: "คุณวิชัย วิศวกร",
        company: "TechCorp Co., Ltd.",
        industry: "เทคโนโลยี",
        location: "กรุงเทพมหานคร",
        requirements: ["React", "Node.js", "JavaScript"],
        rating: 4.8,
        placementCount: 15
      },
      {
        id: "2",
        name: "คุณสมหญิง ผู้จัดการ",
        company: "Creative Studio Co., Ltd.",
        industry: "การออกแบบ",
        location: "เชียงใหม่",
        requirements: ["Adobe Creative Suite", "Figma", "UI/UX Design"],
        rating: 4.6,
        placementCount: 8
      }
    ]

    const mockDepartments: Department[] = [
      {
        id: "1",
        name: "วิศวกรรมคอมพิวเตอร์",
        headOfDepartment: "ดร. สมชาย ใจดี",
        studentCount: 450,
        employmentRate: 95,
        confirmedData: 425,
        status: "active"
      },
      {
        id: "2",
        name: "วิศวกรรมไฟฟ้า",
        headOfDepartment: "ดร. สมหญิง รักดี",
        studentCount: 380,
        employmentRate: 92,
        confirmedData: 350,
        status: "active"
      },
      {
        id: "3",
        name: "วิศวกรรมเครื่องกล",
        headOfDepartment: "ดร. มานะ ทำดี",
        studentCount: 420,
        employmentRate: 88,
        confirmedData: 380,
        status: "active"
      },
      {
        id: "4",
        name: "วิศวกรรมโยธา",
        headOfDepartment: "ดร. สมศักดิ์ ศักดิ์ศรี",
        studentCount: 350,
        employmentRate: 85,
        confirmedData: 320,
        status: "active"
      }
    ]

    const mockRecentActivities: RecentActivity[] = [
      {
        id: "1",
        type: "upload",
        title: "อัพโหลดข้อมูลสำเร็จ",
        description: "อัพโหลดข้อมูลนักศึกษาใหม่ 150 คนสำเร็จ",
        timestamp: "2 ชั่วโมงที่แล้ว",
        icon: "upload"
      },
      {
        id: "2",
        type: "verify",
        title: "ยืนยันข้อมูลประจำตัว",
        description: "ยืนยันข้อมูลประจำตัวนักศึกษา 25 คน",
        timestamp: "1 วันที่แล้ว",
        icon: "verify"
      },
      {
        id: "3",
        type: "update",
        title: "อัพเดตข้อมูลภาควิชา",
        description: "อัพเดตข้อมูลภาควิชาวิศวกรรมคอมพิวเตอร์",
        timestamp: "2 วันที่แล้ว",
        icon: "update"
      }
    ]

    setStudents(mockStudents)
    setEmployers(mockEmployers)
    setDepartments(mockDepartments)
    setRecentActivities(mockRecentActivities)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-blue-100 text-blue-800 border-blue-200"
      case "placed": return "bg-green-100 text-green-800 border-green-200"
      case "graduated": return "bg-purple-100 text-purple-800 border-purple-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "กำลังศึกษา"
      case "placed": return "ได้งานแล้ว"
      case "graduated": return "จบการศึกษา"
      default: return "ไม่ทราบสถานะ"
    }
  }

  const getActivityIcon = (icon: string) => {
    switch (icon) {
      case "upload": return <ArrowUp className="w-4 h-4" />
      case "verify": return <CheckCircle className="w-4 h-4" />
      case "update": return <Users className="w-4 h-4" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  if (!user || user.type !== "institution") {
    router.push("/institution-login")
    return null
  }

  const activeStudents = students.filter(s => s.status === "active").length
  const placedStudents = students.filter(s => s.status === "placed").length
  const averageGPA = students.reduce((acc, s) => acc + s.gpa, 0) / students.length
  const totalStudents = departments.reduce((acc, d) => acc + d.studentCount, 0)
  const totalConfirmed = departments.reduce((acc, d) => acc + d.confirmedData, 0)
  const confirmationRate = (totalConfirmed / totalStudents) * 100

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                กลับหน้าหลัก
              </Link>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault Institution</span>
            </div>
            <Button onClick={() => setActiveTab("matching")} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Target className="w-4 h-4 mr-2" />
              จับคู่นักศึกษา
            </Button>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">แดชบอร์ดสถาบันการศึกษา</h1>
            <p className="text-muted-foreground">จัดการนักศึกษา การจับคู่ และติดตามผลการดำเนินงาน</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
              <TabsTrigger value="students">นักศึกษา</TabsTrigger>
              <TabsTrigger value="departments">ภาควิชา</TabsTrigger>
              <TabsTrigger value="matching">การจับคู่</TabsTrigger>
              <TabsTrigger value="confirmation">การยืนยัน</TabsTrigger>
              <TabsTrigger value="insights">การวิเคราะห์</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{totalStudents}</p>
                        <p className="text-sm text-muted-foreground">นักศึกษาทั้งหมด</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Target className="w-8 h-8 text-secondary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{placedStudents}</p>
                        <p className="text-sm text-muted-foreground">ได้งานแล้ว</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-8 h-8 text-accent" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{employers.length}</p>
                        <p className="text-sm text-muted-foreground">บริษัทพันธมิตร</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Star className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{averageGPA.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">GPA เฉลี่ย</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>อัพเดตล่าสุด</CardTitle>
                  <CardDescription>การเปลี่ยนแปลงข้อมูลนักศึกษาล่าสุด</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                          {getActivityIcon(activity.icon)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{activity.title}</h4>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                        <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">จัดการข้อมูลนักศึกษา</h2>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Search className="w-4 h-4 mr-2" />
                    ค้นหานักศึกษา
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    ดาวน์โหลด CSV
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Upload className="w-4 h-4 mr-2" />
                    อัพโหลดข้อมูล
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {students.map((student) => (
                      <div key={student.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                              <Users className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold">{student.name}</h4>
                              <p className="text-sm text-muted-foreground">รหัสนักศึกษา: {student.studentId}</p>
                              <p className="text-sm text-muted-foreground">{student.major} - ปีที่ {student.year}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(student.status)}>
                              {getStatusText(student.status)}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              ดูรายละเอียด
                            </Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">{student.gpa}</p>
                            <p className="text-xs text-muted-foreground">GPA</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-secondary">{student.skills.length}</p>
                            <p className="text-xs text-muted-foreground">ทักษะ</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-accent">{student.strengths.length}</p>
                            <p className="text-xs text-muted-foreground">จุดแข็ง</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-sm mb-2">ทักษะหลัก</h5>
                            <div className="flex flex-wrap gap-2">
                              {student.skills.slice(0, 4).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {student.status === "placed" && (
                            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                              <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span className="font-medium text-green-800">ได้งานแล้ว</span>
                              </div>
                              <p className="text-sm text-green-700">
                                {student.employer} - {student.position}
                              </p>
                              {student.performance && (
                                <div className="flex items-center gap-2 mt-2">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-sm text-green-700">ประสิทธิภาพ: {student.performance}/5.0</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="departments" className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">จัดการภาควิชา</h2>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  เพิ่มภาควิชา
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">วิศวกรรมคอมพิวเตอร์</CardTitle>
                        <CardDescription>หัวหน้าภาควิชา: ดร. สมชาย ใจดี</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground border-primary">
                        ใช้งาน
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">450</p>
                        <p className="text-xs text-muted-foreground">จำนวนนักศึกษา</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">95%</p>
                        <p className="text-xs text-muted-foreground">อัตราการมีงานทำ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">425</p>
                        <p className="text-xs text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูรายละเอียด
                      </Button>
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        จัดการ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">วิศวกรรมไฟฟ้า</CardTitle>
                        <CardDescription>หัวหน้าภาควิชา: ดร. สมหญิง รักดี</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground border-primary">
                        ใช้งาน
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">380</p>
                        <p className="text-xs text-muted-foreground">จำนวนนักศึกษา</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">92%</p>
                        <p className="text-xs text-muted-foreground">อัตราการมีงานทำ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">350</p>
                        <p className="text-xs text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูรายละเอียด
                      </Button>
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        จัดการ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">วิศวกรรมเครื่องกล</CardTitle>
                        <CardDescription>หัวหน้าภาควิชา: ดร. มานะ ทำดี</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground border-primary">
                        ใช้งาน
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">420</p>
                        <p className="text-xs text-muted-foreground">จำนวนนักศึกษา</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">88%</p>
                        <p className="text-xs text-muted-foreground">อัตราการมีงานทำ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">380</p>
                        <p className="text-xs text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูรายละเอียด
                      </Button>
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        จัดการ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">วิศวกรรมโยธา</CardTitle>
                        <CardDescription>หัวหน้าภาควิชา: ดร. สมศักดิ์ ศักดิ์ศรี</CardDescription>
                      </div>
                      <Badge className="bg-primary text-primary-foreground border-primary">
                        ใช้งาน
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">350</p>
                        <p className="text-xs text-muted-foreground">จำนวนนักศึกษา</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-secondary">85%</p>
                        <p className="text-xs text-muted-foreground">อัตราการมีงานทำ</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">320</p>
                        <p className="text-xs text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูรายละเอียด
                      </Button>
                      <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        จัดการ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="matching" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>นักศึกษาที่พร้อมจับคู่</CardTitle>
                    <CardDescription>นักศึกษาที่พร้อมเข้าสู่ตลาดแรงงาน</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {students
                        .filter(s => s.status === "active")
                        .map((student) => (
                          <div key={student.id} className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">{student.name}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{student.major}</p>
                            <div className="grid grid-cols-2 gap-4 mb-3">
                              <div className="text-center">
                                <p className="text-lg font-bold text-primary">{student.gpa}</p>
                                <p className="text-xs text-muted-foreground">GPA</p>
                              </div>
                              <div className="text-center">
                                <p className="text-lg font-bold text-secondary">{student.skills.length}</p>
                                <p className="text-xs text-muted-foreground">ทักษะ</p>
                              </div>
                            </div>
                            <Button size="sm" className="w-full">
                              <Target className="w-4 h-4 mr-2" />
                              จับคู่กับนายจ้าง
                            </Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>นายจ้างที่ต้องการนักศึกษา</CardTitle>
                    <CardDescription>บริษัทที่กำลังหานักศึกษาเข้าทำงาน</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {employers.map((employer) => (
                        <div key={employer.id} className="border rounded-lg p-4">
                          <h4 className="font-semibold mb-2">{employer.company}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{employer.industry} - {employer.location}</p>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm font-medium">{employer.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">จ้างแล้ว {employer.placementCount} คน</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1">
                              <Eye className="w-4 h-4 mr-2" />
                              ดูรายละเอียด
                            </Button>
                            <Button size="sm" className="flex-1">
                              <Target className="w-4 h-4 mr-2" />
                              จับคู่
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="confirmation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>การยืนยันข้อมูล</CardTitle>
                  <CardDescription>จัดการการยืนยันข้อมูลนักศึกษาและภาควิชา</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="text-2xl font-bold text-blue-800 mb-2">2,547</h3>
                      <p className="text-blue-700">ข้อมูลทั้งหมด</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                      <h3 className="text-2xl font-bold text-green-800 mb-2">1,892</h3>
                      <p className="text-green-700">ยืนยันแล้ว</p>
                    </div>
                    <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h3 className="text-2xl font-bold text-yellow-800 mb-2">655</h3>
                      <p className="text-yellow-700">รอการยืนยัน</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">อัตราการยืนยัน</span>
                      <span className="text-sm text-muted-foreground">74.3%</span>
                    </div>
                    <Progress value={74.3} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>ข้อมูลเชิงลึก</CardTitle>
                  <CardDescription>การวิเคราะห์และคำแนะนำเพื่อพัฒนานักศึกษาและระบบ</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">อัตราการมีงานทำตามภาควิชา</h4>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>วิศวกรรมคอมพิวเตอร์</span>
                            <span className="font-medium">95%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>วิศวกรรมไฟฟ้า</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>วิศวกรรมเครื่องกล</span>
                            <span className="font-medium">88%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>วิศวกรรมโยธา</span>
                            <span className="font-medium">85%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>วิศวกรรมอุตสาหการ</span>
                            <span className="font-medium">82%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "82%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4">สถิติการยืนยันข้อมูล</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-2xl font-bold text-blue-800">2,547</p>
                            <p className="text-sm text-blue-700">ข้อมูลทั้งหมด</p>
                          </div>
                          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                            <p className="text-2xl font-bold text-green-800">1,892</p>
                            <p className="text-sm text-green-700">ยืนยันแล้ว</p>
                          </div>
                        </div>
                        <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <p className="text-2xl font-bold text-yellow-800">655</p>
                          <p className="text-sm text-yellow-700">รอการยืนยัน</p>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <p className="text-2xl font-bold text-purple-800">74.3%</p>
                          <p className="text-sm text-purple-700">อัตราการยืนยัน</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-semibold mb-4">คำแนะนำสำหรับการพัฒนา</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h5 className="font-medium text-blue-800 mb-2">สำหรับนักศึกษา</h5>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• เข้าร่วมกิจกรรมการนำเสนอและฝึกฝนการพูด</li>
                          <li>• ใช้เครื่องมือจัดการเวลาและวางแผนการทำงาน</li>
                          <li>• ฝึกทักษะการทำงานเป็นทีมผ่านโปรเจคกลุ่ม</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h5 className="font-medium text-purple-800 mb-2">สำหรับสถาบัน</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• เพิ่มหลักสูตร Soft Skills ในหลักสูตร</li>
                          <li>• จัดกิจกรรมฝึกทักษะการนำเสนอ</li>
                          <li>• สร้างความร่วมมือกับบริษัทเพิ่มเติม</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
