"use client"

import { motion } from "framer-motion"
import { Helmet } from "react-helmet-async"
import { CheckCircle, Users, Award, Clock } from "lucide-react"
import Section from "../components/ui/Section"
import SectionHeading from "../components/ui/SectionHeading"

const About = () => {
  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Stair Ecosystem was established with a vision to provide sustainable energy solutions.",
    },
    {
      year: "2017",
      title: "Expanded to Security Systems",
      description: "Added CCTV and security solutions to our product offerings.",
    },
    {
      year: "2019",
      title: "100+ Projects Milestone",
      description: "Successfully completed over 100 solar and security installations.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Received award for excellence in renewable energy solutions.",
    },
    {
      year: "2023",
      title: "New Headquarters",
      description: "Moved to our current location with expanded operations and team.",
    },
  ]

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "/team/ceo.jpg",
      bio: "With over 15 years in renewable energy, Rajesh leads our vision for sustainable solutions.",
    },
    {
      name: "Priya Patel",
      role: "Technical Director",
      image: "/team/technical-director.jpg",
      bio: "Priya oversees all technical aspects of our solar and security installations.",
    },
    {
      name: "Amit Kumar",
      role: "Head of Sales",
      image: "/team/sales-head.jpg",
      bio: "Amit ensures our customers receive the perfect solutions for their needs.",
    },
  ]

  const values = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Quality",
      description: "We never compromise on the quality of our products and services.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focus",
      description: "Our customers' needs and satisfaction are at the center of everything we do.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, no matter how big or small.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "We deliver on our promises and stand behind our work with strong warranties.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Stair Ecosystem</title>
        <meta
          name="description"
          content="Learn about Stair Ecosystem's journey, our team, and our commitment to providing sustainable energy and security solutions."
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
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-blue-100"
            >
              Powering a sustainable future through innovation and excellence
            </motion.p>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To provide innovative, sustainable energy and security solutions that empower our customers to reduce
                their environmental impact while enhancing their safety and comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-400">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300">
                To be the leading provider of integrated solar energy and security solutions in India, known for
                quality, innovation, and exceptional customer service.
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Company Timeline */}
        <Section background="bg-gray-50 dark:bg-gray-800">
          <SectionHeading
            title="Our Journey"
            subtitle="The key milestones that have shaped Stair Ecosystem over the years"
          />

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex mb-8 relative"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[39px] top-12 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
                )}

                {/* Year bubble */}
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0 z-10">
                  <span className="text-blue-700 dark:text-blue-400 font-bold">{item.year}</span>
                </div>

                {/* Content */}
                <div className="ml-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Our Values */}
        <Section>
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do at Stair Ecosystem"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4 text-blue-700 dark:text-blue-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Team Section */}
        <Section background="bg-gray-50 dark:bg-gray-800">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The dedicated professionals behind Stair Ecosystem's success"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || `/placeholder.svg?height=256&width=384`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{member.name}</h3>
                  <p className="text-blue-700 dark:text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </main>
    </>
  )
}

export default About
