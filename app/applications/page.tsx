"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { localStorageService, type JobApplication, type JobPosting } from "@/lib/local-storage-service"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  Download,
  MessageCircle
} from "lucide-react"

export default function ApplicationsPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    if (!user || user.type !== "job_seeker") {
      router.push("/job-seeker-login")
      return
    }
    loadData()
  }, [user, router])

  const loadData = () => {
    const allApplications = localStorageService.getJobApplications()
    const allJobs = localStorageService.getJobPostings()
    
    // Filter applications for current user
    const userApplications = allApplications.filter(app => app.applicantId === user?.id)
    setApplications(userApplications)
    setJobs(allJobs)
  }

  const getJobDetails = (jobId: string) => {
    return jobs.find(job => job.id === jobId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'interviewed':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'accepted':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'รอการตอบรับ'
      case 'reviewed':
        return 'ตรวจสอบแล้ว'
      case 'interviewed':
        return 'สัมภาษณ์แล้ว'
      case 'accepted':
        return 'รับเข้าทำงาน'
      case 'rejected':
        return 'ไม่ผ่านการคัดเลือก'
      default:
        return status
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />
      case 'reviewed':
        return <Eye className="w-4 h-4" />
      case 'interviewed':
        return <MessageCircle className="w-4 h-4" />
      case 'accepted':
        return <CheckCircle className="w-4 h-4" />
      case 'rejected':
        return <XCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const filteredApplications = applications.filter(app => {
    if (activeTab === "all") return true
    return app.status === activeTab
  })

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    interviewed: applications.filter(app => app.status === 'interviewed').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length
  }

  if (!user || user.type !== "job_seeker") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">ใบสมัครของฉัน</h1>
            <p className="text-muted-foreground">ติดตามสถานะการสมัครงานของคุณ</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-foreground">{stats.total}</div>
                <div className="text-sm text-muted-foreground">ทั้งหมด</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
                <div className="text-sm text-muted-foreground">รอตอบรับ</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.reviewed}</div>
                <div className="text-sm text-muted-foreground">ตรวจสอบแล้ว</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">{stats.interviewed}</div>
                <div className="text-sm text-muted-foreground">สัมภาษณ์</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.accepted}</div>
                <div className="text-sm text-muted-foreground">รับเข้าทำงาน</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
                <div className="text-sm text-muted-foreground">ไม่ผ่าน</div>
              </CardContent>
            </Card>
          </div>

          {/* Applications Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">ทั้งหมด ({stats.total})</TabsTrigger>
              <TabsTrigger value="pending">รอตอบรับ ({stats.pending})</TabsTrigger>
              <TabsTrigger value="reviewed">ตรวจสอบแล้ว ({stats.reviewed})</TabsTrigger>
              <TabsTrigger value="interviewed">สัมภาษณ์ ({stats.interviewed})</TabsTrigger>
              <TabsTrigger value="accepted">รับเข้าทำงาน ({stats.accepted})</TabsTrigger>
              <TabsTrigger value="rejected">ไม่ผ่าน ({stats.rejected})</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-4">
              {filteredApplications.length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {activeTab === "all" ? "ยังไม่มีใบสมัครงาน" : `ไม่มีใบสมัครที่มีสถานะ "${getStatusText(activeTab)}"`}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {activeTab === "all" ? "เริ่มต้นการค้นหางานและสมัครงานที่คุณสนใจ" : "ลองเปลี่ยนแท็บเพื่อดูใบสมัครอื่น"}
                    </p>
                    {activeTab === "all" && (
                      <Button onClick={() => router.push("/jobs")} className="bg-primary text-primary-foreground hover:bg-primary/90">
                        ค้นหางาน
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredApplications.map((application) => {
                    const job = getJobDetails(application.jobId)
                    return (
                      <Card key={application.id} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Building2 className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                  {job?.title || 'ตำแหน่งไม่ทราบ'}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-2">
                                  {job?.company || 'บริษัทไม่ทราบ'}
                                </p>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job?.location || 'ไม่ระบุ'}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Briefcase className="w-4 h-4" />
                                    {job?.type === 'full-time' ? 'งานประจำ' : 
                                     job?.type === 'part-time' ? 'งานพาร์ทไทม์' :
                                     job?.type === 'contract' ? 'งานสัญญา' : 'งานฝึกงาน'}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    สมัครเมื่อ {new Date(application.appliedDate).toLocaleDateString('th-TH')}
                                  </div>
                                </div>

                                <div className="flex items-center gap-3">
                                  <Button variant="outline" size="sm">
                                    <Eye className="w-4 h-4 mr-2" />
                                    ดูรายละเอียด
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    <Download className="w-4 h-4 mr-2" />
                                    ดาวน์โหลด CV
                                  </Button>
                                  {application.status === 'interviewed' && (
                                    <Button variant="outline" size="sm">
                                      <MessageCircle className="w-4 h-4 mr-2" />
                                      ข้อความ
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <Badge className={`${getStatusColor(application.status)} mb-2`}>
                                <span className="flex items-center gap-1">
                                  {getStatusIcon(application.status)}
                                  {getStatusText(application.status)}
                                </span>
                              </Badge>
                              {job?.salary && (
                                <div className="text-lg font-semibold text-primary">
                                  ฿{job.salary.toLocaleString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
