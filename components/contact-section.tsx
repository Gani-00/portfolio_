"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Send, MessageSquare, Calendar } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Let&apos;s Build <span className="gradient-text">Something Amazing</span> Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:ganeshnadivinti@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span>ganeshnadivinti@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/ganeshnadivinti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <LinkedinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <span>linkedin.com/in/ganeshnadivinti</span>
                </a>
                <a
                  href="https://github.com/ganeshnadivinti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GithubIcon className="h-5 w-5 text-primary" />
                  </div>
                  <span>github.com/ganeshnadivinti</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:ganeshnadivinti@gmail.com"
                  className="group flex items-center gap-4 w-full p-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Hire Me for a Project</span>
                    <span className="text-xs text-primary-foreground/70">Let&apos;s work together</span>
                  </div>
                </a>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full p-4 rounded-xl border-2 border-primary bg-primary/5 text-foreground hover:bg-primary/10 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold">Schedule a Discussion</span>
                    <span className="text-xs text-muted-foreground">Book a free call</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Available for freelance projects and full-time opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
