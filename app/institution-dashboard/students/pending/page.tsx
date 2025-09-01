"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  ArrowLeft, 
  Search, 
  Check, 
  X, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Building2,
  AlertCircle,
  CheckCircle,
  Clock,
  Eye
} from "lucide-react"
import Link from "next/link"

interface PendingStudent {
  id: string
  name: string
  email: string
  phone: string
  studentId: string
  department: string
  year: number
  birthDate: string
  address: string
  emergencyContact: string
  emergencyPhone: string
  notes: string
  status: string
  createdAt: string
  institutionId: string
}

export default function PendingStudentsPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [searchTerm, setSearchTerm] = useState("")
  const [pendingStudents, setPendingStudents] = useState<PendingStudent[]>([])
  const [processingId, setProcessingId] = useState<string | null>(null)

  useEffect(() => {
    if (!user || user.type !== "institution") {
      router.push("/institution-login")
      return
    }
    loadPendingStudents()
  }, [user, router])

  const loadPendingStudents = () => {
    const allStudents = JSON.parse(localStorage.getItem("students") || "[]")
    const pending = allStudents.filter((student: PendingStudent) => 
      student.status === "pending" && student.institutionId === user?.id
    )
    setPendingStudents(pending)
  }

  const handleApprove = async (studentId: string) => {
    setProcessingId(studentId)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const allStudents = JSON.parse(localStorage.getItem("students") || "[]")
      const updatedStudents = allStudents.map((student: PendingStudent) =>
        student.id === studentId 
          ? { ...student, status: "active", approvedAt: new Date().toISOString() }
          : student
      )
      
      localStorage.setItem("students", JSON.stringify(updatedStudents))
      loadPendingStudents()
      
    } catch (error) {
      console.error("Error approving student:", error)
    } finally {
      setProcessingId(null)
    }
  }

  const handleReject = async (studentId: string) => {
    if (!confirm("คุณแน่ใจหรือไม่ที่จะปฏิเสธการสมัครนี้?")) return
    
    setProcessingId(studentId)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const allStudents = JSON.parse(localStorage.getItem("students") || "[]")
      const updatedStudents = allStudents.map((student: PendingStudent) =>
        student.id === studentId 
          ? { ...student, status: "rejected", rejectedAt: new Date().toISOString() }
          : student
      )
      
      localStorage.setItem("students", JSON.stringify(updatedStudents))
      loadPendingStudents()
      
    } catch (error) {
      console.error("Error rejecting student:", error)
    } finally {
      setProcessingId(null)
    }
  }

  const filteredStudents = pendingStudents.filter((student) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.studentId.toLowerCase().includes(searchLower) ||
      student.email.toLowerCase().includes(searchLower) ||
      student.department.toLowerCase().includes(searchLower)
    )
  })

  if (!user || user.type !== "institution") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/institution-dashboard/students"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับไปจัดการนักศึกษา
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">นักศึกษารอการยืนยัน</h1>
            <p className="text-muted-foreground">ตรวจสอบและยืนยันข้อมูลนักศึกษาที่สมัครเข้าระบบ</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{pendingStudents.length}</p>
                    <p className="text-sm text-muted-foreground">รอการยืนยัน</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-sm text-muted-foreground">อนุมัติวันนี้</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">0</p>
                    <p className="text-sm text-muted-foreground">ปฏิเสธวันนี้</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="ค้นหาตามชื่อ รหัสนักศึกษา อีเมล หรือภาควิชา..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Pending Students List */}
          {filteredStudents.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">ไม่มีนักศึกษารอการยืนยัน</h3>
                <p className="text-muted-foreground">
                  {searchTerm ? "ไม่พบผลลัพธ์ที่ตรงกับการค้นหา" : "ขณะนี้ไม่มีนักศึกษาที่รอการยืนยัน"}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredStudents.map((student) => (
                <Card key={student.id} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-lg">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      {/* Student Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {student.name}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                {student.studentId}
                              </span>
                              <span className="flex items-center gap-1">
                                <Building2 className="w-4 h-4" />
                                {student.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                ปี {student.year}
                              </span>
                            </div>
                          </div>
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <Clock className="w-3 h-3 mr-1" />
                            รอการยืนยัน
                          </Badge>
                        </div>

                        {/* Contact Info */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{student.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{student.phone}</span>
                          </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                          <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-foreground">วันเกิด:</span>
                              <span className="ml-2 text-muted-foreground">
                                {new Date(student.birthDate).toLocaleDateString('th-TH')}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-foreground">ผู้ติดต่อฉุกเฉิน:</span>
                              <span className="ml-2 text-muted-foreground">
                                {student.emergencyContact} ({student.emergencyPhone})
                              </span>
                            </div>
                            <div className="md:col-span-2">
                              <span className="font-medium text-foreground">ที่อยู่:</span>
                              <span className="ml-2 text-muted-foreground">{student.address}</span>
                            </div>
                            {student.notes && (
                              <div className="md:col-span-2">
                                <span className="font-medium text-foreground">หมายเหตุ:</span>
                                <span className="ml-2 text-muted-foreground">{student.notes}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Application Date */}
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                          <Calendar className="w-3 h-3" />
                          สมัครเมื่อ: {new Date(student.createdAt).toLocaleDateString('th-TH', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleApprove(student.id)}
                            disabled={processingId === student.id}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {processingId === student.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                กำลังอนุมัติ...
                              </>
                            ) : (
                              <>
                                <Check className="w-4 h-4 mr-2" />
                                อนุมัติ
                              </>
                            )}
                          </Button>
                          
                          <Button
                            variant="destructive"
                            onClick={() => handleReject(student.id)}
                            disabled={processingId === student.id}
                          >
                            {processingId === student.id ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                กำลังปฏิเสธ...
                              </>
                            ) : (
                              <>
                                <X className="w-4 h-4 mr-2" />
                                ปฏิเสธ
                              </>
                            )}
                          </Button>

                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            ดูรายละเอียด
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
