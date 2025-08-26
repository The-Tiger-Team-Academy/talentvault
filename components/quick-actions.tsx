'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { FolderOpen, Edit, BarChart3, Search, Briefcase, TrendingUp } from 'lucide-react'

interface QuickActionProps {
  icon: React.ReactNode
  title: string
  description: string
  dialogTitle: string
  dialogContent: React.ReactNode
}

const QuickAction: React.FC<QuickActionProps> = ({
  icon,
  title,
  description,
  dialogTitle,
  dialogContent
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 p-4 h-auto text-left hover:bg-accent/50 transition-colors"
        >
          <div className="flex-shrink-0 text-muted-foreground">
            {icon}
          </div>
          <div className="flex-1">
            <div className="font-medium text-foreground">{title}</div>
            <div className="text-sm text-muted-foreground">{description}</div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
        </DialogHeader>
        {dialogContent}
      </DialogContent>
    </Dialog>
  )
}

export const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "ค้นหางานใหม่",
      description: "ค้นหางานที่เหมาะสมกับทักษะของคุณ",
      dialogTitle: "ค้นหางานใหม่",
      dialogContent: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">ตำแหน่งงาน</label>
              <input
                type="text"
                placeholder="เช่น Frontend Developer, UI/UX Designer"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium">สถานที่</label>
              <input
                type="text"
                placeholder="เช่น กรุงเทพฯ, ทำงานจากที่บ้าน"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium">ประเภทงาน</label>
              <div className="flex gap-2 mt-1">
                <Button variant="outline" size="sm">Full-time</Button>
                <Button variant="outline" size="sm">Part-time</Button>
                <Button variant="outline" size="sm">Remote</Button>
                <Button variant="outline" size="sm">On-site</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">
              <Search className="h-4 w-4 mr-2" />
              ค้นหา
            </Button>
            <Button variant="outline">ล้างตัวกรอง</Button>
          </div>
        </div>
      )
    },
    {
      icon: <Edit className="h-5 w-5" />,
      title: "แก้ไขโปรไฟล์",
      description: "อัปเดตข้อมูลส่วนตัวและประสบการณ์",
      dialogTitle: "แก้ไขโปรไฟล์",
      dialogContent: (
        <div className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">ข้อมูลส่วนตัว</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <input
                  type="text"
                  placeholder="ชื่อ"
                  defaultValue="ธนากร"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <input
                  type="text"
                  placeholder="นามสกุล"
                  defaultValue="รักษ์เรียน"
                  className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">การศึกษา</label>
              <input
                type="text"
                placeholder="มหาวิทยาลัย"
                defaultValue="Springfield University"
                className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="text-sm font-medium">ทักษะ</label>
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-md text-sm">Analytics</span>
                <Button variant="outline" size="sm">+ เพิ่มทักษะ</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-2 pt-2">
            <Button className="flex-1">บันทึกการเปลี่ยนแปลง</Button>
            <Button variant="outline">ยกเลิก</Button>
          </div>
        </div>
      )
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "ดูสถิติ",
      description: "ติดตามความคืบหน้าและผลการสมัครงาน",
      dialogTitle: "สถิติการสมัครงาน",
      dialogContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-blue-800">งานที่สมัคร</div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">3</div>
              <div className="text-sm text-green-800">สัมภาษณ์</div>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-purple-800">ความเหมาะสม</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">งานที่สมัครล่าสุด</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">Frontend Developer</div>
                  <div className="text-sm text-muted-foreground">TechCorp Co., Ltd.</div>
                </div>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">รอการตอบกลับ</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <div className="font-medium">UI/UX Designer</div>
                  <div className="text-sm text-muted-foreground">Creative Studio</div>
                </div>
                <span className="px-2 py-1 bg-red-200 text-red-700 rounded text-xs">สัมภาษณ์</span>
              </div>
            </div>
          </div>
          
          <div className="pt-2">
            <Button className="w-full" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              ดูรายงานแบบละเอียด
            </Button>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-foreground">การดำเนินการด่วน</h3>
      <div className="space-y-1">
        {actions.map((action, index) => (
          <QuickAction key={index} {...action} />
        ))}
      </div>
    </div>
  )
}
