"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, Send, Search } from "lucide-react"
import Link from "next/link"

export default function MessagesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState("")

  const filteredChats = mockChats.filter(
    (chat) =>
      chat.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.student.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedChatData = mockChats.find((chat) => chat.student.id === selectedChat)

  const handleSendMessage = () => {
    if (!newMessage.trim()) return
    // ในระบบจริงจะส่งข้อความไปยัง API
    setNewMessage("")
  }

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
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">ข้อความ</h1>
          <p className="text-muted-foreground">สื่อสารกับนักศึกษาและผู้ปกครอง</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Chat List */}
          <Card className="lg:col-span-1 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>การสนทนา</CardTitle>
              <CardDescription>เลือกการสนทนาที่ต้องการ</CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="ค้นหาการสนทนา..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredChats.map((chat) => (
                <div
                  key={chat.student.id}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedChat === chat.student.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedChat(chat.student.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold">
                        {chat.student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{chat.student.name}</p>
                      <p className="text-sm truncate opacity-80">{chat.student.id}</p>
                    </div>
                    {chat.unread > 0 && (
                      <Badge variant="default" className="ml-2">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            {selectedChatData ? (
              <>
                <CardHeader className="border-b border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-semibold">
                        {selectedChatData.student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <CardTitle>{selectedChatData.student.name}</CardTitle>
                      <CardDescription>{selectedChatData.student.id}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] overflow-y-auto py-4 space-y-4">
                    {selectedChatData.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.from === "institution" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] p-3 rounded-lg ${
                            message.from === "institution"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs mt-1 opacity-80">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Textarea
                      placeholder="พิมพ์ข้อความ..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="resize-none"
                      rows={2}
                    />
                    <Button onClick={handleSendMessage} className="self-end">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-semibold text-foreground">เลือกการสนทนา</p>
                  <p className="text-muted-foreground">เลือกการสนทนาจากรายการด้านซ้ายเพื่อดูข้อความ</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

const mockChats = [
  {
    student: {
      name: "นายธนกร รักเรียน",
      id: "64110001",
    },
    unread: 2,
    messages: [
      {
        from: "student",
        content: "สวัสดีครับ อาจารย์",
        time: "10:00",
      },
      {
        from: "institution",
        content: "สวัสดีครับ มีอะไรให้ช่วยไหมครับ",
        time: "10:05",
      },
      {
        from: "student",
        content: "ผมอยากปรึกษาเรื่องการฝึกงานครับ",
        time: "10:07",
      },
    ],
  },
  {
    student: {
      name: "นางสาวสมหญิง ใจดี",
      id: "64110002",
    },
    unread: 0,
    messages: [
      {
        from: "student",
        content: "สวัสดีค่ะ อาจารย์",
        time: "09:30",
      },
      {
        from: "institution",
        content: "สวัสดีค่ะ",
        time: "09:35",
      },
    ],
  },
]
