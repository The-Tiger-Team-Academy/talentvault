"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Calendar as CalendarIcon, Clock, Send } from "lucide-react"

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedDuration, setSelectedDuration] = useState<string>("30")
  const [message, setMessage] = useState("")

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"
  ]

  const handleSchedule = () => {
    if (!date || !selectedTime) return
    // ในระบบจริงจะส่งข้อมูลไปยัง API
    console.log("Scheduled:", { date, time: selectedTime, duration: selectedDuration })
  }

  const handleSendMessage = () => {
    if (!message.trim()) return
    // ในระบบจริงจะส่งข้อความไปยัง API
    console.log("Message sent:", message)
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">นายธนกร รักเรียน</CardTitle>
                <CardDescription>นักศึกษาชั้นปีที่ 3 วิศวกรรมคอมพิวเตอร์</CardDescription>
              </div>
              <div className="flex gap-2">
                {/* ปุ่มส่งข้อความ */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      ส่งข้อความ
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>ส่งข้อความถึงนักศึกษา</DialogTitle>
                      <DialogDescription>
                        ส่งข้อความถึงนายธนกร รักเรียน
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <Textarea
                        placeholder="พิมพ์ข้อความ..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                      />
                      <Button onClick={handleSendMessage} className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        ส่งข้อความ
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* ปุ่มจองการโทร */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      จองการโทร
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl">
                    <DialogHeader>
                      <DialogTitle>จองการโทร</DialogTitle>
                      <DialogDescription>
                        เลือกวันและเวลาที่ต้องการนัดหมายกับนายธนกร รักเรียน
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      {/* Calendar */}
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">เลือกวันที่</label>
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                          disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        />
                      </div>

                      {/* Time Selection */}
                      <div className="space-y-6">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">เลือกเวลา</label>
                          <div className="grid grid-cols-2 gap-2">
                            {availableTimes.map((time) => (
                              <Button
                                key={time}
                                variant={selectedTime === time ? "default" : "outline"}
                                className="justify-start"
                                onClick={() => setSelectedTime(time)}
                              >
                                <Clock className="w-4 h-4 mr-2" />
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">ระยะเวลา</label>
                          <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                            <SelectTrigger>
                              <SelectValue placeholder="เลือกระยะเวลา" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 นาที</SelectItem>
                              <SelectItem value="30">30 นาที</SelectItem>
                              <SelectItem value="45">45 นาที</SelectItem>
                              <SelectItem value="60">1 ชั่วโมง</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {date && selectedTime && (
                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-medium text-foreground mb-2">สรุปการนัดหมาย</h4>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4" />
                                <span>
                                  {date.toLocaleDateString("th-TH", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>
                                  {selectedTime} - {selectedDuration} นาที
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        <Button
                          className="w-full"
                          disabled={!date || !selectedTime}
                          onClick={handleSchedule}
                        >
                          ยืนยันการนัดหมาย
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* ข้อมูลนักศึกษา */}
              <div>
                <h3 className="text-lg font-semibold mb-2">ข้อมูลทั่วไป</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">รหัสนักศึกษา</p>
                    <p>64110001</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ภาควิชา</p>
                    <p>วิศวกรรมคอมพิวเตอร์</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ชั้นปี</p>
                    <p>ปี 3</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">เกรดเฉลี่ย</p>
                    <p>3.75</p>
                  </div>
                </div>
              </div>

              {/* ทักษะ */}
              <div>
                <h3 className="text-lg font-semibold mb-2">ทักษะ</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "React", "Node.js", "SQL", "Git"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* ประสบการณ์ */}
              <div>
                <h3 className="text-lg font-semibold mb-2">ประสบการณ์</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <p className="font-medium">นักศึกษาฝึกงาน - บริษัท Tech Corp</p>
                    <p className="text-sm text-muted-foreground">มิถุนายน 2023 - สิงหาคม 2023</p>
                    <p className="mt-2">พัฒนาเว็บแอปพลิเคชันด้วย React และ Node.js</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}