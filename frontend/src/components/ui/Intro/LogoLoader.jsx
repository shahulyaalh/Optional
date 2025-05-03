"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import logo from "../../../assets/logo.png"

const CinematicLogoLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0) // 0: initial, 1: particles, 2: logo reveal, 3: glow, 4: complete
  const particlesRef = useRef([])
  const canvasRef = useRef(null)

  // Generate particles for the animation
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const particleCount = 150

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 3,
      speedY: (Math.random() - 0.5) * 3,
      color: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`, // Blue-ish colors
    }))

    // Animation timeline
    const timeline = () => {
      setTimeout(() => setStage(1), 300) // Start particles
      setTimeout(() => setStage(2), 1500) // Show logo
      setTimeout(() => setStage(3), 2500) // Glow effect
      setTimeout(() => {
        setStage(4)
        setTimeout(onComplete, 700) // Complete after glow
      }, 3500)
    }

    timeline()

    // Animation loop for particles
    let animationId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }

        // Gravitational pull to center when stage >= 2
        if (stage >= 2) {
          const dx = canvas.width / 2 - particle.x
          const dy = canvas.height / 2 - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          particle.speedX += (dx / distance) * 0.2
          particle.speedY += (dy / distance) * 0.2

          // Add some friction
          particle.speedX *= 0.98
          particle.speedY *= 0.98
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [onComplete])

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ opacity: stage >= 1 ? 1 : 0, transition: "opacity 0.5s ease" }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-20"
        initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
        animate={{
          scale: stage >= 2 ? 1 : 0.5,
          opacity: stage >= 2 ? 1 : 0,
          rotateY: stage >= 2 ? 0 : 90,
        }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      >
        <img
          src={logo || "/placeholder.svg"}
          alt="Company Logo"
          className="w-32 h-32 object-contain"
          style={{
            filter: stage >= 3 ? `drop-shadow(0 0 10px rgba(78, 169, 255, 0.8))` : "none",
            transition: "filter 0.8s ease",
          }}
        />
      </motion.div>

      {/* Company name reveal */}
      <motion.div
        className="absolute bottom-40 left-0 right-0 text-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: stage >= 3 ? 1 : 0,
          y: stage >= 3 ? 0 : 20,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-2xl font-bold tracking-wider">STAIR ECOSYSTEM</h1>
        <p className="text-blue-300 mt-2 text-sm">Solar Energy & CCTV Solutions</p>
      </motion.div>
    </div>
  )
}

export default CinematicLogoLoader
