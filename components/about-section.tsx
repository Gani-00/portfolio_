"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Target, Lightbulb, TrendingUp } from "lucide-react"

const stats = [
  { label: "Major Projects", value: "4+", icon: Target },
  { label: "Internships", value: "2", icon: TrendingUp },
  { label: "Certifications", value: "5+", icon: GraduationCap },
  { label: "Technologies", value: "10+", icon: Lightbulb },
]

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numericValue = parseInt(value.replace(/\D/g, ""))
  const suffix = value.replace(/\d/g, "")

  return (
    <span ref={ref} className="text-4xl font-bold gradient-text">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {numericValue}{suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Passionate <span className="gradient-text">Developer</span> & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get to know me better - my journey, goals, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Professional Introduction
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate Full Stack Developer and Data Analytics Enthusiast with hands-on experience in web development, data analysis, and AI-powered solutions. I enjoy building responsive applications, solving real-world problems through technology, and continuously learning modern tools and frameworks.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                Education & Background
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my education in Andhra Pradesh, India, with a strong focus on Computer Science, Web Technologies, and Data Science. My academic journey has equipped me with solid foundations in programming, algorithms, and software development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Career Goals
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently seeking Full Stack Developer opportunities while also helping individuals and businesses build professional web solutions. My goal is to work with innovative teams on challenging projects that make a real impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <AnimatedCounter value={stat.value} />
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 glass rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">What Drives Me</h3>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Continuous Learning", "Clean Code", "User Experience", "Innovation", "Collaboration"].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
