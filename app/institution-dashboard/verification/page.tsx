"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Filter,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Download,
  Clock,
  Calendar,
  Building2,
} from "lucide-react"
import Link from "next/link"

export default function VerificationPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [typeFilter, setTypeFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const router = useRouter()

  const filteredRequests = mockRequests.filter((request) => {
    const matchesSearch =
      request.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.credential.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = !statusFilter || request.status === statusFilter
    const matchesType = !typeFilter || request.credential.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

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
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <AlertCircle className="w-4 h-4 mr-2" />
                รอการยืนยัน ({mockRequests.filter((r) => r.status === "pending").length})
              </Button>
              <Button variant="default">
                <CheckCircle className="w-4 h-4 mr-2" />
                ยืนยันที่เลือก
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ยืนยันข้อมูลประจำตัว</h1>
          <p className="text-muted-foreground">ตรวจสอบและยืนยันข้อมูลประจำตัวของนักศึกษา</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <p className="text-sm text-muted-foreground">รอการยืนยัน</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1,892</p>
                  <p className="text-sm text-muted-foreground">ยืนยันแล้ว</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">ปฏิเสธ</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">74.3%</p>
                  <p className="text-sm text-muted-foreground">อัตราการยืนยัน</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="ค้นหาตามชื่อ รหัสนักศึกษา หรือข้อมูลประจำตัว..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  ตัวกรอง
                </Button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">สถานะ</label>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="ทุกสถานะ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">ทุกสถานะ</SelectItem>
                        <SelectItem value="pending">รอการยืนยัน</SelectItem>
                        <SelectItem value="verified">ยืนยันแล้ว</SelectItem>
                        <SelectItem value="rejected">ปฏิเสธ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">ประเภทข้อมูลประจำตัว</label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="ทุกประเภท" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">ทุกประเภท</SelectItem>
                        <SelectItem value="degree">ปริญญา</SelectItem>
                        <SelectItem value="certificate">ประกาศนียบัตร</SelectItem>
                        <SelectItem value="internship">ฝึกงาน</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Verification Requests */}
        <div className="space-y-6">
          {filteredRequests.map((request, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-lg">
                    {request.student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{request.student.name}</h3>
                        <p className="text-muted-foreground">รหัสนักศึกษา: {request.student.id}</p>
                      </div>
                      <Badge
                        variant={
                          request.status === "verified"
                            ? "default"
                            : request.status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {request.status === "verified"
                          ? "ยืนยันแล้ว"
                          : request.status === "pending"
                            ? "รอการยืนยัน"
                            : "ปฏิเสธ"}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <FileText className="w-4 h-4" />
                          <span className="font-medium">{request.credential.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          {request.credential.issuer}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          วันที่ขอ: {request.requestDate}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          ระยะเวลารอ: {request.waitingTime}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          ดูเอกสาร
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          ดาวน์โหลด
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="destructive" size="sm">
                          <XCircle className="w-4 h-4 mr-2" />
                          ปฏิเสธ
                        </Button>
                        <Button variant="default" size="sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          ยืนยัน
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">ไม่พบคำขอยืนยัน</h3>
            <p className="text-muted-foreground mb-4">ลองปรับเกณฑ์การค้นหาหรือตัวกรองของคุณ</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setStatusFilter("")
                setTypeFilter("")
              }}
            >
              ล้างตัวกรองทั้งหมด
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

const mockRequests = [
  {
    student: {
      name: "นายธนกร รักเรียน",
      id: "64110001",
    },
    credential: {
      name: "ปริญญาตรี วิศวกรรมคอมพิวเตอร์",
      type: "degree",
      issuer: "คณะวิศวกรรมศาสตร์",
    },
    status: "pending",
    requestDate: "15 มีนาคม 2024",
    waitingTime: "2 วัน",
  },
  {
    student: {
      name: "นางสาวสมหญิง ใจดี",
      id: "64110002",
    },
    credential: {
      name: "ประกาศนียบัตร Python Programming",
      type: "certificate",
      issuer: "สถาบันไอทีชั้นนำ",
    },
    status: "pending",
    requestDate: "14 มีนาคม 2024",
    waitingTime: "3 วัน",
  },
  {
    student: {
      name: "นายสมชาย มานะ",
      id: "63110001",
    },
    credential: {
      name: "ใบรับรองการฝึกงาน",
      type: "internship",
      issuer: "บริษัท Tech Corp",
    },
    status: "verified",
    requestDate: "10 มีนาคม 2024",
    waitingTime: "1 วัน",
  },
  {
    student: {
      name: "นางสาวรักษ์ดี มีสุข",
      id: "62110001",
    },
    credential: {
      name: "ปริญญาตรี วิศวกรรมโยธา",
      type: "degree",
      issuer: "คณะวิศวกรรมศาสตร์",
    },
    status: "rejected",
    requestDate: "8 มีนาคม 2024",
    waitingTime: "1 วัน",
  },
]
