// Mock data for all pages
export interface Student {
  id: string
  name: string
  studentId: string
  major: string
  year: number
  gpa: number
  skills: string[]
  strengths: string[]
  weaknesses: string[]
  status: "active" | "placed" | "graduated"
  employer?: string
  position?: string
  performance?: number
  email: string
  phone: string
  address: string
  createdAt: string
  updatedAt: string
}

export interface Employer {
  id: string
  name: string
  company: string
  industry: string
  location: string
  requirements: string[]
  rating: number
  placementCount: number
  email: string
  phone: string
  website: string
  description: string
  createdAt: string
  updatedAt: string
}

export interface Department {
  id: string
  name: string
  headOfDepartment: string
  studentCount: number
  employmentRate: number
  confirmedData: number
  status: "active" | "inactive"
  description: string
  createdAt: string
  updatedAt: string
}

export interface JobPosting {
  id: string
  title: string
  company: string
  location: string
  type: "full-time" | "part-time" | "internship"
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  status: "active" | "closed" | "draft"
  applications: number
  createdAt: string
  updatedAt: string
}

export interface JobApplication {
  id: string
  jobId: string
  candidateId: string
  candidateName: string
  candidateEmail: string
  resume: string
  coverLetter: string
  status: "pending" | "reviewed" | "shortlisted" | "rejected" | "hired"
  appliedAt: string
  updatedAt: string
}

export interface Interview {
  id: string
  candidateName: string
  candidateEmail: string
  position: string
  date: string
  time: string
  duration: number
  type: "phone" | "video" | "onsite"
  platform?: "google-meet" | "zoom" | "teams"
  meetingLink?: string
  status: "scheduled" | "completed" | "cancelled" | "rescheduled"
  notes?: string
  interviewer: string
  createdAt: string
  updatedAt: string
}

export interface Message {
  id: string
  candidateName: string
  position: string
  lastMessage: string
  lastMessageTime: string
  unreadCount: number
  potential: "high" | "medium" | "low"
  engagement: number
  responseTime: number
  messages: ChatMessage[]
  createdAt: string
  updatedAt: string
}

export interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  content: string
  timestamp: string
  isRead: boolean
}

export interface RecentActivity {
  id: string
  type: "upload" | "verify" | "update" | "create" | "delete" | "download"
  title: string
  description: string
  timestamp: string
  icon: string
  userId: string
  userName: string
}

// Mock data
export const mockStudents: Student[] = [
  {
    id: "1",
    name: "สมชาย ใจดี",
    studentId: "6401234567",
    major: "วิทยาการคอมพิวเตอร์",
    year: 4,
    gpa: 3.85,
    skills: ["React", "Node.js", "Python", "SQL", "TypeScript", "Docker"],
    strengths: ["การเขียนโค้ด", "การแก้ปัญหา", "การทำงานเป็นทีม", "การเรียนรู้เร็ว"],
    weaknesses: ["การนำเสนอ", "การจัดการเวลา", "การเขียนเอกสาร"],
    status: "placed",
    employer: "TechCorp Co., Ltd.",
    position: "Junior Software Developer",
    performance: 4.2,
    email: "somchai@student.ac.th",
    phone: "081-234-5678",
    address: "123 ถนนสุขุมวิท, กรุงเทพฯ",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    name: "สมหญิง สมบูรณ์",
    studentId: "6401234568",
    major: "การออกแบบกราฟิก",
    year: 3,
    gpa: 3.92,
    skills: ["Adobe Creative Suite", "Figma", "UI/UX Design", "Illustration", "Typography"],
    strengths: ["ความคิดสร้างสรรค์", "การออกแบบ", "การสื่อสาร", "การทำงานเป็นทีม"],
    weaknesses: ["การเขียนโค้ด", "การวิเคราะห์ข้อมูล", "การจัดการโปรเจค"],
    status: "active",
    email: "somying@student.ac.th",
    phone: "082-345-6789",
    address: "456 ถนนรัชดาภิเษก, กรุงเทพฯ",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "3",
    name: "มานะ ตั้งใจ",
    studentId: "6401234569",
    major: "วิศวกรรมไฟฟ้า",
    year: 4,
    gpa: 3.78,
    skills: ["PLC Programming", "AutoCAD", "Circuit Design", "Power Systems"],
    strengths: ["การวิเคราะห์", "การแก้ปัญหา", "การทำงานอย่างเป็นระบบ"],
    weaknesses: ["การนำเสนอ", "การเขียนรายงาน", "การทำงานเป็นทีม"],
    status: "active",
    email: "mana@student.ac.th",
    phone: "083-456-7890",
    address: "789 ถนนพระราม 9, กรุงเทพฯ",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "4",
    name: "สมศักดิ์ มั่นคง",
    studentId: "6401234570",
    major: "วิศวกรรมโยธา",
    year: 3,
    gpa: 3.65,
    skills: ["AutoCAD", "Structural Analysis", "Construction Management", "Surveying"],
    strengths: ["การคำนวณ", "การวางแผน", "การจัดการ"],
    weaknesses: ["การนำเสนอ", "การเขียนโค้ด", "การออกแบบ"],
    status: "active",
    email: "somsak@student.ac.th",
    phone: "084-567-8901",
    address: "321 ถนนลาดพร้าว, กรุงเทพฯ",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "5",
    name: "สมหญิง รักดี",
    studentId: "6401234571",
    major: "วิศวกรรมเครื่องกล",
    year: 4,
    gpa: 3.88,
    skills: ["SolidWorks", "Thermodynamics", "Mechanics", "Manufacturing"],
    strengths: ["การวิเคราะห์", "การออกแบบ", "การแก้ปัญหา"],
    weaknesses: ["การเขียนโค้ด", "การนำเสนอ", "การจัดการเวลา"],
    status: "placed",
    employer: "Mechanical Solutions Co., Ltd.",
    position: "Mechanical Engineer",
    performance: 4.5,
    email: "somying2@student.ac.th",
    phone: "085-678-9012",
    address: "654 ถนนสุขุมวิท, กรุงเทพฯ",
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  }
]

