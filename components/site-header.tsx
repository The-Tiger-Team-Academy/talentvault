"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import { Briefcase } from "lucide-react"
import { useCallback } from "react"

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

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/getting-started" label="ผลิตภัณฑ์" />
          <NavLink href="/employers" label="กลุ่มลูกค้า" />
          <NavLink href="/about" label="เกี่ยวกับเรา" />
          <NavLink href="/resources" label="ทรัพยากร" />
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {user.type === "job_seeker" && !user.hasProfile && (
                <Link href="/create-profile">
                  <Button variant="default">สร้างโปรไฟล์</Button>
                </Link>
              )}
              <Link href={user.type === "employer" ? "/employer-dashboard" : "/dashboard"}>
                <Button variant="outline" size="sm">แดชบอร์ด</Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>ออกจากระบบ</Button>
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
