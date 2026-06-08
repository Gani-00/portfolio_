"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GitBranch, Star, GitCommit } from "lucide-react"
import { GithubIcon } from "@/components/icons"

const githubStats = [
  { icon: GitBranch, label: "Repositories", value: "15+" },
  { icon: Star, label: "Total Stars", value: "50+" },
  { icon: GitCommit, label: "Contributions", value: "500+" },
]

const languages = [
  { name: "JavaScript", percentage: 40, color: "#F7DF1E" },
  { name: "Python", percentage: 25, color: "#3776AB" },
  { name: "TypeScript", percentage: 20, color: "#3178C6" },
  { name: "HTML/CSS", percentage: 15, color: "#E34F26" },
]

export default function GithubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            GitHub
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            My coding activity and contributions on GitHub
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {githubStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="glass rounded-2xl p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                )
              })}
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <GithubIcon className="h-5 w-5" />
                Top Languages
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold mb-4">Contribution Graph</h3>
            <div className="aspect-[2/1] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center overflow-hidden">
              {/* Simulated contribution graph */}
              <div className="grid grid-cols-52 gap-1 p-4">
                {Array.from({ length: 364 }).map((_, i) => {
                  const intensity = Math.random()
                  let bgColor = "bg-border"
                  if (intensity > 0.8) bgColor = "bg-primary"
                  else if (intensity > 0.6) bgColor = "bg-primary/70"
                  else if (intensity > 0.4) bgColor = "bg-primary/40"
                  else if (intensity > 0.2) bgColor = "bg-primary/20"
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: 0.5 + i * 0.001 }}
                      className={`w-2 h-2 rounded-sm ${bgColor}`}
                    />
                  )
                })}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-border" />
                <div className="w-3 h-3 rounded-sm bg-primary/20" />
                <div className="w-3 h-3 rounded-sm bg-primary/40" />
                <div className="w-3 h-3 rounded-sm bg-primary/70" />
                <div className="w-3 h-3 rounded-sm bg-primary" />
              </div>
              <span>More</span>
            </div>
            <a
              href="https://github.com/ganeshnadivinti"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-primary hover:underline text-sm"
            >
              <GithubIcon className="h-4 w-4" />
              View Full Profile on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