export const mockEmployers: Employer[] = [
  {
    id: "1",
    name: "คุณวิชัย วิศวกร",
    company: "TechCorp Co., Ltd.",
    industry: "เทคโนโลยี",
    location: "กรุงเทพมหานคร",
    requirements: ["React", "Node.js", "JavaScript", "TypeScript", "SQL"],
    rating: 4.8,
    placementCount: 15,
    email: "wichai@techcorp.com",
    phone: "02-123-4567",
    website: "https://techcorp.com",
    description: "บริษัทเทคโนโลยีชั้นนำที่พัฒนาแอปพลิเคชันและเว็บไซต์",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    name: "คุณสมหญิง ผู้จัดการ",
    company: "Creative Studio Co., Ltd.",
    industry: "การออกแบบ",
    location: "เชียงใหม่",
    requirements: ["Adobe Creative Suite", "Figma", "UI/UX Design", "Illustration"],
    rating: 4.6,
    placementCount: 8,
    email: "somying@creativestudio.com",
    phone: "053-123-4567",
    website: "https://creativestudio.com",
    description: "สตูดิโอออกแบบครีเอทีฟที่เชี่ยวชาญด้านการออกแบบและแบรนด์",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "3",
    name: "คุณมานะ วิศวกร",
    company: "Power Systems Co., Ltd.",
    industry: "พลังงาน",
    location: "กรุงเทพมหานคร",
    requirements: ["PLC Programming", "AutoCAD", "Circuit Design", "Power Systems"],
    rating: 4.4,
    placementCount: 12,
    email: "mana@powersystems.com",
    phone: "02-234-5678",
    website: "https://powersystems.com",
    description: "บริษัทระบบพลังงานที่เชี่ยวชาญด้านการออกแบบและติดตั้งระบบไฟฟ้า",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "4",
    name: "คุณสมศักดิ์ ผู้ก่อตั้ง",
    company: "Construction Pro Co., Ltd.",
    industry: "ก่อสร้าง",
    location: "กรุงเทพมหานคร",
    requirements: ["AutoCAD", "Structural Analysis", "Construction Management"],
    rating: 4.2,
    placementCount: 20,
    email: "somsak@constructionpro.com",
    phone: "02-345-6789",
    website: "https://constructionpro.com",
    description: "บริษัทก่อสร้างที่เชี่ยวชาญด้านการก่อสร้างอาคารและโครงสร้างพื้นฐาน",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "5",
    name: "คุณสมหญิง วิศวกร",
    company: "Mechanical Solutions Co., Ltd.",
    industry: "วิศวกรรม",
    location: "ชลบุรี",
    requirements: ["SolidWorks", "Thermodynamics", "Mechanics", "Manufacturing"],
    rating: 4.7,
    placementCount: 18,
    email: "somying2@mechanicalsolutions.com",
    phone: "038-123-4567",
    website: "https://mechanicalsolutions.com",
    description: "บริษัทวิศวกรรมเครื่องกลที่เชี่ยวชาญด้านการออกแบบและผลิตเครื่องจักร",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  }
]

