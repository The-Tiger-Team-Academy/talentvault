"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  type: "job_seeker" | "employer"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, userType: "job_seeker" | "employer") => Promise<boolean>
  signup: (name: string, email: string, password: string, userType: "job_seeker" | "employer") => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock users for demonstration
const mockUsers: User[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@example.com",
    type: "job_seeker",
  },
  {
    id: "2",
    name: "Tech Corp Recruiter",
    email: "recruiter@techcorp.com",
    type: "employer",
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string, userType: "job_seeker" | "employer"): Promise<boolean> => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication - in real app, this would validate against backend
    const foundUser = mockUsers.find((u) => u.email === email && u.type === userType)

    if (foundUser || email === "demo@example.com") {
      const authenticatedUser = foundUser || {
        id: "999",
        name: userType === "job_seeker" ? "Demo Job Seeker" : "Demo Employer",
        email,
        type: userType,
      }

      setUser(authenticatedUser)
      localStorage.setItem("user", JSON.stringify(authenticatedUser))
      setLoading(false)
      return true
    }

    setLoading(false)
    return false
  }

  const signup = async (
    name: string,
    email: string,
    password: string,
    userType: "job_seeker" | "employer",
  ): Promise<boolean> => {
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock signup - in real app, this would create user in backend
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      type: userType,
    }

    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    setLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
