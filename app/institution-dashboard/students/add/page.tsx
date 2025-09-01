"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Building2, 
  FileText,
  Upload,
  AlertCircle,
  CheckCircle,
  Plus
} from "lucide-react"
import Link from "next/link"

interface NewStudent {
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
}

export default function AddStudentPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const [newStudent, setNewStudent] = useState<NewStudent>({
    name: "",
    email: "",
    phone: "",
    studentId: "",
    department: "",
    year: 1,
    birthDate: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    notes: ""
  })

  const departments = [
    "วิศวกรรมคอมพิวเตอร์",
    "วิศวกรรมไฟฟ้า", 
    "วิศวกรรมเครื่องกล",
    "วิศวกรรมโยธา",
    "วิศวกรรมเคมี",
    "วิศวกรรมอุตสาหการ"
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!newStudent.name.trim()) newErrors.name = "กรุณากรอกชื่อ-นามสกุล"
    if (!newStudent.email.trim()) newErrors.email = "กรุณากรอกอีเมล"
    if (!newStudent.email.includes("@")) newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง"
    if (!newStudent.phone.trim()) newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์"
    if (!newStudent.studentId.trim()) newErrors.studentId = "กรุณากรอกรหัสนักศึกษา"
    if (!newStudent.department) newErrors.department = "กรุณาเลือกภาควิชา"
    if (!newStudent.birthDate) newErrors.birthDate = "กรุณาเลือกวันเกิด"
    if (!newStudent.address.trim()) newErrors.address = "กรุณากรอกที่อยู่"
    if (!newStudent.emergencyContact.trim()) newErrors.emergencyContact = "กรุณากรอกชื่อผู้ติดต่อฉุกเฉิน"
    if (!newStudent.emergencyPhone.trim()) newErrors.emergencyPhone = "กรุณากรอกเบอร์ติดต่อฉุกเฉิน"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Add student to localStorage (mock database)
      const existingStudents = JSON.parse(localStorage.getItem("students") || "[]")
      const studentWithId = {
        ...newStudent,
        id: Date.now().toString(),
        status: "pending", // รอการยืนยัน
        createdAt: new Date().toISOString(),
        institutionId: user?.id || "1"
      }
      
      existingStudents.push(studentWithId)
      localStorage.setItem("students", JSON.stringify(existingStudents))
      
      setShowSuccess(true)
      
      // Reset form
      setNewStudent({
        name: "",
        email: "",
        phone: "",
        studentId: "",
        department: "",
        year: 1,
        birthDate: "",
        address: "",
        emergencyContact: "",
        emergencyPhone: "",
        notes: ""
      })
      
      // Redirect after success
      setTimeout(() => {
        router.push("/institution-dashboard/students")
      }, 2000)
      
    } catch (error) {
      console.error("Error adding student:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof NewStudent, value: string | number) => {
    setNewStudent(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">เพิ่มนักศึกษาสำเร็จ!</h2>
            <p className="text-muted-foreground mb-4">
              ข้อมูลนักศึกษาถูกเพิ่มเข้าระบบแล้ว<br />
              รอการยืนยันจากผู้ดูแลระบบ
            </p>
            <Button onClick={() => router.push("/institution-dashboard/students")}>
              กลับไปจัดการนักศึกษา
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/institution-dashboard/students"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับไปจัดการนักศึกษา
            </Link>
            <h1 className="text-3xl font-bold text-foreground mb-2">เพิ่มนักศึกษาใหม่</h1>
            <p className="text-muted-foreground">กรอกข้อมูลนักศึกษาเพื่อเพิ่มเข้าสู่ระบบ</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  ข้อมูลส่วนตัว
                </CardTitle>
                <CardDescription>
                  ข้อมูลพื้นฐานของนักศึกษา
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                    <Input
                      id="name"
                      value={newStudent.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="กรอกชื่อ-นามสกุล"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentId">รหัสนักศึกษา *</Label>
                    <Input
                      id="studentId"
                      value={newStudent.studentId}
                      onChange={(e) => handleInputChange("studentId", e.target.value)}
                      placeholder="เช่น 66010001"
                      className={errors.studentId ? "border-red-500" : ""}
                    />
                    {errors.studentId && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.studentId}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">อีเมล *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newStudent.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="student@university.ac.th"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                    <Input
                      id="phone"
                      value={newStudent.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="08X-XXX-XXXX"
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthDate">วันเกิด *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={newStudent.birthDate}
                      onChange={(e) => handleInputChange("birthDate", e.target.value)}
                      className={errors.birthDate ? "border-red-500" : ""}
                    />
                    {errors.birthDate && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.birthDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">ที่อยู่ *</Label>
                  <Textarea
                    id="address"
                    value={newStudent.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="กรอกที่อยู่ปัจจุบัน"
                    className={errors.address ? "border-red-500" : ""}
                    rows={3}
                  />
                  {errors.address && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.address}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  ข้อมูลการศึกษา
                </CardTitle>
                <CardDescription>
                  ข้อมูลเกี่ยวกับการศึกษา
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="department">ภาควิชา *</Label>
                    <Select
                      value={newStudent.department}
                      onValueChange={(value) => handleInputChange("department", value)}
                    >
                      <SelectTrigger className={errors.department ? "border-red-500" : ""}>
                        <SelectValue placeholder="เลือกภาควิชา" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>
                            {dept}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.department && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.department}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">ชั้นปี</Label>
                    <Select
                      value={newStudent.year.toString()}
                      onValueChange={(value) => handleInputChange("year", parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกชั้นปี" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">ปี 1</SelectItem>
                        <SelectItem value="2">ปี 2</SelectItem>
                        <SelectItem value="3">ปี 3</SelectItem>
                        <SelectItem value="4">ปี 4</SelectItem>
                        <SelectItem value="5">ปี 5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  ผู้ติดต่อฉุกเฉิน
                </CardTitle>
                <CardDescription>
                  ข้อมูลผู้ติดต่อในกรณีฉุกเฉิน
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">ชื่อผู้ติดต่อฉุกเฉิน *</Label>
                    <Input
                      id="emergencyContact"
                      value={newStudent.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      placeholder="ชื่อผู้ปกครอง/ญาติ"
                      className={errors.emergencyContact ? "border-red-500" : ""}
                    />
                    {errors.emergencyContact && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.emergencyContact}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">เบอร์ติดต่อฉุกเฉิน *</Label>
                    <Input
                      id="emergencyPhone"
                      value={newStudent.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      placeholder="08X-XXX-XXXX"
                      className={errors.emergencyPhone ? "border-red-500" : ""}
                    />
                    {errors.emergencyPhone && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.emergencyPhone}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  หมายเหตุเพิ่มเติม
                </CardTitle>
                <CardDescription>
                  ข้อมูลเพิ่มเติม (ไม่บังคับ)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="notes">หมายเหตุ</Label>
                  <Textarea
                    id="notes"
                    value={newStudent.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="ข้อมูลเพิ่มเติมเกี่ยวกับนักศึกษา"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/institution-dashboard/students")}
              >
                ยกเลิก
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-32"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    กำลังเพิ่ม...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มนักศึกษา
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
