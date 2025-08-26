"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Star, 
  Plus,
  Search,
  X,
  GraduationCap,
  Lock,
  Wifi,
  Award,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from "lucide-react"
import { CVTemplate } from "@/components/cv-template"

export default function DashboardPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [showCVDialog, setShowCVDialog] = useState(false)
  const [cvProgress, setCvProgress] = useState(0)
  const [showSkillsDialog, setShowSkillsDialog] = useState(false)
  const [skills, setSkills] = useState<string[]>(["Analytics"])
  const [suggestedSkills] = useState<string[]>(["Customer Retention", "SEO", "Data Analysis", "Project Management"])
  const [searchSkill, setSearchSkill] = useState("")
  const [jobPreferences] = useState({
    onsite: true,
    remote: true,
    fullTime: true,
    partTime: true
  })

  useEffect(() => {
    if (!user || user.type !== "job_seeker") {
      router.push("/job-seeker-login")
    }
  }, [user, router])

  const handleGenerateCV = async () => {
    setShowCVDialog(true)
    setCvProgress(0)
    
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 300))
      setCvProgress(i)
    }
  }

  const handleAddSkill = (skill: string) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill])
    }
  }

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill))
  }

  const handleSaveSkills = () => {
    // Save skills to localStorage or API
    setShowSkillsDialog(false)
  }

  if (!user || user.type !== "job_seeker") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault Job Seeker</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">สวัสดี, {user.name}</span>
              <Button variant="outline" onClick={() => router.push("/")}>
                ออกจากระบบ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">แดชบอร์ดผู้หางาน</h1>
            <p className="text-muted-foreground">จัดการโปรไฟล์และค้นหางานที่เหมาะสม</p>
          </div>

          {/* SmartResume Profile Card */}
          <Card className="mb-8 border-2 border-gradient-to-br from-blue-500 to-green-500 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Computer Science Major</h2>
                    <p className="text-muted-foreground">Bachelor of Science</p>
                    <p className="text-muted-foreground">Springfield University</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Skills */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    สถานะโปรไฟล์
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">iDatafier:</span>
                    <span className="text-sm font-mono text-primary">A83ND876-1H34-098D-S9FR-H837F6EG453G</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">(+) ACTIVELY LOOKING</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">ONSITE</Badge>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">REMOTE</Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">FULL-TIME</Badge>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">PART-TIME</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Skills & Abilities */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>ทักษะและความสามารถ</CardTitle>
                    <Dialog open={showSkillsDialog} onOpenChange={setShowSkillsDialog}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          เพิ่มทักษะ
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>เพิ่มทักษะและความสามารถ</DialogTitle>
                          <DialogDescription>เลือกทักษะที่คุณมีหรือต้องการเพิ่ม</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>ทักษะและความสามารถ</Label>
                            <div className="flex gap-2 flex-wrap">
                              {skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                                  {skill}
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-4 w-4 p-0 hover:bg-transparent"
                                    onClick={() => handleRemoveSkill(skill)}
                                  >
                                    <X className="w-3 h-3" />
                                  </Button>
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>ค้นหาทักษะ</Label>
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                placeholder="ค้นหาทักษะหรือความสามารถ"
                                value={searchSkill}
                                onChange={(e) => setSearchSkill(e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label>แนะนำจากเรซูเม่ของคุณ</Label>
                            <div className="flex gap-2 flex-wrap">
                              {suggestedSkills.map((skill) => (
                                <Badge
                                  key={skill}
                                  variant="outline"
                                  className="flex items-center gap-1 cursor-pointer hover:bg-primary hover:text-primary-foreground"
                                  onClick={() => handleAddSkill(skill)}
                                >
                                  {skill}
                                  <Plus className="w-3 h-3" />
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setShowSkillsDialog(false)}>
                              ยกเลิก
                            </Button>
                            <Button onClick={handleSaveSkills} className="bg-primary text-primary-foreground hover:bg-primary/90">
                              บันทึก
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Awards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">รางวัลทางวิชาการ</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">เมษายน 2021</span>
                          <span className="text-sm font-medium underline cursor-pointer">Summa Cum Laude</span>
                          <span className="text-xs text-muted-foreground">↗</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Springfield University</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CV Generation */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    สร้าง CV อัจฉริยะ
                  </CardTitle>
                  <CardDescription>
                    สร้าง CV ที่โดดเด่นด้วย AI เพื่อเพิ่มโอกาสในการได้งาน
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleGenerateCV}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    สร้าง CV อัจฉริยะ
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Stats & Actions */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>สถิติการสมัครงาน</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">12</p>
                      <p className="text-xs text-blue-700">งานที่สมัคร</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">3</p>
                      <p className="text-xs text-green-700">สัมภาษณ์</p>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">85%</p>
                    <p className="text-xs text-purple-700">ความเหมาะสม</p>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Applications */}
              <Card>
                <CardHeader>
                  <CardTitle>งานที่สมัครล่าสุด</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Frontend Developer</span>
                      <Badge variant="outline" className="text-xs">รอการตอบกลับ</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">TechCorp Co., Ltd.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">UI/UX Designer</span>
                      <Badge variant="secondary" className="text-xs">สัมภาษณ์</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Creative Studio</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>การดำเนินการด่วน</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Briefcase className="w-4 h-4 mr-2" />
                    ค้นหางานใหม่
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Edit className="w-4 h-4 mr-2" />
                    แก้ไขโปรไฟล์
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    ดูสถิติ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* CV Generation Dialog */}
      <Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>สร้าง CV อัจฉริยะ</DialogTitle>
            <DialogDescription>
              ระบบกำลังสร้าง CV ที่เหมาะสมกับคุณ
            </DialogDescription>
          </DialogHeader>
          
          {cvProgress < 100 ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>กำลังสร้าง CV...</span>
                  <span>{cvProgress}%</span>
                </div>
                <Progress value={cvProgress} className="w-full" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                ระบบกำลังวิเคราะห์ข้อมูลและสร้าง CV ที่เหมาะสมกับคุณ
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold">สร้าง CV สำเร็จแล้ว!</h3>
                <p className="text-sm text-muted-foreground">
                  CV ของคุณพร้อมใช้งานแล้ว
                </p>
              </div>
              <CVTemplate user={user} onDownload={() => {}} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}