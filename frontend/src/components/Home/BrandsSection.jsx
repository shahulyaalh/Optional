"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Section from "../ui/Section"
import SectionHeading from "../ui/SectionHeading"

const brands = [
  { name: "TATA Power", logo: "/images/brands/Tata Power.png" },
  { name: "Waaree", logo: "/images/brands/Waaree.png" },
  { name: "Loom Solar", logo: "/images/brands/Loom Solar.png" },
  { name: "Luminous", logo: "/images/brands/Luminous.png" },
  { name: "UTL", logo: "/images/brands/UTL.png" },
  { name: "Hikvision", logo: "/images/brands/Hikvision.png" },
  { name: "CP Plus", logo: "/images/brands/Cp plus.png" },
  { name: "ZICOM", logo: "/images/brands/zicom.png" },
  { name: "Godrej", logo: "/images/brands/Godrej.png" },
]

const BrandsSection = () => {
  const scrollRef = useRef(null)

  // Automatic scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId
    let scrollAmount = 0
    const speed = 0.5

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
      animationId = requestAnimationFrame(scroll)
    }

    scroll()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <Section background="bg-white dark:bg-gray-900">
      <SectionHeading
        title="Trusted Brands"
        subtitle="We partner with industry-leading manufacturers to bring you the highest quality products."
      />

      <div className="relative overflow-hidden">
        {/* Gradient fade on left */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white dark:from-gray-900 to-transparent"></div>

        {/* Scrolling brands */}
        <div ref={scrollRef} className="flex overflow-x-hidden py-8">
          {/* First set of brands */}
          <div className="flex space-x-16 items-center animate-scroll">
            {brands.map((brand, index) => (
              <motion.div
                key={`brand-1-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center min-w-[120px]"
              >
                <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter dark:brightness-90"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">{brand.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Duplicate set for seamless scrolling */}
          <div className="flex space-x-16 items-center animate-scroll">
            {brands.map((brand, index) => (
              <motion.div
                key={`brand-2-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center min-w-[120px]"
              >
                <div className="w-24 h-24 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain filter dark:brightness-90"
                  />
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 font-medium">{brand.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient fade on right */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white dark:from-gray-900 to-transparent"></div>
      </div>
    </Section>
  )
}

export default BrandsSection
