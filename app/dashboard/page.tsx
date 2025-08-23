"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Briefcase, Download, FileText, MessageCircle, Calendar as CalendarIcon, Sparkles, Printer, LogOut } from "lucide-react"
import { CVTemplate } from "@/components/cv-template"

export default function DashboardPage() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else if (user.type !== "job_seeker") {
      router.push("/")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const handleGenerateCV = () => {
    setIsGenerating(true)
    // Simulate AI generation with progress
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000) // 3 seconds delay to show progress
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => router.push("/messages")}>
                <MessageCircle className="w-4 h-4 mr-2" />
                ข้อความ
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.push("/schedule")}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                นัดสัมภาษณ์
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-foreground font-medium">{user.name.split(" ")[0]}</span>
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
          {/* CV Generation Section */}
          <section className="mb-8">
            <Card className="border-2 border-primary/20 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  สร้าง CV อัจฉริยะ
                </CardTitle>
                <CardDescription>
                  ใช้ AI สร้าง CV ที่โดดเด่นจากข้อมูลโปรไฟล์ของคุณ ปรับแต่งและดาวน์โหลดได้ทันที
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled={isGenerating}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        {isGenerating ? "กำลังสร้าง CV..." : "สร้าง CV ด้วย AI"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      {isGenerating ? (
                        <div className="py-8">
                          <DialogHeader>
                            <DialogTitle>กำลังสร้าง CV...</DialogTitle>
                            <DialogDescription>
                              กรุณารอสักครู่ ระบบกำลังสร้าง CV ที่เหมาะสมที่สุดสำหรับคุณ
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4 mt-8">
                            <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: "60%" }}
                              />
                            </div>
                            <div className="text-center text-sm text-muted-foreground animate-pulse">
                              กำลังวิเคราะห์ข้อมูลและสร้าง CV...
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <DialogHeader>
                            <DialogTitle>CV ของคุณพร้อมแล้ว</DialogTitle>
                            <DialogDescription>
                              CV นี้ถูกสร้างตามมาตรฐานที่ Google ใช้ในการคัดกรองผู้สมัคร
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 max-h-[70vh] overflow-y-auto">
                            <CVTemplate user={user} onDownload={() => {
                              // TODO: Implement actual PDF download
                              const link = document.createElement('a')
                              link.href = '#'
                              link.download = `${user.name.replace(/\s+/g, '_')}_CV.pdf`
                              link.click()
                            }} />
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    ดาวน์โหลด CV
                  </Button>
                  <Button variant="outline">
                    <Printer className="w-4 h-4 mr-2" />
                    พิมพ์ CV
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
              <TabsTrigger value="applications">การสมัครงาน</TabsTrigger>
              <TabsTrigger value="interviews">การสัมภาษณ์</TabsTrigger>
              <TabsTrigger value="saved">งานที่บันทึก</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">การเข้าชมโปรไฟล์</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      +12% จากเดือนที่แล้ว
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">การสมัครงาน</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">
                      4 รอการตอบรับ
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">การสัมภาษณ์</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">
                      นัดหมายสัปดาห์นี้
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">ข้อความใหม่</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">
                      5 ยังไม่ได้อ่าน
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle>การสมัครงานของคุณ</CardTitle>
                  <CardDescription>
                    ติดตามสถานะการสมัครงานทั้งหมดของคุณ
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Mock Applications */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">นักพัฒนาซอฟต์แวร์อาวุโส</h3>
                        <p className="text-sm text-muted-foreground">บริษัท ไทยเทค โซลูชั่นส์ จำกัด</p>
                      </div>
                      <Badge>รอการตอบรับ</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">วิศวกรข้อมูล</h3>
                        <p className="text-sm text-muted-foreground">บริษัท ดาต้า อินไซต์ จำกัด</p>
                      </div>
                      <Badge variant="secondary">นัดสัมภาษณ์แล้ว</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interviews">
              <Card>
                <CardHeader>
                  <CardTitle>การสัมภาษณ์ที่นัดหมาย</CardTitle>
                  <CardDescription>
                    ตารางนัดสัมภาษณ์ที่กำลังจะมาถึง
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Mock Interviews */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">สัมภาษณ์ตำแหน่งนักพัฒนาซอฟต์แวร์อาวุโส</h3>
                        <p className="text-sm text-muted-foreground">
                          วันพุธที่ 15 มีนาคม 2024, 14:00 น.
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        เพิ่มในปฏิทิน
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="saved">
              <Card>
                <CardHeader>
                  <CardTitle>งานที่บันทึกไว้</CardTitle>
                  <CardDescription>
                    งานที่คุณสนใจและบันทึกไว้
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Mock Saved Jobs */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">นักพัฒนา Full Stack</h3>
                        <p className="text-sm text-muted-foreground">บริษัท เว็บ โปร จำกัด</p>
                      </div>
                      <Button variant="outline" size="sm">
                        สมัครงาน
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">วิศวกร DevOps</h3>
                        <p className="text-sm text-muted-foreground">บริษัท คลาวด์ เทค จำกัด</p>
                      </div>
                      <Button variant="outline" size="sm">
                        สมัครงาน
                      </Button>
                    </div>
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