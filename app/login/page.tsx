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
import { ArrowLeft, Briefcase, Users, Loader2 } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState<"job_seeker" | "employer">("job_seeker")
  const [error, setError] = useState("")
  const { login, loading } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("กรุณากรอกข้อมูลให้ครบถ้วน")
      return
    }

    const success = await login(email, password, userType)

    if (success) {
      // Redirect based on user type
      if (userType === "employer") {
        router.push("/employer-dashboard")
      } else {
        router.push("/dashboard")
      }
    } else {
      setError("ข้อมูลไม่ถูกต้อง ลองใช้ demo@example.com กับรหัสผ่านใดก็ได้")
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
          <h1 className="text-2xl font-bold text-slate-900 mb-2">ยินดีต้อนรับกลับ</h1>
          <p className="text-slate-600">เข้าสู่ระบบบัญชีของคุณเพื่อดำเนินการต่อ</p>
        </div>

        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>เข้าสู่ระบบ</CardTitle>
            <CardDescription>เลือกประเภทบัญชีและป้อนข้อมูลประจำตัวของคุณ</CardDescription>
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
                  <p className="text-sm text-slate-600">เข้าถึงโปรไฟล์มืออาชีพและโอกาสการทำงานของคุณ</p>
                </div>
              </TabsContent>

              <TabsContent value="employer">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <p className="text-sm text-slate-600">ค้นหาและเชื่อมต่อกับผู้มีความสามารถพิเศษ</p>
                </div>
              </TabsContent>
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
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
                  placeholder="ป้อนรหัสผ่านของคุณ"
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
                    กำลังเข้าสู่ระบบ...
                  </>
                ) : (
                  "เข้าสู่ระบบ"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                ยังไม่มีบัญชี?{" "}
                <Link href="/signup" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-medium text-slate-700 mb-2">ข้อมูลทดสอบ:</p>
              <div className="text-xs text-slate-600 space-y-1">
                <p>อีเมล: demo@example.com</p>
                <p>รหัสผ่าน: รหัสผ่านใดก็ได้</p>
                <p>ใช้งานได้ทั้งบัญชีผู้หางานและนายจ้าง</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
