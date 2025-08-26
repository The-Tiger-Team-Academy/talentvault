import { 
  Student, 
  Employer, 
  Department, 
  JobPosting, 
  JobApplication, 
  Interview, 
  Message, 
  RecentActivity 
} from './mock-data'

class LocalStorageService {
  private readonly KEYS = {
    STUDENTS: 'students',
    EMPLOYERS: 'employers',
    DEPARTMENTS: 'departments',
    JOB_POSTINGS: 'job_postings',
    JOB_APPLICATIONS: 'job_applications',
    INTERVIEWS: 'interviews',
    MESSAGES: 'messages',
    RECENT_ACTIVITIES: 'recent_activities'
  }

  constructor() {
    this.initializeData()
  }

  private initializeData() {
    if (!this.getStudents().length) {
      this.setStudents(this.getMockStudents())
    }
    if (!this.getEmployers().length) {
      this.setEmployers(this.getMockEmployers())
    }
    if (!this.getDepartments().length) {
      this.setDepartments(this.getMockDepartments())
    }
    if (!this.getJobPostings().length) {
      this.setJobPostings(this.getMockJobPostings())
    }
    if (!this.getJobApplications().length) {
      this.setJobApplications(this.getMockJobApplications())
    }
    if (!this.getInterviews().length) {
      this.setInterviews(this.getMockInterviews())
    }
    if (!this.getMessages().length) {
      this.setMessages(this.getMockMessages())
    }
    if (!this.getRecentActivities().length) {
      this.setRecentActivities(this.getMockRecentActivities())
    }
  }

