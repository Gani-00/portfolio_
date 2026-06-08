"use client"

import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import CertificationsSection from "@/components/certifications-section"
import GithubSection from "@/components/github-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"

// Dynamically import 3D scene to avoid SSR issues
const Scene3D = dynamic(() => import("@/components/scene-3d"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background to-card" />
  ),
})

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      
      <div className="relative">
        <Scene3D />
        <HeroSection />
      </div>
      
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <CertificationsSection />
      <GithubSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
