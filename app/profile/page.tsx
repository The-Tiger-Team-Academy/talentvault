"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  X,
  Plus,
  GraduationCap,
  Briefcase,
  Award,
  Star,
  Camera,
  Download,
  Eye,
  Lock,
  Globe
} from "lucide-react"

interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  location: string
  bio: string
  avatar: string
  skills: string[]
  experience: Array<{
    id: string
    title: string
    company: string
    duration: string
    description: string
  }>
  education: Array<{
    id: string
    degree: string
    institution: string
    year: string
    gpa?: string
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
  }>
}

export default function ProfilePage() {
  const router = useRouter()
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({})
  const [showSkillDialog, setShowSkillDialog] = useState(false)
  const [newSkill, setNewSkill] = useState("")
  const [showExperienceDialog, setShowExperienceDialog] = useState(false)
  const [showEducationDialog, setShowEducationDialog] = useState(false)
  const [showCertificationDialog, setShowCertificationDialog] = useState(false)

  useEffect(() => {
    if (!user || user.type !== "job_seeker") {
      router.push("/job-seeker-login")
      return
    }
    loadProfile()
  }, [user, router])

  const loadProfile = () => {
    // Load profile from localStorage or use default
    const savedProfile = localStorage.getItem(`profile_${user?.id}`)
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile))
    } else {
      // Create default profile
      const defaultProfile: UserProfile = {
        id: user?.id || '',
        name: user?.name || '',
        email: user?.email || '',
        phone: '',
        location: '',
        bio: '',
        avatar: '',
        skills: ['JavaScript', 'React', 'Node.js'],
        experience: [
          {
            id: '1',
            title: 'Frontend Developer',
            company: 'Tech Company Ltd.',
            duration: '2022 - ปัจจุบัน',
            description: 'พัฒนาเว็บแอปพลิเคชันด้วย React และ TypeScript'
          }
        ],
        education: [
          {
            id: '1',
            degree: 'วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์',
            institution: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
            year: '2022',
            gpa: '3.75'
          }
        ],
        certifications: [
          {
            id: '1',
            name: 'AWS Certified Developer',
            issuer: 'Amazon Web Services',
            date: '2023'
          }
        ]
      }
      setProfile(defaultProfile)
      saveProfile(defaultProfile)
    }
  }

  const saveProfile = (profileData: UserProfile) => {
    localStorage.setItem(`profile_${user?.id}`, JSON.stringify(profileData))
    setProfile(profileData)
  }

  const handleSaveBasicInfo = () => {
    if (profile && editForm) {
      const updatedProfile = { ...profile, ...editForm }
      saveProfile(updatedProfile)
      setIsEditing(false)
      setEditForm({})
    }
  }

  const handleAddSkill = () => {
    if (newSkill.trim() && profile) {
      const updatedProfile = {
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      }
      saveProfile(updatedProfile)
      setNewSkill("")
      setShowSkillDialog(false)
    }
  }

  const handleRemoveSkill = (skillToRemove: string) => {
    if (profile) {
      const updatedProfile = {
        ...profile,
        skills: profile.skills.filter(skill => skill !== skillToRemove)
      }
      saveProfile(updatedProfile)
    }
  }

  if (!user || user.type !== "job_seeker") {
    return null
  }

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">โปรไฟล์ของฉัน</h1>
            <p className="text-muted-foreground">จัดการข้อมูลส่วนตัวและประวัติการทำงาน</p>
          </div>

          <div className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      {profile.avatar ? (
                        <img src={profile.avatar} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                      ) : (
                        <User className="w-12 h-12 text-primary" />
                      )}
                    </div>
                    <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0">
                      <Camera className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                            <Input
                              id="name"
                              value={editForm.name || profile.name}
                              onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">อีเมล</Label>
                            <Input
                              id="email"
                              type="email"
                              value={editForm.email || profile.email}
                              onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                            <Input
                              id="phone"
                              value={editForm.phone || profile.phone}
                              onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="location">ที่อยู่</Label>
                            <Input
                              id="location"
                              value={editForm.location || profile.location}
                              onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="bio">เกี่ยวกับฉัน</Label>
                          <Textarea
                            id="bio"
                            value={editForm.bio || profile.bio}
                            onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                            placeholder="เขียนเกี่ยวกับตัวคุณ..."
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={handleSaveBasicInfo} className="bg-primary text-primary-foreground hover:bg-primary/90">
                            <Save className="w-4 h-4 mr-2" />
                            บันทึก
                          </Button>
                          <Button variant="outline" onClick={() => {setIsEditing(false); setEditForm({})}}>
                            ยกเลิก
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-foreground">{profile.name}</h2>
                            <p className="text-muted-foreground">{profile.bio || 'ยังไม่ได้เพิ่มข้อมูลเกี่ยวกับตัวเอง'}</p>
                          </div>
                          <Button variant="outline" onClick={() => setIsEditing(true)}>
                            <Edit className="w-4 h-4 mr-2" />
                            แก้ไข
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{profile.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{profile.phone || 'ยังไม่ได้ระบุ'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{profile.location || 'ยังไม่ได้ระบุ'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-muted-foreground" />
                            <span>เปิดรับงาน</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="skills" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="skills">ทักษะ</TabsTrigger>
                <TabsTrigger value="experience">ประสบการณ์</TabsTrigger>
                <TabsTrigger value="education">การศึกษา</TabsTrigger>
                <TabsTrigger value="certifications">ใบรับรอง</TabsTrigger>
              </TabsList>

              {/* Skills Tab */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>ทักษะและความสามารถ</CardTitle>
                      <Dialog open={showSkillDialog} onOpenChange={setShowSkillDialog}>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            เพิ่มทักษะ
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>เพิ่มทักษะใหม่</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="skill">ชื่อทักษะ</Label>
                              <Input
                                id="skill"
                                value={newSkill}
                                onChange={(e) => setNewSkill(e.target.value)}
                                placeholder="เช่น JavaScript, Python, Design"
                              />
                            </div>
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" onClick={() => setShowSkillDialog(false)}>
                                ยกเลิก
                              </Button>
                              <Button onClick={handleAddSkill}>
                                เพิ่ม
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-4 w-4 p-0 hover:bg-transparent"
                            onClick={() => handleRemoveSkill(skill)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience Tab */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>ประสบการณ์การทำงาน</CardTitle>
                      <Button variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        เพิ่มประสบการณ์
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.experience.map((exp) => (
                        <div key={exp.id} className="border-l-2 border-primary pl-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-foreground">{exp.title}</h3>
                              <p className="text-muted-foreground">{exp.company}</p>
                              <p className="text-sm text-muted-foreground">{exp.duration}</p>
                              <p className="text-sm mt-2">{exp.description}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education Tab */}
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>การศึกษา</CardTitle>
                      <Button variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        เพิ่มการศึกษา
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.education.map((edu) => (
                        <div key={edu.id} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                            <p className="text-muted-foreground">{edu.institution}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>ปีที่จบ: {edu.year}</span>
                              {edu.gpa && <span>เกรดเฉลี่ย: {edu.gpa}</span>}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Certifications Tab */}
              <TabsContent value="certifications">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>ใบรับรองและรางวัล</CardTitle>
                      <Button variant="outline">
                        <Plus className="w-4 h-4 mr-2" />
                        เพิ่มใบรับรอง
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {profile.certifications.map((cert) => (
                        <div key={cert.id} className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground">{cert.name}</h3>
                            <p className="text-muted-foreground">{cert.issuer}</p>
                            <p className="text-sm text-muted-foreground">ออกให้เมื่อ: {cert.date}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Actions */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">โปรไฟล์ของคุณ</h3>
                    <p className="text-sm text-muted-foreground">จัดการการมองเห็นและดาวน์โหลดโปรไฟล์</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      ดูตัวอย่าง
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      ดาวน์โหลด PDF
                    </Button>
                    <Button variant="outline">
                      <Lock className="w-4 h-4 mr-2" />
                      ตั้งค่าความเป็นส่วนตัว
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
