import React from 'react'
import { HiStar, HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, textVariant } from '../ultils/motion'
import heroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section
      id='home'
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left column */}
      <motion.div
        variants={slideIn('left', 'spring', 0.2, 1.2)}
        initial="hidden"
        animate="show"
        className="w-full md:w-1/2 ml-0 md:ml-16"
      >
        {/* Tagline */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          className="flex items-center bg-gray-50 w-fit px-4 py-2 rounded-full gap-2 hover:bg-blue-200 transition-colors cursor-pointer group"
        >
          <span className="text-blue-500 text-xl group-hover:text-red-500">
            <HiStar />
          </span>
          <span className="text-sm font-bold text-gray-800">Jump start your growth</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textVariant(0.4)}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mt-6"
        >
          We boost the growth for <br />
          <span className="text-blue-500">Startup to Fortune 500 Companies</span>
          <span className="animate-pulse"> ⏰</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-600 mt-6 max-w-lg"
        >
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </motion.p>

        {/* Email Input & Button */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          className="mt-6 flex items-center gap-4 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Email address..."
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all">
            <HiArrowRight />
          </button>
        </motion.div>
      </motion.div>

      {/* right column */}
      <motion.div
        variants={slideIn('right', 'spring', 0.3, 1.2)}
        initial="hidden"
        animate="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 px-4 pl-0 md:pl-12"
      >
        <div className="relative">
          <motion.img
            src={heroImage}
            alt="Hero"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.02 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
