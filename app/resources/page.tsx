"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              กลับหน้าหลัก
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">ทรัพยากร</h1>
          <p className="text-muted-foreground mb-8">
            หน้านี้เป็นหน้าทรัพยากรสำหรับ TalentVault (ตัวอย่าง). คุณสามารถปรับแต่งเนื้อหาได้ตามต้องการในภายหลัง
          </p>

          <div className="rounded-lg border border-border p-6">
            <ul className="list-disc pl-6 space-y-2 text-foreground">
              <li>คำแนะนำการใช้งานแพลตฟอร์ม</li>
              <li>กรณีศึกษาและบทความ</li>
              <li>เอกสารสำหรับนายจ้างและสถาบัน</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
