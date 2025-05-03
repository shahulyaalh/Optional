"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Section from "../ui/Section"
import Button from "../ui/Button"

const CtaSection = () => {
  const navigate = useNavigate()

  return (
    <Section background="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Transform Your Energy & Security?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-100 mb-8"
        >
          Contact us today for a free consultation and quote. Our experts are ready to design the perfect solution for
          your needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => navigate("/contact")}
            variant="default"
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            Contact Us
          </Button>
          <Button
            onClick={() => navigate("/products")}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Explore Products
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default CtaSection
