"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Tech Company",
    location: "Remote / India",
    period: "2024",
    description: "Gained hands-on experience in full-stack web development using the MERN stack.",
    responsibilities: [
      "Frontend Development with React.js",
      "REST API Development with Node.js & Express",
      "Database Integration with MongoDB",
      "Responsive UI Development",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
  },
  {
    title: "Data Analytics Intern",
    company: "Analytics Firm",
    location: "Remote / India",
    period: "2024",
    description: "Applied data analytics techniques to derive insights from real-world datasets.",
    responsibilities: [
      "Data Cleaning & Preprocessing",
      "Data Visualization with Python",
      "Statistical Analysis",
      "Basic Machine Learning Models",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI"],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My internship experiences and professional growth in the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 hidden md:block" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="p-2 rounded-xl bg-primary/10">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp) => (
                          <li key={resp} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
