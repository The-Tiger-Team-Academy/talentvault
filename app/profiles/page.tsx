"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowLeft, 
  Search, 
  Users, 
  Filter, 
  MapPin, 
  Briefcase, 
  Star, 
  Eye,
  MessageCircle,
  Calendar,
  Building2,
  GraduationCap,
  Award,
  Clock,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProfilesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedExperience, setSelectedExperience] = useState("")

  // Mock data for demonstration
  const profiles = [
    {
      id: 1,
      name: "สมชาย ใจดี",
      title: "Senior Software Engineer",
      location: "กรุงเทพมหานคร",
      experience: "5-8 ปี",
      skills: ["React", "Node.js", "TypeScript", "MongoDB"],
      education: "วิทยาการคอมพิวเตอร์ - มหาวิทยาลัยธรรมศาสตร์",
      rating: 4.8,
      verified: true,
      lastActive: "2 ชั่วโมงที่แล้ว"
    },
    {
      id: 2,
      name: "สมหญิง สมบูรณ์",
      title: "UX/UI Designer",
      location: "เชียงใหม่",
      experience: "3-5 ปี",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      education: "การออกแบบกราฟิก - มหาวิทยาลัยเชียงใหม่",
      rating: 4.9,
      verified: true,
      lastActive: "1 วันที่แล้ว"
    },
    {
      id: 3,
      name: "วิชัย วิศวกร",
      title: "Data Scientist",
      location: "กรุงเทพมหานคร",
      experience: "8-10 ปี",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      education: "วิศวกรรมคอมพิวเตอร์ - จุฬาลงกรณ์มหาวิทยาลัย",
      rating: 4.7,
      verified: true,
      lastActive: "3 ชั่วโมงที่แล้ว"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              TalentVault
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/getting-started" className="text-foreground border-b-2 border-primary pb-1">
                ผลิตภัณฑ์
              </Link>
              <Link href="/employers" className="text-muted-foreground hover:text-foreground transition-colors">
                กลุ่มลูกค้า
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                เกี่ยวกับเรา
              </Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                ทรัพยากร
              </Link>
              <Link href="/employer-dashboard">
                <Button variant="outline" size="sm">
                  แดชบอร์ด
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
              ค้นพบผู้มีความสามารถพิเศษ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ค้นหาผู้สมัครที่มีทักษะเฉพาะและข้อมูลประจำตัวที่ได้รับการยืนยันแล้ว
            </p>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <Card className="border-0 shadow-xl bg-card/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  ค้นหาและกรอง
                </CardTitle>
                <CardDescription>
                  ใช้เครื่องมือค้นหาขั้นสูงเพื่อหาผู้สมัครที่เหมาะสมที่สุด
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="ค้นหาตามทักษะ, ตำแหน่ง, หรือชื่อ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกสถานที่" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangkok">กรุงเทพมหานคร</SelectItem>
                      <SelectItem value="chiangmai">เชียงใหม่</SelectItem>
                      <SelectItem value="phuket">ภูเก็ต</SelectItem>
                      <SelectItem value="remote">ทำงานจากที่บ้าน</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประสบการณ์" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 ปี</SelectItem>
                      <SelectItem value="3-5">3-5 ปี</SelectItem>
                      <SelectItem value="5-8">5-8 ปี</SelectItem>
                      <SelectItem value="8+">8+ ปี</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Stats Section */}
          <section className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">2,847</p>
                      <p className="text-sm text-muted-foreground">ผู้มีความสามารถ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-secondary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">1,234</p>
                      <p className="text-sm text-muted-foreground">ได้รับการยืนยันแล้ว</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent/10 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-accent" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">89%</p>
                      <p className="text-sm text-muted-foreground">อัตราการตอบสนอง</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-2xl font-bold text-foreground">24h</p>
                      <p className="text-sm text-muted-foreground">เวลาตอบสนองเฉลี่ย</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Profiles Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">ผู้มีความสามารถที่แนะนำ</h2>
              <Badge variant="secondary" className="px-4 py-2">
                แสดง {profiles.length} รายการ
              </Badge>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {profiles.map((profile) => (
                <Card key={profile.id} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {profile.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{profile.title}</p>
                        </div>
                      </div>
                      {profile.verified && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                          ยืนยันแล้ว
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {profile.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {profile.experience}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{profile.rating}</span>
                      <span className="text-xs text-muted-foreground">({profile.lastActive})</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">ทักษะหลัก</h4>
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-2">การศึกษา</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GraduationCap className="w-4 h-4" />
                        {profile.education}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary/50 transition-colors">
                        <Eye className="w-4 h-4 mr-2" />
                        ดูโปรไฟล์
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 group-hover:border-primary/50 transition-colors">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        ส่งข้อความ
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        
        </div>
      </main>

    </div>
  )
}
