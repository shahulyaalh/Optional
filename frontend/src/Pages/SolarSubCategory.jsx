"use client";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEO/SEOHead";

const categoryData = {
  panel: [
    {
      id: "mono",
      name: "Monocrystalline Solar Panels",
      image: "/images/Mono Crystalline Solar Panel.png",
      efficiency: "20-22%",
      lifespan: "25-30 years",
      features: ["Highest efficiency", "Premium quality", "Space efficient"],
    },
    {
      id: "poly",
      name: "Polycrystalline Solar Panels",
      image: "/images/Poly Crystalline Solar Panel.png",
      efficiency: "15-17%",
      lifespan: "23-27 years",
      features: ["Cost-effective", "Good performance", "Blue appearance"],
    },
    {
      id: "thin",
      name: "Thin-Film Solar Panels",
      image: "/images/Thin-Film Solar Panel.png",
      efficiency: "10-12%",
      lifespan: "15-20 years",
      features: ["Flexible", "Lightweight", "Works in low light"],
    },
  ],
  inverter: [
    {
      id: "string",
      name: "String Inverters",
      image: "/images/String Inverter.png",
      power: "3-12 kW",
      features: ["Cost-effective", "Easy maintenance", "For medium systems"],
    },
    {
      id: "micro",
      name: ["Easy maintenance", "For medium systems"],
    },
    {
      id: "micro",
      name: "Micro Inverters",
      image: "/images/Micro Inverter.png",
      power: "250-350W per panel",
      features: [
        "Panel-level optimization",
        "Increased safety",
        "Best for shaded areas",
      ],
    },
    {
      id: "hybrid",
      name: "Hybrid Inverters",
      image: "/images/Hybrid Inverter.png",
      power: "3-10 kW",
      features: [
        "Battery integration",
        "Grid & off-grid operation",
        "Smart monitoring",
      ],
    },
  ],
  battery: [
    {
      id: "lithium",
      name: "Lithium-Ion Batteries",
      image: "/images/Lithium-ion Battery.png",
      capacity: "3-15 kWh",
      features: ["High efficiency", "Long life cycle", "Low maintenance"],
    },
    {
      id: "flow",
      name: "Flow Batteries",
      image: "/images/Flow Battery.png",
      capacity: "10-100+ kWh",
      features: [
        "Scalable capacity",
        "Long duration",
        "Deep discharge capable",
      ],
    },
    {
      id: "nickel",
      name: "Nickel-Cadmium Batteries",
      image: "/images/Nickel Cadmium Battery.png",
      capacity: "2-10 kWh",
      features: ["Durable", "Wide temperature range", "Low self-discharge"],
    },
  ],
};

const displayNames = {
  panel: "Solar Panels",
  inverter: "Inverters",
  battery: "Batteries",
};

const categoryDescriptions = {
  panel:
    "Our solar panels convert sunlight into clean, renewable electricity with industry-leading efficiency and reliability.",
  inverter:
    "Inverters are the heart of your solar system, converting DC power from solar panels into usable AC electricity for your home or business.",
  battery:
    "Energy storage solutions that allow you to store excess solar power for use when the sun isn't shining, providing energy independence.",
};

const SolarSubCategory = () => {
  const { categoryId } = useParams();
  const products = categoryData[categoryId] || [];
  const displayName = displayNames[categoryId] || categoryId;
  const categoryDescription = categoryDescriptions[categoryId] || "";

  return (
    <>
      <SEOHead
        title={displayName}
        description={`Explore our range of solar ${displayName.toLowerCase()} including ${products
          .map((p) => p.name)
          .join(", ")}. Find the perfect sustainable energy solution.`}
        canonicalUrl={`/solar-categories/${categoryId}`}
      />

      <section className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <Link
              to="/solar-brands"
              className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Solar Products
            </Link>

            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {displayName}
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
            {products.map((product, index) => (
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

                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  {product.efficiency && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Efficiency:</span>{" "}
                      {product.efficiency}
                    </p>
                  )}

                  {product.lifespan && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Lifespan:</span>{" "}
                      {product.lifespan}
                    </p>
                  )}

                  {product.power && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Power Rating:</span>{" "}
                      {product.power}
                    </p>
                  )}

                  {product.capacity && (
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-medium">Capacity:</span>{" "}
                      {product.capacity}
                    </p>
                  )}

                  {product.features && (
                    <ul className="space-y-2 mt-4">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button className="mt-6 w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-2 rounded-lg transition-colors">
                    Request Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarSubCategory;
