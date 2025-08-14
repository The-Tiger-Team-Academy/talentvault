export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-6"></div>
        <p className="text-slate-600 text-lg font-medium">กำลังโหลด...</p>
        <p className="text-slate-500 text-sm mt-2">กรุณารอสักครู่</p>
      </div>
    </div>
  )
}
