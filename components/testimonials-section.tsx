"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Tech Lead",
    role: "MERN Stack Internship",
    content: "Ganesh showed exceptional learning ability and quickly adapted to our development workflow. His contributions to our frontend projects were valuable and demonstrated strong React skills.",
    rating: 5,
  },
  {
    name: "Project Manager",
    role: "Data Analytics Project",
    content: "Great attention to detail in data analysis tasks. Ganesh delivered clean visualizations and insights that helped us understand our datasets better.",
    rating: 5,
  },
  {
    name: "Mentor",
    role: "Academic Project",
    content: "One of the most dedicated students I&apos;ve mentored. His AI Interview Platform project showed creativity and practical application of modern web technologies.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Feedback from mentors, colleagues, and project collaborators
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/10" />
            
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-pretty">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
