"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Section from "../ui/Section"
import SectionHeading from "../ui/SectionHeading"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    image: "/testimonials/person1.jpg",
    content:
      "The solar installation by Stair Ecosystem has reduced my electricity bill by 70%. Their team was professional and completed the work ahead of schedule. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    image: "/testimonials/person2.jpg",
    content:
      "We installed CCTV cameras from Stair Ecosystem for our retail store. The quality is excellent and their after-sales service is outstanding. They're always available when we need support.",
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "School Principal",
    image: "/testimonials/person3.jpg",
    content:
      "Our school switched to solar power with Stair Ecosystem's help. The transition was smooth, and we're now saving significantly on energy costs while teaching students about sustainability.",
  },
]

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Autoplay
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <Section background="bg-gray-50 dark:bg-gray-800">
      <SectionHeading
        title="What Our Customers Say"
        subtitle="Don't just take our word for it. Here's what our clients have to say about their experience with Stair Ecosystem."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Slider */}
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg p-8 md:p-12 min-h-[300px]">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-100 dark:text-gray-800 opacity-50" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl italic mb-8">
                "{testimonials[current].content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[current].image || `/placeholder.svg?height=48&width=48`}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">{testimonials[current].name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current ? "bg-blue-600 dark:bg-blue-400" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </Section>
  )
}

export default TestimonialsSection
