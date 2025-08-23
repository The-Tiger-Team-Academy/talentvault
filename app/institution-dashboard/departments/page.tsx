"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Plus,
  Users,
  GraduationCap,
  Building2,
  TrendingUp,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [newDepartment, setNewDepartment] = useState({
    name: "",
    head: "",
    description: "",
  })
  const router = useRouter()

  const filteredDepartments = mockDepartments.filter((dept) =>
    dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dept.head.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddDepartment = () => {
    // Add department logic here
    setShowAddForm(false)
    setNewDepartment({ name: "", head: "", description: "" })
  }

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
            <Button variant="default" onClick={() => setShowAddForm(true)}>
              <Plus className="w-4 h-4 mr-2" />
              เพิ่มภาควิชา
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">จัดการภาควิชา</h1>
          <p className="text-muted-foreground">จัดการข้อมูลภาควิชาและติดตามผลการดำเนินงาน</p>
        </div>

        {/* Add Department Form */}
        {showAddForm && (
          <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>เพิ่มภาควิชาใหม่</CardTitle>
              <CardDescription>กรอกข้อมูลภาควิชาที่ต้องการเพิ่ม</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">ชื่อภาควิชา</label>
                  <Input
                    value={newDepartment.name}
                    onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
                    placeholder="เช่น วิศวกรรมคอมพิวเตอร์"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">หัวหน้าภาควิชา</label>
                  <Input
                    value={newDepartment.head}
                    onChange={(e) => setNewDepartment({ ...newDepartment, head: e.target.value })}
                    placeholder="ชื่อ-นามสกุล หัวหน้าภาควิชา"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">รายละเอียด</label>
                  <Textarea
                    value={newDepartment.description}
                    onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
                    placeholder="รายละเอียดเกี่ยวกับภาควิชา"
                    rows={4}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setShowAddForm(false)}>
                    ยกเลิก
                  </Button>
                  <Button variant="default" onClick={handleAddDepartment}>
                    เพิ่มภาควิชา
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search */}
        <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="ค้นหาตามชื่อภาควิชาหรือหัวหน้าภาควิชา..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Department Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDepartments.map((dept, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all">
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
                <div className="space-y-6">
                  <p className="text-muted-foreground text-sm">{dept.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">นักศึกษา: {dept.studentCount} คน</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">จบการศึกษา: {dept.graduateCount} คน</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">มีงานทำ: {dept.employedCount} คน</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">อัตราการมีงานทำ: {dept.employmentRate}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {dept.verified ? (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-destructive" />
                        )}
                        <span className="text-sm text-muted-foreground">
                          {dept.verified ? "ยืนยันแล้ว" : "รอการยืนยัน"}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">อัพเดตล่าสุด: {dept.lastUpdated}</div>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDepartments.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">ไม่พบข้อมูลภาควิชา</h3>
            <p className="text-muted-foreground mb-4">ลองค้นหาด้วยคำค้นอื่น หรือเพิ่มภาควิชาใหม่</p>
            <Button variant="outline" onClick={() => setSearchTerm("")}>
              ล้างการค้นหา
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

const mockDepartments = [
  {
    name: "วิศวกรรมคอมพิวเตอร์",
    head: "ดร. สมชาย ใจดี",
    description:
      "ภาควิชาวิศวกรรมคอมพิวเตอร์มุ่งเน้นการพัฒนาบัณฑิตให้มีความเชี่ยวชาญในด้านวิศวกรรมคอมพิวเตอร์ ทั้งด้านฮาร์ดแวร์และซอฟต์แวร์ เพื่อตอบสนองความต้องการของภาคอุตสาหกรรมและเทคโนโลยีที่เปลี่ยนแปลงอย่างรวดเร็ว",
    status: "active",
    studentCount: 450,
    graduateCount: 120,
    employedCount: 114,
    employmentRate: 95,
    verified: true,
    lastUpdated: "2 วันที่แล้ว",
  },
  {
    name: "วิศวกรรมไฟฟ้า",
    head: "ดร. สมหญิง รักดี",
    description:
      "ภาควิชาวิศวกรรมไฟฟ้าเน้นการผลิตบัณฑิตที่มีความรู้ความสามารถในด้านวิศวกรรมไฟฟ้า ทั้งด้านระบบไฟฟ้ากำลัง อิเล็กทรอนิกส์ และการสื่อสาร เพื่อรองรับการพัฒนาโครงสร้างพื้นฐานของประเทศ",
    status: "active",
    studentCount: 380,
    graduateCount: 95,
    employedCount: 87,
    employmentRate: 92,
    verified: true,
    lastUpdated: "1 สัปดาห์ที่แล้ว",
  },
  {
    name: "วิศวกรรมเครื่องกล",
    head: "ดร. มานะ ทำดี",
    description:
      "ภาควิชาวิศวกรรมเครื่องกลมุ่งผลิตวิศวกรเครื่องกลที่มีความรู้ความสามารถในการออกแบบ วิเคราะห์ และพัฒนาระบบเครื่องกล เพื่อตอบสนองความต้องการของภาคอุตสาหกรรมการผลิตและพลังงาน",
    status: "active",
    studentCount: 420,
    graduateCount: 105,
    employedCount: 92,
    employmentRate: 88,
    verified: true,
    lastUpdated: "3 วันที่แล้ว",
  },
  {
    name: "วิศวกรรมโยธา",
    head: "ดร. สมศักดิ์ ศักดิ์ศรี",
    description:
      "ภาควิชาวิศวกรรมโยธามุ่งเน้นการผลิตบัณฑิตที่มีความเชี่ยวชาญในการออกแบบและก่อสร้างโครงสร้างพื้นฐาน อาคาร และระบบขนส่ง เพื่อการพัฒนาโครงสร้างพื้นฐานของประเทศอย่างยั่งยืน",
    status: "active",
    studentCount: 350,
    graduateCount: 88,
    employedCount: 75,
    employmentRate: 85,
    verified: false,
    lastUpdated: "5 วันที่แล้ว",
  },
]
