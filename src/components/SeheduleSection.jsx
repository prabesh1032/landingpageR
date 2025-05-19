import React from 'react'
import ScheduleImage from '../assets/stats.webp'
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleSection = () => {
    return (
        <section className='max-w-7xl mx-auto ml-24 px-4 sm:px-6 md:py-24 py-16' >
            <div className='flex flex-col md:flex-row items-center p-12 justify-between gap-12 md:gap-24'>
                {/* left */}
                <div className='md:w-1/2 w-full'>
                    <img src={ScheduleImage} alt="ScheduleImage" className='w-full h-auto' />
                </div>

                {/* right */}
                <div className='md:w-1/2 w-full'>
                    <p className='text-orange-500 font-semibold'>SCHEDULE</p>

                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6'>
                        StreamLine Your Business <br /> With Smart Scheduling Solution
                    </h2>

                    <p className='text-gray-600 mb-8'>
                        Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.
                    </p>

                    <a href="#" className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                        Explore Scheduling Features
                        <FaLongArrowAltRight className='w-5 h-5 relative top-[1px]' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ScheduleSection