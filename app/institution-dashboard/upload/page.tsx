"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Upload, FileSpreadsheet, AlertCircle, CheckCircle, X } from "lucide-react"
import Link from "next/link"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState("")
  const [preview, setPreview] = useState<string[][]>([])
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type !== "text/csv") {
        setError("กรุณาเลือกไฟล์ CSV เท่านั้น")
        return
      }
      setFile(selectedFile)
      setError("")
      // Read file preview
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        const lines = text.split("\\n").slice(0, 6) // Show first 5 lines + header
        const rows = lines.map((line) => line.split(","))
        setPreview(rows)
      }
      reader.readAsText(selectedFile)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("กรุณาเลือกไฟล์")
      return
    }

    setUploading(true)
    // Simulate upload delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setUploading(false)
    router.push("/institution-dashboard?upload=success")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/institution-dashboard"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              กลับไปยังแดชบอร์ด
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">อัพโหลดข้อมูลนักศึกษา</h1>
          <p className="text-muted-foreground">อัพโหลดข้อมูลนักศึกษาจากไฟล์ CSV</p>
        </div>

        <div className="space-y-6">
          {/* File Upload */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>เลือกไฟล์</CardTitle>
              <CardDescription>อัพโหลดไฟล์ CSV ที่มีข้อมูลนักศึกษา</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild>
                    <Label htmlFor="file" className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      เลือกไฟล์ CSV
                    </Label>
                  </Button>
                  <Button variant="outline">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    ดาวน์โหลดเทมเพลต
                  </Button>
                </div>
                <Input
                  id="file"
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={uploading}
                />

                {file && (
                  <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                    <FileSpreadsheet className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground flex-1">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setFile(null)
                        setPreview([])
                      }}
                      disabled={uploading}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="w-4 h-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>

          {/* File Preview */}
          {preview.length > 0 && (
            <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>ตัวอย่างข้อมูล</CardTitle>
                <CardDescription>5 แถวแรกจากไฟล์ที่เลือก</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        {preview[0].map((header, i) => (
                          <th key={i} className="py-2 px-4 text-left font-medium text-muted-foreground">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {preview.slice(1).map((row, i) => (
                        <tr key={i} className="border-b border-border">
                          {row.map((cell, j) => (
                            <td key={j} className="py-2 px-4 text-foreground">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Upload Guidelines */}
          <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>คำแนะนำการอัพโหลด</CardTitle>
              <CardDescription>ตรวจสอบข้อมูลให้ถูกต้องก่อนอัพโหลด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">รูปแบบไฟล์ที่รองรับ</p>
                    <p className="text-sm text-muted-foreground">ไฟล์ CSV ที่ใช้ UTF-8 encoding</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">คอลัมน์ที่จำเป็น</p>
                    <p className="text-sm text-muted-foreground">
                      รหัสนักศึกษา, ชื่อ-นามสกุล, อีเมล, ภาควิชา, ชั้นปี, เกรดเฉลี่ย, วันที่คาดว่าจะจบการศึกษา
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">ข้อจำกัด</p>
                    <p className="text-sm text-muted-foreground">ขนาดไฟล์สูงสุด 10MB, จำนวนแถวสูงสุด 1,000 แถว</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button variant="outline" asChild>
              <Link href="/institution-dashboard">ยกเลิก</Link>
            </Button>
            <Button onClick={handleUpload} disabled={!file || uploading}>
              {uploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  กำลังอัพโหลด...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  อัพโหลดข้อมูล
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
