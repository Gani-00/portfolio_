"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Download, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Welcome to my Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Ganesh Nadivinti</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-12"
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Python Developer",
                2000,
                "Data Analyst",
                2000,
                "AI Enthusiast",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Building modern web applications and data-driven solutions that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-all hover:-translate-y-0.5"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/ganeshnadivinti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-lg"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ganeshnadivinti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-1 shadow-lg"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
