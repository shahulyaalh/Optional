"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Helmet } from "react-helmet-async"

import HeroSection from "../components/Home/HeroSection"
import AboutSection from "../components/Home/AboutSection"
import WhyChooseUs from "../components/Home/WhyChooseUs"
import ProductsShowcase from "../components/Home/ProductsShowcase"
import TestimonialsSection from "../components/Home/TestimonialsSection"
import BrandsSection from "../components/Home/BrandsSection"
import CtaSection from "../components/Home/CtaSection"

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <Helmet>
        <title>Stair Ecosystem - Solar Energy & CCTV Solutions</title>
        <meta
          name="description"
          content="Stair Ecosystem provides premium solar energy solutions and CCTV security systems for homes and businesses. Harness the sun and secure your world with our expert team."
        />
        <meta
          name="keywords"
          content="solar energy, CCTV cameras, security systems, renewable energy, solar panels, surveillance cameras"
        />
      </Helmet>

      <main className="min-h-screen theme-transition">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Products Showcase */}
        <ProductsShowcase />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Brands We Work With */}
        <BrandsSection />

        {/* Call to Action */}
        <CtaSection />
      </main>
    </>
  )
}

export default Home