  // Mock data getters
  private getMockStudents() {
    return [
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
        status: "placed" as const,
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
        status: "active" as const,
        email: "somying@student.ac.th",
        phone: "082-345-6789",
        address: "456 ถนนรัชดาภิเษก, กรุงเทพฯ",
        createdAt: "2024-01-15T08:00:00Z",
        updatedAt: "2024-03-20T10:30:00Z"
      }
    ]
  }

  private getMockEmployers() {
    return [
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
      }
    ]
  }

  private getMockDepartments() {
    return [
      {
        id: "1",
        name: "วิศวกรรมคอมพิวเตอร์",
        headOfDepartment: "ดร. สมชาย ใจดี",
        studentCount: 450,
        employmentRate: 95,
        confirmedData: 425,
        status: "active" as const,
        description: "ภาควิชาที่ศึกษาเกี่ยวกับการออกแบบและพัฒนาระบบคอมพิวเตอร์",
        createdAt: "2024-01-01T08:00:00Z",
        updatedAt: "2024-03-20T10:30:00Z"
      }
    ]
  }

  private getMockJobPostings() {
    return [
      {
        id: "1",
        title: "Frontend Developer",
        company: "TechCorp Co., Ltd.",
        location: "กรุงเทพมหานคร",
        type: "full-time" as const,
        salary: "35,000 - 50,000 บาท",
        description: "พัฒนาแอปพลิเคชันเว็บไซต์ด้วย React และ TypeScript",
        requirements: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
        benefits: ["ประกันสุขภาพ", "โบนัสประจำปี", "วันหยุดพักผ่อน 15 วัน"],
        status: "active" as const,
        applications: 25,
        createdAt: "2024-03-01T08:00:00Z",
        updatedAt: "2024-03-20T10:30:00Z"
      }
    ]
  }

  private getMockJobApplications() {
    return [
      {
        id: "1",
        jobId: "1",
        candidateId: "1",
        candidateName: "สมชาย ใจดี",
        candidateEmail: "somchai@student.ac.th",
        resume: "somchai_resume.pdf",
        coverLetter: "ฉันสนใจตำแหน่ง Frontend Developer มาก...",
        status: "shortlisted" as const,
        appliedAt: "2024-03-15T10:00:00Z",
        updatedAt: "2024-03-20T10:30:00Z"
      }
    ]
  }

  private getMockInterviews() {
    return [
      {
        id: "1",
        candidateName: "สมชาย ใจดี",
        candidateEmail: "somchai@student.ac.th",
        position: "Frontend Developer",
        date: "2024-03-25",
        time: "14:00",
        duration: 60,
        type: "video" as const,
        platform: "google-meet" as const,
        meetingLink: "https://meet.google.com/abc-defg-hij",
        status: "scheduled" as const,
        notes: "ผู้สมัครมีประสบการณ์ React และ TypeScript",
        interviewer: "คุณวิชัย วิศวกร",
        createdAt: "2024-03-20T10:00:00Z",
        updatedAt: "2024-03-20T10:30:00Z"
      }
    ]
  }

  private getMockMessages() {
    return [
      {
        id: "1",
        candidateName: "สมชาย ใจดี",
        position: "Frontend Developer",
        lastMessage: "ขอบคุณสำหรับโอกาสในการสัมภาษณ์ครับ",
        lastMessageTime: "2024-03-20T15:30:00Z",
        unreadCount: 0,
        potential: "high" as const,
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
          }
        ],
        createdAt: "2024-03-18T09:00:00Z",
        updatedAt: "2024-03-20T15:30:00Z"
      }
    ]
  }

  private getMockRecentActivities() {
    return [
      {
        id: "1",
        type: "upload" as const,
        title: "อัพโหลดข้อมูลสำเร็จ",
        description: "อัพโหลดข้อมูลนักศึกษาใหม่ 150 คนสำเร็จ",
        timestamp: "2 ชั่วโมงที่แล้ว",
        icon: "upload",
        userId: "admin1",
        userName: "ผู้ดูแลระบบ"
      }
    ]
  }

  // Generic CRUD operations
  private getItem<T>(key: string): T[] {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : []
    } catch (error) {
      console.error(`Error getting item from localStorage: ${key}`, error)
      return []
    }
  }

  private setItem<T>(key: string, value: T[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting item to localStorage: ${key}`, error)
    }
  }

  // Generic search function
  private searchItems<T>(items: T[], searchTerm: string, searchFields: (keyof T)[]): T[] {
    if (!searchTerm.trim()) return items
    
    const term = searchTerm.toLowerCase()
    return items.filter(item => 
      searchFields.some(field => {
        const value = item[field]
        if (typeof value === 'string') {
          return value.toLowerCase().includes(term)
        }
        if (Array.isArray(value)) {
          return value.some(v => v.toLowerCase().includes(term))
        }
        return false
      })
    )
  }

  // Students CRUD
  getStudents(): Student[] {
    return this.getItem<Student>(this.KEYS.STUDENTS)
  }

  setStudents(students: Student[]): void {
    this.setItem(this.KEYS.STUDENTS, students)
  }

  createStudent(student: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student {
    const students = this.getStudents()
    const newStudent: Student = {
      ...student,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    students.push(newStudent)
    this.setStudents(students)
    return newStudent
  }

  updateStudent(id: string, updates: Partial<Student>): Student | null {
    const students = this.getStudents()
    const index = students.findIndex(s => s.id === id)
    if (index === -1) return null
    
    students[index] = { ...students[index], ...updates, updatedAt: new Date().toISOString() }
    this.setStudents(students)
    return students[index]
  }

  deleteStudent(id: string): boolean {
    const students = this.getStudents()
    const filtered = students.filter(s => s.id !== id)
    if (filtered.length === students.length) return false
    
    this.setStudents(filtered)
    return true
  }

  searchStudents(searchTerm: string): Student[] {
    const students = this.getStudents()
    return this.searchItems(students, searchTerm, ['name', 'studentId', 'major', 'email'])
  }

  // Employers CRUD
  getEmployers(): Employer[] {
    return this.getItem<Employer>(this.KEYS.EMPLOYERS)
  }

  setEmployers(employers: Employer[]): void {
    this.setItem(this.KEYS.EMPLOYERS, employers)
  }

  createEmployer(employer: Omit<Employer, 'id' | 'createdAt' | 'updatedAt'>): Employer {
    const employers = this.getEmployers()
    const newEmployer: Employer = {
      ...employer,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    employers.push(newEmployer)
    this.setEmployers(employers)
    return newEmployer
  }

  updateEmployer(id: string, updates: Partial<Employer>): Employer | null {
    const employers = this.getEmployers()
    const index = employers.findIndex(e => e.id === id)
    if (index === -1) return null
    
    employers[index] = { ...employers[index], ...updates, updatedAt: new Date().toISOString() }
    this.setEmployers(employers)
    return employers[index]
  }

  deleteEmployer(id: string): boolean {
    const employers = this.getEmployers()
    const filtered = employers.filter(e => e.id !== id)
    if (filtered.length === employers.length) return false
    
    this.setEmployers(filtered)
    return true
  }

  searchEmployers(searchTerm: string): Employer[] {
    const employers = this.getEmployers()
    return this.searchItems(employers, searchTerm, ['name', 'company', 'industry', 'location', 'email'])
  }

  // Departments CRUD
  getDepartments(): Department[] {
    return this.getItem<Department>(this.KEYS.DEPARTMENTS)
  }

  setDepartments(departments: Department[]): void {
    this.setItem(this.KEYS.DEPARTMENTS, departments)
  }

  createDepartment(department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>): Department {
    const departments = this.getDepartments()
    const newDepartment: Department = {
      ...department,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    departments.push(newDepartment)
    this.setDepartments(departments)
    return newDepartment
  }

  updateDepartment(id: string, updates: Partial<Department>): Department | null {
    const departments = this.getDepartments()
    const index = departments.findIndex(d => d.id === id)
    if (index === -1) return null
    
    departments[index] = { ...departments[index], ...updates, updatedAt: new Date().toISOString() }
    this.setDepartments(departments)
    return departments[index]
  }

  deleteDepartment(id: string): boolean {
    const departments = this.getDepartments()
    const filtered = departments.filter(d => d.id !== id)
    if (filtered.length === departments.length) return false
    
    this.setDepartments(filtered)
    return true
  }

  searchDepartments(searchTerm: string): Department[] {
    const departments = this.getDepartments()
    return this.searchItems(departments, searchTerm, ['name', 'headOfDepartment', 'description'])
  }

  // Job Postings CRUD
  getJobPostings(): JobPosting[] {
    return this.getItem<JobPosting>(this.KEYS.JOB_POSTINGS)
  }

  setJobPostings(jobPostings: JobPosting[]): void {
    this.setItem(this.KEYS.JOB_POSTINGS, jobPostings)
  }

  createJobPosting(jobPosting: Omit<JobPosting, 'id' | 'createdAt' | 'updatedAt'>): JobPosting {
    const jobPostings = this.getJobPostings()
    const newJobPosting: JobPosting = {
      ...jobPosting,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    jobPostings.push(newJobPosting)
    this.setJobPostings(jobPostings)
    return newJobPosting
  }

  updateJobPosting(id: string, updates: Partial<JobPosting>): JobPosting | null {
    const jobPostings = this.getJobPostings()
    const index = jobPostings.findIndex(j => j.id === id)
    if (index === -1) return null
    
    jobPostings[index] = { ...jobPostings[index], ...updates, updatedAt: new Date().toISOString() }
    this.setJobPostings(jobPostings)
    return jobPostings[index]
  }

  deleteJobPosting(id: string): boolean {
    const jobPostings = this.getJobPostings()
    const filtered = jobPostings.filter(j => j.id !== id)
    if (filtered.length === jobPostings.length) return false
    
    this.setJobPostings(filtered)
    return true
  }

  searchJobPostings(searchTerm: string): JobPosting[] {
    const jobPostings = this.getJobPostings()
    return this.searchItems(jobPostings, searchTerm, ['title', 'company', 'location', 'description'])
  }

  // Job Applications CRUD
  getJobApplications(): JobApplication[] {
    return this.getItem<JobApplication>(this.KEYS.JOB_APPLICATIONS)
  }

  setJobApplications(jobApplications: JobApplication[]): void {
    this.setItem(this.KEYS.JOB_APPLICATIONS, jobApplications)
  }

  createJobApplication(jobApplication: Omit<JobApplication, 'id' | 'appliedAt' | 'updatedAt'>): JobApplication {
    const jobApplications = this.getJobApplications()
    const newJobApplication: JobApplication = {
      ...jobApplication,
      id: Date.now().toString(),
      appliedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    jobApplications.push(newJobApplication)
    this.setJobApplications(jobApplications)
    return newJobApplication
  }

  updateJobApplication(id: string, updates: Partial<JobApplication>): JobApplication | null {
    const jobApplications = this.getJobApplications()
    const index = jobApplications.findIndex(j => j.id === id)
    if (index === -1) return null
    
    jobApplications[index] = { ...jobApplications[index], ...updates, updatedAt: new Date().toISOString() }
    this.setJobApplications(jobApplications)
    return jobApplications[index]
  }

  deleteJobApplication(id: string): boolean {
    const jobApplications = this.getJobApplications()
    const filtered = jobApplications.filter(j => j.id !== id)
    if (filtered.length === jobApplications.length) return false
    
    this.setJobApplications(filtered)
    return true
  }

  searchJobApplications(searchTerm: string): JobApplication[] {
    const jobApplications = this.getJobApplications()
    return this.searchItems(jobApplications, searchTerm, ['candidateName', 'candidateEmail', 'resume'])
  }

  // Interviews CRUD
  getInterviews(): Interview[] {
    return this.getItem<Interview>(this.KEYS.INTERVIEWS)
  }

  setInterviews(interviews: Interview[]): void {
    this.setItem(this.KEYS.INTERVIEWS, interviews)
  }

  createInterview(interview: Omit<Interview, 'id' | 'createdAt' | 'updatedAt'>): Interview {
    const interviews = this.getInterviews()
    const newInterview: Interview = {
      ...interview,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    interviews.push(newInterview)
    this.setInterviews(interviews)
    return newInterview
  }

  updateInterview(id: string, updates: Partial<Interview>): Interview | null {
    const interviews = this.getInterviews()
    const index = interviews.findIndex(i => i.id === id)
    if (index === -1) return null
    
    interviews[index] = { ...interviews[index], ...updates, updatedAt: new Date().toISOString() }
    this.setInterviews(interviews)
    return interviews[index]
  }

  deleteInterview(id: string): boolean {
    const interviews = this.getInterviews()
    const filtered = interviews.filter(i => i.id !== id)
    if (filtered.length === interviews.length) return false
    
    this.setInterviews(filtered)
    return true
  }

  searchInterviews(searchTerm: string): Interview[] {
    const interviews = this.getInterviews()
    return this.searchItems(interviews, searchTerm, ['candidateName', 'candidateEmail', 'position', 'interviewer'])
  }

  // Messages CRUD
  getMessages(): Message[] {
    return this.getItem<Message>(this.KEYS.MESSAGES)
  }

  setMessages(messages: Message[]): void {
    this.setItem(this.KEYS.MESSAGES, messages)
  }

  createMessage(message: Omit<Message, 'id' | 'createdAt' | 'updatedAt'>): Message {
    const messages = this.getMessages()
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    messages.push(newMessage)
    this.setMessages(messages)
    return newMessage
  }

  updateMessage(id: string, updates: Partial<Message>): Message | null {
    const messages = this.getMessages()
    const index = messages.findIndex(m => m.id === id)
    if (index === -1) return null
    
    messages[index] = { ...messages[index], ...updates, updatedAt: new Date().toISOString() }
    this.setMessages(messages)
    return messages[index]
  }

  deleteMessage(id: string): boolean {
    const messages = this.getMessages()
    const filtered = messages.filter(m => m.id !== id)
    if (filtered.length === messages.length) return false
    
    this.setMessages(filtered)
    return true
  }

  searchMessages(searchTerm: string): Message[] {
    const messages = this.getMessages()
    return this.searchItems(messages, searchTerm, ['candidateName', 'position', 'lastMessage'])
  }

  // Recent Activities CRUD
  getRecentActivities(): RecentActivity[] {
    return this.getItem<RecentActivity>(this.KEYS.RECENT_ACTIVITIES)
  }

  setRecentActivities(activities: RecentActivity[]): void {
    this.setItem(this.KEYS.RECENT_ACTIVITIES, activities)
  }

  createRecentActivity(activity: Omit<RecentActivity, 'id'>): RecentActivity {
    const activities = this.getRecentActivities()
    const newActivity: RecentActivity = {
      ...activity,
      id: Date.now().toString()
    }
    activities.unshift(newActivity)
    
    // Keep only last 50 activities
    if (activities.length > 50) {
      activities.splice(50)
    }
    
    this.setRecentActivities(activities)
    return newActivity
  }

  // Utility functions
  clearAllData(): void {
    Object.values(this.KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
  }

  exportData(): Record<string, any> {
    const data: Record<string, any> = {}
    Object.entries(this.KEYS).forEach(([key, value]) => {
      data[key] = this.getItem(value)
    })
    return data
  }

  importData(data: Record<string, any>): void {
    Object.entries(data).forEach(([key, value]) => {
      if (this.KEYS[key as keyof typeof this.KEYS]) {
        this.setItem(this.KEYS[key as keyof typeof this.KEYS], value)
      }
    })
  }

  // Method for auth-context compatibility
  initializeSampleData(): void {
    this.initializeData()
  }
}

export const localStorageService = new LocalStorageService()
