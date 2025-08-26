export interface JobPosting {
  id: string
  title: string
  company: string
  description: string
  requirements: string[]
  salary: string
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'internship'
  postedDate: string
  employerId: string
  applications: JobApplication[]
}

export interface JobApplication {
  id: string
  jobId: string
  applicantId: string
  applicantName: string
  status: 'pending' | 'reviewed' | 'interviewed' | 'accepted' | 'rejected'
  appliedDate: string
  coverLetter?: string
}

export interface UserProfile {
  id: string
  userId: string
  name: string
  email: string
  phone?: string
  location?: string
  summary: string
  experience: WorkExperience[]
  education: Education[]
  skills: string[]
  languages: string[]
  certifications: string[]
  updatedAt: string
}

export interface WorkExperience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: string
}

export interface Interview {
  id: string
  jobId: string
  applicantId: string
  employerId: string
  scheduledDate: string
  duration: number
  type: 'phone' | 'video' | 'in-person'
  status: 'scheduled' | 'completed' | 'cancelled'
  notes?: string
}

export interface Message {
  id: string
  senderId: string
  receiverId: string
  subject: string
  content: string
  timestamp: string
  read: boolean
}

class LocalStorageService {
  private getItem<T>(key: string): T[] {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : []
    } catch {
      return []
    }
  }

  private setItem<T>(key: string, value: T[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  // Job Postings CRUD
  getJobPostings(): JobPosting[] {
    return this.getItem<JobPosting>('jobPostings')
  }

  getJobPosting(id: string): JobPosting | null {
    const jobs = this.getJobPostings()
    return jobs.find(job => job.id === id) || null
  }

  createJobPosting(job: Omit<JobPosting, 'id' | 'postedDate' | 'applications'>): JobPosting {
    const jobs = this.getJobPostings()
    const newJob: JobPosting = {
      ...job,
      id: Date.now().toString(),
      postedDate: new Date().toISOString(),
      applications: []
    }
    jobs.push(newJob)
    this.setItem('jobPostings', jobs)
    return newJob
  }

  updateJobPosting(id: string, updates: Partial<JobPosting>): JobPosting | null {
    const jobs = this.getJobPostings()
    const index = jobs.findIndex(job => job.id === id)
    if (index === -1) return null

    jobs[index] = { ...jobs[index], ...updates }
    this.setItem('jobPostings', jobs)
    return jobs[index]
  }

  deleteJobPosting(id: string): boolean {
    const jobs = this.getJobPostings()
    const filteredJobs = jobs.filter(job => job.id !== id)
    this.setItem('jobPostings', filteredJobs)
    return filteredJobs.length < jobs.length
  }

  // Job Applications CRUD
  getJobApplications(jobId?: string): JobApplication[] {
    const applications = this.getItem<JobApplication>('jobApplications')
    if (jobId) {
      return applications.filter(app => app.jobId === jobId)
    }
    return applications
  }

  createJobApplication(application: Omit<JobApplication, 'id' | 'appliedDate'>): JobApplication {
    const applications = this.getItem<JobApplication>('jobApplications')
    const newApplication: JobApplication = {
      ...application,
      id: Date.now().toString(),
      appliedDate: new Date().toISOString()
    }
    applications.push(newApplication)
    this.setItem('jobApplications', applications)
    return newApplication
  }

  updateJobApplication(id: string, updates: Partial<JobApplication>): JobApplication | null {
    const applications = this.getItem<JobApplication>('jobApplications')
    const index = applications.findIndex(app => app.id === id)
    if (index === -1) return null

    applications[index] = { ...applications[index], ...updates }
    this.setItem('jobApplications', applications)
    return applications[index]
  }

  // User Profiles CRUD
  getUserProfile(userId: string): UserProfile | null {
    const profiles = this.getItem<UserProfile>('userProfiles')
    return profiles.find(profile => profile.userId === userId) || null
  }

  createUserProfile(profile: Omit<UserProfile, 'id' | 'updatedAt'>): UserProfile {
    const profiles = this.getItem<UserProfile>('userProfiles')
    const newProfile: UserProfile = {
      ...profile,
      id: Date.now().toString(),
      updatedAt: new Date().toISOString()
    }
    profiles.push(newProfile)
    this.setItem('userProfiles', newProfile)
    return newProfile
  }

  updateUserProfile(userId: string, updates: Partial<UserProfile>): UserProfile | null {
    const profiles = this.getItem<UserProfile>('userProfiles')
    const index = profiles.findIndex(profile => profile.userId === userId)
    if (index === -1) return null

    profiles[index] = { 
      ...profiles[index], 
      ...updates, 
      updatedAt: new Date().toISOString() 
    }
    this.setItem('userProfiles', profiles)
    return profiles[index]
  }

  // Interviews CRUD
  getInterviews(userId: string, role: 'employer' | 'applicant'): Interview[] {
    const interviews = this.getItem<Interview>('interviews')
    if (role === 'employer') {
      return interviews.filter(interview => interview.employerId === userId)
    } else {
      return interviews.filter(interview => interview.applicantId === userId)
    }
  }

  createInterview(interview: Omit<Interview, 'id'>): Interview {
    const interviews = this.getItem<Interview>('interviews')
    const newInterview: Interview = {
      ...interview,
      id: Date.now().toString()
    }
    interviews.push(newInterview)
    this.setItem('interviews', interviews)
    return newInterview
  }

  updateInterview(id: string, updates: Partial<Interview>): Interview | null {
    const interviews = this.getItem<Interview>('interviews')
    const index = interviews.findIndex(interview => interview.id === id)
    if (index === -1) return null

    interviews[index] = { ...interviews[index], ...updates }
    this.setItem('interviews', interviews)
    return interviews[index]
  }

  // Messages CRUD
  getMessages(userId: string): Message[] {
    const messages = this.getItem<Message>('messages')
    return messages.filter(msg => 
      msg.senderId === userId || msg.receiverId === userId
    ).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }

  createMessage(message: Omit<Message, 'id' | 'timestamp' | 'read'>): Message {
    const messages = this.getItem<Message>('messages')
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      read: false
    }
    messages.push(newMessage)
    this.setItem('messages', messages)
    return newMessage
  }

  markMessageAsRead(id: string): boolean {
    const messages = this.getItem<Message>('messages')
    const index = messages.findIndex(msg => msg.id === id)
    if (index === -1) return false

    messages[index].read = true
    this.setItem('messages', messages)
    return true
  }

  // Initialize with sample data
  initializeSampleData(): void {
    // Only initialize if no data exists
    if (this.getJobPostings().length === 0) {
      const sampleJobs: JobPosting[] = [
        {
          id: '1',
          title: 'นักพัฒนาซอฟต์แวร์อาวุโส',
          company: 'บริษัท ไทยเทค โซลูชั่นส์ จำกัด',
          description: 'พัฒนาระบบซอฟต์แวร์ระดับองค์กร',
          requirements: ['React', 'Node.js', 'TypeScript', '5+ years experience'],
          salary: '80,000 - 120,000 บาท',
          location: 'กรุงเทพฯ',
          type: 'full-time',
          postedDate: new Date().toISOString(),
          employerId: '2',
          applications: []
        },
        {
          id: '2',
          title: 'วิศวกรข้อมูล',
          company: 'บริษัท ดาต้า อินไซต์ จำกัด',
          description: 'วิเคราะห์และจัดการข้อมูลขนาดใหญ่',
          requirements: ['Python', 'SQL', 'Machine Learning', '3+ years experience'],
          salary: '60,000 - 100,000 บาท',
          location: 'กรุงเทพฯ',
          type: 'full-time',
          postedDate: new Date().toISOString(),
          employerId: '2',
          applications: []
        }
      ]
      this.setItem('jobPostings', sampleJobs)
    }

    if (this.getUserProfile('1') === null) {
      const sampleProfile: UserProfile = {
        id: '1',
        userId: '1',
        name: 'ธนากร รักษ์เรียน',
        email: 'demo@example.com',
        summary: 'นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ในการพัฒนาระบบเว็บแอปพลิเคชัน',
        experience: [
          {
            id: '1',
            company: 'Tech Solutions Co., Ltd.',
            position: 'Senior Software Developer',
            startDate: '2020-01-01',
            description: 'พัฒนาระบบเว็บแอปพลิเคชันระดับองค์กร',
            achievements: ['ลดเวลาในการโหลดหน้าเว็บลง 60%', 'นำทีมพัฒนา 5 คน']
          }
        ],
        education: [
          {
            id: '1',
            institution: 'University of Technology',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2014-01-01',
            endDate: '2018-01-01',
            gpa: '3.8'
          }
        ],
        skills: ['React', 'Node.js', 'TypeScript', 'Python', 'SQL'],
        languages: ['ไทย', 'อังกฤษ'],
        certifications: ['AWS Certified Developer'],
        updatedAt: new Date().toISOString()
      }
      this.setItem('userProfiles', [sampleProfile])
    }
  }
}

export const localStorageService = new LocalStorageService()
