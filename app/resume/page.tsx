"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Phone, Mail, Globe, GraduationCap, Briefcase, Award, Star, CheckCircle, Calendar, Building2 } from "lucide-react"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const resumeData = {
    personal: {
      name: "อนันต์ วิทยาการ",
      title: "Senior Software Engineer",
      location: "กรุงเทพมหานคร, ประเทศไทย",
      phone: "+66 81-234-5678",
      email: "anan.tech@email.com",
      website: "www.anantech.dev",
      bio: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์มากกว่า 8 ปี เชี่ยวชาญด้านการพัฒนาเว็บแอปพลิเคชันและระบบขนาดใหญ่"
    },
    skills: [
      { name: "JavaScript", level: 95, category: "Programming" },
      { name: "TypeScript", level: 90, category: "Programming" },
      { name: "React.js", level: 95, category: "Frontend" },
      { name: "Next.js", level: 90, category: "Frontend" },
      { name: "Node.js", level: 88, category: "Backend" },
      { name: "AWS", level: 78, category: "Cloud" }
    ],
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp Solutions Co., Ltd.",
        duration: "2022 - ปัจจุบัน",
        achievements: [
          "นำทีมพัฒนาระบบ E-commerce รองรับผู้ใช้ 100K+",
          "ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40%"
        ]
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "Digital Innovation Ltd.",
        duration: "2020 - 2022",
        achievements: [
          "พัฒนาแอปพลิเคชัน Web และ Mobile",
          "ปรับปรุงเวลาโหลดหน้าเว็บให้เร็วขึ้น 60%"
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: "วท.ม. วิทยาการคอมพิวเตอร์",
        institution: "ม.เทคโนโลยีพระจอมเกล้าธนบุรี",
        year: "2016 - 2018"
      }
    ],
    certifications: [
      {
        id: 1,
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023"
      }
    ],
    projects: [
      {
        id: 1,
        name: "E-Commerce Platform",
        technologies: ["React", "Node.js", "PostgreSQL"],
        role: "Lead Developer"
      }
    ]
  }

  const skillCategories = {
    Programming: resumeData.skills.filter(skill => skill.category === "Programming"),
    Frontend: resumeData.skills.filter(skill => skill.category === "Frontend"),
    Backend: resumeData.skills.filter(skill => skill.category === "Backend"),
    Cloud: resumeData.skills.filter(skill => skill.category === "Cloud")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="pt-0 flex-1">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {/* Back Button */}
          <div className="pt-4">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          {/* Resume Content */}
          <div className="relative h-auto">
            <div
              className={`transition-all duration-1000 transform w-full max-w-[420px] sm:max-w-lg md:max-w-xl mx-auto ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"}`}
              style={{ transitionDelay: isVisible ? "0.5s" : "0s" }}
            >
              <Card className="w-full border-0 rounded-2xl shadow-2xl overflow-hidden origin-top p-0">
                <div className="h-full flex flex-col">
                  {/* Header Section */}
                  <div className="bg-primary text-primary-foreground p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6">
                      <div className="w-16 h-20 md:w-20 md:h-25 lg:w-24 lg:h-32 rounded-lg overflow-hidden shadow-lg">
                        <img
                          src="/หน้าหลัก/profile.png"
                          alt="Profile Picture"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{resumeData.personal.name}</h1>
                        <p className="text-primary-foreground/80 text-base md:text-lg mb-3">{resumeData.personal.title}</p>
                        <div className="flex flex-wrap gap-3 md:gap-4 text-xs md:text-sm">
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
                      <div className="md:text-right mt-3 md:mt-0 self-start md:self-auto">
                        <Badge className="bg-emerald-500 text-white border-0 mb-2">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                        <div className="text-[10px] md:text-xs text-primary-foreground/70">SBID: SB-2024-001</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 bg-card p-4 md:p-6 lg:p-8 space-y-4 overflow-y-auto">
                    {/* About Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">เกี่ยวกับฉัน</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{resumeData.personal.bio}</p>
                    </div>

                    {/* Skills Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">ทักษะเฉพาะทาง</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(skillCategories).map(([category, skills]) => (
                          skills.length > 0 && (
                            <div key={category} className="space-y-2">
                              <div className="text-xs md:text-sm font-medium text-muted-foreground">{category}</div>
                              <div className="flex flex-wrap gap-1">
                                {skills.map(skill => (
                                  <Badge key={skill.name} className="bg-primary/10 text-primary border-primary/20 text-xs">
                                    {skill.name}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </div>

                    {/* Experience Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">ประสบการณ์การทำงาน</h3>
                      <div className="space-y-3">
                        {resumeData.experience.map(exp => (
                          <div key={exp.id} className="border-l-4 border-primary pl-4">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-semibold text-foreground text-sm md:text-base">{exp.title}</h4>
                              <span className="text-xs md:text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{exp.duration}</span>
                            </div>
                            <p className="text-xs md:text-sm text-primary font-medium mb-2">{exp.company}</p>
                            <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
                              {exp.achievements.map((achievement, index) => (
                                <li key={index}>• {achievement}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">การศึกษา</h3>
                      {resumeData.education.map(edu => (
                        <div key={edu.id} className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <p className="text-xs md:text-sm font-semibold text-foreground">{edu.degree}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">{edu.institution} ({edu.year})</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Certifications Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">ใบรับรอง</h3>
                      {resumeData.certifications.map(cert => (
                        <div key={cert.id} className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-yellow-600 mt-1" />
                          <div>
                            <p className="text-xs md:text-sm font-semibold text-foreground">{cert.name}</p>
                            <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer} ({cert.date})</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Projects Section */}
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-2 border-b-2 border-primary pb-1">โปรเจคที่สำคัญ</h3>
                      {resumeData.projects.map(project => (
                        <div key={project.id} className="space-y-2">
                          <div className="flex justify-between items-start">
                            <p className="text-xs md:text-sm font-semibold text-foreground">{project.name}</p>
                            <Badge className="text-xs" variant="outline">{project.role}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map(tech => (
                              <Badge key={tech} className="bg-secondary/10 text-secondary border-secondary/20 text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}