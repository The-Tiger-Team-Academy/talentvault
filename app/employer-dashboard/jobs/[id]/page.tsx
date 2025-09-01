"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Users, Calendar, MapPin, Building2, DollarSign } from "lucide-react"
import { localStorageService, type JobPosting, type JobApplication } from "@/lib/local-storage-service"

export default function JobDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { user } = useAuth()
  const [job, setJob] = useState<JobPosting | null>(null)
  const [applications, setApplications] = useState<JobApplication[]>([])

  useEffect(() => {
    if (params.id) {
      const allJobs = localStorageService.getJobPostings()
      const foundJob = allJobs.find(j => j.id === params.id)
      if (foundJob && foundJob.employerId === user?.id) {
        setJob(foundJob)
        
        // Load applications for this job
        const allApplications = localStorageService.getJobApplications()
        const jobApplications = allApplications.filter(app => app.jobId === foundJob.id)
        setApplications(jobApplications)
      } else {
        router.push("/employer-dashboard")
      }
    }
  }, [params.id, user?.id, router])

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-muted-foreground">{job.company}</p>
            </div>
            <Button onClick={() => router.push(`/employer-dashboard/jobs/${job.id}/edit`)}>
              <Edit className="w-4 h-4 mr-2" />
              แก้ไขประกาศ
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>รายละเอียดงาน</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">รายละเอียด</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{job.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">คุณสมบัติที่ต้องการ</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{job.requirements}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ผู้สมัครงาน ({applications.length})</CardTitle>
                <CardDescription>
                  รายชื่อผู้ที่สมัครตำแหน่งนี้
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      ยังไม่มีผู้สมัคร
                    </div>
                  ) : (
                    applications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">{application.applicantName}</h3>
                            <p className="text-xs text-muted-foreground">
                              สมัครเมื่อ: {new Date(application.appliedDate).toLocaleDateString('th-TH')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={application.status === 'pending' ? 'default' : 'secondary'}>
                            {application.status === 'pending' ? 'รอการตอบรับ' : 
                             application.status === 'reviewed' ? 'ตรวจสอบแล้ว' :
                             application.status === 'interviewed' ? 'สัมภาษณ์แล้ว' :
                             application.status === 'accepted' ? 'รับเข้าทำงาน' : 'ไม่ผ่านการคัดเลือก'}
                          </Badge>
                          <Button variant="outline" size="sm">
                            ดูโปรไฟล์
                          </Button>
                          <Button size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            นัดสัมภาษณ์
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>สถิติ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ผู้เข้าชม</span>
                  <span className="font-semibold">245</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ผู้สมัคร</span>
                  <span className="font-semibold">{applications.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">อัตราการสมัคร</span>
                  <span className="font-semibold">
                    {applications.length > 0 ? Math.round((applications.length / 245) * 100) : 0}%
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ข้อมูลการโพสต์</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">วันที่โพสต์</span>
                  <span>{new Date(job.postedDate).toLocaleDateString('th-TH')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">สถานะ</span>
                  <Badge variant={job.status === 'active' ? 'default' : 'secondary'}>
                    {job.status === 'active' ? 'เปิดรับสมัคร' : 'ปิดรับสมัคร'}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
