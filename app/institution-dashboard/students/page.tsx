"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Filter,
  FileSpreadsheet,
  Upload,
  GraduationCap,
  Building2,
  Calendar,
  Mail,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const [yearFilter, setYearFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const router = useRouter()

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment = !departmentFilter || student.department === departmentFilter
    const matchesYear = !yearFilter || student.year === parseInt(yearFilter)
    const matchesStatus = !statusFilter || student.status === statusFilter

    return matchesSearch && matchesDepartment && matchesYear && matchesStatus
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/institution-dashboard"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับไปยังแดชบอร์ด
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <FileSpreadsheet className="w-4 h-4 mr-2" />
                ดาวน์โหลด CSV
              </Button>
              <Link href="/institution-dashboard/upload">
                <Button variant="default">
                  <Upload className="w-4 h-4 mr-2" />
                  อัพโหลดข้อมูล
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">จัดการข้อมูลนักศึกษา</h1>
          <p className="text-muted-foreground">ค้นหา แก้ไข และจัดการข้อมูลนักศึกษาทั้งหมด</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="ค้นหาตามชื่อ รหัสนักศึกษา หรืออีเมล..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  ตัวกรอง
                </Button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">ภาควิชา</label>
                    <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="ทุกภาควิชา" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">ทุกภาควิชา</SelectItem>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">ชั้นปี</label>
                    <Select value={yearFilter} onValueChange={setYearFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="ทุกชั้นปี" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">ทุกชั้นปี</SelectItem>
                        {[1, 2, 3, 4].map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            ชั้นปีที่ {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">สถานะ</label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="ทุกสถานะ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">ทุกสถานะ</SelectItem>
                        <SelectItem value="active">กำลังศึกษา</SelectItem>
                        <SelectItem value="graduated">จบการศึกษา</SelectItem>
                        <SelectItem value="inactive">พ้นสภาพ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {filteredStudents.map((student, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{student.name}</h3>
                        <p className="text-muted-foreground">รหัสนักศึกษา: {student.studentId}</p>
                      </div>
                      <Badge
                        variant={
                          student.status === "active"
                            ? "default"
                            : student.status === "graduated"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {student.status === "active"
                          ? "กำลังศึกษา"
                          : student.status === "graduated"
                            ? "จบการศึกษา"
                            : "พ้นสภาพ"}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          {student.department}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="w-4 h-4" />
                          ชั้นปีที่ {student.year} • เกรดเฉลี่ย {student.gpa.toFixed(2)}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          {student.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          คาดว่าจะจบ: {student.expectedGraduation}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {student.verified ? (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-destructive" />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {student.verified ? "ยืนยันแล้ว" : "รอการยืนยัน"}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground">อัพเดตล่าสุด: {student.lastUpdated}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-2" />
                          แก้ไข
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4 mr-2" />
                          ลบ
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">ไม่พบข้อมูลนักศึกษา</h3>
            <p className="text-muted-foreground mb-4">ลองปรับเกณฑ์การค้นหาหรือตัวกรองของคุณ</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setDepartmentFilter("")
                setYearFilter("")
                setStatusFilter("")
              }}
            >
              ล้างตัวกรองทั้งหมด
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

const departments = [
  "วิศวกรรมคอมพิวเตอร์",
  "วิศวกรรมไฟฟ้า",
  "วิศวกรรมเครื่องกล",
  "วิศวกรรมโยธา",
  "วิศวกรรมอุตสาหการ",
]

const mockStudents = [
  {
    name: "นายธนกร รักเรียน",
    studentId: "64110001",
    department: "วิศวกรรมคอมพิวเตอร์",
    year: 3,
    gpa: 3.75,
    email: "thanakorn.r@university.ac.th",
    expectedGraduation: "พฤษภาคม 2025",
    status: "active",
    verified: true,
    lastUpdated: "2 วันที่แล้ว",
  },
  {
    name: "นางสาวสมหญิง ใจดี",
    studentId: "64110002",
    department: "วิศวกรรมไฟฟ้า",
    year: 3,
    gpa: 3.50,
    email: "somying.j@university.ac.th",
    expectedGraduation: "พฤษภาคม 2025",
    status: "active",
    verified: false,
    lastUpdated: "1 สัปดาห์ที่แล้ว",
  },
  {
    name: "นายสมชาย มานะ",
    studentId: "63110001",
    department: "วิศวกรรมเครื่องกล",
    year: 4,
    gpa: 3.25,
    email: "somchai.m@university.ac.th",
    expectedGraduation: "พฤษภาคม 2024",
    status: "active",
    verified: true,
    lastUpdated: "3 วันที่แล้ว",
  },
  {
    name: "นางสาวรักษ์ดี มีสุข",
    studentId: "62110001",
    department: "วิศวกรรมโยธา",
    year: 4,
    gpa: 3.90,
    email: "rakdee.m@university.ac.th",
    expectedGraduation: "พฤษภาคม 2024",
    status: "graduated",
    verified: true,
    lastUpdated: "1 เดือนที่แล้ว",
  },
]
