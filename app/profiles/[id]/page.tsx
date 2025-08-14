"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, MapPin, Calendar, Award, Star, ExternalLink, Mail, MessageCircle, Bookmark } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const profileId = Number.parseInt(params.id)

  // In a real app, this would fetch from an API
  const profile = mockProfiles[profileId]

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">ไม่พบโปรไฟล์</h1>
          <p className="text-slate-600 mb-4">โปรไฟล์ที่คุณกำลังค้นหาไม่มีอยู่</p>
          <Link href="/profiles">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              กลับไปยังโปรไฟล์
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/profiles" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับไปยังการค้นหา
            </Link>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-indigo-600 border-indigo-600" : "border-slate-200 hover:bg-slate-50"}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-current" : ""}`} />
                {isBookmarked ? "บุ๊กมาร์กแล้ว" : "บุ๊กมาร์ก"}
              </Button>
              <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50">
                <MessageCircle className="w-4 h-4 mr-2" />
                ข้อความ
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                <Mail className="w-4 h-4 mr-2" />
                ติดต่อ
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-2xl">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">{profile.name}</h1>
                    <p className="text-xl text-slate-700 mb-4">{profile.title}</p>
                    <div className="flex items-center gap-6 text-slate-600 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {profile.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {profile.experience} ปี ประสบการณ์
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {profile.credentials.length} ข้อมูลประจำตัว
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          profile.availability === "immediate"
                            ? "bg-green-500"
                            : profile.availability === "2weeks"
                              ? "bg-yellow-500"
                              : profile.availability === "1month"
                                ? "bg-orange-500"
                                : "bg-blue-500"
                        }`}
                      />
                      <span className="text-slate-700 font-medium">
                        {profile.availability === "immediate"
                          ? "พร้อมทันที"
                          : profile.availability === "2weeks"
                            ? "พร้อมด้วยการแจ้งล่วงหน้า 2 สัปดาห์"
                            : profile.availability === "1month"
                              ? "พร้อมด้วยการแจ้งล่วงหน้า 1 เดือน"
                              : "เปิดรับโอกาส"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Professional Summary */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>สรุปมืออาชีพ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{profile.summary}</p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ประสบการณ์มืออาชีพ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockExperiences.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{exp.title}</h3>
                        <p className="text-slate-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-slate-500">{exp.duration}</p>
                      </div>
                      <Badge variant="outline" className="border-slate-200">{exp.type}</Badge>
                    </div>
                    <p className="text-slate-700 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium text-slate-900 mb-2">ความสำเร็จหลัก:</h4>
                      <ul className="list-disc list-inside space-y-1 text-slate-700">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < mockExperiences.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>โปรเจคที่โดดเด่น</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockProjects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                        <p className="text-slate-600">{project.role}</p>
                      </div>
                      {project.url && (
                        <Button variant="outline" size="sm" asChild className="border-slate-200 hover:bg-slate-50">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            ดู
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-slate-700 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {index < mockProjects.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Skills */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ทักษะและความเชี่ยวชาญ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mb-2 bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ข้อมูลประจำตัวและใบรับรอง</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.credentials.map((cred, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{cred.name}</p>
                      <p className="text-sm text-slate-600">{cred.issuer}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ข้อมูลการติดต่อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-slate-600">
                  <p className="mb-2">สนใจที่จะเชื่อมต่อกับ {profile.name.split(" ")[0]}?</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                      <Mail className="w-4 h-4 mr-2" />
                      ส่งข้อความ
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent border-slate-200 hover:bg-slate-50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      จองการโทร
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>กิจกรรมล่าสุด</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-slate-600">
                  <p>อัปเดตโปรไฟล์ {profile.lastUpdated}</p>
                  <p>เพิ่มใบรับรองใหม่ 1 สัปดาห์ที่แล้ว</p>
                  <p>อัปเดตส่วนประสบการณ์ 2 สัปดาห์ที่แล้ว</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Mock data for detailed profile view
const mockProfiles = [
  {
    name: "ซาราห์ เฉิน",
    title: "วิศวกร ML อาวุโส",
    location: "ซานฟรานซิสโก, แคลิฟอร์เนีย",
    experience: 8,
    availability: "open",
    summary:
      "วิศวกร ML ที่หลงใหลใน computer vision และ NLP นำการพัฒนาระบบแนะนำที่ให้บริการผู้ใช้ 10 ล้านคนขึ้นไป นักวิจัยที่ตีพิมพ์บทความ 15+ บทความในงานประชุมระดับสูง มีประสบการณ์ในการปรับขนาดโครงสร้างพื้นฐาน ML และสร้างระบบ AI ที่พร้อมใช้งานจริง",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "NLP",
      "AWS",
      "Kubernetes",
      "Python",
      "Scala",
      "MLOps",
      "Deep Learning",
    ],
    credentials: [
      { name: "AWS Machine Learning Specialty", issuer: "Amazon Web Services" },
      { name: "Google Cloud Professional ML Engineer", issuer: "Google Cloud" },
      { name: "ปริญญาเอกวิทยาศาสตร์คอมพิวเตอร์", issuer: "มหาวิทยาลัยสแตนฟอร์ด" },
    ],
    recentRole: {
      title: "วิศวกร ML อาวุโส",
      company: "Meta",
      duration: "2021 - ปัจจุบัน",
    },
    lastUpdated: "2 วันที่แล้ว",
  },
  // Add other profiles here...
]

const mockExperiences = [
  {
    title: "วิศวกร ML อาวุโส",
    company: "Meta",
    duration: "2021 - ปัจจุบัน",
    type: "งานเต็มเวลา",
    description:
      "นำการพัฒนาองค์ประกอบ ML สำหรับระบบแนะนำที่ให้บริการผู้ใช้ 10 ล้านคนขึ้นไปต่อวัน สถาปัตยกรรม ML pipeline ที่ปรับขนาดได้และใช้โมเดล deep learning ล่าสุดสำหรับการปรับเนื้อหาส่วนบุคคล",
    achievements: [
      "ปรับปรุง CTR ของการแนะนำ 23% ผ่านโมเดล deep learning ขั้นสูง",
      "ลดเวลาในการฝึกโมเดล 60% ผ่านการปรับให้เหมาะสมของการคำนวณแบบกระจาย",
      "นำทีมวิศวกร 6 คนในการพัฒนาระบบ ML inference แบบเรียลไทม์",
      "ตีพิมพ์บทความ 3 บทความในงานประชุม ML ระดับสูง (NeurIPS, ICML)",
    ],
    technologies: ["TensorFlow", "PyTorch", "Kubernetes", "AWS", "Python", "Scala", "Apache Spark"],
  },
  {
    title: "วิศวกร ML",
    company: "Uber",
    duration: "2019 - 2021",
    type: "งานเต็มเวลา",
    description:
      "พัฒนาโมเดล ML สำหรับการคาดการณ์ความต้องการและราคาแบบไดนามิก สร้าง ML pipeline แบบ end-to-end สำหรับระบบการทำนายแบบเรียลไทม์ที่จัดการคำขอหลายล้านรายการต่อวัน",
    achievements: [
      "สร้างโมเดลการคาดการณ์ความต้องการที่ปรับปรุงความแม่นยำ 35%",
      "ใช้การปรับราคาแบบเรียลไทม์ที่ลดเวลารอ 18%",
      "ออกแบบกรอบการทดสอบ A/B สำหรับการประเมินโมเดล ML",
      "ให้คำปรึกษาวิศวกรจูเนียร์ 3 คนในแนวปฏิบัติที่ดีที่สุดของ ML",
    ],
    technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis", "PostgreSQL", "Docker"],
  },
]

const mockProjects = [
  {
    name: "เครื่องยนต์การแนะนำเนื้อหาแบบเรียลไทม์",
    role: "ผู้นำทางเทคนิค",
    description:
      "สร้างระบบการแนะนำที่ซับซ้อนโดยใช้ deep learning และ collaborative filtering เพื่อปรับเนื้อหาส่วนบุคคลสำหรับผู้ใช้หลายล้านคน ใช้ inference แบบเรียลไทม์ที่มีความต้องการ latency ต่ำกว่า 100ms",
    technologies: ["TensorFlow", "Kubernetes", "Redis", "Apache Kafka", "Python"],
    url: "https://github.com/example/recommendation-engine",
  },
  {
    name: "Computer Vision สำหรับการถ่ายภาพทางการแพทย์",
    role: "ผู้ร่วมวิจัย",
    description:
      "พัฒนาโมเดล CNN สำหรับการวิเคราะห์ภาพทางการแพทย์อัตโนมัติ บรรลุความแม่นยำ 94% ในการจำแนกการวินิจฉัย ร่วมมือกับรังสีแพทย์เพื่อตรวจสอบประสิทธิภาพของโมเดล",
    technologies: ["PyTorch", "OpenCV", "DICOM", "Python", "Docker"],
    url: null,
  },
]
