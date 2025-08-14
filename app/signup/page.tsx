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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            กลับหน้าหลัก
          </Link>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold text-slate-900">TalentVault</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">สร้างบัญชีของคุณ</h1>
          <p className="text-slate-600">เข้าร่วมแพลตฟอร์มที่มากกว่าเรซูเม่แบบดั้งเดิม</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>สมัครสมาชิก</CardTitle>
            <CardDescription>เลือกประเภทบัญชีและสร้างโปรไฟล์ของคุณ</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={userType} onValueChange={(value) => setUserType(value as "job_seeker" | "employer")}>
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/80 backdrop-blur-sm border border-slate-200/50">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600 mb-3">สร้างโปรไฟล์มืออาชีพที่ครอบคลุม</p>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      รายละเอียดประสบการณ์ไม่จำกัด
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      แสดงทักษะทั้งหมดของคุณ
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      ถูกค้นพบโดยนายจ้าง
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="employer">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-slate-600 mb-3">เข้าถึงเครื่องมือการค้นหาผู้มีความสามารถขั้นสูง</p>
                  <div className="text-left space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      ตัวกรองการค้นหาขั้นสูง
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
                      บันทึกและติดตามผู้สมัคร
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600" />
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
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
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
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
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
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
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
                  className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              {error && (
                <Alert variant="destructive" className="border-red-200 bg-red-50">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg" disabled={loading}>
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
              <p className="text-sm text-slate-600">
                มีบัญชีอยู่แล้ว?{" "}
                <Link href="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
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
