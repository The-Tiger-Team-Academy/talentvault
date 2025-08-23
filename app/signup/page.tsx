"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Briefcase, Users, Loader2, Check } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [userType, setUserType] = useState<"job_seeker" | "employer">("job_seeker")
  const [error, setError] = useState("")
  const { signup, loading } = useAuth()
  const router = useRouter()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !password || !confirmPassword) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน")
      return
    }

    if (password !== confirmPassword) {
      setError("รหัสผ่านไม่ตรงกัน")
      return
    }

    if (password.length < 6) {
      setError("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร")
      return
    }

    const success = await signup(name, email, password, userType)

    if (success) {
      // Redirect based on user type
      if (userType === "employer") {
        router.push("/employer-dashboard")
      } else {
        router.push("/create-profile")
      }
    } else {
      setError("ไม่สามารถสร้างบัญชีได้ กรุณาลองใหม่อีกครั้ง")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            กลับหน้าหลัก
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">TalentVault</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">สร้างบัญชีของคุณ</h1>
          <p className="text-muted-foreground">เข้าร่วมแพลตฟอร์มที่มากกว่าเรซูเม่แบบดั้งเดิม</p>
        </div>

        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>สมัครสมาชิก</CardTitle>
            <CardDescription>เลือกประเภทบัญชีและสร้างโปรไฟล์ของคุณ</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as "job_seeker" | "employer")}>
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-card/80 backdrop-blur-sm border border-border">
                <TabsTrigger value="job_seeker" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  ผู้หางาน
                </TabsTrigger>
                <TabsTrigger value="employer" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  นายจ้าง
                </TabsTrigger>
              </TabsList>

              <TabsContent value="job_seeker">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">สร้างโปรไฟล์มืออาชีพที่ครอบคลุม</p>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      รายละเอียดประสบการณ์ไม่จำกัด
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      แสดงทักษะทั้งหมดของคุณ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      ถูกค้นพบโดยนายจ้าง
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="employer">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">เข้าถึงเครื่องมือการค้นหาผู้มีความสามารถขั้นสูง</p>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      ตัวกรองการค้นหาขั้นสูง
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      บันทึกและติดตามผู้สมัคร
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary" />
                      ติดต่อผู้สมัครโดยตรง
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="name">ชื่อเต็ม</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ป้อนชื่อเต็มของคุณ"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="email">อีเมล</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ป้อนอีเมลของคุณ"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="password">รหัสผ่าน</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="สร้างรหัสผ่าน (อย่างน้อย 6 ตัวอักษร)"
                  disabled={loading}
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="ยืนยันรหัสผ่านของคุณ"
                  disabled={loading}
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" variant="default" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    กำลังสร้างบัญชี...
                  </>
                ) : (
                  `สร้างบัญชี${userType === "job_seeker" ? "ผู้หางาน" : "นายจ้าง"}`
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                มีบัญชีอยู่แล้ว?{" "}
                <Link href="/login" className="text-primary hover:text-primary/90 font-medium">
                  เข้าสู่ระบบ
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
