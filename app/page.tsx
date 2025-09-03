"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Award, Briefcase, ArrowRight, Play, Pause, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube, CheckCircle, Sparkles, Shield, Star, Eye } from "lucide-react"
import { useAuth } from "@/lib/auth-context"
import { useState, useEffect, useRef } from "react"
import { SiteFooter } from "@/components/site-footer"

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
        "ด้วย skillbridge สถาบันต่างๆ สามารถสนับสนุนบุคคลได้ ผ่านข้อมูลรับรองดิจิทัลที่ได้รับการรับรองจากบล็อกเชน ผู้หางานสามารถพกพาปริญญา ใบรับรอง และข้อมูลรับรองอื่นๆ ติดตัวไปได้ตลอดชีวิต ข้อมูลรับรองเหล่านี้ช่วยปกป้องสถาบันจากบันทึกปลอมแปลงที่อาจสร้างความเสียหายต่อชื่อเสียง และช่วยให้นายจ้างสามารถตรวจสอบบันทึกสำคัญได้แบบเรียลไทม์",
      icon: <Shield className="h-8 w-8" />,
      image: "/หน้าหลัก/1.png",
      features: ["การยืนยันด้วยบล็อกเชน", "การตรวจสอบแบบเรียลไทม์", "การพกพาได้ตลอดชีวิต", "การคุ้มครองสถาบัน"],
    },
    {
      id: 2,
      title: "เราทำให้คุณโดดเด่นได้ง่าย",
      description:
        "ทุก skillbridge เริ่มต้นด้วยเนื้อหาเรซูเม่คุณภาพสูงที่สถาบันจัดหาให้ เราดูแลการจัดรูปแบบ นำคุณผ่านการสร้างเรซูเม่ที่ครอบคลุม และจัดรูปแบบที่เครื่องอ่านได้เพื่อให้ skillbridge สามารถใช้ได้ทุกที่ที่คนมองหางาน skillbridge สามารถอัปเดตโดยสถาบันได้ตลอดเวลาเพื่อให้บันทึกทางวิชาการและวิชาชีพสดใหม่ และดูน่าประทับใจ",
      icon: <Star className="h-8 w-8" />,
      image: "/หน้าหลัก/2.png",
      features: ["การจัดรูปแบบแบบมืออาชีพ", "เครื่องอ่านได้", "อัปเดตอัตโนมัติ", "การออกแบบที่สวยงาม"],
    },
    {
      id: 3,
      title: "ค้นพบผู้มีความสามารถที่ซ่อนอยู่",
      description:
        "ผู้หางานและนายจ้างได้รับการปกป้องจากอคติในการจ้างงานในตลาดผู้มีความสามารถที่ได้รับการรับรอง skillbridge ถูกทำให้ไม่ระบุตัวตนเพื่อให้สามารถประเมินโดยนายจ้างได้โดยไม่มีข้อมูลเกี่ยวกับลักษณะภายนอก เชื้อชาติ เพศ หรือชาติพันธุ์ของผู้หางาน",
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
        <section className="relative min-h-screen lg:min-h-[70vh] bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 md:pb-32">
              <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center min-h-[70vh] md:min-h-[80vh]">
                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-relaxed mb-8 font-kanit">
                    สร้างอาชีพด้วย
                    <br className="mb-2" />
                    <span className="text-primary">ข้อมูลประจำตัวที่</span>
                    <br className="mb-10" />
                    ได้รับการยืนยัน
                  </h1>
                  <p className="max-w-md mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground">
                    โปรแกรมการรับรองคุณวุฒิมีบทบาทสำคัญในการเตรียมกำลังแรงงาน
                    แต่การทำให้ผู้เรียนและผู้เชี่ยวชาญของคุณโดดเด่นในตลาดงานเป็นความท้าทายที่เพิ่มขึ้น
                    skillbridge พร้อมช่วยคุณ
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/getting-started">
                      <Button size="lg" className="w-full sm:w-auto">
                        <Play className="w-5 h-5 mr-2" />
                        ดูวิธีการทำงาน
                      </Button>
                    </Link>
                    <Link href="/getting-started">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        เริ่มต้นใช้งาน
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Right Visual */}
                <div className="relative h-auto md:h-[600px] lg:h-[700px]">
                  <div
                    className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
                    style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
                  >
                    <div className="w-full md:h-full bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-w-[420px] sm:max-w-lg md:max-w-xl mx-auto scale-95 sm:scale-100 origin-top">
                      {/* Professional Resume Layout */}
                      <div className="h-full flex flex-col">
                        {/* Header Section */}
                        <div className="bg-primary text-primary-foreground p-4 md:p-6 lg:p-8">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6">
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                              AN
                            </div>
                            <div className="flex-1">
                              <h1 className="text-2xl md:text-3xl font-bold mb-2">อนันต์ วิทยาการ</h1>
                              <p className="text-primary-foreground/80 text-base md:text-lg mb-3">Senior Software Engineer</p>
                              <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>กรุงเทพมหานคร</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="w-4 h-4" />
                                  <span>+66 81-234-5678</span>
                                </div>
                              </div>
                            </div>
                            <div className="md:text-right mt-3 md:mt-0 self-start md:self-auto">
                              <Badge className="bg-emerald-500 text-white border-0 mb-2">✓ Verified</Badge>
                              <div className="text-[10px] md:text-xs text-primary-foreground/70">skillbridge ID: TV-2024-001</div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 p-4 md:p-6 lg:p-8 space-y-6">
                          {/* Skills Section */}
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-foreground mb-3 border-b-2 border-primary pb-1">ทักษะเฉพาะทาง</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="space-y-2">
                                <div className="text-xs md:text-sm font-medium text-muted-foreground">Programming</div>
                                <div className="flex flex-wrap gap-1">
                                  <Badge className="bg-primary/10 text-primary border-primary/20">JavaScript</Badge>
                                  <Badge className="bg-primary/10 text-primary border-primary/20">TypeScript</Badge>
                                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">Python</Badge>
                                  <Badge className="bg-accent/10 text-accent-foreground border-accent/20">Java</Badge>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-xs md:text-sm font-medium text-muted-foreground">Frameworks</div>
                                <div className="flex flex-wrap gap-1">
                                  <Badge className="bg-primary/10 text-primary border-primary/20">React</Badge>
                                  <Badge className="bg-muted text-muted-foreground border-border">Next.js</Badge>
                                  <Badge className="bg-secondary/10 text-secondary border-secondary/20">Node.js</Badge>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Experience Section */}
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-foreground mb-3 border-b-2 border-primary pb-1">ประสบการณ์การทำงาน</h3>
                            <div className="space-y-4">
                              <div className="border-l-4 border-primary pl-4">
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="font-semibold text-foreground text-sm md:text-base">Senior Software Engineer</h4>
                                  <span className="text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded">2022 - ปัจจุบัน</span>
                                </div>
                                <p className="text-xs md:text-sm text-primary font-medium mb-2">TechCorp Solutions Co., Ltd.</p>
                                <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                  <li>• นำทีมพัฒนาระบบ E-commerce ที่รองรับผู้ใช้ 100K+ คน</li>
                                  <li>• ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40%</li>
                                  <li>• ออกแบบ Architecture สำหรับ Microservices</li>
                                </ul>
                              </div>
                              <div className="border-l-4 border-secondary pl-4">
                                <div className="flex justify-between items-start mb-1">
                                  <h4 className="font-semibold text-foreground text-sm md:text-base">Full Stack Developer</h4>
                                  <span className="text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded">2020 - 2022</span>
                                </div>
                                <p className="text-xs md:text-sm text-secondary font-medium mb-2">Digital Innovation Ltd.</p>
                                <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                                  <li>• พัฒนาแอปพลิเคชัน Web และ Mobile</li>
                                  <li>• ทำงานร่วมกับทีม UX/UI ในการออกแบบ</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                               <Award className="w-10 h-10 text-primary relative" />
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
                    <Search className="w-10 h-10 text-primary relative" />
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
                    <Users className="w-10 h-10 text-primary relative" />
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
                      poster={`/หน้าหลัก/${activeVideo + 1}.png`}
                      className="w-full h-full object-cover"
                      preload="auto"
                      playsInline
                      muted
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                      onLoadStart={() => console.log('Video loading started')}
                      onCanPlay={() => console.log('Video can play')}
                      onError={(e) => console.error('Video error:', e)}
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
                  <h2 className="text-3xl font-bold text-foreground mb-4">ดู skillbridge ในการทำงาน</h2>
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
        <section id="resume-evolution" className="py-20 bg-primary">
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
                      className={`relative bg-card rounded-2xl shadow-2xl p-6 border-2 border-primary/20 transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-12 scale-110"}`}
                    >
                      <div className="space-y-6">
                        {/* Header with profile info */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                              สจ
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">สมจิตต์ เทคโนโลยี</div>
                              <div className="text-sm text-muted-foreground">Data Scientist</div>
                            </div>
                          </div>
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-foreground">ทักษะเฉพาะทาง</div>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-primary text-primary border-primary text-xs">Python</Badge>
                            <Badge className="bg-secondary text-secondary border-secondary text-xs">Machine Learning</Badge>
                            <Badge className="bg-accent text-accent-foreground border-accent text-xs">SQL</Badge>
                            <Badge className="bg-primary text-primary border-primary text-xs">TensorFlow</Badge>
                          </div>
                        </div>

                        {/* Experience Section */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-foreground">ประสบการณ์การทำงาน</div>
                          <div className="space-y-3">
                            <div className="border-l-4 border-primary pl-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-foreground">Senior Data Scientist</div>
                                  <div className="text-xs text-primary">AI Solutions Co.</div>
                                </div>
                                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">2023-ปัจจุบัน</span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                • พัฒนาโมเดล ML สำหรับการพยากรณ์ยอดขาย
                              </div>
                            </div>
                            <div className="border-l-4 border-secondary pl-3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="text-sm font-medium text-foreground">Data Analyst</div>
                                  <div className="text-xs text-secondary">Tech Startup Ltd.</div>
                                </div>
                                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">2021-2023</span>
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                • วิเคราะห์ข้อมูลลูกค้าเพื่อปรับปรุงผลิตภัณฑ์
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Education Section */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-foreground">การศึกษา</div>
                          <div className="bg-background border border-primary rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium text-foreground">วิทยาศาสตรมหาบัณฑิต สาขาวิทยาการข้อมูล</div>
                                <div className="text-xs text-primary">มหาวิทยาลัยเชียงใหม่</div>
                                <div className="text-xs text-muted-foreground">เกรดเฉลี่ย: 3.85</div>
                              </div>
                              <Badge className="bg-primary text-primary-foreground border-0 text-xs">🔗 Verified</Badge>
                            </div>
                          </div>
                        </div>

                        {/* Certifications */}
                        <div className="space-y-3">
                          <div className="text-sm font-semibold text-foreground">ใบรับรองความสามารถ</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-background border border-secondary rounded-lg p-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-secondary" />
                                <span className="text-xs font-medium text-foreground">Google Analytics</span>
                              </div>
                            </div>
                            <div className="bg-background border border-accent rounded-lg p-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-accent-foreground" />
                                <span className="text-xs font-medium text-foreground">AWS ML</span>
                              </div>
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
        <section id="solution-section" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                ปลดล็อกพลังของข้อมูลประจำตัวดิจิทัล
              </h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                skillbridge นำข้อมูลประจำตัวดิจิทัลที่สามารถยืนยันได้ไปอยู่ในมือของผู้หางาน ทำให้พวกเขาสามารถ
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
            <section id="content-slides" className="py-20 bg-background">
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
                          "ด้วย skillbridge สถาบันสามารถรับรองบุคคลได้อย่างมั่นใจ ข้อมูลประจำตัวดิจิทัลที่ได้รับการรับรองด้วยบล็อกเชนช่วยให้ผู้หางานสามารถพกพาวุฒิการศึกษา ใบรับรอง และข้อมูลประจำตัวอื่น ๆ ไปได้ตลอดชีวิต ปกป้องสถาบันจากการปลอมแปลงเอกสาร และให้นายจ้างสามารถตรวจสอบข้อมูลสำคัญได้แบบเรียลไทม์",
                          "ทุก skillbridge เริ่มต้นด้วยเนื้อหาเรซูเม่คุณภาพสูงที่สถาบันจัดหาให้ เราดูแลการจัดรูปแบบ นำคุณผ่านการสร้างเรซูเม่ที่ครอบคลุม และจัดรูปแบบที่เครื่องอ่านได้เพื่อให้ skillbridge สามารถใช้ได้ทุกที่ที่คนมองหางาน skillbridge สามารถอัปเดตโดยสถาบันได้ตลอดเวลาเพื่อให้บันทึกทางวิชาการและวิชาชีพสดใหม่ และดูน่าประทับใจ",
                          "ผู้หางานและนายจ้างได้รับการปกป้องจากอคติในการจ้างงานในตลาดผู้มีความสามารถที่ได้รับการรับรอง skillbridge ถูกทำให้ไม่ระบุตัวตนเพื่อให้สามารถประเมินโดยนายจ้างได้โดยไม่มีข้อมูลเกี่ยวกับลักษณะภายนอก เชื้อชาติ เพศ หรือชาติพันธุ์ของผู้หางาน",
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
                        <div className="absolute inset-0 bg-black/30 flex items-end">
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

      <SiteFooter />
    </div>
  )
}