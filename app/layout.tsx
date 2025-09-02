import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from "@/lib/auth-context"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

export const metadata: Metadata = {
  title: "skillbridge - โปรไฟล์มืออาชีพที่เหนือกว่าเรซูเม่",
  description: "Showcase your complete professional story and connect with employers seeking your unique expertise",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <style>{`
html {
  font-family: 'Sukhumvit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
* {
  -webkit-tap-highlight-color: transparent;
}
        `}</style>
      </head>
      <body>
        <AuthProvider>
          <SiteHeader />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
