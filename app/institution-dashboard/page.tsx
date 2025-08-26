"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { localStorageService } from "@/lib/local-storage-service"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
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
  Calendar,
  Edit,
  Trash2,
  X
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
  const [students, setStudents] = useState<any[]>([])
  const [employers, setEmployers] = useState<any[]>([])
  const [departments, setDepartments] = useState<any[]>([])
  const [recentActivities, setRecentActivities] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredStudents, setFilteredStudents] = useState<any[]>([])
  const [filteredEmployers, setFilteredEmployers] = useState<any[]>([])
  const [filteredDepartments, setFilteredDepartments] = useState<any[]>([])
  const [showUploadDialog, setShowUploadDialog] = useState(false)
  const [uploadFile, setUploadFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [showDeptUploadDialog, setShowDeptUploadDialog] = useState(false)
  const [deptUploadFile, setDeptUploadFile] = useState<File | null>(null)
  const [deptUploadProgress, setDeptUploadProgress] = useState(0)
  const [isDeptUploading, setIsDeptUploading] = useState(false)
  const [showAddDeptDialog, setShowAddDeptDialog] = useState(false)
  const [newDept, setNewDept] = useState<any>({ name: "", headOfDepartment: "", studentCount: "", employmentRate: "", confirmedData: "", description: "" })

  useEffect(() => {
    // Load data from localStorage service
    const loadData = () => {
      const studentsData = localStorageService.getStudents()
      const employersData = localStorageService.getEmployers()
      const departmentsData = localStorageService.getDepartments()
      const activitiesData = localStorageService.getRecentActivities()
      
      setStudents(studentsData)
      setEmployers(employersData)
      setDepartments(departmentsData)
      setRecentActivities(activitiesData)
      
      setFilteredStudents(studentsData)
      setFilteredEmployers(employersData)
      setFilteredDepartments(departmentsData)
    }
    
    loadData()
  }, [])

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredStudents(students)
      setFilteredEmployers(employers)
      setFilteredDepartments(departments)
      return
    }
    
    const filteredStudentsData = localStorageService.searchStudents(searchTerm)
    const filteredEmployersData = localStorageService.searchEmployers(searchTerm)
    const filteredDepartmentsData = localStorageService.searchDepartments(searchTerm)
    
    setFilteredStudents(filteredStudentsData)
    setFilteredEmployers(filteredEmployersData)
    setFilteredDepartments(filteredDepartmentsData)
  }, [searchTerm, students, employers, departments])

  // CRUD operations for students
  const handleCreateStudent = (studentData: any) => {
    const newStudent = localStorageService.createStudent(studentData)
    setStudents(prev => [...prev, newStudent])
    setFilteredStudents(prev => [...prev, newStudent])
    
    // Add to recent activities
    localStorageService.createRecentActivity({
      type: "create",
      title: "เพิ่มนักศึกษาใหม่",
      description: `เพิ่มนักศึกษาใหม่: ${newStudent.name}`,
      timestamp: "เพิ่งนี้",
      icon: "create",
      userId: "admin1",
      userName: "ผู้ดูแลระบบ"
    })
  }

  const handleUpdateStudent = (id: string, updates: any) => {
    const updatedStudent = localStorageService.updateStudent(id, updates)
    if (updatedStudent) {
      setStudents(prev => prev.map(s => s.id === id ? updatedStudent : s))
      setFilteredStudents(prev => prev.map(s => s.id === id ? updatedStudent : s))
      
      // Add to recent activities
      localStorageService.createRecentActivity({
        type: "update",
        title: "อัพเดตข้อมูลนักศึกษา",
        description: `อัพเดตข้อมูลนักศึกษา: ${updatedStudent.name}`,
        timestamp: "เพิ่งนี้",
        icon: "update",
        userId: "admin1",
        userName: "ผู้ดูแลระบบ"
      })
    }
  }

  const handleDeleteStudent = (id: string) => {
    const student = students.find(s => s.id === id)
    if (student && localStorageService.deleteStudent(id)) {
      setStudents(prev => prev.filter(s => s.id !== id))
      setFilteredStudents(prev => prev.filter(s => s.id !== id))
      
      // Add to recent activities
      localStorageService.createRecentActivity({
        type: "delete",
        title: "ลบข้อมูลนักศึกษา",
        description: `ลบข้อมูลนักศึกษา: ${student.name}`,
        timestamp: "เพิ่งนี้",
        icon: "delete",
        userId: "admin1",
        userName: "ผู้ดูแลระบบ"
      })
    }
  }

  // CRUD operations for departments
  const handleCreateDepartment = (departmentData: any) => {
    const newDepartment = localStorageService.createDepartment(departmentData)
    setDepartments(prev => [...prev, newDepartment])
    setFilteredDepartments(prev => [...prev, newDepartment])
    
    // Add to recent activities
    localStorageService.createRecentActivity({
      type: "create",
      title: "เพิ่มภาควิชาใหม่",
      description: `เพิ่มภาควิชาใหม่: ${newDepartment.name}`,
      timestamp: "เพิ่งนี้",
      icon: "create",
      userId: "admin1",
      userName: "ผู้ดูแลระบบ"
    })
  }

  const handleUpdateDepartment = (id: string, updates: any) => {
    const updatedDepartment = localStorageService.updateDepartment(id, updates)
    if (updatedDepartment) {
      setDepartments(prev => prev.map(d => d.id === id ? updatedDepartment : d))
      setFilteredDepartments(prev => prev.map(d => d.id === id ? updatedDepartment : d))
      
      // Add to recent activities
      localStorageService.createRecentActivity({
        type: "update",
        title: "อัพเดตข้อมูลภาควิชา",
        description: `อัพเดตข้อมูลภาควิชา: ${updatedDepartment.name}`,
        timestamp: "เพิ่งนี้",
        icon: "update",
        userId: "admin1",
        userName: "ผู้ดูแลระบบ"
      })
    }
  }

  const handleDeleteDepartment = (id: string) => {
    const department = departments.find(d => d.id === id)
    if (department && localStorageService.deleteDepartment(id)) {
      setDepartments(prev => prev.filter(d => d.id !== id))
      setFilteredDepartments(prev => prev.filter(d => d.id !== id))
      
      // Add to recent activities
      localStorageService.createRecentActivity({
        type: "delete",
        title: "ลบข้อมูลภาควิชา",
        description: `ลบข้อมูลภาควิชา: ${department.name}`,
        timestamp: "เพิ่งนี้",
        icon: "delete",
        userId: "admin1",
        userName: "ผู้ดูแลระบบ"
      })
    }
  }

  // Department upload/add handlers
  const handleDeptFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) setDeptUploadFile(f)
  }

  const handleDeptUpload = async () => {
    if (!deptUploadFile) return
    setIsDeptUploading(true)
    setDeptUploadProgress(0)
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(r => setTimeout(r, 100))
      setDeptUploadProgress(i)
    }
    // Simulate parsed CSV -> departments
    const imported = [
      { name: "เทคโนโลยีสารสนเทศ", headOfDepartment: "ดร. อนุชา ดีใจ", studentCount: 300, employmentRate: 90, confirmedData: 270, status: "active" as const, description: "ภาควิชาด้านไอทีและดิจิทัล" },
      { name: "ข้อมูลและวิทยาการข้อมูล", headOfDepartment: "ดร. ศศิธร วิจัย", studentCount: 220, employmentRate: 88, confirmedData: 200, status: "active" as const, description: "ภาควิชาดาต้าไซเอนซ์" },
    ]
    imported.forEach(d => handleCreateDepartment(d))

    localStorageService.createRecentActivity({
      type: "upload",
      title: "อัพโหลดภาควิชาสำเร็จ",
      description: `อัพโหลดภาควิชาใหม่ ${imported.length} รายการจากไฟล์ ${deptUploadFile.name}`,
      timestamp: "เพิ่งนี้",
      icon: "upload",
      userId: "admin1",
      userName: "ผู้ดูแลระบบ"
    })

    setIsDeptUploading(false)
    setDeptUploadProgress(0)
    setDeptUploadFile(null)
    setShowDeptUploadDialog(false)
  }

  const handleAddDepartment = () => {
    if (!newDept.name || !newDept.headOfDepartment) return
    const payload = {
      name: newDept.name,
      headOfDepartment: newDept.headOfDepartment,
      studentCount: Number(newDept.studentCount) || 0,
      employmentRate: Number(newDept.employmentRate) || 0,
      confirmedData: Number(newDept.confirmedData) || 0,
      status: "active" as const,
      description: newDept.description || ""
    }
    handleCreateDepartment(payload)
    setNewDept({ name: "", headOfDepartment: "", studentCount: "", employmentRate: "", confirmedData: "", description: "" })
    setShowAddDeptDialog(false)
  }

  // Upload and Download functions
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadFile(file)
    }
  }

  const handleUpload = async () => {
    if (!uploadFile) return
    
    setIsUploading(true)
    setUploadProgress(0)
    
    // Simulate file upload process
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 100))
      setUploadProgress(i)
    }
    
    // Simulate processing the uploaded file
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Add sample students from uploaded file (simulation)
    const sampleStudents = [
      {
        name: "นักศึกษาใหม่ 1",
        studentId: "6401234572",
        major: "วิทยาการคอมพิวเตอร์",
        year: 2,
        gpa: 3.75,
        skills: ["JavaScript", "HTML", "CSS"],
        strengths: ["การเขียนโค้ด", "การแก้ปัญหา"],
        weaknesses: ["การนำเสนอ", "การจัดการเวลา"],
        status: "active" as const,
        email: "student1@student.ac.th",
        phone: "086-123-4567",
        address: "123 ถนนใหม่, กรุงเทพฯ"
      },
      {
        name: "นักศึกษาใหม่ 2",
        studentId: "6401234573",
        major: "การออกแบบกราฟิก",
        year: 1,
        gpa: 3.80,
        skills: ["Photoshop", "Illustrator"],
        strengths: ["ความคิดสร้างสรรค์", "การออกแบบ"],
        weaknesses: ["การเขียนโค้ด", "การวิเคราะห์"],
        status: "active" as const,
        email: "student2@student.ac.th",
        phone: "087-234-5678",
        address: "456 ถนนใหม่, กรุงเทพฯ"
      }
    ]
    
    // Add new students
    sampleStudents.forEach(studentData => {
      handleCreateStudent(studentData)
    })
    
    // Add to recent activities
    localStorageService.createRecentActivity({
      type: "upload",
      title: "อัพโหลดข้อมูลสำเร็จ",
      description: `อัพโหลดข้อมูลนักศึกษาใหม่ ${sampleStudents.length} คนจากไฟล์ ${uploadFile.name}`,
      timestamp: "เพิ่งนี้",
      icon: "upload",
      userId: "admin1",
      userName: "ผู้ดูแลระบบ"
    })
    
    setIsUploading(false)
    setUploadProgress(0)
    setUploadFile(null)
    setShowUploadDialog(false)
  }

  const handleDownloadCSV = () => {
    // Create CSV content
    const headers = ["รหัสนักศึกษา", "ชื่อ", "สาขา", "ปีที่", "GPA", "สถานะ", "อีเมล", "เบอร์โทร"]
    const csvContent = [
      headers.join(","),
      ...students.map(student => [
        student.studentId,
        student.name,
        student.major,
        student.year,
        student.gpa,
        student.status,
        student.email,
        student.phone
      ].join(","))
    ].join("\n")
    
    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `students_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Add to recent activities
    localStorageService.createRecentActivity({
      type: "download",
      title: "ดาวน์โหลดข้อมูลสำเร็จ",
      description: `ดาวน์โหลดข้อมูลนักศึกษา ${students.length} คนเป็นไฟล์ CSV`,
      timestamp: "เพิ่งนี้",
      icon: "download",
      userId: "admin1",
      userName: "ผู้ดูแลระบบ"
    })
  }

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
                  <Input
                    placeholder="ค้นหานักศึกษา..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                  <Button variant="outline" onClick={handleDownloadCSV}>
                    <Download className="w-4 h-4 mr-2" />
                    ดาวน์โหลด CSV
                  </Button>
                  <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Upload className="w-4 h-4 mr-2" />
                        อัพโหลดข้อมูล
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>อัพโหลดข้อมูลนักศึกษา</DialogTitle>
                        <DialogDescription>
                          เลือกไฟล์ CSV หรือ Excel ที่มีข้อมูลนักศึกษา
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="file-upload">เลือกไฟล์</Label>
                          <Input
                            id="file-upload"
                            type="file"
                            accept=".csv,.xlsx,.xls"
                            onChange={handleFileUpload}
                            disabled={isUploading}
                          />
                          {uploadFile && (
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                              <FileText className="w-4 h-4 text-gray-600" />
                              <span className="text-sm text-gray-700">{uploadFile.name}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setUploadFile(null)}
                                disabled={isUploading}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                        
                        {isUploading && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>กำลังอัพโหลด...</span>
                              <span>{uploadProgress}%</span>
                            </div>
                            <Progress value={uploadProgress} className="w-full" />
                          </div>
                        )}
                        
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            onClick={() => setShowUploadDialog(false)}
                            disabled={isUploading}
                          >
                            ยกเลิก
                          </Button>
                          <Button
                            onClick={handleUpload}
                            disabled={!uploadFile || isUploading}
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                          >
                            {isUploading ? "กำลังอัพโหลด..." : "อัพโหลด"}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {filteredStudents.map((student) => (
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
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-2" />
                              แก้ไข
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteStudent(student.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              ลบ
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
                              {student.skills.slice(0, 4).map((skill: string, index: number) => (
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
                <div className="flex gap-3">
                  <Input
                    placeholder="ค้นหาภาควิชา..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                  <Dialog open={showDeptUploadDialog} onOpenChange={setShowDeptUploadDialog}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        อัพโหลด CSV
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>อัพโหลดภาควิชา (CSV)</DialogTitle>
                        <DialogDescription>อัพโหลดไฟล์ CSV ที่มีข้อมูลภาควิชา</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="dept-file">เลือกไฟล์</Label>
                          <Input id="dept-file" type="file" accept=".csv" onChange={handleDeptFileChange} disabled={isDeptUploading} />
                          {deptUploadFile && (
                            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border">
                              <FileText className="w-4 h-4 text-gray-600" />
                              <span className="text-sm text-gray-700">{deptUploadFile.name}</span>
                              <Button variant="ghost" size="sm" onClick={() => setDeptUploadFile(null)} disabled={isDeptUploading}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                        {isDeptUploading && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>กำลังอัพโหลด...</span>
                              <span>{deptUploadProgress}%</span>
                            </div>
                            <Progress value={deptUploadProgress} className="w-full" />
                          </div>
                        )}
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowDeptUploadDialog(false)} disabled={isDeptUploading}>ยกเลิก</Button>
                          <Button onClick={handleDeptUpload} disabled={!deptUploadFile || isDeptUploading} className="bg-primary text-primary-foreground hover:bg-primary/90">อัพโหลด</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={showAddDeptDialog} onOpenChange={setShowAddDeptDialog}>
                    <DialogTrigger asChild>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="w-4 h-4 mr-2" />
                  เพิ่มภาควิชา
                </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg">
                      <DialogHeader>
                        <DialogTitle>เพิ่มภาควิชาใหม่</DialogTitle>
                        <DialogDescription>กรอกข้อมูลภาควิชาให้ครบถ้วน</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="dept-name">ชื่อภาควิชา</Label>
                          <Input id="dept-name" value={newDept.name} onChange={(e) => setNewDept({ ...newDept, name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dept-head">หัวหน้าภาควิชา</Label>
                          <Input id="dept-head" value={newDept.headOfDepartment} onChange={(e) => setNewDept({ ...newDept, headOfDepartment: e.target.value })} />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dept-students">จำนวนนักศึกษา</Label>
                            <Input id="dept-students" type="number" value={newDept.studentCount} onChange={(e) => setNewDept({ ...newDept, studentCount: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dept-emprate">อัตราการมีงานทำ (%)</Label>
                            <Input id="dept-emprate" type="number" value={newDept.employmentRate} onChange={(e) => setNewDept({ ...newDept, employmentRate: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dept-confirmed">ข้อมูลที่ยืนยันแล้ว</Label>
                            <Input id="dept-confirmed" type="number" value={newDept.confirmedData} onChange={(e) => setNewDept({ ...newDept, confirmedData: e.target.value })} />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dept-desc">คำอธิบาย</Label>
                          <Input id="dept-desc" value={newDept.description} onChange={(e) => setNewDept({ ...newDept, description: e.target.value })} />
                        </div>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" onClick={() => setShowAddDeptDialog(false)}>ยกเลิก</Button>
                          <Button onClick={handleAddDepartment} className="bg-primary text-primary-foreground hover:bg-primary/90">บันทึก</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filteredDepartments.map((dept) => (
                  <Card key={dept.id} className="border-0 shadow-lg">
                  <CardHeader>
                      <div className="flex items-start justify-between">
                      <div>
                          <CardTitle className="text-lg">{dept.name}</CardTitle>
                          <CardDescription>หัวหน้าภาควิชา: {dept.headOfDepartment}</CardDescription>
                        </div>
                        <Badge className="bg-primary text-primary-foreground border-primary">
                          ใช้งาน
                        </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{dept.studentCount}</p>
                          <p className="text-xs text-muted-foreground">จำนวนนักศึกษา</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-secondary">{dept.employmentRate}%</p>
                          <p className="text-xs text-muted-foreground">อัตราการมีงานทำ</p>
                      </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">{dept.confirmedData}</p>
                          <p className="text-xs text-muted-foreground">ข้อมูลที่ยืนยันแล้ว</p>
                      </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-2" />
                            ดูรายละเอียด
                          </Button>
                        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                          <Edit className="w-4 h-4 mr-2" />
                          แก้ไข
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 text-red-600 hover:text-red-700"
                          onClick={() => handleDeleteDepartment(dept.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          ลบ
                          </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                      {filteredStudents
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
                      {filteredEmployers.map((employer) => (
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
