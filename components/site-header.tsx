"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { 
  Briefcase, 
  MessageCircle, 
  Calendar as CalendarIcon, 
  Search, 
  Building2, 
  Plus, 
  RefreshCw,
  LogOut,
  GraduationCap,
  FileText,
  User
} from "lucide-react"
import { useCallback } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = useCallback(() => {
    logout()
    router.push("/")
  }, [logout, router])

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const active = pathname === href || pathname.startsWith(href + "/")
    return (
      <Link href={href} aria-current={active ? "page" : undefined} className={"transition-colors " + (active ? "text-foreground" : "text-muted-foreground hover:text-foreground") }>
        {label}
      </Link>
    )
  }

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold text-foreground">TalentVault</span>
        </Link>

        {/* Navigation - changes based on user type */}
        {user ? (
          // Logged in navigation
          user.type === "employer" ? (
            // Employer navigation
            <nav className="hidden md:flex items-center gap-4">
              <Button asChild size="sm" variant="ghost">
                <Link href="/profiles">
                  <Search className="w-4 h-4 mr-2" />
                  ค้นหาผู้มีความสามารถ
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/employer-dashboard/jobs/new">
                  <Plus className="w-4 h-4 mr-2" />
                  สร้างประกาศงาน
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/employer-dashboard/messages">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  ข้อความ
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/employer-dashboard/schedule">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  นัดสัมภาษณ์
                </Link>
              </Button>
            </nav>
          ) : user.type === "institution" ? (
            // Institution navigation
            <nav className="hidden md:flex items-center gap-4">
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  แดชบอร์ด
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard/students">
                  <User className="w-4 h-4 mr-2" />
                  จัดการนักศึกษา
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard/departments">
                  <Building2 className="w-4 h-4 mr-2" />
                  จัดการภาควิชา
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard/reports">
                  <FileText className="w-4 h-4 mr-2" />
                  รายงาน
                </Link>
              </Button>
            </nav>
          ) : (
            // Job seeker navigation
            <nav className="hidden md:flex items-center gap-4">
              <Button asChild size="sm" variant="ghost">
                <Link href="/dashboard">
                  <Briefcase className="w-4 h-4 mr-2" />
                  แดชบอร์ด
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/jobs">
                  <Search className="w-4 h-4 mr-2" />
                  ค้นหางาน
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/applications">
                  <FileText className="w-4 h-4 mr-2" />
                  ใบสมัครของฉัน
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/profile">
                  <User className="w-4 h-4 mr-2" />
                  โปรไฟล์
                </Link>
              </Button>
            </nav>
          )
        ) : (
          // Not logged in navigation
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/getting-started" label="ผลิตภัณฑ์" />
            <NavLink href="/employers" label="กลุ่มลูกค้า" />
            <NavLink href="/about" label="เกี่ยวกับเรา" />
            <NavLink href="/resources" label="ทรัพยากร" />
          </nav>
        )}

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {user.type === "job_seeker" && !user.hasProfile && (
                <Link href="/create-profile">
                  <Button variant="default">สร้างโปรไฟล์</Button>
                </Link>
              )}
              {user.type === "employer" && (
                <Link href="/employer-dashboard">
                  <Button variant="outline" size="sm">
                    <Building2 className="w-4 h-4 mr-2" />
                    แดชบอร์ด
                  </Button>
                </Link>
              )}
              {user.type === "institution" && (
                <Link href="/institution-dashboard">
                  <Button variant="outline" size="sm">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    แดชบอร์ด
                  </Button>
                </Link>
              )}
              {user.type === "job_seeker" && user.hasProfile && (
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">แดชบอร์ด</Button>
                </Link>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-foreground font-medium hidden sm:block">{user.name}</span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2" />
                    ออกจากระบบ
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/getting-started">
                <Button size="sm" variant="default">เริ่มต้นใช้งาน</Button>
              </Link>
              <Link href="/getting-started">
                <Button variant="outline" size="sm">เข้าสู่ระบบ</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
