"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  User, 
  Lock, 
  ArrowRight, 
  Briefcase,
  GraduationCap,
  Building2,
  Eye,
  EyeOff
} from "lucide-react"
import Link from "next/link"

export default function EmployerLoginPage() {
  const router = useRouter()
  const { login, loading } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("กรุณากรอกอีเมลและรหัสผ่าน")
      return
    }

    try {
      await login(email, password, "employer")
      router.push("/employer-dashboard")
    } catch (err) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">เข้าสู่ระบบนายจ้าง</h2>
          <p className="text-muted-foreground">
            เข้าสู่ระบบเพื่อจัดการงานและหาผู้มีความสามารถ
          </p>
        </div>

        {/* Login Form */}
        <Card className="border-0 shadow-xl bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground">เข้าสู่ระบบ</CardTitle>
            <CardDescription>
              ใช้บัญชีของคุณเพื่อเข้าสู่ระบบ
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">อีเมล</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">รหัสผ่าน</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="รหัสผ่านของคุณ"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-lg font-semibold"
                disabled={loading}
              >
                {loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                ยังไม่มีบัญชี?{" "}
                <Link href="/signup?type=employer" className="text-primary hover:underline font-medium">
                  สมัครสมาชิก
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Account */}
        <Card className="border-0 shadow-lg bg-muted/50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">บัญชีทดสอบ</h3>
              <p className="text-sm text-muted-foreground mb-4">
                ใช้บัญชีนี้เพื่อทดสอบระบบ
              </p>
              <div className="bg-background p-4 rounded-lg border">
                <p className="text-sm font-mono text-foreground">
                  <strong>อีเมล:</strong> employer@example.com
                </p>
                <p className="text-sm font-mono text-foreground">
                  <strong>รหัสผ่าน:</strong> demo123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Links */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link href="/job-seeker-login" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              ผู้หางาน
            </Link>
            <Link href="/institution-login" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              สถาบันการศึกษา
            </Link>
          </div>
          <Link href="/" className="text-primary hover:underline text-sm">
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  )
}
