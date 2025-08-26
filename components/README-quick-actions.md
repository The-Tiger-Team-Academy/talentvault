# Quick Actions Component

คอมโพเนนต์ Quick Actions สำหรับ TalentVault ที่แสดงปุ่มการดำเนินการด่วนพร้อม popup dialog เมื่อคลิก

## คุณสมบัติ

- **3 ปุ่มหลัก**: ค้นหางานใหม่, แก้ไขโปรไฟล์, ดูสถิติ
- **Popup Dialog**: แสดงข้อมูลที่เหมาะสมสำหรับแต่ละปุ่ม
- **Theme เดิม**: ใช้ theme และ styling เดิมของ TalentVault
- **Responsive**: รองรับการแสดงผลบนอุปกรณ์ต่างๆ
- **TypeScript**: เขียนด้วย TypeScript พร้อม type safety

## การใช้งาน

### การ Import

```tsx
import { QuickActions } from '@/components/quick-actions'
import { DashboardQuickActions } from '@/components/dashboard-quick-actions'
```

### การใช้งานพื้นฐาน

```tsx
// ใช้งานแบบพื้นฐาน
<QuickActions />

// ใช้งานในรูปแบบ Card (แนะนำสำหรับ dashboard)
<DashboardQuickActions />
```

### การใช้งานในหน้าต่างๆ

```tsx
// ตัวอย่างการใช้งานใน dashboard
<div className="grid lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">
    {/* เนื้อหาหลัก */}
  </div>
  <div className="space-y-6">
    {/* Quick Actions */}
    <DashboardQuickActions />
  </div>
</div>
```

## โครงสร้าง Component

### QuickAction
- `icon`: ไอคอนของปุ่ม
- `title`: ชื่อปุ่ม
- `description`: คำอธิบายปุ่ม
- `dialogTitle`: ชื่อของ popup dialog
- `dialogContent`: เนื้อหาภายใน popup dialog

### QuickActions
- แสดงรายการปุ่มทั้งหมด
- จัดการ layout และ styling

### DashboardQuickActions
- wrapper component สำหรับใช้ใน dashboard
- เพิ่ม background และ border ให้เข้ากับ theme

## ข้อมูลที่แสดงในแต่ละ Popup

### 1. ค้นหางานใหม่
- ฟิลด์ค้นหาตำแหน่งงาน
- ฟิลด์ค้นหาสถานที่
- ปุ่มเลือกประเภทงาน (Full-time, Part-time, Remote, On-site)
- ปุ่มค้นหาและล้างตัวกรอง

### 2. แก้ไขโปรไฟล์
- ฟิลด์แก้ไขข้อมูลส่วนตัว (ชื่อ, นามสกุล)
- ฟิลด์แก้ไขข้อมูลการศึกษา
- แสดงทักษะปัจจุบันและปุ่มเพิ่มทักษะ
- ปุ่มบันทึกและยกเลิก

### 3. ดูสถิติ
- สถิติการสมัครงาน (งานที่สมัคร, สัมภาษณ์, ความเหมาะสม)
- รายการงานที่สมัครล่าสุด
- ปุ่มดูรายงานแบบละเอียด

## การปรับแต่ง

### การเปลี่ยนข้อมูล
แก้ไขข้อมูลใน `actions` array ใน `QuickActions` component

### การเปลี่ยน Styling
ใช้ Tailwind CSS classes ในการปรับแต่ง styling

### การเพิ่มปุ่มใหม่
เพิ่ม object ใหม่ใน `actions` array พร้อมกำหนด properties ที่จำเป็น

## Dependencies

- `@/components/ui/button` - ปุ่ม UI
- `@/components/ui/dialog` - Popup dialog
- `lucide-react` - ไอคอน
- Tailwind CSS - Styling

## ตัวอย่างการใช้งานจริง

ดูได้ใน `app/dashboard/page.tsx` ที่มีการใช้งาน `DashboardQuickActions` component
