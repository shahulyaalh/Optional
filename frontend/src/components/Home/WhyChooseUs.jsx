"use client"

import { motion } from "framer-motion"
import { Leaf, Sun, Award, Headphones, Scale } from "lucide-react"
import Section from "../ui/Section"
import SectionHeading from "../ui/SectionHeading"

const benefits = [
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Eco-Friendly",
    desc: "Sustainable and renewable energy solutions that reduce your carbon footprint.",
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    icon: <Sun className="w-10 h-10" />,
    title: "High Efficiency",
    desc: "Premium solar panels that maximize energy output even in low-light conditions.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Premium Products",
    desc: "High-quality solar panels & security equipment from trusted global brands.",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    icon: <Headphones className="w-10 h-10" />,
    title: "End-to-End Support",
    desc: "Comprehensive service from consultation to installation and maintenance.",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    icon: <Scale className="w-10 h-10" />,
    title: "Transparent Pricing",
    desc: "Clear, honest quotes with no hidden costs or surprise fees.",
    color: "text-rose-500",
    bgColor: "bg-rose-100 dark:bg-rose-900/20",
  },
]

const WhyChooseUs = () => {
  return (
    <Section background="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <SectionHeading
        title="Why Choose Us?"
        subtitle="We're committed to excellence in every aspect of our service, from product quality to customer support."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >
            <div
              className={`${item.bgColor} ${item.color} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default WhyChooseUs
