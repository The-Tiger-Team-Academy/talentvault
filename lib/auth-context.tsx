"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { localStorageService } from "./local-storage-service"

export interface User {
  id: string
  name: string
  email: string
  type: "job_seeker" | "employer" | "institution"
  avatar?: string
  hasProfile?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, userType: "job_seeker" | "employer" | "institution") => Promise<boolean>
  loading: boolean
  signup: (name: string, email: string, password: string, userType: "job_seeker" | "employer" | "institution") => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user data
const mockUsers: User[] = [
  {
    id: "1",
    name: "ธนากร รักษ์เรียน",
    email: "demo@example.com",
    type: "job_seeker",
    hasProfile: false
  },
  {
    id: "2",
    name: "บริษัท ไทยเทค โซลูชั่นส์ จำกัด",
    email: "demo@example.com",
    type: "employer"
  },
  {
    id: "3",
    name: "Demo University",
    email: "demo@university.ac.th",
    type: "institution"
  }
]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Initialize sample data
    localStorageService.initializeSampleData()
    
    // Check localStorage on mount
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const [loading, setLoading] = useState(false)

  const login = async (email: string, password: string, userType: "job_seeker" | "employer" | "institution"): Promise<boolean> => {
    setLoading(true)
    try {
      // Mock login with delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock login with user type check
      const foundUser = mockUsers.find(u => u.email === email && u.type === userType)
      if (foundUser) {
        setUser(foundUser)
        localStorage.setItem("user", JSON.stringify(foundUser))
        return true
      }
      return false
    } finally {
      setLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string, userType: "job_seeker" | "employer" | "institution"): Promise<boolean> => {
    // Check if email already exists
    if (mockUsers.some(u => u.email === email)) {
      return false
    }

    // Create new user
    const newUser: User = {
      id: (mockUsers.length + 1).toString(),
      name,
      email,
      type: userType,
      hasProfile: userType === "job_seeker" ? false : undefined
    }

    mockUsers.push(newUser)
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}