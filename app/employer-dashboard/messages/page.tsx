"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  MessageCircle, 
  Users, 
  Search, 
  Send, 
  ArrowLeft,
  Building2,
  TrendingUp,
  Target,
  Star,
  Clock,
  BarChart3,
  Filter
} from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  candidateName: string
  position: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  potential: "high" | "medium" | "low"
  engagement: number
  responseTime: number
}

export default function MessagesPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedCandidate, setSelectedCandidate] = useState<Message | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("messages")

  useEffect(() => {
    const mockMessages: Message[] = [
      {
        id: "1",
        candidateName: "สมชาย ใจดี",
        position: "Senior Software Engineer",
        lastMessage: "ขอบคุณสำหรับการให้โอกาสครับ",
        lastMessageTime: "2 ชั่วโมงที่แล้ว",
        unreadCount: 2,
        potential: "high",
        engagement: 9,
        responseTime: 1.5
      },
      {
        id: "2",
        candidateName: "สมหญิง สมบูรณ์",
        position: "UX/UI Designer",
        lastMessage: "Portfolio ของผมพร้อมแล้วครับ",
        lastMessageTime: "1 วันที่แล้ว",
        unreadCount: 0,
        potential: "medium",
        engagement: 7,
        responseTime: 4
      }
    ]
    setMessages(mockMessages)
  }, [])

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case "high": return "bg-green-100 text-green-800 border-green-200"
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low": return "bg-red-100 text-red-800 border-red-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPotentialText = (potential: string) => {
    switch (potential) {
      case "high": return "สูงมาก"
      case "medium": return "ปานกลาง"
      case "low": return "ต่ำ"
      default: return "ไม่ทราบ"
    }
  }

  if (!user || user.type !== "employer") {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen bg-background">
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
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">ข้อความและ Insights</h1>
            <p className="text-muted-foreground">จัดการการสื่อสารกับผู้สมัครและวิเคราะห์ potential</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                ข้อความ
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Insights & Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="messages" className="space-y-6">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{messages.length}</p>
                        <p className="text-sm text-muted-foreground">การสนทนาทั้งหมด</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-8 h-8 text-secondary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{messages.filter(m => m.potential === "high").length}</p>
                        <p className="text-sm text-muted-foreground">Potential สูง</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="ค้นหาผู้สมัครหรือตำแหน่ง..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    {messages
                      .filter(message => 
                        message.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        message.position.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((message) => (
                        <div
                          key={message.id}
                          className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors rounded-lg ${
                            selectedCandidate?.id === message.id ? 'bg-primary/10 border-l-4 border-primary' : ''
                          }`}
                          onClick={() => setSelectedCandidate(message)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground text-sm">{message.candidateName}</h4>
                              <p className="text-xs text-muted-foreground">{message.position}</p>
                            </div>
                            {message.unreadCount > 0 && (
                              <Badge variant="secondary" className="text-xs">
                                {message.unreadCount}
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {message.lastMessage}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{message.lastMessageTime}</span>
                            <div className="flex items-center gap-2">
                              <Badge className={`text-xs ${getPotentialColor(message.potential)}`}>
                                {getPotentialText(message.potential)}
                              </Badge>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-xs font-medium">{message.engagement}/10</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold text-green-800">{messages.filter(m => m.potential === "high").length}</p>
                        <p className="text-sm text-green-700">ผู้สมัครที่มี Potential สูง</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold text-blue-800">
                          {(messages.reduce((acc, m) => acc + m.engagement, 0) / messages.length).toFixed(1)}/10
                        </p>
                        <p className="text-sm text-blue-700">Engagement เฉลี่ย</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    การวิเคราะห์ Potential
                  </CardTitle>
                  <CardDescription>
                    วิเคราะห์ผู้สมัครตามระดับ potential และ engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-semibold">{message.candidateName}</h4>
                            <p className="text-sm text-muted-foreground">{message.position}</p>
                          </div>
                          <Badge className={getPotentialColor(message.potential)}>
                            {getPotentialText(message.potential)}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary">{message.engagement}/10</p>
                            <p className="text-xs text-muted-foreground">Engagement</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-secondary">{message.responseTime}h</p>
                            <p className="text-xs text-muted-foreground">Response Time</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${(message.engagement / 10) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.round((message.engagement / 10) * 100)}%
                          </span>
                        </div>
                      </div>
                    ))}
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
