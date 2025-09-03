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
  User,
  Menu,
  X
} from "lucide-react"
import { useCallback, useState } from "react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
          <span className="text-xl font-semibold text-foreground">skillbridge</span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

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
                <Link href="/institution-dashboard?tab=students">
                  <User className="w-4 h-4 mr-2" />
                  จัดการนักศึกษา
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard?tab=departments">
                  <Building2 className="w-4 h-4 mr-2" />
                  จัดการภาควิชา
                </Link>
              </Button>
              <Button asChild size="sm" variant="ghost">
                <Link href="/institution-dashboard?tab=reports">
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
            <NavLink href="/resume" label="ตัวอย่างเรซูเม่" />
            <NavLink href="/resources" label="ทรัพยากร" />
          </nav>
        )}

        <div className="hidden md:flex items-center gap-3">
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

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            {user ? (
              <>
                {user.type === "employer" ? (
                  <>
                    <Link href="/profiles" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Search className="w-5 h-5 text-muted-foreground" />
                      <span>ค้นหาผู้มีความสามารถ</span>
                    </Link>
                    <Link href="/employer-dashboard/jobs/new" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Plus className="w-5 h-5 text-muted-foreground" />
                      <span>สร้างประกาศงาน</span>
                    </Link>
                    <Link href="/employer-dashboard/messages" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <MessageCircle className="w-5 h-5 text-muted-foreground" />
                      <span>ข้อความ</span>
                    </Link>
                    <Link href="/employer-dashboard/schedule" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <CalendarIcon className="w-5 h-5 text-muted-foreground" />
                      <span>นัดสัมภาษณ์</span>
                    </Link>
                    <Link href="/employer-dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                      <span>แดชบอร์ด</span>
                    </Link>
                  </>
                ) : user.type === "institution" ? (
                  <>
                    <Link href="/institution-dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <GraduationCap className="w-5 h-5 text-muted-foreground" />
                      <span>แดชบอร์ด</span>
                    </Link>
                    <Link href="/institution-dashboard?tab=students" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <User className="w-5 h-5 text-muted-foreground" />
                      <span>จัดการนักศึกษา</span>
                    </Link>
                    <Link href="/institution-dashboard?tab=departments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                      <span>จัดการภาควิชา</span>
                    </Link>
                    <Link href="/institution-dashboard?tab=reports" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span>รายงาน</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Briefcase className="w-5 h-5 text-muted-foreground" />
                      <span>แดชบอร์ด</span>
                    </Link>
                    <Link href="/jobs" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <Search className="w-5 h-5 text-muted-foreground" />
                      <span>ค้นหางาน</span>
                    </Link>
                    <Link href="/applications" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <FileText className="w-5 h-5 text-muted-foreground" />
                      <span>ใบสมัครของฉัน</span>
                    </Link>
                    <Link href="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                      <User className="w-5 h-5 text-muted-foreground" />
                      <span>โปรไฟล์</span>
                    </Link>
                    {!user.hasProfile && (
                      <Link href="/create-profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                        <Plus className="w-5 h-5 text-muted-foreground" />
                        <span>สร้างโปรไฟล์</span>
                      </Link>
                    )}
                  </>
                )}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <span className="text-foreground font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout()
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-red-600 w-full"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>ออกจากระบบ</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/getting-started" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                  <span>ผลิตภัณฑ์</span>
                </Link>
                <Link href="/employers" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                  <span>กลุ่มลูกค้า</span>
                </Link>
                <Link href="/about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                  <span>เกี่ยวกับเรา</span>
                </Link>
                <Link href="/resume" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                  <span>ตัวอย่างเรซูเม่</span>
                </Link>
                <Link href="/resources" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted" onClick={() => setMobileMenuOpen(false)}>
                  <span>ทรัพยากร</span>
                </Link>
                <div className="border-t border-border pt-4 space-y-2">
                  <Link href="/getting-started" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">เริ่มต้นใช้งาน</Button>
                  </Link>
                  <Link href="/getting-started" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full">เข้าสู่ระบบ</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
