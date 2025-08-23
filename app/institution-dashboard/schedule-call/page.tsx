"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Calendar as CalendarIcon } from "lucide-react"
import Link from "next/link"

export default function ScheduleCallPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [selectedDuration, setSelectedDuration] = useState<string>("30")

  const availableTimes = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
  ]

  const handleSchedule = () => {
    if (!date || !selectedTime) return
    // ในระบบจริงจะส่งข้อมูลไปยัง API
    console.log("Scheduled:", { date, time: selectedTime, duration: selectedDuration })
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">จองการโทร</h1>
          <p className="text-muted-foreground">เลือกวันและเวลาที่ต้องการนัดหมาย</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Calendar */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>เลือกวันที่</CardTitle>
              <CardDescription>เลือกวันที่ต้องการนัดหมาย</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
              />
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>เลือกเวลาและระยะเวลา</CardTitle>
              <CardDescription>เลือกเวลาและระยะเวลาที่ต้องการ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">เวลา</label>
                <div className="grid grid-cols-3 gap-2">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
