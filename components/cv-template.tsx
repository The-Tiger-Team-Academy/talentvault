"use client"

import { User } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface CVTemplateProps {
  user: User
  onDownload: () => void
}

export function CVTemplate({ user, onDownload }: CVTemplateProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-[800px] mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Professional Summary</h2>
        <p className="text-gray-700">
          Experienced software developer with a strong background in web development and a passion for creating efficient, scalable solutions.
          Proven track record of delivering high-quality projects and collaborating effectively in team environments.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Senior Software Developer</h3>
            <p className="text-gray-600">Tech Solutions Co., Ltd. | 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Led development of enterprise-level web applications</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented CI/CD pipelines improving deployment efficiency by 40%</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Software Developer</h3>
            <p className="text-gray-600">Digital Innovations Co. | 2018 - 2020</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Developed and maintained multiple client-facing applications</li>
              <li>Collaborated with cross-functional teams to deliver projects on time</li>
              <li>Reduced application load time by 60% through optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Technical Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript/TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technologies & Tools</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js/Next.js</li>
              <li>Node.js</li>
              <li>Docker</li>
              <li>AWS/GCP</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">Education</h2>
        <div>
          <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600">University of Technology | 2014 - 2018</p>
          <p className="text-gray-700 mt-2">GPA: 3.8/4.0</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="flex justify-center mt-8">
        <Button onClick={onDownload} className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>
    </div>
  )
}
