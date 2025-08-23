"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Users,
  GraduationCap,
  Building2,
  Briefcase,
  Clock,
  CheckCircle,
  Award,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("year")
  const [departmentFilter, setDepartmentFilter] = useState("")
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/institution-dashboard"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับไปยังแดชบอร์ด
            </Link>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              ดาวน์โหลดรายงาน
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ข้อมูลเชิงลึก</h1>
          <p className="text-muted-foreground">วิเคราะห์ข้อมูลและติดตามผลการดำเนินงาน</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ช่วงเวลา</label>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกช่วงเวลา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">30 วันล่าสุด</SelectItem>
                    <SelectItem value="quarter">ไตรมาสนี้</SelectItem>
                    <SelectItem value="year">ปีการศึกษานี้</SelectItem>
                    <SelectItem value="all">ทั้งหมด</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">ภาควิชา</label>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="ทุกภาควิชา" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">ทุกภาควิชา</SelectItem>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2,547</p>
                  <p className="text-sm text-muted-foreground">นักศึกษาทั้งหมด</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">408</p>
                  <p className="text-sm text-muted-foreground">จบการศึกษา</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">368</p>
                  <p className="text-sm text-muted-foreground">มีงานทำ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">90.2%</p>
                  <p className="text-sm text-muted-foreground">อัตราการมีงานทำ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Employment Rate by Department */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                อัตราการมีงานทำตามภาควิชา
              </CardTitle>
              <CardDescription>เปรียบเทียบอัตราการมีงานทำของแต่ละภาควิชา</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{dept.name}</span>
                      <span className="font-medium text-foreground">{dept.employmentRate}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${dept.employmentRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Verification Status */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                สถานะการยืนยันข้อมูล
              </CardTitle>
              <CardDescription>สถานะการยืนยันข้อมูลประจำตัวของนักศึกษา</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">ข้อมูลทั้งหมด</span>
                  <span className="font-semibold text-foreground">2,547</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">ยืนยันแล้ว</span>
                  <span className="font-semibold text-foreground">1,892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">รอการยืนยัน</span>
                  <span className="font-semibold text-foreground">655</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">อัตราการยืนยัน</span>
                  <span className="font-semibold text-foreground">74.3%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: "74.3%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Skills */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                ทักษะที่เป็นที่ต้องการ
              </CardTitle>
              <CardDescription>ทักษะที่นายจ้างต้องการมากที่สุด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.demand} ตำแหน่ง</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Employment Locations */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                พื้นที่การทำงาน
              </CardTitle>
              <CardDescription>สถานที่ทำงานของบัณฑิต</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employmentLocations.map((location, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground">{location.name}</span>
                      <span className="font-medium text-foreground">{location.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${location.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const departments = [
  "วิศวกรรมคอมพิวเตอร์",
  "วิศวกรรมไฟฟ้า",
  "วิศวกรรมเครื่องกล",
  "วิศวกรรมโยธา",
  "วิศวกรรมอุตสาหการ",
]

const departmentStats = [
  { name: "วิศวกรรมคอมพิวเตอร์", employmentRate: 95 },
  { name: "วิศวกรรมไฟฟ้า", employmentRate: 92 },
  { name: "วิศวกรรมเครื่องกล", employmentRate: 88 },
  { name: "วิศวกรรมโยธา", employmentRate: 85 },
  { name: "วิศวกรรมอุตสาหการ", employmentRate: 82 },
]

const topSkills = [
  { name: "Machine Learning", demand: 245 },
  { name: "Cloud Computing", demand: 198 },
  { name: "Data Analytics", demand: 176 },
  { name: "DevOps", demand: 154 },
  { name: "Cybersecurity", demand: 132 },
]

const employmentLocations = [
  { name: "กรุงเทพมหานคร", percentage: 45 },
  { name: "ปริมณฑล", percentage: 25 },
  { name: "ภาคตะวันออก (EEC)", percentage: 15 },
  { name: "ภาคเหนือ", percentage: 8 },
  { name: "ภาคใต้", percentage: 7 },
]
