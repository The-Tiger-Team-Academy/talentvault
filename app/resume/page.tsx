"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  CheckCircle,
  Calendar,
  Building2
} from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  const resumeData = {
    personal: {
      name: "อนันต์ วิทยาการ",
      title: "Senior Software Engineer",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      phone: "+66 81-234-5678",
      email: "anan.tech@email.com",
      website: "www.anantech.dev",
      bio: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์มากกว่า 8 ปี เชี่ยวชาญด้านการพัฒนาเว็บแอปพลิเคชันและระบบขนาดใหญ่ มีความสนใจในเทคโนโลยีใหม่ๆ และการสร้างสรรค์โซลูชันที่มีประสิทธิภาพ"
    },
    skills: [
      { name: "JavaScript", level: 95, category: "Programming" },
      { name: "TypeScript", level: 90, category: "Programming" },
      { name: "Python", level: 85, category: "Programming" },
      { name: "React.js", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Node.js", level: 88, category: "Backend" },
      { name: "PostgreSQL", level: 82, category: "Database" },
      { name: "MongoDB", level: 80, category: "Database" },
      { name: "Docker", level: 85, category: "DevOps" },
      { name: "AWS", level: 78, category: "Cloud" }
    ],
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Solutions Co., Ltd.",
        location: "กรุงเทพมหานคร",
        duration: "2022 - ปัจจุบัน",
        description: "นำทีมพัฒนาระบบ E-commerce ที่รองรับผู้ใช้มากกว่า 100,000 คน ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40% และออกแบบ Architecture สำหรับ Microservices",
        achievements: [
          "นำทีมพัฒนาระบบ E-commerce ที่รองรับผู้ใช้ 100K+ คน",
          "ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40%",
          "ออกแบบ Architecture สำหรับ Microservices",
          "ลดต้นทุนการดำเนินงานลง 25% ด้วยการใช้ Cloud Services"
        ]
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "Digital Innovation Ltd.",
        location: "กรุงเทพมหานคร",
        duration: "2020 - 2022",
        description: "พัฒนาแอปพลิเคชัน Web และ Mobile ทำงานร่วมกับทีม UX/UI ในการออกแบบและพัฒนาระบบการจัดการลูกค้า",
        achievements: [
          "พัฒนาแอปพลิเคชัน Web และ Mobile สำหรับลูกค้า 15+ ราย",
          "ทำงานร่วมกับทีม UX/UI ในการออกแบบ User Experience",
          "สร้างระบบ API ที่รองรับการเชื่อมต่อกับระบบภายนอก",
          "ปรับปรุงเวลาในการโหลดหน้าเว็บให้เร็วขึ้น 60%"
        ]
      },
      {
        id: 3,
        title: "Junior Software Developer",
        company: "StartupTech Co.",
        location: "กรุงเทพมหานคร",
        duration: "2018 - 2020",
        description: "เริ่มต้นอาชีพในการพัฒนาซอฟต์แวร์ เรียนรู้เทคโนโลยีใหม่ๆ และมีส่วนร่วมในการพัฒนาผลิตภัณฑ์หลักของบริษัท",
        achievements: [
          "พัฒนาและดูแลระบบ CRM ของบริษัท",
          "เรียนรู้และใช้งาน React.js, Node.js ในโปรเจคจริง",
          "ร่วมพัฒนาระบบ Dashboard สำหรับการวิเคราะห์ข้อมูล",
          "ได้รับรางวัล Employee of the Month 3 ครั้ง"
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: "วิทยาศาสตรมหาบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
        year: "2016 - 2018",
        gpa: "3.85",
        description: "เน้นการศึกษาด้าน Software Engineering, Database Systems และ Machine Learning"
      },
      {
        id: 2,
        degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        institution: "มหาวิทยาลัยเกษตรศาสตร์",
        year: "2012 - 2016",
        gpa: "3.65",
        description: "พื้นฐานด้านการเขียนโปรแกรม, โครงสร้างข้อมูล และ Algorithm Design"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        credentialId: "AWS-SA-2023-001",
        verified: true
      },
      {
        id: 2,
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2022",
        credentialId: "GCP-PD-2022-045",
        verified: true
      },
      {
        id: 3,
        name: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "2022",
        credentialId: "CKA-2022-789",
        verified: true
      }
    ],
    projects: [
      {
        id: 1,
        name: "E-Commerce Platform",
        description: "ระบบ E-commerce ขนาดใหญ่ที่รองรับผู้ใช้มากกว่า 100,000 คน",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
        role: "Lead Developer",
        duration: "6 เดือน"
      },
      {
        id: 2,
        name: "Customer Management System",
        description: "ระบบจัดการลูกค้าสำหรับธุรกิจ B2B",
        technologies: ["Next.js", "TypeScript", "MongoDB", "AWS"],
        role: "Full Stack Developer",
        duration: "4 เดือน"
      }
    ]
  }

  const skillCategories = {
    "Programming": resumeData.skills.filter(skill => skill.category === "Programming"),
    "Frontend": resumeData.skills.filter(skill => skill.category === "Frontend"),
    "Backend": resumeData.skills.filter(skill => skill.category === "Backend"),
    "Database": resumeData.skills.filter(skill => skill.category === "Database"),
    "DevOps": resumeData.skills.filter(skill => skill.category === "DevOps"),
    "Cloud": resumeData.skills.filter(skill => skill.category === "Cloud")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-foreground">
              skillbridge
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                แชร์
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                ดาวน์โหลด PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Resume Content */}
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-primary text-primary-foreground p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {resumeData.personal.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{resumeData.personal.name}</h1>
                  <p className="text-xl text-primary-foreground/90 mb-4">{resumeData.personal.title}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{resumeData.personal.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>{resumeData.personal.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>{resumeData.personal.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>{resumeData.personal.website}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-500 text-white border-0 mb-2">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    ยืนยันแล้ว
                  </Badge>
                  <div className="text-xs text-primary-foreground/70">skillbridge ID: SB-2024-001</div>
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="p-8 space-y-8">
              {/* About Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">เกี่ยวกับฉัน</h2>
                <p className="text-muted-foreground leading-relaxed">{resumeData.personal.bio}</p>
              </section>

              {/* Skills Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">ทักษะและความสามารถ</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    skills.length > 0 && (
                      <div key={category} className="space-y-3">
                        <h3 className="font-semibold text-foreground">{category}</h3>
                        <div className="space-y-2">
                          {skills.map((skill) => (
                            <div key={skill.name} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <span className="text-xs text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </section>

              {/* Experience Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">ประสบการณ์การทำงาน</h2>
                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <Card key={exp.id} className="border-l-4 border-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-primary font-medium">
                              <Building2 className="w-4 h-4" />
                              {exp.company}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">ผลงานที่สำคัญ:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Education Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">การศึกษา</h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu) => (
                    <Card key={edu.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                            <p className="text-primary font-medium">{edu.institution}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span>ปีการศึกษา: {edu.year}</span>
                              <span>เกรดเฉลี่ย: {edu.gpa}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Certifications Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">ใบรับรองและรางวัล</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {resumeData.certifications.map((cert) => (
                    <Card key={cert.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Award className="w-6 h-6 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                                <p className="text-muted-foreground">{cert.issuer}</p>
                                <p className="text-sm text-muted-foreground">ออกให้เมื่อ: {cert.date}</p>
                                <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                              </div>
                              {cert.verified && (
                                <Badge className="bg-green-100 text-green-800 border-green-200">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  ยืนยันแล้ว
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">โปรเจคที่สำคัญ</h2>
                <div className="space-y-4">
                  {resumeData.projects.map((project) => (
                    <Card key={project.id}>
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
                            <Badge variant="outline">{project.role}</Badge>
                          </div>
                          <p className="text-muted-foreground">{project.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>ระยะเวลา: {project.duration}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
