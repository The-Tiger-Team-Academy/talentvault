"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Mail, 
  MessageCircle, 
  Plus, 
  Edit, 
  Trash2, 
  ArrowLeft,
  Building2,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"
import Link from "next/link"

interface Interview {
  id: string
  candidateName: string
  candidateEmail: string
  position: string
  date: string
  time: string
  duration: number
  type: "phone" | "video" | "onsite"
  platform?: "google-meet" | "zoom" | "teams"
  meetingLink?: string
  status: "scheduled" | "completed" | "cancelled" | "rescheduled"
  notes?: string
  interviewer: string
}

export default function SchedulePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [interviews, setInterviews] = useState<Interview[]>([])
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showChatDialog, setShowChatDialog] = useState(false)
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null)
  const [chatMessage, setChatMessage] = useState("")

  // Mock data for demonstration
  useEffect(() => {
    const mockInterviews: Interview[] = [
      {
        id: "1",
        candidateName: "สมชาย ใจดี",
        candidateEmail: "somchai@email.com",
        position: "Senior Software Engineer",
        date: "2024-01-15",
        time: "14:00",
        duration: 60,
        type: "video",
        platform: "google-meet",
        meetingLink: "https://meet.google.com/abc-defg-hij",
        status: "scheduled",
        notes: "สัมภาษณ์รอบแรก - ทักษะ React และ Node.js",
        interviewer: "คุณสมหญิง ผู้จัดการทีม"
      },
      {
        id: "2",
        candidateName: "สมหญิง สมบูรณ์",
        candidateEmail: "somying@email.com",
        position: "UX/UI Designer",
        date: "2024-01-16",
        time: "10:00",
        duration: 45,
        type: "video",
        platform: "zoom",
        meetingLink: "https://zoom.us/j/123456789",
        status: "scheduled",
        notes: "สัมภาษณ์รอบสุดท้าย - Portfolio Review",
        interviewer: "คุณวิชัย หัวหน้าทีมออกแบบ"
      },
      {
        id: "3",
        candidateName: "วิชัย วิศวกร",
        candidateEmail: "wichai@email.com",
        position: "Data Scientist",
        date: "2024-01-17",
        time: "15:30",
        duration: 90,
        type: "onsite",
        status: "scheduled",
        notes: "สัมภาษณ์รอบแรก + Technical Test",
        interviewer: "คุณสมชาย หัวหน้าทีม Data"
      }
    ]
    setInterviews(mockInterviews)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      case "rescheduled":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "scheduled":
        return "นัดแล้ว"
      case "completed":
        return "เสร็จสิ้น"
      case "cancelled":
        return "ยกเลิก"
      case "rescheduled":
        return "เลื่อนเวลา"
      default:
        return "ไม่ทราบสถานะ"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "phone":
        return <MessageCircle className="w-4 h-4" />
      case "onsite":
        return <Users className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const getPlatformIcon = (platform?: string) => {
    switch (platform) {
      case "google-meet":
        return <ExternalLink className="w-4 h-4 text-red-600" />
      case "zoom":
        return <ExternalLink className="w-4 h-4 text-blue-600" />
      case "teams":
        return <ExternalLink className="w-4 h-4 text-purple-600" />
      default:
        return null
    }
  }

  const handleSendEmail = (interview: Interview) => {
    const subject = `การนัดสัมภาษณ์ - ${interview.position}`
    const body = `เรียนคุณ ${interview.candidateName}

ขอเรียนเชิญเข้าร่วมการสัมภาษณ์สำหรับตำแหน่ง ${interview.position}

รายละเอียดการนัดหมาย:
- วันที่: ${new Date(interview.date).toLocaleDateString('th-TH')}
- เวลา: ${interview.time} น. (${interview.duration} นาที)
- ประเภท: ${interview.type === 'video' ? 'สัมภาษณ์ออนไลน์' : interview.type === 'phone' ? 'สัมภาษณ์ทางโทรศัพท์' : 'สัมภาษณ์ที่สำนักงาน'}
${interview.platform && interview.meetingLink ? `- แพลตฟอร์ม: ${interview.platform === 'google-meet' ? 'Google Meet' : interview.platform === 'zoom' ? 'Zoom' : 'Microsoft Teams'}
- ลิงก์การประชุม: ${interview.meetingLink}` : ''}

ผู้สัมภาษณ์: ${interview.interviewer}
หมายเหตุ: ${interview.notes || 'ไม่มี'}

หากมีข้อสงสัยหรือต้องการเปลี่ยนแปลงเวลา กรุณาติดต่อกลับ

ขอบคุณ
${user?.name || 'TalentVault Team'}`

    const mailtoLink = `mailto:${interview.candidateEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleSendChat = (interview: Interview) => {
    setSelectedInterview(interview)
    setShowChatDialog(true)
  }

  const handleSubmitChat = () => {
    if (chatMessage.trim() && selectedInterview) {
      // Here you would typically send the message to your backend
      console.log(`Sending message to ${selectedInterview.candidateName}: ${chatMessage}`)
      setChatMessage("")
      setShowChatDialog(false)
      setSelectedInterview(null)
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const upcomingInterviews = interviews.filter(interview => 
    interview.date >= today && interview.status === "scheduled"
  )

  if (!user || user.type !== "employer") {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/employer-dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                กลับแดชบอร์ด
              </Link>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">TalentVault</span>
            </div>
            <div className="flex items-center gap-4">
              <Button onClick={() => setShowAddDialog(true)} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="w-4 h-4 mr-2" />
                เพิ่มการนัดหมาย
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">จัดการการนัดหมาย</h1>
            <p className="text-muted-foreground">จัดการตารางการสัมภาษณ์และติดต่อกับผู้สมัคร</p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{upcomingInterviews.length}</p>
                    <p className="text-sm text-muted-foreground">การนัดหมายที่กำลังจะมาถึง</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-secondary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{interviews.filter(i => i.status === "completed").length}</p>
                    <p className="text-sm text-muted-foreground">เสร็จสิ้นแล้ว</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Video className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{interviews.filter(i => i.type === "video").length}</p>
                    <p className="text-sm text-muted-foreground">สัมภาษณ์ออนไลน์</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{interviews.filter(i => i.type === "onsite").length}</p>
                    <p className="text-sm text-muted-foreground">สัมภาษณ์ที่สำนักงาน</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendar and Interviews */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    ปฏิทินการนัดหมาย
                  </CardTitle>
                  <CardDescription>
                    เลือกวันที่เพื่อดูการนัดหมาย
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    {interviews
                      .filter(interview => !selectedDate || interview.date === selectedDate)
                      .sort((a, b) => new Date(a.date + 'T' + a.time).getTime() - new Date(b.date + 'T' + b.time).getTime())
                      .map(interview => (
                        <div key={interview.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              {getTypeIcon(interview.type)}
                              <div>
                                <h4 className="font-semibold text-foreground">{interview.candidateName}</h4>
                                <p className="text-sm text-muted-foreground">{interview.position}</p>
                              </div>
                            </div>
                            <Badge className={getStatusColor(interview.status)}>
                              {getStatusText(interview.status)}
                            </Badge>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4 mb-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {new Date(interview.date).toLocaleDateString('th-TH')}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              {interview.time} น. ({interview.duration} นาที)
                            </div>
                          </div>
                          
                          {interview.notes && (
                            <p className="text-sm text-muted-foreground mb-3">{interview.notes}</p>
                          )}
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">ผู้สัมภาษณ์:</span>
                              <span className="text-sm font-medium">{interview.interviewer}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {interview.platform && interview.meetingLink && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => window.open(interview.meetingLink, '_blank')}
                                  className="flex items-center gap-2"
                                >
                                  {getPlatformIcon(interview.platform)}
                                  เข้าร่วม
                                </Button>
                              )}
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSendEmail(interview)}
                                className="flex items-center gap-2"
                              >
                                <Mail className="w-4 h-4" />
                                ส่งอีเมล
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSendChat(interview)}
                                className="flex items-center gap-2"
                              >
                                <MessageCircle className="w-4 h-4" />
                                แชท
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Today's Schedule */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">วันนี้</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {interviews
                      .filter(interview => interview.date === today && interview.status === "scheduled")
                      .map(interview => (
                        <div key={interview.id} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{interview.candidateName}</p>
                            <p className="text-xs text-muted-foreground">{interview.time} น.</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {interview.type === 'video' ? 'ออนไลน์' : interview.type === 'phone' ? 'โทรศัพท์' : 'ที่สำนักงาน'}
                          </Badge>
                        </div>
                      ))}
                    {interviews.filter(interview => interview.date === today && interview.status === "scheduled").length === 0 && (
                      <p className="text-sm text-muted-foreground text-center py-4">ไม่มีการนัดหมายวันนี้</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">การดำเนินการด่วน</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" onClick={() => setShowAddDialog(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มการนัดหมาย
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="w-4 h-4 mr-2" />
                    สร้าง Google Meet
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Video className="w-4 h-4 mr-2" />
                    สร้าง Zoom Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="w-4 h-4 mr-2" />
                    ส่งอีเมลรวม
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Add Interview Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>เพิ่มการนัดหมายใหม่</DialogTitle>
            <DialogDescription>
              สร้างการนัดหมายสัมภาษณ์ใหม่
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="candidateName">ชื่อผู้สมัคร</Label>
              <Input id="candidateName" placeholder="ชื่อผู้สมัคร" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="candidateEmail">อีเมล</Label>
              <Input id="candidateEmail" type="email" placeholder="อีเมล" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position">ตำแหน่ง</Label>
              <Input id="position" placeholder="ตำแหน่งงาน" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">วันที่</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">เวลา</Label>
              <Input id="time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">ระยะเวลา (นาที)</Label>
              <Input id="duration" type="number" placeholder="60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">ประเภท</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกประเภท" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">โทรศัพท์</SelectItem>
                  <SelectItem value="video">ออนไลน์</SelectItem>
                  <SelectItem value="onsite">ที่สำนักงาน</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform">แพลตฟอร์ม</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="เลือกแพลตฟอร์ม" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google-meet">Google Meet</SelectItem>
                  <SelectItem value="zoom">Zoom</SelectItem>
                  <SelectItem value="teams">Microsoft Teams</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="notes">หมายเหตุ</Label>
              <Textarea id="notes" placeholder="หมายเหตุเพิ่มเติม" />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>
              ยกเลิก
            </Button>
            <Button onClick={() => setShowAddDialog(false)}>
              เพิ่มการนัดหมาย
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chat Dialog */}
      <Dialog open={showChatDialog} onOpenChange={setShowChatDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>ส่งข้อความถึง {selectedInterview?.candidateName}</DialogTitle>
            <DialogDescription>
              ส่งข้อความด่วนผ่านระบบแชท
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chatMessage">ข้อความ</Label>
              <Textarea
                id="chatMessage"
                placeholder="พิมพ์ข้อความของคุณ..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowChatDialog(false)}>
                ยกเลิก
              </Button>
              <Button onClick={handleSubmitChat}>
                ส่งข้อความ
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
