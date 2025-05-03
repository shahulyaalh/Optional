"use client"

import React from "react"
import { cn } from "../../lib/utils"
import { motion } from "framer-motion"

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
  ...props
}) => {
  const canvasRef = React.useRef(null)
  const [particles, setParticles] = React.useState([])
  const [animationFrame, setAnimationFrame] = React.useState(null)
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = React.useState(false)

  React.useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      // Reset the isMouseMoving state after a short delay
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        setIsMouseMoving(false)
      }, 200)
    }

    // Create and add particles
    const initParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / (10000 / (particleDensity || 1)))
      const newParticles = []

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: Math.random() * speed - speed / 2,
          speedY: Math.random() * speed - speed / 2,
          color: particleColor,
          blinkRate: Math.random() * 0.015 + 0.005,
          blinkState: Math.random(),
        })
      }

      setParticles(newParticles)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    let mouseTimeout

    // Initialize particles
    initParticles()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(mouseTimeout)
      cancelAnimationFrame(animationFrame)
    }
  }, [minSize, maxSize, speed, particleColor, particleDensity])

  React.useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle, index) => {
        // Update blink state
        particle.blinkState += particle.blinkRate
        if (particle.blinkState > 1 || particle.blinkState < 0) {
          particle.blinkRate = -particle.blinkRate
        }

        // Draw with opacity based on blink state
        const opacity = 0.3 + particle.blinkState * 0.7 // Range from 0.3 to 1
        ctx.fillStyle = `${particle.color}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Mouse attraction
        if (isMouseMoving) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const force = Math.min(50 / distance, 0.5)

          if (distance < 150) {
            particle.speedX += (dx / distance) * force
            particle.speedY += (dy / distance) * force
          }
        }

        // Apply drag
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        // Update particle in state
        particles[index] = particle
      })

      const frame = requestAnimationFrame(animate)
      setAnimationFrame(frame)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [particles, isMouseMoving, mousePosition])

  return (
    <div className={cn("fixed inset-0 flex items-center justify-center", className)} {...props}>
      <canvas
        ref={canvasRef}
        id={id}
        className="absolute inset-0 h-full w-full"
        style={{
          background: background || "transparent",
        }}
      />
    </div>
  )
}

export const SparklesPreview = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="relative z-20 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:text-7xl text-center bg-clip-text text-transparent text-4xl font-bold bg-gradient-to-b from-white to-gray-400"
        >
          Clear Vision With Clean Energy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center text-gray-300 mt-4 max-w-xl mx-auto px-4"
        >
          Stair Ecosystem — Creating a sustainable future with cutting-edge solar and security solutions.
        </motion.p>
      </div>
      <SparklesCore
        id="sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.5}
        particleDensity={20}
        speed={0.3}
        particleColor="#4080ff"
        className="w-full h-full"
      />
    </div>
  )
}
