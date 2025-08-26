'use client'

import React from 'react'
import { QuickActions } from './quick-actions'

// ตัวอย่างการใช้งาน Quick Actions ในหน้าอื่นๆ
export const QuickActionsExample: React.FC = () => {
  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold mb-2">ตัวอย่างการใช้งาน Quick Actions</h1>
          <p className="text-muted-foreground">
            คอมโพเนนต์นี้สามารถใช้ในหน้าต่างๆ ของแอปพลิเคชัน
          </p>
        </div>
        
        {/* ตัวอย่างการใช้งานในรูปแบบ Card */}
        <div className="bg-white rounded-lg border shadow-sm p-6">
          <QuickActions />
        </div>
        
        {/* ตัวอย่างการใช้งานในรูปแบบ Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">เนื้อหาหลัก</h2>
              <p className="text-muted-foreground">
                เนื้อหาหลักของหน้าจะอยู่ที่นี่...
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
