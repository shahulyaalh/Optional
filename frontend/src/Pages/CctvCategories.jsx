"use client"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import SEOHead from "../components/SEO/SEOHead"
import ProductCard from "../components/ui/Card/ProductCard"

const cctvCategories = [
  {
    id: "dome",
    name: "Dome Cameras",
    image: "/images/Dome Camera.png",
    description: "Versatile indoor surveillance cameras with 360° coverage",
  },
  {
    id: "bullet",
    name: "Bullet Cameras",
    image: "/images/Bullet Camera.png",
    description: "Weatherproof cameras ideal for outdoor monitoring",
  },
  {
    id: "ip",
    name: "IP Cameras",
    image: "/images/IP Camera.png",
    description: "Digital cameras that transmit data over a network",
  },
  {
    id: "ptz",
    name: "PTZ Cameras",
    image: "/images/PTZ Camera.png",
    description: "Pan, tilt and zoom cameras for comprehensive surveillance",
  },
  {
    id: "wireless",
    name: "Wireless Cameras",
    image: "/images/Wireless Camera.png",
    description: "Easy to install cameras with no wiring required",
  },
  {
    id: "solar",
    name: "Solar Power Cameras",
    image: "/images/Solar Power Camera.webp",
    description: "Eco-friendly cameras powered by solar energy",
  },
]

const CctvCategories = () => {
  const navigate = useNavigate()

  return (
    <>
      <SEOHead
        title="CCTV Camera Products"
        description="Explore our wide range of CCTV cameras, including dome, bullet, IP, PTZ, wireless, and solar-powered security cameras for your home and business."
        canonicalUrl="/cctv-brands"
      />

      <section className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              CCTV Camera Products
            </motion.h1>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Protect what matters most with our high-quality security cameras. Choose from a wide range of options to
              suit your specific needs.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cctvCategories.map((cat, index) => (
              <ProductCard
                key={cat.id}
                image={cat.image}
                name={cat.name}
                onClick={() => navigate(`/cctv/${cat.id}`)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CctvCategories
