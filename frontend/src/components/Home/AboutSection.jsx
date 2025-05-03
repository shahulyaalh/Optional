"use client"

import { motion } from "framer-motion"
import Section from "../ui/Section"
import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"
import { useNavigate } from "react-router-dom"

const AboutSection = () => {
  const navigate = useNavigate()

  return (
    <Section background="bg-gray-50 dark:bg-gray-800">
      <SectionHeading
        title="About Stair Ecosystem"
        subtitle="We're on a mission to transform how homes and businesses power and protect their spaces."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-lg -z-10"></div>
            <img
              src="/about-image.jpg"
              alt="Solar installation team"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500/20 rounded-lg -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Our Story</h3>

          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-blue-700 dark:text-blue-400">Stair Ecosystem</span> was founded with a
            clear vision - to make sustainable energy and security solutions accessible to everyone. We believe that
            clean energy and reliable security should be the standard, not a luxury.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            Our team combines decades of experience in solar technology and security systems to deliver integrated
            solutions that work seamlessly together, saving you money while reducing your environmental impact.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg">10+</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Years of Experience</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg">500+</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg">98%</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Customer Satisfaction</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 text-lg">24/7</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Customer Support</p>
            </div>
          </div>

          <Button onClick={() => navigate("/about")} variant="outline" className="mt-6">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default AboutSection