export const mockDepartments: Department[] = [
  {
    id: "1",
    name: "วิศวกรรมคอมพิวเตอร์",
    headOfDepartment: "ดร. สมชาย ใจดี",
    studentCount: 450,
    employmentRate: 95,
    confirmedData: 425,
    status: "active",
    description: "ภาควิชาที่ศึกษาเกี่ยวกับการออกแบบและพัฒนาระบบคอมพิวเตอร์",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    name: "วิศวกรรมไฟฟ้า",
    headOfDepartment: "ดร. สมหญิง รักดี",
    studentCount: 380,
    employmentRate: 92,
    confirmedData: 350,
    status: "active",
    description: "ภาควิชาที่ศึกษาเกี่ยวกับระบบไฟฟ้าและอิเล็กทรอนิกส์",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "3",
    name: "วิศวกรรมเครื่องกล",
    headOfDepartment: "ดร. มานะ ทำดี",
    studentCount: 420,
    employmentRate: 88,
    confirmedData: 380,
    status: "active",
    description: "ภาควิชาที่ศึกษาเกี่ยวกับการออกแบบและผลิตเครื่องจักร",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "4",
    name: "วิศวกรรมโยธา",
    headOfDepartment: "ดร. สมศักดิ์ ศักดิ์ศรี",
    studentCount: 350,
    employmentRate: 85,
    confirmedData: 320,
    status: "active",
    description: "ภาควิชาที่ศึกษาเกี่ยวกับการออกแบบและก่อสร้างโครงสร้างพื้นฐาน",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "5",
    name: "วิศวกรรมอุตสาหการ",
    headOfDepartment: "ดร. สมหญิง สมบูรณ์",
    studentCount: 300,
    employmentRate: 82,
    confirmedData: 280,
    status: "active",
    description: "ภาควิชาที่ศึกษาเกี่ยวกับการจัดการและปรับปรุงกระบวนการผลิต",
    createdAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  }
]

export const mockJobPostings: JobPosting[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp Co., Ltd.",
    location: "กรุงเทพมหานคร",
    type: "full-time",
    salary: "35,000 - 50,000 บาท",
    description: "พัฒนาแอปพลิเคชันเว็บไซต์ด้วย React และ TypeScript",
    requirements: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    benefits: ["ประกันสุขภาพ", "โบนัสประจำปี", "วันหยุดพักผ่อน 15 วัน"],
    status: "active",
    applications: 25,
    createdAt: "2024-03-01T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Creative Studio Co., Ltd.",
    location: "เชียงใหม่",
    type: "full-time",
    salary: "30,000 - 45,000 บาท",
    description: "ออกแบบประสบการณ์ผู้ใช้และอินเทอร์เฟซสำหรับแอปพลิเคชัน",
    requirements: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"],
    benefits: ["ประกันสุขภาพ", "โบนัสประจำปี", "วันหยุดพักผ่อน 12 วัน"],
    status: "active",
    applications: 18,
    createdAt: "2024-03-05T08:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  }
]

