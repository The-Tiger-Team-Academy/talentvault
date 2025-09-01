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

export default function EditDepartmentPage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useAuth()
  const [department, setDepartment] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    headOfDepartment: "",
    studentCount: 0,
    employmentRate: 0,
    confirmedData: 0,
    status: "active" as "active" | "inactive",
    description: ""
  })

  useEffect(() => {
    if (params.id) {
      const allDepartments = localStorageService.getDepartments()
      const foundDepartment = allDepartments.find(d => d.id === params.id)
      if (foundDepartment) {
        setDepartment(foundDepartment)
        setFormData({
          name: foundDepartment.name,
          headOfDepartment: foundDepartment.headOfDepartment,
          studentCount: foundDepartment.studentCount,
          employmentRate: foundDepartment.employmentRate,
          confirmedData: foundDepartment.confirmedData,
          status: foundDepartment.status,
          description: foundDepartment.description
        })
      } else {
        router.push("/institution-dashboard")
      }
    }
  }, [params.id, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!department) return

    const updatedDepartment = {
      ...department,
      ...formData,
      updatedAt: new Date().toISOString()
    }

    localStorageService.updateDepartment(department.id, updatedDepartment)
    router.push("/institution-dashboard?tab=departments")
  }

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!department) {
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
          <h1 className="text-3xl font-bold">แก้ไขข้อมูลภาควิชา</h1>
          <p className="text-muted-foreground">แก้ไขข้อมูลภาควิชา: {department.name}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลภาควิชา</CardTitle>
            <CardDescription>
              แก้ไขข้อมูลให้เป็นปัจจุบัน
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">ชื่อภาควิชา *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="headOfDepartment">หัวหน้าภาควิชา *</Label>
                  <Input
                    id="headOfDepartment"
                    value={formData.headOfDepartment}
                    onChange={(e) => handleChange("headOfDepartment", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <Label htmlFor="studentCount">จำนวนนักศึกษา *</Label>
                  <Input
                    id="studentCount"
                    type="number"
                    min="0"
                    value={formData.studentCount}
                    onChange={(e) => handleChange("studentCount", parseInt(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="employmentRate">อัตราการได้งาน (%) *</Label>
                  <Input
                    id="employmentRate"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.employmentRate}
                    onChange={(e) => handleChange("employmentRate", parseInt(e.target.value))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="confirmedData">ข้อมูลที่ยืนยันแล้ว *</Label>
                  <Input
                    id="confirmedData"
                    type="number"
                    min="0"
                    value={formData.confirmedData}
                    onChange={(e) => handleChange("confirmedData", parseInt(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="status">สถานะ *</Label>
                <Select value={formData.status} onValueChange={(value) => handleChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">เปิดใช้งาน</SelectItem>
                    <SelectItem value="inactive">ปิดใช้งาน</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">รายละเอียด</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="รายละเอียดเกี่ยวกับภาควิชา"
                  rows={4}
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
