"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credential: "#",
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "NPTEL / Coursera",
    date: "2024",
    credential: "#",
  },
  {
    title: "HTML5 Application Development",
    issuer: "Microsoft",
    date: "2024",
    credential: "#",
  },
  {
    title: "IBM Basics",
    issuer: "IBM SkillsBuild",
    date: "2024",
    credential: "#",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    date: "2024",
    credential: "#",
  },
]

export default function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Continuous learning and skill development through recognized certifications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 text-balance">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-xs flex items-center gap-1"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
