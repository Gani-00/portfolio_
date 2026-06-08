"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Sparkles } from "lucide-react"
import { GithubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Interview Practice Platform",
    description: "An AI-powered interview preparation platform helping students practice HR, Technical, and Behavioral interviews with real-time feedback and cloud-based data management.",
    image: "/projects/ai-interview.png",
    techStack: ["React", "Firebase", "JavaScript", "Node.js"],
    github: "https://github.com/ganeshnadivinti",
    demo: "#",
    featured: true,
  },
  {
    title: "LearnSkill",
    description: "A modern e-learning platform offering educational content in Web Development, AI/ML, Data Science, and Cyber Security with a responsive user experience.",
    image: "/projects/learnskill.png",
    techStack: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/ganeshnadivinti",
    demo: "#",
    featured: true,
  },
  {
    title: "CSD Connect",
    description: "A full-stack social networking platform enabling users to connect, share media, and collaborate with friends using Firebase and Cloudinary.",
    image: "/projects/csd-connect.png",
    techStack: ["React", "Firebase", "Cloudinary", "JavaScript"],
    github: "https://github.com/ganeshnadivinti",
    demo: "#",
    featured: true,
  },
  {
    title: "Stock Market AI Bot",
    description: "An intelligent stock market analytics dashboard providing trend analysis, AI-powered insights, technical indicators, and market monitoring.",
    image: "/projects/stock-bot.png",
    techStack: ["Python", "Machine Learning", "Data Analytics", "Visualization"],
    github: "https://github.com/ganeshnadivinti",
    demo: "#",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`glass rounded-2xl overflow-hidden hover:shadow-xl transition-all group ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className={`grid ${project.featured ? "lg:grid-cols-2" : ""}`}>
        <div className="relative h-48 lg:h-64 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/90 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="gap-2" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
                Code
              </a>
            </Button>
            <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
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
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore my latest projects showcasing full-stack development, AI integration, and data analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/ganeshnadivinti" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
