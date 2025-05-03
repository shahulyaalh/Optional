"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  titleClassName,
  subtitleClassName,
  gradient = "primary",
}) => {
  const gradientClasses = {
    primary: "text-gradient-primary",
    solar: "text-gradient-solar",
    cctv: "text-gradient-cctv",
    none: "",
  }

  const alignClasses = {
    center: "text-center mx-auto",
    left: "text-left",
    right: "text-right ml-auto",
  }

  return (
    <div className={cn("mb-12 md:mb-16", alignClasses[align])}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          gradient !== "none" && gradientClasses[gradient],
          titleClassName,
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn("text-gray-600 dark:text-gray-400 max-w-2xl", alignClasses[align], subtitleClassName)}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeading
