"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    color: "#2563EB",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Bootstrap", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "#3B82F6",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    title: "Database",
    color: "#60A5FA",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    title: "Programming",
    color: "#2563EB",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Data Analytics",
    color: "#3B82F6",
    skills: [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 70 },
      { name: "Matplotlib", level: 70 },
      { name: "Power BI", level: 65 },
    ],
  },
  {
    title: "AI & ML",
    color: "#60A5FA",
    skills: [
      { name: "Machine Learning", level: 60 },
      { name: "Data Visualization", level: 70 },
    ],
  },
  {
    title: "Tools",
    color: "#2563EB",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
