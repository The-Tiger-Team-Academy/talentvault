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
import { localStorageService, type JobPosting } from "@/lib/local-storage-service"

export default function EditJobPage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useAuth()
  const [job, setJob] = useState<JobPosting | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: ""
  })

  useEffect(() => {
    if (params.id) {
      const allJobs = localStorageService.getJobPostings()
      const foundJob = allJobs.find(j => j.id === params.id)
      if (foundJob && foundJob.employerId === user?.id) {
        setJob(foundJob)
        setFormData({
          title: foundJob.title,
          company: foundJob.company,
          location: foundJob.location,
          type: foundJob.type,
          salary: foundJob.salary || "",
          description: foundJob.description,
          requirements: foundJob.requirements
        })
      } else {
        router.push("/employer-dashboard")
      }
    }
  }, [params.id, user?.id, router])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user || !job) return

    const updatedJob = {
      ...job,
      ...formData,
      type: formData.type as "full-time" | "part-time" | "internship" | "contract" | "freelance"
    }

    localStorageService.updateJobPosting(updatedJob)
    router.push("/employer-dashboard?tab=jobs")
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!job) {
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
          <h1 className="text-3xl font-bold">แก้ไขประกาศงาน</h1>
          <p className="text-muted-foreground">แก้ไขข้อมูลตำแหน่งงาน: {job.title}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลตำแหน่งงาน</CardTitle>
            <CardDescription>
              แก้ไขข้อมูลให้เป็นปัจจุบันเพื่อดึงดูดผู้สมัครที่เหมาะสม
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="title">ชื่อตำแหน่ง *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="เช่น Senior Frontend Developer"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company">ชื่อบริษัท *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="ชื่อบริษัทของคุณ"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="location">สถานที่ทำงาน *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="เช่น กรุงเทพฯ, Remote"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="type">ประเภทงาน *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภทงาน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="salary">เงินเดือน</Label>
                <Input
                  id="salary"
                  value={formData.salary}
                  onChange={(e) => handleChange("salary", e.target.value)}
                  placeholder="เช่น 50,000 - 80,000 บาท"
                />
              </div>

              <div>
                <Label htmlFor="description">รายละเอียดงาน *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="อธิบายลักษณะงาน หน้าที่ความรับผิดชอบ และสิ่งที่ผู้สมัครจะได้รับ"
                  rows={6}
                  required
                />
              </div>

              <div>
                <Label htmlFor="requirements">คุณสมบัติที่ต้องการ *</Label>
                <Textarea
                  id="requirements"
                  value={formData.requirements}
                  onChange={(e) => handleChange("requirements", e.target.value)}
                  placeholder="ระบุคุณสมบัติ ทักษะ และประสบการณ์ที่ต้องการ"
                  rows={4}
                  required
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
