"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Button from "../Button"

const ProductCard = ({ image, name, description, onClick, index = 0, features = [], buttonText = "View Details" }) => {
  return (
    <motion.div
      onClick={onClick}
      className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700 theme-transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Card Content */}
      <div className="p-6 flex flex-col items-center relative z-10">
        <div className="w-full h-56 flex items-center justify-center mb-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="max-h-44 max-w-full object-contain transition-all duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-2">{name}</h3>

        {description && <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-3">{description}</p>}

        {features.length > 0 && (
          <ul className="space-y-1 mt-2 mb-4 text-sm w-full">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="ghost" className="text-blue-600 dark:text-blue-400 font-medium">
            {buttonText} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Accent Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </motion.div>
  )
}

export default ProductCard
