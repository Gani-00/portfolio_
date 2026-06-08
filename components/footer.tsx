"use client"

import { motion } from "framer-motion"
import { Mail, Heart, ArrowUp } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/ganeshnadivinti", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/ganeshnadivinti", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ganeshnadivinti@gmail.com", label: "Email" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-background relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold text-primary">
              Ganesh.dev
            </a>
            <p className="mt-4 text-background/70 leading-relaxed">
              Full Stack Developer passionate about building modern web applications and data-driven solutions.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-background/70">
              <p>Andhra Pradesh, India</p>
              <a href="mailto:ganeshnadivinti@gmail.com" className="hover:text-primary transition-colors block">
                ganeshnadivinti@gmail.com
              </a>
            </div>
            <div className="mt-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for opportunities
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Ganesh Nadivinti © {new Date().getFullYear()}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
