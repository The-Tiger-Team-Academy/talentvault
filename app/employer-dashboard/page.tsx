"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Briefcase, MessageCircle, Calendar as CalendarIcon, Search, Users, Building2, Plus, FileText, LogOut, Edit, Trash2, RefreshCw } from "lucide-react"
import { localStorageService, type JobPosting, type JobApplication } from "@/lib/local-storage-service"

export default function EmployerDashboardPage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else if (user.type !== "employer") {
      router.push("/")
    } else {
      // Load data from localStorage
      loadData()
    }
  }, [user, router])

  const loadData = () => {
    const allJobs = localStorageService.getJobPostings()
    const allApplications = localStorageService.getJobApplications()
    
    // Filter jobs for current employer
    const employerJobs = allJobs.filter(job => job.employerId === user?.id)
    setJobs(employerJobs)
    
    // Filter applications for current employer's jobs
    const employerApplications = allApplications.filter(app => 
      employerJobs.some(job => job.id === app.jobId)
    )
    setApplications(employerApplications)
  }

  const handleDeleteJob = (jobId: string) => {
    if (confirm("คุณแน่ใจหรือไม่ที่จะลบประกาศงานนี้?")) {
      localStorageService.deleteJobPosting(jobId)
      loadData() // Reload data
    }
  }

  const handleSearch = () => {
    // Filter jobs based on search term
    const allJobs = localStorageService.getJobPostings()
    const filteredJobs = allJobs.filter(job => 
      job.employerId === user?.id && 
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       job.company.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    setJobs(filteredJobs)
  }

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/profiles">
                  <Search className="w-4 h-4 mr-2" />
                  เริ่มค้นหาผู้มีความสามารถ
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.push("/employer-dashboard/messages")}>
                <MessageCircle className="w-4 h-4 mr-2" />
                ข้อความ
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.push("/employer-dashboard/schedule")}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                นัดสัมภาษณ์
              </Button>
              <Button variant="outline" size="sm" onClick={loadData}>
                <RefreshCw className="w-4 h-4 mr-2" />
                รีเฟรช
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-foreground font-medium">{user.name}</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Actions */}
          <section className="mb-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">ประกาศงานใหม่</CardTitle>
                  <Plus className="h-5 w-5" />
                </CardHeader>
                <CardContent>
                  <Button variant="secondary" className="w-full mt-2" onClick={() => router.push("/employer-dashboard/jobs/new")}>
                    สร้างประกาศงาน
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">ผู้สมัครทั้งหมด</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{applications.length}</div>
                  <p className="text-xs text-muted-foreground">
                    ผู้สมัครทั้งหมดในประกาศงานของคุณ
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">การสัมภาษณ์</CardTitle>
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    นัดหมายสัปดาห์นี้
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">ตำแหน่งที่เปิดรับ</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{jobs.length}</div>
                  <p className="text-xs text-muted-foreground">
                    ตำแหน่งที่กำลังเปิดรับ
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Search Candidates */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>ค้นหาผู้สมัครที่เหมาะสม</CardTitle>
                <CardDescription>
                  ค้นหาผู้สมัครตามทักษะ ประสบการณ์ หรือคุณสมบัติที่ต้องการ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search">ค้นหาผู้สมัคร</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input
                        id="search"
                        placeholder="ค้นหาตามทักษะ ตำแหน่ง หรือประสบการณ์"
                        className="flex-1"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Button onClick={handleSearch}>
                        <Search className="w-4 h-4 mr-2" />
                        ค้นหา
                      </Button>
                      <Button variant="outline" onClick={() => {
                        setSearchTerm("")
                        loadData()
                      }}>
                        ล้าง
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="jobs" className="space-y-4">
            <TabsList>
              <TabsTrigger value="jobs">ประกาศงาน</TabsTrigger>
              <TabsTrigger value="applications">ผู้สมัคร</TabsTrigger>
              <TabsTrigger value="interviews">การสัมภาษณ์</TabsTrigger>
              <TabsTrigger value="reports">รายงาน</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs">
              <Card>
                <CardHeader>
                  <CardTitle>ประกาศงานที่เปิดรับ</CardTitle>
                  <CardDescription>
                    จัดการประกาศงานและดูสถิติผู้สมัคร
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        ยังไม่มีประกาศงาน
                      </div>
                    ) : (
                      jobs.map((job) => {
                        const jobApplications = applications.filter(app => app.jobId === job.id)
                        return (
                          <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h3 className="font-medium">{job.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                เปิดรับสมัคร: {new Date(job.postedDate).toLocaleDateString('th-TH')}
                              </p>
                            </div>
                            <div className="flex items-center gap-4">
                              <Badge>{jobApplications.length} ผู้สมัคร</Badge>
                              <Button variant="outline" size="sm" onClick={() => router.push(`/employer-dashboard/jobs/${job.id}`)}>
                                <FileText className="w-4 h-4 mr-2" />
                                ดูรายละเอียด
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => router.push(`/employer-dashboard/jobs/${job.id}/edit`)}>
                                <Edit className="w-4 h-4 mr-2" />
                                แก้ไข
                              </Button>
                              <Button variant="outline" size="sm" onClick={() => handleDeleteJob(job.id)}>
                                <Trash2 className="w-4 h-4 mr-2" />
                                ลบ
                              </Button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle>ผู้สมัครล่าสุด</CardTitle>
                  <CardDescription>
                    รายชื่อผู้สมัครที่เพิ่งสมัครเข้ามา
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        ยังไม่มีผู้สมัคร
                      </div>
                    ) : (
                      applications.map((application) => {
                        const job = jobs.find(j => j.id === application.jobId)
                        return (
                          <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-medium">{application.applicantName}</h3>
                                <p className="text-sm text-muted-foreground">
                                  สมัครตำแหน่ง: {job?.title || 'ไม่ทราบตำแหน่ง'}
                                </p>
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
                                นัดสัมภาษณ์
                              </Button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interviews">
              <Card>
                <CardHeader>
                  <CardTitle>ตารางสัมภาษณ์</CardTitle>
                  <CardDescription>
                    การสัมภาษณ์ที่นัดหมายไว้
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {(() => {
                      const employerInterviews = localStorageService.getInterviews(user?.id || '', 'employer')
                      if (employerInterviews.length === 0) {
                        return (
                          <div className="text-center py-8 text-muted-foreground">
                            ยังไม่มีนัดสัมภาษณ์
                          </div>
                        )
                      }
                      return employerInterviews.map((interview) => {
                        const job = jobs.find(j => j.id === interview.jobId)
                        const applicant = applications.find(a => a.jobId === interview.jobId)
                        return (
                          <div key={interview.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div>
                              <h3 className="font-medium">สัมภาษณ์: {applicant?.applicantName || 'ไม่ทราบชื่อ'}</h3>
                              <p className="text-sm text-muted-foreground">
                                {new Date(interview.scheduledDate).toLocaleDateString('th-TH', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                ตำแหน่ง: {job?.title || 'ไม่ทราบตำแหน่ง'}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                ประเภท: {interview.type === 'phone' ? 'โทรศัพท์' : 
                                         interview.type === 'video' ? 'วิดีโอคอล' : 'พบปะตัว'}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={interview.status === 'scheduled' ? 'default' : 
                                            interview.status === 'completed' ? 'secondary' : 'destructive'}>
                                {interview.status === 'scheduled' ? 'นัดหมายแล้ว' :
                                 interview.status === 'completed' ? 'เสร็จสิ้น' : 'ยกเลิก'}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                เพิ่มในปฏิทิน
                              </Button>
                            </div>
                          </div>
                        )
                      })
                    })()}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>สถิติการรับสมัคร</CardTitle>
                  <CardDescription>
                    ภาพรวมและสถิติการรับสมัครงาน
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          อัตราการตอบรับ
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {applications.length > 0 
                            ? Math.round((applications.filter(app => app.status === 'accepted').length / applications.length) * 100)
                            : 0}%
                        </div>
                        <p className="text-xs text-muted-foreground">
                          จากผู้สมัครทั้งหมด {applications.length} คน
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          ตำแหน่งที่เปิดรับ
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{jobs.length}</div>
                        <p className="text-xs text-muted-foreground">
                          ตำแหน่งที่กำลังเปิดรับ
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          ผู้สมัครใหม่
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {applications.filter(app => 
                            new Date(app.appliedDate) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                          ).length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          ใน 7 วันที่ผ่านมา
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          การสัมภาษณ์
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">
                          {localStorageService.getInterviews(user?.id || '', 'employer').length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          นัดสัมภาษณ์ทั้งหมด
                        </p>
                      </CardContent>
                    </Card>
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