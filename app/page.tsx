"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Award, Briefcase, ArrowRight, Play, Pause, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube, CheckCircle, Sparkles, Shield, Star, Eye } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useState, useEffect, useRef } from "react"

export default function HomePage() {
  const { user } = useAuth()
  const [currentHero, setCurrentHero] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Hero variations with different animated elements
  const heroVariations = [
    {
      id: 1,
      badges: [
        { type: "skills", position: "top-20 left-10", delay: "delay-300" },
        { type: "projects", position: "top-32 right-16", delay: "delay-500" },
        { type: "complete", position: "bottom-24 left-20", delay: "delay-700" },
      ],
      elements: [
        { type: "experience", position: "top-40 right-8", delay: "delay-900" },
        { type: "degrees", position: "bottom-16 right-12", delay: "delay-1100" },
      ],
    },
    {
      id: 2,
      badges: [
        { type: "degrees", position: "top-16 left-8", delay: "delay-300" },
        { type: "honor", position: "top-28 right-20", delay: "delay-500" },
        { type: "complete", position: "bottom-20 left-16", delay: "delay-700" },
      ],
      elements: [{ type: "skills", position: "top-36 right-4", delay: "delay-900" }],
    },
    {
      id: 3,
      badges: [
        { type: "complete", position: "top-24 left-12", delay: "delay-300" },
        { type: "degrees", position: "top-20 right-24", delay: "delay-500" },
        { type: "skills", position: "bottom-28 left-8", delay: "delay-700" },
      ],
      elements: [{ type: "skills-panel", position: "bottom-12 right-8", delay: "delay-900" }],
    },
  ]

  const videos = [
    {
      id: 1,
      src: "/หน้าหลัก/1.mp4",
      title: "การสร้างโปรไฟล์มืออาชีพที่โดดเด่น",
      description: "ดูวิธีการสร้างโปรไฟล์ที่โดดเด่นและน่าเชื่อถือที่สามารถช่วยเพิ่มความเชื่อมั่นให้กับผู้สมัครได้",
    },
    {
      id: 2,
      src: "/หน้าหลัก/2.mp4",
      title: "การค้นหาผู้สมัครที่เหมาะสม",
      description: "นายจ้างสามารถค้นหาผู้สมัครที่มีทักษะและความสามารถที่ตรงกับความต้องการของงานที่ต้องการ",
    },
    {
      id: 3,
      src: "/หน้าหลัก/3.mp4",
      title: "การสร้างเครือข่ายมืออาชีพ",
      description: "เชื่อมต่อกับนายจ้างและแสดงความเชี่ยวชาญของคุณเกินรูปแบบดั้งเดิม",
    },
  ]

  const slides = [
    {
      id: 1,
      title: "ข้อมูลประจำตัวที่น่าเชื่อถือ",
      description:
        "ด้วย TalentVault สถาบันต่างๆ สามารถสนับสนุนบุคคลได้ ผ่านข้อมูลรับรองดิจิทัลที่ได้รับการรับรองจากบล็อกเชน ผู้หางานสามารถพกพาปริญญา ใบรับรอง และข้อมูลรับรองอื่นๆ ติดตัวไปได้ตลอดชีวิต ข้อมูลรับรองเหล่านี้ช่วยปกป้องสถาบันจากบันทึกปลอมแปลงที่อาจสร้างความเสียหายต่อชื่อเสียง และช่วยให้นายจ้างสามารถตรวจสอบบันทึกสำคัญได้แบบเรียลไทม์",
      icon: <Shield className="h-8 w-8" />,
      image: "/หน้าหลัก/1.png",
      features: ["การยืนยันด้วยบล็อกเชน", "การตรวจสอบแบบเรียลไทม์", "การพกพาได้ตลอดชีวิต", "การคุ้มครองสถาบัน"],
    },
    {
      id: 2,
      title: "เราทำให้คุณโดดเด่นได้ง่าย",
      description:
        "ทุก TalentVault เริ่มต้นด้วยเนื้อหาเรซูเม่คุณภาพสูงที่สถาบันจัดหาให้ เราดูแลการจัดรูปแบบ นำคุณผ่านการสร้างเรซูเม่ที่ครอบคลุม และจัดรูปแบบที่เครื่องอ่านได้เพื่อให้ TalentVault สามารถใช้ได้ทุกที่ที่คนมองหางาน TalentVault สามารถอัปเดตโดยสถาบันได้ตลอดเวลาเพื่อให้บันทึกทางวิชาการและวิชาชีพสดใหม่ และดูน่าประทับใจ",
      icon: <Star className="h-8 w-8" />,
      image: "/หน้าหลัก/2.png",
      features: ["การจัดรูปแบบแบบมืออาชีพ", "เครื่องอ่านได้", "อัปเดตอัตโนมัติ", "การออกแบบที่สวยงาม"],
    },
    {
      id: 3,
      title: "ค้นพบผู้มีความสามารถที่ซ่อนอยู่",
      description:
        "ผู้หางานและนายจ้างได้รับการปกป้องจากอคติในการจ้างงานในตลาดผู้มีความสามารถที่ได้รับการรับรอง TalentVault ถูกทำให้ไม่ระบุตัวตนเพื่อให้สามารถประเมินโดยนายจ้างได้โดยไม่มีข้อมูลเกี่ยวกับลักษณะภายนอก เชื้อชาติ เพศ หรือชาติพันธุ์ของผู้หางาน",
      icon: <Eye className="h-8 w-8" />,
      image: "/หน้าหลัก/3.png",
      features: ["การจ้างงานที่ปราศจากอคติ", "การประเมินแบบไม่ระบุตัวตน", "การจับคู่ตามทักษะ", "การประเมินที่ยุติธรรม"],
    },
  ]

  const togglePlayPause = () => {
    const next = !isPlaying
    setIsPlaying(next)
    if (videoRef.current) {
      if (next) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handleVideoSelect = (index: number) => {
    setActiveVideo(index)
    setIsPlaying(true)
    // Ensure the new source starts from the beginning and plays after render
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {})
      }
    })
  }

  useEffect(() => {
    setIsVisible(true)
    // Randomly select a hero variation
    setCurrentHero(Math.floor(Math.random() * heroVariations.length))
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isVisible, slides.length])

  const currentVariation = heroVariations[currentHero]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <div
                className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                    สร้างอาชีพด้วย <span className="text-primary">ข้อมูลประจำตัวที่ได้รับการยืนยัน</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    โปรแกรมการรับรองคุณวุฒิมีบทบาทสำคัญในการเตรียมกำลังแรงงาน แต่การทำให้ผู้เรียนและ
                    ผู้เชี่ยวชาญของคุณโดดเด่นในตลาดงานเป็นความท้าทายที่เพิ่มขึ้น TalentVault พร้อมช่วยเหลือ
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8 py-6 group">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    ดูวิธีการทำงาน
                  </Button>
                  <Link href="/job-seeker-login">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                      เริ่มต้นใช้งาน
                  </Button>
                </Link>
              </div>
            </div>

              {/* Right Visual */}
              <div className="relative h-[600px] lg:h-[700px]">
                {/* Base Resume/Profile Image */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                >
                  <div className="w-full h-full bg-card border border-border rounded-2xl shadow-2xl p-8 flex flex-col">
                    {/* Profile Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold">
                          SJ
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-foreground">สมชาย ใจดี</div>
                          <div className="text-sm text-muted-foreground">Frontend Developer · กรุงเทพฯ</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">Verified</Badge>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-foreground mb-2">ทักษะที่ได้รับการยืนยัน</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Next.js</Badge>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-foreground">Frontend Developer · Acme Co.</div>
                          <div className="text-xs text-muted-foreground">2023 – ปัจจุบัน</div>
                        </div>
                        <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                          <li>พัฒนา UI ด้วย React/Next.js พร้อมปรับปรุง Core Web Vitals</li>
                          <li>ร่วมออกแบบ Design System และ Component ที่ใช้ซ้ำได้</li>
                        </ul>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="font-medium text-foreground">UI Engineer · Startup X</div>
                          <div className="text-xs text-muted-foreground">2021 – 2023</div>
                        </div>
                        <ul className="mt-1 text-sm text-muted-foreground list-disc list-inside space-y-1">
                          <li>สร้างหน้า Landing และฟีเจอร์ที่แปลงผู้ใช้ได้สูง</li>
                          <li>ทำงานร่วมกับทีมผลิตภัณฑ์ผ่าน Agile/Scrum</li>
                        </ul>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="mt-auto">
                      <div className="text-sm font-semibold text-foreground mb-2">การศึกษา</div>
                      <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3 border border-border">
                        <div>
                          <div className="text-sm font-medium text-foreground">B.Sc. คอมพิวเตอร์</div>
                          <div className="text-xs text-muted-foreground">มหาวิทยาลัยตัวอย่าง</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary/10 text-primary border-primary/20">Blockchain-Verified</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Badges and Elements */}
                {currentVariation.badges.map((badge, index) => (
                  <div
                    key={`badge-${index}`}
                    className={`absolute w-12 h-12 bg-primary rounded-full shadow-lg animate-bounce ${badge.position} ${badge.delay} ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
                    style={{ animationDuration: "3s", animationDelay: `${index * 0.5}s` }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                      {badge.type === "skills" && "🎯"}
                      {badge.type === "projects" && "📁"}
                      {badge.type === "complete" && "✓"}
                      {badge.type === "degrees" && "🎓"}
                      {badge.type === "honor" && "🏆"}
                    </div>
                  </div>
                ))}

                {currentVariation.elements.map((element, index) => (
                  <div
                    key={`element-${index}`}
                    className={`absolute bg-card border border-border rounded-lg shadow-lg p-3 ${element.position} ${element.delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} transition-all duration-1000`}
                  >
                    {element.type === "experience" && (
                      <div className="w-32">
                        <div className="text-xs font-semibold text-foreground mb-1">ประสบการณ์</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-muted rounded w-full"></div>
                          <div className="h-2 bg-muted rounded w-3/4"></div>
                        </div>
                      </div>
                    )}
                    {element.type === "degrees" && (
                      <div className="w-36">
                        <div className="text-xs font-semibold text-foreground mb-1">การศึกษา</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-muted rounded w-full"></div>
                          <div className="h-2 bg-muted rounded w-4/5"></div>
                        </div>
                      </div>
                    )}
                    {element.type === "skills" && (
                      <div className="w-28">
                        <div className="text-xs font-semibold text-foreground mb-1">ทักษะ</div>
                        <div className="flex flex-wrap gap-1">
                          <div className="h-2 bg-primary rounded w-8"></div>
                          <div className="h-2 bg-secondary rounded w-6"></div>
                          <div className="h-2 bg-accent rounded w-10"></div>
                        </div>
                      </div>
                    )}
                    {element.type === "skills-panel" && (
                      <div className="w-40">
                        <div className="text-xs font-semibold text-foreground mb-2">ทักษะที่ได้รับการยืนยัน</div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-6 bg-primary/10 border border-primary/20 rounded flex items-center justify-center">
                            <span className="text-xs text-primary">React</span>
                          </div>
                          <div className="h-6 bg-secondary/10 border border-secondary/20 rounded flex items-center justify-center">
                            <span className="text-xs text-secondary">Python</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Floating Verification Checkmarks */}
                <div
                  className={`absolute top-8 right-8 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 delay-1500`}
                >
                  <span className="text-white text-sm">✓</span>
                </div>
                <div
                  className={`absolute bottom-8 left-8 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 delay-1700`}
                >
                  <span className="text-white text-sm">✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background backdrop-blur-sm" />
          <div className="relative max-w-6xl mx-auto z-10">
            <div className="text-center mb-20">
            
              <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-10 relative z-10">
              <br />
                โปรไฟล์มืออาชีพโดยไม่มีข้อจำกัด
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10">
                สร้างโปรไฟล์ที่โดดเด่นด้วยข้อมูลที่ครบถ้วนและน่าเชื่อถือ
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 relative z-10">
                         <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                           <CardHeader className="text-center">
                             <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                               <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                               <Award className="w-10 h-10 text-primary relative animate-pulse" />
                             </div>
                             <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">ประสบการณ์ที่ครอบคลุม</CardTitle>
                             <CardDescription className="text-base leading-relaxed">
                               เอกสารทุกโปรเจค บทบาท และความสำเร็จด้วยรายละเอียดและบริบทที่ไม่จำกัด
                             </CardDescription>
                           </CardHeader>
                         </Card>

              <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <Search className="w-10 h-10 text-primary relative animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">การค้นหาขั้นสูง</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    นายจ้างสามารถหาผู้สมัครที่มีทักษะเฉพาะและข้อมูลประจำตัวที่หาได้ยาก
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative group border-0 shadow-xl bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center">
                  <div className="relative w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500" />
                    <Users className="w-10 h-10 text-primary relative animate-pulse" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">เครือข่ายมืออาชีพ</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    เชื่อมต่อกับนายจ้างและแสดงความเชี่ยวชาญของคุณเกินรูปแบบดั้งเดิม
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Player Section */}
        <section id="video-section" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Video Player */}
              <div className="lg:col-span-2">
                <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-video relative w-full h-full video-container">
                    <video
                      key={videos[activeVideo].src}
                      ref={videoRef}
                      src={videos[activeVideo].src}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="lg"
                        onClick={togglePlayPause}
                        className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary text-white shadow-2xl"
                      >
                        {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video List */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl font-bold text-foreground mb-4">ดู TalentVault ในการทำงาน</h2>
                  <p className="text-muted-foreground">
                    ค้นพบว่าแพลตฟอร์มของเราเปลี่ยนแปลงวิธีการแชร์และยืนยันข้อมูลประจำตัวอย่างไร
                  </p>
                </div>

                <div className="space-y-4">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      onClick={() => handleVideoSelect(index)}
                      className={`relative p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                        activeVideo === index
                          ? "bg-primary text-primary-foreground shadow-lg scale-105"
                          : "bg-card hover:bg-muted border border-border hover:shadow-md"
                      }`}
                    >
                      {/* Active indicator */}
                      {activeVideo === index && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-primary-foreground rounded-r-full"></div>
                      )}

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          {activeVideo === index && isPlaying && (
                            <div className="w-6 h-6 flex items-center justify-center">
                              <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                            </div>
                          )}
                          <h3
                            className={`text-lg font-semibold ${
                              activeVideo === index ? "text-primary-foreground" : "text-foreground"
                            }`}
                          >
                            {video.title}
                          </h3>
                        </div>
                        <p
                          className={`text-sm leading-relaxed ${
                            activeVideo === index ? "text-primary-foreground/90" : "text-muted-foreground"
                          }`}
                        >
                          {video.description}
                        </p>
                      </div>

                      {/* Hover effect */}
                      <div
                        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                          activeVideo === index ? "opacity-0" : "opacity-0 hover:opacity-5 bg-primary"
                        }`}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Additional CTA */}
                <div className="pt-6 border-t border-border">
                  <Button variant="outline" className="w-full bg-transparent">
                    ดูทรัพยากรทั้งหมด
                  </Button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Resume Evolution Section */}
        <section id="resume-evolution" className="py-20 bg-gradient-to-br from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div
                className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <div className="space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                    เรซูเม่ไม่มีการพัฒนามาเป็นเวลาหลายร้อยปีแล้ว
                  </h2>
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    เรซูเม่กระดาษขาดข้อมูลที่จำเป็นในโลกดิจิทัล เพื่อให้อำนาจแก่นายจ้างในการค้นพบ รับสมัคร และ
                    จ้างผู้มีความสามารถที่พวกเขาต้องการเพื่อให้เจริญรุ่งเรือง
                  </p>
                  <div className="text-center py-8">
                    <h3 className="text-3xl font-bold text-primary-foreground">...จนถึงตอนนี้!</h3>
                  </div>
                </div>
              </div>

              {/* Right Animation */}
              <div className="relative">
                <div
                  className={`transition-all duration-1500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                >
                  {/* Animated Resume Transformation */}
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Old Resume */}
                    <div
                      className={`absolute inset-0 bg-white rounded-lg shadow-2xl p-6 transition-all duration-2000 ${isVisible ? "opacity-30 rotate-12 scale-90" : "opacity-100 rotate-0 scale-100"}`}
                    >
                      <div className="space-y-4">
                        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        <div className="space-y-2 mt-6">
                          <div className="h-2 bg-gray-200 rounded w-full"></div>
                          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>

                    {/* New SmartResume */}
                    <div
                      className={`relative bg-gradient-to-br from-card to-muted rounded-2xl shadow-2xl p-6 border-2 border-primary/20 transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-12 scale-110"}`}
                    >
                      <div className="space-y-6">
                        {/* Header with verification badge */}
                        <div className="flex items-center justify-between">
                          <div className="space-y-2">
                            <div className="h-4 bg-primary/20 rounded w-32"></div>
                            <div className="h-3 bg-muted-foreground/20 rounded w-24"></div>
                          </div>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>

                        {/* Verified sections */}
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🎓</span>
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-primary/20 rounded w-full"></div>
                              <div className="h-2 bg-muted-foreground/20 rounded w-3/4 mt-1"></div>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🏆</span>
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-secondary/20 rounded w-5/6"></div>
                              <div className="h-2 bg-muted-foreground/20 rounded w-2/3 mt-1"></div>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">🎯</span>
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-accent/20 rounded w-4/5"></div>
                              <div className="h-2 bg-muted-foreground/20 rounded w-1/2 mt-1"></div>
                            </div>
                            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          </div>
                        </div>

                        {/* Blockchain verification indicator */}
                        <div className="flex items-center justify-center space-x-2 pt-4 border-t border-border">
                          <div className="w-4 h-4 bg-primary rounded-sm"></div>
                          <span className="text-xs text-muted-foreground">ยืนยันด้วยบล็อกเชน</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating elements */}
                    <div
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 animate-bounce" : "opacity-0"}`}
                    >
                      <span className="text-white text-sm">🔒</span>
                    </div>
                    <div
                      className={`absolute -bottom-4 -left-4 w-10 h-10 bg-secondary rounded-full shadow-lg flex items-center justify-center transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 animate-pulse" : "opacity-0"}`}
                    >
                      <span className="text-white text-xs">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution-section" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                ปลดล็อกพลังของข้อมูลประจำตัวดิจิทัล
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                TalentVault นำข้อมูลประจำตัวดิจิทัลที่สามารถยืนยันได้ไปอยู่ในมือของผู้หางาน ทำให้พวกเขาสามารถ
                ให้ข้อมูลที่น่าเชื่อถือแก่นายจ้างเกี่ยวกับทักษะ ความสามารถ และข้อมูลประจำตัวของพวกเขาในตลาดผู้มีความสามารถที่ได้รับการรับรอง
              </p>
            </div>

            {/* Wave Separator */}
            <div className="relative mb-16">
              <svg className="w-full h-16 text-primary/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  fill="currentColor"
                />
              </svg>
            </div>


            {/* Content Slides Section */}
            <section id="content-slides" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
                  {/* Left Content */}
                  <div
                    className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                          {[
                            <Shield className="h-8 w-8" key="shield" />,
                            <Star className="h-8 w-8" key="star" />,
                            <Eye className="h-8 w-8" key="eye" />,
                          ][activeSlide]}
                        </div>
                        <div className="flex space-x-2">
                          {[0, 1, 2].map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setActiveSlide(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeSlide ? "bg-primary scale-125" : "bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-space-grotesk leading-tight">
                        {[
                          "ข้อมูลประจำตัวที่น่าเชื่อถือ",
                          "เราทำให้คุณโดดเด่นได้ง่าย",
                          "ค้นพบผู้มีความสามารถที่ซ่อนอยู่",
                        ][activeSlide]}
                      </h2>

                      <p className="text-lg text-muted-foreground font-dm-sans leading-relaxed">
                        {[
                          "ด้วย TalentVault สถาบันสามารถรับรองบุคคลได้อย่างมั่นใจ ข้อมูลประจำตัวดิจิทัลที่ได้รับการรับรองด้วยบล็อกเชนช่วยให้ผู้หางานสามารถพกพาวุฒิการศึกษา ใบรับรอง และข้อมูลประจำตัวอื่น ๆ ไปได้ตลอดชีวิต ปกป้องสถาบันจากการปลอมแปลงเอกสาร และให้นายจ้างสามารถตรวจสอบข้อมูลสำคัญได้แบบเรียลไทม์",
                          "ทุก TalentVault เริ่มต้นด้วยเนื้อหาเรซูเม่คุณภาพสูงที่สถาบันจัดหาให้ เราดูแลการจัดรูปแบบ นำคุณผ่านการสร้างเรซูเม่ที่ครอบคลุม และจัดรูปแบบที่เครื่องอ่านได้เพื่อให้ TalentVault สามารถใช้ได้ทุกที่ที่คนมองหางาน TalentVault สามารถอัปเดตโดยสถาบันได้ตลอดเวลาเพื่อให้บันทึกทางวิชาการและวิชาชีพสดใหม่ และดูน่าประทับใจ",
                          "ผู้หางานและนายจ้างได้รับการปกป้องจากอคติในการจ้างงานในตลาดผู้มีความสามารถที่ได้รับการรับรอง TalentVault ถูกทำให้ไม่ระบุตัวตนเพื่อให้สามารถประเมินโดยนายจ้างได้โดยไม่มีข้อมูลเกี่ยวกับลักษณะภายนอก เชื้อชาติ เพศ หรือชาติพันธุ์ของผู้หางาน",
                        ][activeSlide]}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          [
                            "การยืนยันด้วยบล็อกเชน",
                            "การตรวจสอบแบบเรียลไทม์",
                            "การพกพาได้ตลอดชีวิต",
                            "การคุ้มครองสถาบัน",
                          ],
                          [
                            "การจัดรูปแบบแบบมืออาชีพ",
                            "เครื่องอ่านได้",
                            "อัปเดตอัตโนมัติ",
                            "การออกแบบที่สวยงาม",
                          ],
                          [
                            "การจ้างงานที่ปราศจากอคติ",
                            "การประเมินแบบไม่ระบุตัวตน",
                            "การจับคู่ตามทักษะ",
                            "การประเมินที่ยุติธรรม",
                          ],
                        ][activeSlide].map((feature, index) => (
                          <div
                            key={feature}
                            className={`flex items-center space-x-3 transition-all duration-500 ${
                              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground font-dm-sans">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold text-lg shadow hover:bg-primary/90 transition group"
                      >
                        เริ่มต้นใช้งาน
                        <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right Visual */}
                  <div className="relative">
                    <div
                      className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                    >
                      {/* Main Image */}
                      <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
                        <img
                          src={[
                            "/หน้าหลัก/1.png",
                            "/หน้าหลัก/2.png",
                            "/หน้าหลัก/3.png",
                          ][activeSlide]}
                          alt={[
                            "ข้อมูลประจำตัวที่น่าเชื่อถือ",
                            "เราทำให้คุณโดดเด่นได้ง่าย",
                            "ค้นพบผู้มีความสามารถที่ซ่อนอยู่",
                          ][activeSlide]}
                          className="w-full h-96 object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                          <div className="p-8 text-white">
                            <h3 className="text-2xl font-bold font-space-grotesk mb-2">
                              {[
                                "ข้อมูลประจำตัวที่น่าเชื่อถือ",
                                "เราทำให้คุณโดดเด่นได้ง่าย",
                                "ค้นพบผู้มีความสามารถที่ซ่อนอยู่",
                              ][activeSlide]}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <span className="text-sm opacity-90">Live Demo Available</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      {activeSlide === 0 && (
                        <>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center animate-bounce">
                            <Shield className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                        </>
                      )}

                      {activeSlide === 1 && (
                        <>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full shadow-lg flex items-center justify-center animate-bounce">
                            <Star className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center animate-pulse">
                            <Sparkles className="h-6 w-6 text-white" />
                          </div>
                        </>
                      )}

                      {activeSlide === 2 && (
                        <>
                          <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full shadow-lg flex items-center justify-center animate-bounce">
                            <Eye className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center animate-pulse">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-16 flex justify-center">
                  <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-300 ease-out"
                      style={{ width: `${((activeSlide + 1) / 3) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-6 gap-8">
              {/* Logo and Contact */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <Link href="/" className="flex items-center">
                    <div className="text-2xl font-bold text-primary">TalentVault</div>
                  </Link>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    เครือข่ายผู้มีความสามารถที่ได้รับการรับรองแห่งแรกของโลก ที่รวมผู้หางาน นายจ้าง และสถาบันที่รับรองเข้าด้วยกัน
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-foreground">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <div>417 Main Street</div>
                      <div>Little Rock, AR 72201</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground">
                    <Phone className="h-5 w-5 text-primary" />
                    <div className="text-lg font-semibold">(855) IDATAFY</div>
                  </div>
                </div>
              </div>

              {/* Product */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ผลิตภัณฑ์</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/getting-started" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      ผลิตภัณฑ์ของเรา
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Who We Serve */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ผู้ที่เราให้บริการ</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/job-seeker-login"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      ผู้หางาน
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employer-login"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      นายจ้าง
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/institution-login"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      สถาบันการศึกษา
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Us */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">เกี่ยวกับเรา</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      เรื่องราวของเรา
                    </Link>
                  </li>
                  <li>
                    <Link href="/team" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      พบกับทีมงาน
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ecosystem"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      ระบบนิเวศข้อมูลประจำตัวดิจิทัล
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources & Legal */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">ทรัพยากร</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        บล็อก
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        คำถามที่พบบ่อย
                      </Link>
                    </li>
                    <li>
                      <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        ข่าวและสื่อมวลชน
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">กฎหมาย</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/privacy"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        นโยบายความเป็นส่วนตัว
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/accessibility"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        ข้อความการเข้าถึงเว็บ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/diversity"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        ข้อความความหลากหลาย
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-8 border-t border-border">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <Link
                  href="https://facebook.com/talentvault"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://instagram.com/talentvault"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://twitter.com/talentvault"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com/company/talentvault"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://youtube.com/@talentvault"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>

              {/* Certification Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">1Ed</span>
                  </div>
                  <span className="text-xs text-muted-foreground">1EdTech Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-secondary/10 rounded flex items-center justify-center">
                    <span className="text-secondary font-bold text-xs">T</span>
                  </div>
                  <span className="text-xs text-muted-foreground">TrustEd Apps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                    <span className="text-accent font-bold text-xs">P</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Pledge Endorsed</span>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} TalentVault. สงวนลิขสิทธิ์ทั้งหมด</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}