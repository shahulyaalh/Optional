"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import axios from "axios"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import Section from "../components/ui/Section"
import Button from "../components/ui/Button"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await axios.post("https://stair-deploy-6.onrender.com/api/send-email", formData)
      if (res.data.success) {
        setSuccess(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Email Error:", err)
      setError("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "No.12, 1st Floor, Sundaram Complex, Rahman nagar, Thanjavur P&t Colony, Thanjavur-613006, Tamil Nadu.",
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/20",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: "+91 73057 81227",
      link: "tel:+917305781227",
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "stairecosystem@gmail.com",
      link: "mailto:stairecosystem@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Monday - Saturday: 9:00 AM - 6:00 PM",
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us | Stair Ecosystem</title>
        <meta
          name="description"
          content="Get in touch with Stair Ecosystem for solar energy and CCTV security solutions. We're here to answer your questions and provide expert advice."
        />
      </Helmet>

      <main className="pt-20 theme-transition">
        {/* Hero Section */}
        <Section background="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100"
            >
              We'd love to hear from you. Reach out to us for any inquiries or to schedule a consultation.
            </motion.p>
          </div>
        </Section>

        {/* Contact Information */}
        <Section>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`${item.bgColor} ${item.color} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">{item.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact Form & Map */}
        <Section background="bg-gray-50 dark:bg-gray-800">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Send Us a Message</h2>

              {success && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Message sent successfully! We'll get back to you shortly.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <Button type="submit" disabled={loading} variant="gradient" size="lg" className="w-full sm:w-auto">
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Our Location</h2>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5632502538403!2d79.1293!3d10.7870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453039%3A0x1d16cc9ef3b20981!2sThanjavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stair Ecosystem Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>
    </>
  )
}

export default Contact
