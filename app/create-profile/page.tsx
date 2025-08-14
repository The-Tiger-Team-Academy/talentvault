"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, X, ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function CreateProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    location: "",
    summary: "",
    skills: [] as string[],
    experiences: [] as Experience[],
    credentials: [] as Credential[],
  })

  const [newSkill, setNewSkill] = useState("")
  const [newExperience, setNewExperience] = useState<Experience>({
    title: "",
    company: "",
    duration: "",
    description: "",
    achievements: [],
    technologies: [],
  })
  const [newCredential, setNewCredential] = useState<Credential>({
    name: "",
    issuer: "",
    date: "",
    description: "",
    verificationUrl: "",
  })

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }))
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skill),
    }))
  }

  const addExperience = () => {
    if (newExperience.title && newExperience.company) {
      setProfile((prev) => ({
        ...prev,
        experiences: [...prev.experiences, { ...newExperience }],
      }))
      setNewExperience({
        title: "",
        company: "",
        duration: "",
        description: "",
        achievements: [],
        technologies: [],
      })
    }
  }

  const addCredential = () => {
    if (newCredential.name && newCredential.issuer) {
      setProfile((prev) => ({
        ...prev,
        credentials: [...prev.credentials, { ...newCredential }],
      }))
      setNewCredential({
        name: "",
        issuer: "",
        date: "",
        description: "",
        verificationUrl: "",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              <Save className="w-4 h-4 mr-2" />
              บันทึกโปรไฟล์
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">สร้างโปรไฟล์มืออาชีพของคุณ</h1>
          <p className="text-slate-600">แสดงเรื่องราวมืออาชีพที่สมบูรณ์โดยไม่มีข้อจำกัด</p>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>ข้อมูลพื้นฐาน</CardTitle>
              <CardDescription>เริ่มต้นด้วยรายละเอียดมืออาชีพหลักของคุณ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">ชื่อเต็ม</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="ชื่อเต็มของคุณ"
                    className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <Label htmlFor="title">ตำแหน่งมืออาชีพ</Label>
                  <Input
                    id="title"
                    value={profile.title}
                    onChange={(e) => setProfile((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="เช่น นักพัฒนาซอฟต์แวร์อาวุโส"
                    className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="location">สถานที่</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="เมือง, จังหวัด/ประเทศ"
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <Label htmlFor="summary">สรุปมืออาชีพ</Label>
                <Textarea
                  id="summary"
                  value={profile.summary}
                  onChange={(e) => setProfile((prev) => ({ ...prev, summary: e.target.value }))}
                  placeholder="อธิบายภูมิหลังมืออาชีพ ความเชี่ยวชาญ และเป้าหมายอาชีพของคุณ..."
                  rows={4}
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>ทักษะและความเชี่ยวชาญ</CardTitle>
              <CardDescription>เพิ่มทักษะทางเทคนิคและมืออาชีพทั้งหมดของคุณ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-4">
                <Input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="เพิ่มทักษะ..."
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Button onClick={addSkill} size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1 bg-slate-100 text-slate-700">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="ml-1 hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>ประสบการณ์มืออาชีพ</CardTitle>
              <CardDescription>รายละเอียดประวัติการทำงานของคุณด้วยบริบทที่ไม่จำกัด</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Experience Form */}
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                <h4 className="font-semibold mb-4">เพิ่มประสบการณ์</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="exp-title">ตำแหน่งงาน</Label>
                      <Input
                        id="exp-title"
                        value={newExperience.title}
                        onChange={(e) => setNewExperience((prev) => ({ ...prev, title: e.target.value }))}
                        placeholder="เช่น นักพัฒนาซอฟต์แวร์อาวุโส"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="exp-company">บริษัท</Label>
                      <Input
                        id="exp-company"
                        value={newExperience.company}
                        onChange={(e) => setNewExperience((prev) => ({ ...prev, company: e.target.value }))}
                        placeholder="ชื่อบริษัท"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="exp-duration">ระยะเวลา</Label>
                    <Input
                      id="exp-duration"
                      value={newExperience.duration}
                      onChange={(e) => setNewExperience((prev) => ({ ...prev, duration: e.target.value }))}
                      placeholder="เช่น ม.ค. 2020 - ปัจจุบัน"
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="exp-description">คำอธิบายและความสำเร็จ</Label>
                    <Textarea
                      id="exp-description"
                      value={newExperience.description}
                      onChange={(e) => setNewExperience((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="อธิบายบทบาท หน้าที่รับผิดชอบ และความสำเร็จหลัก..."
                      rows={4}
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <Button onClick={addExperience} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มประสบการณ์
                  </Button>
                </div>
              </div>

              {/* Existing Experiences */}
              {profile.experiences.map((exp, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 bg-white/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-slate-600">
                        {exp.company} • {exp.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 whitespace-pre-wrap">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Credentials */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>ข้อมูลประจำตัวและใบรับรอง</CardTitle>
              <CardDescription>แสดงใบรับรองมืออาชีพและความสำเร็จของคุณ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Credential Form */}
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
                <h4 className="font-semibold mb-4">เพิ่มข้อมูลประจำตัว</h4>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cred-name">ชื่อข้อมูลประจำตัว</Label>
                      <Input
                        id="cred-name"
                        value={newCredential.name}
                        onChange={(e) => setNewCredential((prev) => ({ ...prev, name: e.target.value }))}
                        placeholder="เช่น AWS Solutions Architect"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cred-issuer">องค์กรที่ออก</Label>
                      <Input
                        id="cred-issuer"
                        value={newCredential.issuer}
                        onChange={(e) => setNewCredential((prev) => ({ ...prev, issuer: e.target.value }))}
                        placeholder="เช่น Amazon Web Services"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cred-date">วันที่ได้รับ</Label>
                    <Input
                      id="cred-date"
                      value={newCredential.date}
                      onChange={(e) => setNewCredential((prev) => ({ ...prev, date: e.target.value }))}
                      placeholder="เช่น มีนาคม 2023"
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cred-description">คำอธิบาย</Label>
                    <Textarea
                      id="cred-description"
                      value={newCredential.description}
                      onChange={(e) => setNewCredential((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="อธิบายว่าข้อมูลประจำตัวนี้แสดงถึงอะไร..."
                      rows={3}
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cred-url">URL การยืนยัน (ไม่บังคับ)</Label>
                    <Input
                      id="cred-url"
                      value={newCredential.verificationUrl}
                      onChange={(e) => setNewCredential((prev) => ({ ...prev, verificationUrl: e.target.value }))}
                      placeholder="ลิงก์เพื่อยืนยันข้อมูลประจำตัวนี้"
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <Button onClick={addCredential} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    เพิ่มข้อมูลประจำตัว
                  </Button>
                </div>
              </div>

              {/* Existing Credentials */}
              {profile.credentials.map((cred, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 bg-white/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg">{cred.name}</h4>
                      <p className="text-slate-600">
                        {cred.issuer} • {cred.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-2">{cred.description}</p>
                  {cred.verificationUrl && (
                    <a
                      href={cred.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 text-sm"
                    >
                      ยืนยันข้อมูลประจำตัว →
                    </a>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface Experience {
  title: string
  company: string
  duration: string
  description: string
  achievements: string[]
  technologies: string[]
}

interface Credential {
  name: string
  issuer: string
  date: string
  description: string
  verificationUrl: string
}
