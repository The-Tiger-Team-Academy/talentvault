"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Building2, 
  Target,
  Download,
  Calendar,
  Award,
  Briefcase,
  PieChart,
  LineChart,
  FileText,
  Filter
} from "lucide-react"

export default function ReportsPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!user || user.type !== "institution") {
      router.push("/institution-login")
    }
  }, [user, router])

  if (!user || user.type !== "institution") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">รายงานและการวิเคราะห์</h1>
            <p className="text-muted-foreground">ติดตามผลการดำเนินงานและสถิติของสถาบัน</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">1,600</p>
                    <p className="text-sm text-muted-foreground">นักศึกษาทั้งหมด</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">408</p>
                    <p className="text-sm text-muted-foreground">จบการศึกษา</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">368</p>
                    <p className="text-sm text-muted-foreground">มีงานทำ</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">90%</p>
                    <p className="text-sm text-muted-foreground">อัตราการมีงานทำ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reports Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">ภาพรวม</TabsTrigger>
              <TabsTrigger value="employment">การมีงานทำ</TabsTrigger>
              <TabsTrigger value="departments">ภาควิชา</TabsTrigger>
              <TabsTrigger value="performance">ผลการเรียน</TabsTrigger>
              <TabsTrigger value="trends">แนวโน้ม</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5" />
                      การกระจายนักศึกษาตามภาควิชา
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมคอมพิวเตอร์</span>
                        <div className="flex items-center gap-2">
                          <Progress value={28} className="w-20" />
                          <span className="text-sm font-medium">450 คน</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมเครื่องกล</span>
                        <div className="flex items-center gap-2">
                          <Progress value={26} className="w-20" />
                          <span className="text-sm font-medium">420 คน</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมไฟฟ้า</span>
                        <div className="flex items-center gap-2">
                          <Progress value={24} className="w-20" />
                          <span className="text-sm font-medium">380 คน</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมโยธา</span>
                        <div className="flex items-center gap-2">
                          <Progress value={22} className="w-20" />
                          <span className="text-sm font-medium">350 คน</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      อัตราการมีงานทำตามภาควิชา
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมคอมพิวเตอร์</span>
                        <div className="flex items-center gap-2">
                          <Progress value={95} className="w-20" />
                          <Badge className="bg-green-100 text-green-800">95%</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมไฟฟ้า</span>
                        <div className="flex items-center gap-2">
                          <Progress value={92} className="w-20" />
                          <Badge className="bg-green-100 text-green-800">92%</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมเครื่องกล</span>
                        <div className="flex items-center gap-2">
                          <Progress value={88} className="w-20" />
                          <Badge className="bg-yellow-100 text-yellow-800">88%</Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมโยธา</span>
                        <div className="flex items-center gap-2">
                          <Progress value={85} className="w-20" />
                          <Badge className="bg-yellow-100 text-yellow-800">85%</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ผลงานเด่นประจำปี</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <div>
                          <p className="font-medium text-sm">รางวัลสถาบันดีเด่น</p>
                          <p className="text-xs text-muted-foreground">สำนักงานคณะกรรมการการอุดมศึกษา</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-yellow-600" />
                        <div>
                          <p className="font-medium text-sm">อันดับ 1 ด้านนวัตกรรม</p>
                          <p className="text-xs text-muted-foreground">การประกวดโครงงานระดับชาติ</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ความร่วมมือกับภาคเอกชน</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">45</p>
                        <p className="text-sm text-muted-foreground">บริษัทพาร์ทเนอร์</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">120</p>
                        <p className="text-sm text-muted-foreground">โครงการร่วม</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>การพัฒนาทักษะ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">85%</p>
                        <p className="text-sm text-muted-foreground">ผ่านการฝึกอบรม</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">92%</p>
                        <p className="text-sm text-muted-foreground">ได้รับใบรับรอง</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Employment Tab */}
            <TabsContent value="employment" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>สถิติการมีงานทำ 5 ปีที่ผ่านมา</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[2024, 2023, 2022, 2021, 2020].map((year, index) => {
                        const rates = [90, 88, 85, 82, 80]
                        return (
                          <div key={year} className="flex items-center justify-between">
                            <span className="text-sm font-medium">ปี {year}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={rates[index]} className="w-32" />
                              <span className="text-sm font-medium w-12">{rates[index]}%</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ประเภทงานที่บัณฑิตได้รับ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">ภาคเอกชน</span>
                        <div className="flex items-center gap-2">
                          <Progress value={65} className="w-20" />
                          <span className="text-sm font-medium">65%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">ภาครัฐ</span>
                        <div className="flex items-center gap-2">
                          <Progress value={20} className="w-20" />
                          <span className="text-sm font-medium">20%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">ธุรกิจส่วนตัว</span>
                        <div className="flex items-center gap-2">
                          <Progress value={10} className="w-20" />
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">ศึกษาต่อ</span>
                        <div className="flex items-center gap-2">
                          <Progress value={5} className="w-20" />
                          <span className="text-sm font-medium">5%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>บริษัทที่รับบัณฑิตมากที่สุด</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "บริษัท ไทยเทค จำกัด", count: 25, type: "เทคโนโลยี" },
                      { name: "บริษัท อินโนเวชั่น จำกัด", count: 18, type: "ซอฟต์แวร์" },
                      { name: "บริษัท เอ็นจิเนียริ่ง จำกัด", count: 15, type: "วิศวกรรม" },
                      { name: "บริษัท ออโตเมชั่น จำกัด", count: 12, type: "อุตสาหกรรม" },
                      { name: "บริษัท คอนสตรัคชั่น จำกัด", count: 10, type: "ก่อสร้าง" },
                      { name: "บริษัท พาวเวอร์ จำกัด", count: 8, type: "พลังงาน" }
                    ].map((company, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <h4 className="font-medium text-sm">{company.name}</h4>
                        <p className="text-xs text-muted-foreground">{company.type}</p>
                        <p className="text-lg font-bold text-primary mt-1">{company.count} คน</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Departments Tab */}
            <TabsContent value="departments" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {[
                  { name: "วิศวกรรมคอมพิวเตอร์", students: 450, graduates: 120, employed: 114, rate: 95 },
                  { name: "วิศวกรรมไฟฟ้า", students: 380, graduates: 95, employed: 87, rate: 92 },
                  { name: "วิศวกรรมเครื่องกล", students: 420, graduates: 105, employed: 92, rate: 88 },
                  { name: "วิศวกรรมโยธา", students: 350, graduates: 88, employed: 75, rate: 85 }
                ].map((dept, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <p className="text-2xl font-bold text-blue-600">{dept.students}</p>
                          <p className="text-xs text-blue-700">นักศึกษาทั้งหมด</p>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-2xl font-bold text-green-600">{dept.graduates}</p>
                          <p className="text-xs text-green-700">จบการศึกษา</p>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <p className="text-2xl font-bold text-purple-600">{dept.employed}</p>
                          <p className="text-xs text-purple-700">มีงานทำ</p>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <p className="text-2xl font-bold text-orange-600">{dept.rate}%</p>
                          <p className="text-xs text-orange-700">อัตราการมีงานทำ</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>การกระจายเกรดเฉลี่ย</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">3.50 - 4.00 (เกียรตินิยม)</span>
                        <div className="flex items-center gap-2">
                          <Progress value={25} className="w-20" />
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">3.00 - 3.49 (ดี)</span>
                        <div className="flex items-center gap-2">
                          <Progress value={45} className="w-20" />
                          <span className="text-sm font-medium">45%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">2.50 - 2.99 (ปานกลาง)</span>
                        <div className="flex items-center gap-2">
                          <Progress value={25} className="w-20" />
                          <span className="text-sm font-medium">25%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">2.00 - 2.49 (อ่อน)</span>
                        <div className="flex items-center gap-2">
                          <Progress value={5} className="w-20" />
                          <span className="text-sm font-medium">5%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>ผลการเรียนเฉลี่ยตามภาควิชา</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมคอมพิวเตอร์</span>
                        <Badge className="bg-green-100 text-green-800">3.25</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมไฟฟ้า</span>
                        <Badge className="bg-green-100 text-green-800">3.18</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมเครื่องกล</span>
                        <Badge className="bg-yellow-100 text-yellow-800">3.05</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">วิศวกรรมโยธา</span>
                        <Badge className="bg-yellow-100 text-yellow-800">2.95</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Trends Tab */}
            <TabsContent value="trends" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="w-5 h-5" />
                    แนวโน้มการเติบโต
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-600">+12%</p>
                      <p className="text-sm text-blue-700">จำนวนนักศึกษาใหม่</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-600">+8%</p>
                      <p className="text-sm text-green-700">อัตราการมีงานทำ</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-purple-600">+15%</p>
                      <p className="text-sm text-purple-700">ความร่วมมือภาคเอกชน</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>ทักษะที่ตลาดแรงงานต้องการ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { skill: "AI/Machine Learning", demand: 95 },
                        { skill: "Cloud Computing", demand: 88 },
                        { skill: "Cybersecurity", demand: 82 },
                        { skill: "Data Science", demand: 78 },
                        { skill: "IoT Development", demand: 72 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item.skill}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={item.demand} className="w-20" />
                            <span className="text-sm font-medium">{item.demand}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>การพยากรณ์อนาคต</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-sm text-blue-800">ปี 2025</h4>
                        <p className="text-xs text-blue-600">คาดว่าจะมีนักศึกษาเพิ่มขึ้น 15%</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-sm text-green-800">ปี 2026</h4>
                        <p className="text-xs text-green-600">อัตราการมีงานทำจะเพิ่มขึ้นเป็น 95%</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-sm text-purple-800">ปี 2027</h4>
                        <p className="text-xs text-purple-600">เป้าหมายเป็นสถาบันอันดับ 1 ของประเทศ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Export Actions */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">ส่งออกรายงาน</h3>
                  <p className="text-sm text-muted-foreground">ดาวน์โหลดรายงานในรูปแบบต่างๆ</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Excel
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PowerPoint
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
