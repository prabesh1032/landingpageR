import React from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { BsStack } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { BiTime } from 'react-icons/bi'

const services = [
    {
        icon: <BsStack className="w-8 h-8 text-indigo-600" />,
        title: "Web Design",
        description: "One for all and all for one, Muskehounds are always ready.",
        link: "#learn-more"
    },
    {
        icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
        title: "Ad-Creatives",
        description: "Alphabet Village and the subline of her own road.",
        link: "#learn-more"
    },
    {
        icon: <FiSettings className="w-8 h-8 text-red-400" />,
        title: "Automation",
        description: "Little Blind Text should turn around and return.",
        link: "#learn-more"
    },
    {
        icon: <BiTime className="w-8 h-8 text-cyan-400" />,
        title: "Infographics",
        description: "Nothing the copy said could convince her.",
        link: "#learn-more"
    }
]

const ServicesSection = () => {
    return (
        <section className='container mx-auto px-6 lg:px-16 py-12 ml-24'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
                {/* header */}
                <div className='md:w-1/3 w-full mb-10'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-6 md:w-4/5'>
                        Future of Support with new shape
                    </h2>
                    <p className='text-gray-600 text-lg mb-4 md:w-4/5'>
                        Discuss your goals, determine your success metrics, identify problems
                    </p>

                    <div className='space-y-3'>
                        <div className='flex items-center gap-4'>
                            <FaDotCircle className='text-indigo-600 text-lg' />
                            <span>Ux design context strategy</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FaDotCircle className='text-indigo-600 text-lg' />
                            <span>Development bring</span>
                        </div>
                    </div>

                    <button className='mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full cursor-pointer hover:bg-indigo-700 transition-colors duration-300'>
                        Get Started
                    </button>
                </div>

                {/* service cards */}
                <div className='grid grid-cols-1 p-24 md:grid-cols-2 gap-8 w-full md:w-2/3'>
                    {
                        services.map((service, index) => (
                            <div
                                key={index}
                                className='max-w-72 p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105'
                            >
                                <div className='mb-4'>
                                    {service.icon}
                                    <h3 className='text-xl mb-2 font-semibold'>{service.title}</h3>
                                </div>
                                <p className='text-gray-600 mb-4'>{service.description}</p>
                                <a href={service.link} className='text-indigo-600 font-medium hover:text-indigo-700 transition-colors'>
                                    Learn More
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
