"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
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
import { Briefcase, MessageCircle, Calendar as CalendarIcon, Search, Users, Building2, Plus, FileText, LogOut } from "lucide-react"

export default function EmployerDashboardPage() {
  const router = useRouter()
  const { user, logout } = useAuth()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else if (user.type !== "employer") {
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
              <Button variant="outline" size="sm" onClick={() => router.push("/employer-dashboard/messages")}>
                <MessageCircle className="w-4 h-4 mr-2" />
                ข้อความ
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.push("/employer-dashboard/schedule")}>
                <CalendarIcon className="w-4 h-4 mr-2" />
                นัดสัมภาษณ์
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
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">
                    +24% จากเดือนที่แล้ว
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
                  <div className="text-2xl font-bold">5</div>
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
                      />
                      <Button>
                        <Search className="w-4 h-4 mr-2" />
                        ค้นหา
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
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">นักพัฒนาซอฟต์แวร์อาวุโส</h3>
                        <p className="text-sm text-muted-foreground">เปิดรับสมัคร: 15 ก.พ. 2024</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge>32 ผู้สมัคร</Badge>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          ดูรายละเอียด
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">วิศวกรข้อมูล</h3>
                        <p className="text-sm text-muted-foreground">เปิดรับสมัคร: 10 ก.พ. 2024</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge>18 ผู้สมัคร</Badge>
                        <Button variant="outline" size="sm">
                          <FileText className="w-4 h-4 mr-2" />
                          ดูรายละเอียด
                        </Button>
                      </div>
                    </div>
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
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">ธนากร รักษ์เรียน</h3>
                          <p className="text-sm text-muted-foreground">สมัครตำแหน่ง: นักพัฒนาซอฟต์แวร์อาวุโส</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          ดูโปรไฟล์
                        </Button>
                        <Button size="sm">
                          นัดสัมภาษณ์
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">สมศักดิ์ ใจดี</h3>
                          <p className="text-sm text-muted-foreground">สมัครตำแหน่ง: วิศวกรข้อมูล</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          ดูโปรไฟล์
                        </Button>
                        <Button size="sm">
                          นัดสัมภาษณ์
                        </Button>
                      </div>
                    </div>
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
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">สัมภาษณ์: ธนากร รักษ์เรียน</h3>
                        <p className="text-sm text-muted-foreground">
                          วันพุธที่ 15 มีนาคม 2024, 14:00 น.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ตำแหน่ง: นักพัฒนาซอฟต์แวร์อาวุโส
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
                        <div className="text-2xl font-bold">76%</div>
                        <p className="text-xs text-muted-foreground">
                          +12% จากเดือนที่แล้ว
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          เวลาเฉลี่ยในการปิดตำแหน่ง
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">18 วัน</div>
                        <p className="text-xs text-muted-foreground">
                          -3 วันจากเดือนที่แล้ว
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          ผู้สมัครที่ผ่านการคัดเลือก
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">42%</div>
                        <p className="text-xs text-muted-foreground">
                          +5% จากเดือนที่แล้ว
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">
                          ต้นทุนต่อการจ้างงาน
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">฿15,000</div>
                        <p className="text-xs text-muted-foreground">
                          -8% จากเดือนที่แล้ว
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