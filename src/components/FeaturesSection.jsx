import React from 'react'
import { motion as Motion } from 'framer-motion'
import { staggerContainer, fadeIn } from '../ultils/motion'

const FeaturesSection = () => {
    const features = [
        {
            icon: "🔍",
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
            icon: "⚙️",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models"
        },
        {
            icon: "🚀",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing"
        }
    ]

    return (
    <Motion.section
            id='features'
            variants={staggerContainer(0.12, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className='container mx-auto px-4 sm:px-6 md:px-8 py-16'
        >

            {/* heading texts */}
            <div className='text-center mb-16'>
                <h2 className='text-3xl font-bold mb-4 '>How can we help your business?</h2>
                <p className='text-gray-600 '>when you resell besnik, you build trust and increse</p>
            </div>

            {/* features box */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mb-8'>
                {
                    features.map((feature, index) => (
                            <Motion.div variants={fadeIn('up', 0.12)} className='flex flex-col items-center p-6 text-center' key={index}>
                            <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center bg-gray-100 shadow-md mx-auto'>
                                <div className='text-3xl'>{feature.icon}</div>
                            </div>
                            <h3 className='text-2xl font-semibold mb-3'>{feature.title}</h3>
                            <p className='text-gray-500 text-centre'>{feature.description}</p>
                        </Motion.div>
                    ))
                }
            </div>
            {/* button */}
            <div className='text-center'>
                <button className='bg-blue-600 cursor-pointer px-8 py-3  text-white rounded-full  hover:bg-blue-700 transition-colors relative'>
                    Become a Partner
                </button>
            </div>

    </Motion.section>
    )
}

export default FeaturesSection
