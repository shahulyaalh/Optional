"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Section from "../ui/Section"
import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"

const ProductsShowcase = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: "solar",
      title: "Solar Energy Solutions",
      description: "Harness the power of the sun with our high-efficiency solar panels, inverters, and batteries.",
      image: "/images/solar-showcase.jpg",
      color: "from-green-600 to-blue-600",
      route: "/solar-brands",
      features: ["Reduce electricity bills", "Environmentally friendly", "Government incentives", "25+ years lifespan"],
    },
    {
      id: "cctv",
      title: "Security Camera Systems",
      description: "Protect your property with advanced surveillance systems for homes and businesses.",
      image: "/images/cctv-showcase.jpg",
      color: "from-blue-700 to-blue-500",
      route: "/cctv-brands",
      features: ["24/7 monitoring", "Remote access", "Motion detection", "Night vision capabilities"],
    },
  ]

  return (
    <Section>
      <SectionHeading
        title="Our Premium Solutions"
        subtitle="Discover our range of high-quality solar energy and security products designed for reliability and performance."
      />

      <div className="space-y-16">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
          >
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${product.color} opacity-20 rounded-2xl transform rotate-3 scale-105`}
                ></div>
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover relative z-10"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 space-y-6">
              <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${product.color}`}>
                {product.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg">{product.description}</p>

              <ul className="grid grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className={`text-gradient-${product.id === "solar" ? "solar" : "cctv"} text-lg`}>•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => navigate(product.route)}
                variant={product.id === "solar" ? "gradient-solar" : "gradient-cctv"}
                size="lg"
                className="mt-4"
              >
                Explore {product.id === "solar" ? "Solar Products" : "Security Systems"}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default ProductsShowcase
