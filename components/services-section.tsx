"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Layout, Palette, Rocket, Code, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: User,
    title: "Portfolio Website Development",
    description: "Stand out with a professional portfolio that showcases your skills, projects, and achievements to potential employers and clients.",
    benefits: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Layout,
    title: "Resume Website Development",
    description: "Transform your traditional resume into an interactive web experience that leaves a lasting impression.",
    benefits: ["Interactive Design", "ATS Friendly", "Easy to Update", "Shareable Link"],
  },
  {
    icon: Rocket,
    title: "Landing Page Development",
    description: "Convert visitors into customers with high-converting landing pages designed for your product or service.",
    benefits: ["Conversion Focused", "A/B Testing Ready", "Fast Performance", "Mobile First"],
  },
  {
    icon: Globe,
    title: "Business Websites",
    description: "Establish your online presence with professional business websites that build trust and credibility.",
    benefits: ["Professional Design", "Contact Forms", "Google Analytics", "SSL Security"],
  },
  {
    icon: Code,
    title: "Frontend Development",
    description: "Modern, responsive, and performant frontend development using the latest technologies and best practices.",
    benefits: ["React/Next.js", "Tailwind CSS", "TypeScript", "Animations"],
  },
  {
    icon: Palette,
    title: "Personal Branding Websites",
    description: "Build your personal brand with a unique website that represents who you are and what you do.",
    benefits: ["Unique Identity", "Social Integration", "Blog Ready", "Custom Domain"],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
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
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional web development services to help you build your online presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Why <span className="gradient-text">Choose Me</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Real Project Experience", desc: "Hands-on experience with production applications" },
              { title: "Modern UI Development", desc: "Latest design trends and technologies" },
              { title: "Clean Code Practices", desc: "Maintainable and scalable codebase" },
              { title: "Affordable Solutions", desc: "Quality work at competitive prices" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-3 h-3 rounded-full bg-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
