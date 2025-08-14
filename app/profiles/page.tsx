"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Award, ArrowLeft, Filter, Bookmark, Star, Users } from "lucide-react"
import Link from "next/link"

export default function ProfilesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [skillFilter, setSkillFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [experienceLevel, setExperienceLevel] = useState("")
  const [availabilityFilter, setAvailabilityFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [savedSearches, setSavedSearches] = useState<string[]>([])
  const [bookmarkedProfiles, setBookmarkedProfiles] = useState<number[]>([])

  const filteredProfiles = mockProfiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.summary.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSkill =
      !skillFilter || profile.skills.some((skill) => skill.toLowerCase().includes(skillFilter.toLowerCase()))

    const matchesLocation = !locationFilter || profile.location.toLowerCase().includes(locationFilter.toLowerCase())

    const matchesExperience =
      !experienceLevel ||
      (experienceLevel === "junior" && profile.experience <= 3) ||
      (experienceLevel === "mid" && profile.experience >= 4 && profile.experience <= 7) ||
      (experienceLevel === "senior" && profile.experience >= 8)

    const matchesAvailability = !availabilityFilter || profile.availability === availabilityFilter

    return matchesSearch && matchesSkill && matchesLocation && matchesExperience && matchesAvailability
  })

  const toggleBookmark = (profileIndex: number) => {
    setBookmarkedProfiles((prev) =>
      prev.includes(profileIndex) ? prev.filter((id) => id !== profileIndex) : [...prev, profileIndex],
    )
  }

  const saveCurrentSearch = () => {
    const searchQuery = `${searchTerm} ${skillFilter} ${locationFilter}`.trim()
    if (searchQuery && !savedSearches.includes(searchQuery)) {
      setSavedSearches((prev) => [...prev, searchQuery])
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="border-slate-200 hover:bg-slate-50">
                <Bookmark className="w-4 h-4 mr-2" />
                บันทึก ({bookmarkedProfiles.length})
              </Button>
              <Link href="/create-profile">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                  สร้างโปรไฟล์
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">ค้นพบผู้มีความสามารถพิเศษ</h1>
          <p className="text-slate-600">หาผู้เชี่ยวชาญที่มีทักษะและประสบการณ์ที่คุณต้องการอย่างแท้จริง</p>
        </div>

        {/* Enhanced Search and Filters */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <Input
                      placeholder="ค้นหาตามชื่อ ตำแหน่ง ทักษะ หรือคำสำคัญ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 border-slate-200 hover:bg-slate-50"
                >
                  <Filter className="w-4 h-4" />
                  ตัวกรอง
                </Button>
                <Button onClick={saveCurrentSearch} variant="outline" className="border-slate-200 hover:bg-slate-50">
                  บันทึกการค้นหา
                </Button>
              </div>

              {/* Advanced Filters */}
              {showFilters && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">ทักษะ</label>
                    <Input
                      placeholder="เช่น React, Python..."
                      value={skillFilter}
                      onChange={(e) => setSkillFilter(e.target.value)}
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">สถานที่</label>
                    <Input
                      placeholder="เมือง, จังหวัด..."
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                      className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">ระดับประสบการณ์</label>
                    <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                      <SelectTrigger className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500">
                        <SelectValue placeholder="ระดับใดก็ได้" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">ระดับใดก็ได้</SelectItem>
                        <SelectItem value="junior">จูเนียร์ (0-3 ปี)</SelectItem>
                        <SelectItem value="mid">ระดับกลาง (4-7 ปี)</SelectItem>
                        <SelectItem value="senior">อาวุโส (8+ ปี)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">ความพร้อม</label>
                    <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                      <SelectTrigger className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500">
                        <SelectValue placeholder="ความพร้อมใดก็ได้" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">ความพร้อมใดก็ได้</SelectItem>
                        <SelectItem value="immediate">พร้อมทันที</SelectItem>
                        <SelectItem value="2weeks">แจ้งล่วงหน้า 2 สัปดาห์</SelectItem>
                        <SelectItem value="1month">แจ้งล่วงหน้า 1 เดือน</SelectItem>
                        <SelectItem value="open">เปิดรับโอกาส</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Saved Searches */}
              {savedSearches.length > 0 && (
                <div className="pt-4 border-t border-slate-200">
                  <label className="text-sm font-medium text-slate-700 mb-2 block">การค้นหาที่บันทึก</label>
                  <div className="flex flex-wrap gap-2">
                    {savedSearches.map((search, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-indigo-50 border-slate-200"
                        onClick={() => {
                          const parts = search.split(" ")
                          setSearchTerm(parts[0] || "")
                          setSkillFilter(parts[1] || "")
                          setLocationFilter(parts[2] || "")
                        }}
                      >
                        {search}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-slate-600">
              พบผู้เชี่ยวชาญ {filteredProfiles.length} คน
            </p>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-500">
                {Math.round(filteredProfiles.length * 0.23)} คนกำลังมองหางาน
              </span>
            </div>
          </div>
          <Select defaultValue="any">
            <SelectTrigger className="w-48 border-slate-200">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">เรียงตามความเกี่ยวข้อง</SelectItem>
              <SelectItem value="experience">เรียงตามประสบการณ์</SelectItem>
              <SelectItem value="updated">อัปเดตล่าสุด</SelectItem>
              <SelectItem value="location">เรียงตามสถานที่</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Enhanced Profile Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProfiles.map((profile, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1 group-hover:text-indigo-600 transition-colors">
                          <Link href={`/profiles/${index}`}>{profile.name}</Link>
                        </CardTitle>
                        <CardDescription className="text-base font-medium text-slate-700 mb-2">
                          {profile.title}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleBookmark(index)}
                        className={bookmarkedProfiles.includes(index) ? "text-indigo-600" : "text-slate-400"}
                      >
                        <Bookmark className={`w-4 h-4 ${bookmarkedProfiles.includes(index) ? "fill-current" : ""}`} />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {profile.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {profile.experience} ปี ประสบการณ์
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        {profile.credentials.length} ข้อมูลประจำตัว
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          profile.availability === "immediate"
                            ? "bg-green-500"
                            : profile.availability === "2weeks"
                              ? "bg-yellow-500"
                              : profile.availability === "1month"
                                ? "bg-orange-500"
                                : "bg-blue-500"
                        }`}
                      />
                      <span className="text-sm text-slate-600 capitalize">
                        {profile.availability === "immediate"
                          ? "พร้อมทันที"
                          : profile.availability === "2weeks"
                            ? "แจ้งล่วงหน้า 2 สัปดาห์"
                            : profile.availability === "1month"
                              ? "แจ้งล่วงหน้า 1 เดือน"
                              : "เปิดรับโอกาส"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">{profile.summary}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">ทักษะหลัก</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.slice(0, 6).map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs hover:bg-indigo-100 cursor-pointer bg-slate-100 text-slate-700">
                        {skill}
                      </Badge>
                    ))}
                    {profile.skills.length > 6 && (
                      <Badge variant="outline" className="text-xs border-slate-200">
                        +{profile.skills.length - 6} เพิ่มเติม
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">ประสบการณ์ล่าสุด</h4>
                  <div className="text-sm text-slate-600">
                    <p className="font-medium">{profile.recentRole.title}</p>
                    <p>
                      {profile.recentRole.company} • {profile.recentRole.duration}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-slate-700 mb-2">ข้อมูลประจำตัวชั้นนำ</h4>
                  <div className="space-y-1">
                    {profile.credentials.slice(0, 2).map((cred, i) => (
                      <div key={i} className="text-sm text-slate-600 flex items-center gap-2">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="font-medium">{cred.name}</span>
                        <span className="text-slate-400">•</span>
                        <span>{cred.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <div className="text-sm text-slate-500">อัปเดต: {profile.lastUpdated}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-slate-200 hover:bg-slate-50">
                      <Link href={`/profiles/${index}`}>ดูโปรไฟล์</Link>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      ติดต่อ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProfiles.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">ไม่พบโปรไฟล์</h3>
            <p className="text-slate-600 mb-4">ลองปรับเกณฑ์การค้นหาหรือตัวกรองของคุณ</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSkillFilter("")
                setLocationFilter("")
                setExperienceLevel("")
                setAvailabilityFilter("")
              }}
              className="border-slate-200 hover:bg-slate-50"
            >
              ล้างตัวกรองทั้งหมด
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

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
  {
    name: "มาร์คัส โรดริเกซ",
    title: "สถาปนิก Blockchain",
    location: "ออสติน, เท็กซัส",
    experience: 6,
    availability: "immediate",
    summary:
      "สถาปนิก blockchain ที่เชี่ยวชาญในพรอโตคอล DeFi และความปลอดภัยของ smart contract สร้างและตรวจสอบ smart contract มูลค่า 500 ล้านดอลลาร์ขึ้นไป ผู้เชี่ยวชาญใน Solidity, Rust และเทคโนโลยี Web3 นำการรวม blockchain สำหรับบริษัท Fortune 500",
    skills: [
      "Solidity",
      "Rust",
      "Web3",
      "DeFi",
      "Smart Contracts",
      "Ethereum",
      "Polygon",
      "Security Auditing",
      "Node.js",
      "React",
    ],
    credentials: [
      { name: "Certified Ethereum Developer", issuer: "Ethereum Foundation" },
      { name: "Blockchain Security Specialist", issuer: "ConsenSys" },
      { name: "ปริญญาโทในสาขา Cryptography", issuer: "MIT" },
    ],
    recentRole: {
      title: "สถาปนิก Blockchain หลัก",
      company: "Chainlink Labs",
      duration: "2020 - ปัจจุบัน",
    },
    lastUpdated: "1 สัปดาห์ที่แล้ว",
  },
  {
    name: "ไอชา ปาเทล",
    title: "ผู้เชี่ยวชาญ DevOps & โครงสร้างพื้นฐานคลาวด์",
    location: "ซีแอตเทิล, วอชิงตัน",
    experience: 7,
    availability: "2weeks",
    summary:
      "วิศวกร DevOps ที่มีความเชี่ยวชาญลึกซึ้งในสถาปัตยกรรม cloud-native และการประสานงานคอนเทนเนอร์ ลดเวลาในการปรับใช้ลง 90% และต้นทุนโครงสร้างพื้นฐานลง 40% ได้รับการรับรองในแพลตฟอร์มคลาวด์หลักทั้งหมด มีประสบการณ์จัดการระบบขนาดเพตะไบต์",
    skills: [
      "Kubernetes",
      "Docker",
      "Terraform",
      "AWS",
      "GCP",
      "Azure",
      "CI/CD",
      "Monitoring",
      "Linux",
      "Python",
      "Go",
    ],
    credentials: [
      { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services" },
      { name: "Certified Kubernetes Administrator", issuer: "CNCF" },
      { name: "Google Cloud Professional DevOps Engineer", issuer: "Google Cloud" },
    ],
    recentRole: {
      title: "วิศวกร DevOps อาวุโส",
      company: "Netflix",
      duration: "2019 - ปัจจุบัน",
    },
    lastUpdated: "3 วันที่แล้ว",
  },
  {
    name: "เดวิด คิม",
    title: "นักวิจัยคอมพิวเตอร์ควอนตัม",
    location: "บอสตัน, แมสซาชูเซตส์",
    experience: 5,
    availability: "1month",
    summary:
      "นักวิจัยคอมพิวเตอร์ควอนตัมที่มีความเชี่ยวชาญในอัลกอริทึมควอนตัมและการแก้ไขข้อผิดพลาด ตีพิมพ์บทความ 20+ บทความใน Nature และ Science พัฒนาอัลกอริทึมควอนตัมสำหรับปัญหาการปรับให้เหมาะสมที่มีความเร็วเพิ่มขึ้น 1000 เท่าเมื่อเทียบกับวิธีแบบคลาสสิก",
    skills: [
      "Qiskit",
      "Cirq",
      "Quantum Algorithms",
      "Python",
      "C++",
      "Linear Algebra",
      "Quantum Error Correction",
      "Research",
      "MATLAB",
    ],
    credentials: [
      { name: "ปริญญาเอกฟิสิกส์ควอนตัม", issuer: "มหาวิทยาลัยฮาร์วาร์ด" },
      { name: "IBM Quantum Developer Certification", issuer: "IBM" },
      { name: "นักวิจัยคอมพิวเตอร์ควอนตัม", issuer: "IEEE" },
    ],
    recentRole: {
      title: "นักวิจัยหลัก",
      company: "IBM Quantum",
      duration: "2021 - ปัจจุบัน",
    },
    lastUpdated: "5 วันที่แล้ว",
  },
  {
    name: "เอเลนา วอลคอฟ",
    title: "ผู้เชี่ยวชาญความปลอดภัยไซเบอร์ & ข่าวกรองภัยคุกคาม",
    location: "วอชิงตัน, ดีซี",
    experience: 10,
    availability: "open",
    summary:
      "ผู้เชี่ยวชาญความปลอดภัยไซเบอร์ที่มีประสบการณ์มากมายในการล่าหาและตอบสนองต่อเหตุการณ์ นำความปลอดภัยสำหรับโครงสร้างพื้นฐานที่สำคัญที่ปกป้องผู้ใช้ 50 ล้านคนขึ้นไป นักแฮกที่มีจริยธรรมที่ได้รับการรับรอง มีความเชี่ยวชาญในภัยคุกคามที่ยั่งยืนและช่องโหว่ zero-day",
    skills: [
      "Penetration Testing",
      "Threat Hunting",
      "SIEM",
      "Incident Response",
      "Network Security",
      "Malware Analysis",
      "Python",
      "PowerShell",
    ],
    credentials: [
      { name: "CISSP", issuer: "ISC2" },
      { name: "OSCP", issuer: "Offensive Security" },
      { name: "GCIH", issuer: "SANS Institute" },
      { name: "ปริญญาโทความปลอดภัยไซเบอร์", issuer: "มหาวิทยาลัยจอร์จทาวน์" },
    ],
    recentRole: {
      title: "สถาปนิกความปลอดภัยหลัก",
      company: "CrowdStrike",
      duration: "2020 - ปัจจุบัน",
    },
    lastUpdated: "1 วันที่แล้ว",
  },
  {
    name: "เจมส์ ทอมป์สัน",
    title: "นักพัฒนา AR/VR & เทคโนโลยีการแชร์",
    location: "ลอสแองเจลิส, แคลิฟอร์เนีย",
    experience: 6,
    availability: "immediate",
    summary:
      "นักพัฒนา AR/VR ที่เชี่ยวชาญในประสบการณ์การแชร์และการคำนวณเชิงพื้นที่ สร้างการจำลอง VR ที่ใช้โดย NASA และโรงเรียนแพทย์ ผู้เชี่ยวชาญใน Unity, Unreal Engine และเทคโนโลยี WebXR ผู้บุกเบิกในระบบ haptic feedback",
    skills: [
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
      "3D Modeling",
      "WebXR",
      "OpenXR",
      "Blender",
      "Haptic Systems",
      "Computer Graphics",
    ],
    credentials: [
      { name: "Unity Certified Expert", issuer: "Unity Technologies" },
      { name: "Unreal Engine Developer", issuer: "Epic Games" },
      { name: "ปริญญาโทวิทยาศาสตร์คอมพิวเตอร์กราฟิก", issuer: "USC" },
    ],
    recentRole: {
      title: "นักพัฒนา AR/VR อาวุโส",
      company: "Magic Leap",
      duration: "2021 - ปัจจุบัน",
    },
    lastUpdated: "4 วันที่แล้ว",
  },
]