export const mockJobApplications: JobApplication[] = [
  {
    id: "1",
    jobId: "1",
    candidateId: "1",
    candidateName: "สมชาย ใจดี",
    candidateEmail: "somchai@student.ac.th",
    resume: "somchai_resume.pdf",
    coverLetter: "ฉันสนใจตำแหน่ง Frontend Developer มาก...",
    status: "shortlisted",
    appliedAt: "2024-03-15T10:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    jobId: "2",
    candidateId: "2",
    candidateName: "สมหญิง สมบูรณ์",
    candidateEmail: "somying@student.ac.th",
    resume: "somying_resume.pdf",
    coverLetter: "ฉันมีความเชี่ยวชาญด้านการออกแบบ...",
    status: "pending",
    appliedAt: "2024-03-16T14:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  }
]

export const mockInterviews: Interview[] = [
  {
    id: "1",
    candidateName: "สมชาย ใจดี",
    candidateEmail: "somchai@student.ac.th",
    position: "Frontend Developer",
    date: "2024-03-25",
    time: "14:00",
    duration: 60,
    type: "video",
    platform: "google-meet",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    status: "scheduled",
    notes: "ผู้สมัครมีประสบการณ์ React และ TypeScript",
    interviewer: "คุณวิชัย วิศวกร",
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    candidateName: "สมหญิง สมบูรณ์",
    candidateEmail: "somying@student.ac.th",
    position: "UI/UX Designer",
    date: "2024-03-26",
    time: "10:00",
    duration: 45,
    type: "onsite",
    status: "scheduled",
    notes: "ผู้สมัครมีผลงานการออกแบบที่โดดเด่น",
    interviewer: "คุณสมหญิง ผู้จัดการ",
    createdAt: "2024-03-20T11:00:00Z",
    updatedAt: "2024-03-20T11:30:00Z"
  }
]

export const mockMessages: Message[] = [
  {
    id: "1",
    candidateName: "สมชาย ใจดี",
    position: "Frontend Developer",
    lastMessage: "ขอบคุณสำหรับโอกาสในการสัมภาษณ์ครับ",
    lastMessageTime: "2024-03-20T15:30:00Z",
    unreadCount: 0,
    potential: "high",
    engagement: 85,
    responseTime: 2,
    messages: [
      {
        id: "msg1",
        senderId: "candidate1",
        senderName: "สมชาย ใจดี",
        content: "สวัสดีครับ ผมสนใจตำแหน่ง Frontend Developer ครับ",
        timestamp: "2024-03-18T09:00:00Z",
        isRead: true
      },
      {
        id: "msg2",
        senderId: "employer1",
        senderName: "คุณวิชัย วิศวกร",
        content: "สวัสดีครับ ขอบคุณที่สนใจ ตอนนี้เรากำลังพิจารณาใบสมัครครับ",
        timestamp: "2024-03-18T14:00:00Z",
        isRead: true
      },
      {
        id: "msg3",
        senderId: "candidate1",
        senderName: "สมชาย ใจดี",
        content: "ขอบคุณสำหรับโอกาสในการสัมภาษณ์ครับ",
        timestamp: "2024-03-20T15:30:00Z",
        isRead: true
      }
    ],
    createdAt: "2024-03-18T09:00:00Z",
    updatedAt: "2024-03-20T15:30:00Z"
  },
  {
    id: "2",
    candidateName: "สมหญิง สมบูรณ์",
    position: "UI/UX Designer",
    lastMessage: "ฉันพร้อมสำหรับการสัมภาษณ์แล้วครับ",
    lastMessageTime: "2024-03-20T16:00:00Z",
    unreadCount: 1,
    potential: "medium",
    engagement: 70,
    responseTime: 4,
    messages: [
      {
        id: "msg4",
        senderId: "candidate2",
        senderName: "สมหญิง สมบูรณ์",
        content: "สวัสดีครับ ผมสนใจตำแหน่ง UI/UX Designer ครับ",
        timestamp: "2024-03-19T10:00:00Z",
        isRead: true
      },
      {
        id: "msg5",
        senderId: "employer2",
        senderName: "คุณสมหญิง ผู้จัดการ",
        content: "สวัสดีครับ เราจะติดต่อกลับภายใน 2-3 วันครับ",
        timestamp: "2024-03-19T16:00:00Z",
        isRead: true
      },
      {
        id: "msg6",
        senderId: "candidate2",
        senderName: "สมหญิง สมบูรณ์",
        content: "ฉันพร้อมสำหรับการสัมภาษณ์แล้วครับ",
        timestamp: "2024-03-20T16:00:00Z",
        isRead: false
      }
    ],
    createdAt: "2024-03-19T10:00:00Z",
    updatedAt: "2024-03-20T16:00:00Z"
  }
]

export const mockRecentActivities: RecentActivity[] = [
  {
    id: "1",
    type: "upload",
    title: "อัพโหลดข้อมูลสำเร็จ",
    description: "อัพโหลดข้อมูลนักศึกษาใหม่ 150 คนสำเร็จ",
    timestamp: "2 ชั่วโมงที่แล้ว",
    icon: "upload",
    userId: "admin1",
    userName: "ผู้ดูแลระบบ"
  },
  {
    id: "2",
    type: "verify",
    title: "ยืนยันข้อมูลประจำตัว",
    description: "ยืนยันข้อมูลประจำตัวนักศึกษา 25 คน",
    timestamp: "1 วันที่แล้ว",
    icon: "verify",
    userId: "admin2",
    userName: "ผู้ดูแลระบบ"
  },
  {
    id: "3",
    type: "update",
    title: "อัพเดตข้อมูลภาควิชา",
    description: "อัพเดตข้อมูลภาควิชาวิศวกรรมคอมพิวเตอร์",
    timestamp: "2 วันที่แล้ว",
    icon: "update",
    userId: "admin1",
    userName: "ผู้ดูแลระบบ"
  },
  {
    id: "4",
    type: "create",
    title: "สร้างงานใหม่",
    description: "สร้างตำแหน่ง Frontend Developer ใหม่",
    timestamp: "3 วันที่แล้ว",
    icon: "create",
    userId: "employer1",
    userName: "คุณวิชัย วิศวกร"
  },
  {
    id: "5",
    type: "delete",
    title: "ลบข้อมูลเก่า",
    description: "ลบข้อมูลนักศึกษาที่จบการศึกษาแล้ว 45 คน",
    timestamp: "1 สัปดาห์ที่แล้ว",
    icon: "delete",
    userId: "admin1",
    userName: "ผู้ดูแลระบบ"
  }
]
