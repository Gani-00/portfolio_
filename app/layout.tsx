import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ganesh Nadivinti | Full Stack Developer',
  description: 'Full Stack Developer & Data Analytics Enthusiast building modern web applications and data-driven solutions. Explore my portfolio showcasing React, Node.js, Python, and AI/ML projects.',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Node.js', 'Python', 'Data Analytics', 'AI/ML', 'Portfolio'],
  authors: [{ name: 'Ganesh Nadivinti' }],
  openGraph: {
    title: 'Ganesh Nadivinti | Full Stack Developer',
    description: 'Building Modern Web Applications, Data-Driven Solutions, and AI-Powered Experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
