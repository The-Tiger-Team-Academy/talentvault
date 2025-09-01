"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"
import { localStorageService } from "@/lib/local-storage-service"

export default function EditStudentPage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useAuth()
  const [student, setStudent] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    studentId: "",
    major: "",
    year: 1,
    gpa: 0,
    skills: "",
    strengths: "",
    weaknesses: "",
    email: "",
    phone: "",
    address: ""
  })

  useEffect(() => {
    if (params.id) {
      const allStudents = localStorageService.getStudents()
      const foundStudent = allStudents.find(s => s.id === params.id)
      if (foundStudent) {
        setStudent(foundStudent)
        setFormData({
          name: foundStudent.name,
          studentId: foundStudent.studentId,
          major: foundStudent.major,
          year: foundStudent.year,
          gpa: foundStudent.gpa,
          skills: foundStudent.skills.join(", "),
          strengths: foundStudent.strengths.join(", "),
          weaknesses: foundStudent.weaknesses.join(", "),
          email: foundStudent.email,
          phone: foundStudent.phone,
          address: foundStudent.address
        })
      } else {
        router.push("/institution-dashboard")
      }
    }
  }, [params.id, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!student) return

    const updatedStudent = {
      ...student,
      ...formData,
      skills: formData.skills.split(",").map(s => s.trim()).filter(s => s),
      strengths: formData.strengths.split(",").map(s => s.trim()).filter(s => s),
      weaknesses: formData.weaknesses.split(",").map(s => s.trim()).filter(s => s),
      updatedAt: new Date().toISOString()
    }

    localStorageService.updateStudent(student.id, updatedStudent)
    router.push("/institution-dashboard?tab=students")
  }

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">กำลังโหลด...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับ
          </Button>
          <h1 className="text-3xl font-bold">แก้ไขข้อมูลนักศึกษา</h1>
          <p className="text-muted-foreground">แก้ไขข้อมูลนักศึกษา: {student.name}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลนักศึกษา</CardTitle>
            <CardDescription>
              แก้ไขข้อมูลให้เป็นปัจจุบัน
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">ชื่อ-นามสกุล *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="studentId">รหัสนักศึกษา *</Label>
                  <Input
                    id="studentId"
                    value={formData.studentId}
                    onChange={(e) => handleChange("studentId", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="major">สาขาวิชา *</Label>
                  <Input
                    id="major"
                    value={formData.major}
                    onChange={(e) => handleChange("major", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="year">ชั้นปี *</Label>
                  <Select value={formData.year.toString()} onValueChange={(value) => handleChange("year", parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">ปี 1</SelectItem>
                      <SelectItem value="2">ปี 2</SelectItem>
                      <SelectItem value="3">ปี 3</SelectItem>
                      <SelectItem value="4">ปี 4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="gpa">เกรดเฉลี่ย *</Label>
                  <Input
                    id="gpa"
                    type="number"
                    step="0.01"
                    min="0"
                    max="4"
                    value={formData.gpa}
                    onChange={(e) => handleChange("gpa", parseFloat(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="email">อีเมล *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="address">ที่อยู่</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  rows={2}
                />
              </div>

              <div>
                <Label htmlFor="skills">ทักษะ (คั่นด้วยเครื่องหมายจุลภาค)</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleChange("skills", e.target.value)}
                  placeholder="เช่น React, Node.js, Python"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="strengths">จุดแข็ง (คั่นด้วยเครื่องหมายจุลภาค)</Label>
                <Textarea
                  id="strengths"
                  value={formData.strengths}
                  onChange={(e) => handleChange("strengths", e.target.value)}
                  placeholder="เช่น การเขียนโค้ด, การแก้ปัญหา"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="weaknesses">จุดอ่อน (คั่นด้วยเครื่องหมายจุลภาค)</Label>
                <Textarea
                  id="weaknesses"
                  value={formData.weaknesses}
                  onChange={(e) => handleChange("weaknesses", e.target.value)}
                  placeholder="เช่น การนำเสนอ, การจัดการเวลา"
                  rows={3}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  <Save className="w-4 h-4 mr-2" />
                  บันทึกการแก้ไข
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  ยกเลิก
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
