"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Building2, Loader2, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"

export default function InstitutionLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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

    const success = await login(email, password, "institution")

    if (success) {
      router.push("/institution-dashboard")
      router.refresh() // เพื่อให้ dashboard โหลดข้อมูลใหม่
    } else {
      setError("ข้อมูลไม่ถูกต้อง ลองใช้ demo@university.ac.th กับรหัสผ่านใดก็ได้")
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
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-semibold text-foreground">TalentVault</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">ยินดีต้อนรับกลับ</h1>
          <p className="text-muted-foreground">เข้าสู่ระบบสำหรับสถาบันการศึกษา</p>
        </div>

        <Card className="border-0 shadow-xl bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <CardTitle>เข้าสู่ระบบสถาบัน</CardTitle>
              <CardDescription>จัดการข้อมูลนักศึกษาและติดตามผลการดำเนินงาน</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">อีเมลสถาบัน</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ป้อนอีเมลของสถาบัน"
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
                  placeholder="ป้อนรหัสผ่าน"
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
                    กำลังเข้าสู่ระบบ...
                  </>
                ) : (
                  "เข้าสู่ระบบ"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                ยังไม่มีบัญชี?{" "}
                <Link href="/contact" className="text-primary hover:text-primary/90 font-medium">
                  ติดต่อเรา
                </Link>
              </p>
            </div>

            {/* Demo credentials */}
            <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground mb-2">ข้อมูลทดสอบ:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>อีเมล: demo@university.ac.th</p>
                <p>รหัสผ่าน: รหัสผ่านใดก็ได้</p>
                <p>สำหรับทดสอบระบบสถาบันการศึกษา</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
