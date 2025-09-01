"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { localStorageService, type JobPosting } from "@/lib/local-storage-service"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Search, 
  MapPin, 
  Clock, 
  Building2, 
  Briefcase, 
  Filter,
  Heart,
  ExternalLink,
  Star
} from "lucide-react"

export default function JobsPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [savedJobs, setSavedJobs] = useState<string[]>([])

  useEffect(() => {
    if (!user || user.type !== "job_seeker") {
      router.push("/job-seeker-login")
      return
    }
    loadJobs()
    loadSavedJobs()
  }, [user, router])

  const loadJobs = () => {
    const allJobs = localStorageService.getJobPostings()
    setJobs(allJobs)
    setFilteredJobs(allJobs)
  }

  const loadSavedJobs = () => {
    const saved = localStorage.getItem(`savedJobs_${user?.id}`)
    if (saved) {
      setSavedJobs(JSON.parse(saved))
    }
  }

  const handleSearch = () => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (locationFilter !== "all") {
      filtered = filtered.filter(job => job.location.includes(locationFilter))
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter(job => job.type === typeFilter)
    }

    setFilteredJobs(filtered)
  }

  const toggleSaveJob = (jobId: string) => {
    const newSavedJobs = savedJobs.includes(jobId)
      ? savedJobs.filter(id => id !== jobId)
      : [...savedJobs, jobId]
    
    setSavedJobs(newSavedJobs)
    localStorage.setItem(`savedJobs_${user?.id}`, JSON.stringify(newSavedJobs))
  }

  const handleApplyJob = (jobId: string) => {
    // Create application
    const application = {
      id: Date.now().toString(),
      jobId,
      applicantId: user?.id || '',
      applicantName: user?.name || '',
      appliedDate: new Date().toISOString(),
      status: 'pending' as const,
      coverLetter: '',
      resume: ''
    }

    localStorageService.addJobApplication(application)
    router.push(`/applications`)
  }

  useEffect(() => {
    handleSearch()
  }, [searchTerm, locationFilter, typeFilter, jobs])

  if (!user || user.type !== "job_seeker") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">ค้นหางาน</h1>
            <p className="text-muted-foreground">ค้นหาตำแหน่งงานที่เหมาะสมกับคุณ</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                ค้นหาและกรองงาน
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-2">
                  <Label htmlFor="search">ค้นหางาน</Label>
                  <div className="relative mt-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="ตำแหน่งงาน, บริษัท, หรือคำสำคัญ"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <Label>สถานที่</Label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="เลือกสถานที่" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ทุกสถานที่</SelectItem>
                      <SelectItem value="กรุงเทพ">กรุงเทพมหานคร</SelectItem>
                      <SelectItem value="เชียงใหม่">เชียงใหม่</SelectItem>
                      <SelectItem value="ภูเก็ต">ภูเก็ต</SelectItem>
                      <SelectItem value="ระยอง">ระยอง</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>ประเภทงาน</Label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="เลือกประเภท" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">ทุกประเภท</SelectItem>
                      <SelectItem value="full-time">งานประจำ</SelectItem>
                      <SelectItem value="part-time">งานพาร์ทไทม์</SelectItem>
                      <SelectItem value="contract">งานสัญญา</SelectItem>
                      <SelectItem value="internship">งานฝึกงาน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Results */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">พบ {filteredJobs.length} ตำแหน่งงาน</h2>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">เรียงตาม: ล่าสุด</span>
              </div>
            </div>

            {filteredJobs.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">ไม่พบงานที่ตรงกับเงื่อนไข</h3>
                  <p className="text-muted-foreground">ลองเปลี่ยนคำค้นหาหรือเงื่อนไขการกรอง</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-foreground mb-1">{job.title}</h3>
                              <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                              
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Briefcase className="w-4 h-4" />
                                  {job.type === 'full-time' ? 'งานประจำ' : 
                                   job.type === 'part-time' ? 'งานพาร์ทไทม์' :
                                   job.type === 'contract' ? 'งานสัญญา' : 'งานฝึกงาน'}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {new Date(job.postedDate).toLocaleDateString('th-TH')}
                                </div>
                              </div>

                              <p className="text-foreground mb-4 line-clamp-2">{job.description}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {Array.isArray(job.requirements) ? job.requirements.slice(0, 3).map((req, index) => (
                                  <Badge key={index} variant="secondary">
                                    {req}
                                  </Badge>
                                )) : (
                                  <Badge variant="secondary">
                                    {job.requirements}
                                  </Badge>
                                )}
                                {Array.isArray(job.requirements) && job.requirements.length > 3 && (
                                  <Badge variant="outline">
                                    +{job.requirements.length - 3} เพิ่มเติม
                                  </Badge>
                                )}
                              </div>

                              <div className="flex items-center gap-3">
                                <Button 
                                  onClick={() => handleApplyJob(job.id)}
                                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                  สมัครงาน
                                </Button>
                                <Button 
                                  variant="outline"
                                  onClick={() => toggleSaveJob(job.id)}
                                  className={savedJobs.includes(job.id) ? "text-red-600 border-red-600" : ""}
                                >
                                  <Heart className={`w-4 h-4 mr-2 ${savedJobs.includes(job.id) ? "fill-current" : ""}`} />
                                  {savedJobs.includes(job.id) ? "บันทึกแล้ว" : "บันทึก"}
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  ดูรายละเอียด
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold text-primary mb-1">
                            ฿{job.salary?.toLocaleString() || 'ตามตกลง'}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                            <span>4.5</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
