"use client"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import SEOHead from "../components/SEO/SEOHead"
import ProductCard from "../components/ui/Card/ProductCard"

const solarCategories = [
  {
    id: "panel",
    name: "Solar Panels",
    image: "/images/panel.png",
    description: "High-efficiency solar panels to convert sunlight into clean energy",
  },
  {
    id: "inverter",
    name: "Inverters",
    image: "/images/inverter.png",
    description: "Convert DC electricity from solar panels into AC for home use",
  },
  {
    id: "battery",
    name: "Batteries",
    image: "/images/battery.png",
    description: "Store excess solar energy for use when the sun isn't shining",
  },
]

const SolarCategories = () => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/solar-categories/${id}`)
  }

  return (
    <>
      <SEOHead
        title="Solar Products"
        description="Explore our complete range of solar energy products including high-efficiency solar panels, inverters, and batteries for sustainable energy solutions."
        canonicalUrl="/solar-brands"
      />

      <section className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Solar Energy Products
            </motion.h1>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Harness the power of the sun with our high-quality solar energy solutions. Sustainable, efficient, and
              built to last.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solarCategories.map((cat, index) => (
              <ProductCard
                key={cat.id}
                image={cat.image}
                name={cat.name}
                onClick={() => handleClick(cat.id)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SolarCategories
