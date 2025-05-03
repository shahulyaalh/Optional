"use client"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"
import SEOHead from "../components/SEO/SEOHead"

const cctvSubCategoryData = {
  dome: [
    {
      id: "dome1",
      name: "Dome Camera",
      image: "/images/Dome Camera1.png",
      features: ["Indoor use", "360° coverage", "Discreet design"],
    },
    {
      id: "dome2",
      name: "IP Dome Camera",
      image: "/images/IP Dome Camera.png",
      features: ["Network connectivity", "HD resolution", "Remote access"],
    },
  ],
  bullet: [
    {
      id: "bullet1",
      name: "Bullet Camera",
      image: "/images/Bullet Camera1.png",
      features: ["Outdoor use", "Long range", "Weather resistant"],
    },
    {
      id: "bullet2",
      name: "IP Bullet Camera",
      image: "/images/IP Bullet Camera.png",
      features: ["Network enabled", "Wide viewing angle", "Night vision"],
    },
  ],
  ip: [
    {
      id: "ip1",
      name: "IP Dome Camera",
      image: "/images/IP Dome Camera1.png",
      features: ["Remote monitoring", "Digital zoom", "Motion detection"],
    },
    {
      id: "ip2",
      name: "IP Bullet Camera",
      image: "/images/IP Bullet Camera1.png",
      features: ["Weatherproof", "High definition", "Easy installation"],
    },
  ],
  ptz: [
    {
      id: "ptz1",
      name: "PTZ Camera",
      image: "/images/PTZ Camera1.png",
      features: ["Pan, tilt, zoom", "360° rotation", "Preset positions"],
    },
    {
      id: "ptz2",
      name: "PTZ Camera Pro",
      image: "/images/PTZ Camera2.png",
      features: ["Advanced zoom", "Auto tracking", "Wide area coverage"],
    },
  ],
  wireless: [
    {
      id: "wireless1",
      name: "Wireless PT Camera",
      image: "/images/Wireless PT Camera.png",
      features: ["WiFi connectivity", "Pan & tilt", "Easy setup"],
    },
    {
      id: "wireless2",
      name: "Wireless Bullet Camera",
      image: "/images/Wireless Bullet Camera.png",
      features: ["No wiring needed", "Battery powered", "Remote access"],
    },
  ],
  solar: [
    {
      id: "solar1",
      name: "Solar Powered PT Camera",
      image: "/images/Solar Powered PT Camera.png",
      features: ["Solar powered", "Pan & tilt", "Eco-friendly"],
    },
    {
      id: "solar2",
      name: "Solar Power Camera",
      image: "/images/Solar Power Camera.png",
      features: ["Sustainable", "Weather resistant", "No wiring"],
    },
  ],
}

const cctvDisplayNames = {
  dome: "Dome Cameras",
  bullet: "Bullet Cameras",
  ip: "IP Cameras",
  ptz: "PTZ Cameras",
  wireless: "Wireless Cameras",
  solar: "Solar Power Cameras",
}

const cctvDescriptions = {
  dome: "Dome cameras offer 360-degree coverage and are perfect for indoor monitoring with their discreet design.",
  bullet: "Bullet cameras are designed for outdoor use with their weatherproof housing and long-range capabilities.",
  ip: "IP cameras connect to your network for remote monitoring and high-definition surveillance footage.",
  ptz: "Pan-Tilt-Zoom cameras provide comprehensive coverage with the ability to move and focus on specific areas.",
  wireless: "Wireless cameras require no complex wiring and can be placed anywhere within WiFi range.",
  solar: "Solar powered cameras are eco-friendly and can be installed in locations without access to electricity.",
}

const CctvSubCategory = () => {
  const { cctvCategoryId } = useParams()
  const subProducts = cctvSubCategoryData[cctvCategoryId] || []
  const cctvDisplayName = cctvDisplayNames[cctvCategoryId] || "Products"
  const categoryDescription = cctvDescriptions[cctvCategoryId] || ""

  return (
    <>
      <SEOHead
        title={cctvDisplayName}
        description={`Explore our range of ${cctvDisplayName.toLowerCase()} including ${subProducts.map((p) => p.name).join(", ")}. Find the perfect security solution for your needs.`}
        canonicalUrl={`/cctv/${cctvCategoryId}`}
      />

      <section className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <Link
              to="/cctv-brands"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Categories
            </Link>

            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cctvDisplayName}
            </motion.h1>

            <motion.p
              className="text-gray-600 max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {categoryDescription}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {subProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="p-8">
                  <div className="bg-gray-50 rounded-xl p-8 mb-6 flex items-center justify-center h-64">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="max-h-48 max-w-full object-contain transition-all duration-300 hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{product.name}</h3>

                  {product.features && (
                    <ul className="space-y-2 mt-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CctvSubCategory
